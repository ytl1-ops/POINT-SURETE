#!/usr/bin/env python3
"""Genere un brief de renseignement Markdown a partir de data/latest.json (POINT SURETE)."""
import argparse
import json
import sys
from datetime import datetime, timezone, timedelta
from pathlib import Path

NIVEAU_CRIT = {"CRITIQUE": 4, "ELEVE": 3, "MODERE": 2, "FAIBLE": 1}
NIVEAU_ZONE = {"ROUGE": 4, "ORANGE": 3, "JAUNE": 2, "VERT": 1}


def parse_iso(s):
    if not s:
        return None
    return datetime.fromisoformat(s.replace("Z", "+00:00"))


def fmt_aggravants(aggravants):
    """Les aggravants d'un fait sont des objets {l, v} (libelle, poids) ; ceux d'une zone sont de simples chaines."""
    if not aggravants:
        return ""
    libelles = [a.get("l", str(a)) if isinstance(a, dict) else str(a) for a in aggravants]
    return ", ".join(libelles)


def fmt_dt(dt):
    if dt is None:
        return "?"
    return dt.strftime("%Y-%m-%d %H:%M UTC")


def age_str(dt, now):
    if dt is None:
        return "age inconnu"
    delta = now - dt
    h = delta.total_seconds() / 3600
    if h < 1:
        return f"il y a {int(delta.total_seconds() / 60)} min"
    return f"il y a {h:.1f} h"


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--data", default="data/latest.json", help="chemin vers latest.json")
    ap.add_argument("--zones", default="data/zones.json", help="chemin vers zones.json (optionnel, non requis si zones deja dans latest.json)")
    ap.add_argument("--pays", default=None, help="filtrer par code(s) pays, separes par virgule (ex: CI,ML)")
    ap.add_argument("--zone", default=None, help="filtrer par sous-chaine de nom de zone (insensible a la casse)")
    ap.add_argument("--min-criticite", default="ELEVE", choices=list(NIVEAU_CRIT.keys()),
                     help="niveau de criticite minimum pour la section faits marquants (defaut: ELEVE)")
    ap.add_argument("--heures", type=float, default=None,
                     help="ne considerer que les faits survenus dans les N dernieres heures (defaut: toute la fenetre du fichier)")
    ap.add_argument("--max-faits", type=int, default=15, help="nombre max de faits marquants a lister")
    ap.add_argument("--max-zones", type=int, default=10, help="nombre max de zones a risque a lister")
    ap.add_argument("--max-corridors", type=int, default=8, help="nombre max de corridors a lister")
    ap.add_argument("--sortie", default=None, help="chemin du fichier Markdown de sortie (defaut: stdout)")
    ap.add_argument("--stale-heures", type=float, default=36,
                     help="au-dela de cet age, la collecte est signalee comme perimee (defaut: 36h)")
    args = ap.parse_args()

    data_path = Path(args.data)
    if not data_path.exists():
        print(f"ERREUR: fichier introuvable: {data_path}", file=sys.stderr)
        print("Lancez d'abord la collecte : npm run collecte  (ou npm run collecte:rapide)", file=sys.stderr)
        sys.exit(1)

    with open(data_path, encoding="utf-8") as f:
        d = json.load(f)

    now = datetime.now(timezone.utc)
    genere_le = parse_iso(d.get("genere_le"))
    stale = genere_le is not None and (now - genere_le) > timedelta(hours=args.stale_heures)
    # Le filtre --heures est relatif a l'heure de la collecte, pas a l'heure d'execution du
    # rapport : sinon un brief lance longtemps apres une collecte non rafraichie renverrait
    # 0 resultat alors que les faits sont bien "recents" par rapport a la collecte elle-meme.
    reference = genere_le or now

    faits = d.get("faits", [])
    zones = d.get("zones", [])
    corridors = d.get("corridors", [])
    marche = d.get("marche", {})

    pays_filtre = None
    if args.pays:
        pays_filtre = {p.strip().upper() for p in args.pays.split(",") if p.strip()}

    def garde_fait(f):
        if pays_filtre and (f.get("pays") or "").upper() not in pays_filtre:
            return False
        if args.zone and args.zone.lower() not in (f.get("zone") or "").lower():
            return False
        if args.heures is not None:
            sd = parse_iso(f.get("survenu_le"))
            if sd is None or (reference - sd) > timedelta(hours=args.heures):
                return False
        return True

    faits_filtres = [f for f in faits if garde_fait(f)]

    dates_survenues = [parse_iso(f.get("survenu_le")) for f in faits_filtres]
    dates_survenues = [dt for dt in dates_survenues if dt is not None]
    periode_min = min(dates_survenues) if dates_survenues else None
    periode_max = max(dates_survenues) if dates_survenues else None

    seuil = NIVEAU_CRIT.get(args.min_criticite.upper(), 3)
    marquants = [f for f in faits_filtres if NIVEAU_CRIT.get((f.get("criticite") or "").upper(), 0) >= seuil]
    marquants.sort(key=lambda f: (
        -NIVEAU_CRIT.get((f.get("criticite") or "").upper(), 0),
        -(f.get("fiabilite") or 0),
    ))

    def garde_zone(z):
        if pays_filtre and (z.get("pays") or "").upper() not in pays_filtre:
            return False
        if args.zone and args.zone.lower() not in (z.get("zone") or "").lower():
            return False
        return True

    zones_filtrees = [z for z in zones if garde_zone(z)]
    zones_risque = [z for z in zones_filtrees if (z.get("niveau") or "").upper() in ("ROUGE", "ORANGE")]
    zones_risque.sort(key=lambda z: (
        -NIVEAU_ZONE.get((z.get("niveau") or "").upper(), 0),
        -(z.get("score") or 0),
    ))

    corridors_tries = sorted(corridors, key=lambda c: -(c.get("score") or 0))
    corridors_risque = [c for c in corridors_tries if (c.get("niveau") or "").upper() in ("ROUGE", "ORANGE")]
    if not corridors_risque:
        corridors_risque = corridors_tries[: args.max_corridors]

    lignes = []
    lignes.append("# Brief de renseignement — POINT SURETE")
    lignes.append("")
    lignes.append(f"*Genere le {fmt_dt(now)}*")
    lignes.append("")

    lignes.append("## Vue d'ensemble")
    lignes.append("")
    lignes.append(f"- Collecte source : {fmt_dt(genere_le)} ({age_str(genere_le, now)})" + (" — **PERIMEE, relancer `npm run collecte`**" if stale else ""))
    lignes.append(f"- Profondeur de collecte : {d.get('profondeur', '?')}")
    lignes.append(f"- Flux interroges / joignables : {d.get('flux_interroges', '?')} / {d.get('flux_joignables', '?')}")
    if periode_min and periode_max:
        lignes.append(f"- Periode couverte par les faits retenus : {fmt_dt(periode_min)} → {fmt_dt(periode_max)}")
    filtre_desc = []
    if pays_filtre:
        filtre_desc.append(f"pays={','.join(sorted(pays_filtre))}")
    if args.zone:
        filtre_desc.append(f"zone~='{args.zone}'")
    if args.heures is not None:
        filtre_desc.append(f"fenetre={args.heures}h")
    lignes.append(f"- Filtres appliques : {', '.join(filtre_desc) if filtre_desc else 'aucun'}")
    lignes.append(f"- Faits retenus : {len(faits_filtres)} (sur {len(faits)} au total dans la collecte)")
    lignes.append("")

    lignes.append(f"## Faits marquants (criticite ≥ {args.min_criticite.upper()})")
    lignes.append("")
    if not marquants:
        lignes.append("_Aucun fait ne depasse ce seuil de criticite sur le perimetre selectionne._")
    else:
        for f in marquants[: args.max_faits]:
            zone_pays = f.get("zone") or "?"
            if f.get("pays"):
                zone_pays += f" ({f['pays']})"
            lignes.append(f"### [{f.get('criticite', '?')}] {f.get('titre', '(sans titre)')}")
            lignes.append(f"- Zone : {zone_pays} · Categorie : {f.get('categorie', '?')} · Fiabilite : {f.get('fiabilite', '?')}/100")
            lignes.append(f"- Survenu : {fmt_dt(parse_iso(f.get('survenu_le')))} · Source : {f.get('source', '?')}")
            if f.get("aggravants"):
                lignes.append(f"- Aggravants : {fmt_aggravants(f['aggravants'])}")
            if f.get("resume"):
                lignes.append(f"- {f['resume']}")
            if f.get("lien"):
                lignes.append(f"- [Lien source]({f['lien']})")
            lignes.append("")
        if len(marquants) > args.max_faits:
            lignes.append(f"_... et {len(marquants) - args.max_faits} autre(s) fait(s) au-dela de cette liste._")
            lignes.append("")

    lignes.append("## Zones a risque (ROUGE / ORANGE)")
    lignes.append("")
    if not zones_risque:
        lignes.append("_Aucune zone au niveau ROUGE ou ORANGE sur le perimetre selectionne._")
    else:
        lignes.append("| Zone | Pays | Niveau | Score | Faits | Critiques | Eleves | Aggravants |")
        lignes.append("|---|---|---|---|---|---|---|---|")
        for z in zones_risque[: args.max_zones]:
            lignes.append(
                f"| {z.get('zone', '?')} | {z.get('pays', '?')} | {z.get('niveau', '?')} | {z.get('score', '?')} "
                f"| {z.get('faits', '?')} | {z.get('critiques', 0)} | {z.get('eleves', 0)} | {fmt_aggravants(z.get('aggravants')) or '—'} |"
            )
        if len(zones_risque) > args.max_zones:
            lignes.append("")
            lignes.append(f"_... et {len(zones_risque) - args.max_zones} autre(s) zone(s) a risque._")
    lignes.append("")

    lignes.append("## Corridors logistiques a surveiller")
    lignes.append("")
    if not corridors_risque:
        lignes.append("_Aucune donnee de corridor disponible._")
    else:
        for c in corridors_risque[: args.max_corridors]:
            lignes.append(f"- **{c.get('nom', '?')}** — {c.get('niveau', '?')} (score {c.get('score', '?')}) — {c.get('sous_titre', '')}")
    lignes.append("")

    lignes.append("## Marche (BRVM)")
    lignes.append("")
    if marche.get("actions_disponible") and marche.get("actions"):
        actions = sorted(marche["actions"], key=lambda a: -(a.get("variation") or 0))
        hausses = [a for a in actions if (a.get("variation") or 0) > 0][:5]
        baisses = sorted([a for a in actions if (a.get("variation") or 0) < 0], key=lambda a: a.get("variation") or 0)[:5]
        if hausses:
            lignes.append("**Plus fortes hausses**")
            for a in hausses:
                lignes.append(f"- {a.get('ticker', '?')} : {a.get('valeur', '?')} ({a.get('variation', 0):+.2f}%)")
            lignes.append("")
        if baisses:
            lignes.append("**Plus fortes baisses**")
            for a in baisses:
                lignes.append(f"- {a.get('ticker', '?')} : {a.get('valeur', '?')} ({a.get('variation', 0):+.2f}%)")
            lignes.append("")
    else:
        lignes.append(f"_Donnees de marche indisponibles ({marche.get('erreur', 'raison inconnue')})._")
    lignes.append("")

    sortie = "\n".join(lignes)

    if args.sortie:
        Path(args.sortie).write_text(sortie, encoding="utf-8")
        print(f"Brief ecrit dans {args.sortie}", file=sys.stderr)
    else:
        print(sortie)


if __name__ == "__main__":
    main()
