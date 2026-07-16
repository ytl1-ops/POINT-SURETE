/* ==================================================================
   POINT SÛRETÉ — moteur de qualification (source de vérité)
   Utilisé côté serveur par scripts/collecte.mjs (GitHub Actions).
   L'application HTML embarque une copie de ce maillage pour le mode
   hors-ligne ; toute évolution du périmètre se fait ICI en premier.
   ================================================================== */

export const PAYS = {
  CI:{n:"Côte d'Ivoire", f:"🇨🇮", gl:"CI", lang:"fr", pivot:true},
  BF:{n:"Burkina Faso",  f:"🇧🇫", gl:"BF", lang:"fr"},
  ML:{n:"Mali",          f:"🇲🇱", gl:"ML", lang:"fr"},
  GN:{n:"Guinée",        f:"🇬🇳", gl:"GN", lang:"fr"},
  LR:{n:"Libéria",       f:"🇱🇷", gl:"LR", lang:"en"},
  GH:{n:"Ghana",         f:"🇬🇭", gl:"GH", lang:"en"}
};

export const ZONES = [
{p:"CI",z:"Abidjan",d:"District autonome",loc:["Abidjan","Abobo","Adjamé","Attécoubé","Cocody","Koumassi","Marcory","Plateau","Port-Bouët","Treichville","Yopougon","Anyama","Bingerville","Songon","Vridi","Riviera","Angré","Adjouffou","Niangon","Williamsville","Gesco"]},
{p:"CI",z:"Yamoussoukro",d:"District autonome",loc:["Yamoussoukro","Attiégouakro","Kossou","Lolobo"]},
{p:"CI",z:"Gbôklé",d:"Bas-Sassandra",loc:["Sassandra","Fresco","Dakpadou"]},
{p:"CI",z:"Nawa",d:"Bas-Sassandra",loc:["Soubré","Buyo","Guéyo","Méagui","Oupoyo"]},
{p:"CI",z:"San-Pédro",d:"Bas-Sassandra",loc:["San-Pédro","San Pedro","Tabou","Grand-Béréby","Grabo","Doba","Olodio"]},
{p:"CI",z:"Indénié-Djuablin",d:"Comoé",loc:["Abengourou","Agnibilékrou","Bettié","Zaranou","Niablé"]},
{p:"CI",z:"Sud-Comoé",d:"Comoé",loc:["Aboisso","Adiaké","Grand-Bassam","Tiapoum","Ayamé","Noé","Bonoua","Maféré","Assinie","Étuéboué"]},
{p:"CI",z:"Folon",d:"Denguélé",loc:["Minignan","Kaniasso","Goulia"]},
{p:"CI",z:"Kabadougou",d:"Denguélé",loc:["Odienné","Madinani","Séguélon","Gbéléban","Samatiguila","Bako"]},
{p:"CI",z:"Gôh",d:"Gôh-Djiboua",loc:["Gagnoa","Oumé","Guibéroua","Ouragahio","Bayota"]},
{p:"CI",z:"Lôh-Djiboua",d:"Gôh-Djiboua",loc:["Divo","Lakota","Guitry","Zikisso","Hiré"]},
{p:"CI",z:"Bélier",d:"Lacs",loc:["Toumodi","Tiébissou","Didiévi","Djékanou","Kokumbo"]},
{p:"CI",z:"Iffou",d:"Lacs",loc:["Daoukro","Prikro","M'Bahiakro","Ouellé"]},
{p:"CI",z:"Moronou",d:"Lacs",loc:["Bongouanou","Arrah","M'Batto","Anoumaba"]},
{p:"CI",z:"N'Zi",d:"Lacs",loc:["Dimbokro","Bocanda","Kouassi-Kouassikro","Bengassou"]},
{p:"CI",z:"Agnéby-Tiassa",d:"Lagunes",loc:["Agboville","Tiassalé","Sikensi","Taabo","Azaguié","N'Douci","Rubino","Céchi"]},
{p:"CI",z:"Grands-Ponts",d:"Lagunes",loc:["Dabou","Jacqueville","Grand-Lahou","Toupah"]},
{p:"CI",z:"La Mé",d:"Lagunes",loc:["Adzopé","Akoupé","Alépé","Yakassé-Attobrou","Afféry"]},
{p:"CI",z:"Cavally",d:"Montagnes",loc:["Guiglo","Bloléquin","Toulépleu","Taï","Péhé","Zéaglo"]},
{p:"CI",z:"Guémon",d:"Montagnes",loc:["Duékoué","Bangolo","Facobly","Kouibly","Guézon"]},
{p:"CI",z:"Tonkpi",d:"Montagnes",loc:["Man","Danané","Biankouma","Zouan-Hounien","Sipilou","Logoualé","Bin-Houyé","Kouan-Houlé"]},
{p:"CI",z:"Haut-Sassandra",d:"Sassandra-Marahoué",loc:["Daloa","Issia","Vavoua","Zoukougbeu","Saïoua"]},
{p:"CI",z:"Marahoué",d:"Sassandra-Marahoué",loc:["Bouaflé","Sinfra","Zuénoula","Gohitafla","Bonon"]},
{p:"CI",z:"Bagoué",d:"Savanes",loc:["Boundiali","Tengréla","Kouto","Kolia","Gbon","Kasséré"]},
{p:"CI",z:"Poro",d:"Savanes",loc:["Korhogo","Sinématiali","Dikodougou","M'Bengué","Karakoro","Napié","Guiembé","Komborodougou"]},
{p:"CI",z:"Tchologo",d:"Savanes",loc:["Ferkessédougou","Ouangolodougou","Kong","Diawala","Niellé","Laleraba","Kaouara","Tougbo","Sikolo"]},
{p:"CI",z:"Gbêkê",d:"Vallée du Bandama",loc:["Bouaké","Béoumi","Sakassou","Botro","Diabo","Brobo","Djébonoua","Bodokro"]},
{p:"CI",z:"Hambol",d:"Vallée du Bandama",loc:["Katiola","Dabakala","Niakaramandougou","Fronan","Tafiré","Niakara","Satama-Sokoro","Bassawa"]},
{p:"CI",z:"Bafing",d:"Woroba",loc:["Touba","Koro","Ouaninou","Booko","Guintéguéla","Borotou"]},
{p:"CI",z:"Béré",d:"Woroba",loc:["Mankono","Dianra","Kounahiri","Marandallah","Sarhala","Tiéningboué"]},
{p:"CI",z:"Worodougou",d:"Woroba",loc:["Séguéla","Kani","Massala","Dualla","Worofla"]},
{p:"CI",z:"Bounkani",d:"Zanzan",loc:["Bouna","Doropo","Téhini","Nassian","Kalamon","Ondéfidouo","Parc de la Comoé"]},
{p:"CI",z:"Gontougo",d:"Zanzan",loc:["Bondoukou","Tanda","Koun-Fao","Transua","Sandégué","Soko","Assuéfry","Tabagne"]},
{p:"BF",z:"Cascades",d:"Frontière CI nord-est",loc:["Banfora","Sidéradougou","Mangodara","Niangoloko","Sindou","Ouo"]},
{p:"BF",z:"Hauts-Bassins",d:"Frontière CI",loc:["Bobo-Dioulasso","Bobo Dioulasso","Orodara","Houndé","Dandé","Karangasso"]},
{p:"BF",z:"Sud-Ouest",d:"Frontière CI est",loc:["Gaoua","Batié","Kampti","Diébougou","Dano","Loropéni"]},
{p:"BF",z:"Centre / Ouagadougou",d:"Capitale",loc:["Ouagadougou","Ouaga","Saaba","Koubri"]},
{p:"BF",z:"Boucle du Mouhoun",d:"Ouest",loc:["Dédougou","Nouna","Solenzo","Toma","Boromo"]},
{p:"BF",z:"Centre-Ouest",d:"Centre",loc:["Koudougou","Réo","Léo","Sapouy"]},
{p:"BF",z:"Sahel",d:"Nord — menace armée",loc:["Dori","Djibo","Gorom-Gorom","Sebba","Arbinda","Soum","Oudalan"]},
{p:"BF",z:"Nord",d:"Nord",loc:["Ouahigouya","Titao","Yako","Gourcy"]},
{p:"BF",z:"Est",d:"Est — menace armée",loc:["Fada N'Gourma","Fada","Pama","Diapaga","Kantchari","Gayéri"]},
{p:"BF",z:"Centre-Est",d:"Sud-est",loc:["Tenkodogo","Garango","Pouytenga","Koupéla","Bittou"]},
{p:"ML",z:"Sikasso",d:"Frontière CI nord",loc:["Sikasso","Kadiolo","Zégoua","Pogo","Kolondiéba","Loulouni","Misséni","Fourou","Niéna"]},
{p:"ML",z:"Bougouni",d:"Frontière CI nord-ouest",loc:["Bougouni","Yanfolila","Kalana","Garalo"]},
{p:"ML",z:"Bamako",d:"Capitale",loc:["Bamako","Kati","Kalabancoro","Baguinéda"]},
{p:"ML",z:"Ségou",d:"Centre",loc:["Ségou","Niono","San","Macina","Markala"]},
{p:"ML",z:"Mopti",d:"Centre — menace armée",loc:["Mopti","Sévaré","Djenné","Bandiagara","Douentza","Bankass","Koro"]},
{p:"ML",z:"Kayes",d:"Ouest",loc:["Kayes","Kita","Nioro","Bafoulabé","Diéma"]},
{p:"ML",z:"Koulikoro",d:"Centre-ouest",loc:["Koulikoro","Kolokani","Banamba","Dioïla","Nara"]},
{p:"ML",z:"Nord",d:"Gao · Tombouctou · Kidal",loc:["Gao","Tombouctou","Kidal","Ménaka","Ansongo","Bourem"]},
{p:"GN",z:"Nzérékoré",d:"Frontière CI ouest",loc:["Nzérékoré","N'Zérékoré","Lola","Beyla","Yomou","Macenta","Guéckédou","Sinko","Bossou"]},
{p:"GN",z:"Kankan",d:"Frontière CI nord-ouest",loc:["Kankan","Siguiri","Mandiana","Kérouané","Kouroussa","Baro"]},
{p:"GN",z:"Conakry",d:"Capitale",loc:["Conakry","Ratoma","Matoto","Kaloum","Dixinn","Coyah"]},
{p:"GN",z:"Faranah",d:"Centre",loc:["Faranah","Dabola","Dinguiraye","Kissidougou"]},
{p:"GN",z:"Kindia",d:"Ouest",loc:["Kindia","Forécariah","Télimélé","Dubréka"]},
{p:"GN",z:"Boké",d:"Nord-ouest",loc:["Boké","Kamsar","Fria","Boffa","Gaoual"]},
{p:"GN",z:"Labé / Mamou",d:"Fouta-Djalon",loc:["Labé","Mamou","Pita","Dalaba","Koubia","Tougué"]},
{p:"LR",z:"Nimba",d:"Frontière CI ouest",loc:["Ganta","Sanniquellie","Yekepa","Nimba","Saclepea","Karnplay"]},
{p:"LR",z:"Grand Gedeh",d:"Frontière CI",loc:["Zwedru","Grand Gedeh","Toe Town","Ziah Town"]},
{p:"LR",z:"Maryland / River Gee",d:"Frontière CI sud",loc:["Harper","Maryland","River Gee","Fish Town","Pleebo","Barclayville","Grand Kru"]},
{p:"LR",z:"Montserrado",d:"Capitale",loc:["Monrovia","Montserrado","Paynesville","Bushrod","Caldwell"]},
{p:"LR",z:"Bong / Lofa",d:"Nord",loc:["Gbarnga","Bong","Lofa","Voinjama","Foya","Zorzor"]},
{p:"LR",z:"Grand Bassa / Sinoe",d:"Côte",loc:["Buchanan","Grand Bassa","Sinoe","Greenville","River Cess"]},
{p:"GH",z:"Western North",d:"Frontière CI",loc:["Sefwi Wiawso","Enchi","Bibiani","Juaboso","Dadieso","Western North"]},
{p:"GH",z:"Western",d:"Frontière CI sud",loc:["Takoradi","Sekondi","Elubo","Axim","Half Assini","Tarkwa","Jomoro"]},
{p:"GH",z:"Bono / Bono East",d:"Frontière CI nord",loc:["Sunyani","Berekum","Dormaa","Techiman","Wenchi","Sampa","Drobo","Goaso","Ahafo"]},
{p:"GH",z:"Savannah",d:"Nord-ouest",loc:["Damongo","Bole","Salaga","Sawla","Savannah Region"]},
{p:"GH",z:"Upper West",d:"Nord",loc:["Wa","Tumu","Lawra","Nandom","Jirapa","Upper West"]},
{p:"GH",z:"Upper East",d:"Nord-est",loc:["Bolgatanga","Bawku","Navrongo","Paga","Upper East"]},
{p:"GH",z:"Northern",d:"Nord",loc:["Tamale","Yendi","Northern Region","Gushegu"]},
{p:"GH",z:"Ashanti",d:"Centre",loc:["Kumasi","Obuasi","Ejisu","Konongo","Ashanti"]},
{p:"GH",z:"Greater Accra",d:"Capitale",loc:["Accra","Tema","Ashaiman","Madina","Greater Accra"]}
];

export const CORRIDORS = [
 {n:"Abidjan — Ouangolodougou — Ouagadougou", s:"Rail SITARAIL + RN1 · fret et voyageurs",
  z:["Abidjan","Agnéby-Tiassa","Bélier","Yamoussoukro","N'Zi","Gbêkê","Hambol","Poro","Tchologo","Cascades","Hauts-Bassins","Centre / Ouagadougou"]},
 {n:"Abidjan — Noé — Accra", s:"Corridor côtier ouest-africain", z:["Abidjan","Sud-Comoé","Western","Greater Accra"]},
 {n:"San-Pédro — Toulépleu — Nzérékoré", s:"Débouché portuaire de la Guinée forestière", z:["San-Pédro","Nawa","Cavally","Guémon","Tonkpi","Nzérékoré"]},
 {n:"Odienné — Zégoua — Bamako", s:"Axe nord-ouest vers le Mali", z:["Kabadougou","Folon","Bagoué","Tchologo","Sikasso","Bougouni","Bamako"]},
 {n:"Man — Danané — Ganta", s:"Axe libérien de l'Ouest", z:["Tonkpi","Cavally","Nimba","Montserrado"]},
 {n:"Bouna — Doropo — Gaoua", s:"Frange nord-est · parc de la Comoé", z:["Bounkani","Gontougo","Tchologo","Sud-Ouest","Cascades"]}
];

export const NAT = [
 // --- Côte d'Ivoire ---
 {u:"https://www.aip.ci/feed/",p:"CI",n:"AIP — Agence ivoirienne de presse",f:88},
 {u:"https://www.fratmat.info/feed",p:"CI",n:"Fraternité Matin",f:82},
 {u:"https://www.linfodrome.com/feed",p:"CI",n:"L'Infodrome",f:70},
 {u:"https://www.koaci.com/rss.xml",p:"CI",n:"KOACI",f:72},
 {u:"https://www.sikafinance.com/rss",p:"CI",n:"Sika Finance",f:76},
 {u:"https://www.connectionivoirienne.net/feed",p:"CI",n:"Connection Ivoirienne",f:60},
 {u:"https://apanews.net/feed/",p:"CI",n:"APA News",f:78},
 {u:"https://allafrica.com/tools/headlines/rdf/cotedivoire/headlines.rdf",p:"CI",n:"AllAfrica — Côte d'Ivoire",f:70},
 // --- Burkina Faso ---
 {u:"https://lefaso.net/spip.php?page=backend",p:"BF",n:"Lefaso.net",f:80},
 {u:"https://www.wakatsera.com/feed/",p:"BF",n:"Wakat Séra",f:76},
 {u:"https://www.sidwaya.info/feed/",p:"BF",n:"Sidwaya",f:78},
 {u:"https://www.aib.media/feed/",p:"BF",n:"AIB — Agence d'information du Burkina",f:80},
 {u:"https://burkina24.com/feed",p:"BF",n:"Burkina 24",f:66},
 {u:"https://lepays.bf/feed",p:"BF",n:"Le Pays",f:68},
 {u:"https://allafrica.com/tools/headlines/rdf/burkinafaso/headlines.rdf",p:"BF",n:"AllAfrica — Burkina Faso",f:70},
 // --- Mali ---
 {u:"https://www.maliweb.net/feed",p:"ML",n:"Maliweb",f:70},
 {u:"https://malijet.com/rss",p:"ML",n:"Malijet",f:70},
 {u:"https://www.studiotamani.org/index.php?format=feed&type=rss",p:"ML",n:"Studio Tamani",f:80},
 {u:"https://bamada.net/feed",p:"ML",n:"Bamada.net",f:60},
 {u:"https://www.journaldumali.com/feed",p:"ML",n:"Journal du Mali",f:72},
 {u:"https://www.info-matin.ml/feed",p:"ML",n:"Info-Matin",f:64},
 {u:"https://allafrica.com/tools/headlines/rdf/mali/headlines.rdf",p:"ML",n:"AllAfrica — Mali",f:70},
 // --- Guinée ---
 {u:"https://www.guineenews.org/feed/",p:"GN",n:"Guinéenews",f:74},
 {u:"https://www.africaguinee.com/feed/",p:"GN",n:"Africaguinée",f:72},
 {u:"https://mosaiqueguinee.com/feed/",p:"GN",n:"Mosaïque Guinée",f:66},
 {u:"https://mediaguinee.com/feed",p:"GN",n:"Mediaguinee",f:62},
 {u:"https://www.guinee7.com/feed",p:"GN",n:"Guinée7",f:62},
 {u:"https://guineelive.com/feed",p:"GN",n:"Guinéelive",f:58},
 {u:"https://allafrica.com/tools/headlines/rdf/guinea/headlines.rdf",p:"GN",n:"AllAfrica — Guinée",f:70},
 // --- Libéria ---
 {u:"https://frontpageafricaonline.com/feed/",p:"LR",n:"FrontPage Africa",f:76},
 {u:"https://www.liberianobserver.com/feed",p:"LR",n:"Liberian Observer",f:74},
 {u:"https://www.thenewdawnliberia.com/feed",p:"LR",n:"The New Dawn Liberia",f:66},
 {u:"https://allafrica.com/tools/headlines/rdf/liberia/headlines.rdf",p:"LR",n:"AllAfrica — Libéria",f:70},
 // --- Ghana ---
 {u:"https://www.myjoyonline.com/feed/",p:"GH",n:"MyJoyOnline",f:78},
 {u:"https://citinewsroom.com/feed/",p:"GH",n:"Citi Newsroom",f:76},
 {u:"https://www.graphic.com.gh/feed",p:"GH",n:"Graphic Online",f:80},
 {u:"https://www.ghanaweb.com/GhanaHomePage/rss/news.xml",p:"GH",n:"GhanaWeb",f:66},
 {u:"https://allafrica.com/tools/headlines/rdf/ghana/headlines.rdf",p:"GH",n:"AllAfrica — Ghana",f:70},
 // --- Couche panafricaine et humanitaire : couvre les six pays à la fois ---
 {u:"https://reliefweb.int/updates/rss.xml?view=headlines",p:"CI",n:"ReliefWeb — Afrique de l'Ouest",f:90},
 {u:"https://www.africanews.com/feed/rss",p:"CI",n:"Africanews — panafricain",f:80},
 {u:"https://www.crisisgroup.org/rss",p:"CI",n:"International Crisis Group — alerte précoce",f:92}

];

export const THEMES = ["sécurité OR attaque OR braquage","manifestation OR grève","frontière OR corridor OR douane","orpaillage OR mine OR foncier","inondation OR épidémie"];

export const LEX = {
 CRITIQUE:["attaque","attentat","embuscade","assaut","terroriste","djihadiste","jihadiste","engin explosif","ied","mine artisanale","tue","tues","tuees","morts","tuerie","massacre","enlevement","enleve","kidnapping","rapt","otage","coup d etat","putsch","mutinerie","affrontements","incursion","fusillade","emeute","emeutes","assassinat","abattu","abattus","attack","attacked","killed","gunmen","gunfire","ambush","kidnapped","abducted","hostage","explosion","bomb","massacre","coup","mutiny","clashes","shooting","riot","assassination","insurgents","militants"],
 ELEVE:["braquage","attaque a main armee","vol a main armee","coupeurs de route","agression","violences","heurts","manifestation reprimee","gaz lacrymogene","couvre-feu","etat d urgence","arrestations","fermeture de la frontiere","frontiere fermee","expulsion","refugies","deplaces","milice","groupe arme","orpaillage clandestin","incendie criminel","cambriolage","sequestration","conflit foncier","conflit intercommunautaire","evacuation","alerte","menace","curfew","state of emergency","armed robbery","robbery","banditry","violence","unrest","crackdown","tear gas","border closed","border closure","displaced","refugees","militia","armed group","arson","land dispute","evacuated"],
 MODERE:["greve","manifestation","marche de protestation","sit-in","tension","litige","proces","interpellation","saisie","contrebande","trafic","stupefiants","drogue","corruption","penurie","hausse des prix","inondation","epidemie","cholera","meningite","accident","panne","coupure","delestage","fermeture","perturbation","travaux","deviation","strike","protest","demonstration","sit-in","tension","arrest","seizure","smuggling","trafficking","drugs","corruption","shortage","price hike","flood","flooding","epidemic","cholera","accident","outage","blackout","galamsey","illegal mining"],
 FAIBLE:["reunion","seminaire","atelier","ceremonie","inauguration","visite","cooperation","signature","don","formation","sensibilisation","recensement","nomination","election","campagne","sommet","conference","festival","match","tournoi","meeting","workshop","ceremony","inauguration","visit","cooperation","training","summit"]
};
export const CAT = {
 securite:["attaque","attentat","braquage","vol","arme","police","gendarmerie","militaire","armee","terroriste","djihadiste","jihadiste","embuscade","fusillade","enlevement","otage","criminalite","bandit","coupeurs de route","milice","groupe arme","securite","surete","incursion","patrouille","couvre-feu","police","army","military","security","gunmen","armed","robbery","curfew","attack","tue","tuee","tues","tuees","abattu","abattus","balle","assassine","killed","shot"],
 humanitaire:["refugies","deplaces","humanitaire","famine","malnutrition","epidemie","cholera","meningite","inondation","secheresse","sinistres","aide","ocha","hcr","unicef","croix-rouge","assistance","vivres","sante","hopital","victimes","humanitarian","refugees","displaced","flood","epidemic","health","hospital","aid","victims","accident","noyade","noye","noyes","chavire","naufrage","accidents","incendie","incendies","feu","embrase","embrasee"],
 politique:["gouvernement","president","ministre","assemblee","election","parti","opposition","scrutin","coup d etat","putsch","constitution","diplomatie","ambassade","cedeao","aes","union africaine","manifestation","greve","syndicat","justice","proces","government","president","minister","parliament","election","opposition","protest","strike","court"],
 economique:["economie","marche","prix","inflation","cacao","cafe","hevea","anacarde","coton","or","mine","petrole","port","fret","commerce","douane","exportation","importation","banque","investissement","carburant","transport","corridor","economy","market","prices","inflation","cocoa","gold","mining","port","trade","customs","fuel"]
};
export const AGGRAV = [
 {k:["frontiere fermee","fermeture de la frontiere","fermeture des frontieres","border closed","border closure","border shut"],v:6,l:"Fermeture de frontière"},
 {k:["couvre-feu","etat d urgence","curfew","state of emergency"],v:6,l:"Mesure d'exception"},
 {k:["acces humanitaire","mission suspendue","reportee sine die","zone inaccessible"],v:4,l:"Accès humanitaire dégradé"},
 {k:["expatrie","expatries","etranger enleve","ressortissant francais","ressortissant etranger","ressortissants etrangers","ong ciblee","foreign national","expatriate","ngo staff"],v:5,l:"Exposition des expatriés"},
 {k:["corridor","axe routier coupe","route coupee","pont coupe","voie ferree","sitarail"],v:4,l:"Rupture d'axe logistique"},
 {k:["aeroport","port autonome","terminal"],v:3,l:"Infrastructure critique"},
 {k:["parc de la comoe","zone frontaliere nord","incursion"],v:4,l:"Pression frontalière nord"}
];

export const norm = s => (s||"").toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .toLowerCase().replace(/[’']/g," ").replace(/\s+/g," ").trim();

const echapper = m => norm(m).replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

/* Compile une liste de mots/expressions en UNE seule regex d'alternation,
   au lieu d'une regex par mot recompilée à chaque appel. C'est le principal
   goulot d'étranglement du moteur : sur un article donné, la version non
   compilée pouvait déclencher jusqu'à ~800 compilations RegExp (176 mots de
   criticité + 151 de catégorie + 36 variantes d'aggravants + 431 localités).
   Compilées une fois au chargement du module, il n'en reste plus qu'une
   poignée d'appels .test()/.match() par article. */
function compiler(mots, {global=false} = {}){
  const alt = [...mots].sort((a,b)=>b.length-a.length).map(echapper).join("|");
  return new RegExp("(^|[^\\p{L}\\p{N}])(?:"+alt+")(?:s|x|es)?($|[^\\p{L}\\p{N}])", "u"+(global?"g":""));
}

export const matchMot = (txt,mot) => {
  try { return compiler([mot]).test(txt); }
  catch(e){ return txt.includes(norm(mot)); }
};

/* Index de détection.
   Ordre de priorité : la localité précise l'emporte sur le nom de la région
   (« Bawku » avant « Upper East »), puis le nom le plus long l'emporte
   (« Grand-Bassam » avant « Bassam »). */
const IDX = [];
ZONES.forEach(z => z.loc.forEach(l => {
  const precise = norm(l) !== norm(z.z) && !/\b(region|district)\b/.test(norm(l)) ? 1 : 0;
  IDX.push({n:norm(l), z:z.z, p:z.p, brut:l, s:precise});
}));
IDX.sort((a,b) => b.s - a.s || b.n.length - a.n.length);

// Une seule regex d'alternation pour les 431 localités. Version globale pour
// retrouver TOUTES les occurrences dans le texte, puis on retient celle de
// plus haute priorité (précision, puis longueur) — exactement la règle
// d'origine, mais sans compiler 431 regex pour y arriver.
const LOC_ALT = IDX.map(e => echapper(e.n)).join("|");
const LOC_REGEX = new RegExp("(^|[^\\p{L}\\p{N}])("+LOC_ALT+")(?:s|x|es)?($|[^\\p{L}\\p{N}])", "gu");
const LOC_PAR_MOT = new Map(IDX.map(e => [e.n, e]));

const LEX_REGEX = Object.fromEntries(Object.entries(LEX).map(([n,mots]) => [n, compiler(mots)]));
const CAT_REGEX = Object.fromEntries(Object.entries(CAT).map(([c,mots]) => [c, compiler(mots, {global:true})]));
const AGGRAV_REGEX = AGGRAV.map(a => ({ ...a, re: compiler(a.k) }));

export function detecter(texte){
  const t = norm(texte);
  LOC_REGEX.lastIndex = 0;
  let meilleur = null, m;
  while((m = LOC_REGEX.exec(t))){
    const entree = LOC_PAR_MOT.get(m[2]);
    if(entree && (!meilleur || entree.s > meilleur.s || (entree.s === meilleur.s && entree.n.length > meilleur.n.length))){
      meilleur = entree;
    }
    if(m.index === LOC_REGEX.lastIndex) LOC_REGEX.lastIndex++;   // garde-fou anti-boucle sur match vide
  }
  return meilleur ? { pays:meilleur.p, zone:meilleur.z, localite:meilleur.brut } : null;
}
export function criticite(texte){
  const t = norm(texte);
  for(const n of ["CRITIQUE","ELEVE","MODERE"]) if(LEX_REGEX[n].test(t)) return n;
  return LEX_REGEX.FAIBLE.test(t) ? "FAIBLE" : "MODERE";
}
export function categorie(texte){
  const t = norm(texte); let best="politique", sc=0;
  for(const c in CAT_REGEX){ const n = (t.match(CAT_REGEX[c])||[]).length; if(n>sc){ sc=n; best=c; } }
  return sc ? best : "politique";
}
export function aggravants(texte){
  const t = norm(texte);
  return AGGRAV_REGEX.filter(a=>a.re.test(t)).map(a=>({l:a.l, v:a.v}));
}

export const POIDS = {CRITIQUE:4, ELEVE:2, MODERE:1, FAIBLE:0};
export const niveau = s => s>=75?"ROUGE" : s>=60?"MARRON" : s>=40?"ORANGE" : s>=20?"JAUNE" : "VERT";
export function scoreZone(faits){
  let p = 0;
  faits.forEach(a=>{ p += POIDS[a.criticite]||0; (a.aggravants||[]).forEach(x=>p += x.v*0.5); });
  const s = Math.round(100*(1-Math.exp(-p/12)));
  return {score:s, niveau:niveau(s), faits:faits.length,
          critiques:faits.filter(a=>a.criticite==="CRITIQUE").length,
          eleves:faits.filter(a=>a.criticite==="ELEVE").length,
          aggravants:[...new Set(faits.flatMap(a=>(a.aggravants||[]).map(x=>x.l)))]};
}

export function gnews(q, gl, lang){
  const hl = lang==="en" ? "en-GB" : "fr";
  return "https://news.google.com/rss/search?q="+encodeURIComponent(q)+"&hl="+hl+"&gl="+gl+"&ceid="+gl+":"+(lang==="en"?"en":"fr");
}
export function listeFlux(prof, opts){
  opts = opts || {};
  const paysActifs = new Set(opts.paysActifs || Object.keys(PAYS));
  const priorite = opts.zonePriorite || "";
  const inclureRadios = opts.inclureRadios !== false;
  const L = NAT.filter(s=>paysActifs.has(s.p)).map(s=>({...s, zone:null, prio:true}));
  // requêtes thématiques par pays actif
  Object.keys(PAYS).filter(p=>paysActifs.has(p)).forEach(p=>{
    const P=PAYS[p];
    THEMES.forEach(t=>{
      L.push({u:gnews('"'+P.n+'" '+t, P.gl, P.lang), p, n:"Veille thématique — "+P.n, f:65, zone:null});
    });
    // radios et presse locale : mêmes faits, souvent relayés avant la presse nationale
    if(inclureRadios){
      L.push({u:gnews('"'+P.n+'" radio', P.gl, P.lang), p, n:"Radios locales — "+P.n, f:52, zone:null, type:"radio"});
      L.push({u:gnews('"'+P.n+'" (site OR blog OR journal local)', P.gl, P.lang), p, n:"Presse et pages locales — "+P.n, f:48, zone:null, type:"local"});
    }
  });
  const dejaZone = new Set();
  function ajouterZone(z, estPrioritaire){
    if(dejaZone.has(z.z) || !paysActifs.has(z.p)) return;
    dejaZone.add(z.z);
    const P=PAYS[z.p];
    const q = z.loc.slice(0,3).map(l=>'"'+l+'"').join(" OR ");
    L.push({u:gnews(q+(z.p==="CI"?" Côte d'Ivoire":" "+P.n), P.gl, P.lang), p:z.p, n:"Zone "+z.z+(z.p!=="CI"?" ("+P.n+")":""), f:z.p==="CI"?62:60, zone:z.z, prio:!!estPrioritaire});
  }
  // zone prioritaire : approfondie et placée en tête, quelle que soit la profondeur choisie
  if(priorite){
    const zp = ZONES.find(z=>z.z===priorite);
    if(zp) ajouterZone(zp, true);
  }
  if(prof==="rapide"){ L.sort((a,b)=>(b.prio?1:0)-(a.prio?1:0)); return L; }
  ZONES.filter(z=>z.p==="CI").forEach(z=>ajouterZone(z, false));
  if(prof==="profond") ZONES.filter(z=>z.p!=="CI").forEach(z=>ajouterZone(z, false));
  // seules les sources nationales et la zone prioritaire passent en tête de file
  L.sort((a,b)=> (b.prio?1:0) - (a.prio?1:0));
  return L;
}
