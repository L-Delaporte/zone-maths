/**
 * Cours du niveau « Véto : prépa BCPST » (chapitres : js/data/chapters_veto.js).
 * Mathématiques de BCPST 1re et 2e années (programme de l'arrêté du 16 avril 2021) pour préparer le concours A BCPST
 * des écoles nationales vétérinaires : outils, analyse, algèbre linéaire, géométrie, probabilités et statistique.
 * Niveau bac+1 / bac+2 : définitions et théorèmes avec leurs hypothèses, méthodes rédigées, quelques modèles biologiques.
 * Contenu original.
 */
window.MATHS_COURSES_VETO = {
  "veto-01": {
    title: "VB-01 : Logique, raisonnement par récurrence et dénombrement",
    domain: "Outils",
    objectives: [
      "Manipuler connecteurs et quantificateurs, et écrire la négation d'une proposition.",
      "Choisir et rédiger le bon type de raisonnement : contraposée, absurde, récurrence.",
      "Calculer avec les symboles $\\sum$ et $\\prod$.",
      "Dénombrer des listes, des arrangements et des combinaisons, et utiliser la formule du binôme."
    ],
    keyPoints: [
      {
        title: "1. Connecteurs, quantificateurs et négations",
        content: "Pour des propositions $P$ et $Q$ :\n• $\\text{non}(P \\text{ et } Q) \\iff (\\text{non } P) \\text{ ou } (\\text{non } Q)$ et $\\text{non}(P \\text{ ou } Q) \\iff (\\text{non } P) \\text{ et } (\\text{non } Q)$ ;\n• $(P \\Rightarrow Q) \\iff (\\text{non } P \\text{ ou } Q)$, donc $\\text{non}(P \\Rightarrow Q) \\iff (P \\text{ et non } Q)$ ;\n• la contraposée de $P \\Rightarrow Q$ est $\\text{non } Q \\Rightarrow \\text{non } P$ : elle lui est équivalente.\nNégation des quantificateurs : $\\text{non}(\\forall x \\in E,\\ P(x)) \\iff \\exists x \\in E,\\ \\text{non } P(x)$ et $\\text{non}(\\exists x \\in E,\\ P(x)) \\iff \\forall x \\in E,\\ \\text{non } P(x)$. L'ordre des quantificateurs compte : $\\forall x\\ \\exists y$ n'a pas le même sens que $\\exists y\\ \\forall x$."
      },
      {
        title: "2. Types de raisonnement",
        content: "• **Contraposée** : pour montrer $P \\Rightarrow Q$, on montre $\\text{non } Q \\Rightarrow \\text{non } P$.\n• **Absurde** : on suppose $\\text{non } P$ et on aboutit à une contradiction.\n• **Analyse-synthèse** : on cherche les conditions nécessaires (analyse), puis on vérifie qu'elles conviennent (synthèse).\n• **Récurrence simple** : si $P(n_0)$ est vraie (initialisation) et si, pour tout $n \\geq n_0$, $P(n) \\Rightarrow P(n+1)$ (hérédité), alors $P(n)$ est vraie pour tout $n \\geq n_0$.\n• **Récurrence double** : on initialise $P(n_0)$ et $P(n_0+1)$, puis on montre $(P(n) \\text{ et } P(n+1)) \\Rightarrow P(n+2)$. Elle sert pour les suites définies par deux termes précédents."
      },
      {
        title: "3. Sommes et produits",
        content: "Sommes de référence, pour $n \\in \\mathbb{N}^{*}$ :\n$$\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2} \\qquad \\sum_{k=1}^{n} k^{2} = \\frac{n(n+1)(2n+1)}{6} \\qquad \\sum_{k=0}^{n} q^{k} = \\frac{1 - q^{n+1}}{1 - q} \\ (q \\neq 1)$$\n• **Changement d'indice** : $\\sum_{k=1}^{n} u_{k-1} = \\sum_{j=0}^{n-1} u_{j}$.\n• **Télescopage** : $\\sum_{k=0}^{n} (u_{k+1} - u_{k}) = u_{n+1} - u_{0}$.\n• **Produits** : $n! = \\prod_{k=1}^{n} k$ avec $0! = 1$ ; $\\prod_{k=1}^{n} a_k b_k = \\prod a_k \\times \\prod b_k$ et $\\prod_{k=1}^{n} \\lambda = \\lambda^{n}$."
      },
      {
        title: "4. Ensembles finis et cardinaux",
        content: "Pour des ensembles finis $A$, $B$, $E$, $F$ :\n• $\\text{card}(A \\cup B) = \\text{card}(A) + \\text{card}(B) - \\text{card}(A \\cap B)$ ;\n• $\\text{card}(E \\times F) = \\text{card}(E) \\times \\text{card}(F)$ ;\n• si $\\text{card}(E) = n$, l'ensemble $\\mathcal{P}(E)$ des parties de $E$ a $2^{n}$ éléments ;\n• si $A \\subset E$, $\\text{card}(\\overline{A}) = \\text{card}(E) - \\text{card}(A)$.\nPrincipe : on dénombre souvent le complémentaire (« au moins un » se traite par « aucun »)."
      },
      {
        title: "5. Listes, arrangements, combinaisons",
        content: "Soit $E$ un ensemble à $n$ éléments et $p \\in \\mathbb{N}$.\n• **$p$-listes** (ordre compté, répétitions permises) : $n^{p}$.\n• **Arrangements** (ordre compté, sans répétition, $p \\leq n$) : $\\dfrac{n!}{(n-p)!}$ ; en particulier $n!$ permutations de $E$.\n• **Combinaisons** (parties à $p$ éléments, sans ordre) : $\\dbinom{n}{p} = \\dfrac{n!}{p!\\,(n-p)!}$ si $0 \\leq p \\leq n$, et $0$ sinon.\nPropriétés : $\\dbinom{n}{p} = \\dbinom{n}{n-p}$ et, pour $1 \\leq p \\leq n-1$, la formule de Pascal $\\dbinom{n}{p} = \\dbinom{n-1}{p-1} + \\dbinom{n-1}{p}$."
      },
      {
        title: "6. Formule du binôme de Newton",
        content: "Pour tous réels (ou complexes) $a$ et $b$ et tout $n \\in \\mathbb{N}$ :\n$$(a+b)^{n} = \\sum_{k=0}^{n} \\binom{n}{k} a^{k} b^{n-k}$$\nLa somme comporte $n+1$ termes. Conséquences : $\\sum_{k=0}^{n} \\binom{n}{k} = 2^{n}$ et, pour $n \\geq 1$, $\\sum_{k=0}^{n} (-1)^{k} \\binom{n}{k} = 0$.\nLa formule reste valable pour deux matrices carrées $A$ et $B$ **qui commutent** ($AB = BA$)."
      }
    ],
    methods: [
      {
        title: "Méthode : Écrire la négation d'une proposition quantifiée",
        example: "Nier la proposition « $\\forall \\varepsilon > 0,\\ \\exists N \\in \\mathbb{N},\\ \\forall n \\geq N,\\ |u_n - \\ell| \\leq \\varepsilon$ ».",
        steps: [
          "**Étape 1 (Quantificateurs)** : on échange chaque $\\forall$ et chaque $\\exists$ sans changer leur ordre ni les ensembles : $\\exists \\varepsilon > 0,\\ \\forall N \\in \\mathbb{N},\\ \\exists n \\geq N$.",
          "**Étape 2 (Propriété finale)** : on nie la dernière assertion : $|u_n - \\ell| > \\varepsilon$.",
          "**Étape 3 (Conclure)** : $\\exists \\varepsilon > 0,\\ \\forall N \\in \\mathbb{N},\\ \\exists n \\geq N,\\ |u_n - \\ell| > \\varepsilon$, ce qui signifie que $(u_n)$ ne converge pas vers $\\ell$."
        ]
      },
      {
        title: "Méthode : Rédiger un raisonnement par récurrence",
        example: "Montrer que, pour tout $n \\in \\mathbb{N}^{*}$, $\\sum_{k=1}^{n} k^{3} = \\left(\\dfrac{n(n+1)}{2}\\right)^{2}$.",
        steps: [
          "**Étape 1 (Énoncer et initialiser)** : on note $P(n)$ l'égalité. Pour $n = 1$ : $1^{3} = 1$ et $\\left(\\frac{1 \\times 2}{2}\\right)^{2} = 1$, donc $P(1)$ est vraie.",
          "**Étape 2 (Hérédité)** : on fixe $n \\geq 1$ tel que $P(n)$ soit vraie. Alors $\\sum_{k=1}^{n+1} k^{3} = \\frac{n^{2}(n+1)^{2}}{4} + (n+1)^{3} = \\frac{(n+1)^{2}(n^{2} + 4n + 4)}{4} = \\left(\\frac{(n+1)(n+2)}{2}\\right)^{2}$, c'est-à-dire $P(n+1)$.",
          "**Étape 3 (Conclure)** : par récurrence, $P(n)$ est vraie pour tout $n \\geq 1$."
        ]
      },
      {
        title: "Méthode : Choisir le bon modèle de dénombrement",
        example: "Une animalerie contient 10 souris dont 4 mâles. On en prélève 3 simultanément. Combien de prélèvements contiennent exactement 2 mâles ? au moins un mâle ?",
        steps: [
          "**Étape 1 (Modèle)** : le prélèvement est simultané, donc sans ordre ni répétition : un prélèvement est une partie à 3 éléments, il y en a $\\binom{10}{3} = 120$.",
          "**Étape 2 (Principe multiplicatif)** : 2 mâles parmi 4 et 1 femelle parmi 6 : $\\binom{4}{2} \\times \\binom{6}{1} = 6 \\times 6 = 36$ prélèvements.",
          "**Étape 3 (Complémentaire)** : les prélèvements sans mâle sont au nombre de $\\binom{6}{3} = 20$, donc $120 - 20 = 100$ prélèvements contiennent au moins un mâle."
        ]
      }
    ],
    traps: [
      "⚠️ La négation de « $x \\leq 3$ » est « $x > 3$ », et non « $x \\geq 3$ ».",
      "⚠️ La négation d'une implication n'est pas une implication : $\\text{non}(P \\Rightarrow Q)$ s'écrit « $P$ et non $Q$ ».",
      "⚠️ Dans l'hérédité, on fixe un entier $n$ pour lequel $P(n)$ est vraie : écrire « supposons $P(n)$ vraie pour tout $n$ » revient à supposer ce qu'on veut démontrer.",
      "⚠️ Tirages successifs sans remise : l'ordre compte (arrangements) ; tirage simultané : l'ordre ne compte pas (combinaisons). Mélanger les deux modèles dans un même calcul fausse le résultat."
    ],
    flashcards: [
      { q: "Négation de « $\\forall x \\in \\mathbb{R},\\ f(x) > 0$ » ?", a: "« $\\exists x \\in \\mathbb{R},\\ f(x) \\leq 0$ »." },
      { q: "Contraposée de $P \\Rightarrow Q$ ?", a: "$\\text{non } Q \\Rightarrow \\text{non } P$ (équivalente à $P \\Rightarrow Q$)." },
      { q: "Nombre d'arrangements de $p$ éléments parmi $n$ ?", a: "$\\dfrac{n!}{(n-p)!}$ (pour $p \\leq n$)." },
      { q: "Valeur de $\\sum_{k=0}^{n} \\binom{n}{k}$ ?", a: "$2^{n}$ (binôme avec $a = b = 1$)." },
      { q: "Valeur de $\\sum_{k=1}^{n} k$ ?", a: "$\\dfrac{n(n+1)}{2}$." },
      { q: "Formule de Pascal ?", a: "$\\binom{n}{p} = \\binom{n-1}{p-1} + \\binom{n-1}{p}$ pour $1 \\leq p \\leq n-1$." }
    ]
  },

  "veto-02": {
    title: "VB-02 : Trigonométrie, nombres complexes et polynômes",
    domain: "Outils",
    objectives: [
      "Utiliser les formules d'addition et de duplication, et résoudre des équations trigonométriques.",
      "Passer de la forme algébrique à la forme exponentielle d'un nombre complexe.",
      "Résoudre une équation du second degré à coefficients réels dans $\\mathbb{C}$.",
      "Factoriser un polynôme réel à partir de ses racines et déterminer l'ordre de multiplicité d'une racine."
    ],
    keyPoints: [
      {
        title: "1. Formules de trigonométrie",
        content: "Pour tous réels $a$ et $b$ : $\\cos^{2} a + \\sin^{2} a = 1$ et\n$$\\cos(a+b) = \\cos a \\cos b - \\sin a \\sin b \\qquad \\sin(a+b) = \\sin a \\cos b + \\cos a \\sin b$$\nDuplication : $\\cos(2a) = 2\\cos^{2} a - 1 = 1 - 2\\sin^{2} a$ et $\\sin(2a) = 2 \\sin a \\cos a$.\nÉquations : $\\cos x = \\cos a \\iff x \\equiv a \\ [2\\pi]$ ou $x \\equiv -a \\ [2\\pi]$ ; $\\sin x = \\sin a \\iff x \\equiv a \\ [2\\pi]$ ou $x \\equiv \\pi - a \\ [2\\pi]$ ; $\\tan x = \\tan a \\iff x \\equiv a \\ [\\pi]$."
      },
      {
        title: "2. Forme algébrique, conjugué et module",
        content: "Tout complexe s'écrit de façon unique $z = a + ib$ avec $a = \\text{Re}(z)$ et $b = \\text{Im}(z)$ réels. Son conjugué est $\\overline{z} = a - ib$ et son module $|z| = \\sqrt{a^{2} + b^{2}}$.\nPropriétés : $z\\overline{z} = |z|^{2}$, $\\overline{zz'} = \\overline{z}\\,\\overline{z'}$, $|zz'| = |z|\\,|z'|$ et l'inégalité triangulaire $|z + z'| \\leq |z| + |z'|$.\nPour $z \\neq 0$ : $\\dfrac{1}{z} = \\dfrac{\\overline{z}}{|z|^{2}}$ (on multiplie par le conjugué du dénominateur)."
      },
      {
        title: "3. Forme exponentielle",
        content: "Pour $\\theta \\in \\mathbb{R}$, on pose $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ ; on a $|e^{i\\theta}| = 1$ et $e^{i\\theta}e^{i\\theta'} = e^{i(\\theta + \\theta')}$.\nTout $z \\neq 0$ s'écrit $z = re^{i\\theta}$ avec $r = |z| > 0$ et $\\theta$ un argument de $z$, défini à $2\\pi$ près.\n• **Moivre** : $(e^{i\\theta})^{n} = e^{in\\theta}$ pour $n \\in \\mathbb{Z}$.\n• **Euler** : $\\cos\\theta = \\dfrac{e^{i\\theta} + e^{-i\\theta}}{2}$ et $\\sin\\theta = \\dfrac{e^{i\\theta} - e^{-i\\theta}}{2i}$ (utile pour linéariser $\\cos^{n}$ ou $\\sin^{n}$)."
      },
      {
        title: "4. Équation du second degré à coefficients réels",
        content: "Soit $az^{2} + bz + c = 0$ avec $a, b, c$ réels, $a \\neq 0$, et $\\Delta = b^{2} - 4ac$.\n• $\\Delta > 0$ : deux racines réelles $\\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$ ;\n• $\\Delta = 0$ : une racine double $-\\dfrac{b}{2a}$ ;\n• $\\Delta < 0$ : deux racines complexes conjuguées $\\dfrac{-b \\pm i\\sqrt{-\\Delta}}{2a}$.\nDans tous les cas, la somme des racines vaut $-\\dfrac{b}{a}$ et leur produit $\\dfrac{c}{a}$."
      },
      {
        title: "5. Polynômes : degré, racines, multiplicité",
        content: "Pour des polynômes réels non nuls : $\\deg(PQ) = \\deg P + \\deg Q$ et $\\deg(P + Q) \\leq \\max(\\deg P, \\deg Q)$.\n• **Racine et factorisation** : $a$ est racine de $P$ si et seulement si $(X - a)$ divise $P$.\n• Un polynôme non nul de degré $n$ a au plus $n$ racines ; un polynôme de degré au plus $n$ qui a plus de $n$ racines est le polynôme nul.\n• **Multiplicité** : $a$ est racine d'ordre $m \\geq 1$ si $(X - a)^{m}$ divise $P$ mais pas $(X-a)^{m+1}$, ce qui équivaut à $P(a) = P'(a) = \\cdots = P^{(m-1)}(a) = 0$ et $P^{(m)}(a) \\neq 0$."
      },
      {
        title: "6. Factorisation des polynômes réels",
        content: "Si $P$ est à coefficients réels et $z$ est une racine complexe non réelle, alors $\\overline{z}$ est aussi racine, avec la même multiplicité, et $(X - z)(X - \\overline{z}) = X^{2} - 2\\text{Re}(z)X + |z|^{2}$ est un trinôme réel de discriminant négatif.\nTout polynôme réel non constant s'écrit comme produit de son coefficient dominant, de facteurs $(X - a)$ et de trinômes $X^{2} + pX + q$ avec $p^{2} - 4q < 0$ (théorème admis)."
      }
    ],
    methods: [
      {
        title: "Méthode : Écrire un complexe sous forme exponentielle",
        example: "Écrire $z = 1 + i\\sqrt{3}$ sous forme exponentielle, puis calculer $z^{6}$.",
        steps: [
          "**Étape 1 (Module)** : $|z| = \\sqrt{1 + 3} = 2$.",
          "**Étape 2 (Argument)** : $z = 2\\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)$ ; on cherche $\\theta$ avec $\\cos\\theta = \\frac{1}{2}$ et $\\sin\\theta = \\frac{\\sqrt{3}}{2}$, donc $\\theta = \\frac{\\pi}{3}$ et $z = 2e^{i\\pi/3}$.",
          "**Étape 3 (Puissance)** : $z^{6} = 2^{6}e^{i6\\pi/3} = 64e^{2i\\pi} = 64$."
        ]
      },
      {
        title: "Méthode : Résoudre une équation du second degré dans $\\mathbb{C}$",
        example: "Résoudre $z^{2} + 2z + 5 = 0$ dans $\\mathbb{C}$.",
        steps: [
          "**Étape 1 (Discriminant)** : $\\Delta = 4 - 20 = -16 < 0$, et $\\sqrt{-\\Delta} = 4$.",
          "**Étape 2 (Racines)** : $z = \\dfrac{-2 \\pm 4i}{2}$, soit $z_1 = -1 + 2i$ et $z_2 = -1 - 2i$.",
          "**Étape 3 (Contrôle)** : $z_1 + z_2 = -2 = -\\frac{b}{a}$ et $z_1 z_2 = 1 + 4 = 5 = \\frac{c}{a}$."
        ]
      },
      {
        title: "Méthode : Factoriser un polynôme à partir d'une racine évidente",
        example: "Factoriser $P = X^{3} - 3X + 2$ et préciser la multiplicité de ses racines.",
        steps: [
          "**Étape 1 (Racine évidente)** : $P(1) = 1 - 3 + 2 = 0$, donc $(X - 1)$ divise $P$ ; par identification ou division, $P = (X - 1)(X^{2} + X - 2)$.",
          "**Étape 2 (Facteur du second degré)** : $X^{2} + X - 2$ a pour racines $1$ et $-2$, d'où $P = (X - 1)^{2}(X + 2)$.",
          "**Étape 3 (Multiplicité)** : contrôle par les dérivées : $P'(X) = 3X^{2} - 3$ et $P''(X) = 6X$ ; $P(1) = P'(1) = 0$ et $P''(1) = 6 \\neq 0$, donc $1$ est racine double et $-2$ racine simple."
        ]
      }
    ],
    traps: [
      "⚠️ Un argument n'est défini qu'à $2\\pi$ près, et $\\arctan(b/a)$ ne donne un argument de $a + ib$ que si $a > 0$ : pour $z = -1 - i$, l'argument est $-\\frac{3\\pi}{4}$ et non $\\frac{\\pi}{4}$.",
      "⚠️ En général $|z + z'| \\neq |z| + |z'|$ : le module n'est pas additif, seulement multiplicatif.",
      "⚠️ Le degré d'une somme peut chuter : $\\deg\\big((X^{2} + X) + (1 - X^{2})\\big) = 1$.",
      "⚠️ Compter les racines d'un polynôme sans leur multiplicité conduit à une factorisation incomplète : $(X - 1)^{2}(X + 2)$ et $(X - 1)(X + 2)$ ne sont pas égaux."
    ],
    flashcards: [
      { q: "Formule de $\\cos(2a)$ en fonction de $\\cos a$ ?", a: "$\\cos(2a) = 2\\cos^{2} a - 1$." },
      { q: "Forme exponentielle de $i$ ?", a: "$i = e^{i\\pi/2}$." },
      { q: "Inverse de $z = a + ib \\neq 0$ ?", a: "$\\dfrac{1}{z} = \\dfrac{a - ib}{a^{2} + b^{2}}$." },
      { q: "Racines de $az^{2} + bz + c$ quand $\\Delta < 0$ ?", a: "$\\dfrac{-b \\pm i\\sqrt{-\\Delta}}{2a}$, deux complexes conjugués." },
      { q: "Caractérisation d'une racine double $a$ de $P$ ?", a: "$P(a) = P'(a) = 0$ et $P''(a) \\neq 0$." }
    ]
  },

  "veto-03": {
    title: "VB-03 : Suites réelles et séries",
    domain: "Analyse",
    objectives: [
      "Exprimer le terme général des suites arithmétiques, géométriques, arithmético-géométriques et récurrentes linéaires d'ordre 2.",
      "Étudier la convergence d'une suite par les théorèmes d'encadrement, de la limite monotone ou des suites adjacentes.",
      "Étudier la nature d'une série et calculer sa somme dans les cas de référence."
    ],
    keyPoints: [
      {
        title: "1. Suites arithmétiques, géométriques et arithmético-géométriques",
        content: "• Arithmétique de raison $r$ : $u_n = u_0 + nr$.\n• Géométrique de raison $q$ : $u_n = u_0 q^{n}$.\n• Arithmético-géométrique : $u_{n+1} = au_n + b$ avec $a \\neq 1$. Le réel $\\ell = \\dfrac{b}{1 - a}$ vérifie $\\ell = a\\ell + b$ ; la suite $v_n = u_n - \\ell$ est géométrique de raison $a$, donc\n$$u_n = a^{n}(u_0 - \\ell) + \\ell$$\nLimite de $(q^{n})$ : $0$ si $|q| < 1$, $1$ si $q = 1$, $+\\infty$ si $q > 1$, pas de limite si $q \\leq -1$."
      },
      {
        title: "2. Suites récurrentes linéaires d'ordre 2",
        content: "Soit $u_{n+2} = au_{n+1} + bu_n$ avec $a, b$ réels et $b \\neq 0$, d'équation caractéristique $r^{2} = ar + b$.\n• Deux racines réelles distinctes $r_1$, $r_2$ : $u_n = \\lambda r_1^{n} + \\mu r_2^{n}$.\n• Une racine double $r$ : $u_n = (\\lambda + \\mu n)r^{n}$.\n• Deux racines complexes conjuguées $\\rho e^{\\pm i\\theta}$ : $u_n = \\rho^{n}(\\lambda\\cos(n\\theta) + \\mu\\sin(n\\theta))$.\nLes réels $\\lambda$ et $\\mu$ sont déterminés de façon unique par $u_0$ et $u_1$."
      },
      {
        title: "3. Théorèmes de convergence",
        content: "• **Encadrement** : si $v_n \\leq u_n \\leq w_n$ à partir d'un certain rang et si $(v_n)$ et $(w_n)$ convergent vers la même limite $\\ell$, alors $(u_n)$ converge vers $\\ell$.\n• **Limite monotone** : une suite croissante et majorée converge ; une suite croissante non majorée tend vers $+\\infty$ (énoncés symétriques pour les suites décroissantes).\n• **Passage à la limite** : si $u_n \\leq v_n$ et si les deux suites convergent, alors $\\lim u_n \\leq \\lim v_n$ (les inégalités strictes deviennent larges).\n• **Suites récurrentes** $u_{n+1} = f(u_n)$ : si $(u_n)$ converge vers $\\ell$ et si $f$ est continue en $\\ell$, alors $f(\\ell) = \\ell$."
      },
      {
        title: "4. Suites adjacentes",
        content: "Deux suites $(u_n)$ et $(v_n)$ sont adjacentes si $(u_n)$ est croissante, $(v_n)$ décroissante et $\\lim (v_n - u_n) = 0$.\n**Théorème** : deux suites adjacentes convergent vers la même limite $\\ell$, et pour tout $n$, $u_n \\leq \\ell \\leq v_n$.\nCet encadrement fournit une valeur approchée de $\\ell$ avec une erreur au plus $v_n - u_n$."
      },
      {
        title: "5. Séries numériques et séries de référence",
        content: "La série $\\sum u_n$ converge si la suite des sommes partielles $S_n = \\sum_{k=0}^{n} u_k$ converge ; sa somme est alors $\\sum_{k=0}^{+\\infty} u_k = \\lim S_n$.\n• **Condition nécessaire** : si $\\sum u_n$ converge, alors $u_n \\to 0$. Si $u_n \\not\\to 0$, la série diverge grossièrement.\n• **Géométriques** : pour $|q| < 1$, $\\sum_{n=0}^{+\\infty} q^{n} = \\dfrac{1}{1 - q}$, $\\sum_{n=1}^{+\\infty} nq^{n-1} = \\dfrac{1}{(1 - q)^{2}}$, $\\sum_{n=2}^{+\\infty} n(n-1)q^{n-2} = \\dfrac{2}{(1-q)^{3}}$ ; pour $|q| \\geq 1$, elles divergent.\n• **Exponentielle** : pour tout réel $x$, $\\sum_{n=0}^{+\\infty} \\dfrac{x^{n}}{n!} = e^{x}$.\n• **Riemann** : $\\sum_{n \\geq 1} \\dfrac{1}{n^{\\alpha}}$ converge si et seulement si $\\alpha > 1$."
      },
      {
        title: "6. Séries à termes positifs et convergence absolue",
        content: "Si $u_n \\geq 0$, la suite $(S_n)$ est croissante : la série converge si et seulement si $(S_n)$ est majorée.\nPour $u_n \\geq 0$ et $v_n \\geq 0$ :\n• **Comparaison** : si $u_n \\leq v_n$ à partir d'un certain rang et $\\sum v_n$ converge, alors $\\sum u_n$ converge (et si $\\sum u_n$ diverge, $\\sum v_n$ diverge) ;\n• **Équivalence** : si $u_n \\sim v_n$, les deux séries sont de même nature.\n• **Convergence absolue** : si $\\sum |u_n|$ converge, alors $\\sum u_n$ converge et $\\left|\\sum u_n\\right| \\leq \\sum |u_n|$."
      }
    ],
    methods: [
      {
        title: "Méthode : Étudier une suite arithmético-géométrique",
        example: "Un élevage compte $u_0 = 50$ animaux ; chaque année, 20 % des animaux sont vendus et 20 jeunes sont introduits : $u_{n+1} = 0{,}8u_n + 20$. Exprimer $u_n$ et sa limite.",
        steps: [
          "**Étape 1 (Point fixe)** : $\\ell = 0{,}8\\ell + 20 \\iff \\ell = 100$.",
          "**Étape 2 (Suite auxiliaire)** : $v_n = u_n - 100$ vérifie $v_{n+1} = 0{,}8u_n + 20 - 100 = 0{,}8v_n$ : elle est géométrique de raison $0{,}8$ et $v_0 = -50$.",
          "**Étape 3 (Conclure)** : $u_n = 100 - 50 \\times 0{,}8^{n}$ ; comme $|0{,}8| < 1$, $u_n \\to 100$ : l'effectif se stabilise vers 100 animaux."
        ]
      },
      {
        title: "Méthode : Résoudre une récurrence linéaire d'ordre 2",
        example: "Déterminer $u_n$ sachant que $u_0 = 3$, $u_1 = 0$ et $u_{n+2} = u_{n+1} + 2u_n$ pour tout $n$.",
        steps: [
          "**Étape 1 (Équation caractéristique)** : $r^{2} - r - 2 = 0$ a pour racines $r_1 = 2$ et $r_2 = -1$, donc $u_n = \\lambda 2^{n} + \\mu(-1)^{n}$.",
          "**Étape 2 (Conditions initiales)** : $\\lambda + \\mu = 3$ et $2\\lambda - \\mu = 0$, d'où $\\lambda = 1$ et $\\mu = 2$.",
          "**Étape 3 (Conclure et contrôler)** : $u_n = 2^{n} + 2(-1)^{n}$ ; contrôle : $u_2 = u_1 + 2u_0 = 6$ et la formule donne $4 + 2 = 6$."
        ]
      },
      {
        title: "Méthode : Étudier la nature d'une série à termes positifs",
        example: "Étudier la série $\\sum_{n \\geq 1} \\dfrac{1}{n(n+1)}$ et calculer sa somme.",
        steps: [
          "**Étape 1 (Nature par équivalent)** : les termes sont positifs et $\\frac{1}{n(n+1)} \\sim \\frac{1}{n^{2}}$ ; la série de Riemann $\\sum \\frac{1}{n^{2}}$ converge ($\\alpha = 2 > 1$), donc la série converge.",
          "**Étape 2 (Décomposition)** : $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$, donc par télescopage $S_N = \\sum_{n=1}^{N} \\frac{1}{n(n+1)} = 1 - \\frac{1}{N+1}$.",
          "**Étape 3 (Somme)** : $S_N \\to 1$, donc $\\sum_{n=1}^{+\\infty} \\frac{1}{n(n+1)} = 1$."
        ]
      }
    ],
    traps: [
      "⚠️ $u_n \\to 0$ est nécessaire mais pas suffisant : $\\frac{1}{n} \\to 0$ alors que la série harmonique $\\sum \\frac{1}{n}$ diverge.",
      "⚠️ Les critères de comparaison et d'équivalence ne s'appliquent qu'à des séries à termes positifs (au moins à partir d'un certain rang).",
      "⚠️ Une suite croissante converge seulement si elle est majorée ; et la limite d'une suite majorée par $M$ est inférieure ou égale à $M$, pas forcément égale.",
      "⚠️ Soignez l'indice de départ : $\\sum_{n=1}^{+\\infty} q^{n} = \\frac{q}{1 - q}$ et non $\\frac{1}{1 - q}$."
    ],
    flashcards: [
      { q: "Terme général de $u_{n+1} = au_n + b$ ($a \\neq 1$) ?", a: "$u_n = a^{n}(u_0 - \\ell) + \\ell$ avec $\\ell = \\frac{b}{1 - a}$." },
      { q: "Forme de $u_n$ si l'équation caractéristique a une racine double $r$ ?", a: "$u_n = (\\lambda + \\mu n)r^{n}$." },
      { q: "Somme de $\\sum_{n=0}^{+\\infty} q^{n}$ pour $|q| < 1$ ?", a: "$\\dfrac{1}{1 - q}$." },
      { q: "Pour quels $\\alpha$ la série $\\sum \\frac{1}{n^{\\alpha}}$ converge-t-elle ?", a: "Pour $\\alpha > 1$." },
      { q: "Définition de deux suites adjacentes ?", a: "L'une croissante, l'autre décroissante, et leur différence tend vers $0$." },
      { q: "Somme de $\\sum_{n=0}^{+\\infty} \\frac{x^{n}}{n!}$ ?", a: "$e^{x}$, pour tout réel $x$." }
    ]
  },

  "veto-04": {
    title: "VB-04 : Fonctions : limites, continuité, dérivation et développements limités",
    domain: "Analyse",
    objectives: [
      "Lever une forme indéterminée par factorisation, croissances comparées ou équivalents.",
      "Utiliser le théorème des valeurs intermédiaires et le théorème de la bijection.",
      "Appliquer le théorème de Rolle, l'égalité et l'inégalité des accroissements finis.",
      "Calculer un développement limité et l'utiliser pour une limite ou une étude locale."
    ],
    keyPoints: [
      {
        title: "1. Croissances comparées",
        content: "Pour tous réels $\\alpha > 0$ et $\\beta > 0$ :\n$$\\lim_{x \\to +\\infty} \\frac{(\\ln x)^{\\alpha}}{x^{\\beta}} = 0 \\qquad \\lim_{x \\to +\\infty} \\frac{x^{\\alpha}}{e^{\\beta x}} = 0 \\qquad \\lim_{x \\to 0^{+}} x^{\\beta}|\\ln x|^{\\alpha} = 0 \\qquad \\lim_{x \\to -\\infty} |x|^{\\alpha}e^{x} = 0$$\nEn résumé, l'exponentielle l'emporte sur les puissances, qui l'emportent sur le logarithme. Limites usuelles en $0$ : $\\dfrac{e^{x} - 1}{x} \\to 1$, $\\dfrac{\\ln(1 + x)}{x} \\to 1$, $\\dfrac{\\sin x}{x} \\to 1$."
      },
      {
        title: "2. Continuité, valeurs intermédiaires et bijections",
        content: "• **TVI** : si $f$ est continue sur un intervalle $I$ et si $a, b \\in I$, tout réel compris entre $f(a)$ et $f(b)$ admet au moins un antécédent entre $a$ et $b$. L'image d'un intervalle par une fonction continue est un intervalle.\n• **Segment** : une fonction continue sur $[a ; b]$ est bornée et atteint ses bornes.\n• **Théorème de la bijection** : si $f$ est continue et strictement monotone sur un intervalle $I$, elle réalise une bijection de $I$ sur l'intervalle $J = f(I)$ ; sa réciproque $f^{-1}$ est continue sur $J$, strictement monotone de même sens que $f$."
      },
      {
        title: "3. Dérivation",
        content: "$f$ est dérivable en $a$ si $\\dfrac{f(a+h) - f(a)}{h}$ a une limite finie $f'(a)$ quand $h \\to 0$ ; la tangente a pour équation $y = f(a) + f'(a)(x - a)$.\nRègles : $(uv)' = u'v + uv'$, $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^{2}}$, $(g \\circ f)' = f' \\times (g' \\circ f)$.\n**Réciproque** : si $f$ est bijective, dérivable en $x_0 = f^{-1}(y_0)$ avec $f'(x_0) \\neq 0$, alors $(f^{-1})'(y_0) = \\dfrac{1}{f'(x_0)}$.\nSur un **intervalle** : $f' \\geq 0$ si et seulement si $f$ est croissante ; si $f' > 0$ sauf en un nombre fini de points, $f$ est strictement croissante."
      },
      {
        title: "4. Théorème de Rolle et accroissements finis",
        content: "Soit $f$ continue sur $[a ; b]$ et dérivable sur $]a ; b[$ (avec $a < b$).\n• **Rolle** : si $f(a) = f(b)$, il existe $c \\in ]a ; b[$ tel que $f'(c) = 0$.\n• **Égalité des accroissements finis** : il existe $c \\in ]a ; b[$ tel que $f(b) - f(a) = f'(c)(b - a)$.\n• **Inégalité des accroissements finis** : si $|f'| \\leq M$ sur un intervalle $I$, alors pour tous $x, y \\in I$, $|f(x) - f(y)| \\leq M|x - y|$.\nApplication : si $u_{n+1} = f(u_n)$, $f(\\ell) = \\ell$ et $|f'| \\leq k < 1$ sur un intervalle stable contenant $u_0$ et $\\ell$, alors $|u_n - \\ell| \\leq k^{n}|u_0 - \\ell|$, donc $u_n \\to \\ell$."
      },
      {
        title: "5. Équivalents et développements limités",
        content: "$f \\underset{a}{\\sim} g$ si $f = g(1 + \\varepsilon)$ avec $\\varepsilon \\to 0$ en $a$. On peut multiplier, diviser et élever à une puissance fixe des équivalents, mais pas les additionner.\nUn DL d'ordre $n$ en $0$ est une écriture $f(x) = a_0 + a_1x + \\cdots + a_nx^{n} + o(x^{n})$. **Taylor-Young** : si $f$ est de classe $C^{n}$ au voisinage de $a$, $f(a + h) = \\sum_{k=0}^{n} \\dfrac{f^{(k)}(a)}{k!}h^{k} + o(h^{n})$.\nDL usuels en $0$ :\n$$e^{x} = \\sum_{k=0}^{n} \\frac{x^{k}}{k!} + o(x^{n}) \\qquad \\ln(1+x) = x - \\frac{x^{2}}{2} + \\frac{x^{3}}{3} + o(x^{3}) \\qquad \\frac{1}{1-x} = \\sum_{k=0}^{n} x^{k} + o(x^{n})$$\n$$(1+x)^{\\alpha} = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2}x^{2} + o(x^{2}) \\qquad \\sin x = x - \\frac{x^{3}}{6} + o(x^{3}) \\qquad \\cos x = 1 - \\frac{x^{2}}{2} + \\frac{x^{4}}{24} + o(x^{4})$$"
      },
      {
        title: "6. Applications des développements limités",
        content: "• **Limites** : on remplace chaque fonction par son DL à un ordre suffisant ; le premier terme non nul donne un équivalent.\n• **Tangente et position** : si $f(a + h) = c_0 + c_1h + c_kh^{k} + o(h^{k})$ avec $c_k \\neq 0$ ($k \\geq 2$), la tangente en $a$ est $y = c_0 + c_1(x - a)$ et la courbe est au-dessus si $c_kh^{k} > 0$, au-dessous si $c_kh^{k} < 0$, au voisinage de $a$.\n• **Asymptote oblique** : si $f(x) = ax + b + o(1)$ en $+\\infty$, la droite $y = ax + b$ est asymptote ; on l'obtient en posant $h = \\frac{1}{x}$."
      }
    ],
    methods: [
      {
        title: "Méthode : Lever une indétermination par le terme dominant",
        example: "Calculer $\\lim_{x \\to +\\infty} \\dfrac{e^{x} - x^{3}}{e^{x} + x\\ln x}$.",
        steps: [
          "**Étape 1 (Terme dominant)** : par croissances comparées, $e^{x}$ l'emporte sur $x^{3}$ et sur $x\\ln x$ (qui est inférieur à $x^{2}$ pour $x \\geq 1$).",
          "**Étape 2 (Factoriser)** : $\\dfrac{e^{x} - x^{3}}{e^{x} + x\\ln x} = \\dfrac{1 - x^{3}e^{-x}}{1 + x\\ln x\\, e^{-x}}$.",
          "**Étape 3 (Conclure)** : $x^{3}e^{-x} \\to 0$ et $0 \\leq x\\ln x\\,e^{-x} \\leq x^{2}e^{-x} \\to 0$ pour $x \\geq 1$, donc la limite vaut $1$."
        ]
      },
      {
        title: "Méthode : Montrer qu'une équation a une unique solution",
        example: "Montrer que $x^{3} + x - 1 = 0$ admet une unique solution réelle $\\alpha$, et que $\\alpha \\in ]0 ; 1[$.",
        steps: [
          "**Étape 1 (Monotonie)** : $f(x) = x^{3} + x - 1$ est dérivable sur $\\mathbb{R}$ avec $f'(x) = 3x^{2} + 1 > 0$ : $f$ est continue et strictement croissante sur $\\mathbb{R}$.",
          "**Étape 2 (Bijection)** : $\\lim_{-\\infty} f = -\\infty$ et $\\lim_{+\\infty} f = +\\infty$, donc $f$ est une bijection de $\\mathbb{R}$ sur $\\mathbb{R}$ et $0$ a un unique antécédent $\\alpha$.",
          "**Étape 3 (Localiser)** : $f(0) = -1 < 0$ et $f(1) = 1 > 0$, donc $f(0) < f(\\alpha) < f(1)$ et, $f$ étant strictement croissante, $\\alpha \\in ]0 ; 1[$."
        ]
      },
      {
        title: "Méthode : Calculer une limite par développement limité",
        example: "Calculer $\\lim_{x \\to 0} \\dfrac{e^{x} - 1 - x}{x^{2}}$ et $\\lim_{x \\to 0} \\dfrac{\\ln(1 + x) - x}{x^{2}}$.",
        steps: [
          "**Étape 1 (Ordre utile)** : le dénominateur est $x^{2}$, on développe donc les numérateurs à l'ordre 2.",
          "**Étape 2 (DL)** : $e^{x} - 1 - x = \\frac{x^{2}}{2} + o(x^{2})$ et $\\ln(1 + x) - x = -\\frac{x^{2}}{2} + o(x^{2})$.",
          "**Étape 3 (Conclure)** : en divisant par $x^{2}$, les limites valent respectivement $\\frac{1}{2}$ et $-\\frac{1}{2}$."
        ]
      },
      {
        title: "Méthode : Déterminer une tangente et la position de la courbe",
        example: "Étudier au voisinage de $0$ la fonction $f(x) = e^{x}\\ln(1 + x)$.",
        steps: [
          "**Étape 1 (Produit de DL)** : $e^{x} = 1 + x + o(x)$ et $\\ln(1+x) = x - \\frac{x^{2}}{2} + o(x^{2})$ ; comme $\\ln(1 + x)$ commence par $x$, l'ordre 1 suffit pour $e^{x}$.",
          "**Étape 2 (Développer)** : $f(x) = (1 + x)\\left(x - \\frac{x^{2}}{2}\\right) + o(x^{2}) = x + \\frac{x^{2}}{2} + o(x^{2})$.",
          "**Étape 3 (Interpréter)** : la tangente en $0$ est $y = x$ et $f(x) - x \\sim \\frac{x^{2}}{2} > 0$ pour $x \\neq 0$ : la courbe est au-dessus de sa tangente au voisinage de $0$."
        ]
      }
    ],
    traps: [
      "⚠️ On n'additionne pas des équivalents : $x + x^{2} \\sim x$ et $-x \\sim -x$ en $0$, mais la somme $x^{2}$ n'est pas équivalente à $0$. Dans ce cas, passez aux DL.",
      "⚠️ On ne compose pas un équivalent par l'exponentielle : $x^{2} + x \\sim x^{2}$ en $+\\infty$, mais $e^{x^{2} + x}$ n'est pas équivalent à $e^{x^{2}}$.",
      "⚠️ Le TVI exige la continuité sur un intervalle : $x \\mapsto \\frac{1}{x}$ prend les valeurs $-1$ et $1$ sans jamais s'annuler sur $\\mathbb{R}^{*}$.",
      "⚠️ Dans un produit de DL, tronquez tous les termes au même ordre : garder un terme en $x^{3}$ quand le reste est en $o(x^{2})$ n'a pas de sens."
    ],
    flashcards: [
      { q: "Limite de $x\\ln x$ en $0^{+}$ ?", a: "$0$ (croissances comparées)." },
      { q: "Énoncé du théorème de Rolle ?", a: "$f$ continue sur $[a ; b]$, dérivable sur $]a ; b[$, $f(a) = f(b)$ : il existe $c \\in ]a ; b[$ tel que $f'(c) = 0$." },
      { q: "DL à l'ordre 2 en $0$ de $\\ln(1 + x)$ ?", a: "$x - \\frac{x^{2}}{2} + o(x^{2})$." },
      { q: "DL à l'ordre 2 en $0$ de $\\sqrt{1 + x}$ ?", a: "$1 + \\frac{x}{2} - \\frac{x^{2}}{8} + o(x^{2})$." },
      { q: "Dérivée de $f^{-1}$ en $y_0 = f(x_0)$ ?", a: "$\\dfrac{1}{f'(x_0)}$, si $f'(x_0) \\neq 0$." },
      { q: "Équivalent de $1 - \\cos x$ en $0$ ?", a: "$\\dfrac{x^{2}}{2}$." }
    ]
  },

  "veto-05": {
    title: "VB-05 : Primitives, intégrales et intégrales généralisées",
    domain: "Analyse",
    objectives: [
      "Reconnaître une primitive usuelle et calculer une intégrale sur un segment.",
      "Utiliser les propriétés de l'intégrale (linéarité, Chasles, positivité) pour encadrer.",
      "Intégrer par parties et effectuer un changement de variable.",
      "Étudier la convergence d'une intégrale généralisée et calculer sa valeur."
    ],
    keyPoints: [
      {
        title: "1. Primitives usuelles",
        content: "Sur un intervalle où les expressions sont définies ($u$ dérivable) :\n• $x^{n} \\to \\dfrac{x^{n+1}}{n+1}$ ($n \\neq -1$) ; $\\dfrac{1}{x} \\to \\ln|x|$ ; $e^{ax} \\to \\dfrac{e^{ax}}{a}$ ($a \\neq 0$) ;\n• $\\cos x \\to \\sin x$ ; $\\sin x \\to -\\cos x$ ; $\\dfrac{1}{1 + x^{2}} \\to \\arctan x$ ;\n• $u'u^{\\alpha} \\to \\dfrac{u^{\\alpha+1}}{\\alpha+1}$ ($\\alpha \\neq -1$) ; $\\dfrac{u'}{u} \\to \\ln|u|$ ; $u'e^{u} \\to e^{u}$.\nDeux primitives d'une même fonction sur un **intervalle** diffèrent d'une constante."
      },
      {
        title: "2. Intégrale d'une fonction continue sur un segment",
        content: "Pour $f$, $g$ continues sur $[a ; b]$ :\n• **Linéarité** et **relation de Chasles** : $\\int_a^b f = \\int_a^c f + \\int_c^b f$ ;\n• **Positivité** : si $a \\leq b$ et $f \\geq 0$, alors $\\int_a^b f \\geq 0$ ; **croissance** : si $a \\leq b$ et $f \\leq g$, alors $\\int_a^b f \\leq \\int_a^b g$ ;\n• **Inégalité triangulaire** : $\\left|\\int_a^b f\\right| \\leq \\int_a^b |f|$ pour $a \\leq b$ ;\n• si $f$ est **continue**, positive et d'intégrale nulle sur $[a ; b]$ ($a < b$), alors $f$ est nulle sur $[a ; b]$.\nValeur moyenne : $\\mu = \\dfrac{1}{b - a}\\int_a^b f(t)\\,dt$."
      },
      {
        title: "3. Théorème fondamental de l'analyse",
        content: "Soit $f$ continue sur un intervalle $I$ et $a \\in I$. La fonction $F : x \\mapsto \\int_a^x f(t)\\,dt$ est l'unique primitive de $f$ sur $I$ qui s'annule en $a$ : elle est de classe $C^{1}$ et $F' = f$.\nPour toute primitive $G$ de $f$ sur $I$ : $\\int_a^b f(t)\\,dt = G(b) - G(a) = [G(t)]_a^b$.\nSi $u$ et $v$ sont dérivables à valeurs dans $I$, $x \\mapsto \\int_{u(x)}^{v(x)} f(t)\\,dt$ a pour dérivée $v'(x)f(v(x)) - u'(x)f(u(x))$."
      },
      {
        title: "4. Intégration par parties et changement de variable",
        content: "• **IPP** : si $u$ et $v$ sont de classe $C^{1}$ sur $[a ; b]$,\n$$\\int_a^b u'(t)v(t)\\,dt = [u(t)v(t)]_a^b - \\int_a^b u(t)v'(t)\\,dt$$\n• **Changement de variable** : si $\\varphi$ est de classe $C^{1}$ sur $[\\alpha ; \\beta]$ et $f$ continue sur un intervalle contenant $\\varphi([\\alpha ; \\beta])$,\n$$\\int_{\\alpha}^{\\beta} f(\\varphi(t))\\varphi'(t)\\,dt = \\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(x)\\,dx$$\nOn change trois choses : la fonction, l'élément différentiel ($dx = \\varphi'(t)\\,dt$) et les bornes."
      },
      {
        title: "5. Sommes de Riemann",
        content: "Si $f$ est continue sur $[a ; b]$, alors\n$$\\lim_{n \\to +\\infty} \\frac{b - a}{n}\\sum_{k=0}^{n-1} f\\left(a + k\\frac{b - a}{n}\\right) = \\int_a^b f(t)\\,dt$$\n(même limite avec $\\sum_{k=1}^{n}$). C'est le principe de la méthode des rectangles ; si $f$ est de classe $C^{1}$ avec $|f'| \\leq M$, l'erreur est majorée par $\\dfrac{M(b - a)^{2}}{2n}$."
      },
      {
        title: "6. Intégrales généralisées",
        content: "Si $f$ est continue sur $[a ; +\\infty[$, $\\int_a^{+\\infty} f$ **converge** si $\\int_a^x f(t)\\,dt$ a une limite finie quand $x \\to +\\infty$ (définition analogue en une borne finie où $f$ n'est pas définie). Sur $]-\\infty ; +\\infty[$, on coupe en un point et on exige la convergence des **deux** morceaux.\nRéférences : $\\int_1^{+\\infty} \\frac{dt}{t^{\\alpha}}$ converge $\\iff \\alpha > 1$ ; $\\int_0^{1} \\frac{dt}{t^{\\alpha}}$ converge $\\iff \\alpha < 1$ ; $\\int_0^{+\\infty} e^{-\\lambda t}\\,dt = \\frac{1}{\\lambda}$ pour $\\lambda > 0$.\nPour $f, g$ positives : comparaison ($0 \\leq f \\leq g$), équivalence ($f \\sim g$) et négligeabilité ($f = o(g)$ et $\\int g$ convergente) ; enfin la convergence absolue entraîne la convergence.\n*Exemple* : après une injection, une concentration plasmatique $C(t) = C_0e^{-kt}$ a pour aire sous la courbe $\\int_0^{+\\infty} C_0e^{-kt}\\,dt = \\frac{C_0}{k}$."
      }
    ],
    methods: [
      {
        title: "Méthode : Intégrer par parties",
        example: "Calculer $I = \\int_0^1 te^{t}\\,dt$.",
        steps: [
          "**Étape 1 (Choix)** : on dérive le polynôme et on intègre l'exponentielle : $v(t) = t$, $v'(t) = 1$, $u'(t) = e^{t}$, $u(t) = e^{t}$, toutes de classe $C^{1}$.",
          "**Étape 2 (Formule)** : $I = [te^{t}]_0^1 - \\int_0^1 e^{t}\\,dt = e - (e - 1)$.",
          "**Étape 3 (Conclure)** : $I = 1$."
        ]
      },
      {
        title: "Méthode : Effectuer un changement de variable",
        example: "Calculer $J = \\int_0^1 e^{\\sqrt{x}}\\,dx$ en posant $x = t^{2}$.",
        steps: [
          "**Étape 1 (Justifier)** : $\\varphi(t) = t^{2}$ est de classe $C^{1}$ sur $[0 ; 1]$, $\\varphi(0) = 0$, $\\varphi(1) = 1$ et $dx = 2t\\,dt$ ; pour $t \\geq 0$, $\\sqrt{t^{2}} = t$.",
          "**Étape 2 (Transformer)** : $J = \\int_0^1 e^{t} \\times 2t\\,dt = 2\\int_0^1 te^{t}\\,dt$.",
          "**Étape 3 (Conclure)** : d'après le calcul par parties précédent, $J = 2 \\times 1 = 2$."
        ]
      },
      {
        title: "Méthode : Étudier puis calculer une intégrale généralisée",
        example: "Montrer que $K = \\int_1^{+\\infty} \\dfrac{\\ln t}{t^{2}}\\,dt$ converge et la calculer.",
        steps: [
          "**Étape 1 (Convergence)** : $f(t) = \\frac{\\ln t}{t^{2}}$ est continue et positive sur $[1 ; +\\infty[$, et $t^{3/2}f(t) = \\frac{\\ln t}{\\sqrt{t}} \\to 0$, donc $f(t) = o\\left(\\frac{1}{t^{3/2}}\\right)$ ; comme $\\frac{3}{2} > 1$, $K$ converge.",
          "**Étape 2 (Calcul sur un segment)** : pour $x > 1$, par parties, $\\int_1^x \\frac{\\ln t}{t^{2}}\\,dt = \\left[-\\frac{\\ln t}{t}\\right]_1^x + \\int_1^x \\frac{dt}{t^{2}} = -\\frac{\\ln x}{x} + 1 - \\frac{1}{x}$.",
          "**Étape 3 (Passage à la limite)** : quand $x \\to +\\infty$, $\\frac{\\ln x}{x} \\to 0$, donc $K = 1$."
        ]
      }
    ],
    traps: [
      "⚠️ $\\ln|x|$ est une primitive de $\\frac{1}{x}$ sur $]0 ; +\\infty[$ et sur $]-\\infty ; 0[$ séparément : on n'intègre jamais $\\frac{1}{x}$ « à travers » $0$.",
      "⚠️ $\\int_{-1}^{1} \\frac{dt}{t^{2}}$ n'est pas égale à $\\left[-\\frac{1}{t}\\right]_{-1}^{1} = -2$ : la fonction n'est pas continue en $0$ et l'intégrale généralisée diverge.",
      "⚠️ Ne découpez pas une intégrale en deux morceaux divergents, et ne calculez pas $\\int_{-\\infty}^{+\\infty} f$ comme $\\lim_{x \\to +\\infty}\\int_{-x}^{x} f$ : $\\int_{-x}^{x} t\\,dt = 0$ alors que $\\int_{-\\infty}^{+\\infty} t\\,dt$ diverge.",
      "⚠️ Dans un changement de variable, on oublie souvent de changer les bornes ou le facteur $\\varphi'(t)$."
    ],
    flashcards: [
      { q: "Primitive de $\\dfrac{u'}{u}$ ?", a: "$\\ln|u|$, sur un intervalle où $u$ ne s'annule pas." },
      { q: "Formule d'intégration par parties ?", a: "$\\int_a^b u'v = [uv]_a^b - \\int_a^b uv'$, avec $u$, $v$ de classe $C^{1}$." },
      { q: "Dérivée de $x \\mapsto \\int_a^x f(t)\\,dt$ pour $f$ continue ?", a: "$f(x)$." },
      { q: "Nature de $\\int_0^{1} \\frac{dt}{\\sqrt{t}}$ ?", a: "Convergente ($\\alpha = \\frac{1}{2} < 1$), elle vaut $2$." },
      { q: "Valeur de $\\int_0^{+\\infty} e^{-\\lambda t}\\,dt$ pour $\\lambda > 0$ ?", a: "$\\dfrac{1}{\\lambda}$." }
    ]
  },

  "veto-06": {
    title: "VB-06 : Équations différentielles",
    domain: "Analyse",
    objectives: [
      "Résoudre une équation linéaire du premier ordre $y' + a(x)y = b(x)$ avec une condition initiale.",
      "Résoudre une équation linéaire du second ordre à coefficients constants.",
      "Étudier une équation autonome $y' = f(y)$ : points d'équilibre, monotonie et comportement des solutions.",
      "Utiliser les modèles de Malthus et de Verhulst en dynamique des populations."
    ],
    keyPoints: [
      {
        title: "1. Équations linéaires du premier ordre",
        content: "Soit $(E) : y' + a(x)y = b(x)$ avec $a$ et $b$ continues sur un intervalle $I$, et $A$ une primitive de $a$ sur $I$.\n• Les solutions de l'équation homogène $y' + a(x)y = 0$ sont les fonctions $x \\mapsto \\lambda e^{-A(x)}$, $\\lambda \\in \\mathbb{R}$.\n• **Structure** : les solutions de $(E)$ sont les $y_p + \\lambda e^{-A}$, où $y_p$ est une solution particulière.\n• **Variation de la constante** : on cherche $y_p = \\lambda(x)e^{-A(x)}$ ; on obtient $\\lambda'(x) = b(x)e^{A(x)}$.\n• **Problème de Cauchy** : pour $x_0 \\in I$ et $y_0 \\in \\mathbb{R}$, il existe une unique solution vérifiant $y(x_0) = y_0$.\n*Cas constant* : $y' + ay = b$ ($a \\neq 0$) a pour solutions $x \\mapsto \\frac{b}{a} + \\lambda e^{-ax}$."
      },
      {
        title: "2. Équations linéaires du second ordre à coefficients constants",
        content: "Soit $y'' + ay' + by = c$ avec $a, b, c$ réels, d'équation caractéristique $r^{2} + ar + b = 0$ de discriminant $\\Delta$.\nSolutions de l'équation homogène :\n• $\\Delta > 0$, racines $r_1 \\neq r_2$ : $y = \\lambda e^{r_1x} + \\mu e^{r_2x}$ ;\n• $\\Delta = 0$, racine double $r$ : $y = (\\lambda + \\mu x)e^{rx}$ ;\n• $\\Delta < 0$, racines $\\alpha \\pm i\\beta$ : $y = e^{\\alpha x}(\\lambda\\cos(\\beta x) + \\mu\\sin(\\beta x))$.\nSi $b \\neq 0$, la constante $\\frac{c}{b}$ est une solution particulière. Pour tous $x_0$, $y_0$, $y_1$, il existe une unique solution telle que $y(x_0) = y_0$ et $y'(x_0) = y_1$."
      },
      {
        title: "3. Équations autonomes d'ordre 1",
        content: "Soit $y' = f(y)$ avec $f$ de classe $C^{1}$ sur un intervalle $J$. On admet que pour toute condition initiale $y(t_0) = y_0 \\in J$, il existe une unique solution maximale.\n• Un **point d'équilibre** est un réel $y^{*}$ tel que $f(y^{*}) = 0$ ; la fonction constante égale à $y^{*}$ est solution.\n• Par unicité, deux trajectoires distinctes ne se croisent pas : une solution qui part entre deux équilibres consécutifs y reste, et $f(y(t))$ garde un signe constant, donc la solution est **monotone**.\n• **Stabilité** : si $f'(y^{*}) < 0$, l'équilibre est stable (les solutions voisines s'en rapprochent) ; si $f'(y^{*}) > 0$, il est instable."
      },
      {
        title: "4. Modèle de Malthus",
        content: "Si le taux de croissance par individu est constant égal à $r$, l'effectif vérifie $N'(t) = rN(t)$, d'où $N(t) = N_0e^{rt}$.\nSi $r > 0$, le temps de doublement est $T = \\dfrac{\\ln 2}{r}$ ; si $r < 0$ (décroissance, élimination d'une substance), la demi-vie est $\\dfrac{\\ln 2}{|r|}$.\nCe modèle n'est réaliste que sur une période courte : il ne tient pas compte de la limitation des ressources."
      },
      {
        title: "5. Modèle logistique de Verhulst",
        content: "Avec un taux de croissance $r > 0$ et une capacité d'accueil $K > 0$ :\n$$N'(t) = rN(t)\\left(1 - \\frac{N(t)}{K}\\right)$$\n• Équilibres : $0$ (instable, car $f'(0) = r > 0$) et $K$ (stable, car $f'(K) = -r < 0$).\n• Pour $N_0 \\in ]0 ; K[$, la solution est croissante et tend vers $K$ ; pour $N_0 > K$, elle décroît vers $K$.\n• Solution explicite pour $N_0 > 0$ (en posant $z = \\frac{1}{N}$, qui vérifie l'équation linéaire $z' = -rz + \\frac{r}{K}$) :\n$$N(t) = \\frac{K}{1 + \\left(\\frac{K}{N_0} - 1\\right)e^{-rt}}$$"
      }
    ],
    methods: [
      {
        title: "Méthode : Résoudre une équation du premier ordre à coefficient variable",
        example: "Résoudre sur $\\mathbb{R}$ le problème $y' + 2xy = 2x$, $y(0) = 0$.",
        steps: [
          "**Étape 1 (Homogène)** : $a(x) = 2x$ a pour primitive $A(x) = x^{2}$, donc les solutions homogènes sont $x \\mapsto \\lambda e^{-x^{2}}$.",
          "**Étape 2 (Solution particulière)** : la constante $y_p = 1$ convient car $0 + 2x \\times 1 = 2x$ ; les solutions sont $y(x) = 1 + \\lambda e^{-x^{2}}$.",
          "**Étape 3 (Condition initiale)** : $y(0) = 1 + \\lambda = 0$ donne $\\lambda = -1$, d'où l'unique solution $y(x) = 1 - e^{-x^{2}}$."
        ]
      },
      {
        title: "Méthode : Résoudre une équation du second ordre avec conditions initiales",
        example: "Résoudre $y'' - 3y' + 2y = 4$ avec $y(0) = 0$ et $y'(0) = 1$.",
        steps: [
          "**Étape 1 (Homogène)** : $r^{2} - 3r + 2 = 0$ a pour racines $1$ et $2$ ; les solutions homogènes sont $\\lambda e^{x} + \\mu e^{2x}$.",
          "**Étape 2 (Particulière)** : la constante $\\frac{4}{2} = 2$ est solution, donc $y(x) = \\lambda e^{x} + \\mu e^{2x} + 2$.",
          "**Étape 3 (Conditions initiales)** : $\\lambda + \\mu + 2 = 0$ et $\\lambda + 2\\mu = 1$, d'où $\\mu = 3$, $\\lambda = -5$ et $y(x) = -5e^{x} + 3e^{2x} + 2$."
        ]
      },
      {
        title: "Méthode : Étudier qualitativement une équation autonome",
        example: "Étudier les solutions de $y' = y(2 - y)$ telles que $y(0) = y_0 \\in ]0 ; 2[$.",
        steps: [
          "**Étape 1 (Équilibres)** : $f(y) = y(2 - y)$ s'annule en $0$ et $2$ ; $f'(y) = 2 - 2y$, donc $f'(0) = 2 > 0$ ($0$ instable) et $f'(2) = -2 < 0$ ($2$ stable).",
          "**Étape 2 (Monotonie)** : par unicité, la solution ne peut rejoindre les solutions constantes $0$ et $2$ ; elle reste dans $]0 ; 2[$, où $f > 0$, donc elle est strictement croissante.",
          "**Étape 3 (Limite)** : croissante et majorée par $2$, elle admet une limite finie $\\ell \\in ]0 ; 2]$, qui est un équilibre ; donc $\\ell = 2$."
        ]
      },
      {
        title: "Méthode : Modéliser une perfusion",
        example: "Une substance est perfusée à débit constant ; sa concentration vérifie $C'(t) = -0{,}5C(t) + 2$ (en mg/L et en heures), avec $C(0) = 0$. Déterminer $C(t)$ et la concentration d'équilibre.",
        steps: [
          "**Étape 1 (Forme générale)** : l'équation s'écrit $C' + 0{,}5C = 2$ ; ses solutions sont $C(t) = \\frac{2}{0{,}5} + \\lambda e^{-0{,}5t} = 4 + \\lambda e^{-0{,}5t}$.",
          "**Étape 2 (Condition initiale)** : $C(0) = 4 + \\lambda = 0$, donc $C(t) = 4(1 - e^{-0{,}5t})$.",
          "**Étape 3 (Interpréter)** : $C(t) \\to 4$ quand $t \\to +\\infty$ : la concentration se stabilise à 4 mg/L."
        ]
      }
    ],
    traps: [
      "⚠️ Signe de l'exponentielle : $y' + a y = 0$ donne $e^{-ax}$, alors que $y' = a y$ donne $e^{ax}$.",
      "⚠️ Les conditions initiales s'appliquent à la solution générale complète (homogène + particulière), jamais à la seule solution homogène.",
      "⚠️ Pour $\\Delta < 0$, les fonctions trigonométriques portent sur la partie imaginaire $\\beta$ des racines, l'exponentielle sur la partie réelle $\\alpha$.",
      "⚠️ Une solution non constante d'une équation autonome ne peut pas atteindre un équilibre en un temps fini : elle s'en approche seulement."
    ],
    flashcards: [
      { q: "Solutions de $y' + ay = 0$ ($a$ constante) ?", a: "$x \\mapsto \\lambda e^{-ax}$, $\\lambda \\in \\mathbb{R}$." },
      { q: "Solutions de $y'' + 4y = 0$ ?", a: "$x \\mapsto \\lambda\\cos(2x) + \\mu\\sin(2x)$." },
      { q: "Solutions de $y'' - 2y' + y = 0$ ?", a: "$x \\mapsto (\\lambda + \\mu x)e^{x}$ (racine double $1$)." },
      { q: "Équilibres du modèle logistique et leur stabilité ?", a: "$0$ instable et $K$ stable." },
      { q: "Temps de doublement dans le modèle $N' = rN$ ($r > 0$) ?", a: "$\\dfrac{\\ln 2}{r}$." }
    ]
  },

  "veto-07": {
    title: "VB-07 : Fonctions de deux variables réelles",
    domain: "Analyse",
    objectives: [
      "Représenter une fonction de deux variables par ses lignes de niveau.",
      "Calculer des dérivées partielles d'ordre 1 et 2 et un gradient.",
      "Déterminer les points critiques et étudier la nature d'un extremum.",
      "Interpréter les dérivées partielles d'un modèle comme des sensibilités."
    ],
    keyPoints: [
      {
        title: "1. Fonctions de deux variables, lignes de niveau",
        content: "On munit $\\mathbb{R}^{2}$ de la norme euclidienne $\\|(x, y)\\| = \\sqrt{x^{2} + y^{2}}$. Une partie $U$ est **ouverte** si autour de chacun de ses points elle contient un disque ouvert ; on travaille sur des ouverts (par exemple $\\mathbb{R}^{2}$ ou $]0 ; +\\infty[^{2}$).\nLe graphe de $f : U \\to \\mathbb{R}$ est la surface d'équation $z = f(x, y)$. La **ligne de niveau** $k$ est l'ensemble $\\{(x, y) \\in U : f(x, y) = k\\}$ : c'est la « courbe d'altitude $k$ » d'une carte topographique."
      },
      {
        title: "2. Continuité",
        content: "$f$ est continue en $(a, b) \\in U$ si $f(x, y) \\to f(a, b)$ quand $\\|(x, y) - (a, b)\\| \\to 0$.\nLes fonctions polynomiales en $x$ et $y$ sont continues sur $\\mathbb{R}^{2}$ ; sommes, produits, quotients (de dénominateur non nul) et composées de fonctions continues sont continus.\nPour montrer une discontinuité en $(0, 0)$, on exhibe deux chemins donnant des limites différentes : $\\frac{xy}{x^{2} + y^{2}}$ vaut $0$ sur l'axe $y = 0$ et $\\frac{1}{2}$ sur la droite $y = x$."
      },
      {
        title: "3. Dérivées partielles d'ordre 1 et gradient",
        content: "La dérivée partielle de $f$ par rapport à $x$ en $(a, b)$ est la dérivée en $a$ de la fonction d'une variable $x \\mapsto f(x, b)$ :\n$$\\partial_1 f(a, b) = \\frac{\\partial f}{\\partial x}(a, b) = \\lim_{h \\to 0} \\frac{f(a + h, b) - f(a, b)}{h}$$\n$f$ est de classe $C^{1}$ sur $U$ si ses deux dérivées partielles existent et sont continues sur $U$. Le **gradient** est $\\nabla f(a, b) = (\\partial_1 f(a, b), \\partial_2 f(a, b))$.\nPour $f$ de classe $C^{1}$ : $f(a + h, b + k) = f(a, b) + h\\,\\partial_1 f(a, b) + k\\,\\partial_2 f(a, b) + o(\\|(h, k)\\|)$. Le gradient est orthogonal aux lignes de niveau et indique la direction de plus forte croissance."
      },
      {
        title: "4. Dérivées partielles d'ordre 2",
        content: "Si les dérivées partielles de $\\partial_1 f$ et $\\partial_2 f$ existent, on obtient quatre dérivées d'ordre 2 : $\\partial_{1,1}^{2} f = \\frac{\\partial^{2} f}{\\partial x^{2}}$, $\\partial_{2,2}^{2} f$, et les dérivées croisées $\\partial_{1,2}^{2} f$ et $\\partial_{2,1}^{2} f$.\n**Théorème de Schwarz** : si $f$ est de classe $C^{2}$ sur $U$ (dérivées d'ordre 2 continues), les dérivées croisées sont égales : $\\frac{\\partial^{2} f}{\\partial x \\partial y} = \\frac{\\partial^{2} f}{\\partial y \\partial x}$."
      },
      {
        title: "5. Points critiques et extremums",
        content: "**Condition nécessaire** : si $f$ est de classe $C^{1}$ sur l'ouvert $U$ et admet un extremum local en $(a, b) \\in U$, alors $\\nabla f(a, b) = (0, 0)$ : $(a, b)$ est un **point critique**.\nLa réciproque est fausse : $f(x, y) = x^{2} - y^{2}$ a un point critique en $(0, 0)$, mais $f(h, 0) > 0$ et $f(0, k) < 0$ : c'est un **point col** (ou point selle).\nPour conclure en un point critique, on étudie le signe de $f(a + h, b + k) - f(a, b)$ pour $(h, k)$ petit : toujours positif (minimum local), toujours négatif (maximum local), ou de signe variable (pas d'extremum). L'extremum est **global** si l'inégalité vaut pour tout point de $U$."
      }
    ],
    methods: [
      {
        title: "Méthode : Calculer dérivées partielles et gradient",
        example: "Calculer le gradient de $f(x, y) = x^{2}y + e^{xy}$, puis vérifier le théorème de Schwarz.",
        steps: [
          "**Étape 1 (Par rapport à $x$, $y$ fixé)** : $\\partial_1 f(x, y) = 2xy + ye^{xy}$.",
          "**Étape 2 (Par rapport à $y$, $x$ fixé)** : $\\partial_2 f(x, y) = x^{2} + xe^{xy}$, d'où $\\nabla f(x, y) = (2xy + ye^{xy},\\ x^{2} + xe^{xy})$.",
          "**Étape 3 (Dérivées croisées)** : $\\partial_2(\\partial_1 f) = 2x + e^{xy} + xye^{xy}$ et $\\partial_1(\\partial_2 f) = 2x + e^{xy} + xye^{xy}$ : elles coïncident, comme l'assure le théorème de Schwarz ($f$ est de classe $C^{2}$)."
        ]
      },
      {
        title: "Méthode : Chercher les extremums d'une fonction",
        example: "Étudier les extremums de $f(x, y) = x^{3} - 3x + y^{2}$ sur $\\mathbb{R}^{2}$.",
        steps: [
          "**Étape 1 (Points critiques)** : $\\nabla f(x, y) = (3x^{2} - 3,\\ 2y) = (0, 0) \\iff x = \\pm 1$ et $y = 0$ : deux points critiques $(1, 0)$ et $(-1, 0)$.",
          "**Étape 2 (Point $(1, 0)$)** : $f(1 + h, k) - f(1, 0) = 3h^{2} + h^{3} + k^{2} = h^{2}(3 + h) + k^{2} \\geq 0$ pour $h > -3$ : minimum local, égal à $-2$ ; il n'est pas global car $f(x, 0) \\to -\\infty$ quand $x \\to -\\infty$.",
          "**Étape 3 (Point $(-1, 0)$)** : $f(-1 + h, k) - f(-1, 0) = -3h^{2} + h^{3} + k^{2}$ ; avec $k = 0$ et $h$ petit non nul, c'est $h^{2}(h - 3) < 0$, avec $h = 0$ et $k \\neq 0$, c'est $k^{2} > 0$ : point col, pas d'extremum."
        ]
      },
      {
        title: "Méthode : Interpréter une dérivée partielle comme une sensibilité",
        example: "L'indice $I(m, t) = \\dfrac{m}{t^{2}}$ ($m$ en kg, $t$ en m) vaut environ $22{,}9$ pour $m = 70$ et $t = 1{,}75$. Estimer l'effet d'une erreur de $0{,}01$ m sur $t$.",
        steps: [
          "**Étape 1 (Dérivée partielle)** : $\\partial_2 I(m, t) = -\\dfrac{2m}{t^{3}}$, donc $\\partial_2 I(70 ; 1{,}75) = -\\dfrac{140}{1{,}75^{3}} \\approx -26{,}1$.",
          "**Étape 2 (Approximation au premier ordre)** : $I(m, t + k) \\approx I(m, t) + k\\,\\partial_2 I(m, t)$.",
          "**Étape 3 (Interpréter)** : avec $k = 0{,}01$, l'indice baisse d'environ $0{,}26$ : une petite erreur sur la taille a un effet notable, car $t$ intervient au carré."
        ]
      }
    ],
    traps: [
      "⚠️ Pour dériver par rapport à $x$, $y$ est une constante : $\\frac{\\partial}{\\partial x}(x^{2}y) = 2xy$ et non $2xy + x^{2}$.",
      "⚠️ Un point critique n'est pas forcément un extremum (point col), et la condition $\\nabla f = 0$ n'est nécessaire que sur un ouvert : sur un bord, un extremum peut avoir un gradient non nul.",
      "⚠️ Étudier $f$ le long des seuls axes ne suffit pas à prouver un extremum : il faut contrôler $f(a + h, b + k) - f(a, b)$ pour tous les $(h, k)$ petits.",
      "⚠️ L'existence des dérivées partielles en un point n'entraîne pas la continuité en ce point : c'est le caractère $C^{1}$ qui la garantit."
    ],
    flashcards: [
      { q: "Définition d'un point critique de $f$ ?", a: "Un point où $\\nabla f = (0, 0)$." },
      { q: "Énoncé du théorème de Schwarz ?", a: "Si $f$ est de classe $C^{2}$, $\\partial_{1,2}^{2} f = \\partial_{2,1}^{2} f$." },
      { q: "Gradient de $f(x, y) = x^{2} + 3xy$ ?", a: "$\\nabla f(x, y) = (2x + 3y,\\ 3x)$." },
      { q: "Nature du point $(0, 0)$ pour $f(x, y) = x^{2} - y^{2}$ ?", a: "Point col : pas d'extremum." },
      { q: "Direction indiquée par le gradient ?", a: "Celle de plus forte croissance de $f$, orthogonale aux lignes de niveau." }
    ]
  },

  "veto-08": {
    title: "VB-08 : Systèmes linéaires et calcul matriciel",
    domain: "Algèbre linéaire et géométrie",
    objectives: [
      "Résoudre un système linéaire par l'algorithme du pivot de Gauss et décrire l'ensemble des solutions.",
      "Calculer des produits et des puissances de matrices.",
      "Déterminer si une matrice est inversible et calculer son inverse.",
      "Modéliser une évolution par une matrice de transition."
    ],
    keyPoints: [
      {
        title: "1. Systèmes linéaires et pivot de Gauss",
        content: "Les opérations élémentaires sur les lignes, $L_i \\leftrightarrow L_j$, $L_i \\leftarrow \\alpha L_i$ ($\\alpha \\neq 0$) et $L_i \\leftarrow L_i + \\beta L_j$ ($j \\neq i$), transforment un système en un système **équivalent**.\nL'algorithme du pivot conduit à un système **échelonné** ; le nombre de pivots est le **rang** $r$ du système. Pour $p$ inconnues :\n• une équation du type $0 = c$ avec $c \\neq 0$ : aucune solution ;\n• sinon, si $r = p$ : solution unique ; si $r < p$ : infinité de solutions, paramétrées par les $p - r$ inconnues secondaires.\nUn système homogène admet toujours la solution nulle."
      },
      {
        title: "2. Opérations sur les matrices",
        content: "Pour $A \\in \\mathcal{M}_{n,p}(\\mathbb{K})$ et $B \\in \\mathcal{M}_{p,q}(\\mathbb{K})$, le produit $AB \\in \\mathcal{M}_{n,q}(\\mathbb{K})$ est défini par\n$$(AB)_{ij} = \\sum_{k=1}^{p} a_{ik}b_{kj}$$\nLe produit est associatif et distributif, mais **non commutatif** en général, et $AB = 0$ n'entraîne pas $A = 0$ ou $B = 0$.\nTransposée : $(A^{T})_{ij} = a_{ji}$ et $(AB)^{T} = B^{T}A^{T}$.\nÉcriture matricielle : un système de $n$ équations à $p$ inconnues s'écrit $AX = B$ avec $A \\in \\mathcal{M}_{n,p}(\\mathbb{K})$, $X$ et $B$ des colonnes."
      },
      {
        title: "3. Puissances de matrices",
        content: "Pour $A$ carrée : $A^{0} = I_n$ et $A^{k+1} = A^{k}A$.\n• **Diagonale** : $\\text{diag}(d_1, \\ldots, d_n)^{k} = \\text{diag}(d_1^{k}, \\ldots, d_n^{k})$.\n• **Binôme** : si $AB = BA$, $(A + B)^{k} = \\sum_{j=0}^{k} \\binom{k}{j}A^{j}B^{k-j}$. Très efficace avec $A = \\lambda I_n + N$ où $N$ est nilpotente ($N^{m} = 0$), car $I_n$ commute avec toute matrice.\n• **Récurrence** : on conjecture $A^{k}$ sur les premières puissances, puis on prouve la formule par récurrence."
      },
      {
        title: "4. Matrices inversibles",
        content: "$A \\in \\mathcal{M}_n(\\mathbb{K})$ est inversible s'il existe $B$ telle que $AB = BA = I_n$ ; il suffit en fait que $AB = I_n$. On note $B = A^{-1}$, et $(AB)^{-1} = B^{-1}A^{-1}$, $(A^{T})^{-1} = (A^{-1})^{T}$.\nÉquivalences : $A$ inversible $\\iff$ pour tout $Y$, le système $AX = Y$ a une unique solution $\\iff$ $AX = 0$ n'a que la solution nulle $\\iff$ $A$ est de rang $n$.\nEn taille 2 : $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ est inversible si et seulement si $ad - bc \\neq 0$, et son inverse est $\\dfrac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
      },
      {
        title: "5. Matrices de transition",
        content: "On observe un système à $m$ états (sain, malade, immunisé…). On note $p_{ij}$ la probabilité de passer de l'état $i$ à l'état $j$ en une étape ; la matrice $P = (p_{ij})$ a des coefficients positifs et la somme de chaque ligne vaut $1$.\nSi $\\pi_n$ est la ligne des probabilités d'être dans chaque état à l'étape $n$, alors $\\pi_{n+1} = \\pi_nP$, donc $\\pi_n = \\pi_0P^{n}$.\nUne **loi stationnaire** est une ligne $\\pi$ de probabilités telle que $\\pi = \\pi P$.\nDe même, un vecteur d'effectifs par classes d'âge peut évoluer selon $U_{n+1} = LU_n$, d'où $U_n = L^{n}U_0$."
      }
    ],
    methods: [
      {
        title: "Méthode : Résoudre un système par le pivot de Gauss",
        example: "Résoudre $\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$",
        steps: [
          "**Étape 1 (Éliminer $x$)** : $L_2 \\leftarrow L_2 - 2L_1$ et $L_3 \\leftarrow L_3 - L_1$ donnent $-3y - z = -9$ et $y - 2z = -4$.",
          "**Étape 2 (Éliminer $y$)** : $L_3 \\leftarrow 3L_3 + L_2$ donne $-7z = -21$, donc $z = 3$ ; le système échelonné a 3 pivots.",
          "**Étape 3 (Remonter)** : $y = -4 + 2z = 2$ puis $x = 6 - y - z = 1$. Solution unique : $(1, 2, 3)$, que l'on vérifie dans les trois équations."
        ]
      },
      {
        title: "Méthode : Calculer l'inverse en résolvant $AX = Y$",
        example: "Montrer que $A = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$ est inversible et calculer $A^{-1}$.",
        steps: [
          "**Étape 1 (Système)** : $AX = Y$ s'écrit $x + y = a$, $y + z = b$, $z = c$.",
          "**Étape 2 (Résolution)** : $z = c$, $y = b - c$, $x = a - b + c$ : solution unique pour tout $Y$, donc $A$ est inversible.",
          "**Étape 3 (Lecture)** : $X = A^{-1}Y$ donne $A^{-1} = \\begin{pmatrix} 1 & -1 & 1 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 1 \\end{pmatrix}$ ; on contrôle que $AA^{-1} = I_3$."
        ]
      },
      {
        title: "Méthode : Calculer une puissance avec le binôme",
        example: "Calculer $A^{n}$ pour $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ et $n \\geq 1$.",
        steps: [
          "**Étape 1 (Décomposer)** : $A = 2I_2 + N$ avec $N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ et $N^{2} = 0$ ; $2I_2$ et $N$ commutent.",
          "**Étape 2 (Binôme)** : $A^{n} = \\sum_{k=0}^{n} \\binom{n}{k}N^{k}(2I_2)^{n-k} = 2^{n}I_2 + n2^{n-1}N$, les termes $k \\geq 2$ étant nuls.",
          "**Étape 3 (Conclure)** : $A^{n} = \\begin{pmatrix} 2^{n} & n2^{n-1} \\\\ 0 & 2^{n} \\end{pmatrix}$ ; pour $n = 1$ on retrouve bien $A$."
        ]
      },
      {
        title: "Méthode : Exploiter une matrice de transition",
        example: "Un animal est chaque semaine sain (S) ou malade (M), avec $P = \\begin{pmatrix} 0{,}9 & 0{,}1 \\\\ 0{,}4 & 0{,}6 \\end{pmatrix}$ et $\\pi_0 = (1 \\ \\ 0)$. Calculer $\\pi_2$ et la loi stationnaire.",
        steps: [
          "**Étape 1 (Itérer)** : $\\pi_1 = \\pi_0P = (0{,}9 \\ \\ 0{,}1)$ puis $\\pi_2 = \\pi_1P = (0{,}81 + 0{,}04 \\ \\ 0{,}09 + 0{,}06) = (0{,}85 \\ \\ 0{,}15)$.",
          "**Étape 2 (Système stationnaire)** : $\\pi = (a \\ \\ b)$ avec $\\pi P = \\pi$ donne $0{,}9a + 0{,}4b = a$, soit $a = 4b$, et $a + b = 1$.",
          "**Étape 3 (Conclure)** : $\\pi = (0{,}8 \\ \\ 0{,}2)$ : à long terme, l'animal est malade une semaine sur cinq en moyenne."
        ]
      }
    ],
    traps: [
      "⚠️ $AB \\neq BA$ en général, donc $(A + B)^{2} = A^{2} + AB + BA + B^{2}$, qui ne vaut $A^{2} + 2AB + B^{2}$ que si $A$ et $B$ commutent.",
      "⚠️ L'opération $L_i \\leftarrow 0 \\times L_i + L_j$ n'est pas élémentaire : elle fait perdre une équation. Le coefficient devant la ligne modifiée doit être non nul.",
      "⚠️ Dans un système à paramètre, diviser par une expression comme $m - 1$ impose de traiter à part le cas $m = 1$.",
      "⚠️ Seules les matrices carrées peuvent être inversibles, et l'inverse d'un produit inverse l'ordre : $(AB)^{-1} = B^{-1}A^{-1}$."
    ],
    flashcards: [
      { q: "Inverse de $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ si $ad - bc \\neq 0$ ?", a: "$\\dfrac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$." },
      { q: "Transposée d'un produit $AB$ ?", a: "$(AB)^{T} = B^{T}A^{T}$." },
      { q: "Nombre de solutions d'un système compatible de rang $r < p$ ($p$ inconnues) ?", a: "Une infinité, paramétrée par $p - r$ inconnues secondaires." },
      { q: "Condition pour appliquer la formule du binôme à $(A + B)^{n}$ ?", a: "$AB = BA$." },
      { q: "Évolution des lois avec une matrice de transition $P$ ?", a: "$\\pi_{n+1} = \\pi_nP$, donc $\\pi_n = \\pi_0P^{n}$." }
    ]
  },

  "veto-09": {
    title: "VB-09 : Espaces vectoriels, applications linéaires et diagonalisation",
    domain: "Algèbre linéaire et géométrie",
    objectives: [
      "Montrer qu'une partie est un sous-espace vectoriel de $\\mathbb{K}^{n}$ et en donner une base.",
      "Déterminer si une famille est libre, génératrice, ou une base.",
      "Déterminer le noyau, l'image et le rang d'une application linéaire.",
      "Calculer valeurs propres et vecteurs propres, diagonaliser une matrice et en déduire ses puissances."
    ],
    keyPoints: [
      {
        title: "1. Sous-espaces vectoriels de $\\mathbb{K}^{n}$",
        content: "Une partie $F$ de $\\mathbb{K}^{n}$ ($\\mathbb{K} = \\mathbb{R}$ ou $\\mathbb{C}$) est un sous-espace vectoriel si $0 \\in F$ et si, pour tous $u, v \\in F$ et $\\lambda, \\mu \\in \\mathbb{K}$, $\\lambda u + \\mu v \\in F$.\nExemples : l'ensemble des solutions d'un système linéaire **homogène** ; $\\text{Vect}(u_1, \\ldots, u_p)$, ensemble des combinaisons linéaires des $u_i$, plus petit sous-espace les contenant.\nL'intersection de deux sous-espaces est un sous-espace ; leur réunion ne l'est pas en général."
      },
      {
        title: "2. Familles libres, génératrices, bases, dimension",
        content: "• $(u_1, \\ldots, u_p)$ est **libre** si $\\lambda_1u_1 + \\cdots + \\lambda_pu_p = 0$ implique $\\lambda_1 = \\cdots = \\lambda_p = 0$.\n• Elle est **génératrice** de $F$ si $F = \\text{Vect}(u_1, \\ldots, u_p)$ ; c'est une **base** si elle est libre et génératrice : tout vecteur de $F$ s'écrit alors de façon unique comme combinaison des $u_i$.\n• Toutes les bases de $F$ ont le même nombre d'éléments, la **dimension** de $F$ ; $\\dim \\mathbb{K}^{n} = n$.\n• Si $\\dim F = d$ : une famille libre a au plus $d$ vecteurs ; une famille libre **ou** génératrice de $d$ vecteurs de $F$ est une base. Si $G \\subset F$ et $\\dim G = \\dim F$, alors $G = F$.\n• Le **rang** d'une famille est la dimension de l'espace qu'elle engendre."
      },
      {
        title: "3. Applications linéaires, noyau, image, rang",
        content: "$f : \\mathbb{K}^{p} \\to \\mathbb{K}^{n}$ est linéaire si $f(\\lambda u + \\mu v) = \\lambda f(u) + \\mu f(v)$. Elle est représentée par une matrice $A \\in \\mathcal{M}_{n,p}(\\mathbb{K})$ dont la colonne $j$ contient les coordonnées de $f(e_j)$.\n• $\\text{Ker} f = \\{u : f(u) = 0\\}$ et $\\text{Im} f = \\text{Vect}(f(e_1), \\ldots, f(e_p))$ sont des sous-espaces ; $f$ est injective si et seulement si $\\text{Ker} f = \\{0\\}$.\n• **Théorème du rang** : $\\dim \\text{Ker} f + \\text{rg} f = p$, où $\\text{rg} f = \\dim \\text{Im} f$.\n• Si $n = p$ : $f$ injective $\\iff$ $f$ surjective $\\iff$ $f$ bijective $\\iff$ $A$ inversible."
      },
      {
        title: "4. Changement de base",
        content: "Si $\\mathcal{B}$ et $\\mathcal{B}'$ sont deux bases de $\\mathbb{K}^{n}$, la matrice de passage $P$ de $\\mathcal{B}$ à $\\mathcal{B}'$ a pour colonnes les coordonnées des vecteurs de $\\mathcal{B}'$ dans $\\mathcal{B}$ ; elle est inversible.\nCoordonnées : $X = PX'$. Endomorphisme : si $A$ est la matrice de $f$ dans $\\mathcal{B}$ et $A'$ celle dans $\\mathcal{B}'$, alors\n$$A' = P^{-1}AP$$\nOn dit que $A$ et $A'$ sont **semblables** : elles ont même rang et mêmes valeurs propres."
      },
      {
        title: "5. Valeurs propres et vecteurs propres",
        content: "Soit $A \\in \\mathcal{M}_n(\\mathbb{K})$. Le scalaire $\\lambda$ est **valeur propre** de $A$ s'il existe une colonne $X \\neq 0$ telle que $AX = \\lambda X$ ; $X$ est un vecteur propre associé.\n$\\lambda$ est valeur propre $\\iff$ $A - \\lambda I_n$ n'est pas inversible $\\iff$ $\\text{rg}(A - \\lambda I_n) < n$. Le **sous-espace propre** est $E_\\lambda = \\text{Ker}(A - \\lambda I_n)$.\nPropriétés : des vecteurs propres associés à des valeurs propres distinctes forment une famille libre ; une matrice triangulaire a pour valeurs propres ses coefficients diagonaux ; une matrice de taille $n$ a au plus $n$ valeurs propres."
      },
      {
        title: "6. Diagonalisation",
        content: "$A$ est **diagonalisable** s'il existe $P$ inversible et $D$ diagonale telles que $A = PDP^{-1}$ : les colonnes de $P$ sont des vecteurs propres formant une base, et les coefficients de $D$ les valeurs propres associées, dans le même ordre.\n• $A$ est diagonalisable si et seulement si la somme des dimensions de ses sous-espaces propres vaut $n$.\n• **Condition suffisante** : si $A$ a $n$ valeurs propres distinctes, elle est diagonalisable.\n• **Puissances** : $A^{k} = PD^{k}P^{-1}$ pour tout $k \\in \\mathbb{N}$.\nContre-exemple : $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ a pour seule valeur propre $1$ et $\\dim E_1 = 1 < 2$ : elle n'est pas diagonalisable."
      }
    ],
    methods: [
      {
        title: "Méthode : Montrer qu'une famille est une base",
        example: "Montrer que $u_1 = (1, 1, 0)$, $u_2 = (0, 1, 1)$, $u_3 = (1, 0, 1)$ forment une base de $\\mathbb{R}^{3}$.",
        steps: [
          "**Étape 1 (Liberté)** : $au_1 + bu_2 + cu_3 = 0$ donne $a + c = 0$, $a + b = 0$, $b + c = 0$.",
          "**Étape 2 (Résolution)** : $c = -a$ et $b = -a$, puis $b + c = -2a = 0$, donc $a = b = c = 0$ : la famille est libre.",
          "**Étape 3 (Dimension)** : c'est une famille libre de 3 vecteurs dans $\\mathbb{R}^{3}$, de dimension 3 : c'est une base."
        ]
      },
      {
        title: "Méthode : Déterminer noyau, image et rang",
        example: "Soit $f : \\mathbb{R}^{3} \\to \\mathbb{R}^{3}$, $f(x, y, z) = (x + y,\\ y + z,\\ x - z)$. Déterminer $\\text{Ker} f$, $\\text{rg} f$ et une équation de $\\text{Im} f$.",
        steps: [
          "**Étape 1 (Noyau)** : $x + y = 0$, $y + z = 0$, $x - z = 0$ donne $x = -y$ et $z = -y$ (la troisième équation est alors vérifiée) ; $\\text{Ker} f = \\text{Vect}((1, -1, 1))$, de dimension 1.",
          "**Étape 2 (Rang)** : par le théorème du rang, $\\text{rg} f = 3 - 1 = 2$ ; $\\text{Im} f$ est engendrée par $f(e_1) = (1, 0, 1)$ et $f(e_2) = (1, 1, 0)$, qui sont non colinéaires, donc en forment une base.",
          "**Étape 3 (Équation)** : $a(1, 0, 1) + b(1, 1, 0) = (a + b,\\ b,\\ a)$ : un vecteur $(X, Y, Z)$ est dans l'image si et seulement si $X = Y + Z$, soit $X - Y - Z = 0$."
        ]
      },
      {
        title: "Méthode : Diagonaliser une matrice et calculer ses puissances",
        example: "Diagonaliser $A = \\begin{pmatrix} 4 & -2 \\\\ 1 & 1 \\end{pmatrix}$ et en déduire $A^{n}$.",
        steps: [
          "**Étape 1 (Valeurs propres)** : $A - \\lambda I_2$ n'est pas inversible $\\iff (4 - \\lambda)(1 - \\lambda) + 2 = 0 \\iff \\lambda^{2} - 5\\lambda + 6 = 0 \\iff \\lambda \\in \\{2, 3\\}$ : deux valeurs propres distinctes, $A$ est diagonalisable.",
          "**Étape 2 (Vecteurs propres)** : $E_2$ : $2x - 2y = 0$, donc $E_2 = \\text{Vect}((1, 1))$ ; $E_3$ : $x - 2y = 0$, donc $E_3 = \\text{Vect}((2, 1))$. Ainsi $P = \\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix}$, $D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$ et $P^{-1} = \\begin{pmatrix} -1 & 2 \\\\ 1 & -1 \\end{pmatrix}$.",
          "**Étape 3 (Puissances)** : $A^{n} = PD^{n}P^{-1} = \\begin{pmatrix} 2 \\cdot 3^{n} - 2^{n} & 2^{n+1} - 2 \\cdot 3^{n} \\\\ 3^{n} - 2^{n} & 2^{n+1} - 3^{n} \\end{pmatrix}$ ; pour $n = 1$ on retrouve $A$."
        ]
      }
    ],
    traps: [
      "⚠️ La réunion de deux sous-espaces n'est en général pas un sous-espace : dans $\\mathbb{R}^{2}$, $(1, 0) + (0, 1)$ n'appartient à aucun des deux axes.",
      "⚠️ Un vecteur propre est par définition **non nul** : $0$ vérifie $A0 = \\lambda 0$ pour tout $\\lambda$.",
      "⚠️ Dans $A = PDP^{-1}$, l'ordre des colonnes de $P$ doit correspondre à l'ordre des valeurs propres sur la diagonale de $D$.",
      "⚠️ Une famille de $n$ vecteurs de $\\mathbb{K}^{n}$ n'est une base que si elle est libre : deux vecteurs non nuls de $\\mathbb{R}^{2}$ peuvent être colinéaires."
    ],
    flashcards: [
      { q: "Énoncé du théorème du rang pour $f : \\mathbb{K}^{p} \\to \\mathbb{K}^{n}$ ?", a: "$\\dim \\text{Ker} f + \\text{rg} f = p$." },
      { q: "Caractérisation des valeurs propres de $A$ ?", a: "$\\lambda$ est valeur propre $\\iff A - \\lambda I_n$ n'est pas inversible." },
      { q: "Condition suffisante de diagonalisabilité en taille $n$ ?", a: "Avoir $n$ valeurs propres distinctes." },
      { q: "Formule de changement de base pour un endomorphisme ?", a: "$A' = P^{-1}AP$, $P$ matrice de passage de l'ancienne base vers la nouvelle." },
      { q: "Puissances d'une matrice diagonalisable $A = PDP^{-1}$ ?", a: "$A^{k} = PD^{k}P^{-1}$." },
      { q: "Valeurs propres d'une matrice triangulaire ?", a: "Ses coefficients diagonaux." }
    ]
  },

  "veto-10": {
    title: "VB-10 : Géométrie et produit scalaire",
    domain: "Algèbre linéaire et géométrie",
    objectives: [
      "Utiliser le déterminant pour tester la colinéarité ou la coplanarité.",
      "Déterminer une équation de droite, de cercle ou de plan.",
      "Calculer un produit scalaire, une norme et une projection orthogonale dans $\\mathbb{R}^{n}$.",
      "Utiliser le théorème spectral pour une matrice symétrique réelle."
    ],
    keyPoints: [
      {
        title: "1. Vecteurs et déterminant",
        content: "Dans le plan, pour $\\vec{u}(x, y)$ et $\\vec{v}(x', y')$ : $\\det(\\vec{u}, \\vec{v}) = xy' - x'y$. Les vecteurs sont colinéaires si et seulement si ce déterminant est nul, et $|\\det(\\vec{u}, \\vec{v})|$ est l'aire du parallélogramme qu'ils construisent.\nDans l'espace, trois vecteurs sont coplanaires si et seulement si leur déterminant $3 \\times 3$ est nul ; on le calcule par développement selon une ligne ou une colonne (ou par la règle de Sarrus)."
      },
      {
        title: "2. Droites et cercles du plan",
        content: "• Une droite admet une équation cartésienne $ax + by + c = 0$ avec $(a, b) \\neq (0, 0)$ ; $\\vec{n}(a, b)$ est un vecteur normal et $\\vec{u}(-b, a)$ un vecteur directeur.\n• Représentation paramétrique de la droite passant par $A(x_A, y_A)$ dirigée par $\\vec{u}(\\alpha, \\beta)$ : $x = x_A + t\\alpha$, $y = y_A + t\\beta$, $t \\in \\mathbb{R}$.\n• Distance d'un point $M_0(x_0, y_0)$ à cette droite : $\\dfrac{|ax_0 + by_0 + c|}{\\sqrt{a^{2} + b^{2}}}$.\n• Le cercle de centre $\\Omega(a, b)$ et de rayon $R$ a pour équation $(x - a)^{2} + (y - b)^{2} = R^{2}$."
      },
      {
        title: "3. Droites et plans de l'espace",
        content: "• Un plan admet une équation $ax + by + cz + d = 0$ avec $(a, b, c) \\neq (0, 0, 0)$, où $\\vec{n}(a, b, c)$ est normal au plan. Distance d'un point $M_0$ au plan : $\\dfrac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^{2} + b^{2} + c^{2}}}$.\n• Une droite est décrite par une représentation paramétrique (un point et un vecteur directeur) ou comme intersection de deux plans non parallèles.\n• Deux plans sont parallèles si et seulement si leurs vecteurs normaux sont colinéaires ; ils sont perpendiculaires si leurs vecteurs normaux sont orthogonaux."
      },
      {
        title: "4. Produit scalaire dans $\\mathbb{R}^{n}$",
        content: "Pour $x = (x_1, \\ldots, x_n)$ et $y = (y_1, \\ldots, y_n)$ : $\\langle x, y \\rangle = \\sum_{i=1}^{n} x_iy_i = X^{T}Y$ ; il est bilinéaire, symétrique et $\\langle x, x \\rangle > 0$ si $x \\neq 0$. Norme : $\\|x\\| = \\sqrt{\\langle x, x \\rangle}$.\n• **Cauchy-Schwarz** : $|\\langle x, y \\rangle| \\leq \\|x\\|\\,\\|y\\|$, avec égalité si et seulement si $x$ et $y$ sont colinéaires.\n• **Pythagore** : $\\|x + y\\|^{2} = \\|x\\|^{2} + \\|y\\|^{2} \\iff \\langle x, y \\rangle = 0$.\n• Une famille orthogonale de vecteurs non nuls est libre. L'orthogonal $F^{\\perp}$ d'un sous-espace $F$ est un sous-espace et $\\dim F + \\dim F^{\\perp} = n$."
      },
      {
        title: "5. Projection orthogonale",
        content: "Soit $F$ un sous-espace de $\\mathbb{R}^{n}$ de base **orthonormée** $(e_1, \\ldots, e_p)$. Le projeté orthogonal de $x$ sur $F$ est\n$$p_F(x) = \\sum_{i=1}^{p} \\langle x, e_i \\rangle e_i$$\nC'est l'unique vecteur de $F$ tel que $x - p_F(x) \\in F^{\\perp}$. Il réalise la plus courte distance : pour tout $y \\in F$, $\\|x - y\\| \\geq \\|x - p_F(x)\\|$.\nSur une droite $\\text{Vect}(u)$ : $p(x) = \\dfrac{\\langle x, u \\rangle}{\\|u\\|^{2}}u$. Cette propriété de minimisation est le fondement de la méthode des moindres carrés."
      },
      {
        title: "6. Théorème spectral",
        content: "Une matrice $P \\in \\mathcal{M}_n(\\mathbb{R})$ est **orthogonale** si $P^{T}P = I_n$, c'est-à-dire si ses colonnes forment une base orthonormée ; alors $P^{-1} = P^{T}$.\n**Théorème spectral** : toute matrice **symétrique réelle** $S$ est diagonalisable dans une base orthonormée : il existe $P$ orthogonale et $D$ diagonale réelle telles que $S = PDP^{T}$.\nDe plus, des sous-espaces propres associés à des valeurs propres distinctes sont orthogonaux."
      }
    ],
    methods: [
      {
        title: "Méthode : Déterminer une équation de plan et une distance",
        example: "Déterminer une équation du plan passant par $A(1, 0, 2)$ de vecteur normal $\\vec{n}(2, -1, 3)$, puis sa distance à l'origine.",
        steps: [
          "**Étape 1 (Forme)** : le plan a une équation $2x - y + 3z + d = 0$.",
          "**Étape 2 (Point)** : $A$ appartient au plan, donc $2 - 0 + 6 + d = 0$ et $d = -8$ : $2x - y + 3z - 8 = 0$.",
          "**Étape 3 (Distance)** : $d(O, \\mathcal{P}) = \\dfrac{|-8|}{\\sqrt{4 + 1 + 9}} = \\dfrac{8}{\\sqrt{14}}$."
        ]
      },
      {
        title: "Méthode : Reconnaître un cercle",
        example: "Déterminer l'ensemble des points vérifiant $x^{2} + y^{2} - 4x + 6y - 3 = 0$.",
        steps: [
          "**Étape 1 (Forme canonique)** : $x^{2} - 4x = (x - 2)^{2} - 4$ et $y^{2} + 6y = (y + 3)^{2} - 9$.",
          "**Étape 2 (Regrouper)** : l'équation devient $(x - 2)^{2} + (y + 3)^{2} = 16$.",
          "**Étape 3 (Conclure)** : c'est le cercle de centre $\\Omega(2, -3)$ et de rayon $4$. Si le membre de droite était négatif, l'ensemble serait vide."
        ]
      },
      {
        title: "Méthode : Calculer une projection orthogonale",
        example: "Projeter $x = (1, 2, 3)$ sur la droite $D = \\text{Vect}(u)$, $u = (1, 1, 1)$, puis sur le plan $\\mathcal{P} : x + y + z = 0$.",
        steps: [
          "**Étape 1 (Sur la droite)** : $\\langle x, u \\rangle = 6$ et $\\|u\\|^{2} = 3$, donc $p_D(x) = 2u = (2, 2, 2)$.",
          "**Étape 2 (Sur le plan)** : $\\mathcal{P} = D^{\\perp}$ car $u$ est normal au plan, donc $p_{\\mathcal{P}}(x) = x - p_D(x) = (-1, 0, 1)$ ; contrôle : $-1 + 0 + 1 = 0$.",
          "**Étape 3 (Distance)** : la distance de $x$ au plan est $\\|p_D(x)\\| = 2\\sqrt{3}$, et sa distance à la droite est $\\|(-1, 0, 1)\\| = \\sqrt{2}$."
        ]
      },
      {
        title: "Méthode : Appliquer le théorème spectral",
        example: "Diagonaliser $S = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ dans une base orthonormée.",
        steps: [
          "**Étape 1 (Valeurs propres)** : $(2 - \\lambda)^{2} - 1 = 0 \\iff \\lambda \\in \\{1, 3\\}$ ; $E_3 = \\text{Vect}((1, 1))$ et $E_1 = \\text{Vect}((1, -1))$, orthogonaux comme prévu.",
          "**Étape 2 (Normaliser)** : on divise chaque vecteur par sa norme $\\sqrt{2}$ : $P = \\dfrac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$, qui est orthogonale.",
          "**Étape 3 (Conclure)** : $S = PDP^{T}$ avec $D = \\begin{pmatrix} 3 & 0 \\\\ 0 & 1 \\end{pmatrix}$ ; l'inverse de $P$ s'obtient sans calcul : $P^{-1} = P^{T}$."
        ]
      }
    ],
    traps: [
      "⚠️ Dans $ax + by + c = 0$, $(a, b)$ est un vecteur **normal** à la droite, pas un vecteur directeur.",
      "⚠️ La formule $p_F(x) = \\sum \\langle x, e_i \\rangle e_i$ exige une base **orthonormée** de $F$ ; avec une base quelconque, elle donne un résultat faux.",
      "⚠️ $P^{-1} = P^{T}$ seulement si les colonnes de $P$ sont orthogonales **et** de norme 1 : pensez à normaliser les vecteurs propres.",
      "⚠️ Une équation $x^{2} + y^{2} + \\alpha x + \\beta y + \\gamma = 0$ peut décrire un cercle, un point ou l'ensemble vide : concluez après la forme canonique."
    ],
    flashcards: [
      { q: "Condition de colinéarité de $\\vec{u}(x, y)$ et $\\vec{v}(x', y')$ ?", a: "$xy' - x'y = 0$." },
      { q: "Projeté de $x$ sur $\\text{Vect}(u)$ ?", a: "$\\dfrac{\\langle x, u \\rangle}{\\|u\\|^{2}}u$." },
      { q: "Énoncé de l'inégalité de Cauchy-Schwarz ?", a: "$|\\langle x, y \\rangle| \\leq \\|x\\|\\,\\|y\\|$, avec égalité si et seulement si $x$ et $y$ sont colinéaires." },
      { q: "Énoncé du théorème spectral ?", a: "Toute matrice symétrique réelle s'écrit $PDP^{T}$ avec $P$ orthogonale et $D$ diagonale réelle." },
      { q: "Distance de $M_0$ au plan $ax + by + cz + d = 0$ ?", a: "$\\dfrac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^{2} + b^{2} + c^{2}}}$." }
    ]
  },

  "veto-11": {
    title: "VB-11 : Probabilités et variables aléatoires discrètes",
    domain: "Probabilités et statistique",
    objectives: [
      "Calculer des probabilités avec les probabilités conditionnelles, la formule des probabilités totales et la formule de Bayes.",
      "Reconnaître des événements ou des variables indépendants.",
      "Calculer l'espérance et la variance d'une variable discrète et connaître les lois usuelles.",
      "Étudier un couple de variables discrètes : lois marginales, indépendance, covariance."
    ],
    keyPoints: [
      {
        title: "1. Espace probabilisé",
        content: "Une probabilité sur $(\\Omega, \\mathcal{A})$ vérifie $P(\\Omega) = 1$ et, pour toute suite $(A_n)$ d'événements deux à deux incompatibles, $P\\left(\\bigcup_n A_n\\right) = \\sum_n P(A_n)$.\nConséquences : $P(\\overline{A}) = 1 - P(A)$ ; si $A \\subset B$, $P(A) \\leq P(B)$ ; $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.\n**Continuité monotone** : si $(A_n)$ est croissante, $P\\left(\\bigcup_n A_n\\right) = \\lim P(A_n)$ ; si elle est décroissante, $P\\left(\\bigcap_n A_n\\right) = \\lim P(A_n)$.\nEn situation d'équiprobabilité sur $\\Omega$ fini : $P(A) = \\dfrac{\\text{card}(A)}{\\text{card}(\\Omega)}$."
      },
      {
        title: "2. Conditionnement, probabilités totales, Bayes",
        content: "Si $P(B) > 0$ : $P_B(A) = \\dfrac{P(A \\cap B)}{P(B)}$, et $P_B$ est une probabilité.\n• **Probabilités composées** : $P(A_1 \\cap \\cdots \\cap A_n) = P(A_1)P_{A_1}(A_2) \\cdots P_{A_1 \\cap \\cdots \\cap A_{n-1}}(A_n)$ (si les conditionnements ont un sens).\n• **Probabilités totales** : si $(A_i)$ est un système complet d'événements de probabilités non nulles, $P(B) = \\sum_i P(A_i)P_{A_i}(B)$.\n• **Formule de Bayes** : $P_B(A_j) = \\dfrac{P(A_j)P_{A_j}(B)}{\\sum_i P(A_i)P_{A_i}(B)}$ ; elle « retourne » un conditionnement."
      },
      {
        title: "3. Indépendance",
        content: "$A$ et $B$ sont indépendants si $P(A \\cap B) = P(A)P(B)$ ; si $P(B) > 0$, cela équivaut à $P_B(A) = P(A)$. Si $A$ et $B$ sont indépendants, $A$ et $\\overline{B}$ le sont aussi.\nDes événements $A_1, \\ldots, A_n$ sont **mutuellement** indépendants si $P\\left(\\bigcap_{i \\in J} A_i\\right) = \\prod_{i \\in J} P(A_i)$ pour toute partie $J$ : c'est plus fort que l'indépendance deux à deux.\nIndépendance et incompatibilité sont des notions différentes : deux événements incompatibles de probabilités non nulles ne sont jamais indépendants."
      },
      {
        title: "4. Variables discrètes, espérance et variance",
        content: "La loi d'une variable discrète $X$ est donnée par $X(\\Omega)$ et les $P(X = x)$, de somme $1$.\n• **Espérance** : $E(X) = \\sum_{x} xP(X = x)$, si la série converge absolument. **Transfert** : $E(g(X)) = \\sum_{x} g(x)P(X = x)$. L'espérance est linéaire et croissante.\n• **Variance** : $V(X) = E\\big((X - E(X))^{2}\\big) = E(X^{2}) - E(X)^{2}$ (formule de Koenig-Huygens) ; $\\sigma(X) = \\sqrt{V(X)}$.\n• $E(aX + b) = aE(X) + b$ et $V(aX + b) = a^{2}V(X)$."
      },
      {
        title: "5. Lois usuelles discrètes",
        content: "• **Uniforme** sur $[\\![1 ; n]\\!]$ : $P(X = k) = \\frac{1}{n}$, $E(X) = \\frac{n+1}{2}$, $V(X) = \\frac{n^{2} - 1}{12}$.\n• **Bernoulli** $\\mathcal{B}(p)$ : $E(X) = p$, $V(X) = p(1 - p)$.\n• **Binomiale** $\\mathcal{B}(n, p)$, nombre de succès dans $n$ épreuves de Bernoulli indépendantes : $P(X = k) = \\binom{n}{k}p^{k}(1 - p)^{n-k}$, $E(X) = np$, $V(X) = np(1 - p)$.\n• **Géométrique** $\\mathcal{G}(p)$, rang du premier succès : $P(X = k) = (1 - p)^{k-1}p$ pour $k \\geq 1$, $E(X) = \\frac{1}{p}$, $V(X) = \\frac{1 - p}{p^{2}}$.\n• **Poisson** $\\mathcal{P}(\\lambda)$ : $P(X = k) = e^{-\\lambda}\\frac{\\lambda^{k}}{k!}$ pour $k \\in \\mathbb{N}$, $E(X) = V(X) = \\lambda$."
      },
      {
        title: "6. Couples de variables et covariance",
        content: "La loi conjointe de $(X, Y)$ est donnée par les $P(X = x, Y = y)$ ; les lois marginales s'en déduisent : $P(X = x) = \\sum_{y} P(X = x, Y = y)$.\n• $X$ et $Y$ sont **indépendantes** si $P(X = x, Y = y) = P(X = x)P(Y = y)$ pour tous $x$, $y$ ; alors $E(XY) = E(X)E(Y)$.\n• **Covariance** : $\\text{Cov}(X, Y) = E(XY) - E(X)E(Y)$, et $V(X + Y) = V(X) + V(Y) + 2\\,\\text{Cov}(X, Y)$.\n• Indépendance $\\Rightarrow$ covariance nulle, mais la réciproque est fausse.\n• **Stabilité** : si $X \\sim \\mathcal{B}(n, p)$ et $Y \\sim \\mathcal{B}(m, p)$ sont indépendantes, $X + Y \\sim \\mathcal{B}(n + m, p)$ ; si $X \\sim \\mathcal{P}(\\lambda)$ et $Y \\sim \\mathcal{P}(\\mu)$ sont indépendantes, $X + Y \\sim \\mathcal{P}(\\lambda + \\mu)$."
      }
    ],
    methods: [
      {
        title: "Méthode : Utiliser la formule de Bayes pour un test de dépistage",
        example: "Une maladie touche 2 % d'un cheptel. Un test est positif chez 95 % des animaux malades et chez 10 % des animaux sains. Un animal a un test positif : quelle est la probabilité qu'il soit malade ?",
        steps: [
          "**Étape 1 (Données)** : $P(M) = 0{,}02$, $P_M(T) = 0{,}95$ et $P_{\\overline{M}}(T) = 0{,}10$, où $(M, \\overline{M})$ est un système complet.",
          "**Étape 2 (Probabilités totales)** : $P(T) = 0{,}02 \\times 0{,}95 + 0{,}98 \\times 0{,}10 = 0{,}019 + 0{,}098 = 0{,}117$.",
          "**Étape 3 (Bayes)** : $P_T(M) = \\dfrac{0{,}019}{0{,}117} \\approx 0{,}16$. Malgré un test assez fiable, un positif sur six environ est réellement malade, car la maladie est rare."
        ]
      },
      {
        title: "Méthode : Calculer l'espérance d'une loi géométrique",
        example: "Soit $X \\sim \\mathcal{G}(p)$ avec $0 < p < 1$ et $q = 1 - p$. Montrer que $E(X) = \\frac{1}{p}$.",
        steps: [
          "**Étape 1 (Série)** : $E(X) = \\sum_{k=1}^{+\\infty} kq^{k-1}p$, série à termes positifs.",
          "**Étape 2 (Série de référence)** : comme $0 \\leq q < 1$, $\\sum_{k=1}^{+\\infty} kq^{k-1} = \\dfrac{1}{(1 - q)^{2}}$ : la série converge.",
          "**Étape 3 (Conclure)** : $E(X) = \\dfrac{p}{(1 - q)^{2}} = \\dfrac{p}{p^{2}} = \\dfrac{1}{p}$."
        ]
      },
      {
        title: "Méthode : Étudier un couple à partir de sa loi conjointe",
        example: "$X$ et $Y$ prennent les valeurs $0$ et $1$, avec $P(0, 0) = 0{,}4$, $P(0, 1) = 0{,}1$, $P(1, 0) = 0{,}2$ et $P(1, 1) = 0{,}3$. Calculer $\\text{Cov}(X, Y)$.",
        steps: [
          "**Étape 1 (Marginales)** : $P(X = 1) = 0{,}2 + 0{,}3 = 0{,}5$ et $P(Y = 1) = 0{,}1 + 0{,}3 = 0{,}4$, d'où $E(X) = 0{,}5$ et $E(Y) = 0{,}4$.",
          "**Étape 2 (Produit)** : $XY$ vaut $1$ seulement si $X = Y = 1$, donc $E(XY) = 0{,}3$.",
          "**Étape 3 (Conclure)** : $\\text{Cov}(X, Y) = 0{,}3 - 0{,}5 \\times 0{,}4 = 0{,}1 \\neq 0$ : les variables ne sont pas indépendantes."
        ]
      },
      {
        title: "Méthode : Reconnaître une loi binomiale",
        example: "Deux parents hétérozygotes $Aa$ ont 4 descendants. Chaque descendant est $aa$ avec probabilité $\\frac{1}{4}$, indépendamment des autres. Quelle est la probabilité qu'au moins un descendant soit $aa$ ?",
        steps: [
          "**Étape 1 (Modèle)** : le nombre $X$ de descendants $aa$ compte les succès de 4 épreuves de Bernoulli indépendantes de paramètre $\\frac{1}{4}$ : $X \\sim \\mathcal{B}\\left(4, \\frac{1}{4}\\right)$.",
          "**Étape 2 (Complémentaire)** : $P(X \\geq 1) = 1 - P(X = 0) = 1 - \\left(\\frac{3}{4}\\right)^{4}$.",
          "**Étape 3 (Calcul)** : $P(X \\geq 1) = 1 - \\frac{81}{256} = \\frac{175}{256} \\approx 0{,}68$ ; de plus $E(X) = 4 \\times \\frac{1}{4} = 1$."
        ]
      }
    ],
    traps: [
      "⚠️ Ne confondez pas $P_A(B)$ et $P_B(A)$ : la formule de Bayes sert justement à passer de l'une à l'autre.",
      "⚠️ Incompatibles ne veut pas dire indépendants : si $P(A) > 0$, $P(B) > 0$ et $A \\cap B = \\emptyset$, alors $P(A \\cap B) = 0 \\neq P(A)P(B)$.",
      "⚠️ Pour $X$ et $Y$ indépendantes, $V(X - Y) = V(X) + V(Y)$ : les variances s'additionnent, elles ne se soustraient pas.",
      "⚠️ Une covariance nulle ne prouve pas l'indépendance ; pour prouver la non-indépendance, il suffit d'un couple $(x, y)$ avec $P(X = x, Y = y) \\neq P(X = x)P(Y = y)$."
    ],
    flashcards: [
      { q: "Formule des probabilités totales ?", a: "$P(B) = \\sum_i P(A_i)P_{A_i}(B)$ pour un système complet $(A_i)$." },
      { q: "Espérance et variance de $\\mathcal{B}(n, p)$ ?", a: "$E = np$ et $V = np(1 - p)$." },
      { q: "Espérance et variance de $\\mathcal{P}(\\lambda)$ ?", a: "$E = V = \\lambda$." },
      { q: "Loi géométrique $\\mathcal{G}(p)$ : $P(X = k)$ ?", a: "$(1 - p)^{k-1}p$ pour $k \\geq 1$." },
      { q: "Formule de $V(X + Y)$ ?", a: "$V(X) + V(Y) + 2\\,\\text{Cov}(X, Y)$." },
      { q: "Formule de Koenig-Huygens ?", a: "$V(X) = E(X^{2}) - E(X)^{2}$." }
    ]
  },

  "veto-12": {
    title: "VB-12 : Variables à densité et théorèmes limites",
    domain: "Probabilités et statistique",
    objectives: [
      "Vérifier qu'une fonction est une densité et calculer probabilités, espérance et variance.",
      "Utiliser les lois uniforme, exponentielle et normale.",
      "Connaître la loi d'une somme de variables normales indépendantes.",
      "Appliquer l'inégalité de Bienaymé-Tchebychev, la loi faible des grands nombres et les approximations en loi."
    ],
    keyPoints: [
      {
        title: "1. Fonction de répartition et densité",
        content: "La fonction de répartition de $X$ est $F_X(x) = P(X \\leq x)$ : elle est croissante, continue à droite, de limites $0$ en $-\\infty$ et $1$ en $+\\infty$, et $P(a < X \\leq b) = F_X(b) - F_X(a)$.\n$X$ est **à densité** si $F_X$ est continue sur $\\mathbb{R}$ et de classe $C^{1}$ sauf en un nombre fini de points ; une densité est alors $f = F_X'$ (là où elle existe).\nUne fonction $f$ est une densité si $f \\geq 0$, $f$ est continue sauf en un nombre fini de points et $\\int_{-\\infty}^{+\\infty} f(t)\\,dt = 1$. Alors $F_X(x) = \\int_{-\\infty}^{x} f(t)\\,dt$, $P(a \\leq X \\leq b) = \\int_a^b f(t)\\,dt$ et $P(X = a) = 0$ pour tout $a$."
      },
      {
        title: "2. Espérance et variance",
        content: "Si $\\int_{-\\infty}^{+\\infty} |t|f(t)\\,dt$ converge, $X$ admet une espérance $E(X) = \\int_{-\\infty}^{+\\infty} tf(t)\\,dt$.\n**Transfert** : $E(g(X)) = \\int_{-\\infty}^{+\\infty} g(t)f(t)\\,dt$ sous réserve de convergence absolue.\nVariance : $V(X) = E(X^{2}) - E(X)^{2}$, avec les mêmes règles $E(aX + b) = aE(X) + b$ et $V(aX + b) = a^{2}V(X)$ que dans le cas discret."
      },
      {
        title: "3. Lois uniforme et exponentielle",
        content: "• **Uniforme** $\\mathcal{U}([a ; b])$ : $f(t) = \\frac{1}{b - a}$ sur $[a ; b]$ et $0$ ailleurs ; $E(X) = \\frac{a + b}{2}$, $V(X) = \\frac{(b - a)^{2}}{12}$.\n• **Exponentielle** $\\mathcal{E}(\\lambda)$, $\\lambda > 0$ : $f(t) = \\lambda e^{-\\lambda t}$ pour $t \\geq 0$ et $0$ sinon ; $F(x) = 1 - e^{-\\lambda x}$ pour $x \\geq 0$ ; $E(X) = \\frac{1}{\\lambda}$, $V(X) = \\frac{1}{\\lambda^{2}}$.\nLa loi exponentielle est **sans mémoire** : pour $s, t \\geq 0$, $P_{(X > s)}(X > s + t) = P(X > t)$. Elle modélise des durées de vie sans vieillissement (désintégration, temps d'attente)."
      },
      {
        title: "4. Loi normale",
        content: "$X \\sim \\mathcal{N}(\\mu, \\sigma^{2})$ ($\\sigma > 0$) a pour densité $f(t) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\left(-\\dfrac{(t - \\mu)^{2}}{2\\sigma^{2}}\\right)$, avec $E(X) = \\mu$ et $V(X) = \\sigma^{2}$.\n• **Centrage-réduction** : $X \\sim \\mathcal{N}(\\mu, \\sigma^{2}) \\iff Z = \\dfrac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$.\n• La fonction de répartition $\\Phi$ de $\\mathcal{N}(0, 1)$ vérifie $\\Phi(-x) = 1 - \\Phi(x)$ ; $P(|Z| \\leq 1{,}96) \\approx 0{,}95$.\n• Si $X \\sim \\mathcal{N}(\\mu, \\sigma^{2})$ et $a \\neq 0$, alors $aX + b \\sim \\mathcal{N}(a\\mu + b, a^{2}\\sigma^{2})$."
      },
      {
        title: "5. Sommes de variables à densité indépendantes",
        content: "Si $X$ et $Y$ sont indépendantes de densités $f_X$ et $f_Y$ (bornées par exemple), $X + Y$ admet pour densité le produit de convolution\n$$f_{X+Y}(x) = \\int_{-\\infty}^{+\\infty} f_X(t)f_Y(x - t)\\,dt$$\nEspérances et variances : $E(X + Y) = E(X) + E(Y)$ et, par indépendance, $V(X + Y) = V(X) + V(Y)$.\n**Stabilité de la loi normale** : si $X \\sim \\mathcal{N}(\\mu_1, \\sigma_1^{2})$ et $Y \\sim \\mathcal{N}(\\mu_2, \\sigma_2^{2})$ sont indépendantes, $X + Y \\sim \\mathcal{N}(\\mu_1 + \\mu_2, \\sigma_1^{2} + \\sigma_2^{2})$."
      },
      {
        title: "6. Inégalités et théorèmes limites",
        content: "• **Markov** : si $X \\geq 0$ admet une espérance, pour tout $a > 0$, $P(X \\geq a) \\leq \\dfrac{E(X)}{a}$.\n• **Bienaymé-Tchebychev** : si $X$ admet une variance, pour tout $\\varepsilon > 0$, $P(|X - E(X)| \\geq \\varepsilon) \\leq \\dfrac{V(X)}{\\varepsilon^{2}}$.\n• **Loi faible des grands nombres** : si $(X_n)$ sont indépendantes, de même loi, d'espérance $m$ et de variance $\\sigma^{2}$, et $\\overline{X}_n = \\frac{1}{n}\\sum_{k=1}^{n} X_k$, alors pour tout $\\varepsilon > 0$, $P(|\\overline{X}_n - m| \\geq \\varepsilon) \\to 0$.\n• **Convergence en loi** : $F_{X_n}(x) \\to F_X(x)$ en tout point $x$ où $F_X$ est continue. Si $X_n \\sim \\mathcal{B}(n, p_n)$ avec $np_n \\to \\lambda > 0$, $X_n$ converge en loi vers $\\mathcal{P}(\\lambda)$.\n• **Théorème central limite** (admis) : sous les hypothèses de la loi faible avec $\\sigma > 0$, $\\dfrac{\\overline{X}_n - m}{\\sigma/\\sqrt{n}}$ converge en loi vers $\\mathcal{N}(0, 1)$."
      }
    ],
    methods: [
      {
        title: "Méthode : Vérifier une densité et l'exploiter",
        example: "Soit $f(t) = ct^{2}$ sur $[0 ; 1]$ et $f(t) = 0$ ailleurs. Déterminer $c$, puis $P\\left(X \\leq \\frac{1}{2}\\right)$ et $E(X)$.",
        steps: [
          "**Étape 1 (Normalisation)** : $f \\geq 0$ impose $c \\geq 0$, $f$ est continue sauf en $1$, et $\\int_0^1 ct^{2}\\,dt = \\frac{c}{3} = 1$, donc $c = 3$.",
          "**Étape 2 (Probabilité)** : $P\\left(X \\leq \\frac{1}{2}\\right) = \\int_0^{1/2} 3t^{2}\\,dt = \\left(\\frac{1}{2}\\right)^{3} = \\frac{1}{8}$.",
          "**Étape 3 (Espérance)** : $E(X) = \\int_0^1 3t^{3}\\,dt = \\frac{3}{4}$ (l'intégrale est sur un segment, donc convergente)."
        ]
      },
      {
        title: "Méthode : Utiliser la loi exponentielle",
        example: "La durée de vie $X$ (en années) d'un composant suit $\\mathcal{E}(0{,}1)$. Calculer $E(X)$, $P(X > 5)$ et la probabilité qu'il dure encore 5 ans sachant qu'il a déjà fonctionné 10 ans.",
        steps: [
          "**Étape 1 (Espérance)** : $E(X) = \\frac{1}{0{,}1} = 10$ ans.",
          "**Étape 2 (Queue)** : $P(X > 5) = 1 - F(5) = e^{-0{,}5} \\approx 0{,}607$.",
          "**Étape 3 (Absence de mémoire)** : $P_{(X > 10)}(X > 15) = \\dfrac{e^{-1{,}5}}{e^{-1}} = e^{-0{,}5} \\approx 0{,}607$ : l'âge déjà atteint ne change rien."
        ]
      },
      {
        title: "Méthode : Calculer une probabilité avec une loi normale",
        example: "La masse $X$ (en g) d'un chiot à la naissance suit $\\mathcal{N}(400, 50^{2})$. Calculer $P(X \\leq 480)$, sachant que $\\Phi(1{,}6) \\approx 0{,}945$.",
        steps: [
          "**Étape 1 (Centrer-réduire)** : $Z = \\dfrac{X - 400}{50} \\sim \\mathcal{N}(0, 1)$.",
          "**Étape 2 (Traduire)** : $X \\leq 480 \\iff Z \\leq \\dfrac{80}{50} = 1{,}6$.",
          "**Étape 3 (Conclure)** : $P(X \\leq 480) = \\Phi(1{,}6) \\approx 0{,}945$ ; par symétrie, $P(X \\leq 320) = 1 - \\Phi(1{,}6) \\approx 0{,}055$."
        ]
      },
      {
        title: "Méthode : Dimensionner un échantillon avec Bienaymé-Tchebychev",
        example: "On estime la proportion $p$ d'animaux porteurs d'un caractère par la fréquence $F_n$ observée sur $n$ animaux. Quel $n$ garantit $P(|F_n - p| \\geq 0{,}05) \\leq 0{,}1$ ?",
        steps: [
          "**Étape 1 (Moments)** : $nF_n \\sim \\mathcal{B}(n, p)$, donc $E(F_n) = p$ et $V(F_n) = \\frac{p(1 - p)}{n} \\leq \\frac{1}{4n}$, car $p(1 - p) \\leq \\frac{1}{4}$.",
          "**Étape 2 (Inégalité)** : $P(|F_n - p| \\geq 0{,}05) \\leq \\dfrac{1}{4n \\times 0{,}0025} = \\dfrac{100}{n}$.",
          "**Étape 3 (Conclure)** : $\\frac{100}{n} \\leq 0{,}1 \\iff n \\geq 1\\,000$ ; cette taille suffit quel que soit $p$ (la majoration est grossière, l'approximation normale donnerait un $n$ plus petit)."
        ]
      }
    ],
    traps: [
      "⚠️ Une densité peut dépasser $1$ (par exemple $3t^{2}$ en $t = 1$) : c'est son intégrale qui vaut $1$, pas ses valeurs qui sont des probabilités.",
      "⚠️ Dans $\\mathcal{N}(\\mu, \\sigma^{2})$, le second paramètre est la **variance** : pour centrer-réduire, on divise par l'écart type $\\sigma$, pas par $\\sigma^{2}$.",
      "⚠️ Pour une variable à densité, $P(X = a) = 0$ : les inégalités larges ou strictes donnent la même probabilité, ce qui est faux pour une variable discrète.",
      "⚠️ $V(X + Y) = V(X) + V(Y)$ exige l'indépendance (ou une covariance nulle), alors que $E(X + Y) = E(X) + E(Y)$ est toujours vraie."
    ],
    flashcards: [
      { q: "Espérance et variance de $\\mathcal{E}(\\lambda)$ ?", a: "$E = \\frac{1}{\\lambda}$ et $V = \\frac{1}{\\lambda^{2}}$." },
      { q: "Si $X \\sim \\mathcal{N}(\\mu, \\sigma^{2})$, loi de $\\frac{X - \\mu}{\\sigma}$ ?", a: "$\\mathcal{N}(0, 1)$." },
      { q: "Inégalité de Bienaymé-Tchebychev ?", a: "$P(|X - E(X)| \\geq \\varepsilon) \\leq \\dfrac{V(X)}{\\varepsilon^{2}}$." },
      { q: "Relation entre densité et fonction de répartition ?", a: "$F(x) = \\int_{-\\infty}^{x} f(t)\\,dt$ et $F' = f$ là où $f$ est continue." },
      { q: "Loi de $X + Y$ pour $X \\sim \\mathcal{N}(\\mu_1, \\sigma_1^{2})$, $Y \\sim \\mathcal{N}(\\mu_2, \\sigma_2^{2})$ indépendantes ?", a: "$\\mathcal{N}(\\mu_1 + \\mu_2, \\sigma_1^{2} + \\sigma_2^{2})$." },
      { q: "Valeur approchée de $P(|Z| \\leq 1{,}96)$ pour $Z \\sim \\mathcal{N}(0, 1)$ ?", a: "$0{,}95$." }
    ]
  },

  "veto-13": {
    title: "VB-13 : Statistique descriptive univariée et bivariée",
    domain: "Probabilités et statistique",
    objectives: [
      "Calculer et interpréter les indicateurs de position et de dispersion d'une série.",
      "Calculer la covariance et le coefficient de corrélation linéaire d'une série bivariée.",
      "Déterminer la droite de régression par la méthode des moindres carrés et l'utiliser pour prévoir.",
      "Réaliser un ajustement après changement de variable (exponentiel, puissance)."
    ],
    keyPoints: [
      {
        title: "1. Vocabulaire",
        content: "On étudie un **caractère** (ou variable statistique) sur les **individus** d'une population ou d'un échantillon. Il est qualitatif (couleur de robe, race) ou quantitatif, discret (nombre de petits par portée) ou continu (masse, taille), auquel cas on regroupe souvent les valeurs en classes.\nPour une série de valeurs $x_1, \\ldots, x_p$ d'effectifs $n_1, \\ldots, n_p$ et d'effectif total $n$, la fréquence de $x_i$ est $f_i = \\frac{n_i}{n}$ ; les fréquences cumulées croissantes permettent de lire médiane et quartiles."
      },
      {
        title: "2. Indicateurs de position",
        content: "• **Moyenne** : $\\overline{x} = \\dfrac{1}{n}\\sum_{i=1}^{p} n_ix_i = \\sum_{i=1}^{p} f_ix_i$. Si $y_i = ax_i + b$, alors $\\overline{y} = a\\overline{x} + b$.\n• **Médiane** : valeur qui partage la série ordonnée en deux groupes de même effectif (pour $n$ pair, on prend usuellement la demi-somme des deux valeurs centrales).\n• **Quartiles** : $Q_1$ est la plus petite valeur de la série telle qu'au moins 25 % des valeurs lui soient inférieures ou égales ; $Q_3$ de même avec 75 %.\n• **Mode** : valeur (ou classe) de plus grand effectif.\nLa médiane est peu sensible aux valeurs extrêmes, contrairement à la moyenne."
      },
      {
        title: "3. Indicateurs de dispersion",
        content: "• **Variance** : $s_x^{2} = \\dfrac{1}{n}\\sum_{i=1}^{p} n_i(x_i - \\overline{x})^{2} = \\left(\\dfrac{1}{n}\\sum_{i=1}^{p} n_ix_i^{2}\\right) - \\overline{x}^{2}$ (Koenig-Huygens) ; **écart type** $s_x = \\sqrt{s_x^{2}}$, dans l'unité des données.\n• **Écart interquartile** $Q_3 - Q_1$ et **étendue** $\\max - \\min$.\n• Si $y_i = ax_i + b$ : $s_y = |a|\\,s_x$ (une translation ne change pas la dispersion).\nEn statistique descriptive, la variance est définie avec le facteur $\\frac{1}{n}$."
      },
      {
        title: "4. Séries bivariées : covariance et corrélation",
        content: "Pour $n$ couples $(x_i, y_i)$, le nuage de points a pour **point moyen** $G(\\overline{x}, \\overline{y})$.\n• **Covariance** : $s_{xy} = \\dfrac{1}{n}\\sum_{i=1}^{n} (x_i - \\overline{x})(y_i - \\overline{y}) = \\left(\\dfrac{1}{n}\\sum_{i=1}^{n} x_iy_i\\right) - \\overline{x}\\,\\overline{y}$.\n• **Coefficient de corrélation linéaire** (si $s_x s_y \\neq 0$) : $r = \\dfrac{s_{xy}}{s_xs_y}$. Par l'inégalité de Cauchy-Schwarz, $-1 \\leq r \\leq 1$, et $|r| = 1$ si et seulement si les points sont alignés.\nPlus $|r|$ est proche de $1$, plus un ajustement affine est pertinent ; le signe de $r$ est celui de la pente."
      },
      {
        title: "5. Droite des moindres carrés",
        content: "La droite de régression de $y$ en $x$ est la droite $y = ax + b$ qui minimise $\\sum_{i=1}^{n} (y_i - ax_i - b)^{2}$ (somme des carrés des écarts **verticaux**). Si $s_x \\neq 0$ :\n$$a = \\frac{s_{xy}}{s_x^{2}} \\qquad b = \\overline{y} - a\\overline{x}$$\nElle passe par le point moyen $G$. La droite de régression de $x$ en $y$ est en général différente ; les deux coïncident si et seulement si $|r| = 1$.\nInterprétation : le vecteur des valeurs ajustées est le projeté orthogonal, dans $\\mathbb{R}^{n}$, de $(y_1, \\ldots, y_n)$ sur $\\text{Vect}((x_1, \\ldots, x_n), (1, \\ldots, 1))$."
      },
      {
        title: "6. Ajustements après changement de variable",
        content: "Quand le nuage n'est pas rectiligne, on transforme une variable :\n• **Croissance exponentielle** $y = ke^{\\alpha x}$ ($k > 0$) : $z = \\ln y$ vérifie $z = \\ln k + \\alpha x$, relation affine en $x$ ;\n• **Loi puissance** (allométrie) $y = kx^{\\alpha}$ : $\\ln y = \\ln k + \\alpha \\ln x$, relation affine entre $\\ln x$ et $\\ln y$.\nOn calcule la régression sur les données transformées, puis on revient aux variables initiales.\nUne corrélation forte ne prouve pas un lien de cause à effet : les deux variables peuvent dépendre d'un troisième facteur."
      }
    ],
    methods: [
      {
        title: "Méthode : Calculer les indicateurs d'une série",
        example: "On relève le nombre de petits de 5 portées : 3, 5, 6, 8, 8. Calculer la moyenne, la médiane, la variance et l'écart type.",
        steps: [
          "**Étape 1 (Position)** : $\\overline{x} = \\frac{3 + 5 + 6 + 8 + 8}{5} = 6$ ; la série est ordonnée et compte 5 valeurs, la médiane est la 3e : $6$.",
          "**Étape 2 (Koenig-Huygens)** : $\\frac{1}{5}(9 + 25 + 36 + 64 + 64) = \\frac{198}{5} = 39{,}6$, donc $s_x^{2} = 39{,}6 - 36 = 3{,}6$.",
          "**Étape 3 (Écart type)** : $s_x = \\sqrt{3{,}6} \\approx 1{,}90$ petit par portée."
        ]
      },
      {
        title: "Méthode : Déterminer la droite des moindres carrés",
        example: "Pour $x = 1, 2, 3, 4, 5$, on observe $y = 3, 5, 6, 8, 8$. Déterminer $r$ et la droite de régression de $y$ en $x$, puis prévoir $y$ pour $x = 6$.",
        steps: [
          "**Étape 1 (Moyennes et variance)** : $\\overline{x} = 3$, $\\overline{y} = 6$, $s_x^{2} = \\frac{1 + 4 + 9 + 16 + 25}{5} - 9 = 2$ et $s_y^{2} = 3{,}6$.",
          "**Étape 2 (Covariance et corrélation)** : $\\frac{1}{5}\\sum x_iy_i = \\frac{3 + 10 + 18 + 32 + 40}{5} = 20{,}6$, donc $s_{xy} = 20{,}6 - 18 = 2{,}6$ et $r = \\frac{2{,}6}{\\sqrt{2 \\times 3{,}6}} \\approx 0{,}97$.",
          "**Étape 3 (Droite et prévision)** : $a = \\frac{2{,}6}{2} = 1{,}3$, $b = 6 - 1{,}3 \\times 3 = 2{,}1$ : $y = 1{,}3x + 2{,}1$ ; pour $x = 6$, on prévoit $y \\approx 9{,}9$ (prévision à prendre avec prudence hors du domaine observé)."
        ]
      },
      {
        title: "Méthode : Réaliser un ajustement exponentiel",
        example: "Le nombre $N$ de bactéries d'une culture est mesuré toutes les heures. La régression de $z = \\ln N$ en $t$ (en heures) donne $z = 0{,}69t + 4{,}6$. En déduire un modèle pour $N$ et le temps de doublement.",
        steps: [
          "**Étape 1 (Retour aux variables)** : $N = e^{z} = e^{4{,}6}e^{0{,}69t} \\approx 99{,}5\\,e^{0{,}69t}$.",
          "**Étape 2 (Temps de doublement)** : $N(t + T) = 2N(t) \\iff e^{0{,}69T} = 2 \\iff T = \\frac{\\ln 2}{0{,}69} \\approx 1$ h.",
          "**Étape 3 (Interpréter)** : la population double environ toutes les heures et vaut environ 100 bactéries à $t = 0$ ; le modèle n'est valable que tant que les ressources ne limitent pas la croissance."
        ]
      }
    ],
    traps: [
      "⚠️ En statistique descriptive, la variance se calcule avec $\\frac{1}{n}$ ; certaines calculatrices affichent aussi la version en $\\frac{1}{n - 1}$ : choisissez la bonne.",
      "⚠️ Un coefficient $r$ proche de $0$ signifie l'absence de lien **affine**, pas l'absence de lien : un nuage en forme de parabole peut donner $r \\approx 0$.",
      "⚠️ La droite de régression de $y$ en $x$ n'est pas celle de $x$ en $y$ : on ne peut pas inverser l'équation pour prévoir $x$ à partir de $y$.",
      "⚠️ Corrélation n'est pas causalité, et une prévision loin des valeurs observées (extrapolation) est peu fiable."
    ],
    flashcards: [
      { q: "Formule de Koenig-Huygens pour une série ?", a: "$s_x^{2} = \\overline{x^{2}} - \\overline{x}^{2}$." },
      { q: "Pente de la droite de régression de $y$ en $x$ ?", a: "$a = \\dfrac{s_{xy}}{s_x^{2}}$." },
      { q: "Point par lequel passe toujours la droite des moindres carrés ?", a: "Le point moyen $G(\\overline{x}, \\overline{y})$." },
      { q: "Encadrement du coefficient de corrélation $r$ ?", a: "$-1 \\leq r \\leq 1$, avec $|r| = 1$ si et seulement si les points sont alignés." },
      { q: "Changement de variable pour un modèle $y = kx^{\\alpha}$ ?", a: "Passer à $\\ln y = \\ln k + \\alpha \\ln x$, relation affine entre $\\ln x$ et $\\ln y$." }
    ]
  }
};

if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_VETO);
