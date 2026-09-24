/**
 * Données pédagogiques officielles de la classe de 4ème (Cycle 4, 2ème année)
 * Conforme au Bulletin Officiel de l'Éducation Nationale et à la progression de maths-et-tiques.fr
 * Enrichi avec les fiches de cours, méthodes, pièges et évaluations réelles d'archives
 */

window.MATHS_COURSES_4E = {
  "4N1": {
    "title": "4N1 : Opérations sur les nombres relatifs (règle des signes)",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Multiplier deux nombres relatifs en appliquant rigoureusement la règle des signes.",
      "Diviser deux nombres relatifs.",
      "Déterminer le signe d'un produit de plusieurs facteurs selon la parité du nombre de facteurs négatifs.",
      "Distinguer l'opposé d'un nombre de son inverse.",
      "Effectuer des enchaînements d'opérations avec relatifs en respectant les priorités opératoires."
    ],
    "keyPoints": [
      {
        "title": "1. Règle des signes pour la multiplication et la division",
        "content": "• Le produit (ou quotient) de deux nombres de **même signe** est **toujours POSITIF (+)** :\n$$(+4) \\times (+5) = +20 \\quad \\text{et} \\quad (-4) \\times (-5) = +20$$\n$$\\frac{-18}{-3} = +6$$\n• Le produit (ou quotient) de deux nombres de **signes différents** est **toujours NÉGATIF (-)** :\n$$(+6) \\times (-3) = -18 \\quad \\text{et} \\quad \\frac{-35}{+7} = -5$$\n*Astuce mnémotechnique du cours* :\n- L'ami de mon ami est mon ami : $(+) \\times (+) \\to (+)$\n- L'ennemi de mon ennemi est mon ami : $(-) \\times (-) \\to (+)$\n- L'ami de mon ennemi est mon ennemi : $(+) \\times (-) \\to (-)$\n- L'ennemi de mon ami est mon ennemi : $(-) \\times (+) \\to (-)$"
      },
      {
        "title": "2. Produit de plusieurs facteurs relatifs",
        "content": "Dans un produit comportant plusieurs facteurs non nuls :\n• Si le nombre de facteurs négatifs est **PAIR**, alors le produit est **POSITIF**.\n• Si le nombre de facteurs négatifs est **IMPAIR**, alors le produit est **NÉGATIF**.\n*Exemples* :\n- $(-2) \\times (-3) \\times (-5) = -30$ (3 facteurs négatifs, impair $\\implies -$).\n- $(-1) \\times (-2) \\times (-3) \\times (-4) = +24$ (4 facteurs négatifs, pair $\\implies +$).\n- Tout produit contenant le facteur $0$ est immédiatement égal à $0$ !"
      },
      {
        "title": "3. Opposé d'un nombre vs Inverse d'un nombre",
        "content": "Ne jamais confondre ces deux notions fondamentales !\n• **Opposé** : Deux nombres sont opposés si leur **somme est égale à 0** ($a + (-a) = 0$).\n  - L'opposé de $5$ est $-5$ ; l'opposé de $-\\frac{2}{3}$ est $+\\frac{2}{3}$.\n• **Inverse** : Deux nombres sont inverses l'un de l'autre si leur **produit est égal à 1** ($a \\times \\frac{1}{a} = 1$, pour $a \\neq 0$).\n  - L'inverse de $a$ est $\\frac{1}{a}$ ; l'inverse de $\\frac{a}{b}$ est $\\frac{b}{a}$.\n  - L'inverse conserve le signe : l'inverse de $-\\frac{3}{7}$ est $-\\frac{7}{3}$.\n  - **0 est le seul nombre qui ne possède aucun inverse** !"
      },
      {
        "title": "4. Carré d'un relatif et priorités opératoires",
        "content": "Attention primordiale aux parenthèses lors du calcul d'un carré :\n• $(-5)^2 = (-5) \\times (-5) = +25$ : le carré porte sur $(-5)$, le résultat est strictement positif.\n• $-5^2 = -(5 \\times 5) = -25$ : le carré ne porte que sur 5, le signe $-$ reste devant !\n• Enchaînements : les parenthèses sont prioritaires, puis les puissances, puis les multiplications/divisions, et enfin les additions/soustractions."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une expression combinée avec relatifs",
        "example": "Calculer $A = -7 + 4 \\times (-5) - \\frac{-24}{-6} + (-3)^2$.",
        "steps": [
          "**Étape 1 (Priorités - Carré et parenthèses)** : $(-3)^2 = +9$.",
          "**Étape 2 (Multiplications et divisions)** : $4 \\times (-5) = -20$ et $\\frac{-24}{-6} = +4$.",
          "**Étape 3 (Réécriture)** : $A = -7 + (-20) - (+4) + 9$.",
          "**Étape 4 (Règle des gains et pertes)** : $A = -7 - 20 - 4 + 9 = -31 + 9 = -22$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre addition et multiplication : $(-4) + (-3) = -7$ (perte de 4 puis perte de 3), alors que $(-4) \\times (-3) = +12$ !",
      "⚠️ Ne pas confondre $(-6)^2 = +36$ et $-6^2 = -36$. Sans parenthèse, la puissance s'applique avant le signe moins.",
      "⚠️ Ne pas confondre opposé et inverse : l'inverse de $-4$ est $-\\frac{1}{4} = -0,25$ et NON $+4$."
    ],
    "flashcards": [
      {
        "q": "Quel est le résultat de $(-7) \\times (-8)$ ?",
        "a": "$+56$ (le produit de deux nombres de même signe est toujours positif)."
      },
      {
        "q": "Quel est le signe de $(-2) \\times (-3) \\times (-5) \\times 4 \\times (-7)$ ?",
        "a": "Positif, car il y a 4 facteurs négatifs et 4 est un nombre pair."
      },
      {
        "q": "Quel est l'inverse de $-\\frac{5}{9}$ ?",
        "a": "$-\\frac{9}{5}$ (l'inverse échange numérateur et dénominateur en conservant le signe négatif)."
      },
      {
        "q": "Combien vaut $-4^2$ ?",
        "a": "$-16$, car la puissance 2 ne porte que sur le 4 : $-(4 \\times 4) = -16$ (alors que $(-4)^2 = +16$)."
      },
      {
        "q": "Quel est le seul nombre réel qui n'a pas d'inverse ?",
        "a": "C'est **0**, car la division par 0 est impossible et aucun nombre multiplié par 0 ne peut donner 1."
      }
    ]
  },
  "4N2": {
    "title": "4N2 : Fractions et nombres rationnels : 4 opérations",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Calculer le produit de fractions de nombres relatifs en décomposant avant de calculer.",
      "Connaître la définition de l'inverse d'une fraction non nulle.",
      "Diviser deux fractions en multipliant par l'inverse du diviseur.",
      "Additionner et soustraire des fractions en trouvant le dénominateur commun.",
      "Respecter les priorités opératoires dans les expressions fractionnaires."
    ],
    "keyPoints": [
      {
        "title": "1. Multiplication de fractions",
        "content": "On multiplie les numérateurs entre eux et les dénominateurs entre eux :\n$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d} \\quad (b \\neq 0, d \\neq 0)$$\n**Règle d'or absolue** : On applique la règle des signes globale, puis on **décompose en facteurs pour simplifier au maximum AVANT d'effectuer les multiplications** !\n$$\\frac{-15}{14} \\times \\frac{21}{-25} = +\\frac{15 \\times 21}{14 \\times 25} = \\frac{(3 \\times 5) \\times (3 \\times 7)}{(2 \\times 7) \\times (5 \\times 5)} = \\frac{9}{10}$$"
      },
      {
        "title": "2. Inverse d'un nombre relatif non nul",
        "content": "Deux nombres relatifs non nuls sont dits **inverses** si leur produit est égal à 1 :\n$$x \\times \\frac{1}{x} = 1$$\n• L'inverse de l'entier $a$ ($a \\neq 0$) est $\\frac{1}{a}$.\n• L'inverse de la fraction $\\frac{a}{b}$ ($a \\neq 0, b \\neq 0$) est la fraction $\\frac{b}{a}$.\n• L'inverse conserve le signe : l'inverse de $-\\frac{4}{11}$ est $-\\frac{11}{4}$."
      },
      {
        "title": "3. Division de fractions",
        "content": "Diviser par un nombre non nul revient à **multiplier par son inverse** :\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\times d}{b \\times c} \\quad (b, c, d \\neq 0)$$\nÉcriture sous forme de grand trait de fraction :\n$$\\frac{\\frac{a}{b}}{\\frac{c}{d}} = \\frac{a}{b} \\times \\frac{d}{c}$$"
      },
      {
        "title": "4. Addition et soustraction au même dénominateur",
        "content": "Pour additionner ou soustraire deux fractions, elles doivent **impérativement avoir le même dénominateur** :\n$$\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d} \\quad \\text{et} \\quad \\frac{a}{b} - \\frac{c}{d} = \\frac{ad - bc}{bd}$$\nOn ne touche jamais au dénominateur commun une fois qu'il est posé !"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Enchaînement d'opérations avec fractions",
        "example": "Calculer $B = \\frac{2}{3} - \\frac{5}{3} \\times \\frac{6}{25}$ sous forme irréductible.",
        "steps": [
          "**Étape 1 (Priorité)** : La multiplication est prioritaire sur la soustraction.",
          "**Étape 2 (Simplification du produit)** : $\\frac{5 \\times 6}{3 \\times 25} = \\frac{5 \\times (3 \\times 2)}{3 \\times (5 \\times 5)} = \\frac{2}{5}$.",
          "**Étape 3 (Mise au même dénominateur)** : $B = \\frac{2}{3} - \\frac{2}{5} = \\frac{2 \\times 5}{3 \\times 5} - \\frac{2 \\times 3}{5 \\times 3} = \\frac{10}{15} - \\frac{6}{15}$.",
          "**Étape 4 (Calcul et conclusion)** : $B = \\frac{10 - 6}{15} = \\frac{4}{15}$ (fraction irréductible)."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais additionner les dénominateurs : $\\frac{2}{5} + \\frac{1}{5} = \\frac{3}{5}$ et NON $\\frac{3}{10}$ !",
      "⚠️ Lors d'une division, n'inverser QUE la deuxième fraction (le diviseur) : $\\frac{3}{4} \\div \\frac{5}{7} = \\frac{3}{4} \\times \\frac{7}{5}$.",
      "⚠️ Ne jamais simplifier avant d'avoir transformé la division en multiplication !"
    ],
    "flashcards": [
      {
        "q": "Quelle est la règle pour diviser par une fraction non nulle ?",
        "a": "Diviser par une fraction revient à **multiplier par son inverse** : $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$."
      },
      {
        "q": "Quel est l'inverse du nombre $-7$ ?",
        "a": "$-\\frac{1}{7}$ (l'inverse conserve le signe négatif car $(-7) \\times (-\\frac{1}{7}) = 1$)."
      },
      {
        "q": "Calculer de tête : $\\frac{3}{4} \\times \\frac{4}{9}$.",
        "a": "$\\frac{1}{3}$ (on simplifie par 4 au numérateur et au dénominateur, et $\\frac{3}{9} = \\frac{1}{3}$)."
      },
      {
        "q": "Que vaut $\\frac{5}{8} - \\frac{3}{8}$ sous forme irréductible ?",
        "a": "$\\frac{2}{8} = \\frac{1}{4}$ (on soustrait les numérateurs et on simplifie par 2)."
      },
      {
        "q": "Quelle opération effectue-t-on en premier dans $\\frac{1}{2} + \\frac{3}{4} \\times \\frac{2}{5}$ ?",
        "a": "La multiplication $\\frac{3}{4} \\times \\frac{2}{5}$ est prioritaire sur l'addition."
      }
    ]
  },
  "4N3": {
    "title": "4N3 : Puissances d'un nombre et puissances de 10",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Définir $a^n$ pour un exposant entier positif et pour un exposant négatif ($a^{-n} = 1/a^n$).",
      "Connaître les conventions fondamentales : $a^0 = 1$, $a^1 = a$, $0^n = 0$, $1^n = 1$.",
      "Appliquer les 5 formules de calcul sur les puissances d'un même nombre.",
      "Manipuler les puissances de 10 et les écritures décimales.",
      "Écrire un nombre en notation scientifique et maîtriser les préfixes métriques (nano à téra)."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et cas particuliers",
        "content": "Soit $a$ un nombre relatif et $n$ un entier positif non nul :\n$$a^n = \\underbrace{a \\times a \\times \\dots \\times a}_{n \\text{ facteurs}} \\quad (a \\text{ est la base, } n \\text{ est l'exposant})$$\n• $a^1 = a$ et par convention, pour tout $a \\neq 0$, $a^0 = 1$ (ex: $2026^0 = 1$).\n• $0^n = 0$ ($n > 0$) et $1^n = 1$.\n• Exposant négatif ($a \\neq 0$) : $a^{-n}$ est l'inverse de $a^n$ :\n$$a^{-n} = \\frac{1}{a^n} \\quad \\text{Exemple : } 5^{-2} = \\frac{1}{5^2} = \\frac{1}{25} = 0,04$$"
      },
      {
        "title": "2. Les 5 règles de calcul sur les puissances",
        "content": "Pour tous entiers relatifs $m$ et $n$, et nombres non nuls $a$ et $b$ :\n1. Produit : $a^m \\times a^n = a^{m+n}$\n2. Quotient : $\\frac{a^m}{a^n} = a^{m-n}$\n3. Puissance de puissance : $(a^m)^n = a^{m \\times n}$\n4. Produit de bases : $(a \\times b)^n = a^n \\times b^n$\n5. Quotient de bases : $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$"
      },
      {
        "title": "3. Puissances de 10",
        "content": "• Pour $n > 0$ : $10^n = 1\\underbrace{00\\dots0}_{n \\text{ zéros}}$ ($10^3 = 1\\,000$ ; $10^6 = 1\\,000\\,000$).\n• Pour $n > 0$ : $10^{-n} = \\frac{1}{10^n} = \\underbrace{0,00\\dots0}_{n \\text{ zéros au total}}1$ ($10^{-1} = 0,1$ ; $10^{-3} = 0,001$).\n• Multiplier par $10^n$ décale la virgule de $n$ rangs vers la droite.\n• Multiplier par $10^{-n}$ décale la virgule de $n$ rangs vers la gauche."
      },
      {
        "title": "4. Notation scientifique et préfixes métriques",
        "content": "La **notation scientifique** d'un nombre s'écrit sous la forme unique :\n$$a \\times 10^n \\quad \\text{avec } 1 \\le |a| < 10 \\text{ et } n \\in \\mathbb{Z}$$\n*Préfixes à connaître par cœur* :\n• Téra (T) = $10^{12}$ | Giga (G) = $10^9$ | Méga (M) = $10^6$ | Kilo (k) = $10^3$\n• milli (m) = $10^{-3}$ | micro ($\\mu$) = $10^{-6}$ | nano (n) = $10^{-9}$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire un nombre en notation scientifique",
        "example": "Écrire $A = 45\\,800\\,000$ et $B = 0,000\\,32$ en notation scientifique.",
        "steps": [
          "**Pour A ($45\\,800\\,000$)** : On place la virgule après le premier chiffre non nul : $4,58$. On compte le décalage de la virgule vers la gauche (+7 rangs) $\\implies A = 4,58 \\times 10^7$.",
          "**Pour B ($0,000\\,32$)** : On place la virgule après le 3 : $3,2$. On compte le décalage vers la droite (4 rangs) $\\implies B = 3,2 \\times 10^{-4}$."
        ]
      }
    ],
    "traps": [
      "⚠️ $2^3 \\neq 6$ ! $2^3 = 2 \\times 2 \\times 2 = 8$. Ne jamais multiplier la base par l'exposant !",
      "⚠️ $10^{-3}$ n'est PAS un nombre négatif ! $10^{-3} = \\frac{1}{10^3} = 0,001 > 0$. Un exposant négatif indique un inverse, pas un signe négatif.",
      "⚠️ Dans la notation scientifique $a \\times 10^n$, $a$ doit être strictement inférieur à 10 : $34 \\times 10^5$ n'est pas scientifique, il faut écrire $3,4 \\times 10^6$."
    ],
    "flashcards": [
      {
        "q": "Combien vaut $7^0$ ?",
        "a": "$1$ (tout nombre non nul élevé à la puissance 0 est égal à 1)."
      },
      {
        "q": "Quelle est l'écriture fractionnaire de $4^{-3}$ ?",
        "a": "$\\frac{1}{4^3} = \\frac{1}{64}$."
      },
      {
        "q": "Simplifier $5^4 \\times 5^3$.",
        "a": "$5^{4+3} = 5^7$ (on additionne les exposants lors d'un produit de même base)."
      },
      {
        "q": "Quelle est la notation scientifique de $0,0052$ ?",
        "a": "$5,2 \\times 10^{-3}$ (car on décale la virgule de 3 rangs vers la droite pour avoir $1 \\le 5,2 < 10$)."
      },
      {
        "q": "À quelle puissance de 10 correspond le préfixe « micro » ($\\mu$) ?",
        "a": "$10^{-6}$ (un millionième d'unité)."
      }
    ]
  },
  "4N4": {
    "title": "4N4 : Racines carrées et carrés parfaits",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Connaître la définition de la racine carrée d'un nombre positif : $\\sqrt{a} \\ge 0$ et $(\\sqrt{a})^2 = a$.",
      "Mémoriser par cœur les 13 carrés parfaits des entiers de 0 à 12 (0 à 144).",
      "Comprendre pourquoi la racine carrée d'un nombre strictement négatif n'existe pas.",
      "Encadrer une racine carrée entre deux entiers consécutifs sans calculatrice.",
      "Distinguer rigoureusement valeur exacte avec radical et valeur arrondie au dixième ou centième."
    ],
    "keyPoints": [
      {
        "title": "1. Définition de la racine carrée",
        "content": "Soit $a$ un nombre positif ou nul ($a \\ge 0$) :\nLa **racine carrée de $a$**, notée $\\sqrt{a}$, est le **nombre positif** dont le carré est égal à $a$ :\n$$(\\sqrt{a})^2 = a \\quad \\text{et} \\quad \\sqrt{a^2} = a \\quad (\\text{pour } a \\ge 0)$$\n*Exemple* : Le nombre positif dont le carré est 49 est 7, donc $\\sqrt{49} = 7$."
      },
      {
        "title": "2. Les carrés parfaits de 0 à 12 à connaître par cœur",
        "content": "• $0^2 = 0 \\implies \\sqrt{0} = 0$\n• $1^2 = 1 \\implies \\sqrt{1} = 1$\n• $2^2 = 4 \\implies \\sqrt{4} = 2$\n• $3^2 = 9 \\implies \\sqrt{9} = 3$\n• $4^2 = 16 \\implies \\sqrt{16} = 4$\n• $5^2 = 25 \\implies \\sqrt{25} = 5$\n• $6^2 = 36 \\implies \\sqrt{36} = 6$\n• $7^2 = 49 \\implies \\sqrt{49} = 7$\n• $8^2 = 64 \\implies \\sqrt{64} = 8$\n• $9^2 = 81 \\implies \\sqrt{81} = 9$\n• $10^2 = 100 \\implies \\sqrt{100} = 10$\n• $11^2 = 121 \\implies \\sqrt{121} = 11$\n• $12^2 = 144 \\implies \\sqrt{144} = 12$"
      },
      {
        "title": "3. Règle d'existence : pas de racine de nombre négatif",
        "content": "D'après la règle des signes, le carré de tout nombre relatif est **toujours positif ou nul** :\n$$(+5)^2 = 25 \\quad \\text{et} \\quad (-5)^2 = 25$$\nAinsi, il est **impossible** de trouver un nombre dont le carré est $-25$ :\n$$\\sqrt{-25} \\quad \\text{N'EXISTE PAS dans les nombres réels !}$$"
      },
      {
        "title": "4. Encadrement et valeur exacte vs arrondie",
        "content": "Pour la plupart des nombres, la racine carrée n'est pas un nombre décimal : c'est un nombre irrationnel.\n• **Valeur exacte** : on conserve le symbole radical, par exemple $\\sqrt{40}$ cm.\n• **Valeur arrondie** : obtenue avec la touche $\\sqrt{}$ de la calculatrice, par exemple $\\sqrt{40} \\approx 6,32$ cm.\n• **Encadrement sans calculatrice** : Comme $36 < 40 < 49$, alors $\\sqrt{36} < \\sqrt{40} < \\sqrt{49}$, soit $6 < \\sqrt{40} < 7$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Encadrer une racine carrée entre deux entiers consécutifs",
        "example": "Encadrer $\\sqrt{75}$ entre deux entiers consécutifs.",
        "steps": [
          "**Étape 1 (Trouver les carrés parfaits)** : On cherche les carrés parfaits encadrant $75$ :\n$8^2 = 64$ et $9^2 = 81$, donc $64 < 75 < 81$.",
          "**Étape 2 (Passer aux racines)** : On applique la racine carrée en conservant l'ordre :\n$\\sqrt{64} < \\sqrt{75} < \\sqrt{81}$.",
          "**Étape 3 (Conclusion)** : $8 < \\sqrt{75} < 9$."
        ]
      }
    ],
    "traps": [
      "⚠️ $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ ! Contre-exemple : $\\sqrt{9 + 16} = \\sqrt{25} = 5$, alors que $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$ !",
      "⚠️ $\\sqrt{a}$ est TOUJOURS positif ou nul par définition : $\\sqrt{25} = 5$ et non $-5$.",
      "⚠️ Écrire $\\sqrt{-9} = -3$ est une erreur grave : la racine carrée d'un nombre négatif n'a aucun sens au collège."
    ],
    "flashcards": [
      {
        "q": "Quelle est la valeur de $\\sqrt{81}$ ?",
        "a": "$9$, car $9 \\ge 0$ et $9^2 = 81$."
      },
      {
        "q": "Pourquoi $\\sqrt{-16}$ n'existe-t-il pas ?",
        "a": "Parce que le carré de n'importe quel nombre réel est toujours positif (règle des signes) : aucun nombre au carré ne donne $-16$."
      },
      {
        "q": "Entre quels entiers consécutifs se situe $\\sqrt{50}$ ?",
        "a": "Entre $7$ et $8$, car $7^2 = 49 < 50 < 64 = 8^2$."
      },
      {
        "q": "Quelle est la valeur exacte du côté d'un carré d'aire 13 cm² ?",
        "a": "$\\sqrt{13}$ cm (c'est la valeur exacte ; $3,61$ cm n'est qu'une valeur arrondie)."
      },
      {
        "q": "Que vaut $(\\sqrt{37})^2$ ?",
        "a": "$37$ (la racine carrée et le carré s'annulent pour tout nombre positif)."
      }
    ]
  },
  "4N5": {
    "title": "4N5 : Calcul littéral et résolution d'équations du premier degré",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Développer une expression littérale à l'aide de la distributivité simple : $k(a+b) = ka+kb$.",
      "Supprimer des parenthèses précédées d'un signe $+$ ou d'un signe $-$.",
      "Réduire une expression littérale en regroupant les termes par familles de même puissance.",
      "Tester si une égalité est vraie pour une valeur donnée.",
      "Résoudre une équation du 1er degré de type $ax+b = c$ ou $ax+b = cx+d$ et vérifier la solution trouvée."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire du calcul littéral et des équations",
        "content": "• **Expression littérale** : expression contenant des nombres et des lettres désignant des variables ou inconnues.\n• **Inconnue** : lettre qui cache un nombre dont on cherche la valeur.\n• **Équation** : égalité comportant une ou plusieurs inconnues (ex: $5x - 3 = 2x + 9$).\n• **Résoudre une équation** : trouver toutes les valeurs de l'inconnue qui rendent l'égalité vraie.\n• **Solution** : valeur numérique de l'inconnue qui vérifie l'égalité.\n• **Vérification** : calcul séparé de chaque membre en remplaçant l'inconnue par la solution trouvée."
      },
      {
        "title": "2. Distributivité simple et suppression de parenthèses",
        "content": "• **Distributivité simple** : transformer un produit en somme ou différence :\n$$k(a + b) = k \\times a + k \\times b = ka + kb$$\n$$k(a - b) = k \\times a - k \\times b = ka - kb$$\n• **Suppression de parenthèses** :\n  - Précédées d'un signe $+$ : on supprime les parenthèses sans rien changer : $a + (b - c) = a + b - c$.\n  - Précédées d'un signe $-$ : **on change TOUS les signes à l'intérieur** : $a - (b - c) = a - b + c$."
      },
      {
        "title": "3. Réduction d'une expression littérale",
        "content": "Réduire, c'est regrouper les termes possédant la même lettre affectée du même exposant (par familles) :\n$$E = 3x^2 + 5x - 7 + 2x^2 - 8x + 12$$\n$$E = (3x^2 + 2x^2) + (5x - 8x) + (-7 + 12) = 5x^2 - 3x + 5$$"
      },
      {
        "title": "4. Résolution pas-à-pas d'une équation : « Ce qui change de côté change de signe »",
        "content": "Pour résoudre $ax + b = cx + d$ :\n1. **Séparer les familles** : regrouper les termes en $x$ d'un côté (souvent à gauche) et les nombres constants de l'autre côté (à droite). Tout terme déplacé change de signe !\n2. **Réduire** les deux membres pour obtenir une forme $Ax = B$.\n3. **Isoler l'inconnue** en divisant par le coefficient $A$ devant $x$ : $x = \\frac{B}{A}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une équation du type $ax + b = cx + d$",
        "example": "Résoudre l'équation $7x - 4 = 2x + 11$ avec vérification.",
        "steps": [
          "**Étape 1 (Regroupement des termes en x)** : On soustrait $2x$ des deux côtés : $7x - 2x - 4 = 11 \\implies 5x - 4 = 11$.",
          "**Étape 2 (Regroupement des constantes)** : On ajoute $4$ des deux côtés : $5x = 11 + 4 = 15$.",
          "**Étape 3 (Division par le coefficient)** : On divise par $5$ : $x = \\frac{15}{5} = 3$.",
          "**Étape 4 (Vérification)** :\n• Membre de gauche : $7 \\times 3 - 4 = 21 - 4 = 17$.\n• Membre de droite : $2 \\times 3 + 11 = 6 + 11 = 17$.\nL'égalité est vérifiée : la solution est bien $x = 3$."
        ]
      }
    ],
    "traps": [
      "⚠️ Oublier de changer le signe lorsqu'on déplace un terme d'un membre à l'autre : dans $3x + 5 = 11$, déplacer $+5$ donne $3x = 11 - 5 = 6$, pas $11 + 5$ !",
      "⚠️ Dans un signe $-$ devant une parenthèse, oublier de changer le 2e terme : $5 - (2x - 3) = 5 - 2x + 3$ et NON $5 - 2x - 3$ !",
      "⚠️ Ne pas confondre $3x$ (multiplication $3 \\times x$) et $3+x$ (addition)."
    ],
    "flashcards": [
      {
        "q": "Que donne le développement de $-4(2x - 5)$ ?",
        "a": "$-8x + 20$ (car $(-4) \\times 2x = -8x$ et $(-4) \\times (-5) = +20$)."
      },
      {
        "q": "Comment simplifier l'expression $-(3x - 7)$ ?",
        "a": "$-3x + 7$ (le signe $-$ devant la parenthèse inverse le signe de chaque terme)."
      },
      {
        "q": "Résoudre l'équation $4x = -20$.",
        "a": "$x = \\frac{-20}{4} = -5$."
      },
      {
        "q": "Résoudre l'équation $x - 8 = -3$.",
        "a": "$x = -3 + 8 = 5$."
      },
      {
        "q": "Comment vérifie-t-on qu'un nombre est solution d'une équation ?",
        "a": "On remplace l'inconnue par ce nombre dans chaque membre séparément et on vérifie si les deux résultats sont égaux."
      }
    ]
  },
  "4G1": {
    "title": "4G1 : Théorème de Pythagore, réciproque et contraposée",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Identifier l'hypoténuse comme le plus grand côté face à l'angle droit.",
      "Appliquer le théorème de Pythagore direct pour calculer la longueur de l'hypoténuse.",
      "Appliquer le théorème de Pythagore direct pour calculer la longueur d'un côté de l'angle droit.",
      "Rédiger rigoureusement la réciproque du théorème de Pythagore pour démontrer qu'un triangle est rectangle.",
      "Rédiger la contraposée pour démontrer qu'un triangle n'est pas rectangle."
    ],
    "keyPoints": [
      {
        "title": "1. Le Théorème direct de Pythagore (Calcul de longueurs)",
        "content": "Dans un **triangle rectangle**, le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés :\n$$\\text{Si } ABC \\text{ est rectangle en } A, \\quad \\text{alors } BC^2 = AB^2 + AC^2$$\n• **Calculer l'hypoténuse** : $BC = \\sqrt{AB^2 + AC^2}$.\n• **Calculer un côté de l'angle droit** : $AB^2 = BC^2 - AC^2 \\implies AB = \\sqrt{BC^2 - AC^2}$."
      },
      {
        "title": "2. Réciproque du théorème de Pythagore (Prouver qu'un triangle est rectangle)",
        "content": "Soit $[BC]$ le **plus grand côté** d'un triangle $ABC$ :\n$$\\text{Si } BC^2 = AB^2 + AC^2, \\quad \\text{alors le triangle } ABC \\text{ est rectangle en } A.$$\n*Méthode d'or* : On calcule $BC^2$ d'un côté, et $AB^2 + AC^2$ de l'autre côté **séparément** sans jamais poser l'égalité au départ !"
      },
      {
        "title": "3. Contraposée du théorème de Pythagore (Prouver qu'un triangle n'est pas rectangle)",
        "content": "Soit $[BC]$ le plus grand côté d'un triangle $ABC$ :\n$$\\text{Si } BC^2 \\neq AB^2 + AC^2, \\quad \\text{alors le triangle } ABC \\text{ N'EST PAS rectangle.}$$\n(On dit alors : d'après la contraposée du théorème de Pythagore)."
      },
      {
        "title": "4. Valeur exacte vs Valeur arrondie",
        "content": "• La **valeur exacte** conserve le symbole radical : $BC = \\sqrt{61}$ cm.\n• La **valeur arrondie** est donnée avec le symbole $\\approx$ selon la précision demandée (au dixième près : $BC \\approx 7,8$ cm).\n• Ne jamais arrondir au cours des étapes intermédiaires de calcul !"
      }
    ],
    "methods": [
      {
        "title": "Modèle officiel de rédaction : Réciproque de Pythagore",
        "example": "Soit un triangle RST tel que RS = 4,5 cm, ST = 6 cm et RT = 7,5 cm. Le triangle RST est-il rectangle ?",
        "steps": [
          "**1. Identifier le plus grand côté** : Dans le triangle $RST$, le plus grand côté est $[RT]$.",
          "**2. Calculer séparément** :\n• D'une part : $RT^2 = 7,5^2 = 56,25$.\n• D'autre part : $RS^2 + ST^2 = 4,5^2 + 6^2 = 20,25 + 36 = 56,25$.",
          "**3. Conclure** : On constate que $RT^2 = RS^2 + ST^2$. D'après la **réciproque du théorème de Pythagore**, le triangle $RST$ est rectangle en $S$."
        ]
      }
    ],
    "traps": [
      "⚠️ Poser l'égalité dès la 1ère ligne dans la réciproque : écrire d'emblée $RT^2 = RS^2 + ST^2$ est faux tant qu'on ne l'a pas calculé !",
      "⚠️ Pour calculer un côté de l'angle droit, il faut SOUSTRAIRE les carrés et non les additionner : $AB^2 = BC^2 - AC^2$.",
      "⚠️ Oublier d'extraire la racine carrée $\\sqrt{}$ à la fin : $BC^2 = 25 \\implies BC = 5$, pas $25$ !"
    ],
    "flashcards": [
      {
        "q": "Comment nomme-t-on le côté opposé à l'angle droit dans un triangle rectangle ?",
        "a": "L'**hypoténuse** (c'est toujours le plus grand côté du triangle rectangle)."
      },
      {
        "q": "Si un triangle $EFG$ est rectangle en $E$, quelle est l'égalité de Pythagore ?",
        "a": "$FG^2 = EF^2 + EG^2$ (l'hypoténuse est le côté $[FG]$ face à l'angle droit $E$)."
      },
      {
        "q": "À quoi sert la réciproque du théorème de Pythagore ?",
        "a": "Elle sert à **démontrer qu'un triangle est rectangle** quand on connaît les longueurs de ses 3 côtés."
      },
      {
        "q": "Dans un triangle rectangle, l'hypoténuse mesure 10 cm et un côté mesure 6 cm. Que vaut le 3e côté ?",
        "a": "8 cm, car $10^2 - 6^2 = 100 - 36 = 64$ et $\\sqrt{64} = 8$ cm."
      },
      {
        "q": "Que conclut-on si le carré du plus grand côté n'est pas égal à la somme des carrés des deux autres ?",
        "a": "D'après la **contraposée du théorème de Pythagore**, le triangle **n'est pas rectangle**."
      }
    ]
  },
  "4G2": {
    "title": "4G2 : Triangle rectangle, cercle circonscrit et droite des milieux",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Caractériser le triangle rectangle par son cercle circonscrit (diamètre = hypoténuse).",
      "Calculer la longueur de la médiane issue de l'angle droit : elle mesure la moitié de l'hypoténuse.",
      "Appliquer le 1er théorème de la droite des milieux pour prouver un parallélisme.",
      "Appliquer le 2e théorème de la droite des milieux pour calculer une longueur ($IJ = BC / 2$).",
      "Appliquer la réciproque de la droite des milieux pour prouver qu'un point est le milieu d'un segment."
    ],
    "keyPoints": [
      {
        "title": "1. Triangle rectangle et cercle circonscrit",
        "content": "• **Propriété directe** : Si un triangle est rectangle, alors son cercle circonscrit a pour **diamètre son hypoténuse** (son centre est le milieu de l'hypoténuse).\n• **Réciproque** : Si un triangle est inscrit dans un cercle de diamètre l'un de ses côtés, alors ce triangle est **rectangle** et ce diamètre est son hypoténuse."
      },
      {
        "title": "2. Médiane issue de l'angle droit",
        "content": "Dans un triangle rectangle, la longueur de la médiane issue du sommet de l'angle droit est égale à la **moitié de la longueur de l'hypoténuse** :\n$$\\text{Si } ABC \\text{ est rectangle en } A \\text{ et } M \\text{ est le milieu de } [BC], \\quad \\text{alors } AM = \\frac{BC}{2} = MB = MC$$\nLe point $M$ est le centre du cercle circonscrit, donc $MA = MB = MC = \\text{rayon}$."
      },
      {
        "title": "3. Les deux théorèmes de la droite des milieux",
        "content": "Dans un triangle quelconque $ABC$ où $I$ est le milieu de $[AB]$ et $J$ le milieu de $[AC]$ :\n• **Théorème 1 (Parallélisme)** : La droite $(IJ)$ passant par les milieux de deux côtés est **parallèle** au troisième côté : $(IJ) // (BC)$.\n• **Théorème 2 (Longueur)** : La longueur du segment reliant les milieux mesure la **moitié** du 3e côté :\n$$IJ = \\frac{BC}{2} \\quad (\\text{ou } BC = 2 \\times IJ)$$"
      },
      {
        "title": "4. Réciproque de la droite des milieux",
        "content": "Dans un triangle $ABC$, si une droite passe par le **milieu d'un côté** $[AB]$ et est **parallèle** à un deuxième côté $(BC)$, alors elle **coupe le troisième côté $[AC]$ en son milieu**."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer un parallélisme et calculer une longueur avec les milieux",
        "example": "Soit un triangle ABC avec AB = 8 cm, AC = 10 cm, BC = 12 cm. I milieu de [AB] et J milieu de [AC]. Démontrer que (IJ) // (BC) et calculer IJ.",
        "steps": [
          "**Étape 1 (Parallélisme)** : Dans le triangle $ABC$, $I$ est le milieu de $[AB]$ et $J$ est le milieu de $[AC]$. D'après le 1er théorème de la droite des milieux, la droite $(IJ)$ est parallèle à $(BC)$.",
          "**Étape 2 (Longueur)** : D'après le 2e théorème de la droite des milieux, le segment $[IJ]$ mesure la moitié de $[BC]$ : $IJ = \\frac{BC}{2} = \\frac{12}{2} = 6$ cm."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre médiane (qui relie un sommet au milieu opposé) et hauteur (qui est perpendiculaire au côté opposé).",
      "⚠️ Pour appliquer la droite des milieux, il faut que les points soient EXPLICITEMENT des milieux (ou démontrés comme tels)."
    ],
    "flashcards": [
      {
        "q": "Où se trouve le centre du cercle circonscrit à un triangle rectangle ?",
        "a": "Au **milieu de son hypoténuse**."
      },
      {
        "q": "Dans un triangle rectangle d'hypoténuse 14 cm, quelle est la longueur de la médiane issue de l'angle droit ?",
        "a": "$7$ cm (la moitié de l'hypoténuse : $\\frac{14}{2} = 7$ cm)."
      },
      {
        "q": "Que peut-on dire de la droite passant par les milieux de deux côtés d'un triangle ?",
        "a": "Elle est **parallèle au troisième côté** du triangle (1er théorème de la droite des milieux)."
      },
      {
        "q": "Si la base d'un triangle mesure 15 cm, quelle est la longueur du segment joignant les milieux des deux autres côtés ?",
        "a": "$7,5$ cm ($15 \\div 2 = 7,5$ cm)."
      },
      {
        "q": "Si un triangle est inscrit dans un cercle ayant pour diamètre un de ses côtés, quelle est la nature de ce triangle ?",
        "a": "C'est un **triangle rectangle**."
      }
    ]
  },
  "4G3": {
    "title": "4G3 : Translations et transformations du plan",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Définir une translation comme un glissement rectiligne sans rotation ni déformation.",
      "Identifier les 3 caractéristiques indispensables d'un vecteur : direction, sens et longueur (norme).",
      "Associer rigoureusement translation et parallélogramme : $B$ image de $A$ par translation $C \\to D \\iff CDBA$ est un parallélogramme.",
      "Construire l'image d'un point, d'un segment et d'une figure par une translation.",
      "Utiliser les propriétés d'invariance et de conservation : longueurs, angles, parallélisme et aires."
    ],
    "keyPoints": [
      {
        "title": "1. Définition de la translation et du vecteur",
        "content": "Une translation fait « glisser » une figure sans la faire tourner ni la déformer.\nCe déplacement rectiligne est caractérisé par un **vecteur** qui possède **3 caractéristiques indispensables** :\n1. Une **direction** : la droite directrice (par exemple la droite reliant Lille à Nice).\n2. Un **sens** : l'orientation du parcours (de Lille vers Nice, et non l'inverse).\n3. Une **longueur (ou norme)** : la distance parcourue entre les deux points."
      },
      {
        "title": "2. Lien fondamental avec le parallélogramme",
        "content": "Dire que le point $M'$ est l'image du point $M$ par la translation qui transforme $A$ en $B$ équivaut à dire que :\n$$\\text{Le quadrilatère } ABM'M \\text{ est un PARALLÉLOGRAMME}$$\n*(Les diagonales $[AM']$ et $[BM]$ ont le même milieu, et les segments opposés $[AB]$ et $[MM']$ sont parallèles et de même longueur)*."
      },
      {
        "title": "3. Propriétés de conservation",
        "content": "La translation conserve toutes les caractéristiques géométriques des figures :\n• **Longueurs** : l'image d'un segment $[AB]$ est un segment $[A'B']$ de même longueur ($A'B' = AB$).\n• **Angles** : la mesure des angles est rigoureusement conservée.\n• **Aires et périmètres** : la figure image a exactement la même aire et le même périmètre.\n• **Parallélisme et alignement** : l'image d'une droite est une droite qui lui est parallèle."
      },
      {
        "title": "4. Rappel comparatif des transformations du plan",
        "content": "• **Symétrie axiale** : effet miroir par pliage le long d'une droite (axe).\n• **Symétrie centrale** : demi-tour de $180^\\circ$ autour d'un point (centre, qui est le milieu).\n• **Translation** : glissement selon une direction, un sens et une distance sans rotation."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Construire l'image d'un point par translation à la règle et au compas",
        "example": "Construire le point D, image de C par la translation qui transforme A en B.",
        "steps": [
          "**Étape 1 (Analyse)** : On sait que $ABDC$ doit être un parallélogramme.",
          "**Étape 2 (Au compas)** : Prendre l'écartement $AB$, piquer sur $C$ et tracer un premier arc de cercle.",
          "**Étape 3** : Prendre l'écartement $AC$, piquer sur $B$ et tracer un deuxième arc de cercle coupant le premier.",
          "**Étape 4 (Point image)** : Le point d'intersection des deux arcs est le point $D$ recherché."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre **direction** (une droite ou une orientation dans l'espace, ex: horizontale) et **sens** (vers la droite ou vers la gauche).",
      "⚠️ Attention à l'ordre des lettres dans le parallélogramme : si la translation envoie $A$ en $B$ et $C$ en $D$, le parallélogramme est $ABDC$ (et non $ABCD$) !"
    ],
    "flashcards": [
      {
        "q": "Quels sont les trois éléments qui définissent une translation ?",
        "a": "Une **direction** (la droite), un **sens** (la flèche) et une **longueur / distance**."
      },
      {
        "q": "Si $B$ est l'image de $A$ par la translation qui envoie $C$ en $D$, quel quadrilatère est un parallélogramme ?",
        "a": "Le quadrilatère **$CDBA$** (les segments $[CD]$ et $[AB]$ sont parallèles, de même sens et même longueur)."
      },
      {
        "q": "Quelle est l'image d'une droite $(d)$ par une translation ?",
        "a": "Une droite $(d')$ qui est **parallèle** à $(d)$."
      },
      {
        "q": "Une translation modifie-t-elle l'aire d'un polygone ?",
        "a": "Non, la translation **conserve les aires** (la figure transformée est superposable à la figure initiale)."
      },
      {
        "q": "Quelle transformation correspond à une rotation d'un demi-tour (180°) ?",
        "a": "La **symétrie centrale**."
      }
    ]
  },
  "4G4": {
    "title": "4G4 : Espace : pyramides, cônes de révolution et volumes",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Identifier et décrire les composants d'une pyramide (sommet principal, base, faces latérales, hauteur).",
      "Identifier le tétraèdre comme une pyramide à base triangulaire.",
      "Décrire un cône de révolution obtenu par rotation d'un triangle rectangle.",
      "Calculer le volume d'une pyramide et d'un cône avec la formule $V = \\frac{1}{3} \\times \\text{Base} \\times h$.",
      "Calculer l'angle du secteur circulaire formant le patron d'un cône de révolution.",
      "Appliquer les coefficients d'agrandissement et de réduction aux longueurs, aires et volumes."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire des solides pointus : Pyramide et Cône",
        "content": "• **Pyramide** : Solide formé d'une base polygonale (triangle, rectangle, carré...) et de faces latérales triangulaires ayant un sommet commun appelé **sommet principal**.\n• **Tétraèdre** : Pyramide dont la base est un triangle (elle possède 4 faces triangulaires ; n'importe quelle face peut servir de base).\n• **Hauteur d'une pyramide** : Segment issu du sommet principal perpendiculaire au plan de la base.\n• **Cône de révolution** : Solide engendré par la rotation d'un triangle rectangle autour de l'un des côtés de son angle droit. Sa base est un disque et son sommet est l'apex."
      },
      {
        "title": "2. Formule universelle des volumes pointus",
        "content": "Pour toute pyramide et tout cône de révolution, le volume est égal au tiers du produit de l'aire de la base par la hauteur :\n$$V = \\frac{\\text{Aire de la base} \\times \\text{hauteur}}{3} = \\frac{1}{3} \\times \\mathcal{B} \\times h$$\n• Pyramide à base carrée de côté $c$ : $V = \\frac{c^2 \\times h}{3}$\n• Pyramide à base rectangulaire ($L \\times l$) : $V = \\frac{L \\times l \\times h}{3}$\n• Cône de révolution de rayon $r$ : $V = \\frac{\\pi \\times r^2 \\times h}{3}$"
      },
      {
        "title": "3. Patron d'un cône et angle du secteur circulaire",
        "content": "Le patron d'un cône est composé d'un disque de base (rayon $r$) et d'un secteur de disque (rayon égal à la **génératrice** $g$).\nLa longueur de l'arc de cercle du secteur est égale au périmètre du disque de base ($2\\pi r$).\nL'angle au centre $\\alpha$ (en degrés) est proportionnel au rayon :\n$$\\alpha = 360^\\circ \\times \\frac{r}{g} \\quad (\\text{où } g \\text{ est la génératrice})$$"
      },
      {
        "title": "4. Effets d'un agrandissement ou d'une réduction de rapport k",
        "content": "Si toutes les dimensions d'un solide sont multipliées par un nombre $k > 0$ :\n• Les **longueurs** sont multipliées par $k$.\n• Les **aires** sont multipliées par $k^2$.\n• Les **volumes** sont multipliés par $k^3$.\n*(Exemple : si on double les dimensions d'une pyramide ($k=2$), son volume est multiplié par $2^3 = 8$ !)*"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer le volume d'un cône de révolution",
        "example": "Calculer le volume d'un cône de rayon de base r = 3 cm et de hauteur h = 7 cm (au cm³ près).",
        "steps": [
          "**Étape 1 (Aire de la base)** : $\\mathcal{B} = \\pi \\times r^2 = \\pi \\times 3^2 = 9\\pi \\text{ cm}^2$.",
          "**Étape 2 (Formule du volume)** : $V = \\frac{\\mathcal{B} \\times h}{3} = \\frac{9\\pi \\times 7}{3}$.",
          "**Étape 3 (Simplification et valeur exacte)** : $\\frac{9 \\times 7}{3}\\pi = 3 \\times 7\\pi = 21\\pi \\text{ cm}^3$.",
          "**Étape 4 (Valeur arrondie)** : $V \\approx 21 \\times 3,14159 \\approx 66 \\text{ cm}^3$."
        ]
      }
    ],
    "traps": [
      "⚠️ Oublier de diviser par 3 dans la formule du volume d'une pyramide ou d'un cône : un cylindre contient 3 cônes de même base et même hauteur !",
      "⚠️ Ne pas confondre la hauteur $h$ (perpendiculaire du sommet à la base) et la génératrice $g$ ou l'arête latérale (qui est oblique)."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule générale du volume d'une pyramide ou d'un cône ?",
        "a": "$$V = \\frac{\\text{Aire de la base} \\times \\text{hauteur}}{3}$$"
      },
      {
        "q": "Qu'est-ce qu'un tétraèdre ?",
        "a": "Une **pyramide à base triangulaire** (qui possède 4 faces triangulaires au total)."
      },
      {
        "q": "Si on multiplie toutes les longueurs d'un solide par 3, par combien son volume est-il multiplié ?",
        "a": "Par $3^3 = 27$ !"
      },
      {
        "q": "Quelle est la formule du volume d'un cône de rayon r et de hauteur h ?",
        "a": "$$V = \\frac{\\pi r^2 h}{3}$$"
      },
      {
        "q": "Comment calcule-t-on l'angle au centre $\\alpha$ du patron d'un cône ?",
        "a": "$$\\alpha = 360^\\circ \\times \\frac{r}{g} \\quad (r = \\text{rayon}, g = \\text{génératrice})$$"
      }
    ]
  },
  "4D1": {
    "title": "4D1 : Statistiques : moyenne pondérée, médiane et étendue",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Calculer la moyenne simple d'une série de données.",
      "Calculer la moyenne pondérée par des effectifs ou des coefficients.",
      "Déterminer la médiane d'une série statistique ordonnée (effectif total pair et impair).",
      "Calculer l'étendue d'une série comme mesure de dispersion.",
      "Interpréter et comparer deux séries statistiques à l'aide de ces indicateurs."
    ],
    "keyPoints": [
      {
        "title": "1. Moyenne simple et Moyenne pondérée",
        "content": "• **Moyenne simple** : somme de toutes les valeurs divisée par le nombre total de valeurs :\n$$\\bar{x} = \\frac{\\text{Somme des valeurs}}{N}$$\n• **Moyenne pondérée** : chaque valeur $x_i$ est affectée d'un effectif (ou coefficient) $n_i$ :\n$$\\bar{x} = \\frac{n_1 x_1 + n_2 x_2 + \\dots + n_p x_p}{n_1 + n_2 + \\dots + n_p} = \\frac{\\sum n_i x_i}{N_{\\text{total}}}$$"
      },
      {
        "title": "2. Médiane d'une série statistique",
        "content": "La **médiane** d'une série ordonnée est un nombre qui partage la population en **deux groupes de même effectif** :\n• Au moins 50 % des valeurs sont inférieures ou égales à la médiane.\n• Au moins 50 % des valeurs sont supérieures ou égales à la médiane.\n**Condition préalable obligatoire** : Il faut toujours commencer par **ranger les valeurs par ordre croissant** !"
      },
      {
        "title": "3. Méthode de calcul de la médiane selon la parité de l'effectif total N",
        "content": "• **Si N est IMPAIR** ($N = 2p + 1$) : La médiane est la valeur située exactement au milieu, de rang $\\frac{N+1}{2}$.\n  - Exemple : $N = 9$ valeurs ordonnées $\\implies \\frac{9+1}{2} = 5$ème valeur.\n• **Si N est PAIR** ($N = 2p$) : La médiane est la demi-somme des deux valeurs centrales, de rang $\\frac{N}{2}$ et $\\frac{N}{2} + 1$.\n  - Exemple : $N = 10$ valeurs ordonnées $\\implies$ moyenne entre la 5ème et la 6ème valeur."
      },
      {
        "title": "4. Étendue d'une série",
        "content": "L'**étendue** d'une série statistique est la différence entre la plus grande valeur et la plus petite valeur de la série :\n$$\\text{Étendue} = \\text{Valeur maximale} - \\text{Valeur minimale}$$\nElle mesure la dispersion des données : plus l'étendue est grande, plus la série est étalée."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer la médiane d'une série de notes",
        "example": "Voici les notes obtenues par un élève : 14, 8, 12, 16, 9, 11, 15. Déterminer la médiane.",
        "steps": [
          "**Étape 1 (Ordonner la série)** : $8 \\le 9 \\le 11 \\le 12 \\le 14 \\le 15 \\le 16$.",
          "**Étape 2 (Compter l'effectif)** : Il y a $N = 7$ valeurs (nombre impair).",
          "**Étape 3 (Identifier le rang)** : $\\frac{7+1}{2} = 4$ème valeur.",
          "**Étape 4 (Conclusion)** : La 4ème valeur est 12. La note médiane est donc **12** (3 notes sont $\\le 12$ et 3 notes sont $\\ge 12$)."
        ]
      }
    ],
    "traps": [
      "⚠️ Chercher la médiane sans avoir au préalable rangé les valeurs dans l'ordre croissant !",
      "⚠️ Dans une moyenne avec coefficients, diviser par le nombre de matières au lieu de diviser par la **somme des coefficients** !"
    ],
    "flashcards": [
      {
        "q": "Comment calcule-t-on l'étendue d'une série statistique ?",
        "a": "$$\\text{Étendue} = \\text{Valeur maximale} - \\text{Valeur minimale}$$"
      },
      {
        "q": "Quelle est la première étape obligatoire pour déterminer une médiane ?",
        "a": "Ranger impérativement les valeurs de la série **par ordre croissant**."
      },
      {
        "q": "Dans une série de 11 valeurs rangées, quel est le rang de la médiane ?",
        "a": "Le 6ème rang (car $\\frac{11+1}{2} = 6$, il y a 5 valeurs avant et 5 valeurs après)."
      },
      {
        "q": "La médiane d'une série est 13. Que cela signifie-t-il ?",
        "a": "Cela signifie qu'au moins la moitié (50%) des données sont inférieures ou égales à 13, et au moins la moitié sont supérieures ou égales à 13."
      },
      {
        "q": "Calculer l'étendue de la série : 4 ; 12 ; 7 ; 19 ; 3.",
        "a": "$19 - 3 = 16$."
      }
    ]
  },
  "4D2": {
    "title": "4D2 : Probabilités : événements contraires et 2 épreuves",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Maîtriser le vocabulaire : expérience aléatoire, issue, événement élémentaire, certain, impossible.",
      "Calculer la probabilité d'un événement en situation d'équiprobabilité : $P(A) = \\frac{\\text{issues favorables}}{\\text{issues possibles}}$.",
      "Définir l'événement contraire $\\bar{A}$ (« non A ») et appliquer la formule fondamentale $P(\\bar{A}) = 1 - P(A)$.",
      "Représenter une expérience aléatoire à deux épreuves successives indépendantes à l'aide d'un arbre pondéré ou d'un tableau à double entrée.",
      "Calculer des probabilités composées."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire fondamental des probabilités",
        "content": "• **Expérience aléatoire** : Expérience dont on connaît toutes les issues possibles, mais dont le résultat ne peut pas être prévu avec certitude à l'avance (ex: jet de dé, pile ou face).\n• **Événement impossible** : Événement qui ne peut jamais se produire, sa probabilité vaut $0$ ($P = 0$).\n• **Événement certain** : Événement qui se produit à coup sûr, sa probabilité vaut $1$ ($P = 1$).\n• **Propriété** : Pour tout événement $A$, la probabilité est un nombre compris entre 0 et 1 : $$0 \\le P(A) \\le 1$$"
      },
      {
        "title": "2. Équiprobabilité",
        "content": "Lorsque chaque issue a exactement la même chance de se produire (dés équilibrés, boules indiscernables au toucher, pièces bien équilibrées), on dit qu'il y a **équiprobabilité** :\n$$P(A) = \\frac{\\text{Nombre d'issues favorables à } A}{\\text{Nombre total d'issues possibles}}$$"
      },
      {
        "title": "3. Événement contraire $\\bar{A}$",
        "content": "L'**événement contraire** d'un événement $A$, noté $\\bar{A}$ (ou « non A »), est l'ensemble de toutes les issues qui n'appartiennent pas à $A$.\n$$\\text{Formule d'or : } P(\\bar{A}) = 1 - P(A) \\quad \\iff \\quad P(A) + P(\\bar{A}) = 1$$\n*Exemple* : Si la probabilité de tirer une bille rouge est $P(R) = 0,35$, alors la probabilité de ne pas tirer de bille rouge est $P(\\bar{R}) = 1 - 0,35 = 0,65$."
      },
      {
        "title": "4. Expériences aléatoires à deux épreuves",
        "content": "Pour modéliser deux tirages successifs ou le lancer simultané de deux objets :\n• **Le tableau à double entrée** : très efficace quand le nombre d'issues est fini et identique pour chaque épreuve.\n• **L'arbre pondéré** : sur chaque branche on inscrit la probabilité de l'issue correspondante.\n• La somme des probabilités des branches issues d'un même nœud est **toujours égale à 1**."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la probabilité d'un événement avec l'événement contraire",
        "example": "Dans une tombola de 500 tickets, 15 tickets sont gagnants. Quelle est la probabilité de ne rien gagner ?",
        "steps": [
          "**Étape 1 (Probabilité de l'événement direct)** : Soit $G$ l'événement « Gagner un lot ». $P(G) = \\frac{15}{500} = \\frac{3}{100} = 0,03$.",
          "**Étape 2 (Appliquer l'événement contraire)** : L'événement « Ne rien gagner » est l'événement contraire $\\bar{G}$.",
          "**Étape 3 (Calcul)** : $P(\\bar{G}) = 1 - P(G) = 1 - 0,03 = 0,97$ (soit 97 % de chance de ne rien gagner)."
        ]
      }
    ],
    "traps": [
      "⚠️ Trouver une probabilité supérieure à 1 ou strictement négative (une probabilité est TOUJOURS comprise entre 0 et 1).",
      "⚠️ Oublier que la somme des probabilités de toutes les issues d'une expérience aléatoire doit être rigoureusement égale à 1."
    ],
    "flashcards": [
      {
        "q": "Si $P(A) = 0,42$, que vaut la probabilité de l'événement contraire $\\bar{A}$ ?",
        "a": "$P(\\bar{A}) = 1 - 0,42 = 0,58$."
      },
      {
        "q": "Que vaut la somme des probabilités de toutes les issues possibles d'une expérience aléatoire ?",
        "a": "Elle est **toujours égale à 1**."
      },
      {
        "q": "Quelle est la probabilité d'un événement impossible ?",
        "a": "$0$ (zéro chance de se produire)."
      },
      {
        "q": "Dans un sac contenant 4 billes bleues et 6 billes vertes, quelle est la probabilité de tirer une bille bleue ?",
        "a": "$P = \\frac{4}{4+6} = \\frac{4}{10} = 0,4$ (ou $\\frac{2}{5}$)."
      },
      {
        "q": "Que vaut la somme des probabilités des branches partant d'un même nœud dans un arbre pondéré ?",
        "a": "Elle vaut **toujours 1**."
      }
    ]
  },
  "4P1": {
    "title": "4P1 : Proportionnalité, ratios et pourcentages",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Reconnaître une situation de proportionnalité et calculer la quatrième proportionnelle (produit en croix).",
      "Partager une quantité selon un ratio donné $a : b$ ou $a : b : c$.",
      "Appliquer un pourcentage et utiliser les coefficients multiplicateurs d'augmentation ($1 + t/100$) et de réduction ($1 - t/100$).",
      "Calculer une vitesse moyenne ($v = d/t$) et convertir les durées (heures décimales $\\leftrightarrow$ heures et minutes)."
    ],
    "keyPoints": [
      {
        "title": "1. Tableau de proportionnalité et Produit en croix",
        "content": "Dans un tableau de proportionnalité, on passe d'une ligne à l'autre en multipliant par le **coefficient de proportionnalité**.\n• **Égalité des produits en croix** :\n$$\\begin{array}{|c|c|} \\hline a & c \\\\ \\hline b & d \\\\ \\hline \\end{array} \\iff a \\times d = b \\times c \\quad \\implies \\quad d = \\frac{b \\times c}{a}$$"
      },
      {
        "title": "2. Partage selon un ratio",
        "content": "Deux nombres $x$ et $y$ sont dans le **ratio $a : b$** si $\\frac{x}{a} = \\frac{y}{b}$.\n*Méthode pratique* :\n1. Calculer le nombre total de « parts » : $a + b$.\n2. Calculer la valeur d'une seule part : $\\text{Valeur d'une part} = \\frac{\\text{Quantité totale}}{a + b}$.\n3. Multiplier par le nombre de parts de chacun."
      },
      {
        "title": "3. Pourcentages et Coefficients multiplicateurs",
        "content": "• **Prendre $t$ % d'une quantité** : on multiplie cette quantité par $\\frac{t}{100}$.\n• **Augmenter de $t$ %** revient à multiplier par $(1 + \\frac{t}{100})$ :\n  - Une augmentation de 20 % correspond au coefficient $1 + 0,20 = 1,20$.\n• **Diminuer de $t$ %** revient à multiplier par $(1 - \\frac{t}{100})$ :\n  - Une réduction de 15 % correspond au coefficient $1 - 0,15 = 0,85$."
      },
      {
        "title": "4. Vitesse moyenne et conversion des unités",
        "content": "La **vitesse moyenne** $v$ est une grandeur quotient égale à la distance $d$ divisée par le temps $t$ :\n$$v = \\frac{d}{t} \\quad \\iff \\quad d = v \\times t \\quad \\iff \\quad t = \\frac{d}{v}$$\n**Attention capitale aux unités de temps** :\n• $0,5$ h = $30$ min (la moitié d'une heure) | $0,25$ h = $15$ min | $0,75$ h = $45$ min.\n• Pour convertir des minutes en heures décimales : **diviser par 60** ($36$ min = $\\frac{36}{60} = 0,6$ h).\n• Pour convertir des heures décimales en minutes : **multiplier la partie décimale par 60** ($2,4$ h = $2$ h $+ 0,4 \\times 60$ min = $2$ h $24$ min)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Partager une somme selon un ratio",
        "example": "Partager 150 € entre Arthur et Zoé selon le ratio 2 : 3.",
        "steps": [
          "**Étape 1 (Nombre total de parts)** : $2 + 3 = 5$ parts au total.",
          "**Étape 2 (Valeur d'une part)** : $\\frac{150}{5} = 30$ € par part.",
          "**Étape 3 (Part d'Arthur)** : $2 \\times 30 = 60$ €.",
          "**Étape 4 (Part de Zoé)** : $3 \\times 30 = 90$ €.",
          "**Vérification** : $60 + 90 = 150$ €."
        ]
      }
    ],
    "traps": [
      "⚠️ Écrire que $1,5$ heure équivaut à 1 h 50 min ! $1,5$ heure, c'est $1$ h et une demie heure, soit **1 h 30 min** !",
      "⚠️ Penser qu'une hausse de 20 % suivie d'une baisse de 20 % redonne le prix initial : $100 \\times 1,20 = 120$, puis $120 \\times 0,80 = 96$ € (perte de 4 %) !"
    ],
    "flashcards": [
      {
        "q": "Combien de parts au total pour partager une recette selon le ratio 3 : 5 : 2 ?",
        "a": "$3 + 5 + 2 = 10$ parts au total."
      },
      {
        "q": "Par quel nombre multiplie-t-on pour appliquer une réduction de 30 % ?",
        "a": "Par $1 - 0,30 = 0,70$."
      },
      {
        "q": "Combien de minutes durent 1,25 heure ?",
        "a": "1 h 15 min (car $0,25 \\times 60 = 15$ min)."
      },
      {
        "q": "Une voiture parcourt 180 km en 2h15min. Quelle est sa vitesse moyenne ?",
        "a": "$80$ km/h ($2\\text{ h } 15\\text{ min} = 2,25\\text{ h}$, et $v = \\frac{180}{2,25} = 80$ km/h)."
      },
      {
        "q": "Par quel coefficient multiplicateur traduit-on une augmentation de 8 % ?",
        "a": "$1 + 0,08 = 1,08$."
      }
    ]
  },
  "4P2": {
    "title": "4P2 : Notion de fonction et programmes de calcul",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Comprendre la notion de fonction comme un procédé numérique qui associe à tout nombre $x$ une UNIQUE image $f(x)$.",
      "Distinguer rigoureusement la variable d'entrée (antécédent) du résultat obtenu (image).",
      "Traduire un programme de calcul pas à pas par une expression algébrique littérale.",
      "Calculer des images et antécédents simples, et dresser un tableau de valeurs.",
      "Construire et interpréter la courbe représentative d'une fonction dans un repère du plan."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et notations d'une fonction",
        "content": "Une fonction $f$ est une « machine » mathématique qui prend un nombre $x$ en entrée et lui associe un nombre d'arrivée unique noté $f(x)$ :\n$$f : x \\longmapsto f(x)$$\n• $x$ est un **antécédent** de $f(x)$ par $f$ (nombre de départ).\n• $f(x)$ est l'**image** de $x$ par $f$ (nombre d'arrivée unique).\n*Règle d'or* : Un nombre de départ possède **une seule image**. En revanche, une image peut posséder plusieurs antécédents (ou aucun) !"
      },
      {
        "title": "2. Traduction d'un programme de calcul en fonction",
        "content": "Soit le programme de calcul :\n1. Choisir un nombre $x$.\n2. Ajouter 3 $\\implies x + 3$.\n3. Multiplier le résultat par 2 $\\implies 2(x + 3)$.\n4. Soustraire 5 $\\implies 2(x + 3) - 5 = 2x + 6 - 5 = 2x + 1$.\nCe programme définit la fonction : $$f(x) = 2x + 1$$"
      },
      {
        "title": "3. Tableau de valeurs",
        "content": "Un tableau de valeurs regroupe des nombres choisis $x$ sur la 1ère ligne et leurs images $f(x)$ sur la 2ème ligne :\n$$\\begin{array}{|c|c|c|c|c|} \\hline x & -2 & 0 & 1 & 3 \\\\ \\hline f(x) = 2x+1 & -3 & 1 & 3 & 7 \\\\ \\hline \\end{array}$$"
      },
      {
        "title": "4. Représentation graphique dans un repère",
        "content": "La courbe de la fonction $f$ est l'ensemble de tous les points de coordonnées $(x ; f(x))$ dans un repère orthogonal :\n• L'axe des abscisses (axe horizontal) porte les **antécédents $x$**.\n• L'axe des ordonnées (axe vertical) porte les **images $f(x)$**."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une image et chercher un antécédent",
        "example": "Soit la fonction f(x) = 3x - 5. Calculer l'image de 4, puis l'antécédent de 16.",
        "steps": [
          "**Calculer l'image de 4** : On remplace $x$ par $4$ : $f(4) = 3 \\times 4 - 5 = 12 - 5 = 7$. L'image de 4 est 7.",
          "**Chercher l'antécédent de 16** : On résout l'équation $f(x) = 16$ :\n$3x - 5 = 16 \\implies 3x = 16 + 5 = 21 \\implies x = \\frac{21}{3} = 7$.\nL'antécédent de 16 est 7."
        ]
      }
    ],
    "traps": [
      "⚠️ Confondre image et antécédent : « Calculer l'image de 5 » veut dire remplacer $x$ par 5 ($f(5)$), alors que « Calculer l'antécédent de 5 » veut dire résoudre $f(x) = 5$ !",
      "⚠️ Oublier les parenthèses en calculant l'image d'un nombre négatif dans un carré : pour $f(x) = x^2$, $f(-3) = (-3)^2 = 9$ et NON $-3^2 = -9$."
    ],
    "flashcards": [
      {
        "q": "Si $f(3) = 11$, qui est l'image et qui est l'antécédent ?",
        "a": "$11$ est l'**image** de $3$, et $3$ est un **antécédent** de $11$."
      },
      {
        "q": "Quelle est l'image de $-2$ par la fonction $f(x) = 3x - 4$ ?",
        "a": "$f(-2) = 3 \\times (-2) - 4 = -6 - 4 = -10$."
      },
      {
        "q": "Sur quel axe d'un repère lit-on les antécédents d'une fonction ?",
        "a": "Sur l'**axe des abscisses** (axe horizontal)."
      },
      {
        "q": "Un nombre peut-il avoir plusieurs images par une même fonction ?",
        "a": "**Non**, par définition d'une fonction, chaque nombre possède une unique image (ou aucune)."
      },
      {
        "q": "Quel est l'antécédent de 0 par la fonction $f(x) = 5x - 15$ ?",
        "a": "$x = 3$, car $5x - 15 = 0 \\implies 5x = 15 \\implies x = 3$."
      }
    ]
  },
  "4A1": {
    "title": "4A1 : Algorithmique : conditions et variables Scratch",
    "domain": "Algorithmique et Programmation",
    "objectives": [
      "Créer, nommer et initialiser une variable informatique dans Scratch.",
      "Distinguer l'affectation (« mettre la variable à ... ») de l'incrémentation (« ajouter ... à la variable »).",
      "Programmer des structures conditionnelles « Si <condition> alors ... Sinon ... ».",
      "Utiliser les capteurs de saisie (« demander ... et attendre ») et le bloc « réponse ».",
      "Analyser et prévoir le comportement d'un script pas à pas avec un tableau de suivi des variables."
    ],
    "keyPoints": [
      {
        "title": "1. Les Variables dans Scratch",
        "content": "Une variable est une case mémoire étiquetée qui stocke une valeur (un nombre ou un texte) pouvant changer au cours de l'exécution du programme.\n• **« mettre [Score] à 0 »** : écrase la valeur précédente et stocke 0 (initialisation).\n• **« ajouter 1 à [Score] »** : prend l'ancienne valeur du score et lui ajoute 1 (incrémentation : $x \\leftarrow x + 1$).\n*Exemple* : si Score vaut 5, « ajouter 2 à Score » donne 7. « mettre Score à 2 » donnerait 2 !"
      },
      {
        "title": "2. Structures conditionnelles « Si ... alors ... sinon »",
        "content": "Le bloc conditionnel teste une condition booléenne (Vraie ou Fausse) :\n• Si la condition est VRAIE, le programme exécute le premier bloc d'instructions.\n• Si la condition est FAUSSE, le programme exécute le bloc situé sous le « sinon ».\n*Opérateurs de comparaison fréquents* : `<` (inférieur strict), `>` (supérieur strict), `=` (égal)."
      },
      {
        "title": "3. Interaction utilisateur : Demander et Réponse",
        "content": "• Le bloc **« demander [Quel est ton âge ?] et attendre »** affiche une boîte de saisie à l'écran et met le programme en pause jusqu'à validation par l'utilisateur.\n• Le bloc bleu ciel **« réponse »** contient la valeur tapée par l'utilisateur. On la stocke généralement immédiatement dans une variable dédiée : « mettre [Age] à (réponse) »."
      },
      {
        "title": "4. Répétitions et tracés géométriques",
        "content": "Pour tracer un polygone régulier à $N$ côtés égaux avec le stylo de Scratch :\n• On répète $N$ fois : « avancer de côté » puis « tourner de $(360 / N)$ degrés ».\n• Pour un triangle équilatéral ($N=3$) : tourner de $\\frac{360}{3} = 120^\\circ$.\n• Pour un carré ($N=4$) : tourner de $\\frac{360}{4} = 90^\\circ$.\n• Pour un hexagone ($N=6$) : tourner de $\\frac{360}{6} = 60^\\circ$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Suivre pas à pas l'évolution d'une variable dans un script",
        "example": "Soit le script : mettre [x] à 5 ; ajouter 3 à [x] ; mettre [y] à 2 * x ; si y > 15 alors ajouter 1 à [x] sinon ajouter 2 à [y]. Quelles sont les valeurs finales ?",
        "steps": [
          "**Ligne 1** : $x = 5$.",
          "**Ligne 2** : $x = 5 + 3 = 8$.",
          "**Ligne 3** : $y = 2 \\times 8 = 16$.",
          "**Ligne 4 (Test conditionnel)** : Est-ce que $y > 15$ ? Oui car $16 > 15$ (VRAI).",
          "**Ligne 5 (Exécution bloc 'alors')** : $x = 8 + 1 = 9$. Le bloc 'sinon' est ignoré.",
          "**Valeurs finales** : $x = 9$ et $y = 16$."
        ]
      }
    ],
    "traps": [
      "⚠️ Confondre « mettre ma variable à 1 » (qui fixe la valeur à 1) et « ajouter 1 à ma variable » (qui incrémente la valeur existante de 1).",
      "⚠️ Dans les tracés géométriques, l'angle de rotation du lutin est l'angle **extérieur** ($360^\\circ / N$) et NON l'angle intérieur du polygone (ex: pour un triangle équilatéral, l'angle intérieur vaut $60^\\circ$, mais le lutin doit tourner de $180 - 60 = 120^\\circ$) !"
    ],
    "flashcards": [
      {
        "q": "Quelle est la différence entre « mettre x à 10 » et « ajouter 10 à x » ?",
        "a": "« Mettre à 10 » donne la valeur 10 à $x$. « Ajouter 10 » additionne 10 à la valeur déjà contenue dans $x$."
      },
      {
        "q": "De quel angle doit tourner le lutin pour tracer un hexagone régulier (6 côtés) ?",
        "a": "$$360^\\circ \\div 6 = 60^\\circ$$"
      },
      {
        "q": "Où est stockée la saisie de l'utilisateur après le bloc « demander ... et attendre » ?",
        "a": "Dans la bulle de capteur bleue **« réponse »**."
      },
      {
        "q": "Si x = 7, que vaut x après l'instruction : Si x < 5 alors ajouter 2 à x sinon mettre x à 20 ?",
        "a": "$x = 20$ (car la condition $7 < 5$ est fausse, donc on exécute la branche 'sinon')."
      },
      {
        "q": "Quelle boucle utilise-t-on quand on ne connaît pas à l'avance le nombre d'itérations ?",
        "a": "La boucle conditionnelle **« répéter jusqu'à <condition> »**."
      }
    ]
  }
};

window.MATHS_EXERCISES_4E = {
  "4N1": [
    {
      "id": "4N1-1",
      "chapterId": "4N1",
      "tier": 1,
      "title": "Multiplication de deux relatifs",
      "statement": "Calculer le produit suivant :\n$$A = (-6) \\times (+7)$$",
      "type": "exact",
      "answer": "-42",
      "placeholder": "Ex: -42",
      "hint1": "Les deux nombres ont des signes différents : le résultat est négatif.",
      "hint2": "Calcule $-(6 \\times 7)$.",
      "solution": "Le produit de deux nombres de signes contraires est négatif :\n$$A = -(6 \\times 7) = -42$$",
      "skill": "Calculer"
    },
    {
      "id": "4N1-2",
      "chapterId": "4N1",
      "tier": 2,
      "title": "Produit de deux nombres négatifs",
      "statement": "Calculer le produit suivant :\n$$B = (-8) \\times (-9)$$",
      "type": "exact",
      "answer": "72",
      "placeholder": "Ex: 72",
      "hint1": "Moins par moins donne plus !",
      "hint2": "Deux nombres négatifs ont un produit positif : $8 \\times 9$.",
      "solution": "Le produit de deux nombres négatifs est strictement positif :\n$$B = + (8 \\times 9) = 72$$",
      "skill": "Calculer"
    },
    {
      "id": "4N1-3",
      "chapterId": "4N1",
      "tier": 3,
      "title": "Enchaînement avec division et priorités",
      "statement": "Calculer la valeur numérique de l'expression suivante :\n$$C = \\frac{(-24) + (-16)}{-8} - 3 \\times (-5)$$",
      "type": "exact",
      "answer": "20",
      "placeholder": "Ex: 20",
      "hint1": "Effectue le quotient sans quitter l'écriture de la fraction : $C = \\frac{(-24) + (-16)}{-8} = \\frac{-40}{-8} = 5$.",
      "hint2": "Ensuite effectue $-3 \\times (-5) = +15$. Enfin $5 + 15$.",
      "solution": "$$C = \\frac{(-24) + (-16)}{-8} - 3 \\times (-5) = \\frac{-40}{-8} - (-15) = 5 + 15 = 20$$",
      "skill": "Calculer"
    },
    {
      "id": "4N1-4",
      "chapterId": "4N1",
      "tier": 4,
      "title": "Défi 3ème : Chaîne complexe de relatifs avec puissances et quotient",
      "statement": "Calculer la valeur exacte de l'expression suivante :\n$$D = \\frac{(-4) \\times (-6) \\times (-5)}{(-2) \\times 15} - (-3)^2 \\times (-1)^5$$",
      "type": "exact",
      "answer": "13",
      "placeholder": "Ex: 13",
      "hint1": "Calcule le quotient sous forme d'une seule fraction : $\\frac{(-4) \\times (-6) \\times (-5)}{(-2) \\times 15} = \\frac{-120}{-30} = 4$.",
      "hint2": "2. Puissances : $(-3)^2 = 9$ et $(-1)^5 = -1$. Donc $(-3)^2 \\times (-1)^5 = -9$.",
      "solution": "$$D = \\frac{(-4) \\times (-6) \\times (-5)}{(-2) \\times 15} - (-3)^2 \\times (-1)^5 = \\frac{-120}{-30} - 9 \\times (-1) = 4 - (-9) = 4 + 9 = 13$$",
      "skill": "Calculer"
    }
  ],
  "4N2": [
    {
      "id": "4N2-1",
      "chapterId": "4N2",
      "tier": 1,
      "title": "Produit de deux fractions",
      "statement": "Calculer et simplifier :\n$$P = \\frac{3}{5} \\times \\frac{10}{7}$$",
      "type": "exact",
      "answer": "6/7",
      "placeholder": "Ex: 6/7",
      "hint1": "Multiplie les numérateurs entre eux et les dénominateurs entre eux.",
      "hint2": "Remarque que $10 = 5 \\times 2$, tu peux simplifier par 5 avant de multiplier.",
      "solution": "$$P = \\frac{3 \\times (5 \\times 2)}{5 \\times 7} = \\frac{3 \\times 2}{7} = \\frac{6}{7}$$",
      "skill": "Calculer"
    },
    {
      "id": "4N2-2",
      "chapterId": "4N2",
      "tier": 2,
      "title": "Division de deux fractions",
      "statement": "Calculer et donner sous forme irréductible :\n$$Q = \\frac{4}{9} \\div \\frac{2}{3}$$",
      "type": "exact",
      "answer": "2/3",
      "placeholder": "Ex: 2/3",
      "hint1": "Diviser par une fraction revient à multiplier par son inverse : $\\frac{4}{9} \\times \\frac{3}{2}$.",
      "hint2": "Simplifie $\\frac{4 \\times 3}{9 \\times 2}$.",
      "solution": "$$Q = \\frac{4}{9} \\times \\frac{3}{2} = \\frac{12}{18} = \\frac{2}{3}$$",
      "skill": "Calculer"
    },
    {
      "id": "4N2-3",
      "chapterId": "4N2",
      "tier": 3,
      "title": "Priorités et 4 opérations sur les fractions",
      "statement": "Calculer sous forme de fraction irréductible :\n$$R = \\frac{2}{3} + \\frac{5}{6} \\times \\frac{4}{15}$$",
      "type": "exact",
      "answer": "8/9",
      "placeholder": "Ex: 8/9",
      "hint1": "La multiplication est prioritaire : calcule d'abord $\\frac{5}{6} \\times \\frac{4}{15}$.",
      "hint2": "$\\frac{5 \\times 4}{6 \\times 15} = \\frac{20}{90} = \\frac{2}{9}$. Puis $\\frac{2}{3} + \\frac{2}{9} = \\frac{6}{9} + \\frac{2}{9}$.",
      "solution": "1. Produit : $\\frac{5}{6} \\times \\frac{4}{15} = \\frac{2}{9}$.\n2. Somme : $\\frac{2}{3} + \\frac{2}{9} = \\frac{6}{9} + \\frac{2}{9} = \\frac{8}{9}$.",
      "skill": "Calculer"
    },
    {
      "id": "4N2-4",
      "chapterId": "4N2",
      "tier": 4,
      "title": "Défi 3ème : Fraction à étages complexe (Quotient composé)",
      "statement": "Calculer la valeur exacte sous forme de fraction irréductible de :\n$$F = \\frac{\\frac{2}{3} - \\frac{1}{4}}{\\frac{5}{6} + \\frac{1}{2}}$$",
      "type": "exact",
      "answer": "5/16",
      "placeholder": "Ex: 5/16",
      "hint1": "Mets les fractions au même dénominateur en gardant l’expression entière : $F = \\frac{\\frac{2}{3} - \\frac{1}{4}}{\\frac{5}{6} + \\frac{1}{2}} = \\frac{\\frac{8}{12} - \\frac{3}{12}}{\\frac{5}{6} + \\frac{1}{2}}$.",
      "hint2": "Poursuis en gardant le quotient complet : $F = \\frac{\\frac{5}{12}}{\\frac{5}{6} + \\frac{3}{6}} = \\frac{\\frac{5}{12}}{\\frac{8}{6}} = \\frac{5}{12} \\div \\frac{4}{3}$.",
      "solution": "On calcule d'abord les deux expressions de la fraction à étages, puis on conserve le quotient entier :\n$$F = \\frac{\\frac{2}{3} - \\frac{1}{4}}{\\frac{5}{6} + \\frac{1}{2}} = \\frac{\\frac{8}{12} - \\frac{3}{12}}{\\frac{5}{6} + \\frac{3}{6}} = \\frac{\\frac{5}{12}}{\\frac{8}{6}} = \\frac{5}{12} \\div \\frac{4}{3} = \\frac{5}{12} \\times \\frac{3}{4} = \\frac{15}{48} = \\frac{5}{16}.$$",
      "skill": "Calculer"
    }
  ],
  "4N3": [
    {
      "id": "4N3-1",
      "chapterId": "4N3",
      "tier": 1,
      "title": "Écriture décimale d'une puissance de 10",
      "statement": "Donner l'écriture décimale du nombre suivant :\n$$N = 10^4$$",
      "type": "exact",
      "answer": "10000",
      "placeholder": "Ex: 10000",
      "hint1": "$10^4$ s'écrit avec le chiffre 1 suivi de 4 zéros.",
      "solution": "$$10^4 = 10\\,000$$",
      "skill": "Calculer"
    },
    {
      "id": "4N3-2",
      "chapterId": "4N3",
      "tier": 2,
      "title": "Règles de calcul sur les puissances de 10",
      "statement": "Écrire sous la forme $10^n$ :\n$$P = \\frac{10^5 \\times 10^{-2}}{10^7}$$\n**Donner la valeur de l'exposant $n$.**",
      "type": "exact",
      "answer": "-4",
      "placeholder": "Ex: -4",
      "hint1": "Garde toute la fraction dans le calcul : $P = \\frac{10^5 \\times 10^{-2}}{10^7} = \\frac{10^{5 - 2}}{10^7} = \\frac{10^3}{10^7}$.",
      "hint2": "Poursuis avec la fraction entière : $P = \\frac{10^3}{10^7} = 10^{3 - 7} = 10^{-4}$.",
      "solution": "$$P = \\frac{10^3}{10^7} = 10^{3 - 7} = 10^{-4} \\implies n = -4$$",
      "skill": "Calculer"
    },
    {
      "id": "4N3-3",
      "chapterId": "4N3",
      "tier": 3,
      "title": "Notation scientifique d'un grand nombre",
      "statement": "La distance moyenne Terre-Soleil est d'environ $149\\,600\\,000\\text{ km}$.\nSon écriture scientifique s'écrit $1{,}496 \\times 10^k$.\n**Donner la valeur de l'entier $k$.**",
      "type": "exact",
      "answer": "8",
      "placeholder": "Ex: 8",
      "hint1": "Compte le nombre de crans vers la gauche pour passer de $149\\,600\\,000$ à $1{,}496$.",
      "solution": "$$149\\,600\\,000 = 1{,}496 \\times 10^8 \\implies k = 8$$",
      "skill": "Calculer"
    },
    {
      "id": "4N3-4",
      "chapterId": "4N3",
      "tier": 4,
      "title": "Défi 3ème : Grand quotient de puissances (Notation scientifique)",
      "statement": "On donne l'expression suivante :\n$$C = \\frac{4 \\times 10^7 \\times 15 \\times 10^{-3}}{6 \\times (10^2)^3}$$\nL'écriture scientifique de $C$ est de la forme $a \\times 10^k$ avec $1 \\le a < 10$.\n**Donner la valeur de l'exposant $k$.**",
      "type": "exact",
      "answer": "-1",
      "placeholder": "Ex: -1",
      "hint1": "Réécris toute la fraction en simplifiant les produits : $C = \\frac{4 \\times 10^7 \\times 15 \\times 10^{-3}}{6 \\times (10^2)^3} = \\frac{60 \\times 10^4}{6 \\times 10^6}$.",
      "hint2": "Poursuis avec la fraction complète : $C = \\frac{60 \\times 10^4}{6 \\times 10^6} = \\frac{10 \\times 10^4}{10^6} = 10 \\times 10^{-2} = 10^{-1} = 1 \\times 10^{-1}$.",
      "solution": "$$C = \\frac{60 \\times 10^4}{6 \\times 10^6} = 10 \\times 10^{-2} = 1 \\times 10^{-1} \\implies k = -1$$",
      "skill": "Calculer"
    }
  ],
  "4N4": [
    {
      "id": "4N4-1",
      "chapterId": "4N4",
      "tier": 1,
      "title": "Carré d'un entier remarquable",
      "statement": "Calculer le carré du nombre 12 :\n$$C = 12^2$$",
      "type": "exact",
      "answer": "144",
      "placeholder": "Ex: 144",
      "hint1": "Calcule $12 \\times 12$.",
      "solution": "$$12^2 = 12 \\times 12 = 144$$",
      "skill": "Calculer"
    },
    {
      "id": "4N4-2",
      "chapterId": "4N4",
      "tier": 2,
      "title": "Racine carrée exacte",
      "statement": "Calculer la racine carrée exacte suivante :\n$$R = \\sqrt{81}$$",
      "type": "exact",
      "answer": "9",
      "placeholder": "Ex: 9",
      "hint1": "Trouve le nombre positif dont le carré vaut 81.",
      "solution": "Comme $9^2 = 81$, on a $\\sqrt{81} = 9$.",
      "skill": "Calculer"
    },
    {
      "id": "4N4-3",
      "chapterId": "4N4",
      "tier": 3,
      "title": "Somme et différence de racines carrées",
      "statement": "Calculer la valeur exacte de l'expression :\n$$S = \\sqrt{64} + \\sqrt{36} - \\sqrt{25}$$",
      "type": "exact",
      "answer": "9",
      "placeholder": "Ex: 9",
      "hint1": "Calcule chaque racine : $\\sqrt{64} = 8$, $\\sqrt{36} = 6$, $\\sqrt{25} = 5$.",
      "solution": "$$S = 8 + 6 - 5 = 9$$",
      "skill": "Calculer"
    },
    {
      "id": "4N4-4",
      "chapterId": "4N4",
      "tier": 4,
      "title": "Défi 3ème : Opérations combinées sous le radical et priorités",
      "statement": "Calculer la valeur exacte du nombre :\n$$E = \\sqrt{10^2 - 8^2} + \\sqrt{144} - 2\\sqrt{49}$$",
      "type": "exact",
      "answer": "4",
      "placeholder": "Ex: 4",
      "hint1": "Sous la première racine : $10^2 - 8^2 = 100 - 64 = 36$, donc $\\sqrt{36} = 6$.",
      "hint2": "Autres termes : $\\sqrt{144} = 12$ et $2\\sqrt{49} = 2 \\times 7 = 14$.",
      "solution": "1. Premier terme : $\\sqrt{100 - 64} = \\sqrt{36} = 6$.\n2. Deuxième terme : $\\sqrt{144} = 12$.\n3. Troisième terme : $2 \\times 7 = 14$.\n4. Total : $E = 6 + 12 - 14 = 4$.",
      "skill": "Calculer"
    }
  ],
  "4N5": [
    {
      "id": "4N5-1",
      "chapterId": "4N5",
      "tier": 1,
      "title": "Résoudre une équation simple",
      "statement": "Résoudre l'équation suivante :\n$$3x + 5 = 26$$",
      "type": "exact",
      "answer": "7",
      "placeholder": "Ex: 7",
      "hint1": "Isole le terme en $x$ en soustrayant 5 de chaque côté : $3x = 21$.",
      "hint2": "Divise par 3 : $x = 21 \\div 3$.",
      "solution": "$$3x = 26 - 5 \\implies 3x = 21 \\implies x = \\frac{21}{3} = 7$$",
      "skill": "Résoudre"
    },
    {
      "id": "4N5-2",
      "chapterId": "4N5",
      "tier": 2,
      "title": "Équation avec des x des deux côtés",
      "statement": "Résoudre l'équation suivante :\n$$7x - 5 = 2x + 15$$",
      "type": "exact",
      "answer": "4",
      "placeholder": "Ex: 4",
      "hint1": "Soustrais $2x$ des deux côtés pour regrouper les $x$ à gauche : $5x - 5 = 15$.",
      "hint2": "Ajoute 5 des deux côtés ($5x = 20$) puis divise par 5.",
      "solution": "$$7x - 2x = 15 + 5 \\implies 5x = 20 \\implies x = \\frac{20}{5} = 4$$",
      "skill": "Résoudre"
    },
    {
      "id": "4N5-3",
      "chapterId": "4N5",
      "tier": 3,
      "title": "Équation avec parenthèses et distributivité",
      "statement": "Résoudre l'équation :\n$$2(3x - 1) - 4(x + 2) = 6$$",
      "type": "exact",
      "answer": "8",
      "placeholder": "Ex: 8",
      "hint1": "Développe d'abord chaque parenthèse : $6x - 2 - 4x - 8 = 6$.",
      "hint2": "Réduis : $2x - 10 = 6$, donc $2x = 16$.",
      "solution": "1. Développement : $6x - 2 - 4x - 8 = 6$.\n2. Réduction : $2x - 10 = 6$.\n3. Résolution : $2x = 16 \\implies x = 8$.",
      "skill": "Résoudre"
    },
    {
      "id": "4N5-4",
      "chapterId": "4N5",
      "tier": 4,
      "title": "Défi 3ème : Double distributivité $(ax + b)(cx + d)$",
      "statement": "Développer et réduire l'expression :\n$$E = (3x - 4)(2x + 5)$$\n**Quel est le coefficient du terme en $x$ (le terme du 1er degré) ?**",
      "type": "exact",
      "answer": "7",
      "placeholder": "Ex: 7",
      "hint1": "Double distributivité : $3x \\times 2x + 3x \\times 5 - 4 \\times 2x - 4 \\times 5$.",
      "hint2": "Termes en $x$ : $15x - 8x = 7x$.",
      "solution": "$$E = 6x^2 + 15x - 8x - 20 = 6x^2 + 7x - 20$$\nLe coefficient de $x$ est donc 7.",
      "skill": "Calculer"
    }
  ],
  "4G1": [
    {
      "id": "4G1-1",
      "chapterId": "4G1",
      "tier": 1,
      "title": "Calcul de l'hypoténuse",
      "statement": "Soit $ABC$ un triangle rectangle en $A$ tel que $AB = 6\\text{ cm}$ et $AC = 8\\text{ cm}$.\nCalculer la longueur de l'hypoténuse $[BC]$.",
      "type": "exact",
      "answer": "10",
      "placeholder": "Ex: 10",
      "hint1": "Applique le théorème de Pythagore : $BC^2 = AB^2 + AC^2$.",
      "hint2": "$BC^2 = 36 + 64 = 100$. Quelle est la racine carrée de 100 ?",
      "solution": "Le triangle $ABC$ est rectangle en $A$. D'après le théorème de Pythagore :\n$$BC^2 = AB^2 + AC^2 = 6^2 + 8^2 = 36 + 64 = 100$$\nComme $BC > 0$, $BC = \\sqrt{100} = 10\\text{ cm}$.",
      "skill": "Calculer"
    },
    {
      "id": "4G1-2",
      "chapterId": "4G1",
      "tier": 2,
      "title": "Calcul d'un côté de l'angle droit",
      "statement": "Soit $DEF$ un triangle rectangle en $D$ tel que l'hypoténuse $EF = 13\\text{ cm}$ et $DE = 5\\text{ cm}$.\nCalculer la longueur du côté $[DF]$.",
      "type": "exact",
      "answer": "12",
      "placeholder": "Ex: 12",
      "hint1": "Attention, on cherche un côté de l'angle droit ! $DF^2 = EF^2 - DE^2$.",
      "hint2": "$DF^2 = 169 - 25 = 144$. Quelle est la racine carrée de 144 ?",
      "solution": "Le triangle $DEF$ est rectangle en $D$. D'après le théorème de Pythagore :\n$$EF^2 = DE^2 + DF^2 \\implies DF^2 = EF^2 - DE^2 = 13^2 - 5^2 = 169 - 25 = 144$$\nComme $DF > 0$, $DF = \\sqrt{144} = 12\\text{ cm}$.",
      "skill": "Calculer"
    },
    {
      "id": "4G1-3",
      "chapterId": "4G1",
      "tier": 3,
      "title": "Réciproque du théorème de Pythagore",
      "statement": "Un triangle $MNP$ a pour dimensions : $MN = 9\\text{ cm}$, $MP = 12\\text{ cm}$ et $NP = 15\\text{ cm}$.\nCe triangle est-il rectangle ? (Répondre par 'oui' ou 'non')",
      "type": "exact",
      "answer": "oui",
      "placeholder": "oui ou non",
      "hint1": "Le plus grand côté est $NP = 15$. Calcule $NP^2$ d'une part, et $MN^2 + MP^2$ d'autre part.",
      "hint2": "$15^2 = 225$ et $9^2 + 12^2 = 81 + 144 = 225$. Conclus avec la réciproque.",
      "solution": "Le plus long côté est $[NP]$ :\n$$NP^2 = 15^2 = 225$$\nD'autre part :\n$$MN^2 + MP^2 = 9^2 + 12^2 = 81 + 144 = 225$$\nComme $NP^2 = MN^2 + MP^2$, d'après la réciproque du théorème de Pythagore, le triangle $MNP$ est **rectangle en $M$**.",
      "skill": "Raisonner"
    },
    {
      "id": "4G1-4",
      "chapterId": "4G1",
      "tier": 4,
      "title": "Défi 3ème : Modélisation géométrique (Échelle et mur)",
      "statement": "Une échelle de longueur $L = 10\\text{ m}$ est posée contre un mur vertical. Le pied de l'échelle est situé à une distance $d = 6\\text{ m}$ du bas du mur.\n**À quelle hauteur $h$ sur le mur le sommet de l'échelle parvient-il (en mètres) ?**",
      "type": "exact",
      "answer": "8",
      "placeholder": "Ex: 8",
      "hint1": "Le mur et le sol sont perpendiculaires : triangle rectangle dont l'hypoténuse est l'échelle ($10\\text{ m}$).",
      "solution": "$$h^2 = 10^2 - 6^2 = 100 - 36 = 64 \\implies h = \\sqrt{64} = 8\\text{ m}$$",
      "skill": "Résoudre"
    }
  ],
  "4G4": [
    {
      "id": "4G4-1",
      "chapterId": "4G4",
      "tier": 1,
      "title": "Volume d'un pavé droit",
      "statement": "Calculer le volume d'un pavé droit de longueur $L = 6\\text{ cm}$, de largeur $l = 4\\text{ cm}$ et de hauteur $h = 5\\text{ cm}$.",
      "type": "exact",
      "answer": "120",
      "placeholder": "Ex: 120",
      "hint1": "Formule : $\\mathcal{V} = L \\times l \\times h$.",
      "solution": "$$\\mathcal{V} = 6 \\times 4 \\times 5 = 120\\text{ cm}^3$$",
      "skill": "Calculer"
    },
    {
      "id": "4G4-2",
      "chapterId": "4G4",
      "tier": 2,
      "title": "Volume d'un cylindre de révolution",
      "statement": "Un cylindre a pour rayon de base $R = 3\\text{ cm}$ et pour hauteur $h = 10\\text{ cm}$.\nDonner la valeur exacte de son volume sous la forme $n\\pi\\text{ cm}^3$ (saisir le nombre $n$).",
      "type": "exact",
      "answer": "90",
      "placeholder": "Ex: 90",
      "hint1": "Formule : $\\mathcal{V} = \\pi R^2 h = \\pi \\times 3^2 \\times 10$.",
      "solution": "$$\\mathcal{V} = \\pi \\times 9 \\times 10 = 90\\pi\\text{ cm}^3$$",
      "skill": "Calculer"
    },
    {
      "id": "4G4-3",
      "chapterId": "4G4",
      "tier": 3,
      "title": "Volume d'un cône de révolution",
      "statement": "Un cône de révolution a un rayon de base $R = 6\\text{ cm}$ et une hauteur $h = 9\\text{ cm}$.\nDonner la valeur exacte de son volume sous la forme $n\\pi\\text{ cm}^3$ (saisir le nombre $n$).",
      "type": "exact",
      "answer": "108",
      "placeholder": "Ex: 108",
      "hint1": "Formule : $\\mathcal{V} = \\frac{1}{3}\\pi R^2 h = \\frac{1}{3}\\pi \\times 36 \\times 9$.",
      "solution": "$$\\mathcal{V} = \\frac{36 \\times 9}{3}\\pi = 108\\pi\\text{ cm}^3$$",
      "skill": "Calculer"
    },
    {
      "id": "4G4-4",
      "chapterId": "4G4",
      "tier": 4,
      "title": "Défi 3ème : Contenance d'un bac prismatique en Litres",
      "statement": "Un bac d'eau a la forme d'un prisme droit à base triangulaire rectangle dont les côtés de l'angle droit mesurent $a = 40\\text{ cm}$ et $b = 30\\text{ cm}$. La hauteur du bac est $h = 50\\text{ cm}$.\n\n**Quelle est la contenance maximale du bac en Litres ?**",
      "type": "exact",
      "answer": "30",
      "placeholder": "Ex: 30",
      "hint1": "Convertis en décimètres : $4\\text{ dm}$, $3\\text{ dm}$, $5\\text{ dm}$. Aire base : $(4 \\times 3)/2 = 6\\text{ dm}^2$.",
      "solution": "1. Base : $\\mathcal{B} = \\frac{4 \\times 3}{2} = 6\\text{ dm}^2$.\n2. Volume : $\\mathcal{V} = 6 \\times 5 = 30\\text{ dm}^3 = 30\\text{ Litres}$.",
      "skill": "Résoudre"
    }
  ],
  "4D1": [
    {
      "id": "4D1-1",
      "chapterId": "4D1",
      "tier": 1,
      "title": "Calcul de la moyenne d'une série",
      "statement": "Calculer la moyenne de la série : $12~;~14~;~16~;~18$.",
      "type": "exact",
      "answer": "15",
      "placeholder": "Ex: 15",
      "hint1": "Fais la somme des 4 nombres puis divise par 4.",
      "solution": "$$\\bar{x} = \\frac{12 + 14 + 16 + 18}{4} = \\frac{60}{4} = 15$$",
      "skill": "Calculer"
    },
    {
      "id": "4D1-2",
      "chapterId": "4D1",
      "tier": 2,
      "title": "Moyenne pondérée par des effectifs",
      "statement": "Dans une classe, 2 élèves ont eu 10, 3 élèves ont eu 12 et 5 élèves ont eu 15.\nCalculer la moyenne de la classe.",
      "type": "exact",
      "answer": "13.1",
      "placeholder": "Ex: 13.1",
      "hint1": "Somme des points : $10 \\times 2 + 12 \\times 3 + 15 \\times 5 = 131$. Effectif total : 10.",
      "solution": "$$\\bar{x} = \\frac{20 + 36 + 75}{10} = \\frac{131}{10} = 13{,}1$$",
      "skill": "Calculer"
    },
    {
      "id": "4D1-3",
      "chapterId": "4D1",
      "tier": 3,
      "title": "Probabilité dans une urne opaque",
      "statement": "Une urne contient 3 boules rouges, 4 boules bleues et 5 boules vertes.\nQuelle est la probabilité de tirer une boule rouge ? (Fraction irréductible)",
      "type": "exact",
      "answer": "1/4",
      "placeholder": "Ex: 1/4",
      "hint1": "Nombre total de boules : $3 + 4 + 5 = 12$. Fraction : $3/12$.",
      "solution": "$$P = \\frac{3}{12} = \\frac{1}{4}$$",
      "skill": "Calculer"
    },
    {
      "id": "4D1-4",
      "chapterId": "4D1",
      "tier": 4,
      "title": "Défi 3ème : Rétro-calcul de l'effectif total à partir d'un pourcentage",
      "statement": "Dans une association sportive, 30 adhérents pratiquent la natation, ce qui représente $20\\%$ de tous les membres.\n**Quel est le nombre total d'adhérents de l'association ?**",
      "type": "exact",
      "answer": "150",
      "placeholder": "Ex: 150",
      "hint1": "Si $20\\%$ vaut 30, alors $100\\%$ vaut $\\frac{30 \\times 100}{20}$.",
      "solution": "$$N = \\frac{30 \\times 100}{20} = 150\\text{ adhérents}$$",
      "skill": "Résoudre"
    }
  ],
  "4P1": [
    {
      "id": "4P1-1",
      "chapterId": "4P1",
      "tier": 1,
      "title": "Quatrième proportionnelle",
      "statement": "Si 3 stylos coûtent $4{,}50\\text{ €}$, combien coûtent 5 stylos identiques ?",
      "type": "exact",
      "answer": "7.5",
      "placeholder": "Ex: 7.5",
      "hint1": "Prix d'un stylo : $4{,}50 \\div 3 = 1{,}50\\text{ €}$. Multiplie par 5.",
      "solution": "$$x = \\frac{4{,}50 \\times 5}{3} = 7{,}50\\text{ €}$$",
      "skill": "Calculer"
    },
    {
      "id": "4P1-2",
      "chapterId": "4P1",
      "tier": 2,
      "title": "Calcul du montant d'une réduction",
      "statement": "Un manteau coûte $150\\text{ €}$. Il bénéficie d'une remise de $20\\%$.\nQuel est le montant de la remise en euros ?",
      "type": "exact",
      "answer": "30",
      "placeholder": "Ex: 30",
      "hint1": "Calcule $\\frac{20}{100} \\times 150$.",
      "solution": "$$\\text{Remise} = 150 \\times 0{,}20 = 30\\text{ €}$$",
      "skill": "Calculer"
    },
    {
      "id": "4P1-3",
      "chapterId": "4P1",
      "tier": 3,
      "title": "Vitesse moyenne et durée décimale",
      "statement": "Un train parcourt $135\\text{ km}$ en $1\\text{ h } 30\\text{ min}$.\nQuelle est sa vitesse moyenne en km/h ?",
      "type": "exact",
      "answer": "90",
      "placeholder": "Ex: 90",
      "hint1": "$1\\text{ h } 30\\text{ min} = 1{,}5\\text{ h}$. Formule : $v = d / t$.",
      "solution": "$$v = \\frac{135}{1{,}5} = 90\\text{ km/h}$$",
      "skill": "Calculer"
    },
    {
      "id": "4P1-4",
      "chapterId": "4P1",
      "tier": 4,
      "title": "Défi 3ème : Vitesse moyenne sur deux tronçons successifs",
      "statement": "Un cycliste parcourt $120\\text{ km}$ en 2 étapes : les premiers $60\\text{ km}$ à $60\\text{ km/h}$, puis les $60\\text{ km}$ restants à $30\\text{ km/h}$.\n\n**Quelle est sa vitesse moyenne sur l'ensemble du parcours en km/h ?**",
      "type": "exact",
      "answer": "40",
      "placeholder": "Ex: 40",
      "hint1": "Temps 1 : $60/60 = 1\\text{ h}$. Temps 2 : $60/30 = 2\\text{ h}$. Temps total : 3 h.",
      "solution": "$$v_{\\text{moy}} = \\frac{120\\text{ km}}{1 + 2\\text{ h}} = \\frac{120}{3} = 40\\text{ km/h}$$",
      "skill": "Résoudre"
    }
  ],
  "4G2": [
  {
    "id": "4G2-1",
    "chapterId": "4G2",
    "tier": 1,
    "title": "Rayon du cercle circonscrit à un triangle rectangle",
    "statement": "Un triangle rectangle a une hypoténuse mesurant $16\\text{ cm}$. Quel est le rayon de son cercle circonscrit en cm ?",
    "type": "exact",
    "answer": "8",
    "placeholder": "Ex: 8",
    "hint1": "Le centre du cercle circonscrit est le milieu de l'hypoténuse, donc le rayon vaut la moitié de l'hypoténuse.",
    "solution": "$$R = \\frac{\\text{Hypoténuse}}{2} = \\frac{16}{2} = 8\\text{ cm}$$",
    "skill": "Calculer"
  },
  {
    "id": "4G2-2",
    "chapterId": "4G2",
    "tier": 2,
    "title": "Longueur de la médiane issue de l'angle droit",
    "statement": "Dans un triangle $ABC$ rectangle en $A$, on donne $BC = 13\\text{ cm}$. La médiane issue du sommet $A$ coupe $[BC]$ en $M$. Quelle est la longueur $AM$ en cm ?",
    "type": "exact",
    "answer": "6.5",
    "placeholder": "Ex: 6.5",
    "hint1": "Dans un triangle rectangle, la médiane relative à l'hypoténuse mesure la moitié de l'hypoténuse.",
    "solution": "$$AM = \\frac{BC}{2} = \\frac{13}{2} = 6,5\\text{ cm}$$",
    "skill": "Calculer"
  },
  {
    "id": "4G2-3",
    "chapterId": "4G2",
    "tier": 3,
    "title": "Théorème de la droite des milieux",
    "statement": "Dans un triangle $ABC$, $I$ est le milieu de $[AB]$ et $J$ est le milieu de $[AC]$. Sachant que $BC = 18\\text{ cm}$, quelle est la longueur du segment $[IJ]$ en cm ?",
    "type": "exact",
    "answer": "9",
    "placeholder": "Ex: 9",
    "hint1": "D'après le théorème des milieux, la droite des milieux mesure la moitié du 3ème côté.",
    "solution": "$$IJ = \\frac{BC}{2} = \\frac{18}{2} = 9\\text{ cm}$$",
    "skill": "Calculer"
  },
  {
    "id": "4G2-4",
    "chapterId": "4G2",
    "tier": 4,
    "title": "Défi : Démontrer qu'un triangle est rectangle",
    "statement": "Le triangle $RST$ est inscrit dans un cercle ayant pour diamètre le segment $[RS]$. Que peut-on affirmer avec certitude ?",
    "type": "mcq",
    "options": [
      "Le triangle RST est rectangle en T",
      "Le triangle RST est équilatéral",
      "Le triangle RST est rectangle en R",
      "Le point T est le centre du cercle"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : un triangle inscrit dans un cercle dont un côté est le diamètre est rectangle au sommet opposé.",
      "Rien n'indique que ses trois côtés sont égaux.",
      "L'angle droit est au sommet opposé au diamètre, c'est-à-dire en T.",
      "Le centre est le milieu de [RS], pas T."
    ],
    "hint1": "Le sommet opposé au diamètre est le sommet de l'angle droit.",
    "solution": "Comme $[RS]$ est un diamètre du cercle circonscrit, le triangle $RST$ est rectangle en $T$.",
    "skill": "Raisonner"
  }
],
  "4G3": [
  {
    "id": "4G3-1",
    "chapterId": "4G3",
    "tier": 1,
    "title": "Conservation des distances par translation",
    "statement": "Par la translation qui transforme le point $A$ en $B$, l'image d'un segment $[EF]$ de longueur $8,4\\text{ cm}$ mesure en cm :",
    "type": "exact",
    "answer": "8.4",
    "placeholder": "Ex: 8.4",
    "hint1": "La translation est un glissement qui conserve les longueurs.",
    "solution": "La translation conserve les distances, donc $E'F' = EF = 8,4\\text{ cm}$.",
    "skill": "Raisonner"
  },
  {
    "id": "4G3-2",
    "chapterId": "4G3",
    "tier": 2,
    "title": "Nature du quadrilatère formé",
    "statement": "Si le point $D$ est l'image du point $C$ par la translation qui transforme $A$ en $B$, quelle est la nature du quadrilatère $ABDC$ ?",
    "type": "mcq",
    "options": [
      "Un parallélogramme",
      "Un losange",
      "Un trapèze quelconque",
      "Un rectangle"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : par définition de la translation, ABDC est un parallélogramme.",
      "Il faudrait que AB = AC, ce qui n'est pas précisé.",
      "Faux, ses côtés opposés sont parallèles.",
      "Il faudrait un angle droit, ce qui n'est pas garanti."
    ],
    "hint1": "Les segments $[AB]$ et $[CD]$ ont même direction, même sens et même longueur.",
    "solution": "Par définition de la translation, $ABDC$ est un parallélogramme.",
    "skill": "Raisonner"
  },
  {
    "id": "4G3-3",
    "chapterId": "4G3",
    "tier": 3,
    "title": "Image d'une figure géométrique",
    "statement": "Un cercle de rayon $5\\text{ cm}$ et de centre $O$ a pour image par une translation un cercle de centre $O'$. Quel est le rayon du cercle image en cm ?",
    "type": "exact",
    "answer": "5",
    "placeholder": "Ex: 5",
    "hint1": "La translation conserve les dimensions des figures.",
    "solution": "La translation conserve les rayons des cercles, donc le rayon reste de $5\\text{ cm}$.",
    "skill": "Raisonner"
  },
  {
    "id": "4G3-4",
    "chapterId": "4G3",
    "tier": 4,
    "title": "Défi : Translation et repère",
    "statement": "Dans un repère, la translation transforme l'origine $O(0;0)$ en $T(3;4)$. Quelles sont les coordonnées de l'image du point $M(2;1)$ ?",
    "type": "mcq",
    "options": [
      "(5 ; 5)",
      "(1 ; 3)",
      "(6 ; 4)",
      "(-1 ; -3)"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : on ajoute 3 à l'abscisse (2 + 3 = 5) et 4 à l'ordonnée (1 + 4 = 5).",
      "Erreur de soustraction au lieu d'addition.",
      "Erreur de calcul.",
      "Erreur."
    ],
    "hint1": "Ajoute les composantes du déplacement (3 en x, 4 en y) aux coordonnées de M.",
    "solution": "$$x' = 2 + 3 = 5 \\quad \\text{et} \\quad y' = 1 + 4 = 5 \\implies M'(5 ; 5)$$",
    "skill": "Calculer"
  }
],
  "4D2": [
  {
    "id": "4D2-1",
    "chapterId": "4D2",
    "tier": 1,
    "title": "Calcul de l'événement contraire",
    "statement": "La probabilité qu'il pleuve demain est estimée à $P(E) = 0,35$. Quelle est la probabilité qu'il ne pleuve pas demain ?",
    "type": "exact",
    "answer": "0.65",
    "placeholder": "Ex: 0.65",
    "hint1": "Formule de l'événement contraire : $P(\\bar{E}) = 1 - P(E)$.",
    "solution": "$$P(\\bar{E}) = 1 - 0,35 = 0,65$$",
    "skill": "Calculer"
  },
  {
    "id": "4D2-2",
    "chapterId": "4D2",
    "tier": 2,
    "title": "Tirage sans succès",
    "statement": "Une tombola contient 200 billets, dont 20 sont gagnants. Quelle est la probabilité de tirer un billet perdant sous forme décimale ?",
    "type": "exact",
    "answer": "0.9",
    "placeholder": "Ex: 0.9",
    "hint1": "Nombre de billets perdants : $200 - 20 = 180$. Ou $1 - \\frac{20}{200}$.",
    "solution": "$$P(\\text{Perdant}) = 1 - \\frac{20}{200} = 1 - 0,1 = 0,9$$",
    "skill": "Calculer"
  },
  {
    "id": "4D2-3",
    "chapterId": "4D2",
    "tier": 3,
    "title": "Expérience à deux épreuves (pièces)",
    "statement": "On lance deux pièces de monnaie équilibrées consécutivement. Quelle est la probabilité d'obtenir deux fois « Pile » ?",
    "type": "mcq",
    "options": [
      "1/4",
      "1/2",
      "2/4",
      "1/3"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : les 4 issues équiprobables sont (P,P), (P,F), (F,P), (F,F). P(P,P) = 1/4 = 0,25.",
      "Erreur fréquente : 1/2 est la probabilité pour une seule pièce.",
      "2/4 = 1/2.",
      "Erreur de dénombrement."
    ],
    "hint1": "Dresse la liste des 4 issues possibles : (P,P), (P,F), (F,P), (F,F).",
    "solution": "$$P(\\text{Pile, Pile}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$",
    "skill": "Calculer"
  },
  {
    "id": "4D2-4",
    "chapterId": "4D2",
    "tier": 4,
    "title": "Défi : Tirage avec remise",
    "statement": "Une urne contient 2 boules vertes et 3 boules blanches. On tire successivement 2 boules avec remise. Quelle est la probabilité de tirer 2 boules blanches sous forme d'une fraction irréductible ?",
    "type": "exact",
    "answer": "9/25",
    "placeholder": "Ex: 9/25",
    "hint1": "Probabilité au premier tirage : $\\frac{3}{5}$. Même chose au deuxième tirage.",
    "solution": "$$P(\\text{Blanche, Blanche}) = \\frac{3}{5} \\times \\frac{3}{5} = \\frac{9}{25}$$",
    "skill": "Calculer"
  }
],
  "4P2": [
  {
    "id": "4P2-1",
    "chapterId": "4P2",
    "tier": 1,
    "title": "Calcul direct d'une image",
    "statement": "Soit la fonction définie par $f(x) = 5x - 7$. Calculer l'image de 4 par la fonction $f$ :",
    "type": "exact",
    "answer": "13",
    "placeholder": "Ex: 13",
    "hint1": "Remplace $x$ par 4 dans l'expression : $5 \\times 4 - 7$.",
    "solution": "$$f(4) = 5 \\times 4 - 7 = 20 - 7 = 13$$",
    "skill": "Calculer"
  },
  {
    "id": "4P2-2",
    "chapterId": "4P2",
    "tier": 2,
    "title": "Programme de calcul et fonction",
    "statement": "On donne le programme : « Choisir un nombre, lui ajouter 3, multiplier le résultat par 4 ». Si l'on choisit le nombre 5 au départ, quel résultat obtient-on ?",
    "type": "exact",
    "answer": "32",
    "placeholder": "Ex: 32",
    "hint1": "Calcul : $(5 + 3) \\times 4$.",
    "solution": "$$(5 + 3) \\times 4 = 8 \\times 4 = 32$$",
    "skill": "Calculer"
  },
  {
    "id": "4P2-3",
    "chapterId": "4P2",
    "tier": 3,
    "title": "Recherche d'un antécédent",
    "statement": "Soit la fonction $g(x) = 3x + 5$. Déterminer l'antécédent de 26 par la fonction $g$ :",
    "type": "exact",
    "answer": "7",
    "placeholder": "Ex: 7",
    "hint1": "Résous l'équation $3x + 5 = 26$.",
    "solution": "$$3x + 5 = 26 \\implies 3x = 21 \\implies x = \\frac{21}{3} = 7$$",
    "skill": "Résoudre"
  },
  {
    "id": "4P2-4",
    "chapterId": "4P2",
    "tier": 4,
    "title": "Défi : Image d'un nombre négatif avec carré",
    "statement": "Soit la fonction $h(x) = x^2 - 10$. Calculer la valeur de $h(-4)$ :",
    "type": "exact",
    "answer": "6",
    "placeholder": "Ex: 6",
    "hint1": "Attention au carré d'un nombre négatif : $(-4)^2 = +16$.",
    "solution": "$$h(-4) = (-4)^2 - 10 = 16 - 10 = 6$$",
    "skill": "Calculer"
  }
],
  "4A1": [
  {
    "id": "4A1-1",
    "chapterId": "4A1",
    "tier": 1,
    "title": "Valeur d'une variable après affectation",
    "statement": "Dans un script Scratch : « mettre V à 8 », puis « ajouter 7 à V ». Quelle est la valeur finale de la variable V ?",
    "type": "exact",
    "answer": "15",
    "placeholder": "Ex: 15",
    "hint1": "La variable commence à 8 puis augmente de 7.",
    "solution": "$$V = 8 + 7 = 15$$",
    "skill": "Calculer"
  },
  {
    "id": "4A1-2",
    "chapterId": "4A1",
    "tier": 2,
    "title": "Instruction conditionnelle « Si ... alors ... sinon »",
    "statement": "On exécute le bloc : « Si N > 10 alors mettre R à 20 sinon mettre R à 5 ». Si la variable N vaut 7, quelle sera la valeur de R ?",
    "type": "exact",
    "answer": "5",
    "placeholder": "Ex: 5",
    "hint1": "Le test 7 > 10 est FAUX, donc on exécute la branche « sinon ».",
    "solution": "Comme 7 n'est pas supérieur à 10, la condition est fausse et la variable $R$ prend la valeur 5.",
    "skill": "Raisonner"
  },
  {
    "id": "4A1-3",
    "chapterId": "4A1",
    "tier": 3,
    "title": "Programme de calcul Scratch",
    "statement": "Un script Scratch demande un nombre $x$. Si $x \\ge 0$, il calcule $2x$, sinon il calcule $x + 10$. Quelle est la valeur de sortie pour $x = -4$ ?",
    "type": "exact",
    "answer": "6",
    "placeholder": "Ex: 6",
    "hint1": "$-4 < 0$, donc la condition $x \\ge 0$ est fausse. Calcule $-4 + 10$.",
    "solution": "Comme $-4 < 0$, on effectue le calcul de la branche sinon : $-4 + 10 = 6$.",
    "skill": "Calculer"
  },
  {
    "id": "4A1-4",
    "chapterId": "4A1",
    "tier": 4,
    "title": "Défi : Boucle conditionnelle avec compteur",
    "statement": "Compteur commence à 0. On exécute : « répéter jusqu'à Compteur >= 25 : ajouter 6 à Compteur ». Quelle est la valeur finale de Compteur à la fin de la boucle ?",
    "type": "exact",
    "answer": "30",
    "placeholder": "Ex: 30",
    "hint1": "Valeurs successives : 0, 6, 12, 18, 24, 30. La boucle s'arrête dès que la condition est vraie.",
    "solution": "À 24, la condition $24 \\ge 25$ est fausse, on ajoute encore 6 : Compteur passe à 30 ($30 \\ge 25$ est vrai, la boucle s'arrête).",
    "skill": "Raisonner"
  }
]
};

window.MATHS_WORKSHEETS_4E = {
  "4G1": [
    {
        "id": "4G1-devoir_pythagore",
        "filename": "Fiche_4e_Theoreme_Pythagore.md",
        "type": "devoir_entrainement",
        "title": "Fiche 4ème : Le Théorème de Pythagore & Applications",
        "statement": `# Classe de 4ème — Mathématiques
## Fiche d'entraînement : Théorème de Pythagore et Réciproque

### Exercice 1 : Calculs de longueurs (6 points)
1. Soit $ABC$ un triangle rectangle en $B$ tel que $AB = 4{,}8\\text{ cm}$ et $BC = 6{,}4\\text{ cm}$. Calculer $AC$.
2. Soit $MNP$ rectangle en $M$ tel que $NP = 15\\text{ cm}$ et $MN = 9\\text{ cm}$. Calculer $MP$.

### Exercice 2 : Réciproque et contraposée (4 points)
Un maçon veut vérifier si l'angle d'un mur est bien droit. Il mesure une distance de $60\\text{ cm}$ sur un mur, $80\\text{ cm}$ sur l'autre mur, et constate que la diagonale mesure $100\\text{ cm}$.
L'angle est-il parfaitement droit ? Rédiger la démonstration avec rigueur.

---
## Corrigé détaillé

### Exercice 1
1. Le triangle $ABC$ est rectangle en $B$. D'après le théorème de Pythagore :
$$AC^2 = AB^2 + BC^2 = 4{,}8^2 + 6{,}4^2 = 23{,}04 + 40{,}96 = 64$$
Comme $AC > 0$, $AC = \\sqrt{64} = 8\\text{ cm}$.

2. Le triangle $MNP$ est rectangle en $M$ :
$$NP^2 = MN^2 + MP^2 \\implies MP^2 = NP^2 - MN^2 = 15^2 - 9^2 = 225 - 81 = 144$$
Comme $MP > 0$, $MP = \\sqrt{144} = 12\\text{ cm}$.

### Exercice 2
Le plus grand côté est $100\\text{ cm}$.
• $100^2 = 10\\,000$
• $60^2 + 80^2 = 3\\,600 + 6\\,400 = 10\\,000$
On constate que $100^2 = 60^2 + 80^2$. D'après la réciproque du théorème de Pythagore, le triangle formé est rectangle. Le mur forme bien un angle droit.`,
        "solution": ""
    }
],
  "4N1": [
    {
        "id": "4N1-devoir_relatifs",
        "filename": "Fiche_4e_Relatifs_Operations.md",
        "type": "devoir_entrainement",
        "title": "Fiche 4ème : Multiplication et division des relatifs",
        "statement": `# Classe de 4ème — Mathématiques
## Fiche d'entraînement : Règle des signes et priorités

### Exercice 1 : Calculs directs (5 points)
Calculer les produits et quotients suivants :
1. $A = (-6) \\times (-7)$
2. $B = (-8) \\times (+5)$
3. $C = \\frac{-36}{-4}$
4. $D = \\frac{42}{-7}$
5. $E = (-2) \\times (-3) \\times (-5)$

### Exercice 2 : Enchaînement d'opérations (5 points)
Calculer en respectant les priorités opératoires :
1. $F = 15 - 4 \\times (-3)$
2. $G = (-5) \\times [12 - (-3) \\times 4]$

---
## Corrigé détaillé

### Exercice 1
1. $A = +42$ (produit de deux négatifs = positif).
2. $B = -40$ (signes contraires = négatif).
3. $C = +9$.
4. $D = -6$.
5. $E = (-2 \\times -3) \\times -5 = 6 \\times -5 = -30$ (3 facteurs négatifs = résultat négatif).

### Exercice 2
1. $F = 15 - (-12) = 15 + 12 = 27$.
2. Intérieur du crochet : $12 - (-12) = 12 + 12 = 24$.
$G = (-5) \\times 24 = -120$.`,
        "solution": ""
    }
],
  "4N5": [
    {
        "id": "4N5-devoir_equations",
        "filename": "Fiche_4e_Equations.md",
        "type": "devoir_entrainement",
        "title": "Fiche 4ème : Calcul littéral et équations",
        "statement": `# Classe de 4ème — Mathématiques
## Fiche d'entraînement : Équations du premier degré

### Exercice 1 : Résolutions d'équations (6 points)
Résoudre les équations suivantes d'inconnue $x$ :
1. $3x + 7 = 22$
2. $5x - 8 = -23$
3. $7x + 2 = 4x + 17$

### Exercice 2 : Problème à mettre en équation (4 points)
Le triple d'un nombre augmenté de 5 est égal à ce nombre augmenté de 19.
1. Traduire cette situation par une équation.
2. Déterminer la valeur de ce nombre.

---
## Corrigé détaillé

### Exercice 1
1. $3x + 7 = 22 \\implies 3x = 22 - 7 = 15 \\implies x = \\frac{15}{3} = 5$.
2. $5x - 8 = -23 \\implies 5x = -23 + 8 = -15 \\implies x = \\frac{-15}{5} = -3$.
3. $7x - 4x = 17 - 2 \\implies 3x = 15 \\implies x = 5$.

### Exercice 2
1. Soit $x$ le nombre cherché : $3x + 5 = x + 19$.
2. $3x - x = 19 - 5 \\implies 2x = 14 \\implies x = 7$.
Le nombre cherché est 7.`,
        "solution": ""
    }
]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_4E);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_4E);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_4E);
