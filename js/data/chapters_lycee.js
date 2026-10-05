/**
 * Métadonnées des 40 chapitres du Lycée (Seconde, Première Spécialité, Terminale Spé & Expertes)
 * Conforme aux programmes officiels du Bulletin Officiel de l'Éducation Nationale et à maths-et-tiques.fr
 */

const MATHS_CHAPTERS_LYCEE = [
  // =========================================================================
  // CLASSE DE SECONDE GÉNÉRALE & TECHNOLOGIQUE (13 chapitres)
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
    "description": "Ensembles fondamentaux (N, Z, D, Q, R), inclusions, nombres premiers, décomposition en facteurs premiers, pgcd, irrationnalité de racine de 2.",
    "skills": [
      "Identifier le plus petit ensemble de nombres auquel appartient un réel",
      "Décomposer un entier en facteurs premiers et simplifier des racines",
      "Démontrer que √2 est irrationnel et manipuler les fractions irréductibles"
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
    "description": "Équations produits nuls, signe d'une fonction affine ax+b, tableaux de signes d'un produit et d'un quotient, inéquations rationnelles.",
    "skills": [
      "Résoudre des équations produit-nul et équations rationnelles simples",
      "Étudier le signe de ax+b et dresser un tableau de signes produit/quotient",
      "Résoudre des inéquations à l'aide d'un tableau de signes rigoureux"
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
    "description": "Définition formelle de la croissance et décroissance, tableau de variations, maximum et minimum sur un intervalle, encadrement d'images.",
    "skills": [
      "Dresser et exploiter un tableau de variations complet",
      "Déterminer le maximum et le minimum d'une fonction sur un intervalle",
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
    "title": "Fonctions de référence : carré, inverse, racine carrée, cube et affines",
    "shortTitle": "Fonctions de référence",
    "icon": "function",
    "badge": "Architecte des Fonctions",
    "color": "#3b82f6",
    "description": "Propriétés, courbes (parabole, hyperbole), variations et parité des fonctions carré x², inverse 1/x, racine √x et cube x³.",
    "skills": [
      "Connaître les variations et courbes des fonctions carré, inverse, racine et cube",
      "Résoudre des équations et inéquations impliquant x² ou √x",
      "Étudier la parité (paire / impaire) et les symétries associées"
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
      "Déterminer l'équation réduite ou cartésienne d'une droite connaissant deux points",
      "Lire et interpréter le coefficient directeur et l'ordonnée à l'origine",
      "Calculer les coordonnées du point d'intersection de deux droites sécantes"
    ]
  },
  {
    "id": "2S1",
    "level": "2nde",
    "domain": "algo",
    "domainName": "Probabilités et Statistiques",
    "folder": "2S1_Statistiques_descriptives",
    "num": "2S1",
    "title": "Statistiques descriptives : moyenne, médiane, quartiles et dispersion",
    "shortTitle": "Statistiques descriptives",
    "icon": "bar-chart-2",
    "badge": "Analyste de Données",
    "color": "#7c3aed",
    "description": "Moyenne pondérée, médiane, premier et troisième quartiles (Q1, Q3), écart interquartile, diagramme en boîte (boîte à moustaches).",
    "skills": [
      "Calculer la moyenne pondérée et déterminer médiane et quartiles",
      "Construire et interpréter un diagramme en boîte à moustaches",
      "Comparer deux séries statistiques à l'aide des indicateurs de position et dispersion"
    ]
  },
  {
    "id": "2S2",
    "level": "2nde",
    "domain": "algo",
    "domainName": "Probabilités et Statistiques",
    "folder": "2S2_Probabilites_ensemble_fini",
    "num": "2S2",
    "title": "Probabilités sur un ensemble fini : événements, réunion et intersection",
    "shortTitle": "Probabilités finies",
    "icon": "help-circle",
    "badge": "Maître du Hasard",
    "color": "#6d28d9",
    "description": "Univers fini, loi de probabilité, équiprobabilité, événements contraires, formule P(A ∪ B) = P(A) + P(B) - P(A ∩ B), arbres et tableaux.",
    "skills": [
      "Calculer des probabilités dans une situation d'équiprobabilité",
      "Modéliser une expérience aléatoire par un arbre ou un tableau à double entrée",
      "Appliquer rigoureusement la formule de la réunion et de l'événement contraire"
    ]
  },
  {
    "id": "2S3",
    "level": "2nde",
    "domain": "algo",
    "domainName": "Algorithmique et Programmation",
    "folder": "2S3_Echantillonnage_et_python",
    "num": "2S3",
    "title": "Échantillonnage, fluctuation et algorithmique en Python",
    "shortTitle": "Python & Échantillonnage",
    "icon": "terminal",
    "badge": "Codeur Scientifique",
    "color": "#4f46e5",
    "description": "Principe de l'échantillonnage, intervalle de fluctuation, simulation de tirages aléatoires en Python avec random, boucles for et while.",
    "skills": [
      "Comprendre et analyser un script Python (variables, conditions, boucles)",
      "Simuler des tirages aléatoires et calculer une fréquence observée",
      "Interpréter la variabilité d'un échantillon à l'aide de la loi des grands nombres"
    ]
  },

  // =========================================================================
  // PREMIÈRE SPÉCIALITÉ MATHÉMATIQUES (11 chapitres)
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
    "description": "Forme développée, canonique et factorisée, discriminant Δ = b² - 4ac, nombre de racines, factorisation et tableau de signes du trinôme.",
    "skills": [
      "Mettre un trinôme sous forme canonique",
      "Calculer le discriminant Δ et résoudre ax² + bx + c = 0",
      "Dresser le tableau de signes d'un trinôme et résoudre une inéquation du second degré"
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
    "description": "Taux de variation, définition du nombre dérivé f'(a) comme limite quand h -> 0, interprétation géométrique comme coefficient directeur, équation de la tangente y = f'(a)(x-a) + f(a).",
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
    "description": "Dérivées des fonctions usuelles (x^n, 1/x, √x), opérations (u+v, ku, uv, u/v), théorème fondamental reliant signe de f'(x) et sens de variation de f, extremums locaux.",
    "skills": [
      "Dériver des sommes, produits et quotients de fonctions",
      "Étudier le signe de la fonction dérivée f'(x)",
      "Dresser le tableau de variations complet et déterminer les extremums locaux"
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
    "description": "Définition unique de la fonction f telle que f'=f et f(0)=1, relation fonctionnelle exp(a+b)=exp(a)exp(b), stricte positivité, stricte croissance et allure de la courbe.",
    "skills": [
      "Manipuler les règles algébriques sur e^x (produit, quotient, puissances)",
      "Dériver des fonctions composées du type e^(u(x))",
      "Résoudre des équations et inéquations comportant l'exponentielle"
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
    "title": "Trigonométrie, cercle trigonométrique et fonctions sinus et cosinus",
    "shortTitle": "Cercle Trigonométrique",
    "icon": "compass",
    "badge": "Maître du Cercle",
    "color": "#d97706",
    "description": "Enroulement de la droite des réels, mesure en radian, cosinus et sinus sur le cercle trigonométrique, valeurs remarquables (π/6, π/4, π/3), parité et périodicité.",
    "skills": [
      "Convertir degrés et radians et placer les angles remarquables sur le cercle",
      "Utiliser cos²(x) + sin²(x) = 1 et les formules d'angles associés (π-x, π+x, etc.)",
      "Résoudre des équations trigonométriques simples cos(x) = a et sin(x) = b"
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
    "description": "Théorème d'Al-Kashi (loi des cosinus), théorème de la médiane, vecteur normal à une droite et équation cartésienne ax + by + c = 0.",
    "skills": [
      "Calculer des longueurs et angles dans un triangle quelconque avec Al-Kashi",
      "Déterminer un vecteur normal à une droite et son équation cartésienne",
      "Calculer la distance d'un point à une droite et projeter orthogonalement"
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
    "description": "Définition P_A(B) = P(A ∩ B) / P(A), construction d'un arbre pondéré, formule des probabilités totales, indépendance de deux événements.",
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
    "description": "Définition d'une variable aléatoire discrète, loi de probabilité, espérance mathématique E(X), variance V(X), écart-type σ(X), jeu équitable.",
    "skills": [
      "Déterminer la loi de probabilité d'une variable aléatoire",
      "Calculer et interpréter l'espérance mathématique E(X) comme moyenne de long terme",
      "Calculer la variance et l'écart-type pour évaluer la dispersion du risque"
    ]
  },

  // =========================================================================
  // TERMINALE GÉNÉRALE (SPÉCIALITÉ & EXPERTES) (16 chapitres)
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
