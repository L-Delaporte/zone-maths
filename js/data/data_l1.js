/**
 * Données pédagogiques universitaires de Licence 1 de Mathématiques (S1 & S2)
 * Synthétisant les enseignements magistraux et travaux dirigés d'Algèbre et d'Analyse
 */

window.MATHS_COURSES_L1 = {
  "L1-LOG": {
    "title": "L1-LOG : Logique mathématique, quantificateurs et théorie des ensembles",
    "domain": "Algèbre Fondamentale",
    "objectives": [
      "Maîtriser les connecteurs logiques, tables de vérité et quantificateurs universel $\\forall$ et existentiel $\\exists$.",
      "Mettre en œuvre les modes de raisonnement formels : contraposition, absurde, disjonction des cas, récurrence forte.",
      "Définir rigoureusement les notions d'application, injection, surjection, bijection et image directe/réciproque.",
      "Définir une relation d'équivalence, classe d'équivalence, ensemble quotient et relation d'ordre."
    ],
    "keyPoints": [
      {
        "title": "1. Quantificateurs et règles de négation formelle",
        "content": "• **Quantificateur universel $\\forall$** (« pour tout ») et **existentiel $\\exists$** (« il existe au moins un »).\n• **Négation d'assertions quantifiées** :\n$$\\neg(\\forall x \\in E, P(x)) \\iff \\exists x \\in E, \\neg P(x)$$\n$$\\neg(\\exists x \\in E, P(x)) \\iff \\forall x \\in E, \\neg P(x)$$\n• **Implication et contraposition** : L'assertion $P \\implies Q$ est logiquement équivalente à sa contraposée $\\neg Q \\implies \\neg P$.\n• **Négation de l'implication** : $\\neg(P \\implies Q) \\iff P \\text{ et } \\neg Q$."
      },
      {
        "title": "2. Applications : Injectivité, Surjectivité et Bijectivité",
        "content": "Soit $f : E \\to F$ une application entre deux ensembles :\n• **$f$ est injective** si tout élément du but admet au plus un antécédent dans la source :\n$$\\forall x, x' \\in E, \\quad f(x) = f(x') \\implies x = x'$$\n• **$f$ est surjective** si tout élément du but admet au moins un antécédent :\n$$\\forall y \\in F, \\quad \\exists x \\in E, \\quad y = f(x)$$\n• **$f$ est bijective** si elle est à la fois injective et surjective (tout élément de $F$ a un unique antécédent). Il existe alors une unique application réciproque $f^{-1} : F \\to E$ telle que $f^{-1} \\circ f = \\text{Id}_E$ et $f \\circ f^{-1} = \\text{Id}_F$.\n• **Images directe et réciproque** : Pour $A \\subset E$, $f(A) = \\{f(x) \\mid x \\in A\\}$. Pour $B \\subset F$, $f^{-1}(B) = \\{x \\in E \\mid f(x) \\in B\\}$."
      },
      {
        "title": "3. Relations d'équivalence, classes et ensemble quotient",
        "content": "Une relation binaire $\\sim$ sur un ensemble $E$ est une **relation d'équivalence** si elle est :\n1. **Réflexive** : $\\forall x \\in E, x \\sim x$.\n2. **Symétrique** : $\\forall x, y \\in E, x \\sim y \\implies y \\sim x$.\n3. **Transitive** : $\\forall x, y, z \\in E, (x \\sim y \\text{ et } y \\sim z) \\implies x \\sim z$.\n\n• **Classe d'équivalence** : Pour $x \\in E$, $\\text{cl}(x) = \\bar{x} = \\{y \\in E \\mid y \\sim x\\}$.\n• **Partition** : Les classes d'équivalence forment une partition de $E$ (deux classes sont soit disjointes, soit confondues, et leur réunion est $E$).\n• **Ensemble quotient** : $E/\\sim$ est l'ensemble des classes d'équivalence."
      },
      {
        "title": "4. Relations d'ordre et bornes",
        "content": "Une relation $\\le$ sur $E$ est une **relation d'ordre** si elle est réflexive, transitive et **antisymétrique** ($\\forall x, y \\in E, (x \\le y \\text{ et } y \\le x) \\implies x = y$).\n• L'ordre est **total** si $\\forall x, y \\in E$, $x \\le y$ ou $y \\le x$ ; il est **partiel** sinon (ex: l'inclusion $\\subset$ sur $\\mathcal{P}(E)$).\n• Un élément $m \\in A$ est le **plus petit élément** (minimum) si $\\forall x \\in A, m \\le x$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer l'injectivité d'une application",
        "example": "Soit $f : \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{3\\}$ définie par $f(x) = \\frac{3x - 1}{x - 2}$. Démontrer que $f$ est injective.",
        "steps": [
          "**Étape 1 (Hypothèse)** : Soient $x, x' \\in \\mathbb{R} \\setminus \\{2\\}$ tels que $f(x) = f(x')$.",
          "**Étape 2 (Développement)** : $\\frac{3x - 1}{x - 2} = \\frac{3x' - 1}{x' - 2} \\iff (3x - 1)(x' - 2) = (3x' - 1)(x - 2)$.",
          "**Étape 3 (Simplification)** : $3xx' - 6x - x' + 2 = 3x'x - 6x' - x + 2 \\iff -6x - x' = -6x' - x \\iff -5x = -5x' \\iff x = x'$.",
          "**Conclusion** : L'application $f$ est injective."
        ]
      },
      {
        "title": "Méthode : Démontrer la surjectivité d'une application",
        "example": "Soit $f : \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{3\\}$ définie par $f(x) = \\frac{3x - 1}{x - 2}$. Démontrer que $f$ est surjective.",
        "steps": [
          "**Étape 1 (Fixer l'élément d'arrivée)** : Soit $y \\in \\mathbb{R} \\setminus \\{3\\}$ un élément quelconque fixé. On cherche s'il existe au moins un antécédent $x \\in \\mathbb{R} \\setminus \\{2\\}$ tel que $f(x) = y$.",
          "**Étape 2 (Résoudre l'équation $f(x) = y$)** : $\\frac{3x - 1}{x - 2} = y \\iff 3x - 1 = y(x - 2) \\iff 3x - 1 = yx - 2y \\iff 3x - yx = 1 - 2y \\iff x(3 - y) = 1 - 2y$.",
          "**Étape 3 (Isoler l'inconnue $x$)** : Comme $y \\in \\mathbb{R} \\setminus \\{3\\}$, on a $y \\neq 3$, donc $3 - y \\neq 0$. On peut diviser par $3 - y$ :\n$$x = \\frac{1 - 2y}{3 - y} = \\frac{2y - 1}{y - 3}$$",
          "**Étape 4 (Vérifier l'appartenance à l'ensemble de départ)** : On vérifie que $x \\in \\mathbb{R} \\setminus \\{2\\}$, c'est-à-dire que $x \\neq 2$. Par l'absurde, si $x = 2$, alors $\\frac{2y - 1}{y - 3} = 2 \\iff 2y - 1 = 2(y - 3) = 2y - 6 \\iff -1 = -6$, ce qui est absurde. Donc $x \\neq 2$.",
          "**Conclusion** : Pour tout $y \\in \\mathbb{R} \\setminus \\{3\\}$, il existe bien un antécédent $x = \\frac{2y - 1}{y - 3} \\in \\mathbb{R} \\setminus \\{2\\}$ tel que $f(x) = y$. L'application $f$ est donc surjective (et comme cet antécédent est unique, $f$ est bijective avec $f^{-1}(y) = \\frac{2y - 1}{y - 3}$)."
        ]
      }
    ],
    "traps": [
      "⚠️ L'ordre des quantificateurs est crucial : $\\forall x, \\exists y, P(x, y)$ n'est PAS équivalent à $\\exists y, \\forall x, P(x, y)$ !",
      "⚠️ La négation de $P \\implies Q$ est $P \\text{ et } \\neg Q$ (et non $\\neg P \\implies \\neg Q$).",
      "⚠️ Pour la surjectivité, ne jamais oublier de vérifier que la solution $x$ trouvée appartient bien à l'ensemble de départ $E$ (par exemple $x \\neq 2$) !"
    ],
    "flashcards": [
      {
        "q": "Quelle est la négation formelle de « $\\forall x \\in E, \\exists y \\in F, f(x) = y$ » ?",
        "a": "$\\exists x \\in E, \\forall y \\in F, f(x) \\neq y$."
      },
      {
        "q": "Comment démontrer qu'une application $f : E \\to F$ est surjective ?",
        "a": "On fixe un élément quelconque $y \\in F$ (ensemble d'arrivée), puis on résout l'équation $f(x) = y$ d'inconnue $x$ et on démontre qu'elle admet au moins une solution $x \\in E$ (ensemble de départ)."
      },
      {
        "q": "Quelles sont les trois propriétés définissant une relation d'équivalence ?",
        "a": "Réflexivité ($x \\sim x$), symétrie ($x \\sim y \\implies y \\sim x$) et transitivité ($x \\sim y$ et $y \\sim z \\implies x \\sim z$)."
      }
    ]
  },
  "L1-MAT": {
    "title": "L1-MAT : Calcul matriciel, systèmes linéaires et pivot de Gauss",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Maîtriser l'espace vectoriel $\\mathcal{M}_{n,p}(\\mathbb{K})$ et l'anneau $(\\mathcal{M}_n(\\mathbb{K}), +, \\times)$.",
      "Pratiquer l'algorithme du pivot de Gauss pour échelonner et résoudre tout système linéaire $AX = B$.",
      "Calculer l'inverse d'une matrice carrée inversible par la méthode de Gauss-Jordan $(A \\mid I_n) \\to (I_n \\mid A^{-1})$.",
      "Maîtriser la transposition, la trace et le calcul de déterminants $2 \\times 2$ et $3 \\times 3$."
    ],
    "keyPoints": [
      {
        "title": "1. Structure des matrices et opérations fondamentales",
        "content": "• L'ensemble $\\mathcal{M}_{n,p}(\\mathbb{K})$ est un $\\mathbb{K}$-espace vectoriel de dimension $n \\times p$.\n• Si $n = p$, $(\\mathcal{M}_n(\\mathbb{K}), +, \\times)$ est un anneau unitaire non commutatif pour $n \\ge 2$.\n• **Transposition** : Pour $A \\in \\mathcal{M}_{n,p}(\\mathbb{K})$, sa transposée ${}^t A \\in \\mathcal{M}_{p,n}(\\mathbb{K})$ vérifie ${}^t(AB) = {}^t B \\, {}^t A$ et ${}^t({}^t A) = A$.\n  - $A$ est **symétrique** si ${}^t A = A$ ; **antisymétrique** si ${}^t A = -A$.\n• **Trace** : Pour $A = (a_{ij}) \\in \\mathcal{M}_n(\\mathbb{K})$, $\\text{Tr}(A) = \\sum_{i=1}^n a_{ii}$. La trace est linéaire et vérifie $\\text{Tr}(AB) = \\text{Tr}(BA)$."
      },
      {
        "title": "2. Opérations élémentaires sur les lignes (Pivot de Gauss)",
        "content": "Les trois opérations élémentaires qui préservent l'ensemble des solutions d'un système linéaire sont :\n1. Échange de deux lignes : $L_i \\leftrightarrow L_j$\n2. Multiplication d'une ligne par un scalaire non nul : $L_i \\leftarrow \\lambda L_i$ ($\\lambda \\neq 0$)\n3. Ajout à une ligne d'un multiple d'une autre : $L_i \\leftarrow L_i + \\mu L_j$ ($j \\neq i$)\n\n• **Matrice échelonnée** : Le nombre de zéros en début de ligne augmente strictement à chaque ligne non nulle. Les premiers coefficients non nuls sont appelés les **pivots**."
      },
      {
        "title": "3. Inversion de matrices (Algorithme de Gauss-Jordan)",
        "content": "Une matrice carrée $A \\in \\mathcal{M}_n(\\mathbb{K})$ est inversible ssi son rang vaut $n$.\n• **Méthode de Gauss-Jordan** : On forme la matrice augmentée $(A \\mid I_n)$. En appliquant les opérations élémentaires sur les lignes pour transformer la partie gauche en $I_n$, la partie droite devient l'inverse $A^{-1}$ :\n$$(A \\mid I_n) \\xrightarrow{\\text{Gauss-Jordan}} (I_n \\mid A^{-1})$$\n• **Formule explicite $2 \\times 2$** : Si $\\det(A) = ad - bc \\neq 0$, alors :\n$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Inverser une matrice $2 \\times 2$ avec le pivot de Gauss",
        "example": "Inverser la matrice $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$.",
        "steps": [
          "**Matrice augmentée** : $\\begin{pmatrix} 2 & 1 & \\mid & 1 & 0 \\\\ 5 & 3 & \\mid & 0 & 1 \\end{pmatrix}$.",
          "**Élimination ligne 2** : $L_2 \\leftarrow 2L_2 - 5L_1$ : $\\begin{pmatrix} 2 & 1 & \\mid & 1 & 0 \\\\ 0 & 1 & \\mid & -5 & 2 \\end{pmatrix}$.",
          "**Élimination ligne 1** : $L_1 \\leftarrow L_1 - L_2$ : $\\begin{pmatrix} 2 & 0 & \\mid & 6 & -2 \\\\ 0 & 1 & \\mid & -5 & 2 \\end{pmatrix}$.",
          "**Normalisation ligne 1** : $L_1 \\leftarrow \\frac{1}{2}L_1$ : $\\begin{pmatrix} 1 & 0 & \\mid & 3 & -1 \\\\ 0 & 1 & \\mid & -5 & 2 \\end{pmatrix}$.",
          "**Conclusion** : $A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Le produit matriciel n'est **pas commutatif** : en général, $AB \\neq BA$ !",
      "⚠️ $AB = 0$ n'implique pas que $A = 0$ ou $B = 0$ (il existe des diviseurs de zéro dans $\\mathcal{M}_n(\\mathbb{K})$)."
    ],
    "flashcards": [
      {
        "q": "Le produit matriciel est-il commutatif dans $\\mathcal{M}_n(\\mathbb{R})$ ($n \\ge 2$) ?",
        "a": "Non, en général $AB \\neq BA$."
      },
      {
        "q": "Quelle est la transposée du produit matriciel ${}^t(AB)$ ?",
        "a": "${}^t(AB) = {}^t B \\, {}^t A$ (inversion de l'ordre des facteurs)."
      }
    ]
  },
  "L1-EV1": {
    "title": "L1-EV1 : Espaces vectoriels, sous-espaces et bases en dimension finie",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Connaître la définition axiomatique complète d'un $\\mathbb{K}$-espace vectoriel.",
      "Vérifier qu'un sous-ensemble est un sous-espace vectoriel (SEV) : non vide, stable par combinaison linéaire.",
      "Définir et manipuler les notions de famille libre, famille génératrice, base et sous-espace engendré.",
      "Énoncer le Théorème de la base incomplète et le Théorème de la dimension finie.",
      "Appliquer la formule de Grassmann pour deux sous-espaces : $\\dim(F + G) = \\dim(F) + \\dim(G) - \\dim(F \\cap G)$."
    ],
    "keyPoints": [
      {
        "title": "1. Définition axiomatique d'un K-espace vectoriel",
        "content": "Soit $\\mathbb{K}$ un corps commutatif (typiquement $\\mathbb{R}$ ou $\\mathbb{C}$). Un **$\\mathbb{K}$-espace vectoriel** est un ensemble non vide $E$ muni de deux lois :\n• Une loi de composition interne $+ : E \\times E \\to E$ telle que $(E, +)$ est un **groupe commutatif (abélien)** :\n  1. **Associativité** : $\\forall u, v, w \\in E, (u + v) + w = u + (v + w)$.\n  2. **Élément neutre** : $\\exists 0_E \\in E, \\forall u \\in E, u + 0_E = u$.\n  3. **Symétrique (opposé)** : $\\forall u \\in E, \\exists (-u) \\in E, u + (-u) = 0_E$.\n  4. **Commutativité** : $\\forall u, v \\in E, u + v = v + u$.\n• Une loi de composition externe $\\cdot : \\mathbb{K} \\times E \\to E$ vérifiant les 4 axiomes de compatibilité :\n  1. **Distributivité scalaire/vecteurs** : $\\forall \\lambda \\in \\mathbb{K}, \\forall u, v \\in E, \\lambda \\cdot (u + v) = \\lambda \\cdot u + \\lambda \\cdot v$.\n  2. **Distributivité scalaires/vecteur** : $\\forall \\lambda, \\mu \\in \\mathbb{K}, \\forall u \\in E, (\\lambda + \\mu) \\cdot u = \\lambda \\cdot u + \\mu \\cdot u$.\n  3. **Associativité mixte** : $\\forall \\lambda, \\mu \\in \\mathbb{K}, \\forall u \\in E, (\\lambda \\mu) \\cdot u = \\lambda \\cdot (\\mu \\cdot u)$.\n  4. **Neutre du corps** : $\\forall u \\in E, 1_{\\mathbb{K}} \\cdot u = u$."
      },
      {
        "title": "2. Sous-espaces vectoriels (SEV) et sous-espace engendré",
        "content": "Soit $E$ un $\\mathbb{K}$-espace vectoriel. Une partie $F \\subset E$ est un **sous-espace vectoriel** ssi :\n1. $F \\neq \\emptyset$ (ou de façon équivalente $0_E \\in F$).\n2. $F$ est stable par combinaison linéaire : $\\forall u, v \\in F, \\forall \\lambda, \\mu \\in \\mathbb{K}, \\lambda u + \\mu v \\in F$.\n\n• **Sous-espace engendré $\\text{Vect}(\\mathcal{F})$** : Pour toute famille $\\mathcal{F} = (v_1, \\dots, v_p)$ de vecteurs de $E$, le sous-espace engendré $\\text{Vect}(v_1, \\dots, v_p)$ est l'ensemble de toutes les combinaisons linéaires :\n$$\\text{Vect}(v_1, \\dots, v_p) = \\left\\{\\sum_{i=1}^p \\lambda_i v_i \\;\\middle|\\; \\lambda_1, \\dots, \\lambda_p \\in \\mathbb{K}\\right\\}$$\nC'est le plus petit sous-espace vectoriel de $E$ contenant $\\{v_1, \\dots, v_p\\}$."
      },
      {
        "title": "3. Familles libres, génératrices et Bases",
        "content": "Soit $\\mathcal{F} = (e_1, \\dots, e_p)$ une famille finie de vecteurs de $E$ :\n• **Famille libre** (vecteurs linéairement indépendants) :\n$$\\forall \\lambda_1, \\dots, \\lambda_p \\in \\mathbb{K}, \\quad \\sum_{i=1}^p \\lambda_i e_i = 0_E \\implies \\lambda_1 = \\lambda_2 = \\dots = \\lambda_p = 0$$\n• **Famille génératrice** : $\\text{Vect}(e_1, \\dots, e_p) = E$.\n• **Base** : Une famille est une base si elle est à la fois libre et génératrice. Tout vecteur $x \\in E$ se décompose alors de manière **unique** dans cette base : $x = \\sum_{i=1}^n x_i e_i$.\n• **Théorème de la base incomplète** : De toute famille génératrice, on peut extraire une base. Toute famille libre peut être complétée en une base de $E$."
      },
      {
        "title": "4. Dimension finie et Formule de Grassmann",
        "content": "• Si $E$ admet une base à $n$ éléments, toutes ses bases ont $n$ éléments, et $\\dim(E) = n$.\n• En dimension finie $n = \\dim(E)$ : toute famille libre de $n$ vecteurs est une base ; toute famille génératrice de $n$ vecteurs est une base.\n• **Formule de Grassmann** : Pour tous sous-espaces vectoriels $F$ et $G$ de dimension finie :\n$$\\dim(F + G) = \\dim(F) + \\dim(G) - \\dim(F \\cap G)$$\n• **Somme directe** : $F$ et $G$ sont en somme directe, notée $F \\oplus G$, ssi $F \\cap G = \\{0_E\\} \\iff \\dim(F + G) = \\dim(F) + \\dim(G)$.\n• Deux sous-espaces sont **supplémentaires** si $E = F \\oplus G$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer qu'un ensemble est un espace vectoriel ou un sous-espace vectoriel (SEV)",
        "example": "Soit $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - y + 3z = 0\\}$. Montrer que $F$ est un sous-espace vectoriel de $\\mathbb{R}^3$, puis vérifier si $G = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - y + 3z = 4\\}$ est un SEV.",
        "steps": [
          "**Voie prioritaire (Caractérisation d'un SEV)** : Pour montrer qu'un ensemble $F$ est un $\\mathbb{K}$-espace vectoriel, on démontre presque toujours que c'est un sous-espace vectoriel d'un espace vectoriel de référence déjà connu ($E = \\mathbb{R}^n, \\mathcal{M}_{n,p}(\\mathbb{K}), \\mathbb{K}[X]$, etc.).",
          "**Étape 1 (Inclusion)** : Vérifier que $F$ est une partie de l'espace vectoriel ambiant : ici $F \\subset \\mathbb{R}^3$.",
          "**Étape 2 (Vecteur nul non vide)** : Tester si le vecteur nul appartient à $F$ : pour $(x, y, z) = (0, 0, 0)$, on a $2(0) - 0 + 3(0) = 0$, donc $0_{\\mathbb{R}^3} \\in F$. L'ensemble est non vide.",
          "**Étape 3 (Stabilité par combinaison linéaire)** : Soient $u = (x_1, y_1, z_1) \\in F$, $v = (x_2, y_2, z_2) \\in F$ et $\\lambda, \\mu \\in \\mathbb{R}$. Posons $w = \\lambda u + \\mu v = (\\lambda x_1 + \\mu x_2, \\lambda y_1 + \\mu y_2, \\lambda z_1 + \\mu z_2)$.\nOn calcule : $2(\\lambda x_1 + \\mu x_2) - (\\lambda y_1 + \\mu y_2) + 3(\\lambda z_1 + \\mu z_2) = \\lambda(2x_1 - y_1 + 3z_1) + \\mu(2x_2 - y_2 + 3z_2) = \\lambda(0) + \\mu(0) = 0$. Donc $w \\in F$. $F$ est un SEV de $\\mathbb{R}^3$.",
          "**Contre-exemple (Le test du vecteur nul élimine $G$)** : Pour $G$, $2(0) - 0 + 3(0) = 0 \\neq 4$, donc $0_{\\mathbb{R}^3} \\notin G$. $G$ n'est PAS un sous-espace vectoriel (c'est un plan affine ne passant pas par l'origine).",
          "**Voie alternative (Noyau ou sous-espace engendré)** : Reconnaitre $F = \\text{Ker}(\\varphi)$ où $\\varphi : (x, y, z) \\mapsto 2x - y + 3z$ est une forme linéaire (donc $F$ est un SEV en tant que noyau d'un morphisme), ou écrire $F = \\text{Vect}(v_1, \\dots, v_p)$."
        ]
      },
      {
        "title": "Méthode : Démontrer qu'une famille de 3 vecteurs est libre",
        "example": "Soit $E = \\mathbb{R}^3$. La famille $\\mathcal{F} = (u_1, u_2, u_3)$ avec $u_1(1;1;0), u_2(0;1;1), u_3(1;0;1)$ est-elle libre ?",
        "steps": [
          "**Étape 1 (Combinaison linéaire nulle)** : Soient $a, b, c \\in \\mathbb{R}$ tels que $a u_1 + b u_2 + c u_3 = (0;0;0)$.",
          "**Étape 2 (Système)** : $\\begin{cases} a + c = 0 \\\\ a + b = 0 \\\\ b + c = 0 \\end{cases}$.",
          "**Étape 3 (Résolution)** : $a = -c$, donc $-c + b = 0 \\implies b = c$. Alors $b + c = 0 \\implies 2c = 0 \\implies c = 0$. On en déduit $a = 0$ et $b = 0$.",
          "**Conclusion** : L'unique solution est $a = b = c = 0$. La famille $\\mathcal{F}$ est libre."
        ]
      }
    ],
    "traps": [
      "⚠️ Une famille contenant le vecteur nul $0_E$ n'est JAMAIS libre !",
      "⚠️ Ne pas confondre union $F \\cup G$ (qui n'est presque jamais un SEV) et somme $F + G$ (qui est toujours un SEV)."
    ],
    "flashcards": [
      {
        "q": "Quels sont les axiomes caractérisant un sous-espace vectoriel F d'un K-ev E ?",
        "a": "$0_E \\in F$ et $\\forall u, v \\in F, \\forall \\lambda, \\mu \\in \\mathbb{K}, \\lambda u + \\mu v \\in F$ (non vide et stable par combinaisons linéaires)."
      },
      {
        "q": "Énoncer la formule de Grassmann pour la dimension de la somme de deux sous-espaces.",
        "a": "$\\dim(F + G) = \\dim(F) + \\dim(G) - \\dim(F \\cap G)$."
      }
    ]
  },
  "L1-APP": {
    "title": "L1-APP : Applications linéaires et Théorème du Rang",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Définir rigoureusement une application linéaire $f \\in \\mathcal{L}(E, F)$ et les sous-espaces noyau et image.",
      "Définir par compréhension le noyau $\\text{Ker}(f) = \\{u \\in E \\mid f(u) = 0_F\\}$ et l'image $\\text{Im}(f) = \\{f(u) \\mid u \\in E\\}$.",
      "Énoncer et appliquer le critère d'injectivité ($\\text{Ker}(f) = \\{0_E\\}$) et de surjectivité ($\\text{Im}(f) = F$).",
      "Énoncer et démontrer le Théorème du Rang : $\\dim(E) = \\dim(\\text{Ker} f) + \\text{rg}(f)$.",
      "Représenter une application linéaire par une matrice et appliquer la formule de changement de base."
    ],
    "keyPoints": [
      {
        "title": "1. Définition d'une application linéaire",
        "content": "Soient $E$ et $F$ deux $\\mathbb{K}$-espaces vectoriels. Une application $f : E \\to F$ est dite **linéaire** (ou un **morphisme d'espaces vectoriels**) si elle préserve les combinaisons linéaires :\n$$\\forall u, v \\in E, \\quad \\forall \\lambda, \\mu \\in \\mathbb{K}, \\quad f(\\lambda u + \\mu v) = \\lambda f(u) + \\mu f(v)$$\n• En particulier, $f(0_E) = 0_F$ et $f(-u) = -f(u)$.\n• L'ensemble des applications linéaires de $E$ dans $F$ est noté $\\mathcal{L}(E, F)$. Si $E = F$, on parle d'**endomorphisme**, et $\\mathcal{L}(E)$ est une algèbre associative unitaire.\n• Un morphisme bijectif est un **isomorphisme** (et un **automorphisme** si $E = F$)."
      },
      {
        "title": "2. Définitions formelles du Noyau Ker(f) et de l'Image Im(f)",
        "content": "Soit $f \\in \\mathcal{L}(E, F)$ une application linéaire :\n• **Noyau de $f$** : C'est l'ensemble de tous les vecteurs de $E$ dont l'image par $f$ est le vecteur nul de $F$ :\n$$\\text{Ker}(f) = \\{x \\in E \\mid f(x) = 0_F\\} = f^{-1}(\\{0_F\\})$$\n  - $\\text{Ker}(f)$ est un sous-espace vectoriel de l'espace de départ $E$.\n• **Image de $f$** : C'est l'ensemble des vecteurs de $F$ qui possèdent au moins un antécédent dans $E$ :\n$$\\text{Im}(f) = \\{y \\in F \\mid \\exists x \\in E, y = f(x)\\} = f(E) = \\text{Vect}(f(e_1), \\dots, f(e_n))$$\n  - $\\text{Im}(f)$ est un sous-espace vectoriel de l'espace d'arrivée $F$.\n  - La dimension de $\\text{Im}(f)$ est appelée le **rang** de $f$, noté $\\text{rg}(f) = \\dim(\\text{Im} f)$."
      },
      {
        "title": "3. Critères d'injectivité, de surjectivité et de bijectivité",
        "content": "• **Critère fondamental d'injectivité** :\n$$f \\text{ est injective} \\iff \\text{Ker}(f) = \\{0_E\\}$$\n*(Preuve : si $\\text{Ker} f = \\{0\\}$, alors $f(u) = f(v) \\implies f(u - v) = 0 \\implies u - v \\in \\text{Ker} f \\implies u - v = 0 \\implies u = v$)*.\n• **Critère de surjectivité** :\n$$f \\text{ est surjective} \\iff \\text{Im}(f) = F \\iff \\text{rg}(f) = \\dim(F)$$\n• **Isomorphisme** : $f$ est un isomorphisme ssi $\\text{Ker}(f) = \\{0_E\\}$ et $\\text{Im}(f) = F$."
      },
      {
        "title": "4. Théorème du Rang et représentation matricielle",
        "content": "• **Théorème du Rang (Théorème fondamental de l'algèbre linéaire)** :\nSoit $E$ de **dimension finie** et $f \\in \\mathcal{L}(E, F)$ :\n$$\\dim(E) = \\dim(\\text{Ker} f) + \\dim(\\text{Im} f) = \\dim(\\text{Ker} f) + \\text{rg}(f)$$\n• **Corollaire aux espaces de même dimension** : Si $\\dim(E) = \\dim(F) < +\\infty$, alors :\n$$f \\text{ injective} \\iff f \\text{ surjective} \\iff f \\text{ bijective}$$\n• **Matrice associée** : Si $\\mathcal{B}$ est une base de $E$ et $\\mathcal{C}$ une base de $F$, la $j$-ème colonne de $\\text{Mat}_{\\mathcal{B}, \\mathcal{C}}(f)$ contient les coordonnées de $f(e_j)$ dans la base $\\mathcal{C}$.\n• **Changement de base** : $M' = P^{-1} M P$ pour un endomorphisme ($P$ étant la matrice de passage)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver une base du noyau et de l'image",
        "example": "Soit $f : \\mathbb{R}^3 \\to \\mathbb{R}^2$ définie par $f(x, y, z) = (x - y, y - z)$.",
        "steps": [
          "**Noyau** : $(x, y, z) \\in \\text{Ker}(f) \\iff \\begin{cases} x - y = 0 \\\\ y - z = 0 \\end{cases} \\iff x = y = z$. Donc $\\text{Ker}(f) = \\text{Vect}((1, 1, 1))$. $\\dim(\\text{Ker} f) = 1$.",
          "**Théorème du rang** : $\\dim(\\text{Im} f) = \\dim(\\mathbb{R}^3) - \\dim(\\text{Ker} f) = 3 - 1 = 2$.",
          "**Conclusion** : Comme $\\dim(\\text{Im} f) = 2 = \\dim(\\mathbb{R}^2)$, $f$ est surjective et $\\text{Im}(f) = \\mathbb{R}^2$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans le théorème du rang, la dimension à gauche est celle de **l'espace de départ** $\\dim(E)$, et non celle de l'espace d'arrivée $\\dim(F)$ !",
      "⚠️ L'équivalence entre injectivité et surjectivité n'est vraie qu'en dimension finie lorsque $\\dim(E) = \\dim(F)$."
    ],
    "flashcards": [
      {
        "q": "Donner la définition mathématique ensembliste de Ker(f) pour f dans L(E, F).",
        "a": "$\\text{Ker}(f) = \\{x \\in E \\mid f(x) = 0_F\\} = f^{-1}(\\{0_F\\})$."
      },
      {
        "q": "Énoncer le Théorème du Rang pour f dans L(E, F) avec dim(E) finie.",
        "a": "$\\dim(E) = \\dim(\\text{Ker} f) + \\text{rg}(f)$."
      }
    ]
  },
  "L1-REL": {
    "title": "L1-REL : Corps des nombres réels, propriété de la borne supérieure et topologie de R",
    "domain": "Analyse Réelle",
    "objectives": [
      "Définir la borne supérieure (sup) et la borne inférieure (inf) d'une partie non vide de $\\mathbb{R}$.",
      "Énoncer l'axiome de la borne supérieure et la propriété d'Archimède.",
      "Démontrer la densité de $\\mathbb{Q}$ et de $\\mathbb{R} \\setminus \\mathbb{Q}$ dans $\\mathbb{R}$.",
      "Définir les notions topologiques fondamentales de $\\mathbb{R}$ : ouverts, fermés, voisinages, adhérence et points d'accumulation."
    ],
    "keyPoints": [
      {
        "title": "1. Axiome de la borne supérieure et caractérisation epsilonesque",
        "content": "• **Axiome de la borne supérieure** : Toute partie non vide et majorée de $\\mathbb{R}$ admet une **borne supérieure** réelle (le plus petit des majorants), notée $\\sup(A)$.\n• **Caractérisation en $\\varepsilon$ de $\\sup(A)$** : $M = \\sup(A) \\iff$ :\n  1. $\\forall x \\in A, \\quad x \\le M$ ($M$ est un majorant).\n  2. $\\forall \\varepsilon > 0, \\quad \\exists x \\in A, \\quad M - \\varepsilon < x \\le M$ (aucun réel $< M$ n'est majorant).\n• De même, toute partie non vide et minorée admet une **borne inférieure** $\\inf(A)$ (le plus grand des minorants) vérifiant :\n  $$\\forall \\varepsilon > 0, \\quad \\exists x \\in A, \\quad m \\le x < m + \\varepsilon$$"
      },
      {
        "title": "2. Propriété d'Archimède et conséquences fondamentales",
        "content": "• **Corps archimédien** : Le corps $\\mathbb{R}$ est archimédien, ce qui signifie :\n$$\\forall x \\in \\mathbb{R}, \\quad \\exists n \\in \\mathbb{N}, \\quad n > x$$\n• **Partie entière** : Pour tout $x \\in \\mathbb{R}$, il existe un unique entier relatif $n = \\lfloor x \\rfloor \\in \\mathbb{Z}$ tel que :\n$$n \\le x < n + 1$$\n• **Caractérisation de la limite nulle** : $\\lim_{n \\to +\\infty} \\frac{1}{n} = 0$ découle immédiatement du caractère archimédien de $\\mathbb{R}$."
      },
      {
        "title": "3. Densité de Q et de R \\ Q dans R",
        "content": "• Une partie $D \\subset \\mathbb{R}$ est dite **dense dans $\\mathbb{R}$** si tout intervalle ouvert non vide $]a, b[$ contient au moins un élément de $D$ :\n$$\\forall a, b \\in \\mathbb{R} \\text{ avec } a < b, \\quad \\exists d \\in D, \\quad a < d < b$$\n• **Théorème de densité** : $\\mathbb{Q}$ (l'ensemble des rationnels) et $\\mathbb{R} \\setminus \\mathbb{Q}$ (l'ensemble des irrationnels) sont tous deux denses dans $\\mathbb{R}$."
      },
      {
        "title": "4. Éléments de topologie sur la droite réelle",
        "content": "• **Ouvert** : Une partie $U \\subset \\mathbb{R}$ est un ouvert si pour tout $x \\in U$, il existe $r > 0$ tel que $]x - r, x + r[ \\subset U$.\n• **Fermé** : Une partie $F \\subset \\mathbb{R}$ est un fermé si son complémentaire $\\mathbb{R} \\setminus F$ est un ouvert.\n• **Caractérisation séquentielle des fermés** : $F$ est fermé ssi pour toute suite $(x_n)$ d'éléments de $F$ convergeant vers $l \\in \\mathbb{R}$, on a $l \\in F$.\n• **Segment compact** : Tout intervalle fermé et borné $[a, b]$ est compact (Théorème de Borel-Lebesgue)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer la borne supérieure d'un ensemble",
        "example": "Déterminer la borne supérieure de $A = \\left\\{ 1 - \\frac{1}{n} \\;\\middle|\\; n \\in \\mathbb{N}^* \\right\\}$.",
        "steps": [
          "**Étape 1 (Majorant)** : Pour tout $n \\ge 1$, $\\frac{1}{n} > 0 \\implies 1 - \\frac{1}{n} < 1$. Donc 1 est un majorant de $A$.",
          "**Étape 2 (Caractérisation en $\\varepsilon$)** : Soit $\\varepsilon > 0$. On cherche $n \\ge 1$ tel que $1 - \\varepsilon < 1 - \\frac{1}{n} \\iff \\frac{1}{n} < \\varepsilon \\iff n > \\frac{1}{\\varepsilon}$.",
          "**Étape 3 (Archimède)** : Par la propriété d'Archimède, il existe un tel entier $n$. Donc $1 - \\varepsilon$ n'est pas majorant.",
          "**Conclusion** : $\\sup(A) = 1$ (cette borne supérieure n'est pas atteinte, donc pas de maximum)."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre borne supérieure $\\sup(A)$ et maximum $\\max(A)$ : le maximum n'existe que si $\\sup(A) \\in A$ !",
      "⚠️ Dans $\\mathbb{Q}$, la partie $\\{x \\in \\mathbb{Q} \\mid x^2 < 2\\}$ est majorée mais n'admet pas de borne supérieure rationnelle ($\\sqrt{2} \\notin \\mathbb{Q}$)."
    ],
    "flashcards": [
      {
        "q": "Énoncer la caractérisation epsilonesque de M = sup(A).",
        "a": "$\\forall x \\in A, x \\le M$ et $\\forall \\varepsilon > 0, \\exists x \\in A, M - \\varepsilon < x \\le M$."
      },
      {
        "q": "Quelle propriété fondamentale distingue R de Q sur l'existence des bornes ?",
        "a": "L'axiome de la borne supérieure : toute partie non vide et majorée admet une borne supérieure dans $\\mathbb{R}$."
      }
    ]
  },
  "L1-SUI": {
    "title": "L1-SUI : Suites réelles : limites (ε-N), suites de Cauchy et Bolzano-Weierstrass",
    "domain": "Analyse Réelle",
    "objectives": [
      "Maîtriser la définition formelle en $\\varepsilon - N_0$ de la convergence d'une suite.",
      "Appliquer les théorèmes de comparaison, d'encadrement (gendarmes) et de convergence monotone.",
      "Définir les suites adjacentes et prouver leur convergence vers une limite commune.",
      "Énoncer et appliquer le Théorème de Bolzano-Weierstrass et la notion de suite de Cauchy.",
      "Manipuler les relations de comparaison asymptotique ($o, O, \\sim$)."
    ],
    "keyPoints": [
      {
        "title": "1. Définition rigoureuse en epsilons de la convergence",
        "content": "• Une suite $(u_n)_{n \\in \\mathbb{N}}$ **converge vers $l \\in \\mathbb{R}$** si :\n$$\\forall \\varepsilon > 0, \\quad \\exists N_0 \\in \\mathbb{N}, \\quad \\forall n \\ge N_0, \\quad |u_n - l| < \\varepsilon$$\n• Toute suite convergente est **bornée** et sa limite est **unique**.\n• **Théorème de convergence monotone** : Toute suite croissante et majorée converge vers $\\sup\\{u_n \\mid n \\in \\mathbb{N}\\}$. Toute suite décroissante et minorée converge vers son $\\inf$."
      },
      {
        "title": "2. Suites adjacentes et Théorème des suites adjacentes",
        "content": "Deux suites $(u_n)$ et $(v_n)$ sont dites **adjacentes** si :\n1. $(u_n)$ est croissante et $(v_n)$ est décroissante.\n2. Pour tout $n$, $u_n \\le v_n$.\n3. $\\lim_{n \\to +\\infty} (v_n - u_n) = 0$.\n\n• **Théorème** : Si deux suites sont adjacentes, elles convergent vers une **même limite réelle** $l$, et pour tout $n$ :\n$$u_n \\le u_{n+1} \\le l \\le v_{n+1} \\le v_n$$"
      },
      {
        "title": "3. Bolzano-Weierstrass et Suites de Cauchy",
        "content": "• **Théorème de Bolzano-Weierstrass** : De toute suite réelle **bornée**, on peut extraire une sous-suite (suite valeur d'adhérence) **convergente**.\n• **Suite de Cauchy** : Une suite $(u_n)$ est dite de Cauchy si :\n$$\\forall \\varepsilon > 0, \\quad \\exists N_0 \\in \\mathbb{N}, \\quad \\forall p, q \\ge N_0, \\quad |u_p - u_q| < \\varepsilon$$\n• **Complétude de $\\mathbb{R}$** : Dans $\\mathbb{R}$, une suite converge si et seulement si elle est de Cauchy. On dit que $\\mathbb{R}$ est un espace métrique complet."
      },
      {
        "title": "4. Relations de comparaison asymptotique (o, O, équivalents)",
        "content": "Soient $(u_n)$ et $(v_n)$ deux suites avec $v_n \\ne 0$ à partir d'un certain rang :\n• **Négligeabilité ($u_n = o(v_n)$)** : $\\lim_{n \\to +\\infty} \\frac{u_n}{v_n} = 0$.\n• **Domination ($u_n = O(v_n)$)** : $\\left(\\frac{u_n}{v_n}\\right)$ est une suite bornée.\n• **Équivalence ($u_n \\sim v_n$)** : $\\lim_{n \\to +\\infty} \\frac{u_n}{v_n} = 1$.\n• **Règle fondamentale** : On peut multiplier et diviser des équivalents, mais on ne peut **JAMAIS** additionner ou soustraire des équivalents sans justification !"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer la convergence avec la définition en $\\varepsilon$",
        "example": "Démontrer que $\\lim_{n \\to +\\infty} \\frac{2n + 1}{n + 3} = 2$.",
        "steps": [
          "**Étape 1 (Écart)** : $\\left| \\frac{2n + 1}{n + 3} - 2 \\right| = \\left| \\frac{2n + 1 - 2n - 6}{n + 3} \\right| = \\frac{5}{n + 3}$.",
          "**Étape 2 (Majoration)** : Pour $n \\ge 1$, $\\frac{5}{n + 3} < \\frac{5}{n}$.",
          "**Étape 3 (Choix du rang $N_0$)** : Soit $\\varepsilon > 0$. On veut $\\frac{5}{n} < \\varepsilon \\iff n > \\frac{5}{\\varepsilon}$. On pose $N_0 = \\left\\lfloor \\frac{5}{\\varepsilon} \\right\\rfloor + 1$.",
          "**Conclusion** : Pour tout $n \\ge N_0$, $|u_n - 2| < \\varepsilon$. Donc $\\lim u_n = 2$."
        ]
      }
    ],
    "traps": [
      "⚠️ Interdiction formelle d'additionner des équivalents : $u_n \\sim a_n$ et $v_n \\sim b_n \\centernot\\implies u_n + v_n \\sim a_n + b_n$ (risque d'annulation des termes prépondérants) !",
      "⚠️ Ne pas confondre suite bornée (qui n'a pas nécessairement de limite, ex: $(-1)^n$) et suite convergente."
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème de Bolzano-Weierstrass pour les suites réelles.",
        "a": "De toute suite réelle bornée, on peut extraire une sous-suite convergente."
      },
      {
        "q": "Que signifie la complétude de R pour les suites de Cauchy ?",
        "a": "Dans $\\mathbb{R}$, toute suite de Cauchy est convergente (et réciproquement)."
      }
    ]
  },
  "L1-TAY": {
    "title": "L1-TAY : Formules de Taylor, développements limités et étude locale",
    "domain": "Analyse Réelle",
    "objectives": [
      "Énoncer les trois formules de Taylor : avec reste intégral, Taylor-Lagrange et Taylor-Young.",
      "Maîtriser les développements limités usuels en 0 à l'ordre $n$.",
      "Effectuer les opérations sur les DL : somme, produit, quotient, composition et intégration terme à terme.",
      "Appliquer les DL à la levée d'indéterminations, au calcul de limites et à la recherche d'asymptotes."
    ],
    "keyPoints": [
      {
        "title": "1. Les trois formules fondamentales de Taylor",
        "content": "Soit $f : I \\to \\mathbb{R}$ de classe $\\mathcal{C}^{n+1}$ sur un intervalle $I$ et $a, x \\in I$ :\n• **Taylor avec reste intégral** :\n$$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x - a)^k + \\int_a^x \\frac{(x - t)^n}{n!} f^{(n+1)}(t) \\, dt$$\n• **Formule de Taylor-Lagrange** : Il existe $c$ strictement compris entre $a$ et $x$ tel que :\n$$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x - a)^k + \\frac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}$$\n• **Formule de Taylor-Young (locale en $a$)** : Si $f$ est de classe $\\mathcal{C}^n$ au voisinage de $a$ :\n$$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x - a)^k + o((x - a)^n)$$"
      },
      {
        "title": "2. Développements limités usuels en 0 (Ordre n)",
        "content": "• $e^x = 1 + x + \\frac{x^2}{2!} + \\dots + \\frac{x^n}{n!} + o(x^n)$\n• $\\cos(x) = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\dots + (-1)^p \\frac{x^{2p}}{(2p)!} + o(x^{2p+1})$\n• $\\sin(x) = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\dots + (-1)^p \\frac{x^{2p+1}}{(2p+1)!} + o(x^{2p+2})$\n• $\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots + (-1)^{n-1} \\frac{x^n}{n} + o(x^n)$\n• $(1 + x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha - 1)}{2} x^2 + \\dots + \\frac{\\alpha(\\alpha - 1)\\dots(\\alpha - n + 1)}{n!} x^n + o(x^n)$\n• $\\frac{1}{1 - x} = 1 + x + x^2 + \\dots + x^n + o(x^n)$"
      },
      {
        "title": "3. Opérations sur les développements limités",
        "content": "• **Somme et Produit** : On additionne ou multiplie les parties polynomiales en tronquant les puissances $> n$.\n• **Composition $g(f(x))$** : Valide ssi $f(0) = 0$. On substitue le DL de $f$ dans le DL de $g$ et on tronque à l'ordre $n$.\n• **Intégration terme à terme** : Si $f(x) = P_n(x) + o(x^n)$, alors toute primitive s'écrit $\\int_0^x f(t)dt = \\int_0^x P_n(t)dt + o(x^{n+1})$."
      },
      {
        "title": "4. Applications : Limites et position par rapport aux asymptotes",
        "content": "• **Levée d'indéterminations** : Remplacer les fonctions par leurs DL à l'ordre minimal non nul pour obtenir immédiatement le terme prépondérant.\n• **Étude de position relative** : Si au voisinage de l'infini $f(x) = ax + b + \\frac{c}{x^p} + o(1/x^p)$, la droite $y = ax + b$ est asymptote oblique. Le signe de $c/x^p$ détermine si la courbe est au-dessus ou en dessous de l'asymptote."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la limite d'une forme indéterminée 0/0 par DL",
        "example": "Calculer la limite quand $x \\to 0$ de $L(x) = \\frac{\\sin(x) - x}{\\ln(1 + x^3)}$.",
        "steps": [
          "**Étape 1 (Numérateur)** : $\\sin(x) = x - \\frac{x^3}{6} + o(x^3) \\implies \\sin(x) - x = -\\frac{x^3}{6} + o(x^3)$.",
          "**Étape 2 (Dénominateur)** : $\\ln(1 + u) = u + o(u)$ avec $u = x^3 \\to 0$, donc $\\ln(1 + x^3) = x^3 + o(x^3)$.",
          "**Étape 3 (Quotient)** : $L(x) = \\frac{-\\frac{x^3}{6} + o(x^3)}{x^3 + o(x^3)} = \\frac{-\\frac{1}{6} + o(1)}{1 + o(1)}$.",
          "**Conclusion** : $\\lim_{x \\to 0} L(x) = -\\frac{1}{6}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour composer $g(f(x))$, la condition essentielle est $\\lim_{x \\to 0} f(x) = 0$ !",
      "⚠️ On ne peut PAS dériver un développement limité en général : $f(x) = o(x) \\centernot\\implies f'(x) = o(1)$ sans hypothèse de dérivabilité supérieure."
    ],
    "flashcards": [
      {
        "q": "Énoncer la formule de Taylor-Young pour une fonction de classe C^n au voisinage de 0.",
        "a": "$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(0)}{k!} x^k + o(x^n)$."
      },
      {
        "q": "Quel est le DL en 0 à l'ordre 3 de ln(1 + x) ?",
        "a": "$\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} + o(x^3)$."
      }
    ]
  },
  "L1-INT": {
    "title": "L1-INT : Intégrale de Riemann sur un segment et techniques de primitivation",
    "domain": "Analyse Réelle",
    "objectives": [
      "Définir rigoureusement l'intégrabilité au sens de Riemann (subdivisions, sommes de Darboux et de Riemann).",
      "Énoncer le Théorème Fondamental de l'Analyse reliant dérivation et intégration.",
      "Maîtriser les deux outils de calcul majeurs : l'intégration par parties et le changement de variable.",
      "Appliquer les sommes de Riemann au calcul de limites de suites."
    ],
    "keyPoints": [
      {
        "title": "1. Construction de l'intégrale de Riemann",
        "content": "• **Subdivision d'un segment $[a, b]$** : Une suite finie $\\sigma = (x_0 = a < x_1 < \\dots < x_n = b)$ de pas $\\delta(\\sigma) = \\max (x_{i+1} - x_i)$.\n• **Fonctions intégrables** : Toute fonction continue sur $[a, b]$ (ou continue par morceaux, ou monotone) est intégrable au sens de Riemann.\n• **Sommes de Riemann** : Pour $f$ continue sur $[a, b]$ et $x_k = a + k\\frac{b - a}{n}$ :\n$$\\lim_{n \\to +\\infty} \\frac{b - a}{n} \\sum_{k=1}^n f\\left(a + k\\frac{b - a}{n}\\right) = \\int_a^b f(x) \\, dx$$"
      },
      {
        "title": "2. Théorèmes Fondamentaux de l'Analyse",
        "content": "• **Premier Théorème Fondamental** : Soit $f$ continue sur un intervalle $I$ et $a \\in I$. La fonction $F(x) = \\int_a^x f(t) \\, dt$ est de classe $\\mathcal{C}^1$ sur $I$, et sa dérivée est exactement $f$ :\n$$F'(x) = \\frac{d}{dx} \\left(\\int_a^x f(t) \\, dt\\right) = f(x)$$\n• **Second Théorème Fondamental** : Si $F$ est une primitive quelconque de $f$ sur $[a, b]$ :\n$$\\int_a^b f(t) \\, dt = [F(t)]_a^b = F(b) - F(a)$$"
      },
      {
        "title": "3. Intégration par parties et Changement de variable",
        "content": "• **Intégration par parties (IPP)** : Si $u$ et $v$ sont de classe $\\mathcal{C}^1$ sur $[a, b]$ :\n$$\\int_a^b u'(t) v(t) \\, dt = [u(t) v(t)]_a^b - \\int_a^b u(t) v'(t) \\, dt$$\n• **Changement de variable** : Si $\\varphi : [\\alpha, \\beta] \\to [a, b]$ est une bijection de classe $\\mathcal{C}^1$ avec $\\varphi(\\alpha) = a$ et $\\varphi(\\beta) = b$, et $f$ continue sur $[a, b]$ :\n$$\\int_a^b f(x) \\, dt = \\int_\\alpha^\\beta f(\\varphi(t)) \\cdot \\varphi'(t) \\, dt$$"
      },
      {
        "title": "4. Formules de la moyenne et positivité",
        "content": "• **Positivité** : Si $f \\ge 0$ sur $[a, b]$ (avec $a \\le b$), alors $\\int_a^b f(t)dt \\ge 0$. Si de plus $f$ est continue et $\\int_a^b f(t)dt = 0$, alors $f$ est identiquement nulle.\n• **Inégalité de la moyenne** : $\\left|\\int_a^b f(t)dt\\right| \\le \\int_a^b |f(t)|dt \\le (b - a) \\sup_{[a,b]} |f|$.\n• **Théorème de la moyenne** : Si $f$ est continue sur $[a, b]$, il existe $c \\in [a, b]$ tel que $\\frac{1}{b - a}\\int_a^b f(t)dt = f(c)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une limite de somme par les sommes de Riemann",
        "example": "Calculer $S = \\lim_{n \\to +\\infty} \\sum_{k=1}^n \\frac{n}{n^2 + k^2}$.",
        "steps": [
          "**Étape 1 (Mise sous forme canonique)** : $\\sum_{k=1}^n \\frac{n}{n^2(1 + (k/n)^2)} = \\frac{1}{n} \\sum_{k=1}^n \\frac{1}{1 + (k/n)^2}$.",
          "**Étape 2 (Identification)** : C'est une somme de Riemann pour la fonction $f(x) = \\frac{1}{1 + x^2}$ sur l'intervalle $[0, 1]$.",
          "**Étape 3 (Intégration)** : $\\int_0^1 \\frac{1}{1 + x^2} \\, dx = [\\arctan(x)]_0^1 = \\arctan(1) - \\arctan(0) = \\frac{\\pi}{4}$.",
          "**Conclusion** : $S = \\frac{\\pi}{4}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un changement de variable, ne JAMAIS oublier de remplacer l'élément différentiel $dx = \\varphi'(t)dt$ et de changer les bornes !",
      "⚠️ La formule de Chasles $\\int_a^c = \\int_a^b + \\int_b^c$ est toujours vraie, mais pour l'inégalité de positivité, il faut impérativement que la borne inférieure soit inférieure ou égale à la borne supérieure ($a \\le b$)."
    ],
    "flashcards": [
      {
        "q": "Quelle est la dérivée de la fonction F(x) = int_a^x f(t) dt pour f continue ?",
        "a": "$F'(x) = f(x)$ (Premier Théorème Fondamental de l'Analyse)."
      },
      {
        "q": "Énoncer la formule d'intégration par parties pour u, v de classe C^1 sur [a, b].",
        "a": "$\\int_a^b u'(t)v(t)dt = [u(t)v(t)]_a^b - \\int_a^b u(t)v'(t)dt$."
      }
    ]
  },
  "L1-CMP": {
    "title": "L1-CMP : Nombres complexes, arithmétique des polynômes et fractions rationnelles",
    "domain": "Algèbre Fondamentale",
    "objectives": [
      "Maîtriser les représentations algébrique, trigonométrique et exponentielle des nombres complexes.",
      "Calculer les racines $n$-ièmes d'un nombre complexe et les racines de l'unité $\\mathbb{U}_n$.",
      "Appliquer les formules d'Euler et de Moivre à la linéarisation trigonométrique.",
      "Énoncer le Théorème de d'Alembert-Gauss et factoriser les polynômes dans $\\mathbb{C}[X]$ et $\\mathbb{R}[X]$.",
      "Effectuer la décomposition en éléments simples (DES) d'une fraction rationnelle dans $\\mathbb{R}(X)$ et $\\mathbb{C}(X)$."
    ],
    "keyPoints": [
      {
        "title": "1. Formes algébrique et exponentielle, formules d'Euler et de Moivre",
        "content": "• Tout $z \\in \\mathbb{C}$ s'écrit de manière unique $z = a + ib$ avec $a = \\text{Re}(z)$ et $b = \\text{Im}(z)$.\n• **Module et conjugué** : $|z| = \\sqrt{a^2 + b^2}$, $\\bar{z} = a - ib$, et $z \\bar{z} = |z|^2$.\n• **Formule d'Euler** : Pour tout $\\theta \\in \\mathbb{R}$, $e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$.\n  $$\\cos(\\theta) = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}, \\qquad \\sin(\\theta) = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$$\n• **Formule de Moivre** : Pour tout $n \\in \\mathbb{Z}$, $(\\cos \\theta + i\\sin \\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta) \\iff (e^{i\\theta})^n = e^{in\\theta}$."
      },
      {
        "title": "2. Racines n-ièmes de l'unité",
        "content": "• L'équation $z^n = 1$ ($n \\in \\mathbb{N}^*$) admet exactement $n$ solutions distinctes dans $\\mathbb{C}$, formant le groupe cyclique $\\mathbb{U}_n$ :\n$$\\LARGE \\omega_k = \\mathrm{e}^{i \\frac{2k\\pi}{n}}, \\quad k \\in \\{0, 1, \\dots, n - 1\\}$$\n• **Propriété géométrique** : Les images des racines $n$-ièmes forment les sommets d'un polygone régulier à $n$ côtés inscrit dans le cercle unité.\n• **Somme nulle** : Pour $n \\ge 2$, la somme des racines $n$-ièmes est nulle : $\\displaystyle \\sum_{k=0}^{n-1} \\omega_k = 0$."
      },
      {
        "title": "3. Théorème de d'Alembert-Gauss et factorisation de polynômes",
        "content": "• **Théorème fondamental de l'algèbre (d'Alembert-Gauss)** : Le corps $\\mathbb{C}$ est **algébriquement clos** : tout polynôme non constant de $\\mathbb{C}[X]$ admet au moins une racine dans $\\mathbb{C}$.\n• Tout polynôme $P \\in \\mathbb{C}[X]$ de degré $n$ est **scindé** : $P(X) = a_n \\prod_{j=1}^p (X - z_j)^{\\alpha_j}$ avec $\\sum \\alpha_j = n$.\n• **Polynômes à coefficients réels $\\mathbb{R}[X]$** : Les racines non réelles viennent par paires conjuguées ($P(z) = 0 \\iff P(\\bar{z}) = 0$). Tout polynôme de $\\mathbb{R}[X]$ se factorise en produit de facteurs de degré 1 et de facteurs quadratiques irréductibles de degré 2 (discriminant $\\Delta < 0$)."
      },
      {
        "title": "4. Fractions rationnelles et Décomposition en éléments simples (DES)",
        "content": "• **Fraction rationnelle** : $F = \\frac{N}{D} \\in \\mathbb{K}(X)$ avec $D \\ne 0_{\\mathbb{K}[X]}$. Les zéros du dénominateur $D$ sont appelés les **pôles** de $F$.\n• **Partie entière** : Par division euclidienne de $N$ par $D$, il existe un unique couple $(E, R) \\in \\mathbb{K}[X]^2$ tel que $N = ED + R$ avec $\\deg(R) < \\deg(D)$. Le polynôme $E$ est la **partie entière** de $F$ ($E = 0$ si $\\deg(N) < \\deg(D)$).\n• **Théorème de décomposition dans $\\mathbb{R}(X)$** : Toute fraction rationnelle $F = \\frac{N}{D}$ s'écrit de manière unique sous la forme :\n$$F(X) = E(X) + \\sum_{\\text{pôles réels } \\alpha_i} \\sum_{j=1}^{m_i} \\frac{\\lambda_{i,j}}{(X - \\alpha_i)^j} + \\sum_{\\text{facteurs quadratiques}} \\sum_{k=1}^{n_l} \\frac{a_{l,k} X + b_{l,k}}{(X^2 + p_l X + q_l)^k}$$\n• **Méthode des pôles simples** : Si $\\alpha$ est un pôle simple de $F = \\frac{N}{D}$, le coefficient associé vaut :\n$$a_\\alpha = \\lim_{x \\to \\alpha} (x - \\alpha) F(x) = \\frac{N(\\alpha)}{D'(\\alpha)}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une équation du second degré à coefficients complexes",
        "example": "Résoudre dans $\\mathbb{C}$ l'équation $z^2 - (3 + 2i)z + 5 + i = 0$.",
        "steps": [
          "**Étape 1 (Discriminant)** : $\\Delta = (3 + 2i)^2 - 4(1)(5 + i) = (9 + 12i - 4) - (20 + 4i) = -15 + 8i$.",
          "**Étape 2 (Racines carrées de $\\Delta$)** : Posons $\\delta = x + iy$. On résout $\\begin{cases} x^2 - y^2 = -15 \\\\ x^2 + y^2 = |\\Delta| = \\sqrt{(-15)^2 + 8^2} = 17 \\\\ 2xy = 8 > 0 \\end{cases}$.",
          "**Étape 3 (Valeurs de $x$ et $y$)** : $2x^2 = 2 \\implies x = \\pm 1$ et $2y^2 = 32 \\implies y = \\pm 4$. Comme $xy > 0$, $\\delta = \\pm(1 + 4i)$.",
          "**Étape 4 (Solutions)** : $z_1 = \\frac{3 + 2i + (1 + 4i)}{2} = 2 + 3i$ et $z_2 = \\frac{3 + 2i - (1 + 4i)}{2} = 1 - i$."
        ]
      },
      {
        "title": "Méthode : Décomposer une fraction rationnelle en éléments simples dans $\\mathbb{R}(X)$",
        "example": "Décomposer dans $\\mathbb{R}(X)$ la fraction rationnelle $F(X) = \\frac{X^3 + 2}{X(X-1)(X+1)}$.",
        "steps": [
          "**Étape 1 (Partie entière)** : $\\deg(X^3 + 2) = 3$ et $\\deg(X^3 - X) = 3$. La division euclidienne donne $X^3 + 2 = 1 \\cdot (X^3 - X) + (X + 2)$. La partie entière est donc $E = 1$.",
          "**Étape 2 (Forme de la décomposition)** : Les pôles sont $0, 1, -1$, tous réels et simples : $F(X) = 1 + \\frac{a}{X} + \\frac{b}{X-1} + \\frac{c}{X+1}$.",
          "**Étape 3 (Calcul des coefficients par multiplication-évaluation)** :\n• Pour $a$ : on multiplie par $X$ et on pose $X = 0$ : $a = \\frac{0^3 + 2}{(0 - 1)(0 + 1)} = \\frac{2}{-1} = -2$.\n• Pour $b$ : on multiplie par $X - 1$ et on pose $X = 1$ : $b = \\frac{1^3 + 2}{1(1 + 1)} = \\frac{3}{2}$.\n• Pour $c$ : on multiplie par $X + 1$ et on pose $X = -1$ : $c = \\frac{(-1)^3 + 2}{(-1)(-1 - 1)} = \\frac{1}{2}$.",
          "**Conclusion** : $F(X) = 1 - \\frac{2}{X} + \\frac{3}{2(X - 1)} + \\frac{1}{2(X + 1)}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne JAMAIS oublier la **partie entière** $E(X)$ lorsque le degré du numérateur est supérieur ou égal à celui du dénominateur ($\\\\deg(N) \\ge \\deg(D)$) !",
      "⚠️ Ne JAMAIS écrire le symbole $\\sqrt{z}$ pour un complexe non réel (la fonction racine carrée n'a pas de détermination uniforme continue canonique sur $\\mathbb{C}$) !",
      "⚠️ Pour un pôle multiple $(X - \\alpha)^m$, il y a $m$ éléments simples imbriqués de puissances $1, 2, \\dots, m$."
    ],
    "flashcards": [
      {
        "q": "Quelles sont les n racines n-ièmes de l'unité ?",
        "a": "$\\Large \\omega_k = \\mathrm{e}^{i \\frac{2k\\pi}{n}}$ pour $k \\in \\{0, 1, \\dots, n - 1\\}$."
      },
      {
        "q": "Que dit le théorème de d'Alembert-Gauss pour les polynômes de C[X] ?",
        "a": "Tout polynôme non constant à coefficients complexes est scindé sur $\\mathbb{C}$ (admet au moins une racine)."
      },
      {
        "q": "Comment calcule-t-on le coefficient d'un pôle simple alpha dans une fraction F = N/D sans partie entière ?",
        "a": "$a_\\alpha = \\frac{N(\\alpha)}{D'(\\alpha)}$ ou en évaluant $(X - \\alpha)F(X)$ en $X = \\alpha$."
      }
    ]
  },
  "L1-CNT": {
    "title": "L1-CNT : Continuité, limites et dérivabilité des fonctions d'une variable réelle",
    "domain": "Analyse Réelle",
    "objectives": [
      "Maîtriser les définitions en $\\varepsilon - \\delta$ de la limite et de la continuité locale et globale.",
      "Énoncer la caractérisation séquentielle de la continuité (Heine).",
      "Énoncer et démontrer le Théorème des Valeurs Intermédiaires (TVI) et le théorème de la bijection.",
      "Énoncer le Théorème de Weierstrass (bornes atteintes sur un compact).",
      "Maîtriser les théorèmes de Rolle et des Accroissements Finis (TAF) et l'égalité de Taylor-Lagrange."
    ],
    "keyPoints": [
      {
        "title": "1. Définition locale en epsilons et caractérisation séquentielle",
        "content": "• **Continuité en un point $x_0$** : $f : I \\to \\mathbb{R}$ est continue en $x_0 \\in I$ si :\n$$\\forall \\varepsilon > 0, \\quad \\exists \\delta > 0, \\quad \\forall x \\in I, \\quad |x - x_0| < \\delta \\implies |f(x) - f(x_0)| < \\varepsilon$$\n• **Caractérisation séquentielle (Heine)** :\n$$f \\text{ est continue en } x_0 \\iff \\forall (x_n) \\in I^\\mathbb{N}, \\quad \\left(\\lim_{n \\to +\\infty} x_n = x_0 \\implies \\lim_{n \\to +\\infty} f(x_n) = f(x_0)\\right)$$"
      },
      {
        "title": "2. Théorèmes globaux : TVI, Bijection et Bornes atteintes",
        "content": "• **Théorème des Valeurs Intermédiaires (TVI)** : Si $f$ est continue sur un intervalle $[a, b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe au moins un réel $c \\in [a, b]$ tel que $f(c) = k$.\n• **Corollaire (Théorème de la bijection)** : Si $f$ est continue et **strictement monotone** sur un intervalle $I$, alors $f$ réalise une bijection de $I$ sur l'intervalle $J = f(I)$, et sa réciproque $f^{-1}$ est continue et de même monotonie sur $J$.\n• **Théorème de Weierstrass** : L'image d'un segment compact $[a, b]$ par une fonction continue $f$ est un segment compact $[m, M]$ : $f$ est **bornée** et **atteint ses bornes** (il existe $x_1, x_2$ tels que $f(x_1) = \\inf f$ et $f(x_2) = \\sup f$)."
      },
      {
        "title": "3. Dérivabilité, Théorème de Rolle et Accroissements Finis (TAF)",
        "content": "• **Théorème de Rolle** : Soit $f$ continue sur $[a, b]$, dérivable sur $]a, b[$, telle que $f(a) = f(b)$. Alors il existe $c \\in ]a, b[$ tel que :\n$$f'(c) = 0$$\n• **Théorème des Accroissements Finis (TAF)** : Soit $f$ continue sur $[a, b]$ et dérivable sur $]a, b[$. Alors il existe $c \\in ]a, b[$ tel que :\n$$f(b) - f(a) = f'(c)(b - a)$$\n• **Inégalité des Accroissements Finis** : Si $|f'(t)| \\le M$ sur $]a, b[$, alors $|f(b) - f(a)| \\le M|b - a|$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Prouver l'existence d'une solution par le TVI",
        "example": "Démontrer que l'équation $x^5 - 3x + 1 = 0$ admet au moins une solution sur $]0, 1[$.",
        "steps": [
          "**Étape 1 (Continuité)** : La fonction polynomiale $f(x) = x^5 - 3x + 1$ est continue sur $[0, 1]$.",
          "**Étape 2 (Calcul aux bornes)** : $f(0) = 1 > 0$ et $f(1) = 1 - 3 + 1 = -1 < 0$.",
          "**Étape 3 (Application du TVI)** : Comme $0 \\in [-1, 1]$, d'après le TVI, il existe au moins un réel $c \\in ]0, 1[$ tel que $f(c) = 0$."
        ]
      }
    ],
    "traps": [
      "⚠️ La dérivabilité implique la continuité, mais la **réciproque est fausse** : $x \\mapsto |x|$ est continue en 0 mais non dérivable en 0 !",
      "⚠️ Pour appliquer le théorème de Rolle ou le TAF, l'intervalle doit impérativement être un segment fermé pour la continuité et ouvert pour la dérivabilité."
    ],
    "flashcards": [
      {
        "q": "Que dit le théorème de Weierstrass pour une fonction continue sur un segment [a, b] ?",
        "a": "Elle est bornée et atteint ses bornes (son image est un segment compact $[m, M]$)."
      },
      {
        "q": "Énoncer le Théorème des Accroissements Finis.",
        "a": "Si $f$ est continue sur $[a, b]$ et dérivable sur $]a, b[$, il existe $c \\in ]a, b[$ tel que $f(b) - f(a) = f'(c)(b - a)$."
      }
    ]
  },
  "L1-GEO": {
    "title": "L1-GEO : Géométrie euclidienne plane, repères orthonormés et coniques",
    "domain": "Géométrie Fondamentale",
    "objectives": [
      "Maîtriser le produit scalaire canonique, l'orthogonalité, la norme et la distance dans le plan euclidien $\\mathbb{R}^2$.",
      "Déterminer les équations cartésiennes et polaires de droites et de cercles.",
      "Définir géométriquement les coniques propres (ellipse, parabole, hyperbole) par foyer, directrice et excentricité $e$.",
      "Établir les équations réduites des coniques et caractériser leurs éléments géométriques (sommets, foyers, directrices, asymptotes)."
    ],
    "keyPoints": [
      {
        "title": "1. Produit scalaire, orthogonalité et repères orthonormés",
        "content": "Dans le plan vectoriel $\\mathbb{R}^2$ muni du produit scalaire canonique $\\langle u, v \\rangle = x x' + y y'$ :\n• **Norme euclidienne** : $\\|u\\| = \\sqrt{x^2 + y^2}$. Deux vecteurs sont **orthogonaux** si $\\langle u, v \\rangle = 0$.\n• **Inégalité de Cauchy-Schwarz** : $|\\langle u, v \\rangle| \\le \\|u\\| \\|v\\|$, avec égalité ssi $u$ et $v$ sont colinéaires.\n• **Équation de droite** : Toute droite affine $\\mathcal{D}$ admet une équation cartésienne $ax + by + c = 0$ avec $(a, b) \\ne (0, 0)$. Le vecteur $\\vec{n}(a, b)$ est normal à $\\mathcal{D}$.\n• **Distance d'un point à une droite** : Pour $A(x_A, y_A)$, $d(A, \\mathcal{D}) = \\frac{|a x_A + b y_A + c|}{\\sqrt{a^2 + b^2}}$."
      },
      {
        "title": "2. Cercles et puissance d'un point",
        "content": "• **Équation cartésienne d'un cercle** : Le cercle $\\mathcal{C}$ de centre $\\Omega(x_0, y_0)$ et de rayon $R > 0$ a pour équation :\n$$(x - x_0)^2 + (y - y_0)^2 = R^2 \\iff x^2 + y^2 - 2x_0 x - 2y_0 y + (x_0^2 + y_0^2 - R^2) = 0$$\n• **Position relative droite/cercle** : Soit $d = d(\\Omega, \\mathcal{D})$. Si $d < R$, la droite est sécante en 2 points ; si $d = R$, elle est tangente ; si $d > R$, elle est disjointe."
      },
      {
        "title": "3. Coniques : Définitions monofocale et bifocale",
        "content": "Soit un point $F$ (foyer), une droite $\\mathcal{D}$ ne passant pas par $F$ (directrice) et $e > 0$ (excentricité) :\n• Une conique propre $\\mathcal{C}$ est l'ensemble des points $M$ tels que $\\frac{MF}{d(M, \\mathcal{D})} = e$.\n  - Si $0 < e < 1$ : la conique est une **ellipse** (courbe fermée bornée).\n  - Si $e = 1$ : la conique est une **parabole** (une seule branche infinie).\n  - Si $e > 1$ : la conique est une **hyperbole** (deux branches infinies, deux asymptotes).\n• **Équations réduites en repère orthonormal adapté** :\n  - **Ellipse** : $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ avec $a > b > 0$, $c^2 = a^2 - b^2$, $e = \\frac{c}{a} < 1$, foyers $F(\\pm c, 0)$.\n  - **Parabole** : $y^2 = 2px$ avec paramètre $p > 0$, foyer $F(p/2, 0)$, directrice $x = -p/2$.\n  - **Hyperbole** : $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ avec $c^2 = a^2 + b^2$, $e = \\frac{c}{a} > 1$, asymptotes $y = \\pm \\frac{b}{a} x$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer la nature et les éléments d'une conique à partir de son équation",
        "example": "Identifier la conique d'équation $9x^2 + 25y^2 - 225 = 0$.",
        "steps": [
          "**Étape 1 (Forme réduite)** : On divise par 225 : $\\frac{9x^2}{225} + \\frac{25y^2}{225} = 1 \\iff \\frac{x^2}{25} + \\frac{y^2}{9} = 1$.",
          "**Étape 2 (Nature)** : C'est une ellipse de demi-grand axe $a = \\sqrt{25} = 5$ et de demi-petit axe $b = \\sqrt{9} = 3$.",
          "**Étape 3 (Distance focale et excentricité)** : $c^2 = a^2 - b^2 = 25 - 9 = 16 \\implies c = 4$. L'excentricité vaut $e = \\frac{c}{a} = \\frac{4}{5} = 0,8 < 1$.",
          "**Conclusion** : Les foyers sont $F(4, 0)$ et $F'(-4, 0)$, et les sommets sont $(\\pm 5, 0)$ et $(0, \\pm 3)$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour l'ellipse, la relation entre axes et distance focale est $a^2 = b^2 + c^2$, alors que pour l'hyperbole c'est $c^2 = a^2 + b^2$ !",
      "⚠️ Une conique définie par foyer et directrice n'est un cercle pour aucune valeur finie (le cercle correspond formellement à $e = 0$, foyer confondu avec le centre, directrice rejetée à l'infini)."
    ],
    "flashcards": [
      {
        "q": "Quelle est la condition sur l'excentricité e pour qu'une conique soit une ellipse ?",
        "a": "$0 < e < 1$ (courbe fermée)."
      },
      {
        "q": "Quelle est la formule de la distance d'un point A(xA, yA) à la droite ax + by + c = 0 ?",
        "a": "$d = \\frac{|a x_A + b y_A + c|}{\\sqrt{a^2 + b^2}}$."
      },
      {
        "q": "Quelles sont les asymptotes de l'hyperbole x^2/a^2 - y^2/b^2 = 1 ?",
        "a": "Les droites d'équations $y = \\frac{b}{a} x$ et $y = -\\frac{b}{a} x$."
      }
    ]
  }
};

window.MATHS_EXERCISES_L1 = {
  "L1-LOG": [
    {
      "id": "L1-LOG-1",
      "tier": 1,
      "type": "mcq",
      "title": "Négation d'une assertion quantifiée",
      "skill": "Manipuler les quantificateurs universel et existentiel",
      "statement": "Quelle est la négation logique exacte de l'assertion : « $\\forall x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R}, x + y > 0$ » ?",
      "options": [
        "$\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x + y \\le 0$",
        "$\\forall x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x + y \\le 0$",
        "$\\exists x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R}, x + y \\le 0$",
        "$\\exists y \\in \\mathbb{R}, \\forall x \\in \\mathbb{R}, x + y \\le 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x + y \\le 0$",
      "hint1": "La négation échange $\\forall$ et $\\exists$ et inverse l'inégalité stricte en inégalité large.",
      "hint2": "$\\neg(\\forall x, P(x)) \\iff \\exists x, \\neg P(x)$.",
      "solution": "La négation de $\\forall x, \\exists y, P(x, y)$ est $\\exists x, \\forall y, \\neg P(x, y)$, soit ici $\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x + y \\le 0$."
    },
    {
      "id": "L1-LOG-2",
      "tier": 2,
      "type": "mcq",
      "title": "Injectivité d'une fonction rationnelle",
      "skill": "Appliquer la définition de l'injectivité",
      "statement": "Soit $f : \\mathbb{R} \\setminus \\{1\\} \\to \\mathbb{R}$ définie par $f(x) = \\frac{2x + 3}{x - 1}$. $f$ est-elle injective ?",
      "options": [
        "Oui, car $f(x) = f(x') \\implies x = x'$",
        "Non, car $f(0) = f(-1)$",
        "Non, car elle n'est pas définie en 1",
        "Oui, car elle est bornée"
      ],
      "correctIndex": 0,
      "answer": "Oui, car $f(x) = f(x') \\implies x = x'$",
      "hint1": "Pars de l'égalité $f(x) = f(x')$ et fais le produit en croix.",
      "hint2": "$(2x+3)(x'-1) = (2x'+3)(x-1) \\iff -2x + 3x' = -2x' + 3x \\iff 5x' = 5x$.",
      "solution": "$f(x) = f(x') \\iff (2x+3)(x'-1) = (2x'+3)(x-1) \\iff 5x' = 5x \\iff x = x'$. L'application est donc injective."
    },
    {
      "id": "L1-LOG-2b",
      "tier": 2,
      "type": "mcq",
      "title": "Non-injectivité et contre-exemple",
      "skill": "Démontrer la non-injectivité à l'aide d'un contre-exemple",
      "statement": "Soit $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = x^2 - 4x$. L'application $f$ est-elle injective ?",
      "options": [
        "Non, car $f(0) = f(4) = 0$ avec $0 \\neq 4$",
        "Oui, car sa courbe représentative est une parabole",
        "Oui, car son discriminant est strictement positif",
        "Non, car elle n'est pas monotone sur $\\mathbb{R}^+$"
      ],
      "correctIndex": 0,
      "answer": "Non, car $f(0) = f(4) = 0$ avec $0 \\neq 4$",
      "hint1": "Cherche deux réels distincts ayant la même image par $f$.",
      "hint2": "Résous l'équation $f(x) = 0 \\iff x(x - 4) = 0$.",
      "solution": "On a $f(0) = 0$ et $f(4) = 4^2 - 16 = 0$. Deux réels distincts $0$ et $4$ ont la même image $0$. L'application n'est donc pas injective."
    },
    {
      "id": "L1-LOG-2c",
      "tier": 2,
      "type": "mcq",
      "title": "Surjectivité et ensemble image",
      "skill": "Réfuter la surjectivité par l'absence d'antécédent",
      "statement": "Soit $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = e^x$. L'application $f$ est-elle surjective ?",
      "options": [
        "Non, car aucun réel négatif ou nul (par ex. $-1$) n'a d'antécédent",
        "Oui, car tout $y > 0$ admet pour antécédent $\\ln(y)$",
        "Oui, car l'exponentielle est strictement croissante",
        "Non, car $f(0) = 1 \\neq 0$"
      ],
      "correctIndex": 0,
      "answer": "Non, car aucun réel négatif ou nul (par ex. $-1$) n'a d'antécédent",
      "hint1": "L'ensemble d'arrivée est $\\mathbb{R}$ tout entier.",
      "hint2": "Quel est le signe de $e^x$ pour tout réel $x$ ?",
      "solution": "Pour tout $x \\in \\mathbb{R}$, $e^x > 0$. Les réels négatifs ou nuls dans le codomaine $\\mathbb{R}$ (comme $-1$) n'ont aucun antécédent dans $\\mathbb{R}$. $f$ n'est donc pas surjective."
    },
    {
      "id": "L1-LOG-2d",
      "tier": 2,
      "type": "mcq",
      "title": "Surjectivité d'une fonction affine",
      "skill": "Prouver la surjectivité en calculant l'antécédent",
      "statement": "Soit $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = 3x - 5$. L'application $f$ est-elle surjective ?",
      "options": [
        "Oui, car pour tout $y \\in \\mathbb{R}$, $x = \\frac{y+5}{3} \\in \\mathbb{R}$ est un antécédent",
        "Non, car elle ne s'annule qu'en un seul point",
        "Non, car la pente est non nulle",
        "Oui, mais uniquement pour les réels $y \\ge 0$"
      ],
      "correctIndex": 0,
      "answer": "Oui, car pour tout $y \\in \\mathbb{R}$, $x = \\frac{y+5}{3} \\in \\mathbb{R}$ est un antécédent",
      "hint1": "Soit $y \\in \\mathbb{R}$. Résous $y = 3x - 5$ d'inconnue $x$.",
      "hint2": "Isole $x$ : $3x = y + 5 \\iff x = \\frac{y+5}{3}$.",
      "solution": "Pour tout $y \\in \\mathbb{R}$, l'équation $3x - 5 = y$ admet la solution $x = \\frac{y+5}{3}$, qui appartient bien à $\\mathbb{R}$. Tout élément du codomaine possède donc un antécédent : $f$ est surjective."
    },
    {
      "id": "L1-LOG-3",
      "tier": 3,
      "type": "mcq",
      "title": "Relation d'équivalence et ensemble quotient",
      "skill": "Calculer le cardinal d'un ensemble quotient",
      "statement": "Sur $\\mathbb{Z}$, la relation $x \\mathcal{R} y \\iff x \\equiv y \\pmod 5$ est une relation d'équivalence. Combien y a-t-il d'éléments dans le quotient $\\mathbb{Z}/5\\mathbb{Z}$ ?",
      "options": [
        "$5$",
        "$4$",
        "Une infinité",
        "$1$"
      ],
      "correctIndex": 0,
      "answer": "$5$",
      "hint1": "Le reste de la division euclidienne par 5 ne prend que 5 valeurs distinctes.",
      "hint2": "Les classes sont $\\bar{0}, \\bar{1}, \\bar{2}, \\bar{3}, \\bar{4}$.",
      "solution": "Chaque entier a un unique reste $r \\in \\{0, 1, 2, 3, 4\\}$ modulo 5. Il y a donc 5 classes d'équivalence disjointes, d'où $|\\mathbb{Z}/5\\mathbb{Z}| = 5$."
    },
    {
      "id": "L1-LOG-4",
      "tier": 4,
      "type": "mcq",
      "title": "Image réciproque et intersection ensembliste",
      "skill": "Démontrer des identités ensemblistes formelles",
      "statement": "Soit $f : E \\to F$ une application, et $A, B \\subset F$. Que vaut l'image réciproque $f^{-1}(A \\cap B)$ ?",
      "options": [
        "$f^{-1}(A) \\cap f^{-1}(B)$",
        "$f^{-1}(A) \\cup f^{-1}(B)$",
        "$f^{-1}(A) \\setminus f^{-1}(B)$",
        "$\\emptyset$"
      ],
      "correctIndex": 0,
      "answer": "$f^{-1}(A) \\cap f^{-1}(B)$",
      "hint1": "$x \\in f^{-1}(A \\cap B) \\iff f(x) \\in A \\cap B$.",
      "hint2": "$f(x) \\in A \\text{ et } f(x) \\in B \\iff x \\in f^{-1}(A) \\text{ et } x \\in f^{-1}(B)$.",
      "solution": "$x \\in f^{-1}(A \\cap B) \\iff f(x) \\in A \\cap B \\iff f(x) \\in A \\text{ et } f(x) \\in B \\iff x \\in f^{-1}(A) \\cap f^{-1}(B)$."
    }
  ],
  "L1-CMP": [
    {
      "id": "L1-CMP-1",
      "tier": 1,
      "type": "mcq",
      "title": "Racines 5-ièmes de l'unité",
      "skill": "Déterminer les racines n-ièmes de l'unité dans $\\mathbb{C}$",
      "statement": "Quelles sont les 5 racines 5-ièmes de l'unité dans $\\mathbb{C}$ (solutions de l'équation $z^5 = 1$) ?",
      "options": [
        "$\\left\\{ e^{i \\frac{2k\\pi}{5}} \\;\\middle|\\; k \\in \\{0, 1, 2, 3, 4\\} \\right\\}$",
        "$\\left\\{ e^{i \\frac{k\\pi}{5}} \\;\\middle|\\; k \\in \\{0, 1, 2, 3, 4\\} \\right\\}$",
        "$\\left\\{ e^{i \\frac{2k\\pi}{5}} \\;\\middle|\\; k \\in \\{1, 2, 3, 4, 5\\} \\right\\} \\cup \\{0\\}$",
        "$\\{1, -1, i, -i, 0\\}$"
      ],
      "correctIndex": 0,
      "answer": "$\\left\\{ e^{i \\frac{2k\\pi}{5}} \\;\\middle|\\; k \\in \\{0, 1, 2, 3, 4\\} \\right\\}$",
      "hint1": "Les racines $n$-ièmes de l'unité s'écrivent $\\omega_k = e^{i \\frac{2k\\pi}{n}}$ avec $k \\in \\{0, 1, \\dots, n-1\\}$.",
      "hint2": "Pour $n = 5$, il y a exactement 5 racines distinctes formant un pentagone régulier sur le cercle trigonométrique.",
      "solution": "L'équation $z^5 = 1$ admet dans $\\mathbb{C}$ exactement 5 solutions distinctes données par $\\omega_k = e^{i \\frac{2k\\pi}{5}}$ pour $k \\in \\{0, 1, 2, 3, 4\\}$. Elles forment les éléments du groupe cyclique $\\mathbb{U}_5$."
    },
    {
      "id": "L1-CMP-1b",
      "tier": 1,
      "type": "mcq",
      "title": "Racines 4-ièmes de l'unité sous forme algébrique",
      "skill": "Calculer les éléments du groupe $\\mathbb{U}_4$",
      "statement": "Quel est l'ensemble $\\mathbb{U}_4$ des racines 4-ièmes de l'unité sous forme algébrique dans $\\mathbb{C}$ ?",
      "options": [
        "$\\{1, i, -1, -i\\}$",
        "$\\{1, -1\\}$",
        "$\\{1, i, -1\\}$",
        "$\\{1, i, -1, -i, 0\\}$"
      ],
      "correctIndex": 0,
      "answer": "$\\{1, i, -1, -i\\}$",
      "hint1": "Résous l'équation $z^4 = 1$ en factorisant $z^4 - 1 = (z^2 - 1)(z^2 + 1) = 0$.",
      "hint2": "$z^2 = 1 \\implies z = \\pm 1$ et $z^2 = -1 \\implies z = \\pm i$.",
      "solution": "On a $z^4 - 1 = (z^2 - 1)(z^2 + 1) = (z - 1)(z + 1)(z - i)(z + i)$. Les 4 racines sont donc $1, i, -1, -i$."
    },
    {
      "id": "L1-CMP-1c",
      "tier": 1,
      "type": "mcq",
      "title": "Somme des racines n-ièmes de l'unité",
      "skill": "Propriétés algébriques de $\\mathbb{U}_n$",
      "statement": "Pour tout entier $n \\ge 2$, que vaut la somme totale des $n$ racines $n$-ièmes de l'unité $S = \\sum_{k=0}^{n-1} e^{i \\frac{2k\\pi}{n}}$ ?",
      "options": [
        "$0$",
        "$1$",
        "$n$",
        "$-1$"
      ],
      "correctIndex": 0,
      "answer": "$0$",
      "hint1": "Somme des termes d'une suite géométrique de raison $\\omega = e^{i 2\\pi / n} \\ne 1$.",
      "hint2": "$\\sum_{k=0}^{n-1} \\omega^k = \\frac{1 - \\omega^n}{1 - \\omega} = 0$.",
      "solution": "Posons $\\omega = e^{i \\frac{2\\pi}{n}}$. Comme $\\omega \\ne 1$ et $\\omega^n = 1$, la somme vaut $\\frac{1-\\omega^n}{1-\\omega} = \\frac{1-1}{1-\\omega} = 0$."
    },
    {
      "id": "L1-CMP-2",
      "tier": 2,
      "type": "mcq",
      "title": "Polynôme du second degré à racine double",
      "skill": "Identifier une racine double et factoriser un carré parfait",
      "statement": "Quelle est la factorisation dans $\\mathbb{R}[X]$ du trinôme $P(X) = X^2 - 6X + 9$, et quelle est la multiplicité de sa racine ?",
      "options": [
        "$(X - 3)^2$ ; $3$ est racine double (multiplicité 2)",
        "$(X - 3)(X + 3)$ ; deux racines simples distinctes",
        "$(X - 3)^2$ ; $3$ est racine simple",
        "Irréductible dans $\\mathbb{R}[X]$"
      ],
      "correctIndex": 0,
      "answer": "$(X - 3)^2$ ; $3$ est racine double (multiplicité 2)",
      "hint1": "Calcule le discriminant $\\Delta = b^2 - 4ac$ du trinôme.",
      "hint2": "Si $\\Delta = 0$, la racine $x_0 = -\\frac{b}{2a}$ est de multiplicité 2.",
      "solution": "Le discriminant est $\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$. Il y a donc une unique racine réelle $x_0 = -\\frac{-6}{2} = 3$, de multiplicité 2 (racine double). D'où $P(X) = (X - 3)^2$."
    },
    {
      "id": "L1-CMP-2b",
      "tier": 2,
      "type": "mcq",
      "title": "Polynôme de degré 3 avec racine double",
      "skill": "Détecter une racine double dans un polynôme de degré 3",
      "statement": "Déterminer les racines et la factorisation dans $\\mathbb{R}[X]$ du polynôme de degré 3 : $P(X) = X^3 - 3X + 2$.",
      "options": [
        "$(X - 1)^2 (X + 2)$ avec $1$ racine double et $-2$ racine simple",
        "$(X - 1)(X + 2)^2$ avec $-2$ racine double",
        "$(X - 1)(X + 1)(X - 2)$",
        "$(X - 1)^3$"
      ],
      "correctIndex": 0,
      "answer": "$(X - 1)^2 (X + 2)$ avec $1$ racine double et $-2$ racine simple",
      "hint1": "Vérifie si $1$ annule à la fois $P(X)$ et sa dérivée $P'(X) = 3X^2 - 3$.",
      "hint2": "Si $P(a) = 0$ et $P'(a) = 0$, alors $a$ est racine au moins double de $P$.",
      "solution": "On a $P(1) = 1 - 3 + 2 = 0$ et $P'(1) = 3(1)^2 - 3 = 0$. Donc $1$ est racine double de $P$. En effectuant la division euclidienne de $P(X)$ par $(X - 1)^2 = X^2 - 2X + 1$, on trouve le quotient $X + 2$. D'où $P(X) = (X - 1)^2 (X + 2)$."
    },
    {
      "id": "L1-CMP-2c",
      "tier": 2,
      "type": "mcq",
      "title": "Factorisation dans C[X] vs R[X]",
      "skill": "Factoriser un polynôme quadratique sans racine réelle",
      "statement": "Quelle est la décomposition en facteurs irréductibles de $P(X) = X^2 + 16$ dans $\\mathbb{C}[X]$ et dans $\\mathbb{R}[X]$ ?",
      "options": [
        "Dans $\\mathbb{C}[X]$ : $(X - 4i)(X + 4i)$ ; dans $\\mathbb{R}[X]$ : $X^2 + 16$ (irréductible)",
        "Dans $\\mathbb{C}[X]$ : $(X - 4)^2$ ; dans $\\mathbb{R}[X]$ : $(X - 4)(X + 4)$",
        "Dans $\\mathbb{C}[X]$ : $(X + 4i)^2$ ; dans $\\mathbb{R}[X]$ : $X^2 + 16$",
        "Irréductible à la fois dans $\\mathbb{C}[X]$ et dans $\\mathbb{R}[X]$"
      ],
      "correctIndex": 0,
      "answer": "Dans $\\mathbb{C}[X]$ : $(X - 4i)(X + 4i)$ ; dans $\\mathbb{R}[X]$ : $X^2 + 16$ (irréductible)",
      "hint1": "Dans $\\mathbb{R}$, le discriminant $\\Delta = -64 < 0$ : aucune racine réelle.",
      "hint2": "Dans $\\mathbb{C}$, écris $X^2 + 16 = X^2 - (4i)^2$.",
      "solution": "Dans $\\mathbb{R}[X]$, $X^2 + 16$ est irréductible car de degré 2 avec discriminant strictement négatif. Dans $\\mathbb{C}[X]$, il se scinde en facteurs de degré 1 : $X^2 - (4i)^2 = (X - 4i)(X + 4i)$."
    },
    {
      "id": "L1-CMP-3",
      "tier": 3,
      "type": "mcq",
      "title": "Polynôme de degré 3 à racine double",
      "skill": "Détecter une racine double et factoriser un polynôme de degré 3",
      "statement": "Factoriser dans $\\mathbb{R}[X]$ le polynôme $P(X) = X^3 - 5X^2 + 3X + 9$ :",
      "options": [
        "$(X - 3)^2 (X + 1)$",
        "$(X - 3)(X + 1)^2$",
        "$(X + 3)^2 (X - 1)$",
        "$(X - 3)(X^2 - 2X - 3)$"
      ],
      "correctIndex": 0,
      "answer": "$(X - 3)^2 (X + 1)$",
      "hint1": "Calcule la dérivée $P'(X) = 3X^2 - 10X + 3$ et teste la racine candidate $X = 3$ dans $P$ et $P'$.",
      "hint2": "Comme $P(3) = 0$ et $P'(3) = 0$, $3$ est racine au moins double : effectue la division euclidienne de $P(X)$ par $(X - 3)^2 = X^2 - 6X + 9$.",
      "solution": "On teste $X = 3$ : $P(3) = 27 - 45 + 9 + 9 = 0$. Dérivée : $P'(X) = 3X^2 - 10X + 3 \\implies P'(3) = 27 - 30 + 3 = 0$. Donc $3$ est une racine au moins double. La division euclidienne de $P(X)$ par $(X - 3)^2 = X^2 - 6X + 9$ donne le quotient $X + 1$. D'où $P(X) = (X - 3)^2 (X + 1)$."
    },
    {
      "id": "L1-CMP-3b",
      "tier": 3,
      "type": "mcq",
      "title": "Factorisation de degré 4 dans $\\mathbb{R}[X]$ et $\\mathbb{C}[X]$",
      "skill": "Comparer la décomposition en irréductibles dans $\\mathbb{R}[X]$ et $\\mathbb{C}[X]$",
      "statement": "Quelle est la décomposition en facteurs irréductibles de $P(X) = X^4 - 16$ dans $\\mathbb{R}[X]$ et dans $\\mathbb{C}[X]$ ?",
      "options": [
        "Dans $\\mathbb{R}[X]$ : $(X - 2)(X + 2)(X^2 + 4)$ ; Dans $\\mathbb{C}[X]$ : $(X - 2)(X + 2)(X - 2i)(X + 2i)$",
        "Dans $\\mathbb{R}[X]$ : $(X - 2)^2 (X + 2)^2$ ; Dans $\\mathbb{C}[X]$ : $(X - 2)^4$",
        "Dans $\\mathbb{R}[X]$ : $(X^2 - 4)^2$ ; Dans $\\mathbb{C}[X]$ : $(X - 2)(X + 2)(X^2 + 4)$",
        "Dans $\\mathbb{R}[X]$ : $(X - 4)(X + 4)(X^2 + 4)$ ; Dans $\\mathbb{C}[X]$ : $(X - 4)(X + 4)(X - 4i)(X + 4i)$"
      ],
      "correctIndex": 0,
      "answer": "Dans $\\mathbb{R}[X]$ : $(X - 2)(X + 2)(X^2 + 4)$ ; Dans $\\mathbb{C}[X]$ : $(X - 2)(X + 2)(X - 2i)(X + 2i)$",
      "hint1": "Remarque que $X^4 - 16 = (X^2)^2 - 4^2$, puis applique la différence de deux carrés : $(X^2 - 4)(X^2 + 4)$.",
      "hint2": "Dans $\\mathbb{R}[X]$, factorise $X^2 - 4 = (X - 2)(X + 2)$ et conserve $X^2 + 4$ qui est irréductible ($\\Delta < 0$). Dans $\\mathbb{C}[X]$, factorise $X^2 + 4 = (X - 2i)(X + 2i)$.",
      "solution": "$X^4 - 16 = (X^2 - 4)(X^2 + 4) = (X - 2)(X + 2)(X^2 + 4)$. Le facteur $X^2 + 4$ n'a aucune racine réelle ($\\Delta = -16 < 0$), donc il est irréductible dans $\\mathbb{R}[X]$. Dans $\\mathbb{C}[X]$, il se factorise en $(X - 2i)(X + 2i)$."
    },
    {
      "id": "L1-CMP-3c",
      "tier": 3,
      "type": "mcq",
      "title": "Polynôme de degré 4 à deux racines doubles",
      "skill": "Identifier deux racines doubles dans un polynôme de degré 4",
      "statement": "Factoriser le polynôme $P(X) = X^4 - 2X^2 + 1$ dans $\\mathbb{R}[X]$ et préciser la multiplicité de ses racines :",
      "options": [
        "$(X - 1)^2 (X + 1)^2$ (deux racines doubles : $1$ et $-1$)",
        "$(X^2 - 1)^2$ (deux racines simples)",
        "$(X - 1)^4$ (une unique racine d'ordre 4)",
        "$(X - 1)(X + 1)(X^2 + 1)$ (racines simples)"
      ],
      "correctIndex": 0,
      "answer": "$(X - 1)^2 (X + 1)^2$ (deux racines doubles : $1$ et $-1$)",
      "hint1": "Reconnais une identité remarquable $(X^2 - 1)^2$.",
      "hint2": "Puis factorise la différence de carrés à l'intérieur du carré.",
      "solution": "On reconnaît $X^4 - 2X^2 + 1 = (X^2 - 1)^2 = [(X - 1)(X + 1)]^2 = (X - 1)^2 (X + 1)^2$. Les racines $1$ et $-1$ sont donc toutes les deux des racines de multiplicité 2 (racines doubles)."
    },
    {
      "id": "L1-CMP-3d",
      "tier": 3,
      "type": "mcq",
      "title": "Factorisation d'un polynôme de degré 6 dans $\\mathbb{R}[X]$",
      "skill": "Factoriser un polynôme de degré 6 par changement de variable",
      "statement": "Quelle est la factorisation en produit de polynômes irréductibles dans $\\mathbb{R}[X]$ du polynôme $P(X) = X^6 - 9X^3 + 8$ ?",
      "options": [
        "$(X - 1)(X^2 + X + 1)(X - 2)(X^2 + 2X + 4)$",
        "$(X^3 - 1)(X^3 - 8)$",
        "$(X - 1)^3 (X - 2)^3$",
        "$(X - 1)(X + 1)(X - 2)(X + 2)(X^2 + 1)$"
      ],
      "correctIndex": 0,
      "answer": "$(X - 1)(X^2 + X + 1)(X - 2)(X^2 + 2X + 4)$",
      "hint1": "Effectue le changement de variable $Y = X^3$ pour factoriser le trinôme $Y^2 - 9Y + 8 = (Y - 1)(Y - 8)$.",
      "hint2": "Réinjecte $Y = X^3$, puis factorise $X^3 - 1$ et $X^3 - 8$ à l'aide de l'identité $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$.",
      "solution": "En posant $Y = X^3$, le polynôme devient $Y^2 - 9Y + 8 = (Y - 1)(Y - 8) = (X^3 - 1)(X^3 - 8)$. Or $X^3 - 1 = (X - 1)(X^2 + X + 1)$ et $X^3 - 8 = (X - 2)(X^2 + 2X + 4)$. Comme $\\Delta_1 = 1 - 4 = -3 < 0$ et $\\Delta_2 = 4 - 16 = -12 < 0$, les deux facteurs de degré 2 sont irréductibles dans $\\mathbb{R}[X]$."
    },
    {
      "id": "L1-CMP-3e",
      "tier": 3,
      "type": "mcq",
      "title": "Décomposition en éléments simples avec pôle double",
      "skill": "Identifier la forme générale d'une DES à pôle double",
      "statement": "Quelle est la forme générale théorique de la décomposition en éléments simples dans $\\mathbb{R}(X)$ de $F(X) = \\frac{1}{(X - 1)(X + 1)^2}$ ?",
      "options": [
        "$\\frac{a}{X - 1} + \\frac{b}{(X + 1)^2} + \\frac{c}{X + 1}$",
        "$\\frac{a}{X - 1} + \\frac{b}{(X + 1)^2}$",
        "$\\frac{a}{X - 1} + \\frac{bX + c}{(X + 1)^2}$",
        "$\\frac{a}{X - 1} + \\frac{b}{X + 1}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{a}{X - 1} + \\frac{b}{(X + 1)^2} + \\frac{c}{X + 1}$",
      "hint1": "Le pôle $-1$ est de multiplicité 2 (pôle double).",
      "hint2": "Chaque pôle multiple de multiplicité $m$ génère une somme de fractions $\\sum_{k=1}^m \\frac{\\alpha_k}{(X - a)^k}$.",
      "solution": "Le dénominateur admet le pôle simple $1$ et le pôle double $-1$. D'après le théorème fondamental de décomposition en éléments simples, le pôle double contribue par les deux termes $\\frac{b}{(X + 1)^2} + \\frac{c}{X + 1}$. D'où la forme $\\frac{a}{X - 1} + \\frac{b}{(X + 1)^2} + \\frac{c}{X + 1}$."
    },
    {
      "id": "L1-CMP-3f",
      "tier": 3,
      "type": "mcq",
      "title": "Factorisation d'un polynôme de degré 4 sans racine réelle",
      "skill": "Factoriser par complétion du carré (méthode de Sophie Germain)",
      "statement": "Quelle est la décomposition en facteurs irréductibles dans $\\mathbb{R}[X]$ du polynôme $Q(X) = X^4 + X^2 + 1$ ?",
      "options": [
        "$(X^2 - X + 1)(X^2 + X + 1)$",
        "$(X^2 + 1)^2$",
        "$(X^2 + X - 1)(X^2 - X - 1)$",
        "Irréductible dans $\\mathbb{R}[X]$"
      ],
      "correctIndex": 0,
      "answer": "$(X^2 - X + 1)(X^2 + X + 1)$",
      "hint1": "Complète le carré en écrivant : $X^4 + X^2 + 1 = (X^4 + 2X^2 + 1) - X^2 = (X^2 + 1)^2 - X^2$.",
      "hint2": "Applique ensuite l'identité remarquable $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 1$ et $B = X$, puis vérifie que les discriminants $\\Delta$ des deux trinômes sont strictement négatifs.",
      "solution": "On écrit $X^4 + X^2 + 1 = (X^2 + 1)^2 - X^2$. C'est une différence de carrés $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 1$ et $B = X$, soit $(X^2 + 1 - X)(X^2 + 1 + X) = (X^2 - X + 1)(X^2 + X + 1)$. Pour ces deux facteurs de degré 2, $\\Delta = 1 - 4 = -3 < 0$, ils sont donc irréductibles dans $\\mathbb{R}[X]$."
    },
    {
      "id": "L1-CMP-3g",
      "tier": 3,
      "type": "mcq",
      "title": "Factorisation d'un polynôme de degré 4 sans racine réelle",
      "skill": "Factoriser par complétion du carré (identité de Sophie Germain)",
      "statement": "Quelle est la factorisation en produit de polynômes irréductibles dans $\\mathbb{R}[X]$ du polynôme $Q(X) = X^4 + 4$ ?",
      "options": [
        "$(X^2 - 2X + 2)(X^2 + 2X + 2)$",
        "$(X^2 + 2)^2$",
        "$(X^2 - 2)(X^2 + 2)$",
        "Irréductible dans $\\mathbb{R}[X]$"
      ],
      "correctIndex": 0,
      "answer": "$(X^2 - 2X + 2)(X^2 + 2X + 2)$",
      "hint1": "Complète le carré en écrivant : $X^4 + 4 = (X^4 + 4X^2 + 4) - 4X^2 = (X^2 + 2)^2 - (2X)^2$.",
      "hint2": "Applique ensuite l'identité remarquable $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 2$ et $B = 2X$, puis vérifie que les discriminants $\\Delta$ sont strictement négatifs.",
      "solution": "On applique l'identité de Sophie Germain : $X^4 + 4 = (X^2 + 2)^2 - (2X)^2 = (X^2 - 2X + 2)(X^2 + 2X + 2)$. Pour chaque trinôme, $\\Delta = 4 - 8 = -4 < 0$, donc ils sont tous deux irréductibles dans $\\mathbb{R}[X]$."
    },
    {
      "id": "L1-CMP-3h",
      "tier": 3,
      "type": "mcq",
      "title": "Factorisation d'un polynôme de degré 4 sans racine réelle",
      "skill": "Factoriser par complétion du carré",
      "statement": "Quelle est la décomposition en facteurs irréductibles dans $\\mathbb{R}[X]$ du polynôme $Q(X) = X^4 + 4X^2 + 16$ ?",
      "options": [
        "$(X^2 - 2X + 4)(X^2 + 2X + 4)$",
        "$(X^2 + 4)^2$",
        "$(X^2 + 2X - 4)(X^2 - 2X - 4)$",
        "Irréductible dans $\\mathbb{R}[X]$"
      ],
      "correctIndex": 0,
      "answer": "$(X^2 - 2X + 4)(X^2 + 2X + 4)$",
      "hint1": "Complète le carré en écrivant : $X^4 + 4X^2 + 16 = (X^4 + 8X^2 + 16) - 4X^2 = (X^2 + 4)^2 - (2X)^2$.",
      "hint2": "Applique $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 4$ et $B = 2X$, puis étudie le signe des discriminants.",
      "solution": "On complète le carré : $X^4 + 4X^2 + 16 = (X^2 + 4)^2 - 4X^2 = (X^2 - 2X + 4)(X^2 + 2X + 4)$. Le discriminant de chacun des deux trinômes est $\\Delta = 4 - 16 = -12 < 0$, donc ils sont irréductibles dans $\\mathbb{R}[X]$."
    },
    {
      "id": "L1-CMP-3i",
      "tier": 3,
      "type": "mcq",
      "title": "Factorisation d'un polynôme de degré 4 sans racine réelle",
      "skill": "Factoriser par complétion du carré",
      "statement": "Quelle est la décomposition en facteurs irréductibles dans $\\mathbb{R}[X]$ du polynôme $Q(X) = X^4 + 1$ ?",
      "options": [
        "$(X^2 - \\sqrt{2}X + 1)(X^2 + \\sqrt{2}X + 1)$",
        "$(X^2 + 1)^2$",
        "$(X^2 - 1)^2$",
        "Irréductible dans $\\mathbb{R}[X]$"
      ],
      "correctIndex": 0,
      "answer": "$(X^2 - \\sqrt{2}X + 1)(X^2 + \\sqrt{2}X + 1)$",
      "hint1": "Complète le carré en écrivant : $X^4 + 1 = (X^4 + 2X^2 + 1) - 2X^2 = (X^2 + 1)^2 - (\\sqrt{2}X)^2$.",
      "hint2": "Applique $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 1$ et $B = \\sqrt{2}X$, puis vérifie que les discriminants sont strictement négatifs.",
      "solution": "On a $X^4 + 1 = (X^2 + 1)^2 - 2X^2 = (X^2 - \\sqrt{2}X + 1)(X^2 + \\sqrt{2}X + 1)$. Pour ces deux trinômes, $\\Delta = (-\\sqrt{2})^2 - 4(1)(1) = 2 - 4 = -2 < 0$, ils sont donc irréductibles dans $\\mathbb{R}[X]$."
    },
    {
      "id": "L1-CMP-4",
      "tier": 4,
      "type": "mcq",
      "title": "Polynôme de degré 6 admettant $i$ comme racine double",
      "skill": "Factoriser un polynôme réel connaissant une racine double complexe",
      "statement": "Soit le polynôme $P(X) = X^6 + X^5 + 3X^4 + 2X^3 + 3X^2 + X + 1 \\in \\mathbb{R}[X]$. Sachant que $i$ est racine double de $P$, quelle est sa factorisation en irréductibles dans $\\mathbb{R}[X]$ ?",
      "options": [
        "$(X^2 + 1)^2 (X^2 + X + 1)$",
        "$(X^2 + 1)(X^4 + X^3 + 2X^2 + X + 1)$",
        "$(X^2 + 1)^3$",
        "$(X^2 + 1)^2 (X - 1)(X + 1)$"
      ],
      "correctIndex": 0,
      "answer": "$(X^2 + 1)^2 (X^2 + X + 1)$",
      "hint1": "Comme $P$ est à coefficients réels, si $i$ est racine double, alors son conjugué $-i$ est également racine double.",
      "hint2": "Le produit $(X - i)^2 (X + i)^2 = [(X - i)(X + i)]^2 = (X^2 + 1)^2 = X^4 + 2X^2 + 1$ divise donc $P(X)$ dans $\\mathbb{R}[X]$. Effectue la division euclidienne.",
      "solution": "Comme $P \\in \\mathbb{R}[X]$, la conjugaison assure que $-i$ est également racine double de $P$. Ainsi, le polynôme $[(X - i)(X + i)]^2 = (X^2 + 1)^2 = X^4 + 2X^2 + 1$ divise $P(X)$. La division euclidienne de $P(X)$ par $X^4 + 2X^2 + 1$ donne pour quotient $X^2 + X + 1$. Ce trinôme ayant $\\Delta = 1 - 4 = -3 < 0$, il est irréductible dans $\\mathbb{R}[X]$. D'où $P(X) = (X^2 + 1)^2 (X^2 + X + 1)$."
    },
    {
      "id": "L1-CMP-4b",
      "tier": 4,
      "type": "mcq",
      "title": "Reste de division euclidienne par un carré $(X - 1)^2$",
      "skill": "Calculer le reste par dérivation ou formule de Taylor",
      "statement": "Pour tout entier $n \\ge 2$, quel est le reste de la division euclidienne de $A(X) = X^n$ par $B(X) = (X - 1)^2$ dans $\\mathbb{R}[X]$ ?",
      "options": [
        "$nX - (n - 1)$",
        "$nX + 1$",
        "$n(X - 1)^2$",
        "$X - n$"
      ],
      "correctIndex": 0,
      "answer": "$nX - (n - 1)$",
      "hint1": "Le diviseur $B(X) = (X - 1)^2$ étant de degré 2, le reste $R(X)$ est de degré inférieur ou égal à 1, donc de la forme $R(X) = aX + b$.",
      "hint2": "Écris l'égalité euclidienne $X^n = Q(X)(X - 1)^2 + aX + b$. Évalue cette égalité puis sa dérivée en $X = 1$ pour déterminer $a$ et $b$.",
      "solution": "Comme $\\deg((X - 1)^2) = 2$, le reste est de la forme $R(X) = aX + b$. On a $X^n = Q(X)(X - 1)^2 + aX + b$. En évaluant en $X = 1$ : $1 = a + b$. En dérivant : $n X^{n-1} = Q'(X)(X - 1)^2 + 2Q(X)(X - 1) + a$, d'où en $X = 1$ : $a = n$. On en déduit $b = 1 - n = -(n - 1)$, soit $R(X) = nX - (n - 1)$."
    },
    {
      "id": "L1-CMP-4c",
      "tier": 4,
      "type": "mcq",
      "title": "Détection des racines multiples par le PGCD(P, P')",
      "skill": "Relier les racines multiples au PGCD du polynôme et de sa dérivée",
      "statement": "Calculer $\\text{pgcd}(P, P')$ pour $P(X) = X^3 - 3X + 2$. Qu'en déduit-on rigoureusement sur les racines multiples de $P$ ?",
      "options": [
        "$\\text{pgcd}(P, P') = X - 1$ ; $1$ est racine double de $P$",
        "$\\text{pgcd}(P, P') = 1$ ; $P$ ne possède aucune racine multiple",
        "$\\text{pgcd}(P, P') = X + 1$ ; $-1$ est racine double de $P$",
        "$\\text{pgcd}(P, P') = (X - 1)^2$ ; $1$ est racine triple de $P$"
      ],
      "correctIndex": 0,
      "answer": "$\\text{pgcd}(P, P') = X - 1$ ; $1$ est racine double de $P$",
      "hint1": "Dérive $P$ : $P'(X) = 3X^2 - 3 = 3(X - 1)(X + 1)$.",
      "hint2": "Applique le théorème : les racines de $\\text{pgcd}(P, P')$ sont les racines multiples de $P$, avec multiplicité diminuée de 1.",
      "solution": "On a $P'(X) = 3(X^2 - 1) = 3(X - 1)(X + 1)$. Comme $P(1) = 1 - 3 + 2 = 0$ et $P(-1) = -1 + 3 + 2 = 4 \\neq 0$, le seul facteur commun unitaire est $\\text{pgcd}(P, P') = X - 1$. La racine $1$ est donc de multiplicité $1 + 1 = 2$ (racine double) pour $P$."
    },
    {
      "id": "L1-CMP-4d",
      "tier": 4,
      "type": "mcq",
      "title": "DES avec partie entière et pôle double",
      "skill": "Déterminer la partie entière et le coefficient dominant d'un pôle double",
      "statement": "Pour la fraction rationnelle $G(X) = \\frac{X^3 + 2}{(X - 1)^2 (X + 2)}$, quelle est sa partie entière $E(X)$ et le coefficient $\\alpha$ du terme $\\frac{\\alpha}{(X - 1)^2}$ ?",
      "options": [
        "$E(X) = 1$ et $\\alpha = 1$",
        "$E(X) = 0$ et $\\alpha = 1$",
        "$E(X) = 1$ et $\\alpha = 3$",
        "$E(X) = X$ et $\\alpha = 2$"
      ],
      "correctIndex": 0,
      "answer": "$E(X) = 1$ et $\\alpha = 1$",
      "hint1": "Comme le numérateur $X^3 + 2$ et le dénominateur $(X - 1)^2(X + 2)$ sont tous deux de degré 3, la partie entière est la constante $E(X) = 1/1 = 1$.",
      "hint2": "Pour isoler $\\alpha$, multiplie $G(X)$ par $(X - 1)^2$ puis évalue l'expression restante en $X = 1$.",
      "solution": "On a $\\deg(X^3 + 2) = 3$ et $\\deg((X - 1)^2(X + 2)) = 3$. Le quotient des coefficients dominants vaut $1/1 = 1$, donc la partie entière est $E(X) = 1$. Pour trouver $\\alpha$, on calcule $\\lim_{X \\to 1} (X - 1)^2 G(X) = \\left[\\frac{X^3 + 2}{X + 2}\\right]_{X=1} = \\frac{1 + 2}{1 + 2} = 1$. D'où $E(X) = 1$ et $\\alpha = 1$."
    }
  ],
  "L1-MAT": [
    {
      "id": "L1-MAT-1",
      "tier": 1,
      "type": "mcq",
      "title": "Condition d'inversibilité avec paramètre",
      "skill": "Condition d'inversibilité d'une matrice carrée",
      "statement": "Pour quelle valeur de $\\lambda \\in \\mathbb{R}$ la matrice $\\begin{pmatrix} \\lambda & 3 \\\\ 2 & 6 \\end{pmatrix}$ n'est-elle PAS inversible ?",
      "options": [
        "$\\lambda = 1$",
        "$\\lambda = 0$",
        "$\\lambda = 4$",
        "$\\lambda = -1$"
      ],
      "correctIndex": 0,
      "answer": "$\\lambda = 1$",
      "hint1": "Une matrice carrée n'est pas inversible si et seulement si son déterminant est nul : $\\det(A) = 0$.",
      "hint2": "$\\det(A) = 6\\lambda - 6 = 0 \\iff \\lambda = 1$.",
      "solution": "Le déterminant de la matrice est $\\det(A) = 6\\lambda - 3 \\times 2 = 6\\lambda - 6$. La matrice est non inversible si et seulement si $\\det(A) = 0 \\iff 6\\lambda = 6 \\iff \\lambda = 1$."
    },
    {
      "id": "L1-MAT-1b",
      "tier": 1,
      "type": "mcq",
      "title": "Déterminant 2x2 et matrice inversible",
      "skill": "Calculer le déterminant d'une matrice 2x2 et tester son inversibilité",
      "statement": "Calculer le déterminant de la matrice $A = \\begin{pmatrix} 3 & 4 \\\\ 2 & 2 \\end{pmatrix}$. $A$ est-elle inversible ?",
      "options": [
        "$\\det(A) = -2$, inversible",
        "$\\det(A) = -2$, non inversible",
        "$\\det(A) = 14$, inversible",
        "$\\det(A) = 2$, inversible"
      ],
      "correctIndex": 0,
      "answer": "$\\det(A) = -2$, inversible",
      "hint1": "Formule du déterminant 2x2 : $\\det = ad - bc$.",
      "hint2": "Une matrice carrée est inversible si et seulement si son déterminant est non nul ($\\det(A) \\neq 0$).",
      "solution": "$\\det(A) = 3 \\times 2 - 4 \\times 2 = 6 - 8 = -2$. Comme $\\det(A) = -2 \\neq 0$, la matrice est inversible."
    },
    {
      "id": "L1-MAT-1c",
      "tier": 1,
      "type": "mcq",
      "title": "Déterminant 2x2 et matrice non inversible",
      "skill": "Identifier une matrice non inversible par son déterminant nul",
      "statement": "Calculer le déterminant de la matrice $A = \\begin{pmatrix} 2 & 6 \\\\ 1 & 3 \\end{pmatrix}$. $A$ est-elle inversible ?",
      "options": [
        "$\\det(A) = 0$, non inversible",
        "$\\det(A) = 0$, inversible",
        "$\\det(A) = 12$, inversible",
        "$\\det(A) = 6$, non inversible"
      ],
      "correctIndex": 0,
      "answer": "$\\det(A) = 0$, non inversible",
      "hint1": "Formule du déterminant 2x2 : $\\det(A) = ad - bc$.",
      "hint2": "Remarque que la première ligne est le double de la seconde ($L_1 = 2L_2$).",
      "solution": "$\\det(A) = 2 \\times 3 - 6 \\times 1 = 6 - 6 = 0$. Comme son déterminant est nul (les lignes sont liées), la matrice n'est pas inversible."
    },
    {
      "id": "L1-MAT-1d",
      "tier": 1,
      "type": "mcq",
      "title": "Déterminant d'une matrice triangulaire",
      "skill": "Calculer le déterminant par produit des pivots",
      "statement": "Calculer le déterminant de la matrice triangulaire supérieure $T = \\begin{pmatrix} 3 & -2 & 1 \\\\ 0 & 2 & 5 \\\\ 0 & 0 & 0 \\end{pmatrix}$. $T$ est-elle inversible ?",
      "options": [
        "$\\det(T) = 0$, non inversible",
        "$\\det(T) = 0$, inversible",
        "$\\det(T) = 6$, inversible",
        "$\\det(T) = 5$, non inversible"
      ],
      "correctIndex": 0,
      "answer": "$\\det(T) = 0$, non inversible",
      "hint1": "Pour toute matrice triangulaire, le déterminant est le produit de ses éléments diagonaux.",
      "hint2": "L'un des éléments diagonaux vaut 0 : que vaut le produit ?",
      "solution": "Pour une matrice triangulaire, $\\det(T) = 3 \\times 2 \\times 0 = 0$. Comme $\\det(T) = 0$, la matrice n'est pas inversible."
    },
    {
      "id": "L1-MAT-2",
      "tier": 2,
      "type": "mcq",
      "title": "Produit matriciel",
      "skill": "Calculer le produit de deux matrices $2 \\times 2$",
      "statement": "Pour $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ et $B = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$, que vaut $AB$ ?",
      "options": [
        "$\\begin{pmatrix} 2 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & 2 \\\\ 1 & 0 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0 & 2 \\\\ 1 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
      ],
      "correctIndex": 0,
      "answer": "$\\begin{pmatrix} 2 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
      "hint1": "Ligne 1 par colonne 1 : $1 \\times 0 + 2 \\times 1 = 2$.",
      "hint2": "Ligne 1 par colonne 2 : $1 \\times 1 + 2 \\times 0 = 1$.",
      "solution": "$AB = \\begin{pmatrix} 1 \\times 0 + 2 \\times 1 & 1 \\times 1 + 2 \\times 0 \\\\ 0 \\times 0 + 1 \\times 1 & 0 \\times 1 + 1 \\times 0 \\end{pmatrix} = \\begin{pmatrix} 2 & 1 \\\\ 1 & 0 \\end{pmatrix}$."
    },
    {
      "id": "L1-MAT-3",
      "tier": 3,
      "type": "mcq",
      "title": "Résolution de système échelonné",
      "skill": "Résoudre un système linéaire échelonné en lignes",
      "statement": "Quelle est l'unique solution du système $\\begin{cases} x + y + z = 6 \\\\ 2y + z = 7 \\\\ 3z = 9 \\end{cases}$ ?",
      "options": [
        "$(x, y, z) = (1, 2, 3)$",
        "$(x, y, z) = (2, 1, 3)$",
        "$(x, y, z) = (3, 2, 1)$",
        "$(x, y, z) = (0, 3, 3)$"
      ],
      "correctIndex": 0,
      "answer": "$(x, y, z) = (1, 2, 3)$",
      "hint1": "Commence par $3z = 9 \\implies z = 3$.",
      "hint2": "$2y + 3 = 7 \\implies y = 2$, puis $x + 2 + 3 = 6 \\implies x = 1$.",
      "solution": "$3z = 9 \\implies z = 3$. Puis $2y + 3 = 7 \\implies y = 2$. Enfin $x + 2 + 3 = 6 \\implies x = 1$."
    },
    {
      "id": "L1-MAT-4",
      "tier": 4,
      "type": "mcq",
      "title": "Inversion par élimination de Gauss-Jordan",
      "skill": "Calculer l'inverse d'une matrice $3 \\times 3$",
      "statement": "Quelle est la matrice inverse de $A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 4 & 3 & 1 \\end{pmatrix}$ ?",
      "options": [
        "$\\begin{pmatrix} 1 & 0 & 0 \\\\ -2 & 1 & 0 \\\\ 2 & -3 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ -4 & -3 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & 2 & 4 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} -1 & 0 & 0 \\\\ 2 & -1 & 0 \\\\ -2 & 3 & -1 \\end{pmatrix}$"
      ],
      "correctIndex": 0,
      "answer": "$\\begin{pmatrix} 1 & 0 & 0 \\\\ -2 & 1 & 0 \\\\ 2 & -3 & 1 \\end{pmatrix}$",
      "hint1": "Opérations : $L_2 \\leftarrow L_2 - 2L_1$ puis $L_3 \\leftarrow L_3 - 3L_2 - 4L_1$.",
      "hint2": "Le coefficient en position $(3,1)$ vaut $-4 - 3(-2) = 2$.",
      "solution": "Par élimination de Gauss-Jordan sur $(A | I_3)$, on trouve $A^{-1} = \\begin{pmatrix} 1 & 0 & 0 \\\\ -2 & 1 & 0 \\\\ 2 & -3 & 1 \\end{pmatrix}$."
    }
  ],
  "L1-EV1": [
    {
      "id": "L1-EV1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Caractérisation d'un sous-espace vectoriel (SEV)",
      "skill": "Vérifier la condition $0_E \\in F$ et la stabilité par combinaison linéaire",
      "statement": "Lequel des ensembles suivants est un sous-espace vectoriel de $\\mathbb{R}^3$ ?",
      "options": [
        "$F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - 3y + z = 0\\}$",
        "$G = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + y + z = 1\\}$",
        "$H = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x^2 + y^2 = z^2\\}$",
        "$K = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid xy \\ge 0\\}$"
      ],
      "correctIndex": 0,
      "answer": "$F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - 3y + z = 0\\}$",
      "hint1": "Un s.e.v. doit contenir $(0,0,0)$ et être stable par combinaison linéaire.",
      "hint2": "$F$ est le noyau de la forme linéaire non nulle $(x,y,z) \\mapsto 2x - 3y + z$.",
      "solution": "$F$ contient le vecteur nul $(0,0,0)$ et est défini par une équation linéaire homogène (forme linéaire). Pour $G$, $(0,0,0) \\notin G$. Pour $H$, la condition quadratique n'est pas stable par addition. Pour $K$, ce n'est pas stable par multiplication par un scalaire négatif. Seul $F$ est un SEV (hyperplan vectoriel de dimension 2)."
    },
    {
      "id": "L1-EV1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Famille de vecteurs sans composante nulle dans $\\mathbb{R}^3$",
      "skill": "Tester l'indépendance linéaire de vecteurs sans coefficients nuls",
      "statement": "Dans $\\mathbb{R}^3$, la famille $\\mathcal{F} = \\{u = (1, 2, -1), \\, v = (2, -1, 3), \\, w = (3, 1, 2)\\}$ est-elle libre ou liée ?",
      "options": [
        "Liée, car $w = u + v$",
        "Libre, car aucun vecteur ne contient de coordonnée nulle",
        "Libre, car le déterminant de la famille vaut 1",
        "Génératrice sans être liée"
      ],
      "correctIndex": 0,
      "answer": "Liée, car $w = u + v$",
      "hint1": "Somme terme à terme les composantes de $u$ et $v$ : $1+2=3, 2-1=1, -1+3=2$.",
      "hint2": "Une famille est liée dès qu'un vecteur s'exprime comme combinaison linéaire des autres.",
      "solution": "On a immédiatement $u + v = (1+2, \\, 2-1, \\, -1+3) = (3, 1, 2) = w$. La relation $u + v - w = 0_{\\mathbb{R}^3}$ fournit une combinaison linéaire non triviale à coefficients non nuls. La famille est donc liée (et son déterminant est nul)."
    },
    {
      "id": "L1-EV1-2b",
      "tier": 2,
      "type": "mcq",
      "title": "Base de $\\mathbb{R}^3$ sans coordonnée nulle",
      "skill": "Vérifier la liberté par calcul de déterminant non nul",
      "statement": "Dans $\\mathbb{R}^3$, la famille $\\mathcal{B} = \\{u = (1, 1, 2), \\, v = (2, -1, 1), \\, w = (1, 3, 1)\\}$ forme-t-elle une base de $\\mathbb{R}^3$ ?",
      "options": [
        "Oui, car c'est une famille libre (déterminant non nul égal à 9) de 3 vecteurs dans $\\mathbb{R}^3$",
        "Non, car 3 vecteurs sans composante nulle sont toujours liés",
        "Non, car le déterminant vaut 0",
        "Génératrice mais non libre"
      ],
      "correctIndex": 0,
      "answer": "Oui, car c'est une famille libre (déterminant non nul égal à 9) de 3 vecteurs dans $\\mathbb{R}^3$",
      "hint1": "Calcule le déterminant de la matrice formée par les trois vecteurs colonnes.",
      "hint2": "Dans un espace de dimension 3, 3 vecteurs libres forment automatiquement une base.",
      "solution": "Le déterminant de la matrice formée par ces vecteurs est $\\det(u, v, w) = 1((-1)(1) - (1)(3)) - 1((2)(1) - (1)(1)) + 2((2)(3) - (-1)(1)) = -4 - 1 + 14 = 9 \\neq 0$. La famille est donc libre. Comme $\\text{Card}(\\mathcal{B}) = 3 = \\dim(\\mathbb{R}^3)$, $\\mathcal{B}$ est une base de $\\mathbb{R}^3$."
    },
    {
      "id": "L1-EV1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Base et dimension d'un plan vectoriel de $\\mathbb{R}^3$",
      "skill": "Déterminer une base et la dimension d'un sous-espace cartésien",
      "statement": "Quelle est la dimension et une base du sous-espace $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x - 2y + z = 0\\}$ ?",
      "options": [
        "$\\dim(F) = 2$, de base $\\mathcal{B} = \\{(2, 1, 0), \\, (-1, 0, 1)\\}$",
        "$\\dim(F) = 1$, de base $\\mathcal{B} = \\{(1, -2, 1)\\}$",
        "$\\dim(F) = 3$, de base canonique de $\\mathbb{R}^3$",
        "$\\dim(F) = 2$, de base $\\mathcal{B} = \\{(1, 1, 1), \\, (0, 0, 0)\\}$"
      ],
      "correctIndex": 0,
      "answer": "$\\dim(F) = 2$, de base $\\mathcal{B} = \\{(2, 1, 0), \\, (-1, 0, 1)\\}$",
      "hint1": "Isole $x$ dans l'équation : $x = 2y - z$.",
      "hint2": "Décompose le vecteur $(x, y, z) = y(2, 1, 0) + z(-1, 0, 1)$.",
      "solution": "Un vecteur $(x, y, z)$ appartient à $F$ ssi $x = 2y - z$. Donc $(x, y, z) = (2y - z, y, z) = y(2, 1, 0) + z(-1, 0, 1)$. Les deux vecteurs $(2, 1, 0)$ et $(-1, 0, 1)$ ne sont pas colinéaires, ils sont libres et engendrent $F$. Ainsi, $\\dim(F) = 2$ et $\{(2, 1, 0), (-1, 0, 1)\}$ est une base de $F$."
    },
    {
      "id": "L1-EV1-3b",
      "tier": 3,
      "type": "mcq",
      "title": "Sous-espaces supplémentaires et somme directe dans $\\mathbb{R}^3$",
      "skill": "Vérifier la condition de supplémentarité $F \\oplus D = \\mathbb{R}^3$",
      "statement": "Soit le plan vectoriel $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + y + z = 0\\}$. Pour quelle droite vectorielle $D = \\text{Vect}(u)$ a-t-on $F \\oplus D = \\mathbb{R}^3$ ?",
      "options": [
        "Pour $u = (1, 1, 1)$, car $(1, 1, 1) \\notin F$",
        "Pour $u = (1, -1, 0)$, car $(1, -1, 0) \\in F$",
        "Pour $u = (2, -1, -1)$, car $2 + (-1) + (-1) = 0$",
        "Pour aucun vecteur, car un plan n'a pas de supplémentaire"
      ],
      "correctIndex": 0,
      "answer": "Pour $u = (1, 1, 1)$, car $(1, 1, 1) \\notin F$",
      "hint1": "$\\dim(F) + \\dim(D) = 2 + 1 = 3$. La somme est directe ssi $F \\cap D = \\{0\\}$.",
      "hint2": "La condition $F \\cap D = \\{0\\}$ équivaut au fait que le vecteur directeur $u$ n'appartient pas au plan $F$.",
      "solution": "Comme $\\dim(F) = 2$ et $\\dim(D) = 1$, la somme des dimensions vaut 3. Pour que la somme soit directe, il faut et suffit que le vecteur directeur $u$ n'appartienne pas à $F$. Pour $u = (1, 1, 1)$, $1+1+1 = 3 \\neq 0$, donc $u \\notin F$. Ainsi $F \\cap D = \\{0\\}$ et $F \\oplus D = \\mathbb{R}^3$."
    },
    {
      "id": "L1-EV1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Formule de Grassmann et intersection d'hyperplans dans $\\mathbb{R}^4$",
      "skill": "Calculer la dimension d'une intersection de sous-espaces",
      "statement": "Soient $F$ et $G$ deux sous-espaces vectoriels distincts de dimension 3 dans $\\mathbb{R}^4$. Que vaut la dimension de $F \\cap G$ ?",
      "options": [
        "$\\dim(F \\cap G) = 2$",
        "$\\dim(F \\cap G) = 3$",
        "$\\dim(F \\cap G) = 1$",
        "$\\dim(F \\cap G) = 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\dim(F \\cap G) = 2$",
      "hint1": "Formule de Grassmann : $\\dim(F \\cap G) = \\dim F + \\dim G - \\dim(F+G)$.",
      "hint2": "Comme $F \\neq G$ et $\\dim F = 3$, l'espace somme $F + G$ est de dimension 4.",
      "solution": "Comme $F \\neq G$ et $F \\subset F + G \\subset \\mathbb{R}^4$, la dimension de $F+G$ est strictement supérieure à 3, donc $\\dim(F+G) = 4$. D'après la formule de Grassmann : $\\dim(F \\cap G) = \\dim(F) + \\dim(G) - \\dim(F + G) = 3 + 3 - 4 = 2$."
    },
    {
      "id": "L1-EV1-4b",
      "tier": 4,
      "type": "mcq",
      "title": "Somme directe des matrices symétriques et antisymétriques",
      "skill": "Maîtriser la décomposition $\\mathcal{M}_n(\\mathbb{R}) = \\mathcal{S}_n(\\mathbb{R}) \\oplus \\mathcal{A}_n(\\mathbb{R})$",
      "statement": "Dans l'espace $\\mathcal{M}_n(\\mathbb{R})$, quelles sont les dimensions respectives des sous-espaces $\\mathcal{S}_n(\\mathbb{R})$ (symétriques) et $\\mathcal{A}_n(\\mathbb{R})$ (antisymétriques) ?",
      "options": [
        "$\\dim \\mathcal{S}_n = \\frac{n(n+1)}{2}$ et $\\dim \\mathcal{A}_n = \\frac{n(n-1)}{2}$, avec $\\mathcal{S}_n \\oplus \\mathcal{A}_n = \\mathcal{M}_n(\\mathbb{R})$",
        "$\\dim \\mathcal{S}_n = n^2 - n$ et $\\dim \\mathcal{A}_n = n$",
        "$\\dim \\mathcal{S}_n = \\frac{n^2}{2}$ et $\\dim \\mathcal{A}_n = \\frac{n^2}{2}$",
        "$\\dim \\mathcal{S}_n = n$ et $\\dim \\mathcal{A}_n = n - 1$"
      ],
      "correctIndex": 0,
      "answer": "$\\dim \\mathcal{S}_n = \\frac{n(n+1)}{2}$ et $\\dim \\mathcal{A}_n = \\frac{n(n-1)}{2}$, avec $\\mathcal{S}_n \\oplus \\mathcal{A}_n = \\mathcal{M}_n(\\mathbb{R})$",
      "hint1": "Une matrice symétrique a $n$ termes diagonaux et $\\frac{n(n-1)}{2}$ termes au-dessus.",
      "hint2": "Pour une matrice antisymétrique, la diagonale est obligatoirement nulle.",
      "solution": "Pour une matrice symétrique, les coefficients sous la diagonale sont déterminés par ceux du dessus : il y a $n + \\frac{n(n-1)}{2} = \\frac{n(n+1)}{2}$ paramètres libres. Pour une matrice antisymétrique, la diagonale est nulle et il y a $\\frac{n(n-1)}{2}$ paramètres libres. La somme de leurs dimensions donne bien $\\frac{n(n+1)}{2} + \\frac{n(n-1)}{2} = n^2 = \\dim \\mathcal{M}_n(\\mathbb{R})$ et leur intersection est réduite à la matrice nulle."
    }
  ],
  "L1-APP": [
    {
      "id": "L1-APP-1",
      "tier": 1,
      "type": "mcq",
      "title": "Calcul concret de l'image d'un vecteur par une application linéaire",
      "skill": "Évaluer une application linéaire définie sur $\\mathbb{R}^2$",
      "statement": "Soit $f : \\mathbb{R}^2 \\to \\mathbb{R}^2$ définie par $f(x, y) = (2x - 3y, \\, x + 4y)$. Quelle est l'image du vecteur $u = (1, -2)$ par $f$ ?",
      "options": [
        "$f(1, -2) = (8, -7)$",
        "$f(1, -2) = (-4, -7)$",
        "$f(1, -2) = (8, 9)$",
        "$f(1, -2) = (2, -8)$"
      ],
      "correctIndex": 0,
      "answer": "$f(1, -2) = (8, -7)$",
      "hint1": "Remplace $x$ par 1 et $y$ par -2 dans chaque composante de la formule.",
      "hint2": "Première composante : $2(1) - 3(-2) = 2 + 6 = 8$. Seconde composante : $1 + 4(-2) = 1 - 8 = -7$.",
      "solution": "On applique la définition de l'application : $f(1, -2) = (2(1) - 3(-2), \\, 1 + 4(-2)) = (2 + 6, \\, 1 - 8) = (8, -7)$."
    },
    {
      "id": "L1-APP-1b",
      "tier": 1,
      "type": "mcq",
      "title": "Dérivation linéaire concrète dans $\\mathbb{R}_2[X]$",
      "skill": "Appliquer un opérateur linéaire sur des polynômes",
      "statement": "Soit l'application linéaire de dérivation $D : \\mathbb{R}_2[X] \\to \\mathbb{R}_1[X]$ définie par $D(P) = P'$. Quelle est l'image de $P(X) = 3X^2 - 5X + 4$ ?",
      "options": [
        "$D(P) = 6X - 5$",
        "$D(P) = 3X - 5$",
        "$D(P) = 6X^2 - 5X$",
        "$D(P) = 6X - 1$"
      ],
      "correctIndex": 0,
      "answer": "$D(P) = 6X - 5$",
      "hint1": "Dérive terme à terme par linéarité : $(3X^2)' = 6X$, $(-5X)' = -5$, $(4)' = 0$.",
      "hint2": "La constante disparaît lors de la dérivation.",
      "solution": "Par linéarité de la dérivation : $D(3X^2 - 5X + 4) = 3(X^2)' - 5(X)' + (4)' = 3(2X) - 5(1) + 0 = 6X - 5$."
    },
    {
      "id": "L1-APP-2",
      "tier": 2,
      "type": "mcq",
      "title": "Noyau, image et surjectivité concrète : $\\mathbb{R}^3 \\to \\mathbb{R}^2$",
      "skill": "Déterminer explicitement le noyau et déduire rang et surjectivité",
      "statement": "Soit l'application linéaire $f : \\mathbb{R}^3 \\to \\mathbb{R}^2$ définie par $f(x, y, z) = (x + y, \\, y - z)$. Quel est son noyau $\\text{Ker}(f)$, et $f$ est-elle injective ou surjective ?",
      "options": [
        "$\\text{Ker}(f) = \\text{Vect}((-1, 1, 1))$ : $f$ n'est pas injective, mais elle est surjective (rang = 2)",
        "$\\text{Ker}(f) = \\{(0, 0, 0)\\}$ : $f$ est injective et surjective (isomorphisme)",
        "$\\text{Ker}(f) = \\text{Vect}((1, 1, 1))$ : $f$ est injective mais non surjective",
        "$\\text{Ker}(f) = \\mathbb{R}^3$ : $f$ est l'application nulle"
      ],
      "correctIndex": 0,
      "answer": "$\\text{Ker}(f) = \\text{Vect}((-1, 1, 1))$ : $f$ n'est pas injective, mais elle est surjective (rang = 2)",
      "hint1": "Résous $f(x, y, z) = (0, 0) \\iff x + y = 0$ et $y - z = 0$.",
      "hint2": "On obtient $x = -y$ et $z = y$. Le vecteur $(x, y, z)$ s'écrit $y(-1, 1, 1)$.",
      "solution": "On résout $f(x, y, z) = (0, 0)$ :\n$\\begin{cases} x + y = 0 \\\\ y - z = 0 \\end{cases} \\iff \\begin{cases} x = -y \\\\ z = y \\end{cases}$. Ainsi $(x, y, z) = (-y, y, y) = y(-1, 1, 1)$.\nLe noyau est la droite vectorielle $\\text{Ker}(f) = \\text{Vect}((-1, 1, 1))$, de dimension 1. Comme $\\text{Ker}(f) \\neq \\{0\\}$, $f$ n'est pas injective. Par le théorème du rang, $\\text{rg}(f) = \\dim(\\mathbb{R}^3) - \\dim(\\text{Ker} f) = 3 - 1 = 2 = \\dim(\\mathbb{R}^2)$, donc $f$ est surjective."
    },
    {
      "id": "L1-APP-2b",
      "tier": 2,
      "type": "mcq",
      "title": "Noyau, image et injectivité concrète : $\\mathbb{R}^2 \\to \\mathbb{R}^3$",
      "skill": "Prouver l'injectivité d'une application de rang 2",
      "statement": "Soit l'application linéaire $g : \\mathbb{R}^2 \\to \\mathbb{R}^3$ définie par $g(x, y) = (x, \\, y, \\, x + y)$. Quel est son noyau $\\text{Ker}(g)$, et $g$ est-elle injective ou surjective ?",
      "options": [
        "$\\text{Ker}(g) = \\{(0, 0)\\}$ : $g$ est injective mais n'est pas surjective (rang = 2 < 3)",
        "$\\text{Ker}(g) = \\text{Vect}((1, -1))$ : $g$ n'est pas injective mais est surjective",
        "$\\text{Ker}(g) = \\{(0, 0)\\}$ : $g$ est bijective (isomorphisme)",
        "$\\text{Ker}(g) = \\mathbb{R}^2$ : le rang vaut 0"
      ],
      "correctIndex": 0,
      "answer": "$\\text{Ker}(g) = \\{(0, 0)\\}$ : $g$ est injective mais n'est pas surjective (rang = 2 < 3)",
      "hint1": "$g(x, y) = (0, 0, 0) \\implies x = 0$ et $y = 0$.",
      "hint2": "Par le théorème du rang : $\\text{rg}(g) = 2 - 0 = 2 < \\dim(\\mathbb{R}^3) = 3$.",
      "solution": "On a $g(x, y) = (0, 0, 0) \\iff x=0, y=0, x+y=0 \\iff (x, y) = (0, 0)$. Le noyau est réduit à l'origine : $\\text{Ker}(g) = \\{(0, 0)\\}$, donc $g$ est injective. Par le théorème du rang, $\\text{rg}(g) = 2 - 0 = 2$. Comme l'espace d'arrivée $\\mathbb{R}^3$ est de dimension 3, $\\text{rg}(g) < 3$, donc $g$ n'est pas surjective."
    },
    {
      "id": "L1-APP-3",
      "tier": 3,
      "type": "mcq",
      "title": "Matrice de dérivation dans une base de polynômes",
      "skill": "Représenter un opérateur linéaire dans une base",
      "statement": "Pour $D : \\mathbb{R}_2[X] \\to \\mathbb{R}_2[X], P \\mapsto P'$, quelle est la trace et la structure de sa matrice dans la base $(1, X, X^2)$ ?",
      "options": [
        "Trace nulle et matrice triangulaire supérieure stricte nilpotente",
        "Trace égale à 3 et matrice inversible",
        "Trace égale à 2 et matrice diagonale",
        "Trace nulle et matrice orthogonale"
      ],
      "correctIndex": 0,
      "answer": "Trace nulle et matrice triangulaire supérieure stricte nilpotente",
      "hint1": "$D(1) = 0$, $D(X) = 1$, $D(X^2) = 2X$.",
      "hint2": "La matrice est $\\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\\\ 0 & 0 & 0 \\end{pmatrix}$. Les éléments diagonaux sont tous nuls.",
      "solution": "Dans la base canonique $(1, X, X^2)$ :\n$D(1) = 0$, $D(X) = 1$, $D(X^2) = 2X$.\nLa matrice est donc $M = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\\\ 0 & 0 & 0 \\end{pmatrix}$. C'est une matrice triangulaire supérieure stricte : sa diagonale est nulle, sa trace vaut 0, et elle est nilpotente d'indice 3 ($M^3 = 0$)."
    },
    {
      "id": "L1-APP-4",
      "tier": 4,
      "type": "mcq",
      "title": "Caractérisation algébrique des projecteurs",
      "skill": "Caractériser les projecteurs $p^2 = p$ et la décomposition de l'espace",
      "statement": "Soit $p \\in \\mathcal{L}(E)$. Quelle relation caractérise le fait que $p$ est un projecteur, et quelle est la décomposition associée de $E$ ?",
      "options": [
        "$p^2 = p$ et $E = \\text{Ker}(p) \\oplus \\text{Im}(p)$",
        "$p^2 = \\text{Id}_E$ et $E = \\text{Ker}(p) \\oplus \\text{Im}(p)$",
        "$p^2 = 0$ et $E = \\text{Ker}(p) + \\text{Im}(p)$",
        "$p^3 = p$ et $\\text{Ker}(p) = \\text{Im}(p)$"
      ],
      "correctIndex": 0,
      "answer": "$p^2 = p$ et $E = \\text{Ker}(p) \\oplus \\text{Im}(p)$",
      "hint1": "Un projecteur vérifie $p \\circ p = p$ (idempotence).",
      "hint2": "Tout vecteur s'écrit de façon unique $x = (x - p(x)) + p(x)$.",
      "solution": "Un endomorphisme est un projecteur ssi $p^2 = p$. On a alors immédiatement $E = \\text{Ker}(p) \\oplus \\text{Im}(p)$, la projection se faisant sur $\\text{Im}(p)$ parallèlement à $\\text{Ker}(p)$. La relation $s^2 = \\text{Id}_E$ caractérise quant à elle les symétries vectorielles."
    },
    {
      "id": "L1-APP-4b",
      "tier": 4,
      "type": "mcq",
      "title": "Équivalences fondamentales en dimension finie",
      "skill": "Maîtriser le théorème reliant injectivité, surjectivité et bijectivité",
      "statement": "Soit $E$ un espace vectoriel de dimension FINIE $n$, et $f \\in \\mathcal{L}(E)$ un endomorphisme. Laquelle des affirmations suivantes est TOUJOURS vraie ?",
      "options": [
        "$f \\text{ est injectif} \\iff f \\text{ est surjectif} \\iff f \\text{ est bijectif}$",
        "$f \\text{ injectif} \\implies f = \\text{Id}_E$",
        "L'équivalence entre injectivité et surjectivité reste vraie même en dimension infinie",
        "$f \\text{ surjectif} \\implies \\text{Ker}(f) = E$"
      ],
      "correctIndex": 0,
      "answer": "$f \\text{ est injectif} \\iff f \\text{ est surjectif} \\iff f \\text{ est bijectif}$",
      "hint1": "Utilise le théorème du rang : $\\dim(E) = \\dim(\\text{Ker} f) + \\text{rg}(f)$.",
      "hint2": "Comme l'espace de départ et d'arrivée ont la même dimension finie : $\\dim(\\text{Ker} f) = 0 \\iff \\text{rg}(f) = \\dim(E)$.",
      "solution": "D'après le Théorème du Rang : $\\dim(E) = \\dim(\\text{Ker} f) + \\text{rg}(f)$. Comme départ et arrivée ont la même dimension finie $n$ : $f$ injectif $\\iff \\text{Ker}(f) = \\{0\\} \\iff \\text{rg}(f) = n = \\dim(E) \\iff f$ surjectif. Attention : ceci est faux en dimension infinie (par exemple l'opérateur de dérivation sur $\\mathbb{R}[X]$ est surjectif mais non injectif)."
    }
  ],
  "L1-REL": [
    {
      "id": "L1-REL-1",
      "tier": 1,
      "type": "mcq",
      "title": "Borne supérieure d'une partie de R",
      "skill": "Déterminer la borne supérieure d'un ensemble",
      "statement": "Quelle est la borne supérieure dans $\\mathbb{R}$ de $A = \\{ 1 - 1/n \\mid n \\in \\mathbb{N}^* \\}$ ?",
      "options": [
        "$1$",
        "$0$",
        "$1/2$",
        "Aucune"
      ],
      "correctIndex": 0,
      "answer": "$1$",
      "hint1": "Pour tout $n \\ge 1$, $1 - 1/n < 1$.",
      "hint2": "La suite $1 - 1/n$ converge vers 1.",
      "solution": "$1$ est le plus petit des majorants de $A$. Bien qu'il n'appartienne pas à $A$, $\\sup(A) = 1$."
    },
    {
      "id": "L1-REL-2",
      "tier": 2,
      "type": "mcq",
      "title": "Densité de Q et D dans R",
      "skill": "Comprendre et appliquer la densité des rationnels et décimaux dans R",
      "statement": "Soient deux réels $x, y \\in \\mathbb{R}$ tels que $x < y$. L'existence prouvée d'un rationnel $r \\in \\mathbb{Q}$ (et d'un décimal $d \\in \\mathbb{D}$) vérifiant $x < r < y$ caractérise :",
      "options": [
        "La densité de $\\mathbb{Q}$ et $\\mathbb{D}$ dans $\\mathbb{R}$",
        "La compacité du segment $[x, y]$",
        "La dénombrabilité du corps $\\mathbb{R}$",
        "L'absence de borne supérieure"
      ],
      "correctIndex": 0,
      "answer": "La densité de $\\mathbb{Q}$ et $\\mathbb{D}$ dans $\\mathbb{R}$",
      "hint1": "Tout intervalle ouvert non vide $]x, y[$ rencontre $\\mathbb{Q}$ et $\\mathbb{D}$.",
      "hint2": "Par la propriété d'Archimède, il existe $q \\in \\mathbb{N}^*$ tel que $q(y - x) > 1$, puis $p = \\lfloor qx \\rfloor + 1$ donne $x < p/q < y$.",
      "solution": "Une partie $A \\subset \\mathbb{R}$ est dense dans $\\mathbb{R}$ si tout intervalle ouvert non vide contient au moins un élément de $A$. C'est le cas pour $\\mathbb{Q}$ et pour l'ensemble des nombres décimaux $\\mathbb{D} = \\{p/10^q \\mid p \\in \\mathbb{Z}, q \\in \\mathbb{N}\\}$."
    },
    {
      "id": "L1-REL-3",
      "tier": 3,
      "type": "mcq",
      "title": "Propriété d'Archimède dans R",
      "skill": "Formaliser et manipuler le caractère archimédien de R",
      "statement": "Quelle est l'énoncé quantifié exact de la propriété d'Archimède dans $\\mathbb{R}$ ?",
      "options": [
        "$\\forall x \\in \\mathbb{R}_+^*, \\quad \\forall y \\in \\mathbb{R}, \\quad \\exists n \\in \\mathbb{N}, \\quad n x > y$",
        "$\\forall x, y \\in \\mathbb{R}, \\quad x < y \\implies x^2 < y^2$",
        "$\\forall x \\in \\mathbb{R}, \\quad \\exists n \\in \\mathbb{N}, \\quad n \\le x < n+1$",
        "$\\forall x \\in \\mathbb{R}, \\quad |x| \\ge 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\forall x \\in \\mathbb{R}_+^*, \\quad \\forall y \\in \\mathbb{R}, \\quad \\exists n \\in \\mathbb{N}, \\quad n x > y$",
      "hint1": "Elle signifie que l'ensemble $\\mathbb{N}$ n'est pas majoré dans $\\mathbb{R}$.",
      "hint2": "Pour tout pas $x > 0$ aussi petit soit-il, en faisant suffisamment de pas $n$, on dépasse tout réel $y$.",
      "solution": "Le corps $\\mathbb{R}$ est archimédien : $\\forall x > 0, \\forall y \\in \\mathbb{R}, \\exists n \\in \\mathbb{N}, nx > y$. C'est ce qui garantit l'existence de la partie entière $\\lfloor x \\rfloor$ pour tout réel."
    },
    {
      "id": "L1-REL-4",
      "tier": 4,
      "type": "mcq",
      "title": "Borne supérieure dans R d'une partie de Q",
      "skill": "Prouver la valeur d'une borne supérieure et l'absence de maximum",
      "statement": "Soit la partie $A = \\{x \\in \\mathbb{Q} \\mid x < \\sqrt{2}\\}$. Que vaut $\\sup(A)$ dans $\\mathbb{R}$, et $A$ admet-il un plus grand élément ?",
      "options": [
        "$\\sup(A) = \\sqrt{2}$ et $A$ n'admet aucun plus grand élément",
        "$\\sup(A) = \\sqrt{2}$ et $\\max(A) = \\sqrt{2}$",
        "$\\sup(A) = 1,414$ et $\\max(A)$ n'existe pas",
        "$A$ n'est pas majorée dans $\\mathbb{R}$"
      ],
      "correctIndex": 0,
      "answer": "$\\sup(A) = \\sqrt{2}$ et $A$ n'admet aucun plus grand élément",
      "hint1": "Par définition, $\\sqrt{2}$ majore $A$.",
      "hint2": "Par densité de $\\mathbb{Q}$ dans $\\mathbb{R}$, pour tout $\\varepsilon > 0$, il existe un rationnel dans $]\\sqrt{2}-\\varepsilon, \\sqrt{2}[$. Comme $\\sqrt{2} \\notin \\mathbb{Q}$, $\\sqrt{2} \\notin A$.",
      "solution": "L'ensemble $A$ est majoré par $\\sqrt{2}$. Par densité de $\\mathbb{Q}$ dans $\\mathbb{R}$, pour tout $\\varepsilon > 0$, il existe $r \\in \\mathbb{Q}$ tel que $\\sqrt{2} - \\varepsilon < r < \\sqrt{2}$. Comme $r < \\sqrt{2}$, $r \\in A$. Donc $\\sup(A) = \\sqrt{2}$. Comme $\\sqrt{2} \\notin \\mathbb{Q}$, $\\sqrt{2} \\notin A$, d'où $A$ n'admet pas de plus grand élément."
    }
  ],
  "L1-SUI": [
    {
      "id": "L1-SUI-1",
      "tier": 1,
      "type": "mcq",
      "title": "Complétude et suites de Cauchy",
      "skill": "Connaître la définition d'un espace métrique complet",
      "statement": "Un espace métrique dans lequel toute suite de Cauchy converge est dit :",
      "options": [
        "Complet",
        "Compact",
        "Connexe",
        "Séparable"
      ],
      "correctIndex": 0,
      "answer": "Complet",
      "hint1": "Propriété fondamentale de $\\mathbb{R}$ qui le distingue de $\\mathbb{Q}$.",
      "hint2": "C'est la définition même de la complétude.",
      "solution": "Par définition, un espace métrique est complet si toute suite de Cauchy y est convergente."
    },
    {
      "id": "L1-SUI-2",
      "tier": 2,
      "type": "mcq",
      "title": "Point fixe d'une suite récurrente",
      "skill": "Calculer la limite d'une suite arithmético-géométrique",
      "statement": "Soit $u_0 = 4$ et $u_{n+1} = \\frac{1}{2}u_n + 3$. Quelle est la limite de $(u_n)$ ?",
      "options": [
        "$6$",
        "$3$",
        "$4$",
        "$+\\infty$"
      ],
      "correctIndex": 0,
      "answer": "$6$",
      "hint1": "Résous l'équation du point fixe $\\ell = \\frac{1}{2}\\ell + 3$.",
      "hint2": "$\\ell / 2 = 3 \\implies \\ell = 6$.",
      "solution": "Comme $|1/2| < 1$, la suite converge vers l'unique point fixe $\\ell = \\frac{1}{2}\\ell + 3 \\iff \\ell = 6$."
    },
    {
      "id": "L1-SUI-3",
      "tier": 3,
      "type": "mcq",
      "title": "Théorème des suites adjacentes",
      "skill": "Appliquer le critère de convergence des suites adjacentes",
      "statement": "Si $(u_n)$ croît, $(v_n)$ décroît et $\\lim (v_n - u_n) = 0$, alors :",
      "options": [
        "$(u_n)$ et $(v_n)$ convergent vers une même limite",
        "$(u_n)$ tend vers $+\\infty$",
        "Les suites divergent",
        "$\\lim u_n < \\lim v_n$"
      ],
      "correctIndex": 0,
      "answer": "$(u_n)$ et $(v_n)$ convergent vers une même limite",
      "hint1": "Théorème fondamental de l'analyse réelle.",
      "hint2": "Pour tout $n$, $u_n \\le v_n$ et elles encadrent leur limite commune.",
      "solution": "D'après le théorème des suites adjacentes, les deux suites convergent et ont exactement la même limite réelle."
    },
    {
      "id": "L1-SUI-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème de Bolzano-Weierstrass",
      "skill": "Propriété de compacité séquentielle de $\\mathbb{R}$",
      "statement": "Que garantit le théorème de Bolzano-Weierstrass pour toute suite réelle bornée ?",
      "options": [
        "L'existence d'au moins une sous-suite convergente",
        "La convergence de la suite",
        "La monotonie à partir d'un certain rang",
        "L'absence de points d'accumulation"
      ],
      "correctIndex": 0,
      "answer": "L'existence d'au moins une sous-suite convergente",
      "hint1": "Pense à $u_n = (-1)^n$, qui ne converge pas mais admet des sous-suites convergentes.",
      "hint2": "De toute suite bornée, on peut extraire une suite convergente.",
      "solution": "Le théorème de Bolzano-Weierstrass affirme que de toute suite réelle bornée, on peut extraire une sous-suite convergente."
    }
  ],
  "L1-CNT": [
    {
      "id": "L1-CNT-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Rolle",
      "skill": "Énoncer le théorème de Rolle",
      "statement": "Soit $f$ continue sur $[a, b]$, dérivable sur $]a, b[$ avec $f(a) = f(b)$. Que garantit le théorème de Rolle ?",
      "options": [
        "$\\exists c \\in ]a, b[, f'(c) = 0$",
        "$f$ est constante sur $[a, b]$",
        "$f'(x) > 0$ partout",
        "$\\exists c \\in [a, b], f(c) = 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\exists c \\in ]a, b[, f'(c) = 0$",
      "hint1": "La dérivée s'annule en au moins un point intermédiaire.",
      "hint2": "Tangente horizontale au point d'abscisse $c$.",
      "solution": "Le théorème de Rolle assure qu'il existe au moins un point $c \\in ]a, b[$ tel que $f'(c) = 0$."
    },
    {
      "id": "L1-CNT-2",
      "tier": 2,
      "type": "mcq",
      "title": "Théorème des Valeurs Intermédiaires",
      "skill": "Localiser une racine d'une fonction continue",
      "statement": "L'équation $x^3 + 3x - 1 = 0$ admet-elle une solution sur $[0, 1]$ ?",
      "options": [
        "Oui, car $f$ est continue et $f(0)f(1) < 0$",
        "Non, car $f(0) \\ne 0$",
        "Non, car le discriminant est négatif",
        "Impossible à savoir"
      ],
      "correctIndex": 0,
      "answer": "Oui, car $f$ est continue et $f(0)f(1) < 0$",
      "hint1": "$f(0) = -1 < 0$ et $f(1) = 3 > 0$.",
      "hint2": "Par le TVI, la fonction s'annule au moins une fois entre 0 et 1.",
      "solution": "$f(0) = -1$ et $f(1) = 3$. Comme $f$ est continue sur $[0, 1]$, le TVI garantit l'existence d'une racine dans $]0, 1[$."
    },
    {
      "id": "L1-CNT-3",
      "tier": 3,
      "type": "mcq",
      "title": "Règle de L'Hôpital",
      "skill": "Calculer une limite indéterminée 0/0",
      "statement": "Quelle est la limite quand $x \\to 0$ de $\\frac{e^{2x} - 1}{\\sin(3x)}$ ?",
      "options": [
        "$\\frac{2}{3}$",
        "$\\frac{3}{2}$",
        "$0$",
        "$1$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{2}{3}$",
      "hint1": "Forme indéterminée 0/0 : dérive en haut et en bas.",
      "hint2": "$\\lim \\frac{2e^{2x}}{3\\cos(3x)} = \\frac{2}{3}$.",
      "solution": "Par la règle de L'Hôpital : $\\lim_{x \\to 0} \\frac{e^{2x}-1}{\\sin(3x)} = \\lim_{x \\to 0} \\frac{2e^{2x}}{3\\cos(3x)} = \\frac{2}{3}$."
    },
    {
      "id": "L1-CNT-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème de Heine",
      "skill": "Continuité uniforme sur un compact",
      "statement": "Que garantit le théorème de Heine pour une fonction continue $f : [a, b] \\to \\mathbb{R}$ ?",
      "options": [
        "$f$ est uniformément continue sur $[a, b]$",
        "$f$ est dérivable sur $[a, b]$",
        "$f$ est strictement monotone",
        "$f$ est lipschitzienne"
      ],
      "correctIndex": 0,
      "answer": "$f$ est uniformément continue sur $[a, b]$",
      "hint1": "Sur un compact, la continuité locale devient uniforme.",
      "hint2": "$\\forall \\varepsilon > 0, \\exists \\eta > 0, |x-y| < \\eta \\implies |f(x)-f(y)| < \\varepsilon$.",
      "solution": "Le théorème de Heine stipule que toute fonction continue sur un espace métrique compact (comme $[a, b]$) y est uniformément continue."
    }
  ],
  "L1-TAY": [
    {
      "id": "L1-TAY-1",
      "tier": 1,
      "type": "mcq",
      "title": "Développement limité usuel de cosinus",
      "skill": "Connaître les DL usuels en 0",
      "statement": "Quel est le DL à l'ordre 4 en 0 de $\\cos(x)$ ?",
      "options": [
        "$1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$",
        "$1 - x + \\frac{x^2}{2} + o(x^4)$",
        "$x - \\frac{x^3}{6} + o(x^4)$",
        "$1 + \\frac{x^2}{2} + o(x^4)$"
      ],
      "correctIndex": 0,
      "answer": "$1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$",
      "hint1": "Fonction paire : uniquement des puissances paires.",
      "hint2": "$4! = 24$.",
      "solution": "$\\cos(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} + o(x^4) = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$."
    },
    {
      "id": "L1-TAY-2",
      "tier": 2,
      "type": "mcq",
      "title": "Limite par développement limité",
      "skill": "Lever une indétermination à l'aide des DL",
      "statement": "Quelle est la limite quand $x \\to 0$ de $\\frac{\\ln(1 + x) - x}{x^2}$ ?",
      "options": [
        "$-\\frac{1}{2}$",
        "$\\frac{1}{2}$",
        "$0$",
        "$-1$"
      ],
      "correctIndex": 0,
      "answer": "$-\\frac{1}{2}$",
      "hint1": "$\\ln(1+x) = x - \\frac{x^2}{2} + o(x^2)$.",
      "hint2": "Le quotient vaut $-\\frac{1}{2} + o(1)$.",
      "solution": "Comme $\\ln(1+x) - x = -\\frac{x^2}{2} + o(x^2)$, le quotient par $x^2$ tend vers $-\\frac{1}{2}$."
    },
    {
      "id": "L1-TAY-3",
      "tier": 3,
      "type": "mcq",
      "title": "Reste de Taylor-Lagrange",
      "skill": "Estimer l'erreur dans la formule de Taylor",
      "statement": "Pour $f(x) = e^x$ sur $[0, 1]$ à l'ordre 1, l'erreur $e - 2$ s'écrit :",
      "options": [
        "$\\frac{e^c}{2}$ avec $c \\in ]0, 1[$",
        "$\\frac{1}{6}$",
        "$e$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{e^c}{2}$ avec $c \\in ]0, 1[$",
      "hint1": "Le reste d'ordre 1 est $\\frac{f''(c)}{2!}(1-0)^2$.",
      "hint2": "$f''(t) = e^t$, d'où $e^c/2$.",
      "solution": "Par Taylor-Lagrange à l'ordre 1 : $e = 1 + 1 + \\frac{e^c}{2} \\implies e - 2 = \\frac{e^c}{2}$ avec $c \\in ]0, 1[$."
    },
    {
      "id": "L1-TAY-4",
      "tier": 4,
      "type": "mcq",
      "title": "Position relative par rapport à l'asymptote",
      "skill": "Étudier la position d'une courbe par DL à l'infini",
      "statement": "Au voisinage de $+\\infty$, $f(x) = x + 1 - \\frac{1}{2x} + o(1/x)$. Comment se situe la courbe par rapport à l'asymptote $y = x + 1$ ?",
      "options": [
        "Strictement en dessous",
        "Strictement au-dessus",
        "Elle la traverse une infinité de fois",
        "Confondue"
      ],
      "correctIndex": 0,
      "answer": "Strictement en dessous",
      "hint1": "Le signe de $f(x) - (x+1) \\sim -\\frac{1}{2x}$ est négatif quand $x \\to +\\infty$.",
      "hint2": "Différence négative $\\implies$ en dessous.",
      "solution": "$f(x) - (x+1) = -\\frac{1}{2x} + o(1/x) < 0$ pour $x$ assez grand, donc la courbe est strictement en dessous."
    }
  ],
  "L1-INT": [
    {
      "id": "L1-INT-1",
      "tier": 1,
      "type": "mcq",
      "title": "Somme de Riemann élémentaire",
      "skill": "Calculer la limite d'une somme de Riemann",
      "statement": "Quelle est la limite quand $n \\to +\\infty$ de $\\frac{1}{n}\\sum_{k=1}^n (k/n)^2$ ?",
      "options": [
        "$\\frac{1}{3}$",
        "$\\frac{1}{2}$",
        "$1$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{3}$",
      "hint1": "C'est l'intégrale $\\int_0^1 x^2 dx$.",
      "hint2": "$[x^3/3]_0^1 = 1/3$.",
      "solution": "Par le théorème des sommes de Riemann, $\\lim S_n = \\int_0^1 x^2 dx = [x^3/3]_0^1 = 1/3$."
    },
    {
      "id": "L1-INT-2",
      "tier": 2,
      "type": "mcq",
      "title": "Intégration par parties",
      "skill": "Calculer $\\int_1^e x \\ln x dx$",
      "statement": "Que vaut l'intégrale $\\int_1^e x \\ln(x) dx$ ?",
      "options": [
        "$\\frac{e^2 + 1}{4}$",
        "$\\frac{e^2 - 1}{4}$",
        "$\\frac{e^2}{2}$",
        "$1$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{e^2 + 1}{4}$",
      "hint1": "Pose $u = \\ln x$ et $v' = x$.",
      "hint2": "$[x^2 \\ln x / 2]_1^e - \\int_1^e x/2 dx = e^2/2 - (e^2-1)/4$.",
      "solution": "Par IPP : $[x^2 \\ln(x)/2]_1^e - [x^2/4]_1^e = e^2/2 - (e^2-1)/4 = \\frac{e^2+1}{4}$."
    },
    {
      "id": "L1-INT-3",
      "tier": 3,
      "type": "mcq",
      "title": "Changement de variable",
      "skill": "Calculer une intégrale trigonométrique par substitution",
      "statement": "Que vaut $\\int_0^{\\pi/2} \\cos(x) \\sin^3(x) dx$ ?",
      "options": [
        "$\\frac{1}{4}$",
        "$\\frac{1}{3}$",
        "$1$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{4}$",
      "hint1": "Pose $u = \\sin(x)$, alors $du = \\cos(x)dx$.",
      "hint2": "L'intégrale devient $\\int_0^1 u^3 du = [u^4/4]_0^1$.",
      "solution": "Avec $u = \\sin(x)$, $\\int_0^1 u^3 du = [u^4/4]_0^1 = 1/4$."
    },
    {
      "id": "L1-INT-4",
      "tier": 4,
      "type": "mcq",
      "title": "Dérivation d'une intégrale à borne variable",
      "skill": "Appliquer le théorème fondamental de l'analyse avec composition",
      "statement": "Pour $F(x) = \\int_0^{x^2} e^{-t^2} dt$, quelle est la dérivée $F'(x)$ ?",
      "options": [
        "$2x e^{-x^4}$",
        "$e^{-x^4}$",
        "$2x e^{-x^2}$",
        "$-2x^3 e^{-x^4}$"
      ],
      "correctIndex": 0,
      "answer": "$2x e^{-x^4}$",
      "hint1": "Dérivée de $G(u(x))$ : $u'(x) G'(u(x))$.",
      "hint2": "$(x^2)' = 2x$ et $G'(t) = e^{-t^2}$.",
      "solution": "$F'(x) = (x^2)' \\cdot e^{-(x^2)^2} = 2x e^{-x^4}$."
    }
  ],
  "L1-GEO": [
    {
      "id": "L1-GEO-1",
      "tier": 1,
      "type": "mcq",
      "title": "Produit scalaire et vecteur normal à une droite",
      "skill": "Déterminer un vecteur normal à partir de l'équation cartésienne dans R²",
      "statement": "Dans le plan muni d'un repère orthonormé, quel est un vecteur normal à la droite d'équation $3x - 4y + 7 = 0$ ?",
      "options": [
        "$\\vec{n}(3; -4)$",
        "$\\vec{n}(4; 3)$",
        "$\\vec{n}(-4; 3)$",
        "$\\vec{n}(3; 4)$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{n}(3; -4)$",
      "hint1": "Dans l'équation $ax + by + c = 0$, les coefficients $a$ et $b$ donnent un vecteur normal.",
      "hint2": "Le vecteur normal est $\\vec{n}(a; b) = (3; -4)$.",
      "solution": "Une droite d'équation cartésienne $ax + by + c = 0$ admet pour vecteur normal le vecteur $\\vec{n}(a; b)$. Ici, $a = 3$ et $b = -4$, donc $\\vec{n}(3; -4)$ est normal à la droite."
    },
    {
      "id": "L1-GEO-2",
      "tier": 2,
      "type": "mcq",
      "title": "Équation cartésienne et éléments d'un cercle",
      "skill": "Identifier le centre et le rayon d'un cercle dans le plan",
      "statement": "Quelle est la nature géométrique et les éléments caractéristiques de l'ensemble d'équation $x^2 + y^2 - 4x + 6y + 4 = 0$ ?",
      "options": [
        "Un cercle de centre $\\Omega(2; -3)$ et de rayon $R = 3$",
        "Un cercle de centre $\\Omega(-2; 3)$ et de rayon $R = 3$",
        "Un cercle de centre $\\Omega(2; -3)$ et de rayon $R = 9$",
        "L'ensemble vide $\\emptyset$"
      ],
      "correctIndex": 0,
      "answer": "Un cercle de centre $\\Omega(2; -3)$ et de rayon $R = 3$",
      "hint1": "Mettre sous forme canonique : $(x - 2)^2 - 4 + (y + 3)^2 - 9 + 4 = 0$.",
      "hint2": "$(x - 2)^2 + (y + 3)^2 = 9 = 3^2$.",
      "solution": "En regroupant les termes : $(x - 2)^2 - 4 + (y + 3)^2 - 9 + 4 = 0 \\iff (x - 2)^2 + (y + 3)^2 = 9 = 3^2$. Il s'agit du cercle de centre $\\Omega(2; -3)$ et de rayon $R = 3$."
    },
    {
      "id": "L1-GEO-3",
      "tier": 3,
      "type": "mcq",
      "title": "Conique monofocale et excentricité",
      "skill": "Déterminer la nature d'une conique selon son excentricité",
      "statement": "Soit une conique propre de foyer $F$, de directrice $\\mathcal{D}$ et d'excentricité $e = 0,75$. Quelle est sa nature géométrique ?",
      "options": [
        "Une ellipse",
        "Une parabole",
        "Une hyperbole",
        "Un cercle"
      ],
      "correctIndex": 0,
      "answer": "Une ellipse",
      "hint1": "Comparer l'excentricité $e$ à 1.",
      "hint2": "Si $0 < e < 1$, la conique est une ellipse.",
      "solution": "Par définition monofocale d'une conique propre, si $0 < e < 1$, la courbe est une ellipse (courbe fermée bornée). Pour $e = 1$ c'est une parabole, et pour $e > 1$ une hyperbole."
    },
    {
      "id": "L1-GEO-4",
      "tier": 4,
      "type": "mcq",
      "title": "Équation réduite d'une ellipse et distance focale",
      "skill": "Calculer la distance focale 2c et l'excentricité d'une ellipse",
      "statement": "Soit l'ellipse d'équation réduite $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$. Que vaut sa distance focale $2c$ (distance entre ses deux foyers) ?",
      "options": [
        "$8$",
        "$4$",
        "$16$",
        "$2\\sqrt{34}$"
      ],
      "correctIndex": 0,
      "answer": "$8$",
      "hint1": "$a^2 = 25$ donc $a = 5$, et $b^2 = 9$ donc $b = 3$.",
      "hint2": "Dans l'ellipse avec $a > b$, $c^2 = a^2 - b^2 = 25 - 9 = 16$.",
      "solution": "On a $a = 5$ et $b = 3$. La relation fondamentale de l'ellipse donne $c^2 = a^2 - b^2 = 25 - 9 = 16$, d'où $c = 4$. La distance focale est $2c = 2 \\times 4 = 8$ (les foyers sont $F(-4; 0)$ et $F'(4; 0)$)."
    }
  ]
};

window.MATHS_WORKSHEETS_L1 = {
  "L1-MAT": [
    {
      "title": "Feuille de TD L1 : Systèmes linéaires et Pivot de Gauss",
      "filename": "TD_L1_Pivot_Gauss.md",
      "statement": `## Travaux Dirigés L1 : Systèmes Linéaires et Algorithme de Gauss

### Exercice 1 : Résolution par échelonnement (6 points)
Résoudre dans $\\mathbb{R}^3$ par la méthode du pivot de Gauss le système linéaire suivant :
$$\\begin{cases} x + 2y - z = 3 \\\\ 2x + 5y + z = 11 \\\\ -x + y + 4z = 2 \\end{cases}$$

### Exercice 2 : Inversion de matrice (4 points)
À l'aide de l'algorithme de Gauss-Jordan, inverser la matrice :
$$A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & -1 & 3 \\\\ 4 & 1 & 8 \\end{pmatrix}$$`,
      "solution": `### Correction Exercice 1
1. Matrice augmentée :
$\\begin{pmatrix} 1 & 2 & -1 & \\mid & 3 \\\\ 2 & 5 & 1 & \\mid & 11 \\\\ -1 & 1 & 4 & \\mid & 2 \\end{pmatrix}$
2. Élimination : $L_2 \\leftarrow L_2 - 2L_1$ et $L_3 \\leftarrow L_3 + L_1$ :
$\\begin{pmatrix} 1 & 2 & -1 & \\mid & 3 \\\\ 0 & 1 & 3 & \\mid & 5 \\\\ 0 & 3 & 3 & \\mid & 5 \\end{pmatrix}$
3. Élimination : $L_3 \\leftarrow L_3 - 3L_2$ :
$\\begin{pmatrix} 1 & 2 & -1 & \\mid & 3 \\\\ 0 & 1 & 3 & \\mid & 5 \\\\ 0 & 0 & -6 & \\mid & -10 \\end{pmatrix}$
4. Remontée : $-6z = -10 \\implies z = \\frac{5}{3}$.
$y + 3(5/3) = 5 \\implies y = 0$.
$x + 2(0) - 5/3 = 3 \\implies x = 3 + 5/3 = \\frac{14}{3}$.
Conclusion : $S = \\left\\{\\left(\\frac{14}{3} ; 0 ; \\frac{5}{3}\\right)\\right\\}$.`
    }
  ],
  "L1-CMP": [
    {
      "title": "Feuille de TD L1 : Polynômes et Décomposition en Éléments Simples (DES)",
      "filename": "TD_L1_Polynomes_DES.md",
      "statement": `## Travaux Dirigés L1 : Polynômes et Décomposition en Éléments Simples

### Exercice 1 : Factorisation de polynômes (5 points)
1. Factoriser $P(X) = X^4 - 16$ en produit de polynômes irréductibles dans $\\mathbb{C}[X]$, puis dans $\\mathbb{R}[X]$.
2. Factoriser $Q(X) = X^4 + X^2 + 1$ dans $\\mathbb{R}[X]$ à l'aide de l'identité $X^4 + X^2 + 1 = (X^2 + 1)^2 - X^2$.

### Exercice 2 : DES à pôles simples réels (7 points)
Soit la fraction rationnelle $F(X) = \\frac{2X + 5}{(X - 1)(X + 2)(X + 3)}$.
1. Justifier que la partie entière de $F$ est nulle.
2. Donner la forme générale de la décomposition en éléments simples de $F$ dans $\\mathbb{R}(X)$.
3. Déterminer les trois coefficients réels par la méthode des pôles simples.

### Exercice 3 : Pôle multiple et partie entière (8 points)
On considère la fraction rationnelle $G(X) = \\frac{X^3 + 2}{(X - 1)^2 (X + 2)}$.
1. Déterminer la partie entière de $G$.
2. Donner la forme théorique de la décomposition en éléments simples de $G$ dans $\\mathbb{R}(X)$.
3. Calculer l'ensemble des coefficients associés et en déduire l'écriture finale de $G(X)$.`,
      "solution": `### Correction Exercice 1 : Factorisation (5 points)
1. $P(X) = X^4 - 16 = (X^2 - 4)(X^2 + 4) = (X - 2)(X + 2)(X^2 + 4)$.
• Dans $\\mathbb{R}[X]$ : $X^2 + 4$ a un discriminant négatif $\\Delta = -16 < 0$, donc la factorisation en irréductibles est $(X - 2)(X + 2)(X^2 + 4)$. *(1,5 pt)*
• Dans $\\mathbb{C}[X]$ : $X^2 + 4 = (X - 2i)(X + 2i)$, d'où $P(X) = (X - 2)(X + 2)(X - 2i)(X + 2i)$. *(1 pt)*
2. $Q(X) = (X^2 + 1)^2 - X^2 = (X^2 - X + 1)(X^2 + X + 1)$.
Pour ces deux trinômes, $\\Delta = 1 - 4 = -3 < 0$, ils sont donc irréductibles dans $\\mathbb{R}[X]$. *(2,5 pts)*

### Correction Exercice 2 : DES à pôles simples (7 points)
1. $\\deg(N) = 1$ et $\\deg(D) = 3$. Comme $\\deg(N) < \\deg(D)$, la division euclidienne donne un quotient nul : la partie entière est $E = 0$. *(1,5 pt)*
2. Les pôles du dénominateur sont $1, -2, -3$, tous réels et simples. La décomposition s'écrit :
$$F(X) = \\frac{a}{X - 1} + \\frac{b}{X + 2} + \\frac{c}{X + 3}$$ *(1,5 pt)*
3. Calcul des coefficients :
• $a = \\lim_{X \\to 1} (X - 1)F(X) = \\frac{2(1) + 5}{(1 + 2)(1 + 3)} = \\frac{7}{3 \\times 4} = \\frac{7}{12}$. *(1,5 pt)*
• $b = \\lim_{X \\to -2} (X + 2)F(X) = \\frac{2(-2) + 5}{(-2 - 1)(-2 + 3)} = \\frac{1}{(-3)(1)} = -\\frac{1}{3} = -\\frac{4}{12}$. *(1,5 pt)*
• $c = \\lim_{X \\to -3} (X + 3)F(X) = \\frac{2(-3) + 5}{(-3 - 1)(-3 + 2)} = \\frac{-1}{(-4)(-1)} = -\\frac{1}{4} = -\\frac{3}{12}$. *(1 pt)*
Conclusion : $F(X) = \\frac{7}{12(X - 1)} - \\frac{1}{3(X + 2)} - \\frac{1}{4(X + 3)}$.

### Correction Exercice 3 : Pôle multiple et partie entière (8 points)
1. $\\deg(X^3 + 2) = 3$ et $\\deg(D) = \\deg((X^2 - 2X + 1)(X + 2)) = \\deg(X^3 - 3X + 2) = 3$.
Le rapport des coefficients dominants est $1/1 = 1$, donc la partie entière est $E(X) = 1$. *(2 pts)*
2. Le pôle $1$ est double et le pôle $-2$ est simple :
$$G(X) = 1 + \\frac{\\alpha}{(X - 1)^2} + \\frac{\\beta}{X - 1} + \\frac{\\gamma}{X + 2}$$ *(2 pts)*
3. Calcul des coefficients :
• Multiplions par $(X - 1)^2$ et posons $X = 1$ :
$\\alpha = \\frac{1^3 + 2}{1 + 2} = \\frac{3}{3} = 1$. *(1,5 pt)*
• Multiplions par $X + 2$ et posons $X = -2$ :
$\\gamma = \\frac{(-2)^3 + 2}{(-2 - 1)^2} = \\frac{-8 + 2}{9} = -\\frac{6}{9} = -\\frac{2}{3}$. *(1,5 pt)*
• Pour obtenir $\\beta$, évaluons en $X = 0$ :
$G(0) = \\frac{2}{(-1)^2 \\times 2} = 1$.
Or $G(0) = 1 + \\frac{1}{1} - \\beta - \\frac{2/3}{2} = 2 - \\beta - \\frac{1}{3} = \\frac{5}{3} - \\beta$.
Donc $1 = \\frac{5}{3} - \\beta \\implies \\beta = \\frac{2}{3}$. *(1 pt)*
Conclusion finale : $G(X) = 1 + \\frac{1}{(X - 1)^2} + \\frac{2}{3(X - 1)} - \\frac{2}{3(X + 2)}$.`
    }
  ],
  "L1-REL": [
    {
      "title": "Feuille de TD L1 : Nombres Réels, Borne Supérieure et Densité",
      "filename": "TD_L1_Reels_Borne_Sup_Densite.md",
      "statement": `## Travaux Dirigés L1 : Propriétés des Nombres Réels et Topologie de R

### Exercice 1 : Caractérisation de la borne supérieure (6 points)
Soit la partie $A = \\left\\{ \\frac{2n - 1}{n + 1} \\;\\middle|\\; n \\in \\mathbb{N}^* \\right\\}$.
1. Montrer que $A$ est bornée.
2. Déterminer $\\inf(A)$ et préciser s'il s'agit d'un minimum.
3. À l'aide de la caractérisation par $\\varepsilon$, démontrer que $\\sup(A) = 2$.
4. Le nombre $2$ est-il un maximum de $A$ ? Justifier.

### Exercice 2 : Densité des nombres décimaux D dans R (8 points)
On note $\\mathbb{D} = \\left\\{ \\frac{p}{10^q} \\;\\middle|\\; p \\in \\mathbb{Z}, q \\in \\mathbb{N} \\right\\}$ l'ensemble des décimaux.
1. Soit $z \\in \\mathbb{R}$. Pour tout $n \\in \\mathbb{N}$, on pose $u_n = \\frac{\\lfloor 10^n z \\rfloor}{10^n}$.
   Démontrer que la suite $(u_n)_{n \\in \\mathbb{N}}$ est à valeurs dans $\\mathbb{D}$ et converge vers $z$.
2. Soient deux réels $x$ et $y$ tels que $x < y$. On pose $z = \\frac{x + y}{2}$ et $\\varepsilon = \\frac{y - x}{2} > 0$.
   En utilisant la question 1, prouver qu'il existe un entier $q \\in \\mathbb{N}$ tel que $x < u_q < y$.
3. En déduire que $\\mathbb{D}$ est dense dans $\\mathbb{R}$, puis que $\\mathbb{Q}$ est dense dans $\\mathbb{R}$.

### Exercice 3 : Borne supérieure sans maximum (6 points)
Soit la partie $B = \\{ x \\in \\mathbb{Q} \\mid x < \\sqrt{2} \\}$.
1. Justifier rigoureusement que $B$ admet une borne supérieure dans $\\mathbb{R}$, notée $M$.
2. Montrer que $M \\le \\sqrt{2}$.
3. Par un raisonnement par l'absurde et en exploitant la densité de $\\mathbb{Q}$ dans $\\mathbb{R}$, démontrer que $M = \\sqrt{2}$.
4. Pourquoi $B$ n'admet-il aucun plus grand élément ?`,
      "solution": `### Correction Exercice 1 : Borne supérieure (6 points)
1. Pour tout $n \\ge 1$, $\\frac{2n - 1}{n + 1} = \\frac{2(n + 1) - 3}{n + 1} = 2 - \\frac{3}{n + 1}$.
Comme $n \\ge 1$, on a $n + 1 \\ge 2$, donc $0 < \\frac{3}{n + 1} \\le \\frac{3}{2}$.
Ainsi : $2 - \\frac{3}{2} \\le \\frac{2n - 1}{n + 1} < 2 \\iff \\frac{1}{2} \\le \\frac{2n - 1}{n + 1} < 2$. La partie $A$ est minorée par $1/2$ et majorée par $2$, donc $A$ est bornée. *(1,5 pt)*
2. Pour $n = 1$, $\\frac{2(1) - 1}{1 + 1} = \\frac{1}{2} \\in A$. Comme $\\forall x \\in A, x \\ge 1/2$, on a $\\inf(A) = \\min(A) = \\frac{1}{2}$. *(1,5 pt)*
3. $2$ est un majorant de $A$. Soit $\\varepsilon > 0$. On cherche $n \\in \\mathbb{N}^*$ tel que $2 - \\varepsilon < 2 - \\frac{3}{n + 1} \\iff \\frac{3}{n + 1} < \\varepsilon \\iff n + 1 > \\frac{3}{\\varepsilon}$.
D'après la propriété d'Archimède, un tel entier $n$ existe toujours.
Par la caractérisation par $\\varepsilon$, $\\sup(A) = 2$. *(2 pts)*
4. Si $2 \\in A$, il existerait $n \\in \\mathbb{N}^*$ tel que $2 - \\frac{3}{n + 1} = 2 \\iff -\\frac{3}{n + 1} = 0$, impossible. Donc $2 \\notin A$, et $A$ n'admet pas de maximum. *(1 pt)*

### Correction Exercice 2 : Densité des décimaux (8 points)
1. Par définition de la partie entière, pour tout réel $t$, on a $t - 1 < \\lfloor t \\rfloor \\le t$.
En appliquant avec $t = 10^n z$ et en divisant par $10^n > 0$ :
$$z - \\frac{1}{10^n} < \\frac{\\lfloor 10^n z \\rfloor}{10^n} \\le z \\iff z - 10^{-n} < u_n \\le z$$
Comme $\\lim_{n \\to +\\infty} 10^{-n} = 0$, le théorème des gendarmes assure que $\\lim_{n \\to +\\infty} u_n = z$.
De plus, $p = \\lfloor 10^n z \\rfloor \\in \\mathbb{Z}$ et $10^n = 10^q$ avec $q = n \\in \\mathbb{N}$, donc $u_n \\in \\mathbb{D}$. *(3 pts)*
2. L'intervalle $]x, y[$ est centré en $z = \\frac{x+y}{2}$ de rayon $\\varepsilon = \\frac{y-x}{2} > 0$, c'est-à-dire $]x, y[ = ]z - \\varepsilon, z + \\varepsilon[$.
Comme $u_n \\to z$, par définition de la limite pour $\\varepsilon > 0$, il existe un rang $q \\in \\mathbb{N}$ tel que pour tout $n \\ge q$, $|u_n - z| < \\varepsilon$.
En particulier pour $n = q$, $z - \\varepsilon < u_q < z + \\varepsilon$, ce qui équivaut exactement à $x < u_q < y$. *(3 pts)*
3. Pour tous réels $x < y$, il existe un décimal $d = u_q \\in \\mathbb{D}$ tel que $x < d < y$. Donc $\\mathbb{D}$ est dense dans $\\mathbb{R}$.
Comme tout décimal est un rationnel ($\\\\mathbb{D} \\subset \\mathbb{Q}$), on a également $x < d < y$ avec $d \\in \\mathbb{Q}$, ce qui prouve la densité de $\\mathbb{Q}$ dans $\\mathbb{R}$. *(2 pts)*

### Correction Exercice 3 : Borne supérieure sans max (6 points)
1. $B$ est non vide (par exemple $0 \\in B$) et $B$ est majoré par $\\sqrt{2}$ (car tout $x \\in B$ vérifie $x < \\sqrt{2}$).
Par l'axiome de la borne supérieure, toute partie non vide et majorée de $\\mathbb{R}$ admet une borne supérieure dans $\\mathbb{R}$. Donc $M = \\sup(B)$ existe. *(1,5 pt)*
2. Comme $\\sqrt{2}$ est un majorant de $B$ et que $M$ est le plus petit des majorants, on a $M \\le \\sqrt{2}$. *(1 pt)*
3. Supposons par l'absurde que $M < \\sqrt{2}$.
Par densité de $\\mathbb{Q}$ dans $\\mathbb{R}$, il existe un rationnel $r \\in \\mathbb{Q}$ tel que $M < r < \\sqrt{2}$.
Puisque $r \\in \\mathbb{Q}$ et $r < \\sqrt{2}$, par définition de $B$, on a $r \\in B$.
Mais alors $r \\in B$ et $r > M$, ce qui contredit le fait que $M$ majore $B$ !
Cette contradiction prouve que $M = \\sqrt{2}$. *(2,5 pts)*
4. Si $B$ admettait un plus grand élément, ce serait $\\max(B) = \\sup(B) = \\sqrt{2}$.
Or $\\sqrt{2} \\notin \\mathbb{Q}$, donc $\\sqrt{2} \\notin B$. Par conséquent, $B$ n'a pas de maximum. *(1 pt)*`
    }
  ]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_L1);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_L1);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_L1);

