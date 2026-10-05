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

