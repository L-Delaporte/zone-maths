// Fiches de cours de référence, définitions, formules, méthodes et flashcards pour les 18 chapitres de 3ème
// Conforme au Bulletin Officiel de l'Éducation Nationale et enrichi avec les cours et évaluations d'archives
window.MATHS_COURSES = {
  "N1": {
    "title": "N1 : Ensemble de nombres et fractions",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Connaître et distinguer les ensembles de nombres : $\\mathbb{N}, \\mathbb{Z}, \\mathbb{D}, \\mathbb{Q}, \\mathbb{R}$.",
      "Définir un nombre irrationnel comme un nombre ne pouvant s'écrire sous forme de quotient $\\frac{a}{b}$.",
      "Maîtriser les 4 opérations sur les fractions avec des nombres relatifs.",
      "Respecter scrupuleusement les priorités opératoires et rendre les fractions irréductibles."
    ],
    "keyPoints": [
      {
        "title": "1. Les ensembles de nombres emboîtés",
        "content": "• **Entiers naturels $\\mathbb{N}$** : entiers positifs ($0, 1, 2, 42...$).\n• **Entiers relatifs $\\mathbb{Z}$** : entiers positifs et négatifs ($-7, -1, 0, 3...$).\n• **Nombres décimaux $\\mathbb{D}$** : nombres ayant un nombre fini de chiffres après la virgule, pouvant s'écrire sous la forme $\\frac{a}{10^n}$ (ex: $0,25 = \\frac{1}{4}$, mais $\\frac{1}{3} \\approx 0,333... \\notin \\mathbb{D}$).\n• **Nombres rationnels $\\mathbb{Q}$** : nombres pouvant s'écrire sous la forme d'un quotient $\\frac{a}{b}$ où $a \\in \\mathbb{Z}$ et $b \\in \\mathbb{Z}^*$ (ex: $\\frac{1}{3}, -\\frac{7}{11}$).\n• **Nombres réels $\\mathbb{R}$** : ensemble de tous les nombres (rationnels et irrationnels).\n$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$"
      },
      {
        "title": "2. Les nombres irrationnels",
        "content": "Définition du cours : Un **nombre irrationnel** est un nombre réel qui **ne peut pas** s'écrire sous la forme d'un quotient $\\frac{a}{b}$ avec $a$ et $b$ entiers ($b \\neq 0$).\n*Exemples majeurs* :\n• $\\pi \\approx 3,14159...$\n• $\\sqrt{2} \\approx 1,4142...$ (la diagonale d'un carré de côté 1)\n• $\\sqrt{3}, \\sqrt{5}, \\sqrt{7}$... (racines carrées d'entiers qui ne sont pas des carrés parfaits)."
      },
      {
        "title": "3. Les 4 opérations sur les fractions de relatifs",
        "content": "• **Addition / Soustraction** : Même dénominateur obligatoire !\n$$\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d} \\quad \\text{et} \\quad \\frac{a}{b} - \\frac{c}{d} = \\frac{ad - bc}{bd}$$\n• **Multiplication** : On multiplie numérateurs entre eux et dénominateurs entre eux en décomposant pour simplifier AVANT :\n$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$\n• **Division** : Diviser par une fraction non nulle revient à **multiplier par son inverse** :\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$$"
      },
      {
        "title": "4. Fractions irréductibles et division par zéro",
        "content": "• Une fraction est **irréductible** lorsque son numérateur et son dénominateur sont premiers entre eux (leur PGCD vaut 1).\n• La division par 0 est strictement **impossible** : une fraction dont le dénominateur est nul n'a aucun sens mathématique."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Enchaînement d'opérations fractionnaires complexes",
        "example": "Calculer $A = \\frac{7}{5} - \\frac{3}{5} \\div \\frac{9}{10}$ sous forme irréductible.",
        "steps": [
          "**Étape 1 (Priorités)** : La division est prioritaire sur la soustraction.",
          "**Étape 2 (Multiplier par l'inverse)** : $\\frac{3}{5} \\div \\frac{9}{10} = \\frac{3}{5} \\times \\frac{10}{9}$.",
          "**Étape 3 (Simplification préalable)** : $\\frac{3 \\times (5 \\times 2)}{5 \\times (3 \\times 3)} = \\frac{2}{3}$.",
          "**Étape 4 (Mise au même dénominateur)** : $A = \\frac{7}{5} - \\frac{2}{3} = \\frac{21}{15} - \\frac{10}{15} = \\frac{11}{15}$ (fraction irréductible)."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais additionner les dénominateurs : $\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$ et NON $\\frac{2}{5}$ !",
      "⚠️ Ne pas confondre **opposé** ($-x$) et **inverse** ($\\frac{1}{x}$). L'inverse de $-\\frac{4}{7}$ est $-\\frac{7}{4}$.",
      "⚠️ Penser que $\\frac{1}{3}$ est un nombre décimal : $1 \\div 3 = 0,333...$, la division ne s'arrête jamais, donc $\\frac{1}{3} \\in \\mathbb{Q}$ mais $\\frac{1}{3} \\notin \\mathbb{D}$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la règle pour diviser par une fraction non nulle ?",
        "a": "Diviser par une fraction revient à **multiplier par son inverse** :\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$"
      },
      {
        "q": "Qu'est-ce qu'un nombre irrationnel ?",
        "a": "Un nombre réel qui **ne peut pas** s'écrire sous la forme d'un quotient $\\frac{a}{b}$ avec $a$ et $b$ entiers (ex: $\\pi, \\sqrt{2}$)."
      },
      {
        "q": "Un nombre décimal fait-il partie de $\\mathbb{Q}$ et de $\\mathbb{R}$ ?",
        "a": "Oui, car tout décimal peut s'écrire sous forme de fraction $\\frac{a}{10^n}$. L'inclusion est : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$."
      },
      {
        "q": "Quel est l'inverse de $-\\frac{8}{3}$ ?",
        "a": "$-\\frac{3}{8}$ (l'inverse conserve le signe et échange numérateur et dénominateur)."
      },
      {
        "q": "Quelle est la condition obligatoire pour additionner deux fractions ?",
        "a": "Elles doivent impérativement être réduites au **même dénominateur** avant d'additionner les numérateurs."
      }
    ]
  },
  "N2": {
    "title": "N2 : Calcul littéral et Identités remarquables",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Maîtriser la distributivité simple $k(a+b) = ka+kb$ et la double distributivité $(a+b)(c+d) = ac+ad+bc+bd$.",
      "Comprendre que « Développer, c'est perdre les parenthèses ».",
      "Connaître par cœur et savoir appliquer les 3 identités remarquables.",
      "Savoir factoriser par recherche d'un facteur commun évident ou à l'aide de l'identité $a^2 - b^2 = (a-b)(a+b)$."
    ],
    "keyPoints": [
      {
        "title": "1. Distributivité simple et double : « Perdre les parenthèses »",
        "content": "• **Développer**, c'est transformer un produit en somme ou différence (perdre les parenthèses).\n• **Simple distributivité** : $k(a + b) = ka + kb$ et $k(a - b) = ka - kb$\n• **Double distributivité** : $(a + b)(c + d) = ac + ad + bc + bd$\n• **Règle des signes en produit** : $(+) \\times (+) = +$ ; $(-) \\times (-) = +$ ; $(+) \\times (-) = -$."
      },
      {
        "title": "2. Les 3 identités remarquables (Formules clés du Brevet)",
        "content": "Pour tous nombres réels $a$ et $b$ :\n1. Carré d'une somme : $$(a + b)^2 = a^2 + 2ab + b^2$$\n2. Carré d'une différence : $$(a - b)^2 = a^2 - 2ab + b^2$$\n3. Produit de la somme par la différence : $$(a - b)(a + b) = a^2 - b^2$$"
      },
      {
        "title": "3. Factorisation : « Retrouver les parenthèses »",
        "content": "• **Factoriser**, c'est transformer une somme ou différence en produit.\n• **Méthode 1 (Facteur commun)** : $ka + kb = k(a + b)$ ou $(ax+b)(cx+d) + (ax+b)(ex+f) = (ax+b)[(cx+d)+(ex+f)]$.\n• **Méthode 2 (Différence de deux carrés)** : $$a^2 - b^2 = (a - b)(a + b)$$\n*Exemple* : $4x^2 - 9 = (2x)^2 - 3^2 = (2x - 3)(2x + 3)$."
      },
      {
        "title": "4. Suppression de parenthèses précédées de + ou -",
        "content": "• Précédées de $+$ : on retire les parenthèses sans rien modifier : $A + (B - C) = A + B - C$.\n• Précédées de $-$ : **on change TOUS les signes intérieurs** : $A - (B - C) = A - B + C$.\n• Si un produit est précédé d'un signe $-$ : développer le produit à l'intérieur de crochets avant de distribuer le signe moins !"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Factoriser une expression avec facteur commun complexe",
        "example": "Factoriser $E = (2x - 3)(4x + 1) - (2x - 3)(x - 2)$.",
        "steps": [
          "**Étape 1 (Repérer le facteur commun)** : $(2x - 3)$ apparaît dans les deux termes.",
          "**Étape 2 (Mettre en facteur)** : $E = (2x - 3) [ (4x + 1) - (x - 2) ]$.",
          "**Étape 3 (Réduire les crochets)** : $E = (2x - 3)(4x + 1 - x + 2) = (2x - 3)(3x + 3)$.",
          "**Étape 4 (Factorisation maximale)** : Comme $3x+3 = 3(x+1)$, on écrit $E = 3(2x - 3)(x + 1)$."
        ]
      }
    ],
    "traps": [
      "⚠️ Oublier le double produit $2ab$ : $(a+b)^2 \\neq a^2 + b^2$ ! $(x+3)^2 = x^2 + 6x + 9$.",
      "⚠️ Dans $(2x)^2$, oublier d'élever le 2 au carré : $(2x)^2 = 4x^2$ et NON $2x^2$ !",
      "⚠️ Attention au signe $-$ devant un produit : $A - (x-1)(x+2) = A - [x^2 + x - 2] = A - x^2 - x + 2$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule développée de $(a + b)^2$ ?",
        "a": "$$(a + b)^2 = a^2 + 2ab + b^2$$\n*(Ne jamais oublier le double produit $2ab$ !)*"
      },
      {
        "q": "Quelle est la formule développée de $(a - b)(a + b)$ ?",
        "a": "$$(a - b)(a + b) = a^2 - b^2$$"
      },
      {
        "q": "Comment factorise-t-on $9x^2 - 16$ ?",
        "a": "$$(3x - 4)(3x + 4) \\quad (\\text{car } (3x)^2 - 4^2)$$"
      },
      {
        "q": "Que signifie « développer une expression » ?",
        "a": "C'est transformer un produit en une somme algébrique (« perdre les parenthèses »)."
      },
      {
        "q": "Que donne le développement de $(x - 5)^2$ ?",
        "a": "$$x^2 - 10x + 25$$"
      }
    ]
  },
  "N3": {
    "title": "N3 : Puissances et Notation scientifique",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Connaître les règles opératoires sur les puissances entières relatives d'un nombre.",
      "Maîtriser les puissances de 10, l'écriture décimale et le calcul fractionnaire associé.",
      "Écrire un nombre en notation scientifique normalisée $a \\times 10^n$ avec $1 \\le |a| < 10$.",
      "Connaître les préfixes métriques (nano à téra) et déterminer des ordres de grandeur."
    ],
    "keyPoints": [
      {
        "title": "1. Règles opératoires sur les puissances d'un nombre relatif",
        "content": "Pour tous nombres relatifs non nuls $a, b$ et entiers $n, m$ :\n• $a^n \\times a^m = a^{n+m}$\n• $\\frac{a^n}{a^m} = a^{n-m}$\n• $(a^n)^m = a^{n \\times m}$\n• $(a \\times b)^n = a^n \\times b^n$ et $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$\n• Conventions fondamentales : $a^0 = 1$ ($a \\neq 0$) et $a^{-n} = \\frac{1}{a^n}$."
      },
      {
        "title": "2. Puissances de 10 et décalage de virgule",
        "content": "• $10^n = 100\\dots0$ ($n$ zéros) | $10^{-n} = 0,00\\dots01$ ($n$ zéros au total).\n• $10^m \\times 10^n = 10^{m+n}$ et $\\frac{10^m}{10^n} = 10^{m-n}$.\n• Multiplier par $10^n$ décale la virgule de $n$ rangs vers la droite.\n• Multiplier par $10^{-n}$ décale la virgule de $n$ rangs vers la gauche."
      },
      {
        "title": "3. Notation scientifique",
        "content": "Tout nombre positif non nul s'écrit de façon unique sous la forme :\n$$a \\times 10^n \\quad \\text{avec } 1 \\le a < 10 \\text{ et } n \\in \\mathbb{Z}$$\n*Exemples* :\n• $543\\,000 = 5,43 \\times 10^5$\n• $0,000\\,72 = 7,2 \\times 10^{-4}$"
      },
      {
        "title": "4. Préfixes métriques et grandeurs scientifiques",
        "content": "• Téra (T) = $10^{12}$ | Giga (G) = $10^9$ | Méga (M) = $10^6$ | Kilo (k) = $10^3$\n• milli (m) = $10^{-3}$ | micro ($\\mu$) = $10^{-6}$ | nano (n) = $10^{-9}$"
      }
    ],
    "methods": [
      {
        "title": "Méthode officielle Brevet : Calcul de fraction avec puissances de 10",
        "example": "Calculer $C = \\frac{4 \\times 10^{-2} \\times 9 \\times 10^6}{6 \\times 10^3}$ et donner l'écriture scientifique.",
        "steps": [
          "**Étape 1 (Séparation)** : On sépare les coefficients numériques et les puissances de 10 :\n$C = \\frac{4 \\times 9}{6} \\times \\frac{10^{-2} \\times 10^6}{10^3}$.",
          "**Étape 2 (Partie numérique)** : $\\frac{36}{6} = 6$.",
          "**Étape 3 (Puissances de 10)** : $10^{-2+6-3} = 10^1$.",
          "**Étape 4 (Résultat scientifique)** : $C = 6 \\times 10^1 = 60$."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention aux parenthèses : $(-3)^2 = +9$, mais $-3^2 = -9$ !",
      "⚠️ $12 \\times 10^4$ n'est PAS en notation scientifique car $12 \\ge 10$ : il faut écrire $1,2 \\times 10^5$.",
      "⚠️ $a^n + a^m$ ne peut PAS se simplifier en additionnant les exposants : $2^3 + 2^2 = 8 + 4 = 12 \\neq 2^5 = 32$ !"
    ],
    "flashcards": [
      {
        "q": "Que vaut $a^n \\times a^m$ ?",
        "a": "$$a^n \\times a^m = a^{n + m}$$\n*(On additionne les exposants lors d'une multiplication de même base)*."
      },
      {
        "q": "Que vaut $a^{-n}$ pour $a \\neq 0$ ?",
        "a": "$$a^{-n} = \\frac{1}{a^n}$$\n*(C'est l'inverse de $a^n$)*."
      },
      {
        "q": "Quelle est la condition sur $a$ pour l'écriture scientifique $a \\times 10^n$ ?",
        "a": "$$1 \\leqslant |a| < 10$$\n*(Un seul chiffre non nul avant la virgule)*."
      },
      {
        "q": "Simplifier $\\frac{10^7}{10^{-3}}$.",
        "a": "$$10^{7 - (-3)} = 10^{7 + 3} = 10^{10}$$"
      },
      {
        "q": "Combien vaut $4^{-1}$ sous forme décimale ?",
        "a": "$\\frac{1}{4} = 0,25$."
      }
    ]
  },
  "N4": {
    "title": "N4 : Résolution d'équations et inéquations",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Résoudre une équation linéaire du premier degré $ax + b = cx + d$.",
      "Énoncer et appliquer le théorème de l'équation produit-nul $(ax + b)(cx + d) = 0$.",
      "Résoudre les équations du type $x^2 = a$ selon le signe de $a$.",
      "Résoudre des inéquations du premier degré en gérant le changement de sens lors de la division par un nombre négatif.",
      "Mettre un problème en équation et conclure."
    ],
    "keyPoints": [
      {
        "title": "1. Résolution d'équation du 1er degré : ax + b = cx + d",
        "content": "• On regroupe les termes en $x$ d'un côté (en changeant de signe le terme déplacé) et les nombres de l'autre côté :\n$$ax - cx = d - b \\implies (a - c)x = d - b$$\n• On isole $x$ en divisant par le coefficient devant $x$ : $x = \\frac{d - b}{a - c}$.\n• On vérifie toujours sa solution en la réinjectant dans l'équation d'origine."
      },
      {
        "title": "2. Théorème de l'équation produit-nul",
        "content": "**Propriété d'or du cours** : « Si un produit de facteurs est nul, alors l'un au moins de ses facteurs est nul » :\n$$(ax + b)(cx + d) = 0 \\iff ax + b = 0 \\quad \\text{ou} \\quad cx + d = 0$$\nL'équation admet alors au maximum deux solutions distinctes : $x = -\\frac{b}{a}$ ou $x = -\\frac{d}{c}$."
      },
      {
        "title": "3. Équations du type $x^2 = a$",
        "content": "Selon le signe du nombre réel $a$ :\n• **Si $a > 0$** : l'équation admet **DEUX solutions** : $x = \\sqrt{a}$ ou $x = -\\sqrt{a}$.\n• **Si $a = 0$** : l'équation admet **UNE unique solution** : $x = 0$.\n• **Si $a < 0$** : l'équation n'admet **AUCUNE solution réelle** (car un carré est toujours positif ou nul)."
      },
      {
        "title": "4. Inéquations et changement de sens",
        "content": "On résout une inéquation comme une équation, avec **une règle capitale** :\nQuand on multiplie ou divise les deux membres par un **nombre strictement négatif**, on doit **CHANGER LE SENS de l'inégalité** :\n$$-3x \\le 12 \\iff x \\ge \\frac{12}{-3} \\iff x \\ge -4$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une équation produit-nul rédigée",
        "example": "Résoudre $(2x - 5)(3x + 12) = 0$.",
        "steps": [
          "**Étape 1 (Énoncé de la propriété)** : Si un produit de facteurs est nul, alors au moins l'un des facteurs est nul.",
          "**Étape 2 (Séparation)** : $2x - 5 = 0$ ou $3x + 12 = 0$.",
          "**Étape 3 (Résolution)** :\n• $2x = 5 \\implies x = \\frac{5}{2} = 2,5$.\n• $3x = -12 \\implies x = \\frac{-12}{3} = -4$.",
          "**Étape 4 (Conclusion)** : Les solutions de l'équation sont $-4$ et $2,5$ (noté $S = \\{-4 ; 2,5\\}$)."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour $x^2 = 25$, oublier la solution négative : les solutions sont $5$ ET $-5$ !",
      "⚠️ Diviser par $x$ pour « simplifier » une équation comme $x(2x-3) = 0$ : cela élimine illégalement la solution $x = 0$ !",
      "⚠️ Oublier d'inverser le sens de l'inégalité dans une inéquation lorsqu'on divise par un nombre négatif."
    ],
    "flashcards": [
      {
        "q": "Quelle est la propriété de l'équation produit-nul ?",
        "a": "Un produit de facteurs est nul si et seulement si **au moins l'un de ses facteurs est nul** :\n$$A \\times B = 0 \\iff A = 0 \\text{ ou } B = 0$$"
      },
      {
        "q": "Quelles sont les solutions de l'équation $x^2 = 49$ ?",
        "a": "Deux solutions : **$7$** et **$-7$** (car $7^2 = 49$ et $(-7)^2 = 49$)."
      },
      {
        "q": "Combien de solutions admet l'équation $x^2 = -9$ ?",
        "a": "**Aucune solution réelle**, car le carré d'un nombre réel est toujours positif ou nul."
      },
      {
        "q": "Que devient l'inégalité $-2x < 6$ quand on isole $x$ ?",
        "a": "$$x > -3$$\n*(On change le sens $<$ en $>$ car on divise par le nombre négatif $-2$)*."
      },
      {
        "q": "Quelles sont les solutions de $(x - 3)(2x + 8) = 0$ ?",
        "a": "$x = 3$ ou $x = -4$."
      }
    ]
  },
  "N5": {
    "title": "N5 : Arithmétique et Nombres premiers",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Utiliser les critères de divisibilité par 2, 3, 5, 9, 10.",
      "Définir un nombre premier et réciter la liste des premiers inférieurs à 30.",
      "Décomposer un entier naturel en produit de facteurs premiers.",
      "Rendre une fraction irréductible par décomposition ou division par le PGCD.",
      "Résoudre des problèmes concrets de partage (friandises, engrenages) avec PGCD et PPCM."
    ],
    "keyPoints": [
      {
        "title": "1. Multiples, diviseurs et critères de divisibilité",
        "content": "• Un entier $a$ est divisible par $b$ s'il existe un entier $c$ tel que $a = b \\times c$ (le reste de la division euclidienne est 0).\n• **Critères de divisibilité** :\n  - par 2 : chiffre des unités pair (0, 2, 4, 6, 8)\n  - par 3 : la **somme des chiffres** est un multiple de 3\n  - par 5 : chiffre des unités 0 ou 5\n  - par 9 : la **somme des chiffres** est un multiple de 9\n  - par 10 : chiffre des unités 0."
      },
      {
        "title": "2. Nombres premiers",
        "content": "Un nombre entier naturel est **premier** s'il possède **exactement deux diviseurs distincts : 1 et lui-même**.\n• **0 et 1 ne sont PAS des nombres premiers** (1 n'a qu'un seul diviseur, lui-même).\n• **2 est le seul nombre premier pair**.\n• **La liste des nombres premiers $< 30$** : $$2, 3, 5, 7, 11, 13, 17, 19, 23, 29$$"
      },
      {
        "title": "3. Décomposition en produit de facteurs premiers",
        "content": "Tout entier $\\ge 2$ se décompose de façon unique en un produit de facteurs premiers.\n*Méthode par divisions successives* :\n$$84 \\div 2 = 42 \\quad 42 \\div 2 = 21 \\quad 21 \\div 3 = 7 \\quad 7 \\div 7 = 1$$\nDonc : $$84 = 2^2 \\times 3 \\times 7$$\n$$147 = 3 \\times 7^2$$"
      },
      {
        "title": "4. PGCD, PPCM et fractions irréductibles",
        "content": "• **PGCD** (Plus Grand Diviseur Commun) : produit des facteurs premiers communs affectés du plus petit exposant. Pour 84 et 147 : $3^1 \\times 7^1 = 21$.\n• **Fractions irréductibles** : $\\frac{84}{147} = \\frac{21 \\times 4}{21 \\times 7} = \\frac{4}{7}$.\n• **Problème type** : Répartir 84 sucettes et 147 bonbons dans un maximum de sachets identiques $\\implies \\text{PGCD}(84, 147) = 21$ sachets de 4 sucettes et 7 bonbons !"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Rendre une fraction irréductible par décomposition en facteurs premiers",
        "example": "Rendre la fraction 252 / 360 irréductible.",
        "steps": [
          "**Étape 1 (Décomposer 252)** : $252 = 2^2 \\times 3^2 \\times 7$.",
          "**Étape 2 (Décomposer 360)** : $360 = 2^3 \\times 3^2 \\times 5$.",
          "**Étape 3 (Barrer les facteurs communs)** :\n$$\\frac{252}{360} = \\frac{2^2 \\times 3^2 \\times 7}{2^3 \\times 3^2 \\times 5} = \\frac{7}{2 \\times 5} = \\frac{7}{10}$$.",
          "**Conclusion** : $\\frac{7}{10}$ est irréductible car 7 et 10 sont premiers entre eux."
        ]
      }
    ],
    "traps": [
      "⚠️ $1$ n'est PAS un nombre premier (il n'admet qu'un seul diviseur, 1).",
      "⚠️ Pour le critère par 3 et 9, ne pas regarder le dernier chiffre mais faire la SOMME de tous les chiffres !",
      "⚠️ Ne pas s'arrêter dans la décomposition tant que tous les facteurs ne sont pas des nombres premiers (ex: $24 = 4 \\times 6$ n'est pas terminé car 4 et 6 ne sont pas premiers : $24 = 2^3 \\times 3$)."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce qu'un nombre premier ?",
        "a": "Un nombre entier naturel qui possède **exactement deux diviseurs distincts** : 1 et lui-même."
      },
      {
        "q": "Pourquoi 1 n'est-il pas un nombre premier ?",
        "a": "Parce qu'il n'admet qu'**un seul diviseur** (lui-même), or la définition en exige exactement deux."
      },
      {
        "q": "Quel est le seul nombre premier pair ?",
        "a": "**2** (tous les autres nombres pairs sont divisibles par 2 donc ont au moins trois diviseurs)."
      },
      {
        "q": "Quelle est la décomposition en facteurs premiers de 60 ?",
        "a": "$$60 = 2^2 \\times 3 \\times 5$$"
      },
      {
        "q": "Comment sait-on qu'une fraction est irréductible ?",
        "a": "Lorsque son numérateur et son dénominateur sont **premiers entre eux** (aucun diviseur commun autre que 1)."
      }
    ]
  },
  "G0": {
    "title": "G0 : Rappels Théorème de Pythagore et Propriétés",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Utiliser le théorème de Pythagore direct pour calculer la longueur de l'hypoténuse ou d'un côté de l'angle droit.",
      "Rédiger la réciproque du théorème de Pythagore pour démontrer qu'un triangle est rectangle.",
      "Rédiger la contraposée pour démontrer qu'un triangle n'est pas rectangle.",
      "Distinguer rigoureusement valeur exacte avec racine carrée et valeur arrondie."
    ],
    "keyPoints": [
      {
        "title": "1. Le Théorème direct (Calcul de longueur)",
        "content": "Dans un triangle $ABC$ rectangle en $A$, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés :\n$$BC^2 = AB^2 + AC^2$$\n• **Calcul de l'hypoténuse** : $BC = \\sqrt{AB^2 + AC^2}$.\n• **Calcul d'un côté de l'angle droit** : $AB^2 = BC^2 - AC^2 \\implies AB = \\sqrt{BC^2 - AC^2}$."
      },
      {
        "title": "2. Réciproque et Contraposée (Démontrer l'orthogonalité)",
        "content": "Soit $[BC]$ le plus grand côté d'un triangle $ABC$ :\n• Si $BC^2 = AB^2 + AC^2$, alors le triangle $ABC$ est rectangle en $A$ (d'après la **réciproque du théorème de Pythagore**).\n• Si $BC^2 \\neq AB^2 + AC^2$, alors le triangle n'est pas rectangle (d'après la **contraposée**)."
      },
      {
        "title": "3. Modèle de rédaction officiel Brevet",
        "content": "Pour tester si un triangle est rectangle :\n1. Citer le plus grand côté : « Dans le triangle $ABC$, le plus grand côté est $[BC]$. »\n2. Calculer séparément $BC^2 = \\dots$ et $AB^2 + AC^2 = \\dots$.\n3. Comparer et conclure par la réciproque ou la contraposée."
      },
      {
        "title": "4. Valeur exacte vs Valeur arrondie",
        "content": "• **Valeur exacte** : $BC = \\sqrt{65}$ cm.\n• **Valeur arrondie** : $BC \\approx 8,1$ cm (au dixième près)."
      }
    ],
    "methods": [
      {
        "title": "Méthode officielle Brevet : Démontrer qu'un triangle est rectangle",
        "example": "Soit un triangle MNP tel que MN = 6 cm, NP = 8 cm, MP = 10 cm. Est-il rectangle ?",
        "steps": [
          "**1. Identifier le plus long côté** : Dans le triangle $MNP$, le plus grand côté est $[MP]$.",
          "**2. Calculer séparément** :\n• D'une part : $MP^2 = 10^2 = 100$.\n• D'autre part : $MN^2 + NP^2 = 6^2 + 8^2 = 36 + 64 = 100$.",
          "**3. Conclure rigoureusement** : On constate que $MP^2 = MN^2 + NP^2$. D'après la **réciproque du théorème de Pythagore**, le triangle $MNP$ est rectangle en $N$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne JAMAIS écrire $MP^2 = MN^2 + NP^2$ au début de la démonstration : on calcule les deux membres séparément !",
      "⚠️ Pour un côté de l'angle droit, soustraire les carrés : $AB^2 = BC^2 - AC^2$. Ne pas additionner !"
    ],
    "flashcards": [
      {
        "q": "Quel est l'énoncé du théorème de Pythagore ?",
        "a": "Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés :\n$$BC^2 = AB^2 + AC^2$$"
      },
      {
        "q": "À quoi sert la réciproque du théorème de Pythagore ?",
        "a": "Elle permet de **démontrer qu'un triangle est rectangle** en comparant le carré du plus grand côté à la somme des carrés des deux autres."
      },
      {
        "q": "Que conclut-on si $BC^2 \\neq AB^2 + AC^2$ ?",
        "a": "D'après la **contraposée du théorème de Pythagore**, le triangle $ABC$ **n'est pas rectangle**."
      },
      {
        "q": "Comment calcule-t-on la longueur d'un côté de l'angle droit ?",
        "a": "$$AB = \\sqrt{BC^2 - AC^2}$$\n*(On soustrait le carré du côté connu au carré de l'hypoténuse)*."
      },
      {
        "q": "Quelle est l'hypoténuse d'un triangle rectangle en F ?",
        "a": "Le côté opposé au sommet F, c'est-à-dire le segment $[DE]$ si le triangle s'appelle DEF."
      }
    ]
  },
  "G1": {
    "title": "G1 : Théorème de Thalès et Réciproque",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Identifier les configurations de Thalès : triangles emboîtés et papillon.",
      "Écrire l'égalité des trois rapports de proportionnalité de Thalès.",
      "Calculer une longueur inconnue à l'aide d'un produit en croix.",
      "Démontrer que deux droites sont parallèles à l'aide de la réciproque de Thalès.",
      "Démontrer que deux droites ne sont pas parallèles à l'aide de la contraposée."
    ],
    "keyPoints": [
      {
        "title": "1. Les deux configurations de Thalès",
        "content": "Deux droites $(d_1)$ et $(d_2)$ sont sécantes en $A$. Les points $A, M, B$ sont sur $(d_1)$ et les points $A, N, C$ sont sur $(d_2)$ :\n• **Configuration emboîtée** : $M \\in [AB]$ et $N \\in [AC]$ (un petit triangle dans un grand).\n• **Configuration papillon (sablier)** : $A$ est entre $M$ et $B$, et entre $N$ et $C$."
      },
      {
        "title": "2. Théorème direct de Thalès (Calcul de longueurs)",
        "content": "**Conditions obligatoires** :\n1. Les droites $(MB)$ et $(NC)$ sont sécantes en $A$.\n2. Les droites $(MN)$ et $(BC)$ sont **parallèles** : $(MN) // (BC)$.\n**Égalité des trois rapports** :\n$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC} = k \\quad (\\text{rapport de proportionnalité})$$"
      },
      {
        "title": "3. Réciproque du théorème de Thalès (Prouver le parallélisme)",
        "content": "Si les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont **alignés dans le même ordre**, et si :\n$$\\frac{AM}{AB} = \\frac{AN}{AC}$$\nAlors les droites $(MN)$ et $(BC)$ sont **parallèles** (d'après la réciproque du théorème de Thalès)."
      },
      {
        "title": "4. Contraposée de Thalès (Prouver que les droites ne sont pas parallèles)",
        "content": "Si les points sont alignés dans le même ordre mais que :\n$$\\frac{AM}{AB} \\neq \\frac{AN}{AC}$$\nAlors les droites $(MN)$ et $(BC)$ **ne sont pas parallèles**."
      }
    ],
    "methods": [
      {
        "title": "Modèle de rédaction Brevet : Réciproque de Thalès",
        "example": "Soit les points A, M, B et A, N, C alignés dans cet ordre. AM = 3 cm, AB = 5 cm, AN = 4,5 cm, AC = 7,5 cm. Les droites (MN) et (BC) sont-elles parallèles ?",
        "steps": [
          "**Étape 1 (Alignement dans le même ordre)** : Les points $A, M, B$ et $A, N, C$ sont alignés dans le même ordre.",
          "**Étape 2 (Calcul séparé des rapports)** :\n• $\\frac{AM}{AB} = \\frac{3}{5} = 0,6$.\n• $\\frac{AN}{AC} = \\frac{4,5}{7,5} = \\frac{45}{75} = \\frac{3}{5} = 0,6$.",
          "**Étape 3 (Conclusion)** : On constate que $\\frac{AM}{AB} = \\frac{AN}{AC}$. D'après la **réciproque du théorème de Thalès**, les droites $(MN)$ et $(BC)$ sont parallèles."
        ]
      }
    ],
    "traps": [
      "⚠️ Oublier la mention obligatoire « les points sont alignés dans le même ordre » lors de la réciproque !",
      "⚠️ Mélanger grand côté et petit côté dans les rapports : toujours faire $\\frac{\\text{petit}}{\\text{grand}}$ partout ou $\\frac{\\text{grand}}{\\text{petit}}$ partout.",
      "⚠️ Ne pas utiliser les valeurs exactes fractionnaires pour comparer deux rapports si la division ne tombe pas juste."
    ],
    "flashcards": [
      {
        "q": "Quelles sont les deux conditions indispensables pour appliquer le théorème de Thalès direct ?",
        "a": "Deux droites sécantes et deux droites **parallèles**."
      },
      {
        "q": "Quels sont les rapports de Thalès si $(MN) // (BC)$ avec sécantes en $A$ ?",
        "a": "$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$"
      },
      {
        "q": "À quoi sert la réciproque du théorème de Thalès ?",
        "a": "Elle sert à **démontrer que deux droites sont parallèles**."
      },
      {
        "q": "Quelle phrase clé est indispensable dans la rédaction de la réciproque de Thalès ?",
        "a": "« Les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont **alignés dans le même ordre** »."
      },
      {
        "q": "Que conclut-on si $\\frac{AM}{AB} \\neq \\frac{AN}{AC}$ ?",
        "a": "D'après la **contraposée de Thalès**, les droites ne sont pas parallèles."
      }
    ]
  },
  "G2": {
    "title": "G2 : Trigonométrie dans le triangle rectangle",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Repérer l'hypoténuse, le côté adjacent et le côté opposé à un angle aigu dans un triangle rectangle.",
      "Mémoriser par cœur le moyen mnémotechnique SOH-CAH-TOA.",
      "Savoir que les formules de trigonométrie ne s'appliquent JAMAIS sur l'angle droit.",
      "Savoir que le cosinus et le sinus d'un angle aigu sont STRICTEMENT compris entre 0 et 1.",
      "Calculer une longueur inconnue et déterminer un angle au degré près à l'aide de la calculatrice (Arccos, Arcsin, Arctan)."
    ],
    "keyPoints": [
      {
        "title": "1. Définition des trois rapports trigonométriques : SOH-CAH-TOA",
        "content": "Dans un **triangle rectangle**, pour tout angle aigu $\\widehat{A}$ :\n• **Sinus** : $\\sin(\\widehat{A}) = \\frac{\\text{Côté Opposé}}{\\text{Hypoténuse}}$ (S-O-H)\n• **Cosinus** : $\\cos(\\widehat{A}) = \\frac{\\text{Côté Adjacent}}{\\text{Hypoténuse}}$ (C-A-H)\n• **Tangente** : $\\tan(\\widehat{A}) = \\frac{\\text{Côté Opposé}}{\\text{Côté Adjacent}}$ (T-O-A)\n*Règle d'or du cours* : Ces formules ne s'appliquent **JAMAIS sur l'angle droit** !"
      },
      {
        "title": "2. Propriétés fondamentales à retenir",
        "content": "Pour tout angle aigu $\\alpha$ d'un triangle rectangle :\n• Le cosinus et le sinus sont **toujours strictement compris entre 0 et 1** :\n$$0 < \\cos(\\alpha) < 1 \\quad \\text{et} \\quad 0 < \\sin(\\alpha) < 1$$\n• Relations remarquables : $$\\tan(\\alpha) = \\frac{\\sin(\\alpha)}{\\cos(\\alpha)} \\quad \\text{et} \\quad \\cos^2(\\alpha) + \\sin^2(\\alpha) = 1$$"
      },
      {
        "title": "3. Calculer une longueur avec cos, sin ou tan",
        "content": "1. Écrire la formule trigonométrique correspondant aux données (côté connu et côté cherché).\n2. Remplacer par les valeurs numériques.\n3. Écrire le rapport sous forme de produit en croix pour isoler la longueur cherchée."
      },
      {
        "title": "4. Calculer un angle avec Arccos, Arcsin ou Arctan",
        "content": "1. Calculer le quotient $\\cos(\\widehat{A})$, $\\sin(\\widehat{A})$ ou $\\tan(\\widehat{A})$.\n2. Utiliser la touche inverse de la calculatrice : `arccos`, `arcsin` ou `arctan` (ou `cos⁻¹`, `sin⁻¹`, `tan⁻¹`).\n3. Vérifier que la calculatrice est impérativement en **mode DEG (Degrés)** !"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un angle au degré près",
        "example": "Soit un triangle ABC rectangle en B tel que AB = 4 cm et AC = 7 cm. Calculer la mesure de l'angle BAC au degré près.",
        "steps": [
          "**Étape 1 (Repérage)** : $[AC]$ est l'hypoténuse (en face de l'angle droit $B$) et $[AB]$ est le côté adjacent à l'angle $\\widehat{BAC}$.",
          "**Étape 2 (Choix de formule)** : On utilise le cosinus : $\\cos(\\widehat{BAC}) = \\frac{AB}{AC}$.",
          "**Étape 3 (Calcul du rapport)** : $\\cos(\\widehat{BAC}) = \\frac{4}{7}$.",
          "**Étape 4 (Calculatrice)** : $\\widehat{BAC} = \\arccos(4/7) \\approx 55,15^\\circ \\implies 55^\\circ$ au degré près."
        ]
      }
    ],
    "traps": [
      "⚠️ Avoir sa calculatrice configurée en Radian (RAD) ou Grade (GRA) au lieu de Degré (DEG) !",
      "⚠️ Trouver un cosinus ou un sinus supérieur à 1 : c'est mathématiquement impossible car l'hypoténuse est le plus grand côté !",
      "⚠️ Appliquer une formule de trigonométrie sur l'angle droit de 90°."
    ],
    "flashcards": [
      {
        "q": "Quel moyen mnémotechnique permet de mémoriser les formules trigonométriques ?",
        "a": "**SOH - CAH - TOA**\n(Sin = Opp/Hyp ; Cos = Adj/Hyp ; Tan = Opp/Adj)."
      },
      {
        "q": "Entre quelles valeurs le cosinus et le sinus d'un angle aigu sont-ils toujours compris ?",
        "a": "Strictement **entre 0 et 1** ($0 < \\cos < 1$ et $0 < \\sin < 1$)."
      },
      {
        "q": "Quelle touche de la calculatrice permet de trouver un angle connaissant son sinus ?",
        "a": "La touche **Arcsin** (ou **$\\\\sin^{-1}$**)."
      },
      {
        "q": "Quelle est la formule liant tangente, sinus et cosinus ?",
        "a": "$$\\tan(\\alpha) = \\frac{\\sin(\\alpha)}{\\cos(\\alpha)}$$"
      },
      {
        "q": "Peut-on appliquer les formules de trigonométrie dans un triangle qui n'est pas rectangle ?",
        "a": "**Non**, elles ne sont valables que dans un triangle rectangle."
      }
    ]
  },
  "G3": {
    "title": "G3 : Homothéties et Effets d'échelle",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Définir une homothétie par son centre $O$ et son rapport $k$ ($k \\neq 0$).",
      "Distinguer homothétie de rapport positif ($k > 0$, même côté) et de rapport négatif ($k < 0$, côtés opposés).",
      "Reconnaître qu'une homothétie de rapport $-1$ est une symétrie centrale.",
      "Maîtriser les effets d'échelle : longueurs multipliées par $|k|$, aires par $k^2$, volumes par $|k|^3$."
    ],
    "keyPoints": [
      {
        "title": "1. Définition d'une homothétie",
        "content": "Une homothétie de centre $O$ et de rapport $k$ ($k \\neq 0$) associe à tout point $M$ un point $M'$ tel que :\n• Les points $O, M, M'$ sont **alignés**.\n• $OM' = |k| \\times OM$.\n• **Si $k > 0$** : $M$ et $M'$ sont du **même côté** par rapport à $O$.\n• **Si $k < 0$** : $M$ et $M'$ sont de **côtés opposés** par rapport à $O$ (effet demi-tour)."
      },
      {
        "title": "2. Cas particuliers remarquables",
        "content": "• **Si $k = 1$** : la figure ne change pas (transformation identité).\n• **Si $k = -1$** : c'est exactement une **symétrie centrale** de centre $O$ !\n• **Si $|k| > 1$** : c'est un **agrandissement**.\n• **Si $|k| < 1$** : c'est une **réduction**."
      },
      {
        "title": "3. Effets d'échelle sur les grandeurs",
        "content": "Dans une homothétie de rapport $k$ (ou agrandissement/réduction de coefficient $k$) :\n• Les **longueurs** sont multipliées par $|k|$.\n• Les **aires** sont multipliées par $k^2$.\n• Les **volumes** sont multipliés par $|k|^3$."
      },
      {
        "title": "4. Conservations géométriques",
        "content": "L'homothétie conserve :\n• La **mesure des angles** (les figures sont semblables, de même forme).\n• Le **parallélisme** et l'**alignement** des points."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer l'impact d'une homothétie sur une aire et un volume",
        "example": "Une maquette de bateau est réalisée à l'échelle 1/50 (homothétie de rapport k = 0,02). L'aire des voiles sur la maquette est 0,08 m² et le volume de la coque est 0,016 m³. Calculer l'aire et le volume réels.",
        "steps": [
          "**Étape 1 (Rapport inverse)** : Pour passer de la maquette au réel, le coefficient d'agrandissement est $K = 50$.",
          "**Étape 2 (Aire réelle)** : $\\text{Aire} = 0,08 \\times 50^2 = 0,08 \\times 2\\,500 = 200 \\text{ m}^2$.",
          "**Étape 3 (Volume réel)** : $\\text{Volume} = 0,016 \\times 50^3 = 0,016 \\times 125\\,000 = 2\\,000 \\text{ m}^3$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un rapport négatif, oublier d'inverser le côté par rapport au centre $O$ : pour $k = -2$, $M'$ est de l'autre côté de $O$ !",
      "⚠️ Multiplier une aire par $k$ au lieu de $k^2$, ou un volume par $k$ au lieu de $k^3$."
    ],
    "flashcards": [
      {
        "q": "Par combien est multipliée l'aire d'une figure agrandie avec un rapport $k = 4$ ?",
        "a": "Par $k^2 = 4^2 = 16$ !"
      },
      {
        "q": "Par combien est multiplié le volume d'un solide réduit d'un facteur 1/2 ?",
        "a": "Par $(1/2)^3 = \\frac{1}{8}$ (il devient 8 fois plus petit)."
      },
      {
        "q": "À quelle transformation géométrique équivaut une homothétie de rapport $k = -1$ ?",
        "a": "À une **symétrie centrale** de centre $O$."
      },
      {
        "q": "Où se situe l'image $M'$ si le rapport d'homothétie est strictement négatif ($k < 0$) ?",
        "a": "De l'**autre côté du centre $O$** par rapport à $M$ ($O$ est entre $M$ et $M'$)."
      },
      {
        "q": "Une homothétie modifie-t-elle la mesure des angles d'un polygone ?",
        "a": "**Non**, l'homothétie conserve scrupuleusement la mesure des angles (les figures ont exactement la même forme)."
      }
    ]
  },
  "G4": {
    "title": "G4 : Sphère, Boule et Repérage terrestre",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Distinguer rigoureusement la sphère (surface creuse) de la boule (solide plein).",
      "Calculer l'aire d'une sphère de rayon $R$ : $\\mathcal{A} = 4\\pi R^2$.",
      "Calculer le volume d'une boule de rayon $R$ : $\\mathcal{V} = \\frac{4}{3}\\pi R^3$.",
      "Identifier la section plane d'une sphère par un plan comme étant un cercle.",
      "Se repérer sur la sphère terrestre par latitude (Nord/Sud par rapport à l'équateur) et longitude (Est/Ouest par rapport à Greenwich)."
    ],
    "keyPoints": [
      {
        "title": "1. Sphère vs Boule : Creux vs Plein",
        "content": "• **Sphère de centre $O$ et rayon $R$** : ensemble des points de l'espace situés à une distance exactement égale à $R$ du centre $O$ ($OM = R$). Elle est **vide à l'intérieur** (comme une balle de ping-pong ou un ballon de foire).\n• **Boule de centre $O$ et rayon $R$** : ensemble des points de l'espace dont la distance à $O$ est inférieure ou égale à $R$ ($OM \\le R$). Elle est **pleine à l'intérieur** (comme une boule de pétanque ou la boule géante d'Indiana Jones) !"
      },
      {
        "title": "2. Formules d'aire et de volume à connaître par cœur",
        "content": "• **Aire d'une sphère de rayon $R$** : $$\\mathcal{A} = 4\\pi R^2$$\n• **Volume d'une boule de rayon $R$** : $$\\mathcal{V} = \\frac{4}{3}\\pi R^3$$"
      },
      {
        "title": "3. Section plane d'une sphère par un plan",
        "content": "La section d'une sphère par un plan est **toujours un cercle** (ou réduite à un point si le plan est tangent) :\n• Si la distance du plan au centre est $d < R$, le rayon $r$ du cercle de section vérifie, d'après Pythagore : $$r = \\sqrt{R^2 - d^2}$$\n• Si le plan passe par le centre $O$ ($d = 0$), la section est un **grand cercle** de rayon $R$."
      },
      {
        "title": "4. Repérage sur la sphère terrestre",
        "content": "• **L'Équateur** : grand cercle de référence séparant l'hémisphère Nord et l'hémisphère Sud.\n• **Latitude** : angle mesuré depuis l'équateur vers le Nord ($0^\\circ$ à $90^\\circ$ N) ou vers le Sud ($0^\\circ$ à $90^\\circ$ S).\n• **Le méridien de Greenwich** : demi-cercle origine joignant les pôles.\n• **Longitude** : angle mesuré depuis Greenwich vers l'Est ($0^\\circ$ à $180^\\circ$ E) ou vers l'Ouest ($0^\\circ$ à $180^\\circ$ O)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer le volume d'une boule et l'aire d'une sphère",
        "example": "Calculer l'aire et le volume d'une boule de rayon R = 6 cm.",
        "steps": [
          "**Étape 1 (Aire)** : $\\mathcal{A} = 4\\pi R^2 = 4 \\times \\pi \\times 6^2 = 144\\pi \\approx 452,4 \\text{ cm}^2$.",
          "**Étape 2 (Volume)** : $\\mathcal{V} = \\frac{4}{3}\\pi R^3 = \\frac{4}{3} \\times \\pi \\times 6^3 = \\frac{4}{3} \\times 216\\pi = 288\\pi \\approx 904,8 \\text{ cm}^3$."
        ]
      }
    ],
    "traps": [
      "⚠️ Confondre rayon et diamètre : si l'énoncé donne un diamètre de 10 cm, le rayon vaut **$R = 5$ cm** !",
      "⚠️ Dans le volume de la boule, oublier la puissance 3 sur le rayon : c'est $R^3$ ($R \\times R \\times R$) et non $R^2$ !",
      "⚠️ Confondre latitude (Nord/Sud) et longitude (Est/Ouest)."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule de l'aire d'une sphère de rayon R ?",
        "a": "$$\\mathcal{A} = 4\\pi R^2$$"
      },
      {
        "q": "Quelle est la formule du volume d'une boule de rayon R ?",
        "a": "$$\\mathcal{V} = \\frac{4}{3}\\pi R^3$$"
      },
      {
        "q": "Quelle est la section d'une sphère par un plan ?",
        "a": "C'est **toujours un cercle** (ou un point si le plan est tangent)."
      },
      {
        "q": "Quel est le parallèle d'origine pour la mesure des latitudes ?",
        "a": "L'**Équateur** (latitude $0^\\circ$)."
      },
      {
        "q": "Quel est le méridien d'origine pour la mesure des longitudes ?",
        "a": "Le **Méridien de Greenwich** (longitude $0^\\circ$)."
      }
    ]
  },
  "G5": {
    "title": "G5 : Géométrie dans l'espace et Sections planes",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Reconnaître et caractériser les solides usuels (pavé droit, prisme, cylindre, pyramide, cône).",
      "Déterminer la nature géométrique de la section plane d'un pavé droit par un plan.",
      "Déterminer la section plane d'un cylindre de révolution par un plan.",
      "Déterminer la section plane d'une pyramide ou d'un cône par un plan parallèle à la base.",
      "Calculer des volumes de solides composés et utiliser les patrons."
    ],
    "keyPoints": [
      {
        "title": "1. Section plane d'un pavé droit (parallélépipède rectangle)",
        "content": "• Par un plan **parallèle à une face** : la section est un **rectangle** de mêmes dimensions que cette face (ou un carré si la face est carrée).\n• Par un plan **parallèle à une arête** : la section est un **rectangle**."
      },
      {
        "title": "2. Section plane d'un cylindre de révolution",
        "content": "• Par un plan **perpendiculaire à l'axe** (parallèle aux bases) : la section est un **cercle** de même rayon que les bases.\n• Par un plan **parallèle à l'axe** : la section est un **rectangle**."
      },
      {
        "title": "3. Section d'une pyramide ou d'un cône parallèle à la base",
        "content": "La section d'une pyramide (ou d'un cône) par un plan parallèle à sa base est une **réduction de la base** :\n• Le rapport de réduction est $k = \\frac{h'}{h} = \\frac{\\text{hauteur du petit solide}}{\\text{hauteur du grand solide}}$.\n• Le petit cône (ou petite pyramide) au sommet est une réduction du solide initial de rapport $k$ :\n  - Rayon de la section : $r' = k \\times r$\n  - Aire de la section : $\\mathcal{A}' = k^2 \\times \\mathcal{A}$\n  - Volume du petit solide : $\\mathcal{V}' = k^3 \\times \\mathcal{V}$."
      },
      {
        "title": "4. Récapitulatif des formules de volumes usuelles",
        "content": "• Cube : $V = c^3$ | Pavé droit : $V = L \\times l \\times h$\n• Prisme et Cylindre : $V = \\mathcal{B} \\times h$ (Cylindre : $\\pi r^2 h$)\n• Pyramide et Cône : $V = \\frac{1}{3} \\times \\mathcal{B} \\times h$ (Cône : $\\frac{1}{3}\\pi r^2 h$)\n• Boule : $V = \\frac{4}{3}\\pi R^3$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer le volume d'un cône tronqué (tronc de cône)",
        "example": "Un cône de hauteur 12 cm et de rayon 4 cm est coupé à mi-hauteur (h' = 6 cm) par un plan parallèle à la base. Calculer le volume du tronc de cône restant.",
        "steps": [
          "**Étape 1 (Rapport de réduction)** : $k = \\frac{h'}{h} = \\frac{6}{12} = 0,5$.",
          "**Étape 2 (Volume du grand cône)** : $V_{\\text{grand}} = \\frac{\\pi \\times 4^2 \\times 12}{3} = 64\\pi \\approx 201,1 \\text{ cm}^3$.",
          "**Étape 3 (Volume du petit cône)** : $V_{\\text{petit}} = k^3 \\times V_{\\text{grand}} = 0,5^3 \\times 64\\pi = \\frac{1}{8} \\times 64\\pi = 8\\pi \\text{ cm}^3$.",
          "**Étape 4 (Soustraction)** : $V_{\\text{tronc}} = 64\\pi - 8\\pi = 56\\pi \\approx 175,9 \\text{ cm}^3$."
        ]
      }
    ],
    "traps": [
      "⚠️ Penser que la section d'un cylindre par un plan parallèle à l'axe est un cercle : c'est un **rectangle** !",
      "⚠️ Dans un tronc de cône, ne pas diviser le volume par 2 sous prétexte que le plan est à mi-hauteur : à mi-hauteur ($k = 0,5$), le petit cône occupe $\\frac{1}{8}$ du volume total !"
    ],
    "flashcards": [
      {
        "q": "Quelle est la section d'un pavé droit par un plan parallèle à une face ?",
        "a": "C'est un **rectangle** de mêmes dimensions que cette face."
      },
      {
        "q": "Quelle est la section d'un cylindre par un plan perpendiculaire à son axe ?",
        "a": "C'est un **cercle** de même rayon que la base."
      },
      {
        "q": "Quelle est la section d'un cylindre par un plan parallèle à son axe ?",
        "a": "C'est un **rectangle**."
      },
      {
        "q": "Quelle est la nature de la section d'un cône par un plan parallèle à sa base ?",
        "a": "C'est un **cercle**, réduction du cercle de base."
      },
      {
        "q": "Si une pyramide est coupée à mi-hauteur par un plan parallèle à sa base, que vaut le volume de la petite pyramide ?",
        "a": "$\\frac{1}{8}$ du volume initial (car $k = 0,5$ et $k^3 = 0,125 = \\frac{1}{8}$)."
      }
    ]
  },
  "G6": {
    "title": "G6 : Rotations et Transformations du plan",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Définir une rotation par son centre $O$, son angle $\\theta$ et son sens de parcours.",
      "Distinguer le sens direct / anti-horaire (sens inverse des aiguilles d'une montre, signe $+$) du sens horaire (signe $-$).",
      "Reconnaître qu'une rotation de $180^\\circ$ est une symétrie centrale.",
      "Construire l'image d'un point et d'une figure par rotation.",
      "Appliquer les propriétés de conservation : longueurs, angles, parallélisme et aires."
    ],
    "keyPoints": [
      {
        "title": "1. Définition géométrique d'une rotation",
        "content": "La rotation de centre $O$ et d'angle $\\alpha$ transforme tout point $M$ distinct de $O$ en un point $M'$ tel que :\n• $OM' = OM$ (les deux points sont à la même distance du centre $O$).\n• $\\widehat{MOM'} = \\alpha$.\n• Le point $M'$ est orienté selon le sens choisi (horaire ou anti-horaire).\n• Le centre $O$ est le seul point fixe : son image est lui-même."
      },
      {
        "title": "2. Conventions d'orientation",
        "content": "• **Sens direct / anti-horaire** : sens inverse des aiguilles d'une montre (convention positive $+$, ex: $+60^\\circ$).\n• **Sens horaire** : sens des aiguilles d'une montre (convention négative $-$, ex: $-60^\\circ$)."
      },
      {
        "title": "3. Lien fondamental avec la symétrie centrale",
        "content": "Une rotation d'angle **$180^\\circ$** est exactement une **symétrie centrale** de centre $O$ :\n$$M, O, M' \\text{ sont alignés et } O \\text{ est le milieu de } [MM']$$"
      },
      {
        "title": "4. Propriétés de conservation",
        "content": "Comme toutes les isométries du plan, la rotation conserve :\n• Les longueurs ($M'N' = MN$)\n• La mesure des angles géométriques\n• Les aires et périmètres (les figures sont superposables)\n• L'alignement et le parallélisme."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Construire l'image d'un point par rotation au compas et rapporteur",
        "example": "Construire M', image de M par la rotation de centre O, d'angle 70° dans le sens anti-horaire.",
        "steps": [
          "**Étape 1 (Demi-droite initiale)** : Tracer le segment $[OM]$.",
          "**Étape 2 (Rapporteur)** : Placer le centre du rapporteur sur $O$, aligner avec $[OM]$ et marquer un angle de $70^\\circ$ dans le sens anti-horaire.",
          "**Étape 3 (Tracé)** : Tracer la demi-droite formant cet angle.",
          "**Étape 4 (Compas)** : Reporter au compas la longueur $OM$ sur la demi-droite pour placer le point $M'$ tel que $OM' = OM$."
        ]
      }
    ],
    "traps": [
      "⚠️ Tourner dans le mauvais sens : toujours vérifier s'il s'agit du sens horaire ou anti-horaire !",
      "⚠️ Oublier de reporter la distance au compas : $OM'$ doit impérativement être égal à $OM$."
    ],
    "flashcards": [
      {
        "q": "Quels sont les trois éléments qui définissent une rotation ?",
        "a": "Un **centre**, un **angle** et un **sens de rotation** (horaire ou anti-horaire)."
      },
      {
        "q": "À quoi correspond une rotation d'angle 180° ?",
        "a": "À une **symétrie centrale**."
      },
      {
        "q": "Quel est le sens conventionnel dit « positif » ou « direct » ?",
        "a": "Le sens **anti-horaire** (sens inverse des aiguilles d'une montre)."
      },
      {
        "q": "Quel est le seul point invariable par une rotation de centre O ?",
        "a": "Le **centre O** lui-même (son image est lui-même)."
      },
      {
        "q": "Une rotation modifie-t-elle l'aire d'une figure ?",
        "a": "**Non**, la rotation conserve rigoureusement les aires et les longueurs (c'est une isométrie)."
      }
    ]
  },
  "G7": {
    "title": "G7 : Triangles semblables",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Définir des triangles semblables comme ayant des angles deux à deux de même mesure.",
      "Connaître la propriété équivalente : longueurs des côtés deux à deux proportionnelles.",
      "Démontrer que deux triangles sont semblables à partir de deux paires d'angles égaux.",
      "Associer sommets homologues et côtés homologues pour écrire les égalités de rapports.",
      "Calculer des longueurs inconnues à l'aide du coefficient d'agrandissement ou de réduction."
    ],
    "keyPoints": [
      {
        "title": "1. Définition des triangles semblables",
        "content": "Deux triangles sont dits **semblables** s'ils ont des **angles deux à deux de même mesure**.\n*Propriété essentielle* : Comme la somme des angles d'un triangle vaut $180^\\circ$, il suffit que deux triangles aient **deux paires d'angles de même mesure** pour qu'ils soient semblables !"
      },
      {
        "title": "2. Côtés homologues et proportionnalité",
        "content": "Deux triangles sont semblables si et seulement si les longueurs de leurs côtés sont **proportionnelles deux à deux** :\n$$\\text{Si } ABC \\text{ et } DEF \\text{ sont semblables, alors } \\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC} = k$$\n• Les côtés opposés à des angles égaux sont appelés des **côtés homologues**.\n• $k$ est le **rapport de similitude** (agrandissement si $k > 1$, réduction si $k < 1$)."
      },
      {
        "title": "3. Lien avec la configuration de Thalès",
        "content": "Toute configuration de Thalès (triangles emboîtés ou papillon) est constituée de **deux triangles semblables** :\n• Les angles alternes-internes ou correspondants sont égaux.\n• Les côtés sont proportionnels d'après le théorème de Thalès."
      },
      {
        "title": "4. Impact sur les aires",
        "content": "Si deux triangles sont semblables avec un rapport de similitude $k$ sur les longueurs, alors l'aire du triangle agrandi vaut :\n$$\\text{Aire}' = k^2 \\times \\text{Aire}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer que deux triangles sont semblables et calculer un côté",
        "example": "Triangle ABC avec A = 50°, B = 70°. Triangle DEF avec D = 50°, F = 60°. Les côtés de ABC sont AB = 4 cm, BC = 5 cm, AC = 6 cm. Démontrer qu'ils sont semblables et calculer DE sachant que DF = 9 cm.",
        "steps": [
          "**Étape 1 (Calcul du 3e angle)** : Dans $ABC$, $\\widehat{C} = 180 - (50 + 70) = 60^\\circ$.",
          "**Étape 2 (Prouver la similitude)** : $\\widehat{A} = \\widehat{D} = 50^\\circ$ et $\\widehat{C} = \\widehat{F} = 60^\\circ$. Les triangles $ABC$ et $DEF$ ont deux paires d'angles égaux : ils sont donc **semblables**.",
          "**Étape 3 (Rapports des côtés homologues)** : $[AC]$ et $[DF]$ sont homologues (face aux angles de $70^\\circ$). Rapport $k = \\frac{DF}{AC} = \\frac{9}{6} = 1,5$.",
          "**Étape 4 (Calcul de DE)** : $[DE]$ est homologue à $[AB]$ (face à l'angle de $60^\\circ$) $\\implies DE = 1,5 \\times AB = 1,5 \\times 4 = 6$ cm."
        ]
      }
    ],
    "traps": [
      "⚠️ Associer les mauvais côtés dans les rapports de proportionnalité : il faut impérativement repérer les côtés face aux **mêmes angles** !",
      "⚠️ Ne pas confondre triangles égaux (isométriques, toutes longueurs égales) et triangles semblables (même forme, côtés proportionnels mais pas forcément égaux)."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce que deux triangles semblables ?",
        "a": "Deux triangles qui ont des **angles deux à deux de même mesure**."
      },
      {
        "q": "Combien d'angles égaux suffisent pour prouver que deux triangles sont semblables ?",
        "a": "**Deux angles égaux** suffisent (car le troisième est automatiquement égal à $180^\\circ - \\text{somme des deux autres}$)."
      },
      {
        "q": "Quelle est la conséquence sur les côtés de deux triangles semblables ?",
        "a": "Les longueurs de leurs côtés sont **deux à deux proportionnelles**."
      },
      {
        "q": "Deux triangles superposables (isométriques) sont-ils semblables ?",
        "a": "**Oui**, ce sont des triangles semblables particuliers de rapport $k = 1$."
      },
      {
        "q": "Si un triangle est semblable à un autre avec un rapport k = 3, que devient son aire ?",
        "a": "Son aire est multipliée par $k^2 = 3^2 = 9$."
      }
    ]
  },
  "Org1": {
    "title": "Org1 : Notion de fonction",
    "domain": "Organisation et Fonctions",
    "objectives": [
      "Comprendre la notion de fonction comme un processus qui transforme un nombre $x$ en un nombre unique $f(x)$.",
      "Distinguer rigoureusement l'antécédent (valeur de départ) de l'image (valeur d'arrivée).",
      "Calculer une image par substitution dans une formule algébrique.",
      "Déterminer un antécédent en résolvant une équation.",
      "Lire et interpréter des images et antécédents sur un tableau de valeurs et sur une courbe représentative."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire : Antécédent et Image",
        "content": "Une fonction $f$ associe à tout nombre réel $x$ un **unique** nombre noté $f(x)$ :\n$$f : x \\longmapsto f(x)$$\n• $x$ est un **antécédent** de $f(x)$ par la fonction $f$.\n• $f(x)$ est l'**image** de $x$ par la fonction $f$.\n*Analogie du cours* : Un billet de cinéma à 5 € par personne $\\implies f(x) = 5x$. Pour 4 personnes, l'image est 20 € ; 4 est un antécédent de 20 €."
      },
      {
        "title": "2. Règle d'or sur l'unicité de l'image",
        "content": "• Un nombre de départ possède **UNE SEULE image**.\n• En revanche, un nombre d'arrivée peut posséder **plusieurs antécédents** (ou un seul, ou aucun) !\n*Exemple* : pour $f(x) = x^2$, le nombre 9 possède deux antécédents : $3$ et $-3$ (car $3^2 = 9$ et $(-3)^2 = 9$)."
      },
      {
        "title": "3. Les trois modes de représentation d'une fonction",
        "content": "1. **La formule algébrique** : $f(x) = 2x^2 - 3x + 1$.\n2. **Le tableau de valeurs** : listant des valeurs de $x$ et leurs images associées $f(x)$.\n3. **La courbe représentative $\\mathcal{C}_f$** : ensemble de tous les points de coordonnées $(x ; f(x))$ dans un repère."
      },
      {
        "title": "4. Lecture graphique d'une image et d'un antécédent",
        "content": "• **Pour lire l'image de $a$** : on part de $a$ sur l'axe des abscisses (horizontal), on rejoint verticalement la courbe, puis on lit l'ordonnée sur l'axe vertical.\n• **Pour lire les antécédents de $b$** : on part de $b$ sur l'axe des ordonnées (vertical), on trace l'horizontale et on lit toutes les abscisses des points d'intersection avec la courbe."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une image et déterminer un antécédent par le calcul",
        "example": "Soit la fonction f(x) = 4x - 7. Calculer l'image de -3, puis déterminer l'antécédent de 13.",
        "steps": [
          "**Calculer l'image de -3** : On remplace $x$ par $-3$ :\n$f(-3) = 4 \\times (-3) - 7 = -12 - 7 = -19$. L'image de $-3$ est $-19$.",
          "**Déterminer l'antécédent de 13** : On cherche $x$ tel que $f(x) = 13$ :\n$4x - 7 = 13 \\implies 4x = 13 + 7 = 20 \\implies x = \\frac{20}{4} = 5$.\nL'antécédent de 13 par $f$ est 5."
        ]
      }
    ],
    "traps": [
      "⚠️ Confondre image et antécédent : « Trouver l'image de 4 » $\\implies$ calculer $f(4)$ ; « Trouver l'antécédent de 4 » $\\implies$ résoudre $f(x) = 4$ !",
      "⚠️ Oublier les parenthèses avec un nombre négatif : si $f(x) = x^2$, alors $f(-5) = (-5)^2 = 25$ et NON $-5^2 = -25$."
    ],
    "flashcards": [
      {
        "q": "Si $f(5) = 12$, qui est l'image et qui est l'antécédent ?",
        "a": "$12$ est l'**image** de $5$, et $5$ est un **antécédent** de $12$."
      },
      {
        "q": "Sur quel axe d'un repère lit-on les antécédents d'une fonction ?",
        "a": "Sur l'**axe des abscisses** (axe horizontal)."
      },
      {
        "q": "Sur quel axe lit-on les images ?",
        "a": "Sur l'**axe des ordonnées** (axe vertical)."
      },
      {
        "q": "Un nombre peut-il avoir plusieurs images par une fonction ?",
        "a": "**Non**, chaque nombre possède au maximum une seule image par définition."
      },
      {
        "q": "Quelle est l'image de 0 par la fonction $f(x) = 3x^2 - 5x + 7$ ?",
        "a": "$f(0) = 7$."
      }
    ]
  },
  "Org2": {
    "title": "Org2 : Statistiques et Analyse de données",
    "domain": "Organisation et Fonctions",
    "objectives": [
      "Calculer une moyenne simple et une moyenne pondérée par des effectifs ou coefficients.",
      "Déterminer la médiane d'une série statistique discrète ordonnée.",
      "Calculer l'étendue d'une série et interpréter la dispersion.",
      "Construire et utiliser le tableau des effectifs cumulés croissants (ECC).",
      "Comparer deux séries statistiques à l'aide de ces indicateurs."
    ],
    "keyPoints": [
      {
        "title": "1. Moyenne pondérée",
        "content": "La moyenne pondérée est la somme de chaque valeur multipliée par son effectif (ou coefficient), divisée par l'effectif total :\n$$\\bar{x} = \\frac{n_1 x_1 + n_2 x_2 + \\dots + n_p x_p}{N_{\\text{total}}} = \\frac{\\sum n_i x_i}{N}$$\nElle représente la valeur qu'aurait chaque individu si la répartition était parfaitement équitable."
      },
      {
        "title": "2. Médiane : Définition et sens concret",
        "content": "La **médiane** d'une série ordonnée est un nombre qui partage l'effectif en deux moitiés égales :\n• Au moins 50 % des valeurs lui sont inférieures ou égales.\n• Au moins 50 % des valeurs lui sont supérieures ou égales.\n• Contrairement à la moyenne, la médiane n'est pas influencée par les valeurs extrêmes."
      },
      {
        "title": "3. Méthode officielle de détermination de la médiane",
        "content": "1. **Ranger impérativement les valeurs par ordre croissant**.\n2. Calculer $\\frac{N}{2}$ (où $N$ est l'effectif total) :\n   - **Si $N$ est impair** ($N = 2p+1$) : la médiane est la valeur de rang $p+1$.\n   - **Si $N$ est pair** ($N = 2p$) : la médiane est la demi-somme des valeurs de rang $p$ et $p+1$."
      },
      {
        "title": "4. Étendue et indicateurs de dispersion",
        "content": "• **Étendue** : $\\text{Étendue} = \\text{Valeur maximale} - \\text{Valeur minimale}$.\n• Une série homogène a une petite étendue ; une série très hétérogène a une grande étendue."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer la médiane à partir d'un tableau d'effectifs avec ECC",
        "example": "Notes sur 20 (x) : 8, 10, 12, 15. Effectifs (n) : 3, 7, 8, 2. Déterminer la note médiane.",
        "steps": [
          "**Étape 1 (Effectif total)** : $N = 3 + 7 + 8 + 2 = 20$ élèves.",
          "**Étape 2 (Effectifs cumulés croissants ECC)** : Notes : 8 (ECC: 3) ; 10 (ECC: 10) ; 12 (ECC: 18) ; 15 (ECC: 20).",
          "**Étape 3 (Rangs médians)** : $N = 20$ est pair $\\implies \\frac{20}{2} = 10$. On cherche la 10ème et la 11ème valeur.",
          "**Étape 4 (Lecture)** : La 10ème valeur est 10. La 11ème valeur tombe dans la tranche de 12.",
          "**Étape 5 (Conclusion)** : $\\text{Médiane} = \\frac{10 + 12}{2} = 11$."
        ]
      }
    ],
    "traps": [
      "⚠️ Confondre moyenne et médiane : une série peut avoir une moyenne de 12 et une médiane de 9 !",
      "⚠️ Dans un calcul de moyenne pondérée, diviser par le nombre de colonnes au lieu de diviser par l'effectif total."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce que la médiane d'une série statistique ordonnée ?",
        "a": "Une valeur qui partage la série ordonnée en deux groupes de même effectif (au moins 50 % en dessous, au moins 50 % au-dessus)."
      },
      {
        "q": "Comment calcule-t-on l'étendue d'une série statistique ?",
        "a": "$$\\text{Étendue} = \\text{Valeur maximale} - \\text{Valeur minimale}$$"
      },
      {
        "q": "Pour un effectif total de 25 valeurs, quel est le rang de la médiane ?",
        "a": "La 13ème valeur (car $\\frac{25+1}{2} = 13$, il y a 12 valeurs avant et 12 valeurs après)."
      },
      {
        "q": "La médiane est-elle sensible aux valeurs extrêmes aberrantes ?",
        "a": "**Non**, la médiane ne dépend que de l'ordre des valeurs, contrairement à la moyenne qui est fortement influencée."
      },
      {
        "q": "Que vaut la moyenne de la série : 10 (coeff 2) et 16 (coeff 1) ?",
        "a": "$$\\frac{10 \\times 2 + 16 \\times 1}{2 + 1} = \\frac{36}{3} = 12$$"
      }
    ]
  },
  "Org3": {
    "title": "Org3 : Fonctions linéaires et affines",
    "domain": "Organisation et Fonctions",
    "objectives": [
      "Reconnaître l'expression d'une fonction linéaire $f(x) = ax$ et d'une fonction affine $f(x) = ax + b$.",
      "Associer fonction linéaire et situation de proportionnalité.",
      "Représenter graphiquement une fonction affine par une droite dans un repère.",
      "Lire et interpréter le coefficient directeur $a$ (la pente) et l'ordonnée à l'origine $b$.",
      "Calculer le coefficient directeur à l'aide de la formule $a = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$.",
      "Modéliser des situations concrètes (tarifs avec abonnement, pourcentages d'augmentation/réduction)."
    ],
    "keyPoints": [
      {
        "title": "1. Fonctions linéaires : $f(x) = ax$",
        "content": "• Une **fonction linéaire** traduit une situation de **proportionnalité** :\n$$f(x) = ax \\quad (a \\in \\mathbb{R})$$\n• Sa représentation graphique est une **droite qui passe TOUJOURS par l'origine du repère $(0 ; 0)$**.\n• Le nombre $a$ est à la fois le coefficient de proportionnalité et le **coefficient directeur** (la pente) de la droite."
      },
      {
        "title": "2. Fonctions affines : $f(x) = ax + b$",
        "content": "• Une **fonction affine** est de la forme :\n$$f(x) = ax + b \\quad (a, b \\in \\mathbb{R})$$\n• Sa représentation graphique est une **droite** qui coupe l'axe des ordonnées au point $(0 ; b)$.\n• **$b$ est l'ordonnée à l'origine** : $f(0) = b$.\n• **$a$ est le coefficient directeur (pente)** : quand on avance de 1 unité vers la droite sur l'axe des abscisses, on monte de $a$ unités (ou descend de $|a|$ si $a < 0$)."
      },
      {
        "title": "3. Calcul du coefficient directeur $a$",
        "content": "Si on connaît deux points $A(x_1 ; y_1)$ et $B(x_2 ; y_2)$ de la droite ($x_1 \\neq x_2$) :\n$$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$$\nUne fois $a$ déterminé, on calcule $b$ en remplaçant par les coordonnées d'un des deux points : $b = y_1 - a x_1$."
      },
      {
        "title": "4. Lien avec les pourcentages",
        "content": "• Augmenter une quantité de $t$ % correspond à la fonction linéaire : $f(x) = \\left(1 + \\frac{t}{100}\\right)x$.\n• Diminuer une quantité de $t$ % correspond à la fonction linéaire : $f(x) = \\left(1 - \\frac{t}{100}\\right)x$."
      }
    ],
    "methods": [
      {
        "title": "Méthode officielle : Déterminer l'expression d'une fonction affine",
        "example": "Déterminer la fonction affine f telle que f(2) = 7 et f(5) = 16.",
        "steps": [
          "**Étape 1 (Calcul du coefficient directeur a)** :\n$$a = \\frac{f(5) - f(2)}{5 - 2} = \\frac{16 - 7}{3} = \\frac{9}{3} = 3$$.\nLa fonction s'écrit donc $f(x) = 3x + b$.",
          "**Étape 2 (Calcul de l'ordonnée à l'origine b)** : On utilise $f(2) = 7$ :\n$3 \\times 2 + b = 7 \\implies 6 + b = 7 \\implies b = 7 - 6 = 1$.",
          "**Conclusion** : L'expression de la fonction est $f(x) = 3x + 1$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans la formule $a = \\frac{y_2 - y_1}{x_2 - x_1}$, inverser numérateur et dénominateur : ce sont les $y$ en haut et les $x$ en bas !",
      "⚠️ Penser qu'une fonction affine est proportionnelle : $f(x) = ax + b$ N'EST PAS proportionnelle dès que $b \\neq 0$."
    ],
    "flashcards": [
      {
        "q": "Quelle est l'expression générale d'une fonction affine ?",
        "a": "$$f(x) = ax + b$$\n*(où $a$ est le coefficient directeur et $b$ l'ordonnée à l'origine)*."
      },
      {
        "q": "Quelle est la particularité graphique d'une fonction linéaire $f(x) = ax$ ?",
        "a": "Sa représentation graphique est une **droite qui passe par l'origine $(0 ; 0)$**."
      },
      {
        "q": "Que représente graphiquement le nombre $b$ dans $f(x) = ax + b$ ?",
        "a": "L'**ordonnée à l'origine** : c'est l'ordonnée du point où la droite coupe l'axe vertical."
      },
      {
        "q": "Quelle fonction linéaire modélise une réduction de 20 % ?",
        "a": "$$f(x) = 0,80x \\quad (\\text{car } 1 - 0,20 = 0,80)$$"
      },
      {
        "q": "Si le coefficient directeur $a$ d'une droite est négatif ($a < 0$), comment est orientée la droite ?",
        "a": "La droite est **descendante** (la fonction est décroissante)."
      }
    ]
  },
  "Org4": {
    "title": "Org4 : Probabilités et Expériences aléatoires",
    "domain": "Organisation et Fonctions",
    "objectives": [
      "Identifier les 2 conditions pour qu'une expérience soit aléatoire (issues connues, résultat imprévisible).",
      "Calculer la probabilité d'un événement en situation d'équiprobabilité.",
      "Utiliser la propriété de l'événement contraire : $P(\\bar{A}) = 1 - P(A)$.",
      "Construire et exploiter un arbre pondéré pour une expérience à deux épreuves.",
      "Appliquer les règles de calcul sur un arbre de probabilités (règle du produit sur les branches, règle de la somme sur les chemins)."
    ],
    "keyPoints": [
      {
        "title": "1. Les deux conditions d'une expérience aléatoire",
        "content": "Définition du cours : Une expérience est dite **aléatoire** si elle remplit deux conditions indispensables :\n1. On **connaît tous les résultats possibles** (appelés les **issues**).\n2. Le résultat final **n'est pas prévisible** avec certitude à l'avance."
      },
      {
        "title": "2. Événements et Équiprobabilité",
        "content": "• La probabilité d'un événement $A$ est un nombre compris entre 0 et 1 : $$0 \\le P(A) \\le 1$$\n• Événement impossible : $P(\\emptyset) = 0$ | Événement certain : $P = 1$.\n• La **somme des probabilités de toutes les issues possibles est TOUJOURS égale à 1**.\n• En situation d'**équiprobabilité** : $$P(A) = \\frac{\\text{Nombre d'issues favorables à } A}{\\text{Nombre total d'issues possibles}}$$"
      },
      {
        "title": "3. Événement contraire",
        "content": "L'événement contraire de $A$, noté $\\bar{A}$ (ou « non A »), est constitué de toutes les issues qui ne réalisent pas $A$ :\n$$P(\\bar{A}) = 1 - P(A) \\quad \\iff \\quad P(A) + P(\\bar{A}) = 1$$\n*Exemple* : Si la probabilité de tirer une carte rouge est $\\frac{1}{4}$, alors la probabilité de ne pas tirer de carte rouge est $1 - \\frac{1}{4} = \\frac{3}{4}$."
      },
      {
        "title": "4. Expériences à deux épreuves et Arbre pondéré",
        "content": "• **Règle 1 (Somme des branches)** : La somme des probabilités des branches issues d'un même nœud est égale à 1.\n• **Règle 2 (Chemin / Produit)** : La probabilité de l'issue associée à un chemin complet est le **produit des probabilités** rencontrées le long de ce chemin.\n• **Règle 3 (Événement composé / Somme)** : La probabilité d'un événement associé à plusieurs chemins est la **somme des probabilités** de ces chemins."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la probabilité avec un arbre à deux épreuves",
        "example": "On lance une pièce équilibrée puis on tire une boule dans un sac contenant 2 boules vertes et 3 boules rouges. Quelle est la probabilité d'obtenir (Pile, Rouge) ?",
        "steps": [
          "**Étape 1 (1ère épreuve - Pièce)** : $P(\\text{Pile}) = \\frac{1}{2}$.",
          "**Étape 2 (2ème épreuve - Sac)** : Il y a $2 + 3 = 5$ boules au total $\\implies P(\\text{Rouge}) = \\frac{3}{5}$.",
          "**Étape 3 (Règle du produit)** : Les deux épreuves étant indépendantes :\n$$P(\\text{Pile et Rouge}) = P(\\text{Pile}) \\times P(\\text{Rouge}) = \\frac{1}{2} \\times \\frac{3}{5} = \\frac{3}{10} = 0,3$$."
        ]
      }
    ],
    "traps": [
      "⚠️ Additionner les probabilités le long d'un chemin au lieu de les multiplier : pour un chemin d'arbre, on **multiplie** les probabilités !",
      "⚠️ Dans les tirages sans remise, oublier de diminuer le nombre total de boules pour la seconde épreuve !"
    ],
    "flashcards": [
      {
        "q": "Quelles sont les deux conditions pour qu'une expérience soit aléatoire ?",
        "a": "1. On connaît **toutes les issues possibles**.\n2. Le résultat final **n'est pas prévisible** à l'avance."
      },
      {
        "q": "Que vaut toujours la somme des probabilités de toutes les issues d'une expérience aléatoire ?",
        "a": "Elle est **toujours égale à 1**."
      },
      {
        "q": "Quelle est la formule de la probabilité de l'événement contraire $\\bar{A}$ ?",
        "a": "$$P(\\bar{A}) = 1 - P(A)$$"
      },
      {
        "q": "Comment calcule-t-on la probabilité d'une issue au bout d'un chemin dans un arbre pondéré ?",
        "a": "On effectue le **produit des probabilités** portées par chacune des branches de ce chemin."
      },
      {
        "q": "Si $P(A) = 0,73$, quelle est la probabilité de son événement contraire ?",
        "a": "$$1 - 0,73 = 0,27$$"
      }
    ]
  },
  "Algo": {
    "title": "Algo : Algorithmique, Scratch et Tableur",
    "domain": "Algorithmique et Outils",
    "objectives": [
      "Comprendre et exploiter un tableur : saisie de formules commençant par `=`, étirement de cellules et fonctions usuelles (=SOMME, =MOYENNE).",
      "Comprendre et prévoir l'exécution d'un script Scratch comportant des variables et des blocs conditionnels.",
      "Analyser des boucles inconditionnelles (« répéter n fois ») et conditionnelles (« répéter jusqu'à ce que »).",
      "Résoudre des problèmes algorithmiques type Brevet croisant calcul littéral et programmation."
    ],
    "keyPoints": [
      {
        "title": "1. Le Tableur : Règles d'or et Formules clés",
        "content": "• **Règle n°1** : Toute formule de tableur commence **OBLIGATOIREMENT par le signe égal `=`** (sans le signe `=`, le tableur affiche du simple texte) !\n• **Fonctions majeures du Brevet** :\n  - `=SOMME(B2:B8)` : calcule la somme des cellules de B2 à B8.\n  - `=MOYENNE(B2:B8)` : calcule la moyenne des valeurs.\n• **Étirement / Recopie vers le bas** : les indices de ligne augmentent automatiquement (`=B2*3` étiré vers le bas devient `=B3*3`).\n• **Étirement vers la droite** : les lettres de colonnes avancent (`=A1+B1` devient `=B1+C1`)."
      },
      {
        "title": "2. Scratch : Les Variables",
        "content": "• Une variable informatique stocke une donnée en mémoire.\n• **« mettre [x] à 5 »** : affectation directe (initialisation de la variable à 5).\n• **« ajouter 3 à [x] »** : incrémentation de la variable ($x \\leftarrow x + 3$). Si $x$ valait 5, il vaut maintenant 8."
      },
      {
        "title": "3. Scratch : Structures conditionnelles et Capteurs",
        "content": "• **« si <condition> alors ... sinon ... »** : oriente l'exécution selon que le test est vrai ou faux.\n• **« demander ... et attendre »** : invite l'utilisateur à saisir une valeur, stockée dans le bloc bleu **« réponse »**.\n• Les conditions utilisent des opérateurs de comparaison : `=`, `<`, `>` et des opérateurs logiques `et`, `ou`, `non`."
      },
      {
        "title": "4. Scratch : Boucles et Tracé de polygones réguliers",
        "content": "• **Boucle « répéter [N] fois »** : exécute le corps de boucle un nombre déterminé de fois.\n• **Tracé d'un polygone régulier à $N$ côtés** : tourner de $\\frac{360^\\circ}{N}$ à chaque sommet :\n  - Triangle équilatéral : tourner de $120^\\circ$ ($360/3$)\n  - Carré : tourner de $90^\\circ$ ($360/4$)\n  - Pentagone : tourner de $72^\\circ$ ($360/5$)\n  - Hexagone : tourner de $60^\\circ$ ($360/6$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire la formule de tableur pour calculer un prix TTC",
        "example": "En cellule A2 on a le prix HT (120 €) et en B2 le taux de TVA (20%). Écrire la formule à saisir en C2 pour obtenir le prix TTC.",
        "steps": [
          "**Étape 1 (Début)** : La formule commence impérativement par `=`. ",
          "**Étape 2 (Expression)** : Le prix TTC est égal au prix HT plus le montant de la TVA :\n`=A2 + A2 * B2` ou `=A2 * (1 + B2)`.",
          "**Étape 3 (Étirement)** : En étirant cette formule vers le bas en C3, elle s'adaptera automatiquement en `=A3 * (1 + B3)`."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un tableur, oublier le signe `=` au début d'une formule : taper `SOMME(A1:A5)` au lieu de `=SOMME(A1:A5)` n'effectue aucun calcul !",
      "⚠️ Confondre l'angle intérieur d'un polygone avec l'angle de rotation extérieur de Scratch : pour un triangle équilatéral, l'angle intérieur est $60^\\circ$, mais Scratch doit tourner de $120^\\circ$ ($360/3$) !"
    ],
    "flashcards": [
      {
        "q": "Par quel caractère commence obligatoirement toute formule dans un tableur ?",
        "a": "Par le signe égal **`=`**."
      },
      {
        "q": "Que fait la formule `=MOYENNE(B2:B10)` dans un tableur ?",
        "a": "Elle calcule la moyenne arithmétique de toutes les valeurs situées entre les cellules B2 et B10 incluses."
      },
      {
        "q": "Si x vaut 4, que vaut x après l'instruction Scratch « ajouter 5 à x » ?",
        "a": "$x = 9$ (car $4 + 5 = 9$)."
      },
      {
        "q": "De quel angle le lutin Scratch doit-il tourner pour tracer un pentagone régulier (5 côtés) ?",
        "a": "$$360^\\circ \\div 5 = 72^\\circ$$"
      },
      {
        "q": "Si on étire la formule `=A1*2` vers le bas en cellule ligne 2, que devient-elle ?",
        "a": "`=A2*2` (la référence de ligne s'incrémente automatiquement)."
      }
    ]
  }
};
