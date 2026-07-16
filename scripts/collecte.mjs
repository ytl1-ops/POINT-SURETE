/* ==================================================================
   POINT SÛRETÉ — collecteur serveur
   Exécuté par GitHub Actions. Aucun CORS côté serveur : les flux RSS
   sont interrogés en direct, sans relais.

   Sorties :
     1. data/latest.json  — flux des 24h + scores de zone (commit dans le dépôt,
                            servi par GitHub Pages et Firebase Hosting)
     2. data/zones.json   — niveaux de zone seuls (léger, pour widgets/cartes)
     3. Supabase          — table `faits` (historique complet, recherche, API)

   Variables d'environnement attendues (GitHub Secrets) :
     SUPABASE_URL         https://xxxx.supabase.co
     SUPABASE_SERVICE_KEY clé service_role — ne JAMAIS la committer
     PROFONDEUR           rapide | standard | profond   (défaut : profond)
   ================================================================== */

import { writeFile, mkdir } from "node:fs/promises";
import { XMLParser } from "fast-xml-parser";
import {
  PAYS, ZONES, CORRIDORS, NAT, listeFlux, detecter, criticite,
  categorie, aggravants, scoreZone, niveau, norm
} from "./moteur.mjs";

const SB_URL = process.env.SUPABASE_URL || "";
const SB_KEY = process.env.SUPABASE_SERVICE_KEY || "";
const PROF   = process.env.PROFONDEUR || "profond";
const LOT    = 8;          // flux interrogés en parallèle
const DELAI  = 15000;      // ms

const parser = new XMLParser({ ignoreAttributes:false, attributeNamePrefix:"@_" });
const log = (...a) => console.log(new Date().toISOString().slice(11,19), ...a);

async function lire(url){
  const ctrl = new AbortController();
  const t = setTimeout(()=>ctrl.abort(), DELAI);
  try{
    const r = await fetch(url, {
      signal: ctrl.signal,
      headers:{ "User-Agent":"POINT-SURETE/1.0 (veille sûreté; contact via dépôt GitHub)", "Accept":"application/rss+xml, application/xml, text/xml, */*" }
    });
    if(!r.ok) return null;
    const xml = await r.text();
    const d = parser.parse(xml);
    const items = d?.rss?.channel?.item || d?.feed?.entry || d?.["rdf:RDF"]?.item || [];
    return (Array.isArray(items) ? items : [items]).map(i => ({
      t: typeof i.title === "object" ? i.title["#text"] : i.title,
      l: typeof i.link === "object" ? (i.link["@_href"] || i.link["#text"]) : i.link,
      d: i.pubDate || i.published || i.updated || i["dc:date"] || i.date,
      r: (typeof i.description === "object" ? i.description["#text"] : i.description) || i.summary || i.content || ""
    }));
  } catch(e){ return null; }
  finally { clearTimeout(t); }
}

function qualifier(it, src){
  if(!it?.t) return null;
  const titre = String(it.t).replace(/\s+-\s+[^-]{2,40}$/,"").trim();   // Google News suffixe le média
  if(titre.length < 12) return null;
  const brut = String(it.r||"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();
  const texte = titre + " " + brut;
  const ts = Date.parse(it.d);
  if(isNaN(ts) || ts > Date.now() + 3600e3) return null;                 // date absente ou future → écarté
  const geo = detecter(texte) || (src.zone ? {pays:src.p, zone:src.zone, localite:src.zone} : null);
  return {
    h: norm(titre).slice(0,90),
    titre,
    lien: it.l || null,
    survenu_le: new Date(ts).toISOString(),
    pays: geo?.pays ?? null,
    zone: geo?.zone ?? null,
    localite: geo?.localite ?? null,
    criticite: criticite(texte),
    categorie: categorie(texte),
    source: src.n,
    fiabilite: src.f,
    aggravants: aggravants(texte),
    resume: brut.slice(0,320) || null
  };
}

async function versSupabase(faits){
  if(!SB_URL || !SB_KEY){ log("Supabase non configuré — étape ignorée."); return 0; }
  let n = 0;
  for(let i=0; i<faits.length; i+=200){
    const paquet = faits.slice(i, i+200);
    const r = await fetch(`${SB_URL}/rest/v1/faits?on_conflict=h`, {
      method:"POST",
      headers:{
        "apikey": SB_KEY,
        "Authorization": `Bearer ${SB_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates,return=minimal"
      },
      body: JSON.stringify(paquet)
    });
    if(r.ok) n += paquet.length;
    else log("Supabase refusé :", r.status, (await r.text()).slice(0,200));
  }
  // rafraîchit la table de scores
  await fetch(`${SB_URL}/rest/v1/rpc/rafraichir_scores`, {
    method:"POST",
    headers:{ "apikey":SB_KEY, "Authorization":`Bearer ${SB_KEY}`, "Content-Type":"application/json" },
    body:"{}"
  }).catch(()=>{});
  return n;
}

async function main(){
  const flux = listeFlux(PROF, { paysActifs:Object.keys(PAYS), zonePriorite:process.env.ZONE_PRIORITAIRE || "", inclureRadios:true });
  log(`Collecte ${PROF} — ${flux.length} flux, ${ZONES.length} zones, ${NAT.length} sources fixes.`);
  const vus = new Set();
  const faits = [];
  const echecs = [];
  let ok = 0;

  async function traiterLot(liste, estRelance){
    let reussis = 0;
    for(let i=0; i<liste.length; i+=LOT){
      await Promise.all(liste.slice(i, i+LOT).map(async s => {
        const d = await lire(s.u);
        if(!d?.length){ if(!estRelance) echecs.push(s); return; }
        reussis++;
        for(const it of d){
          const f = qualifier(it, s);
          if(!f || vus.has(f.h)) continue;
          vus.add(f.h);
          faits.push(f);
        }
      }));
      log(`  ${estRelance?"[relance] ":""}${Math.min(i+LOT, liste.length)}/${liste.length} — ${faits.length} faits cumulés`);
    }
    return reussis;
  }

  ok += await traiterLot(flux, false);
  if(echecs.length){
    log(`Seconde passe — ${echecs.length} flux injoignables au premier essai.`);
    await new Promise(r => setTimeout(r, 4000));   // laisser respirer les serveurs distants
    ok += await traiterLot(echecs, true);
  }

  faits.sort((a,b)=> Date.parse(b.survenu_le) - Date.parse(a.survenu_le));
  const h24 = faits.filter(f => Date.parse(f.survenu_le) > Date.now() - 24*3600e3);

  const zones = ZONES.map(z => {
    const s = scoreZone(h24.filter(f => f.zone === z.z));
    return { zone:z.z, pays:z.p, district:z.d, ...s };
  }).sort((a,b)=> b.score - a.score);

  const corridors = CORRIDORS.map(c => {
    const ss = c.z.map(zn => zones.find(x=>x.zone===zn)?.score ?? 0);
    const sc = Math.round(Math.max(...ss)*0.6 + (ss.reduce((a,b)=>a+b,0)/ss.length)*0.4);
    return { nom:c.n, sous_titre:c.s, score:sc, niveau:niveau(sc), zones:c.z.map((zn,i)=>({zone:zn, score:ss[i]})) };
  });

  await mkdir("data", { recursive:true });
  await writeFile("data/latest.json", JSON.stringify({
    genere_le: new Date().toISOString(),
    profondeur: PROF,
    flux_interroges: flux.length,
    flux_joignables: ok,
    faits: h24.slice(0,600),
    zones, corridors
  }));
  await writeFile("data/zones.json", JSON.stringify({ genere_le:new Date().toISOString(), zones, corridors }));

  const n = await versSupabase(faits.slice(0,1500));
  log(`Terminé — ${ok}/${flux.length} flux joignables · ${faits.length} faits (${h24.length} sur 24h) · ${n} envoyés à Supabase.`);
  log(`Zones en tension : ${zones.filter(z=>["ROUGE","MARRON"].includes(z.niveau)).map(z=>z.zone+" ("+z.score+")").join(", ") || "aucune"}`);

  if(ok === 0){ console.error("Aucun flux joignable — sortie en échec."); process.exit(1); }
}

main().catch(e => { console.error(e); process.exit(1); });

main().catch(e => { console.error(e); process.exit(1); });
