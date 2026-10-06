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
        "content": "• L'ensemble $\\mathcal{M}_{n,p}(\\mathbb{K})$ est un $\\mathbb{K}$-espace vectoriel de dimension $n \\times p$.\n• Si $n = p$, $(\\mathcal{M}_n(\\mathbb{K}), +, \\times)$ est un anneau unitaire non commutatif pour $n \\ge 2$.\n• **Transposition** : Pour $A \\in \\mathcal{M}_{n,p}(\\mathbb{K})$, sa transposée $A^T \\in \\mathcal{M}_{p,n}(\\mathbb{K})$ vérifie $(AB)^T = B^T A^T$ et $(A^T)^T = A$.\n  - $A$ est **symétrique** si $A^T = A$ ; **antisymétrique** si $A^T = -A$.\n• **Trace** : Pour $A = (a_{ij}) \\in \\mathcal{M}_n(\\mathbb{K})$, $\\text{Tr}(A) = \\sum_{i=1}^n a_{ii}$. La trace est linéaire et vérifie $\\text{Tr}(AB) = \\text{Tr}(BA)$."
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
        "q": "Quelle est la transposée du produit matriciel $(AB)^T$ ?",
        "a": "$(AB)^T = B^T A^T$ (inversion de l'ordre des facteurs)."
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
      "Définir par compréhension le noyau $\\ker(f) = \\{u \\in E \\mid f(u) = 0_F\\}$ et l'image $\\text{Im}(f) = \\{f(u) \\mid u \\in E\\}$.",
      "Énoncer et appliquer le critère d'injectivité ($\\ker f = \\{0_E\\}$) et de surjectivité ($\\text{Im} f = F$).",
      "Énoncer et démontrer le Théorème du Rang : $\\dim(E) = \\dim(\\ker f) + \\text{rg}(f)$.",
      "Représenter une application linéaire par une matrice et appliquer la formule de changement de base."
    ],
    "keyPoints": [
      {
        "title": "1. Définition d'une application linéaire",
        "content": "Soient $E$ et $F$ deux $\\mathbb{K}$-espaces vectoriels. Une application $f : E \\to F$ est dite **linéaire** (ou un **morphisme d'espaces vectoriels**) si elle préserve les combinaisons linéaires :\n$$\\forall u, v \\in E, \\quad \\forall \\lambda, \\mu \\in \\mathbb{K}, \\quad f(\\lambda u + \\mu v) = \\lambda f(u) + \\mu f(v)$$\n• En particulier, $f(0_E) = 0_F$ et $f(-u) = -f(u)$.\n• L'ensemble des applications linéaires de $E$ dans $F$ est noté $\\mathcal{L}(E, F)$. Si $E = F$, on parle d'**endomorphisme**, et $\\mathcal{L}(E)$ est une algèbre associative unitaire.\n• Un morphisme bijectif est un **isomorphisme** (et un **automorphisme** si $E = F$)."
      },
      {
        "title": "2. Définitions formelles du Noyau ker(f) et de l'Image Im(f)",
        "content": "Soit $f \\in \\mathcal{L}(E, F)$ une application linéaire :\n• **Noyau de $f$** : C'est l'ensemble de tous les vecteurs de $E$ dont l'image par $f$ est le vecteur nul de $F$ :\n$$\\ker(f) = \\{x \\in E \\mid f(x) = 0_F\\} = f^{-1}(\\{0_F\\})$$\n  - $\\ker(f)$ est un sous-espace vectoriel de l'espace de départ $E$.\n• **Image de $f$** : C'est l'ensemble des vecteurs de $F$ qui possèdent au moins un antécédent dans $E$ :\n$$\\text{Im}(f) = \\{y \\in F \\mid \\exists x \\in E, y = f(x)\\} = f(E) = \\text{Vect}(f(e_1), \\dots, f(e_n))$$\n  - $\\text{Im}(f)$ est un sous-espace vectoriel de l'espace d'arrivée $F$.\n  - La dimension de $\\text{Im}(f)$ est appelée le **rang** de $f$, noté $\\text{rg}(f) = \\dim(\\text{Im} f)$."
      },
      {
        "title": "3. Critères d'injectivité, de surjectivité et de bijectivité",
        "content": "• **Critère fondamental d'injectivité** :\n$$f \\text{ est injective} \\iff \\ker(f) = \\{0_E\\}$$\n*(Preuve : si $\\ker f = \\{0\\}$, alors $f(u) = f(v) \\implies f(u - v) = 0 \\implies u - v \\in \\ker f \\implies u - v = 0 \\implies u = v$)*.\n• **Critère de surjectivité** :\n$$f \\text{ est surjective} \\iff \\text{Im}(f) = F \\iff \\text{rg}(f) = \\dim(F)$$\n• **Isomorphisme** : $f$ est un isomorphisme ssi $\\ker(f) = \\{0_E\\}$ et $\\text{Im}(f) = F$."
      },
      {
        "title": "4. Théorème du Rang et représentation matricielle",
        "content": "• **Théorème du Rang (Théorème fondamental de l'algèbre linéaire)** :\nSoit $E$ de **dimension finie** et $f \\in \\mathcal{L}(E, F)$ :\n$$\\dim(E) = \\dim(\\ker f) + \\dim(\\text{Im} f) = \\dim(\\ker f) + \\text{rg}(f)$$\n• **Corollaire aux espaces de même dimension** : Si $\\dim(E) = \\dim(F) < +\\infty$, alors :\n$$f \\text{ injective} \\iff f \\text{ surjective} \\iff f \\text{ bijective}$$\n• **Matrice associée** : Si $\\mathcal{B}$ est une base de $E$ et $\\mathcal{C}$ une base de $F$, la $j$-ème colonne de $\\text{Mat}_{\\mathcal{B}, \\mathcal{C}}(f)$ contient les coordonnées de $f(e_j)$ dans la base $\\mathcal{C}$.\n• **Changement de base** : $M' = P^{-1} M P$ pour un endomorphisme ($P$ étant la matrice de passage)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver une base du noyau et de l'image",
        "example": "Soit $f : \\mathbb{R}^3 \\to \\mathbb{R}^2$ définie par $f(x, y, z) = (x - y, y - z)$.",
        "steps": [
          "**Noyau** : $(x, y, z) \\in \\ker(f) \\iff \\begin{cases} x - y = 0 \\\\ y - z = 0 \\end{cases} \\iff x = y = z$. Donc $\\ker(f) = \\text{Vect}((1, 1, 1))$. $\\dim(\\ker f) = 1$.",
          "**Théorème du rang** : $\\dim(\\text{Im} f) = \\dim(\\mathbb{R}^3) - \\dim(\\ker f) = 3 - 1 = 2$.",
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
        "q": "Donner la définition mathématique ensembliste de ker(f) pour f dans L(E, F).",
        "a": "$\\ker(f) = \\{x \\in E \\mid f(x) = 0_F\\} = f^{-1}(\\{0_F\\})$."
      },
      {
        "q": "Énoncer le Théorème du Rang pour f dans L(E, F) avec dim(E) finie.",
        "a": "$\\dim(E) = \\dim(\\ker f) + \\text{rg}(f)$."
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
    "title": "L1-CMP : Nombres complexes, géométrie et racines n-ièmes de l'unité",
    "domain": "Algèbre Fondamentale",
    "objectives": [
      "Maîtriser les représentations algébrique, trigonométrique et exponentielle des nombres complexes.",
      "Calculer les racines $n$-ièmes d'un nombre complexe et les racines de l'unité $\\mathbb{U}_n$.",
      "Appliquer les formules d'Euler et de Moivre à la linéarisation trigonométrique.",
      "Énoncer le Théorème de d'Alembert-Gauss et factoriser les polynômes dans $\\mathbb{C}[X]$ et $\\mathbb{R}[X]$."
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
        "content": "• **Théorème fondamental de l'algèbre (d'Alembert-Gauss)** : Le corps $\\mathbb{C}$ est **algébriquement clos** : tout polynôme non constant de $\\mathbb{C}[X]$ admet au moins une racine dans $\\mathbb{C}$.\n• Tout polynôme $P \\in \\mathbb{C}[X]$ de degré $n$ est **scindé** : $P(X) = a_n \\prod_{j=1}^p (X - z_j)^{\\alpha_j}$ avec $\\sum \\alpha_j = n$.\n• **Polynômes à coefficients réels $\\mathbb{R}[X]$** : Les racines non réelles viennent par paires conjuguées ($P(z) = 0 \\iff P(\\bar{z}) = 0$). Tout polynôme de $\\mathbb{R}[X]$ se factorise en produit de polynômes de degré 1 et de degré 2 à discriminant strictement négatif."
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
      }
    ],
    "traps": [
      "⚠️ Ne JAMAIS écrire le symbole $\\sqrt{z}$ pour un complexe non réel (la fonction racine carrée n'a pas de détermination uniforme continue canonique sur $\\mathbb{C}$) !",
      "⚠️ Dans $\\mathbb{C}$, deux nombres peuvent être différents alors qu'ils ont le même module et la même partie réelle (ils diffèrent par le signe de la partie imaginaire)."
    ],
    "flashcards": [
      {
        "q": "Quelles sont les n racines n-ièmes de l'unité ?",
        "a": "$\\Large \\omega_k = \\mathrm{e}^{i \\frac{2k\\pi}{n}}$ pour $k \\in \\{0, 1, \\dots, n - 1\\}$."
      },
      {
        "q": "Que dit le théorème de d'Alembert-Gauss pour les polynômes de C[X] ?",
        "a": "Tout polynôme non constant à coefficients complexes est scindé sur $\\mathbb{C}$ (admet au moins une racine)."
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
    "title": "L1-GEO : Courbes paramétrées, cinématique et géométrie analytique",
    "domain": "Géométrie & Cinématique",
    "objectives": [
      "Étudier un arc paramétré $t \\mapsto \\vec{r}(t) = (x(t), y(t))$ (symétries, périodicité, domaine d'étude réduit).",
      "Déterminer les points réguliers et la droite tangente via le vecteur dérivé $\\vec{r}'(t)$.",
      "Étudier la nature locale des points singuliers / stationnaires (points de rebroussement, méplats, inflexions).",
      "Tracer et étudier des courbes en coordonnées polaires $r = f(\\theta)$ et calculer la longueur d'un arc."
    ],
    "keyPoints": [
      {
        "title": "1. Points réguliers, vecteur vitesse et tangentes",
        "content": "Soit $\\gamma : I \\to \\mathbb{R}^2, t \\mapsto (x(t), y(t))$ un arc de classe $\\mathcal{C}^k$ :\n• **Point régulier** : Un point $M(t)$ est régulier si $\\vec{r}'(t) = (x'(t), y'(t)) \\neq (0, 0)$.\n• **Tangente** : En un point régulier, la tangente à la courbe est la droite passant par $M(t)$ dirigée par le vecteur vitesse $\\vec{r}'(t)$. Son coefficient directeur est $\\frac{y'(t)}{x'(t)}$ (si $x'(t) \\neq 0$)."
      },
      {
        "title": "2. Étude locale des points singuliers (Formule de Taylor)",
        "content": "• Un point $M(t_0)$ est **stationnaire (ou singulier)** si $\\vec{r}'(t_0) = \\vec{0}$.\n• Pour déterminer la tangente et l'allure locale, on cherche les deux premiers vecteurs dérivés non nuls et non colinéaires :\n$$\\vec{r}(t) = \\vec{r}(t_0) + \\frac{(t - t_0)^p}{p!} \\vec{r}^{(p)}(t_0) + \\frac{(t - t_0)^q}{q!} \\vec{r}^{(q)}(t_0) + o((t - t_0)^q)$$\navec $p < q$, $\\vec{r}^{(p)}(t_0) \\neq \\vec{0}$ et $(\\vec{r}^{(p)}(t_0), \\vec{r}^{(q)}(t_0))$ libre.\n• **Classification géométrique** :\n  - $p$ impair, $q$ pair : **Point ordinaire** (allure standard traversant la tangente).\n  - $p$ pair, $q$ impair : **Point de rebroussement de 1ère espèce**.\n  - $p$ pair, $q$ pair : **Point de rebroussement de 2ème espèce**.\n  - $p$ impair, $q$ impair : **Point d'inflexion**."
      },
      {
        "title": "3. Courbes en coordonnées polaires et longueur d'arc",
        "content": "• Une courbe polaire $r = f(\\theta)$ a pour coordonnées cartésiennes : $x(\\theta) = f(\\theta)\\cos\\theta$ et $y(\\theta) = f(\\theta)\\sin\\theta$.\n• **Angle de la tangente avec le rayon vecteur** : $\\tan(V) = \\frac{f(\\theta)}{f'(\\theta)}$ (lorsque $f'(\\theta) \\neq 0$).\n• **Longueur d'un arc régulier** : La longueur d'une courbe entre $t_1$ et $t_2$ est donnée par :\n$$L = \\int_{t_1}^{t_2} \\|\\vec{r}'(t)\\| \\, dt = \\int_{t_1}^{t_2} \\sqrt{x'(t)^2 + y'(t)^2} \\, dt$$\nEn polaires : $L = \\int_{\\theta_1}^{\\theta_2} \\sqrt{r(\\theta)^2 + r'(\\theta)^2} \\, d\\theta$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la longueur d'un arc paramétré",
        "example": "Calculer la longueur du cercle paramétré par $x(t) = R\\cos(t), y(t) = R\\sin(t)$ pour $t \\in [0, 2\\pi]$.",
        "steps": [
          "**Dérivées** : $x'(t) = -R\\sin(t)$ et $y'(t) = R\\cos(t)$.",
          "**Norme de la vitesse** : $\\|\\vec{r}'(t)\\| = \\sqrt{(-R\\sin t)^2 + (R\\cos t)^2} = \\sqrt{R^2(\\sin^2 t + \\cos^2 t)} = R$.",
          "**Intégrale** : $L = \\int_0^{2\\pi} R \\, dt = [Rt]_0^{2\\pi} = 2\\pi R$."
        ]
      }
    ],
    "traps": [
      "⚠️ Si $x'(t_0) = y'(t_0) = 0$, la droite n'est pas sans tangente : il faut chercher la première dérivée non nulle $\\vec{r}^{(p)}(t_0)$ pour obtenir le vecteur directeur !",
      "⚠️ En coordonnées polaires, $r(\\theta) = 0$ correspond toujours au passage par le pôle (origine $O$)."
    ],
    "flashcards": [
      {
        "q": "Quelle condition définit un point régulier d'un arc paramétré r(t) ?",
        "a": "Le vecteur dérivé est non nul : $\\vec{r}'(t) \\neq \\vec{0}$."
      },
      {
        "q": "Donner la formule de la longueur d'un arc paramétré entre t1 et t2.",
        "a": "$L = \\int_{t_1}^{t_2} \\sqrt{x'(t)^2 + y'(t)^2} \\, dt$."
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
      "title": "Somme des racines n-ièmes de l'unité",
      "skill": "Propriétés algébriques de $\\mathbb{U}_n$",
      "statement": "Pour tout $n \\ge 2$, que vaut la somme des $n$ racines $n$-ièmes de l'unité $\\sum_{k=0}^{n-1} e^{i \\frac{2k\\pi}{n}}$ ?",
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
      "solution": "Posons $\\omega = e^{i \\frac{2\\pi}{n}}$. Comme $\\omega \\ne 1$ et $\\omega^n = 1$, la somme vaut $\\frac{1-\\omega^n}{1-\\omega} = 0$."
    },
    {
      "id": "L1-CMP-2",
      "tier": 2,
      "type": "mcq",
      "title": "Division euclidienne de polynômes",
      "skill": "Calculer le reste de division euclidienne dans $K[X]$",
      "statement": "Quel est le reste de la division euclidienne de $P(X) = X^4 + 2X^3 - X + 1$ par $X^2 + 1$ ?",
      "options": [
        "$-2X + 2$",
        "$2X - 2$",
        "$-X + 3$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$-2X + 2$",
      "hint1": "$X^4 = (X^2+1)(X^2-1) + 1$.",
      "hint2": "$P(X) = (X^2 + 2X - 1)(X^2 + 1) + (-2X + 2)$.",
      "solution": "En effectuant la division posée, on obtient $P(X) = (X^2 + 2X - 1)(X^2 + 1) + (-2X + 2)$ avec $\\deg(-2X+2) = 1 < 2$."
    },
    {
      "id": "L1-CMP-3",
      "tier": 3,
      "type": "mcq",
      "title": "Factorisation en irréductibles dans R[X]",
      "skill": "Décomposer un polynôme sans racine réelle",
      "statement": "Quelle est la factorisation de $X^4 + 1$ en produit de polynômes irréductibles dans $\\mathbb{R}[X]$ ?",
      "options": [
        "$(X^2 - \\sqrt{2}X + 1)(X^2 + \\sqrt{2}X + 1)$",
        "$(X^2 + 1)^2$",
        "$(X^2 - 1)(X^2 + 1)$",
        "$(X^2 + \\sqrt{2}X - 1)(X^2 - \\sqrt{2}X - 1)$"
      ],
      "correctIndex": 0,
      "answer": "$(X^2 - \\sqrt{2}X + 1)(X^2 + \\sqrt{2}X + 1)$",
      "hint1": "$X^4 + 1 = (X^2+1)^2 - 2X^2$.",
      "hint2": "Identité $A^2 - B^2$ avec $A = X^2+1$ et $B = \\sqrt{2}X$.",
      "solution": "$X^4 + 1 = (X^2+1)^2 - (\\sqrt{2}X)^2 = (X^2 - \\sqrt{2}X + 1)(X^2 + \\sqrt{2}X + 1)$. Discriminants $\\Delta = -2 < 0$, donc irréductibles sur $\\mathbb{R}$."
    },
    {
      "id": "L1-CMP-4",
      "tier": 4,
      "type": "mcq",
      "title": "Relations coefficients-racines de Viète",
      "skill": "Utiliser les fonctions symétriques élémentaires",
      "statement": "Soient $x_1, x_2, x_3$ les racines de $X^3 - 3X^2 + 4X - 5$. Que vaut $x_1^2 + x_2^2 + x_3^2$ ?",
      "options": [
        "$1$",
        "$9$",
        "$-1$",
        "$5$"
      ],
      "correctIndex": 0,
      "answer": "$1$",
      "hint1": "$\\sum x_i^2 = (\\sum x_i)^2 - 2 \\sum_{i<j} x_i x_j$.",
      "hint2": "Par Viète, $\\sigma_1 = 3$ et $\\sigma_2 = 4$.",
      "solution": "$\\sigma_1 = 3$, $\\sigma_2 = 4$. Donc $\\sum x_i^2 = \\sigma_1^2 - 2\\sigma_2 = 3^2 - 2(4) = 9 - 8 = 1$."
    }
  ],
  "L1-MAT": [
    {
      "id": "L1-MAT-1",
      "tier": 1,
      "type": "mcq",
      "title": "Déterminant 2x2 et inversibilité",
      "skill": "Condition d'inversibilité d'une matrice carrée",
      "statement": "Pour quelle valeur de $\\lambda \\in \\mathbb{R}$ la matrice $\\begin{pmatrix} \\lambda & 3 \\\\ 2 & 6 \\end{pmatrix}$ n'est-elle pas inversible ?",
      "options": [
        "$\\lambda = 1$",
        "$\\lambda = 0$",
        "$\\lambda = 4$",
        "$\\lambda = -1$"
      ],
      "correctIndex": 0,
      "answer": "$\\lambda = 1$",
      "hint1": "Le déterminant doit être nul : $\\det(A) = 0$.",
      "hint2": "$6\\lambda - 6 = 0 \\iff \\lambda = 1$.",
      "solution": "$\\det(A) = 6\\lambda - 6 = 0 \\iff \\lambda = 1$."
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
      "title": "Caractérisation d'un sous-espace vectoriel",
      "skill": "Vérifier la stabilité par combinaison linéaire",
      "statement": "Lequel des ensembles suivants est un sous-espace vectoriel de $\\mathbb{R}^3$ ?",
      "options": [
        "$F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - 3y + z = 0\\}$",
        "$G = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + y + z = 1\\}$",
        "$H = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x^2 + y^2 = z^2\\}$",
        "$K = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid xy \\ge 0\\}$"
      ],
      "correctIndex": 0,
      "answer": "$F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - 3y + z = 0\\}$",
      "hint1": "Un s.e.v. doit contenir $(0,0,0)$ et être défini par une équation linéaire homogène.",
      "hint2": "$F$ est le noyau de la forme linéaire $(x,y,z) \\mapsto 2x-3y+z$.",
      "solution": "$F$ contient le vecteur nul et est défini par une équation linéaire sans second membre. C'est un hyperplan vectoriel de $\\mathbb{R}^3$."
    },
    {
      "id": "L1-EV1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Famille libre vs liée dans R^3",
      "skill": "Tester l'indépendance linéaire",
      "statement": "La famille $(u, v, w)$ avec $u=(1, 0, 1)$, $v=(0, 1, 1)$, $w=(1, 1, 2)$ est-elle libre dans $\\mathbb{R}^3$ ?",
      "options": [
        "Non, car $w = u + v$",
        "Oui, car aucun vecteur n'est nul",
        "Oui, car le déterminant vaut 1",
        "Non, car ils ont tous des coordonnées positives"
      ],
      "correctIndex": 0,
      "answer": "Non, car $w = u + v$",
      "hint1": "$u + v = (1, 0, 1) + (0, 1, 1) = (1, 1, 2)$.",
      "hint2": "Il existe une combinaison linéaire non triviale : $u + v - w = 0$.",
      "solution": "Comme $w = u + v$, les trois vecteurs sont liés (dépendants linéairement)."
    },
    {
      "id": "L1-EV1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Dimension d'un sous-espace vectoriel",
      "skill": "Trouver la dimension d'un sous-espace engendré",
      "statement": "Quelle est la dimension du sous-espace $F = \\text{Vect}((1, 2, 0), (2, 4, 0), (0, 0, 3))$ de $\\mathbb{R}^3$ ?",
      "options": [
        "$2$",
        "$3$",
        "$1$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$2$",
      "hint1": "$(2, 4, 0) = 2(1, 2, 0)$ est redondant.",
      "hint2": "Il reste deux vecteurs non colinéaires : $(1, 2, 0)$ et $(0, 0, 3)$.",
      "solution": "Le deuxième vecteur est colinéaire au premier. Les deux autres sont linéairement indépendants, donc $\\dim F = 2$."
    },
    {
      "id": "L1-EV1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Formule de Grassmann",
      "skill": "Calculer la dimension d'une intersection de sous-espaces",
      "statement": "Soient $F$ et $G$ deux plans vectoriels distincts de $\\mathbb{R}^3$. Quelle est la dimension de $F \\cap G$ ?",
      "options": [
        "$1$",
        "$0$",
        "$2$",
        "$3$"
      ],
      "correctIndex": 0,
      "answer": "$1$",
      "hint1": "$\\dim F = 2$, $\\dim G = 2$, et $\\dim(F+G) = 3$.",
      "hint2": "$\\dim(F \\cap G) = \\dim F + \\dim G - \\dim(F+G) = 2 + 2 - 3$.",
      "solution": "Par la formule de Grassmann : $\\dim(F \\cap G) = 2 + 2 - 3 = 1$. L'intersection est une droite vectorielle."
    }
  ],
  "L1-APP": [
    {
      "id": "L1-APP-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème du rang",
      "skill": "Appliquer la relation $\\dim E = \\dim \\ker f + \\text{rg}(f)$",
      "statement": "Soit $f : \\mathbb{R}^5 \\to \\mathbb{R}^3$ une application linéaire surjective. Quelle est la dimension de $\\ker(f)$ ?",
      "options": [
        "$2$",
        "$3$",
        "$5$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$2$",
      "hint1": "Surjective $\\implies \\text{rg}(f) = \\dim(\\mathbb{R}^3) = 3$.",
      "hint2": "$\\dim \\ker(f) = 5 - 3 = 2$.",
      "solution": "D'après le théorème du rang : $\\dim \\ker(f) = \\dim(\\mathbb{R}^5) - \\text{rg}(f) = 5 - 3 = 2$."
    },
    {
      "id": "L1-APP-2",
      "tier": 2,
      "type": "mcq",
      "title": "Noyau d'un endomorphisme",
      "skill": "Déterminer la dimension du noyau",
      "statement": "Soit $f : \\mathbb{R}^3 \\to \\mathbb{R}^3, (x, y, z) \\mapsto (x - y, y - z, z - x)$. Quelle est la dimension de $\\ker(f)$ ?",
      "options": [
        "$1$",
        "$0$",
        "$2$",
        "$3$"
      ],
      "correctIndex": 0,
      "answer": "$1$",
      "hint1": "$x - y = 0, y - z = 0, z - x = 0 \\iff x = y = z$.",
      "hint2": "$\\ker(f) = \\text{Vect}((1, 1, 1))$.",
      "solution": "$(x, y, z) \\in \\ker(f) \\iff x = y = z$. C'est la droite dirigée par $(1, 1, 1)$, donc $\\dim \\ker(f) = 1$."
    },
    {
      "id": "L1-APP-3",
      "tier": 3,
      "type": "mcq",
      "title": "Matrice de dérivation dans une base de polynômes",
      "skill": "Représenter un opérateur dans une base",
      "statement": "Pour $D : \\mathbb{R}_2[X] \\to \\mathbb{R}_2[X], P \\mapsto P'$, quelle est la trace de sa matrice dans la base $(1, X, X^2)$ ?",
      "options": [
        "$0$",
        "$1$",
        "$2$",
        "$3$"
      ],
      "correctIndex": 0,
      "answer": "$0$",
      "hint1": "$D(1) = 0$, $D(X) = 1$, $D(X^2) = 2X$.",
      "hint2": "La matrice est triangulaire supérieure stricte avec des zéros sur la diagonale.",
      "solution": "La matrice est $\\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\\\ 0 & 0 & 0 \\end{pmatrix}$. Sa diagonale est nulle, donc sa trace vaut 0."
    },
    {
      "id": "L1-APP-4",
      "tier": 4,
      "type": "mcq",
      "title": "Propriétés d'un projecteur",
      "skill": "Caractériser les projecteurs $p^2 = p$",
      "statement": "Soit $p \\in \\mathcal{L}(E)$ tel que $p^2 = p$. Que peut-on toujours affirmer ?",
      "options": [
        "$E = \\ker(p) \\oplus \\text{im}(p)$",
        "$p$ est toujours injectif",
        "$\\text{im}(p) \\subset \\ker(p)$",
        "$p = \\text{Id}_E$"
      ],
      "correctIndex": 0,
      "answer": "$E = \\ker(p) \\oplus \\text{im}(p)$",
      "hint1": "Tout vecteur s'écrit $x = (x - p(x)) + p(x)$.",
      "hint2": "$p(x - p(x)) = p(x) - p^2(x) = 0$.",
      "solution": "Pour tout projecteur $p^2 = p$, l'espace se décompose en somme directe du noyau et de l'image : $E = \\ker(p) \\oplus \\text{im}(p)$."
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
      "title": "Nombre de sous-ensembles à 2 éléments",
      "skill": "Calculer le cardinal d'une combinaison",
      "statement": "Combien de parties à 2 éléments possède un ensemble à $n$ éléments ?",
      "options": [
        "$\\frac{n(n-1)}{2}$",
        "$n^2$",
        "$2^n$",
        "$n(n-1)$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{n(n-1)}{2}$",
      "hint1": "C'est le coefficient binomial $\\binom{n}{2}$.",
      "hint2": "$\\binom{n}{2} = \\frac{n!}{2!(n-2)!}$.",
      "solution": "Le nombre de sous-ensembles à 2 éléments est $\\binom{n}{2} = \\frac{n(n-1)}{2}$."
    },
    {
      "id": "L1-REL-3",
      "tier": 3,
      "type": "mcq",
      "title": "Relation d'ordre de divisibilité",
      "skill": "Classifier un ordre partiel vs total",
      "statement": "La relation de divisibilité sur $\\mathbb{N}^*$ est :",
      "options": [
        "Un ordre partiel",
        "Un ordre total",
        "Une relation d'équivalence",
        "Une bijection"
      ],
      "correctIndex": 0,
      "answer": "Un ordre partiel",
      "hint1": "$2$ divise-t-il $3$ ? $3$ divise-t-il $2$ ?",
      "hint2": "Tous les éléments ne sont pas comparables, donc l'ordre n'est pas total.",
      "solution": "La divisibilité est réflexive, antisymétrique et transitive sur $\\mathbb{N}^*$, mais $2$ et $3$ ne sont pas comparables : c'est un ordre partiel."
    },
    {
      "id": "L1-REL-4",
      "tier": 4,
      "type": "mcq",
      "title": "Principe d'inclusion-exclusion",
      "skill": "Appliquer la formule du crible de Poincaré",
      "statement": "Combien d'entiers dans $\\{1, \\dots, 100\\}$ sont divisibles par 2 ou par 5 ?",
      "options": [
        "$60$",
        "$70$",
        "$50$",
        "$65$"
      ],
      "correctIndex": 0,
      "answer": "$60$",
      "hint1": "$|A \\cup B| = |A| + |B| - |A \\cap B|$.",
      "hint2": "Multiples de 2 : 50. Multiples de 5 : 20. Multiples de 10 : 10.",
      "solution": "$50 + 20 - 10 = 60$ entiers sont divisibles par 2 ou par 5."
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
      "title": "Vecteur vitesse d'un arc paramétré",
      "skill": "Calculer le vecteur dérivé $\\gamma'(t)$",
      "statement": "Pour $\\gamma(t) = (t^2 - 1 ; 2t^3)$, quel est le vecteur tangent en $t = 1$ ?",
      "options": [
        "$(2 ; 6)$",
        "$(0 ; 2)$",
        "$(1 ; 6)$",
        "$(2 ; 3)$"
      ],
      "correctIndex": 0,
      "answer": "$(2 ; 6)$",
      "hint1": "$\\gamma'(t) = (2t, 6t^2)$.",
      "hint2": "Évalue en $t = 1$.",
      "solution": "$\\gamma'(1) = (2(1), 6(1)^2) = (2, 6)$."
    },
    {
      "id": "L1-GEO-2",
      "tier": 2,
      "type": "mcq",
      "title": "Vecteur normal à un plan",
      "skill": "Identifier un vecteur normal à partir de l'équation cartésienne",
      "statement": "Quel est un vecteur normal au plan $3x - 2y + 5z - 7 = 0$ ?",
      "options": [
        "$\\vec{n} = (3, -2, 5)$",
        "$\\vec{n} = (3, 2, 5)$",
        "$\\vec{n} = (-3, 2, 7)$",
        "$\\vec{n} = (1, 1, 1)$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{n} = (3, -2, 5)$",
      "hint1": "Les composantes sont les coefficients devant $x, y, z$.",
      "hint2": "$a = 3$, $b = -2$, $c = 5$.",
      "solution": "L'équation $ax + by + cz + d = 0$ donne directement $\\vec{n} = (a, b, c) = (3, -2, 5)$."
    },
    {
      "id": "L1-GEO-3",
      "tier": 3,
      "type": "mcq",
      "title": "Courbure d'un cercle",
      "skill": "Calculer la courbure géométrique",
      "statement": "Quelle est la courbure $\\kappa$ en tout point d'un cercle de rayon $R > 0$ ?",
      "options": [
        "$\\frac{1}{R}$",
        "$R$",
        "$\\frac{1}{R^2}$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{R}$",
      "hint1": "La courbure est l'inverse du rayon de courbure.",
      "hint2": "Pour un cercle de rayon $R$, $\\kappa = 1/R$.",
      "solution": "Par définition, pour un cercle de rayon $R$, la courbure est constante et vaut $\\kappa = 1/R$."
    },
    {
      "id": "L1-GEO-4",
      "tier": 4,
      "type": "mcq",
      "title": "Point de rebroussement de première espèce",
      "skill": "Classifier un point stationnaire",
      "statement": "Pour $\\gamma(t) = (t^2, t^3)$, $\\gamma'(0)=(0,0)$, $\\gamma''(0)=(2,0)$ et $\\gamma'''(0)=(0,6)$. Quel est le type de ce point singulier ?",
      "options": [
        "Point de rebroussement de première espèce",
        "Point d'inflexion",
        "Point ordinaire",
        "Point méplat"
      ],
      "correctIndex": 0,
      "answer": "Point de rebroussement de première espèce",
      "hint1": "Ordres dérivés : $p=2$ (pair) et $q=3$ (impair).",
      "hint2": "$(p, q) = (\\text{pair}, \\text{impair}) \\implies$ rebroussement 1ère espèce.",
      "solution": "Les premiers ordres non nuls et indépendants sont $p=2$ (pair) et $q=3$ (impair). Il s'agit donc d'un point de rebroussement de première espèce."
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
  ]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_L1);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_L1);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_L1);

