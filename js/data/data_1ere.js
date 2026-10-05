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
      "options": ["$\\Delta = 1$", "$\\Delta = -1$", "$\\Delta = 49$", "$\\Delta = 25$"],
      "correctIndex": 0,
      "answer": "$\\Delta = 1$",
      "hint1": "$\\Delta = b^2 - 4ac$ avec $a=3, b=-5, c=2$.",
      "hint2": "$(-5)^2 - 4(3)(2) = 25 - 24 = 1$.",
      "solution": "$\\Delta = (-5)^2 - 4(3)(2) = 25 - 24 = 1$. Comme $\\Delta > 0$, l'équation admet deux racines réelles distinctes."
    }
  ],
  "1A2": [
    {
      "id": "1A2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Nombre dérivé et tangente",
      "skill": "Calculer un nombre dérivé",
      "statement": "Soit $f(x) = x^2 + 3x - 1$. Quel est le coefficient directeur de la tangente à la courbe de $f$ au point d'abscisse $x = 2$ ?",
      "options": ["$7$", "$9$", "$4$", "$5$"],
      "correctIndex": 0,
      "answer": "$7$",
      "hint1": "Le coefficient directeur de la tangente en $a$ est donné par le nombre dérivé $f'(a)$.",
      "hint2": "$f'(x) = 2x + 3$. Calcule $f'(2)$.",
      "solution": "$f'(x) = 2x + 3$. Pour $x = 2$, on a $f'(2) = 2(2) + 3 = 7$. La tangente au point d'abscisse 2 a donc pour pente 7."
    }
  ],
  "1A3": [
    {
      "id": "1A3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Dérivée d'un quotient",
      "skill": "Appliquer la formule $(u/v)'$",
      "statement": "Déterminer la dérivée de la fonction $f(x) = \\frac{2x - 1}{x + 3}$ sur $]-3 ; +\\infty[$.",
      "options": ["$f'(x) = \\frac{7}{(x+3)^2}$", "$f'(x) = 2$", "$f'(x) = \\frac{-7}{(x+3)^2}$", "$f'(x) = \\frac{5}{(x+3)^2}$"],
      "correctIndex": 0,
      "answer": "$f'(x) = \\frac{7}{(x+3)^2}$",
      "hint1": "Formule : $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$ avec $u(x)=2x-1$ et $v(x)=x+3$.",
      "hint2": "$u'(x)=2$ et $v'(x)=1$. Donc $u'v - uv' = 2(x+3) - 1(2x-1) = 2x+6-2x+1 = 7$.",
      "solution": "$f'(x) = \\frac{2(x+3) - (2x-1)(1)}{(x+3)^2} = \\frac{2x + 6 - 2x + 1}{(x+3)^2} = \\frac{7}{(x+3)^2}$."
    }
  ],
  "1A4": [
    {
      "id": "1A4-1",
      "tier": 1,
      "type": "mcq",
      "title": "Simplification d'exponentielles",
      "skill": "Propriétés algébriques de l'exponentielle",
      "statement": "Simplifier l'expression $A = \\frac{e^3 \\times e^{-1}}{e^4}$.",
      "options": ["$e^{-2}$", "$e^2$", "$e^{-6}$", "$e^0$"],
      "correctIndex": 0,
      "answer": "$e^{-2}$",
      "hint1": "$e^a e^b = e^{a+b}$ et $e^u / e^v = e^{u-v}$.",
      "hint2": "$e^3 e^{-1} = e^2$, puis $e^2 / e^4 = e^{2-4} = e^{-2}$.",
      "solution": "$A = \\frac{e^{3-1}}{e^4} = \\frac{e^2}{e^4} = e^{2-4} = e^{-2}$."
    }
  ],
  "1A5": [
    {
      "id": "1A5-1",
      "tier": 1,
      "type": "mcq",
      "title": "Sens de variation d'une suite",
      "skill": "Étudier le signe de $u_{n+1} - u_n$",
      "statement": "Soit la suite $(u_n)$ définie par $u_n = 3n^2 + 5$ pour tout $n \\in \\mathbb{N}$. Quel est son sens de variation ?",
      "options": ["Strictement croissante", "Strictement décroissante", "Constante", "Non monotone"],
      "correctIndex": 0,
      "answer": "Strictement croissante",
      "hint1": "Calcule la différence $u_{n+1} - u_n$.",
      "hint2": "$u_{n+1} - u_n = [3(n+1)^2+5] - [3n^2+5] = 3(2n+1) = 6n+3 > 0$.",
      "solution": "Pour tout $n \\ge 0$, $u_{n+1} - u_n = 3(n+1)^2 - 3n^2 = 3(2n+1) = 6n + 3 > 0$. La suite est donc strictement croissante."
    }
  ],
  "1A6": [
    {
      "id": "1A6-1",
      "tier": 1,
      "type": "mcq",
      "title": "Somme d'une suite géométrique",
      "skill": "Appliquer la formule de la somme géométrique",
      "statement": "Quelle est la valeur de la somme $S = 1 + 2 + 4 + 8 + \\dots + 2^7$ ?",
      "options": ["$255$", "$127$", "$256$", "$511$"],
      "correctIndex": 0,
      "answer": "$255$",
      "hint1": "C'est la somme des $n+1 = 8$ premiers termes d'une suite géométrique de premier terme 1 et de raison $q = 2$.",
      "hint2": "Formule : $S = \\frac{1 - q^{n+1}}{1 - q} = \\frac{1 - 2^8}{1 - 2} = 2^8 - 1$.",
      "solution": "$S = \\frac{1 - 2^8}{1 - 2} = \\frac{1 - 256}{-1} = 255$."
    }
  ],
  "1G1": [
    {
      "id": "1G1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Valeur trigonométrique remarquable",
      "skill": "Lire sur le cercle trigonométrique",
      "statement": "Quelle est la valeur exacte de $\\cos\\left(\\frac{2\\pi}{3}\\right)$ ?",
      "options": ["$-\\frac{1}{2}$", "$\\frac{1}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{2}$"],
      "correctIndex": 0,
      "answer": "$-\\frac{1}{2}$",
      "hint1": "Remarque que $\\frac{2\\pi}{3} = \\pi - \\frac{\\pi}{3}$.",
      "hint2": "$\\cos(\\pi - x) = -\\cos(x)$. Sachant que $\\cos(\\pi/3) = 1/2$.",
      "solution": "$\\cos\\left(\\frac{2\\pi}{3}\\right) = \\cos\\left(\\pi - \\frac{\\pi}{3}\\right) = -\\cos\\left(\\frac{\\pi}{3}\\right) = -\\frac{1}{2}$."
    }
  ],
  "1G2": [
    {
      "id": "1G2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Produit scalaire analytique",
      "skill": "Calculer $\\vec{u} \\cdot \\vec{v}$ dans un repère orthonormé",
      "statement": "Dans un repère orthonormé, on donne $\\vec{u}(3 ; -2)$ et $\\vec{v}(4 ; 5)$. Que vaut $\\vec{u} \\cdot \\vec{v}$ ?",
      "options": ["$2$", "$22$", "$-2$", "$\\sqrt{13}$"],
      "correctIndex": 0,
      "answer": "$2$",
      "hint1": "Formule analytique : $\\vec{u} \\cdot \\vec{v} = x x' + y y'$.",
      "hint2": "$3 \\times 4 + (-2) \\times 5 = 12 - 10$.",
      "solution": "$\\vec{u} \\cdot \\vec{v} = 3 \\times 4 + (-2) \\times 5 = 12 - 10 = 2$."
    }
  ],
  "1G3": [
    {
      "id": "1G3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Vecteur normal et droite",
      "skill": "Identifier un vecteur normal d'une droite",
      "statement": "Quel est un vecteur normal à la droite $(d)$ d'équation cartésienne $3x - 4y + 7 = 0$ ?",
      "options": ["$\\vec{n}(3 ; -4)$", "$\\vec{n}(4 ; 3)$", "$\\vec{n}(-4 ; 3)$", "$\\vec{n}(3 ; 4)$"],
      "correctIndex": 0,
      "answer": "$\\vec{n}(3 ; -4)$",
      "hint1": "Pour une droite d'équation $ax + by + c = 0$, un vecteur normal est $\\vec{n}(a ; b)$.",
      "hint2": "Ici $a = 3$ et $b = -4$.",
      "solution": "L'équation cartésienne étant $3x - 4y + 7 = 0$, un vecteur normal est directement $\\vec{n}(3 ; -4)$."
    }
  ],
  "1S1": [
    {
      "id": "1S1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Formule des probabilités totales",
      "skill": "Appliquer la formule des probabilités totales",
      "statement": "Soit une partition $\\{A ; \\overline{A}\\}$. Sachant que $P(A) = 0{,}4$, $P_A(B) = 0{,}8$ et $P_{\\overline{A}}(B) = 0{,}3$, que vaut $P(B)$ ?",
      "options": ["$0{,}50$", "$0{,}32$", "$0{,}18$", "$0{,}44$"],
      "correctIndex": 0,
      "answer": "$0{,}50$",
      "hint1": "Formule : $P(B) = P(A) \\times P_A(B) + P(\\overline{A}) \\times P_{\\overline{A}}(B)$.",
      "hint2": "$P(\\overline{A}) = 1 - 0{,}4 = 0{,}6$. Calcule $0{,}4 \\times 0{,}8 + 0{,}6 \\times 0{,}3 = 0{,}32 + 0{,}18$.",
      "solution": "$P(B) = 0{,}4 \\times 0{,}8 + 0{,}6 \\times 0{,}3 = 0{,}32 + 0{,}18 = 0{,}50$."
    }
  ],
  "1S2": [
    {
      "id": "1S2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Espérance d'une variable aléatoire",
      "skill": "Calculer l'espérance $E(X)$",
      "statement": "Soit $X$ prenant les valeurs $-2, 1, 4$ avec probabilités respectives $0{,}2 ; 0{,}5 ; 0{,}3$. Calculer $E(X)$.",
      "options": ["$1{,}3$", "$1{,}0$", "$0{,}9$", "$1{,}8$"],
      "correctIndex": 0,
      "answer": "$1{,}3$",
      "hint1": "Formule de l'espérance : $E(X) = \\sum x_i P(X = x_i)$.",
      "hint2": "$(-2)(0{,}2) + (1)(0{,}5) + (4)(0{,}3) = -0{,}4 + 0{,}5 + 1{,}2$.",
      "solution": "$E(X) = (-2)(0{,}2) + 1(0{,}5) + 4(0{,}3) = -0{,}4 + 0{,}5 + 1{,}2 = 1{,}3$."
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
