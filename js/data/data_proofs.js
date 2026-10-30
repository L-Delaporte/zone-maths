/**
 * DATA_PROOFS - Modules et banques d'entraînement dédiés aux Démonstrations Formelles
 * Niveaux Licence 1 (L1-PRF), Licence 2 (L2-PRF) et Licence 3 (L3-PRF)
 * Démonstrations de référence, architecture logique et entraînements progressifs par paliers.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. COURS FORMELS DE DÉMONSTRATIONS : L1, L2, L3
  // =========================================================================

  const PROOF_COURSES = {
    'L1-PRF': {
      title: "L1-PRF : Démonstrations fondamentales de L1 (Analyse & Algèbre)",
      level: "L1",
      sections: [
        {
          title: "1. Théorème des Valeurs Intermédiaires (TVI) par dichotomie",
          content: "• **Énoncé formel** : Soient $a < b$ deux réels et $f : [a, b] \\to \\mathbb{R}$ une fonction **continue** telle que $f(a) \\cdot f(b) < 0$. Alors il existe $c \\in ]a, b[$ tel que $f(c) = 0$.\n\n• **Architecture de la preuve** :\n1. **Initialisation** : On pose $a_0 = a$ et $b_0 = b$. On a $f(a_0) < 0$ et $f(b_0) > 0$.\n2. **Construction par récurrence** : À l'étape $n$, on évalue le milieu $m_n = \\frac{a_n + b_n}{2}$.\n   - Si $f(m_n) = 0$, $c = m_n$ convient (arrêt immédiat).\n   - Si $f(m_n) < 0$, on pose $a_{n+1} = m_n$ et $b_{n+1} = b_n$.\n   - Si $f(m_n) > 0$, on pose $a_{n+1} = a_n$ et $b_{n+1} = m_n$.\n3. **Propriétés des suites** : $(a_n)$ est croissante, $(b_n)$ est décroissante, et $b_n - a_n = \\frac{b-a}{2^n} \\to 0$. Ce sont des **suites adjacentes**.\n4. **Passage à la limite** : Elles convergent vers une limite commune $c \\in [a, b]$. Par **continuité de $f$**, $f(a_n) \\to f(c)$ et $f(b_n) \\to f(c)$.\n5. **Conclusion par encadrement** : Comme $\\forall n, f(a_n) \\le 0$ et $f(b_n) \\ge 0$, on obtient par passage aux limites $f(c) \\le 0$ et $f(c) \\ge 0$, d'où $f(c) = 0$."
        },
        {
          title: "2. Théorème de Bolzano-Weierstrass dans ℝ",
          content: "• **Énoncé formel** : De toute suite réelle $(u_n)_{n \\in \\mathbb{N}}$ **bornée**, on peut extraire une sous-suite $(u_{\\varphi(n)})$ qui converge dans $\\mathbb{R}$.\n\n• **Architecture de la preuve (Méthode de dichotomie)** :\n1. Comme $(u_n)$ est bornée, il existe un segment $[a_0, b_0]$ contenant tous les termes $u_n$.\n2. On coupe $[a_0, b_0]$ en deux demi-intervalles de même longueur. D'après le **principe des tiroirs**, au moins l'un des deux contient une infinité de termes de la suite. On le note $[a_1, b_1]$.\n3. En itérant ce procédé, on construit une suite de segments emboîtés $[a_k, b_k]$ de longueur $(b_0 - a_0)/2^k \\to 0$, contenant chacun une infinité d'indices.\n4. On extrait une sous-suite en choisissant $\\varphi(0) = 0$ et $\\varphi(k+1) > \\varphi(k)$ tel que $u_{\\varphi(k+1)} \\in [a_{k+1}, b_{k+1}]$.\n5. D'après le théorème des segments emboîtés, $\\cap_{k} [a_k, b_k] = \\{ \\ell \\}$. Par encadrement, $a_k \\le u_{\\varphi(k)} \\le b_k \\implies u_{\\varphi(k)} \\to \\ell$."
        },
        {
          title: "3. Théorème du Rang pour les applications linéaires",
          content: "• **Énoncé formel** : Soient $E, F$ deux $K$-espaces vectoriels avec $E$ de dimension finie, et $u \\in \\mathcal{L}(E, F)$. Alors :\n$$\\dim(E) = \\dim(\\ker(u)) + \\dim(\\mathrm{Im}(u))$$\n\n• **Architecture de la preuve (Base incomplète)** :\n1. $\\ker(u)$ est un sous-espace vectoriel de $E$, donc de dimension finie $k = \\dim(\\ker(u)) \\le n = \\dim(E)$. Soit $(e_1, \\dots, e_k)$ une base de $\\ker(u)$.\n2. D'après le **théorème de la base incomplète**, on complète cette famille en une base $(e_1, \\dots, e_k, e_{k+1}, \\dots, e_n)$ de $E$.\n3. On démontre que la famille $(u(e_{k+1}), \\dots, u(e_n))$ est une **base de $\\mathrm{Im}(u)$** :\n   - **Génératrice** : Tout $x \\in E$ s'écrit $x = \\sum_{i=1}^n \\lambda_i e_i$. Comme $u(e_1) = \\dots = u(e_k) = 0$, $u(x) = \\sum_{i=k+1}^n \\lambda_i u(e_i)$.\n   - **Libre** : Si $\\sum_{i=k+1}^n \\mu_i u(e_i) = 0$, alors $u(\\sum_{i=k+1}^n \\mu_i e_i) = 0$, donc $\\sum_{i=k+1}^n \\mu_i e_i \\in \\ker(u)$. Comme les $e_i$ forment une base de $E$, tous les $\\mu_i$ sont nuls.\n4. Donc $\\mathrm{rg}(u) = n - k = \\dim(E) - \\dim(\\ker(u))$."
        }
      ]
    },

    'L2-PRF': {
      title: "L2-PRF : Démonstrations fondamentales de L2 (Spectre & Analyse)",
      level: "L2",
      sections: [
        {
          title: "1. Théorème Spectral pour les endomorphismes symétriques réels",
          content: "• **Énoncé formel** : Soit $E$ un espace euclidien de dimension $n \\ge 1$ et $u \\in \\mathcal{L}(E)$ un endomorphisme symétrique ($u^* = u$). Alors il existe une **base orthonormée de $E$ formée de vecteurs propres** de $u$.\n\n• **Architecture de la preuve par récurrence sur la dimension** :\n1. **Existence d'une valeur propre réelle** : Le polynôme caractéristique $\\chi_u$ est scindé sur $\\mathbb{C}$ (d'Alembert-Gauss). Soit $\\lambda \\in \\mathbb{C}$ une racine et $X \\in \\mathbb{C}^n \\setminus \\{0\\}$ un vecteur propre associé. En utilisant la symétrie de la matrice $A$ de $u$, ${}^t \\bar{X} A X = \\lambda {}^t \\bar{X} X$ et ${}^t \\bar{X} A X = {}^t (A \\bar{X}) X = \\bar{\\lambda} {}^t \\bar{X} X$. Comme ${}^t \\bar{X} X = \\|X\\|^2 > 0$, $\\lambda = \\bar{\\lambda} \\in \\mathbb{R}$. Donc $u$ admet au moins une valeur propre réelle $\\lambda_1$.\n2. Soit $e_1$ un vecteur propre unitaire associé : $u(e_1) = \\lambda_1 e_1$.\n3. **Stabilité de l'orthogonal** : On pose $H = (\\mathbb{R} e_1)^\\perp$. Soit $y \\in H$. Alors $\\langle u(y), e_1 \\rangle = \\langle y, u(e_1) \\rangle = \\lambda_1 \\langle y, e_1 \\rangle = 0$. Donc $u(y) \\in H$, ce qui prouve que $H$ est **stable par $u$**.\n4. **Induction** : L'endomorphisme induit $u_{|H}$ est symétrique sur l'espace euclidien $H$ de dimension $n-1$. Par hypothèse de récurrence, $H$ admet une base orthonormale de vecteurs propres $(e_2, \\dots, e_n)$.\n5. La famille $(e_1, e_2, \\dots, e_n)$ est une base orthonormée de vecteurs propres de $E$."
        },
        {
          title: "2. Lemme d'Abel pour les Séries Entières",
          content: "• **Énoncé formel** : Soit $\\sum a_n z^n$ une série entière. S'il existe $z_0 \\in \\mathbb{C}^*$ tel que la suite $(a_n z_0^n)$ soit bornée, alors pour tout $z \\in \\mathbb{C}$ vérifiant $|z| < |z_0|$, la série $\\sum a_n z^n$ est **absolument convergente**.\n\n• **Architecture de la preuve** :\n1. Soit $M > 0$ tel que $\\forall n \\in \\mathbb{N}, |a_n z_0^n| \\le M$.\n2. Pour $z \\in \\mathbb{C}$ avec $|z| < |z_0|$, on écrit :\n   $$|a_n z^n| = |a_n z_0^n| \\cdot \\left|\\frac{z}{z_0}\\right|^n \\le M \\cdot q^n \\quad \\text{avec } q = \\left|\\frac{z}{z_0}\\right| < 1$$\n3. La série géométrique $\\sum q^n$ converge car $0 \\le q < 1$.\n4. Par comparaison de séries à termes positifs, $\\sum |a_n z^n|$ converge, ce qui prouve la convergence absolue.\n5. **Conséquence** : L'existence du **rayon de convergence** $R = \\sup \\{ r \\ge 0 \\mid (a_n r^n) \\text{ est bornée} \\}$."
        },
        {
          title: "3. Théorème de Cayley-Hamilton",
          content: "• **Énoncé formel** : Soit $A \\in \\mathcal{M}_n(K)$ et $\\chi_A(X) = \\det(X I_n - A)$ son polynôme caractéristique. Alors $\\chi_A(A) = 0_{\\mathcal{M}_n(K)}$.\n\n• **Architecture de la preuve algébrique via la comatrice** :\n1. On considère la matrice polynomiale $B(X) = {}^t \\mathrm{com}(X I_n - A) \\in \\mathcal{M}_n(K[X])$.\n2. D'après la formule fondamentale de la comatrice :\n   $$(X I_n - A) \\cdot B(X) = \\det(X I_n - A) \\cdot I_n = \\chi_A(X) \\cdot I_n$$\n3. Comme les coefficients de $X I_n - A$ sont de degré au plus 1, les coefficients de $B(X)$ sont des polynômes de degré au plus $n-1$. On peut donc décomposer $B(X)$ sous la forme :\n   $$B(X) = \\sum_{k=0}^{n-1} X^k B_k \\quad \\text{avec } B_k \\in \\mathcal{M}_n(K)$$\n4. En développant le produit matriciel et en identifiant les puissances de $X$ :\n   $$-A B_0 = a_0 I_n, \\quad B_0 - A B_1 = a_1 I_n, \\quad \\dots, \\quad B_{n-1} = I_n$$\n5. En multipliant chaque relation par $A^k$ à gauche et en sommant, les termes télescopent exactement : $\\chi_A(A) = 0$."
        }
      ]
    },

    'L3-PRF': {
      title: "L3-PRF : Démonstrations fondamentales de L3 (Lebesgue, Baire & Sylow)",
      level: "L3",
      sections: [
        {
          title: "1. Théorème de Convergence Dominée de Lebesgue (TCD)",
          content: "• **Énoncé formel** : Soit $(f_n)$ une suite de fonctions mesurables convergeant simplement p.p. vers $f$. S'il existe $g \\in L^1(\\mu)$ telle que $\\forall n, |f_n| \\le g$ p.p., alors $f \\in L^1(\\mu)$ et :\n$$\\lim_{n \\to +\\infty} \\int f_n \\, d\\mu = \\int f \\, d\\mu$$\n\n• **Architecture de la preuve via le Lemme de Fatou** :\n1. Comme $|f_n| \\le g$ et $f_n \\to f$ p.p., on a $|f| \\le g$ p.p., d'où $f \\in L^1(\\mu)$.\n2. On applique le **lemme de Fatou** à la suite de fonctions positives $g + f_n \\ge 0$ :\n   $$\\int \\liminf (g + f_n) \\le \\liminf \\int (g + f_n) \\implies \\int (g + f) \\le \\int g + \\liminf \\int f_n$$\n   Comme $g \\in L^1$, on soustrait $\\int g$ pour obtenir : $\\int f \\le \\liminf \\int f_n$.\n3. On applique le lemme de Fatou à la suite positive $g - f_n \\ge 0$ :\n   $$\\int (g - f) \\le \\liminf \\int (g - f_n) = \\int g - \\limsup \\int f_n \\implies \\limsup \\int f_n \\le \\int f$$\n4. On conclut par encadrement : $\\limsup \\int f_n \\le \\int f \\le \\liminf \\int f_n$, donc $\\lim_{n \\to +\\infty} \\int f_n = \\int f$."
        },
        {
          title: "2. Théorème de Baire et Théorème de Banach-Steinhaus",
          content: "• **Théorème de Baire** : Dans un espace métrique complet, toute intersection dénombrable d'ouverts denses est dense.\n• **Théorème de Banach-Steinhaus** : Soient $E$ un espace de Banach, $F$ un e.v.n., et $(T_i)_{i \\in I} \\subset \\mathcal{L}(E, F)$ une famille d'opérateurs linéaires continus.\nSi pour tout $x \\in E$, $\\sup_{i \\in I} \\|T_i(x)\\| < +\\infty$ (bornitude ponctuelle), alors $\\sup_{i \\in I} \\|T_i\\| < +\\infty$ (bornitude uniforme).\n\n• **Architecture de la preuve** :\n1. On pose pour tout $n \\in \\mathbb{N}^*$, $F_n = \\{x \\in E \\mid \\forall i \\in I, \\|T_i(x)\\| \\le n\\}$.\n2. Par continuité de chaque $T_i$ et de la norme, chaque $F_n$ est un **fermé** de $E$.\n3. Par hypothèse de bornitude ponctuelle, $E = \\bigcup_{n=1}^\\infty F_n$.\n4. D'après le **théorème de Baire** dans l'espace complet $E$, au moins l'un des fermés $F_{n_0}$ est d'intérieur non vide : il contient une boule fermée $\\bar{B}(x_0, r)$ avec $r > 0$.\n5. Pour tout $u \\in E$ avec $\\|u\\| \\le 1$, $x_0 + r u \\in \\bar{B}(x_0, r) \\subset F_{n_0}$. Par linéarité :\n   $$\\|T_i(r u)\\| = \\|T_i(x_0 + r u) - T_i(x_0)\\| \\le \\|T_i(x_0 + r u)\\| + \\|T_i(x_0)\\| \\le n_0 + n_0 = 2 n_0$$\n6. Ainsi, $\\|T_i(u)\\| \\le \\frac{2 n_0}{r}$, d'où $\\|T_i\\| \\le \\frac{2 n_0}{r}$, ce qui prouve la bornitude uniforme."
        },
        {
          title: "3. Théorème d'Inversion Locale (TIL)",
          content: "• **Énoncé formel** : Soient $U \\subset \\mathbb{R}^n$ un ouvert, $f : U \\to \\mathbb{R}^n$ de classe $\\mathcal{C}^1$, et $a \\in U$. Si la différentielle $df(a)$ est un isomorphisme inversible, alors il existe un voisinage ouvert $V$ de $a$ et un ouvert $W$ de $f(a)$ tels que $f_{|V} : V \\to W$ soit un $\\mathcal{C}^1$-difféomorphisme.\n\n• **Architecture de la preuve via le théorème du point fixe de Picard** :\n1. Quitte à composer par $(df(a))^{-1}$ et effectuer des translations, on se ramène à $a = 0, f(0) = 0$ et $df(0) = \\mathrm{Id}$.\n2. Pour $y$ fixé proche de $0$, résoudre $f(x) = y$ équivaut à trouver un point fixe de $\\varphi_y(x) = x - f(x) + y$.\n3. On calcule $d\\varphi_y(x) = \\mathrm{Id} - df(x)$. Par continuité de $df$ en $0$, $\\|d\\varphi_y(x)\\| \\le 1/2$ sur une petite boule fermée $\\bar{B}(0, r)$.\n4. D'après l'inégalité des accroissements finis, $\\varphi_y$ est **strictement contractante** de rapport $1/2$ et laisse stable la boule $\\bar{B}(0, r)$ pour $y$ suffisamment petit.\n5. D'après le **théorème du point fixe de Banach**, $\\varphi_y$ admet un unique point fixe $x \\in \\bar{B}(0, r)$, assurant la bijectivité locale. La régularité $\\mathcal{C}^1$ de l'inverse découle de la différentiabilité des fonctions composées."
        }
      ]
    }
  };

  // =========================================================================
  // 2. BANQUES D'ENTRAÎNEMENTS PROGRESSIFS SUR LES PREUVES (L1, L2, L3)
  // =========================================================================

  const PROOF_EXERCISES = {
    'L1-PRF': [
      // Palier 1 : Socle - Hypothèses fondamentales
      {
        id: 'L1-PRF-1',
        chapterId: 'L1-PRF',
        tier: 1,
        title: "TVI : Hypothèse indispensable de continuité",
        statement: "Dans le Théorème des Valeurs Intermédiaires (TVI), quelle hypothèse sur la fonction $f : [a, b] \\to \\mathbb{R}$ est **indispensable** pour garantir l'existence d'une racine lorsque $f(a)f(b) < 0$ ?",
        type: "mcq",
        options: [
          "La continuité de f sur le segment [a, b]",
          "La dérivabilité de f sur l'intervalle ouvert ]a, b[",
          "La stricte monotonie de f sur [a, b]",
          "La convexité de f sur [a, b]"
        ],
        correctIndex: 0,
        answer: "La continuité de f sur le segment [a, b]",
        hint1: "Si une fonction fait un 'saut' sans être continue (ex: fonction signe), elle peut passer du négatif au positif sans jamais s'annuler.",
        solution: "La continuité est indispensable : la fonction définie par $f(x) = -1$ sur $[0, 1[$ et $f(1) = 1$ vérifie $f(0)f(1) = -1 < 0$, mais ne s'annule jamais sur $[0, 1]$ car elle n'est pas continue en 1."
      },
      {
        id: 'L1-PRF-2',
        chapterId: 'L1-PRF',
        tier: 1,
        title: "Bolzano-Weierstrass : Condition sur la suite",
        statement: "Le théorème de Bolzano-Weierstrass affirme que de toute suite réelle $(u_n)$, on peut extraire une sous-suite convergente, sous réserve que $(u_n)$ soit :",
        type: "mcq",
        options: [
          "Bornée",
          "Monotone",
          "À termes strictement positifs",
          "Périodique"
        ],
        correctIndex: 0,
        answer: "Bornée",
        hint1: "La suite $u_n = n$ ne possède aucune sous-suite convergente car elle n'est pas bornée.",
        solution: "L'hypothèse essentielle est que $(u_n)$ soit bornée. Cela garantit qu'elle est confinée dans un segment compact $[a, b]$, sur lequel la méthode de dichotomie s'applique."
      },
      // Palier 2 : Guidé - Lemmes d'articulation
      {
        id: 'L1-PRF-3',
        chapterId: 'L1-PRF',
        tier: 2,
        title: "TVI par dichotomie : Vitesse de convergence de la longueur",
        statement: "Dans la démonstration du TVI par dichotomie sur le segment initial $[a, b]$, quelle est la longueur du segment $[a_n, b_n]$ à l'étape $n$ ?",
        type: "mcq",
        options: [
          "$$\\frac{b - a}{2^n}$$",
          "$$\\frac{b - a}{n}$$",
          "$$\\frac{b - a}{n^2}$$",
          "$$\\frac{b - a}{\\sqrt{n}}$$"
        ],
        correctIndex: 0,
        answer: "$$\\frac{b - a}{2^n}$$",
        hint1: "À chaque étape, on coupe le segment en deux moitiés égales.",
        solution: "À chaque étape, la longueur est divisée par 2 : $b_n - a_n = \\frac{b-a}{2^n}$. Comme $2^n \\to +\\infty$, cette longueur tend géométriquement vers 0, ce qui démontre que $(a_n)$ et $(b_n)$ sont adjacentes."
      },
      {
        id: 'L1-PRF-4',
        chapterId: 'L1-PRF',
        tier: 2,
        title: "Théorème du rang : Dimension de l'image de la base incomplète",
        statement: "Soit $u \\in \\mathcal{L}(E, F)$ avec $\\dim(E) = n$ et $(e_1, \\dots, e_k)$ une base de $\\ker(u)$ complétée en une base $(e_1, \\dots, e_n)$ de $E$. Pourquoi la famille $(u(e_{k+1}), \\dots, u(e_n))$ est-elle libre ?",
        type: "mcq",
        options: [
          "Car si $\\sum_{i=k+1}^n \\lambda_i u(e_i) = 0$, alors $\\sum_{i=k+1}^n \\lambda_i e_i \\in \\ker(u)$, ce qui impose $\\lambda_i = 0$ par indépendance de la base de E",
          "Car l'application u est injective sur E tout entier",
          "Car dim(F) est nécessairement supérieure ou égale à n",
          "Car u est un isomorphisme"
        ],
        correctIndex: 0,
        answer: "Car si $\\sum_{i=k+1}^n \\lambda_i u(e_i) = 0$, alors $\\sum_{i=k+1}^n \\lambda_i e_i \\in \\ker(u)$, ce qui impose $\\lambda_i = 0$ par indépendance de la base de E",
        hint1: "Si une combinaison linéaire de ces vecteurs est nulle, le vecteur sous l'application appartient au noyau.",
        solution: "Par linéarité, $\\sum_{i=k+1}^n \\lambda_i u(e_i) = u(\\sum_{i=k+1}^n \\lambda_i e_i) = 0$, donc $v = \\sum_{i=k+1}^n \\lambda_i e_i \\in \\ker(u) = \\mathrm{Vect}(e_1, \\dots, e_k)$. Comme $(e_1, \\dots, e_n)$ est libre, les coordonnées sur les deux sous-espaces en somme directe sont toutes nulles : $\\lambda_i = 0$."
      },
      // Palier 3 : Examen - Détection de sophismes
      {
        id: 'L1-PRF-5',
        chapterId: 'L1-PRF',
        tier: 3,
        title: "Chasse aux sophismes : Passage à la limite sans continuité",
        statement: "Un étudiant écrit : *« Comme $a_n \\to c$ avec $f(a_n) < 0$ pour tout $n$, on a nécessairement $f(c) < 0$ »*. Quels sont les **deux sophismes** commis dans cette déduction ?",
        type: "mcq",
        options: [
          "Le passage à la limite préserve les inégalités larges ($\\le 0$ et non $< 0$) et suppose que f est continue en c",
          "Le théorème des suites adjacentes n'autorise pas la convergence vers c",
          "La suite an ne peut pas être croissante",
          "Il est interdit d'appliquer la fonction f aux termes de la suite"
        ],
        correctIndex: 0,
        answer: "Le passage à la limite préserve les inégalités larges ($\\le 0$ et non $< 0$) et suppose que f est continue en c",
        hint1: "Pense à $f(x) = -1/n < 0$ : la limite est 0, l'inégalité stricte devient large. De plus, $\\lim f(a_n) = f(\\lim a_n)$ n'est vrai que si f est continue !",
        solution: "1. Le passage à la limite change les inégalités strictes en inégalités larges : $x_n < 0 \\implies \\lim x_n \\le 0$.\n2. On ne peut écrire $\\lim f(a_n) = f(c)$ que si $f$ est continue en $c$."
      },
      // Palier 4 : Rigueur - Reconstitution complète
      {
        id: 'L1-PRF-6',
        chapterId: 'L1-PRF',
        tier: 4,
        title: "Reconstitution : Ordre des étapes de Bolzano-Weierstrass",
        statement: "Pour prouver le théorème de Bolzano-Weierstrass par dichotomie, quel est l'enchaînement logique rigoureux ?\n\n1. Extraction d'une sous-suite d'indices $\\varphi(k+1) > \\varphi(k)$\n2. Encadrement dans un segment initial borné $[a_0, b_0]$\n3. Division par deux et application du principe des tiroirs\n4. Conclusion par le théorème des segments emboîtés ($u_{\\varphi(k)} \\to \\ell$)",
        type: "mcq",
        options: [
          "Étape 2 → Étape 3 → Étape 1 → Étape 4",
          "Étape 1 → Étape 2 → Étape 3 → Étape 4",
          "Étape 3 → Étape 1 → Étape 2 → Étape 4",
          "Étape 4 → Étape 2 → Étape 3 → Étape 1"
        ],
        correctIndex: 0,
        answer: "Étape 2 → Étape 3 → Étape 1 → Étape 4",
        hint1: "On commence par borner la suite globale, puis on dichotomise à l'infini, puis on extrait les indices, et enfin on conclut sur la limite.",
        solution: "L'ordre logique canonique est :\n1. Confinement initial dans $[a_0, b_0]$ car la suite est bornée (Étape 2).\n2. Construction des segments emboîtés par dichotomie et tiroirs (Étape 3).\n3. Choix itératif des indices croissants $\\varphi(k)$ (Étape 1).\n4. Convergence de la sous-suite vers le point d'intersection unique (Étape 4)."
      }
    ],

    'L2-PRF': [
      // Palier 1 : Socle - Théorème Spectral
      {
        id: 'L2-PRF-1',
        chapterId: 'L2-PRF',
        tier: 1,
        title: "Théorème Spectral : Réalité des valeurs propres",
        statement: "Dans la démonstration du Théorème Spectral, pourquoi une valeur propre complexe $\\lambda \\in \\mathbb{C}$ d'une matrice symétrique réelle $A \\in \\mathcal{S}_n(\\mathbb{R})$ est-elle obligatoirement **réelle** ?",
        type: "mcq",
        options: [
          "Car ${}^t \\bar{X} A X = \\lambda \\|X\\|^2 = \\bar{\\lambda} \\|X\\|^2$ avec $\\|X\\|^2 > 0$",
          "Car le déterminant de A est toujours strictement positif",
          "Car toute matrice carrée admet uniquement des valeurs propres réelles",
          "Car la trace de A est nulle"
        ],
        correctIndex: 0,
        answer: "Car ${}^t \\bar{X} A X = \\lambda \\|X\\|^2 = \\bar{\\lambda} \\|X\\|^2$ avec $\\|X\\|^2 > 0$",
        hint1: "Multiplie $AX = \\lambda X$ par le transposé conjugué ${}^t \\bar{X}$ à gauche, puis utilise la symétrie ${}^t A = A = \\bar{A}$.",
        solution: "Soit $X \\ne 0$ tel que $AX = \\lambda X$. Alors ${}^t \\bar{X} A X = \\lambda {}^t \\bar{X} X = \\lambda \\|X\\|^2$. D'autre part, comme $A$ est réelle et symétrique, ${}^t \\bar{X} A X = {}^t (A \\bar{X}) X = {}^t (\\bar{\\lambda} \\bar{X}) X = \\bar{\\lambda} \\|X\\|^2$. Comme $\\|X\\|^2 > 0$, on a $\\lambda = \\bar{\\lambda}$, donc $\\lambda \\in \\mathbb{R}$."
      },
      // Palier 2 : Guidé - Lemme d'Abel
      {
        id: 'L2-PRF-2',
        chapterId: 'L2-PRF',
        tier: 2,
        title: "Lemme d'Abel : Majoration géométrique clé",
        statement: "Dans la preuve du lemme d'Abel, si $|a_n z_0^n| \\le M$ pour tout $n$, quelle majoration permet de conclure à la convergence absolue de $\\sum a_n z^n$ pour $|z| < |z_0|$ ?",
        type: "mcq",
        options: [
          "$$|a_n z^n| \\le M \\cdot \\left|\\frac{z}{z_0}\\right|^n$$ avec $$\\left|\\frac{z}{z_0}\\right| < 1$$",
          "$$|a_n z^n| \\le \\frac{M}{n}$$",
          "$$|a_n z^n| \\le M \\cdot \\left|\\frac{z_0}{z}\\right|^n$$",
          "$$|a_n z^n| \\le M \\cdot |z - z_0|^n$$"
        ],
        correctIndex: 0,
        answer: "$$|a_n z^n| \\le M \\cdot \\left|\\frac{z}{z_0}\\right|^n$$ avec $$\\left|\\frac{z}{z_0}\\right| < 1$$",
        hint1: "On multiplie et divise par $z_0^n$ dans le terme général.",
        solution: "On écrit $|a_n z^n| = |a_n z_0^n| \\cdot |z/z_0|^n \\le M q^n$ avec $q = |z/z_0| < 1$. C'est le terme général d'une série géométrique convergente, ce qui entraîne la convergence absolue de la série entière."
      },
      // Palier 3 : Examen - Cayley-Hamilton & Comatrice
      {
        id: 'L2-PRF-3',
        chapterId: 'L2-PRF',
        tier: 3,
        title: "Cayley-Hamilton : Pourquoi la preuve simpliste 'χ(A) = det(AI - A) = det(0) = 0' est fausse",
        statement: "Pourquoi l'argument *« $\\chi_A(A) = \\det(A \\cdot I_n - A) = \\det(0) = 0$ »* est-il un **sophisme mathématique grossier** rejeté aux examens ?",
        type: "mcq",
        options: [
          "Car $\\det(X I_n - A)$ est un scalaire obtenu en évaluant une indéterminée scalaire X, et non en substituant une matrice dans le déterminant",
          "Car det(0) est différent de 0 pour les matrices carrées",
          "Car le polynôme caractéristique n'admet jamais de racine",
          "Car Cayley-Hamilton ne s'applique qu'aux matrices nilpotentes"
        ],
        correctIndex: 0,
        answer: "Car $\\det(X I_n - A)$ est un scalaire obtenu en évaluant une indéterminée scalaire X, et non en substituant une matrice dans le déterminant",
        hint1: "$\\chi_A(X)$ est un polynôme scalaire $P(X) = X^n + \\dots$. $P(A)$ est une matrice, alors que $\\det(0)$ est le nombre zéro !",
        solution: "Le polynôme caractéristique $\\chi_A(X) = \\det(X I_n - A)$ est un polynôme scalaire en la variable $X$. Évaluer $\\chi_A(A)$ consiste à remplacer la variable scalaire $X$ par la matrice $A$ dans l'expression développée $\\sum a_k X^k$, ce qui donne une matrice $n \\times n$. Remplacer $X$ par $A$ à l'intérieur du déterminant n'a aucun sens mathématique (on obtiendrait un scalaire $\\det(0) = 0$ et non la matrice nulle $0_{\\mathcal{M}_n}$)."
      },
      // Palier 4 : Rigueur - Dérivation sous l'intégrale
      {
        id: 'L2-PRF-4',
        chapterId: 'L2-PRF',
        tier: 4,
        title: "Intégrales à paramètres : Hypothèse d'accroissements finis",
        statement: "Dans la démonstration de la dérivabilité de $F(x) = \\int_I f(x, t) dt$ sous l'hypothèse de domination $|\\frac{\\partial f}{\\partial x}(x, t)| \\le g(t)$ avec $g \\in L^1(I)$, quel théorème fondamental applique-t-on au taux d'accroissement $\\frac{f(x+h, t) - f(x, t)}{h}$ ?",
        type: "mcq",
        options: [
          "Le Théorème des Accroissements Finis (TAF) par rapport à la variable x pour t fixé",
          "Le Théorème de Fubini sur le produit I × [x, x+h]",
          "La formule d'inversion de Fourier",
          "Le Théorème de Weierstrass de densité polynomiale"
        ],
        correctIndex: 0,
        answer: "Le Théorème des Accroissements Finis (TAF) par rapport à la variable x pour t fixé",
        hint1: "Pour $t$ fixé, $x \\mapsto f(x, t)$ est dérivable, donc il existe $c \\in ]x, x+h[$ tel que le taux vaille la dérivée en $c$.",
        solution: "Pour chaque $t$ fixé, la fonction $u \\mapsto f(u, t)$ est dérivable. D'après le TAF, il existe $\\theta \\in ]x, x+h[$ tel que $\\frac{f(x+h, t) - f(x, t)}{h} = \\frac{\\partial f}{\\partial x}(\\theta, t)$. La domination donne alors $|\\frac{f(x+h, t) - f(x, t)}{h}| \\le g(t)$, ce qui autorise le passage à la limite par convergence dominée."
      }
    ],

    'L3-PRF': [
      // Palier 1 : Socle - Hypothèse de domination du TCD
      {
        id: 'L3-PRF-1',
        chapterId: 'L3-PRF',
        tier: 1,
        title: "TCD : Pourquoi la domination intégrable g est indispensable",
        statement: "Considérons sur $[0, 1]$ la suite de fonctions $f_n(x) = n \\mathbf{1}_{]0, 1/n]}(x)$. On a $f_n(x) \\to 0$ simplement pour tout $x \\in [0, 1]$. Pourquoi $\\int_0^1 f_n(x) dx$ ne tend-elle pas vers $\\int_0^1 0 dx = 0$ ?",
        type: "mcq",
        options: [
          "Car il n'existe aucune fonction dominante $g \\in L^1([0, 1])$ qui majore $|f_n|$ pour tout n (la borne supérieure pointwise est $1/x \\notin L^1$)",
          "Car l'intégrale de Lebesgue n'est pas définie sur [0, 1]",
          "Car les fonctions fn ne sont pas boréliennes",
          "Car l'intervalle [0, 1] n'est pas compact"
        ],
        correctIndex: 0,
        answer: "Car il n'existe aucune fonction dominante $g \\in L^1([0, 1])$ qui majore $|f_n|$ pour tout n (la borne supérieure pointwise est $1/x \\notin L^1$)",
        hint1: "Calcule $\\int_0^1 f_n(x) dx$ : elle vaut $n \\times (1/n) = 1$ pour tout $n$, donc tend vers 1 et non 0 !",
        solution: "Pour tout $n$, $\\int_0^1 f_n = n \\times \\frac{1}{n} = 1 \\ne 0$. L'hypothèse de domination $|f_n| \\le g \\in L^1$ est en défaut car $\\sup_n f_n(x) = \\frac{1}{x} \\notin L^1([0, 1])$. Le TCD ne peut donc pas s'appliquer sans hypothèse de domination intégrable."
      },
      // Palier 2 : Guidé - Lemme de Fatou
      {
        id: 'L3-PRF-2',
        chapterId: 'L3-PRF',
        tier: 2,
        title: "Preuve du TCD : Rôle du Lemme de Fatou sur g + fn",
        statement: "Dans la démonstration du Théorème de Convergence Dominée, pour quelle raison applique-t-on le lemme de Fatou à la suite $h_n = g + f_n$ ?",
        type: "mcq",
        options: [
          "Car le lemme de Fatou exige des fonctions positives, or $|f_n| \\le g \\implies g + f_n \\ge 0$",
          "Car la fonction g + fn est toujours dérivable",
          "Car g + fn est une suite de fonctions étagées",
          "Car cela permet d'éliminer la mesure de l'espace"
        ],
        correctIndex: 0,
        answer: "Car le lemme de Fatou exige des fonctions positives, or $|f_n| \\le g \\implies g + f_n \\ge 0$",
        hint1: "Le lemme de Fatou est le résultat fondamental pour les suites de fonctions positives mesurables.",
        solution: "Le lemme de Fatou ne s'applique qu'aux suites de fonctions positives. L'hypothèse de domination $|f_n| \\le g$ p.p. assure précisément que $g + f_n \\ge 0$ et $g - f_n \\ge 0$, permettant d'obtenir les deux inégalités $\\int f \\le \\liminf \\int f_n$ et $\\limsup \\int f_n \\le \\int f$."
      },
      // Palier 3 : Examen - Banach-Steinhaus & Baire
      {
        id: 'L3-PRF-3',
        chapterId: 'L3-PRF',
        tier: 3,
        title: "Banach-Steinhaus : Rôle de la complétude de l'espace de départ",
        statement: "Dans la démonstration du théorème de Banach-Steinhaus, à quel endroit précis intervient le fait que l'espace de départ $E$ soit un espace de **Banach** (espace vectoriel normé complet) ?",
        type: "mcq",
        options: [
          "Pour appliquer le théorème de Baire à la réunion dénombrable de fermés $E = \\bigcup_{n=1}^\\infty F_n$, qui assure qu'un des fermés est d'intérieur non vide",
          "Pour assurer que les opérateurs Ti sont inversibles",
          "Pour affirmer que la boule unité est compacte",
          "Pour justifier que la famille Ti est dénombrable"
        ],
        correctIndex: 0,
        answer: "Pour appliquer le théorème de Baire à la réunion dénombrable de fermés $E = \\bigcup_{n=1}^\\infty F_n$, qui assure qu'un des fermés est d'intérieur non vide",
        hint1: "Le lemme de Baire garantit qu'un espace métrique complet n'est pas une réunion dénombrable de fermés d'intérieur vide.",
        solution: "On écrit $E = \\bigcup_{n \\ge 1} F_n$ où $F_n = \\{x \\in E \\mid \\forall i, \\|T_i(x)\\| \\le n\\}$ sont des fermés. Comme $E$ est complet (Banach), le théorème de Baire assure qu'au moins un $F_{n_0}$ contient une boule ouverte $B(x_0, r)$, ce qui permet ensuite de borner les opérateurs sur la boule unité par translation et homothétie."
      },
      // Palier 4 : Rigueur - Théorème d'Inversion Locale
      {
        id: 'L3-PRF-4',
        chapterId: 'L3-PRF',
        tier: 4,
        title: "TIL : Pourquoi la différentielle inversible garantit une contraction locale",
        statement: "Dans la preuve du Théorème d'Inversion Locale pour $f(0) = 0$ et $df(0) = \\mathrm{Id}$, pourquoi l'application $\\varphi_y(x) = x - f(x) + y$ est-elle une contraction stricte de rapport $1/2$ sur une petite boule $\\bar{B}(0, r)$ ?",
        type: "mcq",
        options: [
          "Car $d\\varphi_y(0) = \\mathrm{Id} - df(0) = 0$, donc par continuité de $df$ en 0, $\\|d\\varphi_y(x)\\| \\le 1/2$ sur $\\bar{B}(0, r)$, et l'IAF conclut",
          "Car f est un polynôme de degré 1",
          "Car toute fonction de classe C1 est automatiquement lipschitzienne sur l'espace entier",
          "Car y est de norme nulle"
        ],
        correctIndex: 0,
        answer: "Car $d\\varphi_y(0) = \\mathrm{Id} - df(0) = 0$, donc par continuité de $df$ en 0, $\\|d\\varphi_y(x)\\| \\le 1/2$ sur $\\bar{B}(0, r)$, et l'IAF conclut",
        hint1: "La différentielle de $\\varphi_y$ en 0 s'annule : $d\\varphi_y(0) = I - I = 0$.",
        solution: "On a $d\\varphi_y(x) = \\mathrm{Id} - df(x)$. En $x = 0$, $d\\varphi_y(0) = \\mathrm{Id} - \\mathrm{Id} = 0$. Comme $f$ est $\\mathcal{C}^1$, $x \\mapsto df(x)$ est continue, donc il existe $r > 0$ tel que $\\forall x \\in \\bar{B}(0, r), \\|d\\varphi_y(x)\\| \\le 1/2$. D'après l'Inégalité des Accroissements Finis (IAF), $\\varphi_y$ est $1/2$-lipschitzienne, donc strictement contractante."
      }
    ]
  };

  // Fusion automatique dans les registres globaux
  if (typeof window !== 'undefined') {
    if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
    if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};

    Object.assign(window.MATHS_COURSES, PROOF_COURSES);
    Object.assign(window.MATHS_EXERCISES, PROOF_EXERCISES);

    window.PROOF_COURSES = PROOF_COURSES;
    window.PROOF_EXERCISES = PROOF_EXERCISES;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROOF_COURSES, PROOF_EXERCISES };
  }
})();
