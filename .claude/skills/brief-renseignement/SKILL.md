---
name: brief-renseignement
description: "Génère un brief/rapport de synthèse de renseignement sûreté à partir des données collectées par le projet POINT SURETE (data/latest.json et data/zones.json) : faits marquants, zones à risque, corridors logistiques et marché BRVM pour la Côte d'Ivoire et les pays limitrophes (Mali, Burkina Faso, Guinée, Ghana, Libéria). Utilise ce skill dès que l'utilisateur demande un brief, une synthèse, un point de situation, un rapport de renseignement, l'état des zones à risque, les faits critiques du jour, ou une analyse sûreté/sécurité sur cette zone géographique — même s'il ne mentionne pas explicitement POINT SURETE ou le nom du skill."
---

## Contexte

POINT SURETE est un pipeline de collecte et d'analyse de renseignement sûreté (Côte d'Ivoire et pays limitrophes : Mali, Burkina Faso, Guinée, Ghana, Libéria). `scripts/collecte.mjs` interroge ~175 flux RSS/actualités et écrit un instantané glissant (~24h) dans `data/latest.json`, ainsi que `data/zones.json`. `index.html` est le tableau de bord web qui affiche ces données. Ce skill sert à produire, à la demande, une synthèse textuelle lisible de cet instantané — pas à relancer la collecte elle-même.

## Utiliser le script

Toute la logique d'agrégation (tri par criticité/fiabilité, filtrage, détection de péremption) est déjà écrite dans `scripts/generer_brief.py`. Ne réimplémente pas cette logique en la relisant du JSON à la main — lance le script, qui ne dépend que de la bibliothèque standard Python 3 (aucune installation requise).

```bash
python3 <chemin-vers-ce-skill>/scripts/generer_brief.py --data <repo>/data/latest.json
```

Options utiles (toutes optionnelles) :

| Option | Effet |
|---|---|
| `--pays CI,ML` | limite aux codes pays donnés |
| `--zone "abidjan"` | filtre par sous-chaîne de nom de zone |
| `--min-criticite ELEVE` | seuil de la section "faits marquants" (FAIBLE/MODERE/ELEVE/CRITIQUE, défaut ELEVE) |
| `--heures 24` | ne garde que les faits survenus dans les N heures avant la collecte (par défaut : toute la fenêtre du fichier) |
| `--max-faits`, `--max-zones`, `--max-corridors` | bornes d'affichage |
| `--sortie chemin.md` | écrit dans un fichier au lieu de stdout |
| `--stale-heures 36` | seuil au-delà duquel la collecte est signalée comme périmée |

Lance toujours `--help` en cas de doute plutôt que de deviner un nom d'option.

Si l'utilisateur donne une fenêtre temporelle en langage naturel ("les dernières 6h", "aujourd'hui", "cette semaine"), traduis-la en `--heures`. Si l'utilisateur cite un pays ou une ville par son nom, mappe vers le filtre correspondant (`--pays` pour un code ISO2 CI/ML/BF/GN/GH/LR, `--zone` pour une ville/région).

## Chemin des données

Le script attend `data/latest.json` relatif au répertoire d'exécution par défaut. Lance-le depuis la racine du dépôt POINT SURETE, ou passe `--data <chemin-absolu>`. S'il existe un `data/zones.json` séparé plus à jour que les zones embarquées dans `latest.json`, vérifie lequel est le plus récent avant de choisir — en pratique les deux sont régénérés ensemble par la même collecte donc `latest.json` seul suffit presque toujours.

## Fichier introuvable ou périmé

- Si `data/latest.json` n'existe pas, le script échoue proprement avec un message clair : proposer à l'utilisateur de lancer `npm run collecte` (collecte complète) ou `npm run collecte:rapide` (collecte rapide) depuis la racine du dépôt, puis relancer le brief.
- Si la collecte a plus de `--stale-heures` (36h par défaut), le brief l'indique en toutes lettres dans la vue d'ensemble ("PERIMEE, relancer `npm run collecte`"). Ne masque pas cet avertissement à l'utilisateur — signale-le explicitement avant de présenter le contenu, pour qu'il sache que les faits ne reflètent peut-être plus la situation actuelle.

## Format de sortie

Le script produit du Markdown structuré (vue d'ensemble → faits marquants → zones à risque → corridors → marché). C'est le format par défaut et le plus sûr : il reste lisible tel quel, y compris en session non interactive sans accès navigateur.

Ne convertis en artifact HTML stylé que si :
1. la session a effectivement accès à l'outil Artifact, ET
2. l'utilisateur demande explicitement quelque chose de visuel ("un joli rapport", "un dashboard", "à présenter") plutôt qu'un simple texte/brief.

Dans ce cas, charge le skill `artifact-design` avant d'écrire le HTML, et garde la même structure de contenu (les sections du Markdown) plutôt que d'inventer une autre organisation. Ne fabrique jamais de faits, scores ou tickers qui ne sont pas dans la sortie du script — le rapport doit être une mise en forme fidèle des données, jamais un enrichissement inventé.

## Limites à respecter

- `data/latest.json` est un instantané glissant (~24h autour de `genere_le`), pas un historique complet : ne prétends pas couvrir une période plus large que celle réellement présente dans le fichier (affichée dans "Periode couverte").
- Les champs `pays` peuvent être `null` pour des faits non localisés (ex. actualité panafricaine) — ils ne disparaissent pas silencieusement, ils restent visibles dans les faits marquants mais sont exclus par un filtre `--pays`.
- Ce skill ne modifie aucun fichier du dépôt et ne fait aucun commit/push — il lit `data/*.json` et affiche un rapport. Si l'utilisateur veut committer un brief généré, demande confirmation avant de le faire (le repo suit des règles de commit strictes propres au projet).
