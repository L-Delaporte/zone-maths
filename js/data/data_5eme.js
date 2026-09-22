/**
 * Données pédagogiques officielles de la classe de 5ème (Cycle 4, 1ère année)
 * Conforme au Bulletin Officiel de l'Éducation Nationale et à la progression de maths-et-tiques.fr
 */

window.MATHS_COURSES_5E = {
  "5N1": {
    "title": "5N1 : Opérations et priorités opératoires",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Effectuer des calculs avec ou sans parenthèses en respectant les priorités opératoires.",
      "Traduire un problème ou un programme de calcul par une seule expression numérique.",
      "Utiliser la distributivité simple k(a+b) = ka + kb sur des calculs mentaux et réfléchis.",
      "Maîtriser la division euclidienne (quotient et reste) et les critères de divisibilité (2, 3, 5, 9, 10)."
    ],
    "keyPoints": [
      {
        "title": "1. Priorités opératoires",
        "content": "• Dans une expression sans parenthèses, **la multiplication et la division sont prioritaires** sur l'addition et la soustraction.\n• Dans une expression avec parenthèses, on effectue **d'abord les calculs entre parenthèses**, en commençant par les plus intérieures.\n• Pour des opérations de même priorité consécutives (+ et -, ou × et ÷), on calcule **de gauche à droite**."
      },
      {
        "title": "2. Distributivité simple",
        "content": "Pour tous nombres $k, a, b$ :\n$$k \\times (a + b) = k \\times a + k \\times b \\quad \\text{et} \\quad k \\times (a - b) = k \\times a - k \\times b$$\nPermet de calculer astucieusement de tête :\n$$25 \\times 102 = 25 \\times (100 + 2) = 2500 + 50 = 2550$$"
      },
      {
        "title": "3. Division euclidienne et divisibilité",
        "content": "Dans la division euclidienne de $a$ par $b$ ($b > 0$) : $a = b \\times q + r$ avec $0 \\le r < b$.\n• Un nombre est divisible par 2 si son dernier chiffre est pair (0, 2, 4, 6, 8).\n• Par 5 si son dernier chiffre est 0 ou 5.\n• Par 3 (ou 9) si la somme de ses chiffres est divisible par 3 (ou 9)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Respecter les priorités opératoires",
        "example": "Calculer $A = 15 + 4 \\times (8 - 3)$.",
        "steps": [
          "**Étape 1 (Parenthèses)** : On effectue le calcul prioritaire entre parenthèses : $8 - 3 = 5$. L'expression devient $A = 15 + 4 \\times 5$.",
          "**Étape 2 (Multiplication)** : La multiplication prime sur l'addition : $4 \\times 5 = 20$.",
          "**Étape 3 (Addition)** : On termine par l'addition : $A = 15 + 20 = 35$."
        ]
      }
    ],
    "traps": [
      "⚠️ Erreur fréquente : calculer de gauche à droite sans observer les multiplications ! $2 + 3 \\times 5 \\neq 5 \\times 5 = 25$, mais bien $2 + 15 = 17$.",
      "⚠️ Dans une division euclidienne, le reste $r$ doit toujours être strictement inférieur au diviseur $b$ ($r < b$)."
    ],
    "flashcards": [
      {
        "q": "Quelle opération est prioritaire dans $7 + 3 \\times 4$ ?",
        "a": "La multiplication $3 \\times 4 = 12$, donc le résultat est $7 + 12 = 19$."
      },
      {
        "q": "Comment reconnaître si 471 est divisible par 3 ?",
        "a": "On calcule la somme des chiffres : $4 + 7 + 1 = 12$. Comme 12 est un multiple de 3, 471 est divisible par 3."
      }
    ]
  },
  "5N2": {
    "title": "5N2 : Nombres relatifs : découverte et opérations",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Définir les nombres relatifs (positifs, négatifs, opposés, distance à zéro).",
      "Lire et placer des abscisses sur une droite graduée.",
      "Comparer et ranger des nombres décimaux relatifs.",
      "Additionner et soustraire deux nombres relatifs."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et comparaison",
        "content": "Un nombre relatif est formé d'un **signe** (+ ou -) et d'une **distance à zéro** (valeur absolue).\n• Entre deux nombres négatifs, le plus grand est celui qui a la **plus petite distance à zéro** (le plus proche de zéro) : $-3 > -7$ car $3 < 7$."
      },
      {
        "title": "2. Addition de relatifs",
        "content": "• **Même signe** : on garde le signe commun et on additionne les distances à zéro :\n$$(+3) + (+5) = +8 \\quad \\text{et} \\quad (-4) + (-6) = -10$$\n• **Signes contraires** : on prend le signe de celui qui a la plus grande distance à zéro et on soustrait les distances :\n$$(-9) + (+4) = -5 \\quad \\text{car } 9 > 4$$"
      },
      {
        "title": "3. Soustraction de relatifs",
        "content": "**Règle d'or** : Soustraire un nombre relatif revient à **ajouter son opposé** :\n$$a - b = a + (-b)$$\nExemples :\n$$5 - (-3) = 5 + 3 = 8 \\quad \\text{et} \\quad -4 - (+7) = -4 + (-7) = -11$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Transformer une soustraction en addition",
        "example": "Calculer $B = -8 - (-12)$.",
        "steps": [
          "**Étape 1** : On transforme la soustraction en addition de l'opposé : $-(-12)$ devient $+12$.",
          "**Étape 2** : L'expression devient $B = -8 + 12$.",
          "**Étape 3** : Les signes sont contraires, $12 > 8$, donc le résultat est positif : $B = +(12 - 8) = 4$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas penser que $-15$ est plus grand que $-5$ ! Sur un thermomètre, $-15^\\circ\\text{C}$ est plus bas et donc plus froid que $-5^\\circ\\text{C}$.",
      "⚠️ Bien penser à changer le signe du nombre qui suit le moins : $a - (-b) = a + b$."
    ],
    "flashcards": [
      {
        "q": "Quel est le résultat de $(-5) + (-7)$ ?",
        "a": "$-12$ (même signe négatif, on additionne $5 + 7 = 12$)."
      },
      {
        "q": "Comment calculer $3 - (-8)$ ?",
        "a": "On ajoute l'opposé : $3 + 8 = 11$."
      }
    ]
  },
  "5N3": {
    "title": "5N3 : Fractions et nombres rationnels",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Reconnaître et produire des fractions égales par multiplication ou division du numérateur et dénominateur.",
      "Comparer des fractions de même dénominateur ou dont l'un est multiple de l'autre.",
      "Additionner et soustraire des fractions simples.",
      "Prendre une fraction d'une quantité donnée."
    ],
    "keyPoints": [
      {
        "title": "1. Fractions égales et quotient",
        "content": "Le quotient $\\frac{a}{b}$ est le nombre qui, multiplié par $b$, donne $a$ : $b \\times \\frac{a}{b} = a$.\nOn ne change pas une fraction en multipliant (ou divisant) numérateur et dénominateur par un même nombre non nul :\n$$\\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$$"
      },
      {
        "title": "2. Addition et soustraction de fractions",
        "content": "• **Même dénominateur** : $\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d}$.\n• **Dénominateurs multiples** : on transforme l'une des fractions pour avoir le même dénominateur avant d'additionner ou soustraire :\n$$\\frac{2}{5} + \\frac{7}{15} = \\frac{2 \\times 3}{5 \\times 3} + \\frac{7}{15} = \\frac{6}{15} + \\frac{7}{15} = \\frac{13}{15}$$"
      },
      {
        "title": "3. Prendre une fraction d'un nombre",
        "content": "Prendre les $\\frac{a}{b}$ d'un nombre $Q$, c'est calculer $\\frac{a}{b} \\times Q = \\frac{a \\times Q}{b}$.\nExemple : Les $\\frac{3}{4}$ de $24$ L valent $\\frac{3 \\times 24}{4} = 3 \\times 6 = 18$ L."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Réduire au même dénominateur",
        "example": "Calculer $C = \\frac{5}{6} - \\frac{3}{18}$.",
        "steps": [
          "**Étape 1** : On repère que $18 = 6 \\times 3$.",
          "**Étape 2** : On met $\\frac{5}{6}$ sur 18 : $\\frac{5 \\times 3}{6 \\times 3} = \\frac{15}{18}$.",
          "**Étape 3** : On soustrait les numérateurs : $\\frac{15 - 3}{18} = \\frac{12}{18}$.",
          "**Étape 4 (Simplification)** : $\\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais additionner les dénominateurs ! $\\frac{1}{2} + \\frac{1}{2} = \\frac{2}{2} = 1$, pas $\\frac{2}{4}$."
    ],
    "flashcards": [
      {
        "q": "Combien vaut le quart de 36 ?",
        "a": "$\\frac{1}{4} \\times 36 = \\frac{36}{4} = 9$."
      },
      {
        "q": "Simplifier la fraction $\\frac{20}{25}$.",
        "a": "On divise par 5 : $\\frac{20 \\div 5}{25 \\div 5} = \\frac{4}{5}$."
      }
    ]
  },
  "5G1": {
    "title": "5G1 : Repérage sur une droite et dans le plan",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Lire et placer des abscisses sur une droite graduée.",
      "Lire les coordonnées d'un point dans le plan muni d'un repère orthogonal.",
      "Placer un point de coordonnées relatives données."
    ],
    "keyPoints": [
      {
        "title": "1. Droite graduée",
        "content": "Chaque point d'une droite graduée est repéré par un nombre relatif appelé son **abscisse**. L'origine $O$ a pour abscisse 0."
      },
      {
        "title": "2. Repère orthogonal du plan",
        "content": "Dans un repère orthogonal, la position d'un point $M$ est donnée par un couple de nombres noté $M(x ; y)$ :\n• $x$ est l'**abscisse** (axe horizontal, orienté de gauche à droite).\n• $y$ est l'**ordonnée** (axe vertical, orienté de bas en haut).\nAstuce mnémotechnique : Ordre alphabétique ($x$ puis $y$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Placer un point dans un repère",
        "example": "Placer le point $A(-4 ; 3)$.",
        "steps": [
          "**Étape 1** : Partir de l'origine $O(0;0)$.",
          "**Étape 2** : Se déplacer de 4 unités vers la gauche sur l'axe des abscisses ($x = -4$).",
          "**Étape 3** : Monter de 3 unités sur l'axe des ordonnées ($y = +3$) et placer $A$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas intervertir l'abscisse et l'ordonnée : le premier nombre est toujours horizontal, le deuxième vertical !"
    ],
    "flashcards": [
      {
        "q": "Quelles sont les coordonnées de l'origine d'un repère ?",
        "a": "$O(0 ; 0)$ : abscisse 0 et ordonnée 0."
      }
    ]
  },
  "5G2": {
    "title": "5G2 : Symétrie centrale et demi-tour",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Comprendre la symétrie centrale comme un demi-tour de 180° autour d'un point.",
      "Construire le symétrique d'un point, segment, droite et cercle.",
      "Utiliser les propriétés de conservation de la symétrie centrale."
    ],
    "keyPoints": [
      {
        "title": "1. Définition",
        "content": "Dire que $A'$ est le symétrique de $A$ par rapport à $O$ signifie que **$O$ est le milieu du segment $[AA']$**."
      },
      {
        "title": "2. Propriétés de conservation",
        "content": "La symétrie centrale conserve :\n• Les longueurs : $A'B' = AB$.\n• Les mesures d'angles : $\\widehat{A'B'C'} = \\widehat{ABC}$.\n• Le parallélisme : l'image d'une droite $(d)$ est une droite $(d')$ **parallèle** à $(d)$.\n• Les aires et les périmètres."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Construire le symétrique d'un point A",
        "example": "Construire A' symétrique de A par rapport à O.",
        "steps": [
          "**Étape 1** : Tracer la demi-droite $[AO)$.",
          "**Étape 2** : Reporter la longueur $OA$ de l'autre côté de $O$ au compas.",
          "**Étape 3** : Coder les longueurs égales $OA = OA'$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre la symétrie axiale (pliage) et la symétrie centrale (demi-tour)."
    ],
    "flashcards": [
      {
        "q": "Si $A'$ est le symétrique de $A$ par rapport à $O$, que vaut la distance $OA'$ ?",
        "a": "$OA' = OA$ car $O$ est le milieu de $[AA']$."
      }
    ]
  },
  "5G3": {
    "title": "5G3 : Angles et parallélisme (alternes-internes)",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Reconnaître des angles alternes-internes et correspondants.",
      "Démontrer que deux droites sont parallèles à l'aide d'angles égaux.",
      "Utiliser la somme des angles d'un triangle égale à 180°."
    ],
    "keyPoints": [
      {
        "title": "1. Angles alternes-internes et correspondants",
        "content": "• Deux angles alternes-internes sont situés de part et d'autre d'une sécante et entre deux droites (forme de Z).\n• **Théorème** : Si deux droites parallèles sont coupées par une sécante, alors les angles alternes-internes qu'elles forment sont **égaux**."
      },
      {
        "title": "2. Somme des angles d'un triangle",
        "content": "Dans n'importe quel triangle $ABC$ :\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$$\n• Dans un triangle rectangle, la somme des deux angles aigus vaut $90^\\circ$.\n• Dans un triangle équilatéral, chaque angle mesure $180 \\div 3 = 60^\\circ$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un angle inconnu",
        "example": "Dans le triangle ABC, $\\widehat{A} = 55^\\circ$ et $\\widehat{B} = 65^\\circ$. Calculer $\\widehat{C}$.",
        "steps": [
          "**Étape 1** : La somme des angles d'un triangle est $180^\\circ$.",
          "**Étape 2** : On calcule la somme des deux angles connus : $55 + 65 = 120^\\circ$.",
          "**Étape 3** : On soustrait à $180^\\circ$ : $\\widehat{C} = 180 - 120 = 60^\\circ$."
        ]
      }
    ],
    "traps": [
      "⚠️ Deux angles alternes-internes ne sont égaux que lorsque les droites sont parallèles !"
    ],
    "flashcards": [
      {
        "q": "Quelle est la somme des 3 angles d'un triangle ?",
        "a": "$180^\\circ$."
      }
    ]
  },
  "5P1": {
    "title": "5P1 : Proportionnalité, pourcentages et échelles",
    "domain": "Proportionnalité",
    "objectives": [
      "Reconnaître une situation de proportionnalité dans un tableau ou un graphique.",
      "Calculer une quatrième proportionnelle par produit en croix ou coefficient.",
      "Appliquer et calculer des pourcentages.",
      "Utiliser une échelle sur un plan ou une carte."
    ],
    "keyPoints": [
      {
        "title": "1. Reconnaître la proportionnalité",
        "content": "• **Tableau** : On passe de la 1ère à la 2ème ligne en multipliant toujours par le même nombre (coefficient de proportionnalité).\n• **Graphique** : La situation est proportionnelle si et seulement si tous les points sont **alignés sur une droite passant par l'origine $(0 ; 0)$**."
      },
      {
        "title": "2. Pourcentages",
        "content": "Prendre $p\\%$ d'une quantité $Q$, c'est multiplier $Q$ par $\\frac{p}{100}$.\n• 50% revient à diviser par 2.\n• 25% revient à diviser par 4.\n• 10% revient à diviser par 10."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une quatrième proportionnelle",
        "example": "3 kg de tomates coûtent 7,50 €. Combien coûtent 5 kg ?",
        "steps": [
          "**Étape 1 (Tableau)** : Masse : 3 | 5  ;  Prix : 7,50 | x",
          "**Étape 2 (Produit en croix)** : $x = \\frac{5 \\times 7,50}{3} = \\frac{37,50}{3} = 12,50$ €."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour une échelle, attention à bien convertir les distances dans la même unité (en cm) avant de calculer !"
    ],
    "flashcards": [
      {
        "q": "Que représente un graphique dont les points sont alignés avec l'origine ?",
        "a": "Une situation de proportionnalité."
      },
      {
        "q": "Calculer 25% de 80 €.",
        "a": "Prendre 25% c'est diviser par 4 : $80 \\div 4 = 20$ €."
      }
    ]
  },
  "5N4": {
  "title": "5N4 : Puissances simples et carrés",
  "domain": "Nombres et Calculs",
  "objectives": [
    "Connaître et utiliser la notation puissance (carré $a^2$, cube $a^3$).",
    "Calculer des puissances de 10 d'exposant positif ($10^n$).",
    "Appliquer les règles de priorité relatives aux puissances."
  ],
  "keyPoints": [
    {
      "title": "1. Le carré et le cube d'un nombre",
      "content": "• Le carré de $a$ est le produit de $a$ par lui-même : $a^2 = a \\times a$.\n• Le cube de $a$ est le produit de trois facteurs égaux à $a$ : $a^3 = a \\times a \\times a$.\nExemples : $7^2 = 7 \\times 7 = 49$ et $2^3 = 2 \\times 2 \\times 2 = 8$."
    },
    {
      "title": "2. Puissances de 10",
      "content": "Pour tout entier $n \\ge 1$, $10^n$ s'écrit avec un 1 suivi de $n$ zéros :\n$$10^1 = 10, \\quad 10^2 = 100, \\quad 10^3 = 1000, \\quad 10^6 = 1\\,000\\,000$$\nPar convention : $10^0 = 1$ et pour tout nombre non nul, $a^0 = 1$."
    },
    {
      "title": "3. Priorité des puissances",
      "content": "Dans une chaîne de calculs, **les puissances sont prioritaires** sur la multiplication, la division, l'addition et la soustraction :\n$$3 \\times 2^3 = 3 \\times 8 = 24 \\quad (\\text{et non } 6^3 = 216)$$"
    }
  ],
  "methods": [
    {
      "title": "Méthode : Calculer avec des puissances",
      "example": "Calculer $A = 5 + 2 \\times 3^2$.",
      "steps": [
        "**Étape 1 (Puissance)** : On calcule en priorité la puissance : $3^2 = 9$.",
        "**Étape 2 (Multiplication)** : On effectue la multiplication : $2 \\times 9 = 18$.",
        "**Étape 3 (Addition)** : On additionne : $A = 5 + 18 = 23$."
      ]
    }
  ],
  "traps": [
    "⚠️ Ne pas confondre $3^2$ et $3 \\times 2$ ! $3^2 = 9$ alors que $3 \\times 2 = 6$.",
    "⚠️ Attention au signe : $(-4)^2 = (-4) \\times (-4) = 16$ alors que $-4^2 = -(4 \\times 4) = -16$."
  ],
  "flashcards": [
    {
      "q": "Que vaut $5^3$ ?",
      "a": "$5 \\times 5 \\times 5 = 125$."
    },
    {
      "q": "Combien de zéros compte le nombre $10^5$ ?",
      "a": "5 zéros, soit $100\\,000$."
    }
  ]
},
  "5N5": {
  "title": "5N5 : Calcul littéral et initiation aux équations",
  "domain": "Nombres et Calculs",
  "objectives": [
    "Simplifier les écritures littérales en omettant le signe $\\times$.",
    "Substituer un nombre à une lettre pour calculer la valeur d'une expression.",
    "Tester si une égalité est vraie pour des valeurs numériques données.",
    "Résoudre des équations simples du type $x + a = b$ et $a \\times x = b$."
  ],
  "keyPoints": [
    {
      "title": "1. Conventions d'écriture littérale",
      "content": "On peut supprimer le signe $\\times$ devant une lettre ou une parenthèse :\n• $3 \\times x = 3x$\n• $1 \\times x = x$\n• $x \\times x = x^2$\n• $4 \\times (a + 2) = 4(a + 2)$"
    },
    {
      "title": "2. Substitution numérique",
      "content": "Pour calculer la valeur d'une expression littérale pour une valeur donnée, on remplace la lettre par ce nombre en rétablissant les signes $\\times$ sous-entendus.\nExemple pour $x = 4$ dans $A = 3x^2 - 5$ :\n$$A = 3 \\times 4^2 - 5 = 3 \\times 16 - 5 = 48 - 5 = 43$$"
    },
    {
      "title": "3. Tester une égalité",
      "content": "Une égalité est vraie pour une valeur si les deux membres calculés séparément donnent le même résultat."
    }
  ],
  "methods": [
    {
      "title": "Méthode : Tester si un nombre est solution d'une équation",
      "example": "Le nombre 3 est-il solution de l'équation $2x + 5 = 11$ ?",
      "steps": [
        "**Membre de gauche** : Pour $x = 3$, $2 \\times 3 + 5 = 6 + 5 = 11$.",
        "**Membre de droite** : $11$.",
        "**Conclusion** : Les deux membres sont égaux, donc 3 est bien solution de l'équation."
      ]
    }
  ],
  "traps": [
    "⚠️ Attention lors du remplacement : si $x = 3$, $2x$ ne vaut pas $23$, mais bien $2 \\times 3 = 6$ !",
    "⚠️ On ne peut pas additionner des termes de nature différente : $3x + 5 \\neq 8x$."
  ],
  "flashcards": [
    {
      "q": "Comment simplifier l'écriture $x \\times 5$ ?",
      "a": "On écrit $5x$ (le coefficient numérique se place devant la lettre)."
    },
    {
      "q": "Que vaut $2x + 3$ pour $x = 4$ ?",
      "a": "$2 \\times 4 + 3 = 8 + 3 = 11$."
    }
  ]
},
  "5G4": {
  "title": "5G4 : Triangles : constructions, droites remarquables et aire",
  "domain": "Espace et Géométrie",
  "objectives": [
    "Vérifier l'inégalité triangulaire pour savoir si un triangle est constructible.",
    "Construire un triangle connaissant les longueurs de ses côtés ou ses angles.",
    "Tracer les médiatrices (cercle circonscrit) et les hauteurs d'un triangle.",
    "Calculer l'aire d'un triangle : $\\text{Aire} = \\frac{\\text{base} \\times \\text{hauteur}}{2}$."
  ],
  "keyPoints": [
    {
      "title": "1. Inégalité triangulaire",
      "content": "Dans un triangle, la longueur de chaque côté est **strictement inférieure à la somme** des deux autres. Pour vérifier la constructibilité, il suffit de tester si le plus grand côté est inférieur à la somme des deux plus petits."
    },
    {
      "title": "2. Droites remarquables",
      "content": "• **Médiatrice** : droite perpendiculaire à un segment passant par son milieu. Les 3 médiatrices d'un triangle sont concourantes au **centre du cercle circonscrit**.\n• **Hauteur** : droite passant par un sommet et perpendiculaire au côté opposé. Les 3 hauteurs sont concourantes à l'orthocentre."
    },
    {
      "title": "3. Aire d'un triangle",
      "content": "$$\\text{Aire} = \\frac{b \\times h}{2}$$\noù $h$ est la hauteur relative à la base $b$."
    }
  ],
  "methods": [
    {
      "title": "Méthode : Calculer l'aire d'un triangle",
      "example": "Calculer l'aire d'un triangle dont une base mesure $8\\text{ cm}$ et la hauteur correspondante $5\\text{ cm}$.",
      "steps": [
        "**Formule** : $\\text{Aire} = \\frac{b \\times h}{2}$.",
        "**Calcul** : $\\text{Aire} = \\frac{8 \\times 5}{2} = \\frac{40}{2} = 20\\text{ cm}^2$."
      ]
    }
  ],
  "traps": [
    "⚠️ Ne pas oublier de diviser par 2 dans le calcul de l'aire du triangle !",
    "⚠️ Si le plus grand côté est égal à la somme des deux autres, les points sont alignés et le triangle est plat."
  ],
  "flashcards": [
    {
      "q": "Un triangle de côtés 3 cm, 4 cm et 8 cm est-il constructible ?",
      "a": "Non, car $3 + 4 = 7 < 8$ (le plus grand côté est trop long)."
    },
    {
      "q": "Quelle est la formule de l'aire d'un triangle ?",
      "a": "$\\text{Aire} = \\frac{\\text{base} \\times \\text{hauteur}}{2}$."
    }
  ]
},
  "5G5": {
  "title": "5G5 : Parallélogrammes et quadrilatères particuliers",
  "domain": "Espace et Géométrie",
  "objectives": [
    "Caractériser le parallélogramme par ses côtés, angles, diagonales et son centre de symétrie.",
    "Reconnaître et construire les quadrilatères particuliers (rectangle, losange, carré).",
    "Calculer le périmètre et l'aire d'un parallélogramme : $\\text{Aire} = b \\times h$."
  ],
  "keyPoints": [
    {
      "title": "1. Propriétés du parallélogramme",
      "content": "Un parallélogramme est un quadrilatère qui possède un centre de symétrie (l'intersection des diagonales). Ses conséquences :\n• Les côtés opposés sont parallèles et de même longueur.\n• Les diagonales se coupent en leur milieu.\n• Les angles opposés ont la même mesure."
    },
    {
      "title": "2. Quadrilatères particuliers",
      "content": "• **Rectangle** : parallélogramme avec un angle droit (ou diagonales de même longueur).\n• **Losange** : parallélogramme avec deux côtés consécutifs égaux (ou diagonales perpendiculaires).\n• **Carré** : à la fois rectangle et losange."
    },
    {
      "title": "3. Aire du parallélogramme",
      "content": "$$\\text{Aire} = b \\times h$$\noù $h$ est la hauteur relative à la base $b$."
    }
  ],
  "methods": [
    {
      "title": "Méthode : Prouver qu'un quadrilatère est un parallélogramme",
      "example": "Démontrer que $ABCD$ est un parallélogramme sachant que ses diagonales se coupent en leur milieu $O$.",
      "steps": [
        "**Propriété** : Si les diagonales d'un quadrilatère ont le même milieu, alors c'est un parallélogramme.",
        "**Données** : Les segments $[AC]$ et $[BD]$ ont pour milieu commun $O$.",
        "**Conclusion** : Donc $ABCD$ est un parallélogramme."
      ]
    }
  ],
  "traps": [
    "⚠️ Attention à l'ordre des lettres : le quadrilatère $ABCD$ a pour diagonales $[AC]$ et $[BD]$ (et non $[AB]$).",
    "⚠️ L'aire du parallélogramme est $b \\times h$ et NON le produit de deux côtés consécutifs !"
  ],
  "flashcards": [
    {
      "q": "Quelle est la propriété des diagonales d'un parallélogramme ?",
      "a": "Elles se coupent en leur milieu."
    },
    {
      "q": "Qu'est-ce qu'un losange ?",
      "a": "Un parallélogramme qui a ses 4 côtés de même longueur (ou ses diagonales perpendiculaires)."
    }
  ]
},
  "5G6": {
  "title": "5G6 : Espace : prismes droits, cylindres et volumes",
  "domain": "Espace et Géométrie",
  "objectives": [
    "Identifier et décrire un prisme droit et un cylindre de révolution.",
    "Dessiner en perspective cavalière et construire des patrons de prismes et cylindres.",
    "Calculer le volume d'un prisme droit et d'un cylindre : $V = B \\times h$."
  ],
  "keyPoints": [
    {
      "title": "1. Prisme droit",
      "content": "Un prisme droit possède :\n• Deux bases parallèles qui sont des polygones superposables.\n• Des faces latérales rectangulaires perpendiculaires aux bases."
    },
    {
      "title": "2. Cylindre de révolution",
      "content": "Un cylindre possède deux bases en forme de disques superposables et parallèles de rayon $R$, et une surface latérale qui se déroule en un rectangle de longueur $2\\pi R$ et de hauteur $h$."
    },
    {
      "title": "3. Volume d'un prisme ou cylindre",
      "content": "$$V = \\text{Aire de la base} \\times \\text{hauteur} = B \\times h$$\nPour le cylindre : $V = \\pi \\times R^2 \\times h$."
    }
  ],
  "methods": [
    {
      "title": "Méthode : Calculer le volume d'un cylindre",
      "example": "Calculer le volume d'un cylindre de rayon $R = 3\\text{ cm}$ et de hauteur $h = 10\\text{ cm}$ (valeur approchée au dixième).",
      "steps": [
        "**Aire de la base** : $B = \\pi \\times R^2 = \\pi \\times 3^2 = 9\\pi\\text{ cm}^2$.",
        "**Volume exact** : $V = B \\times h = 9\\pi \\times 10 = 90\\pi\\text{ cm}^3$.",
        "**Valeur approchée** : $90 \\times 3,1416 \\approx 282,7\\text{ cm}^3$."
      ]
    }
  ],
  "traps": [
    "⚠️ Ne pas confondre le rayon $R$ et le diamètre $D$ ($R = D/2$) !",
    "⚠️ $1\\text{ L} = 1\\text{ dm}^3 = 1000\\text{ cm}^3$ et $1\\text{ m}^3 = 1000\\text{ L}$."
  ],
  "flashcards": [
    {
      "q": "Quelle est la formule du volume d'un prisme droit ?",
      "a": "$V = \\text{Aire de la base} \\times \\text{hauteur}$ ($V = B \\times h$)."
    },
    {
      "q": "Quelle est l'aire de la base d'un cylindre de rayon 4 cm ?",
      "a": "$\\pi \\times 4^2 = 16\\pi\\text{ cm}^2$."
    }
  ]
},
  "5D1": {
  "title": "5D1 : Statistiques : effectifs, fréquences et diagrammes",
  "domain": "Organisation et Gestion de Données",
  "objectives": [
    "Organiser des données en tableau d'effectifs et calculer des fréquences.",
    "Représenter des données sous forme de diagrammes en bâtons ou circulaires.",
    "Calculer la moyenne simple d'une série statistique."
  ],
  "keyPoints": [
    {
      "title": "1. Effectif et fréquence",
      "content": "• L'**effectif** est le nombre de fois où une valeur apparaît.\n• L'**effectif total** $N$ est la somme de tous les effectifs.\n• La **fréquence** est le quotient de l'effectif par l'effectif total :\n$$\\text{Fréquence} = \\frac{\\text{Effectif}}{\\text{Effectif total}}$$\nElle s'exprime sous forme de fraction, de décimal ou de pourcentage ($f \\times 100$)."
    },
    {
      "title": "2. Moyenne simple",
      "content": "La moyenne d'une série est égale à la somme de toutes les valeurs divisée par l'effectif total :\n$$\\bar{x} = \\frac{\\text{Somme des valeurs}}{N}$$"
    }
  ],
  "methods": [
    {
      "title": "Méthode : Calculer une moyenne simple",
      "example": "Calculer la moyenne des notes : 12, 15, 14, 11, 18.",
      "steps": [
        "**Somme des valeurs** : $12 + 15 + 14 + 11 + 18 = 70$.",
        "**Nombre de valeurs** : $N = 5$.",
        "**Moyenne** : $\\bar{x} = \\frac{70}{5} = 14$."
      ]
    }
  ],
  "traps": [
    "⚠️ La somme des fréquences en pourcentages doit toujours être égale à 100%.",
    "⚠️ Dans un diagramme circulaire, les angles sont proportionnels aux effectifs ($360^\\circ$ pour le total)."
  ],
  "flashcards": [
    {
      "q": "Comment convertir une fréquence de 0,35 en pourcentage ?",
      "a": "$0,35 \\times 100 = 35\\%$."
    },
    {
      "q": "Quel angle représente 25% dans un diagramme circulaire ?",
      "a": "$25\\% \\times 360^\\circ = 90^\\circ$ (un quart de cercle)."
    }
  ]
},
  "5D2": {
  "title": "5D2 : Probabilités : découverte du hasard et événements",
  "domain": "Organisation et Gestion de Données",
  "objectives": [
    "Comprendre la notion d'expérience aléatoire et d'issues possibles.",
    "Calculer des probabilités dans des situations simples d'équiprobabilité.",
    "Utiliser le vocabulaire : événement impossible, certain, élémentaire."
  ],
  "keyPoints": [
    {
      "title": "1. Expérience aléatoire et issues",
      "content": "Une expérience est dite **aléatoire** si elle dépend du hasard et qu'on ne peut pas prévoir son résultat à l'avance, bien qu'on connaisse la liste de tous les résultats possibles (les **issues**)."
    },
    {
      "title": "2. Probabilité et équiprobabilité",
      "content": "Dans une situation d'équiprobabilité (toutes les issues ont la même chance de se produire) :\n$$P(\\text{Événement}) = \\frac{\\text{Nombre d'issues favorables}}{\\text{Nombre total d'issues possibles}}$$\nUne probabilité est un nombre compris entre 0 et 1 (souvent exprimé en fraction ou en pourcentage)."
    },
    {
      "title": "3. Événement impossible et certain",
      "content": "• Un événement impossible a une probabilité égale à 0 ($P = 0$).\n• Un événement certain a une probabilité égale à 1 ($P = 1$)."
    }
  ],
  "methods": [
    {
      "title": "Méthode : Calculer une probabilité",
      "example": "On tire une boule au hasard dans une urne contenant 4 boules bleues et 6 boules rouges. Quelle est la probabilité de tirer une boule bleue ?",
      "steps": [
        "**Nombre total d'issues** : $4 + 6 = 10$ boules au total.",
        "**Issues favorables** : 4 boules bleues.",
        "**Probabilité** : $P(\\text{Bleue}) = \\frac{4}{10} = \\frac{2}{5} = 0,4 = 40\\%$."
      ]
    }
  ],
  "traps": [
    "⚠️ Une probabilité ne peut JAMAIS être supérieure à 1 ni inférieure à 0 !",
    "⚠️ Le hasard n'a pas de mémoire : si un dé donne 6 trois fois de suite, la probabilité d'avoir 6 au coup suivant reste toujours $\\frac{1}{6}$."
  ],
  "flashcards": [
    {
      "q": "Quelle est la probabilité d'obtenir un 5 sur un dé équilibré à 6 faces ?",
      "a": "$\\frac{1}{6}$."
    },
    {
      "q": "Quelle est la probabilité d'un événement impossible ?",
      "a": "0."
    }
  ]
},
  "5P2": {
  "title": "5P2 : Dépendance entre grandeurs et formules",
  "domain": "Organisation et Gestion de Données",
  "objectives": [
    "Exprimer une grandeur en fonction d'une autre à l'aide d'une formule.",
    "Lire, compléter et interpréter un tableau de valeurs liant deux grandeurs.",
    "Représenter graphiquement une grandeur en fonction d'une autre dans un repère."
  ],
  "keyPoints": [
    {
      "title": "1. Formules littérales et dépendance",
      "content": "Dire qu'une grandeur $y$ dépend d'une grandeur $x$ signifie que la connaissance de $x$ permet de déterminer la valeur de $y$.\nExemples de formules courantes :\n• Périmètre d'un carré : $P = 4c$\n• Distance parcourue à vitesse constante : $d = v \\times t$"
    },
    {
      "title": "2. Tableau de valeurs et graphique",
      "content": "On place en abscisse la grandeur variable choisie ($x$) et en ordonnée la grandeur dépendante ($y$). Les points $(x ; y)$ sont ensuite reliés si la grandeur varie de façon continue."
    }
  ],
  "methods": [
    {
      "title": "Méthode : Utiliser la relation distance-vitesse-temps",
      "example": "Un train roule à la vitesse constante de $120\\text{ km/h}$. Quelle distance parcourt-il en $2\\text{ h } 30\\text{ min}$ ?",
      "steps": [
        "**Conversion du temps** : $2\\text{ h } 30\\text{ min} = 2,5\\text{ heures}$.",
        "**Formule** : $d = v \\times t$.",
        "**Calcul** : $d = 120 \\times 2,5 = 300\\text{ km}$."
      ]
    }
  ],
  "traps": [
    "⚠️ Ne pas écrire $2\\text{ h } 30\\text{ min} = 2,3\\text{ h}$ ! Il faut convertir les minutes en fraction d'heure : $\\frac{30}{60} = 0,5\\text{ h}$, donc $2,5\\text{ h}$.",
    "⚠️ Une relation de dépendance n'est pas obligatoirement une situation de proportionnalité."
  ],
  "flashcards": [
    {
      "q": "Quelle est la formule liant distance, vitesse et temps ?",
      "a": "$d = v \\times t$."
    },
    {
      "q": "Comment convertir 15 minutes en heure décimale ?",
      "a": "$\\frac{15}{60} = 0,25\\text{ h}$."
    }
  ]
},
  "5A1": {
  "title": "5A1 : Algorithmique et pensée informatique avec Scratch",
  "domain": "Algorithmique et Programmation",
  "objectives": [
    "Décomposer un problème en une suite ordonnée d'instructions (algorithme).",
    "Utiliser les blocs d'action, de déplacement et d'orientation dans Scratch.",
    "Utiliser une boucle bornée (« répéter n fois ») pour tracer des figures régulières.",
    "Calculer l'angle de rotation extérieur pour un polygone régulier : $\\frac{360^\\circ}{n}$."
  ],
  "keyPoints": [
    {
      "title": "1. Les bases de Scratch",
      "content": "• **Lutin** : personnage qui exécute le script sur la scène.\n• **Stylo** : permet de tracer des motifs lors des déplacements (« stylo en position d'écriture »).\n• **Instructions de base** : « avancer de $x$ pas », « tourner à droite de $\\alpha$ degrés »."
    },
    {
      "title": "2. La boucle « Répéter N fois »",
      "content": "Permet de condenser l'écriture lorsqu'une même série d'actions doit être répétée plusieurs fois.\nPour un polygone régulier à $n$ côtés de longueur $L$ :\n• Répéter $n$ fois : avancer de $L$, tourner de $\\frac{360^\\circ}{n}$."
    }
  ],
  "methods": [
    {
      "title": "Méthode : Déterminer l'angle de rotation d'un polygone régulier",
      "example": "Quel angle de rotation faut-il programmer pour tracer un pentagone régulier (5 côtés) ?",
      "steps": [
        "**Règle** : Pour faire un tour complet et fermer la figure, la somme des rotations extérieures vaut $360^\\circ$.",
        "**Calcul** : $\\text{Angle} = \\frac{360^\\circ}{5} = 72^\\circ$.",
        "**Script** : Répéter 5 fois : avancer de $L$, tourner de $72^\\circ$."
      ]
    }
  ],
  "traps": [
    "⚠️ Pour tracer un triangle équilatéral, l'angle de rotation dans Scratch est l'angle **extérieur** ($180^\\circ - 60^\\circ = 120^\\circ$) et non l'angle intérieur de $60^\\circ$ !",
    "⚠️ Bien penser à réinitialiser la position (« aller à x:0, y:0 » et « effacer tout ») au début de chaque script."
  ],
  "flashcards": [
    {
      "q": "De quel angle doit-on tourner pour tracer un carré dans Scratch ?",
      "a": "$90^\\circ$ (car $\\frac{360^\\circ}{4} = 90^\\circ$)."
    },
    {
      "q": "De quel angle doit-on tourner pour tracer un triangle équilatéral ?",
      "a": "$120^\\circ$ (car $\\frac{360^\\circ}{3} = 120^\\circ$)."
    }
  ]
}
};

window.MATHS_EXERCISES_5E = {
  "5N1": [
    {
      "id": "5N1-1",
      "chapterId": "5N1",
      "tier": 1,
      "title": "Priorités opératoires simples",
      "statement": "Calculer la valeur de l'expression suivante :\n$$A = 7 + 4 \\times 5$$",
      "type": "exact",
      "answer": "27",
      "placeholder": "Ex: 27",
      "hint1": "La multiplication est prioritaire sur l'addition.",
      "hint2": "Effectue d'abord $4 \\times 5 = 20$, puis ajoute $7$.",
      "solution": "La multiplication est prioritaire :\n$$A = 7 + 20 = 27$$",
      "skill": "Calculer"
    },
    {
      "id": "5N1-2",
      "chapterId": "5N1",
      "tier": 2,
      "title": "Calcul avec parenthèses",
      "statement": "Calculer :\n$$B = (18 - 6) \\div 3 + 2 \\times 4$$",
      "type": "exact",
      "answer": "12",
      "placeholder": "Ex: 12",
      "hint1": "Effectue le calcul entre parenthèses d'abord : $18 - 6 = 12$.",
      "hint2": "Puis $12 \\div 3 = 4$ et $2 \\times 4 = 8$. Enfin additionne.",
      "solution": "$$B = 12 \\div 3 + 8 = 4 + 8 = 12$$",
      "skill": "Calculer"
    },
    {
      "id": "5N1-3",
      "chapterId": "5N1",
      "tier": 3,
      "title": "Produit de deux parenthèses",
      "statement": "Calculer la valeur numérique de :\n$$C = (24 - 9) \\times (3 + 5)$$",
      "type": "exact",
      "answer": "120",
      "placeholder": "Ex: 120",
      "hint1": "Calcule chaque parenthèse : $24 - 9 = 15$ et $3 + 5 = 8$.",
      "solution": "$$C = 15 \\times 8 = 120$$",
      "skill": "Calculer"
    },
    {
      "id": "5N1-4",
      "chapterId": "5N1",
      "tier": 4,
      "title": "Défi 4ème : Crochets et parenthèses imbriquées",
      "statement": "Calculer la valeur exacte de l'expression :\n$$D = [48 - (3 \\times 7 - 5)] \\div 4 + 6 \\times (14 - 3 \\times 3)$$",
      "type": "exact",
      "answer": "38",
      "placeholder": "Ex: 38",
      "hint1": "1. Crochet : $3 \\times 7 - 5 = 16$, puis $48 - 16 = 32$, puis $32 \\div 4 = 8$.",
      "hint2": "2. Seconde parenthèse : $14 - 9 = 5$, puis $6 \\times 5 = 30$. Somme finale : $8 + 30$.",
      "solution": "1. Crochet : $[48 - 16] \\div 4 = 32 \\div 4 = 8$.\n2. Produit : $6 \\times (14 - 9) = 6 \\times 5 = 30$.\n3. Total : $D = 8 + 30 = 38$.",
      "skill": "Calculer"
    }
  ],
  "5N2": [
    {
      "id": "5N2-1",
      "chapterId": "5N2",
      "tier": 1,
      "title": "Addition de deux négatifs",
      "statement": "Calculer la somme suivante :\n$$S = (-5) + (-8)$$",
      "type": "exact",
      "answer": "-13",
      "placeholder": "Ex: -13",
      "hint1": "Deux nombres négatifs s'additionnent en gardant le signe moins.",
      "hint2": "$-(5 + 8) = -13$.",
      "solution": "On additionne les distances à zéro et on garde le signe commun négatif :\n$$S = -(5 + 8) = -13$$",
      "skill": "Calculer"
    },
    {
      "id": "5N2-2",
      "chapterId": "5N2",
      "tier": 2,
      "title": "Addition de signes contraires",
      "statement": "Calculer :\n$$T = (-12) + 7$$",
      "type": "exact",
      "answer": "-5",
      "placeholder": "Ex: -5",
      "hint1": "Le nombre qui a la plus grande distance à zéro est -12 (négatif).",
      "hint2": "Le résultat sera négatif : $-(12 - 7)$.",
      "solution": "La plus grande distance à zéro est celle de -12, donc le résultat est négatif :\n$$T = -(12 - 7) = -5$$",
      "skill": "Calculer"
    },
    {
      "id": "5N2-3",
      "chapterId": "5N2",
      "tier": 3,
      "title": "Soustraction de nombres relatifs",
      "statement": "Calculer la différence :\n$$D = 15 - (-9)$$",
      "type": "exact",
      "answer": "24",
      "placeholder": "Ex: 24",
      "hint1": "Soustraire un nombre négatif revient à ajouter son opposé : $a - (-b) = a + b$.",
      "solution": "$$D = 15 + 9 = 24$$",
      "skill": "Calculer"
    },
    {
      "id": "5N2-4",
      "chapterId": "5N2",
      "tier": 4,
      "title": "Défi 4ème : Chaîne de calculs de relatifs avec crochets",
      "statement": "Calculer la valeur exacte de l'expression :\n$$E = (-25) - [(-14) + 8 - (-6)] + (-11)$$",
      "type": "exact",
      "answer": "-36",
      "placeholder": "Ex: -36",
      "hint1": "Calcule l'intérieur du crochet : $(-14) + 8 + 6 = 0$.",
      "hint2": "Il reste $(-25) - 0 + (-11)$.",
      "solution": "1. Intérieur du crochet : $(-14) + 8 + 6 = 0$.\n2. Remplacement : $E = (-25) - 0 + (-11) = -36$.",
      "skill": "Calculer"
    }
  ],
  "5N3": [
    {
      "id": "5N3-1",
      "chapterId": "5N3",
      "tier": 1,
      "title": "Fractions égales et proportionnalité",
      "statement": "Compléter pour trouver le nombre manquant $x$ :\n$$\\frac{3}{7} = \\frac{x}{35}$$",
      "type": "exact",
      "answer": "15",
      "placeholder": "Ex: 15",
      "hint1": "Le dénominateur 7 est multiplié par 5 pour donner 35. Fais de même au numérateur.",
      "solution": "$$\\frac{3 \\times 5}{7 \\times 5} = \\frac{15}{35} \\implies x = 15$$",
      "skill": "Calculer"
    },
    {
      "id": "5N3-2",
      "chapterId": "5N3",
      "tier": 2,
      "title": "Addition de fractions de même dénominateur",
      "statement": "Calculer sous forme irréductible :\n$$S = \\frac{4}{11} + \\frac{5}{11}$$",
      "type": "exact",
      "answer": "9/11",
      "placeholder": "Ex: 9/11",
      "hint1": "Garde le dénominateur commun 11 et additionne les numérateurs $4 + 5$.",
      "solution": "$$S = \\frac{4 + 5}{11} = \\frac{9}{11}$$",
      "skill": "Calculer"
    },
    {
      "id": "5N3-3",
      "chapterId": "5N3",
      "tier": 3,
      "title": "Addition avec dénominateurs multiples",
      "statement": "Calculer sous forme de fraction irréductible :\n$$A = \\frac{2}{3} + \\frac{5}{12}$$",
      "type": "exact",
      "answer": "13/12",
      "placeholder": "Ex: 13/12",
      "hint1": "Le dénominateur commun est 12 ($12 = 3 \\times 4$). Multiplie le haut et le bas de la 1ère fraction par 4.",
      "solution": "$$A = \\frac{2 \\times 4}{3 \\times 4} + \\frac{5}{12} = \\frac{8}{12} + \\frac{5}{12} = \\frac{13}{12}$$",
      "skill": "Calculer"
    },
    {
      "id": "5N3-4",
      "chapterId": "5N3",
      "tier": 4,
      "title": "Défi 4ème : Enchaînement de 3 fractions avec parenthèses",
      "statement": "Calculer sous forme de fraction irréductible :\n$$F = \\frac{7}{4} - \\left(\\frac{1}{2} + \\frac{3}{8}\\right)$$",
      "type": "exact",
      "answer": "7/8",
      "placeholder": "Ex: 7/8",
      "hint1": "1. Parenthèse : $\\frac{1}{2} + \\frac{3}{8} = \\frac{4}{8} + \\frac{3}{8} = \\frac{7}{8}$.",
      "hint2": "2. Soustraction : $\\frac{7}{4} - \\frac{7}{8} = \\frac{14}{8} - \\frac{7}{8}$.",
      "solution": "1. Parenthèse : $\\frac{4}{8} + \\frac{3}{8} = \\frac{7}{8}$.\n2. Soustraction : $\\frac{14}{8} - \\frac{7}{8} = \\frac{7}{8}$.",
      "skill": "Calculer"
    }
  ],
  "5N4": [
    {
      "id": "5N4-1",
      "chapterId": "5N4",
      "tier": 1,
      "title": "Division euclidienne (Reste)",
      "statement": "Dans la division euclidienne de $75$ par $8$, quel est le reste ?",
      "type": "exact",
      "answer": "3",
      "placeholder": "Ex: 3",
      "hint1": "$8 \\times 9 = 72$. Calcule $75 - 72$.",
      "solution": "$$75 = 8 \\times 9 + 3 \\implies \\text{Reste} = 3$$",
      "skill": "Calculer"
    },
    {
      "id": "5N4-2",
      "chapterId": "5N4",
      "tier": 2,
      "title": "Critère de divisibilité par 9",
      "statement": "Le nombre $423$ est-il divisible par $9$ ? (oui ou non)",
      "type": "exact",
      "answer": "oui",
      "placeholder": "oui ou non",
      "hint1": "Additionne les chiffres : $4 + 2 + 3$. Est-ce un multiple de 9 ?",
      "solution": "$4 + 2 + 3 = 9$. Comme 9 est divisible par 9, 423 est **divisible par 9**.",
      "skill": "Raisonner"
    },
    {
      "id": "5N4-3",
      "chapterId": "5N4",
      "tier": 3,
      "title": "Reconnaissance d'un nombre premier",
      "statement": "Le nombre $29$ est-il un nombre premier ? (oui ou non)",
      "type": "exact",
      "answer": "oui",
      "placeholder": "oui ou non",
      "hint1": "Vérifie s'il admet d'autres diviseurs que 1 et lui-même.",
      "solution": "29 n'admet que deux diviseurs (1 et 29). C'est un **nombre premier**.",
      "skill": "Raisonner"
    },
    {
      "id": "5N4-4",
      "chapterId": "5N4",
      "tier": 4,
      "title": "Défi 4ème : Partage euclidien et condition d'emballage total",
      "statement": "Un artisan chocolatier a préparé $148$ chocolats. Il dispose de boîtes pouvant contenir au maximum $12$ chocolats.\n**Combien de boîtes lui faut-il au minimum pour emballer TOUS ses chocolats ?**",
      "type": "exact",
      "answer": "13",
      "placeholder": "Ex: 13",
      "hint1": "Division : $148 = 12 \\times 12 + 4$. Il y a 12 boîtes pleines et 4 chocolats restants.",
      "solution": "1. Division euclidienne : $148 = 12 \\times 12 + 4$.\n2. Il faut 12 boîtes pleines + 1 boîte pour les 4 restants = **13 boîtes**.",
      "skill": "Résoudre"
    }
  ],
  "5P1": [
    {
      "id": "5P1-1",
      "chapterId": "5P1",
      "tier": 1,
      "title": "Coefficient de proportionnalité",
      "statement": "Dans un tableau de proportionnalité, la 1ère ligne contient $4$ et la 2ème ligne contient $28$.\nQuel est le coefficient de proportionnalité ?",
      "type": "exact",
      "answer": "7",
      "placeholder": "Ex: 7",
      "hint1": "Divise le nombre de la 2ème ligne par celui de la 1ère : $28 \\div 4$.",
      "solution": "$$k = \\frac{28}{4} = 7$$",
      "skill": "Calculer"
    },
    {
      "id": "5P1-2",
      "chapterId": "5P1",
      "tier": 2,
      "title": "Quatrième proportionnelle",
      "statement": "Le prix de $3\\text{ kg}$ de fruits est de $6\\text{ €}$.\nQuel est le prix de $7\\text{ kg}$ de ces mêmes fruits ?",
      "type": "exact",
      "answer": "14",
      "placeholder": "Ex: 14",
      "hint1": "Prix d'un kg : $6 \\div 3 = 2\\text{ €}$. Multiplie par 7.",
      "solution": "$$x = \\frac{6 \\times 7}{3} = 14\\text{ €}$$",
      "skill": "Calculer"
    },
    {
      "id": "5P1-3",
      "chapterId": "5P1",
      "tier": 3,
      "title": "Calcul d'un pourcentage d'une quantité",
      "statement": "Dans un collège de $180$ élèves, $20\\%$ des élèves sont externes.\nCombien d'élèves sont externes ?",
      "type": "exact",
      "answer": "36",
      "placeholder": "Ex: 36",
      "hint1": "Calcule $\\frac{20}{100} \\times 180$.",
      "solution": "$$N = 180 \\times 0{,}20 = 36\\text{ élèves}$$",
      "skill": "Calculer"
    },
    {
      "id": "5P1-4",
      "chapterId": "5P1",
      "tier": 4,
      "title": "Défi 4ème : Calcul de distance réelle sur carte à l'échelle",
      "statement": "Sur une carte au $1 / 25\\,000$, la distance entre deux clochers est de $8\\text{ cm}$.\n**Quelle est la distance réelle sur le terrain en kilomètres ?**",
      "type": "exact",
      "answer": "2",
      "placeholder": "Ex: 2",
      "hint1": "En cm : $8 \\times 25\\,000 = 200\\,000\\text{ cm}$. Convertis en km ($1\\text{ km} = 100\\,000\\text{ cm}$).",
      "solution": "1. Distance en cm : $8 \\times 25\\,000 = 200\\,000\\text{ cm}$.\n2. En km : $200\\,000 / 100\\,000 = 2\\text{ km}$.",
      "skill": "Résoudre"
    }
  ],
  "5G3": [
    {
      "id": "5G3-1",
      "chapterId": "5G3",
      "tier": 1,
      "title": "Somme des angles d'un triangle",
      "statement": "Dans un triangle $ABC$, on donne $\\widehat{A} = 50^\\circ$ et $\\widehat{B} = 70^\\circ$.\nQuelle est la mesure de l'angle $\\widehat{C}$ en degrés ?",
      "type": "exact",
      "answer": "60",
      "placeholder": "Ex: 60",
      "hint1": "La somme des 3 angles vaut $180^\\circ$.",
      "solution": "$$\\widehat{C} = 180^\\circ - (50^\\circ + 70^\\circ) = 180^\\circ - 120^\\circ = 60^\\circ$$",
      "skill": "Calculer"
    },
    {
      "id": "5G3-2",
      "chapterId": "5G3",
      "tier": 2,
      "title": "Angles dans un triangle isocèle",
      "statement": "Soit un triangle $EFG$ isocèle en $E$ tel que l'angle au sommet $\\widehat{E} = 70^\\circ$.\nQuelle est la mesure de l'angle à la base $\\widehat{EFG}$ en degrés ?",
      "type": "exact",
      "answer": "55",
      "placeholder": "Ex: 55",
      "hint1": "Les deux angles à la base sont égaux : $(180^\\circ - 70^\\circ) / 2$.",
      "solution": "$$\\widehat{EFG} = \\frac{180^\\circ - 70^\\circ}{2} = \\frac{110^\\circ}{2} = 55^\\circ$$",
      "skill": "Calculer"
    },
    {
      "id": "5G3-3",
      "chapterId": "5G3",
      "tier": 3,
      "title": "Inégalité triangulaire (Constructibilité)",
      "statement": "Peut-on construire un triangle dont les côtés mesurent $4\\text{ cm}$, $6\\text{ cm}$ et $12\\text{ cm}$ ? (oui ou non)",
      "type": "exact",
      "answer": "non",
      "placeholder": "oui ou non",
      "hint1": "Le plus grand côté (12) doit être strictement inférieur à la somme des deux autres ($4 + 6 = 10$).",
      "solution": "Comme $12 > 4 + 6$, l'inégalité triangulaire n'est pas vérifiée : le triangle **n'est pas constructible**.",
      "skill": "Raisonner"
    },
    {
      "id": "5G3-4",
      "chapterId": "5G3",
      "tier": 4,
      "title": "Défi 4ème : Déduction d'angle sur figure combinée",
      "statement": "Dans une figure à deux triangles adjacents : dans $ABC$ rectangle en $A$, $\\widehat{B} = 40^\\circ$ (donc $\\widehat{BCA} = 50^\\circ$). L'angle adjacent $\\widehat{DCE}$ vaut $60^\\circ$. Dans le triangle $CDE$, $\\widehat{CDE} = 50^\\circ$.\n**Quelle est la mesure de l'angle $\\widehat{CED}$ en degrés ?**",
      "type": "exact",
      "answer": "70",
      "placeholder": "Ex: 70",
      "hint1": "Dans le triangle $CDE$, la somme des angles vaut $180^\\circ$. $\\widehat{CED} = 180^\\circ - (60^\\circ + 50^\\circ)$.",
      "solution": "$$\\widehat{CED} = 180^\\circ - (60^\\circ + 50^\\circ) = 180^\\circ - 110^\\circ = 70^\\circ$$",
      "skill": "Résoudre"
    }
  ],
  "5G4": [
    {
      "id": "5G4-1",
      "chapterId": "5G4",
      "tier": 1,
      "title": "Conservation des longueurs par symétrie centrale",
      "statement": "Le segment $[A'B']$ est le symétrique de $[AB]$ par rapport à un point $O$.\nSi $AB = 8\\text{ cm}$, quelle est la longueur de $[A'B']$ ?",
      "type": "exact",
      "answer": "8",
      "placeholder": "Ex: 8",
      "hint1": "La symétrie centrale est une isométrie : elle conserve les longueurs.",
      "solution": "$$A'B' = AB = 8\\text{ cm}$$",
      "skill": "Raisonner"
    },
    {
      "id": "5G4-2",
      "chapterId": "5G4",
      "tier": 2,
      "title": "Centre de symétrie comme milieu",
      "statement": "Le point $A'$ est le symétrique de $A$ par rapport à $O$. Sachant que $OA = 6\\text{ cm}$, quelle est la longueur totale de $[AA']$ ?",
      "type": "exact",
      "answer": "12",
      "placeholder": "Ex: 12",
      "hint1": "$O$ est le milieu de $[AA']$, donc $AA' = 2 \\times OA$.",
      "solution": "$$AA' = 2 \\times 6 = 12\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "5G4-3",
      "chapterId": "5G4",
      "tier": 3,
      "title": "Diagonales d'un parallélogramme",
      "statement": "Dans un parallélogramme $ABCD$ de centre $O$, la diagonale $[AC]$ mesure $14\\text{ cm}$.\nQuelle est la longueur de $[OA]$ ?",
      "type": "exact",
      "answer": "7",
      "placeholder": "Ex: 7",
      "hint1": "Les diagonales d'un parallélogramme se coupent en leur milieu.",
      "solution": "$$OA = 14 \\div 2 = 7\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "5G4-4",
      "chapterId": "5G4",
      "tier": 4,
      "title": "Défi 4ème : Nature d'un parallélogramme particulier",
      "statement": "Quelle est la nature précise d'un parallélogramme dont les diagonales sont de même longueur et perpendiculaires ?",
      "type": "mcq",
      "answer": "Carré",
      "options": [
        "Carré",
        "Losange non carré",
        "Rectangle non carré",
        "Trapèze"
      ],
      "correctIndex": 0,
      "hint1": "Diagonales égales => rectangle. Diagonales perpendiculaires => losange. Un quadrilatère qui est les deux est un...",
      "solution": "Un quadrilatère à la fois rectangle et losange est un **carré**.",
      "skill": "Raisonner"
    }
  ],
  "5G6": [
    {
      "id": "5G6-1",
      "chapterId": "5G6",
      "tier": 1,
      "title": "Aire d'un rectangle",
      "statement": "Calculer l'aire d'un rectangle de longueur $L = 8\\text{ cm}$ et de largeur $l = 5\\text{ cm}$.",
      "type": "exact",
      "answer": "40",
      "placeholder": "Ex: 40",
      "hint1": "Formule : $\\mathcal{A} = L \\times l$.",
      "solution": "$$\\mathcal{A} = 8 \\times 5 = 40\\text{ cm}^2$$",
      "skill": "Calculer"
    },
    {
      "id": "5G6-2",
      "chapterId": "5G6",
      "tier": 2,
      "title": "Aire d'un triangle rectangle",
      "statement": "Calculer l'aire d'un triangle rectangle dont les côtés de l'angle droit mesurent $6\\text{ cm}$ et $7\\text{ cm}$.",
      "type": "exact",
      "answer": "21",
      "placeholder": "Ex: 21",
      "hint1": "Formule : $\\mathcal{A} = (a \\times b) / 2$.",
      "solution": "$$\\mathcal{A} = \\frac{6 \\times 7}{2} = \\frac{42}{2} = 21\\text{ cm}^2$$",
      "skill": "Calculer"
    },
    {
      "id": "5G6-3",
      "chapterId": "5G6",
      "tier": 3,
      "title": "Aire d'un disque",
      "statement": "Calculer la valeur exacte de l'aire d'un disque de rayon $R = 5\\text{ cm}$.\nDonner la réponse sous la forme $n\\pi\\text{ cm}^2$ (saisir le nombre $n$).",
      "type": "exact",
      "answer": "25",
      "placeholder": "Ex: 25",
      "hint1": "Formule : $\\mathcal{A} = \\pi R^2 = \\pi \\times 5^2$.",
      "solution": "$$\\mathcal{A} = \\pi \\times 25 = 25\\pi\\text{ cm}^2$$",
      "skill": "Calculer"
    },
    {
      "id": "5G6-4",
      "chapterId": "5G6",
      "tier": 4,
      "title": "Défi 4ème : Aire d'une surface composée par soustraction",
      "statement": "Une plaque métallique a la forme d'un rectangle de $12\\text{ cm} \\times 8\\text{ cm}$. On découpe à l'un de ses coins un triangle rectangle de côtés $4\\text{ cm}$ et $6\\text{ cm}$.\n\n**Quelle est l'aire restante de la plaque en $\\text{cm}^2$ ?**",
      "type": "exact",
      "answer": "84",
      "placeholder": "Ex: 84",
      "hint1": "Aire rectangle : $12 \\times 8 = 96$. Aire coin découpé : $(4 \\times 6)/2 = 12$.",
      "solution": "$$\\mathcal{A} = 96 - 12 = 84\\text{ cm}^2$$",
      "skill": "Résoudre"
    }
  ],
  "5D1": [
    {
      "id": "5D1-1",
      "chapterId": "5D1",
      "tier": 1,
      "title": "Calcul de l'effectif total",
      "statement": "Dans un club, il y a 8 benjamins, 12 minimes et 5 cadets.\nQuel est l'effectif total ?",
      "type": "exact",
      "answer": "25",
      "placeholder": "Ex: 25",
      "hint1": "Fais la somme : $8 + 12 + 5$.",
      "solution": "$$N = 8 + 12 + 5 = 25$$",
      "skill": "Calculer"
    },
    {
      "id": "5D1-2",
      "chapterId": "5D1",
      "tier": 2,
      "title": "Fréquence sous forme de fraction",
      "statement": "Sur 20 élèves, 6 font du théâtre. Quelle est la fréquence de ce groupe ? (Fraction irréductible)",
      "type": "exact",
      "answer": "3/10",
      "placeholder": "Ex: 3/10",
      "hint1": "Fraction : $6/20$. Simplifie par 2.",
      "solution": "$$\\text{Fréquence} = \\frac{6}{20} = \\frac{3}{10}$$",
      "skill": "Calculer"
    },
    {
      "id": "5D1-3",
      "chapterId": "5D1",
      "tier": 3,
      "title": "Fréquence en pourcentage",
      "statement": "Dans une classe de 25 élèves, 7 portent des lunettes.\nQuel est le pourcentage d'élèves portant des lunettes ? (Nombre sans %)",
      "type": "exact",
      "answer": "28",
      "placeholder": "Ex: 28",
      "hint1": "Calcule $\\frac{7}{25} \\times 100$.",
      "solution": "$$\\frac{7}{25} \\times 100 = 28\\%$$",
      "skill": "Calculer"
    },
    {
      "id": "5D1-4",
      "chapterId": "5D1",
      "tier": 4,
      "title": "Défi 4ème : Angle dans un diagramme circulaire",
      "statement": "Dans une classe de 20 élèves, 5 élèves viennent à vélo.\n**Quelle doit être la mesure en degrés de l'angle du secteur circulaire représentant ce groupe ?**",
      "type": "exact",
      "answer": "90",
      "placeholder": "Ex: 90",
      "hint1": "Le cercle complet mesure $360^\\circ$. Calcule $\\frac{5}{20} \\times 360^\\circ$.",
      "solution": "$$\\text{Angle} = \\frac{5}{20} \\times 360^\\circ = 0{,}25 \\times 360^\\circ = 90^\\circ$$",
      "skill": "Résoudre"
    }
  ],
  "5N5": [
  {
    "id": "5N5-1",
    "chapterId": "5N5",
    "tier": 1,
    "title": "Réduction d'écriture littérale",
    "statement": "Réduire l'expression littérale suivante :\n$$A = 4x + 7x$$",
    "type": "exact",
    "answer": "11x",
    "placeholder": "Ex: 11x",
    "hint1": "On met $x$ en facteur : $(4 + 7)x$.",
    "solution": "$$A = (4 + 7)x = 11x$$",
    "skill": "Calculer"
  },
  {
    "id": "5N5-2",
    "chapterId": "5N5",
    "tier": 2,
    "title": "Calcul de la valeur d'une expression",
    "statement": "Calculer la valeur numérique de l'expression $B = 3x - 5$ pour $x = 6$ :",
    "type": "exact",
    "answer": "13",
    "placeholder": "Ex: 13",
    "hint1": "Remplace $x$ par 6 en rétablissant la multiplication : $3 \\times 6 - 5$.",
    "solution": "$$B = 3 \\times 6 - 5 = 18 - 5 = 13$$",
    "skill": "Calculer"
  },
  {
    "id": "5N5-3",
    "chapterId": "5N5",
    "tier": 3,
    "title": "Tester une égalité",
    "statement": "On considère l'égalité $2x + 7 = 19$. Le nombre 6 est-il solution de cette équation ?",
    "type": "mcq",
    "options": [
      "Oui, car $2 \\times 6 + 7 = 12 + 7 = 19$",
      "Non, car $2 \\times 6 + 7 = 26$",
      "Non, car $19 - 7 = 11$",
      "Oui, car $6 + 7 = 13$"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : en remplaçant x par 6, le membre de gauche vaut 19, égal au membre de droite.",
      "Erreur : 2x signifie 2 multiplié par x et non 2 collé à 6.",
      "Erreur de calcul : 19 - 7 = 12.",
      "Erreur d'inattention."
    ],
    "hint1": "Calcule $2 \\times 6 + 7$ et compare avec 19.",
    "solution": "Pour $x = 6$, $2 \\times 6 + 7 = 12 + 7 = 19$. L'égalité est vérifiée, 6 est bien solution.",
    "skill": "Raisonner"
  },
  {
    "id": "5N5-3b",
    "chapterId": "5N5",
    "tier": 3,
    "title": "Tester une égalité",
    "statement": "On considère l'égalité $4x - 5 = 11$. Le nombre 3 est-il solution de cette équation ?",
    "type": "mcq",
    "options": [
      "Non, car $4 \\times 3 - 5 = 12 - 5 = 7 \\neq 11$",
      "Oui, car $4 \\times 3 - 5 = 11$",
      "Oui, car 3 divise 12",
      "On ne peut pas savoir"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : pour x = 3, le membre de gauche vaut 7, ce qui est différent de 11.",
      "Erreur de calcul : 12 - 5 = 7 et non 11.",
      "La divisibilité ne prouve pas que le nombre est solution de l'équation.",
      "On peut le savoir en calculant la valeur du membre de gauche pour x = 3."
    ],
    "hint1": "Calcule $4 \\times 3 - 5$ et compare avec 11.",
    "solution": "Pour $x = 3$, $4 \\times 3 - 5 = 12 - 5 = 7$. Comme $7 \\neq 11$, l'égalité n'est pas vérifiée, 3 n'est pas solution.",
    "skill": "Raisonner"
  },
  {
    "id": "5N5-4",
    "chapterId": "5N5",
    "tier": 4,
    "title": "Défi 4ème : Résolution d'équation",
    "statement": "Résoudre l'équation suivante d'inconnue $x$ :\n$$5x = 45$$",
    "type": "exact",
    "answer": "9",
    "placeholder": "Ex: 9",
    "hint1": "Divise les deux côtés de l'égalité par 5.",
    "solution": "$$x = \\frac{45}{5} = 9$$",
    "skill": "Résoudre"
  }
],
  "5G1": [
  {
    "id": "5G1-1",
    "chapterId": "5G1",
    "tier": 1,
    "title": "Abscisse sur une droite graduée",
    "statement": "Sur une droite graduée d'origine $O$, le point $A$ a pour abscisse $-4$. Quelle est la distance $OA$ ?",
    "type": "exact",
    "answer": "4",
    "placeholder": "Ex: 4",
    "hint1": "La distance à zéro d'un nombre est toujours positive.",
    "solution": "La distance entre l'origine et le point d'abscisse $-4$ est égale à $4$ unités.",
    "skill": "Représenter"
  },
  {
    "id": "5G1-2",
    "chapterId": "5G1",
    "tier": 2,
    "title": "Lecture de coordonnées dans le plan",
    "statement": "Dans un repère orthogonal, le point $M$ a pour coordonnées $(3 ; -5)$. Quelle est l'ordonnée de ce point ?",
    "type": "exact",
    "answer": "-5",
    "placeholder": "Ex: -5",
    "hint1": "Les coordonnées s'écrivent sous la forme $(\\text{abscisse} ; \\text{ordonnée})$.",
    "solution": "L'abscisse est 3 (axe horizontal) et l'ordonnée est $-5$ (axe vertical).",
    "skill": "Représenter"
  },
  {
    "id": "5G1-3",
    "chapterId": "5G1",
    "tier": 3,
    "title": "Symétrie par rapport aux axes",
    "statement": "Dans un repère orthogonal, le point $A$ a pour coordonnées $(2 ; 5)$. Quelles sont les coordonnées de son symétrique $A'$ par rapport à l'axe des abscisses ?",
    "type": "mcq",
    "options": [
      "(2 ; -5)",
      "(-2 ; 5)",
      "(-2 ; -5)",
      "(5 ; 2)"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : la symétrie par rapport à l'axe des abscisses conserve l'abscisse et change le signe de l'ordonnée.",
      "Ceci est le symétrique par rapport à l'axe des ordonnées.",
      "Ceci est le symétrique par rapport à l'origine.",
      "Ceci est une permutation des coordonnées."
    ],
    "hint1": "Le point reste au même niveau horizontal mais passe de l'autre côté de l'axe des abscisses.",
    "solution": "L'abscisse reste $x = 2$ et l'ordonnée devient l'opposée : $y = -5$, donc $A'(2 ; -5)$.",
    "skill": "Raisonner"
  },
  {
    "id": "5G1-4",
    "chapterId": "5G1",
    "tier": 4,
    "title": "Défi 4ème : Milieu d'un segment",
    "statement": "Dans un repère, on donne $A(2 ; 4)$ et $B(8 ; 10)$. Quelle est l'abscisse du milieu $I$ du segment $[AB]$ ?",
    "type": "exact",
    "answer": "5",
    "placeholder": "Ex: 5",
    "hint1": "L'abscisse du milieu est la moyenne des abscisses : $\\frac{x_A + x_B}{2}$.",
    "solution": "$$x_I = \\frac{2 + 8}{2} = \\frac{10}{2} = 5$$",
    "skill": "Calculer"
  }
],
  "5G2": [
  {
    "id": "5G2-1",
    "chapterId": "5G2",
    "tier": 1,
    "title": "Définition de la symétrie centrale",
    "statement": "Si le point $B$ est le symétrique du point $A$ par rapport au point $O$, que peut-on affirmer ?",
    "type": "mcq",
    "options": [
      "Le point O est le milieu du segment [AB]",
      "Le point A est le milieu du segment [OB]",
      "Les droites (AB) et (AO) sont perpendiculaires",
      "Le segment [AB] mesure la moitié de [OA]"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : par définition de la symétrie de centre O, O est le milieu du segment formé par le point et son image.",
      "Faux, c'est O qui est au milieu.",
      "Faux, les points A, O et B sont alignés.",
      "Faux, AB mesure le double de OA."
    ],
    "hint1": "La symétrie centrale est un demi-tour autour du centre O.",
    "solution": "Par définition, $O$ est le milieu du segment $[AB]$.",
    "skill": "Raisonner"
  },
  {
    "id": "5G2-2",
    "chapterId": "5G2",
    "tier": 2,
    "title": "Conservation des longueurs",
    "statement": "Un segment $[AB]$ mesure $7,5\\text{ cm}$. Par la symétrie centrale de centre $O$, quelle est la longueur de son symétrique $[A'B']$ en cm ?",
    "type": "exact",
    "answer": "7.5",
    "placeholder": "Ex: 7.5",
    "hint1": "La symétrie centrale conserve les longueurs.",
    "solution": "La symétrie centrale est une isométrie : elle conserve les distances, donc $A'B' = AB = 7,5\\text{ cm}$.",
    "skill": "Raisonner"
  },
  {
    "id": "5G2-3",
    "chapterId": "5G2",
    "tier": 3,
    "title": "Conservation des angles et des aires",
    "statement": "Un triangle a une aire de $18\\text{ cm}^2$ et possède un angle de $52^\\circ$. Quelles sont l'aire et la mesure de l'angle homologue dans le triangle symétrique ?",
    "type": "mcq",
    "options": [
      "Aire = 18 cm² et angle = 52°",
      "Aire = 36 cm² et angle = 104°",
      "Aire = 9 cm² et angle = 26°",
      "Aire = 18 cm² et angle = 128°"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : la symétrie centrale conserve les angles et les aires.",
      "Faux : il n'y a pas d'agrandissement.",
      "Faux : il n'y a pas de réduction.",
      "Faux : l'angle n'est pas modifié."
    ],
    "hint1": "La symétrie centrale ne déforme pas les figures.",
    "solution": "La symétrie centrale conserve les mesures d'angles et les aires, donc l'aire reste $18\\text{ cm}^2$ et l'angle $52^\\circ$.",
    "skill": "Raisonner"
  },
  {
    "id": "5G2-4",
    "chapterId": "5G2",
    "tier": 4,
    "title": "Défi : Centre de symétrie d'un quadrilatère",
    "statement": "Un quadrilatère possède un centre de symétrie qui est le point d'intersection de ses diagonales. Il s'agit obligatoirement d'un...",
    "type": "mcq",
    "options": [
      "Parallélogramme",
      "Trapèze quelconque",
      "Cerf-volant",
      "Triangle"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : tout quadrilatère ayant un centre de symétrie est un parallélogramme.",
      "Un trapèze n'a pas de centre de symétrie en général.",
      "Un cerf-volant a un axe de symétrie mais pas de centre.",
      "Un triangle n'a pas 4 côtés."
    ],
    "hint1": "Les côtés opposés sont symétriques et donc parallèles et de même longueur.",
    "solution": "Un quadrilatère qui admet un centre de symétrie est un parallélogramme.",
    "skill": "Raisonner"
  }
],
  "5G5": [
  {
    "id": "5G5-1",
    "chapterId": "5G5",
    "tier": 1,
    "title": "Propriété des côtés d'un parallélogramme",
    "statement": "Dans un parallélogramme $ABCD$, on sait que $AB = 9\\text{ cm}$ et $BC = 5\\text{ cm}$. Quelle est la longueur du côté $CD$ en cm ?",
    "type": "exact",
    "answer": "9",
    "placeholder": "Ex: 9",
    "hint1": "Dans un parallélogramme, les côtés opposés ont la même longueur.",
    "solution": "Les côtés opposés $[AB]$ et $[CD]$ ont la même longueur, donc $CD = AB = 9\\text{ cm}$.",
    "skill": "Calculer"
  },
  {
    "id": "5G5-2",
    "chapterId": "5G5",
    "tier": 2,
    "title": "Aire d'un parallélogramme",
    "statement": "Calculer l'aire d'un parallélogramme de base $b = 8\\text{ cm}$ et de hauteur relative $h = 4,5\\text{ cm}$ en $\\text{cm}^2$ :",
    "type": "exact",
    "answer": "36",
    "placeholder": "Ex: 36",
    "hint1": "Formule : $\\text{Aire} = \\text{base} \\times \\text{hauteur}$.",
    "solution": "$$\\text{Aire} = 8 \\times 4,5 = 36\\text{ cm}^2$$",
    "skill": "Calculer"
  },
  {
    "id": "5G5-3",
    "chapterId": "5G5",
    "tier": 3,
    "title": "Reconnaître un losange",
    "statement": "Un parallélogramme dont les diagonales sont perpendiculaires est un...",
    "type": "mcq",
    "options": [
      "Losange",
      "Rectangle",
      "Trapèze",
      "Cône"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : les diagonales perpendiculaires caractérisent le losange parmi les parallélogrammes.",
      "Le rectangle a des diagonales de même longueur.",
      "Un trapèze n'est pas forcément un parallélogramme.",
      "Un cône est un solide 3D."
    ],
    "hint1": "Pense aux propriétés des diagonales du losange.",
    "solution": "Si un parallélogramme a ses diagonales perpendiculaires, alors c'est un losange.",
    "skill": "Raisonner"
  },
  {
    "id": "5G5-4",
    "chapterId": "5G5",
    "tier": 4,
    "title": "Défi : Diagonales du rectangle et cercle",
    "statement": "Dans un rectangle $ABCD$ de centre $O$, la diagonale $[AC]$ mesure $10\\text{ cm}$. Que vaut la longueur $OB$ en cm ?",
    "type": "exact",
    "answer": "5",
    "placeholder": "Ex: 5",
    "hint1": "Les diagonales d'un rectangle ont la même longueur et se coupent en leur milieu.",
    "solution": "Les diagonales ont même longueur ($BD = AC = 10\\text{ cm}$) et se coupent en leur milieu $O$, donc $OB = \\frac{10}{2} = 5\\text{ cm}$.",
    "skill": "Calculer"
  }
],
  "5D2": [
  {
    "id": "5D2-1",
    "chapterId": "5D2",
    "tier": 1,
    "title": "Probabilité élémentaire avec un dé",
    "statement": "On lance un dé équilibré à 6 faces numérotées de 1 à 6. Quelle est la probabilité d'obtenir le chiffre 4 ?",
    "type": "mcq",
    "options": [
      "1/6",
      "4/6",
      "1/4",
      "1/2"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : il y a 1 face avec le 4 sur 6 faces au total.",
      "Erreur : 4 est la valeur sur la face, pas le nombre d'issues favorables.",
      "Erreur de dénominateur.",
      "Erreur."
    ],
    "hint1": "Une seule face porte le chiffre 4 sur un total de 6 faces.",
    "solution": "$$P(4) = \\frac{1}{6}$$",
    "skill": "Calculer"
  },
  {
    "id": "5D2-2",
    "chapterId": "5D2",
    "tier": 2,
    "title": "Tirage dans une urne",
    "statement": "Une boîte contient 3 jetons rouges, 5 jetons verts et 2 jetons jaunes. On tire un jeton au hasard. Quelle est la probabilité de tirer un jeton vert sous forme décimale ?",
    "type": "exact",
    "answer": "0.5",
    "placeholder": "Ex: 0.5",
    "hint1": "Nombre total de jetons : $3 + 5 + 2 = 10$.",
    "solution": "$$P(\\text{Vert}) = \\frac{5}{10} = 0,5$$",
    "skill": "Calculer"
  },
  {
    "id": "5D2-3",
    "chapterId": "5D2",
    "tier": 3,
    "title": "Événement certain et impossible",
    "statement": "On lance un dé à 6 faces numérotées de 1 à 6. Quelle est la probabilité d'obtenir un nombre strictement supérieur à 6 ?",
    "type": "exact",
    "answer": "0",
    "placeholder": "Ex: 0",
    "hint1": "C'est un événement impossible.",
    "solution": "Aucune face ne porte un nombre supérieur à 6, c'est un événement impossible : $P = 0$.",
    "skill": "Raisonner"
  },
  {
    "id": "5D2-4",
    "chapterId": "5D2",
    "tier": 4,
    "title": "Défi 4ème : Nombre pair sur un dé",
    "statement": "On lance un dé équilibré à 6 faces. Quelle est la probabilité en pourcentage d'obtenir un nombre pair (2, 4 ou 6) ?",
    "type": "exact",
    "answer": "50",
    "placeholder": "Ex: 50",
    "hint1": "Il y a 3 issues paires sur 6 au total : $\\frac{3}{6} = \\frac{1}{2}$.",
    "solution": "$$P(\\text{Pair}) = \\frac{3}{6} = 0,5 = 50\\%$$",
    "skill": "Calculer"
  }
],
  "5P2": [
  {
    "id": "5P2-1",
    "chapterId": "5P2",
    "tier": 1,
    "title": "Calcul de distance à vitesse constante",
    "statement": "Un cycliste roule à la vitesse constante de $20\\text{ km/h}$. Quelle distance en km parcourt-il en $3\\text{ heures}$ ?",
    "type": "exact",
    "answer": "60",
    "placeholder": "Ex: 60",
    "hint1": "Formule : $d = v \\times t$.",
    "solution": "$$d = 20 \\times 3 = 60\\text{ km}$$",
    "skill": "Calculer"
  },
  {
    "id": "5P2-2",
    "chapterId": "5P2",
    "tier": 2,
    "title": "Périmètre d'un rectangle en fonction de sa longueur",
    "statement": "Un rectangle a une largeur fixe de $4\\text{ cm}$ et une longueur notée $L$. Quelle est l'expression de son périmètre en fonction de $L$ ?",
    "type": "mcq",
    "options": [
      "2L + 8",
      "4L",
      "L + 8",
      "2L + 4"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : $P = 2 \\times (L + 4) = 2L + 8$.",
      "Ceci est l'aire.",
      "Erreur de formule de périmètre.",
      "Erreur de distributivité."
    ],
    "hint1": "Le périmètre est $2 \\times (\\text{longueur} + \\text{largeur})$.",
    "solution": "$$P = 2 \\times (L + 4) = 2L + 8$$",
    "skill": "Modéliser"
  },
  {
    "id": "5P2-3",
    "chapterId": "5P2",
    "tier": 3,
    "title": "Tarif avec partie fixe et variable",
    "statement": "Un artisan facture un forfait fixe de déplacement de $30\\text{ €}$ plus $25\\text{ €}$ par heure travaillée $t$. Quel est le montant de la facture en € pour une intervention de $4\\text{ heures}$ ?",
    "type": "exact",
    "answer": "130",
    "placeholder": "Ex: 130",
    "hint1": "Prix $= 30 + 25 \\times t$.",
    "solution": "$$\\text{Prix} = 30 + 25 \\times 4 = 30 + 100 = 130\\text{ €}$$",
    "skill": "Calculer"
  },
  {
    "id": "5P2-4",
    "chapterId": "5P2",
    "tier": 4,
    "title": "Défi : Vitesse moyenne avec conversion",
    "statement": "Une voiture parcourt $45\\text{ km}$ en $30\\text{ minutes}$. Quelle est sa vitesse moyenne en $\\text{km/h}$ ?",
    "type": "exact",
    "answer": "90",
    "placeholder": "Ex: 90",
    "hint1": "30 minutes correspondent à 0,5 heure. $v = \\frac{d}{t}$.",
    "solution": "$$v = \\frac{45}{0,5} = 90\\text{ km/h}$$",
    "skill": "Calculer"
  }
],
  "5A1": [
  {
    "id": "5A1-1",
    "chapterId": "5A1",
    "tier": 1,
    "title": "Tracé d'un carré dans Scratch",
    "statement": "Dans Scratch, pour tracer un carré avec une boucle « répéter 4 fois : avancer de 50, tourner de ... degrés », de quel angle doit-on tourner ?",
    "type": "exact",
    "answer": "90",
    "placeholder": "Ex: 90",
    "hint1": "La somme des 4 rotations fait $360^\\circ$.",
    "solution": "$$\\text{Angle} = \\frac{360^\\circ}{4} = 90^\\circ$$",
    "skill": "Représenter"
  },
  {
    "id": "5A1-2",
    "chapterId": "5A1",
    "tier": 2,
    "title": "Distance totale parcourue",
    "statement": "Un lutin exécute le script : « répéter 6 fois : avancer de 15 pas ». Quelle distance totale en pas a-t-il parcourue ?",
    "type": "exact",
    "answer": "90",
    "placeholder": "Ex: 90",
    "hint1": "Multiplie le nombre de répétitions par le nombre de pas.",
    "solution": "$$6 \\times 15 = 90\\text{ pas}$$",
    "skill": "Calculer"
  },
  {
    "id": "5A1-3",
    "chapterId": "5A1",
    "tier": 3,
    "title": "Triangle équilatéral dans Scratch",
    "statement": "Pour faire tracer un triangle équilatéral à un lutin avec le bloc « répéter 3 fois », quel doit être l'angle de rotation extérieur en degrés ?",
    "type": "exact",
    "answer": "120",
    "placeholder": "Ex: 120",
    "hint1": "Attention : l'angle extérieur vaut $\\frac{360^\\circ}{3}$.",
    "solution": "$$\\text{Angle} = \\frac{360^\\circ}{3} = 120^\\circ$$",
    "skill": "Raisonner"
  },
  {
    "id": "5A1-4",
    "chapterId": "5A1",
    "tier": 4,
    "title": "Défi : Reconnaissance de polygone régulier",
    "statement": "Quel polygone régulier le lutin trace-t-il avec ce script : « répéter 6 fois : avancer de 40, tourner de 60 degrés » ?",
    "type": "mcq",
    "options": [
      "Un hexagone régulier (6 côtés)",
      "Un octogone régulier (8 côtés)",
      "Un pentagone régulier (5 côtés)",
      "Un carré (4 côtés)"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : la boucle est répétée 6 fois et $6 \\times 60^\\circ = 360^\\circ$, c'est un hexagone régulier.",
      "Un octogone nécessiterait 8 répétitions.",
      "Un pentagone a 5 côtés.",
      "Un carré a 4 côtés."
    ],
    "hint1": "Compte le nombre de répétitions de la boucle.",
    "solution": "Le script effectue 6 côtés identiques et 6 rotations de $60^\\circ$, il s'agit d'un hexagone régulier.",
    "skill": "Raisonner"
  }
]
};

window.MATHS_WORKSHEETS_5E = {
  "5N1": [
    {
        "id": "5N1-devoir_maison",
        "filename": "Fiche_5e_Priorites_Operatoires.md",
        "type": "devoir_entrainement",
        "title": "Fiche 5ème : Priorités opératoires & Nombres entiers",
        "statement": `# Classe de 5ème — Mathématiques
## Fiche d'entraînement : Priorités opératoires et divisibilité

### Exercice 1 : Calculs sans calculatrice (6 points)
Calculer en détaillant les étapes :
1. $A = 12 + 3 \\times 7$
2. $B = 35 - 5 \\times (4 + 2)$
3. $C = 48 \\div 6 + 3 \\times 4 - 2$

### Exercice 2 : Problème concret (4 points)
Lucas achète 3 classeurs à 4,50 € l'un et 5 stylos à 1,20 € l'un. Il paye avec un billet de 50 €.
1. Écrire une seule expression numérique permettant de calculer la monnaie rendue à Lucas.
2. Effectuer le calcul.

---
## Corrigé détaillé

### Exercice 1
1. $A = 12 + 21 = 33$.
2. $B = 35 - 5 \\times 6 = 35 - 30 = 5$.
3. $C = 8 + 12 - 2 = 20 - 2 = 18$.

### Exercice 2
1. Expression : $M = 50 - (3 \\times 4,50 + 5 \\times 1,20)$.
2. $M = 50 - (13,50 + 6,00) = 50 - 19,50 = 30,50$ €.`,
        "solution": ""
    }
],
  "5N2": [
    {
        "id": "5N2-devoir_relatifs",
        "filename": "Fiche_5e_Nombres_Relatifs.md",
        "type": "devoir_entrainement",
        "title": "Fiche 5ème : Nombres relatifs et repérage",
        "statement": `# Classe de 5ème — Mathématiques
## Fiche d'entraînement : Nombres relatifs et opérations

### Exercice 1 : Comparaison et repérage (4 points)
1. Ranger par ordre croissant : $-5 \\quad ; \\quad +3{,}2 \\quad ; \\quad -8{,}5 \\quad ; \\quad 0 \\quad ; \\quad -1{,}2 \\quad ; \\quad +4$.
2. Donner l'opposé et la distance à zéro de chacun des nombres : $-7{,}4$ et $+5$.

### Exercice 2 : Additions et soustractions (6 points)
Calculer en détaillant les étapes de calcul :
1. $A = (-8) + (+15)$
2. $B = (-12) + (-9)$
3. $C = (+7) - (-11)$
4. $D = (-14) - (+6)$

---
## Corrigé détaillé

### Exercice 1
1. Ordre croissant : $-8{,}5 < -5 < -1{,}2 < 0 < +3{,}2 < +4$.
2. Pour $-7{,}4$ : opposé $= +7{,}4$, distance à zéro $= 7{,}4$.
Pour $+5$ : opposé $= -5$, distance à zéro $= 5$.

### Exercice 2
1. $A = +(15 - 8) = 7$.
2. $B = -(12 + 9) = -21$.
3. $C = 7 + 11 = 18$.
4. $D = -14 + (-6) = -20$.`,
        "solution": ""
    }
],
  "5G3": [
    {
        "id": "5G3-devoir_angles",
        "filename": "Fiche_5e_Angles_Triangles.md",
        "type": "devoir_entrainement",
        "title": "Fiche 5ème : Angles et triangles",
        "statement": `# Classe de 5ème — Mathématiques
## Fiche d'entraînement : Angles, parallélisme et triangles

### Exercice 1 : Somme des angles d'un triangle (5 points)
1. Dans un triangle $ABC$, on donne $\\widehat{A} = 48^\\circ$ et $\\widehat{B} = 72^\\circ$. Calculer la mesure de $\\widehat{C}$.
2. Un triangle peut-il avoir des angles de $65^\\circ$, $45^\\circ$ et $75^\\circ$ ? Justifier soigneusement.

### Exercice 2 : Angles alternes-internes (5 points)
Deux droites parallèles $(d_1)$ et $(d_2)$ sont coupées par une sécante $(d)$. Un des angles alternes-internes mesure $56^\\circ$.
1. Quelle est la mesure de l'autre angle alterne-interne ?
2. Énoncer la propriété du cours qui justifie votre réponse.

---
## Corrigé détaillé

### Exercice 1
1. Dans un triangle, la somme des trois angles vaut $180^\\circ$ :
$$\\widehat{C} = 180^\\circ - (48^\\circ + 72^\\circ) = 180^\\circ - 120^\\circ = 60^\\circ$$
2. Somme des angles proposés : $65^\\circ + 45^\\circ + 75^\\circ = 185^\\circ \\neq 180^\\circ$. Ce triangle ne peut pas être construit.

### Exercice 2
1. L'autre angle alterne-interne mesure également $56^\\circ$.
2. Propriété : Si deux droites parallèles sont coupées par une sécante, alors les angles alternes-internes qu'elles forment ont la même mesure.`,
        "solution": ""
    }
]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_5E);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_5E);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_5E);
