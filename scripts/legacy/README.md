# scripts/legacy — Archives

**Archives — NE PAS RELANCER : ces scripts écraseraient les fichiers `js/data/*.js`, qui sont désormais la source de vérité.**

Ces scripts Python ont servi à générer la première version des données du site
(chapitres, cours, exercices, fiches). Depuis, les fichiers `js/data/*.js` ont été
corrigés et enrichis à la main : relancer un de ces scripts ferait perdre ces
corrections (par exemple, `build_database.py` ramènerait `chapters.js` à 18 chapitres
et réintroduirait le champ obsolète `fullText` dans `worksheets.js`).

| Script | Fichier(s) qu'il écraserait |
| --- | --- |
| `build_database.py` | `js/data/chapters.js`, `js/data/worksheets.js` |
| `generate_courses_data.py` | `js/data/courses.js` |
| `generate_exercises_data.py` | `js/data/exercises.js` |
| `enrich_cycle4.py` | `js/data/data_5eme.js`, `js/data/data_4eme.js` |
| `add_generators.py` | `js/randomGenerators.js` |
| `add_worksheets.py` | fiches d'exercices (`js/data/*.js`) |

Ils ne sont conservés qu'à titre d'historique. Pour modifier un contenu, éditez
directement le fichier `js/data/…` concerné, puis lancez les tests :

```sh
node scripts/tests/test_data_content.js
node scripts/test_math_integrity.js
```
