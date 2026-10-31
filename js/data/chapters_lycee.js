/**
 * Métadonnées des 47 chapitres du Lycée (Seconde, Première Spécialité, Terminale Spé & Expertes)
 * Conforme aux programmes officiels de l'Éducation nationale
 */

const MATHS_CHAPTERS_LYCEE = [
  // =========================================================================
  // CLASSE DE SECONDE GÉNÉRALE & TECHNOLOGIQUE (15 chapitres)
  // =========================================================================
  {
    "id": "2N1",
    "level": "2nde",
    "domain": "nombres",
    "domainName": "Nombres et Calculs",
    "folder": "2N1_Arithmetique_et_reels",
    "num": "2N1",
    "title": "Ensembles de nombres, arithmétique et nombres réels",
    "shortTitle": "Nombres réels & Arithmétique",
    "icon": "hash",
    "badge": "Maître des Ensembles",
    "color": "#059669",
    "description": "Ensembles de nombres N, Z, D, Q, R et vocabulaire ensembliste, multiples, diviseurs, parité, fractions irréductibles, encadrements décimaux, irrationalité de √2, logique (implication, contraposée, quantificateurs).",
    "skills": [
      "Identifier le plus petit ensemble de nombres auquel appartient un réel et utiliser ∈, ⊂, ∩, ∪",
      "Démontrer avec les multiples et la parité (somme de multiples, carré d'un impair)",
      "Démontrer que √2 est irrationnel et que 1/3 n'est pas décimal"
    ]
  },
  {
    "id": "2N2",
    "level": "2nde",
    "domain": "nombres",
    "domainName": "Nombres et Calculs",
    "folder": "2N2_Calcul_litteral",
    "num": "2N2",
    "title": "Calcul littéral, identités remarquables et factorisation",
    "shortTitle": "Calcul littéral & Identités",
    "icon": "square-root",
    "badge": "Alchimiste Algébrique",
    "color": "#10b981",
    "description": "Développement, factorisation, identités remarquables (a+b)², (a-b)², a²-b², quotient de fractions et expressions algébriques.",
    "skills": [
      "Développer et réduire des expressions algébriques complexes",
      "Factoriser à l'aide d'un facteur commun ou d'une identité remarquable",
      "Simplifier des quotients et mettre au même dénominateur"
    ]
  },
  {
    "id": "2N3",
    "level": "2nde",
    "domain": "nombres",
    "domainName": "Nombres et Calculs",
    "folder": "2N3_Ordre_et_valeur_absolue",
    "num": "2N3",
    "title": "Ordre, intervalles et valeur absolue",
    "shortTitle": "Intervalles & Valeur absolue",
    "icon": "sliders",
    "badge": "Régulateur d'Intervalles",
    "color": "#0d9488",
    "description": "Notation des intervalles [a; b], intersection et réunion, encadrements, définition et interprétation géométrique de la valeur absolue |x - a| ≤ r.",
    "skills": [
      "Traduire une inégalité en intervalle et déterminer intersection et réunion",
      "Calculer la valeur absolue d'un nombre réel et d'une différence",
      "Résoudre géométriquement des équations et inéquations du type |x - a| ≤ r"
    ]
  },
  {
    "id": "2N4",
    "level": "2nde",
    "domain": "nombres",
    "domainName": "Nombres et Calculs",
    "folder": "2N4_Equations_inequations",
    "num": "2N4",
    "title": "Équations, inéquations du premier degré et tableaux de signes",
    "shortTitle": "Équations & Inéquations",
    "icon": "equal",
    "badge": "Résolveur d'Inconnues",
    "color": "#14b8a6",
    "description": "Équations produit nul et quotient, signe d'une fonction affine ax+b, tableaux de signes d'un produit et d'un quotient, inéquations, isoler une variable dans une formule.",
    "skills": [
      "Résoudre des équations produit-nul et équations rationnelles simples",
      "Étudier le signe de ax+b et dresser un tableau de signes produit/quotient",
      "Résoudre des inéquations à l'aide d'un tableau de signes rigoureux"
    ]
  },
  {
    "id": "2N5",
    "level": "2nde",
    "domain": "nombres",
    "domainName": "Nombres et Calculs",
    "folder": "2N5_Proportions_pourcentages_evolutions",
    "num": "2N5",
    "title": "Proportions, pourcentages et évolutions",
    "shortTitle": "Proportions & Évolutions",
    "icon": "percent",
    "badge": "Expert des Pourcentages",
    "color": "#047857",
    "description": "Proportion d'une sous-population, proportion de proportion, taux d'évolution, coefficient multiplicateur, évolutions successives et évolution réciproque.",
    "skills": [
      "Calculer une proportion, un effectif et une proportion de proportion",
      "Passer d'un taux d'évolution au coefficient multiplicateur et inversement",
      "Calculer le taux global d'évolutions successives et le taux d'une évolution réciproque"
    ]
  },
  {
    "id": "2A1",
    "level": "2nde",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "2A1_Notion_de_fonction",
    "num": "2A1",
    "title": "Notion générale de fonction, ensemble de définition et courbes",
    "shortTitle": "Notion de fonction",
    "icon": "trending-up",
    "badge": "Traceur de Courbes",
    "color": "#0284c7",
    "description": "Ensemble de définition, image, antécédent(s), courbe représentative, résolution graphique d'équations f(x) = k et inéquations f(x) < g(x).",
    "skills": [
      "Déterminer l'ensemble de définition et calculer images et antécédents",
      "Lire et interpréter une courbe représentative dans un repère",
      "Résoudre graphiquement f(x) = k et f(x) ≤ g(x)"
    ]
  },
  {
    "id": "2A2",
    "level": "2nde",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "2A2_Variations_et_extremums",
    "num": "2A2",
    "title": "Variations et extremums d'une fonction",
    "shortTitle": "Variations & Extremums",
    "icon": "activity",
    "badge": "Guide des Sommets",
    "color": "#2563eb",
    "description": "Croissance et décroissance sur un intervalle, tableau de variations, maximum et minimum, variations des fonctions affines, problèmes d'optimisation, algorithmes de balayage et de dichotomie.",
    "skills": [
      "Dresser et exploiter un tableau de variations complet",
      "Déterminer le maximum et le minimum d'une fonction et résoudre un problème d'optimisation",
      "Comparer les images de deux nombres en justifiant par le sens de variation"
    ]
  },
  {
    "id": "2A3",
    "level": "2nde",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "2A3_Fonctions_de_reference",
    "num": "2A3",
    "title": "Fonctions de référence : valeur absolue, carré, inverse, racine carrée et cube",
    "shortTitle": "Fonctions de référence",
    "icon": "function",
    "badge": "Architecte des Fonctions",
    "color": "#3b82f6",
    "description": "Définitions, courbes, signe et variations des fonctions valeur absolue, carré x², inverse 1/x, racine carrée √x et cube x³ ; position relative de y = x et y = x² ; démonstrations des variations des fonctions carré et inverse.",
    "skills": [
      "Connaître les courbes, le signe et les variations des fonctions valeur absolue, carré, inverse, racine carrée et cube",
      "Résoudre des équations et inéquations du type f(x) = k ou f(x) < k avec une fonction de référence",
      "Comparer f(a) et f(b) et démontrer les variations des fonctions carré et inverse"
    ]
  },
  {
    "id": "2G1",
    "level": "2nde",
    "domain": "geometrie",
    "domainName": "Géométrie",
    "folder": "2G1_Reperage_dans_le_plan",
    "num": "2G1",
    "title": "Repérage cartésien, milieu d'un segment et distance dans le plan",
    "shortTitle": "Repérage & Distances",
    "icon": "crosshair",
    "badge": "Navigateur Cartésien",
    "color": "#d97706",
    "description": "Repère orthonormé, coordonnées du milieu d'un segment, formule de la distance euclidienne entre deux points, démonstrations géométriques.",
    "skills": [
      "Calculer les coordonnées du milieu d'un segment dans un repère",
      "Calculer la distance entre deux points dans un repère orthonormé",
      "Démontrer la nature d'un triangle (rectangle, isocèle) ou d'un quadrilatère"
    ]
  },
  {
    "id": "2G2",
    "level": "2nde",
    "domain": "geometrie",
    "domainName": "Géométrie",
    "folder": "2G2_Vecteurs_et_translations",
    "num": "2G2",
    "title": "Vecteurs du plan, translation et déterminant (colinéarité)",
    "shortTitle": "Vecteurs & Colinéarité",
    "icon": "arrow-up-right",
    "badge": "Pilote Vectoriel",
    "color": "#b45309",
    "description": "Définition géométrique d'un vecteur, égalité, somme (relation de Chasles), coordonnées, norme, critère de colinéarité xy' - yx' = 0.",
    "skills": [
      "Construire et combiner des vecteurs géométriquement avec Chasles",
      "Calculer les coordonnées et la norme d'un vecteur",
      "Tester la colinéarité de deux vecteurs pour prouver parallélisme ou alignement"
    ]
  },
  {
    "id": "2G3",
    "level": "2nde",
    "domain": "geometrie",
    "domainName": "Géométrie",
    "folder": "2G3_Droites_du_plan",
    "num": "2G3",
    "title": "Droites du plan, équations cartésiennes et réduites",
    "shortTitle": "Équations de droites",
    "icon": "slash",
    "badge": "Géomètre Linéaire",
    "color": "#92400e",
    "description": "Vecteur directeur, équation cartésienne ax+by+c=0, équation réduite y=mx+p, pente/coefficient directeur, parallélisme et intersection de droites.",
    "skills": [
      "Déterminer une équation réduite ou cartésienne d'une droite (deux points, point et vecteur directeur, point et pente)",
      "Lire et interpréter le coefficient directeur et l'ordonnée à l'origine",
      "Calculer les coordonnées du point d'intersection de deux droites données par leurs équations réduites"
    ]
  },
  {
    "id": "2S1",
    "level": "2nde",
    "domain": "algo",
    "domainName": "Probabilités et Statistiques",
    "folder": "2S1_Statistiques_descriptives",
    "num": "2S1",
    "title": "Statistiques descriptives : indicateurs, séries regroupées en classes et tableaux croisés",
    "shortTitle": "Statistiques descriptives",
    "icon": "bar-chart-2",
    "badge": "Analyste de Données",
    "color": "#7c3aed",
    "description": "Moyenne pondérée et linéarité, médiane, quartiles, écart-type, diagrammes en boîte, histogrammes et séries regroupées en classes, tableau croisé de deux variables qualitatives, fréquences marginales et conditionnelles.",
    "skills": [
      "Calculer et interpréter moyenne, médiane, quartiles et écart-type, y compris pour une série regroupée en classes",
      "Comparer deux séries à l'aide d'indicateurs et de diagrammes en boîte",
      "Compléter un tableau croisé et calculer des fréquences marginales et conditionnelles"
    ]
  },
  {
    "id": "2S2",
    "level": "2nde",
    "domain": "algo",
    "domainName": "Probabilités et Statistiques",
    "folder": "2S2_Probabilites_ensemble_fini",
    "num": "2S2",
    "title": "Probabilités : modèle probabiliste, probabilités conditionnelles et arbres pondérés",
    "shortTitle": "Probabilités conditionnelles",
    "icon": "help-circle",
    "badge": "Maître du Hasard",
    "color": "#6d28d9",
    "description": "Loi de probabilité sur un univers fini (hypothèse de modèle), équiprobabilité, événement contraire, probabilité conditionnelle P_A(B), arbres pondérés, tableaux croisés, inversion des conditionnements (faux positifs).",
    "skills": [
      "Calculer des probabilités dans une situation d'équiprobabilité",
      "Calculer une probabilité conditionnelle à partir d'un tableau croisé ou d'un arbre pondéré",
      "Distinguer P_A(B) et P_B(A), notamment pour un test de dépistage"
    ]
  },
  {
    "id": "2S3",
    "level": "2nde",
    "domain": "algo",
    "domainName": "Algorithmique et Programmation",
    "folder": "2S3_Echantillonnage_et_python",
    "num": "2S3",
    "title": "Fluctuation d'échantillonnage, loi des grands nombres et simulation",
    "shortTitle": "Échantillonnage et simulation",
    "icon": "terminal",
    "badge": "Codeur Scientifique",
    "color": "#4f46e5",
    "description": "Échantillon, fréquence observée, fluctuation d'échantillonnage, loi des grands nombres (version vulgarisée), fonctions Python renvoyant un résultat aléatoire et simulation d'expériences répétées.",
    "skills": [
      "Écrire une fonction Python renvoyant le résultat d'une expérience aléatoire",
      "Simuler des échantillons et calculer une fréquence observée",
      "Observer la loi des grands nombres et la fluctuation d'échantillonnage par simulation"
    ]
  },
  {
    "id": "2S4",
    "level": "2nde",
    "domain": "algo",
    "domainName": "Algorithmique et Programmation",
    "folder": "2S4_Algorithmique_programmation",
    "num": "2S4",
    "title": "Algorithmique et programmation : variables, instructions conditionnelles, boucles et fonctions",
    "shortTitle": "Algorithmique & Python",
    "icon": "code",
    "badge": "Apprenti Programmeur",
    "color": "#7c3aed",
    "description": "Variables et types (entier, flottant, chaîne, booléen), affectation, instructions conditionnelles if/elif/else, boucles bornées for et non bornées while, fonctions Python avec paramètres et valeur renvoyée.",
    "skills": [
      "Exécuter à la main un programme Python en suivant l'évolution des variables",
      "Choisir entre une boucle bornée et une boucle non bornée et écrire une instruction conditionnelle",
      "Écrire et appeler une fonction Python avec paramètres et valeur renvoyée"
    ]
  },

  // =========================================================================
  // PREMIÈRE SPÉCIALITÉ MATHÉMATIQUES (12 chapitres)
  // =========================================================================
  {
    "id": "1A1",
    "level": "1ere",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "1A1_Second_degre",
    "num": "1A1",
    "title": "Polynôme du second degré : forme canonique, racines et signe",
    "shortTitle": "Second degré & Trinôme",
    "icon": "divide-circle",
    "badge": "Dompteur de Paraboles",
    "color": "#0284c7",
    "description": "Forme factorisée (racines, signe, somme et produit), forme canonique par complétion du carré, discriminant Δ = b² - 4ac, résolution et factorisation, signe du trinôme, logique (conditions nécessaires et suffisantes, quantificateurs).",
    "skills": [
      "Étudier le signe d'un trinôme donné sous forme factorisée et factoriser en diversifiant les stratégies",
      "Calculer le discriminant Δ et résoudre ax² + bx + c = 0",
      "Choisir la forme adaptée (développée, canonique, factorisée) pour résoudre un problème"
    ]
  },
  {
    "id": "1A2",
    "level": "1ere",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "1A2_Nombre_derive_et_tangente",
    "num": "1A2",
    "title": "Nombre dérivé, taux de variation et tangente à une courbe",
    "shortTitle": "Nombre dérivé & Tangente",
    "icon": "zap",
    "badge": "Pionnier du Différentiel",
    "color": "#0369a1",
    "description": "Taux de variation et sécantes, nombre dérivé f'(a) comme limite du taux de variation, tangente (limite des sécantes) d'équation y = f(a) + f'(a)(x - a), approximation affine, vitesse instantanée et coût marginal, valeur absolue non dérivable en 0.",
    "skills": [
      "Calculer un taux de variation et déterminer le nombre dérivé comme limite",
      "Lire graphiquement le coefficient directeur d'une tangente",
      "Déterminer par le calcul l'équation cartésienne de la tangente en un point"
    ]
  },
  {
    "id": "1A3",
    "level": "1ere",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "1A3_Fonction_derivee_et_variations",
    "num": "1A3",
    "title": "Fonction dérivée, règles de dérivation et variations d'une fonction",
    "shortTitle": "Dérivation & Variations",
    "icon": "trending-up",
    "badge": "Maître des Variations",
    "color": "#075985",
    "description": "Dérivées des fonctions carré, cube, inverse, racine carrée et x ↦ xⁿ (n ∈ Z), opérations (somme, produit, inverse, quotient), lien entre signe de f' et variations, extremums, fonctions paires et impaires, optimisation.",
    "skills": [
      "Dériver des sommes, produits, inverses et quotients de fonctions",
      "Étudier le signe de f'(x) et dresser le tableau de variations",
      "Déterminer des extremums, résoudre un problème d'optimisation et exploiter la parité"
    ]
  },
  {
    "id": "1A4",
    "level": "1ere",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "1A4_Fonction_exponentielle",
    "num": "1A4",
    "title": "La fonction exponentielle : définition, propriétés et étude",
    "shortTitle": "Fonction Exponentielle",
    "icon": "arrow-up-right",
    "badge": "Explorateur Exponentiel",
    "color": "#2563eb",
    "description": "Définition comme unique fonction dérivable telle que f' = f et f(0) = 1, relation exp(a+b) = exp(a)exp(b), nombre e, signe et variations, dérivée de t ↦ e^(at), croissance et décroissance exponentielles, méthode d'Euler.",
    "skills": [
      "Manipuler les règles algébriques sur e^x (produit, quotient, puissances)",
      "Dériver t ↦ e^(at) et étudier des fonctions comportant e^(at)",
      "Modéliser une croissance ou une décroissance exponentielle"
    ]
  },
  {
    "id": "1A5",
    "level": "1ere",
    "domain": "nombres",
    "domainName": "Analyse et Suites",
    "folder": "1A5_Suites_numeriques",
    "num": "1A5",
    "title": "Généralités sur les suites numériques et sens de variation",
    "shortTitle": "Suites numériques",
    "icon": "layers",
    "badge": "Séquenceur Temporel",
    "color": "#1d4ed8",
    "description": "Définition d'une suite, formes explicites u_n = f(n) et récurrentes u_(n+1) = f(u_n), représentation graphique en toile d'araignée, sens de variation (u_(n+1) - u_n).",
    "skills": [
      "Calculer les termes d'une suite définie de manière explicite ou par récurrence",
      "Représenter graphiquement les premiers termes d'une suite récurrente",
      "Étudier le sens de variation d'une suite numérique"
    ]
  },
  {
    "id": "1A6",
    "level": "1ere",
    "domain": "nombres",
    "domainName": "Analyse et Suites",
    "folder": "1A6_Suites_arithmetiques_geometriques",
    "num": "1A6",
    "title": "Suites arithmétiques et suites géométriques",
    "shortTitle": "Suites Arith. & Géom.",
    "icon": "repeat",
    "badge": "Architecte des Suites",
    "color": "#1e40af",
    "description": "Définitions, raison r ou q, formule explicite du terme général u_n, somme des termes consécutifs (somme des entiers, somme des puissances de q), limites intuitives.",
    "skills": [
      "Identifier la nature d'une suite arithmétique ou géométrique",
      "Exprimer le terme général u_n en fonction de n",
      "Calculer la somme de termes consécutifs d'une suite arithmétique ou géométrique"
    ]
  },
  {
    "id": "1G1",
    "level": "1ere",
    "domain": "geometrie",
    "domainName": "Géométrie",
    "folder": "1G1_Trigonometrie",
    "num": "1G1",
    "title": "Trigonométrie : cercle trigonométrique, radian, cosinus et sinus d'un réel",
    "shortTitle": "Cercle Trigonométrique",
    "icon": "compass",
    "badge": "Maître du Cercle",
    "color": "#d97706",
    "description": "Cercle trigonométrique, longueur d'arc et radian, enroulement de la droite réelle, cosinus et sinus d'un réel, lien avec le triangle rectangle, valeurs remarquables et réels associés, méthode d'Archimède.",
    "skills": [
      "Convertir degrés et radians, calculer une longueur d'arc et placer l'image d'un réel sur le cercle",
      "Connaître et démontrer les valeurs remarquables de cos et sin (π/4, π/3)",
      "Lire sur le cercle les cosinus et sinus des réels associés (−x, π − x, π + x, π/2 − x)"
    ]
  },
  {
    "id": "1G2",
    "level": "1ere",
    "domain": "geometrie",
    "domainName": "Géométrie",
    "folder": "1G2_Produit_scalaire",
    "num": "1G2",
    "title": "Le produit scalaire dans le plan : définitions et propriétés",
    "shortTitle": "Produit Scalaire",
    "icon": "target",
    "badge": "Navigateur Vectoriel",
    "color": "#b45309",
    "description": "Définition géométrique u·v = ||u|| ||v|| cos(θ), projection orthogonale, expression analytique xx' + yy' dans un repère orthonormé, orthogonalité et bilinéarité.",
    "skills": [
      "Calculer un produit scalaire avec les normes et l'angle ou par projection",
      "Calculer un produit scalaire avec les coordonnées dans un repère orthonormé",
      "Utiliser le produit scalaire nul pour démontrer l'orthogonalité de deux vecteurs"
    ]
  },
  {
    "id": "1G3",
    "level": "1ere",
    "domain": "geometrie",
    "domainName": "Géométrie",
    "folder": "1G3_Applications_produit_scalaire",
    "num": "1G3",
    "title": "Applications du produit scalaire, formule d'Al-Kashi et droites",
    "shortTitle": "Al-Kashi & Droites",
    "icon": "triangle",
    "badge": "Triangulateur d'Al-Kashi",
    "color": "#92400e",
    "description": "Formule d'Al-Kashi, transformation de MA·MB et cercle de diamètre [AB], vecteur normal et équation cartésienne ax + by + c = 0, projeté orthogonal d'un point sur une droite, équation de cercle.",
    "skills": [
      "Calculer des longueurs et des angles dans un triangle quelconque avec Al-Kashi",
      "Déterminer une équation de droite à partir d'un point et d'un vecteur normal",
      "Déterminer une équation de cercle et le projeté orthogonal d'un point sur une droite"
    ]
  },
  {
    "id": "1S1",
    "level": "1ere",
    "domain": "algo",
    "domainName": "Probabilités et Statistiques",
    "folder": "1S1_Probabilites_conditionnelles",
    "num": "1S1",
    "title": "Probabilités conditionnelles et indépendance d'événements",
    "shortTitle": "Probas Conditionnelles",
    "icon": "git-branch",
    "badge": "Arboriste Aléatoire",
    "color": "#7c3aed",
    "description": "Probabilité conditionnelle P_A(B), arbres pondérés, partition de l'univers et formule des probabilités totales, indépendance, succession de deux épreuves indépendantes, répétition de n ≤ 4 épreuves de Bernoulli, méthode de Monte-Carlo.",
    "skills": [
      "Calculer une probabilité conditionnelle à partir d'un arbre ou tableau",
      "Appliquer rigoureusement la formule des probabilités totales",
      "Démontrer l'indépendance de deux événements aléatoires"
    ]
  },
  {
    "id": "1S2",
    "level": "1ere",
    "domain": "algo",
    "domainName": "Probabilités et Statistiques",
    "folder": "1S2_Variables_aleatoires",
    "num": "1S2",
    "title": "Variables aléatoires réelles, espérance, variance et écart-type",
    "shortTitle": "Variables Aléatoires",
    "icon": "cpu",
    "badge": "Espérance et Risque",
    "color": "#6d28d9",
    "description": "Variable aléatoire réelle sur un univers fini, loi de probabilité, espérance, variance, écart-type, linéarité de l'espérance, formule de König-Huygens, jeu équitable, simulation d'échantillons.",
    "skills": [
      "Déterminer la loi de probabilité d'une variable aléatoire",
      "Calculer et interpréter l'espérance mathématique E(X) comme moyenne de long terme",
      "Calculer la variance et l'écart-type pour évaluer la dispersion du risque"
    ]
  },
  {
    "id": "1S3",
    "level": "1ere",
    "domain": "algo",
    "domainName": "Algorithmique et Programmation",
    "folder": "1S3_Algorithmique_Python",
    "num": "1S3",
    "title": "Algorithmique et programmation en Python : listes, suites, seuils et simulations",
    "shortTitle": "Python : listes & suites",
    "icon": "terminal",
    "badge": "Codeur des Suites",
    "color": "#6d28d9",
    "description": "Listes Python (création, compréhension, append, len, indices, parcours), calcul de termes et de sommes de suites, algorithmes de seuil avec while, simulation d'expériences aléatoires et méthode de balayage.",
    "skills": [
      "Créer, modifier et parcourir une liste Python, en extension ou en compréhension",
      "Calculer des termes et des sommes de suites et programmer une recherche de seuil",
      "Simuler une expérience aléatoire et interpréter la fréquence obtenue"
    ]
  },

  // =========================================================================
  // TERMINALE GÉNÉRALE (SPÉCIALITÉ & EXPERTES) (20 chapitres)
  // =========================================================================
  {
    "id": "TA1",
    "level": "tale",
    "domain": "nombres",
    "domainName": "Analyse et Raisonnement",
    "folder": "TA1_Raisonnement_par_recurrence",
    "num": "TA1",
    "title": "Le raisonnement par récurrence",
    "shortTitle": "Récurrence",
    "icon": "check-square",
    "badge": "Maître de la Récurrence",
    "color": "#0284c7",
    "description": "Principe de récurrence (initialisation, hérédité, conclusion), applications aux sommes, inégalités et suites définies par récurrence.",
    "skills": [
      "Rédiger avec rigueur les trois étapes d'une démonstration par récurrence",
      "Démontrer des formules de sommes ou des inégalités pour tout n",
      "Éviter les pièges d'hérédité sans initialisation valide"
    ]
  },
  {
    "id": "TA2",
    "level": "tale",
    "domain": "fonctions",
    "domainName": "Analyse et Suites",
    "folder": "TA2_Limites_de_suites",
    "num": "TA2",
    "title": "Limites de suites et théorèmes de convergence",
    "shortTitle": "Limites de Suites",
    "icon": "fast-forward",
    "badge": "Traqueur d'Infini",
    "color": "#0369a1",
    "description": "Définition d'une limite finie ou infinie, opérations sur les limites, formes indéterminées, théorème de comparaison, théorème des gendarmes, convergence des suites monotones bornées.",
    "skills": [
      "Lever les formes indéterminées usuelles sur les suites",
      "Appliquer les théorèmes de comparaison et le théorème des gendarmes",
      "Utiliser le théorème de convergence monotone pour prouver l'existence d'une limite"
    ]
  },
  {
    "id": "TA3",
    "level": "tale",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "TA3_Limites_continuite_TVI",
    "num": "TA3",
    "title": "Limites de fonctions, continuité et Théorème des Valeurs Intermédiaires",
    "shortTitle": "Continuité & TVI",
    "icon": "anchor",
    "badge": "Pont de Continuité",
    "color": "#075985",
    "description": "Limites aux bornes, asymptotes horizontales, verticales et obliques, notion de continuité, Théorème des Valeurs Intermédiaires (TVI) et corollaire de la stricte monotonie (bijection).",
    "skills": [
      "Déterminer les asymptotes à la courbe d'une fonction",
      "Démontrer qu'une fonction est continue sur un intervalle",
      "Appliquer le corollaire du TVI pour justifier l'unicité d'une solution f(x) = k"
    ]
  },
  {
    "id": "TA4",
    "level": "tale",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "TA4_Convexite_et_inflexion",
    "num": "TA4",
    "title": "Convexité, concavité et points d'inflexion",
    "shortTitle": "Convexité & Inflexion",
    "icon": "smile",
    "badge": "Sculpteur de Convexité",
    "color": "#2563eb",
    "description": "Fonction convexe / concave, position relative par rapport aux tangentes, dérivée seconde f'', lien entre signe de f'' et convexité, détection des points d'inflexion.",
    "skills": [
      "Calculer la dérivée seconde f''(x)",
      "Étudier la convexité d'une fonction et dresser le tableau de concavité",
      "Déterminer les coordonnées des points d'inflexion d'une courbe"
    ]
  },
  {
    "id": "TA5",
    "level": "tale",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "TA5_Fonction_logarithme_neperien",
    "num": "TA5",
    "title": "La fonction logarithme népérien : propriétés, limites et croissances comparées",
    "shortTitle": "Logarithme Népérien",
    "icon": "book-open",
    "badge": "Maître du Logarithme",
    "color": "#1d4ed8",
    "description": "Définition comme bijection réciproque de exp, ln(ab) = ln(a) + ln(b), dérivée de ln(u), limites aux bornes et croissances comparées avec les puissances.",
    "skills": [
      "Résoudre des équations et inéquations avec ln et exp",
      "Dériver des fonctions comportant ln(u(x))",
      "Calculer des limites en utilisant les théorèmes de croissances comparées"
    ]
  },
  {
    "id": "TA6",
    "level": "tale",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "TA6_Primitives_equations_differentielles",
    "num": "TA6",
    "title": "Primitives et équations différentielles linéaires",
    "shortTitle": "Primitives & Équa-diff",
    "icon": "activity",
    "badge": "Résolveur Différentiel",
    "color": "#1e40af",
    "description": "Définition d'une primitive, tableau des primitives usuelles, équations différentielles linéaires y' = ay et y' = ay + b, condition initiale.",
    "skills": [
      "Déterminer les primitives d'une fonction continue",
      "Résoudre les équations différentielles y' = ay et y' = ay + b",
      "Trouver l'unique solution vérifiant une condition initiale y(x_0) = y_0"
    ]
  },
  {
    "id": "TA7",
    "level": "tale",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "TA7_Calcul_integral",
    "num": "TA7",
    "title": "Calcul intégral : intégrale, aire, valeur moyenne et intégration par parties",
    "shortTitle": "Calcul Intégral",
    "icon": "maximize-2",
    "badge": "Intégrateur d'Aires",
    "color": "#172554",
    "description": "Intégrale comme aire sous la courbe, théorème fondamental de l'analyse ∫_a^b f(t)dt = F(b) - F(a), linéarité, positivité, intégration par parties (IPP).",
    "skills": [
      "Calculer une intégrale à l'aide d'une primitive connue",
      "Appliquer la formule d'intégration par parties ∫ u'v = [uv] - ∫ uv'",
      "Calculer l'aire comprise entre deux courbes et la valeur moyenne d'une fonction"
    ]
  },
  {
    "id": "TA8",
    "level": "tale",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "TA8_Complements_derivation",
    "num": "TA8",
    "title": "Compléments sur la dérivation : fonctions composées et dérivée seconde",
    "shortTitle": "Composées & Dérivée seconde",
    "icon": "git-merge",
    "badge": "Virtuose de la Dérivation",
    "color": "#1d4ed8",
    "description": "Composée de deux fonctions, dérivée de g∘u (u^n, √u, 1/u, e^u, ln u, g(ax+b)), dérivée seconde f'', lien entre le signe de f'' et les variations de f', tangentes et variations de fonctions composées.",
    "skills": [
      "Reconnaître une fonction composée et appliquer la formule (g∘u)' = u' × (g'∘u)",
      "Calculer la dérivée seconde d'une fonction et l'utiliser pour étudier les variations de f'",
      "Étudier les variations d'une fonction composée et déterminer une équation de tangente"
    ]
  },
  {
    "id": "TA9",
    "level": "tale",
    "domain": "fonctions",
    "domainName": "Analyse et Fonctions",
    "folder": "TA9_Fonctions_sinus_cosinus",
    "num": "TA9",
    "title": "Fonctions sinus et cosinus : dérivées, périodicité, variations et équations",
    "shortTitle": "Fonctions sinus & cosinus",
    "icon": "radio",
    "badge": "Maître des Ondes",
    "color": "#0369a1",
    "description": "Dérivées de sin et cos, de sin(ax+b) et cos(ax+b), parité et 2π-périodicité, variations et courbes, limite de sin(x)/x en 0, résolution d'équations et d'inéquations trigonométriques sur un intervalle.",
    "skills": [
      "Dériver des fonctions construites à partir de sin et cos et étudier leurs variations",
      "Exploiter la parité et la périodicité pour réduire l'intervalle d'étude",
      "Résoudre sur un intervalle des équations sin(x) = a, cos(x) = a et des inéquations associées"
    ]
  },
  {
    "id": "TG1",
    "level": "tale",
    "domain": "geometrie",
    "domainName": "Géométrie de l'Espace",
    "folder": "TG1_Vecteurs_droites_espace",
    "num": "TG1",
    "title": "Vecteurs, droites et plans dans l'espace",
    "shortTitle": "Droites & Plans 3D",
    "icon": "box",
    "badge": "Architecte Spatial",
    "color": "#d97706",
    "description": "Bases et repères dans l'espace à 3 dimensions, colinéarité, vecteurs coplanaires, représentation paramétrique d'une droite et d'un plan.",
    "skills": [
      "Déterminer si trois vecteurs sont coplanaires",
      "Écrire la représentation paramétrique d'une droite de l'espace",
      "Étudier les positions relatives de deux droites (sécantes, parallèles, non coplanaires)"
    ]
  },
  {
    "id": "TG2",
    "level": "tale",
    "domain": "geometrie",
    "domainName": "Géométrie de l'Espace",
    "folder": "TG2_Produit_scalaire_espace_plans",
    "num": "TG2",
    "title": "Produit scalaire dans l'espace et équations cartésiennes de plans",
    "shortTitle": "Produit Scalaire 3D & Plans",
    "icon": "layers",
    "badge": "Géomètre de l'Espace",
    "color": "#b45309",
    "description": "Produit scalaire dans l'espace xx' + yy' + zz', orthogonalité de droites et de plans, vecteur normal à un plan, équation cartésienne ax + by + cz + d = 0, projection orthogonale.",
    "skills": [
      "Calculer le produit scalaire de deux vecteurs dans l'espace",
      "Déterminer l'équation cartésienne d'un plan à partir d'un point et d'un vecteur normal",
      "Calculer la distance d'un point à un plan par projection orthogonale"
    ]
  },
  {
    "id": "TS1",
    "level": "tale",
    "domain": "algo",
    "domainName": "Probabilités et Statistiques",
    "folder": "TS1_Loi_binomiale",
    "num": "TS1",
    "title": "Épreuves répétées, schéma de Bernoulli et loi binomiale",
    "shortTitle": "Loi Binomiale",
    "icon": "grid",
    "badge": "Maître de Bernoulli",
    "color": "#7c3aed",
    "description": "Épreuve et schéma de Bernoulli, arbre de Bernoulli, coefficients binomiaux (n k), loi binomiale B(n, p), formule P(X = k), espérance E(X) = np et variance V(X) = np(1-p).",
    "skills": [
      "Justifier qu'une variable aléatoire suit une loi binomiale B(n, p)",
      "Calculer des probabilités P(X = k), P(X ≤ k) et P(X ≥ k) avec la calculatrice",
      "Interpréter l'espérance et la variance dans des contextes concrets"
    ]
  },
  {
    "id": "TS2",
    "level": "tale",
    "domain": "algo",
    "domainName": "Probabilités et Statistiques",
    "folder": "TS2_Loi_des_grands_nombres",
    "num": "TS2",
    "title": "Sommes de variables aléatoires et loi des grands nombres",
    "shortTitle": "Loi des Grands Nombres",
    "icon": "shield",
    "badge": "Gardien de la Rigueur",
    "color": "#6d28d9",
    "description": "Somme de variables aléatoires indépendantes, linéarité de l'espérance, variance d'une somme, inégalité de Bienaymé-Tchebychev et inégalité de concentration.",
    "skills": [
      "Calculer l'espérance et la variance de la somme et de la moyenne d'un échantillon",
      "Appliquer l'inégalité de Bienaymé-Tchebychev pour majorer une dispersion",
      "Exploiter l'inégalité de concentration pour justifier la loi faible des grands nombres"
    ]
  },
  {
    "id": "TS3",
    "level": "tale",
    "domain": "algo",
    "domainName": "Combinatoire et Dénombrement",
    "folder": "TS3_Denombrement_combinatoire",
    "num": "TS3",
    "title": "Dénombrement et combinatoire : k-uplets, arrangements, permutations et combinaisons",
    "shortTitle": "Dénombrement & Combinatoire",
    "icon": "shuffle",
    "badge": "Maître du Dénombrement",
    "color": "#8b5cf6",
    "description": "Principes additif et multiplicatif, k-uplets (n^k), arrangements, permutations (n!), combinaisons et coefficients binomiaux, relation et triangle de Pascal, nombre de parties d'un ensemble (2^n).",
    "skills": [
      "Choisir le bon modèle selon que l'ordre compte et que les répétitions sont permises",
      "Calculer des arrangements, des permutations et des combinaisons",
      "Utiliser la relation de Pascal et dénombrer les parties d'un ensemble fini"
    ]
  },
  {
    "id": "TS4",
    "level": "tale",
    "domain": "algo",
    "domainName": "Algorithmique et Programmation",
    "folder": "TS4_Algorithmique_Python",
    "num": "TS4",
    "title": "Algorithmique et programmation en Python : listes, seuils, dichotomie et méthode de Monte-Carlo",
    "shortTitle": "Python : dichotomie & Monte-Carlo",
    "icon": "cpu",
    "badge": "Ingénieur des Algorithmes",
    "color": "#5b21b6",
    "description": "Listes et fonctions Python, affectation simultanée, suites et algorithmes de seuil (précision d'une limite), dichotomie pour encadrer une solution de f(x) = 0, méthode de Monte-Carlo pour estimer une aire, une intégrale ou π.",
    "skills": [
      "Écrire des fonctions Python manipulant des listes et des suites, et programmer une recherche de seuil",
      "Encadrer une solution d'équation par dichotomie et prévoir le nombre d'étapes nécessaires",
      "Estimer une aire, une intégrale ou π par la méthode de Monte-Carlo et interpréter le résultat"
    ]
  },
  {
    "id": "TX1",
    "level": "tale",
    "domain": "nombres",
    "domainName": "Mathématiques Expertes",
    "folder": "TX1_Nombres_complexes_algebre",
    "num": "TX1",
    "title": "Nombres complexes : forme algébrique et équations du second degré",
    "shortTitle": "Complexes : Algèbre",
    "icon": "plus-circle",
    "badge": "Initié des Imaginaires",
    "color": "#ec4899",
    "description": "Construction de C, unité imaginaire i² = -1, partie réelle et imaginaire, conjugué z̄, équations du second degré à coefficients réels et factorisation.",
    "skills": [
      "Calculer avec les nombres complexes sous forme algébrique",
      "Calculer l'inverse et le quotient en utilisant le conjugué",
      "Résoudre les équations du second degré dans C lorsque Δ < 0"
    ]
  },
  {
    "id": "TX2",
    "level": "tale",
    "domain": "geometrie",
    "domainName": "Mathématiques Expertes",
    "folder": "TX2_Nombres_complexes_geometrie",
    "num": "TX2",
    "title": "Nombres complexes et géométrie : forme trigonométrique et exponentielle",
    "shortTitle": "Complexes & Géométrie",
    "icon": "disc",
    "badge": "Rotateur Complexe",
    "color": "#db2777",
    "description": "Affixe d'un point et d'un vecteur, module |z|, argument arg(z), forme exponentielle re^(iθ), formule d'Euler et de Moivre, transformations du plan (rotations, homothéties).",
    "skills": [
      "Passer de la forme algébrique à la forme exponentielle et trigonométrique",
      "Interpréter géométriquement modules et arguments (distances et angles)",
      "Appliquer les complexes à la géométrie du plan et aux rotations"
    ]
  },
  {
    "id": "TX3",
    "level": "tale",
    "domain": "nombres",
    "domainName": "Mathématiques Expertes",
    "folder": "TX3_Arithmetique_congruences",
    "num": "TX3",
    "title": "Arithmétique dans Z et congruences",
    "shortTitle": "Arithmétique & Congruences",
    "icon": "hash",
    "badge": "Maître de l'Arithmétique",
    "color": "#be185d",
    "description": "Divisibilité dans Z, division euclidienne, relation de congruence a ≡ b [n], compatibilité avec addition et multiplication, critères de divisibilité et chiffrement.",
    "skills": [
      "Effectuer des calculs avec les congruences modulo n",
      "Résoudre des équations d'inconnue entière à l'aide des congruences",
      "Étudier les restes des puissances successives par périodicité"
    ]
  },
  {
    "id": "TX4",
    "level": "tale",
    "domain": "nombres",
    "domainName": "Mathématiques Expertes",
    "folder": "TX4_Bezout_Gauss_premiers",
    "num": "TX4",
    "title": "Théorèmes de Bézout et de Gauss, nombres premiers et chiffrement RSA",
    "shortTitle": "Bézout, Gauss & RSA",
    "icon": "key",
    "badge": "Cryptographe d'Élite",
    "color": "#9d174d",
    "description": "PGCD, algorithme d'Euclide, identité de Bézout au + bv = pgcd(a,b), équations diophantiennes ax + by = c, lemme de Gauss, décomposition en facteurs premiers et principe du chiffrement RSA.",
    "skills": [
      "Trouver les coefficients de Bézout avec l'algorithme d'Euclide étendu",
      "Résoudre des équations diophantiennes ax + by = c dans Z²",
      "Appliquer le théorème de Gauss et le petit théorème de Fermat"
    ]
  },
  {
    "id": "TX5",
    "level": "tale",
    "domain": "algo",
    "domainName": "Mathématiques Expertes",
    "folder": "TX5_Matrices_et_graphes",
    "num": "TX5",
    "title": "Calcul matriciel, graphes et chaînes de Markov",
    "shortTitle": "Matrices & Graphes",
    "icon": "share-2",
    "badge": "Maître des Matrices",
    "color": "#831843",
    "description": "Matrices (lignes, colonnes, carrées), addition, multiplication matricielle, matrice inverse, puissances de matrices M^n, graphes probabilistes et état stable d'une chaîne de Markov.",
    "skills": [
      "Multiplier des matrices et calculer l'inverse d'une matrice carrée d'ordre 2 ou 3",
      "Exprimer un système linéaire sous forme matricielle AX = B",
      "Modéliser une évolution par un graphe probabiliste et déterminer son état stable"
    ]
  }
];

// Fusion automatique dans le registre global des chapitres
if (!window.MATHS_CHAPTERS) window.MATHS_CHAPTERS = [];
window.MATHS_CHAPTERS.push(...MATHS_CHAPTERS_LYCEE);
