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
{p:"CI",z:"Bounkani",d:"Zanzan",loc:["Bouna","Doropo","Téhini","Nassian","Kalamon","Ondéfidouo","Parc de la Comoé","Kafolo","Kolobougou"]},
{p:"CI",z:"Gontougo",d:"Zanzan",loc:["Bondoukou","Tanda","Koun-Fao","Transua","Sandégué","Soko","Assuéfry","Tabagne"]},
{p:"BF",z:"Cascades",d:"Frontière CI nord-est",loc:["Banfora","Sidéradougou","Mangodara","Niangoloko","Sindou","Ouo"]},
{p:"BF",z:"Hauts-Bassins",d:"Frontière CI",loc:["Bobo-Dioulasso","Bobo Dioulasso","Orodara","Houndé","Dandé","Karangasso"]},
{p:"BF",z:"Sud-Ouest",d:"Frontière CI est",loc:["Gaoua","Batié","Kampti","Diébougou","Dano","Loropéni"]},
{p:"BF",z:"Centre / Ouagadougou",d:"Capitale",loc:["Ouagadougou","Ouaga","Saaba","Koubri"]},
{p:"BF",z:"Boucle du Mouhoun",d:"Ouest",loc:["Dédougou","Nouna","Solenzo","Toma","Boromo"]},
{p:"BF",z:"Centre-Ouest",d:"Centre",loc:["Koudougou","Réo","Léo","Sapouy"]},
{p:"BF",z:"Sahel",d:"Nord — menace armée",loc:["Dori","Djibo","Gorom-Gorom","Sebba","Arbinda","Soum","Oudalan","Yagha","Solhan","Mansila"]},
{p:"BF",z:"Nord",d:"Nord",loc:["Ouahigouya","Titao","Yako","Gourcy"]},
{p:"BF",z:"Est",d:"Est — menace armée",loc:["Fada N'Gourma","Fada","Pama","Diapaga","Kantchari","Gayéri"]},
{p:"BF",z:"Centre-Est",d:"Sud-est",loc:["Tenkodogo","Garango","Pouytenga","Koupéla","Bittou"]},
{p:"BF",z:"Centre-Nord",d:"Centre-Nord — menace armée",loc:["Kaya","Barsalogho","Zaongo","Kongoussi","Sanmatenga"]},
{p:"ML",z:"Sikasso",d:"Frontière CI nord",loc:["Sikasso","Kadiolo","Zégoua","Pogo","Kolondiéba","Loulouni","Misséni","Fourou","Niéna"]},
{p:"ML",z:"Bougouni",d:"Frontière CI nord-ouest",loc:["Bougouni","Yanfolila","Kalana","Garalo"]},
{p:"ML",z:"Bamako",d:"Capitale",loc:["Bamako","Kati","Kalabancoro","Baguinéda"]},
{p:"ML",z:"Ségou",d:"Centre",loc:["Ségou","Niono","San","Macina","Markala"]},
{p:"ML",z:"Mopti",d:"Centre — menace armée",loc:["Mopti","Sévaré","Djenné","Bandiagara","Douentza","Bankass","Koro","Ogossagou","Sobane Da"]},
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

/* À NE JAMAIS AJOUTER : les domaines "news-pravda.com" (ex. "Pravda Burkina
   Faso", "Pravda Mali") relaient le réseau de désinformation "African
   Initiative", lié au ministère russe de la Défense / Africa Corps
   (successeur de Wagner) et ciblant spécifiquement les pays de l'AES.
   Ils se présentent comme des sites d'actualité Sahel crédibles — ce n'en
   sont pas. Vérifier toute nouvelle source contre ce risque avant ajout. */
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
 {u:"https://guineematin.com/feed",p:"GN",n:"Guinée Matin — Guinée profonde",f:64},
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

export const THEMES = ["sécurité OR attaque OR braquage","manifestation OR grève","frontière OR corridor OR douane","orpaillage OR mine OR foncier","inondation OR épidémie","coupeurs de route OR attaque de car OR braquage de véhicule OR barrage armé","orpaillage clandestin OR site aurifère illégal OR creuseurs clandestins","incursion armée OR attaque djihadiste OR poste militaire attaqué"];

export const LEX = {
 CRITIQUE:["attaque","attentat","embuscade","assaut","terroriste","djihadiste","jihadiste","engin explosif","ied","mine artisanale","tue","tues","tuees","morts","tuerie","massacre","enlevement","enleve","kidnapping","rapt","otage","coup d etat","putsch","mutinerie","affrontements","incursion","fusillade","emeute","emeutes","assassinat","abattu","abattus","intrusion armee","intrusion terroriste","infiltration armee","poste militaire attaque","detachement attaque","position militaire attaquee","attaque transfrontaliere","attack","attacked","killed","gunmen","gunfire","ambush","kidnapped","abducted","hostage","explosion","bomb","massacre","coup","mutiny","clashes","shooting","riot","assassination","insurgents","militants","armed intrusion","cross-border attack","military post attacked","army post attacked"],
 ELEVE:["braquage","attaque a main armee","vol a main armee","coupeurs de route","coupeur de route","attaque de vehicule","car attaque","car braque","vehicule mitraille","barrage arme","faux barrage","hold-up","braqueurs","agression","violences","heurts","manifestation reprimee","gaz lacrymogene","couvre-feu","etat d urgence","arrestations","fermeture de la frontiere","frontiere fermee","expulsion","refugies","deplaces","milice","groupe arme","orpaillage clandestin","orpailleurs clandestins","creuseurs clandestins","site d orpaillage","mine artisanale illegale","site aurifere illegal","exploitation aurifere illegale","incendie criminel","cambriolage","sequestration","conflit foncier","conflit intercommunautaire","evacuation","alerte","menace","curfew","state of emergency","armed robbery","robbery","banditry","road ambush","highway robbery","illegal miners","illegal gold mining","violence","unrest","crackdown","tear gas","border closed","border closure","displaced","refugees","militia","armed group","arson","land dispute","evacuated"],
 MODERE:["greve","manifestation","marche de protestation","sit-in","tension","litige","proces","interpellation","saisie","contrebande","trafic","stupefiants","drogue","corruption","penurie","hausse des prix","inondation","epidemie","cholera","meningite","accident","panne","coupure","delestage","fermeture","perturbation","travaux","deviation","strike","protest","demonstration","sit-in","tension","arrest","seizure","smuggling","trafficking","drugs","corruption","shortage","price hike","flood","flooding","epidemic","cholera","accident","outage","blackout","galamsey","illegal mining"],
 FAIBLE:["reunion","seminaire","atelier","ceremonie","inauguration","visite","cooperation","signature","don","formation","sensibilisation","recensement","nomination","election","campagne","sommet","conference","festival","match","tournoi","meeting","workshop","ceremony","inauguration","visit","cooperation","training","summit","championnat","medaille","podium","olympique","competition sportive","medal","championship","olympics"]
};
export const CAT = {
 securite:["attaque","attentat","braquage","vol","arme","police","gendarmerie","militaire","armee","terroriste","djihadiste","jihadiste","embuscade","fusillade","enlevement","otage","criminalite","bandit","coupeurs de route","coupeur de route","braqueurs","barrage arme","car attaque","orpaillage clandestin","orpailleurs clandestins","creuseurs clandestins","site d orpaillage","milice","groupe arme","securite","surete","incursion","patrouille","couvre-feu","massacre","tuerie","police","army","military","security","gunmen","armed","robbery","curfew","attack","tue","tuee","tues","tuees","morts","abattu","abattus","balle","assassine","killed","shot"],
 humanitaire:["refugies","deplaces","humanitaire","famine","malnutrition","epidemie","cholera","meningite","inondation","secheresse","sinistres","aide","ocha","hcr","unicef","croix-rouge","assistance","vivres","sante","hopital","victimes","morts","massacre","humanitarian","refugees","displaced","flood","epidemic","health","hospital","aid","victims","accident","noyade","noye","noyes","chavire","naufrage","accidents","incendie","incendies","feu","embrase","embrasee"],
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
  const t = norm(texte); let best="autre", sc=0;
  for(const c in CAT_REGEX){ const n = (t.match(CAT_REGEX[c])||[]).length; if(n>sc){ sc=n; best=c; } }
  return sc ? best : "autre";
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

/* Base géographique mondiale — pays hors périmètre curaté (pas de zones ni
   de flux nationaux dédiés) et table des frontières terrestres, dérivées de
   mledoze/countries (domaine public, CC0). Sert à déterminer le pays de
   connexion d'un visiteur et ses vrais voisins pour la collecte "reste du
   monde" : un flux Google News générique par pays, sans détail de zone. */
export const PAYS_MONDE = {
 AD:{n:"Andorre",lang:"en"},
 AE:{n:"Émirats arabes unis",lang:"en"},
 AF:{n:"Afghanistan",lang:"en"},
 AG:{n:"Antigua-et-Barbuda",lang:"en"},
 AL:{n:"Albanie",lang:"en"},
 AM:{n:"Arménie",lang:"en"},
 AO:{n:"Angola",lang:"en"},
 AR:{n:"Argentine",lang:"en"},
 AT:{n:"Autriche",lang:"en"},
 AU:{n:"Australie",lang:"en"},
 AZ:{n:"Azerbaïdjan",lang:"en"},
 BA:{n:"Bosnie-Herzégovine",lang:"en"},
 BB:{n:"Barbade",lang:"en"},
 BD:{n:"Bangladesh",lang:"en"},
 BE:{n:"Belgique",lang:"fr"},
 BG:{n:"Bulgarie",lang:"en"},
 BH:{n:"Bahreïn",lang:"en"},
 BI:{n:"Burundi",lang:"fr"},
 BJ:{n:"Bénin",lang:"fr"},
 BN:{n:"Brunei",lang:"en"},
 BO:{n:"Bolivie",lang:"en"},
 BR:{n:"Brésil",lang:"en"},
 BS:{n:"Bahamas",lang:"en"},
 BT:{n:"Bhoutan",lang:"en"},
 BW:{n:"Botswana",lang:"en"},
 BY:{n:"Biélorussie",lang:"en"},
 BZ:{n:"Belize",lang:"en"},
 CA:{n:"Canada",lang:"fr"},
 CD:{n:"Congo (Rép. dém.)",lang:"fr"},
 CF:{n:"République centrafricaine",lang:"fr"},
 CG:{n:"Congo",lang:"fr"},
 CH:{n:"Suisse",lang:"fr"},
 CL:{n:"Chili",lang:"en"},
 CM:{n:"Cameroun",lang:"fr"},
 CN:{n:"Chine",lang:"en"},
 CO:{n:"Colombie",lang:"en"},
 CR:{n:"Costa Rica",lang:"en"},
 CU:{n:"Cuba",lang:"en"},
 CV:{n:"Îles du Cap-Vert",lang:"en"},
 CY:{n:"Chypre",lang:"en"},
 CZ:{n:"Tchéquie",lang:"en"},
 DE:{n:"Allemagne",lang:"en"},
 DJ:{n:"Djibouti",lang:"fr"},
 DK:{n:"Danemark",lang:"en"},
 DM:{n:"Dominique",lang:"en"},
 DO:{n:"République dominicaine",lang:"en"},
 DZ:{n:"Algérie",lang:"en"},
 EC:{n:"Équateur",lang:"en"},
 EE:{n:"Estonie",lang:"en"},
 EG:{n:"Égypte",lang:"en"},
 ER:{n:"Érythrée",lang:"en"},
 ES:{n:"Espagne",lang:"en"},
 ET:{n:"Éthiopie",lang:"en"},
 FI:{n:"Finlande",lang:"en"},
 FJ:{n:"Fidji",lang:"en"},
 FM:{n:"Micronésie",lang:"en"},
 FR:{n:"France",lang:"fr"},
 GA:{n:"Gabon",lang:"fr"},
 GB:{n:"Royaume-Uni",lang:"en"},
 GD:{n:"Grenade",lang:"en"},
 GE:{n:"Géorgie",lang:"en"},
 GM:{n:"Gambie",lang:"en"},
 GQ:{n:"Guinée équatoriale",lang:"fr"},
 GR:{n:"Grèce",lang:"en"},
 GT:{n:"Guatemala",lang:"en"},
 GW:{n:"Guinée-Bissau",lang:"en"},
 GY:{n:"Guyana",lang:"en"},
 HN:{n:"Honduras",lang:"en"},
 HR:{n:"Croatie",lang:"en"},
 HT:{n:"Haïti",lang:"fr"},
 HU:{n:"Hongrie",lang:"en"},
 ID:{n:"Indonésie",lang:"en"},
 IE:{n:"Irlande",lang:"en"},
 IL:{n:"Israël",lang:"en"},
 IN:{n:"Inde",lang:"en"},
 IQ:{n:"Irak",lang:"en"},
 IR:{n:"Iran",lang:"en"},
 IS:{n:"Islande",lang:"en"},
 IT:{n:"Italie",lang:"en"},
 JM:{n:"Jamaïque",lang:"en"},
 JO:{n:"Jordanie",lang:"en"},
 JP:{n:"Japon",lang:"en"},
 KE:{n:"Kenya",lang:"en"},
 KG:{n:"Kirghizistan",lang:"en"},
 KH:{n:"Cambodge",lang:"en"},
 KI:{n:"Kiribati",lang:"en"},
 KM:{n:"Comores",lang:"fr"},
 KN:{n:"Saint-Christophe-et-Niévès",lang:"en"},
 KP:{n:"Corée du Nord",lang:"en"},
 KR:{n:"Corée du Sud",lang:"en"},
 KW:{n:"Koweït",lang:"en"},
 KZ:{n:"Kazakhstan",lang:"en"},
 LA:{n:"Laos",lang:"en"},
 LB:{n:"Liban",lang:"fr"},
 LC:{n:"Sainte-Lucie",lang:"en"},
 LI:{n:"Liechtenstein",lang:"en"},
 LK:{n:"Sri Lanka",lang:"en"},
 LS:{n:"Lesotho",lang:"en"},
 LT:{n:"Lituanie",lang:"en"},
 LU:{n:"Luxembourg",lang:"fr"},
 LV:{n:"Lettonie",lang:"en"},
 LY:{n:"Libye",lang:"en"},
 MA:{n:"Maroc",lang:"en"},
 MC:{n:"Monaco",lang:"fr"},
 MD:{n:"Moldavie",lang:"en"},
 ME:{n:"Monténégro",lang:"en"},
 MG:{n:"Madagascar",lang:"fr"},
 MH:{n:"Îles Marshall",lang:"en"},
 MK:{n:"Macédoine du Nord",lang:"en"},
 MM:{n:"Birmanie",lang:"en"},
 MN:{n:"Mongolie",lang:"en"},
 MR:{n:"Mauritanie",lang:"en"},
 MT:{n:"Malte",lang:"en"},
 MU:{n:"Île Maurice",lang:"fr"},
 MV:{n:"Maldives",lang:"en"},
 MW:{n:"Malawi",lang:"en"},
 MX:{n:"Mexique",lang:"en"},
 MY:{n:"Malaisie",lang:"en"},
 MZ:{n:"Mozambique",lang:"en"},
 NA:{n:"Namibie",lang:"en"},
 NE:{n:"Niger",lang:"fr"},
 NG:{n:"Nigéria",lang:"en"},
 NI:{n:"Nicaragua",lang:"en"},
 NL:{n:"Pays-Bas",lang:"en"},
 NO:{n:"Norvège",lang:"en"},
 NP:{n:"Népal",lang:"en"},
 NR:{n:"Nauru",lang:"en"},
 NZ:{n:"Nouvelle-Zélande",lang:"en"},
 OM:{n:"Oman",lang:"en"},
 PA:{n:"Panama",lang:"en"},
 PE:{n:"Pérou",lang:"en"},
 PG:{n:"Papouasie-Nouvelle-Guinée",lang:"en"},
 PH:{n:"Philippines",lang:"en"},
 PK:{n:"Pakistan",lang:"en"},
 PL:{n:"Pologne",lang:"en"},
 PT:{n:"Portugal",lang:"en"},
 PW:{n:"Palaos (Palau)",lang:"en"},
 PY:{n:"Paraguay",lang:"en"},
 QA:{n:"Qatar",lang:"en"},
 RO:{n:"Roumanie",lang:"en"},
 RS:{n:"Serbie",lang:"en"},
 RU:{n:"Russie",lang:"en"},
 RW:{n:"Rwanda",lang:"fr"},
 SA:{n:"Arabie Saoudite",lang:"en"},
 SB:{n:"Îles Salomon",lang:"en"},
 SC:{n:"Seychelles",lang:"fr"},
 SD:{n:"Soudan",lang:"en"},
 SE:{n:"Suède",lang:"en"},
 SG:{n:"Singapour",lang:"en"},
 SI:{n:"Slovénie",lang:"en"},
 SK:{n:"Slovaquie",lang:"en"},
 SL:{n:"Sierra Leone",lang:"en"},
 SM:{n:"Saint-Marin",lang:"en"},
 SN:{n:"Sénégal",lang:"fr"},
 SO:{n:"Somalie",lang:"en"},
 SR:{n:"Surinam",lang:"en"},
 SS:{n:"Soudan du Sud",lang:"en"},
 ST:{n:"São Tomé et Príncipe",lang:"en"},
 SV:{n:"Salvador",lang:"en"},
 SY:{n:"Syrie",lang:"en"},
 SZ:{n:"Eswatini",lang:"en"},
 TD:{n:"Tchad",lang:"fr"},
 TG:{n:"Togo",lang:"fr"},
 TH:{n:"Thaïlande",lang:"en"},
 TJ:{n:"Tadjikistan",lang:"en"},
 TL:{n:"Timor oriental",lang:"en"},
 TM:{n:"Turkménistan",lang:"en"},
 TN:{n:"Tunisie",lang:"en"},
 TO:{n:"Tonga",lang:"en"},
 TR:{n:"Turquie",lang:"en"},
 TT:{n:"Trinité-et-Tobago",lang:"en"},
 TV:{n:"Tuvalu",lang:"en"},
 TZ:{n:"Tanzanie",lang:"en"},
 UA:{n:"Ukraine",lang:"en"},
 UG:{n:"Ouganda",lang:"en"},
 US:{n:"États-Unis",lang:"en"},
 UY:{n:"Uruguay",lang:"en"},
 UZ:{n:"Ouzbékistan",lang:"en"},
 VA:{n:"Cité du Vatican",lang:"en"},
 VC:{n:"Saint-Vincent-et-les-Grenadines",lang:"en"},
 VE:{n:"Venezuela",lang:"en"},
 VN:{n:"Viêt Nam",lang:"en"},
 VU:{n:"Vanuatu",lang:"fr"},
 WS:{n:"Samoa",lang:"en"},
 YE:{n:"Yémen",lang:"en"},
 ZA:{n:"Afrique du Sud",lang:"en"},
 ZM:{n:"Zambie",lang:"en"},
 ZW:{n:"Zimbabwe",lang:"en"}
};

// Frontières terrestres (ISO 3166-1 alpha-2). Couvre aussi les 6 pays
// curatés (PAYS) pour une résolution uniforme "voisins de X" quel que
// soit le périmètre. Codes hors PAYS/PAYS_MONDE (territoires non
// souverains, ex. EH, HK, MO, PS, XK) sont écartés par voisins().
export const FRONTIERES = {
 AD:["ES","FR"],AE:["OM","SA"],AF:["CN","IR","PK","TJ","TM","UZ"],AG:[],AL:["GR","ME","MK","XK"],AM:["AZ","GE","IR","TR"],AO:["CD","CG","NA","ZM"],AR:["BO","BR","CL","PY","UY"],AT:["CH","CZ","DE","HU","IT","LI","SI","SK"],AU:[],AZ:["AM","GE","IR","RU","TR"],BA:["HR","ME","RS"],BB:[],BD:["IN","MM"],BE:["DE","FR","LU","NL"],BF:["BJ","CI","GH","ML","NE","TG"],BG:["GR","MK","RO","RS","TR"],BH:[],BI:["CD","RW","TZ"],BJ:["BF","NE","NG","TG"],BN:["MY"],BO:["AR","BR","CL","PE","PY"],BR:["AR","BO","CO","GF","GY","PE","PY","SR","UY","VE"],BS:[],BT:["CN","IN"],BW:["NA","ZA","ZM","ZW"],BY:["LT","LV","PL","RU","UA"],BZ:["GT","MX"],CA:["US"],CD:["AO","BI","CF","CG","RW","SS","TZ","UG","ZM"],CF:["CD","CG","CM","SD","SS","TD"],CG:["AO","CD","CF","CM","GA"],CH:["AT","DE","FR","IT","LI"],CI:["BF","GH","GN","LR","ML"],CL:["AR","BO","PE"],CM:["CF","CG","GA","GQ","NG","TD"],CN:["AF","BT","HK","IN","KG","KP","KZ","LA","MM","MN","MO","NP","PK","RU","TJ","VN"],CO:["BR","EC","PA","PE","VE"],CR:["NI","PA"],CU:[],CV:[],CY:[],CZ:["AT","DE","PL","SK"],DE:["AT","BE","CH","CZ","DK","FR","LU","NL","PL"],DJ:["ER","ET","SO"],DK:["DE"],DM:[],DO:["HT"],DZ:["EH","LY","MA","ML","MR","NE","TN"],EC:["CO","PE"],EE:["LV","RU"],EG:["IL","LY","PS","SD"],ER:["DJ","ET","SD"],ES:["AD","FR","GI","MA","PT"],ET:["DJ","ER","KE","SD","SO","SS"],FI:["NO","RU","SE"],FJ:[],FM:[],FR:["AD","BE","CH","DE","ES","IT","LU","MC"],GA:["CG","CM","GQ"],GB:["IE"],GD:[],GE:["AM","AZ","RU","TR"],GH:["BF","CI","TG"],GM:["SN"],GN:["CI","GW","LR","ML","SL","SN"],GQ:["CM","GA"],GR:["AL","BG","MK","TR"],GT:["BZ","HN","MX","SV"],GW:["GN","SN"],GY:["BR","SR","VE"],HN:["GT","NI","SV"],HR:["BA","HU","ME","RS","SI"],HT:["DO"],HU:["AT","HR","RO","RS","SI","SK","UA"],ID:["MY","PG","TL"],IE:["GB"],IL:["EG","JO","LB","PS","SY"],IN:["BD","BT","CN","MM","NP","PK"],IQ:["IR","JO","KW","SA","SY","TR"],IR:["AF","AM","AZ","IQ","PK","TM","TR"],IS:[],IT:["AT","CH","FR","SI","SM","VA"],JM:[],JO:["IL","IQ","PS","SA","SY"],JP:[],KE:["ET","SO","SS","TZ","UG"],KG:["CN","KZ","TJ","UZ"],KH:["LA","TH","VN"],KI:[],KM:[],KN:[],KP:["CN","KR","RU"],KR:["KP"],KW:["IQ","SA"],KZ:["CN","KG","RU","TM","UZ"],LA:["CN","KH","MM","TH","VN"],LB:["IL","SY"],LC:[],LI:["AT","CH"],LK:["IN"],LR:["CI","GN","SL"],LS:["ZA"],LT:["BY","LV","PL","RU"],LU:["BE","DE","FR"],LV:["BY","EE","LT","RU"],LY:["DZ","EG","NE","SD","TD","TN"],MA:["DZ","EH","ES"],MC:["FR"],MD:["RO","UA"],ME:["AL","BA","HR","RS","XK"],MG:[],MH:[],MK:["AL","BG","GR","RS","XK"],ML:["BF","CI","DZ","GN","MR","NE","SN"],MM:["BD","CN","IN","LA","TH"],MN:["CN","RU"],MR:["DZ","EH","ML","SN"],MT:[],MU:[],MV:[],MW:["MZ","TZ","ZM"],MX:["BZ","GT","US"],MY:["BN","ID","TH"],MZ:["MW","SZ","TZ","ZA","ZM","ZW"],NA:["AO","BW","ZA","ZM"],NE:["BF","BJ","DZ","LY","ML","NG","TD"],NG:["BJ","CM","NE","TD"],NI:["CR","HN"],NL:["BE","DE"],NO:["FI","RU","SE"],NP:["CN","IN"],NR:[],NZ:[],OM:["AE","SA","YE"],PA:["CO","CR"],PE:["BO","BR","CL","CO","EC"],PG:["ID"],PH:[],PK:["AF","CN","IN","IR"],PL:["BY","CZ","DE","LT","RU","SK","UA"],PT:["ES"],PW:[],PY:["AR","BO","BR"],QA:["SA"],RO:["BG","HU","MD","RS","UA"],RS:["BA","BG","HR","HU","ME","MK","RO","XK"],RU:["AZ","BY","CN","EE","FI","GE","KP","KZ","LT","LV","MN","NO","PL","UA"],RW:["BI","CD","TZ","UG"],SA:["AE","IQ","JO","KW","OM","QA","YE"],SB:[],SC:[],SD:["CF","EG","ER","ET","LY","SS","TD"],SE:["FI","NO"],SG:[],SI:["AT","HR","HU","IT"],SK:["AT","CZ","HU","PL","UA"],SL:["GN","LR"],SM:["IT"],SN:["GM","GN","GW","ML","MR"],SO:["DJ","ET","KE"],SR:["BR","GF","GY"],SS:["CD","CF","ET","KE","SD","UG"],ST:[],SV:["GT","HN"],SY:["IL","IQ","JO","LB","TR"],SZ:["MZ","ZA"],TD:["CF","CM","LY","NE","NG","SD"],TG:["BF","BJ","GH"],TH:["KH","LA","MM","MY"],TJ:["AF","CN","KG","UZ"],TL:["ID"],TM:["AF","IR","KZ","UZ"],TN:["DZ","LY"],TO:[],TR:["AM","AZ","BG","GE","GR","IQ","IR","SY"],TT:[],TV:[],TZ:["BI","CD","KE","MW","MZ","RW","UG","ZM"],UA:["BY","HU","MD","PL","RO","RU","SK"],UG:["CD","KE","RW","SS","TZ"],US:["CA","MX"],UY:["AR","BR"],UZ:["AF","KG","KZ","TJ","TM"],VA:["IT"],VC:[],VE:["BR","CO","GY"],VN:["CN","KH","LA"],VU:[],WS:[],YE:["OM","SA"],ZA:["BW","LS","MZ","NA","SZ","ZW"],ZM:["AO","BW","CD","MW","MZ","NA","TZ","ZW"],ZW:["BW","MZ","ZA","ZM"]
};

export function nomPays(code){ return PAYS[code]?.n || PAYS_MONDE[code]?.n || code || ""; }
export function voisins(code){ return (FRONTIERES[code]||[]).filter(v => PAYS[v] || PAYS_MONDE[v]); }
export function drapeau(code){
  if(!code || code.length!==2) return "";
  const pts = [...code.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65);
  return pts.every(p => p>=0x1F1E6 && p<=0x1F1FF) ? String.fromCodePoint(...pts) : "";
}

export function gnews(q, gl, lang){
  const hl = lang==="en" ? "en-GB" : "fr";
  return "https://news.google.com/rss/search?q="+encodeURIComponent(q)+"&hl="+hl+"&gl="+gl+"&ceid="+gl+":"+(lang==="en"?"en":"fr");
}
// Édition nationale Google News (pas de mot-clé) — utilisée pour les pays
// "reste du monde" hors périmètre curaté : un seul flux générique par pays,
// sans détail de zone (aucune donnée de localité n'existe pour eux).
export function gnewsPays(gl, lang){
  const hl = lang==="en" ? "en-GB" : "fr";
  return "https://news.google.com/rss?hl="+hl+"&gl="+gl+"&ceid="+gl+":"+(lang==="en"?"en":"fr");
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
      L.push({u:gnews('"'+P.n+'" '+t, P.gl, P.lang), p, n:"Veille thématique — "+P.n, f:65, zone:null, agrege:true});
    });
    // radios et presse locale : mêmes faits, souvent relayés avant la presse nationale
    if(inclureRadios){
      L.push({u:gnews('"'+P.n+'" radio', P.gl, P.lang), p, n:"Radios locales — "+P.n, f:52, zone:null, type:"radio", agrege:true});
      L.push({u:gnews('"'+P.n+'" (site OR blog OR journal local)', P.gl, P.lang), p, n:"Presse et pages locales — "+P.n, f:48, zone:null, type:"local", agrege:true});
    }
  });
  // pays "reste du monde" (hors périmètre curaté) : un flux générique par
  // pays actif, sans détail de zone — cf. gnewsPays().
  [...paysActifs].filter(p=>!PAYS[p] && PAYS_MONDE[p]).forEach(p=>{
    const P = PAYS_MONDE[p];
    L.push({u:gnewsPays(p, P.lang), p, n:"Édition nationale — "+P.n, f:55, zone:null, agrege:true});
  });
  const dejaZone = new Set();
  function ajouterZone(z, estPrioritaire){
    if(dejaZone.has(z.z) || !paysActifs.has(z.p)) return;
    dejaZone.add(z.z);
    const P=PAYS[z.p];
    const q = z.loc.slice(0,3).map(l=>'"'+l+'"').join(" OR ");
    L.push({u:gnews(q+(z.p==="CI"?" Côte d'Ivoire":" "+P.n), P.gl, P.lang), p:z.p, n:"Zone "+z.z+(z.p!=="CI"?" ("+P.n+")":""), f:z.p==="CI"?62:60, zone:z.z, prio:!!estPrioritaire, agrege:true});
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
