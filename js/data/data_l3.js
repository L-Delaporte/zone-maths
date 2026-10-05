/**
 * Données pédagogiques universitaires de Licence 3 de Mathématiques (S5 & S6)
 * Synthétisant les enseignements de Théorie des Groupes/Anneaux, Topologie, Mesure & Intégration et Analyse Harmonique
 */

window.MATHS_COURSES_L3 = {
  "L3-GRP1": {
    "title": "L3-GRP1 : Théorie des Groupes I : Morphismes, sous-groupes distingués et quotients",
    "domain": "Théorie des Groupes",
    "objectives": [
      "Définir axiomatiquement un groupe $(G, \\cdot)$ et caractériser les sous-groupes $H \\le G$.",
      "Énoncer et démontrer le Théorème de Lagrange : pour tout sous-groupe $H \\le G$ fini, $|G| = |H| \\times [G : H]$.",
      "Définir les sous-groupes distingués (normaux) $H \\trianglelefteq G$ et construire le groupe quotient $G/H$.",
      "Formuler et appliquer le Premier Théorème d'Isomorphisme de Noether : $G/\\ker(f) \\simeq \\text{Im}(f)$."
    ],
    "keyPoints": [
      {
        "title": "1. Axiomatique des Groupes et Sous-groupes",
        "content": "• **Axiomes de groupe** : Un ensemble $G$ muni d'une loi interne $\\cdot : G \\times G \\to G$ est un **groupe** $(G, \\cdot)$ si et seulement si :\n  1. **Associativité** : $\\forall x, y, z \\in G, \\quad (x \\cdot y) \\cdot z = x \\cdot (y \\cdot z)$.\n  2. **Élément neutre** : $\\exists e \\in G, \\forall x \\in G, \\quad e \\cdot x = x \\cdot e = x$.\n  3. **Symétrique (inverse)** : $\\forall x \\in G, \\exists x^{-1} \\in G, \\quad x \\cdot x^{-1} = x^{-1} \\cdot x = e$.\n• Si de plus $\\forall x, y \\in G, x \\cdot y = y \\cdot x$, le groupe est dit **abélien** (ou commutatif).\n• **Caractérisation d'un sous-groupe** : Une partie non vide $H \\subset G$ est un **sous-groupe** (noté $H \\le G$) ssi :\n$$\\forall x, y \\in H, \\quad x y^{-1} \\in H \\quad (\\text{ou équivalemment } e \\in H, \\; xy \\in H, \\; x^{-1} \\in H)$$"
      },
      {
        "title": "2. Morphismes de Groupes, Noyau et Image",
        "content": "• Soient $(G, \\cdot)$ et $(G', *)$ deux groupes. Une application $f : G \\to G'$ est un **morphisme de groupes** si :\n$$\\forall x, y \\in G, \\quad f(x \\cdot y) = f(x) * f(y)$$\n• Propriétés immédiates : $f(e_G) = e_{G'}$ et $\\forall x \\in G, f(x^{-1}) = (f(x))^{-1}$.\n• **Noyau de $f$** : $\\ker(f) = \\{x \\in G \\mid f(x) = e_{G'}\\} = f^{-1}(\\{e_{G'}\\})$. C'est un sous-groupe de $G$.\n  - **Critère d'injectivité** : $f$ est injectif $\\iff \\ker(f) = \\{e_G\\}$.\n• **Image de $f$** : $\\text{Im}(f) = f(G) = \\{f(x) \\mid x \\in G\\}$. C'est un sous-groupe de $G'$."
      },
      {
        "title": "3. Théorème de Lagrange et Ordre d'un élément",
        "content": "• **Classes suivant un sous-groupe** : Pour $H \\le G$ et $g \\in G$, la classe à gauche est $gH = \\{gh \\mid h \\in H\\}$. Les classes à gauche forment une partition de $G$.\n• **Théorème de Lagrange** : Pour tout groupe fini $G$ et tout sous-groupe $H \\le G$ :\n$$|G| = |H| \\times [G : H]$$\noù $[G : H] = |G/H|$ est l'indice de $H$ dans $G$ (nombre de classes à gauche distinctes).\n• **Corollaires majeurs** :\n  1. L'ordre de tout sous-groupe divise l'ordre du groupe.\n  2. L'ordre de tout élément $g \\in G$ (le plus petit $k \\ge 1$ tel que $g^k = e$) divise $|G|$, d'où $g^{|G|} = e$.\n  3. Tout groupe d'ordre premier $p$ est cyclique et isomorphe à $\\mathbb{Z}/p\\mathbb{Z}$."
      },
      {
        "title": "4. Sous-groupes distingués et Premier Théorème d'Isomorphisme",
        "content": "• Un sous-groupe $H \\le G$ est dit **distingué** (ou normal), noté $H \\trianglelefteq G$, si :\n$$\\forall g \\in G, \\quad g H g^{-1} = H \\quad (\\text{ou } \\forall g \\in G, \\forall h \\in H, \\; ghg^{-1} \\in H)$$\n• **Groupe quotient** : Si $H \\trianglelefteq G$, la relation $x \\sim y \\iff x^{-1}y \\in H$ est compatible avec la loi de groupe. L'ensemble quotient $G/H$ est muni d'une loi de groupe canonique : $(xH)(yH) = (xy)H$.\n• **Premier Théorème d'Isomorphisme de Noether** : Pour tout morphisme de groupes $f : G \\to G'$ :\n$$\\ker(f) \\trianglelefteq G \\quad \\text{et} \\quad G/\\ker(f) \\simeq \\text{Im}(f)$$\nL'isomorphisme canonique $\\bar{f} : G/\\ker(f) \\to \\text{Im}(f)$ est défini par $\\bar{f}(x \\ker(f)) = f(x)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Prouver qu'un sous-groupe d'indice 2 est toujours distingué",
        "example": "Soit $G$ un groupe et $H \\le G$ un sous-groupe d'indice $[G : H] = 2$. Montrer que $H \\trianglelefteq G$.",
        "steps": [
          "**Étape 1 (Classes à gauche)** : Comme $[G:H] = 2$, il y a exactement deux classes à gauche : $H$ et son complémentaire $G \\setminus H$.",
          "**Étape 2 (Classes à droite)** : De même, il y a exactement deux classes à droite : $H$ et son complémentaire $G \\setminus H$.",
          "**Étape 3 (Égalité)** : Pour tout $g \\in G$ : si $g \\in H$, $gH = H = Hg$. Si $g \\notin H$, $gH = G \\setminus H = Hg$.",
          "**Conclusion** : Pour tout $g \\in G$, $gH = Hg$, donc $H$ est distingué dans $G$."
        ]
      }
    ],
    "traps": [
      "⚠️ Si $A \\trianglelefteq B$ et $B \\trianglelefteq C$, $A$ n'est PAS forcément distingué dans $C$ (la relation « être distingué » n'est pas transitive) !",
      "⚠️ Pour définir une loi de groupe sur $G/H$, $H$ doit impérativement être **distingué**."
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème de Lagrange.",
        "a": "Pour tout sous-groupe $H$ d'un groupe fini $G$, le cardinal $|H|$ divise le cardinal $|G|$."
      },
      {
        "q": "Énoncer le premier théorème d'isomorphisme de Noether.",
        "a": "Pour tout morphisme de groupes $f : G \\to G'$, $G/\\ker(f) \\simeq \\text{Im}(f)$."
      }
    ]
  },
  "L3-MET": {
    "title": "L3-MET : Espaces métriques et Espaces vectoriels normés",
    "domain": "Topologie",
    "objectives": [
      "Définir axiomatiquement une distance et une norme, et vérifier les axiomes fondamentaux.",
      "Maîtriser les ouverts, fermés, voisinages, adhérence et intérieur dans un espace métrique.",
      "Comprendre l'équivalence des normes et le théorème d'équivalence en dimension finie.",
      "Caractériser la continuité ponctuelle et globale des applications, ainsi que la continuité des applications linéaires."
    ],
    "keyPoints": [
      {
        "title": "1. Espaces métriques et Boules ouvertes/fermées",
        "content": "• **Axiomes d'une distance** : Une application $d : E \\times E \\to \\mathbb{R}^+$ est une distance sur $E$ ssi :\n  1. **Séparation** : $\\forall x, y \\in E, \\; d(x, y) = 0 \\iff x = y$.\n  2. **Symétrie** : $\\forall x, y \\in E, \\; d(x, y) = d(y, x)$.\n  3. **Inégalité triangulaire** : $\\forall x, y, z \\in E, \\; d(x, z) \\le d(x, y) + d(y, z)$.\n• **Boules** :\n  - Boule ouverte de centre $x$ et rayon $r > 0$ : $B(x, r) = \\{y \\in E \\mid d(x, y) < r\\}$.\n  - Boule fermée : $\\bar{B}(x, r) = \\{y \\in E \\mid d(x, y) \\le r\\}$.\n  - Sphère : $S(x, r) = \\{y \\in E \\mid d(x, y) = r\\}$."
      },
      {
        "title": "2. Topologie induite : Ouverts, Fermés, Adhérence, Intérieur",
        "content": "• **Ouvert** : Une partie $U \\subset E$ est un **ouvert** si $\\forall x \\in U, \\exists r > 0, B(x, r) \\subset U$. Toute réunion d'ouverts et toute intersection finie d'ouverts est un ouvert.\n• **Fermé** : $F \\subset E$ est un **fermé** si son complémentaire $E \\setminus F$ est un ouvert. Caractérisation séquentielle : $F$ est fermé ssi pour toute suite $(x_n)$ dans $F$ convergeant vers $\\ell \\in E$, on a $\\ell \\in F$.\n• **Intérieur $\\mathring{A}$** : Plus grand ouvert contenu dans $A$ (ensemble des points intérieurs).\n• **Adhérence $\\bar{A}$** : Plus petit fermé contenant $A$. On a $\\bar{A} = \\{x \\in E \\mid \\forall r > 0, B(x, r) \\cap A \\neq \\emptyset\\} = \\{\\lim x_n \\mid x_n \\in A\\}$.\n• **Frontière** : $\\partial A = \\bar{A} \\setminus \\mathring{A}$.\n• **Densité** : $A$ est dense dans $E$ si $\\bar{A} = E$."
      },
      {
        "title": "3. Espaces vectoriels normés (EVN) et Équivalence des normes",
        "content": "• **Norme** : Sur un $\\mathbb{K}$-espace vectoriel $E$, une norme est une application $\\|\\cdot\\| : E \\to \\mathbb{R}^+$ vérifiant :\n  1. **Séparation** : $\\|x\\| = 0 \\iff x = 0_E$.\n  2. **Homogénéité absolue** : $\\forall \\lambda \\in \\mathbb{K}, \\forall x \\in E, \\; \\|\\lambda x\\| = |\\lambda| \\|x\\|$.\n  3. **Inégalité sous-additive (triangulaire)** : $\\forall x, y \\in E, \\; \\|x + y\\| \\le \\|x\\| + \\|y\\|$.\n• Toute norme induit une distance canonique invariante par translation : $d(x, y) = \\|x - y\\|$.\n• **Équivalence de normes** : Deux normes $N_1$ et $N_2$ sur $E$ sont équivalentes ($N_1 \\sim N_2$) s'il existe $\\alpha, \\beta > 0$ tels que :\n$$\\forall x \\in E, \\quad \\alpha N_1(x) \\le N_2(x) \\le \\beta N_1(x)$$\n• **Théorème fondamental** : Sur un espace vectoriel de **dimension finie**, toutes les normes sont équivalentes."
      },
      {
        "title": "4. Continuité des Applications et Opérateurs Linéaires",
        "content": "• **Continuité ponctuelle** : $f : E \\to F$ est continue en $x_0$ ssi $\\forall \\varepsilon > 0, \\exists \\eta > 0, d_E(x, x_0) < \\eta \\implies d_F(f(x), f(x_0)) < \\varepsilon$.\n• **Caractérisation topologique globale** : $f : E \\to F$ est continue sur $E$ ssi l'image réciproque de tout ouvert de $F$ est un ouvert de $E$ (de même pour les fermés).\n• **Applications linéaires continues** : Pour $u \\in \\mathcal{L}(E, F)$ entre EVNs, sont équivalents :\n  1. $u$ est continue sur $E$.\n  2. $u$ est continue en $0_E$.\n  3. $\\exists M \\ge 0, \\forall x \\in E, \\; \\|u(x)\\|_F \\le M \\|x\\|_E$.\n  4. La norme d'opérateur $\\|\\|u\\|\\| = \\sup_{x \\neq 0} \\frac{\\|u(x)\\|_F}{\\|x\\|_E} < +\\infty$.\n• En dimension finie, toute application linéaire est automatiquement continue."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la norme d'opérateur d'une forme linéaire",
        "example": "Sur $E = \\mathcal{C}([0, 1], \\mathbb{R})$ muni de la norme $\\|\\cdot\\|_\\infty$, calculer la norme de $\\varphi(f) = \\int_0^1 f(t) dt$.",
        "steps": [
          "**Étape 1 (Majoration)** : Pour tout $f \\in E$, $|\\varphi(f)| \\le \\int_0^1 |f(t)| dt \\le \\|f\\|_\\infty \\int_0^1 1 dt = 1 \\cdot \\|f\\|_\\infty$. Donc $\\|\\|\\varphi\\|\\| \\le 1$.",
          "**Étape 2 (Atteinte de la borne)** : Choisir la fonction test $f_0(t) = 1$ pour tout $t \\in [0, 1]$.",
          "**Étape 3 (Évaluation)** : $\\|f_0\\|_\\infty = 1$ et $\\varphi(f_0) = 1$, d'où $|\\varphi(f_0)| = 1 = 1 \\cdot \\|f_0\\|_\\infty$.",
          "**Conclusion** : La norme subordonnée est exactement $\\|\\|\\varphi\\|\\| = 1$."
        ]
      }
    ],
    "traps": [
      "⚠️ En dimension infinie, deux normes ne sont PAS nécessairement équivalentes (ex. $\\|\\cdot\\|_1$ et $\\|\\cdot\\|_\\infty$ sur $\\mathcal{C}([0, 1])$).",
      "⚠️ L'image directe d'un ouvert par une application continue n'est pas nécessairement un ouvert !"
    ],
    "flashcards": [
      {
        "q": "Quelle est la caractérisation globale d'une fonction continue par les ouverts ?",
        "a": "$f : E \\to F$ est continue ssi l'image réciproque de tout ouvert de $F$ est un ouvert de $E$."
      },
      {
        "q": "Énoncer le théorème d'équivalence des normes en dimension finie.",
        "a": "Sur un espace vectoriel de dimension finie, toutes les normes sont équivalentes."
      }
    ]
  },
  "L3-CMP": {
    "title": "L3-CMP : Compacité, Connexité et Théorème de Heine",
    "domain": "Topologie",
    "objectives": [
      "Caractériser les parties compactes par la propriété de Borel-Lebesgue et de Bolzano-Weierstrass.",
      "Énoncer le théorème de Heine-Borel en dimension finie et le théorème des bornes atteintes (Weierstrass).",
      "Appliquer le théorème de Heine sur la continuité uniforme.",
      "Définir la connexité et la connexité par arcs, et énoncer le théorème des valeurs intermédiaires généralisé."
    ],
    "keyPoints": [
      {
        "title": "1. Compacité : Borel-Lebesgue et Bolzano-Weierstrass",
        "content": "• **Propriété de Borel-Lebesgue** : Un espace métrique $K$ est **compact** si de tout recouvrement ouvert $K = \\bigcup_{i \\in I} U_i$, on peut extraire un **sous-recouvrement fini** :\n$$\\exists \\, i_1, \\dots, i_N \\in I, \\quad K = \\bigcup_{k=1}^N U_{i_k}$$\n• **Caractérisation de Bolzano-Weierstrass** : Dans un espace métrique, $K$ est compact ssi toute suite $(x_n)_{n \\in \\mathbb{N}}$ d'éléments de $K$ admet une **sous-suite convergente** dont la limite appartient à $K$.\n• **Théorème de Heine-Borel (Riesz)** :\n  - Dans $\\mathbb{R}^n$ (ou tout EVN de dimension finie), une partie $K$ est compacte si et seulement si elle est **fermée et bornée**.\n  - **Théorème de Riesz** : Un EVN est de dimension finie si et seulement si sa boule unité fermée $\\bar{B}(0, 1)$ est compacte."
      },
      {
        "title": "2. Théorèmes fondamentaux sur les compacts (Weierstrass et Heine)",
        "content": "• **Conservation de la compacité** : Si $K$ est compact et $f : K \\to F$ est continue, alors l'image $f(K)$ est un compact de $F$.\n• **Théorème des bornes atteintes (Weierstrass)** : Toute fonction continue $f : K \\to \\mathbb{R}$ sur un compact $K$ non vide est bornée et atteint ses bornes :\n$$\\exists x_{\\min}, x_{\\max} \\in K, \\quad f(x_{\\min}) = \\inf_{x \\in K} f(x) \\quad \\text{et} \\quad f(x_{\\max}) = \\sup_{x \\in K} f(x)$$\n• **Théorème de Heine** : Toute application continue $f : K \\to F$ définie sur un compact $K$ est **uniformément continue** :\n$$\\forall \\varepsilon > 0, \\; \\exists \\delta > 0, \\; \\forall x, y \\in K, \\quad d(x, y) < \\delta \\implies d(f(x), f(y)) < \\varepsilon$$"
      },
      {
        "title": "3. Connexité et Connexité par Arcs",
        "content": "• **Espace connexe** : Un espace topologique $E$ est **connexe** s'il ne peut pas être partitionné en deux ouverts non vides disjoints (les seuls sous-ensembles à la fois ouverts et fermés sont $\\emptyset$ et $E$).\n• **Parties connexes de $\\mathbb{R}$** : Les seules parties connexes de $\\mathbb{R}$ sont les **intervalles**.\n• **Connexité par arcs** : $E$ est connexe par arcs si pour tous points $x, y \\in E$, il existe un chemin continu $\\gamma : [0, 1] \\to E$ tel que $\\gamma(0) = x$ et $\\gamma(1) = y$.\n• **Hiérarchie** : Connexe par arcs $\\implies$ Connexe (la réciproque est fausse en général, mais vraie pour les ouverts de $\\mathbb{R}^n$).\n• **TVI Généralisé** : Si $E$ est connexe et $f : E \\to \\mathbb{R}$ est continue, alors $f(E)$ est un intervalle de $\\mathbb{R}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer qu'une partie n'est pas compacte",
        "example": "Montrer que $A = \\{f \\in \\mathcal{C}([0, 1], \\mathbb{R}) \\mid \\|f\\|_\\infty \\le 1\\}$ n'est pas compact dans $(\\mathcal{C}([0, 1]), \\|\\cdot\\|_\\infty)$.",
        "steps": [
          "**Étape 1 (Construire une suite de fonctions)** : Poser $f_n(x) = x^n$ pour $n \\ge 1$. Chaque $f_n$ est continue et $\\|f_n\\|_\\infty = 1$, donc $f_n \\in A$.",
          "**Étape 2 (Vérifier la convergence ponctuelle)** : La suite $(f_n)$ converge simplement vers la fonction discontinue $g(x) = 0$ pour $x \\in [0, 1[$ et $g(1) = 1$.",
          "**Étape 3 (Absence de sous-suite convergente en norme infinie)** : Pour $n \\neq m$, $\\|f_n - f_m\\|_\\infty$ ne tend pas vers 0. Aucune sous-suite ne converge vers une fonction continue.",
          "**Conclusion** : D'après Bolzano-Weierstrass (ou le théorème de Riesz car $\\dim = \\infty$), $A = \\bar{B}(0, 1)$ n'est pas compacte."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un espace de dimension infinie, un fermé borné n'est PAS nécessairement compact (théorème de Riesz) !",
      "⚠️ La continuité uniforme est une propriété globale : $f(x) = x^2$ est continue sur $\\mathbb{R}$ mais PAS uniformément continue sur $\\mathbb{R}$ (elle l'est sur tout compact $[a, b]$ par Heine)."
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème de Heine.",
        "a": "Toute application continue d'un espace métrique compact dans un espace métrique est uniformément continue."
      },
      {
        "q": "Énoncer le Théorème de Riesz sur les EVN.",
        "a": "Un espace vectoriel normé est de dimension finie si et seulement si sa boule unité fermée est compacte."
      }
    ]
  },
  "L3-MES": {
    "title": "L3-MES : Théorie de la Mesure et Intégration de Lebesgue",
    "domain": "Théorie de la Mesure",
    "objectives": [
      "Définir axiomatiquement les tribus, les mesures positives et la mesure de Lebesgue.",
      "Construire l'intégrale de Lebesgue pour les fonctions étagées positives puis mesurables.",
      "Maîtriser les théorèmes de passage à la limite : Convergence monotone (Beppo Levi), Lemme de Fatou, Convergence dominée.",
      "Définir les espaces $L^p(\\mu)$, les inégalités de Hölder et Minkowski, et le théorème de Fubini-Tonelli."
    ],
    "keyPoints": [
      {
        "title": "1. Tribus ($\\sigma$-algèbres) et Mesures Positives",
        "content": "• **Tribu** : Une famille $\\mathcal{T} \\subset \\mathcal{P}(X)$ est une **tribu** sur $X$ ssi :\n  1. $X \\in \\mathcal{T}$.\n  2. Stabilité par passage au complémentaire : $A \\in \\mathcal{T} \\implies X \\setminus A \\in \\mathcal{T}$.\n  3. Stabilité par réunion dénombrable : $\\forall (A_n)_{n \\in \\mathbb{N}} \\in \\mathcal{T}^\\mathbb{N}, \\; \\bigcup_{n=0}^\\infty A_n \\in \\mathcal{T}$.\n• **Tribu borélienne $\\mathcal{B}(X)$** : Tribu engendrée par les ouverts de l'espace topologique $X$.\n• **Mesure positive** : Une application $\\mu : \\mathcal{T} \\to [0, +\\infty]$ est une **mesure** ssi $\\mu(\\emptyset) = 0$ et pour toute suite $(A_n)$ d'éléments deux à deux disjoints :\n$$\\mu\\left(\\bigsqcup_{n=0}^\\infty A_n\\right) = \\sum_{n=0}^\\infty \\mu(A_n) \\quad (\\sigma\\text{-additivité})$$\n• **Mesure de Lebesgue $\\lambda$ sur $\\mathbb{R}$** : Unique mesure sur $\\mathcal{B}(\\mathbb{R})$ invariante par translation telle que $\\lambda([a, b]) = b - a$ pour $a \\le b$."
      },
      {
        "title": "2. Construction de l'Intégrale de Lebesgue",
        "content": "• **Fonction mesurable** : $f : X \\to [0, +\\infty]$ est mesurable si pour tout $a \\in \\mathbb{R}$, $f^{-1}(]a, +\\infty]) \\in \\mathcal{T}$.\n• **Fonctions étagées** : $\\varphi = \\sum_{i=1}^m c_i \\mathbf{1}_{A_i}$ ($c_i \\ge 0, A_i \\in \\mathcal{T}$). Son intégrale est $\\int_X \\varphi \\, d\\mu = \\sum_{i=1}^m c_i \\mu(A_i)$.\n• **Pour toute fonction mesurable positive $f \\ge 0$** :\n$$\\int_X f \\, d\\mu = \\sup \\left\\{ \\int_X \\varphi \\, d\\mu \\;\\middle|\\; 0 \\le \\varphi \\le f, \\; \\varphi \\text{ étagée mesurable} \\right\\}$$\n• **Fonctions intégrables $\\mathcal{L}^1(\\mu)$** : $f : X \\to \\mathbb{R}$ est intégrable ssi $|f|$ est mesurable et $\\int_X |f| \\, d\\mu < +\\infty$. On pose $\\int f \\, d\\mu = \\int f^+ \\, d\\mu - \\int f^- \\, d\\mu$."
      },
      {
        "title": "3. Théorèmes de Convergence : Beppo Levi, Fatou, Convergence Dominée",
        "content": "• **Théorème de Convergence Monotone (Beppo Levi)** : Soit $(f_n)_{n \\in \\mathbb{N}}$ une suite de fonctions mesurables positives telles que $0 \\le f_n(x) \\le f_{n+1}(x)$ pour tout $n$ et presque tout $x$. Alors :\n$$\\lim_{n \\to \\infty} \\int_X f_n \\, d\\mu = \\int_X \\left(\\lim_{n \\to \\infty} f_n\\right) d\\mu$$\n• **Lemme de Fatou** : Pour toute suite $(f_n)$ de fonctions mesurables positives :\n$$\\int_X \\liminf_{n \\to \\infty} f_n \\, d\\mu \\le \\liminf_{n \\to \\infty} \\int_X f_n \\, d\\mu$$\n• **Théorème de Convergence Dominée (Lebesgue)** : Soit $(f_n)$ une suite de fonctions mesurables convergeant simplement $\\mu$-presque partout vers $f$. S'il existe $g \\in \\mathcal{L}^1(\\mu)$ (positive) telle que $\\forall n, |f_n(x)| \\le g(x)$ $\\mu$-p.p., alors $f \\in \\mathcal{L}^1(\\mu)$ et :\n$$\\lim_{n \\to \\infty} \\int_X f_n \\, d\\mu = \\int_X f \\, d\\mu \\quad \\text{avec} \\quad \\lim_{n \\to \\infty} \\int_X |f_n - f| \\, d\\mu = 0$$"
      },
      {
        "title": "4. Espaces $L^p(\\mu)$, Inégalités et Théorème de Fubini",
        "content": "• **Espaces $L^p(\\mu)$** : Espace quotient des fonctions $f$ mesurables telles que $\\int_X |f|^p \\, d\\mu < +\\infty$, modulo l'égalité presque partout. Muni de $\\|f\\|_p = \\left(\\int_X |f|^p d\\mu\\right)^{1/p}$, c'est un espace de Banach complet (théorème de Riesz-Fischer).\n• **Inégalité de Hölder** : Pour $p, q \\in [1, +\\infty]$ tels que $\\frac{1}{p} + \\frac{1}{q} = 1$ :\n$$\\int_X |fg| \\, d\\mu \\le \\|f\\|_p \\|g\\|_q$$\n• **Inégalité de Minkowski** : $\\|f + g\\|_p \\le \\|f\\|_p + \\|g\\|_p$.\n• **Théorème de Fubini-Tonelli** : Pour $(X, \\mathcal{T}_X, \\mu)$ et $(Y, \\mathcal{T}_Y, \\nu)$ $\\sigma$-finis :\n  - Si $f \\ge 0$ mesurable, $\\int_{X \\times Y} f \\, d(\\mu \\otimes \\nu) = \\int_X \\left(\\int_Y f(x, y) d\\nu(y)\\right) d\\mu(x) = \\int_Y \\left(\\int_X f(x, y) d\\mu(x)\\right) d\\nu(y)$.\n  - Si $f \\in L^1(\\mu \\otimes \\nu)$, l'égalité des intégrales itérées reste vraie."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Appliquer le Théorème de Convergence Dominée",
        "example": "Calculer la limite quand $n \\to \\infty$ de $I_n = \\int_0^1 \\frac{n \\sin(x/n)}{1 + x^2} dx$.",
        "steps": [
          "**Étape 1 (Convergence simple)** : Pour tout $x \\in ]0, 1]$, quand $n \\to \\infty$, $n \\sin(x/n) = n(x/n + o(1/n)) \\to x$. Donc $f_n(x) \\to \\frac{x}{1+x^2}$ p.p.",
          "**Étape 2 (Hypothèse de domination)** : Pour $u \\ge 0$, on a $|\\sin(u)| \\le u$. Ainsi $|n \\sin(x/n)| \\le n (x/n) = x \\le 1$ sur $[0, 1]$.",
          "**Étape 3 (Fonction chapeau intégrable)** : $|f_n(x)| \\le \\frac{x}{1+x^2} \\le 1 =: g(x)$. La constante $g(x) = 1$ est intégrable sur le segment borné $[0, 1]$.",
          "**Étape 4 (Conclusion par TCD)** : $\\lim_{n \\to \\infty} I_n = \\int_0^1 \\frac{x}{1+x^2} dx = \\left[\\frac{1}{2} \\ln(1+x^2)\\right]_0^1 = \\frac{\\ln 2}{2}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour le TCD, la domination $|f_n| \\le g$ doit être indépendante de $n$ et $g$ doit impérativement être intégrable !",
      "⚠️ Une fonction intégrable au sens de Riemann sur un segment borné l'est au sens de Lebesgue, mais l'intégrale de Lebesgue gère les intégrales impropres uniquement si la fonction est absolument intégrable ($\\|f\\|_1 < \\infty$)."
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème de Convergence Dominée de Lebesgue.",
        "a": "Si $(f_n)$ converge simplement p.p. vers $f$ et est dominée par $g \\in L^1$ ($|f_n| \\le g$), alors $f \\in L^1$ et $\\int f_n d\\mu \\to \\int f d\\mu$."
      },
      {
        "q": "Énoncer le Lemme de Fatou.",
        "a": "Pour toute suite de fonctions mesurables positives $(f_n)$, $\\int \\liminf f_n d\\mu \\le \\liminf \\int f_n d\\mu$."
      }
    ]
  },
  "L3-GRP2": {
    "title": "L3-GRP2 : Actions de groupes, orbites, stabilisateurs et théorèmes de Sylow",
    "domain": "Théorie des Groupes",
    "objectives": [
      "Définir formellement une action de groupe sur un ensemble et le morphisme structurel associé.",
      "Définir orbites et stabilisateurs, et énoncer le Théorème Orbite-Stabilisateur.",
      "Écrire la formule des classes et la formule de Burnside.",
      "Énoncer et appliquer les trois Théorèmes de Sylow pour la classification des groupes finis."
    ],
    "keyPoints": [
      {
        "title": "1. Actions de Groupes et Représentation par Permutations",
        "content": "• **Action de groupe** : Une action à gauche d'un groupe $G$ sur un ensemble $X$ est une application $\\cdot : G \\times X \\to X$ telle que :\n  1. $\\forall x \\in X, \\quad e \\cdot x = x$.\n  2. $\\forall g, h \\in G, \\forall x \\in X, \\quad g \\cdot (h \\cdot x) = (gh) \\cdot x$.\n• **Morphisme associé** : Toute action équivaut à la donnée d'un morphisme de groupes $\\rho : G \\to \\mathfrak{S}(X)$ défini par $\\rho(g)(x) = g \\cdot x$.\n• **Vocabulaire** :\n  - L'action est **fidèle** si $\\ker \\rho = \\{e\\}$ (i.e. $\\forall g \\neq e, \\exists x \\in X, g \\cdot x \\neq x$).\n  - L'action est **transitive** s'il n'y a qu'une seule orbite ($\\forall x, y \\in X, \\exists g \\in G, g \\cdot x = y$)."
      },
      {
        "title": "2. Orbites, Stabilisateurs et Théorème Fondamental",
        "content": "• **Orbite** : L'orbite de $x \\in X$ est l'ensemble $\\mathcal{O}_x = G \\cdot x = \\{g \\cdot x \\mid g \\in G\\} \\subset X$. Les orbites forment une partition de $X$.\n• **Stabilisateur** : Le stabilisateur de $x$ est $G_x = \\text{Stab}(x) = \\{g \\in G \\mid g \\cdot x = x\\}$. C'est un sous-groupe de $G$ ($G_x \\le G$).\n• **Théorème Orbite-Stabilisateur** : Pour tout $x \\in X$, l'application $g G_x \\mapsto g \\cdot x$ est une bijection de $G / G_x$ sur $\\mathcal{O}_x$. Si $G$ est fini :\n$$|\\mathcal{O}_x| = [G : G_x] = \\frac{|G|}{|G_x|}$$\nEn particulier, le cardinal de chaque orbite divise l'ordre du groupe $|G|$."
      },
      {
        "title": "3. Équation aux Classes et Formule de Burnside",
        "content": "• **Action par conjugaison** : $G$ agit sur lui-même par conjugaison : $g \\cdot x = g x g^{-1}$. Les orbites sont les classes de conjugaison, et les stabilisateurs sont les centralisateurs $C_G(x) = \\{g \\in G \\mid gx = xg\\}$.\n• **Équation aux classes** : Si $G$ est fini, en partitionnant suivant les orbites de conjugaison :\n$$|G| = |Z(G)| + \\sum_{i=1}^k [G : C_G(x_i)]$$\noù $Z(G) = \\{z \\in G \\mid \\forall g \\in G, gz = zg\\}$ est le centre de $G$, et les $x_i$ sont les représentants des classes non réduites à un élément.\n• **Application fondamentale** : Le centre de tout $p$-groupe (groupe d'ordre $p^k$, avec $p$ premier) est non trivial ($|Z(G)| \\ge p$).\n• **Formule de Burnside** : Le nombre d'orbites de l'action est donné par : $|X / G| = \\frac{1}{|G|} \\sum_{g \\in G} |\\text{Fix}(g)|$ où $\\text{Fix}(g) = \\{x \\in X \\mid g \\cdot x = x\\}$."
      },
      {
        "title": "4. Théorèmes de Sylow",
        "content": "Soit $G$ un groupe fini d'ordre $|G| = p^\\alpha m$ avec $p$ premier et $p \\nmid m$ ($\\alpha \\ge 1$).\n• **Définition** : Un sous-groupe de $G$ d'ordre $p^\\alpha$ est appelé un **$p$-sous-groupe de Sylow** (ou $p$-Sylow).\n• **Premier Théorème de Sylow** : Il existe au moins un $p$-Sylow dans $G$.\n• **Deuxième Théorème de Sylow** : Tous les $p$-Sylow de $G$ sont deux à deux **conjugués** : si $P_1, P_2$ sont deux $p$-Sylow, $\\exists g \\in G, P_2 = g P_1 g^{-1}$. Tout $p$-sous-groupe est contenu dans un $p$-Sylow.\n• **Troisième Théorème de Sylow** : Le nombre $n_p$ de $p$-Sylow de $G$ vérifie :\n$$n_p \\equiv 1 \\pmod p \\quad \\text{et} \\quad n_p \\text{ divise } m$$\n• **Corollaire de simplicité** : Un $p$-Sylow $P$ est unique ($n_p = 1$) si et seulement si $P$ est **distingué** ($P \\trianglelefteq G$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Montrer qu'un groupe d'ordre 15 n'est pas simple et est cyclique",
        "example": "Soit $G$ un groupe d'ordre $|G| = 15 = 3 \\times 5$. Montrer que $G \\simeq \\mathbb{Z}/15\\mathbb{Z}$.",
        "steps": [
          "**Étape 1 (Calcul de $n_5$)** : D'après Sylow 3, $n_5 \\equiv 1 \\pmod 5$ et $n_5 \\mid 3$. La seule possibilité est $n_5 = 1$. Le 5-Sylow $P_5$ est donc unique et $P_5 \\trianglelefteq G$.",
          "**Étape 2 (Calcul de $n_3$)** : De même, $n_3 \\equiv 1 \\pmod 3$ et $n_3 \\mid 5$. La seule possibilité est $n_3 = 1$. Le 3-Sylow $P_3$ est unique et $P_3 \\trianglelefteq G$.",
          "**Étape 3 (Produit direct)** : On a $P_3 \\cap P_5 = \\{e\\}$ par le théorème de Lagrange (ordres 3 et 5 premiers entre eux). Comme les deux sous-groupes sont distingués, $G \\simeq P_3 \\times P_5$.",
          "**Conclusion** : $P_3 \\simeq \\mathbb{Z}/3\\mathbb{Z}$ et $P_5 \\simeq \\mathbb{Z}/5\\mathbb{Z}$. Par le lemme chinois, $G \\simeq \\mathbb{Z}/15\\mathbb{Z}$ : tout groupe d'ordre 15 est cyclique."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans Sylow 3, $n_p$ divise $m = |G|/p^\\alpha$, et NON PAS l'ordre complet $|G|$ !",
      "⚠️ Le stabilisateur $G_x$ dépend du point $x$ : pour $y = g \\cdot x$, on a $G_y = g G_x g^{-1}$ (stabilisateurs conjugués)."
    ],
    "flashcards": [
      {
        "q": "Énoncer la relation Orbite-Stabilisateur.",
        "a": "Pour toute action de $G$ sur $X$ et tout $x \\in X$, $|\\mathcal{O}_x| = [G : G_x] = \\frac{|G|}{|G_x|}$."
      },
      {
        "q": "Quelles sont les conditions sur le nombre $n_p$ de $p$-Sylow d'un groupe d'ordre $p^\\alpha m$ ($p \\nmid m$) ?",
        "a": "$n_p \\equiv 1 \\pmod p$ et $n_p$ divise $m$."
      }
    ]
  },
  "L3-ANN": {
    "title": "L3-ANN : Anneaux, idéaux, anneaux principaux et factoriels, polynômes",
    "domain": "Algèbre Commutative",
    "objectives": [
      "Définir les anneaux, sous-anneaux, idéaux et construire les anneaux quotients $A/I$.",
      "Distinguer idéaux premiers et idéaux maximaux par les quotients $A/I$.",
      "Maîtriser la hiérarchie : Anneau euclidien $\\implies$ Anneau principal (PID) $\\implies$ Anneau factoriel (UFD).",
      "Appliquer les critères d'irréductibilité dans $\\mathbb{K}[X]$ et $\\mathbb{Z}[X]$ (Eisenstein, Gauss, réduction modulo $p$)."
    ],
    "keyPoints": [
      {
        "title": "1. Anneaux, Idéaux et Anneaux Quotients",
        "content": "• **Axiomatique d'un anneau** : $(A, +, \\cdot)$ est un **anneau unitaire** si $(A, +)$ est un groupe abélien, $\\cdot$ est associatif, possède un élément neutre $1_A \\neq 0_A$, et est distributif par rapport à $+$.\n• **Idéal** : Un sous-ensemble $I \\subset A$ est un **idéal** (bilatère) de $A$ si :\n  1. $(I, +)$ est un sous-groupe de $(A, +)$.\n  2. $\\forall a \\in A, \\forall x \\in I, \\quad ax \\in I \\quad \\text{et} \\quad xa \\in I$ (absorption).\n• **Anneau quotient $A/I$** : Si $I$ est un idéal de $A$, la relation $x \\sim y \\iff x - y \\in I$ est compatible avec l'addition et la multiplication. L'ensemble quotient $A/I$ est muni d'une structure canonique d'anneau.\n• **Premier Théorème d'Isomorphisme pour les anneaux** : Pour tout morphisme d'anneaux $\\varphi : A \\to B$, $\\ker(\\varphi)$ est un idéal de $A$ et $A/\\ker(\\varphi) \\simeq \\text{Im}(\\varphi)$."
      },
      {
        "title": "2. Idéaux Premiers et Idéaux Maximaux",
        "content": "Soit $A$ un anneau commutatif unitaire non nul.\n• **Idéal premier** : Un idéal propre $P \\subsetneq A$ est **premier** ssi :\n$$\\forall a, b \\in A, \\quad ab \\in P \\implies a \\in P \\; \\text{ ou } \\; b \\in P$$\n  - **Caractérisation** : $P$ est premier $\\iff A/P$ est un **anneau intègre**.\n• **Idéal maximal** : Un idéal propre $M \\subsetneq A$ est **maximal** ssi les seuls idéaux contenant $M$ sont $M$ et $A$.\n  - **Caractérisation** : $M$ est maximal $\\iff A/M$ est un **corps**.\n• **Conséquence** : Tout idéal maximal est premier (car tout corps est intègre). La réciproque est fausse en général (ex. $(0)$ ou $(X)$ dans $\\mathbb{Z}[X]$)."
      },
      {
        "title": "3. Anneaux Euclidiens, Principaux et Factoriels",
        "content": "• **Idéal principal** : Idéal engendré par un seul élément : $(a) = aA = \\{ax \\mid x \\in A\\}$.\n• **Anneau principal (PID)** : Anneau intègre dans lequel tout idéal est principal. Théorème de Bézout : $(a) + (b) = (d) \\iff d = \\text{pgcd}(a, b)$, et $\\exists u, v \\in A, au + bv = d$.\n• **Anneau euclidien** : Anneau intègre muni d'un stathme $v : A \\setminus \\{0\\} \\to \\mathbb{N}$ autorisant la division euclidienne :\n$$\\forall a \\in A, \\forall b \\in A \\setminus \\{0\\}, \\; \\exists q, r \\in A, \\quad a = bq + r \\quad \\text{avec } r = 0 \\; \\text{ ou } \\; v(r) < v(b)$$\n• **Anneau factoriel (UFD)** : Anneau intègre où tout élément non nul et non inversible se décompose de façon unique (à l'ordre et aux inversibles près) en produit d'éléments irréductibles.\n• **Hiérarchie fondamentale** :\n$$\\text{Corps} \\subset \\text{Anneau Euclidien} \\subset \\text{Anneau Principal} \\subset \\text{Anneau Factoriel} \\subset \\text{Anneau Intègre}$$\n*Exemples* : $\\mathbb{Z}$ et $\\mathbb{K}[X]$ sont euclidiens (donc principaux et factoriels). $\\mathbb{Z}[X]$ est factoriel mais **pas** principal (l'idéal $(2, X)$ n'est pas principal)."
      },
      {
        "title": "4. Polynômes et Critères d'Irréductibilité",
        "content": "• **Lemme de Gauss** : Si $A$ est factoriel, alors l'anneau des polynômes $A[X]$ est factoriel.\n• **Critère d'Eisenstein** : Soit $A$ un anneau factoriel et $P(X) = a_n X^n + \\dots + a_1 X + a_0 \\in A[X]$ avec $n \\ge 1$. S'il existe un élément irréductible $p \\in A$ tel que :\n  1. $p \\nmid a_n$,\n  2. $\\forall i \\in \\{0, \\dots, n-1\\}, \\; p \\mid a_i$,\n  3. $p^2 \\nmid a_0$,\nalors $P$ est irréductible dans $\\text{Frac}(A)[X]$ (et irréductible dans $A[X]$ si $P$ est primitif).\n• **Critère de réduction modulo $p$** : Soit $P \\in \\mathbb{Z}[X]$ unitaire. Si pour un nombre premier $p$ ne divisant pas le coefficient dominant, $\\bar{P} \\in \\mathbb{F}_p[X]$ est irréductible, alors $P$ est irréductible dans $\\mathbb{Q}[X]$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Montrer qu'un polynôme cyclotomique est irréductible via Eisenstein",
        "example": "Montrer que $\\Phi_p(X) = X^{p-1} + X^{p-2} + \\dots + X + 1$ est irréductible dans $\\mathbb{Q}[X]$ pour $p$ premier.",
        "steps": [
          "**Étape 1 (Changement de variable)** : Considérer le translaté $Q(Y) = \\Phi_p(Y + 1) = \\frac{(Y+1)^p - 1}{Y}$.",
          "**Étape 2 (Développement par la formule du binôme)** : $Q(Y) = \\frac{1}{Y} \\sum_{k=1}^p \\binom{p}{k} Y^k = Y^{p-1} + \\binom{p}{p-1} Y^{p-2} + \\dots + \\binom{p}{2} Y + p$.",
          "**Étape 3 (Vérification des critères d'Eisenstein)** : Le coefficient dominant est 1 ($p \\nmid 1$). Pour tout $1 \\le k \\le p-1$, $p \\mid \\binom{p}{k}$. Le coefficient constant est $p$, qui n'est pas divisible par $p^2$.",
          "**Conclusion** : D'après le critère d'Eisenstein avec le nombre premier $p$, $Q(Y)$ est irréductible sur $\\mathbb{Q}$, donc $\\Phi_p(X)$ est irréductible dans $\\mathbb{Q}[X]$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un anneau quelconque, irréductible n'est pas synonyme de premier ! L'équivalence est garantie dans les anneaux factoriels (lemme d'Euclide).",
      "⚠️ $\\mathbb{Z}[X]$ n'est pas un anneau principal : l'idéal $(2, X)$ nécessite deux générateurs et $1 \\notin (2, X)$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la caractérisation d'un idéal maximal par le quotient ?",
        "a": "Dans un anneau commutatif unitaire, un idéal $M$ est maximal si et seulement si le quotient $A/M$ est un corps."
      },
      {
        "q": "Énoncer le critère d'Eisenstein pour $P(X) = \\sum_{i=0}^n a_i X^i$.",
        "a": "$p \\nmid a_n$, $\\forall i < n, p \\mid a_i$ et $p^2 \\nmid a_0 \\implies P$ est irréductible sur le corps des fractions."
      }
    ]
  },
  "L3-BAN": {
    "title": "L3-BAN : Espaces vectoriels normés, complétude et espaces de Banach / Hilbert",
    "domain": "Analyse Fonctionnelle",
    "objectives": [
      "Définir les suites de Cauchy et les espaces de Banach (espaces vectoriels normés complets).",
      "Définir les espaces de Hilbert, l'orthogonalité, et énoncer le Théorème de Projection sur un convexe fermé.",
      "Énoncer et appliquer le Théorème de Représentation de Riesz pour le dual d'un espace de Hilbert.",
      "Comprendre les grands théorèmes de l'analyse fonctionnelle : Théorème de Baire, Banach-Steinhaus, et Théorème du Point Fixe de Picard."
    ],
    "keyPoints": [
      {
        "title": "1. Suites de Cauchy et Espaces de Banach",
        "content": "• **Suite de Cauchy** : Une suite $(x_n)_{n \\in \\mathbb{N}}$ dans un EVN $(E, \\|\\cdot\\|)$ est de Cauchy si :\n$$\\forall \\varepsilon > 0, \\; \\exists N \\in \\mathbb{N}, \\; \\forall p, q \\ge N, \\quad \\|x_p - x_q\\| < \\varepsilon$$\n• **Espace complet** : Un espace métrique est dit **complet** si toute suite de Cauchy y est convergente.\n• **Espace de Banach** : Un **espace de Banach** est un espace vectoriel normé complet.\n  - En dimension finie, tout EVN est un espace de Banach.\n  - $(\\mathcal{C}([a, b], \\mathbb{R}), \\|\\cdot\\|_\\infty)$ et les espaces $L^p(\\mu)$ sont des espaces de Banach.\n  - Contre-exemple : $(\\mathcal{C}([0, 1], \\mathbb{R}), \\|\\cdot\\|_1)$ n'est **pas** complet."
      },
      {
        "title": "2. Espaces de Hilbert et Théorème de Projection Orthogonale",
        "content": "• **Espace de Hilbert** : Un espace préhilbertien $(H, \\langle \\cdot, \\cdot \\rangle)$ complet pour la norme euclidienne/hermitienne associée $\\|x\\| = \\sqrt{\\langle x, x \\rangle}$.\n• **Identité du parallélogramme** : Un EVN est préhilbertien ssi sa norme vérifie :\n$$\\|x + y\\|^2 + \\|x - y\\|^2 = 2(\\|x\\|^2 + \\|y\\|^2)$$\n• **Théorème de projection sur un convexe fermé** : Soit $C$ un sous-ensemble convexe fermé non vide de $H$. Pour tout $x \\in H$, il existe un unique $y_0 = p_C(x) \\in C$ tel que :\n$$\\|x - y_0\\| = \\text{dist}(x, C) = \\inf_{y \\in C} \\|x - y\\|$$\nCaractérisation variationnelle : $\\forall y \\in C, \\; \\text{Re}\\langle x - y_0, y - y_0 \\rangle \\le 0$.\n• Si $F$ est un sous-espace vectoriel fermé, la projection $p_F(x)$ est linéaire et caractérisée par $x - p_F(x) \\in F^\\perp$, avec décomposition orthogonale : $H = F \\oplus F^\\perp$."
      },
      {
        "title": "3. Dualité et Théorème de Représentation de Riesz",
        "content": "• **Dual topologique $E^*$** : Espace $\\mathcal{L}(E, \\mathbb{K})$ des formes linéaires continues sur $E$, muni de la norme $\\|\\|\\varphi\\|\\| = \\sup_{\\|x\\| \\le 1} |\\varphi(x)|$. Le dual est toujours un espace de Banach.\n• **Théorème de Représentation de Riesz-Fréchet** : Soit $H$ un espace de Hilbert réel (ou complexe). Pour toute forme linéaire continue $\\varphi \\in H^*$, il existe un unique vecteur $y \\in H$ tel que :\n$$\\forall x \\in H, \\quad \\varphi(x) = \\langle x, y \\rangle$$\nDe plus, l'application $y \\mapsto \\varphi$ est une isométrie : $\\|\\|\\varphi\\|\\|_{H^*} = \\|y\\|_H$."
      },
      {
        "title": "4. Théorème de Baire et Théorème du Point Fixe de Picard",
        "content": "• **Théorème de Baire** : Dans un espace métrique complet, toute intersection dénombrable d'ouverts denses est dense (un espace complet n'est pas réunion dénombrable de fermés d'intérieurs vides).\n• **Conséquences fondamentales** :\n  - **Théorème de Banach-Steinhaus (borne uniforme)** : Une famille d'opérateurs continus ponctuellement bornée sur un Banach est uniformément bornée.\n  - **Théorème de l'application ouverte** : Tout opérateur linéaire continu surjectif entre Banach est une application ouverte.\n• **Théorème du point fixe de Banach-Picard** : Soit $(X, d)$ un espace métrique complet non vide et $f : X \\to X$ une application $k$-contractante ($k \\in [0, 1[$) : $\\forall x, y, d(f(x), f(y)) \\le k d(x, y)$. Alors $f$ admet un unique point fixe $x^* \\in X$, et pour tout $x_0$, la suite $x_{n+1} = f(x_n)$ converge vers $x^*$ avec majoration géométrique : $d(x_n, x^*) \\le \\frac{k^n}{1-k} d(x_0, x_1)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver la projection orthogonale d'un vecteur sur un sous-espace",
        "example": "Dans $H = L^2([-1, 1])$, projeter $f(t) = t^2$ sur le sous-espace $F = \\text{Vect}(1, t)$.",
        "steps": [
          "**Étape 1 (Orthogonalité de la base)** : Calculer le produit scalaire $\\langle 1, t \\rangle = \\int_{-1}^1 t \\, dt = 0$. La famille $(e_0 = 1, e_1 = t)$ est une base orthogonale de $F$.",
          "**Étape 2 (Normes des vecteurs de base)** : $\\|e_0\\|^2 = \\int_{-1}^1 1 dt = 2$ et $\\|e_1\\|^2 = \\int_{-1}^1 t^2 dt = \\frac{2}{3}$.",
          "**Étape 3 (Formule des coefficients de Fourier)** : $p_F(f) = \\frac{\\langle f, e_0 \\rangle}{\\|e_0\\|^2} e_0 + \\frac{\\langle f, e_1 \\rangle}{\\|e_1\\|^2} e_1$.\n- $\\langle f, e_0 \\rangle = \\int_{-1}^1 t^2 dt = \\frac{2}{3}$.\n- $\\langle f, e_1 \\rangle = \\int_{-1}^1 t^3 dt = 0$ (parité impaire).",
          "**Conclusion** : $p_F(f) = \\frac{2/3}{2} \\cdot 1 + 0 = \\frac{1}{3}$. Le meilleur polynôme de degré $\\le 1$ approchant $t^2$ au sens des moindres carrés est la constante $\\frac{1}{3}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour que le théorème de projection s'applique, le sous-espace $F$ doit obligatoirement être **fermé** (ce qui est toujours vrai en dimension finie, mais pas en dimension infinie) !",
      "⚠️ L'identité du parallélogramme caractérise exclusivement les normes issues d'un produit scalaire (les normes $\\|\\cdot\\|_p$ pour $p \\neq 2$ ne la vérifient pas)."
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème de Représentation de Riesz dans un espace de Hilbert $H$.",
        "a": "Pour toute forme linéaire continue $\\varphi \\in H^*$, il existe un unique $y \\in H$ tel que $\\varphi(x) = \\langle x, y \\rangle$, avec $\\|\\|\\varphi\\|\\| = \\|y\\|$."
      },
      {
        "q": "Quelle relation caractérise les normes hilbertiennes ?",
        "a": "L'identité du parallélogramme : $\\|x+y\\|^2 + \\|x-y\\|^2 = 2(\\|x\\|^2 + \\|y\\|^2)$."
      }
    ]
  },
  "L3-SDF": {
    "title": "L3-SDF : Séries de fonctions et convergence uniforme / normale",
    "domain": "Analyse",
    "objectives": [
      "Distinguer convergence simple, uniforme et normale pour une série de fonctions $\\sum u_n(x)$.",
      "Énoncer les théorèmes de continuité et de double limite pour la somme d'une série de fonctions.",
      "Justifier l'intégration et la dérivation terme à terme d'une série de fonctions.",
      "Connaître le premier théorème de Dini et le théorème d'approximation de Weierstrass."
    ],
    "keyPoints": [
      {
        "title": "1. Modes de Convergence des Séries de Fonctions",
        "content": "Soit $\\sum_{n \\ge 0} u_n$ une série de fonctions définies sur un ensemble $I \\subset \\mathbb{R}$ (ou $\\mathbb{C}$).\n• **Convergence simple** : Pour tout $x \\in I$, la série numérique $\\sum_{n=0}^\\infty u_n(x)$ converge. Sa somme est notée $S(x) = \\sum_{n=0}^\\infty u_n(x)$.\n• **Convergence uniforme** : La suite des sommes partielles $S_n = \\sum_{k=0}^n u_k$ converge uniformément vers $S$ sur $I$ :\n$$\\|S - S_n\\|_{\\infty, I} = \\sup_{x \\in I} \\left| \\sum_{k=n+1}^\\infty u_k(x) \\right| \\xrightarrow[n \\to \\infty]{} 0$$\n• **Convergence normale** : La série numérique des normes sup converge :\n$$\\sum_{n=0}^\\infty \\|u_n\\|_{\\infty, I} = \\sum_{n=0}^\\infty \\sup_{x \\in I} |u_n(x)| < +\\infty$$\n• **Hiérarchie fondamentale** : Convergence normale $\\implies$ Convergence uniforme $\\implies$ Convergence simple."
      },
      {
        "title": "2. Théorèmes de Continuité et de Double Limite",
        "content": "• **Théorème de continuité** : Si toutes les fonctions $u_n$ sont **continues** sur $I$ et si la série $\\sum u_n$ **converge uniformément** sur tout segment (ou compact) de $I$, alors la somme :\n$$S(x) = \\sum_{n=0}^\\infty u_n(x)$$\nest une fonction **continue** sur $I$.\n• **Théorème de la double limite** : Soit $x_0$ un point adhérent à $I$. Si $\\sum u_n$ converge uniformément sur $I$ et si pour tout $n$, $\\lim_{x \\to x_0} u_n(x) = \\ell_n$, alors la série $\\sum \\ell_n$ converge et :\n$$\\lim_{x \\to x_0} \\sum_{n=0}^\\infty u_n(x) = \\sum_{n=0}^\\infty \\lim_{x \\to x_0} u_n(x) = \\sum_{n=0}^\\infty \\ell_n$$"
      },
      {
        "title": "3. Intégration et Dérivation Terme à Terme",
        "content": "• **Intégration terme à terme sur un segment $[a, b]$** : Si chaque $u_n$ est continue sur $[a, b]$ et si $\\sum u_n$ converge **uniformément** sur $[a, b]$, alors :\n$$\\int_a^b \\left( \\sum_{n=0}^\\infty u_n(t) \\right) dt = \\sum_{n=0}^\\infty \\int_a^b u_n(t) \\, dt$$\n• **Dérivation terme à terme** : Soit $I$ un intervalle de $\\mathbb{R}$. Si :\n  1. Pour tout $n$, $u_n$ est de classe $\\mathcal{C}^1$ sur $I$,\n  2. Il existe au moins un point $x_0 \\in I$ où la série numérique $\\sum u_n(x_0)$ converge,\n  3. La série des dérivées $\\sum u_n'$ converge **uniformément** sur tout compact de $I$,\nalors la somme $S = \\sum_{n=0}^\\infty u_n$ est de classe $\\mathcal{C}^1$ sur $I$, et pour tout $x \\in I$ :\n$$S'(x) = \\left( \\sum_{n=0}^\\infty u_n(x) \\right)' = \\sum_{n=0}^\\infty u_n'(x)$$"
      },
      {
        "title": "4. Théorème de Dini et Approximation de Weierstrass",
        "content": "• **Premier Théorème de Dini** : Soit $K$ un compact et $(f_n)$ une suite de fonctions continues à valeurs réelles convergeant simplement vers une fonction continue $f$. Si pour tout $x \\in K$, la suite $(f_n(x))$ est monotone en $n$, alors la convergence est **uniforme** sur $K$.\n• **Théorème d'Approximation Polynomiale de Weierstrass** : Pour toute fonction continue $f : [a, b] \\to \\mathbb{R}$, il existe une suite de polynômes $(P_n)_{n \\in \\mathbb{N}}$ convergeant uniformément vers $f$ sur $[a, b]$ :\n$$\\lim_{n \\to \\infty} \\|f - P_n\\|_{\\infty, [a, b]} = 0$$\nAutrement dit, $\\mathbb{R}[X]$ est dense dans $(\\mathcal{C}([a, b], \\mathbb{R}), \\|\\cdot\\|_\\infty)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Étudier la régularité $\\mathcal{C}^1$ d'une somme de série de fonctions",
        "example": "Montrer que $S(x) = \\sum_{n=1}^\\infty \\frac{\\sin(nx)}{n^3}$ est continue et de classe $\\mathcal{C}^1$ sur $\\mathbb{R}$.",
        "steps": [
          "**Étape 1 (Convergence normale de la série)** : Pour tout $x \\in \\mathbb{R}$, $|u_n(x)| = |\\frac{\\sin(nx)}{n^3}| \\le \\frac{1}{n^3}$. Comme $\\sum \\frac{1}{n^3}$ est une série de Riemann convergente ($3 > 1$), $\\sum u_n$ converge normalement sur $\\mathbb{R}$.",
          "**Étape 2 (Continuité)** : Comme chaque $u_n$ est continue et la convergence est uniforme sur $\\mathbb{R}$, la somme $S$ est continue sur $\\mathbb{R}$.",
          "**Étape 3 (Dérivation et convergence de la série dérivée)** : $u_n'(x) = \\frac{\\cos(nx)}{n^2}$. On a $\\|u_n'\\|_\\infty \\le \\frac{1}{n^2}$. Comme $\\sum \\frac{1}{n^2}$ converge, $\\sum u_n'$ converge normalement (donc uniformément) sur $\\mathbb{R}$.",
          "**Conclusion** : D'après le théorème de dérivation terme à terme, $S$ est de classe $\\mathcal{C}^1$ sur $\\mathbb{R}$ et $S'(x) = \\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour la dérivation terme à terme, la convergence uniforme de $\\sum u_n$ n'est PAS requise : c'est la convergence uniforme de la série des dérivées $\\sum u_n'$ qui est indispensable !",
      "⚠️ La convergence simple ne préserve ni la continuité, ni l'intégrabilité, ni la dérivation."
    ],
    "flashcards": [
      {
        "q": "Quelle condition sur $\\sum u_n'$ assure que $(\\sum u_n)' = \\sum u_n'$ ?",
        "a": "La convergence uniforme de la série des dérivées $\\sum u_n'$ sur tout compact de l'intervalle."
      },
      {
        "q": "Énoncer le Théorème d'Approximation de Weierstrass.",
        "a": "Toute fonction continue sur un segment $[a, b]$ est limite uniforme d'une suite de fonctions polynomiales."
      }
    ]
  },
  "L3-SER": {
    "title": "L3-SER : Séries entières et rayon de convergence",
    "domain": "Analyse Complexe",
    "objectives": [
      "Énoncer le lemme d'Abel et définir le rayon de convergence d'une série entière $\\sum a_n z^n$.",
      "Calculer le rayon de convergence par la règle de d'Alembert et la formule de Hadamard.",
      "Connaître les propriétés analytiques de la somme à l'intérieur du disque de convergence.",
      "Énoncer le théorème de la limite radiale d'Abel pour le comportement au bord."
    ],
    "keyPoints": [
      {
        "title": "1. Lemme d'Abel et Rayon de Convergence",
        "content": "• **Série entière** : Série de fonctions de la forme $\\sum_{n \\ge 0} a_n z^n$ où $(a_n)_{n \\in \\mathbb{N}} \\in \\mathbb{C}^\\mathbb{N}$ et $z \\in \\mathbb{C}$.\n• **Lemme fondamental d'Abel** : S'il existe $z_0 \\in \\mathbb{C}^*$ tel que la suite $(a_n z_0^n)_{n \\in \\mathbb{N}}$ soit bornée, alors pour tout $z \\in \\mathbb{C}$ tel que $|z| < |z_0|$ :\n  1. La série $\\sum a_n z^n$ converge absolument.\n  2. Pour tout $r < |z_0|$, la série converge normalement sur le disque fermé $\\bar{D}(0, r)$.\n• **Rayon de convergence $R$** : Unique élément $R \\in [0, +\\infty]$ tel que :\n$$R = \\sup \\left\\{ r \\ge 0 \\;\\middle|\\; (|a_n| r^n)_{n \\in \\mathbb{N}} \\text{ est bornée} \\right\\}$$\n  - Pour $|z| < R$ : convergence absolue.\n  - Pour $|z| > R$ : divergence grossière (le terme général ne tend pas vers 0)."
      },
      {
        "title": "2. Règles de Calcul du Rayon de Convergence",
        "content": "• **Règle de d'Alembert** : Si $\\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| = \\ell \\in [0, +\\infty]$, alors le rayon de convergence est :\n$$R = \\frac{1}{\\ell} \\quad (\\text{avec la convention } 1/0 = +\\infty \\; \\text{et} \\; 1/\\infty = 0)$$\n• **Formule de Cauchy-Hadamard** : Pour toute série entière :\n$$\\frac{1}{R} = \\limsup_{n \\to \\infty} |a_n|^{1/n}$$\n• **Règles de comparaison** :\n  - Si $|a_n| \\le |b_n|$ à partir d'un certain rang, alors $R_a \\ge R_b$.\n  - Si $a_n \\sim b_n$ (ou $a_n = O(b_n)$ et inversement), alors $R_a = R_b$.\n  - Pour tout polynôme non nul $P$, les séries $\\sum a_n z^n$ et $\\sum P(n) a_n z^n$ ont le même rayon de convergence."
      },
      {
        "title": "3. Propriétés de la Somme à l'Intérieur du Disque",
        "content": "Soit $f(z) = \\sum_{n=0}^\\infty a_n z^n$ de rayon $R > 0$.\n• **Holomorphie et Dérivabilité** : La fonction $f$ est holomorphe sur le disque ouvert $D(0, R) = \\{z \\in \\mathbb{C} \\mid |z| < R\\}$, et indéfiniment dérivable terme à terme sur $]-R, R[$ dans la variable réelle :\n$$f'(x) = \\sum_{n=1}^\\infty n a_n x^{n-1} \\quad \\text{avec exactement le même rayon de convergence } R$$\n• **Développement en série de Taylor** : $f$ est de classe $\\mathcal{C}^\\infty$ sur $]-R, R[$ et pour tout $n \\in \\mathbb{N}$ :\n$$a_n = \\frac{f^{(n)}(0)}{n!}$$\nLes coefficients d'une série entière sont donc uniquement déterminés par sa somme."
      },
      {
        "title": "4. Comportement sur le Bord et Théorème Radial d'Abel",
        "content": "• **Sur le cercle $|z| = R$** : La nature de la série dépend entièrement des coefficients (elle peut converger partout, converger en certains points et diverger en d'autres, ou diverger partout).\n• **Théorème de la limite radiale d'Abel** : Soit $\\sum_{n=0}^\\infty a_n x^n$ une série entière réelle de rayon $R > 0$. Si la série numérique $\\sum_{n=0}^\\infty a_n R^n$ converge, alors sa somme est continue à gauche en $R$ :\n$$\\lim_{x \\to R^-} \\sum_{n=0}^\\infty a_n x^n = \\sum_{n=0}^\\infty a_n R^n$$\n(De même en $-R$ si $\\sum a_n (-R)^n$ converge, par continuité à droite)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la somme d'une série numérique via le théorème radial d'Abel",
        "example": "Calculer la somme alternée $\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\dots$.",
        "steps": [
          "**Étape 1 (Série entière associée)** : Poser $f(x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n} x^n$. Par la règle de d'Alembert, le rayon de convergence est $R = 1$.",
          "**Étape 2 (Expression analytique sur $]-1, 1[$)** : En dérivant terme à terme, $f'(x) = \\sum_{n=1}^\\infty (-1)^{n-1} x^{n-1} = \\sum_{k=0}^\\infty (-x)^k = \\frac{1}{1+x}$. Comme $f(0) = 0$, $f(x) = \\ln(1 + x)$.",
          "**Étape 3 (Convergence au bord)** : Pour $x = 1$, la série numérique $\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n}$ converge par le critère spécial des séries alternées.",
          "**Conclusion (Par Abel radial)** : $\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n} = \\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} \\ln(1+x) = \\ln 2$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour appliquer le théorème de d'Alembert $\\lim |a_{n+1}/a_n|$, les coefficients doivent être consécutifs non nuls ! Pour $\\sum a_n z^{2n}$, poser $u = z^2$ d'abord.",
      "⚠️ La réciproque du théorème radial d'Abel est fausse : $\\lim_{x \\to 1^-} \\sum a_n x^n$ peut exister sans que $\\sum a_n$ ne converge (ex. $\\sum (-1)^n x^n = \\frac{1}{1+x} \\to 1/2$ mais $\\sum (-1)^n$ diverge)."
    ],
    "flashcards": [
      {
        "q": "Énoncer la formule de Cauchy-Hadamard pour le rayon de convergence.",
        "a": "$\\frac{1}{R} = \\limsup_{n \\to \\infty} |a_n|^{1/n}$."
      },
      {
        "q": "Énoncer le théorème radial d'Abel.",
        "a": "Si $\\sum a_n R^n$ converge, alors $\\lim_{x \\to R^-} \\sum a_n x^n = \\sum a_n R^n$."
      }
    ]
  },
  "L3-FOU": {
    "title": "L3-FOU : Séries de Fourier, égalité de Parseval et convergence ponctuelle",
    "domain": "Analyse Harmonique",
    "objectives": [
      "Calculer les coefficients de Fourier réels et complexes d'une fonction périodique.",
      "Énoncer et appliquer le Théorème de Dirichlet pour la convergence ponctuelle.",
      "Maîtriser l'inégalité de Bessel et l'égalité de Parseval dans l'espace hilbertien $L^2$.",
      "Énoncer le Théorème de Fejér et ses conséquences sur la densité des polynômes trigonométriques."
    ],
    "keyPoints": [
      {
        "title": "1. Coefficients et Séries de Fourier",
        "content": "Soit $f : \\mathbb{R} \\to \\mathbb{C}$ une fonction $T$-périodique localement intégrable (avec pulsation $\\omega = \\frac{2\\pi}{T}$ ; si $T = 2\\pi$, $\\omega = 1$).\n• **Coefficients complexes de Fourier** :\n$$c_n(f) = \\frac{1}{T} \\int_{0}^T f(t) e^{-i n \\omega t} \\, dt \\quad (n \\in \\mathbb{Z})$$\n• **Coefficients réels** (pour $f$ à valeurs réelles) :\n$$a_0(f) = \\frac{1}{T} \\int_0^T f(t) \\, dt, \\quad a_n(f) = \\frac{2}{T} \\int_0^T f(t) \\cos(n \\omega t) \\, dt, \\quad b_n(f) = \\frac{2}{T} \\int_0^T f(t) \\sin(n \\omega t) \\, dt$$\nRelations : $c_0 = a_0$, et pour $n \\ge 1$, $c_n = \\frac{a_n - i b_n}{2}$, $c_{-n} = \\frac{a_n + i b_n}{2}$.\n• **Polynôme de Fourier d'ordre $N$** :\n$$S_N(f)(t) = \\sum_{n=-N}^N c_n(f) e^{i n \\omega t} = a_0(f) + \\sum_{n=1}^N \\left( a_n(f) \\cos(n\\omega t) + b_n(f) \\sin(n\\omega t) \\right)$$"
      },
      {
        "title": "2. Convergence Ponctuelle : Théorème de Dirichlet",
        "content": "• **Noyau de Dirichlet** : $D_N(t) = \\sum_{n=-N}^N e^{i n t} = \\frac{\\sin((N + 1/2)t)}{\\sin(t/2)}$. On a $S_N(f) = f * D_N$.\n• **Conditions de Dirichlet** : Une fonction $f$ est dite de classe $\\mathcal{C}^1$ par morceaux sur $[0, T]$ si elle est continue par morceaux et admet des dérivées à gauche et à droite en tout point.\n• **Théorème de Dirichlet** : Si $f$ est $T$-périodique et de classe $\\mathcal{C}^1$ par morceaux, alors pour tout $t \\in \\mathbb{R}$, la série de Fourier de $f$ converge ponctuellement et sa somme vaut la moyenne des limites à droite et à gauche :\n$$\\lim_{N \\to \\infty} S_N(f)(t) = \\frac{f(t^+) + f(t^-)}{2}$$\nEn particulier, si $f$ est continue en $t$, la somme vaut exactement $f(t)$."
      },
      {
        "title": "3. Théorie $L^2$ : Bessel et Égalité de Parseval",
        "content": "Dans l'espace préhilbertien $L^2([0, T])$ muni du produit scalaire $\\langle f, g \\rangle = \\frac{1}{T} \\int_0^T f(t) \\overline{g(t)} \\, dt$, la famille $(e^{i n \\omega t})_{n \\in \\mathbb{Z}}$ forme un système orthonormal total.\n• **Inégalité de Bessel** : Pour toute fonction $f \\in L^2$ :\n$$\\sum_{n=-\\infty}^\\infty |c_n(f)|^2 \\le \\frac{1}{T} \\int_0^T |f(t)|^2 \\, dt$$\n• **Égalité de Parseval (Plancherel)** : Pour toute fonction $f \\in L^2([0, T])$ :\n$$\\sum_{n=-\\infty}^\\infty |c_n(f)|^2 = \\frac{1}{T} \\int_0^T |f(t)|^2 \\, dt$$\nEn formulation réelle (avec $T = 2\\pi$) :\n$$a_0(f)^2 + \\frac{1}{2} \\sum_{n=1}^\\infty \\left( a_n(f)^2 + b_n(f)^2 \\right) = \\frac{1}{2\\pi} \\int_{-\\pi}^\\pi |f(t)|^2 \\, dt$$\nCette égalité permet de calculer des sommes infinies remarquables (ex. $\\zeta(2) = \\sum \\frac{1}{n^2}$, $\\zeta(4)$)."
      },
      {
        "title": "4. Théorème de Fejér et Densité",
        "content": "• **Moyennes de Cesàro** : Pour pallier les oscillations du noyau de Dirichlet (phénomène de Gibbs), on considère les moyennes arithmétiques des sommes partielles :\n$$\\sigma_N(f)(t) = \\frac{1}{N} \\sum_{k=0}^{N-1} S_k(f)(t) = (f * F_N)(t)$$\noù $F_N(t) = \\frac{1}{N} \\left( \\frac{\\sin(Nt/2)}{\\sin(t/2)} \\right)^2 \\ge 0$ est le **noyau positif de Fejér**.\n• **Théorème de Fejér** : Si $f : \\mathbb{R} \\to \\mathbb{C}$ est continue et $2\\pi$-périodique, la suite $(\\sigma_N(f))_{N \\ge 1}$ converge **uniformément** vers $f$ sur $\\mathbb{R}$.\n• **Corollaires majeurs** :\n  1. L'ensemble des polynômes trigonométriques est dense dans $(\\mathcal{C}_{2\\pi}(\\mathbb{R}), \\|\\cdot\\|_\\infty)$ et dans $L^2([0, 2\\pi])$.\n  2. Si tous les coefficients de Fourier d'une fonction continue périodique sont nuls, alors la fonction est identiquement nulle."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer $\\zeta(2) = \\sum_{n=1}^\\infty \\frac{1}{n^2}$ à l'aide de l'onde triangulaire",
        "example": "Soit $f$ la fonction $2\\pi$-périodique paire définie par $f(t) = t^2$ sur $[-\\pi, \\pi]$. Appliquer le théorème de Dirichlet en $0$.",
        "steps": [
          "**Étape 1 (Calcul de $a_0$)** : $a_0 = \\frac{1}{2\\pi} \\int_{-\\pi}^\\pi t^2 dt = \\frac{1}{\\pi} \\int_0^\\pi t^2 dt = \\frac{\\pi^2}{3}$.",
          "**Étape 2 (Calcul des $a_n$)** : Par deux intégrations par parties successives : $a_n = \\frac{2}{\\pi} \\int_0^\\pi t^2 \\cos(nt) dt = \\frac{4(-1)^n}{n^2}$ (et $b_n = 0$ par parité).",
          "**Étape 3 (Application de Dirichlet en $t=0$)** : $f$ est continue et $\\mathcal{C}^1$ par morceaux, donc en $t=0$ : $f(0) = 0 = a_0 + \\sum_{n=1}^\\infty a_n = \\frac{\\pi^2}{3} + 4 \\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}$.",
          "**Conclusion** : $\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n^2} = \\frac{\\pi^2}{12}$, d'où après séparation pair/impair : $\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$."
        ]
      }
    ],
    "traps": [
      "⚠️ La continuité d'une fonction n'entraîne PAS la convergence ponctuelle partout de sa série de Fourier (phénomène d'Arzelà-Du Bois-Reymond) ! Dirichlet nécessite une régularité $\\mathcal{C}^1$ par morceaux.",
      "⚠️ Attention au facteur $\\frac{1}{2}$ devant les coefficients $(a_n^2 + b_n^2)$ dans la formule de Parseval réelle !"
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème de Dirichlet pour les séries de Fourier.",
        "a": "Pour une fonction périodique $\\mathcal{C}^1$ par morceaux, la série de Fourier converge en tout point vers $\\frac{f(t^+) + f(t^-)}{2}$."
      },
      {
        "q": "Énoncer l'égalité de Parseval complexe pour $f \\in L^2$.",
        "a": "$\\sum_{n=-\\infty}^\\infty |c_n(f)|^2 = \\frac{1}{T} \\int_0^T |f(t)|^2 dt$."
      }
    ]
  },
  "L3-GPR": {
    "title": "L3-GPR : Géométrie projective élémentaire",
    "domain": "Géométrie",
    "objectives": [
      "Définir axiomatiquement l'espace projectif $\\mathbb{P}(E)$ et les coordonnées homogènes.",
      "Définir le birapport de quatre points alignés et énoncer son invariance par homographies.",
      "Caractériser les homographies et énoncer le théorème fondamental de la géométrie projective.",
      "Classifier les coniques projectives et énoncer les théorèmes de Desargues et de Pappus."
    ],
    "keyPoints": [
      {
        "title": "1. Espaces Projectifs et Coordonnées Homogènes",
        "content": "• **Espace projectif** : Soit $E$ un $\\mathbb{K}$-espace vectoriel de dimension $n+1$. L'espace projectif associé $\\mathbb{P}(E)$ est l'ensemble des droites vectorielles de $E$ :\n$$\\mathbb{P}(E) = (E \\setminus \\{0\\}) / \\sim \\quad \\text{avec } x \\sim y \\iff \\exists \\lambda \\in \\mathbb{K}^*, \\; y = \\lambda x$$\nSa dimension projective est $\\dim \\mathbb{P}(E) = n$.\n• **Coordonnées homogènes** : Un point $P = \\mathbb{K} x \\in \\mathbb{P}^n(\\mathbb{K})$ est représenté par $[x_0 : x_1 : \\dots : x_n] \\neq [0 : \\dots : 0]$, défini à multiplication par un scalaire non nul près.\n• **Complétion projective d'un espace affine** : $\\mathbb{P}^n = \\mathbb{A}^n \\cup H_\\infty$ où l'hyperplan à l'infini $H_\\infty$ est l'ensemble des points d'équation homogène $x_0 = 0$. Deux droites affines parallèles se coupent en un point unique sur l'hyperplan à l'infini."
      },
      {
        "title": "2. Birapport (Cross-Ratio) et Division Harmonique",
        "content": "• **Droite projective $\\mathbb{P}^1(\\mathbb{K})$** : Identifiée à $\\mathbb{K} \\cup \\{\\infty\\}$ par $[x_0 : x_1] \\mapsto x_1 / x_0$.\n• **Birapport de 4 points distincts** : Pour quatre points $A, B, C, D$ de paramètres respectifs $a, b, c, d \\in \\mathbb{K} \\cup \\{\\infty\\}$, le birapport est défini par :\n$$[A, B, C, D] = \\frac{c - a}{c - b} : \\frac{d - a}{d - b} = \\frac{(c - a)(d - b)}{(c - b)(d - a)}$$\n• **Propriété fondamentale** : Le birapport est invariant par toute projection centrale et par toute transformation projective (homographie).\n• **Division harmonique** : Quatre points sont en division harmonique si $[A, B, C, D] = -1$ (noté $(A, B ; C, D) = -1$). Dans ce cas, $C$ et $D$ sont des conjugués harmoniques par rapport à $A$ et $B$."
      },
      {
        "title": "3. Homographies et Théorème Fondamental",
        "content": "• **Groupe projectif linéaire $\\text{PGL}(E)$** : Soit $u \\in \\text{GL}(E)$. L'application quotient $\\mathbb{P}(u) : \\mathbb{P}(E) \\to \\mathbb{P}(E)$ définie par $\\mathbb{P}(u)(\\mathbb{K} x) = \\mathbb{K} u(x)$ est appelée une **homographie** (ou transformation projective).\n$$\\text{PGL}(E) = \\text{GL}(E) / (\\mathbb{K}^* \\text{Id})$$\n• **Théorème fondamental de la géométrie projective** : Soient $(P_0, \\dots, P_{n+1})$ et $(Q_0, \\dots, Q_{n+1})$ deux repères projectifs de $\\mathbb{P}^n$ (familles de $n+2$ points dont $n+1$ quelconques sont projectivement indépendants). Il existe une **unique homographie** $h \\in \\text{PGL}_n(\\mathbb{K})$ telle que :\n$$\\forall i \\in \\{0, \\dots, n+1\\}, \\quad h(P_i) = Q_i$$"
      },
      {
        "title": "4. Coniques Projectives et Théorèmes Géométriques",
        "content": "• **Conique projective** : Ensemble des points $[x_0 : x_1 : x_2] \\in \\mathbb{P}^2$ annulant une forme quadratique non nulle $q$ :\n$$\\mathcal{C} = \\{[x] \\in \\mathbb{P}^2 \\mid q(x_0, x_1, x_2) = 0\\}$$\n  - Dans $\\mathbb{P}^2(\\mathbb{R})$, toute conique propre non vide est projectivement équivalente à $x_0^2 + x_1^2 - x_2^2 = 0$.\n  - Dans le plan affine, une ellipse n'intersecte pas $H_\\infty$, une parabole est tangente à $H_\\infty$ en 1 point, et une hyperbole coupe $H_\\infty$ en 2 points distincts (les directions asymptotiques).\n• **Théorème de Desargues** : Deux triangles sont homologiques par rapport à un point (perspectifs depuis un sommet) si et seulement si ils sont homologiques par rapport à une droite (les intersections des côtés homologues sont alignées)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer la nature affine d'une conique à partir de son équation projective",
        "example": "Soit la conique projective d'équation $x_1^2 - 2x_1 x_2 - x_0 x_2 = 0$. Déterminer sa nature affine dans la carte $x_0 = 1$.",
        "steps": [
          "**Étape 1 (Intersection avec la droite de l'infini $x_0 = 0$)** : Injecter $x_0 = 0$ dans l'équation homogène. On obtient $x_1^2 - 2x_1 x_2 = 0$, soit $x_1(x_1 - 2x_2) = 0$.",
          "**Étape 2 (Recherche des points à l'infini)** : Deux solutions non proportionnelles émergent :\n- $x_1 = 0 \\implies [0 : 0 : 1]$.\n- $x_1 = 2x_2 \\implies [0 : 2 : 1]$.",
          "**Étape 3 (Conclusion)** : La conique projective intersecte la droite de l'infini en exactement deux points réels distincts.",
          "**Conclusion** : Dans le plan affine, la conique est une **hyperbole**."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans les coordonnées homogènes $[x_0 : x_1 : x_2]$, le point $[0 : 0 : 0]$ n'appartient PAS à l'espace projectif !",
      "⚠️ Deux droites affines parallèles ne sont JAMAIS disjointes dans le plan projectif : elles se coupent au point à l'infini correspondant à leur direction."
    ],
    "flashcards": [
      {
        "q": "Combien de points forment un repère projectif dans $\\mathbb{P}^n$ ?",
        "a": "$n+2$ points tels que $n+1$ quelconques sont indépendants."
      },
      {
        "q": "Comment distingue-t-on projectivement une parabole d'une hyperbole ?",
        "a": "Une parabole est tangente à la droite de l'infini (1 point d'intersection), une hyperbole la coupe en 2 points réels distincts."
      }
    ]
  },
  "L3-GDF": {
    "title": "L3-GDF : Sous-variétés différentielles et espaces tangents",
    "domain": "Géométrie Différentielle",
    "objectives": [
      "Définir une sous-variété de $\\mathbb{R}^n$ par cartes locales, immersions, submersions ou graphes locaux.",
      "Définir et calculer l'espace tangent $T_x M$ et l'espace normal $N_x M$.",
      "Énoncer et appliquer le Théorème des Multiplicateurs de Lagrange pour l'optimisation sous contraintes.",
      "Comprendre les formes différentielles et la formule de Stokes générale."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et Caractérisations des Sous-variétés",
        "content": "Soit $M \\subset \\mathbb{R}^n$ et $d \\in \\{0, \\dots, n\\}$ ($k = n - d$ est la codimension). $M$ est une **sous-variété différentielle** de dimension $d$ et de classe $\\mathcal{C}^p$ ($p \\ge 1$) si pour tout $x_0 \\in M$, l'une des propriétés équivalentes suivantes est vérifiée au voisinage de $x_0$ :\n1. **Submersion locale (équation implicite)** : Il existe un ouvert $U \\subset \\mathbb{R}^n$ contenant $x_0$ et une submersion $f : U \\to \\mathbb{R}^k$ de classe $\\mathcal{C}^p$ (i.e. $\\text{rg}(df(x)) = k$) tels que :\n$$M \\cap U = \\{x \\in U \\mid f(x) = 0\\} = f^{-1}(\\{0\\})$$\n2. **Immersion locale (paramétrage local)** : Il existe un ouvert $V \\subset \\mathbb{R}^d$ et une immersion $\\varphi : V \\to \\mathbb{R}^n$ (i.e. $\\text{rg}(d\\varphi(u)) = d$) qui est un homéomorphisme sur son image $M \\cap U$.\n3. **Graphe local** : Après permutation des coordonnées, $M \\cap U$ est le graphe d'une fonction $\\mathcal{C}^p$ exprimant $k$ variables en fonction des $d$ autres."
      },
      {
        "title": "2. Espace Tangent et Espace Normal",
        "content": "Soit $M$ une sous-variété de classe $\\mathcal{C}^1$ et $x \\in M$.\n• **Vecteur tangent** : Un vecteur $v \\in \\mathbb{R}^n$ est tangent à $M$ en $x$ s'il existe une courbe différentiable $\\gamma : ]-\\varepsilon, \\varepsilon[ \\to M$ telle que $\\gamma(0) = x$ et $\\gamma'(0) = v$.\n• **Espace tangent $T_x M$** : L'ensemble de ces vecteurs forme un sous-espace vectoriel de $\\mathbb{R}^n$ de dimension $d$.\n• **Formule implicite** : Si $M$ est définie localement par la submersion $f = (f_1, \\dots, f_k) : U \\to \\mathbb{R}^k$, alors :\n$$T_x M = \\ker(df(x)) = \\{v \\in \\mathbb{R}^n \\mid \\nabla f_i(x) \\cdot v = 0, \\; \\forall i = 1, \\dots, k\\}$$\n• **Espace normal $N_x M$** : Le sous-espace orthogonal de dimension $k$ :\n$$N_x M = (T_x M)^\\perp = \\text{Vect}(\\nabla f_1(x), \\dots, \\nabla f_k(x))$$\n• **Espace tangent affine** : $T_x^{\\text{aff}} M = x + T_x M$."
      },
      {
        "title": "3. Optimisation sous Contraintes et Multiplicateurs de Lagrange",
        "content": "• **Problème d'optimisation** : Soit à optimiser une fonction $F : U \\to \\mathbb{R}$ sous les contraintes $g_1(x) = 0, \\dots, g_k(x) = 0$, définissant une sous-variété $M = g^{-1}(\\{0\\})$.\n• **Théorème des Multiplicateurs de Lagrange** : Soit $x_0 \\in M$ un extremum local de la restriction $F|_M$. Si $x_0$ est un point régulier des contraintes (les différentielles $dg_1(x_0), \\dots, dg_k(x_0)$ sont linéairement indépendantes), alors le gradient de $F$ appartient à l'espace normal $N_{x_0} M$ :\n$$\\exists \\lambda_1, \\dots, \\lambda_k \\in \\mathbb{R}, \\quad \\nabla F(x_0) = \\sum_{i=1}^k \\lambda_i \\nabla g_i(x_0)$$\nLes scalaires $\\lambda_i$ sont appelés les **multiplicateurs de Lagrange**."
      },
      {
        "title": "4. Formes Différentielles et Théorème de Stokes",
        "content": "• **Formes différentielles** : Une 1-forme sur $U$ s'écrit $\\omega = \\sum_{i=1}^n A_i(x) dx_i$. Sa dérivée extérieure est une 2-forme $d\\omega = \\sum_{i < j} \\left(\\frac{\\partial A_j}{\\partial x_i} - \\frac{\\partial A_i}{\\partial x_j}\\right) dx_i \\wedge dx_j$.\n• **Forme exacte et forme fermée** :\n  - $\\omega$ est **exacte** s'il existe une fonction $f$ telle que $\\omega = df$.\n  - $\\omega$ est **fermée** si $d\\omega = 0$. Toute forme exacte de classe $\\mathcal{C}^2$ est fermée ($d^2 = 0$).\n  - **Lemme de Poincaré** : Sur un ouvert étoilé, toute forme fermée est exacte.\n• **Formule de Stokes générale** : Pour une sous-variété orientée compacte à bord $M$ de dimension $k$ et une forme différentielle $\\omega$ de degré $k-1$ de classe $\\mathcal{C}^1$ :\n$$\\int_{\\partial M} \\omega = \\int_M d\\omega$$\nCe résultat unifie la formule de Green-Riemann, d'Ostrogradski et de Kelvin-Stokes."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver l'espace tangent de la sphère unité $\\mathbb{S}^{n-1}$",
        "example": "Déterminer $T_x \\mathbb{S}^{n-1}$ en tout point $x \\in \\mathbb{S}^{n-1} = \\{y \\in \\mathbb{R}^n \\mid \\|y\\|^2 = 1\\}$.",
        "steps": [
          "**Étape 1 (Définition par submersion)** : Poser $f(y) = \\sum_{i=1}^n y_i^2 - 1$. L'ensemble $\\mathbb{S}^{n-1}$ est $f^{-1}(\\{0\\})$.",
          "**Étape 2 (Calcul du gradient)** : $\\nabla f(y) = 2y$. Pour tout $x \\in \\mathbb{S}^{n-1}$, $\\nabla f(x) = 2x \\neq 0$ car $\\|x\\| = 1$. Donc 0 est une valeur régulière.",
          "**Étape 3 (Noyau de la différentielle)** : Pour tout $v \\in \\mathbb{R}^n$, $df(x)(v) = \\nabla f(x) \\cdot v = 2 \\langle x, v \\rangle$.",
          "**Conclusion** : $T_x \\mathbb{S}^{n-1} = \\ker(df(x)) = \\{v \\in \\mathbb{R}^n \\mid \\langle x, v \\rangle = 0\\} = x^\\perp$. L'espace tangent en $x$ est l'hyperplan orthogonal au vecteur position $x$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour utiliser la formule $T_x M = \\ker(df(x))$, il faut impérativement vérifier que $df(x)$ est surjective (rg = codimension), sinon l'ensemble peut présenter des singularités (ex. cône au sommet).",
      "⚠️ Les multiplicateurs de Lagrange fournissent une condition **nécessaire** du premier ordre (point critique), mais ne garantissent pas à eux seuls qu'il s'agit d'un extremum (analyser le hessien bordé)."
    ],
    "flashcards": [
      {
        "q": "Quelle est l'expression de l'espace tangent pour $M = f^{-1}(\\{0\\})$ où $f$ est une submersion ?",
        "a": "$T_x M = \\ker(df(x))$."
      },
      {
        "q": "Énoncer la formule de Stokes générale.",
        "a": "$\\int_{\\partial M} \\omega = \\int_M d\\omega$."
      }
    ]
  },
  "L3-NUM": {
    "title": "L3-NUM : Analyse numérique : interpolation, quadratures et résolution matricielle",
    "domain": "Analyse Numérique",
    "objectives": [
      "Analyser le conditionnement matriciel et maîtriser les méthodes directes (LU, Cholesky, QR) et itératives (Jacobi, Gauss-Seidel).",
      "Construire le polynôme d'interpolation de Lagrange et analyser l'erreur d'interpolation (phénomène de Runge, points de Tchebychev).",
      "Maîtriser les formules de quadrature élémentaires (trapèzes, Simpson) et de Gauss-Legendre.",
      "Comprendre la convergence de la méthode de Newton-Raphson et les schémas d'intégration d'EDO (Euler, RK4)."
    ],
    "keyPoints": [
      {
        "title": "1. Résolution de Systèmes Linéaires $Ax = b$ et Conditionnement",
        "content": "• **Conditionnement matriciel** : Pour $A \\in \\text{GL}_n(\\mathbb{R})$, $\\kappa(A) = \\|A\\| \\cdot \\|A^{-1}\\| \\ge 1$. Sensibilité aux perturbations de données :\n$$\\frac{\\|\\delta x\\|}{\\|x\\|} \\le \\kappa(A) \\frac{\\|\\delta b\\|}{\\|b\\|}$$\n• **Décompositions directes** :\n  - **Décomposition LU** : $A = LU$ ($L$ triangulaire inférieure à diagonale unité, $U$ triangulaire supérieure). Existe si tous les mineurs principaux dominants sont non nuls.\n  - **Décomposition de Cholesky** : Si $A$ est symétrique définie positive, $A = L L^T$ avec $L$ triangulaire inférieure à coefficients diagonaux strictement positifs.\n  - **Factorisation QR** : $A = QR$ avec $Q$ orthogonale ($Q^T Q = I$) et $R$ triangulaire supérieure (via Gram-Schmidt ou réflexions de Householder).\n• **Méthodes itératives $x_{k+1} = M^{-1}N x_k + M^{-1}b$** : Converge ssi le rayon spectral $\\rho(M^{-1}N) < 1$. Méthode de Jacobi ($M = \\text{diag}(A)$), Gauss-Seidel ($M = D - E$ triangulaire inférieure)."
      },
      {
        "title": "2. Interpolation Polynomiale de Lagrange et Erreur",
        "content": "• **Polynôme d'interpolation** : Pour $n+1$ points distincts $(x_i, y_i)_{0 \\le i \\le n}$, il existe un unique polynôme $P_n \\in \\mathbb{R}_n[X]$ tel que $P_n(x_i) = y_i$ :\n$$P_n(x) = \\sum_{i=0}^n y_i L_i(x) \\quad \\text{avec} \\quad L_i(x) = \\prod_{j \\neq i} \\frac{x - x_j}{x_i - x_j}$$\n• **Formule de l'erreur d'interpolation** : Si $f \\in \\mathcal{C}^{n+1}([a, b])$, alors pour tout $x \\in [a, b]$, il existe $\\xi_x \\in ]\\min(x_i, x), \\max(x_i, x)[$ tel que :\n$$f(x) - P_n(x) = \\frac{f^{(n+1)}(\\xi_x)}{(n+1)!} \\prod_{i=0}^n (x - x_i)$$\n• **Phénomène de Runge** : Pour des nœuds équirépartis, l'erreur peut diverger vers l'infini sur les bords (ex. $f(x) = \\frac{1}{1 + 25x^2}$). Pour pallier ce problème, on utilise les **nœuds de Tchebychev** : $x_k = \\cos\\left(\\frac{2k+1}{2n+2}\\pi\\right)$ sur $[-1, 1]$."
      },
      {
        "title": "3. Intégration Numérique (Quadratures)",
        "content": "Formule de quadrature approchée : $\\int_a^b f(x) \\, dx \\approx \\sum_{i=0}^n w_i f(x_i)$.\n• **Méthode des trapèzes** : $\\int_a^b f(x) dx \\approx \\frac{b-a}{2}(f(a) + f(b))$.\n  - Erreur élémentaire : $E(f) = -\\frac{(b-a)^3}{12} f''(\\xi)$. Ordre de précision 1.\n• **Méthode de Simpson** : $\\int_a^b f(x) dx \\approx \\frac{b-a}{6}\\left(f(a) + 4f\\left(\\frac{a+b}{2}\\right) + f(b)\\right)$.\n  - Erreur élémentaire : $E(f) = -\\frac{(b-a)^5}{2880} f^{(4)}(\\xi)$. Ordre de précision 3 (exacte pour les polynômes de degré $\\le 3$).\n• **Quadratures de Gauss-Legendre** : En choisissant les nœuds $x_i$ comme les zéros du polynôme de Legendre de degré $n+1$, la formule est exacte pour tous les polynômes de degré $\\le 2n + 1$ (ordre optimal)."
      },
      {
        "title": "4. Résolution d'Équations et Résolution d'EDO",
        "content": "• **Méthode de Newton-Raphson** pour résoudre $f(x) = 0$ :\n$$x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)}$$\nSi $r$ est une racine simple ($f'(r) \\neq 0$) et $f \\in \\mathcal{C}^2$, la convergence est **quadratique** locale : $|x_{k+1} - r| \\le C |x_k - r|^2$.\n• **Schémas pour EDO $y'(t) = f(t, y(t))$ avec $y(t_0) = y_0$** :\n  - **Euler explicite** : $y_{n+1} = y_n + h f(t_n, y_n)$ (ordre 1, erreur globale en $O(h)$).\n  - **Runge-Kutta 4 (RK4)** : Schéma à 4 étages d'ordre 4 (erreur globale en $O(h^4)$), très stable et largement utilisé en ingénierie."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre un système par décomposition de Cholesky $A = LL^T$",
        "example": "Résoudre $Ax = b$ avec $A = \\begin{pmatrix} 4 & 2 \\\\ 2 & 10 \\end{pmatrix}$ et $b = \\begin{pmatrix} 6 \\\\ 18 \\end{pmatrix}$.",
        "steps": [
          "**Étape 1 (Calcul de $L$)** : On cherche $L = \\begin{pmatrix} l_{11} & 0 \\\\ l_{21} & l_{22} \\end{pmatrix}$.\n- $l_{11}^2 = 4 \\implies l_{11} = 2$.\n- $l_{11} l_{21} = 2 \\implies 2 l_{21} = 2 \\implies l_{21} = 1$.\n- $l_{21}^2 + l_{22}^2 = 10 \\implies 1 + l_{22}^2 = 10 \\implies l_{22} = 3$.\nDonc $L = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$.",
          "**Étape 2 (Résolution de $Ly = b$)** : $\\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix} \\begin{pmatrix} y_1 \\\\ y_2 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ 18 \\end{pmatrix} \\implies y_1 = 3, \\; y_2 = \\frac{18 - 3}{3} = 5$.",
          "**Étape 3 (Résolution de $L^T x = y$)** : $\\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix} \\implies x_2 = 5/3, \\; 2x_1 = 3 - 5/3 = 4/3 \\implies x_1 = 2/3$.",
          "**Conclusion** : L'unique solution est $x = \\begin{pmatrix} 2/3 \\\\ 5/3 \\end{pmatrix}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour appliquer Cholesky, la matrice $A$ doit être **symétrique et strictement définie positive** (toutes les valeurs propres $> 0$) !",
      "⚠️ Dans la méthode de Newton, si la dérivée $f'(r) = 0$ (racine multiple), la convergence n'est plus quadratique mais seulement linéaire !"
    ],
    "flashcards": [
      {
        "q": "Quel est l'ordre de convergence de la méthode de Newton pour une racine simple ?",
        "a": "Convergence d'ordre 2 (quadratique)."
      },
      {
        "q": "Quel est le degré d'exactitude polynomiale de la méthode de Simpson ?",
        "a": "Degré 3 (exacte pour tout polynôme de degré $\\le 3$)."
      }
    ]
  },
  "L3-PROG": {
    "title": "L3-PROG : Optimisation et programmation linéaire (algorithme du simplexe)",
    "domain": "Optimisation",
    "objectives": [
      "Formaliser un programme linéaire sous forme standard et définir les solutions de base admissibles.",
      "Énoncer le Théorème Fondamental de la Programmation Linéaire (atteinte de l'optimum sur un sommet).",
      "Dérouler l'algorithme du simplexe (choix de la variable entrante, test du ratio minimum, pivot).",
      "Énoncer le Théorème de Dualité Forte et les conditions d'optimalité de Karush-Kuhn-Tucker (KKT)."
    ],
    "keyPoints": [
      {
        "title": "1. Polyèdres Convexes et Forme Standard",
        "content": "• **Polyèdre** : Intersection finie de demi-espaces affines fermés : $P = \\{x \\in \\mathbb{R}^n \\mid Ax \\le b\\}$. S'il est borné, on l'appelle un **polytope**.\n• **Point extrême (sommet)** : $x \\in P$ est un point extrême s'il ne peut s'écrire comme combinaison convexe stricte de deux points distincts de $P$.\n• **Forme standard d'un programme linéaire** :\n$$\\max_{x \\in \\mathbb{R}^n} \\; c^T x \\quad \\text{sous les contraintes} \\quad A x = b \\quad \\text{et} \\quad x \\ge 0$$\noù $A \\in \\mathcal{M}_{m, n}(\\mathbb{R})$ de rang plein $m \\le n$, et $b \\ge 0$.\n(Toute inégalité $a_i^T x \\le b_i$ est convertie en égalité en introduisant une variable d'écart positive $s_i \\ge 0$ : $a_i^T x + s_i = b_i$)."
      },
      {
        "title": "2. Solutions de Base Admissibles et Théorème Fondamental",
        "content": "• **Solution de base** : On choisit un ensemble d'indices $B \\subset \\{1, \\dots, n\\}$ de cardinal $m$ tel que la sous-matrice $A_B$ soit inversible (base). En posant les variables hors-base $x_N = 0$, la composante de base est uniquement définie par :\n$$x_B = A_B^{-1} b$$\n• **Solution de base admissible (SBA)** : Une solution de base telle que $x_B \\ge 0$. Les SBA correspondent exactement aux **points extrêmes (sommets)** du polyèdre des contraintes.\n• **Théorème Fondamental de la Programmation Linéaire** : Si un programme linéaire sous forme standard admet une solution optimale finie, alors il existe au moins une **solution de base admissible** qui est optimale."
      },
      {
        "title": "3. Algorithme du Simplexe",
        "content": "Partant d'une solution de base admissible initiale :\n• **Coûts réduits** : $\\bar{c}_N^T = c_N^T - c_B^T A_B^{-1} A_N$.\n  - **Critère d'optimalité** : Si pour tout $j \\in N$, $\\bar{c}_j \\le 0$ (en maximisation), la base actuelle est **optimale**.\n• **Variable entrante** : Si certains $\\bar{c}_j > 0$, on choisit une variable $x_e$ avec $\\bar{c}_e > 0$ (règle de Dantzig : le plus grand coût réduit positif).\n• **Variable sortante (Test du ratio minimum)** : On calcule pour les lignes où la colonne pivot $\\bar{a}_{i, e} > 0$ :\n$$i^* = \\arg \\min_{i \\mid \\bar{a}_{i, e} > 0} \\frac{\\bar{b}_i}{\\bar{a}_{i, e}}$$\nLa variable de base correspondante $x_{s}$ quitte la base.\n• **Pivot de Gauss** : Mise à jour du tableau et répétition jusqu'à l'optimalité ou détection d'un problème non borné."
      },
      {
        "title": "4. Dualité et Conditions d'Écarts Complémentaires",
        "content": "• **Problème Primal ($P$)** : $\\max c^T x$ sous $Ax \\le b$ et $x \\ge 0$.\n• **Problème Dual ($D$)** : $\\min b^T y$ sous $A^T y \\ge c$ et $y \\ge 0$.\n• **Théorème de Dualité Faible** : Pour tout $x$ admissible pour $(P)$ et tout $y$ admissible pour $(D)$ :\n$$c^T x \\le b^T y$$\n• **Théorème de Dualité Forte** : Si $(P)$ ou $(D)$ admet une solution optimale finie, alors les deux problèmes admettent une solution optimale et les valeurs optimales coïncident :\n$$\\max (P) = \\min (D)$$\n• **Théorème des écarts complémentaires** : $x^*$ et $y^*$ admissibles sont optimaux ssi :\n$$\\forall j \\in \\{1, \\dots, n\\}, \\; x_j^* (A^T y^* - c)_j = 0 \\quad \\text{et} \\quad \\forall i \\in \\{1, \\dots, m\\}, \\; y_i^* (b - A x^*)_i = 0$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire le problème dual d'un programme linéaire",
        "example": "Former le dual de : $\\max 3x_1 + 2x_2$ sous $x_1 + 2x_2 \\le 4$, $2x_1 + x_2 \\le 5$, avec $x_1, x_2 \\ge 0$.",
        "steps": [
          "**Étape 1 (Identification des vecteurs et matrices)** : $c = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$, $b = \\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix}$, $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$.",
          "**Étape 2 (Structure du dual)** : Minimisation de $b^T y = 4y_1 + 5y_2$ avec $y_1, y_2 \\ge 0$.",
          "**Étape 3 (Contraintes duales $A^T y \\ge c$)** :\n- Pour $x_1$ : $1 y_1 + 2 y_2 \\ge 3$.\n- Pour $x_2$ : $2 y_1 + 1 y_2 \\ge 2$.",
          "**Conclusion** : Le dual est : $\\min 4y_1 + 5y_2$ sous $y_1 + 2y_2 \\ge 3$, $2y_1 + y_2 \\ge 2$, et $y_1, y_2 \\ge 0$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans le simplexe, si tous les coefficients de la colonne pivot sont négatifs ou nuls ($\bar{a}_{i, e} \\le 0$), le problème est **non borné** ($+\\infty$) !",
      "⚠️ Attention aux sens des inégalités lors du passage au dual : maximisation avec contraintes $\\le$ donne un dual en minimisation avec contraintes $\\ge$."
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème de Dualité Forte en programmation linéaire.",
        "a": "Si le problème primal ou dual admet une solution optimale, alors les deux en admettent et $\\max (c^T x) = \\min (b^T y)$."
      },
      {
        "q": "Quel critère géométrique caractérise les solutions de base admissibles (SBA) ?",
        "a": "Les SBA correspondent exactement aux sommets (points extrêmes) du polyèdre admissible."
      }
    ]
  },
  "L3-PRC": {
    "title": "L3-PRC : Variables aléatoires à densité, convergence en loi et Théorème Central Limite",
    "domain": "Probabilités",
    "objectives": [
      "Définir rigoureusement les variables aléatoires à densité, l'espérance, la variance et la fonction de répartition.",
      "Définir la fonction caractéristique et énoncer ses propriétés fondamentales (unicité, indépendance).",
      "Distinguer les modes de convergence probabilistes : presque sûre, en norme $L^p$, en probabilité et en loi.",
      "Énoncer et appliquer la Loi Forte des Grands Nombres et le Théorème Central Limite (TCL)."
    ],
    "keyPoints": [
      {
        "title": "1. Variables Aléatoires Continues et Densités de Probabilité",
        "content": "• **Variable à densité** : Une variable aléatoire réelle $X$ définie sur $(\\Omega, \\mathcal{F}, \\mathbb{P})$ est à densité s'il existe une fonction borélienne positive $f_X : \\mathbb{R} \\to \\mathbb{R}^+$ telle que $\\int_{-\\infty}^\\infty f_X(t) dt = 1$ et pour tout borélien $B \\in \\mathcal{B}(\\mathbb{R})$ :\n$$\\mathbb{P}(X \\in B) = \\int_B f_X(t) \\, dt$$\n• **Fonction de répartition** : $F_X(x) = \\mathbb{P}(X \\le x) = \\int_{-\\infty}^x f_X(t) \\, dt$. Elle est continue, $\\mathcal{C}^1$ par morceaux, avec $F_X'(x) = f_X(x)$ p.p.\n• **Moments** :\n  - Espérance : $\\mathbb{E}[X] = \\int_{-\\infty}^\\infty t f_X(t) \\, dt$ (si $\\int |t| f_X(t) dt < \\infty$).\n  - Théorème de transfert : $\\mathbb{E}[g(X)] = \\int_{-\\infty}^\\infty g(t) f_X(t) \\, dt$.\n  - Variance : $\\text{Var}(X) = \\mathbb{E}[(X - \\mathbb{E}[X])^2] = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$.\n• **Lois classiques** : Gaussienne $\\mathcal{N}(\\mu, \\sigma^2)$ ($f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$), Exponentielle $\\mathcal{E}(\\lambda)$ ($f(x) = \\lambda e^{-\\lambda x} \\mathbf{1}_{x \\ge 0}$)."
      },
      {
        "title": "2. Fonctions Caractéristiques",
        "content": "• **Définition** : La fonction caractéristique d'une variable aléatoire $X$ est l'application $\\Phi_X : \\mathbb{R} \\to \\mathbb{C}$ définie par :\n$$\\Phi_X(t) = \\mathbb{E}[e^{i t X}] = \\int_{-\\infty}^\\infty e^{i t x} d\\mathbb{P}_X(x)$$\n• **Propriétés fondamentales** :\n  1. $\\Phi_X(0) = 1$ et $\\forall t \\in \\mathbb{R}, |\\Phi_X(t)| \\le 1$. $\\Phi_X$ est uniformément continue sur $\\mathbb{R}$.\n  2. **Somme de variables indépendantes** : Si $X$ et $Y$ sont indépendantes, $\\Phi_{X+Y}(t) = \\Phi_X(t) \\cdot \\Phi_Y(t)$.\n  3. **Moments** : Si $\\mathbb{E}[|X|^k] < +\\infty$, alors $\\Phi_X$ est de classe $\\mathcal{C}^k$ et pour tout $j \\le k$ :\n$$\\Phi_X^{(j)}(0) = i^j \\mathbb{E}[X^j]$$\n  4. **Théorème d'inversion et d'injectivité** : La loi de probabilité d'une v.a. est entièrement et uniquement caractérisée par sa fonction caractéristique."
      },
      {
        "title": "3. Modes de Convergence Aléatoire",
        "content": "Soit $(X_n)_{n \\in \\mathbb{N}}$ et $X$ des variables aléatoires sur $(\\Omega, \\mathcal{F}, \\mathbb{P})$.\n• **Convergence presque sûre ($X_n \\xrightarrow{\\text{p.s.}} X$)** : $\\mathbb{P}(\\{\\omega \\in \\Omega \\mid \\lim_{n \\to \\infty} X_n(\\omega) = X(\\omega)\\}) = 1$.\n• **Convergence dans $L^p$ ($X_n \\xrightarrow{L^p} X$)** : $\\lim_{n \\to \\infty} \\mathbb{E}[|X_n - X|^p] = 0$.\n• **Convergence en probabilité ($X_n \\xrightarrow{\\mathbb{P}} X$)** : $\\forall \\varepsilon > 0, \\lim_{n \\to \\infty} \\mathbb{P}(|X_n - X| > \\varepsilon) = 0$.\n• **Convergence en loi ($X_n \\xrightarrow{\\mathcal{L}} X$)** : Pour toute fonction $g : \\mathbb{R} \\to \\mathbb{R}$ continue et bornée, $\\lim_{n \\to \\infty} \\mathbb{E}[g(X_n)] = \\mathbb{E}[g(X)]$ (ou $F_{X_n}(x) \\to F_X(x)$ en tout point où $F_X$ est continue).\n• **Théorème de continuité de Paul Lévy** : $X_n \\xrightarrow{\\mathcal{L}} X \\iff \\forall t \\in \\mathbb{R}, \\lim_{n \\to \\infty} \\Phi_{X_n}(t) = \\Phi_X(t)$.\n• **Hiérarchie** : (p.s. $\\implies \\mathbb{P} \\implies \\mathcal{L}$) et ($L^p \\implies \\mathbb{P} \\implies \\mathcal{L}$)."
      },
      {
        "title": "4. Loi Forte des Grands Nombres et Théorème Central Limite",
        "content": "Soit $(X_n)_{n \\ge 1}$ une suite de variables aléatoires i.i.d. (indépendantes et identiquement distribuées).\n• **Loi Forte des Grands Nombres (Kolmogorov)** : Si $\\mathbb{E}[|X_1|] < +\\infty$ avec moyenne $\\mu = \\mathbb{E}[X_1]$, alors la moyenne empirique converge presque sûrement vers $\\mu$ :\n$$\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i \\xrightarrow[n \\to \\infty]{\\text{p.s.}} \\mu$$\n• **Théorème Central Limite (Lindeberg-Lévy)** : Si de plus la variance $\\sigma^2 = \\text{Var}(X_1) \\in ]0, +\\infty[$ est finie, alors la variable centrée réduite converge en loi vers la loi normale standard $\\mathcal{N}(0, 1)$ :\n$$Z_n = \\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma \\sqrt{n}} = \\sqrt{n}\\left(\\frac{\\bar{X}_n - \\mu}{\\sigma}\\right) \\xrightarrow[n \\to \\infty]{\\mathcal{L}} \\mathcal{N}(0, 1)$$\nPour tous $a \\le b$, $\\lim_{n \\to \\infty} \\mathbb{P}\\left(a \\le Z_n \\le b\\right) = \\int_a^b \\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2} \\, dt$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démonstration du TCL à l'aide des fonctions caractéristiques",
        "example": "Montrer que la somme centrée réduite $Z_n$ de variables i.i.d. centrées réduites converge en loi vers $\\mathcal{N}(0, 1)$.",
        "steps": [
          "**Étape 1 (Développement limité de $\\Phi_X$)** : Comme $\\mathbb{E}[X] = 0$ et $\\mathbb{E}[X^2] = 1$, le DL de $\\Phi_X$ en 0 à l'ordre 2 est : $\\Phi_X(u) = 1 + i u \\mathbb{E}[X] - \\frac{u^2}{2} \\mathbb{E}[X^2] + o(u^2) = 1 - \\frac{u^2}{2} + o(u^2)$.",
          "**Étape 2 (Fonction caractéristique de $Z_n = \\frac{1}{\\sqrt{n}} \\sum_{j=1}^n X_j$)** : Par indépendance : $\\Phi_{Z_n}(t) = \\left( \\Phi_X\\left(\\frac{t}{\\sqrt{n}}\\right) \\right)^n = \\left( 1 - \\frac{t^2}{2n} + o\\left(\\frac{1}{n}\\right) \\right)^n$.",
          "**Étape 3 (Passage au logarithme et à la limite)** : $\\ln \\Phi_{Z_n}(t) = n \\ln\\left(1 - \\frac{t^2}{2n} + o\\left(\\frac{1}{n}\\right)\\right) = n \\left( -\\frac{t^2}{2n} + o\\left(\\frac{1}{n}\\right) \\right) = -\\frac{t^2}{2} + o(1)$.",
          "**Conclusion** : $\\lim_{n \\to \\infty} \\Phi_{Z_n}(t) = e^{-t^2/2}$, qui est la fonction caractéristique exacte de la loi normale $\\mathcal{N}(0, 1)$. Par le théorème de continuité de Lévy, $Z_n \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0, 1)$."
        ]
      }
    ],
    "traps": [
      "⚠️ La convergence en loi n'implique absolument PAS la convergence en probabilité (ni presque sûre) si la limite n'est pas constante !",
      "⚠️ Le TCL nécessite impérativement une variance finie $\\sigma^2 < +\\infty$ : pour des variables suivant une loi de Cauchy (qui n'a ni espérance ni variance), le TCL ne s'applique pas !"
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème Central Limite pour des v.a. i.i.d. de moyenne $\\mu$ et variance $\\sigma^2$.",
        "a": "$\\sqrt{n}\\left(\\frac{\\bar{X}_n - \\mu}{\\sigma}\\right) \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0, 1)$."
      },
      {
        "q": "Quelle propriété ont les fonctions caractéristiques pour une somme de v.a. indépendantes ?",
        "a": "$\\Phi_{X+Y}(t) = \\Phi_X(t) \\cdot \\Phi_Y(t)$."
      }
    ]
  }
};

window.MATHS_EXERCISES_L3 = {
  "L3-GRP1": [
    {
      "id": "L3-GRP1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Lagrange pour les groupes finis",
      "skill": "Appliquer la divisibilité des ordres",
      "statement": "Soit $G$ un groupe fini d'ordre 24 et $H$ un sous-groupe de $G$. Lequel des entiers suivants NE PEUT PAS être l'ordre de $H$ ?",
      "options": [
        "$7$",
        "$6$",
        "$8$",
        "$12$"
      ],
      "correctIndex": 0,
      "answer": "$7$",
      "hint1": "D'après le théorème de Lagrange, l'ordre d'un sous-groupe divise l'ordre du groupe.",
      "hint2": "7 ne divise pas 24.",
      "solution": "Le théorème de Lagrange impose que $|H|$ divise $|G| = 24$. Comme 7 ne divise pas 24, $G$ ne peut pas contenir de sous-groupe d'ordre 7."
    },
    {
      "id": "L3-GRP1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Sous-groupes distingués et quotient",
      "skill": "Condition pour munir $G/H$ d'une structure de groupe",
      "statement": "Pour qu'un ensemble quotient $G/H$ puisse être muni d'une loi de groupe canonique rendant la projection $\\pi : G \\to G/H$ morphisme, il faut et il suffit que $H$ soit :",
      "options": [
        "Un sous-groupe distingué (normal) de $G$",
        "Un groupe abélien",
        "D'ordre premier",
        "D'indice 1"
      ],
      "correctIndex": 0,
      "answer": "Un sous-groupe distingué (normal) de $G$",
      "hint1": "La loi quotient $(xH)(yH) = (xy)H$ doit être bien définie indépendamment des représentants.",
      "hint2": "Cela équivaut à $g H g^{-1} = H$ pour tout $g \\in G$.",
      "solution": "L'ensemble des classes à gauche $G/H$ hérite d'une structure de groupe quotient si et seulement si $H$ est distingué dans $G$ (noté $H \\triangleleft G$)."
    },
    {
      "id": "L3-GRP1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Premier théorème d'isomorphisme",
      "skill": "Identifier le quotient $G / \\ker \\varphi$",
      "statement": "Si $\\varphi : G \\to G'$ est un morphisme de groupes, alors le premier théorème d'isomorphisme établit que :",
      "options": [
        "$G / \\ker(\\varphi) \\simeq \\text{im}(\\varphi)$",
        "$G / \\text{im}(\\varphi) \\simeq \\ker(\\varphi)$",
        "$G \\simeq \\ker(\\varphi) \\times \\text{im}(\\varphi)$",
        "$\\ker(\\varphi) = \\text{im}(\\varphi)$"
      ],
      "correctIndex": 0,
      "answer": "$G / \\ker(\\varphi) \\simeq \\text{im}(\\varphi)$",
      "hint1": "Le morphisme induit $\\bar{\\varphi} : x \\ker \\varphi \\mapsto \\varphi(x)$ est un isomorphisme.",
      "hint2": "Résultat fondamental de factorisation des morphismes.",
      "solution": "Le premier théorème d'isomorphisme affirme que pour tout morphisme $\\varphi$, la projection au quotient induit un isomorphisme canonique $G / \\ker(\\varphi) \\simeq \\text{im}(\\varphi)$."
    },
    {
      "id": "L3-GRP1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Groupes d'ordre premier",
      "skill": "Classifier les groupes finis simples d'ordre premier",
      "statement": "Tout groupe $G$ dont le cardinal est un nombre premier $p$ est nécessairement :",
      "options": [
        "Cyclique et isomorphe à $\\mathbb{Z}/p\\mathbb{Z}$",
        "Non commutatif",
        "Infini",
        "Dépourvu de sous-groupes propres"
      ],
      "correctIndex": 0,
      "answer": "Cyclique et isomorphe à $\\mathbb{Z}/p\\mathbb{Z}$",
      "hint1": "Prends un élément $x \\ne e$. L'ordre du sous-groupe $\\langle x \\rangle$ divise $p$.",
      "hint2": "Comme $p$ est premier et $x \\ne e$, l'ordre est $p$, donc $\\langle x \\rangle = G$.",
      "solution": "Pour tout élément $x \\ne e$, l'ordre de $x$ divise $p$ et est $>1$. Comme $p$ est premier, l'ordre est exactement $p$, donc $x$ engendre $G$. $G$ est cyclique isomorphe à $\\mathbb{Z}/p\\mathbb{Z}$."
    }
  ],
  "L3-GRP2": [
    {
      "id": "L3-GRP2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Formule orbite-stabilisateur",
      "skill": "Calculer le cardinal d'une orbite",
      "statement": "Lorsqu'un groupe fini $G$ agit sur un ensemble $X$, pour tout $x \\in X$, la formule orbite-stabilisateur stipule que :",
      "options": [
        "$|G| = |\\text{Orb}(x)| \\times |\\text{Stab}(x)|$",
        "$|G| = |\\text{Orb}(x)| + |\\text{Stab}(x)|$",
        "$|\\text{Orb}(x)| = |G| - |\\text{Stab}(x)|$",
        "$|\\text{Stab}(x)| = 1$"
      ],
      "correctIndex": 0,
      "answer": "$|G| = |\\text{Orb}(x)| \\times |\\text{Stab}(x)|$",
      "hint1": "L'orbite est en bijection avec l'ensemble des classes à gauche modulo le stabilisateur : $\\text{Orb}(x) \\simeq G / \\text{Stab}(x)$.",
      "hint2": "Par Lagrange, $|G / \\text{Stab}(x)| = |G| / |\\text{Stab}(x)|$.",
      "solution": "La formule orbite-stabilisateur affirme que pour toute action d'un groupe fini, $|G| = |\\text{Orb}(x)| \\times |\\text{Stab}(x)|$."
    },
    {
      "id": "L3-GRP2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Action par conjugaison et centre d'un p-groupe",
      "skill": "Propriétés du centre d'un $p$-groupe",
      "statement": "Si $G$ est un groupe d'ordre $p^k$ (avec $p$ premier et $k \\ge 1$), que peut-on affirmer sur son centre $Z(G)$ ?",
      "options": [
        "Son centre est non trivial ($|Z(G)| \\ge p$)",
        "$Z(G) = \\{e\\}$",
        "$Z(G) = G$ toujours",
        "$Z(G)$ est d'ordre infini"
      ],
      "correctIndex": 0,
      "answer": "Son centre est non trivial ($|Z(G)| \\ge p$)",
      "hint1": "Applique la formule des classes : $|G| = |Z(G)| + \\sum |\\text{Orb}(x_i)|$.",
      "hint2": "Chaque orbite non ponctuelle a une taille divisible par $p$, donc $p \\mid |Z(G)|$.",
      "solution": "Par la formule des classes, $|G| = |Z(G)| + \\sum [G : \\text{Stab}(x)]$. Comme $p$ divise $|G|$ et chaque terme de la somme, $p$ divise $|Z(G)|$. Donc $|Z(G)| \\ge p > 1$ : le centre d'un $p$-groupe n'est jamais trivial."
    },
    {
      "id": "L3-GRP2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Formule de Burnside",
      "skill": "Compter le nombre d'orbites d'une action",
      "statement": "La formule de Burnside (ou lemme de Cauchy-Frobenius) donne le nombre d'orbites $N$ d'un groupe fini $G$ agissant sur $X$ :",
      "options": [
        "$N = \\frac{1}{|G|} \\sum_{g \\in G} |\\text{Fix}(g)|$",
        "$N = \\sum_{g \\in G} |\\text{Fix}(g)|$",
        "$N = \\frac{|X|}{|G|}$",
        "$N = \\max_{g} |\\text{Fix}(g)|$"
      ],
      "correctIndex": 0,
      "answer": "$N = \\frac{1}{|G|} \\sum_{g \\in G} |\\text{Fix}(g)|$",
      "hint1": "Le nombre d'orbites est la moyenne du nombre de points fixes sous chaque élément du groupe.",
      "hint2": "$\\text{Fix}(g) = \\{x \\in X \\mid g \\cdot x = x\\}$.",
      "solution": "D'après la formule de Burnside, le nombre d'orbites est égal à la moyenne arithmétique des cardinaux des ensembles de points fixes : $N = \\frac{1}{|G|} \\sum_{g \\in G} |\\text{Fix}(g)|$."
    },
    {
      "id": "L3-GRP2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorèmes de Sylow",
      "skill": "Existence et propriétés des $p$-sous-groupes de Sylow",
      "statement": "Si $|G| = p^k m$ avec $p$ premier ne divisant pas $m$, que garantit le premier théorème de Sylow ?",
      "options": [
        "Il existe au moins un sous-groupe d'ordre $p^k$ (appelé $p$-Sylow)",
        "Tous les sous-groupes sont distingués",
        "$G$ est abélien",
        "Il existe un sous-groupe d'ordre $m$"
      ],
      "correctIndex": 0,
      "answer": "Il existe au moins un sous-groupe d'ordre $p^k$ (appelé $p$-Sylow)",
      "hint1": "C'est l'un des théorèmes les plus puissants pour analyser la structure des groupes finis.",
      "hint2": "Un $p$-Sylow est un sous-groupe d'ordre la plus grande puissance de $p$ divisant $|G|$.",
      "solution": "Le premier théorème de Sylow garantit l'existence d'au moins un sous-groupe d'ordre $p^k$, appelé $p$-sous-groupe de Sylow de $G$."
    }
  ],
  "L3-ANN": [
    {
      "id": "L3-ANN-1",
      "tier": 1,
      "type": "mcq",
      "title": "Idéal maximal et corps quotient",
      "skill": "Caractériser les idéaux maximaux d'un anneau commutatif unitaire",
      "statement": "Soit $A$ un anneau commutatif unitaire et $I$ un idéal de $A$. L'anneau quotient $A/I$ est un corps si et seulement si $I$ est :",
      "options": [
        "Un idéal maximal",
        "Un idéal premier",
        "L'idéal nul $\\{0\\}$",
        "Principal"
      ],
      "correctIndex": 0,
      "answer": "Un idéal maximal",
      "hint1": "Si $I$ est maximal, il n'y a aucun idéal intermédiaire entre $I$ et $A$.",
      "hint2": "Dans le quotient, cela signifie que tout élément non nul engendre l'anneau entier, donc est inversible.",
      "solution": "Dans un anneau commutatif unitaire, $A/I$ est un corps si et seulement si $I$ est un idéal maximal de $A$ (tandis que $A/I$ est intègre si et seulement si $I$ est premier)."
    },
    {
      "id": "L3-ANN-2",
      "tier": 2,
      "type": "mcq",
      "title": "Construction des nombres complexes par quotient",
      "skill": "Identifier un corps quotient de polynômes",
      "statement": "À quel corps bien connu l'anneau quotient $\\mathbb{R}[X] / (X^2 + 1)$ est-il isomorphe ?",
      "options": [
        "$\\mathbb{C}$",
        "$\\mathbb{R} \\times \\mathbb{R}$",
        "$\\mathbb{R}$",
        "$\\mathbb{H}$"
      ],
      "correctIndex": 0,
      "answer": "$\\mathbb{C}$",
      "hint1": "$X^2 + 1$ est irréductible sur $\\mathbb{R}$, donc l'idéal $(X^2 + 1)$ est maximal.",
      "hint2": "La classe de $X$ vérifie $X^2 = -1$, jouant le rôle de $i$.",
      "solution": "Comme $X^2 + 1$ est irréductible dans $\\mathbb{R}[X]$, le quotient est un corps. Le morphisme d'évaluation $P \\mapsto P(i)$ induit un isomorphisme canonique $\\mathbb{R}[X]/(X^2+1) \\simeq \\mathbb{C}$."
    },
    {
      "id": "L3-ANN-3",
      "tier": 3,
      "type": "mcq",
      "title": "Anneaux principaux et bezoutiens",
      "skill": "Propriétés des anneaux principaux",
      "statement": "Dans un anneau principal (comme $\\mathbb{Z}$ ou $K[X]$), tout idéal $I$ :",
      "options": [
        "Est engendré par un unique élément ($I = (a)$)",
        "Est un corps",
        "Est maximal",
        "Est nul"
      ],
      "correctIndex": 0,
      "answer": "Est engendré par un unique élément ($I = (a)$)",
      "hint1": "C'est la définition d'un anneau principal : intègre et tous ses idéaux sont principaux.",
      "hint2": "Le générateur est le pgcd des éléments de l'idéal.",
      "solution": "Par définition, un anneau est principal s'il est intègre et si chacun de ses idéaux est engendré par un seul élément : $\\forall I, \\exists a \\in A, I = aA = (a)$."
    },
    {
      "id": "L3-ANN-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème des restes chinois",
      "skill": "Isomorphisme d'anneaux pour des idéaux comaximaux",
      "statement": "Si $m$ et $n$ sont deux entiers premiers entre eux, que garantit le théorème des restes chinois ?",
      "options": [
        "$\\mathbb{Z}/(mn)\\mathbb{Z} \\simeq \\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z}$",
        "$\\mathbb{Z}/(mn)\\mathbb{Z} \\simeq \\mathbb{Z}/(m+n)\\mathbb{Z}$",
        "$mn = m + n$",
        "$\\mathbb{Z}/m\\mathbb{Z}$ est un sous-anneau de $\\mathbb{Z}/n\\mathbb{Z}$"
      ],
      "correctIndex": 0,
      "answer": "$\\mathbb{Z}/(mn)\\mathbb{Z} \\simeq \\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z}$",
      "hint1": "Deux idéaux comaximaux $I + J = A$ vérifient $A/(I \\cap J) \\simeq A/I \\times A/J$.",
      "hint2": "Pour $\\text{pgcd}(m, n) = 1$, $(m) \\cap (n) = (mn)$.",
      "solution": "Le théorème des restes chinois établit l'isomorphisme d'anneaux $\\mathbb{Z}/(mn)\\mathbb{Z} \\simeq \\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z}$ dès lors que $\\text{pgcd}(m, n) = 1$."
    }
  ],
  "L3-MET": [
    {
      "id": "L3-MET-1",
      "tier": 1,
      "type": "mcq",
      "title": "Équivalence des normes en dimension finie",
      "skill": "Théorème fondamental de topologie vectorielle",
      "statement": "Sur un espace vectoriel réel de dimension finie $E$, que peut-on affirmer sur les normes ?",
      "options": [
        "Toutes les normes sont équivalentes",
        "Seules les normes euclidiennes sont équivalentes",
        "Aucune norme n'est équivalente",
        "Elles sont équivalentes uniquement si $\\dim E \\le 2$"
      ],
      "correctIndex": 0,
      "answer": "Toutes les normes sont équivalentes",
      "hint1": "Théorème de compacité de la sphère unité.",
      "hint2": "Deux normes $N_1, N_2$ vérifient toujours $\\alpha N_1 \\le N_2 \\le \\beta N_1$.",
      "solution": "Sur tout espace vectoriel réel ou complexe de dimension finie, toutes les normes définissent la même topologie et sont deux à deux équivalentes."
    },
    {
      "id": "L3-MET-2",
      "tier": 2,
      "type": "mcq",
      "title": "Intérieur et adhérence d'un ensemble",
      "skill": "Calculer l'intérieur et l'adhérence dans $\\mathbb{R}$",
      "statement": "Dans $\\mathbb{R}$ muni de la topologie usuelle, que valent respectivement l'intérieur $\\overset{\\circ}{\\mathbb{Q}}$ et l'adhérence $\\overline{\\mathbb{Q}}$ de $\\mathbb{Q}$ ?",
      "options": [
        "$\\overset{\\circ}{\\mathbb{Q}} = \\emptyset$ et $\\overline{\\mathbb{Q}} = \\mathbb{R}$",
        "$\\overset{\\circ}{\\mathbb{Q}} = \\mathbb{Q}$ et $\\overline{\\mathbb{Q}} = \\mathbb{R}$",
        "$\\overset{\\circ}{\\mathbb{Q}} = \\emptyset$ et $\\overline{\\mathbb{Q}} = \\mathbb{Q}$",
        "$\\overset{\\circ}{\\mathbb{Q}} = \\mathbb{R}$ et $\\overline{\\mathbb{Q}} = \\mathbb{R}$"
      ],
      "correctIndex": 0,
      "answer": "$\\overset{\\circ}{\\mathbb{Q}} = \\emptyset$ et $\\overline{\\mathbb{Q}} = \\mathbb{R}$",
      "hint1": "Tout intervalle ouvert non vide contient des irrationnels, donc $\\mathbb{Q}$ ne contient aucun ouvert non vide.",
      "hint2": "$\\mathbb{Q}$ est dense dans $\\mathbb{R}$.",
      "solution": "Comme $\\mathbb{Q}$ et $\\mathbb{R} \\setminus \\mathbb{Q}$ sont denses dans $\\mathbb{R}$, $\\mathbb{Q}$ est d'intérieur vide et d'adhérence $\\mathbb{R}$ tout entier."
    },
    {
      "id": "L3-MET-3",
      "tier": 3,
      "type": "mcq",
      "title": "Ensembles compacts dans R^n",
      "skill": "Théorème de Borel-Lebesgue",
      "statement": "Dans $\\mathbb{R}^n$ muni de sa topologie usuelle, une partie $K$ est compacte si et seulement si :",
      "options": [
        "$K$ est fermée et bornée",
        "$K$ est ouverte et bornée",
        "$K$ est convexe",
        "$K$ est dénombrable"
      ],
      "correctIndex": 0,
      "answer": "$K$ est fermée et bornée",
      "hint1": "Théorème de Borel-Lebesgue (ou Heine-Borel).",
      "hint2": "Attention : ce critère n'est vrai qu'en dimension finie !",
      "solution": "D'après le théorème de Borel-Lebesgue, en dimension finie, la compacité équivaut à être fermé et borné."
    },
    {
      "id": "L3-MET-4",
      "tier": 4,
      "type": "mcq",
      "title": "Applications lipschitziennes et complétude",
      "skill": "Continuité uniforme et conservation des suites de Cauchy",
      "statement": "Si $f : E \\to F$ est une application $k$-lipschitzienne entre deux espaces métriques, alors $f$ transforme :",
      "options": [
        "Toute suite de Cauchy de $E$ en une suite de Cauchy de $F$",
        "Tout fermé de $E$ en un fermé de $F$",
        "Tout ouvert de $E$ en un ouvert de $F$",
        "Toute suite bornée en une suite convergente"
      ],
      "correctIndex": 0,
      "answer": "Toute suite de Cauchy de $E$ en une suite de Cauchy de $F$",
      "hint1": "$d_F(f(x_p), f(x_q)) \\le k d_E(x_p, x_q)$.",
      "hint2": "Si $(x_n)$ est de Cauchy, $d_E(x_p, x_q) \\to 0$, d'où $d_F(f(x_p), f(x_q)) \\to 0$.",
      "solution": "Puisque $d_F(f(x_p), f(x_q)) \\le k \\cdot d_E(x_p, x_q)$, l'image d'une suite de Cauchy est immédiatement une suite de Cauchy."
    }
  ],
  "L3-BAN": [
    {
      "id": "L3-BAN-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème du point fixe de Picard-Banach",
      "skill": "Énoncer le théorème de point fixe contractant",
      "statement": "Soit $(E, d)$ un espace métrique complet et $f : E \\to E$ une application strictement contractante ($k < 1$). Que garantit le théorème de Banach ?",
      "options": [
        "$f$ admet un unique point fixe",
        "$f$ admet une infinité de points fixes",
        "$f$ est surjective mais n'a pas de point fixe",
        "$f$ est bornée"
      ],
      "correctIndex": 0,
      "answer": "$f$ admet un unique point fixe",
      "hint1": "Théorème fondamental d'analyse appliqué aux suites d'approximations successives $x_{n+1} = f(x_n)$.",
      "hint2": "L'existence et l'unicité sont garanties dans tout espace complet.",
      "solution": "Le théorème du point fixe de Banach affirme que toute application strictement contractante d'un espace métrique complet dans lui-même possède un unique point fixe."
    },
    {
      "id": "L3-BAN-2",
      "tier": 2,
      "type": "mcq",
      "title": "Espace de Banach",
      "skill": "Connaître la définition d'un espace de Banach",
      "statement": "Un espace vectoriel normé $(E, \\|\\cdot\\|)$ est appelé un espace de Banach lorsqu'il est :",
      "options": [
        "Complet pour la distance induite par la norme",
        "De dimension finie",
        "Muni d'un produit scalaire",
        "Séparable"
      ],
      "correctIndex": 0,
      "answer": "Complet pour la distance induite par la norme",
      "hint1": "Un espace de Banach est un evn complet.",
      "hint2": "S'il possède en plus un produit scalaire, c'est un espace de Hilbert.",
      "solution": "Par définition, un espace de Banach est un espace vectoriel normé complet pour la métrique issue de sa norme."
    },
    {
      "id": "L3-BAN-3",
      "tier": 3,
      "type": "mcq",
      "title": "Connexité et théorème des valeurs intermédiaires",
      "skill": "Propriétés topologiques des espaces connexes",
      "statement": "Soit $E$ un espace topologique connexe et $f : E \\to \\mathbb{R}$ continue. Que peut-on affirmer sur $f(E)$ ?",
      "options": [
        "$f(E)$ est un intervalle de $\\mathbb{R}$",
        "$f(E)$ est un ensemble fini",
        "$f(E)$ est un ouvert de $\\mathbb{R}$",
        "$f(E)$ est borné"
      ],
      "correctIndex": 0,
      "answer": "$f(E)$ est un intervalle de $\\mathbb{R}$",
      "hint1": "L'image continue d'un connexe est connexe.",
      "hint2": "Les seuls connexes de $\\mathbb{R}$ sont les intervalles.",
      "solution": "Comme l'image continue d'un espace connexe est connexe, et que les parties connexes de $\\mathbb{R}$ sont exactement les intervalles, $f(E)$ est un intervalle de $\\mathbb{R}$."
    },
    {
      "id": "L3-BAN-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème de Baire",
      "skill": "Propriétés des espaces de Baire",
      "statement": "Dans un espace métrique complet $(E, d)$, que stipule le théorème de Baire pour toute suite $(O_n)$ d'ouverts denses ?",
      "options": [
        "L'intersection $\\bigcap_{n=1}^\\infty O_n$ est dense dans $E$",
        "L'intersection est vide",
        "L'intersection est compacte",
        "L'union est fermée"
      ],
      "correctIndex": 0,
      "answer": "L'intersection $\\bigcap_{n=1}^\\infty O_n$ est dense dans $E$",
      "hint1": "Théorème de catégorie de Baire.",
      "hint2": "Une intersection dénombrable d'ouverts denses reste dense dans un espace complet.",
      "solution": "Le théorème de Baire énonce que dans tout espace métrique complet (ou localement compact), toute intersection dénombrable d'ouverts denses est dense."
    }
  ],
  "L3-CMP": [
    {
      "id": "L3-CMP-1",
      "tier": 1,
      "type": "mcq",
      "title": "Équations de Cauchy-Riemann",
      "skill": "Caractériser les fonctions holomorphes",
      "statement": "Pour $f(x + iy) = u(x, y) + i v(x, y)$, quelles sont les équations de Cauchy-Riemann exprimant l'holomorphie ?",
      "options": [
        "$\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ et $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$",
        "$\\frac{\\partial u}{\\partial x} = \\frac{\\partial u}{\\partial y}$ et $\\frac{\\partial v}{\\partial x} = \\frac{\\partial v}{\\partial y}$",
        "$\\Delta u + \\Delta v = 0$",
        "$\\frac{\\partial u}{\\partial x} = -\\frac{\\partial v}{\\partial y}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ et $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$",
      "hint1": "La différentielle doit être $\\mathbb{C}$-linéaire (multiplication par un nombre complexe).",
      "hint2": "La matrice jacobienne est de la forme $\\begin{pmatrix} a & -b \\\\ b & a \\end{pmatrix}$.",
      "solution": "La $\\mathbb{C}$-dérivabilité équivaut aux équations de Cauchy-Riemann : $\\partial_x u = \\partial_y v$ et $\\partial_y u = -\\partial_x v$."
    },
    {
      "id": "L3-CMP-2",
      "tier": 2,
      "type": "mcq",
      "title": "Formule intégrale de Cauchy",
      "skill": "Évaluer une intégrale de contour",
      "statement": "Soit $\\gamma$ le cercle unité orienté positivement. Que vaut l'intégrale $\\oint_\\gamma \\frac{e^z}{z} dz$ ?",
      "options": [
        "$2i\\pi$",
        "$0$",
        "$1$",
        "$\\pi$"
      ],
      "correctIndex": 0,
      "answer": "$2i\\pi$",
      "hint1": "Applique la formule intégrale de Cauchy : $\\oint \\frac{f(z)}{z - z_0} dz = 2i\\pi f(z_0)$.",
      "hint2": "Ici $f(z) = e^z$ et $z_0 = 0$. $f(0) = 1$.",
      "solution": "Par la formule intégrale de Cauchy, $\\oint_\\gamma \\frac{e^z}{z} dz = 2i\\pi e^0 = 2i\\pi$."
    },
    {
      "id": "L3-CMP-3",
      "tier": 3,
      "type": "mcq",
      "title": "Théorème des résidus",
      "skill": "Calculer une intégrale de contour par les résidus",
      "statement": "Quel est le résidu de $f(z) = \\frac{1}{z^2 + 1}$ au pôle simple $z = i$ ?",
      "options": [
        "$-\\frac{i}{2}$",
        "$\\frac{1}{2}$",
        "$i$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$-\\frac{i}{2}$",
      "hint1": "$\\text{Res}(f, i) = \\lim_{z \\to i} (z - i) f(z)$.",
      "hint2": "$\\lim_{z \\to i} \\frac{z - i}{(z - i)(z + i)} = \\frac{1}{2i} = -\\frac{i}{2}$.",
      "solution": "Comme $i$ est un pôle simple, $\\text{Res}(f, i) = \\lim_{z \\to i} \\frac{1}{z + i} = \\frac{1}{2i} = -\\frac{i}{2}$."
    },
    {
      "id": "L3-CMP-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème de Liouville",
      "skill": "Propriétés des fonctions entières",
      "statement": "D'après le théorème de Liouville, toute fonction holomorphe sur $\\mathbb{C}$ tout entier (entière) et bornée est :",
      "options": [
        "Constante",
        "Identiquement nulle",
        "Périodique",
        "De carré sommable"
      ],
      "correctIndex": 0,
      "answer": "Constante",
      "hint1": "Théorème de Liouville : si $f$ est holomorphe sur $\\mathbb{C}$ et $|f(z)| \\le M$, alors $f'$ est nulle.",
      "hint2": "Ce théorème fournit une démonstration élégante du théorème de d'Alembert-Gauss.",
      "solution": "Le théorème de Liouville affirme que les seules fonctions entières bornées sont les fonctions constantes."
    }
  ],
  "L3-SDF": [
    {
      "id": "L3-SDF-1",
      "tier": 1,
      "type": "mcq",
      "title": "Identité du parallélogramme en espace de Hilbert",
      "skill": "Propriété métrique d'un espace hilbertien",
      "statement": "Dans un espace de Hilbert $H$, que vaut $\\|x + y\\|^2 + \\|x - y\\|^2$ ?",
      "options": [
        "$2\\|x\\|^2 + 2\\|y\\|^2$",
        "$\\|x\\|^2 + \\|y\\|^2$",
        "$4\\langle x, y \\rangle$",
        "$(\\|x\\| + \\|y\\|)^2$"
      ],
      "correctIndex": 0,
      "answer": "$2\\|x\\|^2 + 2\\|y\\|^2$",
      "hint1": "Développe $\\langle x+y, x+y \\rangle + \\langle x-y, x-y \\rangle$.",
      "hint2": "Les termes croisés se simplifient.",
      "solution": "$\\langle x+y, x+y \\rangle + \\langle x-y, x-y \\rangle = (\\|x\\|^2 + 2\\text{Re}\\langle x, y \\rangle + \\|y\\|^2) + (\\|x\\|^2 - 2\\text{Re}\\langle x, y \\rangle + \\|y\\|^2) = 2\\|x\\|^2 + 2\\|y\\|^2$."
    },
    {
      "id": "L3-SDF-2",
      "tier": 2,
      "type": "mcq",
      "title": "Projection sur un convexe fermé",
      "skill": "Théorème de projection hilbertienne",
      "statement": "Soit $C$ un convexe fermé non vide d'un espace de Hilbert $H$ et $x \\in H$. Que garantit le théorème de projection ?",
      "options": [
        "Il existe un unique point $p_C(x) \\in C$ réalisant la distance $d(x, C)$",
        "Il existe une infinité de points réalisant le minimum",
        "La projection n'existe que si $C$ est un sous-espace vectoriel",
        "La distance est toujours nulle"
      ],
      "correctIndex": 0,
      "answer": "Il existe un unique point $p_C(x) \\in C$ réalisant la distance $d(x, C)$",
      "hint1": "Théorème de projection sur un convexe fermé dans un espace de Hilbert.",
      "hint2": "La stricte convexité de la norme garantit l'unicité.",
      "solution": "Dans un espace de Hilbert, pour tout convexe fermé non vide $C$, il existe un unique élément $p_C(x) \\in C$ tel que $\\|x - p_C(x)\\| = \\inf_{y \\in C} \\|x - y\\|$."
    },
    {
      "id": "L3-SDF-3",
      "tier": 3,
      "type": "mcq",
      "title": "Théorème de représentation de Riesz",
      "skill": "Identifier le dual topologique d'un espace de Hilbert",
      "statement": "Pour toute forme linéaire continue $\\varphi \\in H^*$ sur un espace de Hilbert $H$, que garantit le théorème de Riesz ?",
      "options": [
        "Il existe un unique vecteur $y \\in H$ tel que $\\forall x \\in H, \\varphi(x) = \\langle x, y \\rangle$",
        "$\\ker(\\varphi) = \\{0\\}$",
        "$\\varphi$ est surjective sur $H$",
        "$\\|\\varphi\\| = 1$"
      ],
      "correctIndex": 0,
      "answer": "Il existe un unique vecteur $y \\in H$ tel que $\\forall x \\in H, \\varphi(x) = \\langle x, y \\rangle$",
      "hint1": "Tout élément du dual s'identifie au produit scalaire avec un vecteur fixé.",
      "hint2": "De plus, $\\|\\varphi\\|_{H^*} = \\|y\\|_H$.",
      "solution": "Le théorème de représentation de Riesz établit un isomorphisme isométrique entre $H$ et son dual topologique $H^*$ via $x \\mapsto \\langle x, y \\rangle$."
    },
    {
      "id": "L3-SDF-4",
      "tier": 4,
      "type": "mcq",
      "title": "Identité de Parseval",
      "skill": "Décomposition sur une base hilbertienne",
      "statement": "Soit $(e_n)_{n \\in \\mathbb{N}}$ une base hilbertienne de $H$. Quelle relation caractérise la norme de tout vecteur $x \\in H$ ?",
      "options": [
        "$\\|x\\|^2 = \\sum_{n=0}^\\infty |\\langle x, e_n \\rangle|^2$",
        "$\\|x\\| = \\sum_{n=0}^\\infty |\\langle x, e_n \\rangle|$",
        "$\\langle x, e_n \\rangle = 0$ pour tout $n$",
        "$\\|x\\|^2 = \\prod_{n=0}^\\infty |\\langle x, e_n \\rangle|^2$"
      ],
      "correctIndex": 0,
      "answer": "$\\|x\\|^2 = \\sum_{n=0}^\\infty |\\langle x, e_n \\rangle|^2$",
      "hint1": "C'est l'identité de Parseval, généralisation infinie du théorème de Pythagore.",
      "hint2": "Les coefficients de Fourier hilbertiens sont $c_n = \\langle x, e_n \\rangle$.",
      "solution": "Pour toute base hilbertienne orthonormale complète, l'égalité de Parseval affirme que $\\|x\\|^2 = \\sum_{n=0}^\\infty |\\langle x, e_n \\rangle|^2$."
    }
  ],
  "L3-SER": [
    {
      "id": "L3-SER-1",
      "tier": 1,
      "type": "mcq",
      "title": "Norme subordonnée d'une matrice",
      "skill": "Définition de la norme d'opérateur",
      "statement": "Pour $A \\in \\mathcal{M}_n(K)$, comment est définie la norme subordonnée à une norme vectorielle $\\|\\cdot\\|$ ?",
      "options": [
        "$\\|\\|A\\|\\| = \\sup_{x \\ne 0} \\frac{\\|Ax\\|}{\\|x\\|} = \\sup_{\\|x\\|=1} \\|Ax\\|$",
        "$\\|\\|A\\|\\| = \\sum_{i,j} |a_{i,j}|$",
        "$\\|\\|A\\|\\| = \\det(A)$",
        "$\\|\\|A\\|\\| = \\max_{i,j} |a_{i,j}|$"
      ],
      "correctIndex": 0,
      "answer": "$\\|\\|A\\|\\| = \\sup_{x \\ne 0} \\frac{\\|Ax\\|}{\\|x\\|} = \\sup_{\\|x\\|=1} \\|Ax\\|$",
      "hint1": "C'est la borne supérieure du facteur d'amplification d'un vecteur unitaire.",
      "hint2": "Elle vérifie $\\|Ax\\| \\le \\|A\\| \\|x\\|$.",
      "solution": "Par définition, la norme subordonnée est la norme d'opérateur $\\|A\\| = \\sup_{\\|x\\|=1} \\|Ax\\|$."
    },
    {
      "id": "L3-SER-2",
      "tier": 2,
      "type": "mcq",
      "title": "Rayon spectral et formule de Gelfand",
      "skill": "Calculer le rayon spectral $\\rho(A)$",
      "statement": "Le rayon spectral $\\rho(A)$ d'une matrice $A \\in \\mathcal{M}_n(\\mathbb{C})$ est défini par :",
      "options": [
        "$\\rho(A) = \\max \\{|\\lambda| \\mid \\lambda \\in \\text{Sp}(A)\\}$",
        "$\\rho(A) = \\text{Tr}(A)$",
        "$\\rho(A) = \\|A\\|$",
        "$\\rho(A) = \\det(A)$"
      ],
      "correctIndex": 0,
      "answer": "$\\rho(A) = \\max \\{|\\lambda| \\mid \\lambda \\in \\text{Sp}(A)\\}$",
      "hint1": "C'est le module maximal des valeurs propres complexes de la matrice.",
      "hint2": "La formule de Gelfand assure que $\\rho(A) = \\lim_{k \\to \\infty} \\|A^k\\|^{1/k}$.",
      "solution": "Le rayon spectral est le plus grand module des valeurs propres : $\\rho(A) = \\max \\{|\\lambda| \\mid \\lambda \\in \\text{Sp}(A)\\}$."
    },
    {
      "id": "L3-SER-3",
      "tier": 3,
      "type": "mcq",
      "title": "Déterminant de l'exponentielle de matrice",
      "skill": "Formule $\\det(\\exp A) = e^{\\text{Tr}(A)}$",
      "statement": "Pour toute matrice carrée $A \\in \\mathcal{M}_n(\\mathbb{C})$, que vaut $\\det(\\exp(A))$ ?",
      "options": [
        "$e^{\\text{Tr}(A)}$",
        "$\\exp(\\det A)$",
        "$\\text{Tr}(\\exp A)$",
        "$1$"
      ],
      "correctIndex": 0,
      "answer": "$e^{\\text{Tr}(A)}$",
      "hint1": "Par trigonalisation de $A$, les valeurs propres de $\\exp(A)$ sont $e^{\\lambda_i}$.",
      "hint2": "Le produit des $e^{\\lambda_i}$ est $e^{\\sum \\lambda_i} = e^{\\text{Tr}(A)}$.",
      "solution": "Les valeurs propres de $\\exp(A)$ sont les $e^{\\lambda_i}$, donc $\\det(\\exp A) = \\prod e^{\\lambda_i} = e^{\\sum \\lambda_i} = e^{\\text{Tr}(A)}$."
    },
    {
      "id": "L3-SER-4",
      "tier": 4,
      "type": "mcq",
      "title": "Densité des matrices diagonalisables",
      "skill": "Topologie de $\\mathcal{M}_n(\\mathbb{C})$",
      "statement": "Dans $\\mathcal{M}_n(\\mathbb{C})$ muni de sa topologie usuelle, le sous-ensemble $\\mathcal{D}_n(\\mathbb{C})$ des matrices diagonalisables est :",
      "options": [
        "Dense et ouvert",
        "Fermé",
        "Compact",
        "D'intérieur vide"
      ],
      "correctIndex": 0,
      "answer": "Dense et ouvert",
      "hint1": "Toute matrice est limite de matrices à valeurs propres distinctes (discriminant non nul).",
      "hint2": "Le discriminant de $\\chi_A$ est un polynôme non nul en les coefficients.",
      "solution": "L'ensemble des matrices à valeurs propres distinctes est un ouvert dense (complémentaire des zéros du discriminant). Comme elles sont diagonalisables, $\\mathcal{D}_n(\\mathbb{C})$ est dense dans $\\mathcal{M}_n(\\mathbb{C})$."
    }
  ],
  "L3-FOU": [
    {
      "id": "L3-FOU-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Dirichlet pour les séries de Fourier",
      "skill": "Convergence ponctuelle de la série de Fourier",
      "statement": "Soit $f$ une fonction $2\\pi$-périodique, continue par morceaux et de classe $\\mathcal{C}^1$ par morceaux. Vers quoi converge sa série de Fourier en tout point $x$ ?",
      "options": [
        "$\\frac{f(x^+) + f(x^-)}{2}$",
        "$f'(x)$",
        "$0$",
        "$\\int_{-\\pi}^\\pi f(t) dt$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{f(x^+) + f(x^-)}{2}$",
      "hint1": "Théorème classique de Dirichlet.",
      "hint2": "En un point de continuité, la série converge simplement vers $f(x)$. En un saut, vers la demi-somme des limites à gauche et à droite.",
      "solution": "D'après le théorème de Dirichlet, sous ces hypothèses de régularité, la série de Fourier converge en tout point $x$ vers la moyenne des limites à droite et à gauche : $\\frac{f(x^+) + f(x^-)}{2}$."
    },
    {
      "id": "L3-FOU-2",
      "tier": 2,
      "type": "mcq",
      "title": "Coefficients de Fourier d'une fonction paire",
      "skill": "Propriétés de parité des coefficients de Fourier",
      "statement": "Si $f$ est une fonction $2\\pi$-périodique et paire, que valent ses coefficients de Fourier $b_n = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(t) \\sin(nt) dt$ ?",
      "options": [
        "$b_n = 0$ pour tout $n \\ge 1$",
        "$b_n = a_n$",
        "$b_n = 1$",
        "$b_n = \\frac{1}{n}$"
      ],
      "correctIndex": 0,
      "answer": "$b_n = 0$ pour tout $n \\ge 1$",
      "hint1": "Le produit d'une fonction paire par une fonction impaire ($\\sin(nt)$) est une fonction impaire.",
      "hint2": "L'intégrale d'une fonction impaire sur un intervalle symétrique $[-\\pi, \\pi]$ est nulle.",
      "solution": "Comme $t \\mapsto f(t)\\sin(nt)$ est impaire, son intégrale sur $[-\\pi, \\pi]$ est nulle. Ainsi $b_n = 0$ pour tout $n \\ge 1$."
    },
    {
      "id": "L3-FOU-3",
      "tier": 3,
      "type": "mcq",
      "title": "Formule de Parseval pour séries de Fourier",
      "skill": "Calculer la somme de séries d'inverses de carrés via Parseval",
      "statement": "L'égalité de Parseval relie l'énergie de $f$ aux coefficients de Fourier réels selon :",
      "options": [
        "$\\frac{1}{2\\pi} \\int_{-\\pi}^\\pi |f(t)|^2 dt = \\frac{a_0^2}{4} + \\frac{1}{2} \\sum_{n=1}^\\infty (a_n^2 + b_n^2)$",
        "$\\int_{-\\pi}^\\pi |f(t)|^2 dt = \\sum_{n=1}^\\infty a_n b_n$",
        "$\\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(t) dt = a_0$",
        "$\\sum (a_n + b_n) = 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{2\\pi} \\int_{-\\pi}^\\pi |f(t)|^2 dt = \\frac{a_0^2}{4} + \\frac{1}{2} \\sum_{n=1}^\\infty (a_n^2 + b_n^2)$",
      "hint1": "Théorème de Parseval exprimant l'isométrie de l'espace de Hilbert $L^2$.",
      "hint2": "Permet de calculer des sommes comme $\\sum 1/n^2 = \\pi^2/6$.",
      "solution": "La formule de Parseval assure l'égalité des normes $L^2$ et $\\ell^2$ : $\\frac{1}{2\\pi}\\int_{-\\pi}^\\pi |f(t)|^2 dt = \\frac{a_0^2}{4} + \\frac{1}{2}\\sum_{n=1}^\\infty (a_n^2 + b_n^2)$."
    },
    {
      "id": "L3-FOU-4",
      "tier": 4,
      "type": "mcq",
      "title": "Lemme de Riemann-Lebesgue",
      "skill": "Comportement asymptotique des coefficients de Fourier",
      "statement": "Pour toute fonction $f \\in L^1([-\\pi, \\pi])$, quelle est la limite quand $n \\to +\\infty$ de $\\int_{-\\pi}^\\pi f(t) e^{-int} dt$ ?",
      "options": [
        "$0$",
        "$1$",
        "$+\\infty$",
        "$f(0)$"
      ],
      "correctIndex": 0,
      "answer": "$0$",
      "hint1": "C'est l'énoncé du lemme de Riemann-Lebesgue.",
      "hint2": "Les oscillations à haute fréquence provoquent une annulation par interférences.",
      "solution": "D'après le lemme de Riemann-Lebesgue, les coefficients de Fourier de toute fonction intégrable tendent vers zéro à l'infini : $\\lim_{n \\to \\pm\\infty} c_n(f) = 0$."
    }
  ],
  "L3-GPR": [
    {
      "id": "L3-GPR-1",
      "tier": 1,
      "type": "mcq",
      "title": "Coordonnées homogènes dans le plan projectif",
      "skill": "Manipuler les points du plan projectif $\\mathbb{P}^2(K)$",
      "statement": "Dans $\\mathbb{P}^2(\\mathbb{R})$, les coordonnées homogènes $(2 : 4 : 6)$ et $(1 : 2 : 3)$ représentent :",
      "options": [
        "Le même point projectif",
        "Deux points distincts",
        "Une droite projective",
        "Le point à l'infini uniquement"
      ],
      "correctIndex": 0,
      "answer": "Le même point projectif",
      "hint1": "Dans l'espace projectif, deux triplets non nuls proportionnels définissent la même droite vectorielle.",
      "hint2": "$(2, 4, 6) = 2(1, 2, 3)$.",
      "solution": "Les coordonnées homogènes sont définies à un scalaire non nul près : $(2 : 4 : 6) = 2 \\cdot (1 : 2 : 3) = (1 : 2 : 3)$. Il s'agit du même point projectif."
    },
    {
      "id": "L3-GPR-2",
      "tier": 2,
      "type": "mcq",
      "title": "Intersection de deux droites projectives",
      "skill": "Propriété fondamentale du plan projectif",
      "statement": "Dans le plan projectif $\\mathbb{P}^2(K)$, deux droites projectives distinctes :",
      "options": [
        "Se coupent toujours en exactement un point",
        "Peuvent être strictement parallèles",
        "Ne se coupent jamais",
        "Ont une infinité de points communs"
      ],
      "correctIndex": 0,
      "answer": "Se coupent toujours en exactement un point",
      "hint1": "Dans le plan projectif, les droites affines parallèles se coupent en un point à l'infini.",
      "hint2": "Deux plans vectoriels distincts de $K^3$ s'intersectent selon une droite vectorielle.",
      "solution": "Contrairement au plan affine, dans le plan projectif, deux droites distinctes se coupent toujours en un point unique (les droites parallèles s'y coupent sur la droite de l'infini)."
    },
    {
      "id": "L3-GPR-3",
      "tier": 3,
      "type": "mcq",
      "title": "Birapport de quatre points alignés",
      "skill": "Calculer le birapport $[A, B, C, D]$",
      "statement": "Pour quatre points d'abscisses respectives $a=0, b=1, c=2, d=3$, que vaut le birapport $[a, b, c, d] = \\frac{c - a}{c - b} : \\frac{d - a}{d - b}$ ?",
      "options": [
        "$\\frac{4}{3}$",
        "$\\frac{3}{4}$",
        "$-1$",
        "$2$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{4}{3}$",
      "hint1": "$\\frac{c - a}{c - b} = \\frac{2 - 0}{2 - 1} = 2$.",
      "hint2": "$\\frac{d - a}{d - b} = \\frac{3 - 0}{3 - 1} = \\frac{3}{2}$. Le rapport vaut $2 / (3/2) = 4/3$.",
      "solution": "$[a, b, c, d] = \\frac{2 - 0}{2 - 1} / \\frac{3 - 0}{3 - 1} = \\frac{2}{1} / \\frac{3}{2} = \\frac{4}{3}$."
    },
    {
      "id": "L3-GPR-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème de Desargues",
      "skill": "Homologie et perspective projective",
      "statement": "Le théorème de Desargues énonce que deux triangles sont en perspective depuis un point si et seulement si :",
      "options": [
        "Les points d'intersection de leurs côtés correspondants sont alignés",
        "Ils sont isométriques",
        "Leurs aires sont égales",
        "Ils sont inscrits dans une même conique"
      ],
      "correctIndex": 0,
      "answer": "Les points d'intersection de leurs côtés correspondants sont alignés",
      "hint1": "Perspective depuis un point (centre d'homologie) équivaut à perspective depuis une droite (axe d'homologie).",
      "hint2": "Théorème fondateur de la géométrie projective.",
      "solution": "Le théorème de Desargues affirme l'équivalence entre la perspective ponctuelle (droites reliant les sommets concourantes) et la perspective axiale (intersections des côtés homologues alignées)."
    }
  ],
  "L3-GDF": [
    {
      "id": "L3-GDF-1",
      "tier": 1,
      "type": "mcq",
      "title": "Sous-variété définie par submersion",
      "skill": "Théorème des sous-variétés implicites",
      "statement": "Soit $f : \\mathbb{R}^n \\to \\mathbb{R}^p$ ($p < n$) une application de classe $\\mathcal{C}^1$ et $0$ une valeur régulière de $f$. Quelle est la dimension de la sous-variété $M = f^{-1}(\\{0\\})$ ?",
      "options": [
        "$n - p$",
        "$p$",
        "$n$",
        "$n + p$"
      ],
      "correctIndex": 0,
      "answer": "$n - p$",
      "hint1": "Chaque équation indépendante réduit la dimension de 1.",
      "hint2": "Par le théorème des fonctions implicites, $\\dim M = n - p$.",
      "solution": "D'après le théorème de la submersion, l'image réciproque d'une valeur régulière par une application $\\mathcal{C}^1$ de $\\mathbb{R}^n$ dans $\\mathbb{R}^p$ est une sous-variété de dimension $n - p$."
    },
    {
      "id": "L3-GDF-2",
      "tier": 2,
      "type": "mcq",
      "title": "Espace tangent à la sphère unité",
      "skill": "Calculer l'espace tangent $T_x M$",
      "statement": "Pour la sphère unité $S^2 = \\{x \\in \\mathbb{R}^3 \\mid \\|x\\|^2 = 1\\}$, quel est l'espace tangent $T_x S^2$ au point $x$ ?",
      "options": [
        "L'orthogonal du vecteur $x$ : $x^\\perp = \\{v \\in \\mathbb{R}^3 \\mid \\langle x, v \\rangle = 0\\}$",
        "La droite $\\mathbb{R} x$",
        "$\\mathbb{R}^3$ tout entier",
        "Le point $x$ uniquement"
      ],
      "correctIndex": 0,
      "answer": "L'orthogonal du vecteur $x$ : $x^\\perp = \\{v \\in \\mathbb{R}^3 \\mid \\langle x, v \\rangle = 0\\}$",
      "hint1": "$S^2 = f^{-1}(\\{1\\})$ avec $f(x) = \\|x\\|^2$. $df_x(v) = 2\\langle x, v \\rangle$.",
      "hint2": "$T_x S^2 = \\ker(df_x) = \\{v \\mid \\langle x, v \\rangle = 0\\}$.",
      "solution": "Comme $f(x) = \\langle x, x \\rangle$, la différentielle est $df_x(v) = 2\\langle x, v \\rangle$. L'espace tangent est son noyau, soit le plan orthogonal $x^\\perp$."
    },
    {
      "id": "L3-GDF-3",
      "tier": 3,
      "type": "mcq",
      "title": "Crochet de Lie de deux champs de vecteurs",
      "skill": "Propriétés du crochet de Lie $[X, Y]$",
      "statement": "Le crochet de Lie $[X, Y]$ de deux champs de vecteurs lisses sur une variété $M$ est :",
      "options": [
        "Un champ de vecteurs dérivant de l'opérateur $XY - YX$",
        "Une fonction scalaire",
        "Toujours nul",
        "Une 1-forme différentielle"
      ],
      "correctIndex": 0,
      "answer": "Un champ de vecteurs dérivant de l'opérateur $XY - YX$",
      "hint1": "Bien que la composition de deux dérivations ne soit pas une dérivation d'ordre 1, leur commutateur en est une.",
      "hint2": "$[X, Y](f) = X(Y(f)) - Y(X(f))$.",
      "solution": "Le commutateur $XY - YX$ de deux dérivations d'ordre 1 est encore une dérivation d'ordre 1, définissant un unique champ de vecteurs appelé crochet de Lie $[X, Y]$."
    },
    {
      "id": "L3-GDF-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème de Stokes général",
      "skill": "Formule d'intégration sur les variétés à bord",
      "statement": "Pour toute forme différentielle $\\omega$ de degré $k-1$ à support compact sur une variété orientée à bord $M$ de dimension $k$, que stipule la formule de Stokes ?",
      "options": [
        "$\\int_M d\\omega = \\int_{\\partial M} \\omega$",
        "$\\int_M \\omega = \\int_{\\partial M} d\\omega$",
        "$\\int_M d\\omega = 0$",
        "$\\int_{\\partial M} \\omega = 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\int_M d\\omega = \\int_{\\partial M} \\omega$",
      "hint1": "Généralisation unifiée des théorèmes fondamentaux de l'analyse, Green-Riemann, Ostrogradski et Stokes classique.",
      "hint2": "L'intégrale de la dérivée extérieure sur $M$ égale l'intégrale de la forme sur le bord $\\partial M$.",
      "solution": "La formule de Stokes générale s'écrit $\\int_M d\\omega = \\int_{\\partial M} \\omega$, unifiant tous les théorèmes d'intégration par parties multidimensionnels."
    }
  ],
  "L3-NUM": [
    {
      "id": "L3-NUM-1",
      "tier": 1,
      "type": "mcq",
      "title": "Décomposition de Cholesky",
      "skill": "Conditions d'application de la factorisation $A = L L^T$",
      "statement": "Une matrice réelle $A \\in \\mathcal{M}_n(\\mathbb{R})$ admet une factorisation de Cholesky $A = L L^T$ (avec $L$ triangulaire inférieure à diagonale strictement positive) si et seulement si $A$ est :",
      "options": [
        "Symétrique définie positive",
        "Inversible quelconque",
        "Orthogonale",
        "Diagonale"
      ],
      "correctIndex": 0,
      "answer": "Symétrique définie positive",
      "hint1": "Théorème fondamental d'analyse numérique matricielle.",
      "hint2": "$A \\in \\mathcal{S}_n^{++}(\\mathbb{R})$.",
      "solution": "La factorisation de Cholesky $A = LL^T$ existe de façon unique si et seulement si la matrice $A$ est symétrique définie positive."
    },
    {
      "id": "L3-NUM-2",
      "tier": 2,
      "type": "mcq",
      "title": "Conditionnement d'un système linéaire",
      "skill": "Estimer la sensibilité d'un système numérique $Ax = b$",
      "statement": "Le conditionnement $\\text{cond}(A) = \\|A\\| \\cdot \\|A^{-1}\\|$ d'une matrice inversible vérifie toujours :",
      "options": [
        "$\\text{cond}(A) \\ge 1$",
        "$\\text{cond}(A) \\le 1$",
        "$\\text{cond}(A) = 0$",
        "$\\text{cond}(A) < 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\text{cond}(A) \\ge 1$",
      "hint1": "$\\|I_n\\| = \\|A A^{-1}\\| \\le \\|A\\| \\|A^{-1}\\|$. Pour une norme subordonnée, $\\|I_n\\| = 1$.",
      "hint2": "Plus le conditionnement est proche de 1, plus le système est bien conditionné.",
      "solution": "Comme $1 = \\|I_n\\| = \\|A A^{-1}\\| \\le \\|A\\| \\|A^{-1}\\| = \\text{cond}(A)$, le conditionnement est toujours supérieur ou égal à 1."
    },
    {
      "id": "L3-NUM-3",
      "tier": 3,
      "type": "mcq",
      "title": "Méthode de Gauss-Seidel",
      "skill": "Convergence d'une méthode itérative",
      "statement": "Pour résoudre $Ax = b$, la méthode itérative de Gauss-Seidel converge pour tout vecteur initial $x_0$ si la matrice $A$ est :",
      "options": [
        "Symétrique définie positive (ou à diagonale strictement dominante)",
        "Nilpotente",
        "Orthogonale",
        "Anti-symétrique"
      ],
      "correctIndex": 0,
      "answer": "Symétrique définie positive (ou à diagonale strictement dominante)",
      "hint1": "Théorème de convergence de Gauss-Seidel.",
      "hint2": "La matrice d'itération a alors un rayon spectral strictement inférieur à 1.",
      "solution": "La méthode de Gauss-Seidel converge inconditionnellement dès que la matrice $A$ est symétrique définie positive ou à diagonale strictement dominante."
    },
    {
      "id": "L3-NUM-4",
      "tier": 4,
      "type": "mcq",
      "title": "Décomposition en valeurs singulières (SVD)",
      "skill": "Factorisation $A = U \\Sigma V^T$",
      "statement": "Pour toute matrice rectangulaire $A \\in \\mathcal{M}_{m,n}(\\mathbb{R})$, les valeurs singulières de $A$ sont :",
      "options": [
        "Les racines carrées des valeurs propres positives de $A^T A$",
        "Les valeurs propres de $A$",
        "Les éléments diagonaux de $A$",
        "Les déterminants des blocs de $A$"
      ],
      "correctIndex": 0,
      "answer": "Les racines carrées des valeurs propres positives de $A^T A$",
      "hint1": "$A^T A$ est une matrice symétrique semi-définie positive.",
      "hint2": "Ses valeurs propres sont réelles positives : $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$.",
      "solution": "Par définition, les valeurs singulières de $A$ sont les racines carrées des valeurs propres de la matrice symétrique semi-définie positive $A^T A$."
    }
  ],
  "L3-PROG": [
    {
      "id": "L3-PROG-1",
      "tier": 1,
      "type": "mcq",
      "title": "Caractérisation de la convexité par la hessienne",
      "skill": "Identifier une fonction convexe de classe $\\mathcal{C}^2$",
      "statement": "Une fonction $f : U \\to \\mathbb{R}$ de classe $\\mathcal{C}^2$ sur un ouvert convexe $U$ est convexe si et seulement si sa matrice hessienne $\\nabla^2 f(x)$ est partout :",
      "options": [
        "Semi-définie positive",
        "Définie négative",
        "De trace nulle",
        "Inversible"
      ],
      "correctIndex": 0,
      "answer": "Semi-définie positive",
      "hint1": "En dimension 1, la dérivée seconde doit être positive : $f''(x) \\ge 0$.",
      "hint2": "En dimension supérieure, pour tout vecteur $v$, $v^T \\nabla^2 f(x) v \\ge 0$.",
      "solution": "Une fonction $\\mathcal{C}^2$ sur un ouvert convexe est convexe si et seulement si sa matrice hessienne est semi-définie positive en tout point."
    },
    {
      "id": "L3-PROG-2",
      "tier": 2,
      "type": "mcq",
      "title": "Multiplicateurs de Lagrange",
      "skill": "Optimisation sous contraintes d'égalité",
      "statement": "Pour minimiser $f(x)$ sous la contrainte $g(x) = 0$ avec $\\nabla g(x^*) \\ne 0$, la condition nécessaire du premier ordre stipule qu'il existe $\\lambda \\in \\mathbb{R}$ tel que :",
      "options": [
        "$\\nabla f(x^*) + \\lambda \\nabla g(x^*) = 0$",
        "$\\nabla f(x^*) \\cdot \\nabla g(x^*) = 1$",
        "$\\nabla f(x^*) = 0$",
        "$\\lambda = 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\nabla f(x^*) + \\lambda \\nabla g(x^*) = 0$",
      "hint1": "Le gradient de la fonction objectif doit être colinéaire au gradient de la contrainte.",
      "hint2": "C'est l'annulation du gradient du Lagrangien $\\mathcal{L}(x, \\lambda) = f(x) + \\lambda g(x)$.",
      "solution": "Au point optimal $x^*$, $\\nabla f(x^*)$ est orthogonal à l'espace tangent à la contrainte, donc colinéaire à $\\nabla g(x^*)$ : $\\nabla f(x^*) + \\lambda \\nabla g(x^*) = 0$."
    },
    {
      "id": "L3-PROG-3",
      "tier": 3,
      "type": "mcq",
      "title": "Conditions de Karush-Kuhn-Tucker (KKT)",
      "skill": "Comprendre les conditions de complémentarité",
      "statement": "Dans les conditions KKT pour minimiser $f(x)$ sous la contrainte d'inégalité $g(x) \\le 0$, quelle condition lie le multiplicateur $\\mu$ et la contrainte $g(x)$ ?",
      "options": [
        "$\\mu \\ge 0$ et $\\mu g(x) = 0$ (complémentarité)",
        "$\\mu < 0$",
        "$\\mu + g(x) = 0$",
        "$g(x) = 0$ obligatoirement"
      ],
      "correctIndex": 0,
      "answer": "$\\mu \\ge 0$ et $\\mu g(x) = 0$ (complémentarité)",
      "hint1": "Si la contrainte est inactive ($g(x) < 0$), son multiplicateur doit être nul $\\mu = 0$.",
      "hint2": "Si la contrainte est active ($g(x) = 0$), son multiplicateur peut être strictement positif.",
      "solution": "Les conditions d'exclusion ou de complémentarité imposent $\\mu \\ge 0$, $g(x) \\le 0$ et $\\mu \\cdot g(x) = 0$."
    },
    {
      "id": "L3-PROG-4",
      "tier": 4,
      "type": "mcq",
      "title": "Algorithme de descente de gradient",
      "skill": "Convergence du gradient à pas fixe",
      "statement": "Pour une fonction $L$-gradient lipschitzienne, l'algorithme de descente de gradient $x_{k+1} = x_k - \\alpha \\nabla f(x_k)$ converge dès que le pas $\\alpha$ vérifie :",
      "options": [
        "$0 < \\alpha < \\frac{2}{L}$",
        "$\\alpha > L$",
        "$\\alpha = 1$",
        "$\\alpha \\ge 2L$"
      ],
      "correctIndex": 0,
      "answer": "$0 < \\alpha < \\frac{2}{L}$",
      "hint1": "Le pas optimal garantissant la décroissance stricte de l'énergie vérifie $\\alpha < 2/L$.",
      "hint2": "Au-delà de $2/L$, l'algorithme oscille et diverge.",
      "solution": "D'après le lemme de descente, le pas de gradient doit vérifier $0 < \\alpha < 2/L$ pour assurer la convergence de la suite vers un point critique."
    }
  ],
  "L3-MES": [
    {
      "id": "L3-MES-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de convergence dominée de Lebesgue",
      "skill": "Énoncer le théorème de convergence dominée",
      "statement": "Soit $(f_n)$ une suite de fonctions mesurables convergeant presque partout vers $f$. Quelle hypothèse garantit $\\lim \\int f_n = \\int f$ ?",
      "options": [
        "Il existe $g \\in L^1$ positive telle que $|f_n| \\le g$ presque partout",
        "$f_n$ est continue",
        "$f_n$ est strictement positive",
        "L'espace de mesure est borné"
      ],
      "correctIndex": 0,
      "answer": "Il existe $g \\in L^1$ positive telle que $|f_n| \\le g$ presque partout",
      "hint1": "C'est l'hypothèse de domination intégrable.",
      "hint2": "Elle remplace avantageusement la convergence uniforme de l'intégrale de Riemann.",
      "solution": "Le théorème de convergence dominée de Lebesgue requiert l'existence d'une fonction intégrant dominante $g \\in L^1$ telle que $|f_n| \\le g$ p.p."
    },
    {
      "id": "L3-MES-2",
      "tier": 2,
      "type": "mcq",
      "title": "Lemme de Fatou",
      "skill": "Appliquer l'inégalité de Fatou",
      "statement": "Pour toute suite $(f_n)$ de fonctions mesurables positives, le lemme de Fatou établit que :",
      "options": [
        "$\\int \\liminf_{n \\to \\infty} f_n \\le \\liminf_{n \\to \\infty} \\int f_n$",
        "$\\int \\liminf f_n = \\lim \\int f_n$",
        "$\\int f_n$ converge obligatoirement",
        "$\\liminf f_n = 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\int \\liminf_{n \\to \\infty} f_n \\le \\liminf_{n \\to \\infty} \\int f_n$",
      "hint1": "L'intégrale de la limite inférieure est inférieure ou égale à la limite inférieure des intégrales.",
      "hint2": "Inégalité fondamentale pour les fonctions positives sans hypothèse de domination.",
      "solution": "Le lemme de Fatou énonce l'inégalité $\\int \\liminf f_n \\, d\\mu \\le \\liminf \\int f_n \\, d\\mu$ pour toute suite de fonctions mesurables positives."
    },
    {
      "id": "L3-MES-3",
      "tier": 3,
      "type": "mcq",
      "title": "Théorème de convergence monotone de Beppo Levi",
      "skill": "Permutation limite et intégrale pour suite croissante positive",
      "statement": "Pour une suite croissante $(f_n)$ de fonctions mesurables positives tendant vers $f$, que garantit le théorème de Beppo Levi ?",
      "options": [
        "$\\lim_{n \\to \\infty} \\int f_n = \\int f$",
        "$f$ est bornée",
        "$\\int f = 0$",
        "La suite des intégrales oscille"
      ],
      "correctIndex": 0,
      "answer": "$\\lim_{n \\to \\infty} \\int f_n = \\int f$",
      "hint1": "Croissance + positivité $\\implies$ permutation exacte limite et intégrale.",
      "hint2": "Valable même si l'intégrale limite vaut $+\\infty$.",
      "solution": "Le théorème de Beppo Levi (ou de la convergence monotone) garantit que pour toute suite croissante de fonctions mesurables positives, on a $\\int \\lim f_n = \\lim \\int f_n$."
    },
    {
      "id": "L3-MES-4",
      "tier": 4,
      "type": "mcq",
      "title": "Inégalité de Hölder pour les espaces Lp",
      "skill": "Relation entre exposants conjugués",
      "statement": "Pour $1 < p, q < \\infty$ vérifiant $\\frac{1}{p} + \\frac{1}{q} = 1$, l'inégalité de Hölder assure que :",
      "options": [
        "$\\|fg\\|_1 \\le \\|f\\|_p \\|g\\|_q$",
        "$\\|fg\\|_1 = \\|f\\|_p + \\|g\\|_q$",
        "$\\|f + g\\|_p \\le \\|f\\|_p + \\|g\\|_p$",
        "$\\|fg\\|_p \\le \\|f\\|_p \\|g\\|_p$"
      ],
      "correctIndex": 0,
      "answer": "$\\|fg\\|_1 \\le \\|f\\|_p \\|g\\|_q$",
      "hint1": "Généralisation de Cauchy-Schwarz pour $p=q=2$.",
      "hint2": "Permet ensuite de démontrer l'inégalité de Minkowski (l'inégalité triangulaire de $L^p$).",
      "solution": "L'inégalité de Hölder établit que pour deux exposants conjugués $\\frac{1}{p} + \\frac{1}{q} = 1$, on a $\\int |fg| \\, d\\mu \\le \\left(\\int |f|^p\\right)^{1/p} \\left(\\int |g|^q\\right)^{1/q}$."
    }
  ],
  "L3-PRC": [
    {
      "id": "L3-PRC-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème Central Limite (TCL)",
      "skill": "Énoncer la convergence en loi vers la loi normale",
      "statement": "Soit $(X_n)$ une suite de variables i.i.d. d'espérance $\\mu$ et de variance $\\sigma^2 > 0$. Vers quelle loi converge $Z_n = \\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma \\sqrt{n}}$ ?",
      "options": [
        "La loi normale centrée réduite $\\mathcal{N}(0, 1)$",
        "La loi de Cauchy",
        "La loi uniforme $\\mathcal{U}(0, 1)$",
        "La constante $\\mu$"
      ],
      "correctIndex": 0,
      "answer": "La loi normale centrée réduite $\\mathcal{N}(0, 1)$",
      "hint1": "C'est le résultat majeur des probabilités modernes.",
      "hint2": "Convergence en loi vers la gaussienne standard.",
      "solution": "D'après le Théorème Central Limite, la somme renormalisée $Z_n$ converge en loi vers la loi gaussienne $\\mathcal{N}(0, 1)$."
    },
    {
      "id": "L3-PRC-2",
      "tier": 2,
      "type": "mcq",
      "title": "Fonction caractéristique d'une gaussienne",
      "skill": "Connaître la transformée de Fourier probabiliste d'une loi normale",
      "statement": "Si $X \\sim \\mathcal{N}(0, \\sigma^2)$, quelle est sa fonction caractéristique $\\phi_X(t) = \\mathbb{E}[e^{itX}]$ ?",
      "options": [
        "$e^{-\\frac{\\sigma^2 t^2}{2}}$",
        "$e^{it\\sigma}$",
        "$\\frac{1}{1 + \\sigma^2 t^2}$",
        "$\\cos(\\sigma t)$"
      ],
      "correctIndex": 0,
      "answer": "$e^{-\\frac{\\sigma^2 t^2}{2}}$",
      "hint1": "La transformée de Fourier d'une gaussienne est encore une gaussienne.",
      "hint2": "Pour la loi centrée de variance $\\sigma^2$, $\\phi(t) = e^{-\\sigma^2 t^2 / 2}$.",
      "solution": "Par calcul intégral ou équation différentielle, la fonction caractéristique d'une variable normale $X \\sim \\mathcal{N}(0, \\sigma^2)$ est $\\phi_X(t) = e^{-\\frac{\\sigma^2 t^2}{2}}$."
    },
    {
      "id": "L3-PRC-3",
      "tier": 3,
      "type": "mcq",
      "title": "Vecteurs gaussiens et indépendance",
      "skill": "Propriété d'indépendance pour les variables conjointement gaussiennes",
      "statement": "Si $(X, Y)$ forme un vecteur gaussien dans $\\mathbb{R}^2$, la condition nécessaire et suffisante pour que $X$ et $Y$ soient indépendantes est :",
      "options": [
        "$\\text{Cov}(X, Y) = 0$",
        "$\\mathbb{E}[X] = \\mathbb{E}[Y]$",
        "$\\text{Var}(X) = \\text{Var}(Y)$",
        "$X$ et $Y$ sont positives"
      ],
      "correctIndex": 0,
      "answer": "$\\text{Cov}(X, Y) = 0$",
      "hint1": "Pour des variables quelconques, non-corrélation n'implique pas indépendance.",
      "hint2": "Mais pour un couple CONJOINTEMENT gaussien, non-corrélation ÉQUIVAUT à indépendance !",
      "solution": "Dans le cas particulier fondamental des vecteurs gaussiens, deux composantes sont indépendantes si et seulement si leur covariance est nulle : $\\text{Cov}(X, Y) = 0$."
    },
    {
      "id": "L3-PRC-4",
      "tier": 4,
      "type": "mcq",
      "title": "Loi forte des grands nombres",
      "skill": "Convergence presque sûre de la moyenne empirique",
      "statement": "Soit $(X_n)$ une suite de variables i.i.d. intégrables d'espérance $\\mu$. Quel type de convergence garantit la Loi Forte des Grands Nombres (Kolmogorov) pour $\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^n X_i$ ?",
      "options": [
        "Convergence presque sûre vers $\\mu$ ($\\bar{X}_n \\xrightarrow{p.s.} \\mu$)",
        "Convergence en loi uniquement",
        "Convergence uniforme",
        "Convergence vers une variable aléatoire gaussienne"
      ],
      "correctIndex": 0,
      "answer": "Convergence presque sûre vers $\\mu$ ($\\bar{X}_n \\xrightarrow{p.s.} \\mu$)",
      "hint1": "La loi forte garantit une convergence presque sûre, ce qui est strictement plus fort que la loi faible.",
      "hint2": "$\\mathbb{P}(\\lim_{n \\to \\infty} \\bar{X}_n = \\mu) = 1$.",
      "solution": "La loi forte des grands nombres de Kolmogorov établit que si $\\mathbb{E}[|X_1|] < \\infty$, la moyenne empirique converge presque sûrement vers $\\mu$ : $\\mathbb{P}\\left(\\lim_{n \\to \\infty} \\frac{1}{n}\\sum_{i=1}^n X_i = \\mu\\right) = 1$."
    }
  ]
};

window.MATHS_WORKSHEETS_L3 = {
  "L3-GRP1": [
    {
      "title": "Feuille de TD L3 : Morphismes de groupes et Théorèmes d'isomorphisme",
      "filename": "TD_L3_Groupes_Quotients.md",
      "statement": `## Travaux Dirigés L3 : Théorie des Groupes et Sous-groupes Distingués

### Exercice 1 : Centre d'un groupe et quotients (6 points)
Soit $G$ un groupe d'élément neutre $e$. Le centre de $G$ est défini par $Z(G) = \\{z \\in G \\mid \\forall g \\in G, zg = gz\\}$.
1. Démontrer que $Z(G)$ est un sous-groupe distingué de $G$.
2. Démontrer que si le groupe quotient $G/Z(G)$ est cyclique, alors $G$ est abélien (et donc $G = Z(G)$).`,
      "solution": `### Correction Exercice 1
1. Stabilité et neutre évidents. De plus pour $z \\in Z(G)$ et $g \\in G$, $gzg^{-1} = zgg^{-1} = z \\in Z(G)$, donc $Z(G)$ est normal.
2. Supposons $G/Z(G)$ cyclique engendré par la classe $a Z(G)$.
Tout élément $x \\in G$ s'écrit $x = a^n z_1$ avec $n \\in \\mathbb{Z}$ et $z_1 \\in Z(G)$.
De même, $y \\in G$ s'écrit $y = a^m z_2$.
Alors $xy = (a^n z_1)(a^m z_2) = a^n a^m z_1 z_2 = a^{n+m} z_1 z_2 = a^{m+n} z_2 z_1 = yx$.
Le groupe $G$ est abélien.`
    }
  ]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_L3);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_L3);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_L3);

