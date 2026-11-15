# L'Établi des Maths

Site de mathématiques gratuit et sans compte, de la 6e au CAPES : <https://etabli-des-maths.fr>.
HTML, CSS et JavaScript sans étape de compilation ni dépendance npm, publié par GitHub Pages depuis `main`.
Les scripts du dépôt n'ont besoin que de Node (version 22 ou plus).

Publier (`git push` sur `main`) met le site en ligne pour les élèves : c'est toujours une décision du propriétaire.

## Organisation

| Emplacement | Rôle |
| --- | --- |
| `index.html` | application ; déclare les données chargées à la demande |
| `js/app.js`, `js/app/*.js` | cœur et vues (accueil, outils, entraînement, cours, fiches, défi, bilan) |
| `js/data/*.js` | contenus : c'est la source de vérité |
| `js/generatorsCore.js`, `js/*Generators*.js`, `js/generators6e.js` | exercices générés ; aiguillage dans `generateForChapter` |
| `js/adaptiveEngine.js` | correction des réponses (`validateAnswer`, analyseur sans `eval`) |
| `cours/`, `sitemap.xml`, pages piliers | pages statiques **générées** : ne pas les modifier à la main |
| `sw.js` | service worker ; sa liste de pré-cache est générée |
| `scripts/` | génération et tests |
| `scripts/legacy/` | anciens scripts : **ne jamais les lancer**, ils écraseraient `js/data/*.js` |

### Ordre de chargement

Les scripts partagent des variables `window.*` : l'ordre des balises d'`index.html` compte.

1. `eventDelegation`, `themeInit`, KaTeX ;
2. les chapitres (`js/data/chapters*.js`) et les défis ;
3. les moteurs (`badges`, `storage`, `mathRenderer`, `adaptiveEngine`, `generatorsCore`, etc.), puis `dataLoader` ;
4. `app.js`, puis `js/app/{home,tools,training,course,sheets,defi,stats}.js`, qui complètent `window.MathsApp` par `Object.assign` ; `test_core.js` refuse une clé définie deux fois ;
5. `pwaManager`, `analytics`.

Les fichiers de chaque niveau sont chargés à la demande par `js/dataLoader.js`, d'après le bloc `<script id="level-bundles">` d'`index.html`. Un nouveau fichier de niveau doit y être déclaré : les pages générées et les tests lisent cette même liste (`scripts/tests/load_site.js`).

## Commandes

```sh
python3 -m http.server 8765 --bind 127.0.0.1  # aperçu local (pas de file://)
node scripts/build_versions.js                # empreintes ?v= et pré-cache du service worker
node scripts/build_seo_pages.js               # cours/, sitemap.xml et pages piliers
node scripts/tests/run.js                     # tous les tests ; --quick : moins de tirages par générateur
node scripts/tests/e2e_brave.js [URL]         # parcours dans un navigateur
node scripts/build_qr_codes.js                # QR codes, après un ajout de chapitres (nécessite qrencode)
```

Avant une mise en ligne : `build_versions.js`, `build_seo_pages.js`, puis `run.js`, qui doit être entièrement vert.

Sans URL, `e2e_brave.js` sert lui-même le dépôt sur un port libre (ou `E2E_PORT`). Il utilise `CHROME_BIN` s'il est défini, sinon le premier trouvé parmi `brave`, `chromium` et `google-chrome`.

## Intégration continue

`.github/workflows/tests.yml` lance `run.js` à chaque push et pull request, ainsi que le parcours navigateur dans un job séparé et non bloquant.

Ce contrôle est **informatif** : la publication « depuis une branche » de GitHub Pages n'attend pas son résultat. Pour qu'un échec empêche la mise en ligne, il faut au choix :

- passer la source de Pages sur « GitHub Actions », avec un job de déploiement qui dépend du job `tests` ;
- travailler par branches et protéger `main` en exigeant ce contrôle avant la fusion.

## Ajouter un chapitre ou un niveau

**Chapitre**

1. Le déclarer dans le fichier `js/data/chapters*.js` du niveau, avec un identifiant conforme à la table ci-dessous.
2. Écrire le cours, les exercices, les fiches et la banque de DS dans les fichiers du niveau.
3. Si besoin, ajouter un générateur (voir `generateForChapter` dans `js/generatorsCore.js`).
4. Lancer `build_qr_codes.js`, puis la séquence d'avant mise en ligne.

**Niveau** : en plus, déclarer ses fichiers dans `level-bundles`, puis compléter `VALID_LEVELS` et les libellés de `js/app.js`, `LEVELS` dans `scripts/build_seo_pages.js` et `CHAPTER_ID_RULES` dans `scripts/tests/test_data_content.js`. Certains traitements dépendent du niveau : les chercher dans `js/` à partir d'un niveau voisin.

L'URL d'une page de cours est dérivée du **titre** du chapitre : changer un `title` change l'URL. Une page relais est alors générée d'après `scripts/cours_urls.json`, à committer avec `cours/`.

## Identifiants

Les identifiants de chapitre figurent dans les liens, les QR codes imprimés et la progression des élèves : **ne jamais les renommer**. Il en va de même pour la clé `localStorage` `maths_3e_progress_v1`, qui contient la progression de tout le site malgré son nom. `test_data_content.js` refuse un nouvel identifiant hors convention.

| Niveau | `level` | Identifiants | Données principales | `cours/` |
| --- | --- | --- | --- | --- |
| 6e | `6eme` | `6N1`, `6G1`… | `data_6eme`, `flashcards_6eme`, `ds_bank_6eme` | `6e` |
| 5e | `5eme` | `5N1`, `5G1`… | `data_5eme`, `ds_bank_5eme` | `5e` |
| 4e | `4eme` | `4N1`, `4G1`… | `data_4eme`, `ds_bank_4eme` | `4e` |
| 3e | `3eme` | historiques : `N1`, `N2bis`, `G0`, `Org1`, `Algo`… ; nouveaux : `3N1`… | `courses`, `exercises`, `worksheets`, `brevet_problems`, `ds_bank_3eme` | `3e` |
| Seconde | `2nde` | `2N1`, `2A1`… | `data_2nde`, `flashcards_2nde`, `ds_bank_2nde` | `seconde` |
| Première | `1ere` | `1A1`, `1G1`… | `data_1ere`, `flashcards_1ere`, `ds_bank_1ere` | `premiere` |
| Terminale | `tale` | `TA1`, `TG1`… | `data_terminale`, `flashcards_tale`, `ds_bank_tale` | `terminale` |
| Licence 1 à 3 | `L1`, `L2`, `L3` | `L1-LOG`, `L2-DET`… | `data_l1`, `ds_bank_l1`, `data_proofs`… | `l1`, `l2`, `l3` |
| CAPES | `capes` | `capes-01`, `capes-oral2`, `capes-oral2-cas` | `data_capes`, `ds_bank_capes`, `data_proofs` | `capes` |
| CRPE | `crpe` | `crpe-01`… | `chapters_crpe`, `data_crpe`, `exercises_crpe` | `professeur-des-ecoles` |
| Prépa santé | `sante` | `sante-01`… | `chapters_sante`, `data_sante`, `exercises_sante` | `prepa-sante` |
| PASS / L.AS | `pass` | `pass-01`… | `chapters_sante`, `data_pass`, `exercises_pass` | `pass-las` |
| Véto (BCPST) | `veto` | `veto-01`… | `chapters_veto`, `data_veto`, `exercises_veto`, `exercises_veto_b` | `veto-bcpst` |

## Format des données

Des littéraux JavaScript assignés à des variables globales, sans compilation. Ce schéma résume les champs ; `?` marque un champ facultatif. `test_data_content.js` et `test_ds_banks.js` contrôlent la cohérence.

| Objet | Champs |
| --- | --- |
| Chapitre (`MATHS_CHAPTERS`) | `id`, `level`, `domain`, `domainName`, `folder`, `num`, `title`, `shortTitle`, `icon`, `badge`, `color`, `description`, `skills`, `complement?` |
| Cours (`MATHS_COURSES`) | `title`, `objectives`, `keyPoints[{title, content}]`, `methods[{title, example, steps}]`, `traps`, `flashcards[{q, a}]`, `domain?`, `level?` |
| Exercice (`MATHS_EXERCISES`) | `id`, `tier`, `title`, `statement`, `type`, `hint1`, `solution`, `answer?`, `hint2?`, `skill?`, `chapterId?`, `options?`, `correctIndex?`, `placeholder?`, `explanations?`, `acceptedAnswers?`, `answerType?`, `steps?` |
| Fiche (`MATHS_WORKSHEETS`) | `id`, `filename`, `title`, `statement`, `solution`, `type?` |
| Leçon de CAPES (`CAPES_LESSONS`) | `id`, `num`, `title`, `domain`, `level`, `prerequisites`, `plan[{part, content}]`, `keyTheorem{title, statement, proof}`, `developments`, `juryTips`, `complement?` |
| DS (`MATHS_DS_BANK`) | `id` préfixé par le chapitre, `title`, `difficulty` (1 à 4), `points` (2 à 10), `statement`, `solution`, `calculator?` |
| Problème de brevet (`MATHS_BREVET_PROBLEMS`) | `id`, `theme`, `points`, `title`, `statement`, `solution` |
| Flashcard supplémentaire (`MATHS_EXTRA_FLASHCARDS`) | `q`, `a` |

Une nouvelle banque de DS suit un format unique : un objet indenté par exercice, comme `ds_bank_4eme.js`. Quand un contenu très long est modifié, le découper en paragraphes.

## Conventions

- Français : virgule décimale `{,}` en mode math, intervalles `]a ; b[`, espace avant `;`, `:`, `?` et `!`.
- Contenus originaux, sans reprise ni mention de sites tiers.
- Scratch seul au collège, Python au lycée. Pas de QCM dans les DS.
- Factorisation toujours complète (`answerType` `factorisation`). Cos, sin et tan en fraction exacte ; seuls les longueurs et les angles s'arrondissent.
- Paliers à 6/8 ou 7/8 avec indice ; Grand Maître sans erreur ni indice.
- Politique de sécurité stricte (`scripts/csp.js`) : ni `eval`, ni attribut `on*=` (utiliser `data-click` et `data-args`), ni script en ligne exécutable.
