/**
 * Données pédagogiques officielles de la classe de 4ème (Cycle 4, 2ème année)
 * Conforme au Bulletin Officiel de l'Éducation Nationale et à la progression de maths-et-tiques.fr
 */

window.MATHS_COURSES_4E = {
  "4N1": {
    "title": "4N1 : Opérations sur les nombres relatifs (règle des signes)",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Multiplier deux nombres relatifs en appliquant la règle des signes.",
      "Diviser deux nombres relatifs.",
      "Calculer le signe d'un produit comportant plusieurs facteurs relatifs.",
      "Enchaîner les opérations avec des nombres relatifs en respectant les priorités."
    ],
    "keyPoints": [
      {
        "title": "1. Règle des signes pour la multiplication et la division",
        "content": "• Le produit ou quotient de deux nombres de **même signe** est toujours **positif (+)** :\n$$(+3) \\times (+4) = +12 \\quad \\text{et} \\quad (-3) \\times (-4) = +12$$\n$$\\frac{-15}{-3} = +5$$\n• Le produit ou quotient de deux nombres de **signes contraires** est toujours **négatif (-)** :\n$$(+5) \\times (-6) = -30 \\quad \\text{et} \\quad \\frac{-24}{+4} = -6$$"
      },
      {
        "title": "2. Produit de plusieurs facteurs",
        "content": "Dans un produit de plusieurs facteurs non nuls :\n• Si le nombre de facteurs négatifs est **pair**, le produit est **positif**.\n• Si le nombre de facteurs négatifs est **impair**, le produit est **négatif**.\nExemple : $(-2) \\times (-3) \\times (-5)$ compte 3 facteurs négatifs (impair) $\\implies$ résultat négatif : $-30$."
      },
      {
        "title": "3. Carré d'un nombre négatif",
        "content": "Attention aux parenthèses !\n• $(-5)^2 = (-5) \\times (-5) = +25$ (le carré d'un nombre est toujours positif).\n• $-5^2 = -(5 \\times 5) = -25$ (le carré ne porte que sur le 5)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un enchaînement d'opérations relatives",
        "example": "Calculer $A = -5 + 3 \\times (-4) - (-10) \\div 2$.",
        "steps": [
          "**Étape 1 (Multiplications et divisions)** : $3 \\times (-4) = -12$ et $(-10) \\div 2 = -5$.",
          "**Étape 2** : L'expression devient $A = -5 + (-12) - (-5)$.",
          "**Étape 3 (Soustraction en addition)** : $A = -5 - 12 + 5$.",
          "**Étape 4 (Simplification)** : $-5 + 5 = 0$, il reste $A = -12$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre addition et multiplication ! $(-3) + (-4) = -7$, mais $(-3) \\times (-4) = +12$ !",
      "⚠️ Ne pas confondre $(-4)^2 = 16$ et $-4^2 = -16$."
    ],
    "flashcards": [
      {
        "q": "Quel est le résultat de $(-7) \\times (-8)$ ?",
        "a": "$+56$ (deux nombres négatifs ont un produit positif)."
      },
      {
        "q": "Quel est le signe de $(-1) \\times (-2) \\times (-3) \\times (-4) \\times (-5)$ ?",
        "a": "Négatif car il y a 5 facteurs négatifs (5 est impair)."
      }
    ]
  },
  "4N2": {
    "title": "4N2 : Fractions et nombres rationnels : 4 opérations",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Calculer le produit de fractions de nombres relatifs.",
      "Définir l'inverse d'un nombre non nul et noter l'inverse d'une fraction.",
      "Diviser des fractions en multipliant par l'inverse.",
      "Calculer des expressions combinant additions, soustractions, produits et quotients."
    ],
    "keyPoints": [
      {
        "title": "1. Multiplication de fractions",
        "content": "On multiplie les numérateurs entre eux et les dénominateurs entre eux, **en simplifiant avant d'effectuer les calculs** :\n$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$\nExemple : $\\frac{-4}{9} \\times \\frac{3}{8} = -\\frac{4 \\times 3}{(3 \\times 3) \\times (4 \\times 2)} = -\\frac{1}{6}$."
      },
      {
        "title": "2. Inverse d'un nombre non nul",
        "content": "Deux nombres sont inverses si leur produit vaut 1 : $x \\times \\frac{1}{x} = 1$.\n• L'inverse de la fraction non nulle $\\frac{a}{b}$ est la fraction $\\frac{b}{a}$.\n• L'inverse de $-\\frac{3}{7}$ est $-\\frac{7}{3}$ (attention : l'inverse conserve le signe !)."
      },
      {
        "title": "3. Division de fractions",
        "content": "Diviser par une fraction non nulle revient à **multiplier par son inverse** :\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Diviser deux fractions",
        "example": "Calculer $D = \\frac{5}{12} \\div \\frac{15}{8}$.",
        "steps": [
          "**Étape 1** : Transformer en multiplication par l'inverse : $D = \\frac{5}{12} \\times \\frac{8}{15}$.",
          "**Étape 2 (Décomposition)** : $\\frac{5 \\times (4 \\times 2)}{(4 \\times 3) \\times (5 \\times 3)}$.",
          "**Étape 3 (Simplification)** : On simplifie par 5 et par 4 : il reste $D = \\frac{2}{3 \\times 3} = \\frac{2}{9}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre **opposé** (changement de signe) et **inverse** (inversion numérateur/dénominateur) ! L'inverse de $-2$ est $-\\frac{1}{2}$, pas $+2$ !"
    ],
    "flashcards": [
      {
        "q": "Quel est l'inverse de $-\\frac{5}{3}$ ?",
        "a": "$-\\frac{3}{5}$ (on inverse numérateur et dénominateur en conservant le signe)."
      },
      {
        "q": "Comment calcule-t-on $\\frac{2}{3} \\div \\frac{5}{7}$ ?",
        "a": "On multiplie par l'inverse : $\\frac{2}{3} \\times \\frac{7}{5} = \\frac{14}{15}$."
      }
    ]
  },
  "4N3": {
    "title": "4N3 : Puissances d'un nombre et puissances de 10",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Définir a^n pour a nombre relatif et n entier naturel positif.",
      "Appliquer les formules sur les puissances : a^n × a^m, (a^n)^m, (a × b)^n.",
      "Maîtriser les puissances de 10 (10^n et 10^(-n)) et les préfixes usuels."
    ],
    "keyPoints": [
      {
        "title": "1. Définition",
        "content": "Pour $n \\ge 1$ entier, $a^n = \\underbrace{a \\times a \\times \\dots \\times a}_{n \\text{ facteurs}}$.\nPar convention : pour $a \\neq 0$, $a^0 = 1$ et $a^1 = a$."
      },
      {
        "title": "2. Propriétés de calcul",
        "content": "Pour $a, b$ non nuls et $n, m$ entiers :\n• $a^n \\times a^m = a^{n+m}$\n• $\\frac{a^n}{a^m} = a^{n-m}$\n• $(a^n)^m = a^{n \\times m}$\n• $(a \\times b)^n = a^n \\times b^n$"
      },
      {
        "title": "3. Puissances de 10",
        "content": "$10^n = 1\\underbrace{00\\dots0}_{n \\text{ zéros}}$. Ex : $10^3 = 1000$ (kilo, k), $10^6 = 1\\,000\\,000$ (méga, M), $10^9$ (giga, G)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire sous la forme d'une seule puissance",
        "example": "Écrire $P = 5^3 \\times 5^4$ sous forme d'une puissance de 5.",
        "steps": [
          "**Étape 1** : On applique la formule $a^n \\times a^m = a^{n+m}$.",
          "**Étape 2** : $P = 5^{3+4} = 5^7$."
        ]
      }
    ],
    "traps": [
      "⚠️ $2^3 = 2 \\times 2 \\times 2 = 8$, ce n'est PAS $2 \\times 3 = 6$ !"
    ],
    "flashcards": [
      {
        "q": "Combien vaut $3^4$ ?",
        "a": "$3 \\times 3 \\times 3 \\times 3 = 9 \\times 9 = 81$."
      },
      {
        "q": "Simplifier $7^5 \\times 7^2$.",
        "a": "$7^{5+2} = 7^7$."
      }
    ]
  },
  "4N4": {
    "title": "4N4 : Racines carrées et carrés parfaits",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Comprendre la définition de la racine carrée d'un nombre positif.",
      "Connaître les carrés parfaits des entiers de 0 à 12 (et leurs racines).",
      "Encadrer une racine carrée entre deux entiers consécutifs."
    ],
    "keyPoints": [
      {
        "title": "1. Définition",
        "content": "Pour tout nombre positif $a$, la **racine carrée** de $a$, notée $\\sqrt{a}$, est le **nombre positif** dont le carré vaut $a$ :\n$$(\\sqrt{a})^2 = a \\quad \\text{avec } a \\ge 0$$\nExemple : $\\sqrt{49} = 7$ car $7^2 = 49$ et $7 \\ge 0$."
      },
      {
        "title": "2. Carrés parfaits indispensables (0 à 12)",
        "content": "• $0^2 = 0 \\implies \\sqrt{0} = 0$\n• $1^2 = 1 \\implies \\sqrt{1} = 1$\n• $2^2 = 4 \\implies \\sqrt{4} = 2$\n• $3^2 = 9 \\implies \\sqrt{9} = 3$\n• $4^2 = 16 \\implies \\sqrt{16} = 4$\n• $5^2 = 25 \\implies \\sqrt{25} = 5$\n• $6^2 = 36 \\implies \\sqrt{36} = 6$\n• $7^2 = 49 \\implies \\sqrt{49} = 7$\n• $8^2 = 64 \\implies \\sqrt{64} = 8$\n• $9^2 = 81 \\implies \\sqrt{81} = 9$\n• $10^2 = 100 \\implies \\sqrt{100} = 10$\n• $11^2 = 121 \\implies \\sqrt{121} = 11$\n• $12^2 = 144 \\implies \\sqrt{144} = 12$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Encadrer une racine carrée",
        "example": "Encadrer $\\sqrt{53}$ entre deux entiers consécutifs.",
        "steps": [
          "**Étape 1** : On cherche les carrés parfaits encadrant 53 : $49 < 53 < 64$.",
          "**Étape 2** : Comme la fonction racine conserve l'ordre : $\\sqrt{49} < \\sqrt{53} < \\sqrt{64}$.",
          "**Étape 3** : On conclut : $7 < \\sqrt{53} < 8$."
        ]
      }
    ],
    "traps": [
      "⚠️ Un nombre sous une racine carrée doit toujours être positif ou nul. $\\sqrt{-9}$ n'existe pas !",
      "⚠️ La racine carrée est toujours un nombre positif : $\\sqrt{25} = 5$ (et non $-5$)."
    ],
    "flashcards": [
      {
        "q": "Que vaut $\\sqrt{81}$ ?",
        "a": "$9$ car $9^2 = 81$ et $9 > 0$."
      },
      {
        "q": "Entre quels entiers se situe $\\sqrt{30}$ ?",
        "a": "Entre 5 et 6 car $5^2 = 25 < 30 < 6^2 = 36$."
      }
    ]
  },
  "4N5": {
    "title": "4N5 : Calcul littéral et résolution d'équations du premier degré",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Développer une expression avec la distributivité simple et réduire.",
      "Résoudre des équations du premier degré du type ax + b = c.",
      "Résoudre des équations du type ax + b = cx + d.",
      "Mettre en équation un problème concret et interpréter la solution."
    ],
    "keyPoints": [
      {
        "title": "1. Développer et réduire",
        "content": "• Distributivité : $k(a+b) = ka + kb$.\n• Réduire : regrouper les termes de même nature ($x^2$ avec $x^2$, $x$ avec $x$, nombres avec nombres).\nExemple : $3(2x - 5) + 4x = 6x - 15 + 4x = 10x - 15$."
      },
      {
        "title": "2. Résolution d'équations",
        "content": "Une équation est une égalité comportant une lettre inconnue (souvent $x$). Résoudre l'équation, c'est trouver la valeur de $x$ qui rend l'égalité vraie.\n**Règle d'or** : On peut ajouter, soustraire, multiplier ou diviser par un même nombre non nul des deux côtés de l'égalité sans en changer les solutions."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre ax + b = cx + d",
        "example": "Résoudre $5x - 3 = 2x + 9$.",
        "steps": [
          "**Étape 1 (Isoler les x à gauche)** : On soustrait $2x$ des deux côtés $\\implies 3x - 3 = 9$.",
          "**Étape 2 (Isoler les constantes à droite)** : On ajoute 3 des deux côtés $\\implies 3x = 12$.",
          "**Étape 3 (Division)** : On divise par 3 $\\implies x = \\frac{12}{3} = 4$.",
          "**Étape 4 (Conclusion)** : La solution de l'équation est $4$."
        ]
      }
    ],
    "traps": [
      "⚠️ Lors du passage d'un terme de l'autre côté de l'égalité, son signe change (l'addition devient soustraction) : $x + 4 = 10 \\implies x = 10 - 4 = 6$."
    ],
    "flashcards": [
      {
        "q": "Résoudre $3x = 15$.",
        "a": "$x = \\frac{15}{3} = 5$."
      },
      {
        "q": "Résoudre $x - 7 = 11$.",
        "a": "$x = 11 + 7 = 18$."
      }
    ]
  },
  "4G1": {
    "title": "4G1 : Théorème de Pythagore, réciproque et contraposée",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Connaître l'énoncé du théorème de Pythagore dans un triangle rectangle.",
      "Calculer la longueur de l'hypoténuse.",
      "Calculer la longueur d'un côté de l'angle droit.",
      "Utiliser la réciproque pour démontrer qu'un triangle est rectangle.",
      "Utiliser la contraposée pour démontrer qu'un triangle n'est pas rectangle."
    ],
    "keyPoints": [
      {
        "title": "1. Le Théorème de Pythagore (Calcul de longueur)",
        "content": "Dans un triangle rectangle, le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés :\n$$\\text{Si } ABC \\text{ est rectangle en } A, \\quad \\text{alors } BC^2 = AB^2 + AC^2$$"
      },
      {
        "title": "2. La Réciproque de Pythagore (Démontrer qu'un triangle est rectangle)",
        "content": "Dans un triangle $ABC$, si le carré du plus grand côté est égal à la somme des carrés des deux autres côtés ($BC^2 = AB^2 + AC^2$), alors **le triangle $ABC$ est rectangle en $A$**."
      },
      {
        "title": "3. La Contraposée de Pythagore (Démontrer qu'il n'est pas rectangle)",
        "content": "Si le carré du plus grand côté **n'est pas égal** à la somme des carrés des deux autres côtés ($BC^2 \\neq AB^2 + AC^2$), alors **le triangle n'est pas rectangle**."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer l'hypoténuse avec rédaction complète",
        "example": "Soit ABC rectangle en A avec AB = 6 cm et AC = 8 cm. Calculer BC.",
        "steps": [
          "**Étape 1 (Données)** : Le triangle $ABC$ est rectangle en $A$.",
          "**Étape 2 (Théorème)** : D'après le théorème de Pythagore : $BC^2 = AB^2 + AC^2$.",
          "**Étape 3 (Calculs)** : $BC^2 = 6^2 + 8^2 = 36 + 64 = 100$.",
          "**Étape 4 (Racine carrée)** : Comme $BC > 0$, $BC = \\sqrt{100} = 10$ cm."
        ]
      },
      {
        "title": "Méthode : Réciproque de Pythagore (Démonstration)",
        "example": "Un triangle a pour côtés 5 cm, 12 cm et 13 cm. Est-il rectangle ?",
        "steps": [
          "**Étape 1** : Le plus grand côté est 13 cm. Calcul séparé : $13^2 = 169$.",
          "**Étape 2** : Somme des deux autres carrés : $5^2 + 12^2 = 25 + 144 = 169$.",
          "**Étape 3 (Comparaison)** : On constate que $13^2 = 5^2 + 12^2$.",
          "**Étape 4 (Conclusion)** : D'après la réciproque du théorème de Pythagore, le triangle est rectangle."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour calculer un côté de l'angle droit, on **soustrait** les carrés : $AB^2 = BC^2 - AC^2$ !",
      "⚠️ Pour la réciproque, **toujours calculer séparément** le carré du plus grand côté et la somme des deux autres, sans écrire l'égalité avant d'avoir comparé !"
    ],
    "flashcards": [
      {
        "q": "Quel est le plus grand côté d'un triangle rectangle ?",
        "a": "L'hypoténuse (le côté opposé à l'angle droit)."
      },
      {
        "q": "Si $ABC$ est rectangle en $C$, quelle est l'égalité de Pythagore ?",
        "a": "L'hypoténuse est $[AB]$, donc $AB^2 = CA^2 + CB^2$."
      }
    ]
  },
  "4D1": {
    "title": "4D1 : Statistiques : moyenne pondérée, médiane et étendue",
    "domain": "Organisation de Données",
    "objectives": [
      "Calculer une moyenne pondérée par les effectifs ou coefficients.",
      "Déterminer et interpréter la médiane d'une série statistique discrète.",
      "Calculer et interpréter l'étendue d'une série.",
      "Comprendre l'effet des valeurs extrêmes sur la moyenne et la médiane."
    ],
    "keyPoints": [
      {
        "title": "1. Moyenne pondérée",
        "content": "$$\\bar{x} = \\frac{\\sum (\\text{valeur} \\times \\text{effectif})}{\\text{effectif total}}$$"
      },
      {
        "title": "2. Médiane",
        "content": "La **médiane** $M$ partage la série préalablement rangée dans l'ordre croissant en deux groupes de même effectif :\n• Au moins 50% des valeurs sont inférieures ou égales à $M$.\n• Au moins 50% des valeurs sont supérieures ou égales à $M$."
      },
      {
        "title": "3. Étendue",
        "content": "$$\\text{Étendue} = \\text{Valeur maximale} - \\text{Valeur minimale}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver la médiane d'une série",
        "example": "Trouver la médiane des notes : 8, 12, 14, 15, 17.",
        "steps": [
          "**Étape 1** : La série est déjà ordonnée (5 valeurs, effectif impair).",
          "**Étape 2** : La valeur du milieu est la 3ème valeur : 14.",
          "**Étape 3** : La médiane est donc 14 (la moitié des élèves a eu 14 ou moins, l'autre moitié 14 ou plus)."
        ]
      }
    ],
    "traps": [
      "⚠️ Il faut TOUJOURS ranger les valeurs dans l'ordre croissant avant de chercher la médiane !"
    ],
    "flashcards": [
      {
        "q": "Quelle est la différence entre la valeur maximale et minimale d'une série ?",
        "a": "L'étendue de la série."
      }
    ]
  },
  "4G2": {
  "title": "4G2 : Triangle rectangle, cercle circonscrit et droite des milieux",
  "domain": "Espace et Géométrie",
  "objectives": [
    "Caractériser le triangle rectangle par son cercle circonscrit (hypoténuse = diamètre).",
    "Utiliser la médiane issue de l'angle droit ($AM = \\frac{BC}{2}$).",
    "Appliquer le théorème de la droite des milieux dans un triangle."
  ],
  "keyPoints": [
    {
      "title": "1. Triangle rectangle et cercle circonscrit",
      "content": "• **Propriété directe** : Si un triangle est rectangle, alors son cercle circonscrit a pour diamètre son hypoténuse. Le centre du cercle est le milieu de l'hypoténuse.\n• **Réciproque** : Si un triangle est inscrit dans un cercle ayant pour diamètre l'un de ses côtés, alors ce triangle est rectangle (l'hypoténuse est ce diamètre)."
    },
    {
      "title": "2. Médiane issue de l'angle droit",
      "content": "Dans un triangle $ABC$ rectangle en $A$, la médiane $[AM]$ relative à l'hypoténuse $[BC]$ a pour longueur la moitié de l'hypoténuse :\n$$AM = \\frac{BC}{2}$$"
    },
    {
      "title": "3. Théorème de la droite des milieux",
      "content": "Dans un triangle, le segment qui joint les milieux de deux côtés est parallèle au troisième côté et sa longueur est égale à la **moitié** de celle du troisième côté :\n$$MN = \\frac{1}{2} BC$$"
    }
  ],
  "methods": [
    {
      "title": "Méthode : Démontrer qu'un triangle est rectangle avec un cercle",
      "example": "Le triangle $EFG$ est inscrit dans un cercle de diamètre $[EF]$. Démontrer qu'il est rectangle.",
      "steps": [
        "**Données** : Le triangle $EFG$ est inscrit dans le cercle de diamètre $[EF]$.",
        "**Propriété** : Si un triangle est inscrit dans un cercle dont un diamètre est l'un de ses côtés, alors il est rectangle.",
        "**Conclusion** : Donc $EFG$ est un triangle rectangle en $G$."
      ]
    }
  ],
  "traps": [
    "⚠️ Le sommet de l'angle droit est TOUJOURS le point qui n'appartient pas au diamètre !",
    "⚠️ La droite des milieux ne s'applique que si l'on sait au départ que les points sont les milieux."
  ],
  "flashcards": [
    {
      "q": "Où se situe le centre du cercle circonscrit à un triangle rectangle ?",
      "a": "Au milieu de son hypoténuse."
    },
    {
      "q": "Dans un triangle rectangle d'hypoténuse 12 cm, que vaut la médiane issue de l'angle droit ?",
      "a": "$\\frac{12}{2} = 6\\text{ cm}$."
    }
  ]
},
  "4G3": {
  "title": "4G3 : Translations et transformations du plan",
  "domain": "Espace et Géométrie",
  "objectives": [
    "Comprendre la notion de translation (glissement sans déformation ni rotation).",
    "Caractériser une translation par sa direction, son sens et sa longueur (vecteur).",
    "Construire l'image d'une figure par une translation et utiliser ses propriétés de conservation."
  ],
  "keyPoints": [
    {
      "title": "1. Définition de la translation",
      "content": "La translation qui transforme $A$ en $B$ associe à tout point $C$ le point $D$ tel que le quadrilatère $ABDC$ soit un **parallélogramme** (éventuellement aplati).\nElle correspond à un glissement caractérisé par :\n• Une **direction** (la droite $(AB)$),\n• Un **sens** (de $A$ vers $B$),\n• Une **longueur** (la distance $AB$)."
    },
    {
      "title": "2. Propriétés de conservation",
      "content": "La translation conserve les longueurs, les mesures d'angles, les aires, l'alignement et le parallélisme. La figure image est superposable à la figure d'origine."
    }
  ],
  "methods": [
    {
      "title": "Méthode : Construire l'image d'un point par translation",
      "example": "Construire le point $D$, image de $C$ par la translation qui transforme $A$ en $B$.",
      "steps": [
        "On trace la parallèle à $(AB)$ passant par $C$.",
        "Sur cette droite, on reporte la distance $AB$ à partir de $C$ dans le même sens que de $A$ vers $B$.",
        "On vérifie que $ABDC$ forme un parallélogramme."
      ]
    }
  ],
  "traps": [
    "⚠️ Attention à l'ordre des sommets du parallélogramme : si la translation envoie $A$ sur $B$ et $C$ sur $D$, le parallélogramme est $ABDC$ (et non $ABCD$) !",
    "⚠️ Ne pas confondre la direction (la pente de la droite) et le sens (vers le haut, vers le bas...)."
  ],
  "flashcards": [
    {
      "q": "Quels sont les 3 éléments qui définissent une translation ?",
      "a": "Une direction, un sens et une longueur."
    },
    {
      "q": "Une translation modifie-t-elle l'aire d'une figure ?",
      "a": "Non, elle conserve parfaitement les aires."
    }
  ]
},
  "4G4": {
  "title": "4G4 : Espace : pyramides, cônes de révolution et volumes",
  "domain": "Espace et Géométrie",
  "objectives": [
    "Identifier et décrire une pyramide (sommet, base polygonale, faces latérales triangulaires).",
    "Identifier et décrire un cône de révolution (sommet, base circulaire, génératrice).",
    "Calculer le volume d'une pyramide et d'un cône : $V = \\frac{1}{3} B \\times h$."
  ],
  "keyPoints": [
    {
      "title": "1. Pyramide",
      "content": "Une pyramide est un polyèdre dont une face est un polygone (la base) et dont les autres faces sont des triangles ayant un sommet commun (le sommet de la pyramide). La hauteur est le segment perpendiculaire à la base issu du sommet."
    },
    {
      "title": "2. Cône de révolution",
      "content": "Un cône de révolution est obtenu en faisant tourner un triangle rectangle autour d'un des côtés de l'angle droit. Sa base est un disque de rayon $R$ et sa hauteur $h$ est perpendiculaire à la base."
    },
    {
      "title": "3. Formule du volume (Pyramide et Cône)",
      "content": "$$V = \\frac{1}{3} \\times \\text{Aire de la base} \\times \\text{hauteur} = \\frac{B \\times h}{3}$$\nPour le cône de base de rayon $R$ :\n$$V = \\frac{1}{3} \\times \\pi R^2 \\times h$$"
    }
  ],
  "methods": [
    {
      "title": "Méthode : Calculer le volume d'une pyramide",
      "example": "Calculer le volume d'une pyramide de hauteur $h = 6\\text{ cm}$ dont la base est un rectangle de $5\\text{ cm}$ sur $4\\text{ cm}$.",
      "steps": [
        "**Aire de la base** : $B = 5 \\times 4 = 20\\text{ cm}^2$.",
        "**Volume** : $V = \\frac{1}{3} \\times B \\times h = \\frac{1}{3} \\times 20 \\times 6 = \\frac{120}{3} = 40\\text{ cm}^3$."
      ]
    }
  ],
  "traps": [
    "⚠️ Ne pas oublier le facteur $\\frac{1}{3}$ ! Le volume d'une pyramide est trois fois plus petit que celui d'un prisme de même base et même hauteur.",
    "⚠️ La hauteur doit être perpendiculaire à la base (ce n'est pas la longueur d'une arête latérale)."
  ],
  "flashcards": [
    {
      "q": "Quelle est la formule du volume d'une pyramide ?",
      "a": "$V = \\frac{1}{3} \\times B \\times h$."
    },
    {
      "q": "Que vaut le volume d'un cône de base d'aire 30 cm² et de hauteur 5 cm ?",
      "a": "$\\frac{30 \\times 5}{3} = 50\\text{ cm}^3$."
    }
  ]
},
  "4D2": {
  "title": "4D2 : Probabilités : événements contraires et 2 épreuves",
  "domain": "Organisation et Gestion de Données",
  "objectives": [
    "Définir l'événement contraire $\\bar{A}$ (« non $A$ ») et utiliser la formule $P(\\bar{A}) = 1 - P(A)$.",
    "Représenter des expériences aléatoires à deux épreuves à l'aide d'un arbre ou d'un tableau.",
    "Calculer des probabilités à deux épreuves par le principe multiplicatif."
  ],
  "keyPoints": [
    {
      "title": "1. Événement contraire",
      "content": "L'événement contraire de $A$, noté $\\bar{A}$ ou « non $A$ », est l'événement qui se réalise lorsque $A$ ne se réalise pas. Ses issues sont toutes celles qui ne sont pas dans $A$.\n$$\\mathbf{P(\\bar{A}) = 1 - P(A)}$$"
    },
    {
      "title": "2. Expérience à deux épreuves et arbres",
      "content": "Dans un arbre de probabilités :\n• La somme des probabilités des branches issues d'un même nœud est égale à 1.\n• La probabilité d'une issue composée est le produit des probabilités rencontrées le long du chemin."
    }
  ],
  "methods": [
    {
      "title": "Méthode : Utiliser l'événement contraire",
      "example": "La probabilité de tirer une carte de cœur dans un jeu est $P(C) = \\frac{1}{4}$. Quelle est la probabilité de ne pas tirer de cœur ?",
      "steps": [
        "**Formule** : $P(\\bar{C}) = 1 - P(C)$.",
        "**Calcul** : $P(\\bar{C}) = 1 - \\frac{1}{4} = \\frac{3}{4} = 0,75 = 75\\%$."
      ]
    }
  ],
  "traps": [
    "⚠️ Le contraire de « au moins un » est « aucun » (et non « au plus un ») !",
    "⚠️ Dans un arbre, on multiplie les probabilités le long d'un chemin, on ne les additionne pas."
  ],
  "flashcards": [
    {
      "q": "Si $P(A) = 0,28$, que vaut $P(\\text{non } A)$ ?",
      "a": "$1 - 0,28 = 0,72$."
    },
    {
      "q": "Que vaut la somme de toutes les probabilités des issues d'une expérience ?",
      "a": "Exactement 1."
    }
  ]
},
  "4P1": {
  "title": "4P1 : Proportionnalité, ratios et pourcentages",
  "domain": "Organisation et Gestion de Données",
  "objectives": [
    "Comprendre et utiliser la notion de ratio ($a : b$ ou $a : b : c$).",
    "Partager une quantité selon un ratio donné.",
    "Appliquer des pourcentages d'augmentation et de réduction avec coefficients multiplicateurs."
  ],
  "keyPoints": [
    {
      "title": "1. Notion de ratio",
      "content": "Deux nombres $x$ et $y$ sont dans le ratio $a : b$ (se lit « dans le ratio a pour b ») si :\n$$\\frac{x}{a} = \\frac{y}{b}$$\nPour partager une somme totale $S$ dans le ratio $a : b$, on calcule la valeur d'une part : $\\frac{S}{a + b}$, puis on multiplie par $a$ et par $b$."
    },
    {
      "title": "2. Pourcentages et coefficients",
      "content": "• Augmenter de $t\\%$ revient à multiplier par $(1 + \\frac{t}{100})$.\n• Diminuer de $t\\%$ revient à multiplier par $(1 - \\frac{t}{100})$."
    }
  ],
  "methods": [
    {
      "title": "Méthode : Partager une somme selon un ratio",
      "example": "Partager $120\\text{ €}$ entre Léo et Maya dans le ratio $2 : 3$.",
      "steps": [
        "**Nombre de parts** : $2 + 3 = 5$ parts au total.",
        "**Valeur d'une part** : $\\frac{120}{5} = 24\\text{ €}$.",
        "**Part de Léo** : $2 \\times 24 = 48\\text{ €}$.",
        "**Part de Maya** : $3 \\times 24 = 72\\text{ €}$. (Vérification : $48 + 72 = 120$)."
      ]
    }
  ],
  "traps": [
    "⚠️ Dans un ratio $2 : 3$, il y a 5 parts au total (et non 2 ou 3) !",
    "⚠️ Une hausse de 20% suivie d'une baisse de 20% ne redonne PAS le prix initial : $1,20 \\times 0,80 = 0,96$ (baisse de 4%)."
  ],
  "flashcards": [
    {
      "q": "Combien de parts au total dans le ratio 3 : 4 : 5 ?",
      "a": "$3 + 4 + 5 = 12$ parts."
    },
    {
      "q": "Par quel nombre multiplie-t-on pour une augmentation de 15% ?",
      "a": "$1 + \\frac{15}{100} = 1,15$."
    }
  ]
},
  "4P2": {
  "title": "4P2 : Notion de fonction et programmes de calcul",
  "domain": "Organisation et Gestion de Données",
  "objectives": [
    "Comprendre la notion de fonction comme un processus qui à un nombre associe un unique résultat.",
    "Utiliser le vocabulaire et les notations : $f : x \\mapsto f(x)$, image et antécédent.",
    "Traduire un programme de calcul par une formule littérale."
  ],
  "keyPoints": [
    {
      "title": "1. Définition et notations",
      "content": "Une fonction $f$ est une « machine » mathématique qui prend un nombre $x$ en entrée et renvoie un nombre $f(x)$ en sortie :\n• $f(x)$ est l'**image** de $x$ par $f$.\n• $x$ est un **antécédent** de $f(x)$ par $f$."
    },
    {
      "title": "2. Image et antécédent",
      "content": "L'égalité $f(3) = 7$ se lit :\n• « L'image de 3 par $f$ est 7 » (calcul direct : on remplace $x$ par 3).\n• « 3 est un antécédent de 7 par $f$ » (résolution d'équation : $f(x) = 7$)."
    }
  ],
  "methods": [
    {
      "title": "Méthode : Calculer une image",
      "example": "Soit la fonction $f(x) = 4x - 9$. Calculer l'image de 5.",
      "steps": [
        "On remplace $x$ par 5 dans l'expression de $f(x)$ :",
        "$f(5) = 4 \\times 5 - 9 = 20 - 9 = 11$.",
        "L'image de 5 par $f$ est 11."
      ]
    }
  ],
  "traps": [
    "⚠️ Ne pas confondre image (résultat obtenu en sortie) et antécédent (valeur de départ) !",
    "⚠️ Un nombre a une UNIQUE image, mais peut avoir PLUSIEURS antécédents (ex: $x^2 = 9$ a pour antécédents 3 et -3)."
  ],
  "flashcards": [
    {
      "q": "Si $f(2) = 8$, qui est l'image et qui est l'antécédent ?",
      "a": "8 est l'image de 2, et 2 est un antécédent de 8."
    },
    {
      "q": "Quelle est l'image de 3 par la fonction $f(x) = 2x + 1$ ?",
      "a": "$2 \\times 3 + 1 = 7$."
    }
  ]
},
  "4A1": {
  "title": "4A1 : Algorithmique : conditions et variables Scratch",
  "domain": "Algorithmique et Programmation",
  "objectives": [
    "Créer et manipuler des variables informatiques dans Scratch pour stocker des valeurs.",
    "Utiliser l'instruction conditionnelle « Si <condition> alors ... sinon ... ».",
    "Programmer et tester des conditions logiques et des programmes de calcul."
  ],
  "keyPoints": [
    {
      "title": "1. Les variables dans Scratch",
      "content": "Une **variable** est une case mémoire étiquetée qui stocke une valeur modifiable au cours de l'exécution du programme :\n• « Mettre [variable] à [valeur] » (affectation),\n• « Ajouter [x] à [variable] » (incrémentation)."
    },
    {
      "title": "2. Le bloc conditionnel « Si ... alors ... sinon »",
      "content": "Permet d'orienter le déroulement du script selon qu'une condition logique est vraie ou fausse :\n• Si la condition est VRAIE, le bloc « alors » est exécuté.\n• Si elle est FAUSSE, le bloc « sinon » est exécuté."
    }
  ],
  "methods": [
    {
      "title": "Méthode : Dérouler un algorithme avec variable",
      "example": "Mettre X à 5. Ajouter 3 à X. Mettre X à X * 2. Quelle est la valeur de X ?",
      "steps": [
        "**Initialisation** : $X = 5$.",
        "**Incrémentation** : $X = 5 + 3 = 8$.",
        "**Multiplication** : $X = 8 \\times 2 = 16$.",
        "La valeur finale de la variable $X$ est 16."
      ]
    }
  ],
  "traps": [
    "⚠️ Le bloc « ajouter 1 à X » augmente la variable, alors que « mettre X à 1 » écrase son ancienne valeur !",
    "⚠️ Respecter scrupuleusement l'ordre chronologique des instructions pas à pas."
  ],
  "flashcards": [
    {
      "q": "Quelle est la différence entre « mettre x à 5 » et « ajouter 5 à x » ?",
      "a": "« Mettre » donne la valeur 5, « ajouter » additionne 5 à la valeur actuelle."
    },
    {
      "q": "À quoi sert le bloc « Si ... alors ... sinon » ?",
      "a": "À exécuter des instructions différentes selon qu'une condition est vraie ou fausse."
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
      "hint1": "Au numérateur : $(-24) + (-16) = -40$. Puis $(-40) \\div (-8) = 5$.",
      "hint2": "Ensuite effectue $-3 \\times (-5) = +15$. Enfin $5 + 15$.",
      "solution": "$$C = \\frac{-40}{-8} - (-15) = 5 + 15 = 20$$",
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
      "hint1": "1. Numérateur : $(-4) \\times (-6) \\times (-5) = -120$. Dénominateur : $(-2) \\times 15 = -30$.",
      "hint2": "2. Puissances : $(-3)^2 = 9$ et $(-1)^5 = -1$. Donc $(-3)^2 \\times (-1)^5 = -9$.",
      "solution": "1. Fraction : $\\frac{-120}{-30} = 4$.\n2. Puissances : $(-3)^2 \\times (-1)^5 = 9 \\times (-1) = -9$.\n3. Résultat : $D = 4 - (-9) = 4 + 9 = 13$.",
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
      "hint1": "Numérateur : $\\frac{2}{3} - \\frac{1}{4} = \\frac{8 - 3}{12} = \\frac{5}{12}$.",
      "hint2": "Dénominateur : $\\frac{5}{6} + \\frac{3}{6} = \\frac{8}{6} = \\frac{4}{3}$. Puis $\\frac{5}{12} \\div \\frac{4}{3}$.",
      "solution": "1. Numérateur : $N = \\frac{8 - 3}{12} = \\frac{5}{12}$.\n2. Dénominateur : $D = \\frac{5 + 3}{6} = \\frac{8}{6} = \\frac{4}{3}$.\n3. Quotient : $F = \\frac{5}{12} \\times \\frac{3}{4} = \\frac{15}{48} = \\frac{5}{16}$.",
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
      "hint1": "Au numérateur : $10^5 \\times 10^{-2} = 10^{5 - 2} = 10^3$.",
      "hint2": "Quotient : $10^3 / 10^7 = 10^{3 - 7} = 10^{-4}$.",
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
      "hint1": "Numérateur : $4 \\times 15 = 60$ et $10^7 \\times 10^{-3} = 10^4$. Dénominateur : $6 \\times 10^6$.",
      "hint2": "Quotient : $\\frac{60}{6} \\times \\frac{10^4}{10^6} = 10 \\times 10^{-2} = 10^{-1} = 1 \\times 10^{-1}$.",
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
