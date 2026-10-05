/**
 * Données pédagogiques officielles de la classe de Première Spécialité Mathématiques
 * Conforme au Bulletin Officiel de l'Éducation Nationale et à maths-et-tiques.fr
 */

window.MATHS_COURSES_1ERE = {
  "1A1": {
    "title": "1A1 : Polynôme du second degré : forme canonique, racines et signe",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Mettre un trinôme du second degré $P(x) = ax^2 + bx + c$ sous forme canonique.",
      "Calculer le discriminant $\\Delta = b^2 - 4ac$ et déterminer le nombre et la valeur des racines réelles.",
      "Factoriser un trinôme lorsque $\\Delta \\ge 0$ et étudier son signe sur $\\mathbb{R}$.",
      "Résoudre des équations et inéquations du second degré."
    ],
    "keyPoints": [
      {
        "title": "1. Forme canonique d'un trinôme",
        "content": "Tout trinôme $P(x) = ax^2 + bx + c$ ($a \\neq 0$) peut s'écrire sous forme canonique :\n$$P(x) = a(x - \\alpha)^2 + \\beta$$\navec : $$\\alpha = -\\frac{b}{2a} \\quad \\text{et} \\quad \\beta = P(\\alpha) = -\\frac{b^2 - 4ac}{4a}$$\nLe sommet de la parabole représentative a pour coordonnées $S(\\alpha ; \\beta)$."
      },
      {
        "title": "2. Discriminant $\\Delta$ et racines réelles",
        "content": "On pose $\\Delta = b^2 - 4ac$ (le **discriminant**) :\n• **Si $\\Delta < 0$** : L'équation $ax^2 + bx + c = 0$ n'a **aucune racine réelle**. Le trinôme ne se factorise pas dans $\\mathbb{R}$.\n• **Si $\\Delta = 0$** : L'équation admet **une racine double** :\n$$x_0 = -\\frac{b}{2a}$$\nForme factorisée : $P(x) = a(x - x_0)^2$.\n• **Si $\\Delta > 0$** : L'équation admet **deux racines réelles distinctes** :\n$$x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} \\quad \\text{et} \\quad x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$$\nForme factorisée : $P(x) = a(x - x_1)(x - x_2)$."
      },
      {
        "title": "3. Signe du trinôme du second degré",
        "content": "• **Règle fondamentale** : Le trinôme $ax^2 + bx + c$ est **du signe de $a$ à l'extérieur des racines**, et du **signe opposé de $a$ entre les racines** (si $\\Delta > 0$).\n• Si $\\Delta \\le 0$, le trinôme est constamment du signe de $a$ sur $\\mathbb{R}$ (s'annulant seulement en $x_0$ si $\\Delta = 0$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une inéquation du second degré",
        "example": "Résoudre dans $\\mathbb{R}$ l'inéquation $2x^2 - 5x - 3 \\le 0$.",
        "steps": [
          "**Étape 1 (Discriminant)** : $a = 2$, $b = -5$, $c = -3$. $\\Delta = (-5)^2 - 4(2)(-3) = 25 + 24 = 49 = 7^2 > 0$.",
          "**Étape 2 (Racines)** : $x_1 = \\frac{5 - 7}{4} = -\\frac{1}{2}$ et $x_2 = \\frac{5 + 7}{4} = 3$.",
          "**Étape 3 (Signe)** : Comme $a = 2 > 0$, la parabole est tournée vers le haut. Le trinôme est négatif ou nul entre les racines.",
          "**Étape 4 (Conclusion)** : $S = \\left[-\\frac{1}{2} ; 3\\right]$."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention au carré d'un nombre négatif : $(-5)^2 = +25$ et non $-25$ !",
      "⚠️ Ne pas oublier de multiplier par $a$ dans la forme factorisée : $a(x - x_1)(x - x_2)$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule du discriminant $\\Delta$ d'un trinôme $ax^2 + bx + c$ ?",
        "a": "$\\Delta = b^2 - 4ac$."
      },
      {
        "q": "Quel est le signe d'un trinôme lorsque $\\Delta < 0$ ?",
        "a": "Il est du signe de $a$ sur $\\mathbb{R}$ tout entier (il ne s'annule jamais)."
      }
    ]
  },

  "1A2": {
    "title": "1A2 : Nombre dérivé, taux de variation et tangente à une courbe",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Définir le taux de variation d'une fonction entre $a$ et $a+h$ : $\\tau(h) = \\frac{f(a+h) - f(a)}{h}$.",
      "Définir le nombre dérivé $f'(a)$ comme la limite finie quand $h \\to 0$ du taux de variation.",
      "Interpréter géométriquement $f'(a)$ comme le coefficient directeur de la tangente $\\mathcal{T}_a$ à la courbe au point d'abscisse $a$.",
      "Écrire et exploiter l'équation réduite de la tangente : $y = f'(a)(x - a) + f(a)$."
    ],
    "keyPoints": [
      {
        "title": "1. Taux de variation et définition du nombre dérivé",
        "content": "Soit $f$ une fonction définie sur un intervalle $I$ et $a \\in I$. Pour $h \\neq 0$ tel que $a+h \\in I$ :\n• Le **taux de variation** de $f$ entre $a$ et $a+h$ est la pente de la droite sécante $(AB)$ :\n$$\\frac{f(a+h) - f(a)}{h}$$\n• $f$ est dite **dérivable en $a$** si ce taux de variation admet une limite finie $\\ell$ lorsque $h$ tend vers 0 :\n$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$\nCe réel $f'(a)$ est le **nombre dérivé** de $f$ en $a$."
      },
      {
        "title": "2. Équation de la tangente à la courbe",
        "content": "La tangente $\\mathcal{T}_a$ à la courbe $\\mathcal{C}_f$ au point $A(a ; f(a))$ est la droite de coefficient directeur $f'(a)$ passant par $A$.\nSon équation réduite est :\n$$y = f'(a)(x - a) + f(a)$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer l'équation de la tangente en un point",
        "example": "Soit $f(x) = x^2 - 3x + 1$. Déterminer l'équation de la tangente à $\\mathcal{C}_f$ en $x = 2$, sachant que $f'(2) = 1$.",
        "steps": [
          "**Étape 1 (Image de a)** : Calculer $f(2) = 2^2 - 3(2) + 1 = 4 - 6 + 1 = -1$. Le point de contact est $A(2 ; -1)$.",
          "**Étape 2 (Formule)** : On applique $y = f'(a)(x - a) + f(a)$ avec $a = 2$, $f'(2) = 1$ et $f(2) = -1$.",
          "**Étape 3 (Développement)** : $y = 1(x - 2) + (-1) = x - 2 - 1 = x - 3$. L'équation de la tangente est $y = x - 3$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre $f(a)$ (l'ordonnée du point) et $f'(a)$ (la pente de la tangente en ce point) !",
      "⚠️ Si la tangente est horizontale, alors $f'(a) = 0$ et son équation est simplement $y = f(a)$."
    ],
    "flashcards": [
      {
        "q": "Quelle est l'équation cartésienne de la tangente à $\\mathcal{C}_f$ au point d'abscisse $a$ ?",
        "a": "$y = f'(a)(x - a) + f(a)$."
      },
      {
        "q": "Que vaut le nombre dérivé $f'(a)$ si la tangente en $a$ est horizontale ?",
        "a": "$f'(a) = 0$."
      }
    ]
  },

  "1A3": {
    "title": "1A3 : Fonction dérivée, règles de dérivation et variations d'une fonction",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Connaître les dérivées des fonctions usuelles : $x^n, \\frac{1}{x}, \\sqrt{x}, ax+b$.",
      "Maîtriser les formules de dérivation : $(u+v)' = u'+v'$, $(ku)' = ku'$, $(uv)' = u'v + uv'$ et $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$.",
      "Établir le lien fondamental entre le signe de la dérivée $f'(x)$ et le sens de variation de $f$.",
      "Déterminer les extremums locaux d'une fonction dérivable."
    ],
    "keyPoints": [
      {
        "title": "1. Tableau des dérivées usuelles",
        "content": "• Constante $k$ : $(k)' = 0$\n• Fonction identité $x$ : $(x)' = 1$\n• Puissance $x^n$ ($n \\in \\mathbb{Z}^*$) : $(x^n)' = n x^{n-1}$\n• Inverse $\\frac{1}{x}$ : $\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}$\n• Racine carrée $\\sqrt{x}$ : $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$ (sur $]0 ; +\\infty[$)\n• Fonction exponentielle $e^x$ : $(e^x)' = e^x$"
      },
      {
        "title": "2. Théorème fondamental de la dérivation et variations",
        "content": "Soit $f$ dérivable sur un intervalle $I$ :\n• Si $f'(x) > 0$ sur $I$ (sauf éventuellement en un nombre fini de points où $f'(x)=0$), alors $f$ est **strictement croissante** sur $I$.\n• Si $f'(x) < 0$ sur $I$, alors $f$ est **strictement décroissante** sur $I$.\n• Si $f'(x) = 0$ sur $I$, alors $f$ est **constante** sur $I$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Étudier les variations d'une fonction quotient",
        "example": "Étudier les variations de $f(x) = \\frac{2x - 1}{x + 3}$ sur $]-3 ; +\\infty[$.",
        "steps": [
          "**Étape 1 (Formule du quotient)** : On pose $u(x) = 2x - 1 \\implies u'(x) = 2$ et $v(x) = x + 3 \\implies v'(x) = 1$.",
          "**Étape 2 (Calcul de f')** : $f'(x) = \\frac{u'v - uv'}{v^2} = \\frac{2(x + 3) - (2x - 1)(1)}{(x + 3)^2} = \\frac{2x + 6 - 2x + 1}{(x + 3)^2} = \\frac{7}{(x + 3)^2}$.",
          "**Étape 3 (Signe et variations)** : Le numérateur $7 > 0$ et le dénominateur $(x + 3)^2 > 0$, donc $f'(x) > 0$ pour tout $x \\in ]-3 ; +\\infty[$. $f$ est strictement croissante sur cet intervalle."
        ]
      }
    ],
    "traps": [
      "⚠️ Erreur classique sur la dérivée d'un produit : $(uv)' \\neq u'v'$ ! C'est $u'v + uv'$.",
      "⚠️ Attention au signe moins dans la formule du quotient : $(u'v - uv')/v^2$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la dérivée de $f(x) = x^4$ ?",
        "a": "$f'(x) = 4x^3$."
      },
      {
        "q": "Quelle est la formule de dérivation d'un produit $(u \\times v)'$ ?",
        "a": "$(uv)' = u'v + uv'$."
      }
    ]
  },

  "1A4": {
    "title": "1A4 : La fonction exponentielle : définition, propriétés et étude",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Connaître la définition de la fonction exponentielle : unique fonction dérivable sur $\\mathbb{R}$ vérifiant $f' = f$ et $f(0) = 1$.",
      "Maîtriser les propriétés algébriques : $e^{a+b} = e^a e^b$, $e^{-a} = \\frac{1}{e^a}$, $e^{a-b} = \\frac{e^a}{e^b}$ et $(e^a)^n = e^{na}$.",
      "Savoir que pour tout réel $x$, $e^x > 0$ (stricte positivité).",
      "Dériver des fonctions de la forme $e^{u(x)}$ avec $(e^u)' = u' e^u$."
    ],
    "keyPoints": [
      {
        "title": "1. Propriétés algébriques de la fonction exponentielle",
        "content": "La fonction exponentielle transforme une **somme en produit** :\n• $e^0 = 1$ et $e^1 = e \\approx 2{,}718$\n• $e^{x+y} = e^x \\times e^y$\n• $e^{-x} = \\frac{1}{e^x}$\n• $e^{x-y} = \\frac{e^x}{e^y}$\n• $(e^x)^n = e^{nx}$ pour tout $n \\in \\mathbb{Z}$"
      },
      {
        "title": "2. Variations, limites et dérivée de $e^u$",
        "content": "• La fonction exponentielle est **strictement positive** ($e^x > 0$) et **strictement croissante** sur $\\mathbb{R}$.\n• Résolution : $e^a = e^b \\iff a = b$ et $e^a < e^b \\iff a < b$.\n• Dérivée d'une fonction composée : si $u$ est dérivable sur $I$, alors :\n$$(e^{u(x)})' = u'(x) e^{u(x)}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Dériver une fonction contenant une exponentielle composée",
        "example": "Dériver la fonction $g(x) = (3x - 2)e^{-2x}$.",
        "steps": [
          "**Étape 1 (Reconnaissance produit)** : On pose $u(x) = 3x - 2 \\implies u'(x) = 3$ et $v(x) = e^{-2x} \\implies v'(x) = -2e^{-2x}$.",
          "**Étape 2 (Dérivation uv)** : $g'(x) = u'v + uv' = 3e^{-2x} + (3x - 2)(-2e^{-2x})$.",
          "**Étape 3 (Factorisation par $e^{-2x}$)** : $g'(x) = e^{-2x}[3 - 6x + 4] = (-6x + 7)e^{-2x}$."
        ]
      }
    ],
    "traps": [
      "⚠️ $e^x$ n'est JAMAIS négatif ou nul : l'équation $e^x = -2$ ou $e^x = 0$ n'a aucune solution !",
      "⚠️ Attention à ne pas oublier $u'$ lors de la dérivation de $e^{u(x)}$ : la dérivée de $e^{3x}$ est $3e^{3x}$ et non $e^{3x}$."
    ],
    "flashcards": [
      {
        "q": "Simplifier $\\frac{e^5 \\times e^{-2}}{e^4}$.",
        "a": "$\\frac{e^{5-2}}{e^4} = \\frac{e^3}{e^4} = e^{3-4} = e^{-1} = \\frac{1}{e}$."
      },
      {
        "q": "Quelle est la dérivée de $f(x) = e^{-x^2}$ ?",
        "a": "$f'(x) = -2x e^{-x^2}$."
      }
    ]
  },

  "1A5": {
    "title": "1A5 : Généralités sur les suites numériques et sens de variation",
    "domain": "Analyse et Suites",
    "objectives": [
      "Comprendre la différence entre formule explicite $u_n = f(n)$ et relation de récurrence $u_{n+1} = f(u_n)$.",
      "Calculer les premiers termes d'une suite et représenter graphiquement une suite récurrente en toile d'araignée.",
      "Étudier le sens de variation d'une suite numérique (signe de $u_{n+1} - u_n$ ou comparaison de $\\frac{u_{n+1}}{u_n}$ à 1 si termes strictement positifs)."
    ],
    "keyPoints": [
      {
        "title": "1. Modes de définition d'une suite",
        "content": "• **Forme explicite** : $u_n = f(n)$. Chaque terme se calcule directement sans connaître les termes précédents (ex: $u_n = 3n^2 - 1$).\n• **Relation de récurrence** : On donne le premier terme $u_0$ et une relation $u_{n+1} = f(u_n)$. Pour calculer un terme, il faut calculer successivement tous les termes précédents."
      },
      {
        "title": "2. Sens de variation d'une suite",
        "content": "• Une suite $(u_n)$ est **croissante** si pour tout $n \\in \\mathbb{N}$, $u_{n+1} \\ge u_n \\iff u_{n+1} - u_n \\ge 0$.\n• Une suite $(u_n)$ est **décroissante** si pour tout $n \\in \\mathbb{N}$, $u_{n+1} \\le u_n \\iff u_{n+1} - u_n \\le 0$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Étudier le sens de variation avec $u_{n+1} - u_n$",
        "example": "Soit la suite $(u_n)$ définie pour tout $n \\in \\mathbb{N}$ par $u_n = \\frac{n}{n + 1}$. Déterminer son sens de variation.",
        "steps": [
          "**Étape 1 (Expression de $u_{n+1}$)** : $u_{n+1} = \\frac{n+1}{(n+1) + 1} = \\frac{n+1}{n+2}$.",
          "**Étape 2 (Différence)** : $u_{n+1} - u_n = \\frac{n+1}{n+2} - \\frac{n}{n+1} = \\frac{(n+1)^2 - n(n+2)}{(n+2)(n+1)}$.",
          "**Étape 3 (Développement du numérateur)** : $(n^2 + 2n + 1) - (n^2 + 2n) = 1$.",
          "**Étape 4 (Conclusion)** : $u_{n+1} - u_n = \\frac{1}{(n+2)(n+1)} > 0$ car $n \\ge 0$. La suite $(u_n)$ est strictement croissante."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre $u_{n+1}$ (le terme suivant) et $u_n + 1$ (le terme augmenté de 1) !",
      "⚠️ Pour utiliser la méthode du quotient $\\frac{u_{n+1}}{u_n} > 1$, il faut vérifier impérativement que tous les termes de la suite sont **strictement positifs**."
    ],
    "flashcards": [
      {
        "q": "Comment étudie-t-on généralement le sens de variation d'une suite $(u_n)$ ?",
        "a": "On étudie le signe de la différence $u_{n+1} - u_n$ pour tout $n$."
      },
      {
        "q": "Si $u_0 = 3$ et $u_{n+1} = 2u_n - 1$, que vaut $u_1$ puis $u_2$ ?",
        "a": "$u_1 = 2(3) - 1 = 5$ et $u_2 = 2(5) - 1 = 9$."
      }
    ]
  },

  "1A6": {
    "title": "1A6 : Suites arithmétiques et suites géométriques",
    "domain": "Analyse et Suites",
    "objectives": [
      "Reconnaître et caractériser une suite arithmétique ($u_{n+1} = u_n + r$) et une suite géométrique ($u_{n+1} = q \\times u_n$).",
      "Exprimer le terme général $u_n$ en fonction de $n$ : $u_n = u_0 + nr$ et $u_n = u_0 \\times q^n$.",
      "Calculer la somme des premiers termes d'une suite arithmétique et d'une suite géométrique.",
      "Calculer la somme des entiers $1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$ et la somme géométrique $1 + q + \\dots + q^n = \\frac{1 - q^{n+1}}{1 - q}$ ($q \\neq 1$)."
    ],
    "keyPoints": [
      {
        "title": "1. Synthèse comparative des suites usuelles",
        "content": "• **Suite Arithmétique (Raison $r$)** :\n- Récurrence : $u_{n+1} = u_n + r$\n- Formule explicite : $u_n = u_0 + nr = u_p + (n - p)r$\n- Somme de termes consécutifs : $S = (\\text{nombre de termes}) \\times \\frac{\\text{premier} + \\text{dernier}}{2}$\n\n• **Suite Géométrique (Raison $q$)** :\n- Récurrence : $u_{n+1} = q \\times u_n$\n- Formule explicite : $u_n = u_0 \\times q^n = u_p \\times q^{n-p}$\n- Somme de termes consécutifs ($q \\neq 1$) : $S = (\\text{premier terme}) \\times \\frac{1 - q^{\\text{nombre de termes}}}{1 - q}$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la somme des puissances consécutives",
        "example": "Calculer la somme $S = 3 + 6 + 12 + 24 + \\dots + 3072$.",
        "steps": [
          "**Étape 1 (Identification)** : C'est une suite géométrique de premier terme $u_0 = 3$ et de raison $q = 2$.",
          "**Étape 2 (Rang du dernier terme)** : $u_n = 3 \\times 2^n = 3072 \\iff 2^n = 1024 \\iff n = 10$. La somme comporte $10 - 0 + 1 = 11$ termes.",
          "**Étape 3 (Formule de la somme)** : $S = 3 \\times \\frac{1 - 2^{11}}{1 - 2} = 3 \\times \\frac{1 - 2048}{-1} = 3 \\times 2047 = 6141$."
        ]
      }
    ],
    "traps": [
      "⚠️ Le nombre de termes de $u_p$ à $u_n$ est $n - p + 1$ (de $u_0$ à $u_n$, il y a $n+1$ termes !).",
      "⚠️ Ne pas confondre la formule de la somme arithmétique et celle de la somme géométrique."
    ],
    "flashcards": [
      {
        "q": "Que vaut la somme $1 + 2 + 3 + \\dots + n$ ?",
        "a": "$\\frac{n(n + 1)}{2}$."
      },
      {
        "q": "Que vaut la somme $1 + q + q^2 + \\dots + q^n$ pour $q \\neq 1$ ?",
        "a": "$\\frac{1 - q^{n+1}}{1 - q}$."
      }
    ]
  },

  "1G1": {
    "title": "1G1 : Trigonométrie, cercle trigonométrique et fonctions sinus et cosinus",
    "domain": "Géométrie",
    "objectives": [
      "Enrouler la droite réelle sur le cercle trigonométrique et convertir degrés en radians ($180^\\circ = \\pi$ rad).",
      "Définir le cosinus et le sinus d'un réel $x$ sur le cercle orienté.",
      "Connaître par cœur les valeurs remarquables de $\\cos$ et $\\sin$ pour $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}, \\pi$.",
      "Utiliser $\\cos^2(x) + \\sin^2(x) = 1$ et les formules d'angles associés (symétries)."
    ],
    "keyPoints": [
      {
        "title": "1. Valeurs remarquables sur le cercle trigonométrique",
        "content": "• **$0$ rad ($0^\\circ$)** : $\\cos(0) = 1$, $\\sin(0) = 0$\n• **$\\frac{\\pi}{6}$ rad ($30^\\circ$)** : $\\cos(\\frac{\\pi}{6}) = \\frac{\\sqrt{3}}{2}$, $\\sin(\\frac{\\pi}{6}) = \\frac{1}{2}$\n• **$\\frac{\\pi}{4}$ rad ($45^\\circ$)** : $\\cos(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$, $\\sin(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$\n• **$\\frac{\\pi}{3}$ rad ($60^\\circ$)** : $\\cos(\\frac{\\pi}{3}) = \\frac{1}{2}$, $\\sin(\\frac{\\pi}{3}) = \\frac{\\sqrt{3}}{2}$\n• **$\\frac{\\pi}{2}$ rad ($90^\\circ$)** : $\\cos(\\frac{\\pi}{2}) = 0$, $\\sin(\\frac{\\pi}{2}) = 1$"
      },
      {
        "title": "2. Formules d'angles associés et parité",
        "content": "• $\\cos(-x) = \\cos(x)$ (fonction cosinus paire)\n• $\\sin(-x) = -\\sin(x)$ (fonction sinus impaire)\n• $\\cos(\\pi - x) = -\\cos(x)$ et $\\sin(\\pi - x) = \\sin(x)$\n• $\\cos(\\pi + x) = -\\cos(x)$ et $\\sin(\\pi + x) = -\\sin(x)$\n• $\\cos(\\frac{\\pi}{2} - x) = \\sin(x)$ et $\\sin(\\frac{\\pi}{2} - x) = \\cos(x)$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une équation $\\cos(x) = a$",
        "example": "Résoudre dans $[0 ; 2\\pi[$ l'équation $\\cos(x) = \\frac{1}{2}$.",
        "steps": [
          "**Étape 1 (Angle de référence)** : On sait que $\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$.",
          "**Étape 2 (Solutions modulo $2\\pi$)** : Les deux points du cercle d'abscisse $\\frac{1}{2}$ sont $x = \\frac{\\pi}{3}$ et $x = -\\frac{\\pi}{3}$.",
          "**Étape 3 (Intervalle $[0 ; 2\\pi[$)** : En ajoutant $2\\pi$ à $-\\frac{\\pi}{3}$, on obtient $-\\frac{\\pi}{3} + 2\\pi = \\frac{5\\pi}{3}$.",
          "**Conclusion** : $S = \\left\\{\\frac{\\pi}{3} ; \\frac{5\\pi}{3}\\right\\}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas oublier que $\\cos^2(x) + \\sin^2(x) = 1$ permet de trouver l'un quand on a l'autre, mais il faut choisir le signe ($+$ ou $-$) selon le quadrant !",
      "⚠️ La calculatrice doit impérativement être réglée en mode **Radian** pour les calculs de dérivées et d'angles au lycée."
    ],
    "flashcards": [
      {
        "q": "Que vaut $\\sin\\left(\\frac{\\pi}{6}\\right)$ et $\\cos\\left(\\frac{\\pi}{6}\\right)$ ?",
        "a": "$\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$ et $\\cos\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}$."
      },
      {
        "q": "Que vaut $\\cos(-x)$ ?",
        "a": "$\\cos(-x) = \\cos(x)$ (la fonction cosinus est paire)."
      }
    ]
  },

  "1G2": {
    "title": "1G2 : Le produit scalaire dans le plan : définitions et propriétés",
    "domain": "Géométrie",
    "objectives": [
      "Connaître les 3 expressions du produit scalaire : géométrique $\\vec{u}\\cdot\\vec{v} = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos(\\theta)$, par projection orthogonale $\\vec{AB}\\cdot\\vec{AC} = \\overline{AB} \\times \\overline{AH}$, et analytique $xx' + yy'$.",
      "Caractériser l'orthogonalité de deux vecteurs par la nullité de leur produit scalaire : $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.",
      "Utiliser les propriétés de bilinéarité et de symétrie du produit scalaire."
    ],
    "keyPoints": [
      {
        "title": "1. Les différentes expressions du produit scalaire",
        "content": "• **Expression trigonométrique** : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\vec{u}, \\vec{v})$.\n• **Expression avec projection orthogonale** : Si $H$ est le projeté orthogonal de $C$ sur la droite $(AB)$, alors :\n$$\\vec{AB} \\cdot \\vec{AC} = \\vec{AB} \\cdot \\vec{AH} = \\begin{cases} +AB \\times AH & \\text{si } \\vec{AB} \\text{ et } \\vec{AH} \\text{ ont même sens} \\\\ -AB \\times AH & \\text{si } \\vec{AB} \\text{ et } \\vec{AH} \\text{ sont de sens opposés} \\end{cases}$$\n• **Expression analytique dans un repère orthonormé** : Si $\\vec{u}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}$, alors :\n$$\\vec{u} \\cdot \\vec{v} = xx' + yy'$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un angle avec le produit scalaire analytique",
        "example": "Soient $\\vec{u}(3 ; 4)$ et $\\vec{v}(1 ; 2)$. Calculer l'angle $(\\vec{u}, \\vec{v})$ au degré près.",
        "steps": [
          "**Étape 1 (Produit scalaire)** : $\\vec{u} \\cdot \\vec{v} = 3(1) + 4(2) = 3 + 8 = 11$.",
          "**Étape 2 (Normes)** : $\\|\\vec{u}\\| = \\sqrt{3^2 + 4^2} = 5$ et $\\|\\vec{v}\\| = \\sqrt{1^2 + 2^2} = \\sqrt{5}$.",
          "**Étape 3 (Cosinus)** : $\\cos(\\theta) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\|\\vec{v}\\|} = \\frac{11}{5\\sqrt{5}} \\approx 0{,}9839$.",
          "**Étape 4 (Angle)** : $\\theta = \\arccos(0{,}9839) \\approx 10{,}3^\\circ$."
        ]
      }
    ],
    "traps": [
      "⚠️ Le produit scalaire de deux vecteurs est un **nombre réel** (scalaire), et non un vecteur !",
      "⚠️ Ne pas confondre le déterminant $xy' - yx' = 0$ (pour la colinéarité) et le produit scalaire $xx' + yy' = 0$ (pour l'orthogonalité)."
    ],
    "flashcards": [
      {
        "q": "À quelle condition deux vecteurs non nuls $\\vec{u}$ et $\\vec{v}$ sont-ils orthogonaux ?",
        "a": "$\\vec{u} \\cdot \\vec{v} = 0$ (produit scalaire nul)."
      },
      {
        "q": "Calculer le produit scalaire de $\\vec{u}(2 ; -5)$ et $\\vec{v}(3 ; 1)$ dans un repère orthonormé.",
        "a": "$2 \\times 3 + (-5) \\times 1 = 6 - 5 = 1$."
      }
    ]
  },

  "1G3": {
    "title": "1G3 : Applications du produit scalaire, formule d'Al-Kashi et droites",
    "domain": "Géométrie",
    "objectives": [
      "Appliquer le théorème d'Al-Kashi (loi des cosinus) dans un triangle quelconque : $a^2 = b^2 + c^2 - 2bc \\cos(\\widehat{A})$.",
      "Appliquer le théorème de la médiane : $AB^2 + AC^2 = 2AI^2 + \\frac{BC^2}{2}$.",
      "Définir un vecteur normal à une droite et déterminer l'équation cartésienne $ax + by + c = 0$ associée à $\\vec{n}(a ; b)$."
    ],
    "keyPoints": [
      {
        "title": "1. Théorème d'Al-Kashi (Loi des cosinus)",
        "content": "Dans un triangle $ABC$ quelconque avec les notations usuelles ($a = BC, b = AC, c = AB$) :\n$$a^2 = b^2 + c^2 - 2bc \\cos(\\widehat{A})$$\n$$b^2 = a^2 + c^2 - 2ac \\cos(\\widehat{B})$$\n$$c^2 = a^2 + b^2 - 2ab \\cos(\\widehat{C})$$\n*Généralisation du théorème de Pythagore* : si $\\widehat{A} = 90^\\circ$, alors $\\cos(\\widehat{A}) = 0$ et on retrouve $a^2 = b^2 + c^2$."
      },
      {
        "title": "2. Vecteur normal à une droite",
        "content": "• Un **vecteur normal** à une droite $\\mathcal{D}$ est un vecteur non nul $\\vec{n}$ orthogonal à tout vecteur directeur de $\\mathcal{D}$.\n• La droite passant par $A(x_A ; y_A)$ de vecteur normal $\\vec{n}\\begin{pmatrix} a \\\\ b \\end{pmatrix}$ admet pour équation cartésienne :\n$$a(x - x_A) + b(y - y_A) = 0 \\iff ax + by + c = 0$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver l'équation d'une droite connaissant un point et un vecteur normal",
        "example": "Déterminer l'équation de la droite $\\mathcal{D}$ passant par $A(2 ; -3)$ et ayant pour vecteur normal $\\vec{n}(4 ; -1)$.",
        "steps": [
          "**Étape 1 (Forme cartésienne)** : Comme $\\vec{n}(4 ; -1)$ est normal, l'équation s'écrit $4x - y + c = 0$.",
          "**Étape 2 (Constante c)** : $A(2 ; -3) \\in \\mathcal{D} \\implies 4(2) - (-3) + c = 0 \\implies 8 + 3 + c = 0 \\implies c = -11$.",
          "**Étape 3 (Conclusion)** : L'équation cartésienne est $4x - y - 11 = 0$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour $ax + by + c = 0$ :\n- Un vecteur **directeur** est $\\vec{u}(-b ; a)$.\n- Un vecteur **normal** est $\\vec{n}(a ; b)$."
    ],
    "flashcards": [
      {
        "q": "Énoncer la formule d'Al-Kashi pour le côté $a = BC$ dans un triangle $ABC$.",
        "a": "$BC^2 = AB^2 + AC^2 - 2 AB \\times AC \\cos(\\widehat{A})$."
      },
      {
        "q": "Quel est un vecteur normal à la droite d'équation $5x - 3y + 4 = 0$ ?",
        "a": "$\\vec{n}\\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}$."
      }
    ]
  },

  "1S1": {
    "title": "1S1 : Probabilités conditionnelles et indépendance d'événements",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Définir la probabilité conditionnelle de $B$ sachant $A$ : $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$ (avec $P(A) > 0$).",
      "Construire et pondérer un arbre de probabilités (règle des nœuds et règle du produit sur un chemin).",
      "Appliquer rigoureusement la formule des probabilités totales sur une partition de l'univers.",
      "Caractériser l'indépendance de deux événements : $P(A \\cap B) = P(A) \\times P(B)$ ou $P_A(B) = P(B)$."
    ],
    "keyPoints": [
      {
        "title": "1. Arbres pondérés et formule des probabilités totales",
        "content": "• **Règle 1 (Nœud)** : La somme des probabilités des branches issues d'un même nœud est égale à 1.\n• **Règle 2 (Chemin)** : La probabilité de l'issue au bout d'un chemin est le **produit** des probabilités le long de ce chemin : $P(A \\cap B) = P(A) \\times P_A(B)$.\n• **Formule des probabilités totales** : Si $(A, \\overline{A})$ forme une partition de l'univers, alors pour tout événement $B$ :\n$$P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = P(A) \\times P_A(B) + P(\\overline{A}) \\times P_{\\overline{A}}(B)$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une probabilité inverse avec la formule de Bayes",
        "example": "Une maladie touche 1% de la population ($P(M) = 0{,}01$). Un test donne un résultat positif avec probabilité $P_M(T) = 0{,}99$ chez les malades, et $P_{\\overline{M}}(T) = 0{,}02$ chez les non-malades. Calculer la probabilité d'être malade sachant que le test est positif ($P_T(M)$).",
        "steps": [
          "**Étape 1 (Proba totale P(T))** : $P(T) = P(M \\cap T) + P(\\overline{M} \\cap T) = 0{,}01 \\times 0{,}99 + 0{,}99 \\times 0{,}02 = 0{,}0099 + 0{,}0198 = 0{,}0297$.",
          "**Étape 2 (Conditionnelle)** : $P_T(M) = \\frac{P(M \\cap T)}{P(T)} = \\frac{0{,}0099}{0{,}0297} = \\frac{1}{3} \\approx 33{,}3\\%$.",
          "**Interprétation** : Bien que le test soit fiable à 99%, un patient positif n'a qu'1 chance sur 3 d'être réellement malade (paradoxe des faux positifs sur maladie rare)."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre $P(A \\cap B)$ (probabilité que $A$ ET $B$ se réalisent) et $P_A(B)$ (probabilité que $B$ se réalise SACHANT QUE $A$ est déjà réalisé).",
      "⚠️ Événements indépendants $\\neq$ événements incompatibles ! Deux événements incompatibles ($A \\cap B = \\emptyset$) de probabilités non nulles ne sont jamais indépendants."
    ],
    "flashcards": [
      {
        "q": "Quelle est la définition de $P_A(B)$ ?",
        "a": "$P_A(B) = \\frac{P(A \\cap B)}{P(A)}$."
      },
      {
        "q": "À quelle condition deux événements $A$ et $B$ sont-ils indépendants ?",
        "a": "$P(A \\cap B) = P(A) \\times P(B)$."
      }
    ]
  },

  "1S2": {
    "title": "1S2 : Variables aléatoires réelles, espérance, variance et écart-type",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Définir une variable aléatoire réelle $X$ sur un univers fini.",
      "Déterminer la loi de probabilité de $X$ (valeurs $x_i$ et probabilités associées $P(X = x_i)$).",
      "Calculer l'espérance mathématique $E(X) = \\sum x_i p_i$ et interpréter la notion de jeu équitable ($E(X) = 0$).",
      "Calculer la variance $V(X) = E(X^2) - (E(X))^2$ et l'écart-type $\\sigma(X) = \\sqrt{V(X)}$."
    ],
    "keyPoints": [
      {
        "title": "1. Espérance, variance et écart-type",
        "content": "Pour une variable aléatoire $X$ prenant les valeurs $x_1, x_2, \\dots, x_k$ avec les probabilités $p_i = P(X = x_i)$ :\n• **Espérance mathématique** (moyenne pondérée sur le long terme) :\n$$E(X) = \\sum_{i=1}^k x_i p_i = x_1 p_1 + x_2 p_2 + \\dots + x_k p_k$$\n• **Variance** (mesure de la dispersion par rapport à la moyenne) :\n$$V(X) = \\sum_{i=1}^k (x_i - E(X))^2 p_i = E(X^2) - (E(X))^2 \\quad \\text{(formule de König-Huygens)}$$\n• **Écart-type** : $\\sigma(X) = \\sqrt{V(X)}$ (même unité que $X$)."
      },
      {
        "title": "2. Linéarité de l'espérance",
        "content": "Pour tous réels $a$ et $b$ :\n$$E(aX + b) = a E(X) + b$$\n$$V(aX + b) = a^2 V(X) \\quad \\text{et} \\quad \\sigma(aX + b) = |a| \\sigma(X)$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer $E(X)$ et $V(X)$ à l'aide d'un tableau",
        "example": "On lance une pièce équilibrée. Si Pile, on gagne 10 € ; si Face, on perd 6 €. La mise est de 1 €.",
        "steps": [
          "**Étape 1 (Gain net X)** : En cas de Pile, gain net $x_1 = 10 - 1 = +9$ €. En cas de Face, gain net $x_2 = -6 - 1 = -7$ €.",
          "**Étape 2 (Probabilités)** : $p_1 = P(X = 9) = 0{,}5$ et $p_2 = P(X = -7) = 0{,}5$.",
          "**Étape 3 (Espérance)** : $E(X) = 9(0{,}5) + (-7)(0{,}5) = 4{,}5 - 3{,}5 = +1$ €. Le jeu est favorable au joueur (espérance positive)."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans la formule de König-Huygens, $E(X^2)$ se calcule en élevant les **valeurs $x_i$** au carré sans modifier les probabilités : $E(X^2) = \\sum x_i^2 p_i$.",
      "⚠️ Une variance est **toujours positive ou nulle** ($V(X) \\ge 0$). Si vous obtenez un résultat négatif, vous avez inversé les termes de König-Huygens."
    ],
    "flashcards": [
      {
        "q": "Énoncer la formule de König-Huygens pour la variance.",
        "a": "$V(X) = E(X^2) - (E(X))^2$."
      },
      {
        "q": "Si $E(X) = 4$, que vaut $E(3X - 5)$ ?",
        "a": "$E(3X - 5) = 3 E(X) - 5 = 3(4) - 5 = 7$."
      }
    ]
  }
};

window.MATHS_EXERCISES_1ERE = {
  "1A1": [
    {
      "id": "1A1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Calcul du discriminant",
      "skill": "Résoudre une équation du second degré",
      "statement": "Calculer le discriminant $\\Delta$ du trinôme $P(x) = 3x^2 - 5x + 2$.",
      "options": [
        "$\\Delta = 1$",
        "$\\Delta = -1$",
        "$\\Delta = 49$",
        "$\\Delta = 25$"
      ],
      "correctIndex": 0,
      "answer": "$\\Delta = 1$",
      "hint1": "$\\Delta = b^2 - 4ac$ avec $a=3, b=-5, c=2$.",
      "hint2": "$(-5)^2 - 4(3)(2) = 25 - 24 = 1$.",
      "solution": "$\\Delta = (-5)^2 - 4(3)(2) = 25 - 24 = 1$. Comme $\\Delta > 0$, l'équation admet deux racines réelles distinctes."
    },
    {
      "id": "1A1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Racines et factorisation",
      "skill": "Factoriser un trinôme du second degré",
      "statement": "Quelle est la factorisation du trinôme $2x^2 - 7x + 3$ ?",
      "options": [
        "$(2x - 1)(x - 3)$",
        "$(2x + 1)(x - 3)$",
        "$2(x + 1)(x - 3)$",
        "$(x - 1)(2x - 3)$"
      ],
      "correctIndex": 0,
      "answer": "$(2x - 1)(x - 3)$",
      "hint1": "$\\Delta = (-7)^2 - 4(2)(3) = 49 - 24 = 25 = 5^2$.",
      "hint2": "Racines : $x_1 = \\frac{7-5}{4} = \\frac{1}{2}$ et $x_2 = \\frac{7+5}{4} = 3$. La forme est $a(x-x_1)(x-x_2)$.",
      "solution": "Les racines sont $1/2$ et $3$. Factorisation : $2(x - 1/2)(x - 3) = (2x - 1)(x - 3)$."
    },
    {
      "id": "1A1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Signe d'un trinôme et inéquation",
      "skill": "Dresser le tableau de signes d'un trinôme",
      "statement": "Résoudre dans $\\mathbb{R}$ l'inéquation $-x^2 + 4x - 3 > 0$.",
      "options": [
        "$x \\in ]1 ; 3[$",
        "$x \\in ]-\\infty ; 1[ \\cup ]3 ; +\\infty[$",
        "$x \\in [1 ; 3]$",
        "$x \\in ]-3 ; -1[$"
      ],
      "correctIndex": 0,
      "answer": "$x \\in ]1 ; 3[$",
      "hint1": "Les racines de $-x^2 + 4x - 3 = 0$ sont $x = 1$ et $x = 3$.",
      "hint2": "Le coefficient $a = -1 < 0$ : le trinôme est du signe de $-a$ (donc positif) entre les racines.",
      "solution": "Le trinôme s'annule en 1 et 3. Comme $a = -1 < 0$, la parabole est tournée vers le bas : elle est strictement positive à l'intérieur des racines, soit $]1 ; 3[$."
    },
    {
      "id": "1A1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Nombre de solutions selon un paramètre",
      "skill": "Discuter du nombre de solutions selon un paramètre réel",
      "statement": "Pour quelle(s) valeur(s) de $m$ l'équation $x^2 - mx + 4 = 0$ admet-elle une unique solution réelle ?",
      "options": [
        "$m = -4$ ou $m = 4$",
        "$m = 0$",
        "$m = 2$ ou $m = -2$",
        "$m = 16$"
      ],
      "correctIndex": 0,
      "answer": "$m = -4$ ou $m = 4$",
      "hint1": "Une unique solution réelle $\\iff \\Delta = 0$.",
      "hint2": "$\\Delta = (-m)^2 - 4(1)(4) = m^2 - 16 = 0 \\iff m^2 = 16$.",
      "solution": "$\\Delta = m^2 - 16$. L'équation admet une unique racine double si et seulement si $\\Delta = 0 \\iff m^2 = 16 \\iff m = 4$ ou $m = -4$."
    }
  ],
  "1A2": [
    {
      "id": "1A2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Nombre dérivé et tangente",
      "skill": "Calculer l'équation de la tangente à une courbe",
      "statement": "Soit $f$ une fonction dérivable en 2 telle que $f(2) = 5$ et $f'(2) = -3$. Quelle est l'équation de la tangente à $\\mathcal{C}_f$ au point d'abscisse 2 ?",
      "options": [
        "$y = -3x + 11$",
        "$y = -3x + 5$",
        "$y = 5x - 3$",
        "$y = -3x - 1$"
      ],
      "correctIndex": 0,
      "answer": "$y = -3x + 11$",
      "hint1": "Équation de la tangente : $y = f'(a)(x - a) + f(a)$.",
      "hint2": "$y = -3(x - 2) + 5 = -3x + 6 + 5 = -3x + 11$.",
      "solution": "$y = f'(2)(x - 2) + f(2) = -3(x - 2) + 5 = -3x + 6 + 5 = -3x + 11$."
    },
    {
      "id": "1A2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Taux de variation et limite",
      "skill": "Calculer le nombre dérivé comme limite du taux d'accroissement",
      "statement": "Pour $f(x) = x^2$, calculer la limite quand $h \\to 0$ du taux $\\frac{f(3+h) - f(3)}{h}$.",
      "options": [
        "$6$",
        "$9$",
        "$3$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$6$",
      "hint1": "Le taux d'accroissement tend vers $f'(3)$.",
      "hint2": "Comme $f'(x) = 2x$, $f'(3) = 2 \\times 3 = 6$.",
      "solution": "Par définition, $\\lim_{h \\to 0} \\frac{(3+h)^2 - 9}{h} = \\lim_{h \\to 0} \\frac{6h + h^2}{h} = \\lim_{h \\to 0} (6 + h) = 6 = f'(3)$."
    },
    {
      "id": "1A2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Tangente horizontale",
      "skill": "Trouver les abscisses où la dérivée s'annule",
      "statement": "En quel(s) point(s) la courbe de $f(x) = \\frac{1}{3}x^3 - 4x + 1$ admet-elle une tangente horizontale ?",
      "options": [
        "En $x = -2$ et $x = 2$",
        "En $x = 0$",
        "En $x = 4$",
        "En $x = -4$ et $x = 4$"
      ],
      "correctIndex": 0,
      "answer": "En $x = -2$ et $x = 2$",
      "hint1": "Une tangente horizontale correspond à un coefficient directeur nul, soit $f'(x) = 0$.",
      "hint2": "$f'(x) = x^2 - 4 = 0 \\iff x = 2$ ou $x = -2$.",
      "solution": "$f'(x) = x^2 - 4$. Tangente horizontale $\\iff f'(x) = 0 \\iff x^2 = 4 \\iff x = 2$ ou $x = -2$."
    },
    {
      "id": "1A2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Tangente parallèle à une droite donnée",
      "skill": "Déterminer un point de contact de tangente par parallélisme",
      "statement": "En quel point de la parabole d'équation $y = x^2 - 2x + 3$ la tangente est-elle parallèle à la droite d'équation $y = 4x - 1$ ?",
      "options": [
        "$(3 ; 6)$",
        "$(2 ; 3)$",
        "$(1 ; 2)$",
        "$(4 ; 11)$"
      ],
      "correctIndex": 0,
      "answer": "$(3 ; 6)$",
      "hint1": "Deux droites sont parallèles si elles ont la même pente : $f'(x) = 4$.",
      "hint2": "$2x - 2 = 4 \\implies 2x = 6 \\implies x = 3$. Puis calcule $f(3)$.",
      "solution": "$f'(x) = 2x - 2 = 4 \\iff 2x = 6 \\iff x = 3$. L'ordonnée est $y = 3^2 - 2(3) + 3 = 9 - 6 + 3 = 6$. Le point est $(3 ; 6)$."
    }
  ],
  "1A3": [
    {
      "id": "1A3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Dérivée d'un quotient",
      "skill": "Appliquer la formule de dérivation $(u/v)'$",
      "statement": "Quelle est la dérivée de $f(x) = \\frac{2x + 1}{x - 3}$ sur $\\mathbb{R} \\setminus \\{3\\}$ ?",
      "options": [
        "$-\\frac{7}{(x - 3)^2}$",
        "$\\frac{7}{(x - 3)^2}$",
        "$\\frac{2}{(x - 3)^2}$",
        "$-7$"
      ],
      "correctIndex": 0,
      "answer": "$-\\frac{7}{(x - 3)^2}$",
      "hint1": "Formule : $(u/v)' = \\frac{u'v - uv'}{v^2}$ avec $u=2x+1$ et $v=x-3$.",
      "hint2": "$u'v - uv' = 2(x - 3) - (2x + 1)(1) = 2x - 6 - 2x - 1 = -7$.",
      "solution": "$f'(x) = \\frac{2(x - 3) - 1(2x + 1)}{(x - 3)^2} = \\frac{2x - 6 - 2x - 1}{(x - 3)^2} = -\\frac{7}{(x - 3)^2}$."
    },
    {
      "id": "1A3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Dérivée d'un produit",
      "skill": "Appliquer $(uv)' = u'v + uv'$",
      "statement": "Dériver la fonction $g(x) = (3x - 2)\\sqrt{x}$ pour $x > 0$.",
      "options": [
        "$\\frac{9x - 2}{2\\sqrt{x}}$",
        "$3\\sqrt{x} + \\frac{1}{2\\sqrt{x}}$",
        "$\\frac{3x - 2}{2\\sqrt{x}}$",
        "$\\frac{6x - 2}{\\sqrt{x}}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{9x - 2}{2\\sqrt{x}}$",
      "hint1": "$g'(x) = 3\\sqrt{x} + (3x - 2)\\frac{1}{2\\sqrt{x}}$.",
      "hint2": "Mets au même dénominateur $2\\sqrt{x}$ : $\\frac{6x + 3x - 2}{2\\sqrt{x}} = \\frac{9x - 2}{2\\sqrt{x}}$.",
      "solution": "$g'(x) = 3\\sqrt{x} + \\frac{3x - 2}{2\\sqrt{x}} = \\frac{3\\sqrt{x}(2\\sqrt{x}) + (3x - 2)}{2\\sqrt{x}} = \\frac{6x + 3x - 2}{2\\sqrt{x}} = \\frac{9x - 2}{2\\sqrt{x}}$."
    },
    {
      "id": "1A3-3",
      "tier": 3,
      "type": "mcq",
      "title": "Tableau de variations et extremum",
      "skill": "Déterminer les extrema d'une fonction polynôme du 3ème degré",
      "statement": "Pour $f(x) = 2x^3 - 9x^2 + 12x + 1$ sur $[0 ; 3]$, quel est le maximum local ?",
      "options": [
        "$6$ (atteint en $x = 1$)",
        "$5$ (atteint en $x = 2$)",
        "$10$ (atteint en $x = 3$)",
        "$1$ (atteint en $x = 0$)"
      ],
      "correctIndex": 0,
      "answer": "$6$ (atteint en $x = 1$)",
      "hint1": "$f'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2)$.",
      "hint2": "$f'$ est positive sur $[0 ; 1]$, négative sur $[1 ; 2]$, positive sur $[2 ; 3]$. Le maximum local est en $x=1$.",
      "solution": "$f'(x) = 6(x - 1)(x - 2)$. $f'$ passe de $+$ à $-$ en $x = 1$, donc $f(1) = 2(1) - 9(1) + 12(1) + 1 = 6$ est un maximum local."
    },
    {
      "id": "1A3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Problème d'optimisation",
      "skill": "Modéliser et optimiser une grandeur géométrique",
      "statement": "On dispose d'un grillage de 40 m pour entourer un enclos rectangulaire contre un mur (3 côtés à grillager). Quelle aire maximale peut-on obtenir ?",
      "options": [
        "$200\\text{ m}^2$",
        "$100\\text{ m}^2$",
        "$400\\text{ m}^2$",
        "$150\\text{ m}^2$"
      ],
      "correctIndex": 0,
      "answer": "$200\\text{ m}^2$",
      "hint1": "Si la largeur est $x$, la longueur est $40 - 2x$. L'aire est $A(x) = x(40 - 2x) = 40x - 2x^2$.",
      "hint2": "$A'(x) = 40 - 4x = 0 \\implies x = 10$. Aire : $A(10) = 10 \\times 20 = 200$.",
      "solution": "Périmètre grillagé : $2x + y = 40 \\implies y = 40 - 2x$. L'aire est $A(x) = x(40 - 2x) = -2x^2 + 40x$. Dérivée : $A'(x) = -4x + 40 = 0 \\iff x = 10$. Aire max $= 10 \\times 20 = 200\\text{ m}^2$."
    }
  ],
  "1A4": [
    {
      "id": "1A4-1",
      "tier": 1,
      "type": "mcq",
      "title": "Simplification d'exponentielles",
      "skill": "Appliquer les propriétés algébriques de la fonction exponentielle",
      "statement": "Simplifier l'expression $A = \\frac{e^{3x+1} \\times e^{-x+2}}{e^{2x-4}}$.",
      "options": [
        "$e^7$",
        "$e^{4x+7}$",
        "$e^{-1}$",
        "$e^{2x-1}$"
      ],
      "correctIndex": 0,
      "answer": "$e^7$",
      "hint1": "Utilise $e^a \\times e^b = e^{a+b}$ et $e^u / e^v = e^{u-v}$.",
      "hint2": "Numérateur : $(3x+1) + (-x+2) = 2x + 3$. Puis $(2x+3) - (2x-4) = 7$.",
      "solution": "$A = \\frac{e^{(3x+1)+(-x+2)}}{e^{2x-4}} = \\frac{e^{2x+3}}{e^{2x-4}} = e^{(2x+3)-(2x-4)} = e^7$."
    },
    {
      "id": "1A4-2",
      "tier": 2,
      "type": "mcq",
      "title": "Dérivée avec exponentielle $e^{u(x)}$",
      "skill": "Dériver une fonction de la forme $e^{u(x)}$",
      "statement": "Quelle est la dérivée de $f(x) = e^{-3x^2 + 2x}$ ?",
      "options": [
        "$(-6x + 2)e^{-3x^2 + 2x}$",
        "$-6x e^{-3x^2 + 2x}$",
        "$e^{-6x + 2}$",
        "$(6x - 2)e^{-3x^2 + 2x}$"
      ],
      "correctIndex": 0,
      "answer": "$(-6x + 2)e^{-3x^2 + 2x}$",
      "hint1": "Formule : $(e^u)' = u' e^u$.",
      "hint2": "Ici $u(x) = -3x^2 + 2x$, donc $u'(x) = -6x + 2$.",
      "solution": "$(e^u)' = u' e^u$. Avec $u(x) = -3x^2 + 2x$, on a $u'(x) = -6x + 2$, donc $f'(x) = (-6x + 2)e^{-3x^2 + 2x}$."
    },
    {
      "id": "1A4-3",
      "tier": 3,
      "type": "mcq",
      "title": "Étude de fonction avec exponentielle",
      "skill": "Dresser les variations de $(ax+b)e^x$",
      "statement": "Soit $g(x) = (x - 2)e^x$. Quel est le minimum de $g$ sur $\\mathbb{R}$ ?",
      "options": [
        "$-e$ (atteint en $x = 1$)",
        "$-2$ (atteint en $x = 0$)",
        "$0$ (atteint en $x = 2$)",
        "$-e^2$ (atteint en $x = -1$)"
      ],
      "correctIndex": 0,
      "answer": "$-e$ (atteint en $x = 1$)",
      "hint1": "Dérive en utilisant $(uv)' = u'v + uv'$ : $g'(x) = 1 \\cdot e^x + (x - 2)e^x = (x - 1)e^x$.",
      "hint2": "Comme $e^x > 0$, le signe de $g'$ est celui de $x - 1$. Le minimum est en $x = 1$.",
      "solution": "$g'(x) = 1 \\cdot e^x + (x - 2)e^x = (x - 1)e^x$. Comme $e^x > 0$, $g'(x) = 0 \\iff x = 1$. $g(1) = (1 - 2)e^1 = -e$."
    },
    {
      "id": "1A4-4",
      "tier": 4,
      "type": "mcq",
      "title": "Équation se ramenant au second degré",
      "skill": "Résoudre une équation avec changement de variable $X = e^x$",
      "statement": "Résoudre dans $\\mathbb{R}$ l'équation $e^{2x} - 5e^x + 6 = 0$.",
      "options": [
        "$x = \\ln(2)$ ou $x = \\ln(3)$",
        "$x = 2$ ou $x = 3$",
        "$x = e^2$ ou $x = e^3$",
        "Pas de solution réelle"
      ],
      "correctIndex": 0,
      "answer": "$x = \\ln(2)$ ou $x = \\ln(3)$",
      "hint1": "Pose $X = e^x > 0$. L'équation devient $X^2 - 5X + 6 = 0$.",
      "hint2": "Les racines sont $X = 2$ et $X = 3$, donc $e^x = 2 \\iff x = \\ln(2)$ et $e^x = 3 \\iff x = \\ln(3)$.",
      "solution": "Posons $X = e^x$. Alors $X^2 - 5X + 6 = 0 \\iff (X - 2)(X - 3) = 0 \\iff X = 2$ ou $X = 3$. Comme $X > 0$, $x = \\ln(2)$ ou $x = \\ln(3)$."
    }
  ],
  "1A5": [
    {
      "id": "1A5-1",
      "tier": 1,
      "type": "mcq",
      "title": "Sens de variation d'une suite",
      "skill": "Étudier le signe de u_{n+1} - u_n",
      "statement": "Soit la suite $(u_n)$ définie par $u_n = 3n^2 - 2n + 5$. Quel est son sens de variation pour $n \\ge 1$ ?",
      "options": [
        "Strictement croissante",
        "Strictement décroissante",
        "Constante",
        "Non monotone"
      ],
      "correctIndex": 0,
      "answer": "Strictement croissante",
      "hint1": "Calcule $u_{n+1} - u_n$.",
      "hint2": "$u_{n+1} - u_n = 3(n+1)^2 - 2(n+1) + 5 - (3n^2 - 2n + 5) = 6n + 1 > 0$.",
      "solution": "$u_{n+1} - u_n = 3(n^2 + 2n + 1) - 2n - 2 + 5 - 3n^2 + 2n - 5 = 6n + 1$. Pour tout $n \\ge 1$, $6n + 1 > 0$, donc la suite est strictement croissante."
    },
    {
      "id": "1A5-2",
      "tier": 2,
      "type": "mcq",
      "title": "Suite arithmétique et terme général",
      "skill": "Calculer un terme d'une suite arithmétique",
      "statement": "Soit $(u_n)$ une suite arithmétique de premier terme $u_0 = 4$ et de raison $r = -3$. Que vaut $u_{20}$ ?",
      "options": [
        "$-56$",
        "$-60$",
        "$-53$",
        "$64$"
      ],
      "correctIndex": 0,
      "answer": "$-56$",
      "hint1": "Formule : $u_n = u_0 + n \\times r$.",
      "hint2": "$u_{20} = 4 + 20 \\times (-3) = 4 - 60 = -56$.",
      "solution": "$u_{20} = u_0 + 20r = 4 + 20(-3) = 4 - 60 = -56$."
    },
    {
      "id": "1A5-3",
      "tier": 3,
      "type": "mcq",
      "title": "Somme des termes d'une suite arithmétique",
      "skill": "Appliquer la formule de la somme des termes consécutifs",
      "statement": "Calculer la somme $S = 5 + 8 + 11 + \\dots + 62$.",
      "options": [
        "$670$",
        "$603$",
        "$1340$",
        "$700$"
      ],
      "correctIndex": 0,
      "answer": "$670$",
      "hint1": "C'est une suite arithmétique de raison $r = 3$. Trouve le nombre de termes $N$ : $62 = 5 + (N - 1) \\times 3$.",
      "hint2": "$3(N - 1) = 57 \\implies N - 1 = 19 \\implies N = 20$. Puis $S = 20 \\times \\frac{5 + 62}{2}$.",
      "solution": "$u_n = 5 + 3n$. $62 = 5 + 3n \\iff 3n = 57 \\iff n = 19$, donc 20 termes de 0 à 19. $S = 20 \\times \\frac{5 + 62}{2} = 10 \\times 67 = 670$."
    },
    {
      "id": "1A5-4",
      "tier": 4,
      "type": "mcq",
      "title": "Suite arithmético-géométrique et suite auxiliaire",
      "skill": "Étudier une suite récurrente u_{n+1} = a u_n + b",
      "statement": "Soit $u_0 = 2$ et $u_{n+1} = 0{,}5 u_n + 3$. En posant $v_n = u_n - 6$, quelle est la nature de $(v_n)$ et la limite de $u_n$ ?",
      "options": [
        "$(v_n)$ est géométrique de raison $0{,}5$ et $\\lim u_n = 6$",
        "$(v_n)$ est arithmétique de raison $3$ et $\\lim u_n = +\\infty$",
        "$(v_n)$ est géométrique de raison $3$ et $\\lim u_n = 0$",
        "$(v_n)$ n'a pas de limite"
      ],
      "correctIndex": 0,
      "answer": "$(v_n)$ est géométrique de raison $0{,}5$ et $\\lim u_n = 6$",
      "hint1": "$v_{n+1} = u_{n+1} - 6 = 0{,}5 u_n + 3 - 6 = 0{,}5(u_n - 6) = 0{,}5 v_n$.",
      "hint2": "Comme $|0{,}5| < 1$, $\\lim v_n = 0$, donc $\\lim u_n = 6$.",
      "solution": "$v_{n+1} = 0{,}5 u_n + 3 - 6 = 0{,}5(u_n - 6) = 0{,}5 v_n$. $(v_n)$ est géométrique de raison $0{,}5$. Comme $|0{,}5| < 1$, $\\lim v_n = 0 \\implies \\lim u_n = 6$."
    }
  ],
  "1A6": [
    {
      "id": "1A6-1",
      "tier": 1,
      "type": "mcq",
      "title": "Somme d'une suite géométrique",
      "skill": "Calculer la somme 1 + q + q^2 + ... + q^n",
      "statement": "Calculer la somme $S = 1 + 2 + 4 + 8 + 16 + 32 + 64$.",
      "options": [
        "$127$",
        "$128$",
        "$63$",
        "$255$"
      ],
      "correctIndex": 0,
      "answer": "$127$",
      "hint1": "Formule : $\\frac{1 - q^{n+1}}{1 - q}$ avec $q = 2$.",
      "hint2": "Il y a 7 termes : $2^0$ à $2^6$. $\\frac{1 - 2^7}{1 - 2} = \\frac{1 - 128}{-1} = 127$.",
      "solution": "$S = \\sum_{k=0}^6 2^k = \\frac{1 - 2^7}{1 - 2} = \\frac{1 - 128}{-1} = 127$."
    },
    {
      "id": "1A6-2",
      "tier": 2,
      "type": "mcq",
      "title": "Terme général d'une suite géométrique",
      "skill": "Calculer un terme lointain d'une suite géométrique",
      "statement": "Soit $(v_n)$ une suite géométrique de premier terme $v_1 = 3$ et de raison $q = \\frac{1}{2}$. Que vaut $v_5$ ?",
      "options": [
        "$\\frac{3}{16}$",
        "$\\frac{3}{32}$",
        "$\\frac{3}{8}$",
        "$\\frac{1}{16}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{3}{16}$",
      "hint1": "$v_n = v_1 \\times q^{n-1}$.",
      "hint2": "$v_5 = 3 \\times (1/2)^4 = 3 \\times \\frac{1}{16} = \\frac{3}{16}$.",
      "solution": "$v_5 = v_1 \\times q^{5-1} = 3 \\times \\left(\\frac{1}{2}\\right)^4 = \\frac{3}{16}$."
    },
    {
      "id": "1A6-3",
      "tier": 3,
      "type": "mcq",
      "title": "Modélisation par une suite géométrique",
      "skill": "Appliquer un taux d'évolution répété",
      "statement": "Une ville compte 50 000 habitants en 2020. Sa population diminue de 2% chaque année. Quelle formule donne la population $P_n$ en $2020 + n$ ?",
      "options": [
        "$P_n = 50\\,000 \\times (0{,}98)^n$",
        "$P_n = 50\\,000 \\times (1{,}02)^n$",
        "$P_n = 50\\,000 - 1000n$",
        "$P_n = 50\\,000 \\times (0{,}02)^n$"
      ],
      "correctIndex": 0,
      "answer": "$P_n = 50\\,000 \\times (0{,}98)^n$",
      "hint1": "Une baisse de 2% correspond à multiplier par le coefficient multiplicateur $1 - 0{,}02 = 0{,}98$.",
      "hint2": "Il s'agit donc d'une suite géométrique de raison $q = 0{,}98$.",
      "solution": "Le coefficient multiplicateur associé à une baisse de 2% est $1 - 2/100 = 0{,}98$. D'où $P_n = 50\\,000 \\times (0{,}98)^n$."
    },
    {
      "id": "1A6-4",
      "tier": 4,
      "type": "mcq",
      "title": "Limite de la somme d'une suite géométrique",
      "skill": "Calculer la limite d'une série géométrique convergente",
      "statement": "Quelle est la limite quand $n \\to +\\infty$ de $S_n = \\sum_{k=0}^n \\left(\\frac{1}{3}\\right)^k$ ?",
      "options": [
        "$\\frac{3}{2}$",
        "$3$",
        "$1$",
        "$\\frac{2}{3}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{3}{2}$",
      "hint1": "$S_n = \\frac{1 - (1/3)^{n+1}}{1 - 1/3}$.",
      "hint2": "Comme $|1/3| < 1$, $(1/3)^{n+1} \\to 0$. La limite est $\\frac{1}{2/3} = \\frac{3}{2}$.",
      "solution": "Comme $|1/3| < 1$, $\\lim_{n \\to +\\infty} (1/3)^{n+1} = 0$. Donc $\\lim S_n = \\frac{1}{1 - 1/3} = \\frac{1}{2/3} = \\frac{3}{2}$."
    }
  ],
  "1G1": [
    {
      "id": "1G1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Valeur trigonométrique remarquable",
      "skill": "Connaître le cosinus et le sinus des angles remarquables",
      "statement": "Quelle est la valeur exacte de $\\cos\\left(\\frac{5\\pi}{6}\\right)$ ?",
      "options": [
        "$-\\frac{\\sqrt{3}}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$-\\frac{1}{2}$",
        "$\\frac{1}{2}$"
      ],
      "correctIndex": 0,
      "answer": "$-\\frac{\\sqrt{3}}{2}$",
      "hint1": "$\\frac{5\\pi}{6} = \\pi - \\frac{\\pi}{6}$.",
      "hint2": "$\\cos(\\pi - x) = -\\cos(x)$, or $\\cos(\\pi/6) = \\frac{\\sqrt{3}}{2}$.",
      "solution": "$\\cos(5\\pi/6) = \\cos(\\pi - \\pi/6) = -\\cos(\\pi/6) = -\\frac{\\sqrt{3}}{2}$."
    },
    {
      "id": "1G1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Relation fondamentale de la trigonométrie",
      "skill": "Utiliser cos^2(x) + sin^2(x) = 1",
      "statement": "Sachant que $\\sin(x) = \\frac{3}{5}$ et que $x \\in \\left[\\frac{\\pi}{2} ; \\pi\\right]$, que vaut $\\cos(x)$ ?",
      "options": [
        "$-\\frac{4}{5}$",
        "$\\frac{4}{5}$",
        "$-\\frac{2}{5}$",
        "$\\frac{16}{25}$"
      ],
      "correctIndex": 0,
      "answer": "$-\\frac{4}{5}$",
      "hint1": "$\\cos^2(x) = 1 - \\sin^2(x) = 1 - 9/25 = 16/25$.",
      "hint2": "Sur $[\\pi/2 ; \\pi]$, le cosinus est négatif.",
      "solution": "$\\cos^2(x) = 1 - (3/5)^2 = 16/25$. Comme $x \\in [\\pi/2 ; \\pi]$, $\\cos(x) \\le 0$, donc $\\cos(x) = -\\sqrt{16/25} = -\\frac{4}{5}$."
    },
    {
      "id": "1G1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Résolution d'équation trigonométrique",
      "skill": "Résoudre cos(x) = a sur [-pi ; pi]",
      "statement": "Quelles sont les solutions dans $]-\\pi ; \\pi]$ de $\\cos(x) = -\\frac{1}{2}$ ?",
      "options": [
        "$S = \\left\\{-\\frac{2\\pi}{3} ; \\frac{2\\pi}{3}\\right\\}$",
        "$S = \\left\\{-\\frac{\\pi}{3} ; \\frac{\\pi}{3}\\right\\}$",
        "$S = \\left\\{\\frac{2\\pi}{3} ; \\frac{4\\pi}{3}\\right\\}$",
        "$S = \\left\\{-\\frac{5\\pi}{6} ; \\frac{5\\pi}{6}\\right\\}$"
      ],
      "correctIndex": 0,
      "answer": "$S = \\left\\{-\\frac{2\\pi}{3} ; \\frac{2\\pi}{3}\\right\\}$",
      "hint1": "$\\cos(x) = -\\cos(\\pi/3) = \\cos(\\pi - \\pi/3) = \\cos(2\\pi/3)$.",
      "hint2": "Les deux solutions sur $]-\\pi ; \\pi]$ sont $\\alpha$ et $-\\alpha$.",
      "solution": "$\\cos(x) = \\cos(2\\pi/3) \\iff x = \\frac{2\\pi}{3}$ ou $x = -\\frac{2\\pi}{3}$ dans l'intervalle $]-\\pi ; \\pi]$."
    },
    {
      "id": "1G1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Formule de duplication",
      "skill": "Appliquer cos(2x) = 2 cos^2(x) - 1",
      "statement": "Exprimer $\\cos(2x)$ en fonction de $\\cos(x)$ pour tout réel $x$.",
      "options": [
        "$2\\cos^2(x) - 1$",
        "$2\\cos(x) - 1$",
        "$\\cos^2(x) + \\sin^2(x)$",
        "$1 - \\cos^2(x)$"
      ],
      "correctIndex": 0,
      "answer": "$2\\cos^2(x) - 1$",
      "hint1": "$\\cos(2x) = \\cos^2(x) - \\sin^2(x)$.",
      "hint2": "Remplace $\\sin^2(x)$ par $1 - \\cos^2(x)$.",
      "solution": "$\\cos(2x) = \\cos^2(x) - \\sin^2(x) = \\cos^2(x) - (1 - \\cos^2(x)) = 2\\cos^2(x) - 1$."
    }
  ],
  "1G2": [
    {
      "id": "1G2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Produit scalaire analytique",
      "skill": "Calculer u.v dans un repère orthonormé avec xx' + yy'",
      "statement": "Dans un repère orthonormé, soit $\\vec{u}(3 ; -4)$ et $\\vec{v}(2 ; 5)$. Calculer le produit scalaire $\\vec{u} \\cdot \\vec{v}$.",
      "options": [
        "$-14$",
        "$26$",
        "$-13$",
        "$14$"
      ],
      "correctIndex": 0,
      "answer": "$-14$",
      "hint1": "$\\vec{u} \\cdot \\vec{v} = x x' + y y'$.",
      "hint2": "$3 \\times 2 + (-4) \\times 5 = 6 - 20 = -14$.",
      "solution": "$\\vec{u} \\cdot \\vec{v} = 3(2) + (-4)(5) = 6 - 20 = -14$."
    },
    {
      "id": "1G2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Produit scalaire géométrique",
      "skill": "Calculer ||u|| ||v|| cos(theta)",
      "statement": "Soit deux vecteurs de normes $\\|\\vec{u}\\| = 4$, $\\|\\vec{v}\\| = 5$ formant un angle de $\\frac{\\pi}{3}$. Que vaut $\\vec{u} \\cdot \\vec{v}$ ?",
      "options": [
        "$10$",
        "$10\\sqrt{3}$",
        "$20$",
        "$5$"
      ],
      "correctIndex": 0,
      "answer": "$10$",
      "hint1": "$\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\theta)$.",
      "hint2": "$\\cos(\\pi/3) = \\frac{1}{2}$. Donc $4 \\times 5 \\times \\frac{1}{2} = 10$.",
      "solution": "$\\vec{u} \\cdot \\vec{v} = 4 \\times 5 \\times \\cos(\\pi/3) = 20 \\times \\frac{1}{2} = 10$."
    },
    {
      "id": "1G2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Orthogonalité et paramètre",
      "skill": "Appliquer la condition d'orthogonalité u.v = 0",
      "statement": "Pour quelle valeur de $k$ les vecteurs $\\vec{u}(2 ; k)$ et $\\vec{v}(k - 1 ; -3)$ sont-ils orthogonaux ?",
      "options": [
        "$k = -2$",
        "$k = 2$",
        "$k = 1$",
        "$k = -1$"
      ],
      "correctIndex": 0,
      "answer": "$k = -2$",
      "hint1": "$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.",
      "hint2": "$2(k - 1) + k(-3) = 0 \\iff 2k - 2 - 3k = 0$.",
      "solution": "$\\vec{u} \\cdot \\vec{v} = 2(k - 1) - 3k = -k - 2 = 0 \\iff k = -2$."
    },
    {
      "id": "1G2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème d'Al-Kashi",
      "skill": "Calculer une longueur dans un triangle quelconque avec Al-Kashi",
      "statement": "Dans un triangle $ABC$, on donne $AB = 5$, $AC = 8$ et $\\widehat{BAC} = 60^\\circ$. Que vaut $BC$ ?",
      "options": [
        "$7$",
        "$\\sqrt{89}$",
        "$\\sqrt{49} = 7$",
        "$3\\sqrt{5}$"
      ],
      "correctIndex": 0,
      "answer": "$7$",
      "hint1": "Formule d'Al-Kashi : $BC^2 = AB^2 + AC^2 - 2 AB \\times AC \\cos(\\widehat{A})$.",
      "hint2": "$BC^2 = 25 + 64 - 2(5)(8)(0{,}5) = 89 - 40 = 49$.",
      "solution": "$BC^2 = 5^2 + 8^2 - 2(5)(8)\\cos(60^\\circ) = 25 + 64 - 40 = 49$, donc $BC = \\sqrt{49} = 7$."
    }
  ],
  "1G3": [
    {
      "id": "1G3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Vecteur normal et droite",
      "skill": "Identifier un vecteur normal d'une droite",
      "statement": "Un vecteur normal à la droite d'équation cartésienne $4x - 7y + 1 = 0$ est :",
      "options": [
        "$\\vec{n}(4 ; -7)$",
        "$\\vec{n}(7 ; 4)$",
        "$\\vec{n}(-7 ; 4)$",
        "$\\vec{n}(4 ; 7)$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{n}(4 ; -7)$",
      "hint1": "Pour une droite d'équation $ax + by + c = 0$, un vecteur normal est $\\vec{n}(a ; b)$.",
      "hint2": "Ici $a = 4$ et $b = -7$.",
      "solution": "D'après le cours, les coefficients de $x$ et $y$ donnent les coordonnées d'un vecteur normal : $\\vec{n}(a ; b) = \\vec{n}(4 ; -7)$."
    },
    {
      "id": "1G3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Équation cartésienne de cercle",
      "skill": "Écrire l'équation d'un cercle connaissant centre et rayon",
      "statement": "Quelle est l'équation du cercle de centre $\\Omega(2 ; -3)$ et de rayon $R = 4$ ?",
      "options": [
        "$(x - 2)^2 + (y + 3)^2 = 16$",
        "$(x + 2)^2 + (y - 3)^2 = 16$",
        "$(x - 2)^2 + (y + 3)^2 = 4$",
        "$x^2 + y^2 = 16$"
      ],
      "correctIndex": 0,
      "answer": "$(x - 2)^2 + (y + 3)^2 = 16$",
      "hint1": "L'équation d'un cercle de centre $(x_0, y_0)$ et de rayon $R$ est $(x - x_0)^2 + (y - y_0)^2 = R^2$.",
      "hint2": "$R^2 = 4^2 = 16$.",
      "solution": "$(x - 2)^2 + (y - (-3))^2 = 4^2 \\iff (x - 2)^2 + (y + 3)^2 = 16$."
    },
    {
      "id": "1G3-3",
      "tier": 3,
      "type": "mcq",
      "title": "Équation d'une droite perpendiculaire",
      "skill": "Déterminer la perpendiculaire à une droite passant par un point",
      "statement": "Quelle est l'équation cartésienne de la droite passant par $A(1 ; 2)$ et perpendiculaire à la droite d'équation $2x + 3y - 5 = 0$ ?",
      "options": [
        "$3x - 2y + 1 = 0$",
        "$2x + 3y - 8 = 0$",
        "$3x + 2y - 7 = 0$",
        "$-2x + 3y - 4 = 0$"
      ],
      "correctIndex": 0,
      "answer": "$3x - 2y + 1 = 0$",
      "hint1": "Un vecteur normal à la première droite est $(2 ; 3)$. Il sert de vecteur directeur à la droite perpendiculaire.",
      "hint2": "Un vecteur normal à la nouvelle droite est $(3 ; -2)$. Son équation est $3x - 2y + c = 0$.",
      "solution": "La droite cherchée a pour vecteur normal un vecteur orthogonal à $(2 ; 3)$, par exemple $(3 ; -2)$. Équation : $3x - 2y + c = 0$. En $A(1 ; 2)$ : $3(1) - 2(2) + c = 0 \\iff c = 1$. Donc $3x - 2y + 1 = 0$."
    },
    {
      "id": "1G3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Cercle défini par un diamètre",
      "skill": "Caractériser un cercle par le produit scalaire MA.MB = 0",
      "statement": "Soit $A(-1 ; 2)$ et $B(3 ; 6)$. Le cercle de diamètre $[AB]$ a pour équation :",
      "options": [
        "$(x - 1)^2 + (y - 4)^2 = 8$",
        "$(x + 1)^2 + (y + 4)^2 = 8$",
        "$(x - 1)^2 + (y - 4)^2 = 32$",
        "$(x - 2)^2 + (y - 3)^2 = 8$"
      ],
      "correctIndex": 0,
      "answer": "$(x - 1)^2 + (y - 4)^2 = 8$",
      "hint1": "Le centre $\\Omega$ est le milieu de $[AB]$ : $\\Omega(1 ; 4)$.",
      "hint2": "Le rayon au carré est $\\Omega A^2 = (-1 - 1)^2 + (2 - 4)^2 = (-2)^2 + (-2)^2 = 8$.",
      "solution": "Milieu $\\Omega\\left(\\frac{-1+3}{2} ; \\frac{2+6}{2}\\right) = \\Omega(1 ; 4)$. Rayon $R^2 = \\Omega A^2 = (-2)^2 + (-2)^2 = 8$. Équation : $(x - 1)^2 + (y - 4)^2 = 8$."
    }
  ],
  "1S1": [
    {
      "id": "1S1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Formule des probabilités totales",
      "skill": "Calculer une probabilité totale avec un arbre pondéré",
      "statement": "On donne $P(A) = 0{,}3$, $P_A(B) = 0{,}8$ et $P_{\\overline{A}}(B) = 0{,}2$. Que vaut $P(B)$ ?",
      "options": [
        "$0{,}38$",
        "$0{,}50$",
        "$0{,}24$",
        "$0{,}42$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}38$",
      "hint1": "Formule : $P(B) = P(A) \\times P_A(B) + P(\\overline{A}) \\times P_{\\overline{A}}(B)$.",
      "hint2": "$P(\\overline{A}) = 1 - 0{,}3 = 0{,}7$. Alors $0{,}3 \\times 0{,}8 + 0{,}7 \\times 0{,}2 = 0{,}24 + 0{,}14 = 0{,}38$.",
      "solution": "$P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = 0{,}3(0{,}8) + (1 - 0{,}3)(0{,}2) = 0{,}24 + 0{,}14 = 0{,}38$."
    },
    {
      "id": "1S1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Probabilité conditionnelle inverse",
      "skill": "Calculer P_B(A) avec P(A inter B) / P(B)",
      "statement": "Sachant que $P(A \\cap B) = 0{,}12$ et que $P(B) = 0{,}40$, calculer $P_B(A)$.",
      "options": [
        "$0{,}30$",
        "$0{,}048$",
        "$0{,}28$",
        "$0{,}52$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}30$",
      "hint1": "$P_B(A) = \\frac{P(A \\cap B)}{P(B)}$.",
      "hint2": "$\\frac{0{,}12}{0{,}40} = \\frac{12}{40} = 0{,}30$.",
      "solution": "$P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}12}{0{,}40} = 0{,}30$."
    },
    {
      "id": "1S1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Test d'indépendance de deux événements",
      "skill": "Vérifier si P(A inter B) = P(A) x P(B)",
      "statement": "On donne $P(A) = 0{,}4$ et $P(B) = 0{,}5$. Si $A$ et $B$ sont indépendants, que vaut $P(A \\cup B)$ ?",
      "options": [
        "$0{,}70$",
        "$0{,}90$",
        "$0{,}20$",
        "$0{,}80$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}70$",
      "hint1": "Si $A$ et $B$ sont indépendants, $P(A \\cap B) = P(A) \\times P(B) = 0{,}20$.",
      "hint2": "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0{,}4 + 0{,}5 - 0{,}20 = 0{,}70$.",
      "solution": "Par indépendance, $P(A \\cap B) = 0{,}4 \\times 0{,}5 = 0{,}20$. Alors $P(A \\cup B) = 0{,}4 + 0{,}5 - 0{,}20 = 0{,}70$."
    },
    {
      "id": "1S1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Diagnostic médical et formule de Bayes",
      "skill": "Appliquer la formule de Bayes en situation concrète",
      "statement": "Une maladie touche 1% d'une population ($P(M) = 0{,}01$). Un test est positif à 99% chez les malades ($P_M(T) = 0{,}99$) et faux positif à 2% chez les non-malades ($P_{\\overline{M}}(T) = 0{,}02$). Que vaut $P_T(M)$ ?",
      "options": [
        "Environ $33\\%$",
        "Environ $99\\%$",
        "Environ $1\\%$",
        "Environ $50\\%$"
      ],
      "correctIndex": 0,
      "answer": "Environ $33\\%$",
      "hint1": "$P(T) = 0{,}01 \\times 0{,}99 + 0{,}99 \\times 0{,}02 = 0{,}0099 + 0{,}0198 = 0{,}0297$.",
      "hint2": "$P_T(M) = \\frac{0{,}0099}{0{,}0297} = \\frac{1}{3} \\approx 33{,}3\\%$.",
      "solution": "$P(T) = 0{,}01(0{,}99) + 0{,}99(0{,}02) = 0{,}0297$. $P_T(M) = \\frac{0{,}0099}{0{,}0297} = \\frac{1}{3} \\approx 33{,}3\\%$. Un résultat contre-intuitif classique !"
    }
  ],
  "1S2": [
    {
      "id": "1S2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Espérance d'une variable aléatoire",
      "skill": "Calculer l'espérance E(X) = sum x_i p_i",
      "statement": "Soit $X$ prenant les valeurs $-2$ ($p = 0{,}2$), $1$ ($p = 0{,}5$) et $4$ ($p = 0{,}3$). Quelle est son espérance $E(X)$ ?",
      "options": [
        "$1{,}3$",
        "$1{,}0$",
        "$0{,}9$",
        "$2{,}1$"
      ],
      "correctIndex": 0,
      "answer": "$1{,}3$",
      "hint1": "$E(X) = \\sum x_i P(X = x_i)$.",
      "hint2": "$-2(0{,}2) + 1(0{,}5) + 4(0{,}3) = -0{,}4 + 0{,}5 + 1{,}2 = 1{,}3$.",
      "solution": "$E(X) = (-2)(0{,}2) + 1(0{,}5) + 4(0{,}3) = -0{,}4 + 0{,}5 + 1{,}2 = 1{,}3$."
    },
    {
      "id": "1S2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Transformation affine de variable aléatoire",
      "skill": "Appliquer E(aX+b) et V(aX+b)",
      "statement": "Sachant que $E(X) = 4$ et $V(X) = 9$, que valent l'espérance et l'écart-type de $Y = 3X - 5$ ?",
      "options": [
        "$E(Y) = 7$ et $\\sigma(Y) = 9$",
        "$E(Y) = 7$ et $\\sigma(Y) = 27$",
        "$E(Y) = 12$ et $\\sigma(Y) = 9$",
        "$E(Y) = 7$ et $\\sigma(Y) = 3$"
      ],
      "correctIndex": 0,
      "answer": "$E(Y) = 7$ et $\\sigma(Y) = 9$",
      "hint1": "$E(aX+b) = aE(X) + b = 3(4) - 5 = 7$.",
      "hint2": "$\\sigma(aX+b) = |a|\\sigma(X)$. Or $\\sigma(X) = \\sqrt{9} = 3$, donc $\\sigma(Y) = 3 \\times 3 = 9$.",
      "solution": "$E(3X - 5) = 3(4) - 5 = 7$. $\\sigma(X) = \\sqrt{9} = 3 \\implies \\sigma(3X - 5) = 3 \\times 3 = 9$."
    },
    {
      "id": "1S2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Calcul de variance par Koenig-Huygens",
      "skill": "Utiliser V(X) = E(X^2) - (E(X))^2",
      "statement": "On donne $E(X) = 3$ et $E(X^2) = 13$. Quelle est la variance $V(X)$ ?",
      "options": [
        "$4$",
        "$10$",
        "$22$",
        "$2$"
      ],
      "correctIndex": 0,
      "answer": "$4$",
      "hint1": "Formule de Koenig-Huygens : $V(X) = E(X^2) - [E(X)]^2$.",
      "hint2": "$13 - 3^2 = 13 - 9 = 4$.",
      "solution": "$V(X) = E(X^2) - (E(X))^2 = 13 - 9 = 4$."
    },
    {
      "id": "1S2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Jeu équitable et mise d'un jeu de hasard",
      "skill": "Déterminer la mise pour rendre un jeu équitable",
      "statement": "On tire une carte dans un jeu de 32 cartes. On gagne 10 € si c'est un as (4 as), 5 € si c'est un roi (4 rois), et rien sinon. Quelle mise $m$ rend le jeu équitable ($E(\\text{gain net}) = 0$) ?",
      "options": [
        "$m = 1{,}875\\text{ €}$",
        "$m = 2{,}50\\text{ €}$",
        "$m = 1{,}50\\text{ €}$",
        "$m = 3{,}00\\text{ €}$"
      ],
      "correctIndex": 0,
      "answer": "$m = 1{,}875\\text{ €}$",
      "hint1": "L'espérance du gain brut doit être égale à la mise : $m = E(G)$.",
      "hint2": "$E(G) = 10 \\times \\frac{4}{32} + 5 \\times \\frac{4}{32} = \\frac{40 + 20}{32} = \\frac{60}{32} = 1{,}875$.",
      "solution": "Le gain brut moyen est $10 \\times \\frac{1}{8} + 5 \\times \\frac{1}{8} = \\frac{15}{8} = 1{,}875\\text{ €}$. Pour que le jeu soit équitable, la mise doit être égale à l'espérance du gain brut, soit $1{,}875\\text{ €}$."
    }
  ]
};

window.MATHS_WORKSHEETS_1ERE = {
  "1A1": [
    {
      "title": "Fiche Première Spé : Trinôme du second degré",
      "filename": "Fiche_1A1_Second_degre.md",
      "statement": `## Fiche d'entraînement 1A1 : Trinôme du second degré

### Exercice 1 : Équations du second degré (4 points)
Résoudre dans $\\mathbb{R}$ les équations suivantes :
1. $x^2 - 7x + 10 = 0$
2. $2x^2 + 3x + 5 = 0$
3. $4x^2 - 12x + 9 = 0$

### Exercice 2 : Inéquations et signe (4 points)
Dresser le tableau de signes et résoudre l'inéquation :
$$-3x^2 + 5x + 2 \\ge 0$$`,
      "solution": `### Correction Exercice 1
1. $\\Delta = (-7)^2 - 4(1)(10) = 49 - 40 = 9 = 3^2 > 0$. Deux racines : $x_1 = \\frac{7-3}{2} = 2$ et $x_2 = \\frac{7+3}{2} = 5$. $S = \\{2 ; 5\\}$.
2. $\\Delta = 3^2 - 4(2)(5) = 9 - 40 = -31 < 0$. Aucune racine réelle. $S = \\emptyset$.
3. $\\Delta = (-12)^2 - 4(4)(9) = 144 - 144 = 0$. Une racine double : $x_0 = -\\frac{-12}{2(4)} = \\frac{3}{2}$. $S = \\{1{,}5\\}$.

### Correction Exercice 2
Pour $-3x^2 + 5x + 2 = 0$, $\\Delta = 25 - 4(-3)(2) = 25 + 24 = 49 = 7^2$.
Racines : $x_1 = \\frac{-5 - 7}{-6} = 2$ et $x_2 = \\frac{-5 + 7}{-6} = -\\frac{1}{3}$.
Comme $a = -3 < 0$, la parabole est tournée vers le bas. Le trinôme est positif entre les racines.
$S = \\left[-\\frac{1}{3} ; 2\\right]$.`
    }
  ]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_1ERE);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_1ERE);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_1ERE);
