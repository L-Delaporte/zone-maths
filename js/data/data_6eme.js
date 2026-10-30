/**
 * Données pédagogiques de la classe de 6ème (cycle 3, dernière année)
 * Conformes au programme de mathématiques du cycle 3 (arrêté du 10 avril 2025,
 * BO n° 16 du 17 avril 2025), applicable en 6e depuis la rentrée 2025.
 * Contenus originaux : cours, exercices par paliers (Palier 4 : « Défi 5ème ») et fiches.
 */

window.MATHS_COURSES_6E = {
  "6N1": {
    "title": "6N1 : Nombres entiers et décimaux : écritures et valeur des chiffres",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Connaître la valeur d'un chiffre selon son rang dans l'écriture d'un nombre, des milliards jusqu'aux millièmes.",
      "Lire, écrire en chiffres et en lettres des grands nombres entiers (jusqu'au milliard).",
      "Passer de l'écriture à virgule d'un nombre décimal à une fraction décimale, à une décomposition ou à un nombre mixte, et inversement.",
      "Connaître la définition d'un pourcentage et l'associer à une fraction de dénominateur 100."
    ],
    "keyPoints": [
      {
        "title": "1. Chiffres, nombres et rangs",
        "content": "• Il y a **dix chiffres** : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Avec eux, on écrit tous les **nombres**.\n• Dans un nombre, la valeur d'un chiffre dépend de son **rang** (sa position). Chaque rang vaut **10 fois** le rang situé à sa droite :\n$$1 \\text{ millier} = 10 \\text{ centaines} \\qquad 1 \\text{ unité} = 10 \\text{ dixièmes} \\qquad 1 \\text{ dixième} = 10 \\text{ centièmes}$$\n• Pour les grands nombres, on regroupe les chiffres **par trois** à partir de la droite : classe des unités, des milliers, des millions, des milliards. Exemple : $2\\,045\\,300\\,017$ se lit « deux milliards quarante-cinq millions trois cent mille dix-sept ».\n\n| milliards | millions | milliers | unités | , | dixièmes | centièmes | millièmes |\n|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|\n| 2 | 045 | 300 | 017 | | | | |\n| | | | 38 | , | 4 | 0 | 7 |"
      },
      {
        "title": "2. Fractions décimales et écriture à virgule",
        "content": "• Une **fraction décimale** est une fraction dont le dénominateur est $10$, $100$, $1\\,000$…\n• $\\frac{1}{10} = 0{,}1$ (un dixième), $\\frac{1}{100} = 0{,}01$ (un centième), $\\frac{1}{1\\,000} = 0{,}001$ (un millième).\n• Un **nombre décimal** est un nombre qui peut s'écrire avec une fraction décimale. Exemple :\n$$38{,}407 = 38 + \\frac{4}{10} + \\frac{7}{1\\,000} = \\frac{38\\,407}{1\\,000}$$\n• Dans $38{,}407$ : la **partie entière** est $38$, la **partie décimale** est $0{,}407$. Le chiffre des centièmes est $0$, le **nombre** de centièmes est $3\\,840$."
      },
      {
        "title": "3. Nombres mixtes et pourcentages",
        "content": "• Un nombre peut s'écrire comme la somme d'un entier et d'une fraction inférieure à 1 : c'est un **nombre mixte**. Exemple : $\\frac{17}{10} = 1 + \\frac{7}{10} = 1{,}7$.\n• **Pourcentage** : « $t$ % » signifie « $t$ pour cent », c'est-à-dire la fraction $\\frac{t}{100}$.\n$$25\\,\\% = \\frac{25}{100} = 0{,}25 \\qquad 50\\,\\% = \\frac{1}{2} \\qquad 10\\,\\% = \\frac{1}{10}$$\n• Un même nombre a donc plusieurs écritures : $0{,}75 = \\frac{75}{100} = \\frac{3}{4} = 75\\,\\%$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver la valeur d'un chiffre ou le nombre d'unités d'un rang",
        "example": "Dans $5\\,284{,}36$, quel est le chiffre des dizaines ? Quel est le nombre de dizaines ?",
        "steps": [
          "**Étape 1** : On repère les rangs : $5$ milliers, $2$ centaines, $8$ dizaines, $4$ unités, $3$ dixièmes, $6$ centièmes.",
          "**Étape 2** : Le **chiffre** des dizaines est celui placé au rang des dizaines : c'est $8$.",
          "**Étape 3** : Le **nombre** de dizaines s'obtient en lisant tous les chiffres jusqu'au rang des dizaines (en ignorant la partie décimale) : $528$ dizaines."
        ]
      },
      {
        "title": "Méthode : Passer d'une fraction décimale à l'écriture à virgule",
        "example": "Écrire $\\frac{4\\,083}{100}$ sous forme décimale.",
        "steps": [
          "**Étape 1** : Diviser par $100$ revient à rendre le nombre $100$ fois plus petit : chaque chiffre recule de **deux rangs**.",
          "**Étape 2** : Le chiffre des unités $3$ devient le chiffre des centièmes.",
          "**Étape 3** : On obtient $\\frac{4\\,083}{100} = 40{,}83$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre **chiffre** des centaines et **nombre** de centaines : dans $7\\,421$, le chiffre des centaines est $4$ mais il y a $74$ centaines.",
      "⚠️ Les zéros à droite de la partie décimale sont inutiles ($3{,}50 = 3{,}5$), mais un zéro intercalé est indispensable : $3{,}05 \\neq 3{,}5$.",
      "⚠️ $\\frac{7}{100}$ s'écrit $0{,}07$ et non $0{,}7$ : sept centièmes, le $7$ est au **deuxième** rang après la virgule.",
      "⚠️ Ne pas oublier les zéros des classes vides : deux millions trente s'écrit $2\\,000\\,030$."
    ],
    "flashcards": [
      { "q": "Combien de dixièmes y a-t-il dans une unité ?", "a": "$1 = 10$ dixièmes ($1 = \\frac{10}{10}$)." },
      { "q": "Écrire $\\frac{9}{1\\,000}$ sous forme décimale.", "a": "$0{,}009$ (neuf millièmes)." },
      { "q": "Que signifie $30\\,\\%$ ?", "a": "$30\\,\\% = \\frac{30}{100} = 0{,}3$." },
      { "q": "Quel est le chiffre des centièmes de $12{,}468$ ?", "a": "C'est $6$ (premier rang après la virgule : dixièmes, deuxième : centièmes)." },
      { "q": "Combien y a-t-il de millions dans un milliard ?", "a": "$1\\text{ milliard} = 1\\,000 \\text{ millions} = 1\\,000\\,000\\,000$." }
    ]
  },
  "6N2": {
    "title": "6N2 : Comparer, ranger, encadrer et arrondir des nombres décimaux",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Repérer, placer et lire un nombre décimal sur une demi-droite graduée.",
      "Comparer deux nombres décimaux et ranger une liste dans l'ordre croissant ou décroissant.",
      "Encadrer un nombre décimal et intercaler un nombre entre deux décimaux.",
      "Arrondir un nombre décimal à l'unité, au dixième ou au centième."
    ],
    "keyPoints": [
      {
        "title": "1. Demi-droite graduée",
        "content": "• Une **demi-droite graduée** a une **origine** (le point d'abscisse $0$) et une **unité de longueur** reportée régulièrement.\n• Le nombre qui repère un point est son **abscisse**. On note $A(2{,}5)$.\n• Si l'unité est partagée en $10$, chaque petite graduation vaut $0{,}1$ ; si elle est partagée en $4$, chaque graduation vaut $0{,}25$."
      },
      {
        "title": "2. Comparer et ranger",
        "content": "• Pour comparer deux décimaux, on compare d'abord les **parties entières**. Si elles sont égales, on compare les chiffres des **dixièmes**, puis des **centièmes**, etc.\n$$12{,}4 > 9{,}87 \\qquad 5{,}38 < 5{,}4 \\quad (3 \\text{ dixièmes} < 4 \\text{ dixièmes})$$\n• Astuce : compléter avec des zéros pour avoir autant de décimales : $5{,}38$ et $5{,}40$.\n• Ranger dans l'**ordre croissant** : du plus petit au plus grand (symbole $<$) ; **décroissant** : du plus grand au plus petit (symbole $>$)."
      },
      {
        "title": "3. Encadrer, intercaler, arrondir",
        "content": "• **Encadrer** $7{,}36$ à l'unité : $7 < 7{,}36 < 8$ ; au dixième : $7{,}3 < 7{,}36 < 7{,}4$.\n• **Intercaler** : entre deux décimaux distincts, on peut toujours trouver un autre décimal : entre $2{,}4$ et $2{,}5$ il y a $2{,}45$.\n• **Arrondir** à un rang, c'est choisir la valeur de l'encadrement la plus **proche**. On regarde le chiffre suivant : s'il vaut $0, 1, 2, 3$ ou $4$, on garde la valeur inférieure ; s'il vaut $5, 6, 7, 8$ ou $9$, on prend la valeur supérieure.\n$$7{,}36 \\approx 7{,}4 \\text{ (au dixième)} \\qquad 7{,}36 \\approx 7 \\text{ (à l'unité)}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Lire une abscisse sur une demi-droite graduée",
        "example": "L'unité est partagée en $5$ graduations et le point $M$ est sur la $3^e$ graduation après $2$. Quelle est l'abscisse de $M$ ?",
        "steps": [
          "**Étape 1** : On calcule la valeur d'une graduation : $1 \\div 5 = 0{,}2$.",
          "**Étape 2** : On compte les graduations depuis le repère connu : $3 \\times 0{,}2 = 0{,}6$.",
          "**Étape 3** : On ajoute : $2 + 0{,}6 = 2{,}6$. Donc $M(2{,}6)$."
        ]
      },
      {
        "title": "Méthode : Ranger une liste de décimaux",
        "example": "Ranger dans l'ordre croissant : $4{,}3$ ; $4{,}08$ ; $4{,}25$ ; $3{,}9$.",
        "steps": [
          "**Étape 1** : On compare les parties entières : $3{,}9$ est le plus petit.",
          "**Étape 2** : Pour les nombres de partie entière $4$, on écrit deux décimales : $4{,}30$ ; $4{,}08$ ; $4{,}25$.",
          "**Étape 3** : On range : $3{,}9 < 4{,}08 < 4{,}25 < 4{,}3$."
        ]
      }
    ],
    "traps": [
      "⚠️ Un nombre n'est pas plus grand parce qu'il a plus de chiffres après la virgule : $2{,}15 < 2{,}3$.",
      "⚠️ Pour arrondir, on ne regarde que le chiffre **juste après** le rang demandé : $3{,}149 \\approx 3{,}1$ au dixième (on regarde le $4$, pas le $9$).",
      "⚠️ Sur une demi-droite graduée, bien calculer la valeur d'**une** graduation avant de compter : elle ne vaut pas toujours $0{,}1$.",
      "⚠️ Arrondir $4{,}97$ au dixième donne $5{,}0$ c'est-à-dire $5$ : la retenue se propage."
    ],
    "flashcards": [
      { "q": "Quel est le plus grand : $3{,}7$ ou $3{,}65$ ?", "a": "$3{,}7 = 3{,}70 > 3{,}65$ (7 dixièmes > 6 dixièmes)." },
      { "q": "Arrondir $12{,}458$ au centième.", "a": "$12{,}46$ (le chiffre des millièmes est $8 \\ge 5$)." },
      { "q": "Encadrer $6{,}83$ entre deux entiers consécutifs.", "a": "$6 < 6{,}83 < 7$." },
      { "q": "Donner un nombre compris entre $1{,}2$ et $1{,}3$.", "a": "Par exemple $1{,}25$ (ou $1{,}21$, $1{,}299$…)." },
      { "q": "Que signifie « ordre décroissant » ?", "a": "Du plus grand au plus petit, avec le symbole $>$." }
    ]
  },
  "6N3": {
    "title": "6N3 : Addition et soustraction de nombres décimaux",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Calculer mentalement, en ligne ou en posant l'opération des sommes et des différences de nombres décimaux.",
      "Utiliser le vocabulaire : somme, différence, terme.",
      "Estimer un ordre de grandeur pour contrôler un résultat.",
      "Résoudre des problèmes additifs (complément, écart, rendu de monnaie)."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire",
        "content": "• Le résultat d'une addition est une **somme** ; celui d'une soustraction est une **différence**. Les nombres additionnés ou soustraits sont les **termes**.\n• L'addition est **commutative** ($a + b = b + a$) : on peut regrouper les termes astucieusement :\n$$3{,}7 + 8{,}5 + 6{,}3 = (3{,}7 + 6{,}3) + 8{,}5 = 10 + 8{,}5 = 18{,}5$$\n• La soustraction n'est pas commutative : $10 - 4 \\neq 4 - 10$."
      },
      {
        "title": "2. Poser une addition ou une soustraction",
        "content": "• On aligne les **virgules** les unes sous les autres, donc les chiffres de même rang (unités sous unités, dixièmes sous dixièmes…).\n• On complète par des zéros si nécessaire : $15 - 3{,}82$ se pose $15{,}00 - 3{,}82$.\n• On calcule de droite à gauche en gérant les retenues.\n$$15{,}00 - 3{,}82 = 11{,}18$$"
      },
      {
        "title": "3. Ordre de grandeur",
        "content": "• Un **ordre de grandeur** est une valeur approchée simple obtenue en arrondissant les termes.\n• Exemple : $49{,}8 + 31{,}25 \\approx 50 + 30 = 80$. Le résultat exact $81{,}05$ est cohérent.\n• Il permet de **détecter une erreur** (virgule mal placée, oubli de retenue)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une différence de décimaux",
        "example": "Calculer $23{,}4 - 8{,}76$.",
        "steps": [
          "**Étape 1** : On écrit le même nombre de décimales : $23{,}40 - 8{,}76$.",
          "**Étape 2** : On pose en alignant les virgules et on soustrait de droite à gauche avec les retenues.",
          "**Étape 3** : On obtient $14{,}64$. Contrôle : $23 - 9 = 14$, cohérent."
        ]
      },
      {
        "title": "Méthode : Trouver un complément",
        "example": "Combien faut-il ajouter à $6{,}35$ pour obtenir $10$ ?",
        "steps": [
          "**Étape 1** : On cherche le nombre manquant dans $6{,}35 + \\dots = 10$.",
          "**Étape 2** : C'est la différence $10 - 6{,}35$.",
          "**Étape 3** : $10 - 6{,}35 = 3{,}65$. Vérification : $6{,}35 + 3{,}65 = 10$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas aligner les nombres à droite : dans $12{,}5 + 3{,}25$, il faut aligner les virgules, sinon on additionne des dixièmes avec des centièmes.",
      "⚠️ $0{,}7 + 0{,}5 = 1{,}2$ et non $0{,}12$ : 7 dixièmes + 5 dixièmes = 12 dixièmes.",
      "⚠️ Dans une soustraction, le premier terme doit être le plus grand en 6e ; l'ordre des termes compte.",
      "⚠️ Toujours vérifier avec un ordre de grandeur : un résultat de $135$ pour $12{,}6 + 1{,}35$ est absurde."
    ],
    "flashcards": [
      { "q": "Comment s'appelle le résultat d'une addition ?", "a": "Une **somme**." },
      { "q": "Calculer $0{,}6 + 0{,}8$.", "a": "$1{,}4$ (6 dixièmes + 8 dixièmes = 14 dixièmes)." },
      { "q": "Calculer $10 - 2{,}75$.", "a": "$7{,}25$." },
      { "q": "Donner un ordre de grandeur de $198{,}7 + 51{,}2$.", "a": "$200 + 50 = 250$." },
      { "q": "Quelle est la règle d'or pour poser une addition de décimaux ?", "a": "Aligner les **virgules** (donc les chiffres de même rang)." }
    ]
  },
  "6N4": {
    "title": "6N4 : Multiplication de nombres décimaux",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Multiplier et diviser un nombre décimal par $10$, $100$, $1\\,000$.",
      "Multiplier un nombre décimal par $0{,}1$ ; $0{,}01$ ; $0{,}001$ et faire le lien avec la division par $10$, $100$, $1\\,000$.",
      "Calculer le produit de deux nombres décimaux (mentalement, en ligne ou posé).",
      "Utiliser un ordre de grandeur pour contrôler un produit et résoudre des problèmes."
    ],
    "keyPoints": [
      {
        "title": "1. Multiplier par 10, 100, 1 000",
        "content": "• Multiplier par $10$ rend un nombre **10 fois plus grand** : chaque chiffre avance d'**un rang** vers la gauche.\n$$3{,}457 \\times 10 = 34{,}57 \\qquad 3{,}457 \\times 100 = 345{,}7 \\qquad 3{,}457 \\times 1\\,000 = 3\\,457$$\n• Diviser par $10$, $100$, $1\\,000$ fait reculer les chiffres d'un, deux, trois rangs : $52 \\div 100 = 0{,}52$."
      },
      {
        "title": "2. Multiplier par 0,1 ; 0,01 ; 0,001",
        "content": "• Multiplier par $0{,}1$, c'est prendre **un dixième** du nombre : c'est la même chose que **diviser par 10**.\n$$46 \\times 0{,}1 = 46 \\div 10 = 4{,}6 \\qquad 46 \\times 0{,}01 = 0{,}46 \\qquad 46 \\times 0{,}001 = 0{,}046$$\n• Attention : multiplier par un nombre inférieur à $1$ donne un résultat **plus petit** que le nombre de départ."
      },
      {
        "title": "3. Produit de deux décimaux",
        "content": "• **Règle** : on multiplie les nombres **sans tenir compte des virgules**, puis on place la virgule pour que le résultat ait **autant de chiffres après la virgule** qu'il y en a au total dans les deux facteurs.\n$$2{,}3 \\times 1{,}25 : \\quad 23 \\times 125 = 2\\,875 \\quad \\text{donc} \\quad 2{,}3 \\times 1{,}25 = 2{,}875$$\n(1 décimale + 2 décimales = 3 décimales.)\n• Justification : $2{,}3 = \\frac{23}{10}$ et $1{,}25 = \\frac{125}{100}$, le produit vaut $\\frac{2\\,875}{1\\,000}$.\n• Le résultat d'une multiplication est un **produit** ; les nombres multipliés sont les **facteurs**."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un produit de décimaux",
        "example": "Calculer $4{,}6 \\times 0{,}35$.",
        "steps": [
          "**Étape 1** : Ordre de grandeur : $5 \\times 0{,}3 = 1{,}5$.",
          "**Étape 2** : Sans les virgules : $46 \\times 35 = 1\\,610$.",
          "**Étape 3** : Nombre de décimales : $1 + 2 = 3$. Donc $4{,}6 \\times 0{,}35 = 1{,}610 = 1{,}61$, cohérent avec $1{,}5$."
        ]
      },
      {
        "title": "Méthode : Calcul astucieux",
        "example": "Calculer mentalement $0{,}25 \\times 7{,}3 \\times 4$.",
        "steps": [
          "**Étape 1** : On regroupe les facteurs qui donnent un résultat simple : $0{,}25 \\times 4 = 1$.",
          "**Étape 2** : Il reste $1 \\times 7{,}3 = 7{,}3$."
        ]
      }
    ],
    "traps": [
      "⚠️ Multiplier par $10$, ce n'est pas « ajouter un zéro » : $2{,}5 \\times 10 = 25$ et non $2{,}50$.",
      "⚠️ Dans un produit de décimaux, on n'aligne pas les virgules : on compte le **nombre total** de décimales des facteurs.",
      "⚠️ Multiplier par $0{,}1$ ne « grandit » pas : $8 \\times 0{,}1 = 0{,}8$.",
      "⚠️ Penser à supprimer les zéros inutiles **après** avoir placé la virgule : $1{,}5 \\times 0{,}4$ donne $0{,}60 = 0{,}6$."
    ],
    "flashcards": [
      { "q": "Calculer $7{,}82 \\times 100$.", "a": "$782$." },
      { "q": "Calculer $35 \\times 0{,}01$.", "a": "$0{,}35$ (multiplier par $0{,}01$ revient à diviser par $100$)." },
      { "q": "Calculer $0{,}3 \\times 0{,}2$.", "a": "$0{,}06$ ($3 \\times 2 = 6$ et 2 décimales au total)." },
      { "q": "Combien de décimales a le produit $1{,}25 \\times 3{,}4$ (avant simplification) ?", "a": "$2 + 1 = 3$ décimales : $4{,}250 = 4{,}25$." },
      { "q": "Multiplier par $0{,}5$, c'est…", "a": "Prendre la moitié : $18 \\times 0{,}5 = 9$." }
    ]
  },
  "6N5": {
    "title": "6N5 : Division euclidienne, division décimale, multiples et diviseurs",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Effectuer la division euclidienne d'un entier par un entier inférieur à $100$ et écrire l'égalité $a = b \\times q + r$ avec $r < b$.",
      "Reconnaître les multiples et les diviseurs d'un nombre entier ; utiliser les critères de divisibilité par $2$, $3$, $5$, $9$ et $10$.",
      "Diviser un nombre décimal par un entier inférieur à $10$.",
      "Résoudre des problèmes de partage et de groupement."
    ],
    "keyPoints": [
      {
        "title": "1. Division euclidienne",
        "content": "• Effectuer la **division euclidienne** de l'entier $a$ (le **dividende**) par l'entier $b$ non nul (le **diviseur**), c'est trouver deux entiers $q$ (le **quotient**) et $r$ (le **reste**) tels que :\n$$a = b \\times q + r \\quad \\text{avec} \\quad r < b$$\n• Exemple : $87 = 6 \\times 14 + 3$ ; dans la division de $87$ par $6$, le quotient est $14$ et le reste est $3$."
      },
      {
        "title": "2. Multiples, diviseurs et critères",
        "content": "• Si le reste de la division de $a$ par $b$ est **nul**, on dit que $a$ est un **multiple** de $b$, que $b$ est un **diviseur** de $a$ et que $a$ est **divisible** par $b$. Exemple : $42 = 6 \\times 7$.\n• **Critères de divisibilité** :\n  – par $2$ : le chiffre des unités est $0, 2, 4, 6$ ou $8$ ;\n  – par $5$ : le chiffre des unités est $0$ ou $5$ ;\n  – par $10$ : le chiffre des unités est $0$ ;\n  – par $3$ : la somme des chiffres est un multiple de $3$ ;\n  – par $9$ : la somme des chiffres est un multiple de $9$."
      },
      {
        "title": "3. Division décimale",
        "content": "• On peut continuer une division au-delà de la virgule en transformant le reste en dixièmes, centièmes… : $17 \\div 4 = 4{,}25$.\n• Pour diviser un décimal par un entier, on place la virgule au quotient **dès qu'on abaisse le chiffre des dixièmes** :\n$$25{,}2 \\div 6 = 4{,}2 \\qquad \\text{car} \\quad 6 \\times 4{,}2 = 25{,}2$$\n• Le quotient n'est pas toujours décimal : $10 \\div 3 = 3{,}333\\dots$ ; on donne alors une valeur approchée."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre un problème de division euclidienne",
        "example": "On range $230$ œufs dans des boîtes de $12$. Combien de boîtes pleines ? Combien d'œufs restent ?",
        "steps": [
          "**Étape 1** : On cherche le plus grand multiple de $12$ inférieur ou égal à $230$ : $12 \\times 19 = 228$.",
          "**Étape 2** : Le reste vaut $230 - 228 = 2$, et $2 < 12$.",
          "**Étape 3** : On écrit $230 = 12 \\times 19 + 2$ : $19$ boîtes pleines et $2$ œufs restants."
        ]
      },
      {
        "title": "Méthode : Tester la divisibilité par 3 ou 9",
        "example": "$4\\,572$ est-il divisible par $3$ ? par $9$ ?",
        "steps": [
          "**Étape 1** : Somme des chiffres : $4 + 5 + 7 + 2 = 18$.",
          "**Étape 2** : $18$ est un multiple de $3$ et de $9$.",
          "**Étape 3** : Donc $4\\,572$ est divisible par $3$ et par $9$."
        ]
      }
    ],
    "traps": [
      "⚠️ Le reste doit toujours être **strictement inférieur** au diviseur : $50 = 7 \\times 6 + 8$ n'est pas une division euclidienne par $7$ car $8 > 7$.",
      "⚠️ Ne pas confondre « $a$ est un multiple de $b$ » et « $a$ est un diviseur de $b$ » : $24$ est un multiple de $6$, $6$ est un diviseur de $24$.",
      "⚠️ Le critère par $3$ porte sur la **somme** des chiffres, pas sur le chiffre des unités : $13$ n'est pas divisible par $3$.",
      "⚠️ Dans une division décimale, ne pas oublier les zéros au quotient : $6{,}3 \\div 3 = 2{,}1$ mais $6{,}03 \\div 3 = 2{,}01$."
    ],
    "flashcards": [
      { "q": "Écrire l'égalité de la division euclidienne de $47$ par $5$.", "a": "$47 = 5 \\times 9 + 2$ (quotient $9$, reste $2$)." },
      { "q": "$135$ est-il divisible par $5$ ? par $9$ ?", "a": "Oui par $5$ (finit par $5$) et oui par $9$ ($1 + 3 + 5 = 9$)." },
      { "q": "Citer tous les diviseurs de $12$.", "a": "$1, 2, 3, 4, 6, 12$." },
      { "q": "Calculer $8{,}4 \\div 4$.", "a": "$2{,}1$." },
      { "q": "Quelle condition doit vérifier le reste $r$ dans une division par $b$ ?", "a": "$r < b$ (le reste est strictement inférieur au diviseur)." }
    ]
  },
  "6N6": {
    "title": "6N6 : Fractions : quotient, repérage, égalité et comparaison",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Comprendre qu'une fraction $\\frac{a}{b}$ est le quotient de $a$ par $b$ : le nombre qui, multiplié par $b$, donne $a$.",
      "Repérer et placer une fraction sur une demi-droite graduée, graduer un segment en partageant l'unité.",
      "Reconnaître qu'une fraction peut être un nombre entier, un nombre décimal ou un nombre qui n'est pas décimal.",
      "Produire des fractions égales, simplifier une fraction et écrire une fraction sous la forme d'un nombre mixte.",
      "Comparer, encadrer entre deux entiers et ranger des fractions."
    ],
    "keyPoints": [
      {
        "title": "1. La fraction, un quotient",
        "content": "• Dans la fraction $\\frac{a}{b}$ ($b \\neq 0$), $a$ est le **numérateur** et $b$ le **dénominateur**.\n• $\\frac{a}{b}$ est le **quotient** de $a$ par $b$ : c'est le nombre qui, multiplié par $b$, donne $a$.\n$$7 \\times \\frac{3}{7} = 3 \\qquad \\text{et} \\qquad \\frac{3}{4} = 3 \\div 4 = 0{,}75$$\n• Une fraction peut être :\n  – un **nombre entier** : $\\frac{12}{4} = 3$ ;\n  – un **nombre décimal non entier** : $\\frac{3}{4} = 0{,}75$ ;\n  – un nombre **qui n'est pas décimal** : $\\frac{1}{3} = 0{,}333\\ldots$ (la division ne s'arrête jamais)."
      },
      {
        "title": "2. Repérer une fraction sur une demi-droite graduée",
        "content": "Pour placer $\\frac{a}{b}$ sur une demi-droite graduée d'origine $0$ :\n• on partage **l'unité** (le segment de $0$ à $1$) en $b$ parts égales ;\n• on reporte $a$ de ces parts à partir de l'origine.\nExemple : pour $\\frac{7}{4}$, l'unité est partagée en $4$ et on compte $7$ quarts : le point est situé entre $1$ et $2$, car $\\frac{4}{4} = 1$ et $\\frac{8}{4} = 2$."
      },
      {
        "title": "3. Fractions égales et nombres mixtes",
        "content": "• On obtient une fraction égale en **multipliant ou en divisant** le numérateur et le dénominateur **par un même nombre non nul** :\n$$\\frac{3}{5} = \\frac{3 \\times 4}{5 \\times 4} = \\frac{12}{20} \\qquad \\frac{18}{24} = \\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}$$\n• **Simplifier** une fraction, c'est écrire une fraction égale avec des nombres plus petits (on utilise les tables et les critères de divisibilité).\n• **Nombre mixte** : une fraction plus grande que $1$ s'écrit comme la somme d'un entier et d'une fraction plus petite que $1$. Comme $17 = 3 \\times 5 + 2$ :\n$$\\frac{17}{5} = 3 + \\frac{2}{5}$$"
      },
      {
        "title": "4. Comparer et encadrer des fractions",
        "content": "• **Même dénominateur** : la plus grande fraction est celle qui a le plus grand numérateur : $\\frac{7}{9} > \\frac{4}{9}$.\n• **Comparaison à 1** : si le numérateur est plus grand que le dénominateur, la fraction est plus grande que $1$ : $\\frac{8}{5} > 1 > \\frac{4}{5}$.\n• **Dénominateurs multiples l'un de l'autre** : on transforme une fraction pour obtenir le même dénominateur : $\\frac{2}{3} = \\frac{8}{12}$ donc $\\frac{2}{3} > \\frac{7}{12}$.\n• **Encadrer entre deux entiers consécutifs** : $\\frac{23}{6}$ est entre $\\frac{18}{6} = 3$ et $\\frac{24}{6} = 4$, donc $3 < \\frac{23}{6} < 4$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Placer une fraction sur une demi-droite graduée",
        "example": "Placer le point $A$ d'abscisse $\\frac{7}{4}$.",
        "steps": [
          "**Étape 1** : Le dénominateur est $4$ : on partage chaque unité en $4$ parts égales (des quarts).",
          "**Étape 2** : On compte $7$ quarts à partir de $0$ : $4$ quarts pour arriver à $1$, puis encore $3$ quarts.",
          "**Étape 3** : On place $A$ et on vérifie : $\\frac{7}{4} = 1 + \\frac{3}{4}$, le point est bien entre $1$ et $2$."
        ]
      },
      {
        "title": "Méthode : Comparer deux fractions dont les dénominateurs sont multiples",
        "example": "Comparer $\\frac{2}{3}$ et $\\frac{7}{12}$.",
        "steps": [
          "**Étape 1** : $12 = 3 \\times 4$ : on écrit $\\frac{2}{3}$ avec le dénominateur $12$ : $\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$.",
          "**Étape 2** : Les deux fractions ont le même dénominateur, on compare les numérateurs : $8 > 7$.",
          "**Conclusion** : $\\frac{8}{12} > \\frac{7}{12}$, donc $\\frac{2}{3} > \\frac{7}{12}$."
        ]
      }
    ],
    "traps": [
      "⚠️ $\\frac{2}{3}$ n'est pas égal à $2{,}3$ : c'est le quotient $2 \\div 3 = 0{,}666\\ldots$",
      "⚠️ Pour obtenir une fraction égale, on multiplie le numérateur **et** le dénominateur par le même nombre : $\\frac{3}{5} \\neq \\frac{6}{5}$.",
      "⚠️ Avec un même numérateur, le plus grand dénominateur donne la plus **petite** fraction : $\\frac{1}{5} < \\frac{1}{3}$ (un cinquième de gâteau est plus petit qu'un tiers).",
      "⚠️ Sur une demi-droite graduée, on partage **l'unité** en $b$ parts, pas le segment entier dessiné."
    ],
    "flashcards": [
      {
        "q": "Que signifie $\\frac{5}{8}$ comme quotient ?",
        "a": "C'est le nombre qui, multiplié par $8$, donne $5$ : $8 \\times \\frac{5}{8} = 5$. On a aussi $\\frac{5}{8} = 5 \\div 8 = 0{,}625$."
      },
      {
        "q": "Quel nombre manque : $9 \\times \\ldots = 4$ ?",
        "a": "$\\frac{4}{9}$, car $9 \\times \\frac{4}{9} = 4$."
      },
      {
        "q": "Simplifier $\\frac{15}{25}$.",
        "a": "$\\frac{15}{25} = \\frac{15 \\div 5}{25 \\div 5} = \\frac{3}{5}$."
      },
      {
        "q": "Écrire $\\frac{11}{4}$ sous forme de nombre mixte.",
        "a": "$11 = 2 \\times 4 + 3$, donc $\\frac{11}{4} = 2 + \\frac{3}{4}$."
      },
      {
        "q": "Quel est le plus grand : $\\frac{1}{6}$ ou $\\frac{1}{4}$ ?",
        "a": "$\\frac{1}{4}$ : avec le même numérateur, le plus petit dénominateur donne la plus grande fraction."
      },
      {
        "q": "$\\frac{1}{3}$ est-il un nombre décimal ?",
        "a": "Non : $1 \\div 3 = 0{,}333\\ldots$ ne s'arrête jamais. $\\frac{1}{3}$ n'est pas un nombre décimal."
      }
    ]
  },
  "6N7": {
    "title": "6N7 : Calculs avec les fractions",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Additionner et soustraire des fractions de même dénominateur.",
      "Additionner et soustraire des fractions dont un dénominateur est multiple de l'autre.",
      "Multiplier une fraction par un nombre entier.",
      "Calculer une fraction d'une quantité et résoudre des problèmes de partage."
    ],
    "keyPoints": [
      {
        "title": "1. Même dénominateur",
        "content": "Pour additionner (ou soustraire) deux fractions de **même dénominateur**, on additionne (ou on soustrait) les numérateurs et on **garde le dénominateur** :\n$$\\frac{2}{9} + \\frac{5}{9} = \\frac{2 + 5}{9} = \\frac{7}{9} \\qquad \\frac{11}{7} - \\frac{4}{7} = \\frac{7}{7} = 1$$"
      },
      {
        "title": "2. Dénominateurs multiples l'un de l'autre",
        "content": "On commence par écrire les deux fractions avec **le même dénominateur** (le plus grand des deux), puis on applique la règle précédente :\n$$\\frac{3}{4} + \\frac{5}{8} = \\frac{3 \\times 2}{4 \\times 2} + \\frac{5}{8} = \\frac{6}{8} + \\frac{5}{8} = \\frac{11}{8}$$\nOn simplifie le résultat quand c'est possible : $\\frac{7}{6} - \\frac{2}{3} = \\frac{7}{6} - \\frac{4}{6} = \\frac{3}{6} = \\frac{1}{2}$."
      },
      {
        "title": "3. Multiplier une fraction par un entier",
        "content": "Pour multiplier une fraction par un nombre entier, on multiplie **seulement le numérateur** :\n$$3 \\times \\frac{2}{7} = \\frac{3 \\times 2}{7} = \\frac{6}{7}$$\nC'est une addition répétée : $\\frac{2}{7} + \\frac{2}{7} + \\frac{2}{7} = \\frac{6}{7}$."
      },
      {
        "title": "4. Prendre une fraction d'une quantité",
        "content": "Prendre $\\frac{a}{b}$ d'une quantité, c'est **multiplier** cette quantité par $\\frac{a}{b}$. On peut diviser d'abord par $b$, puis multiplier par $a$ :\n$$\\frac{3}{4} \\text{ de } 20 = \\frac{3}{4} \\times 20 = (20 \\div 4) \\times 3 = 5 \\times 3 = 15$$\nOn peut aussi multiplier d'abord : $(3 \\times 20) \\div 4 = 60 \\div 4 = 15$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Additionner deux fractions de dénominateurs multiples",
        "example": "Calculer $\\frac{2}{5} + \\frac{7}{15}$.",
        "steps": [
          "**Étape 1** : $15 = 5 \\times 3$ : on écrit $\\frac{2}{5}$ avec le dénominateur $15$ : $\\frac{2}{5} = \\frac{6}{15}$.",
          "**Étape 2** : On additionne les numérateurs : $\\frac{6}{15} + \\frac{7}{15} = \\frac{13}{15}$.",
          "**Étape 3** : On vérifie si le résultat se simplifie : $13$ et $15$ n'ont pas de diviseur commun autre que $1$. Résultat : $\\frac{13}{15}$."
        ]
      },
      {
        "title": "Méthode : Calculer une fraction d'une quantité",
        "example": "Un club compte $36$ élèves ; les $\\frac{5}{9}$ sont des filles. Combien y a-t-il de filles ?",
        "steps": [
          "**Étape 1** : On partage la quantité en $9$ parts égales : $36 \\div 9 = 4$.",
          "**Étape 2** : On prend $5$ de ces parts : $5 \\times 4 = 20$.",
          "**Conclusion** : $\\frac{5}{9} \\times 36 = 20$ ; il y a $20$ filles."
        ]
      }
    ],
    "traps": [
      "⚠️ On n'additionne jamais les dénominateurs : $\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$ et non $\\frac{3}{8}$.",
      "⚠️ Avant d'additionner $\\frac{1}{3}$ et $\\frac{5}{6}$, il faut le même dénominateur : $\\frac{1}{3} = \\frac{2}{6}$.",
      "⚠️ Pour multiplier une fraction par un entier, on ne multiplie pas le dénominateur : $2 \\times \\frac{3}{5} = \\frac{6}{5}$ et non $\\frac{6}{10}$.",
      "⚠️ « Les $\\frac{2}{3}$ de $30$ » se calcule par une multiplication ($20$), pas par une division de $30$ par $\\frac{2}{3}$."
    ],
    "flashcards": [
      {
        "q": "Calculer $\\frac{4}{11} + \\frac{5}{11}$.",
        "a": "$\\frac{9}{11}$ : on additionne les numérateurs et on garde le dénominateur."
      },
      {
        "q": "Calculer $\\frac{1}{2} + \\frac{1}{4}$.",
        "a": "$\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$."
      },
      {
        "q": "Calculer $4 \\times \\frac{2}{9}$.",
        "a": "$\\frac{8}{9}$ (on multiplie seulement le numérateur)."
      },
      {
        "q": "Combien valent les $\\frac{2}{3}$ de $30$ ?",
        "a": "$30 \\div 3 = 10$, puis $10 \\times 2 = 20$."
      },
      {
        "q": "Calculer $1 - \\frac{3}{8}$.",
        "a": "$1 = \\frac{8}{8}$, donc $\\frac{8}{8} - \\frac{3}{8} = \\frac{5}{8}$."
      }
    ]
  },
  "6N8": {
    "title": "6N8 : Pensée algébrique : nombres inconnus, égalités à trou et motifs",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Trouver un nombre inconnu dans une égalité à trou en utilisant l'opération « inverse ».",
      "Appliquer un programme de calcul et retrouver le nombre de départ.",
      "Modéliser un problème à l'aide d'un schéma en barres pour trouver une quantité inconnue.",
      "Identifier la régularité d'un motif évolutif et prévoir une étape plus lointaine."
    ],
    "keyPoints": [
      {
        "title": "1. Nombre inconnu et égalité à trou",
        "content": "Une **égalité à trou** contient un nombre inconnu. On le retrouve grâce au lien entre les opérations :\n• $\\ldots + 27 = 63$ : le nombre cherché est $63 - 27 = 36$ ;\n• $\\ldots - 15 = 40$ : le nombre cherché est $40 + 15 = 55$ ;\n• $8 \\times \\ldots = 56$ : le nombre cherché est $56 \\div 8 = 7$ ;\n• $\\ldots \\div 4 = 9$ : le nombre cherché est $9 \\times 4 = 36$.\nOn **vérifie** toujours en remplaçant les pointillés par le nombre trouvé."
      },
      {
        "title": "2. Programme de calcul",
        "content": "Un **programme de calcul** est une suite d'instructions appliquée à un nombre de départ.\nExemple : « Choisir un nombre ; le multiplier par $3$ ; ajouter $5$. »\n• Départ $7$ : $7 \\times 3 = 21$, puis $21 + 5 = 26$.\n• Pour **retrouver le nombre de départ** à partir du résultat $35$, on « remonte » le programme avec les opérations inverses : $35 - 5 = 30$, puis $30 \\div 3 = 10$."
      },
      {
        "title": "3. Modéliser avec un schéma en barres",
        "content": "Un **schéma en barres** représente les quantités par des rectangles de même longueur pour les parts égales.\nExemple : Tom et Lina ont $54$ billes en tout ; Lina en a deux fois plus que Tom.\n```text\nTom  : [ part ]\nLina : [ part ][ part ]      total : 54 billes\n```\nIl y a $3$ parts égales : $54 \\div 3 = 18$. Tom a $18$ billes et Lina $36$ billes."
      },
      {
        "title": "4. Motifs évolutifs",
        "content": "Dans un **motif évolutif**, chaque étape se construit à partir de la précédente selon une règle régulière.\nExemple : à l'étape $1$ on utilise $4$ allumettes, puis on en ajoute $3$ à chaque étape.\n| Étape | 1 | 2 | 3 | 4 |\n|:---:|:---:|:---:|:---:|:---:|\n| Allumettes | 4 | 7 | 10 | 13 |\nRègle : nombre d'allumettes $= 3 \\times (\\text{numéro de l'étape}) + 1$. À l'étape $10$ : $3 \\times 10 + 1 = 31$ allumettes."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Retrouver le nombre de départ d'un programme de calcul",
        "example": "Programme : « Choisir un nombre ; le multiplier par $4$ ; soustraire $6$. » On obtient $30$. Quel était le nombre de départ ?",
        "steps": [
          "**Étape 1** : La dernière opération est « soustraire $6$ » : on fait l'inverse, $30 + 6 = 36$.",
          "**Étape 2** : L'opération précédente est « multiplier par $4$ » : on fait l'inverse, $36 \\div 4 = 9$.",
          "**Vérification** : $9 \\times 4 - 6 = 36 - 6 = 30$. Le nombre de départ est $9$."
        ]
      },
      {
        "title": "Méthode : Prévoir une étape d'un motif",
        "example": "Un motif compte $5$ carreaux à l'étape $1$ et on ajoute $4$ carreaux à chaque étape. Combien de carreaux à l'étape $20$ ?",
        "steps": [
          "**Étape 1** : De l'étape $1$ à l'étape $20$, on ajoute $19$ fois $4$ carreaux.",
          "**Étape 2** : $19 \\times 4 = 76$.",
          "**Étape 3** : $5 + 76 = 81$ carreaux à l'étape $20$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans $\\ldots - 15 = 40$, le nombre cherché n'est pas $40 - 15$ mais $40 + 15 = 55$ : vérifie toujours !",
      "⚠️ Pour remonter un programme de calcul, on part de la **dernière** instruction.",
      "⚠️ Dans un motif, l'étape $10$ n'est pas forcément le double de l'étape $5$ : $3 \\times 5 + 1 = 16$ mais $3 \\times 10 + 1 = 31 \\neq 32$."
    ],
    "flashcards": [
      {
        "q": "Compléter : $\\ldots + 45 = 100$.",
        "a": "$100 - 45 = 55$."
      },
      {
        "q": "Compléter : $6 \\times \\ldots = 42$.",
        "a": "$42 \\div 6 = 7$."
      },
      {
        "q": "Programme : $\\times 2$ puis $+ 3$. Quel résultat pour le nombre $8$ ?",
        "a": "$8 \\times 2 + 3 = 16 + 3 = 19$."
      },
      {
        "q": "Programme : $\\times 2$ puis $+ 3$. Le résultat est $25$ : quel est le nombre de départ ?",
        "a": "On remonte : $25 - 3 = 22$, puis $22 \\div 2 = 11$."
      },
      {
        "q": "Un motif a 2 jetons à l'étape 1 et en gagne 2 à chaque étape. Combien à l'étape 6 ?",
        "a": "$2 + 5 \\times 2 = 12$ jetons (c'est le double du numéro de l'étape)."
      }
    ]
  },
  "6P1": {
    "title": "6P1 : Proportionnalité : linéarité, retour à l'unité et échelles",
    "domain": "Proportionnalité",
    "objectives": [
      "Reconnaître une situation de proportionnalité et une situation qui ne l'est pas.",
      "Résoudre un problème de proportionnalité par linéarité (multiplicative ou additive) ou par retour à l'unité.",
      "Représenter une situation de proportionnalité par un tableau et utiliser le coefficient de proportionnalité.",
      "Appliquer un pourcentage simple et utiliser une échelle."
    ],
    "keyPoints": [
      {
        "title": "1. Situation de proportionnalité",
        "content": "Deux grandeurs sont **proportionnelles** lorsqu'on obtient les valeurs de l'une en **multipliant** les valeurs de l'autre **toujours par le même nombre**, appelé **coefficient de proportionnalité**.\n• Proportionnel : le prix payé et la masse de pommes à $2{,}50$ € le kilogramme.\n• Non proportionnel : la taille d'un enfant et son âge ; le prix d'une course de taxi avec une prise en charge fixe.\nExpressions associées : « deux fois plus… », « trois fois moins… », « autant pour chaque… »."
      },
      {
        "title": "2. Linéarité et retour à l'unité",
        "content": "Exemple : $3$ cahiers coûtent $4{,}50$ €.\n• **Linéarité multiplicative** : deux fois plus de cahiers coûtent deux fois plus cher : $6$ cahiers coûtent $9$ €.\n• **Linéarité additive** : $5 = 3 + 2$ ; si $2$ cahiers coûtent $3$ €, alors $5$ cahiers coûtent $4{,}50 + 3 = 7{,}50$ €.\n• **Retour à l'unité** : $1$ cahier coûte $4{,}50 \\div 3 = 1{,}50$ €, donc $7$ cahiers coûtent $7 \\times 1{,}50 = 10{,}50$ €."
      },
      {
        "title": "3. Tableau de proportionnalité",
        "content": "| Nombre de cahiers | 3 | 6 | 7 |\n|:---:|:---:|:---:|:---:|\n| Prix (€) | 4,50 | 9 | 10,50 |\nOn passe de la première ligne à la seconde en multipliant par le **coefficient** $1{,}5$ : $3 \\times 1{,}5 = 4{,}5$."
      },
      {
        "title": "4. Pourcentages et échelles",
        "content": "• Prendre $t\\,\\%$ d'une quantité, c'est en prendre $\\frac{t}{100}$ : $30\\,\\%$ de $70$ $= \\frac{30}{100} \\times 70 = 21$.\n• Repères : $50\\,\\%$ c'est la moitié, $25\\,\\%$ le quart, $10\\,\\%$ le dixième.\n• Sur un plan, les longueurs sont proportionnelles aux longueurs réelles. Une **échelle** de $\\frac{1}{1\\,000}$ signifie que $1\\text{ cm}$ sur le plan représente $1\\,000\\text{ cm} = 10\\text{ m}$ dans la réalité."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Le retour à l'unité",
        "example": "$5\\text{ kg}$ de pommes coûtent $12$ €. Combien coûtent $3\\text{ kg}$ ?",
        "steps": [
          "**Étape 1** : On calcule le prix d'un kilogramme : $12 \\div 5 = 2{,}40$ €.",
          "**Étape 2** : On multiplie par la quantité cherchée : $3 \\times 2{,}40 = 7{,}20$ €.",
          "**Conclusion** : $3\\text{ kg}$ de pommes coûtent $7{,}20$ €."
        ]
      },
      {
        "title": "Méthode : Utiliser une échelle",
        "example": "Sur une carte à l'échelle $\\frac{1}{25\\,000}$, deux villages sont à $6\\text{ cm}$. Quelle est la distance réelle ?",
        "steps": [
          "**Étape 1** : $1\\text{ cm}$ sur la carte représente $25\\,000\\text{ cm}$ en réalité.",
          "**Étape 2** : $6 \\times 25\\,000 = 150\\,000\\text{ cm}$.",
          "**Étape 3** : On convertit : $150\\,000\\text{ cm} = 1\\,500\\text{ m} = 1{,}5\\text{ km}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Toutes les situations ne sont pas proportionnelles : un enfant de $10$ ans ne mesure pas deux fois la taille qu'il avait à $5$ ans.",
      "⚠️ La linéarité additive utilise une **somme** de colonnes : on ne peut pas ajouter un même nombre aux deux grandeurs.",
      "⚠️ Avec une échelle, pense à convertir : $150\\,000\\text{ cm}$ ne font pas $150\\text{ km}$ mais $1{,}5\\text{ km}$."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce que le coefficient de proportionnalité ?",
        "a": "C'est le nombre par lequel on multiplie toujours les valeurs d'une grandeur pour obtenir celles de l'autre."
      },
      {
        "q": "$4$ croissants coûtent $3{,}20$ €. Combien coûtent $8$ croissants ?",
        "a": "Deux fois plus de croissants : $2 \\times 3{,}20 = 6{,}40$ €."
      },
      {
        "q": "Combien font $10\\,\\%$ de $250$ ?",
        "a": "Le dixième de $250$ : $25$."
      },
      {
        "q": "Combien font $25\\,\\%$ de $36$ ?",
        "a": "Le quart de $36$ : $9$."
      },
      {
        "q": "Que signifie une échelle de $\\frac{1}{100}$ ?",
        "a": "$1\\text{ cm}$ sur le plan représente $100\\text{ cm} = 1\\text{ m}$ en réalité."
      }
    ]
  },
  "6D1": {
    "title": "6D1 : Organisation et gestion de données : tableaux et diagrammes",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Organiser une enquête : recueillir des données et les noter dans un tableau.",
      "Lire et compléter un tableau simple ou à double entrée.",
      "Filtrer des données d'un tableau selon un critère.",
      "Lire et interpréter un diagramme en barres."
    ],
    "keyPoints": [
      {
        "title": "1. Recueillir et organiser des données",
        "content": "Lors d'une **enquête**, on pose une même question à plusieurs personnes. On regroupe les réponses dans un **tableau** : pour chaque réponse, on compte l'**effectif** (le nombre de personnes ayant donné cette réponse).\n| Sport préféré | Football | Basket | Natation | Danse |\n|:---:|:---:|:---:|:---:|:---:|\n| Effectif | 9 | 6 | 4 | 7 |\nL'**effectif total** est la somme des effectifs : $9 + 6 + 4 + 7 = 26$ élèves."
      },
      {
        "title": "2. Tableau à double entrée",
        "content": "Un tableau à **double entrée** croise deux informations : chaque case se lit à l'intersection d'une ligne et d'une colonne.\n| | Demi-pensionnaires | Externes | Total |\n|:---|:---:|:---:|:---:|\n| 6e A | 18 | 7 | 25 |\n| 6e B | 15 | 11 | 26 |\n| Total | 33 | 18 | 51 |\nLes cases « Total » permettent de vérifier les calculs."
      },
      {
        "title": "3. Filtrer des données",
        "content": "**Filtrer**, c'est ne garder que les lignes d'un tableau qui vérifient un **critère** (par exemple : « temps inférieur à $8{,}5$ secondes », « élèves de 6e B », « prix inférieur à $10$ € »).\nOn parcourt chaque ligne, on teste le critère et on compte ou on recopie les données retenues. Un tableur peut le faire automatiquement avec un filtre."
      },
      {
        "title": "4. Diagramme en barres",
        "content": "Dans un **diagramme en barres**, chaque catégorie est représentée par une barre dont la **hauteur** est proportionnelle à l'effectif.\n• On lit d'abord la **graduation** de l'axe vertical (de combien en combien ?).\n• On lit la hauteur de chaque barre en suivant les lignes du quadrillage.\n• On peut ainsi comparer les catégories : la plus haute barre correspond à l'effectif le plus grand."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Lire un tableau à double entrée",
        "example": "Dans le tableau des 6e A et 6e B ci-dessus, combien y a-t-il d'externes en 6e B ?",
        "steps": [
          "**Étape 1** : On repère la ligne « 6e B ».",
          "**Étape 2** : On repère la colonne « Externes ».",
          "**Étape 3** : On lit la case à l'intersection : $11$ externes en 6e B."
        ]
      },
      {
        "title": "Méthode : Filtrer selon un critère",
        "example": "Quels élèves ont couru le $50\\text{ m}$ en moins de $8{,}5\\text{ s}$ : Ana $8{,}4$ ; Bilal $7{,}9$ ; Chloé $9{,}1$ ?",
        "steps": [
          "**Étape 1** : On compare chaque temps à $8{,}5$ : $8{,}4 < 8{,}5$ (oui), $7{,}9 < 8{,}5$ (oui), $9{,}1 > 8{,}5$ (non).",
          "**Étape 2** : On garde les élèves qui vérifient le critère : Ana et Bilal.",
          "**Conclusion** : $2$ élèves vérifient le critère."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un diagramme en barres, vérifie la graduation : un carreau ne vaut pas toujours 1.",
      "⚠️ Dans un tableau à double entrée, ne confonds pas ligne et colonne : lis bien les deux intitulés.",
      "⚠️ « Moins de $8{,}5$ » exclut la valeur $8{,}5$ elle-même ; « au plus $8{,}5$ » l'inclut."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce que l'effectif d'une réponse dans une enquête ?",
        "a": "C'est le nombre de personnes qui ont donné cette réponse."
      },
      {
        "q": "Comment calcule-t-on l'effectif total ?",
        "a": "On additionne les effectifs de toutes les catégories."
      },
      {
        "q": "Que signifie « filtrer » un tableau ?",
        "a": "Ne garder que les lignes qui vérifient un critère donné."
      },
      {
        "q": "Dans un diagramme en barres, que représente la hauteur d'une barre ?",
        "a": "L'effectif de la catégorie (la hauteur est proportionnelle à l'effectif)."
      },
      {
        "q": "À quoi sert la case « Total » d'un tableau à double entrée ?",
        "a": "À regrouper les effectifs d'une ligne ou d'une colonne et à vérifier les calculs."
      }
    ]
  },
  "6D2": {
    "title": "6D2 : Probabilités : hasard et premières probabilités",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Utiliser le vocabulaire du hasard : expérience aléatoire, issue, événement impossible, certain, probable.",
      "Savoir qu'une probabilité est un nombre compris entre 0 et 1.",
      "Calculer une probabilité dans une situation d'équiprobabilité simple.",
      "Comparer les fréquences obtenues lors d'expériences répétées avec une probabilité calculée."
    ],
    "keyPoints": [
      {
        "title": "1. Le vocabulaire du hasard",
        "content": "• Une **expérience aléatoire** est une expérience dont on connaît les résultats possibles, appelés **issues**, sans pouvoir prévoir lequel se produira (lancer un dé, tirer une bille dans un sac…).\n• Un événement peut être **impossible** (obtenir $7$ avec un dé à six faces), **certain** (obtenir un nombre inférieur à $10$), **peu probable**, **très probable**, ou avoir **une chance sur deux** de se produire."
      },
      {
        "title": "2. Une probabilité est un nombre entre 0 et 1",
        "content": "On mesure la « chance » qu'un événement se produise par un nombre appelé **probabilité**, toujours compris entre $0$ et $1$ :\n• probabilité $0$ : événement **impossible** ;\n• probabilité $1$ : événement **certain** ;\n• probabilité $\\frac{1}{2} = 0{,}5$ : une chance sur deux.\nUne probabilité peut s'écrire sous forme de fraction, de nombre décimal ou de pourcentage : $\\frac{1}{4} = 0{,}25 = 25\\,\\%$."
      },
      {
        "title": "3. Situation d'équiprobabilité",
        "content": "Quand toutes les issues ont la même chance de se produire (dé équilibré, billes indiscernables au toucher…), on parle d'**équiprobabilité**. Alors :\n$$\\text{probabilité} = \\frac{\\text{nombre d'issues favorables}}{\\text{nombre d'issues possibles}}$$\nExemple : un sac contient $3$ billes rouges et $5$ bleues. La probabilité de tirer une bille rouge est $\\frac{3}{8}$."
      },
      {
        "title": "4. Fréquence et probabilité",
        "content": "Si l'on répète une expérience un grand nombre de fois, la **fréquence** d'apparition d'une issue ($\\frac{\\text{nombre de fois obtenue}}{\\text{nombre d'essais}}$) se rapproche de sa probabilité.\nExemple : sur $200$ lancers d'une pièce, on obtient $94$ fois « pile » : fréquence $\\frac{94}{200} = 0{,}47$, proche de la probabilité $0{,}5$. Sur peu d'essais, la fréquence peut être assez éloignée de la probabilité."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une probabilité simple",
        "example": "On tire au hasard une carte parmi $10$ cartes numérotées de $1$ à $10$. Quelle est la probabilité d'obtenir un multiple de $3$ ?",
        "steps": [
          "**Étape 1** : Les cartes sont tirées au hasard : situation d'équiprobabilité, $10$ issues possibles.",
          "**Étape 2** : Issues favorables (multiples de $3$) : $3$, $6$, $9$, soit $3$ issues.",
          "**Étape 3** : Probabilité : $\\frac{3}{10} = 0{,}3$."
        ]
      },
      {
        "title": "Méthode : Calculer une fréquence",
        "example": "Sur $50$ lancers d'un dé, le $6$ est sorti $11$ fois. Quelle est la fréquence de sortie du $6$ ?",
        "steps": [
          "**Étape 1** : Fréquence $= \\frac{11}{50}$.",
          "**Étape 2** : $\\frac{11}{50} = \\frac{22}{100} = 0{,}22$.",
          "**Comparaison** : la probabilité est $\\frac{1}{6} \\approx 0{,}17$ ; avec plus de lancers, la fréquence s'en rapprocherait."
        ]
      }
    ],
    "traps": [
      "⚠️ Une probabilité n'est jamais supérieure à $1$ ni négative : $\\frac{8}{5}$ ne peut pas être une probabilité.",
      "⚠️ La fréquence observée n'est pas toujours égale à la probabilité : le hasard crée des écarts, surtout sur peu d'essais.",
      "⚠️ Compte toutes les issues possibles au dénominateur : avec $3$ rouges et $5$ bleues, il y a $8$ billes, donc $P(\\text{rouge}) = \\frac{3}{8}$ et non $\\frac{3}{5}$."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce qu'un événement impossible ? Quelle est sa probabilité ?",
        "a": "Un événement qui ne peut jamais se produire ; sa probabilité vaut $0$."
      },
      {
        "q": "Quelle est la probabilité d'un événement certain ?",
        "a": "$1$."
      },
      {
        "q": "Probabilité d'obtenir $5$ avec un dé équilibré à six faces ?",
        "a": "$\\frac{1}{6}$."
      },
      {
        "q": "Un sac contient $2$ billes vertes et $6$ jaunes. Probabilité de tirer une verte ?",
        "a": "$\\frac{2}{8} = \\frac{1}{4}$."
      },
      {
        "q": "Que se passe-t-il pour la fréquence quand on répète une expérience un très grand nombre de fois ?",
        "a": "Elle se rapproche de la probabilité de l'événement."
      }
    ]
  },
  "6A1": {
    "title": "6A1 : Initiation à la pensée informatique : instructions, séquences et boucles",
    "domain": "Pensée Informatique",
    "objectives": [
      "Identifier une instruction et une séquence d'instructions.",
      "Produire et exécuter (à la main) une séquence d'instructions.",
      "Répéter une séquence d'instructions à l'aide d'une boucle « répéter ».",
      "Programmer le déplacement d'un robot ou d'un lutin sur un quadrillage ou dans Scratch."
    ],
    "keyPoints": [
      {
        "title": "1. Instructions et séquences",
        "content": "• Une **instruction** est un ordre élémentaire donné à une machine (un robot, un lutin) : « avancer d'une case », « tourner à droite »…\n• Une **séquence** est une suite d'instructions exécutées **les unes après les autres, dans l'ordre**. Changer l'ordre peut changer le résultat.\n• Un **programme** (ou script) est une séquence d'instructions écrite pour réaliser une tâche."
      },
      {
        "title": "2. Déplacements sur un quadrillage",
        "content": "On code souvent un déplacement case par case avec des flèches :\n• → : une case vers la droite ; ← : une case vers la gauche ;\n• ↑ : une case vers le haut ; ↓ : une case vers le bas.\nExemple : le programme « → → ↑ → ↓ ↓ » amène le robot $3$ cases à droite et $1$ case vers le bas par rapport à son départ (car $2$ ↓ et $1$ ↑)."
      },
      {
        "title": "3. La boucle « répéter »",
        "content": "Quand une séquence se répète, on utilise une **boucle** : « répéter $n$ fois [ … ] ».\n```text\nrépéter 4 fois\n    avancer de 50 pas\n    tourner de 90 degrés\n```\nCe script trace un **carré** de côté $50$ pas : il est plus court que d'écrire $8$ instructions à la suite."
      },
      {
        "title": "4. Premiers pas dans Scratch",
        "content": "Dans Scratch, un **lutin** exécute des **blocs** emboîtés :\n• un bloc **événement** lance le script (« quand le drapeau vert est cliqué ») ;\n• des blocs **mouvement** (« avancer de 10 pas », « tourner de 90 degrés ») ;\n• des blocs **contrôle** (« répéter 10 fois ») ;\n• une **variable** (par exemple « score ») permet de mémoriser un nombre qui peut changer."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Exécuter un programme à la main",
        "example": "Le robot part de la case de départ et exécute : → → → ↑ ↑ ←. Où arrive-t-il ?",
        "steps": [
          "**Étape 1** : On suit les instructions une par une, dans l'ordre, en notant la position.",
          "**Étape 2** : Horizontalement : $3$ cases à droite puis $1$ à gauche, soit $2$ cases à droite.",
          "**Étape 3** : Verticalement : $2$ cases vers le haut. Le robot finit $2$ cases à droite et $2$ cases au-dessus du départ."
        ]
      },
      {
        "title": "Méthode : Écrire une boucle",
        "example": "Écrire un script court qui trace un rectangle de $80$ pas sur $30$ pas.",
        "steps": [
          "**Étape 1** : On repère le motif qui se répète : « avancer de $80$, tourner de $90$, avancer de $30$, tourner de $90$ ».",
          "**Étape 2** : Ce motif doit être exécuté $2$ fois pour fermer le rectangle.",
          "**Étape 3** : Script : « répéter $2$ fois [avancer de $80$ ; tourner de $90$ ; avancer de $30$ ; tourner de $90$] »."
        ]
      }
    ],
    "traps": [
      "⚠️ L'ordre des instructions compte : « tourner puis avancer » ne donne pas le même trajet que « avancer puis tourner ».",
      "⚠️ Dans une boucle « répéter 4 fois », toutes les instructions à l'intérieur sont exécutées 4 fois, pas seulement la première.",
      "⚠️ Tourner « à droite » dépend de l'orientation du robot : un robot tourné vers le bas qui tourne à droite part vers la gauche de l'écran."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce qu'une séquence d'instructions ?",
        "a": "Une suite d'instructions exécutées les unes après les autres, dans l'ordre."
      },
      {
        "q": "À quoi sert une boucle « répéter » ?",
        "a": "À exécuter plusieurs fois la même séquence d'instructions sans la réécrire."
      },
      {
        "q": "Quel angle utiliser dans « répéter 4 fois [avancer de 50 ; tourner de … degrés] » pour tracer un carré ?",
        "a": "$90$ degrés."
      },
      {
        "q": "Un script répète $5$ fois « avancer de $20$ pas ». Quelle distance parcourt le lutin ?",
        "a": "$5 \\times 20 = 100$ pas."
      },
      {
        "q": "Quel bloc démarre souvent un script Scratch ?",
        "a": "« Quand le drapeau vert est cliqué »."
      }
    ]
  },
  "6M1": {
    "title": "6M1 : Longueurs et périmètres (polygones et cercle)",
    "domain": "Grandeurs et Mesures",
    "objectives": [
      "Convertir des longueurs entre le kilomètre et le millimètre à l’aide du tableau de conversion.",
      "Calculer le périmètre d’un polygone en additionnant les longueurs de ses côtés.",
      "Connaître et utiliser les formules du périmètre du carré et du rectangle.",
      "Savoir que le périmètre d’un cercle est proportionnel à son diamètre et utiliser la formule $P = \\pi \\times d$.",
      "Calculer le périmètre de figures composées (demi-disques, assemblages)."
    ],
    "keyPoints": [
      {
        "title": "1. Unités de longueur et conversions",
        "content": "L'unité principale de longueur est le **mètre** (m). Chaque unité vaut **10 fois** l'unité située juste à sa droite :\n$$1\\text{ km} = 10\\text{ hm} = 100\\text{ dam} = 1\\,000\\text{ m} \\quad ; \\quad 1\\text{ m} = 10\\text{ dm} = 100\\text{ cm} = 1\\,000\\text{ mm}$$\n• Pour passer à une unité **plus petite**, on multiplie (par 10, 100, 1 000…).\n• Pour passer à une unité **plus grande**, on divise.\nExemples : $3{,}7\\text{ km} = 3\\,700\\text{ m}$ ; $245\\text{ mm} = 24{,}5\\text{ cm}$."
      },
      {
        "title": "2. Périmètre d’un polygone",
        "content": "Le **périmètre** d'une figure est la **longueur de son contour**. Pour un polygone, on additionne les longueurs de tous ses côtés, **exprimées dans la même unité**.\n• Carré de côté $c$ : $P = 4 \\times c$.\n• Rectangle de longueur $L$ et de largeur $\\ell$ : $P = 2 \\times (L + \\ell) = 2 \\times L + 2 \\times \\ell$.\nExemple : un rectangle de $7\\text{ cm}$ sur $4{,}5\\text{ cm}$ a pour périmètre $2 \\times (7 + 4{,}5) = 2 \\times 11{,}5 = 23\\text{ cm}$."
      },
      {
        "title": "3. Périmètre d’un cercle",
        "content": "Le périmètre d'un cercle (aussi appelé **longueur du cercle**) est **proportionnel à son diamètre** : le coefficient de proportionnalité est le nombre $\\pi$ (« pi »), qui vaut environ $3{,}14$.\n$$P = \\pi \\times d = 2 \\times \\pi \\times r$$\noù $d$ est le diamètre et $r$ le rayon ($d = 2 \\times r$).\nExemple : un cercle de rayon $5\\text{ cm}$ a un diamètre de $10\\text{ cm}$, donc $P = \\pi \\times 10 \\approx 31{,}4\\text{ cm}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Convertir une longueur avec le tableau",
        "example": "Convertir $4{,}25\\text{ m}$ en $\\text{cm}$.",
        "steps": [
          "**Étape 1** : On place le chiffre des unités (4) dans la colonne du mètre, puis les autres chiffres à sa droite : 2 en dm, 5 en cm.",
          "**Étape 2** : On déplace la virgule juste après la colonne de l'unité demandée (cm).",
          "**Étape 3** : On lit le résultat : $4{,}25\\text{ m} = 425\\text{ cm}$ (on a multiplié par 100)."
        ]
      },
      {
        "title": "Méthode : Calculer le périmètre d’une figure composée",
        "example": "Une figure est formée d'un carré de côté $6\\text{ cm}$ surmonté d'un demi-cercle de diamètre $6\\text{ cm}$. Calculer son périmètre (on prendra $\\pi \\approx 3{,}14$).",
        "steps": [
          "**Étape 1** : On repère les morceaux du contour : 3 côtés du carré (le 4e est à l'intérieur) et un demi-cercle.",
          "**Étape 2** : Côtés : $3 \\times 6 = 18\\text{ cm}$. Demi-cercle : $\\pi \\times 6 \\div 2 \\approx 3{,}14 \\times 3 = 9{,}42\\text{ cm}$.",
          "**Étape 3** : On additionne : $P \\approx 18 + 9{,}42 = 27{,}42\\text{ cm}$."
        ]
      }
    ],
    "traps": [
      "⚠️ On n'additionne jamais des longueurs exprimées dans des unités différentes : $2\\text{ m} + 35\\text{ cm}$ ne fait pas $37$, mais $200 + 35 = 235\\text{ cm}$.",
      "⚠️ Dans la formule $P = \\pi \\times d$, il faut le **diamètre** : si l'énoncé donne le rayon, on le double d'abord.",
      "⚠️ Dans une figure composée, les segments situés **à l'intérieur** de la figure ne font pas partie du contour."
    ],
    "flashcards": [
      {
        "q": "Combien de mètres dans $1\\text{ km}$ ?",
        "a": "$1\\text{ km} = 1\\,000\\text{ m}$."
      },
      {
        "q": "Convertir $58\\text{ mm}$ en $\\text{cm}$.",
        "a": "$58\\text{ mm} = 5{,}8\\text{ cm}$ (on divise par 10)."
      },
      {
        "q": "Quelle est la formule du périmètre d’un rectangle ?",
        "a": "$P = 2 \\times (L + \\ell)$, avec $L$ la longueur et $\\ell$ la largeur."
      },
      {
        "q": "Quelle est la formule du périmètre d’un cercle ?",
        "a": "$P = \\pi \\times d$ (ou $2 \\times \\pi \\times r$), avec $\\pi \\approx 3{,}14$."
      },
      {
        "q": "Quel est le périmètre d'un carré de côté $2{,}5\\text{ cm}$ ?",
        "a": "$P = 4 \\times 2{,}5 = 10\\text{ cm}$."
      }
    ]
  },
  "6M2": {
    "title": "6M2 : Aires : unités, carré, rectangle et figures composées",
    "domain": "Grandeurs et Mesures",
    "objectives": [
      "Distinguer l’aire d’une surface et le périmètre de son contour.",
      "Déterminer une aire par comptage de carreaux unités.",
      "Connaître et utiliser les formules de l’aire du carré et du rectangle.",
      "Convertir des unités d’aire (km², m², dm², cm², mm²).",
      "Calculer l’aire d’une figure composée par découpage ou par différence."
    ],
    "keyPoints": [
      {
        "title": "1. Aire et périmètre : deux grandeurs différentes",
        "content": "• L'**aire** mesure la **surface** occupée par une figure (ce qu'on « peint »).\n• Le **périmètre** mesure la **longueur du contour** (ce qu'on « entoure »).\nDeux figures peuvent avoir la même aire et des périmètres différents, et inversement. Par exemple, un rectangle $4 \\times 1$ et un carré $2 \\times 2$ ont tous deux une aire de $4$ carreaux, mais des périmètres de $10$ et $8$ unités."
      },
      {
        "title": "2. Formules du carré et du rectangle",
        "content": "• Carré de côté $c$ : $\\mathcal{A} = c \\times c$.\n• Rectangle de longueur $L$ et de largeur $\\ell$ : $\\mathcal{A} = L \\times \\ell$.\nLes deux longueurs doivent être dans **la même unité** ; l'aire s'exprime alors dans l'unité « carrée » correspondante.\nExemple : un rectangle de $8\\text{ cm}$ sur $3\\text{ cm}$ a une aire de $8 \\times 3 = 24\\text{ cm}^2$."
      },
      {
        "title": "3. Unités d’aire et conversions",
        "content": "$1\\text{ cm}^2$ est l'aire d'un carré de $1\\text{ cm}$ de côté. Comme $1\\text{ dm} = 10\\text{ cm}$, un carré de $1\\text{ dm}$ de côté contient $10 \\times 10 = 100$ carrés de $1\\text{ cm}^2$ :\n$$1\\text{ m}^2 = 100\\text{ dm}^2 = 10\\,000\\text{ cm}^2 \\quad ; \\quad 1\\text{ cm}^2 = 100\\text{ mm}^2$$\nEntre deux unités d'aire voisines, on multiplie ou on divise **par 100** (et non par 10)."
      },
      {
        "title": "4. Figures composées",
        "content": "Pour une figure complexe, on la **découpe** en rectangles et carrés dont on additionne les aires, ou on calcule l'aire d'un grand rectangle **moins** celle de la partie retirée.\nUn **triangle rectangle** dont les côtés de l'angle droit mesurent $a$ et $b$ est la moitié d'un rectangle : son aire vaut $\\frac{a \\times b}{2}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer l’aire d’un rectangle avec conversion",
        "example": "Calculer l'aire d'un rectangle de longueur $1{,}2\\text{ m}$ et de largeur $45\\text{ cm}$, en $\\text{cm}^2$.",
        "steps": [
          "**Étape 1** : On convertit dans la même unité : $1{,}2\\text{ m} = 120\\text{ cm}$.",
          "**Étape 2** : On applique la formule : $\\mathcal{A} = 120 \\times 45$.",
          "**Étape 3** : $\\mathcal{A} = 5\\,400\\text{ cm}^2$."
        ]
      },
      {
        "title": "Méthode : Aire d’une figure en L par découpage",
        "example": "Une figure en forme de L est un rectangle de $10\\text{ m}$ sur $6\\text{ m}$ dont on a retiré un coin rectangulaire de $4\\text{ m}$ sur $3\\text{ m}$. Calculer son aire.",
        "steps": [
          "**Étape 1** : Aire du grand rectangle : $10 \\times 6 = 60\\text{ m}^2$.",
          "**Étape 2** : Aire du coin retiré : $4 \\times 3 = 12\\text{ m}^2$.",
          "**Étape 3** : Aire de la figure : $60 - 12 = 48\\text{ m}^2$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre aire et périmètre : pour un rectangle de $5\\text{ cm}$ sur $3\\text{ cm}$, l'aire vaut $15\\text{ cm}^2$ alors que le périmètre vaut $16\\text{ cm}$.",
      "⚠️ $1\\text{ m}^2$ ne vaut pas $100\\text{ cm}^2$ mais $10\\,000\\text{ cm}^2$ : entre deux unités d'aire voisines, le rapport est de 100.",
      "⚠️ Une aire s'écrit avec une unité « au carré » ($\\text{cm}^2$, $\\text{m}^2$…) ; un périmètre avec une unité de longueur."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule de l’aire d’un rectangle ?",
        "a": "$\\mathcal{A} = L \\times \\ell$ (longueur fois largeur)."
      },
      {
        "q": "Combien de $\\text{cm}^2$ dans $1\\text{ dm}^2$ ?",
        "a": "$1\\text{ dm}^2 = 100\\text{ cm}^2$ (un carré de 10 cm sur 10 cm)."
      },
      {
        "q": "Aire d'un carré de côté $7\\text{ cm}$ ?",
        "a": "$7 \\times 7 = 49\\text{ cm}^2$."
      },
      {
        "q": "Deux figures de même aire ont-elles forcément le même périmètre ?",
        "a": "**Non.** Exemple : un rectangle $4 \\times 1$ et un carré $2 \\times 2$ ont la même aire ($4$) mais des périmètres différents ($10$ et $8$)."
      },
      {
        "q": "Aire d'un triangle rectangle dont les côtés de l'angle droit mesurent $6\\text{ cm}$ et $4\\text{ cm}$ ?",
        "a": "C'est la moitié d'un rectangle : $\\frac{6 \\times 4}{2} = 12\\text{ cm}^2$."
      }
    ]
  },
  "6M3": {
    "title": "6M3 : Volumes : centimètre cube, pavés et cubes",
    "domain": "Grandeurs et Mesures",
    "objectives": [
      "Déterminer un volume en dénombrant des cubes unités.",
      "Connaître le centimètre cube et comparer des volumes.",
      "Calculer le volume d’un pavé droit et d’un cube.",
      "Relier unités de volume et de contenance : $1\\text{ dm}^3 = 1\\text{ L}$."
    ],
    "keyPoints": [
      {
        "title": "1. Mesurer un volume avec des cubes unités",
        "content": "Le **volume** d'un solide mesure la place qu'il occupe dans l'espace. On le mesure en comptant combien de **cubes unités** il contient.\nLe **centimètre cube** ($\\text{cm}^3$) est le volume d'un cube de $1\\text{ cm}$ d'arête.\nExemple : un empilement de 3 couches de $4 \\times 2$ petits cubes de $1\\text{ cm}^3$ a un volume de $3 \\times 8 = 24\\text{ cm}^3$."
      },
      {
        "title": "2. Volume d’un pavé droit et d’un cube",
        "content": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 300 190\" width=\"300\" height=\"190\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n<polygon points=\"40,70 200,70 200,170 40,170\" fill=\"rgba(16,185,129,0.10)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<polygon points=\"40,70 90,30 250,30 200,70\" fill=\"rgba(16,185,129,0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<polygon points=\"200,70 250,30 250,130 200,170\" fill=\"rgba(16,185,129,0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"40\" y1=\"170\" x2=\"90\" y2=\"130\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<line x1=\"90\" y1=\"130\" x2=\"250\" y2=\"130\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<line x1=\"90\" y1=\"130\" x2=\"90\" y2=\"30\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<text x=\"120\" y=\"186\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Longueur L</text>\n<text x=\"262\" y=\"160\" text-anchor=\"start\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">largeur ℓ</text>\n<text x=\"10\" y=\"125\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">h</text>\n</svg>\n</div>\n• Pavé droit (parallélépipède rectangle) de longueur $L$, largeur $\\ell$ et hauteur $h$ : $\\mathcal{V} = L \\times \\ell \\times h$.\n• Cube d'arête $a$ : $\\mathcal{V} = a \\times a \\times a$.\nLes trois dimensions doivent être exprimées dans **la même unité**.\nExemple : un pavé de $5\\text{ cm}$, $3\\text{ cm}$ et $2\\text{ cm}$ a un volume de $5 \\times 3 \\times 2 = 30\\text{ cm}^3$."
      },
      {
        "title": "3. Volume et contenance",
        "content": "La **contenance** d'un récipient est le volume de liquide qu'il peut contenir. On retient :\n$$1\\text{ dm}^3 = 1\\text{ L} = 1\\,000\\text{ cm}^3 \\quad ; \\quad 1\\text{ cm}^3 = 1\\text{ mL}$$\nExemple : une boîte de $20\\text{ cm} \\times 10\\text{ cm} \\times 5\\text{ cm}$ a un volume de $1\\,000\\text{ cm}^3$, soit $1\\text{ L}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Compter les cubes d’un pavé couche par couche",
        "example": "Un pavé est formé de petits cubes : 6 cubes en longueur, 4 en largeur et 3 étages. Combien de cubes contient-il ?",
        "steps": [
          "**Étape 1** : On compte les cubes d'une couche : $6 \\times 4 = 24$ cubes.",
          "**Étape 2** : On multiplie par le nombre de couches : $24 \\times 3 = 72$ cubes.",
          "**Étape 3** : Si chaque cube mesure $1\\text{ cm}^3$, le volume est $72\\text{ cm}^3$."
        ]
      },
      {
        "title": "Méthode : Calculer une contenance en litres",
        "example": "Un aquarium a la forme d'un pavé de $50\\text{ cm}$ sur $30\\text{ cm}$ et de $40\\text{ cm}$ de haut. Quelle est sa contenance en litres ?",
        "steps": [
          "**Étape 1** : Volume : $50 \\times 30 \\times 40 = 60\\,000\\text{ cm}^3$.",
          "**Étape 2** : Comme $1\\text{ L} = 1\\,000\\text{ cm}^3$, on divise par $1\\,000$.",
          "**Étape 3** : Contenance : $60\\text{ L}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre volume et aire : le volume utilise **trois** dimensions et s'exprime en unités « cube » ($\\text{cm}^3$).",
      "⚠️ Le volume d'un cube d'arête $3\\text{ cm}$ n'est pas $3 \\times 3 = 9$, mais $3 \\times 3 \\times 3 = 27\\text{ cm}^3$.",
      "⚠️ Quand on compte des cubes sur un dessin, il ne faut pas oublier les cubes **cachés** à l'arrière ou en dessous."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule du volume d’un pavé droit ?",
        "a": "$\\mathcal{V} = L \\times \\ell \\times h$."
      },
      {
        "q": "Volume d'un cube d'arête $4\\text{ cm}$ ?",
        "a": "$4 \\times 4 \\times 4 = 64\\text{ cm}^3$."
      },
      {
        "q": "Combien de $\\text{cm}^3$ dans $1\\text{ L}$ ?",
        "a": "$1\\text{ L} = 1\\text{ dm}^3 = 1\\,000\\text{ cm}^3$."
      },
      {
        "q": "À quoi correspond $1\\text{ cm}^3$ en contenance ?",
        "a": "$1\\text{ cm}^3 = 1\\text{ mL}$."
      },
      {
        "q": "Qu’est-ce qu’un centimètre cube ?",
        "a": "Le volume d'un cube de $1\\text{ cm}$ d'arête."
      }
    ]
  },
  "6M4": {
    "title": "6M4 : Repérage dans le temps et durées",
    "domain": "Grandeurs et Mesures",
    "objectives": [
      "Distinguer un horaire (un instant) et une durée (un intervalle de temps).",
      "Connaître les relations entre unités de durée : 1 h = 60 min, 1 min = 60 s, 1 j = 24 h.",
      "Convertir des durées (heures, minutes, secondes ; écritures décimales simples).",
      "Calculer une durée, un horaire de début ou de fin, et résoudre des problèmes."
    ],
    "keyPoints": [
      {
        "title": "1. Horaire et durée",
        "content": "• Un **horaire** indique un instant : « le film commence à 14 h 35 ».\n• Une **durée** mesure le temps écoulé entre deux instants : « le film dure 1 h 50 min ».\n$$\\text{horaire de fin} = \\text{horaire de début} + \\text{durée}$$"
      },
      {
        "title": "2. Unités de durée : un système en base 60",
        "content": "$$1\\text{ h} = 60\\text{ min} \\quad ; \\quad 1\\text{ min} = 60\\text{ s} \\quad ; \\quad 1\\text{ h} = 3\\,600\\text{ s} \\quad ; \\quad 1\\text{ j} = 24\\text{ h}$$\nLes durées ne suivent **pas** le système décimal : $1{,}5\\text{ h}$ ne vaut pas 1 h 50 min mais **1 h 30 min** (car $0{,}5\\text{ h} = 30\\text{ min}$).\nÀ retenir : $0{,}25\\text{ h} = 15\\text{ min}$ ; $0{,}5\\text{ h} = 30\\text{ min}$ ; $0{,}75\\text{ h} = 45\\text{ min}$."
      },
      {
        "title": "3. Calculer une durée entre deux horaires",
        "content": "On peut **compléter par étapes** jusqu'à l'heure ronde (méthode du « saut ») :\nDe 9 h 40 à 11 h 15 : de 9 h 40 à 10 h → 20 min ; de 10 h à 11 h → 1 h ; de 11 h à 11 h 15 → 15 min.\nTotal : 1 h 35 min.\nOn peut aussi poser une soustraction en séparant heures et minutes, en **convertissant 1 h en 60 min** si nécessaire."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Ajouter une durée à un horaire",
        "example": "Un train part à 15 h 48 et le trajet dure 2 h 35 min. À quelle heure arrive-t-il ?",
        "steps": [
          "**Étape 1** : On additionne séparément heures et minutes : $15 + 2 = 17$ h et $48 + 35 = 83$ min.",
          "**Étape 2** : $83\\text{ min} = 60\\text{ min} + 23\\text{ min} = 1\\text{ h } 23\\text{ min}$.",
          "**Étape 3** : On regroupe : $17\\text{ h} + 1\\text{ h } 23\\text{ min}$, soit une arrivée à **18 h 23**."
        ]
      },
      {
        "title": "Méthode : Convertir une durée en minutes",
        "example": "Convertir 3 h 25 min en minutes.",
        "steps": [
          "**Étape 1** : $3\\text{ h} = 3 \\times 60 = 180\\text{ min}$.",
          "**Étape 2** : On ajoute les minutes restantes : $180 + 25 = 205\\text{ min}$."
        ]
      }
    ],
    "traps": [
      "⚠️ $1{,}2\\text{ h}$ n'est pas égal à 1 h 20 min : $0{,}2\\text{ h} = 0{,}2 \\times 60 = 12\\text{ min}$, donc $1{,}2\\text{ h} = 1\\text{ h } 12\\text{ min}$.",
      "⚠️ Quand le nombre de minutes dépasse 60, il faut le convertir en heures : 2 h 75 min s'écrit 3 h 15 min.",
      "⚠️ Ne pas soustraire les horaires comme des nombres décimaux : de 8 h 50 à 9 h 10, il s'écoule 20 min, et non « 0,60 »."
    ],
    "flashcards": [
      {
        "q": "Combien de secondes dans une heure ?",
        "a": "$1\\text{ h} = 60 \\times 60 = 3\\,600\\text{ s}$."
      },
      {
        "q": "Que vaut un quart d’heure en minutes ?",
        "a": "$15\\text{ min}$ (car $60 \\div 4 = 15$)."
      },
      {
        "q": "Convertir $2{,}5\\text{ h}$ en heures et minutes.",
        "a": "$2{,}5\\text{ h} = 2\\text{ h } 30\\text{ min}$."
      },
      {
        "q": "Quelle durée s’écoule entre 10 h 45 et 12 h 10 ?",
        "a": "15 min (jusqu’à 11 h) + 1 h + 10 min = 1 h 25 min."
      },
      {
        "q": "Combien d’heures dans 3 jours ?",
        "a": "$3 \\times 24 = 72\\text{ h}$."
      }
    ]
  },
  "6G1": {
    "title": "6G1 : Droites, segments, distances, milieu et cercle",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Utiliser les notations : droite $(AB)$, demi-droite $[AB)$, segment $[AB]$, longueur $AB$.",
      "Connaître la définition de la distance entre deux points et du milieu d’un segment.",
      "Reconnaître et tracer des droites perpendiculaires et parallèles.",
      "Connaître le vocabulaire du cercle et du disque : centre, rayon, diamètre, corde.",
      "Savoir que le cercle de centre $O$ et de rayon $r$ est l’ensemble des points situés à la distance $r$ de $O$."
    ],
    "keyPoints": [
      {
        "title": "1. Notations de base",
        "content": "• $(AB)$ : la **droite** passant par $A$ et $B$ (illimitée des deux côtés).\n• $[AB)$ : la **demi-droite** d'origine $A$ passant par $B$.\n• $[AB]$ : le **segment** d'extrémités $A$ et $B$.\n• $AB$ (sans crochets) : la **longueur** du segment $[AB]$, c'est-à-dire la **distance** entre $A$ et $B$.\n• $A \\in (d)$ se lit « le point $A$ appartient à la droite $(d)$ »."
      },
      {
        "title": "2. Milieu d’un segment",
        "content": "Le **milieu** $I$ du segment $[AB]$ est le point qui appartient au segment $[AB]$ et qui est **à égale distance** de $A$ et de $B$ :\n$$I \\in [AB] \\quad \\text{et} \\quad IA = IB = \\frac{AB}{2}$$\nExemple : si $AB = 9\\text{ cm}$ et $I$ est le milieu de $[AB]$, alors $AI = 4{,}5\\text{ cm}$."
      },
      {
        "title": "3. Droites perpendiculaires et parallèles",
        "content": "• Deux droites **perpendiculaires** se coupent en formant un angle droit : on note $(d_1) \\perp (d_2)$.\n• Deux droites **parallèles** ne se coupent jamais (ou sont confondues) : on note $(d_1) \\parallel (d_2)$.\n• Propriété : si deux droites sont perpendiculaires à une même troisième droite, alors elles sont parallèles entre elles."
      },
      {
        "title": "4. Cercle et disque",
        "content": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 300 200\" width=\"300\" height=\"200\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"150\" cy=\"100\" r=\"75\" fill=\"rgba(16,185,129,0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"75\" y1=\"100\" x2=\"225\" y2=\"100\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n<line x1=\"150\" y1=\"100\" x2=\"203\" y2=\"47\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<line x1=\"96\" y1=\"153\" x2=\"204\" y2=\"153\" stroke=\"#d97706\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n<circle cx=\"150\" cy=\"100\" r=\"3.5\" fill=\"var(--text-main, #334155)\"/>\n<text x=\"150\" y=\"120\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n<text x=\"62\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n<text x=\"238\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n<text x=\"212\" y=\"42\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">M</text>\n<text x=\"188\" y=\"72\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">rayon</text>\n<text x=\"110\" y=\"94\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\">diamètre</text>\n<text x=\"150\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#d97706\">corde</text>\n</svg>\n</div>\nLe **cercle** de centre $O$ et de rayon $r$ est l'ensemble de **tous les points situés à la distance $r$** du point $O$. Le **disque** est la surface délimitée par le cercle (intérieur compris).\n• Un **rayon** est un segment qui joint le centre à un point du cercle : $[OM]$.\n• Une **corde** est un segment qui joint deux points du cercle.\n• Un **diamètre** est une corde qui passe par le centre : $[AB]$. Sa longueur vaut le double du rayon : $d = 2 \\times r$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Savoir si un point appartient à un cercle",
        "example": "Le cercle $\\mathcal{C}$ a pour centre $O$ et pour rayon $4\\text{ cm}$. On sait que $OA = 4\\text{ cm}$ et $OB = 3{,}5\\text{ cm}$. Les points $A$ et $B$ sont-ils sur $\\mathcal{C}$ ?",
        "steps": [
          "**Étape 1** : On compare la distance au centre avec le rayon.",
          "**Étape 2** : $OA = 4\\text{ cm}$ = rayon, donc $A$ appartient au cercle.",
          "**Étape 3** : $OB = 3{,}5\\text{ cm} < 4\\text{ cm}$, donc $B$ est à l'intérieur du cercle (dans le disque) mais pas sur le cercle."
        ]
      },
      {
        "title": "Méthode : Utiliser le milieu pour calculer une longueur",
        "example": "$M$ est le milieu de $[EF]$ et $EM = 3{,}7\\text{ cm}$. Calculer $EF$.",
        "steps": [
          "**Étape 1** : Comme $M$ est le milieu, $MF = EM = 3{,}7\\text{ cm}$.",
          "**Étape 2** : $EF = EM + MF = 2 \\times 3{,}7 = 7{,}4\\text{ cm}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre $[AB]$ (un segment, un objet) et $AB$ (sa longueur, un nombre).",
      "⚠️ Un point à égale distance de $A$ et de $B$ n'est pas forcément le milieu de $[AB]$ : il doit aussi appartenir au segment.",
      "⚠️ Le diamètre est le **double** du rayon, et non la moitié."
    ],
    "flashcards": [
      {
        "q": "Que désigne la notation $[AB)$ ?",
        "a": "La demi-droite d'origine $A$ passant par $B$."
      },
      {
        "q": "Quelle est la définition du milieu d’un segment ?",
        "a": "C'est le point du segment situé à égale distance des deux extrémités."
      },
      {
        "q": "Un cercle a un diamètre de $11\\text{ cm}$. Quel est son rayon ?",
        "a": "$11 \\div 2 = 5{,}5\\text{ cm}$."
      },
      {
        "q": "Qu’est-ce qu’une corde d’un cercle ?",
        "a": "Un segment dont les deux extrémités sont des points du cercle."
      },
      {
        "q": "Deux droites perpendiculaires à une même droite sont…",
        "a": "… parallèles entre elles."
      }
    ]
  },
  "6G2": {
    "title": "6G2 : Médiatrice et symétrie axiale",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Connaître la définition de la médiatrice d’un segment.",
      "Connaître et utiliser sa propriété caractéristique (équidistance aux extrémités).",
      "Construire le symétrique d’un point, d’un segment, d’une figure par rapport à une droite.",
      "Utiliser les propriétés de conservation de la symétrie axiale (longueurs, angles, alignement, aires).",
      "Reconnaître les axes de symétrie d’une figure."
    ],
    "keyPoints": [
      {
        "title": "1. Médiatrice d’un segment",
        "content": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 300 210\" width=\"300\" height=\"210\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n<line x1=\"60\" y1=\"120\" x2=\"240\" y2=\"120\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"150\" y1=\"20\" x2=\"150\" y2=\"200\" stroke=\"#059669\" stroke-width=\"2\"/>\n<rect x=\"150\" y=\"108\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#059669\" stroke-width=\"1.5\"/>\n<line x1=\"100\" y1=\"114\" x2=\"106\" y2=\"126\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<line x1=\"194\" y1=\"114\" x2=\"200\" y2=\"126\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<line x1=\"60\" y1=\"120\" x2=\"150\" y2=\"50\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n<line x1=\"240\" y1=\"120\" x2=\"150\" y2=\"50\" stroke=\"#2563eb\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/>\n<circle cx=\"60\" cy=\"120\" r=\"3.5\" fill=\"var(--text-main, #334155)\"/>\n<circle cx=\"240\" cy=\"120\" r=\"3.5\" fill=\"var(--text-main, #334155)\"/>\n<circle cx=\"150\" cy=\"50\" r=\"3.5\" fill=\"#2563eb\"/>\n<text x=\"50\" y=\"140\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n<text x=\"250\" y=\"140\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n<text x=\"140\" y=\"138\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">I</text>\n<text x=\"165\" y=\"46\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">M</text>\n<text x=\"170\" y=\"196\" text-anchor=\"start\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#059669\">(d) médiatrice</text>\n</svg>\n</div>\n**Définition** : la **médiatrice** d'un segment $[AB]$ est la droite qui est **perpendiculaire** à $[AB]$ et qui passe par son **milieu**.\n**Propriété caractéristique** :\n• Si un point $M$ appartient à la médiatrice de $[AB]$, alors $MA = MB$.\n• Réciproquement, si $MA = MB$, alors $M$ appartient à la médiatrice de $[AB]$.\nLa médiatrice est donc l'ensemble des points **équidistants** de $A$ et de $B$."
      },
      {
        "title": "2. Symétrique d’un point par rapport à une droite",
        "content": "Le **symétrique** du point $A$ par rapport à la droite $(d)$ est le point $A'$ tel que $(d)$ soit la **médiatrice** du segment $[AA']$.\n• Si $A$ est sur $(d)$, son symétrique est lui-même.\n• Concrètement : en pliant la feuille le long de $(d)$, $A$ et $A'$ se superposent."
      },
      {
        "title": "3. Propriétés de la symétrie axiale",
        "content": "La symétrie axiale **conserve** :\n• les **longueurs** : le symétrique d'un segment est un segment de même longueur ;\n• les **angles** : le symétrique d'un angle est un angle de même mesure ;\n• l'**alignement** : le symétrique d'une droite est une droite ;\n• les **aires** et les **périmètres** des figures.\nUne droite $(d)$ est un **axe de symétrie** d'une figure si le symétrique de la figure par rapport à $(d)$ est la figure elle-même. Un carré en a 4, un rectangle (non carré) 2, un triangle équilatéral 3, un cercle une infinité."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Construire la médiatrice au compas",
        "example": "Construire la médiatrice du segment $[AB]$ avec une règle et un compas.",
        "steps": [
          "**Étape 1** : On prend un écartement de compas plus grand que la moitié de $AB$.",
          "**Étape 2** : On trace deux arcs de centre $A$ (au-dessus et en dessous du segment), puis deux arcs de même rayon centrés en $B$.",
          "**Étape 3** : Les deux points d'intersection sont équidistants de $A$ et de $B$ : ils sont donc sur la médiatrice. On trace la droite qui les relie."
        ]
      },
      {
        "title": "Méthode : Utiliser la propriété caractéristique",
        "example": "$M$ est sur la médiatrice de $[AB]$ et $MA = 6{,}3\\text{ cm}$. Que vaut $MB$ ?",
        "steps": [
          "**Étape 1** : On cite la propriété : tout point de la médiatrice de $[AB]$ est à égale distance de $A$ et de $B$.",
          "**Étape 2** : Donc $MB = MA = 6{,}3\\text{ cm}$."
        ]
      }
    ],
    "traps": [
      "⚠️ La médiatrice doit être **perpendiculaire** au segment **et** passer par son **milieu** : une seule de ces deux conditions ne suffit pas.",
      "⚠️ Pour construire un symétrique, on ne « recopie » pas la figure à côté de l'axe : on reporte chaque point **perpendiculairement** à l'axe, à la même distance.",
      "⚠️ Un parallélogramme quelconque n'a **aucun** axe de symétrie, même s'il « paraît » régulier."
    ],
    "flashcards": [
      {
        "q": "Définition de la médiatrice d’un segment ?",
        "a": "La droite perpendiculaire au segment qui passe par son milieu."
      },
      {
        "q": "$M$ est sur la médiatrice de $[AB]$. Que peut-on dire de $MA$ et $MB$ ?",
        "a": "$MA = MB$."
      },
      {
        "q": "Que conserve la symétrie axiale ?",
        "a": "Les longueurs, les angles, l’alignement, les aires et les périmètres."
      },
      {
        "q": "Combien d’axes de symétrie possède un carré ?",
        "a": "4 : les deux diagonales et les deux médiatrices des côtés."
      },
      {
        "q": "Combien d’axes de symétrie possède un triangle équilatéral ?",
        "a": "3 (les médiatrices de ses côtés)."
      }
    ]
  },
  "6G3": {
    "title": "6G3 : Angles : vocabulaire, mesure et bissectrice",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Nommer un angle et utiliser le vocabulaire : angle nul, aigu, droit, obtus, plat, plein.",
      "Mesurer un angle avec un rapporteur et construire un angle de mesure donnée.",
      "Reconnaître des angles adjacents, opposés par le sommet, supplémentaires.",
      "Connaître la définition de la bissectrice et l’utiliser pour calculer ou construire."
    ],
    "keyPoints": [
      {
        "title": "1. Nommer et classer les angles",
        "content": "Un angle est formé par deux demi-droites de même origine, le **sommet**. L'angle de sommet $B$ formé par $[BA)$ et $[BC)$ se note $\\widehat{ABC}$ (le sommet est au milieu). On le mesure en **degrés** ($^\\circ$).\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 440 130\" width=\"440\" height=\"130\" style=\"max-width:440px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n<line x1=\"20\" y1=\"100\" x2=\"120\" y2=\"100\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"20\" y1=\"100\" x2=\"95\" y2=\"40\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<path d=\"M 50 100 A 30 30 0 0 0 43 82\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n<text x=\"70\" y=\"122\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">aigu (< 90°)</text>\n<line x1=\"160\" y1=\"100\" x2=\"260\" y2=\"100\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"160\" y1=\"100\" x2=\"160\" y2=\"25\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<rect x=\"160\" y=\"88\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#059669\" stroke-width=\"1.5\"/>\n<text x=\"210\" y=\"122\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">droit (90°)</text>\n<line x1=\"330\" y1=\"100\" x2=\"420\" y2=\"100\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"330\" y1=\"100\" x2=\"280\" y2=\"40\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<path d=\"M 360 100 A 30 30 0 0 0 311 77\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<text x=\"360\" y=\"122\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">obtus (entre 90° et 180°)</text>\n</svg>\n</div>\n• angle **nul** : $0^\\circ$ ; angle **aigu** : entre $0^\\circ$ et $90^\\circ$ ; angle **droit** : $90^\\circ$ ;\n• angle **obtus** : entre $90^\\circ$ et $180^\\circ$ ; angle **plat** : $180^\\circ$ ; angle **plein** : $360^\\circ$."
      },
      {
        "title": "2. Angles adjacents, opposés par le sommet, supplémentaires",
        "content": "• Deux angles sont **adjacents** s'ils ont le même sommet, un côté commun et sont situés de part et d'autre de ce côté.\n• Deux angles **opposés par le sommet** sont formés par deux droites sécantes et se font face : ils ont **la même mesure**.\n• Deux angles sont **supplémentaires** si la somme de leurs mesures vaut $180^\\circ$. Deux angles adjacents formant un angle plat sont supplémentaires.\nExemple : si deux droites se coupent en formant un angle de $65^\\circ$, l'angle adjacent mesure $180^\\circ - 65^\\circ = 115^\\circ$ et l'angle opposé par le sommet mesure $65^\\circ$."
      },
      {
        "title": "3. Bissectrice d’un angle",
        "content": "La **bissectrice** d'un angle est la demi-droite issue du sommet qui partage cet angle en **deux angles adjacents de même mesure**.\nExemple : la bissectrice d'un angle de $84^\\circ$ le partage en deux angles de $42^\\circ$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Mesurer un angle au rapporteur",
        "example": "Mesurer l'angle $\\widehat{xOy}$.",
        "steps": [
          "**Étape 1** : On place le centre du rapporteur sur le sommet $O$.",
          "**Étape 2** : On aligne le « zéro » d'une des graduations sur le côté $[Ox)$.",
          "**Étape 3** : On lit la mesure sur **cette même graduation** à l'endroit où passe $[Oy)$, et on vérifie la cohérence (aigu ou obtus)."
        ]
      },
      {
        "title": "Méthode : Calculer un angle supplémentaire",
        "example": "Les angles $\\widehat{AOB}$ et $\\widehat{BOC}$ sont adjacents et $A$, $O$, $C$ sont alignés. Sachant que $\\widehat{AOB} = 38^\\circ$, calculer $\\widehat{BOC}$.",
        "steps": [
          "**Étape 1** : $A$, $O$, $C$ alignés donc $\\widehat{AOC}$ est un angle plat : $180^\\circ$.",
          "**Étape 2** : Les angles sont supplémentaires : $\\widehat{BOC} = 180^\\circ - 38^\\circ = 142^\\circ$."
        ]
      }
    ],
    "traps": [
      "⚠️ Avec un rapporteur, il faut lire sur la graduation qui part de $0$ sur le côté choisi : sinon on lit $180^\\circ - $ la bonne mesure.",
      "⚠️ Dans la notation $\\widehat{ABC}$, le sommet est la **lettre du milieu** ($B$).",
      "⚠️ La taille des côtés dessinés ne change pas la mesure d'un angle."
    ],
    "flashcards": [
      {
        "q": "Qu’est-ce qu’un angle obtus ?",
        "a": "Un angle dont la mesure est comprise entre $90^\\circ$ et $180^\\circ$."
      },
      {
        "q": "Que vaut un angle plat ?",
        "a": "$180^\\circ$."
      },
      {
        "q": "Deux angles opposés par le sommet ont…",
        "a": "… la même mesure."
      },
      {
        "q": "Quel est le supplémentaire d'un angle de $72^\\circ$ ?",
        "a": "$180^\\circ - 72^\\circ = 108^\\circ$."
      },
      {
        "q": "Définition de la bissectrice d’un angle ?",
        "a": "La demi-droite issue du sommet qui partage l’angle en deux angles adjacents de même mesure."
      }
    ]
  },
  "6G4": {
    "title": "6G4 : Triangles : constructions, triangles particuliers et somme des angles",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Construire un triangle connaissant trois longueurs, ou deux longueurs et un angle, ou une longueur et deux angles.",
      "Connaître les triangles particuliers (rectangle, isocèle, équilatéral) et leurs propriétés sur les angles.",
      "Connaître et utiliser la somme des angles d’un triangle : $180^\\circ$.",
      "Savoir que les trois médiatrices d’un triangle sont concourantes et construire le cercle circonscrit."
    ],
    "keyPoints": [
      {
        "title": "1. Triangles particuliers",
        "content": "• Triangle **rectangle** : il a un angle droit. Ses deux autres angles sont aigus et leur somme vaut $90^\\circ$.\n• Triangle **isocèle** : il a deux côtés de même longueur. Ses deux **angles à la base** ont la même mesure (et réciproquement).\n• Triangle **équilatéral** : ses trois côtés ont la même longueur ; ses trois angles mesurent chacun $60^\\circ$."
      },
      {
        "title": "2. Somme des angles d’un triangle",
        "content": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 300 190\" width=\"300\" height=\"190\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n<polygon points=\"40,160 260,160 110,40\" fill=\"rgba(59,130,246,0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<path d=\"M 72 160 A 32 32 0 0 0 57 131\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n<path d=\"M 228 160 A 32 32 0 0 1 233 145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<path d=\"M 97 62 A 25 25 0 0 0 127 59\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2\"/>\n<text x=\"28\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n<text x=\"272\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n<text x=\"110\" y=\"30\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n<text x=\"150\" y=\"182\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#7c3aed\">Â + B̂ + Ĉ = 180°</text>\n</svg>\n</div>\nDans **tout** triangle, la somme des mesures des trois angles vaut $180^\\circ$ :\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$$\nExemple : si $\\widehat{A} = 50^\\circ$ et $\\widehat{B} = 70^\\circ$, alors $\\widehat{C} = 180^\\circ - (50^\\circ + 70^\\circ) = 60^\\circ$."
      },
      {
        "title": "3. Construire un triangle",
        "content": "• **Trois longueurs** : on trace un côté, puis deux arcs de cercle (compas) centrés à ses extrémités ; leur intersection donne le troisième sommet.\n• **Inégalité triangulaire** : un triangle est constructible seulement si la plus grande longueur est **strictement inférieure** à la somme des deux autres. Avec $3\\text{ cm}$, $4\\text{ cm}$ et $8\\text{ cm}$ : $3 + 4 = 7 < 8$, impossible.\n• **Un côté et deux angles** : on trace le côté puis les deux angles au rapporteur à ses extrémités."
      },
      {
        "title": "4. Médiatrices et cercle circonscrit",
        "content": "Les trois médiatrices des côtés d'un triangle sont **concourantes** (elles se coupent en un même point $O$).\nCe point est à égale distance des trois sommets : $OA = OB = OC$. C'est le centre du **cercle circonscrit** au triangle, qui passe par les trois sommets."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un angle dans un triangle isocèle",
        "example": "$ABC$ est isocèle en $A$ et $\\widehat{BAC} = 40^\\circ$. Calculer $\\widehat{ABC}$.",
        "steps": [
          "**Étape 1** : Les angles à la base $\\widehat{ABC}$ et $\\widehat{ACB}$ sont égaux.",
          "**Étape 2** : Leur somme vaut $180^\\circ - 40^\\circ = 140^\\circ$.",
          "**Étape 3** : Donc $\\widehat{ABC} = 140^\\circ \\div 2 = 70^\\circ$."
        ]
      },
      {
        "title": "Méthode : Construire le cercle circonscrit",
        "example": "Construire le cercle passant par les trois sommets du triangle $ABC$.",
        "steps": [
          "**Étape 1** : On construit la médiatrice de $[AB]$ puis celle de $[BC]$.",
          "**Étape 2** : Elles se coupent en $O$, centre du cercle circonscrit (la troisième médiatrice passe aussi par $O$).",
          "**Étape 3** : On trace le cercle de centre $O$ et de rayon $OA$ : il passe par $A$, $B$ et $C$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un triangle isocèle, les angles égaux sont ceux **à la base**, pas l'angle au sommet principal.",
      "⚠️ La somme des angles vaut $180^\\circ$ pour **tous** les triangles, quelle que soit leur taille.",
      "⚠️ Si la plus grande longueur est égale à la somme des deux autres, les trois points sont **alignés** : il n'y a pas de vrai triangle."
    ],
    "flashcards": [
      {
        "q": "Quelle est la somme des angles d’un triangle ?",
        "a": "$180^\\circ$."
      },
      {
        "q": "Combien mesure chaque angle d’un triangle équilatéral ?",
        "a": "$60^\\circ$ (car $180 \\div 3 = 60$)."
      },
      {
        "q": "Que sait-on des angles à la base d’un triangle isocèle ?",
        "a": "Ils ont la même mesure."
      },
      {
        "q": "Peut-on construire un triangle de côtés $2\\text{ cm}$, $3\\text{ cm}$ et $6\\text{ cm}$ ?",
        "a": "Non, car $2 + 3 = 5 < 6$."
      },
      {
        "q": "Quel est le centre du cercle circonscrit à un triangle ?",
        "a": "Le point de concours des trois médiatrices de ses côtés."
      }
    ]
  },
  "6G5": {
    "title": "6G5 : Vision dans l’espace : assemblages de cubes et solides",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Dénombrer les cubes d’un assemblage, y compris les cubes cachés.",
      "Associer un assemblage de cubes à ses vues de dessus, de face et de côté.",
      "Reconnaître et décrire le cube et le pavé droit : faces, arêtes, sommets.",
      "Reconnaître un patron de cube ou de pavé droit."
    ],
    "keyPoints": [
      {
        "title": "1. Cube et pavé droit",
        "content": "Un **pavé droit** (ou parallélépipède rectangle) a **6 faces** rectangulaires, **12 arêtes** et **8 sommets**. Les faces opposées sont superposables.\nUn **cube** est un pavé droit particulier dont les 6 faces sont des **carrés** identiques : toutes ses arêtes ont la même longueur.\nEn perspective cavalière, les arêtes cachées sont dessinées **en pointillés**."
      },
      {
        "title": "2. Assemblages de cubes",
        "content": "Pour dénombrer les cubes d'un assemblage, on procède **méthodiquement** : étage par étage, ou colonne par colonne, sans oublier les cubes cachés qui soutiennent les cubes visibles.\n• Un assemblage « plein » de $a$ cubes en longueur, $b$ en largeur et $c$ étages contient $a \\times b \\times c$ cubes.\n• Pour compléter un assemblage en un grand cube ou un pavé, on calcule le nombre total de cubes nécessaires puis on retire ceux déjà présents."
      },
      {
        "title": "3. Vues d’un assemblage",
        "content": "• La **vue de dessus** montre ce que l'on voit en regardant d'en haut : un carré par colonne occupée.\n• La **vue de face** et la **vue de côté** montrent la hauteur maximale de chaque rangée.\nPlusieurs assemblages différents peuvent avoir la même vue de dessus : il faut souvent combiner plusieurs vues."
      },
      {
        "title": "4. Patrons",
        "content": "Un **patron** d'un solide est une figure plane qui, après pliage, permet de reconstituer le solide sans superposition.\nUn patron de cube est formé de **6 carrés** ; il existe 11 patrons de cube différents. Une « croix » de 6 carrés en est un exemple ; une ligne de 6 carrés n'en est pas un."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Compter les cubes par colonnes",
        "example": "Sur une vue de dessus, on indique dans chaque case le nombre de cubes empilés : 3, 2, 1 sur la première rangée et 2, 1, 1 sur la seconde. Combien de cubes ?",
        "steps": [
          "**Étape 1** : Chaque nombre représente une colonne de cubes empilés.",
          "**Étape 2** : On additionne : $3 + 2 + 1 + 2 + 1 + 1 = 10$ cubes."
        ]
      },
      {
        "title": "Méthode : Compléter un assemblage en cube",
        "example": "Un assemblage contient 19 petits cubes. Combien faut-il en ajouter pour obtenir un grand cube de 3 cubes d’arête ?",
        "steps": [
          "**Étape 1** : Le grand cube contient $3 \\times 3 \\times 3 = 27$ petits cubes.",
          "**Étape 2** : Il manque $27 - 19 = 8$ cubes."
        ]
      }
    ],
    "traps": [
      "⚠️ Sur un dessin en perspective, des cubes peuvent être **cachés** : un cube posé en hauteur repose forcément sur un autre cube.",
      "⚠️ Un cube a **12** arêtes, et non 6 (6 est le nombre de faces).",
      "⚠️ Six carrés assemblés ne forment pas toujours un patron de cube : certaines faces se superposeraient au pliage."
    ],
    "flashcards": [
      {
        "q": "Combien un cube a-t-il de faces, d’arêtes et de sommets ?",
        "a": "6 faces, 12 arêtes, 8 sommets."
      },
      {
        "q": "Comment dessine-t-on les arêtes cachées en perspective cavalière ?",
        "a": "En pointillés."
      },
      {
        "q": "Combien de petits cubes forment un grand cube de 4 cubes d’arête ?",
        "a": "$4 \\times 4 \\times 4 = 64$."
      },
      {
        "q": "Quelle est la forme des faces d’un pavé droit ?",
        "a": "Des rectangles (des carrés dans le cas du cube)."
      },
      {
        "q": "Qu’est-ce qu’un patron d’un solide ?",
        "a": "Une figure plane qui, une fois pliée, permet de fabriquer le solide."
      }
    ]
  }
};

window.MATHS_EXERCISES_6E = {
  "6N1": [
    {
      "id": "6N1-1", "chapterId": "6N1", "tier": 1,
      "title": "Chiffre des centièmes",
      "statement": "Quel est le chiffre des centièmes dans le nombre $604{,}185$ ?",
      "type": "exact", "answer": "8", "placeholder": "Ex : 8",
      "hint1": "Après la virgule : 1er rang = dixièmes, 2e rang = centièmes, 3e rang = millièmes.",
      "hint2": "Les chiffres après la virgule sont $1$, $8$ et $5$.",
      "solution": "Dans $604{,}185$ : $1$ dixième, $8$ centièmes, $5$ millièmes. Le chiffre des centièmes est **8**.",
      "skill": "Chercher"
    },
    {
      "id": "6N1-2", "chapterId": "6N1", "tier": 1,
      "title": "Fraction décimale vers écriture à virgule",
      "statement": "Écrire sous forme décimale :\n$$\\frac{347}{100}$$",
      "type": "exact", "answer": "3,47", "placeholder": "Ex : 3,47",
      "hint1": "Diviser par $100$ fait reculer chaque chiffre de deux rangs.",
      "hint2": "Le chiffre des unités $7$ devient le chiffre des centièmes.",
      "solution": "$$\\frac{347}{100} = 3{,}47$$",
      "skill": "Représenter"
    },
    {
      "id": "6N1-3", "chapterId": "6N1", "tier": 2,
      "title": "Nombre de dizaines",
      "statement": "Combien y a-t-il de dizaines dans le nombre $58\\,326{,}9$ ?",
      "type": "exact", "answer": "5832", "placeholder": "Ex : 5832",
      "hint1": "Attention : on demande le **nombre** de dizaines, pas le **chiffre** des dizaines.",
      "hint2": "On lit tous les chiffres jusqu'au rang des dizaines.",
      "solution": "$58\\,326{,}9 = 5\\,832 \\text{ dizaines} + 6{,}9$. Il y a donc **5 832** dizaines.",
      "skill": "Chercher"
    },
    {
      "id": "6N1-4", "chapterId": "6N1", "tier": 3,
      "title": "Pourcentage et écriture décimale",
      "statement": "Parmi les écritures suivantes, laquelle n'est **pas** égale à $0{,}4$ ?",
      "type": "mcq",
      "options": ["$\\frac{4}{100}$", "$40\\,\\%$", "$\\frac{40}{100}$", "$\\frac{2}{5}$"],
      "correctIndex": 0, "answer": "$\\frac{4}{100}$",
      "hint1": "$0{,}4$ = 4 dixièmes = 40 centièmes.",
      "hint2": "$\\frac{4}{100}$ vaut 4 centièmes.",
      "solution": "$0{,}4 = \\frac{4}{10} = \\frac{40}{100} = 40\\,\\% = \\frac{2}{5}$. En revanche $\\frac{4}{100} = 0{,}04$ : c'est l'intrus.",
      "skill": "Représenter"
    },
    {
      "id": "6N1-5", "chapterId": "6N1", "tier": 4,
      "title": "Défi 5ème : Nombre mystère",
      "statement": "Je suis un nombre décimal. Mon chiffre des dizaines est $4$, mon chiffre des millièmes est $7$, mon chiffre des unités est le double de celui des dizaines, je n'ai ni dixièmes ni centièmes et je suis compris entre $40$ et $50$.\n**Qui suis-je ?**",
      "type": "exact", "answer": "48,007", "placeholder": "Ex : 48,007",
      "hint1": "Le chiffre des unités vaut $2 \\times 4$.",
      "hint2": "Pense aux zéros aux rangs des dixièmes et des centièmes.",
      "solution": "Dizaines : $4$ ; unités : $8$ ; dixièmes : $0$ ; centièmes : $0$ ; millièmes : $7$. Le nombre est **48,007**, bien compris entre $40$ et $50$.",
      "skill": "Raisonner"
    }
  ],
  "6N2": [
    {
      "id": "6N2-1", "chapterId": "6N2", "tier": 1,
      "title": "Comparer deux décimaux",
      "statement": "Choisir le bon symbole :\n$$7{,}08 \\dots 7{,}8$$",
      "type": "mcq",
      "options": ["$<$", "$>$", "$=$"],
      "correctIndex": 0, "answer": "$<$",
      "hint1": "Les parties entières sont égales : compare les chiffres des dixièmes.",
      "hint2": "$7{,}08$ a $0$ dixième, $7{,}8$ a $8$ dixièmes.",
      "solution": "$7{,}08 = 7{,}08$ et $7{,}8 = 7{,}80$ : $0$ dixième $< 8$ dixièmes, donc $7{,}08 < 7{,}8$.",
      "skill": "Raisonner"
    },
    {
      "id": "6N2-2", "chapterId": "6N2", "tier": 1,
      "title": "Arrondir au dixième",
      "statement": "Donner l'arrondi au dixième de $15{,}362$.",
      "type": "exact", "answer": "15,4", "placeholder": "Ex : 15,4",
      "hint1": "Encadre au dixième : $15{,}3 < 15{,}362 < 15{,}4$.",
      "hint2": "Regarde le chiffre des centièmes : $6$.",
      "solution": "Le chiffre des centièmes est $6 \\ge 5$, donc on arrondit à la valeur supérieure : $15{,}362 \\approx 15{,}4$.",
      "skill": "Calculer"
    },
    {
      "id": "6N2-3", "chapterId": "6N2", "tier": 2,
      "title": "Lire une abscisse",
      "statement": "Sur une demi-droite graduée, l'unité est partagée en $4$ graduations égales. Le point $P$ est placé sur la $3^e$ graduation après le repère $5$.\n**Quelle est l'abscisse de $P$ ?**",
      "type": "exact", "answer": "5,75", "placeholder": "Ex : 5,75",
      "hint1": "Une graduation vaut $1 \\div 4 = 0{,}25$.",
      "hint2": "$3$ graduations valent $3 \\times 0{,}25 = 0{,}75$.",
      "solution": "Une graduation vaut $0{,}25$. Donc $P$ a pour abscisse $5 + 3 \\times 0{,}25 = 5 + 0{,}75 = 5{,}75$.",
      "skill": "Représenter"
    },
    {
      "id": "6N2-4", "chapterId": "6N2", "tier": 3,
      "title": "Le plus petit d'une liste",
      "statement": "Quel est le plus petit nombre de la liste :\n$$3{,}45 \\quad ; \\quad 3{,}405 \\quad ; \\quad 3{,}5 \\quad ; \\quad 3{,}054$$",
      "type": "mcq",
      "options": ["$3{,}054$", "$3{,}405$", "$3{,}45$", "$3{,}5$"],
      "correctIndex": 0, "answer": "$3{,}054$",
      "hint1": "Écris tous les nombres avec trois décimales.",
      "hint2": "$3{,}450$ ; $3{,}405$ ; $3{,}500$ ; $3{,}054$.",
      "solution": "Avec trois décimales : $3{,}054 < 3{,}405 < 3{,}450 < 3{,}500$. Le plus petit est **3,054**.",
      "skill": "Raisonner"
    },
    {
      "id": "6N2-5", "chapterId": "6N2", "tier": 4,
      "title": "Défi 5ème : Chiffre manquant",
      "statement": "On cherche le chiffre $c$ tel que $2{,}c7 > 2{,}86$ et $2{,}c7$ arrondi au dixième soit égal à $3$.\n**Quelle est la valeur de $c$ ?**",
      "type": "exact", "answer": "9", "placeholder": "Ex : 9",
      "hint1": "Pour que $2{,}c7 > 2{,}86$, il faut $c \\ge 8$.",
      "hint2": "Teste $c = 8$ : $2{,}87$ arrondi au dixième donne $2{,}9$.",
      "solution": "$c = 8$ donne $2{,}87 \\approx 2{,}9$ ; $c = 9$ donne $2{,}97 \\approx 3{,}0 = 3$. Donc $c = $ **9**.",
      "skill": "Raisonner"
    }
  ],
  "6N3": [
    {
      "id": "6N3-1", "chapterId": "6N3", "tier": 1,
      "title": "Somme de deux décimaux",
      "statement": "Calculer :\n$$A = 12{,}7 + 5{,}48$$",
      "type": "exact", "answer": "18,18", "placeholder": "Ex : 18,18",
      "hint1": "Aligne les virgules : $12{,}70 + 5{,}48$.",
      "hint2": "$70$ centièmes $+ 48$ centièmes $= 118$ centièmes.",
      "solution": "$$A = 12{,}70 + 5{,}48 = 18{,}18$$",
      "skill": "Calculer"
    },
    {
      "id": "6N3-2", "chapterId": "6N3", "tier": 2,
      "title": "Différence avec des zéros",
      "statement": "Calculer :\n$$B = 20 - 7{,}35$$",
      "type": "exact", "answer": "12,65", "placeholder": "Ex : 12,65",
      "hint1": "Écris $20 = 20{,}00$.",
      "hint2": "Tu peux passer par $7{,}35 + \\dots = 20$.",
      "solution": "$$B = 20{,}00 - 7{,}35 = 12{,}65$$\nVérification : $7{,}35 + 12{,}65 = 20$.",
      "skill": "Calculer"
    },
    {
      "id": "6N3-3", "chapterId": "6N3", "tier": 2,
      "title": "Calcul astucieux",
      "statement": "Calculer astucieusement :\n$$C = 4{,}6 + 9{,}75 + 5{,}4 + 0{,}25$$",
      "type": "exact", "answer": "20", "placeholder": "Ex : 20",
      "hint1": "Regroupe les termes qui donnent des nombres entiers.",
      "hint2": "$4{,}6 + 5{,}4 = 10$ et $9{,}75 + 0{,}25 = 10$.",
      "solution": "$$C = (4{,}6 + 5{,}4) + (9{,}75 + 0{,}25) = 10 + 10 = 20$$",
      "skill": "Calculer"
    },
    {
      "id": "6N3-4", "chapterId": "6N3", "tier": 3,
      "title": "Rendu de monnaie",
      "statement": "Léna achète un livre à $8{,}90$ € et un carnet à $3{,}45$ €. Elle paie avec un billet de $20$ €.\n**Combien la caissière lui rend-elle (en euros) ?**",
      "type": "exact", "answer": "7,65", "placeholder": "Ex : 7,65",
      "hint1": "Calcule d'abord le prix total des achats.",
      "hint2": "$8{,}90 + 3{,}45 = 12{,}35$.",
      "solution": "Total : $8{,}90 + 3{,}45 = 12{,}35$ €. Monnaie : $20 - 12{,}35 = 7{,}65$ €.",
      "skill": "Modéliser"
    },
    {
      "id": "6N3-5", "chapterId": "6N3", "tier": 4,
      "title": "Défi 5ème : Carré magique",
      "statement": "Dans un carré magique, la somme de chaque ligne vaut $6$. Une ligne contient déjà $1{,}75$ et $2{,}6$.\n**Quel nombre manque-t-il sur cette ligne ?**",
      "type": "exact", "answer": "1,65", "placeholder": "Ex : 1,65",
      "hint1": "Calcule la somme des deux nombres connus.",
      "hint2": "$1{,}75 + 2{,}6 = 4{,}35$, puis cherche le complément à $6$.",
      "solution": "$1{,}75 + 2{,}6 = 4{,}35$ et $6 - 4{,}35 = 1{,}65$. Il manque **1,65**.",
      "skill": "Chercher"
    }
  ],
  "6N4": [
    {
      "id": "6N4-1", "chapterId": "6N4", "tier": 1,
      "title": "Multiplier par 100",
      "statement": "Calculer :\n$$4{,}073 \\times 100$$",
      "type": "exact", "answer": "407,3", "placeholder": "Ex : 407,3",
      "hint1": "Multiplier par $100$ fait avancer chaque chiffre de deux rangs.",
      "hint2": "Le chiffre des centièmes $7$ devient le chiffre des unités.",
      "solution": "$$4{,}073 \\times 100 = 407{,}3$$",
      "skill": "Calculer"
    },
    {
      "id": "6N4-2", "chapterId": "6N4", "tier": 1,
      "title": "Multiplier par 0,01",
      "statement": "Calculer :\n$$56 \\times 0{,}01$$",
      "type": "exact", "answer": "0,56", "placeholder": "Ex : 0,56",
      "hint1": "Multiplier par $0{,}01$ revient à diviser par $100$.",
      "hint2": "$56 \\div 100$.",
      "solution": "$$56 \\times 0{,}01 = 56 \\div 100 = 0{,}56$$",
      "skill": "Calculer"
    },
    {
      "id": "6N4-3", "chapterId": "6N4", "tier": 2,
      "title": "Produit de deux décimaux",
      "statement": "Calculer :\n$$2{,}4 \\times 1{,}5$$",
      "type": "exact", "answer": "3,6", "placeholder": "Ex : 3,6",
      "hint1": "Calcule d'abord $24 \\times 15$ sans virgule.",
      "hint2": "$24 \\times 15 = 360$ ; il faut $1 + 1 = 2$ décimales.",
      "solution": "$24 \\times 15 = 360$, donc $2{,}4 \\times 1{,}5 = 3{,}60 = 3{,}6$.",
      "skill": "Calculer"
    },
    {
      "id": "6N4-4", "chapterId": "6N4", "tier": 3,
      "title": "Ordre de grandeur",
      "statement": "Sans poser l'opération, quel est l'ordre de grandeur le plus adapté pour $49{,}7 \\times 2{,}1$ ?",
      "type": "mcq",
      "options": ["$100$", "$10$", "$1\\,000$", "$50$"],
      "correctIndex": 0, "answer": "$100$",
      "hint1": "Arrondis chaque facteur à une valeur simple.",
      "hint2": "$49{,}7 \\approx 50$ et $2{,}1 \\approx 2$.",
      "solution": "$49{,}7 \\times 2{,}1 \\approx 50 \\times 2 = 100$. (Valeur exacte : $104{,}37$.)",
      "skill": "Raisonner"
    },
    {
      "id": "6N4-5", "chapterId": "6N4", "tier": 4,
      "title": "Défi 5ème : Prix au kilogramme",
      "statement": "Des pommes coûtent $2{,}35$ € le kilogramme. Hugo en achète $3{,}2$ kg et paie avec un billet de $10$ €.\n**Combien lui rend-on (en euros) ?**",
      "type": "exact", "answer": "2,48", "placeholder": "Ex : 2,48",
      "hint1": "Calcule le prix payé : $2{,}35 \\times 3{,}2$.",
      "hint2": "$235 \\times 32 = 7\\,520$, avec $3$ décimales : $7{,}52$.",
      "solution": "Prix : $2{,}35 \\times 3{,}2 = 7{,}52$ €. Monnaie rendue : $10 - 7{,}52 = 2{,}48$ €.",
      "skill": "Modéliser"
    }
  ],
  "6N5": [
    {
      "id": "6N5-1", "chapterId": "6N5", "tier": 1,
      "title": "Quotient d'une division euclidienne",
      "statement": "Dans la division euclidienne de $93$ par $7$, quel est le **quotient** ?",
      "type": "exact", "answer": "13", "placeholder": "Ex : 13",
      "hint1": "Cherche le plus grand multiple de $7$ inférieur ou égal à $93$.",
      "hint2": "$7 \\times 13 = 91$ et $7 \\times 14 = 98$.",
      "solution": "$93 = 7 \\times 13 + 2$ avec $2 < 7$ : le quotient est **13** (et le reste $2$).",
      "skill": "Calculer"
    },
    {
      "id": "6N5-2", "chapterId": "6N5", "tier": 1,
      "title": "Critère de divisibilité",
      "statement": "Lequel de ces nombres est divisible par $3$ ?",
      "type": "mcq",
      "options": ["$2\\,451$", "$1\\,024$", "$3\\,103$", "$5\\,330$"],
      "correctIndex": 0, "answer": "$2\\,451$",
      "hint1": "Un nombre est divisible par $3$ si la somme de ses chiffres est un multiple de $3$.",
      "hint2": "Pour $2\\,451$ : $2 + 4 + 5 + 1 = 12$.",
      "solution": "Sommes des chiffres : $12$ ; $7$ ; $7$ ; $11$. Seul $12$ est un multiple de $3$ : **2 451** est divisible par $3$ ($2\\,451 = 3 \\times 817$).",
      "skill": "Raisonner"
    },
    {
      "id": "6N5-3", "chapterId": "6N5", "tier": 2,
      "title": "Problème de groupement",
      "statement": "Un car transporte au maximum $54$ passagers. Combien de cars faut-il au minimum pour transporter $400$ personnes ?",
      "type": "exact", "answer": "8", "placeholder": "Ex : 8",
      "hint1": "Effectue la division euclidienne de $400$ par $54$.",
      "hint2": "$400 = 54 \\times 7 + 22$ : que faire des $22$ personnes restantes ?",
      "solution": "$400 = 54 \\times 7 + 22$. Sept cars ne suffisent pas ($22$ personnes restent) : il faut **8** cars.",
      "skill": "Modéliser"
    },
    {
      "id": "6N5-4", "chapterId": "6N5", "tier": 3,
      "title": "Division décimale",
      "statement": "Quatre amis se partagent équitablement une addition de $58{,}6$ €.\n**Combien chacun paie-t-il (en euros) ?**",
      "type": "exact", "answer": "14,65", "placeholder": "Ex : 14,65",
      "hint1": "Calcule $58{,}6 \\div 4$ en continuant la division après la virgule.",
      "hint2": "$4 \\times 14 = 56$, il reste $2{,}6$ ; $2{,}6 \\div 4 = 0{,}65$.",
      "solution": "$$58{,}6 \\div 4 = 14{,}65$$\nVérification : $4 \\times 14{,}65 = 58{,}6$.",
      "skill": "Calculer"
    },
    {
      "id": "6N5-5", "chapterId": "6N5", "tier": 4,
      "title": "Défi 5ème : Nombre de billes",
      "statement": "Un nombre de billes est compris entre $50$ et $70$. Si on les range par $6$, il en reste $1$. Si on les range par $5$, il n'en reste aucune.\n**Combien y a-t-il de billes ?**",
      "type": "exact", "answer": "55", "placeholder": "Ex : 55",
      "hint1": "Liste les multiples de $5$ entre $50$ et $70$.",
      "hint2": "Parmi $50, 55, 60, 65, 70$, lequel donne un reste de $1$ dans la division par $6$ ?",
      "solution": "Multiples de $5$ : $50, 55, 60, 65, 70$. Divisions par $6$ : $50 = 6 \\times 8 + 2$, $55 = 6 \\times 9 + 1$, $60 = 6 \\times 10$, $65 = 6 \\times 10 + 5$, $70 = 6 \\times 11 + 4$. Il y a **55** billes.",
      "skill": "Raisonner"
    }
  ],
  "6N6": [
    {
      "id": "6N6-1",
      "chapterId": "6N6",
      "tier": 1,
      "title": "La fraction, un quotient",
      "statement": "Quel nombre faut-il écrire à la place des pointillés ?\n$$7 \\times \\ldots = 3$$\n*Donne ta réponse sous forme de fraction (exemple : 2/9).*",
      "type": "exact",
      "answer": "3/7",
      "placeholder": "Ex: 2/9",
      "hint1": "Par définition, $\\frac{a}{b}$ est le nombre qui, multiplié par $b$, donne $a$.",
      "hint2": "Ici $b = 7$ et $a = 3$.",
      "solution": "Le nombre qui, multiplié par $7$, donne $3$ est le quotient de $3$ par $7$ :\n$$7 \\times \\frac{3}{7} = 3$$\nLa réponse est $\\frac{3}{7}$.",
      "skill": "Chercher"
    },
    {
      "id": "6N6-2",
      "chapterId": "6N6",
      "tier": 1,
      "title": "Lire une abscisse fractionnaire",
      "statement": "Sur une demi-droite graduée, l'unité (de $0$ à $1$) est partagée en $5$ parts égales. Le point $A$ est placé sur la $7^{\\text{e}}$ graduation après l'origine.\n**Quelle est l'abscisse du point $A$ ?**",
      "type": "mcq",
      "options": [
        "$\\frac{7}{5}$",
        "$\\frac{5}{7}$",
        "$7{,}5$",
        "$\\frac{1}{7}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{7}{5}$",
      "hint1": "Chaque graduation représente un cinquième de l'unité.",
      "hint2": "On compte $7$ cinquièmes.",
      "solution": "Chaque petite graduation vaut $\\frac{1}{5}$. Le point $A$ est à $7$ graduations de l'origine, donc son abscisse est $\\frac{7}{5}$ (soit $1 + \\frac{2}{5}$, entre $1$ et $2$).",
      "skill": "Représenter"
    },
    {
      "id": "6N6-3",
      "chapterId": "6N6",
      "tier": 2,
      "title": "Compléter une égalité de fractions",
      "statement": "Compléter l'égalité :\n$$\\frac{3}{4} = \\frac{\\ldots}{20}$$",
      "type": "exact",
      "answer": "15",
      "placeholder": "Ex: 12",
      "hint1": "Par quel nombre faut-il multiplier $4$ pour obtenir $20$ ?",
      "hint2": "$4 \\times 5 = 20$ : multiplie aussi le numérateur par $5$.",
      "solution": "$$\\frac{3}{4} = \\frac{3 \\times 5}{4 \\times 5} = \\frac{15}{20}$$\nLe nombre manquant est $15$.",
      "skill": "Calculer"
    },
    {
      "id": "6N6-4",
      "chapterId": "6N6",
      "tier": 3,
      "title": "Comparer deux fractions",
      "statement": "Choisir le symbole qui convient :\n$$\\frac{5}{8} \\ \\ldots \\ \\frac{3}{4}$$",
      "type": "mcq",
      "options": [
        "$<$",
        "$>$",
        "$=$"
      ],
      "correctIndex": 0,
      "answer": "$<$",
      "hint1": "$8$ est un multiple de $4$ : écris $\\frac{3}{4}$ avec le dénominateur $8$.",
      "hint2": "$\\frac{3}{4} = \\frac{6}{8}$.",
      "solution": "$\\frac{3}{4} = \\frac{3 \\times 2}{4 \\times 2} = \\frac{6}{8}$. Comme $5 < 6$, on a $\\frac{5}{8} < \\frac{6}{8}$, donc :\n$$\\frac{5}{8} < \\frac{3}{4}$$",
      "skill": "Raisonner"
    },
    {
      "id": "6N6-5",
      "chapterId": "6N6",
      "tier": 4,
      "title": "Défi 5ème : Le plus grand nombre",
      "statement": "Parmi les nombres suivants, lequel est **le plus grand** ?\n$$\\frac{7}{3} \\qquad 2 + \\frac{1}{6} \\qquad \\frac{5}{2} \\qquad \\frac{11}{6}$$",
      "type": "mcq",
      "options": [
        "$\\frac{5}{2}$",
        "$\\frac{7}{3}$",
        "$2 + \\frac{1}{6}$",
        "$\\frac{11}{6}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{5}{2}$",
      "hint1": "Écris tous les nombres avec le dénominateur $6$.",
      "hint2": "$\\frac{7}{3} = \\frac{14}{6}$, $2 + \\frac{1}{6} = \\frac{13}{6}$, $\\frac{5}{2} = \\frac{15}{6}$.",
      "solution": "Avec le dénominateur commun $6$ :\n$$\\frac{7}{3} = \\frac{14}{6} \\qquad 2 + \\frac{1}{6} = \\frac{12}{6} + \\frac{1}{6} = \\frac{13}{6} \\qquad \\frac{5}{2} = \\frac{15}{6} \\qquad \\frac{11}{6}$$\nOn range : $\\frac{11}{6} < \\frac{13}{6} < \\frac{14}{6} < \\frac{15}{6}$. Le plus grand est $\\frac{5}{2}$.",
      "skill": "Raisonner"
    }
  ],
  "6N7": [
    {
      "id": "6N7-1",
      "chapterId": "6N7",
      "tier": 1,
      "title": "Addition de fractions de même dénominateur",
      "statement": "Calculer et donner le résultat sous forme de fraction :\n$$A = \\frac{2}{9} + \\frac{5}{9}$$",
      "type": "exact",
      "answer": "7/9",
      "placeholder": "Ex: 4/11",
      "hint1": "Les dénominateurs sont égaux : on additionne les numérateurs.",
      "hint2": "$2 + 5 = 7$ et on garde le dénominateur $9$.",
      "solution": "$$A = \\frac{2 + 5}{9} = \\frac{7}{9}$$",
      "skill": "Calculer"
    },
    {
      "id": "6N7-2",
      "chapterId": "6N7",
      "tier": 1,
      "title": "Fraction d'une quantité",
      "statement": "Calculer les $\\frac{2}{5}$ de $35$.",
      "type": "exact",
      "answer": "14",
      "placeholder": "Ex: 12",
      "hint1": "Divise d'abord $35$ par $5$.",
      "hint2": "$35 \\div 5 = 7$, puis multiplie par $2$.",
      "solution": "$$\\frac{2}{5} \\times 35 = (35 \\div 5) \\times 2 = 7 \\times 2 = 14$$",
      "skill": "Calculer"
    },
    {
      "id": "6N7-3",
      "chapterId": "6N7",
      "tier": 2,
      "title": "Multiplier une fraction par un entier",
      "statement": "Calculer et donner le résultat sous forme de fraction **simplifiée** :\n$$B = 4 \\times \\frac{3}{10}$$",
      "type": "exact",
      "answer": "6/5",
      "placeholder": "Ex: 7/4",
      "hint1": "On multiplie seulement le numérateur par l'entier.",
      "hint2": "$4 \\times \\frac{3}{10} = \\frac{12}{10}$, puis simplifie par $2$.",
      "solution": "$$B = \\frac{4 \\times 3}{10} = \\frac{12}{10} = \\frac{12 \\div 2}{10 \\div 2} = \\frac{6}{5}$$",
      "skill": "Calculer"
    },
    {
      "id": "6N7-4",
      "chapterId": "6N7",
      "tier": 3,
      "title": "Addition avec dénominateurs multiples",
      "statement": "Calculer et donner le résultat sous forme de fraction :\n$$C = \\frac{3}{4} + \\frac{5}{8}$$",
      "type": "exact",
      "answer": "11/8",
      "placeholder": "Ex: 9/10",
      "hint1": "$8$ est un multiple de $4$ : écris $\\frac{3}{4}$ en huitièmes.",
      "hint2": "$\\frac{3}{4} = \\frac{6}{8}$.",
      "solution": "$$C = \\frac{3 \\times 2}{4 \\times 2} + \\frac{5}{8} = \\frac{6}{8} + \\frac{5}{8} = \\frac{11}{8}$$",
      "skill": "Calculer"
    },
    {
      "id": "6N7-5",
      "chapterId": "6N7",
      "tier": 4,
      "title": "Défi 5ème : Ce qu'il reste",
      "statement": "Léa dépense $\\frac{1}{3}$ de son argent de poche pour un livre et $\\frac{1}{6}$ pour une place de cinéma.\n**Quelle fraction de son argent de poche lui reste-t-il ?** (fraction simplifiée)",
      "type": "exact",
      "answer": "1/2",
      "placeholder": "Ex: 2/5",
      "hint1": "L'argent de poche entier correspond à $1 = \\frac{6}{6}$.",
      "hint2": "Elle a dépensé $\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6}$.",
      "solution": "Dépenses : $\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6}$.\nReste : $$\\frac{6}{6} - \\frac{3}{6} = \\frac{3}{6} = \\frac{1}{2}$$\nIl lui reste la moitié de son argent de poche.",
      "skill": "Modéliser"
    }
  ],
  "6N8": [
    {
      "id": "6N8-1",
      "chapterId": "6N8",
      "tier": 1,
      "title": "Égalité à trou (addition)",
      "statement": "Quel nombre faut-il écrire à la place des pointillés ?\n$$\\ldots + 38 = 105$$",
      "type": "exact",
      "answer": "67",
      "placeholder": "Ex: 50",
      "hint1": "On cherche le nombre auquel on ajoute 38 pour obtenir 105 : fais une soustraction.",
      "hint2": "Calcule $105 - 38$.",
      "solution": "$105 - 38 = 67$. Vérification : $67 + 38 = 105$.",
      "skill": "Calculer"
    },
    {
      "id": "6N8-2",
      "chapterId": "6N8",
      "tier": 1,
      "title": "Égalité à trou (multiplication)",
      "statement": "Quel nombre faut-il écrire à la place des pointillés ?\n$$7 \\times \\ldots = 84$$",
      "type": "exact",
      "answer": "12",
      "placeholder": "Ex: 9",
      "hint1": "On retrouve un facteur manquant par une division.",
      "hint2": "Calcule $84 \\div 7$.",
      "solution": "$84 \\div 7 = 12$. Vérification : $7 \\times 12 = 84$.",
      "skill": "Calculer"
    },
    {
      "id": "6N8-3",
      "chapterId": "6N8",
      "tier": 2,
      "title": "Appliquer un programme de calcul",
      "statement": "Voici un programme de calcul :\n• Choisir un nombre.\n• Le multiplier par $4$.\n• Soustraire $6$ au résultat.\n**Quel résultat obtient-on en choisissant $9$ ?**",
      "type": "exact",
      "answer": "30",
      "placeholder": "Ex: 25",
      "hint1": "Applique les instructions dans l'ordre.",
      "hint2": "$9 \\times 4 = 36$.",
      "solution": "$$9 \\times 4 = 36 \\qquad 36 - 6 = 30$$\nOn obtient $30$.",
      "skill": "Calculer"
    },
    {
      "id": "6N8-4",
      "chapterId": "6N8",
      "tier": 3,
      "title": "Schéma en barres",
      "statement": "Un stylo et une gomme coûtent ensemble $3{,}60$ €. Le stylo coûte **deux fois plus cher** que la gomme.\n**Quel est le prix de la gomme, en euros ?**",
      "type": "exact",
      "answer": "1,2",
      "placeholder": "Ex: 0,8",
      "hint1": "Fais un schéma : la gomme correspond à une barre, le stylo à deux barres identiques.",
      "hint2": "Il y a $3$ barres égales pour $3{,}60$ €.",
      "solution": "Schéma : gomme = $1$ part, stylo = $2$ parts, soit $3$ parts égales pour $3{,}60$ €.\n$$3{,}60 \\div 3 = 1{,}20$$\nLa gomme coûte $1{,}20$ € (et le stylo $2{,}40$ €).",
      "skill": "Modéliser"
    },
    {
      "id": "6N8-5",
      "chapterId": "6N8",
      "tier": 4,
      "title": "Défi 5ème : Motif évolutif",
      "statement": "On construit un motif avec des carreaux : à l'étape $1$, il y a $5$ carreaux, puis on ajoute $4$ carreaux à chaque nouvelle étape ($5$, $9$, $13$, …).\n**Combien de carreaux y aura-t-il à l'étape $25$ ?**",
      "type": "exact",
      "answer": "101",
      "placeholder": "Ex: 80",
      "hint1": "De l'étape $1$ à l'étape $25$, combien de fois ajoute-t-on $4$ carreaux ?",
      "hint2": "On ajoute $24$ fois $4$ carreaux.",
      "solution": "De l'étape $1$ à l'étape $25$, on ajoute $24$ fois $4$ carreaux :\n$$5 + 24 \\times 4 = 5 + 96 = 101$$\nAutre écriture de la règle : $4 \\times 25 + 1 = 101$.",
      "skill": "Chercher"
    }
  ],
  "6P1": [
    {
      "id": "6P1-1",
      "chapterId": "6P1",
      "tier": 1,
      "title": "Linéarité multiplicative",
      "statement": "$4$ croissants coûtent $3{,}20$ €.\n**Combien coûtent $8$ croissants, en euros ?** (même prix unitaire)",
      "type": "exact",
      "answer": "6,4",
      "placeholder": "Ex: 5,6",
      "hint1": "$8$ croissants, c'est deux fois plus que $4$ croissants.",
      "hint2": "Calcule $2 \\times 3{,}20$.",
      "solution": "$8 = 2 \\times 4$, donc le prix est deux fois plus grand :\n$$2 \\times 3{,}20 = 6{,}40$$\n$8$ croissants coûtent $6{,}40$ €.",
      "skill": "Calculer"
    },
    {
      "id": "6P1-2",
      "chapterId": "6P1",
      "tier": 1,
      "title": "Reconnaître la proportionnalité",
      "statement": "Parmi les situations suivantes, laquelle est une **situation de proportionnalité** ?",
      "type": "mcq",
      "options": [
        "Le prix payé et la masse de pommes achetées à 2,50 € le kilogramme",
        "La taille d'un enfant et son âge",
        "La pointure de chaussures d'une personne et son âge",
        "Le prix d'une course de taxi (prise en charge fixe de 4 €, puis 1 € par km) et la distance parcourue"
      ],
      "correctIndex": 0,
      "answer": "Le prix payé et la masse de pommes achetées à 2,50 € le kilogramme",
      "hint1": "Cherche la situation où l'on multiplie toujours par le même nombre.",
      "hint2": "Pour le taxi, que paie-t-on pour 0 km ?",
      "solution": "Le prix des pommes s'obtient toujours en multipliant la masse par $2{,}50$ : c'est une situation de proportionnalité. Le taxi n'est pas proportionnel à cause des $4$ € de prise en charge ; la taille ou la pointure ne sont pas proportionnelles à l'âge.",
      "skill": "Raisonner"
    },
    {
      "id": "6P1-3",
      "chapterId": "6P1",
      "tier": 2,
      "title": "Retour à l'unité",
      "statement": "$5\\text{ kg}$ de pommes coûtent $12$ €.\n**Combien coûtent $3\\text{ kg}$ de ces pommes, en euros ?**",
      "type": "exact",
      "answer": "7,2",
      "placeholder": "Ex: 4,8",
      "hint1": "Calcule d'abord le prix d'un kilogramme.",
      "hint2": "$12 \\div 5 = 2{,}40$ €.",
      "solution": "Prix d'un kilogramme : $12 \\div 5 = 2{,}40$ €.\nPrix de $3\\text{ kg}$ : $3 \\times 2{,}40 = 7{,}20$ €.",
      "skill": "Calculer"
    },
    {
      "id": "6P1-4",
      "chapterId": "6P1",
      "tier": 3,
      "title": "Appliquer un pourcentage",
      "statement": "Dans un collège, $30\\,\\%$ des $70$ élèves d'un club pratiquent la natation.\n**Combien d'élèves du club pratiquent la natation ?**",
      "type": "exact",
      "answer": "21",
      "placeholder": "Ex: 14",
      "hint1": "$30\\,\\%$ de $70$, c'est $\\frac{30}{100} \\times 70$.",
      "hint2": "$10\\,\\%$ de $70$ vaut $7$ ; donc $30\\,\\%$ vaut trois fois plus.",
      "solution": "$10\\,\\%$ de $70$ $= 7$, donc $30\\,\\%$ de $70$ $= 3 \\times 7 = 21$.\n$$\\frac{30}{100} \\times 70 = \\frac{2\\,100}{100} = 21$$",
      "skill": "Calculer"
    },
    {
      "id": "6P1-5",
      "chapterId": "6P1",
      "tier": 4,
      "title": "Défi 5ème : Lire une carte",
      "statement": "Sur une carte de randonnée à l'échelle $\\frac{1}{25\\,000}$, deux refuges sont séparés de $6\\text{ cm}$.\n**Quelle est la distance réelle entre les deux refuges, en kilomètres ?**",
      "type": "exact",
      "answer": "1,5",
      "placeholder": "Ex: 2,5",
      "hint1": "$1\\text{ cm}$ sur la carte représente $25\\,000\\text{ cm}$ en réalité.",
      "hint2": "$6 \\times 25\\,000 = 150\\,000\\text{ cm}$ ; convertis en km ($1\\text{ km} = 100\\,000\\text{ cm}$).",
      "solution": "$$6 \\times 25\\,000 = 150\\,000\\text{ cm} = 1\\,500\\text{ m} = 1{,}5\\text{ km}$$\nLes refuges sont à $1{,}5\\text{ km}$ l'un de l'autre.",
      "skill": "Modéliser"
    }
  ],
  "6D1": [
    {
      "id": "6D1-1",
      "chapterId": "6D1",
      "tier": 1,
      "title": "Effectif total d'une enquête",
      "statement": "On a demandé aux élèves d'une classe leur sport préféré :\n| Sport | Football | Basket | Natation | Danse |\n|:---:|:---:|:---:|:---:|:---:|\n| Effectif | 9 | 6 | 4 | 7 |\n**Combien d'élèves ont répondu à l'enquête ?**",
      "type": "exact",
      "answer": "26",
      "placeholder": "Ex: 30",
      "hint1": "L'effectif total est la somme de tous les effectifs.",
      "hint2": "Calcule $9 + 6 + 4 + 7$.",
      "solution": "$$9 + 6 + 4 + 7 = 26$$\n$26$ élèves ont répondu.",
      "skill": "Calculer"
    },
    {
      "id": "6D1-2",
      "chapterId": "6D1",
      "tier": 2,
      "title": "Tableau à double entrée",
      "statement": "Voici la répartition des élèves de deux classes :\n| | Demi-pensionnaires | Externes |\n|:---|:---:|:---:|\n| 6e A | 18 | 7 |\n| 6e B | 15 | 11 |\n**Combien y a-t-il d'élèves externes en tout dans les deux classes ?**",
      "type": "exact",
      "answer": "18",
      "placeholder": "Ex: 20",
      "hint1": "Utilise uniquement la colonne « Externes ».",
      "hint2": "Calcule $7 + 11$.",
      "solution": "Colonne « Externes » : $7 + 11 = 18$ élèves externes.",
      "skill": "Représenter"
    },
    {
      "id": "6D1-3",
      "chapterId": "6D1",
      "tier": 2,
      "title": "Filtrer selon un critère",
      "statement": "Voici les temps (en secondes) obtenus au $50\\text{ m}$ :\n| Élève | Ana | Bilal | Chloé | Dylan | Emma | Farid |\n|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n| Temps (s) | 8,4 | 7,9 | 9,1 | 8,0 | 7,6 | 8,7 |\n**Combien d'élèves ont couru en moins de $8{,}5$ secondes ?**",
      "type": "exact",
      "answer": "4",
      "placeholder": "Ex: 3",
      "hint1": "Compare chaque temps à $8{,}5$.",
      "hint2": "Chloé ($9{,}1$) et Farid ($8{,}7$) ne vérifient pas le critère.",
      "solution": "Temps inférieurs à $8{,}5$ s : Ana ($8{,}4$), Bilal ($7{,}9$), Dylan ($8{,}0$) et Emma ($7{,}6$).\n$4$ élèves vérifient le critère.",
      "skill": "Chercher"
    },
    {
      "id": "6D1-4",
      "chapterId": "6D1",
      "tier": 3,
      "title": "Lire un diagramme en barres",
      "statement": "Le diagramme ci-dessous indique le nombre de livres empruntés au CDI chaque jour d'une semaine.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.85rem auto;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 320 215\" width=\"320\" height=\"215\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"190\" x2=\"310\" y2=\"190\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"194\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">0</text><line x1=\"40\" y1=\"166\" x2=\"310\" y2=\"166\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">3</text><line x1=\"40\" y1=\"142\" x2=\"310\" y2=\"142\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"146\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">6</text><line x1=\"40\" y1=\"118\" x2=\"310\" y2=\"118\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"122\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">9</text><line x1=\"40\" y1=\"94\" x2=\"310\" y2=\"94\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"98\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">12</text><line x1=\"40\" y1=\"70\" x2=\"310\" y2=\"70\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"74\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">15</text><line x1=\"40\" y1=\"46\" x2=\"310\" y2=\"46\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"50\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">18</text><line x1=\"40\" y1=\"22\" x2=\"310\" y2=\"22\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"26\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">21</text><rect x=\"58\" y=\"94\" width=\"34\" height=\"96\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1\"/><text x=\"75\" y=\"207\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">Lun.</text><rect x=\"110\" y=\"46\" width=\"34\" height=\"144\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1\"/><text x=\"127\" y=\"207\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">Mar.</text><rect x=\"162\" y=\"142\" width=\"34\" height=\"48\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1\"/><text x=\"179\" y=\"207\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">Mer.</text><rect x=\"214\" y=\"70\" width=\"34\" height=\"120\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1\"/><text x=\"231\" y=\"207\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">Jeu.</text><rect x=\"266\" y=\"118\" width=\"34\" height=\"72\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1\"/><text x=\"283\" y=\"207\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">Ven.</text><line x1=\"40\" y1=\"190\" x2=\"310\" y2=\"190\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><line x1=\"40\" y1=\"190\" x2=\"40\" y2=\"12\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/></svg></div>\n**Combien de livres de plus ont été empruntés le mardi que le mercredi ?**",
      "type": "exact",
      "answer": "12",
      "placeholder": "Ex: 9",
      "hint1": "L'axe vertical est gradué de $3$ en $3$. Lis la hauteur des barres « Mar. » et « Mer. ».",
      "hint2": "Mardi : $18$ livres ; mercredi : $6$ livres.",
      "solution": "Lecture : mardi $18$ livres, mercredi $6$ livres.\n$$18 - 6 = 12$$\nOn a emprunté $12$ livres de plus le mardi.",
      "skill": "Représenter"
    },
    {
      "id": "6D1-5",
      "chapterId": "6D1",
      "tier": 4,
      "title": "Défi 5ème : Fréquence en pourcentage",
      "statement": "Dans une classe de $25$ élèves, $8$ viennent au collège à vélo, $12$ à pied et les autres en bus.\n**Quel pourcentage des élèves de la classe vient en bus ?** (donne seulement le nombre)",
      "type": "exact",
      "answer": "20",
      "placeholder": "Ex: 30",
      "hint1": "Calcule d'abord le nombre d'élèves venant en bus : $25 - 8 - 12$.",
      "hint2": "$5$ élèves sur $25$ : écris cette proportion avec le dénominateur $100$.",
      "solution": "Élèves en bus : $25 - 8 - 12 = 5$.\n$$\\frac{5}{25} = \\frac{5 \\times 4}{25 \\times 4} = \\frac{20}{100} = 20\\,\\%$$",
      "skill": "Calculer"
    }
  ],
  "6D2": [
    {
      "id": "6D2-1",
      "chapterId": "6D2",
      "tier": 1,
      "title": "Vocabulaire du hasard",
      "statement": "On lance un dé équilibré dont les faces sont numérotées de $1$ à $6$.\n**Comment qualifier l'événement « obtenir $7$ » ?**",
      "type": "mcq",
      "options": [
        "Impossible",
        "Certain",
        "Une chance sur deux",
        "Peu probable mais possible"
      ],
      "correctIndex": 0,
      "answer": "Impossible",
      "hint1": "Le nombre $7$ figure-t-il sur une face du dé ?",
      "hint2": "Aucune face ne porte le nombre 7.",
      "solution": "Aucune face ne porte le nombre $7$ : l'événement ne peut pas se produire, il est **impossible** (sa probabilité vaut $0$).",
      "skill": "Communiquer"
    },
    {
      "id": "6D2-2",
      "chapterId": "6D2",
      "tier": 1,
      "title": "Probabilité avec un dé",
      "statement": "On lance un dé équilibré à six faces numérotées de $1$ à $6$.\n**Quelle est la probabilité d'obtenir $4$ ?** (sous forme de fraction)",
      "type": "exact",
      "answer": "1/6",
      "placeholder": "Ex: 1/3",
      "hint1": "Combien y a-t-il d'issues possibles ? Combien sont favorables ?",
      "hint2": "$6$ issues possibles, $1$ favorable.",
      "solution": "Le dé est équilibré : $6$ issues équiprobables, dont $1$ seule favorable.\n$$P(\\text{obtenir } 4) = \\frac{1}{6}$$",
      "skill": "Calculer"
    },
    {
      "id": "6D2-3",
      "chapterId": "6D2",
      "tier": 2,
      "title": "Tirage dans un sac",
      "statement": "Un sac contient $3$ billes rouges, $5$ billes bleues et $2$ billes vertes, indiscernables au toucher. On tire une bille au hasard.\n**Quelle est la probabilité de tirer une bille bleue ?** (fraction simplifiée)",
      "type": "exact",
      "answer": "1/2",
      "placeholder": "Ex: 2/5",
      "hint1": "Nombre total de billes : $3 + 5 + 2$.",
      "hint2": "$5$ billes bleues sur $10$ billes.",
      "solution": "Il y a $3 + 5 + 2 = 10$ billes, dont $5$ bleues :\n$$P(\\text{bleue}) = \\frac{5}{10} = \\frac{1}{2}$$",
      "skill": "Calculer"
    },
    {
      "id": "6D2-4",
      "chapterId": "6D2",
      "tier": 3,
      "title": "Roue de loterie",
      "statement": "Une roue équilibrée est partagée en $8$ secteurs identiques numérotés de $1$ à $8$. On la fait tourner.\n**Quelle est la probabilité d'obtenir un nombre pair strictement supérieur à $3$ ?** (fraction simplifiée)",
      "type": "exact",
      "answer": "3/8",
      "placeholder": "Ex: 1/4",
      "hint1": "Liste les nombres pairs entre $1$ et $8$, puis garde ceux supérieurs à $3$.",
      "hint2": "Issues favorables : $4$, $6$, $8$.",
      "solution": "Nombres pairs : $2$, $4$, $6$, $8$. Ceux strictement supérieurs à $3$ : $4$, $6$, $8$, soit $3$ issues favorables sur $8$.\n$$P = \\frac{3}{8}$$",
      "skill": "Raisonner"
    },
    {
      "id": "6D2-5",
      "chapterId": "6D2",
      "tier": 4,
      "title": "Défi 5ème : Fréquence observée",
      "statement": "Inès lance une pièce de monnaie $200$ fois et obtient « pile » $94$ fois.\n**Quelle est la fréquence d'apparition de « pile » ?** (écriture décimale)",
      "type": "exact",
      "answer": "0,47",
      "placeholder": "Ex: 0,52",
      "hint1": "Fréquence $= \\frac{\\text{nombre de piles}}{\\text{nombre de lancers}}$.",
      "hint2": "$\\frac{94}{200} = \\frac{47}{100}$.",
      "solution": "$$\\frac{94}{200} = \\frac{47}{100} = 0{,}47$$\nCette fréquence est proche de la probabilité $0{,}5$ d'obtenir « pile » avec une pièce équilibrée.",
      "skill": "Calculer"
    }
  ],
  "6A1": [
    {
      "id": "6A1-1",
      "chapterId": "6A1",
      "tier": 1,
      "title": "Déplacement sur un quadrillage",
      "statement": "Un robot se déplace d'une case à chaque flèche. Il exécute le programme :\n$$\\rightarrow \\ \\rightarrow \\ \\rightarrow \\ \\uparrow \\ \\uparrow \\ \\leftarrow$$\n**À la fin, de combien de cases se trouve-t-il à droite de sa case de départ ?**",
      "type": "exact",
      "answer": "2",
      "placeholder": "Ex: 3",
      "hint1": "Ne regarde que les flèches horizontales.",
      "hint2": "$3$ cases vers la droite puis $1$ vers la gauche.",
      "solution": "Flèches horizontales : $3$ vers la droite, $1$ vers la gauche : $3 - 1 = 2$.\nLe robot est $2$ cases à droite (et $2$ cases au-dessus) de son départ.",
      "skill": "Représenter"
    },
    {
      "id": "6A1-2",
      "chapterId": "6A1",
      "tier": 1,
      "title": "Reconnaître une boucle",
      "statement": "Dans Scratch, quel bloc permet de **répéter** une séquence d'instructions plusieurs fois ?",
      "type": "mcq",
      "options": [
        "répéter 4 fois",
        "avancer de 10 pas",
        "dire Bonjour !",
        "quand le drapeau vert est cliqué"
      ],
      "correctIndex": 0,
      "answer": "répéter 4 fois",
      "hint1": "On cherche un bloc de la catégorie « Contrôle ».",
      "hint2": "Le bloc contient le mot « répéter ».",
      "solution": "Le bloc « répéter 4 fois » est une **boucle** : les instructions placées à l'intérieur sont exécutées 4 fois.",
      "skill": "Communiquer"
    },
    {
      "id": "6A1-3",
      "chapterId": "6A1",
      "tier": 2,
      "title": "Distance parcourue avec une boucle",
      "statement": "Un lutin exécute le script suivant :\n```text\nquand le drapeau vert est cliqué\nrépéter 5 fois\n    avancer de 30 pas\n```\n**Combien de pas le lutin a-t-il parcourus au total ?**",
      "type": "exact",
      "answer": "150",
      "placeholder": "Ex: 120",
      "hint1": "L'instruction « avancer de $30$ pas » est exécutée $5$ fois.",
      "hint2": "Calcule $5 \\times 30$.",
      "solution": "$$5 \\times 30 = 150$$\nLe lutin a parcouru $150$ pas.",
      "skill": "Calculer"
    },
    {
      "id": "6A1-4",
      "chapterId": "6A1",
      "tier": 3,
      "title": "Tracer un rectangle",
      "statement": "Un lutin (stylo en position d'écriture) exécute le script suivant :\n```text\nrépéter 2 fois\n    avancer de 80 pas\n    tourner de 90 degrés\n    avancer de 30 pas\n    tourner de 90 degrés\n```\n**Quelle est la longueur totale du trait tracé, en pas ?**",
      "type": "exact",
      "answer": "220",
      "placeholder": "Ex: 200",
      "hint1": "Pendant un passage dans la boucle, le lutin avance de $80 + 30$ pas.",
      "hint2": "La boucle est exécutée $2$ fois.",
      "solution": "Un passage dans la boucle : $80 + 30 = 110$ pas. Deux passages :\n$$2 \\times 110 = 220$$\nLe lutin trace un rectangle de périmètre $220$ pas.",
      "skill": "Modéliser"
    },
    {
      "id": "6A1-5",
      "chapterId": "6A1",
      "tier": 4,
      "title": "Défi 5ème : Une variable qui double",
      "statement": "On exécute le script suivant :\n```text\nmettre N à 2\nrépéter 4 fois\n    mettre N à N × 2\ndire N\n```\n**Quel nombre le lutin dit-il à la fin ?**",
      "type": "exact",
      "answer": "32",
      "placeholder": "Ex: 16",
      "hint1": "Au départ $N = 2$ ; à chaque passage dans la boucle, $N$ est multiplié par $2$.",
      "hint2": "$2 \\rightarrow 4 \\rightarrow 8 \\rightarrow \\ldots$",
      "solution": "Valeurs successives de $N$ : $2$, puis $4$, $8$, $16$, $32$ après les $4$ passages.\nLe lutin dit $32$.",
      "skill": "Raisonner"
    }
  ],
  "6M1": [
    {
      "id": "6M1-1",
      "chapterId": "6M1",
      "tier": 1,
      "title": "Conversion de longueurs",
      "statement": "Convertir en centimètres :\n$$3{,}6\\text{ m} = \\dots\\text{ cm}$$",
      "type": "exact",
      "answer": "360",
      "placeholder": "Ex: 360",
      "hint1": "$1\\text{ m} = 100\\text{ cm}$ : on multiplie par 100.",
      "hint2": "$3{,}6 \\times 100 = 360$.",
      "solution": "On passe à une unité plus petite, on multiplie par 100 :\n$$3{,}6\\text{ m} = 3{,}6 \\times 100\\text{ cm} = 360\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "6M1-2",
      "chapterId": "6M1",
      "tier": 1,
      "title": "Périmètre d’un rectangle",
      "statement": "Un rectangle mesure $8{,}5\\text{ cm}$ de longueur et $4\\text{ cm}$ de largeur.\n**Calculer son périmètre en cm.**",
      "type": "exact",
      "answer": "25",
      "placeholder": "Ex: 25",
      "hint1": "$P = 2 \\times (L + \\ell)$.",
      "hint2": "$8{,}5 + 4 = 12{,}5$, puis on double.",
      "solution": "$$P = 2 \\times (8{,}5 + 4) = 2 \\times 12{,}5 = 25\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "6M1-3",
      "chapterId": "6M1",
      "tier": 2,
      "title": "Périmètre d’un polygone en unités mélangées",
      "statement": "Un triangle a des côtés de $45\\text{ mm}$, $6{,}2\\text{ cm}$ et $0{,}5\\text{ dm}$.\n**Calculer son périmètre en cm.**",
      "type": "exact",
      "answer": "15,7",
      "placeholder": "Ex: 15,7",
      "hint1": "Convertis toutes les longueurs en cm avant d’additionner.",
      "hint2": "$45\\text{ mm} = 4{,}5\\text{ cm}$ et $0{,}5\\text{ dm} = 5\\text{ cm}$.",
      "solution": "$$P = 4{,}5 + 6{,}2 + 5 = 15{,}7\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "6M1-4",
      "chapterId": "6M1",
      "tier": 3,
      "title": "Longueur d’un cercle",
      "statement": "Une roue de vélo a un rayon de $35\\text{ cm}$. On prend $\\pi \\approx 3{,}14$.\n**Quelle distance (en cm) parcourt la roue en faisant un tour complet ?**",
      "type": "exact",
      "answer": "219,8",
      "placeholder": "Ex: 219,8",
      "hint1": "La distance parcourue en un tour est le périmètre de la roue : $P = \\pi \\times d$.",
      "hint2": "Le diamètre vaut $2 \\times 35 = 70\\text{ cm}$.",
      "solution": "$d = 70\\text{ cm}$, donc :\n$$P \\approx 3{,}14 \\times 70 = 219{,}8\\text{ cm}$$",
      "skill": "Modéliser"
    },
    {
      "id": "6M1-5",
      "chapterId": "6M1",
      "tier": 4,
      "title": "Défi 5ème : Périmètre d’un stade",
      "statement": "Une piste est formée d'un rectangle de $80\\text{ m}$ sur $60\\text{ m}$ dont les deux largeurs sont remplacées par deux demi-cercles de diamètre $60\\text{ m}$. On prend $\\pi \\approx 3{,}14$.\n**Quelle est la longueur d'un tour de piste, en m ?**",
      "type": "exact",
      "answer": "348,4",
      "placeholder": "Ex: 348,4",
      "hint1": "Le contour est formé des deux longueurs de $80\\text{ m}$ et de deux demi-cercles, soit un cercle complet de diamètre $60\\text{ m}$.",
      "hint2": "Cercle complet : $3{,}14 \\times 60 = 188{,}4\\text{ m}$.",
      "solution": "• Deux lignes droites : $2 \\times 80 = 160\\text{ m}$.\n• Deux demi-cercles = un cercle de diamètre $60\\text{ m}$ : $3{,}14 \\times 60 = 188{,}4\\text{ m}$.\n$$P \\approx 160 + 188{,}4 = 348{,}4\\text{ m}$$",
      "skill": "Chercher"
    }
  ],
  "6M2": [
    {
      "id": "6M2-1",
      "chapterId": "6M2",
      "tier": 1,
      "title": "Aire d’un rectangle",
      "statement": "Calculer l'aire, en $\\text{cm}^2$, d'un rectangle de $9\\text{ cm}$ sur $6\\text{ cm}$.",
      "type": "exact",
      "answer": "54",
      "placeholder": "Ex: 54",
      "hint1": "$\\mathcal{A} = L \\times \\ell$.",
      "hint2": "$9 \\times 6$.",
      "solution": "$$\\mathcal{A} = 9 \\times 6 = 54\\text{ cm}^2$$",
      "skill": "Calculer"
    },
    {
      "id": "6M2-2",
      "chapterId": "6M2",
      "tier": 2,
      "title": "Aire ou périmètre ?",
      "statement": "Un carré a pour côté $5\\text{ cm}$. Parmi les affirmations suivantes, laquelle est vraie ?",
      "type": "mcq",
      "options": [
        "Son aire vaut $25\\text{ cm}^2$ et son périmètre $20\\text{ cm}$.",
        "Son aire vaut $20\\text{ cm}^2$ et son périmètre $25\\text{ cm}$.",
        "Son aire et son périmètre valent tous les deux $20$.",
        "Son aire vaut $10\\text{ cm}^2$ et son périmètre $20\\text{ cm}$."
      ],
      "correctIndex": 0,
      "answer": "Son aire vaut $25\\text{ cm}^2$ et son périmètre $20\\text{ cm}$.",
      "hint1": "Aire du carré : $c \\times c$ ; périmètre : $4 \\times c$.",
      "hint2": "$5 \\times 5 = 25$ et $4 \\times 5 = 20$.",
      "solution": "Aire : $5 \\times 5 = 25\\text{ cm}^2$. Périmètre : $4 \\times 5 = 20\\text{ cm}$.",
      "skill": "Raisonner"
    },
    {
      "id": "6M2-3",
      "chapterId": "6M2",
      "tier": 2,
      "title": "Conversion d’aire",
      "statement": "Convertir :\n$$3{,}5\\text{ m}^2 = \\dots\\text{ dm}^2$$",
      "type": "exact",
      "answer": "350",
      "placeholder": "Ex: 350",
      "hint1": "$1\\text{ m}^2 = 100\\text{ dm}^2$.",
      "hint2": "On multiplie par 100.",
      "solution": "$$3{,}5\\text{ m}^2 = 3{,}5 \\times 100 = 350\\text{ dm}^2$$",
      "skill": "Calculer"
    },
    {
      "id": "6M2-4",
      "chapterId": "6M2",
      "tier": 3,
      "title": "Figure en L",
      "statement": "Un jardin a la forme d'un rectangle de $12\\text{ m}$ sur $8\\text{ m}$ dont on a retiré un coin carré de $3\\text{ m}$ de côté.\n**Quelle est l'aire du jardin, en $\\text{m}^2$ ?**",
      "type": "exact",
      "answer": "87",
      "placeholder": "Ex: 87",
      "hint1": "Calcule l’aire du grand rectangle puis retire celle du carré.",
      "hint2": "$12 \\times 8 = 96$ et $3 \\times 3 = 9$.",
      "solution": "$$\\mathcal{A} = 12 \\times 8 - 3 \\times 3 = 96 - 9 = 87\\text{ m}^2$$",
      "skill": "Modéliser"
    },
    {
      "id": "6M2-5",
      "chapterId": "6M2",
      "tier": 4,
      "title": "Défi 5ème : Carrelage",
      "statement": "On veut carreler le sol d'une pièce rectangulaire de $4{,}2\\text{ m}$ sur $3\\text{ m}$ avec des carreaux carrés de $30\\text{ cm}$ de côté.\n**Combien de carreaux faut-il (sans découpe) ?**",
      "type": "exact",
      "answer": "140",
      "placeholder": "Ex: 140",
      "hint1": "Combien de carreaux tiennent dans la longueur ($420\\text{ cm}$) ? dans la largeur ($300\\text{ cm}$) ?",
      "hint2": "$420 \\div 30 = 14$ et $300 \\div 30 = 10$.",
      "solution": "Dans la longueur : $420 \\div 30 = 14$ carreaux ; dans la largeur : $300 \\div 30 = 10$ carreaux.\n$$14 \\times 10 = 140 \\text{ carreaux}$$\n(Vérification : $12{,}6\\text{ m}^2 = 126\\,000\\text{ cm}^2$ et un carreau mesure $900\\text{ cm}^2$ ; $126\\,000 \\div 900 = 140$.)",
      "skill": "Chercher"
    }
  ],
  "6M3": [
    {
      "id": "6M3-1",
      "chapterId": "6M3",
      "tier": 1,
      "title": "Compter des cubes",
      "statement": "Un pavé est construit avec des cubes de $1\\text{ cm}^3$ : 5 cubes en longueur, 3 en largeur et 2 étages.\n**Quel est son volume, en $\\text{cm}^3$ ?**",
      "type": "exact",
      "answer": "30",
      "placeholder": "Ex: 30",
      "hint1": "Compte les cubes d’un étage puis multiplie par le nombre d’étages.",
      "hint2": "$5 \\times 3 = 15$ cubes par étage.",
      "solution": "$$\\mathcal{V} = 5 \\times 3 \\times 2 = 30\\text{ cm}^3$$",
      "skill": "Calculer"
    },
    {
      "id": "6M3-2",
      "chapterId": "6M3",
      "tier": 2,
      "title": "Volume d’un cube",
      "statement": "Calculer le volume, en $\\text{cm}^3$, d'un cube d'arête $6\\text{ cm}$.",
      "type": "exact",
      "answer": "216",
      "placeholder": "Ex: 216",
      "hint1": "$\\mathcal{V} = a \\times a \\times a$.",
      "hint2": "$6 \\times 6 = 36$, puis $36 \\times 6$.",
      "solution": "$$\\mathcal{V} = 6 \\times 6 \\times 6 = 216\\text{ cm}^3$$",
      "skill": "Calculer"
    },
    {
      "id": "6M3-3",
      "chapterId": "6M3",
      "tier": 2,
      "title": "Le piège du cube",
      "statement": "Un élève affirme : « Un cube d'arête $3\\text{ cm}$ a un volume de $9\\text{ cm}^3$. » A-t-il raison ?",
      "type": "mcq",
      "options": [
        "Non, le volume est $27\\text{ cm}^3$.",
        "Oui, car $3 \\times 3 = 9$.",
        "Non, le volume est $12\\text{ cm}^3$.",
        "Non, le volume est $18\\text{ cm}^3$."
      ],
      "correctIndex": 0,
      "answer": "Non, le volume est $27\\text{ cm}^3$.",
      "hint1": "Un volume fait intervenir trois dimensions.",
      "hint2": "$3 \\times 3 \\times 3$.",
      "solution": "$9$ est l'aire d'une face. Le volume vaut $3 \\times 3 \\times 3 = 27\\text{ cm}^3$.",
      "skill": "Raisonner"
    },
    {
      "id": "6M3-4",
      "chapterId": "6M3",
      "tier": 3,
      "title": "Contenance d’une boîte",
      "statement": "Une brique a la forme d'un pavé droit de $10\\text{ cm}$ sur $6\\text{ cm}$ et de $25\\text{ cm}$ de haut.\n**Quelle est sa contenance en litres ?**",
      "type": "exact",
      "answer": "1,5",
      "placeholder": "Ex: 1,5",
      "hint1": "Calcule le volume en $\\text{cm}^3$, puis rappelle-toi que $1\\text{ L} = 1\\,000\\text{ cm}^3$.",
      "hint2": "$10 \\times 6 \\times 25 = 1\\,500\\text{ cm}^3$.",
      "solution": "$$\\mathcal{V} = 10 \\times 6 \\times 25 = 1\\,500\\text{ cm}^3 = 1{,}5\\text{ L}$$",
      "skill": "Modéliser"
    },
    {
      "id": "6M3-5",
      "chapterId": "6M3",
      "tier": 4,
      "title": "Défi 5ème : Remplir un bac",
      "statement": "Un bac a la forme d'un pavé de $40\\text{ cm}$ sur $25\\text{ cm}$ et de $30\\text{ cm}$ de haut. On le remplit avec un seau de $5\\text{ L}$.\n**Combien de seaux pleins faut-il pour remplir entièrement le bac ?**",
      "type": "exact",
      "answer": "6",
      "placeholder": "Ex: 6",
      "hint1": "Volume du bac en $\\text{cm}^3$, puis conversion en litres.",
      "hint2": "$40 \\times 25 \\times 30 = 30\\,000\\text{ cm}^3 = 30\\text{ L}$.",
      "solution": "$\\mathcal{V} = 40 \\times 25 \\times 30 = 30\\,000\\text{ cm}^3 = 30\\text{ L}$.\n$$30 \\div 5 = 6 \\text{ seaux}$$",
      "skill": "Chercher"
    }
  ],
  "6M4": [
    {
      "id": "6M4-1",
      "chapterId": "6M4",
      "tier": 1,
      "title": "Convertir en minutes",
      "statement": "Convertir 2 h 15 min en minutes.",
      "type": "exact",
      "answer": "135",
      "placeholder": "Ex: 135",
      "hint1": "$1\\text{ h} = 60\\text{ min}$.",
      "hint2": "$2 \\times 60 = 120$, puis ajoute 15.",
      "solution": "$$2 \\times 60 + 15 = 120 + 15 = 135\\text{ min}$$",
      "skill": "Calculer"
    },
    {
      "id": "6M4-2",
      "chapterId": "6M4",
      "tier": 2,
      "title": "Durée d’un film",
      "statement": "Un film commence à 20 h 45 et se termine à 22 h 30.\n**Combien de minutes dure-t-il ?**",
      "type": "exact",
      "answer": "105",
      "placeholder": "Ex: 105",
      "hint1": "Compte de 20 h 45 à 21 h, puis de 21 h à 22 h 30.",
      "hint2": "15 min + 1 h 30 min.",
      "solution": "De 20 h 45 à 21 h : 15 min ; de 21 h à 22 h 30 : 1 h 30 min = 90 min.\n$$15 + 90 = 105\\text{ min}$$",
      "skill": "Calculer"
    },
    {
      "id": "6M4-3",
      "chapterId": "6M4",
      "tier": 2,
      "title": "Écriture décimale d’une durée",
      "statement": "À quelle durée correspond $1{,}75\\text{ h}$ ?",
      "type": "mcq",
      "options": [
        "1 h 45 min",
        "1 h 75 min",
        "1 h 7 min 30 s",
        "2 h 15 min"
      ],
      "correctIndex": 0,
      "answer": "1 h 45 min",
      "hint1": "$0{,}75\\text{ h}$, c'est les trois quarts d'une heure.",
      "hint2": "$0{,}75 \\times 60 = 45$.",
      "solution": "$0{,}75\\text{ h} = 0{,}75 \\times 60\\text{ min} = 45\\text{ min}$, donc $1{,}75\\text{ h}$ = 1 h 45 min.",
      "skill": "Raisonner"
    },
    {
      "id": "6M4-4",
      "chapterId": "6M4",
      "tier": 3,
      "title": "Heure d’arrivée",
      "statement": "Un car part à 13 h 50. Le trajet dure 2 h 25 min.\n**À quelle heure arrive-t-il ?**",
      "type": "mcq",
      "options": ["16 h 15", "15 h 75", "15 h 15", "16 h 25"],
      "correctIndex": 0,
      "answer": "16 h 15",
      "hint1": "Ajoute séparément les heures et les minutes.",
      "hint2": "$50 + 25 = 75\\text{ min} = 1\\text{ h } 15\\text{ min}$.",
      "solution": "$13\\text{ h} + 2\\text{ h} = 15\\text{ h}$ et $50 + 25 = 75\\text{ min} = 1\\text{ h } 15\\text{ min}$.\nArrivée : **16 h 15**.",
      "skill": "Modéliser"
    },
    {
      "id": "6M4-5",
      "chapterId": "6M4",
      "tier": 4,
      "title": "Défi 5ème : Course de relais",
      "statement": "Trois coureurs se relaient : le premier court 12 min 48 s, le deuxième 13 min 35 s et le troisième 11 min 57 s.\n**Quel est le temps total de l’équipe, en secondes ?**",
      "type": "exact",
      "answer": "2300",
      "placeholder": "Ex: 2300",
      "hint1": "Additionne les minutes entre elles et les secondes entre elles, puis convertis.",
      "hint2": "$12 + 13 + 11 = 36$ min et $48 + 35 + 57 = 140$ s.",
      "solution": "Minutes : $36\\text{ min} = 2\\,160\\text{ s}$. Secondes : $140\\text{ s}$.\n$$2\\,160 + 140 = 2\\,300\\text{ s}$$\n(soit 38 min 20 s).",
      "skill": "Chercher"
    }
  ],
  "6G1": [
    {
      "id": "6G1-1",
      "chapterId": "6G1",
      "tier": 1,
      "title": "Notations",
      "statement": "Que désigne la notation $[AB]$ ?",
      "type": "mcq",
      "options": [
        "Le segment d'extrémités $A$ et $B$",
        "La droite passant par $A$ et $B$",
        "La demi-droite d'origine $A$ passant par $B$",
        "La longueur entre $A$ et $B$"
      ],
      "correctIndex": 0,
      "answer": "Le segment d'extrémités $A$ et $B$",
      "hint1": "Les crochets fermés des deux côtés indiquent que la ligne s’arrête en A et en B.",
      "hint2": "$(AB)$ est une droite, $[AB)$ une demi-droite, $AB$ une longueur.",
      "solution": "$[AB]$ est le **segment** d'extrémités $A$ et $B$.",
      "skill": "Communiquer"
    },
    {
      "id": "6G1-2",
      "chapterId": "6G1",
      "tier": 1,
      "title": "Rayon et diamètre",
      "statement": "Un cercle a pour diamètre $13\\text{ cm}$. **Quel est son rayon, en cm ?**",
      "type": "exact",
      "answer": "6,5",
      "placeholder": "Ex: 6,5",
      "hint1": "Le diamètre est le double du rayon.",
      "hint2": "$13 \\div 2$.",
      "solution": "$$r = 13 \\div 2 = 6{,}5\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "6G1-3",
      "chapterId": "6G1",
      "tier": 2,
      "title": "Milieu d’un segment",
      "statement": "$I$ est le milieu du segment $[RS]$ et $RI = 4{,}8\\text{ cm}$. **Calculer $RS$ en cm.**",
      "type": "exact",
      "answer": "9,6",
      "placeholder": "Ex: 9,6",
      "hint1": "Le milieu partage le segment en deux longueurs égales.",
      "hint2": "$RS = 2 \\times RI$.",
      "solution": "$IS = RI = 4{,}8\\text{ cm}$, donc $RS = 2 \\times 4{,}8 = 9{,}6\\text{ cm}$.",
      "skill": "Raisonner"
    },
    {
      "id": "6G1-4",
      "chapterId": "6G1",
      "tier": 3,
      "title": "Point sur un cercle ?",
      "statement": "Le cercle $\\mathcal{C}$ a pour centre $O$ et pour diamètre $10\\text{ cm}$. On donne $OA = 5\\text{ cm}$, $OB = 10\\text{ cm}$ et $OC = 4\\text{ cm}$.\n**Quel(s) point(s) appartien(nen)t au cercle ?**",
      "type": "mcq",
      "options": [
        "Seulement $A$",
        "Seulement $B$",
        "$A$ et $B$",
        "$A$ et $C$"
      ],
      "correctIndex": 0,
      "answer": "Seulement $A$",
      "hint1": "Un point est sur le cercle si sa distance au centre est égale au rayon.",
      "hint2": "Le rayon vaut $10 \\div 2 = 5\\text{ cm}$.",
      "solution": "Le rayon est $5\\text{ cm}$. Seul $A$ vérifie $OA = 5\\text{ cm}$. $B$ est à l'extérieur, $C$ à l'intérieur.",
      "skill": "Raisonner"
    },
    {
      "id": "6G1-5",
      "chapterId": "6G1",
      "tier": 4,
      "title": "Défi 5ème : Deux cercles",
      "statement": "Deux cercles de centres $A$ et $B$ ont pour rayons respectifs $3{,}5\\text{ cm}$ et $2{,}5\\text{ cm}$. Ils se touchent en un seul point $M$ situé sur le segment $[AB]$.\n**Calculer $AB$ en cm.**",
      "type": "exact",
      "answer": "6",
      "placeholder": "Ex: 6",
      "hint1": "$M$ est sur les deux cercles : $AM$ est un rayon du premier, $BM$ un rayon du second.",
      "hint2": "$AB = AM + MB$.",
      "solution": "$AM = 3{,}5\\text{ cm}$ et $MB = 2{,}5\\text{ cm}$, et $M \\in [AB]$ :\n$$AB = 3{,}5 + 2{,}5 = 6\\text{ cm}$$",
      "skill": "Chercher"
    }
  ],
  "6G2": [
    {
      "id": "6G2-1",
      "chapterId": "6G2",
      "tier": 1,
      "title": "Définition de la médiatrice",
      "statement": "Quelle est la définition de la médiatrice d'un segment $[AB]$ ?",
      "type": "mcq",
      "options": [
        "La droite perpendiculaire à $[AB]$ passant par son milieu",
        "Toute droite passant par le milieu de $[AB]$",
        "Toute droite perpendiculaire à $[AB]$",
        "La droite $(AB)$"
      ],
      "correctIndex": 0,
      "answer": "La droite perpendiculaire à $[AB]$ passant par son milieu",
      "hint1": "Deux conditions sont nécessaires.",
      "hint2": "Perpendiculaire ET milieu.",
      "solution": "La médiatrice de $[AB]$ est la droite **perpendiculaire** à $[AB]$ qui passe par son **milieu**.",
      "skill": "Communiquer"
    },
    {
      "id": "6G2-2",
      "chapterId": "6G2",
      "tier": 2,
      "title": "Propriété caractéristique",
      "statement": "Le point $M$ appartient à la médiatrice de $[AB]$ et $MA = 7{,}2\\text{ cm}$. **Que vaut $MB$, en cm ?**",
      "type": "exact",
      "answer": "7,2",
      "placeholder": "Ex: 7,2",
      "hint1": "Tout point de la médiatrice est à égale distance des extrémités.",
      "hint2": "$MB = MA$.",
      "solution": "$M$ est sur la médiatrice de $[AB]$, donc $MA = MB$ : $MB = 7{,}2\\text{ cm}$.",
      "skill": "Raisonner"
    },
    {
      "id": "6G2-3",
      "chapterId": "6G2",
      "tier": 2,
      "title": "Axes de symétrie",
      "statement": "Combien d’axes de symétrie possède un rectangle qui n’est pas un carré ?",
      "type": "exact",
      "answer": "2",
      "placeholder": "Ex: 2",
      "hint1": "Pense au pliage du rectangle.",
      "hint2": "Les diagonales ne sont pas des axes de symétrie du rectangle.",
      "solution": "Un rectangle non carré possède **2** axes de symétrie : les médiatrices de ses côtés.",
      "skill": "Raisonner"
    },
    {
      "id": "6G2-4",
      "chapterId": "6G2",
      "tier": 3,
      "title": "Conservation par symétrie",
      "statement": "La figure $\\mathcal{F}'$ est le symétrique d'un triangle $\\mathcal{F}$ de périmètre $17{,}4\\text{ cm}$ et d'aire $12\\text{ cm}^2$ par rapport à une droite $(d)$.\n**Quel est le périmètre de $\\mathcal{F}'$, en cm ?**",
      "type": "exact",
      "answer": "17,4",
      "placeholder": "Ex: 17,4",
      "hint1": "La symétrie axiale conserve les longueurs.",
      "hint2": "Donc elle conserve aussi les périmètres.",
      "solution": "La symétrie axiale conserve les longueurs, donc le périmètre : $17{,}4\\text{ cm}$.",
      "skill": "Raisonner"
    },
    {
      "id": "6G2-5",
      "chapterId": "6G2",
      "tier": 4,
      "title": "Défi 5ème : Point équidistant",
      "statement": "Les points $A$ et $B$ sont tels que $AB = 8\\text{ cm}$. Le point $P$ vérifie $PA = PB = 5\\text{ cm}$. On note $I$ le milieu de $[AB]$.\n**Quelle est la mesure, en degrés, de l'angle $\\widehat{PIA}$ ?**",
      "type": "exact",
      "answer": "90",
      "placeholder": "Ex: 90",
      "hint1": "$PA = PB$ : que peut-on dire de $P$ par rapport au segment $[AB]$ ?",
      "hint2": "P est sur la médiatrice de [AB], qui passe par I et est perpendiculaire à [AB].",
      "solution": "Comme $PA = PB$, $P$ appartient à la médiatrice de $[AB]$. Cette médiatrice passe par le milieu $I$ et est perpendiculaire à $(AB)$. Donc $(PI) \\perp (AB)$ et $\\widehat{PIA} = 90^\\circ$.",
      "skill": "Raisonner"
    }
  ],
  "6G3": [
    {
      "id": "6G3-1",
      "chapterId": "6G3",
      "tier": 1,
      "title": "Nature d’un angle",
      "statement": "Un angle mesure $127^\\circ$. Comment le qualifie-t-on ?",
      "type": "mcq",
      "options": [
        "Obtus",
        "Aigu",
        "Droit",
        "Plat"
      ],
      "correctIndex": 0,
      "answer": "Obtus",
      "hint1": "Compare $127^\\circ$ à $90^\\circ$ et à $180^\\circ$.",
      "hint2": "$90 < 127 < 180$.",
      "solution": "$90^\\circ < 127^\\circ < 180^\\circ$ : l'angle est **obtus**.",
      "skill": "Communiquer"
    },
    {
      "id": "6G3-2",
      "chapterId": "6G3",
      "tier": 2,
      "title": "Angles supplémentaires",
      "statement": "Les points $A$, $O$, $C$ sont alignés et $\\widehat{AOB} = 53^\\circ$, les angles $\\widehat{AOB}$ et $\\widehat{BOC}$ étant adjacents.\n**Calculer $\\widehat{BOC}$ en degrés.**",
      "type": "exact",
      "answer": "127",
      "placeholder": "Ex: 127",
      "hint1": "$\\widehat{AOC}$ est un angle plat.",
      "hint2": "$180 - 53$.",
      "solution": "$$\\widehat{BOC} = 180^\\circ - 53^\\circ = 127^\\circ$$",
      "skill": "Calculer"
    },
    {
      "id": "6G3-3",
      "chapterId": "6G3",
      "tier": 2,
      "title": "Bissectrice",
      "statement": "La demi-droite $[Oz)$ est la bissectrice de l'angle $\\widehat{xOy}$ qui mesure $76^\\circ$.\n**Quelle est la mesure de $\\widehat{xOz}$, en degrés ?**",
      "type": "exact",
      "answer": "38",
      "placeholder": "Ex: 38",
      "hint1": "La bissectrice partage l’angle en deux angles de même mesure.",
      "hint2": "$76 \\div 2$.",
      "solution": "$$\\widehat{xOz} = 76^\\circ \\div 2 = 38^\\circ$$",
      "skill": "Calculer"
    },
    {
      "id": "6G3-4",
      "chapterId": "6G3",
      "tier": 3,
      "title": "Droites sécantes",
      "statement": "Deux droites sécantes en $O$ forment quatre angles. L'un d'eux mesure $41^\\circ$.\n**Quelles sont les mesures des trois autres angles ?**",
      "type": "mcq",
      "options": [
        "$41^\\circ$, $139^\\circ$ et $139^\\circ$",
        "$41^\\circ$, $49^\\circ$ et $49^\\circ$",
        "$139^\\circ$, $139^\\circ$ et $139^\\circ$",
        "$41^\\circ$, $41^\\circ$ et $41^\\circ$"
      ],
      "correctIndex": 0,
      "answer": "$41^\\circ$, $139^\\circ$ et $139^\\circ$",
      "hint1": "L’angle opposé par le sommet a la même mesure.",
      "hint2": "Les angles adjacents sont supplémentaires : $180 - 41$.",
      "solution": "L'angle opposé par le sommet mesure $41^\\circ$. Les deux angles adjacents mesurent $180^\\circ - 41^\\circ = 139^\\circ$.",
      "skill": "Raisonner"
    },
    {
      "id": "6G3-5",
      "chapterId": "6G3",
      "tier": 4,
      "title": "Défi 5ème : Bissectrices d’angles supplémentaires",
      "statement": "Les points $A$, $O$, $C$ sont alignés et $B$ est un point hors de la droite $(AC)$. On trace la bissectrice $[Ox)$ de $\\widehat{AOB}$ et la bissectrice $[Oy)$ de $\\widehat{BOC}$. On sait que $\\widehat{AOB} = 64^\\circ$.\n**Quelle est la mesure de $\\widehat{xOy}$, en degrés ?**",
      "type": "exact",
      "answer": "90",
      "placeholder": "Ex: 90",
      "hint1": "Calcule d'abord $\\widehat{BOC}$, puis les moitiés de chaque angle.",
      "hint2": "$\\widehat{BOC} = 116^\\circ$ ; $\\widehat{xOB} = 32^\\circ$ et $\\widehat{BOy} = 58^\\circ$.",
      "solution": "$\\widehat{BOC} = 180^\\circ - 64^\\circ = 116^\\circ$.\n$\\widehat{xOB} = 64^\\circ \\div 2 = 32^\\circ$ et $\\widehat{BOy} = 116^\\circ \\div 2 = 58^\\circ$.\n$$\\widehat{xOy} = 32^\\circ + 58^\\circ = 90^\\circ$$\nRemarque : on trouve toujours $90^\\circ$, car c'est la moitié de $180^\\circ$.",
      "skill": "Chercher"
    }
  ],
  "6G4": [
    {
      "id": "6G4-1",
      "chapterId": "6G4",
      "tier": 1,
      "title": "Troisième angle",
      "statement": "Dans un triangle $ABC$, $\\widehat{A} = 65^\\circ$ et $\\widehat{B} = 45^\\circ$.\n**Calculer $\\widehat{C}$ en degrés.**",
      "type": "exact",
      "answer": "70",
      "placeholder": "Ex: 70",
      "hint1": "La somme des angles d'un triangle vaut $180^\\circ$.",
      "hint2": "$180 - (65 + 45)$.",
      "solution": "$$\\widehat{C} = 180^\\circ - (65^\\circ + 45^\\circ) = 180^\\circ - 110^\\circ = 70^\\circ$$",
      "skill": "Calculer"
    },
    {
      "id": "6G4-2",
      "chapterId": "6G4",
      "tier": 2,
      "title": "Triangle rectangle",
      "statement": "$EFG$ est un triangle rectangle en $E$ et $\\widehat{F} = 37^\\circ$.\n**Calculer $\\widehat{G}$ en degrés.**",
      "type": "exact",
      "answer": "53",
      "placeholder": "Ex: 53",
      "hint1": "$\\widehat{E} = 90^\\circ$.",
      "hint2": "$180 - 90 - 37$.",
      "solution": "$$\\widehat{G} = 180^\\circ - 90^\\circ - 37^\\circ = 53^\\circ$$",
      "skill": "Calculer"
    },
    {
      "id": "6G4-3",
      "chapterId": "6G4",
      "tier": 2,
      "title": "Triangle constructible ?",
      "statement": "Avec quelles longueurs peut-on construire un triangle ?",
      "type": "mcq",
      "options": [
        "$4\\text{ cm}$, $5\\text{ cm}$ et $7\\text{ cm}$",
        "$2\\text{ cm}$, $3\\text{ cm}$ et $6\\text{ cm}$",
        "$3\\text{ cm}$, $4\\text{ cm}$ et $7\\text{ cm}$",
        "$1\\text{ cm}$, $5\\text{ cm}$ et $8\\text{ cm}$"
      ],
      "correctIndex": 0,
      "answer": "$4\\text{ cm}$, $5\\text{ cm}$ et $7\\text{ cm}$",
      "hint1": "La plus grande longueur doit être strictement inférieure à la somme des deux autres.",
      "hint2": "$4 + 5 = 9 > 7$.",
      "solution": "$4 + 5 = 9 > 7$ : constructible. Pour les autres : $2 + 3 = 5 < 6$, $3 + 4 = 7$ (points alignés), $1 + 5 = 6 < 8$.",
      "skill": "Raisonner"
    },
    {
      "id": "6G4-4",
      "chapterId": "6G4",
      "tier": 3,
      "title": "Triangle isocèle",
      "statement": "$RST$ est isocèle en $R$ et $\\widehat{RST} = 72^\\circ$.\n**Calculer l'angle au sommet principal $\\widehat{SRT}$ en degrés.**",
      "type": "exact",
      "answer": "36",
      "placeholder": "Ex: 36",
      "hint1": "Les angles à la base $\\widehat{RST}$ et $\\widehat{RTS}$ sont égaux.",
      "hint2": "$180 - 2 \\times 72$.",
      "solution": "$\\widehat{RTS} = \\widehat{RST} = 72^\\circ$, donc :\n$$\\widehat{SRT} = 180^\\circ - 2 \\times 72^\\circ = 180^\\circ - 144^\\circ = 36^\\circ$$",
      "skill": "Raisonner"
    },
    {
      "id": "6G4-5",
      "chapterId": "6G4",
      "tier": 4,
      "title": "Défi 5ème : Triangle isocèle et équilatéral accolés",
      "statement": "$ABC$ est un triangle équilatéral. À l'extérieur, on construit le triangle $BCD$ isocèle en $C$ avec $\\widehat{BCD} = 100^\\circ$.\n**Calculer $\\widehat{ABD}$ en degrés.**",
      "type": "exact",
      "answer": "100",
      "placeholder": "Ex: 100",
      "hint1": "Dans $BCD$ isocèle en $C$, calcule les angles à la base $\\widehat{CBD}$ et $\\widehat{CDB}$.",
      "hint2": "$\\widehat{CBD} = (180 - 100) \\div 2 = 40^\\circ$ et $\\widehat{ABC} = 60^\\circ$.",
      "solution": "Dans $BCD$ isocèle en $C$ : $\\widehat{CBD} = (180^\\circ - 100^\\circ) \\div 2 = 40^\\circ$.\n$ABC$ équilatéral : $\\widehat{ABC} = 60^\\circ$. Les angles sont adjacents :\n$$\\widehat{ABD} = 60^\\circ + 40^\\circ = 100^\\circ$$",
      "skill": "Chercher"
    }
  ],
  "6G5": [
    {
      "id": "6G5-1",
      "chapterId": "6G5",
      "tier": 1,
      "title": "Éléments du cube",
      "statement": "Combien d’arêtes possède un cube ?",
      "type": "exact",
      "answer": "12",
      "placeholder": "Ex: 12",
      "hint1": "Compte les arêtes de la face du dessus, du dessous, puis les arêtes verticales.",
      "hint2": "$4 + 4 + 4$.",
      "solution": "4 arêtes en haut, 4 en bas et 4 verticales : $4 + 4 + 4 = 12$ arêtes.",
      "skill": "Représenter"
    },
    {
      "id": "6G5-2",
      "chapterId": "6G5",
      "tier": 2,
      "title": "Compter par colonnes",
      "statement": "La vue de dessus d’un assemblage indique le nombre de cubes empilés dans chaque colonne : 3, 1, 2, 2, 4 et 1.\n**Combien de cubes compte l’assemblage ?**",
      "type": "exact",
      "answer": "13",
      "placeholder": "Ex: 13",
      "hint1": "Additionne les hauteurs de toutes les colonnes.",
      "hint2": "$3 + 1 + 2 + 2 + 4 + 1$.",
      "solution": "$$3 + 1 + 2 + 2 + 4 + 1 = 13 \\text{ cubes}$$",
      "skill": "Représenter"
    },
    {
      "id": "6G5-3",
      "chapterId": "6G5",
      "tier": 2,
      "title": "Patron de cube",
      "statement": "Parmi ces assemblages de 6 carrés, lequel est un patron de cube ?",
      "type": "mcq",
      "options": [
        "Une croix : une rangée de 4 carrés avec un carré au-dessus et un carré au-dessous du deuxième",
        "Une rangée de 6 carrés alignés",
        "Un rectangle de 2 rangées de 3 carrés",
        "Une rangée de 5 carrés avec un carré au-dessus du premier"
      ],
      "correctIndex": 0,
      "answer": "Une croix : une rangée de 4 carrés avec un carré au-dessus et un carré au-dessous du deuxième",
      "hint1": "Imagine le pliage : la rangée de 4 forme le tour du cube.",
      "hint2": "Les deux carrés restants doivent fermer le dessus et le dessous.",
      "solution": "La croix convient : la rangée de 4 carrés fait le tour du cube, les deux autres ferment le dessus et le dessous. Une rangée de 6 ou de 5 carrés se superposerait, et le rectangle 2 × 3 ne se ferme pas.",
      "skill": "Représenter"
    },
    {
      "id": "6G5-4",
      "chapterId": "6G5",
      "tier": 3,
      "title": "Pavé de cubes",
      "statement": "Un pavé est formé de petits cubes identiques : 4 en longueur, 3 en largeur et 5 étages.\n**Combien de petits cubes ne sont pas visibles de l’extérieur (ni sur les côtés, ni dessus, ni dessous) ?**",
      "type": "exact",
      "answer": "6",
      "placeholder": "Ex: 6",
      "hint1": "Les cubes cachés forment un pavé intérieur : on retire une couche de chaque côté.",
      "hint2": "Pavé intérieur : $(4 - 2) \\times (3 - 2) \\times (5 - 2)$.",
      "solution": "Les cubes invisibles forment un pavé de $2 \\times 1 \\times 3$ cubes :\n$$2 \\times 1 \\times 3 = 6 \\text{ cubes}$$",
      "skill": "Chercher"
    },
    {
      "id": "6G5-5",
      "chapterId": "6G5",
      "tier": 4,
      "title": "Défi 5ème : Compléter en grand cube",
      "statement": "Un assemblage est un pavé de 3 cubes en longueur, 2 en largeur et 2 étages.\n**Combien de petits cubes faut-il ajouter, au minimum, pour obtenir un grand cube plein ?**",
      "type": "exact",
      "answer": "15",
      "placeholder": "Ex: 15",
      "hint1": "Le plus petit grand cube contenant ce pavé a une arête de 3 cubes.",
      "hint2": "$3 \\times 3 \\times 3 = 27$ et le pavé contient $3 \\times 2 \\times 2 = 12$ cubes.",
      "solution": "Le plus petit cube plein qui contient le pavé a 3 cubes d'arête : $27$ cubes. Le pavé en contient $3 \\times 2 \\times 2 = 12$.\n$$27 - 12 = 15 \\text{ cubes à ajouter}$$",
      "skill": "Chercher"
    }
  ]
};

window.MATHS_WORKSHEETS_6E = {
  "6N4": [
    {
        "id": "6N4-devoir_decimaux",
        "filename": "Fiche_6e_Calculs_Decimaux.md",
        "type": "devoir_entrainement",
        "title": "Fiche 6ème : Calculer avec les nombres décimaux",
        "statement": `# Classe de 6ème — Mathématiques
## Fiche d'entraînement : Additions, soustractions et multiplications de décimaux

### Exercice 1 : Calcul mental (4 points)
Calculer sans poser l'opération :
1. $A = 3{,}6 + 0{,}4$
2. $B = 10 - 2{,}3$
3. $C = 7{,}25 \\times 100$
4. $D = 48 \\times 0{,}1$

### Exercice 2 : Calculs posés (4 points)
1. $E = 27{,}5 + 8{,}76$
2. $F = 45 - 17{,}38$
3. $G = 3{,}4 \\times 2{,}5$

### Exercice 3 : Problème (2 points)
Un rouleau de ruban mesure $5$ m. Inès en coupe $3$ morceaux de $1{,}35$ m chacun.
1. Quelle longueur de ruban a-t-elle utilisée ?
2. Quelle longueur reste-t-il sur le rouleau ?

---
## Corrigé détaillé

### Exercice 1
1. $A = 4$.
2. $B = 7{,}7$.
3. $C = 725$ (chaque chiffre avance de deux rangs).
4. $D = 4{,}8$ (multiplier par $0{,}1$ revient à diviser par $10$).

### Exercice 2
1. $E = 27{,}50 + 8{,}76 = 36{,}26$.
2. $F = 45{,}00 - 17{,}38 = 27{,}62$.
3. $34 \\times 25 = 850$ et il faut $2$ décimales : $G = 8{,}50 = 8{,}5$.

### Exercice 3
1. $3 \\times 1{,}35 = 4{,}05$ m.
2. $5 - 4{,}05 = 0{,}95$ m.`,
        "solution": ""
    }
  ],
  "6N7": [
    {
        "id": "6N7-devoir_fractions",
        "filename": "Fiche_6e_Fractions.md",
        "type": "devoir_entrainement",
        "title": "Fiche 6ème : Fractions, quotients et calculs",
        "statement": `# Classe de 6ème — Mathématiques
## Fiche d'entraînement : Fractions

### Exercice 1 : Fractions égales et comparaison (4 points)
1. Compléter : $\\frac{3}{4} = \\frac{\\dots}{12}$ et $\\frac{18}{24} = \\frac{3}{\\dots}$.
2. Comparer $\\frac{5}{6}$ et $\\frac{7}{12}$.
3. Écrire $\\frac{17}{5}$ sous la forme d'un nombre mixte, puis sous forme décimale.

### Exercice 2 : Calculs (4 points)
Calculer et donner le résultat sous forme d'une fraction simplifiée :
1. $A = \\frac{2}{9} + \\frac{5}{9}$
2. $B = \\frac{3}{4} - \\frac{1}{8}$
3. $C = 5 \\times \\frac{2}{15}$

### Exercice 3 : Problème (2 points)
Une classe compte $28$ élèves. Les $\\frac{3}{7}$ des élèves pratiquent un sport dans un club.
Combien d'élèves pratiquent un sport en club ?

---
## Corrigé détaillé

### Exercice 1
1. $\\frac{3}{4} = \\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}$ et $\\frac{18}{24} = \\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}$.
2. $\\frac{5}{6} = \\frac{10}{12}$ et $\\frac{10}{12} > \\frac{7}{12}$, donc $\\frac{5}{6} > \\frac{7}{12}$.
3. $17 = 5 \\times 3 + 2$, donc $\\frac{17}{5} = 3 + \\frac{2}{5} = 3{,}4$.

### Exercice 2
1. $A = \\frac{7}{9}$.
2. $B = \\frac{6}{8} - \\frac{1}{8} = \\frac{5}{8}$.
3. $C = \\frac{10}{15} = \\frac{2}{3}$.

### Exercice 3
$\\frac{3}{7} \\times 28 = (28 \\div 7) \\times 3 = 4 \\times 3 = 12$ élèves.`,
        "solution": ""
    }
  ],
  "6M2": [
    {
        "id": "6M2-devoir_perimetres_aires",
        "filename": "Fiche_6e_Perimetres_Aires.md",
        "type": "devoir_entrainement",
        "title": "Fiche 6ème : Périmètres et aires",
        "statement": `# Classe de 6ème — Mathématiques
## Fiche d'entraînement : Périmètres, aires et conversions

### Exercice 1 : Conversions (3 points)
1. $4{,}5 \\text{ m} = \\dots \\text{ cm}$
2. $320 \\text{ mm} = \\dots \\text{ dm}$
3. $3 \\text{ m}^2 = \\dots \\text{ dm}^2$

### Exercice 2 : Rectangle et carré (4 points)
1. Calculer le périmètre et l'aire d'un rectangle de longueur $9$ cm et de largeur $4$ cm.
2. Un carré a le même périmètre que ce rectangle. Quelle est la longueur de son côté ? Quelle est son aire ?

### Exercice 3 : Cercle (3 points)
Une roue de vélo a un diamètre de $70$ cm.
1. Donner la valeur exacte de la longueur de son contour.
2. En prenant $\\pi \\approx 3{,}14$, donner une valeur approchée de cette longueur en cm.

---
## Corrigé détaillé

### Exercice 1
1. $4{,}5 \\text{ m} = 450 \\text{ cm}$.
2. $320 \\text{ mm} = 3{,}2 \\text{ dm}$.
3. $3 \\text{ m}^2 = 300 \\text{ dm}^2$ (on multiplie par $100$ pour les aires).

### Exercice 2
1. Périmètre : $2 \\times (9 + 4) = 26$ cm. Aire : $9 \\times 4 = 36 \\text{ cm}^2$.
2. Côté du carré : $26 \\div 4 = 6{,}5$ cm. Aire : $6{,}5 \\times 6{,}5 = 42{,}25 \\text{ cm}^2$. Deux figures de même périmètre n'ont pas forcément la même aire !

### Exercice 3
1. Longueur du cercle : $\\pi \\times d = 70\\pi$ cm.
2. $70 \\times 3{,}14 = 219{,}8$ cm environ.`,
        "solution": ""
    }
  ],
  "6G4": [
    {
        "id": "6G4-devoir_angles_triangles",
        "filename": "Fiche_6e_Angles_Triangles.md",
        "type": "devoir_entrainement",
        "title": "Fiche 6ème : Angles et triangles",
        "statement": `# Classe de 6ème — Mathématiques
## Fiche d'entraînement : Angles, triangles particuliers et somme des angles

### Exercice 1 : Vocabulaire des angles (3 points)
Donner la nature (aigu, droit, obtus, plat) des angles mesurant : $35^\\circ$ ; $90^\\circ$ ; $128^\\circ$ ; $180^\\circ$.

### Exercice 2 : Somme des angles d'un triangle (4 points)
1. Dans un triangle $RST$, $\\widehat{R} = 52^\\circ$ et $\\widehat{S} = 71^\\circ$. Calculer $\\widehat{T}$.
2. Le triangle $ABC$ est isocèle en $A$ et $\\widehat{BAC} = 40^\\circ$. Calculer $\\widehat{ABC}$.

### Exercice 3 : Construction (3 points)
1. Peut-on construire un triangle dont les côtés mesurent $3$ cm, $4$ cm et $8$ cm ? Justifier.
2. Que peut-on dire des trois médiatrices d'un triangle ?

---
## Corrigé détaillé

### Exercice 1
$35^\\circ$ : aigu ; $90^\\circ$ : droit ; $128^\\circ$ : obtus ; $180^\\circ$ : plat.

### Exercice 2
1. $\\widehat{T} = 180^\\circ - (52^\\circ + 71^\\circ) = 180^\\circ - 123^\\circ = 57^\\circ$.
2. Les angles à la base d'un triangle isocèle sont égaux : $\\widehat{ABC} = (180^\\circ - 40^\\circ) \\div 2 = 70^\\circ$.

### Exercice 3
1. Non : $3 + 4 = 7$ est inférieur à $8$, les deux petits côtés ne peuvent pas se rejoindre.
2. Elles sont concourantes : elles se coupent en un même point, centre du cercle circonscrit au triangle.`,
        "solution": ""
    }
  ]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_6E);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_6E);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_6E);
