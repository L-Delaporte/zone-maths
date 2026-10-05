/**
 * Données pédagogiques officielles de la classe de Seconde (Lycée Général et Technologique)
 * Conforme au Bulletin Officiel de l'Éducation Nationale et à maths-et-tiques.fr
 */

window.MATHS_COURSES_2NDE = {
  "2N1": {
    "title": "2N1 : Ensembles de nombres, arithmétique et nombres réels",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Identifier les ensembles fondamentaux de nombres : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.",
      "Décomposer un nombre entier naturel en produit de facteurs premiers.",
      "Simplifier des fractions et des radicaux à l'aide de l'arithmétique.",
      "Démontrer que $\\sqrt{2}$ est un nombre irrationnel (démonstration par l'absurde historique)."
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
      }
    ],
    "traps": [
      "⚠️ Ne pas juger un nombre sur son écriture brute ! $\\frac{21}{7} = 3 \\in \\mathbb{N}$ et $\\sqrt{9} = 3 \\in \\mathbb{N}$.",
      "⚠️ $\\frac{1}{3} \\notin \\mathbb{D}$ : un nombre décimal doit posséder un nombre **fini** de chiffres après la virgule."
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
      "Simplifier des fractions rationnelles en précisant les valeurs interdites."
    ],
    "keyPoints": [
      {
        "title": "1. Les 3 identités remarquables fondamentales",
        "content": "Pour tous nombres réels $a$ et $b$ :\n1. Carré d'une somme : $$(a + b)^2 = a^2 + 2ab + b^2$$\n2. Carré d'une différence : $$(a - b)^2 = a^2 - 2ab + b^2$$\n3. Différence de deux carrés : $$(a - b)(a + b) = a^2 - b^2$$\n\n• **Dans le sens direct** : on développe un produit en une somme.\n• **Dans le sens réciproque** : on factorise une somme en un produit (très utile pour résoudre des équations produit-nul)."
      },
      {
        "title": "2. Techniques avancées de factorisation",
        "content": "• **Facteur commun évident ou composé** :\n$$A(x) = (2x - 3)(x + 5) - (2x - 3)(4x - 1) = (2x - 3)[(x + 5) - (4x - 1)] = (2x - 3)(-3x + 6)$$\n• **Reconnaissance d'une identité remarquable** :\n$$B(x) = 9x^2 - 25 = (3x)^2 - 5^2 = (3x - 5)(3x + 5)$$"
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
      }
    ],
    "traps": [
      "⚠️ Erreur classique de parenthèse : $-(x + 4) = -x - 4$ et non $-x + 4$ !",
      "⚠️ $(a+b)^2 \\neq a^2 + b^2$ : il ne faut jamais oublier le double produit $2ab$ !"
    ],
    "flashcards": [
      {
        "q": "Développer $(2x - 5)^2$.",
        "a": "$(2x - 5)^2 = 4x^2 - 20x + 25$."
      },
      {
        "q": "Factoriser $16x^2 - 49$.",
        "a": "$16x^2 - 49 = (4x - 7)(4x + 7)$."
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
      "Résoudre des équations et inéquations du type $|x - a| = r$ et $|x - a| \\le r$."
    ],
    "keyPoints": [
      {
        "title": "1. Intervalles de $\\mathbb{R}$, intersection et réunion",
        "content": "• **Intersection $I \\cap J$** : ensemble des réels appartenant **à la fois** à $I$ et à $J$.\n• **Réunion $I \\cup J$** : ensemble des réels appartenant **à au moins l'un** des deux intervalles $I$ ou $J$.\nExemple : Si $I = [-3 ; 4]$ et $J = [1 ; 7[$, alors :\n$$I \\cap J = [1 ; 4] \\quad \\text{et} \\quad I \\cup J = [-3 ; 7[$$\n• **Inégalités strictes et larges** : crochet tourné vers l'extérieur pour exclu ($]a; b[$), vers l'intérieur pour inclus ($[a; b]$)."
      },
      {
        "title": "2. Valeur absolue et distance sur la droite numérique",
        "content": "• **Définition** : La valeur absolue d'un réel $x$, notée $|x|$, est sa distance à l'origine $0$ :\n$$|x| = \\begin{cases} x & \\text{si } x \\ge 0 \\\\ -x & \\text{si } x < 0 \\end{cases}$$\n• **Propriété géométrique** : Pour tous réels $x$ et $a$, $|x - a|$ est la **distance** entre les points d'abscisses $x$ et $a$ sur la droite graduée.\n• **Résolution d'inéquations** : Pour $r > 0$ :\n$$|x - a| \\le r \\iff a - r \\le x \\le a + r \\iff x \\in [a - r ; a + r]$$\n$$|x - a| = r \\iff x = a - r \\quad \\text{ou} \\quad x = a + r$$"
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
      }
    ],
    "traps": [
      "⚠️ Pour l'expression $|x + 4|$, le centre est $-4$ car $|x + 4| = |x - (-4)|$ !",
      "⚠️ Une valeur absolue est toujours positive ou nulle : l'équation $|x - 2| = -3$ n'a aucune solution ($S = \\emptyset$)."
    ],
    "flashcards": [
      {
        "q": "Que vaut $|-7{,}8|$ ?",
        "a": "$|-7{,}8| = 7{,}8$."
      },
      {
        "q": "Résoudre dans $\\mathbb{R}$ l'inéquation $|x - 5| \\le 3$.",
        "a": "$x \\in [5 - 3 ; 5 + 3] = [2 ; 8]$."
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
      "Résoudre des inéquations rationnelles en respectant les valeurs interdites."
    ],
    "keyPoints": [
      {
        "title": "1. Signe d'une expression affine $ax + b$ ($a \\neq 0$)",
        "content": "L'expression $ax + b$ s'annule en $x = -\\frac{b}{a}$.\n• Si $a > 0$ : l'expression est **négative puis positive** (fonction affine croissante).\n• Si $a < 0$ : l'expression est **positive puis négative** (fonction affine décroissante).\n\n*Règle mnémotechnique* : on met le **signe de $a$ à droite** du zéro !"
      },
      {
        "title": "2. Résolution d'inéquations produit ou quotient",
        "content": "Pour résoudre $A(x)B(x) \\ge 0$ ou $\\frac{A(x)}{B(x)} \\le 0$ :\n1. On factorise pour se ramener à un produit ou quotient comparé à **0**.\n2. Pour un quotient, on détermine impérativement les **valeurs interdites** (dénominateur non nul, double barre dans le tableau).\n3. On étudie le signe de chaque facteur sur une ligne.\n4. On applique la règle des signes par colonne pour conclure."
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
      }
    ],
    "traps": [
      "⚠️ Ne jamais multiplier par le dénominateur des deux côtés d'une inéquation sans connaître son signe ! On transpose tout à gauche pour comparer à 0.",
      "⚠️ Toujours exclure les valeurs interdites dans l'ensemble des solutions avec un crochet ouvert."
    ],
    "flashcards": [
      {
        "q": "Où s'annule l'expression $3x - 12$ et quel est son signe après cette valeur ?",
        "a": "Elle s'annule en $x = 4$ et elle est positive ($+$) pour $x > 4$ car $a = 3 > 0$."
      },
      {
        "q": "Quelle est la valeur interdite de $\\frac{x + 1}{2x - 8}$ ?",
        "a": "$2x - 8 = 0 \\iff x = 4$."
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
      "Résoudre graphiquement des équations $f(x) = k$ et inéquations $f(x) \\le k$."
    ],
    "keyPoints": [
      {
        "title": "1. Définition, image et antécédents",
        "content": "Une fonction $f$ associe à tout réel $x$ de son ensemble de définition $\\mathcal{D}_f$ un **unique** réel noté $f(x)$ appelé l'**image** de $x$.\n• Tout nombre $x$ tel que $f(x) = y$ est appelé un **antécédent** de $y$ par $f$.\n• Un nombre peut avoir **aucune, une ou plusieurs antécédents**, mais possède **au plus une image**."
      },
      {
        "title": "2. Courbe représentative et résolutions graphiques",
        "content": "La courbe représentative $\\mathcal{C}_f$ est l'ensemble des points $M(x ; y)$ tels que $x \\in \\mathcal{D}_f$ et $y = f(x)$.\n• Pour résoudre graphiquement $f(x) = k$, on trace la droite horizontale $y = k$ et on lit les **abscisses** des points d'intersection.\n• Pour résoudre $f(x) \\le g(x)$, on relève les intervalles d'abscisses où la courbe $\\mathcal{C}_f$ est située **en dessous** de $\\mathcal{C}_g$."
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
      }
    ],
    "traps": [
      "⚠️ Confusion image / antécédent : l'image se lit sur l'axe des **ordonnées** ($y$), l'antécédent sur l'axe des **abscisses** ($x$).",
      "⚠️ Pour l'ensemble de définition, le dénominateur ne doit jamais être nul et l'expression sous une racine carrée doit être $\\ge 0$."
    ],
    "flashcards": [
      {
        "q": "Combien d'images un réel $x$ peut-il avoir au maximum par une fonction $f$ ?",
        "a": "Une seule image (par définition même d'une fonction)."
      },
      {
        "q": "Comment résout-on graphiquement l'équation $f(x) = 2$ ?",
        "a": "On trace la droite horizontale d'équation $y = 2$ et on lit les abscisses $x$ des points d'intersection avec la courbe $\\mathcal{C}_f$."
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
      "Comparer des images à l'aide du sens de variation sans calcul explicite."
    ],
    "keyPoints": [
      {
        "title": "1. Définitions formelles de la monotonie",
        "content": "Soit $f$ une fonction définie sur un intervalle $I$ :\n• $f$ est **strictement croissante** sur $I$ si pour tous $a, b \\in I$ :\n$$a < b \\implies f(a) < f(b)$$ *(la fonction conserve l'ordre)*.\n• $f$ est **strictement décroissante** sur $I$ si pour tous $a, b \\in I$ :\n$$a < b \\implies f(a) > f(b)$$ *(la fonction inverse l'ordre)*."
      },
      {
        "title": "2. Extremums : Maximum et Minimum",
        "content": "Soit $f$ définie sur $I$ et $x_0 \\in I$ :\n• $M = f(x_0)$ est le **maximum** de $f$ sur $I$ si pour tout $x \\in I$, $f(x) \\le M$.\n• $m = f(x_0)$ est le **minimum** de $f$ sur $I$ si pour tout $x \\in I$, $f(x) \\ge m$."
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
      }
    ],
    "traps": [
      "⚠️ Un extremum est une **valeur de la fonction** (en ordonnée), atteint en un point (en abscisse). Ex: « le maximum est 8, atteint en $x = 3$ ».",
      "⚠️ Ne pas déduire le signe d'une fonction de ses variations : une fonction croissante peut être négative !"
    ],
    "flashcards": [
      {
        "q": "Si $f$ est strictement décroissante et $a < b$, que peut-on dire de $f(a)$ et $f(b)$ ?",
        "a": "$f(a) > f(b)$ (l'ordre est inversé)."
      },
      {
        "q": "Où se lit le maximum d'une fonction dans un tableau de variations ?",
        "a": "Au sommet d'une flèche montante, sur la ligne des valeurs de $f(x)$."
      }
    ]
  },

  "2A3": {
    "title": "2A3 : Fonctions de référence : carré, inverse, racine et cube",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Connaître les propriétés, courbes et variations des fonctions carré $x^2$, inverse $1/x$, racine $\\sqrt{x}$ et cube $x^3$.",
      "Maîtriser la notion de parité : fonction paire (symétrie par rapport à l'axe des ordonnées) et impaire (symétrie par rapport à l'origine).",
      "Résoudre des équations et inéquations du type $x^2 \\le k$ et $\\sqrt{x} \\ge k$."
    ],
    "keyPoints": [
      {
        "title": "1. Synthèse des fonctions de référence",
        "content": "• **Fonction carré ($x \\mapsto x^2$)** : Définie sur $\\mathbb{R}$, paire ($(-x)^2 = x^2$), décroissante sur $]-\\infty; 0]$ et croissante sur $[0; +\\infty[$. Sa courbe est une **parabole** de sommet $(0,0)$.\n• **Fonction inverse ($x \\mapsto \\frac{1}{x}$)** : Définie sur $\\mathbb{R}^*$, impaire ($\\frac{1}{-x} = -\\frac{1}{x}$), strictement décroissante sur $]-\\infty; 0[$ et sur $]0; +\\infty[$. Sa courbe est une **hyperbole**.\n• **Fonction racine carrée ($x \\mapsto \\sqrt{x}$)** : Définie sur $[0; +\\infty[$, strictement croissante sur $[0; +\\infty[$.\n• **Fonction cube ($x \\mapsto x^3$)** : Définie sur $\\mathbb{R}$, impaire, strictement croissante sur $\\mathbb{R}$."
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
      }
    ],
    "traps": [
      "⚠️ Attention pour $x^2 \\ge 9$ : les solutions sont les valeurs à l'extérieur des racines, soit $S = ]-\\infty ; -3] \\cup [3 ; +\\infty[$ !",
      "⚠️ La fonction inverse n'est PAS décroissante sur $\\mathbb{R}^*$ tout entier, mais séparément sur chaque intervalle $]-\\infty; 0[$ et $]0; +\\infty[$."
    ],
    "flashcards": [
      {
        "q": "Quelle symétrie présente la courbe d'une fonction paire ?",
        "a": "Une symétrie axiale par rapport à l'axe des ordonnées $(Oy)$."
      },
      {
        "q": "Quel est l'ensemble de définition de la fonction racine carrée ?",
        "a": "$[0 ; +\\infty[$ (les réels positifs ou nuls)."
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
      "Démontrer qu'un quadrilatère est un parallélogramme, rectangle ou losange."
    ],
    "keyPoints": [
      {
        "title": "1. Formules fondamentales de géométrie analytique",
        "content": "Soient $A(x_A ; y_A)$ et $B(x_B ; y_B)$ deux points du plan :\n• **Coordonnées du milieu $M$ du segment $[AB]$** (valable dans tout repère) :\n$$x_M = \\frac{x_A + x_B}{2} \\quad \\text{et} \\quad y_M = \\frac{y_A + y_B}{2}$$\n• **Distance $AB$** (valable **uniquement dans un repère orthonormé**) :\n$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$"
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
      }
    ],
    "traps": [
      "⚠️ Ne pas oublier que la formule de la distance avec les carrés n'est valable que si le repère est **orthonormé** !",
      "⚠️ Attention aux signes négatifs lors des soustractions : $(x_B - x_A) = (3 - (-2)) = 3 + 2 = 5$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule des coordonnées du milieu d'un segment $[AB]$ ?",
        "a": "$M\\left(\\frac{x_A + x_B}{2} ; \\frac{y_A + y_B}{2}\\right)$."
      },
      {
        "q": "Calculer la distance $AB$ entre $A(1 ; 2)$ et $B(4 ; 6)$ dans un repère orthonormé.",
        "a": "$AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
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
      "Utiliser le déterminant $\\det(\\vec{u}, \\vec{v}) = xy' - yx' = 0$ pour tester la colinéarité et prouver l'alignement ou le parallélisme."
    ],
    "keyPoints": [
      {
        "title": "1. Coordonnées et déterminant de deux vecteurs",
        "content": "Dans un repère cartésien :\n• Pour $A(x_A ; y_A)$ et $B(x_B ; y_B)$ : $$\\vec{AB}\\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$$\n• Norme dans un repère orthonormé : $||\\vec{u}|| = \\sqrt{x^2 + y^2}$.\n• **Critère de colinéarité (Déterminant)** : Deux vecteurs $\\vec{u}(x ; y)$ et $\\vec{v}(x' ; y')$ sont colinéaires si et seulement si :\n$$\\det(\\vec{u}, \\vec{v}) = xy' - yx' = 0$$"
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
      }
    ],
    "traps": [
      "⚠️ Attention à l'ordre des coordonnées du vecteur : c'est toujours l'extrémité moins l'origine ($x_B - x_A$).",
      "⚠️ Deux droites $(AB)$ et $(CD)$ sont parallèles ssi $\\vec{AB}$ et $\\vec{CD}$ sont colinéaires."
    ],
    "flashcards": [
      {
        "q": "Quelle est la condition nécessaire et suffisante pour que $\\vec{u}(x ; y)$ et $\\vec{v}(x' ; y')$ soient colinéaires ?",
        "a": "$xy' - yx' = 0$ (déterminant nul)."
      },
      {
        "q": "Énoncer la relation de Chasles pour les vecteurs.",
        "a": "$\\vec{AB} + \\vec{BC} = \\vec{AC}$."
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
      "Calculer les coordonnées du point d'intersection de deux droites sécantes en résolvant un système de deux équations à deux inconnues."
    ],
    "keyPoints": [
      {
        "title": "1. Équation cartésienne et réduite d'une droite",
        "content": "• **Équation cartésienne** : Toute droite du plan admet une équation de la forme $ax + by + c = 0$ avec $(a, b) \\neq (0, 0)$. Un **vecteur directeur** de cette droite est $\\vec{u}\\begin{pmatrix} -b \\\\ a \\end{pmatrix}$.\n• **Équation réduite** :\n- Si la droite n'est pas verticale ($b \\neq 0$) : $y = mx + p$ où $m$ est le **coefficient directeur** (la pente) et $p$ est l'**ordonnée à l'origine**. Le vecteur $\\vec{u}(1 ; m)$ est un vecteur directeur.\n- Si la droite est verticale ($b = 0$) : $x = k$. Elle n'a pas de coefficient directeur."
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
      }
    ],
    "traps": [
      "⚠️ Si $x_A = x_B$, la droite est verticale et a pour équation $x = x_A$. Ne pas tenter de diviser par $x_B - x_A = 0$ !",
      "⚠️ Un vecteur directeur de $ax + by + c = 0$ a pour coordonnées $(-b ; a)$, attention au signe moins sur $b$."
    ],
    "flashcards": [
      {
        "q": "Quel est un vecteur directeur de la droite d'équation $3x - 2y + 7 = 0$ ?",
        "a": "$\\vec{u}\\begin{pmatrix} -(-2) \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$."
      },
      {
        "q": "À quelle condition deux droites d'équations réduites $y = mx + p$ et $y = m'x + p'$ sont-elles strictement parallèles ?",
        "a": "Elles ont le même coefficient directeur ($m = m'$) et des ordonnées à l'origine distinctes ($p \\neq p'$)."
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
      "Construire et analyser un diagramme en boîte (boîte à moustaches)."
    ],
    "keyPoints": [
      {
        "title": "1. Indicateurs de position et de dispersion",
        "content": "Pour une série statistique ordonnée d'effectif total $N$ :\n• **Médiane ($Me$)** : Valeur qui partage la série ordonnée en deux groupes de même effectif (au moins 50% des valeurs sont $\\le Me$).\n• **Premier quartile ($Q_1$)** : Plus petite valeur de la série telle qu'au moins 25% des données soient inférieures ou égales à $Q_1$ (rang : $\\lceil 0{,}25 N \\rceil$).\n• **Troisième quartile ($Q_3$)** : Plus petite valeur telle qu'au moins 75% des données soient inférieures ou égales à $Q_3$ (rang : $\\lceil 0{,}75 N \\rceil$).\n• **Écart interquartile** : $I = Q_3 - Q_1$ (mesure robuste de dispersion, non sensible aux valeurs extrêmes)."
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
      }
    ],
    "traps": [
      "⚠️ Toujours ordonner la série statistique par ordre croissant avant de chercher médiane et quartiles !",
      "⚠️ Contrairement à la médiane, la moyenne est très sensible aux valeurs extrêmes."
    ],
    "flashcards": [
      {
        "q": "Quel pourcentage minimal des données se situe entre $Q_1$ et $Q_3$ ?",
        "a": "Au moins 50% des données."
      },
      {
        "q": "Comment calcule-t-on l'écart interquartile ?",
        "a": "$Q_3 - Q_1$."
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
      "Appliquer la formule fondamentale de la réunion : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire des probabilités et propriétés",
        "content": "• **Univers $\\Omega$** : ensemble des issues possibles. La somme des probabilités de toutes les issues vaut 1.\n• **Événements incompatibles (ou disjoints)** : $A \\cap B = \\emptyset \\implies P(A \\cup B) = P(A) + P(B)$.\n• **Cas général de la réunion** :\n$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n• **Événement contraire $\\overline{A}$** : $P(\\overline{A}) = 1 - P(A)$."
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
      }
    ],
    "traps": [
      "⚠️ Ne pas additionner simplement $P(A) + P(B)$ si les événements ne sont pas incompatibles (on compterait l'intersection deux fois !).",
      "⚠️ Une probabilité est **toujours** comprise entre 0 et 1 : si vous trouvez 1,2 ou un nombre négatif, il y a une erreur de calcul."
    ],
    "flashcards": [
      {
        "q": "Si $P(A) = 0{,}35$, quelle est la probabilité de l'événement contraire $\\overline{A}$ ?",
        "a": "$P(\\overline{A}) = 1 - 0{,}35 = 0{,}65$."
      },
      {
        "q": "Énoncer la formule reliant $P(A \\cup B)$, $P(A)$, $P(B)$ et $P(A \\cap B)$.",
        "a": "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$."
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
      "Prendre une décision d'acceptation ou de rejet d'une hypothèse sur une proportion $p$."
    ],
    "keyPoints": [
      {
        "title": "1. Principe de l'échantillonnage et intervalle de fluctuation",
        "content": "Soit $p$ la proportion d'un caractère dans une population générale. Lorsqu'on prélève au hasard un échantillon de taille $n$ (avec $n \\ge 30, np \\ge 5, n(1-p) \\ge 5$) :\n• La fréquence observée $f$ varie d'un échantillon à un autre : c'est la **fluctuation d'échantillonnage**.\n• L'**intervalle de fluctuation à 95%** est :\n$$I = \\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$$\nDans 95% des échantillons de taille $n$, la fréquence observée $f$ appartient à cet intervalle."
      },
      {
        "title": "2. Algorithmique en Python : simulation d'échantillons",
        "content": "En Python, on utilise la bibliothèque `random` :\n```python\nimport random\n\ndef frequence_pile(n):\n    nb_pile = 0\n    for i in range(n):\n        if random.random() < 0.5:\n            nb_pile += 1\n    return nb_pile / n\n```"
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
      }
    ],
    "traps": [
      "⚠️ L'amplitude de l'intervalle est de $\\frac{2}{\\sqrt{n}}$ : pour diviser la marge d'erreur par 2, il faut **quadrupler** la taille de l'échantillon !",
      "⚠️ Ne pas confondre la proportion théorique $p$ (fixe dans la population) et la fréquence observée $f$ (qui fluctue selon l'échantillon)."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule approchée de l'intervalle de fluctuation à 95% pour un échantillon de taille $n$ et de proportion $p$ ?",
        "a": "$\\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$."
      },
      {
        "q": "Si on multiplie la taille d'un échantillon par 4, par combien est divisée la largeur de l'intervalle de fluctuation ?",
        "a": "Par $\\sqrt{4} = 2$ (elle est divisée par 2)."
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
      "statement": "Sous quelle forme simplifiée peut-on écrire $\\sqrt{108}$ ?",
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
      "statement": "Factoriser l'expression $B(x) = (3x + 1)(x - 4) + (3x + 1)(2x + 7)$.",
      "options": [
        "$(3x + 1)(3x + 3)$",
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
      "title": "Recherche de l'expression affine",
      "skill": "Déterminer $m$ et $p$ à partir de deux points",
      "statement": "Une fonction affine vérifie $g(2) = 1$ et $g(5) = 7$. Quelle est son expression ?",
      "options": [
        "$g(x) = 2x - 3$",
        "$g(x) = 2x + 1$",
        "$g(x) = 3x - 5$",
        "$g(x) = -2x + 5$"
      ],
      "correctIndex": 0,
      "answer": "$g(x) = 2x - 3$",
      "hint1": "Pente $m = \\frac{g(5) - g(2)}{5 - 2}$.",
      "hint2": "$m = \\frac{7 - 1}{3} = 2$. Puis $g(2) = 2(2) + p = 1 \\implies p = -3$.",
      "solution": "$m = \\frac{7 - 1}{5 - 2} = \\frac{6}{3} = 2$. $g(2) = 2(2) + p = 1 \\implies p = 1 - 4 = -3$. Donc $g(x) = 2x - 3$."
    },
    {
      "id": "2A2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Signe d'une fonction affine",
      "skill": "Résoudre $ax+b \\ge 0$",
      "statement": "Sur quel intervalle la fonction $h(x) = 4 - 2x$ est-elle strictement positive ?",
      "options": [
        "$]-\\infty ; 2[$",
        "$]2 ; +\\infty[$",
        "$]-\\infty ; -2[$",
        "$[2 ; +\\infty[$"
      ],
      "correctIndex": 0,
      "answer": "$]-\\infty ; 2[$",
      "hint1": "Résous $4 - 2x > 0$.",
      "hint2": "$4 > 2x \\iff 2 > x \\iff x < 2$.",
      "solution": "$4 - 2x > 0 \\iff 4 > 2x \\iff x < 2$, soit $]-\\infty ; 2[$."
    },
    {
      "id": "2A2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Point d'intersection de deux droites",
      "skill": "Résoudre un système linéaire par les fonctions affines",
      "statement": "Quelles sont les coordonnées du point d'intersection des droites d'équations $y = 3x - 4$ et $y = -2x + 6$ ?",
      "options": [
        "$(2 ; 2)$",
        "$(1 ; -1)$",
        "$(2 ; 0)$",
        "$(3 ; 5)$"
      ],
      "correctIndex": 0,
      "answer": "$(2 ; 2)$",
      "hint1": "Égale les deux expressions : $3x - 4 = -2x + 6$.",
      "hint2": "$5x = 10 \\implies x = 2$. Puis $y = 3(2) - 4 = 2$.",
      "solution": "$3x - 4 = -2x + 6 \\iff 5x = 10 \\iff x = 2$. Alors $y = 3(2) - 4 = 2$. Le point est $(2 ; 2)$."
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
