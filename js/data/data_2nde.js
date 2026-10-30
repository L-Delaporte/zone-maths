/**
 * Données pédagogiques officielles de la classe de Seconde (Lycée Général et Technologique)
 * Conforme aux programmes officiels de l'Éducation nationale
 */

window.MATHS_COURSES_2NDE = {
  "2N1": {
    "title": "2N1 : Ensembles de nombres, arithmétique et nombres réels",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Identifier les ensembles fondamentaux de nombres : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.",
      "Décomposer un nombre entier naturel en produit de facteurs premiers.",
      "Simplifier des fractions et des radicaux à l'aide de l'arithmétique.",
      "Démontrer que $\\sqrt{2}$ est un nombre irrationnel (démonstration par l'absurde historique).",
      "Utiliser les notions de multiple, de diviseur, de nombre premier et de nombre pair ou impair.",
      "Connaître et appliquer les règles de calcul sur les racines carrées."
    ],
    "keyPoints": [
      {
        "title": "1. Les ensembles de nombres et leurs inclusions",
        "content": "Les nombres réels sont classés par ensembles emboîtés :\n• **$\\mathbb{N}$ (Entiers naturels)** : $\\{0, 1, 2, 3, \\dots\\}$\n• **$\\mathbb{Z}$ (Entiers relatifs)** : $\\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$\n• **$\\mathbb{D}$ (Nombres décimaux)** : nombres s'écrivant $\\frac{a}{10^n}$ avec $a \\in \\mathbb{Z}, n \\in \\mathbb{N}$ (nombre fini de chiffres après la virgule, ex: $0{,}75$, $-3{,}12$).\n• **$\\mathbb{Q}$ (Nombres rationnels)** : nombres s'écrivant $\\frac{a}{b}$ avec $a \\in \\mathbb{Z}, b \\in \\mathbb{Z}^*$ (développement décimal périodique, ex: $\\frac{1}{3} = 0{,}333\\dots$).\n• **$\\mathbb{R}$ (Nombres réels)** : ensemble de tous les nombres mesurant une abscisse sur la droite graduée (inclut les irrationnels comme $\\pi$, $\\sqrt{2}$, $\\sqrt{5}$).\n\n$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$"
      },
      {
        "title": "2. Décomposition en facteurs premiers et simplifications",
        "content": "• **Théorème fondamental de l'arithmétique** : Tout entier $n \\ge 2$ se décompose de manière **unique** en produit de facteurs premiers :\n$$n = p_1^{\\alpha_1} \\times p_2^{\\alpha_2} \\times \\dots \\times p_k^{\\alpha_k}$$\n• **Application aux radicaux** : Pour simplifier $\\sqrt{72}$ :\n$$72 = 2^3 \\times 3^2 = (2^2 \\times 3^2) \\times 2 = 6^2 \\times 2 \\implies \\sqrt{72} = 6\\sqrt{2}$$"
      },
      {
        "title": "3. Démonstration : $\\sqrt{2}$ est irrationnel",
        "content": "Supposons par l'absurde que $\\sqrt{2} \\in \\mathbb{Q}$ : il existe alors deux entiers $p$ et $q > 0$ tels que $\\sqrt{2} = \\frac{p}{q}$, avec la fraction $\\frac{p}{q}$ **irréductible** (donc $p$ et $q$ ne sont pas tous deux pairs).\n1. En élevant au carré : $2 = \\frac{p^2}{q^2} \\iff p^2 = 2q^2$.\n2. Donc $p^2$ est pair, ce qui implique que $p$ est pair. Posons $p = 2k$ ($k \\in \\mathbb{Z}$).\n3. Alors $(2k)^2 = 2q^2 \\iff 4k^2 = 2q^2 \\iff q^2 = 2k^2$.\n4. Donc $q^2$ est pair, ce qui implique que $q$ est également pair.\n5. **Contradiction** : $p$ et $q$ sont tous les deux pairs, ce qui contredit le fait que la fraction $\\frac{p}{q}$ soit irréductible !\nConclusion : $\\sqrt{2} \\notin \\mathbb{Q}$, c'est un nombre irrationnel."
      },
      {
        "title": "4. Multiples, diviseurs, nombres pairs et impairs",
        "content": "• **Définition** : soient $a$ et $b$ deux entiers relatifs avec $b \\neq 0$. On dit que $a$ est un **multiple** de $b$ (ou que $b$ est un **diviseur** de $a$) s'il existe un entier $k$ tel que $a = k \\times b$.\n• Un entier $n$ est **pair** s'il s'écrit $n = 2k$ avec $k \\in \\mathbb{Z}$, et **impair** s'il s'écrit $n = 2k + 1$.\n• **Propriété** : la somme de deux multiples de $a$ est un multiple de $a$ : $ka + k'a = (k + k')a$.\n• **Propriété** : le carré d'un nombre impair est impair. En effet, $(2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$.\nPar contraposée : si $p^2$ est pair, alors $p$ est pair (c'est l'argument utilisé dans la démonstration de l'irrationalité de $\\sqrt{2}$)."
      },
      {
        "title": "5. Nombres premiers",
        "content": "• **Définition** : un entier naturel $p$ est **premier** s'il possède exactement deux diviseurs positifs : $1$ et lui-même.\n• Les nombres premiers inférieurs à 30 sont : $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$.\n• **Test pratique** : pour savoir si $n \\ge 2$ est premier, il suffit de tester sa divisibilité par les nombres premiers $p$ tels que $p^2 \\le n$.\n*Exemple* : pour $97$, on teste $2, 3, 5, 7$ (car $11^2 = 121 > 97$). Aucun ne divise $97$, donc $97$ est premier."
      },
      {
        "title": "6. Reconnaître un nombre décimal",
        "content": "Une fraction **irréductible** $\\frac{a}{b}$ (avec $b > 0$) est un nombre décimal si et seulement si les seuls facteurs premiers de $b$ sont $2$ et/ou $5$.\n• $\\frac{7}{40}$ : $40 = 2^3 \\times 5$, donc $\\frac{7}{40} \\in \\mathbb{D}$. En effet $\\frac{7}{40} = \\frac{7 \\times 25}{40 \\times 25} = \\frac{175}{1000} = 0{,}175$.\n• $\\frac{5}{12}$ : $12 = 2^2 \\times 3$ contient le facteur $3$, donc $\\frac{5}{12} \\notin \\mathbb{D}$ (on a $\\frac{5}{12} = 0{,}41666\\dots$)."
      },
      {
        "title": "7. Règles de calcul sur les racines carrées",
        "content": "Pour tous réels $a \\ge 0$ et $b \\ge 0$ :\n$$\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b} \\qquad (\\sqrt{a})^2 = a$$\net si $b > 0$ : $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$.\n• Pour tout réel $a$ : $\\sqrt{a^2} = |a|$ (par exemple $\\sqrt{(-3)^2} = \\sqrt{9} = 3$).\n• **Contre-exemple** : la racine d'une somme n'est pas la somme des racines : $\\sqrt{9 + 16} = \\sqrt{25} = 5$ alors que $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer le plus petit ensemble contenant un nombre",
        "example": "Déterminer le plus petit ensemble auquel appartiennent : $A = \\frac{14}{7}$, $B = -\\frac{12}{5}$, $C = \\frac{7}{6}$ et $D = \\sqrt{49}$.",
        "steps": [
          "**Étape 1** : Simplifier chaque expression avant de conclure. $A = 2$ et $D = 7$ sont des entiers naturels, donc $A, D \\in \\mathbb{N}$.",
          "**Étape 2** : Pour $B = -2{,}4 = -\\frac{24}{10}$, c'est un décimal négatif non entier, donc son plus petit ensemble est $\\mathbb{D}$.",
          "**Étape 3** : Pour $C = \\frac{7}{6} = 1{,}1666\\dots$, le dénominateur comporte le facteur premier 3 (non présent dans 10), donc le développement est infini périodique. Son plus petit ensemble est $\\mathbb{Q}$."
        ]
      },
      {
        "title": "Méthode : Rendre une fraction irréductible avec les facteurs premiers",
        "example": "Rendre irréductible la fraction $\\frac{84}{126}$.",
        "steps": [
          "**Étape 1** : On décompose le numérateur : $84 = 2 \\times 42 = 2 \\times 2 \\times 21 = 2^2 \\times 3 \\times 7$.",
          "**Étape 2** : On décompose le dénominateur : $126 = 2 \\times 63 = 2 \\times 3^2 \\times 7$.",
          "**Étape 3** : Les facteurs communs sont $2$, $3$ et $7$, soit $2 \\times 3 \\times 7 = 42$.",
          "**Étape 4** : On simplifie : $\\frac{84}{126} = \\frac{2 \\times 42}{3 \\times 42} = \\frac{2}{3}$.",
          "**Conclusion** : $\\frac{84}{126} = \\frac{2}{3}$, et cette fraction est irréductible car $2$ et $3$ n'ont aucun diviseur commun autre que $1$."
        ]
      },
      {
        "title": "Méthode : Réduire une somme de racines carrées",
        "example": "Écrire $A = \\sqrt{75} - 2\\sqrt{12} + \\sqrt{27}$ sous la forme $a\\sqrt{3}$ avec $a$ entier.",
        "steps": [
          "**Étape 1** : On fait apparaître le plus grand carré parfait dans chaque radicande : $75 = 25 \\times 3$, $12 = 4 \\times 3$, $27 = 9 \\times 3$.",
          "**Étape 2** : On simplifie chaque racine : $\\sqrt{75} = 5\\sqrt{3}$, $\\sqrt{12} = 2\\sqrt{3}$ donc $2\\sqrt{12} = 4\\sqrt{3}$, et $\\sqrt{27} = 3\\sqrt{3}$.",
          "**Étape 3** : On factorise par $\\sqrt{3}$ : $A = 5\\sqrt{3} - 4\\sqrt{3} + 3\\sqrt{3} = (5 - 4 + 3)\\sqrt{3}$.",
          "**Conclusion** : $A = 4\\sqrt{3}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas juger un nombre sur son écriture brute ! $\\frac{21}{7} = 3 \\in \\mathbb{N}$ et $\\sqrt{9} = 3 \\in \\mathbb{N}$.",
      "⚠️ $\\frac{1}{3} \\notin \\mathbb{D}$ : un nombre décimal doit posséder un nombre **fini** de chiffres après la virgule.",
      "⚠️ $1$ n'est pas un nombre premier : il ne possède qu'un seul diviseur positif. Le plus petit nombre premier est $2$ (c'est aussi le seul nombre premier pair).",
      "⚠️ $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ en général : on ne peut « couper » une racine que sur un **produit** ou un **quotient**.",
      "⚠️ Le quotient de deux décimaux n'est pas toujours décimal : $1$ et $3$ sont décimaux, mais $\\frac{1}{3} \\notin \\mathbb{D}$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la chaîne d'inclusion des cinq grands ensembles de nombres ?",
        "a": "$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$."
      },
      {
        "q": "À quel ensemble appartient $\\frac{3}{8}$ ?",
        "a": "$\\frac{3}{8} = 0{,}375 = \\frac{375}{1000} \\in \\mathbb{D}$ (nombre décimal)."
      },
      {
        "q": "Simplifier l'expression $\\sqrt{50}$.",
        "a": "$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$."
      },
      {
        "q": "Le nombre $91$ est-il premier ?",
        "a": "Non : $91 = 7 \\times 13$."
      },
      {
        "q": "Écrire $x = 0{,}272727\\dots$ sous forme de fraction irréductible.",
        "a": "$100x = 27{,}2727\\dots$ donc $100x - x = 27$, soit $99x = 27$ et $x = \\frac{27}{99} = \\frac{3}{11}$."
      },
      {
        "q": "Pourquoi $\\frac{7}{40}$ est-il un nombre décimal ?",
        "a": "La fraction est irréductible et $40 = 2^3 \\times 5$ n'a que $2$ et $5$ comme facteurs premiers : $\\frac{7}{40} = 0{,}175$."
      }
    ]
  },

  "2N2": {
    "title": "2N2 : Calcul littéral, identités remarquables et factorisation",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Développer et réduire des expressions algébriques du second degré.",
      "Maîtriser les 3 identités remarquables dans les deux sens (développement et factorisation).",
      "Factoriser par recherche d'un facteur commun ou identité remarquable.",
      "Simplifier des fractions rationnelles en précisant les valeurs interdites.",
      "Utiliser les règles de calcul sur les puissances entières (positives et négatives).",
      "Démontrer qu'une égalité est vraie (par le calcul) ou fausse (par un contre-exemple)."
    ],
    "keyPoints": [
      {
        "title": "1. Les 3 identités remarquables fondamentales",
        "content": "Pour tous nombres réels $a$ et $b$ :\n1. Carré d'une somme : $$(a + b)^2 = a^2 + 2ab + b^2$$\n2. Carré d'une différence : $$(a - b)^2 = a^2 - 2ab + b^2$$\n3. Différence de deux carrés : $$(a - b)(a + b) = a^2 - b^2$$\n\n• **Dans le sens direct** : on développe un produit en une somme.\n• **Dans le sens réciproque** : on factorise une somme en un produit (très utile pour résoudre des équations produit-nul)."
      },
      {
        "title": "2. Techniques avancées de factorisation",
        "content": "• **Facteur commun évident ou composé** :\n$$A(x) = (2x - 3)(x + 5) - (2x - 3)(4x - 1) = (2x - 3)[(x + 5) - (4x - 1)] = (2x - 3)(-3x + 6)$$\n• **Reconnaissance d'une identité remarquable** :\n$$B(x) = 9x^2 - 25 = (3x)^2 - 5^2 = (3x - 5)(3x + 5)$$"
      },
      {
        "title": "3. Distributivité simple et double",
        "content": "Pour tous réels $k$, $a$, $b$, $c$, $d$ :\n$$k(a + b) = ka + kb \\qquad (a + b)(c + d) = ac + ad + bc + bd$$\n*Exemple* : $(2x + 3)(x - 4) = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$.\n• **Développer** : transformer un produit en somme. **Factoriser** : transformer une somme en produit. **Réduire** : regrouper les termes de même degré."
      },
      {
        "title": "4. Règles de calcul sur les puissances",
        "content": "Pour tous réels $a$ et $b$ non nuls et tous entiers relatifs $n$ et $m$ :\n• $a^n \\times a^m = a^{n+m}$ et $\\frac{a^n}{a^m} = a^{n-m}$\n• $(a^n)^m = a^{n \\times m}$ et $(a \\times b)^n = a^n \\times b^n$\n• $a^0 = 1$ et $a^{-n} = \\frac{1}{a^n}$\n*Exemple* : $\\frac{2^7 \\times 2^{-2}}{2^3} = 2^{7 - 2 - 3} = 2^2 = 4$.\n*Attention* : $(a + b)^n \\neq a^n + b^n$ en général."
      },
      {
        "title": "5. Expressions rationnelles et valeurs interdites",
        "content": "Un quotient $\\frac{A(x)}{B(x)}$ n'existe que si $B(x) \\neq 0$ : les valeurs de $x$ qui annulent le dénominateur sont les **valeurs interdites**.\nPour additionner deux quotients, on les réduit au même dénominateur : $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$.\n*Exemple* : pour $x \\neq 0$ et $x \\neq -1$ :\n$$\\frac{1}{x} + \\frac{2}{x + 1} = \\frac{(x + 1) + 2x}{x(x + 1)} = \\frac{3x + 1}{x(x + 1)}$$"
      },
      {
        "title": "6. Démontrer ou réfuter une égalité",
        "content": "• Pour **démontrer** qu'une égalité est vraie pour tout $x$, on transforme un membre (en général le plus compliqué) jusqu'à obtenir l'autre, ou on développe les deux membres séparément.\n• Pour **prouver qu'elle est fausse**, un seul **contre-exemple** suffit.\n*Exemple* : l'égalité $(a + b)^2 = a^2 + b^2$ est fausse : avec $a = b = 1$, on obtient $(1 + 1)^2 = 4$ mais $1^2 + 1^2 = 2$."
      },
      {
        "title": "7. Les identités remarquables au service du calcul mental",
        "content": "• $101^2 = (100 + 1)^2 = 10\\,000 + 200 + 1 = 10\\,201$.\n• $99^2 = (100 - 1)^2 = 10\\,000 - 200 + 1 = 9\\,801$.\n• $49 \\times 51 = (50 - 1)(50 + 1) = 50^2 - 1^2 = 2\\,500 - 1 = 2\\,499$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Factoriser une expression avec différence de deux carrés composés",
        "example": "Factoriser $E(x) = (3x - 2)^2 - (x + 4)^2$.",
        "steps": [
          "**Étape 1** : On reconnaît la forme $a^2 - b^2 = (a - b)(a + b)$ avec $a = (3x - 2)$ et $b = (x + 4)$.",
          "**Étape 2** : On écrit les facteurs en conservant les parenthèses intérieures : $E(x) = [(3x - 2) - (x + 4)][(3x - 2) + (x + 4)]$.",
          "**Étape 3** : On supprime les parenthèses avec précaution : $E(x) = [3x - 2 - x - 4][3x - 2 + x + 4] = (2x - 6)(4x + 2)$."
        ]
      },
      {
        "title": "Méthode : Factoriser un trinôme carré parfait",
        "example": "Factoriser $F(x) = 4x^2 - 12x + 9$.",
        "steps": [
          "**Étape 1** : On repère deux carrés : $4x^2 = (2x)^2$ et $9 = 3^2$. On pose $a = 2x$ et $b = 3$.",
          "**Étape 2** : On vérifie le double produit : $2ab = 2 \\times 2x \\times 3 = 12x$. Il apparaît avec le signe $-$, on reconnaît donc $a^2 - 2ab + b^2$.",
          "**Étape 3** : On applique l'identité $a^2 - 2ab + b^2 = (a - b)^2$ : $F(x) = (2x - 3)^2$.",
          "**Conclusion** : $F(x) = (2x - 3)^2$. Contrôle : $(2x - 3)^2 = 4x^2 - 12x + 9$."
        ]
      },
      {
        "title": "Méthode : Écrire une expression sous forme d'un seul quotient",
        "example": "Pour $x \\neq 1$, écrire $A(x) = 2 - \\frac{3}{x - 1}$ sous la forme d'un seul quotient.",
        "steps": [
          "**Étape 1** : On écrit $2$ avec le dénominateur $x - 1$ : $2 = \\frac{2(x - 1)}{x - 1}$.",
          "**Étape 2** : On soustrait les numérateurs : $A(x) = \\frac{2(x - 1) - 3}{x - 1}$.",
          "**Étape 3** : On développe et on réduit le numérateur : $2(x - 1) - 3 = 2x - 2 - 3 = 2x - 5$.",
          "**Conclusion** : pour $x \\neq 1$, $A(x) = \\frac{2x - 5}{x - 1}$. Contrôle avec $x = 2$ : $2 - \\frac{3}{1} = -1$ et $\\frac{4 - 5}{1} = -1$."
        ]
      },
      {
        "title": "Méthode : Faire apparaître un facteur commun caché",
        "example": "Factoriser $H(x) = x^2 - 9 + (x - 3)(2x + 1)$.",
        "steps": [
          "**Étape 1** : On factorise d'abord $x^2 - 9$ avec $a^2 - b^2$ : $x^2 - 9 = (x - 3)(x + 3)$.",
          "**Étape 2** : On voit apparaître le facteur commun $(x - 3)$ : $H(x) = (x - 3)(x + 3) + (x - 3)(2x + 1) = (x - 3)[(x + 3) + (2x + 1)]$.",
          "**Étape 3** : On réduit le second facteur : $(x + 3) + (2x + 1) = 3x + 4$.",
          "**Conclusion** : $H(x) = (x - 3)(3x + 4)$. Contrôle avec $x = 0$ : $-9 + (-3) \\times 1 = -12$ et $(-3) \\times 4 = -12$."
        ]
      }
    ],
    "traps": [
      "⚠️ Erreur classique de parenthèse : $-(x + 4) = -x - 4$ et non $-x + 4$ !",
      "⚠️ $(a+b)^2 \\neq a^2 + b^2$ : il ne faut jamais oublier le double produit $2ab$ !",
      "⚠️ $(3x)^2 = 9x^2$ et non $3x^2$ : le carré porte sur **tout** le produit.",
      "⚠️ $-3^2 = -9$ alors que $(-3)^2 = 9$ : sans parenthèses, le carré ne porte que sur $3$.",
      "⚠️ On ne simplifie jamais un terme d'une somme : $\\frac{x + 3}{x} \\neq 3$. Seul un **facteur** commun au numérateur et au dénominateur se simplifie : $\\frac{3(x + 1)}{5(x + 1)} = \\frac{3}{5}$ pour $x \\neq -1$."
    ],
    "flashcards": [
      {
        "q": "Développer $(2x - 5)^2$.",
        "a": "$(2x - 5)^2 = 4x^2 - 20x + 25$."
      },
      {
        "q": "Factoriser $16x^2 - 49$.",
        "a": "$16x^2 - 49 = (4x - 7)(4x + 7)$."
      },
      {
        "q": "Factoriser $x^2 + 10x + 25$.",
        "a": "$x^2 + 10x + 25 = x^2 + 2 \\times x \\times 5 + 5^2 = (x + 5)^2$."
      },
      {
        "q": "Simplifier $\\frac{5^4 \\times 5^{-1}}{5^2}$.",
        "a": "$5^{4 - 1 - 2} = 5^1 = 5$."
      },
      {
        "q": "Développer et réduire $(2x + 3)(x - 4)$.",
        "a": "$2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$."
      }
    ]
  },

  "2N3": {
    "title": "2N3 : Ordre, intervalles et valeur absolue",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Manipuler la notation des intervalles et les opérations d'intersection $\\cap$ et réunion $\\cup$.",
      "Comprendre la définition de la valeur absolue d'un nombre réel : $|x| = x$ si $x \\ge 0$, et $|x| = -x$ si $x < 0$.",
      "Interpréter $|x - a|$ comme la distance géométrique entre $x$ et $a$ sur la droite numérique.",
      "Résoudre des équations et inéquations du type $|x - a| = r$ et $|x - a| \\le r$.",
      "Utiliser les règles de l'ordre (addition, multiplication par un réel positif ou négatif) pour résoudre des inéquations.",
      "Comparer deux nombres en étudiant le signe de leur différence."
    ],
    "keyPoints": [
      {
        "title": "1. Intervalles de $\\mathbb{R}$, intersection et réunion",
        "content": "• **Intersection $I \\cap J$** : ensemble des réels appartenant **à la fois** à $I$ et à $J$.\n• **Réunion $I \\cup J$** : ensemble des réels appartenant **à au moins l'un** des deux intervalles $I$ ou $J$.\nExemple : Si $I = [-3 ; 4]$ et $J = [1 ; 7[$, alors :\n$$I \\cap J = [1 ; 4] \\quad \\text{et} \\quad I \\cup J = [-3 ; 7[$$\n• **Inégalités strictes et larges** : crochet tourné vers l'extérieur pour exclu ($]a; b[$), vers l'intérieur pour inclus ($[a; b]$)."
      },
      {
        "title": "2. Valeur absolue et distance sur la droite numérique",
        "content": "• **Définition** : La valeur absolue d'un réel $x$, notée $|x|$, est sa distance à l'origine $0$ :\n$$|x| = \\begin{cases} x & \\text{si } x \\ge 0 \\\\ -x & \\text{si } x < 0 \\end{cases}$$\n• **Propriété géométrique** : Pour tous réels $x$ et $a$, $|x - a|$ est la **distance** entre les points d'abscisses $x$ et $a$ sur la droite graduée.\n• **Résolution d'inéquations** : Pour $r > 0$ :\n$$|x - a| \\le r \\iff a - r \\le x \\le a + r \\iff x \\in [a - r ; a + r]$$\n$$|x - a| = r \\iff x = a - r \\quad \\text{ou} \\quad x = a + r$$"
      },
      {
        "title": "3. Ordre et opérations",
        "content": "Pour tous réels $a$, $b$ et $c$ :\n• **Addition** : $a < b \\iff a + c < b + c$ (on peut ajouter ou soustraire un même nombre).\n• **Multiplication par un nombre strictement positif** : si $c > 0$, alors $a < b \\iff ac < bc$ (le sens est conservé).\n• **Multiplication par un nombre strictement négatif** : si $c < 0$, alors $a < b \\iff ac > bc$ (le sens est **inversé**).\n*Exemple* : $-2x < 6 \\iff x > \\frac{6}{-2} \\iff x > -3$."
      },
      {
        "title": "4. Comparer deux nombres",
        "content": "• **Par la différence** : $a \\le b \\iff b - a \\ge 0$. Pour comparer deux nombres, on étudie le signe de leur différence.\n*Exemple* : $\\frac{5}{7} - \\frac{7}{10} = \\frac{50 - 49}{70} = \\frac{1}{70} > 0$, donc $\\frac{5}{7} > \\frac{7}{10}$.\n• **Nombres positifs** : pour $a \\ge 0$ et $b \\ge 0$, on a $a < b \\iff a^2 < b^2 \\iff \\sqrt{a} < \\sqrt{b}$.\n• **Propriété** : si $0 < a < 1$, alors $a^2 < a$ ; si $a > 1$, alors $a^2 > a$. En effet $a^2 - a = a(a - 1)$, qui est du signe de $a - 1$ lorsque $a > 0$."
      },
      {
        "title": "5. Intervalles non bornés et encadrements",
        "content": "• $[a ; +\\infty[$ est l'ensemble des réels $x$ tels que $x \\ge a$ ; $]-\\infty ; b[$ celui des réels $x$ tels que $x < b$ ; $\\mathbb{R} = ]-\\infty ; +\\infty[$.\n• Du côté de $+\\infty$ ou $-\\infty$, le crochet est **toujours ouvert**.\n• **Encadrement** : $1{,}414 < \\sqrt{2} < 1{,}415$ est un encadrement de $\\sqrt{2}$ d'**amplitude** $10^{-3}$ ; $1{,}414$ en est une valeur approchée par défaut à $10^{-3}$ près."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une inéquation avec valeur absolue",
        "example": "Résoudre dans $\\mathbb{R}$ l'inéquation $|x - 3| \\le 2$.",
        "steps": [
          "**Étape 1 (Interprétation)** : On cherche les abscisses $x$ dont la distance au centre $a = 3$ est inférieure ou égale au rayon $r = 2$.",
          "**Étape 2 (Bornes)** : La borne inférieure est $3 - 2 = 1$ et la borne supérieure est $3 + 2 = 5$.",
          "**Étape 3 (Conclusion)** : L'ensemble des solutions est l'intervalle $S = [1 ; 5]$."
        ]
      },
      {
        "title": "Méthode : Résoudre une inéquation du type $|x - a| > r$",
        "example": "Résoudre dans $\\mathbb{R}$ l'inéquation $|x + 1| > 4$.",
        "steps": [
          "**Étape 1 (Interprétation)** : $|x + 1| = |x - (-1)|$ est la distance entre $x$ et $-1$. On cherche les réels dont la distance à $-1$ est **strictement supérieure** à $4$.",
          "**Étape 2 (Bornes)** : les réels à distance exactement $4$ de $-1$ sont $-1 - 4 = -5$ et $-1 + 4 = 3$.",
          "**Étape 3** : les solutions sont **à l'extérieur** de l'intervalle $[-5 ; 3]$, bornes exclues car l'inégalité est stricte : $x < -5$ ou $x > 3$.",
          "**Conclusion** : $S = ]-\\infty ; -5[ \\cup ]3 ; +\\infty[$. Contrôle : pour $x = 4$, $|4 + 1| = 5 > 4$."
        ]
      },
      {
        "title": "Méthode : Comparer deux expressions par le signe de leur différence",
        "example": "Montrer que pour tout réel $x$, $(x + 1)^2 \\ge 2x + 1$.",
        "steps": [
          "**Étape 1** : On calcule la différence : $(x + 1)^2 - (2x + 1) = x^2 + 2x + 1 - 2x - 1$.",
          "**Étape 2** : On réduit : $(x + 1)^2 - (2x + 1) = x^2$.",
          "**Étape 3** : Un carré est toujours positif ou nul : $x^2 \\ge 0$ pour tout réel $x$.",
          "**Conclusion** : $(x + 1)^2 - (2x + 1) \\ge 0$, donc $(x + 1)^2 \\ge 2x + 1$ pour tout réel $x$, avec égalité uniquement pour $x = 0$."
        ]
      },
      {
        "title": "Méthode : Intersection et réunion d'intervalles définis par des inégalités",
        "example": "On pose $I$ l'ensemble des réels $x$ tels que $-2 < x \\le 5$, $J$ celui des réels tels que $x \\ge 3$, et $K = ]-\\infty ; -4]$. Déterminer $I \\cap J$, $I \\cup J$ et $I \\cap K$.",
        "steps": [
          "**Étape 1** : On traduit en intervalles : $I = ]-2 ; 5]$ et $J = [3 ; +\\infty[$.",
          "**Étape 2** : On représente $I$ et $J$ sur une même droite graduée. Les réels communs vont de $3$ (inclus) à $5$ (inclus) : $I \\cap J = [3 ; 5]$.",
          "**Étape 3** : Les réels appartenant à l'un au moins des deux intervalles vont de $-2$ (exclu) jusqu'à $+\\infty$ : $I \\cup J = ]-2 ; +\\infty[$.",
          "**Conclusion** : $I \\cap J = [3 ; 5]$, $I \\cup J = ]-2 ; +\\infty[$ et $I \\cap K = \\emptyset$ (aucun réel n'est à la fois $> -2$ et $\\le -4$)."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour l'expression $|x + 4|$, le centre est $-4$ car $|x + 4| = |x - (-4)|$ !",
      "⚠️ Une valeur absolue est toujours positive ou nulle : l'équation $|x - 2| = -3$ n'a aucune solution ($S = \\emptyset$).",
      "⚠️ Multiplier ou diviser une inégalité par un nombre **négatif** change son sens : $-3x \\le 12 \\iff x \\ge -4$.",
      "⚠️ Le crochet est toujours ouvert en $\\pm\\infty$ : on écrit $[2 ; +\\infty[$, jamais $[2 ; +\\infty]$.",
      "⚠️ $|a + b| \\neq |a| + |b|$ en général : $|3 + (-5)| = 2$ alors que $|3| + |-5| = 8$."
    ],
    "flashcards": [
      {
        "q": "Que vaut $|-7{,}8|$ ?",
        "a": "$|-7{,}8| = 7{,}8$."
      },
      {
        "q": "Résoudre dans $\\mathbb{R}$ l'inéquation $|x - 5| \\le 3$.",
        "a": "$x \\in [5 - 3 ; 5 + 3] = [2 ; 8]$."
      },
      {
        "q": "Écrire sous forme d'intervalle l'ensemble des réels $x$ tels que $x > -2$.",
        "a": "$]-2 ; +\\infty[$."
      },
      {
        "q": "Résoudre dans $\\mathbb{R}$ l'équation $|x + 1| = 3$.",
        "a": "La distance entre $x$ et $-1$ vaut $3$ : $x = -4$ ou $x = 2$."
      },
      {
        "q": "Si $0 < a < 1$, comparer $a$ et $a^2$.",
        "a": "$a^2 < a$ (par exemple $0{,}5^2 = 0{,}25 < 0{,}5$)."
      }
    ]
  },

  "2N4": {
    "title": "2N4 : Équations, inéquations du premier degré et tableaux de signes",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Résoudre des équations produit-nul et équations quotient-nul.",
      "Étudier le signe de la fonction affine $x \\mapsto ax + b$ selon le signe de $a$.",
      "Dresser un tableau de signes pour un produit ou un quotient d'expressions affines.",
      "Résoudre des inéquations rationnelles en respectant les valeurs interdites.",
      "Résoudre une équation ou une inéquation du premier degré.",
      "Mettre un problème en équation et interpréter la solution."
    ],
    "keyPoints": [
      {
        "title": "1. Signe d'une expression affine $ax + b$ ($a \\neq 0$)",
        "content": "L'expression $ax + b$ s'annule en $x = -\\frac{b}{a}$.\n• Si $a > 0$ : l'expression est **négative puis positive** (fonction affine croissante).\n• Si $a < 0$ : l'expression est **positive puis négative** (fonction affine décroissante).\n\n*Règle mnémotechnique* : on met le **signe de $a$ à droite** du zéro !"
      },
      {
        "title": "2. Résolution d'inéquations produit ou quotient",
        "content": "Pour résoudre $A(x)B(x) \\ge 0$ ou $\\frac{A(x)}{B(x)} \\le 0$ :\n1. On factorise pour se ramener à un produit ou quotient comparé à **0**.\n2. Pour un quotient, on détermine impérativement les **valeurs interdites** (dénominateur non nul, double barre dans le tableau).\n3. On étudie le signe de chaque facteur sur une ligne.\n4. On applique la règle des signes par colonne pour conclure."
      },
      {
        "title": "3. Équations du premier degré, produit nul et quotient nul",
        "content": "• **Premier degré** : si $a \\neq 0$, l'équation $ax + b = 0$ admet une unique solution $x = -\\frac{b}{a}$.\n• **Théorème du produit nul** : un produit est nul si et seulement si l'un au moins de ses facteurs est nul :\n$$A \\times B = 0 \\iff A = 0 \\text{ ou } B = 0$$\n• **Quotient nul** : un quotient est nul si et seulement si son numérateur est nul **et** son dénominateur non nul :\n$$\\frac{A}{B} = 0 \\iff A = 0 \\text{ et } B \\neq 0$$"
      },
      {
        "title": "4. Règle des signes et signe d'un carré",
        "content": "• Un produit (ou un quotient) de facteurs non nuls est **positif** si le nombre de facteurs négatifs est **pair**, et **négatif** s'il est impair.\n• Un carré est toujours positif ou nul : $(x - 1)^2 \\ge 0$ pour tout réel $x$, et $(x - 1)^2 = 0 \\iff x = 1$.\n• Ainsi l'inéquation $(x - 1)^2 < 0$ n'a aucune solution, et $(x - 1)^2 > 0$ a pour ensemble de solutions $\\mathbb{R} \\setminus \\{1\\}$."
      },
      {
        "title": "5. Mettre un problème en équation",
        "content": "1. **Choisir l'inconnue** et préciser ce qu'elle représente (et ses valeurs possibles).\n2. **Traduire** l'énoncé par une équation ou une inéquation.\n3. **Résoudre**.\n4. **Vérifier** que la solution convient au contexte, puis **conclure** par une phrase.\n*Exemple* : un rectangle a une longueur égale au double de sa largeur $\\ell$ et un périmètre de $36$ cm. Alors $2(2\\ell + \\ell) = 36 \\iff 6\\ell = 36 \\iff \\ell = 6$ : la largeur vaut $6$ cm et la longueur $12$ cm."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une inéquation quotient",
        "example": "Résoudre $\\frac{2x - 6}{5 - x} \\ge 0$.",
        "steps": [
          "**Valeur interdite** : $5 - x = 0 \\iff x = 5$ (double barre sous 5).",
          "**Zéros du numérateur** : $2x - 6 = 0 \\iff x = 3$.",
          "**Signe des facteurs** : $2x - 6$ s'annule en 3 et a pour signe $+$ à droite (car $a=2 > 0$). $5 - x$ s'annule en 5 et a pour signe $-$ à droite (car $a=-1 < 0$).",
          "**Conclusion** : Le quotient est positif sur l'intervalle $[3 ; 5[$ (le 3 est inclus car inégalité large, le 5 est strictement exclu car valeur interdite)."
        ]
      },
      {
        "title": "Méthode : Se ramener à une équation produit nul",
        "example": "Résoudre dans $\\mathbb{R}$ l'équation $(x + 2)(3x - 1) = (x + 2)(x + 5)$.",
        "steps": [
          "**Étape 1** : On passe tout dans le membre de gauche : $(x + 2)(3x - 1) - (x + 2)(x + 5) = 0$.",
          "**Étape 2** : On factorise par le facteur commun $(x + 2)$ : $(x + 2)[(3x - 1) - (x + 5)] = 0$, soit $(x + 2)(2x - 6) = 0$.",
          "**Étape 3** : Produit nul : $x + 2 = 0$ ou $2x - 6 = 0$, donc $x = -2$ ou $x = 3$.",
          "**Conclusion** : $S = \\{-2 ; 3\\}$. Contrôle pour $x = 3$ : $5 \\times 8 = 40$ et $5 \\times 8 = 40$."
        ]
      },
      {
        "title": "Méthode : Résoudre une inéquation produit avec un tableau de signes",
        "example": "Résoudre dans $\\mathbb{R}$ l'inéquation $(x + 3)(4 - 2x) < 0$.",
        "steps": [
          "**Étape 1 (Zéros)** : $x + 3 = 0 \\iff x = -3$ et $4 - 2x = 0 \\iff x = 2$.",
          "**Étape 2 (Signes)** : $x + 3$ ($a = 1 > 0$) est négatif avant $-3$ et positif après. $4 - 2x$ ($a = -2 < 0$) est positif avant $2$ et négatif après.",
          "**Étape 3 (Règle des signes)** : sur $]-\\infty ; -3[$ : $(-) \\times (+) = -$ ; sur $]-3 ; 2[$ : $(+) \\times (+) = +$ ; sur $]2 ; +\\infty[$ : $(+) \\times (-) = -$.",
          "**Conclusion** : l'inégalité est stricte, les zéros sont exclus : $S = ]-\\infty ; -3[ \\cup ]2 ; +\\infty[$. Contrôle : pour $x = 3$, $6 \\times (-2) = -12 < 0$."
        ]
      },
      {
        "title": "Méthode : Inéquation avec un quotient non comparé à $0$",
        "example": "Résoudre dans $\\mathbb{R}$ l'inéquation $\\frac{x + 1}{x - 2} \\le 2$.",
        "steps": [
          "**Étape 1 (Valeur interdite)** : $x - 2 = 0 \\iff x = 2$, donc $x \\neq 2$.",
          "**Étape 2 (Comparer à 0)** : $\\frac{x + 1}{x - 2} - 2 \\le 0 \\iff \\frac{x + 1 - 2(x - 2)}{x - 2} \\le 0 \\iff \\frac{-x + 5}{x - 2} \\le 0$.",
          "**Étape 3 (Tableau de signes)** : $-x + 5$ s'annule en $5$ (positif avant, négatif après) ; $x - 2$ s'annule en $2$ (négatif avant, positif après). Le quotient est négatif sur $]-\\infty ; 2[$, positif sur $]2 ; 5[$, négatif sur $]5 ; +\\infty[$ et nul en $5$.",
          "**Conclusion** : $S = ]-\\infty ; 2[ \\cup [5 ; +\\infty[$ ($5$ inclus car l'inégalité est large, $2$ exclu car valeur interdite)."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais multiplier par le dénominateur des deux côtés d'une inéquation sans connaître son signe ! On transpose tout à gauche pour comparer à 0.",
      "⚠️ Toujours exclure les valeurs interdites dans l'ensemble des solutions avec un crochet ouvert.",
      "⚠️ Ne jamais diviser par $x$ pour « simplifier » l'équation $x^2 = 5x$ : on perdrait la solution $0$. On factorise : $x(x - 5) = 0$, d'où $S = \\{0 ; 5\\}$.",
      "⚠️ Pour un quotient nul, on vérifie que le dénominateur ne s'annule pas : $\\frac{x^2 - 4}{x - 2} = 0$ n'a que la solution $x = -2$, car $x = 2$ est une valeur interdite.",
      "⚠️ Dans un tableau de signes, une inégalité large ($\\le$, $\\ge$) inclut les zéros du **numérateur**, mais jamais les valeurs interdites."
    ],
    "flashcards": [
      {
        "q": "Où s'annule l'expression $3x - 12$ et quel est son signe après cette valeur ?",
        "a": "Elle s'annule en $x = 4$ et elle est positive ($+$) pour $x > 4$ car $a = 3 > 0$."
      },
      {
        "q": "Quelle est la valeur interdite de $\\frac{x + 1}{2x - 8}$ ?",
        "a": "$2x - 8 = 0 \\iff x = 4$."
      },
      {
        "q": "Énoncer le théorème du produit nul.",
        "a": "Un produit de facteurs est nul si et seulement si l'un au moins de ses facteurs est nul : $AB = 0 \\iff A = 0$ ou $B = 0$."
      },
      {
        "q": "Quel est le signe de $-2x + 6$ pour $x > 3$ ?",
        "a": "Négatif : l'expression s'annule en $3$ et $a = -2 < 0$, donc elle est négative à droite de $3$."
      },
      {
        "q": "Résoudre $3 - 2x \\ge 7$.",
        "a": "$-2x \\ge 4 \\iff x \\le -2$ (on divise par $-2 < 0$, le sens change). $S = ]-\\infty ; -2]$."
      }
    ]
  },

  "2A1": {
    "title": "2A1 : Notion générale de fonction, ensemble de définition et courbes",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Déterminer l'ensemble de définition d'une fonction numérique.",
      "Calculer l'image d'un réel et déterminer algébriquement ou graphiquement ses antécédents.",
      "Tracer et exploiter la courbe représentative $\\mathcal{C}_f$ dans un repère.",
      "Résoudre graphiquement des équations $f(x) = k$ et inéquations $f(x) \\le k$.",
      "Savoir qu'une fonction peut être définie par une formule, une courbe, un tableau de valeurs ou un programme Python.",
      "Déterminer par le calcul si un point appartient à une courbe et les points d'intersection de deux courbes."
    ],
    "keyPoints": [
      {
        "title": "1. Définition, image et antécédents",
        "content": "Une fonction $f$ associe à tout réel $x$ de son ensemble de définition $\\mathcal{D}_f$ un **unique** réel noté $f(x)$ appelé l'**image** de $x$.\n• Tout nombre $x$ tel que $f(x) = y$ est appelé un **antécédent** de $y$ par $f$.\n• Un nombre peut avoir **aucun, un ou plusieurs antécédents**, mais possède **au plus une image**."
      },
      {
        "title": "2. Courbe représentative et résolutions graphiques",
        "content": "La courbe représentative $\\mathcal{C}_f$ est l'ensemble des points $M(x ; y)$ tels que $x \\in \\mathcal{D}_f$ et $y = f(x)$.\n• Pour résoudre graphiquement $f(x) = k$, on trace la droite horizontale $y = k$ et on lit les **abscisses** des points d'intersection.\n• Pour résoudre $f(x) \\le g(x)$, on relève les intervalles d'abscisses où la courbe $\\mathcal{C}_f$ est située **en dessous** de $\\mathcal{C}_g$."
      },
      {
        "title": "3. Différentes façons de définir une fonction",
        "content": "• **Par une formule** : $f(x) = x^2 - 3x$.\n• **Par une courbe** : on lit les images sur l'axe des ordonnées.\n• **Par un tableau de valeurs** : on ne connaît alors que quelques images.\n• **Par un programme** : en Python, `def f(x): return x**2 - 3*x` ; l'appel `f(4)` renvoie $4^2 - 3 \\times 4 = 4$."
      },
      {
        "title": "4. Ensemble de définition : les deux règles de Seconde",
        "content": "• **Quotient** : $\\frac{A(x)}{B(x)}$ est défini si et seulement si $B(x) \\neq 0$.\n*Exemple* : $f(x) = \\frac{1}{x - 3}$ a pour ensemble de définition $\\mathcal{D}_f = \\mathbb{R} \\setminus \\{3\\} = ]-\\infty ; 3[ \\cup ]3 ; +\\infty[$.\n• **Racine carrée** : $\\sqrt{A(x)}$ est définie si et seulement si $A(x) \\ge 0$.\n*Exemple* : $g(x) = \\sqrt{2x + 4}$ : $2x + 4 \\ge 0 \\iff x \\ge -2$, donc $\\mathcal{D}_g = [-2 ; +\\infty[$.\n• Un polynôme (par exemple $x^2 - 3x + 1$) est défini sur $\\mathbb{R}$ tout entier."
      },
      {
        "title": "5. Appartenance d'un point à une courbe",
        "content": "Un point $M(a ; b)$ appartient à la courbe $\\mathcal{C}_f$ si et seulement si $a \\in \\mathcal{D}_f$ **et** $f(a) = b$.\n*Exemple* avec $f(x) = x^2 - 2x$ :\n• $A(3 ; 3)$ : $f(3) = 9 - 6 = 3$, donc $A \\in \\mathcal{C}_f$.\n• $B(-1 ; 2)$ : $f(-1) = 1 + 2 = 3 \\neq 2$, donc $B \\notin \\mathcal{C}_f$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver les antécédents de 0 par le calcul",
        "example": "Soit $f(x) = x^2 - 9$. Déterminer les antécédents de 0 par $f$.",
        "steps": [
          "**Étape 1** : On pose l'équation $f(x) = 0 \\iff x^2 - 9 = 0$.",
          "**Étape 2** : On factorise avec l'identité remarquable $a^2 - b^2$ : $(x - 3)(x + 3) = 0$.",
          "**Étape 3** : Règle du produit-nul : $x - 3 = 0$ ou $x + 3 = 0$, donc $x = 3$ ou $x = -3$. Les antécédents de 0 sont $-3$ et $3$."
        ]
      },
      {
        "title": "Méthode : Déterminer l'ensemble de définition d'une fonction",
        "example": "Déterminer l'ensemble de définition de $f(x) = \\sqrt{6 - 2x}$ et de $g(x) = \\frac{2x + 1}{x^2 - 4}$.",
        "steps": [
          "**Étape 1 (Racine)** : $f(x)$ existe si et seulement si $6 - 2x \\ge 0 \\iff -2x \\ge -6 \\iff x \\le 3$ (division par $-2 < 0$, le sens change).",
          "**Étape 2** : donc $\\mathcal{D}_f = ]-\\infty ; 3]$.",
          "**Étape 3 (Quotient)** : on cherche les valeurs interdites de $g$ : $x^2 - 4 = 0 \\iff (x - 2)(x + 2) = 0 \\iff x = 2$ ou $x = -2$.",
          "**Conclusion** : $\\mathcal{D}_f = ]-\\infty ; 3]$ et $\\mathcal{D}_g = \\mathbb{R} \\setminus \\{-2 ; 2\\}$."
        ]
      },
      {
        "title": "Méthode : Calculer les points d'intersection de deux courbes",
        "example": "Soient $f(x) = x^2 + 2x - 3$ et $g(x) = 2x + 1$ définies sur $\\mathbb{R}$. Déterminer les points d'intersection de $\\mathcal{C}_f$ et $\\mathcal{C}_g$.",
        "steps": [
          "**Étape 1** : Les abscisses des points d'intersection sont les solutions de $f(x) = g(x)$, soit $x^2 + 2x - 3 = 2x + 1$.",
          "**Étape 2** : On simplifie : $x^2 - 4 = 0 \\iff (x - 2)(x + 2) = 0 \\iff x = 2$ ou $x = -2$.",
          "**Étape 3** : On calcule les ordonnées : $g(2) = 5$ et $g(-2) = -3$. Contrôle : $f(2) = 4 + 4 - 3 = 5$ et $f(-2) = 4 - 4 - 3 = -3$.",
          "**Conclusion** : les courbes se coupent aux points $(-2 ; -3)$ et $(2 ; 5)$."
        ]
      },
      {
        "title": "Méthode : Construire un tableau de valeurs avec Python",
        "example": "Écrire un programme Python affichant les images des entiers de $-2$ à $3$ par $f(x) = x^2 - 3x$, puis l'exploiter.",
        "steps": [
          "**Étape 1** : On définit la fonction : `def f(x): return x**2 - 3*x`.",
          "**Étape 2** : On parcourt les entiers avec une boucle : `for x in range(-2, 4): print(x, f(x))` (`range(-2, 4)` donne $-2, -1, 0, 1, 2, 3$).",
          "**Étape 3** : Le programme affiche : $f(-2) = 10$, $f(-1) = 4$, $f(0) = 0$, $f(1) = -2$, $f(2) = -2$, $f(3) = 0$.",
          "**Conclusion** : on lit que $0$ et $3$ sont des antécédents de $0$, et que $-2$ a (au moins) deux antécédents, $1$ et $2$."
        ]
      }
    ],
    "traps": [
      "⚠️ Confusion image / antécédent : l'image se lit sur l'axe des **ordonnées** ($y$), l'antécédent sur l'axe des **abscisses** ($x$).",
      "⚠️ Pour l'ensemble de définition, le dénominateur ne doit jamais être nul et l'expression sous une racine carrée doit être $\\ge 0$.",
      "⚠️ Pour l'image d'un nombre négatif, on met des parenthèses : si $f(x) = x^2$, alors $f(-3) = (-3)^2 = 9$ et non $-9$.",
      "⚠️ $f(x + 1)$ n'est pas $f(x) + 1$ : pour $f(x) = x^2$, $f(x + 1) = (x + 1)^2 = x^2 + 2x + 1$.",
      "⚠️ Une courbe ne représente une fonction que si toute droite verticale la coupe en **au plus un point** (chaque $x$ a au plus une image) : un cercle n'est pas la courbe d'une fonction."
    ],
    "flashcards": [
      {
        "q": "Combien d'images un réel $x$ peut-il avoir au maximum par une fonction $f$ ?",
        "a": "Une seule image (par définition même d'une fonction)."
      },
      {
        "q": "Comment résout-on graphiquement l'équation $f(x) = 2$ ?",
        "a": "On trace la droite horizontale d'équation $y = 2$ et on lit les abscisses $x$ des points d'intersection avec la courbe $\\mathcal{C}_f$."
      },
      {
        "q": "Le point $A(2 ; 5)$ appartient-il à la courbe de $f(x) = 3x - 1$ ?",
        "a": "Oui, car $f(2) = 3 \\times 2 - 1 = 5$."
      },
      {
        "q": "Quel est l'ensemble de définition de $x \\mapsto \\sqrt{x - 4}$ ?",
        "a": "$x - 4 \\ge 0 \\iff x \\ge 4$, donc $[4 ; +\\infty[$."
      },
      {
        "q": "Comment lit-on graphiquement l'image de $3$ par $f$ ?",
        "a": "On repère le point de $\\mathcal{C}_f$ d'abscisse $3$ et on lit son **ordonnée**."
      }
    ]
  },

  "2A2": {
    "title": "2A2 : Variations et extremums d'une fonction",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Comprendre la définition formelle de la croissance et de la décroissance sur un intervalle.",
      "Dresser et interpréter un tableau de variations complet.",
      "Définir et identifier le maximum et le minimum d'une fonction sur un intervalle.",
      "Comparer des images à l'aide du sens de variation sans calcul explicite.",
      "Démontrer le sens de variation d'une fonction affine ou de la fonction carré à l'aide de la définition.",
      "Exploiter un tableau de variations pour déterminer le nombre de solutions d'une équation $f(x) = k$."
    ],
    "keyPoints": [
      {
        "title": "1. Définitions formelles de la monotonie",
        "content": "Soit $f$ une fonction définie sur un intervalle $I$ :\n• $f$ est **strictement croissante** sur $I$ si pour tous $a, b \\in I$ :\n$$a < b \\implies f(a) < f(b)$$ *(la fonction conserve l'ordre)*.\n• $f$ est **strictement décroissante** sur $I$ si pour tous $a, b \\in I$ :\n$$a < b \\implies f(a) > f(b)$$ *(la fonction inverse l'ordre)*."
      },
      {
        "title": "2. Extremums : Maximum et Minimum",
        "content": "Soit $f$ définie sur $I$ et $x_0 \\in I$ :\n• $M = f(x_0)$ est le **maximum** de $f$ sur $I$ si pour tout $x \\in I$, $f(x) \\le M$.\n• $m = f(x_0)$ est le **minimum** de $f$ sur $I$ si pour tout $x \\in I$, $f(x) \\ge m$."
      },
      {
        "title": "3. Tableau de variations",
        "content": "Une fonction est **monotone** sur un intervalle $I$ si elle est soit croissante, soit décroissante sur tout $I$.\nLe **tableau de variations** résume les intervalles de monotonie :\n• 1re ligne : les valeurs de $x$ (bornes de $\\mathcal{D}_f$ et abscisses où le sens de variation change) ;\n• 2e ligne : des flèches montantes (croissance) ou descendantes (décroissance), avec les images aux extrémités des flèches."
      },
      {
        "title": "4. Sens de variation d'une fonction affine",
        "content": "Soit $f(x) = mx + p$ définie sur $\\mathbb{R}$.\n• Si $m > 0$, $f$ est strictement croissante ; si $m < 0$, $f$ est strictement décroissante ; si $m = 0$, $f$ est constante.\n**Démonstration** : soient $a < b$. Alors $f(b) - f(a) = (mb + p) - (ma + p) = m(b - a)$. Comme $b - a > 0$, $f(b) - f(a)$ a le signe de $m$. Si $m > 0$, $f(a) < f(b)$ : l'ordre est conservé."
      },
      {
        "title": "5. Existence d'un extremum",
        "content": "• Un maximum peut être atteint au sommet d'une flèche montante **ou en une borne** de l'intervalle : il faut comparer toutes les valeurs « hautes » du tableau.\n• Une fonction n'admet pas toujours de maximum : sur $]0 ; 1[$, la fonction $x \\mapsto x$ prend des valeurs aussi proches de $1$ que l'on veut, sans jamais atteindre $1$.\n• **En Python**, on peut approcher le maximum par **balayage** :\n```python\ndef maximum(f, a, b, pas):\n    M = f(a)\n    x = a\n    while x <= b:\n        if f(x) > M:\n            M = f(x)\n        x = x + pas\n    return M\n```"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Comparer deux images avec le tableau de variations",
        "example": "Sachant que $f$ est strictement décroissante sur $[1 ; 5]$, comparer $f(2)$ et $f(4{,}5)$.",
        "steps": [
          "**Étape 1** : On compare les antécédents : $1 \\le 2 < 4{,}5 \\le 5$.",
          "**Étape 2** : On applique la propriété de décroissance : une fonction décroissante change le sens des inégalités.",
          "**Étape 3** : On conclut : $f(2) > f(4{,}5)$."
        ]
      },
      {
        "title": "Méthode : Démontrer un sens de variation avec la définition",
        "example": "Démontrer que la fonction carré $f(x) = x^2$ est strictement croissante sur $[0 ; +\\infty[$.",
        "steps": [
          "**Étape 1** : Soient $a$ et $b$ deux réels de $[0 ; +\\infty[$ tels que $a < b$. On étudie le signe de $f(b) - f(a)$.",
          "**Étape 2** : $f(b) - f(a) = b^2 - a^2 = (b - a)(b + a)$ (identité remarquable).",
          "**Étape 3** : $b - a > 0$ car $a < b$, et $b + a > 0$ car $a \\ge 0$ et $b > a \\ge 0$. Le produit est donc strictement positif.",
          "**Conclusion** : $f(b) - f(a) > 0$, donc $f(a) < f(b)$ : $f$ est strictement croissante sur $[0 ; +\\infty[$."
        ]
      },
      {
        "title": "Méthode : Exploiter un tableau de variations",
        "example": "$f$ est définie sur $[-4 ; 6]$ : elle croît de $f(-4) = 2$ à $f(-1) = 7$, décroît jusqu'à $f(3) = -2$, puis croît jusqu'à $f(6) = 4$ (sa courbe est tracée d'un seul tenant). Déterminer ses extremums et le nombre de solutions de $f(x) = 0$.",
        "steps": [
          "**Étape 1 (Maximum)** : les valeurs « hautes » sont $f(-1) = 7$ et $f(6) = 4$. Le maximum de $f$ sur $[-4 ; 6]$ est $7$, atteint en $x = -1$.",
          "**Étape 2 (Minimum)** : les valeurs « basses » sont $f(-4) = 2$ et $f(3) = -2$. Le minimum est $-2$, atteint en $x = 3$.",
          "**Étape 3 (Solutions de $f(x) = 0$)** : sur $[-4 ; -1]$, $f(x) \\ge 2$ : pas de solution. Sur $[-1 ; 3]$, $f$ décroît strictement de $7$ à $-2$ : une solution. Sur $[3 ; 6]$, $f$ croît strictement de $-2$ à $4$ : une solution.",
          "**Conclusion** : max $= 7$ en $-1$, min $= -2$ en $3$, et l'équation $f(x) = 0$ admet exactement $2$ solutions."
        ]
      },
      {
        "title": "Méthode : Extremums d'une fonction de référence sur un intervalle",
        "example": "Déterminer le minimum et le maximum de $f(x) = x^2$ sur l'intervalle $[-2 ; 3]$.",
        "steps": [
          "**Étape 1** : $f$ est décroissante sur $[-2 ; 0]$ et croissante sur $[0 ; 3]$.",
          "**Étape 2** : On calcule les valeurs utiles : $f(-2) = 4$, $f(0) = 0$, $f(3) = 9$.",
          "**Étape 3** : La plus petite valeur est $f(0) = 0$ ; la plus grande des valeurs aux bornes est $f(3) = 9$.",
          "**Conclusion** : sur $[-2 ; 3]$, le minimum de $f$ est $0$ (atteint en $0$) et son maximum est $9$ (atteint en $3$)."
        ]
      }
    ],
    "traps": [
      "⚠️ Un extremum est une **valeur de la fonction** (en ordonnée), atteint en un point (en abscisse). Ex: « le maximum est 8, atteint en $x = 3$ ».",
      "⚠️ Ne pas déduire le signe d'une fonction de ses variations : une fonction croissante peut être négative !",
      "⚠️ On ne peut comparer $f(a)$ et $f(b)$ grâce au sens de variation que si $a$ et $b$ appartiennent à un **même intervalle** où $f$ est monotone.",
      "⚠️ Le maximum n'est pas forcément au sommet d'une flèche : il peut être atteint à une extrémité de l'intervalle d'étude.",
      "⚠️ « $f$ est croissante » ne signifie pas « $f(x)$ est grand » : $x \\mapsto x - 100$ est croissante et pourtant $f(50) = -50 < 0$."
    ],
    "flashcards": [
      {
        "q": "Si $f$ est strictement décroissante et $a < b$, que peut-on dire de $f(a)$ et $f(b)$ ?",
        "a": "$f(a) > f(b)$ (l'ordre est inversé)."
      },
      {
        "q": "Où se lit le maximum d'une fonction dans un tableau de variations ?",
        "a": "Sur la ligne des valeurs de $f(x)$ : au sommet d'une flèche montante ou à une extrémité du tableau (il faut comparer ces valeurs)."
      },
      {
        "q": "Quel est le sens de variation de $f(x) = -2x + 7$ sur $\\mathbb{R}$ ?",
        "a": "Strictement décroissante, car le coefficient directeur $m = -2$ est négatif."
      },
      {
        "q": "$f$ est strictement croissante sur $[0 ; 10]$. Comparer $f(3)$ et $f(7)$.",
        "a": "$3 < 7$ et $f$ conserve l'ordre, donc $f(3) < f(7)$."
      },
      {
        "q": "Une fonction définie sur un intervalle ouvert admet-elle toujours un maximum ?",
        "a": "Non : $x \\mapsto x$ sur $]0 ; 1[$ n'a pas de maximum."
      }
    ]
  },

  "2A3": {
    "title": "2A3 : Fonctions de référence : carré, inverse, racine et cube",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Connaître les propriétés, courbes et variations des fonctions carré $x^2$, inverse $1/x$, racine $\\sqrt{x}$ et cube $x^3$.",
      "Maîtriser la notion de parité : fonction paire (symétrie par rapport à l'axe des ordonnées) et impaire (symétrie par rapport à l'origine).",
      "Résoudre des équations et inéquations du type $x^2 \\le k$ et $\\sqrt{x} \\ge k$.",
      "Étudier la position relative des courbes d'équations $y = x$, $y = x^2$ et $y = x^3$ pour $x \\ge 0$.",
      "Encadrer $x^2$, $\\frac{1}{x}$ ou $\\sqrt{x}$ à partir d'un encadrement de $x$."
    ],
    "keyPoints": [
      {
        "title": "1. Synthèse des fonctions de référence",
        "content": "• **Fonction carré ($x \\mapsto x^2$)** : Définie sur $\\mathbb{R}$, paire ($(-x)^2 = x^2$), décroissante sur $]-\\infty; 0]$ et croissante sur $[0; +\\infty[$. Sa courbe est une **parabole** de sommet $(0,0)$.\n• **Fonction inverse ($x \\mapsto \\frac{1}{x}$)** : Définie sur $\\mathbb{R}^*$, impaire ($\\frac{1}{-x} = -\\frac{1}{x}$), strictement décroissante sur $]-\\infty; 0[$ et sur $]0; +\\infty[$. Sa courbe est une **hyperbole**.\n• **Fonction racine carrée ($x \\mapsto \\sqrt{x}$)** : Définie sur $[0; +\\infty[$, strictement croissante sur $[0; +\\infty[$.\n• **Fonction cube ($x \\mapsto x^3$)** : Définie sur $\\mathbb{R}$, impaire, strictement croissante sur $\\mathbb{R}$."
      },
      {
        "title": "2. Parité : définitions précises",
        "content": "Soit $f$ une fonction dont l'ensemble de définition $\\mathcal{D}$ est symétrique par rapport à $0$ (si $x \\in \\mathcal{D}$, alors $-x \\in \\mathcal{D}$).\n• $f$ est **paire** si pour tout $x \\in \\mathcal{D}$, $f(-x) = f(x)$ : sa courbe est symétrique par rapport à l'axe des ordonnées.\n• $f$ est **impaire** si pour tout $x \\in \\mathcal{D}$, $f(-x) = -f(x)$ : sa courbe est symétrique par rapport à l'origine $O$.\n*Exemple* : $g(x) = x^3 - 2x$ est impaire car $g(-x) = -x^3 + 2x = -(x^3 - 2x) = -g(x)$.\nLa fonction racine carrée n'est ni paire ni impaire : $[0 ; +\\infty[$ n'est pas symétrique par rapport à $0$."
      },
      {
        "title": "3. Positions relatives de $x$, $x^2$ et $x^3$ pour $x \\ge 0$",
        "content": "• Si $0 \\le x \\le 1$ : $x^3 \\le x^2 \\le x$.\n• Si $x \\ge 1$ : $x \\le x^2 \\le x^3$.\n**Démonstration** : $x^2 - x = x(x - 1)$ et $x^3 - x^2 = x^2(x - 1)$. Pour $x \\ge 0$, ces deux différences ont le signe de $x - 1$.\nGraphiquement, sur $[0 ; 1]$ la courbe de $x \\mapsto x^3$ est sous la parabole, elle-même sous la droite $y = x$ ; l'ordre s'inverse sur $[1 ; +\\infty[$. Les trois courbes passent par $(0 ; 0)$ et $(1 ; 1)$."
      },
      {
        "title": "4. Équations avec les fonctions de référence",
        "content": "• $x^2 = k$ : si $k > 0$, deux solutions $-\\sqrt{k}$ et $\\sqrt{k}$ ; si $k = 0$, une solution $0$ ; si $k < 0$, aucune solution.\n• $\\sqrt{x} = k$ : si $k \\ge 0$, une unique solution $x = k^2$ ; si $k < 0$, aucune solution.\n• $\\frac{1}{x} = k$ : si $k \\neq 0$, une unique solution $x = \\frac{1}{k}$ ; si $k = 0$, aucune solution.\n• $x^3 = k$ : toujours une unique solution réelle (par exemple $x^3 = -8 \\iff x = -2$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre $x^2 \\le a$ ($a > 0$)",
        "example": "Résoudre dans $\\mathbb{R}$ l'inéquation $x^2 \\le 9$.",
        "steps": [
          "**Étape 1** : On utilise la parité et les variations de la fonction carré : $x^2 \\le 9 \\iff -\\sqrt{9} \\le x \\le \\sqrt{9}$.",
          "**Étape 2** : On conclut : $S = [-3 ; 3]$."
        ]
      },
      {
        "title": "Méthode : Résoudre une inéquation avec la fonction inverse",
        "example": "Résoudre dans $\\mathbb{R}^*$ l'inéquation $\\frac{1}{x} \\le 2$.",
        "steps": [
          "**Étape 1 (Cas $x < 0$)** : alors $\\frac{1}{x} < 0 < 2$ : tous les réels strictement négatifs sont solutions.",
          "**Étape 2 (Cas $x > 0$)** : la fonction inverse est strictement décroissante sur $]0 ; +\\infty[$ et $2 = \\frac{1}{0{,}5}$. Donc $\\frac{1}{x} \\le \\frac{1}{0{,}5} \\iff x \\ge 0{,}5$.",
          "**Étape 3 (Contrôle)** : $x = 1$ donne $1 \\le 2$ (solution) ; $x = 0{,}25$ donne $4 > 2$ (pas solution).",
          "**Conclusion** : $S = ]-\\infty ; 0[ \\cup [0{,}5 ; +\\infty[$."
        ]
      },
      {
        "title": "Méthode : Encadrer une image à l'aide des variations",
        "example": "Sachant que $-3 \\le x \\le -1$, encadrer $x^2$ puis $\\frac{1}{x}$.",
        "steps": [
          "**Étape 1** : L'intervalle $[-3 ; -1]$ est inclus dans $]-\\infty ; 0[$, où les fonctions carré et inverse sont toutes deux strictement **décroissantes** : elles inversent l'ordre.",
          "**Étape 2 (Carré)** : $-3 \\le x \\le -1 \\implies (-3)^2 \\ge x^2 \\ge (-1)^2$, soit $1 \\le x^2 \\le 9$.",
          "**Étape 3 (Inverse)** : $-3 \\le x \\le -1 \\implies \\frac{1}{-3} \\ge \\frac{1}{x} \\ge \\frac{1}{-1}$, soit $-1 \\le \\frac{1}{x} \\le -\\frac{1}{3}$.",
          "**Conclusion** : $1 \\le x^2 \\le 9$ et $-1 \\le \\frac{1}{x} \\le -\\frac{1}{3}$."
        ]
      },
      {
        "title": "Méthode : Démontrer que la fonction inverse est décroissante sur $]0 ; +\\infty[$",
        "example": "Soient $a$ et $b$ deux réels tels que $0 < a < b$. Comparer $\\frac{1}{a}$ et $\\frac{1}{b}$.",
        "steps": [
          "**Étape 1** : On étudie le signe de la différence : $\\frac{1}{b} - \\frac{1}{a} = \\frac{a - b}{ab}$.",
          "**Étape 2** : $a - b < 0$ car $a < b$, et $ab > 0$ car $a$ et $b$ sont strictement positifs.",
          "**Étape 3** : Le quotient d'un nombre négatif par un nombre positif est négatif : $\\frac{1}{b} - \\frac{1}{a} < 0$.",
          "**Conclusion** : $\\frac{1}{b} < \\frac{1}{a}$ : la fonction inverse inverse l'ordre, elle est strictement décroissante sur $]0 ; +\\infty[$."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention pour $x^2 \\ge 9$ : les solutions sont les valeurs à l'extérieur des racines, soit $S = ]-\\infty ; -3] \\cup [3 ; +\\infty[$ !",
      "⚠️ La fonction inverse n'est PAS décroissante sur $\\mathbb{R}^*$ tout entier, mais séparément sur chaque intervalle $]-\\infty; 0[$ et $]0; +\\infty[$.",
      "⚠️ Si $-2 \\le x \\le 3$, on n'a **pas** $4 \\le x^2 \\le 9$ : l'intervalle contient $0$, où la fonction carré change de sens. On a en réalité $0 \\le x^2 \\le 9$.",
      "⚠️ L'équation $x^2 = 16$ a **deux** solutions : $-4$ et $4$. Ne pas oublier la solution négative.",
      "⚠️ Élever au carré n'agrandit pas toujours un nombre : pour $0 < x < 1$, $x^2 < x$ (par exemple $0{,}5^2 = 0{,}25$)."
    ],
    "flashcards": [
      {
        "q": "Quelle symétrie présente la courbe d'une fonction paire ?",
        "a": "Une symétrie axiale par rapport à l'axe des ordonnées $(Oy)$."
      },
      {
        "q": "Quel est l'ensemble de définition de la fonction racine carrée ?",
        "a": "$[0 ; +\\infty[$ (les réels positifs ou nuls)."
      },
      {
        "q": "Résoudre $\\sqrt{x} = 5$.",
        "a": "$x = 5^2 = 25$."
      },
      {
        "q": "Pour $x \\ge 1$, ranger $x$, $x^2$ et $x^3$ dans l'ordre croissant.",
        "a": "$x \\le x^2 \\le x^3$."
      },
      {
        "q": "Résoudre $\\sqrt{x} \\ge 3$.",
        "a": "La fonction racine est croissante sur $[0 ; +\\infty[$ : $\\sqrt{x} \\ge \\sqrt{9} \\iff x \\ge 9$. $S = [9 ; +\\infty[$."
      }
    ]
  },

  "2G1": {
    "title": "2G1 : Repérage cartésien, milieu d'un segment et distance dans le plan",
    "domain": "Géométrie",
    "objectives": [
      "Calculer les coordonnées du milieu d'un segment dans un repère quelconque.",
      "Calculer la distance euclidienne entre deux points dans un repère **orthonormé**.",
      "Démontrer géométriquement qu'un triangle est rectangle, isocèle ou équilatéral.",
      "Démontrer qu'un quadrilatère est un parallélogramme, rectangle ou losange.",
      "Distinguer repère quelconque, orthogonal et orthonormé.",
      "Calculer les coordonnées du symétrique d'un point ou du quatrième sommet d'un parallélogramme."
    ],
    "keyPoints": [
      {
        "title": "1. Formules fondamentales de géométrie analytique",
        "content": "Soient $A(x_A ; y_A)$ et $B(x_B ; y_B)$ deux points du plan :\n• **Coordonnées du milieu $M$ du segment $[AB]$** (valable dans tout repère) :\n$$x_M = \\frac{x_A + x_B}{2} \\quad \\text{et} \\quad y_M = \\frac{y_A + y_B}{2}$$\n• **Distance $AB$** (valable **uniquement dans un repère orthonormé**) :\n$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$"
      },
      {
        "title": "2. Les différents types de repères",
        "content": "Un repère du plan est défini par trois points non alignés $(O, I, J)$ : $O$ est l'origine, $(OI)$ l'axe des abscisses, $(OJ)$ l'axe des ordonnées.\n• **Repère orthogonal** : les axes $(OI)$ et $(OJ)$ sont perpendiculaires.\n• **Repère orthonormé** : il est orthogonal **et** $OI = OJ = 1$ (même unité sur les deux axes).\nChaque point $M$ a un unique couple de coordonnées $(x ; y)$ : $x$ est l'**abscisse**, $y$ l'**ordonnée**."
      },
      {
        "title": "3. Caractériser les quadrilatères et les triangles",
        "content": "• **Parallélogramme** : quadrilatère dont les diagonales ont le **même milieu**.\n• **Rectangle** : parallélogramme dont les diagonales ont la **même longueur**.\n• **Losange** : parallélogramme ayant deux côtés consécutifs de même longueur.\n• **Carré** : à la fois rectangle et losange.\n• **Triangle rectangle** (réciproque du théorème de Pythagore) : si $BC^2 = AB^2 + AC^2$, alors $ABC$ est rectangle en $A$.\n• **Triangle isocèle en $A$** : $AB = AC$."
      },
      {
        "title": "4. Symétrique d'un point et cercle",
        "content": "• $A'$ est le **symétrique** de $A$ par rapport à $B$ si et seulement si $B$ est le milieu de $[AA']$. On en déduit :\n$$x_{A'} = 2x_B - x_A \\quad \\text{et} \\quad y_{A'} = 2y_B - y_A$$\n• Dans un repère orthonormé, un point $M$ appartient au **cercle** de centre $\\Omega$ et de rayon $r$ si et seulement si $\\Omega M = r$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Prouver qu'un quadrilatère est un parallélogramme",
        "example": "Soient $A(-1 ; 2)$, $B(3 ; 4)$, $C(5 ; 1)$ et $D(1 ; -1)$. Démontrer que $ABCD$ est un parallélogramme.",
        "steps": [
          "**Étape 1** : On calcule les coordonnées du milieu $K$ de la première diagonale $[AC]$ : $x_K = \\frac{-1 + 5}{2} = 2$ et $y_K = \\frac{2 + 1}{2} = 1{,}5$.",
          "**Étape 2** : On calcule les coordonnées du milieu $K'$ de la seconde diagonale $[BD]$ : $x_{K'} = \\frac{3 + 1}{2} = 2$ et $y_{K'} = \\frac{4 + (-1)}{2} = 1{,}5$.",
          "**Étape 3** : Comme $K = K'$, les diagonales $[AC]$ et $[BD]$ ont le même milieu, donc $ABCD$ est un parallélogramme."
        ]
      },
      {
        "title": "Méthode : Démontrer qu'un triangle est rectangle (et isocèle)",
        "example": "Dans un repère orthonormé, on donne $A(1 ; 1)$, $B(5 ; 3)$ et $C(3 ; 7)$. Quelle est la nature du triangle $ABC$ ?",
        "steps": [
          "**Étape 1** : On calcule les carrés des longueurs : $AB^2 = (5 - 1)^2 + (3 - 1)^2 = 16 + 4 = 20$.",
          "**Étape 2** : $BC^2 = (3 - 5)^2 + (7 - 3)^2 = 4 + 16 = 20$ et $AC^2 = (3 - 1)^2 + (7 - 1)^2 = 4 + 36 = 40$.",
          "**Étape 3** : Le plus grand côté est $[AC]$ et $AB^2 + BC^2 = 20 + 20 = 40 = AC^2$. D'après la réciproque du théorème de Pythagore, $ABC$ est rectangle en $B$.",
          "**Conclusion** : de plus $AB = BC = \\sqrt{20} = 2\\sqrt{5}$, donc $ABC$ est **rectangle isocèle en $B$**."
        ]
      },
      {
        "title": "Méthode : Calculer le quatrième sommet d'un parallélogramme",
        "example": "Soient $A(-2 ; 1)$, $B(3 ; 2)$ et $C(4 ; -1)$. Déterminer les coordonnées du point $D$ tel que $ABCD$ soit un parallélogramme.",
        "steps": [
          "**Étape 1** : $ABCD$ est un parallélogramme si et seulement si $[AC]$ et $[BD]$ ont le même milieu $K$.",
          "**Étape 2** : Milieu de $[AC]$ : $x_K = \\frac{-2 + 4}{2} = 1$ et $y_K = \\frac{1 + (-1)}{2} = 0$, donc $K(1 ; 0)$.",
          "**Étape 3** : $D$ est le symétrique de $B$ par rapport à $K$ : $x_D = 2 \\times 1 - 3 = -1$ et $y_D = 2 \\times 0 - 2 = -2$.",
          "**Conclusion** : $D(-1 ; -2)$. Contrôle : le milieu de $[BD]$ est $\\left(\\frac{3 - 1}{2} ; \\frac{2 - 2}{2}\\right) = (1 ; 0) = K$."
        ]
      },
      {
        "title": "Méthode : Cercle défini par un diamètre",
        "example": "Dans un repère orthonormé, $A(-1 ; 2)$ et $B(5 ; -6)$. Déterminer le centre $\\Omega$ et le rayon $r$ du cercle $\\mathcal{C}$ de diamètre $[AB]$. Le point $C(5 ; 2)$ appartient-il à $\\mathcal{C}$ ?",
        "steps": [
          "**Étape 1 (Centre)** : $\\Omega$ est le milieu de $[AB]$ : $\\Omega\\left(\\frac{-1 + 5}{2} ; \\frac{2 + (-6)}{2}\\right) = (2 ; -2)$.",
          "**Étape 2 (Rayon)** : $AB = \\sqrt{(5 + 1)^2 + (-6 - 2)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$, donc $r = \\frac{AB}{2} = 5$.",
          "**Étape 3** : $\\Omega C = \\sqrt{(5 - 2)^2 + (2 + 2)^2} = \\sqrt{9 + 16} = 5 = r$.",
          "**Conclusion** : $C \\in \\mathcal{C}$. Le triangle $ABC$, inscrit dans un cercle de diamètre $[AB]$, est donc rectangle en $C$ (en effet $AC^2 + BC^2 = 36 + 64 = 100 = AB^2$)."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas oublier que la formule de la distance avec les carrés n'est valable que si le repère est **orthonormé** !",
      "⚠️ Attention aux signes négatifs lors des soustractions : $(x_B - x_A) = (3 - (-2)) = 3 + 2 = 5$.",
      "⚠️ Les diagonales du quadrilatère $ABCD$ sont $[AC]$ et $[BD]$ (sommets opposés), et non $[AB]$ et $[CD]$.",
      "⚠️ Pour appliquer la réciproque de Pythagore, on compare le carré du **plus grand** côté à la somme des carrés des deux autres, avec des valeurs **exactes** ($\\sqrt{20}$ et non $4{,}47$).",
      "⚠️ Des diagonales de même milieu prouvent seulement que $ABCD$ est un parallélogramme : pour un rectangle, il faut en plus montrer que $AC = BD$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule des coordonnées du milieu d'un segment $[AB]$ ?",
        "a": "$M\\left(\\frac{x_A + x_B}{2} ; \\frac{y_A + y_B}{2}\\right)$."
      },
      {
        "q": "Calculer la distance $AB$ entre $A(1 ; 2)$ et $B(4 ; 6)$ dans un repère orthonormé.",
        "a": "$AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
      },
      {
        "q": "Coordonnées du symétrique $A'$ de $A(2 ; -1)$ par rapport à $B(4 ; 3)$ ?",
        "a": "$x_{A'} = 2 \\times 4 - 2 = 6$ et $y_{A'} = 2 \\times 3 - (-1) = 7$ : $A'(6 ; 7)$."
      },
      {
        "q": "Qu'est-ce qu'un repère orthonormé ?",
        "a": "Un repère dont les axes sont perpendiculaires et qui a la même unité de longueur sur les deux axes ($OI = OJ = 1$)."
      },
      {
        "q": "Dans un repère orthonormé, $M(3 ; 4)$ appartient-il au cercle de centre $O$ et de rayon $5$ ?",
        "a": "Oui : $OM = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$."
      }
    ]
  },

  "2G2": {
    "title": "2G2 : Vecteurs du plan, translation et déterminant (colinéarité)",
    "domain": "Géométrie",
    "objectives": [
      "Définir un vecteur par sa direction, son sens et sa norme.",
      "Appliquer la relation de Chasles $\\vec{AB} + \\vec{BC} = \\vec{AC}$ et la règle du parallélogramme.",
      "Calculer les coordonnées d'un vecteur $\\vec{AB}(x_B - x_A ; y_B - y_A)$ et sa norme.",
      "Utiliser le déterminant $\\det(\\vec{u}, \\vec{v}) = xy' - yx' = 0$ pour tester la colinéarité et prouver l'alignement ou le parallélisme.",
      "Calculer les coordonnées d'une somme de vecteurs et du produit d'un vecteur par un réel.",
      "Caractériser un parallélogramme par une égalité vectorielle."
    ],
    "keyPoints": [
      {
        "title": "1. Coordonnées et déterminant de deux vecteurs",
        "content": "Dans un repère cartésien :\n• Pour $A(x_A ; y_A)$ et $B(x_B ; y_B)$ : $$\\vec{AB}\\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$$\n• Norme dans un repère orthonormé : $||\\vec{u}|| = \\sqrt{x^2 + y^2}$.\n• **Critère de colinéarité (Déterminant)** : Deux vecteurs $\\vec{u}(x ; y)$ et $\\vec{v}(x' ; y')$ sont colinéaires si et seulement si :\n$$\\det(\\vec{u}, \\vec{v}) = xy' - yx' = 0$$"
      },
      {
        "title": "2. Translation et vecteur",
        "content": "La **translation** qui transforme $A$ en $B$ associe à tout point $M$ l'unique point $M'$ tel que $ABM'M$ soit un parallélogramme (éventuellement aplati). On dit que $M'$ est l'image de $M$ par la translation de vecteur $\\vec{AB}$.\nLe vecteur $\\vec{AB}$ est caractérisé par :\n• sa **direction** (celle de la droite $(AB)$) ;\n• son **sens** (de $A$ vers $B$) ;\n• sa **norme** $\\|\\vec{AB}\\| = AB$.\n• **Propriété** : $\\vec{AB} = \\vec{DC} \\iff ABCD$ est un parallélogramme (éventuellement aplati)."
      },
      {
        "title": "3. Opérations sur les vecteurs en coordonnées",
        "content": "Pour $\\vec{u}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, $\\vec{v}\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}$ et un réel $k$ :\n$$\\vec{u} + \\vec{v}\\begin{pmatrix} x + x' \\\\ y + y' \\end{pmatrix} \\qquad k\\vec{u}\\begin{pmatrix} kx \\\\ ky \\end{pmatrix}$$\n• Le vecteur **opposé** de $\\vec{AB}$ est $-\\vec{AB} = \\vec{BA}$.\n• $\\vec{u}$ et $\\vec{v}$ sont **colinéaires** s'il existe un réel $k$ tel que $\\vec{v} = k\\vec{u}$ (ou si $\\vec{u} = \\vec{0}$).\n• $I$ est le milieu de $[AB]$ si et seulement si $\\vec{AI} = \\vec{IB}$."
      },
      {
        "title": "4. Relation de Chasles et règle du parallélogramme",
        "content": "• **Relation de Chasles** : pour tous points $A$, $B$, $C$ : $\\vec{AB} + \\vec{BC} = \\vec{AC}$.\n*Exemple* : $\\vec{MA} + \\vec{AN} = \\vec{MN}$ ; on « intercale » un point.\n• **Règle du parallélogramme** : $\\vec{AB} + \\vec{AD} = \\vec{AC}$ si et seulement si $ABCD$ est un parallélogramme."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer l'alignement de trois points avec la colinéarité",
        "example": "Soient $A(-2 ; 1)$, $B(2 ; 3)$ et $C(6 ; 5)$. Les points $A, B, C$ sont-ils alignés ?",
        "steps": [
          "**Étape 1** : On calcule les coordonnées des vecteurs $\\vec{AB}$ et $\\vec{AC}$ :\n$\\vec{AB}\\begin{pmatrix} 2 - (-2) \\\\ 3 - 1 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$ et $\\vec{AC}\\begin{pmatrix} 6 - (-2) \\\\ 5 - 1 \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 4 \\end{pmatrix}$.",
          "**Étape 2** : On calcule le déterminant : $\\det(\\vec{AB}, \\vec{AC}) = 4 \\times 4 - 2 \\times 8 = 16 - 16 = 0$.",
          "**Étape 3** : Le déterminant est nul, donc les vecteurs $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires. Ayant le point $A$ en commun, les points $A, B, C$ sont alignés."
        ]
      },
      {
        "title": "Méthode : Calculer les coordonnées d'un point défini par une égalité vectorielle",
        "example": "Soient $A(1 ; 2)$, $B(4 ; -1)$ et $C(-2 ; 3)$. Déterminer les coordonnées du point $D$ tel que $\\vec{AD} = \\vec{AB} + 2\\vec{AC}$.",
        "steps": [
          "**Étape 1** : $\\vec{AB}\\begin{pmatrix} 4 - 1 \\\\ -1 - 2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -3 \\end{pmatrix}$ et $\\vec{AC}\\begin{pmatrix} -2 - 1 \\\\ 3 - 2 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 1 \\end{pmatrix}$.",
          "**Étape 2** : $\\vec{AB} + 2\\vec{AC}\\begin{pmatrix} 3 + 2 \\times (-3) \\\\ -3 + 2 \\times 1 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ -1 \\end{pmatrix}$.",
          "**Étape 3** : $\\vec{AD}\\begin{pmatrix} x_D - 1 \\\\ y_D - 2 \\end{pmatrix}$, donc $x_D - 1 = -3$ et $y_D - 2 = -1$.",
          "**Conclusion** : $x_D = -2$ et $y_D = 1$, soit $D(-2 ; 1)$."
        ]
      },
      {
        "title": "Méthode : Démontrer que deux droites sont parallèles",
        "example": "Soient $A(0 ; 3)$, $B(2 ; 7)$, $C(-1 ; -2)$ et $D(3 ; 6)$. Les droites $(AB)$ et $(CD)$ sont-elles parallèles ?",
        "steps": [
          "**Étape 1** : $\\vec{AB}\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$ et $\\vec{CD}\\begin{pmatrix} 3 - (-1) \\\\ 6 - (-2) \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 8 \\end{pmatrix}$.",
          "**Étape 2** : $\\det(\\vec{AB}, \\vec{CD}) = 2 \\times 8 - 4 \\times 4 = 16 - 16 = 0$ : les vecteurs sont colinéaires, donc $(AB) \\parallel (CD)$.",
          "**Étape 3 (Droites confondues ?)** : $\\vec{AC}\\begin{pmatrix} -1 \\\\ -5 \\end{pmatrix}$ et $\\det(\\vec{AB}, \\vec{AC}) = 2 \\times (-5) - 4 \\times (-1) = -10 + 4 = -6 \\neq 0$, donc $C \\notin (AB)$.",
          "**Conclusion** : les droites $(AB)$ et $(CD)$ sont **strictement parallèles**."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention à l'ordre des coordonnées du vecteur : c'est toujours l'extrémité moins l'origine ($x_B - x_A$).",
      "⚠️ Deux droites $(AB)$ et $(CD)$ sont parallèles ssi $\\vec{AB}$ et $\\vec{CD}$ sont colinéaires.",
      "⚠️ $ABCD$ est un parallélogramme si et seulement si $\\vec{AB} = \\vec{DC}$, et non $\\vec{AB} = \\vec{CD}$ (vecteurs de sens contraires).",
      "⚠️ La norme d'une somme n'est pas la somme des normes : en général $\\|\\vec{u} + \\vec{v}\\| \\neq \\|\\vec{u}\\| + \\|\\vec{v}\\|$ (on a seulement $\\|\\vec{u} + \\vec{v}\\| \\le \\|\\vec{u}\\| + \\|\\vec{v}\\|$).",
      "⚠️ Deux vecteurs colinéaires n'ont pas forcément le même sens : $-2\\vec{u}$ est colinéaire à $\\vec{u}$ mais de sens contraire."
    ],
    "flashcards": [
      {
        "q": "Quelle est la condition nécessaire et suffisante pour que $\\vec{u}(x ; y)$ et $\\vec{v}(x' ; y')$ soient colinéaires ?",
        "a": "$xy' - yx' = 0$ (déterminant nul)."
      },
      {
        "q": "Énoncer la relation de Chasles pour les vecteurs.",
        "a": "$\\vec{AB} + \\vec{BC} = \\vec{AC}$."
      },
      {
        "q": "$\\vec{u}(3 ; -1)$ et $\\vec{v}(-2 ; 5)$. Coordonnées de $2\\vec{u} - \\vec{v}$ ?",
        "a": "$(2 \\times 3 - (-2) ; 2 \\times (-1) - 5) = (8 ; -7)$."
      },
      {
        "q": "Les vecteurs $\\vec{u}(6 ; -4)$ et $\\vec{v}(-9 ; 6)$ sont-ils colinéaires ?",
        "a": "Oui : $\\det(\\vec{u}, \\vec{v}) = 6 \\times 6 - (-4) \\times (-9) = 36 - 36 = 0$ (et $\\vec{v} = -1{,}5\\,\\vec{u}$)."
      },
      {
        "q": "Dans un repère orthonormé, norme de $\\vec{u}(-5 ; 12)$ ?",
        "a": "$\\|\\vec{u}\\| = \\sqrt{25 + 144} = \\sqrt{169} = 13$."
      }
    ]
  },

  "2G3": {
    "title": "2G3 : Droites du plan, équations cartésiennes et réduites",
    "domain": "Géométrie",
    "objectives": [
      "Déterminer et utiliser l'équation cartésienne d'une droite $ax + by + c = 0$ et son vecteur directeur $\\vec{u}(-b ; a)$.",
      "Déterminer l'équation réduite $y = mx + p$ (si la droite n'est pas verticale) avec le coefficient directeur $m = \\frac{y_B - y_A}{x_B - x_A}$.",
      "Caractériser le parallélisme de deux droites par l'égalité de leurs coefficients directeurs.",
      "Calculer les coordonnées du point d'intersection de deux droites sécantes en résolvant un système de deux équations à deux inconnues.",
      "Déterminer une équation de droite à partir d'un point et d'un vecteur directeur.",
      "Résoudre un système de deux équations linéaires à deux inconnues par substitution ou par combinaison."
    ],
    "keyPoints": [
      {
        "title": "1. Équation cartésienne et réduite d'une droite",
        "content": "• **Équation cartésienne** : Toute droite du plan admet une équation de la forme $ax + by + c = 0$ avec $(a, b) \\neq (0, 0)$. Un **vecteur directeur** de cette droite est $\\vec{u}\\begin{pmatrix} -b \\\\ a \\end{pmatrix}$.\n• **Équation réduite** :\n- Si la droite n'est pas verticale ($b \\neq 0$) : $y = mx + p$ où $m$ est le **coefficient directeur** (la pente) et $p$ est l'**ordonnée à l'origine**. Le vecteur $\\vec{u}(1 ; m)$ est un vecteur directeur.\n- Si la droite est verticale ($b = 0$) : $x = k$. Elle n'a pas de coefficient directeur."
      },
      {
        "title": "2. Équation et appartenance d'un point",
        "content": "Un point $M(x_0 ; y_0)$ appartient à la droite d'équation $ax + by + c = 0$ si et seulement si $ax_0 + by_0 + c = 0$.\n• Une droite admet une **infinité** d'équations cartésiennes, toutes proportionnelles : $2x - y + 3 = 0$ et $-4x + 2y - 6 = 0$ décrivent la même droite.\n• En revanche, l'**équation réduite** d'une droite non verticale est **unique**."
      },
      {
        "title": "3. Vecteur directeur et coefficient directeur",
        "content": "• Si $b \\neq 0$, l'équation $ax + by + c = 0$ équivaut à $y = -\\frac{a}{b}x - \\frac{c}{b}$ : le coefficient directeur est $m = -\\frac{a}{b}$.\n• Si $\\vec{u}\\begin{pmatrix} \\alpha \\\\ \\beta \\end{pmatrix}$ est un vecteur directeur avec $\\alpha \\neq 0$, alors $m = \\frac{\\beta}{\\alpha}$.\n• **Interprétation** : quand $x$ augmente de $1$, $y$ varie de $m$."
      },
      {
        "title": "4. Positions relatives de deux droites et systèmes",
        "content": "Soient $d : ax + by + c = 0$ et $d' : a'x + b'y + c' = 0$.\n• $d \\parallel d' \\iff$ leurs vecteurs directeurs $(-b ; a)$ et $(-b' ; a')$ sont colinéaires $\\iff ab' - a'b = 0$.\n• Sinon, $d$ et $d'$ sont **sécantes** en un unique point.\nLe système formé par les deux équations a donc :\n• **une** solution si les droites sont sécantes ;\n• **aucune** solution si elles sont strictement parallèles ;\n• une **infinité** de solutions si elles sont confondues."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver l'équation réduite d'une droite passant par deux points",
        "example": "Trouver l'équation réduite de la droite $(AB)$ avec $A(1 ; 3)$ et $B(4 ; 9)$.",
        "steps": [
          "**Étape 1 (Pente)** : Comme $x_A \\neq x_B$, la droite n'est pas verticale. Son coefficient directeur est $m = \\frac{y_B - y_A}{x_B - x_A} = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$.",
          "**Étape 2 (Équation partielle)** : L'équation s'écrit $y = 2x + p$.",
          "**Étape 3 (Ordonnée à l'origine)** : $A(1 ; 3) \\in (AB) \\implies 3 = 2(1) + p \\implies p = 3 - 2 = 1$. L'équation est $y = 2x + 1$."
        ]
      },
      {
        "title": "Méthode : Équation cartésienne avec un point et un vecteur directeur",
        "example": "Déterminer une équation cartésienne de la droite $d$ passant par $A(2 ; -1)$ et de vecteur directeur $\\vec{u}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.",
        "steps": [
          "**Étape 1** : $M(x ; y) \\in d \\iff \\vec{AM}\\begin{pmatrix} x - 2 \\\\ y + 1 \\end{pmatrix}$ et $\\vec{u}$ sont colinéaires $\\iff \\det(\\vec{AM}, \\vec{u}) = 0$.",
          "**Étape 2** : $\\det(\\vec{AM}, \\vec{u}) = (x - 2) \\times 4 - (y + 1) \\times 3 = 4x - 8 - 3y - 3$.",
          "**Étape 3** : $M \\in d \\iff 4x - 3y - 11 = 0$.",
          "**Conclusion** : $d : 4x - 3y - 11 = 0$. Contrôles : $A$ vérifie $8 + 3 - 11 = 0$, et le vecteur $(-b ; a) = (3 ; 4)$ est bien $\\vec{u}$."
        ]
      },
      {
        "title": "Méthode : Calculer le point d'intersection de deux droites",
        "example": "Déterminer l'intersection des droites $d : y = 2x - 1$ et $d' : x + 3y - 11 = 0$.",
        "steps": [
          "**Étape 1 (Sécantes ?)** : $d$ a pour coefficient directeur $2$ ; $d'$ s'écrit $y = -\\frac{1}{3}x + \\frac{11}{3}$, de coefficient directeur $-\\frac{1}{3}$. Les coefficients sont différents : les droites sont sécantes.",
          "**Étape 2 (Substitution)** : on remplace $y$ par $2x - 1$ dans l'équation de $d'$ : $x + 3(2x - 1) - 11 = 0 \\iff 7x - 14 = 0 \\iff x = 2$.",
          "**Étape 3** : $y = 2 \\times 2 - 1 = 3$. Contrôle dans $d'$ : $2 + 3 \\times 3 - 11 = 0$.",
          "**Conclusion** : les droites se coupent au point $(2 ; 3)$."
        ]
      },
      {
        "title": "Méthode : Résoudre un système par combinaison",
        "example": "Résoudre le système $\\begin{cases} 2x + 3y = 7 \\\\ 5x - 2y = 8 \\end{cases}$.",
        "steps": [
          "**Étape 1** : On multiplie la 1re équation par $2$ et la 2e par $3$ pour obtenir des coefficients de $y$ opposés : $4x + 6y = 14$ et $15x - 6y = 24$.",
          "**Étape 2** : On additionne membre à membre : $19x = 38$, donc $x = 2$.",
          "**Étape 3** : On reporte dans la 1re équation : $4 + 3y = 7 \\iff y = 1$. Contrôle dans la 2e : $5 \\times 2 - 2 \\times 1 = 8$.",
          "**Conclusion** : le système a pour unique solution le couple $(2 ; 1)$."
        ]
      }
    ],
    "traps": [
      "⚠️ Si $x_A = x_B$, la droite est verticale et a pour équation $x = x_A$. Ne pas tenter de diviser par $x_B - x_A = 0$ !",
      "⚠️ Un vecteur directeur de $ax + by + c = 0$ a pour coordonnées $(-b ; a)$, attention au signe moins sur $b$.",
      "⚠️ Pour tester si un point est sur une droite, on remplace $x$ **et** $y$ par ses coordonnées et on vérifie l'égalité.",
      "⚠️ Une droite verticale $x = k$ n'a pas d'équation réduite de la forme $y = mx + p$ : elle n'a pas de coefficient directeur.",
      "⚠️ Des équations cartésiennes différentes peuvent représenter la même droite : pour comparer deux droites, on compare leurs **équations réduites**."
    ],
    "flashcards": [
      {
        "q": "Quel est un vecteur directeur de la droite d'équation $3x - 2y + 7 = 0$ ?",
        "a": "$\\vec{u}\\begin{pmatrix} -(-2) \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$."
      },
      {
        "q": "À quelle condition deux droites d'équations réduites $y = mx + p$ et $y = m'x + p'$ sont-elles strictement parallèles ?",
        "a": "Elles ont le même coefficient directeur ($m = m'$) et des ordonnées à l'origine distinctes ($p \\neq p'$)."
      },
      {
        "q": "Quel est le coefficient directeur de la droite $6x + 2y - 5 = 0$ ?",
        "a": "$y = -3x + \\frac{5}{2}$, donc $m = -3$."
      },
      {
        "q": "Le point $A(1 ; 4)$ appartient-il à la droite $y = 3x + 1$ ?",
        "a": "Oui : $3 \\times 1 + 1 = 4$."
      },
      {
        "q": "Combien de solutions a un système dont les deux droites associées sont strictement parallèles ?",
        "a": "Aucune : les droites n'ont pas de point commun."
      }
    ]
  },

  "2S1": {
    "title": "2S1 : Statistiques descriptives : moyenne, médiane, quartiles et dispersion",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Calculer la moyenne pondérée d'une série statistique discrète ou continue.",
      "Déterminer la médiane $Me$, le premier quartile $Q_1$ et le troisième quartile $Q_3$.",
      "Calculer l'écart interquartile $Q_3 - Q_1$ et l'étendue pour mesurer la dispersion.",
      "Construire et analyser un diagramme en boîte (boîte à moustaches).",
      "Calculer et interpréter l'écart-type d'une série statistique.",
      "Choisir des indicateurs adaptés : (moyenne ; écart-type) ou (médiane ; écart interquartile)."
    ],
    "keyPoints": [
      {
        "title": "1. Indicateurs de position et de dispersion",
        "content": "Pour une série statistique ordonnée d'effectif total $N$ :\n• **Médiane ($Me$)** : Valeur qui partage la série ordonnée en deux groupes de même effectif (au moins 50% des valeurs sont $\\le Me$).\n• **Premier quartile ($Q_1$)** : Plus petite valeur de la série telle qu'au moins 25% des données soient inférieures ou égales à $Q_1$ (rang : $\\lceil 0{,}25 N \\rceil$).\n• **Troisième quartile ($Q_3$)** : Plus petite valeur telle qu'au moins 75% des données soient inférieures ou égales à $Q_3$ (rang : $\\lceil 0{,}75 N \\rceil$).\n• **Écart interquartile** : $I = Q_3 - Q_1$ (mesure robuste de dispersion, non sensible aux valeurs extrêmes)."
      },
      {
        "title": "2. Moyenne et propriété de linéarité",
        "content": "Pour une série de valeurs $x_1, \\dots, x_p$ d'effectifs $n_1, \\dots, n_p$ et d'effectif total $N$ :\n$$\\overline{x} = \\frac{n_1 x_1 + n_2 x_2 + \\dots + n_p x_p}{N}$$\nAvec les fréquences $f_i = \\frac{n_i}{N}$ : $\\overline{x} = f_1 x_1 + \\dots + f_p x_p$.\n• **Linéarité** : si on transforme chaque valeur par $y_i = a x_i + b$, alors $\\overline{y} = a\\overline{x} + b$. Par exemple, ajouter 2 points à toutes les notes augmente la moyenne de 2."
      },
      {
        "title": "3. Variance et écart-type",
        "content": "• La **variance** est la moyenne des carrés des écarts à la moyenne :\n$$V = \\frac{n_1(x_1 - \\overline{x})^2 + \\dots + n_p(x_p - \\overline{x})^2}{N}$$\n• L'**écart-type** est $\\sigma = \\sqrt{V}$. Il s'exprime dans la même unité que les valeurs.\n• Plus $\\sigma$ est grand, plus les valeurs sont **dispersées** autour de la moyenne. Ajouter une même constante à toutes les valeurs ne change pas l'écart-type.\n• En pratique, on le calcule avec la calculatrice ou un tableur."
      },
      {
        "title": "4. Diagramme en boîte et choix des indicateurs",
        "content": "• Le **diagramme en boîte** représente, sur un axe gradué : le minimum, $Q_1$, la médiane, $Q_3$ et le maximum. La boîte (de $Q_1$ à $Q_3$) contient environ la moitié centrale des données.\n• Le couple **(moyenne ; écart-type)** utilise toutes les valeurs mais est sensible aux valeurs extrêmes.\n• Le couple **(médiane ; écart interquartile)** est robuste face aux valeurs extrêmes.\n• En Python, une moyenne se calcule avec une boucle :\n```python\ndef moyenne(L):\n    s = 0\n    for x in L:\n        s = s + x\n    return s / len(L)\n```"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer $Me$, $Q_1$ et $Q_3$",
        "example": "Série de 12 notes ordonnées : $5, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18$.",
        "steps": [
          "**Effectif total** : $N = 12$ (pair).",
          "**Médiane** : La moitié est 6. On fait la demi-somme de la 6e note (11) et de la 7e note (12) : $Me = \\frac{11 + 12}{2} = 11{,}5$.",
          "**Quartile $Q_1$** : $0{,}25 \\times 12 = 3$. $Q_1$ est la 3e valeur : $Q_1 = 8$.",
          "**Quartile $Q_3$** : $0{,}75 \\times 12 = 9$. $Q_3$ est la 9e valeur : $Q_3 = 14$."
        ]
      },
      {
        "title": "Méthode : Calculer la moyenne et l'écart-type d'une série",
        "example": "Les notes de 10 élèves : la note 8 obtenue 2 fois, la note 10 3 fois, la note 12 4 fois et la note 15 une fois. Calculer la moyenne et l'écart-type.",
        "steps": [
          "**Étape 1 (Moyenne)** : $N = 2 + 3 + 4 + 1 = 10$ et $\\overline{x} = \\frac{2 \\times 8 + 3 \\times 10 + 4 \\times 12 + 1 \\times 15}{10} = \\frac{16 + 30 + 48 + 15}{10} = \\frac{109}{10} = 10{,}9$.",
          "**Étape 2 (Écarts au carré)** : $(8 - 10{,}9)^2 = 8{,}41$ ; $(10 - 10{,}9)^2 = 0{,}81$ ; $(12 - 10{,}9)^2 = 1{,}21$ ; $(15 - 10{,}9)^2 = 16{,}81$.",
          "**Étape 3 (Variance)** : $V = \\frac{2 \\times 8{,}41 + 3 \\times 0{,}81 + 4 \\times 1{,}21 + 1 \\times 16{,}81}{10} = \\frac{16{,}82 + 2{,}43 + 4{,}84 + 16{,}81}{10} = \\frac{40{,}9}{10} = 4{,}09$.",
          "**Conclusion** : $\\overline{x} = 10{,}9$ et $\\sigma = \\sqrt{4{,}09} \\approx 2{,}02$."
        ]
      },
      {
        "title": "Méthode : Calculer la moyenne de deux groupes réunis",
        "example": "Une classe A de 20 élèves a une moyenne de 12 ; une classe B de 30 élèves a une moyenne de 9. Quelle est la moyenne des 50 élèves ?",
        "steps": [
          "**Étape 1** : La somme des notes de A vaut $20 \\times 12 = 240$ ; celle de B vaut $30 \\times 9 = 270$.",
          "**Étape 2** : La somme totale vaut $240 + 270 = 510$ pour $50$ élèves.",
          "**Étape 3** : $\\overline{x} = \\frac{510}{50} = 10{,}2$.",
          "**Conclusion** : la moyenne générale est $10{,}2$, et non $\\frac{12 + 9}{2} = 10{,}5$ : la classe B, plus nombreuse, pèse davantage."
        ]
      },
      {
        "title": "Méthode : Quartiles et médiane avec les effectifs cumulés",
        "example": "On a relevé le nombre de frères et sœurs de 25 élèves : 0 (4 élèves), 1 (9 élèves), 2 (7 élèves), 3 (3 élèves), 4 (2 élèves). Déterminer $Q_1$, $Me$, $Q_3$ et la moyenne.",
        "steps": [
          "**Étape 1 (Effectifs cumulés croissants)** : $4$ ; $13$ ; $20$ ; $23$ ; $25$. Les valeurs de rang 1 à 4 valent 0, de rang 5 à 13 valent 1, de rang 14 à 20 valent 2, etc.",
          "**Étape 2 (Quartiles)** : $0{,}25 \\times 25 = 6{,}25$, donc $Q_1$ est la 7e valeur : $Q_1 = 1$. $0{,}75 \\times 25 = 18{,}75$, donc $Q_3$ est la 19e valeur : $Q_3 = 2$.",
          "**Étape 3 (Médiane)** : $N = 25$ est impair, la médiane est la 13e valeur : $Me = 1$.",
          "**Conclusion** : $Q_1 = 1$, $Me = 1$, $Q_3 = 2$ (écart interquartile $1$) et $\\overline{x} = \\frac{0 \\times 4 + 1 \\times 9 + 2 \\times 7 + 3 \\times 3 + 4 \\times 2}{25} = \\frac{40}{25} = 1{,}6$."
        ]
      }
    ],
    "traps": [
      "⚠️ Toujours ordonner la série statistique par ordre croissant avant de chercher médiane et quartiles !",
      "⚠️ Contrairement à la médiane, la moyenne est très sensible aux valeurs extrêmes.",
      "⚠️ La moyenne de deux moyennes n'est égale à la moyenne globale que si les deux groupes ont le **même effectif**.",
      "⚠️ Dans le calcul de la variance, chaque carré d'écart est multiplié par son **effectif** ; on n'oublie pas ensuite de prendre la **racine carrée** pour obtenir l'écart-type.",
      "⚠️ Avec la définition du cours, $Q_1$ et $Q_3$ sont toujours des **valeurs de la série** : on ne fait jamais de demi-somme pour les quartiles (contrairement à la médiane quand $N$ est pair)."
    ],
    "flashcards": [
      {
        "q": "Quel pourcentage minimal des données se situe entre $Q_1$ et $Q_3$ ?",
        "a": "Au moins 50% des données."
      },
      {
        "q": "Comment calcule-t-on l'écart interquartile ?",
        "a": "$Q_3 - Q_1$."
      },
      {
        "q": "On ajoute 2 points à toutes les notes d'une série. Que deviennent la moyenne et l'écart-type ?",
        "a": "La moyenne augmente de 2 ; l'écart-type ne change pas."
      },
      {
        "q": "Quelle est la définition de l'écart-type $\\sigma$ ?",
        "a": "La racine carrée de la variance, moyenne des carrés des écarts à la moyenne : $\\sigma = \\sqrt{V}$."
      },
      {
        "q": "Quelles sont les cinq valeurs représentées par un diagramme en boîte ?",
        "a": "Le minimum, $Q_1$, la médiane, $Q_3$ et le maximum."
      }
    ]
  },

  "2S2": {
    "title": "2S2 : Probabilités sur un ensemble fini : événements, réunion et intersection",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Modéliser une expérience aléatoire par un univers fini $\\Omega$ et une loi de probabilité.",
      "Calculer la probabilité d'un événement dans le cas d'équiprobabilité : $P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)}$.",
      "Utiliser la formule de l'événement contraire : $P(\\overline{A}) = 1 - P(A)$.",
      "Appliquer la formule fondamentale de la réunion : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
      "Définir une loi de probabilité sur un univers fini.",
      "Dénombrer des issues à l'aide d'un tableau à double entrée ou d'un arbre."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire des probabilités et propriétés",
        "content": "• **Univers $\\Omega$** : ensemble des issues possibles. La somme des probabilités de toutes les issues vaut 1.\n• **Événements incompatibles (ou disjoints)** : $A \\cap B = \\emptyset \\implies P(A \\cup B) = P(A) + P(B)$.\n• **Cas général de la réunion** :\n$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n• **Événement contraire $\\overline{A}$** : $P(\\overline{A}) = 1 - P(A)$."
      },
      {
        "title": "2. Loi de probabilité et équiprobabilité",
        "content": "• Définir une **loi de probabilité** sur $\\Omega = \\{e_1, \\dots, e_n\\}$, c'est associer à chaque issue $e_i$ un nombre $p_i \\ge 0$ tel que $p_1 + p_2 + \\dots + p_n = 1$.\n• La probabilité d'un événement $A$ est la **somme des probabilités des issues** qui le réalisent.\n• Lorsque toutes les issues ont la même probabilité $\\frac{1}{n}$, on parle d'**équiprobabilité** et $P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)}$.\n*Exemple* : pour un dé truqué où $P(6) = 0{,}5$ et les cinq autres faces ont la même probabilité, chacune vaut $\\frac{1 - 0{,}5}{5} = 0{,}1$."
      },
      {
        "title": "3. Vocabulaire des événements",
        "content": "• $A \\cap B$ (« $A$ **et** $B$ ») : issues réalisant à la fois $A$ et $B$.\n• $A \\cup B$ (« $A$ **ou** $B$ ») : issues réalisant au moins l'un des deux ; le « ou » est **inclusif**.\n• $\\overline{A}$ (« **non** $A$ ») : issues ne réalisant pas $A$.\n• Deux événements contraires sont incompatibles, mais la réciproque est fausse : avec un dé, $A = \\{1\\}$ et $B = \\{2\\}$ sont incompatibles sans être contraires."
      },
      {
        "title": "4. Dénombrer avec un tableau ou un arbre",
        "content": "• **Tableau à double entrée** : pour le lancer de deux dés équilibrés, on obtient $6 \\times 6 = 36$ couples équiprobables.\n*Exemple* : la somme vaut $7$ pour $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$, donc $P(\\text{somme} = 7) = \\frac{6}{36} = \\frac{1}{6}$.\n• **Arbre** : pour des expériences successives, chaque chemin complet représente une issue ; on compte les chemins qui réalisent l'événement."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer $P(A \\cup B)$ avec un tableau ou la formule",
        "example": "On donne $P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}3$. Calculer $P(A \\cup B)$.",
        "steps": [
          "**Étape 1** : On applique la formule de la réunion : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
          "**Étape 2** : On remplace : $P(A \\cup B) = 0{,}6 + 0{,}5 - 0{,}3 = 0{,}8$.",
          "**Étape 3 (Contrôle)** : La probabilité trouvée est bien comprise entre 0 et 1."
        ]
      },
      {
        "title": "Méthode : Utiliser l'événement contraire pour « au moins un »",
        "example": "On lance deux dés équilibrés. Calculer la probabilité d'obtenir au moins un $6$.",
        "steps": [
          "**Étape 1** : L'univers est formé des $36$ couples équiprobables du tableau à double entrée.",
          "**Étape 2** : L'événement contraire de « au moins un 6 » est « aucun 6 » : chaque dé donne l'une des $5$ faces de $1$ à $5$, soit $5 \\times 5 = 25$ couples.",
          "**Étape 3** : $P(\\text{aucun } 6) = \\frac{25}{36}$, donc $P(\\text{au moins un } 6) = 1 - \\frac{25}{36} = \\frac{11}{36}$.",
          "**Conclusion** : la probabilité vaut $\\frac{11}{36} \\approx 0{,}31$. Contrôle par comptage direct : $6$ couples avec un 6 sur le 1er dé, plus $5$ couples avec un 6 seulement sur le 2e, soit $11$ couples."
        ]
      },
      {
        "title": "Méthode : Tirages successifs sans remise",
        "example": "Une urne contient 3 boules rouges et 2 boules bleues indiscernables au toucher. On tire successivement deux boules sans remise. Quelle est la probabilité d'obtenir deux boules de la même couleur ?",
        "steps": [
          "**Étape 1** : On numérote les boules $R_1, R_2, R_3, B_1, B_2$. Un tirage est un couple ordonné de deux boules distinctes : $5 \\times 4 = 20$ issues équiprobables (arbre à $5$ branches puis $4$).",
          "**Étape 2** : Deux rouges : $3 \\times 2 = 6$ couples. Deux bleues : $2 \\times 1 = 2$ couples.",
          "**Étape 3** : Les événements « deux rouges » et « deux bleues » sont incompatibles : on additionne, $6 + 2 = 8$ issues favorables.",
          "**Conclusion** : $P = \\frac{8}{20} = \\frac{2}{5} = 0{,}4$."
        ]
      },
      {
        "title": "Méthode : Probabilité d'une réunion à partir d'effectifs",
        "example": "Dans un lycée de 200 élèves, 120 pratiquent un sport (S), 80 de la musique (M) et 50 les deux. On choisit un élève au hasard. Calculer $P(S \\cup M)$ et la probabilité qu'il ne pratique aucune des deux activités.",
        "steps": [
          "**Étape 1** : Situation d'équiprobabilité : $P(S) = \\frac{120}{200} = 0{,}6$, $P(M) = \\frac{80}{200} = 0{,}4$, $P(S \\cap M) = \\frac{50}{200} = 0{,}25$.",
          "**Étape 2** : $P(S \\cup M) = 0{,}6 + 0{,}4 - 0{,}25 = 0{,}75$.",
          "**Étape 3** : « Aucune des deux » est l'événement contraire de $S \\cup M$ : $P = 1 - 0{,}75 = 0{,}25$.",
          "**Conclusion** : $P(S \\cup M) = 0{,}75$ et $50$ élèves ($25\\,\\%$) ne pratiquent ni sport ni musique."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas additionner simplement $P(A) + P(B)$ si les événements ne sont pas incompatibles (on compterait l'intersection deux fois !).",
      "⚠️ Une probabilité est **toujours** comprise entre 0 et 1 : si vous trouvez 1,2 ou un nombre négatif, il y a une erreur de calcul.",
      "⚠️ La formule $P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)}$ n'est valable qu'en cas d'**équiprobabilité** : avec deux dés, les sommes de $2$ à $12$ ne sont pas équiprobables ($P(\\text{somme} = 2) = \\frac{1}{36}$ mais $P(\\text{somme} = 7) = \\frac{6}{36}$).",
      "⚠️ En mathématiques, « $A$ ou $B$ » est **inclusif** : il contient aussi les issues qui réalisent $A$ et $B$ en même temps.",
      "⚠️ Pour « au moins un », il est souvent plus simple de passer par l'événement contraire « aucun »."
    ],
    "flashcards": [
      {
        "q": "Si $P(A) = 0{,}35$, quelle est la probabilité de l'événement contraire $\\overline{A}$ ?",
        "a": "$P(\\overline{A}) = 1 - 0{,}35 = 0{,}65$."
      },
      {
        "q": "Énoncer la formule reliant $P(A \\cup B)$, $P(A)$, $P(B)$ et $P(A \\cap B)$.",
        "a": "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$."
      },
      {
        "q": "$A$ et $B$ sont incompatibles avec $P(A) = 0{,}4$ et $P(B) = 0{,}5$. Que vaut $P(A \\cup B)$ ?",
        "a": "$P(A \\cup B) = 0{,}4 + 0{,}5 = 0{,}9$ car $P(A \\cap B) = 0$."
      },
      {
        "q": "Deux événements incompatibles sont-ils forcément contraires ?",
        "a": "Non. Avec un dé : $\\{1\\}$ et $\\{2\\}$ sont incompatibles, mais pas contraires."
      },
      {
        "q": "On lance deux dés équilibrés. Probabilité que la somme fasse $8$ ?",
        "a": "$(2;6), (3;5), (4;4), (5;3), (6;2)$ : $\\frac{5}{36}$."
      }
    ]
  },

  "2S3": {
    "title": "2S3 : Échantillonnage, fluctuation et algorithmique en Python",
    "domain": "Algorithmique et Programmation",
    "objectives": [
      "Comprendre la variabilité d'une fréquence observée d'un échantillon à l'autre.",
      "Connaître le principe de l'intervalle de fluctuation au seuil de 95% pour un grand échantillon : $\\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$.",
      "Lire et écrire un script Python simulant une expérience aléatoire (module `random`).",
      "Prendre une décision d'acceptation ou de rejet d'une hypothèse sur une proportion $p$.",
      "Simuler $N$ échantillons de taille $n$ en Python et observer la proportion de ceux pour lesquels $|f - p| \\le \\frac{1}{\\sqrt{n}}$.",
      "Déterminer une taille d'échantillon permettant d'obtenir une précision donnée."
    ],
    "keyPoints": [
      {
        "title": "1. Principe de l'échantillonnage et intervalle de fluctuation",
        "content": "Soit $p$ la proportion d'un caractère dans une population générale. Lorsqu'on prélève au hasard un échantillon de taille $n$ (avec $n$ assez grand ; à titre indicatif $n \\ge 25$ et $0{,}2 \\le p \\le 0{,}8$) :\n• La fréquence observée $f$ varie d'un échantillon à un autre : c'est la **fluctuation d'échantillonnage**.\n• L'**intervalle de fluctuation à 95%** est :\n$$I = \\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$$\nPour $n$ assez grand, dans environ 95 % (au moins) des échantillons de taille $n$, la fréquence observée $f$ appartient à cet intervalle."
      },
      {
        "title": "2. Algorithmique en Python : simulation d'échantillons",
        "content": "En Python, on utilise la bibliothèque `random` :\n```python\nimport random\n\ndef frequence_pile(n):\n    nb_pile = 0\n    for i in range(n):\n        if random.random() < 0.5:\n            nb_pile += 1\n    return nb_pile / n\n```"
      },
      {
        "title": "3. Échantillon, fréquence et loi des grands nombres",
        "content": "• Un **échantillon de taille $n$** est obtenu en répétant $n$ fois, de façon indépendante, une même expérience aléatoire à deux issues (succès de probabilité $p$, ou échec).\n• Si $k$ est le nombre de succès, la **fréquence observée** est $f = \\frac{k}{n}$.\n• **Loi des grands nombres** (approche intuitive) : lorsque $n$ devient grand, la fréquence $f$ se rapproche de la probabilité $p$."
      },
      {
        "title": "4. Écart entre fréquence et probabilité",
        "content": "Dire que $f \\in \\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$ équivaut à dire que la distance entre $f$ et $p$ vérifie :\n$$|f - p| \\le \\frac{1}{\\sqrt{n}}$$\n**Résultat admis** : pour $n$ assez grand, cette inégalité est vérifiée pour environ $95\\,\\%$ (ou plus) des échantillons de taille $n$.\n• Plus $n$ est grand, plus l'intervalle est étroit : la fréquence fluctue moins."
      },
      {
        "title": "5. Simuler de nombreux échantillons en Python",
        "content": "```python\nfrom random import random\nfrom math import sqrt\n\ndef frequence(n, p):\n    k = 0\n    for i in range(n):\n        if random() < p:\n            k = k + 1\n    return k / n\n\ndef proportion_proches(N, n, p):\n    c = 0\n    for j in range(N):\n        if abs(frequence(n, p) - p) <= 1 / sqrt(n):\n            c = c + 1\n    return c / N\n```\n`random()` renvoie un nombre aléatoire de $[0 ; 1[$ : la condition `random() < p` est réalisée avec la probabilité $p$. L'appel `proportion_proches(1000, 100, 0.3)` renvoie en général une valeur proche de $0{,}95$ ou au-dessus."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Prendre une décision à l'aide d'un échantillon",
        "example": "Un dé à 6 faces est lancé 100 fois. Le chiffre 6 apparaît 28 fois. Le dé est-il truqué au seuil de 95% ?",
        "steps": [
          "**Étape 1 (Proportion théorique)** : Pour un dé équilibré, $p = \\frac{1}{6} \\approx 0{,}167$. Taille $n = 100$.",
          "**Étape 2 (Intervalle de fluctuation)** : $\\frac{1}{\\sqrt{100}} = 0{,}1$. L'intervalle est $[0{,}167 - 0{,}1 ; 0{,}167 + 0{,}1] = [0{,}067 ; 0{,}267]$.",
          "**Étape 3 (Fréquence observée et décision)** : La fréquence observée est $f = \\frac{28}{100} = 0{,}28$. Comme $0{,}28 \\notin [0{,}067 ; 0{,}267]$, on rejette l'hypothèse d'un dé équilibré au seuil de 95%."
        ]
      },
      {
        "title": "Méthode : Vérifier la conformité d'un échantillon",
        "example": "Un fabricant affirme que $90\\,\\%$ de ses ampoules fonctionnent plus de 1000 heures. Sur un échantillon de $400$ ampoules, $348$ dépassent 1000 heures. Ce résultat remet-il en cause l'affirmation ?",
        "steps": [
          "**Étape 1 (Données)** : $p = 0{,}9$ et $n = 400$. On a $\\frac{1}{\\sqrt{400}} = \\frac{1}{20} = 0{,}05$.",
          "**Étape 2 (Intervalle)** : $I = [0{,}9 - 0{,}05 ; 0{,}9 + 0{,}05] = [0{,}85 ; 0{,}95]$.",
          "**Étape 3 (Fréquence observée)** : $f = \\frac{348}{400} = 0{,}87$, et $0{,}87 \\in [0{,}85 ; 0{,}95]$.",
          "**Conclusion** : la fréquence observée est compatible avec $p = 0{,}9$ : l'échantillon ne permet pas de remettre en cause l'affirmation du fabricant."
        ]
      },
      {
        "title": "Méthode : Déterminer une taille d'échantillon",
        "example": "Quelle taille minimale $n$ doit avoir un échantillon pour que l'intervalle $\\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$ ait une amplitude inférieure ou égale à $0{,}04$ ?",
        "steps": [
          "**Étape 1** : L'amplitude de l'intervalle vaut $\\frac{2}{\\sqrt{n}}$. On veut $\\frac{2}{\\sqrt{n}} \\le 0{,}04$.",
          "**Étape 2** : Comme $\\sqrt{n} > 0$, cela équivaut à $\\sqrt{n} \\ge \\frac{2}{0{,}04} = 50$.",
          "**Étape 3** : La fonction carré est croissante sur $[0 ; +\\infty[$, donc $n \\ge 50^2 = 2500$.",
          "**Conclusion** : il faut un échantillon d'au moins $2500$ individus."
        ]
      }
    ],
    "traps": [
      "⚠️ L'amplitude de l'intervalle est de $\\frac{2}{\\sqrt{n}}$ : pour diviser la marge d'erreur par 2, il faut **quadrupler** la taille de l'échantillon !",
      "⚠️ Ne pas confondre la proportion théorique $p$ (fixe dans la population) et la fréquence observée $f$ (qui fluctue selon l'échantillon).",
      "⚠️ Une fréquence située dans l'intervalle ne **prouve** pas que la proportion vaut $p$ : on dit seulement que l'échantillon ne permet pas de rejeter cette hypothèse.",
      "⚠️ Même si l'hypothèse est vraie, environ $5\\,\\%$ des échantillons tombent en dehors de l'intervalle : une décision de rejet comporte donc un **risque d'erreur**.",
      "⚠️ En Python, `randint(1, 6)` peut renvoyer $1$ comme $6$ (bornes incluses), alors que `range(1, 6)` s'arrête à $5$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule approchée de l'intervalle de fluctuation à 95% pour un échantillon de taille $n$ et de proportion $p$ ?",
        "a": "$\\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$."
      },
      {
        "q": "Si on multiplie la taille d'un échantillon par 4, par combien est divisée la largeur de l'intervalle de fluctuation ?",
        "a": "Par $\\sqrt{4} = 2$ (elle est divisée par 2)."
      },
      {
        "q": "Pour $n = 400$ et $p = 0{,}3$, donner l'intervalle $\\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$.",
        "a": "$\\frac{1}{\\sqrt{400}} = 0{,}05$, d'où $[0{,}25 ; 0{,}35]$."
      },
      {
        "q": "Que renvoie l'instruction Python `random()` du module `random` ?",
        "a": "Un nombre décimal aléatoire de l'intervalle $[0 ; 1[$."
      },
      {
        "q": "Quelle taille minimale d'échantillon donne un intervalle d'amplitude au plus $0{,}1$ ?",
        "a": "$\\frac{2}{\\sqrt{n}} \\le 0{,}1 \\iff \\sqrt{n} \\ge 20 \\iff n \\ge 400$."
      }
    ]
  }
};

window.MATHS_EXERCISES_2NDE = {
  "2N1": [
    {
      "id": "2N1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Ensemble d'appartenance",
      "skill": "Identifier les ensembles de nombres",
      "statement": "Quel est le plus petit ensemble de nombres auquel appartient le nombre $A = -\\frac{18}{6}$ ?",
      "options": [
        "$\\mathbb{N}$",
        "$\\mathbb{Z}$",
        "$\\mathbb{D}$",
        "$\\mathbb{Q}$"
      ],
      "correctIndex": 1,
      "answer": "$\\mathbb{Z}$",
      "hint1": "Simplifie d'abord la fraction.",
      "hint2": "$-\\frac{18}{6} = -3$. C'est un entier relatif négatif.",
      "solution": "$-\\frac{18}{6} = -3 \\in \\mathbb{Z}$ mais $-3 \\notin \\mathbb{N}$. Le plus petit ensemble est donc $\\mathbb{Z}$."
    },
    {
      "id": "2N1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Simplification de racines carrées",
      "skill": "Décomposition en facteurs premiers",
      "statement": "Écrire $\\sqrt{108}$ sous la forme $a\\sqrt{b}$, où $a$ et $b$ sont des entiers naturels et $b$ est le plus petit possible.",
      "options": [
        "$3\\sqrt{12}$",
        "$6\\sqrt{3}$",
        "$18\\sqrt{3}$",
        "$36\\sqrt{3}$"
      ],
      "correctIndex": 1,
      "answer": "$6\\sqrt{3}$",
      "hint1": "Remarque que $108 = 36 \\times 3$.",
      "hint2": "$\\sqrt{36 \\times 3} = \\sqrt{36} \\times \\sqrt{3} = 6\\sqrt{3}$.",
      "solution": "$108 = 36 \\times 3 = 6^2 \\times 3$, donc $\\sqrt{108} = 6\\sqrt{3}$."
    },
    {
      "id": "2N1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Nombres décimaux et fractions",
      "skill": "Caractériser les nombres décimaux",
      "statement": "Laquelle de ces fractions représente un nombre décimal (élément de $\\mathbb{D}$) ?",
      "options": [
        "$\\frac{7}{12}$",
        "$\\frac{9}{40}$",
        "$\\frac{5}{14}$",
        "$\\frac{1}{6}$"
      ],
      "correctIndex": 1,
      "answer": "$\\frac{9}{40}$",
      "hint1": "Une fraction irréductible est décimale si son dénominateur est de la forme $2^p \\times 5^q$.",
      "hint2": "$40 = 2^3 \\times 5$, tandis que 12, 14 et 6 ont des facteurs premiers autres que 2 et 5 (3 ou 7).",
      "solution": "$40 = 2^3 \\times 5^1$. Le dénominateur ne contient que les facteurs 2 et 5. $\\frac{9}{40} = 0{,}225 \\in \\mathbb{D}$."
    },
    {
      "id": "2N1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Irrationnalité et parité",
      "skill": "Raisonnement par l'absurde sur les réels",
      "statement": "Soit $p$ et $q$ deux entiers non nuls tels que $(p/q)^2 = 2$. Que peut-on déduire immédiatement sur la parité de $p$ ?",
      "options": [
        "$p$ est obligatoirement pair",
        "$p$ est obligatoirement impair",
        "$p$ est premier",
        "$p$ est un multiple de 4"
      ],
      "correctIndex": 0,
      "answer": "$p$ est obligatoirement pair",
      "hint1": "$p^2 = 2q^2$, ce qui signifie que $p^2$ est pair.",
      "hint2": "Si le carré d'un entier est pair, alors cet entier lui-même est pair.",
      "solution": "De $p^2 = 2q^2$, on déduit que $p^2$ est divisible par 2, donc pair. Le carré d'un nombre impair étant impair, $p$ est nécessairement pair."
    }
  ],
  "2N2": [
    {
      "id": "2N2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Identité remarquable élémentaire",
      "skill": "Développer une expression avec $(a-b)^2$",
      "statement": "Développer l'expression $A(x) = (2x - 5)^2$.",
      "options": [
        "$4x^2 - 20x + 25$",
        "$4x^2 - 25$",
        "$4x^2 + 20x + 25$",
        "$2x^2 - 10x + 25$"
      ],
      "correctIndex": 0,
      "answer": "$4x^2 - 20x + 25$",
      "hint1": "$(a - b)^2 = a^2 - 2ab + b^2$ avec $a=2x$ et $b=5$.",
      "hint2": "$a^2 = 4x^2$, $2ab = 2 \\times 2x \\times 5 = 20x$, $b^2 = 25$.",
      "solution": "$(2x - 5)^2 = (2x)^2 - 2(2x)(5) + 5^2 = 4x^2 - 20x + 25$."
    },
    {
      "id": "2N2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Factorisation avec facteur commun",
      "skill": "Factoriser une somme algébrique",
      "statement": "Factoriser au maximum l'expression $B(x) = (3x + 1)(x - 4) + (3x + 1)(2x + 7)$.",
      "options": [
        "$(3x + 1)(3x + 11)$",
        "$(3x + 1)(x + 11)$",
        "$(3x + 1)(-x - 11)$",
        "$3(3x + 1)(x + 1)$"
      ],
      "correctIndex": 3,
      "answer": "$3(3x + 1)(x + 1)$",
      "hint1": "Le facteur commun évident est $(3x + 1)$.",
      "hint2": "$(3x + 1)[(x - 4) + (2x + 7)] = (3x + 1)(3x + 3) = 3(3x + 1)(x + 1)$.",
      "solution": "$B(x) = (3x + 1)[(x - 4) + (2x + 7)] = (3x + 1)(3x + 3) = 3(3x + 1)(x + 1)$."
    },
    {
      "id": "2N2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Différence de deux carrés",
      "skill": "Factoriser avec $a^2 - b^2$",
      "statement": "Factoriser complètement $C(x) = (2x - 3)^2 - (x + 4)^2$.",
      "options": [
        "$(3x + 1)(x - 7)$",
        "$(x - 7)(3x - 1)$",
        "$(3x + 1)(x + 1)$",
        "$(x - 1)(3x + 7)$"
      ],
      "correctIndex": 0,
      "answer": "$(3x + 1)(x - 7)$",
      "hint1": "Utiliser $a^2 - b^2 = (a + b)(a - b)$ avec $a = 2x-3$ et $b = x+4$.",
      "hint2": "$a+b = (2x-3)+(x+4) = 3x+1$ et $a-b = (2x-3)-(x+4) = x-7$.",
      "solution": "$a^2 - b^2 = [(2x - 3) + (x + 4)][(2x - 3) - (x + 4)] = (3x + 1)(x - 7)$."
    },
    {
      "id": "2N2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Forme canonique et extremum",
      "skill": "Mettre sous forme canonique",
      "statement": "Quelle est la forme canonique de $f(x) = 2x^2 - 12x + 10$ ?",
      "options": [
        "$2(x - 3)^2 - 8$",
        "$2(x - 3)^2 + 10$",
        "$2(x + 3)^2 - 8$",
        "$(2x - 6)^2 - 26$"
      ],
      "correctIndex": 0,
      "answer": "$2(x - 3)^2 - 8$",
      "hint1": "Factorise d'abord par 2 : $2[x^2 - 6x + 5]$.",
      "hint2": "$x^2 - 6x = (x - 3)^2 - 9$.",
      "solution": "$2(x^2 - 6x + 5) = 2[(x - 3)^2 - 9 + 5] = 2[(x - 3)^2 - 4] = 2(x - 3)^2 - 8$."
    }
  ],
  "2N3": [
    {
      "id": "2N3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Inéquation avec valeur absolue",
      "skill": "Interpréter la distance sur la droite réelle",
      "statement": "Résoudre dans $\\mathbb{R}$ l'inéquation $|x - 3| \\le 2$.",
      "options": [
        "$x \\in [1 ; 5]$",
        "$x \\in [-5 ; -1]$",
        "$x \\in ]1 ; 5[$",
        "$x \\in [2 ; 3]$"
      ],
      "correctIndex": 0,
      "answer": "$x \\in [1 ; 5]$",
      "hint1": "$|x - a| \\le r \\iff x \\in [a - r ; a + r]$.",
      "hint2": "Ici $a = 3$ et $r = 2$, d'où $[3 - 2 ; 3 + 2]$.",
      "solution": "La distance de $x$ à 3 est inférieure ou égale à 2 : $3 - 2 \\le x \\le 3 + 2 \\iff 1 \\le x \\le 5$, soit $S = [1 ; 5]$."
    },
    {
      "id": "2N3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Intersection et réunion d'intervalles",
      "skill": "Manipuler les intervalles de réels",
      "statement": "Déterminer l'intersection $I \\cap J$ où $I = ]-4 ; 3]$ et $J = [-1 ; 7[$.",
      "options": [
        "$[-1 ; 3]$",
        "$]-4 ; 7[$",
        "$]-1 ; 3[$",
        "$[3 ; 7[$"
      ],
      "correctIndex": 0,
      "answer": "$[-1 ; 3]$",
      "hint1": "L'intersection contient les réels qui appartiennent à la fois à $I$ et à $J$.",
      "hint2": "$-1 \\in I$ et $3 \\in J$, donc l'intervalle commun va de $-1$ inclus à $3$ inclus.",
      "solution": "$x \\in I \\iff -4 < x \\le 3$ et $x \\in J \\iff -1 \\le x < 7$. Les deux conditions sont satisfaites pour $-1 \\le x \\le 3$, soit $[-1 ; 3]$."
    },
    {
      "id": "2N3-3",
      "tier": 3,
      "type": "mcq",
      "title": "Encadrement et inverse",
      "skill": "Encadrer une fonction inverse",
      "statement": "Si $x \\in [2 ; 5]$, quel est l'encadrement exact de $\\frac{1}{x}$ ?",
      "options": [
        "$\\left[\\frac{1}{5} ; \\frac{1}{2}\\right]$",
        "$\\left[\\frac{1}{2} ; \\frac{1}{5}\\right]$",
        "$[0{,}2 ; 0{,}4]$",
        "$[-5 ; -2]$"
      ],
      "correctIndex": 0,
      "answer": "$\\left[\\frac{1}{5} ; \\frac{1}{2}\\right]$",
      "hint1": "La fonction inverse $x \\mapsto 1/x$ est strictement décroissante sur $]0 ; +\\infty[$.",
      "hint2": "Elle inverse donc le sens des inégalités : $2 \\le x \\le 5 \\implies 1/5 \\le 1/x \\le 1/2$.",
      "solution": "Comme la fonction inverse est strictement décroissante sur $]0 ; +\\infty[$, $2 \\le x \\le 5 \\iff \\frac{1}{5} \\le \\frac{1}{x} \\le \\frac{1}{2}$."
    },
    {
      "id": "2N3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Inégalité triangulaire",
      "skill": "Appliquer l'inégalité triangulaire",
      "statement": "Pour tous réels $a$ et $b$, quelle inégalité est toujours vérifiée ?",
      "options": [
        "$|a + b| \\le |a| + |b|$",
        "$|a + b| = |a| + |b|$",
        "$|a - b| \\ge |a| + |b|$",
        "$|ab| < |a| \\times |b|$"
      ],
      "correctIndex": 0,
      "answer": "$|a + b| \\le |a| + |b|$",
      "hint1": "C'est l'inégalité triangulaire classique pour les normes et valeurs absolues.",
      "hint2": "L'égalité n'a lieu que lorsque $a$ et $b$ sont de même signe.",
      "solution": "D'après l'inégalité triangulaire, pour tous réels $a$ et $b$, $|a + b| \\le |a| + |b|$."
    }
  ],
  "2N4": [
    {
      "id": "2N4-1",
      "tier": 1,
      "type": "mcq",
      "title": "Résolution d'équation du premier degré",
      "skill": "Résoudre une équation linéaire $ax+b = cx+d$",
      "statement": "Résoudre dans $\\mathbb{R}$ l'équation $4x - 7 = 2x + 9$.",
      "options": [
        "$x = 8$",
        "$x = 1$",
        "$x = 16$",
        "$x = -8$"
      ],
      "correctIndex": 0,
      "answer": "$x = 8$",
      "hint1": "Regroupe les termes en $x$ à gauche et les constantes à droite.",
      "hint2": "$4x - 2x = 9 + 7 \\implies 2x = 16$.",
      "solution": "$4x - 2x = 9 + 7 \\iff 2x = 16 \\iff x = 8$."
    },
    {
      "id": "2N4-2",
      "tier": 2,
      "type": "mcq",
      "title": "Équation produit-nul",
      "skill": "Résoudre $(ax+b)(cx+d) = 0$",
      "statement": "Quelles sont les solutions de $(2x - 3)(5 - x) = 0$ ?",
      "options": [
        "$S = \\left\\{\\frac{3}{2} ; 5\\right\\}$",
        "$S = \\left\\{-\\frac{3}{2} ; 5\\right\\}$",
        "$S = \\{3 ; 5\\}$",
        "$S = \\left\\{\\frac{2}{3} ; -5\\right\\}$"
      ],
      "correctIndex": 0,
      "answer": "$S = \\left\\{\\frac{3}{2} ; 5\\right\\}$",
      "hint1": "Un produit est nul si et seulement si au moins un des facteurs est nul.",
      "hint2": "$2x - 3 = 0 \\implies x = 3/2$ ; $5 - x = 0 \\implies x = 5$.",
      "solution": "$2x - 3 = 0 \\iff x = \\frac{3}{2}$ ou $5 - x = 0 \\iff x = 5$. $S = \\{3/2 ; 5\\}$."
    },
    {
      "id": "2N4-3",
      "tier": 3,
      "type": "mcq",
      "title": "Tableau de signes d'un produit",
      "skill": "Résoudre une inéquation produit",
      "statement": "Résoudre dans $\\mathbb{R}$ l'inéquation $(3 - x)(2x + 4) \\ge 0$.",
      "options": [
        "$x \\in [-2 ; 3]$",
        "$x \\in ]-\\infty ; -2] \\cup [3 ; +\\infty[$",
        "$x \\in [-3 ; 2]$",
        "$x \\in ]-2 ; 3[$"
      ],
      "correctIndex": 0,
      "answer": "$x \\in [-2 ; 3]$",
      "hint1": "Les racines sont $x = 3$ et $x = -2$.",
      "hint2": "Le coefficient dominant du produit développé vaut $-2 < 0$. Le produit est donc positif entre les racines.",
      "solution": "Les zéros sont $-2$ et $3$. Pour $x < -2$ : $(+)(-) = -$. Pour $-2 \\le x \\le 3$ : $(+)(+) = +$. Pour $x > 3$ : $(-)(+) = -$. Donc $S = [-2 ; 3]$."
    },
    {
      "id": "2N4-4",
      "tier": 4,
      "type": "mcq",
      "title": "Inéquation quotient et valeur interdite",
      "skill": "Résoudre une inéquation quotient",
      "statement": "Résoudre dans $\\mathbb{R}$ : $\\frac{2x - 6}{x + 1} \\le 0$.",
      "options": [
        "$x \\in ]-1 ; 3]$",
        "$x \\in [-1 ; 3]$",
        "$x \\in ]-\\infty ; -1[ \\cup [3 ; +\\infty[$",
        "$x \\in ]-1 ; 3[$"
      ],
      "correctIndex": 0,
      "answer": "$x \\in ]-1 ; 3]$",
      "hint1": "Attention à la valeur interdite qui annule le dénominateur : $x = -1$.",
      "hint2": "$x = -1$ doit être exclu (crochet ouvert). Le numérateur s'annule en $x = 3$ (crochet fermé).",
      "solution": "Valeur interdite : $x = -1$. Numérateur nul pour $x = 3$. Le quotient est négatif pour $x \\in ]-1 ; 3]$."
    }
  ],
  "2A1": [
    {
      "id": "2A1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Calcul d'image par une fonction",
      "skill": "Évaluer une fonction en un point",
      "statement": "Soit $f(x) = 3x^2 - 4x + 1$. Quelle est l'image de $-2$ par $f$ ?",
      "options": [
        "$21$",
        "$5$",
        "$-3$",
        "$17$"
      ],
      "correctIndex": 0,
      "answer": "$21$",
      "hint1": "Remplace $x$ par $(-2)$ dans l'expression.",
      "hint2": "$3(-2)^2 - 4(-2) + 1 = 3(4) + 8 + 1$.",
      "solution": "$f(-2) = 3(-2)^2 - 4(-2) + 1 = 12 + 8 + 1 = 21$."
    },
    {
      "id": "2A1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Détermination des antécédents",
      "skill": "Résoudre $f(x) = k$",
      "statement": "Quels sont les antécédents de $5$ par la fonction $g(x) = x^2 + 1$ ?",
      "options": [
        "$-2$ et $2$",
        "Seulement $2$",
        "$\\sqrt{6}$",
        "Aucun antécédent"
      ],
      "correctIndex": 0,
      "answer": "$-2$ et $2$",
      "hint1": "Résoudre $g(x) = 5 \\iff x^2 + 1 = 5$.",
      "hint2": "$x^2 = 4 \\iff x = 2$ ou $x = -2$.",
      "solution": "$x^2 + 1 = 5 \\iff x^2 = 4 \\iff x = 2$ ou $x = -2$."
    },
    {
      "id": "2A1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Ensemble de définition avec radical et quotient",
      "skill": "Déterminer le domaine de validité d'une fonction",
      "statement": "Quel est l'ensemble de définition de $h(x) = \\frac{\\sqrt{x - 3}}{x - 7}$ ?",
      "options": [
        "$[3 ; 7[ \\cup ]7 ; +\\infty[$",
        "$[3 ; +\\infty[$",
        "$]3 ; 7[ \\cup ]7 ; +\\infty[$",
        "$[0 ; +\\infty[ \\setminus \\{7\\}$"
      ],
      "correctIndex": 0,
      "answer": "$[3 ; 7[ \\cup ]7 ; +\\infty[$",
      "hint1": "Deux contraintes : l'expression sous la racine doit être positive ou nulle, et le dénominateur non nul.",
      "hint2": "$x - 3 \\ge 0 \\implies x \\ge 3$ et $x - 7 \\ne 0 \\implies x \\ne 7$.",
      "solution": "Condition racine : $x \\ge 3$. Condition quotient : $x \\ne 7$. D'où $D_h = [3 ; 7[ \\cup ]7 ; +\\infty[$."
    },
    {
      "id": "2A1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Parité et symétrie",
      "skill": "Démontrer la parité d'une fonction",
      "statement": "Soit $f(x) = \\frac{x^3}{x^2 + 1}$ définie sur $\\mathbb{R}$. Que peut-on affirmer ?",
      "options": [
        "$f$ est impaire (courbe symétrique par rapport à l'origine)",
        "$f$ est paire (courbe symétrique par rapport à l'axe des ordonnées)",
        "$f$ n'est ni paire ni impaire",
        "$f$ est périodique"
      ],
      "correctIndex": 0,
      "answer": "$f$ est impaire (courbe symétrique par rapport à l'origine)",
      "hint1": "Calcule $f(-x)$ en remplaçant $x$ par $-x$.",
      "hint2": "$(-x)^3 = -x^3$ et $(-x)^2 + 1 = x^2 + 1$, donc $f(-x) = -f(x)$.",
      "solution": "$f(-x) = \\frac{(-x)^3}{(-x)^2 + 1} = \\frac{-x^3}{x^2 + 1} = -f(x)$. $f$ est impaire, sa courbe admet $O$ pour centre de symétrie."
    }
  ],
  "2A2": [
    {
      "id": "2A2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Sens de variation d'une fonction affine",
      "skill": "Interpréter le coefficient directeur",
      "statement": "Quel est le sens de variation de la fonction affine $f(x) = -3x + 8$ sur $\\mathbb{R}$ ?",
      "options": [
        "Strictement décroissante",
        "Strictement croissante",
        "Constante",
        "D'abord croissante puis décroissante"
      ],
      "correctIndex": 0,
      "answer": "Strictement décroissante",
      "hint1": "Le coefficient directeur est $m = -3$.",
      "hint2": "Comme $m < 0$, la fonction est strictement décroissante.",
      "solution": "$m = -3 < 0$, donc la fonction est strictement décroissante sur $\\mathbb{R}$."
    },
    {
      "id": "2A2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Lire un extremum dans un tableau de variations",
      "skill": "Lire un tableau de variations",
      "statement": "Une fonction $f$ est définie sur $[-3 ; 5]$. Elle est croissante sur $[-3 ; 1]$ avec $f(-3) = -2$ et $f(1) = 4$, puis décroissante sur $[1 ; 5]$ avec $f(5) = 0$.\nQuel est le maximum de $f$ sur $[-3 ; 5]$ ?",
      "options": [
        "$4$, atteint en $x = 1$",
        "$1$, atteint en $x = 4$",
        "$5$, atteint en $x = 0$",
        "$0$, atteint en $x = 5$"
      ],
      "correctIndex": 0,
      "answer": "$4$, atteint en $x = 1$",
      "hint1": "Dresse le tableau de variations : la fonction « monte » jusqu'en $x = 1$ puis « descend ».",
      "hint2": "Le maximum est une valeur de $f(x)$ (une ordonnée), atteinte en une valeur de $x$.",
      "solution": "Sur $[-3 ; 1]$, $f$ croît de $-2$ à $4$ ; sur $[1 ; 5]$, elle décroît de $4$ à $0$. Donc pour tout $x \\in [-3 ; 5]$, $f(x) \\le f(1) = 4$.\nLe maximum de $f$ est $4$, atteint en $x = 1$ (et le minimum est $-2$, atteint en $x = -3$).\nErreur fréquente : confondre le maximum ($4$, une image) et l'endroit où il est atteint ($x = 1$)."
    },
    {
      "id": "2A2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Comparer des images grâce au sens de variation",
      "skill": "Utiliser la monotonie pour comparer des images",
      "statement": "La fonction $f$ est strictement décroissante sur $[0 ; 10]$. Sans autre information, comment se comparent $f(2{,}7)$ et $f(3{,}1)$ ?",
      "options": [
        "$f(2{,}7) > f(3{,}1)$",
        "$f(2{,}7) < f(3{,}1)$",
        "$f(2{,}7) = f(3{,}1)$",
        "On ne peut pas les comparer"
      ],
      "correctIndex": 0,
      "answer": "$f(2{,}7) > f(3{,}1)$",
      "hint1": "Une fonction strictement décroissante « renverse » l'ordre : si $a < b$ alors $f(a) > f(b)$.",
      "hint2": "$2{,}7$ et $3{,}1$ appartiennent tous deux à $[0 ; 10]$ et $2{,}7 < 3{,}1$.",
      "solution": "$2{,}7$ et $3{,}1$ appartiennent à $[0 ; 10]$, intervalle sur lequel $f$ est strictement décroissante.\nComme $2{,}7 < 3{,}1$, on en déduit $f(2{,}7) > f(3{,}1)$ : une fonction décroissante change l'ordre.\n(Pour une fonction croissante, l'ordre serait conservé.)"
    },
    {
      "id": "2A2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Maximum d'une fonction écrite sous forme canonique",
      "skill": "Démontrer qu'un réel est un maximum",
      "statement": "On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = 5 - 2(x - 3)^2$. Que peut-on affirmer ?",
      "options": [
        "$f$ admet un maximum égal à $5$, atteint en $x = 3$",
        "$f$ admet un maximum égal à $3$, atteint en $x = 5$",
        "$f$ admet un minimum égal à $5$, atteint en $x = 3$",
        "$f$ n'admet ni maximum ni minimum"
      ],
      "correctIndex": 0,
      "answer": "$f$ admet un maximum égal à $5$, atteint en $x = 3$",
      "hint1": "Un carré est toujours positif : $(x - 3)^2 \\ge 0$ pour tout réel $x$.",
      "hint2": "Multiplie par $-2$ (l'inégalité change de sens), puis ajoute $5$.",
      "solution": "Pour tout réel $x$ : $(x - 3)^2 \\ge 0$, donc $-2(x - 3)^2 \\le 0$, donc $f(x) = 5 - 2(x - 3)^2 \\le 5$.\nDe plus $f(3) = 5 - 0 = 5$. Ainsi, pour tout $x$, $f(x) \\le f(3)$ : $f$ admet un **maximum égal à 5, atteint en $x = 3$**.\n$f$ n'a pas de minimum : $f(x)$ prend des valeurs aussi négatives que l'on veut quand $x$ s'éloigne de $3$."
    }
  ],
  "2A3": [
    {
      "id": "2A3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Ordre et fonction carré",
      "skill": "Comparer des carrés de nombres de même signe",
      "statement": "Sachant que $-5 < x < -2$, quel est l'encadrement de $x^2$ ?",
      "options": [
        "$4 < x^2 < 25$",
        "$25 < x^2 < 4$",
        "$-25 < x^2 < -4$",
        "$0 \\le x^2 < 25$"
      ],
      "correctIndex": 0,
      "answer": "$4 < x^2 < 25$",
      "hint1": "La fonction carré est strictement décroissante sur $]-\\infty ; 0]$.",
      "hint2": "$-5 < x < -2 \\implies (-2)^2 < x^2 < (-5)^2$, soit $4 < x^2 < 25$.",
      "solution": "La fonction carré inverse l'ordre pour les réels négatifs : $(-2)^2 = 4 < x^2 < (-5)^2 = 25$."
    },
    {
      "id": "2A3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Fonction racine carrée et comparaison",
      "skill": "Appliquer la croissance de la racine carrée",
      "statement": "Classer dans l'ordre croissant : $\\sqrt{7}$, $\\sqrt{5}$ et $2$.",
      "options": [
        "$2 < \\sqrt{5} < \\sqrt{7}$",
        "$\\sqrt{5} < 2 < \\sqrt{7}$",
        "$2 < \\sqrt{7} < \\sqrt{5}$",
        "$\\sqrt{7} < \\sqrt{5} < 2$"
      ],
      "correctIndex": 0,
      "answer": "$2 < \\sqrt{5} < \\sqrt{7}$",
      "hint1": "Écris 2 sous forme de racine carrée : $2 = \\sqrt{4}$.",
      "hint2": "Comme $4 < 5 < 7$ et que la fonction racine est croissante, $\\sqrt{4} < \\sqrt{5} < \\sqrt{7}$.",
      "solution": "$2 = \\sqrt{4}$. Par stricte croissance de $x \\mapsto \\sqrt{x}$, $4 < 5 < 7 \\implies 2 < \\sqrt{5} < \\sqrt{7}$."
    },
    {
      "id": "2A3-3",
      "tier": 3,
      "type": "mcq",
      "title": "Position relative de $x, x^2, x^3$",
      "skill": "Comparer $x, x^2, x^3$ selon l'intervalle",
      "statement": "Pour $x \\in ]0 ; 1[$, quel est le rangement correct ?",
      "options": [
        "$x^3 < x^2 < x$",
        "$x < x^2 < x^3$",
        "$x^2 < x^3 < x$",
        "$x^2 < x < x^3$"
      ],
      "correctIndex": 0,
      "answer": "$x^3 < x^2 < x$",
      "hint1": "Teste avec $x = 0{,}5$ : $x^2 = 0{,}25$ et $x^3 = 0{,}125$.",
      "hint2": "Pour tout $x \\in ]0 ; 1[$, multiplier par $x$ diminue la valeur.",
      "solution": "Sur $]0 ; 1[$, on a $x^3 < x^2 < x$. (À l'inverse, sur $]1 ; +\\infty[$, on a $x < x^2 < x^3$)."
    },
    {
      "id": "2A3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Fonction inverse et encadrement contenant 0",
      "skill": "Analyser les variations de l'inverse sur deux intervalles",
      "statement": "Si $x \\in [-3 ; 4] \\setminus \\{0\\}$, quel est l'ensemble des valeurs prises par $\\frac{1}{x}$ ?",
      "options": [
        "$\\left]-\\infty ; -\\frac{1}{3}\\right] \\cup \\left[\\frac{1}{4} ; +\\infty\\right[$",
        "$\\left[-\\frac{1}{3} ; \\frac{1}{4}\\right]$",
        "$]-\\infty ; +\\infty[$",
        "$[-3 ; 4]$"
      ],
      "correctIndex": 0,
      "answer": "$\\left]-\\infty ; -\\frac{1}{3}\\right] \\cup \\left[\\frac{1}{4} ; +\\infty\\right[$",
      "hint1": "Sépare en deux intervalles : $[-3 ; 0[$ et $]0 ; 4]$.",
      "hint2": "Pour $x \\in [-3 ; 0[$, $1/x \\le -1/3$. Pour $x \\in ]0 ; 4]$, $1/x \\ge 1/4$.",
      "solution": "Pour $x \\in [-3 ; 0[$, $1/x \\in ]-\\infty ; -1/3]$. Pour $x \\in ]0 ; 4]$, $1/x \\in [1/4 ; +\\infty[$. L'image est donc $]-\\infty ; -1/3] \\cup [1/4 ; +\\infty[$."
    }
  ],
  "2G1": [
    {
      "id": "2G1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Coordonnées du milieu",
      "skill": "Calculer les coordonnées d'un milieu dans un repère",
      "statement": "Dans un repère, on donne $A(2 ; -4)$ et $B(6 ; 8)$. Quelles sont les coordonnées du milieu $M$ du segment $[AB]$ ?",
      "options": [
        "$M(4 ; 2)$",
        "$M(8 ; 4)$",
        "$M(2 ; 6)$",
        "$M(4 ; 6)$"
      ],
      "correctIndex": 0,
      "answer": "$M(4 ; 2)$",
      "hint1": "$x_M = \\frac{x_A + x_B}{2}$ et $y_M = \\frac{y_A + y_B}{2}$.",
      "hint2": "$x_M = \\frac{2+6}{2} = 4$ et $y_M = \\frac{-4+8}{2} = 2$.",
      "solution": "$M\\left(\\frac{2+6}{2} ; \\frac{-4+8}{2}\\right) = M(4 ; 2)$."
    },
    {
      "id": "2G1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Distance entre deux points",
      "skill": "Calculer une distance dans un repère orthonormé",
      "statement": "Dans un repère orthonormé, on donne $E(-1 ; 3)$ et $F(2 ; -1)$. Quelle est la longueur $EF$ ?",
      "options": [
        "$5$",
        "$\\sqrt{7}$",
        "$25$",
        "$\\sqrt{13}$"
      ],
      "correctIndex": 0,
      "answer": "$5$",
      "hint1": "$EF = \\sqrt{(x_F - x_E)^2 + (y_F - y_E)^2}$.",
      "hint2": "$(2 - (-1))^2 + (-1 - 3)^2 = 3^2 + (-4)^2 = 9 + 16 = 25$.",
      "solution": "$EF = \\sqrt{(2 - (-1))^2 + (-1 - 3)^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
    },
    {
      "id": "2G1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Nature d'un triangle par les longueurs",
      "skill": "Appliquer la réciproque de Pythagore dans un repère",
      "statement": "Soit $A(1 ; 2)$, $B(4 ; 6)$ et $C(-3 ; 5)$. Quelle est la nature exacte du triangle $ABC$ ?",
      "options": [
        "Rectangle en $A$",
        "Rectangle en $B$",
        "Équilatéral",
        "Isocèle non rectangle"
      ],
      "correctIndex": 0,
      "answer": "Rectangle en $A$",
      "hint1": "Calcule $AB^2$, $AC^2$ et $BC^2$.",
      "hint2": "$AB^2 = 3^2 + 4^2 = 25$, $AC^2 = (-4)^2 + 3^2 = 25$, $BC^2 = (-7)^2 + (-1)^2 = 50$.",
      "solution": "$AB^2 = 25$, $AC^2 = 25$ et $BC^2 = 50$. Comme $AB^2 + AC^2 = 50 = BC^2$, le triangle est rectangle (et isocèle) en $A$."
    },
    {
      "id": "2G1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Quatrième sommet d'un parallélogramme",
      "skill": "Caractériser un parallélogramme par les milieux des diagonales",
      "statement": "Soit $A(1 ; 3)$, $B(4 ; 5)$ et $C(2 ; 8)$. Quelles sont les coordonnées du point $D$ pour que $ABCD$ soit un parallélogramme ?",
      "options": [
        "$D(-1 ; 6)$",
        "$D(5 ; 10)$",
        "$D(3 ; 6)$",
        "$D(1 ; 10)$"
      ],
      "correctIndex": 0,
      "answer": "$D(-1 ; 6)$",
      "hint1": "$ABCD$ est un parallélogramme $\\iff [AC]$ et $[BD]$ ont le même milieu.",
      "hint2": "$x_A + x_C = x_B + x_D \\implies 1 + 2 = 4 + x_D \\implies x_D = -1$. De même $y_D = 3+8-5 = 6$.",
      "solution": "Les diagonales $[AC]$ et $[BD]$ ont le même milieu : $x_D = x_A + x_C - x_B = 1 + 2 - 4 = -1$ et $y_D = y_A + y_C - y_B = 3 + 8 - 5 = 6$. D'où $D(-1 ; 6)$."
    }
  ],
  "2G2": [
    {
      "id": "2G2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Coordonnées d'un vecteur",
      "skill": "Calculer les coordonnées du vecteur AB",
      "statement": "Soit $A(3 ; -2)$ et $B(-1 ; 5)$. Quelles sont les coordonnées de $\\vec{AB}$ ?",
      "options": [
        "$\\vec{AB}(-4 ; 7)$",
        "$\\vec{AB}(2 ; 3)$",
        "$\\vec{AB}(4 ; -7)$",
        "$\\vec{AB}(-4 ; 3)$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{AB}(-4 ; 7)$",
      "hint1": "$\\vec{AB}(x_B - x_A ; y_B - y_A)$.",
      "hint2": "$x_B - x_A = -1 - 3 = -4$ et $y_B - y_A = 5 - (-2) = 7$.",
      "solution": "$\\vec{AB}(-1 - 3 ; 5 - (-2)) = \\vec{AB}(-4 ; 7)$."
    },
    {
      "id": "2G2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Colinéarité de deux vecteurs",
      "skill": "Appliquer la condition de colinéarité $xy' - x'y = 0$",
      "statement": "Les vecteurs $\\vec{u}(4 ; -6)$ et $\\vec{v}(k ; 9)$ sont colinéaires. Quelle est la valeur de $k$ ?",
      "options": [
        "$k = -6$",
        "$k = 6$",
        "$k = -4$",
        "$k = 13{,}5$"
      ],
      "correctIndex": 0,
      "answer": "$k = -6$",
      "hint1": "Condition de colinéarité : $x y' - x' y = 0$.",
      "hint2": "$4 \\times 9 - (-6) \\times k = 0 \\iff 36 + 6k = 0$.",
      "solution": "$4(9) - (-6)(k) = 0 \\iff 36 + 6k = 0 \\iff 6k = -36 \\iff k = -6$."
    },
    {
      "id": "2G2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Combinaison linéaire de vecteurs",
      "skill": "Calculer les coordonnées de a.u + b.v",
      "statement": "On donne $\\vec{u}(2 ; -1)$ et $\\vec{v}(-3 ; 4)$. Quelles sont les coordonnées du vecteur $\\vec{w} = 3\\vec{u} - 2\\vec{v}$ ?",
      "options": [
        "$\\vec{w}(12 ; -11)$",
        "$\\vec{w}(0 ; 5)$",
        "$\\vec{w}(12 ; 5)$",
        "$\\vec{w}(-12 ; 11)$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{w}(12 ; -11)$",
      "hint1": "$x_w = 3(2) - 2(-3)$ et $y_w = 3(-1) - 2(4)$.",
      "hint2": "$x_w = 6 + 6 = 12$ et $y_w = -3 - 8 = -11$.",
      "solution": "$\\vec{w}(3 \\times 2 - 2(-3) ; 3(-1) - 2(4)) = \\vec{w}(6 + 6 ; -3 - 8) = \\vec{w}(12 ; -11)$."
    },
    {
      "id": "2G2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Alignement de trois points",
      "skill": "Démontrer l'alignement de points via la colinéarité",
      "statement": "Soit $A(-2 ; 1)$, $B(2 ; 3)$ et $C(8 ; y)$. Pour quelle valeur de $y$ les points $A, B$ et $C$ sont-ils alignés ?",
      "options": [
        "$y = 6$",
        "$y = 5$",
        "$y = 7$",
        "$y = 4$"
      ],
      "correctIndex": 0,
      "answer": "$y = 6$",
      "hint1": "$A, B, C$ alignés $\\iff \\vec{AB}$ et $\\vec{AC}$ colinéaires.",
      "hint2": "$\\vec{AB}(4 ; 2)$ et $\\vec{AC}(10 ; y - 1)$. On applique $xy' - x'y = 0$.",
      "solution": "$\\vec{AB}(4 ; 2)$ et $\\vec{AC}(10 ; y - 1)$. Colinéarité : $4(y - 1) - 2(10) = 0 \\iff 4y - 4 - 20 = 0 \\iff 4y = 24 \\iff y = 6$."
    }
  ],
  "2G3": [
    {
      "id": "2G3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Coefficient directeur d'une droite",
      "skill": "Calculer la pente d'une droite passant par deux points",
      "statement": "Quel est le coefficient directeur de la droite passant par $A(1 ; 3)$ et $B(5 ; 11)$ ?",
      "options": [
        "$2$",
        "$\\frac{1}{2}$",
        "$4$",
        "$-2$"
      ],
      "correctIndex": 0,
      "answer": "$2$",
      "hint1": "$m = \\frac{y_B - y_A}{x_B - x_A}$.",
      "hint2": "$m = \\frac{11 - 3}{5 - 1} = \\frac{8}{4} = 2$.",
      "solution": "$m = \\frac{11 - 3}{5 - 1} = \\frac{8}{4} = 2$."
    },
    {
      "id": "2G3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Vecteur directeur d'une équation cartésienne",
      "skill": "Lire un vecteur directeur de ax + by + c = 0",
      "statement": "Un vecteur directeur de la droite d'équation $3x - 5y + 7 = 0$ est :",
      "options": [
        "$\\vec{u}(5 ; 3)$",
        "$\\vec{u}(-5 ; 3)$",
        "$\\vec{u}(3 ; -5)$",
        "$\\vec{u}(3 ; 5)$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{u}(5 ; 3)$",
      "hint1": "Pour une droite $ax + by + c = 0$, un vecteur directeur est $\\vec{u}(-b ; a)$.",
      "hint2": "Ici $a = 3$ et $b = -5$, donc $-b = 5$ et $a = 3$.",
      "solution": "Pour $ax + by + c = 0$, un vecteur directeur est $\\vec{u}(-b ; a) = \\vec{u}(5 ; 3)$."
    },
    {
      "id": "2G3-3",
      "tier": 3,
      "type": "mcq",
      "title": "Équation réduite et point donné",
      "skill": "Déterminer l'équation d'une droite avec point et pente",
      "statement": "Quelle est l'équation réduite de la droite $d$ passant par $A(3 ; -1)$ et de coefficient directeur $-2$ ?",
      "options": [
        "$y = -2x + 5$",
        "$y = -2x - 7$",
        "$y = -2x - 1$",
        "$y = 2x - 7$"
      ],
      "correctIndex": 0,
      "answer": "$y = -2x + 5$",
      "hint1": "$y = -2x + p$. Remplace $(x, y)$ par les coordonnées de $A$.",
      "hint2": "$-1 = -2(3) + p \\implies -1 = -6 + p \\implies p = 5$.",
      "solution": "$y = -2x + p$. En $A(3 ; -1)$ : $-1 = -2(3) + p \\iff p = 5$. Donc $y = -2x + 5$."
    },
    {
      "id": "2G3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Droites parallèles et paramètres",
      "skill": "Appliquer la condition de parallélisme",
      "statement": "La droite $d_1 : 2x - 3y + 1 = 0$ est parallèle à $d_2 : kx + 6y - 5 = 0$. Que vaut $k$ ?",
      "options": [
        "$k = -4$",
        "$k = 4$",
        "$k = -1$",
        "$k = 9$"
      ],
      "correctIndex": 0,
      "answer": "$k = -4$",
      "hint1": "Deux droites sont parallèles si leurs vecteurs directeurs sont colinéaires.",
      "hint2": "$\\vec{u}_1(3 ; 2)$ et $\\vec{u}_2(-6 ; k)$. Colinéarité : $3k - 2(-6) = 0$.",
      "solution": "$\\vec{u}_1(3 ; 2)$ et $\\vec{u}_2(-6 ; k)$. Colinéarité : $3k - 2(-6) = 0 \\iff 3k + 12 = 0 \\iff k = -4$."
    }
  ],
  "2S1": [
    {
      "id": "2S1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Médiane d'une série statistique",
      "skill": "Déterminer la médiane d'une série discrète",
      "statement": "Quelle est la médiane de la série ordonnée de notes : 7 ; 9 ; 11 ; 12 ; 15 ; 18 ; 20 ?",
      "options": [
        "$12$",
        "$11$",
        "$13{,}1$",
        "$11{,}5$"
      ],
      "correctIndex": 0,
      "answer": "$12$",
      "hint1": "L'effectif total est $N = 7$ (impair).",
      "hint2": "La médiane est la 4ème valeur : $\\frac{7+1}{2} = 4$.",
      "solution": "L'effectif est 7 (impair). La médiane est la $(7+1)/2 = 4$ème valeur, soit 12."
    },
    {
      "id": "2S1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Moyenne pondérée",
      "skill": "Calculer la moyenne d'une série avec effectifs",
      "statement": "Un élève a obtenu les notes 10 (coef 2), 14 (coef 3) et 18 (coef 1). Quelle est sa moyenne pondérée ?",
      "options": [
        "$13{,}33$",
        "$14{,}00$",
        "$13{,}00$",
        "$12{,}50$"
      ],
      "correctIndex": 0,
      "answer": "$13{,}33$",
      "hint1": "Somme des coefficients $= 2 + 3 + 1 = 6$.",
      "hint2": "$\\frac{10 \\times 2 + 14 \\times 3 + 18 \\times 1}{6} = \\frac{20 + 42 + 18}{6} = \\frac{80}{6} \\approx 13{,}33$.",
      "solution": "Moyenne $= \\frac{20 + 42 + 18}{6} = \\frac{80}{6} \\approx 13{,}33$."
    },
    {
      "id": "2S1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Quartiles et écart interquartile",
      "skill": "Calculer Q1, Q3 et l'écart interquartile",
      "statement": "Pour une série d'effectif $N = 20$, à quels rangs se situent le premier quartile $Q_1$ et le troisième quartile $Q_3$ ?",
      "options": [
        "5ème et 15ème valeurs",
        "5ème et 16ème valeurs",
        "4ème et 15ème valeurs",
        "6ème et 14ème valeurs"
      ],
      "correctIndex": 0,
      "answer": "5ème et 15ème valeurs",
      "hint1": "$N/4 = 20/4 = 5$ et $3N/4 = 60/4 = 15$.",
      "hint2": "Comme ces quotients sont des entiers, on prend exactement ces rangs.",
      "solution": "$N/4 = 5$ donc $Q_1$ est la 5ème valeur ordonnée. $3N/4 = 15$ donc $Q_3$ est la 15ème valeur ordonnée."
    },
    {
      "id": "2S1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Effet d'une transformation affine sur moyenne et écart-type",
      "skill": "Comprendre les propriétés de la moyenne et de la dispersion",
      "statement": "Si toutes les notes d'une classe sont multipliées par 1,1 puis augmentées de 2, que devient l'écart-type $\\sigma$ ?",
      "options": [
        "Il est multiplié par 1,1 (inchangé par le +2)",
        "Il est multiplié par 1,1 et augmenté de 2",
        "Il reste inchangé",
        "Il est augmenté de 2"
      ],
      "correctIndex": 0,
      "answer": "Il est multiplié par 1,1 (inchangé par le +2)",
      "hint1": "L'écart-type mesure la dispersion, il n'est pas affecté par une translation ($+b$).",
      "hint2": "Pour $Y = aX + b$, $\\sigma(Y) = |a| \\sigma(X)$.",
      "solution": "Pour une transformation $Y = aX + b$, $\\sigma(Y) = |a| \\sigma(X)$. L'écart-type est multiplié par 1,1 et n'est pas affecté par l'ajout constant de 2."
    }
  ],
  "2S2": [
    {
      "id": "2S2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Formule de la réunion de probabilités",
      "skill": "Calculer P(A U B) avec P(A) + P(B) - P(A inter B)",
      "statement": "On donne $P(A) = 0{,}4$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Que vaut $P(A \\cup B)$ ?",
      "options": [
        "$0{,}7$",
        "$0{,}9$",
        "$0{,}3$",
        "$0{,}1$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}7$",
      "hint1": "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
      "hint2": "$0{,}4 + 0{,}5 - 0{,}2 = 0{,}7$.",
      "solution": "$P(A \\cup B) = 0{,}4 + 0{,}5 - 0{,}2 = 0{,}7$."
    },
    {
      "id": "2S2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Événement contraire",
      "skill": "Utiliser P(non A) = 1 - P(A)",
      "statement": "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir au moins une fois un 6 en deux lancers ?",
      "options": [
        "$\\frac{11}{36}$",
        "$\\frac{1}{36}$",
        "$\\frac{25}{36}$",
        "$\\frac{1}{3}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{11}{36}$",
      "hint1": "Pense à l'événement contraire : « n'obtenir aucun 6 en deux lancers ».",
      "hint2": "$P(\\text{aucun 6}) = \\frac{5}{6} \\times \\frac{5}{6} = \\frac{25}{36}$. Donc $1 - \\frac{25}{36} = \\frac{11}{36}$.",
      "solution": "L'événement contraire est « obtenir aucun 6 » dont la probabilité est $(5/6)^2 = 25/36$. La probabilité cherchée est $1 - 25/36 = 11/36$."
    },
    {
      "id": "2S2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Tableau croisé d'effectifs et probabilités",
      "skill": "Calculer des probabilités à partir d'un tableau à double entrée",
      "statement": "Dans un club de 100 membres, 60 font du tennis, 50 de la natation et 20 pratiquent les deux. Quelle est la probabilité qu'un membre choisi au hasard ne pratique aucun de ces deux sports ?",
      "options": [
        "$0{,}10$",
        "$0{,}20$",
        "$0{,}30$",
        "$0{,}40$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}10$",
      "hint1": "Calcule d'abord le nombre de membres qui pratiquent au moins un sport : $T \\cup N$.",
      "hint2": "$60 + 50 - 20 = 90$. Il reste donc $100 - 90 = 10$ membres.",
      "solution": "$P(T \\cup N) = \\frac{60 + 50 - 20}{100} = 0{,}90$. La probabilité de ne pratiquer aucun des deux est $1 - 0{,}90 = 0{,}10$."
    },
    {
      "id": "2S2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Événements incompatibles et partition",
      "skill": "Caractériser des événements disjoints",
      "statement": "Soit $A$ et $B$ deux événements tels que $P(A) = 0{,}6$ et $P(B) = 0{,}5$. Les événements $A$ et $B$ peuvent-ils être incompatibles ?",
      "options": [
        "Non, car leur somme $0{,}6 + 0{,}5 = 1{,}1 > 1$",
        "Oui, si $A \\cap B = \\emptyset$",
        "Oui, si l'univers a plus de 100 éléments",
        "On ne peut pas savoir"
      ],
      "correctIndex": 0,
      "answer": "Non, car leur somme $0{,}6 + 0{,}5 = 1{,}1 > 1$",
      "hint1": "Si $A$ et $B$ sont incompatibles, $P(A \\cup B) = P(A) + P(B)$.",
      "hint2": "Une probabilité ne peut jamais dépasser 1.",
      "solution": "Si $A$ et $B$ étaient incompatibles, on aurait $P(A \\cup B) = P(A) + P(B) = 1{,}1$, ce qui est impossible car une probabilité est $\\le 1$. Donc $A \\cap B \\ne \\emptyset$."
    }
  ],
  "2S3": [
    {
      "id": "2S3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Échantillonnage et règle des 1/racine(n)",
      "skill": "Calculer l'amplitude de l'intervalle de fluctuation en Seconde",
      "statement": "Quelle est l'amplitude de l'intervalle de fluctuation au seuil de 95% pour un échantillon de taille $n = 400$ ?",
      "options": [
        "$0{,}10$",
        "$0{,}05$",
        "$0{,}20$",
        "$0{,}025$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}10$",
      "hint1": "L'intervalle en Seconde est $\\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$. Son amplitude est $\\frac{2}{\\sqrt{n}}$.",
      "hint2": "$\\frac{2}{\\sqrt{400}} = \\frac{2}{20} = 0{,}10$.",
      "solution": "Comme $\\sqrt{400} = 20$, la demi-amplitude est $\\frac{1}{\\sqrt{n}} = 0{,}05$ et l'amplitude totale vaut $\\frac{2}{\\sqrt{400}} = \\frac{2}{20} = 0{,}10$."
    },
    {
      "id": "2S3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Intervalle de fluctuation et prise de décision",
      "skill": "Tester une hypothèse avec un intervalle de fluctuation",
      "statement": "Une pièce est supposée équilibrée ($p = 0{,}5$). Sur 100 lancers, on obtient 63 « Pile ». L'intervalle de fluctuation est $[0{,}4 ; 0{,}6]$. Que conclut-on au seuil de 95% ?",
      "options": [
        "On rejette l'hypothèse de pièce équilibrée car $0{,}63 \\notin [0{,}4 ; 0{,}6]$",
        "On accepte que la pièce est équilibrée car $0{,}63 \\approx 0{,}6$",
        "Le test n'est pas valide car $n < 30$",
        "On ne peut rien conclure"
      ],
      "correctIndex": 0,
      "answer": "On rejette l'hypothèse de pièce équilibrée car $0{,}63 \\notin [0{,}4 ; 0{,}6]$",
      "hint1": "La fréquence observée est $f = 63/100 = 0{,}63$.",
      "hint2": "Vérifie si $f$ appartient à l'intervalle de fluctuation.",
      "solution": "La fréquence observée est $f = 0{,}63$. Comme $0{,}63 > 0{,}6$, la fréquence observée est hors de l'intervalle de fluctuation au seuil de 95% : on rejette l'hypothèse d'équilibre."
    },
    {
      "id": "2S3-3",
      "tier": 3,
      "type": "mcq",
      "title": "Taille d'échantillon pour une précision donnée",
      "skill": "Déterminer la taille n nécessaire",
      "statement": "Quelle taille d'échantillon $n$ minimale doit-on choisir pour que la demi-amplitude de l'intervalle soit inférieure ou égale à $0{,}02$ ?",
      "options": [
        "$n = 2\\,500$",
        "$n = 500$",
        "$n = 1\\,000$",
        "$n = 10\\,000$"
      ],
      "correctIndex": 0,
      "answer": "$n = 2\\,500$",
      "hint1": "La demi-amplitude est $\\frac{1}{\\sqrt{n}}$. On veut $\\frac{1}{\\sqrt{n}} \\le 0{,}02$.",
      "hint2": "$\\sqrt{n} \\ge \\frac{1}{0{,}02} = 50 \\implies n \\ge 50^2 = 2500$.",
      "solution": "$\\frac{1}{\\sqrt{n}} \\le 0{,}02 \\iff \\sqrt{n} \\ge \\frac{1}{0{,}02} = 50 \\iff n \\ge 50^2 = 2\\,500$."
    },
    {
      "id": "2S3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Fluctuation d'échantillonnage et loi des grands nombres",
      "skill": "Interpréter la convergence des fréquences",
      "statement": "Lorsque la taille $n$ de l'échantillon est multipliée par 4, par combien la largeur de l'intervalle de fluctuation est-elle divisée ?",
      "options": [
        "Par 2",
        "Par 4",
        "Par 16",
        "Par $\\sqrt{2}$"
      ],
      "correctIndex": 0,
      "answer": "Par 2",
      "hint1": "L'amplitude dépend de $\\frac{1}{\\sqrt{n}}$.",
      "hint2": "$\\sqrt{4n} = 2\\sqrt{n}$. L'amplitude est donc divisée par 2.",
      "solution": "L'amplitude vaut $\\frac{2}{\\sqrt{n}}$. Si on remplace $n$ par $4n$, $\\sqrt{4n} = 2\\sqrt{n}$, la largeur est donc divisée par 2."
    }
  ]
};

window.MATHS_WORKSHEETS_2NDE = {
  "2N1": [
    {
      "id": "2N1-fiche_td",
      "title": "Fiche Seconde : Ensembles de nombres et arithmétique",
      "filename": "Fiche_2N1_Arithmetique.md",
      "statement": `## Fiche d'entraînement 2N1 : Ensembles de nombres et Arithmétique

### Exercice 1 : Classification de nombres (4 points)
Pour chacun des nombres suivants, donner le plus petit ensemble auquel il appartient ($\\mathbb{N}, \\mathbb{Z}, \\mathbb{D}, \\mathbb{Q}$ ou $\\mathbb{R}$) :
1. $a = -\\frac{42}{7}$
2. $b = \\frac{3}{16}$
3. $c = \\sqrt{72} \\div \\sqrt{2}$
4. $d = \\pi - 3{,}14$

### Exercice 2 : Simplification de radicaux et fractions (4 points)
1. Écrire le nombre $A = \\sqrt{75} - 2\\sqrt{48} + \\sqrt{300}$ sous la forme $k\\sqrt{3}$ où $k$ est un entier relatif.
2. Décomposer 252 et 420 en produit de facteurs premiers, puis simplifier la fraction $\\frac{252}{420}$ pour la rendre irréductible.`,
      "solution": `### Correction Exercice 1
1. $a = -6 \\in \\mathbb{Z}$.
2. $b = \\frac{3}{2^4} = \\frac{3 \\times 5^4}{10^4} = 0{,}1875 \\in \\mathbb{D}$.
3. $c = \\sqrt{\\frac{72}{2}} = \\sqrt{36} = 6 \\in \\mathbb{N}$.
4. $d$ est irrationnel car $\\pi$ est irrationnel et $3{,}14$ est rationnel : $d \\in \\mathbb{R}$.

### Correction Exercice 2
1. $A = \\sqrt{25 \\times 3} - 2\\sqrt{16 \\times 3} + \\sqrt{100 \\times 3} = 5\\sqrt{3} - 8\\sqrt{3} + 10\\sqrt{3} = 7\\sqrt{3}$.
2. $252 = 2^2 \\times 3^2 \\times 7$ et $420 = 2^2 \\times 3 \\times 5 \\times 7$.
On simplifie par le PGCD $= 2^2 \\times 3 \\times 7 = 84$ : $\\frac{252}{420} = \\frac{3}{5}$.`
    }
  ]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_2NDE);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_2NDE);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_2NDE);
