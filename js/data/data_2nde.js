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
      "Pour aller plus loin (rappel du collège) : décomposer un nombre entier naturel en produit de facteurs premiers.",
      "Simplifier des fractions et des radicaux à l'aide de l'arithmétique.",
      "Démontrer que $\\sqrt{2}$ est un nombre irrationnel (démonstration par l'absurde historique).",
      "Utiliser les notions de multiple, de diviseur et de nombre pair ou impair ; pour aller plus loin (rappel du collège) : nombre premier.",
      "Connaître et appliquer les règles de calcul sur les racines carrées.",
      "Démontrer que $\\frac{1}{3}$ n'est pas un nombre décimal et que $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ pour $a, b \\ge 0$.",
      "Utiliser le vocabulaire de la logique : implication, réciproque, contraposée, contre-exemple, raisonnement par l'absurde.",
      "Programmer en Python un test de divisibilité et un encadrement de $\\sqrt{2}$ par balayage.",
      "Utiliser le vocabulaire ensembliste (élément, $\\in$, $\\subset$, $\\varnothing$, $\\cap$, $\\cup$, complémentaire, $\\text{Card}$, couple, produit cartésien) et les quantifications « pour tout », « il existe » en langage naturel."
    ],
    "keyPoints": [
      {
        "title": "1. Les ensembles de nombres et leurs inclusions",
        "content": "Les nombres réels sont classés par ensembles emboîtés :\n• **$\\mathbb{N}$ (Entiers naturels)** : $\\{0, 1, 2, 3, \\dots\\}$\n• **$\\mathbb{Z}$ (Entiers relatifs)** : $\\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$\n• **$\\mathbb{D}$ (Nombres décimaux)** : nombres s'écrivant $\\frac{a}{10^n}$ avec $a \\in \\mathbb{Z}, n \\in \\mathbb{N}$ (nombre fini de chiffres après la virgule, ex: $0{,}75$, $-3{,}12$).\n• **$\\mathbb{Q}$ (Nombres rationnels)** : nombres s'écrivant $\\frac{a}{b}$ avec $a \\in \\mathbb{Z}, b \\in \\mathbb{Z}^*$ (développement décimal périodique, ex: $\\frac{1}{3} = 0{,}333\\dots$).\n• **$\\mathbb{R}$ (Nombres réels)** : ensemble de tous les nombres mesurant une abscisse sur la droite graduée (inclut les irrationnels comme $\\pi$, $\\sqrt{2}$, $\\sqrt{5}$).\n\n$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$"
      },
      {
        "title": "2. Pour aller plus loin (rappel du collège) : décomposition en facteurs premiers et simplifications",
        "content": "*Notion du cycle 4, rappelée ici comme outil pour simplifier des fractions et des radicaux.*\n• **Théorème fondamental de l'arithmétique** : Tout entier $n \\ge 2$ se décompose de manière **unique** en produit de facteurs premiers :\n$$n = p_1^{\\alpha_1} \\times p_2^{\\alpha_2} \\times \\dots \\times p_k^{\\alpha_k}$$\n• **Application aux radicaux** : Pour simplifier $\\sqrt{72}$ :\n$$72 = 2^3 \\times 3^2 = (2^2 \\times 3^2) \\times 2 = 6^2 \\times 2 \\implies \\sqrt{72} = 6\\sqrt{2}$$"
      },
      {
        "title": "3. Démonstration : $\\sqrt{2}$ est irrationnel",
        "content": "Supposons par l'absurde que $\\sqrt{2} \\in \\mathbb{Q}$ : il existe alors deux entiers $p$ et $q > 0$ tels que $\\sqrt{2} = \\frac{p}{q}$, avec la fraction $\\frac{p}{q}$ **irréductible** (donc $p$ et $q$ ne sont pas tous deux pairs).\n1. En élevant au carré : $2 = \\frac{p^2}{q^2} \\iff p^2 = 2q^2$.\n2. Donc $p^2$ est pair, ce qui implique que $p$ est pair : si $p$ était impair, son carré serait impair (propriété démontrée à la section 9). Posons $p = 2k$ ($k \\in \\mathbb{Z}$).\n3. Alors $(2k)^2 = 2q^2 \\iff 4k^2 = 2q^2 \\iff q^2 = 2k^2$.\n4. Donc $q^2$ est pair et, pour la même raison, $q$ est également pair.\n5. **Contradiction** : $p$ et $q$ sont tous les deux pairs, ce qui contredit le fait que la fraction $\\frac{p}{q}$ soit irréductible !\nConclusion : $\\sqrt{2} \\notin \\mathbb{Q}$, c'est un nombre irrationnel."
      },
      {
        "title": "4. Multiples, diviseurs, nombres pairs et impairs",
        "content": "• **Définition** : soient $a$ et $b$ deux entiers relatifs avec $b \\neq 0$. On dit que $a$ est un **multiple** de $b$ (ou que $b$ est un **diviseur** de $a$) s'il existe un entier $k$ tel que $a = k \\times b$.\n• Un entier $n$ est **pair** s'il s'écrit $n = 2k$ avec $k \\in \\mathbb{Z}$, et **impair** s'il s'écrit $n = 2k + 1$.\n• **Propriété** : la somme de deux multiples de $a$ est un multiple de $a$ : $ka + k'a = (k + k')a$.\n• **Propriété** : le carré d'un nombre impair est impair. En effet, $(2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$.\nPar contraposée : si $p^2$ est pair, alors $p$ est pair (c'est l'argument utilisé dans la démonstration de l'irrationalité de $\\sqrt{2}$)."
      },
      {
        "title": "5. Pour aller plus loin (rappel du collège) : nombres premiers",
        "content": "*Notion du cycle 4, utile ici comme outil pour rendre une fraction irréductible.*\n• **Définition** : un entier naturel $p$ est **premier** s'il possède exactement deux diviseurs positifs : $1$ et lui-même.\n• Les nombres premiers inférieurs à 30 sont : $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$.\n• **Test pratique** : pour savoir si $n \\ge 2$ est premier, il suffit de tester sa divisibilité par les nombres premiers $p$ tels que $p^2 \\le n$.\n*Exemple* : pour $97$, on teste $2, 3, 5, 7$ (car $11^2 = 121 > 97$). Aucun ne divise $97$, donc $97$ est premier."
      },
      {
        "title": "6. Pour aller plus loin : reconnaître un nombre décimal",
        "content": "Une fraction **irréductible** $\\frac{a}{b}$ (avec $b > 0$) est un nombre décimal si et seulement si $b$ n'a pas d'autre facteur premier que $2$ et $5$ (propriété admise).\n• $\\frac{7}{40}$ : $40 = 2^3 \\times 5$, donc $\\frac{7}{40} \\in \\mathbb{D}$. En effet $\\frac{7}{40} = \\frac{7 \\times 25}{40 \\times 25} = \\frac{175}{1000} = 0{,}175$.\n• $\\frac{5}{12}$ : $12 = 2^2 \\times 3$ contient le facteur $3$, donc $\\frac{5}{12} \\notin \\mathbb{D}$ (on a $\\frac{5}{12} = 0{,}41666\\dots$)."
      },
      {
        "title": "7. Règles de calcul sur les racines carrées",
        "content": "Pour tous réels $a \\ge 0$ et $b \\ge 0$ :\n$$\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b} \\qquad (\\sqrt{a})^2 = a$$\net si $b > 0$ : $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$.\n• Pour tout réel $a$ : $\\sqrt{a^2} = |a|$ (par exemple $\\sqrt{(-3)^2} = \\sqrt{9} = 3$).\n• **Contre-exemple** : la racine d'une somme n'est pas la somme des racines : $\\sqrt{9 + 16} = \\sqrt{25} = 5$ alors que $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$."
      },
      {
        "title": "8. Démonstration : $\\frac{1}{3}$ n'est pas un nombre décimal",
        "content": "On raisonne **par l'absurde** : supposons que $\\frac{1}{3}$ soit décimal. Il existe alors un entier $a$ et un entier naturel $n$ tels que $\\frac{1}{3} = \\frac{a}{10^n}$.\n1. En multipliant par $3 \\times 10^n$, on obtient $10^n = 3a$ : l'entier $10^n$ serait donc un **multiple de $3$**.\n2. Or $10^n$ s'écrit avec un $1$ suivi de $n$ zéros : la somme de ses chiffres vaut $1$, qui n'est pas divisible par $3$. Donc $10^n$ n'est pas un multiple de $3$.\n3. **Contradiction**. Conclusion : $\\frac{1}{3} \\notin \\mathbb{D}$, c'est un rationnel non décimal ($\\frac{1}{3} = 0{,}333\\dots$)."
      },
      {
        "title": "9. Démonstrations : somme de deux multiples, carré d'un nombre impair",
        "content": "**Propriété 1** : soit $a$ un entier. La somme de deux multiples de $a$ est un multiple de $a$.\n*Démonstration* : soient $m$ et $m'$ deux multiples de $a$. Il existe des entiers $k$ et $k'$ tels que $m = ka$ et $m' = k'a$. Alors $m + m' = ka + k'a = (k + k')a$, et $k + k'$ est un entier : $m + m'$ est un multiple de $a$.\n*Exemple* : $21 = 3 \\times 7$ et $35 = 5 \\times 7$, donc $21 + 35 = 8 \\times 7 = 56$.\n\n**Propriété 2** : le carré d'un nombre impair est impair.\n*Démonstration* : soit $n$ impair : il existe un entier $k$ tel que $n = 2k + 1$. Alors\n$$n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$$\net $2k^2 + 2k$ est un entier : $n^2$ est de la forme $2K + 1$, il est impair.\n*Conséquence (contraposée)* : si $n^2$ est pair, alors $n$ est pair."
      },
      {
        "title": "10. Démonstration : $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ pour $a \\ge 0$ et $b \\ge 0$",
        "content": "**Rappel** : pour $x \\ge 0$, $\\sqrt{x}$ est l'**unique** nombre positif dont le carré vaut $x$.\n*Démonstration* : soient $a \\ge 0$ et $b \\ge 0$.\n1. $\\sqrt{a} \\ge 0$ et $\\sqrt{b} \\ge 0$, donc le produit $\\sqrt{a}\\sqrt{b}$ est positif.\n2. $(\\sqrt{a}\\sqrt{b})^2 = (\\sqrt{a})^2 \\times (\\sqrt{b})^2 = a \\times b$.\n3. $\\sqrt{a}\\sqrt{b}$ est donc un nombre positif dont le carré vaut $ab$ : c'est $\\sqrt{ab}$.\n\n**Complément** : pour $a > 0$ et $b > 0$, $\\sqrt{a + b} < \\sqrt{a} + \\sqrt{b}$.\n*Démonstration* : les deux membres sont positifs, il suffit donc de comparer leurs carrés. $(\\sqrt{a} + \\sqrt{b})^2 = a + 2\\sqrt{a}\\sqrt{b} + b > a + b = (\\sqrt{a + b})^2$ car $2\\sqrt{a}\\sqrt{b} > 0$. Deux nombres positifs sont rangés dans le même ordre que leurs carrés, d'où le résultat."
      },
      {
        "title": "11. Logique : implication, réciproque, contraposée",
        "content": "• Une **proposition** est un énoncé mathématique qui est soit vrai, soit faux : « $7$ est un nombre premier » (vraie), « $\\sqrt{2} \\in \\mathbb{Q}$ » (fausse). Une proposition peut contenir une **variable** : « $n^2 + 1$ est pair » est vraie pour $n = 3$ et fausse pour $n = 2$.\n• **Quantifications** : « **pour tout** réel $x$, $x^2 \\ge 0$ » est vraie (quantification universelle) ; « **il existe** un réel $x$ tel que $x^2 = 2$ » est vraie (quantification existentielle, avec $x = \\sqrt{2}$) ; « pour tout réel $x$, $x^2 > x$ » est fausse : le contre-exemple $x = \\frac{1}{2}$ suffit, car $\\frac{1}{4} < \\frac{1}{2}$. *(Les symboles $\\forall$ et $\\exists$ ne sont pas utilisés en seconde.)*\n• **Négation d'une proposition simple** : la négation de « $x > 2$ » est « $x \\le 2$ » ; celle de « $n$ est pair » est « $n$ est impair ».\n• Une **implication** « si $P$, alors $Q$ » se note $P \\implies Q$. Exemple : « si $n$ est pair, alors $n^2$ est pair » (vraie).\n• Sa **réciproque** est « si $Q$, alors $P$ ». Elle peut être fausse : « si $x^2 = 4$, alors $x = 2$ » est fausse ($x = -2$ convient), alors que sa réciproque « si $x = 2$, alors $x^2 = 4$ » est vraie.\n• Sa **contraposée** est « si non $Q$, alors non $P$ » : elle est **toujours** vraie en même temps que l'implication. C'est ce qu'on utilise pour $\\sqrt{2}$ : « $n$ impair $\\implies n^2$ impair » donne « $n^2$ pair $\\implies n$ pair ».\n• Quand $P \\implies Q$ et $Q \\implies P$ sont vraies, on écrit $P \\iff Q$ (**équivalence**).\n• Pour montrer qu'une affirmation générale est fausse, **un contre-exemple** suffit.\n• **Négation** : la négation de « $A$ et $B$ » est « non $A$ ou non $B$ » ; celle de « $A$ ou $B$ » est « non $A$ et non $B$ ».\n• **Raisonnement par l'absurde** : on suppose le contraire de ce qu'on veut montrer et on aboutit à une contradiction ($\\sqrt{2}$, $\\frac{1}{3}$). **Disjonction des cas** : on traite séparément tous les cas possibles (par exemple $n$ pair, puis $n$ impair)."
      },
      {
        "title": "12. Algorithmes en Python : multiples et encadrement de $\\sqrt{2}$",
        "content": "**Prérequis** : les fonctions (`def`), les tests et les boucles (`while`) sont présentés au chapitre 2S4 (Algorithmique et programmation) ; ici, il suffit de savoir que `a % b` donne le reste et `a // b` le quotient de la division euclidienne de `a` par `b`.\n• **Tester si $a$ est un multiple de $b$** ($b \\neq 0$) : c'est le cas si et seulement si le reste de la division de $a$ par $b$ est nul.\n• **Plus grand multiple de $a$ inférieur ou égal à $b$** : c'est $a$ fois le quotient entier de $b$ par $a$.\n```python\ndef est_multiple(a, b):\n    return a % b == 0\n\ndef plus_grand_multiple(a, b):\n    return (b // a) * a\n\nprint(est_multiple(91, 7))          # affiche True (91 = 7 × 13)\nprint(plus_grand_multiple(7, 100))  # affiche 98 (7 × 14 = 98 et 7 × 15 = 105)\n```\n• **Encadrement de $\\sqrt{2}$ par balayage** à $10^{-n}$ près : on cherche le plus grand entier $k$ tel que $\\left(\\frac{k}{10^n}\\right)^2 \\le 2$, c'est-à-dire $k^2 \\le 2 \\times 10^{2n}$ (on travaille avec des entiers pour éviter les erreurs d'arrondi).\n```python\ndef encadrement_racine2(n):\n    k = 10 ** n\n    while (k + 1) ** 2 <= 2 * 10 ** (2 * n):\n        k = k + 1\n    return k / 10 ** n, (k + 1) / 10 ** n\n\nprint(encadrement_racine2(3))   # affiche (1.414, 1.415)\n```\nAinsi $1{,}414 \\le \\sqrt{2} < 1{,}415$ : c'est un encadrement d'amplitude $10^{-3}$."
      },
      {
        "title": "13. Vocabulaire ensembliste",
        "content": "Soit $E$ un ensemble et $A$, $B$ deux **sous-ensembles** (ou parties) de $E$.\n• $x \\in A$ : $x$ **appartient** à $A$ (est un **élément** de $A$) ; $x \\notin A$ sinon.\n• $A \\subset B$ : $A$ est **inclus** dans $B$ (tout élément de $A$ est un élément de $B$). Exemple : $\\mathbb{N} \\subset \\mathbb{Z}$.\n• $\\varnothing$ est l'**ensemble vide** ; $\\{1 ; 4 ; 9\\}$ est l'ensemble dont les éléments sont $1$, $4$ et $9$.\n• $A \\cap B$ (**intersection**) : éléments communs à $A$ **et** à $B$ ; $A \\cup B$ (**réunion**) : éléments de $A$ **ou** de $B$ (« ou » inclusif).\n• **Complémentaire** de $A$ dans $E$, noté $\\overline{A}$ ou $E \\setminus A$ : éléments de $E$ qui ne sont pas dans $A$.\n• $\\text{Card}(A)$ : **cardinal** (nombre d'éléments) d'un ensemble fini $A$.\n*Exemple* : $E = \\{1 ; 2 ; \\dots ; 10\\}$, $A$ = « nombres pairs de $E$ » $= \\{2 ; 4 ; 6 ; 8 ; 10\\}$, $B$ = « multiples de $3$ de $E$ » $= \\{3 ; 6 ; 9\\}$. Alors $A \\cap B = \\{6\\}$, $A \\cup B = \\{2 ; 3 ; 4 ; 6 ; 8 ; 9 ; 10\\}$, $\\text{Card}(A \\cup B) = 7$ et $\\overline{A} = \\{1 ; 3 ; 5 ; 7 ; 9\\}$.\n• Un **couple** $(a ; b)$ est une liste ordonnée de deux éléments : $(1 ; 2) \\neq (2 ; 1)$. Le **produit cartésien** $E \\times F$ est l'ensemble des couples $(x ; y)$ avec $x \\in E$ et $y \\in F$. Par exemple $\\{P ; F\\} \\times \\{1 ; 2 ; 3\\}$ contient $2 \\times 3 = 6$ couples, de $(P ; 1)$ à $(F ; 3)$ ; les coordonnées $(x ; y)$ d'un point du plan forment un couple de $\\mathbb{R} \\times \\mathbb{R}$."
      },
      {
        "title": "14. Automatismes : écritures, ordres de grandeur et unités",
        "content": "À travailler régulièrement, de tête :\n• **Passer d'une écriture à une autre** : $0{,}375 = \\frac{3}{8} = 37{,}5\\,\\%$ ; $\\frac{7}{20} = 0{,}35 = 35\\,\\%$ ; $2{,}5\\,\\% = 0{,}025$.\n• **Comparer des fractions simples** : $\\frac{3}{4} = \\frac{21}{28}$ et $\\frac{5}{7} = \\frac{20}{28}$, donc $\\frac{5}{7} < \\frac{3}{4}$.\n• **Puissances** : $10^3 \\times 10^{-5} = 10^{-2}$ ; $\\frac{2^7}{2^4} = 2^3 = 8$ ; $(3^2)^3 = 3^6$.\n• **Ordre de grandeur** : $49{,}8 \\times 0{,}21 \\approx 50 \\times 0{,}2 = 10$ ; un résultat de $104{,}58$ serait donc invraisemblable.\n• **Vraisemblance** : une probabilité supérieure à $1$, une longueur négative ou une vitesse de $3\\,000$ km/h pour un cycliste signalent une erreur.\n• **Conversions d'unités** : $1\\ \\text{m}^2 = 10\\,000\\ \\text{cm}^2$ ; $1\\ \\text{m}^3 = 1\\,000\\ \\text{L}$ et $1\\ \\text{L} = 1\\ \\text{dm}^3$ ; $90\\ \\text{km/h} = \\frac{90\\,000\\ \\text{m}}{3\\,600\\ \\text{s}} = 25\\ \\text{m/s}$ ; $1\\ \\text{h}\\ 15\\ \\text{min} = 1{,}25\\ \\text{h}$ ; $1\\ \\text{g} = 1\\,000\\ \\text{mg}$.\n• **Droite graduée** : placer $-\\frac{3}{2}$ entre $-2$ et $-1$, au milieu ; lire l'abscisse d'un point repéré entre deux graduations."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer le plus petit ensemble contenant un nombre",
        "example": "Déterminer le plus petit ensemble auquel appartiennent : $A = \\frac{14}{7}$, $B = -\\frac{12}{5}$, $C = \\frac{7}{6}$ et $D = \\sqrt{49}$.",
        "steps": [
          "**Étape 1** : Simplifier chaque expression avant de conclure. $A = 2$ et $D = 7$ sont des entiers naturels, donc $A, D \\in \\mathbb{N}$.",
          "**Étape 2** : Pour $B = -2{,}4 = -\\frac{24}{10}$, c'est un décimal négatif non entier, donc son plus petit ensemble est $\\mathbb{D}$.",
          "**Étape 3** : Pour $C = \\frac{7}{6} = 1{,}1666\\dots$, en posant la division de $7$ par $6$, le reste $4$ revient sans cesse et le chiffre $6$ se répète indéfiniment : $C$ n'est pas décimal. C'est un quotient d'entiers, donc son plus petit ensemble est $\\mathbb{Q}$."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Rendre une fraction irréductible avec les facteurs premiers",
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
      "⚠️ (Pour aller plus loin, rappel du collège) $1$ n'est pas un nombre premier : il ne possède qu'un seul diviseur positif. Le plus petit nombre premier est $2$ (c'est aussi le seul nombre premier pair).",
      "⚠️ $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ en général : on ne peut « couper » une racine que sur un **produit** ou un **quotient**.",
      "⚠️ Le quotient de deux décimaux n'est pas toujours décimal : $1$ et $3$ sont décimaux, mais $\\frac{1}{3} \\notin \\mathbb{D}$.",
      "⚠️ Ne pas confondre réciproque et contraposée : « si $x = 2$ alors $x^2 = 4$ » est vraie, sa réciproque « si $x^2 = 4$ alors $x = 2$ » est fausse, mais sa contraposée « si $x^2 \\neq 4$ alors $x \\neq 2$ » est vraie."
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
        "q": "(Pour aller plus loin) Le nombre $91$ est-il premier ?",
        "a": "Non : $91 = 7 \\times 13$."
      },
      {
        "q": "**Pour aller plus loin** : écrire $x = 0{,}272727\\dots$ sous forme de fraction irréductible.",
        "a": "$100x = 27{,}2727\\dots$ donc $100x - x = 27$, soit $99x = 27$ et $x = \\frac{27}{99} = \\frac{3}{11}$."
      },
      {
        "q": "**Pour aller plus loin** : pourquoi $\\frac{7}{40}$ est-il un nombre décimal ?",
        "a": "La fraction est irréductible et $40 = 2^3 \\times 5$ n'a que $2$ et $5$ comme facteurs premiers : $\\frac{7}{40} = 0{,}175$."
      },
      {
        "q": "Comment démontrer que $\\frac{1}{3}$ n'est pas décimal ?",
        "a": "Par l'absurde : si $\\frac{1}{3} = \\frac{a}{10^n}$, alors $10^n = 3a$ serait multiple de $3$ ; or la somme des chiffres de $10^n$ vaut $1$, contradiction."
      },
      {
        "q": "Quelle est la contraposée de « si $n$ est impair, alors $n^2$ est impair » ?",
        "a": "« Si $n^2$ est pair, alors $n$ est pair. » Elle est vraie, comme l'implication de départ."
      },
      {
        "q": "Pourquoi a-t-on $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ pour $a, b \\ge 0$ ?",
        "a": "$\\sqrt{a}\\sqrt{b}$ est positif et son carré vaut $(\\sqrt{a})^2(\\sqrt{b})^2 = ab$ : c'est donc la racine carrée de $ab$."
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
      "Calculer avec des expressions fractionnaires (somme, quotient) en précisant les valeurs interdites.",
      "Utiliser les règles de calcul sur les puissances entières (positives et négatives).",
      "Démontrer qu'une égalité est vraie (par le calcul) ou fausse (par un contre-exemple).",
      "Automatiser les règles du calcul fractionnaire et des signes ($-(a - b) = b - a$, division par une fraction…).",
      "Programmer en Python la recherche de la première puissance d'un nombre dépassant un seuil."
    ],
    "keyPoints": [
      {
        "title": "1. Les 3 identités remarquables fondamentales",
        "content": "Pour tous nombres réels $a$ et $b$ :\n1. Carré d'une somme : $$(a + b)^2 = a^2 + 2ab + b^2$$\n2. Carré d'une différence : $$(a - b)^2 = a^2 - 2ab + b^2$$\n3. Différence de deux carrés : $$(a - b)(a + b) = a^2 - b^2$$\n\n• **Dans le sens direct** : on développe un produit en une somme.\n• **Dans le sens réciproque** : on factorise une somme en un produit (très utile pour résoudre des équations produit-nul)."
      },
      {
        "title": "2. Techniques avancées de factorisation",
        "content": "• **Facteur commun évident ou composé** :\n$$A(x) = (2x - 3)(x + 5) - (2x - 3)(4x - 1) = (2x - 3)[(x + 5) - (4x - 1)] = (2x - 3)(-3x + 6) = -3(2x - 3)(x - 2)$$\nLa factorisation n'est complète qu'après la mise en facteur finale du nombre commun aux coefficients du second facteur : $-3x + 6 = -3(x - 2)$.\n• **Reconnaissance d'une identité remarquable** :\n$$B(x) = 9x^2 - 25 = (3x)^2 - 5^2 = (3x - 5)(3x + 5)$$"
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
        "title": "5. Expressions fractionnaires et valeurs interdites",
        "content": "Un quotient $\\frac{A(x)}{B(x)}$ n'existe que si $B(x) \\neq 0$ : les valeurs de $x$ qui annulent le dénominateur sont les **valeurs interdites**.\nPour additionner deux quotients, on les réduit au même dénominateur : $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$.\n*Exemple* : pour $x \\neq 0$ et $x \\neq -1$ :\n$$\\frac{1}{x} + \\frac{2}{x + 1} = \\frac{(x + 1) + 2x}{x(x + 1)} = \\frac{3x + 1}{x(x + 1)}$$"
      },
      {
        "title": "6. Démontrer ou réfuter une égalité",
        "content": "• Pour **démontrer** qu'une égalité est vraie pour tout $x$, on transforme un membre (en général le plus compliqué) jusqu'à obtenir l'autre, ou on développe les deux membres séparément.\n• Pour **prouver qu'elle est fausse**, un seul **contre-exemple** suffit.\n*Exemple* : l'égalité $(a + b)^2 = a^2 + b^2$ est fausse : avec $a = b = 1$, on obtient $(1 + 1)^2 = 4$ mais $1^2 + 1^2 = 2$."
      },
      {
        "title": "7. Les identités remarquables au service du calcul mental",
        "content": "• $101^2 = (100 + 1)^2 = 10\\,000 + 200 + 1 = 10\\,201$.\n• $99^2 = (100 - 1)^2 = 10\\,000 - 200 + 1 = 9\\,801$.\n• $49 \\times 51 = (50 - 1)(50 + 1) = 50^2 - 1^2 = 2\\,500 - 1 = 2\\,499$."
      },
      {
        "title": "8. Automatismes : signes et écritures fractionnaires",
        "content": "Pour tous réels $a$, $b$, $c$, $d$ (dénominateurs non nuls) :\n• $-(a + b) = -a - b$ et $-(a - b) = b - a$ ; $(-1) \\times a = -a$.\n• $\\frac{0}{a} = 0$, $\\frac{x}{1} = x$, $\\frac{ab}{c} = a \\times \\frac{b}{c}$.\n• **Diviser par une fraction**, c'est multiplier par son inverse :\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc} \\qquad \\frac{1}{\\frac{1}{a}} = a \\qquad \\frac{1}{\\frac{a}{b}} = \\frac{b}{a}$$\n*Exemples* : $\\frac{3}{4} \\div \\frac{9}{8} = \\frac{3}{4} \\times \\frac{8}{9} = \\frac{24}{36} = \\frac{2}{3}$ ; $\\frac{5}{\\frac{1}{2}} = 10$.\n• **Comparer deux fractions** : on les écrit avec un même dénominateur, ou on étudie le signe de leur différence.\n• **Factorisations rapides** : $ax^2 + bx = x(ax + b)$ et $ax + bx = (a + b)x$. Par exemple $3x^2 - 6x = 3x(x - 2)$."
      },
      {
        "title": "9. Illustration géométrique de $(a + b)^2$",
        "content": "Pour $a > 0$ et $b > 0$, on découpe un carré de côté $a + b$ en quatre morceaux : un carré de côté $a$ (aire $a^2$), un carré de côté $b$ (aire $b^2$) et deux rectangles de dimensions $a \\times b$ (aire $ab$ chacun).\nL'aire totale vaut donc $a^2 + ab + ab + b^2$, ce qui illustre :\n$$(a + b)^2 = a^2 + 2ab + b^2$$\nLes deux rectangles expliquent le **double produit** $2ab$ que l'on oublie souvent."
      },
      {
        "title": "10. Python : première puissance dépassant un seuil",
        "content": "Pour un nombre $q > 1$, les puissances $q^1, q^2, q^3, \\dots$ finissent par dépasser n'importe quel seuil. On cherche la première qui le dépasse avec une boucle non bornée :\n```python\ndef premiere_puissance(q, seuil):\n    n = 0\n    p = 1\n    while p <= seuil:\n        p = p * q\n        n = n + 1\n    return n\n\nprint(premiere_puissance(2, 1000))   # affiche 10 car 2**9 = 512 et 2**10 = 1024\n```\nPour $0 < q < 1$, les puissances diminuent : on cherche la première puissance **inférieure** à un seuil en remplaçant la condition par `while p >= seuil:`."
      },
      {
        "title": "11. Pour aller plus loin",
        "content": "Ces développements ne sont pas exigibles mais s'obtiennent avec les outils du chapitre :\n$$(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc$$\n$$(a + b)^3 = (a + b)^2(a + b) = a^3 + 3a^2b + 3ab^2 + b^3$$\n*Vérification* avec $a = b = 1$ : $(1 + 1)^3 = 8$ et $1 + 3 + 3 + 1 = 8$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Factoriser une expression avec différence de deux carrés composés",
        "example": "Factoriser $E(x) = (3x - 2)^2 - (x + 4)^2$.",
        "steps": [
          "**Étape 1** : On reconnaît la forme $a^2 - b^2 = (a - b)(a + b)$ avec $a = (3x - 2)$ et $b = (x + 4)$.",
          "**Étape 2** : On écrit les facteurs en conservant les parenthèses intérieures : $E(x) = [(3x - 2) - (x + 4)][(3x - 2) + (x + 4)]$.",
          "**Étape 3** : On supprime les parenthèses avec précaution : $E(x) = [3x - 2 - x - 4][3x - 2 + x + 4] = (2x - 6)(4x + 2)$.",
          "**Étape 4** : On met en facteur les nombres communs aux coefficients de chaque facteur : $2x - 6 = 2(x - 3)$ et $4x + 2 = 2(2x + 1)$, donc $(2x - 6)(4x + 2) = 2(x - 3) \\times 2(2x + 1) = 4(x - 3)(2x + 1)$.",
          "**Conclusion** : $E(x) = 4(x - 3)(2x + 1)$ est la forme factorisée complète. Contrôle en $x = 0$ : $(-2)^2 - 4^2 = -12$ et $4 \\times (-3) \\times 1 = -12$."
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
      "⚠️ On ne simplifie jamais un terme d'une somme : $\\frac{x + 3}{x} \\neq 3$. Seul un **facteur** commun au numérateur et au dénominateur se simplifie : $\\frac{3(x + 1)}{5(x + 1)} = \\frac{3}{5}$ pour $x \\neq -1$.",
      "⚠️ Pour diviser par une fraction, la méthode usuelle consiste à multiplier par l'**inverse** de la **seconde** fraction : $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$. Par exemple, $\\frac{3}{4} \\div \\frac{9}{8} = \\frac{3}{4} \\times \\frac{8}{9} = \\frac{2}{3}$ ; inverser la première fraction donnerait $\\frac{4}{3} \\times \\frac{9}{8} = \\frac{3}{2}$, ce qui est faux."
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
      },
      {
        "q": "Calculer $\\frac{2}{3} \\div \\frac{4}{9}$.",
        "a": "$\\frac{2}{3} \\times \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2}$."
      },
      {
        "q": "Factoriser $5x^2 + 15x$.",
        "a": "$5x^2 + 15x = 5x(x + 3)$."
      },
      {
        "q": "Développer $-(4 - x)$.",
        "a": "$-(4 - x) = x - 4$."
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
      "Comparer deux nombres en étudiant le signe de leur différence.",
      "Additionner des inégalités et comparer deux nombres strictement positifs par leur quotient.",
      "Arrondir un résultat avec un nombre de chiffres significatifs adapté.",
      "Donner un encadrement décimal d'amplitude $10^{-n}$ d'un nombre réel."
    ],
    "keyPoints": [
      {
        "title": "1. Intervalles de $\\mathbb{R}$, intersection et réunion",
        "content": "• **Intervalles bornés** : soit $a$ et $b$ deux réels tels que $a < b$. Les réels $a$ et $b$ sont les **bornes** des intervalles suivants.\n• $[a ; b]$ (intervalle **fermé**) est l'ensemble des réels $x$ tels que $a \\le x \\le b$.\n• $]a ; b[$ (intervalle **ouvert**) est l'ensemble des réels $x$ tels que $a < x < b$.\n• $[a ; b[$ (intervalle **semi-ouvert**) est l'ensemble des réels $x$ tels que $a \\le x < b$.\n• $]a ; b]$ (intervalle **semi-ouvert**) est l'ensemble des réels $x$ tels que $a < x \\le b$.\n• **Lecture des crochets** : une inégalité large correspond à une borne **incluse**, avec un crochet tourné vers l'intérieur ; une inégalité stricte correspond à une borne **exclue**, avec un crochet tourné vers l'extérieur. *Exemple* : $x \\in [-2 ; 3[$ signifie $-2 \\le x < 3$ : $-2$ appartient à l'intervalle, $3$ n'y appartient pas. Les intervalles non bornés sont définis à la section 5.\n• **Intersection $I \\cap J$** : ensemble des réels appartenant **à la fois** à $I$ et à $J$.\n• **Réunion $I \\cup J$** : ensemble des réels appartenant **à au moins l'un** des deux intervalles $I$ ou $J$.\nExemple : Si $I = [-3 ; 4]$ et $J = [1 ; 7[$, alors :\n$$I \\cap J = [1 ; 4] \\quad \\text{et} \\quad I \\cup J = [-3 ; 7[$$"
      },
      {
        "title": "2. Valeur absolue et distance sur la droite numérique",
        "content": "• **Définition** : La valeur absolue d'un réel $x$, notée $|x|$, est sa distance à l'origine $0$ :\n$$|x| = \\begin{cases} x & \\text{si } x \\ge 0 \\\\ -x & \\text{si } x < 0 \\end{cases}$$\n• **Propriété géométrique** : Pour tous réels $x$ et $a$, $|x - a|$ est la **distance** entre les points d'abscisses $x$ et $a$ sur la droite graduée.\n• **Résolution d'inéquations** : Pour $r > 0$ :\n$$|x - a| \\le r \\iff a - r \\le x \\le a + r \\iff x \\in [a - r ; a + r]$$\n$$|x - a| = r \\iff x = a - r \\quad \\text{ou} \\quad x = a + r$$\n• **Centre et rayon** : $[a - r ; a + r]$ est l'intervalle de **centre** $a$ et de **rayon** $r$. Réciproquement, l'intervalle $[\\alpha ; \\beta]$ a pour centre $c = \\frac{\\alpha + \\beta}{2}$ et pour rayon $r = \\frac{\\beta - \\alpha}{2}$, et $x \\in [\\alpha ; \\beta] \\iff |x - c| \\le r$. Avec une inégalité stricte : $|x - a| < r \\iff x \\in ]a - r ; a + r[$.\n*Exemple* : $[2 ; 10]$ a pour centre $\\frac{2 + 10}{2} = 6$ et pour rayon $\\frac{10 - 2}{2} = 4$, donc $x \\in [2 ; 10] \\iff |x - 6| \\le 4$.\n• **Pour aller plus loin** : les réels dont la distance à $a$ est **supérieure** à $r$ ne forment pas un intervalle ; le cas $|x - a| > r$ est traité dans la méthode « Pour aller plus loin » du chapitre."
      },
      {
        "title": "3. Ordre et opérations",
        "content": "Pour tous réels $a$, $b$ et $c$ :\n• **Addition** : $a < b \\iff a + c < b + c$ (on peut ajouter ou soustraire un même nombre).\n• **Multiplication par un nombre strictement positif** : si $c > 0$, alors $a < b \\iff ac < bc$ (le sens est conservé).\n• **Multiplication par un nombre strictement négatif** : si $c < 0$, alors $a < b \\iff ac > bc$ (le sens est **inversé**).\n*Exemple* : $-2x < 6 \\iff x > \\frac{6}{-2} \\iff x > -3$.\n• **Somme d'inégalités** : si $a < b$ et $c < d$, alors $a + c < b + d$ (on peut **additionner** membre à membre deux inégalités de même sens).\n*Exemple* : si $2 < x < 3$ et $1 < y < 4$, alors $3 < x + y < 7$."
      },
      {
        "title": "4. Comparer deux nombres",
        "content": "• **Par la différence** : $a \\le b \\iff b - a \\ge 0$. Pour comparer deux nombres, on étudie le signe de leur différence.\n*Exemple* : $\\frac{5}{7} - \\frac{7}{10} = \\frac{50 - 49}{70} = \\frac{1}{70} > 0$, donc $\\frac{5}{7} > \\frac{7}{10}$.\n• **Nombres positifs** : pour $a \\ge 0$ et $b \\ge 0$, on a $a < b \\iff a^2 < b^2 \\iff \\sqrt{a} < \\sqrt{b}$.\n• **Propriété** : si $0 < a < 1$, alors $a^2 < a$ ; si $a > 1$, alors $a^2 > a$. En effet $a^2 - a = a(a - 1)$, qui est du signe de $a - 1$ lorsque $a > 0$.\n• **Inverses de nombres strictement positifs** : si $0 < a \\le b$, alors $\\frac{1}{b} \\le \\frac{1}{a}$. En effet, $ab > 0$ : en divisant les deux membres de $a \\le b$ par $ab$, le sens est conservé, donc $\\frac{a}{ab} \\le \\frac{b}{ab}$, c'est-à-dire $\\frac{1}{b} \\le \\frac{1}{a}$. *Exemple* : $2 \\le 5$ donne $\\frac{1}{5} \\le \\frac{1}{2}$. Ce résultat sera repris au chapitre 2A3 avec la fonction inverse.\n• **Par le quotient** (pour $a > 0$ et $b > 0$) : $a < b \\iff \\frac{a}{b} < 1$.\n*Exemple* : $\\frac{7}{8} \\div \\frac{8}{9} = \\frac{63}{64} < 1$, donc $\\frac{7}{8} < \\frac{8}{9}$."
      },
      {
        "title": "5. Intervalles non bornés et encadrements",
        "content": "• Les intervalles bornés sont définis à la section 1. Pour les intervalles **non bornés** : $[a ; +\\infty[$ est l'ensemble des réels $x$ tels que $x \\ge a$ ; $]a ; +\\infty[$ celui des réels $x$ tels que $x > a$ ; $]-\\infty ; b]$ celui des réels $x$ tels que $x \\le b$ ; $]-\\infty ; b[$ celui des réels $x$ tels que $x < b$ ; $\\mathbb{R} = ]-\\infty ; +\\infty[$.\n• Du côté de $+\\infty$ ou $-\\infty$, le crochet est **toujours ouvert**.\n• **Encadrement** : $1{,}414 < \\sqrt{2} < 1{,}415$ est un encadrement de $\\sqrt{2}$ d'**amplitude** $10^{-3}$ ; $1{,}414$ en est une valeur approchée par défaut à $10^{-3}$ près.\n• **Arrondir avec des chiffres significatifs** : les chiffres significatifs sont comptés à partir du premier chiffre non nul. $0{,}004\\,567 \\approx 0{,}004\\,6$ (2 chiffres significatifs) ; $12\\,345 \\approx 12\\,300 = 1{,}23 \\times 10^4$ (3 chiffres significatifs). On adapte la précision à la situation (une mesure au millimètre près ne justifie pas 8 décimales)."
      },
      {
        "title": "6. Pour aller plus loin : moyennes arithmétique et géométrique",
        "content": "Pour deux réels $a > 0$ et $b > 0$, la **moyenne arithmétique** est $\\frac{a + b}{2}$ et la **moyenne géométrique** est $\\sqrt{ab}$. On a toujours\n$$\\sqrt{ab} \\le \\frac{a + b}{2}$$\n*Démonstration* (comparaison par différence) : comme $a = (\\sqrt{a})^2$ et $b = (\\sqrt{b})^2$,\n$$\\frac{a + b}{2} - \\sqrt{ab} = \\frac{(\\sqrt{a})^2 - 2\\sqrt{a}\\sqrt{b} + (\\sqrt{b})^2}{2} = \\frac{(\\sqrt{a} - \\sqrt{b})^2}{2} \\ge 0$$\navec égalité si et seulement si $\\sqrt{a} = \\sqrt{b}$, c'est-à-dire $a = b$.\n*Exemple* : pour $a = 2$ et $b = 8$, $\\sqrt{16} = 4 \\le \\frac{10}{2} = 5$."
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
        "title": "Pour aller plus loin — Méthode : Résoudre une inéquation du type $|x - a| > r$",
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
      "⚠️ $|a + b| \\neq |a| + |b|$ en général : $|3 + (-5)| = 2$ alors que $|3| + |-5| = 8$.",
      "⚠️ On peut additionner deux inégalités de même sens, mais **pas les soustraire** : $2 < 5$ et $1 < 10$, mais $2 - 1 = 1$ n'est pas inférieur à $5 - 10 = -5$."
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
      },
      {
        "q": "Si $1 \\le a \\le 3$ et $-2 \\le b \\le 5$, encadrer $a + b$.",
        "a": "On additionne les inégalités : $-1 \\le a + b \\le 8$."
      },
      {
        "q": "Comparer $\\frac{12}{13}$ et $\\frac{13}{14}$ par le quotient.",
        "a": "$\\frac{12}{13} \\div \\frac{13}{14} = \\frac{168}{169} < 1$, donc $\\frac{12}{13} < \\frac{13}{14}$."
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
      "Mettre un problème en équation et interpréter la solution.",
      "Isoler une variable dans une formule (physique, géométrie…) et résoudre une équation quotient $\\frac{A(x)}{B(x)} = k$."
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
      },
      {
        "title": "6. Isoler une variable dans une formule",
        "content": "On applique aux formules les mêmes règles qu'aux équations, en vérifiant qu'on ne divise jamais par $0$ :\n• $U = RI \\iff I = \\frac{U}{R}$ (pour $R \\neq 0$) ;\n• $d = vt \\iff t = \\frac{d}{v}$ (pour $v \\neq 0$) ;\n• $V = \\pi r^2 h \\iff h = \\frac{V}{\\pi r^2}$ (pour $r > 0$) ;\n• $S = \\pi r^2 \\iff r = \\sqrt{\\frac{S}{\\pi}}$ (car $r > 0$) ;\n• **Relation du premier degré** $ax + by = c$ avec $b \\neq 0$ : $y = \\frac{c - ax}{b}$. Par exemple $2x + 5y = 10 \\iff y = 2 - 0{,}4x$.\n*Application numérique* : un trajet de $d = 150$ km à la vitesse $v = 90$ km/h dure $t = \\frac{150}{90} = \\frac{5}{3}$ h, soit $1$ h $40$ min."
      },
      {
        "title": "7. Équation quotient $\\frac{A(x)}{B(x)} = k$",
        "content": "1. On détermine les **valeurs interdites** ($B(x) = 0$).\n2. Pour $x$ non interdit, $\\frac{A(x)}{B(x)} = k \\iff A(x) = k\\,B(x)$.\n3. On résout, puis on **élimine** les solutions qui seraient des valeurs interdites.\n*Exemple* : $\\frac{2x + 1}{x - 3} = 5$. Valeur interdite : $3$. Pour $x \\neq 3$ : $2x + 1 = 5(x - 3) \\iff 2x + 1 = 5x - 15 \\iff 16 = 3x \\iff x = \\frac{16}{3}$. Comme $\\frac{16}{3} \\neq 3$, $S = \\left\\{\\frac{16}{3}\\right\\}$.\n*Contrôle* : $\\frac{2 \\times \\frac{16}{3} + 1}{\\frac{16}{3} - 3} = \\frac{\\frac{35}{3}}{\\frac{7}{3}} = 5$."
      },
      {
        "title": "8. Automatismes : équations et formules",
        "content": "À traiter de tête ou en une ligne :\n• $x^2 = 49 \\iff x = -7$ ou $x = 7$ ; $x^2 = -4$ n'a pas de solution ; $x^2 = 5 \\iff x = -\\sqrt{5}$ ou $x = \\sqrt{5}$.\n• $3x - 5 = x + 7 \\iff 2x = 12 \\iff x = 6$.\n• $\\frac{12}{x} = 4 \\iff x = 3$ (pour $x \\neq 0$) ; $\\frac{a}{x} = b \\iff x = \\frac{a}{b}$ si $a \\neq 0$ et $b \\neq 0$.\n• $-2x + 6 > 0 \\iff -2x > -6 \\iff x < 3$ (on divise par $-2 < 0$ : le sens change).\n• **Isoler une variable** : $P = UI \\iff I = \\frac{P}{U}$ ; $E = \\frac{1}{2}mv^2 \\iff v = \\sqrt{\\frac{2E}{m}}$ (pour $v > 0$).\n• **Application numérique** : avec $m = 2$ kg et $E = 100$ J, $v = \\sqrt{\\frac{200}{2}} = 10$ m/s ; avec $U = 230$ V et $I = 2$ A, $P = 460$ W."
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
      },
      {
        "title": "Méthode : Isoler une variable dans une formule",
        "example": "La surface latérale d'un cylindre de rayon $r$ et de hauteur $h$ vaut $A = 2\\pi r h$. Exprimer $h$ en fonction de $A$ et $r$, puis calculer $h$ pour $A = 100$ cm² et $r = 2$ cm.",
        "steps": [
          "**Étape 1** : on repère la variable à isoler, $h$, multipliée par $2\\pi r$.",
          "**Étape 2** : on divise les deux membres par $2\\pi r$, qui est non nul car $r > 0$ : $h = \\frac{A}{2\\pi r}$.",
          "**Étape 3 (Application numérique)** : $h = \\frac{100}{2\\pi \\times 2} = \\frac{25}{\\pi} \\approx 7{,}96$ cm.",
          "**Conclusion** : $h = \\frac{A}{2\\pi r}$, soit environ $8{,}0$ cm (arrondi à 2 chiffres significatifs, comme les données)."
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
      },
      {
        "q": "Exprimer $R$ en fonction de $U$ et $I$ dans $U = RI$ ($I \\neq 0$).",
        "a": "$R = \\frac{U}{I}$."
      },
      {
        "q": "Résoudre $\\frac{x + 4}{x - 1} = 3$.",
        "a": "$x \\neq 1$ ; $x + 4 = 3x - 3 \\iff x = 3{,}5$. Comme $3{,}5 \\neq 1$, $S = \\{3{,}5\\}$."
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
      "Déterminer par le calcul si un point appartient à une courbe et les points d'intersection de deux courbes.",
      "Reconnaître une fonction linéaire ou affine et savoir que sa courbe est une droite.",
      "Résoudre une équation ou une inéquation $f(x) = k$, $f(x) < g(x)$ en choisissant une méthode adaptée : graphique, algébrique ou logicielle."
    ],
    "keyPoints": [
      {
        "title": "1. Définition, image et antécédents",
        "content": "Une fonction $f$ associe à tout réel $x$ de son ensemble de définition $\\mathcal{D}_f$ un **unique** réel noté $f(x)$ appelé l'**image** de $x$.\n• Tout nombre $x$ tel que $f(x) = y$ est appelé un **antécédent** de $y$ par $f$.\n• Un nombre peut avoir **aucun, un ou plusieurs antécédents**, mais possède **au plus une image**."
      },
      {
        "title": "2. Courbe représentative et résolutions graphiques",
        "content": "La courbe représentative $\\mathcal{C}_f$ est l'ensemble des points $M(x ; y)$ tels que $x \\in \\mathcal{D}_f$ et $y = f(x)$.\n• Pour résoudre graphiquement $f(x) = k$, on trace la droite horizontale $y = k$ et on lit les **abscisses** des points d'intersection.\n• Pour résoudre $f(x) \\le g(x)$, on relève les intervalles d'abscisses où la courbe $\\mathcal{C}_f$ est située **en dessous** de $\\mathcal{C}_g$.\n\n**Exemple.** La courbe ci-dessous représente une fonction $f$ définie sur $[-3 ; 4]$. La droite d'équation $y = 2$ la coupe aux points d'abscisses $-2$, $1$ et $3$ : l'équation $f(x) = 2$ a pour ensemble de solutions $\\{-2 ; 1 ; 3\\}$. La courbe est sur ou au-dessus de cette droite lorsque $x$ appartient à $[-3 ; -2] \\cup [1 ; 3]$ : c'est l'ensemble des solutions de $f(x) \\ge 2$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem auto;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe de la fonction f sur l'intervalle [-3 ; 4], passant par les points (-3 ; 4), (-2 ; 2), (-1 ; 0), (0 ; 1), (1 ; 2), (2 ; 3), (3 ; 2) et (4 ; 0). La droite horizontale d'équation y = 2 la coupe aux points d'abscisses -2, 1 et 3.\" viewBox=\"0 0 252 204\" width=\"252\" height=\"204\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"186\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"186\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"186\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"186\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"186\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"186\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"186\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"186\" y1=\"186\" x2=\"186\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"210\" y1=\"186\" x2=\"210\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"234\" y1=\"186\" x2=\"234\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"186\" x2=\"234\" y2=\"186\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"234\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"234\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"234\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"234\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"234\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"234\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"234\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"244\" y2=\"138\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(246 138) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"114\" y1=\"186\" x2=\"114\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(114 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−4</text><text x=\"42\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"66\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"90\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"138\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"162\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"186\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"210\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"234\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"109\" y=\"189.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"109\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"109\" y=\"117.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"109\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"109\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"109\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"109\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"108\" y=\"151\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 42 42 C 50 58 58 74 66 90 C 74 106 82 138 90 138 C 98 138 106 122 114 114 C 122 106 130 98 138 90 C 146 82 154 66 162 66 C 170 66 178 79.33 186 90 C 194 100.67 202 122 210 138\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><circle cx=\"42\" cy=\"42\" r=\"3.2\" fill=\"#2563eb\"/><circle cx=\"210\" cy=\"138\" r=\"3.2\" fill=\"#2563eb\"/><line x1=\"18\" y1=\"90\" x2=\"234\" y2=\"90\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"6 4\"/><line x1=\"66\" y1=\"90\" x2=\"66\" y2=\"138\" stroke=\"#dc2626\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><circle cx=\"66\" cy=\"90\" r=\"3.6\" fill=\"#dc2626\"/><line x1=\"138\" y1=\"90\" x2=\"138\" y2=\"138\" stroke=\"#dc2626\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><circle cx=\"138\" cy=\"90\" r=\"3.6\" fill=\"#dc2626\"/><line x1=\"186\" y1=\"90\" x2=\"186\" y2=\"138\" stroke=\"#dc2626\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><circle cx=\"186\" cy=\"90\" r=\"3.6\" fill=\"#dc2626\"/><text x=\"55.199999999999996\" y=\"37.199999999999996\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">C<tspan dy=\"3\" font-size=\"10\">f</tspan></text><text x=\"219.60000000000002\" y=\"84\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">y = 2</text></svg></div>"
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
      },
      {
        "title": "6. Fonctions linéaires et affines (rappels)",
        "content": "• Une **fonction affine** est définie sur $\\mathbb{R}$ par $f(x) = mx + p$ ; sa courbe est une **droite** de coefficient directeur $m$ et d'ordonnée à l'origine $p$ (elle coupe l'axe des ordonnées au point $(0 ; p)$).\n• Si $p = 0$, $f(x) = mx$ est **linéaire** : sa courbe est une droite passant par l'origine, et elle modélise une situation de **proportionnalité**.\n• Si $m = 0$, $f$ est **constante** : sa courbe est une droite horizontale.\n*Exemples* : $f(x) = 3x - 2$ est affine ; $g(x) = -0{,}5x$ est linéaire ; $h(x) = x^2 + 1$ n'est pas affine.\n• **Fonctions de la variable $t$ ou $n$** : une grandeur qui dépend du temps se note souvent $f(t)$ ; une grandeur définie seulement pour des entiers se note $u(n)$ (par exemple $u(n) = 500 \\times 2^n$ bactéries au bout de $n$ heures)."
      },
      {
        "title": "7. Automatismes : lire et exploiter une courbe",
        "content": "• **Image** : l'image de $a$ se lit en **ordonnée** du point de la courbe d'abscisse $a$.\n• **Antécédents** de $k$ : on trace la droite horizontale $y = k$ et on lit les **abscisses** des points d'intersection.\n• **Équation de courbe** : $M(2 ; 5)$ appartient à la courbe d'équation $y = x^2 + 1$ car $2^2 + 1 = 5$ ; le point de cette courbe d'abscisse $-3$ a pour ordonnée $10$.\n• **Reconnaître** : $x \\mapsto -4x$ est linéaire, $x \\mapsto 2x + 3$ est affine, $x \\mapsto \\frac{1}{x}$ et $x \\mapsto x^2$ ne sont pas affines ; les fonctions linéaires et affines sont représentées par des **droites**."
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
      },
      {
        "q": "La fonction $f(x) = 4 - 2x$ est-elle affine ? linéaire ?",
        "a": "Affine ($m = -2$, $p = 4$) mais pas linéaire car $p \\neq 0$. Sa courbe est une droite qui passe par $(0 ; 4)$."
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
      "Exploiter un tableau de variations pour déterminer le nombre de solutions d'une équation $f(x) = k$.",
      "Passer de la courbe d'une fonction à son tableau de variations et lire graphiquement ses extremums.",
      "Interpréter le coefficient $m$ d'une fonction affine comme un taux d'accroissement.",
      "Approcher un extremum ou une longueur de courbe à l'aide d'un algorithme (balayage, dichotomie).",
      "Traiter un problème d'optimisation."
    ],
    "keyPoints": [
      {
        "title": "1. Définitions formelles de la monotonie",
        "content": "Soit $f$ une fonction définie sur un intervalle $I$ :\n• $f$ est **strictement croissante** sur $I$ si pour tous $a, b \\in I$ :\n$$a < b \\implies f(a) < f(b)$$ *(la fonction conserve l'ordre)*.\n• $f$ est **strictement décroissante** sur $I$ si pour tous $a, b \\in I$ :\n$$a < b \\implies f(a) > f(b)$$ *(la fonction inverse l'ordre)*.\n• On dit plus largement que $f$ est **croissante** sur $I$ si pour tous $a, b \\in I$, $a < b \\implies f(a) \\le f(b)$, et **décroissante** si $a < b \\implies f(a) \\ge f(b)$. Une fonction constante est à la fois croissante et décroissante."
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
        "title": "4. Démonstration : sens de variation d'une fonction affine",
        "content": "Soit $f(x) = mx + p$ définie sur $\\mathbb{R}$.\n*Au collège, on écrivait $f(x) = ax + b$ : ici, $m$ joue le rôle de $a$ et $p$ celui de $b$.*\n• Si $m > 0$, $f$ est strictement croissante ; si $m < 0$, $f$ est strictement décroissante ; si $m = 0$, $f$ est constante.\n**Démonstration** : soient deux réels $x_1 < x_2$. Alors\n$$f(x_2) - f(x_1) = (mx_2 + p) - (mx_1 + p) = m(x_2 - x_1)$$\nComme $x_2 - x_1 > 0$, $f(x_2) - f(x_1)$ a le **signe de $m$** :\n• si $m > 0$, $f(x_2) - f(x_1) > 0$, soit $f(x_1) < f(x_2)$ : l'ordre est conservé, $f$ est strictement croissante ;\n• si $m < 0$, $f(x_2) - f(x_1) < 0$, soit $f(x_1) > f(x_2)$ : l'ordre est inversé, $f$ est strictement décroissante ;\n• si $m = 0$, $f(x_1) = f(x_2)$ : $f$ est constante.\n**Interprétation de $m$** : pour $x_1 \\neq x_2$, $\\frac{f(x_2) - f(x_1)}{x_2 - x_1} = m$. Le coefficient $m$ est le **taux d'accroissement** : quand $x$ augmente de $1$, $f(x)$ varie de $m$. Et $p = f(0)$ est l'**ordonnée à l'origine**.\n*Exemple* : un forfait téléphonique coûte $f(x) = 0{,}2x + 15$ euros pour $x$ minutes hors forfait : chaque minute supplémentaire coûte $0{,}20$ €, et $15$ € est le prix de base."
      },
      {
        "title": "5. Existence d'un extremum",
        "content": "• Un maximum peut être atteint au sommet d'une flèche montante **ou en une borne** de l'intervalle : il faut comparer toutes les valeurs « hautes » du tableau.\n• Une fonction n'admet pas toujours de maximum : sur $]0 ; 1[$, la fonction $x \\mapsto x$ prend des valeurs aussi proches de $1$ que l'on veut, sans jamais atteindre $1$.\n• **En Python**, on peut approcher le maximum par **balayage** :\n```python\ndef maximum(f, a, b, pas):\n    M = f(a)\n    x = a\n    while x <= b:\n        if f(x) > M:\n            M = f(x)\n        x = x + pas\n    return M\n```"
      },
      {
        "title": "6. Algorithmes : dichotomie et longueur d'une courbe",
        "content": "• **Approcher un maximum par dichotomie** : on suppose $f$ croissante puis décroissante sur $[a ; b]$. On coupe l'intervalle en son milieu $m$ ; si $f$ augmente encore juste après $m$, le maximum est à droite de $m$, sinon il est à gauche (à un petit pas $d$ près). On recommence jusqu'à la précision $e$ voulue.\n```python\ndef maximum_dicho(f, a, b, e):\n    d = e / 10\n    while b - a > e:\n        m = (a + b) / 2\n        if f(m) < f(m + d):\n            a = m\n        else:\n            b = m + d\n    return a, b\n```\nAvec $f(x) = -x^2 + 4x + 1$ sur $[0 ; 5]$ et $e = 0{,}01$, on obtient un intervalle d'amplitude inférieure à $0{,}01$ contenant $2$ : le maximum est atteint en $x = 2$ et vaut $f(2) = 5$.\n• **Longueur approchée d'une courbe** : on remplace la courbe de $f$ sur $[a ; b]$ par $n$ petits segments et on additionne leurs longueurs (formule de la distance dans un repère orthonormé).\n```python\nfrom math import sqrt\n\ndef longueur(f, a, b, n):\n    h = (b - a) / n\n    L = 0\n    for k in range(n):\n        x1 = a + k * h\n        x2 = x1 + h\n        L = L + sqrt(h ** 2 + (f(x2) - f(x1)) ** 2)\n    return L\n```\nPour la parabole $y = x^2$ entre $x = 0$ et $x = 1$ : $n = 10$ donne environ $1{,}478\\,2$ et $n = 1\\,000$ environ $1{,}478\\,9$. Plus $n$ est grand, meilleure est l'approximation."
      },
      {
        "title": "7. Un problème d'optimisation",
        "content": "**Problème** : parmi les rectangles de périmètre $20$ cm, lequel a la plus grande aire ?\n• Si $x$ est la longueur d'un côté ($0 < x < 10$), l'autre côté mesure $10 - x$ et l'aire vaut $A(x) = x(10 - x) = 10x - x^2$.\n• On vérifie en développant que $A(x) = 25 - (x - 5)^2$. Comme $(x - 5)^2 \\ge 0$, on a $A(x) \\le 25$ pour tout $x$, avec égalité si et seulement si $x = 5$.\n• **Conclusion** : l'aire maximale est $25$ cm², obtenue pour le **carré** de côté $5$ cm.\nOn peut aussi conjecturer ce résultat avec un tableau de valeurs, une courbe (calculatrice, logiciel) ou l'algorithme de balayage du paragraphe 5, puis le démontrer comme ci-dessus."
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
        "title": "Méthode : Passer de la courbe au tableau de variations",
        "example": "La courbe ci-dessous représente une fonction $f$ définie sur $[-3 ; 4]$. Dresser son tableau de variations et donner ses extremums.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem auto;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe de la fonction f sur l'intervalle [-3 ; 4], passant par les points (-3 ; -2), (-2 ; 0), (-1 ; 2), (0 ; 3), (1 ; 1), (2 ; 0), (3 ; -1), (4 ; 2).\" viewBox=\"0 0 252 204\" width=\"252\" height=\"204\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"186\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"186\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"186\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"186\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"186\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"186\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"186\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"186\" y1=\"186\" x2=\"186\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"210\" y1=\"186\" x2=\"210\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"234\" y1=\"186\" x2=\"234\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"186\" x2=\"234\" y2=\"186\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"234\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"234\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"234\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"234\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"234\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"234\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"234\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"244\" y2=\"114\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(246 114) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"114\" y1=\"186\" x2=\"114\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(114 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−4</text><text x=\"42\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"66\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"90\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"138\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"162\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"186\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"210\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"234\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"109\" y=\"189.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"109\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"109\" y=\"141.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"109\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"109\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"109\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"109\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"108\" y=\"127\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 42 162 C 50 146 58 130 66 114 C 74 98 82 76.67 90 66 C 98 55.33 106 42 114 42 C 122 42 130 79.33 138 90 C 146 100.67 154 106 162 114 C 170 122 178 138 186 138 C 194 138 202 90 210 66\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><circle cx=\"42\" cy=\"162\" r=\"3.2\" fill=\"#2563eb\"/><circle cx=\"210\" cy=\"66\" r=\"3.2\" fill=\"#2563eb\"/></svg></div>",
        "steps": [
          "**Étape 1 (ligne des $x$)** : on place les bornes de l'intervalle, $-3$ et $4$, ainsi que les abscisses où la courbe change de sens, $0$ et $3$.",
          "**Étape 2 (ligne de $f(x)$)** : on lit les ordonnées des points correspondants : $f(-3) = -2$, $f(0) = 3$, $f(3) = -1$ et $f(4) = 2$.",
          "**Étape 3 (flèches)** : de gauche à droite, la courbe monte sur $[-3 ; 0]$, descend sur $[0 ; 3]$ et remonte sur $[3 ; 4]$.",
          "**Conclusion** : on obtient le tableau ci-dessous. Le maximum de $f$ est $3$, atteint en $x = 0$ ; le minimum est $-2$, atteint à la borne $x = -3$, car $f(-3) = -2 < f(3) = -1$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem auto;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Tableau de variations de f. Ligne des x : -3, 0, 3, 4. Ligne de f(x) : -2, 3, -1, 2. Flèches : montante, descendante, montante.\" viewBox=\"0 0 370 118\" width=\"370\" height=\"118\" style=\"max-width:370px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"1\" y=\"1\" width=\"368\" height=\"116\" fill=\"none\" stroke=\"var(--text-main, #334155)\"/><line x1=\"1\" y1=\"30\" x2=\"369\" y2=\"30\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><line x1=\"38\" y1=\"1\" x2=\"38\" y2=\"117\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><text x=\"20\" y=\"21\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">x</text><text x=\"20\" y=\"79\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">f(x)</text><text x=\"62\" y=\"21\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"157.33\" y=\"21\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--text-main, #334155)\">0</text><text x=\"252.67\" y=\"21\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--text-main, #334155)\">3</text><text x=\"348\" y=\"21\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--text-main, #334155)\">4</text><text x=\"62\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"157.33\" y=\"54\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--text-main, #334155)\">3</text><text x=\"252.67\" y=\"108\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"348\" y=\"54\" text-anchor=\"middle\" font-size=\"12\" fill=\"var(--text-main, #334155)\">2</text><line x1=\"75\" y1=\"95\" x2=\"144.33\" y2=\"55\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(144.33 55) rotate(-29.98)\" fill=\"var(--text-main, #334155)\"/><line x1=\"170.33\" y1=\"55\" x2=\"239.67\" y2=\"95\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(239.67 95) rotate(29.98)\" fill=\"var(--text-main, #334155)\"/><line x1=\"265.67\" y1=\"95\" x2=\"335\" y2=\"55\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(335 55) rotate(-29.98)\" fill=\"var(--text-main, #334155)\"/></svg></div>"
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
        "example": "On rappelle que la fonction carré est décroissante sur $]-\\infty ; 0]$ et croissante sur $[0 ; +\\infty[$ (résultat étudié au chapitre suivant). Déterminer le minimum et le maximum de $f(x) = x^2$ sur l'intervalle $[-2 ; 3]$.",
        "steps": [
          "**Étape 1** : d'après ce rappel, $f$ est décroissante sur $[-2 ; 0]$ et croissante sur $[0 ; 3]$.",
          "**Étape 2** : On calcule les valeurs utiles : $f(-2) = 4$, $f(0) = 0$, $f(3) = 9$.",
          "**Étape 3** : La plus petite valeur est $f(0) = 0$ ; la plus grande des valeurs aux bornes est $f(3) = 9$.",
          "**Conclusion** : sur $[-2 ; 3]$, le minimum de $f$ est $0$ (atteint en $0$) et son maximum est $9$ (atteint en $3$)."
        ]
      },
      {
        "title": "Méthode : Interpréter les coefficients d'une fonction affine",
        "example": "Un réservoir contient $500$ L d'eau et se vide de $20$ L par minute. On note $V(t)$ le volume (en L) au bout de $t$ minutes. Exprimer $V(t)$, donner son sens de variation et l'instant où le réservoir est vide.",
        "steps": [
          "**Étape 1** : le volume diminue de $20$ L chaque minute à partir de $500$ L : $V(t) = -20t + 500$, fonction affine de coefficient $m = -20$ (taux d'accroissement : $-20$ L/min) et d'ordonnée à l'origine $p = 500$ (volume initial).",
          "**Étape 2** : $m = -20 < 0$, donc $V$ est strictement décroissante.",
          "**Étape 3** : $V(t) = 0 \\iff -20t + 500 = 0 \\iff t = 25$.",
          "**Conclusion** : $V$ décroît et le réservoir est vide au bout de $25$ minutes ; le modèle n'a de sens que pour $t \\in [0 ; 25]$."
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
      },
      {
        "q": "Que représente $m$ pour la fonction affine $f(x) = mx + p$ ?",
        "a": "Le taux d'accroissement : $\\frac{f(b) - f(a)}{b - a} = m$ ; quand $x$ augmente de $1$, $f(x)$ varie de $m$."
      }
    ]
  },

  "2A3": {
    "title": "2A3 : Fonctions de référence : valeur absolue, carré, inverse, racine carrée et cube",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Connaître les définitions, courbes, signes et variations des fonctions valeur absolue $|x|$, carré $x^2$ et inverse $\\frac{1}{x}$.",
      "Pour aller plus loin : définition et variations des fonctions racine carrée $\\sqrt{x}$ et cube $x^3$.",
      "Pour aller plus loin : notion de parité (fonction paire, fonction impaire).",
      "Résoudre des équations et inéquations du type $x^2 \\le k$ et $\\sqrt{x} \\ge k$.",
      "Étudier la position relative des courbes d'équations $y = x$, $y = x^2$ et $y = x^3$ pour $x \\ge 0$.",
      "Encadrer $x^2$, $\\frac{1}{x}$ ou $\\sqrt{x}$ à partir d'un encadrement de $x$.",
      "Connaître la fonction valeur absolue : définition, courbe, signe et variations.",
      "Démontrer les variations des fonctions carré et inverse.",
      "Comparer $f(a)$ et $f(b)$ pour une fonction de référence $f$, en utilisant ses variations."
    ],
    "keyPoints": [
      {
        "title": "1. Synthèse des fonctions de référence",
        "content": "• **Fonction carré ($x \\mapsto x^2$)** : Définie sur $\\mathbb{R}$, décroissante sur $]-\\infty ; 0]$ et croissante sur $[0 ; +\\infty[$. Sa courbe est une **parabole** de sommet $(0 ; 0)$.\n• **Fonction inverse ($x \\mapsto \\frac{1}{x}$)** : Définie sur $\\mathbb{R}^*$, strictement décroissante sur $]-\\infty ; 0[$ et sur $]0 ; +\\infty[$. Sa courbe est une **hyperbole**.\n• **Fonction valeur absolue ($x \\mapsto |x|$)** : définie sur $\\mathbb{R}$, décroissante sur $]-\\infty ; 0]$ et croissante sur $[0 ; +\\infty[$ (voir le paragraphe 5).\n\n<div class=\"geo-figure-wrapper\" style=\"display:inline-block; vertical-align:top; width:240px; max-width:100%; text-align:center; margin:0.6rem;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe en forme de U, de sommet l'origine, passant par les points (-3 ; 9), (-2 ; 4), (-1 ; 1), (0 ; 0), (1 ; 1), (2 ; 4) et (3 ; 9).\" viewBox=\"0 0 228 300\" width=\"228\" height=\"300\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"282\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"282\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"282\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"282\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"282\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"282\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"282\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"186\" y1=\"282\" x2=\"186\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"210\" y1=\"282\" x2=\"210\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"282\" x2=\"210\" y2=\"282\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"258\" x2=\"210\" y2=\"258\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"234\" x2=\"210\" y2=\"234\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"210\" x2=\"210\" y2=\"210\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"186\" x2=\"210\" y2=\"186\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"210\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"210\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"210\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"210\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"210\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"210\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"210\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"258\" x2=\"220\" y2=\"258\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(222 258) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"114\" y1=\"282\" x2=\"114\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(114 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"271\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−4</text><text x=\"42\" y=\"271\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"66\" y=\"271\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"90\" y=\"271\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"138\" y=\"271\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"162\" y=\"271\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"186\" y=\"271\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"210\" y=\"271\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"109\" y=\"285.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"109\" y=\"237.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"109\" y=\"213.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"109\" y=\"189.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"109\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"109\" y=\"141.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"109\" y=\"117.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">6</text><text x=\"109\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">7</text><text x=\"109\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">8</text><text x=\"109\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">9</text><text x=\"109\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">10</text><text x=\"108\" y=\"271\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 38.4 19.86 L 39.6 27.36 L 40.8 34.74 L 42 42 L 43.2 49.14 L 44.4 56.16 L 45.6 63.06 L 46.8 69.84 L 48 76.5 L 49.2 83.04 L 50.4 89.46 L 51.6 95.76 L 52.8 101.94 L 54 108 L 55.2 113.94 L 56.4 119.76 L 57.6 125.46 L 58.8 131.04 L 60 136.5 L 61.2 141.84 L 62.4 147.06 L 63.6 152.16 L 64.8 157.14 L 66 162 L 67.2 166.74 L 68.4 171.36 L 69.6 175.86 L 70.8 180.24 L 72 184.5 L 73.2 188.64 L 74.4 192.66 L 75.6 196.56 L 76.8 200.34 L 78 204 L 79.2 207.54 L 80.4 210.96 L 81.6 214.26 L 82.8 217.44 L 84 220.5 L 85.2 223.44 L 86.4 226.26 L 87.6 228.96 L 88.8 231.54 L 90 234 L 91.2 236.34 L 92.4 238.56 L 93.6 240.66 L 94.8 242.64 L 96 244.5 L 97.2 246.24 L 98.4 247.86 L 99.6 249.36 L 100.8 250.74 L 102 252 L 103.2 253.14 L 104.4 254.16 L 105.6 255.06 L 106.8 255.84 L 108 256.5 L 109.2 257.04 L 110.4 257.46 L 111.6 257.76 L 112.8 257.94 L 114 258 L 115.2 257.94 L 116.4 257.76 L 117.6 257.46 L 118.8 257.04 L 120 256.5 L 121.2 255.84 L 122.4 255.06 L 123.6 254.16 L 124.8 253.14 L 126 252 L 127.2 250.74 L 128.4 249.36 L 129.6 247.86 L 130.8 246.24 L 132 244.5 L 133.2 242.64 L 134.4 240.66 L 135.6 238.56 L 136.8 236.34 L 138 234 L 139.2 231.54 L 140.4 228.96 L 141.6 226.26 L 142.8 223.44 L 144 220.5 L 145.2 217.44 L 146.4 214.26 L 147.6 210.96 L 148.8 207.54 L 150 204 L 151.2 200.34 L 152.4 196.56 L 153.6 192.66 L 154.8 188.64 L 156 184.5 L 157.2 180.24 L 158.4 175.86 L 159.6 171.36 L 160.8 166.74 L 162 162 L 163.2 157.14 L 164.4 152.16 L 165.6 147.06 L 166.8 141.84 L 168 136.5 L 169.2 131.04 L 170.4 125.46 L 171.6 119.76 L 172.8 113.94 L 174 108 L 175.2 101.94 L 176.4 95.76 L 177.6 89.46 L 178.8 83.04 L 180 76.5 L 181.2 69.84 L 182.4 63.06 L 183.6 56.16 L 184.8 49.14 L 186 42 L 187.2 34.74 L 188.4 27.36 L 189.6 19.86\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/></svg><div style=\"font-size:0.9em;\">Fonction carré</div></div>\n<div class=\"geo-figure-wrapper\" style=\"display:inline-block; vertical-align:top; width:240px; max-width:100%; text-align:center; margin:0.6rem;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe formée de deux branches séparées par l'axe des ordonnées, passant par les points (-2 ; -0,5), (-1 ; -1), (1 ; 1) et (2 ; 0,5).\" viewBox=\"0 0 228 228\" width=\"228\" height=\"228\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"210\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"210\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"210\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"210\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"210\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"210\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"210\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"186\" y1=\"210\" x2=\"186\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"210\" y1=\"210\" x2=\"210\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"210\" x2=\"210\" y2=\"210\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"186\" x2=\"210\" y2=\"186\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"210\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"210\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"210\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"210\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"210\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"210\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"210\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"220\" y2=\"114\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(222 114) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"114\" y1=\"210\" x2=\"114\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(114 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−4</text><text x=\"42\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"66\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"90\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"138\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"162\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"186\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"210\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"109\" y=\"213.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−4</text><text x=\"109\" y=\"189.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"109\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"109\" y=\"141.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"109\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"109\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"109\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"109\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"108\" y=\"127\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 18 120 L 19.2 120.08 L 20.4 120.15 L 21.6 120.23 L 22.8 120.32 L 24 120.4 L 25.2 120.49 L 26.4 120.58 L 27.6 120.67 L 28.8 120.76 L 30 120.86 L 31.2 120.96 L 32.4 121.06 L 33.6 121.16 L 34.8 121.27 L 36 121.38 L 37.2 121.5 L 38.4 121.62 L 39.6 121.74 L 40.8 121.87 L 42 122 L 43.2 122.14 L 44.4 122.28 L 45.6 122.42 L 46.8 122.57 L 48 122.73 L 49.2 122.89 L 50.4 123.06 L 51.6 123.23 L 52.8 123.41 L 54 123.6 L 55.2 123.8 L 56.4 124 L 57.6 124.21 L 58.8 124.43 L 60 124.67 L 61.2 124.91 L 62.4 125.16 L 63.6 125.43 L 64.8 125.71 L 66 126 L 67.2 126.31 L 68.4 126.63 L 69.6 126.97 L 70.8 127.33 L 72 127.71 L 73.2 128.12 L 74.4 128.55 L 75.6 129 L 76.8 129.48 L 78 130 L 79.2 130.55 L 80.4 131.14 L 81.6 131.78 L 82.8 132.46 L 84 133.2 L 85.2 134 L 86.4 134.87 L 87.6 135.82 L 88.8 136.86 L 90 138 L 91.2 139.26 L 92.4 140.67 L 93.6 142.24 L 94.8 144 L 96 146 L 97.2 148.29 L 98.4 150.92 L 99.6 154 L 100.8 157.64 L 102 162 L 103.2 167.33 L 104.4 174 L 105.6 182.57 L 106.8 194 L 108 210 M 120 18 L 121.2 34 L 122.4 45.43 L 123.6 54 L 124.8 60.67 L 126 66 L 127.2 70.36 L 128.4 74 L 129.6 77.08 L 130.8 79.71 L 132 82 L 133.2 84 L 134.4 85.76 L 135.6 87.33 L 136.8 88.74 L 138 90 L 139.2 91.14 L 140.4 92.18 L 141.6 93.13 L 142.8 94 L 144 94.8 L 145.2 95.54 L 146.4 96.22 L 147.6 96.86 L 148.8 97.45 L 150 98 L 151.2 98.52 L 152.4 99 L 153.6 99.45 L 154.8 99.88 L 156 100.29 L 157.2 100.67 L 158.4 101.03 L 159.6 101.37 L 160.8 101.69 L 162 102 L 163.2 102.29 L 164.4 102.57 L 165.6 102.84 L 166.8 103.09 L 168 103.33 L 169.2 103.57 L 170.4 103.79 L 171.6 104 L 172.8 104.2 L 174 104.4 L 175.2 104.59 L 176.4 104.77 L 177.6 104.94 L 178.8 105.11 L 180 105.27 L 181.2 105.43 L 182.4 105.58 L 183.6 105.72 L 184.8 105.86 L 186 106 L 187.2 106.13 L 188.4 106.26 L 189.6 106.38 L 190.8 106.5 L 192 106.62 L 193.2 106.73 L 194.4 106.84 L 195.6 106.94 L 196.8 107.04 L 198 107.14 L 199.2 107.24 L 200.4 107.33 L 201.6 107.42 L 202.8 107.51 L 204 107.6 L 205.2 107.68 L 206.4 107.77 L 207.6 107.85 L 208.8 107.92 L 210 108\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/></svg><div style=\"font-size:0.9em;\">Fonction inverse</div></div>\n<div class=\"geo-figure-wrapper\" style=\"display:inline-block; vertical-align:top; width:240px; max-width:100%; text-align:center; margin:0.6rem;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe en forme de V, de sommet l'origine, passant par les points (-4 ; 4), (-2 ; 2), (0 ; 0), (2 ; 2) et (4 ; 4).\" viewBox=\"0 0 276 180\" width=\"276\" height=\"180\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"162\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"162\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"162\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"162\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"162\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"162\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"162\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"186\" y1=\"162\" x2=\"186\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"210\" y1=\"162\" x2=\"210\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"234\" y1=\"162\" x2=\"234\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"258\" y1=\"162\" x2=\"258\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"258\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"258\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"258\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"258\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"258\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"258\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"258\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"268\" y2=\"138\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(270 138) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"138\" y1=\"162\" x2=\"138\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(138 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−5</text><text x=\"42\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−4</text><text x=\"66\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"90\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"114\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"162\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"186\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"210\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"234\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"258\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"133\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"133\" y=\"117.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"133\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"133\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"133\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"133\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"132\" y=\"151\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 18 18 L 19.2 19.2 L 20.4 20.4 L 21.6 21.6 L 22.8 22.8 L 24 24 L 25.2 25.2 L 26.4 26.4 L 27.6 27.6 L 28.8 28.8 L 30 30 L 31.2 31.2 L 32.4 32.4 L 33.6 33.6 L 34.8 34.8 L 36 36 L 37.2 37.2 L 38.4 38.4 L 39.6 39.6 L 40.8 40.8 L 42 42 L 43.2 43.2 L 44.4 44.4 L 45.6 45.6 L 46.8 46.8 L 48 48 L 49.2 49.2 L 50.4 50.4 L 51.6 51.6 L 52.8 52.8 L 54 54 L 55.2 55.2 L 56.4 56.4 L 57.6 57.6 L 58.8 58.8 L 60 60 L 61.2 61.2 L 62.4 62.4 L 63.6 63.6 L 64.8 64.8 L 66 66 L 67.2 67.2 L 68.4 68.4 L 69.6 69.6 L 70.8 70.8 L 72 72 L 73.2 73.2 L 74.4 74.4 L 75.6 75.6 L 76.8 76.8 L 78 78 L 79.2 79.2 L 80.4 80.4 L 81.6 81.6 L 82.8 82.8 L 84 84 L 85.2 85.2 L 86.4 86.4 L 87.6 87.6 L 88.8 88.8 L 90 90 L 91.2 91.2 L 92.4 92.4 L 93.6 93.6 L 94.8 94.8 L 96 96 L 97.2 97.2 L 98.4 98.4 L 99.6 99.6 L 100.8 100.8 L 102 102 L 103.2 103.2 L 104.4 104.4 L 105.6 105.6 L 106.8 106.8 L 108 108 L 109.2 109.2 L 110.4 110.4 L 111.6 111.6 L 112.8 112.8 L 114 114 L 115.2 115.2 L 116.4 116.4 L 117.6 117.6 L 118.8 118.8 L 120 120 L 121.2 121.2 L 122.4 122.4 L 123.6 123.6 L 124.8 124.8 L 126 126 L 127.2 127.2 L 128.4 128.4 L 129.6 129.6 L 130.8 130.8 L 132 132 L 133.2 133.2 L 134.4 134.4 L 135.6 135.6 L 136.8 136.8 L 138 138 L 139.2 136.8 L 140.4 135.6 L 141.6 134.4 L 142.8 133.2 L 144 132 L 145.2 130.8 L 146.4 129.6 L 147.6 128.4 L 148.8 127.2 L 150 126 L 151.2 124.8 L 152.4 123.6 L 153.6 122.4 L 154.8 121.2 L 156 120 L 157.2 118.8 L 158.4 117.6 L 159.6 116.4 L 160.8 115.2 L 162 114 L 163.2 112.8 L 164.4 111.6 L 165.6 110.4 L 166.8 109.2 L 168 108 L 169.2 106.8 L 170.4 105.6 L 171.6 104.4 L 172.8 103.2 L 174 102 L 175.2 100.8 L 176.4 99.6 L 177.6 98.4 L 178.8 97.2 L 180 96 L 181.2 94.8 L 182.4 93.6 L 183.6 92.4 L 184.8 91.2 L 186 90 L 187.2 88.8 L 188.4 87.6 L 189.6 86.4 L 190.8 85.2 L 192 84 L 193.2 82.8 L 194.4 81.6 L 195.6 80.4 L 196.8 79.2 L 198 78 L 199.2 76.8 L 200.4 75.6 L 201.6 74.4 L 202.8 73.2 L 204 72 L 205.2 70.8 L 206.4 69.6 L 207.6 68.4 L 208.8 67.2 L 210 66 L 211.2 64.8 L 212.4 63.6 L 213.6 62.4 L 214.8 61.2 L 216 60 L 217.2 58.8 L 218.4 57.6 L 219.6 56.4 L 220.8 55.2 L 222 54 L 223.2 52.8 L 224.4 51.6 L 225.6 50.4 L 226.8 49.2 L 228 48 L 229.2 46.8 L 230.4 45.6 L 231.6 44.4 L 232.8 43.2 L 234 42 L 235.2 40.8 L 236.4 39.6 L 237.6 38.4 L 238.8 37.2 L 240 36 L 241.2 34.8 L 242.4 33.6 L 243.6 32.4 L 244.8 31.2 L 246 30 L 247.2 28.8 L 248.4 27.6 L 249.6 26.4 L 250.8 25.2 L 252 24 L 253.2 22.8 L 254.4 21.6 L 255.6 20.4 L 256.8 19.2 L 258 18\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/></svg><div style=\"font-size:0.9em;\">Fonction valeur absolue</div></div>\n\n**Pour aller plus loin** (ces résultats servent à résoudre $\\sqrt{x} = k$ ou $x^3 = k$ au paragraphe 4 et à lire les symétries des courbes) :\n• **Fonction racine carrée ($x \\mapsto \\sqrt{x}$)** : définie sur $[0 ; +\\infty[$, strictement croissante sur $[0 ; +\\infty[$.\n• **Fonction cube ($x \\mapsto x^3$)** : définie sur $\\mathbb{R}$, strictement croissante sur $\\mathbb{R}$.\n\n<div class=\"geo-figure-wrapper\" style=\"display:inline-block; vertical-align:top; width:240px; max-width:100%; text-align:center; margin:0.6rem;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe partant de l'origine et toujours croissante, passant par les points (0 ; 0), (1 ; 1), (4 ; 2) et (9 ; 3).\" viewBox=\"0 0 276 156\" width=\"276\" height=\"156\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"138\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"138\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"138\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"138\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"138\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"138\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"138\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"186\" y1=\"138\" x2=\"186\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"210\" y1=\"138\" x2=\"210\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"234\" y1=\"138\" x2=\"234\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"258\" y1=\"138\" x2=\"258\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"258\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"258\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"258\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"258\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"258\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"258\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"268\" y2=\"114\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(270 114) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"42\" y1=\"138\" x2=\"42\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(42 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"66\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"90\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"114\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"138\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"162\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"186\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">6</text><text x=\"210\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">7</text><text x=\"234\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">8</text><text x=\"258\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">9</text><text x=\"37\" y=\"141.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"37\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"37\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"37\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"37\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"36\" y=\"127\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 42 114 L 43.2 108.63 L 44.4 106.41 L 45.6 104.7 L 46.8 103.27 L 48 102 L 49.2 100.85 L 50.4 99.8 L 51.6 98.82 L 52.8 97.9 L 54 97.03 L 55.2 96.2 L 56.4 95.41 L 57.6 94.65 L 58.8 93.92 L 60 93.22 L 61.2 92.53 L 62.4 91.87 L 63.6 91.23 L 64.8 90.61 L 66 90 L 67.2 89.41 L 68.4 88.83 L 69.6 88.26 L 70.8 87.71 L 72 87.17 L 73.2 86.64 L 74.4 86.11 L 75.6 85.6 L 76.8 85.1 L 78 84.61 L 79.2 84.12 L 80.4 83.64 L 81.6 83.17 L 82.8 82.71 L 84 82.25 L 85.2 81.8 L 86.4 81.36 L 87.6 80.92 L 88.8 80.49 L 90 80.06 L 91.2 79.64 L 92.4 79.22 L 93.6 78.81 L 94.8 78.4 L 96 78 L 97.2 77.6 L 98.4 77.21 L 99.6 76.82 L 100.8 76.43 L 102 76.05 L 103.2 75.68 L 104.4 75.3 L 105.6 74.93 L 106.8 74.56 L 108 74.2 L 109.2 73.84 L 110.4 73.48 L 111.6 73.13 L 112.8 72.78 L 114 72.43 L 115.2 72.09 L 116.4 71.74 L 117.6 71.4 L 118.8 71.07 L 120 70.73 L 121.2 70.4 L 122.4 70.07 L 123.6 69.75 L 124.8 69.42 L 126 69.1 L 127.2 68.78 L 128.4 68.46 L 129.6 68.15 L 130.8 67.84 L 132 67.52 L 133.2 67.22 L 134.4 66.91 L 135.6 66.6 L 136.8 66.3 L 138 66 L 139.2 65.7 L 140.4 65.4 L 141.6 65.11 L 142.8 64.81 L 144 64.52 L 145.2 64.23 L 146.4 63.94 L 147.6 63.66 L 148.8 63.37 L 150 63.09 L 151.2 62.81 L 152.4 62.53 L 153.6 62.25 L 154.8 61.97 L 156 61.69 L 157.2 61.42 L 158.4 61.15 L 159.6 60.87 L 160.8 60.6 L 162 60.33 L 163.2 60.07 L 164.4 59.8 L 165.6 59.54 L 166.8 59.27 L 168 59.01 L 169.2 58.75 L 170.4 58.49 L 171.6 58.23 L 172.8 57.97 L 174 57.72 L 175.2 57.46 L 176.4 57.21 L 177.6 56.95 L 178.8 56.7 L 180 56.45 L 181.2 56.2 L 182.4 55.95 L 183.6 55.7 L 184.8 55.46 L 186 55.21 L 187.2 54.97 L 188.4 54.72 L 189.6 54.48 L 190.8 54.24 L 192 54 L 193.2 53.76 L 194.4 53.52 L 195.6 53.28 L 196.8 53.05 L 198 52.81 L 199.2 52.58 L 200.4 52.34 L 201.6 52.11 L 202.8 51.88 L 204 51.65 L 205.2 51.42 L 206.4 51.19 L 207.6 50.96 L 208.8 50.73 L 210 50.5 L 211.2 50.28 L 212.4 50.05 L 213.6 49.83 L 214.8 49.6 L 216 49.38 L 217.2 49.16 L 218.4 48.93 L 219.6 48.71 L 220.8 48.49 L 222 48.27 L 223.2 48.05 L 224.4 47.84 L 225.6 47.62 L 226.8 47.4 L 228 47.19 L 229.2 46.97 L 230.4 46.76 L 231.6 46.54 L 232.8 46.33 L 234 46.12 L 235.2 45.91 L 236.4 45.69 L 237.6 45.48 L 238.8 45.27 L 240 45.07 L 241.2 44.86 L 242.4 44.65 L 243.6 44.44 L 244.8 44.23 L 246 44.03 L 247.2 43.82 L 248.4 43.62 L 249.6 43.41 L 250.8 43.21 L 252 43.01 L 253.2 42.8 L 254.4 42.6 L 255.6 42.4 L 256.8 42.2 L 258 42\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/></svg><div style=\"font-size:0.9em;\">Fonction racine carrée</div></div>\n<div class=\"geo-figure-wrapper\" style=\"display:inline-block; vertical-align:top; width:240px; max-width:100%; text-align:center; margin:0.6rem;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe toujours croissante, symétrique par rapport à l'origine, passant par les points (-1 ; -1), (0 ; 0) et (1 ; 1).\" viewBox=\"0 0 180 276\" width=\"180\" height=\"276\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"258\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"258\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"258\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"258\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"258\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"258\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"258\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"258\" x2=\"162\" y2=\"258\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"234\" x2=\"162\" y2=\"234\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"210\" x2=\"162\" y2=\"210\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"186\" x2=\"162\" y2=\"186\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"162\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"162\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"162\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"162\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"162\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"162\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"172\" y2=\"138\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(174 138) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"90\" y1=\"258\" x2=\"90\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(90 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"42\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"66\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"114\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"138\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"162\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"85\" y=\"261.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−5</text><text x=\"85\" y=\"237.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−4</text><text x=\"85\" y=\"213.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"85\" y=\"189.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"85\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"85\" y=\"117.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"85\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"85\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"85\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"85\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"84\" y=\"151\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 49.2 255.91 L 50.4 245.81 L 51.6 236.3 L 52.8 227.37 L 54 219 L 55.2 211.17 L 56.4 203.86 L 57.6 197.05 L 58.8 190.73 L 60 184.88 L 61.2 179.47 L 62.4 174.5 L 63.6 169.94 L 64.8 165.78 L 66 162 L 67.2 158.58 L 68.4 155.5 L 69.6 152.74 L 70.8 150.29 L 72 148.13 L 73.2 146.23 L 74.4 144.59 L 75.6 143.18 L 76.8 141.99 L 78 141 L 79.2 140.19 L 80.4 139.54 L 81.6 139.03 L 82.8 138.65 L 84 138.38 L 85.2 138.19 L 86.4 138.08 L 87.6 138.02 L 88.8 138 L 90 138 L 91.2 138 L 92.4 137.98 L 93.6 137.92 L 94.8 137.81 L 96 137.63 L 97.2 137.35 L 98.4 136.97 L 99.6 136.46 L 100.8 135.81 L 102 135 L 103.2 134.01 L 104.4 132.82 L 105.6 131.41 L 106.8 129.77 L 108 127.88 L 109.2 125.71 L 110.4 123.26 L 111.6 120.5 L 112.8 117.42 L 114 114 L 115.2 110.22 L 116.4 106.06 L 117.6 101.5 L 118.8 96.53 L 120 91.13 L 121.2 85.27 L 122.4 78.95 L 123.6 72.14 L 124.8 64.83 L 126 57 L 127.2 48.63 L 128.4 39.7 L 129.6 30.19 L 130.8 20.09\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/></svg><div style=\"font-size:0.9em;\">Fonction cube</div></div>\n\n• **Parité** (voir le paragraphe 2) : les fonctions carré et valeur absolue sont paires ($(-x)^2 = x^2$ et $|-x| = |x|$) ; les fonctions inverse et cube sont impaires ($\\frac{1}{-x} = -\\frac{1}{x}$ et $(-x)^3 = -x^3$)."
      },
      {
        "title": "2. Pour aller plus loin : parité",
        "content": "*La parité n'est pas un attendu du programme de seconde ; elle aide cependant à comprendre les symétries des courbes.*\nSoit $f$ une fonction dont l'ensemble de définition $\\mathcal{D}$ est symétrique par rapport à $0$ (si $x \\in \\mathcal{D}$, alors $-x \\in \\mathcal{D}$).\n• $f$ est **paire** si pour tout $x \\in \\mathcal{D}$, $f(-x) = f(x)$ : sa courbe est symétrique par rapport à l'axe des ordonnées.\n• $f$ est **impaire** si pour tout $x \\in \\mathcal{D}$, $f(-x) = -f(x)$ : sa courbe est symétrique par rapport à l'origine $O$.\n*Exemple* : $g(x) = x^3 - 2x$ est impaire car $g(-x) = -x^3 + 2x = -(x^3 - 2x) = -g(x)$.\nLa fonction racine carrée n'est ni paire ni impaire : $[0 ; +\\infty[$ n'est pas symétrique par rapport à $0$."
      },
      {
        "title": "3. Positions relatives de $x$, $x^2$ et $x^3$ pour $x \\ge 0$",
        "content": "• Si $0 \\le x \\le 1$ : $x^3 \\le x^2 \\le x$.\n• Si $x \\ge 1$ : $x \\le x^2 \\le x^3$.\n**Démonstration** : $x^2 - x = x(x - 1)$ et $x^3 - x^2 = x^2(x - 1)$. Pour $x \\ge 0$, ces deux différences ont le signe de $x - 1$.\nGraphiquement, sur $[0 ; 1]$ la courbe de $x \\mapsto x^3$ est sous la parabole, elle-même sous la droite $y = x$ ; l'ordre s'inverse sur $[1 ; +\\infty[$. Les trois courbes passent par $(0 ; 0)$ et $(1 ; 1)$."
      },
      {
        "title": "4. Équations avec les fonctions de référence",
        "content": "• $x^2 = k$ : si $k > 0$, deux solutions $-\\sqrt{k}$ et $\\sqrt{k}$ ; si $k = 0$, une solution $0$ ; si $k < 0$, aucune solution.\n• $\\sqrt{x} = k$ : si $k \\ge 0$, une unique solution $x = k^2$ ; si $k < 0$, aucune solution.\n• $\\frac{1}{x} = k$ : si $k \\neq 0$, une unique solution $x = \\frac{1}{k}$ ; si $k = 0$, aucune solution.\n• $x^3 = k$ : toujours une unique solution réelle (par exemple $x^3 = -8 \\iff x = -2$)."
      },
      {
        "title": "5. La fonction valeur absolue",
        "content": "La fonction **valeur absolue** est définie sur $\\mathbb{R}$ par $f(x) = |x|$, avec\n$$|x| = \\begin{cases} x & \\text{si } x \\ge 0 \\\\ -x & \\text{si } x < 0 \\end{cases}$$\n• **Courbe** : réunion de deux demi-droites issues de l'origine, d'équations $y = -x$ (pour $x \\le 0$) et $y = x$ (pour $x \\ge 0$) ; elle a la forme d'un « V ».\n• **Signe** : $|x| \\ge 0$ pour tout réel $x$, et $|x| = 0 \\iff x = 0$.\n• **Variations** : décroissante sur $]-\\infty ; 0]$, croissante sur $[0 ; +\\infty[$ ; son minimum est $0$, atteint en $0$.\n• **Équations et inéquations** : pour $k > 0$, $|x| = k \\iff x = -k$ ou $x = k$ ; $|x| \\le k \\iff -k \\le x \\le k$.\n*Exemple* : $|x| = 2{,}5$ a pour solutions $-2{,}5$ et $2{,}5$ ; $|x| \\le 2$ a pour ensemble de solutions $[-2 ; 2]$."
      },
      {
        "title": "6. Signe des fonctions de référence",
        "content": "| Fonction | Signe |\n|---|---|\n| $x \\mapsto x^2$ | positive ou nulle sur $\\mathbb{R}$ (nulle seulement en $0$) |\n| $x \\mapsto \\frac{1}{x}$ | strictement négative sur $]-\\infty ; 0[$, strictement positive sur $]0 ; +\\infty[$ |\n| $x \\mapsto \\sqrt{x}$ | positive ou nulle sur $[0 ; +\\infty[$ |\n| $x \\mapsto x^3$ | du signe de $x$ |\n| $x \\mapsto \\lvert x \\rvert$ | positive ou nulle sur $\\mathbb{R}$ |"
      },
      {
        "title": "7. Démonstration : variations de la fonction carré",
        "content": "Soit $f(x) = x^2$ et deux réels $a < b$. On étudie le signe de\n$$f(b) - f(a) = b^2 - a^2 = (b - a)(b + a)$$\nOn sait que $b - a > 0$.\n• **Sur $[0 ; +\\infty[$** : si $0 \\le a < b$, alors $b + a > 0$, donc $f(b) - f(a) > 0$ : $f(a) < f(b)$. La fonction carré est **strictement croissante** sur $[0 ; +\\infty[$.\n• **Sur $]-\\infty ; 0]$** : si $a < b \\le 0$, alors $b + a < 0$, donc $f(b) - f(a) < 0$ : $f(a) > f(b)$. La fonction carré est **strictement décroissante** sur $]-\\infty ; 0]$.\nSon minimum sur $\\mathbb{R}$ est $f(0) = 0$."
      },
      {
        "title": "8. Démonstration : variations de la fonction inverse",
        "content": "Soit $f(x) = \\frac{1}{x}$ et deux réels non nuls $a < b$ **de même signe**. On étudie le signe de\n$$f(b) - f(a) = \\frac{1}{b} - \\frac{1}{a} = \\frac{a - b}{ab}$$\nOn sait que $a - b < 0$.\n• **Sur $]0 ; +\\infty[$** : si $0 < a < b$, alors $ab > 0$, donc $f(b) - f(a) < 0$ : $f(a) > f(b)$. La fonction inverse est **strictement décroissante** sur $]0 ; +\\infty[$.\n• **Sur $]-\\infty ; 0[$** : si $a < b < 0$, le produit de deux négatifs est positif : $ab > 0$, donc $f(b) - f(a) < 0$ : la fonction inverse est aussi **strictement décroissante** sur $]-\\infty ; 0[$.\n⚠️ On ne peut pas conclure sur $\\mathbb{R}^*$ tout entier : $-1 < 1$ et pourtant $f(-1) = -1 < f(1) = 1$."
      },
      {
        "title": "9. Pour aller plus loin : courbes de la racine carrée et du carré",
        "content": "Sur $[0 ; +\\infty[$, si $y = \\sqrt{x}$ alors $x = y^2$ (et réciproquement, pour $y \\ge 0$). Les courbes de $x \\mapsto \\sqrt{x}$ et de $x \\mapsto x^2$ restreinte à $[0 ; +\\infty[$ sont donc **symétriques par rapport à la droite d'équation $y = x$** dans un repère orthonormé : le point $(4 ; 2)$ est sur la première, le point $(2 ; 4)$ sur la seconde."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre $x^2 \\le a$ ($a > 0$)",
        "example": "Résoudre dans $\\mathbb{R}$ l'inéquation $x^2 \\le 9$.",
        "steps": [
          "**Étape 1** : La fonction carré est décroissante sur $]-\\infty ; 0]$, croissante sur $[0 ; +\\infty[$, et $(-3)^2 = 3^2 = 9$ : on en déduit $x^2 \\le 9 \\iff -\\sqrt{9} \\le x \\le \\sqrt{9}$.",
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
      },
      {
        "title": "Méthode : Comparer deux images par une fonction de référence",
        "example": "Sans calculatrice, comparer $(-3{,}7)^2$ et $(-3{,}2)^2$, puis $\\frac{1}{0{,}7}$ et $\\frac{1}{0{,}8}$.",
        "steps": [
          "**Étape 1 (Carré)** : $-3{,}7$ et $-3{,}2$ appartiennent à $]-\\infty ; 0]$, où la fonction carré est strictement décroissante (elle inverse l'ordre).",
          "**Étape 2** : $-3{,}7 < -3{,}2$ donc $(-3{,}7)^2 > (-3{,}2)^2$ (contrôle : $13{,}69 > 10{,}24$).",
          "**Étape 3 (Inverse)** : $0{,}7$ et $0{,}8$ appartiennent à $]0 ; +\\infty[$, où la fonction inverse est strictement décroissante ; $0{,}7 < 0{,}8$ donc $\\frac{1}{0{,}7} > \\frac{1}{0{,}8}$.",
          "**Conclusion** : $(-3{,}7)^2 > (-3{,}2)^2$ et $\\frac{1}{0{,}7} > \\frac{1}{0{,}8}$ ($\\approx 1{,}43 > 1{,}25$)."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention pour $x^2 \\ge 9$ : les solutions sont les valeurs à l'extérieur des racines, soit $S = ]-\\infty ; -3] \\cup [3 ; +\\infty[$ !",
      "⚠️ La fonction inverse n'est PAS décroissante sur $\\mathbb{R}^*$ tout entier, mais séparément sur chaque intervalle $]-\\infty ; 0[$ et $]0 ; +\\infty[$.",
      "⚠️ Si $-2 \\le x \\le 3$, on n'a **pas** $4 \\le x^2 \\le 9$ : l'intervalle contient $0$, où la fonction carré change de sens. On a en réalité $0 \\le x^2 \\le 9$.",
      "⚠️ L'équation $x^2 = 16$ a **deux** solutions : $-4$ et $4$. Ne pas oublier la solution négative.",
      "⚠️ Élever au carré n'agrandit pas toujours un nombre : pour $0 < x < 1$, $x^2 < x$ (par exemple $0{,}5^2 = 0{,}25$).",
      "⚠️ $|x| \\le 3$ ne signifie pas $x \\le 3$ : il faut aussi $x \\ge -3$, soit $x \\in [-3 ; 3]$."
    ],
    "flashcards": [
      {
        "q": "Pour aller plus loin : quelle symétrie présente la courbe d'une fonction paire ?",
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
      },
      {
        "q": "Quelles sont les variations de la fonction valeur absolue ?",
        "a": "Décroissante sur $]-\\infty ; 0]$, croissante sur $[0 ; +\\infty[$, minimum $0$ en $0$."
      },
      {
        "q": "Comparer $(-5)^2$ et $(-2)^2$ à l'aide des variations.",
        "a": "La fonction carré est décroissante sur $]-\\infty ; 0]$ et $-5 < -2$, donc $(-5)^2 > (-2)^2$ ($25 > 4$)."
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
      "Calculer les coordonnées du symétrique d'un point ou du quatrième sommet d'un parallélogramme.",
      "Justifier la formule de la distance à l'aide du théorème de Pythagore.",
      "Réinvestir Pythagore, Thalès et la trigonométrie du triangle rectangle."
    ],
    "keyPoints": [
      {
        "title": "1. Formules fondamentales de géométrie analytique",
        "content": "Soient $A(x_A ; y_A)$ et $B(x_B ; y_B)$ deux points du plan :\n• **Coordonnées du milieu $M$ du segment $[AB]$** (valable dans tout repère ; formule admise, sa démonstration à l'aide des vecteurs est un approfondissement, voir le chapitre 2G2) :\n$$x_M = \\frac{x_A + x_B}{2} \\quad \\text{et} \\quad y_M = \\frac{y_A + y_B}{2}$$\n• **Distance $AB$** (valable **uniquement dans un repère orthonormé**) :\n$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$"
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
      },
      {
        "title": "5. Démonstration : formule de la distance",
        "content": "Dans un repère **orthonormé**, soient $A(x_A ; y_A)$ et $B(x_B ; y_B)$. On considère le point $H(x_B ; y_A)$.\n1. $A$ et $H$ ont la même ordonnée : $(AH)$ est parallèle à l'axe des abscisses et $AH = |x_B - x_A|$.\n2. $H$ et $B$ ont la même abscisse : $(HB)$ est parallèle à l'axe des ordonnées et $HB = |y_B - y_A|$.\n3. Les axes étant perpendiculaires, le triangle $AHB$ est rectangle en $H$ (s'il n'est pas aplati). Le théorème de Pythagore donne :\n$$AB^2 = AH^2 + HB^2 = (x_B - x_A)^2 + (y_B - y_A)^2$$\ncar $|u|^2 = u^2$. Une distance étant positive, $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$. La formule reste vraie si $H = A$ ou $H = B$ (points sur une même horizontale ou verticale).\nC'est parce qu'on utilise l'égalité des unités et l'angle droit entre les axes que la formule exige un repère orthonormé."
      },
      {
        "title": "6. Rappels : Pythagore, Thalès et trigonométrie",
        "content": "• **Pythagore** : si $ABC$ est rectangle en $A$, alors $BC^2 = AB^2 + AC^2$.\n• **Thalès** : si $M \\in (AB)$, $N \\in (AC)$ et $(MN) \\parallel (BC)$, alors $\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$.\n• **Trigonométrie** : dans un triangle $ABC$ rectangle en $A$, pour l'angle aigu $\\widehat{B}$ :\n$$\\cos \\widehat{B} = \\frac{AB}{BC} \\qquad \\sin \\widehat{B} = \\frac{AC}{BC} \\qquad \\tan \\widehat{B} = \\frac{AC}{AB}$$\n(côté adjacent, côté opposé, hypoténuse).\n• **Relation** : $\\cos^2 \\widehat{B} + \\sin^2 \\widehat{B} = 1$. En effet $\\cos^2 \\widehat{B} + \\sin^2 \\widehat{B} = \\frac{AB^2 + AC^2}{BC^2} = \\frac{BC^2}{BC^2} = 1$ d'après Pythagore.\n*Exemple* : si $BC = 10$ et $\\widehat{B} = 30°$, alors $AC = 10 \\sin 30° = 5$ et $AB = 10 \\cos 30° \\approx 8{,}66$."
      },
      {
        "title": "7. Automatismes : grandeurs et configurations",
        "content": "• **Repérage** : lire les coordonnées d'un point, placer un point de coordonnées données, dans un repère orthogonal.\n• **Périmètres** : polygone (somme des côtés), cercle $2\\pi r$. **Aires** : rectangle $L \\times \\ell$, triangle $\\frac{\\text{base} \\times \\text{hauteur}}{2}$, disque $\\pi r^2$.\n• **Volumes** : pavé droit $abc$ ; prisme droit et cylindre $\\mathcal{B} \\times h$ (cylindre : $\\pi r^2 h$) ; pyramide et cône $\\frac{1}{3}\\mathcal{B} \\times h$ (cône : $\\frac{1}{3}\\pi r^2 h$) ; boule $\\frac{4}{3}\\pi r^3$.\n*Exemple* : un cône de rayon $3$ cm et de hauteur $4$ cm a pour volume $\\frac{1}{3}\\pi \\times 9 \\times 4 = 12\\pi \\approx 37{,}7$ cm³.\n• **Pythagore** : un triangle rectangle de côtés de l'angle droit $6$ et $8$ a une hypoténuse de $10$. **Thalès** : en configuration de Thalès, $\\frac{AM}{AB} = \\frac{AN}{AC}$.\n• **Trigonométrie** : dans un triangle rectangle d'hypoténuse $10$ et d'angle aigu $30^\\circ$, le côté opposé mesure $10 \\sin 30^\\circ = 5$."
      },
      {
        "title": "8. Pour aller plus loin : aire d'un triangle",
        "content": "Dans un triangle $ABC$ avec $a = BC$ et $b = CA$, la hauteur issue de $A$ mesure $b \\sin \\widehat{C}$ (lorsque l'angle $\\widehat{C}$ est aigu). L'aire vaut donc\n$$\\mathcal{A} = \\frac{1}{2}\\,ab\\sin \\widehat{C}$$\n*Exemple* : $a = 4$, $b = 5$ et $\\widehat{C} = 30^\\circ$ donnent $\\mathcal{A} = \\frac{1}{2} \\times 4 \\times 5 \\times \\frac{1}{2} = 5$."
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
      },
      {
        "q": "Dans un triangle rectangle, que vaut $\\cos^2 \\alpha + \\sin^2 \\alpha$ pour un angle aigu $\\alpha$ ?",
        "a": "$1$ (conséquence du théorème de Pythagore)."
      }
    ]
  },

  "2G2": {
    "title": "2G2 : Vecteurs du plan, translation et déterminant (colinéarité)",
    "domain": "Géométrie",
    "objectives": [
      "Définir un vecteur par sa direction, son sens et sa norme ; connaître le vecteur nul.",
      "Reconnaître des vecteurs égaux et construire des représentants d'un vecteur.",
      "Appliquer la relation de Chasles $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$ et la règle du parallélogramme.",
      "Connaître la direction, le sens et la norme du vecteur $k\\vec{u}$.",
      "Calculer les coordonnées d'un vecteur $\\overrightarrow{AB}\\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$ et sa norme.",
      "Utiliser le déterminant $\\det(\\vec{u}, \\vec{v}) = xy' - yx' = 0$ pour tester la colinéarité et prouver l'alignement ou le parallélisme.",
      "Calculer les coordonnées d'une somme de vecteurs et du produit d'un vecteur par un réel.",
      "Caractériser un parallélogramme par une égalité vectorielle.",
      "Décomposer un vecteur dans une base : $\\vec{u} = x\\vec{i} + y\\vec{j}$.",
      "Démontrer l'équivalence entre colinéarité, proportionnalité des coordonnées et nullité du déterminant."
    ],
    "keyPoints": [
      {
        "title": "1. Translation et vecteur",
        "content": "La **translation** qui transforme $A$ en $B$ associe à tout point $M$ l'unique point $M'$ tel que $ABM'M$ soit un parallélogramme (éventuellement aplati). On dit que $M'$ est l'image de $M$ par la translation de vecteur $\\overrightarrow{AB}$.\nPour $A \\neq B$, le vecteur $\\overrightarrow{AB}$ est caractérisé par :\n• sa **direction** (celle de la droite $(AB)$) ;\n• son **sens** (de $A$ vers $B$) ;\n• sa **norme** $\\|\\overrightarrow{AB}\\| = AB$.\n• **Vecteur nul** : si $A = B$, la translation laisse chaque point à sa place. Le vecteur $\\overrightarrow{AA}$ est le **vecteur nul**, noté $\\vec{0}$ : sa norme vaut $0$ et il n'a ni direction ni sens."
      },
      {
        "title": "2. Égalité de vecteurs et représentants",
        "content": "• Deux vecteurs non nuls sont **égaux** lorsqu'ils ont la même direction, le même sens et la même norme.\n• **Propriété** : $\\overrightarrow{AB} = \\overrightarrow{DC} \\iff ABCD$ est un parallélogramme (éventuellement aplati).\n• Un même vecteur $\\vec{u}$ peut être tracé à partir de n'importe quel point : chaque flèche qui le dessine est un **représentant** de $\\vec{u}$. Pour tout point $M$, il existe un unique point $N$ tel que $\\overrightarrow{MN} = \\vec{u}$ : c'est l'image de $M$ par la translation de vecteur $\\vec{u}$.\n*Exemple* : dans un parallélogramme $ABCD$, $\\overrightarrow{AB}$ et $\\overrightarrow{DC}$ sont deux représentants d'un même vecteur.\n• Le vecteur **opposé** de $\\overrightarrow{AB}$ est $-\\overrightarrow{AB} = \\overrightarrow{BA}$ : même direction, même norme, sens contraire."
      },
      {
        "title": "3. Somme de vecteurs : relation de Chasles et règle du parallélogramme",
        "content": "• La **somme** $\\vec{u} + \\vec{v}$ est le vecteur de la translation obtenue en enchaînant la translation de vecteur $\\vec{u}$, puis celle de vecteur $\\vec{v}$.\n• **Relation de Chasles** (vecteurs bout à bout) : pour tous points $A$, $B$, $C$ : $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$.\n*Exemple* : $\\overrightarrow{MA} + \\overrightarrow{AN} = \\overrightarrow{MN}$ ; on « intercale » un point. En particulier, $\\overrightarrow{AB} + \\overrightarrow{BA} = \\overrightarrow{AA} = \\vec{0}$.\n• **Règle du parallélogramme** (vecteurs de même origine) : $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AC}$ si et seulement si $ABCD$ est un parallélogramme (éventuellement aplati).\n• **Différence** : $\\vec{u} - \\vec{v} = \\vec{u} + (-\\vec{v})$.\n*Exemple* : $\\overrightarrow{AC} - \\overrightarrow{AB} = \\overrightarrow{AC} + \\overrightarrow{BA} = \\overrightarrow{BA} + \\overrightarrow{AC} = \\overrightarrow{BC}$."
      },
      {
        "title": "4. Produit d'un vecteur par un réel et colinéarité",
        "content": "Soient $\\vec{u}$ un vecteur non nul et $k$ un réel non nul. Le vecteur $k\\vec{u}$ :\n• a la même direction que $\\vec{u}$ ;\n• a le même sens que $\\vec{u}$ si $k > 0$, et le sens contraire si $k < 0$ ;\n• a pour norme $|k| \\times \\|\\vec{u}\\|$.\nSi $k = 0$ ou si $\\vec{u} = \\vec{0}$, alors $k\\vec{u} = \\vec{0}$.\n*Exemple* : $-2\\vec{u}$ a la même direction que $\\vec{u}$, le sens contraire et une norme deux fois plus grande.\n• $\\vec{u}$ et $\\vec{v}$ sont **colinéaires** s'il existe un réel $k$ tel que $\\vec{v} = k\\vec{u}$ (ou si $\\vec{u} = \\vec{0}$). Deux vecteurs non nuls sont colinéaires lorsqu'ils ont la même direction.\n• **Caractérisation vectorielle du milieu** : $I$ est le milieu de $[AB]$ si et seulement si $\\overrightarrow{AI} = \\overrightarrow{IB}$ (ou encore $\\overrightarrow{AI} = \\frac{1}{2}\\overrightarrow{AB}$)."
      },
      {
        "title": "5. Base orthonormée et coordonnées d'un vecteur",
        "content": "• Un repère $(O ; \\vec{i}, \\vec{j})$ est **orthonormé** si $\\vec{i}$ et $\\vec{j}$ ont des directions perpendiculaires et une norme égale à $1$ : on dit que $(\\vec{i}, \\vec{j})$ est une **base orthonormée**.\n• Dire que $\\vec{u}$ a pour coordonnées $(x ; y)$ signifie que\n$$\\vec{u} = x\\vec{i} + y\\vec{j}$$\n*Exemple* : $\\vec{u} = 3\\vec{i} - 2\\vec{j}$ a pour coordonnées $(3 ; -2)$.\n• Pour $A(x_A ; y_A)$ et $B(x_B ; y_B)$ : $$\\overrightarrow{AB}\\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$$\n• Norme dans un repère orthonormé : $||\\vec{u}|| = \\sqrt{x^2 + y^2}$.\n• Plus généralement, si $\\vec{a}$ et $\\vec{b}$ ne sont pas colinéaires, tout vecteur du plan s'écrit de façon unique $\\vec{u} = \\alpha\\vec{a} + \\beta\\vec{b}$ (propriété admise).\n• En physique, $\\overrightarrow{AB}$ est le **vecteur déplacement** de $A$ à $B$ ; si $O$ est l'origine, $\\overrightarrow{OM}$ est le **vecteur position** de $M$, et ses coordonnées sont celles du point $M$."
      },
      {
        "title": "6. Opérations en coordonnées et déterminant",
        "content": "Pour $\\vec{u}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$, $\\vec{v}\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}$ et un réel $k$ :\n$$\\vec{u} + \\vec{v}\\begin{pmatrix} x + x' \\\\ y + y' \\end{pmatrix} \\qquad k\\vec{u}\\begin{pmatrix} kx \\\\ ky \\end{pmatrix}$$\n• *Pour aller plus loin* : en coordonnées, $\\overrightarrow{AI} = \\overrightarrow{IB}$ donne $x_I - x_A = x_B - x_I$, soit $x_I = \\frac{x_A + x_B}{2}$ (et de même pour $y_I$) : on retrouve la formule du milieu.\n• On rencontre aussi l'écriture des coordonnées en ligne, $\\vec{u}(x ; y)$ : elle désigne les mêmes coordonnées (abscisse puis ordonnée) que $\\vec{u}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$.\n• **Critère de colinéarité (Déterminant)** : Deux vecteurs $\\vec{u}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}$ sont colinéaires si et seulement si :\n$$\\det(\\vec{u}, \\vec{v}) = xy' - yx' = 0$$"
      },
      {
        "title": "7. Démonstration : caractérisations de la colinéarité",
        "content": "Soient $\\vec{u}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}$ deux vecteurs **non nuls**. Les trois propriétés suivantes sont équivalentes :\n**(1)** $\\vec{u}$ et $\\vec{v}$ sont colinéaires ; **(2)** leurs coordonnées sont proportionnelles : il existe un réel $k$ tel que $x' = kx$ et $y' = ky$ ; **(3)** $\\det(\\vec{u}, \\vec{v}) = xy' - yx' = 0$.\n• **(1) $\\iff$ (2)** : c'est la traduction en coordonnées de $\\vec{v} = k\\vec{u}$.\n• **(2) $\\implies$ (3)** : si $x' = kx$ et $y' = ky$, alors $xy' - yx' = x(ky) - y(kx) = 0$.\n• **(3) $\\implies$ (2)** : supposons $xy' = yx'$. Comme $\\vec{u} \\neq \\vec{0}$, $x \\neq 0$ ou $y \\neq 0$.\n– Si $x \\neq 0$, posons $k = \\frac{x'}{x}$ : alors $x' = kx$ et $y' = \\frac{yx'}{x} = ky$.\n– Si $x = 0$, alors $y \\neq 0$ et l'égalité donne $0 = yx'$, donc $x' = 0$. Avec $k = \\frac{y'}{y}$, on a $x' = 0 = kx$ et $y' = ky$.\nDans tous les cas, $\\vec{v} = k\\vec{u}$."
      },
      {
        "title": "8. Algorithme : tester l'alignement de trois points",
        "content": "$A$, $B$, $C$ sont alignés si et seulement si $\\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = 0$.\n```python\ndef alignes(xA, yA, xB, yB, xC, yC):\n    d = (xB - xA) * (yC - yA) - (yB - yA) * (xC - xA)\n    return d == 0\n\nprint(alignes(-2, 1, 2, 3, 6, 5))   # affiche True\n```\nAvec des coordonnées non entières, les calculs en flottants peuvent produire de minuscules erreurs : on teste alors `abs(d) < 1e-9` plutôt que `d == 0`."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Simplifier une somme avec la relation de Chasles",
        "example": "Simplifier l'expression $\\overrightarrow{AB} + \\overrightarrow{CA} - \\overrightarrow{CB}$.",
        "steps": [
          "**Étape 1** : On transforme la soustraction avec le vecteur opposé : $-\\overrightarrow{CB} = \\overrightarrow{BC}$. L'expression devient $\\overrightarrow{AB} + \\overrightarrow{CA} + \\overrightarrow{BC}$.",
          "**Étape 2** : L'ordre d'une somme ne compte pas : on place les vecteurs bout à bout, $\\overrightarrow{CA} + \\overrightarrow{AB} + \\overrightarrow{BC}$.",
          "**Étape 3** : On applique la relation de Chasles : $\\overrightarrow{CA} + \\overrightarrow{AB} = \\overrightarrow{CB}$, puis $\\overrightarrow{CB} + \\overrightarrow{BC} = \\overrightarrow{CC} = \\vec{0}$.",
          "**Conclusion** : $\\overrightarrow{AB} + \\overrightarrow{CA} - \\overrightarrow{CB} = \\vec{0}$."
        ]
      },
      {
        "title": "Méthode : Construire un représentant d'un vecteur sur un quadrillage",
        "example": "Sur un quadrillage, la flèche de $\\vec{u}$ se déplace de 3 carreaux vers la droite et de 1 carreau vers le haut. Construire le représentant de $\\vec{u}$ d'origine $M$.",
        "steps": [
          "**Étape 1** : On lit le déplacement de la flèche de $\\vec{u}$, de son origine à son extrémité.",
          "**Étape 2** : À partir de $M$, on effectue le même déplacement (3 carreaux vers la droite, 1 vers le haut) : on arrive au point $N$.",
          "**Étape 3** : On trace la flèche de $M$ à $N$.",
          "**Conclusion** : $\\overrightarrow{MN} = \\vec{u}$ : $N$ est l'image de $M$ par la translation de vecteur $\\vec{u}$."
        ]
      },
      {
        "title": "Méthode : Construire la somme de deux vecteurs sur un quadrillage",
        "example": "Sur un quadrillage, la flèche de $\\vec{u}$ se déplace de 3 carreaux vers la droite et de 1 carreau vers le haut, celle de $\\vec{v}$ de 1 carreau vers la droite et de 2 carreaux vers le bas. Construire un représentant de $\\vec{u} + \\vec{v}$ d'origine $M$.",
        "steps": [
          "**Étape 1** : À partir de $M$, on effectue le déplacement de $\\vec{u}$ : on arrive au point $N$, et $\\overrightarrow{MN} = \\vec{u}$.",
          "**Étape 2** : À partir de $N$, on effectue le déplacement de $\\vec{v}$ : on arrive au point $P$, et $\\overrightarrow{NP} = \\vec{v}$.",
          "**Étape 3** : D'après la relation de Chasles, $\\overrightarrow{MN} + \\overrightarrow{NP} = \\overrightarrow{MP}$, donc $\\overrightarrow{MP} = \\vec{u} + \\vec{v}$.",
          "**Conclusion** : on trace la flèche de $M$ à $P$ : au total, elle se déplace de 4 carreaux vers la droite et de 1 carreau vers le bas."
        ]
      },
      {
        "title": "Méthode : Démontrer l'alignement de trois points avec la colinéarité",
        "example": "Soient $A(-2 ; 1)$, $B(2 ; 3)$ et $C(6 ; 5)$. Les points $A, B, C$ sont-ils alignés ?",
        "steps": [
          "**Étape 1** : On calcule les coordonnées des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ :\n$\\overrightarrow{AB}\\begin{pmatrix} 2 - (-2) \\\\ 3 - 1 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix} 6 - (-2) \\\\ 5 - 1 \\end{pmatrix} = \\begin{pmatrix} 8 \\\\ 4 \\end{pmatrix}$.",
          "**Étape 2** : On calcule le déterminant : $\\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = 4 \\times 4 - 2 \\times 8 = 16 - 16 = 0$.",
          "**Étape 3** : Le déterminant est nul, donc les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires. Ayant le point $A$ en commun, les points $A, B, C$ sont alignés."
        ]
      },
      {
        "title": "Méthode : Calculer les coordonnées d'un point défini par une égalité vectorielle",
        "example": "Soient $A(1 ; 2)$, $B(4 ; -1)$ et $C(-2 ; 3)$. Déterminer les coordonnées du point $D$ tel que $\\overrightarrow{AD} = \\overrightarrow{AB} + 2\\overrightarrow{AC}$.",
        "steps": [
          "**Étape 1** : $\\overrightarrow{AB}\\begin{pmatrix} 4 - 1 \\\\ -1 - 2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -3 \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix} -2 - 1 \\\\ 3 - 2 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 1 \\end{pmatrix}$.",
          "**Étape 2** : $\\overrightarrow{AB} + 2\\overrightarrow{AC}\\begin{pmatrix} 3 + 2 \\times (-3) \\\\ -3 + 2 \\times 1 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ -1 \\end{pmatrix}$.",
          "**Étape 3** : $\\overrightarrow{AD}\\begin{pmatrix} x_D - 1 \\\\ y_D - 2 \\end{pmatrix}$, donc $x_D - 1 = -3$ et $y_D - 2 = -1$.",
          "**Conclusion** : $x_D = -2$ et $y_D = 1$, soit $D(-2 ; 1)$."
        ]
      },
      {
        "title": "Méthode : Démontrer que deux droites sont parallèles",
        "example": "Soient $A(0 ; 3)$, $B(2 ; 7)$, $C(-1 ; -2)$ et $D(3 ; 6)$. Les droites $(AB)$ et $(CD)$ sont-elles parallèles ?",
        "steps": [
          "**Étape 1** : $\\overrightarrow{AB}\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$ et $\\overrightarrow{CD}\\begin{pmatrix} 3 - (-1) \\\\ 6 - (-2) \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 8 \\end{pmatrix}$.",
          "**Étape 2** : $\\det(\\overrightarrow{AB}, \\overrightarrow{CD}) = 2 \\times 8 - 4 \\times 4 = 16 - 16 = 0$ : les vecteurs sont colinéaires, donc $(AB) \\parallel (CD)$.",
          "**Étape 3 (Droites confondues ?)** : $\\overrightarrow{AC}\\begin{pmatrix} -1 \\\\ -5 \\end{pmatrix}$ et $\\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = 2 \\times (-5) - 4 \\times (-1) = -10 + 4 = -6 \\neq 0$, donc $C \\notin (AB)$.",
          "**Conclusion** : les droites $(AB)$ et $(CD)$ sont **strictement parallèles**."
        ]
      }
    ],
    "traps": [
      "⚠️ La relation de Chasles s'applique lorsque l'extrémité du premier vecteur est l'origine du second : $\\overrightarrow{AB} + \\overrightarrow{AC}$ n'est pas égal à $\\overrightarrow{BC}$.",
      "⚠️ Attention à l'ordre des coordonnées du vecteur : c'est toujours l'extrémité moins l'origine ($x_B - x_A$).",
      "⚠️ Deux droites $(AB)$ et $(CD)$ sont parallèles ssi $\\overrightarrow{AB}$ et $\\overrightarrow{CD}$ sont colinéaires.",
      "⚠️ $ABCD$ est un parallélogramme si et seulement si $\\overrightarrow{AB} = \\overrightarrow{DC}$, et non $\\overrightarrow{AB} = \\overrightarrow{CD}$ (vecteurs de sens contraires).",
      "⚠️ La norme d'une somme n'est pas la somme des normes : en général $\\|\\vec{u} + \\vec{v}\\| \\neq \\|\\vec{u}\\| + \\|\\vec{v}\\|$ (on a seulement $\\|\\vec{u} + \\vec{v}\\| \\le \\|\\vec{u}\\| + \\|\\vec{v}\\|$).",
      "⚠️ Deux vecteurs colinéaires n'ont pas forcément le même sens : $-2\\vec{u}$ est colinéaire à $\\vec{u}$ mais de sens contraire."
    ],
    "flashcards": [
      {
        "q": "Quelle est la condition nécessaire et suffisante pour que $\\vec{u}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}$ soient colinéaires ?",
        "a": "$xy' - yx' = 0$ (déterminant nul)."
      },
      {
        "q": "Énoncer la relation de Chasles pour les vecteurs.",
        "a": "$\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$."
      },
      {
        "q": "$\\vec{u}\\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} -2 \\\\ 5 \\end{pmatrix}$. Coordonnées de $2\\vec{u} - \\vec{v}$ ?",
        "a": "$(2 \\times 3 - (-2) ; 2 \\times (-1) - 5) = (8 ; -7)$."
      },
      {
        "q": "Les vecteurs $\\vec{u}\\begin{pmatrix} 6 \\\\ -4 \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} -9 \\\\ 6 \\end{pmatrix}$ sont-ils colinéaires ?",
        "a": "Oui : $\\det(\\vec{u}, \\vec{v}) = 6 \\times 6 - (-4) \\times (-9) = 36 - 36 = 0$ (et $\\vec{v} = -1{,}5\\,\\vec{u}$)."
      },
      {
        "q": "Dans un repère orthonormé, norme de $\\vec{u}\\begin{pmatrix} -5 \\\\ 12 \\end{pmatrix}$ ?",
        "a": "$\\|\\vec{u}\\| = \\sqrt{25 + 144} = \\sqrt{169} = 13$."
      },
      {
        "q": "Quelles sont les coordonnées de $\\vec{u} = -\\vec{i} + 4\\vec{j}$ ?",
        "a": "$\\vec{u}\\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix}$."
      },
      {
        "q": "Pourquoi la proportionnalité des coordonnées entraîne-t-elle un déterminant nul ?",
        "a": "Si $x' = kx$ et $y' = ky$, alors $xy' - yx' = kxy - kxy = 0$."
      }
    ]
  },

  "2G3": {
    "title": "2G3 : Droites du plan, équations cartésiennes et réduites",
    "domain": "Géométrie",
    "objectives": [
      "Déterminer et utiliser l'équation cartésienne d'une droite $ax + by + c = 0$ et son vecteur directeur $\\vec{u}\\begin{pmatrix} -b \\\\ a \\end{pmatrix}$.",
      "Déterminer l'équation réduite $y = mx + p$ (si la droite n'est pas verticale) avec le coefficient directeur $m = \\frac{y_B - y_A}{x_B - x_A}$.",
      "Connaître la définition d'un vecteur directeur et tracer une droite à partir de son équation.",
      "Caractériser le parallélisme de deux droites par l'égalité de leurs coefficients directeurs.",
      "Calculer les coordonnées du point d'intersection de deux droites sécantes données par leurs équations réduites.",
      "Déterminer une équation de droite à partir d'un point et d'un vecteur directeur.",
      "Pour aller plus loin : résoudre un système de deux équations linéaires à deux inconnues par combinaison.",
      "Établir, à l'aide du déterminant, la forme générale $ax + by + c = 0$ d'une équation de droite.",
      "Déterminer une équation de droite à partir d'un point et de la pente, et programmer ce calcul en Python."
    ],
    "keyPoints": [
      {
        "title": "1. Équation cartésienne et réduite d'une droite",
        "content": "• **Vecteur directeur** : soient $A$ et $B$ deux points distincts d'une droite $d$. On appelle **vecteur directeur** de $d$ tout vecteur **non nul** colinéaire à $\\overrightarrow{AB}$ ($\\overrightarrow{AB}$ lui-même, par exemple). Une droite admet donc une infinité de vecteurs directeurs, tous colinéaires entre eux.\n• **Équation cartésienne** : Toute droite du plan admet une équation de la forme $ax + by + c = 0$ avec $(a, b) \\neq (0, 0)$. Un **vecteur directeur** de cette droite est $\\vec{u}\\begin{pmatrix} -b \\\\ a \\end{pmatrix}$.\n• **Équation réduite** :\n- Si la droite n'est pas verticale ($b \\neq 0$) : $y = mx + p$ où $m$ est le **coefficient directeur** (la pente) et $p$ est l'**ordonnée à l'origine**. Le vecteur $\\vec{u}\\begin{pmatrix} 1 \\\\ m \\end{pmatrix}$ est un vecteur directeur.\n- Si la droite est verticale ($b = 0$) : $x = k$. Elle n'a pas de coefficient directeur.\n*Au collège, on écrivait $y = ax + b$ : ici, $m$ joue le rôle de $a$ et $p$ celui de $b$. Attention : dans l'équation cartésienne $ax + by + c = 0$, la lettre $a$ n'a pas ce sens (si $b \\neq 0$, le coefficient directeur y vaut $-\\frac{a}{b}$).*"
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
        "title": "4. Positions relatives de deux droites",
        "content": "Soient $d : ax + by + c = 0$ et $d' : a'x + b'y + c' = 0$.\n• $d \\parallel d' \\iff$ leurs vecteurs directeurs $\\vec{u}\\begin{pmatrix} -b \\\\ a \\end{pmatrix}$ et $\\vec{u}'\\begin{pmatrix} -b' \\\\ a' \\end{pmatrix}$ sont colinéaires $\\iff ab' - a'b = 0$.\n• Sinon, $d$ et $d'$ sont **sécantes** en un unique point.\n**Pour aller plus loin** (les systèmes ne sont pas au programme de seconde) : le système formé par les deux équations a donc :\n• **une** solution si les droites sont sécantes ;\n• **aucune** solution si elles sont strictement parallèles ;\n• une **infinité** de solutions si elles sont confondues."
      },
      {
        "title": "5. Démonstration : forme générale d'une équation de droite",
        "content": "**Toute droite a une équation de la forme $ax + by + c = 0$.** Soit $d$ la droite passant par $A(x_A ; y_A)$ et de vecteur directeur $\\vec{u}\\begin{pmatrix} \\alpha \\\\ \\beta \\end{pmatrix} \\neq \\vec{0}$. Pour tout point $M(x ; y)$ :\n$$M \\in d \\iff \\overrightarrow{AM} \\text{ et } \\vec{u} \\text{ colinéaires} \\iff (x - x_A)\\beta - (y - y_A)\\alpha = 0 \\iff \\beta x - \\alpha y + (\\alpha y_A - \\beta x_A) = 0$$\nEn posant $a = \\beta$, $b = -\\alpha$ et $c = \\alpha y_A - \\beta x_A$, on obtient $ax + by + c = 0$ avec $(a ; b) \\neq (0 ; 0)$ puisque $\\vec{u} \\neq \\vec{0}$.\n**Réciproquement**, soit $a$, $b$, $c$ avec $(a ; b) \\neq (0 ; 0)$. L'ensemble des points vérifiant $ax + by + c = 0$ contient un point $A(x_A ; y_A)$ (par exemple $A\\left(0 ; -\\frac{c}{b}\\right)$ si $b \\neq 0$, ou $A\\left(-\\frac{c}{a} ; 0\\right)$ si $b = 0$). Comme $ax_A + by_A + c = 0$ :\n$$ax + by + c = 0 \\iff a(x - x_A) + b(y - y_A) = 0 \\iff \\det(\\overrightarrow{AM}, \\vec{u}) = 0 \\text{ avec } \\vec{u}\\begin{pmatrix} -b \\\\ a \\end{pmatrix}$$\nC'est donc la droite passant par $A$ et de vecteur directeur $\\vec{u}\\begin{pmatrix} -b \\\\ a \\end{pmatrix}$."
      },
      {
        "title": "6. Algorithme : équation réduite d'une droite passant par deux points",
        "content": "```python\ndef equation_reduite(xA, yA, xB, yB):\n    if xA == xB:\n        return \"droite verticale d'équation x = \" + str(xA)\n    m = (yB - yA) / (xB - xA)\n    p = yA - m * xA\n    return m, p\n\nprint(equation_reduite(1, 3, 4, 9))   # affiche (2.0, 1.0) : y = 2x + 1\n```\nLe test `xA == xB` traite le cas de la droite verticale, qui n'a pas d'équation réduite."
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
          "**Étape 1** : $M(x ; y) \\in d \\iff \\overrightarrow{AM}\\begin{pmatrix} x - 2 \\\\ y + 1 \\end{pmatrix}$ et $\\vec{u}$ sont colinéaires $\\iff \\det(\\overrightarrow{AM}, \\vec{u}) = 0$.",
          "**Étape 2** : $\\det(\\overrightarrow{AM}, \\vec{u}) = (x - 2) \\times 4 - (y + 1) \\times 3 = 4x - 8 - 3y - 3$.",
          "**Étape 3** : $M \\in d \\iff 4x - 3y - 11 = 0$.",
          "**Conclusion** : $d : 4x - 3y - 11 = 0$. Contrôles : $A$ vérifie $8 + 3 - 11 = 0$, et le vecteur $(-b ; a) = (3 ; 4)$ est bien $\\vec{u}$."
        ]
      },
      {
        "title": "Méthode : Tracer une droite à partir d'une équation",
        "example": "Dans un repère, tracer les droites $d_1 : y = 2x - 3$, $d_2 : 3x + 2y - 6 = 0$ et $d_3 : x = -2$.",
        "steps": [
          "**Principe** : deux points distincts suffisent pour tracer une droite. On choisit des valeurs simples, on calcule les coordonnées des deux points, on les place et on trace la droite qui les joint.",
          "**Équation réduite** $d_1 : y = 2x - 3$ : pour $x = 0$, $y = -3$, d'où $A(0 ; -3)$, le point de l'axe des ordonnées. Pour $x = 2$, $y = 2 \\times 2 - 3 = 1$, d'où $B(2 ; 1)$. On peut aussi partir de $A$ et utiliser la pente $m = 2$ : quand on avance de $1$ en abscisse, on monte de $2$ en ordonnée.",
          "**Équation cartésienne** $d_2 : 3x + 2y - 6 = 0$ : pour $x = 0$, $2y - 6 = 0$, soit $y = 3$, d'où $C(0 ; 3)$. Pour $y = 0$, $3x - 6 = 0$, soit $x = 2$, d'où $D(2 ; 0)$.",
          "**Droites parallèles aux axes** : $d_3 : x = -2$ est la droite verticale formée des points d'abscisse $-2$, qui passe par $(-2 ; 0)$. De même, $y = k$ est la droite horizontale formée des points d'ordonnée $k$, qui passe par $(0 ; k)$.",
          "**Contrôle** : on calcule un troisième point. Pour $d_1$ et $x = 1$, $y = -1$ : le point $(1 ; -1)$ doit se trouver sur le tracé."
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
        "title": "Pour aller plus loin — Méthode : Résoudre un système par combinaison",
        "example": "Résoudre le système $\\begin{cases} 2x + 3y = 7 \\\\ 5x - 2y = 8 \\end{cases}$.",
        "steps": [
          "**Étape 1** : On multiplie la 1re équation par $2$ et la 2e par $3$ pour obtenir des coefficients de $y$ opposés : $4x + 6y = 14$ et $15x - 6y = 24$.",
          "**Étape 2** : On additionne membre à membre : $19x = 38$, donc $x = 2$.",
          "**Étape 3** : On reporte dans la 1re équation : $4 + 3y = 7 \\iff y = 1$. Contrôle dans la 2e : $5 \\times 2 - 2 \\times 1 = 8$.",
          "**Conclusion** : le système a pour unique solution le couple $(2 ; 1)$."
        ]
      },
      {
        "title": "Méthode : Équation d'une droite connaissant un point et la pente",
        "example": "Déterminer l'équation réduite de la droite $d$ de pente $-\\frac{3}{2}$ passant par $A(-2 ; 5)$, puis donner un vecteur directeur.",
        "steps": [
          "**Étape 1** : la pente est $m = -1{,}5$, donc $d : y = -1{,}5x + p$.",
          "**Étape 2** : $A \\in d$, donc $5 = -1{,}5 \\times (-2) + p = 3 + p$, d'où $p = 2$.",
          "**Étape 3** : $d : y = -1{,}5x + 2$. Un vecteur directeur est $(1 ; m) = (1 ; -1{,}5)$, ou encore $(2 ; -3)$ en multipliant par $2$.",
          "**Conclusion** : $y = -1{,}5x + 2$. Contrôle : pour $x = -2$, $y = 3 + 2 = 5$."
        ]
      }
    ],
    "traps": [
      "⚠️ Si $x_A = x_B$, la droite est verticale et a pour équation $x = x_A$. Ne pas tenter de diviser par $x_B - x_A = 0$ !",
      "⚠️ Un vecteur directeur de $ax + by + c = 0$ a pour coordonnées $(-b ; a)$, attention au signe moins sur $b$.",
      "⚠️ Pour tester si un point est sur une droite, on remplace $x$ **et** $y$ par ses coordonnées et on vérifie l'égalité.",
      "⚠️ Une droite verticale $x = k$ n'a pas d'équation réduite de la forme $y = mx + p$ : elle n'a pas de coefficient directeur.",
      "⚠️ Des équations cartésiennes différentes peuvent représenter la même droite : pour comparer deux droites non verticales, on compare leurs **équations réduites**. Une droite verticale n'a pas d'équation réduite : deux droites verticales $x = k$ et $x = k'$ sont confondues si et seulement si $k = k'$, et une droite verticale n'est jamais confondue avec une droite non verticale."
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
        "q": "(Pour aller plus loin) Combien de solutions a un système dont les deux droites associées sont strictement parallèles ?",
        "a": "Aucune : les droites n'ont pas de point commun."
      },
      {
        "q": "Donner l'équation réduite de la droite de pente $4$ passant par $A(1 ; -2)$.",
        "a": "$y = 4x + p$ avec $-2 = 4 + p$, donc $p = -6$ : $y = 4x - 6$."
      }
    ]
  },

  "2S1": {
    "title": "2S1 : Statistiques descriptives, séries regroupées en classes et tableaux croisés",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Calculer la moyenne pondérée d'une série statistique discrète ou continue.",
      "Déterminer la médiane $Me$, le premier quartile $Q_1$ et le troisième quartile $Q_3$.",
      "Calculer l'écart interquartile $Q_3 - Q_1$ et l'étendue pour mesurer la dispersion.",
      "Construire et analyser un diagramme en boîte (boîte à moustaches).",
      "Calculer et interpréter l'écart type d'une série statistique.",
      "Choisir des indicateurs adaptés : (moyenne ; écart type) ou (médiane ; écart interquartile).",
      "Comparer deux séries à l'aide de leurs indicateurs ou de leurs diagrammes en boîte.",
      "Pour une série regroupée en classes : histogramme, polygone des fréquences cumulées, moyenne avec les centres de classes, classe médiane et estimation de la médiane.",
      "Mesurer l'influence de l'ajout ou de la suppression d'une valeur sur la moyenne et la médiane.",
      "Distinguer variables quantitatives et variables qualitatives, nominales ou ordinales.",
      "Croiser deux variables qualitatives : tableau croisé d'effectifs, fréquences marginales et conditionnelles, y compris à partir d'un fichier de données."
    ],
    "keyPoints": [
      {
        "title": "1. Indicateurs de position et de dispersion",
        "content": "Pour une série statistique ordonnée d'effectif total $N$ :\n• **Médiane ($Me$)** : Valeur qui partage la série ordonnée en deux groupes de même effectif (au moins 50% des valeurs sont $\\le Me$).\n• **Premier quartile ($Q_1$)** : Plus petite valeur de la série telle qu'au moins 25% des données soient inférieures ou égales à $Q_1$ (son rang est le plus petit entier supérieur ou égal à $0{,}25 N$).\n• **Troisième quartile ($Q_3$)** : Plus petite valeur telle qu'au moins 75% des données soient inférieures ou égales à $Q_3$ (son rang est le plus petit entier supérieur ou égal à $0{,}75 N$).\n• **Écart interquartile** : $I = Q_3 - Q_1$ (mesure robuste de dispersion, non sensible aux valeurs extrêmes)."
      },
      {
        "title": "2. Moyenne et propriété de linéarité",
        "content": "Pour une série de valeurs $x_1, \\dots, x_p$ d'effectifs $n_1, \\dots, n_p$ et d'effectif total $N$ :\n$$\\overline{x} = \\frac{n_1 x_1 + n_2 x_2 + \\dots + n_p x_p}{N}$$\nAvec les fréquences $f_i = \\frac{n_i}{N}$ : $\\overline{x} = f_1 x_1 + \\dots + f_p x_p$.\n• **Linéarité** : si on transforme chaque valeur par $y_i = a x_i + b$, alors $\\overline{y} = a\\overline{x} + b$. Par exemple, ajouter 2 points à toutes les notes augmente la moyenne de 2."
      },
      {
        "title": "3. Variance et écart type",
        "content": "• La **variance** est la moyenne des carrés des écarts à la moyenne :\n$$V = \\frac{n_1(x_1 - \\overline{x})^2 + \\dots + n_p(x_p - \\overline{x})^2}{N}$$\n• L'**écart type** est $\\sigma = \\sqrt{V}$ (on le note aussi $s$). Il s'exprime dans la même unité que les valeurs.\n• Plus $\\sigma$ est grand, plus les valeurs sont **dispersées** autour de la moyenne. Ajouter une même constante à toutes les valeurs ne change pas l'écart type.\n• En pratique, on le calcule avec la calculatrice ou un tableur."
      },
      {
        "title": "4. Diagramme en boîte et choix des indicateurs",
        "content": "• Le **diagramme en boîte** représente, sur un axe gradué : le minimum, $Q_1$, la médiane, $Q_3$ et le maximum. La boîte (de $Q_1$ à $Q_3$) contient environ la moitié centrale des données.\n• Le couple **(moyenne ; écart type)** utilise toutes les valeurs mais est sensible aux valeurs extrêmes.\n• Le couple **(médiane ; écart interquartile)** est robuste face aux valeurs extrêmes.\n• **Comparer deux séries** : on utilise le même couple d'indicateurs pour les deux séries. On compare d'abord leur position (moyennes ou médianes), puis leur dispersion (écarts types ou écarts interquartiles). La série la plus **homogène** est celle dont l'indicateur de dispersion est le plus petit. Deux diagrammes en boîte tracés sur un même axe permettent de comparer directement médianes, quartiles et étendues ; ils ne donnent pas la moyenne.\n• En Python, une moyenne se calcule avec une boucle (`L` désigne ici la série de valeurs ; aucune connaissance sur les listes n'est attendue en seconde : il suffit de comprendre que `for x in L` prend les valeurs une à une et que `len(L)` donne l'effectif total) :\n```python\ndef moyenne(L):\n    s = 0\n    for x in L:\n        s = s + x\n    return s / len(L)\n```"
      },
      {
        "title": "5. Séries regroupées en classes",
        "content": "Lorsque les données sont regroupées en classes **de même amplitude** :\n• **Histogramme** : chaque classe est représentée par un rectangle dont la hauteur est proportionnelle à l'effectif (les bases ayant la même longueur, l'aire est aussi proportionnelle à l'effectif).\n• **Polygone des fréquences cumulées croissantes** : on relie les points dont l'abscisse est la borne supérieure d'une classe et l'ordonnée la fréquence cumulée correspondante, en partant du point d'abscisse la borne inférieure de la première classe et d'ordonnée $0$. L'ordonnée du point d'abscisse une borne $x$ donne le pourcentage de valeurs strictement inférieures à $x$, et l'abscisse du point d'ordonnée $50\\,\\%$ donne une estimation de la médiane.\n• **Moyenne** : si on suppose les valeurs **uniformément réparties** dans chaque classe, on remplace chaque classe par son **centre** et on calcule une moyenne pondérée par les effectifs. Si on connaît la moyenne de chaque classe, on utilise ces moyennes à la place des centres.\n• **Classe médiane** : classe dans laquelle l'effectif cumulé atteint ou dépasse $\\frac{N}{2}$. En supposant la répartition uniforme dans cette classe, on estime la médiane par proportionnalité."
      },
      {
        "title": "6. Influence de l'ajout ou de la suppression d'une valeur",
        "content": "• Si une série de $N$ valeurs a pour moyenne $\\overline{x}$ et qu'on ajoute une valeur $v$, la nouvelle moyenne est $\\frac{N\\overline{x} + v}{N + 1}$.\n*Exemple* : $9$ notes de moyenne $12$ (somme $108$) ; on ajoute un $2$ : la moyenne devient $\\frac{108 + 2}{10} = 11$.\n• La **médiane** est beaucoup moins sensible : pour la série $8, 10, 12, 14, 40$, la moyenne vaut $\\frac{84}{5} = 16{,}8$ et la médiane $12$. Si l'on supprime la valeur extrême $40$, la moyenne chute à $\\frac{44}{4} = 11$ alors que la médiane ne passe que de $12$ à $\\frac{10 + 12}{2} = 11$.\n• Une valeur extrême (erreur de saisie, cas exceptionnel) peut donc modifier fortement la moyenne : c'est pourquoi on choisit le couple (médiane ; écart interquartile) lorsque la série contient des valeurs extrêmes."
      },
      {
        "title": "7. Croisement de deux variables qualitatives",
        "content": "Une variable statistique est **quantitative** si ses valeurs sont des nombres sur lesquels les calculs ont un sens (taille, temps de trajet). Sinon, elle est **qualitative** et ses valeurs s'appellent des **modalités**. Une variable qualitative est **nominale** si ses modalités n'ont pas d'ordre naturel (régime, sport pratiqué, couleur des yeux) et **ordinale** si elles se rangent naturellement (mention à un examen, niveau de satisfaction).\n\nOn étudie deux variables qualitatives sur une même population, par exemple le **régime** (interne ou externe) et le **genre** de $200$ élèves. On les résume dans un **tableau croisé d'effectifs** :\n\n| | Filles | Garçons | Total |\n|---|---|---|---|\n| Internes | $30$ | $40$ | $70$ |\n| Externes | $80$ | $50$ | $130$ |\n| Total | $110$ | $90$ | $200$ |\n\n• **Fréquence marginale** : on divise un total de ligne ou de colonne par l'effectif total. La fréquence des internes est $\\frac{70}{200} = 0{,}35$.\n• **Fréquence conditionnelle** : on se restreint à une sous-population. Parmi les internes, la fréquence des filles est $\\frac{30}{70} \\approx 0{,}43$ ; parmi les filles, la fréquence des internes est $\\frac{30}{110} \\approx 0{,}27$.\n• Ces deux fréquences conditionnelles **ne sont pas égales** : « la proportion de filles parmi les internes » et « la proportion d'internes parmi les filles » sont deux informations différentes ; il faut toujours repérer la population de référence (le mot « parmi »)."
      },
      {
        "title": "8. Statistiques en Python",
        "content": "• **Lire et comprendre** une fonction qui calcule un écart type (ici `L` désigne la série de valeurs, effectifs tous égaux à $1$ ; `len(L)` donne l'effectif total et `sum(L)` la somme des valeurs) :\n```python\nfrom math import sqrt\n\ndef ecart_type(L):\n    n = len(L)\n    m = sum(L) / n\n    s = 0\n    for x in L:\n        s = s + (x - m) ** 2\n    return sqrt(s / n)\n```\n• **Filtrer des individus** à partir de deux caractères, avec les connecteurs `and`, `or`, `not`. La fonction suivante teste si un individu, décrit par son genre et son régime, vérifie les deux critères :\n```python\ndef fille_interne(genre, regime):\n    return genre == \"F\" and regime == \"interne\"\n\nprint(fille_interne(\"F\", \"interne\"))   # affiche True\nprint(fille_interne(\"G\", \"interne\"))   # affiche False\n```\nOn change de filtre en changeant la condition : `genre == \"F\" or regime == \"interne\"` retient les individus vérifiant au moins un des deux critères, `genre == \"F\" and not (regime == \"interne\")` les filles qui ne sont pas internes."
      },
      {
        "title": "9. Algorithme : tableau croisé et fréquence conditionnelle",
        "content": "En pratique, les données sont rangées dans un fichier, avec une ligne par individu et les valeurs des variables séparées par un point-virgule : c'est le format CSV. Le fichier `eleves.csv` contient ici les cinq lignes `F;interne`, `G;externe`, `F;externe`, `F;interne` et `G;interne`. La fonction suivante lit le fichier ligne par ligne et compte les individus vérifiant **à la fois** deux critères ; on en déduit le tableau croisé, puis des fréquences.\n```python\ndef effectif(a, b):\n    n = 0\n    fichier = open(\"eleves.csv\", \"r\")\n    for ligne in fichier:\n        genre, regime = ligne.strip().split(\";\")\n        if genre == a and regime == b:\n            n = n + 1\n    fichier.close()\n    return n\n\nprint(\"F interne\", effectif(\"F\", \"interne\"))\nprint(\"F externe\", effectif(\"F\", \"externe\"))\nprint(\"G interne\", effectif(\"G\", \"interne\"))\nprint(\"G externe\", effectif(\"G\", \"externe\"))\n\nnF = effectif(\"F\", \"interne\") + effectif(\"F\", \"externe\")\nprint(effectif(\"F\", \"interne\") / nF)\n```\nLe programme affiche les effectifs $2$ (filles internes), $1$ (filles externes), $1$ (garçons internes), $1$ (garçons externes), puis la **fréquence conditionnelle** des internes parmi les filles : $\\frac{2}{3} \\approx 0{,}67$. La **fréquence marginale** des filles est $\\frac{3}{5} = 0{,}6$.\n\nIci, le genre et le régime sont deux variables qualitatives nominales. À chaque ligne, l'instruction `genre, regime = ligne.strip().split(\";\")` range dans `genre` et `regime` les deux valeurs de la ligne. Les instructions de lecture du fichier sont fournies quand on en a besoin : il s'agit de comprendre leur rôle, pas de les retenir."
      },
      {
        "title": "10. Automatismes : graphiques et indicateurs",
        "content": "• **Lire un graphique** : repérer l'origine, les unités et les échelles des axes avant toute lecture (diagramme en barres, diagramme circulaire ou semi-circulaire, courbe, nuage de points).\n• Dans un diagramme circulaire, un secteur de $90^\\circ$ représente $25\\,\\%$ de l'effectif ; dans un diagramme semi-circulaire, $90^\\circ$ représente $50\\,\\%$.\n• **Indicateurs** : pour la série $3 ; 5 ; 8 ; 8 ; 11$, la moyenne vaut $\\frac{35}{5} = 7$ et la médiane $8$.\n• **Boîtes à moustaches** : la boîte la plus « étroite » correspond à la série dont les valeurs centrales sont les plus resserrées (écart interquartile plus petit)."
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
        "title": "Méthode : Calculer la moyenne et l'écart type d'une série",
        "example": "Les notes de 10 élèves : la note 8 obtenue 2 fois, la note 10 3 fois, la note 12 4 fois et la note 15 une fois. Calculer la moyenne et l'écart type.",
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
      },
      {
        "title": "Méthode : Moyenne et médiane d'une série regroupée en classes",
        "example": "Durée de trajet (en min) de $40$ élèves : $[0 ; 10[$ : $6$ élèves ; $[10 ; 20[$ : $10$ ; $[20 ; 30[$ : $14$ ; $[30 ; 40[$ : $8$ ; $[40 ; 50[$ : $2$. Estimer la moyenne et la médiane.",
        "steps": [
          "**Étape 1 (Centres)** : $5$, $15$, $25$, $35$, $45$. On suppose la répartition uniforme dans chaque classe.",
          "**Étape 2 (Moyenne)** : $\\overline{x} \\approx \\frac{5 \\times 6 + 15 \\times 10 + 25 \\times 14 + 35 \\times 8 + 45 \\times 2}{40} = \\frac{30 + 150 + 350 + 280 + 90}{40} = \\frac{900}{40} = 22{,}5$ min.",
          "**Étape 3 (Classe médiane)** : effectifs cumulés $6$ ; $16$ ; $30$ ; $38$ ; $40$. On a $\\frac{N}{2} = 20$, atteint dans la classe $[20 ; 30[$ (on passe de $16$ à $30$) : c'est la classe médiane.",
          "**Étape 4 (Estimation)** : il manque $20 - 16 = 4$ élèves sur les $14$ de la classe, répartis uniformément sur $10$ min : $Me \\approx 20 + 10 \\times \\frac{4}{14} \\approx 22{,}9$ min.",
          "**Conclusion** : moyenne estimée $22{,}5$ min, médiane estimée $22{,}9$ min, dans la classe médiane $[20 ; 30[$."
        ]
      },
      {
        "title": "Méthode : Compléter un tableau croisé à partir de pourcentages",
        "example": "Une enquête porte sur $500$ clients : $300$ anciens et $200$ nouveaux. $80\\,\\%$ des anciens et $45\\,\\%$ des nouveaux se disent satisfaits. Quelle est la fréquence des clients satisfaits ? Parmi les satisfaits, quelle est la proportion de nouveaux clients ?",
        "steps": [
          "**Étape 1** : anciens satisfaits : $0{,}8 \\times 300 = 240$, donc $60$ non satisfaits ; nouveaux satisfaits : $0{,}45 \\times 200 = 90$, donc $110$ non satisfaits.",
          "**Étape 2 (Totaux)** : satisfaits $240 + 90 = 330$ ; non satisfaits $60 + 110 = 170$ ; total $500$.",
          "**Étape 3 (Fréquence marginale)** : $\\frac{330}{500} = 0{,}66$, soit $66\\,\\%$ de clients satisfaits.",
          "**Conclusion (Fréquence conditionnelle)** : parmi les $330$ satisfaits, la proportion de nouveaux clients est $\\frac{90}{330} = \\frac{3}{11} \\approx 27\\,\\%$ (à ne pas confondre avec les $45\\,\\%$ de satisfaits parmi les nouveaux)."
        ]
      },
      {
        "title": "Méthode : Lire un polygone des fréquences cumulées",
        "example": "Le polygone des fréquences cumulées croissantes des durées de trajet (en min) de $40$ élèves joint les points $(0 ; 0)$, $(10 ; 15)$, $(20 ; 40)$, $(30 ; 75)$, $(40 ; 95)$ et $(50 ; 100)$, les ordonnées étant en pourcentage. Quel pourcentage des élèves a un trajet strictement inférieur à $30$ min ? Combien d'élèves ont un trajet d'au moins $40$ min ? Estimer la médiane.",
        "steps": [
          "**Étape 1 (Lecture)** : le point d'abscisse $30$ a pour ordonnée $75$ : $75\\,\\%$ des élèves ont un trajet strictement inférieur à $30$ min.",
          "**Étape 2 (Complément)** : le point d'abscisse $40$ a pour ordonnée $95$, donc $100 - 95 = 5\\,\\%$ des élèves ont un trajet d'au moins $40$ min, soit $0{,}05 \\times 40 = 2$ élèves.",
          "**Étape 3 (Segment utile)** : l'ordonnée $50$ est atteinte entre les points $(20 ; 40)$ et $(30 ; 75)$.",
          "**Conclusion (Proportionnalité)** : $Me \\approx 20 + 10 \\times \\frac{50 - 40}{75 - 40} = 20 + 10 \\times \\frac{10}{35} \\approx 22{,}9$ min."
        ]
      },
      {
        "title": "Méthode : Comparer deux séries",
        "example": "À un même contrôle, la classe A a pour moyenne $11{,}2$ et pour écart type $1{,}8$ ; la classe B a pour moyenne $12{,}1$ et pour écart type $4{,}3$. Comparer les résultats des deux classes.",
        "steps": [
          "**Étape 1 (Même couple d'indicateurs)** : on dispose pour chaque classe du couple (moyenne ; écart type), la comparaison est donc possible.",
          "**Étape 2 (Position)** : $12{,}1 > 11{,}2$ : en moyenne, la classe B a de meilleurs résultats.",
          "**Étape 3 (Dispersion)** : $1{,}8 < 4{,}3$ : les notes de la classe A sont moins dispersées autour de la moyenne.",
          "**Conclusion** : la classe B réussit mieux en moyenne, mais la classe A est plus homogène. Il faut donner les deux informations."
        ]
      }
    ],
    "traps": [
      "⚠️ Toujours ordonner la série statistique par ordre croissant avant de chercher médiane et quartiles !",
      "⚠️ Contrairement à la médiane, la moyenne est très sensible aux valeurs extrêmes.",
      "⚠️ La moyenne de deux moyennes n'est égale à la moyenne globale que si les deux groupes ont le **même effectif**.",
      "⚠️ Dans le calcul de la variance, chaque carré d'écart est multiplié par son **effectif** ; on n'oublie pas ensuite de prendre la **racine carrée** pour obtenir l'écart type.",
      "⚠️ Avec la définition du cours, $Q_1$ et $Q_3$ sont toujours des **valeurs de la série** : on ne fait jamais de demi-somme pour les quartiles (contrairement à la médiane quand $N$ est pair).",
      "⚠️ « La proportion de $A$ parmi $B$ » n'est pas « la proportion de $B$ parmi $A$ » : on divise toujours par l'effectif de la population de **référence** (celle qui suit le mot « parmi »).",
      "⚠️ Pour une série regroupée en classes, la moyenne calculée avec les centres n'est qu'une **estimation** (on suppose la répartition uniforme dans chaque classe).",
      "⚠️ Le polygone des fréquences cumulées croissantes se construit avec les **bornes supérieures** des classes, pas avec leurs centres.",
      "⚠️ Un diagramme en boîte ne permet pas de connaître la moyenne : pour comparer deux moyennes, il faut d'autres données."
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
        "q": "On ajoute 2 points à toutes les notes d'une série. Que deviennent la moyenne et l'écart type ?",
        "a": "La moyenne augmente de 2 ; l'écart type ne change pas."
      },
      {
        "q": "Quelle est la définition de l'écart type $\\sigma$ ?",
        "a": "La racine carrée de la variance, moyenne des carrés des écarts à la moyenne : $\\sigma = \\sqrt{V}$."
      },
      {
        "q": "Quelles sont les cinq valeurs représentées par un diagramme en boîte ?",
        "a": "Le minimum, $Q_1$, la médiane, $Q_3$ et le maximum."
      },
      {
        "q": "Qu'est-ce que la classe médiane d'une série regroupée en classes ?",
        "a": "La classe dans laquelle l'effectif cumulé croissant atteint ou dépasse la moitié de l'effectif total $\\frac{N}{2}$."
      },
      {
        "q": "Dans un tableau croisé, comment calcule-t-on la fréquence de $A$ parmi $B$ ?",
        "a": "$\\frac{\\text{effectif de } A \\text{ et } B}{\\text{effectif de } B}$ : c'est une fréquence conditionnelle."
      },
      {
        "q": "On supprime une valeur très élevée d'une série. Qui change le plus : la moyenne ou la médiane ?",
        "a": "La moyenne : elle est sensible aux valeurs extrêmes, la médiane beaucoup moins."
      }
    ]
  },

  "2S2": {
    "title": "2S2 : Probabilités : modèle probabiliste, probabilités conditionnelles et arbres pondérés",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Modéliser une expérience aléatoire par un univers fini $\\Omega$ et une loi de probabilité.",
      "Calculer la probabilité d'un événement dans le cas d'équiprobabilité : $P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)}$.",
      "Utiliser la formule de l'événement contraire : $P(\\overline{A}) = 1 - P(A)$.",
      "Utiliser, en rappel, la relation $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
      "Définir une loi de probabilité sur un univers fini.",
      "Dénombrer des issues à l'aide d'un tableau à double entrée ou d'un arbre.",
      "Calculer une probabilité conditionnelle $P_A(B)$ à partir d'un tableau croisé d'effectifs ou d'un arbre pondéré.",
      "Construire et exploiter un arbre pondéré : probabilité d'un chemin comme produit des probabilités des branches.",
      "Distinguer $P_A(B)$ et $P_B(A)$, notamment pour les tests de dépistage (faux positifs, faux négatifs)."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire des probabilités et propriétés (rappels)",
        "content": "• **Univers $\\Omega$** : ensemble des issues possibles. La somme des probabilités de toutes les issues vaut 1.\n• **Événements incompatibles (ou disjoints)** : $A \\cap B = \\emptyset \\implies P(A \\cup B) = P(A) + P(B)$.\n• **Cas général de la réunion** :\n$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n• **Événement contraire $\\overline{A}$** : $P(\\overline{A}) = 1 - P(A)$."
      },
      {
        "title": "2. Loi de probabilité et équiprobabilité",
        "content": "• Définir une **loi de probabilité** sur $\\Omega = \\{e_1, \\dots, e_n\\}$, c'est associer à chaque issue $e_i$ un nombre $p_i \\ge 0$ tel que $p_1 + p_2 + \\dots + p_n = 1$.\n• Le choix d'une loi de probabilité est une **hypothèse du modèle** : il ne se démontre pas. On distingue le **modèle** (un dé « équilibré ») de la **situation réelle** (un dé physique), dont on peut tester l'adéquation au modèle en observant les fréquences (voir 2S3).\n• La probabilité d'un événement $A$ est la **somme des probabilités des issues** qui le réalisent.\n• Lorsque toutes les issues ont la même probabilité $\\frac{1}{n}$, on parle d'**équiprobabilité** et $P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)}$.\n*Exemple* : pour un dé truqué où $P(6) = 0{,}5$ et les cinq autres faces ont la même probabilité, chacune vaut $\\frac{1 - 0{,}5}{5} = 0{,}1$."
      },
      {
        "title": "3. Vocabulaire des événements",
        "content": "• $A \\cap B$ (« $A$ **et** $B$ ») : issues réalisant à la fois $A$ et $B$.\n• $A \\cup B$ (« $A$ **ou** $B$ ») : issues réalisant au moins l'un des deux ; le « ou » est **inclusif**.\n• $\\overline{A}$ (« **non** $A$ ») : issues ne réalisant pas $A$.\n• Deux événements contraires sont incompatibles, mais la réciproque est fausse : avec un dé, $A = \\{1\\}$ et $B = \\{2\\}$ sont incompatibles sans être contraires."
      },
      {
        "title": "4. Dénombrer avec un tableau ou un arbre",
        "content": "• **Tableau à double entrée** : pour le lancer de deux dés équilibrés, on obtient $6 \\times 6 = 36$ couples équiprobables.\n*Exemple* : la somme vaut $7$ pour $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$, donc $P(\\text{somme} = 7) = \\frac{6}{36} = \\frac{1}{6}$.\n• **Arbre** : pour des expériences successives, chaque chemin complet représente une issue. **Lorsque ces issues sont équiprobables** (pièce ou dé équilibrés, tirage au hasard de boules **numérotées**, une branche par boule…), on compte les chemins qui réalisent l'événement et on divise par le nombre total de chemins. Sinon, on utilise les probabilités portées par les branches (voir le paragraphe 6).\n⚠️ Dans un arbre dont les branches portent des **couleurs**, les chemins ne sont en général pas équiprobables : avec une urne de $3$ boules rouges et $2$ blanches et deux tirages sans remise, le chemin « rouge puis rouge » a pour probabilité $\\frac{3}{5} \\times \\frac{2}{4} = \\frac{3}{10}$ (produit des probabilités des branches, voir le paragraphe 6), et non $\\frac{1}{4}$."
      },
      {
        "title": "5. Probabilité conditionnelle",
        "content": "Soit $A$ un événement de probabilité **non nulle**. La **probabilité de $B$ sachant $A$** est\n$$P_A(B) = \\frac{P(A \\cap B)}{P(A)}$$\nC'est la probabilité que $B$ soit réalisé lorsqu'on **sait** que $A$ est réalisé. On en déduit $P(A \\cap B) = P(A) \\times P_A(B)$.\n• **Lien avec les fréquences conditionnelles** : si on choisit un individu au hasard (équiprobabilité) dans une population,\n$$P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)} \\qquad P_B(A) = \\frac{\\text{Card}(A \\cap B)}{\\text{Card}(B)}$$\n*Exemple* (tableau croisé des $200$ élèves du chapitre de statistiques : $70$ internes dont $30$ filles, $110$ filles) : on choisit un élève au hasard. Avec $I$ = « interne » et $F$ = « fille » : $P_I(F) = \\frac{30}{70} = \\frac{3}{7}$ alors que $P_F(I) = \\frac{30}{110} = \\frac{3}{11}$.\n• En général $P_A(B) \\neq P_B(A)$ : c'est le problème de l'**inversion des conditionnements**.\n• **Test de dépistage** : on note $M$ l'événement « la personne est malade » et $T$ l'événement « le test est positif ». La **sensibilité** est $P_M(T)$ (proportion de malades dont le test est positif) et la **spécificité** est $P_{\\overline{M}}(\\overline{T})$ (proportion de non-malades dont le test est négatif). Un **faux positif** est une personne non malade dont le test est positif ; un **faux négatif** est une personne malade dont le test est négatif."
      },
      {
        "title": "6. Arbres pondérés",
        "content": "Un **arbre pondéré** représente une expérience en plusieurs étapes.\n• Sur les branches du premier niveau, on écrit $P(A)$ et $P(\\overline{A})$ ; sur les branches suivantes, des probabilités **conditionnelles** ($P_A(B)$, $P_A(\\overline{B})$, …).\n• **Règle des nœuds** : la somme des probabilités des branches issues d'un même nœud vaut $1$ : $P_A(B) + P_A(\\overline{B}) = 1$.\n• **Règle du chemin** : la probabilité d'un chemin est le **produit** des probabilités de ses branches :\n$$P(A \\cap B) = P(A) \\times P_A(B)$$\nC'est exactement la définition de la probabilité conditionnelle, écrite sous forme de produit.\n• **Pour aller plus loin** : la probabilité d'un événement réalisé par plusieurs chemins est la somme des probabilités de ces chemins (ce calcul n'est pas un attendu du programme de seconde)."
      },
      {
        "title": "7. Automatismes : probabilités",
        "content": "• Une probabilité est toujours un nombre compris entre $0$ et $1$.\n• $P(\\overline{A}) = 1 - P(A)$ : si $P(A) = 0{,}35$, alors $P(\\overline{A}) = 0{,}65$.\n• Avec un dé équilibré, l'événement $N$ « obtenir un nombre premier » est $\\{2 ; 3 ; 5\\}$, donc $P(N) = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{2}$ (somme des probabilités des issues).\n• En situation d'équiprobabilité, $P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)}$ : tirer un as dans un jeu de $32$ cartes a pour probabilité $\\frac{4}{32} = \\frac{1}{8}$."
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
      },
      {
        "title": "Méthode : Utiliser un arbre pondéré",
        "example": "Une usine fabrique $70\\,\\%$ de ses pièces sur la machine $A$ et $30\\,\\%$ sur la machine $B$. $2\\,\\%$ des pièces de $A$ et $5\\,\\%$ des pièces de $B$ sont défectueuses. On choisit une pièce au hasard. On note $D$ « la pièce est défectueuse ». Calculer $P(A \\cap D)$ et $P(B \\cap D)$.",
        "steps": [
          "**Étape 1 (Arbre)** : premier niveau : $P(A) = 0{,}7$ et $P(B) = 0{,}3$. Second niveau : $P_A(D) = 0{,}02$, $P_A(\\overline{D}) = 0{,}98$, $P_B(D) = 0{,}05$, $P_B(\\overline{D}) = 0{,}95$ (règle des nœuds).",
          "**Étape 2 (Chemin $A$ puis $D$)** : $P(A \\cap D) = P(A) \\times P_A(D) = 0{,}7 \\times 0{,}02 = 0{,}014$.",
          "**Étape 3 (Chemin $B$ puis $D$)** : $P(B \\cap D) = 0{,}3 \\times 0{,}05 = 0{,}015$.",
          "**Conclusion** : $P(A \\cap D) = 0{,}014$ et $P(B \\cap D) = 0{,}015$. *Pour aller plus loin* : $D$ est réalisé par ces deux chemins, donc $P(D) = 0{,}014 + 0{,}015 = 0{,}029$."
        ]
      },
      {
        "title": "Méthode : Test de dépistage et faux positifs",
        "example": "Une maladie touche $2\\,\\%$ d'une population. Un test détecte $95\\,\\%$ des malades (sensibilité) et donne un résultat négatif pour $90\\,\\%$ des non-malades (spécificité). On note $M$ l'événement « la personne est malade » et $T$ l'événement « le test est positif ». Une personne a un test positif : quelle est la probabilité qu'elle soit malade ?",
        "steps": [
          "**Étape 1 (Population fictive de $10\\,000$ personnes)** : $200$ malades et $9\\,800$ non-malades.",
          "**Étape 2 (Tableau croisé)** : parmi les malades, $0{,}95 \\times 200 = 190$ tests positifs et $10$ négatifs (**faux négatifs**). Parmi les non-malades, $0{,}9 \\times 9\\,800 = 8\\,820$ négatifs et $980$ positifs (**faux positifs**). Total des positifs : $190 + 980 = 1\\,170$.",
          "**Étape 3** : on choisit au hasard une personne parmi les positifs : $P_T(M) = \\frac{190}{1\\,170} \\approx 0{,}16$.",
          "**Conclusion** : seulement $16\\,\\%$ environ des personnes positives sont malades, alors que $P_M(T) = 0{,}95$ : il ne faut pas confondre $P_T(M)$ et $P_M(T)$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas additionner simplement $P(A) + P(B)$ si les événements ne sont pas incompatibles (on compterait l'intersection deux fois !).",
      "⚠️ Une probabilité est **toujours** comprise entre 0 et 1 : si vous trouvez 1,2 ou un nombre négatif, il y a une erreur de calcul.",
      "⚠️ La formule $P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)}$ n'est valable qu'en cas d'**équiprobabilité** : avec deux dés, les sommes de $2$ à $12$ ne sont pas équiprobables ($P(\\text{somme} = 2) = \\frac{1}{36}$ mais $P(\\text{somme} = 7) = \\frac{6}{36}$).",
      "⚠️ En mathématiques, « $A$ ou $B$ » est **inclusif** : il contient aussi les issues qui réalisent $A$ et $B$ en même temps.",
      "⚠️ Pour « au moins un », il est souvent plus simple de passer par l'événement contraire « aucun ».",
      "⚠️ $P_A(B)$ n'est pas $P(A \\cap B)$ : dans un arbre, la branche de $A$ vers $B$ porte $P_A(B)$, et c'est le **chemin** complet qui donne $P(A \\cap B) = P(A) \\times P_A(B)$.",
      "⚠️ $P_A(B) \\neq P_B(A)$ en général : un test peut détecter $95\\,\\%$ des malades sans que $95\\,\\%$ des personnes positives soient malades."
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
      },
      {
        "q": "Définition de $P_A(B)$ (avec $P(A) \\neq 0$) ?",
        "a": "$P_A(B) = \\frac{P(A \\cap B)}{P(A)}$ : probabilité de $B$ sachant que $A$ est réalisé."
      },
      {
        "q": "Dans un arbre, $P(A) = 0{,}4$ et $P_A(B) = 0{,}3$. Que vaut $P(A \\cap B)$ ?",
        "a": "$P(A \\cap B) = 0{,}4 \\times 0{,}3 = 0{,}12$ (règle du chemin)."
      },
      {
        "q": "Que vaut $P_A(\\overline{B})$ si $P_A(B) = 0{,}35$ ?",
        "a": "$1 - 0{,}35 = 0{,}65$ (règle des nœuds)."
      }
    ]
  },

  "2S3": {
    "title": "2S3 : Fluctuation d'échantillonnage, loi des grands nombres et simulation en Python",
    "domain": "Algorithmique et Programmation",
    "objectives": [
      "Comprendre la variabilité d'une fréquence observée d'un échantillon à l'autre.",
      "Pour aller plus loin : connaître le critère $|f - p| \\le \\frac{1}{\\sqrt{n}}$, vérifié par environ $95\\,\\%$ des échantillons de taille $n$.",
      "Lire et écrire un script Python simulant une expérience aléatoire (module `random`).",
      "Pour aller plus loin : prendre une décision sur une proportion $p$ à l'aide d'un échantillon.",
      "Pour aller plus loin : simuler $N$ échantillons de taille $n$ en Python et observer la proportion de ceux pour lesquels $|f - p| \\le \\frac{1}{\\sqrt{n}}$.",
      "Pour aller plus loin : déterminer une taille d'échantillon permettant d'obtenir une précision donnée.",
      "Écrire une fonction Python renvoyant le résultat d'une expérience aléatoire et observer la loi des grands nombres par simulation."
    ],
    "keyPoints": [
      {
        "title": "1. Échantillon, fréquence et loi des grands nombres",
        "content": "• Un **échantillon de taille $n$** est obtenu en répétant $n$ fois, de façon indépendante, une même expérience aléatoire à deux issues (succès de probabilité $p$, ou échec).\n• Si $k$ est le nombre de succès, la **fréquence observée** est $f = \\frac{k}{n}$.\n• D'un échantillon à l'autre, la fréquence observée varie, même si l'expérience est la même : c'est la **fluctuation d'échantillonnage**. Cette fluctuation est en général d'autant plus faible que $n$ est grand.\n• **Loi des grands nombres** (version vulgarisée) : « lorsque $n$ est grand, sauf exception, la fréquence observée est proche de la probabilité ».\n• Le choix d'une loi de probabilité (par exemple l'équiprobabilité pour un dé équilibré) est une **hypothèse de modèle** : elle ne se démontre pas. Pour un phénomène réel (lancer d'une punaise), on peut construire le modèle à partir des fréquences observées sur un grand nombre d'essais."
      },
      {
        "title": "2. Algorithmique en Python : simulation d'échantillons",
        "content": "En Python, on utilise la bibliothèque `random` :\n```python\nfrom random import random\n\ndef frequence_pile(n):\n    nb_pile = 0\n    for i in range(n):\n        if random() < 0.5:\n            nb_pile = nb_pile + 1\n    return nb_pile / n\n```"
      },
      {
        "title": "3. Fonction renvoyant un nombre aléatoire et loi des grands nombres",
        "content": "• `randint(a, b)` (module `random`) renvoie un entier aléatoire entre $a$ et $b$ **inclus** ; `random()` renvoie un nombre aléatoire de $[0 ; 1[$.\n• En appelant plusieurs fois une telle fonction, on obtient une **série statistique** dont on peut calculer la fréquence d'une issue :\n```python\nfrom random import randint\n\ndef lancer_de():\n    return randint(1, 6)\n\ndef frequence_six(n):\n    nb = 0\n    for i in range(n):\n        if lancer_de() == 6:\n            nb = nb + 1\n    return nb / n\n\nprint(10, frequence_six(10))\nprint(100, frequence_six(100))\nprint(10000, frequence_six(10000))\n```\n• Les résultats changent à chaque exécution. Avec $n = 10$ la fréquence peut être très éloignée de $\\frac{1}{6} \\approx 0{,}167$ (par exemple $0{,}3$) ; avec $n = 10\\,000$ elle est presque toujours très proche de $0{,}167$ : on **observe** la loi des grands nombres."
      },
      {
        "title": "4. Pour aller plus loin : fluctuation et critère $\\frac{1}{\\sqrt{n}}$",
        "content": "*Ce critère n'est pas un attendu du programme de seconde : le programme demande d'observer la fluctuation d'échantillonnage et la loi des grands nombres par simulation (voir les paragraphes 1 et 3).*\nSoit $p$ la proportion d'un caractère dans une population générale. Lorsqu'on prélève au hasard un échantillon de taille $n$ (avec $n$ assez grand ; à titre indicatif $n \\ge 25$ et $0{,}2 \\le p \\le 0{,}8$) :\n• La fréquence observée $f$ varie d'un échantillon à un autre : c'est la **fluctuation d'échantillonnage** (voir le paragraphe 1).\n• L'**intervalle de fluctuation à 95%** est :\n$$I = \\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$$\nPour $n$ assez grand, dans environ 95 % (au moins) des échantillons de taille $n$, la fréquence observée $f$ appartient à cet intervalle."
      },
      {
        "title": "5. Pour aller plus loin : écart entre fréquence et probabilité",
        "content": "Dire que $f \\in \\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$ équivaut à dire que la distance entre $f$ et $p$ vérifie :\n$$|f - p| \\le \\frac{1}{\\sqrt{n}}$$\n**Résultat admis** : pour $n$ assez grand, cette inégalité est vérifiée pour environ $95\\,\\%$ (ou plus) des échantillons de taille $n$.\n• Plus $n$ est grand, plus l'intervalle est étroit : la fréquence fluctue moins."
      },
      {
        "title": "6. Pour aller plus loin : simuler de nombreux échantillons en Python",
        "content": "```python\nfrom random import random\nfrom math import sqrt\n\ndef frequence(n, p):\n    k = 0\n    for i in range(n):\n        if random() < p:\n            k = k + 1\n    return k / n\n\ndef proportion_proches(N, n, p):\n    c = 0\n    for j in range(N):\n        if abs(frequence(n, p) - p) <= 1 / sqrt(n):\n            c = c + 1\n    return c / N\n```\n`random()` renvoie un nombre aléatoire de $[0 ; 1[$ : la condition `random() < p` est réalisée avec la probabilité $p$. L'appel `proportion_proches(1000, 100, 0.3)` renvoie en général une valeur proche de $0{,}95$ ou au-dessus."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Simuler une expérience aléatoire avec une fonction Python",
        "example": "On lance deux dés équilibrés et on s'intéresse à la somme. Écrire une fonction qui simule un lancer, puis une fonction qui estime la fréquence de la somme $7$ sur $n$ lancers.",
        "steps": [
          "**Étape 1 (Une expérience)** : `def somme_deux_des(): return randint(1, 6) + randint(1, 6)` (après `from random import randint`).",
          "**Étape 2 (Répétition)** :\n```python\ndef frequence_sept(n):\n    c = 0\n    for i in range(n):\n        if somme_deux_des() == 7:\n            c = c + 1\n    return c / n\n```",
          "**Étape 3 (Comparaison au modèle)** : la probabilité théorique vaut $\\frac{6}{36} = \\frac{1}{6} \\approx 0{,}167$ (tableau à double entrée). Pour $n = 10\\,000$, la fréquence obtenue est en général très proche de $0{,}167$.",
          "**Conclusion** : la simulation ne **démontre** rien, mais elle permet de confronter le modèle (dés équilibrés) aux fréquences observées, conformément à la loi des grands nombres."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Prendre une décision à l'aide d'un échantillon",
        "example": "Une pièce est lancée $100$ fois et tombe $62$ fois sur pile. Peut-on considérer, au seuil de $95\\,\\%$, que la pièce est équilibrée ?",
        "steps": [
          "**Étape 1 (Proportion théorique)** : pour une pièce équilibrée, $p = 0{,}5$ (compris entre $0{,}2$ et $0{,}8$) et $n = 100 \\ge 25$ : le critère s'applique.",
          "**Étape 2 (Intervalle)** : $\\frac{1}{\\sqrt{100}} = 0{,}1$, donc $I = [0{,}5 - 0{,}1 ; 0{,}5 + 0{,}1] = [0{,}4 ; 0{,}6]$.",
          "**Étape 3 (Fréquence observée)** : $f = \\frac{62}{100} = 0{,}62$ et $0{,}62 \\notin [0{,}4 ; 0{,}6]$.",
          "**Conclusion** : on rejette l'hypothèse « la pièce est équilibrée », avec un risque d'erreur d'environ $5\\,\\%$. (Avec $55$ piles, $f = 0{,}55 \\in I$ : on ne pourrait pas rejeter l'hypothèse.)"
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Vérifier la conformité d'un échantillon",
        "example": "Un fabricant affirme que $80\\,\\%$ de ses ampoules fonctionnent plus de 1000 heures. Sur un échantillon de $400$ ampoules, $328$ dépassent 1000 heures. Ce résultat remet-il en cause l'affirmation ?",
        "steps": [
          "**Étape 1 (Données)** : $p = 0{,}8$ (compris entre $0{,}2$ et $0{,}8$) et $n = 400 \\ge 25$ : le critère s'applique. On a $\\frac{1}{\\sqrt{400}} = \\frac{1}{20} = 0{,}05$.",
          "**Étape 2 (Intervalle)** : $I = [0{,}8 - 0{,}05 ; 0{,}8 + 0{,}05] = [0{,}75 ; 0{,}85]$.",
          "**Étape 3 (Fréquence observée)** : $f = \\frac{328}{400} = 0{,}82$, et $0{,}82 \\in [0{,}75 ; 0{,}85]$.",
          "**Conclusion** : la fréquence observée est compatible avec $p = 0{,}8$ : l'échantillon ne permet pas de remettre en cause l'affirmation du fabricant."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Déterminer une taille d'échantillon",
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
      "⚠️ (Pour aller plus loin) L'amplitude de l'intervalle est de $\\frac{2}{\\sqrt{n}}$ : pour diviser la marge d'erreur par 2, il faut **quadrupler** la taille de l'échantillon !",
      "⚠️ Ne pas confondre la proportion théorique $p$ (fixe dans la population) et la fréquence observée $f$ (qui fluctue selon l'échantillon).",
      "⚠️ (Pour aller plus loin) Une fréquence située dans l'intervalle ne **prouve** pas que la proportion vaut $p$ : on dit seulement que l'échantillon ne permet pas de rejeter cette hypothèse.",
      "⚠️ (Pour aller plus loin) Même si l'hypothèse est vraie, environ $5\\,\\%$ des échantillons tombent en dehors de l'intervalle : une décision de rejet comporte donc un **risque d'erreur**.",
      "⚠️ En Python, `randint(1, 6)` peut renvoyer $1$ comme $6$ (bornes incluses), alors que `range(1, 6)` s'arrête à $5$."
    ],
    "flashcards": [
      {
        "q": "(Pour aller plus loin) Quelle est la formule approchée de l'intervalle de fluctuation à 95% pour un échantillon de taille $n$ et de proportion $p$ ?",
        "a": "$\\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$."
      },
      {
        "q": "(Pour aller plus loin) Si on multiplie la taille d'un échantillon par 4, par combien est divisée la largeur de l'intervalle de fluctuation ?",
        "a": "Par $\\sqrt{4} = 2$ (elle est divisée par 2)."
      },
      {
        "q": "(Pour aller plus loin) Pour $n = 400$ et $p = 0{,}3$, donner l'intervalle $\\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$.",
        "a": "$\\frac{1}{\\sqrt{400}} = 0{,}05$, d'où $[0{,}25 ; 0{,}35]$."
      },
      {
        "q": "Que renvoie l'instruction Python `random()` du module `random` ?",
        "a": "Un nombre décimal aléatoire de l'intervalle $[0 ; 1[$."
      },
      {
        "q": "(Pour aller plus loin) Quelle taille minimale d'échantillon donne un intervalle d'amplitude au plus $0{,}1$ ?",
        "a": "$\\frac{2}{\\sqrt{n}} \\le 0{,}1 \\iff \\sqrt{n} \\ge 20 \\iff n \\ge 400$."
      },
      {
        "q": "Énoncer la loi des grands nombres (version vulgarisée).",
        "a": "Lorsque $n$ est grand, sauf exception, la fréquence observée est proche de la probabilité."
      },
      {
        "q": "Que renvoie `randint(1, 6)` ?",
        "a": "Un entier aléatoire entre $1$ et $6$, bornes incluses (simulation d'un dé équilibré)."
      }
    ]
  },

  "2N5": {
    "title": "2N5 : Proportions, pourcentages et évolutions",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Calculer la proportion d'une sous-population dans une population, et l'exprimer sous forme décimale, fractionnaire ou en pourcentage.",
      "Calculer un effectif connaissant une proportion, et une proportion de proportion : $p = p_1 \\times p_2$.",
      "Calculer le taux d'évolution $t = \\frac{V_A - V_D}{V_D}$ entre une valeur de départ et une valeur d'arrivée.",
      "Passer du taux d'évolution $t$ au coefficient multiplicateur $CM = 1 + t$, et inversement.",
      "Calculer le coefficient multiplicateur global et le taux global d'évolutions successives.",
      "Déterminer le taux d'évolution réciproque, qui permet de revenir à la valeur de départ.",
      "Distinguer variation absolue (en points ou en unités) et variation relative (taux d'évolution)."
    ],
    "keyPoints": [
      {
        "title": "1. Proportion d'une sous-population",
        "content": "Soit $E$ une population d'effectif $n_E$ et $A$ une sous-population de $E$ d'effectif $n_A$. La **proportion** (ou fréquence) de $A$ dans $E$ est :\n$$p = \\frac{n_A}{n_E}$$\n• On a toujours $0 \\le p \\le 1$ ; on l'exprime sous forme décimale, fractionnaire ou en pourcentage ($p = 0{,}35 = \\frac{35}{100} = 35\\,\\%$).\n• Réciproquement, connaissant $p$ et $n_E$, l'effectif de $A$ est $n_A = p \\times n_E$.\n**Exemple** : dans un lycée de $1\\,200$ élèves, $420$ sont internes : $p = \\frac{420}{1\\,200} = 0{,}35 = 35\\,\\%$."
      },
      {
        "title": "2. Proportion de proportion",
        "content": "Si $A \\subset B \\subset E$, que $A$ représente une proportion $p_1$ de $B$ et que $B$ représente une proportion $p_2$ de $E$, alors la proportion de $A$ dans $E$ est le **produit** :\n$$p = p_1 \\times p_2$$\n**Exemple** : $60\\,\\%$ des élèves d'un lycée sont en filière générale, et parmi eux $25\\,\\%$ suivent la spécialité mathématiques. La proportion d'élèves du lycée suivant cette spécialité est $0{,}25 \\times 0{,}6 = 0{,}15 = 15\\,\\%$.\n⚠️ On ne peut **pas** additionner deux pourcentages qui ne portent pas sur la même population de référence."
      },
      {
        "title": "3. Taux d'évolution et coefficient multiplicateur",
        "content": "Une grandeur passe d'une valeur de départ $V_D > 0$ à une valeur d'arrivée $V_A$.\n• Le **taux d'évolution** est $t = \\frac{V_A - V_D}{V_D}$ (souvent exprimé en pourcentage). Si $t > 0$ c'est une hausse, si $t < 0$ une baisse.\n• Le **coefficient multiplicateur** est $CM = \\frac{V_A}{V_D}$, et l'on a :\n$$CM = 1 + t \\qquad \\text{et} \\qquad V_A = V_D \\times (1 + t)$$\n• Augmenter de $t\\,\\%$ revient à multiplier par $1 + \\frac{t}{100}$ ; diminuer de $t\\,\\%$ revient à multiplier par $1 - \\frac{t}{100}$.\n**Exemples** : une hausse de $8\\,\\%$ correspond à $CM = 1{,}08$ ; une baisse de $15\\,\\%$ à $CM = 0{,}85$ ; un coefficient $CM = 2$ correspond à une hausse de $100\\,\\%$."
      },
      {
        "title": "4. Évolutions successives",
        "content": "Si une grandeur subit successivement des évolutions de coefficients multiplicateurs $CM_1$, $CM_2$, …, $CM_n$, le **coefficient multiplicateur global** est le produit :\n$$CM_{\\text{global}} = CM_1 \\times CM_2 \\times \\dots \\times CM_n$$\nLe taux global est $t_{\\text{global}} = CM_{\\text{global}} - 1$.\n**Exemple** : une hausse de $20\\,\\%$ suivie d'une baisse de $20\\,\\%$ donne $CM = 1{,}2 \\times 0{,}8 = 0{,}96$, soit une **baisse** globale de $4\\,\\%$ (et non une évolution nulle !).\n• $n$ hausses successives de $t\\,\\%$ correspondent à $CM = \\left(1 + \\frac{t}{100}\\right)^n$."
      },
      {
        "title": "5. Évolution réciproque",
        "content": "Si une grandeur passe de $V_D$ à $V_A$ avec le coefficient $CM$, l'évolution qui fait revenir de $V_A$ à $V_D$ est l'**évolution réciproque**, de coefficient :\n$$CM' = \\frac{1}{CM}$$\nSon taux est $t' = \\frac{1}{1 + t} - 1$.\n**Exemple** : après une hausse de $25\\,\\%$ ($CM = 1{,}25$), il faut une baisse de $20\\,\\%$ pour revenir au prix initial, car $\\frac{1}{1{,}25} = 0{,}8$.\n**Exemple** : après une baisse de $50\\,\\%$ ($CM = 0{,}5$), il faut une hausse de $100\\,\\%$ ($\\frac{1}{0{,}5} = 2$)."
      },
      {
        "title": "6. Retrouver une valeur initiale et programmer un calcul d'évolutions",
        "content": "• Si l'on connaît la valeur d'arrivée et le taux, on **divise** par le coefficient multiplicateur : $V_D = \\frac{V_A}{1 + t}$.\n**Exemple** : un article coûte $68$ € après une remise de $15\\,\\%$ : son prix initial était $\\frac{68}{0{,}85} = 80$ €.\n• En Python, on peut calculer le coefficient global de deux évolutions successives données en pourcentage :\n```python\ndef coefficient_global(t1, t2):\n    cm1 = 1 + t1 / 100\n    cm2 = 1 + t2 / 100\n    return cm1 * cm2\n\nprint(coefficient_global(20, -20))   # affiche 0.96 (aux arrondis près)\n```\nPour $n$ évolutions successives au même taux $t$, on répète la multiplication avec une boucle : `for k in range(n):` puis `cm = cm * (1 + t / 100)`, en partant de `cm = 1`."
      },
      {
        "title": "7. Variation absolue, variation relative et points de pourcentage",
        "content": "Une grandeur passe de $V_1$ à $V_2$ :\n• **variation absolue** (additive) : $V_2 - V_1$, dans l'unité de la grandeur ;\n• **coefficient multiplicateur** (variation multiplicative) : $\\frac{V_2}{V_1}$ ;\n• **variation relative** (taux d'évolution) : $\\frac{V_2 - V_1}{V_1}$.\n*Exemple* : un taux de chômage passe de $8\\,\\%$ à $7\\,\\%$. La variation absolue est de $-1$ **point** de pourcentage, mais le taux d'évolution est $\\frac{7 - 8}{8} = -0{,}125$, soit une **baisse de $12{,}5\\,\\%$**.\n• Un pourcentage peut exprimer une **proportion** (« $35\\,\\%$ des élèves sont internes ») ou une **évolution** (« le prix a augmenté de $35\\,\\%$ ») : il faut toujours identifier lequel."
      },
      {
        "title": "8. Démonstration : coefficient multiplicateur global",
        "content": "Une grandeur vaut $V_0$, subit une évolution de coefficient $CM_1$ puis une évolution de coefficient $CM_2$.\n• Après la première évolution : $V_1 = V_0 \\times CM_1$.\n• Après la seconde : $V_2 = V_1 \\times CM_2 = V_0 \\times CM_1 \\times CM_2$.\nDonc $\\frac{V_2}{V_0} = CM_1 \\times CM_2$ : le coefficient global est le **produit** des coefficients, et le taux global vaut $CM_1 \\times CM_2 - 1$.\n• **Évolution réciproque** : on cherche $CM'$ tel que $V_0 \\times CM \\times CM' = V_0$, soit $CM \\times CM' = 1$, d'où $CM' = \\frac{1}{CM}$ (le coefficient réciproque est l'**inverse**)."
      },
      {
        "title": "9. Automatismes : proportions et évolutions",
        "content": "• $30\\,\\%$ de $250$ : $0{,}3 \\times 250 = 75$.\n• **Le tout connaissant une partie** : si $18$ élèves représentent $40\\,\\%$ d'une classe, la classe compte $\\frac{18}{0{,}4} = 45$ élèves.\n• **Formulation multiplicative** : « augmenter de $5\\,\\%$ » revient à « multiplier par $1{,}05$ » ; « diminuer de $12\\,\\%$ » revient à « multiplier par $0{,}88$ » ; « multiplier par $1{,}2$ » revient à « augmenter de $20\\,\\%$ ».\n• Une proportion s'écrit indifféremment $\\frac{3}{5}$, $0{,}6$ ou $60\\,\\%$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un taux d'évolution",
        "example": "Le prix d'un abonnement passe de $40$ € à $46$ €. Calculer le taux d'évolution, puis le coefficient multiplicateur.",
        "steps": [
          "**Étape 1 (Identifier les valeurs)** : $V_D = 40$ et $V_A = 46$.",
          "**Étape 2 (Taux)** : $t = \\frac{V_A - V_D}{V_D} = \\frac{46 - 40}{40} = \\frac{6}{40} = 0{,}15$.",
          "**Étape 3 (Coefficient)** : $CM = 1 + t = 1{,}15$ ; on vérifie que $40 \\times 1{,}15 = 46$.",
          "**Conclusion** : le prix a augmenté de $15\\,\\%$."
        ]
      },
      {
        "title": "Méthode : Calculer le taux global de deux évolutions successives",
        "example": "Une action baisse de $10\\,\\%$ un jour, puis augmente de $15\\,\\%$ le lendemain. Quelle est l'évolution globale ?",
        "steps": [
          "**Étape 1 (Coefficients)** : baisse de $10\\,\\%$ : $CM_1 = 0{,}9$ ; hausse de $15\\,\\%$ : $CM_2 = 1{,}15$.",
          "**Étape 2 (Produit)** : $CM = 0{,}9 \\times 1{,}15 = 1{,}035$.",
          "**Étape 3 (Taux global)** : $t = CM - 1 = 0{,}035 = 3{,}5\\,\\%$.",
          "**Conclusion** : l'action a globalement augmenté de $3{,}5\\,\\%$ (et non de $15 - 10 = 5\\,\\%$)."
        ]
      },
      {
        "title": "Méthode : Déterminer l'évolution réciproque",
        "example": "Un loyer a augmenté de $60\\,\\%$ en dix ans. De quel pourcentage devrait-il baisser pour revenir à sa valeur initiale ?",
        "steps": [
          "**Étape 1 (Coefficient de l'évolution)** : $CM = 1 + 0{,}6 = 1{,}6$.",
          "**Étape 2 (Coefficient réciproque)** : $CM' = \\frac{1}{1{,}6} = 0{,}625$.",
          "**Étape 3 (Taux réciproque)** : $t' = 0{,}625 - 1 = -0{,}375$.",
          "**Conclusion** : il faudrait une baisse de $37{,}5\\,\\%$ (et non de $60\\,\\%$)."
        ]
      },
      {
        "title": "Méthode : Calculer une proportion de proportion",
        "example": "Dans une entreprise, $40\\,\\%$ des salariés sont cadres, et $35\\,\\%$ des cadres sont des femmes. Quelle proportion des salariés sont des femmes cadres ? Combien sont-elles sur $1\\,500$ salariés ?",
        "steps": [
          "**Étape 1 (Emboîtement)** : femmes cadres $\\subset$ cadres $\\subset$ salariés.",
          "**Étape 2 (Produit)** : $p = 0{,}35 \\times 0{,}4 = 0{,}14 = 14\\,\\%$.",
          "**Étape 3 (Effectif)** : $n = 0{,}14 \\times 1\\,500 = 210$.",
          "**Conclusion** : $14\\,\\%$ des salariés sont des femmes cadres, soit $210$ personnes."
        ]
      }
    ],
    "traps": [
      "⚠️ Des pourcentages d'évolutions successives ne s'additionnent pas : on **multiplie** les coefficients multiplicateurs ($+20\\,\\%$ puis $-20\\,\\%$ donne $-4\\,\\%$).",
      "⚠️ L'évolution réciproque d'une hausse de $t\\,\\%$ n'est pas une baisse de $t\\,\\%$ : son coefficient est $\\frac{1}{1 + t}$.",
      "⚠️ Le taux d'évolution se calcule en divisant par la valeur de **départ** $V_D$, pas par la valeur d'arrivée.",
      "⚠️ Une baisse de $30\\,\\%$ correspond au coefficient $0{,}7$ et non $0{,}3$ ; une hausse de $5\\,\\%$ correspond à $1{,}05$ et non $1{,}5$.",
      "⚠️ Pour retrouver un prix avant une remise de $15\\,\\%$, on divise par $0{,}85$ : on n'ajoute pas $15\\,\\%$ du prix remisé.",
      "⚠️ Ne pas confondre points de pourcentage et pourcentage d'évolution : passer de $8\\,\\%$ à $7\\,\\%$, c'est perdre $1$ point, mais c'est une baisse de $12{,}5\\,\\%$."
    ],
    "flashcards": [
      {
        "q": "Quel coefficient multiplicateur correspond à une baisse de $12\\,\\%$ ?",
        "a": "$CM = 1 - 0{,}12 = 0{,}88$."
      },
      {
        "q": "Formule du taux d'évolution entre $V_D$ et $V_A$ ?",
        "a": "$t = \\frac{V_A - V_D}{V_D}$, et $CM = 1 + t = \\frac{V_A}{V_D}$."
      },
      {
        "q": "Quel est le taux global d'une hausse de $10\\,\\%$ suivie d'une hausse de $10\\,\\%$ ?",
        "a": "$CM = 1{,}1^2 = 1{,}21$ : hausse globale de $21\\,\\%$."
      },
      {
        "q": "Après une baisse de $20\\,\\%$, quelle hausse permet de revenir à la valeur initiale ?",
        "a": "$\\frac{1}{0{,}8} = 1{,}25$ : une hausse de $25\\,\\%$."
      },
      {
        "q": "$30\\,\\%$ des élèves sont internes et $40\\,\\%$ des internes sont en seconde. Quelle proportion des élèves sont des internes de seconde ?",
        "a": "$0{,}4 \\times 0{,}3 = 0{,}12$, soit $12\\,\\%$."
      },
      {
        "q": "Un prix vaut $63$ € après une hausse de $5\\,\\%$. Quel était le prix initial ?",
        "a": "$\\frac{63}{1{,}05} = 60$ €."
      },
      {
        "q": "Un taux passe de $20\\,\\%$ à $25\\,\\%$. Variation absolue et taux d'évolution ?",
        "a": "$+5$ points de pourcentage ; taux d'évolution $\\frac{25 - 20}{20} = 0{,}25$, soit $+25\\,\\%$."
      }
    ]
  },

  "2S4": {
    "title": "2S4 : Algorithmique et programmation : variables, instructions conditionnelles, boucles et fonctions",
    "domain": "Algorithmique et Programmation",
    "objectives": [
      "Choisir ou déterminer le type d'une variable : entier (`int`), flottant (`float`), chaîne de caractères (`str`), booléen (`bool`).",
      "Concevoir et exécuter à la main une suite d'affectations en suivant l'évolution des variables.",
      "Écrire une instruction conditionnelle `if … elif … else` à l'aide de conditions et de connecteurs `and`, `or`, `not`.",
      "Programmer une boucle bornée (`for i in range(…)`) et une boucle non bornée (`while condition:`), et savoir laquelle choisir.",
      "Écrire une fonction Python avec un ou plusieurs paramètres et une valeur renvoyée (`return`), puis l'appeler.",
      "Utiliser les opérateurs `//` (quotient entier), `%` (reste) et `**` (puissance) dans des problèmes mathématiques.",
      "Passer d'un algorithme écrit en langage naturel (affectation notée $\\leftarrow$) à un programme Python, et inversement."
    ],
    "keyPoints": [
      {
        "title": "1. Variables, types et affectation",
        "content": "Une **variable** est un nom associé à une valeur stockée en mémoire. L'**affectation** `x = 5` range la valeur $5$ dans la variable `x` (le signe `=` n'est pas une égalité mathématique : il se lit « prend la valeur »).\n• `int` : nombre entier (`7`, `-3`) ;\n• `float` : nombre à virgule flottante, écrit avec un **point** (`2.5`, `0.1`) ;\n• `str` : chaîne de caractères entre guillemets (`\"Bonjour\"`) ;\n• `bool` : booléen, `True` ou `False` (résultat d'une comparaison comme `3 < 5`).\nOpérations utiles : `+`, `-`, `*`, `/` (division décimale, résultat flottant : `7 / 2` vaut $3{,}5$), `//` (quotient entier : `7 // 2` vaut $3$), `%` (reste : `7 % 2` vaut $1$), `**` (puissance : `2 ** 5` vaut $32$).\n```python\na = 7\nb = 2\nq = a // b    # 3\nr = a % b     # 1\nprint(q, r)   # affiche 3 1\n```\n**Conversions** : `int(\"12\")` transforme la chaîne `\"12\"` en l'entier $12$, et `str(12)` transforme l'entier $12$ en la chaîne `\"12\"`. Le signe `+` additionne deux nombres, mais il met deux chaînes **bout à bout** : `\"1\" + \"2\"` vaut `\"12\"`, alors que `1 + 2` vaut $3$."
      },
      {
        "title": "2. Exécuter un programme à la main",
        "content": "Les instructions s'exécutent **dans l'ordre**, de haut en bas. Chaque affectation utilise les valeurs **actuelles** des variables : l'ancienne valeur est **écrasée**.\nPour suivre un programme, on dresse un **tableau d'état** des variables, ligne après ligne.\n```python\na = 3\nb = 5\na = a + b     # a vaut 8\nb = a - b     # b vaut 3\na = a - b     # a vaut 5\n```\nCe programme **échange** les valeurs de `a` et `b`. On peut aussi écrire `a, b = b, a` (affectation simultanée) ou utiliser une variable auxiliaire `c`."
      },
      {
        "title": "3. Instructions conditionnelles",
        "content": "Une **instruction conditionnelle** exécute un bloc seulement si une condition est vraie. Les blocs sont délimités par l'**indentation** (4 espaces) et la ligne de test se termine par `:`.\nExemple : pour comparer deux nombres `a` et `b`, on étudie le signe de leur différence `d = a - b`.\n```python\na = 7\nb = 4.5\nd = a - b\nif d > 0:\n    print(\"a est plus grand que b\")\nelif d == 0:\n    print(\"a et b sont égaux\")\nelse:\n    print(\"a est plus petit que b\")\n```\nIci, `d` vaut $2{,}5$ : le test `d > 0` est vrai, le programme affiche donc « a est plus grand que b » et les autres blocs ne sont pas exécutés.\n• Comparaisons : `==` (égal), `!=` (différent), `<`, `<=`, `>`, `>=`.\n• Connecteurs logiques : `and` (les deux conditions), `or` (au moins l'une), `not` (négation).\n• Tester la parité : `n % 2 == 0` est vrai si et seulement si $n$ est pair."
      },
      {
        "title": "4. Boucle bornée `for`",
        "content": "On utilise une **boucle bornée** quand on connaît **à l'avance** le nombre de répétitions.\n• `range(n)` parcourt $0, 1, \\dots, n - 1$ ($n$ valeurs) ;\n• `range(a, b)` parcourt $a, a + 1, \\dots, b - 1$ (la borne $b$ est **exclue**) ;\n• `range(a, b, p)` avance avec un pas $p$.\nExemple : calcul de $1 + 2 + \\dots + 100$ avec un **accumulateur** `s`.\n```python\ns = 0\nfor i in range(1, 101):\n    s = s + i\nprint(s)      # affiche 5050\n```\nUne boucle `for` peut aussi parcourir une **chaîne de caractères** : dans `for c in \"abc\":`, la variable `c` prend successivement les valeurs `\"a\"`, `\"b\"` puis `\"c\"`."
      },
      {
        "title": "5. Boucle non bornée `while`",
        "content": "On utilise une **boucle non bornée** quand on répète une action **tant qu'une condition est vraie**, sans connaître à l'avance le nombre de tours (recherche d'un **seuil**).\n```python\ncapital = 1000\nannees = 0\nwhile capital < 2000:\n    capital = capital * 1.05\n    annees = annees + 1\nprint(annees)   # affiche 15\n```\nLa condition est testée **avant** chaque tour. Il faut s'assurer que la condition finit par devenir fausse, sinon le programme ne s'arrête jamais (boucle infinie)."
      },
      {
        "title": "6. Fonctions",
        "content": "Une **fonction** regroupe des instructions réutilisables. Elle reçoit des **paramètres** et **renvoie** un résultat avec `return` (l'exécution de la fonction s'arrête alors).\n```python\ndef image(x):\n    return 3 * x ** 2 - 5\n\ndef est_multiple(n, d):\n    return n % d == 0\n\nprint(image(2))            # affiche 7\nprint(est_multiple(21, 7)) # affiche True\n```\nNe pas confondre `return` (la fonction **renvoie** une valeur utilisable dans un calcul) et `print` (qui **affiche** seulement une valeur à l'écran)."
      },
      {
        "title": "7. Du langage naturel à Python",
        "content": "En langage naturel, l'affectation se note avec une flèche : $a \\leftarrow 3$ se lit « $a$ prend la valeur $3$ ».\n\n| Langage naturel | Python |\n|---|---|\n| $s \\leftarrow 0$ | `s = 0` |\n| Pour $i$ allant de $1$ à $10$ | `for i in range(1, 11):` |\n| $s \\leftarrow s + i^2$ | `    s = s + i ** 2` |\n| Tant que $s < 100$ | `while s < 100:` |\n| Si $n$ est pair, alors… sinon… | `if n % 2 == 0:` … `else:` … |\n| Afficher $s$ | `print(s)` |\n\n*Exemple* : l'algorithme « $s \\leftarrow 0$ ; pour $i$ allant de $1$ à $10$ : $s \\leftarrow s + i^2$ ; afficher $s$ » calcule $1^2 + 2^2 + \\dots + 10^2 = 385$.\n• Une fonction peut avoir **plusieurs arguments** : `def aire_rectangle(L, l): return L * l` ; l'appel `aire_rectangle(5, 3)` renvoie $15$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Faire tourner un programme à la main",
        "example": "Qu'affiche le programme suivant ?\n```python\nx = 4\ny = 1\nfor k in range(3):\n    y = y * x\n    x = x - 1\nprint(y)\n```",
        "steps": [
          "**Étape 1 (État initial)** : `x = 4`, `y = 1`. La boucle s'exécute 3 fois (`k` vaut 0, 1, 2).",
          "**Étape 2 (Tour 1)** : `y = 1 × 4 = 4`, puis `x = 3`.",
          "**Étape 3 (Tours 2 et 3)** : `y = 4 × 3 = 12`, `x = 2` ; puis `y = 12 × 2 = 24`, `x = 1`.",
          "**Conclusion** : le programme affiche $24$, c'est-à-dire $4 \\times 3 \\times 2$."
        ]
      },
      {
        "title": "Méthode : Choisir entre boucle for et boucle while",
        "example": "Une population de bactéries double toutes les heures, à partir de 500 bactéries. Écrire un programme donnant le nombre d'heures nécessaires pour dépasser 100 000 bactéries.",
        "steps": [
          "**Étape 1 (Analyse)** : on ne connaît pas à l'avance le nombre d'heures : on choisit une boucle **non bornée** `while`.",
          "**Étape 2 (Condition)** : on continue **tant que** la population est inférieure ou égale à 100 000 : `while p <= 100000:`.",
          "**Étape 3 (Programme)** :\n```python\np = 500\nh = 0\nwhile p <= 100000:\n    p = 2 * p\n    h = h + 1\nprint(h)\n```",
          "**Conclusion** : $500 \\times 2^7 = 64\\,000$ et $500 \\times 2^8 = 128\\,000$, donc le programme affiche $8$ heures."
        ]
      },
      {
        "title": "Méthode : Écrire une fonction avec une instruction conditionnelle",
        "example": "Écrire une fonction `tarif(age)` qui renvoie le prix d'une entrée de cinéma : 5 euros avant 12 ans, 7 euros de 12 à 25 ans inclus, 10 euros ensuite. Que renvoie `tarif(25)` ?",
        "steps": [
          "**Étape 1 (Cas)** : trois cas qui s'excluent, testés dans l'ordre : `if … elif … else`.",
          "**Étape 2 (Programme)** :\n```python\ndef tarif(age):\n    if age < 12:\n        return 5\n    elif age <= 25:\n        return 7\n    else:\n        return 10\n```",
          "**Étape 3 (Appel)** : pour `age = 25`, le test `age < 12` est faux, `age <= 25` est vrai : la fonction renvoie $7$.",
          "**Conclusion** : `tarif(25)` vaut $7$ ; attention à bien choisir `<` ou `<=` selon que la borne est incluse ou non."
        ]
      },
      {
        "title": "Méthode : Utiliser le quotient et le reste",
        "example": "Écrire un programme qui convertit une durée de 7 384 secondes en heures, minutes et secondes.",
        "steps": [
          "**Étape 1 (Heures)** : une heure vaut 3 600 s : `h = 7384 // 3600` donne $2$ et il reste `7384 % 3600`, soit $184$ s.",
          "**Étape 2 (Minutes et secondes)** : `m = 184 // 60` donne $3$ et `s = 184 % 60` donne $4$.",
          "**Étape 3 (Programme)** :\n```python\nt = 7384\nh = t // 3600\nreste = t % 3600\nm = reste // 60\ns = reste % 60\nprint(h, m, s)   # affiche 2 3 4\n```",
          "**Conclusion** : $7\\,384$ s $= 2$ h $3$ min $4$ s, car $2 \\times 3600 + 3 \\times 60 + 4 = 7\\,384$."
        ]
      }
    ],
    "traps": [
      "⚠️ `range(1, 10)` s'arrête à $9$ : la borne de droite est **exclue**. Pour aller jusqu'à $n$ inclus, on écrit `range(1, n + 1)`.",
      "⚠️ Ne pas confondre `=` (affectation) et `==` (test d'égalité) : `if x = 3:` provoque une erreur.",
      "⚠️ En Python, `/` donne toujours un flottant (`6 / 2` vaut `3.0`), alors que `//` donne le quotient entier. Les nombres décimaux s'écrivent avec un **point** : `2.5` et non `2,5`.",
      "⚠️ Dans une boucle `while`, la condition est celle pour **continuer**, pas pour s'arrêter : pour s'arrêter dès que `u` dépasse 100, on écrit `while u <= 100:`.",
      "⚠️ L'indentation fait partie du langage : une instruction mal indentée change de bloc (et donc le résultat), ou provoque une erreur."
    ],
    "flashcards": [
      {
        "q": "Quelles valeurs prend `i` dans `for i in range(2, 6):` ?",
        "a": "$2$, $3$, $4$ et $5$ (la borne $6$ est exclue)."
      },
      {
        "q": "Que valent `17 // 5` et `17 % 5` ?",
        "a": "$3$ et $2$, car $17 = 5 \\times 3 + 2$."
      },
      {
        "q": "Quand utilise-t-on une boucle `while` plutôt qu'une boucle `for` ?",
        "a": "Quand on ne connaît pas à l'avance le nombre de répétitions : on répète tant qu'une condition est vraie (recherche de seuil)."
      },
      {
        "q": "Quelle est la différence entre `return` et `print` dans une fonction ?",
        "a": "`return` renvoie une valeur réutilisable (et termine la fonction) ; `print` se contente de l'afficher à l'écran."
      },
      {
        "q": "Quel est le type de la valeur de `3 < 5` ?",
        "a": "Un booléen (`bool`) : ici `True`."
      },
      {
        "q": "Comment tester en Python qu'un entier `n` est pair ?",
        "a": "Avec la condition `n % 2 == 0` (le reste de la division par 2 est nul)."
      },
      {
        "q": "Traduire en Python « Pour $i$ allant de $1$ à $n$ ».",
        "a": "`for i in range(1, n + 1):` (la borne de droite de `range` est exclue)."
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
      "skill": "Simplifier une racine carrée",
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
      "statement": "**Pour aller plus loin** (section 6 du cours) : laquelle de ces fractions représente un nombre décimal (élément de $\\mathbb{D}$) ?",
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
      "title": "Irrationalité et parité",
      "skill": "Raisonnement par l'absurde sur les réels",
      "statement": "On suppose par l'absurde qu'il existe deux entiers $p$ et $q$ non nuls tels que $(p/q)^2 = 2$. Que peut-on déduire immédiatement sur la parité de $p$ ?",
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
      "title": "Calcul sur les puissances",
      "skill": "Règles de calcul sur les puissances",
      "statement": "Écrire $A = \\frac{6^3 \\times 2^{-2}}{3^4 \\times 9^{-1}}$ sous la forme d'un entier.",
      "options": [
        "$6$",
        "$18$",
        "$2$",
        "$\\frac{3}{2}$"
      ],
      "correctIndex": 0,
      "answer": "$6$",
      "hint1": "Écris $6 = 2 \\times 3$ et $9 = 3^2$, puis utilise $(ab)^n = a^n b^n$, $(a^n)^m = a^{nm}$, $a^n \\times a^m = a^{n+m}$ et $\\frac{a^n}{a^m} = a^{n-m}$.",
      "hint2": "Numérateur : $2^3 \\times 3^3 \\times 2^{-2}$. Dénominateur : $3^4 \\times 3^{-2}$. Regroupe les puissances de même base.",
      "solution": "Numérateur : $6^3 \\times 2^{-2} = 2^3 \\times 3^3 \\times 2^{-2} = 2 \\times 3^3$. Dénominateur : $3^4 \\times 9^{-1} = 3^4 \\times 3^{-2} = 3^2$. Donc $A = \\frac{2 \\times 3^3}{3^2} = 2 \\times 3 = 6$."
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
      "hint1": "Ici $x > 0$. Diviser les deux membres d'une inégalité par un nombre strictement positif conserve son sens.",
      "hint2": "Divise $2 \\le x$ par $2x > 0$ : tu obtiens $\\frac{1}{x} \\le \\frac{1}{2}$. Fais de même avec $x \\le 5$, en divisant par $5x > 0$.",
      "solution": "Comme $x \\ge 2$, on a $2x > 0$ et $5x > 0$. En divisant $2 \\le x$ par $2x$, on obtient $\\frac{1}{x} \\le \\frac{1}{2}$ ; en divisant $x \\le 5$ par $5x$, on obtient $\\frac{1}{5} \\le \\frac{1}{x}$. Donc $\\frac{1}{5} \\le \\frac{1}{x} \\le \\frac{1}{2}$, soit $\\frac{1}{x} \\in \\left[\\frac{1}{5} ; \\frac{1}{2}\\right]$. Ce résultat sera repris au chapitre 2A3 : la fonction inverse est strictement décroissante sur $]0 ; +\\infty[$."
    },
    {
      "id": "2N3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Inéquation et distance",
      "skill": "Inéquation du type |x - a| < r",
      "statement": "Résoudre dans $\\mathbb{R}$ l'inéquation $|x + 2| < 3$.",
      "options": [
        "$x \\in ]-5 ; 1[$",
        "$x \\in ]-1 ; 5[$",
        "$x \\in [-5 ; 1]$",
        "$x \\in ]-\\infty ; 1[$"
      ],
      "correctIndex": 0,
      "answer": "$x \\in ]-5 ; 1[$",
      "hint1": "$|x + 2| = |x - (-2)|$ est la distance entre $x$ et $-2$.",
      "hint2": "On cherche les réels à une distance strictement inférieure à $3$ de $-2$ : entre $-2 - 3$ et $-2 + 3$, bornes exclues.",
      "solution": "$|x + 2| < 3 \\iff -2 - 3 < x < -2 + 3 \\iff -5 < x < 1$. Les bornes sont exclues car l'inégalité est stricte : $S = ]-5 ; 1[$."
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
      "hint1": "Cherche les valeurs qui annulent chaque facteur : $3 - x = 0$ et $2x + 4 = 0$.",
      "hint2": "Dans un tableau de signes : $3 - x$ est positif avant $3$, $2x + 4$ est positif après $-2$. Le produit est positif là où les deux facteurs ont le même signe.",
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
      "title": "Appartenance d'un point à une courbe",
      "skill": "Exploiter une équation de courbe",
      "statement": "Soit $f(x) = x^2 - 3x$ et $\\mathcal{C}_f$ sa courbe représentative. Lequel de ces points appartient à $\\mathcal{C}_f$ ?",
      "options": [
        "$A(-2 ; 10)$",
        "$B(-2 ; -2)$",
        "$C(3 ; 9)$",
        "$D(1 ; 2)$"
      ],
      "correctIndex": 0,
      "answer": "$A(-2 ; 10)$",
      "hint1": "$M(a ; b) \\in \\mathcal{C}_f \\iff f(a) = b$ : calcule $f$ en l'abscisse de chaque point.",
      "hint2": "$f(-2) = (-2)^2 - 3 \\times (-2)$, $f(3) = 9 - 9$ et $f(1) = 1 - 3$.",
      "solution": "$f(-2) = 4 + 6 = 10$ : $A \\in \\mathcal{C}_f$ (et donc $B \\notin \\mathcal{C}_f$). $f(3) = 0 \\neq 9$ et $f(1) = -2 \\neq 2$ : $C$ et $D$ n'appartiennent pas à la courbe."
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
      "title": "Maximum d'une fonction écrite avec un carré",
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
      "statement": "Dans un repère orthonormé, on donne $A(1 ; 2)$, $B(4 ; 6)$ et $C(-3 ; 5)$. Quelle est la nature exacte du triangle $ABC$ ?",
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
      "statement": "Soit $A(3 ; -2)$ et $B(-1 ; 5)$. Quelles sont les coordonnées de $\\overrightarrow{AB}$ ?",
      "options": [
        "$\\overrightarrow{AB}\\begin{pmatrix} -4 \\\\ 7 \\end{pmatrix}$",
        "$\\overrightarrow{AB}\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$",
        "$\\overrightarrow{AB}\\begin{pmatrix} 4 \\\\ -7 \\end{pmatrix}$",
        "$\\overrightarrow{AB}\\begin{pmatrix} -4 \\\\ 3 \\end{pmatrix}$"
      ],
      "correctIndex": 0,
      "answer": "$\\overrightarrow{AB}\\begin{pmatrix} -4 \\\\ 7 \\end{pmatrix}$",
      "hint1": "$\\overrightarrow{AB}\\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$.",
      "hint2": "$x_B - x_A = -1 - 3 = -4$ et $y_B - y_A = 5 - (-2) = 7$.",
      "solution": "$\\overrightarrow{AB}\\begin{pmatrix} -1 - 3 \\\\ 5 - (-2) \\end{pmatrix} = \\overrightarrow{AB}\\begin{pmatrix} -4 \\\\ 7 \\end{pmatrix}$."
    },
    {
      "id": "2G2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Colinéarité de deux vecteurs",
      "skill": "Appliquer la condition de colinéarité $xy' - x'y = 0$",
      "statement": "Les vecteurs $\\vec{u}\\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} k \\\\ 9 \\end{pmatrix}$ sont colinéaires. Quelle est la valeur de $k$ ?",
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
      "statement": "On donne $\\vec{u}\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix}$. Quelles sont les coordonnées du vecteur $\\vec{w} = 3\\vec{u} - 2\\vec{v}$ ?",
      "options": [
        "$\\vec{w}\\begin{pmatrix} 12 \\\\ -11 \\end{pmatrix}$",
        "$\\vec{w}\\begin{pmatrix} 0 \\\\ 5 \\end{pmatrix}$",
        "$\\vec{w}\\begin{pmatrix} 12 \\\\ 5 \\end{pmatrix}$",
        "$\\vec{w}\\begin{pmatrix} -12 \\\\ 11 \\end{pmatrix}$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{w}\\begin{pmatrix} 12 \\\\ -11 \\end{pmatrix}$",
      "hint1": "$x_w = 3(2) - 2(-3)$ et $y_w = 3(-1) - 2(4)$.",
      "hint2": "$x_w = 6 + 6 = 12$ et $y_w = -3 - 8 = -11$.",
      "solution": "$\\vec{w}\\begin{pmatrix} 3 \\times 2 - 2(-3) \\\\ 3(-1) - 2(4) \\end{pmatrix} = \\vec{w}\\begin{pmatrix} 6 + 6 \\\\ -3 - 8 \\end{pmatrix} = \\vec{w}\\begin{pmatrix} 12 \\\\ -11 \\end{pmatrix}$."
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
      "hint1": "$A, B, C$ alignés $\\iff \\overrightarrow{AB}$ et $\\overrightarrow{AC}$ colinéaires.",
      "hint2": "$\\overrightarrow{AB}\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix} 10 \\\\ y - 1 \\end{pmatrix}$. On applique $xy' - x'y = 0$.",
      "solution": "$\\overrightarrow{AB}\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix} 10 \\\\ y - 1 \\end{pmatrix}$. Colinéarité : $4(y - 1) - 2(10) = 0 \\iff 4y - 4 - 20 = 0 \\iff 4y = 24 \\iff y = 6$."
    },
    {
      "id": "2G2-5",
      "tier": 2,
      "type": "mcq",
      "title": "Relation de Chasles",
      "skill": "Simplifier une somme de vecteurs avec la relation de Chasles",
      "statement": "Simplifier la somme $\\overrightarrow{AB} + \\overrightarrow{CA}$.",
      "options": [
        "$\\overrightarrow{CB}$",
        "$\\overrightarrow{BC}$",
        "$\\overrightarrow{AC}$",
        "$\\vec{0}$"
      ],
      "correctIndex": 0,
      "answer": "$\\overrightarrow{CB}$",
      "hint1": "La relation de Chasles s'applique quand l'extrémité d'un vecteur est l'origine du suivant. L'ordre d'une somme ne compte pas.",
      "hint2": "Écris la somme sous la forme $\\overrightarrow{CA} + \\overrightarrow{AB}$ : le point $A$ est l'extrémité du premier vecteur et l'origine du second.",
      "solution": "$\\overrightarrow{AB} + \\overrightarrow{CA} = \\overrightarrow{CA} + \\overrightarrow{AB} = \\overrightarrow{CB}$ d'après la relation de Chasles."
    },
    {
      "id": "2G2-6",
      "tier": 3,
      "type": "mcq",
      "title": "Vecteurs égaux dans un parallélogramme",
      "skill": "Reconnaître des vecteurs égaux dans un parallélogramme",
      "statement": "$ABCD$ est un parallélogramme de centre $O$. Quel vecteur est égal à $\\overrightarrow{OA}$ ?",
      "options": [
        "$\\overrightarrow{CO}$",
        "$\\overrightarrow{OC}$",
        "$\\overrightarrow{DO}$",
        "$\\overrightarrow{BO}$"
      ],
      "correctIndex": 0,
      "answer": "$\\overrightarrow{CO}$",
      "hint1": "Les diagonales d'un parallélogramme se coupent en leur milieu : $O$ est le milieu de $[AC]$ et de $[BD]$.",
      "hint2": "Un vecteur égal à $\\overrightarrow{OA}$ a la même direction que $(AC)$, le même sens (vers $A$) et la norme $OA$.",
      "solution": "$O$ est le milieu de $[AC]$, donc $\\overrightarrow{AO} = \\overrightarrow{OC}$. En prenant les vecteurs opposés, $\\overrightarrow{OA} = \\overrightarrow{CO}$."
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
        "$\\vec{u}\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$",
        "$\\vec{u}\\begin{pmatrix} -5 \\\\ 3 \\end{pmatrix}$",
        "$\\vec{u}\\begin{pmatrix} 3 \\\\ -5 \\end{pmatrix}$",
        "$\\vec{u}\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{u}\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$",
      "hint1": "Pour une droite $ax + by + c = 0$, un vecteur directeur est $\\vec{u}\\begin{pmatrix} -b \\\\ a \\end{pmatrix}$.",
      "hint2": "Ici $a = 3$ et $b = -5$, donc $-b = 5$ et $a = 3$.",
      "solution": "Pour $ax + by + c = 0$, un vecteur directeur est $\\vec{u}\\begin{pmatrix} -b \\\\ a \\end{pmatrix} = \\vec{u}\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}$."
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
      "hint1": "$Q_1$ est la valeur dont le rang est le plus petit entier supérieur ou égal à $\\frac{N}{4}$ ; même principe pour $Q_3$ avec $\\frac{3N}{4}$.",
      "hint2": "Ici $\\frac{20}{4} = 5$ et $\\frac{3 \\times 20}{4} = 15$ sont des entiers : on prend exactement ces rangs.",
      "solution": "$N/4 = 5$ donc $Q_1$ est la 5ème valeur ordonnée. $3N/4 = 15$ donc $Q_3$ est la 15ème valeur ordonnée."
    },
    {
      "id": "2S1-5",
      "tier": 2,
      "type": "exact",
      "title": "Moyenne d'une série regroupée en classes",
      "skill": "Calculer la moyenne d'une série regroupée en classes",
      "statement": "On a relevé le temps de trajet, en minutes, de $40$ élèves :\n\n| Temps de trajet | $[0 ; 10[$ | $[10 ; 20[$ | $[20 ; 30[$ | $[30 ; 40[$ |\n|---|---|---|---|---|\n| Effectif | $8$ | $20$ | $10$ | $2$ |\n\nEn remplaçant chaque classe par son centre, calculer la moyenne de cette série, en minutes.",
      "answer": "16,5",
      "hint1": "Le centre d'une classe est la demi-somme de ses bornes. Calcule ensuite une moyenne pondérée par les effectifs.",
      "hint2": "Les centres sont $5$, $15$, $25$ et $35$. Le numérateur commence par $8 \\times 5 + 20 \\times 15$, et tu divises à la fin par l'effectif total.",
      "solution": "Les centres des classes sont $5$, $15$, $25$ et $35$. La moyenne vaut\n$$\\overline{x} = \\frac{8 \\times 5 + 20 \\times 15 + 10 \\times 25 + 2 \\times 35}{40} = \\frac{40 + 300 + 250 + 70}{40} = \\frac{660}{40} = 16{,}5.$$\nLe temps de trajet moyen est estimé à $16{,}5$ minutes."
    },
    {
      "id": "2S1-6",
      "tier": 3,
      "type": "exact",
      "title": "Écart type d'une série",
      "skill": "Calculer l'écart type d'une série",
      "statement": "On considère la série statistique suivante :\n\n| Valeur | $2$ | $4$ | $5$ | $7$ | $9$ |\n|---|---|---|---|---|---|\n| Effectif | $1$ | $3$ | $2$ | $1$ | $1$ |\n\nCalculer son écart type $\\sigma$.",
      "answer": "2",
      "hint1": "Calcule d'abord la moyenne $\\overline{x}$, puis la variance $V$ : c'est la moyenne des carrés des écarts à la moyenne, pondérée par les effectifs. Enfin, $\\sigma = \\sqrt{V}$.",
      "hint2": "L'effectif total est $8$ et la moyenne vaut $\\frac{40}{8} = 5$. Le numérateur de la variance commence par $1 \\times (2 - 5)^2 + 3 \\times (4 - 5)^2$.",
      "solution": "L'effectif total est $N = 8$. La moyenne vaut\n$$\\overline{x} = \\frac{1 \\times 2 + 3 \\times 4 + 2 \\times 5 + 1 \\times 7 + 1 \\times 9}{8} = \\frac{40}{8} = 5.$$\nLa variance vaut\n$$V = \\frac{1 \\times (-3)^2 + 3 \\times (-1)^2 + 2 \\times 0^2 + 1 \\times 2^2 + 1 \\times 4^2}{8} = \\frac{9 + 3 + 0 + 4 + 16}{8} = \\frac{32}{8} = 4.$$\nDonc $\\sigma = \\sqrt{4} = 2$. (Attention : $4$ est la variance, pas l'écart type.)"
    },
    {
      "id": "2S1-7",
      "tier": 3,
      "type": "exact",
      "title": "Fréquence conditionnelle dans un tableau croisé",
      "skill": "Compléter un tableau croisé et calculer une fréquence conditionnelle",
      "statement": "Dans un lycée de $250$ élèves, on a recensé ceux qui pratiquent un sport en club. Certaines cases du tableau ne sont pas remplies :\n\n| | Sport en club | Pas de sport en club | Total |\n|---|---|---|---|\n| Filles | $60$ | $\\ldots$ | $150$ |\n| Garçons | $\\ldots$ | $\\ldots$ | $\\ldots$ |\n| Total | $130$ | $\\ldots$ | $250$ |\n\nCalculer la fréquence des élèves qui pratiquent un sport en club **parmi les garçons**. Donner le résultat sous forme décimale.",
      "answer": "0,7",
      "hint1": "Une fréquence conditionnelle se calcule à l'intérieur d'une sous-population : ici, le dénominateur est le nombre total de garçons, et non $250$.",
      "hint2": "Le nombre de garçons est $250 - 150 = 100$. Utilise la colonne « Sport en club » pour trouver combien d'entre eux pratiquent un sport en club.",
      "solution": "Le nombre de garçons est $250 - 150 = 100$. Le nombre de garçons pratiquant un sport en club est $130 - 60 = 70$. La fréquence cherchée est donc $\\frac{70}{100} = 0{,}7$."
    },
    {
      "id": "2S1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Linéarité de la moyenne",
      "skill": "Linéarité de la moyenne",
      "statement": "La moyenne des notes d'une classe est $11$. Toutes les notes sont multipliées par $1{,}1$, puis augmentées de $2$ points. Quelle est la nouvelle moyenne ?",
      "options": [
        "$14{,}1$",
        "$12{,}1$",
        "$14{,}3$",
        "$13$"
      ],
      "correctIndex": 0,
      "answer": "$14{,}1$",
      "hint1": "Si chaque valeur $x_i$ devient $a x_i + b$, la moyenne $\\overline{x}$ devient $a\\overline{x} + b$.",
      "hint2": "Ici $a = 1{,}1$ et $b = 2$ : calcule $1{,}1 \\times 11 + 2$.",
      "solution": "Par linéarité de la moyenne : $1{,}1 \\times 11 + 2 = 12{,}1 + 2 = 14{,}1$. (Attention à l'ordre : on multiplie d'abord, on ajoute ensuite ; $1{,}1 \\times (11 + 2) = 14{,}3$ correspondrait à l'ordre inverse.)"
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
      "title": "Réunion d'événements dans un club",
      "skill": "Utiliser la formule de la réunion et l'événement contraire",
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
      "id": "2S2-5",
      "tier": 3,
      "type": "exact",
      "title": "Probabilité conditionnelle dans un tableau croisé",
      "skill": "Calculer une probabilité conditionnelle à partir d'un tableau croisé",
      "statement": "Le tableau suivant répartit les $300$ élèves d'un lycée :\n\n| | Option théâtre | Pas d'option théâtre | Total |\n|---|---|---|---|\n| Internes | $30$ | $50$ | $80$ |\n| Externes | $90$ | $130$ | $220$ |\n| Total | $120$ | $180$ | $300$ |\n\nOn choisit un élève au hasard. On note $I$ l'événement « l'élève est interne » et $T$ l'événement « l'élève suit l'option théâtre ». Calculer $P_I(T)$. Donner le résultat sous forme décimale.",
      "answer": "0,375",
      "hint1": "$P_I(T)$ est la probabilité de $T$ sachant que $I$ est réalisé : on se restreint à la ligne des internes.",
      "hint2": "Le dénominateur est le nombre d'internes, soit $80$. Cherche dans cette ligne le nombre d'élèves qui suivent l'option théâtre.",
      "solution": "On se restreint aux $80$ internes, parmi lesquels $30$ suivent l'option théâtre :\n$$P_I(T) = \\frac{30}{80} = 0{,}375.$$\n(Attention : $\\frac{30}{120} = 0{,}25$ est $P_T(I)$, la proportion d'internes parmi les élèves de l'option.)"
    },
    {
      "id": "2S2-6",
      "tier": 4,
      "type": "exact",
      "title": "Inverser une probabilité conditionnelle",
      "skill": "Distinguer P_A(B) et P_B(A)",
      "statement": "Dans un lycée, on choisit un élève au hasard. On note $A$ l'événement « l'élève est inscrit à l'association sportive » et $B$ l'événement « l'élève fait du sport chaque semaine ». On sait que $P(A) = 0{,}4$, $P_A(B) = 0{,}75$ et $P(B) = 0{,}5$.\n\nCalculer $P_B(A)$. Donner le résultat sous forme décimale.",
      "answer": "0,6",
      "hint1": "$P_A(B)$ et $P_B(A)$ sont deux nombres différents. Passe par $P(A \\cap B)$, qui se calcule avec $P(A \\cap B) = P(A) \\times P_A(B)$.",
      "hint2": "$P(A \\cap B) = 0{,}4 \\times 0{,}75 = 0{,}3$. Il te reste à appliquer la définition de $P_B(A)$.",
      "solution": "On a $P(A \\cap B) = P(A) \\times P_A(B) = 0{,}4 \\times 0{,}75 = 0{,}3$. Donc\n$$P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}3}{0{,}5} = 0{,}6.$$"
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
      "title": "Loi des grands nombres",
      "skill": "Observer la loi des grands nombres",
      "statement": "On simule $10\\,000$ lancers d'un dé équilibré et on calcule la fréquence d'apparition du $6$. De quelle valeur cette fréquence est-elle très probablement proche ?",
      "options": [
        "$0{,}167$",
        "$0{,}6$",
        "$0{,}5$",
        "$0{,}06$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}167$",
      "hint1": "Pour un grand nombre de lancers, la fréquence observée est, sauf exception, proche de la probabilité.",
      "hint2": "Avec un dé équilibré, la probabilité d'obtenir $6$ vaut $\\frac{1}{6}$.",
      "solution": "D'après la loi des grands nombres (version vulgarisée), pour $n = 10\\,000$ la fréquence observée est très probablement proche de $P(6) = \\frac{1}{6} \\approx 0{,}167$."
    },
    {
      "id": "2S3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Simuler une pièce en Python",
      "skill": "Fonction renvoyant un nombre aléatoire",
      "statement": "Avec `from random import randint`, quelle instruction simule le lancer d'une pièce équilibrée, en codant Pile par $1$ et Face par $0$ ?",
      "options": [
        "randint(0, 1)",
        "randint(0, 2)",
        "randint(1, 2) / 2",
        "range(0, 1)"
      ],
      "correctIndex": 0,
      "answer": "randint(0, 1)",
      "hint1": "`randint(a, b)` renvoie un entier aléatoire entre $a$ et $b$, les deux bornes étant **incluses**.",
      "hint2": "On veut deux valeurs possibles, $0$ et $1$, de même probabilité.",
      "solution": "`randint(0, 1)` renvoie $0$ ou $1$ avec la même probabilité $\\frac{1}{2}$. `randint(0, 2)` a trois issues, `randint(1, 2) / 2` renvoie $0{,}5$ ou $1$, et `range(0, 1)` n'est pas un nombre aléatoire."
    },
    {
      "id": "2S3-3",
      "tier": 3,
      "type": "mcq",
      "title": "Lire une fonction de simulation",
      "skill": "Fonction renvoyant le résultat d'une expérience aléatoire",
      "statement": "On considère la fonction Python suivante (`random()` renvoie un nombre aléatoire de $[0 ; 1[$) :\n```python\nfrom random import random\n\ndef experience():\n    if random() < 0.3:\n        return 1\n    return 0\n```\nQuelle est la probabilité que `experience()` renvoie $1$ ?",
      "options": [
        "$0{,}3$",
        "$0{,}7$",
        "$0{,}5$",
        "$1$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}3$",
      "hint1": "La fonction renvoie $1$ exactement lorsque le nombre aléatoire tiré est strictement inférieur au seuil écrit dans le test.",
      "hint2": "`random()` est réparti uniformément sur $[0 ; 1[$ : la probabilité de tomber dans $[0 ; 0{,}3[$ est la longueur de cet intervalle.",
      "solution": "`random() < 0.3` est vrai avec la probabilité $0{,}3$ (longueur de $[0 ; 0{,}3[$) : la fonction renvoie $1$ avec la probabilité $0{,}3$ et $0$ avec la probabilité $0{,}7$."
    },
    {
      "id": "2S3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Construire un modèle à partir de fréquences",
      "skill": "Loi des grands nombres et choix d'un modèle",
      "statement": "On lance $5\\,000$ fois une punaise : elle tombe $3\\,100$ fois sur la pointe. Quelle probabilité est-il raisonnable de choisir, dans le modèle, pour l'événement « la punaise tombe sur la pointe » ?",
      "options": [
        "$0{,}62$",
        "$0{,}5$",
        "$0{,}31$",
        "$3\\,100$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}62$",
      "hint1": "Pour un phénomène réel, on peut construire le modèle à partir de la fréquence observée sur un grand nombre d'essais.",
      "hint2": "Calcule la fréquence $\\frac{3\\,100}{5\\,000}$.",
      "solution": "La fréquence observée vaut $\\frac{3\\,100}{5\\,000} = 0{,}62$. Le nombre d'essais étant grand, on choisit le modèle $P(\\text{pointe}) = 0{,}62$. Rien ne justifie l'équiprobabilité ($0{,}5$) ; ce choix reste une **hypothèse** de modèle."
    }
  ],
  "2N5": [
    {
      "id": "2N5-1",
      "tier": 1,
      "type": "mcq",
      "title": "Coefficient multiplicateur d'une baisse",
      "skill": "Associer un taux d'évolution à son coefficient multiplicateur",
      "statement": "Le prix d'un vélo baisse de $18\\,\\%$. Par quel nombre est multiplié son prix ?",
      "options": [
        "$0{,}82$",
        "$0{,}18$",
        "$1{,}18$",
        "$0{,}982$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}82$",
      "hint1": "Diminuer de $t\\,\\%$ revient à multiplier par $1 - \\frac{t}{100}$.",
      "hint2": "$1 - 0{,}18 = \\dots$",
      "solution": "Une baisse de $18\\,\\%$ correspond au taux $t = -0{,}18$, donc au coefficient multiplicateur $CM = 1 + t = 1 - 0{,}18 = 0{,}82$."
    },
    {
      "id": "2N5-2",
      "tier": 2,
      "type": "mcq",
      "title": "Proportion de proportion",
      "skill": "Calculer la proportion d'une sous-population emboîtée",
      "statement": "Dans un lycée, $45\\,\\%$ des élèves sont demi-pensionnaires et, parmi eux, $60\\,\\%$ sont en classe de seconde. Quelle proportion des élèves du lycée sont des demi-pensionnaires de seconde ?",
      "options": [
        "$27\\,\\%$",
        "$105\\,\\%$",
        "$15\\,\\%$",
        "$52{,}5\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$27\\,\\%$",
      "hint1": "Les demi-pensionnaires de seconde forment une partie des demi-pensionnaires, qui forment une partie des élèves.",
      "hint2": "On multiplie les proportions : $0{,}6 \\times 0{,}45$.",
      "solution": "La proportion cherchée est une proportion de proportion : $p = 0{,}6 \\times 0{,}45 = 0{,}27$, soit $27\\,\\%$ des élèves du lycée."
    },
    {
      "id": "2N5-3",
      "tier": 2,
      "type": "mcq",
      "title": "Taux d'évolution",
      "skill": "Calculer un taux d'évolution entre deux valeurs",
      "statement": "La population d'une commune passe de $2\\,500$ à $2\\,350$ habitants. Quel est le taux d'évolution ?",
      "options": [
        "$-6\\,\\%$",
        "$-150\\,\\%$",
        "$+6\\,\\%$",
        "$-6{,}38\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$-6\\,\\%$",
      "hint1": "$t = \\frac{V_A - V_D}{V_D}$ avec $V_D = 2\\,500$.",
      "hint2": "$V_A - V_D = -150$.",
      "solution": "$t = \\frac{2\\,350 - 2\\,500}{2\\,500} = \\frac{-150}{2\\,500} = -0{,}06$. La population a baissé de $6\\,\\%$. (Diviser par $2\\,350$ au lieu de $2\\,500$ donnerait à tort environ $-6{,}38\\,\\%$.)"
    },
    {
      "id": "2N5-4",
      "tier": 3,
      "type": "mcq",
      "title": "Évolutions successives",
      "skill": "Calculer le taux global de deux évolutions successives",
      "statement": "Le chiffre d'affaires d'une entreprise augmente de $30\\,\\%$ une année, puis diminue de $30\\,\\%$ l'année suivante. Quelle est l'évolution globale sur les deux ans ?",
      "options": [
        "Une baisse de $9\\,\\%$",
        "Aucune évolution",
        "Une hausse de $9\\,\\%$",
        "Une baisse de $30\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "Une baisse de $9\\,\\%$",
      "hint1": "Calcule les deux coefficients multiplicateurs et multiplie-les.",
      "hint2": "$1{,}3 \\times 0{,}7 = 0{,}91$.",
      "solution": "$CM_1 = 1{,}3$ et $CM_2 = 0{,}7$, donc $CM = 1{,}3 \\times 0{,}7 = 0{,}91$ et $t = 0{,}91 - 1 = -0{,}09$ : le chiffre d'affaires a globalement baissé de $9\\,\\%$."
    },
    {
      "id": "2N5-5",
      "tier": 4,
      "type": "mcq",
      "title": "Évolution réciproque",
      "skill": "Déterminer le taux d'évolution réciproque",
      "statement": "Pendant les soldes, un article est vendu avec une remise de $40\\,\\%$. Après les soldes, de quel pourcentage faut-il augmenter le prix soldé pour retrouver le prix initial (arrondi à $0{,}1\\,\\%$ près) ?",
      "options": [
        "$66{,}7\\,\\%$",
        "$40\\,\\%$",
        "$60\\,\\%$",
        "$140\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$66{,}7\\,\\%$",
      "hint1": "Le coefficient de la remise est $0{,}6$ ; le coefficient réciproque est son inverse.",
      "hint2": "$\\frac{1}{0{,}6} \\approx 1{,}6667$.",
      "solution": "La remise de $40\\,\\%$ correspond à $CM = 0{,}6$. L'évolution réciproque a pour coefficient $CM' = \\frac{1}{0{,}6} = \\frac{5}{3} \\approx 1{,}6667$, soit une hausse d'environ $66{,}7\\,\\%$."
    }
  ],
  "2S4": [
    {
      "id": "2S4-1",
      "tier": 1,
      "type": "mcq",
      "title": "Suivre des affectations",
      "skill": "Exécuter à la main une suite d'affectations",
      "statement": "Qu'affiche le programme Python suivant ?\n```python\na = 5\nb = 2\na = a * b\nb = a - b\nprint(a, b)\n```",
      "options": [
        "« 10 8 »",
        "« 10 3 »",
        "« 5 2 »",
        "« 10 2 »"
      ],
      "correctIndex": 0,
      "answer": "« 10 8 »",
      "hint1": "Chaque affectation utilise les valeurs **actuelles** des variables.",
      "hint2": "Après la ligne `a = a * b`, la variable `a` vaut $10$.",
      "solution": "`a = 5 × 2 = 10`, puis `b = a - b = 10 - 2 = 8` (on utilise la nouvelle valeur de `a`). Le programme affiche « 10 8 »."
    },
    {
      "id": "2S4-2",
      "tier": 2,
      "type": "mcq",
      "title": "Boucle bornée et accumulateur",
      "skill": "Exécuter une boucle for avec range",
      "statement": "Qu'affiche le programme Python suivant ?\n```python\ns = 0\nfor i in range(1, 6):\n    s = s + 2 * i\nprint(s)\n```",
      "options": [
        "$30$",
        "$42$",
        "$20$",
        "$15$"
      ],
      "correctIndex": 0,
      "answer": "$30$",
      "hint1": "`range(1, 6)` parcourt les entiers de $1$ à $5$.",
      "hint2": "On ajoute successivement $2$, $4$, $6$, $8$ et $10$.",
      "solution": "`i` prend les valeurs $1, 2, 3, 4, 5$ (la borne $6$ est exclue). Donc $s = 2 + 4 + 6 + 8 + 10 = 30$."
    },
    {
      "id": "2S4-3",
      "tier": 3,
      "type": "mcq",
      "title": "Boucle while et seuil",
      "skill": "Déterminer le nombre de tours d'une boucle non bornée",
      "statement": "Un capital de $500$ euros augmente de $10$ euros par mois. Le programme ci-dessous détermine au bout de combien de mois il dépasse strictement $600$ euros. Qu'affiche-t-il ?\n```python\nc = 500\nm = 0\nwhile c <= 600:\n    c = c + 10\n    m = m + 1\nprint(m)\n```",
      "options": [
        "$11$",
        "$10$",
        "$12$",
        "$610$"
      ],
      "correctIndex": 0,
      "answer": "$11$",
      "hint1": "La boucle continue tant que `c <= 600`.",
      "hint2": "Après $10$ mois, `c` vaut exactement $600$ : la condition est encore vraie.",
      "solution": "Après $m$ tours, `c` vaut $500 + 10m$. Pour $m = 10$, `c = 600` et `c <= 600` est encore vrai : on fait un tour de plus. Pour $m = 11$, `c = 610` : la boucle s'arrête. Le programme affiche $11$."
    },
    {
      "id": "2S4-4",
      "tier": 4,
      "type": "mcq",
      "title": "Fonction booléenne",
      "skill": "Comprendre une fonction renvoyant un booléen",
      "statement": "On considère la fonction Python suivante.\n```python\ndef mystere(n):\n    for d in range(2, n):\n        if n % d == 0:\n            return False\n    return True\n```\nPour aller plus loin (la notion de nombre premier est un rappel du collège). Pour un entier $n \\ge 2$, que teste cette fonction ?",
      "options": [
        "Si $n$ est un nombre premier",
        "Si $n$ est un nombre pair",
        "Si $n$ est un carré parfait",
        "Si $n$ est divisible par tous les entiers de $2$ à $n - 1$"
      ],
      "correctIndex": 0,
      "answer": "Si $n$ est un nombre premier",
      "hint1": "`n % d == 0` signifie que $d$ divise $n$.",
      "hint2": "La fonction renvoie `False` dès qu'elle trouve un diviseur $d$ compris entre $2$ et $n - 1$.",
      "solution": "La fonction cherche un diviseur de $n$ parmi $2, 3, \\dots, n - 1$. Si elle en trouve un, elle renvoie `False` ; sinon elle renvoie `True`. Elle renvoie donc `True` exactement lorsque $n$ n'a pas d'autre diviseur que $1$ et lui-même : elle teste si $n$ est premier (rappel du collège : un nombre premier possède exactement deux diviseurs positifs, $1$ et lui-même)."
    },
    {
      "id": "2S4-5",
      "tier": 4,
      "type": "mcq",
      "title": "Fonction et boucle",
      "skill": "Calculer la valeur renvoyée par une fonction",
      "statement": "Que renvoie l'appel `f(4)` ?\n```python\ndef f(n):\n    p = 1\n    for k in range(1, n + 1):\n        p = p * k\n    return p\n```",
      "options": [
        "$24$",
        "$6$",
        "$10$",
        "$120$"
      ],
      "correctIndex": 0,
      "answer": "$24$",
      "hint1": "`range(1, n + 1)` parcourt les entiers de $1$ à $n$ inclus.",
      "hint2": "La variable `p` est multipliée successivement par $1$, $2$, $3$ et $4$.",
      "solution": "$p = 1 \\times 1 \\times 2 \\times 3 \\times 4 = 24$. La fonction calcule le produit des entiers de $1$ à $n$ (appelé factorielle de $n$, notée $n!$)."
    },
    {
      "id": "2S4-6",
      "tier": 1,
      "type": "mcq",
      "title": "Déterminer un type",
      "skill": "Déterminer le type d'une variable",
      "statement": "Quel est le type de la variable `x` après l'instruction suivante ?\n```python\nx = 6 / 2\n```",
      "options": [
        "`float`",
        "`int`",
        "`str`",
        "`bool`"
      ],
      "correctIndex": 0,
      "answer": "`float`",
      "hint1": "Le type de `x` est celui de la valeur rangée à droite du signe `=` : regarde l'opérateur utilisé.",
      "hint2": "Rappelle-toi la différence entre `/` et `//`, même lorsque la division tombe juste.",
      "solution": "L'opérateur `/` donne toujours un flottant, même lorsque la division tombe juste : `6 / 2` vaut `3.0`. La variable `x` est donc de type `float`. Avec `6 // 2`, on aurait obtenu l'entier `3`, de type `int`."
    },
    {
      "id": "2S4-7",
      "tier": 2,
      "type": "mcq",
      "title": "Écrire une condition",
      "skill": "Écrire la condition d'une instruction if",
      "statement": "On veut calculer la somme des entiers pairs de $1$ à $10$. Le programme doit afficher $30$.\nQuelle condition faut-il écrire à la place de `___` ?\n```python\ns = 0\nfor i in range(1, 11):\n    if ___:\n        s = s + i\nprint(s)\n```",
      "options": [
        "`i % 2 == 0`",
        "`i % 2 == 1`",
        "`i // 2 == 0`",
        "`i / 2 == 0`"
      ],
      "correctIndex": 0,
      "answer": "`i % 2 == 0`",
      "hint1": "`i % 2` est le reste de la division de `i` par $2$.",
      "hint2": "Quel est ce reste lorsque `i` est pair ?",
      "solution": "Un entier est pair lorsque le reste de sa division par $2$ est nul : la condition est `i % 2 == 0`. On ajoute alors $2 + 4 + 6 + 8 + 10 = 30$. Avec `i % 2 == 1`, on ajouterait les entiers impairs (somme $25$) ; avec `i // 2 == 0`, seul $1$ serait ajouté ; avec `i / 2 == 0`, aucun entier ne conviendrait."
    },
    {
      "id": "2S4-8",
      "tier": 3,
      "type": "mcq",
      "title": "Écrire la condition d'un while",
      "skill": "Écrire la condition d'une boucle non bornée",
      "statement": "On part de $1$ et on double le nombre `p` jusqu'à ce qu'il dépasse strictement $64$. Le programme compte les doublements et doit afficher $7$.\nQuelle condition faut-il écrire à la place de `___` ?\n```python\np = 1\nn = 0\nwhile ___:\n    p = 2 * p\n    n = n + 1\nprint(n)\n```",
      "options": [
        "`p <= 64`",
        "`p < 64`",
        "`p > 64`",
        "`p == 64`"
      ],
      "correctIndex": 0,
      "answer": "`p <= 64`",
      "hint1": "La condition écrite après `while` est celle pour **continuer**, pas celle pour s'arrêter.",
      "hint2": "Lorsque `p` vaut exactement $64$, le seuil est-il strictement dépassé ?",
      "solution": "La boucle doit continuer tant que `p` n'a pas strictement dépassé $64$, c'est-à-dire tant que `p <= 64`. Les valeurs de `p` sont $2, 4, 8, 16, 32, 64, 128$ : il y a bien $7$ doublements. Avec `p < 64`, on s'arrêterait à $64$, soit $6$ doublements ; avec `p > 64` ou `p == 64`, la boucle ne démarrerait pas."
    },
    {
      "id": "2S4-9",
      "tier": 4,
      "type": "mcq",
      "title": "Corriger une fonction",
      "skill": "Corriger une erreur dans une fonction",
      "statement": "Ce programme doit calculer le triple de $5$ augmenté de $1$. Il doit afficher $16$, mais il provoque une erreur.\nQuelle correction faut-il faire ?\n```python\ndef triple(x):\n    print(3 * x)\n\ny = triple(5) + 1\nprint(y)\n```",
      "options": [
        "Remplacer `print(3 * x)` par `return 3 * x`",
        "Remplacer `print(3 * x)` par `return 3 + x`",
        "Remplacer `print(3 * x)` par `print(3 * x + 1)`",
        "Remplacer `y = triple(5) + 1` par `y = triple(5)`"
      ],
      "correctIndex": 0,
      "answer": "Remplacer `print(3 * x)` par `return 3 * x`",
      "hint1": "Suis ce que renvoie la fonction lors de l'appel, puis ce qu'en fait le programme.",
      "hint2": "Une fonction qui se contente d'afficher ne renvoie aucune valeur utilisable dans un calcul.",
      "solution": "`print` affiche la valeur mais ne la renvoie pas : `triple(5)` ne vaut rien et on ne peut pas lui ajouter $1$. Il faut renvoyer le résultat avec `return 3 * x`. Alors `triple(5)` vaut $15$, `y` vaut $16$ et le programme affiche $16$."
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
2. Pour aller plus loin (rappel du collège) : décomposer 252 et 420 en produit de facteurs premiers, puis simplifier la fraction $\\frac{252}{420}$ pour la rendre irréductible.`,
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
  ],
  "2N4": [
    {
      "id": "2N4-fiche_td",
      "title": "Fiche Seconde : Équations, inéquations et tableaux de signes",
      "filename": "Fiche_2N4_Equations_Inequations.md",
      "statement": `## Fiche d'entraînement 2N4 : Équations, inéquations et tableaux de signes

### Exercice 1 : Premier degré (3 points)
Résoudre dans $\\mathbb{R}$ :
1. $5x - 7 = 3x + 9$
2. $-4x + 6 > 18$ (donner l'ensemble des solutions sous forme d'intervalle)
3. $\\frac{2x - 3}{4} = \\frac{x + 1}{3}$

### Exercice 2 : Équations produit nul (4 points)
Résoudre dans $\\mathbb{R}$, en factorisant complètement le membre de gauche quand c'est nécessaire :
1. $(3x - 6)(x + 5) = 0$
2. $x^2 - 7x = 0$
3. $(x - 4)^2 - 25 = 0$

### Exercice 3 : Tableau de signes d'un produit (5 points)
1. Dresser le tableau de signes de $A(x) = (2x - 5)(-x + 3)$ sur $\\mathbb{R}$.
2. En déduire les solutions de l'inéquation $(2x - 5)(-x + 3) \\ge 0$.

### Exercice 4 : Quotients (4 points)
1. Résoudre l'équation $\\frac{3x + 1}{x - 1} = 2$ après avoir précisé la valeur interdite.
2. Résoudre l'inéquation $\\frac{x + 4}{x - 2} \\le 0$ à l'aide d'un tableau de signes.

### Exercice 5 : Modéliser par une inéquation (4 points)
Une piscine propose deux tarifs :
- tarif A : $2{,}50$ € la séance, sans abonnement ;
- tarif B : un abonnement annuel de $18$ €, puis $1{,}30$ € la séance.

On note $n$ le nombre de séances dans l'année.
1. Exprimer en fonction de $n$ le coût annuel avec chaque tarif.
2. À partir de combien de séances le tarif B est-il strictement plus avantageux ? Justifier par une inéquation.`,
      "solution": `### Correction Exercice 1
1. $5x - 3x = 9 + 7 \\iff 2x = 16 \\iff x = 8$. $S = \\{8\\}$.
2. $-4x > 18 - 6 \\iff -4x > 12 \\iff x < \\frac{12}{-4}$ : on divise par un nombre négatif, donc le sens de l'inégalité change. $x < -3$ et $S = ]-\\infty ; -3[$.
3. On multiplie les deux membres par $12$ : $3(2x - 3) = 4(x + 1) \\iff 6x - 9 = 4x + 4 \\iff 2x = 13 \\iff x = \\frac{13}{2}$. $S = \\left\\{\\frac{13}{2}\\right\\}$.

### Correction Exercice 2
1. Un produit est nul si et seulement si l'un de ses facteurs est nul : $3x - 6 = 0$ ou $x + 5 = 0$, soit $x = 2$ ou $x = -5$. $S = \\{-5 ; 2\\}$.
2. $x^2 - 7x = x(x - 7)$, donc $x = 0$ ou $x = 7$. $S = \\{0 ; 7\\}$.
3. On reconnaît $a^2 - b^2$ avec $a = x - 4$ et $b = 5$ : $(x - 4)^2 - 25 = (x - 4 - 5)(x - 4 + 5) = (x - 9)(x + 1)$. Donc $x = 9$ ou $x = -1$. $S = \\{-1 ; 9\\}$.

### Correction Exercice 3
1. $2x - 5 = 0 \\iff x = \\frac{5}{2}$ et $2x - 5$ est positif pour $x > \\frac{5}{2}$ (coefficient $2 > 0$).
$-x + 3 = 0 \\iff x = 3$ et $-x + 3$ est positif pour $x < 3$ (coefficient $-1 < 0$).

| $x$ | $-\\infty$ | | $\\frac{5}{2}$ | | $3$ | | $+\\infty$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $2x - 5$ | | $-$ | $0$ | $+$ | | $+$ | |
| $-x + 3$ | | $+$ | | $+$ | $0$ | $-$ | |
| $A(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |

2. $A(x) \\ge 0$ entre les deux valeurs qui l'annulent, bornes comprises : $S = \\left[\\frac{5}{2} ; 3\\right]$.

### Correction Exercice 4
1. Valeur interdite : $x = 1$. Pour $x \\neq 1$ : $\\frac{3x + 1}{x - 1} = 2 \\iff 3x + 1 = 2(x - 1) \\iff 3x + 1 = 2x - 2 \\iff x = -3$. Comme $-3 \\neq 1$, $S = \\{-3\\}$.
Vérification : $\\frac{3 \\times (-3) + 1}{-3 - 1} = \\frac{-8}{-4} = 2$.
2. Valeur interdite : $x = 2$. Le numérateur s'annule en $x = -4$.

| $x$ | $-\\infty$ | | $-4$ | | $2$ | | $+\\infty$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $x + 4$ | | $-$ | $0$ | $+$ | | $+$ | |
| $x - 2$ | | $-$ | | $-$ | $0$ | $+$ | |
| $\\frac{x + 4}{x - 2}$ | | $+$ | $0$ | $-$ | ‖ | $+$ | |

Le quotient est négatif ou nul pour $-4 \\le x < 2$ ; la valeur $2$ est exclue car interdite. $S = [-4 ; 2[$.

### Correction Exercice 5
1. Tarif A : $2{,}5n$ euros. Tarif B : $18 + 1{,}3n$ euros.
2. Le tarif B est strictement plus avantageux lorsque $18 + 1{,}3n < 2{,}5n \\iff 18 < 1{,}2n \\iff n > \\frac{18}{1{,}2} = 15$.
Pour $15$ séances, les deux tarifs coûtent $37{,}50$ € ; le tarif B devient strictement plus avantageux à partir de $16$ séances.`
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
