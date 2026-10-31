/**
 * Données pédagogiques universitaires de Licence 1 de Mathématiques (S1 & S2)
 * Synthétisant les enseignements magistraux et travaux dirigés d'Algèbre et d'Analyse
 */

window.MATHS_COURSES_L1 = {
  "L1-LOG": {
    "title": "L1-LOG : Logique mathématique, quantificateurs et théorie des ensembles",
    "domain": "Algèbre Fondamentale",
    "objectives": [
      "Maîtriser les connecteurs logiques, les quantificateurs $\\forall$ et $\\exists$ et la négation d'une assertion quantifiée.",
      "Rédiger les raisonnements usuels : contraposée, absurde, disjonction des cas, analyse-synthèse, récurrence simple et forte.",
      "Définir rigoureusement application, injection, surjection, bijection, image directe et image réciproque.",
      "Définir une relation d'équivalence, ses classes, l'ensemble quotient, et une relation d'ordre.",
      "Dénombrer des ensembles finis : cardinal d'une réunion, d'un produit, de $\\mathcal{P}(E)$, arrangements et combinaisons $\\binom{n}{p}$."
    ],
    "keyPoints": [
      {
        "title": "1. Connecteurs, quantificateurs et négation",
        "content": "• **Implication** : $P \\implies Q$ est fausse uniquement lorsque $P$ est vraie et $Q$ fausse ; elle équivaut à $(\\neg P) \\text{ ou } Q$.\n• **Contraposée** : $P \\implies Q$ équivaut à $\\neg Q \\implies \\neg P$. La **réciproque** $Q \\implies P$ n'a, en général, pas la même valeur de vérité.\n• **Négation** : $\\neg(P \\text{ et } Q) \\iff (\\neg P) \\text{ ou } (\\neg Q)$ et $\\neg(P \\implies Q) \\iff P \\text{ et } \\neg Q$.\n• **Négation des quantificateurs** : on échange $\\forall$ et $\\exists$ et on nie la propriété finale :\n$$\\neg(\\forall x \\in E,\\ P(x)) \\iff \\exists x \\in E,\\ \\neg P(x) \\qquad \\neg(\\exists x \\in E,\\ P(x)) \\iff \\forall x \\in E,\\ \\neg P(x)$$\n• **Ordre des quantificateurs** : « $\\forall x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ y > x$ » est vraie (prendre $y = x + 1$), tandis que « $\\exists y \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ y > x$ » est fausse (aucun réel ne majore $\\mathbb{R}$)."
      },
      {
        "title": "2. Modes de raisonnement et principe de récurrence",
        "content": "• **Absurde** : on suppose $\\neg P$ et on aboutit à une contradiction. **Disjonction des cas** : on traite séparément des cas qui recouvrent toutes les situations. **Analyse-synthèse** : on détermine les solutions possibles (analyse), puis on vérifie qu'elles conviennent (synthèse).\n• **Récurrence simple** : si $P(n_0)$ est vraie et si $\\forall n \\ge n_0,\\ P(n) \\implies P(n+1)$, alors $P(n)$ est vraie pour tout $n \\ge n_0$.\n• **Récurrence forte** : si $P(n_0)$ est vraie et si, pour tout $n \\ge n_0$, $\\big(P(n_0), \\dots, P(n)\\big) \\implies P(n+1)$, alors $P(n)$ est vraie pour tout $n \\ge n_0$. Exemple : tout entier $n \\ge 2$ admet un diviseur premier.\n\n**Démonstration du principe de récurrence** (à partir de la propriété : toute partie non vide de $\\mathbb{N}$ admet un plus petit élément).\n1. Posons $A = \\{n \\ge n_0 \\mid P(n) \\text{ est fausse}\\}$ et supposons, par l'absurde, $A \\neq \\emptyset$. Soit $m = \\min A$.\n2. Comme $P(n_0)$ est vraie, $m \\neq n_0$, donc $m - 1 \\ge n_0$.\n3. Par minimalité de $m$, $m - 1 \\notin A$ : $P(m-1)$ est vraie.\n4. L'hérédité appliquée à $n = m - 1$ donne $P(m)$ vraie, ce qui contredit $m \\in A$. Donc $A = \\emptyset$."
      },
      {
        "title": "3. Applications : injectivité, surjectivité, bijectivité",
        "content": "Soit $f : E \\to F$ une application.\n• **$f$ injective** : $\\forall x, x' \\in E,\\ f(x) = f(x') \\implies x = x'$ (tout élément de $F$ a au plus un antécédent).\n• **$f$ surjective** : $\\forall y \\in F,\\ \\exists x \\in E,\\ y = f(x)$ (tout élément de $F$ a au moins un antécédent).\n• **$f$ bijective** : injective et surjective. Il existe alors une unique application $f^{-1} : F \\to E$ telle que $f^{-1} \\circ f = \\mathrm{Id}_E$ et $f \\circ f^{-1} = \\mathrm{Id}_F$.\n• **Images** : pour $A \\subset E$, $f(A) = \\{f(x) \\mid x \\in A\\}$ ; pour $B \\subset F$, $f^{-1}(B) = \\{x \\in E \\mid f(x) \\in B\\}$ (défini même si $f$ n'est pas bijective).\n• **Composition** : si $g \\circ f$ est injective, alors $f$ est injective ; si $g \\circ f$ est surjective, alors $g$ est surjective.\n\n**Démonstration.** Si $f(x) = f(x')$, alors $g(f(x)) = g(f(x'))$, donc $x = x'$ par injectivité de $g \\circ f$. Si $z$ est dans l'ensemble d'arrivée de $g$, il existe $x$ tel que $z = g(f(x))$ : $z$ a l'antécédent $f(x)$ par $g$."
      },
      {
        "title": "4. Relations d'équivalence, classes et ensemble quotient",
        "content": "Une relation $\\sim$ sur $E$ est une **relation d'équivalence** si elle est **réflexive** ($x \\sim x$), **symétrique** ($x \\sim y \\implies y \\sim x$) et **transitive** ($x \\sim y$ et $y \\sim z \\implies x \\sim z$).\n• **Classe** de $x$ : $\\bar{x} = \\{y \\in E \\mid y \\sim x\\}$. **Ensemble quotient** : $E/\\!\\sim$, ensemble des classes.\n• **Exemple** : la congruence modulo $n$ sur $\\mathbb{Z}$ ($a \\equiv b \\ [n] \\iff n \\mid b - a$) a $n$ classes $\\bar{0}, \\dots, \\overline{n-1}$ ; le quotient est noté $\\mathbb{Z}/n\\mathbb{Z}$.\n\n**Théorème** : les classes d'équivalence forment une partition de $E$.\n**Démonstration.**\n1. Chaque classe est non vide car $x \\in \\bar{x}$ (réflexivité), et la réunion des classes est $E$.\n2. Supposons $\\bar{x} \\cap \\bar{y} \\neq \\emptyset$ et soit $z$ dans l'intersection : $z \\sim x$ et $z \\sim y$, donc $x \\sim y$ (symétrie puis transitivité).\n3. Si $t \\in \\bar{x}$, alors $t \\sim x$ et $x \\sim y$, donc $t \\sim y$ : $\\bar{x} \\subset \\bar{y}$. Par symétrie des rôles, $\\bar{x} = \\bar{y}$. Deux classes sont donc disjointes ou égales."
      },
      {
        "title": "5. Relations d'ordre, majorants et bornes",
        "content": "Une relation $\\preceq$ sur $E$ est une **relation d'ordre** si elle est réflexive, **antisymétrique** ($x \\preceq y$ et $y \\preceq x \\implies x = y$) et transitive.\n• L'ordre est **total** si deux éléments sont toujours comparables, **partiel** sinon. Exemples d'ordres partiels : l'inclusion sur $\\mathcal{P}(E)$ (si $E$ a au moins deux éléments), la divisibilité sur $\\mathbb{N}^{\\ast}$ ($2$ et $3$ ne sont pas comparables).\n• Pour $A \\subset E$ : $M$ est un **majorant** de $A$ si $\\forall a \\in A,\\ a \\preceq M$ ; c'est le **plus grand élément** de $A$ si de plus $M \\in A$ (il est alors unique).\n• La **borne supérieure** de $A$, si elle existe, est le plus petit des majorants de $A$ ; elle n'appartient pas nécessairement à $A$."
      },
      {
        "title": "6. Ensembles finis et dénombrement",
        "content": "Soient $E$, $F$ finis, $|E| = p$, $|F| = n$.\n• **Réunion** : $|A \\cup B| = |A| + |B| - |A \\cap B|$. **Produit** : $|E \\times F| = pn$. **Applications** : $|F^E| = n^p$.\n• **Injections** de $E$ dans $F$ ($p \\le n$) : $n(n-1)\\cdots(n-p+1) = \\dfrac{n!}{(n-p)!}$ ; **permutations** de $E$ : $p!$.\n• **Parties à $p$ éléments** d'un ensemble à $n$ éléments : $\\binom{n}{p} = \\dfrac{n!}{p!\\,(n-p)!}$, avec $\\binom{n}{p} = \\binom{n}{n-p}$ et la formule de Pascal $\\binom{n}{p} + \\binom{n}{p+1} = \\binom{n+1}{p+1}$.\n• **Binôme** : $(a+b)^n = \\sum_{k=0}^n \\binom{n}{k} a^k b^{n-k}$ dans un anneau commutatif.\n• Si $|E| = |F|$ est fini, pour $f : E \\to F$ : $f$ injective $\\iff$ $f$ surjective $\\iff$ $f$ bijective.\n\n**Théorème** : $|\\mathcal{P}(E)| = 2^p$.\n**Démonstration.** L'application $\\Phi : \\mathcal{P}(E) \\to \\{0, 1\\}^E$ qui à $A$ associe sa fonction indicatrice $\\mathbf{1}_A$ est bijective : sa réciproque associe à $g : E \\to \\{0,1\\}$ la partie $g^{-1}(\\{1\\})$. Donc $|\\mathcal{P}(E)| = |\\{0,1\\}^E| = 2^p$. (Variante : $\\sum_{k=0}^p \\binom{p}{k} = (1+1)^p$.)"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer qu'une application est bijective et déterminer sa réciproque",
        "example": "Soit $f : \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{3\\}$ définie par $f(x) = \\dfrac{3x - 1}{x - 2}$. Montrer que $f$ est bien définie et bijective, et expliciter $f^{-1}$.",
        "steps": [
          "**Étape 1 (bien définie)** : si $f(x) = 3$, alors $3x - 1 = 3x - 6$, soit $-1 = -6$ : impossible. Donc $f$ est à valeurs dans $\\mathbb{R} \\setminus \\{3\\}$.",
          "**Étape 2 (fixer $y$ à l'arrivée)** : soit $y \\in \\mathbb{R} \\setminus \\{3\\}$. On résout $f(x) = y$ d'inconnue $x \\in \\mathbb{R} \\setminus \\{2\\}$ : $3x - 1 = y(x - 2) \\iff x(3 - y) = 1 - 2y$.",
          "**Étape 3 (résolution)** : comme $y \\neq 3$, l'équation a une unique solution $x = \\dfrac{2y - 1}{y - 3}$.",
          "**Étape 4 (appartenance au départ)** : si $x = 2$, alors $2y - 1 = 2y - 6$ : impossible. Donc $x \\in \\mathbb{R} \\setminus \\{2\\}$.",
          "**Conclusion** : tout $y$ de l'ensemble d'arrivée a exactement un antécédent, donc $f$ est bijective et $f^{-1}(y) = \\dfrac{2y - 1}{y - 3}$. Vérification : $f(0) = \\frac{1}{2}$ et $f^{-1}\\left(\\frac{1}{2}\\right) = \\dfrac{0}{-5/2} = 0$."
        ]
      },
      {
        "title": "Méthode : Rédiger une démonstration par récurrence",
        "example": "Montrer que pour tout $n \\in \\mathbb{N}^{\\ast}$, $\\displaystyle \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$.",
        "steps": [
          "**Énoncé** : pour $n \\ge 1$, on note $P(n)$ : « $\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$ ».",
          "**Initialisation** : pour $n = 1$, le membre de gauche vaut $1$ et celui de droite $\\frac{1 \\times 2 \\times 3}{6} = 1$. $P(1)$ est vraie.",
          "**Hérédité** : soit $n \\ge 1$ tel que $P(n)$ soit vraie. Alors\n$$\\sum_{k=1}^{n+1} k^2 = \\frac{n(n+1)(2n+1)}{6} + (n+1)^2 = \\frac{(n+1)\\big(2n^2 + 7n + 6\\big)}{6} = \\frac{(n+1)(n+2)(2n+3)}{6},$$\nce qui est $P(n+1)$.",
          "**Conclusion** : par le principe de récurrence, $P(n)$ est vraie pour tout $n \\ge 1$. Contrôle : pour $n = 3$, $1 + 4 + 9 = 14 = \\frac{3 \\times 4 \\times 7}{6}$."
        ]
      }
    ],
    "traps": [
      "L'ordre des quantificateurs compte : $\\forall x,\\ \\exists y,\\ P(x, y)$ n'équivaut pas à $\\exists y,\\ \\forall x,\\ P(x, y)$ (dans le second cas, $y$ ne dépend pas de $x$).",
      "La négation de $P \\implies Q$ est « $P$ et $\\neg Q$ », et non $\\neg P \\implies \\neg Q$ (qui est la contraposée de la réciproque).",
      "Une récurrence sans initialisation ne prouve rien : la propriété « $9$ divise $10^n + 1$ » est héréditaire, car $10^{n+1} + 1 = 10(10^n + 1) - 9$, mais elle est fausse pour tout $n$ (car $10^n + 1$ a pour reste $2$ dans la division par $9$).",
      "On a seulement $f(A \\cap B) \\subset f(A) \\cap f(B)$ : avec $f(x) = x^2$, $A = \\{-1\\}$, $B = \\{1\\}$, on obtient $f(A \\cap B) = \\emptyset$ mais $f(A) \\cap f(B) = \\{1\\}$. L'égalité a lieu si $f$ est injective.",
      "Pour la surjectivité, vérifier que la solution trouvée appartient bien à l'ensemble de départ ; la notation $f^{-1}(B)$ (image réciproque) ne suppose pas que $f$ est bijective."
    ],
    "flashcards": [
      {
        "q": "Écrire la négation de « $\\forall \\varepsilon > 0,\\ \\exists \\eta > 0,\\ \\forall x \\in \\mathbb{R},\\ |x| < \\eta \\implies |f(x)| < \\varepsilon$ ».",
        "a": "$\\exists \\varepsilon > 0,\\ \\forall \\eta > 0,\\ \\exists x \\in \\mathbb{R},\\ |x| < \\eta \\text{ et } |f(x)| \\ge \\varepsilon$."
      },
      {
        "q": "Comment démontre-t-on qu'une application $f : E \\to F$ est surjective ?",
        "a": "On fixe $y \\in F$ quelconque et on prouve l'existence d'au moins un $x \\in E$ tel que $f(x) = y$ (en résolvant l'équation et en vérifiant que la solution est dans $E$)."
      },
      {
        "q": "Énoncer le principe de récurrence forte.",
        "a": "Si $P(n_0)$ est vraie et si, pour tout $n \\ge n_0$, la vérité de $P(n_0), \\dots, P(n)$ entraîne celle de $P(n+1)$, alors $P(n)$ est vraie pour tout $n \\ge n_0$."
      },
      {
        "q": "Quelles propriétés définissent une relation d'équivalence ? une relation d'ordre ?",
        "a": "Équivalence : réflexive, symétrique, transitive. Ordre : réflexive, antisymétrique, transitive."
      },
      {
        "q": "Combien un ensemble à $n$ éléments a-t-il de parties ? de parties à $p$ éléments ?",
        "a": "$2^n$ parties, dont $\\binom{n}{p} = \\frac{n!}{p!\\,(n-p)!}$ à $p$ éléments ($0 \\le p \\le n$)."
      },
      {
        "q": "Si $g \\circ f$ est bijective, que peut-on dire de $f$ et de $g$ ?",
        "a": "$f$ est injective et $g$ est surjective (sans plus en général)."
      }
    ]
  },
  "L1-MAT": {
    "title": "L1-MAT : Calcul matriciel, systèmes linéaires et pivot de Gauss",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Calculer avec les matrices (somme, produit, transposée, trace) et connaître les règles de calcul dans l'anneau $\\mathcal{M}_n(\\mathbb{K})$.",
      "Résoudre tout système linéaire $AX = B$ par la méthode du pivot de Gauss et décrire l'ensemble de ses solutions.",
      "Définir le rang d'une matrice et le calculer par échelonnement.",
      "Caractériser l'inversibilité d'une matrice carrée et calculer son inverse par la méthode de Gauss-Jordan $(A \\mid I_n) \\to (I_n \\mid A^{-1})$.",
      "Calculer des déterminants $2 \\times 2$ et $3 \\times 3$ et les relier à l'inversibilité."
    ],
    "keyPoints": [
      {
        "title": "1. Opérations sur les matrices",
        "content": "• **Produit** : pour $A \\in \\mathcal{M}_{n,p}(\\mathbb{K})$ et $B \\in \\mathcal{M}_{p,q}(\\mathbb{K})$, $AB \\in \\mathcal{M}_{n,q}(\\mathbb{K})$ et $(AB)_{ij} = \\sum_{k=1}^p a_{ik} b_{kj}$. Le produit est associatif, distributif sur l'addition, mais **non commutatif** pour $n \\ge 2$.\n• $\\mathcal{M}_{n,p}(\\mathbb{K})$ est un espace vectoriel de dimension $np$, de base les matrices élémentaires $E_{ij}$.\n• **Transposée** : $({}^t\\!A)_{ij} = a_{ji}$ ; $\\,{}^t(AB) = {}^t\\!B\\,{}^t\\!A$. $A$ est **symétrique** si $\\,{}^t\\!A = A$, **antisymétrique** si $\\,{}^t\\!A = -A$.\n• **Trace** : $\\operatorname{Tr}(A) = \\sum_{i=1}^n a_{ii}$ ; elle est linéaire et $\\operatorname{Tr}(AB) = \\operatorname{Tr}(BA)$.\n• **Binôme de Newton** : si $AB = BA$, alors $(A + B)^m = \\sum_{k=0}^m \\binom{m}{k} A^k B^{m-k}$. Exemple : $N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ vérifie $N^2 = 0$, donc $(I_2 + N)^m = I_2 + mN$."
      },
      {
        "title": "2. Systèmes linéaires et opérations élémentaires",
        "content": "Les **opérations élémentaires** sur les lignes sont : $L_i \\leftrightarrow L_j$ ; $L_i \\leftarrow \\lambda L_i$ avec $\\lambda \\neq 0$ ; $L_i \\leftarrow L_i + \\mu L_j$ avec $j \\neq i$. Chacune revient à multiplier à gauche par une matrice inversible (matrice élémentaire).\n• **Forme échelonnée** : chaque ligne non nulle commence par strictement plus de zéros que la précédente, les lignes nulles sont en bas ; les premiers coefficients non nuls sont les **pivots**.\n• **Structure des solutions** : si $AX = B$ admet une solution $X_0$, l'ensemble des solutions est $\\{X_0 + Y \\mid AY = 0\\}$.\n\n**Proposition** : une opération élémentaire ne change pas l'ensemble des solutions.\n**Démonstration.** Chaque opération est inversible par une opération du même type : $L_i \\leftrightarrow L_j$ par elle-même, $L_i \\leftarrow \\lambda L_i$ par $L_i \\leftarrow \\lambda^{-1} L_i$, $L_i \\leftarrow L_i + \\mu L_j$ par $L_i \\leftarrow L_i - \\mu L_j$ (la ligne $L_j$ est inchangée). Toute solution du système initial vérifie les nouvelles équations, qui sont des combinaisons des anciennes ; par l'opération inverse, la réciproque est vraie. Les deux ensembles de solutions sont donc égaux."
      },
      {
        "title": "3. Rang d'une matrice et compatibilité",
        "content": "• Le **rang** $\\operatorname{rg}(A)$ est la dimension de l'espace engendré par les colonnes de $A$ ; c'est aussi le **nombre de pivots** de toute forme échelonnée de $A$ (les opérations élémentaires conservent le rang).\n• $\\operatorname{rg}(A) \\le \\min(n, p)$ et $\\operatorname{rg}({}^t\\!A) = \\operatorname{rg}(A)$.\n• Le système $AX = B$ ($p$ inconnues) est **compatible** si et seulement si $\\operatorname{rg}(A \\mid B) = \\operatorname{rg}(A)$ ; l'ensemble des solutions dépend alors de $p - \\operatorname{rg}(A)$ paramètres.\n• **Exemple** : $\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ est de rang $1$ ($L_2 \\leftarrow L_2 - 2L_1$ annule la deuxième ligne)."
      },
      {
        "title": "4. Matrices inversibles : caractérisations",
        "content": "$A \\in \\mathcal{M}_n(\\mathbb{K})$ est **inversible** s'il existe $B$ telle que $AB = BA = I_n$ ; l'ensemble $GL_n(\\mathbb{K})$ des matrices inversibles est un groupe, avec $(AB)^{-1} = B^{-1}A^{-1}$ et $({}^t\\!A)^{-1} = {}^t(A^{-1})$.\n**Théorème** : pour $A \\in \\mathcal{M}_n(\\mathbb{K})$, sont équivalents : (i) $A$ inversible ; (ii) $AX = 0 \\implies X = 0$ ; (iii) pour tout $B$, $AX = B$ a une unique solution ; (iv) $\\operatorname{rg}(A) = n$ ; (v) il existe $B$ telle que $BA = I_n$ ; (vi) $\\det(A) \\neq 0$.\n\n**Démonstration de (v) $\\implies$ (i)** (un inverse à gauche suffit).\n1. Si $BA = I_n$ et $AX = 0$, alors $X = BAX = 0$ : l'application linéaire $u : X \\mapsto AX$ de $\\mathbb{K}^n$ dans $\\mathbb{K}^n$ est injective.\n2. Par le théorème du rang (chapitre L1-APP), $\\operatorname{rg}(u) = n$, donc $u$ est bijective : il existe $C$ telle que $AC = I_n$ (colonnes de $C$ : antécédents des vecteurs de la base canonique).\n3. Alors $B = B(AC) = (BA)C = C$, donc $AB = BA = I_n$ : $A$ est inversible et $A^{-1} = B$."
      },
      {
        "title": "5. Calcul de l'inverse : méthode de Gauss-Jordan",
        "content": "• On forme $(A \\mid I_n)$ et on applique des opérations élémentaires sur les lignes jusqu'à obtenir $I_n$ à gauche ; on lit alors $A^{-1}$ à droite :\n$$(A \\mid I_n) \\longrightarrow (I_n \\mid A^{-1})$$\n• **Justification** : si $E_r \\cdots E_1 A = I_n$ (produit de matrices élémentaires), alors $E_r \\cdots E_1 = A^{-1}$, et les mêmes opérations appliquées à $I_n$ fournissent $E_r \\cdots E_1 I_n = A^{-1}$. Si une ligne nulle apparaît à gauche, $\\operatorname{rg}(A) \\le n - 1$ et $A$ n'est pas inversible.\n• **Cas $2 \\times 2$** : si $ad - bc \\neq 0$,\n$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}.$$\nExemple : $\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$ (déterminant $1$)."
      },
      {
        "title": "6. Déterminants 2 × 2 et 3 × 3",
        "content": "• $\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$ ; en dimension $3$, développement selon la première ligne :\n$$\\begin{vmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{vmatrix} = a_{11}\\begin{vmatrix} a_{22} & a_{23} \\\\ a_{32} & a_{33} \\end{vmatrix} - a_{12}\\begin{vmatrix} a_{21} & a_{23} \\\\ a_{31} & a_{33} \\end{vmatrix} + a_{13}\\begin{vmatrix} a_{21} & a_{22} \\\\ a_{31} & a_{32} \\end{vmatrix}$$\n• **Propriétés** : $\\det(AB) = \\det(A)\\det(B)$, $\\det({}^t\\!A) = \\det(A)$, $\\det(\\lambda A) = \\lambda^n \\det(A)$ ; une matrice triangulaire a pour déterminant le produit de ses coefficients diagonaux.\n• **Effet des opérations** : échanger deux lignes change le signe ; $L_i \\leftarrow \\lambda L_i$ multiplie le déterminant par $\\lambda$ ; $L_i \\leftarrow L_i + \\mu L_j$ ne le change pas.\n• **Exemple** : $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{vmatrix} = 1 \\times (-24) - 2 \\times (-20) + 3 \\times (-5) = 1$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre un système linéaire par le pivot de Gauss",
        "example": "Résoudre dans $\\mathbb{R}^3$ le système $\\begin{cases} x + y + 2z = 3 \\\\ 2x + 3y + 5z = 7 \\\\ x + 2y + 3z = 4 \\end{cases}$.",
        "steps": [
          "**Étape 1 (élimination de $x$)** : $L_2 \\leftarrow L_2 - 2L_1$ et $L_3 \\leftarrow L_3 - L_1$ donnent $y + z = 1$ et $y + z = 1$.",
          "**Étape 2 (échelonnement)** : $L_3 \\leftarrow L_3 - L_2$ donne $0 = 0$. Le système échelonné est $\\begin{cases} x + y + 2z = 3 \\\\ y + z = 1 \\end{cases}$ : deux pivots, donc le rang vaut $2$ et il y a $3 - 2 = 1$ paramètre.",
          "**Étape 3 (remontée)** : on prend $z$ comme paramètre libre : $y = 1 - z$, puis $x = 3 - y - 2z = 2 - z$.",
          "**Conclusion** : $\\mathcal{S} = \\{(2 - z,\\ 1 - z,\\ z) \\mid z \\in \\mathbb{R}\\} = (2, 1, 0) + \\mathrm{Vect}\\big((-1, -1, 1)\\big)$. Vérification avec $z = 1$ : $(1, 0, 1)$ satisfait les trois équations ($3$, $7$, $4$)."
        ]
      },
      {
        "title": "Méthode : Inverser une matrice 3 × 3 par Gauss-Jordan",
        "example": "Inverser $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{pmatrix}$.",
        "steps": [
          "**Matrice augmentée** : $\\left(\\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\\\ 0 & 1 & 4 & 0 & 1 & 0 \\\\ 5 & 6 & 0 & 0 & 0 & 1 \\end{array}\\right)$.",
          "**Descente** : $L_3 \\leftarrow L_3 - 5L_1$ donne $(0,\\ -4,\\ -15 \\mid -5,\\ 0,\\ 1)$, puis $L_3 \\leftarrow L_3 + 4L_2$ donne $(0,\\ 0,\\ 1 \\mid -5,\\ 4,\\ 1)$. Trois pivots : $A$ est inversible.",
          "**Remontée** : $L_2 \\leftarrow L_2 - 4L_3$ donne $(0,\\ 1,\\ 0 \\mid 20,\\ -15,\\ -4)$ ; $L_1 \\leftarrow L_1 - 3L_3$ donne $(1,\\ 2,\\ 0 \\mid 16,\\ -12,\\ -3)$ ; enfin $L_1 \\leftarrow L_1 - 2L_2$ donne $(1,\\ 0,\\ 0 \\mid -24,\\ 18,\\ 5)$.",
          "**Conclusion** : $A^{-1} = \\begin{pmatrix} -24 & 18 & 5 \\\\ 20 & -15 & -4 \\\\ -5 & 4 & 1 \\end{pmatrix}$. Contrôle : la première ligne de $A$ fois la première colonne de $A^{-1}$ vaut $-24 + 40 - 15 = 1$."
        ]
      }
    ],
    "traps": [
      "Le produit n'est pas commutatif : avec $A = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ et $B = \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}$, $AB = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$ mais $BA = \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$. En particulier $(A + B)^2 \\neq A^2 + 2AB + B^2$ en général.",
      "$AB = 0$ n'entraîne pas $A = 0$ ou $B = 0$ : $N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ vérifie $N^2 = 0$. De même, $AB = AC$ n'entraîne $B = C$ que si $A$ est inversible.",
      "$(AB)^{-1} = B^{-1}A^{-1}$ (ordre inversé), et $\\det(A + B) \\neq \\det(A) + \\det(B)$ en général ; attention aussi à $\\det(\\lambda A) = \\lambda^n \\det(A)$.",
      "Ne pas effectuer simultanément $L_1 \\leftarrow L_1 - L_2$ et $L_2 \\leftarrow L_2 - L_1$ : sur $x + y = 2$, $x - y = 0$, on obtient $2y = 2$ et $-2y = -2$, et l'information sur $x$ est perdue."
    ],
    "flashcards": [
      {
        "q": "Donner la formule du coefficient $(i, j)$ du produit $AB$.",
        "a": "$(AB)_{ij} = \\sum_{k=1}^p a_{ik} b_{kj}$ (ligne $i$ de $A$ contre colonne $j$ de $B$)."
      },
      {
        "q": "Que vaut $\\,{}^t(AB)$ ? et $(AB)^{-1}$ si $A$ et $B$ sont inversibles ?",
        "a": "$\\,{}^t(AB) = {}^t\\!B\\,{}^t\\!A$ et $(AB)^{-1} = B^{-1}A^{-1}$."
      },
      {
        "q": "Comment lit-on le rang d'une matrice sur une forme échelonnée ?",
        "a": "C'est le nombre de pivots (lignes non nulles) de la forme échelonnée."
      },
      {
        "q": "Citer trois caractérisations de l'inversibilité de $A \\in \\mathcal{M}_n(\\mathbb{K})$.",
        "a": "$\\operatorname{rg}(A) = n$ ; $AX = 0 \\implies X = 0$ ; $\\det(A) \\neq 0$ (ou encore : il existe $B$ avec $BA = I_n$)."
      },
      {
        "q": "Quand le système $AX = B$ est-il compatible ? Combien de paramètres pour les solutions ?",
        "a": "Si et seulement si $\\operatorname{rg}(A \\mid B) = \\operatorname{rg}(A)$ ; les solutions dépendent alors de $p - \\operatorname{rg}(A)$ paramètres ($p$ : nombre d'inconnues)."
      },
      {
        "q": "Quel est l'effet de $L_i \\leftarrow L_i + \\mu L_j$ sur le déterminant ?",
        "a": "Aucun : le déterminant est inchangé (un échange de lignes change le signe, $L_i \\leftarrow \\lambda L_i$ multiplie par $\\lambda$)."
      }
    ]
  },
  "L1-EV1": {
    "title": "L1-EV1 : Espaces vectoriels, sous-espaces et bases en dimension finie",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Connaître la définition d'un $\\mathbb{K}$-espace vectoriel et les exemples de référence ($\\mathbb{K}^n$, $\\mathbb{K}[X]$, $\\mathcal{M}_{n,p}(\\mathbb{K})$, $\\mathbb{R}^{\\mathbb{R}}$).",
      "Démontrer qu'une partie est un sous-espace vectoriel ; manipuler sous-espace engendré, intersection et somme.",
      "Définir famille libre, famille génératrice, base, et calculer des coordonnées.",
      "Énoncer le théorème de la base incomplète et les propriétés de la dimension finie.",
      "Caractériser une somme directe, des sous-espaces supplémentaires, et démontrer la formule de Grassmann."
    ],
    "keyPoints": [
      {
        "title": "1. Définition d'un K-espace vectoriel",
        "content": "Soit $\\mathbb{K} = \\mathbb{R}$ ou $\\mathbb{C}$. Un **$\\mathbb{K}$-espace vectoriel** est un ensemble $E$ muni d'une addition et d'une multiplication externe $\\mathbb{K} \\times E \\to E$ telles que :\n• $(E, +)$ est un **groupe commutatif** (associativité, neutre $0_E$, opposés, commutativité) ;\n• pour $\\lambda, \\mu \\in \\mathbb{K}$ et $u, v \\in E$ : $\\lambda(u + v) = \\lambda u + \\lambda v$, $(\\lambda + \\mu)u = \\lambda u + \\mu u$, $(\\lambda\\mu)u = \\lambda(\\mu u)$, $1 \\cdot u = u$.\n• **Conséquences** : $0 \\cdot u = 0_E$, $\\lambda \\cdot 0_E = 0_E$, $(-1)u = -u$, et $\\lambda u = 0_E \\iff (\\lambda = 0 \\text{ ou } u = 0_E)$.\n• **Exemples** : $\\mathbb{K}^n$, $\\mathbb{K}[X]$, $\\mathcal{M}_{n,p}(\\mathbb{K})$, l'ensemble $\\mathbb{R}^{\\mathbb{R}}$ des fonctions de $\\mathbb{R}$ dans $\\mathbb{R}$, l'ensemble des suites réelles."
      },
      {
        "title": "2. Sous-espaces vectoriels, intersection et réunion",
        "content": "$F \\subset E$ est un **sous-espace vectoriel** si $0_E \\in F$ et $\\forall u, v \\in F,\\ \\forall \\lambda, \\mu \\in \\mathbb{K},\\ \\lambda u + \\mu v \\in F$.\n• $\\mathrm{Vect}(v_1, \\dots, v_p) = \\{\\lambda_1 v_1 + \\dots + \\lambda_p v_p \\mid \\lambda_i \\in \\mathbb{K}\\}$ est le plus petit sous-espace contenant $v_1, \\dots, v_p$.\n• Une **intersection** de sous-espaces est un sous-espace. Le noyau d'une application linéaire est un sous-espace.\n• **Réunion** : $F \\cup G$ est un sous-espace si et seulement si $F \\subset G$ ou $G \\subset F$.\n\n**Démonstration (sens direct, par contraposée).** Supposons $F \\not\\subset G$ et $G \\not\\subset F$ : il existe $u \\in F \\setminus G$ et $v \\in G \\setminus F$. Si $u + v \\in F$, alors $v = (u + v) - u \\in F$ : exclu. Si $u + v \\in G$, alors $u = (u + v) - v \\in G$ : exclu. Donc $u + v \\notin F \\cup G$, qui n'est pas stable par addition. La réciproque est immédiate ($F \\cup G$ vaut $G$ ou $F$)."
      },
      {
        "title": "3. Familles libres, génératrices, bases",
        "content": "Soit $(e_1, \\dots, e_p)$ une famille de vecteurs de $E$.\n• **Libre** : $\\lambda_1 e_1 + \\dots + \\lambda_p e_p = 0_E \\implies \\lambda_1 = \\dots = \\lambda_p = 0$. Une famille est **liée** si et seulement si l'un des vecteurs est combinaison linéaire des autres.\n• **Génératrice** : $\\mathrm{Vect}(e_1, \\dots, e_p) = E$.\n• **Base** : famille libre et génératrice. Tout $x \\in E$ s'écrit alors de manière **unique** $x = x_1 e_1 + \\dots + x_p e_p$ ; les $x_i$ sont les **coordonnées** de $x$.\n• **Bases canoniques** : $(e_1, \\dots, e_n)$ dans $\\mathbb{K}^n$ ; $(1, X, \\dots, X^n)$ dans $\\mathbb{K}_n[X]$ ; $(E_{ij})$ dans $\\mathcal{M}_{n,p}(\\mathbb{K})$.\n• **Théorème de la base incomplète** : si $E$ est engendré par une famille finie $\\mathcal{G}$ et si $\\mathcal{L}$ est une famille libre de $E$, on peut compléter $\\mathcal{L}$ par des vecteurs de $\\mathcal{G}$ en une base de $E$. En particulier, de toute famille génératrice finie on peut extraire une base."
      },
      {
        "title": "4. Dimension finie",
        "content": "**Lemme fondamental** : si $E$ est engendré par $n$ vecteurs, toute famille de $n + 1$ vecteurs de $E$ est liée.\n**Démonstration** (récurrence sur $n$). Pour $n = 0$, $E = \\{0_E\\}$ et une famille à un vecteur, nul, est liée. Supposons le résultat vrai au rang $n - 1$ ; soient $E = \\mathrm{Vect}(e_1, \\dots, e_n)$ et $u_1, \\dots, u_{n+1} \\in E$. Écrivons $u_j = w_j + a_j e_n$ avec $w_j \\in H = \\mathrm{Vect}(e_1, \\dots, e_{n-1})$.\n1. Si tous les $a_j$ sont nuls, $u_1, \\dots, u_n$ sont $n$ vecteurs de $H$, engendré par $n - 1$ vecteurs : ils sont liés, donc la famille entière aussi.\n2. Sinon, quitte à renuméroter, $a_{n+1} \\neq 0$. Les vecteurs $v_j = u_j - \\frac{a_j}{a_{n+1}} u_{n+1}$ ($1 \\le j \\le n$) sont dans $H$, donc liés : il existe $(\\lambda_1, \\dots, \\lambda_n) \\neq 0$ avec $\\sum \\lambda_j v_j = 0_E$.\n3. Alors $\\sum_{j=1}^n \\lambda_j u_j - \\left(\\sum_{j=1}^n \\frac{\\lambda_j a_j}{a_{n+1}}\\right) u_{n+1} = 0_E$ est une relation non triviale : la famille est liée.\n\n**Conséquences** : toutes les bases de $E$ ont le même cardinal $\\dim E$ ; $\\dim \\mathbb{K}^n = n$, $\\dim \\mathbb{K}_n[X] = n + 1$, $\\dim \\mathcal{M}_{n,p}(\\mathbb{K}) = np$. Si $\\dim E = n$, une famille libre (ou génératrice) de $n$ vecteurs est une base ; si $F$ est un sous-espace, $\\dim F \\le \\dim E$ avec égalité si et seulement si $F = E$."
      },
      {
        "title": "5. Somme, somme directe, supplémentaires",
        "content": "• **Somme** : $F + G = \\{f + g \\mid f \\in F,\\ g \\in G\\}$ est le plus petit sous-espace contenant $F \\cup G$.\n• **Somme directe** : la somme est **directe**, notée $F \\oplus G$, si tout vecteur de $F + G$ s'écrit de manière unique $f + g$.\n• **Supplémentaires** : $F$ et $G$ sont supplémentaires dans $E$ si $E = F \\oplus G$. En dimension finie, tout sous-espace admet un supplémentaire (base incomplète), qui n'est pas unique.\n\n**Proposition** : $F + G$ est directe si et seulement si $F \\cap G = \\{0_E\\}$.\n**Démonstration.** Si la somme est directe et $x \\in F \\cap G$, alors $x = x + 0_E = 0_E + x$ sont deux décompositions, donc $x = 0_E$. Réciproquement, si $f + g = f' + g'$, alors $f - f' = g' - g \\in F \\cap G = \\{0_E\\}$, donc $f = f'$ et $g = g'$.\n• **Exemples** : dans $\\mathbb{R}^3$, le plan $P : x + y + z = 0$ et la droite $D = \\mathrm{Vect}\\big((1,1,1)\\big)$ sont supplémentaires ($(1,1,1) \\notin P$ et $2 + 1 = 3$). Dans $\\mathbb{R}^{\\mathbb{R}}$, fonctions paires et impaires sont supplémentaires : $f(x) = \\frac{f(x) + f(-x)}{2} + \\frac{f(x) - f(-x)}{2}$."
      },
      {
        "title": "6. Formule de Grassmann",
        "content": "**Théorème** : si $F$ et $G$ sont des sous-espaces de dimension finie,\n$$\\dim(F + G) = \\dim F + \\dim G - \\dim(F \\cap G).$$\n**Démonstration.**\n1. Soit $(e_1, \\dots, e_r)$ une base de $F \\cap G$. On la complète en une base $(e_1, \\dots, e_r, f_1, \\dots, f_s)$ de $F$ et en une base $(e_1, \\dots, e_r, g_1, \\dots, g_t)$ de $G$.\n2. La famille $\\mathcal{B} = (e_1, \\dots, e_r, f_1, \\dots, f_s, g_1, \\dots, g_t)$ engendre $F + G$, car tout $f + g$ est combinaison de ses vecteurs.\n3. Liberté : si $\\sum a_i e_i + \\sum b_j f_j + \\sum c_k g_k = 0$, alors $\\sum c_k g_k = -\\sum a_i e_i - \\sum b_j f_j \\in F \\cap G$, donc $\\sum c_k g_k = \\sum d_i e_i$ pour certains $d_i$. Par liberté de la base de $G$, tous les $c_k$ (et $d_i$) sont nuls. Il reste $\\sum a_i e_i + \\sum b_j f_j = 0$, d'où $a_i = b_j = 0$ par liberté de la base de $F$.\n4. Ainsi $\\dim(F + G) = r + s + t = (r + s) + (r + t) - r$.\n\n**Corollaire** : si $\\dim E$ est finie, $E = F \\oplus G \\iff \\big(F \\cap G = \\{0_E\\}$ et $\\dim F + \\dim G = \\dim E\\big)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer qu'une partie est un sous-espace vectoriel",
        "example": "Soit $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid 2x - y + 3z = 0\\}$. Montrer que $F$ est un sous-espace de $\\mathbb{R}^3$ et en donner une base ; $G = \\{(x, y, z) \\mid 2x - y + 3z = 4\\}$ est-il un sous-espace ?",
        "steps": [
          "**Étape 1 (vecteur nul)** : $2 \\times 0 - 0 + 3 \\times 0 = 0$, donc $0_{\\mathbb{R}^3} \\in F$.",
          "**Étape 2 (stabilité)** : pour $u = (x_1, y_1, z_1)$, $v = (x_2, y_2, z_2)$ dans $F$ et $\\lambda, \\mu \\in \\mathbb{R}$, la quantité $2(\\lambda x_1 + \\mu x_2) - (\\lambda y_1 + \\mu y_2) + 3(\\lambda z_1 + \\mu z_2)$ vaut $\\lambda \\times 0 + \\mu \\times 0 = 0$, donc $\\lambda u + \\mu v \\in F$.",
          "**Étape 3 (base)** : $(x, y, z) \\in F \\iff y = 2x + 3z$, donc $F = \\{x(1, 2, 0) + z(0, 3, 1)\\} = \\mathrm{Vect}\\big((1,2,0), (0,3,1)\\big)$. Ces deux vecteurs ne sont pas colinéaires : ils forment une base et $\\dim F = 2$.",
          "**Étape 4 (contre-exemple)** : $0_{\\mathbb{R}^3} \\notin G$ car $0 \\neq 4$ : $G$ n'est pas un sous-espace (c'est un plan affine ne passant pas par l'origine).",
          "**Variante** : $F = \\mathrm{Ker}\\,\\varphi$ avec $\\varphi(x, y, z) = 2x - y + 3z$ linéaire, ce qui prouve directement que $F$ est un sous-espace."
        ]
      },
      {
        "title": "Méthode : Montrer qu'une famille est une base et calculer des coordonnées",
        "example": "Dans $\\mathbb{R}^3$, soient $u_1 = (1, 1, 0)$, $u_2 = (0, 1, 1)$, $u_3 = (1, 0, 1)$. Montrer que $(u_1, u_2, u_3)$ est une base et calculer les coordonnées de $w = (2, 3, 1)$.",
        "steps": [
          "**Étape 1 (liberté)** : si $a u_1 + b u_2 + c u_3 = 0$, alors $a + c = 0$, $a + b = 0$, $b + c = 0$. En sommant, $a + b + c = 0$, d'où $b = 0$, $c = 0$, $a = 0$. La famille est libre.",
          "**Étape 2 (base)** : c'est une famille libre de $3 = \\dim \\mathbb{R}^3$ vecteurs, donc une base.",
          "**Étape 3 (coordonnées)** : on résout $a + c = 2$, $a + b = 3$, $b + c = 1$. En sommant, $a + b + c = 3$, d'où $a = 3 - 1 = 2$, $b = 3 - 2 = 1$, $c = 3 - 3 = 0$.",
          "**Conclusion** : $w = 2u_1 + u_2$ ; vérification : $2(1,1,0) + (0,1,1) = (2, 3, 1)$."
        ]
      }
    ],
    "traps": [
      "Une famille contenant le vecteur nul, ou deux vecteurs égaux, n'est jamais libre.",
      "Des vecteurs deux à deux non colinéaires ne forment pas forcément une famille libre : $(1, 0)$, $(0, 1)$, $(1, 1)$ dans $\\mathbb{R}^2$.",
      "$F \\cup G$ n'est un sous-espace que si $F \\subset G$ ou $G \\subset F$ ; c'est $F + G$ qui est le bon objet.",
      "Pour trois sous-espaces, des intersections deux à deux réduites à $\\{0\\}$ ne suffisent pas : trois droites distinctes de $\\mathbb{R}^2$ ne sont pas en somme directe ($\\dim$ de la somme $= 2 \\neq 3$).",
      "Un supplémentaire n'est pas le complémentaire ensembliste (qui ne contient pas $0_E$), et il n'est pas unique : toute droite non contenue dans un plan $P$ de $\\mathbb{R}^3$ est un supplémentaire de $P$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la caractérisation d'un sous-espace vectoriel $F$ de $E$ ?",
        "a": "$0_E \\in F$ et $\\forall u, v \\in F,\\ \\forall \\lambda, \\mu \\in \\mathbb{K},\\ \\lambda u + \\mu v \\in F$."
      },
      {
        "q": "Énoncer le théorème de la base incomplète.",
        "a": "Si $E$ est engendré par une famille finie $\\mathcal{G}$, toute famille libre de $E$ peut être complétée par des vecteurs de $\\mathcal{G}$ en une base de $E$."
      },
      {
        "q": "Que valent $\\dim \\mathbb{K}_n[X]$ et $\\dim \\mathcal{M}_{n,p}(\\mathbb{K})$ ?",
        "a": "$n + 1$ et $np$."
      },
      {
        "q": "Caractériser une somme directe de deux sous-espaces.",
        "a": "$F + G$ est directe si et seulement si $F \\cap G = \\{0_E\\}$ (unicité de la décomposition $f + g$)."
      },
      {
        "q": "Énoncer la formule de Grassmann.",
        "a": "$\\dim(F + G) = \\dim F + \\dim G - \\dim(F \\cap G)$ pour $F$, $G$ de dimension finie."
      },
      {
        "q": "En dimension $n$, quand une famille de $n$ vecteurs est-elle une base ?",
        "a": "Dès qu'elle est libre, ou dès qu'elle est génératrice (l'une des deux propriétés suffit)."
      }
    ]
  },
  "L1-APP": {
    "title": "L1-APP : Applications linéaires et Théorème du Rang",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Définir une application linéaire $f \\in \\mathcal{L}(E, F)$, son noyau $\\mathrm{Ker}\\, f$ et son image $\\mathrm{Im}\\, f$.",
      "Utiliser les critères d'injectivité ($\\mathrm{Ker}\\, f = \\{0_E\\}$) et de surjectivité ($\\mathrm{Im}\\, f = F$).",
      "Énoncer et démontrer le théorème du rang : $\\dim E = \\dim \\mathrm{Ker}\\, f + \\mathrm{rg}\\, f$.",
      "Représenter une application linéaire par une matrice dans des bases données et calculer avec ces matrices.",
      "Appliquer les formules de changement de base $X = PX'$ et $A' = P^{-1}AP$."
    ],
    "keyPoints": [
      {
        "title": "1. Applications linéaires",
        "content": "$f : E \\to F$ est **linéaire** si $\\forall u, v \\in E,\\ \\forall \\lambda, \\mu \\in \\mathbb{K},\\ f(\\lambda u + \\mu v) = \\lambda f(u) + \\mu f(v)$.\n• Conséquence : $f(0_E) = 0_F$ (test rapide : $x \\mapsto x + 1$ n'est pas linéaire).\n• $\\mathcal{L}(E, F)$ est un espace vectoriel ; une composée d'applications linéaires est linéaire. Vocabulaire : **endomorphisme** ($E = F$), **isomorphisme** (bijective), **automorphisme** (les deux). La réciproque d'un isomorphisme est linéaire.\n• **Exemples** : la dérivation $P \\mapsto P'$ sur $\\mathbb{K}[X]$ ; $A \\mapsto {}^t\\!A$ ; $f \\mapsto \\int_0^1 f$ sur $\\mathcal{C}([0 ; 1])$ ; $X \\mapsto AX$ de $\\mathbb{K}^p$ dans $\\mathbb{K}^n$.\n• **Détermination par une base** : si $(e_1, \\dots, e_n)$ est une base de $E$ et $y_1, \\dots, y_n \\in F$, il existe une unique $f \\in \\mathcal{L}(E, F)$ telle que $f(e_i) = y_i$ pour tout $i$."
      },
      {
        "title": "2. Noyau et image",
        "content": "Soit $f \\in \\mathcal{L}(E, F)$.\n• **Noyau** : $\\mathrm{Ker}\\, f = \\{x \\in E \\mid f(x) = 0_F\\} = f^{-1}(\\{0_F\\})$, sous-espace de $E$.\n• **Image** : $\\mathrm{Im}\\, f = \\{f(x) \\mid x \\in E\\} = f(E)$, sous-espace de $F$. Si $(e_1, \\dots, e_n)$ engendre $E$, alors $\\mathrm{Im}\\, f = \\mathrm{Vect}\\big(f(e_1), \\dots, f(e_n)\\big)$.\n• **Rang** : si $\\mathrm{Im}\\, f$ est de dimension finie, $\\mathrm{rg}\\, f = \\dim \\mathrm{Im}\\, f$.\n• L'image d'un sous-espace par $f$ est un sous-espace ; l'image réciproque d'un sous-espace est un sous-espace."
      },
      {
        "title": "3. Injectivité, surjectivité, isomorphismes",
        "content": "• **Critère d'injectivité** : $f$ injective $\\iff \\mathrm{Ker}\\, f = \\{0_E\\}$.\n**Démonstration.** Si $f$ est injective et $f(x) = 0_F = f(0_E)$, alors $x = 0_E$. Réciproquement, si $\\mathrm{Ker}\\, f = \\{0_E\\}$ et $f(u) = f(v)$, alors $f(u - v) = 0_F$, donc $u - v = 0_E$.\n• **Surjectivité** : $f$ surjective $\\iff \\mathrm{Im}\\, f = F$ $\\iff$ (si $\\dim F$ finie) $\\mathrm{rg}\\, f = \\dim F$.\n• **Images de familles** : $f$ injective $\\iff$ l'image de toute famille libre est libre ; $f$ surjective $\\iff$ l'image d'une famille génératrice de $E$ engendre $F$ ; $f$ est un isomorphisme $\\iff$ l'image d'une base de $E$ est une base de $F$.\n• Deux espaces de dimension finie sont isomorphes si et seulement s'ils ont la même dimension."
      },
      {
        "title": "4. Théorème du rang",
        "content": "**Théorème** : si $E$ est de dimension finie et $f \\in \\mathcal{L}(E, F)$, alors $\\mathrm{Im}\\, f$ est de dimension finie et\n$$\\dim E = \\dim \\mathrm{Ker}\\, f + \\mathrm{rg}\\, f.$$\n**Démonstration.**\n1. $\\mathrm{Ker}\\, f$ est un sous-espace de $E$, donc de dimension finie $k$ ; soit $(u_1, \\dots, u_k)$ une base de $\\mathrm{Ker}\\, f$, complétée en une base $(u_1, \\dots, u_k, v_1, \\dots, v_r)$ de $E$, avec $k + r = \\dim E$.\n2. **Génératrice** : tout $y \\in \\mathrm{Im}\\, f$ s'écrit $y = f(x)$ avec $x = \\sum a_i u_i + \\sum b_j v_j$ ; comme $f(u_i) = 0_F$, $y = \\sum b_j f(v_j)$. Donc $\\big(f(v_1), \\dots, f(v_r)\\big)$ engendre $\\mathrm{Im}\\, f$.\n3. **Libre** : si $\\sum b_j f(v_j) = 0_F$, alors $f\\big(\\sum b_j v_j\\big) = 0_F$, donc $\\sum b_j v_j \\in \\mathrm{Ker}\\, f$ s'écrit $\\sum a_i u_i$. La relation $\\sum a_i u_i - \\sum b_j v_j = 0_E$ et la liberté de la base de $E$ donnent $b_j = 0$ pour tout $j$.\n4. Ainsi $\\mathrm{rg}\\, f = r = \\dim E - \\dim \\mathrm{Ker}\\, f$.\n\n**Corollaire** : si $\\dim E = \\dim F$ est finie, $f$ injective $\\iff$ $f$ surjective $\\iff$ $f$ bijective."
      },
      {
        "title": "5. Matrice d'une application linéaire",
        "content": "Soient $\\mathcal{B} = (e_1, \\dots, e_p)$ une base de $E$ et $\\mathcal{C} = (\\varepsilon_1, \\dots, \\varepsilon_n)$ une base de $F$.\n• $\\mathrm{Mat}_{\\mathcal{B}, \\mathcal{C}}(f) \\in \\mathcal{M}_{n,p}(\\mathbb{K})$ a pour $j$-ième colonne les coordonnées de $f(e_j)$ dans $\\mathcal{C}$.\n• Si $X$ et $Y$ sont les colonnes de coordonnées de $x$ et de $y = f(x)$, alors $Y = AX$.\n• $\\mathrm{Mat}(g \\circ f) = \\mathrm{Mat}(g)\\,\\mathrm{Mat}(f)$ (bases compatibles) ; $\\mathrm{rg}\\, f = \\mathrm{rg}\\, A$ ; $f$ est un isomorphisme si et seulement si $A$ est carrée inversible, et $\\mathrm{Mat}(f^{-1}) = A^{-1}$.\n• **Exemple** : la dérivation $D$ sur $\\mathbb{R}_2[X]$, base $(1, X, X^2)$ : $D(1) = 0$, $D(X) = 1$, $D(X^2) = 2X$, d'où\n$$\\mathrm{Mat}(D) = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\\\ 0 & 0 & 0 \\end{pmatrix}, \\quad \\mathrm{rg}\\, D = 2, \\quad \\mathrm{Ker}\\, D = \\mathbb{R}_0[X].$$"
      },
      {
        "title": "6. Changement de base",
        "content": "• La **matrice de passage** $P = P_{\\mathcal{B} \\to \\mathcal{B}'}$ a pour colonnes les coordonnées des vecteurs de la nouvelle base $\\mathcal{B}'$ dans l'ancienne base $\\mathcal{B}$ ; elle est inversible et $P^{-1} = P_{\\mathcal{B}' \\to \\mathcal{B}}$.\n• **Coordonnées** : si $X$ (ancienne base) et $X'$ (nouvelle base) représentent le même vecteur, alors $X = PX'$.\n• **Application linéaire** : $A' = Q^{-1}AP$, où $P$ est le passage dans $E$ et $Q$ dans $F$. **Endomorphisme** : $A' = P^{-1}AP$ ; on dit que $A$ et $A'$ sont **semblables**. Deux matrices semblables ont même rang, même trace, même déterminant.\n• **Exemple** : $f$ de matrice $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ dans la base canonique de $\\mathbb{R}^2$ ; avec $\\mathcal{B}' = \\big((1,1), (1,-1)\\big)$, $f(1,1) = (3,3)$ et $f(1,-1) = (1,-1)$, donc $A' = \\begin{pmatrix} 3 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (et l'on vérifie $\\operatorname{Tr} A = \\operatorname{Tr} A' = 4$, $\\det A = \\det A' = 3$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer le noyau et l'image",
        "example": "Soit $f : \\mathbb{R}^3 \\to \\mathbb{R}^2$, $f(x, y, z) = (x - y,\\ y - z)$. Déterminer $\\mathrm{Ker}\\, f$, $\\mathrm{Im}\\, f$ et leurs dimensions.",
        "steps": [
          "**Noyau** : $f(x, y, z) = (0, 0) \\iff x = y$ et $y = z$. Donc $\\mathrm{Ker}\\, f = \\mathrm{Vect}\\big((1, 1, 1)\\big)$ et $\\dim \\mathrm{Ker}\\, f = 1$ : $f$ n'est pas injective.",
          "**Théorème du rang** : $\\mathrm{rg}\\, f = 3 - 1 = 2 = \\dim \\mathbb{R}^2$, donc $\\mathrm{Im}\\, f = \\mathbb{R}^2$ : $f$ est surjective.",
          "**Contrôle direct** : $\\mathrm{Im}\\, f = \\mathrm{Vect}\\big(f(e_1), f(e_2), f(e_3)\\big) = \\mathrm{Vect}\\big((1, 0), (-1, 1), (0, -1)\\big)$, qui contient les deux vecteurs non colinéaires $(1, 0)$ et $(0, -1)$, donc vaut $\\mathbb{R}^2$."
        ]
      },
      {
        "title": "Méthode : Calculer la matrice d'un endomorphisme dans une nouvelle base",
        "example": "Soit $f$ l'endomorphisme de $\\mathbb{R}^2$ de matrice $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ dans la base canonique. Calculer sa matrice dans $\\mathcal{B}' = (v_1, v_2)$, $v_1 = (1, 1)$, $v_2 = (1, -1)$, puis $A^n$.",
        "steps": [
          "**Étape 1 (matrice de passage)** : les colonnes de $P$ sont les coordonnées de $v_1$, $v_2$ : $P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$, $\\det P = -2 \\neq 0$, et $P^{-1} = \\frac{1}{2}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$.",
          "**Étape 2 (formule)** : $AP = \\begin{pmatrix} 3 & 1 \\\\ 3 & -1 \\end{pmatrix}$, puis $A' = P^{-1}AP = \\frac{1}{2}\\begin{pmatrix} 6 & 0 \\\\ 0 & 2 \\end{pmatrix} = \\begin{pmatrix} 3 & 0 \\\\ 0 & 1 \\end{pmatrix}$.",
          "**Étape 3 (interprétation)** : $f(v_1) = 3v_1$ et $f(v_2) = v_2$, ce que l'on vérifie directement.",
          "**Application** : $A = PA'P^{-1}$, donc $A^n = P\\begin{pmatrix} 3^n & 0 \\\\ 0 & 1 \\end{pmatrix}P^{-1} = \\frac{1}{2}\\begin{pmatrix} 3^n + 1 & 3^n - 1 \\\\ 3^n - 1 & 3^n + 1 \\end{pmatrix}$ ; pour $n = 1$ on retrouve $A$."
        ]
      }
    ],
    "traps": [
      "Dans le théorème du rang, c'est la dimension de l'espace de **départ** qui apparaît : $\\dim E = \\dim \\mathrm{Ker}\\, f + \\mathrm{rg}\\, f$, et non $\\dim F$.",
      "L'équivalence injective $\\iff$ surjective exige $\\dim E = \\dim F$ finie : la dérivation sur $\\mathbb{K}[X]$ est surjective mais pas injective (les constantes sont dans le noyau).",
      "Le théorème du rang ne dit pas que $E = \\mathrm{Ker}\\, f \\oplus \\mathrm{Im}\\, f$ : pour $f(x, y) = (y, 0)$ sur $\\mathbb{R}^2$, $\\mathrm{Ker}\\, f = \\mathrm{Im}\\, f = \\mathrm{Vect}\\big((1, 0)\\big)$.",
      "La matrice de passage exprime la **nouvelle** base dans l'**ancienne**, et $X = PX'$ donne les anciennes coordonnées en fonction des nouvelles (et non l'inverse).",
      "Une matrice dépend des bases choisies : parler de « la matrice de $f$ » sans préciser les bases n'a pas de sens."
    ],
    "flashcards": [
      {
        "q": "Définir $\\mathrm{Ker}\\, f$ et $\\mathrm{Im}\\, f$ pour $f \\in \\mathcal{L}(E, F)$.",
        "a": "$\\mathrm{Ker}\\, f = \\{x \\in E \\mid f(x) = 0_F\\}$ (sous-espace de $E$) et $\\mathrm{Im}\\, f = \\{f(x) \\mid x \\in E\\}$ (sous-espace de $F$)."
      },
      {
        "q": "Énoncer le théorème du rang.",
        "a": "Si $\\dim E$ est finie et $f \\in \\mathcal{L}(E, F)$ : $\\dim E = \\dim \\mathrm{Ker}\\, f + \\mathrm{rg}\\, f$."
      },
      {
        "q": "Quel critère d'injectivité est propre aux applications linéaires ?",
        "a": "$f$ injective $\\iff \\mathrm{Ker}\\, f = \\{0_E\\}$."
      },
      {
        "q": "Que contient la $j$-ième colonne de $\\mathrm{Mat}_{\\mathcal{B}, \\mathcal{C}}(f)$ ?",
        "a": "Les coordonnées de $f(e_j)$ dans la base $\\mathcal{C}$ de l'espace d'arrivée."
      },
      {
        "q": "Formule de changement de base pour un endomorphisme ?",
        "a": "$A' = P^{-1}AP$, où $P$ est la matrice de passage de l'ancienne base vers la nouvelle (colonnes : nouveaux vecteurs en coordonnées anciennes)."
      },
      {
        "q": "Quels invariants partagent deux matrices semblables ?",
        "a": "Le rang, la trace et le déterminant (entre autres)."
      }
    ]
  },
  "L1-REL": {
    "title": "L1-REL : Corps des nombres réels, propriété de la borne supérieure et topologie de R",
    "domain": "Analyse Réelle",
    "objectives": [
      "Manipuler valeur absolue, inégalités et intervalles de $\\mathbb{R}$.",
      "Définir majorant, maximum, borne supérieure et borne inférieure ; utiliser la caractérisation en $\\varepsilon$.",
      "Démontrer l'irrationalité de $\\sqrt{2}$, la propriété d'Archimède et l'existence de la partie entière.",
      "Démontrer la densité de $\\mathbb{Q}$ et de $\\mathbb{R} \\setminus \\mathbb{Q}$ dans $\\mathbb{R}$ et en déduire les approximations décimales.",
      "Connaître les premières notions de topologie de $\\mathbb{R}$ : voisinage, ouvert, fermé, caractérisation séquentielle."
    ],
    "keyPoints": [
      {
        "title": "1. Ordre, valeur absolue et intervalles",
        "content": "• $(\\mathbb{R}, +, \\times, \\le)$ est un corps totalement ordonné : $x \\le y \\implies x + z \\le y + z$, et $x \\le y$, $z \\ge 0 \\implies xz \\le yz$.\n• **Valeur absolue** : $|x| = \\max(x, -x)$, $|xy| = |x|\\,|y|$ et, pour $r \\ge 0$, $|x - a| \\le r \\iff a - r \\le x \\le a + r$.\n• **Inégalités triangulaires** : $|x + y| \\le |x| + |y|$ et $\\big||x| - |y|\\big| \\le |x - y|$.\n• **Intervalles** : une partie $I$ est un intervalle si $\\forall x, y \\in I,\\ x \\le z \\le y \\implies z \\in I$. Ce sont les ensembles $[a ; b]$, $]a ; b[$, $[a ; b[$, $]a ; +\\infty[$, etc."
      },
      {
        "title": "2. Borne supérieure, borne inférieure",
        "content": "Soit $A \\subset \\mathbb{R}$ non vide.\n• **Axiome de la borne supérieure** : toute partie non vide et majorée de $\\mathbb{R}$ admet une borne supérieure $\\sup A$, plus petit des majorants. De même, toute partie non vide minorée admet une borne inférieure $\\inf A$.\n• **Caractérisation** : $M = \\sup A$ si et seulement si\n  1. $\\forall x \\in A,\\ x \\le M$ ;\n  2. $\\forall \\varepsilon > 0,\\ \\exists x \\in A,\\ M - \\varepsilon < x$.\n• **Version séquentielle** : $M = \\sup A$ si et seulement si $M$ majore $A$ et il existe une suite d'éléments de $A$ qui converge vers $M$.\n• **Maximum** : $A$ a un plus grand élément si et seulement si $\\sup A$ existe et appartient à $A$. Exemple : $\\sup\\, [0 ; 1[ = 1$ mais $[0 ; 1[$ n'a pas de maximum."
      },
      {
        "title": "3. Irrationalité de √2 et insuffisance de Q",
        "content": "**Théorème** : $\\sqrt{2} \\notin \\mathbb{Q}$.\n**Démonstration.**\n1. Supposons $\\sqrt{2} = \\frac{p}{q}$ avec $p \\in \\mathbb{N}$, $q \\in \\mathbb{N}^{\\ast}$ et la fraction irréductible. Alors $p^2 = 2q^2$, donc $p^2$ est pair.\n2. Le carré d'un entier impair $2k + 1$ vaut $4k^2 + 4k + 1$, impair ; donc $p$ est pair : $p = 2m$.\n3. Alors $4m^2 = 2q^2$, soit $q^2 = 2m^2$ : $q^2$ est pair, donc $q$ est pair.\n4. $p$ et $q$ sont tous deux pairs, ce qui contredit l'irréductibilité. Donc $\\sqrt{2}$ est irrationnel.\n\n**Conséquence** : $A = \\{x \\in \\mathbb{Q} \\mid x \\ge 0,\\ x^2 < 2\\}$ est une partie non vide et majorée de $\\mathbb{Q}$ sans borne supérieure dans $\\mathbb{Q}$ (sa borne supérieure dans $\\mathbb{R}$ est $\\sqrt{2}$). L'axiome de la borne supérieure est exactement ce qui distingue $\\mathbb{R}$ de $\\mathbb{Q}$."
      },
      {
        "title": "4. Propriété d'Archimède et partie entière",
        "content": "**Théorème (Archimède)** : $\\forall x \\in \\mathbb{R},\\ \\exists n \\in \\mathbb{N},\\ n > x$. Plus généralement, pour $a > 0$ et $x \\in \\mathbb{R}$, il existe $n \\in \\mathbb{N}$ tel que $na > x$.\n**Démonstration.** Sinon, $\\mathbb{N}$ serait non vide et majoré par $x$ ; soit $s = \\sup \\mathbb{N}$. Comme $s - 1$ ne majore pas $\\mathbb{N}$, il existe $n \\in \\mathbb{N}$ avec $n > s - 1$, d'où $n + 1 > s$ avec $n + 1 \\in \\mathbb{N}$ : contradiction.\n\n**Partie entière** : pour tout $x \\in \\mathbb{R}$, il existe un unique $n \\in \\mathbb{Z}$ tel que $n \\le x < n + 1$ ; on le note $\\lfloor x \\rfloor$.\n**Démonstration.**\n1. **Unicité** : si $n \\le x < n + 1$ et $m \\le x < m + 1$, alors $-1 < n - m < 1$ et $n - m \\in \\mathbb{Z}$, donc $n = m$.\n2. **Existence** : $A = \\{k \\in \\mathbb{Z} \\mid k \\le x\\}$ est non vide (par Archimède, il existe $k \\in \\mathbb{N}$ avec $k > -x$, et alors $-k \\in A$) et majorée par $x$. Une partie non vide et majorée de $\\mathbb{Z}$ admet un plus grand élément $n$ ; on a $n \\le x$ et $n + 1 \\notin A$, c'est-à-dire $x < n + 1$.\n\n**Exemples** : $\\lfloor 2{,}7 \\rfloor = 2$, $\\lfloor -2{,}5 \\rfloor = -3$. **Approximations décimales** : $d_n = \\frac{\\lfloor 10^n x \\rfloor}{10^n}$ vérifie $d_n \\le x < d_n + 10^{-n}$."
      },
      {
        "title": "5. Densité de Q et des irrationnels",
        "content": "Une partie $D \\subset \\mathbb{R}$ est **dense** dans $\\mathbb{R}$ si tout intervalle $]a ; b[$ avec $a < b$ contient un élément de $D$.\n**Théorème** : $\\mathbb{Q}$ et $\\mathbb{R} \\setminus \\mathbb{Q}$ sont denses dans $\\mathbb{R}$.\n**Démonstration.**\n1. Soient $a < b$. Par Archimède, il existe $q \\in \\mathbb{N}^{\\ast}$ tel que $q(b - a) > 1$.\n2. Posons $p = \\lfloor qa \\rfloor + 1 \\in \\mathbb{Z}$. Par définition de la partie entière, $qa < p \\le qa + 1$.\n3. Comme $qa + 1 < qb$, on obtient $qa < p < qb$, soit $a < \\frac{p}{q} < b$ : $]a ; b[$ contient un rationnel.\n4. Pour les irrationnels : on applique ce qui précède à $]a - \\sqrt{2} ; b - \\sqrt{2}[$, qui contient un rationnel $r$. Alors $r + \\sqrt{2} \\in\\, ]a ; b[$, et $r + \\sqrt{2}$ est irrationnel (sinon $\\sqrt{2} = (r + \\sqrt{2}) - r$ serait rationnel).\n\n**Corollaire** : tout réel est limite d'une suite de rationnels (par exemple ses approximations décimales $d_n$) et d'une suite d'irrationnels."
      },
      {
        "title": "6. Premières notions de topologie de R",
        "content": "• **Voisinage** de $a$ : partie contenant un intervalle $]a - r ; a + r[$ avec $r > 0$.\n• **Ouvert** : $U$ est ouvert si $\\forall x \\in U,\\ \\exists r > 0,\\ ]x - r ; x + r[\\, \\subset U$. Exemples : $]a ; b[$, $\\mathbb{R}$, $\\emptyset$, toute réunion d'ouverts.\n• **Fermé** : $F$ est fermé si $\\mathbb{R} \\setminus F$ est ouvert. Exemples : $[a ; b]$, $\\mathbb{Z}$, toute intersection de fermés. $[0 ; 1[$ n'est ni ouvert ni fermé.\n• **Caractérisation séquentielle** : $F$ est fermé si et seulement si la limite de toute suite convergente d'éléments de $F$ appartient à $F$.\n• Un segment $[a ; b]$ est fermé et borné ; de toute suite à valeurs dans $[a ; b]$ on peut extraire une suite convergeant dans $[a ; b]$ (théorème de Bolzano-Weierstrass, chapitre L1-SUI)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer une borne supérieure ou inférieure",
        "example": "Déterminer, s'ils existent, $\\sup A$, $\\inf A$, $\\max A$ et $\\min A$ pour $A = \\left\\{1 - \\frac{1}{n} \\;\\middle|\\; n \\in \\mathbb{N}^{\\ast}\\right\\}$.",
        "steps": [
          "**Étape 1 (majorant)** : pour tout $n \\ge 1$, $\\frac{1}{n} > 0$, donc $1 - \\frac{1}{n} < 1$ : $1$ majore $A$.",
          "**Étape 2 (caractérisation)** : soit $\\varepsilon > 0$. Par Archimède, il existe $n \\ge 1$ avec $n > \\frac{1}{\\varepsilon}$ ; alors $1 - \\frac{1}{n} > 1 - \\varepsilon$. Donc $1 - \\varepsilon$ ne majore pas $A$, et $\\sup A = 1$.",
          "**Étape 3 (maximum)** : $1 \\notin A$ (car $\\frac{1}{n} \\neq 0$), donc $A$ n'a pas de plus grand élément.",
          "**Étape 4 (minimum)** : $1 - \\frac{1}{n} \\ge 0$ pour tout $n \\ge 1$, avec égalité pour $n = 1$ : $\\min A = \\inf A = 0$."
        ]
      },
      {
        "title": "Méthode : Raisonner avec la partie entière",
        "example": "Montrer que pour tout $x \\in \\mathbb{R}$ et tout $n \\in \\mathbb{N}^{\\ast}$, $\\left\\lfloor \\dfrac{\\lfloor nx \\rfloor}{n} \\right\\rfloor = \\lfloor x \\rfloor$.",
        "steps": [
          "**Étape 1 (encadrement de référence)** : posons $m = \\lfloor x \\rfloor$, de sorte que $m \\le x < m + 1$, puis $nm \\le nx < nm + n$.",
          "**Étape 2 (passage à la partie entière)** : $nm$ est un entier inférieur ou égal à $nx$, donc $nm \\le \\lfloor nx \\rfloor$ ; et $\\lfloor nx \\rfloor \\le nx < nm + n$.",
          "**Étape 3 (division par $n > 0$)** : $m \\le \\dfrac{\\lfloor nx \\rfloor}{n} < m + 1$, et $m \\in \\mathbb{Z}$.",
          "**Conclusion** : par unicité de la partie entière, $\\left\\lfloor \\frac{\\lfloor nx \\rfloor}{n} \\right\\rfloor = m = \\lfloor x \\rfloor$. Contrôle : $x = 2{,}7$, $n = 3$ : $\\lfloor 8{,}1 \\rfloor = 8$ et $\\lfloor 8/3 \\rfloor = 2$."
        ]
      }
    ],
    "traps": [
      "Ne pas confondre borne supérieure et maximum : $\\max A$ n'existe que si $\\sup A \\in A$ (contre-exemple : $[0 ; 1[$).",
      "Une inégalité stricte devient large en passant à la borne supérieure : si $\\forall x \\in A,\\ x < M$, on obtient seulement $\\sup A \\le M$ (avec $A = [0 ; 1[$ et $M = 1$, $\\sup A = M$).",
      "$\\lfloor -x \\rfloor \\neq -\\lfloor x \\rfloor$ en général : $\\lfloor -2{,}5 \\rfloor = -3$. De même, $\\lfloor x + y \\rfloor$ peut valoir $\\lfloor x \\rfloor + \\lfloor y \\rfloor + 1$ (avec $x = y = 0{,}5$).",
      "La somme ou le produit de deux irrationnels peut être rationnel : $\\sqrt{2} + (-\\sqrt{2}) = 0$ et $\\sqrt{2} \\times \\sqrt{2} = 2$.",
      "Dans $\\mathbb{Q}$, une partie non vide et majorée peut ne pas avoir de borne supérieure : $\\{x \\in \\mathbb{Q} \\mid x \\ge 0,\\ x^2 < 2\\}$."
    ],
    "flashcards": [
      {
        "q": "Énoncer la caractérisation en $\\varepsilon$ de $M = \\sup A$.",
        "a": "$\\forall x \\in A,\\ x \\le M$ et $\\forall \\varepsilon > 0,\\ \\exists x \\in A,\\ x > M - \\varepsilon$."
      },
      {
        "q": "Quelle propriété distingue $\\mathbb{R}$ de $\\mathbb{Q}$ ?",
        "a": "L'axiome de la borne supérieure : toute partie non vide et majorée de $\\mathbb{R}$ admet une borne supérieure dans $\\mathbb{R}$."
      },
      {
        "q": "Définir la partie entière $\\lfloor x \\rfloor$.",
        "a": "L'unique entier $n \\in \\mathbb{Z}$ tel que $n \\le x < n + 1$."
      },
      {
        "q": "Énoncer la propriété d'Archimède.",
        "a": "Pour tout $a > 0$ et tout $x \\in \\mathbb{R}$, il existe $n \\in \\mathbb{N}$ tel que $na > x$."
      },
      {
        "q": "Quelle est l'idée de la preuve de la densité de $\\mathbb{Q}$ ?",
        "a": "Choisir $q \\ge 1$ avec $q(b - a) > 1$, puis $p = \\lfloor qa \\rfloor + 1$ : on a $a < \\frac{p}{q} < b$."
      },
      {
        "q": "Comment caractériser séquentiellement une partie fermée de $\\mathbb{R}$ ?",
        "a": "$F$ est fermée si et seulement si toute suite d'éléments de $F$ qui converge a sa limite dans $F$."
      }
    ]
  },
  "L1-SUI": {
    "title": "L1-SUI : Suites réelles : limites (ε-N), suites de Cauchy et Bolzano-Weierstrass",
    "domain": "Analyse Réelle",
    "objectives": [
      "Maîtriser la définition en $\\varepsilon$-$N$ de la convergence et démontrer l'unicité de la limite.",
      "Appliquer les théorèmes d'opérations, de comparaison, d'encadrement et de la limite monotone.",
      "Démontrer le théorème des suites adjacentes et l'utiliser.",
      "Utiliser les suites extraites, le théorème de Bolzano-Weierstrass et la notion de suite de Cauchy.",
      "Étudier une suite récurrente $u_{n+1} = f(u_n)$ et manipuler les relations de comparaison $o$, $O$, $\\sim$."
    ],
    "keyPoints": [
      {
        "title": "1. Convergence : définition, unicité, caractère borné",
        "content": "• $(u_n)$ **converge vers** $\\ell \\in \\mathbb{R}$ si $\\forall \\varepsilon > 0,\\ \\exists N \\in \\mathbb{N},\\ \\forall n \\ge N,\\ |u_n - \\ell| \\le \\varepsilon$.\n• $(u_n)$ **tend vers** $+\\infty$ si $\\forall A \\in \\mathbb{R},\\ \\exists N,\\ \\forall n \\ge N,\\ u_n \\ge A$.\n\n**Théorème** : la limite d'une suite convergente est unique, et toute suite convergente est bornée.\n**Démonstration.**\n1. **Unicité** : supposons $u_n \\to \\ell$ et $u_n \\to \\ell'$ avec $\\ell \\neq \\ell'$. Posons $\\varepsilon = \\frac{|\\ell - \\ell'|}{3} > 0$. Il existe $N_1$ et $N_2$ tels que $|u_n - \\ell| \\le \\varepsilon$ pour $n \\ge N_1$ et $|u_n - \\ell'| \\le \\varepsilon$ pour $n \\ge N_2$. Pour $n = \\max(N_1, N_2)$ : $|\\ell - \\ell'| \\le |\\ell - u_n| + |u_n - \\ell'| \\le 2\\varepsilon = \\frac{2}{3}|\\ell - \\ell'|$, contradiction.\n2. **Bornée** : avec $\\varepsilon = 1$, il existe $N$ tel que $|u_n| \\le |\\ell| + 1$ pour $n \\ge N$. Alors $|u_n| \\le \\max\\big(|u_0|, \\dots, |u_{N-1}|, |\\ell| + 1\\big)$ pour tout $n$."
      },
      {
        "title": "2. Opérations, comparaison, encadrement",
        "content": "• **Opérations** : si $u_n \\to \\ell$ et $v_n \\to \\ell'$, alors $u_n + v_n \\to \\ell + \\ell'$, $u_n v_n \\to \\ell\\ell'$, et $\\frac{u_n}{v_n} \\to \\frac{\\ell}{\\ell'}$ si $\\ell' \\neq 0$. Formes indéterminées : $\\infty - \\infty$, $0 \\times \\infty$, $\\frac{0}{0}$, $\\frac{\\infty}{\\infty}$.\n• **Passage à la limite** : si $u_n \\le v_n$ à partir d'un certain rang et si les deux suites convergent, alors $\\lim u_n \\le \\lim v_n$ (inégalité **large**).\n• **Encadrement** : si $v_n \\le u_n \\le w_n$ à partir d'un certain rang et $v_n \\to \\ell$, $w_n \\to \\ell$, alors $u_n \\to \\ell$.\n• **Minoration** : si $u_n \\ge v_n$ et $v_n \\to +\\infty$, alors $u_n \\to +\\infty$.\n• **Exemple** : $\\left|\\frac{\\sin n}{n}\\right| \\le \\frac{1}{n}$, donc $\\frac{\\sin n}{n} \\to 0$."
      },
      {
        "title": "3. Théorème de la limite monotone",
        "content": "**Théorème** : toute suite croissante et majorée converge vers $\\sup\\{u_n \\mid n \\in \\mathbb{N}\\}$ ; toute suite croissante non majorée tend vers $+\\infty$ (énoncés symétriques pour les suites décroissantes).\n**Démonstration.**\n1. L'ensemble $A = \\{u_n \\mid n \\in \\mathbb{N}\\}$ est non vide et majoré : il admet une borne supérieure $\\ell$.\n2. Soit $\\varepsilon > 0$. Comme $\\ell - \\varepsilon$ ne majore pas $A$, il existe $N$ tel que $u_N > \\ell - \\varepsilon$.\n3. Pour $n \\ge N$, la croissance donne $\\ell - \\varepsilon < u_N \\le u_n \\le \\ell$, donc $|u_n - \\ell| < \\varepsilon$. Ainsi $u_n \\to \\ell$.\n4. Si la suite n'est pas majorée, pour tout $A$ il existe $N$ avec $u_N > A$, et alors $u_n \\ge u_N > A$ pour $n \\ge N$."
      },
      {
        "title": "4. Suites adjacentes",
        "content": "$(u_n)$ et $(v_n)$ sont **adjacentes** si $(u_n)$ est croissante, $(v_n)$ décroissante et $v_n - u_n \\to 0$.\n**Théorème** : deux suites adjacentes convergent vers une même limite $\\ell$, et $u_n \\le \\ell \\le v_n$ pour tout $n$.\n**Démonstration.**\n1. $w_n = v_n - u_n$ vérifie $w_{n+1} - w_n = (v_{n+1} - v_n) - (u_{n+1} - u_n) \\le 0$ : $(w_n)$ est décroissante et tend vers $0$, donc $w_n \\ge 0$ pour tout $n$ (sinon, si $w_p < 0$, on aurait $w_n \\le w_p < 0$ pour $n \\ge p$, et la limite serait $\\le w_p < 0$).\n2. Ainsi $u_0 \\le u_n \\le v_n \\le v_0$ : $(u_n)$ est croissante majorée par $v_0$, $(v_n)$ décroissante minorée par $u_0$ ; elles convergent vers $\\ell$ et $\\ell'$.\n3. $\\ell' - \\ell = \\lim w_n = 0$. Enfin $u_n \\le \\ell$ (suite croissante) et $\\ell \\le v_n$ (suite décroissante).\n\n**Exemple** : $u_n = \\sum_{k=0}^n \\frac{1}{k!}$ et $v_n = u_n + \\frac{1}{n \\cdot n!}$ ($n \\ge 1$) sont adjacentes, de limite $e$ ; on obtient l'encadrement $u_n \\le e \\le v_n$."
      },
      {
        "title": "5. Suites extraites, Bolzano-Weierstrass, suites de Cauchy",
        "content": "• Une **suite extraite** de $(u_n)$ est $(u_{\\varphi(n)})$ avec $\\varphi : \\mathbb{N} \\to \\mathbb{N}$ strictement croissante. Si $u_n \\to \\ell$, toute suite extraite tend vers $\\ell$. Si $u_{2n} \\to \\ell$ et $u_{2n+1} \\to \\ell$, alors $u_n \\to \\ell$.\n• **Application** : $\\big((-1)^n\\big)$ diverge, car ses extraites $(u_{2n})$ et $(u_{2n+1})$ tendent vers $1$ et $-1$.\n• **Théorème de Bolzano-Weierstrass** : de toute suite réelle bornée on peut extraire une suite convergente. La limite d'une suite extraite convergente est une **valeur d'adhérence** de $(u_n)$.\n• **Suite de Cauchy** : $\\forall \\varepsilon > 0,\\ \\exists N,\\ \\forall p, q \\ge N,\\ |u_p - u_q| \\le \\varepsilon$.\n• **Complétude de $\\mathbb{R}$** : une suite réelle converge si et seulement si elle est de Cauchy (le sens « converge $\\implies$ Cauchy » est immédiat ; la réciproque utilise Bolzano-Weierstrass)."
      },
      {
        "title": "6. Suites récurrentes u(n+1) = f(u(n))",
        "content": "Soit $f : I \\to \\mathbb{R}$ avec $I$ un intervalle **stable** ($f(I) \\subset I$) et $u_0 \\in I$ ; la suite est alors bien définie.\n• **Limite possible** : si $f$ est continue sur $I$ et si $u_n \\to \\ell \\in I$, alors $f(\\ell) = \\ell$ ($\\ell$ est un point fixe).\n• **$f$ croissante sur $I$** : $(u_n)$ est monotone, croissante si $u_1 \\ge u_0$, décroissante si $u_1 \\le u_0$ (récurrence : $u_n \\le u_{n+1} \\implies f(u_n) \\le f(u_{n+1})$).\n• **$f$ décroissante sur $I$** : $(u_{2n})$ et $(u_{2n+1})$ sont monotones de sens contraires (car $f \\circ f$ est croissante).\n• **$f$ contractante** : si $|f(x) - f(y)| \\le k|x - y|$ sur $I$ avec $0 \\le k < 1$ et $f(\\ell) = \\ell$, alors $|u_n - \\ell| \\le k^n |u_0 - \\ell|$, donc $u_n \\to \\ell$. C'est le cas si $|f'| \\le k$ sur $I$ (inégalité des accroissements finis)."
      },
      {
        "title": "7. Relations de comparaison",
        "content": "Soit $(v_n)$ non nulle à partir d'un certain rang.\n• $u_n = o(v_n)$ si $\\frac{u_n}{v_n} \\to 0$ ; $u_n = O(v_n)$ si $\\left(\\frac{u_n}{v_n}\\right)$ est bornée ; $u_n \\sim v_n$ si $\\frac{u_n}{v_n} \\to 1$, ce qui équivaut à $u_n - v_n = o(v_n)$.\n• **Croissances comparées** : pour $\\alpha, \\beta > 0$ et $q > 1$, $(\\ln n)^\\alpha = o(n^\\beta)$, $n^\\beta = o(q^n)$ et $q^n = o(n!)$.\n• **Règles** : les équivalents se multiplient, se divisent et s'élèvent à une puissance fixe ; deux suites équivalentes ont la même limite (si elle existe) et le même signe à partir d'un certain rang.\n• **Exemple** : $\\frac{n^2 + 3n}{2n^2 - 1} \\sim \\frac{n^2}{2n^2} = \\frac{1}{2}$, donc la suite tend vers $\\frac{1}{2}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer une convergence avec la définition",
        "example": "Démontrer avec la définition que $\\displaystyle \\lim_{n \\to +\\infty} \\frac{2n + 1}{n + 3} = 2$.",
        "steps": [
          "**Étape 1 (écart)** : $\\left|\\frac{2n + 1}{n + 3} - 2\\right| = \\left|\\frac{2n + 1 - 2n - 6}{n + 3}\\right| = \\frac{5}{n + 3}$.",
          "**Étape 2 (majoration simple)** : pour $n \\ge 1$, $\\frac{5}{n + 3} < \\frac{5}{n}$.",
          "**Étape 3 (choix du rang)** : soit $\\varepsilon > 0$ ; posons $N = \\left\\lfloor \\frac{5}{\\varepsilon} \\right\\rfloor + 1$, de sorte que $N > \\frac{5}{\\varepsilon}$. Pour $n \\ge N$, $\\frac{5}{n} \\le \\frac{5}{N} < \\varepsilon$.",
          "**Conclusion** : pour tout $n \\ge N$, $|u_n - 2| < \\varepsilon$, donc $u_n \\to 2$. Exemple : pour $\\varepsilon = 0{,}01$, $N = 501$ convient."
        ]
      },
      {
        "title": "Méthode : Étudier une suite récurrente u(n+1) = f(u(n))",
        "example": "Étudier la suite définie par $u_0 = 1$ et $u_{n+1} = \\sqrt{2 + u_n}$.",
        "steps": [
          "**Étape 1 (intervalle stable)** : $f(x) = \\sqrt{2 + x}$ est continue et croissante sur $I = [0 ; 2]$, et pour $x \\in I$, $f(x) \\in [\\sqrt{2} ; 2] \\subset I$. Comme $u_0 \\in I$, tous les $u_n$ sont dans $I$.",
          "**Étape 2 (monotonie)** : $u_1 = \\sqrt{3} \\approx 1{,}732 > u_0$. Si $u_n \\le u_{n+1}$, alors $f(u_n) \\le f(u_{n+1})$, c'est-à-dire $u_{n+1} \\le u_{n+2}$ : la suite est croissante.",
          "**Étape 3 (convergence)** : croissante et majorée par $2$, elle converge vers $\\ell \\in [0 ; 2]$ ($I$ est fermé).",
          "**Étape 4 (identification)** : par continuité, $\\ell = \\sqrt{2 + \\ell}$, donc $\\ell^2 - \\ell - 2 = 0$, soit $\\ell \\in \\{-1, 2\\}$. Comme $\\ell \\ge 0$, $\\ell = 2$.",
          "**Vitesse** : $|f'(x)| = \\frac{1}{2\\sqrt{2 + x}} \\le \\frac{1}{2\\sqrt{2}}$ sur $I$, donc $|u_n - 2| \\le \\left(\\frac{1}{2\\sqrt{2}}\\right)^n$."
        ]
      }
    ],
    "traps": [
      "On n'additionne pas des équivalents : $n + 1 \\sim n$ et $-n \\sim -n$, mais $(n + 1) + (-n) = 1$ n'est pas équivalent à $0$. On n'écrit jamais $u_n \\sim 0$.",
      "On ne compose pas des équivalents par une fonction quelconque : $n^2 + n \\sim n^2$, mais $\\frac{e^{n^2 + n}}{e^{n^2}} = e^n \\to +\\infty$.",
      "Une inégalité stricte devient large à la limite : $\\frac{1}{n} > 0$ pour tout $n \\ge 1$, mais $\\lim \\frac{1}{n} = 0$.",
      "Un point fixe n'est une limite qu'une fois la convergence établie : pour $u_{n+1} = 2u_n$, $u_0 = 1$, l'équation $\\ell = 2\\ell$ donne $\\ell = 0$, alors que $u_n = 2^n \\to +\\infty$.",
      "Une suite bornée ne converge pas forcément ($(-1)^n$), et $u_{n+1} - u_n \\to 0$ n'implique pas la convergence ($u_n = \\sqrt{n}$)."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème de la limite monotone.",
        "a": "Une suite croissante majorée converge (vers la borne supérieure de ses termes) ; une suite croissante non majorée tend vers $+\\infty$."
      },
      {
        "q": "Définir deux suites adjacentes et énoncer le théorème associé.",
        "a": "$(u_n)$ croissante, $(v_n)$ décroissante, $v_n - u_n \\to 0$ ; elles convergent vers une même limite $\\ell$ avec $u_n \\le \\ell \\le v_n$."
      },
      {
        "q": "Énoncer le théorème de Bolzano-Weierstrass.",
        "a": "De toute suite réelle bornée on peut extraire une suite convergente."
      },
      {
        "q": "Que signifie la complétude de $\\mathbb{R}$ ?",
        "a": "Toute suite de Cauchy de réels converge (et réciproquement toute suite convergente est de Cauchy)."
      },
      {
        "q": "Si $u_{n+1} = f(u_n)$ converge vers $\\ell$, que vérifie $\\ell$ ?",
        "a": "Si $f$ est continue en $\\ell$ (avec $\\ell$ dans l'intervalle stable), $f(\\ell) = \\ell$."
      },
      {
        "q": "Comment montrer qu'une suite diverge à l'aide de suites extraites ?",
        "a": "Exhiber deux suites extraites ayant des limites différentes (ou une extraite divergente)."
      }
    ]
  },
  "L1-TAY": {
    "title": "L1-TAY : Formules de Taylor, développements limités et étude locale",
    "domain": "Analyse Réelle",
    "objectives": [
      "Démontrer les théorèmes de Rolle et des accroissements finis et en déduire l'inégalité des accroissements finis.",
      "Démontrer la formule de Taylor avec reste intégral et en déduire l'inégalité de Taylor-Lagrange et la formule de Taylor-Young.",
      "Connaître les développements limités usuels en $0$.",
      "Effectuer les opérations sur les DL : somme, produit, quotient, composition et primitivation.",
      "Appliquer les DL aux limites, à la position par rapport à une tangente et aux asymptotes."
    ],
    "keyPoints": [
      {
        "title": "1. Théorème de Rolle et accroissements finis",
        "content": "• **Extremum local** : si $f$ est dérivable en un point $c$ intérieur à $I$ où elle admet un extremum local, alors $f'(c) = 0$.\n• **Théorème de Rolle** : si $f$ est continue sur $[a ; b]$ ($a < b$), dérivable sur $]a ; b[$ et $f(a) = f(b)$, il existe $c \\in\\, ]a ; b[$ tel que $f'(c) = 0$.\n• **Théorème des accroissements finis (TAF)** : si $f$ est continue sur $[a ; b]$ et dérivable sur $]a ; b[$, il existe $c \\in\\, ]a ; b[$ tel que $f(b) - f(a) = f'(c)(b - a)$.\n\n**Démonstration.**\n1. **Rolle** : $f$ est continue sur le segment $[a ; b]$, donc bornée et atteint ses bornes $m$ et $M$. Si $m = M$, $f$ est constante et tout $c$ convient. Sinon, l'une des deux valeurs diffère de $f(a) = f(b)$ ; disons $M$, atteint en $c \\in\\, ]a ; b[$.\n2. Pour $x \\in\\, ]c ; b[$, $\\frac{f(x) - f(c)}{x - c} \\le 0$ ; pour $x \\in\\, ]a ; c[$, ce quotient est $\\ge 0$. En passant à la limite en $c$, $f'(c) \\le 0$ et $f'(c) \\ge 0$, donc $f'(c) = 0$.\n3. **TAF** : $g(x) = f(x) - \\frac{f(b) - f(a)}{b - a}(x - a)$ est continue sur $[a ; b]$, dérivable sur $]a ; b[$ et $g(a) = g(b) = f(a)$. Rolle donne $c$ avec $0 = g'(c) = f'(c) - \\frac{f(b) - f(a)}{b - a}$."
      },
      {
        "title": "2. Conséquences des accroissements finis",
        "content": "Soit $f$ continue sur un intervalle $I$ et dérivable à l'intérieur de $I$.\n• **Inégalité des accroissements finis** : si $|f'| \\le M$, alors $|f(x) - f(y)| \\le M|x - y|$ pour tous $x, y \\in I$ ($f$ est $M$-lipschitzienne).\n• **Monotonie** : $f' \\ge 0 \\implies f$ croissante ; $f' > 0$ sauf en un nombre fini de points $\\implies f$ strictement croissante ; $f' = 0 \\implies f$ constante (sur un **intervalle**).\n• **Limite de la dérivée** : si $f$ est continue en $a$, dérivable sur $I \\setminus \\{a\\}$ et si $f'(x) \\to \\ell$ quand $x \\to a$, alors $f$ est dérivable en $a$ et $f'(a) = \\ell$.\n• **Exemple** : $|\\sin x - \\sin y| \\le |x - y|$, et $|\\ln x - \\ln y| \\le |x - y|$ pour $x, y \\ge 1$."
      },
      {
        "title": "3. Formule de Taylor avec reste intégral",
        "content": "**Théorème** : si $f$ est de classe $\\mathcal{C}^{n+1}$ sur un intervalle $I$ et $a, x \\in I$,\n$$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x - a)^k + \\int_a^x \\frac{(x - t)^n}{n!} f^{(n+1)}(t)\\, dt.$$\n**Démonstration** (récurrence sur $n$).\n1. **Rang $0$** : $f$ est $\\mathcal{C}^1$, donc $f(x) = f(a) + \\int_a^x f'(t)\\, dt$ (théorème fondamental de l'analyse).\n2. **Hérédité** : supposons la formule vraie au rang $n - 1$ pour les fonctions $\\mathcal{C}^n$, et soit $f$ de classe $\\mathcal{C}^{n+1}$. Le reste au rang $n - 1$ est $R_{n-1} = \\int_a^x \\frac{(x - t)^{n-1}}{(n-1)!} f^{(n)}(t)\\, dt$.\n3. On intègre par parties avec $u(t) = -\\frac{(x - t)^n}{n!}$, $u'(t) = \\frac{(x - t)^{n-1}}{(n-1)!}$, $v = f^{(n)}$, $v' = f^{(n+1)}$, toutes continues :\n$$R_{n-1} = \\left[-\\frac{(x - t)^n}{n!} f^{(n)}(t)\\right]_a^x + \\int_a^x \\frac{(x - t)^n}{n!} f^{(n+1)}(t)\\, dt = \\frac{f^{(n)}(a)}{n!}(x - a)^n + R_n.$$\n4. En reportant dans la formule au rang $n - 1$, on obtient la formule au rang $n$."
      },
      {
        "title": "4. Taylor-Lagrange et Taylor-Young",
        "content": "• **Inégalité de Taylor-Lagrange** : si $f$ est $\\mathcal{C}^{n+1}$ sur $I$ et $|f^{(n+1)}| \\le M$ entre $a$ et $x$,\n$$\\left|f(x) - \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x - a)^k\\right| \\le \\frac{M|x - a|^{n+1}}{(n+1)!}.$$\nElle se déduit du reste intégral, puisque $\\left|\\int_a^x \\frac{(x - t)^n}{n!}\\, dt\\right| = \\frac{|x - a|^{n+1}}{(n+1)!}$.\n• **Égalité de Taylor-Lagrange** : si $f$ est $n + 1$ fois dérivable et $x \\neq a$, il existe $c$ strictement entre $a$ et $x$ tel que le reste vaut $\\frac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}$ (pour $n = 0$, c'est le TAF).\n• **Formule de Taylor-Young** : si $f$ est de classe $\\mathcal{C}^n$ sur $I$ (il suffit que $f$ soit $n$ fois dérivable en $a$),\n$$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x - a)^k + o\\big((x - a)^n\\big) \\quad (x \\to a).$$\n• **Application** : pour tout $x \\in \\mathbb{R}$, $\\left|e^x - \\sum_{k=0}^n \\frac{x^k}{k!}\\right| \\le \\frac{e^{|x|}|x|^{n+1}}{(n+1)!} \\to 0$, donc $e^x = \\sum_{k=0}^{+\\infty} \\frac{x^k}{k!}$."
      },
      {
        "title": "5. Développements limités usuels en 0",
        "content": "$f$ admet un **DL à l'ordre $n$ en $0$** s'il existe des réels $a_0, \\dots, a_n$ tels que $f(x) = a_0 + a_1 x + \\dots + a_n x^n + o(x^n)$ ; la partie régulière est **unique**. Si $f$ est paire (resp. impaire), elle ne contient que des puissances paires (resp. impaires).\n• $e^x = 1 + x + \\frac{x^2}{2!} + \\dots + \\frac{x^n}{n!} + o(x^n)$\n• $\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\dots + (-1)^p \\frac{x^{2p}}{(2p)!} + o(x^{2p+1})$\n• $\\sin x = x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\dots + (-1)^p \\frac{x^{2p+1}}{(2p+1)!} + o(x^{2p+2})$\n• $\\frac{1}{1 - x} = 1 + x + x^2 + \\dots + x^n + o(x^n)$ et $\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots + (-1)^{n-1}\\frac{x^n}{n} + o(x^n)$\n• $(1 + x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha - 1)}{2}x^2 + \\dots + \\frac{\\alpha(\\alpha - 1)\\cdots(\\alpha - n + 1)}{n!}x^n + o(x^n)$\n• $\\arctan x = x - \\frac{x^3}{3} + \\dots + (-1)^p \\frac{x^{2p+1}}{2p+1} + o(x^{2p+2})$ et $\\tan x = x + \\frac{x^3}{3} + o(x^4)$"
      },
      {
        "title": "6. Opérations sur les développements limités",
        "content": "• **Somme** : on additionne les parties régulières (à l'ordre commun le plus petit).\n• **Produit** : on multiplie les parties régulières et on tronque à l'ordre $n$ ; si les DL commencent par $x^p$ et $x^q$, des DL à l'ordre $n - q$ et $n - p$ suffisent.\n• **Quotient** : on se ramène à $\\frac{1}{1 - u}$ avec $u \\to 0$. Exemple : $\\tan x = \\left(x - \\frac{x^3}{6}\\right)\\left(1 + \\frac{x^2}{2}\\right) + o(x^3) = x + \\frac{x^3}{3} + o(x^3)$.\n• **Composition** : si $u(x) \\to 0$ quand $x \\to 0$ et si $g$ a un DL en $0$, on substitue le DL de $u$ dans celui de $g$ et on tronque. Exemple :\n$$e^{\\sin x} = 1 + \\left(x - \\frac{x^3}{6}\\right) + \\frac{x^2}{2} + \\frac{x^3}{6} + o(x^3) = 1 + x + \\frac{x^2}{2} + o(x^3).$$\n• **Primitivation** : si $f$ est continue sur un intervalle contenant $0$ et $f(x) = \\sum_{k=0}^n a_k x^k + o(x^n)$, toute primitive $F$ vérifie $F(x) = F(0) + \\sum_{k=0}^n \\frac{a_k}{k+1}x^{k+1} + o(x^{n+1})$. Exemple : $\\arctan$ s'obtient à partir de $\\frac{1}{1 + x^2} = 1 - x^2 + x^4 + o(x^4)$."
      },
      {
        "title": "7. Applications : limites, tangentes, asymptotes",
        "content": "• **Limites** : remplacer chaque fonction par un DL à un ordre suffisant pour faire apparaître le premier terme non nul.\n• **Position par rapport à la tangente** : si $f(x) = a_0 + a_1(x - a) + a_p(x - a)^p + o\\big((x - a)^p\\big)$ avec $p \\ge 2$ et $a_p \\neq 0$, la tangente en $a$ est $y = a_0 + a_1(x - a)$ et la position locale de la courbe est donnée par le signe de $a_p(x - a)^p$ (point d'inflexion si $p$ est impair).\n• **Asymptote** : si $f(x) = \\alpha x + \\beta + \\frac{\\gamma}{x^p} + o\\left(\\frac{1}{x^p}\\right)$ quand $x \\to +\\infty$, avec $\\gamma \\neq 0$ et $p \\ge 1$, la droite $y = \\alpha x + \\beta$ est asymptote et la courbe est au-dessus si $\\gamma > 0$, en dessous si $\\gamma < 0$, au voisinage de $+\\infty$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une limite par développements limités",
        "example": "Calculer $\\displaystyle \\lim_{x \\to 0} \\frac{\\sin x - x}{\\ln(1 + x^3)}$.",
        "steps": [
          "**Étape 1 (numérateur)** : $\\sin x = x - \\frac{x^3}{6} + o(x^3)$, donc $\\sin x - x = -\\frac{x^3}{6} + o(x^3)$.",
          "**Étape 2 (dénominateur)** : $\\ln(1 + u) = u + o(u)$ avec $u = x^3 \\to 0$, donc $\\ln(1 + x^3) = x^3 + o(x^3)$.",
          "**Étape 3 (quotient)** : $\\dfrac{-\\frac{x^3}{6} + o(x^3)}{x^3 + o(x^3)} = \\dfrac{-\\frac{1}{6} + o(1)}{1 + o(1)}$.",
          "**Conclusion** : la limite vaut $-\\frac{1}{6}$."
        ]
      },
      {
        "title": "Méthode : Déterminer une asymptote et la position de la courbe",
        "example": "Étudier $f(x) = \\sqrt{x^2 + x + 1}$ au voisinage de $+\\infty$.",
        "steps": [
          "**Étape 1 (factorisation)** : pour $x > 0$, $f(x) = x\\sqrt{1 + h}$ avec $h = \\frac{1}{x} + \\frac{1}{x^2} \\to 0$.",
          "**Étape 2 (DL de $\\sqrt{1 + h}$)** : $\\sqrt{1 + h} = 1 + \\frac{h}{2} - \\frac{h^2}{8} + o(h^2)$, et $h^2 = \\frac{1}{x^2} + o\\left(\\frac{1}{x^2}\\right)$.",
          "**Étape 3 (substitution)** : $\\sqrt{1 + h} = 1 + \\frac{1}{2x} + \\frac{1}{2x^2} - \\frac{1}{8x^2} + o\\left(\\frac{1}{x^2}\\right) = 1 + \\frac{1}{2x} + \\frac{3}{8x^2} + o\\left(\\frac{1}{x^2}\\right)$.",
          "**Étape 4 (multiplication par $x$)** : $f(x) = x + \\frac{1}{2} + \\frac{3}{8x} + o\\left(\\frac{1}{x}\\right)$.",
          "**Conclusion** : la droite $y = x + \\frac{1}{2}$ est asymptote en $+\\infty$ et, comme $\\frac{3}{8x} > 0$, la courbe est au-dessus au voisinage de $+\\infty$. Contrôle : $f(1000) \\approx 1000{,}500375$."
        ]
      }
    ],
    "traps": [
      "Pour composer des DL en $0$, il faut que la fonction intérieure tende vers $0$ : pour $e^{\\cos x}$, on écrit $e^{\\cos x} = e \\cdot e^{\\cos x - 1}$ avant de substituer.",
      "On ne dérive pas un DL sans hypothèse : $f(x) = x^3 \\sin\\frac{1}{x}$ ($f(0) = 0$) vérifie $f(x) = o(x^2)$, mais $f'(x) = 3x^2 \\sin\\frac{1}{x} - x\\cos\\frac{1}{x}$ n'admet pas de DL à l'ordre $1$ (le quotient $\\frac{f'(x)}{x}$ n'a pas de limite) ; et $f''(0)$ n'existe pas.",
      "$o(x^3) - o(x^3) = o(x^3)$ et non $0$ ; et un produit tronqué trop tôt fait perdre des termes : vérifier l'ordre de chaque facteur.",
      "Le théorème de Rolle est faux pour une fonction non dérivable en un point ($|x|$ sur $[-1 ; 1]$) et pour une fonction à valeurs complexes ($t \\mapsto e^{it}$ sur $[0 ; 2\\pi]$, dont la dérivée $ie^{it}$ ne s'annule pas).",
      "Dans Taylor-Lagrange, le point $c$ dépend de $x$ et n'est pas unique ; on ne peut pas le traiter comme une constante."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème des accroissements finis.",
        "a": "Si $f$ est continue sur $[a ; b]$ et dérivable sur $]a ; b[$, il existe $c \\in\\, ]a ; b[$ tel que $f(b) - f(a) = f'(c)(b - a)$."
      },
      {
        "q": "Écrire la formule de Taylor avec reste intégral à l'ordre $n$.",
        "a": "Pour $f$ de classe $\\mathcal{C}^{n+1}$ : $f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x - a)^k + \\int_a^x \\frac{(x - t)^n}{n!} f^{(n+1)}(t)\\, dt$."
      },
      {
        "q": "Énoncer la formule de Taylor-Young en $a$.",
        "a": "Si $f$ est $\\mathcal{C}^n$ (ou $n$ fois dérivable en $a$) : $f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x - a)^k + o\\big((x - a)^n\\big)$."
      },
      {
        "q": "DL de $\\ln(1 + x)$ à l'ordre $3$ en $0$ ?",
        "a": "$\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} + o(x^3)$."
      },
      {
        "q": "DL de $(1 + x)^\\alpha$ à l'ordre $2$ en $0$ ?",
        "a": "$(1 + x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha - 1)}{2}x^2 + o(x^2)$."
      },
      {
        "q": "À quelle condition peut-on substituer $u(x)$ dans le DL en $0$ de $g$ ?",
        "a": "Il faut que $u(x) \\to 0$ quand $x \\to 0$ ; on tronque ensuite à l'ordre voulu."
      }
    ]
  },
  "L1-INT": {
    "title": "L1-INT : Intégrale de Riemann sur un segment et techniques de primitivation",
    "domain": "Analyse Réelle",
    "objectives": [
      "Définir l'intégrale d'une fonction en escalier, puis l'intégrabilité au sens de Riemann par encadrement.",
      "Connaître les propriétés de l'intégrale : linéarité, relation de Chasles, positivité, inégalité de la moyenne.",
      "Démontrer le théorème fondamental de l'analyse reliant intégrale et primitive.",
      "Calculer des intégrales par intégration par parties et changement de variable.",
      "Utiliser les sommes de Riemann pour calculer des limites de suites."
    ],
    "keyPoints": [
      {
        "title": "1. Construction de l'intégrale de Riemann",
        "content": "• Une **subdivision** de $[a ; b]$ est une suite $a = x_0 < x_1 < \\dots < x_n = b$. Une fonction $\\varphi$ est **en escalier** si elle est constante, égale à $c_k$, sur chaque $]x_k ; x_{k+1}[$ ; on pose $\\int_a^b \\varphi = \\sum_{k=0}^{n-1} c_k (x_{k+1} - x_k)$.\n• $f$ bornée sur $[a ; b]$ est **intégrable** si pour tout $\\varepsilon > 0$ il existe $\\varphi$, $\\psi$ en escalier avec $\\varphi \\le f \\le \\psi$ et $\\int_a^b (\\psi - \\varphi) \\le \\varepsilon$. L'intégrale de $f$ est alors l'unique réel compris entre tous les $\\int \\varphi$ et tous les $\\int \\psi$.\n• Sont intégrables : les fonctions continues, continues par morceaux et monotones sur $[a ; b]$.\n\n**Démonstration (cas monotone).** Soit $f$ croissante sur $[a ; b]$ et $x_k = a + k\\frac{b - a}{n}$. Sur $[x_k ; x_{k+1}[$, posons $\\varphi = f(x_k)$ et $\\psi = f(x_{k+1})$ ; alors $\\varphi \\le f \\le \\psi$ et\n$$\\int_a^b (\\psi - \\varphi) = \\frac{b - a}{n}\\sum_{k=0}^{n-1}\\big(f(x_{k+1}) - f(x_k)\\big) = \\frac{(b - a)\\big(f(b) - f(a)\\big)}{n},$$\nqui est inférieur à $\\varepsilon$ pour $n$ assez grand."
      },
      {
        "title": "2. Propriétés de l'intégrale",
        "content": "Pour $f$, $g$ intégrables sur $[a ; b]$ :\n• **Linéarité** : $\\int_a^b (\\lambda f + \\mu g) = \\lambda\\int_a^b f + \\mu\\int_a^b g$. **Chasles** : $\\int_a^c f = \\int_a^b f + \\int_b^c f$ (avec la convention $\\int_b^a = -\\int_a^b$).\n• **Positivité et croissance** (pour $a \\le b$) : $f \\ge 0 \\implies \\int_a^b f \\ge 0$ ; $f \\le g \\implies \\int_a^b f \\le \\int_a^b g$ ; $\\left|\\int_a^b f\\right| \\le \\int_a^b |f| \\le (b - a)\\sup_{[a ; b]}|f|$.\n• **Stricte positivité** : si $a < b$, $f$ **continue**, $f \\ge 0$ et $\\int_a^b f = 0$, alors $f = 0$ sur $[a ; b]$.\n• **Formule de la moyenne** : si $f$ est continue sur $[a ; b]$ ($a < b$), il existe $c \\in [a ; b]$ tel que $\\frac{1}{b - a}\\int_a^b f = f(c)$ (TVI appliqué entre $\\min f$ et $\\max f$)."
      },
      {
        "title": "3. Théorème fondamental de l'analyse",
        "content": "**Théorème** : soit $f$ continue sur un intervalle $I$ et $a \\in I$. La fonction $F(x) = \\int_a^x f(t)\\, dt$ est l'unique primitive de $f$ sur $I$ qui s'annule en $a$ ; en particulier $F$ est $\\mathcal{C}^1$ et $F' = f$. Pour toute primitive $G$ de $f$, $\\int_a^b f(t)\\, dt = G(b) - G(a)$.\n**Démonstration.**\n1. Soit $x \\in I$ et $h \\neq 0$ avec $x + h \\in I$. Par Chasles, $\\frac{F(x + h) - F(x)}{h} - f(x) = \\frac{1}{h}\\int_x^{x+h}\\big(f(t) - f(x)\\big)\\, dt$.\n2. Soit $\\varepsilon > 0$. Par continuité de $f$ en $x$, il existe $\\delta > 0$ tel que $|t - x| \\le \\delta \\implies |f(t) - f(x)| \\le \\varepsilon$.\n3. Pour $0 < |h| \\le \\delta$, l'inégalité de la moyenne donne $\\left|\\frac{1}{h}\\int_x^{x+h}\\big(f(t) - f(x)\\big)\\, dt\\right| \\le \\varepsilon$. Donc $F'(x) = f(x)$.\n4. Si $G$ est une autre primitive, $(G - F)' = 0$ sur l'intervalle $I$, donc $G - F$ est constante et $G(b) - G(a) = F(b) - F(a) = \\int_a^b f$."
      },
      {
        "title": "4. Intégration par parties et changement de variable",
        "content": "• **Intégration par parties** : si $u$ et $v$ sont de classe $\\mathcal{C}^1$ sur $[a ; b]$,\n$$\\int_a^b u'(t)v(t)\\, dt = \\big[u(t)v(t)\\big]_a^b - \\int_a^b u(t)v'(t)\\, dt.$$\n(Preuve : $(uv)' = u'v + uv'$ est continue, on intègre.) Exemple : $\\int_0^1 xe^x\\, dx = \\big[xe^x\\big]_0^1 - \\int_0^1 e^x\\, dx = e - (e - 1) = 1$.\n• **Changement de variable** : si $\\varphi : [\\alpha ; \\beta] \\to \\mathbb{R}$ est de classe $\\mathcal{C}^1$ et $f$ continue sur un intervalle contenant $\\varphi([\\alpha ; \\beta])$,\n$$\\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(x)\\, dx = \\int_\\alpha^\\beta f\\big(\\varphi(t)\\big)\\varphi'(t)\\, dt.$$\n(Preuve : si $F$ est une primitive de $f$, $(F \\circ \\varphi)' = (f \\circ \\varphi)\\varphi'$.) La bijectivité de $\\varphi$ n'est pas requise. Exemple : avec $x = \\sin t$, $\\int_0^1 \\sqrt{1 - x^2}\\, dx = \\int_0^{\\pi/2} \\cos^2 t\\, dt = \\frac{\\pi}{4}$."
      },
      {
        "title": "5. Sommes de Riemann",
        "content": "**Théorème** : si $f$ est continue sur $[a ; b]$,\n$$\\lim_{n \\to +\\infty} \\frac{b - a}{n}\\sum_{k=0}^{n-1} f\\left(a + k\\frac{b - a}{n}\\right) = \\lim_{n \\to +\\infty} \\frac{b - a}{n}\\sum_{k=1}^{n} f\\left(a + k\\frac{b - a}{n}\\right) = \\int_a^b f.$$\n**Démonstration (cas $f$ lipschitzienne de rapport $K$, par exemple $\\mathcal{C}^1$).** Posons $h = \\frac{b - a}{n}$ et $x_k = a + kh$. Pour $t \\in [x_k ; x_{k+1}]$, $|f(t) - f(x_k)| \\le K(t - x_k)$, donc\n$$\\left|\\int_{x_k}^{x_{k+1}} f - hf(x_k)\\right| \\le \\int_{x_k}^{x_{k+1}} K(t - x_k)\\, dt = \\frac{Kh^2}{2}.$$\nEn sommant les $n$ inégalités : $\\left|\\int_a^b f - h\\sum_{k=0}^{n-1} f(x_k)\\right| \\le \\frac{nKh^2}{2} = \\frac{K(b - a)^2}{2n} \\to 0$. Le cas continu général se traite de même grâce à l'uniforme continuité (théorème de Heine, chapitre L1-CNT)."
      },
      {
        "title": "6. Primitives usuelles",
        "content": "• $\\int x^\\alpha\\, dx = \\frac{x^{\\alpha+1}}{\\alpha + 1}$ ($\\alpha \\neq -1$) ; $\\int \\frac{dx}{x} = \\ln|x|$ sur $]-\\infty ; 0[$ ou sur $]0 ; +\\infty[$ ; $\\int \\frac{u'}{u} = \\ln|u|$.\n• $\\int \\frac{dx}{1 + x^2} = \\arctan x$ ; $\\int \\frac{dx}{\\sqrt{1 - x^2}} = \\arcsin x$ sur $]-1 ; 1[$ ; $\\int u'e^u = e^u$.\n• **Trinôme sans racine réelle** : on écrit la forme canonique. Exemple : $x^2 + 2x + 5 = (x + 1)^2 + 4$, d'où\n$$\\int \\frac{dx}{x^2 + 2x + 5} = \\frac{1}{2}\\arctan\\left(\\frac{x + 1}{2}\\right) + C.$$\n• **Fractions rationnelles** : décomposition en éléments simples (chapitre L1-CMP), puis primitivation de chaque terme."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une limite à l'aide d'une somme de Riemann",
        "example": "Calculer $\\displaystyle \\lim_{n \\to +\\infty} \\sum_{k=1}^n \\frac{n}{n^2 + k^2}$.",
        "steps": [
          "**Étape 1 (forme canonique)** : $\\dfrac{n}{n^2 + k^2} = \\dfrac{1}{n} \\cdot \\dfrac{1}{1 + (k/n)^2}$, donc la somme vaut $\\frac{1}{n}\\sum_{k=1}^n f\\left(\\frac{k}{n}\\right)$ avec $f(x) = \\frac{1}{1 + x^2}$.",
          "**Étape 2 (identification)** : c'est une somme de Riemann de $f$, continue sur $[0 ; 1]$, pour la subdivision régulière de pas $\\frac{1}{n}$.",
          "**Étape 3 (calcul)** : $\\int_0^1 \\frac{dx}{1 + x^2} = \\arctan 1 - \\arctan 0 = \\frac{\\pi}{4}$.",
          "**Conclusion** : la limite vaut $\\frac{\\pi}{4} \\approx 0{,}785$."
        ]
      },
      {
        "title": "Méthode : Intégration par parties",
        "example": "Calculer $I = \\displaystyle \\int_1^e x\\ln x\\, dx$.",
        "steps": [
          "**Étape 1 (choix)** : on dérive le logarithme : $u'(x) = x$, $u(x) = \\frac{x^2}{2}$ ; $v(x) = \\ln x$, $v'(x) = \\frac{1}{x}$. Les fonctions $u$ et $v$ sont $\\mathcal{C}^1$ sur $[1 ; e]$.",
          "**Étape 2 (formule)** : $I = \\left[\\frac{x^2}{2}\\ln x\\right]_1^e - \\int_1^e \\frac{x^2}{2} \\cdot \\frac{1}{x}\\, dx = \\frac{e^2}{2} - \\int_1^e \\frac{x}{2}\\, dx$.",
          "**Étape 3 (calcul)** : $\\int_1^e \\frac{x}{2}\\, dx = \\frac{e^2 - 1}{4}$.",
          "**Conclusion** : $I = \\frac{e^2}{2} - \\frac{e^2 - 1}{4} = \\frac{e^2 + 1}{4} \\approx 2{,}097$."
        ]
      },
      {
        "title": "Méthode : Changement de variable",
        "example": "Calculer $J = \\displaystyle \\int_0^1 \\frac{dx}{e^x + 1}$ en posant $t = e^x$.",
        "steps": [
          "**Étape 1 (changement)** : $x = \\varphi(t) = \\ln t$, de classe $\\mathcal{C}^1$ sur $[1 ; e]$, avec $\\varphi(1) = 0$, $\\varphi(e) = 1$ et $dx = \\frac{dt}{t}$.",
          "**Étape 2 (nouvelle intégrale)** : $J = \\int_1^e \\frac{1}{t + 1} \\cdot \\frac{dt}{t} = \\int_1^e \\left(\\frac{1}{t} - \\frac{1}{t + 1}\\right) dt$ (décomposition en éléments simples).",
          "**Étape 3 (primitive)** : $J = \\big[\\ln t - \\ln(t + 1)\\big]_1^e = 1 - \\ln(e + 1) + \\ln 2$.",
          "**Conclusion** : $J = 1 + \\ln\\frac{2}{e + 1} \\approx 0{,}380$."
        ]
      }
    ],
    "traps": [
      "Dans un changement de variable, on change à la fois l'élément différentiel ($dx = \\varphi'(t)\\, dt$) et les bornes.",
      "La positivité et la croissance de l'intégrale supposent les bornes dans l'ordre croissant ($a \\le b$).",
      "Le théorème fondamental exige la continuité sur tout le segment : écrire $\\int_{-1}^1 \\frac{dx}{x^2} = \\left[-\\frac{1}{x}\\right]_{-1}^1 = -2$ est faux (fonction positive non bornée sur $[-1 ; 1]$, non intégrable au sens de Riemann).",
      "$\\int_a^b fg \\neq \\int_a^b f \\times \\int_a^b g$ en général, et $\\int_a^b f = 0$ n'implique pas $f = 0$ sans hypothèse de signe : $\\int_0^{2\\pi} \\sin t\\, dt = 0$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la dérivée de $F(x) = \\int_a^x f(t)\\, dt$ pour $f$ continue ?",
        "a": "$F' = f$ : $F$ est la primitive de $f$ qui s'annule en $a$."
      },
      {
        "q": "Énoncer la formule d'intégration par parties.",
        "a": "Pour $u, v$ de classe $\\mathcal{C}^1$ sur $[a ; b]$ : $\\int_a^b u'v = [uv]_a^b - \\int_a^b uv'$."
      },
      {
        "q": "Énoncer la formule de changement de variable.",
        "a": "Pour $\\varphi$ de classe $\\mathcal{C}^1$ sur $[\\alpha ; \\beta]$ et $f$ continue : $\\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(x)\\, dx = \\int_\\alpha^\\beta f(\\varphi(t))\\varphi'(t)\\, dt$."
      },
      {
        "q": "Limite d'une somme de Riemann de $f$ continue sur $[0 ; 1]$ ?",
        "a": "$\\frac{1}{n}\\sum_{k=1}^n f\\left(\\frac{k}{n}\\right) \\to \\int_0^1 f(x)\\, dx$ (de même avec $k$ de $0$ à $n - 1$)."
      },
      {
        "q": "Si $f$ est continue, positive sur $[a ; b]$ ($a < b$) et d'intégrale nulle, que dire de $f$ ?",
        "a": "$f$ est identiquement nulle sur $[a ; b]$."
      },
      {
        "q": "Primitive de $\\frac{1}{x^2 + a^2}$ pour $a > 0$ ?",
        "a": "$\\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$."
      }
    ]
  },
  "L1-CMP": {
    "title": "L1-CMP : Nombres complexes, arithmétique des polynômes et fractions rationnelles",
    "domain": "Algèbre Fondamentale",
    "objectives": [
      "Maîtriser les formes algébrique, trigonométrique et exponentielle d'un nombre complexe, les formules d'Euler et de Moivre.",
      "Calculer les racines $n$-ièmes d'un nombre complexe, en particulier les racines de l'unité $\\mathbb{U}_n$.",
      "Démontrer l'existence et l'unicité de la division euclidienne dans $\\mathbb{K}[X]$ ; utiliser PGCD, théorèmes de Bézout et de Gauss.",
      "Relier racines, multiplicité et dérivées ; factoriser dans $\\mathbb{C}[X]$ et $\\mathbb{R}[X]$ grâce au théorème de d'Alembert-Gauss.",
      "Décomposer une fraction rationnelle en éléments simples dans $\\mathbb{C}(X)$ et $\\mathbb{R}(X)$."
    ],
    "keyPoints": [
      {
        "title": "1. Formes d'un nombre complexe, formules d'Euler et de Moivre",
        "content": "• $z = a + ib$ ($a = \\mathrm{Re}\\, z$, $b = \\mathrm{Im}\\, z$) ; $\\bar{z} = a - ib$, $|z| = \\sqrt{a^2 + b^2}$, $z\\bar{z} = |z|^2$, $|zz'| = |z|\\,|z'|$, $|z + z'| \\le |z| + |z'|$.\n• **Forme exponentielle** : tout $z \\neq 0$ s'écrit $z = re^{i\\theta}$ avec $r = |z| > 0$ et $\\theta$ un argument, défini modulo $2\\pi$ ; $e^{i\\theta}e^{i\\theta'} = e^{i(\\theta + \\theta')}$.\n• **Euler** : $\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$, $\\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$. **Moivre** : $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$ pour $n \\in \\mathbb{Z}$.\n• **Linéarisation** : $\\cos^3\\theta = \\frac{(e^{i\\theta} + e^{-i\\theta})^3}{8} = \\frac{\\cos(3\\theta) + 3\\cos\\theta}{4}$.\n• **Angle moitié** : $e^{ia} + e^{ib} = 2\\cos\\left(\\frac{a - b}{2}\\right)e^{i\\frac{a + b}{2}}$."
      },
      {
        "title": "2. Racines n-ièmes",
        "content": "**Théorème** : pour $n \\ge 1$, l'équation $z^n = 1$ a exactement $n$ solutions, $\\omega_k = e^{2ik\\pi/n}$ pour $k \\in \\{0, \\dots, n-1\\}$ ; elles forment le groupe $\\mathbb{U}_n$.\n**Démonstration.**\n1. $z = 0$ n'est pas solution ; écrivons $z = \\rho e^{i\\varphi}$ avec $\\rho > 0$. Alors $z^n = 1 \\iff \\rho^n e^{in\\varphi} = 1 \\iff \\rho^n = 1$ et $n\\varphi \\in 2\\pi\\mathbb{Z}$.\n2. Comme $\\rho > 0$, $\\rho = 1$ ; et $\\varphi = \\frac{2k\\pi}{n}$ avec $k \\in \\mathbb{Z}$.\n3. $e^{2ik\\pi/n} = e^{2ik'\\pi/n} \\iff k \\equiv k' \\ [n]$ : on obtient exactement $n$ valeurs distinctes, pour $k = 0, \\dots, n-1$.\n• **Somme** : pour $n \\ge 2$, $\\sum_{k=0}^{n-1}\\omega_k = \\sum_{k=0}^{n-1}\\omega_1^k = \\frac{1 - \\omega_1^n}{1 - \\omega_1} = 0$ car $\\omega_1 \\neq 1$.\n• **Cas général** : si $a = re^{i\\theta} \\neq 0$, les solutions de $z^n = a$ sont les $n$ nombres $r^{1/n}e^{i(\\theta + 2k\\pi)/n}$, $0 \\le k \\le n - 1$. Géométriquement, ce sont les sommets d'un polygone régulier à $n$ côtés."
      },
      {
        "title": "3. Polynômes et division euclidienne",
        "content": "• Pour $P, Q \\in \\mathbb{K}[X]$ : $\\deg(PQ) = \\deg P + \\deg Q$ et $\\deg(P + Q) \\le \\max(\\deg P, \\deg Q)$ (convention $\\deg 0 = -\\infty$).\n**Théorème** : pour $A, B \\in \\mathbb{K}[X]$ avec $B \\neq 0$, il existe un unique couple $(Q, R)$ tel que $A = BQ + R$ et $\\deg R < \\deg B$.\n**Démonstration.** Notons $m = \\deg B$ et $b$ le coefficient dominant de $B$.\n1. **Existence** (récurrence forte sur $\\deg A$). Si $\\deg A < m$, on prend $Q = 0$, $R = A$. Sinon, soient $n = \\deg A \\ge m$ et $a$ son coefficient dominant ; $A_1 = A - \\frac{a}{b}X^{n-m}B$ a un degré $< n$ (les termes de degré $n$ se compensent). Par hypothèse de récurrence, $A_1 = BQ_1 + R_1$ avec $\\deg R_1 < m$, d'où $A = B\\left(Q_1 + \\frac{a}{b}X^{n-m}\\right) + R_1$.\n2. **Unicité** : si $BQ + R = BQ' + R'$, alors $B(Q - Q') = R' - R$. Si $Q \\neq Q'$, le membre de gauche est de degré $\\ge m$, celui de droite de degré $< m$ : contradiction. Donc $Q = Q'$, puis $R = R'$.\n• **Exemple** : $X^3 + 2 = 1 \\cdot (X^3 - X) + (X + 2)$."
      },
      {
        "title": "4. Arithmétique dans K[X] : PGCD, Bézout, Gauss",
        "content": "• Le **PGCD** de $A$ et $B$ (non tous deux nuls) est le diviseur commun unitaire de degré maximal ; il s'obtient par l'**algorithme d'Euclide** (dernier reste non nul, rendu unitaire).\n• **Exemple** : $X^3 - 1 = X(X^2 - 1) + (X - 1)$ puis $X^2 - 1 = (X + 1)(X - 1) + 0$, donc $\\mathrm{PGCD}(X^3 - 1, X^2 - 1) = X - 1$.\n• **Bézout** : $A$ et $B$ sont premiers entre eux si et seulement s'il existe $U, V \\in \\mathbb{K}[X]$ tels que $AU + BV = 1$. Plus généralement, il existe $U$, $V$ avec $AU + BV = \\mathrm{PGCD}(A, B)$.\n• **Théorème de Gauss** : si $A$ divise $BC$ et si $A$ et $B$ sont premiers entre eux, alors $A$ divise $C$.\n**Démonstration.** Par Bézout, $AU + BV = 1$ ; en multipliant par $C$, $C = A(CU) + (BC)V$. Or $A$ divise $A(CU)$ et $A$ divise $BC$, donc $A$ divise $C$.\n• **Conséquence** : si $A$ et $B$ sont premiers entre eux et divisent $C$, alors $AB$ divise $C$."
      },
      {
        "title": "5. Racines, multiplicité, factorisation",
        "content": "• $a$ est **racine** de $P$ si et seulement si $(X - a)$ divise $P$ (reste de la division par $X - a$ : $P(a)$). Un polynôme non nul de degré $n$ a au plus $n$ racines.\n• $a$ est racine de **multiplicité** $m$ si $(X - a)^m$ divise $P$ mais pas $(X - a)^{m+1}$ ; cela équivaut à $P(a) = P'(a) = \\dots = P^{(m-1)}(a) = 0$ et $P^{(m)}(a) \\neq 0$.\n• **Théorème de d'Alembert-Gauss** : tout polynôme non constant de $\\mathbb{C}[X]$ admet au moins une racine complexe. Par récurrence, tout $P \\in \\mathbb{C}[X]$ de degré $n \\ge 1$ est **scindé** : $P = \\lambda\\prod_j (X - z_j)^{m_j}$ avec $\\sum m_j = n$.\n• **Dans $\\mathbb{R}[X]$** : si $P$ est à coefficients réels, $P(\\bar{z}) = \\overline{P(z)}$, donc les racines non réelles vont par paires conjuguées de même multiplicité. Les irréductibles de $\\mathbb{R}[X]$ sont les polynômes de degré $1$ et ceux de degré $2$ à discriminant strictement négatif.\n• **Exemple** : $X^4 + 1 = (X^2 + 1)^2 - 2X^2 = (X^2 - \\sqrt{2}X + 1)(X^2 + \\sqrt{2}X + 1)$ dans $\\mathbb{R}[X]$.\n• **Relations coefficients-racines** (degré $2$) : si $z_1$, $z_2$ sont les racines de $X^2 - sX + p$, alors $z_1 + z_2 = s$ et $z_1 z_2 = p$."
      },
      {
        "title": "6. Fractions rationnelles et décomposition en éléments simples",
        "content": "Soit $F = \\frac{N}{D}$ écrite sous **forme irréductible** ; les racines de $D$ sont les **pôles** de $F$.\n• **Partie entière** : le quotient $E$ de la division euclidienne de $N$ par $D$ ; $E = 0$ si $\\deg N < \\deg D$.\n• **Dans $\\mathbb{C}(X)$** : si $D = \\prod_i (X - a_i)^{m_i}$, alors $F = E + \\sum_i \\sum_{j=1}^{m_i} \\frac{\\lambda_{i,j}}{(X - a_i)^j}$, de manière unique.\n• **Dans $\\mathbb{R}(X)$** : aux pôles réels s'ajoutent, pour chaque facteur irréductible $(X^2 + pX + q)^k$ du dénominateur, des termes $\\frac{\\alpha_j X + \\beta_j}{(X^2 + pX + q)^j}$, $1 \\le j \\le k$.\n• **Pôle simple** : si $a$ est racine simple de $D$, le coefficient de $\\frac{1}{X - a}$ vaut $\\lambda = \\frac{N(a)}{D'(a)}$, ou encore la valeur en $a$ de $(X - a)F$.\n• **Pôle d'ordre $m$** : le coefficient de $\\frac{1}{(X - a)^m}$ est la valeur en $a$ de $(X - a)^m F$ ; les autres s'obtiennent par évaluation en des points particuliers, par parité ou par limite de $xF(x)$ en $+\\infty$.\n• **Exemple** : $\\frac{1}{X^2(X - 1)} = -\\frac{1}{X} - \\frac{1}{X^2} + \\frac{1}{X - 1}$ (coefficient de $\\frac{1}{X^2}$ : $-1$ ; de $\\frac{1}{X - 1}$ : $1$ ; la limite de $xF(x)$ en $+\\infty$, nulle, donne $-1$ pour $\\frac{1}{X}$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une équation du second degré à coefficients complexes",
        "example": "Résoudre dans $\\mathbb{C}$ l'équation $z^2 - (3 + 2i)z + 5 + i = 0$.",
        "steps": [
          "**Étape 1 (discriminant)** : $\\Delta = (3 + 2i)^2 - 4(5 + i) = (5 + 12i) - (20 + 4i) = -15 + 8i$.",
          "**Étape 2 (racine carrée de $\\Delta$)** : on cherche $\\delta = x + iy$ avec $\\delta^2 = \\Delta$ : $x^2 - y^2 = -15$, $x^2 + y^2 = |\\Delta| = \\sqrt{225 + 64} = 17$ et $2xy = 8$.",
          "**Étape 3 (résolution)** : $x^2 = 1$, $y^2 = 16$ et $xy > 0$, donc $\\delta = \\pm(1 + 4i)$. Contrôle : $(1 + 4i)^2 = 1 - 16 + 8i$.",
          "**Étape 4 (solutions)** : $z_1 = \\frac{3 + 2i + 1 + 4i}{2} = 2 + 3i$ et $z_2 = \\frac{3 + 2i - 1 - 4i}{2} = 1 - i$. Vérification : $z_1 + z_2 = 3 + 2i$ et $z_1 z_2 = 2 - 2i + 3i + 3 = 5 + i$."
        ]
      },
      {
        "title": "Méthode : Décomposer une fraction rationnelle en éléments simples",
        "example": "Décomposer dans $\\mathbb{R}(X)$ la fraction $F = \\dfrac{X^3 + 2}{X(X - 1)(X + 1)}$.",
        "steps": [
          "**Étape 1 (partie entière)** : $\\deg N = \\deg D = 3$ et $X^3 + 2 = 1 \\cdot (X^3 - X) + (X + 2)$, donc $E = 1$.",
          "**Étape 2 (forme)** : les pôles $0$, $1$, $-1$ sont simples : $F = 1 + \\frac{a}{X} + \\frac{b}{X - 1} + \\frac{c}{X + 1}$.",
          "**Étape 3 (coefficients)** : $a = \\frac{0 + 2}{(0 - 1)(0 + 1)} = -2$ ; $b = \\frac{1 + 2}{1 \\times 2} = \\frac{3}{2}$ ; $c = \\frac{-1 + 2}{(-1)(-2)} = \\frac{1}{2}$.",
          "**Étape 4 (contrôle)** : $xF(x) - x \\to a + b + c$ en $+\\infty$ ; or $F - 1 = \\frac{X + 2}{X^3 - X}$ donne $x(F(x) - 1) \\to 0$, et l'on a bien $-2 + \\frac{3}{2} + \\frac{1}{2} = 0$.",
          "**Conclusion** : $F = 1 - \\dfrac{2}{X} + \\dfrac{3}{2(X - 1)} + \\dfrac{1}{2(X + 1)}$."
        ]
      }
    ],
    "traps": [
      "Ne pas oublier la partie entière lorsque $\\deg N \\ge \\deg D$, ni de simplifier $F$ sous forme irréductible avant de lire les pôles.",
      "La notation $\\sqrt{z}$ est réservée aux réels positifs : un complexe non nul a deux racines carrées opposées, et $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ est faux en général ($\\sqrt{(-1)(-1)} \\neq i \\times i$).",
      "Pour un pôle d'ordre $m$, il faut les $m$ termes $\\frac{\\lambda_1}{X - a}, \\dots, \\frac{\\lambda_m}{(X - a)^m}$, pas seulement le dernier.",
      "Un polynôme réel sans racine réelle n'est pas forcément irréductible dans $\\mathbb{R}[X]$ : $X^4 + 1$ se factorise en deux trinômes.",
      "Le degré d'une somme peut chuter : $(X^2 + 1) + (-X^2) = 1$ ; on a seulement $\\deg(P + Q) \\le \\max(\\deg P, \\deg Q)$."
    ],
    "flashcards": [
      {
        "q": "Quelles sont les racines $n$-ièmes de l'unité ?",
        "a": "$\\omega_k = e^{2ik\\pi/n}$ pour $k \\in \\{0, 1, \\dots, n-1\\}$ ; leur somme est nulle si $n \\ge 2$."
      },
      {
        "q": "Énoncer le théorème de la division euclidienne dans $\\mathbb{K}[X]$.",
        "a": "Pour $B \\neq 0$, il existe un unique couple $(Q, R)$ tel que $A = BQ + R$ et $\\deg R < \\deg B$."
      },
      {
        "q": "Énoncer le théorème de Gauss pour les polynômes.",
        "a": "Si $A$ divise $BC$ et si $A$ est premier avec $B$, alors $A$ divise $C$."
      },
      {
        "q": "Caractériser une racine de multiplicité $m$ à l'aide des dérivées.",
        "a": "$P(a) = P'(a) = \\dots = P^{(m-1)}(a) = 0$ et $P^{(m)}(a) \\neq 0$."
      },
      {
        "q": "Que dit le théorème de d'Alembert-Gauss ?",
        "a": "Tout polynôme non constant de $\\mathbb{C}[X]$ admet une racine complexe ; par suite, il est scindé sur $\\mathbb{C}$."
      },
      {
        "q": "Coefficient associé à un pôle simple $a$ de $F = N/D$ ?",
        "a": "$\\frac{N(a)}{D'(a)}$, c'est-à-dire la valeur en $a$ de $(X - a)F$."
      }
    ]
  },
  "L1-CNT": {
    "title": "L1-CNT : Continuité, limites et dérivabilité des fonctions d'une variable réelle",
    "domain": "Analyse Réelle",
    "objectives": [
      "Maîtriser les définitions en $\\varepsilon$-$\\delta$ de la limite et de la continuité, et la caractérisation séquentielle.",
      "Démontrer le théorème des valeurs intermédiaires et utiliser le théorème de la bijection.",
      "Démontrer qu'une fonction continue sur un segment est bornée et atteint ses bornes.",
      "Définir la continuité uniforme et démontrer le théorème de Heine.",
      "Connaître la dérivabilité, les théorèmes de Rolle et des accroissements finis (démontrés au chapitre L1-TAY)."
    ],
    "keyPoints": [
      {
        "title": "1. Limites et caractérisation séquentielle",
        "content": "Soit $f : I \\to \\mathbb{R}$ et $x_0$ un point de $I$ ou une extrémité de $I$.\n• $f(x) \\to \\ell$ quand $x \\to x_0$ si $\\forall \\varepsilon > 0,\\ \\exists \\delta > 0,\\ \\forall x \\in I,\\ |x - x_0| \\le \\delta \\implies |f(x) - \\ell| \\le \\varepsilon$. La limite, si elle existe, est unique.\n• **Caractérisation séquentielle** : $f(x) \\to \\ell$ en $x_0$ si et seulement si, pour toute suite $(x_n)$ de $I$ tendant vers $x_0$, $f(x_n) \\to \\ell$.\n• **Usage** : pour montrer qu'une limite n'existe pas, on exhibe deux suites tendant vers $x_0$ dont les images ont des limites différentes.\n• **Opérations** : somme, produit, quotient (limite du dénominateur non nulle), composition ; théorème d'encadrement ; limite monotone (une fonction croissante sur $]a ; b[$ a une limite à gauche en $b$, finie si elle est majorée)."
      },
      {
        "title": "2. Continuité",
        "content": "• $f$ est **continue en $x_0 \\in I$** si $f(x) \\to f(x_0)$ quand $x \\to x_0$, soit : $\\forall \\varepsilon > 0,\\ \\exists \\delta > 0,\\ \\forall x \\in I,\\ |x - x_0| \\le \\delta \\implies |f(x) - f(x_0)| \\le \\varepsilon$.\n• De façon équivalente : pour toute suite $x_n \\to x_0$ dans $I$, $f(x_n) \\to f(x_0)$.\n• Sommes, produits, quotients (dénominateur non nul) et composées de fonctions continues sont continues ; les fonctions usuelles sont continues sur leur domaine.\n• **Prolongement par continuité** : si $f$ est définie sur $I \\setminus \\{x_0\\}$ et a une limite finie $\\ell$ en $x_0$, on la prolonge en posant $f(x_0) = \\ell$. Exemple : $\\frac{\\sin x}{x}$ se prolonge par $1$ en $0$.\n• **Exemple** : $x \\mapsto \\lfloor x \\rfloor$ est continue sur $\\mathbb{R} \\setminus \\mathbb{Z}$ et discontinue en tout entier."
      },
      {
        "title": "3. Théorème des valeurs intermédiaires",
        "content": "**Théorème** : si $f$ est continue sur $[a ; b]$ et si $k$ est compris entre $f(a)$ et $f(b)$, il existe $c \\in [a ; b]$ tel que $f(c) = k$.\n**Démonstration.** Quitte à remplacer $f$ par $-f$, supposons $f(a) \\le k \\le f(b)$.\n1. $A = \\{x \\in [a ; b] \\mid f(x) \\le k\\}$ contient $a$ et est majoré par $b$ : soit $c = \\sup A \\in [a ; b]$.\n2. Il existe une suite $(x_n)$ de $A$ tendant vers $c$ ; comme $f(x_n) \\le k$, la continuité donne $f(c) \\le k$.\n3. Si $c = b$, alors $k \\le f(b) = f(c)$. Si $c < b$, tout $x \\in\\, ]c ; b]$ est hors de $A$, donc $f(x) > k$ ; en faisant tendre $x$ vers $c$ par la droite, $f(c) \\ge k$.\n4. Dans les deux cas, $f(c) = k$.\n\n**Conséquences** : l'image d'un intervalle par une fonction continue est un intervalle. **Théorème de la bijection** : si $f$ est continue et strictement monotone sur un intervalle $I$, elle réalise une bijection de $I$ sur l'intervalle $f(I)$, et $f^{-1}$ est continue, de même monotonie."
      },
      {
        "title": "4. Fonctions continues sur un segment : bornes atteintes",
        "content": "**Théorème** : si $f$ est continue sur $[a ; b]$, alors $f$ est bornée et atteint ses bornes ; avec le TVI, $f([a ; b]) = [m ; M]$ où $m = \\min f$ et $M = \\max f$.\n**Démonstration.**\n1. **Bornée** : sinon, pour tout $n$ il existe $x_n \\in [a ; b]$ avec $|f(x_n)| > n$. Par Bolzano-Weierstrass, une suite extraite $x_{\\varphi(n)}$ converge vers $c$, et $c \\in [a ; b]$ car le segment est fermé. Par continuité, $f(x_{\\varphi(n)}) \\to f(c)$, alors que $|f(x_{\\varphi(n)})| > \\varphi(n) \\ge n$ : contradiction.\n2. **Borne atteinte** : soit $M = \\sup_{[a ; b]} f$. Pour tout $n \\ge 1$, il existe $x_n$ avec $M - \\frac{1}{n} < f(x_n) \\le M$. On extrait $x_{\\varphi(n)} \\to c \\in [a ; b]$, et $f(c) = \\lim f(x_{\\varphi(n)}) = M$. Même raisonnement pour la borne inférieure.\n\n**Hypothèses indispensables** : $x \\mapsto \\frac{1}{x}$ est continue sur $]0 ; 1]$ mais non bornée ; $x \\mapsto x$ sur $[0 ; 1[$ est bornée mais n'atteint pas sa borne supérieure."
      },
      {
        "title": "5. Continuité uniforme et théorème de Heine",
        "content": "• $f$ est **uniformément continue** sur $I$ si $\\forall \\varepsilon > 0,\\ \\exists \\delta > 0,\\ \\forall x, y \\in I,\\ |x - y| \\le \\delta \\implies |f(x) - f(y)| \\le \\varepsilon$ ($\\delta$ ne dépend pas du point).\n• Une fonction $K$-lipschitzienne est uniformément continue (prendre $\\delta = \\varepsilon / K$ si $K > 0$).\n• **Contre-exemple** : $x \\mapsto x^2$ n'est pas uniformément continue sur $\\mathbb{R}$ : avec $x_n = n + \\frac{1}{n}$ et $y_n = n$, $|x_n - y_n| \\to 0$ mais $x_n^2 - y_n^2 = 2 + \\frac{1}{n^2} \\ge 2$.\n\n**Théorème de Heine** : toute fonction continue sur un segment $[a ; b]$ y est uniformément continue.\n**Démonstration.**\n1. Par l'absurde : il existe $\\varepsilon > 0$ tel que, pour tout $n \\ge 1$, il existe $x_n, y_n \\in [a ; b]$ avec $|x_n - y_n| \\le \\frac{1}{n}$ et $|f(x_n) - f(y_n)| > \\varepsilon$.\n2. Par Bolzano-Weierstrass, une suite extraite $x_{\\varphi(n)}$ converge vers $c \\in [a ; b]$ ; comme $|x_{\\varphi(n)} - y_{\\varphi(n)}| \\le \\frac{1}{\\varphi(n)} \\to 0$, on a aussi $y_{\\varphi(n)} \\to c$.\n3. Par continuité en $c$, $f(x_{\\varphi(n)}) - f(y_{\\varphi(n)}) \\to f(c) - f(c) = 0$, ce qui contredit $|f(x_{\\varphi(n)}) - f(y_{\\varphi(n)})| > \\varepsilon$."
      },
      {
        "title": "6. Dérivabilité",
        "content": "• $f$ est **dérivable en $x_0$** si $\\frac{f(x) - f(x_0)}{x - x_0}$ a une limite finie $f'(x_0)$ quand $x \\to x_0$ ; de façon équivalente, $f(x) = f(x_0) + f'(x_0)(x - x_0) + o(x - x_0)$. Dérivable implique continue.\n• **Opérations** : $(fg)' = f'g + fg'$, $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$, $(g \\circ f)' = (g' \\circ f) \\cdot f'$, et $(f^{-1})'(y) = \\frac{1}{f'(f^{-1}(y))}$ si $f'(f^{-1}(y)) \\neq 0$.\n• **Extremum** : en un extremum local intérieur où $f$ est dérivable, $f'$ s'annule (la réciproque est fausse : $x^3$ en $0$).\n• **Rolle** : $f$ continue sur $[a ; b]$, dérivable sur $]a ; b[$, $f(a) = f(b)$ $\\implies \\exists c \\in\\, ]a ; b[,\\ f'(c) = 0$.\n• **Accroissements finis** : $f$ continue sur $[a ; b]$, dérivable sur $]a ; b[$ $\\implies \\exists c \\in\\, ]a ; b[,\\ f(b) - f(a) = f'(c)(b - a)$ ; si $|f'| \\le M$, alors $|f(b) - f(a)| \\le M|b - a|$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Prouver l'existence et l'unicité d'une solution",
        "example": "Montrer que l'équation $x^5 - 3x + 1 = 0$ admet exactement une solution dans $]0 ; 1[$.",
        "steps": [
          "**Étape 1 (existence, TVI)** : $f(x) = x^5 - 3x + 1$ est continue sur $[0 ; 1]$, $f(0) = 1 > 0$ et $f(1) = -1 < 0$. Comme $0$ est compris entre $f(1)$ et $f(0)$, il existe $c \\in [0 ; 1]$ avec $f(c) = 0$, et $c \\neq 0, 1$.",
          "**Étape 2 (variations)** : $f'(x) = 5x^4 - 3$ s'annule en $x_1 = (3/5)^{1/4} \\approx 0{,}880$ ; $f$ est strictement décroissante sur $[0 ; x_1]$ et strictement croissante sur $[x_1 ; 1]$.",
          "**Étape 3 (unicité)** : sur $[x_1 ; 1]$, $f(x) \\le f(1) = -1 < 0$ : pas de racine. Sur $[0 ; x_1]$, $f$ est strictement décroissante, donc injective : au plus une racine.",
          "**Conclusion** : l'équation a une unique solution dans $]0 ; 1[$, située dans $]0 ; x_1[$ (on trouve numériquement $c \\approx 0{,}335$)."
        ]
      },
      {
        "title": "Méthode : Montrer qu'une limite n'existe pas, ou prolonger par continuité",
        "example": "Montrer que $f(x) = \\cos\\frac{1}{x}$ n'a pas de limite en $0$, mais que $g(x) = x\\cos\\frac{1}{x}$ se prolonge par continuité en $0$.",
        "steps": [
          "**Étape 1 (deux suites)** : $x_n = \\frac{1}{2n\\pi} \\to 0$ et $y_n = \\frac{1}{(2n + 1)\\pi} \\to 0$ pour $n \\ge 1$.",
          "**Étape 2 (images)** : $f(x_n) = \\cos(2n\\pi) = 1$ et $f(y_n) = \\cos\\big((2n + 1)\\pi\\big) = -1$.",
          "**Étape 3 (conclusion pour $f$)** : si $f$ avait une limite $\\ell$ en $0$, la caractérisation séquentielle donnerait $\\ell = 1$ et $\\ell = -1$ : impossible.",
          "**Étape 4 (prolongement de $g$)** : $|g(x)| \\le |x|$, donc $g(x) \\to 0$ par encadrement ; en posant $g(0) = 0$, on obtient une fonction continue sur $\\mathbb{R}$."
        ]
      }
    ],
    "traps": [
      "Dérivable implique continue, mais la réciproque est fausse : $x \\mapsto |x|$ est continue et non dérivable en $0$.",
      "Le TVI exige un **intervalle** : $x \\mapsto \\frac{1}{x}$ prend les valeurs $-1$ et $1$ sur $[-1 ; 0[\\, \\cup\\, ]0 ; 1]$ sans jamais s'annuler. De plus, il donne l'existence, pas l'unicité.",
      "Le théorème des bornes atteintes exige un **segment** : $\\frac{1}{x}$ est continue mais non bornée sur $]0 ; 1]$.",
      "Une seule suite ne suffit pas à établir une limite : pour $\\sin\\frac{1}{x}$, la suite $x_n = \\frac{1}{n\\pi}$ donne $f(x_n) = 0$, alors que la limite en $0$ n'existe pas.",
      "Continue sur $I$ n'implique pas uniformément continue sur $I$ : $x^2$ sur $\\mathbb{R}$, ou $\\frac{1}{x}$ sur $]0 ; 1]$."
    ],
    "flashcards": [
      {
        "q": "Énoncer la caractérisation séquentielle de la continuité en $x_0$.",
        "a": "$f$ est continue en $x_0$ si et seulement si pour toute suite $(x_n)$ de $I$ tendant vers $x_0$, $f(x_n) \\to f(x_0)$."
      },
      {
        "q": "Énoncer le théorème des valeurs intermédiaires.",
        "a": "Si $f$ est continue sur $[a ; b]$, pour tout $k$ compris entre $f(a)$ et $f(b)$, il existe $c \\in [a ; b]$ tel que $f(c) = k$."
      },
      {
        "q": "Que dit le théorème des bornes atteintes ?",
        "a": "Une fonction continue sur un segment est bornée et atteint ses bornes : $f([a ; b]) = [m ; M]$."
      },
      {
        "q": "Définir la continuité uniforme sur $I$.",
        "a": "$\\forall \\varepsilon > 0,\\ \\exists \\delta > 0,\\ \\forall x, y \\in I,\\ |x - y| \\le \\delta \\implies |f(x) - f(y)| \\le \\varepsilon$."
      },
      {
        "q": "Énoncer le théorème de Heine.",
        "a": "Toute fonction continue sur un segment y est uniformément continue."
      },
      {
        "q": "Énoncer le théorème de la bijection.",
        "a": "Si $f$ est continue et strictement monotone sur un intervalle $I$, elle est bijective de $I$ sur l'intervalle $f(I)$ et $f^{-1}$ est continue et de même monotonie."
      }
    ]
  },
  "L1-GEO": {
    "title": "L1-GEO : Géométrie euclidienne plane, repères orthonormés et coniques",
    "domain": "Géométrie Fondamentale",
    "objectives": [
      "Maîtriser le produit scalaire canonique de $\\mathbb{R}^2$, la norme, l'orthogonalité et l'inégalité de Cauchy-Schwarz.",
      "Déterminer équations cartésiennes et paramétriques de droites et de cercles, et calculer des distances.",
      "Définir les coniques par foyer, directrice et excentricité $e$, et établir leurs équations réduites.",
      "Réduire une équation du second degré sans terme en $xy$ et en déduire la nature et les éléments de la conique."
    ],
    "keyPoints": [
      {
        "title": "1. Produit scalaire, norme, Cauchy-Schwarz",
        "content": "Pour $u = (x, y)$ et $v = (x', y')$ : $\\langle u, v \\rangle = xx' + yy'$ et $\\|u\\| = \\sqrt{x^2 + y^2}$.\n• Le produit scalaire est bilinéaire, symétrique et défini positif ($\\langle u, u \\rangle = 0 \\iff u = 0$). **Polarisation** : $\\langle u, v \\rangle = \\frac{1}{2}\\big(\\|u + v\\|^2 - \\|u\\|^2 - \\|v\\|^2\\big)$.\n• Si $u, v \\neq 0$ : $\\langle u, v \\rangle = \\|u\\|\\,\\|v\\|\\cos\\theta$, $\\theta$ étant l'angle entre $u$ et $v$ ; $u \\perp v \\iff \\langle u, v \\rangle = 0$. **Pythagore** : $u \\perp v \\iff \\|u + v\\|^2 = \\|u\\|^2 + \\|v\\|^2$.\n\n**Théorème (Cauchy-Schwarz)** : $|\\langle u, v \\rangle| \\le \\|u\\|\\,\\|v\\|$, avec égalité si et seulement si $u$ et $v$ sont colinéaires.\n**Démonstration.**\n1. Si $v = 0$, c'est immédiat. Sinon, pour $t \\in \\mathbb{R}$, $P(t) = \\|u + tv\\|^2 = \\|v\\|^2 t^2 + 2\\langle u, v \\rangle t + \\|u\\|^2 \\ge 0$.\n2. Ce trinôme de degré $2$ est de signe constant, donc son discriminant est négatif ou nul : $4\\langle u, v \\rangle^2 - 4\\|u\\|^2\\|v\\|^2 \\le 0$.\n3. Égalité $\\iff$ le discriminant est nul $\\iff$ $P$ a une racine $t_0$ $\\iff u + t_0 v = 0$, c'est-à-dire $u$ et $v$ colinéaires.\n**Conséquence** : l'inégalité triangulaire $\\|u + v\\| \\le \\|u\\| + \\|v\\|$."
      },
      {
        "title": "2. Droites et distance d'un point à une droite",
        "content": "• Une droite $\\mathcal{D}$ admet une équation $ax + by + c = 0$ avec $(a, b) \\neq (0, 0)$ ; $\\vec{n} = (a, b)$ est **normal** et $\\vec{u} = (-b, a)$ **directeur**. Représentation paramétrique : $M = M_0 + t\\vec{u}$, $t \\in \\mathbb{R}$.\n• Deux vecteurs $(x, y)$, $(x', y')$ sont colinéaires si et seulement si $\\det = xy' - x'y = 0$ ; $|xy' - x'y|$ est l'aire du parallélogramme qu'ils engendrent.\n\n**Théorème** : pour $A(x_A, y_A)$, $d(A, \\mathcal{D}) = \\dfrac{|ax_A + by_A + c|}{\\sqrt{a^2 + b^2}}$.\n**Démonstration.**\n1. Soit $H$ le projeté orthogonal de $A$ sur $\\mathcal{D}$. Pour $M \\in \\mathcal{D}$, Pythagore donne $AM^2 = AH^2 + HM^2 \\ge AH^2$ : la distance vaut $AH$.\n2. $\\overrightarrow{HA}$ est colinéaire à $\\vec{n}$, donc $|\\langle \\overrightarrow{HA}, \\vec{n} \\rangle| = AH\\,\\|\\vec{n}\\|$ (cas d'égalité de Cauchy-Schwarz).\n3. Avec $H = (x_H, y_H)$ et $ax_H + by_H = -c$ : $\\langle \\overrightarrow{HA}, \\vec{n} \\rangle = a(x_A - x_H) + b(y_A - y_H) = ax_A + by_A + c$. D'où la formule."
      },
      {
        "title": "3. Cercles",
        "content": "• Le cercle de centre $\\Omega(x_0, y_0)$ et de rayon $R > 0$ a pour équation $(x - x_0)^2 + (y - y_0)^2 = R^2$, et pour paramétrage $x = x_0 + R\\cos t$, $y = y_0 + R\\sin t$.\n• **Reconnaître un cercle** : $x^2 + y^2 + \\alpha x + \\beta y + \\gamma = 0$ s'écrit $\\left(x + \\frac{\\alpha}{2}\\right)^2 + \\left(y + \\frac{\\beta}{2}\\right)^2 = \\frac{\\alpha^2 + \\beta^2}{4} - \\gamma$ ; c'est un cercle si le second membre est strictement positif, un point s'il est nul, l'ensemble vide s'il est négatif.\n• **Cercle de diamètre $[AB]$** : $M$ appartient au cercle si et seulement si $\\langle \\overrightarrow{MA}, \\overrightarrow{MB} \\rangle = 0$.\n• **Droite et cercle** : avec $d = d(\\Omega, \\mathcal{D})$, la droite est sécante si $d < R$, tangente si $d = R$, extérieure si $d > R$. La tangente en $M_0$ est la droite passant par $M_0$ et orthogonale à $\\overrightarrow{\\Omega M_0}$."
      },
      {
        "title": "4. Coniques : définition par foyer et directrice",
        "content": "Soient $F$ un point, $\\mathcal{D}$ une droite ne passant pas par $F$ et $e > 0$. La **conique** de foyer $F$, directrice $\\mathcal{D}$ et excentricité $e$ est l'ensemble des points $M$ tels que $MF = e \\cdot d(M, \\mathcal{D})$.\n• $0 < e < 1$ : **ellipse** ; $e = 1$ : **parabole** ; $e > 1$ : **hyperbole**.\n• **Parabole** : avec $F\\left(\\frac{p}{2}, 0\\right)$ et $\\mathcal{D} : x = -\\frac{p}{2}$ ($p > 0$), $MF^2 = d(M, \\mathcal{D})^2$ s'écrit $\\left(x - \\frac{p}{2}\\right)^2 + y^2 = \\left(x + \\frac{p}{2}\\right)^2$, soit $y^2 = 2px$.\n\n**Démonstration de l'équation réduite de l'ellipse.** Soient $a > c > 0$, $e = \\frac{c}{a}$, $F(c, 0)$ et $\\mathcal{D} : x = \\frac{a^2}{c}$.\n1. $MF^2 = e^2 d(M, \\mathcal{D})^2 \\iff (x - c)^2 + y^2 = \\frac{c^2}{a^2}\\left(x - \\frac{a^2}{c}\\right)^2 = \\left(\\frac{cx}{a} - a\\right)^2$.\n2. En développant : $x^2 - 2cx + c^2 + y^2 = \\frac{c^2x^2}{a^2} - 2cx + a^2$, soit $x^2\\left(1 - \\frac{c^2}{a^2}\\right) + y^2 = a^2 - c^2$.\n3. Avec $b^2 = a^2 - c^2 > 0$, on obtient $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$. Le même calcul avec $a, c > 0$, $c > a$ et $b^2 = c^2 - a^2$ donne l'hyperbole $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$."
      },
      {
        "title": "5. Équations réduites et éléments caractéristiques",
        "content": "• **Ellipse** $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, $a > b > 0$ : $c^2 = a^2 - b^2$, foyers $(\\pm c, 0)$, directrices $x = \\pm\\frac{a^2}{c}$, sommets $(\\pm a, 0)$ et $(0, \\pm b)$, $e = \\frac{c}{a}$. **Définition bifocale** : $MF + MF' = 2a$. Paramétrage : $(a\\cos t, b\\sin t)$.\n• **Hyperbole** $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ : $c^2 = a^2 + b^2$, foyers $(\\pm c, 0)$, directrices $x = \\pm\\frac{a^2}{c}$, sommets $(\\pm a, 0)$, asymptotes $y = \\pm\\frac{b}{a}x$, $e = \\frac{c}{a} > 1$. **Définition bifocale** : $|MF - MF'| = 2a$. Paramétrage d'une branche : $(a\\cosh t, b\\sinh t)$.\n• **Parabole** $y^2 = 2px$ : foyer $\\left(\\frac{p}{2}, 0\\right)$, directrice $x = -\\frac{p}{2}$, sommet $O$, $e = 1$.\n• **Équation polaire** (origine au foyer) : $r = \\frac{p}{1 + e\\cos\\theta}$, où $p$ est le paramètre de la conique."
      },
      {
        "title": "6. Réduction d'une équation du second degré sans terme en xy",
        "content": "Pour $Ax^2 + Cy^2 + Dx + Ey + F = 0$ avec $(A, C) \\neq (0, 0)$, on complète les carrés pour se ramener à une équation réduite dans un repère translaté.\n• $AC > 0$ : ellipse (éventuellement cercle), un point ou l'ensemble vide.\n• $AC < 0$ : hyperbole ou réunion de deux droites sécantes.\n• $AC = 0$ : parabole, deux droites parallèles, une droite ou l'ensemble vide.\n• **Exemple** : $x^2 + 4y^2 - 2x + 8y + 1 = 0 \\iff (x - 1)^2 + 4(y + 1)^2 = 4 \\iff \\frac{(x - 1)^2}{4} + (y + 1)^2 = 1$ : ellipse de centre $(1, -1)$, $a = 2$, $b = 1$, $c = \\sqrt{3}$, foyers $(1 \\pm \\sqrt{3}, -1)$, $e = \\frac{\\sqrt{3}}{2}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer la nature et les éléments d'une conique",
        "example": "Identifier la conique d'équation $9x^2 + 25y^2 - 225 = 0$ et donner ses éléments.",
        "steps": [
          "**Étape 1 (forme réduite)** : on divise par $225$ : $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.",
          "**Étape 2 (nature)** : ellipse de demi-grand axe $a = 5$ (selon $Ox$) et de demi-petit axe $b = 3$.",
          "**Étape 3 (foyers, excentricité)** : $c^2 = a^2 - b^2 = 16$, donc $c = 4$ et $e = \\frac{4}{5} = 0{,}8$.",
          "**Conclusion** : foyers $(\\pm 4, 0)$, sommets $(\\pm 5, 0)$ et $(0, \\pm 3)$, directrices $x = \\pm\\frac{a^2}{c} = \\pm\\frac{25}{4}$. Contrôle bifocal : pour le sommet $(0, 3)$, $MF + MF' = 5 + 5 = 10 = 2a$."
        ]
      },
      {
        "title": "Méthode : Réduire une équation par complétion des carrés",
        "example": "Déterminer la nature de $\\mathcal{C} : x^2 - 4y^2 + 4x + 8y - 4 = 0$.",
        "steps": [
          "**Étape 1 (regroupement)** : $(x^2 + 4x) - 4(y^2 - 2y) - 4 = 0$.",
          "**Étape 2 (carrés)** : $(x + 2)^2 - 4 - 4\\big[(y - 1)^2 - 1\\big] - 4 = 0$, soit $(x + 2)^2 - 4(y - 1)^2 = 4$.",
          "**Étape 3 (forme réduite)** : dans le repère d'origine $\\Omega(-2, 1)$, $\\frac{X^2}{4} - Y^2 = 1$ avec $X = x + 2$, $Y = y - 1$ : hyperbole avec $a = 2$, $b = 1$.",
          "**Conclusion** : $c = \\sqrt{a^2 + b^2} = \\sqrt{5}$, foyers $(-2 \\pm \\sqrt{5}, 1)$, $e = \\frac{\\sqrt{5}}{2}$, asymptotes $y - 1 = \\pm\\frac{1}{2}(x + 2)$. Contrôle : le sommet $(0, 1)$ vérifie $0 - 4 + 0 + 8 - 4 = 0$."
        ]
      }
    ],
    "traps": [
      "Ellipse : $a^2 = b^2 + c^2$ ; hyperbole : $c^2 = a^2 + b^2$. Ne pas intervertir.",
      "Si $b > a$ dans $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, le grand axe est vertical : pour $\\frac{x^2}{9} + \\frac{y^2}{25} = 1$, les foyers sont $(0, \\pm 4)$.",
      "Une équation de la forme $x^2 + y^2 + \\alpha x + \\beta y + \\gamma = 0$ ne définit pas toujours un cercle : $x^2 + y^2 - 2x + 4y + 6 = 0$ s'écrit $(x - 1)^2 + (y + 2)^2 = -1$ (ensemble vide).",
      "Dans la formule de distance à une droite, ne pas oublier de diviser par $\\sqrt{a^2 + b^2}$ (sauf si $(a, b)$ est unitaire).",
      "Le cercle n'est pas une conique au sens foyer-directrice (on lui associe formellement $e = 0$, sans directrice) ; c'est un cas particulier d'ellipse avec $a = b$."
    ],
    "flashcards": [
      {
        "q": "Énoncer l'inégalité de Cauchy-Schwarz et son cas d'égalité.",
        "a": "$|\\langle u, v \\rangle| \\le \\|u\\|\\,\\|v\\|$, avec égalité si et seulement si $u$ et $v$ sont colinéaires."
      },
      {
        "q": "Distance du point $A(x_A, y_A)$ à la droite $ax + by + c = 0$ ?",
        "a": "$\\dfrac{|ax_A + by_A + c|}{\\sqrt{a^2 + b^2}}$."
      },
      {
        "q": "Selon l'excentricité $e$, quelle est la nature d'une conique ?",
        "a": "$0 < e < 1$ : ellipse ; $e = 1$ : parabole ; $e > 1$ : hyperbole."
      },
      {
        "q": "Foyer et directrice de la parabole $y^2 = 2px$ ?",
        "a": "Foyer $\\left(\\frac{p}{2}, 0\\right)$, directrice $x = -\\frac{p}{2}$."
      },
      {
        "q": "Asymptotes de l'hyperbole $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ ?",
        "a": "Les droites $y = \\frac{b}{a}x$ et $y = -\\frac{b}{a}x$."
      },
      {
        "q": "Définition bifocale de l'ellipse ?",
        "a": "Ensemble des points $M$ tels que $MF + MF' = 2a$, avec $2a > FF'$."
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
      "hint2": "Isole $x$ : $3x = y + 5$. L'antécédent obtenu est-il un réel pour tout $y \\in \\mathbb{R}$ ?",
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
      "hint1": "Chaque classe est déterminée par le reste de la division euclidienne par 5 : quels restes sont possibles ?",
      "hint2": "Deux entiers sont dans la même classe si et seulement s'ils ont le même reste ; compte les classes $\\bar{0}, \\bar{1}, \\dots$ distinctes.",
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
      "hint1": "Écris $z = re^{i\\theta}$ : l'équation $z^5 = 1$ impose $r^5 = 1$ et $5\\theta \\equiv 0 \\pmod{2\\pi}$.",
      "hint2": "On obtient $\\theta = \\frac{2k\\pi}{5}$ : pour quelles valeurs de $k$ obtient-on des racines deux à deux distinctes ?",
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
      "hint2": "Résous séparément $z^2 = 1$ et $z^2 = -1$ dans $\\mathbb{C}$.",
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
      "hint2": "$\\sum_{k=0}^{n-1} \\omega^k = \\frac{1 - \\omega^n}{1 - \\omega}$. Que vaut $\\omega^n$ ?",
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
      "hint2": "Calcule $\\det(A) = 6\\lambda - 3 \\times 2$, puis résous $\\det(A) = 0$.",
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
      "hint1": "Le coefficient $(i, j)$ de $AB$ est le produit de la ligne $i$ de $A$ par la colonne $j$ de $B$ : par exemple $(AB)_{11} = 1 \\times 0 + 2 \\times 1$.",
      "hint2": "Remarque : multiplier $A$ à droite par $B$ revient à échanger les deux colonnes de $A$.",
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
      "hint2": "Remplace $z$ dans la deuxième équation pour trouver $y$, puis remonte à la première équation pour trouver $x$.",
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
      "hint2": "Écarte $G$ (contient-il le vecteur nul ?), puis cherche pour $H$ et $K$ deux vecteurs dont la somme, ou un multiple, sort de l'ensemble.",
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
      "hint1": "Cherche une relation simple entre $u$, $v$ et $w$ : calcule par exemple $u + v$.",
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
      "hint2": "Première composante : $2(1) - 3(-2)$ ; seconde composante : $1 + 4(-2)$. Attention aux signes.",
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
      "hint1": "Dérive terme à terme par linéarité, sachant que $(X^2)' = 2X$ et $(X)' = 1$.",
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
      "hint2": "On obtient $x = -y$ et $z = y$ : écris $(x, y, z)$ en fonction de $y$ seul, puis applique le théorème du rang pour la surjectivité.",
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
      "hint1": "Résous $g(x, y) = (0, 0, 0)$ : que t'apprennent les deux premières composantes ?",
      "hint2": "Applique le théorème du rang : $\\text{rg}(g) = \\dim(\\mathbb{R}^2) - \\dim \\text{Ker}(g)$, puis compare à $\\dim(\\mathbb{R}^3) = 3$.",
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
      "hint2": "La matrice est $\\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\\\ 0 & 0 & 0 \\end{pmatrix}$. Que valent ses coefficients diagonaux ? Calcule $M^3$.",
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
      "id": "L1-REL-1a",
      "tier": 1,
      "type": "mcq",
      "title": "Borne supérieure et absence de maximum",
      "skill": "Déterminer la borne supérieure d'un ensemble de réels et vérifier l'existence du maximum",
      "statement": "Quelle est la borne supérieure dans $\\mathbb{R}$ de l'ensemble $A = \\left\\{ 1 - \\frac{1}{n} \\;\\middle|\\; n \\in \\mathbb{N}^* \\right\\}$, et $A$ admet-il un maximum ?",
      "options": [
        "$\\sup(A) = 1$ et $\\max(A)$ n'existe pas",
        "$\\sup(A) = 1$ et $\\max(A) = 1$",
        "$\\sup(A) = 0$ et $\\max(A) = 0$",
        "$\\sup(A) = +\\infty$"
      ],
      "correctIndex": 0,
      "answer": "$\\sup(A) = 1$ et $\\max(A)$ n'existe pas",
      "hint1": "Pour tout $n \\ge 1$, $1 - 1/n < 1$, donc 1 majore strictement $A$.",
      "hint2": "La suite converge vers 1, mais la valeur 1 n'est jamais atteinte pour un $n$ fini.",
      "solution": "1 est le plus petit des majorants de $A$, donc $\\sup(A) = 1$. Comme $1 \\notin A$ (l'équation $1 - 1/n = 1$ n'a pas de solution dans $\\mathbb{N}^*$), le plus grand élément $\\max(A)$ n'existe pas."
    },
    {
      "id": "L1-REL-1b",
      "tier": 1,
      "type": "mcq",
      "title": "Borne inférieure et minimum d'un intervalle",
      "skill": "Distinguer borne inférieure et minimum sur un intervalle semi-ouvert",
      "statement": "Soit l'intervalle $I = ]-2, 5]$. Quelles sont les bornes $\\inf(I)$, $\\sup(I)$ et les extrema $\\min(I)$, $\\max(I)$ ?",
      "options": [
        "$\\inf(I) = -2$ (pas de min), et $\\sup(I) = \\max(I) = 5$",
        "$\\inf(I) = \\min(I) = -2$, et $\\sup(I) = \\max(I) = 5$",
        "$\\inf(I) = -2$ (pas de min), et $\\sup(I) = 5$ (pas de max)",
        "$\\inf(I) = -1$ et $\\sup(I) = 4$"
      ],
      "correctIndex": 0,
      "answer": "$\\inf(I) = -2$ (pas de min), et $\\sup(I) = \\max(I) = 5$",
      "hint1": "Regarde si les bornes appartiennent à l'intervalle selon l'orientation des crochets.",
      "hint2": "Le crochet est ouvert en $-2$ (donc $-2 \\notin I$) et fermé en $5$ (donc $5 \\in I$).",
      "solution": "$-2$ est le plus grand minorant de $I$ : $\\inf(I) = -2$. Comme $-2 \\notin I$, $\\min(I)$ n'existe pas. En revanche, $5$ est un majorant et $5 \\in I$, donc $\\sup(I) = \\max(I) = 5$."
    },
    {
      "id": "L1-REL-1c",
      "tier": 1,
      "type": "mcq",
      "title": "Borne inférieure et absence de minimum",
      "skill": "Déterminer la borne inférieure d'une suite strictement positive tendant vers 0",
      "statement": "Soit la partie $A = \\left\\{ \\frac{1}{n} \\;\\middle|\\; n \\in \\mathbb{N}^* \\right\\}$. Quelles sont les bornes et extrema de $A$ ?",
      "options": [
        "$\\sup(A) = \\max(A) = 1$ et $\\inf(A) = 0$ (aucun minimum)",
        "$\\sup(A) = 1$ et $\\inf(A) = \\min(A) = 0$",
        "$\\sup(A) = +\\infty$ et $\\inf(A) = 0$",
        "$\\sup(A) = 1$ et $\\inf(A) = -\\infty$"
      ],
      "correctIndex": 0,
      "answer": "$\\sup(A) = \\max(A) = 1$ et $\\inf(A) = 0$ (aucun minimum)",
      "hint1": "Pour $n=1$, $1/1 = 1 \\in A$ et tous les autres termes sont plus petits.",
      "hint2": "Pour tout $n \\ge 1$, $1/n > 0$, donc 0 n'est jamais atteint.",
      "solution": "Pour tout $n \\ge 1$, $0 < 1/n \\le 1$. La valeur 1 est atteinte pour $n=1$, d'où $\\sup(A) = \\max(A) = 1$. La suite tend vers 0, d'où $\\inf(A) = 0$. Mais $0 \\notin A$, donc $A$ n'admet aucun minimum."
    },
    {
      "id": "L1-REL-1d",
      "tier": 1,
      "type": "mcq",
      "title": "Condition d'existence du maximum",
      "skill": "Comprendre le lien fondamental entre borne supérieure et plus grand élément",
      "statement": "Soit $A \\subset \\mathbb{R}$ une partie non vide et majorée. Sous quelle condition nécessaire et suffisante le plus grand élément $\\max(A)$ existe-t-il ?",
      "options": [
        "$\\sup(A) \\in A$",
        "$A$ est un intervalle fermé",
        "$A$ est un ensemble fini",
        "$\\sup(A) > 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\sup(A) \\in A$",
      "hint1": "Par définition, le maximum doit appartenir à l'ensemble et être supérieur ou égal à tous ses éléments.",
      "hint2": "La borne supérieure $\\sup(A)$ est le plus petit des majorants.",
      "solution": "Par définition, $M = \\max(A) \\iff (M \\in A \\text{ et } \\forall x \\in A, x \\le M)$. Comme $\\sup(A)$ est un majorant de $A$, si $\\sup(A) \\in A$, c'est un élément de $A$ qui majore $A$, donc c'est le maximum $\\max(A)$. La condition est $\\sup(A) \\in A$."
    },
    {
      "id": "L1-REL-2a",
      "tier": 2,
      "type": "mcq",
      "title": "Caractérisation en epsilon de la borne supérieure",
      "skill": "Formaliser et manipuler la définition en $\\varepsilon$ de $\\sup(A)$",
      "statement": "Soit $A \\subset \\mathbb{R}$ une partie non vide et majorée. Quelle est la caractérisation en $\\varepsilon$ exacte de $M = \\sup(A)$ ?",
      "options": [
        "$(\\forall x \\in A, x \\le M) \\quad \\text{et} \\quad (\\forall \\varepsilon > 0, \\exists x \\in A, M - \\varepsilon < x \\le M)$",
        "$(\\forall x \\in A, x < M) \\quad \\text{et} \\quad (\\forall \\varepsilon > 0, \\exists x \\in A, M - \\varepsilon < x < M)$",
        "$\\forall \\varepsilon > 0, \\forall x \\in A, M - \\varepsilon < x \\le M$",
        "$(\\forall x \\in A, x \\le M) \\quad \\text{et} \\quad (\\exists \\varepsilon > 0, \\exists x \\in A, M - \\varepsilon < x)$"
      ],
      "correctIndex": 0,
      "answer": "$(\\forall x \\in A, x \\le M) \\quad \\text{et} \\quad (\\forall \\varepsilon > 0, \\exists x \\in A, M - \\varepsilon < x \\le M)$",
      "hint1": "1. $M$ doit être un majorant de $A$.",
      "hint2": "2. Aucun réel strictement inférieur à $M$ ne peut être un majorant de $A$.",
      "solution": "$M = \\sup(A)$ est le plus petit des majorants : $M$ majore $A$ ($\\forall x \\in A, x \\le M$), et dès qu'on soustrait un réel arbitraire $\\varepsilon > 0$, $M - \\varepsilon$ n'est plus un majorant, ce qui assure l'existence d'un $x \\in A$ tel que $M - \\varepsilon < x$."
    },
    {
      "id": "L1-REL-2b",
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
      "id": "L1-REL-2c",
      "tier": 2,
      "type": "mcq",
      "title": "Propriétés algébriques : Borne supérieure de la somme A + B",
      "skill": "Appliquer la relation $\\sup(A + B) = \\sup(A) + \\sup(B)$",
      "statement": "Soient $A$ et $B$ deux parties non vides et majorées de $\\mathbb{R}$. Que vaut la borne supérieure de $A + B = \\{a + b \\mid a \\in A, b \\in B\\}$ ?",
      "options": [
        "$\\sup(A + B) = \\sup(A) + \\sup(B)$",
        "$\\sup(A + B) = \\max(\\sup A, \\sup B)$",
        "$\\sup(A + B) \\le \\sup(A) + \\sup(B)$ avec inégalité stricte possible",
        "$\\sup(A + B) = \\sup(A) \\times \\sup(B)$"
      ],
      "correctIndex": 0,
      "answer": "$\\sup(A + B) = \\sup(A) + \\sup(B)$",
      "hint1": "Pour tout $a \\in A$ et $b \\in B$, $a + b \\le \\sup(A) + \\sup(B)$.",
      "hint2": "Pour tout $\\varepsilon > 0$, approche $\\sup(A)$ à $\\varepsilon/2$ près et $\\sup(B)$ à $\\varepsilon/2$ près.",
      "solution": "$\\sup(A) + \\sup(B)$ est un majorant de $A + B$. De plus, pour tout $\\varepsilon > 0$, il existe $a \\in A$ et $b \\in B$ tels que $a > \\sup(A) - \\varepsilon/2$ et $b > \\sup(B) - \\varepsilon/2$, d'où $a + b > \\sup(A) + \\sup(B) - \\varepsilon$. Ainsi $\\sup(A + B) = \\sup(A) + \\sup(B)$."
    },
    {
      "id": "L1-REL-3a",
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
      "id": "L1-REL-3b",
      "tier": 3,
      "type": "mcq",
      "title": "Ensemble à deux indices : Bornes de { 1/n - 1/m }",
      "skill": "Calculer la borne supérieure et inférieure d'un ensemble indexé par deux entiers",
      "statement": "Soit la partie $A = \\left\\{ \\frac{1}{n} - \\frac{1}{m} \\;\\middle|\\; n, m \\in \\mathbb{N}^* \\right\\}$. Quelles sont les bornes et extrema de $A$ ?",
      "options": [
        "$\\sup(A) = 1$ (aucun maximum) et $\\inf(A) = -1$ (aucun minimum)",
        "$\\sup(A) = \\max(A) = 1$ et $\\inf(A) = \\min(A) = -1$",
        "$\\sup(A) = 0$ et $\\inf(A) = 0$",
        "$\\sup(A) = 1$ et $\\inf(A) = 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\sup(A) = 1$ (aucun maximum) et $\\inf(A) = -1$ (aucun minimum)",
      "hint1": "Pour maximiser la différence, fais $n=1$ et fais tendre $m \\to +\\infty$.",
      "hint2": "Vérifie si la valeur 1 peut être atteinte pour des entiers $n, m \\ge 1$.",
      "solution": "Pour tout $n, m \\ge 1$, $-1 \\le -1/m < 1/n - 1/m < 1/n \\le 1$. En fixant $n=1$ et en faisant tendre $m \\to +\\infty$, $1 - 1/m \\to 1$, donc $\\sup(A) = 1$. L'égalité $1/n - 1/m = 1$ exigerait $1/n > 1$, impossible, donc pas de max. De même pour $m=1, n \\to +\\infty$, $\\inf(A) = -1$ sans minimum."
    },
    {
      "id": "L1-REL-3c",
      "tier": 3,
      "type": "mcq",
      "title": "Densité des irrationnels dans R",
      "skill": "Prouver que l'ensemble des irrationnels est dense dans R",
      "statement": "Soient deux réels $x < y$. Comment prouve-t-on l'existence d'un nombre irrationnel dans l'intervalle $]x, y[$ ?",
      "options": [
        "En prenant un rationnel non nul $r \\in \\left]\\frac{x}{\\sqrt{2}}, \\frac{y}{\\sqrt{2}}\\right[$, puis $r\\sqrt{2} \\in ]x, y[$ est irrationnel",
        "En constatant que le milieu $(x + y)/2$ est toujours un irrationnel",
        "Parce que tout intervalle de réels est un ensemble fini",
        "Cette propriété n'est vraie que pour des intervalles de longueur $> 1$"
      ],
      "correctIndex": 0,
      "answer": "En prenant un rationnel non nul $r \\in \\left]\\frac{x}{\\sqrt{2}}, \\frac{y}{\\sqrt{2}}\\right[$, puis $r\\sqrt{2} \\in ]x, y[$ est irrationnel",
      "hint1": "Pense à multiplier un rationnel par un irrationnel comme $\\sqrt{2}$.",
      "hint2": "Si $r \\in \\mathbb{Q}^*$, alors $r\\sqrt{2} \\notin \\mathbb{Q}$.",
      "solution": "Par densité de $\\mathbb{Q}$, il existe $r \\in \\mathbb{Q}^*$ tel que $\\frac{x}{\\sqrt{2}} < r < \\frac{y}{\\sqrt{2}}$. En multipliant par $\\sqrt{2} > 0$, $x < r\\sqrt{2} < y$. Comme $r \\in \\mathbb{Q}^*$ et $\\sqrt{2} \\notin \\mathbb{Q}$, le produit $r\\sqrt{2}$ est irrationnel."
    },
    {
      "id": "L1-REL-4a",
      "tier": 4,
      "type": "mcq",
      "title": "Complétude de Dedekind : Q vs R",
      "skill": "Prouver la valeur d'une borne supérieure et l'absence de maximum dans Q",
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
    },
    {
      "id": "L1-REL-4b",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème des segments emboîtés de Cantor",
      "skill": "Démontrer l'existence d'un point d'intersection par les suites adjacentes et la complétude",
      "statement": "Soit $([a_n, b_n])_{n \\in \\mathbb{N}}$ une suite décroissante pour l'inclusion de segments fermés telle que $\\lim_{n \\to +\\infty} (b_n - a_n) = 0$. Que vaut l'intersection $\\bigcap_{n \\in \\mathbb{N}} [a_n, b_n]$ ?",
      "options": [
        "C'est un singleton $\\{\\ell\\}$ où $\\ell = \\sup(a_n) = \\inf(b_n)$",
        "C'est l'ensemble vide $\\emptyset$",
        "C'est le segment $[a_0, b_0]$",
        "C'est un intervalle ouvert $]\\ell - \\varepsilon, \\ell + \\varepsilon[$"
      ],
      "correctIndex": 0,
      "answer": "C'est un singleton $\\{\\ell\\}$ où $\\ell = \\sup(a_n) = \\inf(b_n)$",
      "hint1": "$(a_n)$ est croissante et majorée par $b_0$, $(b_n)$ est décroissante et minorée par $a_0$.",
      "hint2": "Comme $b_n - a_n \\to 0$, les deux suites sont adjacentes et convergent vers une même limite $\\ell$.",
      "solution": "Les suites $(a_n)$ et $(b_n)$ sont adjacentes : $(a_n)$ croît vers $\\ell = \\sup(a_n)$ et $(b_n)$ décroît vers $\\ell = \\inf(b_n)$. Pour tout $n$, $\\ell \\in [a_n, b_n]$, donc $\\ell \\in \\bigcap_n [a_n, b_n]$. De plus, si $x, y$ appartenaient à l'intersection, $|x - y| \\le b_n - a_n \\to 0$, donc $x = y = \\ell$. L'intersection est le singleton $\\{\\ell\\}$."
    },
    {
      "id": "L1-REL-4c",
      "tier": 4,
      "type": "mcq",
      "title": "Sous-groupes additifs de R : Discrets vs Denses",
      "skill": "Classer les sous-groupes de $(\\mathbb{R}, +)$ et caractériser la densité",
      "statement": "D'après le théorème de classification des sous-groupes additifs de $(\\mathbb{R}, +)$, quelle alternative est TOUJOURS vraie pour tout sous-groupe $G \\subset \\mathbb{R}$ ?",
      "options": [
        "Soit $G = a\\mathbb{Z}$ avec $a \\ge 0$ (discret), soit $G$ est dense dans $\\mathbb{R}$",
        "Soit $G$ est fini, soit $G = \\mathbb{R}$",
        "$G$ est obligatoirement un sous-espace vectoriel de $\\mathbb{R}$",
        "Tout sous-groupe infini de $\\mathbb{R}$ est égal à $\\mathbb{R}$"
      ],
      "correctIndex": 0,
      "answer": "Soit $G = a\\mathbb{Z}$ avec $a \\ge 0$ (discret), soit $G$ est dense dans $\\mathbb{R}$",
      "hint1": "On pose $a = \\inf(G \\cap \\mathbb{R}_+^*)$.",
      "hint2": "Si $a > 0$, montre que $a \\in G$ et que tout élément de $G$ est un multiple entier de $a$ ; si $a = 0$, que dire des multiples d'un $g \\in G$ très petit ?",
      "solution": "En posant $a = \\inf(G \\cap \\mathbb{R}_+^*)$ : si $a > 0$, alors $a \\in G$ et $G = a\\mathbb{Z}$ (sous-groupe monogène/discret). Si $a = 0$, pour tout $\\varepsilon > 0$, il existe $g \\in G$ tel que $0 < g < \\varepsilon$. Comme les multiples entiers de $g$ parcourent la droite avec un pas $< \\varepsilon$, $G$ est dense dans $\\mathbb{R}$."
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
      "hint2": "Attention : « compact » exigerait que toute suite admette une sous-suite convergente ; ici, seule la convergence des suites de Cauchy est demandée.",
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
      "hint2": "Isole $\\ell$ : $\\ell - \\frac{1}{2}\\ell = 3$.",
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
      "hint1": "Étudie la monotonie de $(v_n - u_n)$ pour montrer que $u_n \\le v_n$ pour tout $n$, d'où $u_0 \\le u_n \\le v_n \\le v_0$.",
      "hint2": "Une suite croissante majorée converge, une suite décroissante minorée aussi ; utilise ensuite $\\lim (v_n - u_n) = 0$ pour comparer les deux limites.",
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
      "hint2": "Teste les autres options avec $u_n = (-1)^n$ : converge-t-elle ? est-elle monotone à partir d'un certain rang ? que dire de $(u_{2n})$ ?",
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
      "hint1": "Interprète graphiquement : la courbe part et arrive à la même hauteur.",
      "hint2": "$f$ atteint un extremum en un point $c$ de $]a, b[$ (si elle n'est pas constante) : que vaut la pente de la tangente en ce point ?",
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
      "hint2": "$f$ est-elle continue sur $[0, 1]$ ? Quel théorème relie un changement de signe à l'existence d'une solution ?",
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
      "hint2": "Les dérivées du numérateur et du dénominateur sont $2e^{2x}$ et $3\\cos(3x)$ : évalue leur quotient en $x = 0$.",
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
      "hint1": "Le segment $[a, b]$ est fermé et borné (compact) : quelle propriété plus forte que la continuité en découle ?",
      "hint2": "Il s'agit de pouvoir choisir le même $\\eta$ pour tous les points : $\\forall \\varepsilon > 0, \\exists \\eta > 0, \\forall x, y \\in [a, b], |x-y| < \\eta \\implies |f(x)-f(y)| < \\varepsilon$.",
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
      "hint2": "Le numérateur vaut alors $-\\frac{x^2}{2} + o(x^2)$ : divise par $x^2$.",
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
      "hint2": "Ici $f(1) - (f(0) + f'(0)) = e - 2$ : calcule $f''(t)$ et remplace dans la formule du reste.",
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
      "hint1": "Étudie le signe de $f(x) - (x + 1)$ quand $x \\to +\\infty$.",
      "hint2": "$f(x) - (x + 1) \\sim -\\frac{1}{2x}$ : quel est le signe de cet équivalent pour $x > 0$ ?",
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
      "hint2": "Une primitive de $x^2$ est $\\frac{x^3}{3}$.",
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
      "hint2": "On obtient $\\left[\\frac{x^2 \\ln x}{2}\\right]_1^e - \\int_1^e \\frac{x}{2}\\,dx$ : calcule chacun des deux termes.",
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
      "hint2": "Les bornes deviennent $\\sin(0) = 0$ et $\\sin(\\pi/2) = 1$ : l'intégrale devient $\\int_0^1 u^3\\,du$.",
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
      "hint1": "Si $G$ est une primitive de $t \\mapsto e^{-t^2}$, alors $F(x) = G(x^2) - G(0)$ : dérive cette composée avec $(G \\circ u)' = u' \\times (G' \\circ u)$.",
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
      "hint2": "Identifie $a$ et $b$ dans $3x - 4y + 7 = 0$, en faisant attention au signe de $b$.",
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
      "hint2": "Regroupe les constantes pour obtenir $(x - 2)^2 + (y + 3)^2 = R^2$, puis lis le centre et calcule $R$.",
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
      "hint2": "Selon que $e < 1$, $e = 1$ ou $e > 1$, on obtient une ellipse, une parabole ou une hyperbole : dans quel cas se trouve $e = 0{,}75$ ?",
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
      "id": "L1-MAT-fiche_td",
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
      "id": "L1-CMP-fiche_td",
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
      "id": "L1-REL-fiche_td",
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

