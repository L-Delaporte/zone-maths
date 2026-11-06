/**
 * Cours du niveau « Professeur des écoles (CRPE) » (chapitres : js/data/chapters_crpe.js).
 * Programme de l'épreuve de mathématiques, session 2027 : mathématiques du cycle 4.
 * Chaque cours rappelle les notions, les méthodes de rédaction attendues à l'écrit et, dans « Au concours »,
 * les erreurs d'élèves classiques qu'un futur professeur doit savoir analyser (utile aussi pour l'oral).
 * Contenu original.
 */
window.MATHS_COURSES_CRPE = {
  "crpe-01": {
    title: "PE-01 : Nombres entiers, numération et arithmétique",
    domain: "Nombres et calculs",
    objectives: [
      "Expliquer la numération décimale de position (valeur d'un chiffre selon son rang, nombre de dizaines, de centaines…).",
      "Écrire une division euclidienne $a = bq + r$ avec $0 \\leq r < b$ et l'interpréter dans un problème.",
      "Utiliser les critères de divisibilité par 2, 3, 4, 5, 9 et 10.",
      "Décomposer un entier en produit de facteurs premiers et l'utiliser pour trouver des diviseurs communs ou simplifier une fraction."
    ],
    keyPoints: [
      {
        title: "1. Numération décimale de position",
        content: "Dans $4\\,725$, le chiffre $7$ est celui des **centaines** : il vaut $700$. Mais le **nombre** de centaines de $4\\,725$ est $47$ (on compte aussi les centaines contenues dans les milliers).\n$$4\\,725 = 4 \\times 1\\,000 + 7 \\times 100 + 2 \\times 10 + 5$$\nUn nombre écrit avec $n$ chiffres en base dix est compris entre $10^{n-1}$ et $10^{n} - 1$."
      },
      {
        title: "2. Division euclidienne",
        content: "Pour deux entiers $a \\geq 0$ et $b > 0$, il existe un unique couple d'entiers $(q ; r)$ tel que\n$$a = b \\times q + r \\quad \\text{et} \\quad 0 \\leq r < b.$$\n$q$ est le **quotient**, $r$ le **reste**. Si $r = 0$, $b$ **divise** $a$ : $a$ est un **multiple** de $b$.\n*Exemple* : $257 = 12 \\times 21 + 5$ (et $5 < 12$)."
      },
      {
        title: "3. Critères de divisibilité",
        content: "• Par $2$ : le chiffre des unités est pair. • Par $5$ : il vaut $0$ ou $5$. • Par $10$ : il vaut $0$.\n• Par $4$ : le nombre formé par les deux derniers chiffres est divisible par $4$.\n• Par $3$ (resp. $9$) : la **somme des chiffres** est divisible par $3$ (resp. $9$).\n*Justification pour 9* : $10 = 9 + 1$, donc chaque puissance de $10$ s'écrit « multiple de $9$ plus $1$ » ; un nombre a donc le même reste dans la division par $9$ que la somme de ses chiffres."
      },
      {
        title: "4. Nombres premiers et décomposition",
        content: "Un nombre **premier** a exactement deux diviseurs : $1$ et lui-même ($2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \\dots$). $1$ n'est pas premier.\nTout entier $n \\geq 2$ se décompose de façon unique (à l'ordre près) en produit de facteurs premiers : $360 = 2^3 \\times 3^2 \\times 5$.\nPour tester si $n$ est premier, il suffit d'essayer les diviseurs premiers $p$ tels que $p^2 \\leq n$."
      },
      {
        title: "5. Au concours : erreurs d'élèves fréquentes",
        content: "• Confondre **chiffre** et **nombre** des dizaines (« dans $352$ il y a $5$ dizaines » au lieu de $35$).\n• Écrire une division avec un reste supérieur ou égal au diviseur : $50 = 6 \\times 7 + 8$ est une égalité vraie mais **pas** une division euclidienne.\n• Ne pas interpréter le reste : « $50$ élèves, minibus de $8$ places » demande $7$ minibus, pas $6$."
      }
    ],
    methods: [
      {
        title: "Méthode : Plus grand diviseur commun et partage maximal",
        example: "Un fleuriste a $84$ roses et $60$ tulipes. Il veut faire le plus grand nombre de bouquets identiques en utilisant toutes les fleurs.",
        steps: [
          "**Étape 1 (Décomposer)** : $84 = 2^2 \\times 3 \\times 7$ et $60 = 2^2 \\times 3 \\times 5$.",
          "**Étape 2 (Facteurs communs)** : on garde les facteurs communs avec le plus petit exposant : $2^2 \\times 3 = 12$.",
          "**Étape 3 (Conclure)** : $12$ bouquets, chacun de $84 \\div 12 = 7$ roses et $60 \\div 12 = 5$ tulipes."
        ]
      },
      {
        title: "Méthode : Prouver une propriété des entiers",
        example: "Montrer que la somme de trois entiers consécutifs est toujours un multiple de 3.",
        steps: [
          "**Étape 1 (Nommer)** : on note $n$ le plus petit ; les trois entiers sont $n$, $n + 1$, $n + 2$.",
          "**Étape 2 (Calculer)** : $n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)$.",
          "**Étape 3 (Conclure)** : $n + 1$ est un entier, donc la somme est un multiple de $3$. Un exemple numérique ne suffit pas : il faut le calcul général."
        ]
      }
    ],
    traps: [
      "⚠️ $1$ n'est pas un nombre premier : il n'a qu'un seul diviseur.",
      "⚠️ Un nombre divisible par $2$ et par $4$ n'est pas forcément divisible par $8$ ($12$ en est un contre-exemple) : on ne multiplie des critères que pour des nombres **premiers entre eux** ($2$ et $3$ donnent $6$).",
      "⚠️ Vérifier un énoncé sur quelques exemples ne le démontre pas ; un seul contre-exemple suffit en revanche à le réfuter."
    ],
    flashcards: [
      { q: "Quel est le nombre de dizaines de $3\\,482$ ?", a: "$348$ dizaines (le chiffre des dizaines est $8$)." },
      { q: "Condition sur le reste $r$ dans la division euclidienne de $a$ par $b$ ?", a: "$0 \\leq r < b$." },
      { q: "Critère de divisibilité par $9$ ?", a: "La somme des chiffres est divisible par $9$." },
      { q: "Décomposition en facteurs premiers de $72$ ?", a: "$72 = 2^3 \\times 3^2$." }
    ]
  },

  "crpe-02": {
    title: "PE-02 : Nombres décimaux, fractions et nombres rationnels",
    domain: "Nombres et calculs",
    objectives: [
      "Passer d'une écriture fractionnaire à une écriture décimale ou à un pourcentage, et inversement.",
      "Comparer, ranger et intercaler des décimaux et des fractions.",
      "Additionner, soustraire, multiplier et diviser des fractions.",
      "Distinguer nombres décimaux et rationnels non décimaux."
    ],
    keyPoints: [
      {
        title: "1. Fractions décimales et écriture décimale",
        content: "Une **fraction décimale** a pour dénominateur $10$, $100$, $1\\,000$… :\n$$3{,}47 = 3 + \\frac{4}{10} + \\frac{7}{100} = \\frac{347}{100}.$$\nUn nombre est **décimal** s'il peut s'écrire comme une fraction décimale. Une fraction irréductible $\\frac{a}{b}$ est décimale si et seulement si les seuls facteurs premiers de $b$ sont $2$ et $5$ : $\\frac{3}{8} = 0{,}375$ est décimal, $\\frac{1}{3} = 0{,}333\\dots$ ne l'est pas."
      },
      {
        title: "2. La fraction, plusieurs sens",
        content: "• **Partage** : $\\frac{3}{4}$ d'une tarte, c'est $3$ parts quand on la coupe en $4$.\n• **Quotient** : $\\frac{a}{b}$ est le nombre qui, multiplié par $b$, donne $a$ : $b \\times \\frac{a}{b} = a$.\n• **Opérateur** : prendre $\\frac{3}{4}$ de $60$, c'est calculer $\\frac{3}{4} \\times 60 = 45$.\n• **Repérage** : $\\frac{3}{4}$ se place sur une droite graduée en partageant l'unité en $4$."
      },
      {
        title: "3. Calculs avec les fractions",
        content: "$$\\frac{a}{b} + \\frac{c}{b} = \\frac{a + c}{b} \\qquad \\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd} \\qquad \\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$\nPour additionner, on réduit d'abord **au même dénominateur** : $\\frac{2}{3} + \\frac{1}{4} = \\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$.\nPour comparer deux fractions, on les écrit avec le même dénominateur (ou on compare les produits en croix)."
      },
      {
        title: "4. Pourcentages",
        content: "$t\\,\\%$ signifie $\\frac{t}{100}$ : $35\\,\\% = 0{,}35 = \\frac{7}{20}$.\nPrendre $t\\,\\%$ d'une quantité revient à la multiplier par $\\frac{t}{100}$."
      },
      {
        title: "5. Au concours : erreurs d'élèves fréquentes",
        content: "• « $2{,}15 > 2{,}3$ car $15 > 3$ » : l'élève traite la partie décimale comme un entier.\n• « $0{,}3 \\times 0{,}2 = 0{,}6$ » : la règle des virgules est appliquée comme pour l'addition.\n• « $\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$ » : addition des numérateurs et des dénominateurs.\n• « Multiplier agrandit toujours » : c'est faux dès que le facteur est inférieur à $1$."
      }
    ],
    methods: [
      {
        title: "Méthode : Ranger des décimaux",
        example: "Ranger dans l'ordre croissant $2{,}3$ ; $2{,}15$ ; $2{,}305$ ; $2{,}09$.",
        steps: [
          "**Étape 1** : écrire tous les nombres avec le même nombre de décimales : $2{,}300$ ; $2{,}150$ ; $2{,}305$ ; $2{,}090$.",
          "**Étape 2** : comparer les nombres de millièmes : $2\\,090 < 2\\,150 < 2\\,300 < 2\\,305$.",
          "**Conclusion** : $2{,}09 < 2{,}15 < 2{,}3 < 2{,}305$."
        ]
      },
      {
        title: "Méthode : Problème de fractions d'une quantité",
        example: "Un club dépense $\\frac{2}{5}$ de son budget en matériel, puis $\\frac{1}{3}$ du reste en déplacements. Quelle fraction du budget reste-t-il ?",
        steps: [
          "**Étape 1** : après le matériel, il reste $1 - \\frac{2}{5} = \\frac{3}{5}$ du budget.",
          "**Étape 2** : les déplacements coûtent $\\frac{1}{3} \\times \\frac{3}{5} = \\frac{1}{5}$ du budget.",
          "**Étape 3** : il reste $\\frac{3}{5} - \\frac{1}{5} = \\frac{2}{5}$ du budget."
        ]
      }
    ],
    traps: [
      "⚠️ « $\\frac{1}{3}$ du reste » n'est pas « $\\frac{1}{3}$ du total » : toujours identifier le tout auquel la fraction s'applique.",
      "⚠️ $\\frac{1}{3}$ n'est pas égal à $0{,}33$ : c'est un rationnel non décimal, $0{,}33$ n'en est qu'une valeur approchée.",
      "⚠️ Diviser par un nombre inférieur à $1$ donne un résultat plus grand : $6 \\div 0{,}5 = 12$."
    ],
    flashcards: [
      { q: "À quelle condition une fraction irréductible est-elle un nombre décimal ?", a: "Son dénominateur n'a pas d'autres facteurs premiers que $2$ et $5$." },
      { q: "Écriture décimale de $\\frac{7}{8}$ ?", a: "$0{,}875$." },
      { q: "$\\frac{2}{3} \\div \\frac{4}{9}$ = ?", a: "$\\frac{2}{3} \\times \\frac{9}{4} = \\frac{3}{2}$." },
      { q: "$35\\,\\%$ sous forme de fraction irréductible ?", a: "$\\frac{7}{20}$." }
    ]
  },

  "crpe-03": {
    title: "PE-03 : Nombres relatifs, puissances, racines carrées et ordres de grandeur",
    domain: "Nombres et calculs",
    objectives: [
      "Calculer avec des nombres relatifs en respectant les priorités opératoires.",
      "Utiliser les puissances, en particulier les puissances de $10$, et la notation scientifique.",
      "Connaître la racine carrée d'un nombre positif et les carrés parfaits usuels.",
      "Estimer un ordre de grandeur pour contrôler un calcul."
    ],
    keyPoints: [
      {
        title: "1. Nombres relatifs et priorités",
        content: "Soustraire un nombre revient à ajouter son opposé : $5 - (-3) = 5 + 3 = 8$.\nLe produit de deux nombres de même signe est positif, de signes contraires négatif.\n**Priorités** : parenthèses, puis puissances, puis multiplications et divisions, puis additions et soustractions (de gauche à droite à priorité égale)."
      },
      {
        title: "2. Puissances",
        content: "Pour $n \\geq 1$ : $a^n = a \\times a \\times \\dots \\times a$ ($n$ facteurs), et $a^{-n} = \\frac{1}{a^n}$ pour $a \\neq 0$.\n$$a^m \\times a^n = a^{m+n} \\qquad \\frac{a^m}{a^n} = a^{m-n} \\qquad (a^m)^n = a^{mn}$$\nAttention : $-3^2 = -9$ alors que $(-3)^2 = 9$."
      },
      {
        title: "3. Notation scientifique",
        content: "Tout nombre décimal non nul s'écrit $a \\times 10^n$ avec $1 \\leq a < 10$ (en valeur absolue) et $n$ entier relatif :\n$$345\\,000 = 3{,}45 \\times 10^5 \\qquad 0{,}000\\,72 = 7{,}2 \\times 10^{-4}.$$"
      },
      {
        title: "4. Racine carrée",
        content: "Pour $a \\geq 0$, $\\sqrt{a}$ est le nombre **positif** dont le carré vaut $a$ : $\\sqrt{49} = 7$.\nCarrés parfaits à connaître : $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225$.\n$\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ mais $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ en général ($\\sqrt{9 + 16} = 5$, $\\sqrt{9} + \\sqrt{16} = 7$)."
      },
      {
        title: "5. Au concours : erreurs d'élèves fréquentes",
        content: "• « $2^3 = 6$ » : confusion entre puissance et produit par l'exposant.\n• « $-5 < -2$ est faux car $5 > 2$ » : comparaison des distances à zéro au lieu des positions sur la droite graduée.\n• « $3 + 4 \\times 2 = 14$ » : calcul de gauche à droite sans priorités."
      }
    ],
    methods: [
      {
        title: "Méthode : Calculer avec la notation scientifique",
        example: "Calculer $\\dfrac{6 \\times 10^{8} \\times 4 \\times 10^{-3}}{8 \\times 10^{2}}$.",
        steps: [
          "**Étape 1 (Regrouper)** : $\\dfrac{6 \\times 4}{8} \\times \\dfrac{10^{8} \\times 10^{-3}}{10^{2}}$.",
          "**Étape 2 (Calculer)** : $3 \\times 10^{8 - 3 - 2} = 3 \\times 10^{3}$.",
          "**Contrôle** : $3 \\times 10^3 = 3\\,000$."
        ]
      },
      {
        title: "Méthode : Contrôler un résultat par un ordre de grandeur",
        example: "Un élève trouve $49{,}8 \\times 21{,}3 = 106{,}074$. Est-ce plausible ?",
        steps: [
          "**Étape 1** : arrondir : $49{,}8 \\approx 50$ et $21{,}3 \\approx 20$.",
          "**Étape 2** : $50 \\times 20 = 1\\,000$ : le résultat doit être proche de $1\\,000$.",
          "**Conclusion** : $106{,}074$ est faux (virgule mal placée) ; le bon résultat est $1\\,060{,}74$."
        ]
      }
    ],
    traps: [
      "⚠️ $10^{-3}$ n'est pas négatif : $10^{-3} = 0{,}001$.",
      "⚠️ $25 \\times 10^{3}$ n'est pas en notation scientifique : on écrit $2{,}5 \\times 10^{4}$.",
      "⚠️ L'équation $x^2 = 16$ a deux solutions, $4$ et $-4$, mais $\\sqrt{16} = 4$ seulement."
    ],
    flashcards: [
      { q: "$(-2)^3$ = ?", a: "$-8$." },
      { q: "Notation scientifique de $0{,}0045$ ?", a: "$4{,}5 \\times 10^{-3}$." },
      { q: "$a^5 \\times a^{-2}$ = ?", a: "$a^3$." },
      { q: "$\\sqrt{144}$ = ?", a: "$12$." }
    ]
  },

  "crpe-04": {
    title: "PE-04 : Calcul littéral, équations et mise en équation de problèmes",
    domain: "Nombres et calculs",
    objectives: [
      "Développer, réduire et factoriser une expression littérale, notamment avec les identités remarquables.",
      "Résoudre une équation du premier degré, une équation produit nul et une inéquation du premier degré.",
      "Mettre un problème en équation : choisir l'inconnue, écrire l'équation, la résoudre, conclure.",
      "Utiliser le calcul littéral pour prouver une conjecture (programmes de calcul)."
    ],
    keyPoints: [
      {
        title: "1. Développer et factoriser",
        content: "**Distributivité** : $k(a + b) = ka + kb$ et $(a + b)(c + d) = ac + ad + bc + bd$.\n**Identités remarquables** :\n$$(a + b)^2 = a^2 + 2ab + b^2 \\quad (a - b)^2 = a^2 - 2ab + b^2 \\quad (a + b)(a - b) = a^2 - b^2$$\nFactoriser, c'est transformer une somme en produit : $x^2 - 9 = (x - 3)(x + 3)$."
      },
      {
        title: "2. Équations du premier degré",
        content: "On ne change pas les solutions en ajoutant (ou soustrayant) un même nombre aux deux membres, ni en les multipliant (ou divisant) par un même nombre **non nul**.\n$$5x - 7 = 2x + 8 \\iff 3x = 15 \\iff x = 5.$$\n**Produit nul** : $A \\times B = 0$ si et seulement si $A = 0$ ou $B = 0$."
      },
      {
        title: "3. Inéquations",
        content: "Mêmes règles que pour les équations, **sauf** que multiplier ou diviser par un nombre négatif **change le sens** de l'inégalité :\n$$-2x > 6 \\iff x < -3.$$"
      },
      {
        title: "4. Mise en équation",
        content: "1. Choisir l'inconnue et dire ce qu'elle représente (« soit $x$ le prix d'un cahier, en euros »).\n2. Traduire l'énoncé par une équation.\n3. Résoudre.\n4. Vérifier que la solution convient (entier, positif…) et rédiger une phrase de conclusion."
      },
      {
        title: "5. Au concours : erreurs d'élèves fréquentes",
        content: "• « $(a + b)^2 = a^2 + b^2$ » : oubli du double produit.\n• « $2x + 3 = 5x$ » : réduction de termes non semblables.\n• « $3x = 12$ donc $x = 12 - 3$ » : l'élève « fait passer » le $3$ de l'autre côté sans comprendre l'opération en jeu.\n• Lettre vue comme une étiquette (« $3p$ = trois pommes ») plutôt que comme un nombre."
      }
    ],
    methods: [
      {
        title: "Méthode : Prouver la conjecture d'un programme de calcul",
        example: "Programme : choisir un nombre, ajouter $3$, multiplier le résultat par $2$, soustraire le double du nombre de départ. Que remarque-t-on ?",
        steps: [
          "**Étape 1 (Essais)** : avec $5$ : $(5 + 3) \\times 2 - 10 = 6$ ; avec $-1$ : $2 \\times 2 + 2 = 6$. Conjecture : on obtient toujours $6$.",
          "**Étape 2 (Preuve)** : avec $x$ : $2(x + 3) - 2x = 2x + 6 - 2x = 6$.",
          "**Conclusion** : le résultat vaut $6$ quel que soit le nombre choisi."
        ]
      },
      {
        title: "Méthode : Mettre un problème en équation",
        example: "Un père a $41$ ans, son fils $9$ ans. Dans combien d'années l'âge du père sera-t-il le triple de celui du fils ?",
        steps: [
          "**Étape 1** : soit $x$ le nombre d'années cherché.",
          "**Étape 2** : $41 + x = 3(9 + x)$.",
          "**Étape 3** : $41 + x = 27 + 3x \\iff 14 = 2x \\iff x = 7$.",
          "**Vérification** : dans $7$ ans, $48 = 3 \\times 16$. Réponse : dans $7$ ans."
        ]
      }
    ],
    traps: [
      "⚠️ $-(x - 4) = -x + 4$ : le signe moins devant une parenthèse change tous les signes.",
      "⚠️ Diviser les deux membres par une expression qui peut être nulle fait perdre des solutions : on factorise plutôt et on applique le produit nul.",
      "⚠️ Une solution d'équation n'est pas forcément une réponse au problème : un nombre de personnes doit être un entier positif."
    ],
    flashcards: [
      { q: "Développer $(x - 5)^2$.", a: "$x^2 - 10x + 25$." },
      { q: "Factoriser $4x^2 - 25$.", a: "$(2x - 5)(2x + 5)$." },
      { q: "Résoudre $-3x \\leq 12$.", a: "$x \\geq -4$ (on divise par un négatif : le sens change)." },
      { q: "Solutions de $(x - 2)(3x + 6) = 0$ ?", a: "$2$ et $-2$." }
    ]
  },

  "crpe-05": {
    title: "PE-05 : Proportionnalité, pourcentages et vitesses",
    domain: "Organisation et gestion de données, fonctions",
    objectives: [
      "Reconnaître une situation de proportionnalité et choisir une procédure adaptée (linéarité, coefficient, passage à l'unité, produit en croix).",
      "Utiliser une échelle.",
      "Appliquer un pourcentage, une évolution, des évolutions successives, retrouver une valeur initiale.",
      "Calculer une vitesse moyenne, une distance ou une durée en gérant les unités."
    ],
    keyPoints: [
      {
        title: "1. Les procédures de la proportionnalité",
        content: "Deux grandeurs sont proportionnelles si l'on passe de l'une à l'autre en multipliant toujours par le même nombre (le **coefficient de proportionnalité**).\n• **Linéarité** : si $3$ kg coûtent $7{,}50$ €, $6$ kg coûtent le double et $9$ kg coûtent $7{,}50 + 15 = 22{,}50$ €.\n• **Passage à l'unité** : $1$ kg coûte $7{,}50 \\div 3 = 2{,}50$ €.\n• **Coefficient** : prix $= 2{,}5 \\times$ masse.\n• **Produit en croix** (quatrième proportionnelle) : $x = \\frac{b \\times c}{a}$."
      },
      {
        title: "2. Échelles",
        content: "Une échelle de $\\frac{1}{25\\,000}$ signifie que $1$ cm sur le plan représente $25\\,000$ cm $= 250$ m dans la réalité.\n$$\\text{échelle} = \\frac{\\text{distance sur le plan}}{\\text{distance réelle}} \\quad \\text{(dans la même unité)}.$$"
      },
      {
        title: "3. Pourcentages et évolutions",
        content: "• Augmenter de $t\\,\\%$ : multiplier par $1 + \\frac{t}{100}$. Diminuer de $t\\,\\%$ : multiplier par $1 - \\frac{t}{100}$.\n• Évolutions successives : on **multiplie** les coefficients. $+20\\,\\%$ puis $-20\\,\\%$ : $1{,}2 \\times 0{,}8 = 0{,}96$, soit une baisse de $4\\,\\%$.\n• Valeur initiale : on **divise** par le coefficient. Après $+25\\,\\%$, un prix de $150$ € valait $150 \\div 1{,}25 = 120$ €."
      },
      {
        title: "4. Vitesse moyenne",
        content: "$$v = \\frac{d}{t} \\qquad d = v \\times t \\qquad t = \\frac{d}{v}$$\nDurées : $0{,}25$ h $= 15$ min, $0{,}5$ h $= 30$ min, $0{,}75$ h $= 45$ min, $0{,}1$ h $= 6$ min.\nConversion : $1$ m/s $= 3{,}6$ km/h."
      },
      {
        title: "5. Au concours : erreurs d'élèves fréquentes",
        content: "• Modèle **additif** à la place du modèle multiplicatif : « $4$ pour $6$, donc $10$ pour $12$ » (on a ajouté $6$ aux deux).\n• Appliquer la proportionnalité là où elle n'existe pas : l'âge et la taille, le prix d'un taxi avec prise en charge.\n• « $1{,}3$ h $= 1$ h $30$ min » : confusion entre écriture décimale et sexagésimale."
      }
    ],
    methods: [
      {
        title: "Méthode : Reconnaître une situation de proportionnalité dans un tableau",
        example: "Le tableau $2 \\mapsto 5$, $4 \\mapsto 10$, $7 \\mapsto 17{,}5$, $10 \\mapsto 26$ est-il un tableau de proportionnalité ?",
        steps: [
          "**Étape 1** : calculer les quotients : $\\frac{5}{2} = 2{,}5$ ; $\\frac{10}{4} = 2{,}5$ ; $\\frac{17{,}5}{7} = 2{,}5$ ; $\\frac{26}{10} = 2{,}6$.",
          "**Étape 2** : les quotients ne sont pas tous égaux.",
          "**Conclusion** : ce n'est pas un tableau de proportionnalité. Un seul quotient différent suffit."
        ]
      },
      {
        title: "Méthode : Calculer une vitesse moyenne sur un trajet en deux parties",
        example: "Un cycliste parcourt $30$ km à $20$ km/h puis $30$ km à $30$ km/h. Quelle est sa vitesse moyenne ?",
        steps: [
          "**Étape 1 (Durées)** : $\\frac{30}{20} = 1{,}5$ h et $\\frac{30}{30} = 1$ h, soit $2{,}5$ h au total.",
          "**Étape 2 (Vitesse)** : $v = \\frac{60}{2{,}5} = 24$ km/h.",
          "**Remarque** : ce n'est pas la moyenne des vitesses ($25$ km/h), car le cycliste roule plus longtemps à $20$ km/h."
        ]
      }
    ],
    traps: [
      "⚠️ Une hausse de $10\\,\\%$ suivie d'une baisse de $10\\,\\%$ ne ramène pas au prix initial.",
      "⚠️ La vitesse moyenne n'est pas la moyenne des vitesses, sauf si les durées sont égales.",
      "⚠️ Une échelle se calcule avec deux longueurs **dans la même unité**."
    ],
    flashcards: [
      { q: "Coefficient multiplicateur d'une baisse de $15\\,\\%$ ?", a: "$0{,}85$." },
      { q: "Prix initial si, après $+20\\,\\%$, un article coûte $84$ € ?", a: "$84 \\div 1{,}2 = 70$ €." },
      { q: "$1$ h $12$ min en heures décimales ?", a: "$1{,}2$ h." },
      { q: "$90$ km/h en m/s ?", a: "$25$ m/s." }
    ]
  },

  "crpe-06": {
    title: "PE-06 : Notion de fonction, fonctions linéaires et affines",
    domain: "Organisation et gestion de données, fonctions",
    objectives: [
      "Utiliser le vocabulaire et les notations : image, antécédent, $f(x)$, $f : x \\mapsto \\dots$",
      "Passer d'un mode de représentation à un autre : formule, tableau de valeurs, courbe.",
      "Reconnaître et déterminer une fonction linéaire ou affine à partir de deux valeurs.",
      "Modéliser une situation par une fonction et comparer deux offres."
    ],
    keyPoints: [
      {
        title: "1. Vocabulaire",
        content: "Une fonction $f$ associe à chaque nombre $x$ un **unique** nombre $f(x)$, appelé **image** de $x$. Si $f(a) = b$, $a$ est **un antécédent** de $b$ (il peut y en avoir plusieurs, ou aucun).\nLa courbe de $f$ est l'ensemble des points de coordonnées $(x ; f(x))$."
      },
      {
        title: "2. Fonctions linéaires",
        content: "$f(x) = ax$. Elles modélisent les situations de **proportionnalité** ; leur représentation est une droite passant par l'origine. Le coefficient $a = \\frac{f(x)}{x}$ pour $x \\neq 0$."
      },
      {
        title: "3. Fonctions affines",
        content: "$f(x) = ax + b$ : droite de **coefficient directeur** $a$ et d'**ordonnée à l'origine** $b$.\nÀ partir de deux valeurs : $a = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$, puis $b = f(x_1) - a x_1$.\nLes accroissements de $f(x)$ sont proportionnels aux accroissements de $x$."
      },
      {
        title: "4. Lecture graphique",
        content: "• Image de $a$ : on part de $a$ sur l'axe des abscisses, on lit l'ordonnée du point de la courbe.\n• Antécédents de $b$ : on trace la droite horizontale d'ordonnée $b$ et on lit les abscisses des points d'intersection.\n• Résoudre $f(x) = g(x)$ : abscisses des points d'intersection des deux courbes."
      },
      {
        title: "5. Au concours : erreurs d'élèves fréquentes",
        content: "• Inverser image et antécédent dans une lecture graphique.\n• Croire que toute droite représente une situation de proportionnalité (oubli de la condition « passe par l'origine »).\n• Lire « $f(3)$ » comme « $f$ multiplié par $3$ »."
      }
    ],
    methods: [
      {
        title: "Méthode : Déterminer une fonction affine par deux valeurs",
        example: "$f$ est affine, $f(2) = 7$ et $f(5) = 16$. Déterminer $f(x)$.",
        steps: [
          "**Étape 1** : $a = \\frac{16 - 7}{5 - 2} = \\frac{9}{3} = 3$.",
          "**Étape 2** : $b = f(2) - 3 \\times 2 = 7 - 6 = 1$.",
          "**Conclusion** : $f(x) = 3x + 1$. Contrôle : $f(5) = 16$."
        ]
      },
      {
        title: "Méthode : Comparer deux tarifs",
        example: "Tarif A : $8$ € la séance. Tarif B : abonnement de $45$ € puis $5$ € la séance. À partir de combien de séances B est-il plus avantageux ?",
        steps: [
          "**Étape 1 (Modéliser)** : pour $x$ séances, $A(x) = 8x$ et $B(x) = 5x + 45$.",
          "**Étape 2 (Inéquation)** : $5x + 45 < 8x \\iff 45 < 3x \\iff x > 15$.",
          "**Conclusion** : B est plus avantageux à partir de $16$ séances ; les deux tarifs sont égaux pour $15$ séances ($120$ €)."
        ]
      }
    ],
    traps: [
      "⚠️ Un nombre a une seule image, mais peut avoir plusieurs antécédents.",
      "⚠️ Une fonction affine avec $b \\neq 0$ ne traduit pas une situation de proportionnalité.",
      "⚠️ Bien lire les graduations des axes : elles ne vont pas toujours de $1$ en $1$."
    ],
    flashcards: [
      { q: "Représentation graphique d'une fonction linéaire ?", a: "Une droite passant par l'origine." },
      { q: "$f(x) = -2x + 5$ : image de $3$ ?", a: "$-1$." },
      { q: "$f(x) = -2x + 5$ : antécédent de $9$ ?", a: "$-2$." },
      { q: "Coefficient directeur de la droite passant par $(1 ; 4)$ et $(3 ; 10)$ ?", a: "$3$." }
    ]
  },

  "crpe-07": {
    title: "PE-07 : Statistiques et probabilités",
    domain: "Organisation et gestion de données, fonctions",
    objectives: [
      "Calculer une moyenne (simple ou pondérée), une médiane, une étendue, des effectifs et des fréquences.",
      "Lire, construire et critiquer tableaux et diagrammes.",
      "Utiliser le vocabulaire des probabilités et calculer une probabilité dans une situation d'équiprobabilité.",
      "Traiter une expérience à deux épreuves à l'aide d'un arbre ou d'un tableau."
    ],
    keyPoints: [
      {
        title: "1. Indicateurs statistiques",
        content: "• **Moyenne** : somme des valeurs divisée par l'effectif total ; **pondérée** : $\\bar{x} = \\frac{n_1 x_1 + n_2 x_2 + \\dots}{n_1 + n_2 + \\dots}$.\n• **Médiane** : valeur qui partage la série **rangée** en deux groupes de même effectif (pour $N$ valeurs : la valeur de rang $\\frac{N+1}{2}$ si $N$ est impair, la moyenne des deux valeurs centrales si $N$ est pair).\n• **Étendue** : plus grande valeur moins plus petite valeur.\n• **Fréquence** : $\\frac{\\text{effectif}}{\\text{effectif total}}$, souvent en pourcentage."
      },
      {
        title: "2. Diagrammes",
        content: "Diagramme en bâtons ou en barres (valeurs discrètes), histogramme (classes), diagramme circulaire (angle proportionnel à l'effectif : $360° \\times$ fréquence), courbe (évolution dans le temps)."
      },
      {
        title: "3. Probabilités",
        content: "Une **issue** est un résultat possible ; un **événement** est un ensemble d'issues. En situation d'**équiprobabilité** :\n$$P(A) = \\frac{\\text{nombre d'issues favorables}}{\\text{nombre d'issues possibles}}.$$\n$0 \\leq P(A) \\leq 1$ et $P(\\text{non } A) = 1 - P(A)$."
      },
      {
        title: "4. Expériences à deux épreuves",
        content: "On recense les issues avec un **arbre** ou un **tableau à double entrée**. En lançant deux dés à six faces, il y a $36$ issues équiprobables ; la somme $7$ s'obtient de $6$ façons, donc $P(\\text{somme} = 7) = \\frac{6}{36} = \\frac{1}{6}$."
      },
      {
        title: "5. Au concours : erreurs d'élèves fréquentes",
        content: "• Calculer la médiane sans ranger la série.\n• Moyenne d'un tableau d'effectifs calculée sans pondération (moyenne des valeurs distinctes).\n• « Avec deux dés, la somme $2$ et la somme $7$ ont autant de chances » : les sommes ne sont pas équiprobables.\n• « Après cinq piles, face est plus probable » : la pièce n'a pas de mémoire."
      }
    ],
    methods: [
      {
        title: "Méthode : Moyenne et médiane d'une série donnée par un tableau",
        example: "Notes : $8$ (effectif $3$), $11$ (effectif $5$), $14$ (effectif $4$), $17$ (effectif $2$).",
        steps: [
          "**Effectif total** : $3 + 5 + 4 + 2 = 14$.",
          "**Moyenne** : $\\frac{3 \\times 8 + 5 \\times 11 + 4 \\times 14 + 2 \\times 17}{14} = \\frac{169}{14} \\approx 12{,}1$.",
          "**Médiane** : $14$ valeurs, donc moyenne des $7^e$ et $8^e$ valeurs. Les valeurs de rang $4$ à $8$ valent $11$ : médiane $= 11$."
        ]
      },
      {
        title: "Méthode : Probabilité avec un tirage sans remise",
        example: "Une urne contient $3$ boules rouges et $2$ vertes. On tire deux boules sans remise. Probabilité d'obtenir deux rouges ?",
        steps: [
          "**Étape 1 (Arbre)** : $P(R_1) = \\frac{3}{5}$, puis il reste $2$ rouges sur $4$ boules : $P(R_2 \\text{ sachant } R_1) = \\frac{2}{4}$.",
          "**Étape 2** : on multiplie le long de la branche : $\\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$."
        ]
      }
    ],
    traps: [
      "⚠️ La médiane n'est pas influencée par les valeurs extrêmes, la moyenne l'est.",
      "⚠️ Une fréquence observée sur peu d'essais peut être loin de la probabilité : il faut un grand nombre de répétitions.",
      "⚠️ La moyenne de deux moyennes n'est la moyenne globale que si les effectifs sont égaux."
    ],
    flashcards: [
      { q: "Médiane de $3 ; 7 ; 8 ; 12 ; 20 ; 21$ ?", a: "$\\frac{8 + 12}{2} = 10$." },
      { q: "Angle d'un secteur représentant $25\\,\\%$ d'un diagramme circulaire ?", a: "$90°$." },
      { q: "Probabilité d'obtenir un nombre premier avec un dé à six faces ?", a: "$\\frac{3}{6} = \\frac{1}{2}$ ($2$, $3$, $5$)." },
      { q: "Si $P(A) = 0{,}35$, que vaut $P(\\text{non } A)$ ?", a: "$0{,}65$." }
    ]
  },

  "crpe-08": {
    title: "PE-08 : Grandeurs et mesures : longueurs, aires, volumes, durées et conversions",
    domain: "Grandeurs et mesures",
    objectives: [
      "Calculer le périmètre et l'aire des figures usuelles, le volume des solides usuels.",
      "Convertir des longueurs, des aires, des volumes, des contenances, des masses et des durées.",
      "Distinguer une grandeur de sa mesure, et périmètre d'aire.",
      "Connaître l'effet d'un agrandissement ou d'une réduction sur les longueurs, les aires et les volumes."
    ],
    keyPoints: [
      {
        title: "1. Périmètres et aires",
        content: "• Rectangle : $P = 2(L + \\ell)$, $\\mathcal{A} = L \\times \\ell$. • Triangle : $\\mathcal{A} = \\frac{b \\times h}{2}$.\n• Parallélogramme : $\\mathcal{A} = b \\times h$. • Trapèze : $\\mathcal{A} = \\frac{(B + b) \\times h}{2}$.\n• Disque de rayon $r$ : $P = 2\\pi r$, $\\mathcal{A} = \\pi r^2$."
      },
      {
        title: "2. Volumes",
        content: "• Pavé droit : $V = L \\times \\ell \\times h$. • Prisme droit et cylindre : $V = \\mathcal{B} \\times h$.\n• Pyramide et cône : $V = \\frac{1}{3}\\mathcal{B} \\times h$. • Boule : $V = \\frac{4}{3}\\pi r^3$."
      },
      {
        title: "3. Conversions",
        content: "• Aires : $1\\text{ m}^2 = 100\\text{ dm}^2 = 10\\,000\\text{ cm}^2$ ; $1$ ha $= 10\\,000\\text{ m}^2$.\n• Volumes : $1\\text{ m}^3 = 1\\,000\\text{ dm}^3$ et $1\\text{ dm}^3 = 1$ L ; $1\\text{ cm}^3 = 1$ mL.\n• Durées : $1$ h $= 60$ min $= 3\\,600$ s ; $1$ jour $= 24$ h."
      },
      {
        title: "4. Agrandissement et réduction",
        content: "Si les longueurs sont multipliées par $k$, les aires sont multipliées par $k^2$ et les volumes par $k^3$.\n*Exemple* : doubler les arêtes d'un cube multiplie son volume par $8$."
      },
      {
        title: "5. Au concours : erreurs d'élèves fréquentes",
        content: "• « $1\\text{ m}^2 = 100\\text{ cm}^2$ » : conversion d'aire faite comme une conversion de longueur.\n• Croire qu'une figure de plus grand périmètre a forcément une plus grande aire.\n• Calcul de durées en base dix : « $1$ h $45$ + $30$ min $= 1$ h $75$ = $2$ h $15$ » est juste, mais « $2$ h $15 - 1$ h $50 = 0$ h $65$ » ne l'est pas."
      }
    ],
    methods: [
      {
        title: "Méthode : Calculer une durée",
        example: "Un train part à 9 h 47 et arrive à 13 h 22. Quelle est la durée du trajet ?",
        steps: [
          "**Étape 1** : de 9 h 47 à 10 h : $13$ min.",
          "**Étape 2** : de 10 h à 13 h : $3$ h ; de 13 h à 13 h 22 : $22$ min.",
          "**Conclusion** : $3$ h $+ 13 + 22$ min $= 3$ h $35$ min."
        ]
      },
      {
        title: "Méthode : Volume et contenance",
        example: "Un aquarium a pour dimensions intérieures $60$ cm, $30$ cm et $40$ cm. Combien de litres d'eau contient-il quand il est rempli aux trois quarts ?",
        steps: [
          "**Étape 1** : convertir en dm : $6 \\times 3 \\times 4 = 72\\text{ dm}^3$, soit $72$ L.",
          "**Étape 2** : $\\frac{3}{4} \\times 72 = 54$ L."
        ]
      }
    ],
    traps: [
      "⚠️ Toujours calculer avec des longueurs exprimées dans la **même unité**.",
      "⚠️ L'aire d'un triangle demande une hauteur **perpendiculaire** à la base, pas un côté oblique.",
      "⚠️ $2{,}5$ h ne s'écrit pas $2$ h $50$ min mais $2$ h $30$ min."
    ],
    flashcards: [
      { q: "$3{,}2\\text{ m}^2$ en $\\text{cm}^2$ ?", a: "$32\\,000\\text{ cm}^2$." },
      { q: "$1\\text{ m}^3$ en litres ?", a: "$1\\,000$ L." },
      { q: "Effet d'un agrandissement de rapport $3$ sur une aire ?", a: "Elle est multipliée par $9$." },
      { q: "Volume d'un cône de rayon $3$ cm et de hauteur $5$ cm ?", a: "$\\frac{1}{3}\\pi \\times 9 \\times 5 = 15\\pi \\approx 47{,}1\\text{ cm}^3$." }
    ]
  },

  "crpe-09": {
    title: "PE-09 : Triangles : Pythagore, Thalès, trigonométrie et angles",
    domain: "Espace et géométrie",
    objectives: [
      "Utiliser la somme des angles d'un triangle et les angles formés par deux parallèles et une sécante.",
      "Calculer une longueur avec le théorème de Pythagore ; démontrer qu'un triangle est ou n'est pas rectangle.",
      "Utiliser le théorème de Thalès et sa réciproque ; reconnaître des triangles semblables.",
      "Calculer une longueur ou un angle dans un triangle rectangle par la trigonométrie."
    ],
    keyPoints: [
      {
        title: "1. Angles",
        content: "La somme des angles d'un triangle vaut $180°$. Dans un triangle isocèle, les angles à la base sont égaux ; dans un triangle équilatéral, chaque angle mesure $60°$.\nDeux droites parallèles coupées par une sécante forment des angles **alternes-internes** et **correspondants** égaux (et réciproquement)."
      },
      {
        title: "2. Théorème de Pythagore",
        content: "Si $ABC$ est rectangle en $A$, alors $BC^2 = AB^2 + AC^2$ ($BC$ est l'hypoténuse).\n**Réciproque** : si $BC^2 = AB^2 + AC^2$, alors $ABC$ est rectangle en $A$.\n**Contraposée** : si $BC^2 \\neq AB^2 + AC^2$ (avec $BC$ le plus grand côté), le triangle n'est pas rectangle."
      },
      {
        title: "3. Théorème de Thalès",
        content: "Si les points $A, M, B$ et $A, N, C$ sont alignés et si $(MN) \\parallel (BC)$, alors\n$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}.$$\n**Réciproque** : si les points sont alignés **dans le même ordre** et si $\\frac{AM}{AB} = \\frac{AN}{AC}$, alors $(MN) \\parallel (BC)$.\nDeux triangles sont **semblables** si leurs angles sont égaux deux à deux ; leurs côtés sont alors proportionnels."
      },
      {
        title: "4. Trigonométrie dans le triangle rectangle",
        content: "Pour un angle aigu $\\widehat{B}$ d'un triangle rectangle :\n$$\\cos \\widehat{B} = \\frac{\\text{adjacent}}{\\text{hypoténuse}} \\qquad \\sin \\widehat{B} = \\frac{\\text{opposé}}{\\text{hypoténuse}} \\qquad \\tan \\widehat{B} = \\frac{\\text{opposé}}{\\text{adjacent}}$$\nLa calculatrice doit être réglée en **degrés**."
      },
      {
        title: "5. Au concours : erreurs d'élèves fréquentes",
        content: "• Appliquer Pythagore à un triangle dont on ne sait pas qu'il est rectangle.\n• Écrire $BC^2 = AB^2 + AC^2$ en prenant pour $BC$ un côté de l'angle droit.\n• Mal associer les côtés dans les rapports de Thalès (rapport « petit triangle sur grand triangle » non respecté).\n• Conclure qu'un triangle est rectangle à partir d'une mesure sur la figure."
      }
    ],
    methods: [
      {
        title: "Méthode : Rédiger une réciproque de Pythagore",
        example: "$EFG$ a pour côtés $EF = 7{,}2$ cm, $FG = 9$ cm, $EG = 5{,}4$ cm. Est-il rectangle ?",
        steps: [
          "**Étape 1** : le plus grand côté est $[FG]$ : $FG^2 = 81$.",
          "**Étape 2** : $EF^2 + EG^2 = 51{,}84 + 29{,}16 = 81$.",
          "**Conclusion** : $FG^2 = EF^2 + EG^2$, donc d'après la réciproque du théorème de Pythagore, $EFG$ est rectangle en $E$."
        ]
      },
      {
        title: "Méthode : Calculer une hauteur inaccessible",
        example: "À $12$ m du pied d'un arbre, on vise son sommet sous un angle de $35°$ avec l'horizontale (œil au niveau du sol). Hauteur de l'arbre ?",
        steps: [
          "**Étape 1** : dans le triangle rectangle, la hauteur $h$ est le côté opposé à l'angle, $12$ m le côté adjacent.",
          "**Étape 2** : $\\tan 35° = \\frac{h}{12}$, donc $h = 12 \\tan 35° \\approx 8{,}4$ m."
        ]
      }
    ],
    traps: [
      "⚠️ La réciproque de Thalès exige que les points soient alignés dans le même ordre.",
      "⚠️ Pour démontrer qu'un triangle n'est **pas** rectangle, on utilise la contraposée de Pythagore, pas sa réciproque.",
      "⚠️ Garder les valeurs exactes jusqu'au bout et n'arrondir qu'à la fin."
    ],
    flashcards: [
      { q: "Hypoténuse d'un triangle rectangle de côtés $6$ et $8$ ?", a: "$10$." },
      { q: "Le triangle de côtés $5$, $12$, $13$ est-il rectangle ?", a: "Oui : $25 + 144 = 169 = 13^2$." },
      { q: "Formule de $\\tan \\widehat{B}$ dans un triangle rectangle ?", a: "$\\frac{\\text{opposé}}{\\text{adjacent}}$." },
      { q: "Somme des angles d'un quadrilatère convexe ?", a: "$360°$ (deux triangles)." }
    ]
  },

  "crpe-10": {
    title: "PE-10 : Figures, transformations et géométrie dans l'espace",
    domain: "Espace et géométrie",
    objectives: [
      "Connaître les propriétés des quadrilatères usuels et les utiliser pour justifier.",
      "Reconnaître et construire l'image d'une figure par une symétrie, une translation, une rotation ou une homothétie.",
      "Décrire un solide (faces, arêtes, sommets), reconnaître un patron, une section plane.",
      "Se repérer sur une droite graduée, dans le plan et dans un pavé droit."
    ],
    keyPoints: [
      {
        title: "1. Quadrilatères",
        content: "• **Parallélogramme** : diagonales de même milieu. • **Rectangle** : parallélogramme à diagonales de même longueur.\n• **Losange** : parallélogramme à diagonales perpendiculaires. • **Carré** : à la fois rectangle et losange.\nUn carré est un rectangle particulier ; un rectangle n'est pas forcément un carré (inclusion des familles)."
      },
      {
        title: "2. Transformations",
        content: "• **Symétrie axiale** et **centrale**, **translation**, **rotation** : elles conservent les longueurs, les angles, les aires et l'alignement.\n• **Homothétie** de rapport $k$ : les longueurs sont multipliées par $|k|$, les aires par $k^2$ ; si $k < 0$, la figure est « retournée » de l'autre côté du centre."
      },
      {
        title: "3. Solides",
        content: "Pour un polyèdre convexe, la relation d'Euler s'écrit $S - A + F = 2$ (sommets, arêtes, faces). Un cube : $8$ sommets, $12$ arêtes, $6$ faces.\nUn cube a $11$ patrons différents. La section d'un pavé par un plan parallèle à une face est un rectangle identique à cette face ; celle d'un cylindre par un plan perpendiculaire à l'axe est un disque."
      },
      {
        title: "4. Repérage",
        content: "Dans le plan, un point est repéré par son abscisse et son ordonnée $(x ; y)$ ; dans un pavé droit, par trois coordonnées $(x ; y ; z)$. Sur une sphère (la Terre), on utilise la latitude et la longitude."
      },
      {
        title: "5. Au concours : erreurs d'élèves fréquentes",
        content: "• « Un carré n'est pas un rectangle » : la définition par inclusion n'est pas acquise.\n• Reconnaître une figure à sa position : un carré « posé sur la pointe » n'est plus reconnu.\n• Confondre symétrie axiale et translation (« faire glisser » la figure)."
      }
    ],
    methods: [
      {
        title: "Méthode : Démontrer qu'un quadrilatère est un rectangle",
        example: "$ABCD$ a des diagonales $[AC]$ et $[BD]$ de même milieu $O$ et $AC = BD$.",
        steps: [
          "**Étape 1** : les diagonales ont le même milieu, donc $ABCD$ est un parallélogramme.",
          "**Étape 2** : ce parallélogramme a des diagonales de même longueur, donc c'est un rectangle."
        ]
      },
      {
        title: "Méthode : Compter les éléments d'un prisme",
        example: "Combien de sommets, d'arêtes et de faces a un prisme droit à base hexagonale ?",
        steps: [
          "**Sommets** : $6$ sur chaque base : $12$.",
          "**Arêtes** : $6$ par base et $6$ latérales : $18$.",
          "**Faces** : $2$ bases et $6$ faces latérales : $8$. Contrôle par Euler : $12 - 18 + 8 = 2$."
        ]
      }
    ],
    traps: [
      "⚠️ Une figure dessinée ne prouve rien : on justifie avec des propriétés, pas avec des mesures.",
      "⚠️ Une rotation se définit par un centre, un angle **et** un sens.",
      "⚠️ Une homothétie de rapport $2$ multiplie les aires par $4$, pas par $2$."
    ],
    flashcards: [
      { q: "Parallélogramme dont les diagonales sont perpendiculaires ?", a: "Un losange." },
      { q: "Relation d'Euler pour un polyèdre convexe ?", a: "$S - A + F = 2$." },
      { q: "Combien d'arêtes possède une pyramide à base carrée ?", a: "$8$ arêtes." },
      { q: "Quelles transformations conservent les longueurs ?", a: "Symétries, translations et rotations (pas les homothéties de rapport différent de $\\pm 1$)." }
    ]
  },

  "crpe-11": {
    title: "PE-11 : Algorithmique et programmation (Scratch)",
    domain: "Algorithmique et programmation",
    objectives: [
      "Exécuter à la main un script et prévoir le résultat affiché ou le tracé obtenu.",
      "Comprendre le rôle d'une variable, d'une boucle (« répéter », « répéter jusqu'à ») et d'une instruction conditionnelle.",
      "Traduire un programme de calcul en expression littérale, et inversement.",
      "Repérer et corriger une erreur dans un script."
    ],
    keyPoints: [
      {
        title: "1. Variables",
        content: "Une **variable** est une case mémoire qui porte un nom et contient une valeur, que le programme peut modifier. « mettre $n$ à $5$ » remplace l'ancienne valeur ; « ajouter $2$ à $n$ » la transforme en $n + 2$."
      },
      {
        title: "2. Boucles et conditions",
        content: "• **répéter $k$ fois** : le bloc est exécuté exactement $k$ fois.\n• **répéter jusqu'à** une condition : on teste la condition **avant** chaque passage ; on s'arrête dès qu'elle est vraie.\n• **si … alors … sinon** : un seul des deux blocs est exécuté selon la condition."
      },
      {
        title: "3. Tracés",
        content: "Pour un polygone régulier à $n$ côtés, le lutin tourne de $\\frac{360°}{n}$ à chaque sommet (angle **extérieur**) : $120°$ pour un triangle équilatéral, $90°$ pour un carré, $60°$ pour un hexagone."
      },
      {
        title: "4. Programmes de calcul",
        content: "Un programme « choisir un nombre, le multiplier par $3$, ajouter $4$ » se traduit par $x \\mapsto 3x + 4$. Exécuter le programme pour plusieurs valeurs permet de conjecturer ; le calcul littéral permet de démontrer."
      },
      {
        title: "5. Au concours : erreurs d'élèves fréquentes",
        content: "• Tourner de $60°$ pour tracer un triangle équilatéral (confusion angle intérieur et extérieur).\n• Oublier d'initialiser une variable au début du script.\n• Mal compter le nombre de passages d'une boucle « répéter jusqu'à »."
      }
    ],
    methods: [
      {
        title: "Méthode : Exécuter un script à la main avec un tableau",
        example: "mettre $n$ à $1$ ; mettre $s$ à $0$ ; répéter jusqu'à $n > 4$ : ajouter $n$ à $s$, ajouter $1$ à $n$. Que vaut $s$ ?",
        steps: [
          "**Tableau** : $(n ; s)$ vaut $(1 ; 0)$, puis $(2 ; 1)$, $(3 ; 3)$, $(4 ; 6)$, $(5 ; 10)$.",
          "**Arrêt** : $n = 5 > 4$ : la boucle s'arrête.",
          "**Résultat** : $s = 1 + 2 + 3 + 4 = 10$."
        ]
      },
      {
        title: "Méthode : Tracer un polygone régulier",
        example: "Écrire un script qui trace un hexagone régulier de côté $50$ pas.",
        steps: [
          "**Étape 1** : l'hexagone a $6$ côtés : on répète $6$ fois.",
          "**Étape 2** : à chaque passage, avancer de $50$ puis tourner de $\\frac{360°}{6} = 60°$.",
          "**Script** : stylo en position d'écriture ; répéter $6$ fois (avancer de $50$ ; tourner de $60$ degrés)."
        ]
      }
    ],
    traps: [
      "⚠️ L'ordre des instructions compte : « ajouter $1$ puis multiplier par $2$ » n'est pas « multiplier par $2$ puis ajouter $1$ ».",
      "⚠️ Une boucle « répéter jusqu'à » dont la condition n'est jamais vraie ne s'arrête pas.",
      "⚠️ L'angle de rotation du lutin n'est pas l'angle intérieur du polygone."
    ],
    flashcards: [
      { q: "Angle dont tourne le lutin pour un pentagone régulier ?", a: "$72°$." },
      { q: "Expression du programme « ajouter $5$, multiplier par $2$ » ?", a: "$2(x + 5) = 2x + 10$." },
      { q: "Combien de fois le bloc est-il exécuté dans « répéter $8$ fois » ?", a: "$8$ fois." },
      { q: "Que fait « ajouter $-3$ à $n$ » ?", a: "Remplace $n$ par $n - 3$." }
    ]
  }
};

if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_CRPE);
