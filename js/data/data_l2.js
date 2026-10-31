/**
 * Données pédagogiques universitaires de Licence 2 de Mathématiques (S3 & S4)
 * Synthétisant les enseignements d'Algèbre linéaire euclidienne, Analyse approfondie et Calcul différentiel
 */

window.MATHS_COURSES_L2 = {
  "L2-RED1": {
    "title": "L2-RED1 : Réduction des endomorphismes I : Valeurs propres et Diagonalisation",
    "domain": "Algèbre Linéaire Avancée",
    "objectives": [
      "Définir valeur propre, vecteur propre, sous-espace propre et spectre d'un endomorphisme.",
      "Calculer le polynôme caractéristique d'une matrice et en déduire son spectre et les multiplicités.",
      "Démontrer que des vecteurs propres associés à des valeurs propres distinctes forment une famille libre et énoncer les critères de diagonalisabilité.",
      "Appliquer la diagonalisation au calcul des puissances $A^k$ et aux suites récurrentes linéaires $X_{k+1} = A X_k$."
    ],
    "keyPoints": [
      {
        "title": "1. Éléments propres d'un endomorphisme",
        "content": "Soit $E$ un $\\mathbb{K}$-espace vectoriel ($\\mathbb{K} = \\mathbb{R}$ ou $\\mathbb{C}$) et $u \\in \\mathcal{L}(E)$.\n• **Valeur propre** : $\\lambda \\in \\mathbb{K}$ est valeur propre de $u$ s'il existe $x \\neq 0_E$ tel que $u(x) = \\lambda x$, c'est-à-dire si $\\text{Ker}(u - \\lambda\\,\\text{Id}_E) \\neq \\{0_E\\}$.\n• **Vecteur propre** : tout vecteur **non nul** $x$ vérifiant $u(x) = \\lambda x$.\n• **Sous-espace propre** : $E_\\lambda(u) = \\text{Ker}(u - \\lambda\\,\\text{Id}_E)$. Il est stable par $u$, et plus généralement par tout endomorphisme qui commute avec $u$.\n• **Spectre** : $\\text{Sp}(u)$ est l'ensemble des valeurs propres de $u$.\n• En dimension finie : $\\lambda \\in \\text{Sp}(u) \\iff u - \\lambda\\,\\text{Id}_E$ non injectif $\\iff$ non bijectif $\\iff \\det(u - \\lambda\\,\\text{Id}_E) = 0$. En particulier $0 \\in \\text{Sp}(u) \\iff u$ n'est pas inversible.\n• **Exemples** : sur $\\mathcal{C}^\\infty(\\mathbb{R}, \\mathbb{R})$, la dérivation $D$ admet tout réel $\\lambda$ comme valeur propre ($x \\mapsto e^{\\lambda x}$ est vecteur propre). La rotation d'angle $\\frac{\\pi}{2}$ de $\\mathbb{R}^2$ n'a aucune valeur propre réelle."
      },
      {
        "title": "2. Polynôme caractéristique et multiplicités",
        "content": "Pour $A \\in \\mathcal{M}_n(\\mathbb{K})$, on pose $\\chi_A(X) = \\det(X I_n - A)$ (convention adoptée dans tout le chapitre).\n• $\\chi_A$ est **unitaire de degré $n$** : $\\chi_A(X) = X^n - \\text{tr}(A) X^{n-1} + \\dots + (-1)^n \\det(A)$.\n• Deux matrices semblables ont le même polynôme caractéristique, ce qui permet de définir $\\chi_u$ pour $u \\in \\mathcal{L}(E)$.\n• $\\lambda \\in \\text{Sp}(A) \\iff \\chi_A(\\lambda) = 0$. Le spectre d'une matrice triangulaire est l'ensemble de ses coefficients diagonaux.\n• **Multiplicité algébrique** $m_\\lambda$ : multiplicité de $\\lambda$ comme racine de $\\chi_A$. **Multiplicité géométrique** : $d_\\lambda = \\dim E_\\lambda = n - \\text{rg}(A - \\lambda I_n)$.\n• **Inégalité** : pour toute valeur propre, $1 \\le d_\\lambda \\le m_\\lambda$. En effet, en complétant une base de $E_\\lambda$ en une base de $E$, la matrice de $u$ s'écrit $\\begin{pmatrix} \\lambda I_{d} & B \\\\ 0 & C \\end{pmatrix}$ avec $d = d_\\lambda$, donc $\\chi_u = (X - \\lambda)^{d} \\chi_C$.\n• Si $\\chi_A$ est scindé, $\\text{tr}(A)$ est la somme et $\\det(A)$ le produit des valeurs propres comptées avec multiplicité."
      },
      {
        "title": "3. Démonstration : des vecteurs propres associés à des valeurs propres distinctes sont libres",
        "content": "**Théorème.** Soient $\\lambda_1, \\dots, \\lambda_p$ des valeurs propres **deux à deux distinctes** de $u$ et, pour chaque $i$, $x_i$ un vecteur propre associé à $\\lambda_i$. Alors la famille $(x_1, \\dots, x_p)$ est libre.\n**Démonstration** (récurrence sur $p$).\n1. Pour $p = 1$ : $x_1 \\neq 0_E$, donc $(x_1)$ est libre.\n2. Supposons le résultat vrai au rang $p - 1$ et soient $a_1, \\dots, a_p \\in \\mathbb{K}$ tels que $\\sum_{i=1}^{p} a_i x_i = 0_E$ (relation (1)).\n3. En appliquant $u$ : $\\sum_{i=1}^{p} a_i \\lambda_i x_i = 0_E$ (relation (2)).\n4. La combinaison (2) $- \\lambda_p \\times$ (1) élimine $x_p$ : $\\sum_{i=1}^{p-1} a_i (\\lambda_i - \\lambda_p) x_i = 0_E$.\n5. Par hypothèse de récurrence, $a_i(\\lambda_i - \\lambda_p) = 0$ pour $i \\le p - 1$ ; comme $\\lambda_i \\neq \\lambda_p$, on obtient $a_i = 0$.\n6. La relation (1) devient $a_p x_p = 0_E$ avec $x_p \\neq 0_E$, donc $a_p = 0$. La famille est libre.\n**Corollaire.** Les sous-espaces propres sont en somme directe : si $y_1 + \\dots + y_p = 0_E$ avec $y_i \\in E_{\\lambda_i}$, les $y_i$ non nuls formeraient une famille liée de vecteurs propres associés à des valeurs propres distinctes ; donc tous les $y_i$ sont nuls. En dimension $n$, un endomorphisme a au plus $n$ valeurs propres."
      },
      {
        "title": "4. Critères de diagonalisabilité",
        "content": "$u \\in \\mathcal{L}(E)$, avec $\\dim E = n$, est **diagonalisable** s'il existe une base de $E$ dans laquelle sa matrice est diagonale. Les assertions suivantes sont équivalentes :\n1. $u$ est diagonalisable ;\n2. $E$ admet une base formée de vecteurs propres de $u$ ;\n3. $E = \\bigoplus_{\\lambda \\in \\text{Sp}(u)} E_\\lambda(u)$ ;\n4. $\\sum_{\\lambda \\in \\text{Sp}(u)} \\dim E_\\lambda(u) = n$ ;\n5. $\\chi_u$ est **scindé** sur $\\mathbb{K}$ et $d_\\lambda = m_\\lambda$ pour toute valeur propre $\\lambda$.\n• Justification de 4 $\\iff$ 5 : $\\sum d_\\lambda \\le \\sum m_\\lambda \\le \\deg \\chi_u = n$, la seconde inégalité étant une égalité si et seulement si $\\chi_u$ est scindé ; il y a égalité globale si et seulement si les deux inégalités sont des égalités.\n• **Condition suffisante** : si $\\chi_u$ est scindé à racines simples ($n$ valeurs propres distinctes), $u$ est diagonalisable. Elle n'est pas nécessaire : $I_n$ est diagonale avec une seule valeur propre."
      },
      {
        "title": "5. Puissances de matrices et suites récurrentes",
        "content": "Si $A = P D P^{-1}$ avec $D = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$, la $j$-ième colonne de $P$ étant un vecteur propre associé à $\\lambda_j$ :\n• pour tout $k \\in \\mathbb{N}$ (et tout $k \\in \\mathbb{Z}$ si $A$ est inversible), $A^k = P D^k P^{-1}$ avec $D^k = \\text{diag}(\\lambda_1^k, \\dots, \\lambda_n^k)$ ;\n• la suite vectorielle définie par $X_{k+1} = A X_k$ vérifie $X_k = A^k X_0 = P D^k P^{-1} X_0$ ; en posant $Y_k = P^{-1} X_k$, le système se découple : $Y_{k+1} = D Y_k$.\n• Plus généralement, pour tout polynôme $Q$, $Q(A) = P\\,\\text{diag}(Q(\\lambda_1), \\dots, Q(\\lambda_n))\\,P^{-1}$."
      },
      {
        "title": "6. Exemples et contre-exemples de référence",
        "content": "• $N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ : $\\chi_N = X^2$, $\\text{Sp}(N) = \\{0\\}$, $d_0 = 1 < 2 = m_0$ : **non diagonalisable**. Plus généralement, une matrice nilpotente non nulle n'est jamais diagonalisable (elle serait semblable à la matrice nulle).\n• $R = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ : $\\chi_R = X^2 + 1$ n'est pas scindé sur $\\mathbb{R}$, donc $R$ n'est pas diagonalisable dans $\\mathcal{M}_2(\\mathbb{R})$ ; elle l'est dans $\\mathcal{M}_2(\\mathbb{C})$, de valeurs propres $i$ et $-i$.\n• Un projecteur $p$ ($p \\circ p = p$) vérifie $\\text{Sp}(p) \\subset \\{0, 1\\}$ et $E = \\text{Ker}\\,p \\oplus \\text{Im}\\,p$ avec $\\text{Im}\\,p = \\text{Ker}(p - \\text{Id})$ : il est diagonalisable."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Diagonaliser une matrice 2x2 et calculer ses puissances",
        "example": "Diagonaliser $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$ et calculer $A^k$ pour $k \\in \\mathbb{N}$.",
        "steps": [
          "**Polynôme caractéristique** : $\\chi_A(X) = \\det(X I_2 - A) = (X - 1)^2 - 4 = (X - 3)(X + 1)$.",
          "**Valeurs propres** : $3$ et $-1$, distinctes en dimension 2, donc $A$ est diagonalisable.",
          "**Sous-espaces propres** : $(A - 3 I_2)X = 0 \\iff -2x + 2y = 0$, d'où $E_3 = \\text{Vect}\\big((1, 1)\\big)$ ; $(A + I_2)X = 0 \\iff 2x + 2y = 0$, d'où $E_{-1} = \\text{Vect}\\big((1, -1)\\big)$.",
          "**Réduction** : $P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$, $D = \\begin{pmatrix} 3 & 0 \\\\ 0 & -1 \\end{pmatrix}$, $P^{-1} = \\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ et $A = P D P^{-1}$.",
          "**Puissances** : $A^k = P D^k P^{-1} = \\frac{1}{2}\\begin{pmatrix} 3^k + (-1)^k & 3^k - (-1)^k \\\\ 3^k - (-1)^k & 3^k + (-1)^k \\end{pmatrix}$. Contrôle : pour $k = 1$ on retrouve $A$."
        ]
      },
      {
        "title": "Méthode : Étudier la diagonalisabilité avec une valeur propre multiple",
        "example": "Étudier la diagonalisabilité de $J = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}$.",
        "steps": [
          "**Noyau** : $\\text{rg}(J) = 1$, donc $d_0 = \\dim \\text{Ker}\\,J = 3 - 1 = 2$, avec $\\text{Ker}\\,J = \\text{Vect}\\big((1, -1, 0), (1, 0, -1)\\big)$ (équation $x + y + z = 0$).",
          "**Autre valeur propre** : $J\\,{}^t(1, 1, 1) = 3\\,{}^t(1, 1, 1)$, donc $3 \\in \\text{Sp}(J)$.",
          "**Polynôme caractéristique** : $m_0 \\ge d_0 = 2$ et $m_3 \\ge 1$, avec $m_0 + m_3 \\le 3$ ; donc $\\chi_J = X^2(X - 3)$ (contrôle : la trace vaut $0 + 0 + 3 = 3$).",
          "**Conclusion** : $d_0 + d_3 = 2 + 1 = 3$, donc $J$ est diagonalisable : $J = P D P^{-1}$ avec $P = \\begin{pmatrix} 1 & 1 & 1 \\\\ -1 & 0 & 1 \\\\ 0 & -1 & 1 \\end{pmatrix}$ et $D = \\text{diag}(0, 0, 3)$."
        ]
      }
    ],
    "traps": [
      "Un vecteur propre est **non nul** par définition ; en revanche, une valeur propre peut être nulle ($0 \\in \\text{Sp}(u)$ exactement quand $u$ n'est pas inversible).",
      "Un polynôme caractéristique scindé ne suffit pas : $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ a pour polynôme caractéristique $(X - 1)^2$ mais $\\dim E_1 = 1 < 2$, elle n'est pas diagonalisable.",
      "Le spectre dépend du corps : $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ n'a pas de valeur propre réelle mais deux valeurs propres complexes $\\pm i$.",
      "La somme de deux matrices diagonalisables n'est pas toujours diagonalisable : $\\begin{pmatrix} 0 & 1 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 0 & 0 \\\\ 0 & -1 \\end{pmatrix} = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$.",
      "Dans $A = P D P^{-1}$, l'ordre des colonnes de $P$ doit correspondre à l'ordre des valeurs propres sur la diagonale de $D$."
    ],
    "flashcards": [
      {
        "q": "Quand dit-on que $\\lambda$ est valeur propre de $u$ ?",
        "a": "S'il existe $x \\neq 0_E$ tel que $u(x) = \\lambda x$, c'est-à-dire si $\\text{Ker}(u - \\lambda\\,\\text{Id}_E) \\neq \\{0_E\\}$."
      },
      {
        "q": "Que dire d'une famille de vecteurs propres associés à des valeurs propres deux à deux distinctes ?",
        "a": "Elle est libre ; par conséquent, les sous-espaces propres sont en somme directe."
      },
      {
        "q": "Quel critère de diagonalisabilité fait intervenir les multiplicités ?",
        "a": "$u$ est diagonalisable si et seulement si $\\chi_u$ est scindé et $\\dim E_\\lambda = m_\\lambda$ pour toute valeur propre $\\lambda$."
      },
      {
        "q": "Une matrice d'ordre $n$ ayant $n$ valeurs propres distinctes est-elle diagonalisable ? Et la réciproque ?",
        "a": "Oui (condition suffisante). La réciproque est fausse : $I_n$ est diagonalisable avec une seule valeur propre."
      },
      {
        "q": "Comment calcule-t-on la dimension du sous-espace propre $E_\\lambda$ d'une matrice $A \\in \\mathcal{M}_n(\\mathbb{K})$ ?",
        "a": "Par le théorème du rang : $\\dim E_\\lambda = n - \\text{rg}(A - \\lambda I_n)$."
      },
      {
        "q": "Une matrice nilpotente non nulle peut-elle être diagonalisable ?",
        "a": "Non : sa seule valeur propre est $0$, donc diagonalisable impliquerait qu'elle est semblable à la matrice nulle, donc nulle."
      }
    ]
  },
  "L2-PRE": {
    "title": "L2-PRE : Espaces Préhilbertiens et Euclidiens : Orthogonalité et Gram-Schmidt",
    "domain": "Géométrie & Espaces Euclidiens",
    "objectives": [
      "Définir un produit scalaire réel, un espace préhilbertien et un espace euclidien.",
      "Énoncer et démontrer l'inégalité de Cauchy-Schwarz avec son cas d'égalité, puis l'inégalité de Minkowski.",
      "Caractériser la projection orthogonale sur un sous-espace de dimension finie et calculer une distance.",
      "Appliquer le procédé de Gram-Schmidt pour construire des bases orthonormées."
    ],
    "keyPoints": [
      {
        "title": "1. Produit scalaire, norme associée, exemples",
        "content": "Soit $E$ un $\\mathbb{R}$-espace vectoriel. Un **produit scalaire** est une application $\\langle \\cdot, \\cdot \\rangle : E \\times E \\to \\mathbb{R}$ **bilinéaire, symétrique, positive** ($\\langle x, x \\rangle \\ge 0$) et **définie** ($\\langle x, x \\rangle = 0 \\implies x = 0_E$).\n• $(E, \\langle \\cdot, \\cdot \\rangle)$ est un espace **préhilbertien** ; s'il est de dimension finie, c'est un espace **euclidien**.\n• **Norme associée** : $\\|x\\| = \\sqrt{\\langle x, x \\rangle}$. **Identité de polarisation** : $\\langle x, y \\rangle = \\frac{1}{2}\\left(\\|x + y\\|^2 - \\|x\\|^2 - \\|y\\|^2\\right)$.\n• **Exemples** : sur $\\mathbb{R}^n$, $\\langle x, y \\rangle = \\sum_{i=1}^n x_i y_i$ ; sur $\\mathcal{C}([a ; b], \\mathbb{R})$, $\\langle f, g \\rangle = \\int_a^b f(t) g(t)\\, dt$ (le caractère défini utilise la continuité) ; sur $\\mathcal{M}_n(\\mathbb{R})$, $\\langle A, B \\rangle = \\text{tr}({}^t A B)$."
      },
      {
        "title": "2. Inégalités de Cauchy-Schwarz et de Minkowski",
        "content": "• **Cauchy-Schwarz** : pour tous $x, y \\in E$, $|\\langle x, y \\rangle| \\le \\|x\\|\\,\\|y\\|$, avec égalité si et seulement si $(x, y)$ est **liée**.\n• **Minkowski (inégalité triangulaire)** : $\\|x + y\\| \\le \\|x\\| + \\|y\\|$, avec égalité si et seulement si $y = 0_E$ ou $x = \\lambda y$ avec $\\lambda \\ge 0$. Elle découle de Cauchy-Schwarz : $\\|x + y\\|^2 = \\|x\\|^2 + 2\\langle x, y \\rangle + \\|y\\|^2 \\le (\\|x\\| + \\|y\\|)^2$.\n• **Pythagore** : $x \\perp y \\iff \\|x + y\\|^2 = \\|x\\|^2 + \\|y\\|^2$.\n• **Application** : pour $f$ continue sur $[0 ; 1]$, $\\left(\\int_0^1 f\\right)^2 \\le \\int_0^1 f^2$ (prendre $g = 1$)."
      },
      {
        "title": "3. Démonstration de l'inégalité de Cauchy-Schwarz et de son cas d'égalité",
        "content": "**Démonstration.**\n1. Si $y = 0_E$, les deux membres sont nuls et $(x, y)$ est liée : le résultat est vrai.\n2. Supposons $y \\neq 0_E$. Pour $t \\in \\mathbb{R}$, posons $P(t) = \\|x + t y\\|^2 = \\|y\\|^2 t^2 + 2 \\langle x, y \\rangle t + \\|x\\|^2$, par bilinéarité et symétrie.\n3. $P$ est un trinôme de degré 2 (car $\\|y\\|^2 > 0$) positif sur $\\mathbb{R}$ ; son discriminant est donc négatif ou nul : $4\\langle x, y \\rangle^2 - 4\\|x\\|^2\\|y\\|^2 \\le 0$, d'où l'inégalité.\n4. **Égalité.** Si $|\\langle x, y \\rangle| = \\|x\\|\\,\\|y\\|$, le discriminant est nul et $P$ admet une racine réelle $t_0$ : $\\|x + t_0 y\\| = 0$, donc $x = -t_0 y$ (caractère défini) et $(x, y)$ est liée.\n5. Réciproquement, si $(x, y)$ est liée avec $y \\neq 0_E$, alors $x = \\lambda y$ et $|\\langle x, y \\rangle| = |\\lambda|\\,\\|y\\|^2 = \\|x\\|\\,\\|y\\|$."
      },
      {
        "title": "4. Familles orthonormées et coordonnées",
        "content": "• Une famille orthogonale de vecteurs **non nuls** est libre : si $\\sum a_i e_i = 0$, on fait le produit scalaire avec $e_j$ et on obtient $a_j \\|e_j\\|^2 = 0$.\n• Si $(e_1, \\dots, e_n)$ est une **base orthonormée** de $E$ : $x = \\sum_{i=1}^n \\langle x, e_i \\rangle e_i$, $\\langle x, y \\rangle = \\sum_{i=1}^n x_i y_i$ et $\\|x\\|^2 = \\sum_{i=1}^n \\langle x, e_i \\rangle^2$, où $x_i, y_i$ sont les coordonnées.\n• Une matrice de passage entre deux bases orthonormées $P$ vérifie ${}^t P P = I_n$."
      },
      {
        "title": "5. Orthogonal d'un sous-espace et projection orthogonale",
        "content": "Soit $F$ un sous-espace vectoriel de $E$ et $F^\\perp = \\{x \\in E \\mid \\forall y \\in F, \\langle x, y \\rangle = 0\\}$ ; on a toujours $F \\cap F^\\perp = \\{0_E\\}$.\n• **Théorème** : si $F$ est de **dimension finie**, $E = F \\oplus F^\\perp$ (même si $E$ est de dimension infinie). Si $(e_1, \\dots, e_p)$ est une base orthonormée de $F$, la projection orthogonale sur $F$ est\n$$p_F(x) = \\sum_{i=1}^p \\langle x, e_i \\rangle e_i.$$\n• **Caractérisation** : $p_F(x)$ est l'unique $y \\in F$ tel que $x - y \\in F^\\perp$.\n• **Distance** : pour tout $y \\in F$, Pythagore donne $\\|x - y\\|^2 = \\|x - p_F(x)\\|^2 + \\|p_F(x) - y\\|^2$ ; donc $d(x, F) = \\|x - p_F(x)\\|$, et ce minimum n'est atteint qu'en $y = p_F(x)$.\n• **Inégalité de Bessel** : $\\|p_F(x)\\|^2 = \\sum_{i=1}^p \\langle x, e_i \\rangle^2 \\le \\|x\\|^2$.\n• Si $E$ est euclidien : $\\dim F^\\perp = \\dim E - \\dim F$ et $(F^\\perp)^\\perp = F$."
      },
      {
        "title": "6. Procédé d'orthonormalisation de Gram-Schmidt",
        "content": "Soit $(v_1, \\dots, v_n)$ une famille libre de $E$. On définit par récurrence :\n$$u_1 = v_1, \\qquad u_k = v_k - \\sum_{i=1}^{k-1} \\langle v_k, e_i \\rangle e_i, \\qquad e_k = \\frac{u_k}{\\|u_k\\|}.$$\n• $u_k = v_k - p_{F_{k-1}}(v_k)$ où $F_{k-1} = \\text{Vect}(v_1, \\dots, v_{k-1}) = \\text{Vect}(e_1, \\dots, e_{k-1})$ ; $u_k \\neq 0_E$ car $v_k \\notin F_{k-1}$ (liberté).\n• $(e_1, \\dots, e_n)$ est **orthonormée** et $\\text{Vect}(e_1, \\dots, e_k) = \\text{Vect}(v_1, \\dots, v_k)$ pour tout $k$. C'est l'unique famille ayant ces propriétés avec $\\langle e_k, v_k \\rangle > 0$.\n• **Conséquences** : tout espace euclidien admet une base orthonormée ; toute famille orthonormée se complète en base orthonormée."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Projeter sur un plan et calculer une distance",
        "example": "Dans $\\mathbb{R}^3$ euclidien canonique, soit $F$ le plan d'équation $x + 2y - z = 0$ et $a = (1, 1, 1)$. Calculer $p_F(a)$ et $d(a, F)$.",
        "steps": [
          "**Vecteur normal** : $n = (1, 2, -1)$ engendre $F^\\perp$ et $\\|n\\| = \\sqrt{6}$.",
          "**Projection sur $F^\\perp$** : $p_{F^\\perp}(a) = \\frac{\\langle a, n \\rangle}{\\|n\\|^2} n = \\frac{1 + 2 - 1}{6} n = \\frac{1}{3}(1, 2, -1)$.",
          "**Projection sur $F$** : $p_F(a) = a - p_{F^\\perp}(a) = \\left(\\frac{2}{3}, \\frac{1}{3}, \\frac{4}{3}\\right)$. Contrôle : $\\frac{2}{3} + \\frac{2}{3} - \\frac{4}{3} = 0$, le point est bien dans $F$.",
          "**Distance** : $d(a, F) = \\|p_{F^\\perp}(a)\\| = \\frac{|\\langle a, n \\rangle|}{\\|n\\|} = \\frac{2}{\\sqrt{6}} = \\frac{\\sqrt{6}}{3}$."
        ]
      },
      {
        "title": "Méthode : Orthonormaliser une base de polynômes",
        "example": "Sur $\\mathbb{R}_2[X]$ muni de $\\langle P, Q \\rangle = \\int_{-1}^{1} P(t) Q(t)\\, dt$, orthonormaliser $(1, X, X^2)$.",
        "steps": [
          "**Premier vecteur** : $\\|1\\|^2 = \\int_{-1}^1 dt = 2$, donc $e_0 = \\frac{1}{\\sqrt{2}}$.",
          "**Deuxième vecteur** : $\\langle X, 1 \\rangle = \\int_{-1}^1 t\\, dt = 0$, donc $u_1 = X$ ; $\\|X\\|^2 = \\frac{2}{3}$ et $e_1 = \\sqrt{\\frac{3}{2}}\\, X$.",
          "**Troisième vecteur** : $\\langle X^2, X \\rangle = 0$ et $\\langle X^2, e_0 \\rangle e_0 = \\frac{1}{2}\\int_{-1}^1 t^2\\, dt = \\frac{1}{3}$, donc $u_2 = X^2 - \\frac{1}{3}$.",
          "**Normalisation** : $\\|u_2\\|^2 = \\int_{-1}^1 \\left(t^4 - \\frac{2}{3}t^2 + \\frac{1}{9}\\right) dt = \\frac{2}{5} - \\frac{4}{9} + \\frac{2}{9} = \\frac{8}{45}$, d'où $e_2 = \\sqrt{\\frac{45}{8}}\\left(X^2 - \\frac{1}{3}\\right)$."
        ]
      }
    ],
    "traps": [
      "La formule $p_F(x) = \\sum \\langle x, e_i \\rangle e_i$ exige une base **orthonormée** de $F$ ; pour une base seulement orthogonale, il faut écrire $\\sum \\frac{\\langle x, e_i \\rangle}{\\|e_i\\|^2} e_i$.",
      "En dimension infinie, $E = F \\oplus F^\\perp$ peut être faux si $F$ n'est pas de dimension finie : dans $\\mathcal{C}([0 ; 1], \\mathbb{R})$ muni de $\\int_0^1 fg$, l'hyperplan $F = \\{f \\mid f(0) = 0\\}$ vérifie $F^\\perp = \\{0\\}$ (si $g \\in F^\\perp$, tester $f(t) = t\\,g(t)$ donne $\\int_0^1 t\\,g(t)^2\\,dt = 0$, donc $g = 0$), alors que $F \\neq E$.",
      "Sans valeur absolue, $\\langle x, y \\rangle = \\|x\\|\\,\\|y\\|$ équivaut à la colinéarité **positive** ; $|\\langle x, y \\rangle| = \\|x\\|\\,\\|y\\|$ équivaut à $(x, y)$ liée.",
      "La réciproque de Pythagore est fausse pour trois vecteurs : $x = (2, 0)$, $y = (1, 1)$, $z = (-1, 1)$ vérifient $\\|x + y + z\\|^2 = 8 = \\|x\\|^2 + \\|y\\|^2 + \\|z\\|^2$ sans être deux à deux orthogonaux.",
      "Dans Gram-Schmidt, on projette $v_k$ sur les $e_i$ **déjà normés** (ou on divise par $\\|u_i\\|^2$) ; utiliser les $v_i$ à la place des $e_i$ donne une famille non orthogonale."
    ],
    "flashcards": [
      {
        "q": "Énoncer l'inégalité de Cauchy-Schwarz et son cas d'égalité.",
        "a": "$|\\langle x, y \\rangle| \\le \\|x\\|\\,\\|y\\|$, avec égalité si et seulement si $(x, y)$ est liée."
      },
      {
        "q": "Quelle est l'idée de la démonstration de Cauchy-Schwarz ?",
        "a": "Le trinôme $t \\mapsto \\|x + t y\\|^2$ est positif sur $\\mathbb{R}$, donc son discriminant $4\\langle x, y \\rangle^2 - 4\\|x\\|^2\\|y\\|^2$ est négatif ou nul."
      },
      {
        "q": "Expression de $p_F(x)$ dans une base orthonormée $(e_1, \\dots, e_p)$ de $F$ ?",
        "a": "$p_F(x) = \\sum_{i=1}^p \\langle x, e_i \\rangle e_i$."
      },
      {
        "q": "Comment caractériser la projection orthogonale $p_F(x)$ ?",
        "a": "C'est l'unique $y \\in F$ tel que $x - y \\in F^\\perp$ ; c'est aussi l'unique point de $F$ réalisant $d(x, F)$."
      },
      {
        "q": "Que vaut $\\dim F^\\perp$ dans un espace euclidien de dimension $n$ ?",
        "a": "$\\dim F^\\perp = n - \\dim F$, et $(F^\\perp)^\\perp = F$."
      },
      {
        "q": "Pourquoi une famille orthogonale de vecteurs non nuls est-elle libre ?",
        "a": "Si $\\sum a_i e_i = 0$, le produit scalaire avec $e_j$ donne $a_j \\|e_j\\|^2 = 0$, donc $a_j = 0$."
      }
    ]
  },
  "L2-SER": {
    "title": "L2-SER : Séries numériques réelles et complexes",
    "domain": "Analyse Réelle & Complexe",
    "objectives": [
      "Définir la convergence d'une série numérique à l'aide de la suite de ses sommes partielles.",
      "Maîtriser les théorèmes de comparaison pour les séries à termes positifs (inégalités, équivalents, comparaison série-intégrale).",
      "Énoncer les critères de Riemann, de d'Alembert et de Cauchy et connaître leurs limites.",
      "Définir la convergence absolue et appliquer le critère spécial des séries alternées."
    ],
    "keyPoints": [
      {
        "title": "1. Définition, divergence grossière, séries télescopiques",
        "content": "Soit $(u_n)$ une suite de $\\mathbb{K}$ ($\\mathbb{R}$ ou $\\mathbb{C}$) et $S_n = \\sum_{k=0}^n u_k$.\n• La série $\\sum u_n$ **converge** si $(S_n)$ admet une limite finie $S$ ; on note $S = \\sum_{n=0}^{+\\infty} u_n$ et $R_n = S - S_n = \\sum_{k=n+1}^{+\\infty} u_k$ le reste, qui tend vers $0$.\n• **Condition nécessaire** : si $\\sum u_n$ converge, alors $u_n = S_n - S_{n-1} \\to 0$. Si $u_n \\not\\to 0$, la série **diverge grossièrement**.\n• **Séries télescopiques** : $\\sum (a_{n+1} - a_n)$ converge si et seulement si la suite $(a_n)$ converge. Exemple : $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$ donne $\\sum_{n=1}^{+\\infty} \\frac{1}{n(n+1)} = 1$.\n• L'ensemble des séries convergentes est un espace vectoriel et la somme est linéaire."
      },
      {
        "title": "2. Séries à termes positifs et comparaison",
        "content": "Si $u_n \\ge 0$, la suite $(S_n)$ est croissante : $\\sum u_n$ converge si et seulement si $(S_n)$ est **majorée**.\nSoient $(u_n)$ et $(v_n)$ **positives** :\n• **Inégalité** : si $u_n \\le v_n$ à partir d'un certain rang, la convergence de $\\sum v_n$ entraîne celle de $\\sum u_n$ (et la divergence de $\\sum u_n$ celle de $\\sum v_n$).\n• **Domination** : si $u_n = O(v_n)$ et $\\sum v_n$ converge, alors $\\sum u_n$ converge.\n• **Équivalence** : si $u_n \\sim v_n$, les séries $\\sum u_n$ et $\\sum v_n$ sont de **même nature** (car $\\frac{1}{2} v_n \\le u_n \\le 2 v_n$ à partir d'un certain rang).\n• Ces énoncés restent valables si les termes sont de signe constant à partir d'un certain rang."
      },
      {
        "title": "3. Démonstration : comparaison série-intégrale et séries de Riemann",
        "content": "**Théorème.** Soit $f : [n_0 ; +\\infty[ \\to \\mathbb{R}_+$ continue par morceaux et **décroissante**. Alors la série $\\sum f(n)$ et l'intégrale $\\int_{n_0}^{+\\infty} f(t)\\, dt$ sont de même nature.\n**Démonstration.**\n1. Pour $k \\ge n_0 + 1$ et $t \\in [k - 1 ; k]$, la décroissance donne $f(k) \\le f(t) \\le f(k - 1)$ ; en intégrant sur un intervalle de longueur 1 : $f(k) \\le \\int_{k-1}^{k} f(t)\\, dt \\le f(k-1)$.\n2. En sommant pour $k$ de $n_0 + 1$ à $N$ (relation de Chasles) : $\\sum_{k=n_0+1}^{N} f(k) \\le \\int_{n_0}^{N} f(t)\\, dt \\le \\sum_{k=n_0}^{N-1} f(k)$.\n3. Comme $f \\ge 0$, $X \\mapsto \\int_{n_0}^X f$ est croissante : l'intégrale converge si et seulement si la suite $\\left(\\int_{n_0}^N f\\right)_N$ est majorée ; de même, la série converge si et seulement si ses sommes partielles sont majorées.\n4. L'encadrement montre que l'une des deux suites est majorée si et seulement si l'autre l'est.\n**Application (Riemann).** Pour $\\alpha > 0$, $f(t) = t^{-\\alpha}$ est décroissante et $\\int_1^N t^{-\\alpha} dt$ vaut $\\frac{N^{1-\\alpha} - 1}{1 - \\alpha}$ si $\\alpha \\neq 1$ et $\\ln N$ si $\\alpha = 1$ : elle est bornée si et seulement si $\\alpha > 1$. Pour $\\alpha \\le 0$, $n^{-\\alpha} \\not\\to 0$. Donc $\\sum \\frac{1}{n^\\alpha}$ **converge si et seulement si $\\alpha > 1$**. L'encadrement donne aussi $\\ln(n + 1) \\le \\sum_{k=1}^n \\frac{1}{k} \\le 1 + \\ln n$, donc $\\sum_{k=1}^n \\frac{1}{k} \\sim \\ln n$."
      },
      {
        "title": "4. Séries de référence et règles de d'Alembert et de Cauchy",
        "content": "• **Géométrique** : $\\sum q^n$ converge si et seulement si $|q| < 1$, et $\\sum_{n=0}^{+\\infty} q^n = \\frac{1}{1 - q}$.\n• **Riemann** : $\\sum_{n \\ge 1} \\frac{1}{n^\\alpha}$ converge si et seulement si $\\alpha > 1$.\n• **Règle de d'Alembert** : si $u_n > 0$ et $\\frac{u_{n+1}}{u_n} \\to \\ell \\in [0 ; +\\infty]$ : convergence si $\\ell < 1$, divergence grossière si $\\ell > 1$, aucune conclusion si $\\ell = 1$.\n• **Règle de Cauchy** : si $u_n \\ge 0$ et $\\sqrt[n]{u_n} \\to \\ell$ : mêmes conclusions.\n• Les deux règles reposent sur la comparaison à une série géométrique ; elles échouent pour les séries de Riemann ($\\ell = 1$ pour tout $\\alpha$)."
      },
      {
        "title": "5. Convergence absolue et critère spécial des séries alternées",
        "content": "• $\\sum u_n$ est **absolument convergente** si $\\sum |u_n|$ converge. Toute série absolument convergente converge (complétude de $\\mathbb{R}$ et de $\\mathbb{C}$) et $\\left|\\sum_{n=0}^{+\\infty} u_n\\right| \\le \\sum_{n=0}^{+\\infty} |u_n|$.\n• **Critère spécial des séries alternées** : si $(a_n)$ est **décroissante** et tend vers $0$, alors $\\sum (-1)^n a_n$ converge, son reste $R_n$ est du signe de son premier terme $(-1)^{n+1} a_{n+1}$ et $|R_n| \\le a_{n+1}$.\n• **Idée de preuve** : $(S_{2n})$ décroît, $(S_{2n+1})$ croît et $S_{2n} - S_{2n+1} = a_{2n+1} \\to 0$ : ces suites sont adjacentes.\n• **Exemple** : $\\sum_{n \\ge 1} \\frac{(-1)^{n+1}}{n}$ converge (sa somme vaut $\\ln 2$) sans converger absolument : elle est **semi-convergente**."
      },
      {
        "title": "6. Développements asymptotiques pour les séries de signe quelconque",
        "content": "Lorsque le terme général n'est pas de signe constant, on écrit $u_n = v_n + w_n$ avec :\n• $\\sum v_n$ convergente par le critère des séries alternées ;\n• $w_n$ de signe constant, étudié par équivalents, ou $w_n = O\\left(\\frac{1}{n^\\beta}\\right)$ avec $\\beta > 1$ (convergence absolue).\nLa série $\\sum u_n$ a alors la nature de $\\sum w_n$. Exemple : $u_n = \\frac{(-1)^n}{\\sqrt{n}} + \\frac{1}{n}$ est équivalent à $\\frac{(-1)^n}{\\sqrt{n}}$, terme d'une série convergente, mais $\\sum u_n$ **diverge** (somme d'une série convergente et d'une série divergente)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Appliquer la règle de d'Alembert",
        "example": "Déterminer la nature de $\\sum_{n \\ge 1} \\frac{3^n}{n!}$.",
        "steps": [
          "**Quotient** : $\\frac{u_{n+1}}{u_n} = \\frac{3^{n+1}}{(n+1)!} \\times \\frac{n!}{3^n} = \\frac{3}{n+1}$.",
          "**Limite** : $\\frac{3}{n+1} \\to 0 < 1$.",
          "**Conclusion** : la série converge d'après la règle de d'Alembert ; sa somme vaut $e^3 - 1$ (série exponentielle privée du terme $n = 0$)."
        ]
      },
      {
        "title": "Méthode : Utiliser un développement asymptotique (signe non constant)",
        "example": "Déterminer la nature de $\\sum_{n \\ge 2} \\ln\\left(1 + \\frac{(-1)^n}{\\sqrt{n}}\\right)$.",
        "steps": [
          "**Développement** : avec $\\ln(1 + x) = x - \\frac{x^2}{2} + O(x^3)$ et $x = \\frac{(-1)^n}{\\sqrt{n}} \\to 0$ : $u_n = \\frac{(-1)^n}{\\sqrt{n}} - \\frac{1}{2n} + O\\left(\\frac{1}{n^{3/2}}\\right)$.",
          "**Premier terme** : $\\sum \\frac{(-1)^n}{\\sqrt{n}}$ converge (série alternée, $\\frac{1}{\\sqrt{n}}$ décroît vers $0$).",
          "**Reste** : $\\sum O\\left(\\frac{1}{n^{3/2}}\\right)$ converge absolument (Riemann, $\\frac{3}{2} > 1$).",
          "**Terme dominant** : $\\sum \\frac{1}{2n}$ diverge (série harmonique).",
          "**Conclusion** : $\\sum u_n$ est la somme de deux séries convergentes et d'une série divergente : elle **diverge**, bien que $u_n \\sim \\frac{(-1)^n}{\\sqrt{n}}$."
        ]
      }
    ],
    "traps": [
      "$u_n \\to 0$ est nécessaire mais pas suffisant : $\\frac{1}{n} \\to 0$ et la série harmonique diverge.",
      "Le critère des équivalents exige un signe constant : $\\frac{(-1)^n}{\\sqrt{n}} + \\frac{1}{n} \\sim \\frac{(-1)^n}{\\sqrt{n}}$, la seconde série converge et la première diverge.",
      "Si $\\frac{u_{n+1}}{u_n} \\to 1$, la règle de d'Alembert ne conclut pas : $\\sum \\frac{1}{n}$ diverge et $\\sum \\frac{1}{n^2}$ converge, avec la même limite $1$.",
      "Dans le critère des séries alternées, la décroissance de $(a_n)$ est indispensable : $a_n = \\frac{1}{\\sqrt{n}} + \\frac{(-1)^n}{n}$ est positif pour $n \\ge 2$ et tend vers $0$, mais $\\sum (-1)^n a_n$ diverge (cf. piège précédent).",
      "Attention à l'indice initial : $\\sum_{n=0}^{+\\infty} q^n = \\frac{1}{1-q}$ mais $\\sum_{n=1}^{+\\infty} q^n = \\frac{q}{1 - q}$."
    ],
    "flashcards": [
      {
        "q": "Pour quels $\\alpha$ la série de Riemann $\\sum \\frac{1}{n^\\alpha}$ converge-t-elle ?",
        "a": "Si et seulement si $\\alpha > 1$."
      },
      {
        "q": "Énoncer le théorème de comparaison série-intégrale.",
        "a": "Si $f$ est positive, continue par morceaux et décroissante sur $[n_0 ; +\\infty[$, alors $\\sum f(n)$ et $\\int_{n_0}^{+\\infty} f$ sont de même nature."
      },
      {
        "q": "Donner un équivalent de $H_n = \\sum_{k=1}^n \\frac{1}{k}$.",
        "a": "$H_n \\sim \\ln n$, grâce à l'encadrement $\\ln(n+1) \\le H_n \\le 1 + \\ln n$."
      },
      {
        "q": "Quelle majoration du reste donne le critère des séries alternées ?",
        "a": "$|R_n| \\le a_{n+1}$, et $R_n$ a le signe de $(-1)^{n+1}$, celui du premier terme négligé."
      },
      {
        "q": "Une série absolument convergente est-elle convergente ? Et la réciproque ?",
        "a": "Oui. La réciproque est fausse : $\\sum \\frac{(-1)^n}{n}$ converge sans converger absolument."
      },
      {
        "q": "Que conclut la règle de d'Alembert lorsque la limite du quotient vaut 1 ?",
        "a": "Rien : il faut une autre méthode (comparaison, équivalent, développement asymptotique)."
      }
    ]
  },
  "L2-CAL": {
    "title": "L2-CAL : Calcul différentiel à plusieurs variables, gradient et extremums",
    "domain": "Calcul Différentiel",
    "objectives": [
      "Définir la différentiabilité d'une fonction de plusieurs variables, le gradient et la matrice jacobienne.",
      "Utiliser la règle de la chaîne pour dériver des fonctions composées.",
      "Énoncer le théorème de Schwarz avec ses hypothèses et connaître un contre-exemple.",
      "Démontrer la condition nécessaire d'extremum sur un ouvert et classer les points critiques à l'aide de la hessienne."
    ],
    "keyPoints": [
      {
        "title": "1. Dérivées partielles, différentielle, gradient",
        "content": "Soit $U$ un **ouvert** de $\\mathbb{R}^n$, $f : U \\to \\mathbb{R}$ et $a \\in U$.\n• **Dérivée selon un vecteur** $v$ : $D_v f(a) = \\lim_{t \\to 0} \\frac{f(a + t v) - f(a)}{t}$ ; les **dérivées partielles** sont $\\frac{\\partial f}{\\partial x_i}(a) = D_{e_i} f(a)$.\n• **Différentiabilité** : $f$ est différentiable en $a$ s'il existe une application linéaire $df_a : \\mathbb{R}^n \\to \\mathbb{R}$ telle que $f(a + h) = f(a) + df_a(h) + o(\\|h\\|)$.\n• Si $f$ est différentiable en $a$, elle est continue en $a$, admet des dérivées selon tout vecteur et $df_a(h) = \\sum_{i=1}^n \\frac{\\partial f}{\\partial x_i}(a) h_i = \\langle \\nabla f(a), h \\rangle$.\n• **Théorème** : si les dérivées partielles existent et sont continues sur $U$ ($f$ de classe $\\mathcal{C}^1$), alors $f$ est différentiable en tout point de $U$.\n• Pour $f : U \\to \\mathbb{R}^p$, la **matrice jacobienne** est $J_f(a) = \\left(\\frac{\\partial f_i}{\\partial x_j}(a)\\right)_{1 \\le i \\le p,\\ 1 \\le j \\le n}$."
      },
      {
        "title": "2. Règle de la chaîne et interprétation du gradient",
        "content": "• **Composition** : si $f$ est différentiable en $a$ et $g$ en $f(a)$, alors $g \\circ f$ est différentiable en $a$ et $d(g \\circ f)_a = dg_{f(a)} \\circ df_a$, soit $J_{g \\circ f}(a) = J_g(f(a))\\, J_f(a)$.\n• **Le long d'une courbe** : si $\\gamma : I \\to U$ est dérivable, $\\frac{d}{dt} f(\\gamma(t)) = \\langle \\nabla f(\\gamma(t)), \\gamma'(t) \\rangle$.\n• **Interprétation** : si $\\nabla f(a) \\neq 0$, c'est la direction de plus forte croissance de $f$ (Cauchy-Schwarz) et il est orthogonal à la ligne de niveau de $f$ passant par $a$.\n• **Exemple** : pour $g(r, \\theta) = f(r \\cos\\theta, r\\sin\\theta)$, $\\frac{\\partial g}{\\partial r} = \\cos\\theta\\, \\frac{\\partial f}{\\partial x} + \\sin\\theta\\, \\frac{\\partial f}{\\partial y}$."
      },
      {
        "title": "3. Dérivées secondes et théorème de Schwarz",
        "content": "• **Théorème de Schwarz** : si $f$ est de **classe $\\mathcal{C}^2$** sur l'ouvert $U$, alors pour tous $i, j$ : $\\frac{\\partial^2 f}{\\partial x_i \\partial x_j} = \\frac{\\partial^2 f}{\\partial x_j \\partial x_i}$ sur $U$.\n• **L'hypothèse $\\mathcal{C}^2$ est utile** : pour $f(x, y) = \\frac{xy(x^2 - y^2)}{x^2 + y^2}$ et $f(0, 0) = 0$, on a $\\frac{\\partial f}{\\partial x}(0, y) = -y$ et $\\frac{\\partial f}{\\partial y}(x, 0) = x$, donc les dérivées croisées en $(0, 0)$ valent $-1$ et $1$.\n• **Hessienne** de $f \\in \\mathcal{C}^2(U, \\mathbb{R})$ : $H_f(a) = \\left(\\frac{\\partial^2 f}{\\partial x_i \\partial x_j}(a)\\right)_{i, j}$, **symétrique réelle** d'après Schwarz.\n• **Taylor-Young à l'ordre 2** :\n$$f(a + h) = f(a) + \\langle \\nabla f(a), h \\rangle + \\frac{1}{2}\\, {}^t h\\, H_f(a)\\, h + o(\\|h\\|^2).$$"
      },
      {
        "title": "4. Démonstration : condition nécessaire et condition suffisante d'extremum local",
        "content": "**Théorème 1.** Si $f : U \\to \\mathbb{R}$, $U$ **ouvert**, est différentiable en $a$ et admet un extremum local en $a$, alors $\\nabla f(a) = 0$.\n**Démonstration.**\n1. Supposons un maximum local (l'autre cas s'en déduit avec $-f$). Comme $U$ est ouvert, il existe $r > 0$ tel que $g_i(t) = f(a + t e_i)$ soit défini sur $]-r ; r[$ et vérifie $g_i(t) \\le g_i(0)$ pour $|t|$ assez petit.\n2. $g_i$ est dérivable en $0$ avec $g_i'(0) = \\frac{\\partial f}{\\partial x_i}(a)$.\n3. Pour $t > 0$ petit, $\\frac{g_i(t) - g_i(0)}{t} \\le 0$, donc $g_i'(0) \\le 0$ ; pour $t < 0$, ce quotient est $\\ge 0$, donc $g_i'(0) \\ge 0$.\n4. Ainsi $\\frac{\\partial f}{\\partial x_i}(a) = 0$ pour tout $i$, c'est-à-dire $\\nabla f(a) = 0$.\n**Théorème 2.** Si $f$ est de classe $\\mathcal{C}^2$ sur $U$, $\\nabla f(a) = 0$ et $H_f(a)$ a toutes ses valeurs propres **strictement positives**, alors $f$ admet un minimum local strict en $a$.\n**Démonstration.**\n1. Notons $\\lambda > 0$ la plus petite valeur propre de $H_f(a)$. Par le théorème spectral, ${}^t h\\, H_f(a)\\, h \\ge \\lambda \\|h\\|^2$ pour tout $h$.\n2. Taylor-Young : $f(a + h) - f(a) = \\frac{1}{2} {}^t h\\, H_f(a)\\, h + \\|h\\|^2 \\varepsilon(h)$ avec $\\varepsilon(h) \\to 0$.\n3. Choisissons $r > 0$ tel que $|\\varepsilon(h)| \\le \\frac{\\lambda}{4}$ pour $\\|h\\| < r$. Alors $f(a + h) - f(a) \\ge \\frac{\\lambda}{4}\\|h\\|^2 > 0$ pour $0 < \\|h\\| < r$.\nDe même, si $f$ a un minimum local en $a$, alors $H_f(a)$ est positive (valeurs propres $\\ge 0$)."
      },
      {
        "title": "5. Classification des points critiques",
        "content": "Soit $f$ de classe $\\mathcal{C}^2$ sur l'ouvert $U$ et $a$ un **point critique** ($\\nabla f(a) = 0$).\n• Valeurs propres de $H_f(a)$ toutes $> 0$ : minimum local strict. Toutes $< 0$ : maximum local strict. Deux valeurs propres de signes **strictement opposés** : **point col** (pas d'extremum). Une valeur propre nulle sans signes opposés : cas **douteux**.\n• **En dimension 2**, avec les notations de Monge $r = \\frac{\\partial^2 f}{\\partial x^2}(a)$, $s = \\frac{\\partial^2 f}{\\partial x \\partial y}(a)$, $t = \\frac{\\partial^2 f}{\\partial y^2}(a)$ : $rt - s^2 = \\det H_f(a)$ est le produit des valeurs propres et $r + t$ leur somme.\n1. $rt - s^2 > 0$ et $r > 0$ : minimum local strict ;\n2. $rt - s^2 > 0$ et $r < 0$ : maximum local strict ;\n3. $rt - s^2 < 0$ : point col ;\n4. $rt - s^2 = 0$ : on ne peut pas conclure à l'ordre 2 ($x^4 + y^4$, $-x^4 - y^4$ et $x^4 - y^4$ ont tous une hessienne nulle en $(0, 0)$)."
      },
      {
        "title": "6. Extremums globaux sur un compact",
        "content": "• Une fonction **continue** sur une partie **fermée bornée** (compacte) $K$ de $\\mathbb{R}^n$ est bornée et atteint ses bornes.\n• **Stratégie** : écrire $K = \\mathring{K} \\cup \\partial K$. Un extremum atteint dans l'intérieur $\\mathring{K}$ (ouvert) est un point critique ; sur le bord $\\partial K$, on paramètre le bord et on se ramène à une fonction d'une variable.\n• On compare ensuite les valeurs obtenues aux points critiques intérieurs et sur le bord."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver et classer les points critiques en dimension 2",
        "example": "Classer les points critiques de $f(x, y) = x^3 + y^3 - 3xy$ sur $\\mathbb{R}^2$.",
        "steps": [
          "**Gradient** : $\\frac{\\partial f}{\\partial x} = 3x^2 - 3y$, $\\frac{\\partial f}{\\partial y} = 3y^2 - 3x$. Le système donne $y = x^2$ puis $x^4 = x$, soit $x(x^3 - 1) = 0$.",
          "**Points critiques** : $(0, 0)$ et $(1, 1)$.",
          "**Dérivées secondes** : $r = 6x$, $s = -3$, $t = 6y$, donc $rt - s^2 = 36xy - 9$.",
          "**En $(0, 0)$** : $rt - s^2 = -9 < 0$ : point col.",
          "**En $(1, 1)$** : $rt - s^2 = 27 > 0$ et $r = 6 > 0$ : minimum local strict, de valeur $f(1, 1) = -1$. Ce n'est pas un minimum global : $f(x, 0) = x^3 \\to -\\infty$ quand $x \\to -\\infty$."
        ]
      },
      {
        "title": "Méthode : Extremums d'une fonction continue sur un disque fermé",
        "example": "Déterminer les extremums de $f(x, y) = x^2 + 2y^2 - x$ sur $D = \\{x^2 + y^2 \\le 1\\}$.",
        "steps": [
          "**Existence** : $f$ est continue sur le compact $D$, elle atteint son minimum et son maximum.",
          "**Intérieur** : $\\nabla f = (2x - 1, 4y) = 0 \\iff (x, y) = \\left(\\frac{1}{2}, 0\\right)$, intérieur à $D$, et $f\\left(\\frac{1}{2}, 0\\right) = -\\frac{1}{4}$.",
          "**Bord** : pour $(\\cos\\theta, \\sin\\theta)$, $f = 1 + \\sin^2\\theta - \\cos\\theta = 2 - c^2 - c$ avec $c = \\cos\\theta \\in [-1 ; 1]$. La fonction $c \\mapsto 2 - c^2 - c$ est maximale en $c = -\\frac{1}{2}$ (valeur $\\frac{9}{4}$) et minimale en $c = 1$ (valeur $0$).",
          "**Conclusion** : $\\min_D f = -\\frac{1}{4}$, atteint en $\\left(\\frac{1}{2}, 0\\right)$ ; $\\max_D f = \\frac{9}{4}$, atteint en $\\left(-\\frac{1}{2}, \\pm\\frac{\\sqrt{3}}{2}\\right)$, points où le gradient $(-2, \\pm 2\\sqrt{3})$ n'est pas nul."
        ]
      }
    ],
    "traps": [
      "L'existence des dérivées partielles n'entraîne pas la continuité : $f(x, y) = \\frac{xy}{x^2 + y^2}$, $f(0, 0) = 0$, a des dérivées partielles nulles en $(0, 0)$ mais $f(t, t) = \\frac{1}{2}$. Il suffit en revanche que $f$ soit de classe $\\mathcal{C}^1$.",
      "$\\nabla f(a) = 0$ est nécessaire mais pas suffisant : $f(x, y) = x^2 - y^2$ a un point critique en $(0, 0)$ qui est un point col.",
      "La condition $\\nabla f(a) = 0$ ne vaut qu'en un point **intérieur** : sur un domaine fermé, un extremum peut être atteint au bord avec un gradient non nul (méthode 2).",
      "Si $rt - s^2 = 0$, le test d'ordre 2 ne conclut pas : $x^4 + y^4$ (minimum) et $x^4 - y^4$ (col) ont la même hessienne nulle en $(0, 0)$.",
      "Un minimum local n'est pas forcément global, même s'il est l'unique extremum local (méthode 1)."
    ],
    "flashcards": [
      {
        "q": "Que dit le théorème de Schwarz et sous quelle hypothèse ?",
        "a": "Si $f$ est de classe $\\mathcal{C}^2$ sur un ouvert, alors $\\frac{\\partial^2 f}{\\partial x_i \\partial x_j} = \\frac{\\partial^2 f}{\\partial x_j \\partial x_i}$."
      },
      {
        "q": "Quelle condition nécessaire vérifie un extremum local d'une fonction différentiable sur un ouvert ?",
        "a": "Le gradient s'annule : $\\nabla f(a) = 0$ (point critique)."
      },
      {
        "q": "Comment se démontre la condition $\\nabla f(a) = 0$ ?",
        "a": "Chaque fonction $t \\mapsto f(a + t e_i)$ a un extremum local en $0$, intérieur à son intervalle de définition, donc sa dérivée $\\frac{\\partial f}{\\partial x_i}(a)$ y est nulle."
      },
      {
        "q": "Classer un point critique avec $rt - s^2$ en dimension 2.",
        "a": "$rt - s^2 > 0$ : extremum (minimum si $r > 0$, maximum si $r < 0$) ; $rt - s^2 < 0$ : point col ; $rt - s^2 = 0$ : on ne peut pas conclure."
      },
      {
        "q": "Énoncer la règle de la chaîne en termes de matrices jacobiennes.",
        "a": "$J_{g \\circ f}(a) = J_g(f(a))\\, J_f(a)$."
      },
      {
        "q": "Une fonction de classe $\\mathcal{C}^1$ sur un ouvert est-elle différentiable ?",
        "a": "Oui, en tout point de l'ouvert ; la réciproque est fausse."
      }
    ]
  },
  "L2-DET": {
    "title": "L2-DET : Déterminants, formes multilinéaires alternées et comatrice",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Définir le déterminant comme l'unique forme $n$-linéaire alternée valant 1 sur une base donnée.",
      "Démontrer la multiplicativité du déterminant et en déduire la caractérisation des matrices inversibles.",
      "Calculer des déterminants par opérations élémentaires et par développement selon une ligne ou une colonne.",
      "Démontrer et utiliser la formule de la comatrice et les formules de Cramer."
    ],
    "keyPoints": [
      {
        "title": "1. Formes multilinéaires alternées et définition du déterminant",
        "content": "Soit $E$ un $\\mathbb{K}$-espace vectoriel de dimension $n$ et $\\mathcal{B} = (e_1, \\dots, e_n)$ une base.\n• Une forme $n$-linéaire $\\varphi$ est **alternée** si $\\varphi(x_1, \\dots, x_n) = 0$ dès que deux des $x_i$ sont égaux. Elle est alors **antisymétrique** (échanger deux vecteurs change le signe) et s'annule sur toute famille liée.\n• **Théorème** : les formes $n$-linéaires alternées sur $E$ forment une droite vectorielle ; il en existe une unique, notée $\\det_\\mathcal{B}$, telle que $\\det_\\mathcal{B}(e_1, \\dots, e_n) = 1$. Toute forme $n$-linéaire alternée vérifie $\\varphi = \\varphi(e_1, \\dots, e_n)\\, \\det_\\mathcal{B}$.\n• **Formule de Leibniz** : pour $A = (a_{ij})$, $\\det(A) = \\sum_{\\sigma \\in \\mathfrak{S}_n} \\varepsilon(\\sigma) \\prod_{j=1}^n a_{\\sigma(j), j}$, où $\\varepsilon$ est la signature.\n• Pour $u \\in \\mathcal{L}(E)$, $\\det(u) = \\det(\\text{Mat}_\\mathcal{B}(u))$ ne dépend pas de la base $\\mathcal{B}$."
      },
      {
        "title": "2. Démonstration : multiplicativité du déterminant",
        "content": "**Théorème.** Pour $A, B \\in \\mathcal{M}_n(\\mathbb{K})$, $\\det(AB) = \\det(A)\\det(B)$.\n**Démonstration.**\n1. Fixons $A$ et définissons, pour des colonnes $X_1, \\dots, X_n \\in \\mathbb{K}^n$, $\\varphi(X_1, \\dots, X_n) = \\det(A X_1, \\dots, A X_n)$.\n2. $\\varphi$ est $n$-linéaire (car $X \\mapsto AX$ est linéaire et $\\det$ est $n$-linéaire) et alternée (si $X_i = X_j$, alors $A X_i = A X_j$ et le déterminant est nul).\n3. Par le théorème précédent, $\\varphi = \\varphi(E_1, \\dots, E_n) \\det$, où $(E_j)$ est la base canonique. Or $A E_j$ est la $j$-ième colonne de $A$, donc $\\varphi(E_1, \\dots, E_n) = \\det(A)$.\n4. La $j$-ième colonne de $AB$ est $A B_j$, où $B_j$ est la $j$-ième colonne de $B$. Donc $\\det(AB) = \\varphi(B_1, \\dots, B_n) = \\det(A)\\det(B)$.\n**Conséquences.** Si $A$ est inversible, $\\det(A)\\det(A^{-1}) = \\det(I_n) = 1$, donc $\\det(A) \\neq 0$ et $\\det(A^{-1}) = \\frac{1}{\\det(A)}$ ; si $A$ n'est pas inversible, ses colonnes sont liées et $\\det(A) = 0$. Deux matrices semblables ont le même déterminant."
      },
      {
        "title": "3. Propriétés et opérations élémentaires",
        "content": "• $\\det({}^t A) = \\det(A)$ : tout ce qui est vrai pour les colonnes l'est pour les lignes.\n• $\\det(\\lambda A) = \\lambda^n \\det(A)$.\n• **Opérations élémentaires** : échanger deux colonnes (ou lignes) change le signe ; multiplier une colonne par $\\lambda$ multiplie le déterminant par $\\lambda$ ; ajouter à une colonne une combinaison linéaire des **autres** ne change pas le déterminant.\n• Le déterminant d'une matrice triangulaire est le produit de ses coefficients diagonaux.\n• **Matrice triangulaire par blocs** : $\\det\\begin{pmatrix} A & B \\\\ 0 & C \\end{pmatrix} = \\det(A)\\det(C)$ pour $A, C$ carrées.\n• Une famille de $n$ vecteurs de $E$ est une base si et seulement si son déterminant dans une base $\\mathcal{B}$ est non nul."
      },
      {
        "title": "4. Développement selon une ligne ou une colonne, comatrice",
        "content": "Notons $\\Delta_{ij}$ le déterminant de la matrice obtenue en supprimant la ligne $i$ et la colonne $j$ de $A$ (mineur), et $C_{ij} = (-1)^{i+j} \\Delta_{ij}$ le **cofacteur**.\n• **Développement** selon la colonne $j$ : $\\det(A) = \\sum_{i=1}^n a_{ij} C_{ij}$ ; selon la ligne $i$ : $\\det(A) = \\sum_{j=1}^n a_{ij} C_{ij}$.\n• **Comatrice** : $\\text{Com}(A) = (C_{ij})_{i,j}$.\n• **Formule de la comatrice** : $A\\, {}^t\\text{Com}(A) = {}^t\\text{Com}(A)\\, A = \\det(A)\\, I_n$. Si $\\det(A) \\neq 0$ : $A^{-1} = \\frac{1}{\\det(A)}\\, {}^t\\text{Com}(A)$.\n• **Démonstration de ${}^t\\text{Com}(A)\\,A = \\det(A) I_n$** : le coefficient $(i, j)$ du produit est $\\sum_{k=1}^n C_{ki}\\, a_{kj}$. C'est le développement selon la colonne $i$ du déterminant de la matrice $A'$ obtenue en remplaçant la colonne $i$ de $A$ par sa colonne $j$ (les cofacteurs de la colonne $i$ ne dépendent pas de cette colonne). Si $i = j$, $A' = A$ et on obtient $\\det(A)$ ; si $i \\neq j$, $A'$ a deux colonnes égales et le résultat est $0$. L'autre égalité se prouve de même avec les lignes."
      },
      {
        "title": "5. Formules de Cramer",
        "content": "Soit $A \\in GL_n(\\mathbb{K})$ et $B \\in \\mathbb{K}^n$. L'unique solution de $AX = B$ est donnée par\n$$x_i = \\frac{\\det(A_i)}{\\det(A)}, \\qquad 1 \\le i \\le n,$$\noù $A_i$ est obtenue en remplaçant la $i$-ième colonne de $A$ par $B$.\n• **Démonstration** : si $C_1, \\dots, C_n$ sont les colonnes de $A$, alors $B = \\sum_j x_j C_j$. Par linéarité par rapport à la colonne $i$, $\\det(A_i) = \\sum_j x_j \\det(C_1, \\dots, C_j, \\dots, C_n)$ ($C_j$ en position $i$) ; tous les termes $j \\neq i$ ont deux colonnes égales, il reste $x_i \\det(A)$.\n• Ces formules ont surtout un intérêt théorique (les solutions dépendent continûment, voire rationnellement, des coefficients) ; pour le calcul, on préfère le pivot de Gauss."
      },
      {
        "title": "6. Déterminant de Vandermonde",
        "content": "Pour $x_1, \\dots, x_n \\in \\mathbb{K}$ :\n$$V(x_1, \\dots, x_n) = \\det\\left(x_i^{\\,j-1}\\right)_{1 \\le i, j \\le n} = \\prod_{1 \\le i < j \\le n} (x_j - x_i).$$\n• Il est non nul si et seulement si les $x_i$ sont deux à deux distincts.\n• **Idée de preuve** : $P(X) = V(x_1, \\dots, x_{n-1}, X)$ est un polynôme de degré au plus $n - 1$, qui s'annule en $x_1, \\dots, x_{n-1}$ et dont le coefficient de $X^{n-1}$ est $V(x_1, \\dots, x_{n-1})$ ; on conclut par récurrence.\n• **Application** : existence et unicité du polynôme d'interpolation de Lagrange de degré au plus $n - 1$ passant par $n$ points d'abscisses distinctes."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un déterminant 3x3 par opérations élémentaires",
        "example": "Calculer $\\det(A)$ pour $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 5 & 7 \\\\ 3 & 7 & 11 \\end{pmatrix}$.",
        "steps": [
          "**$L_2 \\leftarrow L_2 - 2L_1$ et $L_3 \\leftarrow L_3 - 3L_1$** (déterminant inchangé) : $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 1 & 2 \\end{pmatrix}$.",
          "**$L_3 \\leftarrow L_3 - L_2$** : $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$.",
          "**Conclusion** : matrice triangulaire, donc $\\det(A) = 1 \\times 1 \\times 1 = 1$. Contrôle par la règle de Sarrus : $55 + 42 + 42 - 45 - 49 - 44 = 1$."
        ]
      },
      {
        "title": "Méthode : Inverser une matrice par la comatrice",
        "example": "Inverser $A = \\begin{pmatrix} 2 & 0 & 1 \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{pmatrix}$.",
        "steps": [
          "**Déterminant** (développement selon la première ligne) : $\\det(A) = 2(1 \\cdot 1 - 0 \\cdot 1) - 0 + 1(1 \\cdot 1 - 1 \\cdot 0) = 3 \\neq 0$.",
          "**Cofacteurs** : $C_{11} = 1$, $C_{12} = -1$, $C_{13} = 1$, $C_{21} = 1$, $C_{22} = 2$, $C_{23} = -2$, $C_{31} = -1$, $C_{32} = 1$, $C_{33} = 2$.",
          "**Transposée de la comatrice** : ${}^t\\text{Com}(A) = \\begin{pmatrix} 1 & 1 & -1 \\\\ -1 & 2 & 1 \\\\ 1 & -2 & 2 \\end{pmatrix}$.",
          "**Inverse** : $A^{-1} = \\frac{1}{3}\\begin{pmatrix} 1 & 1 & -1 \\\\ -1 & 2 & 1 \\\\ 1 & -2 & 2 \\end{pmatrix}$. Contrôle : la première ligne de $A$ fois les colonnes de ${}^t\\text{Com}(A)$ donne $(3, 0, 0)$."
        ]
      }
    ],
    "traps": [
      "$\\det(\\lambda A) = \\lambda^n \\det(A)$ et non $\\lambda \\det(A)$ : $\\det(2 I_3) = 8$.",
      "Le déterminant n'est pas additif : $\\det(I_2 + I_2) = 4 \\neq \\det(I_2) + \\det(I_2) = 2$.",
      "Dans la formule d'inversion, c'est la **transposée** de la comatrice qui intervient : $A^{-1} = \\frac{1}{\\det(A)}\\, {}^t\\text{Com}(A)$.",
      "L'opération $L_i \\leftarrow \\alpha L_i + \\beta L_j$ multiplie le déterminant par $\\alpha$ : seules les opérations $L_i \\leftarrow L_i + \\beta L_j$ ($j \\neq i$) le laissent inchangé.",
      "La règle de Sarrus ne vaut que pour les matrices $3 \\times 3$ ; elle ne se généralise pas en dimension $4$."
    ],
    "flashcards": [
      {
        "q": "Que vaut $\\det(\\lambda A)$ pour $A \\in \\mathcal{M}_n(\\mathbb{K})$ ?",
        "a": "$\\lambda^n \\det(A)$."
      },
      {
        "q": "Idée de la preuve de $\\det(AB) = \\det(A)\\det(B)$ ?",
        "a": "$(X_1, \\dots, X_n) \\mapsto \\det(AX_1, \\dots, AX_n)$ est $n$-linéaire alternée, donc égale à $\\det(A)\\det$ ; on l'applique aux colonnes de $B$."
      },
      {
        "q": "Quelle formule relie $A$ et sa comatrice ?",
        "a": "$A\\, {}^t\\text{Com}(A) = {}^t\\text{Com}(A)\\, A = \\det(A) I_n$, d'où $A^{-1} = \\frac{1}{\\det A}\\, {}^t\\text{Com}(A)$ si $\\det A \\neq 0$."
      },
      {
        "q": "Énoncer les formules de Cramer.",
        "a": "Si $A$ est inversible, la solution de $AX = B$ vérifie $x_i = \\frac{\\det(A_i)}{\\det(A)}$, où $A_i$ est $A$ avec la colonne $i$ remplacée par $B$."
      },
      {
        "q": "Que vaut le déterminant de Vandermonde $V(x_1, \\dots, x_n)$ ?",
        "a": "$\\prod_{1 \\le i < j \\le n} (x_j - x_i)$."
      },
      {
        "q": "Quelles opérations élémentaires laissent le déterminant inchangé ?",
        "a": "Ajouter à une ligne (ou colonne) une combinaison linéaire des autres lignes (ou colonnes)."
      }
    ]
  },
  "L2-RED2": {
    "title": "L2-RED2 : Réduction des endomorphismes II : Trigonalisation et Cayley-Hamilton",
    "domain": "Algèbre Linéaire Avancée",
    "objectives": [
      "Manipuler les polynômes d'endomorphismes, les polynômes annulateurs et le polynôme minimal $\\pi_u$.",
      "Énoncer le lemme des noyaux et caractériser la diagonalisabilité par un polynôme annulateur scindé à racines simples.",
      "Énoncer et appliquer le critère de trigonalisabilité (polynôme caractéristique scindé).",
      "Démontrer le théorème de Cayley-Hamilton $\\chi_u(u) = 0$ et utiliser la décomposition de Dunford $u = d + n$."
    ],
    "keyPoints": [
      {
        "title": "1. Polynômes d'endomorphismes et polynômes annulateurs",
        "content": "Soit $E$ de dimension finie $n$ et $u \\in \\mathcal{L}(E)$. Pour $P = \\sum a_k X^k$, on pose $P(u) = \\sum a_k u^k$ (avec $u^0 = \\text{Id}_E$).\n• $P \\mapsto P(u)$ est un morphisme d'algèbres : $(PQ)(u) = P(u) \\circ Q(u) = Q(u) \\circ P(u)$.\n• $\\text{Ker}\\,P(u)$ et $\\text{Im}\\,P(u)$ sont stables par $u$.\n• Si $u(x) = \\lambda x$, alors $P(u)(x) = P(\\lambda) x$. Par conséquent, si $P(u) = 0$, **toute valeur propre de $u$ est racine de $P$**.\n• $P$ est **annulateur** de $u$ si $P(u) = 0$. Il en existe toujours de non nuls : la famille $(\\text{Id}_E, u, \\dots, u^{n^2})$ de $\\mathcal{L}(E)$, de dimension $n^2$, est liée."
      },
      {
        "title": "2. Polynôme minimal",
        "content": "• Les polynômes annulateurs de $u$ forment un idéal non nul de $\\mathbb{K}[X]$ ; son unique générateur unitaire est le **polynôme minimal** $\\pi_u$. Ainsi $P(u) = 0 \\iff \\pi_u \\mid P$.\n• **Les racines de $\\pi_u$ dans $\\mathbb{K}$ sont exactement les valeurs propres de $u$.** (Une valeur propre annule tout polynôme annulateur ; réciproquement, si $\\pi_u(\\lambda) = 0$, on écrit $\\pi_u = (X - \\lambda) Q$ avec $Q(u) \\neq 0$ par minimalité, et tout $y = Q(u)(x) \\neq 0$ vérifie $(u - \\lambda\\,\\text{Id})(y) = 0$.)\n• **Exemples** : $\\pi_{\\text{Id}} = X - 1$ ; pour un projecteur $p \\neq 0, \\text{Id}$ : $\\pi_p = X^2 - X$ ; pour $N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ : $\\pi_N = X^2$."
      },
      {
        "title": "3. Lemme des noyaux et diagonalisabilité",
        "content": "• **Lemme des noyaux** : si $P_1, \\dots, P_k$ sont deux à deux premiers entre eux et $P = P_1 \\cdots P_k$, alors\n$$\\text{Ker}\\,P(u) = \\bigoplus_{i=1}^k \\text{Ker}\\,P_i(u).$$\n(Pour $k = 2$ : une relation de Bézout $U P_1 + V P_2 = 1$ donne $x = (UP_1)(u)(x) + (VP_2)(u)(x)$, chaque terme étant dans le bon noyau ; on récurre ensuite sur $k$.)\n• **Théorème** : $u$ est diagonalisable $\\iff$ $u$ annule un polynôme **scindé à racines simples** $\\iff$ $\\pi_u$ est scindé à racines simples.\n• Sens direct : si $\\text{Sp}(u) = \\{\\lambda_1, \\dots, \\lambda_p\\}$, le polynôme $\\prod (X - \\lambda_i)$ annule $u$ sur chaque $E_{\\lambda_i}$, donc sur $E = \\bigoplus E_{\\lambda_i}$. Réciproque : le lemme des noyaux donne $E = \\bigoplus \\text{Ker}(u - \\lambda_i\\,\\text{Id})$.\n• **Conséquences** : un projecteur ($X^2 - X$) et une symétrie ($X^2 - 1$) sont diagonalisables ; la restriction d'un endomorphisme diagonalisable à un sous-espace stable est diagonalisable."
      },
      {
        "title": "4. Trigonalisation",
        "content": "• $u$ est **trigonalisable** s'il existe une base dans laquelle sa matrice est triangulaire supérieure.\n• **Théorème** : $u$ est trigonalisable si et seulement si $\\chi_u$ est **scindé** sur $\\mathbb{K}$. Sur $\\mathbb{C}$, tout endomorphisme est trigonalisable (théorème de d'Alembert-Gauss).\n• Dans une base de trigonalisation, la diagonale contient les valeurs propres répétées selon leur multiplicité ; d'où $\\text{tr}(u) = \\sum \\lambda_i$ et $\\det(u) = \\prod \\lambda_i$.\n• $u$ est **nilpotent** $\\iff$ $\\chi_u = X^n$ $\\iff$ $u$ est trigonalisable avec une diagonale nulle. En particulier, un nilpotent vérifie $u^n = 0$."
      },
      {
        "title": "5. Démonstration du théorème de Cayley-Hamilton",
        "content": "**Théorème.** Pour tout $A \\in \\mathcal{M}_n(\\mathbb{K})$, $\\chi_A(A) = 0$, où $\\chi_A(X) = \\det(X I_n - A) = \\sum_{k=0}^n c_k X^k$ ($c_n = 1$).\n**Démonstration.**\n1. Dans $\\mathcal{M}_n(\\mathbb{K}[X])$, la formule de la comatrice (valable sur tout anneau commutatif) donne $(X I_n - A)\\, {}^t\\text{Com}(X I_n - A) = \\chi_A(X)\\, I_n$.\n2. Les coefficients de ${}^t\\text{Com}(X I_n - A)$ sont des déterminants d'ordre $n - 1$, donc des polynômes de degré au plus $n - 1$ : on écrit ${}^t\\text{Com}(X I_n - A) = \\sum_{k=0}^{n-1} X^k B_k$ avec $B_k \\in \\mathcal{M}_n(\\mathbb{K})$.\n3. En développant et en identifiant les coefficients des puissances de $X$ (licite car $\\mathcal{M}_n(\\mathbb{K}[X])$ s'identifie à $\\mathcal{M}_n(\\mathbb{K})[X]$) :\n$$B_{n-1} = I_n, \\qquad B_{k-1} - A B_k = c_k I_n \\ (1 \\le k \\le n-1), \\qquad -A B_0 = c_0 I_n.$$\n4. On multiplie à gauche la relation d'indice $k$ par $A^k$ et on somme : $\\sum_{k=0}^n c_k A^k = A^n B_{n-1} + \\sum_{k=1}^{n-1}\\left(A^k B_{k-1} - A^{k+1} B_k\\right) - A B_0$.\n5. Cette somme est télescopique : elle vaut $0$. Donc $\\chi_A(A) = 0$.\n**Conséquences** : $\\pi_u$ divise $\\chi_u$, donc $\\deg \\pi_u \\le n$ ; si $A$ est inversible ($c_0 \\neq 0$), $A^{-1}$ est un polynôme en $A$."
      },
      {
        "title": "6. Sous-espaces caractéristiques et décomposition de Dunford",
        "content": "On suppose $\\chi_u = \\prod_{i=1}^p (X - \\lambda_i)^{m_i}$ scindé, les $\\lambda_i$ étant distincts.\n• **Sous-espaces caractéristiques** : $N_i = \\text{Ker}(u - \\lambda_i\\,\\text{Id})^{m_i}$. Par Cayley-Hamilton et le lemme des noyaux, $E = \\bigoplus_{i=1}^p N_i$, chaque $N_i$ est stable par $u$ et $\\dim N_i = m_i$.\n• **Décomposition de Dunford** : il existe un **unique** couple $(d, n)$ d'endomorphismes tel que $u = d + n$, $d$ diagonalisable, $n$ nilpotent et $d \\circ n = n \\circ d$. De plus, $d$ et $n$ sont des polynômes en $u$ ; $d$ agit sur $N_i$ comme $\\lambda_i\\,\\text{Id}$.\n• **Usage** : $u^k = \\sum_{j=0}^{k} \\binom{k}{j} d^{k-j} n^j$, somme qui s'arrête à $j = r - 1$ si $n^r = 0$ ; de même $e^{u} = e^{d} e^{n}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer $A^k$ par division euclidienne",
        "example": "Calculer $A^k$ pour $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$ et $k \\in \\mathbb{N}$.",
        "steps": [
          "**Polynôme annulateur** : $\\chi_A = (X - 3)(X + 1)$ annule $A$ (Cayley-Hamilton).",
          "**Division euclidienne** : $X^k = Q(X)\\chi_A(X) + a X + b$ (reste de degré au plus 1).",
          "**Évaluation aux racines** : en $3$ et $-1$ : $3^k = 3a + b$ et $(-1)^k = -a + b$, d'où $a = \\frac{3^k - (-1)^k}{4}$ et $b = \\frac{3^k + 3(-1)^k}{4}$.",
          "**Conclusion** : $A^k = a A + b I_2 = \\frac{1}{2}\\begin{pmatrix} 3^k + (-1)^k & 3^k - (-1)^k \\\\ 3^k - (-1)^k & 3^k + (-1)^k \\end{pmatrix}$, résultat identique à celui obtenu par diagonalisation."
        ]
      },
      {
        "title": "Méthode : Décomposition de Dunford et exponentielle",
        "example": "Calculer $A^k$ et $\\exp(tA)$ pour $A = \\begin{pmatrix} 3 & 2 \\\\ 0 & 3 \\end{pmatrix}$.",
        "steps": [
          "**Décomposition** : $D = 3 I_2$ et $N = A - D = \\begin{pmatrix} 0 & 2 \\\\ 0 & 0 \\end{pmatrix}$. $D$ est diagonale, $N^2 = 0$ et $DN = ND$ ($D$ est scalaire) : c'est la décomposition de Dunford.",
          "**Puissances** : par la formule du binôme (licite car $D$ et $N$ commutent), $A^k = 3^k I_2 + k\\, 3^{k-1} N = \\begin{pmatrix} 3^k & 2k\\, 3^{k-1} \\\\ 0 & 3^k \\end{pmatrix}$.",
          "**Exponentielle** : $tD$ et $tN$ commutent, donc $\\exp(tA) = \\exp(3t I_2)\\exp(tN) = e^{3t}(I_2 + tN)$.",
          "**Conclusion** : $\\exp(tA) = \\begin{pmatrix} e^{3t} & 2t\\, e^{3t} \\\\ 0 & e^{3t} \\end{pmatrix}$."
        ]
      }
    ],
    "traps": [
      "La « preuve » $\\chi_A(A) = \\det(A - A) = 0$ est fausse : $\\chi_A(A)$ est une matrice obtenue en substituant $A$ dans un polynôme, alors que $\\det(A I_n - A)$ est un scalaire ; les deux objets ne sont pas de même nature.",
      "Dans Dunford, la commutation est essentielle : pour $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 2 \\end{pmatrix}$ (diagonalisable), la décomposition est $D = A$, $N = 0$ ; l'écriture $\\text{diag}(1, 2) + \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ n'est pas celle de Dunford car ces deux matrices ne commutent pas.",
      "Une racine d'un polynôme annulateur n'est pas forcément valeur propre : $X(X - 1)$ annule $\\text{Id}_E$, mais $0$ n'est pas valeur propre de $\\text{Id}_E$. Seules les racines de $\\pi_u$ sont exactement les valeurs propres.",
      "Trigonalisable ne signifie pas diagonalisable : $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ est triangulaire mais non diagonalisable.",
      "$\\pi_u$ divise $\\chi_u$ mais peut être strictement plus petit : $\\pi_{I_n} = X - 1$ alors que $\\chi_{I_n} = (X - 1)^n$."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème de Cayley-Hamilton.",
        "a": "Tout endomorphisme d'un espace de dimension finie annule son polynôme caractéristique : $\\chi_u(u) = 0$."
      },
      {
        "q": "Quelle est l'idée d'une preuve correcte de Cayley-Hamilton ?",
        "a": "Écrire ${}^t\\text{Com}(XI_n - A) = \\sum X^k B_k$, identifier les coefficients dans $(XI_n - A)\\,{}^t\\text{Com}(XI_n - A) = \\chi_A(X) I_n$, puis faire une somme télescopique après multiplication par $A^k$."
      },
      {
        "q": "Caractériser la diagonalisabilité par le polynôme minimal.",
        "a": "$u$ est diagonalisable si et seulement si $\\pi_u$ est scindé à racines simples, si et seulement si $u$ annule un polynôme scindé à racines simples."
      },
      {
        "q": "Énoncer le lemme des noyaux.",
        "a": "Si $P_1, \\dots, P_k$ sont deux à deux premiers entre eux, $\\text{Ker}\\,(P_1 \\cdots P_k)(u) = \\bigoplus_i \\text{Ker}\\,P_i(u)$."
      },
      {
        "q": "Quand un endomorphisme est-il trigonalisable ?",
        "a": "Si et seulement si son polynôme caractéristique est scindé ; c'est toujours le cas sur $\\mathbb{C}$."
      },
      {
        "q": "Que contient la décomposition de Dunford ?",
        "a": "Si $\\chi_u$ est scindé : $u = d + n$ de façon unique, avec $d$ diagonalisable, $n$ nilpotent et $dn = nd$ ; $d$ et $n$ sont des polynômes en $u$."
      }
    ]
  },
  "L2-DUA": {
    "title": "L2-DUA : Dualité en dimension finie, base duale et orthogonalité",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Définir l'espace dual $E^{\\ast} = \\mathcal{L}(E, \\mathbb{K})$, les formes linéaires et les hyperplans.",
      "Construire la base duale $(e_1^{\\ast}, \\dots, e_n^{\\ast})$ associée à une base de $E$ et l'utiliser pour calculer des coordonnées.",
      "Démontrer la formule $\\dim F + \\dim F^{\\circ} = \\dim E$ et décrire un sous-espace par des équations.",
      "Définir la transposée ${}^t u \\in \\mathcal{L}(F^{\\ast}, E^{\\ast})$ et relier son noyau et son image à ceux de $u$."
    ],
    "keyPoints": [
      {
        "title": "1. Formes linéaires, dual, hyperplans",
        "content": "Soit $E$ un $\\mathbb{K}$-espace vectoriel.\n• Une **forme linéaire** est une application linéaire $\\varphi : E \\to \\mathbb{K}$ ; l'**espace dual** est $E^{\\ast} = \\mathcal{L}(E, \\mathbb{K})$.\n• **Exemples** : $(x_1, \\dots, x_n) \\mapsto \\sum a_i x_i$ sur $\\mathbb{K}^n$ ; $A \\mapsto \\text{tr}(A)$ sur $\\mathcal{M}_n(\\mathbb{K})$ ; $P \\mapsto P(a)$ sur $\\mathbb{K}[X]$ ; $f \\mapsto \\int_a^b f$ sur $\\mathcal{C}([a ; b], \\mathbb{R})$.\n• Si $\\dim E = n$, alors $\\dim E^{\\ast} = n$.\n• **Hyperplans** : $H$ est un hyperplan ($\\dim H = n - 1$ en dimension finie) si et seulement si $H = \\text{Ker}\\,\\varphi$ pour une forme $\\varphi$ non nulle. Deux formes non nulles ont le même noyau si et seulement si elles sont colinéaires."
      },
      {
        "title": "2. Base duale",
        "content": "Soit $\\mathcal{B} = (e_1, \\dots, e_n)$ une base de $E$.\n• Pour chaque $i$, il existe une unique forme $e_i^{\\ast}$ telle que $e_i^{\\ast}(e_j) = \\delta_{ij}$ (une application linéaire est déterminée par les images d'une base). La famille $\\mathcal{B}^{\\ast} = (e_1^{\\ast}, \\dots, e_n^{\\ast})$ est une base de $E^{\\ast}$, appelée **base duale**.\n• $e_i^{\\ast}$ est la **$i$-ième forme coordonnée** : $x = \\sum_{i=1}^n e_i^{\\ast}(x)\\, e_i$ pour tout $x \\in E$.\n• Toute forme se décompose en $\\varphi = \\sum_{i=1}^n \\varphi(e_i)\\, e_i^{\\ast}$.\n• Réciproquement, toute base de $E^{\\ast}$ est la base duale d'une unique base de $E$ (base **antéduale**).\n• **Exemple** : pour $a_0, \\dots, a_n$ distincts, les formes $P \\mapsto P(a_i)$ forment une base de $\\mathbb{K}_n[X]^{\\ast}$, duale de la base des polynômes de Lagrange $(L_0, \\dots, L_n)$, puisque $L_j(a_i) = \\delta_{ij}$."
      },
      {
        "title": "3. Orthogonalité au sens de la dualité",
        "content": "• Pour une partie $F$ de $E$ : $F^{\\circ} = \\{\\varphi \\in E^{\\ast} \\mid \\forall x \\in F,\\ \\varphi(x) = 0\\}$, sous-espace de $E^{\\ast}$.\n• Pour une partie $G$ de $E^{\\ast}$ : $G^{\\circ} = \\{x \\in E \\mid \\forall \\varphi \\in G,\\ \\varphi(x) = 0\\}$, sous-espace de $E$.\n• En dimension finie : $\\dim F + \\dim F^{\\circ} = \\dim E$, $\\dim G + \\dim G^{\\circ} = \\dim E$ (pour des sous-espaces), et $(F^{\\circ})^{\\circ} = F$.\n• **Bidual** : l'application $E \\to E^{\\ast\\ast}$, $x \\mapsto (\\varphi \\mapsto \\varphi(x))$ est linéaire, injective, et c'est un isomorphisme en dimension finie (égalité des dimensions). Il est **canonique** : il ne dépend d'aucun choix de base."
      },
      {
        "title": "4. Démonstration : dimension de l'orthogonal dans le dual",
        "content": "**Théorème.** Si $\\dim E = n$ et $F$ est un sous-espace de dimension $p$, alors $\\dim F^{\\circ} = n - p$.\n**Démonstration.**\n1. Soit $(e_1, \\dots, e_p)$ une base de $F$, complétée en une base $\\mathcal{B} = (e_1, \\dots, e_n)$ de $E$, et $\\mathcal{B}^{\\ast}$ sa base duale.\n2. **Inclusion $\\text{Vect}(e_{p+1}^{\\ast}, \\dots, e_n^{\\ast}) \\subset F^{\\circ}$** : pour $j > p$ et $i \\le p$, $e_j^{\\ast}(e_i) = 0$ ; par linéarité, $e_j^{\\ast}$ s'annule sur $F = \\text{Vect}(e_1, \\dots, e_p)$, et $F^{\\circ}$ est un sous-espace.\n3. **Inclusion réciproque** : si $\\varphi \\in F^{\\circ}$, alors $\\varphi = \\sum_{i=1}^n \\varphi(e_i)\\, e_i^{\\ast}$ avec $\\varphi(e_i) = 0$ pour $i \\le p$, donc $\\varphi \\in \\text{Vect}(e_{p+1}^{\\ast}, \\dots, e_n^{\\ast})$.\n4. Ainsi $F^{\\circ} = \\text{Vect}(e_{p+1}^{\\ast}, \\dots, e_n^{\\ast})$ ; cette famille est extraite d'une base, donc libre, et $\\dim F^{\\circ} = n - p$.\n**Conséquence** : un sous-espace de dimension $p$ est l'intersection de $n - p$ hyperplans (il est décrit par $n - p$ équations indépendantes, qui forment une base de $F^{\\circ}$), et pas moins."
      },
      {
        "title": "5. Transposée d'une application linéaire",
        "content": "Pour $u \\in \\mathcal{L}(E, F)$, la **transposée** est ${}^t u : F^{\\ast} \\to E^{\\ast}$, $\\psi \\mapsto \\psi \\circ u$.\n• Si $M = \\text{Mat}_{\\mathcal{B}, \\mathcal{C}}(u)$, alors $\\text{Mat}_{\\mathcal{C}^{\\ast}, \\mathcal{B}^{\\ast}}({}^t u) = {}^t M$.\n• ${}^t(v \\circ u) = {}^t u \\circ {}^t v$ (ordre inversé).\n• $\\text{Ker}({}^t u) = (\\text{Im}\\,u)^{\\circ}$ : en effet $\\psi \\circ u = 0 \\iff \\psi$ s'annule sur $\\text{Im}\\,u$. En dimension finie, $\\text{Im}({}^t u) = (\\text{Ker}\\,u)^{\\circ}$.\n• **Rang** : $\\text{rg}({}^t u) = \\dim F - \\dim (\\text{Im}\\,u)^{\\circ} = \\dim F - (\\dim F - \\text{rg}\\,u) = \\text{rg}\\,u$. Matriciellement : $\\text{rg}({}^t M) = \\text{rg}(M)$, le rang des lignes égale le rang des colonnes."
      },
      {
        "title": "6. Équations d'un sous-espace",
        "content": "• Si $F = \\text{Vect}(v_1, \\dots, v_p)$, un système d'équations de $F$ s'obtient en cherchant une base de $F^{\\circ}$ : les formes $\\varphi$ telles que $\\varphi(v_1) = \\dots = \\varphi(v_p) = 0$.\n• Inversement, si $F$ est défini par des équations $\\varphi_1(x) = \\dots = \\varphi_q(x) = 0$, alors $F = \\{\\varphi_1, \\dots, \\varphi_q\\}^{\\circ}$ et $\\dim F = n - \\text{rg}(\\varphi_1, \\dots, \\varphi_q)$.\n• Dans un espace euclidien, l'isomorphisme $a \\mapsto \\langle a, \\cdot \\rangle$ de $E$ sur $E^{\\ast}$ identifie $F^{\\circ}$ à l'orthogonal euclidien $F^\\perp$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer une base duale",
        "example": "Trouver la base duale de $\\mathcal{B} = (e_1, e_2)$ avec $e_1 = (1, 1)$ et $e_2 = (1, -1)$ dans $\\mathbb{R}^2$.",
        "steps": [
          "**Forme cherchée** : $e_1^{\\ast}(x, y) = ax + by$ et $e_2^{\\ast}(x, y) = cx + dy$.",
          "**Conditions pour $e_1^{\\ast}$** : $a + b = 1$ et $a - b = 0$, donc $a = b = \\frac{1}{2}$ et $e_1^{\\ast}(x, y) = \\frac{x + y}{2}$.",
          "**Conditions pour $e_2^{\\ast}$** : $c + d = 0$ et $c - d = 1$, donc $e_2^{\\ast}(x, y) = \\frac{x - y}{2}$.",
          "**Méthode matricielle** : si $P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ a pour colonnes les $e_j$, les lignes de $P^{-1} = \\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ donnent les coefficients des $e_i^{\\ast}$ (car $P^{-1} P = I_2$ traduit $e_i^{\\ast}(e_j) = \\delta_{ij}$)."
        ]
      },
      {
        "title": "Méthode : Trouver des équations d'un sous-espace",
        "example": "Donner des équations de $F = \\text{Vect}(v_1, v_2)$ dans $\\mathbb{R}^4$, avec $v_1 = (1, 1, 0, 0)$ et $v_2 = (0, 1, 1, 1)$.",
        "steps": [
          "**Dimension** : $v_1, v_2$ sont non colinéaires, donc $\\dim F = 2$ et $\\dim F^{\\circ} = 4 - 2 = 2$ : il faut deux équations.",
          "**Système** : $\\varphi(x, y, z, t) = ax + by + cz + dt$ est dans $F^{\\circ}$ si et seulement si $a + b = 0$ et $b + c + d = 0$.",
          "**Base de $F^{\\circ}$** : $(a, b, c, d) = (-1, 1, -1, 0)$ et $(0, 0, 1, -1)$.",
          "**Conclusion** : $F = \\{(x, y, z, t) \\mid -x + y - z = 0 \\text{ et } z - t = 0\\}$. Contrôle : $v_1$ et $v_2$ vérifient les deux équations."
        ]
      }
    ],
    "traps": [
      "$E$ et $E^{\\ast}$ ont la même dimension finie, mais il n'existe pas d'isomorphisme canonique $E \\to E^{\\ast}$ : il faut choisir une base ou un produit scalaire. L'isomorphisme $E \\to E^{\\ast\\ast}$, lui, est canonique.",
      "La forme $e_i^{\\ast}$ dépend de **toute** la base, pas seulement de $e_i$ : avec $e_1 = (1, 0)$, on obtient $e_1^{\\ast}(x, y) = x$ si $e_2 = (0, 1)$, mais $e_1^{\\ast}(x, y) = x - y$ si $e_2 = (1, 1)$.",
      "La transposée de $u : E \\to F$ va de $F^{\\ast}$ dans $E^{\\ast}$ (sens inverse) et ${}^t(v \\circ u) = {}^t u \\circ {}^t v$.",
      "$F^{\\circ}$ est un sous-espace de $E^{\\ast}$, pas de $E$ : ne pas le confondre avec l'orthogonal euclidien $F^\\perp \\subset E$, même s'ils se correspondent dans un espace euclidien.",
      "En dimension infinie, $\\dim E^{\\ast} = \\dim E$ est faux en général et $E \\to E^{\\ast\\ast}$ n'est pas surjective ; par exemple $\\mathbb{K}[X]^{\\ast}$ s'identifie à l'espace de toutes les suites, qui n'a pas de base dénombrable."
    ],
    "flashcards": [
      {
        "q": "Comment est définie la base duale de $(e_1, \\dots, e_n)$ ?",
        "a": "Par $e_i^{\\ast}(e_j) = \\delta_{ij}$ ; $e_i^{\\ast}$ est la $i$-ième forme coordonnée."
      },
      {
        "q": "Quelle relation de dimension lie $F$ et $F^{\\circ}$ en dimension finie ?",
        "a": "$\\dim F + \\dim F^{\\circ} = \\dim E$."
      },
      {
        "q": "Comment démontrer $\\dim F^{\\circ} = n - p$ ?",
        "a": "Compléter une base de $F$ en base de $E$ ; $F^{\\circ}$ est alors engendré par les $n - p$ dernières formes de la base duale."
      },
      {
        "q": "Quelle matrice représente la transposée ${}^t u$ dans les bases duales ?",
        "a": "La transposée ${}^t M$ de la matrice $M$ de $u$."
      },
      {
        "q": "Que valent $\\text{Ker}({}^t u)$ et $\\text{rg}({}^t u)$ ?",
        "a": "$\\text{Ker}({}^t u) = (\\text{Im}\\,u)^{\\circ}$ et $\\text{rg}({}^t u) = \\text{rg}(u)$."
      },
      {
        "q": "Combien d'équations faut-il au minimum pour décrire un sous-espace de dimension $p$ de $E$, $\\dim E = n$ ?",
        "a": "$n - p$ équations linéaires indépendantes."
      }
    ]
  },
  "L2-SYM": {
    "title": "L2-SYM : Endomorphismes symétriques, groupe orthogonal et Théorème Spectral",
    "domain": "Géométrie & Espaces Euclidiens",
    "objectives": [
      "Définir l'adjoint d'un endomorphisme d'un espace euclidien et sa matrice en base orthonormée.",
      "Établir les propriétés spectrales des endomorphismes symétriques (valeurs propres réelles, sous-espaces propres orthogonaux).",
      "Énoncer et démontrer le théorème spectral.",
      "Étudier le groupe orthogonal $O(E)$ et classer les isométries du plan et de l'espace."
    ],
    "keyPoints": [
      {
        "title": "1. Adjoint d'un endomorphisme",
        "content": "Soit $E$ un espace euclidien et $u \\in \\mathcal{L}(E)$.\n• Il existe un unique $u^{\\ast} \\in \\mathcal{L}(E)$, l'**adjoint** de $u$, tel que $\\langle u(x), y \\rangle = \\langle x, u^{\\ast}(y) \\rangle$ pour tous $x, y$.\n• Si $\\mathcal{B}$ est une base **orthonormée**, $\\text{Mat}_\\mathcal{B}(u^{\\ast}) = {}^t\\text{Mat}_\\mathcal{B}(u)$.\n• Propriétés : $(u^{\\ast})^{\\ast} = u$, $(u \\circ v)^{\\ast} = v^{\\ast} \\circ u^{\\ast}$, $\\text{Ker}\\,u^{\\ast} = (\\text{Im}\\,u)^\\perp$, $\\text{Im}\\,u^{\\ast} = (\\text{Ker}\\,u)^\\perp$.\n• Si $F$ est stable par $u$, alors $F^\\perp$ est stable par $u^{\\ast}$."
      },
      {
        "title": "2. Endomorphismes symétriques",
        "content": "$u$ est **symétrique** (ou auto-adjoint) si $u^{\\ast} = u$, c'est-à-dire $\\langle u(x), y \\rangle = \\langle x, u(y) \\rangle$ ; de manière équivalente, sa matrice dans une base orthonormée est symétrique.\n• **Sous-espaces propres orthogonaux** : si $u(x) = \\lambda x$, $u(y) = \\mu y$ et $\\lambda \\neq \\mu$, alors $\\lambda \\langle x, y \\rangle = \\langle u(x), y \\rangle = \\langle x, u(y) \\rangle = \\mu \\langle x, y \\rangle$, donc $\\langle x, y \\rangle = 0$.\n• **Stabilité** : si $F$ est stable par $u$ symétrique, $F^\\perp$ l'est aussi : pour $x \\in F^\\perp$ et $y \\in F$, $\\langle u(x), y \\rangle = \\langle x, u(y) \\rangle = 0$.\n• **Exemples** : les projecteurs orthogonaux et les symétries orthogonales sont symétriques ; un projecteur est orthogonal si et seulement s'il est symétrique."
      },
      {
        "title": "3. Démonstration du théorème spectral",
        "content": "**Théorème.** Tout endomorphisme symétrique $u$ d'un espace euclidien $E$ est diagonalisable dans une **base orthonormée** de vecteurs propres.\n**Démonstration.**\n1. **Les valeurs propres de $A = \\text{Mat}_\\mathcal{B}(u)$ ($\\mathcal{B}$ orthonormée) sont réelles.** $A$ est symétrique réelle. Soit $\\lambda \\in \\mathbb{C}$ une racine de $\\chi_A$ et $Z \\in \\mathbb{C}^n$ non nul tel que $AZ = \\lambda Z$. Le nombre $s = {}^t\\overline{Z} A Z = \\lambda \\sum_i |z_i|^2$ vérifie $\\overline{s} = {}^t Z A \\overline{Z} = {}^t({}^t Z A \\overline{Z}) = {}^t\\overline{Z}\\, {}^t A\\, Z = s$ ($A$ réelle, puis transposée d'un scalaire, puis $A$ symétrique). Donc $s \\in \\mathbb{R}$ et $\\lambda = \\frac{s}{\\sum |z_i|^2} \\in \\mathbb{R}$.\n2. **$u$ admet un vecteur propre.** $\\lambda$ étant réelle, $A - \\lambda I_n$ est une matrice réelle non inversible : il existe $X \\in \\mathbb{R}^n$ non nul avec $AX = \\lambda X$.\n3. **Récurrence sur $n = \\dim E$.** Pour $n = 1$, toute base orthonormée convient. Supposons le résultat vrai en dimension $n - 1$. Soit $e_1$ un vecteur propre unitaire de $u$ ; la droite $D = \\mathbb{R} e_1$ est stable par $u$, donc $H = D^\\perp$ est stable par $u$ (point 2 du cours).\n4. La restriction $u_H$ est un endomorphisme symétrique de l'espace euclidien $H$, de dimension $n - 1$ : par hypothèse de récurrence, $H$ admet une base orthonormée $(e_2, \\dots, e_n)$ de vecteurs propres de $u_H$, donc de $u$.\n5. $(e_1, e_2, \\dots, e_n)$ est une base orthonormée de $E$ formée de vecteurs propres de $u$.\n**Version matricielle** : pour $A \\in \\mathcal{S}_n(\\mathbb{R})$, il existe $P \\in O_n(\\mathbb{R})$ et $D$ diagonale réelle telles que $A = P D P^{-1} = P D\\, {}^t P$."
      },
      {
        "title": "4. Matrices symétriques positives et quotient de Rayleigh",
        "content": "• $A \\in \\mathcal{S}_n(\\mathbb{R})$ est **positive** si ${}^t X A X \\ge 0$ pour tout $X$, **définie positive** si de plus ${}^t X A X = 0 \\implies X = 0$.\n• En écrivant $X = PY$ avec $P$ orthogonale : ${}^t X A X = \\sum_i \\lambda_i y_i^2$. D'où : $A$ positive $\\iff$ $\\text{Sp}(A) \\subset \\mathbb{R}_+$ ; $A$ définie positive $\\iff$ $\\text{Sp}(A) \\subset \\mathbb{R}_+^{\\ast}$.\n• **Encadrement de Rayleigh** : $\\lambda_{\\min} \\|X\\|^2 \\le {}^t X A X \\le \\lambda_{\\max} \\|X\\|^2$, avec égalité pour des vecteurs propres associés.\n• **Exemples** : ${}^t M M$ est symétrique positive pour toute $M \\in \\mathcal{M}_{p,n}(\\mathbb{R})$ ; la hessienne d'une fonction $\\mathcal{C}^2$ est symétrique réelle."
      },
      {
        "title": "5. Isométries vectorielles et matrices orthogonales",
        "content": "• $u \\in \\mathcal{L}(E)$ est une **isométrie** (automorphisme orthogonal) si $\\|u(x)\\| = \\|x\\|$ pour tout $x$ ; par polarisation, c'est équivalent à $\\langle u(x), u(y) \\rangle = \\langle x, y \\rangle$, et à $u^{\\ast} \\circ u = \\text{Id}_E$.\n• $u$ est une isométrie $\\iff$ $u$ envoie une (toute) base orthonormée sur une base orthonormée.\n• $O_n(\\mathbb{R}) = \\{M \\mid {}^t M M = I_n\\}$ : les colonnes (et les lignes) de $M$ forment une base orthonormée de $\\mathbb{R}^n$.\n• Si $u \\in O(E)$ : $\\det u = \\pm 1$, et les valeurs propres réelles éventuelles valent $\\pm 1$. $SO(E) = \\{u \\in O(E) \\mid \\det u = 1\\}$ est le groupe des **rotations**."
      },
      {
        "title": "6. Isométries du plan et de l'espace",
        "content": "• **Plan** : les éléments de $SO_2(\\mathbb{R})$ sont les $R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ (et $R_\\theta R_{\\theta'} = R_{\\theta + \\theta'}$, donc $SO_2(\\mathbb{R})$ est commutatif) ; ceux de $O_2(\\mathbb{R}) \\setminus SO_2(\\mathbb{R})$ sont les $\\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ \\sin\\theta & -\\cos\\theta \\end{pmatrix}$, réflexions d'axe dirigé par $\\left(\\cos\\frac{\\theta}{2}, \\sin\\frac{\\theta}{2}\\right)$.\n• **Espace** : tout $u \\in SO_3(\\mathbb{R})$ distinct de l'identité est une rotation d'axe $\\text{Ker}(u - \\text{Id})$, une droite ; son angle $\\theta$ vérifie $\\text{tr}(u) = 1 + 2\\cos\\theta$. Le signe de $\\sin\\theta$, l'axe étant orienté par $w$, est celui de $\\det(x, u(x), w)$ pour $x \\notin \\mathbb{R}w$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Diagonaliser une matrice symétrique en base orthonormée",
        "example": "Diagonaliser dans une base orthonormée $A = \\begin{pmatrix} 0 & 2 \\\\ 2 & 3 \\end{pmatrix}$.",
        "steps": [
          "**Polynôme caractéristique** : $\\chi_A(X) = X(X - 3) - 4 = X^2 - 3X - 4 = (X - 4)(X + 1)$.",
          "**$E_4$** : $(A - 4I_2)X = 0 \\iff 2x - y = 0$ ; vecteur unitaire $u_1 = \\frac{1}{\\sqrt{5}}(1, 2)$.",
          "**$E_{-1}$** : $(A + I_2)X = 0 \\iff x + 2y = 0$ ; vecteur unitaire $u_2 = \\frac{1}{\\sqrt{5}}(-2, 1)$, orthogonal à $u_1$ comme prévu.",
          "**Conclusion** : $P = \\frac{1}{\\sqrt{5}}\\begin{pmatrix} 1 & -2 \\\\ 2 & 1 \\end{pmatrix} \\in SO_2(\\mathbb{R})$, $D = \\text{diag}(4, -1)$ et $A = P D\\, {}^t P$."
        ]
      },
      {
        "title": "Méthode : Reconnaître une rotation de l'espace",
        "example": "Étudier $A = \\frac{1}{3}\\begin{pmatrix} 2 & -1 & 2 \\\\ 2 & 2 & -1 \\\\ -1 & 2 & 2 \\end{pmatrix}$.",
        "steps": [
          "**Orthogonalité** : les colonnes $\\frac{1}{3}(2, 2, -1)$, $\\frac{1}{3}(-1, 2, 2)$, $\\frac{1}{3}(2, -1, 2)$ sont unitaires et deux à deux orthogonales, donc $A \\in O_3(\\mathbb{R})$ ; on calcule $\\det A = 1$, donc $A \\in SO_3(\\mathbb{R})$.",
          "**Axe** : chaque ligne de $A - I_3$ a une somme nulle, donc $w = (1, 1, 1)$ dirige l'axe $\\text{Ker}(A - I_3)$.",
          "**Angle** : $\\text{tr}(A) = 2 = 1 + 2\\cos\\theta$, donc $\\cos\\theta = \\frac{1}{2}$.",
          "**Signe** : avec $x = (1, -1, 0)$, $Ax = (1, 0, -1)$ et $\\det(x, Ax, w) = 3 > 0$ : $A$ est la rotation d'axe dirigé et orienté par $(1, 1, 1)$ et d'angle $\\frac{\\pi}{3}$."
        ]
      }
    ],
    "traps": [
      "Le théorème spectral concerne les matrices symétriques **réelles** : $\\begin{pmatrix} 1 & i \\\\ i & -1 \\end{pmatrix}$ est symétrique complexe, de carré nul, et n'est pas diagonalisable.",
      "Pour que $P^{-1} = {}^t P$, les colonnes de $P$ doivent être orthogonales **et normées**.",
      "La matrice de l'adjoint n'est la transposée que dans une base **orthonormée**.",
      "Une matrice réelle diagonalisable à valeurs propres réelles n'est pas forcément symétrique ($\\begin{pmatrix} 1 & 1 \\\\ 0 & 2 \\end{pmatrix}$) : elle n'est alors pas diagonalisable en base orthonormée.",
      "$\\det u = 1$ ne suffit pas pour être une isométrie : $\\text{diag}\\left(2, \\frac{1}{2}\\right)$ a pour déterminant $1$ mais ne conserve pas la norme."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème spectral (forme matricielle).",
        "a": "Toute $A \\in \\mathcal{S}_n(\\mathbb{R})$ s'écrit $A = P D\\, {}^t P$ avec $P \\in O_n(\\mathbb{R})$ et $D$ diagonale réelle."
      },
      {
        "q": "Pourquoi les valeurs propres d'une matrice symétrique réelle sont-elles réelles ?",
        "a": "Si $AZ = \\lambda Z$, le nombre ${}^t\\overline{Z} A Z = \\lambda \\sum |z_i|^2$ est égal à son conjugué, donc réel, et $\\lambda$ aussi."
      },
      {
        "q": "Quel est le rôle de l'orthogonal dans la récurrence du théorème spectral ?",
        "a": "Si $e_1$ est un vecteur propre, $(\\mathbb{R}e_1)^\\perp$ est stable par $u$ symétrique, ce qui permet d'appliquer l'hypothèse de récurrence en dimension $n - 1$."
      },
      {
        "q": "Caractériser une matrice symétrique définie positive par son spectre.",
        "a": "Toutes ses valeurs propres sont strictement positives."
      },
      {
        "q": "Quelles conditions équivalentes définissent $M \\in O_n(\\mathbb{R})$ ?",
        "a": "${}^t M M = I_n$ ; ses colonnes forment une base orthonormée ; elle conserve la norme euclidienne."
      },
      {
        "q": "Comment obtient-on l'angle d'une rotation de $SO_3(\\mathbb{R})$ ?",
        "a": "$\\text{tr}(A) = 1 + 2\\cos\\theta$ ; le signe de $\\sin\\theta$ est celui de $\\det(x, Ax, w)$, où $w$ oriente l'axe."
      }
    ]
  },
  "L2-RIE": {
    "title": "L2-RIE : Intégrale de Riemann approfondie et fonctions réglées",
    "domain": "Analyse Réelle",
    "objectives": [
      "Définir les fonctions en escalier et les fonctions réglées sur un segment.",
      "Construire l'intégrale des fonctions réglées et démontrer ses propriétés (linéarité, positivité, relation de Chasles).",
      "Utiliser les sommes de Riemann et le théorème fondamental de l'analyse.",
      "Intervertir limite et intégrale sous convergence uniforme sur un segment, et intégrer terme à terme une série de fonctions."
    ],
    "keyPoints": [
      {
        "title": "1. Fonctions en escalier et fonctions réglées",
        "content": "Soit $[a ; b]$ un segment ($a < b$).\n• $\\varphi : [a ; b] \\to \\mathbb{R}$ est **en escalier** s'il existe une subdivision $a = x_0 < x_1 < \\dots < x_n = b$ telle que $\\varphi$ soit constante sur chaque $]x_{i-1} ; x_i[$.\n• $f$ est **réglée** si elle est limite uniforme d'une suite de fonctions en escalier : pour tout $\\varepsilon > 0$, il existe $\\varphi$ en escalier avec $\\|f - \\varphi\\|_\\infty \\le \\varepsilon$.\n• **Caractérisation** : $f$ est réglée si et seulement si elle admet une limite finie à droite en tout point de $[a ; b[$ et une limite finie à gauche en tout point de $]a ; b]$.\n• **Exemples** : les fonctions continues (par uniforme continuité, théorème de Heine), monotones, continues par morceaux sont réglées. L'indicatrice de $\\mathbb{Q} \\cap [0 ; 1]$ n'est pas réglée (elle n'a de limite à droite en aucun point)."
      },
      {
        "title": "2. Construction de l'intégrale",
        "content": "• Pour $\\varphi$ en escalier valant $c_i$ sur $]x_{i-1} ; x_i[$ : $\\int_a^b \\varphi = \\sum_{i=1}^n c_i (x_i - x_{i-1})$. Cette valeur ne dépend pas de la subdivision adaptée choisie, ni des valeurs de $\\varphi$ aux points $x_i$.\n• L'application $\\varphi \\mapsto \\int_a^b \\varphi$ est linéaire et vérifie $\\left|\\int_a^b \\varphi\\right| \\le (b - a)\\|\\varphi\\|_\\infty$.\n• Si $f$ est réglée et $(\\varphi_n)$ en escalier converge uniformément vers $f$, la suite $\\left(\\int_a^b \\varphi_n\\right)$ est de Cauchy, donc converge ; sa limite ne dépend pas de la suite choisie. On la note $\\int_a^b f$.\n• On obtient une forme linéaire sur l'espace des fonctions réglées, vérifiant encore $\\left|\\int_a^b f\\right| \\le (b - a)\\|f\\|_\\infty$."
      },
      {
        "title": "3. Démonstration : positivité et relation de Chasles",
        "content": "**Théorème.** Pour $f, g$ réglées sur $[a ; b]$ :\n(i) si $f \\ge 0$, alors $\\int_a^b f \\ge 0$ ; par linéarité, $f \\le g \\implies \\int_a^b f \\le \\int_a^b g$ ;\n(ii) pour $c \\in ]a ; b[$, $\\int_a^b f = \\int_a^c f + \\int_c^b f$.\n**Démonstration.**\n1. **Cas en escalier.** Si $\\varphi \\ge 0$, toutes ses valeurs $c_i$ sur les intervalles ouverts sont $\\ge 0$, donc $\\int \\varphi \\ge 0$. Pour Chasles, on choisit une subdivision adaptée contenant $c$ ; la somme $\\sum c_i(x_i - x_{i-1})$ se coupe en deux sommes, qui sont $\\int_a^c \\varphi$ et $\\int_c^b \\varphi$.\n2. **Positivité, cas réglé.** Soit $(\\varphi_n)$ en escalier telle que $\\varepsilon_n = \\|f - \\varphi_n\\|_\\infty \\to 0$. La fonction $\\psi_n = \\varphi_n + \\varepsilon_n$ est en escalier, vérifie $\\psi_n \\ge f \\ge 0$ et converge uniformément vers $f$. Donc $\\int_a^b \\psi_n \\ge 0$ et, par passage à la limite, $\\int_a^b f \\ge 0$.\n3. **Chasles, cas réglé.** Les restrictions de $\\varphi_n$ à $[a ; c]$ et $[c ; b]$ sont en escalier et convergent uniformément vers celles de $f$. On passe à la limite dans $\\int_a^b \\varphi_n = \\int_a^c \\varphi_n + \\int_c^b \\varphi_n$.\n**Compléments** : $\\left|\\int_a^b f\\right| \\le \\int_a^b |f|$ (appliquer (i) à $|f| - f$ et $|f| + f$). Si $f$ est **continue**, positive et d'intégrale nulle, alors $f = 0$ : sinon $f \\ge \\frac{f(x_0)}{2} > 0$ sur un segment non trivial autour d'un point $x_0$, et l'intégrale serait $> 0$."
      },
      {
        "title": "4. Théorème fondamental de l'analyse",
        "content": "**Théorème.** Si $f$ est continue sur un intervalle $I$ et $a \\in I$, alors $F(x) = \\int_a^x f(t)\\, dt$ est l'unique primitive de $f$ sur $I$ qui s'annule en $a$.\n**Démonstration.** Pour $x \\in I$ et $h \\neq 0$ avec $x + h \\in I$, la relation de Chasles et $\\int_x^{x+h} f(x)\\, dt = h f(x)$ donnent\n$$\\left|\\frac{F(x + h) - F(x)}{h} - f(x)\\right| = \\frac{1}{|h|}\\left|\\int_x^{x+h} \\big(f(t) - f(x)\\big)\\, dt\\right| \\le \\sup_{|t - x| \\le |h|} |f(t) - f(x)|,$$\nqui tend vers $0$ quand $h \\to 0$ par continuité de $f$ en $x$. Donc $F'(x) = f(x)$. Deux primitives diffèrent d'une constante sur l'intervalle $I$, d'où l'unicité.\n**Conséquences** : $\\int_a^b f = G(b) - G(a)$ pour toute primitive $G$ ; intégration par parties et changement de variable pour des fonctions de classe $\\mathcal{C}^1$."
      },
      {
        "title": "5. Sommes de Riemann",
        "content": "Si $f$ est réglée (en particulier continue) sur $[a ; b]$ :\n$$\\frac{b - a}{n} \\sum_{k=0}^{n-1} f\\left(a + k\\frac{b - a}{n}\\right) \\xrightarrow[n \\to +\\infty]{} \\int_a^b f(t)\\, dt,$$\net de même avec $\\sum_{k=1}^{n}$.\n• Si $f$ est $K$-lipschitzienne, l'erreur est au plus $\\frac{K(b - a)^2}{2n}$.\n• **Exemple** : $\\sum_{k=1}^n \\frac{1}{n + k} = \\frac{1}{n}\\sum_{k=1}^n \\frac{1}{1 + k/n} \\to \\int_0^1 \\frac{dx}{1 + x} = \\ln 2$."
      },
      {
        "title": "6. Interversion limite-intégrale sur un segment",
        "content": "• **Théorème** : si $(f_n)$ est une suite de fonctions réglées sur $[a ; b]$ convergeant **uniformément** vers $f$, alors $f$ est réglée et $\\int_a^b f_n \\to \\int_a^b f$.\n• **Preuve** : $\\left|\\int_a^b f_n - \\int_a^b f\\right| \\le \\int_a^b |f_n - f| \\le (b - a)\\|f_n - f\\|_\\infty \\to 0$.\n• **Séries de fonctions** : si $\\sum f_n$ converge uniformément sur $[a ; b]$ (par exemple normalement : $\\sum \\|f_n\\|_\\infty < +\\infty$), alors $\\int_a^b \\sum_{n=0}^{+\\infty} f_n = \\sum_{n=0}^{+\\infty} \\int_a^b f_n$.\n• **Exemple** : sur $[0 ; \\frac{1}{2}]$, $|x^n| \\le 2^{-n}$, donc $\\ln 2 = \\int_0^{1/2} \\frac{dx}{1 - x} = \\sum_{n=0}^{+\\infty} \\int_0^{1/2} x^n\\, dx = \\sum_{n=1}^{+\\infty} \\frac{1}{n\\, 2^n}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Justifier l'interversion limite-intégrale sur un segment",
        "example": "Calculer $\\lim_{n \\to +\\infty} \\int_0^1 \\frac{n e^{-x}}{n + x}\\, dx$.",
        "steps": [
          "**Limite simple** : pour $x \\in [0 ; 1]$, $f_n(x) = \\frac{e^{-x}}{1 + x/n} \\to e^{-x}$.",
          "**Convergence uniforme** : $|f_n(x) - e^{-x}| = e^{-x}\\frac{x}{n + x} \\le \\frac{1}{n}$ pour $x \\in [0 ; 1]$, donc $\\|f_n - f\\|_\\infty \\le \\frac{1}{n} \\to 0$.",
          "**Conclusion** : on peut intervertir sur le segment : la limite vaut $\\int_0^1 e^{-x}\\, dx = 1 - e^{-1}$."
        ]
      },
      {
        "title": "Méthode : Reconnaître une somme de Riemann",
        "example": "Calculer $\\lim_{n \\to +\\infty} \\sum_{k=1}^{n} \\frac{n}{n^2 + k^2}$.",
        "steps": [
          "**Mise en forme** : $\\frac{n}{n^2 + k^2} = \\frac{1}{n} \\cdot \\frac{1}{1 + (k/n)^2}$.",
          "**Identification** : la somme vaut $\\frac{1}{n}\\sum_{k=1}^n f\\left(\\frac{k}{n}\\right)$ avec $f(x) = \\frac{1}{1 + x^2}$ continue sur $[0 ; 1]$.",
          "**Conclusion** : la limite vaut $\\int_0^1 \\frac{dx}{1 + x^2} = \\arctan 1 = \\frac{\\pi}{4}$."
        ]
      }
    ],
    "traps": [
      "La convergence simple ne suffit pas pour intervertir : $f_n(x) = n^2 x(1 - x)^n$ tend simplement vers $0$ sur $[0 ; 1]$, mais $\\int_0^1 f_n = \\frac{n^2}{(n+1)(n+2)} \\to 1$.",
      "Le théorème de convergence uniforme est propre aux **segments** : sur $[0 ; +\\infty[$, $f_n = \\frac{1}{n}\\mathbf{1}_{[0 ; n]}$ converge uniformément vers $0$ mais $\\int_0^{+\\infty} f_n = 1$.",
      "Une fonction positive d'intégrale nulle n'est nulle que si elle est **continue** : l'indicatrice de $\\{0\\}$ sur $[0 ; 1]$ est réglée, positive, d'intégrale nulle et non nulle.",
      "Toute fonction n'est pas intégrable au sens des fonctions réglées : l'indicatrice de $\\mathbb{Q} \\cap [0 ; 1]$ n'admet de limite à droite en aucun point."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce qu'une fonction réglée sur $[a ; b]$ ?",
        "a": "Une limite uniforme de fonctions en escalier ; de façon équivalente, une fonction ayant des limites finies à droite et à gauche en tout point (à droite en $a$, à gauche en $b$)."
      },
      {
        "q": "Comment montre-t-on la positivité de l'intégrale d'une fonction réglée $f \\ge 0$ ?",
        "a": "On approche $f$ par $\\psi_n = \\varphi_n + \\|f - \\varphi_n\\|_\\infty$, en escalier et $\\ge f \\ge 0$, puis on passe à la limite dans $\\int \\psi_n \\ge 0$."
      },
      {
        "q": "Énoncer le théorème fondamental de l'analyse.",
        "a": "Si $f$ est continue sur $I$ et $a \\in I$, $x \\mapsto \\int_a^x f$ est l'unique primitive de $f$ sur $I$ nulle en $a$."
      },
      {
        "q": "Que vaut la limite de $\\frac{b - a}{n}\\sum_{k=0}^{n-1} f\\left(a + k\\frac{b-a}{n}\\right)$ ?",
        "a": "$\\int_a^b f$, pour toute fonction réglée (en particulier continue) $f$."
      },
      {
        "q": "Quelle hypothèse permet d'écrire $\\lim \\int_a^b f_n = \\int_a^b \\lim f_n$ sur un segment ?",
        "a": "La convergence uniforme de $(f_n)$ sur $[a ; b]$."
      },
      {
        "q": "Une fonction continue positive d'intégrale nulle sur $[a ; b]$ est-elle nulle ?",
        "a": "Oui ; l'hypothèse de continuité est indispensable."
      }
    ]
  },
  "L2-ING": {
    "title": "L2-ING : Intégrales généralisées sur un intervalle quelconque",
    "domain": "Analyse Réelle",
    "objectives": [
      "Définir la convergence d'une intégrale généralisée sur un intervalle quelconque.",
      "Démontrer et utiliser les intégrales de référence de Riemann en $0$ et en $+\\infty$.",
      "Appliquer les théorèmes de comparaison pour les fonctions positives (inégalités, domination, équivalents).",
      "Distinguer convergence absolue et semi-convergence et pratiquer l'intégration par parties sur $[a ; X]$."
    ],
    "keyPoints": [
      {
        "title": "1. Définition de la convergence",
        "content": "Soit $f : [a ; b[ \\to \\mathbb{K}$ continue par morceaux, avec $b \\in \\mathbb{R} \\cup \\{+\\infty\\}$.\n• $\\int_a^b f$ **converge** si $\\lim_{X \\to b^-} \\int_a^X f(t)\\, dt$ existe et est finie ; on note alors $\\int_a^b f$ cette limite.\n• Sur $]a ; b[$, impropre aux deux bornes : on choisit $c \\in ]a ; b[$ ; $\\int_a^b f$ converge si et seulement si $\\int_a^c f$ et $\\int_c^b f$ convergent **toutes les deux** (le résultat ne dépend pas de $c$).\n• **Faux problème** : si $b$ est fini et $f$ admet une limite finie en $b^-$, l'intégrale converge (prolongement par continuité). Exemple : $\\int_0^1 \\frac{\\sin t}{t}\\, dt$.\n• Linéarité, relation de Chasles et positivité s'étendent aux intégrales convergentes."
      },
      {
        "title": "2. Intégrales de référence",
        "content": "• **Riemann en $+\\infty$** : $\\int_1^{+\\infty} \\frac{dt}{t^\\alpha}$ converge si et seulement si $\\alpha > 1$ (et vaut alors $\\frac{1}{\\alpha - 1}$).\n• **Riemann en $0$** : $\\int_0^1 \\frac{dt}{t^\\alpha}$ converge si et seulement si $\\alpha < 1$ (et vaut alors $\\frac{1}{1 - \\alpha}$).\n• **Exponentielle** : $\\int_0^{+\\infty} e^{-at}\\, dt$ converge si et seulement si $a > 0$, et vaut $\\frac{1}{a}$.\n• **Logarithme** : $\\int_0^1 \\ln t\\, dt = -1$ (converge).\n• **Bertrand** : $\\int_e^{+\\infty} \\frac{dt}{t^\\alpha (\\ln t)^\\beta}$ converge si et seulement si $\\alpha > 1$, ou $\\alpha = 1$ et $\\beta > 1$. Par exemple, $\\int_e^X \\frac{dt}{t \\ln t} = \\ln(\\ln X) \\to +\\infty$."
      },
      {
        "title": "3. Démonstration : intégrales de Riemann",
        "content": "**Théorème.** $\\int_1^{+\\infty} t^{-\\alpha}\\, dt$ converge $\\iff \\alpha > 1$ ; $\\int_0^1 t^{-\\alpha}\\, dt$ converge $\\iff \\alpha < 1$.\n**Démonstration.**\n1. **En $+\\infty$, $\\alpha \\neq 1$** : pour $X > 1$, $\\int_1^X t^{-\\alpha}\\, dt = \\frac{X^{1 - \\alpha} - 1}{1 - \\alpha}$. Si $\\alpha > 1$, $X^{1-\\alpha} \\to 0$ et l'intégrale tend vers $\\frac{1}{\\alpha - 1}$ ; si $\\alpha < 1$, $X^{1 - \\alpha} \\to +\\infty$ : divergence.\n2. **En $+\\infty$, $\\alpha = 1$** : $\\int_1^X \\frac{dt}{t} = \\ln X \\to +\\infty$ : divergence.\n3. **En $0$, $\\alpha \\neq 1$** : pour $\\varepsilon \\in ]0 ; 1[$, $\\int_\\varepsilon^1 t^{-\\alpha}\\, dt = \\frac{1 - \\varepsilon^{1 - \\alpha}}{1 - \\alpha}$. Si $\\alpha < 1$, $\\varepsilon^{1 - \\alpha} \\to 0$ et la limite vaut $\\frac{1}{1 - \\alpha}$ ; si $\\alpha > 1$, $\\varepsilon^{1 - \\alpha} \\to +\\infty$ : divergence.\n4. **En $0$, $\\alpha = 1$** : $\\int_\\varepsilon^1 \\frac{dt}{t} = -\\ln \\varepsilon \\to +\\infty$ : divergence.\nEn particulier, $\\int_0^{+\\infty} \\frac{dt}{t^\\alpha}$ diverge pour **tout** $\\alpha$."
      },
      {
        "title": "4. Comparaison pour les fonctions positives",
        "content": "Soient $f, g$ continues par morceaux et **positives** sur $[a ; b[$.\n• **Lemme** : $X \\mapsto \\int_a^X f$ est croissante, donc $\\int_a^b f$ converge si et seulement si cette fonction est **majorée** (théorème de la limite monotone).\n• **Majoration** : si $0 \\le f \\le g$ au voisinage de $b$, la convergence de $\\int_a^b g$ entraîne celle de $\\int_a^b f$ (et la divergence de $\\int f$ celle de $\\int g$). Preuve : sur $[c ; b[$, $\\int_c^X f \\le \\int_c^X g \\le \\int_c^b g$, puis on applique le lemme.\n• **Domination** : si $f = O(g)$ en $b$ et $\\int_a^b g$ converge, alors $\\int_a^b f$ converge.\n• **Équivalence** : si $f \\sim g$ en $b$, les intégrales sont de même nature, car $\\frac{1}{2} g \\le f \\le 2g$ au voisinage de $b$.\n• **Usage** : en $+\\infty$, montrer $t^2 f(t) \\to 0$ donne $f = o\\left(\\frac{1}{t^2}\\right)$, d'où la convergence ; par exemple pour $\\int_0^{+\\infty} t^n e^{-t}\\, dt$."
      },
      {
        "title": "5. Convergence absolue",
        "content": "• $\\int_a^b f$ est **absolument convergente** si $\\int_a^b |f|$ converge.\n• **Théorème** : une intégrale absolument convergente est convergente, et $\\left|\\int_a^b f\\right| \\le \\int_a^b |f|$.\n• **Démonstration** (cas réel) : $f^+ = \\max(f, 0)$ et $f^- = \\max(-f, 0)$ vérifient $0 \\le f^\\pm \\le |f|$, donc $\\int f^+$ et $\\int f^-$ convergent par comparaison, et $f = f^+ - f^-$. Cas complexe : on applique ce résultat aux parties réelle et imaginaire, majorées par $|f|$.\n• Pour une fonction de signe quelconque, on étudie donc d'abord $|f|$ par comparaison."
      },
      {
        "title": "6. Semi-convergence : l'exemple de $\\frac{\\sin t}{t}$",
        "content": "Une intégrale **semi-convergente** converge sans converger absolument.\n• **Convergence** : sur $[1 ; X]$, une intégration par parties donne $\\int_1^X \\frac{\\sin t}{t}\\, dt = \\left[-\\frac{\\cos t}{t}\\right]_1^X - \\int_1^X \\frac{\\cos t}{t^2}\\, dt$. Le crochet a une limite finie et $\\left|\\frac{\\cos t}{t^2}\\right| \\le \\frac{1}{t^2}$ : l'intégrale $\\int_1^{+\\infty} \\frac{\\sin t}{t}\\, dt$ converge. En $0$, le problème est faux (limite $1$).\n• **Non-convergence absolue** : $|\\sin t| \\ge \\sin^2 t = \\frac{1 - \\cos(2t)}{2}$. Or $\\int_1^{+\\infty} \\frac{\\cos(2t)}{2t}\\, dt$ converge (même intégration par parties) et $\\int_1^{+\\infty} \\frac{dt}{2t}$ diverge ; donc $\\int_1^{+\\infty} \\frac{|\\sin t|}{t}\\, dt$ diverge.\n• On peut montrer que $\\int_0^{+\\infty} \\frac{\\sin t}{t}\\, dt = \\frac{\\pi}{2}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Établir la convergence par équivalents",
        "example": "Étudier la convergence de $I = \\int_0^{+\\infty} \\frac{dx}{x^2 + \\sqrt{x}}$.",
        "steps": [
          "**Deux bornes impropres** : la fonction est continue et positive sur $]0 ; +\\infty[$ ; on coupe en $1$.",
          "**En $0$** : $\\frac{1}{x^2 + \\sqrt{x}} \\sim \\frac{1}{x^{1/2}}$, et $\\int_0^1 \\frac{dx}{x^{1/2}}$ converge (Riemann, $\\frac{1}{2} < 1$).",
          "**En $+\\infty$** : $\\frac{1}{x^2 + \\sqrt{x}} \\sim \\frac{1}{x^2}$, et $\\int_1^{+\\infty} \\frac{dx}{x^2}$ converge (Riemann, $2 > 1$).",
          "**Conclusion** : par comparaison de fonctions positives, les deux morceaux convergent, donc $I$ converge."
        ]
      },
      {
        "title": "Méthode : Calculer une intégrale impropre par parties",
        "example": "Calculer $\\int_0^{+\\infty} t^2 e^{-t}\\, dt$.",
        "steps": [
          "**Convergence** : $t^2 \\cdot t^2 e^{-t} \\to 0$ en $+\\infty$, donc $t^2 e^{-t} = o\\left(\\frac{1}{t^2}\\right)$ et l'intégrale converge.",
          "**Intégration par parties sur $[0 ; X]$** : $\\int_0^X t^2 e^{-t}\\, dt = \\left[-t^2 e^{-t}\\right]_0^X + 2\\int_0^X t e^{-t}\\, dt$.",
          "**Deuxième intégration par parties** : $\\int_0^X t e^{-t}\\, dt = \\left[-t e^{-t}\\right]_0^X + \\int_0^X e^{-t}\\, dt = -X e^{-X} + 1 - e^{-X} \\to 1$.",
          "**Passage à la limite** : $X^2 e^{-X} \\to 0$, donc $\\int_0^{+\\infty} t^2 e^{-t}\\, dt = 2 \\times 1 = 2$ (c'est $\\Gamma(3) = 2!$)."
        ]
      }
    ],
    "traps": [
      "On ne définit pas $\\int_{-\\infty}^{+\\infty} f$ par $\\lim_{R \\to +\\infty} \\int_{-R}^{R} f$ : $\\int_{-R}^R t\\, dt = 0$ pour tout $R$, mais $\\int_{-\\infty}^{+\\infty} t\\, dt$ diverge.",
      "Le critère des équivalents exige un signe constant : $\\frac{\\sin t}{\\sqrt{t}} \\sim \\frac{\\sin t}{\\sqrt{t}} + \\frac{\\sin^2 t}{t}$ en $+\\infty$, la première intégrale converge sur $[1 ; +\\infty[$ et la seconde diverge.",
      "Une intégrale $\\int_a^{+\\infty} f$ peut converger sans que $f$ tende vers $0$ : une fonction continue positive formée de pics triangulaires de hauteur $1$ et de largeur $\\frac{1}{n^2}$ centrés en chaque entier $n \\ge 2$ a une intégrale convergente. En revanche, si $f$ a une limite $\\ell \\neq 0$, l'intégrale diverge.",
      "Les conditions de Riemann sont opposées en $0$ ($\\alpha < 1$) et en $+\\infty$ ($\\alpha > 1$) : $\\int_0^{+\\infty} \\frac{dt}{t^\\alpha}$ ne converge pour aucun $\\alpha$.",
      "Une intégration par parties sur un intervalle non borné se fait sur $[a ; X]$, en vérifiant que le crochet a une limite finie ; sinon, on peut écrire une somme de deux termes divergents."
    ],
    "flashcards": [
      {
        "q": "À quelle condition $\\int_1^{+\\infty} \\frac{dt}{t^\\alpha}$ converge-t-elle ? Et $\\int_0^1 \\frac{dt}{t^\\alpha}$ ?",
        "a": "La première si et seulement si $\\alpha > 1$, la seconde si et seulement si $\\alpha < 1$."
      },
      {
        "q": "Pourquoi une fonction positive a-t-elle une intégrale convergente dès que ses intégrales partielles sont majorées ?",
        "a": "Car $X \\mapsto \\int_a^X f$ est croissante : elle admet une limite finie si et seulement si elle est majorée."
      },
      {
        "q": "Une intégrale absolument convergente est-elle convergente ?",
        "a": "Oui, et $\\left|\\int f\\right| \\le \\int |f|$ ; on l'établit avec $f = f^+ - f^-$ et $0 \\le f^\\pm \\le |f|$."
      },
      {
        "q": "Donner un exemple d'intégrale semi-convergente.",
        "a": "$\\int_1^{+\\infty} \\frac{\\sin t}{t}\\, dt$ : elle converge (intégration par parties) mais $\\int_1^{+\\infty} \\frac{|\\sin t|}{t}\\, dt$ diverge."
      },
      {
        "q": "Comment montrer rapidement la convergence de $\\int_0^{+\\infty} t^n e^{-t}\\, dt$ ?",
        "a": "$t^2 \\cdot t^n e^{-t} \\to 0$, donc $t^n e^{-t} = o(1/t^2)$ en $+\\infty$ ; on conclut par comparaison à Riemann."
      },
      {
        "q": "Quand $\\int_e^{+\\infty} \\frac{dt}{t^\\alpha(\\ln t)^\\beta}$ converge-t-elle ?",
        "a": "Si et seulement si $\\alpha > 1$, ou $\\alpha = 1$ et $\\beta > 1$."
      }
    ]
  },
  "L2-EDO": {
    "title": "L2-EDO : Équations différentielles linéaires et systèmes différentiels",
    "domain": "Équations Différentielles & Systèmes Dynamiques",
    "objectives": [
      "Résoudre les équations différentielles linéaires scalaires d'ordre 1 et d'ordre 2 à coefficients constants, avec second membre.",
      "Énoncer le théorème de Cauchy-Lipschitz linéaire et démontrer la structure de l'espace des solutions (dimension, wronskien).",
      "Résoudre les systèmes différentiels linéaires $X' = AX$ à coefficients constants via l'exponentielle de matrice.",
      "Appliquer la méthode de variation des constantes pour déterminer une solution particulière."
    ],
    "keyPoints": [
      {
        "title": "1. Équations linéaires scalaires d'ordre 1",
        "content": "Soient $a, b$ continues sur un intervalle $I$ et l'équation $(E) : y' + a(t) y = b(t)$. Notons $A$ une primitive de $a$ sur $I$.\n• **Équation homogène** : $y' + a y = 0 \\iff (y e^{A})' = 0 \\iff y = C e^{-A(t)}$, $C \\in \\mathbb{K}$ (on dérive $y e^{A}$, ce qui est licite sur l'intervalle $I$).\n• **Structure** : les solutions de $(E)$ sont $y = y_p + C e^{-A}$, où $y_p$ est une solution particulière : c'est une droite affine.\n• **Variation de la constante** : on cherche $y_p = C(t) e^{-A(t)}$ ; on obtient $C'(t) = b(t) e^{A(t)}$.\n• Pour tout $(t_0, y_0) \\in I \\times \\mathbb{K}$, il existe une unique solution sur $I$ telle que $y(t_0) = y_0$."
      },
      {
        "title": "2. Théorème de Cauchy-Lipschitz linéaire",
        "content": "Soit $I$ un intervalle, $A : I \\to \\mathcal{M}_n(\\mathbb{K})$ et $B : I \\to \\mathbb{K}^n$ **continues**.\n• **Théorème** (admis) : pour tout $(t_0, X_0) \\in I \\times \\mathbb{K}^n$, le problème $X' = A(t) X + B(t)$, $X(t_0) = X_0$ admet une **unique** solution définie sur **tout** $I$.\n• **Équation scalaire d'ordre $n$** : $y^{(n)} + a_{n-1}(t) y^{(n-1)} + \\dots + a_0(t) y = b(t)$ avec des $a_k, b$ continues se ramène à un système en posant $X = {}^t(y, y', \\dots, y^{(n-1)})$ ; le problème de Cauchy y fixe $y(t_0), \\dots, y^{(n-1)}(t_0)$.\n• **L'équation doit être résolue** (coefficient de $y^{(n)}$ égal à 1, ou ne s'annulant pas sur $I$) : c'est cette forme qui permet d'appliquer le théorème."
      },
      {
        "title": "3. Démonstration : structure des solutions et wronskien",
        "content": "**Théorème.** L'ensemble $\\mathcal{S}_H$ des solutions sur $I$ de $X' = A(t) X$ est un espace vectoriel de dimension $n$ ; plus précisément, pour tout $t_0 \\in I$, l'application $\\Phi : \\mathcal{S}_H \\to \\mathbb{K}^n$, $X \\mapsto X(t_0)$, est un isomorphisme.\n**Démonstration.**\n1. $\\mathcal{S}_H$ est un sous-espace vectoriel de $\\mathcal{C}^1(I, \\mathbb{K}^n)$ : la fonction nulle est solution et l'équation est linéaire.\n2. $\\Phi$ est linéaire (évaluation en $t_0$).\n3. **Surjectivité** : pour tout $X_0 \\in \\mathbb{K}^n$, Cauchy-Lipschitz fournit une solution telle que $X(t_0) = X_0$.\n4. **Injectivité** : si $X(t_0) = 0$, alors $X$ et la fonction nulle résolvent le même problème de Cauchy ; par unicité, $X = 0$.\n5. Donc $\\dim \\mathcal{S}_H = n$. Les solutions de l'équation complète forment l'espace affine $X_p + \\mathcal{S}_H$.\n**Wronskien.** Pour des solutions $X_1, \\dots, X_n$ de l'équation homogène, on pose $W(t) = \\det(X_1(t), \\dots, X_n(t))$. Alors **ou bien $W$ ne s'annule jamais, ou bien $W$ est identiquement nul**, et $(X_1, \\dots, X_n)$ est une base de $\\mathcal{S}_H$ si et seulement si $W(t_0) \\neq 0$ pour un $t_0$.\nPreuve : si $W(t_0) = 0$, il existe $(c_i) \\neq 0$ tel que $\\sum c_i X_i(t_0) = 0$ ; la solution $Y = \\sum c_i X_i$ est nulle en $t_0$, donc partout (point 4), et $W(t) = 0$ pour tout $t$. Réciproquement, si $W(t_0) \\neq 0$, $(X_i(t_0))$ est une base de $\\mathbb{K}^n$ ; comme $\\Phi$ est un isomorphisme, $(X_1, \\dots, X_n)$ est une base de $\\mathcal{S}_H$.\nPour $y'' + a(t) y' + b(t) y = 0$ : $W = y_1 y_2' - y_1' y_2$ vérifie $W' = -a(t) W$."
      },
      {
        "title": "4. Équations d'ordre 2 à coefficients constants",
        "content": "Pour $a y'' + b y' + c y = 0$ avec $a, b, c$ **réels**, $a \\neq 0$, d'équation caractéristique $a r^2 + b r + c = 0$ et de discriminant $\\Delta$, les solutions réelles sont :\n1. $\\Delta > 0$, racines réelles $r_1 \\neq r_2$ : $y = C_1 e^{r_1 t} + C_2 e^{r_2 t}$ ;\n2. $\\Delta = 0$, racine double $r_0$ : $y = (C_1 + C_2 t) e^{r_0 t}$ ;\n3. $\\Delta < 0$, racines $\\alpha \\pm i\\beta$ : $y = e^{\\alpha t}\\left(C_1 \\cos(\\beta t) + C_2 \\sin(\\beta t)\\right)$.\n• **Second membre $P(t) e^{mt}$** ($P$ polynôme, $m \\in \\mathbb{C}$) : il existe une solution particulière $Q(t) e^{mt}$ avec $\\deg Q = \\deg P + \\mu$, où $\\mu \\in \\{0, 1, 2\\}$ est la multiplicité de $m$ comme racine de l'équation caractéristique.\n• Pour un second membre $\\cos(\\omega t)$, on résout avec $e^{i\\omega t}$ et on prend la partie réelle."
      },
      {
        "title": "5. Systèmes à coefficients constants et exponentielle de matrice",
        "content": "• Pour $A \\in \\mathcal{M}_n(\\mathbb{K})$, $e^A = \\sum_{k=0}^{+\\infty} \\frac{A^k}{k!}$ (série absolument convergente pour toute norme d'algèbre).\n• $t \\mapsto e^{tA}$ est dérivable, $\\frac{d}{dt} e^{tA} = A e^{tA} = e^{tA} A$, et $e^{(s+t)A} = e^{sA} e^{tA}$ ; en particulier $e^{tA}$ est inversible d'inverse $e^{-tA}$.\n• **Solution** : l'unique solution de $X' = AX$, $X(0) = X_0$ est $X(t) = e^{tA} X_0$.\n• Si $A = P D P^{-1}$ avec $D = \\text{diag}(\\lambda_i)$ : $e^{tA} = P\\, \\text{diag}(e^{\\lambda_1 t}, \\dots, e^{\\lambda_n t})\\, P^{-1}$ ; les solutions sont les $\\sum C_i e^{\\lambda_i t} V_i$, où $V_i$ est la $i$-ième colonne de $P$.\n• Si $AB = BA$, alors $e^{A + B} = e^A e^B$ ; et $\\det(e^A) = e^{\\text{tr} A}$."
      },
      {
        "title": "6. Variation des constantes à l'ordre 2",
        "content": "Soit $y'' + a(t) y' + b(t) y = f(t)$ ($a, b, f$ continues sur $I$) et $(y_1, y_2)$ une base des solutions homogènes, de wronskien $W$ ne s'annulant pas.\n• On cherche $y = c_1(t) y_1 + c_2(t) y_2$ en imposant\n$$\\begin{cases} c_1' y_1 + c_2' y_2 = 0 \\\\ c_1' y_1' + c_2' y_2' = f \\end{cases}$$\n• Ce système de Cramer (déterminant $W(t) \\neq 0$) donne $c_1' = -\\frac{f y_2}{W}$ et $c_2' = \\frac{f y_1}{W}$, puis $c_1, c_2$ par primitivation.\n• C'est la traduction, pour l'équation scalaire, de la recherche de $X = e^{tA} C(t)$ dans le cas des systèmes : $C'(t) = e^{-tA} B(t)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre un système différentiel 2x2 par diagonalisation",
        "example": "Résoudre $X' = AX$ avec $A = \\begin{pmatrix} 1 & 1 \\\\ 4 & 1 \\end{pmatrix}$ et $X(0) = \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$.",
        "steps": [
          "**Valeurs propres** : $\\chi_A(X) = (X - 1)^2 - 4 = (X - 3)(X + 1)$, donc $\\lambda_1 = 3$ et $\\lambda_2 = -1$.",
          "**Vecteurs propres** : $(A - 3I_2)V = 0 \\iff y = 2x$, $V_1 = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ ; $(A + I_2)V = 0 \\iff y = -2x$, $V_2 = \\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$.",
          "**Solution générale** : $X(t) = C_1 e^{3t} V_1 + C_2 e^{-t} V_2$.",
          "**Condition initiale** : $C_1 + C_2 = 2$ et $2C_1 - 2C_2 = 0$, donc $C_1 = C_2 = 1$ : $X(t) = \\begin{pmatrix} e^{3t} + e^{-t} \\\\ 2e^{3t} - 2e^{-t} \\end{pmatrix}$. Contrôle : $x' = 3e^{3t} - e^{-t} = x + y$."
        ]
      },
      {
        "title": "Méthode : Second membre exponentiel en cas de résonance",
        "example": "Résoudre $y'' - 3y' + 2y = e^{t}$ avec $y(0) = 0$ et $y'(0) = 0$.",
        "steps": [
          "**Homogène** : $r^2 - 3r + 2 = (r - 1)(r - 2)$, d'où $y_H = C_1 e^{t} + C_2 e^{2t}$.",
          "**Forme de la solution particulière** : $m = 1$ est racine simple, donc on cherche $y_p = a t e^{t}$. On a $y_p' = a(1 + t)e^t$ et $y_p'' = a(2 + t)e^t$.",
          "**Identification** : $y_p'' - 3y_p' + 2y_p = a e^t\\left[(2 + t) - 3(1 + t) + 2t\\right] = -a e^t$, donc $a = -1$.",
          "**Conditions initiales** : $y = C_1 e^t + C_2 e^{2t} - t e^t$ ; $y(0) = C_1 + C_2 = 0$ et $y'(0) = C_1 + 2C_2 - 1 = 0$, d'où $C_2 = 1$, $C_1 = -1$.",
          "**Conclusion** : $y(t) = e^{2t} - e^{t} - t e^{t}$."
        ]
      }
    ],
    "traps": [
      "$e^{A + B} = e^A e^B$ n'est garanti que si $AB = BA$ ; c'est faux par exemple pour $A = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ et $B = \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}$.",
      "Cauchy-Lipschitz s'applique à l'équation **résolue** : pour $t y' - y = 0$ sur $\\mathbb{R}$, les solutions sont les $y = Ct$ ; le problème $y(0) = 1$ n'a aucune solution et le problème $y(0) = 0$ en a une infinité.",
      "En cas de résonance, oublier le facteur $t$ (ou $t^2$ pour une racine double) conduit à une identification impossible : chercher $a e^t$ pour $y'' - 3y' + 2y = e^t$ donne $0 = e^t$.",
      "Les solutions de l'équation **avec** second membre ne forment pas un espace vectoriel mais un espace affine : la somme de deux solutions n'est pas une solution.",
      "Dans la variation des constantes à l'ordre 2, la condition $c_1' y_1 + c_2' y_2 = 0$ est un choix qui rend le système de Cramer ; l'oublier conduit à une équation du second ordre en $c_1, c_2$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la dimension de l'espace des solutions de $X' = A(t) X$ sur $I$, avec $A$ continue à valeurs dans $\\mathcal{M}_n(\\mathbb{K})$ ?",
        "a": "$n$ : l'évaluation $X \\mapsto X(t_0)$ est un isomorphisme sur $\\mathbb{K}^n$ (existence et unicité de Cauchy-Lipschitz)."
      },
      {
        "q": "Que peut-on dire du wronskien de $n$ solutions d'un système linéaire homogène ?",
        "a": "Il est soit identiquement nul, soit jamais nul ; les solutions forment une base si et seulement s'il est non nul en un point."
      },
      {
        "q": "Quelle est la solution de $X' = AX$, $X(0) = X_0$ ($A$ constante) ?",
        "a": "$X(t) = e^{tA} X_0$."
      },
      {
        "q": "Quelle forme de solution particulière chercher pour $ay'' + by' + cy = P(t)e^{mt}$ ?",
        "a": "$Q(t)e^{mt}$ avec $\\deg Q = \\deg P + \\mu$, où $\\mu$ est la multiplicité de $m$ comme racine de $ar^2 + br + c$."
      },
      {
        "q": "Résoudre $y' + a(t)y = 0$ sur un intervalle.",
        "a": "$y = C e^{-A(t)}$, où $A$ est une primitive de $a$."
      },
      {
        "q": "Quelle équation différentielle vérifie le wronskien de $y'' + a(t)y' + b(t)y = 0$ ?",
        "a": "$W' = -a(t) W$, donc $W(t) = W(t_0) \\exp\\left(-\\int_{t_0}^t a\\right)$."
      }
    ]
  },
  "L2-PAR": {
    "title": "L2-PAR : Intégrales dépendant d'un paramètre et convergence dominée",
    "domain": "Analyse Réelle",
    "objectives": [
      "Énoncer le théorème de convergence dominée et l'utiliser pour calculer des limites d'intégrales.",
      "Démontrer et appliquer le théorème de continuité d'une intégrale à paramètre sous hypothèse de domination.",
      "Énoncer et appliquer le théorème de dérivation sous le signe intégral.",
      "Étudier la fonction Gamma d'Euler et intégrer terme à terme une série de fonctions."
    ],
    "keyPoints": [
      {
        "title": "1. Théorème de convergence dominée",
        "content": "Soit $I$ un intervalle et $(f_n)$ une suite de fonctions continues par morceaux sur $I$ à valeurs dans $\\mathbb{K}$. On suppose :\n1. $(f_n)$ converge **simplement** sur $I$ vers une fonction $f$ continue par morceaux ;\n2. **domination** : il existe $\\varphi : I \\to \\mathbb{R}_+$ continue par morceaux et **intégrable** sur $I$ telle que $|f_n(t)| \\le \\varphi(t)$ pour tous $n$ et $t \\in I$.\nAlors $f$ est intégrable sur $I$ et $\\int_I f_n \\to \\int_I f$. (Théorème admis en L2 ; il relève de la théorie de l'intégrale de Lebesgue.)\n• **Exemple** : $\\int_0^n \\left(1 - \\frac{t}{n}\\right)^n dt \\to \\int_0^{+\\infty} e^{-t}\\, dt = 1$ (méthode 2)."
      },
      {
        "title": "2. Démonstration : continuité sous le signe intégrale",
        "content": "**Théorème.** Soit $A \\subset \\mathbb{R}$, $I$ un intervalle et $f : A \\times I \\to \\mathbb{K}$ telle que :\n1. pour tout $x \\in A$, $t \\mapsto f(x, t)$ est continue par morceaux sur $I$ ;\n2. pour tout $t \\in I$, $x \\mapsto f(x, t)$ est continue sur $A$ ;\n3. il existe $\\varphi$ continue par morceaux, **intégrable** sur $I$ et **indépendante de $x$**, telle que $|f(x, t)| \\le \\varphi(t)$ pour tous $(x, t) \\in A \\times I$.\nAlors $F(x) = \\int_I f(x, t)\\, dt$ est définie et continue sur $A$.\n**Démonstration.**\n1. Pour tout $x$, $|f(x, \\cdot)| \\le \\varphi$ intégrable : $F(x)$ est bien définie (comparaison).\n2. Soit $x_0 \\in A$ et $(x_n)$ une suite de $A$ tendant vers $x_0$. Posons $g_n(t) = f(x_n, t)$.\n3. Par l'hypothèse 2, $g_n(t) \\to f(x_0, t)$ pour tout $t \\in I$ ; la limite est continue par morceaux par l'hypothèse 1, ainsi que chaque $g_n$.\n4. Par l'hypothèse 3, $|g_n(t)| \\le \\varphi(t)$ avec $\\varphi$ intégrable, indépendante de $n$.\n5. Le théorème de convergence dominée donne $F(x_n) = \\int_I g_n \\to \\int_I f(x_0, t)\\, dt = F(x_0)$.\n6. Ceci valant pour toute suite $x_n \\to x_0$, $F$ est continue en $x_0$ (caractérisation séquentielle de la continuité).\n**Variante locale** : si $A$ est un intervalle, il suffit d'une domination sur tout segment $[a ; b] \\subset A$ (avec une $\\varphi_{[a ; b]}$ pouvant dépendre du segment), la continuité étant une propriété locale."
      },
      {
        "title": "3. Dérivation sous le signe intégrale",
        "content": "Soit $J$ un intervalle et $f : J \\times I \\to \\mathbb{K}$ telle que :\n1. pour tout $x \\in J$, $t \\mapsto f(x, t)$ est continue par morceaux et **intégrable** sur $I$ ;\n2. $\\frac{\\partial f}{\\partial x}$ existe sur $J \\times I$, est continue par rapport à $x$, et continue par morceaux par rapport à $t$ ;\n3. **domination de la dérivée** : $\\left|\\frac{\\partial f}{\\partial x}(x, t)\\right| \\le \\psi(t)$ pour tous $(x, t)$, avec $\\psi$ intégrable sur $I$ et indépendante de $x$ (ou une telle domination sur tout segment de $J$).\nAlors $F$ est de classe $\\mathcal{C}^1$ sur $J$ et $F'(x) = \\int_I \\frac{\\partial f}{\\partial x}(x, t)\\, dt$ (formule de Leibniz).\n• **Idée** : on applique la convergence dominée aux taux d'accroissement $\\frac{f(x_n, t) - f(x, t)}{x_n - x}$, dominés par $\\psi(t)$ grâce à l'inégalité des accroissements finis ; la continuité de $F'$ découle du théorème du point 2.\n• Par récurrence, on obtient la classe $\\mathcal{C}^k$ en dominant les dérivées partielles successives."
      },
      {
        "title": "4. Cas d'un segment",
        "content": "Si $I = [c ; d]$ est un segment et $f$ est **continue** sur $J \\times [c ; d]$ :\n• $F(x) = \\int_c^d f(x, t)\\, dt$ est continue sur $J$ : sur tout $[a ; b] \\subset J$, $|f| \\le M$ sur le compact $[a ; b] \\times [c ; d]$, et la constante $M$ est intégrable sur le segment $[c ; d]$.\n• Si de plus $\\frac{\\partial f}{\\partial x}$ existe et est continue sur $J \\times [c ; d]$, alors $F$ est $\\mathcal{C}^1$ et $F'(x) = \\int_c^d \\frac{\\partial f}{\\partial x}(x, t)\\, dt$.\n• Ces deux énoncés servent notamment à démontrer le théorème de Fubini sur un rectangle."
      },
      {
        "title": "5. La fonction Gamma d'Euler",
        "content": "$\\Gamma(x) = \\int_0^{+\\infty} t^{x-1} e^{-t}\\, dt$.\n• **Domaine** : en $0$, $t^{x-1} e^{-t} \\sim t^{x-1}$, intégrable si et seulement si $1 - x < 1$, soit $x > 0$ ; en $+\\infty$, $t^{x-1}e^{-t} = o\\left(\\frac{1}{t^2}\\right)$. Donc $\\Gamma$ est définie exactement sur $]0 ; +\\infty[$.\n• **Relation fonctionnelle** : une intégration par parties sur $[\\varepsilon ; X]$ donne $\\Gamma(x + 1) = x\\Gamma(x)$ ; avec $\\Gamma(1) = 1$, on obtient $\\Gamma(n + 1) = n!$.\n• **Régularité** : $\\Gamma$ est $\\mathcal{C}^\\infty$ sur $]0 ; +\\infty[$, avec $\\Gamma^{(k)}(x) = \\int_0^{+\\infty} (\\ln t)^k t^{x-1} e^{-t}\\, dt$. La domination est **locale** : pour $x \\in [a ; b] \\subset ]0 ; +\\infty[$, $|(\\ln t)^k t^{x-1} e^{-t}| \\le |\\ln t|^k (t^{a-1} + t^{b-1}) e^{-t}$, intégrable sur $]0 ; +\\infty[$.\n• **Valeur remarquable** : $\\Gamma\\left(\\frac{1}{2}\\right) = \\int_0^{+\\infty} \\frac{e^{-t}}{\\sqrt{t}}\\, dt = 2\\int_0^{+\\infty} e^{-u^2}\\, du = \\sqrt{\\pi}$ (changement de variable $t = u^2$ et intégrale de Gauss)."
      },
      {
        "title": "6. Intégration terme à terme d'une série de fonctions",
        "content": "• **Théorème** (admis) : si les $f_n$ sont continues par morceaux et intégrables sur $I$, si $\\sum f_n$ converge simplement sur $I$ vers une fonction continue par morceaux et si $\\sum_n \\int_I |f_n| < +\\infty$, alors $\\int_I \\sum_{n=0}^{+\\infty} f_n = \\sum_{n=0}^{+\\infty} \\int_I f_n$.\n• **Exemple** : pour $t > 0$, $\\frac{t}{e^t - 1} = \\sum_{n=1}^{+\\infty} t e^{-nt}$, et $\\int_0^{+\\infty} t e^{-nt}\\, dt = \\frac{1}{n^2}$, terme d'une série convergente. Donc $\\int_0^{+\\infty} \\frac{t}{e^t - 1}\\, dt = \\sum_{n=1}^{+\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Établir la classe C^1 d'une intégrale à paramètre",
        "example": "Montrer que $F(x) = \\int_0^{+\\infty} \\frac{\\sin(xt)}{t} e^{-t}\\, dt$ est de classe $\\mathcal{C}^1$ sur $\\mathbb{R}$ et la calculer.",
        "steps": [
          "**Définition** : $f(x, t) = \\frac{\\sin(xt)}{t}e^{-t}$ est continue sur $\\mathbb{R} \\times ]0 ; +\\infty[$ et $|f(x, t)| \\le |x| e^{-t}$ (car $|\\sin u| \\le |u|$) : $t \\mapsto f(x, t)$ est intégrable.",
          "**Dérivée partielle** : $\\frac{\\partial f}{\\partial x}(x, t) = \\cos(xt) e^{-t}$, continue en $x$ et en $t$.",
          "**Domination** : $|\\cos(xt) e^{-t}| \\le e^{-t}$, indépendante de $x$ et intégrable sur $]0 ; +\\infty[$.",
          "**Conclusion** : $F$ est $\\mathcal{C}^1$ et $F'(x) = \\int_0^{+\\infty} \\cos(xt) e^{-t}\\, dt = \\text{Re}\\int_0^{+\\infty} e^{(ix - 1)t}\\, dt = \\text{Re}\\,\\frac{1}{1 - ix} = \\frac{1}{1 + x^2}$. Comme $F(0) = 0$, $F(x) = \\arctan x$."
        ]
      },
      {
        "title": "Méthode : Calculer une limite d'intégrales par convergence dominée",
        "example": "Calculer $\\lim_{n \\to +\\infty} \\int_0^n \\left(1 - \\frac{t}{n}\\right)^n dt$.",
        "steps": [
          "**Intégrale sur un intervalle fixe** : on écrit l'intégrale $\\int_0^{+\\infty} f_n$ avec $f_n(t) = \\left(1 - \\frac{t}{n}\\right)^n$ si $t \\le n$ et $f_n(t) = 0$ sinon.",
          "**Limite simple** : pour $t$ fixé et $n > t$, $n \\ln\\left(1 - \\frac{t}{n}\\right) \\to -t$, donc $f_n(t) \\to e^{-t}$.",
          "**Domination** : $\\ln(1 - u) \\le -u$ pour $u \\in [0 ; 1[$, d'où $0 \\le f_n(t) \\le e^{-t}$, intégrable sur $[0 ; +\\infty[$ et indépendante de $n$.",
          "**Conclusion** : par convergence dominée, la limite vaut $\\int_0^{+\\infty} e^{-t}\\, dt = 1$. Contrôle : un calcul direct donne $\\int_0^n \\left(1 - \\frac{t}{n}\\right)^n dt = \\frac{n}{n + 1}$."
        ]
      }
    ],
    "traps": [
      "La fonction dominante ne doit pas dépendre du paramètre : pour $f(x, t) = x e^{-xt}$ sur $[0 ; +\\infty[ \\times [0 ; +\\infty[$, on a $F(x) = 1$ si $x > 0$ et $F(0) = 0$ ; $F$ est discontinue en $0$, et en effet $\\sup_{x \\ge 0} x e^{-xt} = \\frac{1}{e t}$ n'est pas intégrable en $0$.",
      "Quand la domination globale échoue, on domine sur tout segment $[a ; b]$ du domaine (cas de $\\Gamma$ sur $]0 ; +\\infty[$) : la continuité et la dérivabilité sont des propriétés locales.",
      "La convergence simple seule ne permet pas d'intervertir : $f_n = \\mathbf{1}_{[n ; n+1]}$ tend simplement vers $0$ sur $[0 ; +\\infty[$ alors que $\\int f_n = 1$ pour tout $n$.",
      "Pour dériver sous l'intégrale, c'est la **dérivée partielle** $\\frac{\\partial f}{\\partial x}$ qu'il faut dominer, et il faut aussi que $t \\mapsto f(x, t)$ soit intégrable pour chaque $x$."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème de convergence dominée.",
        "a": "Si $f_n \\to f$ simplement sur $I$ (fonctions continues par morceaux) et $|f_n| \\le \\varphi$ avec $\\varphi$ intégrable indépendante de $n$, alors $f$ est intégrable et $\\int_I f_n \\to \\int_I f$."
      },
      {
        "q": "Comment se démontre la continuité de $F(x) = \\int_I f(x, t)\\, dt$ ?",
        "a": "Par la caractérisation séquentielle : pour $x_n \\to x_0$, on applique la convergence dominée à $g_n = f(x_n, \\cdot)$, dominée par $\\varphi$."
      },
      {
        "q": "Quelle hypothèse clé permet de dériver sous le signe intégral ?",
        "a": "Une domination $\\left|\\frac{\\partial f}{\\partial x}(x, t)\\right| \\le \\psi(t)$ avec $\\psi$ intégrable indépendante de $x$ (au moins sur tout segment)."
      },
      {
        "q": "Sur quel ensemble la fonction $\\Gamma$ est-elle définie et quelle relation vérifie-t-elle ?",
        "a": "Sur $]0 ; +\\infty[$, avec $\\Gamma(x+1) = x\\Gamma(x)$ et $\\Gamma(n+1) = n!$."
      },
      {
        "q": "Que vaut $\\Gamma(1/2)$ ?",
        "a": "$\\sqrt{\\pi}$."
      },
      {
        "q": "Quelle condition permet d'intégrer terme à terme une série de fonctions sur un intervalle quelconque ?",
        "a": "$\\sum_n \\int_I |f_n| < +\\infty$ (avec convergence simple vers une fonction continue par morceaux)."
      }
    ]
  },
  "L2-MUL": {
    "title": "L2-MUL : Intégrales multiples, théorème de Fubini et changements de variables",
    "domain": "Calcul Intégral à Plusieurs Variables",
    "objectives": [
      "Définir l'intégrale double d'une fonction continue sur un rectangle ou un domaine élémentaire du plan.",
      "Démontrer le théorème de Fubini sur un rectangle et l'appliquer pour calculer des intégrales itérées.",
      "Calculer la matrice jacobienne et le jacobien d'un changement de variables.",
      "Passer en coordonnées polaires, cylindriques et sphériques."
    ],
    "keyPoints": [
      {
        "title": "1. Démonstration : théorème de Fubini sur un rectangle",
        "content": "**Théorème.** Si $f$ est **continue** sur $R = [a ; b] \\times [c ; d]$, alors\n$$\\int_a^b \\left(\\int_c^d f(x, y)\\, dy\\right) dx = \\int_c^d \\left(\\int_a^b f(x, y)\\, dx\\right) dy,$$\nvaleur commune notée $\\iint_R f(x, y)\\, dx\\, dy$.\n**Démonstration.** Pour $u \\in [a ; b]$, posons $G(u) = \\int_a^u \\left(\\int_c^d f(x, y)\\, dy\\right) dx$ et $H(u) = \\int_c^d \\left(\\int_a^u f(x, y)\\, dx\\right) dy$.\n1. $\\phi(x) = \\int_c^d f(x, y)\\, dy$ est continue sur $[a ; b]$ (continuité sous le signe intégrale sur un segment, $f$ étant bornée sur le compact $R$). Par le théorème fondamental, $G$ est $\\mathcal{C}^1$ et $G'(u) = \\phi(u)$.\n2. $g(u, y) = \\int_a^u f(x, y)\\, dx$ est continue sur $R$ et $\\frac{\\partial g}{\\partial u}(u, y) = f(u, y)$ est continue sur $R$. Par dérivation sous le signe intégrale sur le segment $[c ; d]$, $H$ est $\\mathcal{C}^1$ et $H'(u) = \\int_c^d f(u, y)\\, dy = \\phi(u)$.\n3. $G' = H'$ sur $[a ; b]$ et $G(a) = H(a) = 0$, donc $G = H$ ; en $u = b$, on obtient l'égalité annoncée.\n**Cas d'un produit** : $\\iint_R g(x) h(y)\\, dx\\, dy = \\int_a^b g \\times \\int_c^d h$."
      },
      {
        "title": "2. Domaines élémentaires",
        "content": "• Si $D = \\{(x, y) \\mid a \\le x \\le b,\\ \\varphi_1(x) \\le y \\le \\varphi_2(x)\\}$ avec $\\varphi_1 \\le \\varphi_2$ continues, et $f$ continue sur $D$ :\n$$\\iint_D f(x, y)\\, dx\\, dy = \\int_a^b \\left(\\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(x, y)\\, dy\\right) dx.$$\n• Si $D$ se décrit aussi sous la forme $\\{c \\le y \\le d,\\ \\psi_1(y) \\le x \\le \\psi_2(y)\\}$, on peut intégrer dans l'autre ordre : c'est l'**interversion des intégrales**.\n• **Aire** : $\\text{Aire}(D) = \\iint_D 1\\, dx\\, dy$. **Linéarité, positivité, additivité** par rapport au domaine sont vérifiées.\n• En dimension 3, on intègre de même « par piles » ou « par tranches »."
      },
      {
        "title": "3. Domaines non bornés et Fubini-Tonelli",
        "content": "• **Fonctions positives (Tonelli)** : pour $f$ continue et **positive** sur un produit d'intervalles $I \\times J$, les deux intégrales itérées sont égales dans $[0 ; +\\infty]$ (finies ou infinies simultanément).\n• **Fonctions de signe quelconque (Fubini)** : l'égalité des intégrales itérées est garantie si $\\iint |f| < +\\infty$ (intégrabilité absolue), ce que l'on vérifie avec Tonelli appliqué à $|f|$.\n• **Contre-exemple** sans intégrabilité : pour $f(x, y) = \\frac{x^2 - y^2}{(x^2 + y^2)^2}$ sur $]0 ; 1]^2$, on a $\\int_0^1 f(x, y)\\, dy = \\frac{1}{1 + x^2}$ (une primitive en $y$ est $\\frac{y}{x^2 + y^2}$), donc $\\int_0^1 \\int_0^1 f\\, dy\\, dx = \\frac{\\pi}{4}$, alors que l'autre ordre donne $-\\frac{\\pi}{4}$ par antisymétrie."
      },
      {
        "title": "4. Changement de variables et jacobien",
        "content": "Soit $\\Phi : \\Delta \\to D$ un **$\\mathcal{C}^1$-difféomorphisme** entre ouverts de $\\mathbb{R}^2$, $(u, v) \\mapsto (x, y)$.\n• **Matrice jacobienne** : $J_\\Phi(u, v) = \\begin{pmatrix} \\frac{\\partial x}{\\partial u} & \\frac{\\partial x}{\\partial v} \\\\ \\frac{\\partial y}{\\partial u} & \\frac{\\partial y}{\\partial v} \\end{pmatrix}$ ; le **jacobien** est $\\det J_\\Phi(u, v)$.\n• **Formule** (admise) : pour $f$ continue et intégrable sur $D$,\n$$\\iint_D f(x, y)\\, dx\\, dy = \\iint_\\Delta f(\\Phi(u, v))\\, \\left|\\det J_\\Phi(u, v)\\right|\\, du\\, dv.$$\n• On peut négliger des parties d'aire nulle (segments, courbes régulières) : la formule s'applique à des fermés dont l'intérieur est en bijection difféomorphe.\n• **Changement linéaire** : pour $\\Phi(u, v) = M\\begin{pmatrix} u \\\\ v \\end{pmatrix}$, $\\text{Aire}(\\Phi(\\Delta)) = |\\det M|\\, \\text{Aire}(\\Delta)$."
      },
      {
        "title": "5. Coordonnées usuelles et calcul du jacobien polaire",
        "content": "• **Polaires** : $\\Phi(r, \\theta) = (r\\cos\\theta, r\\sin\\theta)$, $J_\\Phi = \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix}$, donc $\\det J_\\Phi = r\\cos^2\\theta + r\\sin^2\\theta = r$. $\\Phi$ est un $\\mathcal{C}^1$-difféomorphisme de $]0 ; +\\infty[ \\times ]-\\pi ; \\pi[$ sur le plan privé de la demi-droite $]-\\infty ; 0] \\times \\{0\\}$, d'aire nulle. D'où $dx\\, dy = r\\, dr\\, d\\theta$.\n• **Cylindriques** : $(r\\cos\\theta, r\\sin\\theta, z)$, jacobien $r$, $dx\\, dy\\, dz = r\\, dr\\, d\\theta\\, dz$.\n• **Sphériques** ($\\varphi \\in [0 ; \\pi]$ angle avec l'axe $Oz$) : $x = r\\sin\\varphi\\cos\\theta$, $y = r\\sin\\varphi\\sin\\theta$, $z = r\\cos\\varphi$, et $|\\det J| = r^2\\sin\\varphi$ : $dx\\, dy\\, dz = r^2 \\sin\\varphi\\, dr\\, d\\theta\\, d\\varphi$.\n• **Exemple** : volume de la boule de rayon $R$ : $\\int_0^R r^2\\, dr \\int_0^{2\\pi} d\\theta \\int_0^\\pi \\sin\\varphi\\, d\\varphi = \\frac{R^3}{3} \\cdot 2\\pi \\cdot 2 = \\frac{4}{3}\\pi R^3$."
      },
      {
        "title": "6. Application : l'intégrale de Gauss",
        "content": "**Résultat** : $\\int_{-\\infty}^{+\\infty} e^{-x^2}\\, dx = \\sqrt{\\pi}$.\n1. Notons $I_R = \\int_{-R}^{R} e^{-x^2}\\, dx$. Par Fubini sur le carré $C_R = [-R ; R]^2$ : $\\iint_{C_R} e^{-(x^2 + y^2)}\\, dx\\, dy = I_R^2$.\n2. Pour le disque $D_\\rho$ de rayon $\\rho$, en polaires : $\\iint_{D_\\rho} e^{-(x^2+y^2)}\\, dx\\, dy = 2\\pi \\int_0^\\rho r e^{-r^2}\\, dr = \\pi\\left(1 - e^{-\\rho^2}\\right)$.\n3. Comme $D_R \\subset C_R \\subset D_{R\\sqrt{2}}$ et que la fonction est positive : $\\pi(1 - e^{-R^2}) \\le I_R^2 \\le \\pi(1 - e^{-2R^2})$.\n4. En faisant $R \\to +\\infty$ : $I_R^2 \\to \\pi$, donc $\\int_{-\\infty}^{+\\infty} e^{-x^2}\\, dx = \\sqrt{\\pi}$ (l'intégrale converge, la fonction étant positive et $I_R$ bornée)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une intégrale double en coordonnées polaires",
        "example": "Calculer $I = \\iint_D e^{-(x^2 + y^2)}\\, dx\\, dy$ sur le disque unité $D = \\{x^2 + y^2 \\le 1\\}$.",
        "steps": [
          "**Changement de variables** : $x^2 + y^2 = r^2$ et $dx\\, dy = r\\, dr\\, d\\theta$.",
          "**Nouveau domaine** : $(r, \\theta) \\in [0 ; 1] \\times [0 ; 2\\pi]$ (les bords sont d'aire nulle).",
          "**Séparation des variables** : $I = \\int_0^{2\\pi} d\\theta \\times \\int_0^1 r e^{-r^2}\\, dr = 2\\pi \\left[-\\frac{1}{2} e^{-r^2}\\right]_0^1$.",
          "**Conclusion** : $I = \\pi\\left(1 - e^{-1}\\right)$."
        ]
      },
      {
        "title": "Méthode : Intervertir l'ordre d'intégration",
        "example": "Calculer $J = \\int_0^1 \\left(\\int_x^1 e^{y^2}\\, dy\\right) dx$.",
        "steps": [
          "**Obstacle** : $y \\mapsto e^{y^2}$ n'a pas de primitive explicite, l'intégrale intérieure ne se calcule pas directement.",
          "**Domaine** : $D = \\{0 \\le x \\le 1,\\ x \\le y \\le 1\\} = \\{0 \\le y \\le 1,\\ 0 \\le x \\le y\\}$ (triangle).",
          "**Interversion** (fonction continue sur un domaine élémentaire) : $J = \\int_0^1 \\left(\\int_0^y e^{y^2}\\, dx\\right) dy = \\int_0^1 y e^{y^2}\\, dy$.",
          "**Conclusion** : $J = \\left[\\frac{1}{2} e^{y^2}\\right]_0^1 = \\frac{e - 1}{2}$."
        ]
      }
    ],
    "traps": [
      "Ne pas oublier la valeur absolue du jacobien : $dx\\, dy = r\\, dr\\, d\\theta$ en polaires et $r^2\\sin\\varphi\\, dr\\, d\\theta\\, d\\varphi$ en sphériques.",
      "Sur un domaine non rectangulaire, les bornes de l'intégrale intérieure dépendent de la variable extérieure ; les bornes de l'intégrale extérieure, elles, sont constantes.",
      "Intervertir sans intégrabilité absolue peut donner deux résultats différents : $\\frac{\\pi}{4}$ et $-\\frac{\\pi}{4}$ pour $\\frac{x^2 - y^2}{(x^2+y^2)^2}$ sur $]0 ; 1]^2$.",
      "En polaires, le domaine doit être décrit correctement : le disque $x^2 + y^2 \\le 2x$ correspond à $\\theta \\in \\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$ et $0 \\le r \\le 2\\cos\\theta$, et non à $r \\in [0 ; 1]$, $\\theta \\in [0 ; 2\\pi]$.",
      "Le changement de variables exige une bijection (aux ensembles d'aire nulle près) : décrire $\\theta$ sur $[0 ; 4\\pi]$ compte chaque point deux fois."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème de Fubini pour une fonction continue sur un rectangle.",
        "a": "$\\int_a^b \\int_c^d f(x,y)\\,dy\\,dx = \\int_c^d \\int_a^b f(x,y)\\,dx\\,dy$ pour $f$ continue sur $[a ; b] \\times [c ; d]$."
      },
      {
        "q": "Quelle est l'idée de la preuve de Fubini sur un rectangle ?",
        "a": "Les fonctions $u \\mapsto \\int_a^u\\int_c^d f$ et $u \\mapsto \\int_c^d\\int_a^u f$ ont la même dérivée $\\int_c^d f(u, y)\\,dy$ et sont nulles en $a$."
      },
      {
        "q": "Quel est l'élément d'aire en coordonnées polaires et pourquoi ?",
        "a": "$dx\\,dy = r\\,dr\\,d\\theta$ : le déterminant de la jacobienne de $(r, \\theta) \\mapsto (r\\cos\\theta, r\\sin\\theta)$ vaut $r$."
      },
      {
        "q": "Quel est l'élément de volume en coordonnées sphériques ?",
        "a": "$dx\\,dy\\,dz = r^2 \\sin\\varphi\\, dr\\,d\\theta\\,d\\varphi$."
      },
      {
        "q": "À quelle condition peut-on intervertir les intégrales pour une fonction de signe quelconque sur un domaine non borné ?",
        "a": "Si $\\iint |f| < +\\infty$ (Fubini) ; pour une fonction positive, l'interversion est toujours licite (Tonelli)."
      },
      {
        "q": "Que vaut $\\int_{-\\infty}^{+\\infty} e^{-x^2}\\,dx$ ?",
        "a": "$\\sqrt{\\pi}$."
      }
    ]
  },
  "L2-CRB": {
    "title": "L2-CRB : Courbes paramétrées, repère de Frenet et courbure",
    "domain": "Géométrie Différentielle",
    "objectives": [
      "Définir un arc paramétré régulier, sa longueur et son abscisse curviligne.",
      "Construire le repère de Frenet $(\\vec{T}, \\vec{N})$ d'une courbe plane et énoncer les formules de Frenet.",
      "Démontrer la formule de la courbure pour un paramétrage quelconque et l'appliquer.",
      "Déterminer le rayon et le centre de courbure, et connaître la courbure et la torsion d'une courbe de l'espace."
    ],
    "keyPoints": [
      {
        "title": "1. Arcs paramétrés, régularité, longueur",
        "content": "Soit $\\gamma : I \\to \\mathbb{R}^2$, $t \\mapsto M(t) = (x(t), y(t))$, de classe $\\mathcal{C}^k$ ($k \\ge 1$).\n• Le point $M(t_0)$ est **régulier** si $\\gamma'(t_0) \\neq \\vec{0}$ ; la tangente est alors dirigée par $\\gamma'(t_0)$. L'arc est **régulier** si tous ses points le sont.\n• En un point **singulier** ($\\gamma'(t_0) = \\vec{0}$), la tangente, si elle existe, est dirigée par le premier vecteur dérivé non nul.\n• **Longueur** de l'arc entre $a$ et $b$ : $L = \\int_a^b \\|\\gamma'(t)\\|\\, dt$. Elle ne dépend pas du paramétrage (changement de variable dans l'intégrale), pourvu que l'arc soit parcouru une seule fois.\n• **Exemple** : le cercle $(R\\cos t, R\\sin t)$, $t \\in [0 ; 2\\pi]$, a pour longueur $\\int_0^{2\\pi} R\\, dt = 2\\pi R$."
      },
      {
        "title": "2. Abscisse curviligne et paramétrage normal",
        "content": "Soit $\\gamma$ un arc régulier de classe $\\mathcal{C}^2$ et $t_0 \\in I$.\n• **Abscisse curviligne** : $s(t) = \\int_{t_0}^{t} \\|\\gamma'(u)\\|\\, du$. Comme $s'(t) = \\|\\gamma'(t)\\| > 0$, $s$ est un $\\mathcal{C}^1$-difféomorphisme strictement croissant de $I$ sur $s(I)$ (et même de classe $\\mathcal{C}^2$ ici).\n• Le paramétrage $s \\mapsto M(s)$ est dit **normal** : $\\left\\|\\frac{dM}{ds}\\right\\| = 1$.\n• **Règle pratique** : $\\frac{d}{dt} = \\frac{ds}{dt}\\, \\frac{d}{ds} = \\|\\gamma'(t)\\|\\, \\frac{d}{ds}$."
      },
      {
        "title": "3. Repère de Frenet et formules de Frenet",
        "content": "Pour un arc plan régulier de classe $\\mathcal{C}^2$, paramétré par l'abscisse curviligne $s$ :\n• $\\vec{T}(s) = \\frac{dM}{ds}$ est le **vecteur tangent unitaire** ; $\\vec{N}(s)$ est l'image de $\\vec{T}(s)$ par la rotation d'angle $+\\frac{\\pi}{2}$, de sorte que $(\\vec{T}, \\vec{N})$ est une base orthonormée directe.\n• Comme $\\|\\vec{T}\\|^2 = 1$, en dérivant : $2\\left\\langle \\frac{d\\vec{T}}{ds}, \\vec{T} \\right\\rangle = 0$ ; donc $\\frac{d\\vec{T}}{ds}$ est colinéaire à $\\vec{N}$.\n• **Formules de Frenet** :\n$$\\frac{d\\vec{T}}{ds} = \\kappa(s)\\, \\vec{N}(s), \\qquad \\frac{d\\vec{N}}{ds} = -\\kappa(s)\\, \\vec{T}(s),$$\noù $\\kappa(s)$ est la **courbure algébrique**.\n• **Angle** : si $\\vec{T} = (\\cos\\alpha, \\sin\\alpha)$ avec $\\alpha$ de classe $\\mathcal{C}^1$ (relèvement), alors $\\kappa = \\frac{d\\alpha}{ds}$ : la courbure mesure la vitesse de rotation de la tangente."
      },
      {
        "title": "4. Démonstration de la formule de la courbure",
        "content": "**Théorème.** Pour un arc régulier de classe $\\mathcal{C}^2$ paramétré par $t$ quelconque :\n$$\\kappa(t) = \\frac{\\det\\left(\\gamma'(t), \\gamma''(t)\\right)}{\\|\\gamma'(t)\\|^3} = \\frac{x'y'' - y'x''}{\\left(x'^2 + y'^2\\right)^{3/2}}.$$\n**Démonstration.**\n1. Notons $v(t) = \\|\\gamma'(t)\\| = \\frac{ds}{dt} > 0$. Par définition, $\\gamma'(t) = v(t)\\, \\vec{T}$.\n2. En dérivant par rapport à $t$ et en utilisant $\\frac{d\\vec{T}}{dt} = \\frac{ds}{dt}\\, \\frac{d\\vec{T}}{ds} = v\\, \\kappa\\, \\vec{N}$ : $\\gamma''(t) = v'(t)\\, \\vec{T} + v(t)^2 \\kappa\\, \\vec{N}$.\n3. Par bilinéarité et alternance du déterminant : $\\det(\\gamma', \\gamma'') = \\det(v\\vec{T}, v'\\vec{T} + v^2\\kappa\\vec{N}) = v \\cdot v'\\det(\\vec{T}, \\vec{T}) + v^3 \\kappa \\det(\\vec{T}, \\vec{N}) = v^3\\kappa$, car $\\det(\\vec{T}, \\vec{T}) = 0$ et $\\det(\\vec{T}, \\vec{N}) = 1$ (base orthonormée directe).\n4. D'où $\\kappa = \\frac{\\det(\\gamma', \\gamma'')}{v^3}$.\n**Cas d'un graphe** $y = f(x)$ : avec $x(t) = t$, $\\kappa = \\frac{f''(x)}{\\left(1 + f'(x)^2\\right)^{3/2}}$. On lit aussi au point 2 l'accélération : composante tangentielle $v'$, composante normale $v^2\\kappa$."
      },
      {
        "title": "5. Rayon, centre de courbure et cercle osculateur",
        "content": "On suppose $\\kappa(t) \\neq 0$ (point **birégulier** : $(\\gamma', \\gamma'')$ libre).\n• **Rayon de courbure** : $R = \\frac{1}{|\\kappa|}$ ; on utilise aussi le rayon algébrique $\\frac{1}{\\kappa}$.\n• **Centre de courbure** : $C = M + \\frac{1}{\\kappa}\\, \\vec{N}$. Le **cercle osculateur** de centre $C$ et de rayon $R$ est le cercle qui approche le mieux la courbe au voisinage de $M$ (contact d'ordre 2).\n• La **développée** est le lieu des centres de courbure.\n• **Exemples** : une droite a une courbure nulle ; le cercle de rayon $R$ parcouru dans le sens direct a pour courbure $\\frac{1}{R}$, et $-\\frac{1}{R}$ dans le sens indirect ; son centre de courbure est son centre."
      },
      {
        "title": "6. Courbes de l'espace : courbure et torsion",
        "content": "Pour un arc birégulier de $\\mathbb{R}^3$ de classe $\\mathcal{C}^3$ :\n• **Courbure** (positive) : $\\kappa = \\frac{\\|\\gamma' \\wedge \\gamma''\\|}{\\|\\gamma'\\|^3}$ ; **normale principale** $\\vec{N}$ définie par $\\frac{d\\vec{T}}{ds} = \\kappa\\vec{N}$ ; **binormale** $\\vec{B} = \\vec{T} \\wedge \\vec{N}$.\n• **Torsion** : $\\tau = \\frac{\\det(\\gamma', \\gamma'', \\gamma''')}{\\|\\gamma' \\wedge \\gamma''\\|^2}$ ; elle est nulle si et seulement si la courbe est plane.\n• **Formules de Frenet** : $\\frac{d\\vec{T}}{ds} = \\kappa\\vec{N}$, $\\frac{d\\vec{N}}{ds} = -\\kappa\\vec{T} + \\tau\\vec{B}$, $\\frac{d\\vec{B}}{ds} = -\\tau\\vec{N}$.\n• **Exemple** : l'hélice $(a\\cos t, a\\sin t, bt)$, $a > 0$, a une courbure $\\frac{a}{a^2 + b^2}$ et une torsion $\\frac{b}{a^2 + b^2}$, constantes."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la courbure et le centre de courbure",
        "example": "Calculer la courbure et le centre de courbure de la parabole $y = x^2$ en son sommet $O$.",
        "steps": [
          "**Paramétrage** : $x(t) = t$, $y(t) = t^2$ ; en $t = 0$ : $x' = 1$, $y' = 0$, $x'' = 0$, $y'' = 2$.",
          "**Vitesse** : $\\|\\gamma'(0)\\| = 1$.",
          "**Courbure** : $\\kappa(0) = \\frac{1 \\times 2 - 0 \\times 0}{1^3} = 2$, donc $R = \\frac{1}{2}$.",
          "**Centre** : $\\vec{T}(0) = (1, 0)$, $\\vec{N}(0) = (0, 1)$, donc $C = O + \\frac{1}{2}\\vec{N} = \\left(0, \\frac{1}{2}\\right)$ : le cercle osculateur a pour équation $x^2 + \\left(y - \\frac{1}{2}\\right)^2 = \\frac{1}{4}$."
        ]
      },
      {
        "title": "Méthode : Calculer la longueur d'un arc",
        "example": "Calculer la longueur d'une arche de cycloïde $x = R(t - \\sin t)$, $y = R(1 - \\cos t)$, $t \\in [0 ; 2\\pi]$.",
        "steps": [
          "**Vitesse** : $x' = R(1 - \\cos t)$, $y' = R\\sin t$, d'où $\\|\\gamma'(t)\\|^2 = R^2(2 - 2\\cos t) = 4R^2 \\sin^2\\frac{t}{2}$.",
          "**Norme** : sur $[0 ; 2\\pi]$, $\\sin\\frac{t}{2} \\ge 0$, donc $\\|\\gamma'(t)\\| = 2R\\sin\\frac{t}{2}$.",
          "**Intégrale** : $L = \\int_0^{2\\pi} 2R\\sin\\frac{t}{2}\\, dt = 2R\\left[-2\\cos\\frac{t}{2}\\right]_0^{2\\pi} = 2R(2 + 2) = 8R$.",
          "**Remarque** : les points $t = 0$ et $t = 2\\pi$ sont singuliers ($\\gamma' = \\vec{0}$) ; cela n'empêche pas le calcul de la longueur."
        ]
      }
    ],
    "traps": [
      "La formule $\\frac{d\\vec{T}}{ds} = \\kappa\\vec{N}$ suppose la dérivation par rapport à l'abscisse curviligne ; pour un paramètre $t$ quelconque : $\\frac{d\\vec{T}}{dt} = \\|\\gamma'(t)\\|\\, \\kappa\\, \\vec{N}$.",
      "La courbure algébrique d'une courbe plane dépend du sens de parcours : le cercle de rayon $R$ parcouru dans le sens indirect a pour courbure $-\\frac{1}{R}$ ; le rayon de courbure est $\\frac{1}{|\\kappa|}$.",
      "Les formules de courbure ne s'appliquent pas en un point singulier ($\\gamma'(t_0) = \\vec{0}$) : pour la cycloïde, en $t = 0$, le dénominateur $\\|\\gamma'\\|^3$ s'annule (point de rebroussement).",
      "La longueur $\\int \\|\\gamma'\\|$ compte les passages multiples : $(\\cos 2t, \\sin 2t)$, $t \\in [0 ; 2\\pi]$, parcourt deux fois le cercle unité et donne $4\\pi$.",
      "Pour une courbe de l'espace, la courbure est positive et se calcule avec le produit vectoriel ; la formule plane avec $\\det(\\gamma', \\gamma'')$ n'a pas de sens en dimension 3."
    ],
    "flashcards": [
      {
        "q": "Énoncer les formules de Frenet d'une courbe plane paramétrée par l'abscisse curviligne.",
        "a": "$\\frac{d\\vec{T}}{ds} = \\kappa\\vec{N}$ et $\\frac{d\\vec{N}}{ds} = -\\kappa\\vec{T}$."
      },
      {
        "q": "Donner la formule de la courbure pour un paramétrage quelconque.",
        "a": "$\\kappa = \\frac{\\det(\\gamma', \\gamma'')}{\\|\\gamma'\\|^3} = \\frac{x'y'' - y'x''}{(x'^2 + y'^2)^{3/2}}$."
      },
      {
        "q": "Quelle décomposition de l'accélération sert à démontrer la formule de la courbure ?",
        "a": "$\\gamma'' = v'\\vec{T} + v^2\\kappa\\vec{N}$ avec $v = \\|\\gamma'\\|$, d'où $\\det(\\gamma', \\gamma'') = v^3\\kappa$."
      },
      {
        "q": "Quelle est la courbure d'un cercle de rayon $R$ ?",
        "a": "$\\frac{1}{R}$ en valeur absolue (signe $+$ dans le sens direct, $-$ dans le sens indirect)."
      },
      {
        "q": "Où se trouve le centre de courbure ?",
        "a": "En $C = M + \\frac{1}{\\kappa}\\vec{N}$, à la distance $R = \\frac{1}{|\\kappa|}$ de $M$ sur la normale."
      },
      {
        "q": "Que vaut la longueur d'une arche de cycloïde de paramètre $R$ ?",
        "a": "$8R$."
      }
    ]
  },
  "L2-PRB": {
    "title": "L2-PRB : Espaces probabilisés et variables aléatoires discrètes",
    "domain": "Probabilités & Statistiques",
    "objectives": [
      "Définir un espace probabilisé $(\\Omega, \\mathcal{A}, P)$, les probabilités conditionnelles et l'indépendance.",
      "Démontrer et appliquer la formule des probabilités totales et la formule de Bayes.",
      "Définir l'espérance et la variance d'une variable aléatoire discrète, démontrer la linéarité de l'espérance et l'inégalité de Bienaymé-Tchebychev.",
      "Connaître les lois discrètes usuelles et utiliser les fonctions génératrices."
    ],
    "keyPoints": [
      {
        "title": "1. Espaces probabilisés",
        "content": "• Une **tribu** $\\mathcal{A}$ sur $\\Omega$ contient $\\Omega$, est stable par passage au complémentaire et par réunion dénombrable.\n• Une **probabilité** est $P : \\mathcal{A} \\to [0 ; 1]$ telle que $P(\\Omega) = 1$ et, pour toute suite $(A_n)$ d'événements **deux à deux disjoints**, $P\\left(\\bigcup_n A_n\\right) = \\sum_n P(A_n)$ ($\\sigma$-additivité).\n• **Conséquences** : $P(\\emptyset) = 0$, $P(\\overline{A}) = 1 - P(A)$, $A \\subset B \\implies P(A) \\le P(B)$, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, $P\\left(\\bigcup A_n\\right) \\le \\sum P(A_n)$.\n• **Continuité monotone** : si $(A_n)$ est croissante, $P\\left(\\bigcup A_n\\right) = \\lim P(A_n)$ ; si $(A_n)$ est décroissante, $P\\left(\\bigcap A_n\\right) = \\lim P(A_n)$."
      },
      {
        "title": "2. Démonstration : probabilités totales et formule de Bayes",
        "content": "• Si $P(B) > 0$, $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$ ; $P(\\cdot \\mid B)$ est une probabilité. **Probabilités composées** : $P(A_1 \\cap \\dots \\cap A_n) = P(A_1) P(A_2 \\mid A_1) \\cdots P(A_n \\mid A_1 \\cap \\dots \\cap A_{n-1})$ si $P(A_1 \\cap \\dots \\cap A_{n-1}) > 0$.\n• **Système complet** : une famille finie ou dénombrable $(B_n)$ d'événements deux à deux disjoints de réunion $\\Omega$.\n**Théorème.** Si $(B_n)$ est un système complet avec $P(B_n) > 0$ pour tout $n$, alors pour tout $A \\in \\mathcal{A}$ :\n$$P(A) = \\sum_n P(A \\mid B_n)\\, P(B_n), \\qquad \\text{et si } P(A) > 0 : \\quad P(B_k \\mid A) = \\frac{P(A \\mid B_k)\\, P(B_k)}{\\sum_n P(A \\mid B_n)\\, P(B_n)}.$$\n**Démonstration.**\n1. $A = A \\cap \\Omega = \\bigcup_n (A \\cap B_n)$, et les $A \\cap B_n$ sont deux à deux disjoints car les $B_n$ le sont.\n2. Par $\\sigma$-additivité : $P(A) = \\sum_n P(A \\cap B_n) = \\sum_n P(A \\mid B_n) P(B_n)$, par définition de la probabilité conditionnelle.\n3. Pour Bayes : $P(B_k \\mid A) = \\frac{P(A \\cap B_k)}{P(A)} = \\frac{P(A \\mid B_k) P(B_k)}{P(A)}$, et on remplace $P(A)$ par la formule des probabilités totales.\n• **Indépendance** : $A$ et $B$ sont indépendants si $P(A \\cap B) = P(A)P(B)$ ; des événements sont **mutuellement** indépendants si cette égalité vaut pour toute sous-famille finie."
      },
      {
        "title": "3. Variables aléatoires discrètes et espérance",
        "content": "• $X : \\Omega \\to \\mathbb{R}$ est une **variable aléatoire discrète** si $X(\\Omega)$ est fini ou dénombrable et $\\{X = x\\} \\in \\mathcal{A}$ pour tout $x$. Sa **loi** est donnée par les $P(X = x)$, $x \\in X(\\Omega)$, de somme 1.\n• **Espérance** : $X$ admet une espérance si $\\sum_{x \\in X(\\Omega)} |x|\\, P(X = x) < +\\infty$ ; on pose alors $E(X) = \\sum_x x\\, P(X = x)$.\n• **Théorème de transfert** : $g(X)$ admet une espérance si et seulement si $\\sum_x |g(x)| P(X = x) < +\\infty$, et alors $E(g(X)) = \\sum_x g(x) P(X = x)$. Il vaut aussi pour un couple : $E(g(X, Y)) = \\sum_{(x, y)} g(x, y) P(X = x, Y = y)$.\n• **Propriétés** : positivité ($X \\ge 0 \\implies E(X) \\ge 0$), croissance, $E(\\mathbf{1}_A) = P(A)$."
      },
      {
        "title": "4. Démonstration : linéarité de l'espérance",
        "content": "**Théorème.** Si $X$ et $Y$ admettent une espérance et $\\lambda \\in \\mathbb{R}$, alors $X + \\lambda Y$ admet une espérance et $E(X + \\lambda Y) = E(X) + \\lambda E(Y)$.\n**Démonstration.**\n1. Le cas $\\lambda Y$ est immédiat ($E(\\lambda Y) = \\lambda E(Y)$) ; montrons $E(X + Y) = E(X) + E(Y)$. Le couple $(X, Y)$ prend ses valeurs dans l'ensemble dénombrable $X(\\Omega) \\times Y(\\Omega)$, et l'on note $p_{x,y} = P(X = x, Y = y)$.\n2. Pour $x$ fixé, les événements $\\{X = x, Y = y\\}$, $y \\in Y(\\Omega)$, sont disjoints de réunion $\\{X = x\\}$ : par $\\sigma$-additivité, $\\sum_y p_{x,y} = P(X = x)$. De même, $\\sum_x p_{x,y} = P(Y = y)$.\n3. **Sommabilité** : $\\sum_{(x,y)} |x + y|\\, p_{x,y} \\le \\sum_{x} |x| \\sum_y p_{x,y} + \\sum_y |y| \\sum_x p_{x,y} = \\sum_x |x| P(X = x) + \\sum_y |y| P(Y = y) < +\\infty$ (sommation par paquets de termes positifs). Par transfert, $X + Y$ admet une espérance.\n4. **Calcul** : la famille $\\left((x + y) p_{x,y}\\right)$ étant sommable, on peut la sommer par paquets : $E(X + Y) = \\sum_{(x,y)} (x + y) p_{x,y} = \\sum_x x P(X = x) + \\sum_y y P(Y = y) = E(X) + E(Y)$.\n**Attention** : aucune hypothèse d'indépendance n'est requise."
      },
      {
        "title": "5. Variance, covariance et inégalité de Bienaymé-Tchebychev",
        "content": "• Si $E(X^2) < +\\infty$ : $V(X) = E\\left[(X - E(X))^2\\right] = E(X^2) - E(X)^2 \\ge 0$, $\\sigma(X) = \\sqrt{V(X)}$, et $V(aX + b) = a^2 V(X)$.\n• $\\text{Cov}(X, Y) = E(XY) - E(X)E(Y)$ et $V(X + Y) = V(X) + V(Y) + 2\\,\\text{Cov}(X, Y)$. Si $X$ et $Y$ sont indépendantes, $E(XY) = E(X)E(Y)$, donc $\\text{Cov}(X, Y) = 0$ et $V(X + Y) = V(X) + V(Y)$.\n**Inégalité de Markov.** Si $X \\ge 0$ admet une espérance et $a > 0$ : $P(X \\ge a) \\le \\frac{E(X)}{a}$.\n**Inégalité de Bienaymé-Tchebychev.** Si $E(X^2) < +\\infty$ et $\\varepsilon > 0$ : $P\\left(|X - E(X)| \\ge \\varepsilon\\right) \\le \\frac{V(X)}{\\varepsilon^2}$.\n**Démonstration.**\n1. **Markov** : on a $a\\, \\mathbf{1}_{\\{X \\ge a\\}} \\le X$ (si $X \\ge a$, c'est $a \\le X$ ; sinon, $0 \\le X$). Par croissance et linéarité de l'espérance : $a\\, P(X \\ge a) \\le E(X)$.\n2. **Bienaymé-Tchebychev** : $\\{|X - E(X)| \\ge \\varepsilon\\} = \\{(X - E(X))^2 \\ge \\varepsilon^2\\}$ ; on applique Markov à la variable positive $(X - E(X))^2$, d'espérance $V(X)$, avec $a = \\varepsilon^2$.\n• **Exemple** : si $X \\sim \\mathcal{B}(100, \\frac{1}{2})$, $V(X) = 25$ et $P(|X - 50| \\ge 10) \\le \\frac{25}{100} = \\frac{1}{4}$.\n• **Loi faible des grands nombres** : si les $X_i$ sont indépendantes, de même loi, de moyenne $m$ et de variance $\\sigma^2$, alors $P\\left(\\left|\\frac{X_1 + \\dots + X_n}{n} - m\\right| \\ge \\varepsilon\\right) \\le \\frac{\\sigma^2}{n\\varepsilon^2} \\to 0$."
      },
      {
        "title": "6. Lois discrètes usuelles",
        "content": "| Loi | $P(X = k)$ | $E(X)$ | $V(X)$ |\n|:---|:---:|:---:|:---:|\n| Bernoulli $\\mathcal{B}(p)$ | $P(X = 1) = p$, $P(X = 0) = 1 - p$ | $p$ | $p(1 - p)$ |\n| Binomiale $\\mathcal{B}(n, p)$ | $\\binom{n}{k} p^k (1-p)^{n-k}$, $0 \\le k \\le n$ | $np$ | $np(1-p)$ |\n| Géométrique $\\mathcal{G}(p)$ | $(1 - p)^{k-1} p$, $k \\ge 1$ | $\\frac{1}{p}$ | $\\frac{1 - p}{p^2}$ |\n| Poisson $\\mathcal{P}(\\lambda)$ | $e^{-\\lambda}\\frac{\\lambda^k}{k!}$, $k \\ge 0$ | $\\lambda$ | $\\lambda$ |\n• La binomiale compte les succès dans $n$ épreuves de Bernoulli indépendantes de paramètre $p$ ; c'est la loi d'une somme de $n$ variables de Bernoulli indépendantes.\n• La loi géométrique est le rang du premier succès ; elle est **sans mémoire** : $P(X > n + k \\mid X > n) = P(X > k)$.\n• **Approximation** : si $n p_n \\to \\lambda$, alors $P(X_n = k) \\to e^{-\\lambda}\\frac{\\lambda^k}{k!}$ pour $X_n \\sim \\mathcal{B}(n, p_n)$."
      },
      {
        "title": "7. Fonctions génératrices",
        "content": "Pour $X$ à valeurs dans $\\mathbb{N}$ : $G_X(t) = E(t^X) = \\sum_{k=0}^{+\\infty} P(X = k)\\, t^k$, série entière de rayon au moins 1, définie au moins sur $[-1 ; 1]$, avec $G_X(1) = 1$.\n• La fonction génératrice **caractérise la loi** : $P(X = k) = \\frac{G_X^{(k)}(0)}{k!}$.\n• $X$ admet une espérance si et seulement si $G_X$ est dérivable (à gauche) en $1$, et alors $E(X) = G_X'(1)$.\n• $X$ admet un moment d'ordre 2 si et seulement si $G_X$ est deux fois dérivable en $1$, et alors $V(X) = G_X''(1) + G_X'(1) - G_X'(1)^2$.\n• Si $X$ et $Y$ sont **indépendantes** : $G_{X+Y} = G_X\\, G_Y$. Exemple : la somme de deux variables de Poisson indépendantes de paramètres $\\lambda$ et $\\mu$ suit $\\mathcal{P}(\\lambda + \\mu)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Espérance et variance par la fonction génératrice",
        "example": "Calculer l'espérance et la variance de $X \\sim \\mathcal{P}(\\lambda)$.",
        "steps": [
          "**Fonction génératrice** : $G_X(t) = \\sum_{k=0}^{+\\infty} e^{-\\lambda}\\frac{(\\lambda t)^k}{k!} = e^{\\lambda(t - 1)}$, définie sur $\\mathbb{R}$ et de classe $\\mathcal{C}^\\infty$.",
          "**Espérance** : $G_X'(t) = \\lambda e^{\\lambda(t - 1)}$, donc $E(X) = G_X'(1) = \\lambda$.",
          "**Variance** : $G_X''(1) = \\lambda^2$, donc $V(X) = \\lambda^2 + \\lambda - \\lambda^2 = \\lambda$."
        ]
      },
      {
        "title": "Méthode : Appliquer la formule de Bayes",
        "example": "Une maladie touche $1\\,\\%$ d'une population. Un test est positif chez $99\\,\\%$ des malades et chez $2\\,\\%$ des non-malades. Quelle est la probabilité d'être malade sachant que le test est positif ?",
        "steps": [
          "**Événements** : $M$ « être malade » et $T$ « test positif » ; $P(M) = 0{,}01$, $P(T \\mid M) = 0{,}99$, $P(T \\mid \\overline{M}) = 0{,}02$.",
          "**Probabilités totales** (système complet $(M, \\overline{M})$) : $P(T) = 0{,}99 \\times 0{,}01 + 0{,}02 \\times 0{,}99 = 0{,}0099 + 0{,}0198 = 0{,}0297$.",
          "**Bayes** : $P(M \\mid T) = \\frac{P(T \\mid M) P(M)}{P(T)} = \\frac{0{,}0099}{0{,}0297} = \\frac{1}{3}$.",
          "**Interprétation** : malgré un test fiable à $99\\,\\%$ chez les malades, seuls un tiers des positifs sont malades, car la maladie est rare."
        ]
      }
    ],
    "traps": [
      "Pour une variable prenant une infinité de valeurs, l'espérance exige la **convergence absolue** : si $P(X = k) = \\frac{1}{k(k+1)}$ pour $k \\ge 1$ (loi bien définie, par télescopage), alors $\\sum_k k\\, P(X = k) = \\sum_k \\frac{1}{k + 1} = +\\infty$ et $X$ n'a pas d'espérance.",
      "$V(X + Y) = V(X) + V(Y)$ exige $\\text{Cov}(X, Y) = 0$ (vrai si $X$ et $Y$ sont indépendantes) ; la réciproque est fausse : si $X$ est uniforme sur $\\{-1, 0, 1\\}$ et $Y = X^2$, alors $\\text{Cov}(X, Y) = E(X^3) - 0 = 0$, mais $P(X = 0, Y = 1) = 0 \\neq P(X = 0)P(Y = 1) = \\frac{2}{9}$.",
      "L'indépendance deux à deux n'entraîne pas l'indépendance mutuelle : avec deux lancers de pièce équilibrée, $A$ « pile au premier », $B$ « pile au second » et $C$ « mêmes résultats » sont deux à deux indépendants, mais $P(A \\cap B \\cap C) = \\frac{1}{4} \\neq \\frac{1}{8}$.",
      "Ne pas confondre $P(A \\mid B)$ et $P(B \\mid A)$ : dans l'exemple du test, $P(T \\mid M) = 0{,}99$ alors que $P(M \\mid T) = \\frac{1}{3}$.",
      "Deux conventions existent pour la loi géométrique : rang du premier succès (valeurs dans $\\mathbb{N}^{\\ast}$, espérance $\\frac{1}{p}$) ou nombre d'échecs avant le premier succès (valeurs dans $\\mathbb{N}$, espérance $\\frac{1-p}{p}$)."
    ],
    "flashcards": [
      {
        "q": "Énoncer la formule des probabilités totales.",
        "a": "Si $(B_n)$ est un système complet d'événements de probabilités non nulles : $P(A) = \\sum_n P(A \\mid B_n) P(B_n)$."
      },
      {
        "q": "Énoncer la formule de Bayes.",
        "a": "$P(B_k \\mid A) = \\frac{P(A \\mid B_k)P(B_k)}{\\sum_n P(A \\mid B_n)P(B_n)}$, pour $P(A) > 0$."
      },
      {
        "q": "La linéarité de l'espérance nécessite-t-elle l'indépendance ?",
        "a": "Non : $E(X + Y) = E(X) + E(Y)$ dès que $X$ et $Y$ admettent une espérance."
      },
      {
        "q": "Énoncer l'inégalité de Bienaymé-Tchebychev et dire comment on la prouve.",
        "a": "$P(|X - E(X)| \\ge \\varepsilon) \\le \\frac{V(X)}{\\varepsilon^2}$ ; on applique l'inégalité de Markov à $(X - E(X))^2$ avec $a = \\varepsilon^2$."
      },
      {
        "q": "Quelle loi discrète est sans mémoire ?",
        "a": "La loi géométrique : $P(X > n + k \\mid X > n) = P(X > k)$."
      },
      {
        "q": "Comment obtient-on la fonction génératrice d'une somme de variables indépendantes ?",
        "a": "C'est le produit des fonctions génératrices : $G_{X+Y} = G_X\\, G_Y$."
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
      "hint2": "Il y a $n$ lignes et le déterminant est linéaire par rapport à chacune : combien de fois peut-on sortir le facteur $\\lambda$ ?",
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
      "hint2": "$\\det A = (+3) \\times \\det\\begin{pmatrix} 2 & 0 \\\\ 3 & 4 \\end{pmatrix}$ (cofacteur d'indice $(3,3)$, de signe $+$). Calcule ce déterminant $2 \\times 2$.",
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
      "hint2": "$\\det A_x$ s'obtient en remplaçant la 1re colonne par le second membre : $\\det\\begin{pmatrix} 8 & 2 \\\\ 6 & 4 \\end{pmatrix} = 32 - 12 = 20$. Puis $x = \\frac{\\det A_x}{\\det A}$.",
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
      "hint2": "Pour $n = 3$, avec $x_1 = a$, $x_2 = b$, $x_3 = c$, les couples $(i, j)$ tels que $i < j$ sont $(1,2)$, $(1,3)$ et $(2,3)$.",
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
      "hint2": "$\\text{Tr}(A) = 7$ et $\\det(A) = 12 - 2 = 10$ : cherche les racines de $\\lambda^2 - 7\\lambda + 10$ (deux nombres de somme $7$ et de produit $10$).",
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
      "hint1": "$E_2(A) = \\text{Ker}(A - 2I_2)$.",
      "hint2": "$A - 2I_2 = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ : détermine son rang, puis applique le théorème du rang.",
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
      "hint2": "Deux matrices semblables ont la même trace : calcule $D^k$ (diagonale) puis sa trace.",
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
      "hint1": "Pense au théorème de Cayley-Hamilton, qui relie une matrice à son polynôme caractéristique.",
      "hint2": "Vérifie sur un exemple : pour $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\end{pmatrix}$, $\\chi_A(X) = (X - 1)(X - 2)$ ; calcule $(A - I_2)(A - 2I_2)$.",
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
      "hint1": "Pense au lemme des noyaux : si $\\mu_A = \\prod_i (X - \\lambda_i)$ avec des $\\lambda_i$ deux à deux distincts, alors $K^n = \\bigoplus_i \\text{Ker}(A - \\lambda_i I_n)$.",
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
      "hint1": "La décomposition n'est unique que sous une condition reliant $D$ et $N$ : c'est celle qui permet de développer $(D + N)^k$ par la formule du binôme de Newton.",
      "hint2": "Sans cette condition, l'unicité tombe : $\\begin{pmatrix} 1 & 1 \\\\ 0 & 2 \\end{pmatrix}$ est diagonalisable (donc $D = A$, $N = 0$) mais s'écrit aussi $\\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\end{pmatrix} + \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$.",
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
      "hint2": "Utilise $\\dim \\mathcal{L}(E, F) = \\dim E \\times \\dim F$ avec $F = K$.",
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
      "hint2": "Ici $\\dim E = 5$ et $\\dim F = 2$.",
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
      "hint2": "Si $H$ est un hyperplan, choisis $a \\notin H$ : $E = H \\oplus Ka$. Considère la forme $\\varphi$ qui à $x = h + \\lambda a$ associe $\\lambda$ : quel est son noyau ?",
      "solution": "Un sous-espace $H$ est un hyperplan si et seulement s'il existe une forme linéaire non nulle $\\varphi$ telle que $H = \\text{Ker}(\\varphi)$, deux formes ayant même noyau étant proportionnelles."
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
      "hint1": "Considère le polynôme $t \\mapsto \\|x + ty\\|^2$, positif pour tout réel $t$ : que dit le signe de son discriminant ?",
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
      "hint2": "Ici $u_1 = v_1 = (1, 0)$, $\\langle v_2, u_1 \\rangle = 1$ et $\\|u_1\\|^2 = 1$ : retranche à $v_2$ le bon multiple de $u_1$.",
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
      "hint1": "Pour $y \\in F$, écris $x - y = (x - p_F(x)) + (p_F(x) - y)$ : ces deux vecteurs sont orthogonaux, applique le théorème de Pythagore.",
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
      "hint2": "Pour une norme issue d'un produit scalaire, développe $\\|x + y\\|^2$ et $\\|x - y\\|^2$ puis additionne : les doubles produits $2\\langle x, y \\rangle$ disparaissent.",
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
      "hint2": "Si $Ax = \\lambda x$, alors ${}^t\\bar{x} A x = \\lambda \\,{}^t\\bar{x} x$ montre que $\\bar{\\lambda} = \\lambda$.",
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
        "$A = P D \\,{}^t P$ avec $D$ diagonale réelle",
        "$A = P D P^{-1}$ avec $D$ à diagonale imaginaire",
        "$A = P + D$",
        "$A^2 = I_n$"
      ],
      "correctIndex": 0,
      "answer": "$A = P D \\,{}^t P$ avec $D$ diagonale réelle",
      "hint1": "Pour une matrice orthogonale, $P^{-1} = {}^t P$.",
      "hint2": "Les vecteurs propres associés à des valeurs propres distinctes sont deux à deux orthogonaux.",
      "solution": "Le théorème spectral garantit que toute matrice symétrique réelle est orthogonalement semblable à une matrice diagonale réelle : $A = P D \\,{}^t P$ avec $P \\in \\mathcal{O}_n(\\mathbb{R})$."
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
      "hint1": "${}^t P P = I_n \\implies \\det({}^t P P) = \\det(I_n) = 1$.",
      "hint2": "$\\det({}^t P) = \\det(P)$, donc $(\\det P)^2 = 1$.",
      "solution": "Comme ${}^t P P = I_n$, on a $\\det({}^t P P) = (\\det P)^2 = 1$, d'où $\\det(P) \\in \\{1, -1\\}$."
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
      "hint2": "Pour $\\alpha > 0$, compare la série à l'intégrale $\\int_1^{+\\infty} \\frac{dt}{t^\\alpha}$ ; pour $\\alpha \\le 0$, le terme général ne tend pas vers $0$.",
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
      "hint2": "Étudie la limite de $\\frac{2}{n+1}$ quand $n \\to +\\infty$, puis compare-la à $1$ pour conclure avec la règle de d'Alembert.",
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
      "title": "Somme de Riemann et calcul de limite de suite",
      "skill": "Calculer la limite d'une suite à l'aide d'une somme de Riemann",
      "statement": "Quelle est la limite quand $n \\to +\\infty$ de la suite $S_n = \\frac{1}{n} \\sum_{k=1}^n \\sqrt{\\frac{k}{n}}$ ?",
      "options": [
        "$\\frac{2}{3}$",
        "$\\frac{1}{2}$",
        "$1$",
        "$\\frac{3}{4}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{2}{3}$",
      "hint1": "$S_n$ est une somme de Riemann pour la fonction $f(x) = \\sqrt{x}$ sur $[0, 1]$.",
      "hint2": "$\\lim S_n = \\int_0^1 \\sqrt{x} dx = [\\frac{2}{3} x^{3/2}]_0^1$.",
      "solution": "$S_n$ est la somme de Riemann associée à la fonction continue $f(x) = \\sqrt{x}$ sur $[0, 1]$ avec un pas de $1/n$. Par le théorème des sommes de Riemann, $\\lim_{n \\to +\\infty} S_n = \\int_0^1 \\sqrt{x} \\, dx = \\left[\\frac{2}{3} x^{3/2}\\right]_0^1 = \\frac{2}{3}$."
    },
    {
      "id": "L2-RIE-2",
      "tier": 2,
      "type": "mcq",
      "title": "Sommes de Darboux et critère d'intégrabilité",
      "skill": "Caractériser l'intégrabilité de Riemann par les sommes de Darboux",
      "statement": "Soit $f : [a, b] \\to \\mathbb{R}$ une fonction bornée. $f$ est intégrable au sens de Riemann sur $[a, b]$ si et seulement si :",
      "options": [
        "$\\forall \\varepsilon > 0$, il existe une subdivision $\\sigma$ telle que $S(f, \\sigma) - s(f, \\sigma) < \\varepsilon$",
        "$f$ est strictement croissante sur $[a, b]$",
        "$f$ est de classe $\\mathcal{C}^1$",
        "L'ensemble des points de discontinuité de $f$ est vide"
      ],
      "correctIndex": 0,
      "answer": "$\\forall \\varepsilon > 0$, il existe une subdivision $\\sigma$ telle que $S(f, \\sigma) - s(f, \\sigma) < \\varepsilon$",
      "hint1": "$s(f, \\sigma)$ est la somme de Darboux inférieure et $S(f, \\sigma)$ est la somme supérieure.",
      "hint2": "Le critère de Darboux équivaut à l'égalité de l'intégrale inférieure et de l'intégrale supérieure.",
      "solution": "D'après le critère d'intégrabilité de Darboux-Riemann, une fonction bornée est intégrable ssi l'écart entre sa somme supérieure et sa somme inférieure peut être rendu arbitrairement petit : $\\forall \\varepsilon > 0, \\exists \\sigma, S(f, \\sigma) - s(f, \\sigma) < \\varepsilon$."
    },
    {
      "id": "L2-RIE-3",
      "tier": 3,
      "type": "mcq",
      "title": "Intégration des fonctions réglées",
      "skill": "Propriétés des fonctions réglées et continues par morceaux",
      "statement": "Dans l'espace vectoriel $\\mathcal{B}([a, b], \\mathbb{R})$ muni de la norme uniforme $\\|\\cdot\\|_\\infty$, quelle est la caractérisation fondamentale des fonctions réglées ?",
      "options": [
        "Elles forment l'adhérence de l'ensemble des fonctions en escalier",
        "Elles sont toutes dérivables sauf en un nombre fini de points",
        "Elles sont toutes lipschitziennes",
        "Leur intégrale de Riemann est toujours nulle"
      ],
      "correctIndex": 0,
      "answer": "Elles forment l'adhérence de l'ensemble des fonctions en escalier",
      "hint1": "Toute fonction réglée est limite uniforme de fonctions en escalier.",
      "hint2": "Elle admet en tout point une limite à gauche et une limite à droite finies.",
      "solution": "Une fonction est réglée sur un segment $[a, b]$ ssi elle est limite uniforme d'une suite de fonctions en escalier. Toute fonction continue par morceaux est réglée, et toute fonction réglée est intégrable au sens de Riemann."
    },
    {
      "id": "L2-RIE-4",
      "tier": 4,
      "type": "mcq",
      "title": "Première formule de la moyenne",
      "skill": "Appliquer la formule de la moyenne pour les intégrales",
      "statement": "Soient $f, g : [a, b] \\to \\mathbb{R}$ continues avec $g \\ge 0$ ne s'annulant pas identiquement. Que garantit la première formule de la moyenne ?",
      "options": [
        "$\\exists c \\in [a, b], \\quad \\int_a^b f(t) g(t) \\, dt = f(c) \\int_a^b g(t) \\, dt$",
        "$\\int_a^b f(t) g(t) \\, dt = \\left(\\int_a^b f(t) dt\\right) \\left(\\int_a^b g(t) dt\\right)$",
        "$\\exists c \\in [a, b], \\quad f(c) = g(c)$",
        "$\\int_a^b f(t) g(t) \\, dt \\le \\frac{f(a) + f(b)}{2}$"
      ],
      "correctIndex": 0,
      "answer": "$\\exists c \\in [a, b], \\quad \\int_a^b f(t) g(t) \\, dt = f(c) \\int_a^b g(t) \\, dt$",
      "hint1": "Comme $m \\le f(t) \\le M$, en multipliant par $g(t) \\ge 0$, on encadre l'intégrale.",
      "hint2": "Par le TVI, $f$ atteint la valeur moyenne $\\frac{\\int_a^b fg}{\\int_a^b g}$.",
      "solution": "Comme $g \\ge 0$, on a $m \\int_a^b g \\le \\int_a^b fg \\le M \\int_a^b g$ où $m = \\min f$ et $M = \\max f$. Par le théorème des valeurs intermédiaires appliqué à la fonction continue $f$, il existe $c \\in [a, b]$ tel que $\\int_a^b f(t)g(t)dt = f(c)\\int_a^b g(t)dt$."
    }
  ],
  "L2-ING": [
    {
      "id": "L2-ING-1",
      "tier": 1,
      "type": "mcq",
      "title": "Critère de convergence des intégrales de Riemann en +l'infini",
      "skill": "Maîtriser les intégrales de référence de Riemann en l'infini",
      "statement": "Pour quelle condition sur le paramètre réel $\\alpha$ l'intégrale impropre $\\int_1^{+\\infty} \\frac{dt}{t^\\alpha}$ converge-t-elle ?",
      "options": [
        "$\\alpha > 1$",
        "$\\alpha \\ge 1$",
        "$\\alpha < 1$",
        "$\\alpha > 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\alpha > 1$",
      "hint1": "Calculer la primitive pour $\\alpha \\ne 1$ : $[\\frac{t^{1-\\alpha}}{1-\\alpha}]_1^X$.",
      "hint2": "Pour que $X^{1-\\alpha}$ admette une limite finie quand $X \\to +\\infty$, il faut $1 - \\alpha < 0$.",
      "solution": "Pour $\\alpha \\ne 1$, $\\int_1^X t^{-\\alpha} dt = \\frac{X^{1-\\alpha} - 1}{1 - \\alpha}$. Cette quantité admet une limite finie quand $X \\to +\\infty$ si et seulement si $1 - \\alpha < 0 \\iff \\alpha > 1$. Pour $\\alpha = 1$, l'intégrale vaut $\\ln(X) \\to +\\infty$ (divergence)."
    },
    {
      "id": "L2-ING-2",
      "tier": 2,
      "type": "mcq",
      "title": "Convergence par équivalence au voisinage de +l'infini",
      "skill": "Appliquer la règle des équivalents pour fonctions positives",
      "statement": "Quelle est la nature de l'intégrale impropre $I = \\int_1^{+\\infty} \\frac{1}{\\sqrt{t^3 + 2t + 5}} \\, dt$ ?",
      "options": [
        "Elle converge car l'intégrande est équivalent à $\\frac{1}{t^{3/2}}$ avec $\\frac{3}{2} > 1$",
        "Elle diverge car l'intégrande est équivalent à $\\frac{1}{t^3}$",
        "Elle diverge car $\\sqrt{t^3} \\to +\\infty$",
        "Elle est semi-convergente mais pas absolument convergente"
      ],
      "correctIndex": 0,
      "answer": "Elle converge car l'intégrande est équivalent à $\\frac{1}{t^{3/2}}$ avec $\\frac{3}{2} > 1$",
      "hint1": "En $+\\infty$, $\\sqrt{t^3 + 2t + 5} \\sim \\sqrt{t^3} = t^{3/2}$.",
      "hint2": "Compare avec l'intégrale de Riemann de référence $\\int_1^{+\\infty} \\frac{dt}{t^\\alpha}$ : pour quelles valeurs de $\\alpha$ converge-t-elle ?",
      "solution": "La fonction $t \\mapsto \\frac{1}{\\sqrt{t^3 + 2t + 5}}$ est continue et strictement positive sur $[1, +\\infty[$. Au voisinage de $+\\infty$, $\\frac{1}{\\sqrt{t^3 + 2t + 5}} \\sim \\frac{1}{t^{3/2}}$. Comme l'intégrale de Riemann de référence $\\int_1^{+\\infty} \\frac{dt}{t^{3/2}}$ converge ($\\\\alpha = 3/2 > 1$), l'intégrale $I$ converge."
    },
    {
      "id": "L2-ING-3",
      "tier": 3,
      "type": "mcq",
      "title": "Intégrales de Bertrand",
      "skill": "Maîtriser les critères d'intégrabilité de Bertrand",
      "statement": "À quelle condition sur le couple $(\\alpha, \\beta) \\in \\mathbb{R}^2$ l'intégrale de Bertrand $\\int_2^{+\\infty} \\frac{dt}{t^\\alpha (\\ln t)^\\beta}$ converge-t-elle ?",
      "options": [
        "$\\alpha > 1$, ou ($\\alpha = 1$ et $\\beta > 1$)",
        "$\\alpha > 1$ et $\\beta > 1$",
        "$\\alpha + \\beta > 1$",
        "$\\alpha \\ge 1$ pour tout $\\beta$"
      ],
      "correctIndex": 0,
      "answer": "$\\alpha > 1$, ou ($\\alpha = 1$ et $\\beta > 1$)",
      "hint1": "Si $\\alpha > 1$, la puissance $t^\\alpha$ suffit à faire converger l'intégrale.",
      "hint2": "Si $\\alpha = 1$, le changement de variable $u = \\ln t$ ramène à $\\int \\frac{du}{u^\\beta}$.",
      "solution": "Pour $\\alpha > 1$, $t^\\alpha (\\ln t)^\\beta$ croît plus vite que $t^{\\frac{\\alpha + 1}{2}}$ donc l'intégrale converge pour tout $\\beta$. Pour $\\alpha = 1$, par le changement de variable $u = \\ln t$, $\\int_2^X \\frac{dt}{t(\\ln t)^\\beta} = \\int_{\\ln 2}^{\\ln X} \\frac{du}{u^\\beta}$ converge ssi $\\beta > 1$."
    },
    {
      "id": "L2-ING-4",
      "tier": 4,
      "type": "mcq",
      "title": "Intégrale semi-convergente de Dirichlet",
      "skill": "Démontrer la convergence non absolue par intégration par parties",
      "statement": "Que peut-on affirmer au sujet de l'intégrale impropre $\\int_0^{+\\infty} \\frac{\\sin t}{t} \\, dt$ ?",
      "options": [
        "Elle est semi-convergente (convergente mais non absolument convergente)",
        "Elle est absolument convergente",
        "Elle diverge grossièrement vers $+\\infty$",
        "Elle n'est pas prolongeable par continuité en $0$"
      ],
      "correctIndex": 0,
      "answer": "Elle est semi-convergente (convergente mais non absolument convergente)",
      "hint1": "En 0, $\\lim_{t \\to 0} \\frac{\\sin t}{t} = 1$, pas de problème d'intégrabilité en 0.",
      "hint2": "En $+\\infty$, intégrer par parties : $\\int_1^X \\frac{\\sin t}{t} dt = [-\\frac{\\cos t}{t}]_1^X - \\int_1^X \\frac{\\cos t}{t^2} dt$.",
      "solution": "En $0$, la fonction se prolonge par continuité par $1$. En $+\\infty$, une intégration par parties montre que $\\int_1^X \\frac{\\sin t}{t} dt = -\\frac{\\cos X}{X} + \\cos(1) - \\int_1^X \\frac{\\cos t}{t^2} dt$, qui converge car $\\frac{|\\cos t|}{t^2} \\le \\frac{1}{t^2}$ intégrable. Cependant, $\\int_0^{+\\infty} \\frac{|\\sin t|}{t} dt = +\\infty$, l'intégrale est donc semi-convergente."
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
      "title": "Oscillateur harmonique libre",
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
      "hint2": "Sépare la série $\\sum_k \\frac{t^k A^k}{k!}$ en termes pairs ($A^{2p} = (-1)^p I_2$) et impairs ($A^{2p+1} = (-1)^p A$) : reconnais les développements de $\\cos t$ et $\\sin t$.",
      "solution": "Comme $A^2 = -I_2$, on a $\\exp(tA) = \\sum_{k=0}^\\infty \\frac{t^k A^k}{k!} = \\cos(t) I_2 + \\sin(t) A = \\begin{pmatrix} \\cos t & \\sin t \\\\ -\\sin t & \\cos t \\end{pmatrix}$."
    }
  ],
  "L2-PAR": [
    {
      "id": "L2-PAR-1",
      "tier": 1,
      "type": "mcq",
      "title": "Continuité sous le signe intégral et domination",
      "skill": "Vérifier l'hypothèse de domination intégrable pour la continuité",
      "statement": "Soit $F(x) = \\int_0^{+\\infty} \\frac{\\sin(xt)}{1 + t^2} \\, dt$. Pour prouver la continuité de $F$ sur $\\mathbb{R}$, quelle hypothèse de domination intégrable utilise-t-on ?",
      "options": [
        "$\\forall x \\in \\mathbb{R}, \\forall t \\ge 0, \\quad \\left|\\frac{\\sin(xt)}{1 + t^2}\\right| \\le \\frac{1}{1 + t^2}$ avec $\\int_0^{+\\infty} \\frac{dt}{1 + t^2} = \\frac{\\pi}{2} < +\\infty$",
        "$\\forall x \\in \\mathbb{R}, \\quad \\lim_{t \\to +\\infty} \\frac{\\sin(xt)}{1 + t^2} = 0$",
        "$\\forall t \\ge 0, \\quad x \\mapsto \\sin(xt)$ est bornée par $x$",
        "Il n'est pas nécessaire d'avoir une fonction dominante indépendante de $x$"
      ],
      "correctIndex": 0,
      "answer": "$\\forall x \\in \\mathbb{R}, \\forall t \\ge 0, \\quad \\left|\\frac{\\sin(xt)}{1 + t^2}\\right| \\le \\frac{1}{1 + t^2}$ avec $\\int_0^{+\\infty} \\frac{dt}{1 + t^2} = \\frac{\\pi}{2} < +\\infty$",
      "hint1": "Pour tout $u \\in \\mathbb{R}$, $|\\sin u| \\le 1$ : majore l'intégrande par une fonction de $t$ seul.",
      "hint2": "La fonction $\\varphi(t) = \\frac{1}{1+t^2}$ est intégrable sur $[0, +\\infty[$ et ne dépend pas de $x$.",
      "solution": "Comme $|\sin(xt)| \\le 1$, l'intégrande est dominé par $\\varphi(t) = \\frac{1}{1+t^2}$ qui est indépendante de $x$ et intégrable sur $[0, +\\infty[$. D'après le théorème de continuité sous le signe intégral, $F$ est continue sur $\\mathbb{R}$."
    },
    {
      "id": "L2-PAR-2",
      "tier": 2,
      "type": "mcq",
      "title": "Règle de Leibniz de dérivation sous le signe intégral",
      "skill": "Dériver une intégrale à paramètre",
      "statement": "Pour $F(x) = \\int_0^1 e^{-x t^2} \\, dt$ ($x \\in \\mathbb{R}$), quelle est l'expression exacte de la dérivée $F'(x)$ ?",
      "options": [
        "$-\\int_0^1 t^2 e^{-x t^2} \\, dt$",
        "$\\int_0^1 e^{-x t^2} \\, dt$",
        "$-x \\int_0^1 t e^{-x t^2} \\, dt$",
        "$e^{-x} - 1$"
      ],
      "correctIndex": 0,
      "answer": "$-\\int_0^1 t^2 e^{-x t^2} \\, dt$",
      "hint1": "Dérive l'intégrande par rapport à $x$ : $\\frac{\\partial}{\\partial x}(e^{-x t^2}) = -t^2 e^{-x t^2}$.",
      "hint2": "L'intervalle d'intégration $[0, 1]$ est compact, la domination est directe sur tout segment.",
      "solution": "Par le théorème de dérivation sous le signe intégral (règle de Leibniz) : $F'(x) = \\int_0^1 \\frac{\\partial}{\\partial x}(e^{-xt^2}) \\, dt = -\\int_0^1 t^2 e^{-xt^2} \\, dt$."
    },
    {
      "id": "L2-PAR-3",
      "tier": 3,
      "type": "mcq",
      "title": "Propriétés de la fonction Gamma d'Euler",
      "skill": "Maîtriser la fonction Gamma $\\Gamma(x) = \\int_0^\\infty t^{x-1} e^{-t} dt$",
      "statement": "Que vaut $\\Gamma(5)$ pour la fonction Gamma d'Euler $\\Gamma(x) = \\int_0^{+\\infty} t^{x-1} e^{-t} \\, dt$ ?",
      "options": [
        "$24$",
        "$120$",
        "$5$",
        "$\\frac{\\sqrt{\\pi}}{2}$"
      ],
      "correctIndex": 0,
      "answer": "$24$",
      "hint1": "Pour tout entier naturel $n$, $\\Gamma(n+1) = n!$.",
      "hint2": "Ici $x = 5 = 4 + 1$, donc $\\Gamma(5) = 4!$.",
      "solution": "Par intégration par parties, $\\Gamma(x+1) = x \\Gamma(x)$ pour tout $x > 0$. Pour tout entier $n \\ge 1$, $\\Gamma(n) = (n-1)!$. En particulier, $\\Gamma(5) = 4! = 4 \\times 3 \\times 2 \\times 1 = 24$."
    },
    {
      "id": "L2-PAR-4",
      "tier": 4,
      "type": "mcq",
      "title": "Calcul d'intégrale par dérivation sous le signe intégral",
      "skill": "Résoudre une intégrale à paramètre en dérivant par rapport au paramètre",
      "statement": "Soit $F(x) = \\int_0^{+\\infty} \\frac{e^{-t} - e^{-xt}}{t} \\, dt$ pour $x > 0$. Sachant que $F(1) = 0$ et $F'(x) = \\frac{1}{x}$, que vaut $F(x)$ ?",
      "options": [
        "$\\ln(x)$",
        "$\\frac{1}{x^2}$",
        "$e^{-x}$",
        "$\\arctan(x)$"
      ],
      "correctIndex": 0,
      "answer": "$\\ln(x)$",
      "hint1": "Sur $]0, +\\infty[$, $F$ est une primitive de $x \\mapsto \\frac{1}{x}$ : laquelle, à une constante additive près ?",
      "hint2": "Comme $F(1) = \\int_0^{+\\infty} 0 \\, dt = 0$, la constante $C$ vaut $0$.",
      "solution": "En dérivant sous l'intégrale, $F'(x) = \\int_0^{+\\infty} e^{-xt} dt = \\left[-\\frac{e^{-xt}}{x}\\right]_0^{+\\infty} = \\frac{1}{x}$. En intégrant, $F(x) = \\ln(x) + C$. Comme $F(1) = 0$, on en déduit $C = 0$, soit $F(x) = \\ln(x)$ (intégrale de Frullani)."
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
      "hint2": "Calcule séparément $\\int_0^1 x \\, dx$ et $\\int_0^2 y^2 \\, dy$ (primitives $\\frac{x^2}{2}$ et $\\frac{y^3}{3}$), puis fais le produit.",
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
      "hint2": "Calcule le déterminant de la matrice jacobienne $\\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix}$.",
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
      "hint2": "En polaires, $I^2 = \\int_0^{2\\pi} d\\theta \\int_0^{+\\infty} r e^{-r^2} dr$ ; une primitive de $r e^{-r^2}$ est $-\\frac{1}{2} e^{-r^2}$. N'oublie pas que $I > 0$.",
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
      "hint1": "Calcule le jacobien de $(r, \\theta, \\varphi) \\mapsto (r\\sin\\theta\\cos\\varphi, r\\sin\\theta\\sin\\varphi, r\\cos\\theta)$, ou raisonne sur le petit pavé de côtés $dr$, $r\\,d\\theta$ et $r\\sin\\theta\\,d\\varphi$.",
      "hint2": "Vérification : en intégrant $dV$ sur la boule de rayon $R$, tu dois retrouver $\\frac{4}{3}\\pi R^3$.",
      "solution": "Le jacobien de la transformation sphérique $(x=r\\sin\\theta\\cos\\varphi, y=r\\sin\\theta\\sin\\varphi, z=r\\cos\\theta)$ est $r^2 \\sin\\theta$, d'où $dV = r^2 \\sin\\theta \\, dr d\\theta d\\varphi$."
    }
  ],
  "L2-CRB": [
    {
      "id": "L2-CRB-1",
      "tier": 1,
      "type": "mcq",
      "title": "Vecteur vitesse et point régulier",
      "skill": "Caractériser la régularité d'un point sur un arc paramétré",
      "statement": "Soit une courbe paramétrée $\\vec{r}(t) = (x(t), y(t))$ de classe $\\mathcal{C}^1$. À quelle condition le point $M(t_0)$ est-il dit régulier ?",
      "options": [
        "$\\vec{r}'(t_0) \\neq \\vec{0}$",
        "$\\vec{r}''(t_0) = \\vec{0}$",
        "$\\vec{r}(t_0) = \\vec{0}$",
        "$\\|\\vec{r}'(t_0)\\| = 1$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{r}'(t_0) \\neq \\vec{0}$",
      "hint1": "Le vecteur dérivé ne doit pas s'annuler.",
      "hint2": "Si le vecteur dérivé est non nul, la droite tangente est bien définie et portée par ce vecteur.",
      "solution": "Un point $M(t_0)$ d'un arc paramétré est régulier si le vecteur vitesse $\\vec{r}'(t_0) = (x'(t_0), y'(t_0)) \\neq \\vec{0}$. La tangente à la courbe en ce point est alors dirigée par $\\vec{r}'(t_0)$."
    },
    {
      "id": "L2-CRB-2",
      "tier": 2,
      "type": "mcq",
      "title": "Repère de Frenet et première formule de dérivation",
      "skill": "Connaître les formules de Frenet dans le plan",
      "statement": "Pour une courbe plane orientée paramétrée par son abscisse curviligne $s$, munie du repère mobile orthonormé direct $(\\vec{T}(s), \\vec{N}(s))$, quelle est l'expression de $\\frac{d\\vec{T}}{ds}$ en fonction de la courbure $\\kappa(s)$ ?",
      "options": [
        "$\\frac{d\\vec{T}}{ds} = \\kappa(s) \\vec{N}(s)$",
        "$\\frac{d\\vec{T}}{ds} = -\\kappa(s) \\vec{N}(s)$",
        "$\\frac{d\\vec{T}}{ds} = \\kappa(s) \\vec{T}(s)$",
        "$\\frac{d\\vec{T}}{ds} = \\vec{0}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{d\\vec{T}}{ds} = \\kappa(s) \\vec{N}(s)$",
      "hint1": "Comme $\\|\\vec{T}\\| = 1$, sa dérivée est orthogonale à $\\vec{T}$, donc colinéaire à $\\vec{N}$.",
      "hint2": "La première formule de Frenet relie la variation de la tangente au vecteur normal unitaire.",
      "solution": "Les formules de Frenet pour une courbe plane sont $\\frac{d\\vec{T}}{ds} = \\kappa(s) \\vec{N}(s)$ et $\\frac{d\\vec{N}}{ds} = -\\kappa(s) \\vec{T}(s)$, où $\\kappa(s)$ est la courbure algébrique."
    },
    {
      "id": "L2-CRB-3",
      "tier": 3,
      "type": "mcq",
      "title": "Calcul de la courbure d'un cercle",
      "skill": "Appliquer la formule de la courbure $\\kappa = \\frac{|x'y'' - x''y'|}{(x'^2 + y'^2)^{3/2}}$",
      "statement": "Quelle est la courbure $\\kappa(t)$ en tout point d'un cercle de rayon $R > 0$ paramétré par $x(t) = R\\cos t$, $y(t) = R\\sin t$ ?",
      "options": [
        "$\\kappa = \\frac{1}{R}$",
        "$\\kappa = R$",
        "$\\kappa = \\frac{1}{R^2}$",
        "$\\kappa = 2\\pi R$"
      ],
      "correctIndex": 0,
      "answer": "$\\kappa = \\frac{1}{R}$",
      "hint1": "Calcule $x', y'$ puis $x'', y''$.",
      "hint2": "$x'^2 + y'^2 = R^2$, et la vitesse est $\|\\vec{r}'(t)\| = R$.",
      "solution": "On a $x'(t) = -R\\sin t, y'(t) = R\\cos t \\implies (x'^2 + y'^2)^{3/2} = R^3$. De plus, $x''(t) = -R\\cos t, y''(t) = -R\\sin t$, donc $x'y'' - x''y' = R^2\\sin^2 t + R^2\\cos^2 t = R^2$. Par conséquent, $\\kappa = \\frac{R^2}{R^3} = \\frac{1}{R}$. Le rayon de courbure associé est $R_c = \\frac{1}{\\kappa} = R$."
    },
    {
      "id": "L2-CRB-4",
      "tier": 4,
      "type": "mcq",
      "title": "Classification locale d'un point stationnaire",
      "skill": "Déterminer la nature d'un point singulier via les ordres des premières dérivées non nulles et indépendantes",
      "statement": "Soit la courbe paramétrée par $x(t) = t^2$ et $y(t) = t^3$. En $t=0$, le point est singulier car $\\vec{r}'(0) = (0,0)$. Quelle est sa nature géométrique ?",
      "options": [
        "Point de rebroussement de première espèce",
        "Point ordinaire",
        "Point d'inflexion",
        "Point de rebroussement de deuxième espèce"
      ],
      "correctIndex": 0,
      "answer": "Point de rebroussement de première espèce",
      "hint1": "Calcule les dérivées successives $\\vec{r}''(0)$ et $\\vec{r}'''(0)$.",
      "hint2": "Trouve les ordres $p$ (premier vecteur non nul) et $q$ (premier vecteur indépendant de $\\vec{r}^{(p)}$).",
      "solution": "On a $\\vec{r}'(t) = (2t, 3t^2) \\implies \\vec{r}'(0) = (0,0)$. Ensuite, $\\vec{r}''(t) = (2, 6t) \\implies \\vec{r}''(0) = (2, 0) \\neq \\vec{0}$, donc $p = 2$ (ordre pair). Enfin, $\\vec{r}^{(3)}(t) = (0, 6) \\implies \\vec{r}^{(3)}(0) = (0, 6)$, qui est linéairement indépendant de $\\vec{r}''(0)$, donc $q = 3$ (ordre impair). Le couple $(p=2 \\text{ pair}, q=3 \\text{ impair})$ définit un point de rebroussement de première espèce."
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
      "hint2": "$\\mathbb{E}[X] = \\sum_{k \\ge 1} k p (1-p)^{k-1}$ : utilise $\\sum_{k \\ge 1} k q^{k-1} = \\frac{1}{(1-q)^2}$ pour $|q| < 1$.",
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
      "hint2": "Calcule $0.5 \\times 0.4$ et $0.1 \\times 0.6$, puis additionne.",
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
      "hint1": "Ici $p = \\frac{\\lambda}{n} \\to 0$ : on compte des succès rares parmi un très grand nombre d'épreuves indépendantes.",
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
      "hint2": "Numérateur : $0.99 \\times 0.001 = 0.00099$. Dénominateur : $\\mathbb{P}(+) = 0.00099 + 0.01 \\times 0.999$ (faux positifs). Fais le quotient.",
      "solution": "Par la formule de Bayes : $\\mathbb{P}(M \\mid +) = \\frac{0.99 \\times 0.001}{0.99 \\times 0.001 + 0.01 \\times 0.999} = \\frac{0.00099}{0.00099 + 0.00999} = \\frac{0.00099}{0.01098} \\approx 0.0901$, soit environ $9\\%$."
    }
  ],
  "L2-CAL": [
    {
      "id": "L2-CAL-1",
      "tier": 1,
      "type": "mcq",
      "title": "Calcul de gradient et dérivées partielles",
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
      "hint2": "Remplace $x = 1$ et $y = 2$ dans chacune des deux dérivées partielles.",
      "solution": "$\\frac{\\partial f}{\\partial x}(1, 2) = 2(1)(2) + 3(2^2) = 4 + 12 = 16$. $\\frac{\\partial f}{\\partial y}(1, 2) = 1^2 + 6(1)(2) = 13$. Donc $\\nabla f(1, 2) = (16, 13)$."
    },
    {
      "id": "L2-CAL-2",
      "tier": 2,
      "type": "mcq",
      "title": "Règle de la chaîne pour une fonction composée",
      "skill": "Dériver une fonction composée multivariable le long d'un arc",
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
      "id": "L2-CAL-3",
      "tier": 3,
      "type": "mcq",
      "title": "Matrice hessienne et nature d'un point critique",
      "skill": "Classifier un point critique à l'aide des valeurs propres de la hessienne",
      "statement": "Pour $f(x, y) = x^2 - y^2$, le point $(0, 0)$ est un point critique. Quelle est sa nature géométrique ?",
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
      "solution": "La hessienne en $(0,0)$ admet pour valeurs propres $2$ et $-2$. Comme elles sont de signes strictement opposés, $(0,0)$ est un point col (point selle)."
    },
    {
      "id": "L2-CAL-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème de Schwarz et symétrie hessienne",
      "skill": "Appliquer le théorème de Schwarz aux dérivées partielles croisées",
      "statement": "Que garantit le théorème de Schwarz pour une fonction $f : U \\subset \\mathbb{R}^2 \\to \\mathbb{R}$ de classe $\\mathcal{C}^2$ ?",
      "options": [
        "$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$",
        "$\\Delta f = 0$",
        "$\\frac{\\partial f}{\\partial x} = \\frac{\\partial f}{\\partial y}$",
        "La matrice hessienne est toujours de trace nulle"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$",
      "hint1": "L'ordre des dérivations partielles peut être interverti si la fonction est $\\mathcal{C}^2$.",
      "hint2": "La matrice hessienne d'une fonction $\\mathcal{C}^2$ est symétrique.",
      "solution": "Le théorème de Schwarz affirme que pour toute fonction de classe $\\mathcal{C}^2$, les dérivées partielles croisées sont égales : $\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$."
    }
  ]
};

window.MATHS_WORKSHEETS_L2 = {
  "L2-RED1": [
    {
      "id": "L2-RED1-fiche_td",
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
  ],
  "L2-DET": [
    {
      "id": "L2-DET-fiche_td",
      "title": "Feuille de TD L2 : Déterminants, Comatrice et Systèmes Linéaires",
      "filename": "TD_L2_Determinants.md",
      "statement": `## Travaux Dirigés L2 : Déterminants et Systèmes Linéaires

### Exercice 1 : Calcul de déterminants par opérations élémentaires (10 points)
Soit la matrice $M_a \\in \\mathcal{M}_3(\\mathbb{R})$ dépendant d'un paramètre $a \\in \\mathbb{R}$ :
$$M_a = \\begin{pmatrix} 1 & a & a^2 \\\\ 1 & 2 & 4 \\\\ 1 & 3 & 9 \\end{pmatrix}$$
1. Reconnaître le déterminant de Vandermonde. Exprimer $\\det(M_a)$ sous forme entièrement factorisée en effectuant des opérations élémentaires sur les lignes et colonnes.
2. Pour quelles valeurs du paramètre $a$ la matrice $M_a$ est-elle inversible ?
3. Calculer la matrice des cofacteurs $\\text{Com}(M_0)$ pour $a = 0$.
4. En déduire la matrice inverse $M_0^{-1}$ à l'aide de la formule de la comatrice.

### Exercice 2 : Règle de Cramer et résolution de système (10 points)
Considérons le système linéaire suivant à inconnues réelles $(x, y, z)$ :
$$\\begin{cases} x + y + z = 1 \\\\ 2x + 3y + z = 2 \\\\ x - y + 2z = 3 \\end{cases}$$
1. Déterminer la matrice du système $A$ et calculer son déterminant $\\det(A)$.
2. Vérifier que le système est de Cramer.
3. Résoudre le système par les formules de Cramer en explicitant $\\det(A_x)$, $\\det(A_y)$ et $\\det(A_z)$.`,
      "solution": `### Correction Exercice 1
1. Opérations élémentaires sur les lignes : $L_2 \\leftarrow L_2 - L_1$ et $L_3 \\leftarrow L_3 - L_1$ :
$$\\det(M_a) = \\begin{vmatrix} 1 & a & a^2 \\\\ 0 & 2-a & 4-a^2 \\\\ 0 & 3-a & 9-a^2 \\end{vmatrix} = \\begin{vmatrix} 2-a & (2-a)(2+a) \\\\ 3-a & (3-a)(3+a) \\end{vmatrix}$$
En factorisant $(2-a)$ sur la première ligne et $(3-a)$ sur la deuxième :
$$\\det(M_a) = (2-a)(3-a) \\begin{vmatrix} 1 & 2+a \\\\ 1 & 3+a \\end{vmatrix} = (2-a)(3-a)((3+a) - (2+a)) = (2-a)(3-a) = (a-2)(a-3)$$
2. La matrice $M_a$ est inversible si et seulement si son déterminant est non nul, soit $a \\in \\mathbb{R} \\setminus \\{2, 3\\}$.
3. Pour $a=0$, $\\det(M_0) = 6$.
La matrice est $M_0 = \\begin{pmatrix} 1 & 0 & 0 \\\\ 1 & 2 & 4 \\\\ 1 & 3 & 9 \\end{pmatrix}$.
Calcul des cofacteurs $C_{i,j} = (-1)^{i+j} M_{i,j}$ :
$C_{1,1} = +(18 - 12) = 6$, $C_{1,2} = -(9 - 4) = -5$, $C_{1,3} = +(3 - 2) = 1$.
$C_{2,1} = -(0) = 0$, $C_{2,2} = +(9) = 9$, $C_{2,3} = -(3) = -3$.
$C_{3,1} = +(0) = 0$, $C_{3,2} = -(4) = -4$, $C_{3,3} = +(2) = 2$.
D'où $\\text{Com}(M_0) = \\begin{pmatrix} 6 & -5 & 1 \\\\ 0 & 9 & -3 \\\\ 0 & -4 & 2 \\end{pmatrix}$.
4. D'après la formule de la comatrice :
$$M_0^{-1} = \\frac{1}{\\det(M_0)} {}^t\\text{Com}(M_0) = \\frac{1}{6} \\begin{pmatrix} 6 & 0 & 0 \\\\ -5 & 9 & -4 \\\\ 1 & -3 & 2 \\end{pmatrix}$$

### Correction Exercice 2
1. Matrice associée : $A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 1 \\\\ 1 & -1 & 2 \\end{pmatrix}$.
Développement suivant la première ligne :
$$\\det(A) = 1(6 - (-1)) - 1(4 - 1) + 1(-2 - 3) = 7 - 3 - 5 = -1$$
2. Comme $\\det(A) = -1 \\neq 0$, le système est de Cramer et admet une unique solution.
3. Formules de Cramer :
$$\\det(A_x) = \\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 1 \\\\ 3 & -1 & 2 \\end{vmatrix} = 1(6+1) - 1(4-3) + 1(-2-9) = 7 - 1 - 11 = -5 \\implies x = \\frac{-5}{-1} = 5$$
$$\\det(A_y) = \\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 2 & 1 \\\\ 1 & 3 & 2 \\end{vmatrix} = 1(4-3) - 1(4-1) + 1(6-2) = 1 - 3 + 4 = 2 \\implies y = \\frac{2}{-1} = -2$$
$$\\det(A_z) = \\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 2 \\\\ 1 & -1 & 3 \\end{vmatrix} = 1(9+2) - 1(6-2) + 1(-2-3) = 11 - 4 - 5 = 2 \\implies z = \\frac{2}{-1} = -2$$
La solution unique est $(x, y, z) = (5, -2, -2)$.`
    }
  ],
  "L2-SER": [
    {
      "id": "L2-SER-fiche_td",
      "title": "Feuille de TD L2 : Séries numériques réelles et complexes",
      "filename": "TD_L2_Series_Numeriques.md",
      "statement": `## Travaux Dirigés L2 : Séries Numériques

### Exercice 1 : Séries à termes positifs et critères de convergence (10 points)
Étudier la nature (convergence ou divergence) des séries numériques de terme général :
1. $u_n = \\frac{n^2 + 1}{2^n}$ pour $n \\ge 1$.
2. $v_n = \\left(\\frac{2n+1}{3n-1}\\right)^n$ pour $n \\ge 1$.
3. $w_n = \\frac{1}{n \\ln(n)}$ pour $n \\ge 2$.
4. $z_n = \\ln\\left(1 + \\frac{1}{n}\\right) - \\frac{1}{n}$ pour $n \\ge 1$.

### Exercice 2 : Séries alternées et pièges d'équivalents (10 points)
Soit la série de terme général $a_n = \\frac{(-1)^n}{\\sqrt{n} + (-1)^n}$ pour $n \\ge 2$.
1. Rappeler le critère spécial des séries alternées (CSSA).
2. Vérifier que $b_n = \\frac{(-1)^n}{\\sqrt{n}}$ satisfait le CSSA et préciser si $\\sum b_n$ est absolument convergente.
3. Établir le développement asymptotique : $a_n = \\frac{(-1)^n}{\\sqrt{n}} - \\frac{1}{n} + O\\left(\\frac{1}{n^{3/2}}\\right)$.
4. En déduire la nature de la série $\\sum a_n$. Quel enseignement fondamental en tire-t-on concernant les équivalents ?`,
      "solution": `### Correction Exercice 1
1. Pour $u_n = \\frac{n^2+1}{2^n} > 0$, règle de d'Alembert :
$$\\frac{u_{n+1}}{u_n} = \\frac{(n+1)^2+1}{n^2+1} \\frac{2^n}{2^{n+1}} \\xrightarrow[n\\to+\\infty]{} 1 \\times \\frac{1}{2} = \\frac{1}{2} < 1$$
La série $\\sum u_n$ converge.
2. Pour $v_n = \\left(\\frac{2n+1}{3n-1}\\right)^n > 0$, règle de Cauchy :
$$\\sqrt[n]{v_n} = \\frac{2n+1}{3n-1} \\xrightarrow[n\\to+\\infty]{} \\frac{2}{3} < 1$$
La série $\\sum v_n$ converge.
3. Pour $w_n = \\frac{1}{n\\ln n} > 0$, la fonction $f(t) = \\frac{1}{t\\ln t}$ est continue, décroissante et positive sur $[2, +\\infty[$.
Par comparaison série-intégrale :
$$\\int_2^X \\frac{dt}{t\\ln t} = [\\ln(\\ln t)]_2^X \\xrightarrow[X\\to+\\infty]{} +\\infty$$
L'intégrale divergeant, la série de Bertrand $\\sum w_n$ diverge.
4. Développement asymptotique en $0$ : $\\ln(1+u) = u - \\frac{u^2}{2} + o(u^2)$ avec $u = \\frac{1}{n}$ :
$$z_n = \\left(\\frac{1}{n} - \\frac{1}{2n^2} + o\\left(\\frac{1}{n^2}\\right)\\right) - \\frac{1}{n} = -\\frac{1}{2n^2} + o\\left(\\frac{1}{n^2}\\right)$$
Le terme général est de signe constant négatif pour $n$ grand et $-z_n \\sim \\frac{1}{2n^2}$. Par comparaison à une série de Riemann convergente ($\\alpha = 2 > 1$), $\\sum z_n$ converge absolument.

### Correction Exercice 2
1. Si $(c_n)$ est une suite positive décroissante tendant vers $0$, alors la série alternée $\\sum (-1)^n c_n$ converge et le reste vérifie $|R_n| \\le c_{n+1}$.
2. Avec $c_n = \\frac{1}{\\sqrt{n}}$, $(c_n)$ est strictement décroissante et tend vers $0$, donc $\\sum b_n$ converge d'après le CSSA. Cependant, $|b_n| = \\frac{1}{n^{1/2}}$ est une série de Riemann divergente ($\\alpha = 1/2 \\le 1$), donc $\\sum b_n$ est semi-convergente.
3. On factorise le dénominateur :
$$a_n = \\frac{(-1)^n}{\\sqrt{n}\\left(1 + \\frac{(-1)^n}{\\sqrt{n}}\\right)} = \\frac{(-1)^n}{\\sqrt{n}} \\left(1 - \\frac{(-1)^n}{\\sqrt{n}} + \\frac{1}{n} + O\\left(\\frac{1}{n^{3/2}}\\right)\\right) = \\frac{(-1)^n}{\\sqrt{n}} - \\frac{1}{n} + O\\left(\\frac{1}{n^{3/2}}\\right)$$
4. $\\sum \\frac{(-1)^n}{\\sqrt{n}}$ converge (CSSA) et $\\sum O\\left(\\frac{1}{n^{3/2}}\\right)$ converge absolument (Riemann $\\alpha = 3/2 > 1$). Mais $-\\sum \\frac{1}{n}$ diverge vers $-\\infty$ (série harmonique).
Donc la série $\\sum a_n$ diverge vers $-\\infty$.
Bien que $a_n \\sim \\frac{(-1)^n}{\\sqrt{n}}$, elles n'ont pas la même nature : on ne peut jamais sommer des équivalents si les termes ne sont pas de signe constant !`
    }
  ],
  "L2-EDO": [
    {
      "id": "L2-EDO-fiche_td",
      "title": "Feuille de TD L2 : Équations Différentielles Ordinaires et Systèmes Linéaires",
      "filename": "TD_L2_Equations_Differentielles.md",
      "statement": `## Travaux Dirigés L2 : Équations Différentielles Ordinaires

### Exercice 1 : Équation différentielle scalaire d'ordre 1 et raccordement (8 points)
On considère l'équation différentielle :
$$(E_1) \\quad x y' - 2 y = x^3 \\cos(x)$$
1. Résoudre $(E_1)$ sur $]0, +\\infty[$ puis sur $]-\\infty, 0[$.
2. Existe-t-il des solutions de classe $\\mathcal{C}^1$ sur $\\mathbb{R}$ tout entier ? Si oui, les expliciter.

### Exercice 2 : Oscillateur harmonique et résonance (6 points)
Résoudre sur $\\mathbb{R}$ l'équation du second ordre :
$$(E_2) \\quad y'' + 4 y = \\cos(2x)$$
avec les conditions initiales $y(0) = 0$ et $y'(0) = 1$.

### Exercice 3 : Système différentiel linéaire et exponentielle de matrice (6 points)
On considère le système différentiel $\\vec{X}'(t) = A \\vec{X}(t)$ où $\\vec{X}(t) = \\begin{pmatrix} x(t) \\\\ y(t) \\end{pmatrix}$ et :
$$A = \\begin{pmatrix} 1 & 1 \\\\ 4 & -2 \\end{pmatrix}$$
1. Déterminer les valeurs propres et les sous-espaces propres de $A$.
2. Calculer l'exponentielle de matrice $\\exp(tA)$.
3. Donner la solution générale du système, puis la solution spécifique satisfaisant $x(0) = 1$ et $y(0) = 0$.`,
      "solution": `### Correction Exercice 1
1. Sur un intervalle $I \\subset \\mathbb{R}^*$, l'équation normalisée s'écrit $y' - \\frac{2}{x}y = x^2\\cos x$.
L'équation homogène $y' - \\frac{2}{x}y = 0$ donne $y_h(x) = C x^2$.
Par la méthode de variation de la constante avec $y(x) = C(x) x^2$ :
$$x(C'(x)x^2 + 2x C(x)) - 2C(x)x^2 = x^3 \\cos x \\iff C'(x) x^3 = x^3 \\cos x \\iff C'(x) = \\cos x$$
D'où $C(x) = \\sin x + K$.
Sur $]0, +\\infty[$, $y_+(x) = (\\sin x + K_1)x^2$, et sur $]-\\infty, 0[$, $y_-(x) = (\\sin x + K_2)x^2$.
2. En $x=0$, $y_+(0) = y_-(0) = 0$.
Taux d'accroissement en $0$ : $\\frac{y(x) - 0}{x} = x(\\sin x + K) \\xrightarrow[x\\to 0]{} 0$, donc $y'(0) = 0$.
Dérivée pour $x \\neq 0$ : $y'(x) = x^2 \\cos x + 2x(\\sin x + K) \\xrightarrow[x\\to 0]{} 0 = y'(0)$.
La dérivée est continue en 0 pour tout choix de $(K_1, K_2) \\in \\mathbb{R}^2$.
Les solutions $\\mathcal{C}^1$ sur $\\mathbb{R}$ sont de la forme $y(x) = (\\sin x + K_1)x^2$ si $x > 0$, $y(0) = 0$, et $y(x) = (\\sin x + K_2)x^2$ si $x < 0$.

### Correction Exercice 2
1. Équation homogène $y'' + 4y = 0$ : équation caractéristique $r^2 + 4 = 0 \\implies r = \\pm 2i$.
Solution homogène : $y_h(x) = c_1 \\cos(2x) + c_2 \\sin(2x)$.
2. Second membre résonant : $2i$ est racine de l'équation caractéristique. On cherche une solution particulière sous la forme $y_p(x) = x(A\\cos(2x) + B\\sin(2x))$.
En calculant $y_p'' + 4y_p = -4A\\sin(2x) + 4B\\cos(2x)$, on identifie avec $\\cos(2x)$ :
$$-4A = 0 \\implies A = 0 \\quad \\text{et} \\quad 4B = 1 \\implies B = \\frac{1}{4}$$
D'où $y_p(x) = \\frac{x}{4}\\sin(2x)$.
3. Solution générale : $y(x) = c_1\\cos(2x) + c_2\\sin(2x) + \\frac{x}{4}\\sin(2x)$.
Conditions initiales : $y(0) = c_1 = 0$.
$y'(x) = 2c_2\\cos(2x) + \\frac{1}{4}\\sin(2x) + \\frac{x}{2}\\cos(2x) \\implies y'(0) = 2c_2 = 1 \\implies c_2 = \\frac{1}{2}$.
Solution unique : $y(x) = \\left(\\frac{1}{2} + \\frac{x}{4}\\right)\\sin(2x)$.

### Correction Exercice 3
1. Polynôme caractéristique : $P_A(X) = \\det(X I_2 - A) = (X-1)(X+2) - 4 = X^2 + X - 6 = (X-2)(X+3)$.
Valeurs propres distinctes : $\\lambda_1 = 2$ et $\\lambda_2 = -3$.
Vecteurs propres associés : $V_1 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$ pour $\\lambda_1=2$, et $V_2 = \\begin{pmatrix} 1 \\\\ -4 \\end{pmatrix}$ pour $\\lambda_2=-3$.
2. Matrice de passage $P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -4 \\end{pmatrix}$ et son inverse $P^{-1} = \\frac{1}{5} \\begin{pmatrix} 4 & 1 \\\\ 1 & -1 \\end{pmatrix}$.
$$\\exp(tA) = P \\begin{pmatrix} e^{2t} & 0 \\\\ 0 & e^{-3t} \\end{pmatrix} P^{-1} = \\frac{1}{5} \\begin{pmatrix} 4e^{2t} + e^{-3t} & e^{2t} - e^{-3t} \\\\ 4e^{2t} - 4e^{-3t} & e^{2t} + 4e^{-3t} \\end{pmatrix}$$
3. Solution générale : $\\vec{X}(t) = \\alpha e^{2t} \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} + \\beta e^{-3t} \\begin{pmatrix} 1 \\\\ -4 \\end{pmatrix}$.
Pour $\\vec{X}(0) = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$, on a $\\vec{X}(t) = \\exp(tA)\\vec{X}(0) = \\frac{1}{5} \\begin{pmatrix} 4e^{2t} + e^{-3t} \\\\ 4e^{2t} - 4e^{-3t} \\end{pmatrix}$.`
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

