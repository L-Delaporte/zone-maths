/**
 * Données pédagogiques de la classe de 6ème (cycle 3, dernière année)
 * Conformes au programme de mathématiques du cycle 3 (arrêté du 10 avril 2025,
 * BO n° 16 du 17 avril 2025), applicable en 6e depuis la rentrée 2025.
 * Contenus originaux : cours, exercices par paliers (Palier 4 : « Défi ») et fiches.
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
        "content": "• Une **fraction décimale** est une fraction dont le dénominateur est $1$, $10$, $100$, $1\\,000$…\n• $\\frac{1}{10} = 0{,}1$ (un dixième), $\\frac{1}{100} = 0{,}01$ (un centième), $\\frac{1}{1\\,000} = 0{,}001$ (un millième).\n• Un **nombre décimal** est un nombre qui peut s'écrire avec une fraction décimale. Exemple :\n$$38{,}407 = 38 + \\frac{4}{10} + \\frac{7}{1\\,000} = \\frac{38\\,407}{1\\,000}$$\n• Un nombre entier est aussi un nombre décimal : $7 = \\frac{7}{1} = \\frac{70}{10}$.\n• Dans $38{,}407$ : la **partie entière** est $38$, la **partie décimale** est $0{,}407$. Le chiffre des centièmes est $0$, le **nombre** de centièmes est $3\\,840$."
      },
      {
        "title": "3. Nombres mixtes et pourcentages",
        "content": "• Un nombre peut s'écrire comme la somme d'un entier et d'une fraction inférieure à 1 : c'est un **nombre mixte**. Exemple : $\\frac{17}{10} = 1 + \\frac{7}{10} = 1{,}7$.\n• **Pourcentage** : « $t$ % » signifie « $t$ pour cent », c'est-à-dire la fraction $\\frac{t}{100}$.\n$$25\\,\\% = \\frac{25}{100} = 0{,}25 \\qquad 50\\,\\% = \\frac{1}{2} \\qquad 10\\,\\% = \\frac{1}{10}$$\n• Un même nombre a donc plusieurs écritures : $0{,}75 = \\frac{75}{100} = \\frac{3}{4} = 75\\,\\%$."
      },
      {
        "title": "À retenir",
        "content": "• La valeur d'un chiffre dépend de son **rang** ; chaque rang vaut $10$ fois le rang situé à sa droite.\n• Ne pas confondre **chiffre** des dizaines et **nombre** de dizaines.\n• $\\frac{1}{10} = 0{,}1$ ; $\\frac{1}{100} = 0{,}01$ ; $\\frac{1}{1\\,000} = 0{,}001$ ; $t\\,\\% = \\frac{t}{100}$."
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
        "content": "• Une **demi-droite graduée** a une **origine** (le point d'abscisse $0$) et une **unité de longueur** reportée régulièrement.\n• Le nombre qui repère un point est son **abscisse**. On note $A(2{,}5)$.\n• Si l'unité est partagée en $10$, chaque petite graduation vaut $0{,}1$ ; si elle est partagée en $4$, chaque graduation vaut $0{,}25$.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 440 90\" width=\"440\" height=\"90\" style=\"max-width:440px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Demi-droite graduée de 0 à 3, unité partagée en 5 ; points A d'abscisse 0,4 et M d'abscisse 2,6\">\n<line x1=\"30\" y1=\"48\" x2=\"432\" y2=\"48\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<path d=\"M 432 48 l -9 -5 v 10 z\" fill=\"var(--text-main, #334155)\"/>\n<line x1=\"30.0\" y1=\"40\" x2=\"30.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"30.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">0</text>\n<line x1=\"54.4\" y1=\"43\" x2=\"54.4\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"78.8\" y1=\"43\" x2=\"78.8\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"103.2\" y1=\"43\" x2=\"103.2\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"127.6\" y1=\"43\" x2=\"127.6\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"152.0\" y1=\"40\" x2=\"152.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"152.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">1</text>\n<line x1=\"176.4\" y1=\"43\" x2=\"176.4\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"200.8\" y1=\"43\" x2=\"200.8\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"225.2\" y1=\"43\" x2=\"225.2\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"249.6\" y1=\"43\" x2=\"249.6\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"274.0\" y1=\"40\" x2=\"274.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"274.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">2</text>\n<line x1=\"298.4\" y1=\"43\" x2=\"298.4\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"322.8\" y1=\"43\" x2=\"322.8\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"347.2\" y1=\"43\" x2=\"347.2\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"371.6\" y1=\"43\" x2=\"371.6\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"396.0\" y1=\"40\" x2=\"396.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"396.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">3</text>\n<circle cx=\"347.2\" cy=\"48\" r=\"4.5\" fill=\"#2563eb\"/>\n<text x=\"347.2\" y=\"32\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">M(2,6)</text>\n<circle cx=\"78.8\" cy=\"48\" r=\"4.5\" fill=\"#059669\"/>\n<text x=\"78.8\" y=\"32\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">A(0,4)</text>\n</svg>\n</div>\nIci l'unité est partagée en $5$ : une graduation vaut $1 \\div 5 = 0{,}2$."
      },
      {
        "title": "2. Comparer et ranger",
        "content": "• Pour comparer deux décimaux, on compare d'abord les **parties entières**. Si elles sont égales, on compare les chiffres des **dixièmes**, puis des **centièmes**, etc.\n$$12{,}4 > 9{,}87 \\qquad 5{,}38 < 5{,}4 \\quad (3 \\text{ dixièmes} < 4 \\text{ dixièmes})$$\n• Astuce : compléter avec des zéros pour avoir autant de décimales : $5{,}38$ et $5{,}40$.\n• Ranger dans l'**ordre croissant** : du plus petit au plus grand (symbole $<$) ; **décroissant** : du plus grand au plus petit (symbole $>$)."
      },
      {
        "title": "3. Encadrer, intercaler, arrondir",
        "content": "• **Encadrer** $7{,}36$ à l'unité : $7 < 7{,}36 < 8$ ; au dixième : $7{,}3 < 7{,}36 < 7{,}4$.\n• **Intercaler** : entre deux décimaux distincts, on peut toujours trouver un autre décimal : entre $2{,}4$ et $2{,}5$ il y a $2{,}45$.\n• **Arrondir** à un rang, c'est choisir la valeur de l'encadrement la plus **proche**. On regarde le chiffre suivant : s'il vaut $0, 1, 2, 3$ ou $4$, on garde la valeur inférieure ; s'il vaut $5, 6, 7, 8$ ou $9$, on prend la valeur supérieure.\n$$7{,}36 \\approx 7{,}4 \\text{ (au dixième)} \\qquad 7{,}36 \\approx 7 \\text{ (à l'unité)}$$\n• On arrondit de la même façon certains nombres **non décimaux**, dont l'écriture à virgule ne s'arrête jamais : $\\frac{1}{3} = 0{,}333\\ldots \\approx 0{,}33$ au centième, et $\\pi = 3{,}14159\\ldots \\approx 3{,}14$ au centième."
      },
      {
        "title": "À retenir",
        "content": "• Comparer : parties entières d'abord, puis dixièmes, centièmes…\n• Arrondir : on regarde **le chiffre juste après** le rang demandé ($0$ à $4$ : on garde ; $5$ à $9$ : on augmente).\n• Sur une demi-droite graduée, calculer d'abord la valeur d'**une** graduation."
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
      },
      {
        "title": "Méthode : Encadrer et arrondir un nombre décimal",
        "example": "Encadrer $15{,}647$ au dixième, puis l'arrondir au dixième et au centième.",
        "steps": [
          "**Étape 1** : Encadrement au dixième : $15{,}6 < 15{,}647 < 15{,}7$.",
          "**Étape 2** : Au dixième, on regarde le chiffre des **centièmes** : c'est $4$, donc on garde la valeur inférieure : $15{,}647 \\approx 15{,}6$.",
          "**Étape 3** : Au centième, on regarde le chiffre des **millièmes** : c'est $7$, donc on prend la valeur supérieure : $15{,}647 \\approx 15{,}65$."
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
      },
      {
        "title": "À retenir",
        "content": "• On aligne les **virgules** (chiffres de même rang) et on complète par des zéros.\n• On contrôle avec un **ordre de grandeur**.\n• Chercher un complément, c'est calculer une différence."
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
      },
      {
        "title": "Méthode : Résoudre un problème de rendu de monnaie",
        "example": "Léa achète un livre à $8{,}75$ € et un stylo à $3{,}90$ €. Elle paie avec un billet de $20$ €. Combien lui rend-on ?",
        "steps": [
          "**Étape 1** : Prix total : $8{,}75 + 3{,}90 = 12{,}65$ €. Ordre de grandeur : $9 + 4 = 13$.",
          "**Étape 2** : Monnaie rendue : $20 - 12{,}65 = 7{,}35$ €.",
          "**Vérification** : $12{,}65 + 7{,}35 = 20$ €."
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
      "Comprendre le produit de deux décimaux à partir de l'aire d'un rectangle et de l'égalité $0{,}1 \\times 0{,}1 = 0{,}01$.",
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
        "content": "• Multiplier par $0{,}1$, c'est prendre **un dixième** du nombre : c'est la même chose que **diviser par 10**.\n$$46 \\times 0{,}1 = 46 \\div 10 = 4{,}6 \\qquad 46 \\times 0{,}01 = 0{,}46 \\qquad 46 \\times 0{,}001 = 0{,}046$$\n• Attention : pour un nombre de départ positif non nul, multiplier par un nombre inférieur à $1$ donne un résultat **plus petit** que ce nombre."
      },
      {
        "title": "3. Produit de deux décimaux",
        "content": "• **Avec l'aire d'un rectangle.** Un rectangle mesure $3{,}7\\text{ dm}$ sur $2{,}9\\text{ dm}$. En centimètres, il mesure $37\\text{ cm}$ sur $29\\text{ cm}$ : son aire est $37 \\times 29 = 1\\,073\\text{ cm}^2$. Un carré de $1\\text{ dm}$ de côté se pave par $10$ rangées de $10$ carrés de $1\\text{ cm}$ de côté : $1\\text{ dm}^2 = 100\\text{ cm}^2$. Cette aire vaut donc $10{,}73\\text{ dm}^2$. Ainsi :\n$$3{,}7 \\times 2{,}9 = 10{,}73$$\n• **Un dixième d'un dixième.** Un carré de $0{,}1\\text{ dm}$ de côté est un carré de $1\\text{ cm}$ de côté : son aire est $1\\text{ cm}^2$, soit $0{,}01\\text{ dm}^2$. Donc :\n$$0{,}1 \\times 0{,}1 = 0{,}01$$\nDe même, $0{,}1 \\times 0{,}01 = 0{,}001$ : un dixième d'un centième, c'est un millième.\n• **On décompose.** Pour calculer $0{,}4 \\times 0{,}3$, on regroupe les entiers d'un côté et les $0{,}1$ de l'autre :\n$$0{,}4 \\times 0{,}3 = 4 \\times 0{,}1 \\times 3 \\times 0{,}1 = (4 \\times 3) \\times (0{,}1 \\times 0{,}1) = 12 \\times 0{,}01 = 0{,}12$$\n• **Conclusion : la règle.** Chaque décimale d'un facteur correspond à une multiplication par $0{,}1$. On multiplie donc les nombres **sans tenir compte des virgules**, puis on place la virgule pour que le résultat ait **autant de chiffres après la virgule** qu'il y en a au total dans les deux facteurs.\n$$2{,}3 \\times 1{,}25 : \\quad 23 \\times 125 = 2\\,875 \\quad \\text{donc} \\quad 2{,}3 \\times 1{,}25 = 2{,}875$$\n(1 décimale + 2 décimales = 3 décimales.)\n• Le résultat d'une multiplication est un **produit** ; les nombres multipliés sont les **facteurs**."
      },
      {
        "title": "À retenir",
        "content": "• $\\times 10$, $\\times 100$, $\\times 1\\,000$ : les chiffres avancent de $1$, $2$, $3$ rangs ; $\\times 0{,}1$ revient à $\\div 10$.\n• $0{,}1 \\times 0{,}1 = 0{,}01$, ce que montre l'aire d'un carré de $0{,}1\\text{ dm}$ de côté.\n• Produit de décimaux : on calcule sans virgule, puis le résultat a **autant de décimales** que les deux facteurs réunis.\n• Pour un nombre de départ positif non nul, multiplier par un nombre inférieur à $1$ donne un résultat plus petit."
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
          "**Étape 2** : Il reste $1 \\times 7{,}3 = 7{,}3$.",
          "**Étape 3** : Donc $0{,}25 \\times 7{,}3 \\times 4 = 7{,}3$. On peut changer l'ordre des facteurs d'un produit sans changer le résultat."
        ]
      },
      {
        "title": "Méthode : Résoudre un problème avec un produit de décimaux",
        "example": "Des pommes coûtent $3{,}80$ € le kilogramme. Combien paie-t-on pour $1{,}5\\text{ kg}$ ?",
        "steps": [
          "**Étape 1** : Ordre de grandeur : $4 \\times 1{,}5 = 6$ €.",
          "**Étape 2** : Sans les virgules : $38 \\times 15 = 570$.",
          "**Étape 3** : $1 + 1 = 2$ décimales : $3{,}80 \\times 1{,}5 = 5{,}70$ €, cohérent avec $6$ €."
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
      { "q": "Multiplier par $0{,}5$, c'est…", "a": "Prendre la moitié : $18 \\times 0{,}5 = 9$." },
      { "q": "Pourquoi $0{,}1 \\times 0{,}1 = 0{,}01$ ?", "a": "Un carré de $0{,}1\\text{ dm}$ de côté est un carré de $1\\text{ cm}$ de côté : son aire est $1\\text{ cm}^2$, soit $0{,}01\\text{ dm}^2$." },
      { "q": "Calculer $0{,}4 \\times 0{,}3$ en décomposant.", "a": "$(4 \\times 3) \\times (0{,}1 \\times 0{,}1) = 12 \\times 0{,}01 = 0{,}12$." }
    ]
  },
  "6N5": {
    "title": "6N5 : Division euclidienne, division décimale, multiples et diviseurs",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Effectuer la division euclidienne d'un entier par un entier inférieur à $100$ et écrire l'égalité $a = b \\times q + r$ avec $r < b$.",
      "Reconnaître les multiples et les diviseurs d'un nombre entier ; utiliser les critères de divisibilité par $2$, $5$ et $10$.",
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
        "content": "• Si le reste de la division de $a$ par $b$ est **nul**, on dit que $a$ est un **multiple** de $b$, que $b$ est un **diviseur** de $a$ et que $a$ est **divisible** par $b$. Exemple : $42 = 6 \\times 7$.\n• **Critères de divisibilité** :\n  – par $2$ : le chiffre des unités est $0, 2, 4, 6$ ou $8$ ;\n  – par $5$ : le chiffre des unités est $0$ ou $5$ ;\n  – par $10$ : le chiffre des unités est $0$."
      },
      {
        "title": "3. Division décimale",
        "content": "• On peut continuer une division au-delà de la virgule en transformant le reste en dixièmes, centièmes… : $17 \\div 4 = 4{,}25$.\n• Pour diviser un décimal par un entier, on place la virgule au quotient **dès qu'on abaisse le chiffre des dixièmes** :\n$$25{,}2 \\div 6 = 4{,}2 \\qquad \\text{car} \\quad 6 \\times 4{,}2 = 25{,}2$$\n• Le quotient n'est pas toujours décimal : $10 \\div 3 = 3{,}333\\dots$ ; on donne alors une valeur approchée."
      },
      {
        "title": "4. Les deux sens de la division",
        "content": "Une même division peut répondre à **deux questions différentes**. Prenons le calcul $84 \\div 7 = 12$ :\n• **Partage** (division-partition) : on connaît le **nombre de parts** et on cherche la **taille d'une part**. On répartit équitablement $84$ élèves en $7$ équipes : chaque équipe compte $12$ élèves.\n• **Groupement** (division-quotition) : on connaît la **taille d'une part** et on cherche le **nombre de parts**, c'est-à-dire combien de fois $7$ est contenu dans $84$. On forme des équipes de $7$ élèves : on obtient $12$ équipes.\n• Le calcul est le même, seule la signification du résultat change : $12$ élèves par équipe dans le premier cas, $12$ équipes dans le second. Dans les deux cas, $7 \\times 12 = 84$."
      },
      {
        "title": "À retenir",
        "content": "• $a = b \\times q + r$ avec $r < b$.\n• Critères de divisibilité par $2$, $5$ et $10$ : on regarde le chiffre des unités.\n• Division décimale : on place la virgule au quotient quand on abaisse le chiffre des dixièmes.\n• Une division répond à deux questions : **partage** (on cherche la taille d'une part) ou **groupement** (on cherche le nombre de parts)."
      },
      {
        "title": "Pour aller plus loin : critères par 3 et par 9 (étudiés en 5e)",
        "content": "Ces deux critères ne sont pas exigés en 6e : ils seront étudiés en 5e.\n• Un nombre est divisible par $3$ si la **somme de ses chiffres** est un multiple de $3$.\n• Un nombre est divisible par $9$ si la **somme de ses chiffres** est un multiple de $9$.\n• Exemple : pour $4\\,572$, on a $4 + 5 + 7 + 2 = 18$, et $18$ est un multiple de $3$ et de $9$ : $4\\,572$ est donc divisible par $3$ et par $9$.\n• Attention, ces critères ne portent pas sur le chiffre des unités : $13$ se termine par $3$, mais il n'est pas divisible par $3$."
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
        "title": "Méthode : Reconnaître un partage ou un groupement",
        "example": "Deux énoncés, un même calcul. **A** : on répartit équitablement $230$ œufs entre $12$ restaurants ; combien d'œufs reçoit chaque restaurant ? **B** : on range $230$ œufs dans des boîtes de $12$ ; combien de boîtes pleines obtient-on ?",
        "steps": [
          "**Étape 1** : On repère ce que l'on connaît. En A, c'est le **nombre de parts** ($12$ restaurants) : c'est un **partage**, on cherche la taille d'une part. En B, c'est la **taille d'une part** ($12$ œufs par boîte) : c'est un **groupement**, on cherche le nombre de parts.",
          "**Étape 2** : Dans les deux cas, on effectue la même division euclidienne : $230 = 12 \\times 19 + 2$, et $2 < 12$.",
          "**Étape 3** : On interprète le quotient selon la situation. En A, chaque restaurant reçoit $19$ œufs. En B, on obtient $19$ boîtes pleines. Dans les deux cas, il reste $2$ œufs."
        ]
      },
      {
        "title": "Méthode : Tester la divisibilité par 2, 5 ou 10",
        "example": "$4\\,570$ et $4\\,575$ sont-ils divisibles par $2$ ? par $5$ ? par $10$ ?",
        "steps": [
          "**Étape 1** : On regarde uniquement le **chiffre des unités** : $0$ pour $4\\,570$ et $5$ pour $4\\,575$.",
          "**Étape 2** : $4\\,570$ se termine par $0$ : il est divisible par $2$, par $5$ et par $10$.",
          "**Étape 3** : $4\\,575$ se termine par $5$ : il est divisible par $5$, mais ni par $2$ (son chiffre des unités est impair), ni par $10$."
        ]
      },
      {
        "title": "Méthode : Diviser un nombre décimal par un entier",
        "example": "Calculer $17{,}5 \\div 4$.",
        "steps": [
          "**Étape 1** : $17 \\div 4$ : quotient $4$, reste $1$ ($4 \\times 4 = 16$).",
          "**Étape 2** : On abaisse le chiffre des dixièmes ($5$) : on place la **virgule** au quotient. $15$ dixièmes $\\div 4$ : $3$, reste $3$.",
          "**Étape 3** : On ajoute un zéro : $30$ centièmes $\\div 4$ : $7$, reste $2$ ; puis $20$ millièmes $\\div 4$ : $5$, reste $0$.",
          "**Conclusion** : $17{,}5 \\div 4 = 4{,}375$. Vérification : $4 \\times 4{,}375 = 17{,}5$."
        ]
      }
    ],
    "traps": [
      "⚠️ Le reste doit toujours être **strictement inférieur** au diviseur : $50 = 7 \\times 6 + 8$ n'est pas une division euclidienne par $7$ car $8 > 7$.",
      "⚠️ Ne pas confondre « $a$ est un multiple de $b$ » et « $a$ est un diviseur de $b$ » : $24$ est un multiple de $6$, $6$ est un diviseur de $24$.",
      "⚠️ Les critères par $2$, $5$ et $10$ portent sur le **chiffre des unités**, pas sur le premier chiffre : $512$ commence par $5$, mais il n'est pas divisible par $5$.",
      "⚠️ Dans une division décimale, ne pas oublier les zéros au quotient : $6{,}3 \\div 3 = 2{,}1$ mais $6{,}03 \\div 3 = 2{,}01$."
    ],
    "flashcards": [
      { "q": "Écrire l'égalité de la division euclidienne de $47$ par $5$.", "a": "$47 = 5 \\times 9 + 2$ (quotient $9$, reste $2$)." },
      { "q": "$135$ est-il divisible par $5$ ? par $2$ ?", "a": "Oui par $5$ (son chiffre des unités est $5$) et non par $2$ (son chiffre des unités est impair)." },
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
        "content": "• Dans la fraction $\\frac{a}{b}$ ($b \\neq 0$), $a$ est le **numérateur** et $b$ le **dénominateur**. Si $b = 1$, la fraction est égale à son numérateur : $\\frac{7}{1} = 7$.\n• $\\frac{a}{b}$ est le **quotient** de $a$ par $b$ : c'est le nombre qui, multiplié par $b$, donne $a$.\n$$7 \\times \\frac{3}{7} = 3 \\qquad \\text{et} \\qquad \\frac{3}{4} = 3 \\div 4 = 0{,}75$$\n• Une fraction peut être :\n  – un **nombre entier** : $\\frac{12}{4} = 3$ ;\n  – un **nombre décimal non entier** : $\\frac{3}{4} = 0{,}75$ ;\n  – un nombre **qui n'est pas décimal** : $\\frac{1}{3} = 0{,}333\\ldots$ (la division ne s'arrête jamais).\n• Pour un nombre qui n'est pas décimal, on peut donner un **arrondi** : $\\frac{1}{3} \\approx 0{,}33$ et $\\frac{2}{3} \\approx 0{,}67$ au centième. C'est une valeur approchée : on écrit $\\approx$ et non $=$."
      },
      {
        "title": "2. Repérer une fraction sur une demi-droite graduée",
        "content": "Pour placer $\\frac{a}{b}$ sur une demi-droite graduée d'origine $0$ :\n• on partage **l'unité** (le segment de $0$ à $1$) en $b$ parts égales ;\n• on reporte $a$ de ces parts à partir de l'origine.\nExemple : pour $\\frac{7}{4}$, l'unité est partagée en $4$ et on compte $7$ quarts : le point est situé entre $1$ et $2$, car $\\frac{4}{4} = 1$ et $\\frac{8}{4} = 2$.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 380 90\" width=\"380\" height=\"90\" style=\"max-width:380px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Demi-droite graduée de 0 à 2, unité partagée en 4 ; le point A est placé à sept quarts\">\n<line x1=\"30\" y1=\"48\" x2=\"372\" y2=\"48\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<path d=\"M 372 48 l -9 -5 v 10 z\" fill=\"var(--text-main, #334155)\"/>\n<line x1=\"30.0\" y1=\"40\" x2=\"30.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"30.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">0</text>\n<line x1=\"68.3\" y1=\"43\" x2=\"68.3\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"106.5\" y1=\"43\" x2=\"106.5\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"144.8\" y1=\"43\" x2=\"144.8\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"183.0\" y1=\"40\" x2=\"183.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"183.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">1</text>\n<line x1=\"221.3\" y1=\"43\" x2=\"221.3\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"259.5\" y1=\"43\" x2=\"259.5\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"297.8\" y1=\"43\" x2=\"297.8\" y2=\"53\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\"/>\n<line x1=\"336.0\" y1=\"40\" x2=\"336.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"336.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">2</text>\n<circle cx=\"297.8\" cy=\"48\" r=\"4.5\" fill=\"#dc2626\"/>\n<text x=\"297.8\" y=\"32\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">A</text>\n<circle cx=\"68.3\" cy=\"48\" r=\"4.5\" fill=\"#059669\"/>\n<text x=\"68.3\" y=\"32\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">1/4</text>\n</svg>\n</div>\n**Partager l'unité sans calcul : le guide-âne.** On pose le segment sur des lignes parallèles régulièrement espacées (les lignes d'un cahier). Pour le partager en $5$ parts égales, on place une extrémité sur une ligne et l'autre sur la cinquième ligne suivante : les lignes intermédiaires découpent le segment en $5$ parts égales."
      },
      {
        "title": "3. Fractions égales et nombres mixtes",
        "content": "• On obtient une fraction égale en **multipliant ou en divisant** le numérateur et le dénominateur **par un même nombre non nul** :\n$$\\frac{3}{5} = \\frac{3 \\times 4}{5 \\times 4} = \\frac{12}{20} \\qquad \\frac{18}{24} = \\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}$$\n• **Simplifier** une fraction, c'est écrire une fraction égale avec des nombres plus petits (on utilise les tables et les critères de divisibilité). **Simplifier au maximum**, c'est continuer jusqu'à ce que le numérateur et le dénominateur n'aient plus de diviseur commun autre que $1$ : par exemple, $\\frac{18}{24}$ se simplifie au maximum en $\\frac{3}{4}$.\n• **Nombre mixte** : une fraction plus grande que $1$ s'écrit comme la somme d'un entier et d'une fraction plus petite que $1$. Comme $17 = 3 \\times 5 + 2$ :\n$$\\frac{17}{5} = 3 + \\frac{2}{5}$$"
      },
      {
        "title": "4. Comparer et encadrer des fractions",
        "content": "• **Même dénominateur** : la plus grande fraction est celle qui a le plus grand numérateur : $\\frac{7}{9} > \\frac{4}{9}$.\n• **Comparaison à 1** : si le numérateur est plus grand que le dénominateur, la fraction est plus grande que $1$ : $\\frac{8}{5} > 1 > \\frac{4}{5}$.\n• **Comparaison à $\\frac{1}{2}$** : on compare le double du numérateur au dénominateur : $\\frac{4}{9} < \\frac{1}{2}$ car $2 \\times 4 = 8$ est plus petit que $9$, et $\\frac{5}{8} > \\frac{1}{2}$ car $2 \\times 5 = 10$ est plus grand que $8$.\n• **Dénominateurs multiples l'un de l'autre** : on transforme une fraction pour obtenir le même dénominateur : $\\frac{2}{3} = \\frac{8}{12}$ donc $\\frac{2}{3} > \\frac{7}{12}$.\n• **Encadrer entre deux entiers consécutifs** : $\\frac{23}{6}$ est entre $\\frac{18}{6} = 3$ et $\\frac{24}{6} = 4$, donc $3 < \\frac{23}{6} < 4$."
      },
      {
        "title": "À retenir",
        "content": "• $\\frac{a}{b}$ est le nombre qui, multiplié par $b$, donne $a$.\n• Fractions égales : on multiplie ou on divise **numérateur et dénominateur** par un même nombre.\n• Même dénominateur : on compare les numérateurs."
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
      { "q": "Que signifie $\\frac{5}{8}$ comme quotient ?", "a": "C'est le nombre qui, multiplié par $8$, donne $5$ : $8 \\times \\frac{5}{8} = 5$. On a aussi $\\frac{5}{8} = 5 \\div 8 = 0{,}625$." },
      { "q": "Quel nombre manque : $9 \\times \\ldots = 4$ ?", "a": "$\\frac{4}{9}$, car $9 \\times \\frac{4}{9} = 4$." },
      { "q": "Simplifier $\\frac{15}{25}$.", "a": "$\\frac{15}{25} = \\frac{15 \\div 5}{25 \\div 5} = \\frac{3}{5}$." },
      { "q": "Écrire $\\frac{11}{4}$ sous forme de nombre mixte.", "a": "$11 = 2 \\times 4 + 3$, donc $\\frac{11}{4} = 2 + \\frac{3}{4}$." },
      { "q": "Quel est le plus grand : $\\frac{1}{6}$ ou $\\frac{1}{4}$ ?", "a": "$\\frac{1}{4}$ : avec le même numérateur, le plus petit dénominateur donne la plus grande fraction." },
      { "q": "$\\frac{1}{3}$ est-il un nombre décimal ?", "a": "Non : $1 \\div 3 = 0{,}333\\ldots$ ne s'arrête jamais. $\\frac{1}{3}$ n'est pas un nombre décimal." },
      { "q": "Donner l'arrondi de $\\frac{1}{3}$ au centième.", "a": "$\\frac{1}{3} = 0{,}333\\ldots$ : le chiffre des millièmes est $3$, on garde la valeur inférieure. Donc $\\frac{1}{3} \\approx 0{,}33$." }
    ]
  },
  "6N7": {
    "title": "6N7 : Calculs avec les fractions",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Additionner et soustraire des fractions de même dénominateur.",
      "Additionner et soustraire des fractions dont un dénominateur est multiple de l'autre.",
      "Additionner et soustraire des fractions de dénominateurs quelconques, dans des cas simples.",
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
        "title": "3. Dénominateurs quelconques (cas simples)",
        "content": "Quand aucun des deux dénominateurs n'est multiple de l'autre, on cherche un **multiple commun** aux deux dénominateurs ; leur **produit** convient toujours. On écrit alors les deux fractions avec ce dénominateur commun :\n$$\\frac{2}{3} + \\frac{3}{4} = \\frac{2 \\times 4}{3 \\times 4} + \\frac{3 \\times 3}{4 \\times 3} = \\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}$$\n$$\\frac{5}{2} - \\frac{2}{3} = \\frac{5 \\times 3}{2 \\times 3} - \\frac{2 \\times 2}{3 \\times 2} = \\frac{15}{6} - \\frac{4}{6} = \\frac{11}{6}$$\nUn multiple commun plus petit que le produit allège les calculs : pour $\\frac{1}{4} + \\frac{1}{6}$, on peut prendre $12$, et $\\frac{1}{4} + \\frac{1}{6} = \\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$."
      },
      {
        "title": "4. Multiplier une fraction par un entier",
        "content": "Pour multiplier une fraction par un nombre entier, on multiplie **seulement le numérateur** :\n$$3 \\times \\frac{2}{7} = \\frac{3 \\times 2}{7} = \\frac{6}{7}$$\nC'est une addition répétée : $\\frac{2}{7} + \\frac{2}{7} + \\frac{2}{7} = \\frac{6}{7}$."
      },
      {
        "title": "5. Prendre une fraction d'une quantité",
        "content": "Prendre $\\frac{a}{b}$ d'une quantité, c'est **multiplier** cette quantité par $\\frac{a}{b}$. On peut diviser d'abord par $b$, puis multiplier par $a$ :\n$$\\frac{3}{4} \\text{ de } 20 = \\frac{3}{4} \\times 20 = (20 \\div 4) \\times 3 = 5 \\times 3 = 15$$\nOn peut aussi multiplier d'abord : $(3 \\times 20) \\div 4 = 60 \\div 4 = 15$."
      },
      {
        "title": "6. Inventer un problème",
        "content": "Inventer un problème, c'est écrire un énoncé dont la réponse se calcule par une opération donnée. On part du **sens** du calcul :\n• $\\frac{3}{4} \\times 20$ revient à prendre les $\\frac{3}{4}$ de $20$. Énoncé possible : « Une boîte contient $20$ crayons ; les $\\frac{3}{4}$ sont rouges. Combien y a-t-il de crayons rouges ? » (réponse : $15$).\n• $\\frac{2}{7} + \\frac{3}{7}$ regroupe deux parts d'un même tout. Énoncé possible : « Une tarte est partagée en $7$ parts égales ; Tom en mange $2$ et Lina $3$. Quelle fraction de la tarte a été mangée ? » (réponse : $\\frac{5}{7}$).\nOn vérifie ensuite que la question posée correspond bien au calcul : « Combien en reste-t-il ? » demanderait un autre calcul."
      },
      {
        "title": "À retenir",
        "content": "• Même dénominateur : on additionne les numérateurs, on **garde** le dénominateur.\n• Dénominateurs multiples : on transforme d'abord une des fractions.\n• Dénominateurs quelconques (cas simples) : on écrit les deux fractions avec un multiple commun des dénominateurs.\n• $\\frac{a}{b}$ d'une quantité $= $ quantité $\\div b \\times a$."
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
        "title": "Méthode : Additionner deux fractions de dénominateurs quelconques",
        "example": "Calculer $\\frac{3}{4} + \\frac{2}{5}$.",
        "steps": [
          "**Étape 1** : $4$ et $5$ ne sont pas multiples l'un de l'autre. On prend un multiple commun : $4 \\times 5 = 20$.",
          "**Étape 2** : On écrit les deux fractions avec le dénominateur $20$ : $\\frac{3}{4} = \\frac{15}{20}$ et $\\frac{2}{5} = \\frac{8}{20}$.",
          "**Étape 3** : On additionne les numérateurs : $\\frac{15}{20} + \\frac{8}{20} = \\frac{23}{20}$.",
          "**Conclusion** : $23$ et $20$ n'ont pas de diviseur commun autre que $1$ : le résultat est $\\frac{23}{20}$."
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
      "⚠️ $\\frac{1}{2} + \\frac{1}{3}$ ne fait pas $\\frac{2}{5}$ : avec un dénominateur commun, $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.",
      "⚠️ Pour multiplier une fraction par un entier, on ne multiplie pas le dénominateur : $2 \\times \\frac{3}{5} = \\frac{6}{5}$ et non $\\frac{6}{10}$.",
      "⚠️ « Les $\\frac{2}{3}$ de $30$ » se calcule par une multiplication ($20$), pas par une division de $30$ par $\\frac{2}{3}$."
    ],
    "flashcards": [
      { "q": "Calculer $\\frac{4}{11} + \\frac{5}{11}$.", "a": "$\\frac{9}{11}$ : on additionne les numérateurs et on garde le dénominateur." },
      { "q": "Calculer $\\frac{1}{2} + \\frac{1}{4}$.", "a": "$\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$." },
      { "q": "Calculer $\\frac{1}{3} + \\frac{1}{2}$.", "a": "Un multiple commun de $3$ et $2$ est $6$ : $\\frac{2}{6} + \\frac{3}{6} = \\frac{5}{6}$." },
      { "q": "Calculer $4 \\times \\frac{2}{9}$.", "a": "$\\frac{8}{9}$ (on multiplie seulement le numérateur)." },
      { "q": "Combien valent les $\\frac{2}{3}$ de $30$ ?", "a": "$30 \\div 3 = 10$, puis $10 \\times 2 = 20$." },
      { "q": "Calculer $1 - \\frac{3}{8}$.", "a": "$1 = \\frac{8}{8}$, donc $\\frac{8}{8} - \\frac{3}{8} = \\frac{5}{8}$." }
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
        "content": "Une **égalité à trou** contient un nombre inconnu. On le retrouve grâce au lien entre les opérations :\n• $\\ldots + 27 = 63$ : le nombre cherché est $63 - 27 = 36$ ;\n• $\\ldots - 15 = 40$ : le nombre cherché est $40 + 15 = 55$ ;\n• $8 \\times \\ldots = 56$ : le nombre cherché est $56 \\div 8 = 7$ ;\n• $\\ldots \\div 4 = 9$ : le nombre cherché est $9 \\times 4 = 36$.\nOn **vérifie** toujours en remplaçant les pointillés par le nombre trouvé.\nUne égalité se représente aussi par une **balance en équilibre** : on peut enlever la même masse sur les deux plateaux sans rompre l'équilibre. Exemple pour $\\ldots + 5 = 12$ : un plateau porte un objet inconnu et $5$ kg, l'autre $12$ kg. En enlevant $5$ kg de chaque côté, il reste l'objet d'un côté et $7$ kg de l'autre : le nombre cherché est $7$."
      },
      {
        "title": "2. Programme de calcul",
        "content": "Un **programme de calcul** est une suite d'instructions appliquée à un nombre de départ.\nExemple : « Choisir un nombre ; le multiplier par $3$ ; ajouter $5$. »\n• Départ $7$ : $7 \\times 3 = 21$, puis $21 + 5 = 26$.\n• Pour **retrouver le nombre de départ** à partir du résultat $35$, on « remonte » le programme avec les opérations inverses : $35 - 5 = 30$, puis $30 \\div 3 = 10$."
      },
      {
        "title": "3. Modéliser avec un schéma en barres",
        "content": "Un **schéma en barres** représente les quantités par des rectangles de même longueur pour les parts égales.\nExemple : Tom et Lina ont $54$ billes en tout ; Lina en a deux fois plus que Tom.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 340 100\" width=\"340\" height=\"100\" style=\"max-width:340px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Schéma en barres : Tom a une part, Lina a deux parts de même longueur, le total vaut 54 billes\"><text x=\"8\" y=\"35\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Tom</text><rect x=\"50\" y=\"14\" width=\"80\" height=\"32\" fill=\"rgba(59,130,246,0.55)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><text x=\"90\" y=\"35\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" fill=\"var(--text-main, #0f172a)\">part</text><text x=\"8\" y=\"77\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Lina</text><rect x=\"50\" y=\"56\" width=\"80\" height=\"32\" fill=\"rgba(59,130,246,0.55)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><text x=\"90\" y=\"77\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" fill=\"var(--text-main, #0f172a)\">part</text><rect x=\"130\" y=\"56\" width=\"80\" height=\"32\" fill=\"rgba(59,130,246,0.55)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><text x=\"170\" y=\"77\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" fill=\"var(--text-main, #0f172a)\">part</text><path d=\"M 222 14 h 8 v 74 h -8\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><text x=\"238\" y=\"47\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">total :</text><text x=\"238\" y=\"64\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">54 billes</text></svg></div>\nIl y a $3$ parts égales : $54 \\div 3 = 18$. Tom a $18$ billes et Lina $36$ billes."
      },
      {
        "title": "4. Motifs évolutifs",
        "content": "Dans un **motif évolutif**, chaque étape se construit à partir de la précédente selon une règle régulière.\nExemple : à l'étape $1$ on utilise $4$ allumettes, puis on en ajoute $3$ à chaque étape.\n| Étape | 1 | 2 | 3 | 4 |\n|:---:|:---:|:---:|:---:|:---:|\n| Allumettes | 4 | 7 | 10 | 13 |\nRègle : nombre d'allumettes $= 3 \\times (\\text{numéro de l'étape}) + 1$. À l'étape $10$ : $3 \\times 10 + 1 = 31$ allumettes."
      },
      {
        "title": "À retenir",
        "content": "• Pour trouver un nombre inconnu, on utilise l'opération **inverse** et on vérifie.\n• Pour remonter un programme de calcul, on part de la **dernière** instruction.\n• Dans un motif, on cherche ce qui est ajouté à chaque étape."
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
      { "q": "Compléter : $\\ldots + 45 = 100$.", "a": "$100 - 45 = 55$." },
      { "q": "Compléter : $6 \\times \\ldots = 42$.", "a": "$42 \\div 6 = 7$." },
      { "q": "Programme : $\\times 2$ puis $+ 3$. Quel résultat pour le nombre $8$ ?", "a": "$8 \\times 2 + 3 = 16 + 3 = 19$." },
      { "q": "Programme : $\\times 2$ puis $+ 3$. Le résultat est $25$ : quel est le nombre de départ ?", "a": "On remonte : $25 - 3 = 22$, puis $22 \\div 2 = 11$." },
      { "q": "Un motif a 2 jetons à l'étape 1 et en gagne 2 à chaque étape. Combien à l'étape 6 ?", "a": "$2 + 5 \\times 2 = 12$ jetons (c'est le double du numéro de l'étape)." }
    ]
  },
  "6P1": {
    "title": "6P1 : Proportionnalité : linéarité, retour à l'unité et échelles",
    "domain": "Proportionnalité",
    "objectives": [
      "Reconnaître une situation de proportionnalité et une situation qui ne l'est pas.",
      "Résoudre un problème de proportionnalité par linéarité (multiplicative ou additive) ou par retour à l'unité.",
      "Représenter une situation de proportionnalité par un tableau, des flèches ou des parenthèses, et utiliser le coefficient de proportionnalité.",
      "Appliquer un pourcentage simple, exprimer une proportion en pourcentage et utiliser une échelle."
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
        "content": "| Nombre de cahiers | 3 | 6 | 7 |\n|:---:|:---:|:---:|:---:|\n| Prix (€) | 4,50 | 9 | 10,50 |\nDans un tableau, on écrit toujours **le nom et l'unité** de chaque grandeur. On passe de la première ligne à la seconde en multipliant par le **coefficient** $1{,}5$ : $3 \\times 1{,}5 = 4{,}5$.\nOn peut aussi noter la correspondance entre deux valeurs :\n• avec une **flèche** : $3$ cahiers $\\longrightarrow$ $4{,}50$ € ;\n• avec des **parenthèses** : ($3$ cahiers ; $4{,}50$ €)."
      },
      {
        "title": "4. Pourcentages et échelles",
        "content": "• Prendre $t\\,\\%$ d'une quantité, c'est en prendre $\\frac{t}{100}$ : $30\\,\\%$ de $70$ $= \\frac{30}{100} \\times 70 = 21$.\n• Repères : $50\\,\\%$ c'est la moitié, $25\\,\\%$ le quart, $10\\,\\%$ le dixième.\n• **Exprimer une proportion en pourcentage** : on écrit la proportion sous forme de fraction, puis on cherche une fraction égale de dénominateur $100$. Si $18$ élèves sur $25$ déjeunent à la cantine : $\\frac{18}{25} = \\frac{18 \\times 4}{25 \\times 4} = \\frac{72}{100}$, soit $72\\,\\%$. Si $150$ graines sur $200$ ont germé : $\\frac{150}{200} = \\frac{150 \\div 2}{200 \\div 2} = \\frac{75}{100}$, soit $75\\,\\%$. Une proportion est toujours inférieure ou égale à $100\\,\\%$.\n• **Échelle graphique** : sur un plan ou une carte, les longueurs sont proportionnelles aux longueurs réelles. Une échelle graphique indique la longueur réelle représentée par une longueur sur le document : si $1\\text{ cm}$ représente $10\\text{ m}$, alors $3\\text{ cm}$ représentent $3 \\times 10\\text{ m} = 30\\text{ m}$.\n**Pour aller plus loin** : une échelle peut aussi s'écrire avec une fraction. L'échelle $\\frac{1}{1\\,000}$ signifie que $1\\text{ cm}$ sur le plan représente $1\\,000\\text{ cm}$, soit $10\\text{ m}$, dans la réalité."
      },
      {
        "title": "À retenir",
        "content": "• Proportionnalité : on multiplie toujours par le **même** nombre.\n• Trois méthodes : linéarité (multiplicative ou additive), retour à l'unité, coefficient.\n• $t\\,\\%$ d'une quantité $= \\frac{t}{100} \\times$ quantité.\n• Proportion en pourcentage : on cherche une fraction égale de dénominateur $100$.\n• Échelle graphique : on lit la longueur réelle représentée par $1\\text{ cm}$, et on pense aux conversions."
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
        "example": "Sur un plan, l'échelle graphique indique que $1\\text{ cm}$ représente $10\\text{ m}$. Deux arbres sont à $6\\text{ cm}$ l'un de l'autre sur le plan. Quelle est la distance réelle ?",
        "steps": [
          "**Étape 1** : On lit l'échelle graphique : $1\\text{ cm}$ sur le plan représente $10\\text{ m}$ en réalité.",
          "**Étape 2** : Les longueurs réelles sont proportionnelles aux longueurs sur le plan : $6\\text{ cm}$, c'est $6$ fois $1\\text{ cm}$, donc la distance réelle est $6 \\times 10\\text{ m} = 60\\text{ m}$.",
          "**Conclusion** : Les deux arbres sont à $60\\text{ m}$ l'un de l'autre."
        ]
      },
      {
        "title": "Méthode : Exprimer une proportion en pourcentage",
        "example": "Sur $20$ élèves inscrits à la chorale, $13$ sont en 6e. Quel pourcentage des inscrits est en 6e ?",
        "steps": [
          "**Étape 1** : On écrit la proportion sous forme de fraction : $13$ élèves sur $20$, soit $\\frac{13}{20}$.",
          "**Étape 2** : On cherche une fraction égale de dénominateur $100$. Comme $100 = 20 \\times 5$ : $\\frac{13}{20} = \\frac{13 \\times 5}{20 \\times 5} = \\frac{65}{100}$.",
          "**Conclusion** : $\\frac{65}{100} = 65\\,\\%$ : $65\\,\\%$ des inscrits sont en 6e."
        ]
      }
    ],
    "traps": [
      "⚠️ Toutes les situations ne sont pas proportionnelles : un enfant de $10$ ans ne mesure pas deux fois la taille qu'il avait à $5$ ans.",
      "⚠️ La linéarité additive utilise une **somme** de colonnes : on ne peut pas ajouter un même nombre aux deux grandeurs.",
      "⚠️ Avec une échelle, pense à convertir : si $1\\text{ cm}$ représente $250\\text{ m}$, alors $8\\text{ cm}$ représentent $2\\,000\\text{ m}$, soit $2\\text{ km}$, et non $2\\,000\\text{ km}$."
    ],
    "flashcards": [
      { "q": "Qu'est-ce que le coefficient de proportionnalité ?", "a": "C'est le nombre par lequel on multiplie toujours les valeurs d'une grandeur pour obtenir celles de l'autre." },
      { "q": "$4$ croissants coûtent $3{,}20$ €. Combien coûtent $8$ croissants ?", "a": "Deux fois plus de croissants : $2 \\times 3{,}20 = 6{,}40$ €." },
      { "q": "Combien font $10\\,\\%$ de $250$ ?", "a": "Le dixième de $250$ : $25$." },
      { "q": "Combien font $25\\,\\%$ de $36$ ?", "a": "Le quart de $36$ : $9$." },
      { "q": "Sur $25$ élèves, $9$ viennent à pied. Quel pourcentage cela représente-t-il ?", "a": "$\\frac{9}{25} = \\frac{9 \\times 4}{25 \\times 4} = \\frac{36}{100}$, soit $36\\,\\%$." },
      { "q": "Comment noter autrement qu'avec un tableau que $3$ cahiers coûtent $4{,}50$ € ?", "a": "Avec une flèche : $3$ cahiers $\\longrightarrow$ $4{,}50$ €, ou avec des parenthèses : ($3$ cahiers ; $4{,}50$ €)." },
      { "q": "Sur un plan, $1\\text{ cm}$ représente $2\\text{ m}$. Que représentent $3\\text{ cm}$ sur ce plan ?", "a": "$3 \\times 2 = 6$ : $3\\text{ cm}$ représentent $6\\text{ m}$ en réalité." }
    ]
  },
  "6D1": {
    "title": "6D1 : Organisation et gestion de données : tableaux et diagrammes",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Planifier une enquête ou une série de mesures : choisir la question, les personnes interrogées ou les conditions de mesure, puis consigner les résultats dans un tableau.",
      "Lire et compléter un tableau simple ou à double entrée.",
      "Filtrer des données d'un tableau selon un critère.",
      "Lire et interpréter un diagramme en barres.",
      "Lire un diagramme circulaire et une courbe, notamment sur des données de climat, de pollution ou de biodiversité."
    ],
    "keyPoints": [
      {
        "title": "1. Préparer une enquête ou une série de mesures",
        "content": "Avant de recueillir des données, on **planifie** son travail.\n**Pour une enquête :**\n• on choisit une **question précise**, dont les réponses seront faciles à regrouper (« Combien de minutes mets-tu pour venir au collège ? » plutôt que « Habites-tu loin ? ») ;\n• on choisit **qui interroger** : pour connaître l'avis des élèves de 6e, on interroge des élèves de plusieurs classes de 6e, pas seulement ses amis ;\n• on prévoit **comment noter** les réponses : une seule réponse par personne, notée aussitôt dans un tableau.\n**Pour une série de mesures :** on décide ce que l'on mesure, avec quel instrument, à quel endroit et à quel moment. Puis on **consigne** chaque mesure aussitôt, avec son unité.\n| Jour | Lun. | Mar. | Mer. | Jeu. | Ven. | Sam. | Dim. |\n|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n| Pluie (mm) | 0 | 4 | 12 | 3 | 0 | 0 | 6 |\nCe relevé a été fait chaque matin avec le même pluviomètre. Il montre qu'il a plu $4$ jours sur $7$ et qu'il est tombé $4 + 12 + 3 + 6 = 25$ mm d'eau dans la semaine.\nDe même, pour suivre les oiseaux d'un jardin, on les compte toujours au même endroit, à la même heure et pendant la même durée : sinon, les comptages ne peuvent pas être comparés."
      },
      {
        "title": "2. Recueillir et organiser des données",
        "content": "Lors d'une **enquête**, on pose une même question à plusieurs personnes. On regroupe les réponses dans un **tableau** : pour chaque réponse, on compte l'**effectif** (le nombre de personnes ayant donné cette réponse).\n| Sport préféré | Football | Basket | Natation | Danse |\n|:---:|:---:|:---:|:---:|:---:|\n| Effectif | 9 | 6 | 4 | 7 |\nL'**effectif total** est la somme des effectifs : $9 + 6 + 4 + 7 = 26$ élèves."
      },
      {
        "title": "3. Tableau à double entrée",
        "content": "Un tableau à **double entrée** croise deux informations : chaque case se lit à l'intersection d'une ligne et d'une colonne.\n| | Demi-pensionnaires | Externes | Total |\n|:---|:---:|:---:|:---:|\n| 6e A | 18 | 7 | 25 |\n| 6e B | 15 | 11 | 26 |\n| Total | 33 | 18 | 51 |\nLes cases « Total » permettent de vérifier les calculs."
      },
      {
        "title": "4. Filtrer des données",
        "content": "**Filtrer**, c'est ne garder que les lignes d'un tableau qui vérifient un **critère** (par exemple : « temps inférieur à $8{,}5$ secondes », « élèves de 6e B », « prix inférieur à $10$ € »).\nOn parcourt chaque ligne, on teste le critère et on compte ou on recopie les données retenues. Un tableur peut le faire automatiquement avec un filtre."
      },
      {
        "title": "5. Diagramme en barres",
        "content": "Dans un **diagramme en barres**, chaque catégorie est représentée par une barre dont la **hauteur** est proportionnelle à l'effectif.\n• On lit d'abord la **graduation** de l'axe vertical (de combien en combien ?).\n• On lit la hauteur de chaque barre en suivant les lignes du quadrillage.\n• On peut ainsi comparer les catégories : la plus haute barre correspond à l'effectif le plus grand.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 360 226\" width=\"360\" height=\"226\" style=\"max-width:360px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Diagramme en barres : football 9, basket 6, natation 4, danse 7\">\n<line x1=\"40\" y1=\"185.0\" x2=\"350\" y2=\"185.0\" stroke=\"rgba(100,116,139,0.35)\" stroke-width=\"1\"/>\n<text x=\"34\" y=\"189.0\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">0</text>\n<line x1=\"40\" y1=\"152.0\" x2=\"350\" y2=\"152.0\" stroke=\"rgba(100,116,139,0.35)\" stroke-width=\"1\"/>\n<text x=\"34\" y=\"156.0\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">2</text>\n<line x1=\"40\" y1=\"119.0\" x2=\"350\" y2=\"119.0\" stroke=\"rgba(100,116,139,0.35)\" stroke-width=\"1\"/>\n<text x=\"34\" y=\"123.0\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">4</text>\n<line x1=\"40\" y1=\"86.0\" x2=\"350\" y2=\"86.0\" stroke=\"rgba(100,116,139,0.35)\" stroke-width=\"1\"/>\n<text x=\"34\" y=\"90.0\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">6</text>\n<line x1=\"40\" y1=\"53.0\" x2=\"350\" y2=\"53.0\" stroke=\"rgba(100,116,139,0.35)\" stroke-width=\"1\"/>\n<text x=\"34\" y=\"57.0\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">8</text>\n<line x1=\"40\" y1=\"20.0\" x2=\"350\" y2=\"20.0\" stroke=\"rgba(100,116,139,0.35)\" stroke-width=\"1\"/>\n<text x=\"34\" y=\"24.0\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">10</text>\n<line x1=\"40\" y1=\"185\" x2=\"350\" y2=\"185\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"40\" y1=\"185\" x2=\"40\" y2=\"14\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<rect x=\"52.0\" y=\"36.5\" width=\"48.5\" height=\"148.5\" fill=\"rgba(37,99,235,0.75)\"/>\n<text x=\"76.3\" y=\"201\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Football</text>\n<rect x=\"124.5\" y=\"86.0\" width=\"48.5\" height=\"99.0\" fill=\"rgba(37,99,235,0.75)\"/>\n<text x=\"148.8\" y=\"201\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Basket</text>\n<rect x=\"197.0\" y=\"119.0\" width=\"48.5\" height=\"66.0\" fill=\"rgba(37,99,235,0.75)\"/>\n<text x=\"221.3\" y=\"201\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Natation</text>\n<rect x=\"269.5\" y=\"69.5\" width=\"48.5\" height=\"115.5\" fill=\"rgba(37,99,235,0.75)\"/>\n<text x=\"293.8\" y=\"201\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Danse</text>\n<text x=\"44\" y=\"12\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Effectif</text>\n</svg>\n</div>\nIci, une ligne du quadrillage correspond à $2$ élèves : la barre « Danse » s'arrête entre $6$ et $8$, elle vaut $7$."
      },
      {
        "title": "6. Diagramme circulaire et courbe",
        "content": "Ces deux représentations se lisent sans calcul compliqué.\n**Diagramme circulaire.** Le disque entier représente l'**effectif total**. Chaque part est proportionnelle à l'effectif de sa catégorie : un demi-disque représente la moitié du total, un quart de disque le quart du total.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 360 200\" width=\"360\" height=\"200\" style=\"max-width:360px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Diagramme circulaire de 40 déchets : plastique, un demi-disque ; mégots, un quart de disque ; verre et métal, un huitième de disque chacun\"><path d=\"M180 100 L180 20 A80 80 0 0 1 180 180 Z\" fill=\"rgba(37,99,235,0.75)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><path d=\"M180 100 L180 180 A80 80 0 0 1 100 100 Z\" fill=\"rgba(245,158,11,0.8)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><path d=\"M180 100 L100 100 A80 80 0 0 1 123.43 43.43 Z\" fill=\"rgba(16,185,129,0.75)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><path d=\"M180 100 L123.43 43.43 A80 80 0 0 1 180 20 Z\" fill=\"rgba(168,85,247,0.7)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><text x=\"268\" y=\"104\" text-anchor=\"start\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Plastique</text><text x=\"116\" y=\"168\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Mégots</text><text x=\"96\" y=\"70\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Verre</text><text x=\"144\" y=\"20\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Métal</text></svg></div>\nIci, $40$ déchets ont été ramassés sur une plage. La part « Plastique » est un demi-disque : $40 \\div 2 = 20$ déchets en plastique. La part « Mégots » est un quart de disque : $40 \\div 4 = 10$ mégots.\n**Courbe.** Une courbe montre comment une grandeur **évolue**, souvent au fil du temps. Chaque point se lit sur les deux axes : l'axe horizontal donne le moment, l'axe vertical la valeur de la grandeur.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 360 212\" width=\"360\" height=\"212\" style=\"max-width:360px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Courbe de la température à midi : janvier 4, mars 8, mai 16, juillet 24, septembre 20, novembre 8 degrés\"><g stroke=\"rgba(100,116,139,0.35)\" stroke-width=\"1\"><line x1=\"40\" y1=\"163\" x2=\"350\" y2=\"163\"/><line x1=\"40\" y1=\"141\" x2=\"350\" y2=\"141\"/><line x1=\"40\" y1=\"119\" x2=\"350\" y2=\"119\"/><line x1=\"40\" y1=\"97\" x2=\"350\" y2=\"97\"/><line x1=\"40\" y1=\"75\" x2=\"350\" y2=\"75\"/><line x1=\"40\" y1=\"53\" x2=\"350\" y2=\"53\"/><line x1=\"40\" y1=\"31\" x2=\"350\" y2=\"31\"/></g><g font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\" text-anchor=\"end\"><text x=\"34\" y=\"189\">0</text><text x=\"34\" y=\"167\">4</text><text x=\"34\" y=\"145\">8</text><text x=\"34\" y=\"123\">12</text><text x=\"34\" y=\"101\">16</text><text x=\"34\" y=\"79\">20</text><text x=\"34\" y=\"57\">24</text><text x=\"34\" y=\"35\">28</text></g><g font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\" text-anchor=\"middle\"><text x=\"65\" y=\"203\">janv.</text><text x=\"115\" y=\"203\">mars</text><text x=\"165\" y=\"203\">mai</text><text x=\"215\" y=\"203\">juil.</text><text x=\"265\" y=\"203\">sept.</text><text x=\"315\" y=\"203\">nov.</text></g><line x1=\"40\" y1=\"185\" x2=\"350\" y2=\"185\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><line x1=\"40\" y1=\"185\" x2=\"40\" y2=\"14\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><polyline points=\"65,163 115,141 165,97 215,53 265,75 315,141\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><g fill=\"#dc2626\"><circle cx=\"65\" cy=\"163\" r=\"3.5\"/><circle cx=\"115\" cy=\"141\" r=\"3.5\"/><circle cx=\"165\" cy=\"97\" r=\"3.5\"/><circle cx=\"215\" cy=\"53\" r=\"3.5\"/><circle cx=\"265\" cy=\"75\" r=\"3.5\"/><circle cx=\"315\" cy=\"141\" r=\"3.5\"/></g><text x=\"46\" y=\"16\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Température (°C)</text></svg></div>\nCette courbe donne la température relevée à midi, le 15 de six mois d'une même année. L'axe vertical est gradué de $4$ en $4$. Le point de juillet est à la hauteur $24$ : il faisait $24$ °C. La courbe monte de janvier à juillet : la température augmente. Elle descend ensuite jusqu'en novembre : la température baisse.\n**Quelle représentation choisir ?** Un diagramme en barres pour comparer des effectifs ; un diagramme circulaire pour montrer les parts d'un tout ; une courbe pour suivre une évolution ; un tableau à double entrée pour croiser deux critères."
      },
      {
        "title": "À retenir",
        "content": "• Une enquête se prépare : question précise, personnes interrogées, façon de noter les réponses.\n• Une mesure se consigne aussitôt, avec son unité.\n• Effectif total $=$ somme des effectifs.\n• Tableau à double entrée : on lit à l'intersection d'une ligne et d'une colonne.\n• Diagramme en barres : lire la graduation avant de lire une hauteur.\n• Diagramme circulaire : le disque entier représente le total.\n• Courbe : elle montre l'évolution d'une grandeur ; chaque point se lit sur les deux axes."
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
      },
      {
        "title": "Méthode : Préparer une série de mesures",
        "example": "On veut savoir s'il tombe plus d'eau cette semaine que la semaine dernière. Comment organiser les mesures ?",
        "steps": [
          "**Étape 1** : On décide ce que l'on mesure et avec quel instrument : la hauteur d'eau tombée, en mm, avec un pluviomètre.",
          "**Étape 2** : On fixe les conditions : toujours le même pluviomètre, au même endroit, chaque matin à la même heure.",
          "**Étape 3** : On prépare un tableau (une colonne par jour) et on y note chaque mesure aussitôt.",
          "**Conclusion** : comme elles sont faites dans les mêmes conditions, les mesures des deux semaines peuvent être comparées."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un diagramme en barres, vérifie la graduation : un carreau ne vaut pas toujours 1.",
      "⚠️ Dans un tableau à double entrée, ne confonds pas ligne et colonne : lis bien les deux intitulés.",
      "⚠️ « Moins de $8{,}5$ » exclut la valeur $8{,}5$ elle-même ; « au plus $8{,}5$ » l'inclut.",
      "⚠️ Interroger seulement ses amis ou une seule classe ne donne pas l'avis de tous les élèves de 6e.",
      "⚠️ Une mesure notée sans unité, ou notée plus tard de mémoire, n'est pas fiable : consigne-la aussitôt, avec son unité.",
      "⚠️ Sur une courbe, lis d'abord la graduation de l'axe vertical : elle ne va pas toujours de $1$ en $1$."
    ],
    "flashcards": [
      { "q": "Qu'est-ce que l'effectif d'une réponse dans une enquête ?", "a": "C'est le nombre de personnes qui ont donné cette réponse." },
      { "q": "Comment calcule-t-on l'effectif total ?", "a": "On additionne les effectifs de toutes les catégories." },
      { "q": "Que signifie « filtrer » un tableau ?", "a": "Ne garder que les lignes qui vérifient un critère donné." },
      { "q": "Dans un diagramme en barres, que représente la hauteur d'une barre ?", "a": "L'effectif de la catégorie (la hauteur est proportionnelle à l'effectif)." },
      { "q": "À quoi sert la case « Total » d'un tableau à double entrée ?", "a": "À regrouper les effectifs d'une ligne ou d'une colonne et à vérifier les calculs." },
      { "q": "Que faut-il décider avant de lancer une enquête ?", "a": "La question précise, les personnes à interroger et la façon de noter les réponses." },
      { "q": "Que signifie « consigner » une mesure ?", "a": "La noter aussitôt, avec son unité, par exemple dans un tableau." },
      { "q": "Que représente le disque entier d'un diagramme circulaire ?", "a": "L'effectif total : un demi-disque en représente la moitié, un quart de disque le quart." },
      { "q": "À quoi sert une courbe ?", "a": "À montrer l'évolution d'une grandeur, souvent au fil du temps : chaque point se lit sur les deux axes." }
    ]
  },
  "6D2": {
    "title": "6D2 : Probabilités : hasard et premières probabilités",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Passer de « a chances sur b » à une fraction, à une écriture décimale et à un pourcentage.",
      "Comprendre le vocabulaire du hasard : expérience aléatoire, issue, événement impossible, certain, probable.",
      "Savoir qu'une probabilité est un nombre compris entre 0 et 1.",
      "Calculer une probabilité dans une situation d'équiprobabilité simple.",
      "Comparer les fréquences obtenues lors d'expériences répétées avec une probabilité calculée."
    ],
    "keyPoints": [
      {
        "title": "1. « a chances sur b »",
        "content": "Pour parler du hasard, on dit souvent « tant de chances sur tant ». En lançant une pièce, on a **une chance sur deux** d'obtenir pile. Si un sac contient $3$ billes rouges et $7$ billes bleues, on a **$3$ chances sur $10$** de tirer une bille rouge.\n« $a$ chances sur $b$ » s'écrit avec la fraction $\\frac{a}{b}$ : le nombre de chances au numérateur, le nombre total de cas au dénominateur.\nExemple : « $3$ chances sur $10$ » s'écrit $\\frac{3}{10}$, qui vaut aussi $0{,}3$ ou $30\\,\\%$. Ces trois écritures désignent le même nombre, appelé **probabilité**."
      },
      {
        "title": "2. Le vocabulaire du hasard",
        "content": "• Une **expérience aléatoire** est une expérience dont on connaît les résultats possibles, appelés **issues**, sans pouvoir prévoir lequel se produira (lancer un dé, tirer une bille dans un sac…).\n• Un événement peut être **impossible** (obtenir $7$ avec un dé à six faces), **certain** (obtenir un nombre inférieur à $10$), **peu probable**, **très probable**, ou avoir **une chance sur deux** de se produire.\nCes mots servent à décrire une expérience : l'important est de savoir les reconnaître dans une situation."
      },
      {
        "title": "3. Une probabilité est un nombre entre 0 et 1",
        "content": "On mesure la « chance » qu'un événement se produise par un nombre appelé **probabilité**, toujours compris entre $0$ et $1$ :\n• probabilité $0$ : événement **impossible** ;\n• probabilité $1$ : événement **certain** ;\n• probabilité $\\frac{1}{2} = 0{,}5$ : une chance sur deux.\nUne probabilité peut s'écrire sous forme de fraction, de nombre décimal ou de pourcentage : $\\frac{1}{4} = 0{,}25 = 25\\,\\%$."
      },
      {
        "title": "4. Situation d'équiprobabilité",
        "content": "Quand toutes les issues ont la même chance de se produire (dé équilibré, billes indiscernables au toucher…), on parle d'**équiprobabilité**. Alors :\n$$\\text{probabilité} = \\frac{\\text{nombre d'issues favorables}}{\\text{nombre d'issues possibles}}$$\nExemple : un sac contient $3$ billes rouges et $5$ bleues. La probabilité de tirer une bille rouge est $\\frac{3}{8}$.\nPour abréger, on écrit parfois $P(\\text{rouge}) = \\frac{3}{8}$, ce qui se lit « la probabilité de tirer une bille rouge est égale à $\\frac{3}{8}$ »."
      },
      {
        "title": "5. Fréquence et probabilité",
        "content": "Si l'on répète une expérience un grand nombre de fois, la **fréquence** d'apparition d'une issue ($\\frac{\\text{nombre de fois obtenue}}{\\text{nombre d'essais}}$) se rapproche de sa probabilité.\nExemple : sur $200$ lancers d'une pièce, on obtient $94$ fois « pile » : fréquence $\\frac{94}{200} = 0{,}47$, proche de la probabilité $0{,}5$. Sur peu d'essais, la fréquence peut être assez éloignée de la probabilité."
      },
      {
        "title": "À retenir",
        "content": "• « $a$ chances sur $b$ » s'écrit $\\frac{a}{b}$ : le nombre de chances au numérateur, le nombre total de cas au dénominateur.\n• Une probabilité est un nombre entre $0$ (impossible) et $1$ (certain).\n• Équiprobabilité : $\\frac{\\text{issues favorables}}{\\text{issues possibles}}$.\n• Sur un grand nombre d'essais, la fréquence se rapproche de la probabilité."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire « a chances sur b » autrement",
        "example": "On a $7$ chances sur $20$ de gagner à un jeu. Écris cette probabilité sous forme de fraction, d'écriture décimale et de pourcentage.",
        "steps": [
          "**Étape 1** : Le nombre de chances au numérateur, le nombre total de cas au dénominateur : $\\frac{7}{20}$.",
          "**Étape 2** : On cherche la fraction égale de dénominateur $100$ : $\\frac{7}{20} = \\frac{35}{100}$.",
          "**Étape 3** : On en déduit l'écriture décimale $0{,}35$ et le pourcentage $35\\,\\%$."
        ]
      },
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
      "⚠️ Compte toutes les issues possibles au dénominateur : avec $3$ rouges et $5$ bleues, il y a $8$ billes, donc la probabilité de tirer une bille rouge est $\\frac{3}{8}$ et non $\\frac{3}{5}$."
    ],
    "flashcards": [
      { "q": "Comment écrire « $3$ chances sur $10$ » avec une fraction ?", "a": "$\\frac{3}{10}$ : le nombre de chances au numérateur, le nombre total de cas au dénominateur." },
      { "q": "Qu'est-ce qu'un événement impossible ? Quelle est sa probabilité ?", "a": "Un événement qui ne peut jamais se produire ; sa probabilité vaut $0$." },
      { "q": "Quelle est la probabilité d'un événement certain ?", "a": "$1$." },
      { "q": "Probabilité d'obtenir $5$ avec un dé équilibré à six faces ?", "a": "$\\frac{1}{6}$." },
      { "q": "Un sac contient $2$ billes vertes et $6$ jaunes. Probabilité de tirer une verte ?", "a": "$\\frac{2}{8} = \\frac{1}{4}$." },
      { "q": "Que se passe-t-il pour la fréquence quand on répète une expérience un très grand nombre de fois ?", "a": "Elle se rapproche de la probabilité de l'événement." }
    ]
  },
  "6A1": {
    "title": "6A1 : Initiation à la pensée informatique : instructions, séquences et boucles",
    "domain": "Pensée Informatique",
    "objectives": [
      "Identifier une instruction et une séquence d'instructions.",
      "Produire et exécuter (à la main) une séquence d'instructions.",
      "Répéter une séquence d'instructions à l'aide d'une boucle « répéter ».",
      "Programmer le déplacement d'un robot ou d'un lutin sur un quadrillage ou dans Scratch.",
      "Reconnaître l'entrée et la sortie d'un programme (programme de calcul avec des cartes)."
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
        "content": "Quand une séquence se répète, on utilise une **boucle** : « répéter $n$ fois [ … ] ».\n```scratch\nrépéter 4 fois\n    avancer de 50 pas\n    tourner de 90 degrés\n```\nCe script trace un **carré** de côté $50$ pas : il est plus court que d'écrire $8$ instructions à la suite."
      },
      {
        "title": "4. Premiers pas dans Scratch",
        "content": "Dans Scratch, un **lutin** exécute des **blocs** emboîtés :\n• un bloc **événement** lance le script (« quand le drapeau vert est cliqué ») ;\n• des blocs **mouvement** (« avancer de 10 pas », « tourner de 90 degrés ») ;\n• des blocs **contrôle** (« répéter 10 fois »).\n• **Pour aller plus loin** (au-delà du programme de 6e) : une **variable** (par exemple « score ») permet de mémoriser un nombre qui peut changer."
      },
      {
        "title": "5. Entrée et sortie d'un programme",
        "content": "• L'**entrée** d'un programme est ce qu'il reçoit au départ (par exemple un nombre). La **sortie** est ce qu'il produit à la fin (par exemple le résultat affiché).\n• Un **programme de calcul** peut s'écrire avec des cartes, appliquées dans l'ordre : chaque carte est une instruction.\nExemple : avec les cartes « ajouter $18$ » puis « multiplier par $2$ », si l'on donne $7$ en entrée, on calcule $7 + 18 = 25$ puis $25 \\times 2 = 50$ : la sortie est $50$.\n• Changer l'ordre des cartes peut changer la sortie : avec « multiplier par $2$ » puis « ajouter $18$ », la même entrée $7$ donne $7 \\times 2 = 14$ puis $14 + 18 = 32$."
      },
      {
        "title": "À retenir",
        "content": "• Une séquence s'exécute **dans l'ordre**, instruction par instruction.\n• « répéter $n$ fois » exécute $n$ fois **tout** le bloc qu'elle contient.\n• Carré : répéter $4$ fois [avancer ; tourner de $90$ degrés].\n• L'**entrée** est ce que le programme reçoit, la **sortie** est ce qu'il produit."
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
      },
      {
        "title": "Méthode : Exécuter un programme de calcul à cartes",
        "example": "On donne $9$ en entrée d'un programme formé des cartes « multiplier par $3$ » puis « retirer $5$ ». Quelle est la sortie ?",
        "steps": [
          "**Étape 1** : On applique la première carte à l'entrée : $9 \\times 3 = 27$.",
          "**Étape 2** : On applique la carte suivante au résultat obtenu : $27 - 5 = 22$.",
          "**Étape 3** : Il n'y a plus de carte : la sortie est $22$."
        ]
      }
    ],
    "traps": [
      "⚠️ L'ordre des instructions compte : « tourner puis avancer » ne donne pas le même trajet que « avancer puis tourner ».",
      "⚠️ Dans une boucle « répéter 4 fois », toutes les instructions à l'intérieur sont exécutées 4 fois, pas seulement la première.",
      "⚠️ Tourner « à droite » dépend de l'orientation du robot : un robot tourné vers le bas qui tourne à droite part vers la gauche de l'écran.",
      "⚠️ Dans un programme de calcul, chaque carte s'applique au résultat de la carte précédente, pas au nombre donné en entrée."
    ],
    "flashcards": [
      { "q": "Qu'est-ce qu'une séquence d'instructions ?", "a": "Une suite d'instructions exécutées les unes après les autres, dans l'ordre." },
      { "q": "À quoi sert une boucle « répéter » ?", "a": "À exécuter plusieurs fois la même séquence d'instructions sans la réécrire." },
      { "q": "Quel angle utiliser dans « répéter 4 fois [avancer de 50 ; tourner de … degrés] » pour tracer un carré ?", "a": "$90$ degrés." },
      { "q": "Un script répète $5$ fois « avancer de $20$ pas ». Quelle distance parcourt le lutin ?", "a": "$5 \\times 20 = 100$ pas." },
      { "q": "Quel bloc démarre souvent un script Scratch ?", "a": "« Quand le drapeau vert est cliqué »." },
      { "q": "Qu'appelle-t-on l'entrée et la sortie d'un programme ?", "a": "L'entrée est ce que le programme reçoit au départ ; la sortie est ce qu'il produit à la fin." }
    ]
  },
  "6M1": {
    "title": "6M1 : Longueurs et périmètres (polygones et cercle)",
    "domain": "Grandeurs et Mesures",
    "objectives": [
      "Convertir des longueurs entre le kilomètre et le millimètre en s’appuyant sur les relations entre les unités.",
      "Calculer le périmètre d’un polygone en additionnant les longueurs de ses côtés.",
      "Connaître et utiliser les formules du périmètre du carré et du rectangle.",
      "Constater par des mesures que le périmètre d’un disque vaut toujours le même nombre de fois son diamètre, puis utiliser la formule $P = \\pi \\times d$.",
      "Calculer le périmètre de figures composées (demi-disques, assemblages)."
    ],
    "keyPoints": [
      {
        "title": "1. Unités de longueur et conversions",
        "content": "L'unité principale de longueur est le **mètre** (m). Ce tableau présente les unités : chacune vaut **10 fois** celle qui est située juste à sa droite.\n\n| km | hm | dam | m | dm | cm | mm |\n|:---:|:---:|:---:|:---:|:---:|:---:|:---:|\n| $1\\,000$ m | $100$ m | $10$ m | $1$ m | $0{,}1$ m | $0{,}01$ m | $0{,}001$ m |\n\nPour convertir, on s'appuie sur la **relation entre les deux unités** :\n$$1\\text{ km} = 10\\text{ hm} = 100\\text{ dam} = 1\\,000\\text{ m} \\quad ; \\quad 1\\text{ m} = 10\\text{ dm} = 100\\text{ cm} = 1\\,000\\text{ mm}$$\n• Pour passer à une unité **plus petite**, il en faut davantage : on multiplie. Exemple : $1\\text{ m} = 100\\text{ cm}$, donc $4{,}25\\text{ m} = 4{,}25 \\times 100\\text{ cm} = 425\\text{ cm}$.\n• Pour passer à une unité **plus grande**, il en faut moins : on divise. Exemple : $1\\text{ cm} = 10\\text{ mm}$, donc $245\\text{ mm} = 245 \\div 10\\text{ cm} = 24{,}5\\text{ cm}$.\nMultiplier par $100$, c'est faire avancer chaque chiffre de deux rangs vers la gauche ; diviser par $10$, c'est le faire reculer d'un rang vers la droite."
      },
      {
        "title": "2. Périmètre d’un polygone",
        "content": "Le **périmètre** d'une figure est la **longueur de son contour**. Pour un polygone, on additionne les longueurs de tous ses côtés, **exprimées dans la même unité**.\n• Carré de côté $c$ : $P = 4 \\times c$.\n• Rectangle de longueur $L$ et de largeur $\\ell$ : $P = 2 \\times (L + \\ell) = 2 \\times L + 2 \\times \\ell$.\nExemple : un rectangle de $7\\text{ cm}$ sur $4{,}5\\text{ cm}$ a pour périmètre $2 \\times (7 + 4{,}5) = 2 \\times 11{,}5 = 23\\text{ cm}$."
      },
      {
        "title": "3. Périmètre du disque",
        "content": "On entoure des objets ronds d'une ficelle pour mesurer leur tour $P$, puis on mesure leur diamètre $d$ :\n\n| Objet | Tour $P$ (cm) | Diamètre $d$ (cm) | $P \\div d$ (arrondi au centième) |\n|:---:|:---:|:---:|:---:|\n| Verre | $22$ | $7$ | $3{,}14$ |\n| Boîte de conserve | $31{,}5$ | $10$ | $3{,}15$ |\n| Assiette | $76$ | $24$ | $3{,}17$ |\n| Roue de vélo | $207$ | $66$ | $3{,}14$ |\n\nQuel que soit l'objet, le tour vaut **un peu plus de 3 fois le diamètre**, et le quotient $P \\div d$ est presque le même : les petits écarts viennent de la précision des mesures. Ce quotient ne dépend pas du disque choisi : c'est un nombre que l'on note $\\pi$ (« pi »). Il n'est pas décimal : $\\pi = 3{,}14159\\ldots$, et son arrondi au centième est $3{,}14$.\nLe **périmètre du disque** (c'est aussi la longueur du cercle qui le borde) est donc :\n$$P = \\pi \\times d = 2 \\times \\pi \\times r$$\noù $d$ est le diamètre et $r$ le rayon ($d = 2 \\times r$).\nDès que l'on remplace $\\pi$ par une valeur approchée, on écrit $\\approx$ et non $=$.\nExemple : un disque de rayon $5\\text{ cm}$ a un diamètre de $10\\text{ cm}$, donc $P = \\pi \\times 10 \\approx 3{,}14 \\times 10 = 31{,}4\\text{ cm}$."
      },
      {
        "title": "À retenir",
        "content": "• Longueurs : chaque unité vaut $10$ fois la suivante (km, hm, dam, m, dm, cm, mm) ; pour convertir, on part de la relation entre les deux unités.\n• Carré : $P = 4 \\times c$ ; rectangle : $P = 2 \\times (L + \\ell)$ ; disque : $P = \\pi \\times d$, avec $\\approx$ dès que l'on remplace $\\pi$ par une valeur approchée.\n• Toujours exprimer les longueurs **dans la même unité**."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Convertir une longueur",
        "example": "Convertir $4{,}25\\text{ m}$ en $\\text{cm}$.",
        "steps": [
          "**Étape 1** : On écrit la relation entre les deux unités : $1\\text{ m} = 100\\text{ cm}$.",
          "**Étape 2** : On passe à une unité plus petite : il en faut davantage, donc on multiplie : $4{,}25\\text{ m} = 4{,}25 \\times 100\\text{ cm}$.",
          "**Étape 3** : Multiplier par $100$, c'est faire avancer chaque chiffre de deux rangs vers la gauche : $4{,}25\\text{ m} = 425\\text{ cm}$."
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
      { "q": "Combien de mètres dans $1\\text{ km}$ ?", "a": "$1\\text{ km} = 1\\,000\\text{ m}$." },
      { "q": "Convertir $58\\text{ mm}$ en $\\text{cm}$.", "a": "$1\\text{ cm} = 10\\text{ mm}$, donc $58\\text{ mm} = 58 \\div 10\\text{ cm} = 5{,}8\\text{ cm}$." },
      { "q": "Quelle est la formule du périmètre d’un rectangle ?", "a": "$P = 2 \\times (L + \\ell)$, avec $L$ la longueur et $\\ell$ la largeur." },
      { "q": "Quelle est la formule du périmètre d’un disque ?", "a": "$P = \\pi \\times d$ (ou $2 \\times \\pi \\times r$), avec $\\pi \\approx 3{,}14$." },
      { "q": "Que vaut environ le quotient du périmètre d’un disque par son diamètre ?", "a": "Environ $3{,}14$, quel que soit le disque : c'est le nombre $\\pi$. Le périmètre vaut un peu plus de $3$ fois le diamètre." },
      { "q": "Quel est le périmètre d'un carré de côté $2{,}5\\text{ cm}$ ?", "a": "$P = 4 \\times 2{,}5 = 10\\text{ cm}$." }
    ]
  },
  "6M2": {
    "title": "6M2 : Aires : unités, carré, rectangle et figures composées",
    "domain": "Grandeurs et Mesures",
    "objectives": [
      "Comparer des aires sans les mesurer, par superposition ou par découpage et recollement.",
      "Déterminer une aire par comptage de carreaux unités, sur un quadrillage.",
      "Distinguer l’aire d’une surface et le périmètre de son contour.",
      "Savoir que 1 km², 1 m², 1 dm², 1 cm² et 1 mm² sont les aires de carrés de 1 km, 1 m, 1 dm, 1 cm et 1 mm de côté.",
      "Effectuer des conversions d’aires en s’appuyant sur 1 m² = 100 dm² et 1 dm² = 100 cm².",
      "Retrouver, en comptant lignes et colonnes, puis utiliser les formules de l’aire du carré et du rectangle.",
      "Calculer l’aire d’une figure composée par découpage ou par différence."
    ],
    "keyPoints": [
      {
        "title": "1. Comparer des aires sans les mesurer",
        "content": "L'**aire** d'une figure mesure la **surface** qu'elle occupe (ce qu'on « peint »). On peut comparer deux aires sans aucune mesure :\n• par **superposition** : si une figure tient entièrement à l'intérieur d'une autre, son aire est plus petite ;\n• par **découpage et recollement** : si on découpe une figure et qu'on recolle tous les morceaux, sans trou ni chevauchement, pour former une autre figure, les deux figures ont **la même aire**, même si leurs formes sont différentes."
      },
      {
        "title": "2. Mesurer une aire avec un carreau unité",
        "content": "Pour mesurer une aire, on choisit un **carreau unité** et on **pave** la figure, c'est-à-dire qu'on la recouvre entièrement de carreaux identiques, sans trou ni chevauchement. L'aire est alors le **nombre de carreaux** utilisés.\nPour comparer deux figures, on les pave avec le même carreau : celle qui en demande le plus a la plus grande aire. Pour ne pas se tromper, on compte en s'organisant, par colonnes ou par lignes."
      },
      {
        "title": "3. Aire et périmètre : deux grandeurs différentes",
        "content": "• L'**aire** mesure la **surface** occupée par une figure.\n• Le **périmètre** mesure la **longueur du contour** (ce qu'on « entoure »).\nDeux figures peuvent avoir la même aire et des périmètres différents, et inversement. Par exemple, un rectangle $4 \\times 1$ et un carré $2 \\times 2$ ont tous deux une aire de $4$ carreaux, mais des périmètres de $10$ et $8$ unités. Découper et recoller une figure conserve son aire, mais peut changer son périmètre."
      },
      {
        "title": "4. Les unités d’aire",
        "content": "Les unités d'aire sont les aires de **carrés** dont le côté mesure une unité de longueur :\n• $1\\text{ cm}^2$ est l'aire d'un carré de $1\\text{ cm}$ de côté ;\n• $1\\text{ dm}^2$ est l'aire d'un carré de $1\\text{ dm}$ de côté ;\n• $1\\text{ m}^2$ est l'aire d'un carré de $1\\text{ m}$ de côté.\nDe même, $1\\text{ mm}^2$ est l'aire d'un carré de $1\\text{ mm}$ de côté, et $1\\text{ km}^2$ celle d'un carré de $1\\text{ km}$ de côté.\nOn choisit l'unité selon la taille de la surface : le $\\text{cm}^2$ pour une feuille, le $\\text{m}^2$ pour une pièce, le $\\text{km}^2$ pour une ville."
      },
      {
        "title": "5. Convertir des aires : m², dm² et cm²",
        "content": "Comme $1\\text{ dm} = 10\\text{ cm}$, un carré de $1\\text{ dm}$ de côté se pave avec $10$ rangées de $10$ carrés de $1\\text{ cm}$ de côté. Il en contient donc $10 \\times 10 = 100$. De même avec le mètre et le décimètre :\n$$1\\text{ m}^2 = 100\\text{ dm}^2 \\quad ; \\quad 1\\text{ dm}^2 = 100\\text{ cm}^2$$\nAutrement dit, $1\\text{ dm}^2 = 0{,}01\\text{ m}^2$ et $1\\text{ cm}^2 = 0{,}01\\text{ dm}^2$.\nOn convertit à partir de ces égalités : $3\\text{ m}^2 = 3 \\times 100\\text{ dm}^2 = 300\\text{ dm}^2$ et $450\\text{ cm}^2 = 450 \\div 100\\text{ dm}^2 = 4{,}5\\text{ dm}^2$."
      },
      {
        "title": "6. Aire du rectangle et du carré",
        "content": "Un rectangle de $5\\text{ cm}$ sur $3\\text{ cm}$ se pave avec des carrés de $1\\text{ cm}$ de côté : il y a $3$ lignes de $5$ carreaux, soit $3 \\times 5 = 15$ carreaux. Son aire vaut donc $15\\text{ cm}^2$. On multiplie le nombre de lignes par le nombre de colonnes, ce qui donne les formules :\n• Rectangle de longueur $L$ et de largeur $\\ell$ : $\\mathcal{A} = L \\times \\ell$.\n• Carré de côté $c$ : $\\mathcal{A} = c \\times c$.\nLes deux longueurs doivent être dans **la même unité** ; l'aire s'exprime alors dans l'unité « carrée » correspondante.\nExemple : un rectangle de $8\\text{ cm}$ sur $3\\text{ cm}$ a une aire de $8 \\times 3 = 24\\text{ cm}^2$."
      },
      {
        "title": "7. Figures composées",
        "content": "Pour une figure complexe, on la **découpe** en rectangles et carrés dont on additionne les aires, ou on calcule l'aire d'un grand rectangle **moins** celle de la partie retirée."
      },
      {
        "title": "Pour aller plus loin : aire d’un triangle rectangle",
        "content": "Une diagonale partage un rectangle en deux triangles rectangles identiques : chacun a donc pour aire la **moitié** de celle du rectangle.\nExemple : pour un triangle rectangle dont les côtés de l'angle droit mesurent $6\\text{ cm}$ et $4\\text{ cm}$, on calcule l'aire du rectangle de $6\\text{ cm}$ sur $4\\text{ cm}$, soit $6 \\times 4 = 24\\text{ cm}^2$, puis on en prend la moitié : $24 \\div 2 = 12\\text{ cm}^2$."
      },
      {
        "title": "À retenir",
        "content": "• Une figure découpée puis recollée, sans trou ni chevauchement, garde la même aire.\n• Aire (surface, en unités « carrées ») $\\neq$ périmètre (contour, en unités de longueur).\n• $1\\text{ m}^2 = 100\\text{ dm}^2$ et $1\\text{ dm}^2 = 100\\text{ cm}^2$.\n• Carré : $\\mathcal{A} = c \\times c$ ; rectangle : $\\mathcal{A} = L \\times \\ell$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer une aire en comptant des carreaux",
        "example": "Sur un quadrillage dont chaque carreau a une aire de $1\\text{ cm}^2$, une figure est formée de $3$ colonnes de $4$ carreaux et de $2$ colonnes de $2$ carreaux. Quelle est son aire ?",
        "steps": [
          "**Étape 1** : On repère le carreau unité : ici, un carreau a une aire de $1\\text{ cm}^2$.",
          "**Étape 2** : On compte en s'organisant, colonne par colonne : $3 \\times 4 = 12$ carreaux, puis $2 \\times 2 = 4$ carreaux.",
          "**Étape 3** : On additionne : $12 + 4 = 16$ carreaux, donc l'aire de la figure vaut $16\\text{ cm}^2$."
        ]
      },
      {
        "title": "Méthode : Convertir une aire",
        "example": "Convertir $3{,}5\\text{ m}^2$ en $\\text{dm}^2$, puis $720\\text{ cm}^2$ en $\\text{dm}^2$.",
        "steps": [
          "**Étape 1** : On écrit l'égalité qui relie les deux unités : $1\\text{ m}^2 = 100\\text{ dm}^2$.",
          "**Étape 2** : Il faut $100$ fois plus de $\\text{dm}^2$ que de $\\text{m}^2$, donc $3{,}5\\text{ m}^2 = 3{,}5 \\times 100\\text{ dm}^2 = 350\\text{ dm}^2$.",
          "**Étape 3** : De même, $1\\text{ dm}^2 = 100\\text{ cm}^2$ : il faut $100$ fois moins de $\\text{dm}^2$ que de $\\text{cm}^2$, donc $720\\text{ cm}^2 = 720 \\div 100\\text{ dm}^2 = 7{,}2\\text{ dm}^2$."
        ]
      },
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
      "⚠️ $1\\text{ m}^2$ ne vaut pas $100\\text{ cm}^2$ : on passe par le $\\text{dm}^2$. Comme $1\\text{ m}^2 = 100\\text{ dm}^2$ et $1\\text{ dm}^2 = 100\\text{ cm}^2$, on a $1\\text{ m}^2 = 100 \\times 100 = 10\\,000\\text{ cm}^2$.",
      "⚠️ Comme $1\\text{ dm} = 10\\text{ cm}$, on est tenté d'écrire $1\\text{ dm}^2 = 10\\text{ cm}^2$. C'est faux : un carré de $1\\text{ dm}$ de côté contient $10$ rangées de $10$ carrés de $1\\text{ cm}$ de côté, soit $100\\text{ cm}^2$.",
      "⚠️ Une aire s'écrit avec une unité « au carré » ($\\text{cm}^2$, $\\text{m}^2$…) ; un périmètre avec une unité de longueur."
    ],
    "flashcards": [
      { "q": "Quelle est la formule de l’aire d’un rectangle ?", "a": "$\\mathcal{A} = L \\times \\ell$ (longueur fois largeur)." },
      { "q": "Combien de $\\text{cm}^2$ dans $1\\text{ dm}^2$ ?", "a": "$1\\text{ dm}^2 = 100\\text{ cm}^2$ (un carré de 10 cm sur 10 cm)." },
      { "q": "Aire d'un carré de côté $7\\text{ cm}$ ?", "a": "$7 \\times 7 = 49\\text{ cm}^2$." },
      { "q": "Deux figures de même aire ont-elles forcément le même périmètre ?", "a": "**Non.** Exemple : un rectangle $4 \\times 1$ et un carré $2 \\times 2$ ont la même aire ($4$) mais des périmètres différents ($10$ et $8$)." },
      { "q": "On découpe une figure et on recolle les morceaux, sans trou ni chevauchement. Que devient son aire ?", "a": "Elle ne change pas. Le périmètre, lui, peut changer." },
      { "q": "Qu'est-ce que $1\\text{ km}^2$ ?", "a": "C'est l'aire d'un carré de $1\\text{ km}$ de côté." },
      { "q": "(Pour aller plus loin) Aire d'un triangle rectangle dont les côtés de l'angle droit mesurent $6\\text{ cm}$ et $4\\text{ cm}$ ?", "a": "C'est la moitié d'un rectangle de $6\\text{ cm}$ sur $4\\text{ cm}$ : $6 \\times 4 = 24$, puis $24 \\div 2 = 12\\text{ cm}^2$." }
    ]
  },
  "6M3": {
    "title": "6M3 : Volumes : centimètre cube, pavés et cubes",
    "domain": "Grandeurs et Mesures",
    "objectives": [
      "Connaître le centimètre cube : le volume d'un cube de $1\\text{ cm}$ d'arête.",
      "Déterminer un volume en dénombrant les cubes d'un assemblage.",
      "Comparer des volumes en comptant des cubes.",
      "Passer du comptage par couches à l'écriture multiplicative : (cubes d'une couche) $\\times$ (nombre de couches).",
      "Pour aller plus loin (programme de 5e) : volume du pavé droit et du cube, lien entre le litre et les unités de volume."
    ],
    "keyPoints": [
      {
        "title": "1. Mesurer un volume avec des cubes unités",
        "content": "Le **volume** d'un solide mesure la place qu'il occupe dans l'espace. On le mesure en comptant combien de **cubes unités** il contient.\nLe **centimètre cube** ($\\text{cm}^3$) est le volume d'un cube de $1\\text{ cm}$ d'arête.\nExemple : un empilement de 3 couches de $4 \\times 2$ petits cubes de $1\\text{ cm}^3$ a un volume de $8 \\times 3 = 24\\text{ cm}^3$.\nPour un liquide, on parle de **contenance**, exprimée en litres (vu à l'école) : $1\\text{ L} = 10\\text{ dL} = 100\\text{ cL} = 1\\,000\\text{ mL}$."
      },
      {
        "title": "2. Compter par couches et comparer",
        "content": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.85rem auto;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 202 187\" width=\"202\" height=\"187\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"89.5,48 112,61 89.5,74 67,61\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,87 89.5,100 89.5,74 112,61\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"67,87 89.5,100 89.5,74 67,61\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,22 112,35 89.5,48 67,35\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,61 89.5,74 89.5,48 112,35\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"67,61 89.5,74 89.5,48 67,35\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"67,61 89.5,74 67,87 44.5,74\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,100 67,113 67,87 89.5,74\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"44.5,100 67,113 67,87 44.5,74\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,61 134.5,74 112,87 89.5,74\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"134.5,100 112,113 112,87 134.5,74\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,100 112,113 112,87 89.5,74\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"67,35 89.5,48 67,61 44.5,48\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,74 67,87 67,61 89.5,48\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"44.5,74 67,87 67,61 44.5,48\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"44.5,74 67,87 44.5,100 22,87\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"67,113 44.5,126 44.5,100 67,87\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"22,113 44.5,126 44.5,100 22,87\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,35 134.5,48 112,61 89.5,48\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"134.5,74 112,87 112,61 134.5,48\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,74 112,87 112,61 89.5,48\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,74 112,87 89.5,100 67,87\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,113 89.5,126 89.5,100 112,87\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"67,113 89.5,126 89.5,100 67,87\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"134.5,74 157,87 134.5,100 112,87\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"157,113 134.5,126 134.5,100 157,87\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,113 134.5,126 134.5,100 112,87\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"44.5,48 67,61 44.5,74 22,61\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"67,87 44.5,100 44.5,74 67,61\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"22,87 44.5,100 44.5,74 22,61\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,48 112,61 89.5,74 67,61\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,87 89.5,100 89.5,74 112,61\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"67,87 89.5,100 89.5,74 67,61\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"67,87 89.5,100 67,113 44.5,100\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,126 67,139 67,113 89.5,100\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"44.5,126 67,139 67,113 44.5,100\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"134.5,48 157,61 134.5,74 112,61\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"157,87 134.5,100 134.5,74 157,61\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,87 134.5,100 134.5,74 112,61\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,87 134.5,100 112,113 89.5,100\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"134.5,126 112,139 112,113 134.5,100\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,126 112,139 112,113 89.5,100\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"157,87 179.5,100 157,113 134.5,100\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"179.5,126 157,139 157,113 179.5,100\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"134.5,126 157,139 157,113 134.5,100\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"67,61 89.5,74 67,87 44.5,74\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,100 67,113 67,87 89.5,74\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"44.5,100 67,113 67,87 44.5,74\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,61 134.5,74 112,87 89.5,74\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"134.5,100 112,113 112,87 134.5,74\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,100 112,113 112,87 89.5,74\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,100 112,113 89.5,126 67,113\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,139 89.5,152 89.5,126 112,113\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"67,139 89.5,152 89.5,126 67,113\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"157,61 179.5,74 157,87 134.5,74\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"179.5,100 157,113 157,87 179.5,74\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"134.5,100 157,113 157,87 134.5,74\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"134.5,100 157,113 134.5,126 112,113\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"157,139 134.5,152 134.5,126 157,113\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,139 134.5,152 134.5,126 112,113\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,74 112,87 89.5,100 67,87\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,113 89.5,126 89.5,100 112,87\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"67,113 89.5,126 89.5,100 67,87\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"134.5,74 157,87 134.5,100 112,87\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"157,113 134.5,126 134.5,100 157,87\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,113 134.5,126 134.5,100 112,87\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,113 134.5,126 112,139 89.5,126\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"134.5,152 112,165 112,139 134.5,126\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,152 112,165 112,139 89.5,126\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"112,87 134.5,100 112,113 89.5,100\" fill=\"#bfdbfe\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"134.5,126 112,139 112,113 134.5,100\" fill=\"#3b82f6\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/><polygon points=\"89.5,126 112,139 112,113 89.5,100\" fill=\"#93c5fd\" stroke=\"#1e3a8a\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/></svg></div>\nPour dénombrer un assemblage, on compte les cubes **couche par couche**, sans oublier ceux qui sont cachés.\n• Si toutes les couches sont identiques, on multiplie :\n$$\\text{nombre de cubes} = (\\text{cubes d'une couche}) \\times (\\text{nombre de couches})$$\n• Si les étages sont différents, on compte les cubes de chaque étage, puis on additionne.\nExemple : ce pavé mesure 4 cubes de long, 3 de large et 2 de haut. Une couche contient $4 \\times 3 = 12$ cubes, donc le pavé en contient $12 \\times 2 = 24$. Avec des cubes de $1\\text{ cm}^3$, son volume est $24\\text{ cm}^3$.\nCas du grand cube : avec 5 petits cubes le long de chaque arête, une couche contient $5 \\times 5 = 25$ cubes et il y a 5 couches, soit $25 \\times 5 = 125$ petits cubes.\nPour **comparer** deux volumes, on compte les cubes de chaque assemblage. Deux assemblages de formes différentes peuvent avoir le même volume : un pavé de 8 cubes de long, 4 de large et 2 de haut et un grand cube de 4 cubes par arête contiennent chacun $64$ cubes."
      },
      {
        "title": "3. Pour aller plus loin : volume du pavé droit et du cube",
        "content": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 300 190\" width=\"300\" height=\"190\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n<polygon points=\"40,70 200,70 200,170 40,170\" fill=\"rgba(16,185,129,0.10)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<polygon points=\"40,70 90,30 250,30 200,70\" fill=\"rgba(16,185,129,0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<polygon points=\"200,70 250,30 250,130 200,170\" fill=\"rgba(16,185,129,0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"40\" y1=\"170\" x2=\"90\" y2=\"130\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<line x1=\"90\" y1=\"130\" x2=\"250\" y2=\"130\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<line x1=\"90\" y1=\"130\" x2=\"90\" y2=\"30\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n<text x=\"120\" y=\"186\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Longueur L</text>\n<text x=\"262\" y=\"160\" text-anchor=\"start\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">largeur ℓ</text>\n<text x=\"10\" y=\"125\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">h</text>\n</svg>\n</div>\nEn 5e, le comptage par couches devient une formule, valable aussi pour des longueurs non entières.\n• Pavé droit (parallélépipède rectangle) de longueur $L$, largeur $\\ell$ et hauteur $h$ : $\\mathcal{V} = L \\times \\ell \\times h$.\n• Cube d'arête $a$ : $\\mathcal{V} = a \\times a \\times a$.\nLes trois dimensions doivent être exprimées dans **la même unité**.\nExemple : un pavé de $5\\text{ cm}$, $3\\text{ cm}$ et $2\\text{ cm}$ a un volume de $5 \\times 3 \\times 2 = 30\\text{ cm}^3$."
      },
      {
        "title": "4. Pour aller plus loin : volume et contenance",
        "content": "La **contenance** d'un récipient est le volume de liquide qu'il peut contenir. En 5e, on relie les litres aux unités de volume :\n$$1\\text{ dm}^3 = 1\\text{ L} = 1\\,000\\text{ cm}^3 \\quad ; \\quad 1\\text{ cm}^3 = 1\\text{ mL}$$\nExemple : une boîte de $20\\text{ cm} \\times 10\\text{ cm} \\times 5\\text{ cm}$ a un volume de $1\\,000\\text{ cm}^3$, soit $1\\text{ L}$."
      },
      {
        "title": "À retenir",
        "content": "• Le centimètre cube est le volume d'un cube de $1\\text{ cm}$ d'arête.\n• On compte les cubes couche par couche : (cubes d'une couche) $\\times$ (nombre de couches).\n• Si les étages sont différents, on additionne les cubes de chaque étage.\n• Ne pas oublier les cubes cachés.\n• Contenances : $1\\text{ L} = 10\\text{ dL} = 100\\text{ cL} = 1\\,000\\text{ mL}$.\n• **Pour aller plus loin** : pavé droit $\\mathcal{V} = L \\times \\ell \\times h$ ; cube $\\mathcal{V} = a \\times a \\times a$ ; $1\\text{ dm}^3 = 1\\text{ L} = 1\\,000\\text{ cm}^3$ et $1\\text{ cm}^3 = 1\\text{ mL}$."
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
        "title": "Méthode : Dénombrer un assemblage irrégulier",
        "example": "On regarde un assemblage de cubes de $1\\text{ cm}^3$ du dessus. Les colonnes contiennent $3$, $2$ et $1$ cubes sur la première rangée, $2$, $1$ et $1$ cube sur la seconde. Quel est son volume ?",
        "steps": [
          "**Étape 1** : Étage du bas : chacune des 6 colonnes y a un cube, soit $6$ cubes.",
          "**Étape 2** : Deuxième étage : seules les colonnes d'au moins 2 cubes y arrivent, soit $3$ cubes.",
          "**Étape 3** : Troisième étage : une seule colonne y arrive, soit $1$ cube.",
          "**Étape 4** : On additionne : $6 + 3 + 1 = 10$ cubes, donc le volume est $10\\text{ cm}^3$."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Calculer une contenance en litres",
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
      "⚠️ Un grand cube de 3 petits cubes par arête ne contient pas $3 \\times 3 = 9$ petits cubes : $9$ est le nombre de cubes d'**une seule couche**. Il y a 3 couches, donc $9 \\times 3 = 27$ petits cubes.",
      "⚠️ Quand on compte des cubes sur un dessin, il ne faut pas oublier les cubes **cachés** à l'arrière ou en dessous."
    ],
    "flashcards": [
      { "q": "Comment compter rapidement les cubes d'un pavé ?", "a": "On compte les cubes d'une couche, puis on multiplie par le nombre de couches." },
      { "q": "Grand cube formé de 4 petits cubes de $1\\text{ cm}^3$ par arête : quel est son volume ?", "a": "$4 \\times 4 = 16$ cubes par couche et $4$ couches : $16 \\times 4 = 64\\text{ cm}^3$." },
      { "q": "(Pour aller plus loin) Quelle est la formule du volume d’un pavé droit ?", "a": "$\\mathcal{V} = L \\times \\ell \\times h$." },
      { "q": "(Pour aller plus loin) Combien de $\\text{cm}^3$ dans $1\\text{ L}$ ?", "a": "$1\\text{ L} = 1\\text{ dm}^3 = 1\\,000\\text{ cm}^3$." },
      { "q": "(Pour aller plus loin) À quoi correspond $1\\text{ cm}^3$ en contenance ?", "a": "$1\\text{ cm}^3 = 1\\text{ mL}$." },
      { "q": "Qu’est-ce qu’un centimètre cube ?", "a": "Le volume d'un cube de $1\\text{ cm}$ d'arête." }
    ]
  },
  "6M4": {
    "title": "6M4 : Repérage dans le temps et durées",
    "domain": "Grandeurs et Mesures",
    "objectives": [
      "Distinguer un horaire (un instant) et une durée (un intervalle de temps).",
      "Connaître les relations entre unités de durée : 1 h = 60 min, 1 min = 60 s, 1 j = 24 h.",
      "Se repérer dans le calendrier : semaine, année (bissextile ou non), siècle, millénaire.",
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
        "content": "$$1\\text{ h} = 60\\text{ min} \\quad ; \\quad 1\\text{ min} = 60\\text{ s} \\quad ; \\quad 1\\text{ h} = 3\\,600\\text{ s} \\quad ; \\quad 1\\text{ j} = 24\\text{ h}$$\nLes durées ne suivent **pas** le système décimal : $1{,}5\\text{ h}$ ne vaut pas 1 h 50 min mais **1 h 30 min** (car $0{,}5\\text{ h} = 30\\text{ min}$).\nÀ retenir : $0{,}1\\text{ h} = 6\\text{ min}$ ; $0{,}25\\text{ h} = 15\\text{ min}$ ; $0{,}5\\text{ h} = 30\\text{ min}$ ; $0{,}75\\text{ h} = 45\\text{ min}$."
      },
      {
        "title": "3. Calculer une durée entre deux horaires",
        "content": "On peut **compléter par étapes** jusqu'à l'heure ronde (méthode du « saut ») :\nDe 9 h 40 à 11 h 15 : de 9 h 40 à 10 h → 20 min ; de 10 h à 11 h → 1 h ; de 11 h à 11 h 15 → 15 min.\nTotal : 1 h 35 min.\nOn peut aussi poser une soustraction en séparant heures et minutes, en **convertissant 1 h en 60 min** si nécessaire."
      },
      {
        "title": "4. Rappel : lire l'heure et se repérer dans le calendrier",
        "content": "• **Lire l'heure.** Sur une horloge à aiguilles, la petite aiguille indique les heures et la grande les minutes ; la grande aiguille fait un tour complet en $1$ heure.\n• **Semaine.** $1$ semaine $= 7$ jours.\n• **Année.** Une année compte $365$ jours ; une année **bissextile** en compte $366$, car février a alors $29$ jours au lieu de $28$. En général, les années bissextiles sont celles dont le numéro est un multiple de $4$ : $2024$, $2028$…\n• **Siècle et millénaire.** $1$ siècle $= 100$ ans ; $1$ millénaire $= 1\\,000$ ans. Le premier siècle va de l'an $1$ à l'an $100$, et le XXIe siècle de $2001$ à $2100$."
      },
      {
        "title": "À retenir",
        "content": "• $1\\text{ h} = 60\\text{ min}$, $1\\text{ min} = 60\\text{ s}$, $1\\text{ j} = 24\\text{ h}$.\n• $0{,}5\\text{ h} = 30\\text{ min}$ (et non $50$ min) ; $0{,}25\\text{ h} = 15\\text{ min}$ ; $0{,}1\\text{ h} = 6\\text{ min}$.\n• Pour calculer une durée : compléter jusqu'à l'heure ronde.\n• $1$ semaine $= 7$ jours ; une année bissextile compte $366$ jours ; $1$ siècle $= 100$ ans ; $1$ millénaire $= 1\\,000$ ans."
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
      { "q": "Combien de secondes dans une heure ?", "a": "$1\\text{ h} = 60 \\times 60 = 3\\,600\\text{ s}$." },
      { "q": "Que vaut un quart d’heure en minutes ?", "a": "$15\\text{ min}$ (car $60 \\div 4 = 15$)." },
      { "q": "Convertir $2{,}5\\text{ h}$ en heures et minutes.", "a": "$2{,}5\\text{ h} = 2\\text{ h } 30\\text{ min}$." },
      { "q": "Quelle durée s’écoule entre 10 h 45 et 12 h 10 ?", "a": "15 min (jusqu’à 11 h) + 1 h + 10 min = 1 h 25 min." },
      { "q": "Combien d’heures dans 3 jours ?", "a": "$3 \\times 24 = 72\\text{ h}$." },
      { "q": "Que vaut $0{,}1\\text{ h}$ en minutes ?", "a": "$0{,}1 \\times 60 = 6\\text{ min}$." },
      { "q": "Combien de jours compte une année bissextile ?", "a": "$366$ jours : février a alors $29$ jours." },
      { "q": "Combien d’années dans un siècle ? Dans un millénaire ?", "a": "$100$ ans dans un siècle, $1\\,000$ ans dans un millénaire." }
    ]
  },
  "6G1": {
    "title": "6G1 : Droites, segments, distances, milieu et cercle",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Utiliser les notations : droite $(AB)$, demi-droite $[AB)$, segment $[AB]$, longueur $AB$.",
      "Connaître la définition de la distance entre deux points et du milieu d’un segment, et savoir construire ce milieu.",
      "Reconnaître et tracer des droites perpendiculaires et parallèles.",
      "Connaître le vocabulaire du cercle et du disque : centre, rayon, diamètre, corde.",
      "Savoir que le cercle de centre $O$ et de rayon $r$ est l’ensemble des points situés à la distance $r$ de $O$, et que le disque est l’ensemble des points situés à une distance inférieure ou égale à $r$ de $O$.",
      "Connaître les quadrilatères particuliers (rectangle, losange, carré) et les décrire avec le vocabulaire de la géométrie."
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
        "title": "4. Quadrilatères particuliers",
        "content": "• Un **rectangle** est un quadrilatère qui a **quatre angles droits**. Ses côtés opposés sont parallèles et de même longueur ; ses diagonales ont la même longueur et le même milieu.\n• Un **losange** est un quadrilatère qui a **quatre côtés de même longueur**. Ses côtés opposés sont parallèles ; ses diagonales sont perpendiculaires et ont le même milieu.\n• Un **carré** a quatre angles droits **et** quatre côtés de même longueur : c'est à la fois un rectangle et un losange.\nPour construire un rectangle, on utilise l'équerre (angles droits) et la règle graduée ; pour un losange, le compas (côtés égaux)."
      },
      {
        "title": "5. Cercle et disque",
        "content": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 300 200\" width=\"300\" height=\"200\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"150\" cy=\"100\" r=\"75\" fill=\"rgba(16,185,129,0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"75\" y1=\"100\" x2=\"225\" y2=\"100\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n<line x1=\"150\" y1=\"100\" x2=\"203\" y2=\"47\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<line x1=\"96\" y1=\"153\" x2=\"204\" y2=\"153\" stroke=\"#d97706\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/>\n<circle cx=\"150\" cy=\"100\" r=\"3.5\" fill=\"var(--text-main, #334155)\"/>\n<text x=\"150\" y=\"120\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n<text x=\"62\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n<text x=\"238\" y=\"104\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n<text x=\"212\" y=\"42\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">M</text>\n<text x=\"188\" y=\"72\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">rayon</text>\n<text x=\"110\" y=\"94\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\">diamètre</text>\n<text x=\"150\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#d97706\">corde</text>\n</svg>\n</div>\nLe **cercle** de centre $O$ et de rayon $r$ est l'ensemble de **tous les points situés à la distance $r$** du point $O$. Le **disque** de centre $O$ et de rayon $r$ est l'ensemble de **tous les points situés à une distance inférieure ou égale à $r$** du point $O$ : il est formé du cercle et de la surface qu'il délimite.\n• Un **rayon** est un segment qui joint le centre à un point du cercle : $[OM]$.\n• Une **corde** est un segment qui joint deux points du cercle.\n• Un **diamètre** est une corde qui passe par le centre : $[AB]$. Sa longueur vaut le double du rayon : $d = 2 \\times r$. Le diamètre est la **plus grande des cordes** du cercle."
      },
      {
        "title": "À retenir",
        "content": "• $(AB)$ droite, $[AB)$ demi-droite, $[AB]$ segment, $AB$ longueur.\n• Milieu : point du segment à égale distance des extrémités.\n• Cercle de centre $O$ et de rayon $r$ : tous les points à la distance $r$ de $O$ ; $d = 2 \\times r$.\n• Disque de centre $O$ et de rayon $r$ : tous les points à une distance inférieure ou égale à $r$ de $O$."
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
      },
      {
        "title": "Méthode : Construire le milieu d'un segment",
        "example": "Placer le milieu $I$ d'un segment $[AB]$ de longueur $7{,}4\\text{ cm}$.",
        "steps": [
          "**À la règle graduée** : on calcule $7{,}4 \\div 2 = 3{,}7$, puis on place $I$ sur $[AB]$ à $3{,}7\\text{ cm}$ de $A$.",
          "**Par pliage** : on plie la feuille pour amener $A$ exactement sur $B$ ; le pli coupe $[AB]$ en son milieu $I$.",
          "**Au compas et à la règle non graduée** : on prend un écartement de compas plus grand que la moitié de $AB$. On trace deux arcs de centre $A$, l'un au-dessus et l'autre en dessous du segment, puis deux arcs de même rayon centrés en $B$. La droite qui joint les deux points d'intersection coupe $[AB]$ en son milieu $I$ (cette droite est la **médiatrice** de $[AB]$ : voir le chapitre 6G2).",
          "**Contrôle** : $I$ est bien sur $[AB]$ et $AI = IB = 3{,}7\\text{ cm}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre $[AB]$ (un segment, un objet) et $AB$ (sa longueur, un nombre).",
      "⚠️ Un point à égale distance de $A$ et de $B$ n'est pas forcément le milieu de $[AB]$ : il doit aussi appartenir au segment.",
      "⚠️ Le diamètre est le **double** du rayon, et non la moitié."
    ],
    "flashcards": [
      { "q": "Que désigne la notation $[AB)$ ?", "a": "La demi-droite d'origine $A$ passant par $B$." },
      { "q": "Quelle est la définition du milieu d’un segment ?", "a": "C'est le point du segment situé à égale distance des deux extrémités." },
      { "q": "Un cercle a un diamètre de $11\\text{ cm}$. Quel est son rayon ?", "a": "$11 \\div 2 = 5{,}5\\text{ cm}$." },
      { "q": "Qu’est-ce qu’une corde d’un cercle ?", "a": "Un segment dont les deux extrémités sont des points du cercle." },
      { "q": "Quelle est la plus grande corde d'un cercle ?", "a": "Un diamètre : aucune corde n'est plus longue." },
      { "q": "Deux droites perpendiculaires à une même droite sont…", "a": "… parallèles entre elles." },
      { "q": "Qu'est-ce qu'un losange ?", "a": "Un quadrilatère qui a quatre côtés de même longueur." }
    ]
  },
  "6G2": {
    "title": "6G2 : Médiatrice et symétrie axiale",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Connaître la définition de la médiatrice d’un segment.",
      "Connaître et utiliser sa propriété caractéristique (équidistance aux extrémités).",
      "Construire le symétrique d’un point, d’un segment, d’une demi-droite, d’un cercle, d’une figure par rapport à une droite.",
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
        "content": "La symétrie axiale **conserve** :\n• les **longueurs** : le symétrique d'un segment est un segment de même longueur ;\n• les **angles** : le symétrique d'un angle est un angle de même mesure ;\n• l'**alignement** : le symétrique d'une droite est une droite ; le symétrique d'une **demi-droite** $[AB)$ est la demi-droite $[A'B')$, d'origine $A'$ ;\n• les **aires** et les **périmètres** des figures.\nLe symétrique d'un **cercle** de centre $O$ et de rayon $r$ est le cercle de centre $O'$, symétrique de $O$, et de **même rayon** $r$.\nUne droite $(d)$ est un **axe de symétrie** d'une figure si le symétrique de la figure par rapport à $(d)$ est la figure elle-même. Un carré en a 4, un rectangle (non carré) 2, un triangle équilatéral 3, un cercle une infinité."
      },
      {
        "title": "À retenir",
        "content": "• Médiatrice de $[AB]$ : perpendiculaire à $[AB]$ en son milieu ; ses points vérifient $MA = MB$.\n• $A'$ symétrique de $A$ par rapport à $(d)$ : $(d)$ est la médiatrice de $[AA']$.\n• La symétrie axiale conserve longueurs, angles, alignement et aires ; le symétrique d'un cercle est un cercle de même rayon."
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
      },
      {
        "title": "Méthode : Construire le symétrique d'un point par rapport à une droite",
        "example": "Construire le symétrique $A'$ du point $A$ par rapport à la droite $(d)$.",
        "steps": [
          "**Étape 1** : Avec l'équerre, on trace la perpendiculaire à $(d)$ passant par $A$ ; elle coupe $(d)$ en $H$.",
          "**Étape 2** : Avec le compas (pointe en $H$, écartement $HA$), on reporte la distance $HA$ de l'autre côté de $(d)$ : on obtient $A'$.",
          "**Étape 3** : On code : angle droit en $H$ et $HA = HA'$. La droite $(d)$ est bien la médiatrice de $[AA']$.",
          "**Sur papier quadrillé ou pointé** : quand l'axe suit une ligne du quadrillage ou des points, on compte les carreaux (ou les intervalles) de $A$ jusqu'à l'axe et on en compte autant de l'autre côté. Sur papier uni, on utilise les instruments comme ci-dessus."
        ]
      },
      {
        "title": "Méthode : Construire le symétrique d'une demi-droite ou d'un cercle",
        "example": "Construire, par rapport à une droite $(d)$, le symétrique d'une demi-droite $[AB)$, puis celui d'un cercle de centre $O$ et de rayon $3\\text{ cm}$.",
        "steps": [
          "**Demi-droite** : on construit les symétriques $A'$ et $B'$ des points $A$ et $B$, puis on trace la demi-droite $[A'B')$, d'origine $A'$.",
          "**Cercle** : on construit le symétrique $O'$ du centre $O$, puis on trace le cercle de centre $O'$ et de rayon $3\\text{ cm}$ : la symétrie conserve les longueurs, donc le rayon ne change pas."
        ]
      }
    ],
    "traps": [
      "⚠️ La médiatrice doit être **perpendiculaire** au segment **et** passer par son **milieu** : une seule de ces deux conditions ne suffit pas.",
      "⚠️ Pour construire un symétrique, on ne « recopie » pas la figure à côté de l'axe : on reporte chaque point **perpendiculairement** à l'axe, à la même distance.",
      "⚠️ Un parallélogramme quelconque n'a **aucun** axe de symétrie, même s'il « paraît » régulier."
    ],
    "flashcards": [
      { "q": "Définition de la médiatrice d’un segment ?", "a": "La droite perpendiculaire au segment qui passe par son milieu." },
      { "q": "$M$ est sur la médiatrice de $[AB]$. Que peut-on dire de $MA$ et $MB$ ?", "a": "$MA = MB$." },
      { "q": "Que conserve la symétrie axiale ?", "a": "Les longueurs, les angles, l’alignement, les aires et les périmètres." },
      { "q": "Quel est le symétrique d'un cercle de centre $O$ et de rayon $r$ ?", "a": "Le cercle de centre $O'$, symétrique de $O$, et de même rayon $r$." },
      { "q": "Combien d’axes de symétrie possède un carré ?", "a": "4 : les deux diagonales et les deux médiatrices des côtés." },
      { "q": "Combien d’axes de symétrie possède un triangle équilatéral ?", "a": "3 (les médiatrices de ses côtés)." }
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
        "content": "Un angle est formé par deux demi-droites de même origine, le **sommet**. L'angle de sommet $B$ formé par $[BA)$ et $[BC)$ se note $\\widehat{ABC}$ (le sommet est au milieu). On le mesure en **degrés** ($^\\circ$) : $1^\\circ$ est $\\frac{1}{180}$ de l'angle plat. Un quart de tour correspond à $90^\\circ$ (angle droit), un demi-tour à $180^\\circ$ (angle plat) et un tour complet à $360^\\circ$.\nPour **comparer** deux angles sans les mesurer, on reproduit l'un d'eux sur du papier calque (ou avec un gabarit), puis on le superpose à l'autre en faisant coïncider le sommet et un côté.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 440 130\" width=\"440\" height=\"130\" style=\"max-width:440px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n<line x1=\"20\" y1=\"100\" x2=\"120\" y2=\"100\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"20\" y1=\"100\" x2=\"95\" y2=\"40\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<path d=\"M 50 100 A 30 30 0 0 0 43 82\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n<text x=\"70\" y=\"122\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">aigu (< 90°)</text>\n<line x1=\"160\" y1=\"100\" x2=\"260\" y2=\"100\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"160\" y1=\"100\" x2=\"160\" y2=\"25\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<rect x=\"160\" y=\"88\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"#059669\" stroke-width=\"1.5\"/>\n<text x=\"210\" y=\"122\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">droit (90°)</text>\n<line x1=\"330\" y1=\"100\" x2=\"420\" y2=\"100\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"330\" y1=\"100\" x2=\"280\" y2=\"40\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<path d=\"M 360 100 A 30 30 0 0 0 311 77\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<text x=\"360\" y=\"122\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">obtus (entre 90° et 180°)</text>\n</svg>\n</div>\n• angle **nul** : $0^\\circ$ ; angle **aigu** : entre $0^\\circ$ et $90^\\circ$ ; angle **droit** : $90^\\circ$ ;\n• angle **obtus** : entre $90^\\circ$ et $180^\\circ$ ; angle **plat** : $180^\\circ$ ; angle **plein** : $360^\\circ$.\nHormis l'angle plein, tous les angles étudiés ici mesurent au plus $180^\\circ$ : un angle de mesure strictement comprise entre $0^\\circ$ et $180^\\circ$ est dit **saillant**."
      },
      {
        "title": "2. Angles adjacents, opposés par le sommet, supplémentaires",
        "content": "• Deux angles sont **adjacents** s'ils ont le même sommet, un côté commun et sont situés de part et d'autre de ce côté.\n• Deux angles **opposés par le sommet** sont formés par deux droites sécantes et se font face : ils ont **la même mesure**.\n• Deux angles sont **supplémentaires** si la somme de leurs mesures vaut $180^\\circ$. Deux angles adjacents formant un angle plat sont supplémentaires.\nExemple : si deux droites se coupent en formant un angle de $65^\\circ$, l'angle adjacent mesure $180^\\circ - 65^\\circ = 115^\\circ$ et l'angle opposé par le sommet mesure $65^\\circ$."
      },
      {
        "title": "3. Bissectrice d’un angle",
        "content": "La **bissectrice** d'un angle est la droite qui partage cet angle en **deux angles adjacents de même mesure**. Elle passe par le sommet de l'angle ; on en trace souvent seulement la demi-droite issue du sommet, située à l'intérieur de l'angle.\nExemple : la bissectrice d'un angle de $84^\\circ$ le partage en deux angles de $42^\\circ$.\nLa bissectrice est l'**axe de symétrie** de l'angle (on l'admet) : en pliant la feuille le long de cette droite, les deux côtés de l'angle se superposent. On peut donc construire la bissectrice par **pliage**, ou au **rapporteur** (voir la méthode ci-dessous)."
      },
      {
        "title": "À retenir",
        "content": "• Aigu : moins de $90^\\circ$ ; droit : $90^\\circ$ ; obtus : entre $90^\\circ$ et $180^\\circ$ ; plat : $180^\\circ$.\n• Rapporteur : centre sur le sommet, zéro sur un côté, lecture sur la même graduation.\n• Supplémentaires : somme $180^\\circ$ ; opposés par le sommet : même mesure.\n• Bissectrice : elle partage l'angle en deux angles adjacents de même mesure ; on la construit par pliage ou au rapporteur."
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
      },
      {
        "title": "Méthode : Construire un angle de mesure donnée",
        "example": "Construire un angle $\\widehat{xOy}$ de $125^\\circ$.",
        "steps": [
          "**Étape 1** : On trace la demi-droite $[Ox)$.",
          "**Étape 2** : On place le centre du rapporteur sur $O$ et le zéro d'une graduation sur $[Ox)$.",
          "**Étape 3** : En suivant cette graduation, on marque un point à $125^\\circ$, puis on trace $[Oy)$ passant par ce point.",
          "**Contrôle** : $125^\\circ > 90^\\circ$, l'angle tracé doit être **obtus**."
        ]
      },
      {
        "title": "Méthode : Construire la bissectrice d'un angle",
        "example": "Construire la bissectrice $[Oz)$ d'un angle $\\widehat{xOy}$ de $130^\\circ$.",
        "steps": [
          "**Par pliage** : on plie la feuille (ou un papier calque) de façon que le pli passe par le sommet $O$ et que les côtés $[Ox)$ et $[Oy)$ se superposent exactement. On déplie, puis on repasse le pli à la règle, à l'intérieur de l'angle.",
          "**Au rapporteur, étape 1** : on calcule la moitié de la mesure : $130^\\circ \\div 2 = 65^\\circ$.",
          "**Au rapporteur, étape 2** : on place le centre du rapporteur sur $O$ et le zéro d'une graduation sur $[Ox)$. En suivant cette graduation, on marque, à l'intérieur de l'angle (du côté de $[Oy)$), un point à $65^\\circ$, puis on trace la demi-droite $[Oz)$ passant par ce point.",
          "**Contrôle** : on mesure $\\widehat{zOy}$ ; on doit aussi trouver $65^\\circ$."
        ]
      }
    ],
    "traps": [
      "⚠️ Avec un rapporteur, il faut lire sur la graduation qui part de $0$ sur le côté choisi : sinon on lit $180^\\circ - $ la bonne mesure.",
      "⚠️ Dans la notation $\\widehat{ABC}$, le sommet est la **lettre du milieu** ($B$).",
      "⚠️ La taille des côtés dessinés ne change pas la mesure d'un angle."
    ],
    "flashcards": [
      { "q": "Qu’est-ce qu’un angle obtus ?", "a": "Un angle dont la mesure est comprise entre $90^\\circ$ et $180^\\circ$." },
      { "q": "Que vaut un angle plat ?", "a": "$180^\\circ$." },
      { "q": "Deux angles opposés par le sommet ont…", "a": "… la même mesure." },
      { "q": "Quel est le supplémentaire d'un angle de $72^\\circ$ ?", "a": "$180^\\circ - 72^\\circ = 108^\\circ$." },
      { "q": "Définition de la bissectrice d’un angle ?", "a": "La droite qui partage l’angle en deux angles adjacents de même mesure (on en trace souvent la demi-droite issue du sommet)." },
      { "q": "Comment construire au rapporteur la bissectrice d’un angle de $130^\\circ$ ?", "a": "On calcule la moitié, $65^\\circ$, puis on reporte cette mesure à partir d’un côté, le centre du rapporteur étant sur le sommet." }
    ]
  },
  "6G4": {
    "title": "6G4 : Triangles : constructions, triangles particuliers et somme des angles",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Construire un triangle connaissant trois longueurs, ou deux longueurs et l’angle compris entre elles, ou une longueur et deux angles.",
      "Connaître et utiliser la somme des angles d’un triangle : $180^\\circ$.",
      "Connaître les triangles particuliers (rectangle, isocèle, équilatéral) et leurs propriétés sur les angles, y compris les réciproques ; démontrer que chaque angle d’un triangle équilatéral mesure $60^\\circ$.",
      "Savoir que les trois médiatrices d’un triangle sont concourantes, restituer les arguments qui l’expliquent et construire le cercle circonscrit."
    ],
    "keyPoints": [
      {
        "title": "1. Somme des angles d’un triangle",
        "content": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 300 190\" width=\"300\" height=\"190\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n<polygon points=\"40,160 260,160 110,40\" fill=\"rgba(59,130,246,0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<path d=\"M 72 160 A 32 32 0 0 0 57 131\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n<path d=\"M 228 160 A 32 32 0 0 1 233 145\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n<path d=\"M 97 62 A 25 25 0 0 0 127 59\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2\"/>\n<text x=\"28\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n<text x=\"272\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n<text x=\"110\" y=\"30\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n<text x=\"150\" y=\"182\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#7c3aed\">Â + B̂ + Ĉ = 180°</text>\n</svg>\n</div>\nDécoupons les trois angles d'un triangle en papier et accolons-les, sommet contre sommet : ils forment un **angle plat**. On constate la même chose quel que soit le triangle de départ ; on **admet** donc, sans la démontrer pour l'instant, la propriété suivante.\nDans **tout** triangle, la somme des mesures des trois angles vaut $180^\\circ$ :\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$$\nExemple : si $\\widehat{A} = 50^\\circ$ et $\\widehat{B} = 70^\\circ$, alors $\\widehat{C} = 180^\\circ - (50^\\circ + 70^\\circ) = 60^\\circ$."
      },
      {
        "title": "2. Triangles particuliers",
        "content": "• Triangle **rectangle** : il a un angle droit. Comme la somme des trois angles vaut $180^\\circ$, ses deux autres angles ont pour somme $180^\\circ - 90^\\circ = 90^\\circ$ : ils sont aigus.\n• Triangle **isocèle** : il a deux côtés de même longueur. Ses deux **angles à la base** ont la même mesure. **Réciproquement**, un triangle qui a deux angles de même mesure est isocèle.\n• Triangle **équilatéral** : ses trois côtés ont la même longueur. Il est isocèle en chacun de ses sommets, donc ses trois angles ont la même mesure.\n**Démonstration : chaque angle d'un triangle équilatéral mesure $60^\\circ$.** Ses trois angles ont la même mesure et leur somme vaut $180^\\circ$, donc chacun mesure $180^\\circ \\div 3 = 60^\\circ$.\n**Réciproquement**, un triangle dont les trois angles ont la même mesure est équilatéral : il est isocèle en chacun de ses sommets, donc ses trois côtés ont la même longueur. Il suffit même de savoir que deux angles mesurent $60^\\circ$, car le troisième mesure alors $180^\\circ - 2 \\times 60^\\circ = 60^\\circ$."
      },
      {
        "title": "3. Construire un triangle",
        "content": "• **Trois longueurs** : on trace un côté, puis deux arcs de cercle (compas) centrés à ses extrémités ; leur intersection donne le troisième sommet.\n• **Inégalité triangulaire** : un triangle est constructible seulement si la plus grande longueur est **strictement inférieure** à la somme des deux autres. Avec $3\\text{ cm}$, $4\\text{ cm}$ et $8\\text{ cm}$ : $3 + 4 = 7 < 8$, impossible.\n• **Deux longueurs et l'angle compris entre elles** : on trace un côté, on construit l'angle au rapporteur à une extrémité, on reporte la seconde longueur sur le côté de l'angle, puis on relie.\n• **Un côté et deux angles** : on trace le côté puis les deux angles au rapporteur à ses extrémités."
      },
      {
        "title": "4. Médiatrices et cercle circonscrit",
        "content": "Les trois médiatrices des côtés d'un triangle sont **concourantes** (elles se coupent en un même point $O$).\n**Pourquoi ?** Un point est sur la médiatrice d'un segment exactement lorsqu'il est à égale distance des extrémités de ce segment. Appelons $O$ le point d'intersection des médiatrices de $[AB]$ et de $[BC]$.\n• $O$ est sur la médiatrice de $[AB]$, donc $OA = OB$.\n• $O$ est sur la médiatrice de $[BC]$, donc $OB = OC$.\n• Par conséquent $OA = OC$ : le point $O$ est à égale distance de $A$ et de $C$, il est donc aussi sur la médiatrice de $[AC]$.\nLes trois médiatrices passent bien par $O$. Comme $OA = OB = OC$, le cercle de centre $O$ et de rayon $OA$ passe par les trois sommets : c'est le **cercle circonscrit** au triangle."
      },
      {
        "title": "À retenir",
        "content": "• Somme des angles d'un triangle : $180^\\circ$ (constatée par accolement des trois angles, puis admise).\n• Isocèle : deux côtés égaux, angles à la base égaux, et réciproquement.\n• Équilatéral : trois angles de $60^\\circ$ car $180^\\circ \\div 3 = 60^\\circ$, et réciproquement.\n• Un point situé sur deux médiatrices d'un triangle est à égale distance des trois sommets, donc aussi sur la troisième médiatrice.\n• Constructible si le plus grand côté est **strictement** inférieur à la somme des deux autres."
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
        "title": "Méthode : Reconnaître un triangle équilatéral à ses angles",
        "example": "Dans le triangle $ABC$, $\\widehat{A} = 60^\\circ$ et $\\widehat{B} = 60^\\circ$. Démontrer que $ABC$ est équilatéral.",
        "steps": [
          "**Étape 1** : On calcule le troisième angle avec la somme des angles : $\\widehat{C} = 180^\\circ - 60^\\circ - 60^\\circ = 60^\\circ$.",
          "**Étape 2** : On compare les mesures : les trois angles mesurent $60^\\circ$.",
          "**Étape 3** : On conclut avec la propriété : un triangle dont les trois angles ont la même mesure est équilatéral."
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
      },
      {
        "title": "Méthode : Construire un triangle connaissant ses trois côtés",
        "example": "Construire le triangle $RST$ tel que $RS = 7\\text{ cm}$, $RT = 5\\text{ cm}$ et $ST = 4\\text{ cm}$.",
        "steps": [
          "**Étape 1** : On vérifie : $7 < 5 + 4 = 9$, le triangle est constructible. On fait un schéma à main levée.",
          "**Étape 2** : On trace le segment $[RS]$ de $7\\text{ cm}$.",
          "**Étape 3** : On trace un arc de cercle de centre $R$ et de rayon $5\\text{ cm}$, puis un arc de centre $S$ et de rayon $4\\text{ cm}$.",
          "**Étape 4** : $T$ est le point d'intersection des deux arcs ; on trace $[RT]$ et $[ST]$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un triangle isocèle, les angles égaux sont ceux **à la base**, pas l'angle au sommet principal.",
      "⚠️ La somme des angles vaut $180^\\circ$ pour **tous** les triangles, quelle que soit leur taille.",
      "⚠️ Si la plus grande longueur est égale à la somme des deux autres, les trois points sont **alignés** : il n'y a pas de vrai triangle."
    ],
    "flashcards": [
      { "q": "Quelle est la somme des angles d’un triangle ?", "a": "$180^\\circ$." },
      { "q": "Combien mesure chaque angle d’un triangle équilatéral, et pourquoi ?", "a": "$60^\\circ$ : ses trois angles ont la même mesure et leur somme vaut $180^\\circ$, donc chacun mesure $180^\\circ \\div 3 = 60^\\circ$." },
      { "q": "Un triangle a deux angles de $60^\\circ$. Quelle est sa nature ?", "a": "Le troisième angle mesure $180^\\circ - 2 \\times 60^\\circ = 60^\\circ$ : les trois angles ont la même mesure, le triangle est **équilatéral**." },
      { "q": "Que sait-on des angles à la base d’un triangle isocèle ?", "a": "Ils ont la même mesure." },
      { "q": "Peut-on construire un triangle de côtés $2\\text{ cm}$, $3\\text{ cm}$ et $6\\text{ cm}$ ?", "a": "Non, car $2 + 3 = 5 < 6$." },
      { "q": "Quel est le centre du cercle circonscrit à un triangle ?", "a": "Le point de concours des trois médiatrices de ses côtés." },
      { "q": "Pourquoi les trois médiatrices d’un triangle $ABC$ passent-elles par un même point ?", "a": "Le point $O$ commun aux médiatrices de $[AB]$ et de $[BC]$ vérifie $OA = OB$ et $OB = OC$, donc $OA = OC$ : il est aussi sur la médiatrice de $[AC]$." }
    ]
  },
  "6G5": {
    "title": "6G5 : Vision dans l’espace : assemblages de cubes et solides",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Dénombrer les cubes d’un assemblage, y compris les cubes cachés.",
      "Associer un assemblage de cubes à ses quatre vues : de dessus, de face, de gauche et de droite.",
      "Dessiner à main levée un cube ou un pavé droit en perspective cavalière, compléter un tel dessin.",
      "Reconnaître et décrire le cube et le pavé droit : faces, arêtes, sommets.",
      "Reconnaître un patron de cube ou de pavé droit.",
      "Reconnaître et nommer les solides usuels : prisme droit, pyramide, cylindre, cône, boule."
    ],
    "keyPoints": [
      {
        "title": "1. Cube et pavé droit",
        "content": "Un **pavé droit** (ou parallélépipède rectangle) a **6 faces** rectangulaires, **12 arêtes** et **8 sommets**. Les faces opposées sont superposables.\nUn **cube** est un pavé droit particulier dont les 6 faces sont des **carrés** identiques : toutes ses arêtes ont la même longueur.\nEn **perspective cavalière**, on représente le solide sur une feuille en donnant une impression de relief :\n• la face de devant est dessinée sans déformation ;\n• les arêtes parallèles dans la réalité restent parallèles sur le dessin ; celles qui partent vers l'arrière sont obliques et raccourcies ;\n• les arêtes visibles sont en traits pleins, les arêtes cachées **en pointillés**. Sur un cube ou un pavé droit, on voit $9$ arêtes et $3$ sont cachées : ce sont celles qui partent du seul sommet que l'on ne voit pas."
      },
      {
        "title": "2. Assemblages de cubes",
        "content": "Pour dénombrer les cubes d'un assemblage, on procède **méthodiquement** : étage par étage, ou colonne par colonne, sans oublier les cubes cachés qui soutiennent les cubes visibles.\n• Un assemblage « plein » de $a$ cubes en longueur, $b$ en largeur et $c$ étages contient $a \\times b \\times c$ cubes.\n• Pour compléter un assemblage en un grand cube ou un pavé, on calcule le nombre total de cubes nécessaires puis on retire ceux déjà présents."
      },
      {
        "title": "3. Vues d’un assemblage",
        "content": "• La **vue de dessus** montre ce que l'on voit en regardant d'en haut : un carré par colonne occupée.\n• La **vue de face** montre ce que voit une personne placée devant l'assemblage : pour chaque colonne, de gauche à droite, la pile la plus haute.\n• La **vue de gauche** et la **vue de droite** montrent ce que voit une personne placée à gauche ou à droite de l'assemblage : pour chaque rangée, la pile la plus haute.\n• Ces deux vues sont **symétriques** l'une de l'autre : la rangée de devant apparaît à droite sur la vue de gauche, et à gauche sur la vue de droite.\nCes vues se dessinent **à main levée** : seuls la forme et le nombre de carrés comptent. Plusieurs assemblages différents peuvent avoir la même vue de dessus : il faut souvent combiner plusieurs vues."
      },
      {
        "title": "4. Patrons",
        "content": "Un **patron** d'un solide est une figure plane qui, après pliage, permet de reconstituer le solide sans superposition.\nUn patron de cube est formé de **6 carrés** ; il existe 11 patrons de cube différents. Une « croix » de 6 carrés en est un exemple ; une ligne de 6 carrés n'en est pas un."
      },
      {
        "title": "5. Autres solides usuels",
        "content": "• **Prisme droit** : deux bases polygonales superposables et parallèles, reliées par des faces latérales rectangulaires (le pavé droit en est un).\n• **Pyramide** : une base polygonale et des faces latérales triangulaires qui se rejoignent en un même point, le **sommet** de la pyramide.\n• **Cylindre** : deux disques superposables reliés par une surface courbe (une boîte de conserve).\n• **Cône** : un disque de base et une surface courbe qui se termine en pointe (un cornet de glace).\n• **Boule** : tous les points situés à une distance inférieure ou égale au rayon d'un centre (la **sphère** est sa surface).\nLes solides qui ont uniquement des faces planes (cube, pavé, prisme, pyramide) sont des **polyèdres**."
      },
      {
        "title": "À retenir",
        "content": "• Pavé droit et cube : $6$ faces, $12$ arêtes, $8$ sommets.\n• Compter les cubes méthodiquement (étages ou colonnes), sans oublier les cubes cachés.\n• Quatre vues : de dessus, de face, de gauche, de droite ; les vues de gauche et de droite sont symétriques l'une de l'autre.\n• En perspective cavalière : les arêtes parallèles restent parallèles, les arêtes cachées sont en pointillés.\n• Un patron se replie sans superposition ; il existe $11$ patrons de cube."
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
      },
      {
        "title": "Méthode : Trouver les vues de gauche et de droite",
        "example": "Une vue de dessus codée comporte deux rangées : au fond $3$ et $1$ cubes, devant $2$ et $2$ cubes. Décrire la vue de gauche et la vue de droite.",
        "steps": [
          "**Étape 1** : Dans chaque rangée, on garde la pile la plus haute : $3$ au fond, $2$ devant.",
          "**Étape 2** : Placé à gauche de l'assemblage, on a le fond à sa gauche et le devant à sa droite : la vue de gauche a des colonnes de $3$ puis $2$ carrés.",
          "**Étape 3** : Placé à droite, c'est l'inverse : la vue de droite a des colonnes de $2$ puis $3$ carrés."
        ]
      },
      {
        "title": "Méthode : Dessiner un pavé droit en perspective cavalière",
        "example": "Dessiner à main levée un pavé droit vu un peu d'en haut et par la droite.",
        "steps": [
          "**Étape 1** : On dessine la face de devant : un rectangle.",
          "**Étape 2** : À partir de trois sommets de ce rectangle (en haut à gauche, en haut à droite, en bas à droite), on trace trois traits obliques, parallèles et de même longueur.",
          "**Étape 3** : On relie les extrémités de ces traits pour terminer la face du dessus et la face de droite.",
          "**Étape 4** : On trace en **pointillés** les $3$ arêtes cachées : elles partent du sommet que l'on ne voit pas."
        ]
      }
    ],
    "traps": [
      "⚠️ Sur un dessin en perspective, des cubes peuvent être **cachés** : un cube posé en hauteur repose forcément sur un autre cube.",
      "⚠️ Un cube a **12** arêtes, et non 6 (6 est le nombre de faces).",
      "⚠️ Six carrés assemblés ne forment pas toujours un patron de cube : certaines faces se superposeraient au pliage.",
      "⚠️ La vue de gauche et la vue de droite ne sont pas le même dessin : l'une est le symétrique de l'autre.",
      "⚠️ Sur un dessin en perspective cavalière, on ne lit pas les vraies longueurs : les arêtes obliques sont raccourcies."
    ],
    "flashcards": [
      { "q": "Combien un cube a-t-il de faces, d’arêtes et de sommets ?", "a": "6 faces, 12 arêtes, 8 sommets." },
      { "q": "Comment dessine-t-on les arêtes cachées en perspective cavalière ?", "a": "En pointillés." },
      { "q": "Sur un pavé droit dessiné en perspective cavalière, combien d’arêtes sont cachées ?", "a": "$3$ arêtes, en pointillés ; les $9$ autres sont en traits pleins." },
      { "q": "Quelles sont les quatre vues d’un assemblage de cubes ?", "a": "De dessus, de face, de gauche et de droite." },
      { "q": "Quel lien y a-t-il entre la vue de gauche et la vue de droite ?", "a": "Elles sont symétriques l’une de l’autre : la rangée de devant change de côté." },
      { "q": "Combien de petits cubes forment un grand cube de 4 cubes d’arête ?", "a": "$4 \\times 4 \\times 4 = 64$." },
      { "q": "Quelle est la forme des faces d’un pavé droit ?", "a": "Des rectangles (des carrés dans le cas du cube)." },
      { "q": "Qu’est-ce qu’un patron d’un solide ?", "a": "Une figure plane qui, une fois pliée, permet de fabriquer le solide." },
      { "q": "Quelle est la différence entre un prisme droit et une pyramide ?", "a": "Un prisme a **deux** bases et des faces latérales rectangulaires ; une pyramide a **une** base et des faces latérales triangulaires qui se rejoignent au sommet." }
    ]
  }
};

window.MATHS_EXERCISES_6E = {
  "6N1": [
    {
      "id": "6N1-1", "chapterId": "6N1", "tier": 1,
      "title": "Chiffre des centièmes",
      "statement": "Quel est le chiffre des centièmes dans le nombre $604{,}185$ ?",
      "type": "exact", "answer": "8",
      "hint1": "Après la virgule : 1er rang = dixièmes, 2e rang = centièmes, 3e rang = millièmes.",
      "hint2": "Les chiffres après la virgule sont $1$, $8$ et $5$.",
      "solution": "Dans $604{,}185$ : $1$ dixième, $8$ centièmes, $5$ millièmes. Le chiffre des centièmes est **8**.",
      "skill": "Chercher"
    },
    {
      "id": "6N1-2", "chapterId": "6N1", "tier": 1,
      "title": "Fraction décimale vers écriture à virgule",
      "statement": "Écrire sous forme décimale :\n$$\\frac{347}{100}$$",
      "type": "exact", "answer": "3,47",
      "hint1": "Diviser par $100$ fait reculer chaque chiffre de deux rangs.",
      "hint2": "Le chiffre des unités $7$ devient le chiffre des centièmes.",
      "solution": "$$\\frac{347}{100} = 3{,}47$$",
      "skill": "Représenter"
    },
    {
      "id": "6N1-3", "chapterId": "6N1", "tier": 2,
      "title": "Nombre de dizaines",
      "statement": "Combien y a-t-il de dizaines dans le nombre $58\\,326{,}9$ ?",
      "type": "exact", "answer": "5832",
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
      "hint2": "Convertis chaque écriture en nombre décimal ; par exemple $\\frac{2}{5} = \\frac{4}{10}$.",
      "solution": "$0{,}4 = \\frac{4}{10} = \\frac{40}{100} = 40\\,\\% = \\frac{2}{5}$. En revanche $\\frac{4}{100} = 0{,}04$ : c'est l'intrus.",
      "skill": "Représenter"
    },
    {
      "id": "6N1-5", "chapterId": "6N1", "tier": 4,
      "title": "Défi : Nombre mystère",
      "statement": "Je suis un nombre décimal. Mon chiffre des dizaines est $4$, mon chiffre des millièmes est $7$, mon chiffre des unités est le double de celui des dizaines, je n'ai ni dixièmes ni centièmes et je suis compris entre $40$ et $50$.\n**Qui suis-je ?**",
      "type": "exact", "answer": "48,007",
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
      "solution": "Les parties entières sont égales. On compare les dixièmes : $7{,}08$ a $0$ dixième et $7{,}8$ en a $8$, donc $7{,}08 < 7{,}8$.",
      "skill": "Raisonner"
    },
    {
      "id": "6N2-2", "chapterId": "6N2", "tier": 1,
      "title": "Arrondir au dixième",
      "statement": "Donner l'arrondi au dixième de $15{,}362$.",
      "type": "exact", "answer": "15,4",
      "hint1": "Encadre $15{,}362$ entre deux nombres consécutifs ayant un seul chiffre après la virgule.",
      "hint2": "Regarde le chiffre des centièmes : $6$.",
      "solution": "Le chiffre des centièmes est $6 \\ge 5$, donc on arrondit à la valeur supérieure : $15{,}362 \\approx 15{,}4$.",
      "skill": "Calculer"
    },
    {
      "id": "6N2-3", "chapterId": "6N2", "tier": 2,
      "title": "Lire une abscisse",
      "statement": "Sur une demi-droite graduée, l'unité est partagée en $4$ graduations égales. Le point $P$ est placé sur la $3^e$ graduation après le repère $5$.\n**Quelle est l'abscisse de $P$ ?**",
      "type": "exact", "answer": "5,75",
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
      "title": "Défi : Chiffre manquant",
      "statement": "On cherche le chiffre $c$ tel que $2{,}c7 > 2{,}86$ et $2{,}c7$ arrondi au dixième soit égal à $3$.\n**Quelle est la valeur de $c$ ?**",
      "type": "exact", "answer": "9",
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
      "type": "exact", "answer": "18,18",
      "hint1": "Aligne les virgules : $12{,}70 + 5{,}48$.",
      "hint2": "$70$ centièmes $+ 48$ centièmes $= 118$ centièmes.",
      "solution": "$$A = 12{,}70 + 5{,}48 = 18{,}18$$",
      "skill": "Calculer"
    },
    {
      "id": "6N3-2", "chapterId": "6N3", "tier": 2,
      "title": "Différence avec des zéros",
      "statement": "Calculer :\n$$B = 20 - 7{,}35$$",
      "type": "exact", "answer": "12,65",
      "hint1": "Écris $20 = 20{,}00$.",
      "hint2": "Tu peux passer par $7{,}35 + \\dots = 20$.",
      "solution": "$$B = 20{,}00 - 7{,}35 = 12{,}65$$\nVérification : $7{,}35 + 12{,}65 = 20$.",
      "skill": "Calculer"
    },
    {
      "id": "6N3-3", "chapterId": "6N3", "tier": 2,
      "title": "Calcul astucieux",
      "statement": "Calculer astucieusement :\n$$C = 4{,}6 + 9{,}75 + 5{,}4 + 0{,}25$$",
      "type": "exact", "answer": "20",
      "hint1": "Regroupe les termes qui donnent des nombres entiers.",
      "hint2": "$4{,}6 + 5{,}4 = 10$ et $9{,}75 + 0{,}25 = 10$.",
      "solution": "$$C = (4{,}6 + 5{,}4) + (9{,}75 + 0{,}25) = 10 + 10 = 20$$",
      "skill": "Calculer"
    },
    {
      "id": "6N3-4", "chapterId": "6N3", "tier": 3,
      "title": "Rendu de monnaie",
      "statement": "Léna achète un livre à $8{,}90$ € et un carnet à $3{,}45$ €. Elle paie avec un billet de $20$ €.\n**Combien la caissière lui rend-elle (en euros) ?**",
      "type": "exact", "answer": "7,65",
      "hint1": "Calcule d'abord le prix total des achats.",
      "hint2": "$8{,}90 + 3{,}45 = 12{,}35$.",
      "solution": "Total : $8{,}90 + 3{,}45 = 12{,}35$ €. Monnaie : $20 - 12{,}35 = 7{,}65$ €.",
      "skill": "Modéliser"
    },
    {
      "id": "6N3-5", "chapterId": "6N3", "tier": 4,
      "title": "Défi : Carré magique",
      "statement": "Dans un carré magique, les trois nombres de chaque ligne, de chaque colonne et de chaque diagonale ont la même somme. Voici un carré magique incomplet :\n\n| $2$ | case A | $1{,}5$ |\n|:---:|:---:|:---:|\n|  | $2{,}25$ | $2{,}75$ |\n|  | case B | $2{,}5$ |\n\n**Quel nombre faut-il écrire dans la case B ?**",
      "type": "exact", "answer": "1,25",
      "hint1": "Cherche d'abord une ligne, une colonne ou une diagonale déjà complète : elle donne la somme commune.",
      "hint2": "La diagonale $2$ ; $2{,}25$ ; $2{,}5$ donne la somme commune. Trouve ensuite le nombre de la case A grâce à la première ligne.",
      "solution": "**Étape 1 :** la diagonale complète donne la somme commune : $2 + 2{,}25 + 2{,}5 = 6{,}75$.\n**Étape 2 :** première ligne : $2 + 1{,}5 = 3{,}5$, donc la case A contient $6{,}75 - 3{,}5 = 3{,}25$.\n**Étape 3 :** deuxième colonne : $3{,}25 + 2{,}25 = 5{,}5$, donc la case B contient $6{,}75 - 5{,}5 = 1{,}25$.\nRéponse : **1,25**.",
      "skill": "Chercher"
    }
  ],
  "6N4": [
    {
      "id": "6N4-1", "chapterId": "6N4", "tier": 1,
      "title": "Multiplier par 100",
      "statement": "Calculer :\n$$4{,}073 \\times 100$$",
      "type": "exact", "answer": "407,3",
      "hint1": "Multiplier par $100$ fait avancer chaque chiffre de deux rangs.",
      "hint2": "Le chiffre des centièmes $7$ devient le chiffre des unités.",
      "solution": "$$4{,}073 \\times 100 = 407{,}3$$",
      "skill": "Calculer"
    },
    {
      "id": "6N4-2", "chapterId": "6N4", "tier": 1,
      "title": "Multiplier par 0,01",
      "statement": "Calculer :\n$$56 \\times 0{,}01$$",
      "type": "exact", "answer": "0,56",
      "hint1": "Multiplier par $0{,}01$ revient à diviser par $100$.",
      "hint2": "$56 \\div 100$.",
      "solution": "$$56 \\times 0{,}01 = 56 \\div 100 = 0{,}56$$",
      "skill": "Calculer"
    },
    {
      "id": "6N4-3", "chapterId": "6N4", "tier": 2,
      "title": "Produit de deux décimaux",
      "statement": "Calculer :\n$$2{,}4 \\times 1{,}5$$",
      "type": "exact", "answer": "3,6",
      "hint1": "Calcule d'abord $24 \\times 15$ sans virgule.",
      "hint2": "$24 \\times 15 = 360$ ; il faut $1 + 1 = 2$ décimales.",
      "solution": "$24 \\times 15 = 360$, donc $2{,}4 \\times 1{,}5 = 3{,}60 = 3{,}6$.",
      "skill": "Calculer"
    },
    {
      "id": "6N4-6", "chapterId": "6N4", "tier": 2,
      "title": "Un produit de décimaux avec une aire",
      "statement": "Un rectangle mesure $4{,}3\\text{ dm}$ de long et $1{,}6\\text{ dm}$ de large.\nEn passant par les centimètres, **calculer son aire en $\\text{dm}^2$.**",
      "type": "exact", "answer": "6,88",
      "hint1": "Convertis les deux longueurs en centimètres, puis calcule l'aire en $\\text{cm}^2$.",
      "hint2": "L'aire vaut $43 \\times 16 = 688\\text{ cm}^2$, et $1\\text{ dm}^2 = 100\\text{ cm}^2$.",
      "solution": "En centimètres, le rectangle mesure $43\\text{ cm}$ sur $16\\text{ cm}$ : son aire est $43 \\times 16 = 688\\text{ cm}^2$. Comme $1\\text{ dm}^2 = 100\\text{ cm}^2$, l'aire est $6{,}88\\text{ dm}^2$. On retrouve ainsi $4{,}3 \\times 1{,}6 = 6{,}88$.",
      "skill": "Modéliser"
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
      "title": "Défi : Prix au kilogramme",
      "statement": "Des pommes coûtent $2{,}35$ € le kilogramme. Hugo en achète $3{,}2$ kg et paie avec un billet de $10$ €.\n**Combien lui rend-on (en euros) ?**",
      "type": "exact", "answer": "2,48",
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
      "type": "exact", "answer": "13",
      "hint1": "Cherche le plus grand multiple de $7$ inférieur ou égal à $93$.",
      "hint2": "$7 \\times 13 = 91$ et $7 \\times 14 = 98$.",
      "solution": "$93 = 7 \\times 13 + 2$ avec $2 < 7$ : le quotient est **13** (et le reste $2$).",
      "skill": "Calculer"
    },
    {
      "id": "6N5-2", "chapterId": "6N5", "tier": 1,
      "title": "Critère de divisibilité",
      "statement": "Lequel de ces nombres est divisible par $5$ ?",
      "type": "mcq",
      "options": ["$2\\,455$", "$1\\,052$", "$3\\,504$", "$5\\,331$"],
      "correctIndex": 0, "answer": "$2\\,455$",
      "hint1": "Un nombre est divisible par $5$ si son chiffre des unités est $0$ ou $5$.",
      "hint2": "Regarde uniquement le dernier chiffre de chaque nombre : pour $1\\,052$, c'est $2$.",
      "solution": "Chiffres des unités : $5$ ; $2$ ; $4$ ; $1$. Seul le premier est $0$ ou $5$ : **2 455** est divisible par $5$ ($2\\,455 = 5 \\times 491$).",
      "skill": "Raisonner"
    },
    {
      "id": "6N5-3", "chapterId": "6N5", "tier": 2,
      "title": "Problème de groupement",
      "statement": "Un car transporte au maximum $54$ passagers. Combien de cars faut-il au minimum pour transporter $400$ personnes ?",
      "type": "exact", "answer": "8",
      "hint1": "Effectue la division euclidienne de $400$ par $54$.",
      "hint2": "$400 = 54 \\times 7 + 22$ : que faire des $22$ personnes restantes ?",
      "solution": "$400 = 54 \\times 7 + 22$. Sept cars ne suffisent pas ($22$ personnes restent) : il faut **8** cars.",
      "skill": "Modéliser"
    },
    {
      "id": "6N5-4", "chapterId": "6N5", "tier": 3,
      "title": "Division décimale",
      "statement": "Quatre amis se partagent équitablement une addition de $58{,}6$ €.\n**Combien chacun paie-t-il (en euros) ?**",
      "type": "exact", "answer": "14,65",
      "hint1": "Calcule $58{,}6 \\div 4$ en continuant la division après la virgule.",
      "hint2": "$4 \\times 14 = 56$, il reste $2{,}6$ ; $2{,}6 \\div 4 = 0{,}65$.",
      "solution": "$$58{,}6 \\div 4 = 14{,}65$$\nVérification : $4 \\times 14{,}65 = 58{,}6$.",
      "skill": "Calculer"
    },
    {
      "id": "6N5-5", "chapterId": "6N5", "tier": 4,
      "title": "Défi : Nombre de billes",
      "statement": "Un nombre de billes est compris entre $50$ et $70$. Si on les range par $6$, il en reste $1$. Si on les range par $5$, il n'en reste aucune.\n**Combien y a-t-il de billes ?**",
      "type": "exact", "answer": "55",
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
      "hint1": "Par définition, $\\frac{a}{b}$ est le nombre qui, multiplié par $b$, donne $a$.",
      "hint2": "Par exemple, $5 \\times \\frac{2}{5} = 2$.",
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
      "hint2": "$A$ est au-delà de la $5^{\\text{e}}$ graduation, donc après $1$ : son abscisse est supérieure à $1$.",
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
      "hint2": "$\\frac{3}{4} = \\frac{6}{8}$ : il reste à comparer les numérateurs.",
      "solution": "$\\frac{3}{4} = \\frac{3 \\times 2}{4 \\times 2} = \\frac{6}{8}$. Comme $5 < 6$, on a $\\frac{5}{8} < \\frac{6}{8}$, donc :\n$$\\frac{5}{8} < \\frac{3}{4}$$",
      "skill": "Raisonner"
    },
    {
      "id": "6N6-5",
      "chapterId": "6N6",
      "tier": 4,
      "title": "Défi : Le plus grand nombre",
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
      "hint1": "$8$ est un multiple de $4$ : écris $\\frac{3}{4}$ en huitièmes.",
      "hint2": "$\\frac{3}{4} = \\frac{6}{8}$ : il reste à additionner les numérateurs.",
      "solution": "$$C = \\frac{3 \\times 2}{4 \\times 2} + \\frac{5}{8} = \\frac{6}{8} + \\frac{5}{8} = \\frac{11}{8}$$",
      "skill": "Calculer"
    },
    {
      "id": "6N7-5",
      "chapterId": "6N7",
      "tier": 4,
      "title": "Défi : Ce qu'il reste",
      "statement": "Léa dépense $\\frac{1}{3}$ de son argent de poche pour un livre et $\\frac{1}{6}$ pour une place de cinéma.\n**Quelle fraction de son argent de poche lui reste-t-il ?** (fraction simplifiée)",
      "type": "exact",
      "answer": "1/2",
      "hint1": "L'argent de poche entier correspond à $1 = \\frac{6}{6}$.",
      "hint2": "Elle a dépensé $\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6}$.",
      "solution": "Dépenses : $\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6}$.\nReste : $$\\frac{6}{6} - \\frac{3}{6} = \\frac{3}{6} = \\frac{1}{2}$$\nIl lui reste la moitié de son argent de poche.",
      "skill": "Modéliser"
    },
    {
      "id": "6N7-6",
      "chapterId": "6N7",
      "tier": 3,
      "title": "Fractions de dénominateurs quelconques",
      "statement": "Calculer $\\frac{3}{5} + \\frac{1}{2}$.\nDonner le résultat sous forme de fraction simplifiée au maximum.",
      "type": "exact",
      "answer": "11/10",
      "hint1": "$5$ et $2$ ne sont pas multiples l'un de l'autre : cherche d'abord un multiple commun à ces deux nombres.",
      "hint2": "$10$ est un multiple commun : écris chaque fraction avec le dénominateur $10$.",
      "solution": "$$\\frac{3}{5} + \\frac{1}{2} = \\frac{3 \\times 2}{5 \\times 2} + \\frac{1 \\times 5}{2 \\times 5} = \\frac{6}{10} + \\frac{5}{10} = \\frac{11}{10}$$\n$11$ et $10$ n'ont pas de diviseur commun autre que $1$ : la fraction $\\frac{11}{10}$ ne peut plus être simplifiée.",
      "skill": "Calculer"
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
      "hint1": "Fais un schéma : la gomme correspond à une barre, le stylo à deux barres identiques.",
      "hint2": "Il y a $3$ barres égales pour $3{,}60$ €.",
      "solution": "Schéma : gomme = $1$ part, stylo = $2$ parts, soit $3$ parts égales pour $3{,}60$ €.\n$$3{,}60 \\div 3 = 1{,}20$$\nLa gomme coûte $1{,}20$ € (et le stylo $2{,}40$ €).",
      "skill": "Modéliser"
    },
    {
      "id": "6N8-5",
      "chapterId": "6N8",
      "tier": 4,
      "title": "Défi : Motif évolutif",
      "statement": "On construit un motif avec des carreaux : à l'étape $1$, il y a $5$ carreaux, puis on ajoute $4$ carreaux à chaque nouvelle étape ($5$, $9$, $13$, …).\n**Combien de carreaux y aura-t-il à l'étape $25$ ?**",
      "type": "exact",
      "answer": "101",
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
      "hint1": "$30\\,\\%$ de $70$, c'est $\\frac{30}{100} \\times 70$.",
      "hint2": "$10\\,\\%$ de $70$ vaut $7$ ; donc $30\\,\\%$ vaut trois fois plus.",
      "solution": "$10\\,\\%$ de $70$ $= 7$, donc $30\\,\\%$ de $70$ $= 3 \\times 7 = 21$.\n$$\\frac{30}{100} \\times 70 = \\frac{2\\,100}{100} = 21$$",
      "skill": "Calculer"
    },
    {
      "id": "6P1-5",
      "chapterId": "6P1",
      "tier": 4,
      "title": "Défi : Lire une carte",
      "statement": "Sur une carte de randonnée, l'échelle graphique indique que $2\\text{ cm}$ représentent $500\\text{ m}$ en réalité. Un sentier mesure $6\\text{ cm}$ sur la carte. Un randonneur le parcourt à l'aller puis au retour.\n**Quelle distance réelle parcourt-il en tout, en kilomètres ?**",
      "type": "exact",
      "answer": "3",
      "hint1": "Compare la longueur du sentier sur la carte avec $2\\text{ cm}$ : combien de fois est-elle plus grande ?",
      "hint2": "$6\\text{ cm}$, c'est $3$ fois $2\\text{ cm}$ : calcule la longueur réelle du sentier en mètres. Pense ensuite à l'aller-retour et à la conversion en kilomètres.",
      "solution": "**Étape 1 :** $6\\text{ cm} = 3 \\times 2\\text{ cm}$, donc le sentier mesure $3 \\times 500 = 1\\,500\\text{ m}$ en réalité.\n**Étape 2 :** aller et retour : $2 \\times 1\\,500 = 3\\,000\\text{ m}$.\n**Étape 3 :** $3\\,000\\text{ m} = 3\\text{ km}$. Le randonneur parcourt $3\\text{ km}$.",
      "skill": "Modéliser"
    },
    {
      "id": "6P1-6",
      "chapterId": "6P1",
      "tier": 2,
      "title": "Exprimer une proportion en pourcentage",
      "statement": "Un club compte $50$ adhérents, dont $32$ pratiquent la natation.\n**Quel pourcentage des adhérents pratique la natation ?** (donner le nombre seul, sans le symbole %)",
      "type": "exact",
      "answer": "64",
      "hint1": "Écris la proportion sous forme de fraction : $32$ adhérents sur $50$.",
      "hint2": "Cherche une fraction égale de dénominateur $100$ : par quel nombre faut-il multiplier $50$ pour obtenir $100$ ?",
      "solution": "$$\\frac{32}{50} = \\frac{32 \\times 2}{50 \\times 2} = \\frac{64}{100}$$\nDonc $64\\,\\%$ des adhérents pratiquent la natation.",
      "skill": "Calculer"
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
      "hint1": "Compare chaque temps à $8{,}5$.",
      "hint2": "Chloé ($9{,}1$) et Farid ($8{,}7$) ne vérifient pas le critère.",
      "solution": "Temps inférieurs à $8{,}5$ s : Ana ($8{,}4$), Bilal ($7{,}9$), Dylan ($8{,}0$) et Emma ($7{,}6$).\n$4$ élèves vérifient le critère.",
      "skill": "Chercher"
    },
    {
      "id": "6D1-6",
      "chapterId": "6D1",
      "tier": 2,
      "title": "Lire une courbe de températures",
      "statement": "La courbe ci-dessous donne la température de l'eau d'un lac, relevée à midi le 1er de six mois d'une même année.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.85rem auto;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 360 212\" width=\"360\" height=\"212\" style=\"max-width:360px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Courbe de la température de l'eau d'un lac, de février à décembre\"><g stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"><line x1=\"40\" y1=\"157.5\" x2=\"350\" y2=\"157.5\"/><line x1=\"40\" y1=\"130\" x2=\"350\" y2=\"130\"/><line x1=\"40\" y1=\"102.5\" x2=\"350\" y2=\"102.5\"/><line x1=\"40\" y1=\"75\" x2=\"350\" y2=\"75\"/><line x1=\"40\" y1=\"47.5\" x2=\"350\" y2=\"47.5\"/><line x1=\"40\" y1=\"20\" x2=\"350\" y2=\"20\"/></g><g font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\" text-anchor=\"end\"><text x=\"34\" y=\"189\">0</text><text x=\"34\" y=\"161.5\">5</text><text x=\"34\" y=\"134\">10</text><text x=\"34\" y=\"106.5\">15</text><text x=\"34\" y=\"79\">20</text><text x=\"34\" y=\"51.5\">25</text><text x=\"34\" y=\"24\">30</text></g><g font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\" text-anchor=\"middle\"><text x=\"65\" y=\"203\">févr.</text><text x=\"115\" y=\"203\">avr.</text><text x=\"165\" y=\"203\">juin</text><text x=\"215\" y=\"203\">août</text><text x=\"265\" y=\"203\">oct.</text><text x=\"315\" y=\"203\">déc.</text></g><line x1=\"40\" y1=\"185\" x2=\"350\" y2=\"185\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><line x1=\"40\" y1=\"185\" x2=\"40\" y2=\"10\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><polyline points=\"65,157.5 115,130 165,75 215,47.5 265,102.5 315,157.5\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2\"/><g fill=\"#dc2626\"><circle cx=\"65\" cy=\"157.5\" r=\"3.5\"/><circle cx=\"115\" cy=\"130\" r=\"3.5\"/><circle cx=\"165\" cy=\"75\" r=\"3.5\"/><circle cx=\"215\" cy=\"47.5\" r=\"3.5\"/><circle cx=\"265\" cy=\"102.5\" r=\"3.5\"/><circle cx=\"315\" cy=\"157.5\" r=\"3.5\"/></g><text x=\"46\" y=\"14\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Température (°C)</text></svg></div>\n**De combien de degrés la température de l'eau a-t-elle augmenté entre avril et août ?** (donne seulement le nombre)",
      "type": "exact",
      "answer": "15",
      "hint1": "L'axe vertical est gradué de $5$ en $5$. Lis la hauteur du point d'avril, puis celle du point d'août.",
      "hint2": "En avril, la température est de $10$ °C. Lis celle d'août, puis calcule la différence.",
      "solution": "L'axe vertical est gradué de $5$ en $5$.\nEn avril : $10$ °C. En août : $25$ °C.\n$$25 - 10 = 15$$\nLa température de l'eau a augmenté de $15$ °C.",
      "skill": "Représenter"
    },
    {
      "id": "6D1-4",
      "chapterId": "6D1",
      "tier": 3,
      "title": "Lire un diagramme en barres",
      "statement": "Le diagramme ci-dessous indique le nombre de livres empruntés au CDI chaque jour d'une semaine.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.85rem auto;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 320 215\" width=\"320\" height=\"215\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"190\" x2=\"310\" y2=\"190\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"194\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">0</text><line x1=\"40\" y1=\"166\" x2=\"310\" y2=\"166\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"170\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">3</text><line x1=\"40\" y1=\"142\" x2=\"310\" y2=\"142\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"146\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">6</text><line x1=\"40\" y1=\"118\" x2=\"310\" y2=\"118\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"122\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">9</text><line x1=\"40\" y1=\"94\" x2=\"310\" y2=\"94\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"98\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">12</text><line x1=\"40\" y1=\"70\" x2=\"310\" y2=\"70\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"74\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">15</text><line x1=\"40\" y1=\"46\" x2=\"310\" y2=\"46\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"50\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">18</text><line x1=\"40\" y1=\"22\" x2=\"310\" y2=\"22\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><text x=\"34\" y=\"26\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">21</text><rect x=\"58\" y=\"94\" width=\"34\" height=\"96\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1\"/><text x=\"75\" y=\"207\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">Lun.</text><rect x=\"110\" y=\"46\" width=\"34\" height=\"144\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1\"/><text x=\"127\" y=\"207\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">Mar.</text><rect x=\"162\" y=\"142\" width=\"34\" height=\"48\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1\"/><text x=\"179\" y=\"207\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">Mer.</text><rect x=\"214\" y=\"70\" width=\"34\" height=\"120\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1\"/><text x=\"231\" y=\"207\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">Jeu.</text><rect x=\"266\" y=\"118\" width=\"34\" height=\"72\" fill=\"#f59e0b\" stroke=\"#b45309\" stroke-width=\"1\"/><text x=\"283\" y=\"207\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">Ven.</text><line x1=\"40\" y1=\"190\" x2=\"310\" y2=\"190\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><line x1=\"40\" y1=\"190\" x2=\"40\" y2=\"12\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/></svg></div>\n**Combien de livres de plus ont été empruntés le mardi que le mercredi ?**",
      "type": "exact",
      "answer": "12",
      "hint1": "L'axe vertical est gradué de $3$ en $3$. Lis la hauteur des barres « Mar. » et « Mer. ».",
      "hint2": "Mardi : $18$ livres ; mercredi : $6$ livres.",
      "solution": "Lecture : mardi $18$ livres, mercredi $6$ livres.\n$$18 - 6 = 12$$\nOn a emprunté $12$ livres de plus le mardi.",
      "skill": "Représenter"
    },
    {
      "id": "6D1-5",
      "chapterId": "6D1",
      "tier": 4,
      "title": "Défi : Deux classes réunies",
      "statement": "Dans une classe A de $30$ élèves, $40\\,\\%$ des élèves viennent au collège en bus. Dans une classe B de $20$ élèves, $25\\,\\%$ des élèves viennent en bus.\n**Quel pourcentage des élèves des deux classes réunies vient en bus ?** (donne seulement le nombre)",
      "type": "exact",
      "answer": "34",
      "hint1": "Attention : les deux classes n'ont pas le même effectif. Calcule d'abord le nombre d'élèves venant en bus dans chaque classe.",
      "hint2": "Classe A : $\\frac{40}{100} \\times 30 = 12$ élèves. Fais de même pour la classe B, puis écris la proportion sur l'effectif total avec le dénominateur $100$.",
      "solution": "**Étape 1 :** classe A : $\\frac{40}{100} \\times 30 = 12$ élèves ; classe B : $\\frac{25}{100} \\times 20 = 5$ élèves.\n**Étape 2 :** en tout, $12 + 5 = 17$ élèves sur $30 + 20 = 50$ viennent en bus.\n**Étape 3 :**\n$$\\frac{17}{50} = \\frac{17 \\times 2}{50 \\times 2} = \\frac{34}{100} = 34\\,\\%$$",
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
      "hint2": "Un événement est « impossible » s'il ne peut jamais se produire, « certain » s'il se produit toujours.",
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
      "hint1": "Combien y a-t-il d'issues possibles ? Combien sont favorables ?",
      "hint2": "$6$ issues possibles, $1$ favorable.",
      "solution": "Le dé est équilibré : $6$ issues équiprobables, dont $1$ seule favorable.\n$$\\text{probabilité d'obtenir } 4 = \\frac{1}{6}$$",
      "skill": "Calculer"
    },
    {
      "id": "6D2-6",
      "chapterId": "6D2",
      "tier": 1,
      "title": "Des chances au pourcentage",
      "statement": "Un sac contient $7$ jetons verts et $3$ jetons rouges. On tire un jeton au hasard : on a donc $3$ chances sur $10$ de tirer un jeton rouge.\n**Écris cette probabilité en pourcentage.** (réponse sans le symbole %)",
      "type": "exact",
      "answer": "30",
      "hint1": "Écris d'abord la fraction : le nombre de chances au numérateur, le nombre total de cas au dénominateur.",
      "hint2": "Un pourcentage est une fraction de dénominateur $100$ : cherche la fraction égale à $\\frac{3}{10}$ ayant ce dénominateur.",
      "solution": "« $3$ chances sur $10$ » s'écrit $\\frac{3}{10}$.\n$$\\frac{3}{10} = \\frac{3 \\times 10}{10 \\times 10} = \\frac{30}{100}$$\nLa probabilité est de **$30\\,\\%$**.",
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
      "hint1": "Nombre total de billes : $3 + 5 + 2$.",
      "hint2": "$5$ billes bleues sur $10$ billes.",
      "solution": "Il y a $3 + 5 + 2 = 10$ billes, dont $5$ bleues :\n$$\\text{probabilité de tirer une bille bleue} = \\frac{5}{10} = \\frac{1}{2}$$",
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
      "hint1": "Liste les nombres pairs entre $1$ et $8$, puis garde ceux supérieurs à $3$.",
      "hint2": "Issues favorables : $4$, $6$, $8$.",
      "solution": "Nombres pairs : $2$, $4$, $6$, $8$. Ceux strictement supérieurs à $3$ : $4$, $6$, $8$, soit $3$ issues favorables sur $8$.\n$$P = \\frac{3}{8}$$",
      "skill": "Raisonner"
    },
    {
      "id": "6D2-5",
      "chapterId": "6D2",
      "tier": 4,
      "title": "Défi : Regrouper deux séries",
      "statement": "Inès lance une pièce de monnaie $150$ fois et obtient « pile » $69$ fois. Malo lance la même pièce $100$ fois et obtient « pile » $61$ fois.\n**Quelle est la fréquence d'apparition de « pile » sur l'ensemble de leurs lancers ?** (écriture décimale)",
      "type": "exact",
      "answer": "0,52",
      "hint1": "Attention : ils n'ont pas fait le même nombre de lancers. Regroupe tous les lancers en une seule série.",
      "hint2": "Cherche le nombre total de « pile », puis le nombre total de lancers, et écris la fréquence sous forme de fraction.",
      "solution": "**Étape 1 :** nombre total de « pile » : $69 + 61 = 130$.\n**Étape 2 :** nombre total de lancers : $150 + 100 = 250$.\n**Étape 3 :**\n$$\\frac{130}{250} = \\frac{52}{100} = 0{,}52$$\nOn ne fait pas la moyenne de $0{,}46$ et $0{,}61$ (cela donnerait $0{,}535$), car les deux séries n'ont pas le même nombre de lancers.",
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
      "hint2": "Élimine les blocs de mouvement, d'apparence et d'événement.",
      "solution": "Le bloc « répéter 4 fois » est une **boucle** : les instructions placées à l'intérieur sont exécutées 4 fois.",
      "skill": "Communiquer"
    },
    {
      "id": "6A1-3",
      "chapterId": "6A1",
      "tier": 2,
      "title": "Distance parcourue avec une boucle",
      "statement": "Un lutin exécute le script suivant :\n```scratch\nquand le drapeau vert est cliqué\nrépéter 5 fois\n    avancer de 30 pas\n```\n**Combien de pas le lutin a-t-il parcourus au total ?**",
      "type": "exact",
      "answer": "150",
      "hint1": "L'instruction « avancer de $30$ pas » est exécutée $5$ fois.",
      "hint2": "Calcule $5 \\times 30$.",
      "solution": "$$5 \\times 30 = 150$$\nLe lutin a parcouru $150$ pas.",
      "skill": "Calculer"
    },
    {
      "id": "6A1-6",
      "chapterId": "6A1",
      "tier": 2,
      "title": "Entrée et sortie d'un programme de calcul",
      "statement": "Un programme de calcul s'écrit avec deux cartes, à appliquer dans l'ordre :\n\n1. carte « multiplier par $3$ »\n2. carte « ajouter $4$ »\n\nOn donne le nombre $5$ en **entrée**. **Quel nombre obtient-on en sortie ?**",
      "type": "exact",
      "answer": "19",
      "hint1": "Applique les cartes dans l'ordre : chaque carte part du nombre donné par la carte précédente.",
      "hint2": "Commence par calculer $5 \\times 3$.",
      "solution": "L'entrée est $5$.\nCarte 1 : $5 \\times 3 = 15$.\nCarte 2 : $15 + 4 = 19$.\nLa sortie est **$19$**.",
      "skill": "Calculer"
    },
    {
      "id": "6A1-4",
      "chapterId": "6A1",
      "tier": 3,
      "title": "Tracer un rectangle",
      "statement": "Un lutin (stylo en position d'écriture) exécute le script suivant :\n```scratch\nquand drapeau cliqué\nrépéter 2 fois\n    avancer de 80 pas\n    tourner de 90 degrés\n    avancer de 30 pas\n    tourner de 90 degrés\n```\n**Quelle est la longueur totale du trait tracé, en pas ?**",
      "type": "exact",
      "answer": "220",
      "hint1": "Pendant un passage dans la boucle, le lutin avance de $80 + 30$ pas.",
      "hint2": "La boucle est exécutée $2$ fois.",
      "solution": "Un passage dans la boucle : $80 + 30 = 110$ pas. Deux passages :\n$$2 \\times 110 = 220$$\nLe lutin trace un rectangle de périmètre $220$ pas.",
      "skill": "Modéliser"
    },
    {
      "id": "6A1-5",
      "chapterId": "6A1",
      "tier": 4,
      "title": "Défi : Une variable qui double",
      "statement": "**Pour aller plus loin** (au-delà du programme de 6e) : une **variable** garde un nombre en mémoire, et ce nombre peut changer pendant le programme.\nOn exécute le script suivant :\n```scratch\nquand drapeau cliqué\nmettre [N] à 2\nrépéter 4 fois\n    mettre [N] à (N × 2)\ndire (N)\n```\n**Quel nombre le lutin dit-il à la fin ?**",
      "type": "exact",
      "answer": "32",
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
      "hint1": "Convertis toutes les longueurs en cm avant d’additionner.",
      "hint2": "$45\\text{ mm} = 4{,}5\\text{ cm}$ et $0{,}5\\text{ dm} = 5\\text{ cm}$.",
      "solution": "$$P = 4{,}5 + 6{,}2 + 5 = 15{,}7\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "6M1-4",
      "chapterId": "6M1",
      "tier": 3,
      "title": "Périmètre d’un disque",
      "statement": "Une roue de vélo a un rayon de $35\\text{ cm}$. On prend $\\pi \\approx 3{,}14$.\n**Quelle distance (en cm) parcourt la roue en faisant un tour complet ?**",
      "type": "exact",
      "answer": "219,8",
      "hint1": "La distance parcourue en un tour est le périmètre de la roue : $P = \\pi \\times d$.",
      "hint2": "Le diamètre vaut $2 \\times 35 = 70\\text{ cm}$.",
      "solution": "$d = 70\\text{ cm}$, donc :\n$$P \\approx 3{,}14 \\times 70 = 219{,}8\\text{ cm}$$",
      "skill": "Modéliser"
    },
    {
      "id": "6M1-5",
      "chapterId": "6M1",
      "tier": 4,
      "title": "Défi : Périmètre d’un stade",
      "statement": "Une piste est formée d'un rectangle de $80\\text{ m}$ sur $60\\text{ m}$ dont les deux largeurs sont remplacées par deux demi-cercles de diamètre $60\\text{ m}$. On prend $\\pi \\approx 3{,}14$.\n**Quelle est la longueur d'un tour de piste, en m ?**",
      "type": "exact",
      "answer": "348,4",
      "hint1": "Le contour est formé des deux longueurs de $80\\text{ m}$ et de deux demi-cercles, soit un cercle complet de diamètre $60\\text{ m}$.",
      "hint2": "Cercle complet : $\\pi \\times 60 \\approx 3{,}14 \\times 60 = 188{,}4\\text{ m}$.",
      "solution": "• Deux lignes droites : $2 \\times 80 = 160\\text{ m}$.\n• Deux demi-cercles = un cercle de diamètre $60\\text{ m}$ : $\\pi \\times 60 \\approx 3{,}14 \\times 60 = 188{,}4\\text{ m}$.\n$$P \\approx 160 + 188{,}4 = 348{,}4\\text{ m}$$",
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
      "hint2": "Calcule $5 \\times 5$ et $4 \\times 5$, puis vérifie aussi les unités ($\\text{cm}^2$ pour l'aire, $\\text{cm}$ pour le périmètre).",
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
      "hint1": "Calcule l’aire du grand rectangle puis retire celle du carré.",
      "hint2": "$12 \\times 8 = 96$ et $3 \\times 3 = 9$.",
      "solution": "$$\\mathcal{A} = 12 \\times 8 - 3 \\times 3 = 96 - 9 = 87\\text{ m}^2$$",
      "skill": "Modéliser"
    },
    {
      "id": "6M2-5",
      "chapterId": "6M2",
      "tier": 4,
      "title": "Défi : Carrelage",
      "statement": "On veut carreler le sol d'une pièce rectangulaire de $4{,}2\\text{ m}$ sur $3\\text{ m}$ avec des carreaux carrés de $30\\text{ cm}$ de côté.\n**Combien de carreaux faut-il (sans découpe) ?**",
      "type": "exact",
      "answer": "140",
      "hint1": "Combien de carreaux tiennent dans la longueur ($420\\text{ cm}$) ? dans la largeur ($300\\text{ cm}$) ?",
      "hint2": "$420 \\div 30 = 14$ et $300 \\div 30 = 10$.",
      "solution": "Dans la longueur : $420 \\div 30 = 14$ carreaux ; dans la largeur : $300 \\div 30 = 10$ carreaux.\n$$14 \\times 10 = 140 \\text{ carreaux}$$\n(Vérification : la pièce a pour aire $420 \\times 300 = 126\\,000\\text{ cm}^2$ et un carreau $30 \\times 30 = 900\\text{ cm}^2$ ; $126\\,000 \\div 900 = 140$.)",
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
      "hint1": "Compte les cubes d’un étage puis multiplie par le nombre d’étages.",
      "hint2": "$5 \\times 3 = 15$ cubes par étage.",
      "solution": "Un étage contient $5 \\times 3 = 15$ cubes. Il y a 2 étages :\n$$15 \\times 2 = 30\\text{ cubes, soit } 30\\text{ cm}^3$$",
      "skill": "Calculer"
    },
    {
      "id": "6M3-2",
      "chapterId": "6M3",
      "tier": 2,
      "title": "Volume d’un grand cube",
      "statement": "Un grand cube est formé de petits cubes de $1\\text{ cm}^3$, avec 6 petits cubes le long de chaque arête.\n**Quel est son volume, en $\\text{cm}^3$ ?**",
      "type": "exact",
      "answer": "216",
      "hint1": "Compte les cubes d’une couche, puis multiplie par le nombre de couches.",
      "hint2": "$6 \\times 6 = 36$ cubes par couche, et il y a 6 couches.",
      "solution": "Une couche contient $6 \\times 6 = 36$ cubes. Il y a 6 couches :\n$$36 \\times 6 = 216\\text{ cubes, soit } 216\\text{ cm}^3$$",
      "skill": "Calculer"
    },
    {
      "id": "6M3-3",
      "chapterId": "6M3",
      "tier": 2,
      "title": "Le piège du cube",
      "statement": "Un élève affirme : « Un grand cube formé de 3 petits cubes de $1\\text{ cm}^3$ par arête a un volume de $9\\text{ cm}^3$. » A-t-il raison ?",
      "type": "mcq",
      "options": [
        "Non, le volume est $27\\text{ cm}^3$.",
        "Oui, car $3 \\times 3 = 9$.",
        "Non, le volume est $12\\text{ cm}^3$.",
        "Non, le volume est $18\\text{ cm}^3$."
      ],
      "correctIndex": 0,
      "answer": "Non, le volume est $27\\text{ cm}^3$.",
      "hint1": "Compte les cubes d’une couche, puis le nombre de couches.",
      "hint2": "$3 \\times 3 = 9$ cubes dans une seule couche.",
      "solution": "$3 \\times 3 = 9$ est le nombre de cubes d'une seule couche. Il y a 3 couches, donc $9 \\times 3 = 27$ cubes : le volume vaut $27\\text{ cm}^3$.",
      "skill": "Raisonner"
    },
    {
      "id": "6M3-4",
      "chapterId": "6M3",
      "tier": 3,
      "title": "Pour aller plus loin : contenance d’une boîte",
      "statement": "Une brique a la forme d'un pavé droit de $10\\text{ cm}$ sur $6\\text{ cm}$ et de $25\\text{ cm}$ de haut.\n**Quelle est sa contenance en litres ?**",
      "type": "exact",
      "answer": "1,5",
      "hint1": "Calcule le volume en $\\text{cm}^3$, puis rappelle-toi que $1\\text{ L} = 1\\,000\\text{ cm}^3$.",
      "hint2": "$10 \\times 6 \\times 25 = 1\\,500\\text{ cm}^3$.",
      "solution": "$$\\mathcal{V} = 10 \\times 6 \\times 25 = 1\\,500\\text{ cm}^3 = 1{,}5\\text{ L}$$",
      "skill": "Modéliser"
    },
    {
      "id": "6M3-6",
      "chapterId": "6M3",
      "tier": 3,
      "title": "L’escalier de cubes",
      "statement": "Un escalier de 5 marches est formé de cubes de $1\\text{ cm}^3$. La marche la plus haute a une hauteur de 5 cubes, la suivante de 4 cubes, et ainsi de suite jusqu’à la dernière, haute de 1 cube. L’escalier a une largeur de 3 cubes.\n**Quel est son volume, en $\\text{cm}^3$ ?**",
      "type": "exact",
      "answer": "45",
      "hint1": "Découpe l’escalier en tranches d’un cube de large : compte les cubes d’une tranche, puis multiplie par le nombre de tranches.",
      "hint2": "Une tranche contient $5 + 4 + 3 + 2 + 1$ cubes.",
      "solution": "Une tranche contient $5 + 4 + 3 + 2 + 1 = 15$ cubes. Il y a 3 tranches :\n$$15 \\times 3 = 45\\text{ cubes, soit } 45\\text{ cm}^3$$",
      "skill": "Raisonner"
    },
    {
      "id": "6M3-5",
      "chapterId": "6M3",
      "tier": 4,
      "title": "Défi : Remplir un bac",
      "statement": "**Pour aller plus loin** : on admet que $1\\text{ L} = 1\\,000\\text{ cm}^3$.\nUn bac a la forme d'un pavé de $40\\text{ cm}$ sur $25\\text{ cm}$ et de $30\\text{ cm}$ de haut. On le remplit avec un seau de $5\\text{ L}$.\n**Combien de seaux pleins faut-il pour remplir entièrement le bac ?**",
      "type": "exact",
      "answer": "6",
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
      "title": "Défi : Course de relais",
      "statement": "Trois coureurs se relaient : le premier court 12 min 48 s, le deuxième 13 min 35 s et le troisième 11 min 57 s.\n**Quel est le temps total de l’équipe, en secondes ?**",
      "type": "exact",
      "answer": "2300",
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
      "statement": "Le cercle $\\mathcal{C}$ a pour centre $O$ et pour diamètre $10\\text{ cm}$. On donne $OA = 5\\text{ cm}$, $OB = 10\\text{ cm}$ et $OC = 4\\text{ cm}$.\n**Parmi les points $A$, $B$ et $C$, lesquels appartiennent au cercle ?**",
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
      "title": "Défi : Deux cercles",
      "statement": "Deux cercles de centres $A$ et $B$ ont pour rayons respectifs $3{,}5\\text{ cm}$ et $2{,}5\\text{ cm}$. Ils se touchent en un seul point $M$ situé sur le segment $[AB]$.\n**Calculer $AB$ en cm.**",
      "type": "exact",
      "answer": "6",
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
      "hint2": "Une condition porte sur l'angle formé avec $[AB]$, l'autre sur un point particulier de $[AB]$.",
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
      "hint1": "La symétrie axiale conserve les longueurs.",
      "hint2": "Donc elle conserve aussi les périmètres.",
      "solution": "La symétrie axiale conserve les longueurs, donc le périmètre : $17{,}4\\text{ cm}$.",
      "skill": "Raisonner"
    },
    {
      "id": "6G2-5",
      "chapterId": "6G2",
      "tier": 4,
      "title": "Défi : Point équidistant",
      "statement": "Les points $A$ et $B$ sont tels que $AB = 8\\text{ cm}$. Le point $P$ vérifie $PA = PB = 5\\text{ cm}$. On note $I$ le milieu de $[AB]$.\n**Quelle est la mesure, en degrés, de l'angle $\\widehat{PIA}$ ?**",
      "type": "exact",
      "answer": "90",
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
      "title": "Défi : Bissectrices d’angles supplémentaires",
      "statement": "Les points $A$, $O$, $C$ sont alignés et $B$ est un point hors de la droite $(AC)$. On trace la bissectrice $[Ox)$ de $\\widehat{AOB}$ et la bissectrice $[Oy)$ de $\\widehat{BOC}$. On sait que $\\widehat{AOB} = 64^\\circ$.\n**Quelle est la mesure de $\\widehat{xOy}$, en degrés ?**",
      "type": "exact",
      "answer": "90",
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
      "hint2": "Pour chaque proposition, compare la somme des deux plus petites longueurs à la plus grande ; attention au cas d'égalité.",
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
      "hint1": "Les angles à la base $\\widehat{RST}$ et $\\widehat{RTS}$ sont égaux.",
      "hint2": "$180 - 2 \\times 72$.",
      "solution": "$\\widehat{RTS} = \\widehat{RST} = 72^\\circ$, donc :\n$$\\widehat{SRT} = 180^\\circ - 2 \\times 72^\\circ = 180^\\circ - 144^\\circ = 36^\\circ$$",
      "skill": "Raisonner"
    },
    {
      "id": "6G4-5",
      "chapterId": "6G4",
      "tier": 4,
      "title": "Défi : Triangle isocèle et équilatéral accolés",
      "statement": "$ABC$ est un triangle équilatéral. À l'extérieur, on construit le triangle $BCD$ isocèle en $C$ avec $\\widehat{BCD} = 100^\\circ$.\n**Calculer $\\widehat{ABD}$ en degrés.**",
      "type": "exact",
      "answer": "100",
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
      "hint1": "Les cubes cachés forment un pavé intérieur : on retire une couche de chaque côté.",
      "hint2": "Pavé intérieur : $(4 - 2) \\times (3 - 2) \\times (5 - 2)$.",
      "solution": "Les cubes invisibles forment un pavé de $2 \\times 1 \\times 3$ cubes :\n$$2 \\times 1 \\times 3 = 6 \\text{ cubes}$$",
      "skill": "Chercher"
    },
    {
      "id": "6G5-5",
      "chapterId": "6G5",
      "tier": 4,
      "title": "Défi : Compléter en grand cube",
      "statement": "Un assemblage est un pavé de 3 cubes en longueur, 2 en largeur et 2 étages.\n**Combien de petits cubes faut-il ajouter, au minimum, pour obtenir un grand cube plein ?**",
      "type": "exact",
      "answer": "15",
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
`,
        "solution": `## Corrigé détaillé

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
2. $5 - 4{,}05 = 0{,}95$ m.`
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
`,
        "solution": `## Corrigé détaillé

### Exercice 1
1. $\\frac{3}{4} = \\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}$ et $\\frac{18}{24} = \\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}$.
2. $\\frac{5}{6} = \\frac{10}{12}$ et $\\frac{10}{12} > \\frac{7}{12}$, donc $\\frac{5}{6} > \\frac{7}{12}$.
3. $17 = 5 \\times 3 + 2$, donc $\\frac{17}{5} = 3 + \\frac{2}{5} = 3{,}4$.

### Exercice 2
1. $A = \\frac{7}{9}$.
2. $B = \\frac{6}{8} - \\frac{1}{8} = \\frac{5}{8}$.
3. $C = \\frac{10}{15} = \\frac{2}{3}$.

### Exercice 3
$\\frac{3}{7} \\times 28 = (28 \\div 7) \\times 3 = 4 \\times 3 = 12$ élèves.`
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

### Exercice 3 : Périmètre d'un disque (3 points)
Une roue de vélo a un diamètre de $70$ cm.
1. Donner la valeur exacte de son périmètre.
2. En prenant $\\pi \\approx 3{,}14$, donner une valeur approchée de ce périmètre en cm.
`,
        "solution": `## Corrigé détaillé

### Exercice 1
1. $4{,}5 \\text{ m} = 450 \\text{ cm}$.
2. $320 \\text{ mm} = 3{,}2 \\text{ dm}$.
3. $3 \\text{ m}^2 = 300 \\text{ dm}^2$ (on multiplie par $100$ pour les aires).

### Exercice 2
1. Périmètre : $2 \\times (9 + 4) = 26$ cm. Aire : $9 \\times 4 = 36 \\text{ cm}^2$.
2. Côté du carré : $26 \\div 4 = 6{,}5$ cm. Aire : $6{,}5 \\times 6{,}5 = 42{,}25 \\text{ cm}^2$. Deux figures de même périmètre n'ont pas forcément la même aire !

### Exercice 3
1. Périmètre de la roue : $P = \\pi \\times d = 70\\pi$ cm.
2. $P \\approx 70 \\times 3{,}14 = 219{,}8$ cm.`
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
`,
        "solution": `## Corrigé détaillé

### Exercice 1
$35^\\circ$ : aigu ; $90^\\circ$ : droit ; $128^\\circ$ : obtus ; $180^\\circ$ : plat.

### Exercice 2
1. $\\widehat{T} = 180^\\circ - (52^\\circ + 71^\\circ) = 180^\\circ - 123^\\circ = 57^\\circ$.
2. Les angles à la base d'un triangle isocèle sont égaux : $\\widehat{ABC} = (180^\\circ - 40^\\circ) \\div 2 = 70^\\circ$.

### Exercice 3
1. Non : $3 + 4 = 7$ est inférieur à $8$, les deux petits côtés ne peuvent pas se rejoindre.
2. Elles sont concourantes : elles se coupent en un même point, centre du cercle circonscrit au triangle.`
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
