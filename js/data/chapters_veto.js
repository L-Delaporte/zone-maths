/**
 * Métadonnées des chapitres du niveau « Véto : prépa BCPST » du cycle Concours.
 *
 * La voie principale d'accès aux écoles nationales vétérinaires après le baccalauréat + 2 ans est le concours A BCPST
 * (banque Agro-Véto), préparé en classe préparatoire BCPST (biologie, chimie, physique et sciences de la Terre).
 * Les chapitres suivent le programme de mathématiques de BCPST 1re et 2e années (arrêté du 16 avril 2021) :
 * outils, analyse, algèbre linéaire, géométrie, probabilités et statistique.
 *
 * Contenus : js/data/data_veto.js (cours), js/data/exercises_veto.js (banque),
 * js/vetoGenerators.js (exercices aléatoires, chargés à la demande).
 */
(function () {
  const C = (id, num, domain, domainName, title, shortTitle, icon, badge, color, description, skills) => ({
    id, level: 'veto', domain, domainName, folder: id, num, title, shortTitle, icon, badge, color, description, skills
  });

  const MATHS_CHAPTERS_VETO = [
    C('veto-01', 'VB-01', 'outils', 'Outils',
      'Logique, raisonnement par récurrence et dénombrement', 'Logique & dénombrement', 'list-checks', 'Logicien Rigoureux', '#065f46',
      'Connecteurs et quantificateurs, ensembles, raisonnements (contraposée, absurde, récurrence), symboles $\\sum$ et $\\prod$, listes, arrangements, combinaisons, formule du binôme.',
      [
        'Écrire la négation d\'une proposition quantifiée',
        'Rédiger un raisonnement par récurrence',
        'Dénombrer avec les listes, arrangements et combinaisons'
      ]),
    C('veto-02', 'VB-02', 'outils', 'Outils',
      'Trigonométrie, nombres complexes et polynômes', 'Complexes & polynômes', 'circle-dot', 'Maître des Racines', '#047857',
      'Formules de trigonométrie, forme algébrique et forme exponentielle d\'un complexe, équations du second degré à coefficients réels, polynômes réels : degré, racines, factorisation, racines multiples.',
      [
        'Passer de la forme algébrique à la forme exponentielle',
        'Résoudre une équation du second degré dans $\\mathbb{C}$',
        'Factoriser un polynôme à partir de ses racines'
      ]),
    C('veto-03', 'VB-03', 'analyse', 'Analyse',
      'Suites réelles et séries', 'Suites & séries', 'trending-up', 'Explorateur des Limites', '#0f766e',
      'Suites arithmétiques, géométriques et arithmético-géométriques, récurrences linéaires d\'ordre 2, limites et théorèmes de convergence, suites adjacentes, séries géométriques et de Riemann, séries à termes positifs.',
      [
        'Exprimer le terme général d\'une suite récurrente',
        'Étudier la convergence d\'une suite',
        'Étudier la nature d\'une série et calculer une somme'
      ]),
    C('veto-04', 'VB-04', 'analyse', 'Analyse',
      'Fonctions : limites, continuité, dérivation et développements limités', 'Fonctions & DL', 'spline', 'Analyste des Courbes', '#0e7490',
      'Fonctions usuelles, limites et croissances comparées, continuité et théorème des valeurs intermédiaires, bijections, dérivation, théorème de Rolle et accroissements finis, développements limités et études locales.',
      [
        'Calculer une limite par croissances comparées ou équivalents',
        'Étudier une fonction et appliquer le théorème des valeurs intermédiaires',
        'Calculer un développement limité et en déduire une limite'
      ]),
    C('veto-05', 'VB-05', 'analyse', 'Analyse',
      'Primitives, intégrales et intégrales généralisées', 'Intégration', 'sigma', 'Intégrateur Habile', '#0369a1',
      'Primitives usuelles, intégrale sur un segment et propriétés, théorème fondamental de l\'analyse, intégration par parties et changement de variable, intégrales généralisées et critères de convergence.',
      [
        'Calculer une intégrale par primitive ou par parties',
        'Effectuer un changement de variable',
        'Étudier la convergence d\'une intégrale généralisée'
      ]),
    C('veto-06', 'VB-06', 'analyse', 'Analyse',
      'Équations différentielles', 'Équations différentielles', 'activity', 'Modélisateur du Vivant', '#1d4ed8',
      'Équations linéaires du premier ordre, équations linéaires du second ordre à coefficients constants, équations autonomes d\'ordre 1 et modèles de dynamique des populations (croissance exponentielle, logistique).',
      [
        'Résoudre $y\' + a(x)y = b(x)$ avec condition initiale',
        'Résoudre $y\'\' + ay\' + by = c$ à coefficients constants',
        'Étudier une équation autonome et ses points d\'équilibre'
      ]),
    C('veto-07', 'VB-07', 'analyse', 'Analyse',
      'Fonctions de deux variables réelles', 'Deux variables', 'box', 'Cartographe des Surfaces', '#1e40af',
      'Fonctions de deux variables, lignes de niveau, continuité, dérivées partielles d\'ordre 1 et 2, gradient, points critiques et recherche d\'extremums.',
      [
        'Calculer des dérivées partielles et un gradient',
        'Déterminer les points critiques d\'une fonction',
        'Interpréter les dérivées partielles d\'un modèle'
      ]),
    C('veto-08', 'VB-08', 'algebre', 'Algèbre linéaire et géométrie',
      'Systèmes linéaires et calcul matriciel', 'Systèmes & matrices', 'grid-3x3', 'Pivot de Gauss', '#4338ca',
      'Systèmes linéaires et algorithme du pivot de Gauss, opérations sur les matrices, puissances de matrices, matrices inversibles et calcul de l\'inverse, matrices de transition.',
      [
        'Résoudre un système par la méthode du pivot de Gauss',
        'Calculer un produit, une puissance ou un inverse de matrice',
        'Traduire un système sous forme matricielle'
      ]),
    C('veto-09', 'VB-09', 'algebre', 'Algèbre linéaire et géométrie',
      'Espaces vectoriels, applications linéaires et diagonalisation', 'Diagonalisation', 'layers', 'Architecte des Bases', '#5b21b6',
      'Sous-espaces vectoriels de $\\mathbb{K}^n$, familles libres et génératrices, bases et dimension, applications linéaires, noyau et image, rang, matrices et changement de base, valeurs propres, vecteurs propres et diagonalisation.',
      [
        'Montrer qu\'une famille est une base',
        'Déterminer le noyau, l\'image et le rang d\'une application linéaire',
        'Diagonaliser une matrice et en déduire ses puissances'
      ]),
    C('veto-10', 'VB-10', 'algebre', 'Algèbre linéaire et géométrie',
      'Géométrie et produit scalaire', 'Géométrie & produit scalaire', 'compass', 'Géomètre de l\'Espace', '#6d28d9',
      'Vecteurs du plan et de l\'espace, déterminant, droites, cercles et plans, produit scalaire dans $\\mathbb{R}^n$, orthogonalité, projection orthogonale et théorème spectral pour les matrices symétriques réelles.',
      [
        'Déterminer une équation de droite, de plan ou de cercle',
        'Calculer un produit scalaire et une projection orthogonale',
        'Utiliser le théorème spectral'
      ]),
    C('veto-11', 'VB-11', 'probas', 'Probabilités et statistique',
      'Probabilités et variables aléatoires discrètes', 'Variables discrètes', 'dices', 'Stratège du Hasard', '#9d174d',
      'Espaces probabilisés, probabilités conditionnelles, formule des probabilités totales et formule de Bayes, indépendance, variables aléatoires discrètes, espérance et variance, lois usuelles (Bernoulli, binomiale, géométrique, Poisson), couples et covariance.',
      [
        'Utiliser la formule des probabilités totales et la formule de Bayes',
        'Calculer l\'espérance et la variance d\'une loi usuelle',
        'Étudier un couple de variables et calculer une covariance'
      ]),
    C('veto-12', 'VB-12', 'probas', 'Probabilités et statistique',
      'Variables à densité et théorèmes limites', 'Densités & limites', 'bell', 'Maître des Lois', '#be123c',
      'Densité et fonction de répartition, espérance et variance, lois uniforme, exponentielle et normale, sommes de variables indépendantes, inégalité de Bienaymé-Tchebychev, loi faible des grands nombres et convergence en loi.',
      [
        'Vérifier qu\'une fonction est une densité et calculer une probabilité',
        'Utiliser les lois exponentielle et normale',
        'Appliquer la loi faible des grands nombres ou une approximation'
      ]),
    C('veto-13', 'VB-13', 'probas', 'Probabilités et statistique',
      'Statistique descriptive univariée et bivariée', 'Statistique', 'bar-chart-3', 'Biostatisticien', '#c2410c',
      'Moyenne, médiane, quartiles, variance et écart type, séries bivariées, covariance, coefficient de corrélation linéaire, droite de régression par la méthode des moindres carrés, ajustements après changement de variable.',
      [
        'Calculer les indicateurs d\'une série statistique',
        'Calculer une covariance et un coefficient de corrélation',
        'Déterminer et utiliser une droite de régression'
      ])
  ];

  if (!window.MATHS_CHAPTERS) window.MATHS_CHAPTERS = [];
  window.MATHS_CHAPTERS.push(...MATHS_CHAPTERS_VETO);
  window.MATHS_CHAPTERS_VETO = MATHS_CHAPTERS_VETO;
})();
