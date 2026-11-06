/**
 * Métadonnées des chapitres du niveau « Professeur des écoles (CRPE) », cycle Concours.
 *
 * Partie mathématiques de l'épreuve écrite disciplinaire de français et mathématiques du concours
 * de recrutement de professeurs des écoles. Pour la session 2027, le programme de l'épreuve est
 * celui de mathématiques du cycle 4 en vigueur à la rentrée scolaire 2026 (devenirenseignant.gouv.fr).
 * Les cinq thèmes de l'épreuve : nombres et calculs, organisation et gestion de données et fonctions,
 * grandeurs et mesures, espace et géométrie, algorithmique et programmation.
 *
 * Contenus : js/data/data_crpe.js (cours), js/data/exercises_crpe.js (banque type concours),
 * js/crpeGenerators.js (exercices aléatoires, chargés à la demande avec le niveau).
 */
(function () {
  const C = (id, num, domain, domainName, title, shortTitle, icon, badge, color, description, skills) => ({
    id, level: 'crpe', domain, domainName, folder: id, num, title, shortTitle, icon, badge, color, description, skills
  });

  const MATHS_CHAPTERS_CRPE = [
    C('crpe-01', 'PE-01', 'nombres', 'Nombres et calculs',
      'Nombres entiers, numération et arithmétique', 'Entiers & arithmétique', 'hash', 'Arithméticien du Concours', '#c2410c',
      'Numération décimale de position, critères de divisibilité, division euclidienne, nombres premiers, décomposition en facteurs premiers, multiples et diviseurs communs, problèmes de partage et d\'engrenages.',
      [
        'Utiliser la numération de position et les critères de divisibilité',
        'Écrire et exploiter une division euclidienne',
        'Décomposer un entier en produit de facteurs premiers et l\'utiliser (diviseurs communs, fractions irréductibles)'
      ]),
    C('crpe-02', 'PE-02', 'nombres', 'Nombres et calculs',
      'Nombres décimaux, fractions et nombres rationnels', 'Décimaux & fractions', 'fraction', 'Maître des Fractions', '#ea580c',
      'Fractions décimales et écriture décimale, comparaison et rangement, fraction comme quotient et comme partage, opérations sur les fractions, nombres rationnels et non décimaux.',
      [
        'Passer d\'une écriture à une autre (fraction, décimal, pourcentage)',
        'Comparer et calculer avec des fractions',
        'Reconnaître un nombre décimal, un rationnel non décimal'
      ]),
    C('crpe-03', 'PE-03', 'nombres', 'Nombres et calculs',
      'Nombres relatifs, puissances, racines carrées et ordres de grandeur', 'Relatifs & puissances', 'superscript', 'Calculateur Aguerri', '#d97706',
      'Calcul avec les nombres relatifs, puissances de 10 et notation scientifique, puissances d\'un nombre, racines carrées, priorités opératoires et ordres de grandeur.',
      [
        'Calculer avec des nombres relatifs en respectant les priorités',
        'Utiliser les puissances et la notation scientifique',
        'Estimer un ordre de grandeur pour contrôler un résultat'
      ]),
    C('crpe-04', 'PE-04', 'nombres', 'Nombres et calculs',
      'Calcul littéral, équations et mise en équation de problèmes', 'Calcul littéral', 'variable', 'Algébriste du Concours', '#b45309',
      'Expressions littérales, développement et factorisation, identités remarquables, équations du premier degré et produit nul, inéquations, mise en équation d\'un problème et preuve d\'une conjecture.',
      [
        'Développer, factoriser et réduire une expression littérale',
        'Résoudre une équation ou une inéquation du premier degré',
        'Mettre un problème en équation et prouver une propriété générale par le calcul littéral'
      ]),
    C('crpe-05', 'PE-05', 'fonctions', 'Organisation et gestion de données, fonctions',
      'Proportionnalité, pourcentages et vitesses', 'Proportionnalité', 'percent', 'Expert de la Proportionnalité', '#0f766e',
      'Reconnaître et traiter une situation de proportionnalité (coefficient, linéarité, passage à l\'unité, produit en croix), échelles, pourcentages et évolutions successives, vitesse moyenne et débits.',
      [
        'Choisir une procédure adaptée pour résoudre un problème de proportionnalité',
        'Appliquer et composer des pourcentages d\'évolution',
        'Calculer une vitesse moyenne, une durée ou une distance avec des unités cohérentes'
      ]),
    C('crpe-06', 'PE-06', 'fonctions', 'Organisation et gestion de données, fonctions',
      'Notion de fonction, fonctions linéaires et affines', 'Fonctions', 'trending-up', 'Analyste des Fonctions', '#0d9488',
      'Image, antécédent, tableau de valeurs et représentation graphique, lecture graphique, fonctions linéaires et affines, coefficient directeur, comparaison de tarifs et modélisation.',
      [
        'Calculer une image, déterminer un antécédent par le calcul ou graphiquement',
        'Reconnaître et déterminer une fonction linéaire ou affine',
        'Modéliser une situation (tarifs, coûts) et comparer deux offres'
      ]),
    C('crpe-07', 'PE-07', 'fonctions', 'Organisation et gestion de données, fonctions',
      'Statistiques et probabilités', 'Statistiques & probabilités', 'bar-chart', 'Statisticien Averti', '#0e7490',
      'Moyenne (simple et pondérée), médiane, étendue, fréquences, lecture de tableaux et de diagrammes, vocabulaire des probabilités, calcul de probabilités en situation d\'équiprobabilité, expériences à deux épreuves.',
      [
        'Calculer et interpréter moyenne, médiane, étendue et fréquences',
        'Lire et exploiter des tableaux et des diagrammes',
        'Calculer une probabilité, y compris pour une expérience à deux épreuves'
      ]),
    C('crpe-08', 'PE-08', 'geometrie', 'Grandeurs et mesures',
      'Grandeurs et mesures : longueurs, aires, volumes, durées et conversions', 'Grandeurs & mesures', 'ruler', 'Maître des Mesures', '#1d4ed8',
      'Périmètres, aires et volumes des figures et solides usuels, conversions d\'unités (longueurs, aires, volumes, contenances, durées), grandeurs produits et quotients, effet d\'un agrandissement sur les aires et les volumes.',
      [
        'Calculer périmètres, aires et volumes des figures et solides usuels',
        'Convertir des longueurs, des aires, des volumes, des contenances et des durées',
        'Connaître l\'effet d\'un agrandissement ou d\'une réduction de rapport k'
      ]),
    C('crpe-09', 'PE-09', 'geometrie', 'Espace et géométrie',
      'Triangles : Pythagore, Thalès, trigonométrie et angles', 'Pythagore, Thalès & trigo', 'triangle', 'Géomètre du Concours', '#2563eb',
      'Somme des angles d\'un triangle, angles et parallèles, théorème de Pythagore et sa réciproque, théorème de Thalès et sa réciproque, triangles semblables, trigonométrie dans le triangle rectangle.',
      [
        'Calculer une longueur ou démontrer qu\'un triangle est rectangle avec Pythagore',
        'Utiliser le théorème de Thalès et sa réciproque',
        'Calculer une longueur ou un angle par la trigonométrie'
      ]),
    C('crpe-10', 'PE-10', 'geometrie', 'Espace et géométrie',
      'Figures, transformations et géométrie dans l\'espace', 'Transformations & espace', 'box', 'Bâtisseur de l\'Espace', '#4338ca',
      'Propriétés des quadrilatères, symétries, translations, rotations et homothéties, solides (patrons, sections, repérage dans l\'espace), représentations en perspective et vocabulaire de la géométrie.',
      [
        'Reconnaître et utiliser les transformations du plan',
        'Identifier un solide, ses faces, arêtes et sommets, et un patron',
        'Utiliser les propriétés des figures usuelles pour justifier'
      ]),
    C('crpe-11', 'PE-11', 'algo', 'Algorithmique et programmation',
      'Algorithmique et programmation (Scratch)', 'Algorithmique', 'terminal', 'Programmeur du Concours', '#7c3aed',
      'Lecture et exécution d\'un programme Scratch, variables, boucles, instructions conditionnelles, programmes de calcul, déplacements et tracés, recherche d\'erreurs dans un script.',
      [
        'Exécuter un programme à la main et prévoir son résultat',
        'Utiliser variables, boucles et conditions',
        'Écrire un programme de calcul et le traduire en expression littérale'
      ])
  ];

  if (!window.MATHS_CHAPTERS) window.MATHS_CHAPTERS = [];
  window.MATHS_CHAPTERS.push(...MATHS_CHAPTERS_CRPE);
  window.MATHS_CHAPTERS_CRPE = MATHS_CHAPTERS_CRPE;
})();
