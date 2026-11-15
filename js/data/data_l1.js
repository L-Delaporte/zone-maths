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
      "Manipuler les opérations ensemblistes (inclusion, réunion, intersection, complémentaire, produit cartésien) et les lois de De Morgan.",
      "Définir rigoureusement application, injection, surjection, bijection, image directe et image réciproque.",
      "Définir une relation d'équivalence, ses classes, l'ensemble quotient, et une relation d'ordre (majorants, minorants, bornes supérieure et inférieure).",
      "Dénombrer des ensembles finis : cardinal d'une réunion, d'un produit, de $\\mathcal{P}(E)$, arrangements et combinaisons $\\binom{n}{p}$."
    ],
    "keyPoints": [
      {
        "title": "1. Connecteurs, quantificateurs et négation",
        "content": "• **Implication** : $P \\implies Q$ est fausse uniquement lorsque $P$ est vraie et $Q$ fausse ; elle équivaut à $(\\neg P) \\text{ ou } Q$.\n• **Contraposée** : $P \\implies Q$ équivaut à $\\neg Q \\implies \\neg P$. La **réciproque** $Q \\implies P$ n'a, en général, pas la même valeur de vérité.\n• **Négation** (**lois de De Morgan** pour les connecteurs) : $\\neg(P \\text{ et } Q) \\iff (\\neg P) \\text{ ou } (\\neg Q)$ et $\\neg(P \\text{ ou } Q) \\iff (\\neg P) \\text{ et } (\\neg Q)$ ; de plus $\\neg(P \\implies Q) \\iff P \\text{ et } \\neg Q$.\n• **Négation des quantificateurs** : on échange $\\forall$ et $\\exists$ et on nie la propriété finale :\n$$\\neg(\\forall x \\in E,\\ P(x)) \\iff \\exists x \\in E,\\ \\neg P(x) \\qquad \\neg(\\exists x \\in E,\\ P(x)) \\iff \\forall x \\in E,\\ \\neg P(x)$$\n• **Ordre des quantificateurs** : « $\\forall x \\in \\mathbb{R},\\ \\exists y \\in \\mathbb{R},\\ y > x$ » est vraie (prendre $y = x + 1$), tandis que « $\\exists y \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ y > x$ » est fausse (aucun réel ne majore $\\mathbb{R}$)."
      },
      {
        "title": "2. Modes de raisonnement et principe de récurrence",
        "content": "• **Absurde** : on suppose $\\neg P$ et on aboutit à une contradiction. **Disjonction des cas** : on traite séparément des cas qui recouvrent toutes les situations. **Analyse-synthèse** : on détermine les solutions possibles (analyse), puis on vérifie qu'elles conviennent (synthèse).\n• **Récurrence simple** : si $P(n_0)$ est vraie et si $\\forall n \\ge n_0,\\ P(n) \\implies P(n+1)$, alors $P(n)$ est vraie pour tout $n \\ge n_0$.\n• **Récurrence forte** : si $P(n_0)$ est vraie et si, pour tout $n \\ge n_0$, $\\big(P(n_0), \\dots, P(n)\\big) \\implies P(n+1)$, alors $P(n)$ est vraie pour tout $n \\ge n_0$. Exemple : tout entier $n \\ge 2$ admet un diviseur premier.\n\n**Démonstration du principe de récurrence** (à partir de la propriété : toute partie non vide de $\\mathbb{N}$ admet un plus petit élément).\n1. Posons $A = \\{n \\ge n_0 \\mid P(n) \\text{ est fausse}\\}$ et supposons, par l'absurde, $A \\neq \\emptyset$. Soit $m = \\min A$.\n2. Comme $P(n_0)$ est vraie, $m \\neq n_0$, donc $m - 1 \\ge n_0$.\n3. Par minimalité de $m$, $m - 1 \\notin A$ : $P(m-1)$ est vraie.\n4. L'hérédité appliquée à $n = m - 1$ donne $P(m)$ vraie, ce qui contredit $m \\in A$. Donc $A = \\emptyset$.\n\n**Pour s'entraîner** : les exercices de raisonnement (récurrence, absurde, contraposée) sont rassemblés dans le chapitre L1-PRF, « Démonstrations fondamentales de L1 »."
      },
      {
        "title": "3. Ensembles : inclusion, opérations et lois de De Morgan",
        "content": "Soient $A$, $B$, $C$ des parties d'un ensemble $E$. Chaque opération traduit un connecteur logique de la section 1.\n• **Inclusion** : $A \\subset B \\iff (\\forall x \\in E,\\ x \\in A \\implies x \\in B)$. **Égalité** : $A = B \\iff (A \\subset B \\text{ et } B \\subset A)$ (double inclusion). On note $\\mathcal{P}(E)$ l'ensemble des parties de $E$.\n• **Réunion et intersection** : $A \\cup B = \\{x \\in E \\mid x \\in A \\text{ ou } x \\in B\\}$, $A \\cap B = \\{x \\in E \\mid x \\in A \\text{ et } x \\in B\\}$. Ces opérations sont distributives l'une sur l'autre : $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$ et $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$.\n• **Complémentaire** dans $E$ : $\\overline{A} = E \\setminus A = \\{x \\in E \\mid x \\notin A\\}$ ; on a $\\overline{\\overline{A}} = A$ et $A \\setminus B = A \\cap \\overline{B}$.\n• **Produit cartésien** : $E \\times F = \\{(x, y) \\mid x \\in E,\\ y \\in F\\}$, ensemble des couples.\n\n**Théorème (lois de De Morgan)** : $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$ et $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$.\n**Démonstration.** Pour $x \\in E$ : $x \\in \\overline{A \\cup B} \\iff \\neg(x \\in A \\text{ ou } x \\in B) \\iff x \\notin A \\text{ et } x \\notin B \\iff x \\in \\overline{A} \\cap \\overline{B}$, par la loi de De Morgan sur les connecteurs. La seconde égalité se démontre de même.\n• **Exemple** : dans $E = \\{1, \\dots, 6\\}$, avec $A = \\{1, 2, 3\\}$ et $B = \\{3, 4\\}$, $A \\cup B = \\{1, 2, 3, 4\\}$, donc $\\overline{A \\cup B} = \\{5, 6\\}$, et l'on retrouve $\\overline{A} \\cap \\overline{B} = \\{4, 5, 6\\} \\cap \\{1, 2, 5, 6\\} = \\{5, 6\\}$."
      },
      {
        "title": "4. Applications : injectivité, surjectivité, bijectivité",
        "content": "Soit $f : E \\to F$ une application.\n• **$f$ injective** : $\\forall x, x' \\in E,\\ f(x) = f(x') \\implies x = x'$ (tout élément de $F$ a au plus un antécédent).\n• **$f$ surjective** : $\\forall y \\in F,\\ \\exists x \\in E,\\ y = f(x)$ (tout élément de $F$ a au moins un antécédent).\n• **$f$ bijective** : injective et surjective. Il existe alors une unique application $f^{-1} : F \\to E$ telle que $f^{-1} \\circ f = \\mathrm{Id}_E$ et $f \\circ f^{-1} = \\mathrm{Id}_F$.\n• **Images** : pour $A \\subset E$, $f(A) = \\{f(x) \\mid x \\in A\\}$ ; pour $B \\subset F$, $f^{-1}(B) = \\{x \\in E \\mid f(x) \\in B\\}$ (défini même si $f$ n'est pas bijective).\n• **Composition** : si $g \\circ f$ est injective, alors $f$ est injective ; si $g \\circ f$ est surjective, alors $g$ est surjective.\n\n**Démonstration.** Si $f(x) = f(x')$, alors $g(f(x)) = g(f(x'))$, donc $x = x'$ par injectivité de $g \\circ f$. Si $z$ est dans l'ensemble d'arrivée de $g$, il existe $x$ tel que $z = g(f(x))$ : $z$ a l'antécédent $f(x)$ par $g$."
      },
      {
        "title": "5. Relations d'équivalence, classes et ensemble quotient",
        "content": "Une relation $\\sim$ sur $E$ est une **relation d'équivalence** si elle est **réflexive** ($x \\sim x$), **symétrique** ($x \\sim y \\implies y \\sim x$) et **transitive** ($x \\sim y$ et $y \\sim z \\implies x \\sim z$).\n• **Classe** de $x$ : $\\bar{x} = \\{y \\in E \\mid y \\sim x\\}$. **Ensemble quotient** : $E/\\!\\sim$, ensemble des classes.\n• **Exemple** : la congruence modulo $n$ sur $\\mathbb{Z}$ ($a \\equiv b \\ [n] \\iff n \\mid b - a$) a $n$ classes $\\bar{0}, \\dots, \\overline{n-1}$ ; le quotient est noté $\\mathbb{Z}/n\\mathbb{Z}$.\n\n**Théorème** : les classes d'équivalence forment une partition de $E$.\n**Démonstration.**\n1. Chaque classe est non vide car $x \\in \\bar{x}$ (réflexivité), et la réunion des classes est $E$.\n2. Supposons $\\bar{x} \\cap \\bar{y} \\neq \\emptyset$ et soit $z$ dans l'intersection : $z \\sim x$ et $z \\sim y$, donc $x \\sim y$ (symétrie puis transitivité).\n3. Si $t \\in \\bar{x}$, alors $t \\sim x$ et $x \\sim y$, donc $t \\sim y$ : $\\bar{x} \\subset \\bar{y}$. Par symétrie des rôles, $\\bar{x} = \\bar{y}$. Deux classes sont donc disjointes ou égales."
      },
      {
        "title": "6. Relations d'ordre, majorants et bornes",
        "content": "Une relation $\\preceq$ sur $E$ est une **relation d'ordre** si elle est réflexive, **antisymétrique** ($x \\preceq y$ et $y \\preceq x \\implies x = y$) et transitive.\n• L'ordre est **total** si deux éléments sont toujours comparables, **partiel** sinon. Exemples d'ordres partiels : l'inclusion sur $\\mathcal{P}(E)$ (si $E$ a au moins deux éléments), la divisibilité sur $\\mathbb{N}^{\\ast}$ ($2$ et $3$ ne sont pas comparables).\n• Pour $A \\subset E$ : $M$ est un **majorant** de $A$ si $\\forall a \\in A,\\ a \\preceq M$ ; c'est le **plus grand élément** de $A$ si de plus $M \\in A$ (il est alors unique).\n• La **borne supérieure** de $A$, si elle existe, est le plus petit des majorants de $A$ ; elle n'appartient pas nécessairement à $A$.\n• De même, $m$ est un **minorant** de $A$ si $\\forall a \\in A,\\ m \\preceq a$ ; c'est le **plus petit élément** de $A$ si de plus $m \\in A$. La **borne inférieure** de $A$, si elle existe, est le plus grand des minorants de $A$.\n• **Exemples** : pour la divisibilité sur $\\mathbb{N}^{\\ast}$, les minorants de $\\{a, b\\}$ sont les diviseurs communs de $a$ et $b$, donc ceux de $\\operatorname{pgcd}(a, b)$ (PGCD vu au lycée, repris au chapitre L1-CMP, section 7) : la borne inférieure de $\\{a, b\\}$ est $\\operatorname{pgcd}(a, b)$, et de même sa borne supérieure est $\\operatorname{ppcm}(a, b)$. Pour l'inclusion sur $\\mathcal{P}(E)$, la borne inférieure de $\\{A, B\\}$ est $A \\cap B$ et sa borne supérieure $A \\cup B$."
      },
      {
        "title": "7. Ensembles finis et dénombrement",
        "content": "Soient $E$, $F$ finis, $|E| = p$, $|F| = n$.\n• **Réunion** : $|A \\cup B| = |A| + |B| - |A \\cap B|$. **Produit** : $|E \\times F| = pn$. **Applications** : $|F^E| = n^p$.\n• **Injections** de $E$ dans $F$ ($p \\le n$) : $n(n-1)\\cdots(n-p+1) = \\dfrac{n!}{(n-p)!}$ ; c'est aussi le nombre d'**arrangements** de $p$ éléments parmi $n$ ($p$-uplets d'éléments distincts de $F$), noté $A_n^p$ ; **permutations** de $E$ : $p!$.\n• **Parties à $p$ éléments** d'un ensemble à $n$ éléments : $\\binom{n}{p} = \\dfrac{n!}{p!\\,(n-p)!}$, avec $\\binom{n}{p} = \\binom{n}{n-p}$ et la formule de Pascal $\\binom{n}{p} + \\binom{n}{p+1} = \\binom{n+1}{p+1}$.\n• **Binôme** : $(a+b)^n = \\sum_{k=0}^n \\binom{n}{k} a^k b^{n-k}$ pour des réels ou des complexes $a$ et $b$ ; la preuve, par récurrence avec la formule de Pascal, n'utilise que $ab = ba$, donc la formule vaut aussi pour deux matrices carrées qui commutent (chapitre L1-MAT).\n• Si $|E| = |F|$ est fini, pour $f : E \\to F$ : $f$ injective $\\iff$ $f$ surjective $\\iff$ $f$ bijective.\n\n**Théorème** : $|\\mathcal{P}(E)| = 2^p$.\n**Démonstration.** L'application $\\Phi : \\mathcal{P}(E) \\to \\{0, 1\\}^E$ qui à $A$ associe sa fonction indicatrice $\\mathbf{1}_A$ est bijective : sa réciproque associe à $g : E \\to \\{0,1\\}$ la partie $g^{-1}(\\{1\\})$. Donc $|\\mathcal{P}(E)| = |\\{0,1\\}^E| = 2^p$. (Variante : $\\sum_{k=0}^p \\binom{p}{k} = (1+1)^p$.)"
      },
      {
        "title": "8. Pour aller plus loin : construction de N, Z et Q",
        "content": "• **Entiers naturels** : on admet l'existence d'un ensemble $\\mathbb{N}$ muni d'un élément $0$ et d'une application **successeur** $s : \\mathbb{N} \\to \\mathbb{N}$ injective, avec $0 \\notin s(\\mathbb{N})$, vérifiant l'**axiome de récurrence** : toute partie $A \\subset \\mathbb{N}$ qui contient $0$ et qui est stable par $s$ est égale à $\\mathbb{N}$ (axiomes de Peano). L'addition et la multiplication se définissent par récurrence ($n + 0 = n$ et $n + s(m) = s(n + m)$ ; $n \\times 0 = 0$ et $n \\times s(m) = n \\times m + n$), et le principe de récurrence de la section 2 découle de l'axiome.\n• **Construction de $\\mathbb{Z}$** : on représente l'entier « $a - b$ » par le couple $(a, b) \\in \\mathbb{N}^2$. On pose $(a, b) \\sim (a', b') \\iff a + b' = a' + b$ : c'est une relation d'équivalence sur $\\mathbb{N}^2$, et $\\mathbb{Z} = \\mathbb{N}^2/\\!\\sim$. Les opérations $\\overline{(a, b)} + \\overline{(c, d)} = \\overline{(a + c, b + d)}$ et $\\overline{(a, b)} \\times \\overline{(c, d)} = \\overline{(ac + bd, ad + bc)}$ ne dépendent pas des représentants choisis. On identifie $n \\in \\mathbb{N}$ à $\\overline{(n, 0)}$, et $-n$ désigne $\\overline{(0, n)}$.\n• **Construction de $\\mathbb{Q}$** : on représente « $\\frac{p}{q}$ » par le couple $(p, q) \\in \\mathbb{Z} \\times \\mathbb{Z}^*$ et l'on pose $(p, q) \\sim (p', q') \\iff pq' = p'q$. $\\mathbb{Q}$ est l'ensemble quotient, muni de $\\frac{p}{q} + \\frac{p'}{q'} = \\frac{pq' + p'q}{qq'}$ et $\\frac{p}{q} \\times \\frac{p'}{q'} = \\frac{pp'}{qq'}$ ; on identifie $n \\in \\mathbb{Z}$ à la classe de $(n, 1)$.\n\n**Vérification** (transitivité dans la construction de $\\mathbb{Q}$) : si $pq' = p'q$ et $p'q'' = p''q'$, alors $pq'q'' = p'qq'' = p''qq'$, donc $q'(pq'' - p''q) = 0$ ; comme $q' \\neq 0$ et qu'un produit nul d'entiers a un facteur nul, $pq'' = p''q$. La réflexivité et la symétrie sont immédiates.\n• **Et $\\mathbb{R}$ ?** $\\mathbb{Q}$ ne vérifie pas la propriété de la borne supérieure (chapitre L1-REL, section 3). La construction de $\\mathbb{R}$ (par les coupures de Dedekind ou par les suites de Cauchy de rationnels) dépasse le cadre de ce cours : on admet l'existence d'un corps totalement ordonné $\\mathbb{R}$ contenant $\\mathbb{Q}$ et vérifiant la propriété de la borne supérieure."
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
        "q": "Énoncer les lois de De Morgan pour deux parties $A$ et $B$ d'un ensemble $E$.",
        "a": "$\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$ et $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$, où $\\overline{X}$ désigne le complémentaire de $X$ dans $E$."
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
        "content": "• **Produit** : pour $A \\in \\mathcal{M}_{n,p}(\\mathbb{K})$ et $B \\in \\mathcal{M}_{p,q}(\\mathbb{K})$, $AB \\in \\mathcal{M}_{n,q}(\\mathbb{K})$ et $(AB)_{ij} = \\sum_{k=1}^p a_{ik} b_{kj}$. Le produit est associatif, distributif sur l'addition, mais **non commutatif** pour $n \\ge 2$.\n• $\\mathcal{M}_{n,p}(\\mathbb{K})$ est un espace vectoriel de dimension $np$, de base les matrices élémentaires $E_{ij}$ (notions d'espace vectoriel, de base et de dimension employées ici par anticipation : elles sont définies au chapitre L1-EV1).\n• **Transposée** : $({}^t\\!A)_{ij} = a_{ji}$ ; $\\,{}^t(AB) = {}^t\\!B\\,{}^t\\!A$. $A$ est **symétrique** si $\\,{}^t\\!A = A$, **antisymétrique** si $\\,{}^t\\!A = -A$.\n• **Trace** : $\\mathrm{tr}(A) = \\sum_{i=1}^n a_{ii}$ ; elle est linéaire et $\\mathrm{tr}(AB) = \\mathrm{tr}(BA)$.\n• **Binôme de Newton** : si $AB = BA$, alors $(A + B)^m = \\sum_{k=0}^m \\binom{m}{k} A^k B^{m-k}$. Exemple : $N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ vérifie $N^2 = 0$, donc $(I_2 + N)^m = I_2 + mN$.\n• **Matrice nilpotente** : $N \\in \\mathcal{M}_n(\\mathbb{K})$ est **nilpotente** s'il existe un entier $p \\ge 1$ tel que $N^p = 0$ ; le plus petit tel entier est son **indice de nilpotence**. Une matrice **triangulaire supérieure stricte** (coefficients nuls sur la diagonale et en dessous) de taille $n$ vérifie $N^n = 0$ : on montre par récurrence sur $k$ que $(N^k)_{ij} = 0$ dès que $j < i + k$. Une matrice nilpotente n'est jamais inversible : si $N^p = 0$ avec $N$ inversible, on aurait $I_n = N^{-p}N^p = 0$.\n• **Exemple** : $N = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\\\ 0 & 0 & 0 \\end{pmatrix}$ vérifie $N^2 = \\begin{pmatrix} 0 & 0 & 2 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix} \\neq 0$ et $N^3 = 0$ : son indice de nilpotence est $3$."
      },
      {
        "title": "2. Systèmes linéaires et opérations élémentaires",
        "content": "Les **opérations élémentaires** sur les lignes sont : $L_i \\leftrightarrow L_j$ ; $L_i \\leftarrow \\lambda L_i$ avec $\\lambda \\neq 0$ ; $L_i \\leftarrow L_i + \\mu L_j$ avec $j \\neq i$. Chacune revient à multiplier à gauche par une matrice inversible (matrice élémentaire).\n• **Forme échelonnée** : chaque ligne non nulle commence par strictement plus de zéros que la précédente, les lignes nulles sont en bas ; les premiers coefficients non nuls sont les **pivots**.\n• **Structure des solutions** : si $AX = B$ admet une solution $X_0$, l'ensemble des solutions est $\\{X_0 + Y \\mid AY = 0\\}$.\n\n**Proposition** : une opération élémentaire ne change pas l'ensemble des solutions.\n**Démonstration.** Chaque opération est inversible par une opération du même type : $L_i \\leftrightarrow L_j$ par elle-même, $L_i \\leftarrow \\lambda L_i$ par $L_i \\leftarrow \\lambda^{-1} L_i$, $L_i \\leftarrow L_i + \\mu L_j$ par $L_i \\leftarrow L_i - \\mu L_j$ (la ligne $L_j$ est inchangée). Toute solution du système initial vérifie les nouvelles équations, qui sont des combinaisons des anciennes ; par l'opération inverse, la réciproque est vraie. Les deux ensembles de solutions sont donc égaux."
      },
      {
        "title": "3. Rang d'une matrice et compatibilité",
        "content": "• Le **rang** $\\operatorname{rg}(A)$ est le **nombre de pivots** d'une forme échelonnée de $A$.\n• **Ce nombre ne dépend pas de la forme échelonnée choisie.** Les opérations élémentaires sur les lignes ne changent pas les solutions de $AX = 0$, donc pas les relations de dépendance linéaire entre les colonnes. Or, sur une forme échelonnée, une colonne contient un pivot si et seulement si elle n'est pas combinaison linéaire des colonnes situées à sa gauche : les positions des pivots ne dépendent donc que de $A$.\n• **Renvoi en avant** : la dimension n'est définie qu'au chapitre L1-EV1. On verra alors, au chapitre L1-APP, que $\\operatorname{rg}(A)$ est aussi la dimension de l'espace engendré par les colonnes de $A$. Jusque-là, seule la définition par les pivots est utilisée.\n• $\\operatorname{rg}(A) \\le \\min(n, p)$, car il y a au plus un pivot par ligne et par colonne. On admet à ce stade que $\\operatorname{rg}({}^t\\!A) = \\operatorname{rg}(A)$.\n• Le système $AX = B$ ($p$ inconnues) est **compatible** si et seulement si $\\operatorname{rg}(A \\mid B) = \\operatorname{rg}(A)$ ; l'ensemble des solutions dépend alors de $p - \\operatorname{rg}(A)$ paramètres.\n• **Exemple** : $\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ est de rang $1$ ($L_2 \\leftarrow L_2 - 2L_1$ annule la deuxième ligne)."
      },
      {
        "title": "4. Matrices inversibles : caractérisations",
        "content": "$A \\in \\mathcal{M}_n(\\mathbb{K})$ est **inversible** s'il existe $B$ telle que $AB = BA = I_n$ ; l'ensemble $GL_n(\\mathbb{K})$ des matrices inversibles est un groupe, avec $(AB)^{-1} = B^{-1}A^{-1}$ et $({}^t\\!A)^{-1} = {}^t(A^{-1})$.\n**Théorème** : pour $A \\in \\mathcal{M}_n(\\mathbb{K})$, sont équivalents : (i) $A$ inversible ; (ii) $AX = 0 \\implies X = 0$ ; (iii) pour tout $B$, $AX = B$ a une unique solution ; (iv) $\\operatorname{rg}(A) = n$ ; (v) il existe $B$ telle que $BA = I_n$ ; (vi) $\\det(A) \\neq 0$.\n\n**Démonstration de (v) $\\implies$ (i)** (un inverse à gauche suffit).\n1. Si $BA = I_n$ et $AX = 0$, alors $X = BAX = 0$ : le système $AX = 0$ n'a que la solution nulle.\n2. Ce système n'a donc aucune inconnue libre : toute forme échelonnée de $A$ a $n$ pivots, donc aucune ligne nulle. Ainsi, pour tout second membre, le système de matrice $A$ est compatible ; en résolvant $AX = e_j$ pour chaque colonne $e_j$ de $I_n$, on obtient $C$ telle que $AC = I_n$. (Au chapitre L1-APP, le théorème du rang redonnera ce résultat : une application linéaire injective de $\\mathbb{K}^n$ dans lui-même est bijective.)\n3. Alors $B = B(AC) = (BA)C = C$, donc $AB = BA = I_n$ : $A$ est inversible et $A^{-1} = B$."
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
      "Caractériser une somme directe de deux ou de $p$ sous-espaces, des sous-espaces supplémentaires, et démontrer la formule de Grassmann."
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
        "content": "• **Somme** : $F + G = \\{f + g \\mid f \\in F,\\ g \\in G\\}$ est le plus petit sous-espace contenant $F \\cup G$.\n• **Somme directe** : la somme est **directe**, notée $F \\oplus G$, si tout vecteur de $F + G$ s'écrit de manière unique $f + g$.\n• **Supplémentaires** : $F$ et $G$ sont supplémentaires dans $E$ si $E = F \\oplus G$. En dimension finie, tout sous-espace admet un supplémentaire (base incomplète), qui n'est pas unique.\n\n**Proposition** : $F + G$ est directe si et seulement si $F \\cap G = \\{0_E\\}$.\n**Démonstration.** Si la somme est directe et $x \\in F \\cap G$, alors $x = x + 0_E = 0_E + x$ sont deux décompositions, donc $x = 0_E$. Réciproquement, si $f + g = f' + g'$, alors $f - f' = g' - g \\in F \\cap G = \\{0_E\\}$, donc $f = f'$ et $g = g'$.\n• **Exemples** : dans $\\mathbb{R}^3$, le plan $P : x + y + z = 0$ et la droite $D = \\mathrm{Vect}\\big((1,1,1)\\big)$ sont supplémentaires ($(1,1,1) \\notin P$ et $2 + 1 = 3$). Dans $\\mathbb{R}^{\\mathbb{R}}$, fonctions paires et impaires sont supplémentaires : $f(x) = \\frac{f(x) + f(-x)}{2} + \\frac{f(x) - f(-x)}{2}$.\n\n**Somme de $p$ sous-espaces.** $F_1 + \\dots + F_p = \\{x_1 + \\dots + x_p \\mid x_i \\in F_i\\}$. Elle est **directe**, notée $F_1 \\oplus \\dots \\oplus F_p$, si tout vecteur de la somme s'écrit de manière unique $x_1 + \\dots + x_p$ avec $x_i \\in F_i$.\n• **Critère** : la somme est directe si et seulement si $x_1 + \\dots + x_p = 0_E$ (avec $x_i \\in F_i$) entraîne $x_1 = \\dots = x_p = 0_E$ : la différence de deux décompositions d'un même vecteur est une décomposition de $0_E$.\n• **En dimension finie** : $\\dim(F_1 + \\dots + F_p) \\le \\dim F_1 + \\dots + \\dim F_p$, avec égalité si et seulement si la somme est directe ; on obtient alors une base de la somme en mettant bout à bout des bases des $F_i$.\n• **Attention** : dès $p = 3$, les conditions $F_i \\cap F_j = \\{0_E\\}$ pour $i \\neq j$ ne suffisent pas : trois droites vectorielles distinctes de $\\mathbb{R}^2$ ont des intersections deux à deux réduites à $\\{0\\}$, mais leur somme n'est pas directe ($1 + 1 + 1 > 2$)."
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
      },
      {
        "q": "Comment vérifier en dimension finie que $F_1 + \\dots + F_p$ est directe ?",
        "a": "Il faut et il suffit que $\\dim(F_1 + \\dots + F_p) = \\dim F_1 + \\dots + \\dim F_p$. Les intersections deux à deux nulles ne suffisent pas dès $p = 3$."
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
      "Appliquer les formules de changement de base $X = PX'$ et $A' = P^{-1}AP$.",
      "Reconnaître une homothétie, un projecteur ($p \\circ p = p$), une symétrie ($s \\circ s = \\mathrm{Id}_E$) et les décrire à l'aide d'une décomposition $E = F \\oplus G$."
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
        "content": "Soient $\\mathcal{B} = (e_1, \\dots, e_p)$ une base de $E$ et $\\mathcal{C} = (\\varepsilon_1, \\dots, \\varepsilon_n)$ une base de $F$.\n• $\\mathrm{Mat}_{\\mathcal{B}, \\mathcal{C}}(f) \\in \\mathcal{M}_{n,p}(\\mathbb{K})$ a pour $j$-ième colonne les coordonnées de $f(e_j)$ dans $\\mathcal{C}$.\n• Si $X$ et $Y$ sont les colonnes de coordonnées de $x$ et de $y = f(x)$, alors $Y = AX$.\n• $\\mathrm{Mat}(g \\circ f) = \\mathrm{Mat}(g)\\,\\mathrm{Mat}(f)$ (bases compatibles) ; $\\mathrm{rg}\\, f = \\mathrm{rg}\\, A$ (les colonnes de $A$ sont les coordonnées d'une famille génératrice de $\\mathrm{Im}\\, f$, et ses colonnes à pivot en donnent une base : $\\mathrm{rg}\\, A$, défini au chapitre L1-MAT comme le nombre de pivots, est donc aussi la dimension de l'espace engendré par les colonnes de $A$) ; $f$ est un isomorphisme si et seulement si $A$ est carrée inversible, et $\\mathrm{Mat}(f^{-1}) = A^{-1}$.\n• **Exemple** : la dérivation $D$ sur $\\mathbb{R}_2[X]$, base $(1, X, X^2)$ : $D(1) = 0$, $D(X) = 1$, $D(X^2) = 2X$, d'où\n$$\\mathrm{Mat}(D) = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\\\ 0 & 0 & 0 \\end{pmatrix}, \\quad \\mathrm{rg}\\, D = 2, \\quad \\mathrm{Ker}\\, D = \\mathbb{R}_0[X].$$\n• **Endomorphisme nilpotent** : $u \\in \\mathcal{L}(E)$ est **nilpotent** s'il existe $p \\ge 1$ tel que $u^p = u \\circ \\dots \\circ u = 0$. En dimension finie, cela revient à dire que sa matrice dans une base (et alors dans toute base) est nilpotente (chapitre L1-MAT, section 1). Exemple : la dérivation $D$ ci-dessus vérifie $D^3 = 0$, et sa matrice est triangulaire supérieure stricte.\n• **Propriété** : si $\\dim E = n$, $u^n = 0$ et $u^{n-1}(x_0) \\neq 0_E$ pour un vecteur $x_0$, alors $\\big(x_0, u(x_0), \\dots, u^{n-1}(x_0)\\big)$ est une base de $E$.\n**Démonstration.** Supposons $\\sum_{k=0}^{n-1} \\lambda_k u^k(x_0) = 0_E$ avec des $\\lambda_k$ non tous nuls, et soit $j$ le plus petit indice tel que $\\lambda_j \\neq 0$. En appliquant $u^{n-1-j}$, chaque terme d'indice $k > j$ devient $\\lambda_k u^{n-1-j+k}(x_0) = 0_E$ (exposant $\\ge n$), d'où $\\lambda_j u^{n-1}(x_0) = 0_E$ : contradiction. La famille est libre et compte $n = \\dim E$ vecteurs : c'est une base."
      },
      {
        "title": "6. Changement de base",
        "content": "• La **matrice de passage** $P = P_{\\mathcal{B} \\to \\mathcal{B}'}$ a pour colonnes les coordonnées des vecteurs de la nouvelle base $\\mathcal{B}'$ dans l'ancienne base $\\mathcal{B}$ ; elle est inversible et $P^{-1} = P_{\\mathcal{B}' \\to \\mathcal{B}}$.\n• **Coordonnées** : si $X$ (ancienne base) et $X'$ (nouvelle base) représentent le même vecteur, alors $X = PX'$.\n• **Application linéaire** : $A' = Q^{-1}AP$, où $P$ est le passage dans $E$ et $Q$ dans $F$. **Endomorphisme** : $A' = P^{-1}AP$ ; on dit que $A$ et $A'$ sont **semblables**. Deux matrices semblables ont même rang, même trace, même déterminant.\n• **Exemple** : $f$ de matrice $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ dans la base canonique de $\\mathbb{R}^2$ ; avec $\\mathcal{B}' = \\big((1,1), (1,-1)\\big)$, $f(1,1) = (3,3)$ et $f(1,-1) = (1,-1)$, donc $A' = \\begin{pmatrix} 3 & 0 \\\\ 0 & 1 \\end{pmatrix}$ (et l'on vérifie $\\mathrm{tr} A = \\mathrm{tr} A' = 4$, $\\det A = \\det A' = 3$)."
      },
      {
        "title": "7. Homothéties, projecteurs et symétries vectorielles",
        "content": "Soit $E$ un $\\mathbb{K}$-espace vectoriel, avec $\\mathbb{K} = \\mathbb{R}$ ou $\\mathbb{C}$.\n• **Homothétie** de rapport $\\lambda \\in \\mathbb{K}$ : $h = \\lambda\\,\\mathrm{Id}_E$, soit $h(x) = \\lambda x$. Si $\\lambda \\neq 0$, c'est un automorphisme, de réciproque $\\frac{1}{\\lambda}\\mathrm{Id}_E$.\n• **Projection** : si $E = F \\oplus G$, tout $x \\in E$ s'écrit de manière unique $x = x_F + x_G$ avec $x_F \\in F$ et $x_G \\in G$. La **projection sur $F$ parallèlement à $G$** est l'application linéaire $p : x \\mapsto x_F$. On a $\\mathrm{Im}\\, p = F$, $\\mathrm{Ker}\\, p = G$ et $p \\circ p = p$.\n\n**Théorème** : si $p \\in \\mathcal{L}(E)$ vérifie $p \\circ p = p$ (on dit que $p$ est un **projecteur**), alors $E = \\mathrm{Ker}\\, p \\oplus \\mathrm{Im}\\, p$ et $p$ est la projection sur $\\mathrm{Im}\\, p$ parallèlement à $\\mathrm{Ker}\\, p$.\n**Démonstration.**\n1. **Somme** : pour $x \\in E$, on écrit $x = (x - p(x)) + p(x)$. On a $p(x) \\in \\mathrm{Im}\\, p$, et $p(x - p(x)) = p(x) - p^2(x) = 0_E$, donc $x - p(x) \\in \\mathrm{Ker}\\, p$.\n2. **Somme directe** : si $y \\in \\mathrm{Ker}\\, p \\cap \\mathrm{Im}\\, p$, il existe $z$ tel que $y = p(z)$, d'où $y = p(z) = p^2(z) = p(y) = 0_E$.\n3. **Identification** : la composante de $x$ sur $\\mathrm{Im}\\, p$ est $p(x)$, d'après le point 1 : $p$ est bien la projection annoncée. De plus, $\\mathrm{Im}\\, p = \\mathrm{Ker}(p - \\mathrm{Id}_E)$ : si $y = p(z)$, alors $p(y) = p^2(z) = y$, et réciproquement $y = p(y)$ est dans l'image.\n\n• **Symétrie** : si $E = F \\oplus G$, la **symétrie par rapport à $F$ parallèlement à $G$** est $s : x_F + x_G \\mapsto x_F - x_G$. Si $p$ est la projection sur $F$ parallèlement à $G$, alors $s = 2p - \\mathrm{Id}_E$, et $s \\circ s = \\mathrm{Id}_E$.\n• **Réciproque** : si $s \\in \\mathcal{L}(E)$ vérifie $s \\circ s = \\mathrm{Id}_E$, alors $p = \\frac{1}{2}(s + \\mathrm{Id}_E)$ vérifie $p^2 = \\frac{1}{4}(s^2 + 2s + \\mathrm{Id}_E) = \\frac{1}{2}(s + \\mathrm{Id}_E) = p$. Ainsi $s = 2p - \\mathrm{Id}_E$ est la symétrie par rapport à $\\mathrm{Ker}(s - \\mathrm{Id}_E)$ parallèlement à $\\mathrm{Ker}(s + \\mathrm{Id}_E)$.\n• **En dimension finie $n$**, dans une base obtenue en réunissant une base de $F$ (de dimension $r$) et une base de $G$, $p$ a pour matrice $\\begin{pmatrix} I_r & 0 \\\\ 0 & 0 \\end{pmatrix}$ et $s$ a pour matrice $\\begin{pmatrix} I_r & 0 \\\\ 0 & -I_{n-r} \\end{pmatrix}$. Donc $\\mathrm{tr}\\, p = \\mathrm{rg}\\, p = r$, $\\mathrm{tr}\\, s = 2r - n$ et $\\det s = (-1)^{n-r}$.\n• **Exemple** : sur $\\mathbb{R}^2$, $p(x, y) = (x + y, 0)$ vérifie $p^2(x, y) = p(x + y, 0) = (x + y, 0) = p(x, y)$. C'est la projection sur $\\mathrm{Im}\\, p = \\mathrm{Vect}\\big((1, 0)\\big)$ parallèlement à $\\mathrm{Ker}\\, p = \\mathrm{Vect}\\big((1, -1)\\big)$, et la symétrie associée est $s(x, y) = (x + 2y, -y)$."
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
      "Une matrice dépend des bases choisies : parler de « la matrice de $f$ » sans préciser les bases n'a pas de sens.",
      "Une projection dépend du sous-espace $F$ **et** du supplémentaire $G$ : sur $\\mathbb{R}^2$, projeter sur $\\mathrm{Vect}\\big((1, 0)\\big)$ parallèlement à $\\mathrm{Vect}\\big((0, 1)\\big)$ ou parallèlement à $\\mathrm{Vect}\\big((1, -1)\\big)$ donne deux applications différentes."
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
      },
      {
        "q": "Que peut-on dire d'un endomorphisme $p$ tel que $p \\circ p = p$ ?",
        "a": "C'est un projecteur : $E = \\mathrm{Ker}\\, p \\oplus \\mathrm{Im}\\, p$ et $p$ est la projection sur $\\mathrm{Im}\\, p$ parallèlement à $\\mathrm{Ker}\\, p$."
      },
      {
        "q": "Quel lien relie une symétrie $s$ et le projecteur $p$ associé ?",
        "a": "$s = 2p - \\mathrm{Id}_E$, soit $p = \\frac{1}{2}(s + \\mathrm{Id}_E)$ ; $s \\circ s = \\mathrm{Id}_E$ caractérise les symétries."
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
        "content": "• **Voisinage** de $a$ : partie contenant un intervalle $]a - r ; a + r[$ avec $r > 0$.\n• **Ouvert** : $U$ est ouvert si $\\forall x \\in U,\\ \\exists r > 0,\\ ]x - r ; x + r[\\, \\subset U$. Exemples : $]a ; b[$, $\\mathbb{R}$, $\\emptyset$, toute réunion d'ouverts.\n• **Fermé** : $F$ est fermé si $\\mathbb{R} \\setminus F$ est ouvert. Exemples : $[a ; b]$, $\\mathbb{Z}$, toute intersection de fermés. $[0 ; 1[$ n'est ni ouvert ni fermé.\n• **Caractérisation séquentielle** : $F$ est fermé si et seulement si la limite de toute suite convergente d'éléments de $F$ appartient à $F$.\n• Un segment $[a ; b]$ est fermé et borné ; de toute suite à valeurs dans $[a ; b]$ on peut extraire une suite convergeant dans $[a ; b]$ (théorème de Bolzano-Weierstrass, chapitre L1-SUI).\n• **Adhérence** : $a \\in \\mathbb{R}$ est **adhérent** à $A \\subset \\mathbb{R}$ si tout intervalle $]a - r ; a + r[$ ($r > 0$) rencontre $A$ ; cela équivaut à : $a$ est la limite d'une suite d'éléments de $A$. L'**adhérence** $\\overline{A}$ est l'ensemble des points adhérents à $A$ : c'est le plus petit fermé contenant $A$, et $A$ est fermé si et seulement si $\\overline{A} = A$. À ne pas confondre avec une valeur d'adhérence d'une **suite** (chapitre L1-SUI, section 5).\n• **Intérieur** : $a$ est **intérieur** à $A$ s'il existe $r > 0$ tel que $]a - r ; a + r[\\, \\subset A$. L'**intérieur** $\\mathring{A}$ est l'ensemble des points intérieurs : c'est le plus grand ouvert contenu dans $A$, et $A$ est ouvert si et seulement si $\\mathring{A} = A$. La **frontière** de $A$ est $\\partial A = \\overline{A} \\setminus \\mathring{A}$.\n• **Exemples** : pour $A = [0 ; 1[$, $\\overline{A} = [0 ; 1]$, $\\mathring{A} = ]0 ; 1[$ et $\\partial A = \\{0, 1\\}$. Dans $[0 ; 1] \\cup \\{2\\}$, le point isolé $2$ est adhérent mais pas intérieur. Comme $\\mathbb{Q}$ et $\\mathbb{R} \\setminus \\mathbb{Q}$ sont denses (section 5), $\\overline{\\mathbb{Q}} = \\mathbb{R}$ et $\\mathring{\\mathbb{Q}} = \\emptyset$. Plus généralement, une partie $D$ est **dense** dans $\\mathbb{R}$ si et seulement si $\\overline{D} = \\mathbb{R}$."
      },
      {
        "title": "7. Sous-groupes additifs de R",
        "content": "Un **sous-groupe** de $(\\mathbb{R}, +)$ est une partie $G$ non vide telle que $x - y \\in G$ pour tous $x, y \\in G$ (elle contient alors $0$, les opposés et les sommes de ses éléments). Exemples : $\\{0\\}$, $a\\mathbb{Z} = \\{ka \\mid k \\in \\mathbb{Z}\\}$, $\\mathbb{Q}$, $\\mathbb{Z} + \\sqrt{2}\\,\\mathbb{Z}$.\n\n**Théorème** : tout sous-groupe $G$ de $(\\mathbb{R}, +)$ est de la forme $a\\mathbb{Z}$ avec $a \\ge 0$, ou bien est dense dans $\\mathbb{R}$.\n**Démonstration.**\n1. Si $G = \\{0\\}$, alors $G = 0\\mathbb{Z}$. Sinon, $G$ contient un réel $x \\neq 0$, donc aussi $|x| > 0$ (car $-x \\in G$) : la partie $G \\cap \\mathbb{R}_+^*$ est non vide et minorée par $0$, et l'on pose $a = \\inf(G \\cap \\mathbb{R}_+^*) \\ge 0$.\n2. **Cas $a > 0$.** Montrons que $a \\in G$. Sinon, par la caractérisation de la borne inférieure, il existe $g_1 \\in G$ avec $a < g_1 < 2a$, puis $g_2 \\in G$ avec $a < g_2 < g_1$ ; alors $g_1 - g_2 \\in G$ et $0 < g_1 - g_2 < a$, ce qui contredit la définition de $a$. Donc $a \\in G$ et $a\\mathbb{Z} \\subset G$. Soit $g \\in G$ et $k = \\left\\lfloor \\frac{g}{a} \\right\\rfloor$ : $r = g - ka$ appartient à $G$ et $0 \\le r < a$, donc $r = 0$ (sinon $r$ contredirait la définition de $a$). Ainsi $G = a\\mathbb{Z}$.\n3. **Cas $a = 0$.** Soient $x < y$ deux réels. Il existe $g \\in G$ tel que $0 < g < y - x$. Pour $k = \\left\\lfloor \\frac{x}{g} \\right\\rfloor + 1$, on a $x < kg \\le x + g < y$, et $kg \\in G$. Tout intervalle ouvert non vide rencontre $G$ : $G$ est dense dans $\\mathbb{R}$.\n• **Application** : $\\mathbb{Z} + \\sqrt{2}\\,\\mathbb{Z}$ est dense dans $\\mathbb{R}$. Sinon, il serait égal à $a\\mathbb{Z}$ avec $a > 0$ (il contient $1$, donc n'est pas $\\{0\\}$) : on aurait $1 = pa$ et $\\sqrt{2} = qa$ avec $p, q \\in \\mathbb{Z}$, $p \\neq 0$, d'où $\\sqrt{2} = \\frac{q}{p} \\in \\mathbb{Q}$, ce qui est absurde (section 3)."
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
      "Étudier une suite récurrente $u_{n+1} = f(u_n)$ et manipuler les relations de comparaison $o$, $O$, $\\sim$.",
      "Résoudre une récurrence linéaire d'ordre 2 à coefficients constants à l'aide de l'équation caractéristique."
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
        "content": "• Une **suite extraite** de $(u_n)$ est $(u_{\\varphi(n)})$ avec $\\varphi : \\mathbb{N} \\to \\mathbb{N}$ strictement croissante. Si $u_n \\to \\ell$, toute suite extraite tend vers $\\ell$. Si $u_{2n} \\to \\ell$ et $u_{2n+1} \\to \\ell$, alors $u_n \\to \\ell$.\n• **Application** : $\\big((-1)^n\\big)$ diverge, car ses extraites $(u_{2n})$ et $(u_{2n+1})$ tendent vers $1$ et $-1$.\n• **Théorème de Bolzano-Weierstrass** : de toute suite réelle bornée on peut extraire une suite convergente (démonstration par dichotomie : chapitre L1-PRF, section 2). La limite d'une suite extraite convergente est une **valeur d'adhérence** de $(u_n)$.\n• **Suite de Cauchy** : $\\forall \\varepsilon > 0,\\ \\exists N,\\ \\forall p, q \\ge N,\\ |u_p - u_q| \\le \\varepsilon$.\n• **Complétude de $\\mathbb{R}$** : une suite réelle converge si et seulement si elle est de Cauchy (le sens « converge $\\implies$ Cauchy » est immédiat ; la réciproque utilise Bolzano-Weierstrass)."
      },
      {
        "title": "6. Suites récurrentes u(n+1) = f(u(n))",
        "content": "Soit $f : I \\to \\mathbb{R}$ avec $I$ un intervalle **stable** ($f(I) \\subset I$) et $u_0 \\in I$ ; la suite est alors bien définie.\n• **Limite possible** : si $f$ est continue sur $I$ et si $u_n \\to \\ell \\in I$, alors $f(\\ell) = \\ell$ ($\\ell$ est un point fixe).\n• **$f$ croissante sur $I$** : $(u_n)$ est monotone, croissante si $u_1 \\ge u_0$, décroissante si $u_1 \\le u_0$ (récurrence : $u_n \\le u_{n+1} \\implies f(u_n) \\le f(u_{n+1})$).\n• **$f$ décroissante sur $I$** : $(u_{2n})$ et $(u_{2n+1})$ sont monotones de sens contraires (car $f \\circ f$ est croissante).\n• **$f$ contractante** : si $|f(x) - f(y)| \\le k|x - y|$ sur $I$ avec $0 \\le k < 1$ et $f(\\ell) = \\ell$, alors $|u_n - \\ell| \\le k^n |u_0 - \\ell|$, donc $u_n \\to \\ell$. C'est le cas si $f$ est dérivable avec $|f'| \\le k$ sur $I$ (conséquence du théorème des accroissements finis, démontré au chapitre L1-PRF, section 3).\n• **Cas arithmético-géométrique** : $u_{n+1} = a u_n + b$ avec $a \\neq 1$. L'unique point fixe de $x \\mapsto ax + b$ est $\\ell = \\frac{b}{1 - a}$. La suite auxiliaire $v_n = u_n - \\ell$ vérifie $v_{n+1} = a u_n + b - (a\\ell + b) = a v_n$ : elle est géométrique de raison $a$, donc $u_n = \\ell + a^n (u_0 - \\ell)$. Si $|a| < 1$, alors $u_n \\to \\ell$ ; si $|a| \\ge 1$ et $u_0 \\neq \\ell$, la suite diverge. **Exemple** : pour $u_0 = 1$ et $u_{n+1} = \\frac{1}{3}u_n + 2$, on a $\\ell = 3$ et $u_n = 3 - \\frac{2}{3^n} \\to 3$."
      },
      {
        "title": "7. Relations de comparaison",
        "content": "Soit $(v_n)$ non nulle à partir d'un certain rang.\n• $u_n = o(v_n)$ si $\\frac{u_n}{v_n} \\to 0$ ; $u_n = O(v_n)$ si $\\left(\\frac{u_n}{v_n}\\right)$ est bornée ; $u_n \\sim v_n$ si $\\frac{u_n}{v_n} \\to 1$, ce qui équivaut à $u_n - v_n = o(v_n)$.\n• **Croissances comparées** : pour $\\alpha, \\beta > 0$ et $q > 1$, $(\\ln n)^\\alpha = o(n^\\beta)$, $n^\\beta = o(q^n)$ et $q^n = o(n!)$.\n• **Règles** : les équivalents se multiplient, se divisent et s'élèvent à une puissance fixe ; deux suites équivalentes ont la même limite (si elle existe) et le même signe à partir d'un certain rang.\n• **Exemple** : $\\frac{n^2 + 3n}{2n^2 - 1} \\sim \\frac{n^2}{2n^2} = \\frac{1}{2}$, donc la suite tend vers $\\frac{1}{2}$."
      },
      {
        "title": "8. Moyennes de Cesàro, limites supérieure et inférieure",
        "content": "**Théorème de Cesàro** : si $u_n \\to \\ell \\in \\mathbb{R}$, alors $v_n = \\frac{u_1 + u_2 + \\dots + u_n}{n} \\to \\ell$.\n**Démonstration.** Soit $\\varepsilon > 0$ et $N$ tel que $|u_k - \\ell| \\le \\frac{\\varepsilon}{2}$ pour tout $k > N$. Pour $n > N$,\n$$|v_n - \\ell| \\le \\frac{1}{n}\\sum_{k=1}^{N} |u_k - \\ell| + \\frac{1}{n}\\sum_{k=N+1}^{n} |u_k - \\ell| \\le \\frac{A}{n} + \\frac{n - N}{n} \\cdot \\frac{\\varepsilon}{2},$$\noù $A = \\sum_{k=1}^{N} |u_k - \\ell|$ ne dépend pas de $n$. Pour $n$ assez grand, $\\frac{A}{n} \\le \\frac{\\varepsilon}{2}$, d'où $|v_n - \\ell| \\le \\varepsilon$.\n• Le théorème reste vrai pour $\\ell = +\\infty$ ou $\\ell = -\\infty$. **La réciproque est fausse** : $u_n = (-1)^n$ diverge, mais $|v_n| \\le \\frac{1}{n}$, donc $v_n \\to 0$.\n• **Limites supérieure et inférieure** : soit $(u_n)$ une suite bornée. La suite $s_n = \\sup_{k \\ge n} u_k$ est décroissante et minorée, la suite $i_n = \\inf_{k \\ge n} u_k$ est croissante et majorée ; toutes deux convergent (théorème de la limite monotone). On pose\n$$\\limsup_{n \\to +\\infty} u_n = \\lim_{n \\to +\\infty} s_n, \\qquad \\liminf_{n \\to +\\infty} u_n = \\lim_{n \\to +\\infty} i_n.$$\n• **Propriétés** (admises) : $\\liminf u_n \\le \\limsup u_n$ ; $\\limsup u_n$ est la **plus grande valeur d'adhérence** de $(u_n)$ et $\\liminf u_n$ la plus petite ; $(u_n)$ converge si et seulement si $\\liminf u_n = \\limsup u_n$, et cette valeur commune est alors sa limite.\n• **Exemple** : pour $u_n = (-1)^n\\left(1 + \\frac{1}{n}\\right)$ ($n \\ge 1$), on a $u_{2n} \\to 1$ et $u_{2n+1} \\to -1$. Une suite extraite a une infinité d'indices pairs ou une infinité d'indices impairs, donc les seules valeurs d'adhérence sont $1$ et $-1$ : $\\limsup u_n = 1$ et $\\liminf u_n = -1$."
      },
      {
        "title": "9. Suites récurrentes linéaires d'ordre 2",
        "content": "On considère les suites réelles vérifiant $u_{n+2} = a u_{n+1} + b u_n$ pour tout $n \\in \\mathbb{N}$, où $a$ et $b$ sont des réels, $b \\neq 0$.\n• **Structure** : l'ensemble de ces suites est un sous-espace vectoriel de l'espace des suites réelles, et l'application $(u_n) \\mapsto (u_0, u_1)$ en est un isomorphisme vers $\\mathbb{R}^2$ : il est de **dimension 2** (chapitre L1-EV1). Deux solutions non proportionnelles en forment donc une base.\n• **Équation caractéristique** : $r^2 = ar + b$. Pour $r \\neq 0$, la suite géométrique $(r^n)$ vérifie la relation si et seulement si $r$ est racine de cette équation. On note $\\Delta = a^2 + 4b$.\n• **Cas $\\Delta > 0$** : deux racines réelles distinctes $r_1$ et $r_2$ ; les solutions sont les suites $u_n = \\lambda r_1^n + \\mu r_2^n$.\n• **Cas $\\Delta = 0$** : une racine double $r_0 = \\frac{a}{2}$ ; les solutions sont les suites $u_n = (\\lambda + \\mu n)\\,r_0^n$. En effet, $(n r_0^n)$ convient : comme $a r_0 + b = r_0^2$ et $a r_0 = 2r_0^2$, on a $a(n + 1)r_0^{n+1} + b\\,n r_0^n = r_0^n\\big(n(a r_0 + b) + a r_0\\big) = (n + 2)\\,r_0^{n+2}$.\n• **Cas $\\Delta < 0$** : deux racines complexes conjuguées $\\rho e^{\\pm i\\theta}$ ; les solutions réelles sont les suites $u_n = \\rho^n\\big(\\lambda \\cos(n\\theta) + \\mu \\sin(n\\theta)\\big)$ (parties réelle et imaginaire de la solution complexe $(\\rho e^{i\\theta})^n$).\n• Dans chaque cas, $\\lambda$ et $\\mu$ sont déterminés de façon unique par $u_0$ et $u_1$.\n• **Exemple** : $u_0 = 0$, $u_1 = 1$ et $u_{n+2} = u_{n+1} + 2u_n$. L'équation $r^2 = r + 2$ a pour racines $2$ et $-1$, donc $u_n = \\lambda 2^n + \\mu(-1)^n$, avec $\\lambda + \\mu = 0$ et $2\\lambda - \\mu = 1$ : $\\lambda = \\frac{1}{3}$, $\\mu = -\\frac{1}{3}$ et $u_n = \\frac{2^n - (-1)^n}{3}$."
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
      },
      {
        "q": "Comment étudier une suite $u_{n+1} = a u_n + b$ avec $a \\neq 1$ ?",
        "a": "On pose $\\ell = \\frac{b}{1 - a}$ (point fixe) et $v_n = u_n - \\ell$ : $(v_n)$ est géométrique de raison $a$, donc $u_n = \\ell + a^n (u_0 - \\ell)$."
      },
      {
        "q": "Forme des suites vérifiant $u_{n+2} = a u_{n+1} + b u_n$ lorsque $r^2 = ar + b$ a une racine double $r_0$ ?",
        "a": "$u_n = (\\lambda + \\mu n)\\,r_0^n$, où $\\lambda$ et $\\mu$ sont fixés par $u_0$ et $u_1$."
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
        "content": "**Prérequis.** Ce chapitre utilise l'intégrale des fonctions continues telle qu'elle est vue en terminale : théorème fondamental de l'analyse, linéarité, croissance et intégration par parties. Sa construction (sommes de Riemann) et ses propriétés sont reprises au chapitre L1-INT ; on s'en sert ici pour le reste intégral et pour primitiver les DL.\n**Théorème** : si $f$ est de classe $\\mathcal{C}^{n+1}$ sur un intervalle $I$ et $a, x \\in I$,\n$$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x - a)^k + \\int_a^x \\frac{(x - t)^n}{n!} f^{(n+1)}(t)\\, dt.$$\n**Démonstration** (récurrence sur $n$).\n1. **Rang $0$** : $f$ est $\\mathcal{C}^1$, donc $f(x) = f(a) + \\int_a^x f'(t)\\, dt$ (théorème fondamental de l'analyse).\n2. **Hérédité** : supposons la formule vraie au rang $n - 1$ pour les fonctions $\\mathcal{C}^n$, et soit $f$ de classe $\\mathcal{C}^{n+1}$. Le reste au rang $n - 1$ est $R_{n-1} = \\int_a^x \\frac{(x - t)^{n-1}}{(n-1)!} f^{(n)}(t)\\, dt$.\n3. On intègre par parties avec $u(t) = -\\frac{(x - t)^n}{n!}$, $u'(t) = \\frac{(x - t)^{n-1}}{(n-1)!}$, $v = f^{(n)}$, $v' = f^{(n+1)}$, toutes continues :\n$$R_{n-1} = \\left[-\\frac{(x - t)^n}{n!} f^{(n)}(t)\\right]_a^x + \\int_a^x \\frac{(x - t)^n}{n!} f^{(n+1)}(t)\\, dt = \\frac{f^{(n)}(a)}{n!}(x - a)^n + R_n.$$\n4. En reportant dans la formule au rang $n - 1$, on obtient la formule au rang $n$."
      },
      {
        "title": "4. Taylor-Lagrange et Taylor-Young",
        "content": "• **Inégalité de Taylor-Lagrange** : si $f$ est $\\mathcal{C}^{n+1}$ sur $I$ et $|f^{(n+1)}| \\le M$ entre $a$ et $x$,\n$$\\left|f(x) - \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x - a)^k\\right| \\le \\frac{M|x - a|^{n+1}}{(n+1)!}.$$\nElle se déduit du reste intégral, puisque $\\left|\\int_a^x \\frac{(x - t)^n}{n!}\\, dt\\right| = \\frac{|x - a|^{n+1}}{(n+1)!}$.\n• **Égalité de Taylor-Lagrange** : si $f$ est $n + 1$ fois dérivable et $x \\neq a$, il existe $c$ strictement entre $a$ et $x$ tel que le reste vaut $\\frac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}$ (pour $n = 0$, c'est le TAF).\n• **Formule de Taylor-Young** : si $f$ est de classe $\\mathcal{C}^n$ sur $I$ (il suffit que $f$ soit $n$ fois dérivable en $a$),\n$$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x - a)^k + o\\big((x - a)^n\\big) \\quad (x \\to a).$$\n**Démonstration** (cas $f$ de classe $\\mathcal{C}^n$, $n \\ge 1$). La formule avec reste intégral à l'ordre $n - 1$ donne $f(x) = \\sum_{k=0}^{n-1} \\frac{f^{(k)}(a)}{k!}(x - a)^k + \\int_a^x \\frac{(x - t)^{n-1}}{(n-1)!} f^{(n)}(t)\\, dt$. Écrivons $f^{(n)}(t) = f^{(n)}(a) + \\varepsilon(t)$, où $\\varepsilon(t) \\to 0$ quand $t \\to a$ par continuité de $f^{(n)}$. Le terme constant donne $f^{(n)}(a) \\int_a^x \\frac{(x - t)^{n-1}}{(n-1)!}\\, dt = \\frac{f^{(n)}(a)}{n!}(x - a)^n$, et le reste vérifie $\\left|\\int_a^x \\frac{(x - t)^{n-1}}{(n-1)!} \\varepsilon(t)\\, dt\\right| \\le \\frac{|x - a|^n}{n!} \\sup_{t \\text{ entre } a \\text{ et } x} |\\varepsilon(t)|$. Ce sup tend vers $0$ quand $x \\to a$, donc ce reste est un $o\\big((x - a)^n\\big)$. Le cas où $f$ est seulement $n$ fois dérivable en $a$ se traite par récurrence sur $n$ (en appliquant l'hypothèse à $f'$ et en primitivant) ; il est admis ici.\n• **Application** : pour tout $x \\in \\mathbb{R}$, $\\left|e^x - \\sum_{k=0}^n \\frac{x^k}{k!}\\right| \\le \\frac{e^{|x|}|x|^{n+1}}{(n+1)!} \\to 0$, donc $e^x = \\sum_{k=0}^{+\\infty} \\frac{x^k}{k!}$."
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
        "content": "• $\\int x^\\alpha\\, dx = \\frac{x^{\\alpha+1}}{\\alpha + 1}$ ($\\alpha \\neq -1$) ; $\\int \\frac{dx}{x} = \\ln|x|$ sur $]-\\infty ; 0[$ ou sur $]0 ; +\\infty[$ ; $\\int \\frac{u'}{u} = \\ln|u|$.\n• $\\int \\frac{dx}{1 + x^2} = \\arctan x$ ; $\\int \\frac{dx}{\\sqrt{1 - x^2}} = \\arcsin x$ sur $]-1 ; 1[$ (fonctions $\\arctan$ et $\\arcsin$ : voir le chapitre L1-CNT, section 8) ; $\\int u'e^u = e^u$.\n• **Trinôme sans racine réelle** : on écrit la forme canonique. Exemple : $x^2 + 2x + 5 = (x + 1)^2 + 4$, d'où\n$$\\int \\frac{dx}{x^2 + 2x + 5} = \\frac{1}{2}\\arctan\\left(\\frac{x + 1}{2}\\right) + C.$$\n• **Fractions rationnelles** : décomposition en éléments simples (chapitre L1-CMP), puis primitivation de chaque terme."
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
    "title": "L1-CMP : Nombres complexes et arithmétique des polynômes dans K[X]",
    "domain": "Algèbre Fondamentale",
    "objectives": [
      "Maîtriser les formes algébrique, trigonométrique et exponentielle d'un nombre complexe, les formules d'Euler et de Moivre.",
      "Calculer les racines $n$-ièmes d'un nombre complexe, en particulier les racines de l'unité $\\mathbb{U}_n$.",
      "Démontrer l'existence et l'unicité de la division euclidienne dans $\\mathbb{K}[X]$ (avec $\\mathbb{K} = \\mathbb{R}$ ou $\\mathbb{C}$) ; utiliser PGCD, théorèmes de Bézout et de Gauss.",
      "Relier racines, multiplicité et dérivées ; factoriser dans $\\mathbb{C}[X]$ et $\\mathbb{R}[X]$ grâce au théorème de d'Alembert-Gauss.",
      "Décomposer une fraction rationnelle en éléments simples dans $\\mathbb{C}(X)$ et $\\mathbb{R}(X)$.",
      "Transposer cette arithmétique à $\\mathbb{Z}$ : algorithme d'Euclide, Bézout, Gauss, congruences et inverses modulo $n$, petit théorème de Fermat."
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
        "content": "Dans tout le chapitre, $\\mathbb{K}$ désigne $\\mathbb{R}$ ou $\\mathbb{C}$.\n• Pour $P, Q \\in \\mathbb{K}[X]$ : $\\deg(PQ) = \\deg P + \\deg Q$ et $\\deg(P + Q) \\le \\max(\\deg P, \\deg Q)$ (convention $\\deg 0 = -\\infty$).\n**Théorème** : pour $A, B \\in \\mathbb{K}[X]$ avec $B \\neq 0$, il existe un unique couple $(Q, R)$ tel que $A = BQ + R$ et $\\deg R < \\deg B$.\n**Démonstration.** Notons $m = \\deg B$ et $b$ le coefficient dominant de $B$.\n1. **Existence** (récurrence forte sur $\\deg A$). Si $\\deg A < m$, on prend $Q = 0$, $R = A$. Sinon, soient $n = \\deg A \\ge m$ et $a$ son coefficient dominant ; $A_1 = A - \\frac{a}{b}X^{n-m}B$ a un degré $< n$ (les termes de degré $n$ se compensent). Par hypothèse de récurrence, $A_1 = BQ_1 + R_1$ avec $\\deg R_1 < m$, d'où $A = B\\left(Q_1 + \\frac{a}{b}X^{n-m}\\right) + R_1$.\n2. **Unicité** : si $BQ + R = BQ' + R'$, alors $B(Q - Q') = R' - R$. Si $Q \\neq Q'$, le membre de gauche est de degré $\\ge m$, celui de droite de degré $< m$ : contradiction. Donc $Q = Q'$, puis $R = R'$.\n• **Exemple** : $X^3 + 2 = 1 \\cdot (X^3 - X) + (X + 2)$."
      },
      {
        "title": "4. Arithmétique dans K[X] : PGCD, Bézout, Gauss",
        "content": "• Le **PGCD** de $A$ et $B$ (non tous deux nuls) est le diviseur commun unitaire de degré maximal ; il s'obtient par l'**algorithme d'Euclide** (dernier reste non nul, rendu unitaire).\n• **Exemple** : $X^3 - 1 = X(X^2 - 1) + (X - 1)$ puis $X^2 - 1 = (X + 1)(X - 1) + 0$, donc $\\mathrm{PGCD}(X^3 - 1, X^2 - 1) = X - 1$.\n• **Bézout** : $A$ et $B$ sont premiers entre eux si et seulement s'il existe $U, V \\in \\mathbb{K}[X]$ tels que $AU + BV = 1$. Plus généralement, il existe $U$, $V$ avec $AU + BV = \\mathrm{PGCD}(A, B)$.\n• **Théorème de Gauss** : si $A$ divise $BC$ et si $A$ et $B$ sont premiers entre eux, alors $A$ divise $C$.\n**Démonstration.** Par Bézout, $AU + BV = 1$ ; en multipliant par $C$, $C = A(CU) + (BC)V$. Or $A$ divise $A(CU)$ et $A$ divise $BC$, donc $A$ divise $C$.\n• **Conséquence** : si $A$ et $B$ sont premiers entre eux et divisent $C$, alors $AB$ divise $C$."
      },
      {
        "title": "5. Racines, multiplicité, factorisation",
        "content": "• $a$ est **racine** de $P$ si et seulement si $(X - a)$ divise $P$ (reste de la division par $X - a$ : $P(a)$). Un polynôme non nul de degré $n$ a au plus $n$ racines.\n• $a$ est racine de **multiplicité** $m$ si $(X - a)^m$ divise $P$ mais pas $(X - a)^{m+1}$ ; cela équivaut à $P(a) = P'(a) = \\dots = P^{(m-1)}(a) = 0$ et $P^{(m)}(a) \\neq 0$.\n• **Racines multiples et PGCD** : soit $P \\in \\mathbb{C}[X]$ non constant. Si $a$ est racine de $P$ de multiplicité $m \\ge 1$, alors $a$ est racine de $P'$ de multiplicité exactement $m - 1$ : en écrivant $P = (X - a)^m Q$ avec $Q(a) \\neq 0$, on obtient $P' = (X - a)^{m-1}\\big(mQ + (X - a)Q'\\big)$, et $mQ(a) \\neq 0$. Le PGCD de deux polynômes scindés étant le produit des $(X - a)^k$, où $a$ parcourt leurs racines communes et $k$ est la plus petite des deux multiplicités, les racines de $\\mathrm{PGCD}(P, P')$ sont exactement les racines multiples de $P$, chacune avec sa multiplicité diminuée de $1$. En particulier, $P$ n'a que des racines simples si et seulement si $\\mathrm{PGCD}(P, P') = 1$.\n• **Exemple** : $P = X^4 - 2X^3 + 2X - 1$ a pour dérivée $P' = 4X^3 - 6X^2 + 2 = 2(X - 1)^2(2X + 1)$. Comme $P(1) = 0$ et $P\\left(-\\frac{1}{2}\\right) = \\frac{1}{16} + \\frac{1}{4} - 1 - 1 \\neq 0$, la racine $1$ de $P$ a une multiplicité $m$ telle que $m - 1 = 2$ : $\\mathrm{PGCD}(P, P') = (X - 1)^2$, $1$ est racine triple, et $P = (X - 1)^3(X + 1)$.\n• **Théorème de d'Alembert-Gauss** : tout polynôme non constant de $\\mathbb{C}[X]$ admet au moins une racine complexe. Par récurrence, tout $P \\in \\mathbb{C}[X]$ de degré $n \\ge 1$ est **scindé** : $P = \\lambda\\prod_j (X - z_j)^{m_j}$ avec $\\sum m_j = n$.\n• **Dans $\\mathbb{R}[X]$** : si $P$ est à coefficients réels, $P(\\bar{z}) = \\overline{P(z)}$, donc les racines non réelles vont par paires conjuguées de même multiplicité. Les irréductibles de $\\mathbb{R}[X]$ sont les polynômes de degré $1$ et ceux de degré $2$ à discriminant strictement négatif.\n• **Exemple** : $X^4 + 1 = (X^2 + 1)^2 - 2X^2 = (X^2 - \\sqrt{2}X + 1)(X^2 + \\sqrt{2}X + 1)$ dans $\\mathbb{R}[X]$.\n• **Identité de Sophie Germain** : $a^4 + 4b^4 = (a^2 + 2b^2)^2 - (2ab)^2 = (a^2 - 2ab + 2b^2)(a^2 + 2ab + 2b^2)$.\n• **Relations coefficients-racines** : si $P = a_n X^n + \\dots + a_1 X + a_0$ ($a_n \\neq 0$) est scindé, de racines $z_1, \\dots, z_n$ comptées avec multiplicité, alors $\\sum_{k=1}^n z_k = -\\frac{a_{n-1}}{a_n}$ et $\\prod_{k=1}^n z_k = (-1)^n\\frac{a_0}{a_n}$. Plus généralement, $\\sigma_k = \\sum_{i_1 < \\dots < i_k} z_{i_1} \\cdots z_{i_k} = (-1)^k\\frac{a_{n-k}}{a_n}$.\n• **Cas du degré $2$** : si $z_1$, $z_2$ sont les racines de $X^2 - sX + p$, alors $z_1 + z_2 = s$ et $z_1 z_2 = p$."
      },
      {
        "title": "6. Fractions rationnelles et décomposition en éléments simples",
        "content": "Soit $F = \\frac{N}{D}$ écrite sous **forme irréductible** ; les racines de $D$ sont les **pôles** de $F$.\n• **Partie entière** : le quotient $E$ de la division euclidienne de $N$ par $D$ ; $E = 0$ si $\\deg N < \\deg D$.\n• **Dans $\\mathbb{C}(X)$** : si $D = \\prod_i (X - a_i)^{m_i}$, alors $F = E + \\sum_i \\sum_{j=1}^{m_i} \\frac{\\lambda_{i,j}}{(X - a_i)^j}$, de manière unique.\n• **Dans $\\mathbb{R}(X)$** : aux pôles réels s'ajoutent, pour chaque facteur irréductible $(X^2 + pX + q)^k$ du dénominateur, des termes $\\frac{\\alpha_j X + \\beta_j}{(X^2 + pX + q)^j}$, $1 \\le j \\le k$.\n• **Pôle simple** : si $a$ est racine simple de $D$, le coefficient de $\\frac{1}{X - a}$ vaut $\\lambda = \\frac{N(a)}{D'(a)}$, ou encore la valeur en $a$ de $(X - a)F$.\n• **Pôle d'ordre $m$** : le coefficient de $\\frac{1}{(X - a)^m}$ est la valeur en $a$ de $(X - a)^m F$ ; les autres s'obtiennent par évaluation en des points particuliers, par parité ou par limite de $xF(x)$ en $+\\infty$.\n• **Exemple** : $\\frac{1}{X^2(X - 1)} = -\\frac{1}{X} - \\frac{1}{X^2} + \\frac{1}{X - 1}$ (coefficient de $\\frac{1}{X^2}$ : $-1$ ; de $\\frac{1}{X - 1}$ : $1$ ; la limite de $xF(x)$ en $+\\infty$, nulle, donne $-1$ pour $\\frac{1}{X}$)."
      },
      {
        "title": "7. Arithmétique dans Z : PGCD, Bézout, congruences",
        "content": "Les résultats de la section 4 ont leurs analogues dans $\\mathbb{Z}$, avec les mêmes démonstrations.\n• **Division euclidienne** : pour $a \\in \\mathbb{Z}$ et $b \\in \\mathbb{N}^*$, il existe un unique couple $(q, r) \\in \\mathbb{Z}^2$ tel que $a = bq + r$ et $0 \\le r < b$ (on prend $q = \\left\\lfloor \\frac{a}{b} \\right\\rfloor$).\n• **PGCD et algorithme d'Euclide** : $\\mathrm{pgcd}(a, b) = \\mathrm{pgcd}(b, r)$, donc le PGCD est le dernier reste non nul. **Exemple** : $84 = 1 \\times 60 + 24$, $60 = 2 \\times 24 + 12$, $24 = 2 \\times 12$, donc $\\mathrm{pgcd}(84, 60) = 12$ ; en remontant les calculs, $12 = 60 - 2 \\times 24 = 60 - 2(84 - 60) = 3 \\times 60 - 2 \\times 84$.\n• **Bézout** : $a$ et $b$ sont premiers entre eux si et seulement s'il existe $u, v \\in \\mathbb{Z}$ tels que $au + bv = 1$ ; en général, il existe $u, v$ tels que $au + bv = \\mathrm{pgcd}(a, b)$. **Gauss** : si $a \\mid bc$ et $\\mathrm{pgcd}(a, b) = 1$, alors $a \\mid c$. **Lemme d'Euclide** : si un nombre premier $p$ divise $bc$, il divise $b$ ou $c$ ; on en déduit l'unicité de la décomposition d'un entier $n \\ge 2$ en produit de nombres premiers.\n• **Congruences** : $a \\equiv b \\ [n]$ si $n \\mid a - b$. C'est une relation d'équivalence (chapitre L1-LOG, section 5), compatible avec l'addition et la multiplication, ce qui définit ces deux opérations sur $\\mathbb{Z}/n\\mathbb{Z}$. **Inversibles** : $\\bar{a}$ est inversible dans $\\mathbb{Z}/n\\mathbb{Z}$ si et seulement si $\\mathrm{pgcd}(a, n) = 1$, et si $au + nv = 1$, son inverse est $\\bar{u}$. Si $p$ est premier, $\\mathbb{Z}/p\\mathbb{Z}$ est donc un corps. **Exemple** : $5 \\times (-5) + 26 \\times 1 = 1$, donc l'inverse de $\\bar{5}$ dans $\\mathbb{Z}/26\\mathbb{Z}$ est $\\overline{-5} = \\overline{21}$ (contrôle : $5 \\times 21 = 105 = 4 \\times 26 + 1$).\n\n**Petit théorème de Fermat** : si $p$ est premier et si $p$ ne divise pas $a$, alors $a^{p-1} \\equiv 1 \\ [p]$.\n**Démonstration.** Les $p - 1$ entiers $a, 2a, \\dots, (p - 1)a$ ne sont pas divisibles par $p$ (lemme d'Euclide) et sont deux à deux non congrus modulo $p$ : si $ia \\equiv ja \\ [p]$ avec $1 \\le j \\le i \\le p - 1$, alors $p \\mid (i - j)a$, donc $p \\mid i - j$, d'où $i = j$. Leurs restes sont donc $1, 2, \\dots, p - 1$ dans un autre ordre. En faisant le produit, $a^{p-1}(p - 1)! \\equiv (p - 1)! \\ [p]$ ; comme $(p - 1)!$ est premier avec $p$, le théorème de Gauss permet de simplifier : $a^{p-1} \\equiv 1 \\ [p]$.\n• **Lemme chinois** : si $\\mathrm{pgcd}(m, n) = 1$, le système $x \\equiv a \\ [m]$, $x \\equiv b \\ [n]$ admet des solutions, qui forment exactement une classe modulo $mn$. Si $mu + nv = 1$, l'entier $x_0 = bmu + anv$ convient. **Exemple** : pour $x \\equiv 2 \\ [3]$ et $x \\equiv 3 \\ [5]$, on a $3 \\times 2 + 5 \\times (-1) = 1$, puis $x_0 = 3 \\times 3 \\times 2 + 2 \\times 5 \\times (-1) = 8$ : les solutions sont les entiers $x \\equiv 8 \\ [15]$."
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
      "Connaître la dérivabilité, les théorèmes de Rolle et des accroissements finis (démontrés au chapitre L1-TAY).",
      "Définir la limite épointée, les limites à gauche et à droite, les limites en $\\pm\\infty$ et les limites infinies.",
      "Définir $\\arcsin$, $\\arccos$, $\\arctan$ par le théorème de la bijection, connaître leurs domaines et leurs dérivées ; connaître les fonctions hyperboliques $\\cosh$, $\\sinh$, $\\tanh$.",
      "Définir la convexité, la caractériser par $f'$ ou $f''$ et en déduire des inégalités (position par rapport aux tangentes, inégalité de Jensen)."
    ],
    "keyPoints": [
      {
        "title": "1. Limites et caractérisation séquentielle",
        "content": "Soit $f : I \\to \\mathbb{R}$ et $x_0$ un point de $I$ ou une extrémité de $I$.\n• $f(x) \\to \\ell$ quand $x \\to x_0$ si $\\forall \\varepsilon > 0,\\ \\exists \\delta > 0,\\ \\forall x \\in I,\\ |x - x_0| \\le \\delta \\implies |f(x) - \\ell| \\le \\varepsilon$. La limite, si elle existe, est unique ; si $x_0 \\in I$, elle ne peut être que $f(x_0)$ (prendre $x = x_0$).\n• **Limite épointée** : lorsque $f$ n'est pas définie en $x_0$, ou que l'on ne veut pas tenir compte de $f(x_0)$, on exclut ce point : $\\forall \\varepsilon > 0,\\ \\exists \\delta > 0,\\ \\forall x \\in I \\setminus \\{x_0\\},\\ |x - x_0| \\le \\delta \\implies |f(x) - \\ell| \\le \\varepsilon$. C'est cette limite qui intervient pour $\\frac{\\sin x}{x}$ en $0$, pour le taux d'accroissement et pour le quotient $\\frac{f'}{g'}$ de la règle de L'Hôpital.\n• **À gauche et à droite** : $f$ a pour limite $\\ell$ **à droite** de $x_0$, noté $\\lim_{x \\to x_0^+} f(x) = \\ell$, si $\\forall \\varepsilon > 0,\\ \\exists \\delta > 0,\\ \\forall x \\in I,\\ x_0 < x \\le x_0 + \\delta \\implies |f(x) - \\ell| \\le \\varepsilon$. **À gauche** ($x_0^-$), on remplace la condition par $x_0 - \\delta \\le x < x_0$. Si $x_0$ est intérieur à $I$, la limite épointée en $x_0$ existe et vaut $\\ell$ si et seulement si les limites à gauche et à droite existent et valent $\\ell$. Exemple : $\\lfloor x \\rfloor$ a pour limite $0$ à gauche de $1$ et $1$ à droite de $1$.\n• **Limite finie en $\\pm\\infty$** : si $I$ n'est pas majoré, $f(x) \\to \\ell$ quand $x \\to +\\infty$ si $\\forall \\varepsilon > 0,\\ \\exists A \\in \\mathbb{R},\\ \\forall x \\in I,\\ x \\ge A \\implies |f(x) - \\ell| \\le \\varepsilon$. En $-\\infty$, si $I$ n'est pas minoré, on remplace $x \\ge A$ par $x \\le A$.\n• **Limites infinies** : $f(x) \\to +\\infty$ quand $x \\to x_0$ (limite épointée) si $\\forall M \\in \\mathbb{R},\\ \\exists \\delta > 0,\\ \\forall x \\in I \\setminus \\{x_0\\},\\ |x - x_0| \\le \\delta \\implies f(x) \\ge M$ ; $f(x) \\to +\\infty$ quand $x \\to +\\infty$ si $\\forall M \\in \\mathbb{R},\\ \\exists A \\in \\mathbb{R},\\ \\forall x \\in I,\\ x \\ge A \\implies f(x) \\ge M$. Pour $-\\infty$, on remplace $f(x) \\ge M$ par $f(x) \\le M$. Exemple : $\\frac{1}{x} \\to +\\infty$ en $0^+$ et $\\frac{1}{x} \\to -\\infty$ en $0^-$, donc $\\frac{1}{x}$ n'a pas de limite épointée en $0$.\n• **Caractérisation séquentielle** : $f(x) \\to \\ell$ en $x_0$ si et seulement si, pour toute suite $(x_n)$ de $I$ tendant vers $x_0$, $f(x_n) \\to \\ell$. Elle reste vraie si $x_0$ ou $\\ell$ vaut $\\pm\\infty$ ; pour une limite épointée, on se limite aux suites telles que $x_n \\neq x_0$ pour tout $n$.\n• **Usage** : pour montrer qu'une limite n'existe pas, on exhibe deux suites tendant vers $x_0$ dont les images ont des limites différentes.\n• **Opérations** : somme, produit, quotient (limite du dénominateur non nulle), composition (pour des limites épointées, on suppose de plus $g$ continue au point limite $y_0$, ou $f(x) \\neq y_0$ près de $x_0$) ; théorème d'encadrement ; limite monotone (une fonction croissante sur $]a ; b[$ a une limite à gauche en $b$, finie si elle est majorée, égale à $+\\infty$ sinon). Les règles s'étendent aux limites infinies, sauf dans les formes indéterminées $\\infty - \\infty$, $0 \\times \\infty$, $\\frac{0}{0}$ et $\\frac{\\infty}{\\infty}$."
      },
      {
        "title": "2. Continuité",
        "content": "• $f$ est **continue en $x_0 \\in I$** si $f(x) \\to f(x_0)$ quand $x \\to x_0$, soit : $\\forall \\varepsilon > 0,\\ \\exists \\delta > 0,\\ \\forall x \\in I,\\ |x - x_0| \\le \\delta \\implies |f(x) - f(x_0)| \\le \\varepsilon$.\n• De façon équivalente : pour toute suite $x_n \\to x_0$ dans $I$, $f(x_n) \\to f(x_0)$.\n• Sommes, produits, quotients (dénominateur non nul) et composées de fonctions continues sont continues ; les fonctions usuelles sont continues sur leur domaine.\n• **Prolongement par continuité** : si $f$ est définie sur $I \\setminus \\{x_0\\}$ et a une limite épointée finie $\\ell$ en $x_0$, on la prolonge en posant $f(x_0) = \\ell$. Exemple : $\\frac{\\sin x}{x}$ se prolonge par $1$ en $0$.\n• **Exemple** : $x \\mapsto \\lfloor x \\rfloor$ est continue sur $\\mathbb{R} \\setminus \\mathbb{Z}$ et discontinue en tout entier."
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
        "content": "• $f$ est **dérivable en $x_0$** si $\\frac{f(x) - f(x_0)}{x - x_0}$ a une limite finie $f'(x_0)$ quand $x \\to x_0$ avec $x \\neq x_0$ (limite épointée) ; de façon équivalente, $f(x) = f(x_0) + f'(x_0)(x - x_0) + o(x - x_0)$. Dérivable implique continue.\n• **Opérations** : $(fg)' = f'g + fg'$, $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$, $(g \\circ f)' = (g' \\circ f) \\cdot f'$, et $(f^{-1})'(y) = \\frac{1}{f'(f^{-1}(y))}$ si $f'(f^{-1}(y)) \\neq 0$.\n• **Extremum** : en un extremum local intérieur où $f$ est dérivable, $f'$ s'annule (la réciproque est fausse : $x^3$ en $0$).\n• **Rolle** : $f$ continue sur $[a ; b]$, dérivable sur $]a ; b[$, $f(a) = f(b)$ $\\implies \\exists c \\in\\, ]a ; b[,\\ f'(c) = 0$. Ce théorème et le suivant sont démontrés au chapitre L1-TAY (section 1) à partir des sections 4 et 6 ci-dessus ; on les utilise dès maintenant, notamment pour démontrer la règle de L'Hôpital.\n• **Accroissements finis** : $f$ continue sur $[a ; b]$, dérivable sur $]a ; b[$ $\\implies \\exists c \\in\\, ]a ; b[,\\ f(b) - f(a) = f'(c)(b - a)$ ; si $|f'| \\le M$, alors $|f(b) - f(a)| \\le M|b - a|$."
      },
      {
        "title": "7. Règle de L'Hôpital (forme indéterminée $\\frac{0}{0}$)",
        "content": "**Théorème** : soient $I$ un intervalle, $x_0 \\in I$ et $f, g$ continues sur $I$, dérivables sur $I \\setminus \\{x_0\\}$, avec $f(x_0) = g(x_0) = 0$ et $g'$ ne s'annulant pas sur $I \\setminus \\{x_0\\}$. Si $\\frac{f'(x)}{g'(x)}$ a une limite $\\ell$ (finie ou infinie) quand $x \\to x_0$ avec $x \\neq x_0$, alors $\\frac{f(x)}{g(x)} \\to \\ell$ quand $x \\to x_0$ avec $x \\neq x_0$.\n**Démonstration.** Soit $x \\in I$ avec $x \\neq x_0$.\n1. $g(x) \\neq 0$ : sinon le théorème de Rolle donnerait un zéro de $g'$ strictement entre $x_0$ et $x$.\n2. La fonction $h : t \\mapsto f(t)g(x) - g(t)f(x)$ vérifie $h(x_0) = h(x) = 0$. Par Rolle, il existe $c_x$ strictement entre $x_0$ et $x$ tel que $h'(c_x) = 0$, soit $\\frac{f(x)}{g(x)} = \\frac{f'(c_x)}{g'(c_x)}$.\n3. Quand $x \\to x_0$, on a $c_x \\to x_0$ avec $c_x \\neq x_0$, d'où la limite $\\ell$.\n• **À vérifier avant d'appliquer** : la forme $\\frac{0}{0}$ en $x_0$, la dérivabilité, la non-annulation de $g'$ au voisinage de $x_0$ (sauf peut-être en $x_0$), et l'existence de la limite de $\\frac{f'}{g'}$.\n• **Exemple** : pour $\\lim_{x \\to 0} \\frac{\\ln(1 + x) - x}{x^2}$, le quotient des dérivées vaut $\\frac{-1}{2(1 + x)}$ et tend vers $-\\frac{1}{2}$ : la limite cherchée est $-\\frac{1}{2}$.\n• **La réciproque est fausse** : avec $f(x) = x^2\\sin\\frac{1}{x}$ pour $x \\neq 0$, $f(0) = 0$ et $g(x) = x$, on a $\\frac{f(x)}{g(x)} = x\\sin\\frac{1}{x} \\to 0$ en $0$, alors que $\\frac{f'(x)}{g'(x)} = 2x\\sin\\frac{1}{x} - \\cos\\frac{1}{x}$ n'a pas de limite en $0$. Si $\\frac{f'}{g'}$ n'a pas de limite, la règle ne permet de rien conclure."
      },
      {
        "title": "8. Fonctions trigonométriques réciproques",
        "content": "Ces fonctions s'obtiennent en restreignant $\\sin$, $\\cos$ et $\\tan$ à un intervalle où elles sont strictement monotones, puis en appliquant le théorème de la bijection (section 3) et la formule $(f^{-1})'(y) = \\frac{1}{f'(f^{-1}(y))}$ (section 6).\n• **Arc sinus** : $\\sin$ est continue et strictement croissante sur $\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$, avec $\\sin\\left(-\\frac{\\pi}{2}\\right) = -1$ et $\\sin\\frac{\\pi}{2} = 1$. Sa réciproque $\\arcsin : [-1 ; 1] \\to \\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$ est continue, strictement croissante et impaire : pour $y \\in [-1 ; 1]$, $\\arcsin y$ est l'unique $\\theta \\in \\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$ tel que $\\sin\\theta = y$.\n• **Dérivée de $\\arcsin$** : pour $y \\in\\, ]-1 ; 1[$, $\\theta = \\arcsin y \\in \\left]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right[$, donc $\\cos\\theta > 0$ et $\\cos\\theta = \\sqrt{1 - \\sin^2\\theta} = \\sqrt{1 - y^2}$. Ainsi $\\arcsin'(y) = \\frac{1}{\\cos(\\arcsin y)} = \\frac{1}{\\sqrt{1 - y^2}}$. En $\\pm 1$, $\\sin' = \\cos$ s'annule : $\\arcsin$ n'y est pas dérivable (tangente verticale).\n• **Arc cosinus** : $\\cos$ est continue et strictement décroissante sur $[0 ; \\pi]$, de $1$ à $-1$. Sa réciproque $\\arccos : [-1 ; 1] \\to [0 ; \\pi]$ est continue, strictement décroissante, dérivable sur $]-1 ; 1[$ avec $\\arccos'(y) = -\\frac{1}{\\sqrt{1 - y^2}}$ (car $\\sin(\\arccos y) = \\sqrt{1 - y^2}$, le sinus étant positif sur $[0 ; \\pi]$). La somme $\\arcsin + \\arccos$ a une dérivée nulle sur $]-1 ; 1[$, vaut $\\frac{\\pi}{2}$ en $0$ et est continue sur $[-1 ; 1]$ : $\\arcsin y + \\arccos y = \\frac{\\pi}{2}$ pour tout $y \\in [-1 ; 1]$.\n• **Arc tangente** : $\\tan$ est continue et strictement croissante sur $\\left]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right[$, de limites $-\\infty$ et $+\\infty$ aux bornes. Sa réciproque $\\arctan : \\mathbb{R} \\to \\left]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right[$ est continue, strictement croissante, impaire, de limites $-\\frac{\\pi}{2}$ en $-\\infty$ et $\\frac{\\pi}{2}$ en $+\\infty$. Comme $\\tan' = 1 + \\tan^2$ ne s'annule pas, $\\arctan$ est dérivable sur $\\mathbb{R}$ et $\\arctan'(y) = \\frac{1}{1 + \\tan^2(\\arctan y)} = \\frac{1}{1 + y^2}$.\n• **Valeurs remarquables** : $\\arcsin\\frac{1}{2} = \\frac{\\pi}{6}$, $\\arcsin\\frac{\\sqrt{2}}{2} = \\frac{\\pi}{4}$, $\\arcsin\\frac{\\sqrt{3}}{2} = \\frac{\\pi}{3}$ ; $\\arccos\\frac{1}{2} = \\frac{\\pi}{3}$, $\\arccos 0 = \\frac{\\pi}{2}$, $\\arccos(-1) = \\pi$ ; $\\arctan\\frac{\\sqrt{3}}{3} = \\frac{\\pi}{6}$, $\\arctan 1 = \\frac{\\pi}{4}$, $\\arctan\\sqrt{3} = \\frac{\\pi}{3}$.\n• **Attention aux composées** : $\\sin(\\arcsin y) = y$ pour tout $y \\in [-1 ; 1]$, mais $\\arcsin(\\sin x) = x$ seulement si $x \\in \\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$. Par exemple $\\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right) = \\arcsin\\frac{1}{2} = \\frac{\\pi}{6}$.\n• **Exemple** : $\\varphi(x) = \\arctan x + \\arctan\\frac{1}{x}$ a une dérivée nulle sur $]0 ; +\\infty[$ et sur $]-\\infty ; 0[$ : $\\varphi'(x) = \\frac{1}{1 + x^2} - \\frac{1}{x^2} \\cdot \\frac{1}{1 + \\frac{1}{x^2}} = 0$. Ces deux ensembles sont des intervalles, donc $\\varphi$ est constante sur chacun : $\\varphi = \\varphi(1) = \\frac{\\pi}{2}$ sur $]0 ; +\\infty[$ et, par imparité, $\\varphi = -\\frac{\\pi}{2}$ sur $]-\\infty ; 0[$.\n• **Usage** : ces dérivées donnent les primitives $\\int \\frac{dx}{1 + x^2} = \\arctan x$ et $\\int \\frac{dx}{\\sqrt{1 - x^2}} = \\arcsin x$ (chapitre L1-INT), et le DL de $\\arctan$ s'obtient en primitivant celui de $\\frac{1}{1 + x^2}$ (chapitre L1-TAY)."
      },
      {
        "title": "9. Fonctions hyperboliques",
        "content": "• **Définitions** : pour $x \\in \\mathbb{R}$, $\\cosh x = \\frac{e^x + e^{-x}}{2}$ et $\\sinh x = \\frac{e^x - e^{-x}}{2}$ (parties paire et impaire de $\\exp$ : $e^x = \\cosh x + \\sinh x$). On pose $\\tanh x = \\frac{\\sinh x}{\\cosh x}$.\n• **Propriétés** : $\\cosh$ est paire, $\\sinh$ et $\\tanh$ sont impaires ; $\\cosh' = \\sinh$, $\\sinh' = \\cosh$ et $\\tanh' = \\frac{1}{\\cosh^2} = 1 - \\tanh^2$. Pour tout réel $x$, $\\cosh^2 x - \\sinh^2 x = 1$ (développer les carrés) et $\\cosh x \\ge 1$.\n• **Variations** : $\\sinh' = \\cosh > 0$, donc $\\sinh$ est strictement croissante, de limites $\\mp\\infty$ en $\\mp\\infty$ : c'est une bijection de $\\mathbb{R}$ sur $\\mathbb{R}$. $\\cosh$ est strictement décroissante sur $]-\\infty ; 0]$, strictement croissante sur $[0 ; +\\infty[$, de minimum $\\cosh 0 = 1$. $\\tanh$ est une bijection strictement croissante de $\\mathbb{R}$ sur $]-1 ; 1[$.\n• **Réciproque de $\\sinh$** : pour $y \\in \\mathbb{R}$, l'équation $\\sinh x = y$ s'écrit, avec $X = e^x > 0$, $X^2 - 2yX - 1 = 0$. Le produit des racines vaut $-1$ : une seule est positive, $X = y + \\sqrt{y^2 + 1}$. Donc $\\sinh^{-1}(y) = \\ln\\left(y + \\sqrt{y^2 + 1}\\right)$, de dérivée $\\frac{1}{\\sqrt{y^2 + 1}}$.\n• **Géométrie** : comme $\\cosh^2 t - \\sinh^2 t = 1$ et $\\cosh t \\ge 1$, le point $(\\cosh t, \\sinh t)$ décrit la branche $x > 0$ de l'hyperbole $x^2 - y^2 = 1$ (voir le paramétrage des coniques, chapitre L1-GEO)."
      },
      {
        "title": "10. Fonctions convexes",
        "content": "Soit $f$ définie sur un intervalle $I$.\n• **Définition** : $f$ est **convexe** sur $I$ si $\\forall x, y \\in I,\\ \\forall t \\in [0 ; 1],\\ f\\big(tx + (1 - t)y\\big) \\le t f(x) + (1 - t) f(y)$ : entre deux points, la courbe est **sous la corde** qui les joint. $f$ est **concave** si $-f$ est convexe.\n• **Inégalité des pentes** : $f$ est convexe si et seulement si, pour tous $x < y < z$ dans $I$,\n$$\\frac{f(y) - f(x)}{y - x} \\le \\frac{f(z) - f(x)}{z - x} \\le \\frac{f(z) - f(y)}{z - y}.$$\n• **Caractérisation par la dérivée** : si $f$ est dérivable sur $I$, $f$ est convexe si et seulement si $f'$ est croissante sur $I$ (conséquence de l'inégalité des pentes et des accroissements finis) ; si $f$ est deux fois dérivable sur $I$, si et seulement si $f'' \\ge 0$ sur $I$.\n• **Position par rapport aux tangentes** : si $f$ est convexe et dérivable sur $I$, sa courbe est **au-dessus de chacune de ses tangentes** : $\\forall a, x \\in I,\\ f(x) \\ge f(a) + f'(a)(x - a)$.\n**Démonstration.** Pour $x > a$, le théorème des accroissements finis donne $c \\in\\, ]a ; x[$ tel que $f(x) - f(a) = f'(c)(x - a)$, et $f'(c) \\ge f'(a)$ car $f'$ est croissante. Pour $x < a$, il donne $c \\in\\, ]x ; a[$ avec $f'(c) \\le f'(a)$ et $x - a < 0$, donc encore $f'(c)(x - a) \\ge f'(a)(x - a)$.\n• **Inégalité de Jensen** : si $f$ est convexe sur $I$, $x_1, \\dots, x_n \\in I$ et $\\lambda_1, \\dots, \\lambda_n \\ge 0$ de somme $1$, alors $f\\left(\\sum_{k=1}^n \\lambda_k x_k\\right) \\le \\sum_{k=1}^n \\lambda_k f(x_k)$ (récurrence sur $n$).\n• **Inégalités classiques** : $\\exp$ est convexe ($\\exp'' = \\exp > 0$), donc $e^x \\ge 1 + x$ pour tout réel $x$ (tangente en $0$) ; $\\ln$ est concave ($\\ln''(x) = -\\frac{1}{x^2} < 0$), donc $\\ln(1 + x) \\le x$ pour tout $x > -1$ ; $\\sin$ est concave sur $\\left[0 ; \\frac{\\pi}{2}\\right]$, donc sa courbe est au-dessus de la corde joignant $(0, 0)$ à $\\left(\\frac{\\pi}{2}, 1\\right)$ : $\\sin x \\ge \\frac{2}{\\pi}x$ sur $\\left[0 ; \\frac{\\pi}{2}\\right]$.\n• **Exemple (inégalité arithmético-géométrique)** : pour $a_1, \\dots, a_n > 0$, l'inégalité de Jensen appliquée à la fonction concave $\\ln$ donne $\\ln\\left(\\frac{a_1 + \\dots + a_n}{n}\\right) \\ge \\frac{1}{n}\\sum_{k=1}^n \\ln a_k$, soit $\\sqrt[n]{a_1 a_2 \\cdots a_n} \\le \\frac{a_1 + a_2 + \\dots + a_n}{n}$."
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
      "Continue sur $I$ n'implique pas uniformément continue sur $I$ : $x^2$ sur $\\mathbb{R}$, ou $\\frac{1}{x}$ sur $]0 ; 1]$.",
      "Limite et limite épointée diffèrent quand $f(x_0)$ joue un rôle : si $f$ vaut $0$ partout sauf $f(0) = 1$, sa limite épointée en $0$ vaut $0$, mais $f$ n'a pas de limite en $0$ au sens où $x = 0$ est autorisé.",
      "$\\arcsin(\\sin x) = x$ et $\\arctan(\\tan x) = x$ ne valent que pour $x$ dans l'intervalle image de la réciproque : $\\arctan\\left(\\tan\\frac{3\\pi}{4}\\right) = \\arctan(-1) = -\\frac{\\pi}{4}$, et non $\\frac{3\\pi}{4}$."
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
      },
      {
        "q": "Écrire avec des quantificateurs $\\lim_{x \\to +\\infty} f(x) = +\\infty$.",
        "a": "$\\forall M \\in \\mathbb{R},\\ \\exists A \\in \\mathbb{R},\\ \\forall x \\in I,\\ x \\ge A \\implies f(x) \\ge M$."
      },
      {
        "q": "Comment relier la limite épointée en un point intérieur aux limites latérales ?",
        "a": "Elle existe et vaut $\\ell$ si et seulement si les limites à gauche et à droite en ce point existent et valent $\\ell$."
      },
      {
        "q": "Donner l'ensemble de départ, l'ensemble d'arrivée et la dérivée de $\\arcsin$, $\\arccos$ et $\\arctan$.",
        "a": "$\\arcsin : [-1 ; 1] \\to \\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$ et $\\arccos : [-1 ; 1] \\to [0 ; \\pi]$, dérivables sur $]-1 ; 1[$ de dérivées $\\frac{1}{\\sqrt{1 - x^2}}$ et $-\\frac{1}{\\sqrt{1 - x^2}}$ ; $\\arctan : \\mathbb{R} \\to \\left]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right[$, de dérivée $\\frac{1}{1 + x^2}$."
      },
      {
        "q": "Définir $\\cosh$ et $\\sinh$ et donner la relation qui les lie.",
        "a": "$\\cosh x = \\frac{e^x + e^{-x}}{2}$, $\\sinh x = \\frac{e^x - e^{-x}}{2}$ ; $\\cosh' = \\sinh$, $\\sinh' = \\cosh$ et $\\cosh^2 x - \\sinh^2 x = 1$."
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
      "Réduire une équation du second degré sans terme en $xy$ et en déduire la nature et les éléments de la conique.",
      "Définir le barycentre d'un système de points pondérés et utiliser ses propriétés (coordonnées, associativité).",
      "Traduire translations, homothéties, rotations et similitudes directes par une écriture complexe $z' = az + b$."
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
        "content": "• **Ellipse** $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, $a > b > 0$ : $c^2 = a^2 - b^2$, foyers $(\\pm c, 0)$, directrices $x = \\pm\\frac{a^2}{c}$, sommets $(\\pm a, 0)$ et $(0, \\pm b)$, $e = \\frac{c}{a}$. **Définition bifocale** : $MF + MF' = 2a$. Paramétrage : $(a\\cos t, b\\sin t)$.\n• **Hyperbole** $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ : $c^2 = a^2 + b^2$, foyers $(\\pm c, 0)$, directrices $x = \\pm\\frac{a^2}{c}$, sommets $(\\pm a, 0)$, asymptotes $y = \\pm\\frac{b}{a}x$, $e = \\frac{c}{a} > 1$. **Définition bifocale** : $|MF - MF'| = 2a$. Paramétrage d'une branche : $(a\\cosh t, b\\sinh t)$.\n• **Parabole** $y^2 = 2px$ : foyer $\\left(\\frac{p}{2}, 0\\right)$, directrice $x = -\\frac{p}{2}$, sommet $O$, $e = 1$.\n• **Équation polaire** : on place l'origine au foyer $F$ et l'on note $d > 0$ la distance de $F$ à la directrice associée $\\mathcal{D}$ ; le **paramètre** de la conique est $p = ed$. Si $\\mathcal{D}$ a pour équation $x = d$ (directrice à droite du foyer) et si $M$ est du côté de $F$, alors $MF = e\\,d(M, \\mathcal{D})$ s'écrit $r = e(d - r\\cos\\theta)$, soit $r = \\frac{p}{1 + e\\cos\\theta}$. Si $\\mathcal{D} : x = -d$ (directrice à gauche, comme pour la parabole $y^2 = 2px$ ci-dessus), on obtient $r = \\frac{p}{1 - e\\cos\\theta}$. Plus généralement, si $\\theta_0$ est l'angle polaire de la direction allant de $F$ vers $\\mathcal{D}$ perpendiculairement à $\\mathcal{D}$ : $r = \\frac{p}{1 + e\\cos(\\theta - \\theta_0)}$. Pour l'ellipse et l'hyperbole, $p = \\frac{b^2}{a}$ ; pour la parabole, $p$ est le paramètre de l'équation réduite $y^2 = 2px$. Pour l'hyperbole, on décrit ainsi, avec $r > 0$, la branche située du côté de $F$."
      },
      {
        "title": "6. Réduction d'une équation du second degré sans terme en xy",
        "content": "Pour $Ax^2 + Cy^2 + Dx + Ey + F = 0$ avec $(A, C) \\neq (0, 0)$, on complète les carrés pour se ramener à une équation réduite dans un repère translaté.\n• $AC > 0$ : ellipse (éventuellement cercle), un point ou l'ensemble vide.\n• $AC < 0$ : hyperbole ou réunion de deux droites sécantes.\n• $AC = 0$ : parabole, deux droites parallèles, une droite ou l'ensemble vide.\n• **Exemple** : $x^2 + 4y^2 - 2x + 8y + 1 = 0 \\iff (x - 1)^2 + 4(y + 1)^2 = 4 \\iff \\frac{(x - 1)^2}{4} + (y + 1)^2 = 1$ : ellipse de centre $(1, -1)$, $a = 2$, $b = 1$, $c = \\sqrt{3}$, foyers $(1 \\pm \\sqrt{3}, -1)$, $e = \\frac{\\sqrt{3}}{2}$."
      },
      {
        "title": "7. Barycentres",
        "content": "Soient $A_1, \\dots, A_n$ des points du plan et $\\alpha_1, \\dots, \\alpha_n$ des réels de somme $S = \\sum_i \\alpha_i \\neq 0$.\n\n**Théorème** : il existe un unique point $G$ tel que $\\sum_i \\alpha_i \\overrightarrow{GA_i} = \\vec{0}$. C'est le **barycentre** du système $(A_i, \\alpha_i)$ ; si tous les coefficients sont égaux, on parle d'**isobarycentre**.\n**Démonstration.** Pour un point $O$ fixé, la relation de Chasles donne $\\sum_i \\alpha_i \\overrightarrow{GA_i} = S\\,\\overrightarrow{GO} + \\sum_i \\alpha_i \\overrightarrow{OA_i}$. Cette somme est nulle si et seulement si $\\overrightarrow{OG} = \\frac{1}{S}\\sum_i \\alpha_i \\overrightarrow{OA_i}$, ce qui détermine $G$ de façon unique.\n• **Réduction** : pour tout point $M$, $\\sum_i \\alpha_i \\overrightarrow{MA_i} = S\\,\\overrightarrow{MG}$.\n• **Coordonnées** : dans un repère, $x_G = \\frac{1}{S}\\sum_i \\alpha_i x_i$ et $y_G = \\frac{1}{S}\\sum_i \\alpha_i y_i$.\n• **Deux points** : le barycentre de $(A, a)$ et $(B, b)$, avec $a + b \\neq 0$, vérifie $\\overrightarrow{AG} = \\frac{b}{a + b}\\overrightarrow{AB}$ ; il appartient à la droite $(AB)$.\n• **Homogénéité** : multiplier tous les coefficients par un même réel non nul ne change pas $G$. **Associativité** : si $\\alpha_1 + \\alpha_2 \\neq 0$, on peut remplacer $(A_1, \\alpha_1)$ et $(A_2, \\alpha_2)$ par $(G', \\alpha_1 + \\alpha_2)$, où $G'$ est leur barycentre.\n• **Exemple** : le centre de gravité $G$ du triangle $ABC$ est son isobarycentre. Par associativité, c'est le barycentre de $(A, 1)$ et $(I, 2)$, où $I$ est le milieu de $[BC]$ : $\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AI}$, et les trois médianes sont concourantes en $G$."
      },
      {
        "title": "8. Nombres complexes et transformations du plan",
        "content": "On identifie le plan muni d'un repère orthonormé direct à $\\mathbb{C}$ : le point $M(x ; y)$ a pour affixe $z = x + iy$ (nombres complexes : chapitre L1-CMP). Si $A$ et $B$ ont pour affixes $a$ et $b$, alors $AB = |b - a|$.\n• **Quotient et angle** : pour $A$, $B$, $C$ distincts, $\\frac{c - a}{b - a} = \\frac{AC}{AB}\\,e^{i\\theta}$, où $\\theta$ est une mesure de l'angle orienté $(\\overrightarrow{AB}, \\overrightarrow{AC})$. Ainsi $ABC$ est équilatéral si et seulement si $\\frac{c - a}{b - a} = e^{i\\pi/3}$ ou $e^{-i\\pi/3}$.\n• **Translation** de vecteur $\\vec{w}$ d'affixe $b$ : $z' = z + b$.\n• **Homothétie** de centre $\\Omega(\\omega)$ et de rapport $k \\in \\mathbb{R}^*$ : $z' - \\omega = k(z - \\omega)$.\n• **Rotation** de centre $\\Omega(\\omega)$ et d'angle $\\theta$ : $z' - \\omega = e^{i\\theta}(z - \\omega)$.\n• **Similitude directe** $z' = az + b$, avec $a \\in \\mathbb{C}^*$. Si $a = 1$, c'est une translation. Si $a \\neq 1$, elle a un unique point fixe, d'affixe $\\omega = \\frac{b}{1 - a}$, et s'écrit $z' - \\omega = a(z - \\omega)$ : c'est la composée de la rotation de centre $\\Omega$ et d'angle $\\arg a$ et de l'homothétie de centre $\\Omega$ et de rapport $|a|$ (ces deux transformations commutent). Elle multiplie les distances par $|a|$ et conserve les angles orientés.\n• **Exemple** : $z' = 2iz + 1$. Ici $|2i| = 2$, $\\arg(2i) = \\frac{\\pi}{2}$ et $\\omega = \\frac{1}{1 - 2i} = \\frac{1 + 2i}{5}$ : c'est la similitude de centre $\\Omega\\left(\\frac{1}{5} ; \\frac{2}{5}\\right)$, de rapport $2$ et d'angle $\\frac{\\pi}{2}$."
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
        "q": "Coordonnées du barycentre de $(A, a)$ et $(B, b)$ avec $a + b \\neq 0$ ?",
        "a": "$x_G = \\dfrac{a x_A + b x_B}{a + b}$ et $y_G = \\dfrac{a y_A + b y_B}{a + b}$."
      },
      {
        "q": "Définition bifocale de l'ellipse ?",
        "a": "Ensemble des points $M$ tels que $MF + MF' = 2a$, avec $2a > FF'$."
      },
      {
        "q": "Écriture complexe de la rotation de centre $\\Omega(\\omega)$ et d'angle $\\theta$ ?",
        "a": "$z' - \\omega = e^{i\\theta}(z - \\omega)$."
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
      "id": "L1-LOG-1b",
      "tier": 1,
      "type": "mcq",
      "title": "Complémentaire d'une réunion",
      "skill": "Appliquer les lois de De Morgan sur un exemple fini",
      "statement": "Dans $E = \\{1, 2, 3, 4, 5, 6\\}$, on considère $A = \\{1, 2, 3, 4\\}$ et $B = \\{3, 4, 5\\}$. On note $\\overline{X}$ le complémentaire de $X$ dans $E$. Que vaut $\\overline{A \\cup B}$ ?",
      "options": [
        "$\\{6\\}$",
        "$\\{5, 6\\}$",
        "$\\{1, 2, 5, 6\\}$",
        "$\\{3, 4\\}$"
      ],
      "correctIndex": 0,
      "answer": "$\\{6\\}$",
      "hint1": "Applique la loi de De Morgan : $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$, ou calcule d'abord $A \\cup B$.",
      "hint2": "On a $\\overline{A} = \\{5, 6\\}$ ; détermine $\\overline{B}$, puis l'intersection.",
      "solution": "$A \\cup B = \\{1, 2, 3, 4, 5\\}$, donc $\\overline{A \\cup B} = \\{6\\}$. On retrouve $\\overline{A} \\cap \\overline{B} = \\{5, 6\\} \\cap \\{1, 2, 6\\} = \\{6\\}$."
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
      "id": "L1-LOG-2e",
      "tier": 2,
      "type": "mcq",
      "title": "Nombre de parties à p éléments",
      "skill": "Dénombrer des parties à l'aide des coefficients binomiaux",
      "statement": "Combien un ensemble à $7$ éléments possède-t-il de parties à $3$ éléments ?",
      "options": [
        "$35$",
        "$210$",
        "$343$",
        "$21$"
      ],
      "correctIndex": 0,
      "answer": "$35$",
      "hint1": "Une partie n'est pas ordonnée : on compte des combinaisons $\\binom{n}{p}$.",
      "hint2": "Calcule $\\binom{7}{3} = \\dfrac{7 \\times 6 \\times 5}{3!}$.",
      "solution": "$\\binom{7}{3} = \\dfrac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = \\dfrac{210}{6} = 35$. L'ensemble a donc $35$ parties à $3$ éléments."
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
      "id": "L1-LOG-3b",
      "tier": 3,
      "type": "mcq",
      "title": "Borne supérieure pour la divisibilité",
      "skill": "Déterminer une borne supérieure dans un ensemble ordonné",
      "statement": "On munit $\\mathbb{N}^{\\ast}$ de la relation d'ordre « divise ». Quelle est la borne supérieure de la partie $\\{4, 6\\}$ ?",
      "options": [
        "$12$",
        "$24$",
        "$6$",
        "$2$"
      ],
      "correctIndex": 0,
      "answer": "$12$",
      "hint1": "Un majorant de $\\{4, 6\\}$ est un multiple commun de $4$ et $6$.",
      "hint2": "La borne supérieure est le plus petit majorant au sens de la divisibilité : parmi les multiples communs, cherche celui qui divise tous les autres.",
      "solution": "Les majorants de $\\{4, 6\\}$ sont les multiples communs de $4$ et $6$, c'est-à-dire les multiples de $\\operatorname{ppcm}(4, 6) = 12$. Le plus petit d'entre eux pour la divisibilité est $12$ : c'est la borne supérieure. (Le nombre $6$ n'est pas un majorant, car $4$ ne divise pas $6$.)"
    },
    {
      "id": "L1-LOG-3c",
      "tier": 3,
      "type": "mcq",
      "title": "Construction de Z : définir le produit",
      "skill": "Définir une opération sur un ensemble quotient à partir de représentants",
      "statement": "On construit $\\mathbb{Z}$ comme l'ensemble quotient $\\mathbb{N}^2/\\!\\sim$, où $(a, b) \\sim (a', b') \\iff a + b' = a' + b$, la classe de $(a, b)$ représentant l'entier « $a - b$ ». Quelle définition du produit $\\overline{(a, b)} \\times \\overline{(c, d)}$ convient ?",
      "options": [
        "$\\overline{(ac + bd,\\ ad + bc)}$",
        "$\\overline{(ac,\\ bd)}$",
        "$\\overline{(ad + bc,\\ ac + bd)}$",
        "$\\overline{(a + c,\\ b + d)}$"
      ],
      "correctIndex": 0,
      "answer": "$\\overline{(ac + bd,\\ ad + bc)}$",
      "hint1": "Développe formellement $(a - b)(c - d)$ et regroupe les termes positifs d'un côté, les termes négatifs de l'autre.",
      "hint2": "$(a - b)(c - d) = (ac + bd) - (\\dots)$ : complète, puis vérifie sur un exemple comme $(-1) \\times (-1)$, avec les représentants $(0, 1)$ et $(0, 1)$.",
      "solution": "On a $(a - b)(c - d) = (ac + bd) - (ad + bc)$, d'où la définition $\\overline{(a, b)} \\times \\overline{(c, d)} = \\overline{(ac + bd,\\ ad + bc)}$, dont on vérifie qu'elle ne dépend pas des représentants. Contrôle : $(-1) \\times (-1)$ donne $\\overline{(0 + 1,\\ 0 + 0)} = \\overline{(1, 0)} = 1$. La proposition $\\overline{(ad + bc,\\ ac + bd)}$ donne l'opposé du produit, $\\overline{(ac,\\ bd)}$ donnerait $\\overline{(0, 1)} = -1$ pour ce contrôle, et $\\overline{(a + c,\\ b + d)}$ est la somme."
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
    },
    {
      "id": "L1-LOG-4b",
      "tier": 4,
      "type": "mcq",
      "title": "Parties contenant un élément donné",
      "skill": "Construire une bijection pour dénombrer des parties",
      "statement": "Combien l'ensemble $\\{1, 2, \\dots, 10\\}$ possède-t-il de parties à $4$ éléments contenant l'élément $1$ ?",
      "options": [
        "$84$",
        "$210$",
        "$126$",
        "$120$"
      ],
      "correctIndex": 0,
      "answer": "$84$",
      "hint1": "Une telle partie est déterminée par ses éléments autres que $1$.",
      "hint2": "Il reste $3$ éléments à choisir parmi les $9$ éléments de $\\{2, \\dots, 10\\}$.",
      "solution": "L'application $X \\mapsto X \\setminus \\{1\\}$ est une bijection des parties à $4$ éléments contenant $1$ vers les parties à $3$ éléments de $\\{2, \\dots, 10\\}$. Il y en a donc $\\binom{9}{3} = \\dfrac{9 \\times 8 \\times 7}{6} = 84$."
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
      "statement": "Quelle est la factorisation complète dans $\\mathbb{R}[X]$ du trinôme $P(X) = X^2 - 6X + 9$, et quelle est la multiplicité de sa racine ?",
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
      "statement": "Déterminer les racines et la factorisation complète dans $\\mathbb{R}[X]$ du polynôme de degré 3 : $P(X) = X^3 - 3X + 2$.",
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
      "statement": "Donner la factorisation complète (produit de facteurs irréductibles) dans $\\mathbb{R}[X]$ du polynôme $P(X) = X^3 - 5X^2 + 3X + 9$ :",
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
      "statement": "Factoriser complètement le polynôme $P(X) = X^4 - 2X^2 + 1$ dans $\\mathbb{R}[X]$ et préciser la multiplicité de ses racines :",
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
      "title": "Degré 4 sans racine réelle : complétion du carré",
      "skill": "Factoriser par complétion du carré",
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
      "title": "Degré 4 sans racine réelle : identité de Sophie Germain",
      "skill": "Appliquer l'identité de Sophie Germain",
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
      "title": "Somme des carrés des racines d'un polynôme",
      "skill": "Utiliser les relations entre coefficients et racines",
      "statement": "Soient $a$, $b$, $c$ les trois racines complexes, comptées avec multiplicité, du polynôme $P(X) = X^3 - 2X^2 + 3X - 5$. Que vaut $a^2 + b^2 + c^2$ ?",
      "options": [
        "$-2$",
        "$10$",
        "$4$",
        "$1$"
      ],
      "correctIndex": 0,
      "answer": "$-2$",
      "hint1": "Lis sur les coefficients de $P$ les valeurs de $\\sigma_1 = a + b + c$ et $\\sigma_2 = ab + ac + bc$.",
      "hint2": "Développe $(a + b + c)^2$ pour exprimer $a^2 + b^2 + c^2$ à l'aide de $\\sigma_1$ et $\\sigma_2$.",
      "solution": "Les relations coefficients-racines donnent $\\sigma_1 = a + b + c = 2$ et $\\sigma_2 = ab + ac + bc = 3$. Comme $(a + b + c)^2 = a^2 + b^2 + c^2 + 2\\sigma_2$, on a $a^2 + b^2 + c^2 = \\sigma_1^2 - 2\\sigma_2 = 4 - 6 = -2$. Cette valeur est négative : les trois racines ne sont donc pas toutes réelles."
    },
    {
      "id": "L1-CMP-3i",
      "tier": 3,
      "type": "mcq",
      "title": "Condition pour une racine double",
      "skill": "Traduire une divisibilité par $(X - \\alpha)^2$ avec la dérivée",
      "statement": "Pour quels réels $a$ et $b$ le polynôme $(X - 1)^2$ divise-t-il $P(X) = X^4 + aX + b$ ?",
      "options": [
        "$a = -4$ et $b = 3$",
        "$a = 4$ et $b = -5$",
        "$a = -4$ et $b = -3$",
        "$a = -3$ et $b = 2$"
      ],
      "correctIndex": 0,
      "answer": "$a = -4$ et $b = 3$",
      "hint1": "$(X - 1)^2$ divise $P$ si et seulement si $1$ est racine de $P$ et de $P'$.",
      "hint2": "Écris $P(1) = 0$ et calcule $P'(X)$ pour traduire $P'(1) = 0$.",
      "solution": "$(X - 1)^2$ divise $P$ si et seulement si $P(1) = P'(1) = 0$. Comme $P'(X) = 4X^3 + a$, on obtient $4 + a = 0$, soit $a = -4$, puis $P(1) = 1 + a + b = 0$ donne $b = 3$. Vérification : $X^4 - 4X + 3 = (X - 1)^2(X^2 + 2X + 3)$."
    },
    {
      "id": "L1-CMP-3j",
      "tier": 3,
      "type": "mcq",
      "title": "Inverse modulo n par la relation de Bézout",
      "skill": "Calculer un inverse dans $\\mathbb{Z}/n\\mathbb{Z}$ avec l'algorithme d'Euclide",
      "statement": "Déterminer l'inverse de $\\bar{7}$ dans $\\mathbb{Z}/30\\mathbb{Z}$.",
      "options": [
        "$\\overline{13}$",
        "$\\overline{17}$",
        "$\\overline{7}$",
        "$\\bar{7}$ n'est pas inversible dans $\\mathbb{Z}/30\\mathbb{Z}$"
      ],
      "correctIndex": 0,
      "answer": "$\\overline{13}$",
      "hint1": "$\\bar{7}$ est inversible car $\\mathrm{pgcd}(7, 30) = 1$ ; cherche une relation de Bézout $7u + 30v = 1$ par l'algorithme d'Euclide.",
      "hint2": "$30 = 4 \\times 7 + 2$ et $7 = 3 \\times 2 + 1$ : remonte ces égalités en partant de $1 = 7 - 3 \\times 2$.",
      "solution": "L'algorithme d'Euclide donne $30 = 4 \\times 7 + 2$ et $7 = 3 \\times 2 + 1$, donc $\\mathrm{pgcd}(7, 30) = 1$. En remontant : $1 = 7 - 3 \\times 2 = 7 - 3(30 - 4 \\times 7) = 13 \\times 7 - 3 \\times 30$. Ainsi $7 \\times 13 \\equiv 1 \\ [30]$ et l'inverse de $\\bar{7}$ est $\\overline{13}$. Contrôle : $7 \\times 13 = 91 = 3 \\times 30 + 1$."
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
    },
    {
      "id": "L1-CMP-4e",
      "tier": 4,
      "type": "mcq",
      "title": "Reste d'une grande puissance par le petit théorème de Fermat",
      "skill": "Appliquer le petit théorème de Fermat pour réduire un exposant",
      "statement": "Quel est le reste de la division euclidienne de $3^{100}$ par $7$ ?",
      "options": [
        "$4$",
        "$1$",
        "$3$",
        "$2$"
      ],
      "correctIndex": 0,
      "answer": "$4$",
      "hint1": "$7$ est premier et ne divise pas $3$ : le petit théorème de Fermat donne $3^6 \\equiv 1 \\ [7]$.",
      "hint2": "Écris la division euclidienne $100 = 6 \\times 16 + 4$, puis $3^{100} = (3^6)^{16} \\times 3^4$.",
      "solution": "Comme $7$ est premier et ne divise pas $3$, le petit théorème de Fermat donne $3^6 \\equiv 1 \\ [7]$. Avec $100 = 6 \\times 16 + 4$, on obtient $3^{100} = (3^6)^{16} \\times 3^4 \\equiv 3^4 \\ [7]$. Or $3^4 = 81 = 11 \\times 7 + 4$. Le reste cherché est donc $4$."
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
      "id": "L1-MAT-5",
      "tier": 2,
      "type": "mcq",
      "title": "Format d'un produit matriciel et transposée",
      "skill": "Déterminer si un produit est défini et donner sa taille",
      "statement": "Soient $A$ et $B$ deux matrices de $\\mathcal{M}_{2,3}(\\mathbb{R})$. Laquelle des affirmations suivantes est vraie ?",
      "options": [
        "Le produit $\\,{}^t\\!A\\,B$ est défini et c'est une matrice carrée d'ordre $3$",
        "Le produit $AB$ est défini et c'est une matrice de $\\mathcal{M}_{2,3}(\\mathbb{R})$",
        "Le produit $A\\,{}^t\\!B$ est défini et c'est une matrice carrée d'ordre $3$",
        "Le produit $\\,{}^t\\!A\\,B$ n'est pas défini"
      ],
      "correctIndex": 0,
      "answer": "Le produit $\\,{}^t\\!A\\,B$ est défini et c'est une matrice carrée d'ordre $3$",
      "hint1": "Le produit $MN$ est défini si le nombre de colonnes de $M$ est égal au nombre de lignes de $N$ ; une matrice $n \\times p$ fois une matrice $p \\times q$ donne une matrice $n \\times q$.",
      "hint2": "$\\,{}^t\\!A$ est de taille $3 \\times 2$, et $B$ de taille $2 \\times 3$.",
      "solution": "$AB$ n'est pas défini : $A$ a $3$ colonnes et $B$ a $2$ lignes. $\\,{}^t\\!A \\in \\mathcal{M}_{3,2}(\\mathbb{R})$ et $B \\in \\mathcal{M}_{2,3}(\\mathbb{R})$, donc $\\,{}^t\\!A\\,B$ est défini, de taille $3 \\times 3$. Le produit $A\\,{}^t\\!B$ est aussi défini, mais de taille $2 \\times 2$."
    },
    {
      "id": "L1-MAT-3",
      "tier": 3,
      "type": "mcq",
      "title": "Résolution d'un système par la méthode du pivot",
      "skill": "Échelonner puis résoudre un système linéaire $3 \\times 3$",
      "statement": "Quelle est l'unique solution du système $\\begin{cases} x + y + z = 6 \\\\ 2x + 3y + z = 11 \\\\ x - y + 2z = 5 \\end{cases}$ ?",
      "options": [
        "$(x, y, z) = (1, 2, 3)$",
        "$(x, y, z) = (2, 1, 3)$",
        "$(x, y, z) = (3, 2, 1)$",
        "$(x, y, z) = (1, 3, 2)$"
      ],
      "correctIndex": 0,
      "answer": "$(x, y, z) = (1, 2, 3)$",
      "hint1": "Utilise la première équation pour éliminer $x$ des deux autres : $L_2 \\leftarrow L_2 - 2L_1$ et $L_3 \\leftarrow L_3 - L_1$.",
      "hint2": "Tu obtiens $y - z = -1$ et $-2y + z = -1$ ; élimine $y$ de la dernière équation avec $L_3 \\leftarrow L_3 + 2L_2$.",
      "solution": "$L_2 \\leftarrow L_2 - 2L_1$ et $L_3 \\leftarrow L_3 - L_1$ donnent $y - z = -1$ et $-2y + z = -1$. Puis $L_3 \\leftarrow L_3 + 2L_2$ donne $-z = -3$. Le système échelonné $\\begin{cases} x + y + z = 6 \\\\ y - z = -1 \\\\ -z = -3 \\end{cases}$ a trois pivots : solution unique. En remontant : $z = 3$, $y = 2$, $x = 1$. Vérification dans la troisième équation : $1 - 2 + 6 = 5$."
    },
    {
      "id": "L1-MAT-4",
      "tier": 4,
      "type": "mcq",
      "title": "Inversion par élimination de Gauss-Jordan",
      "skill": "Calculer l'inverse d'une matrice $3 \\times 3$",
      "statement": "Quelle est la matrice inverse de $A = \\begin{pmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 2 \\end{pmatrix}$ ?",
      "options": [
        "$\\begin{pmatrix} 3 & -2 & 1 \\\\ -2 & 2 & -1 \\\\ 1 & -1 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 3 & 2 & 1 \\\\ 2 & 2 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}$",
        "$\\begin{pmatrix} -3 & 2 & -1 \\\\ 2 & -2 & 1 \\\\ -1 & 1 & -1 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & -1 & 0 \\\\ -1 & 1 & -1 \\\\ 0 & -1 & 1 \\end{pmatrix}$"
      ],
      "correctIndex": 0,
      "answer": "$\\begin{pmatrix} 3 & -2 & 1 \\\\ -2 & 2 & -1 \\\\ 1 & -1 & 1 \\end{pmatrix}$",
      "hint1": "Applique la méthode de Gauss-Jordan à $(A \\mid I_3)$ : commence par $L_2 \\leftarrow L_2 - L_1$.",
      "hint2": "Après $L_2 \\leftarrow L_2 - L_1$, la deuxième ligne devient $(0\\ \\ 1\\ \\ 1 \\mid -1\\ \\ 1\\ \\ 0)$ ; utilise-la pour éliminer le $1$ de la troisième ligne : $L_3 \\leftarrow L_3 - L_2$.",
      "solution": "Sur $(A \\mid I_3)$ : $L_2 \\leftarrow L_2 - L_1$ donne $(0\\ \\ 1\\ \\ 1 \\mid -1\\ \\ 1\\ \\ 0)$ ; $L_3 \\leftarrow L_3 - L_2$ donne $(0\\ \\ 0\\ \\ 1 \\mid 1\\ \\ -1\\ \\ 1)$ ; $L_2 \\leftarrow L_2 - L_3$ donne $(0\\ \\ 1\\ \\ 0 \\mid -2\\ \\ 2\\ \\ -1)$ ; enfin $L_1 \\leftarrow L_1 - L_2$ donne $(1\\ \\ 0\\ \\ 0 \\mid 3\\ \\ -2\\ \\ 1)$. Donc $A^{-1} = \\begin{pmatrix} 3 & -2 & 1 \\\\ -2 & 2 & -1 \\\\ 1 & -1 & 1 \\end{pmatrix}$. Vérification : la deuxième ligne de $A$ fois la première colonne de $A^{-1}$ donne $3 - 4 + 1 = 0$, et de même $AA^{-1} = I_3$."
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
      "solution": "$F$ contient le vecteur nul $(0,0,0)$ et est défini par une équation linéaire homogène (forme linéaire). Pour $G$, $(0,0,0) \\notin G$. Pour $H$, la condition quadratique n'est pas stable par addition. Pour $K$, la multiplication par un scalaire ne pose pas de problème (car $(\\lambda x)(\\lambda y) = \\lambda^2 xy \\ge 0$), mais $K$ n'est pas stable par addition : $(1, 0, 0)$ et $(0, -1, 0)$ sont dans $K$, alors que leur somme $(1, -1, 0)$ vérifie $xy = -1 < 0$. Seul $F$ est un SEV (hyperplan vectoriel de dimension 2)."
    },
    {
      "id": "L1-EV1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Famille de vecteurs sans composante nulle dans $\\mathbb{R}^3$",
      "skill": "Tester l'indépendance linéaire de vecteurs sans coefficients nuls",
      "statement": "Dans $\\mathbb{R}^3$, la famille $\\mathcal{F} = (u, v, w)$, où $u = (1, 2, -1)$, $v = (2, -1, 3)$ et $w = (3, 1, 2)$, est-elle libre ou liée ?",
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
      "statement": "Dans $\\mathbb{R}^3$, la famille $\\mathcal{B} = (u, v, w)$, où $u = (1, 1, 2)$, $v = (2, -1, 1)$ et $w = (1, 3, 1)$, forme-t-elle une base de $\\mathbb{R}^3$ ?",
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
      "id": "L1-EV1-5",
      "tier": 2,
      "type": "mcq",
      "title": "Dimension d'un sous-espace défini par des équations",
      "skill": "Trouver une base d'un sous-espace de $\\mathbb{R}^4$",
      "statement": "Quelle est la dimension du sous-espace $F = \\{(x, y, z, t) \\in \\mathbb{R}^4 : x + y = 0 \\text{ et } z - t = 0\\}$ ?",
      "options": [
        "$2$",
        "$3$",
        "$1$",
        "$4$"
      ],
      "correctIndex": 0,
      "answer": "$2$",
      "hint1": "Exprime certaines coordonnées en fonction des autres, puis écris un vecteur quelconque de $F$ comme combinaison linéaire de vecteurs fixés.",
      "hint2": "$(x, y, z, t) \\in F \\iff y = -x$ et $t = z$ : écris $(x, -x, z, z)$ à l'aide de $x$ et de $z$.",
      "solution": "$(x, y, z, t) \\in F \\iff y = -x$ et $t = z$, donc $(x, y, z, t) = x(1, -1, 0, 0) + z(0, 0, 1, 1)$. La famille $\\big((1, -1, 0, 0), (0, 0, 1, 1)\\big)$ engendre $F$ et elle est libre (les vecteurs ne sont pas proportionnels) : c'est une base, et $\\dim F = 2$. On retrouve $4 - 2$ : deux équations indépendantes dans $\\mathbb{R}^4$."
    },
    {
      "id": "L1-EV1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Base et dimension d'un plan vectoriel de $\\mathbb{R}^3$",
      "skill": "Déterminer une base et la dimension d'un sous-espace cartésien",
      "statement": "Quelle est la dimension et une base du sous-espace $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x - 2y + z = 0\\}$ ?",
      "options": [
        "$\\dim(F) = 2$, de base $\\mathcal{B} = \\big((2, 1, 0), \\, (-1, 0, 1)\\big)$",
        "$\\dim(F) = 1$, de base $\\mathcal{B} = \\big((1, -2, 1)\\big)$",
        "$\\dim(F) = 3$, de base canonique de $\\mathbb{R}^3$",
        "$\\dim(F) = 2$, de base $\\mathcal{B} = \\big((1, 1, 1), \\, (0, 0, 0)\\big)$"
      ],
      "correctIndex": 0,
      "answer": "$\\dim(F) = 2$, de base $\\mathcal{B} = \\big((2, 1, 0), \\, (-1, 0, 1)\\big)$",
      "hint1": "Isole $x$ dans l'équation : $x = 2y - z$.",
      "hint2": "Décompose le vecteur $(x, y, z) = y(2, 1, 0) + z(-1, 0, 1)$.",
      "solution": "Un vecteur $(x, y, z)$ appartient à $F$ ssi $x = 2y - z$. Donc $(x, y, z) = (2y - z, y, z) = y(2, 1, 0) + z(-1, 0, 1)$. Les deux vecteurs $(2, 1, 0)$ et $(-1, 0, 1)$ ne sont pas colinéaires, ils sont libres et engendrent $F$. Ainsi, $\\dim(F) = 2$ et $\\big((2, 1, 0), (-1, 0, 1)\\big)$ est une base de $F$."
    },
    {
      "id": "L1-EV1-3b",
      "tier": 3,
      "type": "mcq",
      "title": "Sous-espaces supplémentaires et somme directe dans $\\mathbb{R}^3$",
      "skill": "Vérifier la condition de supplémentarité $F \\oplus D = \\mathbb{R}^3$",
      "statement": "Soit le plan vectoriel $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + y + z = 0\\}$. Pour lequel des vecteurs suivants la droite $D = \\text{Vect}(u)$ vérifie-t-elle $F \\oplus D = \\mathbb{R}^3$ ?",
      "options": [
        "$u = (1, 1, 1)$",
        "$u = (1, -1, 0)$",
        "$u = (2, -1, -1)$",
        "Aucun de ces vecteurs"
      ],
      "correctIndex": 0,
      "answer": "$u = (1, 1, 1)$",
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
      "id": "L1-APP-4b",
      "tier": 1,
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
      "id": "L1-APP-5",
      "tier": 3,
      "type": "mcq",
      "title": "Rang et noyau à partir d'une matrice",
      "skill": "Déterminer le rang et le noyau d'un endomorphisme de $\\mathbb{R}^3$",
      "statement": "Soit $f \\in \\mathcal{L}(\\mathbb{R}^3)$ de matrice $\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 1 \\end{pmatrix}$ dans la base canonique. Que valent le rang et le noyau de $f$ ?",
      "options": [
        "$\\operatorname{rg}(f) = 2$ et $\\operatorname{Ker}(f) = \\operatorname{Vect}\\big((1, 1, -1)\\big)$",
        "$\\operatorname{rg}(f) = 3$ et $\\operatorname{Ker}(f) = \\{(0, 0, 0)\\}$",
        "$\\operatorname{rg}(f) = 1$ et $\\dim \\operatorname{Ker}(f) = 2$",
        "$\\operatorname{rg}(f) = 2$ et $\\operatorname{Ker}(f) = \\operatorname{Vect}\\big((1, 2, 1)\\big)$"
      ],
      "correctIndex": 0,
      "answer": "$\\operatorname{rg}(f) = 2$ et $\\operatorname{Ker}(f) = \\operatorname{Vect}\\big((1, 1, -1)\\big)$",
      "hint1": "Le rang de $f$ est le rang de la famille des colonnes : cherche une relation linéaire entre elles, puis applique le théorème du rang.",
      "hint2": "La troisième colonne est la somme des deux premières, et les deux premières ne sont pas proportionnelles.",
      "solution": "Notons $C_1, C_2, C_3$ les colonnes : $C_3 = C_1 + C_2$, et $C_1 = (1, 2, 1)$, $C_2 = (2, 4, 0)$ ne sont pas proportionnelles. Donc $\\operatorname{rg}(f) = 2$ et, par le théorème du rang, $\\dim \\operatorname{Ker}(f) = 3 - 2 = 1$. La relation $C_1 + C_2 - C_3 = 0$ signifie $f(1, 1, -1) = (0, 0, 0)$ : $\\operatorname{Ker}(f) = \\operatorname{Vect}\\big((1, 1, -1)\\big)$. Le vecteur $(1, 2, 1)$ est la première colonne, c'est-à-dire $f(1, 0, 0)$ : il est dans l'image, pas dans le noyau."
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
      "solution": "Un endomorphisme est un projecteur ssi $p^2 = p$. On a alors $E = \\text{Ker}(p) \\oplus \\text{Im}(p)$ : tout $x$ s'écrit $x = (x - p(x)) + p(x)$, avec $p(x - p(x)) = p(x) - p^2(x) = 0$, et si $y = p(z)$ vérifie $p(y) = 0$, alors $y = p(z) = p^2(z) = p(y) = 0$. La projection se fait sur $\\text{Im}(p)$ parallèlement à $\\text{Ker}(p)$. La relation $s^2 = \\text{Id}_E$ caractérise quant à elle les symétries vectorielles."
    },
    {
      "id": "L1-APP-6",
      "tier": 4,
      "type": "mcq",
      "title": "Endomorphisme de carré nul",
      "skill": "Relier image et noyau pour majorer un rang",
      "statement": "Soit $f \\in \\mathcal{L}(\\mathbb{R}^3)$ tel que $f \\circ f = 0$ et $f \\neq 0$. Que vaut $\\operatorname{rg}(f)$ ?",
      "options": [
        "$1$",
        "$0$",
        "$2$",
        "On ne peut pas le déterminer"
      ],
      "correctIndex": 0,
      "answer": "$1$",
      "hint1": "Traduis $f \\circ f = 0$ par une inclusion entre $\\operatorname{Im}(f)$ et $\\operatorname{Ker}(f)$, puis utilise le théorème du rang.",
      "hint2": "$f \\circ f = 0$ donne $\\operatorname{Im}(f) \\subset \\operatorname{Ker}(f)$, donc $\\operatorname{rg}(f) \\le \\dim \\operatorname{Ker}(f) = 3 - \\operatorname{rg}(f)$.",
      "solution": "Pour tout $x$, $f(f(x)) = 0$, donc $\\operatorname{Im}(f) \\subset \\operatorname{Ker}(f)$ et $\\operatorname{rg}(f) \\le \\dim \\operatorname{Ker}(f) = 3 - \\operatorname{rg}(f)$ (théorème du rang). Ainsi $2\\operatorname{rg}(f) \\le 3$, soit $\\operatorname{rg}(f) \\le 1$. Comme $f \\neq 0$, $\\operatorname{rg}(f) \\ge 1$ : $\\operatorname{rg}(f) = 1$. Exemple : $f(x, y, z) = (z, 0, 0)$."
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
      "statement": "Soit l'intervalle $I = ]-2 ; 5]$. Quelles sont les bornes $\\inf(I)$, $\\sup(I)$ et les extrema $\\min(I)$, $\\max(I)$ ?",
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
      "statement": "On sait que, pour tous réels $x < y$, il existe un rationnel $r$ et un nombre décimal $d$ tels que $x < r < y$ et $x < d < y$. Quelle propriété de $\\mathbb{Q}$ et de $\\mathbb{D}$ cet énoncé exprime-t-il ?",
      "options": [
        "La densité de $\\mathbb{Q}$ et $\\mathbb{D}$ dans $\\mathbb{R}$",
        "La compacité du segment $[x ; y]$",
        "La dénombrabilité du corps $\\mathbb{R}$",
        "L'absence de borne supérieure"
      ],
      "correctIndex": 0,
      "answer": "La densité de $\\mathbb{Q}$ et $\\mathbb{D}$ dans $\\mathbb{R}$",
      "hint1": "Tout intervalle ouvert non vide $]x ; y[$ rencontre $\\mathbb{Q}$ et $\\mathbb{D}$.",
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
      "statement": "La propriété d'Archimède affirme : pour tout $a > 0$ et tout $x \\in \\mathbb{R}$, il existe $n \\in \\mathbb{N}$ tel que $n a > x$. Soit $\\varepsilon > 0$. Pour démontrer que $\\inf \\left\\{ \\frac{1}{n} \\mid n \\in \\mathbb{N}^* \\right\\} = 0$, on cherche un entier $n \\ge 1$ tel que $\\frac{1}{n} < \\varepsilon$. Quelle application de la propriété fournit directement cet entier ?",
      "options": [
        "$a = \\varepsilon$ et $x = 1$ : il existe $n$ tel que $n \\varepsilon > 1$",
        "$a = 1$ et $x = \\varepsilon$ : il existe $n$ tel que $n > \\varepsilon$",
        "$a = \\varepsilon$ et $x = 0$ : il existe $n$ tel que $n \\varepsilon > 0$",
        "$a = \\frac{1}{\\varepsilon}$ et $x = 1$ : il existe $n$ tel que $\\frac{n}{\\varepsilon} > 1$"
      ],
      "correctIndex": 0,
      "answer": "$a = \\varepsilon$ et $x = 1$ : il existe $n$ tel que $n \\varepsilon > 1$",
      "hint1": "Réécris l'objectif $\\frac{1}{n} < \\varepsilon$ sans fraction, sous la forme $n a > x$, puis identifie $a$ et $x$.",
      "hint2": "Comme $n > 0$, tu peux multiplier les deux membres de $\\frac{1}{n} < \\varepsilon$ par $n$ sans changer le sens de l'inégalité.",
      "solution": "La propriété appliquée à $a = \\varepsilon > 0$ et $x = 1$ fournit $n \\in \\mathbb{N}$ tel que $n \\varepsilon > 1$. On a $n \\ne 0$ (sinon $0 > 1$), donc $n \\ge 1$, et en divisant par $n > 0$ : $\\frac{1}{n} < \\varepsilon$. Les autres choix donnent $n > \\varepsilon$ ou seulement $n \\ge 1$, ce qui ne majore pas $\\frac{1}{n}$ par $\\varepsilon$. Comme $0$ minore l'ensemble et que $\\varepsilon$ ne le minore pour aucun $\\varepsilon > 0$, sa borne inférieure est $0$."
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
      "statement": "Soient deux réels $x < y$. Comment prouve-t-on l'existence d'un nombre irrationnel dans l'intervalle $]x ; y[$ ?",
      "options": [
        "En prenant un rationnel non nul $r \\in \\left]\\frac{x}{\\sqrt{2}} ; \\frac{y}{\\sqrt{2}}\\right[$, puis $r\\sqrt{2} \\in ]x ; y[$ est irrationnel",
        "En constatant que le milieu $(x + y)/2$ est toujours un irrationnel",
        "Parce que tout intervalle de réels est un ensemble fini",
        "Cette propriété n'est vraie que pour des intervalles de longueur $> 1$"
      ],
      "correctIndex": 0,
      "answer": "En prenant un rationnel non nul $r \\in \\left]\\frac{x}{\\sqrt{2}} ; \\frac{y}{\\sqrt{2}}\\right[$, puis $r\\sqrt{2} \\in ]x ; y[$ est irrationnel",
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
        "$\\sup(A) = 1{,}414$ et $\\max(A)$ n'existe pas",
        "$A$ n'est pas majorée dans $\\mathbb{R}$"
      ],
      "correctIndex": 0,
      "answer": "$\\sup(A) = \\sqrt{2}$ et $A$ n'admet aucun plus grand élément",
      "hint1": "Par définition, $\\sqrt{2}$ majore $A$.",
      "hint2": "Par densité de $\\mathbb{Q}$ dans $\\mathbb{R}$, pour tout $\\varepsilon > 0$, il existe un rationnel dans $]\\sqrt{2}-\\varepsilon ; \\sqrt{2}[$. Comme $\\sqrt{2} \\notin \\mathbb{Q}$, $\\sqrt{2} \\notin A$.",
      "solution": "L'ensemble $A$ est majoré par $\\sqrt{2}$. Par densité de $\\mathbb{Q}$ dans $\\mathbb{R}$, pour tout $\\varepsilon > 0$, il existe $r \\in \\mathbb{Q}$ tel que $\\sqrt{2} - \\varepsilon < r < \\sqrt{2}$. Comme $r < \\sqrt{2}$, $r \\in A$. Donc $\\sup(A) = \\sqrt{2}$. Comme $\\sqrt{2} \\notin \\mathbb{Q}$, $\\sqrt{2} \\notin A$, d'où $A$ n'admet pas de plus grand élément."
    },
    {
      "id": "L1-REL-4b",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème des segments emboîtés de Cantor",
      "skill": "Démontrer l'existence d'un point d'intersection par les suites adjacentes et la complétude",
      "statement": "Soit $([a_n ; b_n])_{n \\in \\mathbb{N}}$ une suite décroissante pour l'inclusion de segments telle que $\\lim_{n \\to +\\infty} (b_n - a_n) = 0$. Que vaut l'intersection $\\bigcap_{n \\in \\mathbb{N}} [a_n ; b_n]$ ? (On admet ici le théorème des suites adjacentes, démontré au chapitre L1-SUI, section 4.)",
      "options": [
        "C'est un singleton $\\{\\ell\\}$ où $\\ell = \\sup(a_n) = \\inf(b_n)$",
        "C'est l'ensemble vide $\\emptyset$",
        "C'est le segment $[a_0 ; b_0]$",
        "C'est un intervalle ouvert $]\\ell - \\varepsilon ; \\ell + \\varepsilon[$"
      ],
      "correctIndex": 0,
      "answer": "C'est un singleton $\\{\\ell\\}$ où $\\ell = \\sup(a_n) = \\inf(b_n)$",
      "hint1": "$(a_n)$ est croissante et majorée par $b_0$, $(b_n)$ est décroissante et minorée par $a_0$.",
      "hint2": "Comme $b_n - a_n \\to 0$, les deux suites sont adjacentes et convergent vers une même limite $\\ell$.",
      "solution": "Les suites $(a_n)$ et $(b_n)$ sont adjacentes ; d'après le théorème des suites adjacentes (chapitre L1-SUI, section 4), $(a_n)$ croît vers $\\ell = \\sup(a_n)$ et $(b_n)$ décroît vers $\\ell = \\inf(b_n)$. Pour tout $n$, $\\ell \\in [a_n ; b_n]$, donc $\\ell \\in \\bigcap_n [a_n ; b_n]$. De plus, si $x, y$ appartenaient à l'intersection, $|x - y| \\le b_n - a_n \\to 0$, donc $x = y = \\ell$. L'intersection est le singleton $\\{\\ell\\}$."
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
      "hint1": "Traite à part le cas $G = \\{0\\}$ ; sinon, $G \\cap \\mathbb{R}_+^*$ est non vide et l'on pose $a = \\inf(G \\cap \\mathbb{R}_+^*)$.",
      "hint2": "Si $a > 0$, montre que $a \\in G$ et que tout élément de $G$ est un multiple entier de $a$ ; si $a = 0$, que dire des multiples d'un $g \\in G$ très petit ?",
      "solution": "Si $G = \\{0\\}$, alors $G = 0\\mathbb{Z}$, ce qui relève de la première alternative avec $a = 0$. Sinon, $G$ contient un réel $x \\neq 0$, donc aussi $|x|$ (car $-x \\in G$) : $G \\cap \\mathbb{R}_+^*$ est non vide et minorée par $0$, et l'on pose $a = \\inf(G \\cap \\mathbb{R}_+^*)$. Si $a > 0$, alors $a \\in G$ et $G = a\\mathbb{Z}$ (sous-groupe discret). Si $a = 0$, pour tout $\\varepsilon > 0$, il existe $g \\in G$ tel que $0 < g < \\varepsilon$. Comme les multiples entiers de $g$ parcourent la droite avec un pas $< \\varepsilon$, $G$ est dense dans $\\mathbb{R}$."
    }
  ],
  "L1-SUI": [
    {
      "id": "L1-SUI-1",
      "tier": 1,
      "type": "mcq",
      "title": "Complétude de $\\mathbb{R}$ et suites de Cauchy",
      "skill": "Connaître la propriété qui distingue $\\mathbb{R}$ de $\\mathbb{Q}$",
      "statement": "Dans $\\mathbb{R}$, toute suite de Cauchy converge ; dans $\\mathbb{Q}$, c'est faux. Comment appelle-t-on cette propriété de $\\mathbb{R}$ ?",
      "options": [
        "La complétude de $\\mathbb{R}$",
        "La propriété d'Archimède",
        "La densité de $\\mathbb{Q}$ dans $\\mathbb{R}$",
        "Le théorème des valeurs intermédiaires"
      ],
      "correctIndex": 0,
      "answer": "La complétude de $\\mathbb{R}$",
      "hint1": "Repère, parmi les propositions, celle qui parle de la convergence des suites de Cauchy (cours, section 5).",
      "hint2": "La suite des approximations décimales par défaut de $\\sqrt{2}$ est de Cauchy dans $\\mathbb{Q}$ mais n'a pas de limite rationnelle : la propriété cherchée est celle qui manque à $\\mathbb{Q}$.",
      "solution": "Une suite réelle converge si et seulement si elle est de Cauchy : c'est la complétude de $\\mathbb{R}$ (cours, section 5). Elle est fausse dans $\\mathbb{Q}$ : les approximations décimales par défaut de $\\sqrt{2}$ forment une suite de rationnels de Cauchy, dont la limite $\\sqrt{2}$ n'est pas rationnelle. La propriété d'Archimède et la densité de $\\mathbb{Q}$ dans $\\mathbb{R}$ ne parlent pas des suites de Cauchy ; le théorème des valeurs intermédiaires concerne les fonctions continues."
    },
    {
      "id": "L1-SUI-7",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de la limite monotone",
      "skill": "Appliquer le théorème de la limite monotone",
      "statement": "Pour $n \\ge 1$, on pose $S_n = \\sum_{k=1}^{n} \\frac{1}{k^2}$. On admet que $S_n \\le 2 - \\frac{1}{n}$ pour tout $n \\ge 1$. Que peut-on en conclure ?",
      "options": [
        "$(S_n)$ converge vers une limite $\\ell \\le 2$",
        "$(S_n)$ converge vers $2$",
        "$(S_n)$ tend vers $+\\infty$",
        "On ne peut rien conclure sans calculer la limite"
      ],
      "correctIndex": 0,
      "answer": "$(S_n)$ converge vers une limite $\\ell \\le 2$",
      "hint1": "Étudie la monotonie de $(S_n)$, puis applique le théorème de la limite monotone (cours, section 3).",
      "hint2": "$S_{n+1} - S_n = \\frac{1}{(n+1)^2} > 0$ et $S_n \\le 2$ : la suite est croissante et majorée.",
      "solution": "$S_{n+1} - S_n = \\frac{1}{(n+1)^2} > 0$, donc $(S_n)$ est croissante ; elle est majorée par $2$. Par le théorème de la limite monotone, elle converge vers une limite $\\ell$, et l'inégalité large $S_n \\le 2$ passe à la limite : $\\ell \\le 2$. Un majorant n'est pas forcément la limite : on montre (résultat admis ici) que $\\ell = \\frac{\\pi^2}{6} < 2$."
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
      "hint1": "Résous l'équation du point fixe $\\ell = \\frac{1}{2}\\ell + 3$, puis étudie la suite $v_n = u_n - \\ell$.",
      "hint2": "Isole $\\ell$ : $\\ell - \\frac{1}{2}\\ell = 3$.",
      "solution": "Le point fixe vérifie $\\ell = \\frac{1}{2}\\ell + 3$, soit $\\ell = 6$. Posons $v_n = u_n - 6$ : $v_{n+1} = \\frac{1}{2}u_n + 3 - 6 = \\frac{1}{2}(u_n - 6) = \\frac{1}{2}v_n$. La suite $(v_n)$ est géométrique de raison $\\frac{1}{2}$, avec $v_0 = -2$, donc $v_n = -2 \\times \\left(\\frac{1}{2}\\right)^n \\to 0$ et $u_n = 6 - 2 \\times \\left(\\frac{1}{2}\\right)^n \\to 6$ (cours, section 6 : cas arithmético-géométrique)."
    },
    {
      "id": "L1-SUI-5",
      "tier": 2,
      "type": "mcq",
      "title": "Récurrence linéaire d'ordre 2 : deux racines distinctes",
      "skill": "Résoudre une récurrence linéaire d'ordre 2 par l'équation caractéristique",
      "statement": "On définit $(u_n)$ par $u_0 = 0$, $u_1 = 1$ et $u_{n+2} = 5u_{n+1} - 6u_n$ pour tout $n \\in \\mathbb{N}$. Que vaut $u_n$ ?",
      "options": [
        "$u_n = 3^n - 2^n$",
        "$u_n = 2^n - 3^n$",
        "$u_n = n\\,2^{n-1}$",
        "$u_n = 6^n - 5^n$"
      ],
      "correctIndex": 0,
      "answer": "$u_n = 3^n - 2^n$",
      "hint1": "Écris l'équation caractéristique $r^2 = 5r - 6$ : si elle a deux racines distinctes $r_1$ et $r_2$, alors $u_n = \\lambda r_1^n + \\mu r_2^n$ (cours, section 9).",
      "hint2": "Les racines sont $2$ et $3$ ; les conditions initiales donnent $\\lambda + \\mu = 0$ et $2\\lambda + 3\\mu = 1$.",
      "solution": "L'équation $r^2 - 5r + 6 = 0$ a pour racines $2$ et $3$, donc $u_n = \\lambda 2^n + \\mu 3^n$. Avec $u_0 = 0$ et $u_1 = 1$ : $\\lambda + \\mu = 0$ et $2\\lambda + 3\\mu = 1$, d'où $\\mu = 1$ et $\\lambda = -1$. Ainsi $u_n = 3^n - 2^n$. Vérification : $u_2 = 5 \\times 1 - 6 \\times 0 = 5 = 9 - 4$. Les suites $n\\,2^{n-1}$ et $6^n - 5^n$ ont les bons premiers termes $0$ et $1$, mais ne vérifient pas la relation ($u_2$ vaudrait $4$ ou $11$)."
    },
    {
      "id": "L1-SUI-3",
      "tier": 3,
      "type": "mcq",
      "title": "Suites adjacentes : rôle de l'hypothèse $v_n - u_n \\to 0$",
      "skill": "Vérifier les hypothèses du théorème des suites adjacentes",
      "statement": "Pour $n \\ge 1$, on pose $u_n = -\\frac{1}{n}$ et $v_n = 1 + \\frac{1}{n}$. Les suites $(u_n)$ et $(v_n)$ sont-elles adjacentes ?",
      "options": [
        "Non : $(u_n)$ est croissante et $(v_n)$ décroissante, mais $v_n - u_n$ tend vers $1$ et non vers $0$",
        "Non, car $(u_n)$ n'est pas croissante",
        "Non, car $(v_n)$ n'est pas décroissante",
        "Oui, et elles convergent vers une même limite"
      ],
      "correctIndex": 0,
      "answer": "Non : $(u_n)$ est croissante et $(v_n)$ décroissante, mais $v_n - u_n$ tend vers $1$ et non vers $0$",
      "hint1": "Vérifie une à une les trois hypothèses : monotonie de $(u_n)$, monotonie de $(v_n)$, limite de $v_n - u_n$.",
      "hint2": "$u_{n+1} - u_n = \\frac{1}{n} - \\frac{1}{n+1} > 0$ : $(u_n)$ est croissante. Calcule maintenant $v_n - u_n$.",
      "solution": "$u_{n+1} - u_n = \\frac{1}{n} - \\frac{1}{n+1} > 0$, donc $(u_n)$ est croissante ; de même $(v_n)$ est décroissante. Mais $v_n - u_n = 1 + \\frac{2}{n} \\to 1 \\neq 0$ : les suites ne sont pas adjacentes. D'ailleurs $u_n \\to 0$ et $v_n \\to 1$ : elles convergent toutes deux, mais vers des limites différentes. Sans l'hypothèse $v_n - u_n \\to 0$, la conclusion « même limite » du théorème tombe."
    },
    {
      "id": "L1-SUI-3b",
      "tier": 3,
      "type": "mcq",
      "title": "Moyennes de Cesàro d'une suite divergente",
      "skill": "Appliquer le théorème de Cesàro et savoir que sa réciproque est fausse",
      "statement": "Pour $n \\ge 1$, on pose $u_n = (-1)^n$ et $v_n = \\dfrac{u_1 + u_2 + \\dots + u_n}{n}$. Que peut-on affirmer ?",
      "options": [
        "$(v_n)$ converge vers $0$, alors que $(u_n)$ diverge",
        "$(v_n)$ diverge, puisque $(u_n)$ diverge",
        "$(v_n)$ converge vers $-1$",
        "$(v_n)$ converge vers $\\frac{1}{2}$"
      ],
      "correctIndex": 0,
      "answer": "$(v_n)$ converge vers $0$, alors que $(u_n)$ diverge",
      "hint1": "Calcule la somme $u_1 + u_2 + \\dots + u_n$ selon la parité de $n$.",
      "hint2": "Les termes se compensent deux par deux : $u_1 + u_2 = -1 + 1 = 0$. La somme ne prend donc que deux valeurs.",
      "solution": "La somme $u_1 + \\dots + u_n$ vaut $0$ si $n$ est pair et $-1$ si $n$ est impair. Donc $|v_n| \\le \\frac{1}{n}$ et $v_n \\to 0$. Pourtant $(u_n)$ diverge, puisque $u_{2n} \\to 1$ et $u_{2n+1} \\to -1$. Le théorème de Cesàro affirme que si $u_n \\to \\ell$, alors $v_n \\to \\ell$ ; cet exemple montre que la réciproque est fausse."
    },
    {
      "id": "L1-SUI-6",
      "tier": 3,
      "type": "mcq",
      "title": "Récurrence linéaire d'ordre 2 : racine double",
      "skill": "Traiter le cas d'une racine double de l'équation caractéristique",
      "statement": "On définit $(u_n)$ par $u_0 = 1$, $u_1 = 4$ et $u_{n+2} = 4u_{n+1} - 4u_n$ pour tout $n \\in \\mathbb{N}$. Que vaut $u_n$ ?",
      "options": [
        "$u_n = (n + 1)\\,2^n$",
        "$u_n = 4^n$",
        "$u_n = 1 + 3n$",
        "$u_n = (2n + 1)\\,2^n$"
      ],
      "correctIndex": 0,
      "answer": "$u_n = (n + 1)\\,2^n$",
      "hint1": "Écris l'équation caractéristique $r^2 = 4r - 4$ ; si elle a une racine double $r_0$, alors $u_n = (\\lambda + \\mu n)\\,r_0^n$ (cours, section 9).",
      "hint2": "La racine double est $r_0 = 2$ ; la condition $u_0 = 1$ donne $\\lambda = 1$. Utilise $u_1 = 4$ pour trouver $\\mu$.",
      "solution": "$r^2 - 4r + 4 = (r - 2)^2$ : racine double $2$, donc $u_n = (\\lambda + \\mu n)\\,2^n$. Alors $u_0 = \\lambda = 1$ et $u_1 = 2(1 + \\mu) = 4$, d'où $\\mu = 1$ et $u_n = (n + 1)\\,2^n$. Vérification : $u_2 = 4 \\times 4 - 4 \\times 1 = 12 = 3 \\times 4$. Les suites $4^n$ et $1 + 3n$ ont les bons premiers termes, mais donnent $u_2 = 16$ et $u_2 = 7$."
    },
    {
      "id": "L1-SUI-4",
      "tier": 4,
      "type": "mcq",
      "title": "Bolzano-Weierstrass : rôle de l'hypothèse « bornée »",
      "skill": "Utiliser le théorème de Bolzano-Weierstrass et sa contraposée",
      "statement": "Laquelle de ces suites, définies pour $n \\ge 1$, n'admet aucune suite extraite convergente ?",
      "options": [
        "$u_n = n(-1)^n$",
        "$u_n = (-1)^n$",
        "$u_n = \\sin n$",
        "$u_n = (-1)^n + \\frac{1}{n}$"
      ],
      "correctIndex": 0,
      "answer": "$u_n = n(-1)^n$",
      "hint1": "Une suite bornée admet toujours une suite extraite convergente (Bolzano-Weierstrass) : commence par écarter les suites bornées.",
      "hint2": "Trois des suites sont bornées par $2$. Pour la dernière, compare $|u_{\\varphi(n)}|$ à $\\varphi(n)$, en utilisant $\\varphi(n) \\ge n$.",
      "solution": "Les suites $(-1)^n$, $\\sin n$ et $(-1)^n + \\frac{1}{n}$ sont bornées : par le théorème de Bolzano-Weierstrass, chacune admet une suite extraite convergente (par exemple $u_{2n} \\to 1$ pour la première). Pour $u_n = n(-1)^n$ et toute extraction $\\varphi$, $|u_{\\varphi(n)}| = \\varphi(n) \\ge n$, donc $|u_{\\varphi(n)}| \\to +\\infty$ : aucune suite extraite n'est bornée, donc aucune ne converge."
    },
    {
      "id": "L1-SUI-8",
      "tier": 4,
      "type": "mcq",
      "title": "Suite récurrente d'ordre 2 périodique",
      "skill": "Exploiter une relation de récurrence pour établir une périodicité",
      "statement": "On définit $(u_n)$ par $u_0 = u_1 = 1$ et $u_{n+2} = u_{n+1} - u_n$ pour tout $n \\in \\mathbb{N}$. Que vaut $u_{2026}$ ?",
      "options": [
        "$-1$",
        "$1$",
        "$0$",
        "$2$"
      ],
      "correctIndex": 0,
      "answer": "$-1$",
      "hint1": "Calcule les premiers termes, puis cherche une relation entre $u_{n+3}$ et $u_n$.",
      "hint2": "Les premiers termes sont $1, 1, 0, -1, \\dots$ En écrivant $u_{n+3} = u_{n+2} - u_{n+1}$ et en remplaçant $u_{n+2}$, tu obtiens $u_{n+3} = -u_n$.",
      "solution": "$u_{n+3} = u_{n+2} - u_{n+1} = (u_{n+1} - u_n) - u_{n+1} = -u_n$, donc $u_{n+6} = -u_{n+3} = u_n$ : la suite est périodique de période $6$, de termes $1, 1, 0, -1, -1, 0$. Comme $2026 = 6 \\times 337 + 4$, on a $u_{2026} = u_4 = -1$. (L'équation caractéristique $r^2 = r - 1$ a pour racines $e^{\\pm i\\pi/3}$, d'où cette période $6$ : cours, section 9.)"
    }
  ],
  "L1-CNT": [
    {
      "id": "L1-CNT-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Rolle",
      "skill": "Énoncer le théorème de Rolle",
      "statement": "Soit $f$ continue sur $[a ; b]$, dérivable sur $]a ; b[$ avec $f(a) = f(b)$. Que garantit le théorème de Rolle ?",
      "options": [
        "$\\exists c \\in ]a ; b[, f'(c) = 0$",
        "$f$ est constante sur $[a ; b]$",
        "$f'(x) > 0$ partout",
        "$\\exists c \\in [a ; b], f(c) = 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\exists c \\in ]a ; b[, f'(c) = 0$",
      "hint1": "Interprète graphiquement : la courbe part et arrive à la même hauteur.",
      "hint2": "$f$ atteint un extremum en un point $c$ de $]a ; b[$ (si elle n'est pas constante) : que vaut la pente de la tangente en ce point ?",
      "solution": "Le théorème de Rolle assure qu'il existe au moins un point $c \\in ]a ; b[$ tel que $f'(c) = 0$."
    },
    {
      "id": "L1-CNT-1b",
      "tier": 1,
      "type": "mcq",
      "title": "Limite infinie en $+\\infty$",
      "skill": "Traduire une limite infinie avec des quantificateurs",
      "statement": "Soit $f : \\mathbb{R} \\to \\mathbb{R}$. Quelle assertion traduit $\\lim_{x \\to +\\infty} f(x) = +\\infty$ ?",
      "options": [
        "$\\forall M \\in \\mathbb{R},\\ \\exists A \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ x \\ge A \\implies f(x) \\ge M$",
        "$\\exists A \\in \\mathbb{R},\\ \\forall M \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ x \\ge A \\implies f(x) \\ge M$",
        "$\\forall M \\in \\mathbb{R},\\ \\exists A \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ f(x) \\ge M \\implies x \\ge A$",
        "$\\forall A \\in \\mathbb{R},\\ \\exists M \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ x \\ge A \\implies f(x) \\ge M$"
      ],
      "correctIndex": 0,
      "answer": "$\\forall M \\in \\mathbb{R},\\ \\exists A \\in \\mathbb{R},\\ \\forall x \\in \\mathbb{R},\\ x \\ge A \\implies f(x) \\ge M$",
      "hint1": "Dis-le d'abord en français : $f(x)$ dépasse n'importe quel seuil $M$ dès que $x$ est assez grand.",
      "hint2": "Le seuil $M$ est imposé, et le réel $A$ a le droit de dépendre de $M$ : regarde l'ordre des quantificateurs.",
      "solution": "$\\lim_{x \\to +\\infty} f(x) = +\\infty$ signifie : $\\forall M,\\ \\exists A,\\ \\forall x,\\ x \\ge A \\implies f(x) \\ge M$. Dans la deuxième assertion, le même $A$ devrait convenir pour tous les $M$ : elle est toujours fausse, car $f(A)$ devrait dépasser tout réel. La troisième inverse l'implication ; $x \\mapsto x^2$ tend vers $+\\infty$ en $+\\infty$ et ne la vérifie pas, car $f(x) \\ge 1$ a lieu pour $x$ aussi négatif que l'on veut. La quatrième dit seulement que $f$ est minorée sur chaque $[A ; +\\infty[$ ; la fonction $\\sin$ la vérifie sans avoir de limite."
    },
    {
      "id": "L1-CNT-2",
      "tier": 2,
      "type": "mcq",
      "title": "Théorème des Valeurs Intermédiaires",
      "skill": "Localiser une racine d'une fonction continue",
      "statement": "L'équation $x^3 + 3x - 1 = 0$ admet-elle une solution sur $[0 ; 1]$ ?",
      "options": [
        "Oui, car $f$ est continue et $f(0)f(1) < 0$",
        "Non, car $f(0) \\ne 0$",
        "Non, car le discriminant est négatif",
        "Impossible à savoir"
      ],
      "correctIndex": 0,
      "answer": "Oui, car $f$ est continue et $f(0)f(1) < 0$",
      "hint1": "$f(0) = -1 < 0$ et $f(1) = 3 > 0$.",
      "hint2": "$f$ est-elle continue sur $[0 ; 1]$ ? Quel théorème relie un changement de signe à l'existence d'une solution ?",
      "solution": "$f(0) = -1$ et $f(1) = 3$. Comme $f$ est continue sur $[0 ; 1]$, le TVI garantit l'existence d'une racine dans $]0 ; 1[$."
    },
    {
      "id": "L1-CNT-2b",
      "tier": 2,
      "type": "mcq",
      "title": "Limites à gauche et à droite",
      "skill": "Calculer des limites latérales et conclure sur la limite épointée",
      "statement": "Soit $f : \\mathbb{R}^* \\to \\mathbb{R}$ définie par $f(x) = \\frac{|x|}{x}$. Que peut-on dire de $f$ en $0$ ?",
      "options": [
        "$f$ a pour limite $1$ à droite, $-1$ à gauche, et n'a pas de limite épointée en $0$",
        "$f$ a pour limite $-1$ à droite, $1$ à gauche, et n'a pas de limite épointée en $0$",
        "$f$ a pour limite épointée $1$ en $0$",
        "$f$ a pour limite épointée $0$ en $0$"
      ],
      "correctIndex": 0,
      "answer": "$f$ a pour limite $1$ à droite, $-1$ à gauche, et n'a pas de limite épointée en $0$",
      "hint1": "Simplifie $f(x)$ selon le signe de $x$.",
      "hint2": "Pour $x > 0$, $|x| = x$ ; traite de même le cas $x < 0$, puis compare les deux limites.",
      "solution": "Si $x > 0$, $f(x) = \\frac{x}{x} = 1$, donc $\\lim_{x \\to 0^+} f(x) = 1$. Si $x < 0$, $f(x) = \\frac{-x}{x} = -1$, donc $\\lim_{x \\to 0^-} f(x) = -1$. Les limites à gauche et à droite existant sans être égales, $f$ n'a pas de limite épointée en $0$."
    },
    {
      "id": "L1-CNT-2f",
      "tier": 2,
      "type": "mcq",
      "title": "Reconnaître une fonction convexe",
      "skill": "Utiliser la caractérisation $f'' \\ge 0$ de la convexité",
      "statement": "Laquelle de ces fonctions est convexe sur $\\mathbb{R}$ ?",
      "options": [
        "$x \\mapsto x^4$",
        "$x \\mapsto x^3$",
        "$x \\mapsto -x^2$",
        "$x \\mapsto \\sin x$"
      ],
      "correctIndex": 0,
      "answer": "$x \\mapsto x^4$",
      "hint1": "Une fonction deux fois dérivable sur un intervalle est convexe si et seulement si sa dérivée seconde est positive ou nulle sur cet intervalle.",
      "hint2": "Calcule les dérivées secondes : $6x$ pour $x^3$, $-2$ pour $-x^2$, $-\\sin x$ pour $\\sin x$. Laquelle reste positive ou nulle sur tout $\\mathbb{R}$ ?",
      "solution": "Pour $f(x) = x^4$, $f''(x) = 12x^2 \\ge 0$ sur $\\mathbb{R}$, donc $f$ est convexe (la dérivée seconde s'annule en $0$, mais seule sa positivité compte). En revanche, $(x^3)'' = 6x$ est négative pour $x < 0$, $(-x^2)'' = -2 < 0$ (fonction concave), et $(\\sin x)'' = -\\sin x$ change de signe : aucune de ces trois fonctions n'est convexe sur $\\mathbb{R}$."
    },
    {
      "id": "L1-CNT-2c",
      "tier": 2,
      "type": "mcq",
      "title": "Dérivée de la fonction arc sinus",
      "skill": "Dériver une réciproque : domaine et dérivée de $\\arcsin$",
      "statement": "La fonction $\\arcsin$ est la réciproque de la restriction de $\\sin$ à $\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$. Sur quel ensemble est-elle dérivable, et quelle est sa dérivée ?",
      "options": [
        "Sur $]-1 ; 1[$, avec $\\arcsin'(x) = \\frac{1}{\\sqrt{1 - x^2}}$",
        "Sur $[-1 ; 1]$, avec $\\arcsin'(x) = \\frac{1}{\\sqrt{1 - x^2}}$",
        "Sur $]-1 ; 1[$, avec $\\arcsin'(x) = -\\frac{1}{\\sqrt{1 - x^2}}$",
        "Sur $\\mathbb{R}$, avec $\\arcsin'(x) = \\frac{1}{1 + x^2}$"
      ],
      "correctIndex": 0,
      "answer": "Sur $]-1 ; 1[$, avec $\\arcsin'(x) = \\frac{1}{\\sqrt{1 - x^2}}$",
      "hint1": "Applique la formule $(f^{-1})'(y) = \\frac{1}{f'(f^{-1}(y))}$ avec $f = \\sin$ restreinte à $\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$ : elle exige $f'(f^{-1}(y)) \\neq 0$.",
      "hint2": "Pose $\\theta = \\arcsin x$ : exprime $\\cos\\theta$ en fonction de $x$ à l'aide de $\\cos^2\\theta + \\sin^2\\theta = 1$, en tenant compte du signe de $\\cos$ sur $\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$.",
      "solution": "Pour $x \\in [-1 ; 1]$, posons $\\theta = \\arcsin x \\in \\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$. On a $\\cos\\theta \\ge 0$, donc $\\cos\\theta = \\sqrt{1 - \\sin^2\\theta} = \\sqrt{1 - x^2}$. Ce nombre est non nul si et seulement si $x \\in\\, ]-1 ; 1[$ ; la formule de dérivation d'une réciproque donne alors $\\arcsin'(x) = \\frac{1}{\\cos(\\arcsin x)} = \\frac{1}{\\sqrt{1 - x^2}}$. En $\\pm 1$, le taux d'accroissement tend vers $+\\infty$ : la courbe a une tangente verticale et $\\arcsin$ n'y est pas dérivable. La dérivée $-\\frac{1}{\\sqrt{1 - x^2}}$ est celle de $\\arccos$, et $\\frac{1}{1 + x^2}$ celle de $\\arctan$."
    },
    {
      "id": "L1-CNT-3f",
      "tier": 3,
      "type": "mcq",
      "title": "Convexité et inégalité de tangente",
      "skill": "Déduire une inégalité de la position d'une courbe convexe par rapport à une tangente",
      "statement": "Soit $f : x \\mapsto x\\ln x$ sur $]0 ; +\\infty[$. Laquelle des affirmations suivantes est vraie ?",
      "options": [
        "$f$ est convexe et $x\\ln x \\ge x - 1$ pour tout $x > 0$",
        "$f$ est concave et $x\\ln x \\le x - 1$ pour tout $x > 0$",
        "$f$ est convexe et $x\\ln x \\le x - 1$ pour tout $x > 0$",
        "$f$ n'est ni convexe ni concave sur $]0 ; +\\infty[$"
      ],
      "correctIndex": 0,
      "answer": "$f$ est convexe et $x\\ln x \\ge x - 1$ pour tout $x > 0$",
      "hint1": "Calcule $f'$ et $f''$ ; une fonction convexe et dérivable a sa courbe au-dessus de chacune de ses tangentes.",
      "hint2": "$f'(x) = \\ln x + 1$ et $f''(x) = \\frac{1}{x}$. Écris l'équation de la tangente au point d'abscisse $1$.",
      "solution": "On a $f'(x) = \\ln x + 1$ et $f''(x) = \\frac{1}{x} > 0$ sur $]0 ; +\\infty[$, donc $f$ est convexe. Sa courbe est au-dessus de ses tangentes ; au point d'abscisse $1$, $f(1) = 0$ et $f'(1) = 1$, la tangente a pour équation $y = x - 1$. Donc $x\\ln x \\ge x - 1$ pour tout $x > 0$, avec égalité seulement en $x = 1$. L'inégalité inverse est fausse : pour $x = e$, $e\\ln e = e > e - 1$."
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
      "hint1": "Forme indéterminée $\\frac{0}{0}$ : vérifie les hypothèses de la règle de L'Hôpital (voir le cours), puis étudie le quotient des dérivées.",
      "hint2": "Les dérivées du numérateur et du dénominateur sont $2e^{2x}$ et $3\\cos(3x)$ : évalue leur quotient en $x = 0$.",
      "solution": "Posons $f(x) = e^{2x} - 1$ et $g(x) = \\sin(3x)$. Ces fonctions sont dérivables, $f(0) = g(0) = 0$, et $g'(x) = 3\\cos(3x)$ ne s'annule pas au voisinage de $0$. Comme $\\frac{f'(x)}{g'(x)} = \\frac{2e^{2x}}{3\\cos(3x)} \\to \\frac{2}{3}$ quand $x \\to 0$, la règle de L'Hôpital donne $\\lim_{x \\to 0} \\frac{e^{2x}-1}{\\sin(3x)} = \\frac{2}{3}$."
    },
    {
      "id": "L1-CNT-3b",
      "tier": 3,
      "type": "mcq",
      "title": "Une relation entre arc tangentes",
      "skill": "Montrer qu'une fonction est constante sur un intervalle par le calcul de sa dérivée",
      "statement": "Pour $x > 0$, que vaut $\\arctan x + \\arctan\\frac{1}{x}$ ?",
      "options": [
        "$\\frac{\\pi}{2}$",
        "$\\frac{\\pi}{4}$",
        "$0$",
        "$\\pi$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{\\pi}{2}$",
      "hint1": "Pose $\\varphi(x) = \\arctan x + \\arctan\\frac{1}{x}$ et calcule $\\varphi'(x)$ sur $]0 ; +\\infty[$, avec $\\arctan'(u) = \\frac{1}{1 + u^2}$.",
      "hint2": "La dérivée de $x \\mapsto \\arctan\\frac{1}{x}$ est $-\\frac{1}{x^2} \\cdot \\frac{1}{1 + \\frac{1}{x^2}}$ : simplifie-la et compare-la à $\\frac{1}{1 + x^2}$. Que dire d'une fonction de dérivée nulle sur un intervalle ?",
      "solution": "Pour $x > 0$, $\\varphi'(x) = \\frac{1}{1 + x^2} - \\frac{1}{x^2} \\cdot \\frac{1}{1 + \\frac{1}{x^2}} = \\frac{1}{1 + x^2} - \\frac{1}{x^2 + 1} = 0$. Comme $]0 ; +\\infty[$ est un intervalle, $\\varphi$ y est constante (accroissements finis), égale à $\\varphi(1) = 2\\arctan 1 = 2 \\times \\frac{\\pi}{4} = \\frac{\\pi}{2}$. Remarque : sur $]-\\infty ; 0[$, l'imparité donne $\\varphi = -\\frac{\\pi}{2}$ ; l'égalité n'est donc pas vraie pour tout $x \\neq 0$, car $\\mathbb{R}^*$ n'est pas un intervalle."
    },
    {
      "id": "L1-CNT-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème de Heine et continuité uniforme",
      "skill": "Distinguer continuité et continuité uniforme",
      "statement": "Laquelle de ces fonctions n'est pas uniformément continue sur l'intervalle indiqué ?",
      "options": [
        "$x \\mapsto x^3$ sur $[0 ; +\\infty[$",
        "$x \\mapsto x^3$ sur $[0 ; 5]$",
        "$x \\mapsto \\sqrt{x}$ sur $[0 ; +\\infty[$",
        "$x \\mapsto \\sin(2x)$ sur $\\mathbb{R}$"
      ],
      "correctIndex": 0,
      "answer": "$x \\mapsto x^3$ sur $[0 ; +\\infty[$",
      "hint1": "Écarte les fonctions continues sur un segment (théorème de Heine) et les fonctions lipschitziennes ; pour $\\sqrt{x}$, montre que $|\\sqrt{x} - \\sqrt{y}| \\le \\sqrt{|x - y|}$.",
      "hint2": "Pour la fonction restante, prends $x_n = n + \\frac{1}{n^2}$ et $y_n = n$ : compare $f(x_n) - f(y_n)$ à $3$.",
      "solution": "$x \\mapsto x^3$ est continue sur le segment $[0 ; 5]$, donc uniformément continue (théorème de Heine). $x \\mapsto \\sin(2x)$ est $2$-lipschitzienne (accroissements finis). Pour $0 \\le y \\le x$, $(\\sqrt{y} + \\sqrt{x - y})^2 \\ge x$, d'où $\\sqrt{x} - \\sqrt{y} \\le \\sqrt{x - y}$ : on prend $\\delta = \\varepsilon^2$. Enfin, avec $x_n = n + \\frac{1}{n^2}$ et $y_n = n$, on a $|x_n - y_n| \\to 0$ mais $x_n^3 - y_n^3 = 3 + \\frac{3}{n^3} + \\frac{1}{n^6} \\ge 3$ : $x \\mapsto x^3$ n'est pas uniformément continue sur $[0 ; +\\infty[$."
    },
    {
      "id": "L1-CNT-4b",
      "tier": 4,
      "type": "mcq",
      "title": "Réciproque du sinus hyperbolique",
      "skill": "Expliciter la réciproque d'une bijection en résolvant une équation",
      "statement": "La fonction $\\sinh : x \\mapsto \\frac{e^x - e^{-x}}{2}$ est une bijection de $\\mathbb{R}$ sur $\\mathbb{R}$. Pour $y \\in \\mathbb{R}$, quel est l'unique réel $x$ tel que $\\sinh x = y$ ?",
      "options": [
        "$x = \\ln\\left(y + \\sqrt{y^2 + 1}\\right)$",
        "$x = \\ln\\left(y + \\sqrt{y^2 - 1}\\right)$",
        "$x = \\ln\\left(\\sqrt{y^2 + 1} - y\\right)$",
        "$x = \\frac{1}{2}\\ln\\left(\\frac{1 + y}{1 - y}\\right)$"
      ],
      "correctIndex": 0,
      "answer": "$x = \\ln\\left(y + \\sqrt{y^2 + 1}\\right)$",
      "hint1": "Pose $X = e^x$, avec $X > 0$, et multiplie l'équation $\\frac{X - X^{-1}}{2} = y$ par $2X$.",
      "hint2": "Tu obtiens $X^2 - 2yX - 1 = 0$. Le produit des deux racines vaut $-1$ : une seule est strictement positive.",
      "solution": "Avec $X = e^x > 0$, l'équation $\\sinh x = y$ équivaut à $X^2 - 2yX - 1 = 0$, de discriminant $4(y^2 + 1) > 0$ et de racines $y \\pm \\sqrt{y^2 + 1}$. Leur produit vaut $-1$ ; comme $\\sqrt{y^2 + 1} > |y|$, seule $y + \\sqrt{y^2 + 1}$ est strictement positive. Donc $e^x = y + \\sqrt{y^2 + 1}$, soit $x = \\ln\\left(y + \\sqrt{y^2 + 1}\\right)$. La deuxième expression n'est définie que pour $|y| \\ge 1$ (c'est la réciproque de $\\cosh$ sur $[0 ; +\\infty[$), la troisième vaut $-\\ln\\left(y + \\sqrt{y^2 + 1}\\right)$, soit l'opposé de la bonne réponse, et la quatrième est la réciproque de $\\tanh$, définie sur $]-1 ; 1[$."
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
      "id": "L1-TAY-5",
      "tier": 1,
      "type": "mcq",
      "title": "Hypothèse de la formule de Taylor-Young",
      "skill": "Connaître les hypothèses de la formule de Taylor-Young",
      "statement": "Soit $f : I \\to \\mathbb{R}$, $a \\in I$ et $n \\ge 2$. Quelle hypothèse permet d'écrire la formule de Taylor-Young à l'ordre $n$ en $a$ : $f(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x - a)^k + o\\big((x - a)^n\\big)$ ?",
      "options": [
        "$f$ est de classe $\\mathcal{C}^n$ sur $I$",
        "$f$ est continue sur $I$",
        "$f$ est dérivable en $a$",
        "$f$ est bornée sur $I$"
      ],
      "correctIndex": 0,
      "answer": "$f$ est de classe $\\mathcal{C}^n$ sur $I$",
      "hint1": "La formule fait intervenir $f^{(n)}(a)$ : quelle hypothèse garantit au moins l'existence de cette dérivée ?",
      "hint2": "Une fonction seulement dérivable en $a$ n'a pas forcément de dérivée seconde en $a$ : l'hypothèse doit porter sur les dérivées jusqu'à l'ordre $n$.",
      "solution": "La formule de Taylor-Young s'applique si $f$ est de classe $\\mathcal{C}^n$ sur $I$ (cours, section 4 ; il suffit même que $f$ soit $n$ fois dérivable en $a$). La continuité, la dérivabilité en $a$ ou le caractère borné ne garantissent pas l'existence de $f^{(n)}(a)$ pour $n \\ge 2$."
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
      "id": "L1-TAY-6",
      "tier": 2,
      "type": "mcq",
      "title": "Produit de développements limités",
      "skill": "Calculer le DL d'un produit",
      "statement": "Quel est le développement limité à l'ordre 3 en $0$ de $e^x \\sin x$ ?",
      "options": [
        "$x + x^2 + \\frac{x^3}{3} + o(x^3)$",
        "$x + x^2 + \\frac{x^3}{2} + o(x^3)$",
        "$x + x^2 - \\frac{x^3}{6} + o(x^3)$",
        "$x - \\frac{x^3}{6} + o(x^3)$"
      ],
      "correctIndex": 0,
      "answer": "$x + x^2 + \\frac{x^3}{3} + o(x^3)$",
      "hint1": "Multiplie les DL de $e^x$ et de $\\sin x$, en ne gardant que les termes de degré au plus $3$.",
      "hint2": "$\\left(1 + x + \\frac{x^2}{2}\\right)\\left(x - \\frac{x^3}{6}\\right)$ : le terme en $x^3$ provient de $\\frac{x^2}{2} \\times x$ et de $1 \\times \\left(-\\frac{x^3}{6}\\right)$.",
      "solution": "$e^x = 1 + x + \\frac{x^2}{2} + o(x^2)$ et $\\sin x = x - \\frac{x^3}{6} + o(x^3)$ ; comme $\\sin x = O(x)$, l'ordre 2 suffit pour $e^x$. Le produit vaut $x + x^2 + \\frac{x^3}{2} - \\frac{x^3}{6} + o(x^3) = x + x^2 + \\frac{x^3}{3} + o(x^3)$."
    },
    {
      "id": "L1-TAY-3",
      "tier": 3,
      "type": "mcq",
      "title": "Reste de Taylor-Lagrange",
      "skill": "Estimer l'erreur dans la formule de Taylor",
      "statement": "Pour $f(x) = e^x$ sur $[0 ; 1]$ à l'ordre 1, l'erreur $e - 2$ s'écrit :",
      "options": [
        "$\\frac{e^c}{2}$ avec $c \\in ]0 ; 1[$",
        "$\\frac{e^c}{6}$ avec $c \\in ]0 ; 1[$",
        "$e^c$ avec $c \\in ]0 ; 1[$",
        "$\\frac{e}{2}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{e^c}{2}$ avec $c \\in ]0 ; 1[$",
      "hint1": "Le reste d'ordre 1 est $\\frac{f''(c)}{2!}(1-0)^2$.",
      "hint2": "Ici $f(1) - (f(0) + f'(0)) = e - 2$ : calcule $f''(t)$ et remplace dans la formule du reste.",
      "solution": "Par Taylor-Lagrange à l'ordre 1 : $e = 1 + 1 + \\frac{e^c}{2}$, donc $e - 2 = \\frac{e^c}{2}$ avec $c \\in ]0 ; 1[$. Le facteur $\\frac{1}{6} = \\frac{1}{3!}$ correspondrait au reste d'ordre 2, et $e^c$ oublie le $2!$. Enfin $\\frac{e}{2} > 1 > e - 2$ : le point $c$ est strictement entre $0$ et $1$, il n'est pas égal à $1$."
    },
    {
      "id": "L1-TAY-7",
      "tier": 3,
      "type": "mcq",
      "title": "Position par rapport à la tangente et point d'inflexion",
      "skill": "Utiliser un DL pour étudier la position d'une courbe par rapport à sa tangente",
      "statement": "Soit $f(x) = e^x \\cos x$. À l'aide d'un développement limité à l'ordre 3 en $0$, déterminer la position de la courbe de $f$ par rapport à sa tangente au point d'abscisse $0$.",
      "options": [
        "La courbe traverse sa tangente $y = 1 + x$ : au-dessus pour $x < 0$, en dessous pour $x > 0$",
        "La courbe traverse sa tangente $y = 1 + x$ : en dessous pour $x < 0$, au-dessus pour $x > 0$",
        "La courbe est au-dessus de sa tangente $y = 1 + x$ au voisinage de $0$",
        "La courbe est en dessous de sa tangente $y = 1 + x$ au voisinage de $0$"
      ],
      "correctIndex": 0,
      "answer": "La courbe traverse sa tangente $y = 1 + x$ : au-dessus pour $x < 0$, en dessous pour $x > 0$",
      "hint1": "Multiplie les DL de $e^x$ et de $\\cos x$ à l'ordre 3 ; le premier terme non nul après la partie affine donne la position.",
      "hint2": "Le terme en $x^2$ vaut $\\frac{1}{2} - \\frac{1}{2} = 0$ : calcule le terme en $x^3$.",
      "solution": "$e^x \\cos x = \\left(1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}\\right)\\left(1 - \\frac{x^2}{2}\\right) + o(x^3) = 1 + x + \\left(\\frac{1}{6} - \\frac{1}{2}\\right)x^3 + o(x^3) = 1 + x - \\frac{x^3}{3} + o(x^3)$. La tangente en $0$ est $y = 1 + x$ et $f(x) - (1 + x) \\sim -\\frac{x^3}{3}$, qui change de signe en $0$ : positif pour $x < 0$, négatif pour $x > 0$. La courbe traverse sa tangente : c'est un point d'inflexion."
    },
    {
      "id": "L1-TAY-4",
      "tier": 4,
      "type": "mcq",
      "title": "Asymptote oblique et position par DL",
      "skill": "Étudier la position d'une courbe par rapport à son asymptote à l'aide d'un DL",
      "statement": "Pour $x > 0$, on pose $f(x) = x\\,e^{1/x}$. Quelle est l'asymptote à la courbe de $f$ en $+\\infty$, et quelle est la position de la courbe par rapport à elle ?",
      "options": [
        "Asymptote $y = x + 1$, courbe au-dessus",
        "Asymptote $y = x + 1$, courbe en dessous",
        "Asymptote $y = x$, courbe au-dessus",
        "Asymptote $y = x + \\frac{1}{2}$, courbe au-dessus"
      ],
      "correctIndex": 0,
      "answer": "Asymptote $y = x + 1$, courbe au-dessus",
      "hint1": "Pose $h = \\frac{1}{x}$, qui tend vers $0$, et développe $e^h$ à l'ordre 2.",
      "hint2": "$x\\,e^{1/x} = x\\left(1 + \\frac{1}{x} + \\frac{1}{2x^2} + o\\left(\\frac{1}{x^2}\\right)\\right)$ : développe, puis étudie le signe de $f(x) - (x + 1)$.",
      "solution": "Avec $h = \\frac{1}{x} \\to 0$, $e^h = 1 + h + \\frac{h^2}{2} + o(h^2)$, donc $f(x) = x + 1 + \\frac{1}{2x} + o\\left(\\frac{1}{x}\\right)$. La droite $y = x + 1$ est asymptote en $+\\infty$, et $f(x) - (x + 1) \\sim \\frac{1}{2x} > 0$ : la courbe est au-dessus de l'asymptote pour $x$ assez grand."
    },
    {
      "id": "L1-TAY-8",
      "tier": 4,
      "type": "mcq",
      "title": "DL d'ordre 2 et dérivée seconde",
      "skill": "Savoir qu'un DL d'ordre 2 n'implique pas l'existence de $f''(a)$",
      "statement": "Soit $f$ définie sur $\\mathbb{R}$ par $f(0) = 0$ et $f(x) = x^3 \\sin\\left(\\frac{1}{x}\\right)$ pour $x \\neq 0$. Laquelle des affirmations suivantes est vraie ?",
      "options": [
        "$f(x) = o(x^2)$ en $0$, donc $f$ admet un DL d'ordre 2 en $0$, mais $f''(0)$ n'existe pas",
        "$f$ n'admet pas de DL d'ordre 2 en $0$, car $\\sin\\left(\\frac{1}{x}\\right)$ n'a pas de limite en $0$",
        "$f''(0)$ existe et vaut $0$, puisque $f$ admet un DL d'ordre 2 en $0$",
        "$f$ n'est pas dérivable en $0$"
      ],
      "correctIndex": 0,
      "answer": "$f(x) = o(x^2)$ en $0$, donc $f$ admet un DL d'ordre 2 en $0$, mais $f''(0)$ n'existe pas",
      "hint1": "Encadre $|f(x)|$ pour obtenir un DL ; pour $f''(0)$, calcule $f'$ puis étudie le taux d'accroissement $\\frac{f'(x) - f'(0)}{x}$.",
      "hint2": "Pour $x \\neq 0$, $f'(x) = 3x^2 \\sin\\left(\\frac{1}{x}\\right) - x\\cos\\left(\\frac{1}{x}\\right)$, et $f'(0) = \\lim_{x \\to 0} \\frac{f(x)}{x} = 0$.",
      "solution": "$|f(x)| \\le |x|^3$, donc $f(x) = o(x^2)$ : $f$ admet en $0$ le DL $f(x) = 0 + 0x + 0x^2 + o(x^2)$. Elle est dérivable en $0$ avec $f'(0) = \\lim \\frac{f(x)}{x} = 0$. Mais $\\frac{f'(x) - f'(0)}{x} = 3x\\sin\\left(\\frac{1}{x}\\right) - \\cos\\left(\\frac{1}{x}\\right)$ n'a pas de limite en $0$ (le premier terme tend vers $0$, le second n'a pas de limite) : $f''(0)$ n'existe pas. Un DL d'ordre $n \\ge 2$ ne garantit donc pas l'existence de $f^{(n)}(a)$ ; seul le DL d'ordre 1 équivaut à la dérivabilité."
    }
  ],
  "L1-INT": [
    {
      "id": "L1-INT-6",
      "tier": 1,
      "type": "mcq",
      "title": "Primitive usuelle",
      "skill": "Connaître les primitives usuelles",
      "statement": "Quelle est une primitive de $x \\mapsto \\frac{1}{1 + x^2}$ sur $\\mathbb{R}$ ?",
      "options": [
        "$x \\mapsto \\arctan x$",
        "$x \\mapsto \\ln(1 + x^2)$",
        "$x \\mapsto -\\frac{2x}{(1 + x^2)^2}$",
        "$x \\mapsto \\arcsin x$"
      ],
      "correctIndex": 0,
      "answer": "$x \\mapsto \\arctan x$",
      "hint1": "Dérive chacune des fonctions proposées et compare le résultat à $\\frac{1}{1 + x^2}$.",
      "hint2": "$(\\ln(1 + x^2))' = \\frac{2x}{1 + x^2}$ et $\\arcsin$ n'est définie que sur $[-1 ; 1]$.",
      "solution": "$\\arctan$ est dérivable sur $\\mathbb{R}$ et $\\arctan'(x) = \\frac{1}{1 + x^2}$ (cours, section 6). En revanche $(\\ln(1 + x^2))' = \\frac{2x}{1 + x^2}$, $-\\frac{2x}{(1 + x^2)^2}$ est la dérivée de $\\frac{1}{1 + x^2}$ (et non une primitive), et $\\arcsin$ n'est définie que sur $[-1 ; 1]$, de dérivée $\\frac{1}{\\sqrt{1 - x^2}}$."
    },
    {
      "id": "L1-INT-7",
      "tier": 1,
      "type": "mcq",
      "title": "Calcul d'une intégrale par primitive",
      "skill": "Calculer une intégrale avec le théorème fondamental",
      "statement": "Que vaut $\\int_0^2 (3x^2 - 2x)\\,dx$ ?",
      "options": [
        "$4$",
        "$8$",
        "$6$",
        "$12$"
      ],
      "correctIndex": 0,
      "answer": "$4$",
      "hint1": "Cherche une primitive $F$ de $x \\mapsto 3x^2 - 2x$, puis calcule $F(2) - F(0)$.",
      "hint2": "Une primitive est $F(x) = x^3 - x^2$.",
      "solution": "Une primitive de $x \\mapsto 3x^2 - 2x$ est $F(x) = x^3 - x^2$, donc $\\int_0^2 (3x^2 - 2x)\\,dx = F(2) - F(0) = (8 - 4) - 0 = 4$."
    },
    {
      "id": "L1-INT-2",
      "tier": 2,
      "type": "mcq",
      "title": "Intégration par parties",
      "skill": "Calculer $\\int_1^e x^2 \\ln x\\,dx$",
      "statement": "Que vaut l'intégrale $\\int_1^e x^2 \\ln(x)\\,dx$ ?",
      "options": [
        "$\\frac{2e^3 + 1}{9}$",
        "$\\frac{2e^3 - 1}{9}$",
        "$\\frac{e^3}{3}$",
        "$\\frac{e^3 + 1}{9}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{2e^3 + 1}{9}$",
      "hint1": "Intègre par parties en dérivant $\\ln x$ et en primitivant $x^2$.",
      "hint2": "On obtient $\\left[\\frac{x^3 \\ln x}{3}\\right]_1^e - \\int_1^e \\frac{x^2}{3}\\,dx$ : calcule chacun des deux termes.",
      "solution": "Avec $u = \\ln x$ et $v' = x^2$ (donc $u' = \\frac{1}{x}$, $v = \\frac{x^3}{3}$), fonctions de classe $\\mathcal{C}^1$ sur $[1 ; e]$ : $\\int_1^e x^2 \\ln x\\,dx = \\left[\\frac{x^3 \\ln x}{3}\\right]_1^e - \\int_1^e \\frac{x^2}{3}\\,dx = \\frac{e^3}{3} - \\frac{e^3 - 1}{9} = \\frac{2e^3 + 1}{9}$."
    },
    {
      "id": "L1-INT-5",
      "tier": 2,
      "type": "mcq",
      "title": "Intégrale nulle d'une fonction continue positive",
      "skill": "Exploiter la positivité et la continuité dans une intégrale",
      "statement": "Soit $f$ continue et positive sur $[0 ; 1]$ telle que $\\int_0^1 f(t)\\,dt = 0$. Que peut-on affirmer ?",
      "options": [
        "$f$ est nulle sur $[0 ; 1]$",
        "$f$ s'annule au moins une fois sur $[0 ; 1]$, sans être forcément nulle",
        "$f$ est constante non nulle",
        "Rien de plus : une fonction continue positive non nulle peut avoir une intégrale nulle"
      ],
      "correctIndex": 0,
      "answer": "$f$ est nulle sur $[0 ; 1]$",
      "hint1": "Raisonne par l'absurde : suppose que $f(x_0) > 0$ en un point $x_0$ et utilise la continuité de $f$ en $x_0$.",
      "hint2": "Par continuité, il existe un segment $[c ; d] \\subset [0 ; 1]$, avec $c < d$, contenant $x_0$, sur lequel $f \\ge \\frac{f(x_0)}{2}$ : minore l'intégrale à l'aide de ce segment.",
      "solution": "Supposons $f(x_0) > 0$. Par continuité, il existe $c < d$ dans $[0 ; 1]$ avec $x_0 \\in [c ; d]$ et $f \\ge \\frac{f(x_0)}{2}$ sur $[c ; d]$. Comme $f \\ge 0$, $\\int_0^1 f \\ge \\int_c^d f \\ge (d - c)\\frac{f(x_0)}{2} > 0$ : contradiction. Donc $f$ est nulle sur $[0 ; 1]$. L'hypothèse de continuité est indispensable : la fonction nulle sauf en un point, où elle vaut $1$, est positive, non nulle et d'intégrale nulle."
    },
    {
      "id": "L1-INT-1",
      "tier": 3,
      "type": "mcq",
      "title": "Somme de Riemann élémentaire",
      "skill": "Calculer la limite d'une somme de Riemann",
      "statement": "Quelle est la limite quand $n \\to +\\infty$ de $S_n = \\sum_{k=1}^{n} \\frac{k^2}{n^3}$ ?",
      "options": [
        "$\\frac{1}{3}$",
        "$\\frac{1}{2}$",
        "$1$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{3}$",
      "hint1": "Fais apparaître une somme de Riemann $\\frac{1}{n}\\sum_{k=1}^{n} f\\left(\\frac{k}{n}\\right)$ : identifie la fonction $f$ et l'intervalle (cours, section 5).",
      "hint2": "$\\frac{k^2}{n^3} = \\frac{1}{n}\\left(\\frac{k}{n}\\right)^2$ : la fonction est $x \\mapsto x^2$, continue sur $[0 ; 1]$.",
      "solution": "$S_n = \\frac{1}{n}\\sum_{k=1}^{n} \\left(\\frac{k}{n}\\right)^2$ est une somme de Riemann de $x \\mapsto x^2$, continue sur $[0 ; 1]$. Donc $S_n \\to \\int_0^1 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3}$. Chaque terme tend vers $0$, mais leur nombre augmente : la limite n'est pas $0$. Vérification : $\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$, d'où $S_n = \\frac{(n+1)(2n+1)}{6n^2} \\to \\frac{2}{6} = \\frac{1}{3}$."
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
    },
    {
      "id": "L1-INT-8",
      "tier": 4,
      "type": "mcq",
      "title": "Limite d'une suite d'intégrales",
      "skill": "Encadrer une suite d'intégrales pour en trouver la limite",
      "statement": "Pour $n \\in \\mathbb{N}$, on pose $I_n = \\int_0^1 \\frac{x^n}{1 + x}\\,dx$. Que vaut $\\lim_{n \\to +\\infty} I_n$ ?",
      "options": [
        "$0$, car $0 \\le I_n \\le \\frac{1}{n + 1}$",
        "$\\ln 2$, car $\\int_0^1 \\frac{dx}{1 + x} = \\ln 2$",
        "$\\frac{1}{2}$, car $\\frac{x^n}{1 + x}$ vaut $\\frac{1}{2}$ en $x = 1$",
        "La suite $(I_n)$ n'a pas de limite"
      ],
      "correctIndex": 0,
      "answer": "$0$, car $0 \\le I_n \\le \\frac{1}{n + 1}$",
      "hint1": "Encadre la fonction intégrée sur $[0 ; 1]$ par deux fonctions simples, puis intègre l'encadrement (positivité de l'intégrale).",
      "hint2": "Pour $x \\in [0 ; 1]$, $1 \\le 1 + x$, donc $0 \\le \\frac{x^n}{1 + x} \\le x^n$.",
      "solution": "Pour $x \\in [0 ; 1]$, $0 \\le \\frac{x^n}{1 + x} \\le x^n$. Par croissance de l'intégrale, $0 \\le I_n \\le \\int_0^1 x^n\\,dx = \\frac{1}{n + 1}$, donc $I_n \\to 0$ par encadrement. La valeur $\\ln 2$ est celle de $I_0$ seulement, et la valeur en $x = 1$ ne suffit pas : $\\frac{x^n}{1 + x} \\to 0$ pour tout $x \\in [0 ; 1[$."
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
      "id": "L1-GEO-3",
      "tier": 1,
      "type": "mcq",
      "title": "Conique monofocale et excentricité",
      "skill": "Déterminer la nature d'une conique selon son excentricité",
      "statement": "Soit une conique propre de foyer $F$, de directrice $\\mathcal{D}$ et d'excentricité $e = 0{,}75$. Quelle est sa nature géométrique ?",
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
      "id": "L1-GEO-2b",
      "tier": 2,
      "type": "mcq",
      "title": "Barycentre de deux points pondérés",
      "skill": "Calculer les coordonnées d'un barycentre",
      "statement": "Dans un repère, on considère $A(1 ; 2)$ et $B(7 ; -4)$. Quelles sont les coordonnées du barycentre $G$ de $(A, 2)$ et $(B, 1)$ ?",
      "options": [
        "$G(3 ; 0)$",
        "$G(5 ; -2)$",
        "$G(9 ; 0)$",
        "$G(4 ; -1)$"
      ],
      "correctIndex": 0,
      "answer": "$G(3 ; 0)$",
      "hint1": "On a $x_G = \\dfrac{a x_A + b x_B}{a + b}$, de même pour $y_G$.",
      "hint2": "Ici la somme des coefficients vaut $3$ : calcule d'abord $2 x_A + x_B$.",
      "solution": "La somme des coefficients vaut $3 \\neq 0$. $x_G = \\dfrac{2 \\times 1 + 7}{3} = 3$ et $y_G = \\dfrac{2 \\times 2 + (-4)}{3} = 0$, donc $G(3 ; 0)$."
    },
    {
      "id": "L1-GEO-5",
      "tier": 2,
      "type": "mcq",
      "title": "Écriture complexe d'une rotation",
      "skill": "Écrire une rotation sous la forme $z' = az + b$",
      "statement": "Dans le plan complexe, quelle est l'écriture complexe de la rotation de centre $\\Omega$ d'affixe $1 + i$ et d'angle $\\frac{\\pi}{2}$ ?",
      "options": [
        "$z' = iz + 2$",
        "$z' = iz + 1 + i$",
        "$z' = iz$",
        "$z' = -iz + 2i$"
      ],
      "correctIndex": 0,
      "answer": "$z' = iz + 2$",
      "hint1": "La rotation de centre $\\Omega(\\omega)$ et d'angle $\\theta$ s'écrit $z' - \\omega = e^{i\\theta}(z - \\omega)$ (cours, section 8).",
      "hint2": "Ici $e^{i\\pi/2} = i$ : $z' = i(z - 1 - i) + 1 + i$ ; développe.",
      "solution": "$z' - (1 + i) = i\\big(z - (1 + i)\\big)$, donc $z' = iz - i - i^2 + 1 + i = iz + 2$. Vérification : $\\Omega$ est fixe, car $i(1 + i) + 2 = 1 + i$. L'écriture $z' = -iz + 2i$ fixe aussi $1 + i$, mais c'est la rotation d'angle $-\\frac{\\pi}{2}$."
    },
    {
      "id": "L1-GEO-4",
      "tier": 3,
      "type": "mcq",
      "title": "Équation réduite d'une ellipse et distance focale",
      "skill": "Calculer la distance focale 2c et l'excentricité d'une ellipse",
      "statement": "Soit l'ellipse d'équation réduite $\\frac{x^2}{169} + \\frac{y^2}{144} = 1$. Que vaut sa distance focale $2c$ (distance entre ses deux foyers) ?",
      "options": [
        "$10$",
        "$5$",
        "$26$",
        "$2\\sqrt{313}$"
      ],
      "correctIndex": 0,
      "answer": "$10$",
      "hint1": "Identifie $a$ et $b$ ($a > b$), puis utilise la relation $c^2 = a^2 - b^2$ propre à l'ellipse.",
      "hint2": "$a^2 = 169$ et $b^2 = 144$, donc $c^2 = 169 - 144$.",
      "solution": "On a $a = 13$ et $b = 12$. La relation $c^2 = a^2 - b^2$ donne $c^2 = 169 - 144 = 25$, d'où $c = 5$. La distance focale est $2c = 10$ (foyers $F(-5 ; 0)$ et $F'(5 ; 0)$). La valeur $2\\sqrt{313}$ viendrait de $c^2 = a^2 + b^2$, qui est la relation de l'hyperbole ; $26 = 2a$ est la longueur du grand axe."
    },
    {
      "id": "L1-GEO-6",
      "tier": 3,
      "type": "mcq",
      "title": "Éléments d'une similitude directe",
      "skill": "Déterminer centre, rapport et angle de $z \\mapsto az + b$",
      "statement": "Quelle est la nature de la transformation du plan d'écriture complexe $z' = (1 + i)z + 2$ ?",
      "options": [
        "Similitude de centre $\\Omega(2i)$, de rapport $\\sqrt{2}$ et d'angle $\\frac{\\pi}{4}$",
        "Similitude de centre $\\Omega(-2i)$, de rapport $\\sqrt{2}$ et d'angle $\\frac{\\pi}{4}$",
        "Similitude de centre $\\Omega(2i)$, de rapport $2$ et d'angle $\\frac{\\pi}{4}$",
        "Rotation de centre $\\Omega(2i)$ et d'angle $\\frac{\\pi}{4}$"
      ],
      "correctIndex": 0,
      "answer": "Similitude de centre $\\Omega(2i)$, de rapport $\\sqrt{2}$ et d'angle $\\frac{\\pi}{4}$",
      "hint1": "Cherche le point fixe $\\omega$ en résolvant $\\omega = (1 + i)\\omega + 2$, puis écris $a = 1 + i$ sous forme exponentielle (cours, section 8).",
      "hint2": "Le point fixe vérifie $-i\\omega = 2$ ; et $|1 + i| = \\sqrt{2}$.",
      "solution": "$\\omega = (1 + i)\\omega + 2 \\iff -i\\omega = 2 \\iff \\omega = \\frac{2}{-i} = 2i$. Alors $z' - 2i = (1 + i)(z - 2i)$, avec $1 + i = \\sqrt{2}\\,e^{i\\pi/4}$ : c'est la similitude de centre $\\Omega(2i)$, de rapport $\\sqrt{2}$ et d'angle $\\frac{\\pi}{4}$. Ce n'est pas une rotation, car $|1 + i| \\neq 1$."
    },
    {
      "id": "L1-GEO-7",
      "tier": 4,
      "type": "mcq",
      "title": "Nature d'un triangle par les complexes",
      "skill": "Utiliser le quotient $\\frac{c - a}{b - a}$ pour caractériser un triangle",
      "statement": "Les points $A$, $B$, $C$ ont pour affixes $a = 0$, $b = 2$ et $c = 1 + i\\sqrt{3}$. Que vaut $\\frac{c - a}{b - a}$, et quelle est la nature du triangle $ABC$ ?",
      "options": [
        "$\\frac{c - a}{b - a} = e^{i\\pi/3}$ : $ABC$ est équilatéral",
        "$\\frac{c - a}{b - a} = e^{i\\pi/3}$ : $ABC$ est rectangle en $A$",
        "$\\frac{c - a}{b - a} = e^{i\\pi/6}$ : $ABC$ est isocèle en $A$, non équilatéral",
        "$\\frac{c - a}{b - a} = i$ : $ABC$ est rectangle isocèle en $A$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{c - a}{b - a} = e^{i\\pi/3}$ : $ABC$ est équilatéral",
      "hint1": "Le module de $\\frac{c - a}{b - a}$ vaut $\\frac{AC}{AB}$ et son argument mesure l'angle $(\\overrightarrow{AB}, \\overrightarrow{AC})$ (cours, section 8).",
      "hint2": "$\\frac{c - a}{b - a} = \\frac{1 + i\\sqrt{3}}{2} = \\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ : reconnais un nombre de module $1$ dont tu connais l'argument.",
      "solution": "$\\frac{c - a}{b - a} = \\frac{1}{2} + i\\frac{\\sqrt{3}}{2} = e^{i\\pi/3}$. Donc $AC = AB$ et $(\\overrightarrow{AB}, \\overrightarrow{AC}) = \\frac{\\pi}{3}$ : $C$ est l'image de $B$ par la rotation de centre $A$ et d'angle $\\frac{\\pi}{3}$. Le triangle $ABC$ est isocèle en $A$ avec un angle de $\\frac{\\pi}{3}$ au sommet, donc ses deux autres angles mesurent aussi $\\frac{\\pi}{3}$ : il est équilatéral."
    },
    {
      "id": "L1-GEO-8",
      "tier": 4,
      "type": "mcq",
      "title": "Réduction d'une équation de conique",
      "skill": "Réduire une équation du second degré par complétion des carrés",
      "statement": "Quelle est la nature de l'ensemble d'équation $x^2 + 4y^2 - 2x - 16y + 13 = 0$ dans un repère orthonormé ?",
      "options": [
        "Une ellipse de centre $\\Omega(1 ; 2)$ et d'excentricité $\\frac{\\sqrt{3}}{2}$",
        "Une ellipse de centre $\\Omega(1 ; 2)$ et d'excentricité $\\frac{1}{2}$",
        "Une hyperbole de centre $\\Omega(1 ; 2)$ et d'excentricité $\\frac{\\sqrt{5}}{2}$",
        "Un cercle de centre $\\Omega(1 ; 2)$ et de rayon $2$"
      ],
      "correctIndex": 0,
      "answer": "Une ellipse de centre $\\Omega(1 ; 2)$ et d'excentricité $\\frac{\\sqrt{3}}{2}$",
      "hint1": "Complète les carrés en $x$ et en $y$, puis divise pour obtenir une équation réduite $\\frac{X^2}{a^2} \\pm \\frac{Y^2}{b^2} = 1$ (cours, section 6).",
      "hint2": "$x^2 - 2x = (x - 1)^2 - 1$ et $4y^2 - 16y = 4(y - 2)^2 - 16$ : l'équation devient $(x - 1)^2 + 4(y - 2)^2 = 4$.",
      "solution": "On obtient $(x - 1)^2 + 4(y - 2)^2 = 1 + 16 - 13 = 4$, soit $\\frac{(x - 1)^2}{4} + \\frac{(y - 2)^2}{1} = 1$ : ellipse de centre $\\Omega(1 ; 2)$, avec $a = 2$ et $b = 1$. Alors $c = \\sqrt{a^2 - b^2} = \\sqrt{3}$ et $e = \\frac{c}{a} = \\frac{\\sqrt{3}}{2}$. Ce n'est pas un cercle, car les coefficients de $(x - 1)^2$ et de $(y - 2)^2$ diffèrent."
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
2. Factoriser complètement $Q(X) = X^4 + X^2 + 1$ dans $\\mathbb{R}[X]$ à l'aide de l'identité $X^4 + X^2 + 1 = (X^2 + 1)^2 - X^2$.

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
2. L'intervalle $]x ; y[$ est centré en $z = \\frac{x+y}{2}$ de rayon $\\varepsilon = \\frac{y-x}{2} > 0$, c'est-à-dire $]x ; y[ = ]z - \\varepsilon ; z + \\varepsilon[$.
Comme $u_n \\to z$, par définition de la limite pour $\\varepsilon > 0$, il existe un rang $q \\in \\mathbb{N}$ tel que pour tout $n \\ge q$, $|u_n - z| < \\varepsilon$.
En particulier pour $n = q$, $z - \\varepsilon < u_q < z + \\varepsilon$, ce qui équivaut exactement à $x < u_q < y$. *(3 pts)*
3. Pour tous réels $x < y$, il existe un décimal $d = u_q \\in \\mathbb{D}$ tel que $x < d < y$. Donc $\\mathbb{D}$ est dense dans $\\mathbb{R}$.
Comme tout décimal est un rationnel ($\\mathbb{D} \\subset \\mathbb{Q}$), on a également $x < d < y$ avec $d \\in \\mathbb{Q}$, ce qui prouve la densité de $\\mathbb{Q}$ dans $\\mathbb{R}$. *(2 pts)*

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

