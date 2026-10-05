/**
 * Données pédagogiques universitaires de Licence 2 de Mathématiques (S3 & S4)
 * Synthétisant les enseignements d'Algèbre linéaire euclidienne, Analyse approfondie et Calcul différentiel
 */

window.MATHS_COURSES_L2 = {
  "L2-RED1": {
    "title": "L2-RED1 : Réduction des endomorphismes I : Valeurs propres et Diagonalisation",
    "domain": "Algèbre Linéaire Avancée",
    "objectives": [
      "Définir les notions d'éléments propres : valeur propre, vecteur propre, sous-espace propre $E_\\lambda = \\ker(u - \\lambda \\text{Id}_E)$.",
      "Calculer le polynôme caractéristique $P_u(X) = \\det(X \\text{Id}_E - u)$ et déterminer son spectre $\\text{Sp}(u)$.",
      "Énoncer et appliquer le Théorème fondamental de diagonalisabilité : $\\sum \\dim(E_\\lambda) = \\dim(E)$.",
      "Calculer les puissances de matrices $A^k$ et résoudre des récurrences linéaires par diagonalisation."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et polynôme caractéristique",
        "content": "Soit $E$ un $\\mathbb{K}$-espace vectoriel de dimension finie $n$, et $u \\in \\mathcal{L}(E)$ :\n• $\\lambda \\in \\mathbb{K}$ est une **valeur propre** de $u$ s'il existe un vecteur **non nul** $x \\in E$ tel que $u(x) = \\lambda x$.\n• Le **sous-espace propre** associé est $E_\\lambda = \\ker(u - \\lambda \\text{Id}_E)$ (SEV de dimension $\\ge 1$).\n• **Polynôme caractéristique** : $P_u(X) = \\det(X \\text{Id} - u)$. Les valeurs propres sont exactement les racines de $P_u(X)$ dans $\\mathbb{K}$."
      },
      {
        "title": "2. Critères de diagonalisabilité",
        "content": "Un endomorphisme $u \\in \\mathcal{L}(E)$ est **diagonalisable** ssi il existe une base de $E$ formée de vecteurs propres de $u$.\n• **Théorème fondamental** : $u$ est diagonalisable ssi :\n1. Le polynôme caractéristique $P_u(X)$ est **scindé** sur $\\mathbb{K}$.\n2. Pour chaque valeur propre $\\lambda$, la multiplicité géométrique est égale à la multiplicité algébrique : $\\dim(E_\\lambda) = m_\\lambda$.\n• **Cas particulier suffisant** : Si $P_u(X)$ admet $n = \\dim(E)$ racines distinctes dans $\\mathbb{K}$, alors $u$ est diagonalisable."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Diagonaliser une matrice $3 \\times 3$",
        "example": "Soit $A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 2 & 1 \\\\ 0 & 0 & 3 \\end{pmatrix}$. Est-elle diagonalisable ?",
        "steps": [
          "**Étape 1 (Matrice triangulaire)** : Comme $A$ est triangulaire supérieure, ses valeurs propres sont ses éléments diagonaux : $\\lambda_1 = 1, \\lambda_2 = 2, \\lambda_3 = 3$.",
          "**Étape 2 (Spectre)** : Le polynôme caractéristique est $P_A(X) = (X-1)(X-2)(X-3)$.",
          "**Étape 3 (Conclusion)** : $A$ possède 3 valeurs propres deux à deux distinctes en dimension 3. D'après le théorème du cours, la matrice $A$ est diagonalisable."
        ]
      }
    ],
    "traps": [
      "⚠️ Un vecteur propre ne peut JAMAIS être le vecteur nul $0_E$ par définition !",
      "⚠️ Une valeur propre peut être nulle ($\\lambda = 0 \\iff \\ker(u) \\neq \\{0\\} \\iff u$ non inversible)."
    ],
    "flashcards": [
      {
        "q": "Quelle est la définition d'un vecteur propre associé à la valeur propre $\\lambda$ ?",
        "a": "Un vecteur **non nul** $x \\in E$ vérifiant $u(x) = \\lambda x$."
      },
      {
        "q": "Une matrice de taille $n \\times n$ possédant $n$ valeurs propres distinctes est-elle toujours diagonalisable ?",
        "a": "Oui, toujours."
      }
    ]
  },
  "L2-PRE": {
    "title": "L2-PRE : Espaces Préhilbertiens et Euclidiens : Orthogonalité et Gram-Schmidt",
    "domain": "Espaces Euclidiens",
    "objectives": [
      "Définir un produit scalaire réel : forme bilinéaire symétrique définie positive.",
      "Énoncer et démontrer l'inégalité de Cauchy-Schwarz : $|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$ avec cas d'égalité.",
      "Appliquer l'algorithme d'orthonormalisation de Gram-Schmidt pour construire une base orthonormée (BON).",
      "Calculer la projection orthogonale sur un sous-espace vectoriel de dimension finie et la distance d'un vecteur à ce sous-espace."
    ],
    "keyPoints": [
      {
        "title": "1. Inégalité de Cauchy-Schwarz",
        "content": "Dans tout espace préhilbertien réel $(E, \\langle \\cdot, \\cdot \\rangle)$ :\n$$|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$$\navec égalité si et seulement si la famille $(x, y)$ est liée (colinéaire).\n• **Inégalité de Minkowski (triangulaire)** : $\\|x + y\\| \\le \\|x\\| + \\|y\\|$."
      },
      {
        "title": "2. Procédé d'orthonormalisation de Gram-Schmidt",
        "content": "Soit $(v_1, v_2, \\dots, v_p)$ une famille libre de $E$. On construit une famille orthonormée $(e_1, \\dots, e_p)$ engendrant le même sous-espace par récurrence :\n$$u_1 = v_1, \\quad e_1 = \\frac{u_1}{\\|u_1\\|}$$\n$$u_k = v_k - \\sum_{j=1}^{k-1} \\langle v_k, e_j \\rangle e_j, \\quad e_k = \\frac{u_k}{\\|u_k\\|}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Orthogonaliser deux vecteurs par Gram-Schmidt",
        "example": "Soit $\\mathbb{R}^3$ muni du produit scalaire usuel. Transformer $(v_1(1;1;0), v_2(1;0;1))$ en une base orthonormée.",
        "steps": [
          "**Premier vecteur** : $\\|v_1\\| = \\sqrt{1^2 + 1^2 + 0^2} = \\sqrt{2}$. On pose $e_1 = \\frac{v_1}{\\sqrt{2}} = \\left(\\frac{1}{\\sqrt{2}} ; \\frac{1}{\\sqrt{2}} ; 0\\right)$.",
          "**Projection sur $e_1$** : $\\langle v_2, e_1 \\rangle = 1\\left(\\frac{1}{\\sqrt{2}}\\right) + 0 + 1(0) = \\frac{1}{\\sqrt{2}}$.",
          "**Deuxième vecteur orthogonal** : $u_2 = v_2 - \\langle v_2, e_1 \\rangle e_1 = (1; 0; 1) - \\frac{1}{\\sqrt{2}}\\left(\\frac{1}{\\sqrt{2}} ; \\frac{1}{\\sqrt{2}} ; 0\\right) = \\left(\\frac{1}{2} ; -\\frac{1}{2} ; 1\\right)$.",
          "**Normalisation** : $\\|u_2\\| = \\sqrt{\\frac{1}{4} + \\frac{1}{4} + 1} = \\sqrt{\\frac{3}{2}}$. Alors $e_2 = \\frac{u_2}{\\|u_2\\|} = \\left(\\frac{1}{\\sqrt{6}} ; -\\frac{1}{\\sqrt{6}} ; \\frac{2}{\\sqrt{6}}\\right)$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans la formule de Gram-Schmidt, si on n'a pas encore normalisé les vecteurs $u_j$, il faut diviser par $\\|u_j\\|^2$ : $u_k = v_k - \\sum \\frac{\\langle v_k, u_j \\rangle}{\\|u_j\\|^2} u_j$."
    ],
    "flashcards": [
      {
        "q": "Énoncer l'inégalité de Cauchy-Schwarz.",
        "a": "$|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$."
      },
      {
        "q": "Quand l'inégalité de Cauchy-Schwarz est-elle une égalité stricte ?",
        "a": "Si et seulement si les deux vecteurs sont colinéaires (famille liée)."
      }
    ]
  },
  "L2-SER": {
    "title": "L2-SER : Séries numériques réelles et complexes",
    "domain": "Analyse Réelle & Complexe",
    "objectives": [
      "Définir la somme d'une série convergente comme la limite de sa suite des sommes partielles $S_n = \\sum_{k=0}^n u_k$.",
      "Vérifier la condition nécessaire de convergence : $\\lim_{n \\to \\infty} u_n = 0$ (divergence grossière si $u_n \\not\\to 0$).",
      "Appliquer les règles de comparaison pour séries à termes positifs : équivalents, domination, règles de Riemann $\\sum \\frac{1}{n^\\alpha}$.",
      "Appliquer la règle de d'Alembert $\\lim \\frac{|u_{n+1}|}{|u_n|}$ et la règle des séries alternées de Leibniz."
    ],
    "keyPoints": [
      {
        "title": "1. Séries de Riemann et règle de d'Alembert",
        "content": "• **Séries de Riemann** : $\\sum_{n=1}^\\infty \\frac{1}{n^\\alpha}$ converge si et seulement si $\\alpha > 1$.\n• **Règle de d'Alembert** : Soit $\\sum u_n$ une série à termes non nuls telle que $\\lim_{n \\to +\\infty} \\left|\\frac{u_{n+1}}{u_n}\\right| = \\ell$ :\n- Si $\\ell < 1$ : la série est **absolument convergente**.\n- Si $\\ell > 1$ : la série **diverge grossièrement** ($u_n \\not\\to 0$).\n- Si $\\ell = 1$ : cas douteux (utiliser Riemann ou Gauss)."
      },
      {
        "title": "2. Critère spécial des séries alternées (CSSA de Leibniz)",
        "content": "Une série $\\sum (-1)^n a_n$ avec $a_n \\ge 0$ converge si :\n1. $\\lim_{n \\to +\\infty} a_n = 0$.\n2. La suite $(a_n)$ est décroissante à partir d'un certain rang.\n• **Majoration du reste** : $|R_n| = |S - S_n| \\le a_{n+1}$ (l'erreur est majorée par la valeur absolue du premier terme négligé)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Étudier la nature d'une série avec factorielles",
        "example": "Déterminer la nature de la série $\\sum_{n=0}^\\infty \\frac{2^n}{n!}$.",
        "steps": [
          "**Étape 1 (Règle de d'Alembert)** : On calcule le rapport $\\frac{u_{n+1}}{u_n} = \\frac{2^{n+1}}{(n+1)!} \\times \\frac{n!}{2^n} = \\frac{2}{n+1}$.",
          "**Étape 2 (Limite)** : $\\lim_{n \\to +\\infty} \\frac{2}{n+1} = 0 = \\ell$.",
          "**Conclusion** : Comme $\\ell = 0 < 1$, d'après la règle de d'Alembert, la série converge (sa somme vaut $e^2$)."
        ]
      }
    ],
    "traps": [
      "⚠️ $u_n \\to 0$ est une condition **nécessaire** mais **NON suffisante** pour la convergence ! Exemple : $\\frac{1}{n} \\to 0$ mais $\\sum \\frac{1}{n}$ diverge.",
      "⚠️ Si $\\ell = 1$ dans la règle de d'Alembert, on ne peut RIEN conclure (ex: $\\sum \\frac{1}{n}$ et $\\sum \\frac{1}{n^2}$ ont toutes deux $\\ell = 1$)."
    ],
    "flashcards": [
      {
        "q": "Pour quelles valeurs de $\\alpha$ la série de Riemann $\\sum \\frac{1}{n^\\alpha}$ converge-t-elle ?",
        "a": "Pour $\\alpha > 1$ (diverge si $\\alpha \\le 1$)."
      },
      {
        "q": "Que peut-on dire si $\\lim \\frac{|u_{n+1}|}{|u_n|} = 1$ dans le test de d'Alembert ?",
        "a": "Le test ne permet pas de conclure (cas douteux)."
      }
    ]
  },
  "L2-CAL": {
    "title": "L2-CAL : Calcul différentiel à plusieurs variables, gradient et extremums",
    "domain": "Calcul Différentiel",
    "objectives": [
      "Calculer les dérivées partielles d'ordre 1 et 2 d'une fonction de plusieurs variables $f(x, y)$.",
      "Énoncer le Théorème de Schwarz sur la symétrie des dérivées croisées : $\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$.",
      "Calculer le vecteur gradient $\\nabla f(a, b)$ et la matrice hessienne $H_f(a, b)$.",
      "Déterminer les points critiques et caractériser leur nature (minimum local, maximum local, point-selle col)."
    ],
    "keyPoints": [
      {
        "title": "1. Gradient et Différentielle",
        "content": "Pour une fonction $f : \\mathbb{R}^2 \\to \\mathbb{R}$ de classe $\\mathcal{C}^1$ :\n• Le **vecteur gradient** est $\\nabla f(x, y) = \\begin{pmatrix} \\frac{\\partial f}{\\partial x} \\\\ \\frac{\\partial f}{\\partial y} \\end{pmatrix}$.\n• La **différentielle** en un point $A$ est la forme linéaire $df(A)(h, k) = \\frac{\\partial f}{\\partial x}(A) h + \\frac{\\partial f}{\\partial y}(A) k$.\n• **Propriété géométrique** : Le gradient est orthogonal aux lignes de niveau de $f$ et pointe dans la direction de la plus grande pente."
      },
      {
        "title": "2. Recherche d'extremums locaux (Matrice hessienne)",
        "content": "1. On cherche les **points critiques** solutions du système $\\nabla f(x, y) = (0, 0)$.\n2. En un point critique $(x_0, y_0)$, on calcule la **matrice hessienne** :\n$$H = \\begin{pmatrix} r & s \\\\ s & t \\end{pmatrix} = \\begin{pmatrix} \\frac{\\partial^2 f}{\\partial x^2} & \\frac{\\partial^2 f}{\\partial x \\partial y} \\\\ \\frac{\\partial^2 f}{\\partial y \\partial x} & \\frac{\\partial^2 f}{\\partial y^2} \\end{pmatrix}$$\n• Si $\\det(H) = rt - s^2 > 0$ et $r > 0$ : **minimum local strict**.\n• Si $\\det(H) = rt - s^2 > 0$ et $r < 0$ : **maximum local strict**.\n• Si $\\det(H) = rt - s^2 < 0$ : **point selle** (ou col, pas d'extremum).\n• Si $\\det(H) = 0$ : cas douteux (étude d'ordre supérieur requise)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver les extremums locaux d'une fonction de 2 variables",
        "example": "Soit $f(x, y) = x^2 + y^2 - 2x - 4y + 5$. Trouver les extremums de $f$.",
        "steps": [
          "**Étape 1 (Gradient)** : $\\frac{\\partial f}{\\partial x} = 2x - 2$ et $\\frac{\\partial f}{\\partial y} = 2y - 4$.",
          "**Étape 2 (Point critique)** : $\\begin{cases} 2x - 2 = 0 \\\\ 2y - 4 = 0 \\end{cases} \\iff (x, y) = (1, 2)$.",
          "**Étape 3 (Hessienne)** : $r = \\frac{\\partial^2 f}{\\partial x^2} = 2$, $s = \\frac{\\partial^2 f}{\\partial x \\partial y} = 0$, $t = \\frac{\\partial^2 f}{\\partial y^2} = 2$.",
          "**Étape 4 (Nature)** : $\\det(H) = rt - s^2 = 2(2) - 0 = 4 > 0$ et $r = 2 > 0$. $f$ admet un minimum local strict en $(1, 2)$, valant $f(1, 2) = 0$."
        ]
      }
    ],
    "traps": [
      "⚠️ Un point critique où $\\nabla f = 0$ n'est pas obligatoirement un extremum (ex: $f(x,y) = x^2 - y^2$ a un point col en $(0,0)$).",
      "⚠️ Le théorème de Schwarz exige que la fonction soit de classe $\\mathcal{C}^2$ (dérivées secondes continues)."
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème de Schwarz pour les dérivées croisées.",
        "a": "Si $f$ est de classe $\\mathcal{C}^2$, alors $\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$."
      },
      {
        "q": "Quelle est la condition sur $\\det(H)$ pour qu'un point critique soit un point selle ?",
        "a": "$\\det(H) = rt - s^2 < 0$."
      }
    ]
  },
  "L2-DET": {
    "title": "L2-DET : Déterminants, formes multilinéaires alternées et comatrice",
    "domain": "Algèbre Linéaire Avancée",
    "objectives": [
      "Caractériser le déterminant comme unique forme $n$-linéaire alternée valant 1 sur la base canonique.",
      "Calculer un déterminant $n \\times n$ par opérations élémentaires sur les lignes/colonnes et développement de Laplace.",
      "Utiliser la comatrice et la formule $A \\cdot {}^t(\\text{Com } A) = \\det(A) I_n$ pour l'inversion et les systèmes de Cramer."
    ],
    "keyPoints": [
      {
        "title": "1. Propriétés fondamentales du déterminant",
        "content": "• Le déterminant est linéaire par rapport à chaque colonne (multilinéarité).\n• Si deux colonnes sont identiques, le déterminant est nul (alterné).\n• $\\det(AB) = \\det(A) \\det(B)$ et $\\det({}^tA) = \\det(A)$.\n• $A$ est inversible si et seulement si $\\det(A) \\neq 0$, et $\\det(A^{-1}) = \\frac{1}{\\det(A)}$."
      },
      {
        "title": "2. Formule de la comatrice et inversion",
        "content": "Pour toute matrice carrée $A \\in \\mathcal{M}_n(\\mathbb{K})$ :\n$$A \\cdot {}^t(\\text{Com } A) = {}^t(\\text{Com } A) \\cdot A = \\det(A) I_n$$\nSi $\\det(A) \\neq 0$, alors $A^{-1} = \\frac{1}{\\det(A)} {}^t(\\text{Com } A)$ où le cofacteur $C_{i,j} = (-1)^{i+j} \\det(A_{i,j})$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un déterminant $3 \\times 3$ par développement de Laplace",
        "example": "Calculer $\\det(A)$ pour $A = \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 3 & 1 \\\\ 2 & 1 & 4 \\end{pmatrix}$.",
        "steps": [
          "**Étape 1** : On développe selon la première ligne contenant un zéro :\n$$\\det(A) = 1 \\times \\begin{vmatrix} 3 & 1 \\\\ 1 & 4 \\end{vmatrix} - 2 \\times \\begin{vmatrix} 0 & 1 \\\\ 2 & 4 \\end{vmatrix} + 0$$",
          "**Étape 2** : $\\begin{vmatrix} 3 & 1 \\\\ 1 & 4 \\end{vmatrix} = 12 - 1 = 11$.",
          "**Étape 3** : $\\begin{vmatrix} 0 & 1 \\\\ 2 & 4 \\end{vmatrix} = 0 - 2 = -2$.",
          "**Conclusion** : $\\det(A) = 1(11) - 2(-2) = 11 + 4 = 15$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour une matrice $n \\times n$, $\\det(\\lambda A) = \\lambda^n \\det(A)$ et NON $\\lambda \\det(A)$ !"
    ],
    "flashcards": [
      {
        "q": "Que vaut $\\det(\\lambda A)$ pour $A \\in \\mathcal{M}_n(\\mathbb{K})$ et $\\lambda \\in \\mathbb{K}$ ?",
        "a": "$\\lambda^n \\det(A)$."
      },
      {
        "q": "Quelle formule relie une matrice inversible $A$ à sa comatrice ?",
        "a": "$A^{-1} = \\frac{1}{\\det(A)} {}^t(\\text{Com } A)$."
      }
    ]
  },
  "L2-RED2": {
    "title": "L2-RED2 : Réduction des endomorphismes II : Trigonalisation et Cayley-Hamilton",
    "domain": "Algèbre Linéaire Avancée",
    "objectives": [
      "Énoncer et appliquer le critère fondamental de trigonalisabilité (polynôme caractéristique scindé).",
      "Énoncer et appliquer le Théorème de Cayley-Hamilton : $P_u(u) = 0$.",
      "Définir le polynôme minimal $\\mu_u(X)$ et caractériser la diagonalisabilité par scindé à racines simples."
    ],
    "keyPoints": [
      {
        "title": "1. Critère de trigonalisabilité",
        "content": "Un endomorphisme $u \\in \\mathcal{L}(E)$ est **trigonalisable** si et seulement si son polynôme caractéristique $P_u(X)$ est **scindé** sur $\\mathbb{K}$.\nEn particulier, sur $\\mathbb{C}$, toute matrice est trigonalisable !"
      },
      {
        "title": "2. Théorème de Cayley-Hamilton et polynôme minimal",
        "content": "• **Théorème de Cayley-Hamilton** : Tout endomorphisme annule son polynôme caractéristique : $P_u(u) = 0_{\\mathcal{L}(E)}$.\n• **Polynôme minimal $\\mu_u$** : L'unique polynôme unitaire annulateur de plus bas degré de $u$. $\\mu_u$ divise $P_u$ et possède les mêmes racines que $P_u$ (qui sont les valeurs propres).\n• **Caractérisation de la diagonalisabilité** : $u$ est diagonalisable ssi son polynôme minimal $\\mu_u$ est scindé à **racines simples**."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer $A^{-1}$ avec Cayley-Hamilton",
        "example": "Soit $A$ telle que $P_A(X) = X^3 - 4X^2 + X - 2$. Exprimer $A^{-1}$.",
        "steps": [
          "**Étape 1 (Cayley-Hamilton)** : $A^3 - 4A^2 + A - 2I = 0$.",
          "**Étape 2 (Isoler $I$)** : $2I = A^3 - 4A^2 + A = A(A^2 - 4A + I)$.",
          "**Étape 3 (Multiplier par $1/2$)** : $A \\left( \\frac{1}{2}(A^2 - 4A + I) \\right) = I$.",
          "**Conclusion** : $A$ est inversible et $A^{-1} = \\frac{1}{2}(A^2 - 4A + I)$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais confondre polynôme caractéristique et minimal : le minimal peut être de degré strictement inférieur (ex: pour $I_n$, $P(X) = (X-1)^n$ mais $\\mu(X) = X-1$)."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème de Cayley-Hamilton.",
        "a": "Tout endomorphisme ou matrice carrée annule son polynôme caractéristique : $P_A(A) = 0$."
      },
      {
        "q": "Quelle condition sur le polynôme minimal $\\mu_A$ équivaut à la diagonalisabilité de $A$ ?",
        "a": "$\\mu_A$ est scindé à racines simples."
      }
    ]
  },
  "L2-DUA": {
    "title": "L2-DUA : Dualité en dimension finie, base duale et orthogonalité",
    "domain": "Algèbre Linéaire Avancée",
    "objectives": [
      "Définir l'espace dual $E^* = \\mathcal{L}(E, \\mathbb{K})$ et les formes linéaires.",
      "Construire la base duale $(e_1^*, \\dots, e_n^*)$ associée à une base $(e_1, \\dots, e_n)$ de $E$ ($e_i^*(e_j) = \\delta_{ij}$).",
      "Déterminer l'orthogonal $F^\\circ$ d'un sous-espace et utiliser la formule $\\dim(F) + \\dim(F^\\circ) = \\dim(E)$."
    ],
    "keyPoints": [
      {
        "title": "1. Base duale et coordonnées",
        "content": "Si $\\mathcal{B} = (e_1, \\dots, e_n)$ est une base de $E$, il existe une unique base $\\mathcal{B}^* = (e_1^*, \\dots, e_n^*)$ de $E^*$ telle que :\n$$e_i^*(e_j) = \\delta_{ij} = \\begin{cases} 1 & \\text{si } i = j \\\\ 0 & \\text{si } i \\neq j \\end{cases}$$\nPour tout vecteur $x \\in E$, $x = \\sum_{i=1}^n e_i^*(x) e_i$. Les formes coordonnées sont les éléments de la base duale."
      },
      {
        "title": "2. Orthogonalité au sens de la dualité",
        "content": "• Pour un sous-espace $F \\subset E$ : $F^\\circ = \\{\\varphi \\in E^* \\mid \\forall x \\in F, \\varphi(x) = 0\\}$.\n• Théorème de dimension : $\\dim(F) + \\dim(F^\\circ) = \\dim(E)$.\n• Tout sous-espace de dimension $p$ est l'intersection de $n-p$ hyperplans (noyaux de formes linéaires indépendantes)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver la base duale de $\\mathbb{R}_2[X]$",
        "example": "Déterminer la base duale de la base canonique $(1, X, X^2)$ pour l'évaluation en 0.",
        "steps": [
          "**Étape 1** : Soit $P(X) = a_0 + a_1 X + a_2 X^2$.",
          "**Étape 2** : $e_0^*(P) = P(0) = a_0$, $e_1^*(P) = P'(0) = a_1$, $e_2^*(P) = \\frac{P''(0)}{2} = a_2$.",
          "**Conclusion** : Les formes duales sont les dérivées d'ordre $k$ en 0 divisées par $k!$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un espace de dimension infinie, $E$ et $E^*$ ne sont généralement pas isomorphes ! L'isomorphisme $\\dim(E) = \\dim(E^*)$ n'est vrai qu'en dimension finie."
    ],
    "flashcards": [
      {
        "q": "Comment est définie la base duale $(e_i^*)$ associée à une base $(e_j)$ ?",
        "a": "$e_i^*(e_j) = \\delta_{ij}$ (symbole de Kronecker)."
      },
      {
        "q": "Quelle relation relie la dimension d'un sous-espace $F$ et celle de son orthogonal dual $F^\\circ$ ?",
        "a": "$\\dim(F) + \\dim(F^\\circ) = \\dim(E)$."
      }
    ]
  },
  "L2-SYM": {
    "title": "L2-SYM : Endomorphismes symétriques, groupe orthogonal et Théorème Spectral",
    "domain": "Espaces Euclidiens",
    "objectives": [
      "Définir les endomorphismes auto-adjoints (symétriques) : $\\langle u(x), y \\rangle = \\langle x, u(y) \\rangle$.",
      "Énoncer et démontrer le Théorème Spectral dans $\\mathbb{R}^n$ : toute matrice symétrique réelle est diagonalisable dans une BON.",
      "Classifier les endomorphismes orthogonaux (isométries) en dimensions 2 et 3."
    ],
    "keyPoints": [
      {
        "title": "1. Le Théorème Spectral",
        "content": "Soit $A \\in \\mathcal{S}_n(\\mathbb{R})$ une matrice symétrique réelle ($A = {}^tA$) :\n1. Toutes les valeurs propres de $A$ sont **réelles** ($\\text{Sp}(A) \\subset \\mathbb{R}$).\n2. Les sous-espaces propres associés à des valeurs propres distinctes sont **deux à deux orthogonaux**.\n3. Il existe une matrice orthogonale $P \\in \\mathcal{O}_n(\\mathbb{R})$ (c-à-d ${}^tP P = I_n$) telle que :\n$${}^tP A P = D = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$$"
      },
      {
        "title": "2. Groupe orthogonal et isométries",
        "content": "• Une matrice $P$ est orthogonale ssi ses colonnes forment une BON de $\\mathbb{R}^n$.\n• $\\det(P) = \\pm 1$. Si $\\det(P) = 1$, $P \\in \\mathcal{SO}_n(\\mathbb{R})$ (rotation)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Diagonaliser orthogonalement une matrice symétrique",
        "example": "Soit $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$. Trouver une BON de vecteurs propres.",
        "steps": [
          "**Étape 1 (Spectre)** : $P_A(X) = (X-1)^2 - 4 = X^2 - 2X - 3 = (X-3)(X+1)$. $\\lambda_1 = 3, \\lambda_2 = -1$.",
          "**Étape 2 (Vecteurs propres)** : Pour $\\lambda = 3$, $v_1 = (1 ; 1)$. Pour $\\lambda = -1$, $v_2 = (-1 ; 1)$. Remarquer qu'ils sont orthogonaux : $1(-1) + 1(1) = 0$.",
          "**Étape 3 (Normalisation)** : $e_1 = \\frac{1}{\\sqrt{2}}(1 ; 1)$ et $e_2 = \\frac{1}{\\sqrt{2}}(-1 ; 1)$.",
          "**Conclusion** : $P = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix} \\in \\mathcal{SO}_2(\\mathbb{R})$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour des valeurs propres multiples, les vecteurs propres d'un même sous-espace ne sont pas automatiquement orthogonaux : il faut appliquer Gram-Schmidt dans ce sous-espace propre !"
    ],
    "flashcards": [
      {
        "q": "Toute matrice symétrique réelle est-elle diagonalisable ?",
        "a": "Oui, toujours, et dans une base orthonormée (Théorème spectral)."
      },
      {
        "q": "Que valent les déterminants des matrices orthogonales ?",
        "a": "$+1$ (isométries directes/rotations) ou $-1$ (isométries indirectes/réflexions)."
      }
    ]
  },
  "L2-RIE": {
    "title": "L2-RIE : Intégrale de Riemann approfondie et fonctions réglées",
    "domain": "Calcul Intégral",
    "objectives": [
      "Définir les fonctions en escalier et l'espace des fonctions réglées sur un segment $[a ; b]$.",
      "Construire l'intégrale de Riemann comme prolongement continu de l'intégrale des fonctions en escalier.",
      "Démontrer l'interversion limite-intégrale sous l'hypothèse de convergence uniforme."
    ],
    "keyPoints": [
      {
        "title": "1. Fonctions réglées",
        "content": "• Une fonction $f : [a ; b] \\to \\mathbb{R}$ est **réglée** si elle admet une limite à droite et une limite à gauche en tout point.\n• Théorème : $f$ est réglée ssi elle est **limite uniforme** d'une suite de fonctions en escalier sur $[a ; b]$.\n• Toute fonction continue ou monotone par morceaux sur $[a ; b]$ est réglée."
      },
      {
        "title": "2. Théorème d'interversion sous convergence uniforme",
        "content": "Si une suite de fonctions continues $(f_n)$ **converge uniformément** vers $f$ sur $[a ; b]$, alors :\n$$\\lim_{n \\to +\\infty} \\int_a^b f_n(t) dt = \\int_a^b \\left( \\lim_{n \\to +\\infty} f_n(t) \\right) dt = \\int_a^b f(t) dt$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Montrer la convergence d'une suite d'intégrales",
        "example": "Calculer $\\lim_{n \\to +\\infty} \\int_0^1 \\frac{x^n}{1+x} dx$.",
        "steps": [
          "**Étape 1 (Majoration)** : Pour $x \\in [0 ; 1]$, $1+x \\ge 1$, donc $0 \\le \\frac{x^n}{1+x} \\le x^n$.",
          "**Étape 2 (Intégration de la borne)** : $0 \\le \\int_0^1 \\frac{x^n}{1+x} dx \\le \\int_0^1 x^n dx = \\frac{1}{n+1}$.",
          "**Conclusion** : Par encadrement, la limite vaut 0."
        ]
      }
    ],
    "traps": [
      "⚠️ La convergence simple ne suffit PAS pour intervertir limite et intégrale (contre-exemple des bosses glissantes $f_n(x) = n x^n(1-x)$) !"
    ],
    "flashcards": [
      {
        "q": "Quelle condition sur la convergence d'une suite $(f_n)$ permet d'intervertir limite et intégrale sur un segment ?",
        "a": "La convergence uniforme sur le segment."
      },
      {
        "q": "Toute fonction continue par morceaux sur un segment est-elle réglée ?",
        "a": "Oui, toujours."
      }
    ]
  },
  "L2-ING": {
    "title": "L2-ING : Intégrales généralisées sur un intervalle quelconque",
    "domain": "Calcul Intégral",
    "objectives": [
      "Définir la convergence des intégrales impropres comme limites d'intégrales sur des segments.",
      "Maîtriser les intégrales de référence de Riemann $\\int_1^{+\\infty} \\frac{dt}{t^\\alpha}$ et $\\int_0^1 \\frac{dt}{t^\\alpha}$.",
      "Appliquer les critères de comparaison, d'équivalence et la convergence absolue."
    ],
    "keyPoints": [
      {
        "title": "1. Intégrales de référence de Riemann",
        "content": "• En $+\\infty$ : $\\int_1^{+\\infty} \\frac{1}{t^\\alpha} dt$ converge si et seulement si $\\alpha > 1$.\n• En $0$ : $\\int_0^1 \\frac{1}{t^\\alpha} dt$ converge si et seulement si $\\alpha < 1$."
      },
      {
        "title": "2. Théorèmes de comparaison (fonctions positives)",
        "content": "Si $0 \\le f(t) \\le g(t)$ au voisinage de la borne critique :\n• Si $\\int g$ converge, alors $\\int f$ converge.\n• Si $\\int f$ diverge, alors $\\int g$ diverge.\n• Si $f(t) \\sim g(t)$ avec $g > 0$, alors $\\int f$ et $\\int g$ sont de même nature."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Établir la convergence par équivalence",
        "example": "Étudier la convergence de $\\int_1^{+\\infty} \\frac{\\ln(t)}{t^2 + 1} dt$.",
        "steps": [
          "**Étape 1 (Signe)** : La fonction est positive et continue sur $[1 ; +\\infty[$.",
          "**Étape 2 (Comportement en $+\\infty$)** : $\\frac{\\ln(t)}{t^2+1} = o\\left(\\frac{1}{t^{1{,}5}}\\right)$ car $\\frac{t^{1{,}5} \\ln(t)}{t^2+1} \\sim \\frac{\\ln(t)}{t^{0{,}5}} \\to 0$.",
          "**Conclusion** : Comme $\\int_1^{+\\infty} \\frac{1}{t^{1{,}5}} dt$ converge ($1{,}5 > 1$), l'intégrale converge par comparaison."
        ]
      }
    ],
    "traps": [
      "⚠️ L'équivalence ne s'applique qu'aux fonctions de **signe constant** au voisinage de la borne !"
    ],
    "flashcards": [
      {
        "q": "Pour quelle condition sur $\\alpha$ l'intégrale $\\int_1^{+\\infty} \\frac{1}{t^\\alpha} dt$ converge-t-elle ?",
        "a": "$\\alpha > 1$."
      },
      {
        "q": "Pour quelle condition sur $\\alpha$ l'intégrale $\\int_0^1 \\frac{1}{t^\\alpha} dt$ converge-t-elle ?",
        "a": "$\\alpha < 1$."
      }
    ]
  },
  "L2-EDO": {
    "title": "L2-EDO : Équations différentielles linéaires et systèmes différentiels",
    "domain": "Équations Différentielles",
    "objectives": [
      "Résoudre les équations différentielles linéaires scalaires d'ordre 2 à coefficients constants $a y'' + b y' + c y = f(x)$.",
      "Utiliser le Wronskien pour tester l'indépendance de deux solutions et appliquer la méthode de variation des constantes.",
      "Résoudre les systèmes différentiels linéaires $X'(t) = A X(t)$ via l'exponentielle de matrice $e^{tA}$."
    ],
    "keyPoints": [
      {
        "title": "1. Équations d'ordre 2 à coefficients constants",
        "content": "Équation homogène $a y'' + b y' + c y = 0$. Équation caractéristique $a r^2 + b r + c = 0$, discriminant $\\Delta$ :\n• Si $\\Delta > 0$ : $y(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x}$.\n• Si $\\Delta = 0$ : $y(x) = (C_1 x + C_2) e^{r_0 x}$.\n• Si $\\Delta < 0$ ($r = \\alpha \\pm i\\beta$) : $y(x) = e^{\\alpha x} (C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x))$."
      },
      {
        "title": "2. Systèmes différentiels $X'(t) = A X(t)$",
        "content": "L'unique solution vérifiant $X(0) = X_0$ est donnée par :\n$$X(t) = e^{tA} X_0$$\nSi $A = P D P^{-1}$ est diagonalisable, alors $e^{tA} = P e^{tD} P^{-1}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre $y'' + 4y = 0$",
        "example": "Résoudre $y'' + 4y = 0$ avec $y(0) = 1$ et $y'(0) = 2$.",
        "steps": [
          "**Équation caractéristique** : $r^2 + 4 = 0 \\iff r = \\pm 2i$ ($\\alpha = 0, \\beta = 2$).",
          "**Solution générale** : $y(x) = A \\cos(2x) + B \\sin(2x)$.",
          "**Conditions initiales** : $y(0) = A = 1$. Dérivée : $y'(x) = -2A \\sin(2x) + 2B \\cos(2x) \\implies y'(0) = 2B = 2 \\implies B = 1$.",
          "**Conclusion** : $y(x) = \\cos(2x) + \\sin(2x)$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour un second membre de la forme $e^{\\omega x}$, si $\\omega$ est racine de l'équation caractéristique, chercher une solution particulière en $x e^{\\omega x}$ (résonance) !"
    ],
    "flashcards": [
      {
        "q": "Quelle est la forme des solutions de $y'' + \\omega^2 y = 0$ ?",
        "a": "$y(x) = A \\cos(\\omega x) + B \\sin(\\omega x)$."
      },
      {
        "q": "Comment s'exprime la solution d'un système $X'(t) = A X(t)$ avec $X(0) = X_0$ ?",
        "a": "$X(t) = e^{tA} X_0$."
      }
    ]
  },
  "L2-PAR": {
    "title": "L2-PAR : Intégrales dépendant d'un paramètre et convergence dominée",
    "domain": "Calcul Intégral",
    "objectives": [
      "Étudier les fonctions définies par une intégrale à paramètre $F(x) = \\int_I f(x, t) dt$.",
      "Énoncer et appliquer le théorème de continuité sous le signe intégrale (hypothèse de domination).",
      "Énoncer et appliquer le théorème de dérivation sous le signe intégrale (règle de Leibniz)."
    ],
    "keyPoints": [
      {
        "title": "1. Continuité sous le signe intégrale",
        "content": "Soit $F(x) = \\int_I f(x, t) dt$. Si :\n1. Pour tout $x$, $t \\mapsto f(x, t)$ est continue par morceaux intégrable sur $I$.\n2. Pour tout $t$, $x \\mapsto f(x, t)$ est continue sur $J$.\n3. **Hypothèse de domination** : il existe $\\varphi \\ge 0$ intégrable sur $I$ telle que $\\forall x \\in J, \\forall t \\in I, |f(x, t)| \\le \\varphi(t)$.\nAlors $F$ est **continue** sur $J$."
      },
      {
        "title": "2. Dérivation sous le signe intégrale",
        "content": "Si de plus $\\frac{\\partial f}{\\partial x}$ vérifie une hypothèse de domination $\\left|\\frac{\\partial f}{\\partial x}(x, t)\\right| \\le \\psi(t)$ avec $\\psi$ intégrable sur $I$, alors $F$ est de classe $\\mathcal{C}^1$ et :\n$$F'(x) = \\int_I \\frac{\\partial f}{\\partial x}(x, t) dt$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Établir l'hypothèse de domination sur tout segment",
        "example": "Démontrer la continuité de $F(x) = \\int_0^{+\\infty} e^{-t} \\cos(xt) dt$ sur $\\mathbb{R}$.",
        "steps": [
          "**Étape 1** : Pour tout $x \\in \\mathbb{R}$ et $t \\ge 0$, $|e^{-t} \\cos(xt)| \\le e^{-t} \\times 1 = e^{-t}$.",
          "**Étape 2** : La fonction $t \\mapsto e^{-t}$ est continue, positive et intégrable sur $[0 ; +\\infty[$ ($\\int_0^{+\\infty} e^{-t} dt = 1 < +\\infty$).",
          "**Conclusion** : Par le théorème de continuité dominée, $F$ est continue sur $\\mathbb{R}$."
        ]
      }
    ],
    "traps": [
      "⚠️ La fonction dominatrice $\\varphi(t)$ doit impérativement être **indépendante de $x$** !"
    ],
    "flashcards": [
      {
        "q": "Quelle condition clé est nécessaire pour dériver une intégrale à paramètre sous le signe somme ?",
        "a": "L'hypothèse de domination sur la dérivée partielle $\\left|\\frac{\\partial f}{\\partial x}(x, t)\\right| \\le \\psi(t)$ avec $\\psi$ intégrable."
      },
      {
        "q": "La fonction chapeau $\\varphi(t)$ de l'hypothèse de domination peut-elle dépendre de $x$ ?",
        "a": "Non, elle doit être indépendante du paramètre $x$."
      }
    ]
  },
  "L2-MUL": {
    "title": "L2-MUL : Intégrales multiples, théorème de Fubini et changements de variables",
    "domain": "Calcul Intégral",
    "objectives": [
      "Calculer des intégrales doubles et triples sur des pavés et des domaines simples.",
      "Appliquer le théorème de Fubini pour intervertir l'ordre d'intégration.",
      "Calculer le jacobien et effectuer des changements de variables (polaires, cylindriques, sphériques)."
    ],
    "keyPoints": [
      {
        "title": "1. Théorème de Fubini",
        "content": "Pour une fonction continue $f$ sur un rectangle $[a ; b] \\times [c ; d]$ :\n$$\\iint_D f(x, y) dx dy = \\int_a^b \\left( \\int_c^d f(x, y) dy \\right) dx = \\int_c^d \\left( \\int_a^b f(x, y) dx \\right) dy$$"
      },
      {
        "title": "2. Changement de variable en coordonnées polaires",
        "content": "Pour $x = r \\cos\\theta$ et $y = r \\sin\\theta$, la matrice jacobienne a pour déterminant $r$ :\n$$dx dy = r \\, dr \\, d\\theta$$\n$$\\iint_D f(x, y) dx dy = \\iint_{\\Delta} f(r\\cos\\theta, r\\sin\\theta) \\, r \\, dr \\, d\\theta$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer l'intégrale de Gauss $\\int_{-\\infty}^{+\\infty} e^{-x^2} dx$",
        "example": "Calculer $I = \\int_0^{+\\infty} e^{-x^2} dx$ en passant par $I^2$.",
        "steps": [
          "**Étape 1** : $I^2 = \\left(\\int_0^{+\\infty} e^{-x^2} dx\\right)\\left(\\int_0^{+\\infty} e^{-y^2} dy\\right) = \\iint_{[0,\\infty[^2} e^{-(x^2+y^2)} dx dy$.",
          "**Étape 2 (Polaires)** : En posant $x = r\\cos\\theta, y = r\\sin\\theta$, le quart de plan devient $r \\in [0 ; +\\infty[$ et $\\theta \\in [0 ; \\pi/2]$ :\n$$I^2 = \\int_0^{\\pi/2} d\\theta \\int_0^{+\\infty} r e^{-r^2} dr = \\frac{\\pi}{2} \\left[ -\\frac{e^{-r^2}}{2} \\right]_0^{+\\infty} = \\frac{\\pi}{2} \\times \\frac{1}{2} = \\frac{\\pi}{4}$$",
          "**Conclusion** : $I = \\frac{\\sqrt{\\pi}}{2}$, d'où $\\int_{-\\infty}^{+\\infty} e^{-x^2} dx = \\sqrt{\\pi}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais oublier le facteur d'échelle $r$ dans l'élément différentiel polaire : $dx dy = r \\, dr \\, d\\theta$ !"
    ],
    "flashcards": [
      {
        "q": "Que vaut l'élément de surface en coordonnées polaires ?",
        "a": "$dx dy = r \\, dr \\, d\\theta$."
      },
      {
        "q": "Quelle est la valeur de l'intégrale de Gauss $\\int_{-\\infty}^{+\\infty} e^{-t^2} dt$ ?",
        "a": "$\\sqrt{\\pi}$."
      }
    ]
  },
  "L2-CRB": {
    "title": "L2-CRB : Courbes paramétrées, repère de Frenet et courbure",
    "domain": "Géométrie Différentielle",
    "objectives": [
      "Définir l'abscisse curviligne $s$ et le repère mobile de Frenet $(\\vec{T}, \\vec{N})$.",
      "Énoncer les formules de Frenet dans le plan et définir la courbure $\\gamma$.",
      "Calculer le rayon de courbure $R = 1/|\\gamma|$ et le centre de courbure."
    ],
    "keyPoints": [
      {
        "title": "1. Repère de Frenet et formules de Frenet",
        "content": "Soit un arc paramétré par son abscisse curviligne $s$ :\n• $\\vec{T}(s) = \\frac{dM}{ds}$ est le vecteur tangent unitaire.\n• $\\vec{N}(s)$ est le vecteur normal unitaire tel que $(\\vec{T}, \\vec{N})$ soit direct.\n• **Formules de Frenet planes** :\n$$\\frac{d\\vec{T}}{ds} = \\gamma \\vec{N} \\quad \\text{et} \\quad \\frac{d\\vec{N}}{ds} = -\\gamma \\vec{T}$$\noù $\\gamma$ est la **courbure algébrique**."
      },
      {
        "title": "2. Rayon et centre de courbure",
        "content": "• Le rayon de courbure est $R = \\frac{1}{|\\gamma|}$.\n• Le centre de courbure $C$ est donné par $C = M + R \\vec{N}$. C'est le centre du cercle osculateur à la courbe."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la courbure d'un cercle de rayon $r$",
        "example": "Montrer que la courbure d'un cercle de rayon $r$ est constante égale à $1/r$.",
        "steps": [
          "**Paramétrage** : $M(t) = (r\\cos(t) ; r\\sin(t))$.",
          "**Vitesse** : $\\vec{v}(t) = (-r\\sin t ; r\\cos t)$, $\\|\\vec{v}(t)\\| = r$. L'abscisse curviligne est $s = rt$, d'où $t = s/r$.",
          "**Vecteur tangent** : $\\vec{T}(s) = (-\\sin(s/r) ; \\cos(s/r))$.",
          "**Dérivée** : $\\frac{d\\vec{T}}{ds} = \\left(-\\frac{1}{r}\\cos(s/r) ; -\\frac{1}{r}\\sin(s/r)\\right) = \\frac{1}{r} \\vec{N}$.",
          "**Conclusion** : La courbure est $\\gamma = \\frac{1}{r}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Les formules de Frenet ne s'appliquent directement que lorsque la dérivation est faite par rapport à l'**abscisse curviligne** $s$ (et non par rapport à un paramètre arbitraire $t$ sans corriger par la vitesse) !"
    ],
    "flashcards": [
      {
        "q": "Que vaut la courbure d'une droite ?",
        "a": "Elle est nulle en tout point ($\\gamma = 0$)."
      },
      {
        "q": "Quelle relation relie la courbure $\\gamma$ et le rayon de courbure $R$ ?",
        "a": "$R = \\frac{1}{|\\gamma|}$."
      }
    ]
  },
  "L2-PRB": {
    "title": "L2-PRB : Espaces probabilisés et variables aléatoires discrètes",
    "domain": "Probabilités",
    "objectives": [
      "Définir une tribu ($\\sigma$-algèbre) et une mesure de probabilité sur un univers quelconque $\\Omega$.",
      "Maîtriser les lois usuelles discrètes : uniforme, Bernoulli, binomiale, géométrique, Poisson.",
      "Calculer espérance, variance et exploiter les fonctions génératrices $G_X(t) = E(t^X)$."
    ],
    "keyPoints": [
      {
        "title": "1. Lois discrètes infinies de référence",
        "content": "• **Loi géométrique $\\mathcal{G}(p)$** (temps d'attente du premier succès) :\n$$P(X = k) = p(1-p)^{k-1} \\quad (k \\in \\mathbb{N}^*), \\quad E(X) = \\frac{1}{p}, \\quad V(X) = \\frac{1-p}{p^2}$$\n• **Loi de Poisson $\\mathcal{P}(\\lambda)$** (événements rares) :\n$$P(X = k) = e^{-\\lambda} \\frac{\\lambda^k}{k!} \\quad (k \\in \\mathbb{N}), \\quad E(X) = \\lambda, \\quad V(X) = \\lambda$$"
      },
      {
        "title": "2. Fonctions génératrices",
        "content": "Pour $X$ à valeurs dans $\\mathbb{N}$, sa fonction génératrice est $G_X(t) = \\sum_{k=0}^{+\\infty} P(X = k) t^k = E(t^X)$.\n• $G_X(1) = 1$, $G_X'(1) = E(X)$, et $G_X''(1) = E(X(X-1))$.\n• Pour $X, Y$ indépendantes : $G_{X+Y}(t) = G_X(t) \\times G_Y(t)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Somme de deux variables de Poisson indépendantes",
        "example": "Soient $X \\sim \\mathcal{P}(\\lambda_1)$ et $Y \\sim \\mathcal{P}(\\lambda_2)$ indépendantes. Déterminer la loi de $X + Y$.",
        "steps": [
          "**Étape 1** : La fonction génératrice d'une loi de Poisson est $G(t) = e^{\\lambda(t-1)}$.",
          "**Étape 2** : Par indépendance, $G_{X+Y}(t) = G_X(t) G_Y(t) = e^{\\lambda_1(t-1)} e^{\\lambda_2(t-1)} = e^{(\\lambda_1 + \\lambda_2)(t-1)}$.",
          "**Conclusion** : Par injectivité de la transformée génératrice, $X + Y \\sim \\mathcal{P}(\\lambda_1 + \\lambda_2)$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour la loi géométrique, vérifier si elle est définie sur $\\mathbb{N}^*$ (rang du 1er succès : $E=1/p$) ou sur $\\mathbb{N}$ (nombre d'échecs avant le 1er succès : $E=(1-p)/p$) !"
    ],
    "flashcards": [
      {
        "q": "Que valent l'espérance et la variance d'une loi de Poisson $\\mathcal{P}(\\lambda)$ ?",
        "a": "$E(X) = \\lambda$ et $V(X) = \\lambda$."
      },
      {
        "q": "Pour deux variables indépendantes $X$ et $Y$, comment se calcule la fonction génératrice de $X+Y$ ?",
        "a": "$G_{X+Y}(t) = G_X(t) \\times G_Y(t)$."
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
      "title": "Déterminant et dilatation",
      "skill": "Propriétés algébriques du déterminant",
      "statement": "Soit $A \\in \\mathcal{M}_3(\\mathbb{R})$ telle que $\\det(A) = 5$. Que vaut $\\det(2A)$ ?",
      "options": [
        "$40$",
        "$10$",
        "$30$",
        "$8$"
      ],
      "correctIndex": 0,
      "answer": "$40$",
      "hint1": "Pour une matrice d'ordre $n$, $\\det(\\lambda A) = \\lambda^n \\det(A)$.",
      "hint2": "Ici $n = 3$ et $\\lambda = 2$, donc $2^3 \\times 5 = 8 \\times 5$.",
      "solution": "Comme $A \\in \\mathcal{M}_3(\\mathbb{R})$, $\\det(2A) = 2^3 \\det(A) = 8 \\times 5 = 40$."
    }
  ],
  "L2-RED1": [
    {
      "id": "L2-RED1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Condition suffisante de diagonalisabilité",
      "skill": "Tester la diagonalisabilité",
      "statement": "Une matrice carrée d'ordre 4 ayant 4 valeurs propres réelles distinctes est-elle diagonalisable dans $\\mathcal{M}_4(\\mathbb{R})$ ?",
      "options": [
        "Oui, toujours",
        "Non, jamais",
        "Seulement si elle est symétrique",
        "On ne peut pas savoir"
      ],
      "correctIndex": 0,
      "answer": "Oui, toujours",
      "hint1": "Si le nombre de valeurs propres distinctes égale la dimension de l'espace, la matrice est diagonalisable.",
      "hint2": "Chaque sous-espace propre est au moins de dimension 1, la somme des dimensions vaut 4.",
      "solution": "Une matrice de taille $n \\times n$ admettant $n$ valeurs propres distinctes est toujours diagonalisable."
    }
  ],
  "L2-RED2": [
    {
      "id": "L2-RED2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Cayley-Hamilton",
      "skill": "Appliquer Cayley-Hamilton",
      "statement": "Si le polynôme caractéristique d'une matrice $A$ est $P(X) = X^2 - 5X + 6$, quelle égalité matricielle vérifie $A$ ?",
      "options": [
        "$A^2 - 5A + 6I = 0$",
        "$A^2 - 5A + 6 = 0$",
        "$A^2 + 5A - 6I = 0$",
        "$A^2 = 5A$"
      ],
      "correctIndex": 0,
      "answer": "$A^2 - 5A + 6I = 0$",
      "hint1": "Le théorème de Cayley-Hamilton stipule que $P(A) = 0$.",
      "hint2": "N'oublie pas de remplacer la constante 6 par $6I$.",
      "solution": "Par le théorème de Cayley-Hamilton, tout endomorphisme annule son polynôme caractéristique : $A^2 - 5A + 6I_n = 0$."
    }
  ],
  "L2-DUA": [
    {
      "id": "L2-DUA-1",
      "tier": 1,
      "type": "mcq",
      "title": "Dimension de l'orthogonal dual",
      "skill": "Appliquer la formule de dimension duale",
      "statement": "Soit $E$ un espace vectoriel de dimension 5 et $F$ un sous-espace vectoriel de dimension 2. Quelle est la dimension de son orthogonal dual $F^\\circ$ ?",
      "options": [
        "$3$",
        "$2$",
        "$5$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$3$",
      "hint1": "Formule : $\\dim(F) + \\dim(F^\\circ) = \\dim(E)$.",
      "hint2": "$2 + \\dim(F^\\circ) = 5 \\implies \\dim(F^\\circ) = 3$.",
      "solution": "Par la relation de dimension duale, $\\dim(F^\\circ) = \\dim(E) - \\dim(F) = 5 - 2 = 3$."
    }
  ],
  "L2-PRE": [
    {
      "id": "L2-PRE-1",
      "tier": 1,
      "type": "mcq",
      "title": "Inégalité de Cauchy-Schwarz",
      "skill": "Appliquer Cauchy-Schwarz",
      "statement": "Dans un espace préhilbertien réel, si $\\|x\\| = 3$ et $\\|y\\| = 4$, quelle est la valeur maximale possible pour $\\langle x, y \\rangle$ ?",
      "options": [
        "$12$",
        "$7$",
        "$25$",
        "$1$"
      ],
      "correctIndex": 0,
      "answer": "$12$",
      "hint1": "L'inégalité de Cauchy-Schwarz donne $|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$.",
      "hint2": "$3 \\times 4 = 12$.",
      "solution": "Par l'inégalité de Cauchy-Schwarz, $|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\| = 3 \\times 4 = 12$, atteinte lorsque $x$ et $y$ sont colinéaires de même sens."
    }
  ],
  "L2-SYM": [
    {
      "id": "L2-SYM-1",
      "tier": 1,
      "type": "mcq",
      "title": "Nature des valeurs propres d'une matrice symétrique réelle",
      "skill": "Théorème spectral",
      "statement": "Que peut-on affirmer des valeurs propres d'une matrice symétrique réelle $A \\in \\mathcal{S}_n(\\mathbb{R})$ ?",
      "options": [
        "Elles sont toutes réelles",
        "Elles sont toutes strictement positives",
        "Elles peuvent être complexes non réelles",
        "Leur somme est toujours nulle"
      ],
      "correctIndex": 0,
      "answer": "Elles sont toutes réelles",
      "hint1": "C'est la première assertion du Théorème Spectral.",
      "hint2": "Si $A = {}^tA$, tout le spectre est contenu dans $\\mathbb{R}$.",
      "solution": "D'après le Théorème Spectral, toute matrice symétrique réelle n'admet que des valeurs propres réelles."
    }
  ],
  "L2-SER": [
    {
      "id": "L2-SER-1",
      "tier": 1,
      "type": "mcq",
      "title": "Série de Riemann",
      "skill": "Convergence d'une série de Riemann",
      "statement": "Pour quelle valeur de $\\alpha$ la série numérique $\\sum_{n=1}^{+\\infty} \\frac{1}{n^\\alpha}$ converge-t-elle ?",
      "options": [
        "$\\alpha > 1$",
        "$\\alpha \\ge 1$",
        "$\\alpha < 1$",
        "$\\alpha > 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\alpha > 1$",
      "hint1": "La série harmonique $\\sum 1/n$ (cas $\\alpha=1$) diverge.",
      "hint2": "La règle de Riemann impose $\\alpha > 1$ pour la convergence.",
      "solution": "La série de Riemann $\\sum \\frac{1}{n^\\alpha}$ converge si et seulement si $\\alpha > 1$."
    }
  ],
  "L2-RIE": [
    {
      "id": "L2-RIE-1",
      "tier": 1,
      "type": "mcq",
      "title": "Interversion limite et intégrale",
      "skill": "Théorème de convergence uniforme",
      "statement": "Quelle condition sur une suite de fonctions continues $(f_n)$ sur $[a ; b]$ permet d'affirmer que $\\lim \\int_a^b f_n = \\int_a^b \\lim f_n$ ?",
      "options": [
        "La convergence uniforme sur $[a ; b]$",
        "La convergence simple suffit",
        "La monotonie des $f_n$ uniquement",
        "Il n'est jamais possible d'intervertir"
      ],
      "correctIndex": 0,
      "answer": "La convergence uniforme sur $[a ; b]$",
      "hint1": "La convergence simple ne conserve pas nécessairement l'intégrale.",
      "hint2": "La convergence uniforme garantit $\\|f_n - f\\|_\\infty \\to 0$.",
      "solution": "La convergence uniforme sur le segment $[a ; b]$ garantit l'interversion de la limite et de l'intégrale de Riemann."
    }
  ],
  "L2-ING": [
    {
      "id": "L2-ING-1",
      "tier": 1,
      "type": "mcq",
      "title": "Intégrale de Riemann impropre en $+\\infty$",
      "skill": "Règle de convergence en l'infini",
      "statement": "L'intégrale $\\int_1^{+\\infty} \\frac{1}{t^3} dt$ est-elle convergente et quelle est sa valeur ?",
      "options": [
        "Convergente et vaut $1/2$",
        "Convergente et vaut $1/3$",
        "Divergente",
        "Convergente et vaut 1"
      ],
      "correctIndex": 0,
      "answer": "Convergente et vaut $1/2$",
      "hint1": "L'exposant $3 > 1$, donc elle converge.",
      "hint2": "Primitive : $\\left[ -\\frac{1}{2t^2} \\right]_1^{+\\infty} = 0 - (-1/2) = 1/2$.",
      "solution": "Comme $3 > 1$, l'intégrale converge. $\\int_1^{+\\infty} t^{-3} dt = \\left[ -\\frac{1}{2t^2} \\right]_1^{+\\infty} = \\frac{1}{2}$."
    }
  ],
  "L2-EDO": [
    {
      "id": "L2-EDO-1",
      "tier": 1,
      "type": "mcq",
      "title": "Équation caractéristique",
      "skill": "Résoudre une EDO d'ordre 2",
      "statement": "Quelles sont les solutions réelles de l'équation $y'' + 9y = 0$ ?",
      "options": [
        "$y(x) = C_1 \\cos(3x) + C_2 \\sin(3x)$",
        "$y(x) = C_1 e^{3x} + C_2 e^{-3x}$",
        "$y(x) = (C_1 x + C_2) e^{3x}$",
        "$y(x) = C_1 \\cos(9x) + C_2 \\sin(9x)$"
      ],
      "correctIndex": 0,
      "answer": "$y(x) = C_1 \\cos(3x) + C_2 \\sin(3x)$",
      "hint1": "L'équation caractéristique est $r^2 + 9 = 0 \\iff r = \\pm 3i$.",
      "hint2": "Les racines sont imaginaires pures : solutions harmoniques en $\\cos(3x)$ et $\\sin(3x)$.",
      "solution": "Les racines caractéristiques sont $\\pm 3i$. Les solutions sont donc $y(x) = C_1 \\cos(3x) + C_2 \\sin(3x)$."
    }
  ],
  "L2-PAR": [
    {
      "id": "L2-PAR-1",
      "tier": 1,
      "type": "mcq",
      "title": "Hypothèse de domination",
      "skill": "Comprendre le théorème de domination",
      "statement": "Dans le théorème de continuité d'une intégrale à paramètre $\\int_I f(x, t) dt$, que doit vérifier la fonction dominante $\\varphi(t)$ ?",
      "options": [
        "$|f(x, t)| \\le \\varphi(t)$ avec $\\varphi$ intégrable et indépendante de $x$",
        "$\\varphi$ peut dépendre de $x$ tant qu'elle est bornée",
        "$\\varphi(t) = f(x, t)$",
        "$\\varphi$ doit être constante"
      ],
      "correctIndex": 0,
      "answer": "$|f(x, t)| \\le \\varphi(t)$ avec $\\varphi$ intégrable et indépendante de $x$",
      "hint1": "La domination doit être uniforme par rapport au paramètre $x$.",
      "hint2": "La fonction $\\varphi$ ne doit dépendre que de la variable d'intégration $t$.",
      "solution": "L'hypothèse de domination exige l'existence d'une fonction $\\varphi$ intégrable sur $I$ indépendante de $x$ majorant $|f(x,t)|$."
    }
  ],
  "L2-MUL": [
    {
      "id": "L2-MUL-1",
      "tier": 1,
      "type": "mcq",
      "title": "Jacobien du passage en coordonnées polaires",
      "skill": "Changement de variable polaire",
      "statement": "Quel est le facteur jacobien apparaissant dans l'élément différentiel lors du passage en coordonnées polaires ?",
      "options": [
        "$r$",
        "$r^2$",
        "$1$",
        "$\\frac{1}{r}$"
      ],
      "correctIndex": 0,
      "answer": "$r$",
      "hint1": "Le déterminant de la matrice jacobienne $\\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix}$ vaut $r(\\cos^2\\theta + \\sin^2\\theta)$.",
      "hint2": "$dx dy = r \\, dr \\, d\\theta$.",
      "solution": "Le jacobien de la transformation polaire est $r$, d'où $dx dy = r \\, dr \\, d\\theta$."
    }
  ],
  "L2-CRB": [
    {
      "id": "L2-CRB-1",
      "tier": 1,
      "type": "mcq",
      "title": "Formule de Frenet pour le vecteur tangent",
      "skill": "Formules de Frenet planes",
      "statement": "Soit un arc paramétré par son abscisse curviligne $s$. Que vaut $\\frac{d\\vec{T}}{ds}$ selon la première formule de Frenet ?",
      "options": [
        "$\\gamma \\vec{N}$",
        "$-\\gamma \\vec{N}$",
        "$\\vec{0}$",
        "$\\frac{1}{\\gamma} \\vec{N}$"
      ],
      "correctIndex": 0,
      "answer": "$\\gamma \\vec{N}$",
      "hint1": "La variation du vecteur tangent unitaire est proportionnelle au vecteur normal $\\vec{N}$.",
      "hint2": "Le coefficient de proportionnalité est la courbure algébrique $\\gamma$.",
      "solution": "La première formule de Frenet plane est $\\frac{d\\vec{T}}{ds} = \\gamma \\vec{N}$."
    }
  ],
  "L2-PRB": [
    {
      "id": "L2-PRB-1",
      "tier": 1,
      "type": "mcq",
      "title": "Espérance d'une loi géométrique",
      "skill": "Loi géométrique sur $\\mathbb{N}^*$",
      "statement": "Soit $X \\sim \\mathcal{G}(p)$ le rang du premier succès dans des tirages de Bernoulli de paramètre $p \\in ]0 ; 1]$. Quelle est l'espérance de $X$ ?",
      "options": [
        "$\\frac{1}{p}$",
        "$\\frac{1-p}{p}$",
        "$p$",
        "$\\frac{1}{p^2}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{p}$",
      "hint1": "Pour une pièce équilibrée ($p=1/2$), on attend en moyenne 2 lancers.",
      "hint2": "$E(X) = \\sum_{k=1}^{+\\infty} k p (1-p)^{k-1} = \\frac{1}{p}$.",
      "solution": "Pour une variable géométrique à valeurs dans $\\mathbb{N}^*$, l'espérance est $E(X) = \\frac{1}{p}$."
    }
  ],
  "L2-CAL": [
    {
      "id": "L2-CAL-1",
      "tier": 1,
      "type": "mcq",
      "title": "Gradient et dérivées partielles",
      "skill": "Calculer le vecteur gradient $\\nabla f$",
      "statement": "Pour $f(x, y) = x^2 y + 3y^2$, quel est le gradient $\\nabla f(1 ; 2)$ ?",
      "options": [
        "$(4 ; 13)$",
        "$(2 ; 12)$",
        "$(4 ; 12)$",
        "$(2 ; 13)$"
      ],
      "correctIndex": 0,
      "answer": "$(4 ; 13)$",
      "hint1": "$\\frac{\\partial f}{\\partial x} = 2xy$ et $\\frac{\\partial f}{\\partial y} = x^2 + 6y$.",
      "hint2": "En $(1 ; 2)$ : $2(1)(2) = 4$ et $1^2 + 6(2) = 1 + 12 = 13$.",
      "solution": "$\\frac{\\partial f}{\\partial x}(1,2) = 2(1)(2) = 4$ et $\\frac{\\partial f}{\\partial y}(1,2) = 1^2 + 6(2) = 13$. Donc $\\nabla f(1,2) = (4 ; 13)$."
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

