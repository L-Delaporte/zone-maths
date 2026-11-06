/**
 * Métadonnées des chapitres des niveaux santé du cycle Concours :
 *  - « Prépa santé » (sante-XX) : mathématiques de terminale utiles pour entrer en PASS ou en L.AS
 *    (calculs de dosages, exponentielle et logarithme, suites, probabilités conditionnelles, loi binomiale) ;
 *  - « PASS / L.AS » (pass-XX) : mathématiques et biostatistiques de première année des études de santé.
 *
 * Depuis la réforme de 2020, l'accès aux études de médecine, maïeutique, odontologie, pharmacie et
 * kinésithérapie passe par le PASS ou une L.AS ; il n'y a pas de programme national de mathématiques :
 * chaque université fixe le contenu et les modalités de ses épreuves. Les chapitres ci-dessous regroupent
 * les notions communément enseignées (biostatistiques, outils mathématiques de la biophysique).
 *
 * Contenus : js/data/data_sante.js et js/data/data_pass.js (cours), js/data/exercises_sante.js et
 * js/data/exercises_pass.js (banques), js/santeGenerators.js (exercices aléatoires, chargés à la demande).
 */
(function () {
  const C = (level, id, num, domain, domainName, title, shortTitle, icon, badge, color, description, skills) => ({
    id, level, domain, domainName, folder: id, num, title, shortTitle, icon, badge, color, description, skills
  });
  const S = (...a) => C('sante', ...a);
  const P = (...a) => C('pass', ...a);

  const MATHS_CHAPTERS_SANTE = [
    S('sante-01', 'PS-01', 'calculs', 'Calculs et dosages',
      'Puissances de 10, notation scientifique et unités', 'Unités & ordres de grandeur', 'superscript', 'Maître des Unités', '#047857',
      'Puissances de 10, notation scientifique, préfixes du système international (du nano au méga), conversions de masses, de volumes et de débits, ordres de grandeur en biologie.',
      [
        'Calculer avec les puissances de 10 et écrire un résultat en notation scientifique',
        'Convertir des unités avec les préfixes du système international',
        'Contrôler un résultat par un ordre de grandeur'
      ]),
    S('sante-02', 'PS-02', 'calculs', 'Calculs et dosages',
      'Proportionnalité, concentrations, dilutions et posologies', 'Dosages & dilutions', 'percent', 'Préparateur Rigoureux', '#059669',
      'Proportionnalité, concentration massique, dilution ($C_1V_1 = C_2V_2$), posologie en mg/kg, débit d\'une perfusion, produit en croix et unités cohérentes.',
      [
        'Calculer une concentration, une masse ou un volume',
        'Préparer une dilution et calculer un facteur de dilution',
        'Calculer une posologie et un débit de perfusion'
      ]),
    S('sante-03', 'PS-03', 'calculs', 'Calculs et dosages',
      'Pourcentages, évolutions et indices', 'Pourcentages', 'percent', 'Expert des Évolutions', '#0d9488',
      'Proportion et pourcentage d\'un pourcentage, taux d\'évolution et coefficient multiplicateur, évolutions successives et réciproques, taux moyen, indices.',
      [
        'Passer d\'un taux d\'évolution au coefficient multiplicateur',
        'Composer des évolutions et calculer une évolution réciproque',
        'Calculer un taux d\'évolution moyen'
      ]),
    S('sante-04', 'PS-04', 'fonctions', 'Fonctions et suites',
      'Fonction exponentielle : croissance et décroissance', 'Exponentielle', 'trending-up', 'Modélisateur Exponentiel', '#0f766e',
      'Propriétés algébriques de l\'exponentielle, fonctions $t \\mapsto e^{kt}$, croissance d\'une population bactérienne, décroissance de la concentration d\'un médicament, équations et inéquations.',
      [
        'Utiliser les propriétés algébriques de la fonction exponentielle',
        'Étudier une fonction $t \\mapsto Ae^{kt}$ et interpréter $k$',
        'Modéliser une croissance ou une décroissance exponentielle'
      ]),
    S('sante-05', 'PS-05', 'fonctions', 'Fonctions et suites',
      'Fonction logarithme népérien, demi-vie et pH', 'Logarithme & demi-vie', 'variable', 'Chimiste des Logarithmes', '#0e7490',
      'Propriétés du logarithme népérien, résolution d\'équations $e^{kt} = a$, temps de doublement et demi-vie, logarithme décimal et pH.',
      [
        'Résoudre une équation ou une inéquation avec le logarithme',
        'Calculer une demi-vie ou un temps de doublement',
        'Utiliser le logarithme décimal (pH, échelles logarithmiques)'
      ]),
    S('sante-06', 'PS-06', 'fonctions', 'Fonctions et suites',
      'Dérivées, variations et courbes de concentration', 'Dérivées & variations', 'trending-up', 'Analyste des Courbes', '#0369a1',
      'Dérivées usuelles et composées ($e^{u}$, $\\ln u$), tableau de variations, maximum d\'une concentration, vitesse d\'évolution et tangente, lecture de courbes.',
      [
        'Calculer la dérivée d\'une fonction usuelle ou composée',
        'Dresser un tableau de variations et trouver un maximum',
        'Interpréter la dérivée comme une vitesse d\'évolution'
      ]),
    S('sante-07', 'PS-07', 'fonctions', 'Fonctions et suites',
      'Suites arithmétiques et géométriques : modèles d\'évolution', 'Suites', 'hash', 'Maître des Suites', '#1d4ed8',
      'Suites arithmétiques et géométriques, terme général et somme, suites arithmético-géométriques (doses répétées d\'un médicament), limite et seuil.',
      [
        'Reconnaître une suite arithmétique ou géométrique et en donner le terme général',
        'Étudier une suite arithmético-géométrique à l\'aide d\'une suite auxiliaire',
        'Déterminer une limite ou un seuil'
      ]),
    S('sante-08', 'PS-08', 'probas', 'Probabilités et statistiques',
      'Probabilités conditionnelles et tests de dépistage', 'Probabilités conditionnelles', 'bar-chart', 'Épidémiologiste en Herbe', '#7c3aed',
      'Arbres pondérés, probabilités conditionnelles, formule des probabilités totales, indépendance, tests de dépistage (sensibilité, spécificité, probabilité d\'être malade sachant le test positif).',
      [
        'Construire et exploiter un arbre pondéré',
        'Appliquer la formule des probabilités totales',
        'Calculer une probabilité « inversée » dans un test de dépistage'
      ]),
    S('sante-09', 'PS-09', 'probas', 'Probabilités et statistiques',
      'Variables aléatoires et loi binomiale', 'Loi binomiale', 'bar-chart', 'Probabiliste Averti', '#6d28d9',
      'Variable aléatoire, espérance et variance, schéma de Bernoulli, loi binomiale (calculs, espérance, au moins un succès), fluctuation.',
      [
        'Calculer l\'espérance et la variance d\'une variable aléatoire',
        'Reconnaître une loi binomiale et en donner les paramètres',
        'Calculer $P(X = k)$, $P(X \\geq 1)$ et l\'espérance d\'une loi binomiale'
      ]),
    S('sante-10', 'PS-10', 'probas', 'Probabilités et statistiques',
      'Statistiques descriptives : moyenne, écart type, médiane et quartiles', 'Statistiques', 'bar-chart', 'Statisticien de Terrain', '#9333ea',
      'Moyenne et moyenne pondérée, variance et écart type, médiane, quartiles et écart interquartile, effet d\'un changement d\'unité, lecture de diagrammes en boîte.',
      [
        'Calculer moyenne, variance et écart type d\'une série',
        'Déterminer médiane et quartiles',
        'Interpréter et comparer des séries statistiques'
      ]),
    S('sante-11', 'PS-11', 'fonctions', 'Fonctions et suites',
      'Primitives, intégrales et aire sous la courbe', 'Intégrales & AUC', 'sigma', 'Pharmacologue de l\'Aire', '#0f766e',
      'Primitives usuelles, intégrale et aire sous la courbe, valeur moyenne d\'une fonction, méthode des trapèzes, aire sous la courbe des concentrations (AUC) et quantité de médicament éliminée.',
      [
        'Calculer une primitive et une intégrale',
        'Interpréter une intégrale comme une aire ou une valeur moyenne',
        'Calculer une aire sous la courbe des concentrations'
      ])
  ];

  const MATHS_CHAPTERS_PASS = [
    P('pass-01', 'PA-01', 'stats', 'Statistique descriptive',
      'Statistique descriptive : paramètres de position et de dispersion', 'Statistique descriptive', 'bar-chart', 'Biostatisticien Débutant', '#7c2d12',
      'Types de variables, moyenne, médiane, mode, variance et écart type (formule de König-Huygens), coefficient de variation, quantiles, effet d\'une transformation affine.',
      [
        'Calculer les paramètres de position et de dispersion d\'une série',
        'Utiliser la formule de König-Huygens',
        'Connaître l\'effet d\'une transformation affine sur la moyenne et l\'écart type'
      ]),
    P('pass-02', 'PA-02', 'probas', 'Probabilités et lois',
      'Probabilités : dénombrement, indépendance et probabilités conditionnelles', 'Probabilités', 'hash', 'Maître du Dénombrement', '#9a3412',
      'Dénombrement (arrangements, combinaisons), probabilité d\'une réunion, probabilités conditionnelles, formule des probabilités totales et de Bayes, événements indépendants et incompatibles.',
      [
        'Dénombrer avec les arrangements et les combinaisons',
        'Calculer des probabilités conditionnelles et utiliser la formule de Bayes',
        'Distinguer événements indépendants et incompatibles'
      ]),
    P('pass-03', 'PA-03', 'probas', 'Probabilités et lois',
      'Tests diagnostiques : sensibilité, spécificité et valeurs prédictives', 'Tests diagnostiques', 'percent', 'Diagnosticien des Tests', '#c2410c',
      'Tableau de contingence, sensibilité, spécificité, valeurs prédictives positive et négative, rôle de la prévalence, rapports de vraisemblance.',
      [
        'Calculer sensibilité et spécificité à partir d\'un tableau',
        'Calculer les valeurs prédictives en fonction de la prévalence',
        'Interpréter un résultat de test en contexte'
      ]),
    P('pass-04', 'PA-04', 'probas', 'Probabilités et lois',
      'Variables aléatoires discrètes : lois binomiale et de Poisson', 'Lois discrètes', 'bar-chart', 'Expert des Lois Discrètes', '#b45309',
      'Espérance et variance, propriétés de linéarité, loi de Bernoulli, loi binomiale, loi de Poisson et approximation d\'une loi binomiale par une loi de Poisson.',
      [
        'Calculer l\'espérance et la variance d\'une variable discrète',
        'Utiliser la loi binomiale et la loi de Poisson',
        'Justifier une approximation par une loi de Poisson'
      ]),
    P('pass-05', 'PA-05', 'probas', 'Probabilités et lois',
      'Variables aléatoires continues et loi normale', 'Loi normale', 'trending-up', 'Maître de la Gaussienne', '#a16207',
      'Densité et fonction de répartition, loi uniforme et loi exponentielle, loi normale, centrage et réduction, lecture de la table de la loi normale centrée réduite, valeurs de référence (1,96 ; 2,58).',
      [
        'Calculer une probabilité à partir d\'une densité',
        'Centrer et réduire une variable de loi normale',
        'Utiliser les valeurs de référence de la loi normale centrée réduite'
      ]),
    P('pass-06', 'PA-06', 'inference', 'Estimation et tests',
      'Échantillonnage et intervalles de confiance', 'Intervalles de confiance', 'ruler', 'Estimateur Précis', '#15803d',
      'Moyenne d\'échantillon et théorème central limite, erreur standard, intervalle de confiance d\'une moyenne et d\'une proportion, effet de la taille de l\'échantillon, nombre de sujets nécessaire.',
      [
        'Calculer l\'erreur standard d\'une moyenne ou d\'une proportion',
        'Construire et interpréter un intervalle de confiance',
        'Déterminer la taille d\'échantillon nécessaire pour une précision donnée'
      ]),
    P('pass-07', 'PA-07', 'inference', 'Estimation et tests',
      'Tests statistiques : principe, risques et tests usuels', 'Tests d\'hypothèses', 'variable', 'Juge des Hypothèses', '#166534',
      'Hypothèses nulle et alternative, risques de première et de deuxième espèce, puissance, degré de signification (p), test de comparaison d\'une moyenne ou d\'une proportion, test du khi-deux, tests unilatéraux et bilatéraux.',
      [
        'Formuler les hypothèses et choisir un test adapté',
        'Calculer une statistique de test et conclure au risque $\\alpha$',
        'Interpréter les risques $\\alpha$, $\\beta$ et la puissance'
      ]),
    P('pass-08', 'PA-08', 'inference', 'Estimation et tests',
      'Épidémiologie : prévalence, incidence, risque relatif et odds ratio', 'Épidémiologie', 'percent', 'Épidémiologiste du Concours', '#0f766e',
      'Prévalence et incidence, taux, types d\'études (cohorte, cas-témoins), risque relatif, odds ratio, différence de risques et nombre de sujets à traiter, interprétation.',
      [
        'Calculer une prévalence et une incidence',
        'Calculer et interpréter un risque relatif et un odds ratio',
        'Choisir l\'indicateur adapté au type d\'étude'
      ]),
    P('pass-09', 'PA-09', 'analyse', 'Outils d\'analyse',
      'Fonctions, dérivées, différentielles et incertitudes', 'Fonctions & incertitudes', 'trending-up', 'Physicien du Vivant', '#1e40af',
      'Dérivées usuelles et composées, dérivées partielles, différentielle totale et logarithmique, propagation des incertitudes, développements limités usuels, logarithme décimal et pH.',
      [
        'Calculer des dérivées et des dérivées partielles',
        'Propager une incertitude par la différentielle logarithmique',
        'Utiliser une approximation au premier ordre'
      ]),
    P('pass-10', 'PA-10', 'analyse', 'Outils d\'analyse',
      'Équations différentielles et modèles pharmacocinétiques', 'Équations différentielles', 'variable', 'Pharmacocinéticien', '#1e3a8a',
      'Équations différentielles linéaires du premier ordre, élimination d\'un médicament ($C\' = -kC$), demi-vie, perfusion à débit constant et plateau, décroissance radioactive et activité.',
      [
        'Résoudre une équation $y\' = ay + b$ avec condition initiale',
        'Relier constante d\'élimination et demi-vie',
        'Modéliser une perfusion et calculer la concentration à l\'équilibre'
      ]),
    P('pass-11', 'PA-11', 'stats', 'Statistique descriptive',
      'Corrélation et régression linéaire', 'Corrélation & régression', 'scatter-chart', 'Analyste des Liaisons', '#9a3412',
      'Séries bivariées et nuage de points, covariance, coefficient de corrélation linéaire de Pearson, droite des moindres carrés, coefficient de détermination, prédiction, corrélation et causalité.',
      [
        'Calculer une covariance et un coefficient de corrélation',
        'Déterminer la droite de régression et faire une prédiction',
        'Interpréter un coefficient de détermination sans confondre corrélation et causalité'
      ])
  ];

  if (!window.MATHS_CHAPTERS) window.MATHS_CHAPTERS = [];
  window.MATHS_CHAPTERS.push(...MATHS_CHAPTERS_SANTE, ...MATHS_CHAPTERS_PASS);
  window.MATHS_CHAPTERS_SANTE = MATHS_CHAPTERS_SANTE;
  window.MATHS_CHAPTERS_PASS = MATHS_CHAPTERS_PASS;
})();
