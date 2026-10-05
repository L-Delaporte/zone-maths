/**
 * Métadonnées des 41 modules de Licence de Mathématiques (L1, L2, L3)
 * Conçu fidèlement d'après les enseignements magistraux et syllabus des archives universitaires
 */

const MATHS_CHAPTERS_LICENCE = [
  // =========================================================================
  // LICENCE 1 — FONDEMENTS ALGÉBRIQUES ET ANALYTIQUES (11 modules)
  // =========================================================================
  {
    "id": "L1-LOG",
    "level": "L1",
    "domain": "nombres",
    "domainName": "Algèbre Fondamentale",
    "folder": "L1_LOG_Logique_ensembles",
    "num": "L1-01",
    "title": "Logique mathématique, quantificateurs et théorie des ensembles",
    "shortTitle": "Logique & Ensembles",
    "icon": "check-circle",
    "badge": "Logicien Rigoureux",
    "color": "#7c3aed",
    "description": "Calcul propositionnel, quantificateurs (∀, ∃), connecteurs logiques, raisonnement par contraposition et par l'absurde, applications, injection, surjection, bijection, relations d'équivalence.",
    "skills": [
      "Maîtriser les quantificateurs et formaliser avec précision une assertion mathématique",
      "Démontrer l'injectivité, la surjectivité ou la bijectivité d'une application",
      "Manipuler les relations d'équivalence, classes d'équivalence et passages au quotient"
    ]
  },
  {
    "id": "L1-CMP",
    "level": "L1",
    "domain": "nombres",
    "domainName": "Algèbre Fondamentale",
    "folder": "L1_CMP_Complexes_polynomes",
    "num": "L1-02",
    "title": "Nombres complexes et arithmétique des polynômes dans K[X]",
    "shortTitle": "Complexes & Polynômes",
    "icon": "circle",
    "badge": "Algébriste Polyvalent",
    "color": "#6366f1",
    "description": "Racines n-ièmes de l'unité, polynômes à coefficients dans R ou C, division euclidienne, pgcd, algorithme d'Euclide, théorème de d'Alembert-Gauss, factorisation en irréductibles.",
    "skills": [
      "Déterminer les racines n-ièmes d'un nombre complexe et les représenter dans le plan",
      "Effectuer la division euclidienne de polynômes et calculer un pgcd",
      "Factoriser un polynôme en produit de polynômes irréductibles dans R[X] et C[X]"
    ]
  },
  {
    "id": "L1-MAT",
    "level": "L1",
    "domain": "nombres",
    "domainName": "Algèbre Linéaire",
    "folder": "L1_MAT_Matrices_gauss",
    "num": "L1-03",
    "title": "Calcul matriciel, systèmes linéaires et pivot de Gauss",
    "shortTitle": "Matrices & Pivot de Gauss",
    "icon": "grid",
    "badge": "Pivoteur de Gauss",
    "color": "#4f46e5",
    "description": "Espaces de matrices M_{n,p}(K), produit matriciel, algorithme du pivot de Gauss, échelonnement en lignes, résolution des systèmes linéaires, calcul de l'inverse d'une matrice.",
    "skills": [
      "Résoudre un système linéaire par la méthode du pivot de Gauss",
      "Échelonner une matrice et déterminer son rang",
      "Calculer l'inverse d'une matrice inversible par opérations élémentaires sur les lignes"
    ]
  },
  {
    "id": "L1-EV1",
    "level": "L1",
    "domain": "nombres",
    "domainName": "Algèbre Linéaire",
    "folder": "L1_EV1_Espaces_vectoriels",
    "num": "L1-04",
    "title": "Espaces vectoriels, sous-espaces et bases en dimension finie",
    "shortTitle": "Espaces Vectoriels",
    "icon": "box",
    "badge": "Fondateur d'Espaces",
    "color": "#4338ca",
    "description": "Définition axiomatique d'un K-espace vectoriel, sous-espaces vectoriels, combinaisons linéaires, familles libres, familles génératrices, bases, théorème de la base incomplète, dimension finie, formule de Grassmann.",
    "skills": [
      "Démontrer qu'un sous-ensemble est un sous-espace vectoriel",
      "Prouver qu'une famille de vecteurs est libre, génératrice ou forme une base",
      "Appliquer le théorème de la base incomplète et la formule de Grassmann pour les sous-espaces"
    ]
  },
  {
    "id": "L1-APP",
    "level": "L1",
    "domain": "nombres",
    "domainName": "Algèbre Linéaire",
    "folder": "L1_APP_Applications_lineaires",
    "num": "L1-05",
    "title": "Applications linéaires, noyau, image et Théorème du Rang",
    "shortTitle": "Applications Linéaires",
    "icon": "shuffle",
    "badge": "Maître du Rang",
    "color": "#3730a3",
    "description": "Morphismes d'espaces vectoriels, noyau Ker(f), image Im(f), théorème du rang dim(Ker f) + dim(Im f) = dim(E), isomorphismes, matrice représentative d'une application linéaire dans des bases.",
    "skills": [
      "Déterminer une base et la dimension du noyau et de l'image d'une application linéaire",
      "Appliquer le théorème du rang pour caractériser les isomorphismes",
      "Écrire la matrice d'une application linéaire et utiliser la formule de changement de base"
    ]
  },
  {
    "id": "L1-REL",
    "level": "L1",
    "domain": "fonctions",
    "domainName": "Analyse Réelle",
    "folder": "L1_REL_Nombres_reels",
    "num": "L1-06",
    "title": "Corps des nombres réels, propriété de la borne supérieure et topologie de R",
    "shortTitle": "Corps des Réels & Borne Sup",
    "icon": "maximize",
    "badge": "Explorateur du Continu",
    "color": "#0284c7",
    "description": "Construction intuitive de R, axiome de la borne supérieure, densité de Q et de R\\Q dans R, valeur absolue, caractérisation par les voisinages, intervalles et segments.",
    "skills": [
      "Déterminer la borne supérieure (sup) et la borne inférieure (inf) d'une partie bornée de R",
      "Utiliser la propriété d'Archimède et la densité des rationnels",
      "Démontrer des propriétés topologiques élémentaires sur la droite réelle"
    ]
  },
  {
    "id": "L1-SUI",
    "level": "L1",
    "domain": "fonctions",
    "domainName": "Analyse Réelle",
    "folder": "L1_SUI_Suites_reelles",
    "num": "L1-07",
    "title": "Suites réelles : limites (ε-N), suites de Cauchy et Bolzano-Weierstrass",
    "shortTitle": "Suites & Bolzano-Weierstrass",
    "icon": "trending-up",
    "badge": "Convergence Rigoureuse",
    "color": "#0369a1",
    "description": "Définition de la limite par les quantificateurs (ε, N), suites monotones, suites adjacentes, sous-suites (valeurs d'adhérence), théorème de Bolzano-Weierstrass, suites de Cauchy et complétude de R.",
    "skills": [
      "Démontrer la convergence d'une suite en revenant à la définition en ε",
      "Extraire une sous-suite convergente grâce au théorème de Bolzano-Weierstrass",
      "Prouver la convergence d'une suite en montrant qu'elle est de Cauchy"
    ]
  },
  {
    "id": "L1-CNT",
    "level": "L1",
    "domain": "fonctions",
    "domainName": "Analyse Réelle",
    "folder": "L1_CNT_Continuite_derivation",
    "num": "L1-08",
    "title": "Continuité et dérivation sur R, Théorème de Rolle et TAF",
    "shortTitle": "Continuité, Rolle & TAF",
    "icon": "activity",
    "badge": "Géomètre de l'Analyse",
    "color": "#075985",
    "description": "Continuité en un point (ε-δ), théorème des bornes atteintes (Weierstrass), théorème des valeurs intermédiaires, dérivabilité, extremum local, théorème de Rolle, Théorème des Accroissements Finis (TAF).",
    "skills": [
      "Vérifier la continuité locale par la définition en ε-δ",
      "Appliquer le théorème des bornes atteintes sur un segment fermé et borné",
      "Utiliser le théorème de Rolle et le TAF pour encadrer des fonctions ou prouver des inégalités"
    ]
  },
  {
    "id": "L1-TAY",
    "level": "L1",
    "domain": "fonctions",
    "domainName": "Analyse Réelle",
    "folder": "L1_TAY_Developpements_limites",
    "num": "L1-09",
    "title": "Formules de Taylor, développements limités et étude locale",
    "shortTitle": "Taylor & Développements Limités",
    "icon": "sliders",
    "badge": "Maître des Ordres",
    "color": "#0c4a6e",
    "description": "Formule de Taylor-Young, Taylor-Lagrange, développements limités (DL) au voisinage de 0, opérations sur les DL (somme, produit, quotient, composition), équivalents (notations de Landau o et ~), calculs de limites et asymptotes.",
    "skills": [
      "Calculer le développement limité d'une fonction composée à l'ordre n",
      "Lever des formes indéterminées et trouver des équivalents précis",
      "Étudier la position d'une courbe par rapport à sa tangente ou son asymptote"
    ]
  },
  {
    "id": "L1-INT",
    "level": "L1",
    "domain": "fonctions",
    "domainName": "Calcul Intégral",
    "folder": "L1_INT_Integration_riemann",
    "num": "L1-10",
    "title": "Intégrale de Riemann sur un segment et techniques de primitivation",
    "shortTitle": "Intégrale de Riemann & Primitives",
    "icon": "divide",
    "badge": "Intégrateur Riemannien",
    "color": "#2563eb",
    "description": "Intégrale des fonctions continues par morceaux sur un segment [a,b], sommes de Darboux et de Riemann, théorème fondamental de l'analyse, intégration par parties, changement de variable, décomposition en éléments simples de fractions rationnelles.",
    "skills": [
      "Calculer une limite de somme de Riemann en l'identifiant à une intégrale",
      "Effectuer un changement de variable rigoureux dans une intégrale",
      "Décomposer une fraction rationnelle en éléments simples pour calculer une primitive"
    ]
  },
  {
    "id": "L1-GEO",
    "level": "L1",
    "domain": "geometrie",
    "domainName": "Géométrie Élémentaire",
    "folder": "L1_GEO_Geometrie_euclidienne_coniques",
    "num": "L1-11",
    "title": "Géométrie euclidienne plane, repères orthonormés et coniques",
    "shortTitle": "Géométrie & Coniques",
    "icon": "crosshair",
    "badge": "Spécialiste des Coniques",
    "color": "#059669",
    "description": "Produit scalaire euclidien sur R², R³, orthogonalité, équations de cercles, coniques (ellipse, hyperbole, parabole), foyer, directrice, excentricité, équations réduites et polaires.",
    "skills": [
      "Classifier une conique à partir de son équation cartésienne générale",
      "Déterminer les foyers, sommets et directrices d'une ellipse ou hyperbole",
      "Écrire l'équation polaire d'une conique connaissant son excentricité"
    ]
  },

  // =========================================================================
  // LICENCE 2 — STRUCTURES LINÉAIRES, ANALYSE APPROFONDIE ET MULTIVARIABLE (15 modules)
  // =========================================================================
  {
    "id": "L2-DET",
    "level": "L2",
    "domain": "nombres",
    "domainName": "Algèbre Linéaire Avancée",
    "folder": "L2_DET_Determinants",
    "num": "L2-01",
    "title": "Déterminants, formes multilinéaires alternées et comatrice",
    "shortTitle": "Déterminants & Comatrice",
    "icon": "grid",
    "badge": "Maître du Déterminant",
    "color": "#7c3aed",
    "description": "Formes n-linéaires alternées, groupe symétrique Sn, déterminant d'une matrice et d'un endomorphisme, développement par rapport à une ligne/colonne, formule de la comatrice A · t(Com A) = det(A) In, formules de Cramer.",
    "skills": [
      "Calculer un déterminant n x n par opérations élémentaires et développements",
      "Calculer l'inverse d'une matrice via la formule de la comatrice",
      "Résoudre un système de Cramer à l'aide des déterminants"
    ]
  },
  {
    "id": "L2-RED1",
    "level": "L2",
    "domain": "nombres",
    "domainName": "Algèbre Linéaire Avancée",
    "folder": "L2_RED1_Diagonalisation",
    "num": "L2-02",
    "title": "Réduction des endomorphismes I : Valeurs propres et Diagonalisation",
    "shortTitle": "Réduction I : Diagonalisation",
    "icon": "layers",
    "badge": "Spectraliste Diagonal",
    "color": "#6366f1",
    "description": "Sous-espaces stables, valeurs propres, vecteurs propres, sous-espaces propres E_λ, polynôme caractéristique P_A(X) = det(XI - A), condition nécessaire et suffisante de diagonalisabilité (somme des dimensions des sous-espaces propres).",
    "skills": [
      "Calculer le polynôme caractéristique et déterminer les valeurs propres d'une matrice",
      "Déterminer une base de chaque sous-espace propre",
      "Statuer sur la diagonalisabilité et expliciter la matrice de passage P telle que D = P^(-1)AP"
    ]
  },
  {
    "id": "L2-RED2",
    "level": "L2",
    "domain": "nombres",
    "domainName": "Algèbre Linéaire Avancée",
    "folder": "L2_RED2_Trigonalisation_cayley",
    "num": "L2-03",
    "title": "Réduction des endomorphismes II : Trigonalisation et Cayley-Hamilton",
    "shortTitle": "Réduction II : Trigonalisation",
    "icon": "fast-forward",
    "badge": "Maître de Cayley-Hamilton",
    "color": "#4f46e5",
    "description": "Polynôme scindé, critère de trigonalisabilité, sous-espaces caractéristiques, théorème de Cayley-Hamilton P_A(A) = 0, polynôme minimal μ_A(X), décomposition de Dunford A = D + N.",
    "skills": [
      "Trigonaliser une matrice dont le polynôme caractéristique est scindé",
      "Appliquer le théorème de Cayley-Hamilton pour calculer des puissances A^k ou A^(-1)",
      "Déterminer le polynôme minimal et l'utiliser pour tester la diagonalisabilité"
    ]
  },
  {
    "id": "L2-DUA",
    "level": "L2",
    "domain": "nombres",
    "domainName": "Algèbre Linéaire Avancée",
    "folder": "L2_DUA_Dualite",
    "num": "L2-04",
    "title": "Dualité en dimension finie, base duale et orthogonalité",
    "shortTitle": "Dualité & Base Duale",
    "icon": "repeat",
    "badge": "Architecte Dual",
    "color": "#4338ca",
    "description": "Espace dual E* = L(E, K), formes linéaires, hyperplans comme noyaux de formes non nulles, base duale (e_i*), bidualité et isomorphisme canonique E ≃ E**, orthogonalité au sens de la dualité.",
    "skills": [
      "Déterminer la base duale associée à une base donnée",
      "Représenter un sous-espace vectoriel par un système d'équations linéaires duales",
      "Utiliser la formule de codimension dim(F°) = dim(E) - dim(F)"
    ]
  },
  {
    "id": "L2-PRE",
    "level": "L2",
    "domain": "geometrie",
    "domainName": "Espaces Euclidiens",
    "folder": "L2_PRE_Espaces_euclidiens",
    "num": "L2-05",
    "title": "Espaces Préhilbertiens et Euclidiens : Orthogonalité et Gram-Schmidt",
    "shortTitle": "Espaces Euclidiens & Gram-Schmidt",
    "icon": "shield",
    "badge": "Orthonormalisateur",
    "color": "#0d9488",
    "description": "Produit scalaire réel, formes bilinéaires symétriques définies positives, norme euclidienne, inégalité de Cauchy-Schwarz, inégalité de Minkowski, procédé d'orthonormalisation de Gram-Schmidt, projection orthogonale et meilleure approximation.",
    "skills": [
      "Vérifier qu'une forme bilinéaire est un produit scalaire",
      "Appliquer le procédé de Gram-Schmidt pour construire une base orthonormée",
      "Calculer la projection orthogonale d'un vecteur sur un sous-espace et la distance associée"
    ]
  },
  {
    "id": "L2-SYM",
    "level": "L2",
    "domain": "geometrie",
    "domainName": "Espaces Euclidiens",
    "folder": "L2_SYM_Endomorphismes_symetriques",
    "num": "L2-06",
    "title": "Endomorphismes symétriques, groupe orthogonal et Théorème Spectral",
    "shortTitle": "Théorème Spectral & Isométries",
    "icon": "target",
    "badge": "Maître Spectral",
    "color": "#0f766e",
    "description": "Endomorphismes adjoints, matrices symétriques réelles, théorème spectral (toute matrice symétrique réelle est orthogonalement diagonalisable dans R), groupe orthogonal O(n) et SO(n), classification des isométries en dimensions 2 et 3.",
    "skills": [
      "Diagonaliser une matrice symétrique réelle dans une base orthonormée",
      "Caractériser une matrice orthogonale et identifier la transformation géométrique associée",
      "Appliquer le théorème spectral à la réduction des formes quadratiques"
    ]
  },
  {
    "id": "L2-SER",
    "level": "L2",
    "domain": "fonctions",
    "domainName": "Analyse Réelle & Complexe",
    "folder": "L2_SER_Series_numeriques",
    "num": "L2-07",
    "title": "Séries numériques réelles et complexes : convergence et critères",
    "shortTitle": "Séries Numériques",
    "icon": "layers",
    "badge": "Sommateur Infini",
    "color": "#0284c7",
    "description": "Sommes partielles, reste, convergence absolue, séries à termes positifs, critères de comparaison, règle de d'Alembert, règle de Cauchy, séries de Riemann, règle des séries alternées (Leibniz) et estimation du reste.",
    "skills": [
      "Déterminer la nature d'une série numérique à l'aide des critères usuels (Riemann, d'Alembert, Cauchy)",
      "Appliquer le critère spécial des séries alternées et majorer l'erreur par le premier terme négligé",
      "Calculer la somme d'une série télescopique ou géométrique"
    ]
  },
  {
    "id": "L2-RIE",
    "level": "L2",
    "domain": "fonctions",
    "domainName": "Calcul Intégral",
    "folder": "L2_RIE_Riemann_approfondi",
    "num": "L2-08",
    "title": "Intégrale de Riemann approfondie et fonctions réglées",
    "shortTitle": "Intégration Approfondie",
    "icon": "maximize-2",
    "badge": "Analyste Riemannien",
    "color": "#0369a1",
    "description": "Fonctions en escalier, fonctions réglées comme adhérence uniforme des fonctions en escalier, intégrale d'une fonction réglée sur un segment, continuité et dérivabilité de l'intégrale dépendant de sa borne supérieure.",
    "skills": [
      "Démontrer qu'une fonction est réglée sur un segment",
      "Établir la convergence d'une suite d'intégrales sous hypothèse de convergence uniforme",
      "Calculer des limites d'intégrales par encadrement ou dérivation"
    ]
  },
  {
    "id": "L2-ING",
    "level": "L2",
    "domain": "fonctions",
    "domainName": "Calcul Intégral",
    "folder": "L2_ING_Integrales_generalisees",
    "num": "L2-09",
    "title": "Intégrales généralisées sur un intervalle quelconque",
    "shortTitle": "Intégrales Généralisées",
    "icon": "fast-forward",
    "badge": "Dompteur d'Impropres",
    "color": "#075985",
    "description": "Intégrales impropres sur [a, +∞[ ou ]a, b], convergence absolue, critères de comparaison pour fonctions positives, intégrales de Riemann de référence ∫ 1/t^α dt, intégrales de Bertrand, intégration par parties généralisée.",
    "skills": [
      "Justifier la convergence d'une intégrale généralisée sans calcul explicite par équivalence ou domination",
      "Calculer la valeur exacte d'une intégrale impropre convergente",
      "Reconnaître et traiter des intégrales semi-convergentes (ex: intégrales de Fresnel, Dirichlet)"
    ]
  },
  {
    "id": "L2-EDO",
    "level": "L2",
    "domain": "fonctions",
    "domainName": "Équations Différentielles",
    "folder": "L2_EDO_Equations_differentielles",
    "num": "L2-10",
    "title": "Équations différentielles linéaires et systèmes différentiels",
    "shortTitle": "Équations Différentielles & Systèmes",
    "icon": "activity",
    "badge": "Dynamiste Linéaire",
    "color": "#0c4a6e",
    "description": "Équations différentielles linéaires d'ordre 1 et 2 à coefficients variables (Wronskien, variation des constantes), systèmes différentiels linéaires du premier ordre X'(t) = A X(t) à coefficients constants, exponentielle de matrice exp(tA).",
    "skills": [
      "Résoudre une équation différentielle d'ordre 2 par la méthode de variation des constantes",
      "Calculer l'exponentielle d'une matrice diagonalisable ou nilpotente",
      "Résoudre un système différentiel linéaire X'(t) = AX(t) avec condition initiale"
    ]
  },
  {
    "id": "L2-PAR",
    "level": "L2",
    "domain": "fonctions",
    "domainName": "Calcul Intégral",
    "folder": "L2_PAR_Integrales_parametres",
    "num": "L2-11",
    "title": "Intégrales dépendant d'un paramètre et convergence dominée",
    "shortTitle": "Intégrales à Paramètres",
    "icon": "sliders",
    "badge": "Paramétreur d'Intégrales",
    "color": "#2563eb",
    "description": "Fonctions définies par F(x) = ∫_I f(x, t) dt, théorème de continuité sous le signe intégrale, théorème de dérivation sous le signe intégrale (règle de Leibniz avec hypothèse de domination), fonction Gamma d'Euler et intégrale de Gauss.",
    "skills": [
      "Démontrer la continuité d'une intégrale à paramètre en vérifiant l'hypothèse de domination",
      "Dériver une intégrale à paramètre pour obtenir une équation différentielle vérifiée par F",
      "Calculer des intégrales remarquables (Gauss, Dirichlet) par dérivation sous le signe intégrale"
    ]
  },
  {
    "id": "L2-MUL",
    "level": "L2",
    "domain": "fonctions",
    "domainName": "Calcul Intégral",
    "folder": "L2_MUL_Integrales_multiples",
    "num": "L2-12",
    "title": "Intégrales multiples, théorème de Fubini et changements de variables",
    "shortTitle": "Intégrales Multiples (Fubini)",
    "icon": "box",
    "badge": "Arpenteur Multidimensionnel",
    "color": "#1d4ed8",
    "description": "Intégrales doubles et triples sur des domaines simples ou bornés, théorème de Fubini pour l'interversion d'intégrales, jacobien d'un difféomorphisme, changements de variables en coordonnées polaires, cylindriques et sphériques.",
    "skills": [
      "Calculer une intégrale double en adaptant l'ordre d'intégration via le théorème de Fubini",
      "Calculer le déterminant jacobien d'une transformation de coordonnées",
      "Passer en coordonnées polaires ou sphériques pour calculer des volumes et centres de gravité"
    ]
  },
  {
    "id": "L2-CRB",
    "level": "L2",
    "domain": "geometrie",
    "domainName": "Géométrie Différentielle",
    "folder": "L2_CRB_Courbes_parametrees",
    "num": "L2-13",
    "title": "Courbes paramétrées, repère de Frenet et courbure",
    "shortTitle": "Courbes Paramétrées & Frenet",
    "icon": "compass",
    "badge": "Cinématicien Différentiel",
    "color": "#b45309",
    "description": "Courbes planes paramétrées t -> (x(t), y(t)), points réguliers et singuliers, branches infinies, vecteur tangent, abscisse curviligne, repère mobile de Frenet (T, N), formules de Frenet, rayon de courbure et centre de courbure.",
    "skills": [
      "Étudier et tracer une courbe paramétrée (symétries, tableau de variations conjointes, asymptotes)",
      "Déterminer la nature d'un point stationnaire par développement de Taylor",
      "Calculer le vecteur courbure et les éléments du repère de Frenet"
    ]
  },
  {
    "id": "L2-PRB",
    "level": "L2",
    "domain": "algo",
    "domainName": "Probabilités",
    "folder": "L2_PRB_Probabilites_discretes",
    "num": "L2-14",
    "title": "Espaces probabilisés et variables aléatoires discrètes",
    "shortTitle": "Probabilités Discrètes",
    "icon": "help-circle",
    "badge": "Probabiliste Rigoureux",
    "color": "#6d28d9",
    "description": "Tribus d'événements, axiomes de Kolmogorov, probabilité conditionnelle, indépendance d'une famille d'événements, variables aléatoires discrètes, lois usuelles (Bernoulli, binomiale, géométrique, Poisson), fonctions génératrices.",
    "skills": [
      "Modéliser une expérience aléatoire par un espace probabilisé (Ω, A, P)",
      "Calculer l'espérance et la variance de variables aléatoires à valeurs dans N à l'aide des séries",
      "Utiliser la fonction génératrice G_X(t) pour déterminer la loi d'une somme de variables indépendantes"
    ]
  },
  {
    "id": "L2-CAL",
    "level": "L2",
    "domain": "fonctions",
    "domainName": "Calcul Différentiel",
    "folder": "L2_CAL_Calcul_differentiel_plusieurs_variables",
    "num": "L2-15",
    "title": "Calcul différentiel à plusieurs variables, gradient et extremums",
    "shortTitle": "Calcul Différentiel & Gradient",
    "icon": "trending-up",
    "badge": "Optimiseur Multivariable",
    "color": "#059669",
    "description": "Fonctions de R^n dans R^p, dérivées partielles, différentielle comme application linéaire, matrice jacobienne, règle de composition (Chain Rule), gradient ∇f, dérivées secondes et matrice hessienne, recherche d'extremums locaux libres.",
    "skills": [
      "Calculer les dérivées partielles et écrire la matrice jacobienne d'une fonction",
      "Appliquer la règle de dérivation des fonctions composées (Chain Rule)",
      "Déterminer les points critiques et statuer sur leur nature (minimum, maximum, point selle) via la matrice hessienne"
    ]
  },

  // =========================================================================
  // LICENCE 3 — STRUCTURES MODERNES, TOPOLOGIE ET THÉORIE DE LA MESURE (15 modules)
  // =========================================================================
  {
    "id": "L3-GRP1",
    "level": "L3",
    "domain": "nombres",
    "domainName": "Théorie des Groupes",
    "folder": "L3_GRP1_Actions_groupes_quotients",
    "num": "L3-01",
    "title": "Théorie des Groupes I : Morphismes, sous-groupes distingués et quotients",
    "shortTitle": "Groupes I : Quotients & Morphismes",
    "icon": "share-2",
    "badge": "Théoricien des Groupes",
    "color": "#7c3aed",
    "description": "Sous-groupes, théorème de Lagrange, sous-groupes normaux (distingués) H ⊲ G, groupe quotient G/H, théorèmes d'isomorphisme de Noether, centre d'un groupe, groupe dérivé, groupes monogènes et cycliques Z/nZ.",
    "skills": [
      "Vérifier qu'un sous-groupe est distingué et construire la loi quotient",
      "Appliquer le premier théorème d'isomorphisme G/Ker(f) ≃ Im(f)",
      "Déterminer les automorphismes et sous-groupes d'un groupe cyclique"
    ]
  },
  {
    "id": "L3-GRP2",
    "level": "L3",
    "domain": "nombres",
    "domainName": "Théorie des Groupes",
    "folder": "L3_GRP2_Sylow_groupes_finis",
    "num": "L3-02",
    "title": "Théorie des Groupes II : Actions de groupes, théorèmes de Sylow et groupes symétriques",
    "shortTitle": "Groupes II : Actions & Sylow",
    "icon": "target",
    "badge": "Maître de Sylow",
    "color": "#6366f1",
    "description": "Action d'un groupe sur un ensemble, orbites, stabilisateurs, formule des classes, p-groupes, théorèmes de Sylow (existence, conjugaison et nombre de Sylow), applications à la non-simplicité et classification des petits groupes finis, groupe symétrique Sn et alterné An.",
    "skills": [
      "Appliquer la formule des classes pour calculer des cardinaux d'orbites ou prouver des propriétés de centre",
      "Énoncer et utiliser les théorèmes de Sylow pour démontrer qu'un groupe d'ordre donné n'est pas simple",
      "Décomposer une permutation en produit de cycles à supports disjoints et déterminer sa signature"
    ]
  },
  {
    "id": "L3-ANN",
    "level": "L3",
    "domain": "nombres",
    "domainName": "Anneaux et Corps",
    "folder": "L3_ANN_Anneaux_et_corps",
    "num": "L3-03",
    "title": "Théorie des Anneaux et des Corps : Anneaux principaux, euclidiens et corps finis",
    "shortTitle": "Anneaux, Idéaux & Corps Finis",
    "icon": "disc",
    "badge": "Alchimiste des Anneaux",
    "color": "#4f46e5",
    "description": "Anneaux commutatifs unitaires, idéaux (premiers, maximaux), anneaux intègres, anneaux euclidiens, principaux et factoriels, corps des fractions, extensions de corps, corps de rupture, corps finis Fq de cardinal p^n.",
    "skills": [
      "Démontrer qu'un anneau est euclidien, principal ou factoriel",
      "Caractériser les idéaux maximaux et premiers via les anneaux quotients (A/I corps ou intègre)",
      "Construire un corps fini comme quotient de Fp[X] par un polynôme irréductible"
    ]
  },
  {
    "id": "L3-MET",
    "level": "L3",
    "domain": "fonctions",
    "domainName": "Topologie Générale",
    "folder": "L3_MET_Espaces_metriques_normes",
    "num": "L3-04",
    "title": "Espaces métriques et Espaces vectoriels normés : Ouverts, fermés et adhérence",
    "shortTitle": "Espaces Métriques & Normés",
    "icon": "compass",
    "badge": "Topologue Fondateur",
    "color": "#0284c7",
    "description": "Définition d'une distance, boules ouvertes/fermées, espaces vectoriels normés (EVN), équivalence des normes en dimension finie, topologie métrique : ouverts, fermés, voisinages, intérieur, adhérence, frontière, densité, continuité métrique.",
    "skills": [
      "Démontrer qu'une partie d'un espace métrique est ouverte, fermée ou dense",
      "Prouver l'équivalence des normes sur un espace vectoriel de dimension finie",
      "Vérifier la continuité d'une application entre espaces métriques par image réciproque d'ouverts"
    ]
  },
  {
    "id": "L3-BAN",
    "level": "L3",
    "domain": "fonctions",
    "domainName": "Analyse Fonctionnelle",
    "folder": "L3_BAN_Completude_banach",
    "num": "L3-05",
    "title": "Complétude, Espaces de Banach et Théorème du Point Fixe de Picard",
    "shortTitle": "Complétude & Espaces de Banach",
    "icon": "shield",
    "badge": "Maître de Banach",
    "color": "#0369a1",
    "description": "Suites de Cauchy, espaces métriques complets, espaces de Banach (EVN complets), prolongement des applications uniformément continues, théorème du point fixe de Picard-Banach, théorème de Cauchy-Lipschitz pour les EDO, théorème de Baire.",
    "skills": [
      "Démontrer la complétude d'un espace vectoriel normé (ex: suites bornées, fonctions continues bornées)",
      "Appliquer le théorème du point fixe pour prouver l'existence et l'unicité de la solution d'une équation intégrale",
      "Utiliser le lemme de Baire pour prouver la non-dénombrabilité ou la densité d'un sous-ensemble"
    ]
  },
  {
    "id": "L3-CMP",
    "level": "L3",
    "domain": "fonctions",
    "domainName": "Topologie Générale",
    "folder": "L3_CMP_Compacite_connexite",
    "num": "L3-06",
    "title": "Compacité, Connexité et Théorème de Heine",
    "shortTitle": "Compacité & Connexité",
    "icon": "anchor",
    "badge": "Explorateur de Compacité",
    "color": "#075985",
    "description": "Propriété de Borel-Lebesgue (recouvrement fini d'ouverts), caractérisation séquentielle de Bolzano-Weierstrass, compacité dans R^n (fermés bornés), théorème de Heine (continuité uniforme), théorème des valeurs extrêmes, connexité et connexité par arcs.",
    "skills": [
      "Démontrer qu'un ensemble est compact à l'aide du critère de Borel-Lebesgue ou des suites",
      "Appliquer le théorème de Heine pour justifier la continuité uniforme sur un compact",
      "Utiliser la connexité pour établir des théorèmes de valeurs intermédiaires généralisés"
    ]
  },
  {
    "id": "L3-SDF",
    "level": "L3",
    "domain": "fonctions",
    "domainName": "Analyse Fonctionnelle",
    "folder": "L3_SDF_Series_de_fonctions",
    "num": "L3-07",
    "title": "Suites et séries de fonctions : Convergences simple, uniforme et normale",
    "shortTitle": "Séries de Fonctions",
    "icon": "layers",
    "badge": "Maître de l'Interversion",
    "color": "#2563eb",
    "description": "Convergence simple, uniforme (norme infinie ||·||_∞) et normale, théorèmes d'interversion : continuité de la limite, dérivation terme à terme, intégration terme à terme sur un segment, approximation polynomiale de Weierstrass.",
    "skills": [
      "Étudier la convergence simple, uniforme et normale d'une suite ou série de fonctions",
      "Justifier l'interversion limite-intégrale ou limite-dérivée grâce à la convergence uniforme",
      "Appliquer le théorème d'approximation de Weierstrass par les polynômes de Bernstein"
    ]
  },
  {
    "id": "L3-SER",
    "level": "L3",
    "domain": "fonctions",
    "domainName": "Analyse Complexe",
    "folder": "L3_SER_Series_entieres",
    "num": "L3-08",
    "title": "Séries entières, rayon de convergence et fonctions analytiques",
    "shortTitle": "Séries Entières & Fonctions Analytiques",
    "icon": "circle",
    "badge": "Analyste Holomorphe",
    "color": "#1d4ed8",
    "description": "Lemme d'Abel, rayon de convergence R, disque de convergence, règle de d'Alembert et formule de Hadamard, propriétés de la somme (continuité, dérivabilité terme à terme, analyticité), développements en série entière de fonctions usuelles.",
    "skills": [
      "Déterminer le rayon de convergence d'une série entière complexe ou réelle",
      "Dériver et intégrer une série entière terme à terme à l'intérieur du disque ouvert",
      "Développer une fonction en série entière pour résoudre une équation différentielle"
    ]
  },
  {
    "id": "L3-FOU",
    "level": "L3",
    "domain": "fonctions",
    "domainName": "Analyse Harmonique",
    "folder": "L3_FOU_Series_de_fourier",
    "num": "L3-09",
    "title": "Séries de Fourier, polynômes trigonométriques et convergence L²",
    "shortTitle": "Séries de Fourier",
    "icon": "activity",
    "badge": "Harmonicien Spectral",
    "color": "#1e40af",
    "description": "Coefficients de Fourier réels et complexes d'une fonction périodique, théorème de Dirichlet (convergence ponctuelle), convergence normale, formule de Parseval, inégalité de Bessel, convergence en moyenne quadratique dans l'espace hilbertien L².",
    "skills": [
      "Calculer les coefficients de Fourier trigonométriques d'une fonction périodique",
      "Appliquer le théorème de Dirichlet pour calculer des sommes de séries remarquables (ex: ζ(2) = π²/6)",
      "Utiliser la formule de Parseval pour évaluer l'énergie d'un signal périodique"
    ]
  },
  {
    "id": "L3-GPR",
    "level": "L3",
    "domain": "geometrie",
    "domainName": "Géométrie Avancée",
    "folder": "L3_GPR_Geometrie_projective",
    "num": "L3-10",
    "title": "Géométrie affine, projective et groupe d'inversion",
    "shortTitle": "Géométrie Projective & Inversion",
    "icon": "triangle",
    "badge": "Projecteur Géométrique",
    "color": "#d97706",
    "description": "Espaces projectifs P(E), coordonnées homogènes, droites et plans projectifs, complétion projective d'un espace affine, birapport de quatre points alignés, théorèmes de Desargues et Pappus, inversion par rapport à un cercle.",
    "skills": [
      "Calculer le birapport de quatre points et l'utiliser pour prouver des alignements ou concours",
      "Représenter des configurations projectives à l'aide des coordonnées homogènes",
      "Transformer des cercles et des droites par une inversion géométrique"
    ]
  },
  {
    "id": "L3-GDF",
    "level": "L3",
    "domain": "geometrie",
    "domainName": "Géométrie Différentielle",
    "folder": "L3_GDF_Surfaces_courbures",
    "num": "L3-11",
    "title": "Géométrie différentielle des surfaces : Formes fondamentales et Théorème Egregium",
    "shortTitle": "Surfaces & Courbures de Gauss",
    "icon": "grid",
    "badge": "Maître de Gauss Egregium",
    "color": "#b45309",
    "description": "Nappes paramétrées et surfaces régulières dans R³, plan tangent, première forme fondamentale (métrique induite), deuxième forme fondamentale, opérateur de courbure de Weingarten, courbure de Gauss K, courbure moyenne H, Théorema Egregium de Gauss.",
    "skills": [
      "Calculer la première et deuxième formes fondamentales d'une surface paramétrée",
      "Déterminer les directions principales et les courbures principales en un point",
      "Calculer la courbure de Gauss et interpréter l'invariance intrinsèque de Gauss"
    ]
  },
  {
    "id": "L3-NUM",
    "level": "L3",
    "domain": "algo",
    "domainName": "Analyse Numérique",
    "folder": "L3_NUM_Analyse_numerique_matricielle",
    "num": "L3-12",
    "title": "Analyse numérique matricielle : Conditionnement, factorisation LU/Cholesky et gradient",
    "shortTitle": "Analyse Numérique Matricielle",
    "icon": "cpu",
    "badge": "Algorithmicien Numérique",
    "color": "#059669",
    "description": "Normes matricielles subordonnées, conditionnement d'un système linéaire cond(A), factorisation LU, décomposition de Cholesky A = BB^t, méthodes itératives (Jacobi, Gauss-Seidel, relaxation SOR), méthode de descente de gradient.",
    "skills": [
      "Évaluer le conditionnement d'une matrice et quantifier la propagation des erreurs d'arrondi",
      "Calculer la factorisation LU et Cholesky d'une matrice symétrique définie positive",
      "Étudier le rayon spectral de la matrice d'itération pour garantir la convergence de Gauss-Seidel"
    ]
  },
  {
    "id": "L3-PROG",
    "level": "L3",
    "domain": "algo",
    "domainName": "Optimisation",
    "folder": "L3_PROG_Programmation_lineaire_simplexe",
    "num": "L3-13",
    "title": "Programmation linéaire, algorithme du Simplexe et dualité",
    "shortTitle": "Simplexe & Optimisation Linéaire",
    "icon": "sliders",
    "badge": "Optimiseur Linéaire",
    "color": "#0d9488",
    "description": "Problèmes d'optimisation sous contraintes, forme standard de la programmation linéaire, polyèdres convexes et sommets extrêmes, algorithme du simplexe (tableaux, variables d'écart, pivotage), problème dual et théorème fort de la dualité.",
    "skills": [
      "Mettre un problème d'optimisation sous forme standard de programmation linéaire",
      "Exécuter les étapes de pivotage de l'algorithme du simplexe pour trouver la solution optimale",
      "Formuler le problème dual et exploiter les relations d'exclusion pour vérifier l'optimalité"
    ]
  },
  {
    "id": "L3-MES",
    "level": "L3",
    "domain": "fonctions",
    "domainName": "Théorie de la Mesure",
    "folder": "L3_MES_Mesure_et_integration_lebesgue",
    "num": "L3-14",
    "title": "Théorie de la Mesure et Intégration de Lebesgue",
    "shortTitle": "Mesure & Intégrale de Lebesgue",
    "icon": "maximize",
    "badge": "Maître de Lebesgue",
    "color": "#0f766e",
    "description": "Tribus boréliennes, mesure positive sur un espace mesurable, mesure de Lebesgue sur R^n, fonctions étagées, intégrale de Lebesgue, lemme de Fatou, théorème de convergence monotone (Beppo Levi), Théorème de Convergence Dominée de Lebesgue (TCD), complétude des espaces L^p.",
    "skills": [
      "Vérifier la mesurabilité d'un ensemble ou d'une fonction borélienne",
      "Appliquer le Théorème de Convergence Dominée (TCD) pour intervertir limite et intégrale de Lebesgue",
      "Utiliser l'inégalité de Hölder et l'inégalité de Minkowski dans les espaces L^p"
    ]
  },
  {
    "id": "L3-PRC",
    "level": "L3",
    "domain": "algo",
    "domainName": "Probabilités Avancées",
    "folder": "L3_PRC_Probabilites_continues_tcl",
    "num": "L3-15",
    "title": "Probabilités continues, vecteurs gaussiens et Théorème Central Limite",
    "shortTitle": "Probabilités Continues & TCL",
    "icon": "zap",
    "badge": "Probabiliste Théoricien",
    "color": "#7c3aed",
    "description": "Variables aléatoires à densité de probabilité, fonction de répartition, moments, fonction caractéristique d'une variable aléatoire, vecteurs gaussiens et matrices de covariance, convergence en loi, Théorème Central Limite (TCL), loi forte des grands nombres.",
    "skills": [
      "Calculer la densité, l'espérance et la variance d'une variable aléatoire continue",
      "Calculer la fonction caractéristique et l'utiliser pour identifier la loi d'une somme indépendante",
      "Appliquer le Théorème Central Limite pour approximer des probabilités cumulées"
    ]
  }
];

// Fusion automatique dans le registre global des chapitres
if (!window.MATHS_CHAPTERS) window.MATHS_CHAPTERS = [];
window.MATHS_CHAPTERS.push(...MATHS_CHAPTERS_LICENCE);
