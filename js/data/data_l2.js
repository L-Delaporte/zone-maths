/**
 * Données pédagogiques universitaires de Licence 2 de Mathématiques (S3 & S4)
 * Synthétisant les enseignements d'Algèbre linéaire euclidienne, Analyse approfondie et Calcul différentiel
 */

window.MATHS_COURSES_L2 = {
  "L2-RED1": {
    "title": "L2-RED1 : Réduction des endomorphismes I : Valeurs propres et Diagonalisation",
    "domain": "Algèbre Linéaire Avancée",
    "objectives": [
      "Définir les notions de valeur propre, vecteur propre et sous-espace propre d'un endomorphisme.",
      "Calculer le polynôme caractéristique d'une matrice et déterminer ses racines (spectre).",
      "Énoncer et démontrer les critères de diagonalisabilité (multiplicités algébrique et géométrique).",
      "Appliquer la diagonalisation au calcul des puissances de matrices $A^k$ et à la résolution de systèmes récurrents."
    ],
    "keyPoints": [
      {
        "title": "1. Éléments propres : Valeurs propres, Vecteurs propres et Spectre",
        "content": "Soit $E$ un $\\mathbb{K}$-espace vectoriel et $u \\in \\mathcal{L}(E)$ :\n• **Valeur propre** : Un scalaire $\\lambda \\in \\mathbb{K}$ est une valeur propre de $u$ s'il existe un vecteur **non nul** $x \\in E \\setminus \\{0_E\\}$ tel que :\n$$u(x) = \\lambda x$$\n• **Vecteur propre** : Tout vecteur $x \\neq 0_E$ vérifiant $u(x) = \\lambda x$ est un vecteur propre associé à $\\lambda$.\n• **Sous-espace propre** : L'ensemble $E_\\lambda(u) = \\ker(u - \\lambda \\text{Id}_E)$ est un sous-espace vectoriel de $E$ de dimension $\\ge 1$.\n• **Spectre** : L'ensemble des valeurs propres de $u$ est noté $\\text{Sp}(u) = \\{\\lambda \\in \\mathbb{K} \\mid \\ker(u - \\lambda \\text{Id}_E) \\neq \\{0_E\\}\\}$."
      },
      {
        "title": "2. Polynôme caractéristique et multiplicités",
        "content": "Soit $A \\in \\mathcal{M}_n(\\mathbb{K})$ :\n• **Polynôme caractéristique** : $\\chi_A(X) = \\det(X I_n - A)$ (ou $\\det(A - X I_n)$). C'est un polynôme unitaire de degré $n$.\n• **Caractérisation spectrale** : $\\lambda$ est valeur propre de $A$ ssi $\\chi_A(\\lambda) = 0$.\n• **Multiplicité algébrique $m_\\lambda$** : C'est la multiplicité de $\\lambda$ comme racine de $\\chi_A(X)$.\n• **Multiplicité géométrique $d_\\lambda$** : C'est la dimension du sous-espace propre associé : $d_\\lambda = \\dim(E_\\lambda) = n - \\text{rg}(A - \\lambda I_n)$.\n• **Inégalité fondamentale** : Pour toute valeur propre $\\lambda$, on a toujours :\n$$1 \\le d_\\lambda \\le m_\\lambda$$"
      },
      {
        "title": "3. Critères fondamentaux de diagonalisabilité",
        "content": "Un endomorphisme $u \\in \\mathcal{L}(E)$ (avec $\\dim E = n$) est **diagonalisable** si et seulement si l'une des conditions équivalentes suivantes est vérifiée :\n1. $E$ admet une base de vecteurs propres de $u$.\n2. La somme des dimensions des sous-espaces propres est égale à $n$ : $\\sum_{\\lambda \\in \\text{Sp}(u)} \\dim(E_\\lambda) = n$.\n3. Son polynôme caractéristique $\\chi_u(X)$ est **scindé** sur $\\mathbb{K}$, et pour toute valeur propre $\\lambda$, la multiplicité géométrique est égale à la multiplicité algébrique : $\\dim(E_\\lambda) = m_\\lambda$.\n• **Condition suffisante** : Si $\\chi_u(X)$ admet $n$ racines distinctes dans $\\mathbb{K}$, alors $u$ est diagonalisable (toutes les multiplicités valent 1)."
      },
      {
        "title": "4. Puissances de matrices et calcul explicite",
        "content": "Si $A$ est diagonalisable, il existe $P \\in GL_n(\\mathbb{K})$ (matrice dont les colonnes sont les vecteurs propres) et $D = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$ telles que $A = P D P^{-1}$.\n• Pour tout $k \\in \\mathbb{N}$ (et $k \\in \\mathbb{Z}$ si $A$ est inversible) :\n$$A^k = P D^k P^{-1} = P \\begin{pmatrix} \\lambda_1^k & & 0 \\\\ & \\ddots & \\\\ 0 & & \\lambda_n^k \\end{pmatrix} P^{-1}$$\n• Permet d'exprimer explicitement les termes généraux de suites vectorielles récurrentes $X_{k+1} = A X_k$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Diagonaliser une matrice 2x2",
        "example": "Diagonaliser la matrice $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$.",
        "steps": [
          "**Polynôme caractéristique** : $\\chi_A(\\lambda) = \\det(\\lambda I_2 - A) = (\\lambda - 1)^2 - 4 = \\lambda^2 - 2\\lambda - 3 = (\\lambda - 3)(\\lambda + 1)$.",
          "**Valeurs propres** : $\\lambda_1 = 3$ et $\\lambda_2 = -1$. Deux valeurs propres distinctes en dimension 2 : $A$ est diagonalisable.",
          "**Sous-espace $E_3$** : $(A - 3I_2)X = 0 \\iff -2x + 2y = 0 \\iff x = y$. Vecteur propre : $v_1(1; 1)$.",
          "**Sous-espace $E_{-1}$** : $(A + I_2)X = 0 \\iff 2x + 2y = 0 \\iff x = -y$. Vecteur propre : $v_2(1; -1)$.",
          "**Conclusion** : $P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$, $D = \\begin{pmatrix} 3 & 0 \\\\ 0 & -1 \\end{pmatrix}$, et $A = P D P^{-1}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Un vecteur propre ne peut JAMAIS être le vecteur nul $0_E$, par définition !",
      "⚠️ Avoir un polynôme caractéristique scindé ne suffit pas pour diagonaliser : il faut impérativement que $\\dim(E_\\lambda) = m_\\lambda$ pour chaque racine multiple (ex: la matrice $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ n'est pas diagonalisable)."
    ],
    "flashcards": [
      {
        "q": "Quelle condition sur les multiplicités algébrique et géométrique caractérise la diagonalisabilité ?",
        "a": "Le polynôme caractéristique doit être scindé et pour chaque valeur propre, $\\dim(E_\\lambda) = m_\\lambda$."
      },
      {
        "q": "Si une matrice carrée d'ordre n admet n valeurs propres distinctes, est-elle diagonalisable ?",
        "a": "Oui, c'est une condition suffisante immédiate."
      }
    ]
  },
  "L2-PRE": {
    "title": "L2-PRE : Espaces Préhilbertiens et Euclidiens : Orthogonalité et Gram-Schmidt",
    "domain": "Géométrie & Espaces Euclidiens",
    "objectives": [
      "Définir rigoureusement un produit scalaire réel et un espace euclidien.",
      "Énoncer et démontrer l'Inégalité de Cauchy-Schwarz et l'Inégalité triangulaire de Minkowski.",
      "Caractériser le supplémentaire orthogonal $E = F \\oplus F^\\perp$ en dimension finie et la projection orthogonale.",
      "Appliquer le procédé d'orthonormalisation de Gram-Schmidt pour construire des bases orthonormées."
    ],
    "keyPoints": [
      {
        "title": "1. Définition axiomatique du produit scalaire euclidien",
        "content": "Soit $E$ un $\\mathbb{R}$-espace vectoriel. Un **produit scalaire** sur $E$ est une application $\\langle \\cdot, \\cdot \\rangle : E \\times E \\to \\mathbb{R}$ qui est :\n1. **Bilinéaire** : linéaire par rapport à chaque variable.\n2. **Symétrique** : $\\forall x, y \\in E, \\langle x, y \\rangle = \\langle y, x \\rangle$.\n3. **Positive** : $\\forall x \\in E, \\langle x, x \\rangle \\ge 0$.\n4. **Définie** : $\\forall x \\in E, \\langle x, x \\rangle = 0 \\implies x = 0_E$.\n• Un espace vectoriel réel de dimension finie muni d'un produit scalaire est un **espace euclidien**.\n• La **norme euclidienne associée** est définie par $\\|x\\| = \\sqrt{\\langle x, x \\rangle}$."
      },
      {
        "title": "2. Inégalités de Cauchy-Schwarz et de Minkowski",
        "content": "• **Inégalité de Cauchy-Schwarz** : Pour tous vecteurs $x, y \\in E$ :\n$$|\\langle x, y \\rangle| \\le \\|x\\| \\cdot \\|y\\|$$\n  - **Cas d'égalité** : $|\\langle x, y \\rangle| = \\|x\\| \\|y\\| \\iff (x, y)$ est liée (les vecteurs sont colinéaires).\n• **Inégalité triangulaire (Minkowski)** : Pour tous $x, y \\in E$ :\n$$\\|x + y\\| \\le \\|x\\| + \\|y\\|$$\n• **Théorème de Pythagore** : $x \\perp y \\iff \\langle x, y \\rangle = 0 \\iff \\|x + y\\|^2 = \\|x\\|^2 + \\|y\\|^2$."
      },
      {
        "title": "3. Orthogonalité, supplémentaire et projecteur orthogonal",
        "content": "Soit $F$ un sous-espace vectoriel d'un espace euclidien $E$ :\n• **Orthogonal de $F$** : $F^\\perp = \\{x \\in E \\mid \\forall y \\in F, \\langle x, y \\rangle = 0\\}$.\n• **Supplémentaire orthogonal** : Si $F$ est de dimension finie, alors $E = F \\oplus F^\\perp$, et $\\dim(F^\\perp) = \\dim(E) - \\dim(F)$. De plus, $(F^\\perp)^\\perp = F$.\n• **Projection orthogonale** : Si $(e_1, \\dots, e_p)$ est une base **orthonormée** de $F$, la projection orthogonale $p_F(x)$ s'exprime par :\n$$p_F(x) = \\sum_{i=1}^p \\langle x, e_i \\rangle e_i$$\n• **Distance à un sous-espace** : $\\text{dist}(x, F) = \\|x - p_F(x)\\| = \\min_{y \\in F} \\|x - y\\|$."
      },
      {
        "title": "4. Procédé d'orthonormalisation de Gram-Schmidt",
        "content": "À partir d'une base $(v_1, \\dots, v_n)$ d'un espace euclidien, on construit une base orthonormée $(e_1, \\dots, e_n)$ vérifiant $\\text{Vect}(e_1, \\dots, e_k) = \\text{Vect}(v_1, \\dots, v_k)$ par récurrence :\n1. $u_1 = v_1$, puis $e_1 = \\frac{u_1}{\\|u_1\\|}$.\n2. Pour $k \\ge 2$ :\n$$u_k = v_k - \\sum_{i=1}^{k-1} \\langle v_k, e_i \\rangle e_i, \\qquad e_k = \\frac{u_k}{\\|u_k\\|}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la projection orthogonale sur un sous-espace",
        "example": "Soit $F$ le plan de $\\mathbb{R}^3$ d'équation $x + 2y - z = 0$. Trouver la distance de $A(1; 1; 1)$ à $F$.",
        "steps": [
          "**Vecteur normal** : $\\vec{n} = (1, 2, -1)$ est orthogonal à $F$. Sa norme est $\\|\\vec{n}\\| = \\sqrt{1^2 + 2^2 + (-1)^2} = \\sqrt{6}$.",
          "**Vecteur unitaire orthogonal** : $\\vec{u} = \\frac{\\vec{n}}{\\sqrt{6}}$.",
          "**Projection sur la droite normale $F^\\perp$** : $p_{F^\\perp}(A) = \\langle A, \\vec{u} \\rangle \\vec{u} = \\frac{1(1) + 2(1) - 1(1)}{\\sqrt{6}} \\vec{u} = \\frac{2}{\\sqrt{6}} \\vec{u}$.",
          "**Distance** : $\\text{dist}(A, F) = \\|p_{F^\\perp}(A)\\| = \\frac{2}{\\sqrt{6}} = \\frac{\\sqrt{6}}{3}$."
        ]
      }
    ],
    "traps": [
      "⚠️ La formule de projection $p_F(x) = \\sum \\langle x, e_i \\rangle e_i$ n'est valable QUE si la base $(e_i)$ est **orthonormée** (normes égales à 1) !",
      "⚠️ Dans un espace préhilbertien de dimension infinie, on a seulement $F \\cap F^\\perp = \\{0\\}$, mais $F + F^\\perp$ n'est pas nécessairement égal à $E$ tout entier si $F$ n'est pas complet/fermé."
    ],
    "flashcards": [
      {
        "q": "Énoncer l'Inégalité de Cauchy-Schwarz et son cas d'égalité.",
        "a": "$|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$, avec égalité ssi $(x, y)$ est une famille liée."
      },
      {
        "q": "Quelle est l'expression de la projection orthogonale de x sur F muni d'une base orthonormée (e1, ..., ep) ?",
        "a": "$p_F(x) = \\sum_{i=1}^p \\langle x, e_i \\rangle e_i$."
      }
    ]
  },
  "L2-SER": {
    "title": "L2-SER : Séries numériques réelles et complexes",
    "domain": "Analyse Réelle & Complexe",
    "objectives": [
      "Définir la convergence d'une série numérique à l'aide de la suite de ses sommes partielles.",
      "Maîtriser les théorèmes de comparaison pour les séries à termes positifs (inégalités, équivalents, comparaison intégrale).",
      "Énoncer les critères de convergence de Riemann, d'Alembert et de Cauchy.",
      "Définir la convergence absolue et appliquer le Critère Spécial des Séries Alternées (CSSA de Leibniz)."
    ],
    "keyPoints": [
      {
        "title": "1. Définition, sommes partielles et divergence grossière",
        "content": "Soit $(u_n)_{n \\in \\mathbb{N}}$ une suite dans $\\mathbb{K}$ ($\\mathbb{R}$ ou $\\mathbb{C}$) :\n• La **série $\\sum u_n$ converge** si la suite des sommes partielles $S_n = \\sum_{k=0}^n u_k$ admet une limite finie $S \\in \\mathbb{K}$ quand $n \\to +\\infty$. Dans ce cas, la somme est notée $\\sum_{n=0}^{+\\infty} u_n = S$.\n• **Condition nécessaire (Divergence grossière)** :\n$$\\sum u_n \\text{ converge} \\implies \\lim_{n \\to +\\infty} u_n = 0$$\nSi $u_n \\not\\to 0$, la série diverge grossièrement.\n• **Reste d'une série convergente** : $R_n = \\sum_{k=n+1}^{+\\infty} u_k = S - S_n$, avec $\\lim_{n \\to +\\infty} R_n = 0$."
      },
      {
        "title": "2. Séries à termes positifs et théorèmes de comparaison",
        "content": "Pour une série à termes réels positifs ($u_n \\ge 0$) :\n• La suite des sommes partielles $(S_n)$ est croissante : elle converge ssi elle est **majorée**.\n• **Théorème de comparaison par inégalité** : Si $0 \\le u_n \\le v_n$ pour tout $n \\ge n_0$ :\n  - Si $\\sum v_n$ converge, alors $\\sum u_n$ converge.\n  - Si $\\sum u_n$ diverge, alors $\\sum v_n$ diverge.\n• **Théorème de comparaison par équivalence** : Si $u_n, v_n > 0$ et $u_n \\sim v_n$, alors $\\sum u_n$ et $\\sum v_n$ sont de **même nature**."
      },
      {
        "title": "3. Séries de référence et règles classiques",
        "content": "• **Série géométrique** : $\\sum q^n$ converge ssi $|q| < 1$, de somme $\\frac{1}{1 - q}$.\n• **Série de Riemann** : $\\sum_{n=1}^{+\\infty} \\frac{1}{n^\\alpha}$ converge ssi $\\alpha > 1$.\n• **Règle de d'Alembert** : Si $u_n > 0$ et $\\lim_{n \\to +\\infty} \\frac{u_{n+1}}{u_n} = l$ :\n  - Si $l < 1$, $\\sum u_n$ converge.\n  - Si $l > 1$, $\\sum u_n$ diverge grossièrement.\n  - Si $l = 1$, le test est **inconcluant** (recourir à un développement asymptotique ou Riemann)."
      },
      {
        "title": "4. Séries absolument convergentes et Séries alternées",
        "content": "• **Convergence absolue** : $\\sum u_n$ est absolument convergente si $\\sum |u_n|$ converge. Par complétude de $\\mathbb{K}$, toute série absolument convergente est convergente, et $\\left|\\sum_{n=0}^{+\\infty} u_n\\right| \\le \\sum_{n=0}^{+\\infty} |u_n|$.\n• **Critère Spécial des Séries Alternées (CSSA de Leibniz)** :\nSoit $\\sum (-1)^n a_n$ avec $a_n \\ge 0$. Si la suite $(a_n)$ est **décroissante** et $\\lim a_n = 0$, alors :\n1. La série $\\sum (-1)^n a_n$ converge.\n2. Le reste est majoré par la valeur absolue du premier terme négligé :\n$$|R_n| = \\left|\\sum_{k=n+1}^{+\\infty} (-1)^k a_k\\right| \\le a_{n+1}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Appliquer la règle de d'Alembert",
        "example": "Déterminer la nature de la série $\\sum_{n=1}^{+\\infty} \\frac{3^n}{n!}$.",
        "steps": [
          "**Quotient** : $\\frac{u_{n+1}}{u_n} = \\frac{3^{n+1}}{(n+1)!} \\times \\frac{n!}{3^n} = \\frac{3}{n+1}$.",
          "**Limite** : $\\lim_{n \\to +\\infty} \\frac{3}{n+1} = 0$.",
          "**Conclusion** : Comme le quotient tend vers $0 < 1$, d'après la règle de d'Alembert, la série converge (vers $e^3 - 1$)."
        ]
      }
    ],
    "traps": [
      "⚠️ $u_n \\to 0$ est une condition **nécessaire mais non suffisante** : la série harmonique $\\sum \\frac{1}{n}$ a son terme général qui tend vers 0, mais elle diverge !",
      "⚠️ On ne peut utiliser le critère des équivalents QUE pour des séries dont le terme général garde un **signe constant** au voisinage de $+\\infty$."
    ],
    "flashcards": [
      {
        "q": "Pour quelle condition sur l'exposant alpha la série de Riemann sum 1/n^alpha converge-t-elle ?",
        "a": "Elle converge si et seulement si $\\alpha > 1$."
      },
      {
        "q": "Quelle majoration fondamentale donne le CSSA de Leibniz sur le reste R_n d'une série alternée ?",
        "a": "$|R_n| \\le a_{n+1}$ (le reste est majoré en valeur absolue par le premier terme négligé)."
      }
    ]
  },
  "L2-CAL": {
    "title": "L2-CAL : Calcul différentiel à plusieurs variables, gradient et extremums",
    "domain": "Calcul Différentiel",
    "objectives": [
      "Définir la différentiabilité au sens de Fréchet pour une fonction de plusieurs variables.",
      "Calculer le vecteur gradient et la matrice jacobienne.",
      "Énoncer et appliquer le Théorème de Schwarz sur la symétrie des dérivées partielles secondes.",
      "Déterminer et classifier les points critiques d'une fonction à l'aide de la matrice hessienne."
    ],
    "keyPoints": [
      {
        "title": "1. Dérivées partielles, différentielle et Gradient",
        "content": "Soit $U$ un ouvert de $\\mathbb{R}^n$ et $f : U \\to \\mathbb{R}$ :\n• **Dérivée partielle** selon la $i$-ème coordonnée en $a \\in U$ :\n$$\\frac{\\partial f}{\\partial x_i}(a) = \\lim_{t \\to 0} \\frac{f(a + t e_i) - f(a)}{t}$$\n• **Différentiabilité (Fréchet)** : $f$ est différentiable en $a$ s'il existe une application linéaire $df_a \\in \\mathcal{L}(\\mathbb{R}^n, \\mathbb{R})$ telle que :\n$$f(a + h) = f(a) + df_a(h) + o(\\|h\\|)$$\n• **Gradient** : Le gradient $\\nabla f(a)$ est le vecteur de $\\mathbb{R}^n$ représentant $df_a$ pour le produit scalaire standard : $df_a(h) = \\langle \\nabla f(a), h \\rangle = \\sum_{i=1}^n \\frac{\\partial f}{\\partial x_i}(a) h_i$.\n• **Classe $\\mathcal{C}^1$** : Si toutes les dérivées partielles existent et sont continues sur $U$, alors $f$ est différentiable sur $U$."
      },
      {
        "title": "2. Théorème de Schwarz et dérivées d'ordre supérieur",
        "content": "• **Théorème de Schwarz (Symétrie des dérivées croisées)** : Si $f : U \\to \\mathbb{R}$ est de **classe $\\mathcal{C}^2$** sur un ouvert $U$, alors pour tous $i, j \\in \\{1, \\dots, n\\}$ :\n$$\\frac{\\partial^2 f}{\\partial x_i \\partial x_j} = \\frac{\\partial^2 f}{\\partial x_j \\partial x_i}$$\n• L'ordre de dérivation par rapport aux variables n'a donc pas d'importance."
      },
      {
        "title": "3. Matrice hessienne et formule de Taylor à l'ordre 2",
        "content": "Pour $f \\in \\mathcal{C}^2(U, \\mathbb{R})$ et $a \\in U$, la **matrice hessienne** est la matrice symétrique $H_f(a) \\in \\mathcal{M}_n(\\mathbb{R})$ définie par :\n$$H_f(a) = \\left( \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}(a) \\right)_{1 \\le i, j \\le n}$$\n• **Formule de Taylor-Young à l'ordre 2** :\n$$f(a + h) = f(a) + \\nabla f(a)^T h + \\frac{1}{2} h^T H_f(a) h + o(\\|h\\|^2)$$"
      },
      {
        "title": "4. Classification des extremums locaux",
        "content": "• **Condition nécessaire du premier ordre** : Si $f$ admet un extremum local en $a \\in U$ ouvert, alors $a$ est un **point critique** :\n$$\\nabla f(a) = \\vec{0}$$\n• **Condition suffisante du second ordre** (via les valeurs propres de $H_f(a)$) :\n  - Si toutes les valeurs propres de $H_f(a)$ sont **strictement positives** : $a$ est un **minimum local strict**.\n  - Si toutes les valeurs propres sont **strictement négatives** : $a$ est un **maximum local strict**.\n  - Si $H_f(a)$ admet des valeurs propres de **signes opposés** : $a$ est un **point col (selle)** (pas d'extremum).\n• **En dimension 2 ($n = 2$)** : En posant $r = \\frac{\\partial^2 f}{\\partial x^2}$, $s = \\frac{\\partial^2 f}{\\partial x \\partial y}$, $t = \\frac{\\partial^2 f}{\\partial y^2}$, le déterminant hessien vaut $\\Delta = rt - s^2$ :\n  - $\\Delta > 0$ et $r > 0 \\implies$ minimum local.\n  - $\\Delta > 0$ et $r < 0 \\implies$ maximum local.\n  - $\\Delta < 0 \\implies$ point selle."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver et classifier les points critiques en dimension 2",
        "example": "Classifier les points critiques de $f(x, y) = x^3 + y^3 - 3xy$.",
        "steps": [
          "**Gradient** : $\\begin{cases} \\frac{\\partial f}{\\partial x} = 3x^2 - 3y = 0 \\\\ \\frac{\\partial f}{\\partial y} = 3y^2 - 3x = 0 \\end{cases} \\implies y = x^2$ et $x^4 - x = 0 \\implies x(x^3 - 1) = 0$.",
          "**Points critiques** : $(0, 0)$ et $(1, 1)$.",
          "**Dérivées secondes** : $r = 6x$, $s = -3$, $t = 6y$. $\\Delta = rt - s^2 = 36xy - 9$.",
          "**En $(0, 0)$** : $\\Delta = -9 < 0$. C'est un **point selle**.",
          "**En $(1, 1)$** : $\\Delta = 36(1) - 9 = 27 > 0$ et $r = 6 > 0$. C'est un **minimum local strict** ($f(1, 1) = -1$)."
        ]
      }
    ],
    "traps": [
      "⚠️ L'existence des dérivées partielles n'implique PAS la continuité de $f$ (il faut que les dérivées partielles soient continues, c'est-à-dire $\\mathcal{C}^1$) !",
      "⚠️ Si $\\det H_f(a) = 0$ (ou valeur propre nulle), le test du second ordre est indécis : il faut pousser l'étude locale à un ordre supérieur."
    ],
    "flashcards": [
      {
        "q": "Que dit le théorème de Schwarz sur les dérivées partielles secondes d'une fonction C^2 ?",
        "a": "Elles sont symétriques : $\\frac{\\partial^2 f}{\\partial x_i \\partial x_j} = \\frac{\\partial^2 f}{\\partial x_j \\partial x_i}$."
      },
      {
        "q": "Quelle condition sur les valeurs propres de la matrice hessienne garantit un minimum local strict en un point critique ?",
        "a": "Toutes ses valeurs propres doivent être strictement positives (matrice définie positive)."
      }
    ]
  },
  "L2-DET": {
    "title": "L2-DET : Déterminants, formes multilinéaires alternées et comatrice",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Définir le déterminant comme l'unique forme multilinéaire alternée valant 1 sur la base canonique.",
      "Calculer des déterminants par développement selon une ligne/colonne (Laplace) et opérations élémentaires.",
      "Manipuler la comatrice et la formule d'inversion explicite $A \\cdot (\\text{Com} A)^T = \\det(A) I_n$.",
      "Résoudre des systèmes linéaires à l'aide des formules de Cramer."
    ],
    "keyPoints": [
      {
        "title": "1. Définition axiomatique du déterminant",
        "content": "Soit $E$ un $\\mathbb{K}$-espace vectoriel de dimension $n$ muni d'une base $\\mathcal{B}$ :\n• L'espace des formes $n$-linéaires alternées sur $E$ est de dimension 1.\n• Le **déterminant dans la base $\\mathcal{B}$** est l'unique forme $n$-linéaire alternée $\\det_\\mathcal{B}$ vérifiant $\\det_\\mathcal{B}(\\mathcal{B}) = 1$.\n• **Formule de Leibniz** : Pour $A = (a_{ij}) \\in \\mathcal{M}_n(\\mathbb{K})$ :\n$$\\det(A) = \\sum_{\\sigma \\in \\mathcal{S}_n} \\varepsilon(\\sigma) \\prod_{i=1}^n a_{\\sigma(i), i}$$\noù $\\mathcal{S}_n$ est le groupe symétrique et $\\varepsilon(\\sigma)$ la signature de la permutation."
      },
      {
        "title": "2. Propriétés fondamentales du déterminant",
        "content": "• **Multiplicativité** : Pour toutes matrices $A, B \\in \\mathcal{M}_n(\\mathbb{K})$, $\\det(AB) = \\det(A) \\cdot \\det(B)$.\n• **Transposition** : $\\det(A^T) = \\det(A)$.\n• **Homogénéité** : Pour tout $\\lambda \\in \\mathbb{K}$, $\\det(\\lambda A) = \\lambda^n \\det(A)$.\n• **Caractérisation de l'inversibilité** : $A$ est inversible ssi $\\det(A) \\neq 0$, et dans ce cas $\\det(A^{-1}) = \\frac{1}{\\det(A)}$.\n• Une famille de $n$ vecteurs est une base ssi son déterminant est non nul."
      },
      {
        "title": "3. Développement de Laplace et Comatrice",
        "content": "• **Développement selon la $i$-ème ligne** :\n$$\\det(A) = \\sum_{j=1}^n (-1)^{i+j} a_{ij} \\det(A_{ij})$$\noù $A_{ij} \\in \\mathcal{M}_{n-1}(\\mathbb{K})$ est la matrice obtenue en supprimant la ligne $i$ et la colonne $j$.\n• **Comatrice** : C'est la matrice des cofacteurs : $\\text{Com}(A) = \\left((-1)^{i+j} \\det(A_{ij})\\right)_{1 \\le i, j \\le n}$.\n• **Formule de la comatrice et inversion** :\n$$A \\cdot (\\text{Com}(A))^T = (\\text{Com}(A))^T \\cdot A = \\det(A) I_n$$\nSi $\\det(A) \\neq 0$ : $A^{-1} = \\frac{1}{\\det(A)} (\\text{Com}(A))^T$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un déterminant 3x3 par opérations élémentaires",
        "example": "Calculer $\\det(A)$ pour $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 3 & 7 & 11 \\end{pmatrix}$.",
        "steps": [
          "**Élimination ligne 2** : $L_2 \\leftarrow L_2 - 2L_1$ : $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 3 & 7 & 11 \\end{pmatrix}$.",
          "**Élimination ligne 3** : $L_3 \\leftarrow L_3 - 3L_1$ : $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 1 & 2 \\end{pmatrix}$.",
          "**Élimination ligne 3 finale** : $L_3 \\leftarrow L_3 - L_2$ : $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$.",
          "**Conclusion** : Matrice triangulaire supérieure : le déterminant est le produit des éléments diagonaux : $1 \\times 1 \\times 1 = 1$."
        ]
      }
    ],
    "traps": [
      "⚠️ $\\det(\\lambda A) = \\lambda^n \\det(A)$ et NON $\\lambda \\det(A)$ !",
      "⚠️ Dans la formule d'inversion par la comatrice, il faut obligatoirement prendre la **transposée** de la comatrice $(\\text{Com}(A))^T$."
    ],
    "flashcards": [
      {
        "q": "Que vaut det(lambda A) pour une matrice carrée d'ordre n ?",
        "a": "$\\det(\\lambda A) = \\lambda^n \\det(A)$."
      },
      {
        "q": "Quelle formule relie l'inverse d'une matrice à sa comatrice ?",
        "a": "$A^{-1} = \\frac{1}{\\det(A)} (\\text{Com}(A))^T$."
      }
    ]
  },
  "L2-RED2": {
    "title": "L2-RED2 : Réduction des endomorphismes II : Trigonalisation et Cayley-Hamilton",
    "domain": "Algèbre Linéaire Avancée",
    "objectives": [
      "Énoncer et appliquer le critère de trigonalisabilité (polynôme scindé).",
      "Définir le polynôme minimal $\\pi_u$ d'un endomorphisme et ses liens avec les valeurs propres.",
      "Énoncer et démontrer le Théorème de Cayley-Hamilton $\\chi_u(u) = 0$.",
      "Énoncer le Lemme des noyaux et la Décomposition de Dunford $u = d + n$."
    ],
    "keyPoints": [
      {
        "title": "1. Trigonalisation des endomorphismes",
        "content": "• Un endomorphisme $u \\in \\mathcal{L}(E)$ est **trigonalisable** s'il existe une base $\\mathcal{B}$ de $E$ dans laquelle sa matrice est triangulaire supérieure.\n• **Théorème de trigonalisabilité** : $u$ est trigonalisable si et seulement si son polynôme caractéristique $\\chi_u(X)$ est **scindé** sur $\\mathbb{K}$.\n• **Conséquence sur $\\mathbb{C}$** : Tout endomorphisme d'un espace vectoriel complexe de dimension finie est trigonalisable (théorème de d'Alembert-Gauss)."
      },
      {
        "title": "2. Polynôme minimal et lemme des noyaux",
        "content": "Soit $E$ de dimension finie et $u \\in \\mathcal{L}(E)$ :\n• **Polynôme annulateur** : Un polynôme $P \\in \\mathbb{K}[X]$ est annulateur de $u$ si $P(u) = 0$.\n• **Polynôme minimal $\\pi_u$** : C'est l'unique polynôme unitaire générateur de l'idéal des polynômes annulateurs de $u$.\n  - Les racines de $\\pi_u$ sont **exactement les valeurs propres** de $u$.\n  - $u$ est **diagonalisable ssi $\\pi_u$ est scindé à racines simples** sur $\\mathbb{K}$.\n• **Lemme des noyaux** : Si $P_1, \\dots, P_k$ sont des polynômes deux à deux premiers entre eux, et $P = P_1 \\dots P_k$, alors :\n$$\\ker(P(u)) = \\bigoplus_{i=1}^k \\ker(P_i(u))$$"
      },
      {
        "title": "3. Théorème de Cayley-Hamilton et Décomposition de Dunford",
        "content": "• **Théorème de Cayley-Hamilton** : Tout endomorphisme annule son propre polynôme caractéristique :\n$$\\chi_u(u) = 0$$\nEn particulier, le polynôme minimal $\\pi_u$ divise le polynôme caractéristique $\\chi_u$.\n• **Décomposition de Dunford** : Si $\\chi_u$ est scindé sur $\\mathbb{K}$, il existe un unique couple $(d, n) \\in \\mathcal{L}(E)^2$ tel que :\n1. $u = d + n$\n2. $d$ est diagonalisable et $n$ est nilpotent ($n^p = 0$).\n3. $d$ et $n$ commutent : $d \\circ n = n \\circ d$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer les puissances de matrices par Cayley-Hamilton",
        "example": "Calculer $A^n$ pour $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$.",
        "steps": [
          "**Polynôme caractéristique** : $\\chi_A(X) = (X - 2)^2 = X^2 - 4X + 4$.",
          "**Cayley-Hamilton** : $(A - 2I_2)^2 = 0$. Donc $N = A - 2I_2 = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ est nilpotente d'ordre 2 ($N^2 = 0$).",
          "**Binôme de Newton** : Comme $2I_2$ et $N$ commutent, $A^n = (2I_2 + N)^n = 2^n I_2 + n 2^{n-1} N + 0$.",
          "**Conclusion** : $A^n = \\begin{pmatrix} 2^n & n 2^{n-1} \\\\ 0 & 2^n \\end{pmatrix}$."
        ]
      }
    ],
    "traps": [
      "⚠️ La « preuve » $\\chi_A(A) = \\det(A - A) = \\det(0) = 0$ est TOTALEMENT FAUSSE (on substitue une matrice dans un polynôme, on ne prend pas le déterminant de $A - A$) !",
      "⚠️ Dans la décomposition de Dunford, la condition de commutation $d \\circ n = n \\circ d$ est indispensable pour son unicité."
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème de Cayley-Hamilton.",
        "a": "Tout endomorphisme en dimension finie annule son polynôme caractéristique : $\\chi_u(u) = 0$."
      },
      {
        "q": "À quelle condition sur son polynôme minimal un endomorphisme est-il diagonalisable ?",
        "a": "Si et seulement si son polynôme minimal $\\pi_u$ est scindé à racines simples sur $\\mathbb{K}$."
      }
    ]
  },
  "L2-DUA": {
    "title": "L2-DUA : Dualité en dimension finie, base duale et orthogonalité",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Définir l'espace dual $E^* = \\mathcal{L}(E, \\mathbb{K})$ et les formes linéaires.",
      "Construire la base duale $\\mathcal{B}^* = (e_1^*, \\dots, e_n^*)$ associée à une base $\\mathcal{B}$ de $E$.",
      "Établir l'isomorphisme canonique entre $E$ et son bidual $E^{**}$.",
      "Définir l'orthogonalité duale et la transposée d'une application linéaire $u^* \\in \\mathcal{L}(F^*, E^*)$."
    ],
    "keyPoints": [
      {
        "title": "1. Espace dual et Formes linéaires",
        "content": "Soit $E$ un $\\mathbb{K}$-espace vectoriel :\n• Une **forme linéaire** sur $E$ est une application linéaire $\\varphi : E \\to \\mathbb{K}$.\n• L'**espace dual** de $E$ est $E^* = \\mathcal{L}(E, \\mathbb{K})$.\n• Si $\\dim(E) = n < +\\infty$, alors $\\dim(E^*) = \\dim(E) = n$.\n• **Hyperplans** : Un sous-espace vectoriel $H \\subset E$ est un hyperplan ssi il existe une forme linéaire non nulle $\\varphi \\in E^*$ telle que $H = \\ker(\\varphi)$. Deux formes définissent le même hyperplan ssi elles sont colinéaires."
      },
      {
        "title": "2. Base duale et coordonnées",
        "content": "Soit $\\mathcal{B} = (e_1, \\dots, e_n)$ une base de $E$ :\n• Il existe une unique base de $E^*$, notée $\\mathcal{B}^* = (e_1^*, \\dots, e_n^*)$ et appelée **base duale**, vérifiant :\n$$e_i^*(e_j) = \\delta_{ij} = \\begin{cases} 1 & \\text{si } i = j \\\\ 0 & \\text{si } i \\neq j \\end{cases}$$\n• **Décomposition selon la base duale** : Tout $x \\in E$ se décompose en $x = \\sum_{i=1}^n e_i^*(x) e_i$ (la $i$-ème forme duale donne la $i$-ème coordonnée de $x$).\n• Toute forme linéaire $\\varphi \\in E^*$ se décompose en $\\varphi = \\sum_{i=1}^n \\varphi(e_i) e_i^*$."
      },
      {
        "title": "3. Orthogonalité au sens de la dualité et Bidual",
        "content": "• **Orthogonal d'un sous-espace** : Pour $F \\subset E$, son orthogonal dans $E^*$ est le sous-espace :\n$$F^\\circ = F^\\perp = \\{\\varphi \\in E^* \\mid \\forall x \\in F, \\varphi(x) = 0\\}$$\n• **Dimension de l'orthogonal** : Si $\\dim(E) < +\\infty$, $\\dim(F) + \\dim(F^\\circ) = \\dim(E)$.\n• **Bidual et isomorphisme canonique** : L'application $i : E \\to E^{**}, x \\mapsto \\text{ev}_x$ (où $\\text{ev}_x(\\varphi) = \\varphi(x)$) est un isomorphisme canonique en dimension finie."
      },
      {
        "title": "4. Transposée d'une application linéaire",
        "content": "Soit $u \\in \\mathcal{L}(E, F)$. L'**application transposée** de $u$ est l'application $u^* : F^* \\to E^*$ définie par :\n$$\\forall \\psi \\in F^*, \\quad u^*(\\psi) = \\psi \\circ u$$\n• Si $\\text{Mat}_{\\mathcal{B}, \\mathcal{C}}(u) = M$, alors $\\text{Mat}_{\\mathcal{C}^*, \\mathcal{B}^*}(u^*) = M^T$.\n• **Propriétés orthogonales** : $\\ker(u^*) = (\\text{Im} u)^\\circ$ et $\\text{Im}(u^*) = (\\ker u)^\\circ$.\n• En particulier, $\\text{rg}(u^*) = \\text{rg}(u)$ (le rang des lignes d'une matrice égale le rang des colonnes)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer la base duale d'une base de R^2",
        "example": "Trouver la base duale de $\\mathcal{B} = (e_1, e_2)$ avec $e_1 = (1, 1)$ et $e_2 = (1, -1)$.",
        "steps": [
          "**Formes coordonnées** : On cherche $e_1^*(x, y) = ax + by$ et $e_2^*(x, y) = cx + dy$.",
          "**Conditions pour $e_1^*$** : $e_1^*(e_1) = a + b = 1$ et $e_1^*(e_2) = a - b = 0 \\implies a = b = 1/2$. Donc $e_1^*(x, y) = \\frac{x + y}{2}$.",
          "**Conditions pour $e_2^*$** : $e_2^*(e_1) = c + d = 0$ et $e_2^*(e_2) = c - d = 1 \\implies c = 1/2, d = -1/2$. Donc $e_2^*(x, y) = \\frac{x - y}{2}$."
        ]
      }
    ],
    "traps": [
      "⚠️ $E$ et $E^*$ sont isomorphes en dimension finie car ils ont la même dimension, mais il n'existe **aucun isomorphisme canonique** entre $E$ et $E^*$ sans choix de base ou de produit scalaire !",
      "⚠️ L'application transposée $u^*$ va de $F^*$ dans $E^*$ (et non de $E^*$ dans $F^*$) !"
    ],
    "flashcards": [
      {
        "q": "Quelle relation de dimension lie un sous-espace F et son orthogonal dual F^circ en dimension finie ?",
        "a": "$\\dim(F) + \\dim(F^\\circ) = \\dim(E)$."
      },
      {
        "q": "Quelle matrice représente l'application transposée u* dans les bases duales ?",
        "a": "La transposée de la matrice de $u$ : $M^T$."
      }
    ]
  },
  "L2-SYM": {
    "title": "L2-SYM : Endomorphismes symétriques, groupe orthogonal et Théorème Spectral",
    "domain": "Géométrie & Espaces Euclidiens",
    "objectives": [
      "Définir l'adjoint d'un endomorphisme dans un espace euclidien.",
      "Caractériser les endomorphismes symétriques (auto-adjoints) et antisymétriques.",
      "Énoncer et démontrer le Théorème Spectral fondamental.",
      "Étudier le groupe orthogonal $O(E)$ et caractériser les isométries vectorielles."
    ],
    "keyPoints": [
      {
        "title": "1. Adjoint d'un endomorphisme euclidien",
        "content": "Soit $E$ un espace vectoriel euclidien :\n• Pour tout $u \\in \\mathcal{L}(E)$, il existe un unique endomorphisme noté $u^* \\in \\mathcal{L}(E)$, appelé **adjoint** de $u$, vérifiant :\n$$\\forall x, y \\in E, \\quad \\langle u(x), y \\rangle = \\langle x, u^*(y) \\rangle$$\n• Dans toute base orthonormée $\\mathcal{B}$, la matrice de $u^*$ est la transposée de la matrice de $u$ : $\\text{Mat}_\\mathcal{B}(u^*) = (\\text{Mat}_\\mathcal{B}(u))^T$."
      },
      {
        "title": "2. Endomorphismes symétriques (auto-adjoints)",
        "content": "• Un endomorphisme $u$ est dit **symétrique (ou auto-adjoint)** si $u^* = u$, soit :\n$$\\forall x, y \\in E, \\quad \\langle u(x), y \\rangle = \\langle x, u(y) \\rangle$$\n• **Propriétés spectrales fondamentales** :\n  1. Toutes les valeurs propres de $u$ sont **réelles** (même si on considère $u$ sur $\\mathbb{C}$).\n  2. Les sous-espaces propres associés à des valeurs propres distinctes sont **deux à deux orthogonaux** : $\\lambda \\neq \\mu \\implies E_\\lambda \\perp E_\\mu$."
      },
      {
        "title": "3. Le Théorème Spectral",
        "content": "• **Théorème Spectral (Théorème fondamental des endomorphismes symétriques)** :\nTout endomorphisme symétrique d'un espace euclidien $E$ est **diagonalisable dans une base orthonormée** de vecteurs propres.\n• **Version matricielle** : Pour toute matrice symétrique réelle $A \\in \\mathcal{S}_n(\\mathbb{R})$, il existe une matrice orthogonale $P \\in O_n(\\mathbb{R})$ ($P^T P = I_n$) et une matrice diagonale réelle $D$ telles que :\n$$A = P D P^T = P D P^{-1}$$"
      },
      {
        "title": "4. Le Groupe orthogonal et les isométries vectorielles",
        "content": "• Un endomorphisme $u \\in \\mathcal{L}(E)$ est une **isométrie vectorielle (ou automorphisme orthogonal)** s'il conserve le produit scalaire :\n$$\\forall x, y \\in E, \\quad \\langle u(x), u(y) \\rangle = \\langle x, y \\rangle \\iff \\|u(x)\\| = \\|x\\| \\iff u^* \\circ u = \\text{Id}_E$$\n• L'ensemble des isométries forme le **groupe orthogonal** $O(E)$, isomorphe à $O_n(\\mathbb{R}) = \\{M \\in \\mathcal{M}_n(\\mathbb{R}) \\mid M^T M = I_n\\}$.\n• Si $\\det(u) = 1$, $u$ est une **rotation** (isométrie directe, groupe spécial orthogonal $SO(E)$) ; si $\\det(u) = -1$, c'est une isométrie indirecte (ex: réflexion par rapport à un hyperplan)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Diagonaliser orthogonalement une matrice symétrique",
        "example": "Diagonaliser dans une base orthonormée $A = \\begin{pmatrix} 0 & 2 \\\\ 2 & 3 \\end{pmatrix}$.",
        "steps": [
          "**Polynôme caractéristique** : $\\chi_A(\\lambda) = \\lambda(\\lambda - 3) - 4 = \\lambda^2 - 3\\lambda - 4 = (\\lambda - 4)(\\lambda + 1)$.",
          "**Valeurs propres** : $\\lambda_1 = 4$ et $\\lambda_2 = -1$.",
          "**Sous-espace $E_4$** : $\\begin{pmatrix} -4 & 2 \\\\ 2 & -1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = 0 \\implies 2x - y = 0$. Vecteur unitaire : $u_1 = \\frac{1}{\\sqrt{5}}(1, 2)$.",
          "**Sous-espace $E_{-1}$** : $\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = 0 \\implies x + 2y = 0$. Vecteur unitaire : $u_2 = \\frac{1}{\\sqrt{5}}(-2, 1)$.",
          "**Conclusion** : $P = \\frac{1}{\\sqrt{5}}\\begin{pmatrix} 1 & -2 \\\\ 2 & 1 \\end{pmatrix} \\in O_2(\\mathbb{R})$, $D = \\begin{pmatrix} 4 & 0 \\\\ 0 & -1 \\end{pmatrix}$, et $A = P D P^T$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour que le Théorème Spectral s'applique, la matrice doit être symétrique **réelle** : une matrice symétrique complexe n'est pas forcément diagonalisable !",
      "⚠️ Les colonnes de la matrice de passage $P$ doivent impérativement être **normées à 1** pour que $P$ soit orthogonale ($P^{-1} = P^T$)."
    ],
    "flashcards": [
      {
        "q": "Que dit le Théorème Spectral pour une matrice symétrique réelle ?",
        "a": "Elle est diagonalisable dans une base orthonormée par une matrice orthogonale : $A = P D P^T$."
      },
      {
        "q": "Quelle propriété d'orthogonalité vérifient les sous-espaces propres d'un endomorphisme symétrique ?",
        "a": "Ils sont orthogonaux deux à deux pour le produit scalaire."
      }
    ]
  },
  "L2-RIE": {
    "title": "L2-RIE : Intégrale de Riemann approfondie et fonctions réglées",
    "domain": "Analyse Réelle",
    "objectives": [
      "Définir rigoureusement les fonctions en escalier et les fonctions réglées sur un segment.",
      "Construire l'intégrale des fonctions réglées par complétion pour la norme uniforme.",
      "Énoncer les théorèmes d'interversion de limite et d'intégrale sous convergence uniforme.",
      "Intégrer terme à terme une série de fonctions sous convergence normale."
    ],
    "keyPoints": [
      {
        "title": "1. Fonctions en escalier et Fonctions réglées",
        "content": "Soit $[a, b]$ un segment réel non dégénéré :\n• Une fonction $\\varphi : [a, b] \\to \\mathbb{R}$ est **en escalier** s'il existe une subdivision $\\sigma = (x_0, \\dots, x_n)$ de $[a, b]$ telle que $\\varphi$ soit constante sur chaque intervalle ouvert $]x_{i-1}, x_i[$.\n• L'espace $\\mathcal{E}([a, b])$ des fonctions en escalier est un sous-espace vectoriel de l'espace normé $(\\mathcal{B}([a, b]), \\|\\cdot\\|_\\infty)$.\n• Une fonction $f : [a, b] \\to \\mathbb{R}$ est **réglée** si elle est limite uniforme d'une suite de fonctions en escalier :\n$$f \\in \\overline{\\mathcal{E}([a, b])}^{\\|\\cdot\\|_\\infty}$$\n• **Caractérisation** : $f$ est réglée ssi elle admet une limite finie à droite et une limite finie à gauche en tout point de $[a, b]$ (discontinuités de 1ère espèce uniquement)."
      },
      {
        "title": "2. Construction de l'intégrale des fonctions réglées",
        "content": "• Pour une fonction en escalier $\\varphi$ valant $c_i$ sur $]x_{i-1}, x_i[$, $\\int_a^b \\varphi(t)dt = \\sum_{i=1}^n c_i (x_i - x_{i-1})$.\n• L'application $\\varphi \\mapsto \\int_a^b \\varphi$ est linéaire et vérifie $\\left|\\int_a^b \\varphi\\right| \\le (b - a) \\|\\varphi\\|_\\infty$.\n• Par prolongement des applications lipschitziennes (théorème de prolongement uniforme), cette intégrale s'étend de manière unique en une forme linéaire continue et positive sur l'espace des fonctions réglées."
      },
      {
        "title": "3. Théorème d'interversion limite-intégrale sous convergence uniforme",
        "content": "Soit $(f_n)$ une suite de fonctions réglées sur $[a, b]$ convergeant **uniformément** vers une fonction $f$ sur $[a, b]$ :\n• Alors $f$ est réglée sur $[a, b]$, et l'on peut intervertir limite et intégrale :\n$$\\lim_{n \\to +\\infty} \\int_a^b f_n(t) \\, dt = \\int_a^b \\left( \\lim_{n \\to +\\infty} f_n(t) \\right) \\, dt = \\int_a^b f(t) \\, dt$$\n• **Preuve** : $\\left| \\int_a^b f_n - \\int_a^b f \\right| \\le \\int_a^b |f_n - f| \\le (b - a) \\|f_n - f\\|_\\infty \\xrightarrow[n \\to +\\infty]{} 0$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Justifier l'interversion limite-intégrale sur un segment",
        "example": "Calculer la limite quand $n \\to +\\infty$ de $I_n = \\int_0^1 \\frac{n e^{-x}}{n + x} \\, dx$.",
        "steps": [
          "**Limite simple** : Pour tout $x \\in [0, 1]$, $f_n(x) = \\frac{e^{-x}}{1 + x/n} \\to e^{-x} = f(x)$.",
          "**Convergence uniforme** : $|f_n(x) - f(x)| = e^{-x} \\left| \\frac{n}{n + x} - 1 \\right| = e^{-x} \\frac{x}{n + x} \\le 1 \\times \\frac{1}{n} = \\frac{1}{n}$.",
          "**Norme infinie** : $\\|f_n - f\\|_\\infty \\le \\frac{1}{n} \\to 0$. Il y a convergence uniforme sur $[0, 1]$.",
          "**Conclusion** : $\\lim_{n \\to +\\infty} I_n = \\int_0^1 e^{-x} dx = [-e^{-x}]_0^1 = 1 - e^{-1}$."
        ]
      }
    ],
    "traps": [
      "⚠️ La convergence simple ne suffit JAMAIS pour intervertir limite et intégrale : ex: $f_n(x) = n^2 x (1 - x)^n$ sur $[0, 1]$ tend simplement vers 0 mais $\\int_0^1 f_n \\to 1 \\neq 0$ !",
      "⚠️ Ce théorème ne s'applique que sur un **segment borné** $[a, b]$, pas sur un intervalle non borné comme $[0, +\\infty[$."
    ],
    "flashcards": [
      {
        "q": "Quelle condition sur une suite de fonctions (fn) sur [a, b] garantit que lim int fn = int lim fn ?",
        "a": "La convergence uniforme de $(f_n)$ vers $f$ sur le segment $[a, b]$."
      },
      {
        "q": "Qu'est-ce qu'une fonction réglée sur un segment ?",
        "a": "Une fonction limite uniforme de fonctions en escalier (ou admettant une limite à gauche et à droite en tout point)."
      }
    ]
  },
  "L2-ING": {
    "title": "L2-ING : Intégrales généralisées sur un intervalle quelconque",
    "domain": "Analyse Réelle",
    "objectives": [
      "Définir la convergence des intégrales impropres sur un intervalle non compact.",
      "Maîtriser les intégrales de référence de Riemann en 0 et en l'infini.",
      "Appliquer les critères de comparaison pour les fonctions positives (inégalités, équivalents).",
      "Distinguer convergence absolue et semi-convergence et pratiquer l'intégration par parties impropre."
    ],
    "keyPoints": [
      {
        "title": "1. Définition de la convergence d'une intégrale généralisée",
        "content": "Soit $f : [a, b[ \\to \\mathbb{K}$ ($b \\in \\mathbb{R} \\cup \\{+\\infty\\}$) continue par morceaux :\n• L'intégrale généralisée $\\int_a^b f(t) \\, dt$ est dite **convergente** si la limite suivante existe et est finie :\n$$\\lim_{X \\to b^-} \\int_a^X f(t) \\, dt = I \\in \\mathbb{K}$$\n• Si l'intégrale est impropre aux deux bornes $]a, b[$, on choisit un point intermédiaire $c \\in ]a, b[$ et $\\int_a^b f$ converge ssi $\\int_a^c f$ et $\\int_c^b f$ convergent toutes deux **indépendamment**."
      },
      {
        "title": "2. Intégrales de référence de Riemann et Bertrand",
        "content": "• **Riemann en $+\\infty$** : $\\int_1^{+\\infty} \\frac{dt}{t^\\alpha}$ converge si et seulement si $\\alpha > 1$.\n• **Riemann en $0^+$** : $\\int_0^1 \\frac{dt}{t^\\alpha}$ converge si et seulement si $\\alpha < 1$.\n• **Intégrales exponentielles** : $\\int_0^{+\\infty} e^{-at} \\, dt$ converge ssi $a > 0$ (valeur $1/a$)."
      },
      {
        "title": "3. Théorèmes de comparaison pour fonctions positives",
        "content": "Soient $f, g$ continues par morceaux et **positives** ($f, g \\ge 0$) sur $[a, b[$ :\n• **Majoration** : Si $f(t) \\le g(t)$ au voisinage de $b$ :\n  - $\\int_a^b g$ converge $\\implies \\int_a^b f$ converge.\n  - $\\int_a^b f$ diverge $\\implies \\int_a^b g$ diverge.\n• **Équivalence** : Si $f(t) \\sim g(t)$ quand $t \\to b^-$, alors $\\int_a^b f$ et $\\int_a^b g$ sont de **même nature**."
      },
      {
        "title": "4. Convergence absolue et semi-convergence",
        "content": "• **Convergence absolue** : $\\int_a^b f$ est dite absolument convergente si $\\int_a^b |f(t)| \\, dt$ converge.\n• **Théorème fondamental** : Toute intégrale absolument convergente est convergente, et $\\left|\\int_a^b f\\right| \\le \\int_a^b |f|$.\n• **Semi-convergence** : Une intégrale qui converge sans être absolument convergente est dite semi-convergente (ex: $\\int_0^{+\\infty} \\frac{\\sin t}{t}dt = \\frac{\\pi}{2}$ mais $\\int_0^{+\\infty} \\frac{|\\sin t|}{t}dt = +\\infty$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Établir la convergence d'une intégrale par équivalents",
        "example": "Étudier la convergence de $I = \\int_0^{+\\infty} \\frac{1}{x^2 + \\sqrt{x}} \\, dx$.",
        "steps": [
          "**Problème aux deux bornes** : 0 et $+\\infty$. On coupe l'intégrale en $x = 1$.",
          "**En 0** : $\\frac{1}{x^2 + \\sqrt{x}} \\sim_{0} \\frac{1}{\\sqrt{x}} = \\frac{1}{x^{1/2}}$. Or $\\int_0^1 \\frac{dx}{x^{1/2}}$ converge (Riemann avec $\\alpha = 1/2 < 1$).",
          "**En $+\\infty$** : $\\frac{1}{x^2 + \\sqrt{x}} \\sim_{+\\infty} \\frac{1}{x^2}$. Or $\\int_1^{+\\infty} \\frac{dx}{x^2}$ converge (Riemann avec $\\alpha = 2 > 1$).",
          "**Conclusion** : Les deux intégrales convergent, donc $I$ converge."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour une intégrale impropre sur $\\mathbb{R}$, on ne peut PAS écrire $\\lim_{R \\to +\\infty} \\int_{-R}^R f(t)dt$ (valeur principale de Cauchy) pour définir la convergence : $\\int_{-\\infty}^{+\\infty} t \\, dt$ diverge, alors que $\\int_{-R}^R t \\, dt = 0$ !",
      "⚠️ Le théorème des équivalents est rigoureusement faux pour des fonctions de signe changeant."
    ],
    "flashcards": [
      {
        "q": "À quelle condition l'intégrale de Riemann int_1^{+infini} dt / t^alpha converge-t-elle ?",
        "a": "Si et seulement si $\\alpha > 1$."
      },
      {
        "q": "Quelle différence fondamentale distingue convergence absolue et semi-convergence ?",
        "a": "Une intégrale semi-convergente converge mais son intégrale en valeur absolue $\\int |f|$ diverge."
      }
    ]
  },
  "L2-EDO": {
    "title": "L2-EDO : Équations différentielles linéaires et systèmes différentiels",
    "domain": "Équations Différentielles & Systèmes Dynamiques",
    "objectives": [
      "Énoncer le Théorème de Cauchy-Lipschitz linéaire pour les équations et systèmes scalaires et vectoriels.",
      "Résoudre les équations différentielles linéaires d'ordre 2 à coefficients constants avec second membre.",
      "Résoudre les systèmes différentiels linéaires homogènes $X'(t) = A X(t)$ via l'exponentielle de matrice.",
      "Appliquer la méthode de variation des constantes pour déterminer les solutions particulières."
    ],
    "keyPoints": [
      {
        "title": "1. Théorème de Cauchy-Lipschitz linéaire",
        "content": "Soit $I$ un intervalle ouvert de $\\mathbb{R}$ :\n• **Théorème de Cauchy-Lipschitz** : Soient $A : I \\to \\mathcal{M}_n(\\mathbb{K})$ et $B : I \\to \\mathbb{K}^n$ deux applications continues. Pour tout $(t_0, X_0) \\in I \\times \\mathbb{K}^n$, il existe une **unique solution globale** $X : I \\to \\mathbb{K}^n$ au problème de Cauchy :\n$$\\begin{cases} X'(t) = A(t) X(t) + B(t) \\\\ X(t_0) = X_0 \\end{cases}$$\n• L'ensemble des solutions de l'équation homogène $X' = A(t)X$ est un $\\mathbb{K}$-espace vectoriel de **dimension $n$**."
      },
      {
        "title": "2. Équations d'ordre 2 à coefficients constants",
        "content": "Pour $a y'' + b y' + c y = 0$ ($a \\neq 0$), l'équation caractéristique est $a r^2 + b r + c = 0$ de discriminant $\\Delta = b^2 - 4ac$ :\n1. **$\\Delta > 0$** : Deux racines réelles $r_1, r_2$ : $y(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}$.\n2. **$\\Delta = 0$** : Une racine double réelle $r_0$ : $y(t) = (C_1 + C_2 t) e^{r_0 t}$.\n3. **$\\Delta < 0$** : Deux racines complexes conjuguées $\\alpha \\pm i\\beta$ :\n$$y(t) = e^{\\alpha t} (C_1 \\cos(\\beta t) + C_2 \\sin(\\beta t))$$"
      },
      {
        "title": "3. Systèmes différentiels et exponentielle de matrice",
        "content": "• Pour $A \\in \\mathcal{M}_n(\\mathbb{K})$, l'exponentielle de matrice est la série normalement convergente :\n$$e^A = \\sum_{k=0}^{+\\infty} \\frac{A^k}{k!}$$\n• Les solutions du système différentiel autonome $X'(t) = A X(t)$ avec condition initiale $X(0) = X_0$ sont données par :\n$$X(t) = e^{tA} X_0$$\n• Si $A = P D P^{-1}$ est diagonalisable, alors $e^{tA} = P e^{tD} P^{-1} = P \\text{diag}(e^{\\lambda_1 t}, \\dots, e^{\\lambda_n t}) P^{-1}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre un système différentiel 2x2 par diagonalisation",
        "example": "Résoudre $X'(t) = \\begin{pmatrix} 1 & 1 \\\\ 4 & 1 \\end{pmatrix} X(t)$.",
        "steps": [
          "**Valeurs propres** : $\\chi_A(\\lambda) = (\\lambda - 1)^2 - 4 = 0 \\implies \\lambda_1 = 3, \\lambda_2 = -1$.",
          "**Vecteurs propres** : Pour $\\lambda = 3$ : $v_1 = (1, 2)^T$. Pour $\\lambda = -1$ : $v_2 = (1, -2)^T$.",
          "**Solution générale** : $X(t) = C_1 e^{3t} \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} + C_2 e^{-t} \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$."
        ]
      }
    ],
    "traps": [
      "⚠️ $e^{A+B} = e^A e^B$ n'est vrai que si les matrices $A$ et $B$ **commutent** ($AB = BA$) !",
      "⚠️ Ne pas oublier que dans la méthode de variation de la constante d'ordre 2, le système impose la condition auxiliaire $c_1'(t) y_1(t) + c_2'(t) y_2(t) = 0$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la dimension de l'espace des solutions d'une équation différentielle linéaire scalaire d'ordre n homogène ?",
        "a": "Elle est de dimension $n$ d'après le théorème de Cauchy-Lipschitz."
      },
      {
        "q": "Quelle est la solution générale de X'(t) = A X(t) vérifiant X(0) = X_0 ?",
        "a": "$X(t) = e^{tA} X_0$."
      }
    ]
  },
  "L2-PAR": {
    "title": "L2-PAR : Intégrales dépendant d'un paramètre et convergence dominée",
    "domain": "Analyse Réelle",
    "objectives": [
      "Étudier les fonctions définies par une intégrale $F(x) = \\int_I f(x, t) \\, dt$.",
      "Énoncer et appliquer le théorème de continuité sous le signe intégral avec hypothèse de domination.",
      "Énoncer et appliquer le théorème de dérivation sous le signe intégral (formule de Leibniz).",
      "Étudier la fonction Gamma d'Euler et ses propriétés analytiques."
    ],
    "keyPoints": [
      {
        "title": "1. Continuité sous le signe intégrale (Théorème de convergence dominée)",
        "content": "Soit $I$ un intervalle de $\\mathbb{R}$, $A$ une partie de $\\mathbb{R}$ et $f : A \\times I \\to \\mathbb{K}$ telle que $F(x) = \\int_I f(x, t) \\, dt$ :\n• **Théorème de continuité** : Si :\n  1. Pour tout $x \\in A$, $t \\mapsto f(x, t)$ est continue par morceaux et intégrable sur $I$.\n  2. Pour tout $t \\in I$, $x \\mapsto f(x, t)$ est continue sur $A$.\n  3. **Hypothèse de domination** : Il existe $\\varphi : I \\to \\mathbb{R}^+$ continue par morceaux et **intégrable sur $I$** telle que :\n  $$\\forall x \\in A, \\quad \\forall t \\in I, \\quad |f(x, t)| \\le \\varphi(t)$$\n• Alors $F$ est **continue** sur $A$."
      },
      {
        "title": "2. Dérivation sous le signe intégrale (Règle de Leibniz)",
        "content": "Soit $f : J \\times I \\to \\mathbb{K}$ où $J$ est un intervalle ouvert de $\\mathbb{R}$ :\n• **Théorème de dérivation** : Si :\n  1. Pour tout $x \\in J$, $t \\mapsto f(x, t)$ est intégrable sur $I$.\n  2. Pour tout $t \\in I$, $x \\mapsto f(x, t)$ est de classe $\\mathcal{C}^1$ sur $J$.\n  3. **Hypothèse de domination sur la dérivée** : Il existe $\\psi : I \\to \\mathbb{R}^+$ intégrable sur $I$ telle que :\n  $$\\forall x \\in J, \\quad \\forall t \\in I, \\quad \\left| \\frac{\\partial f}{\\partial x}(x, t) \\right| \\le \\psi(t)$$\n• Alors $F$ est de **classe $\\mathcal{C}^1$** sur $J$, et sa dérivée s'obtient en dérivant sous l'intégrale :\n$$F'(x) = \\int_I \\frac{\\partial f}{\\partial x}(x, t) \\, dt$$"
      },
      {
        "title": "3. La fonction Gamma d'Euler",
        "content": "• Définie pour tout $x > 0$ par l'intégrale généralisée :\n$$\\Gamma(x) = \\int_0^{+\\infty} t^{x-1} e^{-t} \\, dt$$\n• Elle est de classe $\\mathcal{C}^\\infty$ sur $]0, +\\infty[$.\n• **Propriété fondamentale** : $\\Gamma(x + 1) = x \\Gamma(x)$ pour tout $x > 0$.\n• **Lien avec la factorielle** : Pour tout $n \\in \\mathbb{N}$, $\\Gamma(n + 1) = n!$.\n• **Valeur remarquable** : $\\Gamma(1/2) = \\sqrt{\\pi}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Établir la classe C^1 d'une intégrale à paramètre",
        "example": "Démontrer que $F(x) = \\int_0^{+\\infty} \\frac{\\sin(xt)}{t} e^{-t} \\, dt$ est de classe $\\mathcal{C}^1$ sur $\\mathbb{R}$.",
        "steps": [
          "**Dérivée partielle** : $\\frac{\\partial}{\\partial x}\\left(\\frac{\\sin(xt)}{t} e^{-t}\\right) = \\cos(xt) e^{-t}$.",
          "**Continuité** : $x \\mapsto \\cos(xt)e^{-t}$ est continue sur $\\mathbb{R}$ pour tout $t > 0$.",
          "**Domination** : $\\forall x \\in \\mathbb{R}, |\\cos(xt) e^{-t}| \\le e^{-t} = \\psi(t)$. Or $\\int_0^{+\\infty} e^{-t} dt = 1 < +\\infty$ est intégrable.",
          "**Conclusion** : $F$ est $\\mathcal{C}^1$ sur $\\mathbb{R}$, et $F'(x) = \\int_0^{+\\infty} \\cos(xt) e^{-t} dt = \\frac{1}{1 + x^2}$."
        ]
      }
    ],
    "traps": [
      "⚠️ La fonction majorante de domination $\\varphi(t)$ ne doit **JAMAIS dépendre de $x$** !",
      "⚠️ Si la domination globale sur $A$ tout entier échoue, il suffit souvent de dominer localement sur tout segment compact $[a, b] \\subset A$ pour obtenir la continuité ou la dérivabilité sur $A$."
    ],
    "flashcards": [
      {
        "q": "Quelle hypothèse indispensable permet de dériver une intégrale à paramètre sous le signe intégral ?",
        "a": "Une hypothèse de domination intégrable sur la dérivée partielle : $|\\frac{\\partial f}{\\partial x}(x, t)| \\le \\psi(t)$ avec $\\psi$ intégrable indépendante de $x$."
      },
      {
        "q": "Quelle relation fonctionnelle vérifie la fonction Gamma d'Euler pour x > 0 ?",
        "a": "$\\Gamma(x + 1) = x \\Gamma(x)$."
      }
    ]
  },
  "L2-MUL": {
    "title": "L2-MUL : Intégrales multiples, théorème de Fubini et changements de variables",
    "domain": "Calcul Intégral à Plusieurs Variables",
    "objectives": [
      "Définir l'intégrale double et triple sur un pavé et sur un domaine régulier de $\\mathbb{R}^n$.",
      "Énoncer et appliquer le Théorème de Fubini pour calculer des intégrales itérées.",
      "Calculer la matrice jacobienne et le jacobien d'un changement de variables.",
      "Passer en coordonnées polaires, cylindriques et sphériques."
    ],
    "keyPoints": [
      {
        "title": "1. Intégrale double et Théorème de Fubini",
        "content": "Soit $f : D \\subset \\mathbb{R}^2 \\to \\mathbb{R}$ continue sur un domaine compact régulier :\n• **Théorème de Fubini (pavé rectangulaire)** : Si $D = [a, b] \\times [c, d]$ :\n$$\\iint_D f(x, y) \\, dxdy = \\int_a^b \\left( \\int_c^d f(x, y) \\, dy \\right) dx = \\int_c^d \\left( \\int_a^b f(x, y) \\, dx \\right) dy$$\n• **Domaine simple du plan** : Si $D = \\{(x, y) \\mid a \\le x \\le b, \\varphi_1(x) \\le y \\le \\varphi_2(x)\\}$ :\n$$\\iint_D f(x, y) \\, dxdy = \\int_a^b \\left( \\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(x, y) \\, dy \\right) dx$$"
      },
      {
        "title": "2. Formule du changement de variables et Jacobien",
        "content": "Soit $\\Phi : \\Delta \\to D$ un $\\mathcal{C}^1$-difféomorphisme entre deux ouverts de $\\mathbb{R}^2$ :\n• **Matrice jacobienne** : $J_\\Phi(u, v) = \\begin{pmatrix} \\frac{\\partial x}{\\partial u} & \\frac{\\partial x}{\\partial v} \\\\ \\frac{\\partial y}{\\partial u} & \\frac{\\partial y}{\\partial v} \\end{pmatrix}$.\n• **Jacobien** : C'est la valeur absolue du déterminant jacobien : $|\\det J_\\Phi(u, v)|$.\n• **Formule générale** :\n$$\\iint_D f(x, y) \\, dxdy = \\iint_\\Delta f(\\Phi(u, v)) \\cdot |\\det J_\\Phi(u, v)| \\, dudv$$"
      },
      {
        "title": "3. Systèmes de coordonnées usuels",
        "content": "• **Coordonnées polaires** dans le plan ($x = r\\cos\\theta, y = r\\sin\\theta$) :\n$$dxdy = r \\, drd\\theta$$\n• **Coordonnées cylindriques** dans l'espace ($x = r\\cos\\theta, y = r\\sin\\theta, z = z$) :\n$$dxdydz = r \\, drd\\theta dz$$\n• **Coordonnées sphériques** ($x = r\\sin\\phi\\cos\\theta, y = r\\sin\\phi\\sin\\theta, z = r\\cos\\phi$) :\n$$dxdydz = r^2 \\sin(\\phi) \\, drd\\theta d\\phi$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une intégrale double en coordonnées polaires",
        "example": "Calculer l'intégrale $I = \\iint_D e^{-(x^2 + y^2)} \\, dxdy$ sur le disque unité $D = \\{x^2 + y^2 \\le 1\\}$.",
        "steps": [
          "**Changement en polaires** : $x^2 + y^2 = r^2$ et $dxdy = r dr d\\theta$.",
          "**Nouveau domaine** : $\\Delta = [0, 1] \\times [0, 2\\pi]$.",
          "**Intégrale séparée** : $I = \\int_0^{2\\pi} d\\theta \\times \\int_0^1 r e^{-r^2} dr = 2\\pi \\times \\left[ -\\frac{1}{2} e^{-r^2} \\right]_0^1 = 2\\pi \\left( \\frac{1 - e^{-1}}{2} \\right)$.",
          "**Conclusion** : $I = \\pi(1 - e^{-1})$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne JAMAIS oublier le facteur d'échelle $r$ en coordonnées polaires ($r dr d\\theta$) et $r^2 \\sin\\phi$ en coordonnées sphériques !",
      "⚠️ Dans le théorème de Fubini sur un domaine non rectangulaire, les bornes de l'intégrale intérieure dépendent de la variable extérieure."
    ],
    "flashcards": [
      {
        "q": "Quel est l'élément d'aire en coordonnées polaires ?",
        "a": "$dx dy = r \\, dr d\\theta$ (le jacobien vaut $r$)."
      },
      {
        "q": "Quel est l'élément de volume en coordonnées sphériques ?",
        "a": "$dx dy dz = r^2 \\sin(\\phi) \\, dr d\\theta d\\phi$."
      }
    ]
  },
  "L2-CRB": {
    "title": "L2-CRB : Courbes paramétrées, repère de Frenet et courbure",
    "domain": "Géométrie Différentielle",
    "objectives": [
      "Définir la paramétrisation par abscisse curviligne d'un arc régulier.",
      "Construire le repère mobile de Frenet $(\\vec{T}, \\vec{N})$.",
      "Énoncer les formules de Frenet et calculer la courbure scalaire $\\kappa$.",
      "Déterminer le centre et le rayon de courbure et la développée d'une courbe."
    ],
    "keyPoints": [
      {
        "title": "1. Abscisse curviligne et paramétrage normal",
        "content": "Soit $\\gamma : I \\to \\mathbb{R}^2, t \\mapsto \\vec{r}(t)$ un arc régulier ($\\vec{r}'(t) \\neq \\vec{0}$) de classe $\\mathcal{C}^2$ :\n• **Abscisse curviligne** : C'est la fonction $s(t) = \\int_{t_0}^t \\|\\vec{r}'(u)\\| \\, du$.\n• Comme $\\frac{ds}{dt} = \\|\\vec{r}'(t)\\| > 0$, $s$ est un $\\mathcal{C}^1$-difféomorphisme de $I$ sur son image.\n• Le paramétrage par l'abscisse curviligne $s \\mapsto M(s)$ est dit **normal** : le vecteur vitesse a une norme constamment égale à 1 : $\\left\\|\\frac{dM}{ds}\\right\\| = 1$."
      },
      {
        "title": "2. Repère de Frenet et Formules de Frenet",
        "content": "En tout point d'un arc birégulier paramétré par l'abscisse curviligne $s$ :\n• **Vecteur tangent unitaire** : $\\vec{T}(s) = \\frac{dM}{ds}$.\n• **Vecteur normal unitaire** : $\\vec{N}(s)$ est l'unique vecteur unitaire tel que $(\\vec{T}(s), \\vec{N}(s))$ forme une base orthonormée directe du plan.\n• **Première formule de Frenet** :\n$$\\frac{d\\vec{T}}{ds} = \\kappa(s) \\vec{N}(s)$$\noù le scalaire $\\kappa(s)$ est la **courbure algébrique** de l'arc au point $M(s)$.\n• **Deuxième formule de Frenet** : $\\frac{d\\vec{N}}{ds} = -\\kappa(s) \\vec{T}(s)$."
      },
      {
        "title": "3. Calcul de la courbure et Cercle osculateur",
        "content": "• **Formule pratique de la courbure** pour un paramétrage quelconque $t$ :\n$$\\kappa(t) = \\frac{\\det(\\vec{r}'(t), \\vec{r}''(t))}{\\|\\vec{r}'(t)\\|^3} = \\frac{x'(t)y''(t) - y'(t)x''(t)}{(x'(t)^2 + y'(t)^2)^{3/2}}$$\n• **Rayon de courbure** : $R(t) = \\frac{1}{|\\kappa(t)|}$.\n• **Centre de courbure** : Le point $C(t) = M(t) + \\frac{1}{\\kappa(t)} \\vec{N}(t)$ est le centre du cercle osculateur (cercle qui approche la courbe au second ordre en $M(t)$).\n• Le lieu des centres de courbure est la **développée** de la courbe."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la courbure d'une parabole",
        "example": "Calculer la courbure de la parabole $y = x^2$ en son sommet $O(0, 0)$.",
        "steps": [
          "**Paramétrage** : $x(t) = t$, $y(t) = t^2$.",
          "**Dérivées en 0** : $x'(0) = 1, y'(0) = 0$ et $x''(0) = 0, y''(0) = 2$.",
          "**Vitesse** : $\\|\\vec{r}'(0)\\| = \\sqrt{1^2 + 0^2} = 1$.",
          "**Formule** : $\\kappa(0) = \\frac{1(2) - 0(0)}{1^3} = 2$.",
          "**Rayon de courbure** : $R = 1/2$ (le cercle osculateur est de rayon $1/2$, centré en $(0, 1/2)$)."
        ]
      }
    ],
    "traps": [
      "⚠️ La formule de Frenet $\\frac{d\\vec{T}}{dt} = \\kappa \\vec{N}$ n'est valable que si la dérivation est faite par rapport à l'**abscisse curviligne $s$**, et NON par rapport à un paramètre $t$ quelconque !",
      "⚠️ Pour un cercle de rayon $R$, la courbure est constante et vaut $\\kappa = 1/R$."
    ],
    "flashcards": [
      {
        "q": "Énoncer la première formule de Frenet pour une courbe plane paramétrée par l'abscisse curviligne s.",
        "a": "$\\frac{d\\vec{T}}{ds} = \\kappa \\vec{N}$."
      },
      {
        "q": "Quelle est la courbure d'un cercle de rayon R ?",
        "a": "$\\kappa = \\frac{1}{R}$ (constante)."
      }
    ]
  },
  "L2-PRB": {
    "title": "L2-PRB : Espaces probabilisés et variables aléatoires discrètes",
    "domain": "Probabilités & Statistiques",
    "objectives": [
      "Définir rigoureusement un espace probabilisé $(\\Omega, \\mathcal{A}, P)$ et les probabilités conditionnelles.",
      "Définir une variable aléatoire discrète, sa loi, son espérance et sa variance.",
      "Maîtriser les lois discrètes usuelles (Bernoulli, Binomiale, Géométrique, Poisson).",
      "Calculer la fonction génératrice $G_X(t)$ et l'utiliser pour déterminer les moments et lois de sommes."
    ],
    "keyPoints": [
      {
        "title": "1. Axiomatique de Kolmogorov et Probabilités conditionnelles",
        "content": "• Un **espace probabilisé** est un triplet $(\\Omega, \\mathcal{A}, P)$ où $\\mathcal{A}$ est une tribu ($\\sigma$-algèbre) sur $\\Omega$ et $P : \\mathcal{A} \\to [0, 1]$ vérifie $P(\\Omega) = 1$ et la **$\\sigma$-additivité** (pour tous événements $A_n$ deux à deux disjoints, $P(\\bigcup A_n) = \\sum P(A_n)$).\n• **Probabilité conditionnelle** : Si $P(B) > 0$, $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$.\n• **Formule des probabilités totales** : Si $(B_n)$ forme un système complet d'événements : $P(A) = \\sum_n P(A \\mid B_n) P(B_n)$."
      },
      {
        "title": "2. Variables aléatoires discrètes, Espérance et Variance",
        "content": "Une variable aléatoire discrète est une application $X : \\Omega \\to E$ (avec $E \\subset \\mathbb{R}$ fini ou dénombrable) telle que $\\forall x \\in E, X^{-1}(\\{x\\}) \\in \\mathcal{A}$ :\n• **Loi de probabilité** : Donnée par les probabilités $p_k = P(X = x_k)$ avec $\\sum p_k = 1$.\n• **Espérance** : $E(X) = \\sum_{k} x_k P(X = x_k)$ (sous réserve de convergence absolue $\\sum |x_k| p_k < +\\infty$).\n• **Théorème de transfert** : $E[g(X)] = \\sum_k g(x_k) P(X = x_k)$.\n• **Variance** : $V(X) = E[(X - E(X))^2] = E(X^2) - (E(X))^2 \\ge 0$, et écart-type $\\sigma(X) = \\sqrt{V(X)}$."
      },
      {
        "title": "3. Lois discrètes fondamentales",
        "content": "• **Loi binomiale $\\mathcal{B}(n, p)$** : $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$. $E(X) = np$, $V(X) = np(1-p)$.\n• **Loi géométrique $\\mathcal{G}(p)$** (temps d'attente du 1er succès sur $\\mathbb{N}^*$) :\n$$P(X = k) = (1 - p)^{k-1} p, \\quad E(X) = \\frac{1}{p}, \\quad V(X) = \\frac{1 - p}{p^2}$$\nElle est **sans mémoire** : $P(X > n + k \\mid X > n) = P(X > k)$.\n• **Loi de Poisson $\\mathcal{P}(\\lambda)$** (sur $\\mathbb{N}$, événements rares) :\n$$P(X = k) = e^{-\\lambda} \\frac{\\lambda^k}{k!}, \\quad E(X) = \\lambda, \\quad V(X) = \\lambda$$"
      },
      {
        "title": "4. Fonctions génératrices",
        "content": "Pour une variable aléatoire $X$ à valeurs dans $\\mathbb{N}$ :\n• **Fonction génératrice** : $G_X(t) = E[t^X] = \\sum_{k=0}^{+\\infty} P(X = k) t^k$, définie au moins pour $|t| \\le 1$.\n• **Calcul des moments** : $G_X(1) = 1$, $E(X) = G_X'(1)$, et $V(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2$.\n• **Somme de variables indépendantes** : Si $X$ et $Y$ sont indépendantes :\n$$G_{X + Y}(t) = G_X(t) \\cdot G_Y(t)$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer l'espérance par la fonction génératrice",
        "example": "Calculer l'espérance d'une loi de Poisson $X \\sim \\mathcal{P}(\\lambda)$.",
        "steps": [
          "**Fonction génératrice** : $G_X(t) = \\sum_{k=0}^{+\\infty} e^{-\\lambda} \\frac{\\lambda^k}{k!} t^k = e^{-\\lambda} \\sum_{k=0}^{+\\infty} \\frac{(\\lambda t)^k}{k!} = e^{-\\lambda} e^{\\lambda t} = e^{\\lambda(t - 1)}$.",
          "**Dérivée** : $G_X'(t) = \\lambda e^{\\lambda(t - 1)}$.",
          "**En $t = 1$** : $E(X) = G_X'(1) = \\lambda e^0 = \\lambda$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour que $E(X)$ existe pour une variable dénombrable infinie, la série doit converger **absolument** (sinon l'espérance n'est pas définie) !",
      "⚠️ La formule $V(X + Y) = V(X) + V(Y)$ n'est vraie que si $X$ et $Y$ sont **décorrélées** (notamment si elles sont indépendantes)."
    ],
    "flashcards": [
      {
        "q": "Quelle loi discrète modélise le nombre d'essais jusqu'au premier succès et possède la propriété d'absence de mémoire ?",
        "a": "La loi géométrique $\\mathcal{G}(p)$."
      },
      {
        "q": "Comment calcule-t-on la fonction génératrice de la somme de deux variables discrètes indépendantes ?",
        "a": "Par le produit de leurs fonctions génératrices : $G_{X+Y}(t) = G_X(t) \\times G_Y(t)$."
      }
    ]
  }
};

window.MATHS_EXERCISES_L2 = {
  "L2-DET": [
    {
      "id": "L2-DET-1",
      "tier": 1,
      "type": "mcq",
      "title": "Déterminant et dilatation d'une matrice nxn",
      "skill": "Comprendre l'homogénéité du déterminant",
      "statement": "Soit $A \\in \\mathcal{M}_n(\\mathbb{R})$ et $\\lambda \\in \\mathbb{R}$. Que vaut $\\det(\\lambda A)$ ?",
      "options": [
        "$\\lambda^n \\det(A)$",
        "$\\lambda \\det(A)$",
        "$n\\lambda \\det(A)$",
        "$\\det(A)$"
      ],
      "correctIndex": 0,
      "answer": "$\\lambda^n \\det(A)$",
      "hint1": "Le déterminant est une forme $n$-linéaire alternée : chaque ligne est multipliée par $\\lambda$.",
      "hint2": "Il y a $n$ lignes, donc on factorise par $\\lambda$ sur chaque ligne : $\\lambda^n$.",
      "solution": "Comme le déterminant est $n$-linéaire par rapport aux lignes, multiplier tous les coefficients de la matrice par $\\lambda$ multiplie le déterminant par $\\lambda^n$ : $\\det(\\lambda A) = \\lambda^n \\det(A)$."
    },
    {
      "id": "L2-DET-2",
      "tier": 2,
      "type": "mcq",
      "title": "Développement d'un déterminant 3x3",
      "skill": "Calculer un déterminant par développement selon une colonne",
      "statement": "Quel est le déterminant de $A = \\begin{pmatrix} 2 & 0 & 1 \\\\ 3 & 4 & 5 \\\\ 0 & 0 & 3 \\end{pmatrix}$ ?",
      "options": [
        "$24$",
        "$12$",
        "$0$",
        "$6$"
      ],
      "correctIndex": 0,
      "answer": "$24$",
      "hint1": "Développe par rapport à la dernière ligne qui a deux zéros.",
      "hint2": "$\\det A = 3 \\times \\det\\begin{pmatrix} 2 & 0 \\\\ 3 & 4 \\end{pmatrix} = 3 \\times (8 - 0) = 24$.",
      "solution": "En développant selon la 3ème ligne : $\\det(A) = 3 \\times \\det\\begin{pmatrix} 2 & 0 \\\\ 3 & 4 \\end{pmatrix} = 3 \\times (8 - 0) = 24$."
    },
    {
      "id": "L2-DET-3",
      "tier": 3,
      "type": "mcq",
      "title": "Formule de Cramer pour un système 2x2",
      "skill": "Résoudre un système linéaire par la méthode de Cramer",
      "statement": "Pour le système $\\begin{cases} 3x + 2y = 8 \\\\ x + 4y = 6 \\end{cases}$, que vaut la variable $x$ par les formules de Cramer ?",
      "options": [
        "$2$",
        "$1$",
        "$3$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$2$",
      "hint1": "$\\det A = 3(4) - 2(1) = 10$.",
      "hint2": "$\\det A_x = \\det\\begin{pmatrix} 8 & 2 \\\\ 6 & 4 \\end{pmatrix} = 32 - 12 = 20$. Donc $x = 20/10 = 2$.",
      "solution": "$\\det(A) = 12 - 2 = 10$. $\\det(A_x) = \\begin{vmatrix} 8 & 2 \\\\ 6 & 4 \\end{vmatrix} = 32 - 12 = 20$. Par la formule de Cramer : $x = \\frac{20}{10} = 2$."
    },
    {
      "id": "L2-DET-4",
      "tier": 4,
      "type": "mcq",
      "title": "Déterminant de Vandermonde 3x3",
      "skill": "Calculer et factoriser un déterminant de Vandermonde",
      "statement": "Que vaut le déterminant de Vandermonde $V(a, b, c) = \\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix}$ ?",
      "options": [
        "$(c - b)(c - a)(b - a)$",
        "$(a - b)(b - c)(c - a)$",
        "$(a + b + c)(ab + bc + ca)$",
        "$abc$"
      ],
      "correctIndex": 0,
      "answer": "$(c - b)(c - a)(b - a)$",
      "hint1": "Le déterminant de Vandermonde est le produit $\\prod_{1 \\le i < j \\le n} (x_j - x_i)$.",
      "hint2": "Pour $n=3$ avec variables $a, b, c$, le produit s'écrit $(b - a)(c - a)(c - b)$.",
      "solution": "Par les opérations élémentaires sur les lignes ou par racines polynomiales, $V(a, b, c) = (b - a)(c - a)(c - b) = (c - b)(c - a)(b - a)$."
    }
  ],
  "L2-RED1": [
    {
      "id": "L2-RED1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Condition suffisante de diagonalisabilité",
      "skill": "Connaître le critère des valeurs propres distinctes",
      "statement": "Soit $A \\in \\mathcal{M}_n(\\mathbb{R})$. Laquelle de ces conditions garantit à coup sûr que $A$ est diagonalisable sur $\\mathbb{R}$ ?",
      "options": [
        "$A$ possède $n$ valeurs propres réelles deux à deux distinctes",
        "$\\det(A) \\ne 0$",
        "$\\text{Tr}(A) = 0$",
        "$A$ est nilpotente"
      ],
      "correctIndex": 0,
      "answer": "$A$ possède $n$ valeurs propres réelles deux à deux distinctes",
      "hint1": "Si le polynôme caractéristique a $n$ racines distinctes en dimension $n$, les espaces propres sont tous de dimension 1.",
      "hint2": "Leur somme directe est alors égale à tout l'espace.",
      "solution": "Si $A \\in \\mathcal{M}_n(\\mathbb{R})$ admet $n$ valeurs propres réelles distinctes, la somme des dimensions des sous-espaces propres est $n$, donc $A$ est diagonalisable sur $\\mathbb{R}$."
    },
    {
      "id": "L2-RED1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Valeurs propres d'une matrice 2x2",
      "skill": "Calculer le polynôme caractéristique et ses racines",
      "statement": "Quelles sont les valeurs propres de $A = \\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$ ?",
      "options": [
        "$\\lambda_1 = 2$ et $\\lambda_2 = 5$",
        "$\\lambda_1 = 1$ et $\\lambda_2 = 6$",
        "$\\lambda_1 = 3$ et $\\lambda_2 = 4$",
        "$\\lambda_1 = 0$ et $\\lambda_2 = 7$"
      ],
      "correctIndex": 0,
      "answer": "$\\lambda_1 = 2$ et $\\lambda_2 = 5$",
      "hint1": "$\\chi_A(\\lambda) = \\lambda^2 - \\text{Tr}(A)\\lambda + \\det(A)$.",
      "hint2": "$\\text{Tr}(A) = 7$, $\\det(A) = 12 - 2 = 10$. $\\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5) = 0$.",
      "solution": "$\\chi_A(\\lambda) = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5)$. Les valeurs propres sont donc $2$ et $5$."
    },
    {
      "id": "L2-RED1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Dimension du sous-espace propre",
      "skill": "Vérifier la multiplicité géométrique d'une valeur propre",
      "statement": "Pour $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$, quelle est la dimension du sous-espace propre $E_2(A)$ ?",
      "options": [
        "$1$",
        "$2$",
        "$0$",
        "$3$"
      ],
      "correctIndex": 0,
      "answer": "$1$",
      "hint1": "$E_2(A) = \\ker(A - 2I_2)$.",
      "hint2": "$A - 2I_2 = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$. Son rang est 1, donc par le théorème du rang, le noyau est de dimension $2 - 1 = 1$.",
      "solution": "$A - 2I_2 = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$, qui est de rang 1. Par le théorème du rang, $\\dim E_2(A) = 2 - 1 = 1 < 2$. La matrice n'est pas diagonalisable."
    },
    {
      "id": "L2-RED1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Puissance de matrice par diagonalisation",
      "skill": "Calculer $A^k$ à l'aide de la décomposition $P D P^{-1}$",
      "statement": "Si $A = P \\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\end{pmatrix} P^{-1}$, que vaut la trace de $A^k$ pour tout $k \\in \\mathbb{N}^*$ ?",
      "options": [
        "$1 + 2^k$",
        "$3^k$",
        "$2^k$",
        "$1 + 2k$"
      ],
      "correctIndex": 0,
      "answer": "$1 + 2^k$",
      "hint1": "$A^k = P D^k P^{-1}$, donc $A^k$ et $D^k$ sont semblables.",
      "hint2": "Deux matrices semblables ont la même trace : $\\text{Tr}(A^k) = \\text{Tr}(D^k) = 1^k + 2^k$.",
      "solution": "Comme $A^k$ est semblable à $D^k = \\begin{pmatrix} 1^k & 0 \\\\ 0 & 2^k \\end{pmatrix}$, la trace est invariante par similitude : $\\text{Tr}(A^k) = 1 + 2^k$."
    }
  ],
  "L2-RED2": [
    {
      "id": "L2-RED2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Cayley-Hamilton",
      "skill": "Appliquer l'annulation du polynôme caractéristique",
      "statement": "Pour toute matrice carrée $A$, que vaut l'évaluation de son polynôme caractéristique $\\chi_A$ en $A$ ?",
      "options": [
        "La matrice nulle $0$",
        "La matrice identité $I$",
        "$\\det(A) I$",
        "$\\text{Tr}(A) A$"
      ],
      "correctIndex": 0,
      "answer": "La matrice nulle $0$",
      "hint1": "Théorème de Cayley-Hamilton : tout endomorphisme annule son propre polynôme caractéristique.",
      "hint2": "$\\chi_A(A) = 0$.",
      "solution": "D'après le théorème de Cayley-Hamilton, pour toute matrice carrée $A$, on a $\\chi_A(A) = 0$."
    },
    {
      "id": "L2-RED2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Polynôme minimal et diagonalisabilité",
      "skill": "Caractériser la diagonalisabilité par le polynôme minimal",
      "statement": "Une matrice $A \\in \\mathcal{M}_n(K)$ est diagonalisable sur $K$ si et seulement si son polynôme minimal $\\mu_A$ :",
      "options": [
        "Est scindé à racines simples sur $K$",
        "Est de degré $n$",
        "N'admet que des racines positives",
        "Est irréductible"
      ],
      "correctIndex": 0,
      "answer": "Est scindé à racines simples sur $K$",
      "hint1": "Théorème fondamental de réduction : le polynôme minimal n'a pas de racine multiple si et seulement si la matrice est diagonalisable.",
      "hint2": "Les racines de $\\mu_A$ sont exactement les valeurs propres.",
      "solution": "Une matrice $A$ est diagonalisable si et seulement si son polynôme minimal est scindé à racines simples sur le corps $K$ considéré."
    },
    {
      "id": "L2-RED2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Décomposition de Dunford",
      "skill": "Propriétés de la décomposition $A = D + N$",
      "statement": "Dans la décomposition de Dunford $A = D + N$ avec $D$ diagonalisable et $N$ nilpotente, quelle condition essentielle doivent vérifier $D$ et $N$ ?",
      "options": [
        "$DN = ND$",
        "$D + N = I$",
        "$\\det(D) = \\det(N)$",
        "$N^2 = D$"
      ],
      "correctIndex": 0,
      "answer": "$DN = ND$",
      "hint1": "Les composantes diagonalisable et nilpotente doivent commuter pour que la décomposition soit unique.",
      "hint2": "$DN = ND$ permet d'utiliser la formule du binôme de Newton.",
      "solution": "La décomposition de Dunford assure l'existence et l'unicité du couple $(D, N)$ tel que $A = D + N$, $D$ diagonalisable, $N$ nilpotente, ET $DN = ND$ (ils commutent)."
    },
    {
      "id": "L2-RED2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Calcul d'exponentielle d'une matrice nilpotente",
      "skill": "Calculer $\\exp(N)$ pour $N^2 = 0$",
      "statement": "Soit $N = \\begin{pmatrix} 0 & 3 \\\\ 0 & 0 \\end{pmatrix}$. Que vaut $\\exp(N)$ ?",
      "options": [
        "$\\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & e^3 \\\\ 0 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0 & 3 \\\\ 0 & 0 \\end{pmatrix}$",
        "$\\begin{pmatrix} e & 3e \\\\ 0 & e \\end{pmatrix}$"
      ],
      "correctIndex": 0,
      "answer": "$\\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}$",
      "hint1": "Comme $N^2 = 0$, la série exponentielle $\\sum_{k=0}^\\infty \\frac{N^k}{k!}$ s'arrête à $k=1$.",
      "hint2": "$\\exp(N) = I_2 + N$.",
      "solution": "Comme $N^2 = 0$, tous les termes d'ordre $k \\ge 2$ sont nuls. Ainsi $\\exp(N) = I_2 + N = \\begin{pmatrix} 1 & 3 \\\\ 0 & 1 \\end{pmatrix}$."
    }
  ],
  "L2-DUA": [
    {
      "id": "L2-DUA-1",
      "tier": 1,
      "type": "mcq",
      "title": "Dimension du dual d'un espace vectoriel",
      "skill": "Connaître la dimension de $E^*$",
      "statement": "Soit $E$ un espace vectoriel de dimension finie $n$. Quelle est la dimension de son espace dual $E^* = \\mathcal{L}(E, K)$ ?",
      "options": [
        "$n$",
        "$n^2$",
        "$2^n$",
        "$n - 1$"
      ],
      "correctIndex": 0,
      "answer": "$n$",
      "hint1": "$E^* = \\mathcal{L}(E, K)$, avec $\\dim(K) = 1$.",
      "hint2": "$\\dim \\mathcal{L}(E, F) = \\dim E \\times \\dim F = n \\times 1 = n$.",
      "solution": "En dimension finie, l'espace dual $E^*$ a la même dimension que $E$ : $\\dim(E^*) = \\dim(E) = n$."
    },
    {
      "id": "L2-DUA-2",
      "tier": 2,
      "type": "mcq",
      "title": "Orthogonal dual d'un sous-espace",
      "skill": "Calculer la dimension de l'orthogonal dual $F^\\circ$",
      "statement": "Soit $F$ un sous-espace vectoriel de dimension 2 dans un espace $E$ de dimension 5. Quelle est la dimension de $F^\\circ = \\{\\varphi \\in E^* \\mid \\varphi|_F = 0\\}$ ?",
      "options": [
        "$3$",
        "$2$",
        "$5$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$3$",
      "hint1": "Formule fondamentale : $\\dim F + \\dim F^\\circ = \\dim E$.",
      "hint2": "$\\dim F^\\circ = 5 - 2 = 3$.",
      "solution": "En dimension finie, on a $\\dim(F) + \\dim(F^\\circ) = \\dim(E)$. Donc $\\dim(F^\\circ) = 5 - 2 = 3$."
    },
    {
      "id": "L2-DUA-3",
      "tier": 3,
      "type": "mcq",
      "title": "Base duale d'une base de R^2",
      "skill": "Calculer les formes coordonnées de la base duale",
      "statement": "Soit la base $\\mathcal{B} = (e_1, e_2)$ de $\\mathbb{R}^2$ avec $e_1 = (1, 1)$ et $e_2 = (1, -1)$. Pour $x = (u, v)$, que vaut la forme linéaire $e_1^*(x)$ ?",
      "options": [
        "$\\frac{u + v}{2}$",
        "$\\frac{u - v}{2}$",
        "$u + v$",
        "$u$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{u + v}{2}$",
      "hint1": "Écris $(u, v) = c_1 e_1 + c_2 e_2$. Alors $e_1^*(x) = c_1$.",
      "hint2": "$c_1 + c_2 = u$ et $c_1 - c_2 = v \\implies 2c_1 = u + v$.",
      "solution": "On a $(u, v) = c_1(1, 1) + c_2(1, -1) \\iff c_1 + c_2 = u$ et $c_1 - c_2 = v$. En sommant : $2c_1 = u + v \\iff c_1 = \\frac{u+v}{2}$. Donc $e_1^*(x) = \\frac{u+v}{2}$."
    },
    {
      "id": "L2-DUA-4",
      "tier": 4,
      "type": "mcq",
      "title": "Équation d'un hyperplan vectoriel",
      "skill": "Caractériser les hyperplans par les formes linéaires",
      "statement": "Tout hyperplan $H$ d'un espace vectoriel $E$ est le noyau :",
      "options": [
        "D'une forme linéaire non nulle $\\varphi \\in E^*$, unique à scalaire non nul près",
        "D'un projecteur bijectif",
        "De l'application nulle uniquement",
        "D'une forme bilinéaire symétrique dégénérée"
      ],
      "correctIndex": 0,
      "answer": "D'une forme linéaire non nulle $\\varphi \\in E^*$, unique à scalaire non nul près",
      "hint1": "Par définition, $\\text{codim}(H) = 1$, donc par le théorème du rang, son équation provient d'une forme linéaire dans le corps $K$.",
      "hint2": "$H = \\ker \\varphi$ avec $\\varphi \\ne 0$.",
      "solution": "Un sous-espace $H$ est un hyperplan si et seulement s'il existe une forme linéaire non nulle $\\varphi$ telle que $H = \\ker(\\varphi)$, deux formes ayant même noyau étant proportionnelles."
    }
  ],
  "L2-PRE": [
    {
      "id": "L2-PRE-1",
      "tier": 1,
      "type": "mcq",
      "title": "Inégalité de Cauchy-Schwarz",
      "skill": "Énoncer l'inégalité de Cauchy-Schwarz",
      "statement": "Pour tous vecteurs $x, y$ d'un espace préhilbertien réel muni du produit scalaire $\\langle \\cdot, \\cdot \\rangle$, que vaut l'inégalité de Cauchy-Schwarz ?",
      "options": [
        "$|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$",
        "$\\langle x, y \\rangle \\ge \\|x\\| + \\|y\\|$",
        "$\\|x + y\\| = \\|x\\| + \\|y\\|$",
        "$|\\langle x, y \\rangle| = \\|x\\|^2 \\|y\\|^2$"
      ],
      "correctIndex": 0,
      "answer": "$|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$",
      "hint1": "Le produit scalaire est majoré en valeur absolue par le produit des normes.",
      "hint2": "Cas d'égalité si et seulement si $x$ et $y$ sont colinéaires.",
      "solution": "L'inégalité fondamentale de Cauchy-Schwarz s'écrit $|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$, avec égalité si et seulement si la famille $(x, y)$ est liée."
    },
    {
      "id": "L2-PRE-2",
      "tier": 2,
      "type": "mcq",
      "title": "Procédé de Gram-Schmidt",
      "skill": "Orthonormaliser une famille de vecteurs",
      "statement": "Dans $\\mathbb{R}^2$ muni du produit scalaire usuel, en partant de $v_1 = (1, 0)$ et $v_2 = (1, 1)$, que vaut le deuxième vecteur orthogonal $u_2$ obtenu par Gram-Schmidt ?",
      "options": [
        "$(0, 1)$",
        "$(1, -1)$",
        "$(-1, 0)$",
        "$(1, 0)$"
      ],
      "correctIndex": 0,
      "answer": "$(0, 1)$",
      "hint1": "$u_2 = v_2 - \\frac{\\langle v_2, u_1 \\rangle}{\\|u_1\\|^2} u_1$.",
      "hint2": "$\\langle v_2, u_1 \\rangle = 1 \\times 1 + 1 \\times 0 = 1$. Donc $u_2 = (1, 1) - 1(1, 0) = (0, 1)$.",
      "solution": "Par Gram-Schmidt : $u_1 = (1, 0)$ et $u_2 = v_2 - \\langle v_2, u_1 \\rangle u_1 = (1, 1) - 1(1, 0) = (0, 1)$. Les vecteurs sont orthogonaux."
    },
    {
      "id": "L2-PRE-3",
      "tier": 3,
      "type": "mcq",
      "title": "Distance à un sous-espace et projection",
      "skill": "Calculer la distance d'un point à un sous-espace vectoriel",
      "statement": "Si $p_F(x)$ désigne le projeté orthogonal de $x$ sur un sous-espace de dimension finie $F$, quelle relation caractérise la distance $d(x, F)$ ?",
      "options": [
        "$d(x, F) = \\|x - p_F(x)\\| = \\min_{y \\in F} \\|x - y\\|$",
        "$d(x, F) = \\|p_F(x)\\|$",
        "$d(x, F) = \\|x\\| + \\|p_F(x)\\|$",
        "$d(x, F) = 0$ pour tout $x$"
      ],
      "correctIndex": 0,
      "answer": "$d(x, F) = \\|x - p_F(x)\\| = \\min_{y \\in F} \\|x - y\\|$",
      "hint1": "Le projeté orthogonal réalise le minimum de la distance à tout élément du sous-espace.",
      "hint2": "Théorème de la meilleure approximation en norme euclidienne.",
      "solution": "D'après le théorème de projection orthogonale, $p_F(x)$ est l'unique élément de $F$ qui minimise la distance à $x$, donc $d(x, F) = \\|x - p_F(x)\\|$."
    },
    {
      "id": "L2-PRE-4",
      "tier": 4,
      "type": "mcq",
      "title": "Identité du parallélogramme",
      "skill": "Caractériser les normes issues d'un produit scalaire",
      "statement": "Une norme $\\|\\cdot\\|$ découle d'un produit scalaire réel si et seulement si elle satisfait l'identité du parallélogramme :",
      "options": [
        "$\\|x + y\\|^2 + \\|x - y\\|^2 = 2\\|x\\|^2 + 2\\|y\\|^2$",
        "$\\|x + y\\| \\le \\|x\\| + \\|y\\|$",
        "$\\|x - y\\|^2 = \\|x\\|^2 - \\|y\\|^2$",
        "$\\|x + y\\|^2 = \\|x\\|^2 + \\|y\\|^2$"
      ],
      "correctIndex": 0,
      "answer": "$\\|x + y\\|^2 + \\|x - y\\|^2 = 2\\|x\\|^2 + 2\\|y\\|^2$",
      "hint1": "Théorème de Fréchet-von Neumann-Jordan.",
      "hint2": "La somme des carrés des diagonales est égale à la somme des carrés des 4 côtés d'un parallélogramme.",
      "solution": "Le théorème de Jordan-von Neumann stipule qu'une norme est issue d'un produit scalaire si et seulement si elle vérifie l'identité du parallélogramme $\\|x + y\\|^2 + \\|x - y\\|^2 = 2\\|x\\|^2 + 2\\|y\\|^2$."
    }
  ],
  "L2-SYM": [
    {
      "id": "L2-SYM-1",
      "tier": 1,
      "type": "mcq",
      "title": "Spectre d'une matrice symétrique réelle",
      "skill": "Propriétés spectrales fondamentales de $\\mathcal{S}_n(\\mathbb{R})$",
      "statement": "Toute matrice symétrique réelle $A \\in \\mathcal{S}_n(\\mathbb{R})$ a toutes ses valeurs propres :",
      "options": [
        "Réelles",
        "Strictement positives",
        "Imaginaires pures",
        "De module 1"
      ],
      "correctIndex": 0,
      "answer": "Réelles",
      "hint1": "Théorème spectral fondamental pour les endomorphismes autoadjoints réels.",
      "hint2": "Si $Ax = \\lambda x$, alors $\\bar{x}^T A x = \\lambda \\bar{x}^T x$ montre que $\\bar{\\lambda} = \\lambda$.",
      "solution": "Les valeurs propres de toute matrice symétrique à coefficients réels sont toutes réelles, et la matrice est diagonalisable dans une base orthonormée."
    },
    {
      "id": "L2-SYM-2",
      "tier": 2,
      "type": "mcq",
      "title": "Théorème spectral",
      "skill": "Diagonalisation dans une base orthonormée",
      "statement": "D'après le théorème spectral, si $A \\in \\mathcal{S}_n(\\mathbb{R})$, il existe une matrice orthogonale $P \\in \\mathcal{O}_n(\\mathbb{R})$ telle que :",
      "options": [
        "$A = P D P^T$ avec $D$ diagonale réelle",
        "$A = P D P^{-1}$ avec $D$ à diagonale imaginaire",
        "$A = P + D$",
        "$A^2 = I_n$"
      ],
      "correctIndex": 0,
      "answer": "$A = P D P^T$ avec $D$ diagonale réelle",
      "hint1": "Pour une matrice orthogonale, $P^{-1} = P^T$.",
      "hint2": "Les vecteurs propres associés à des valeurs propres distinctes sont deux à deux orthogonaux.",
      "solution": "Le théorème spectral garantit que toute matrice symétrique réelle est orthogonalement semblable à une matrice diagonale réelle : $A = P D P^T$ avec $P \\in \\mathcal{O}_n(\\mathbb{R})$."
    },
    {
      "id": "L2-SYM-3",
      "tier": 3,
      "type": "mcq",
      "title": "Matrices orthogonales et déterminant",
      "skill": "Propriétés du groupe orthogonal $\\mathcal{O}(n)$",
      "statement": "Quel est le déterminant possible d'une matrice orthogonale $P \\in \\mathcal{O}_n(\\mathbb{R})$ ?",
      "options": [
        "$\\pm 1$",
        "$1$ uniquement",
        "$0$",
        "N'importe quel réel non nul"
      ],
      "correctIndex": 0,
      "answer": "$\\pm 1$",
      "hint1": "$P^T P = I_n \\implies \\det(P^T P) = \\det(I_n) = 1$.",
      "hint2": "$\\det(P^T) = \\det(P)$, donc $(\\det P)^2 = 1$.",
      "solution": "Comme $P^T P = I_n$, on a $\\det(P^T P) = (\\det P)^2 = 1$, d'où $\\det(P) \\in \\{1, -1\\}$."
    },
    {
      "id": "L2-SYM-4",
      "tier": 4,
      "type": "mcq",
      "title": "Loi d'inertie de Sylvester",
      "skill": "Comprendre la signature d'une forme quadratique",
      "statement": "Soit $q(x, y) = x^2 - 4xy + 5y^2$. Quelle est la signature de cette forme quadratique sur $\\mathbb{R}^2$ ?",
      "options": [
        "$(2, 0)$",
        "$(1, 1)$",
        "$(0, 2)$",
        "$(1, 0)$"
      ],
      "correctIndex": 0,
      "answer": "$(2, 0)$",
      "hint1": "Réduis en carrés de Gauss : $x^2 - 4xy + 5y^2 = (x - 2y)^2 - 4y^2 + 5y^2$.",
      "hint2": "$(x - 2y)^2 + y^2$. Les deux coefficients devant les carrés sont $+1 > 0$.",
      "solution": "$q(x, y) = (x - 2y)^2 + y^2$. C'est une somme de deux carrés indépendants affectés de coefficients strictement positifs. La signature est $(2, 0)$ : la forme est définie positive."
    }
  ],
  "L2-SER": [
    {
      "id": "L2-SER-1",
      "tier": 1,
      "type": "mcq",
      "title": "Série de Riemann",
      "skill": "Connaître le critère de convergence de Riemann",
      "statement": "Pour quelle condition sur le réel $\\alpha$ la série $\\sum_{n=1}^\\infty \\frac{1}{n^\\alpha}$ converge-t-elle ?",
      "options": [
        "$\\alpha > 1$",
        "$\\alpha \\ge 1$",
        "$\\alpha > 0$",
        "Pour tout $\\alpha \\in \\mathbb{R}$"
      ],
      "correctIndex": 0,
      "answer": "$\\alpha > 1$",
      "hint1": "Pour $\\alpha = 1$, c'est la série harmonique divergente.",
      "hint2": "La série converge si et seulement si l'exposant est strictement supérieur à 1.",
      "solution": "D'après la règle de Riemann, la série $\\sum_{n=1}^\\infty \\frac{1}{n^\\alpha}$ converge si et seulement si $\\alpha > 1$."
    },
    {
      "id": "L2-SER-2",
      "tier": 2,
      "type": "mcq",
      "title": "Règle de d'Alembert pour les séries numériques",
      "skill": "Appliquer le critère du quotient",
      "statement": "Pour $u_n = \\frac{2^n}{n!}$, quelle est la limite de $\\frac{u_{n+1}}{u_n}$ quand $n \\to +\\infty$ ?",
      "options": [
        "$0$",
        "$2$",
        "$1$",
        "$+\\infty$"
      ],
      "correctIndex": 0,
      "answer": "$0$",
      "hint1": "$\\frac{u_{n+1}}{u_n} = \\frac{2^{n+1}}{(n+1)!} \\times \\frac{n!}{2^n} = \\frac{2}{n+1}$.",
      "hint2": "Quand $n \\to +\\infty$, $2/(n+1) \\to 0 < 1$.",
      "solution": "$\\frac{u_{n+1}}{u_n} = \\frac{2}{n+1} \\to 0 < 1$. Par la règle de d'Alembert, la série $\\sum \\frac{2^n}{n!}$ converge absolument."
    },
    {
      "id": "L2-SER-3",
      "tier": 3,
      "type": "mcq",
      "title": "Critère des séries alternées de Leibniz",
      "skill": "Majorer le reste d'une série alternée",
      "statement": "Pour la série alternée $S = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n}$, quelle majoration du reste $R_N = \\sum_{n=N+1}^\\infty \\frac{(-1)^{n-1}}{n}$ est garantie ?",
      "options": [
        "$|R_N| \\le \\frac{1}{N+1}$",
        "$|R_N| \\le \\frac{1}{N^2}$",
        "$|R_N| \\le 1$",
        "$|R_N| \\le \\frac{1}{N!}$"
      ],
      "correctIndex": 0,
      "answer": "$|R_N| \\le \\frac{1}{N+1}$",
      "hint1": "D'après le critère de Leibniz, la valeur absolue du reste est majorée par la valeur absolue du premier terme négligé.",
      "hint2": "Le premier terme négligé est $\\frac{(-1)^N}{N+1}$.",
      "solution": "Le critère spécial des séries alternées garantit que le reste d'ordre $N$ vérifie $|R_N| \\le |u_{N+1}| = \\frac{1}{N+1}$, et $R_N$ a le même signe que $u_{N+1}$."
    },
    {
      "id": "L2-SER-4",
      "tier": 4,
      "type": "mcq",
      "title": "Comparaison série-intégrale et constante d'Euler",
      "skill": "Déterminer un équivalent asymptotique des sommes partielles harmoniques",
      "statement": "Quel est le comportement asymptotique de $H_n = \\sum_{k=1}^n \\frac{1}{k}$ quand $n \\to +\\infty$ ?",
      "options": [
        "$H_n = \\ln(n) + \\gamma + o(1)$",
        "$H_n = n + o(1)$",
        "$H_n = \\sqrt{n} + o(1)$",
        "$H_n = \\frac{\\pi^2}{6} + o(1)$"
      ],
      "correctIndex": 0,
      "answer": "$H_n = \\ln(n) + \\gamma + o(1)$",
      "hint1": "Compare la somme à l'intégrale $\\int_1^n \\frac{dt}{t} = \\ln(n)$.",
      "hint2": "$\\gamma \\approx 0.5772$ est la constante d'Euler-Mascheroni.",
      "solution": "Par comparaison série-intégrale, la série harmonique vérifie le développement asymptotique classique $H_n = \\ln(n) + \\gamma + o(1)$, où $\\gamma$ est la constante d'Euler-Mascheroni."
    }
  ],
  "L2-RIE": [
    {
      "id": "L2-RIE-1",
      "tier": 1,
      "type": "mcq",
      "title": "Convergence uniforme et continuité",
      "skill": "Théorème de continuité de la limite uniforme",
      "statement": "Soit $(f_n)$ une suite de fonctions continues sur $I$ convergeant uniformément vers $f$ sur $I$. Que peut-on affirmer sur $f$ ?",
      "options": [
        "$f$ est continue sur $I$",
        "$f$ est dérivable sur $I$",
        "$f$ est constante",
        "$f$ est bornée uniquement si $I$ est ouvert"
      ],
      "correctIndex": 0,
      "answer": "$f$ est continue sur $I$",
      "hint1": "La convergence uniforme transmet la continuité à la limite.",
      "hint2": "Ce n'est pas vrai pour la simple convergence ponctuelle (ex: $x^n$ sur $[0, 1]$).",
      "solution": "D'après le théorème de continuité pour les suites de fonctions, la limite uniforme d'une suite de fonctions continues est continue."
    },
    {
      "id": "L2-RIE-2",
      "tier": 2,
      "type": "mcq",
      "title": "Règle de Leibniz de dérivation sous le signe intégral",
      "skill": "Dériver une intégrale à paramètre",
      "statement": "Pour $F(x) = \\int_0^1 e^{-x t^2} dt$, quelle est l'expression de la dérivée $F'(x)$ ?",
      "options": [
        "$-\\int_0^1 t^2 e^{-x t^2} dt$",
        "$\\int_0^1 e^{-x t^2} dt$",
        "$-x \\int_0^1 t e^{-x t^2} dt$",
        "$e^{-x}$"
      ],
      "correctIndex": 0,
      "answer": "$-\\int_0^1 t^2 e^{-x t^2} dt$",
      "hint1": "Dérive l'intégrande par rapport à $x$ : $\\frac{\\partial}{\\partial x}(e^{-x t^2}) = -t^2 e^{-x t^2}$.",
      "hint2": "L'intervalle d'intégration est compact, les hypothèses de domination sont trivialement satisfaites.",
      "solution": "Par le théorème de dérivation sous le signe intégral : $F'(x) = \\int_0^1 \\frac{\\partial}{\\partial x}(e^{-xt^2}) dt = -\\int_0^1 t^2 e^{-xt^2} dt$."
    },
    {
      "id": "L2-RIE-3",
      "tier": 3,
      "type": "mcq",
      "title": "Convergence normale d'une série de fonctions",
      "skill": "Vérifier la convergence normale $\\sum \\|u_n\\|_\\infty < \\infty$",
      "statement": "Pour $u_n(x) = \\frac{\\cos(nx)}{n^2}$ sur $\\mathbb{R}$, la série $\\sum_{n=1}^\\infty u_n(x)$ :",
      "options": [
        "Converge normalement sur $\\mathbb{R}$",
        "Ne converge que ponctuellement",
        "Diverge pour $x = 0$",
        "Converge uniformément mais pas normalement"
      ],
      "correctIndex": 0,
      "answer": "Converge normalement sur $\\mathbb{R}$",
      "hint1": "Majore $|u_n(x)|$ par une constante indépendante de $x$.",
      "hint2": "$\\sup_{x \\in \\mathbb{R}} |u_n(x)| = \\frac{1}{n^2}$, et $\\sum \\frac{1}{n^2}$ converge.",
      "solution": "Pour tout $x \\in \\mathbb{R}$, $|u_n(x)| \\le \\frac{1}{n^2}$. Comme la série numérique $\\sum 1/n^2$ converge (série de Riemann avec $\\alpha=2 > 1$), la série de fonctions converge normalement sur $\\mathbb{R}$."
    },
    {
      "id": "L2-RIE-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème de convergence dominée pour intégrales à paramètre",
      "skill": "Permuter limite et intégrale impropre",
      "statement": "Quelle est la limite quand $n \\to +\\infty$ de $I_n = \\int_0^{+\\infty} \\frac{n \\sin(x/n)}{x(1 + x^2)} dx$ ?",
      "options": [
        "$\\frac{\\pi}{2}$",
        "$0$",
        "$1$",
        "$+\\infty$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{\\pi}{2}$",
      "hint1": "Pour tout $x > 0$ fixé, quand $n \\to +\\infty$, $n \\sin(x/n) = x \\frac{\\sin(x/n)}{x/n} \\to x$.",
      "hint2": "La limite de l'intégrande est $\\frac{x}{x(1+x^2)} = \\frac{1}{1+x^2}$, et $\\int_0^{+\\infty} \\frac{dx}{1+x^2} = [\\arctan x]_0^{+\\infty} = \\frac{\\pi}{2}$.",
      "solution": "La suite de fonctions $f_n(x) = \\frac{n\\sin(x/n)}{x(1+x^2)}$ converge simplement vers $\\frac{1}{1+x^2}$ et est dominée par $\\frac{1}{1+x^2} \\in L^1([0, +\\infty[)$. Par le TCD, $\\lim I_n = \\int_0^{+\\infty} \\frac{dx}{1+x^2} = \\frac{\\pi}{2}$."
    }
  ],
  "L2-ING": [
    {
      "id": "L2-ING-1",
      "tier": 1,
      "type": "mcq",
      "title": "Rayon de convergence de l'exponentielle",
      "skill": "Calculer le rayon de convergence d'une série entière",
      "statement": "Quel est le rayon de convergence $R$ de la série entière $\\sum_{n=0}^\\infty \\frac{x^n}{n!}$ ?",
      "options": [
        "$+\\infty$",
        "$1$",
        "$0$",
        "$e$"
      ],
      "correctIndex": 0,
      "answer": "$+\\infty$",
      "hint1": "Par la règle de d'Alembert : $\\frac{a_{n+1}}{a_n} = \\frac{n!}{(n+1)!} = \\frac{1}{n+1} \\to 0$.",
      "hint2": "$R = 1 / \\lim |a_{n+1}/a_n| = 1/0 = +\\infty$.",
      "solution": "Comme $\\frac{a_{n+1}}{a_n} = \\frac{1}{n+1} \\to 0$, le rayon de convergence de la série entière de l'exponentielle est $R = +\\infty$."
    },
    {
      "id": "L2-ING-2",
      "tier": 2,
      "type": "mcq",
      "title": "Développement en série entière de 1/(1-x)",
      "skill": "Connaître le DSE de la série géométrique",
      "statement": "Pour tout $x \\in ]-1, 1[$, que vaut la somme $\\sum_{n=0}^\\infty x^n$ ?",
      "options": [
        "$\\frac{1}{1 - x}$",
        "$\\frac{1}{1 + x}$",
        "$\\ln(1 - x)$",
        "$e^x$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{1 - x}$",
      "hint1": "C'est la somme d'une série géométrique de premier terme 1 et de raison $x$.",
      "hint2": "$S = \\frac{1}{1 - x}$.",
      "solution": "Pour tout $|x| < 1$, la série géométrique $\\sum_{n=0}^\\infty x^n$ converge et sa somme vaut $\\frac{1}{1 - x}$."
    },
    {
      "id": "L2-ING-3",
      "tier": 3,
      "type": "mcq",
      "title": "Dérivation terme à terme d'une série entière",
      "skill": "Calculer la somme d'une série entière dérivée",
      "statement": "Pour $x \\in ]-1, 1[$, que vaut la somme $\\sum_{n=1}^\\infty n x^{n-1}$ ?",
      "options": [
        "$\\frac{1}{(1 - x)^2}$",
        "$\\frac{1}{1 - x}$",
        "$\\frac{x}{(1 - x)^2}$",
        "$\\ln(1 - x)$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{(1 - x)^2}$",
      "hint1": "C'est la dérivée terme à terme de $\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}$.",
      "hint2": "$(\\frac{1}{1-x})' = \\frac{1}{(1-x)^2}$.",
      "solution": "Sur le disque ouvert de convergence, on peut dériver terme à terme : $\\sum_{n=1}^\\infty n x^{n-1} = \\left( \\sum_{n=0}^\\infty x^n \\right)' = \\left( \\frac{1}{1-x} \\right)' = \\frac{1}{(1-x)^2}$."
    },
    {
      "id": "L2-ING-4",
      "tier": 4,
      "type": "mcq",
      "title": "Somme d'une série entière via équation différentielle",
      "skill": "Identifier la fonction somme par son équation différentielle",
      "statement": "Soit $S(x) = \\sum_{n=0}^\\infty \\frac{x^{2n}}{(2n)!}$. Quelle équation différentielle simple vérifie $S$ sur $\\mathbb{R}$ ?",
      "options": [
        "$S''(x) - S(x) = 0$ avec $S(0)=1, S'(0)=0$",
        "$S''(x) + S(x) = 0$",
        "$S'(x) + S(x) = 0$",
        "$x S'(x) - S(x) = 0$"
      ],
      "correctIndex": 0,
      "answer": "$S''(x) - S(x) = 0$ avec $S(0)=1, S'(0)=0$",
      "hint1": "$S(x) = \\cosh(x) = \\frac{e^x + e^{-x}}{2}$.",
      "hint2": "$\\cosh''(x) = \\cosh(x)$, donc $S'' - S = 0$.",
      "solution": "En dérivant deux fois terme à terme, $S''(x) = \\sum_{n=1}^\\infty \\frac{2n(2n-1)x^{2n-2}}{(2n)!} = \\sum_{m=0}^\\infty \\frac{x^{2m}}{(2m)!} = S(x)$. Comme $S(0)=1$ et $S'(0)=0$, $S(x) = \\cosh(x)$."
    }
  ],
  "L2-EDO": [
    {
      "id": "L2-EDO-1",
      "tier": 1,
      "type": "mcq",
      "title": "Équation caractéristique du second ordre",
      "skill": "Résoudre une EDO linéaire homogène à coefficients constants",
      "statement": "Quelle est la forme générale des solutions réelles de $y'' - 5y' + 6y = 0$ ?",
      "options": [
        "$y(x) = A e^{2x} + B e^{3x}$",
        "$y(x) = (A + Bx)e^{2x}$",
        "$y(x) = A \\cos(2x) + B \\sin(3x)$",
        "$y(x) = A e^{-2x} + B e^{-3x}$"
      ],
      "correctIndex": 0,
      "answer": "$y(x) = A e^{2x} + B e^{3x}$",
      "hint1": "L'équation caractéristique est $r^2 - 5r + 6 = 0$.",
      "hint2": "$r^2 - 5r + 6 = (r - 2)(r - 3) = 0 \\implies r_1 = 2, r_2 = 3$.",
      "solution": "L'équation caractéristique $r^2 - 5r + 6 = 0$ a pour racines distinctes $r_1 = 2$ et $r_2 = 3$. Les solutions réelles sont $y(x) = A e^{2x} + B e^{3x}$ avec $A, B \\in \\mathbb{R}$."
    },
    {
      "id": "L2-EDO-2",
      "tier": 2,
      "type": "mcq",
      "title": "Variation de la constante pour EDO d'ordre 1",
      "skill": "Résoudre une équation avec second membre",
      "statement": "Quelle est la solution générale de $y' - 2y = 4$ sur $\\mathbb{R}$ ?",
      "options": [
        "$y(x) = C e^{2x} - 2$",
        "$y(x) = C e^{2x} + 2$",
        "$y(x) = C e^{-2x} - 2$",
        "$y(x) = 2x + C$"
      ],
      "correctIndex": 0,
      "answer": "$y(x) = C e^{2x} - 2$",
      "hint1": "La solution homogène est $y_h(x) = C e^{2x}$.",
      "hint2": "Une solution particulière constante $y_p = k$ donne $-2k = 4 \\implies k = -2$.",
      "solution": "Solution homogène : $y_h(x) = C e^{2x}$. Solution particulière constante : $y_p(x) = -2$ car $0 - 2(-2) = 4$. Solution générale : $y(x) = C e^{2x} - 2$."
    },
    {
      "id": "L2-EDO-3",
      "tier": 3,
      "type": "mcq",
      "title": "Oscillateur harmonique et résonance",
      "skill": "Identifier la solution d'une équation différentielle oscillante",
      "statement": "Quelle est l'unique solution du problème de Cauchy $y'' + 4y = 0$ avec $y(0) = 1$ et $y'(0) = 2$ ?",
      "options": [
        "$y(x) = \\cos(2x) + \\sin(2x)$",
        "$y(x) = \\cos(4x) + 2\\sin(4x)$",
        "$y(x) = e^{2x} + e^{-2x}$",
        "$y(x) = \\cos(2x) + 2\\sin(2x)$"
      ],
      "correctIndex": 0,
      "answer": "$y(x) = \\cos(2x) + \\sin(2x)$",
      "hint1": "$y(x) = A \\cos(2x) + B \\sin(2x)$.",
      "hint2": "$y(0) = A = 1$ et $y'(0) = 2B = 2 \\implies B = 1$.",
      "solution": "L'équation caractéristique $r^2 + 4 = 0$ donne $r = \\pm 2i$. La solution est $y(x) = A\\cos(2x) + B\\sin(2x)$. $y(0)=1 \\implies A=1$. $y'(x) = -2A\\sin(2x) + 2B\\cos(2x) \\implies y'(0) = 2B = 2 \\implies B=1$. D'où $y(x) = \\cos(2x) + \\sin(2x)$."
    },
    {
      "id": "L2-EDO-4",
      "tier": 4,
      "type": "mcq",
      "title": "Système différentiel linéaire et exponentielle de matrice",
      "skill": "Résoudre $X' = AX$",
      "statement": "Pour le système $X' = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix} X$, que vaut la matrice de transition $\\exp(tA)$ ?",
      "options": [
        "$\\begin{pmatrix} \\cos t & \\sin t \\\\ -\\sin t & \\cos t \\end{pmatrix}$",
        "$\\begin{pmatrix} e^t & 0 \\\\ 0 & e^{-t} \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & t \\\\ -t & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} \\cosh t & \\sinh t \\\\ \\sinh t & \\cosh t \\end{pmatrix}$"
      ],
      "correctIndex": 0,
      "answer": "$\\begin{pmatrix} \\cos t & \\sin t \\\\ -\\sin t & \\cos t \\end{pmatrix}$",
      "hint1": "Remarque que $A^2 = -I_2$. $A$ joue le rôle de $i$.",
      "hint2": "Par la formule d'Euler pour les matrices : $\\exp(tA) = \\cos(t) I_2 + \\sin(t) A$.",
      "solution": "Comme $A^2 = -I_2$, on a $\\exp(tA) = \\sum_{k=0}^\\infty \\frac{t^k A^k}{k!} = \\cos(t) I_2 + \\sin(t) A = \\begin{pmatrix} \\cos t & \\sin t \\\\ -\\sin t & \\cos t \\end{pmatrix}$."
    }
  ],
  "L2-PAR": [
    {
      "id": "L2-PAR-1",
      "tier": 1,
      "type": "mcq",
      "title": "Calcul de gradient",
      "skill": "Calculer les dérivées partielles premières d'une fonction de deux variables",
      "statement": "Pour $f(x, y) = x^2 y + 3xy^2$, que vaut le gradient $\\nabla f(1, 2)$ ?",
      "options": [
        "$(16, 13)$",
        "$(12, 14)$",
        "$(10, 8)$",
        "$(15, 12)$"
      ],
      "correctIndex": 0,
      "answer": "$(16, 13)$",
      "hint1": "$\\frac{\\partial f}{\\partial x} = 2xy + 3y^2$ et $\\frac{\\partial f}{\\partial y} = x^2 + 6xy$.",
      "hint2": "En $(1, 2)$ : $\\partial_x f = 2(2) + 3(4) = 4 + 12 = 16$. $\\partial_y f = 1 + 6(2) = 13$.",
      "solution": "$\\frac{\\partial f}{\\partial x}(1, 2) = 2(1)(2) + 3(2^2) = 4 + 12 = 16$. $\\frac{\\partial f}{\\partial y}(1, 2) = 1^2 + 6(1)(2) = 13$. Donc $\\nabla f(1, 2) = (16, 13)$."
    },
    {
      "id": "L2-PAR-2",
      "tier": 2,
      "type": "mcq",
      "title": "Règle de la chaîne",
      "skill": "Dériver une fonction composée multivariable",
      "statement": "Soit $f(x, y) = x^2 + y^2$ et $\\gamma(t) = (\\cos t, \\sin t)$. Que vaut la dérivée $\\frac{d}{dt}[f(\\gamma(t))]$ ?",
      "options": [
        "$0$",
        "$2\\cos t \\sin t$",
        "$2$",
        "$-\\sin t + \\cos t$"
      ],
      "correctIndex": 0,
      "answer": "$0$",
      "hint1": "$f(\\gamma(t)) = \\cos^2 t + \\sin^2 t = 1$.",
      "hint2": "La dérivée d'une constante est nulle.",
      "solution": "$f(\\gamma(t)) = \\cos^2(t) + \\sin^2(t) = 1$ pour tout $t$. Sa dérivée par rapport à $t$ est donc identiquement nulle : $0$."
    },
    {
      "id": "L2-PAR-3",
      "tier": 3,
      "type": "mcq",
      "title": "Matrice hessienne et point critique",
      "skill": "Déterminer la nature d'un point critique",
      "statement": "Pour $f(x, y) = x^2 - y^2$, le point $(0, 0)$ est un point critique. Quelle est sa nature ?",
      "options": [
        "Point col (point selle)",
        "Minimum local strict",
        "Maximum local strict",
        "Extremum global"
      ],
      "correctIndex": 0,
      "answer": "Point col (point selle)",
      "hint1": "La matrice hessienne est $H = \\begin{pmatrix} 2 & 0 \\\\ 0 & -2 \\end{pmatrix}$.",
      "hint2": "Les valeurs propres sont $2 > 0$ et $-2 < 0$ : signes opposés.",
      "solution": "La hessienne en $(0,0)$ admet pour valeurs propres $2$ et $-2$. Comme elles sont de signes opposés, $(0,0)$ est un point col (point selle)."
    },
    {
      "id": "L2-PAR-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème de Schwarz",
      "skill": "Symétrie des dérivées partielles secondes croisées",
      "statement": "Que garantit le théorème de Schwarz pour une fonction $f : U \\subset \\mathbb{R}^2 \\to \\mathbb{R}$ de classe $\\mathcal{C}^2$ ?",
      "options": [
        "$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$",
        "$\\Delta f = 0$",
        "$\\frac{\\partial f}{\\partial x} = \\frac{\\partial f}{\\partial y}$",
        "La matrice hessienne est de trace nulle"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$",
      "hint1": "L'ordre des dérivations partielles peut être interverti si la fonction est $\\mathcal{C}^2$.",
      "hint2": "La matrice hessienne d'une fonction $\\mathcal{C}^2$ est symétrique.",
      "solution": "Le théorème de Schwarz affirme que pour toute fonction de classe $\\mathcal{C}^2$, les dérivées partielles croisées sont égales : $\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$."
    }
  ],
  "L2-MUL": [
    {
      "id": "L2-MUL-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Fubini sur un rectangle",
      "skill": "Calculer une intégrale double par produit d'intégrales",
      "statement": "Que vaut l'intégrale double $I = \\iint_{[0, 1] \\times [0, 2]} x y^2 dx dy$ ?",
      "options": [
        "$\\frac{4}{3}$",
        "$\\frac{2}{3}$",
        "$2$",
        "$4$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{4}{3}$",
      "hint1": "Par Fubini, $I = \\left( \\int_0^1 x dx \\right) \\times \\left( \\int_0^2 y^2 dy \\right)$.",
      "hint2": "$[x^2/2]_0^1 = 1/2$ et $[y^3/3]_0^2 = 8/3$. $1/2 \\times 8/3 = 4/3$.",
      "solution": "Par séparation des variables : $I = \\left[ \\frac{x^2}{2} \\right]_0^1 \\times \\left[ \\frac{y^3}{3} \\right]_0^2 = \\frac{1}{2} \\times \\frac{8}{3} = \\frac{4}{3}$."
    },
    {
      "id": "L2-MUL-2",
      "tier": 2,
      "type": "mcq",
      "title": "Passage en coordonnées polaires",
      "skill": "Appliquer le changement de variables avec jacobien",
      "statement": "Quel est le jacobien $J$ de la transformation en coordonnées polaires $(x, y) = (r\\cos\\theta, r\\sin\\theta)$ ?",
      "options": [
        "$r$",
        "$r^2$",
        "$1$",
        "$r\\cos\\theta$"
      ],
      "correctIndex": 0,
      "answer": "$r$",
      "hint1": "$dx dy = |J| dr d\\theta$.",
      "hint2": "Le déterminant de la matrice jacobienne vaut $r\\cos^2\\theta + r\\sin^2\\theta = r$.",
      "solution": "La matrice jacobienne est $\\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix}$. Son déterminant vaut $r(\\cos^2\\theta + \\sin^2\\theta) = r$."
    },
    {
      "id": "L2-MUL-3",
      "tier": 3,
      "type": "mcq",
      "title": "Intégrale de Gauss",
      "skill": "Calculer l'intégrale de Gauss par passage au plan",
      "statement": "Quelle est la valeur exacte de l'intégrale $I = \\int_{-\\infty}^{+\\infty} e^{-x^2} dx$ ?",
      "options": [
        "$\\sqrt{\\pi}$",
        "$\\pi$",
        "$\\frac{\\sqrt{\\pi}}{2}$",
        "$1$"
      ],
      "correctIndex": 0,
      "answer": "$\\sqrt{\\pi}$",
      "hint1": "Calcule $I^2 = \\iint_{\\mathbb{R}^2} e^{-(x^2+y^2)} dx dy$ en coordonnées polaires.",
      "hint2": "$I^2 = \\int_0^{2\\pi} d\\theta \\int_0^{+\\infty} r e^{-r^2} dr = 2\\pi \\times \\frac{1}{2} = \\pi$.",
      "solution": "$I^2 = \\int_0^{2\\pi} d\\theta \\int_0^{+\\infty} r e^{-r^2} dr = 2\\pi \\left[ -\\frac{e^{-r^2}}{2} \\right]_0^{+\\infty} = 2\\pi \\left(0 - \\left(-\\frac{1}{2}\\right)\\right) = \\pi$. Donc $I = \\sqrt{\\pi}$."
    },
    {
      "id": "L2-MUL-4",
      "tier": 4,
      "type": "mcq",
      "title": "Volume d'une sphère en coordonnées sphériques",
      "skill": "Calculer un volume par intégrale triple",
      "statement": "Quel est l'élément de volume $dV$ en coordonnées sphériques $(r, \\theta, \\varphi)$ ?",
      "options": [
        "$r^2 \\sin\\theta \\, dr d\\theta d\\varphi$",
        "$r \\sin\\theta \\, dr d\\theta d\\varphi$",
        "$r^2 \\, dr d\\theta d\\varphi$",
        "$r^3 \\cos\\theta \\, dr d\\theta d\\varphi$"
      ],
      "correctIndex": 0,
      "answer": "$r^2 \\sin\\theta \\, dr d\\theta d\\varphi$",
      "hint1": "Le jacobien du passage en sphériques comporte un facteur $r^2 \\sin\\theta$.",
      "hint2": "L'intégration sur la boule de rayon $R$ donne $\\frac{4}{3}\\pi R^3$.",
      "solution": "Le jacobien de la transformation sphérique $(x=r\\sin\\theta\\cos\\varphi, y=r\\sin\\theta\\sin\\varphi, z=r\\cos\\theta)$ est $r^2 \\sin\\theta$, d'où $dV = r^2 \\sin\\theta \\, dr d\\theta d\\varphi$."
    }
  ],
  "L2-CRB": [
    {
      "id": "L2-CRB-1",
      "tier": 1,
      "type": "mcq",
      "title": "Circulation d'un champ de vecteurs",
      "skill": "Définition de l'intégrale curviligne",
      "statement": "La circulation d'un champ de vecteurs $\\vec{V}$ le long d'une courbe orientée $\\gamma$ paramétrée par $t \\in [a, b]$ est donnée par :",
      "options": [
        "$\\int_a^b \\vec{V}(\\gamma(t)) \\cdot \\gamma'(t) dt$",
        "$\\int_a^b \\|\\vec{V}(\\gamma(t))\\| dt$",
        "$\\int_a^b \\vec{V}(\\gamma(t)) \\times \\gamma'(t) dt$",
        "$\\vec{V}(b) - \\vec{V}(a)$"
      ],
      "correctIndex": 0,
      "answer": "$\\int_a^b \\vec{V}(\\gamma(t)) \\cdot \\gamma'(t) dt$",
      "hint1": "C'est le produit scalaire du champ par le vecteur vitesse tangentiel.",
      "hint2": "Formule du travail élémentaire $dW = \\vec{F} \\cdot d\\vec{r}$.",
      "solution": "La circulation d'un champ $\\vec{V}$ le long de l'arc paramétré $\\gamma$ est l'intégrale du produit scalaire $\\int_a^b \\vec{V}(\\gamma(t)) \\cdot \\gamma'(t) dt$."
    },
    {
      "id": "L2-CRB-2",
      "tier": 2,
      "type": "mcq",
      "title": "Forme différentielle exacte et potentiel",
      "skill": "Vérifier si une forme différentielle dérive d'un potentiel",
      "statement": "La forme différentielle $\\omega = 2xy dx + x^2 dy$ est-elle exacte sur $\\mathbb{R}^2$ ?",
      "options": [
        "Oui, elle dérive du potentiel $f(x, y) = x^2 y$",
        "Non, car elle n'est pas fermée",
        "Non, car son intégrale est toujours non nulle",
        "Oui, avec $f(x, y) = 2xy$"
      ],
      "correctIndex": 0,
      "answer": "Oui, elle dérive du potentiel $f(x, y) = x^2 y$",
      "hint1": "Calcule $df = \\frac{\\partial f}{\\partial x}dx + \\frac{\\partial f}{\\partial y}dy$.",
      "hint2": "Pour $f(x, y) = x^2 y$, $\\partial_x f = 2xy$ et $\\partial_y f = x^2$.",
      "solution": "Pour $f(x, y) = x^2 y$, on a $df = 2xy dx + x^2 dy = \\omega$. Comme $\\omega = df$, la forme est exacte sur $\\mathbb{R}^2$."
    },
    {
      "id": "L2-CRB-3",
      "tier": 3,
      "type": "mcq",
      "title": "Formule de Green-Riemann",
      "skill": "Relier une intégrale curviligne fermée à une intégrale double",
      "statement": "Pour un lacet orienté positivement bordant un domaine $D$, que stipule la formule de Green-Riemann ?",
      "options": [
        "$\\oint_{\\partial D} P dx + Q dy = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dx dy$",
        "$\\oint_{\\partial D} P dx + Q dy = \\iint_D (P + Q) dx dy$",
        "$\\oint_{\\partial D} P dx + Q dy = 0$ toujours",
        "$\\oint_{\\partial D} P dx + Q dy = \\text{Aire}(D)$"
      ],
      "correctIndex": 0,
      "answer": "$\\oint_{\\partial D} P dx + Q dy = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dx dy$",
      "hint1": "C'est la version bidimensionnelle du théorème de Stokes.",
      "hint2": "Elle fait intervenir le rotationnel scalaire $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}$.",
      "solution": "La formule de Green-Riemann établit l'égalité $\\oint_{\\partial D} P dx + Q dy = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dx dy$."
    },
    {
      "id": "L2-CRB-4",
      "tier": 4,
      "type": "mcq",
      "title": "Lemme de Poincaré sur un ouvert étoilé",
      "skill": "Conditions d'équivalence entre forme fermée et forme exacte",
      "statement": "Que garantit le lemme de Poincaré sur un ouvert étoilé $U \\subset \\mathbb{R}^n$ ?",
      "options": [
        "Toute forme différentielle fermée sur $U$ est exacte",
        "Toute fonction dérivable est constante",
        "Tout ouvert étoilé est compact",
        "Les intégrales curvilignes sont nulles sur tout chemin"
      ],
      "correctIndex": 0,
      "answer": "Toute forme différentielle fermée sur $U$ est exacte",
      "hint1": "Sur un ouvert contractile ou étoilé, la cohomologie de de Rham d'ordre 1 est triviale.",
      "hint2": "Fermée ($d\\omega = 0$) $\\implies$ exacte ($\\omega = df$).",
      "solution": "Le lemme de Poincaré affirme que sur tout ouvert étoilé (ou simplement connexe) de $\\mathbb{R}^n$, toute forme différentielle fermée ($d\\omega = 0$) est exacte (il existe $\\alpha$ telle que $\\omega = d\\alpha$)."
    }
  ],
  "L2-PRB": [
    {
      "id": "L2-PRB-1",
      "tier": 1,
      "type": "mcq",
      "title": "Espérance d'une loi géométrique",
      "skill": "Connaître les moments d'une loi discrète usuelle",
      "statement": "Soit $X \\sim \\mathcal{G}(p)$ une variable aléatoire suivant une loi géométrique de paramètre $p \\in ]0, 1]$. Quelle est son espérance $\\mathbb{E}[X]$ ?",
      "options": [
        "$\\frac{1}{p}$",
        "$\\frac{1-p}{p}$",
        "$p$",
        "$\\frac{1}{p^2}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{p}$",
      "hint1": "La loi géométrique modélise le rang du premier succès dans une suite d'épreuves indépendantes.",
      "hint2": "$\\mathbb{E}[X] = \\sum_{k=1}^\\infty k p (1-p)^{k-1} = 1/p$.",
      "solution": "Pour une loi géométrique sur $\\mathbb{N}^*$, l'espérance est $\\mathbb{E}[X] = \\frac{1}{p}$ et la variance est $\\text{Var}(X) = \\frac{1-p}{p^2}$."
    },
    {
      "id": "L2-PRB-2",
      "tier": 2,
      "type": "mcq",
      "title": "Formule des probabilités totales",
      "skill": "Décomposer une probabilité sur un système complet d'événements",
      "statement": "Soit $(A_1, A_2)$ une partition de l'univers avec $\\mathbb{P}(A_1) = 0.4$, $\\mathbb{P}(A_2) = 0.6$. Si $\\mathbb{P}(B \\mid A_1) = 0.5$ et $\\mathbb{P}(B \\mid A_2) = 0.1$, que vaut $\\mathbb{P}(B)$ ?",
      "options": [
        "$0.26$",
        "$0.30$",
        "$0.20$",
        "$0.36$"
      ],
      "correctIndex": 0,
      "answer": "$0.26$",
      "hint1": "$\\mathbb{P}(B) = \\mathbb{P}(B \\mid A_1)\\mathbb{P}(A_1) + \\mathbb{P}(B \\mid A_2)\\mathbb{P}(A_2)$.",
      "hint2": "$0.5 \\times 0.4 + 0.1 \\times 0.6 = 0.20 + 0.06 = 0.26$.",
      "solution": "Par la formule des probabilités totales : $\\mathbb{P}(B) = 0.5(0.4) + 0.1(0.6) = 0.20 + 0.06 = 0.26$."
    },
    {
      "id": "L2-PRB-3",
      "tier": 3,
      "type": "mcq",
      "title": "Approximation de Poisson",
      "skill": "Convergence de la loi binomiale vers la loi de Poisson",
      "statement": "Quand $n \\to +\\infty$ avec $np = \\lambda$ constant, la loi binomiale $\\mathcal{B}(n, p)$ converge en loi vers :",
      "options": [
        "La loi de Poisson $\\mathcal{P}(\\lambda)$",
        "La loi normale $\\mathcal{N}(0, 1)$",
        "La loi exponentielle $\\mathcal{E}(\\lambda)$",
        "La loi géométrique $\\mathcal{G}(\\lambda)$"
      ],
      "correctIndex": 0,
      "answer": "La loi de Poisson $\\mathcal{P}(\\lambda)$",
      "hint1": "Théorème des événements rares de Poisson.",
      "hint2": "$\\binom{n}{k} p^k (1-p)^{n-k} \\to e^{-\\lambda} \\frac{\\lambda^k}{k!}$.",
      "solution": "D'après la loi des événements rares, si $n \\to +\\infty$ et $p \\to 0$ avec $np \\to \\lambda$, alors $\\mathcal{B}(n, p) \\xrightarrow{\\mathcal{L}} \\mathcal{P}(\\lambda)$."
    },
    {
      "id": "L2-PRB-4",
      "tier": 4,
      "type": "mcq",
      "title": "Formule de Bayes",
      "skill": "Calculer une probabilité a posteriori",
      "statement": "Un test médical a une sensibilité de 99% et une spécificité de 99%. Une maladie touche 1 personne sur 1000 ($p = 0.001$). Si un patient est testé positif, quelle est la probabilité approximative qu'il soit réellement malade ?",
      "options": [
        "$\\approx 9\\%$",
        "$\\approx 99\\%$",
        "$\\approx 50\\%$",
        "$\\approx 1\\%$"
      ],
      "correctIndex": 0,
      "answer": "$\\approx 9\\%$",
      "hint1": "Applique la formule de Bayes : $\\mathbb{P}(M \\mid +) = \\frac{\\mathbb{P}(+ \\mid M)\\mathbb{P}(M)}{\\mathbb{P}(+)}$.",
      "hint2": "Numérateur : $0.99 \\times 0.001 = 0.00099$. Dénominateur : $0.00099 + 0.01 \\times 0.999 \\approx 0.01098$. Rapport : $\\approx 0.09$.",
      "solution": "Par la formule de Bayes : $\\mathbb{P}(M \\mid +) = \\frac{0.99 \\times 0.001}{0.99 \\times 0.001 + 0.01 \\times 0.999} = \\frac{0.00099}{0.00099 + 0.00999} = \\frac{0.00099}{0.01098} \\approx 0.0901$, soit environ $9\\%$."
    }
  ],
  "L2-CAL": [
    {
      "id": "L2-CAL-1",
      "tier": 1,
      "type": "mcq",
      "title": "Inégalité de Markov",
      "skill": "Appliquer l'inégalité de concentration de Markov",
      "statement": "Pour une variable aléatoire $X$ positive d'espérance $\\mathbb{E}[X] = 10$, quelle est la majoration de $\\mathbb{P}(X \\ge 50)$ fournie par l'inégalité de Markov ?",
      "options": [
        "$\\le 0.2$",
        "$\\le 0.5$",
        "$\\le 0.04$",
        "$\\le 0.1$"
      ],
      "correctIndex": 0,
      "answer": "$\\le 0.2$",
      "hint1": "L'inégalité de Markov s'écrit $\\mathbb{P}(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a}$.",
      "hint2": "$\\frac{10}{50} = \\frac{1}{5} = 0.2$.",
      "solution": "Pour toute variable positive, $\\mathbb{P}(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a}$. Ici $\\mathbb{P}(X \\ge 50) \\le \\frac{10}{50} = 0.2$."
    },
    {
      "id": "L2-CAL-2",
      "tier": 2,
      "type": "mcq",
      "title": "Inégalité de Bienaymé-Tchebychev",
      "skill": "Estimer la dispersion autour de la moyenne",
      "statement": "Soit $X$ de moyenne $\\mu$ et de variance $\\sigma^2$. Que vaut la majoration de $\\mathbb{P}(|X - \\mu| \\ge 3\\sigma)$ ?",
      "options": [
        "$\\le \\frac{1}{9}$",
        "$\\le \\frac{1}{3}$",
        "$\\le \\frac{1}{27}$",
        "$\\le 0.05$"
      ],
      "correctIndex": 0,
      "answer": "$\\le \\frac{1}{9}$",
      "hint1": "Bienaymé-Tchebychev : $\\mathbb{P}(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}$.",
      "hint2": "Ici $k = 3$, donc $1/3^2 = 1/9$.",
      "solution": "Par l'inégalité de Bienaymé-Tchebychev avec $\\varepsilon = 3\\sigma$ : $\\mathbb{P}(|X - \\mu| \\ge 3\\sigma) \\le \\frac{\\sigma^2}{(3\\sigma)^2} = \\frac{1}{9}$."
    },
    {
      "id": "L2-CAL-3",
      "tier": 3,
      "type": "mcq",
      "title": "Covariance et variables indépendantes",
      "skill": "Propriétés de la covariance de deux variables",
      "statement": "Si deux variables aléatoires réelles $X$ et $Y$ sont indépendantes et admettent un moment d'ordre 2, que vaut leur covariance $\\text{Cov}(X, Y)$ ?",
      "options": [
        "$0$",
        "$1$",
        "$\\text{Var}(X) \\text{Var}(Y)$",
        "$\\mathbb{E}[X] \\mathbb{E}[Y]$"
      ],
      "correctIndex": 0,
      "answer": "$0$",
      "hint1": "$\\text{Cov}(X, Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y]$.",
      "hint2": "Par indépendance, $\\mathbb{E}[XY] = \\mathbb{E}[X]\\mathbb{E}[Y]$.",
      "solution": "Si $X$ et $Y$ sont indépendantes, alors $\\mathbb{E}[XY] = \\mathbb{E}[X]\\mathbb{E}[Y]$, donc $\\text{Cov}(X, Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y] = 0$."
    },
    {
      "id": "L2-CAL-4",
      "tier": 4,
      "type": "mcq",
      "title": "Loi faible des grands nombres",
      "skill": "Comprendre la convergence en probabilité de la moyenne empirique",
      "statement": "Soit $(X_n)$ une suite de variables i.i.d. d'espérance $\\mu$ et de variance finie $\\sigma^2$. Que stipule la Loi Faible des Grands Nombres pour $\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i$ ?",
      "options": [
        "$\\bar{X}_n$ converge en probabilité vers $\\mu$",
        "$\\bar{X}_n$ converge uniformément vers $\\sigma$",
        "$\\text{Var}(\\bar{X}_n) \\to \\sigma^2$",
        "$\\bar{X}_n = \\mu$ pour tout $n$"
      ],
      "correctIndex": 0,
      "answer": "$\\bar{X}_n$ converge en probabilité vers $\\mu$",
      "hint1": "$\\mathbb{P}(|\\bar{X}_n - \\mu| \\ge \\varepsilon) \\le \\frac{\\sigma^2}{n\\varepsilon^2} \\to 0$.",
      "hint2": "La moyenne empirique se concentre autour de la moyenne théorique.",
      "solution": "La loi faible des grands nombres garantit que la moyenne empirique $\\bar{X}_n$ converge en probabilité vers l'espérance théorique $\\mu$ : $\\forall \\varepsilon > 0, \\lim_{n \\to \\infty} \\mathbb{P}(|\\bar{X}_n - \\mu| \\ge \\varepsilon) = 0$."
    }
  ]
};

window.MATHS_WORKSHEETS_L2 = {
  "L2-RED1": [
    {
      "title": "Feuille de TD L2 : Réduction des endomorphismes et Diagonalisation",
      "filename": "TD_L2_Diagonalisation.md",
      "statement": `## Travaux Dirigés L2 : Réduction des Endomorphismes

### Exercice 1 : Diagonalisation complète (10 points)
Soit la matrice $A \\in \\mathcal{M}_3(\\mathbb{R})$ définie par :
$$A = \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{pmatrix}$$
1. Calculer le polynôme caractéristique $P_A(X) = \\det(X I_3 - A)$ et factoriser ce polynôme.
2. En déduire les valeurs propres de $A$ et leur multiplicité algébrique.
3. Déterminer une base de chaque sous-espace propre.
4. Conclure sur la diagonalisabilité de $A$ et expliciter la matrice de passage $P$ et la matrice diagonale $D$.
5. En déduire une expression de $A^n$ pour tout entier $n \\ge 1$.`,
      "solution": `### Correction Exercice 1
1. $X I_3 - A = \\begin{pmatrix} X-2 & -1 & -1 \\\\ -1 & X-2 & -1 \\\\ -1 & -1 & X-2 \\end{pmatrix}$.
En additionnant toutes les colonnes sur $C_1$ : $C_1 \\leftarrow C_1 + C_2 + C_3$ :
$\\det = (X - 4) \\begin{pmatrix} 1 & -1 & -1 \\\\ 1 & X-2 & -1 \\\\ 1 & -1 & X-2 \\end{pmatrix}$.
Opérations $L_2 \\leftarrow L_2 - L_1$ et $L_3 \\leftarrow L_3 - L_1$ :
$P_A(X) = (X - 4)(X - 1)^2$.
2. Valeurs propres : $\\lambda_1 = 4$ (multiplicité 1) et $\\lambda_2 = 1$ (multiplicité 2).
3. Pour $\\lambda = 1$ : $(A - I_3)X = 0 \\iff x + y + z = 0$ (équation d'un plan vectoriel de dimension 2). Base : $u_1(1; -1; 0)$ et $u_2(1; 0; -1)$. $\\dim(E_1) = 2 = m_1$.
Pour $\\lambda = 4$ : $A - 4I_3$ donne $x = y = z$, base $u_3(1; 1; 1)$. $\\dim(E_4) = 1$.
4. $\\dim(E_1) + \\dim(E_4) = 3 = \\dim(\\mathbb{R}^3)$, donc $A$ est diagonalisable avec :
$P = \\begin{pmatrix} 1 & 1 & 1 \\\\ -1 & 0 & 1 \\\\ 0 & -1 & 1 \\end{pmatrix}$ et $D = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 4 \\end{pmatrix}$.
5. $A^n = P D^n P^{-1}$ avec $D^n = \\text{diag}(1, 1, 4^n)$.`
    }
  ]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_L2);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_L2);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_L2);

