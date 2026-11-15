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
        content: "Pour deux entiers $a \\geq 0$ et $b > 0$, il existe un unique couple d'entiers $(q ; r)$ tel que\n$$a = b \\times q + r \\quad \\text{et} \\quad 0 \\leq r < b.$$\n$q$ est le **quotient**, $r$ le **reste**. Si $r = 0$, $b$ **divise** $a$ : $a$ est un **multiple** de $b$.\n*Exemple* : $257 = 12 \\times 21 + 5$ (et $5 < 12$).\nUn entier est **pair** s'il est multiple de $2$ (il s'écrit $2k$ avec $k$ entier) ; sinon, il est **impair** (il s'écrit $2k + 1$ avec $k$ entier)."
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
      },
      {
        title: "Méthode : Démontrer avec la parité",
        example: "Montrer que le carré d'un nombre impair est toujours impair.",
        steps: [
          "**Étape 1 (Nommer)** : soit $n$ un entier impair ; il s'écrit $n = 2k + 1$ avec $k$ entier.",
          "**Étape 2 (Calculer)** : $n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$.",
          "**Étape 3 (Conclure)** : $2k^2 + 2k$ est un entier, donc $n^2$ s'écrit $2m + 1$ avec $m$ entier : $n^2$ est impair."
        ]
      }
    ],
    traps: [
      "⚠️ $1$ n'est pas un nombre premier : il n'a qu'un seul diviseur.",
      "⚠️ Un nombre divisible par $2$ et par $4$ n'est pas forcément divisible par $8$ ($12$ en est un contre-exemple) : on ne multiplie des critères que pour des nombres **premiers entre eux**, c'est-à-dire dont le seul diviseur commun positif est $1$ (leur plus grand diviseur commun vaut $1$). Par exemple, être divisible par $2$ et par $3$ équivaut à être divisible par $6$.",
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
      "Passer d'une fraction à une écriture décimale ou à un pourcentage, et inversement.",
      "Comparer, ranger et intercaler des décimaux et des fractions.",
      "Additionner, soustraire, multiplier et diviser des fractions.",
      "Distinguer nombres décimaux et rationnels non décimaux.",
      "Voie bac+5 : situer un nombre dans les ensembles $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$, utiliser les intervalles et les encadrements, démontrer que $\\frac{1}{3}$ n'est pas décimal."
    ],
    keyPoints: [
      {
        title: "1. Fractions décimales et écriture décimale",
        content: "Une **fraction décimale** a pour dénominateur $10$, $100$, $1\\,000$… :\n$$3{,}47 = 3 + \\frac{4}{10} + \\frac{7}{100} = \\frac{347}{100}.$$\nUn nombre est **décimal** s'il peut s'écrire comme une fraction décimale. Une fraction irréductible $\\frac{a}{b}$ est décimale si et seulement si les seuls facteurs premiers de $b$ sont $2$ et $5$ : $\\frac{3}{8} = 0{,}375$ est décimal, $\\frac{1}{3} = 0{,}333\\dots$ ne l'est pas."
      },
      {
        title: "2. La fraction, plusieurs sens",
        content: "• **Partage** : $\\frac{3}{4}$ d'une tarte, c'est $3$ parts quand on la coupe en $4$.\n• **Quotient** : $\\frac{a}{b}$ est le nombre qui, multiplié par $b$, donne $a$ : $b \\times \\frac{a}{b} = a$.\n• **Opérateur** : prendre $\\frac{3}{4}$ de $60$, c'est calculer $\\frac{3}{4} \\times 60 = 45$.\n• **Repérage** : $\\frac{3}{4}$ se place sur une droite graduée en partageant l'unité en $4$.\n**Vocabulaire** : dans le programme de 2026, le **quotient** est le résultat ou l'expression d'une division ; une **fraction** est le quotient de deux entiers, à la fois nombre, expression et opérateur, sans distinction avec « écriture fractionnaire », expression encore courante et non fautive ; un **nombre rationnel** est un nombre égal au quotient de deux entiers, quelle que soit son écriture."
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
        content: "• « $2{,}15 > 2{,}3$ car $15 > 3$ » : l'élève traite la partie décimale comme un entier.\n• « $0{,}3 \\times 0{,}2 = 0{,}6$ » : la règle des virgules est appliquée comme pour l'addition.\n• « $\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$ » : addition des numérateurs et des dénominateurs.\n• « Multiplier agrandit toujours » : même pour un nombre strictement positif, c'est faux dès que le facteur est inférieur ou égal à $1$ ($8 \\times 0{,}5 = 4 < 8$)."
      },
      {
        title: "6. Voie bac+5 : nombres réels, intervalles et encadrements",
        content: "**Ensembles de nombres** : $\\mathbb{N}$ (entiers naturels) $\\subset \\mathbb{Z}$ (entiers relatifs) $\\subset \\mathbb{D}$ (décimaux) $\\subset \\mathbb{Q}$ (rationnels) $\\subset \\mathbb{R}$ (réels). Chaque inclusion est stricte : $-3 \\in \\mathbb{Z}$ mais $-3 \\notin \\mathbb{N}$ ; $0{,}5 \\in \\mathbb{D}$ mais $0{,}5 \\notin \\mathbb{Z}$ ; $\\frac{1}{3} \\in \\mathbb{Q}$ mais $\\frac{1}{3} \\notin \\mathbb{D}$ ; $\\sqrt{2}$ et $\\pi$ sont des réels **irrationnels**. La nature d'un nombre dépend de sa valeur, pas de son écriture : $\\frac{12}{4} = 3$ est un entier.\n**Intervalles** : $[a ; b]$ est l'ensemble des réels $x$ tels que $a \\leq x \\leq b$ ; $]a ; b[$ correspond à $a < x < b$ ; $[a ; +\\infty[$ à $x \\geq a$ ; $]-\\infty ; b[$ à $x < b$. Un crochet tourné vers le nombre l'inclut, tourné vers l'extérieur l'exclut ; du côté de l'infini, le crochet est toujours ouvert.\n**Encadrement** : encadrer un réel $x$ à $10^{-n}$ près, c'est trouver deux décimaux $a$ et $a + 10^{-n}$ tels que $a \\leq x \\leq a + 10^{-n}$ ; l'amplitude de l'encadrement est $10^{-n}$. *Exemple* : $1{,}41^2 = 1{,}988\\,1 < 2 < 2{,}016\\,4 = 1{,}42^2$, donc $1{,}41 < \\sqrt{2} < 1{,}42$."
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
      },
      {
        title: "Méthode : Démontrer que $\\frac{1}{3}$ n'est pas un nombre décimal (voie bac+5)",
        example: "Démontrer qu'il n'existe aucun entier $a$ et aucun entier naturel $n$ tels que $\\frac{1}{3} = \\frac{a}{10^n}$.",
        steps: [
          "**Étape 1 (raisonnement par l'absurde)** : supposer que $\\frac{1}{3} = \\frac{a}{10^n}$, avec $a$ entier et $n$ entier naturel.",
          "**Étape 2** : en multipliant les deux membres par $3 \\times 10^n$, obtenir $10^n = 3a$ : $10^n$ serait un multiple de $3$.",
          "**Étape 3** : or $10^n$ s'écrit avec un $1$ suivi de $n$ zéros ; la somme de ses chiffres vaut $1$, qui n'est pas divisible par $3$, donc $10^n$ n'est pas un multiple de $3$.",
          "**Conclusion** : la supposition mène à une contradiction ; $\\frac{1}{3}$ n'est donc pas décimal. Une valeur affichée par la calculatrice ($0{,}333\\,333\\,333$) ne prouve rien, car elle ne montre qu'un nombre fini de chiffres."
        ]
      }
    ],
    traps: [
      "⚠️ « $\\frac{1}{3}$ du reste » n'est pas « $\\frac{1}{3}$ du total » : toujours identifier le tout auquel la fraction s'applique.",
      "⚠️ $\\frac{1}{3}$ n'est pas égal à $0{,}33$ : c'est un rationnel non décimal, $0{,}33$ n'en est qu'une valeur approchée.",
      "⚠️ Diviser un nombre **strictement positif** par un nombre **strictement compris entre $0$ et $1$** donne un résultat plus grand : $6 \\div 0{,}5 = 12$. Sans ces hypothèses, la règle ne tient plus : $-6 \\div 0{,}5 = -12 < -6$ et $6 \\div (-2) = -3 < 6$."
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
      "Interpréter la valeur absolue comme une distance sur la droite graduée.",
      "Estimer un ordre de grandeur pour contrôler un calcul.",
      "Voie bac+5 : démontrer que $\\sqrt{2}$ est irrationnel et reconnaître un nombre irrationnel."
    ],
    keyPoints: [
      {
        title: "1. Nombres relatifs et priorités",
        content: "Soustraire un nombre revient à ajouter son opposé : $5 - (-3) = 5 + 3 = 8$.\nLe produit de deux nombres de même signe est positif, de signes contraires négatif.\n**Priorités** : parenthèses, puis puissances, puis multiplications et divisions, puis additions et soustractions (de gauche à droite à priorité égale).\n**Valeur absolue** : la valeur absolue d'un nombre $a$, notée $|a|$, est sa **distance à zéro** sur la droite graduée : $|5| = 5$, $|-5| = 5$, $|0| = 0$.\nLa distance entre deux nombres $a$ et $b$ vaut $|a - b|$. Pour $r \\geq 0$, l'inégalité $|x - a| \\leq r$ signifie donc que $x$ appartient à l'intervalle $[a - r ; a + r]$, de centre $a$. La notation n'est pas exigible au collège ; la voie bac+5, qui inclut le programme de seconde, l'utilise."
      },
      {
        title: "2. Puissances",
        content: "Pour $n \\geq 1$ : $a^n = a \\times a \\times \\dots \\times a$ ($n$ facteurs) ; pour $a \\neq 0$ : $a^0 = 1$ et $a^{-n} = \\frac{1}{a^n}$.\nPour $a \\neq 0$ et $m$, $n$ entiers relatifs :\n$$a^m \\times a^n = a^{m+n} \\qquad \\frac{a^m}{a^n} = a^{m-n} \\qquad (a^m)^n = a^{mn}$$\nAvec $m = n$, la règle du quotient redonne $a^0 = \\frac{a^n}{a^n} = 1$.\nAttention : $-3^2 = -9$ alors que $(-3)^2 = 9$."
      },
      {
        title: "3. Notation scientifique",
        content: "Tout nombre décimal non nul s'écrit $a \\times 10^n$ avec $1 \\leq |a| < 10$ et $n$ entier relatif :\n$$345\\,000 = 3{,}45 \\times 10^5 \\qquad 0{,}000\\,72 = 7{,}2 \\times 10^{-4}.$$"
      },
      {
        title: "4. Racine carrée",
        content: "Pour $a \\geq 0$, $\\sqrt{a}$ est le nombre **positif** dont le carré vaut $a$ : $\\sqrt{49} = 7$.\nCarrés parfaits à connaître : $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225$.\nPour $a \\geq 0$ et $b \\geq 0$, $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ mais $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ en général ($\\sqrt{9 + 16} = 5$, $\\sqrt{9} + \\sqrt{16} = 7$).\nPour tout nombre $a$, $\\sqrt{a^2} = |a|$ : $\\sqrt{(-3)^2} = \\sqrt{9} = 3$."
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
      },
      {
        title: "Méthode : Démontrer que $\\sqrt{2}$ est irrationnel (voie bac+5)",
        example: "Démontrer que $\\sqrt{2}$ ne peut pas s'écrire comme le quotient de deux entiers.",
        steps: [
          "**Étape 1 (raisonnement par l'absurde)** : supposer que $\\sqrt{2} = \\frac{p}{q}$, avec $p$ et $q$ entiers naturels non nuls et la fraction **irréductible**. En élevant au carré : $p^2 = 2q^2$.",
          "**Étape 2** : $p^2$ est pair, donc $p$ est pair (le carré d'un nombre impair est impair, voir les raisonnements sur la parité en PE-01) : $p = 2k$ avec $k$ entier.",
          "**Étape 3** : alors $4k^2 = 2q^2$, soit $q^2 = 2k^2$ : $q^2$ est pair, donc $q$ est pair.",
          "**Conclusion** : $p$ et $q$ sont tous deux divisibles par $2$, ce qui contredit l'irréductibilité de $\\frac{p}{q}$. Donc $\\sqrt{2}$ est irrationnel. On en déduit, par exemple, que $\\sqrt{50} = 5\\sqrt{2}$ est irrationnel, alors que $\\sqrt{8} \\times \\sqrt{2} = \\sqrt{16} = 4$ est un entier."
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
      "Utiliser le calcul littéral pour prouver une conjecture (programmes de calcul).",
      "Raisonner par analyse-synthèse sur une équation.",
      "Isoler une variable dans une formule ; comparer deux expressions par leur différence ou leur rapport.",
      "Voie bac+5 : étudier le signe d'un produit ou d'un quotient, résoudre une équation ou une inéquation avec un quotient."
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
      },
      {
        title: "6. Voie bac+5 : isoler une variable, comparer deux expressions",
        content: "**Isoler une variable**, c'est exprimer une grandeur en fonction des autres, avec les règles de résolution : $P = 2(L + \\ell) \\iff \\frac{P}{2} = L + \\ell \\iff \\ell = \\frac{P}{2} - L$.\n**Comparer par la différence** : $A \\geq B$ équivaut à $A - B \\geq 0$ ; on étudie le signe de $A - B$. *Exemple* : pour tout nombre $a$, $(a^2 + 1) - 2a = (a - 1)^2 \\geq 0$, donc $a^2 + 1 \\geq 2a$.\n**Comparer par le rapport** : pour $A > 0$ et $B > 0$, $A \\geq B$ équivaut à $\\frac{A}{B} \\geq 1$. *Exemple* : $\\frac{3^{20}}{2^{30}} = \\frac{9^{10}}{8^{10}} = \\left(\\frac{9}{8}\\right)^{10} > 1$, donc $3^{20} > 2^{30}$."
      },
      {
        title: "7. Voie bac+5 : signe d'un produit ou d'un quotient",
        content: "**Tableau de signes** : pour étudier le signe de $(ax + b)(cx + d)$, on cherche la valeur qui annule chaque facteur, on place ces valeurs dans l'ordre croissant, on donne le signe de chaque facteur sur chaque intervalle, puis celui du produit (règle des signes). *Exemple* : $(x - 1)(x + 2) < 0 \\iff x \\in ]-2 ; 1[$, car les deux facteurs sont de signes contraires exactement entre $-2$ et $1$.\n**Quotient** : $\\frac{A}{B}$ n'existe que si $B \\neq 0$ ; la valeur qui annule le dénominateur est une **valeur interdite**, toujours exclue (crochet ouvert). Le signe de $\\frac{A}{B}$ s'étudie comme celui de $A \\times B$.\n**Équations** : $\\frac{A}{B} = 0 \\iff A = 0$ et $B \\neq 0$ ; $\\frac{A}{B} = k \\iff A = kB$ et $B \\neq 0$. *Exemple* : $\\frac{2x + 1}{x - 3} = 5 \\iff 2x + 1 = 5x - 15$ avec $x \\neq 3$, soit $x = \\frac{16}{3}$, qui est bien différent de $3$."
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
      },
      {
        title: "Méthode : Raisonner par analyse-synthèse sur une équation",
        example: "Résoudre $\\dfrac{x^2 - 4}{x - 2} = 0$.",
        steps: [
          "**Analyse** : on suppose que $x$ est solution et on cherche ce qu'il vaut nécessairement. Alors $x^2 - 4 = 0$, donc $(x - 2)(x + 2) = 0$, donc $x = 2$ ou $x = -2$. Seuls ces deux nombres peuvent convenir : ce sont des candidats.",
          "**Synthèse** : on teste chaque candidat dans l'équation de départ. Pour $x = 2$, le dénominateur est nul : le quotient n'existe pas, $2$ ne convient pas. Pour $x = -2$ : $\\dfrac{4 - 4}{-2 - 2} = 0$, donc $-2$ convient.",
          "**Conclusion** : l'unique solution est $-2$. L'analyse donne des conditions nécessaires ; seule la synthèse garantit que les candidats conviennent."
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
      "Reconnaître une situation de proportionnalité et choisir une procédure adaptée (propriétés de linéarité, coefficient, passage à l'unité, produit en croix).",
      "Utiliser un ratio et effectuer un partage proportionnel.",
      "Utiliser une échelle.",
      "Appliquer un pourcentage, une évolution, des évolutions successives, retrouver une valeur initiale.",
      "Calculer une vitesse moyenne, une distance ou une durée en gérant les unités ; reconnaître une grandeur quotient."
    ],
    keyPoints: [
      {
        title: "1. Les procédures de la proportionnalité",
        content: "Deux grandeurs sont proportionnelles si l'on passe de l'une à l'autre en multipliant toujours par le même nombre (le **coefficient de proportionnalité**).\n• **Propriété multiplicative de linéarité** : si $3$ kg coûtent $7{,}50$ €, alors $6$ kg, soit $2$ fois plus, coûtent $2 \\times 7{,}50 = 15$ €. En notant $f(x)$ le prix de $x$ kg : $f(kx) = k \\times f(x)$.\n• **Propriété additive de linéarité** : $9$ kg, c'est $3$ kg et $6$ kg, donc $9$ kg coûtent $7{,}50 + 15 = 22{,}50$ €. Autrement dit : $f(x + y) = f(x) + f(y)$.\n• **Passage à l'unité** : $1$ kg coûte $7{,}50 \\div 3 = 2{,}50$ €.\n• **Coefficient** : prix $= 2{,}5 \\times$ masse.\n• **Produit en croix** (quatrième proportionnelle) : $x = \\frac{b \\times c}{a}$."
      },
      {
        title: "2. Ratio et partage proportionnel",
        content: "Le **rapport** de $x$ à $y$ est le quotient $\\frac{x}{y}$. Deux nombres $x$ et $y$ sont dans le **ratio $a : b$** si $\\frac{x}{a} = \\frac{y}{b}$, c'est-à-dire si le rapport de $x$ à $y$ vaut $\\frac{a}{b}$.\n**Partage proportionnel** : partager une quantité selon le ratio $a : b$, c'est la partager en $a + b$ parts égales, puis en donner $a$ à l'un et $b$ à l'autre. Pour $240$ € selon le ratio $3 : 5$ : $3 + 5 = 8$ parts de $\\frac{240}{8} = 30$ €, donc $3 \\times 30 = 90$ € et $5 \\times 30 = 150$ €.\n• La méthode vaut pour un ratio $a : b : c$, ou pour un partage proportionnel à des mises : les parts sont les quantités données.\n• Le ratio compare les parts **entre elles** : dans le ratio $3 : 5$, le premier reçoit $\\frac{3}{5}$ de ce que reçoit le second, mais $\\frac{3}{8}$ du total."
      },
      {
        title: "3. Échelles",
        content: "Une échelle de $\\frac{1}{25\\,000}$ signifie que $1$ cm sur le plan représente $25\\,000$ cm $= 250$ m dans la réalité.\n$$\\text{échelle} = \\frac{\\text{distance sur le plan}}{\\text{distance réelle}} \\quad \\text{(dans la même unité)}.$$"
      },
      {
        title: "4. Pourcentages et évolutions",
        content: "• Augmenter de $t\\,\\%$ : multiplier par $1 + \\frac{t}{100}$. Diminuer de $t\\,\\%$ : multiplier par $1 - \\frac{t}{100}$.\n• Évolutions successives : on **multiplie** les coefficients. $+20\\,\\%$ puis $-20\\,\\%$ : $1{,}2 \\times 0{,}8 = 0{,}96$, soit une baisse de $4\\,\\%$.\n• Valeur initiale : on **divise** par le coefficient. Après $+25\\,\\%$, un prix de $150$ € valait $150 \\div 1{,}25 = 120$ €."
      },
      {
        title: "5. Vitesse moyenne et grandeurs quotients",
        content: "$$v = \\frac{d}{t} \\qquad d = v \\times t \\qquad t = \\frac{d}{v}$$\nDurées : $0{,}25$ h $= 15$ min, $0{,}5$ h $= 30$ min, $0{,}75$ h $= 45$ min, $0{,}1$ h $= 6$ min.\nConversion : $1$ m/s $= 3{,}6$ km/h.\n**La vitesse est une grandeur quotient** : elle s'obtient en divisant deux grandeurs (une distance par une durée) et son unité est composée (km/h, m/s). Autres exemples : le débit (L/min), la masse volumique (g/cm³), le prix au kilogramme (€/kg), la densité de population (hab./km²).\nÀ vitesse constante, la distance est proportionnelle à la durée, et $v$ est le coefficient de proportionnalité."
      },
      {
        title: "6. Au concours : erreurs d'élèves fréquentes",
        content: "• Modèle **additif** à la place du modèle multiplicatif : « $4$ pour $6$, donc $10$ pour $12$ » (on a ajouté $6$ aux deux).\n• Appliquer la proportionnalité là où elle n'existe pas : l'âge et la taille, le prix d'un taxi avec prise en charge.\n• « $1{,}3$ h $= 1$ h $30$ min » : confusion entre écriture décimale et sexagésimale.\n• Confondre ratio et fraction du total : dans le ratio $2 : 3$, le premier reçoit $\\frac{2}{5}$ du total, et non $\\frac{2}{3}$."
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
        title: "Méthode : Partager une quantité selon un ratio",
        example: "On partage $420$ € entre trois personnes selon le ratio $2 : 3 : 5$. Quelle est la part de chacune ?",
        steps: [
          "**Étape 1 (Parts)** : le nombre total de parts est $2 + 3 + 5 = 10$.",
          "**Étape 2 (Valeur d'une part)** : $\\frac{420}{10} = 42$ €.",
          "**Conclusion** : les parts sont $2 \\times 42 = 84$ €, $3 \\times 42 = 126$ € et $5 \\times 42 = 210$ €. Contrôle : $84 + 126 + 210 = 420$."
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
      "⚠️ Une échelle se calcule avec deux longueurs **dans la même unité**.",
      "⚠️ Dans le ratio $a : b$, la part du premier est $\\frac{a}{a + b}$ du total, et non $\\frac{a}{b}$."
    ],
    flashcards: [
      { q: "Coefficient multiplicateur d'une baisse de $15\\,\\%$ ?", a: "$0{,}85$." },
      { q: "Prix initial si, après $+20\\,\\%$, un article coûte $84$ € ?", a: "$84 \\div 1{,}2 = 70$ €." },
      { q: "$1$ h $12$ min en heures décimales ?", a: "$1{,}2$ h." },
      { q: "$90$ km/h en m/s ?", a: "$25$ m/s." },
      { q: "$x$ et $y$ sont dans le ratio $3 : 4$ et $x + y = 21$. Que vaut $x$ ?", a: "$7$ parts de $3$, donc $x = 9$ (et $y = 12$)." },
      { q: "Qu'est-ce qu'une grandeur quotient ?", a: "Une grandeur obtenue en divisant deux grandeurs : vitesse (km/h), débit (L/min), masse volumique (g/cm³)." }
    ]
  },

  "crpe-06": {
    title: "PE-06 : Notion de fonction, fonctions linéaires et affines",
    domain: "Organisation et gestion de données, fonctions",
    objectives: [
      "Utiliser le vocabulaire et les notations : image, antécédent, $f(x)$, $f : x \\mapsto \\dots$",
      "Passer d'un mode de représentation à un autre : formule, tableau de valeurs, courbe.",
      "Reconnaître et déterminer une fonction linéaire ou affine à partir de deux valeurs.",
      "Représenter la fonction carré et résoudre graphiquement une équation ou une inéquation.",
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
        content: "• Image de $a$ : on part de $a$ sur l'axe des abscisses, on lit l'ordonnée du point de la courbe.\n• Antécédents de $b$ : on trace la droite horizontale d'ordonnée $b$ et on lit les abscisses des points d'intersection.\n• Résoudre $f(x) = k$ : c'est chercher les antécédents de $k$. Résoudre $f(x) = g(x)$ : abscisses des points d'intersection des deux courbes.\n• Résoudre $f(x) \\le g(x)$ : abscisses des points où la courbe de $f$ est au-dessous de celle de $g$ ou la rencontre."
      },
      {
        title: "5. La fonction carré : courbe et résolutions graphiques",
        content: "La **fonction carré** est la fonction $f : x \\mapsto x^2$. Elle n'est ni linéaire ni affine : sa courbe, une **parabole**, n'est pas une droite.\nQuelques valeurs : $f(-3) = 9$, $f(-2) = 4$, $f(-1) = 1$, $f(0) = 0$, $f(1) = 1$, $f(2) = 4$, $f(3) = 9$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe de la fonction carré, parabole de sommet l'origine, coupée par la droite horizontale d'ordonnée 4 aux points (-2 ; 4) et (2 ; 4).\" viewBox=\"0 0 280 250\" width=\"280\" height=\"250\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"32\" y1=\"236\" x2=\"32\" y2=\"26\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"68\" y1=\"236\" x2=\"68\" y2=\"26\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"104\" y1=\"236\" x2=\"104\" y2=\"26\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"140\" y1=\"236\" x2=\"140\" y2=\"26\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"176\" y1=\"236\" x2=\"176\" y2=\"26\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"212\" y1=\"236\" x2=\"212\" y2=\"26\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"248\" y1=\"236\" x2=\"248\" y2=\"26\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"14\" y1=\"226\" x2=\"266\" y2=\"226\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"14\" y1=\"206\" x2=\"266\" y2=\"206\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"14\" y1=\"186\" x2=\"266\" y2=\"186\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"14\" y1=\"166\" x2=\"266\" y2=\"166\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"14\" y1=\"146\" x2=\"266\" y2=\"146\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"14\" y1=\"126\" x2=\"266\" y2=\"126\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"14\" y1=\"106\" x2=\"266\" y2=\"106\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"14\" y1=\"86\" x2=\"266\" y2=\"86\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"14\" y1=\"66\" x2=\"266\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"14\" y1=\"46\" x2=\"266\" y2=\"46\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"14\" y1=\"26\" x2=\"266\" y2=\"26\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"14\" y1=\"226\" x2=\"269.6\" y2=\"226\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.4\"/><line x1=\"140\" y1=\"236\" x2=\"140\" y2=\"20\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.4\"/><text x=\"32\" y=\"239\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"68\" y=\"239\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"104\" y=\"239\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"176\" y=\"239\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"212\" y=\"239\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"248\" y=\"239\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"135\" y=\"209.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"135\" y=\"189.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"135\" y=\"169.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"135\" y=\"149.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"135\" y=\"129.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"135\" y=\"109.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">6</text><text x=\"135\" y=\"89.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">7</text><text x=\"135\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">8</text><text x=\"135\" y=\"49.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">9</text><text x=\"135\" y=\"29.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">10</text><text x=\"135\" y=\"239\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><polyline points=\"28.4,33.8 32,46 35.6,57.8 39.2,69.2 42.8,80.2 46.4,90.8 50,101 53.6,110.8 57.2,120.2 60.8,129.2 64.4,137.8 68,146 71.6,153.8 75.2,161.2 78.8,168.2 82.4,174.8 86,181 89.6,186.8 93.2,192.2 96.8,197.2 100.4,201.8 104,206 107.6,209.8 111.2,213.2 114.8,216.2 118.4,218.8 122,221 125.6,222.8 129.2,224.2 132.8,225.2 136.4,225.8 140,226 143.6,225.8 147.2,225.2 150.8,224.2 154.4,222.8 158,221 161.6,218.8 165.2,216.2 168.8,213.2 172.4,209.8 176,206 179.6,201.8 183.2,197.2 186.8,192.2 190.4,186.8 194,181 197.6,174.8 201.2,168.2 204.8,161.2 208.4,153.8 212,146 215.6,137.8 219.2,129.2 222.8,120.2 226.4,110.8 230,101 233.6,90.8 237.2,80.2 240.8,69.2 244.4,57.8 248,46 251.6,33.8\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><text x=\"231.8\" y=\"42\" text-anchor=\"end\" font-size=\"12\" font-style=\"italic\" fill=\"#2563eb\">y = x²</text><line x1=\"14\" y1=\"146\" x2=\"266\" y2=\"146\" stroke=\"#dc2626\" stroke-width=\"1.6\"/><text x=\"266\" y=\"142\" text-anchor=\"end\" font-size=\"12\" font-style=\"italic\" fill=\"#dc2626\">y = 4</text><line x1=\"68\" y1=\"146\" x2=\"68\" y2=\"226\" stroke=\"#dc2626\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><circle cx=\"68\" cy=\"146\" r=\"3.4\" fill=\"#dc2626\"/><line x1=\"212\" y1=\"146\" x2=\"212\" y2=\"226\" stroke=\"#dc2626\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><circle cx=\"212\" cy=\"146\" r=\"3.4\" fill=\"#dc2626\"/></svg></div>\n\n• Deux nombres opposés ont la même image, car $(-x)^2 = x^2$ : la courbe est **symétrique par rapport à l'axe des ordonnées**.\n• Résoudre graphiquement $x^2 = a$ : on trace la droite horizontale d'ordonnée $a$ et on lit les abscisses des points d'intersection. Si $a > 0$, il y a deux solutions, $\\sqrt{a}$ et $-\\sqrt{a}$ ; si $a = 0$, une seule, $0$ ; si $a < 0$, aucune, car un carré est positif ou nul.\n• Sur la figure, $x^2 = 4$ a pour solutions $-2$ et $2$, et $x^2 \\le 4$ équivaut à $-2 \\le x \\le 2$.\n• Une lecture graphique donne en général des valeurs approchées : $x^2 = 2$ se lit $x \\approx 1{,}4$ ou $x \\approx -1{,}4$ ; les valeurs exactes sont $\\sqrt{2}$ et $-\\sqrt{2}$."
      },
      {
        title: "6. Au concours : erreurs d'élèves fréquentes",
        content: "• Inverser image et antécédent dans une lecture graphique.\n• Croire que toute droite représente une situation de proportionnalité (oubli de la condition « passe par l'origine »).\n• Lire « $f(3)$ » comme « $f$ multiplié par $3$ ».\n• Oublier la solution négative de $x^2 = a$ (pour $a > 0$).\n• Relier à la règle les points de la courbe de la fonction carré : une parabole n'est pas une ligne brisée."
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
        title: "Méthode : Résoudre graphiquement avec la fonction carré",
        example: "À l'aide de la courbe de la fonction carré, résoudre $x^2 = 9$, puis $x^2 = -1$.",
        steps: [
          "**Étape 1** : la droite horizontale d'ordonnée $9$ coupe la courbe aux points d'abscisses $-3$ et $3$.",
          "**Étape 2 (Contrôle)** : $(-3)^2 = 9$ et $3^2 = 9$.",
          "**Étape 3** : la droite d'ordonnée $-1$ ne coupe pas la courbe, située au-dessus de l'axe des abscisses (elle ne le touche qu'à l'origine).",
          "**Conclusion** : $x^2 = 9$ a deux solutions, $-3$ et $3$ ; $x^2 = -1$ n'a aucune solution."
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
      "⚠️ Bien lire les graduations des axes : elles ne vont pas toujours de $1$ en $1$.",
      "⚠️ Une solution d'une équation se lit sur l'axe des abscisses, pas sur l'axe des ordonnées."
    ],
    flashcards: [
      { q: "Représentation graphique d'une fonction linéaire ?", a: "Une droite passant par l'origine." },
      { q: "$f(x) = -2x + 5$ : image de $3$ ?", a: "$-1$." },
      { q: "$f(x) = -2x + 5$ : antécédent de $9$ ?", a: "$-2$." },
      { q: "Coefficient directeur de la droite passant par $(1 ; 4)$ et $(3 ; 10)$ ?", a: "$3$." },
      { q: "Antécédents de $25$ par la fonction carré ?", a: "$-5$ et $5$." },
      { q: "Quelle est la courbe de la fonction carré ?", a: "Une parabole, symétrique par rapport à l'axe des ordonnées." }
    ]
  },

  "crpe-07": {
    title: "PE-07 : Statistiques et probabilités",
    domain: "Organisation et gestion de données, fonctions",
    objectives: [
      "Calculer une moyenne (simple ou pondérée), une médiane, une étendue, des effectifs et des fréquences.",
      "Lire, construire et critiquer tableaux et diagrammes.",
      "Utiliser le vocabulaire des probabilités et calculer une probabilité dans une situation d'équiprobabilité.",
      "Traiter une expérience à deux épreuves à l'aide d'un arbre ou d'un tableau.",
      "Déterminer des effectifs cumulés et des quartiles, lire et construire une boîte à moustaches, exploiter un histogramme.",
      "Utiliser les notations ensemblistes (réunion, intersection, complémentaire) et la relation entre les probabilités d'une réunion et d'une intersection.",
      "Interpréter la fluctuation et la stabilisation des fréquences, simuler une expérience aléatoire."
    ],
    keyPoints: [
      {
        title: "1. Indicateurs statistiques",
        content: "• **Moyenne** : somme des valeurs divisée par l'effectif total ; **pondérée** : $\\bar{x} = \\frac{n_1 x_1 + n_2 x_2 + \\dots}{n_1 + n_2 + \\dots}$.\n• **Médiane** : valeur qui partage la série **rangée** en deux groupes de même effectif (pour $N$ valeurs : la valeur de rang $\\frac{N+1}{2}$ si $N$ est impair, la moyenne des deux valeurs centrales si $N$ est pair).\n• **Étendue** : plus grande valeur moins plus petite valeur.\n• **Fréquence** : $\\frac{\\text{effectif}}{\\text{effectif total}}$, souvent en pourcentage."
      },
      {
        title: "2. Effectifs cumulés, quartiles et boîte à moustaches",
        content: "• **Effectif cumulé croissant** d'une valeur : nombre de valeurs de la série inférieures ou égales à cette valeur. On additionne les effectifs de proche en proche ; le dernier effectif cumulé est l'effectif total $N$.\n• **Premier quartile $Q_1$** : plus petite valeur de la série telle qu'au moins $25\\,\\%$ des valeurs lui soient inférieures ou égales. Dans la série rangée, son rang est le plus petit entier supérieur ou égal à $\\frac{N}{4}$.\n• **Troisième quartile $Q_3$** : plus petite valeur telle qu'au moins $75\\,\\%$ des valeurs lui soient inférieures ou égales ; son rang est le plus petit entier supérieur ou égal à $\\frac{3N}{4}$.\n• **Écart interquartile** : $Q_3 - Q_1$.\n• **Boîte à moustaches** : sur un axe gradué, une boîte allant de $Q_1$ à $Q_3$, coupée par un trait à la médiane, et deux moustaches allant jusqu'au minimum et au maximum. La boîte contient environ la moitié des valeurs, chaque moustache environ un quart : la longueur d'une partie traduit la dispersion, pas l'effectif.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.85rem auto;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 460 92\" width=\"460\" height=\"92\" style=\"max-width:460px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Boîte à moustaches sur un axe gradué de 0 à 20 : minimum 5, premier quartile 8, médiane 11,5, troisième quartile 14, maximum 19\"><line x1=\"30\" y1=\"66\" x2=\"430\" y2=\"66\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"61\" x2=\"30\" y2=\"71\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><text x=\"30\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">0</text><line x1=\"50\" y1=\"63\" x2=\"50\" y2=\"69\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><line x1=\"70\" y1=\"61\" x2=\"70\" y2=\"71\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><text x=\"70\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">2</text><line x1=\"90\" y1=\"63\" x2=\"90\" y2=\"69\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><line x1=\"110\" y1=\"61\" x2=\"110\" y2=\"71\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><text x=\"110\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">4</text><line x1=\"130\" y1=\"63\" x2=\"130\" y2=\"69\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><line x1=\"150\" y1=\"61\" x2=\"150\" y2=\"71\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><text x=\"150\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">6</text><line x1=\"170\" y1=\"63\" x2=\"170\" y2=\"69\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><line x1=\"190\" y1=\"61\" x2=\"190\" y2=\"71\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><text x=\"190\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">8</text><line x1=\"210\" y1=\"63\" x2=\"210\" y2=\"69\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><line x1=\"230\" y1=\"61\" x2=\"230\" y2=\"71\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><text x=\"230\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">10</text><line x1=\"250\" y1=\"63\" x2=\"250\" y2=\"69\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><line x1=\"270\" y1=\"61\" x2=\"270\" y2=\"71\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><text x=\"270\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">12</text><line x1=\"290\" y1=\"63\" x2=\"290\" y2=\"69\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><line x1=\"310\" y1=\"61\" x2=\"310\" y2=\"71\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><text x=\"310\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">14</text><line x1=\"330\" y1=\"63\" x2=\"330\" y2=\"69\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><line x1=\"350\" y1=\"61\" x2=\"350\" y2=\"71\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><text x=\"350\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">16</text><line x1=\"370\" y1=\"63\" x2=\"370\" y2=\"69\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><line x1=\"390\" y1=\"61\" x2=\"390\" y2=\"71\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><text x=\"390\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">18</text><line x1=\"410\" y1=\"63\" x2=\"410\" y2=\"69\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><line x1=\"430\" y1=\"61\" x2=\"430\" y2=\"71\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><text x=\"430\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">20</text><line x1=\"130\" y1=\"36\" x2=\"190\" y2=\"36\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><line x1=\"310\" y1=\"36\" x2=\"410\" y2=\"36\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><line x1=\"130\" y1=\"27\" x2=\"130\" y2=\"45\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><line x1=\"410\" y1=\"27\" x2=\"410\" y2=\"45\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/><rect x=\"190\" y=\"22\" width=\"120\" height=\"28\" fill=\"rgba(14, 116, 144, 0.18)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\"/><line x1=\"260\" y1=\"22\" x2=\"260\" y2=\"50\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"3\"/><text x=\"130\" y=\"15\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\" font-weight=\"600\">min</text><text x=\"190\" y=\"15\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\" font-weight=\"600\">Q₁</text><text x=\"260\" y=\"15\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\" font-weight=\"600\">Me</text><text x=\"310\" y=\"15\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\" font-weight=\"600\">Q₃</text><text x=\"410\" y=\"15\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\" font-weight=\"600\">max</text></svg></div>\n*Repère* : à la rentrée 2026, deux programmes de cycle 4 coexistent. Les quartiles, les boîtes à moustaches et les notations ensemblistes viennent de celui de 2026, l'histogramme de celui de 2020, maintenu en 4e et en 3e pour 2026-2027. Ce chapitre couvre les deux par prudence."
      },
      {
        title: "3. Diagrammes",
        content: "Diagramme en bâtons ou en barres (valeurs discrètes), histogramme (classes), diagramme circulaire (angle proportionnel à l'effectif : $360° \\times$ fréquence), courbe (évolution dans le temps).\n• **Histogramme** : les valeurs sont regroupées en **classes** contiguës, comme $[140 ; 150[$. Les rectangles sont accolés et l'axe horizontal porte les bornes des classes. À classes de même amplitude, la hauteur d'un rectangle est proportionnelle à l'effectif de la classe ; si les amplitudes diffèrent, c'est l'aire qui est proportionnelle à l'effectif.\n• Pour **estimer une moyenne** à partir de classes, on remplace chaque classe par son centre (pour $[140 ; 150[$ : $145$), puis on calcule une moyenne pondérée par les effectifs. Le résultat n'est qu'une estimation."
      },
      {
        title: "4. Probabilités",
        content: "Une **issue** est un résultat possible ; un **événement** est un ensemble d'issues. En situation d'**équiprobabilité** :\n$$P(A) = \\frac{\\text{nombre d'issues favorables}}{\\text{nombre d'issues possibles}}.$$\n$0 \\leq P(A) \\leq 1$ et $P(\\text{non } A) = 1 - P(A)$."
      },
      {
        title: "5. Notations ensemblistes",
        content: "• **Complémentaire** : l'événement contraire de $A$ se note $\\overline{A}$, et $P(\\overline{A}) = 1 - P(A)$.\n• **Intersection** $A \\cap B$ : les issues communes à $A$ et à $B$ (« $A$ et $B$ »).\n• **Réunion** $A \\cup B$ : les issues qui réalisent au moins l'un des deux événements (« $A$ ou $B$ », ou inclusif).\n• **Ensemble vide** $\\varnothing$ : il correspond à l'événement impossible. $A$ et $B$ sont **incompatibles** lorsque $A \\cap B = \\varnothing$.\n• **Relation** : $P(A \\cup B) + P(A \\cap B) = P(A) + P(B)$, donc $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Si $A$ et $B$ sont incompatibles, $P(A \\cup B) = P(A) + P(B)$.\n*Exemple* : avec un dé équilibré à six faces, $A = \\{2 ; 4 ; 6\\}$ et $B = \\{3 ; 6\\}$. On a $A \\cap B = \\{6\\}$ et $A \\cup B = \\{2 ; 3 ; 4 ; 6\\}$. On vérifie : $\\frac{4}{6} + \\frac{1}{6} = \\frac{3}{6} + \\frac{2}{6}$."
      },
      {
        title: "6. Expériences à deux épreuves",
        content: "On recense les issues avec un **arbre** ou un **tableau à double entrée**. En lançant deux dés à six faces, il y a $36$ issues équiprobables ; la somme $7$ s'obtient de $6$ façons, donc $P(\\text{somme} = 7) = \\frac{6}{36} = \\frac{1}{6}$."
      },
      {
        title: "7. Fluctuation, simulation et stabilisation des fréquences",
        content: "• **Fluctuation** : la fréquence observée d'une issue varie d'une série d'essais à l'autre. Deux séries de même taille donnent en général des fréquences différentes, sans qu'aucune soit fausse.\n• **Stabilisation** : quand le nombre d'essais augmente, la fréquence observée se stabilise autour de la probabilité de l'issue. Elle en reste en général légèrement différente.\n• **Estimation** : quand on ne peut pas calculer une probabilité (pas d'équiprobabilité identifiable, composition inconnue), on l'estime par la fréquence observée sur un grand nombre d'essais.\n• **Simulation** : dans un tableur, la formule « =ALEA.ENTRE.BORNES(1;6) » simule le lancer d'un dé à six faces. En la recopiant sur un grand nombre de lignes, on obtient une longue série d'essais dont on calcule les fréquences."
      },
      {
        title: "8. Au concours : erreurs d'élèves fréquentes",
        content: "• Calculer la médiane sans ranger la série.\n• Moyenne d'un tableau d'effectifs calculée sans pondération (moyenne des valeurs distinctes).\n• « Avec deux dés, la somme $2$ et la somme $7$ ont autant de chances » : les sommes ne sont pas équiprobables.\n• « Après cinq piles, face est plus probable » : la pièce n'a pas de mémoire.\n• Lire une boîte à moustaches comme un diagramme d'effectifs : une partie plus longue ne contient pas plus de valeurs.\n• Additionner $P(A)$ et $P(B)$ pour obtenir $P(A \\cup B)$ alors que $A$ et $B$ ne sont pas incompatibles.\n• Prendre la fréquence observée sur quelques essais pour la probabilité."
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
      },
      {
        title: "Méthode : Quartiles et boîte à moustaches",
        example: "Série rangée de $16$ notes : $5 ; 6 ; 8 ; 8 ; 9 ; 10 ; 11 ; 11 ; 12 ; 13 ; 13 ; 14 ; 15 ; 16 ; 18 ; 19$.",
        steps: [
          "**Premier quartile** : $\\frac{16}{4} = 4$, donc $Q_1$ est la $4^e$ valeur : $Q_1 = 8$.",
          "**Médiane** : $16$ valeurs, donc moyenne des $8^e$ et $9^e$ valeurs : $\\frac{11 + 12}{2} = 11{,}5$.",
          "**Troisième quartile** : $\\frac{3 \\times 16}{4} = 12$, donc $Q_3$ est la $12^e$ valeur : $Q_3 = 14$.",
          "**Boîte à moustaches** : la boîte va de $8$ à $14$ avec un trait à $11{,}5$, les moustaches vont jusqu'à $5$ et $19$. L'écart interquartile vaut $14 - 8 = 6$."
        ]
      }
    ],
    traps: [
      "⚠️ La médiane n'est pas influencée par les valeurs extrêmes, la moyenne l'est.",
      "⚠️ Une fréquence observée sur peu d'essais peut être loin de la probabilité : il faut un grand nombre de répétitions.",
      "⚠️ La moyenne de deux moyennes n'est la moyenne globale que si les effectifs sont égaux.",
      "⚠️ Le rang d'un quartile est le plus petit entier supérieur ou égal à $\\frac{N}{4}$ (ou à $\\frac{3N}{4}$) : $\\frac{N}{4} = 7{,}5$ donne le rang $8$, mais $\\frac{N}{4} = 3$ donne le rang $3$.",
      "⚠️ Dans un histogramme, les rectangles sont accolés et l'axe horizontal porte les bornes des classes.",
      "⚠️ Le « ou » de $A \\cup B$ est inclusif : les issues communes à $A$ et $B$ y sont comptées une seule fois."
    ],
    flashcards: [
      { q: "Médiane de $3 ; 7 ; 8 ; 12 ; 20 ; 21$ ?", a: "$\\frac{8 + 12}{2} = 10$." },
      { q: "Angle d'un secteur représentant $25\\,\\%$ d'un diagramme circulaire ?", a: "$90°$." },
      { q: "Probabilité d'obtenir un nombre premier avec un dé à six faces ?", a: "$\\frac{3}{6} = \\frac{1}{2}$ ($2$, $3$, $5$)." },
      { q: "Si $P(A) = 0{,}35$, que vaut $P(\\text{non } A)$ ?", a: "$0{,}65$." },
      { q: "Rang du premier quartile dans une série rangée de $30$ valeurs ?", a: "$\\frac{30}{4} = 7{,}5$, donc le rang $8$." },
      { q: "Que représente la boîte d'une boîte à moustaches ?", a: "L'intervalle de $Q_1$ à $Q_3$, qui contient environ la moitié des valeurs." },
      { q: "Dans un histogramme à classes de même amplitude, à quoi la hauteur d'un rectangle est-elle proportionnelle ?", a: "À l'effectif de la classe." },
      { q: "Relation entre $P(A \\cup B)$ et $P(A \\cap B)$ ?", a: "$P(A \\cup B) + P(A \\cap B) = P(A) + P(B)$." },
      { q: "Que devient la fréquence observée quand le nombre d'essais augmente ?", a: "Elle se stabilise autour de la probabilité de l'issue." }
    ]
  },

  "crpe-08": {
    title: "PE-08 : Grandeurs et mesures : longueurs, aires, volumes, durées et conversions",
    domain: "Grandeurs et mesures",
    objectives: [
      "Calculer le périmètre et l'aire des figures usuelles, le volume des solides usuels.",
      "Convertir des longueurs, des aires, des volumes, des contenances, des masses et des durées.",
      "Distinguer une grandeur de sa mesure, et le périmètre de l'aire.",
      "Connaître l'effet d'un agrandissement ou d'une réduction sur les longueurs, les aires et les volumes."
    ],
    keyPoints: [
      {
        title: "1. Grandeur et mesure",
        content: "Une **grandeur** (longueur, aire, volume, contenance, masse, durée) est une propriété d'un objet que l'on peut **comparer** sans rien mesurer : superposer deux bandes, découper et recoller deux surfaces, poser deux objets sur une balance à plateaux.\nSa **mesure** est le **nombre** qui l'exprime une fois l'**unité** choisie : un même segment mesure $1{,}5$ en mètres et $150$ en centimètres. La longueur ne change pas, seule sa mesure change avec l'unité.\n*Conséquence* : on ne compare ou n'additionne des mesures que dans la **même unité** ($3$ dm et $30$ cm désignent la même longueur).\n**Périmètre et aire** sont deux grandeurs différentes : un rectangle de $9$ cm sur $4$ cm et un carré de $6$ cm de côté ont la même aire ($36\\text{ cm}^2$), mais des périmètres différents ($26$ cm et $24$ cm)."
      },
      {
        title: "2. Périmètres et aires",
        content: "• Rectangle : $P = 2(L + \\ell)$, $\\mathcal{A} = L \\times \\ell$. • Triangle : $\\mathcal{A} = \\frac{b \\times h}{2}$.\n• Parallélogramme : $\\mathcal{A} = b \\times h$. • Trapèze : $\\mathcal{A} = \\frac{(B + b) \\times h}{2}$.\n• Disque de rayon $r$ : $P = 2\\pi r$, $\\mathcal{A} = \\pi r^2$.\n• Sphère de rayon $r$ : $\\mathcal{A} = 4\\pi r^2$."
      },
      {
        title: "3. Volumes",
        content: "• Pavé droit : $V = L \\times \\ell \\times h$. • Prisme droit et cylindre : $V = \\mathcal{B} \\times h$.\n• Pyramide et cône : $V = \\frac{1}{3}\\mathcal{B} \\times h$. • Boule : $V = \\frac{4}{3}\\pi r^3$."
      },
      {
        title: "4. Conversions",
        content: "• Aires : $1\\text{ m}^2 = 100\\text{ dm}^2 = 10\\,000\\text{ cm}^2$ ; $1$ ha $= 10\\,000\\text{ m}^2$.\n• Volumes : $1\\text{ m}^3 = 1\\,000\\text{ dm}^3$ et $1\\text{ dm}^3 = 1$ L ; $1\\text{ cm}^3 = 1$ mL.\n• Masses : $1$ t $= 1\\,000$ kg ; $1$ quintal $= 100$ kg ; $1$ kg $= 1\\,000$ g ; $1$ g $= 1\\,000$ mg. *Exemple* : $2{,}35$ t $= 2\\,350$ kg et $450$ g $= 0{,}45$ kg. Un litre d'eau a une masse d'environ $1$ kg.\n• Durées : $1$ h $= 60$ min $= 3\\,600$ s ; $1$ jour $= 24$ h."
      },
      {
        title: "5. Agrandissement et réduction",
        content: "Si les longueurs sont multipliées par $k$, les aires sont multipliées par $k^2$ et les volumes par $k^3$.\n*Exemple* : doubler les arêtes d'un cube multiplie son volume par $8$."
      },
      {
        title: "6. Au concours : erreurs d'élèves fréquentes",
        content: "• « $1\\text{ m}^2 = 100\\text{ cm}^2$ » : conversion d'aire faite comme une conversion de longueur.\n• Comparer deux mesures sans regarder les unités : « $30 > 3$, donc $30$ cm est plus long que $3$ dm ».\n• Croire qu'une figure de plus grand périmètre a forcément une plus grande aire.\n• Calcul de durées en base dix : « $1$ h $45$ + $30$ min $= 1$ h $75$ = $2$ h $15$ » est juste, mais « $2$ h $15 - 1$ h $50 = 0$ h $65$ » ne l'est pas."
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
      { q: "Volume d'un cône de rayon $3$ cm et de hauteur $5$ cm ?", a: "$\\frac{1}{3}\\pi \\times 9 \\times 5 = 15\\pi \\approx 47{,}1\\text{ cm}^3$." },
      { q: "$3{,}75$ t en kg ?", a: "$3\\,750$ kg." },
      { q: "Quelle différence entre une grandeur et sa mesure ?", a: "La grandeur (une longueur, une masse...) ne dépend pas de l'unité ; sa mesure est le nombre qui l'exprime dans l'unité choisie." }
    ]
  },

  "crpe-09": {
    title: "PE-09 : Triangles : Pythagore, Thalès, trigonométrie et angles",
    domain: "Espace et géométrie",
    objectives: [
      "Utiliser la somme des angles d'un triangle, les angles adjacents, supplémentaires et opposés par le sommet, et les angles formés par deux parallèles et une sécante.",
      "Utiliser l'inégalité triangulaire pour décider si trois longueurs permettent de construire un triangle.",
      "Connaître et tracer les droites remarquables d'un triangle (médiatrices, hauteurs, médianes, bissectrices) et le cercle circonscrit.",
      "Utiliser les trois théorèmes de la droite des milieux.",
      "Calculer une longueur avec le théorème de Pythagore ; démontrer qu'un triangle est ou n'est pas rectangle.",
      "Utiliser le théorème de Thalès et sa réciproque ; reconnaître des triangles semblables.",
      "Calculer une longueur ou un angle dans un triangle rectangle par la trigonométrie.",
      "Caractériser le triangle rectangle par son cercle circonscrit (cercle de diamètre l'hypoténuse) et construire un angle droit sans équerre."
    ],
    keyPoints: [
      {
        title: "1. Angles",
        content: "**Deux angles adjacents** ont le même sommet, un côté commun, et sont situés de part et d'autre de ce côté commun.\n**Deux angles supplémentaires** ont pour somme $180°$ (**complémentaires** : somme $90°$). Ces mots portent sur les mesures : deux angles supplémentaires ne sont pas forcément adjacents.\n**Deux angles opposés par le sommet** ont le même sommet et des côtés dans le prolongement l'un de l'autre ; ils sont **égaux**. *Preuve* : si $(AB)$ et $(CD)$ se coupent en $O$, alors $\\widehat{AOC}$ et $\\widehat{BOD}$ sont tous deux supplémentaires de $\\widehat{COB}$.\nLa somme des angles d'un triangle vaut $180°$. Dans un triangle isocèle, les angles à la base sont égaux ; dans un triangle équilatéral, chaque angle mesure $60°$.\nDeux droites parallèles coupées par une sécante forment des angles **alternes-internes** et **correspondants** égaux (et réciproquement)."
      },
      {
        title: "2. Inégalité triangulaire",
        content: "Pour trois points $A$, $B$, $C$ quelconques : $AC \\leq AB + BC$, avec **égalité si et seulement si $B \\in [AC]$**.\nDans un triangle non aplati, chaque côté est donc strictement plus court que la somme des deux autres.\n**Construire un triangle à partir de trois longueurs** : il suffit de comparer la **plus grande** à la somme des deux autres.\n• Plus grande $<$ somme : le triangle existe.\n• Plus grande $=$ somme : le triangle est aplati (les trois points sont alignés).\n• Plus grande $>$ somme : aucun triangle n'a ces côtés.\n*Exemple* : avec $4$, $6$ et $9$ cm, $9 < 4 + 6$ et le triangle existe ; avec $3$, $4$ et $8$ cm, $8 > 3 + 4$ et il n'existe pas."
      },
      {
        title: "3. Droites remarquables et cercle circonscrit",
        content: "• La **médiatrice** d'un segment est la droite perpendiculaire à ce segment en son milieu. **Propriété caractéristique** : un point est sur la médiatrice de $[AB]$ si et seulement s'il est à la même distance de $A$ et de $B$.\n• **Médiatrices et cercle circonscrit** : dans un triangle $ABC$, les médiatrices de $[AB]$ et de $[BC]$ se coupent en un point $O$ tel que $OA = OB$ et $OB = OC$. Donc $OA = OC$ : $O$ est aussi sur la médiatrice de $[AC]$. Les trois médiatrices sont **concourantes** en $O$, centre du **cercle circonscrit** au triangle (le cercle qui passe par ses trois sommets).\n• Une **hauteur** est la droite qui passe par un sommet et qui est perpendiculaire à la droite portant le côté opposé. Les trois hauteurs sont concourantes en un point appelé **orthocentre**. Aire : $\\mathcal{A} = \\frac{\\text{côté} \\times \\text{hauteur relative à ce côté}}{2}$, quel que soit le côté choisi.\n• Une **médiane** est la droite qui passe par un sommet et par le milieu du côté opposé. Les trois médianes sont concourantes au **centre de gravité**. Une médiane partage le triangle en deux triangles de **même aire** : ils ont des bases de même longueur (les deux moitiés du côté) et la même hauteur.\n• La **bissectrice** d'un angle le partage en deux angles adjacents de même mesure ; c'est un axe de symétrie de l'angle.\n• **Cas du triangle rectangle** : le centre du cercle circonscrit est le milieu de l'hypoténuse, qui en est un diamètre (propriété, réciproque et preuve à la section 8).\n• Dans un triangle isocèle en $A$, la hauteur, la médiane et la bissectrice issues de $A$ sont confondues avec la médiatrice de $[BC]$.\n*Attention* : pour un triangle qui a un angle obtus, le centre du cercle circonscrit et l'orthocentre sont à l'extérieur du triangle."
      },
      {
        title: "4. Théorèmes de la droite des milieux",
        content: "Dans un triangle $ABC$, on note $I$ le milieu de $[AB]$ et $J$ le milieu de $[AC]$.\n• **Théorème 1** : la droite qui passe par les milieux de deux côtés est parallèle au troisième côté : $(IJ) \\parallel (BC)$.\n• **Théorème 2** : le segment qui joint les milieux de deux côtés mesure la moitié du troisième côté : $IJ = \\frac{BC}{2}$.\n• **Théorème 3** : la droite qui passe par le milieu d'un côté et qui est parallèle à un deuxième côté coupe le troisième côté en son milieu.\n*Preuve des théorèmes 1 et 2 par le demi-tour* : soit $K$ l'image de $I$ par le demi-tour de centre $J$. Les diagonales $[IK]$ et $[AC]$ de $AICK$ ont le même milieu $J$, donc $AICK$ est un parallélogramme : la translation qui transforme $A$ en $I$ transforme $K$ en $C$. Comme $I$ est le milieu de $[AB]$, cette translation transforme aussi $I$ en $B$. La translation qui transforme $I$ en $B$ transforme donc $K$ en $C$ : $IBCK$ est un parallélogramme, d'où $(IK) \\parallel (BC)$ et $IK = BC$. Comme $IJ = \\frac{IK}{2}$, on obtient $IJ = \\frac{BC}{2}$.\n*Preuve du théorème 3* : la parallèle à $(BC)$ passant par $I$ est unique ; d'après le théorème 1, c'est la droite $(IJ)$, qui coupe $[AC]$ en son milieu $J$.\nCes théorèmes sont le cas particulier du théorème de Thalès où le rapport vaut $\\frac{1}{2}$."
      },
      {
        title: "5. Théorème de Pythagore",
        content: "Si $ABC$ est rectangle en $A$, alors $BC^2 = AB^2 + AC^2$ ($BC$ est l'hypoténuse).\n**Réciproque** : si $BC^2 = AB^2 + AC^2$, alors $ABC$ est rectangle en $A$.\n**Contraposée** : si $BC^2 \\neq AB^2 + AC^2$ (avec $BC$ le plus grand côté), le triangle n'est pas rectangle."
      },
      {
        title: "6. Théorème de Thalès",
        content: "Si les points $A, M, B$ et $A, N, C$ sont alignés et si $(MN) \\parallel (BC)$, alors\n$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}.$$\n**Réciproque** : si les points sont alignés **dans le même ordre** et si $\\frac{AM}{AB} = \\frac{AN}{AC}$, alors $(MN) \\parallel (BC)$.\nDeux triangles sont **semblables** si leurs angles sont égaux deux à deux ; leurs côtés sont alors proportionnels."
      },
      {
        title: "7. Trigonométrie dans le triangle rectangle",
        content: "Pour un angle aigu $\\widehat{B}$ d'un triangle rectangle :\n$$\\cos \\widehat{B} = \\frac{\\text{adjacent}}{\\text{hypoténuse}} \\qquad \\sin \\widehat{B} = \\frac{\\text{opposé}}{\\text{hypoténuse}} \\qquad \\tan \\widehat{B} = \\frac{\\text{opposé}}{\\text{adjacent}}$$\nLa calculatrice doit être réglée en **degrés**."
      },
      {
        title: "8. Triangle rectangle et cercle",
        content: "**Propriété** : si le triangle $ABC$ est rectangle en $A$, alors le milieu $O$ de l'hypoténuse $[BC]$ est le centre de son cercle circonscrit : $OA = OB = OC = \\frac{BC}{2}$. Le cercle circonscrit a pour diamètre l'hypoténuse, et la médiane issue de l'angle droit mesure la moitié de l'hypoténuse.\n**Réciproque** : si un point $A$, distinct de $B$ et de $C$, appartient au cercle de diamètre $[BC]$, alors le triangle $ABC$ est rectangle en $A$.\n*Preuve* : soit $D$ le symétrique de $A$ par rapport au milieu $O$ de $[BC]$. Les diagonales $[AD]$ et $[BC]$ du quadrilatère $ABDC$ ont le même milieu $O$ : c'est un parallélogramme. Si $ABC$ est rectangle en $A$, ce parallélogramme a un angle droit, c'est un rectangle, donc ses diagonales ont la même longueur et $OA = \\frac{AD}{2} = \\frac{BC}{2}$. Réciproquement, si $OA = OB = OC$, les diagonales ont la même longueur ($AD = 2\\,OA = BC$) : le parallélogramme est un rectangle et l'angle en $A$ est droit.\n**Construire un angle droit sans équerre** : tracer un cercle et l'un de ses diamètres $[BC]$, puis placer un point $A$ sur le cercle, distinct de $B$ et de $C$ : l'angle $\\widehat{BAC}$ est droit. Sur un terrain, on contrôle de même un rectangle sans équerre, en mesurant ses diagonales : un parallélogramme dont les diagonales ont la même longueur est un rectangle."
      },
      {
        title: "9. Au concours : erreurs d'élèves fréquentes",
        content: "• Appliquer Pythagore à un triangle dont on ne sait pas qu'il est rectangle.\n• Tester l'inégalité triangulaire sur le mauvais côté : seule la comparaison du plus grand côté à la somme des deux autres permet de conclure.\n• Confondre **médiane** et **médiatrice** : la médiane issue de $A$ passe par $A$ et par le milieu de $[BC]$, mais n'est pas perpendiculaire à $(BC)$ en général ; la médiatrice de $[BC]$ ne passe pas par $A$ en général.\n• Tracer une hauteur « à l'intérieur » seulement : quand l'angle est obtus, le pied de la hauteur est sur le prolongement du côté.\n• Écrire $BC^2 = AB^2 + AC^2$ en prenant pour $BC$ un côté de l'angle droit.\n• Mal associer les côtés dans les rapports de Thalès (rapport « petit triangle sur grand triangle » non respecté).\n• Conclure qu'un triangle est rectangle à partir d'une mesure sur la figure."
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
      },
      {
        title: "Méthode : Utiliser le théorème de la droite des milieux",
        example: "Dans le triangle $RST$, $M$ est le milieu de $[RS]$, $N$ celui de $[RT]$, et $ST = 7{,}4$ cm. Démontrer que $(MN) \\parallel (ST)$ et calculer $MN$.",
        steps: [
          "**Étape 1 (Données)** : dans le triangle $RST$, $M$ et $N$ sont les milieux des côtés $[RS]$ et $[RT]$.",
          "**Étape 2 (Théorèmes)** : d'après le théorème de la droite des milieux, $(MN) \\parallel (ST)$ et $MN = \\frac{ST}{2}$.",
          "**Conclusion** : $MN = \\frac{7{,}4}{2} = 3{,}7$ cm."
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
      { q: "Somme des angles d'un quadrilatère convexe ?", a: "$360°$ (deux triangles)." },
      { q: "Que peut-on dire de deux angles opposés par le sommet ?", a: "Ils ont la même mesure." },
      { q: "Peut-on construire un triangle de côtés $2$, $3$ et $6$ cm ?", a: "Non : $6 > 2 + 3$ (inégalité triangulaire)." },
      { q: "Rayon du cercle circonscrit à un triangle rectangle d'hypoténuse $10$ cm ?", a: "$5$ cm : son centre est le milieu de l'hypoténuse." },
      { q: "$A$ est un point du cercle de diamètre $[BC]$, distinct de $B$ et $C$. Que dire du triangle $ABC$ ?", a: "Il est rectangle en $A$." },
      { q: "En quel point se coupent les médiatrices d'un triangle ?", a: "Au centre du cercle circonscrit, équidistant des trois sommets." },
      { q: "Comment contrôler sans équerre qu'un quadrilatère est un rectangle ?", a: "Vérifier que ses côtés opposés ont deux à deux la même longueur (c'est un parallélogramme), puis que ses diagonales ont la même longueur." },
      { q: "Différence entre médiane et hauteur issues de $A$ dans un triangle $ABC$ ?", a: "La médiane passe par le milieu de $[BC]$ ; la hauteur est perpendiculaire à $(BC)$." },
      { q: "$I$ et $J$ sont les milieux de $[AB]$ et $[AC]$, $BC = 10$ cm. Que vaut $IJ$ ?", a: "$5$ cm, et $(IJ) \\parallel (BC)$ (droite des milieux)." }
    ]
  },

  "crpe-10": {
    title: "PE-10 : Figures, transformations et géométrie dans l'espace",
    domain: "Espace et géométrie",
    objectives: [
      "Connaître les définitions et les propriétés caractéristiques des quadrilatères usuels et les utiliser pour justifier.",
      "Reconnaître et construire l'image d'une figure par une symétrie, une translation, une rotation ou une homothétie.",
      "Relier translation, parallélogramme et vecteurs ; utiliser l'égalité, l'opposé et la somme de vecteurs, et la relation de Chasles.",
      "Décrire un solide (faces, arêtes, sommets), reconnaître un patron, une section plane, y compris celle d'une sphère (grands cercles).",
      "Se repérer sur une droite graduée, dans le plan et dans un pavé droit."
    ],
    keyPoints: [
      {
        title: "1. Quadrilatères",
        content: "**Définitions**\n• **Parallélogramme** : quadrilatère dont les côtés opposés sont parallèles deux à deux.\n• **Rectangle** : quadrilatère qui a quatre angles droits.\n• **Losange** : quadrilatère qui a quatre côtés de même longueur.\n• **Carré** : quadrilatère qui a quatre angles droits et quatre côtés de même longueur ; c'est donc à la fois un rectangle et un losange.\n**Propriétés caractéristiques** (elles valent dans les deux sens, donc servent à reconnaître la figure)\n• Un quadrilatère est un parallélogramme si et seulement si ses diagonales ont le même milieu. Pour un quadrilatère non croisé, cela revient aussi à : côtés opposés de même longueur deux à deux, ou deux côtés opposés parallèles et de même longueur.\n• Un parallélogramme est un rectangle si et seulement s'il a un angle droit, ou si et seulement si ses diagonales ont la même longueur.\n• Un parallélogramme est un losange si et seulement si deux côtés consécutifs ont la même longueur, ou si et seulement si ses diagonales sont perpendiculaires.\n• Un parallélogramme est un carré si et seulement si ses diagonales sont perpendiculaires et de même longueur.\nUn carré est un rectangle particulier ; un rectangle n'est pas forcément un carré (inclusion des familles)."
      },
      {
        title: "2. Transformations",
        content: "• **Symétrie axiale** et **centrale**, **translation**, **rotation** : elles conservent les longueurs, les angles, les aires et l'alignement.\n• **Symétrie centrale de centre $O$**, dite aussi **demi-tour** autour de $O$ : $O$ est le milieu du segment qui joint un point à son image. C'est la rotation de centre $O$ et d'angle $180°$. L'image d'une droite est une droite parallèle. Le centre d'un parallélogramme (point d'intersection des diagonales) est son centre de symétrie.\n• **Translation et parallélogramme** : la translation qui transforme $A$ en $B$ associe à un point $M$ le point $M'$ tel que $ABM'M$ est un parallélogramme (aplati si $M$ est sur la droite $(AB)$). La figure glisse sans tourner.\n• **Homothétie** de rapport $k$ : les longueurs sont multipliées par $|k|$, les aires par $k^2$ ; si $k < 0$, la figure est « retournée » de l'autre côté du centre."
      },
      {
        title: "3. Vecteurs",
        content: "Notion du programme de cycle 4 de 2026 (classe de 3e). La translation qui transforme $A$ en $B$ est la **translation de vecteur $\\overrightarrow{AB}$**. Si $A \\neq B$, ce vecteur a une direction (celle de $(AB)$), un sens (de $A$ vers $B$) et une longueur ($AB$).\n• **Égalité** : $\\overrightarrow{AB} = \\overrightarrow{CD}$ signifie que la translation qui transforme $A$ en $B$ transforme aussi $C$ en $D$, c'est-à-dire que $ABDC$ est un parallélogramme (éventuellement aplati).\n• **Vecteur nul** : $\\overrightarrow{AA} = \\vec{0}$ ; la translation correspondante laisse tous les points en place.\n• **Opposé** : $\\overrightarrow{BA} = -\\overrightarrow{AB}$ : même direction, même longueur, sens contraire. Enchaîner les translations de vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{BA}$ ramène chaque point à sa position de départ.\n• **Somme** : enchaîner la translation de vecteur $\\vec{u}$ puis celle de vecteur $\\vec{v}$ revient à une seule translation, de vecteur $\\vec{u} + \\vec{v}$.\n• **Relation de Chasles** : pour tous points $A$, $B$, $C$, $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$.\n• **Règle du parallélogramme** : si $ABDC$ est un parallélogramme, $\\overrightarrow{AB} + \\overrightarrow{AC} = \\overrightarrow{AD}$."
      },
      {
        title: "4. Solides",
        content: "Pour un polyèdre convexe, la relation d'Euler s'écrit $S - A + F = 2$ (sommets, arêtes, faces). Un cube : $8$ sommets, $12$ arêtes, $6$ faces.\nUn cube a $11$ patrons différents. La section d'un pavé par un plan parallèle à une face est un rectangle identique à cette face ; celle d'un cylindre par un plan perpendiculaire à l'axe est un disque.\n**Sphère et boule** : la sphère de centre $O$ et de rayon $R$ est formée des points situés à la distance $R$ de $O$ ; la boule, des points situés à une distance inférieure ou égale à $R$. Aire de la sphère : $\\mathcal{A} = 4\\pi R^2$ ; volume de la boule : $V = \\frac{4}{3}\\pi R^3$.\n**Section d'une sphère par un plan** situé à la distance $d$ du centre $O$ : si $d < R$, c'est un **cercle** dont le centre $H$ est le pied de la perpendiculaire au plan menée de $O$. Pour un point $M$ de la section, le triangle $OHM$ est rectangle en $H$, donc le rayon de la section est $r = HM = \\sqrt{R^2 - d^2}$. Si $d = R$, la section se réduit à un point (plan tangent) ; si $d > R$, elle est vide.\nQuand le plan passe par le centre ($d = 0$), la section est un **grand cercle**, de même centre et de même rayon $R$ que la sphère. Sur la Terre, l'équateur est un grand cercle, un méridien est un demi-grand cercle, mais les autres parallèles sont des cercles plus petits."
      },
      {
        title: "5. Repérage",
        content: "Dans le plan, un point est repéré par son abscisse et son ordonnée $(x ; y)$ ; dans un pavé droit, par trois coordonnées $(x ; y ; z)$. Sur une sphère (la Terre), on utilise la latitude (repérée sur un méridien, à partir de l'équateur) et la longitude (repérée sur l'équateur, à partir du méridien de Greenwich). Le parallèle de latitude $\\varphi$ est un cercle de rayon $R \\cos \\varphi$, où $R$ est le rayon de la Terre."
      },
      {
        title: "6. Au concours : erreurs d'élèves fréquentes",
        content: "• « Un carré n'est pas un rectangle » : la définition par inclusion n'est pas acquise.\n• Reconnaître une figure à sa position : un carré « posé sur la pointe » n'est plus reconnu.\n• Confondre symétrie axiale et translation (« faire glisser » la figure).\n• Écrire $\\overrightarrow{AB} + \\overrightarrow{AC} = \\overrightarrow{BC}$ : la relation de Chasles exige que les vecteurs s'enchaînent."
      }
    ],
    methods: [
      {
        title: "Méthode : Démontrer qu'un quadrilatère est un rectangle",
        example: "$ABCD$ a des diagonales $[AC]$ et $[BD]$ de même milieu $O$ et $AC = BD$.",
        steps: [
          "**Étape 1** : les diagonales ont le même milieu, donc $ABCD$ est un parallélogramme (propriété caractéristique).",
          "**Étape 2** : ce parallélogramme a des diagonales de même longueur, donc c'est un rectangle (propriété caractéristique)."
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
      },
      {
        title: "Méthode : Simplifier une somme de vecteurs",
        example: "Simplifier $\\overrightarrow{MN} + \\overrightarrow{PM}$.",
        steps: [
          "**Étape 1** : on change l'ordre des termes pour que les vecteurs s'enchaînent : $\\overrightarrow{PM} + \\overrightarrow{MN}$.",
          "**Étape 2** : la relation de Chasles donne $\\overrightarrow{PM} + \\overrightarrow{MN} = \\overrightarrow{PN}$."
        ]
      }
    ],
    traps: [
      "⚠️ Une figure dessinée ne prouve rien : on justifie avec des propriétés, pas avec des mesures.",
      "⚠️ Une rotation se définit par un centre, un angle **et** un sens.",
      "⚠️ Une homothétie de rapport $2$ multiplie les aires par $4$, pas par $2$.",
      "⚠️ Si $\\overrightarrow{AB} = \\overrightarrow{CD}$, le parallélogramme est $ABDC$, pas $ABCD$ : attention à l'ordre des sommets."
    ],
    flashcards: [
      { q: "Parallélogramme dont les diagonales sont perpendiculaires ?", a: "Un losange." },
      { q: "Relation d'Euler pour un polyèdre convexe ?", a: "$S - A + F = 2$." },
      { q: "Combien d'arêtes possède une pyramide à base carrée ?", a: "$8$ arêtes." },
      { q: "Quelles transformations conservent les longueurs ?", a: "Symétries, translations et rotations (pas les homothéties de rapport différent de $\\pm 1$)." },
      { q: "Définition du rectangle ?", a: "Un quadrilatère qui a quatre angles droits." },
      { q: "Relation de Chasles ?", a: "$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$, pour tous points $A$, $B$, $C$." },
      { q: "Si la translation qui transforme $A$ en $B$ transforme $C$ en $D$, quel quadrilatère est un parallélogramme ?", a: "$ABDC$ (éventuellement aplati)." },
      { q: "Rayon de la section d'une sphère de rayon $R$ par un plan situé à la distance $d < R$ du centre ?", a: "$\\sqrt{R^2 - d^2}$ (Pythagore) ; si $d = 0$, c'est un grand cercle de rayon $R$." }
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
