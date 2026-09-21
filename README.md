# Zone-Maths — Plateforme Web d'Apprentissage Adaptatif des Mathématiques au Collège
## Collège Cycle 4 (5ème, 4ème, 3ème / Brevet DNB) — Zone Optimale d'Apprentissage (ZPD & Flow)
### Créé par Loïc Delaporte, Professeur de Mathématiques

Cette application web pédagogique a été spécialement conçue pour couvrir l'intégralité du programme officiel de mathématiques du **Cycle 4** (5ème, 4ème et 3ème / DNB), en s'appuyant sur les attendus du Bulletin Officiel de l'Éducation Nationale.

---

## 🚀 Comment lancer le site ?

L'application est **100 % autonome et fonctionne sans connexion Internet** (bibliothèque mathématique KaTeX et polices vectorielles intégrées localement).

### Méthode 1 : Ouverture directe (Recommandée)
1. Ouvrez le dossier `Site/` (ou double-cliquez sur `index.html`).
2. Le site s'ouvre instantanément dans votre navigateur habituel (Firefox, Chrome, Edge, Safari).

### Méthode 2 : Serveur local (Réseau d'établissement ou classe mobile)
Si vous souhaitez partager le site sur le réseau local du collège :
```bash
cd Site
python3 -m http.server 8000
```
Puis accédez à `http://localhost:8000` (ou l'adresse IP de la machine sur le réseau).

---

## 🎓 Navigation Multi-Niveaux Cycle 4

Un sélecteur ergonomique de niveau situé directement dans l'en-tête permet de basculer instantanément entre :
- **5ème** : 16 chapitres fondamentaux (nombres relatifs, priorités opératoires, fractions, angles et parallélisme, triangles, prismes, symétrie centrale, proportionnalité, Scratch).
- **4ème** : 14 chapitres de consolidation et d'abstraction (multiplication/division des relatifs, puissances de 10, racines carrées, équations $ax+b=c$, théorème de Pythagore, translations, pyramides et cônes, ratios, notion de fonction).
- **3ème (DNB)** : 18 chapitres d'approfondissement et préparation au Brevet des Collèges (Thalès, trigonométrie, arithmétique, homothéties, fonctions affines et linéaires, probabilités, Scratch DNB).

> **Conservation des données** : Le niveau actif ainsi que les pourcentages de maîtrise, séries et XP de chaque niveau sont mémorisés de façon indépendante dans le `localStorage` de l'appareil.

---

## ⚡ Fonctionnalités Pédagogiques Clés

1. **🎯 Moteur Adaptatif ZPD (Zone Proximale de Développement & Théorie du Flow)** :
   - Difficulté continue proportionnelle au pourcentage de réussite de l'élève.
   - Paliers 1 à 4 : Socle & Automatismes, Entraînement Guidé, Type Brevet / Problèmes, et Défi Approfondissement.
   - Régulation fine de la maîtrise : progression et régression calibrées entre **+1% et +5%** par question selon les séries.
   - Mélange aléatoire dynamique des QCM (algorithme de Fisher-Yates) éliminant tout biais de position.

2. **🎲 Générateurs Procéduraux Aléatoires Infinis** :
   - Questions générées à données variables à l'infini avec solutions exactes, rédactions types et étapes détaillées.
   - Bouton « Question Aléatoire » utilisable à volonté pour s'entraîner sans limite.

3. **📝 Devoir Surveillé Blanc d'Entraînement (Format 1 Page A4 Épuré)** :
   - Génère un sujet complet sur-mesure à partir des chapitres sélectionnés du niveau actif.
   - Mise en page condensée sur 2 colonnes sans pointillés superflus (travail sur copie d'élève).
   - Tient sur **1 seule page A4** à l'impression (`Ctrl+P`).
   - Corrigé officiel d'auto-évaluation détaillé disponible en 1 clic.

4. **⏱️ Mode Rituel Flash / Diaporama (Type MathsMentales)** :
   - Projetez en début d'heure une série de questions flash chronométrées (15s, 30s, 45s, 60s ou manuel).
   - Grand affichage KaTeX, barre d'avancement animée et correction projetable collective.

5. **🔄 Réinitialisation à 0 % Contrôlée** :
   - Bouton `🔄 Réinitialiser ce chapitre (0%)` dans chaque jauge de chapitre.
   - Bouton `🔄 Tout à 0%` pour réinitialiser l'ensemble des chapitres du niveau actif en toute sécurité.

---

## 🗂️ Sommaire des 48 Chapitres Couverts (Cycle 4)

### Classe de 5ème (16 chapitres)
- **5N1** : Opérations et priorités opératoires
- **5N2** : Nombres relatifs : découverte et opérations
- **5N3** : Fractions et nombres rationnels
- **5N4** : Puissances simples et carrés
- **5N5** : Calcul littéral et initiation aux équations
- **5G1** : Repérage sur une droite et dans le plan
- **5G2** : Symétrie centrale et demi-tour
- **5G3** : Angles et parallélisme
- **5G4** : Triangles : constructions, droites remarquables et aire
- **5G5** : Parallélogrammes et quadrilatères particuliers
- **5G6** : Espace : prismes droits et cylindres de révolution
- **5D1** : Statistiques : effectifs, fréquences et diagrammes
- **5D2** : Probabilités : découverte du hasard
- **5P1** : Proportionnalité, pourcentages et échelles
- **5P2** : Dépendance entre grandeurs
- **5A1** : Algorithmique et programmation avec Scratch

### Classe de 4ème (14 chapitres)
- **4N1** : Opérations sur les nombres relatifs (multiplication et division)
- **4N2** : Fractions et nombres rationnels : 4 opérations
- **4N3** : Puissances d'un nombre et puissances de 10
- **4N4** : Racines carrées et carrés parfaits
- **4N5** : Calcul littéral et équations du premier degré
- **4G1** : Théorème de Pythagore et réciproque
- **4G2** : Triangle rectangle et cercle circonscrit
- **4G3** : Translations et transformations du plan
- **4G4** : Espace : pyramides et cônes de révolution
- **4D1** : Statistiques : moyenne pondérée et médiane
- **4D2** : Probabilités : événements contraires et arbres
- **4P1** : Proportionnalité, ratios et pourcentages
- **4P2** : Notion de fonction et programmes de calcul
- **4A1** : Algorithmique : conditions et variables Scratch

### Classe de 3ème / DNB (18 chapitres)
- **N1** : Ensemble de nombres et fractions
- **N2** : Calcul littéral et identités remarquables
- **N3** : Puissances et notation scientifique
- **N4** : Résolution d'équations et inéquations
- **N5** : Arithmétique et nombres premiers
- **G0** : Théorème de Pythagore et réciproque
- **G1** : Théorème de Thalès et réciproque
- **G2** : Trigonométrie dans le triangle rectangle
- **G3** : Homothéties et effets d'échelle
- **G4** : Sphère et boule, repérage terrestre
- **G5** : Géométrie dans l'espace et sections planes
- **G6** : Rotations et transformations du plan
- **G7** : Triangles semblables
- **Org1** : Notion de fonction
- **Org2** : Statistiques (moyenne, médiane, étendue)
- **Org3** : Fonctions linéaires et affines
- **Org4** : Probabilités et arbres de dénombrement
- **Algo** : Algorithmique, Scratch et Tableur

---

### Mentions et Propriété Pédagogique
- **Auteur** : Loïc Delaporte, Professeur de Mathématiques.
- **Ressources d'appui & inspiration pédagogique** : [maths-et-tiques.fr](https://www.maths-et-tiques.fr/) (Yvan Monka) et [mathsmentales.net](https://mathsmentales.net/) (Sébastien Cogez).
