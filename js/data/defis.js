/**
 * L'Établi des Maths — Banque du « Défi de la semaine » (accueil de l'application).
 *
 * Un défi par cycle (collège, lycée, supérieur), le même pour tous les élèves pendant
 * une semaine ISO : l'index est tiré de la graine année × 53 + numéro de semaine
 * (voir MATHS_DEFIS_UTILS.pick). Avec 12 défis par cycle, un défi ne revient
 * qu'au bout de 12 semaines.
 *
 * Banque rédigée à la main (énoncés originaux) plutôt que tirée des générateurs :
 * le défi est commun à toute une classe, partagé par lien et reste affiché 7 jours ;
 * une banque relue garantit un énoncé soigné, une réponse unique et un corrigé rédigé.
 *
 * Schéma d'un défi :
 *   { id: 'college-01',          // unique, préfixé par le cycle
 *     title, level: 'Dès la 5e', theme,
 *     statement: 'texte + KaTeX entre $…$',
 *     answer: '47',              // réponse attendue telle qu'affichée (virgule décimale, fraction a/b)
 *     value: 47,                 // valeur numérique (comparaison à 1e-9 près)
 *     unit: 'cm²',               // facultatif, affiché après le champ de saisie
 *     format: 'fraction',        // facultatif : consigne de saisie affichée sous le champ
 *     hint, solution }
 * Chaque réponse est recalculée indépendamment par scripts/tests/test_defis.js.
 */
window.MATHS_DEFIS = {
  college: [
    {
      id: 'college-01',
      title: 'Multiples de 3 ou de 5',
      level: 'Dès la 6e',
      theme: 'Nombres et calculs',
      statement: 'Combien de nombres entiers compris entre 1 et 100 (inclus) sont divisibles par 3 **ou** par 5 ?',
      answer: '47',
      value: 47,
      hint: 'Compte les multiples de 3, puis ceux de 5… sans compter deux fois les nombres qui sont à la fois multiples de 3 et de 5.',
      solution: 'Entre 1 et 100, il y a 33 multiples de 3 (car $3 \\times 33 = 99$) et 20 multiples de 5 (car $5 \\times 20 = 100$).\nLes multiples de 15 (15, 30, 45, 60, 75 et 90, soit 6 nombres) ont été comptés deux fois.\nTotal : $33 + 20 - 6 = 47$ nombres.'
    },
    {
      id: 'college-02',
      title: 'Le nombre mystère',
      level: 'Dès la 5e',
      theme: 'Nombres et calculs',
      statement: 'Je pense à un nombre. Je le multiplie par 4, j\'ajoute 7 au résultat, puis je divise le tout par 3 : j\'obtiens 13.\nÀ quel nombre ai-je pensé ?',
      answer: '8',
      value: 8,
      hint: 'Remonte le programme de calcul à l\'envers, en partant de 13.',
      solution: 'On remonte les étapes en sens inverse :\n- avant la division par 3, on avait $13 \\times 3 = 39$ ;\n- avant l\'ajout de 7, on avait $39 - 7 = 32$ ;\n- avant la multiplication par 4, on avait $32 \\div 4 = 8$.\nVérification : $(4 \\times 8 + 7) \\div 3 = 39 \\div 3 = 13$. Le nombre est 8.'
    },
    {
      id: 'college-03',
      title: 'Un rectangle bien proportionné',
      level: 'Dès la 5e',
      theme: 'Grandeurs et mesures',
      statement: 'Un rectangle a un périmètre de 30 cm. Sa longueur est le double de sa largeur.\nQuelle est son aire ?',
      answer: '50',
      value: 50,
      unit: 'cm²',
      hint: 'Le demi-périmètre (longueur + largeur) vaut 15 cm, et la longueur vaut « deux largeurs ».',
      solution: 'Le demi-périmètre vaut $30 \\div 2 = 15$ cm. En notant $\\ell$ la largeur, la longueur vaut $2\\ell$, donc $\\ell + 2\\ell = 15$, soit $3\\ell = 15$ et $\\ell = 5$ cm.\nLa longueur vaut 10 cm et l\'aire vaut $10 \\times 5 = 50$ cm².'
    },
    {
      id: 'college-04',
      title: 'La médiane cachée',
      level: 'Dès la 4e',
      theme: 'Espace et géométrie',
      statement: 'Le triangle $ABC$ est rectangle en $A$, avec $AB = 6$ cm et $AC = 8$ cm. Le point $M$ est le milieu du segment $[BC]$.\nQuelle est la longueur $AM$ ?',
      answer: '5',
      value: 5,
      unit: 'cm',
      hint: 'Calcule d\'abord $BC$, puis pense au cercle circonscrit à un triangle rectangle.',
      solution: 'D\'après le théorème de Pythagore dans le triangle $ABC$ rectangle en $A$ : $BC^2 = 6^2 + 8^2 = 36 + 64 = 100$, donc $BC = 10$ cm.\nDans un triangle rectangle, le milieu de l\'hypoténuse est le centre du cercle circonscrit : $MA = MB = MC = \\dfrac{BC}{2}$.\nDonc $AM = 5$ cm.'
    },
    {
      id: 'college-05',
      title: 'Hausse puis baisse',
      level: 'Dès la 4e',
      theme: 'Proportionnalité',
      statement: 'Un article coûte 80 €. Son prix augmente de 25 %, puis le nouveau prix baisse de 20 %.\nQuel est le prix final ?',
      answer: '80',
      value: 80,
      unit: '€',
      hint: 'Augmenter de 25 %, c\'est multiplier par $1{,}25$ ; baisser de 20 %, c\'est multiplier par $0{,}8$.',
      solution: 'Après la hausse : $80 \\times 1{,}25 = 100$ €.\nAprès la baisse : $100 \\times 0{,}8 = 80$ €.\nLe prix revient exactement à 80 €, car $1{,}25 \\times 0{,}8 = 1$ : une hausse de 25 % suivie d\'une baisse de 20 % se compensent (alors qu\'une hausse de 20 % suivie d\'une baisse de 20 % ne se compensent pas !).'
    },
    {
      id: 'college-06',
      title: 'Les diagonales du décagone',
      level: 'Dès la 5e',
      theme: 'Espace et géométrie',
      statement: 'Un décagone est un polygone à 10 côtés. Combien de diagonales possède un décagone convexe ?',
      answer: '35',
      value: 35,
      hint: 'Depuis un sommet, vers combien d\'autres sommets peut-on tracer une diagonale ? Attention à ne pas compter chaque diagonale deux fois.',
      solution: 'Depuis chacun des 10 sommets, on trace une diagonale vers tous les sommets sauf lui-même et ses deux voisins, soit $10 - 3 = 7$ diagonales.\nCela fait $10 \\times 7 = 70$, mais chaque diagonale a été comptée deux fois (une fois depuis chacune de ses extrémités).\nIl y a donc $70 \\div 2 = 35$ diagonales.'
    },
    {
      id: 'college-07',
      title: 'Toujours un reste de 1',
      level: 'Dès la 5e',
      theme: 'Nombres et calculs',
      statement: 'Quel est le plus petit nombre entier **supérieur à 1** dont le reste dans la division euclidienne par 4, par 5 et par 6 est toujours égal à 1 ?',
      answer: '61',
      value: 61,
      hint: 'Si $n$ convient, que peut-on dire du nombre $n - 1$ ?',
      solution: 'Si $n$ convient, alors $n - 1$ est divisible par 4, par 5 et par 6 : c\'est un multiple commun de ces trois nombres.\nLes multiples de 5 et de 6 sont les multiples de 30 ; 30 n\'est pas multiple de 4, mais 60 l\'est. Le plus petit multiple commun non nul de 4, 5 et 6 est donc 60.\nAinsi $n - 1 = 60$ et $n = 61$. Vérification : $61 = 4 \\times 15 + 1 = 5 \\times 12 + 1 = 6 \\times 10 + 1$.'
    },
    {
      id: 'college-08',
      title: 'La somme des dés',
      level: 'Dès la 5e',
      theme: 'Probabilités',
      statement: 'On lance deux dés équilibrés à six faces et on additionne les deux nombres obtenus.\nQuelle est la probabilité que la somme soit égale à 7 ?',
      answer: '1/6',
      value: 1 / 6,
      format: 'fraction',
      hint: 'Fais un tableau à double entrée : il y a $6 \\times 6 = 36$ issues, toutes équiprobables.',
      solution: 'Il y a $6 \\times 6 = 36$ issues équiprobables (dé 1 ; dé 2).\nLa somme vaut 7 pour (1 ; 6), (2 ; 5), (3 ; 4), (4 ; 3), (5 ; 2) et (6 ; 1), soit 6 issues.\nLa probabilité vaut $\\dfrac{6}{36} = \\dfrac{1}{6}$. C\'est d\'ailleurs la somme la plus probable !'
    },
    {
      id: 'college-09',
      title: 'Un cube étonnant',
      level: 'Dès la 5e',
      theme: 'Grandeurs et mesures',
      statement: 'Un cube a un volume de 216 cm³.\nQuelle est l\'aire totale de ses six faces ?',
      answer: '216',
      value: 216,
      unit: 'cm²',
      hint: 'Cherche d\'abord la longueur de l\'arête : quel nombre multiplié trois fois par lui-même donne 216 ?',
      solution: 'L\'arête $a$ vérifie $a^3 = 216$. Or $6 \\times 6 \\times 6 = 216$, donc $a = 6$ cm.\nChaque face est un carré d\'aire $6^2 = 36$ cm², et le cube a 6 faces : $6 \\times 36 = 216$ cm².\nCuriosité : pour ce cube, le volume et l\'aire s\'écrivent avec le même nombre (mais pas avec la même unité !).'
    },
    {
      id: 'college-10',
      title: 'La note manquante',
      level: 'Dès la 5e',
      theme: 'Statistiques',
      statement: 'La moyenne de cinq notes est égale à 12. On ajoute une sixième note : la moyenne des six notes devient égale à 13.\nQuelle est la sixième note ?',
      answer: '18',
      value: 18,
      hint: 'Calcule la somme des notes avant et après l\'ajout.',
      solution: 'Somme des cinq premières notes : $5 \\times 12 = 60$.\nSomme des six notes : $6 \\times 13 = 78$.\nLa sixième note vaut donc $78 - 60 = 18$.'
    },
    {
      id: 'college-11',
      title: 'Des chiffres qui font 5',
      level: 'Dès la 6e',
      theme: 'Nombres et calculs',
      statement: 'Combien existe-t-il de nombres entiers à trois chiffres dont la somme des chiffres est égale à 5 ?\n(Par exemple 104 convient, car $1 + 0 + 4 = 5$.)',
      answer: '15',
      value: 15,
      hint: 'Classe les nombres selon leur chiffre des centaines (qui ne peut pas être 0).',
      solution: 'On classe selon le chiffre des centaines :\n- centaines 1 : les deux autres chiffres ont pour somme 4 → 104, 113, 122, 131, 140 (5 nombres) ;\n- centaines 2 : somme 3 → 203, 212, 221, 230 (4 nombres) ;\n- centaines 3 : somme 2 → 302, 311, 320 (3 nombres) ;\n- centaines 4 : somme 1 → 401, 410 (2 nombres) ;\n- centaines 5 : 500 (1 nombre).\nTotal : $5 + 4 + 3 + 2 + 1 = 15$ nombres.'
    },
    {
      id: 'college-12',
      title: 'Deux robinets',
      level: 'Dès la 4e',
      theme: 'Proportionnalité',
      statement: 'Un premier robinet remplit une baignoire en 12 minutes ; un second robinet la remplit en 6 minutes.\nEn combien de minutes la remplissent-ils s\'ils coulent ensemble ?',
      answer: '4',
      value: 4,
      unit: 'min',
      hint: 'Quelle fraction de la baignoire chaque robinet remplit-il en une minute ?',
      solution: 'En une minute, le premier robinet remplit $\\dfrac{1}{12}$ de la baignoire et le second $\\dfrac{1}{6} = \\dfrac{2}{12}$.\nEnsemble, ils remplissent $\\dfrac{1}{12} + \\dfrac{2}{12} = \\dfrac{3}{12} = \\dfrac{1}{4}$ de la baignoire par minute.\nIl leur faut donc 4 minutes (et non 9 minutes, la moyenne des deux durées !).'
    }
  ],

  lycee: [
    {
      id: 'lycee-01',
      title: 'Sans calculer les racines',
      level: '1re spécialité',
      theme: 'Second degré',
      statement: 'On note $x_1$ et $x_2$ les deux solutions réelles de l\'équation $x^2 - 7x + 3 = 0$.\nCalcule $x_1^2 + x_2^2$.',
      answer: '43',
      value: 43,
      hint: 'Utilise la somme $x_1 + x_2$ et le produit $x_1 x_2$ des racines, puis développe $(x_1 + x_2)^2$.',
      solution: 'Le discriminant vaut $\\Delta = 49 - 12 = 37 > 0$ : l\'équation a bien deux solutions réelles.\nLeur somme vaut $x_1 + x_2 = 7$ et leur produit $x_1 x_2 = 3$.\nOr $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 = 49 - 6 = 43$.'
    },
    {
      id: 'lycee-02',
      title: 'La somme des impairs',
      level: '1re spécialité',
      theme: 'Suites',
      statement: 'Calcule la somme $S = 1 + 3 + 5 + \\dots + 97 + 99$ des nombres impairs de 1 à 99.',
      answer: '2500',
      value: 2500,
      hint: 'C\'est la somme des termes d\'une suite arithmétique de raison 2. Combien y a-t-il de termes ?',
      solution: 'Les termes forment une suite arithmétique de premier terme 1 et de raison 2 ; comme $99 = 1 + 2 \\times 49$, il y a 50 termes.\n$S = \\text{nombre de termes} \\times \\dfrac{\\text{premier} + \\text{dernier}}{2} = 50 \\times \\dfrac{1 + 99}{2} = 50 \\times 50 = 2\\,500$.\nPlus généralement, la somme des $n$ premiers nombres impairs vaut $n^2$.'
    },
    {
      id: 'lycee-03',
      title: 'Doubler dix fois',
      level: '1re spécialité',
      theme: 'Suites',
      statement: 'La suite $(u_n)$ est géométrique de premier terme $u_0 = 3$ et de raison 2.\nCalcule $u_0 + u_1 + \\dots + u_9$.',
      answer: '3069',
      value: 3069,
      hint: 'Somme des termes d\'une suite géométrique de raison $q \\neq 1$ : $\\text{premier terme} \\times \\dfrac{1 - q^{\\text{nombre de termes}}}{1 - q}$.',
      solution: 'Il y a 10 termes, de $u_0$ à $u_9$, et $u_n = 3 \\times 2^n$.\n$u_0 + \\dots + u_9 = 3 \\times \\dfrac{1 - 2^{10}}{1 - 2} = 3 \\times (2^{10} - 1) = 3 \\times 1\\,023 = 3\\,069$.'
    },
    {
      id: 'lycee-04',
      title: 'Le minimum d\'une cubique',
      level: '1re spécialité',
      theme: 'Dérivation',
      statement: 'On considère la fonction $f$ définie sur $[0\\,;\\,2]$ par $f(x) = x^3 - 3x$.\nQuelle est la valeur minimale de $f$ sur cet intervalle ?',
      answer: '-2',
      value: -2,
      hint: 'Étudie le signe de $f\'(x)$ sur $[0\\,;\\,2]$.',
      solution: '$f\'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$. Sur $[0\\,;\\,2]$, $x + 1 > 0$ : $f\'$ est négative sur $[0\\,;\\,1]$ et positive sur $[1\\,;\\,2]$.\n$f$ est donc décroissante puis croissante : son minimum est atteint en $x = 1$ et vaut $f(1) = 1 - 3 = -2$.\n(On a d\'ailleurs $f(0) = 0$ et $f(2) = 2$.)'
    },
    {
      id: 'lycee-05',
      title: 'Deux boules de même couleur',
      level: '1re spécialité',
      theme: 'Probabilités',
      statement: 'Une urne contient 3 boules rouges et 2 boules vertes, indiscernables au toucher. On tire successivement et **sans remise** deux boules.\nQuelle est la probabilité d\'obtenir deux boules de la même couleur ?',
      answer: '2/5',
      value: 2 / 5,
      format: 'fraction',
      hint: 'Construis un arbre pondéré, ou compte les tirages ordonnés possibles.',
      solution: 'Il y a $5 \\times 4 = 20$ tirages ordonnés équiprobables.\nDeux rouges : $3 \\times 2 = 6$ tirages ; deux vertes : $2 \\times 1 = 2$ tirages.\n$P = \\dfrac{6 + 2}{20} = \\dfrac{8}{20} = \\dfrac{2}{5}$.\nAvec un arbre : $\\dfrac{3}{5} \\times \\dfrac{2}{4} + \\dfrac{2}{5} \\times \\dfrac{1}{4} = \\dfrac{6}{20} + \\dfrac{2}{20} = \\dfrac{2}{5}$.'
    },
    {
      id: 'lycee-06',
      title: 'À égale distance',
      level: '2de',
      theme: 'Géométrie repérée',
      statement: 'Dans un repère orthonormé, on donne $A(1 ; 2)$ et $B(5 ; 4)$. Le point $M(x ; 0)$ de l\'axe des abscisses est à égale distance de $A$ et de $B$.\nQuelle est la valeur de $x$ ?',
      answer: '4,5',
      value: 4.5,
      hint: 'Écris $MA^2 = MB^2$ avec la formule de la distance : les termes en $x^2$ se simplifient.',
      solution: '$MA^2 = (x - 1)^2 + (0 - 2)^2 = x^2 - 2x + 5$ et $MB^2 = (x - 5)^2 + (0 - 4)^2 = x^2 - 10x + 41$.\n$MA = MB \\iff MA^2 = MB^2 \\iff -2x + 5 = -10x + 41 \\iff 8x = 36 \\iff x = 4{,}5$.\nLe point $M(4{,}5 ; 0)$ est l\'intersection de l\'axe des abscisses et de la médiatrice de $[AB]$.'
    },
    {
      id: 'lycee-07',
      title: 'Une aire sous la courbe',
      level: 'Terminale spécialité',
      theme: 'Intégration',
      statement: 'Calcule l\'intégrale $I = \\displaystyle\\int_0^2 (3x^2 + 1)\\,dx$.',
      answer: '10',
      value: 10,
      hint: 'Une primitive de $x \\mapsto 3x^2 + 1$ est $x \\mapsto x^3 + x$.',
      solution: 'Une primitive de $x \\mapsto 3x^2 + 1$ est $F : x \\mapsto x^3 + x$.\n$I = F(2) - F(0) = (8 + 2) - 0 = 10$.'
    },
    {
      id: 'lycee-08',
      title: 'Une limite à l\'infini',
      level: 'Terminale spécialité',
      theme: 'Limites',
      statement: 'Détermine $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{3x^2 - x + 1}{x^2 + 4}$.',
      answer: '3',
      value: 3,
      hint: 'Factorise le numérateur et le dénominateur par leur terme de plus haut degré.',
      solution: 'Pour $x > 0$ : $\\dfrac{3x^2 - x + 1}{x^2 + 4} = \\dfrac{x^2\\left(3 - \\frac{1}{x} + \\frac{1}{x^2}\\right)}{x^2\\left(1 + \\frac{4}{x^2}\\right)} = \\dfrac{3 - \\frac{1}{x} + \\frac{1}{x^2}}{1 + \\frac{4}{x^2}}$.\nQuand $x \\to +\\infty$, le numérateur tend vers 3 et le dénominateur vers 1 : la limite vaut 3.'
    },
    {
      id: 'lycee-09',
      title: 'Des vecteurs orthogonaux',
      level: '1re spécialité',
      theme: 'Produit scalaire',
      statement: 'Dans une base orthonormée, on considère les vecteurs $\\vec{u}\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} 3 \\\\ k \\end{pmatrix}$, où $k$ est un réel.\nPour quelle valeur de $k$ ces vecteurs sont-ils orthogonaux ?',
      answer: '6',
      value: 6,
      hint: 'Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul.',
      solution: '$\\vec{u} \\cdot \\vec{v} = 2 \\times 3 + (-1) \\times k = 6 - k$.\nLes vecteurs sont orthogonaux si et seulement si $6 - k = 0$, c\'est-à-dire $k = 6$.'
    },
    {
      id: 'lycee-10',
      title: 'Former un comité',
      level: 'Terminale spécialité',
      theme: 'Dénombrement',
      statement: 'Dans un club de 8 personnes, on veut former un comité de 3 membres (sans rôle particulier).\nCombien de comités différents peut-on former ?',
      answer: '56',
      value: 56,
      hint: 'L\'ordre des membres ne compte pas : c\'est une combinaison.',
      solution: 'On choisit 3 personnes parmi 8 sans tenir compte de l\'ordre : $\\dbinom{8}{3} = \\dfrac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = \\dfrac{336}{6} = 56$ comités.'
    },
    {
      id: 'lycee-11',
      title: 'Une équation logarithmique',
      level: 'Terminale spécialité',
      theme: 'Fonction logarithme',
      statement: 'Résous dans $]15\\,;\\,+\\infty[$ l\'équation $\\ln(x) + \\ln(x - 15) = \\ln(100)$.',
      answer: '20',
      value: 20,
      hint: 'Utilise $\\ln(a) + \\ln(b) = \\ln(ab)$, puis la stricte croissance de $\\ln$.',
      solution: 'Pour $x > 15$, l\'équation équivaut à $\\ln\\big(x(x - 15)\\big) = \\ln(100)$, donc à $x^2 - 15x - 100 = 0$.\n$\\Delta = 225 + 400 = 625 = 25^2$ : les solutions sont $\\dfrac{15 + 25}{2} = 20$ et $\\dfrac{15 - 25}{2} = -5$.\nSeule $x = 20$ appartient à $]15\\,;\\,+\\infty[$. Vérification : $20 \\times 5 = 100$.'
    },
    {
      id: 'lycee-12',
      title: 'Des bactéries pressées',
      level: '2de',
      theme: 'Fonctions et évolutions',
      statement: 'Une population de bactéries double toutes les 3 heures.\nAu bout de combien d\'heures a-t-elle été multipliée par 32 ?',
      answer: '15',
      value: 15,
      unit: 'h',
      hint: 'Combien de doublements faut-il pour multiplier par 32 ?',
      solution: '$32 = 2^5$ : il faut 5 doublements successifs.\nChaque doublement prend 3 heures, soit $5 \\times 3 = 15$ heures.'
    }
  ],

  superieur: [
    {
      id: 'superieur-01',
      title: 'Somme de carrés',
      level: 'L1',
      theme: 'Sommes et récurrence',
      statement: 'Calcule $\\displaystyle\\sum_{k=1}^{20} k^2$.',
      answer: '2870',
      value: 2870,
      hint: 'Pour tout $n \\geq 1$, $\\displaystyle\\sum_{k=1}^{n} k^2 = \\dfrac{n(n+1)(2n+1)}{6}$ (se démontre par récurrence).',
      solution: 'Avec $n = 20$ : $\\displaystyle\\sum_{k=1}^{20} k^2 = \\dfrac{20 \\times 21 \\times 41}{6} = \\dfrac{17\\,220}{6} = 2\\,870$.'
    },
    {
      id: 'superieur-02',
      title: 'Un déterminant tridiagonal',
      level: 'L1',
      theme: 'Algèbre linéaire',
      statement: 'Calcule le déterminant de la matrice $A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 2 \\end{pmatrix}$.',
      answer: '4',
      value: 4,
      hint: 'Développe selon la première ligne.',
      solution: 'En développant selon la première ligne :\n$\\det A = 2\\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} - 1\\begin{vmatrix} 1 & 1 \\\\ 0 & 2 \\end{vmatrix} + 0 = 2 \\times 3 - 1 \\times 2 = 4$.\nPlus généralement, la matrice tridiagonale d\'ordre $n$ de ce type a pour déterminant $n + 1$.'
    },
    {
      id: 'superieur-03',
      title: 'Une limite par développement limité',
      level: 'L1',
      theme: 'Analyse',
      statement: 'Détermine $\\displaystyle\\lim_{x \\to 0} \\dfrac{e^x - 1 - x}{x^2}$.',
      answer: '1/2',
      value: 0.5,
      format: 'fraction',
      hint: 'Écris le développement limité de $e^x$ à l\'ordre 2 en 0.',
      solution: 'Au voisinage de 0 : $e^x = 1 + x + \\dfrac{x^2}{2} + o(x^2)$.\nDonc $\\dfrac{e^x - 1 - x}{x^2} = \\dfrac{1}{2} + o(1)$, et la limite vaut $\\dfrac{1}{2}$.'
    },
    {
      id: 'superieur-04',
      title: 'Une intégration par parties',
      level: 'L1',
      theme: 'Intégration',
      statement: 'Calcule $\\displaystyle\\int_0^1 x\\,e^x\\,dx$.',
      answer: '1',
      value: 1,
      hint: 'Intègre par parties en dérivant $x$ et en primitivant $e^x$.',
      solution: 'Avec $u(x) = x$ et $v\'(x) = e^x$ (donc $u\'(x) = 1$ et $v(x) = e^x$) :\n$\\displaystyle\\int_0^1 x\\,e^x\\,dx = \\big[x\\,e^x\\big]_0^1 - \\int_0^1 e^x\\,dx = e - (e - 1) = 1$.'
    },
    {
      id: 'superieur-05',
      title: 'Une grande puissance de 2',
      level: 'L1',
      theme: 'Arithmétique',
      statement: 'Quel est le reste de la division euclidienne de $2^{100}$ par 7 ?',
      answer: '2',
      value: 2,
      hint: 'Calcule $2^3$ modulo 7.',
      solution: '$2^3 = 8 \\equiv 1 \\pmod 7$. Comme $100 = 3 \\times 33 + 1$ :\n$2^{100} = (2^3)^{33} \\times 2 \\equiv 1^{33} \\times 2 \\equiv 2 \\pmod 7$.\nLe reste vaut 2.'
    },
    {
      id: 'superieur-06',
      title: 'Les diviseurs de 360',
      level: 'L1',
      theme: 'Arithmétique',
      statement: 'Combien l\'entier 360 possède-t-il de diviseurs positifs ?',
      answer: '24',
      value: 24,
      hint: 'Décompose 360 en produit de facteurs premiers.',
      solution: '$360 = 2^3 \\times 3^2 \\times 5$. Un diviseur positif s\'écrit $2^a \\times 3^b \\times 5^c$ avec $0 \\leq a \\leq 3$, $0 \\leq b \\leq 2$ et $0 \\leq c \\leq 1$.\nIl y en a $(3 + 1)(2 + 1)(1 + 1) = 4 \\times 3 \\times 2 = 24$.'
    },
    {
      id: 'superieur-07',
      title: 'Une série dérivée',
      level: 'L2',
      theme: 'Séries entières',
      statement: 'Calcule la somme de la série $\\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{n}{2^n}$.',
      answer: '2',
      value: 2,
      hint: 'Dérive terme à terme la série géométrique $\\sum x^n$ pour $|x| < 1$.',
      solution: 'Pour $|x| < 1$, $\\displaystyle\\sum_{n=0}^{+\\infty} x^n = \\dfrac{1}{1 - x}$. En dérivant terme à terme (série entière de rayon 1) : $\\displaystyle\\sum_{n=1}^{+\\infty} n x^{n-1} = \\dfrac{1}{(1 - x)^2}$, donc $\\displaystyle\\sum_{n=1}^{+\\infty} n x^n = \\dfrac{x}{(1 - x)^2}$.\nPour $x = \\dfrac{1}{2}$ : $\\dfrac{1/2}{(1/2)^2} = 2$.'
    },
    {
      id: 'superieur-08',
      title: 'Le rang d\'une matrice célèbre',
      level: 'L1',
      theme: 'Algèbre linéaire',
      statement: 'Quel est le rang de la matrice $M = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$ ?',
      answer: '2',
      value: 2,
      hint: 'Cherche une relation linéaire entre les lignes.',
      solution: 'Les deux premières lignes ne sont pas colinéaires, donc $\\operatorname{rg} M \\geq 2$.\nLa troisième ligne vérifie $L_3 = 2L_2 - L_1$ : $(8 - 1, 10 - 2, 12 - 3) = (7, 8, 9)$.\nLe rang vaut donc 2 (et $\\det M = 0$).'
    },
    {
      id: 'superieur-09',
      title: 'L\'algorithme d\'Euclide',
      level: 'L1',
      theme: 'Arithmétique',
      statement: 'Calcule le PGCD de 1 071 et de 462.',
      answer: '21',
      value: 21,
      hint: 'Enchaîne les divisions euclidiennes : le PGCD est le dernier reste non nul.',
      solution: '$1\\,071 = 2 \\times 462 + 147$, puis $462 = 3 \\times 147 + 21$, puis $147 = 7 \\times 21 + 0$.\nLe dernier reste non nul est 21 : $\\operatorname{PGCD}(1\\,071 ; 462) = 21$.'
    },
    {
      id: 'superieur-10',
      title: 'La plus grande valeur propre',
      level: 'L2',
      theme: 'Réduction',
      statement: 'Quelle est la plus grande valeur propre de la matrice $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$ ?',
      answer: '5',
      value: 5,
      hint: 'Pour une matrice $2 \\times 2$, $\\chi_A(\\lambda) = \\lambda^2 - \\operatorname{tr}(A)\\,\\lambda + \\det(A)$.',
      solution: '$\\operatorname{tr}(A) = 7$ et $\\det(A) = 12 - 2 = 10$, donc $\\chi_A(\\lambda) = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5)$.\nLes valeurs propres sont 2 et 5 : la plus grande vaut 5 (vecteur propre associé : $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$).'
    },
    {
      id: 'superieur-11',
      title: 'Moment d\'ordre 2',
      level: 'L1–L2',
      theme: 'Probabilités',
      statement: 'La variable aléatoire $X$ suit la loi binomiale $\\mathcal{B}(10 ; 0{,}3)$.\nCalcule $E(X^2)$.',
      answer: '11,1',
      value: 11.1,
      hint: 'Utilise la formule de König-Huygens : $V(X) = E(X^2) - E(X)^2$.',
      solution: 'Pour $X \\sim \\mathcal{B}(n ; p)$ : $E(X) = np = 3$ et $V(X) = np(1 - p) = 10 \\times 0{,}3 \\times 0{,}7 = 2{,}1$.\nD\'après la formule de König-Huygens : $E(X^2) = V(X) + E(X)^2 = 2{,}1 + 9 = 11{,}1$.'
    },
    {
      id: 'superieur-12',
      title: 'Compter les surjections',
      level: 'L1',
      theme: 'Dénombrement',
      statement: 'Combien existe-t-il de surjections d\'un ensemble à 4 éléments sur un ensemble à 2 éléments ?',
      answer: '14',
      value: 14,
      hint: 'Compte toutes les applications, puis retire celles qui ne sont pas surjectives.',
      solution: 'Il y a $2^4 = 16$ applications d\'un ensemble à 4 éléments dans un ensemble à 2 éléments.\nLes seules qui ne sont pas surjectives sont les 2 applications constantes.\nIl y a donc $16 - 2 = 14$ surjections.'
    }
  ]
};

/** Outils du défi de la semaine (purs : utilisés par l'application et par les tests). */
window.MATHS_DEFIS_UTILS = {
  CYCLES: ['college', 'lycee', 'superieur'],
  CYCLE_LABELS: { college: 'Collège', lycee: 'Lycée', superieur: 'Supérieur' },

  /** Semaine ISO 8601 (lundi → dimanche) d'une date locale : { year, week }. */
  isoWeek(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - day); // jeudi de la même semaine
    const year = d.getUTCFullYear();
    const week = Math.ceil(((d - Date.UTC(year, 0, 1)) / 86400000 + 1) / 7);
    return { year, week };
  },

  /** Clé de semaine partageable : « 2026-S44 ». */
  weekKey(year, week) {
    return `${year}-S${String(week).padStart(2, '0')}`;
  },

  /** Lit une clé « AAAA-Sww » (ou « AAAA-Www ») ; null si invalide. */
  parseWeekKey(key) {
    const m = /^(\d{4})-[SW](\d{1,2})$/i.exec(String(key || '').trim());
    if (!m) return null;
    const year = +m[1];
    const week = +m[2];
    if (week < 1 || week > 53 || year < 2020 || year > 2100) return null;
    return { year, week };
  },

  /** Défi d'un cycle pour une semaine donnée (graine = année × 53 + semaine). */
  pick(cycle, year, week, bank) {
    const list = (bank || window.MATHS_DEFIS || {})[cycle] || [];
    if (!list.length) return null;
    const seed = year * 53 + week;
    return list[seed % list.length];
  },

  /**
   * Convertit une saisie d'élève en nombre : virgule ou point décimal, espaces de milliers,
   * fraction « a/b », signe moins typographique, unité finale tolérée (cm², €, h…).
   * Retourne NaN si la saisie n'est pas un nombre.
   */
  parseAnswer(input) {
    let s = String(input == null ? '' : input).trim().toLowerCase()
      .replace(/[−–—]/g, '-')
      .replace(/[\s\u00a0\u202f]+/g, '')
      .replace(/,/g, '.');
    s = s.replace(/^(x|k|n|s|i|p|aire|prix|rang|reste)?=/, '');
    const m = /^([+-]?\d+(?:\.\d+)?)(?:\/([+-]?\d+(?:\.\d+)?))?([a-zéèêàùç²³€%°]*)$/.exec(s);
    if (!m) return NaN;
    const num = parseFloat(m[1]);
    if (m[2] === undefined) return num;
    const den = parseFloat(m[2]);
    return den === 0 ? NaN : num / den;
  },

  isCorrect(input, defi) {
    const v = this.parseAnswer(input);
    return Number.isFinite(v) && Math.abs(v - defi.value) < 1e-9 * Math.max(1, Math.abs(defi.value));
  }
};
