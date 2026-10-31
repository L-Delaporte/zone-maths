/**
 * Données pédagogiques universitaires de Licence 3 de Mathématiques (S5 & S6)
 * Synthétisant les enseignements de Théorie des Groupes/Anneaux, Topologie, Mesure & Intégration et Analyse Harmonique
 */

window.MATHS_COURSES_L3 = {
  "L3-GRP1": {
    "title": "L3-GRP1 : Théorie des Groupes I : Morphismes, sous-groupes distingués et quotients",
    "domain": "Théorie des Groupes",
    "objectives": [
      "Définir un groupe $(G, \\cdot)$, caractériser les sous-groupes $H \\le G$ et décrire les sous-groupes engendrés, en particulier les groupes cycliques.",
      "Énoncer et démontrer le théorème de Lagrange : pour tout sous-groupe $H$ d'un groupe fini $G$, $|G| = |H| \\times [G : H]$.",
      "Définir les sous-groupes distingués $H \\trianglelefteq G$ et construire le groupe quotient $G/H$.",
      "Formuler et appliquer le premier théorème d'isomorphisme : $G/\\text{Ker}(f) \\simeq \\text{Im}(f)$.",
      "Manipuler le groupe symétrique $\\mathfrak{S}_n$ : cycles, ordre d'une permutation, signature, groupe alterné $\\mathfrak{A}_n$."
    ],
    "keyPoints": [
      {
        "title": "1. Groupes et sous-groupes",
        "content": "• **Axiomes de groupe** : un ensemble $G$ muni d'une loi interne $\\cdot : G \\times G \\to G$ est un **groupe** si :\n  1. **Associativité** : $\\forall x, y, z \\in G, \\quad (x \\cdot y) \\cdot z = x \\cdot (y \\cdot z)$.\n  2. **Élément neutre** : $\\exists e \\in G, \\forall x \\in G, \\quad e \\cdot x = x \\cdot e = x$.\n  3. **Symétrique** : $\\forall x \\in G, \\exists x^{-1} \\in G, \\quad x \\cdot x^{-1} = x^{-1} \\cdot x = e$.\n• Si de plus $\\forall x, y \\in G, \\; xy = yx$, le groupe est dit **abélien** (ou commutatif).\n• **Caractérisation d'un sous-groupe** : une partie $H \\subset G$ est un **sous-groupe** (noté $H \\le G$) si et seulement si $H \\neq \\emptyset$ et\n$$\\forall x, y \\in H, \\quad x y^{-1} \\in H$$\n• **Exemples** : $(\\mathbb{Z}, +)$, $(\\mathbb{Z}/n\\mathbb{Z}, +)$, $(\\mathbb{U}_n, \\times)$, le groupe symétrique $\\mathfrak{S}_n$ (d'ordre $n!$), $\\text{GL}_n(\\mathbb{K})$ et son sous-groupe $\\text{SL}_n(\\mathbb{K})$.\n• **Sous-groupe engendré** : pour $S \\subset G$, $\\langle S \\rangle$ est l'intersection de tous les sous-groupes contenant $S$ ; c'est l'ensemble des produits finis d'éléments de $S$ et de leurs inverses."
      },
      {
        "title": "2. Morphismes de groupes, noyau et image",
        "content": "• Soient $(G, \\cdot)$ et $(G', \\ast)$ deux groupes. Une application $f : G \\to G'$ est un **morphisme de groupes** si :\n$$\\forall x, y \\in G, \\quad f(x \\cdot y) = f(x) \\ast f(y)$$\n• Propriétés immédiates : $f(e_G) = e_{G'}$ et $\\forall x \\in G, \\; f(x^{-1}) = f(x)^{-1}$. L'image directe et l'image réciproque d'un sous-groupe par $f$ sont des sous-groupes.\n• **Noyau** : $\\text{Ker}(f) = f^{-1}(\\{e_{G'}\\})$, sous-groupe de $G$. **Image** : $\\text{Im}(f) = f(G)$, sous-groupe de $G'$.\n• **Critère d'injectivité** : $f$ est injectif $\\iff \\text{Ker}(f) = \\{e_G\\}$. En effet, $f(x) = f(y) \\iff f(x^{-1}y) = e_{G'} \\iff x^{-1}y \\in \\text{Ker}(f)$.\n• **Exemples** : $\\det : \\text{GL}_n(\\mathbb{K}) \\to \\mathbb{K}^{\\ast}$ a pour noyau $\\text{SL}_n(\\mathbb{K})$ ; $\\exp : (\\mathbb{C}, +) \\to (\\mathbb{C}^{\\ast}, \\times)$ est surjectif de noyau $2i\\pi\\mathbb{Z}$."
      },
      {
        "title": "3. Groupes monogènes et cycliques, ordre d'un élément",
        "content": "• **Ordre d'un élément** : si $\\{k \\ge 1 \\mid g^k = e\\}$ est non vide, son minimum $\\omega(g)$ est l'**ordre** de $g$ ; alors $g^k = e \\iff \\omega(g) \\mid k$, et $\\langle g \\rangle = \\{e, g, \\dots, g^{\\omega(g)-1}\\}$ est de cardinal $\\omega(g)$.\n• **Sous-groupes de $\\mathbb{Z}$** : ce sont exactement les $n\\mathbb{Z}$, $n \\in \\mathbb{N}$ (si $H \\neq \\{0\\}$, $n = \\min(H \\cap \\mathbb{N}^{\\ast})$ et la division euclidienne donne $H = n\\mathbb{Z}$).\n• **Classification** : tout groupe monogène infini est isomorphe à $\\mathbb{Z}$ ; tout groupe cyclique d'ordre $n$ est isomorphe à $\\mathbb{Z}/n\\mathbb{Z}$, via $k \\mapsto g^k$.\n• **Sous-groupes d'un groupe cyclique d'ordre $n$** : pour chaque diviseur $d$ de $n$, il existe un **unique** sous-groupe d'ordre $d$, et il est cyclique.\n• **Générateurs** : $\\bar{k}$ engendre $\\mathbb{Z}/n\\mathbb{Z}$ si et seulement si $k \\wedge n = 1$ ; il y en a $\\varphi(n)$ (indicatrice d'Euler). L'ordre de $\\bar{k}$ dans $\\mathbb{Z}/n\\mathbb{Z}$ est $\\frac{n}{k \\wedge n}$."
      },
      {
        "title": "4. Théorème de Lagrange et conséquences",
        "content": "• **Classes à gauche** : pour $H \\le G$ et $g \\in G$, $gH = \\{gh \\mid h \\in H\\}$. L'ensemble des classes à gauche est noté $G/H$ ; l'**indice** $[G : H]$ est son cardinal.\n• **Théorème de Lagrange** : si $G$ est fini et $H \\le G$, alors\n$$|G| = |H| \\times [G : H]$$\n• **Corollaires** :\n  1. L'ordre de tout sous-groupe de $G$ divise $|G|$.\n  2. L'ordre de tout élément $g$ divise $|G|$ (appliquer Lagrange à $\\langle g \\rangle$), donc $g^{|G|} = e$.\n  3. Tout groupe d'ordre premier $p$ est cyclique (tout $g \\neq e$ est d'ordre $p$), donc isomorphe à $\\mathbb{Z}/p\\mathbb{Z}$.\n  4. **Euler et Fermat** : appliqué au groupe $(\\mathbb{Z}/n\\mathbb{Z})^{\\times}$ d'ordre $\\varphi(n)$ : $a^{\\varphi(n)} \\equiv 1 \\pmod n$ si $a \\wedge n = 1$ ; en particulier $a^{p-1} \\equiv 1 \\pmod p$ si $p$ est premier et $p \\nmid a$.\n• **Multiplicativité des indices** : si $K \\le H \\le G$ avec $G$ fini, $[G : K] = [G : H] \\times [H : K]$."
      },
      {
        "title": "5. Démonstration du théorème de Lagrange",
        "content": "**Énoncé.** Soit $G$ un groupe fini et $H$ un sous-groupe de $G$. Alors $|H|$ divise $|G|$ et $|G| = |H| \\times [G : H]$.\n\n**Démonstration.**\n1. **Relation d'équivalence.** Posons $x \\mathcal{R} y \\iff x^{-1} y \\in H$. Elle est réflexive ($x^{-1}x = e \\in H$), symétrique (si $x^{-1}y \\in H$, alors $y^{-1}x = (x^{-1}y)^{-1} \\in H$) et transitive (si $x^{-1}y \\in H$ et $y^{-1}z \\in H$, alors $x^{-1}z = (x^{-1}y)(y^{-1}z) \\in H$).\n2. **Les classes sont les $xH$.** On a $y \\mathcal{R} x \\iff x^{-1}y \\in H \\iff \\exists h \\in H, \\; y = xh \\iff y \\in xH$. Les classes d'équivalence forment une partition de $G$ : $G$ est réunion disjointe des $[G : H]$ classes à gauche distinctes.\n3. **Chaque classe a $|H|$ éléments.** L'application $\\tau_x : H \\to xH$, $h \\mapsto xh$ est surjective par définition de $xH$, et injective car $xh = xh' \\implies h = h'$ (multiplication à gauche par $x^{-1}$). C'est une bijection, donc $|xH| = |H|$.\n4. **Dénombrement.** $G$ étant réunion disjointe de $[G : H]$ parties ayant chacune $|H|$ éléments, $|G| = [G : H] \\times |H|$. $\\square$\n\n**Remarque.** La démonstration vaut aussi avec les classes à droite $Hx$ ; l'application $xH \\mapsto Hx^{-1}$ est une bijection entre classes à gauche et classes à droite, donc les deux indices coïncident même si $G$ est infini."
      },
      {
        "title": "6. Sous-groupes distingués, quotient et théorème d'isomorphisme",
        "content": "• Un sous-groupe $H \\le G$ est **distingué** (ou normal), noté $H \\trianglelefteq G$, si\n$$\\forall g \\in G, \\; \\forall h \\in H, \\quad g h g^{-1} \\in H \\qquad (\\text{équivalent à } \\forall g \\in G, \\; gH = Hg)$$\n• **Exemples** : tout sous-groupe d'un groupe abélien ; tout noyau de morphisme ; $\\text{SL}_n(\\mathbb{K}) \\trianglelefteq \\text{GL}_n(\\mathbb{K})$ ; $\\mathfrak{A}_n \\trianglelefteq \\mathfrak{S}_n$ ; le centre $Z(G)$. **Contre-exemple** : $\\langle (1\\,2) \\rangle$ n'est pas distingué dans $\\mathfrak{S}_3$, car $(1\\,3)(1\\,2)(1\\,3)^{-1} = (2\\,3)$.\n• **Groupe quotient** : si $H \\trianglelefteq G$, la loi $(xH)(yH) = (xy)H$ est bien définie (indépendante des représentants) et fait de $G/H$ un groupe ; la surjection canonique $\\pi : G \\to G/H$ est un morphisme de noyau $H$.\n• **Premier théorème d'isomorphisme** : pour tout morphisme de groupes $f : G \\to G'$,\n$$\\text{Ker}(f) \\trianglelefteq G \\quad \\text{et} \\quad G/\\text{Ker}(f) \\simeq \\text{Im}(f)$$\nvia $\\bar{f}(x \\,\\text{Ker}(f)) = f(x)$ : $\\bar{f}$ est bien définie et injective car $f(x) = f(y) \\iff x^{-1}y \\in \\text{Ker}(f)$, et surjective sur $\\text{Im}(f)$ par construction.\n• **Applications** : $\\text{GL}_n(\\mathbb{K})/\\text{SL}_n(\\mathbb{K}) \\simeq \\mathbb{K}^{\\ast}$ ; $\\mathbb{Z}/n\\mathbb{Z}$ est le quotient de $\\mathbb{Z}$ par le noyau de $k \\mapsto e^{2ik\\pi/n}$, d'où $\\mathbb{Z}/n\\mathbb{Z} \\simeq \\mathbb{U}_n$."
      },
      {
        "title": "7. Le groupe symétrique $\\mathfrak{S}_n$",
        "content": "• **Décomposition en cycles** : toute permutation $\\sigma \\in \\mathfrak{S}_n$ s'écrit comme produit de cycles à supports deux à deux disjoints, de façon unique à l'ordre près des facteurs ; ces cycles commutent.\n• **Ordre** : l'ordre de $\\sigma$ est le PPCM des longueurs des cycles de sa décomposition.\n• **Générateurs** : les transpositions engendrent $\\mathfrak{S}_n$ ; un $k$-cycle est produit de $k-1$ transpositions : $(a_1\\, a_2 \\, \\dots \\, a_k) = (a_1\\, a_2)(a_2\\, a_3)\\cdots(a_{k-1}\\, a_k)$.\n• **Signature** : il existe un unique morphisme non trivial $\\varepsilon : \\mathfrak{S}_n \\to \\{-1, 1\\}$ ($n \\ge 2$) ; il vaut $-1$ sur les transpositions, et un $k$-cycle a pour signature $(-1)^{k-1}$.\n• **Groupe alterné** : $\\mathfrak{A}_n = \\text{Ker}(\\varepsilon)$ est distingué d'indice 2, d'ordre $\\frac{n!}{2}$ pour $n \\ge 2$.\n• **Conjugaison** : deux permutations sont conjuguées dans $\\mathfrak{S}_n$ si et seulement si elles ont le même type (mêmes longueurs de cycles) ; plus précisément $\\tau (a_1 \\, \\dots \\, a_k) \\tau^{-1} = (\\tau(a_1) \\, \\dots \\, \\tau(a_k))$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Prouver qu'un sous-groupe d'indice 2 est toujours distingué",
        "example": "Soit $G$ un groupe et $H \\le G$ un sous-groupe d'indice $[G : H] = 2$. Montrer que $H \\trianglelefteq G$.",
        "steps": [
          "**Étape 1 (Classes à gauche)** : comme $[G:H] = 2$, il y a exactement deux classes à gauche, qui partitionnent $G$ : $H$ (classe de $e$) et son complémentaire $G \\setminus H$.",
          "**Étape 2 (Classes à droite)** : l'indice à droite est aussi égal à 2 (bijection $xH \\mapsto Hx^{-1}$) ; les deux classes à droite sont donc $H$ et $G \\setminus H$.",
          "**Étape 3 (Égalité)** : pour tout $g \\in G$ : si $g \\in H$, $gH = H = Hg$ ; si $g \\notin H$, $gH$ et $Hg$ sont des classes contenant $g$ et différentes de $H$, donc $gH = G \\setminus H = Hg$.",
          "**Conclusion** : pour tout $g \\in G$, $gH = Hg$, donc $H \\trianglelefteq G$. Application : $\\mathfrak{A}_n \\trianglelefteq \\mathfrak{S}_n$ sans calcul."
        ]
      },
      {
        "title": "Méthode : Calculer l'ordre et la signature d'une permutation",
        "example": "Dans $\\mathfrak{S}_9$, déterminer l'ordre et la signature de $\\sigma = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\\\ 3 & 4 & 5 & 2 & 1 & 7 & 8 & 9 & 6 \\end{pmatrix}$.",
        "steps": [
          "**Étape 1 (Décomposition en cycles disjoints)** : on suit les orbites : $1 \\to 3 \\to 5 \\to 1$, $2 \\to 4 \\to 2$, $6 \\to 7 \\to 8 \\to 9 \\to 6$. Donc $\\sigma = (1\\,3\\,5)(2\\,4)(6\\,7\\,8\\,9)$.",
          "**Étape 2 (Ordre)** : les cycles disjoints commutent, donc $\\sigma^k = (1\\,3\\,5)^k (2\\,4)^k (6\\,7\\,8\\,9)^k$, qui vaut l'identité si et seulement si $3 \\mid k$, $2 \\mid k$ et $4 \\mid k$. L'ordre est $\\text{ppcm}(3, 2, 4) = 12$.",
          "**Étape 3 (Signature)** : $\\varepsilon(\\sigma) = (-1)^{3-1} \\times (-1)^{2-1} \\times (-1)^{4-1} = (-1)^{2+1+3} = 1$.",
          "**Conclusion** : $\\sigma$ est d'ordre 12 et appartient à $\\mathfrak{A}_9$. Contrôle : $12$ divise bien $|\\mathfrak{S}_9| = 9!$ (Lagrange)."
        ]
      }
    ],
    "traps": [
      "La relation « être distingué dans » n'est pas transitive : dans $\\mathfrak{S}_4$, $K = \\{\\text{id}, (1\\,2)(3\\,4)\\}$ est distingué dans $V_4 = \\{\\text{id}, (1\\,2)(3\\,4), (1\\,3)(2\\,4), (1\\,4)(2\\,3)\\}$ (abélien) et $V_4 \\trianglelefteq \\mathfrak{S}_4$, mais $K$ n'est pas distingué dans $\\mathfrak{S}_4$ : $(1\\,3)(1\\,2)(3\\,4)(1\\,3) = (1\\,4)(2\\,3) \\notin K$.",
      "La réciproque du théorème de Lagrange est fausse : $\\mathfrak{A}_4$ est d'ordre 12 mais ne possède aucun sous-groupe d'ordre 6.",
      "L'ordre d'un produit n'est pas le PPCM des ordres en général : dans $\\mathfrak{S}_3$, $(1\\,2)$ et $(2\\,3)$ sont d'ordre 2 mais $(1\\,2)(2\\,3) = (1\\,2\\,3)$ est d'ordre 3. La formule du PPCM vaut pour des cycles à supports disjoints (ou des éléments qui commutent et engendrent des sous-groupes d'intersection triviale).",
      "Pour munir $G/H$ d'une loi de groupe, $H$ doit être distingué : pour $H = \\langle (1\\,2) \\rangle$ dans $\\mathfrak{S}_3$, la « loi » $(xH)(yH) = xyH$ dépend des représentants choisis.",
      "Un groupe d'ordre 4 n'est pas nécessairement cyclique : le groupe de Klein $(\\mathbb{Z}/2\\mathbb{Z})^2$ n'a que des éléments d'ordre 1 ou 2."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème de Lagrange.",
        "a": "Si $G$ est un groupe fini et $H \\le G$, alors $|G| = |H| \\times [G : H]$ ; en particulier $|H|$ divise $|G|$."
      },
      {
        "q": "Quelle est l'idée clé de la preuve de Lagrange ?",
        "a": "Les classes à gauche $xH$ partitionnent $G$ et sont toutes en bijection avec $H$ via $h \\mapsto xh$."
      },
      {
        "q": "Énoncer le premier théorème d'isomorphisme.",
        "a": "Pour tout morphisme de groupes $f : G \\to G'$, $\\text{Ker}(f) \\trianglelefteq G$ et $G/\\text{Ker}(f) \\simeq \\text{Im}(f)$ via $x\\,\\text{Ker}(f) \\mapsto f(x)$."
      },
      {
        "q": "Combien $\\mathbb{Z}/n\\mathbb{Z}$ a-t-il de générateurs, et lesquels ?",
        "a": "Les classes $\\bar{k}$ avec $k \\wedge n = 1$ ; il y en a $\\varphi(n)$."
      },
      {
        "q": "Comment calcule-t-on l'ordre d'une permutation ?",
        "a": "On la décompose en cycles à supports disjoints : l'ordre est le PPCM des longueurs des cycles."
      },
      {
        "q": "Pourquoi un groupe d'ordre premier est-il cyclique ?",
        "a": "Pour $g \\neq e$, l'ordre de $g$ divise $p$ et vaut plus que 1, donc vaut $p$ : $\\langle g \\rangle = G$."
      }
    ]
  },
  "L3-MET": {
    "title": "L3-MET : Espaces métriques et Espaces vectoriels normés",
    "domain": "Topologie",
    "objectives": [
      "Définir une distance et une norme, et vérifier les axiomes sur des exemples.",
      "Maîtriser ouverts, fermés, adhérence, intérieur et leurs caractérisations séquentielles dans un espace métrique.",
      "Définir les suites de Cauchy et les espaces complets ; démontrer qu'un fermé d'un complet est complet.",
      "Comprendre l'équivalence des normes et son énoncé en dimension finie.",
      "Caractériser la continuité des applications, en particulier des applications linéaires entre espaces normés."
    ],
    "keyPoints": [
      {
        "title": "1. Espaces métriques et boules",
        "content": "• **Distance** : une application $d : E \\times E \\to \\mathbb{R}^+$ est une distance sur $E$ si :\n  1. **Séparation** : $d(x, y) = 0 \\iff x = y$.\n  2. **Symétrie** : $d(x, y) = d(y, x)$.\n  3. **Inégalité triangulaire** : $d(x, z) \\le d(x, y) + d(y, z)$.\n• Conséquence utile : $|d(x, z) - d(y, z)| \\le d(x, y)$, donc $d(\\cdot, z)$ est 1-lipschitzienne.\n• **Boules** : $B(x, r) = \\{y \\mid d(x, y) < r\\}$ (ouverte), $\\bar{B}(x, r) = \\{y \\mid d(x, y) \\le r\\}$ (fermée), $S(x, r) = \\{y \\mid d(x, y) = r\\}$.\n• **Exemples** : sur $\\mathbb{R}^n$, $d_1, d_2, d_\\infty$ issues des normes $\\|\\cdot\\|_1, \\|\\cdot\\|_2, \\|\\cdot\\|_\\infty$ ; la **distance discrète** ($d(x, y) = 1$ si $x \\neq y$) sur un ensemble quelconque ; la distance uniforme $d(f, g) = \\sup |f - g|$ sur les fonctions bornées."
      },
      {
        "title": "2. Ouverts, fermés, adhérence, intérieur",
        "content": "• **Ouvert** : $U \\subset E$ est ouvert si $\\forall x \\in U, \\exists r > 0, \\; B(x, r) \\subset U$. Toute boule ouverte est un ouvert (si $y \\in B(x, r)$, alors $B(y, r - d(x,y)) \\subset B(x, r)$). Toute réunion d'ouverts et toute intersection **finie** d'ouverts est un ouvert.\n• **Fermé** : $F$ est fermé si $E \\setminus F$ est ouvert. **Caractérisation séquentielle** : $F$ est fermé si et seulement si toute suite d'éléments de $F$ qui converge dans $E$ a sa limite dans $F$.\n• **Intérieur** $\\mathring{A}$ : plus grand ouvert contenu dans $A$. **Adhérence** $\\bar{A}$ : plus petit fermé contenant $A$ ;\n$$\\bar{A} = \\{x \\in E \\mid \\forall r > 0, \\; B(x, r) \\cap A \\neq \\emptyset\\} = \\{x \\in E \\mid \\exists (a_n) \\in A^{\\mathbb{N}}, \\; a_n \\to x\\}$$\n• **Frontière** : $\\partial A = \\bar{A} \\setminus \\mathring{A}$. **Densité** : $A$ est dense si $\\bar{A} = E$ (ex. $\\mathbb{Q}$ dans $\\mathbb{R}$).\n• **Exemple** : $[0 ; 1[$ n'est ni ouvert ni fermé dans $\\mathbb{R}$ ; $\\mathbb{R}$ et $\\emptyset$ sont à la fois ouverts et fermés."
      },
      {
        "title": "3. Suites, suites de Cauchy et complétude",
        "content": "• **Convergence** : $x_n \\to \\ell$ si $d(x_n, \\ell) \\to 0$ ; la limite est unique (séparation). Une **valeur d'adhérence** de $(x_n)$ est une limite d'une suite extraite $(x_{\\varphi(n)})$.\n• **Suite de Cauchy** : $\\forall \\varepsilon > 0, \\exists N, \\forall p, q \\ge N, \\; d(x_p, x_q) < \\varepsilon$. Toute suite convergente est de Cauchy ; toute suite de Cauchy est bornée.\n• **Espace complet** : espace métrique dans lequel toute suite de Cauchy converge. $\\mathbb{R}$ et $\\mathbb{R}^n$ sont complets ; $\\mathbb{Q}$ ne l'est pas (les approximations décimales de $\\sqrt{2}$ forment une suite de Cauchy de $\\mathbb{Q}$ sans limite dans $\\mathbb{Q}$).\n• **Résultats de base** :\n  1. Une suite de Cauchy qui possède une valeur d'adhérence converge (vers cette valeur).\n  2. Une partie fermée d'un espace complet est complète.\n  3. Une partie complète d'un espace métrique quelconque est fermée."
      },
      {
        "title": "4. Démonstrations : Cauchy et valeur d'adhérence, fermé d'un complet",
        "content": "**Proposition 1.** Si $(x_n)$ est de Cauchy et admet une valeur d'adhérence $\\ell$, alors $x_n \\to \\ell$.\n\n**Démonstration.**\n1. Soit $\\varphi$ strictement croissante telle que $x_{\\varphi(n)} \\to \\ell$, et soit $\\varepsilon > 0$.\n2. Cauchy : il existe $N$ tel que $p, q \\ge N \\implies d(x_p, x_q) < \\varepsilon/2$. Convergence de l'extraite : il existe $N'$ tel que $n \\ge N' \\implies d(x_{\\varphi(n)}, \\ell) < \\varepsilon/2$.\n3. Soit $p \\ge N$. Choisissons $n \\ge \\max(N, N')$ ; comme $\\varphi(n) \\ge n \\ge N$ :\n$$d(x_p, \\ell) \\le d(x_p, x_{\\varphi(n)}) + d(x_{\\varphi(n)}, \\ell) < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon$$\n4. Ainsi $\\forall p \\ge N, \\; d(x_p, \\ell) < \\varepsilon$ : $x_p \\to \\ell$. $\\square$\n\n**Proposition 2.** Soit $(E, d)$ complet et $F \\subset E$ fermé. Alors $(F, d)$ est complet.\n\n**Démonstration.**\n1. Soit $(x_n)$ une suite de Cauchy de $F$. C'est une suite de Cauchy de $E$ (même distance), donc elle converge vers un $\\ell \\in E$ car $E$ est complet.\n2. $F$ étant fermé, la caractérisation séquentielle donne $\\ell \\in F$. Toute suite de Cauchy de $F$ converge donc dans $F$. $\\square$\n\n**Proposition 3 (réciproque partielle).** Si $A \\subset E$ est complète, $A$ est fermée dans $E$ : si $a_n \\in A$ et $a_n \\to x \\in E$, $(a_n)$ est de Cauchy, donc converge vers un $a \\in A$, et l'unicité de la limite donne $x = a \\in A$."
      },
      {
        "title": "5. Espaces vectoriels normés et équivalence des normes",
        "content": "• **Norme** sur un $\\mathbb{K}$-espace vectoriel $E$ ($\\mathbb{K} = \\mathbb{R}$ ou $\\mathbb{C}$) : application $\\|\\cdot\\| : E \\to \\mathbb{R}^+$ telle que\n  1. $\\|x\\| = 0 \\iff x = 0_E$ ;\n  2. $\\|\\lambda x\\| = |\\lambda| \\, \\|x\\|$ ;\n  3. $\\|x + y\\| \\le \\|x\\| + \\|y\\|$.\n• Toute norme définit une distance invariante par translation : $d(x, y) = \\|x - y\\|$.\n• **Normes équivalentes** : $N_1 \\sim N_2$ s'il existe $\\alpha, \\beta > 0$ tels que $\\forall x \\in E, \\; \\alpha N_1(x) \\le N_2(x) \\le \\beta N_1(x)$. Des normes équivalentes définissent les mêmes ouverts, les mêmes suites convergentes et les mêmes suites de Cauchy.\n• **Exemple** : sur $\\mathbb{R}^n$, $\\|x\\|_\\infty \\le \\|x\\|_2 \\le \\|x\\|_1 \\le n \\|x\\|_\\infty$.\n• **Théorème** : sur un espace vectoriel de **dimension finie**, toutes les normes sont équivalentes (démonstration par compacité de la sphère unité, voir le chapitre L3-CMP). Conséquence : tout espace normé de dimension finie est complet, et tout sous-espace de dimension finie d'un espace normé est fermé."
      },
      {
        "title": "6. Continuité et applications linéaires continues",
        "content": "• **Continuité en $x_0$** : $\\forall \\varepsilon > 0, \\exists \\eta > 0, \\; d_E(x, x_0) < \\eta \\implies d_F(f(x), f(x_0)) < \\varepsilon$ ; de façon équivalente, $x_n \\to x_0 \\implies f(x_n) \\to f(x_0)$.\n• **Caractérisation globale** : $f$ est continue sur $E$ si et seulement si l'image réciproque de tout ouvert (resp. fermé) de $F$ est un ouvert (resp. fermé) de $E$.\n• **Hiérarchie** : $k$-lipschitzienne $\\implies$ uniformément continue $\\implies$ continue.\n• **Applications linéaires** : pour $u \\in \\mathcal{L}(E, F)$ entre espaces normés, sont équivalents :\n  1. $u$ est continue ; 2. $u$ est continue en $0_E$ ; 3. $\\exists M \\ge 0, \\forall x \\in E, \\; \\|u(x)\\|_F \\le M \\|x\\|_E$ ; 4. $u$ est lipschitzienne.\n• **Norme subordonnée** : $\\|u\\| = \\sup_{x \\neq 0} \\frac{\\|u(x)\\|_F}{\\|x\\|_E} = \\sup_{\\|x\\| \\le 1} \\|u(x)\\|_F$ ; c'est une norme sur l'espace $\\mathcal{L}_c(E, F)$ des applications linéaires continues, et $\\|v \\circ u\\| \\le \\|v\\| \\, \\|u\\|$.\n• Si $\\dim E < +\\infty$, toute application linéaire de $E$ dans $F$ est continue."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la norme d'opérateur d'une forme linéaire",
        "example": "Sur $E = \\mathcal{C}([0 ; 1], \\mathbb{R})$ muni de $\\|\\cdot\\|_\\infty$, calculer la norme de $\\varphi(f) = \\int_0^1 f(t) \\, dt$.",
        "steps": [
          "**Étape 1 (Majoration)** : pour tout $f \\in E$, $|\\varphi(f)| \\le \\int_0^1 |f(t)| \\, dt \\le \\|f\\|_\\infty$. Donc $\\varphi$ est continue et $\\|\\varphi\\| \\le 1$.",
          "**Étape 2 (Cas d'égalité)** : on cherche $f$ réalisant l'égalité ; la fonction constante $f_0 = 1$ convient.",
          "**Étape 3 (Évaluation)** : $\\|f_0\\|_\\infty = 1$ et $\\varphi(f_0) = 1$, donc $\\|\\varphi\\| \\ge \\frac{|\\varphi(f_0)|}{\\|f_0\\|_\\infty} = 1$.",
          "**Conclusion** : $\\|\\varphi\\| = 1$, et la borne est atteinte. (Quand elle n'est pas atteinte, on exhibe une suite $(f_n)$ telle que $|\\varphi(f_n)|/\\|f_n\\| \\to \\|\\varphi\\|$.)"
        ]
      },
      {
        "title": "Méthode : Montrer que deux normes ne sont pas équivalentes",
        "example": "Sur $E = \\mathcal{C}([0 ; 1], \\mathbb{R})$, comparer $\\|f\\|_1 = \\int_0^1 |f|$ et $\\|f\\|_\\infty = \\sup_{[0;1]} |f|$.",
        "steps": [
          "**Étape 1 (Inégalité dans un sens)** : $\\|f\\|_1 \\le \\|f\\|_\\infty$ pour tout $f$, car $|f(t)| \\le \\|f\\|_\\infty$ sur $[0 ; 1]$.",
          "**Étape 2 (Suite test)** : pour $f_n(t) = t^n$, $\\|f_n\\|_\\infty = 1$ et $\\|f_n\\|_1 = \\frac{1}{n+1}$.",
          "**Étape 3 (Rapport non borné)** : $\\frac{\\|f_n\\|_\\infty}{\\|f_n\\|_1} = n + 1 \\to +\\infty$ ; il n'existe donc aucun $\\beta$ tel que $\\|f\\|_\\infty \\le \\beta \\|f\\|_1$ pour tout $f$.",
          "**Conclusion** : les deux normes ne sont pas équivalentes. Interprétation : $f_n \\to 0$ pour $\\|\\cdot\\|_1$ mais pas pour $\\|\\cdot\\|_\\infty$. Ce phénomène est propre à la dimension infinie."
        ]
      }
    ],
    "traps": [
      "En dimension infinie, deux normes ne sont pas nécessairement équivalentes : $\\|\\cdot\\|_1$ et $\\|\\cdot\\|_\\infty$ sur $\\mathcal{C}([0 ; 1])$ (rapport $n+1$ pour $t \\mapsto t^n$).",
      "L'image directe d'un ouvert par une application continue n'est pas nécessairement ouverte : $x \\mapsto x^2$ envoie $]-1 ; 1[$ sur $[0 ; 1[$.",
      "« Fermé » n'est pas le contraire d'« ouvert » : $[0 ; 1[$ n'est ni l'un ni l'autre dans $\\mathbb{R}$, et $\\mathbb{R}$ est les deux.",
      "Dans un espace métrique quelconque, la boule fermée $\\bar{B}(x, r)$ peut être strictement plus grande que l'adhérence de $B(x, r)$ : pour la distance discrète, $B(x, 1) = \\{x\\}$ est fermée, alors que $\\bar{B}(x, 1) = E$. L'égalité est vraie dans un espace normé.",
      "Le caractère de Cauchy dépend de la distance, pas seulement de la topologie : pour $d(x, y) = |\\arctan x - \\arctan y|$ sur $\\mathbb{R}$ (même topologie que la distance usuelle), la suite $(n)$ est de Cauchy mais ne converge pas."
    ],
    "flashcards": [
      {
        "q": "Caractérisation de la continuité par les ouverts ?",
        "a": "$f : E \\to F$ est continue si et seulement si l'image réciproque de tout ouvert de $F$ est un ouvert de $E$."
      },
      {
        "q": "Énoncer le théorème d'équivalence des normes.",
        "a": "Sur un espace vectoriel de dimension finie, toutes les normes sont équivalentes."
      },
      {
        "q": "Une suite de Cauchy possédant une valeur d'adhérence est-elle convergente ?",
        "a": "Oui : elle converge vers cette valeur d'adhérence (inégalité triangulaire en passant par un terme de l'extraite)."
      },
      {
        "q": "Une partie fermée d'un espace complet est-elle complète ?",
        "a": "Oui : une suite de Cauchy de $F$ converge dans $E$, et sa limite est dans $F$ car $F$ est fermé."
      },
      {
        "q": "Critère de continuité d'une application linéaire entre espaces normés ?",
        "a": "$u$ est continue si et seulement s'il existe $M \\ge 0$ tel que $\\|u(x)\\| \\le M \\|x\\|$ pour tout $x$ ; la plus petite telle constante est $\\|u\\|$."
      },
      {
        "q": "Donner une suite de Cauchy non convergente.",
        "a": "Dans $\\mathbb{Q}$, la suite des approximations décimales par défaut de $\\sqrt{2}$ : elle est de Cauchy mais sa limite $\\sqrt{2}$ n'est pas dans $\\mathbb{Q}$."
      }
    ]
  },
  "L3-CMP": {
    "title": "L3-CMP : Compacité, Connexité et Théorème de Heine",
    "domain": "Topologie",
    "objectives": [
      "Caractériser les parties compactes d'un espace métrique par la propriété de Borel-Lebesgue et par celle de Bolzano-Weierstrass.",
      "Identifier les compacts des espaces normés de dimension finie et connaître le théorème de Riesz.",
      "Démontrer que l'image continue d'un compact est compacte et le théorème de Heine ; en déduire l'équivalence des normes en dimension finie.",
      "Définir la connexité et la connexité par arcs, et énoncer le théorème des valeurs intermédiaires généralisé."
    ],
    "keyPoints": [
      {
        "title": "1. Compacité : Borel-Lebesgue et Bolzano-Weierstrass",
        "content": "• **Borel-Lebesgue** : un espace métrique $K$ est **compact** si de tout recouvrement de $K$ par des ouverts on peut extraire un **sous-recouvrement fini**.\n• **Bolzano-Weierstrass** : dans un espace **métrique**, $K$ est compact si et seulement si toute suite d'éléments de $K$ admet une sous-suite convergente dans $K$.\n• **Propriétés** :\n  1. Une partie compacte d'un espace métrique est **fermée et bornée**.\n  2. Une partie fermée d'un compact est compacte.\n  3. Un produit fini de compacts est compact (extractions successives).\n  4. Une suite d'un compact qui a une unique valeur d'adhérence converge.\n• **Exemples** : $[a ; b]$ est compact ; $]0 ; 1]$ ne l'est pas (la suite $(1/n)$ n'a pas de valeur d'adhérence dans $]0 ; 1]$) ; $\\{0\\} \\cup \\{1/n \\mid n \\ge 1\\}$ est compact."
      },
      {
        "title": "2. Compacts en dimension finie et théorème de Riesz",
        "content": "• **Compacts de $\\mathbb{R}^n$** : une partie de $\\mathbb{R}^n$ est compacte si et seulement si elle est **fermée et bornée** (une suite bornée de $\\mathbb{R}^n$ a une sous-suite convergente, par extractions coordonnée par coordonnée).\n• Le résultat s'étend à tout espace normé de dimension finie, une fois l'équivalence des normes établie (point 5).\n• **Théorème de Riesz** : un espace vectoriel normé est de dimension finie si et seulement si sa boule unité fermée est compacte.\n• **Conséquence** : en dimension infinie, « fermé et borné » n'implique pas « compact ». Par exemple dans $\\ell^2$, la suite $(e_n)$ de la base canonique est dans la boule unité mais $\\|e_p - e_q\\| = \\sqrt{2}$ pour $p \\neq q$ : aucune sous-suite n'est de Cauchy."
      },
      {
        "title": "3. Fonctions continues sur un compact",
        "content": "• **Image continue d'un compact** : si $K$ est compact et $f : K \\to F$ est continue, alors $f(K)$ est compact.\n• **Bornes atteintes** : toute fonction continue $f : K \\to \\mathbb{R}$ sur un compact non vide est bornée et atteint ses bornes :\n$$\\exists \\, a, b \\in K, \\quad f(a) = \\min_K f \\quad \\text{et} \\quad f(b) = \\max_K f$$\n• **Théorème de Heine** : toute application continue sur un compact $K$ est **uniformément continue** :\n$$\\forall \\varepsilon > 0, \\; \\exists \\delta > 0, \\; \\forall x, y \\in K, \\quad d(x, y) < \\delta \\implies d(f(x), f(y)) < \\varepsilon$$\n• **Distance à un compact** : si $K$ est compact non vide, pour tout $x$ il existe $y \\in K$ tel que $d(x, K) = d(x, y)$ (la fonction $y \\mapsto d(x, y)$ est continue sur $K$)."
      },
      {
        "title": "4. Démonstrations : image d'un compact et théorème de Heine",
        "content": "**Théorème A.** Si $K$ est un espace métrique compact et $f : K \\to F$ continue, alors $f(K)$ est compact.\n\n**Démonstration (séquentielle).**\n1. Soit $(y_n)$ une suite de $f(K)$ ; écrivons $y_n = f(x_n)$ avec $x_n \\in K$.\n2. Par compacité de $K$, il existe une extraction $\\varphi$ et $x \\in K$ tels que $x_{\\varphi(n)} \\to x$.\n3. Par continuité de $f$ en $x$, $y_{\\varphi(n)} = f(x_{\\varphi(n)}) \\to f(x) \\in f(K)$.\n4. Toute suite de $f(K)$ a donc une sous-suite convergente dans $f(K)$ : $f(K)$ est compact. $\\square$\n\n**Théorème B (Heine).** Si $K$ est compact et $f : K \\to F$ continue, $f$ est uniformément continue.\n\n**Démonstration (par l'absurde).**\n1. Supposons $f$ non uniformément continue : il existe $\\varepsilon > 0$ tel que pour tout $\\delta > 0$, il existe $x, y \\in K$ avec $d(x, y) < \\delta$ et $d(f(x), f(y)) \\ge \\varepsilon$.\n2. Avec $\\delta = \\frac{1}{n+1}$, on obtient des suites $(x_n), (y_n)$ de $K$ telles que $d(x_n, y_n) < \\frac{1}{n+1}$ et $d(f(x_n), f(y_n)) \\ge \\varepsilon$.\n3. Par compacité, il existe $\\varphi$ et $x \\in K$ tels que $x_{\\varphi(n)} \\to x$. Alors $d(y_{\\varphi(n)}, x) \\le d(y_{\\varphi(n)}, x_{\\varphi(n)}) + d(x_{\\varphi(n)}, x) \\to 0$, donc $y_{\\varphi(n)} \\to x$.\n4. Par continuité de $f$ en $x$, $f(x_{\\varphi(n)}) \\to f(x)$ et $f(y_{\\varphi(n)}) \\to f(x)$, donc $d(f(x_{\\varphi(n)}), f(y_{\\varphi(n)})) \\to 0$, ce qui contredit $d(f(x_n), f(y_n)) \\ge \\varepsilon$ pour tout $n$. $\\square$"
      },
      {
        "title": "5. Démonstration : équivalence des normes en dimension finie",
        "content": "**Théorème.** Sur un $\\mathbb{K}$-espace vectoriel $E$ de dimension finie $n$, toutes les normes sont équivalentes.\n\n**Démonstration.**\n1. Fixons une base $(e_1, \\dots, e_n)$ et posons $\\|x\\|_\\infty = \\max |x_i|$ pour $x = \\sum x_i e_i$. Il suffit de montrer que toute norme $N$ est équivalente à $\\|\\cdot\\|_\\infty$ (l'équivalence est transitive).\n2. **Majoration** : $N(x) \\le \\sum |x_i| N(e_i) \\le \\beta \\|x\\|_\\infty$ avec $\\beta = \\sum N(e_i) > 0$. Donc $|N(x) - N(y)| \\le N(x - y) \\le \\beta \\|x - y\\|_\\infty$ : $N$ est continue sur $(E, \\|\\cdot\\|_\\infty)$.\n3. **Compacité de la sphère** : $S = \\{x \\mid \\|x\\|_\\infty = 1\\}$ est fermée et bornée pour $\\|\\cdot\\|_\\infty$ ; par l'isomorphisme $x \\mapsto (x_1, \\dots, x_n)$ avec $\\mathbb{K}^n$ (identifié à $\\mathbb{R}^n$ ou $\\mathbb{R}^{2n}$), elle est compacte (point 2).\n4. **Minoration** : $N$ est continue sur le compact non vide $S$ donc atteint son minimum $\\alpha = N(x_0)$ en un $x_0 \\in S$ ; comme $x_0 \\neq 0$, $\\alpha > 0$.\n5. Pour $x \\neq 0$, $\\frac{x}{\\|x\\|_\\infty} \\in S$, donc $N\\!\\left(\\frac{x}{\\|x\\|_\\infty}\\right) \\ge \\alpha$, soit $N(x) \\ge \\alpha \\|x\\|_\\infty$.\n6. Ainsi $\\alpha \\|x\\|_\\infty \\le N(x) \\le \\beta \\|x\\|_\\infty$ pour tout $x$. $\\square$\n\nL'hypothèse de dimension finie intervient à l'étape 3 : en dimension infinie, la sphère unité n'est pas compacte (Riesz)."
      },
      {
        "title": "6. Connexité et connexité par arcs",
        "content": "• **Connexité** : $E$ est **connexe** s'il n'est pas réunion de deux ouverts disjoints non vides ; de façon équivalente, les seules parties à la fois ouvertes et fermées sont $\\emptyset$ et $E$, ou encore toute fonction continue $E \\to \\{0, 1\\}$ est constante.\n• **Parties connexes de $\\mathbb{R}$** : ce sont exactement les **intervalles**.\n• **Image continue** : l'image d'un connexe par une application continue est connexe. **TVI généralisé** : si $E$ est connexe et $f : E \\to \\mathbb{R}$ continue, $f(E)$ est un intervalle.\n• **Connexité par arcs** : pour tous $x, y \\in E$, il existe $\\gamma : [0 ; 1] \\to E$ continue avec $\\gamma(0) = x$ et $\\gamma(1) = y$. Toute partie convexe (ou étoilée) d'un espace normé est connexe par arcs.\n• **Hiérarchie** : connexe par arcs $\\implies$ connexe. La réciproque est fausse en général (adhérence du graphe de $x \\mapsto \\sin(1/x)$ sur $]0 ; 1]$), mais vraie pour les **ouverts** d'un espace normé.\n• **Réunion** : une réunion de connexes ayant un point commun est connexe."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer qu'une partie n'est pas compacte",
        "example": "Montrer que $A = \\{f \\in \\mathcal{C}([0 ; 1], \\mathbb{R}) \\mid \\|f\\|_\\infty \\le 1\\}$ n'est pas compacte dans $(\\mathcal{C}([0 ; 1]), \\|\\cdot\\|_\\infty)$.",
        "steps": [
          "**Étape 1 (Suite dans $A$)** : poser $f_n(x) = x^n$. Chaque $f_n$ est continue et $\\|f_n\\|_\\infty = 1$, donc $f_n \\in A$.",
          "**Étape 2 (Limite simple)** : $(f_n)$ converge simplement vers $g$ définie par $g(x) = 0$ sur $[0 ; 1[$ et $g(1) = 1$, qui n'est pas continue.",
          "**Étape 3 (Absence de valeur d'adhérence)** : si une sous-suite $(f_{\\varphi(n)})$ convergeait uniformément vers $h \\in \\mathcal{C}([0;1])$, elle convergerait aussi simplement vers $h$ ; par unicité de la limite simple, $h = g$, qui n'est pas continue : contradiction.",
          "**Conclusion** : $(f_n)$ n'a aucune sous-suite convergente dans $A$ ; par Bolzano-Weierstrass, $A$ (fermée et bornée) n'est pas compacte, conformément au théorème de Riesz."
        ]
      },
      {
        "title": "Méthode : Prouver la continuité uniforme sur un intervalle non compact",
        "example": "Soit $f : \\mathbb{R} \\to \\mathbb{R}$ continue admettant des limites finies $\\ell$ en $+\\infty$ et $\\ell'$ en $-\\infty$ (par exemple $f = \\arctan$). Montrer que $f$ est uniformément continue sur $\\mathbb{R}$.",
        "steps": [
          "**Étape 1 (Contrôle à l'infini)** : soit $\\varepsilon > 0$. Il existe $A > 0$ tel que $|f(x) - \\ell| < \\varepsilon/2$ pour $x \\ge A$ et $|f(x) - \\ell'| < \\varepsilon/2$ pour $x \\le -A$.",
          "**Étape 2 (Heine sur un compact)** : $f$ est uniformément continue sur le compact $[-A-1 ; A+1]$ : il existe $\\delta_0 > 0$ tel que $x, y \\in [-A-1 ; A+1]$ et $|x - y| < \\delta_0$ impliquent $|f(x) - f(y)| < \\varepsilon$. Posons $\\delta = \\min(\\delta_0, 1)$.",
          "**Étape 3 (Disjonction)** : soient $x, y$ avec $|x - y| < \\delta$. Si les deux sont dans $[-A-1 ; A+1]$, l'étape 2 conclut. Sinon, par exemple $x > A + 1$ ; comme $|x - y| < 1$, $y > A$, et $|f(x) - f(y)| \\le |f(x) - \\ell| + |\\ell - f(y)| < \\varepsilon$. Le cas $x < -A - 1$ est symétrique.",
          "**Conclusion** : $\\forall \\varepsilon > 0, \\exists \\delta > 0, \\; |x - y| < \\delta \\implies |f(x) - f(y)| < \\varepsilon$ : $f$ est uniformément continue sur $\\mathbb{R}$."
        ]
      }
    ],
    "traps": [
      "En dimension infinie, un fermé borné n'est pas nécessairement compact (théorème de Riesz) : la boule unité de $\\ell^2$ contient la suite $(e_n)$ sans sous-suite convergente.",
      "La continuité uniforme est une propriété globale : $x \\mapsto x^2$ est continue sur $\\mathbb{R}$ mais pas uniformément continue (pour $x_n = n$ et $y_n = n + \\frac{1}{n}$, $y_n - x_n \\to 0$ mais $y_n^2 - x_n^2 \\to 2$) ; elle l'est sur tout segment par Heine.",
      "Sur une partie bornée non fermée, une fonction continue peut être non bornée : $x \\mapsto 1/x$ sur $]0 ; 1]$. L'hypothèse de compacité est indispensable dans le théorème des bornes atteintes.",
      "Connexe n'implique pas connexe par arcs : l'adhérence du graphe de $x \\mapsto \\sin(1/x)$ sur $]0 ; 1]$ est connexe, mais aucun chemin continu ne relie $(0, 0)$ à un point du graphe.",
      "Une réunion de deux connexes n'est pas connexe en général ($[0 ; 1] \\cup [2 ; 3]$) ; il faut par exemple qu'ils aient un point commun."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème de Heine.",
        "a": "Toute application continue d'un espace métrique compact dans un espace métrique est uniformément continue."
      },
      {
        "q": "Énoncer le théorème de Riesz sur les espaces normés.",
        "a": "Un espace vectoriel normé est de dimension finie si et seulement si sa boule unité fermée est compacte."
      },
      {
        "q": "Quels sont les compacts de $\\mathbb{R}^n$ ?",
        "a": "Les parties fermées et bornées (et plus généralement dans tout espace normé de dimension finie)."
      },
      {
        "q": "Pourquoi l'image continue d'un compact est-elle compacte ?",
        "a": "Toute suite $f(x_n)$ s'écrit avec $x_n \\in K$ ; on extrait $x_{\\varphi(n)} \\to x$, et par continuité $f(x_{\\varphi(n)}) \\to f(x)$."
      },
      {
        "q": "Où sert la compacité dans la preuve de l'équivalence des normes en dimension finie ?",
        "a": "Pour minorer : une norme $N$ continue atteint sur la sphère unité compacte de $\\|\\cdot\\|_\\infty$ un minimum $\\alpha > 0$."
      },
      {
        "q": "Quelles sont les parties connexes de $\\mathbb{R}$ ?",
        "a": "Les intervalles."
      }
    ]
  },
  "L3-MES": {
    "title": "L3-MES : Théorie de la Mesure et Intégration de Lebesgue",
    "domain": "Théorie de la Mesure",
    "objectives": [
      "Définir tribus, fonctions mesurables, mesures positives et la mesure de Lebesgue.",
      "Construire l'intégrale de Lebesgue des fonctions étagées positives puis des fonctions mesurables positives et intégrables.",
      "Démontrer le théorème de convergence monotone et l'inégalité de Markov ; appliquer le lemme de Fatou et la convergence dominée.",
      "Utiliser les théorèmes de continuité et de dérivation des intégrales à paramètre.",
      "Définir les espaces $L^p(\\mu)$, les inégalités de Hölder et Minkowski, et appliquer le théorème de Fubini-Tonelli."
    ],
    "keyPoints": [
      {
        "title": "1. Tribus et mesures positives",
        "content": "• **Tribu** : $\\mathcal{T} \\subset \\mathcal{P}(X)$ est une **tribu** si $X \\in \\mathcal{T}$, si $\\mathcal{T}$ est stable par complémentaire et par réunion dénombrable (donc aussi par intersection dénombrable).\n• **Tribu borélienne** $\\mathcal{B}(X)$ : tribu engendrée par les ouverts de $X$. Sur $\\mathbb{R}$, elle est aussi engendrée par les intervalles $]a ; b]$.\n• **Mesure positive** : $\\mu : \\mathcal{T} \\to [0 ; +\\infty]$ avec $\\mu(\\emptyset) = 0$ et, pour toute suite $(A_n)$ d'éléments deux à deux disjoints, $\\mu\\left(\\bigcup_n A_n\\right) = \\sum_n \\mu(A_n)$ ($\\sigma$-additivité).\n• **Propriétés** : monotonie ; sous-additivité $\\mu\\left(\\bigcup A_n\\right) \\le \\sum \\mu(A_n)$ ; **continuité croissante** : si $A_n \\subset A_{n+1}$, $\\mu\\left(\\bigcup A_n\\right) = \\lim \\mu(A_n)$ ; **continuité décroissante** : si $A_{n+1} \\subset A_n$ **et** $\\mu(A_0) < +\\infty$, $\\mu\\left(\\bigcap A_n\\right) = \\lim \\mu(A_n)$.\n• **Mesure de Lebesgue** $\\lambda$ : unique mesure sur $\\mathcal{B}(\\mathbb{R})$ telle que $\\lambda(]a ; b]) = b - a$ pour $a \\le b$ ; elle est invariante par translation. Toute partie dénombrable est $\\lambda$-négligeable, par exemple $\\lambda(\\mathbb{Q}) = 0$.\n• **Presque partout** : une propriété est vraie $\\mu$-p.p. si elle est vraie hors d'un ensemble de mesure nulle."
      },
      {
        "title": "2. Fonctions mesurables et construction de l'intégrale",
        "content": "• **Fonction mesurable** : $f : (X, \\mathcal{T}) \\to \\mathbb{R}$ est mesurable si $f^{-1}(B) \\in \\mathcal{T}$ pour tout borélien $B$ ; il suffit que $f^{-1}(]a ; +\\infty[) \\in \\mathcal{T}$ pour tout $a \\in \\mathbb{R}$. Les fonctions continues sont boréliennes ; sommes, produits, $\\sup_n$, $\\liminf_n$ et limites simples de fonctions mesurables sont mesurables.\n• **Fonctions étagées positives** : $\\varphi = \\sum_{i=1}^m c_i \\mathbf{1}_{A_i}$ avec $c_i \\ge 0$, $A_i \\in \\mathcal{T}$ ; $\\int \\varphi \\, d\\mu = \\sum c_i \\mu(A_i)$ (convention $0 \\times \\infty = 0$).\n• **Intégrale d'une fonction mesurable positive** :\n$$\\int_X f \\, d\\mu = \\sup \\left\\{ \\int_X \\varphi \\, d\\mu \\;\\middle|\\; \\varphi \\text{ étagée}, \\; 0 \\le \\varphi \\le f \\right\\} \\in [0 ; +\\infty]$$\n• **Approximation** : toute $f \\ge 0$ mesurable est limite simple d'une suite **croissante** de fonctions étagées positives, par exemple $\\varphi_n = \\min\\left(n, 2^{-n} \\lfloor 2^n f \\rfloor\\right)$.\n• **Fonctions intégrables** : $f$ est intégrable ($f \\in \\mathcal{L}^1(\\mu)$) si $f$ est **mesurable** et $\\int |f| \\, d\\mu < +\\infty$ ; on pose $\\int f \\, d\\mu = \\int f^+ \\, d\\mu - \\int f^- \\, d\\mu$. L'intégrale est linéaire et $\\left|\\int f \\, d\\mu\\right| \\le \\int |f| \\, d\\mu$."
      },
      {
        "title": "3. Théorèmes de convergence",
        "content": "• **Convergence monotone (Beppo Levi)** : si $(f_n)$ est une suite **croissante** de fonctions mesurables **positives**, de limite simple $f$, alors\n$$\\int_X f_n \\, d\\mu \\xrightarrow[n \\to \\infty]{} \\int_X f \\, d\\mu$$\nCorollaire (Tonelli pour les séries) : pour $g_n \\ge 0$ mesurables, $\\int \\sum_n g_n \\, d\\mu = \\sum_n \\int g_n \\, d\\mu$.\n• **Lemme de Fatou** : pour toute suite de fonctions mesurables positives, $\\int \\liminf_n f_n \\, d\\mu \\le \\liminf_n \\int f_n \\, d\\mu$.\n• **Convergence dominée (Lebesgue)** : soit $(f_n)$ une suite de fonctions mesurables convergeant $\\mu$-p.p. vers $f$. S'il existe $g$ **intégrable**, **indépendante de $n$**, telle que $|f_n| \\le g$ $\\mu$-p.p. pour tout $n$, alors $f$ est intégrable et\n$$\\int_X |f_n - f| \\, d\\mu \\to 0, \\quad \\text{donc} \\quad \\int_X f_n \\, d\\mu \\to \\int_X f \\, d\\mu$$\n• **Intégrales à paramètre** : soit $F(x) = \\int_\\Omega h(x, t) \\, d\\mu(t)$, $x \\in I$.\n  1. **Continuité** : si $x \\mapsto h(x, t)$ est continue pour presque tout $t$ et $|h(x, t)| \\le g(t)$ avec $g$ intégrable (pour tout $x$), alors $F$ est continue.\n  2. **Dérivation** : si de plus $I$ est un intervalle, $h(\\cdot, t)$ est dérivable et $|\\partial_x h(x, t)| \\le g_1(t)$ avec $g_1$ intégrable, alors $F$ est dérivable et $F'(x) = \\int_\\Omega \\partial_x h(x, t) \\, d\\mu(t)$."
      },
      {
        "title": "4. Démonstrations : convergence monotone et inégalité de Markov",
        "content": "**Théorème de convergence monotone.** Soit $(f_n)$ une suite croissante de fonctions mesurables à valeurs dans $[0 ; +\\infty]$ et $f = \\lim f_n = \\sup_n f_n$. Alors $\\int f_n \\, d\\mu \\to \\int f \\, d\\mu$.\n\n**Démonstration.**\n1. $f$ est mesurable (sup de fonctions mesurables). Comme $f_n \\le f_{n+1} \\le f$, la suite $\\left(\\int f_n\\right)$ est croissante et majorée par $\\int f$ : elle a une limite $L \\le \\int f$.\n2. Soit $\\varphi = \\sum_{i=1}^m c_i \\mathbf{1}_{A_i}$ étagée avec $0 \\le \\varphi \\le f$, et $c \\in ]0 ; 1[$. Posons $E_n = \\{x \\mid f_n(x) \\ge c \\, \\varphi(x)\\}$, mesurable.\n3. $(E_n)$ est croissante (car $(f_n)$ l'est) et $\\bigcup_n E_n = X$ : si $\\varphi(x) = 0$, $x \\in E_0$ ; si $\\varphi(x) > 0$, alors $c\\varphi(x) < \\varphi(x) \\le f(x) = \\lim f_n(x)$, donc $f_n(x) \\ge c\\varphi(x)$ pour $n$ assez grand.\n4. Pour tout $n$ : $\\int f_n \\ge \\int f_n \\mathbf{1}_{E_n} \\ge c \\int \\varphi \\mathbf{1}_{E_n} = c \\sum_{i=1}^m c_i \\, \\mu(A_i \\cap E_n)$.\n5. Par continuité croissante de la mesure, $\\mu(A_i \\cap E_n) \\to \\mu(A_i)$, donc $L \\ge c \\int \\varphi$. En faisant $c \\to 1$ puis en prenant le sup sur $\\varphi$ : $L \\ge \\int f$. D'où $L = \\int f$. $\\square$\n\n**Inégalité de Markov.** Pour $f$ mesurable positive et $a > 0$ : $\\mu(\\{f \\ge a\\}) \\le \\frac{1}{a} \\int f \\, d\\mu$.\n\n**Démonstration.** On a $a \\mathbf{1}_{\\{f \\ge a\\}} \\le f$ point par point ; par croissance de l'intégrale, $a \\, \\mu(\\{f \\ge a\\}) \\le \\int f \\, d\\mu$. $\\square$\n\n**Corollaire.** Si $f \\ge 0$ et $\\int f \\, d\\mu = 0$, alors $f = 0$ $\\mu$-p.p. : $\\{f > 0\\} = \\bigcup_{k \\ge 1} \\{f \\ge 1/k\\}$ et chaque $\\mu(\\{f \\ge 1/k\\}) \\le k \\int f = 0$."
      },
      {
        "title": "5. Espaces $L^p$ et inégalités",
        "content": "• **Espaces $L^p(\\mu)$**, $1 \\le p < \\infty$ : fonctions mesurables telles que $\\int |f|^p \\, d\\mu < +\\infty$, **quotientées par l'égalité presque partout**, normées par $\\|f\\|_p = \\left(\\int |f|^p \\, d\\mu\\right)^{1/p}$. $L^\\infty$ : fonctions essentiellement bornées. Ce sont des espaces de Banach (**Riesz-Fischer**) ; $L^2$ est un espace de Hilbert pour $\\langle f, g \\rangle = \\int f \\bar{g} \\, d\\mu$.\n• **Inégalité de Hölder** : pour $p, q \\in [1 ; +\\infty]$ conjugués ($\\frac{1}{p} + \\frac{1}{q} = 1$), $\\int |fg| \\, d\\mu \\le \\|f\\|_p \\|g\\|_q$. Cas $p = q = 2$ : Cauchy-Schwarz.\n• **Inégalité de Minkowski** : $\\|f + g\\|_p \\le \\|f\\|_p + \\|g\\|_p$.\n• **Inclusions** : si $\\mu(X) < +\\infty$ et $1 \\le p \\le q \\le \\infty$, alors $L^q(\\mu) \\subset L^p(\\mu)$, avec $\\|f\\|_p \\le \\mu(X)^{\\frac{1}{p} - \\frac{1}{q}} \\|f\\|_q$ (Hölder). Sans finitude de la mesure, aucune inclusion n'est garantie.\n• **Lien avec Riemann** : une fonction Riemann-intégrable sur un segment est Lebesgue-intégrable, avec la même intégrale. Une intégrale impropre **absolument** convergente est une intégrale de Lebesgue ; une intégrale seulement semi-convergente ne l'est pas."
      },
      {
        "title": "6. Mesure produit et théorème de Fubini-Tonelli",
        "content": "Soient $(X, \\mathcal{T}_X, \\mu)$ et $(Y, \\mathcal{T}_Y, \\nu)$ deux espaces mesurés **$\\sigma$-finis**.\n• **Mesure produit** : il existe une unique mesure $\\mu \\otimes \\nu$ sur la tribu produit telle que $(\\mu \\otimes \\nu)(A \\times B) = \\mu(A)\\nu(B)$. Exemple : $\\lambda \\otimes \\lambda$ est la mesure de Lebesgue de $\\mathbb{R}^2$.\n• **Tonelli** : si $f : X \\times Y \\to [0 ; +\\infty]$ est mesurable, alors\n$$\\int_{X \\times Y} f \\, d(\\mu \\otimes \\nu) = \\int_X \\left(\\int_Y f(x, y) \\, d\\nu(y)\\right) d\\mu(x) = \\int_Y \\left(\\int_X f(x, y) \\, d\\mu(x)\\right) d\\nu(y)$$\n(égalités dans $[0 ; +\\infty]$, sans hypothèse d'intégrabilité).\n• **Fubini** : si $f \\in L^1(\\mu \\otimes \\nu)$ — ce que l'on vérifie en appliquant Tonelli à $|f|$ —, les mêmes égalités ont lieu, toutes les intégrales étant finies.\n• **Changement de variables** : si $\\Phi : U \\to V$ est un $\\mathcal{C}^1$-difféomorphisme entre ouverts de $\\mathbb{R}^n$, $\\int_V f(y) \\, dy = \\int_U f(\\Phi(x)) \\, |\\det J_\\Phi(x)| \\, dx$ pour $f \\ge 0$ mesurable ou $f$ intégrable."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Appliquer le théorème de convergence dominée",
        "example": "Calculer $\\lim_{n \\to \\infty} I_n$ où $I_n = \\int_0^1 \\frac{n \\sin(x/n)}{1 + x^2} \\, dx$.",
        "steps": [
          "**Étape 1 (Convergence simple)** : pour $x \\in [0 ; 1]$, $n \\sin(x/n) \\to x$ (car $\\sin u \\sim u$ en $0$, et c'est vrai trivialement si $x = 0$). Donc $f_n(x) \\to \\frac{x}{1+x^2}$ pour tout $x$.",
          "**Étape 2 (Domination)** : pour $u \\ge 0$, $|\\sin u| \\le u$, donc $|n \\sin(x/n)| \\le x$ et $|f_n(x)| \\le \\frac{x}{1+x^2} \\le 1$ sur $[0 ; 1]$.",
          "**Étape 3 (Intégrabilité du dominant)** : $g = 1$ est intégrable sur $[0 ; 1]$ (mesure finie) et ne dépend pas de $n$.",
          "**Conclusion** : par convergence dominée, $\\lim I_n = \\int_0^1 \\frac{x}{1+x^2} \\, dx = \\left[\\frac{1}{2}\\ln(1+x^2)\\right]_0^1 = \\frac{\\ln 2}{2} \\approx 0{,}3466$."
        ]
      },
      {
        "title": "Méthode : Intervertir série et intégrale pour des fonctions positives",
        "example": "Calculer $J = \\int_0^1 \\frac{-\\ln(1-x)}{x} \\, dx$, sachant que $\\sum_{n \\ge 1} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$.",
        "steps": [
          "**Étape 1 (Développement en série)** : pour $x \\in ]0 ; 1[$, $-\\ln(1-x) = \\sum_{n \\ge 1} \\frac{x^n}{n}$, donc $\\frac{-\\ln(1-x)}{x} = \\sum_{n \\ge 1} \\frac{x^{n-1}}{n}$.",
          "**Étape 2 (Positivité)** : chaque terme $g_n(x) = \\frac{x^{n-1}}{n}$ est mesurable et positif sur $]0 ; 1[$ : le corollaire de la convergence monotone (Tonelli pour les séries) s'applique sans aucune hypothèse de convergence uniforme.",
          "**Étape 3 (Intégration terme à terme)** : $\\int_0^1 \\frac{x^{n-1}}{n} \\, dx = \\frac{1}{n^2}$.",
          "**Conclusion** : $J = \\sum_{n \\ge 1} \\frac{1}{n^2} = \\frac{\\pi^2}{6} \\approx 1{,}6449$ ; en particulier $J$ est finie, ce que l'on obtient sans étude préalable de l'intégrale impropre."
        ]
      }
    ],
    "traps": [
      "Dans la convergence dominée, le dominant doit être indépendant de $n$ et intégrable : $f_n = n \\mathbf{1}_{]0 ; 1/n[}$ tend vers $0$ partout, mais $\\int f_n = 1$ pour tout $n$ (le plus petit majorant, $\\sup_n f_n$, n'est pas intégrable).",
      "La convergence monotone exige une suite croissante de fonctions positives : $f_n = \\mathbf{1}_{[n ; +\\infty[}$ décroît vers $0$ alors que $\\int f_n \\, d\\lambda = +\\infty$ pour tout $n$.",
      "Une intégrale impropre semi-convergente n'est pas une intégrale de Lebesgue : $\\int_1^{+\\infty} \\frac{\\sin x}{x} \\, dx$ converge au sens impropre, mais $\\int_1^{+\\infty} \\frac{|\\sin x|}{x} \\, dx = +\\infty$.",
      "Fubini sans intégrabilité peut être faux : pour $f(x, y) = \\frac{x^2 - y^2}{(x^2 + y^2)^2}$ sur $]0 ; 1]^2$, les deux intégrales itérées valent $\\frac{\\pi}{4}$ et $-\\frac{\\pi}{4}$ ; ici $\\int\\!\\!\\int |f| = +\\infty$.",
      "Sur un espace de mesure infinie, $L^2 \\not\\subset L^1$ : $x \\mapsto \\frac{1}{x} \\mathbf{1}_{[1 ; +\\infty[}$ est dans $L^2(\\mathbb{R})$ mais pas dans $L^1(\\mathbb{R})$."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème de convergence dominée.",
        "a": "Si $f_n \\to f$ p.p. et $|f_n| \\le g$ p.p. pour tout $n$ avec $g$ intégrable indépendante de $n$, alors $f$ est intégrable et $\\int |f_n - f| \\to 0$, donc $\\int f_n \\to \\int f$."
      },
      {
        "q": "Énoncer le lemme de Fatou.",
        "a": "Pour toute suite $(f_n)$ de fonctions mesurables positives, $\\int \\liminf f_n \\, d\\mu \\le \\liminf \\int f_n \\, d\\mu$."
      },
      {
        "q": "Énoncer l'inégalité de Markov et en donner la preuve en une ligne.",
        "a": "$\\mu(f \\ge a) \\le \\frac{1}{a}\\int f \\, d\\mu$ pour $f \\ge 0$, $a > 0$ : intégrer $a \\mathbf{1}_{\\{f \\ge a\\}} \\le f$."
      },
      {
        "q": "Quelle hypothèse permet d'intervertir série et intégrale sans condition de convergence ?",
        "a": "La positivité des termes : $\\int \\sum g_n = \\sum \\int g_n$ pour $g_n \\ge 0$ mesurables (convergence monotone)."
      },
      {
        "q": "Que vérifier avant d'appliquer Fubini à une fonction de signe quelconque ?",
        "a": "L'intégrabilité sur le produit : $\\int_X \\int_Y |f| < +\\infty$, que l'on calcule grâce à Tonelli."
      },
      {
        "q": "Mesure de Lebesgue de $\\mathbb{Q}$ ?",
        "a": "$\\lambda(\\mathbb{Q}) = 0$ : $\\mathbb{Q}$ est dénombrable et chaque singleton est de mesure nulle ($\\sigma$-additivité)."
      }
    ]
  },
  "L3-GRP2": {
    "title": "L3-GRP2 : Actions de groupes, orbites, stabilisateurs et théorèmes de Sylow",
    "domain": "Théorie des Groupes",
    "objectives": [
      "Définir une action de groupe sur un ensemble et le morphisme associé vers le groupe des permutations.",
      "Définir orbites et stabilisateurs, et démontrer la relation orbite-stabilisateur.",
      "Établir la formule des classes, en déduire que le centre d'un $p$-groupe non trivial est non trivial, et utiliser la formule de Burnside.",
      "Énoncer et appliquer les théorèmes de Sylow pour étudier les groupes finis d'ordre donné."
    ],
    "keyPoints": [
      {
        "title": "1. Actions de groupes",
        "content": "• **Action à gauche** de $G$ sur un ensemble $X$ : application $G \\times X \\to X$, $(g, x) \\mapsto g \\cdot x$, telle que $e \\cdot x = x$ et $g \\cdot (h \\cdot x) = (gh) \\cdot x$.\n• **Morphisme associé** : se donner une action équivaut à se donner un morphisme de groupes $\\rho : G \\to \\mathfrak{S}(X)$, $\\rho(g)(x) = g \\cdot x$.\n• **Vocabulaire** : l'action est **fidèle** si $\\text{Ker}\\,\\rho = \\{e\\}$, **transitive** s'il n'y a qu'une orbite, **libre** si tous les stabilisateurs sont triviaux.\n• **Exemples** :\n  1. $G$ agit sur lui-même par translation à gauche $g \\cdot x = gx$ (fidèle et transitive) : c'est le **théorème de Cayley**, tout groupe fini d'ordre $n$ se plonge dans $\\mathfrak{S}_n$.\n  2. $G$ agit sur lui-même par **conjugaison** $g \\cdot x = gxg^{-1}$.\n  3. $G$ agit sur $G/H$ par $g \\cdot (xH) = (gx)H$ (transitive).\n  4. $\\text{GL}_n(\\mathbb{K})$ agit sur $\\mathbb{K}^n$ ; le groupe des isométries d'un polygone agit sur ses sommets."
      },
      {
        "title": "2. Orbites, stabilisateurs et relation orbite-stabilisateur",
        "content": "• **Orbite** de $x$ : $\\mathcal{O}_x = \\{g \\cdot x \\mid g \\in G\\}$. Les orbites sont les classes de la relation d'équivalence $x \\sim y \\iff \\exists g, \\; y = g \\cdot x$ : elles **partitionnent** $X$.\n• **Stabilisateur** : $G_x = \\{g \\in G \\mid g \\cdot x = x\\}$, sous-groupe de $G$. Pour $y = g \\cdot x$, $G_y = g G_x g^{-1}$.\n• **Relation orbite-stabilisateur** : l'application $\\Phi : G/G_x \\to \\mathcal{O}_x$, $g G_x \\mapsto g \\cdot x$ est **bien définie et bijective**. En effet, pour $g, h \\in G$ :\n$$g \\cdot x = h \\cdot x \\iff (h^{-1}g) \\cdot x = x \\iff h^{-1}g \\in G_x \\iff g G_x = h G_x$$\n(le sens $\\Leftarrow$ donne la bonne définition, le sens $\\Rightarrow$ l'injectivité ; la surjectivité est claire). Si $G$ est fini :\n$$|\\mathcal{O}_x| = [G : G_x] = \\frac{|G|}{|G_x|}, \\quad \\text{en particulier } |\\mathcal{O}_x| \\text{ divise } |G|$$"
      },
      {
        "title": "3. Formule des classes et formule de Burnside",
        "content": "• **Équation aux classes d'une action** : si $X$ est fini et $x_1, \\dots, x_r$ sont des représentants des orbites,\n$$|X| = \\sum_{i=1}^r [G : G_{x_i}]$$\n• **Cas de la conjugaison** : les orbites sont les classes de conjugaison, les stabilisateurs les centralisateurs $C_G(x) = \\{g \\mid gx = xg\\}$, et les orbites réduites à un point sont les éléments du **centre** $Z(G)$. Pour $G$ fini :\n$$|G| = |Z(G)| + \\sum_{i=1}^k [G : C_G(x_i)]$$\noù $x_1, \\dots, x_k$ représentent les classes de conjugaison **non réduites à un élément** (chaque indice $[G : C_G(x_i)]$ est alors $> 1$ et divise $|G|$).\n• **Formule de Burnside** (dénombrement des orbites) : si $G$ et $X$ sont finis, avec $\\text{Fix}(g) = \\{x \\in X \\mid g \\cdot x = x\\}$,\n$$|X / G| = \\frac{1}{|G|} \\sum_{g \\in G} |\\text{Fix}(g)|$$\n(compter de deux façons les couples $(g, x)$ tels que $g \\cdot x = x$, puis utiliser orbite-stabilisateur)."
      },
      {
        "title": "4. Démonstration : formule des classes et centre d'un $p$-groupe",
        "content": "**Théorème.** Soit $p$ un nombre premier et $G$ un groupe d'ordre $p^n$ avec $n \\ge 1$. Alors $Z(G) \\neq \\{e\\}$ ; plus précisément $p$ divise $|Z(G)|$.\n\n**Démonstration.**\n1. **Formule des classes.** Faisons agir $G$ sur lui-même par conjugaison. Les orbites partitionnent $G$ ; l'orbite de $x$ est réduite à $\\{x\\}$ si et seulement si $gxg^{-1} = x$ pour tout $g$, c'est-à-dire $x \\in Z(G)$. En regroupant les orbites ponctuelles et en notant $x_1, \\dots, x_k$ des représentants des autres orbites, on obtient, par la relation orbite-stabilisateur :\n$$|G| = |Z(G)| + \\sum_{i=1}^k [G : C_G(x_i)]$$\n2. **Divisibilité.** Chaque $[G : C_G(x_i)]$ divise $|G| = p^n$ (Lagrange) et est $> 1$ (l'orbite de $x_i$ n'est pas ponctuelle). C'est donc une puissance $p^{a_i}$ avec $a_i \\ge 1$ : $p$ divise chacun de ces indices.\n3. **Conclusion.** $|Z(G)| = p^n - \\sum_{i} [G : C_G(x_i)]$ est divisible par $p$. Comme $e \\in Z(G)$, $|Z(G)| \\ge 1$, donc $|Z(G)| \\ge p$. $\\square$\n\n**Corollaire.** Tout groupe d'ordre $p^2$ est abélien. En effet $|Z(G)| \\in \\{p, p^2\\}$ ; si $|Z(G)| = p$, alors $G/Z(G)$ est d'ordre $p$, donc cyclique engendré par une classe $gZ(G)$ ; tout élément s'écrit $g^k z$ avec $z \\in Z(G)$, et deux tels éléments commutent : $G$ est abélien, d'où $Z(G) = G$, contradiction. Donc $G = Z(G)$."
      },
      {
        "title": "5. Théorèmes de Sylow",
        "content": "Soit $G$ un groupe fini d'ordre $p^\\alpha m$ avec $p$ premier, $\\alpha \\ge 1$ et $p \\nmid m$.\n• **Définition** : un **$p$-Sylow** de $G$ est un sous-groupe d'ordre $p^\\alpha$.\n• **Théorème 1 (existence)** : $G$ possède au moins un $p$-Sylow.\n• **Théorème 2 (conjugaison)** : tout $p$-sous-groupe de $G$ est contenu dans un $p$-Sylow, et deux $p$-Sylow sont conjugués : $P_2 = g P_1 g^{-1}$ pour un $g \\in G$.\n• **Théorème 3 (dénombrement)** : le nombre $n_p$ de $p$-Sylow vérifie\n$$n_p \\equiv 1 \\pmod p \\quad \\text{et} \\quad n_p \\mid m$$\nDe plus $n_p = [G : N_G(P)]$ où $N_G(P) = \\{g \\mid gPg^{-1} = P\\}$ est le normalisateur.\n• **Corollaire** : un $p$-Sylow $P$ est distingué dans $G$ si et seulement si $n_p = 1$.\n• **Théorème de Cauchy** : si $p$ divise $|G|$, $G$ possède un élément d'ordre $p$ (prendre un élément $g \\neq e$ d'un $p$-Sylow, d'ordre $p^k$, et considérer $g^{p^{k-1}}$).\n• **Simplicité** : un groupe est **simple** s'il n'a pas d'autre sous-groupe distingué que $\\{e\\}$ et lui-même. Les théorèmes de Sylow permettent souvent de montrer qu'un groupe d'ordre donné n'est pas simple."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Montrer qu'un groupe d'ordre 15 est cyclique",
        "example": "Soit $G$ un groupe d'ordre $15 = 3 \\times 5$. Montrer que $G \\simeq \\mathbb{Z}/15\\mathbb{Z}$.",
        "steps": [
          "**Étape 1 ($n_5$)** : par Sylow 3, $n_5 \\equiv 1 \\pmod 5$ et $n_5 \\mid 3$, donc $n_5 = 1$ : l'unique 5-Sylow $P_5$ est distingué.",
          "**Étape 2 ($n_3$)** : $n_3 \\equiv 1 \\pmod 3$ et $n_3 \\mid 5$, donc $n_3 = 1$ : l'unique 3-Sylow $P_3$ est distingué.",
          "**Étape 3 (Produit direct)** : $P_3 \\cap P_5 = \\{e\\}$ (son ordre divise 3 et 5). Pour $x \\in P_3$, $y \\in P_5$, le commutateur $xyx^{-1}y^{-1}$ appartient à $P_5$ (car $xyx^{-1} \\in P_5$) et à $P_3$ (car $yx^{-1}y^{-1} \\in P_3$), donc vaut $e$ : $x$ et $y$ commutent. L'application $P_3 \\times P_5 \\to G$, $(x, y) \\mapsto xy$ est alors un morphisme injectif, donc bijectif par cardinalité.",
          "**Conclusion** : $G \\simeq \\mathbb{Z}/3\\mathbb{Z} \\times \\mathbb{Z}/5\\mathbb{Z} \\simeq \\mathbb{Z}/15\\mathbb{Z}$ (lemme chinois, $3 \\wedge 5 = 1$). Plus généralement, si $p < q$ sont premiers et $p \\nmid q - 1$, tout groupe d'ordre $pq$ est cyclique."
        ]
      },
      {
        "title": "Méthode : Dénombrer des configurations à symétrie près (Burnside)",
        "example": "Combien y a-t-il de façons de colorier les 4 sommets d'un carré avec 2 couleurs, deux coloriages étant identifiés s'ils se déduisent l'un de l'autre par une rotation du carré ?",
        "steps": [
          "**Étape 1 (Action)** : le groupe $G = \\{r_0, r_1, r_2, r_3\\}$ des rotations d'angles $0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$ agit sur l'ensemble $X$ des $2^4 = 16$ coloriages.",
          "**Étape 2 (Points fixes)** : $|\\text{Fix}(r_0)| = 16$ ; $r_1$ et $r_3$ permutent circulairement les 4 sommets, un coloriage fixe est constant : $|\\text{Fix}(r_1)| = |\\text{Fix}(r_3)| = 2$ ; $r_2$ échange les sommets opposés deux à deux : $|\\text{Fix}(r_2)| = 2^2 = 4$.",
          "**Étape 3 (Formule de Burnside)** : $|X/G| = \\frac{1}{4}(16 + 2 + 4 + 2) = \\frac{24}{4} = 6$.",
          "**Conclusion** : il y a 6 coloriages à rotation près (0, 1, 2 adjacents, 2 opposés, 3 ou 4 sommets d'une même couleur). Diviser 16 par 4 serait faux : l'action n'est pas libre."
        ]
      }
    ],
    "traps": [
      "Dans Sylow 3, $n_p$ divise $m = |G|/p^\\alpha$, et pas seulement $|G|$ : écrire « $n_p \\mid |G|$ » fait perdre l'information utile.",
      "Les stabilisateurs dépendent du point : pour $y = g \\cdot x$, $G_y = g G_x g^{-1}$, qui en général diffère de $G_x$ (mais a le même cardinal).",
      "Les théorèmes de Sylow ne donnent l'existence de sous-groupes que pour les puissances de premiers : $\\mathfrak{A}_4$, d'ordre 12, n'a pas de sous-groupe d'ordre 6.",
      "Le nombre d'orbites n'est pas $|X|/|G|$ en général : cette formule n'est valable que pour une action libre ; sinon il faut la formule de Burnside.",
      "Les conditions $n_p \\equiv 1 \\pmod p$ et $n_p \\mid m$ n'imposent pas $n_p = 1$ : dans $\\mathfrak{S}_4$ (ordre $24 = 2^3 \\times 3$), $n_3 = 4$."
    ],
    "flashcards": [
      {
        "q": "Énoncer la relation orbite-stabilisateur.",
        "a": "$gG_x \\mapsto g \\cdot x$ est une bijection de $G/G_x$ sur $\\mathcal{O}_x$ ; si $G$ est fini, $|\\mathcal{O}_x| = |G|/|G_x|$."
      },
      {
        "q": "Écrire la formule des classes.",
        "a": "$|G| = |Z(G)| + \\sum_{i=1}^k [G : C_G(x_i)]$, les $x_i$ représentant les classes de conjugaison non réduites à un élément."
      },
      {
        "q": "Pourquoi le centre d'un $p$-groupe non trivial est-il non trivial ?",
        "a": "Dans la formule des classes, chaque indice $[G : C_G(x_i)] > 1$ divise $p^n$ donc est divisible par $p$ ; ainsi $p \\mid |Z(G)|$ et $|Z(G)| \\ge p$."
      },
      {
        "q": "Conditions sur le nombre $n_p$ de $p$-Sylow d'un groupe d'ordre $p^\\alpha m$, $p \\nmid m$ ?",
        "a": "$n_p \\equiv 1 \\pmod p$ et $n_p \\mid m$ ; de plus $n_p = 1$ si et seulement si le $p$-Sylow est distingué."
      },
      {
        "q": "Énoncer la formule de Burnside.",
        "a": "Le nombre d'orbites est $\\frac{1}{|G|}\\sum_{g \\in G} |\\text{Fix}(g)|$."
      },
      {
        "q": "Un groupe d'ordre $p^2$ ($p$ premier) est-il abélien ?",
        "a": "Oui : sinon $|Z(G)| = p$ et $G/Z(G)$ serait cyclique, ce qui force $G$ abélien, contradiction."
      }
    ]
  },
  "L3-ANN": {
    "title": "L3-ANN : Anneaux, idéaux, anneaux principaux et factoriels, polynômes",
    "domain": "Algèbre Commutative",
    "objectives": [
      "Définir les anneaux, idéaux et anneaux quotients $A/I$, et utiliser le théorème d'isomorphisme.",
      "Caractériser idéaux premiers et maximaux par les quotients $A/I$.",
      "Démontrer qu'un anneau euclidien est principal, en particulier $\\mathbb{Z}$ et $\\mathbb{K}[X]$.",
      "Distinguer éléments irréductibles et premiers, et situer anneaux euclidiens, principaux et factoriels.",
      "Appliquer les critères d'irréductibilité dans $\\mathbb{K}[X]$ et $\\mathbb{Z}[X]$ (racines, Eisenstein, réduction modulo $p$) et construire des corps de rupture."
    ],
    "keyPoints": [
      {
        "title": "1. Anneaux, idéaux et anneaux quotients",
        "content": "Dans tout le chapitre, les anneaux sont commutatifs et unitaires.\n• **Anneau** : $(A, +, \\times)$ avec $(A, +)$ groupe abélien, $\\times$ associative, distributive sur $+$, d'élément neutre $1_A$. $A$ est **intègre** si $A \\neq \\{0\\}$ et $ab = 0 \\implies a = 0$ ou $b = 0$. $A^{\\times}$ désigne le groupe des **inversibles**.\n• **Idéal** : $I \\subset A$ est un idéal si $(I, +)$ est un sous-groupe de $(A, +)$ et si $\\forall a \\in A, \\forall x \\in I, \\; ax \\in I$. Un idéal contenant $1$ (ou un inversible) est égal à $A$.\n• **Quotient** : la relation $x \\equiv y \\iff x - y \\in I$ est compatible avec $+$ et $\\times$ ; $A/I$ est un anneau et $\\pi : A \\to A/I$ un morphisme surjectif de noyau $I$.\n• **Théorème d'isomorphisme** : pour tout morphisme d'anneaux $\\varphi : A \\to B$, $\\text{Ker}(\\varphi)$ est un idéal et $A/\\text{Ker}(\\varphi) \\simeq \\text{Im}(\\varphi)$.\n• **Exemples** : $\\mathbb{Z}/n\\mathbb{Z}$ ; $\\mathbb{R}[X]/(X^2 + 1) \\simeq \\mathbb{C}$ via l'évaluation $P \\mapsto P(i)$, surjective de noyau $(X^2 + 1)$ ; $(\\mathbb{Z}/n\\mathbb{Z})^{\\times} = \\{\\bar{k} \\mid k \\wedge n = 1\\}$."
      },
      {
        "title": "2. Idéaux premiers et idéaux maximaux",
        "content": "Soit $A$ un anneau commutatif unitaire.\n• **Idéal premier** : idéal $P \\neq A$ tel que $ab \\in P \\implies a \\in P$ ou $b \\in P$. **Caractérisation** : $P$ premier $\\iff A/P$ intègre.\n• **Idéal maximal** : idéal $M \\neq A$ tel que les seuls idéaux contenant $M$ sont $M$ et $A$. **Caractérisation** : $M$ maximal $\\iff A/M$ est un corps.\n• **Conséquence** : tout idéal maximal est premier (un corps est intègre). La réciproque est fausse : dans $\\mathbb{Z}[X]$, $(X)$ est premier ($\\mathbb{Z}[X]/(X) \\simeq \\mathbb{Z}$ intègre) mais pas maximal ($\\mathbb{Z}$ n'est pas un corps ; $(X) \\subsetneq (2, X) \\subsetneq \\mathbb{Z}[X]$).\n• **Dans $\\mathbb{Z}$** : les idéaux premiers sont $(0)$ et les $(p)$, $p$ premier ; les maximaux sont les $(p)$. Ainsi $\\mathbb{Z}/n\\mathbb{Z}$ est un corps $\\iff$ $\\mathbb{Z}/n\\mathbb{Z}$ est intègre $\\iff$ $n$ est premier.\n• **Dans un anneau principal** : tout idéal premier non nul est maximal."
      },
      {
        "title": "3. Divisibilité, irréductibles et anneaux factoriels",
        "content": "Soit $A$ un anneau intègre.\n• $a$ et $b$ sont **associés** si $a = ub$ avec $u \\in A^{\\times}$, c'est-à-dire si $(a) = (b)$.\n• $p \\in A$ non nul et non inversible est **irréductible** si $p = ab \\implies a$ ou $b$ inversible ; il est **premier** si $p \\mid ab \\implies p \\mid a$ ou $p \\mid b$ (c'est-à-dire si $(p)$ est un idéal premier).\n• Dans un anneau intègre, **premier $\\implies$ irréductible**. La réciproque est fausse en général.\n• **Anneau factoriel** : anneau intègre où tout élément non nul non inversible est produit d'irréductibles, de façon unique à l'ordre et aux inversibles près. Dans un anneau factoriel, irréductible $\\iff$ premier (lemme d'Euclide), et les PGCD existent.\n• **Contre-exemple** : dans $\\mathbb{Z}[i\\sqrt{5}]$, $6 = 2 \\times 3 = (1 + i\\sqrt{5})(1 - i\\sqrt{5})$ ; ces quatre éléments sont irréductibles (argument de norme $N(a + ib\\sqrt{5}) = a^2 + 5b^2$, qui ne prend jamais les valeurs 2 et 3) et non associés deux à deux : l'anneau n'est pas factoriel, et $2$ est irréductible sans être premier."
      },
      {
        "title": "4. Anneaux euclidiens et principaux",
        "content": "• **Anneau principal** : anneau intègre dont tout idéal est de la forme $(a) = aA$.\n• **Anneau euclidien** : anneau intègre muni d'un stathme $v : A \\setminus \\{0\\} \\to \\mathbb{N}$ tel que\n$$\\forall a \\in A, \\forall b \\neq 0, \\; \\exists q, r \\in A, \\quad a = bq + r \\quad \\text{avec } r = 0 \\text{ ou } v(r) < v(b)$$\nExemples : $\\mathbb{Z}$ ($v = |\\cdot|$), $\\mathbb{K}[X]$ avec $\\mathbb{K}$ un corps ($v = \\deg$), $\\mathbb{Z}[i]$ ($v(a + ib) = a^2 + b^2$).\n• **Bézout et PGCD** : dans un anneau principal, $(a) + (b) = (d)$ où $d$ est un PGCD de $a$ et $b$ ; il existe donc $u, v$ tels que $au + bv = d$.\n• **Hiérarchie** (inclusions strictes entre classes d'anneaux) :\n$$\\text{euclidien} \\implies \\text{principal} \\implies \\text{factoriel} \\implies \\text{intègre}$$\n$\\mathbb{Z}[X]$ et $\\mathbb{K}[X, Y]$ sont factoriels non principaux ; $\\mathbb{Z}[i\\sqrt{5}]$ est intègre non factoriel. (Il existe aussi des anneaux principaux non euclidiens, plus délicats à exhiber.)\n• **Théorème de Gauss (factorialité)** : si $A$ est factoriel, $A[X]$ est factoriel. Il repose sur le **lemme de Gauss** : le contenu (PGCD des coefficients) est multiplicatif, $c(PQ) = c(P)c(Q)$ à un inversible près."
      },
      {
        "title": "5. Démonstration : un anneau euclidien est principal ($\\mathbb{Z}$, $\\mathbb{K}[X]$)",
        "content": "**Théorème.** Tout anneau euclidien est principal. En particulier $\\mathbb{Z}$ et $\\mathbb{K}[X]$ ($\\mathbb{K}$ corps) sont principaux.\n\n**Démonstration.**\n1. Soit $A$ euclidien de stathme $v$ et $I$ un idéal de $A$. Si $I = \\{0\\}$, $I = (0)$ est principal.\n2. Sinon, l'ensemble $\\{v(x) \\mid x \\in I, \\, x \\neq 0\\}$ est une partie non vide de $\\mathbb{N}$ : il admet un plus petit élément, atteint en un $b \\in I \\setminus \\{0\\}$.\n3. On a $(b) \\subset I$ car $I$ est un idéal contenant $b$.\n4. Réciproquement, soit $a \\in I$. Division euclidienne : $a = bq + r$ avec $r = 0$ ou $v(r) < v(b)$. Or $r = a - bq \\in I$ (car $a \\in I$ et $bq \\in I$). Si $r \\neq 0$, alors $r \\in I \\setminus \\{0\\}$ et $v(r) < v(b)$, ce qui contredit la minimalité de $v(b)$. Donc $r = 0$ et $a = bq \\in (b)$.\n5. Ainsi $I = (b)$. $\\square$\n\n**Cas de $\\mathbb{Z}$.** Avec $v = |\\cdot|$, un idéal non nul $I$ est égal à $n\\mathbb{Z}$ où $n$ est le plus petit élément strictement positif de $I$.\n\n**Cas de $\\mathbb{K}[X]$.** La division euclidienne par $B \\neq 0$ existe car le coefficient dominant de $B$ est **inversible** dans le corps $\\mathbb{K}$ ; un idéal non nul est engendré par l'un quelconque de ses éléments non nuls de degré minimal, et par un unique polynôme unitaire.\n\n**Remarque.** Si $A$ n'est pas un corps, $A[X]$ n'est pas principal : pour $a \\in A$ non nul non inversible, l'idéal $(a, X)$ n'est pas principal. Exemple : $(2, X)$ dans $\\mathbb{Z}[X]$."
      },
      {
        "title": "6. Polynômes irréductibles et corps de rupture",
        "content": "• **Sur un corps $\\mathbb{K}$** : $P$ irréductible dans $\\mathbb{K}[X]$ $\\iff$ $(P)$ maximal $\\iff$ $\\mathbb{K}[X]/(P)$ est un corps, de dimension $\\deg P$ sur $\\mathbb{K}$ (**corps de rupture** : la classe de $X$ y est une racine de $P$).\n• **Racines** : un polynôme de degré $\\ge 2$ ayant une racine dans $\\mathbb{K}$ est réductible ; un polynôme de **degré 2 ou 3** est irréductible si et seulement s'il n'a pas de racine dans $\\mathbb{K}$.\n• Irréductibles de $\\mathbb{C}[X]$ : degré 1 ; de $\\mathbb{R}[X]$ : degré 1 et degré 2 à discriminant strictement négatif.\n• **Racines rationnelles** : si $\\frac{p}{q}$ (irréductible) est racine de $\\sum a_k X^k \\in \\mathbb{Z}[X]$, alors $p \\mid a_0$ et $q \\mid a_n$.\n• **Critère d'Eisenstein** : soit $P = a_n X^n + \\dots + a_0 \\in \\mathbb{Z}[X]$, $n \\ge 1$, et $p$ premier tel que $p \\nmid a_n$, $p \\mid a_i$ pour $0 \\le i \\le n-1$, et $p^2 \\nmid a_0$. Alors $P$ est irréductible dans $\\mathbb{Q}[X]$ (et dans $\\mathbb{Z}[X]$ si $P$ est primitif). Exemple : $X^n - 2$ est irréductible sur $\\mathbb{Q}$ pour tout $n \\ge 1$.\n• **Réduction modulo $p$** : si $P \\in \\mathbb{Z}[X]$, $p \\nmid a_n$ et $\\bar{P}$ est irréductible dans $\\mathbb{F}_p[X]$, alors $P$ est irréductible dans $\\mathbb{Q}[X]$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Montrer l'irréductibilité de $\\Phi_p$ par Eisenstein",
        "example": "Montrer que $\\Phi_p(X) = X^{p-1} + X^{p-2} + \\dots + X + 1$ est irréductible dans $\\mathbb{Q}[X]$ pour $p$ premier.",
        "steps": [
          "**Étape 1 (Translation)** : $P \\mapsto P(Y + 1)$ est un automorphisme de l'anneau $\\mathbb{Q}[X]$ qui préserve le degré, donc l'irréductibilité. Posons $Q(Y) = \\Phi_p(Y + 1) = \\frac{(Y+1)^p - 1}{Y}$.",
          "**Étape 2 (Binôme)** : $Q(Y) = \\sum_{k=1}^p \\binom{p}{k} Y^{k-1} = Y^{p-1} + \\binom{p}{p-1} Y^{p-2} + \\dots + \\binom{p}{2} Y + p$.",
          "**Étape 3 (Hypothèses d'Eisenstein)** : le coefficient dominant est $1$, non divisible par $p$ ; pour $1 \\le k \\le p-1$, $p \\mid \\binom{p}{k}$ (car $p$ divise $k \\binom{p}{k} = p \\binom{p-1}{k-1}$ et $p \\wedge k = 1$) ; le coefficient constant $p$ n'est pas divisible par $p^2$.",
          "**Conclusion** : $Q$ est irréductible sur $\\mathbb{Q}$, donc $\\Phi_p$ aussi."
        ]
      },
      {
        "title": "Méthode : Prouver l'irréductibilité par réduction modulo 2 et construire un corps fini",
        "example": "Montrer que $P = X^3 + 5X^2 + 7X + 1$ est irréductible dans $\\mathbb{Q}[X]$ et décrire $\\mathbb{F}_2[X]/(X^3 + X^2 + X + 1)$ versus $\\mathbb{F}_2[X]/(X^3 + X + 1)$.",
        "steps": [
          "**Étape 1 (Réduction)** : modulo 2, le coefficient dominant $1$ n'est pas divisible par 2 et $\\bar{P} = X^3 + X^2 + X + 1$. Or $\\bar{P}(1) = 4 = 0$ dans $\\mathbb{F}_2$ : $\\bar{P} = (X + 1)(X^2 + 1)$ est réductible ; le critère ne conclut pas avec $p = 2$.",
          "**Étape 2 (Autre premier)** : modulo 3, $\\bar{P} = X^3 + 2X^2 + X + 1$ ; $\\bar{P}(0) = 1$, $\\bar{P}(1) = 5 = 2$, $\\bar{P}(2) = 8 + 8 + 2 + 1 = 19 = 1$ dans $\\mathbb{F}_3$. Pas de racine et degré 3 : $\\bar{P}$ est irréductible dans $\\mathbb{F}_3[X]$.",
          "**Étape 3 (Conclusion pour $P$)** : par le critère de réduction, $P$ est irréductible dans $\\mathbb{Q}[X]$ (on peut contrôler : ses seules racines rationnelles possibles $\\pm 1$ ne sont pas racines, $P(1) = 14$, $P(-1) = -2$).",
          "**Conclusion (corps finis)** : $X^3 + X + 1$ n'a pas de racine dans $\\mathbb{F}_2$ ($0 \\mapsto 1$, $1 \\mapsto 1$) et est de degré 3, donc irréductible : $\\mathbb{F}_2[X]/(X^3 + X + 1)$ est un corps à $2^3 = 8$ éléments. En revanche $\\mathbb{F}_2[X]/(X^3 + X^2 + X + 1)$ n'est pas intègre : $(\\bar{X} + 1)(\\bar{X}^2 + 1) = 0$."
        ]
      }
    ],
    "traps": [
      "Irréductible n'implique pas premier hors des anneaux factoriels : dans $\\mathbb{Z}[i\\sqrt{5}]$, $2$ est irréductible, divise $(1 + i\\sqrt{5})(1 - i\\sqrt{5}) = 6$, mais ne divise aucun des deux facteurs.",
      "$\\mathbb{Z}[X]$ n'est pas principal : si $(2, X) = (d)$, $d$ divise $2$ et $X$, donc $d = \\pm 1$ ; or $1 \\notin (2, X)$ car le coefficient constant de $2U + XV$ est pair.",
      "« Pas de racine » n'implique « irréductible » qu'en degré 2 ou 3 : $(X^2 + 1)^2$ n'a pas de racine réelle mais est réductible dans $\\mathbb{R}[X]$.",
      "Eisenstein donne l'irréductibilité dans $\\mathbb{Q}[X]$, pas forcément dans $\\mathbb{Z}[X]$ : $2X + 6$ vérifie le critère pour $p = 3$ mais $2X + 6 = 2(X + 3)$ avec $2$ non inversible dans $\\mathbb{Z}$.",
      "Premier n'implique pas maximal : $(X)$ est premier non maximal dans $\\mathbb{Z}[X]$ ; l'implication ne vaut, pour les idéaux non nuls, que dans un anneau principal."
    ],
    "flashcards": [
      {
        "q": "Caractériser un idéal maximal, puis un idéal premier, par le quotient.",
        "a": "$M$ maximal $\\iff A/M$ est un corps ; $P$ premier $\\iff A/P$ est intègre."
      },
      {
        "q": "Pourquoi un anneau euclidien est-il principal ?",
        "a": "Un idéal non nul $I$ est engendré par un $b \\in I \\setminus\\{0\\}$ de stathme minimal : le reste de la division d'un $a \\in I$ par $b$ est dans $I$ et de stathme plus petit, donc nul."
      },
      {
        "q": "Énoncer le critère d'Eisenstein pour $P = \\sum_{i=0}^n a_i X^i \\in \\mathbb{Z}[X]$.",
        "a": "S'il existe $p$ premier avec $p \\nmid a_n$, $p \\mid a_i$ pour $i < n$ et $p^2 \\nmid a_0$, alors $P$ est irréductible dans $\\mathbb{Q}[X]$."
      },
      {
        "q": "Quand $\\mathbb{K}[X]/(P)$ est-il un corps ?",
        "a": "Si et seulement si $P$ est irréductible dans $\\mathbb{K}[X]$ ; c'est alors un corps de dimension $\\deg P$ sur $\\mathbb{K}$."
      },
      {
        "q": "Donner un anneau factoriel non principal.",
        "a": "$\\mathbb{Z}[X]$ (l'idéal $(2, X)$ n'est pas principal), ou $\\mathbb{K}[X, Y]$ (l'idéal $(X, Y)$)."
      },
      {
        "q": "Lien entre premier et irréductible ?",
        "a": "Dans un anneau intègre, premier $\\implies$ irréductible ; la réciproque vaut dans les anneaux factoriels mais pas en général ($\\mathbb{Z}[i\\sqrt{5}]$)."
      }
    ]
  },
  "L3-BAN": {
    "title": "L3-BAN : Espaces vectoriels normés, complétude et espaces de Banach / Hilbert",
    "domain": "Analyse Fonctionnelle",
    "objectives": [
      "Définir les espaces de Banach et utiliser le critère des séries absolument convergentes.",
      "Démontrer que $\\mathcal{L}_c(E, F)$ est un espace de Banach dès que $F$ l'est.",
      "Définir les espaces de Hilbert et énoncer le théorème de projection sur un convexe fermé.",
      "Énoncer et appliquer le théorème de représentation de Riesz dans un espace de Hilbert.",
      "Connaître le théorème de Baire, ses conséquences (Banach-Steinhaus, application ouverte) et le théorème du point fixe de Picard."
    ],
    "keyPoints": [
      {
        "title": "1. Suites de Cauchy et espaces de Banach",
        "content": "• **Espace de Banach** : espace vectoriel normé **complet**, c'est-à-dire dans lequel toute suite de Cauchy converge.\n• **Exemples** :\n  1. Tout espace normé de dimension finie (équivalence des normes et complétude de $\\mathbb{R}^n$).\n  2. $(\\mathcal{C}([a ; b], \\mathbb{K}), \\|\\cdot\\|_\\infty)$, et plus généralement l'espace des fonctions bornées d'un ensemble dans un Banach, muni de la norme uniforme.\n  3. Les espaces $\\ell^p$ et $L^p(\\mu)$, $1 \\le p \\le \\infty$.\n• **Contre-exemples** : $(\\mathcal{C}([0 ; 1]), \\|\\cdot\\|_1)$ n'est pas complet (des fonctions continues peuvent approcher en moyenne une fonction en escalier) ; $(\\mathbb{R}[X], \\|\\cdot\\|_\\infty)$ avec $\\|P\\|_\\infty$ le max des modules des coefficients n'est pas complet : $P_n = \\sum_{k=0}^n \\frac{X^k}{2^k}$ est de Cauchy sans limite polynomiale.\n• Un sous-espace d'un Banach est complet si et seulement s'il est fermé."
      },
      {
        "title": "2. Critère des séries absolument convergentes",
        "content": "**Théorème.** Un espace normé $E$ est complet si et seulement si toute série absolument convergente ($\\sum \\|x_n\\| < +\\infty$) converge dans $E$.\n\n**Démonstration.**\n1. **($\\Rightarrow$)** Soit $S_n = \\sum_{k=0}^n x_k$. Pour $p < q$, $\\|S_q - S_p\\| \\le \\sum_{k=p+1}^q \\|x_k\\| \\le \\sum_{k > p} \\|x_k\\|$, reste d'une série convergente, donc $(S_n)$ est de Cauchy et converge.\n2. **($\\Leftarrow$)** Soit $(x_n)$ de Cauchy. On construit $\\varphi$ strictement croissante telle que $\\|x_p - x_q\\| \\le 2^{-k}$ pour $p, q \\ge \\varphi(k)$.\n3. La série $\\sum_k (x_{\\varphi(k+1)} - x_{\\varphi(k)})$ vérifie $\\sum_k \\|x_{\\varphi(k+1)} - x_{\\varphi(k)}\\| \\le \\sum_k 2^{-k} < +\\infty$ : elle converge par hypothèse.\n4. Ses sommes partielles valent $x_{\\varphi(n)} - x_{\\varphi(0)}$ : la suite extraite $(x_{\\varphi(n)})$ converge.\n5. Une suite de Cauchy ayant une valeur d'adhérence converge : $(x_n)$ converge. $\\square$\n\n**Application** : dans une algèbre de Banach (par exemple $\\mathcal{M}_n(\\mathbb{K})$ avec une norme subordonnée), $\\exp(A) = \\sum \\frac{A^k}{k!}$ converge, et si $\\|A\\| < 1$, $I - A$ est inversible d'inverse $\\sum_{k \\ge 0} A^k$."
      },
      {
        "title": "3. Démonstration : $\\mathcal{L}_c(E, F)$ est un Banach si $F$ l'est",
        "content": "**Théorème.** Soient $E$ un espace normé et $F$ un espace de Banach. L'espace $\\mathcal{L}_c(E, F)$ des applications linéaires continues, muni de la norme subordonnée, est un espace de Banach.\n\n**Démonstration.**\n1. **Limite simple.** Soit $(u_n)$ de Cauchy dans $\\mathcal{L}_c(E, F)$. Pour $x \\in E$, $\\|u_p(x) - u_q(x)\\| \\le \\|u_p - u_q\\| \\, \\|x\\|$ : la suite $(u_n(x))$ est de Cauchy dans $F$, donc converge vers un vecteur noté $u(x)$.\n2. **Linéarité.** Par passage à la limite dans $u_n(\\lambda x + y) = \\lambda u_n(x) + u_n(y)$, $u$ est linéaire.\n3. **Estimation uniforme.** Soit $\\varepsilon > 0$ et $N$ tel que $\\|u_p - u_q\\| \\le \\varepsilon$ pour $p, q \\ge N$. Pour tout $x$ et $p, q \\ge N$ : $\\|u_p(x) - u_q(x)\\| \\le \\varepsilon \\|x\\|$. En faisant $q \\to +\\infty$ (continuité de la norme) : $\\|u_p(x) - u(x)\\| \\le \\varepsilon \\|x\\|$ pour tout $p \\ge N$ et tout $x \\in E$.\n4. **Continuité de $u$.** L'étape 3 montre que $u_N - u$ est linéaire continue de norme $\\le \\varepsilon$ ; donc $u = u_N - (u_N - u)$ est continue.\n5. **Convergence en norme.** Pour $p \\ge N$, $\\|u_p - u\\| \\le \\varepsilon$ : $u_p \\to u$ dans $\\mathcal{L}_c(E, F)$. $\\square$\n\n**Corollaire.** Le dual topologique $E' = \\mathcal{L}_c(E, \\mathbb{K})$ d'un espace normé quelconque est un espace de Banach ($\\mathbb{K}$ est complet), même si $E$ ne l'est pas."
      },
      {
        "title": "4. Espaces de Hilbert et théorème de projection",
        "content": "• **Espace de Hilbert** : espace préhilbertien $(H, \\langle \\cdot, \\cdot \\rangle)$ complet pour la norme $\\|x\\| = \\sqrt{\\langle x, x \\rangle}$. Exemples : $\\mathbb{K}^n$, $\\ell^2$, $L^2(\\mu)$.\n• **Identité du parallélogramme** : $\\|x + y\\|^2 + \\|x - y\\|^2 = 2(\\|x\\|^2 + \\|y\\|^2)$ ; une norme provient d'un produit scalaire si et seulement si elle la vérifie.\n• **Projection sur un convexe fermé** : si $C \\subset H$ est convexe, fermé et non vide, pour tout $x \\in H$ il existe un unique $p_C(x) \\in C$ tel que $\\|x - p_C(x)\\| = d(x, C)$, caractérisé par\n$$\\forall y \\in C, \\quad \\text{Re}\\,\\langle x - p_C(x), y - p_C(x) \\rangle \\le 0$$\n(L'existence utilise le parallélogramme, qui rend de Cauchy toute suite minimisante, puis la complétude.)\n• **Sous-espace fermé** : si $F$ est un sous-espace vectoriel fermé, $p_F$ est linéaire, caractérisée par $x - p_F(x) \\in F^\\perp$, et $H = F \\oplus F^\\perp$. Si $(e_1, \\dots, e_n)$ est une base orthonormée de $F$ (dimension finie), $p_F(x) = \\sum \\langle x, e_i \\rangle e_i$.\n• **Densité** : un sous-espace $F$ est dense dans $H$ si et seulement si $F^\\perp = \\{0\\}$."
      },
      {
        "title": "5. Dual d'un Hilbert : théorème de Riesz",
        "content": "• **Dual topologique** $E'$ : formes linéaires continues sur $E$, normées par $\\|\\varphi\\| = \\sup_{\\|x\\| \\le 1} |\\varphi(x)|$ ; c'est un Banach (point 3).\n• **Théorème de représentation de Riesz** : soit $H$ un espace de Hilbert. Pour toute $\\varphi \\in H'$, il existe un unique $y \\in H$ tel que\n$$\\forall x \\in H, \\quad \\varphi(x) = \\langle x, y \\rangle, \\qquad \\text{et} \\quad \\|\\varphi\\| = \\|y\\|$$\n• **Idée de preuve** : si $\\varphi \\neq 0$, $\\text{Ker}\\,\\varphi$ est un hyperplan fermé ; on prend $z \\in (\\text{Ker}\\,\\varphi)^\\perp$ unitaire et l'on pose $y = \\overline{\\varphi(z)} \\, z$. Pour tout $x$, $x - \\frac{\\varphi(x)}{\\varphi(z)} z \\in \\text{Ker}\\,\\varphi$ est orthogonal à $z$, ce qui donne $\\varphi(x) = \\langle x, y \\rangle$.\n• **Bases hilbertiennes** : une famille orthonormée $(e_i)$ est une base hilbertienne si $\\text{Vect}(e_i)$ est dense ; alors $x = \\sum \\langle x, e_i \\rangle e_i$ et $\\|x\\|^2 = \\sum |\\langle x, e_i \\rangle|^2$ (Parseval)."
      },
      {
        "title": "6. Baire, Banach-Steinhaus et point fixe de Picard",
        "content": "• **Théorème de Baire** : dans un espace métrique **complet**, toute intersection dénombrable d'ouverts denses est dense ; de façon équivalente, une réunion dénombrable de fermés d'intérieur vide est d'intérieur vide.\n• **Banach-Steinhaus** : si $E$ est un **Banach**, $F$ un espace normé et $(T_i)_{i \\in I}$ une famille de $\\mathcal{L}_c(E, F)$ telle que $\\sup_i \\|T_i x\\| < +\\infty$ pour tout $x$, alors $\\sup_i \\|T_i\\| < +\\infty$.\n• **Application ouverte** : une application linéaire continue **surjective** entre deux Banach est ouverte ; si elle est bijective, son inverse est continu (isomorphisme de Banach).\n• **Point fixe de Picard** : soit $(X, d)$ complet non vide et $f : X \\to X$ **$k$-contractante** avec $k \\in [0 ; 1[$. Alors $f$ a un unique point fixe $x^{\\ast}$ et, pour tout $x_0$, la suite $x_{n+1} = f(x_n)$ converge vers $x^{\\ast}$ avec\n$$d(x_n, x^{\\ast}) \\le \\frac{k^n}{1 - k} \\, d(x_0, x_1)$$\n(La suite est de Cauchy car $d(x_n, x_{n+1}) \\le k^n d(x_0, x_1)$ ; sa limite est fixe par continuité de $f$ ; l'unicité vient de $d(a, b) = d(f(a), f(b)) \\le k \\, d(a, b)$.) C'est l'outil de base du théorème de Cauchy-Lipschitz."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une projection orthogonale dans un espace de fonctions",
        "example": "Dans $H = L^2([-1 ; 1])$ muni de $\\langle f, g \\rangle = \\int_{-1}^1 fg$, projeter $f(t) = t^2$ sur $F = \\text{Vect}(1, t)$.",
        "steps": [
          "**Étape 1 (Base orthogonale)** : $\\langle 1, t \\rangle = \\int_{-1}^1 t \\, dt = 0$ : $(e_0, e_1) = (1, t)$ est une base orthogonale de $F$ (fermé, car de dimension finie).",
          "**Étape 2 (Normes)** : $\\|e_0\\|^2 = \\int_{-1}^1 1 \\, dt = 2$ et $\\|e_1\\|^2 = \\int_{-1}^1 t^2 \\, dt = \\frac{2}{3}$.",
          "**Étape 3 (Coefficients)** : $p_F(f) = \\frac{\\langle f, e_0 \\rangle}{\\|e_0\\|^2} e_0 + \\frac{\\langle f, e_1 \\rangle}{\\|e_1\\|^2} e_1$ avec $\\langle f, e_0 \\rangle = \\int_{-1}^1 t^2 \\, dt = \\frac{2}{3}$ et $\\langle f, e_1 \\rangle = \\int_{-1}^1 t^3 \\, dt = 0$ (imparité).",
          "**Conclusion** : $p_F(f) = \\frac{1}{3}$. Vérification : $f - \\frac{1}{3}$ est orthogonale à $1$ ($\\int_{-1}^1 (t^2 - \\frac{1}{3}) \\, dt = \\frac{2}{3} - \\frac{2}{3} = 0$) et à $t$ (imparité). La distance vaut $\\|t^2 - \\frac{1}{3}\\| = \\sqrt{\\frac{8}{45}}$."
        ]
      },
      {
        "title": "Méthode : Résoudre une équation par le point fixe de Picard",
        "example": "Montrer que l'équation $x = \\frac{1}{2}\\cos x$ a une unique solution réelle et l'approcher à $10^{-3}$ près.",
        "steps": [
          "**Étape 1 (Cadre)** : $X = \\mathbb{R}$ est complet et $f(x) = \\frac{1}{2}\\cos x$ envoie $\\mathbb{R}$ dans $\\mathbb{R}$.",
          "**Étape 2 (Contraction)** : $|f'(x)| = \\frac{1}{2}|\\sin x| \\le \\frac{1}{2}$ ; par l'inégalité des accroissements finis, $f$ est $\\frac{1}{2}$-contractante.",
          "**Étape 3 (Itérations)** : depuis $x_0 = 0$ : $x_1 = 0{,}5$, $x_2 \\approx 0{,}4388$, $x_3 \\approx 0{,}4526$, $x_4 \\approx 0{,}4496$. L'estimation $|x_n - x^{\\ast}| \\le \\frac{k^n}{1-k}|x_1 - x_0| = \\left(\\tfrac{1}{2}\\right)^n$ garantit une erreur $< 10^{-3}$ dès $n = 10$.",
          "**Conclusion** : l'unique solution est $x^{\\ast} \\approx 0{,}4502$. Remarque : l'estimation a priori est pessimiste ; l'estimation a posteriori $|x_n - x^{\\ast}| \\le \\frac{k}{1-k}|x_n - x_{n-1}|$ permet de s'arrêter plus tôt."
        ]
      }
    ],
    "traps": [
      "Le théorème de projection exige un sous-espace fermé : dans $\\ell^2$, le sous-espace $c_{00}$ des suites à support fini est dense, donc $c_{00}^\\perp = \\{0\\}$, et $\\ell^2 \\neq c_{00} \\oplus c_{00}^\\perp$.",
      "L'identité du parallélogramme caractérise les normes hilbertiennes : sur $\\mathbb{R}^2$, $\\|\\cdot\\|_1$ ne la vérifie pas ($x = (1, 0)$, $y = (0, 1)$ : $4 + 4 \\neq 2(1 + 1)$).",
      "La complétude dépend de la norme : $\\mathcal{C}([0 ; 1])$ est complet pour $\\|\\cdot\\|_\\infty$ mais pas pour $\\|\\cdot\\|_1$.",
      "Pour Picard, « $|f(x) - f(y)| < |x - y|$ pour $x \\neq y$ » ne suffit pas : $f(x) = x + \\frac{1}{x}$ envoie $[1 ; +\\infty[$ dans lui-même, vérifie cette inégalité stricte, mais n'a aucun point fixe. Il faut une constante $k < 1$ uniforme.",
      "Banach-Steinhaus suppose l'espace de départ complet ; sans complétude, une famille simplement bornée peut ne pas être uniformément bornée."
    ],
    "flashcards": [
      {
        "q": "Énoncer le critère de complétude par les séries.",
        "a": "Un espace normé est complet si et seulement si toute série absolument convergente y converge."
      },
      {
        "q": "Sous quelle hypothèse $\\mathcal{L}_c(E, F)$ est-il un Banach ?",
        "a": "Il suffit que $F$ soit un Banach ($E$ quelconque) ; en particulier le dual $E'$ est toujours un Banach."
      },
      {
        "q": "Énoncer le théorème de représentation de Riesz dans un Hilbert.",
        "a": "Pour toute forme linéaire continue $\\varphi$ sur $H$, il existe un unique $y \\in H$ tel que $\\varphi(x) = \\langle x, y \\rangle$ pour tout $x$, et $\\|\\varphi\\| = \\|y\\|$."
      },
      {
        "q": "Caractérisation du projeté sur un convexe fermé non vide ?",
        "a": "$p = p_C(x)$ est l'unique point de $C$ tel que $\\text{Re}\\,\\langle x - p, y - p \\rangle \\le 0$ pour tout $y \\in C$."
      },
      {
        "q": "Énoncer le théorème du point fixe de Picard.",
        "a": "Toute application $k$-contractante ($k < 1$) d'un espace métrique complet non vide dans lui-même a un unique point fixe, limite de toute suite $x_{n+1} = f(x_n)$."
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
      "Distinguer convergence simple, uniforme et normale pour les suites et séries de fonctions.",
      "Démontrer la continuité de la limite uniforme d'une suite de fonctions continues.",
      "Énoncer les théorèmes de double limite, d'intégration et de dérivation terme à terme.",
      "Utiliser le critère des séries alternées pour obtenir une convergence uniforme non normale.",
      "Connaître le théorème de Dini et le théorème d'approximation de Weierstrass."
    ],
    "keyPoints": [
      {
        "title": "1. Convergence simple et uniforme des suites de fonctions",
        "content": "Soit $(f_n)$ une suite de fonctions d'un ensemble $A$ dans $\\mathbb{K}$ (ou dans un espace normé).\n• **Convergence simple** vers $f$ : $\\forall x \\in A, \\; f_n(x) \\to f(x)$.\n• **Convergence uniforme** vers $f$ : $\\|f_n - f\\|_{\\infty, A} = \\sup_{x \\in A} |f_n(x) - f(x)| \\to 0$. L'entier $N$ du « $\\forall \\varepsilon, \\exists N$ » ne dépend plus de $x$.\n• Uniforme $\\implies$ simple ; la limite uniforme est nécessairement la limite simple.\n• **Critère de Cauchy uniforme** : $(f_n)$ converge uniformément sur $A$ si et seulement si $\\forall \\varepsilon > 0, \\exists N, \\forall p, q \\ge N, \\; \\|f_p - f_q\\|_\\infty \\le \\varepsilon$ (complétude de l'espace des fonctions bornées).\n• **Pour nier la convergence uniforme** : exhiber $x_n \\in A$ tels que $|f_n(x_n) - f(x_n)|$ ne tende pas vers $0$."
      },
      {
        "title": "2. Démonstration : continuité de la limite uniforme",
        "content": "**Théorème.** Soit $A$ une partie d'un espace métrique, $(f_n)$ une suite de fonctions de $A$ dans $\\mathbb{K}$ convergeant uniformément sur $A$ vers $f$. Si chaque $f_n$ est continue en $a \\in A$, alors $f$ est continue en $a$. En particulier une limite uniforme de fonctions continues est continue.\n\n**Démonstration.**\n1. Soit $\\varepsilon > 0$. Par convergence uniforme, il existe $N$ tel que $\\|f_N - f\\|_{\\infty, A} < \\frac{\\varepsilon}{3}$.\n2. $f_N$ étant continue en $a$, il existe $\\eta > 0$ tel que $x \\in A$, $d(x, a) < \\eta \\implies |f_N(x) - f_N(a)| < \\frac{\\varepsilon}{3}$.\n3. Pour $x \\in A$ avec $d(x, a) < \\eta$ :\n$$|f(x) - f(a)| \\le |f(x) - f_N(x)| + |f_N(x) - f_N(a)| + |f_N(a) - f(a)| < \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} = \\varepsilon$$\n4. Donc $f$ est continue en $a$. $\\square$\n\n**Remarques.**\n- Le premier et le troisième termes sont contrôlés grâce à l'uniformité : le même $N$ convient en $x$ et en $a$. Avec une simple convergence, l'argument échoue.\n- La continuité étant locale, il suffit d'avoir la convergence uniforme **au voisinage de chaque point**, par exemple sur tout segment d'un intervalle $I$."
      },
      {
        "title": "3. Séries de fonctions : convergence uniforme et normale",
        "content": "Soit $\\sum u_n$ une série de fonctions sur $A$, de sommes partielles $S_n = \\sum_{k=0}^n u_k$.\n• **Convergence uniforme** : $(S_n)$ converge uniformément, c'est-à-dire que le reste $R_n = \\sum_{k > n} u_k$ vérifie $\\|R_n\\|_{\\infty} \\to 0$.\n• **Convergence normale** : $\\sum \\|u_n\\|_{\\infty, A} < +\\infty$. En pratique, on cherche $\\alpha_n$ indépendant de $x$ avec $|u_n(x)| \\le \\alpha_n$ et $\\sum \\alpha_n$ convergente.\n• **Hiérarchie** : normale $\\implies$ uniforme $\\implies$ simple, et normale $\\implies$ absolue en tout point.\n• **Critère des séries alternées** : si pour tout $x$, $u_n(x) = (-1)^n a_n(x)$ avec $(a_n(x))$ décroissante de limite nulle, alors $|R_n(x)| \\le a_{n+1}(x)$. Si de plus $\\sup_x a_{n+1}(x) \\to 0$, la convergence est uniforme.\n• **Exemple** : $\\sum_{n \\ge 1} \\frac{(-1)^n}{n + x}$ converge uniformément sur $[0 ; +\\infty[$ ($|R_n(x)| \\le \\frac{1}{n+1}$), mais pas normalement ($\\|u_n\\|_\\infty = \\frac{1}{n}$)."
      },
      {
        "title": "4. Double limite, intégration et dérivation terme à terme",
        "content": "• **Continuité** : si les $u_n$ sont continues sur $I$ et si $\\sum u_n$ converge uniformément sur tout segment de $I$, la somme est continue sur $I$.\n• **Double limite** : soit $a$ adhérent à $A$ (éventuellement $a = \\pm\\infty$). Si $\\sum u_n$ converge uniformément sur $A$ et si $u_n(x) \\to \\ell_n$ quand $x \\to a$ pour tout $n$, alors $\\sum \\ell_n$ converge et\n$$\\lim_{x \\to a} \\sum_{n=0}^\\infty u_n(x) = \\sum_{n=0}^\\infty \\ell_n$$\n• **Intégration sur un segment** : si les $u_n$ sont continues sur $[a ; b]$ et $\\sum u_n$ converge uniformément sur $[a ; b]$, alors $\\int_a^b \\sum u_n = \\sum \\int_a^b u_n$.\n• **Dérivation** : soit $I$ un intervalle. Si (1) chaque $u_n$ est de classe $\\mathcal{C}^1$ sur $I$, (2) $\\sum u_n(x_0)$ converge pour un $x_0 \\in I$, (3) $\\sum u_n'$ converge uniformément sur tout segment de $I$, alors $\\sum u_n$ converge uniformément sur tout segment de $I$, sa somme $S$ est $\\mathcal{C}^1$ et $S' = \\sum u_n'$.\n• Sur un intervalle non borné, l'intégration terme à terme relève plutôt de la convergence dominée ou de la convergence monotone (cours de mesure)."
      },
      {
        "title": "5. Théorème de Dini et approximation de Weierstrass",
        "content": "• **Théorème de Dini** : soit $K$ un compact et $(f_n)$ une suite de fonctions **continues** $K \\to \\mathbb{R}$ convergeant simplement vers une fonction **continue** $f$. Si pour tout $x$, la suite $(f_n(x))$ est **monotone** (de même sens pour tous les $x$), alors la convergence est uniforme sur $K$.\n• **Théorème d'approximation de Weierstrass** : toute fonction continue $f : [a ; b] \\to \\mathbb{K}$ est limite uniforme sur $[a ; b]$ d'une suite de fonctions polynomiales. Autrement dit, les polynômes sont denses dans $(\\mathcal{C}([a ; b]), \\|\\cdot\\|_\\infty)$.\n• Une preuve constructive utilise les **polynômes de Bernstein** sur $[0 ; 1]$ : $B_n(f)(x) = \\sum_{k=0}^n f\\left(\\frac{k}{n}\\right)\\binom{n}{k} x^k (1-x)^{n-k}$, qui convergent uniformément vers $f$ (continuité uniforme de $f$ et inégalité de Bienaymé-Tchebychev).\n• **Application** : si $f$ est continue sur $[0 ; 1]$ et $\\int_0^1 f(t) t^n \\, dt = 0$ pour tout $n$, alors $f = 0$ (approcher $f$ par des polynômes $P_k$ : $\\int f^2 = \\lim \\int f P_k = 0$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Établir la régularité $\\mathcal{C}^1$ d'une somme de série",
        "example": "Montrer que $S(x) = \\sum_{n=1}^\\infty \\frac{\\sin(nx)}{n^3}$ est de classe $\\mathcal{C}^1$ sur $\\mathbb{R}$ et calculer $S'$.",
        "steps": [
          "**Étape 1 (Convergence normale de la série)** : $|u_n(x)| \\le \\frac{1}{n^3}$ et $\\sum \\frac{1}{n^3}$ converge : $\\sum u_n$ converge normalement, donc uniformément, sur $\\mathbb{R}$ ; en particulier en $x_0 = 0$.",
          "**Étape 2 (Régularité des termes)** : chaque $u_n$ est $\\mathcal{C}^1$ avec $u_n'(x) = \\frac{\\cos(nx)}{n^2}$.",
          "**Étape 3 (Série dérivée)** : $\\|u_n'\\|_\\infty = \\frac{1}{n^2}$ et $\\sum \\frac{1}{n^2}$ converge : $\\sum u_n'$ converge normalement sur $\\mathbb{R}$.",
          "**Conclusion** : par le théorème de dérivation terme à terme, $S$ est $\\mathcal{C}^1$ sur $\\mathbb{R}$ et $S'(x) = \\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}$. (Le même argument ne donne pas $\\mathcal{C}^2$ : $\\sum \\frac{\\sin(nx)}{n}$ ne converge pas normalement.)"
        ]
      },
      {
        "title": "Méthode : Étudier la convergence uniforme d'une suite de fonctions",
        "example": "Étudier la convergence de $f_n(x) = n x e^{-nx}$ sur $[0 ; +\\infty[$, puis sur $[a ; +\\infty[$ avec $a > 0$.",
        "steps": [
          "**Étape 1 (Limite simple)** : $f_n(0) = 0$ ; pour $x > 0$, $n x e^{-nx} \\to 0$ par croissances comparées. La limite simple est $f = 0$.",
          "**Étape 2 (Calcul du sup)** : $f_n'(x) = n e^{-nx}(1 - nx)$ : $f_n$ croît sur $[0 ; \\frac{1}{n}]$ puis décroît, et $\\|f_n\\|_{\\infty, [0 ; +\\infty[} = f_n\\left(\\frac{1}{n}\\right) = e^{-1}$, qui ne tend pas vers $0$ : pas de convergence uniforme sur $[0 ; +\\infty[$.",
          "**Étape 3 (Sur $[a ; +\\infty[$)** : pour $n \\ge \\frac{1}{a}$, on a $\\frac{1}{n} \\le a$, donc $f_n$ est décroissante sur $[a ; +\\infty[$ et $\\|f_n\\|_{\\infty, [a ; +\\infty[} = n a e^{-na} \\to 0$.",
          "**Conclusion** : convergence uniforme sur tout $[a ; +\\infty[$ ($a > 0$), mais pas sur $[0 ; +\\infty[$, bien que la limite soit continue : la continuité de la limite n'entraîne pas la convergence uniforme."
        ]
      }
    ],
    "traps": [
      "Pour dériver terme à terme, c'est la convergence uniforme de la série des dérivées $\\sum u_n'$ qui est requise (plus la convergence en un point) : $\\sum \\frac{\\sin(nx)}{n^2}$ converge normalement, mais $\\sum \\frac{\\cos(nx)}{n}$ diverge en $x = 0$.",
      "La convergence simple ne préserve pas la continuité : $x \\mapsto x^n$ sur $[0 ; 1]$ a une limite discontinue en $1$.",
      "La convergence simple ne permet pas d'intervertir limite et intégrale : la fonction triangle de sommet $(\\frac{1}{n}, 2n)$ et de base $[0 ; \\frac{2}{n}]$ tend simplement vers $0$ sur $[0 ; 1]$, mais son intégrale vaut $2$ pour tout $n$.",
      "Uniforme sur tout segment ne signifie pas uniforme sur l'intervalle entier : $n x e^{-nx}$ converge uniformément sur chaque $[a ; +\\infty[$, $a > 0$, mais pas sur $]0 ; +\\infty[$.",
      "Convergence uniforme n'implique pas convergence normale : $\\sum \\frac{(-1)^n}{n + x}$ sur $[0 ; +\\infty[$."
    ],
    "flashcards": [
      {
        "q": "Quelle condition sur $\\sum u_n'$ assure que $(\\sum u_n)' = \\sum u_n'$ ?",
        "a": "Les $u_n$ sont $\\mathcal{C}^1$, $\\sum u_n$ converge en un point, et $\\sum u_n'$ converge uniformément sur tout segment de l'intervalle."
      },
      {
        "q": "Pourquoi une limite uniforme de fonctions continues est-elle continue ?",
        "a": "Argument en $\\varepsilon/3$ : $|f(x) - f(a)| \\le |f - f_N|(x) + |f_N(x) - f_N(a)| + |f_N - f|(a)$, avec $N$ choisi indépendamment de $x$."
      },
      {
        "q": "Énoncer le théorème d'approximation de Weierstrass.",
        "a": "Toute fonction continue sur un segment $[a ; b]$ est limite uniforme d'une suite de fonctions polynomiales."
      },
      {
        "q": "Énoncer le théorème de Dini.",
        "a": "Sur un compact, une suite monotone de fonctions continues convergeant simplement vers une fonction continue converge uniformément."
      },
      {
        "q": "Donner une série de fonctions uniformément mais non normalement convergente.",
        "a": "$\\sum_{n \\ge 1} \\frac{(-1)^n}{n + x}$ sur $[0 ; +\\infty[$ : reste majoré par $\\frac{1}{n+1}$, mais $\\|u_n\\|_\\infty = \\frac{1}{n}$."
      },
      {
        "q": "Comment montrer qu'une suite ne converge pas uniformément ?",
        "a": "Trouver $x_n$ tels que $|f_n(x_n) - f(x_n)|$ ne tende pas vers $0$, par exemple en calculant le sup par une étude de fonction."
      }
    ]
  },
  "L3-SER": {
    "title": "L3-SER : Séries entières et rayon de convergence",
    "domain": "Analyse Complexe",
    "objectives": [
      "Énoncer et démontrer le lemme d'Abel, et définir le rayon de convergence d'une série entière $\\sum a_n z^n$.",
      "Calculer un rayon de convergence par comparaison, par la règle de d'Alembert ou par la formule de Hadamard.",
      "Connaître la régularité de la somme sur le disque ouvert de convergence et les développements usuels.",
      "Énoncer le théorème de la limite radiale d'Abel pour le comportement au bord."
    ],
    "keyPoints": [
      {
        "title": "1. Lemme d'Abel et rayon de convergence",
        "content": "• **Série entière** : série de fonctions $\\sum_{n \\ge 0} a_n z^n$ avec $(a_n) \\in \\mathbb{C}^{\\mathbb{N}}$ et $z \\in \\mathbb{C}$.\n• **Lemme d'Abel** : s'il existe $z_0 \\neq 0$ tel que $(a_n z_0^n)$ soit **bornée**, alors pour tout $r \\in [0 ; |z_0|[$, la série $\\sum a_n z^n$ converge **normalement** sur le disque fermé $\\bar{D}(0, r)$ ; en particulier elle converge absolument pour $|z| < |z_0|$.\n• **Rayon de convergence** :\n$$R = \\sup \\{ r \\ge 0 \\mid (a_n r^n) \\text{ est bornée} \\} \\in [0 ; +\\infty]$$\n  1. Pour $|z| < R$ : convergence absolue ; convergence normale sur tout disque fermé $\\bar{D}(0, r)$, $r < R$.\n  2. Pour $|z| > R$ : $(a_n z^n)$ n'est pas bornée, donc la série diverge grossièrement.\n  3. Pour $|z| = R$ : tout peut arriver.\n• Le disque ouvert $D(0, R)$ est le **disque ouvert de convergence**."
      },
      {
        "title": "2. Démonstration du lemme d'Abel et des propriétés du rayon",
        "content": "**Lemme d'Abel.** Supposons $|a_n z_0^n| \\le M$ pour tout $n$, avec $z_0 \\neq 0$, et soit $0 \\le r < |z_0|$.\n\n**Démonstration.**\n1. Pour $|z| \\le r$ : $|a_n z^n| = |a_n z_0^n| \\left|\\frac{z}{z_0}\\right|^n \\le M \\left(\\frac{r}{|z_0|}\\right)^n$.\n2. Le majorant $M q^n$, avec $q = \\frac{r}{|z_0|} \\in [0 ; 1[$, est indépendant de $z$ et terme général d'une série géométrique convergente.\n3. Donc $\\sup_{|z| \\le r} |a_n z^n| \\le M q^n$ : la série converge normalement sur $\\bar{D}(0, r)$. $\\square$\n\n**Propriétés du rayon.**\n1. **L'ensemble $\\mathcal{E} = \\{r \\ge 0 \\mid (a_n r^n) \\text{ bornée}\\}$ est un intervalle contenant $0$** : si $r \\in \\mathcal{E}$ et $0 \\le r' \\le r$, $|a_n| r'^n \\le |a_n| r^n$, donc $r' \\in \\mathcal{E}$.\n2. **Si $|z| < R$** : par définition de la borne supérieure, il existe $r \\in \\mathcal{E}$ avec $|z| < r$ ; le lemme d'Abel appliqué à $z_0 = r$ donne la convergence absolue en $z$ (et normale sur $\\bar{D}(0, \\rho)$ pour tout $\\rho < R$, en choisissant $\\rho < r < R$).\n3. **Si $|z| > R$** : $|z| \\notin \\mathcal{E}$, donc $(a_n z^n)$ n'est pas bornée, ne tend pas vers $0$, et la série diverge grossièrement. $\\square$"
      },
      {
        "title": "3. Calcul du rayon de convergence",
        "content": "• **Comparaison** : si $|a_n| \\le |b_n|$ à partir d'un certain rang, alors $R_a \\ge R_b$. Si $a_n = O(b_n)$, $R_a \\ge R_b$ ; si $a_n \\sim b_n$, $R_a = R_b$.\n• **Règle de d'Alembert** : si $a_n \\neq 0$ à partir d'un certain rang et $\\left|\\frac{a_{n+1}}{a_n}\\right| \\to \\ell \\in [0 ; +\\infty]$, alors $R = \\frac{1}{\\ell}$ (conventions $\\frac{1}{0} = +\\infty$, $\\frac{1}{+\\infty} = 0$).\n• **Formule de Hadamard** : $\\frac{1}{R} = \\limsup_{n \\to \\infty} |a_n|^{1/n}$ (toujours valable, mêmes conventions).\n• **Invariances** : $\\sum a_n z^n$, $\\sum n a_n z^{n-1}$ (série dérivée), $\\sum \\frac{a_n}{n+1} z^{n+1}$ (primitive) et $\\sum P(n) a_n z^n$ ($P$ polynôme non nul) ont le même rayon.\n• **Opérations** : $R(\\sum (a_n + b_n) z^n) \\ge \\min(R_a, R_b)$, avec égalité si $R_a \\neq R_b$ ; le produit de Cauchy a un rayon $\\ge \\min(R_a, R_b)$.\n• **Exemples** : $\\sum \\frac{z^n}{n!}$ : $R = +\\infty$ ; $\\sum n! z^n$ : $R = 0$ ; $\\sum z^n$, $\\sum \\frac{z^n}{n}$, $\\sum \\frac{z^n}{n^2}$ : $R = 1$."
      },
      {
        "title": "4. Régularité de la somme et développements usuels",
        "content": "Soit $f(z) = \\sum a_n z^n$ de rayon $R > 0$.\n• **Continuité** : $f$ est continue sur $D(0, R)$ (convergence normale sur tout disque fermé de rayon $< R$).\n• **Variable réelle** : $f$ est de classe $\\mathcal{C}^\\infty$ sur $]-R ; R[$, se dérive terme à terme (même rayon), et $a_n = \\frac{f^{(n)}(0)}{n!}$ : les coefficients sont déterminés par la somme (**unicité du développement**). On peut aussi intégrer terme à terme sur $[0 ; x] \\subset ]-R ; R[$.\n• **Variable complexe** : $f$ est holomorphe sur $D(0, R)$, de dérivée $\\sum n a_n z^{n-1}$.\n• **Développements usuels** (en variable réelle) :\n  1. $e^x = \\sum \\frac{x^n}{n!}$, $\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$, $\\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ ($R = +\\infty$) ;\n  2. $\\frac{1}{1-x} = \\sum x^n$, $\\ln(1 + x) = \\sum_{n \\ge 1} \\frac{(-1)^{n-1} x^n}{n}$, $\\arctan x = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$ ($R = 1$) ;\n  3. $(1 + x)^\\alpha = \\sum \\binom{\\alpha}{n} x^n$ ($R = 1$ si $\\alpha \\notin \\mathbb{N}$).\n• **Attention** : une fonction $\\mathcal{C}^\\infty$ n'est pas toujours développable en série entière : $x \\mapsto e^{-1/x^2}$ (prolongée par $0$) a toutes ses dérivées nulles en $0$."
      },
      {
        "title": "5. Comportement au bord : théorème radial d'Abel",
        "content": "• **Sur le cercle $|z| = R$** : tous les comportements sont possibles : $\\sum z^n$ diverge en tout point du cercle unité, $\\sum \\frac{z^n}{n^2}$ converge (normalement) sur tout le disque fermé, $\\sum \\frac{z^n}{n}$ diverge en $z = 1$ et converge en $z = -1$.\n• **Théorème de la limite radiale d'Abel** : soit $\\sum a_n x^n$ une série entière de rayon $R \\in ]0 ; +\\infty[$. Si $\\sum a_n R^n$ converge, alors $x \\mapsto \\sum a_n x^n$ est définie et continue sur $[0 ; R]$, et\n$$\\lim_{x \\to R^-} \\sum_{n=0}^\\infty a_n x^n = \\sum_{n=0}^\\infty a_n R^n$$\n• Idée de preuve (cas $R = 1$) : transformation d'Abel ; en notant $\\rho_n = \\sum_{k > n} a_k$, on a pour $x \\in [0 ; 1[$ : $\\sum a_n - \\sum a_n x^n = \\sum (1 - x^n) a_n$, que l'on réécrit à l'aide des restes $\\rho_n$, petits pour $n$ grand."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la somme d'une série numérique par le théorème radial d'Abel",
        "example": "Calculer $\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\dots$",
        "steps": [
          "**Étape 1 (Série entière associée)** : $f(x) = \\sum_{n \\ge 1} \\frac{(-1)^{n-1}}{n} x^n$ ; $\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{n}{n+1} \\to 1$, donc $R = 1$.",
          "**Étape 2 (Somme sur $]-1 ; 1[$)** : par dérivation terme à terme, $f'(x) = \\sum_{n \\ge 1} (-x)^{n-1} = \\frac{1}{1+x}$, et $f(0) = 0$, donc $f(x) = \\ln(1 + x)$.",
          "**Étape 3 (Convergence au bord)** : en $x = 1$, $\\sum \\frac{(-1)^{n-1}}{n}$ converge par le critère des séries alternées ($\\frac{1}{n}$ décroît vers $0$).",
          "**Conclusion** : par le théorème radial d'Abel, $\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n} = \\lim_{x \\to 1^-} \\ln(1 + x) = \\ln 2$."
        ]
      },
      {
        "title": "Méthode : Déterminer un rayon de convergence (cas standard et cas lacunaire)",
        "example": "Déterminer les rayons de $\\sum_{n \\ge 1} \\frac{n!}{n^n} z^n$ et de $\\sum_{n \\ge 0} 2^n z^{2n}$.",
        "steps": [
          "**Étape 1 (D'Alembert)** : pour $a_n = \\frac{n!}{n^n}$, $\\frac{a_{n+1}}{a_n} = \\frac{(n+1)! \\, n^n}{(n+1)^{n+1} n!} = \\left(\\frac{n}{n+1}\\right)^n = \\left(1 + \\frac{1}{n}\\right)^{-n} \\to e^{-1}$.",
          "**Étape 2 (Conclusion du premier cas)** : $R = e$.",
          "**Étape 3 (Série lacunaire)** : les coefficients d'indice impair sont nuls, d'Alembert sur $(a_n)$ ne s'applique pas. On pose $u = z^2$ : la série $\\sum 2^n u^n$ a pour rayon $\\frac{1}{2}$ en $u$ ; elle converge si $|z|^2 < \\frac{1}{2}$ et diverge grossièrement si $|z|^2 > \\frac{1}{2}$.",
          "**Conclusion** : le second rayon vaut $\\frac{1}{\\sqrt{2}}$. On peut aussi appliquer la règle de d'Alembert pour les séries numériques à $u_n = 2^n |z|^{2n}$ : $\\frac{u_{n+1}}{u_n} = 2|z|^2$."
        ]
      }
    ],
    "traps": [
      "La règle de d'Alembert sur $\\frac{a_{n+1}}{a_n}$ suppose les coefficients non nuls à partir d'un certain rang : pour $\\sum a_n z^{2n}$, poser $u = z^2$ ou raisonner sur la série numérique.",
      "La réciproque du théorème radial d'Abel est fausse : $\\sum (-1)^n x^n = \\frac{1}{1+x} \\to \\frac{1}{2}$ quand $x \\to 1^-$, mais $\\sum (-1)^n$ diverge.",
      "La dérivation conserve le rayon mais pas le comportement au bord : $\\sum \\frac{z^n}{n^2}$ converge pour $|z| = 1$, sa dérivée $\\sum \\frac{z^{n-1}}{n}$ diverge en $z = 1$.",
      "Une fonction de classe $\\mathcal{C}^\\infty$ n'est pas toujours développable en série entière : $e^{-1/x^2}$ a une série de Taylor nulle en $0$ sans être nulle.",
      "Le rayon d'une somme peut dépasser le minimum des rayons quand ceux-ci sont égaux : $\\sum z^n$ et $\\sum (-z^n)$ ont pour rayon $1$, leur somme est nulle, de rayon $+\\infty$."
    ],
    "flashcards": [
      {
        "q": "Énoncer le lemme d'Abel.",
        "a": "Si $(a_n z_0^n)$ est bornée, alors $\\sum a_n z^n$ converge normalement sur tout disque fermé $\\bar{D}(0, r)$ avec $r < |z_0|$."
      },
      {
        "q": "Énoncer la formule de Hadamard.",
        "a": "$\\frac{1}{R} = \\limsup_{n \\to \\infty} |a_n|^{1/n}$."
      },
      {
        "q": "Comment se comporte la série au-delà du rayon ?",
        "a": "Pour $|z| > R$, $(a_n z^n)$ n'est pas bornée : divergence grossière."
      },
      {
        "q": "Énoncer le théorème radial d'Abel.",
        "a": "Si $\\sum a_n R^n$ converge ($0 < R < +\\infty$ le rayon), alors $\\lim_{x \\to R^-} \\sum a_n x^n = \\sum a_n R^n$."
      },
      {
        "q": "Lien entre coefficients et dérivées de la somme ?",
        "a": "$a_n = \\frac{f^{(n)}(0)}{n!}$ : le développement en série entière est unique."
      },
      {
        "q": "Rayon de $\\sum \\frac{n!}{n^n} z^n$ ?",
        "a": "$R = e$, car $\\frac{a_{n+1}}{a_n} = \\left(1 + \\frac{1}{n}\\right)^{-n} \\to e^{-1}$."
      }
    ]
  },
  "L3-FOU": {
    "title": "L3-FOU : Séries de Fourier, égalité de Parseval et convergence ponctuelle",
    "domain": "Analyse Harmonique",
    "objectives": [
      "Calculer les coefficients de Fourier réels et complexes d'une fonction périodique.",
      "Démontrer l'inégalité de Bessel et l'égalité de Parseval à partir de la densité des polynômes trigonométriques.",
      "Énoncer avec ses hypothèses exactes le théorème de Dirichlet et le théorème de convergence normale.",
      "Énoncer le théorème de Fejér et ses conséquences sur la densité des polynômes trigonométriques.",
      "Calculer des sommes de séries numériques à l'aide de Dirichlet et de Parseval."
    ],
    "keyPoints": [
      {
        "title": "1. Coefficients et séries de Fourier",
        "content": "Soit $f : \\mathbb{R} \\to \\mathbb{C}$ une fonction $T$-périodique, continue par morceaux (ou intégrable sur une période), et $\\omega = \\frac{2\\pi}{T}$.\n• **Coefficients exponentiels** : $c_n(f) = \\frac{1}{T} \\int_0^T f(t) e^{-in\\omega t} \\, dt$, $n \\in \\mathbb{Z}$.\n• **Coefficients trigonométriques** : $a_0(f) = \\frac{1}{T}\\int_0^T f$, et pour $n \\ge 1$, $a_n(f) = \\frac{2}{T}\\int_0^T f(t)\\cos(n\\omega t) \\, dt$, $b_n(f) = \\frac{2}{T}\\int_0^T f(t) \\sin(n\\omega t) \\, dt$. Relations : $c_0 = a_0$, $c_n = \\frac{a_n - ib_n}{2}$, $c_{-n} = \\frac{a_n + ib_n}{2}$.\n• **Sommes partielles** : $S_N(f)(t) = \\sum_{n=-N}^N c_n(f) e^{in\\omega t} = a_0 + \\sum_{n=1}^N (a_n \\cos(n\\omega t) + b_n \\sin(n\\omega t))$.\n• **Propriétés** : $|c_n(f)| \\le \\frac{1}{T}\\int_0^T |f|$ ; si $f$ est paire, $b_n = 0$ ; si $f$ est impaire, $a_n = 0$.\n• **Riemann-Lebesgue** : $c_n(f) \\to 0$ quand $|n| \\to \\infty$.\n• **Dérivation** : si $f$ est continue et $\\mathcal{C}^1$ par morceaux, $c_n(f') = in\\omega \\, c_n(f)$."
      },
      {
        "title": "2. Convergence ponctuelle et uniforme : Dirichlet",
        "content": "• **Fonction $\\mathcal{C}^1$ par morceaux** : il existe une subdivision $0 = t_0 < t_1 < \\dots < t_p = T$ telle que, sur chaque $]t_{j} ; t_{j+1}[$, $f$ soit de classe $\\mathcal{C}^1$ et que $f$ et $f'$ s'y prolongent par continuité aux bornes. En particulier $f$ admet des limites à gauche et à droite $f(t^-)$, $f(t^+)$ en tout point.\n• **Noyau de Dirichlet** ($T = 2\\pi$) : $D_N(t) = \\sum_{n=-N}^N e^{int} = \\frac{\\sin\\left((N + \\frac{1}{2})t\\right)}{\\sin(t/2)}$, et $S_N(f)(x) = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} f(x - t) D_N(t) \\, dt$.\n• **Théorème de Dirichlet** : si $f$ est $T$-périodique et **$\\mathcal{C}^1$ par morceaux**, alors pour tout $t \\in \\mathbb{R}$,\n$$\\lim_{N \\to \\infty} S_N(f)(t) = \\frac{f(t^+) + f(t^-)}{2}$$\nEn un point de continuité, la limite est $f(t)$.\n• **Convergence normale** : si $f$ est **continue** et $\\mathcal{C}^1$ par morceaux, alors $\\sum |c_n(f)| < +\\infty$ (Cauchy-Schwarz et Bessel appliqués à $f'$, via $|c_n(f)| = \\frac{|c_n(f')|}{|n|\\omega} \\le \\frac{1}{2}\\left(\\frac{1}{n^2\\omega^2} + |c_n(f')|^2\\right)$), et la série de Fourier converge **normalement** vers $f$ sur $\\mathbb{R}$."
      },
      {
        "title": "3. Théorie $L^2$ : Bessel et Parseval",
        "content": "On munit l'espace des fonctions $T$-périodiques de carré intégrable du produit scalaire $\\langle f, g \\rangle = \\frac{1}{T}\\int_0^T f \\bar{g}$ et de la norme $\\|f\\|_2$ associée. Les fonctions $e_n(t) = e^{in\\omega t}$, $n \\in \\mathbb{Z}$, forment une famille **orthonormée**, et $c_n(f) = \\langle f, e_n \\rangle$.\n• **Inégalité de Bessel** : $\\sum_{n \\in \\mathbb{Z}} |c_n(f)|^2 \\le \\|f\\|_2^2 = \\frac{1}{T}\\int_0^T |f|^2$.\n• **Égalité de Parseval** : pour toute $f$ de carré intégrable sur une période (en particulier continue par morceaux),\n$$\\sum_{n=-\\infty}^{+\\infty} |c_n(f)|^2 = \\frac{1}{T}\\int_0^T |f(t)|^2 \\, dt, \\quad \\text{et} \\quad \\|f - S_N(f)\\|_2 \\xrightarrow[N \\to \\infty]{} 0$$\n• **Forme réelle** : $|a_0|^2 + \\frac{1}{2}\\sum_{n \\ge 1} \\left(|a_n|^2 + |b_n|^2\\right) = \\frac{1}{T}\\int_0^T |f|^2$.\n• **Conséquences** : $(e_n)_{n \\in \\mathbb{Z}}$ est une base hilbertienne de $L^2$ ; une fonction continue dont tous les coefficients sont nuls est nulle ; deux fonctions continues ayant les mêmes coefficients sont égales."
      },
      {
        "title": "4. Démonstration : inégalité de Bessel et égalité de Parseval",
        "content": "Notons $\\mathcal{P}_N = \\text{Vect}(e_n, |n| \\le N)$ (polynômes trigonométriques de degré $\\le N$).\n\n**Étape A : $S_N(f)$ est la projection orthogonale de $f$ sur $\\mathcal{P}_N$.**\n1. Pour $|k| \\le N$, par orthonormalité : $\\langle S_N(f), e_k \\rangle = \\sum_{|n| \\le N} c_n \\langle e_n, e_k \\rangle = c_k = \\langle f, e_k \\rangle$. Donc $f - S_N(f) \\perp e_k$ pour tout $|k| \\le N$, c'est-à-dire $f - S_N(f) \\perp \\mathcal{P}_N$.\n2. **Pythagore** : $\\|f\\|_2^2 = \\|f - S_N(f)\\|_2^2 + \\|S_N(f)\\|_2^2 = \\|f - S_N(f)\\|_2^2 + \\sum_{|n| \\le N} |c_n|^2$.\n3. **Meilleure approximation** : pour $P \\in \\mathcal{P}_N$, $S_N(f) - P \\in \\mathcal{P}_N$, d'où $\\|f - P\\|_2^2 = \\|f - S_N(f)\\|_2^2 + \\|S_N(f) - P\\|_2^2 \\ge \\|f - S_N(f)\\|_2^2$.\n\n**Étape B : Bessel.** Par A2, $\\sum_{|n| \\le N} |c_n|^2 \\le \\|f\\|_2^2$ pour tout $N$ ; la série à termes positifs $\\sum |c_n|^2$ converge et sa somme est $\\le \\|f\\|_2^2$.\n\n**Étape C : Parseval** (cas $f$ continue ; le cas général s'en déduit par densité des fonctions continues périodiques dans $L^2$).\n1. Soit $\\varepsilon > 0$. Par le théorème de Fejér, il existe un polynôme trigonométrique $P \\in \\mathcal{P}_M$ tel que $\\|f - P\\|_\\infty \\le \\varepsilon$, donc $\\|f - P\\|_2 \\le \\|f - P\\|_\\infty \\le \\varepsilon$ (la mesure normalisée est de masse 1).\n2. Pour $N \\ge M$, $P \\in \\mathcal{P}_N$, donc par A3 : $\\|f - S_N(f)\\|_2 \\le \\|f - P\\|_2 \\le \\varepsilon$.\n3. Ainsi $\\|f - S_N(f)\\|_2 \\to 0$, et A2 donne $\\sum_{|n| \\le N} |c_n|^2 = \\|f\\|_2^2 - \\|f - S_N(f)\\|_2^2 \\to \\|f\\|_2^2$. $\\square$"
      },
      {
        "title": "5. Théorème de Fejér",
        "content": "• **Moyennes de Cesàro** : $\\sigma_N(f) = \\frac{1}{N}\\sum_{k=0}^{N-1} S_k(f)$. Pour $T = 2\\pi$, $\\sigma_N(f)(x) = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} f(x - t) F_N(t) \\, dt$ avec le **noyau de Fejér**\n$$F_N(t) = \\frac{1}{N}\\left(\\frac{\\sin(Nt/2)}{\\sin(t/2)}\\right)^2 \\ge 0, \\qquad \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} F_N = 1$$\net, pour tout $\\delta \\in ]0 ; \\pi[$, $\\sup_{\\delta \\le |t| \\le \\pi} F_N(t) \\to 0$.\n• **Théorème de Fejér** : si $f$ est **continue** et $2\\pi$-périodique, $\\sigma_N(f)$ converge **uniformément** vers $f$ sur $\\mathbb{R}$. (Positivité et concentration du noyau, plus continuité uniforme de $f$.)\n• **Conséquences** : les polynômes trigonométriques sont denses dans $(\\mathcal{C}_{2\\pi}, \\|\\cdot\\|_\\infty)$ ; si la série de Fourier d'une fonction continue converge en un point, sa somme y vaut $f(x)$ (Cesàro).\n• **Phénomène de Gibbs** : au voisinage d'une discontinuité de saut $s$, $S_N(f)$ présente un dépassement d'environ $9\\,\\%$ de $s$ qui ne disparaît pas quand $N \\to \\infty$ ; les moyennes de Fejér n'ont pas ce défaut."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer $\\zeta(2)$ et $\\zeta(4)$ avec l'onde parabolique",
        "example": "Soit $f$ la fonction $2\\pi$-périodique paire définie par $f(t) = t^2$ sur $[-\\pi ; \\pi]$.",
        "steps": [
          "**Étape 1 (Coefficients)** : $f$ est paire, donc $b_n = 0$. $a_0 = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} t^2 \\, dt = \\frac{\\pi^2}{3}$, et deux intégrations par parties donnent $a_n = \\frac{2}{\\pi}\\int_0^\\pi t^2\\cos(nt) \\, dt = \\frac{4(-1)^n}{n^2}$ pour $n \\ge 1$.",
          "**Étape 2 (Dirichlet en $\\pi$)** : $f$ est continue et $\\mathcal{C}^1$ par morceaux, donc sa série de Fourier converge vers $f$ en tout point. En $t = \\pi$ : $\\pi^2 = \\frac{\\pi^2}{3} + \\sum_{n \\ge 1} \\frac{4(-1)^n}{n^2}(-1)^n = \\frac{\\pi^2}{3} + 4\\zeta(2)$, d'où $\\zeta(2) = \\frac{\\pi^2}{6}$.",
          "**Étape 3 (Parseval)** : $\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} t^4 \\, dt = \\frac{\\pi^4}{5}$ et $a_0^2 + \\frac{1}{2}\\sum a_n^2 = \\frac{\\pi^4}{9} + 8\\zeta(4)$.",
          "**Conclusion** : $8\\zeta(4) = \\frac{\\pi^4}{5} - \\frac{\\pi^4}{9} = \\frac{4\\pi^4}{45}$, d'où $\\zeta(4) = \\sum_{n \\ge 1}\\frac{1}{n^4} = \\frac{\\pi^4}{90}$. (En $t = 0$, Dirichlet donne de même $\\sum_{n \\ge 1} \\frac{(-1)^{n-1}}{n^2} = \\frac{\\pi^2}{12}$.)"
        ]
      },
      {
        "title": "Méthode : Étudier un signal créneau (point de discontinuité)",
        "example": "Soit $g$ la fonction $2\\pi$-périodique impaire valant $1$ sur $]0 ; \\pi[$, $-1$ sur $]-\\pi ; 0[$ et $0$ en $0$ et $\\pi$.",
        "steps": [
          "**Étape 1 (Coefficients)** : $g$ est impaire, donc $a_n = 0$ et $b_n = \\frac{2}{\\pi}\\int_0^\\pi \\sin(nt) \\, dt = \\frac{2(1 - (-1)^n)}{n\\pi}$, soit $b_{2k+1} = \\frac{4}{(2k+1)\\pi}$ et $b_{2k} = 0$.",
          "**Étape 2 (Dirichlet)** : $g$ est $\\mathcal{C}^1$ par morceaux. En $t = \\frac{\\pi}{2}$ (point de continuité) : $1 = \\frac{4}{\\pi}\\sum_{k \\ge 0}\\frac{(-1)^k}{2k+1}$, d'où $\\sum_{k \\ge 0} \\frac{(-1)^k}{2k+1} = \\frac{\\pi}{4}$. En $t = 0$ (discontinuité), la série vaut $0 = \\frac{g(0^+) + g(0^-)}{2}$.",
          "**Étape 3 (Parseval)** : $\\frac{1}{2\\pi}\\int_{-\\pi}^\\pi g^2 = 1 = \\frac{1}{2}\\sum_{k \\ge 0} \\frac{16}{\\pi^2(2k+1)^2}$, d'où $\\sum_{k \\ge 0} \\frac{1}{(2k+1)^2} = \\frac{\\pi^2}{8}$.",
          "**Conclusion** : comme $\\zeta(2) = \\sum_{\\text{impairs}} + \\frac{1}{4}\\zeta(2)$, on retrouve $\\zeta(2) = \\frac{4}{3}\\cdot\\frac{\\pi^2}{8} = \\frac{\\pi^2}{6}$. La convergence n'est pas uniforme (limite discontinue de fonctions continues), et l'on observe le phénomène de Gibbs près de $0$."
        ]
      }
    ],
    "traps": [
      "La continuité seule n'assure pas la convergence ponctuelle de la série de Fourier : il existe des fonctions continues dont la série de Fourier diverge en un point. Le théorème de Dirichlet suppose $f$ de classe $\\mathcal{C}^1$ par morceaux.",
      "En un point de discontinuité, la série de Fourier converge vers la demi-somme $\\frac{f(t^+) + f(t^-)}{2}$, et non vers $f(t)$ (sauf si $f(t)$ a été choisie égale à cette demi-somme).",
      "Dans Parseval sous forme réelle, ne pas oublier le facteur $\\frac{1}{2}$ devant $\\sum (a_n^2 + b_n^2)$ et le terme $a_0^2$ sans facteur (avec la convention $a_0 = \\frac{1}{T}\\int_0^T f$).",
      "Pour la convergence normale, il faut $f$ continue **et** $\\mathcal{C}^1$ par morceaux : le signal créneau est $\\mathcal{C}^1$ par morceaux mais discontinu, et $\\sum |b_n| = \\sum \\frac{4}{(2k+1)\\pi}$ diverge.",
      "Les conventions varient ($a_0$ avec $\\frac{1}{T}$ ou $\\frac{2}{T}$, intégration sur $[0 ; T]$ ou $[-\\frac{T}{2} ; \\frac{T}{2}]$) : vérifier la cohérence des formules de Parseval et des sommes partielles avec la convention choisie."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème de Dirichlet avec ses hypothèses.",
        "a": "Si $f$ est périodique et $\\mathcal{C}^1$ par morceaux, sa série de Fourier converge en tout $t$ vers $\\frac{f(t^+) + f(t^-)}{2}$."
      },
      {
        "q": "Énoncer l'égalité de Parseval (forme exponentielle).",
        "a": "$\\sum_{n \\in \\mathbb{Z}} |c_n(f)|^2 = \\frac{1}{T}\\int_0^T |f(t)|^2 \\, dt$."
      },
      {
        "q": "Pourquoi l'inégalité de Bessel est-elle vraie ?",
        "a": "$S_N(f)$ est la projection orthogonale de $f$ sur $\\text{Vect}(e_n, |n| \\le N)$ ; Pythagore donne $\\sum_{|n| \\le N}|c_n|^2 = \\|S_N(f)\\|^2 \\le \\|f\\|^2$."
      },
      {
        "q": "Quel résultat de densité sert à passer de Bessel à Parseval ?",
        "a": "La densité des polynômes trigonométriques (théorème de Fejér) : $S_N(f)$ étant la meilleure approximation dans $\\mathcal{P}_N$, $\\|f - S_N(f)\\|_2 \\to 0$."
      },
      {
        "q": "Énoncer le théorème de Fejér.",
        "a": "Si $f$ est continue et $2\\pi$-périodique, les moyennes de Cesàro $\\sigma_N(f)$ de ses sommes de Fourier convergent uniformément vers $f$."
      },
      {
        "q": "Quand la série de Fourier converge-t-elle normalement ?",
        "a": "Si $f$ est continue et $\\mathcal{C}^1$ par morceaux ; la somme est alors $f$."
      }
    ]
  },
  "L3-GPR": {
    "title": "L3-GPR : Géométrie projective élémentaire",
    "domain": "Géométrie",
    "objectives": [
      "Définir l'espace projectif $\\mathbb{P}(E)$, ses sous-espaces et les coordonnées homogènes.",
      "Définir les homographies et énoncer le théorème fondamental (repères projectifs).",
      "Définir le birapport de quatre points d'une droite projective et démontrer son invariance par homographie.",
      "Relier géométrie affine et projective (points à l'infini, nature des coniques) et énoncer les théorèmes de Desargues et de Pappus."
    ],
    "keyPoints": [
      {
        "title": "1. Espaces projectifs et coordonnées homogènes",
        "content": "• **Espace projectif** : pour $E$ un $\\mathbb{K}$-espace vectoriel de dimension $n+1$, $\\mathbb{P}(E)$ est l'ensemble des droites vectorielles de $E$ :\n$$\\mathbb{P}(E) = (E \\setminus \\{0\\}) / \\sim, \\qquad x \\sim y \\iff \\exists \\lambda \\in \\mathbb{K}^{\\ast}, \\; y = \\lambda x$$\nSa dimension (projective) est $n$. On note $\\mathbb{P}^n(\\mathbb{K}) = \\mathbb{P}(\\mathbb{K}^{n+1})$.\n• **Coordonnées homogènes** : le point $\\mathbb{K}x$ se note $[x_0 : x_1 : \\dots : x_n]$, avec $(x_0, \\dots, x_n) \\neq (0, \\dots, 0)$, défini à un scalaire non nul près.\n• **Cartes affines** : l'ensemble $\\{x_0 \\neq 0\\}$ s'identifie à $\\mathbb{K}^n$ via $[x_0 : \\dots : x_n] \\mapsto \\left(\\frac{x_1}{x_0}, \\dots, \\frac{x_n}{x_0}\\right)$ ; son complémentaire $H_\\infty = \\{x_0 = 0\\} \\simeq \\mathbb{P}^{n-1}$ est l'**hyperplan à l'infini**. Ainsi $\\mathbb{P}^n = \\mathbb{K}^n \\sqcup H_\\infty$.\n• **Droite projective** : $\\mathbb{P}^1(\\mathbb{K}) = \\mathbb{K} \\cup \\{\\infty\\}$ via $[x_0 : x_1] \\mapsto \\frac{x_1}{x_0}$ (et $[0 : 1] \\mapsto \\infty$)."
      },
      {
        "title": "2. Sous-espaces projectifs et incidence",
        "content": "• **Sous-espace projectif** : $\\mathbb{P}(F)$ pour $F$ sous-espace vectoriel de $E$ ; $\\dim \\mathbb{P}(F) = \\dim F - 1$. Droites projectives : $\\dim F = 2$ ; hyperplans : $\\dim F = n$.\n• **Formule d'incidence** : si $\\dim \\mathbb{P}(F) + \\dim \\mathbb{P}(G) \\ge n$, alors $\\mathbb{P}(F) \\cap \\mathbb{P}(G) \\neq \\emptyset$ (car $\\dim (F \\cap G) \\ge \\dim F + \\dim G - (n+1) \\ge 1$).\n• **Plan projectif** : deux droites distinctes se coupent en **exactement un point**, et par deux points distincts passe une unique droite. En coordonnées, la droite d'équation $u_0x_0 + u_1x_1 + u_2x_2 = 0$ a pour « coordonnées » $[u_0 : u_1 : u_2]$ (dualité) ; l'intersection de deux droites et la droite joignant deux points se calculent par produit vectoriel.\n• **Parallélisme** : deux droites affines parallèles du plan, complétées, se coupent en un point de $H_\\infty$ (leur direction commune) : le parallélisme devient une incidence sur la droite à l'infini.\n• **Repère projectif** de $\\mathbb{P}^n$ : $n+2$ points dont $n+1$ quelconques sont projectivement indépendants (images de vecteurs formant une base). Exemple : $[1:0:0], [0:1:0], [0:0:1], [1:1:1]$ dans $\\mathbb{P}^2$."
      },
      {
        "title": "3. Homographies et théorème fondamental",
        "content": "• **Homographie** : pour $u \\in \\text{GL}(E)$, l'application $\\mathbb{P}(u) : \\mathbb{K}x \\mapsto \\mathbb{K}u(x)$ est une bijection de $\\mathbb{P}(E)$ ; on a $\\mathbb{P}(u) = \\mathbb{P}(v) \\iff v = \\lambda u$ avec $\\lambda \\in \\mathbb{K}^{\\ast}$. Le groupe des homographies est\n$$\\text{PGL}(E) = \\text{GL}(E) / \\mathbb{K}^{\\ast}\\text{Id}, \\qquad \\text{PGL}_{n+1}(\\mathbb{K}) \\text{ pour } \\mathbb{P}^n(\\mathbb{K})$$\n• **Théorème fondamental** : si $(P_0, \\dots, P_{n+1})$ et $(Q_0, \\dots, Q_{n+1})$ sont deux repères projectifs de $\\mathbb{P}^n(\\mathbb{K})$, il existe une **unique** homographie $h \\in \\text{PGL}_{n+1}(\\mathbb{K})$ telle que $h(P_i) = Q_i$ pour tout $i$.\n• **Cas de la droite** : les homographies de $\\mathbb{P}^1(\\mathbb{K}) = \\mathbb{K} \\cup \\{\\infty\\}$ sont les $z \\mapsto \\frac{az + b}{cz + d}$ avec $ad - bc \\neq 0$ (conventions : $-\\frac{d}{c} \\mapsto \\infty$ et $\\infty \\mapsto \\frac{a}{c}$ si $c \\neq 0$ ; $\\infty \\mapsto \\infty$ si $c = 0$). Elles sont déterminées par l'image de **trois** points distincts.\n• **Lien affine** : les homographies de $\\mathbb{P}^n$ qui préservent $H_\\infty$ sont exactement les prolongements des bijections affines de $\\mathbb{K}^n$."
      },
      {
        "title": "4. Birapport et division harmonique",
        "content": "• **Définition** : pour $A, B, C$ trois points distincts de $\\mathbb{P}^1(\\mathbb{K})$ et $D$ quelconque, le birapport $[A, B, C, D]$ est l'image de $D$ par l'unique homographie $h$ envoyant $A, B, C$ sur $\\infty, 0, 1$.\n• **Formule** : pour des paramètres $a, b, c, d \\in \\mathbb{K}$, l'homographie $h(z) = \\frac{(z - b)(c - a)}{(z - a)(c - b)}$ vérifie $h(a) = \\infty$, $h(b) = 0$, $h(c) = 1$, d'où\n$$[A, B, C, D] = \\frac{(d - b)(c - a)}{(d - a)(c - b)}$$\nSi un point est $\\infty$, on supprime les facteurs où il figure : par exemple $[A, B, C, \\infty] = \\frac{c - a}{c - b}$.\n• **Division harmonique** : $(A, B ; C, D)$ est harmonique si $[A, B, C, D] = -1$ ; $D$ est le **conjugué harmonique** de $C$ par rapport à $A$ et $B$. Exemple : $[A, B, C, \\infty] = -1 \\iff c - a = b - c \\iff C$ est le milieu de $[AB]$.\n• **Permutations** : le birapport dépend de l'ordre des points ; les 24 permutations ne donnent que 6 valeurs en général : $\\lambda, \\frac{1}{\\lambda}, 1 - \\lambda, \\frac{1}{1 - \\lambda}, \\frac{\\lambda - 1}{\\lambda}, \\frac{\\lambda}{\\lambda - 1}$."
      },
      {
        "title": "5. Démonstration : invariance du birapport par homographie",
        "content": "**Théorème.** Soit $g$ une homographie de $\\mathbb{P}^1(\\mathbb{K})$, $A, B, C$ distincts et $D$ quelconque. Alors $[g(A), g(B), g(C), g(D)] = [A, B, C, D]$.\n\n**Démonstration (par la définition).**\n1. Soit $h$ l'unique homographie telle que $h(A) = \\infty$, $h(B) = 0$, $h(C) = 1$ ; par définition $[A, B, C, D] = h(D)$.\n2. $g$ étant bijective, $g(A), g(B), g(C)$ sont distincts, et $k = h \\circ g^{-1}$ est une homographie (composée d'homographies) vérifiant $k(g(A)) = \\infty$, $k(g(B)) = 0$, $k(g(C)) = 1$.\n3. Par **unicité** dans le théorème fondamental (trois points distincts de $\\mathbb{P}^1$ forment un repère), $k$ est l'homographie qui définit le birapport de $(g(A), g(B), g(C), \\cdot)$.\n4. Donc $[g(A), g(B), g(C), g(D)] = k(g(D)) = h(g^{-1}(g(D))) = h(D) = [A, B, C, D]$. $\\square$\n\n**Vérification par le calcul.** $\\text{PGL}_2(\\mathbb{K})$ est engendré par les translations $z \\mapsto z + \\beta$, les homothéties $z \\mapsto \\alpha z$ ($\\alpha \\neq 0$) et $z \\mapsto \\frac{1}{z}$, puisque pour $c \\neq 0$ : $\\frac{az + b}{cz + d} = \\frac{a}{c} + \\frac{bc - ad}{c(cz + d)}$. Les deux premières laissent la formule invariante (différences inchangées ou multipliées par $\\alpha$, qui se simplifie). Pour l'inversion, avec des paramètres non nuls : $\\frac{1}{d} - \\frac{1}{b} = \\frac{b - d}{bd}$, etc., donc\n$$\\frac{\\left(\\frac{1}{d} - \\frac{1}{b}\\right)\\left(\\frac{1}{c} - \\frac{1}{a}\\right)}{\\left(\\frac{1}{d} - \\frac{1}{a}\\right)\\left(\\frac{1}{c} - \\frac{1}{b}\\right)} = \\frac{\\frac{(b - d)(a - c)}{abcd}}{\\frac{(a - d)(b - c)}{abcd}} = \\frac{(d - b)(c - a)}{(d - a)(c - b)}$$\n**Conséquence** : le birapport est aussi invariant par **projection centrale** d'une droite sur une autre dans le plan projectif, car une telle projection est une homographie entre les deux droites."
      },
      {
        "title": "6. Coniques et théorèmes d'incidence",
        "content": "• **Conique projective** : $\\mathcal{C} = \\{[x] \\in \\mathbb{P}^2 \\mid q(x) = 0\\}$ où $q$ est une forme quadratique non nulle sur $\\mathbb{K}^3$ ; elle est **propre** (non dégénérée) si $q$ l'est.\n• **Classification** : sur $\\mathbb{C}$, toutes les coniques propres sont projectivement équivalentes à $x_0^2 + x_1^2 + x_2^2 = 0$. Sur $\\mathbb{R}$, une conique propre est soit vide ($x_0^2 + x_1^2 + x_2^2 = 0$), soit équivalente à $x_1^2 + x_2^2 - x_0^2 = 0$ (signature).\n• **Nature affine** dans la carte $x_0 = 1$ (conique propre non vide de $\\mathbb{P}^2(\\mathbb{R})$) : **ellipse** si elle ne rencontre pas la droite à l'infini $x_0 = 0$, **parabole** si elle lui est tangente (un point double), **hyperbole** si elle la coupe en deux points réels distincts (directions asymptotiques). Ellipse, parabole et hyperbole sont donc projectivement équivalentes.\n• **Théorème de Desargues** : deux triangles $ABC$ et $A'B'C'$ (sans sommet commun) sont en perspective depuis un point ($AA'$, $BB'$, $CC'$ concourantes) si et seulement s'ils sont en perspective par rapport à une droite (les points $AB \\cap A'B'$, $BC \\cap B'C'$, $CA \\cap C'A'$ sont alignés).\n• **Théorème de Pappus** : si $A, B, C$ sont sur une droite et $A', B', C'$ sur une autre, alors les points $AB' \\cap A'B$, $BC' \\cap B'C$, $CA' \\cap C'A$ sont alignés.\n• **Méthode** : envoyer à l'infini une droite bien choisie par homographie transforme souvent un énoncé projectif en un énoncé affine simple (concours $\\to$ parallélisme)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer la nature affine d'une conique à partir de son équation homogène",
        "example": "Soit la conique projective d'équation $x_1^2 - 2x_1x_2 - x_0x_2 = 0$. Déterminer sa nature dans la carte affine $x_0 = 1$.",
        "steps": [
          "**Étape 1 (Non-dégénérescence)** : la matrice de $q$ dans la base canonique est $\\begin{pmatrix} 0 & 0 & -\\frac{1}{2} \\\\ 0 & 1 & -1 \\\\ -\\frac{1}{2} & -1 & 0 \\end{pmatrix}$, de déterminant $-\\frac{1}{4} \\neq 0$ : la conique est propre.",
          "**Étape 2 (Points à l'infini)** : on pose $x_0 = 0$ : $x_1^2 - 2x_1x_2 = x_1(x_1 - 2x_2) = 0$.",
          "**Étape 3 (Comptage)** : deux solutions non proportionnelles, $[0 : 0 : 1]$ et $[0 : 2 : 1]$ : la conique coupe la droite à l'infini en deux points réels distincts.",
          "**Conclusion** : dans la carte $x_0 = 1$, en notant $x = x_1$ et $y = x_2$, la courbe d'équation $x^2 - 2xy - y = 0$ : c'est une **hyperbole**, de directions asymptotiques $(0, 1)$ et $(2, 1)$."
        ]
      },
      {
        "title": "Méthode : Calculer un conjugué harmonique et vérifier l'invariance",
        "example": "Sur la droite projective, $A, B, C$ ont pour paramètres $0, 1, 3$. Trouver $D$ tel que $[A, B, C, D] = -1$, puis contrôler avec l'homographie $g(z) = \\frac{1}{z + 1}$.",
        "steps": [
          "**Étape 1 (Équation)** : $[A, B, C, D] = \\frac{(d - 1)(3 - 0)}{(d - 0)(3 - 1)} = \\frac{3(d - 1)}{2d}$.",
          "**Étape 2 (Résolution)** : $\\frac{3(d-1)}{2d} = -1 \\iff 3d - 3 = -2d \\iff d = \\frac{3}{5}$.",
          "**Étape 3 (Images par $g$)** : $g(0) = 1$, $g(1) = \\frac{1}{2}$, $g(3) = \\frac{1}{4}$, $g\\left(\\frac{3}{5}\\right) = \\frac{5}{8}$. Alors $\\frac{\\left(\\frac{5}{8} - \\frac{1}{2}\\right)\\left(\\frac{1}{4} - 1\\right)}{\\left(\\frac{5}{8} - 1\\right)\\left(\\frac{1}{4} - \\frac{1}{2}\\right)} = \\frac{\\frac{1}{8} \\times \\left(-\\frac{3}{4}\\right)}{\\left(-\\frac{3}{8}\\right) \\times \\left(-\\frac{1}{4}\\right)} = \\frac{-\\frac{3}{32}}{\\frac{3}{32}} = -1$.",
          "**Conclusion** : $D$ a pour paramètre $\\frac{3}{5}$, et le birapport $-1$ est bien conservé par l'homographie $g$."
        ]
      }
    ],
    "traps": [
      "Le triplet $(0, 0, 0)$ ne définit aucun point : $[0 : 0 : 0]$ n'appartient pas à $\\mathbb{P}^2$.",
      "Deux droites distinctes du plan projectif ne sont jamais disjointes : des droites affines parallèles se coupent en un point de la droite à l'infini.",
      "Une homographie de $\\mathbb{P}^n$ est déterminée par l'image de $n+2$ points en position générale, pas de $n+1$ : sur $\\mathbb{P}^1$, il faut trois points ; les homothéties $z \\mapsto \\alpha z$ fixent toutes $0$ et $\\infty$.",
      "Le birapport dépend de l'ordre des points et de la convention choisie : $[A, B, C, D]$ et $[A, B, D, C]$ sont inverses l'un de l'autre.",
      "Milieu, parallélisme, distinction ellipse/parabole/hyperbole ne sont pas des notions projectives : elles dépendent du choix de la droite à l'infini."
    ],
    "flashcards": [
      {
        "q": "Combien de points forment un repère projectif de $\\mathbb{P}^n$ ?",
        "a": "$n+2$ points dont $n+1$ quelconques sont projectivement indépendants."
      },
      {
        "q": "Définir le birapport de quatre points d'une droite projective.",
        "a": "$[A, B, C, D] = h(D)$ où $h$ est l'unique homographie envoyant $A, B, C$ sur $\\infty, 0, 1$ ; en paramètres, $\\frac{(d - b)(c - a)}{(d - a)(c - b)}$."
      },
      {
        "q": "Pourquoi le birapport est-il invariant par homographie ?",
        "a": "Si $h$ définit $[A,B,C,\\cdot]$, alors $h \\circ g^{-1}$ envoie $g(A), g(B), g(C)$ sur $\\infty, 0, 1$ ; par unicité il définit $[gA, gB, gC, \\cdot]$, et $h \\circ g^{-1}(gD) = h(D)$."
      },
      {
        "q": "Quel est le groupe des homographies de $\\mathbb{P}^n(\\mathbb{K})$ ?",
        "a": "$\\text{PGL}_{n+1}(\\mathbb{K}) = \\text{GL}_{n+1}(\\mathbb{K}) / \\mathbb{K}^{\\ast} I_{n+1}$."
      },
      {
        "q": "Comment distingue-t-on projectivement parabole et hyperbole ?",
        "a": "La parabole est tangente à la droite de l'infini (un point double), l'hyperbole la coupe en deux points réels distincts, l'ellipse ne la rencontre pas."
      },
      {
        "q": "Énoncer le théorème de Pappus.",
        "a": "Si $A, B, C$ sont alignés et $A', B', C'$ alignés, les points $AB' \\cap A'B$, $BC' \\cap B'C$, $CA' \\cap C'A$ sont alignés."
      }
    ]
  },
  "L3-GDF": {
    "title": "L3-GDF : Sous-variétés différentielles et espaces tangents",
    "domain": "Géométrie Différentielle",
    "objectives": [
      "Énoncer les théorèmes d'inversion locale et des fonctions implicites, outils de base de la théorie.",
      "Définir une sous-variété de $\\mathbb{R}^n$ par équations, paramétrages ou graphes locaux, et reconnaître les points singuliers.",
      "Démontrer que l'espace tangent d'une sous-variété définie par une submersion est le noyau de la différentielle.",
      "Énoncer, justifier et appliquer le théorème des extrema liés (multiplicateurs de Lagrange).",
      "Connaître les formes différentielles, le lemme de Poincaré et la formule de Stokes."
    ],
    "keyPoints": [
      {
        "title": "1. Outils : inversion locale et fonctions implicites",
        "content": "• **Théorème d'inversion locale** : soit $f : U \\to \\mathbb{R}^n$ de classe $\\mathcal{C}^p$ ($p \\ge 1$) sur un ouvert $U \\subset \\mathbb{R}^n$ et $a \\in U$ tel que $df(a)$ soit **inversible**. Il existe un ouvert $V \\ni a$ et un ouvert $W \\ni f(a)$ tels que $f : V \\to W$ soit un $\\mathcal{C}^p$-difféomorphisme.\n• **Théorème des fonctions implicites** : soit $F : U \\subset \\mathbb{R}^d \\times \\mathbb{R}^k \\to \\mathbb{R}^k$ de classe $\\mathcal{C}^p$, $(a, b) \\in U$ avec $F(a, b) = 0$ et $\\partial_y F(a, b)$ (matrice $k \\times k$) **inversible**. Il existe des voisinages ouverts $A \\ni a$, $B \\ni b$ et $g : A \\to B$ de classe $\\mathcal{C}^p$ tels que\n$$\\forall (x, y) \\in A \\times B, \\quad F(x, y) = 0 \\iff y = g(x)$$\net $dg(x) = -\\left(\\partial_y F(x, g(x))\\right)^{-1} \\circ \\partial_x F(x, g(x))$.\n• **Vocabulaire** : $f : U \\subset \\mathbb{R}^n \\to \\mathbb{R}^k$ est une **submersion** en $x$ si $df(x)$ est surjective (rang $k$) ; $\\varphi : V \\subset \\mathbb{R}^d \\to \\mathbb{R}^n$ est une **immersion** en $u$ si $d\\varphi(u)$ est injective (rang $d$)."
      },
      {
        "title": "2. Sous-variétés de $\\mathbb{R}^n$ : définitions équivalentes",
        "content": "Soit $M \\subset \\mathbb{R}^n$ et $d \\in \\{0, \\dots, n\\}$, $k = n - d$ (codimension). $M$ est une **sous-variété de dimension $d$** et de classe $\\mathcal{C}^p$ ($p \\ge 1$) si tout $x_0 \\in M$ admet un voisinage ouvert $U$ dans $\\mathbb{R}^n$ vérifiant l'une des propriétés équivalentes :\n1. **Équations** : il existe une **submersion** $f : U \\to \\mathbb{R}^k$ de classe $\\mathcal{C}^p$ telle que $M \\cap U = f^{-1}(\\{0\\})$.\n2. **Graphe** : après permutation des coordonnées, $M \\cap U$ est le graphe d'une fonction $\\mathcal{C}^p$ de $d$ variables à valeurs dans $\\mathbb{R}^k$, définie sur un ouvert de $\\mathbb{R}^d$.\n3. **Paramétrage** : il existe un ouvert $V \\subset \\mathbb{R}^d$ et une **immersion** $\\varphi : V \\to \\mathbb{R}^n$ de classe $\\mathcal{C}^p$ qui est un **homéomorphisme** de $V$ sur $M \\cap U$.\n4. **Redressement** : il existe un $\\mathcal{C}^p$-difféomorphisme $\\Phi$ de $U$ sur un ouvert de $\\mathbb{R}^n$ tel que $\\Phi(M \\cap U) = \\Phi(U) \\cap (\\mathbb{R}^d \\times \\{0\\})$.\n• **Exemples** : sphères $\\mathbb{S}^{n-1} = \\{\\|x\\|^2 = 1\\}$ ; $\\text{SL}_n(\\mathbb{R}) = \\det^{-1}(\\{1\\})$ (dimension $n^2 - 1$) ; $\\text{O}_n(\\mathbb{R})$ (dimension $\\frac{n(n-1)}{2}$) ; graphes de fonctions $\\mathcal{C}^1$.\n• **Contre-exemples** : le cône $x^2 + y^2 = z^2$ n'est pas une sous-variété au voisinage de $0$ ; le graphe de $|x|$ n'est pas une sous-variété $\\mathcal{C}^1$ ; une courbe en « huit » paramétrée par une immersion injective n'est pas une sous-variété au point double (pas d'homéomorphisme sur l'image)."
      },
      {
        "title": "3. Espace tangent et espace normal",
        "content": "Soit $M$ une sous-variété de dimension $d$ de classe $\\mathcal{C}^1$ et $x \\in M$.\n• **Vecteur tangent** : $v \\in \\mathbb{R}^n$ est tangent à $M$ en $x$ s'il existe $\\varepsilon > 0$ et une courbe $\\gamma : ]-\\varepsilon ; \\varepsilon[ \\to M$ dérivable en $0$, avec $\\gamma(0) = x$ et $\\gamma'(0) = v$.\n• **Espace tangent** $T_xM$ : ensemble de ces vecteurs ; c'est un **sous-espace vectoriel** de dimension $d$.\n• **Calcul** :\n  1. par équations ($M \\cap U = f^{-1}(0)$, $f$ submersion) : $T_xM = \\text{Ker}\\, df(x) = \\{v \\mid \\langle \\nabla f_i(x), v \\rangle = 0, \\; 1 \\le i \\le k\\}$ ;\n  2. par paramétrage ($x = \\varphi(u)$) : $T_xM = \\text{Im}\\, d\\varphi(u)$ ;\n  3. par graphe ($y = g(u)$) : $T_xM = \\{(h, dg(u)h) \\mid h \\in \\mathbb{R}^d\\}$.\n• **Espace normal** : $N_xM = (T_xM)^\\perp = \\text{Vect}(\\nabla f_1(x), \\dots, \\nabla f_k(x))$, de dimension $k$.\n• **Espace tangent affine** : $x + T_xM$ (plan tangent, droite tangente).\n• **Exemple** : $T_I \\text{O}_n(\\mathbb{R})$ est l'espace des matrices antisymétriques (noyau de $H \\mapsto H + {}^tH$)."
      },
      {
        "title": "4. Démonstration : l'espace tangent est le noyau de la différentielle",
        "content": "**Théorème.** Soit $U$ un ouvert de $\\mathbb{R}^n$, $f : U \\to \\mathbb{R}^k$ une submersion de classe $\\mathcal{C}^1$ et $M = f^{-1}(\\{0\\})$. Pour tout $x \\in M$, $T_xM = \\text{Ker}\\, df(x)$, et c'est un sous-espace de dimension $d = n - k$.\n\n**Démonstration.**\n1. **Inclusion $T_xM \\subset \\text{Ker}\\, df(x)$.** Si $\\gamma : ]-\\varepsilon ; \\varepsilon[ \\to M$ est dérivable en $0$ avec $\\gamma(0) = x$, alors $f \\circ \\gamma = 0$, donc par dérivation des fonctions composées $df(x)(\\gamma'(0)) = (f \\circ \\gamma)'(0) = 0$.\n2. **Dimension du noyau.** $df(x)$ est surjective de $\\mathbb{R}^n$ sur $\\mathbb{R}^k$ ; par le théorème du rang, $\\dim \\text{Ker}\\, df(x) = n - k = d$.\n3. **Paramétrage local.** La matrice jacobienne de $f$ en $x$ est de rang $k$ : on peut choisir $k$ colonnes indépendantes et, quitte à permuter les coordonnées, écrire $x = (a, b) \\in \\mathbb{R}^d \\times \\mathbb{R}^k$ avec $\\partial_y f(a, b)$ inversible. Par le théorème des fonctions implicites, il existe $g$ de classe $\\mathcal{C}^1$ sur un voisinage $A$ de $a$ telle que, près de $x$, $M$ coïncide avec le graphe $\\{(u, g(u)) \\mid u \\in A\\}$.\n4. **Construction de vecteurs tangents.** Pour $h \\in \\mathbb{R}^d$, la courbe $\\gamma_h(t) = (a + th, g(a + th))$ est à valeurs dans $M$ pour $|t|$ petit, et $\\gamma_h'(0) = (h, dg(a)h)$. Donc $L = \\{(h, dg(a)h) \\mid h \\in \\mathbb{R}^d\\} \\subset T_xM$, et $L$ est un sous-espace de dimension $d$ (l'application $h \\mapsto (h, dg(a)h)$ est linéaire injective).\n5. **Conclusion.** On a $L \\subset T_xM \\subset \\text{Ker}\\, df(x)$ avec $\\dim L = \\dim \\text{Ker}\\, df(x) = d$. Donc $L = \\text{Ker}\\, df(x)$, et toutes les inclusions sont des égalités : $T_xM = \\text{Ker}\\, df(x)$ est un sous-espace vectoriel de dimension $d$. $\\square$\n\n**Remarque.** L'hypothèse de submersion est essentielle : pour $f(x, y, z) = x^2 + y^2 - z^2$, $df(0) = 0$ a pour noyau $\\mathbb{R}^3$, alors que les vecteurs tangents en $0$ au cône forment le cône lui-même, qui n'est pas un sous-espace vectoriel."
      },
      {
        "title": "5. Extrema liés : multiplicateurs de Lagrange",
        "content": "• **Cadre** : $F : U \\to \\mathbb{R}$ de classe $\\mathcal{C}^1$ et des contraintes $g = (g_1, \\dots, g_k) : U \\to \\mathbb{R}^k$ de classe $\\mathcal{C}^1$, $M = g^{-1}(\\{0\\})$.\n• **Théorème des extrema liés** : si $x_0 \\in M$ est un extremum local de $F_{|M}$ et si $dg_1(x_0), \\dots, dg_k(x_0)$ sont **linéairement indépendantes** (contraintes qualifiées), il existe des réels uniques $\\lambda_1, \\dots, \\lambda_k$ tels que\n$$\\nabla F(x_0) = \\sum_{i=1}^k \\lambda_i \\nabla g_i(x_0)$$\n• **Justification** : près de $x_0$, $M$ est une sous-variété et, pour toute courbe $\\gamma$ de $M$ avec $\\gamma(0) = x_0$, $t \\mapsto F(\\gamma(t))$ a un extremum local en $0$, donc $dF(x_0)(\\gamma'(0)) = 0$. Ainsi $dF(x_0)$ s'annule sur $T_{x_0}M = \\bigcap_i \\text{Ker}\\, dg_i(x_0)$ ; par un lemme d'algèbre linéaire, une forme linéaire nulle sur l'intersection des noyaux de formes $\\ell_1, \\dots, \\ell_k$ est combinaison linéaire de ces formes. Autrement dit $\\nabla F(x_0) \\in N_{x_0}M$.\n• **Usage** : la condition est **nécessaire**, pas suffisante ; on conclut souvent par un argument de compacité (une fonction continue sur une sous-variété compacte atteint ses bornes) en comparant les valeurs aux points critiques."
      },
      {
        "title": "6. Formes différentielles et formule de Stokes",
        "content": "• **1-formes** sur un ouvert $U$ de $\\mathbb{R}^n$ : $\\omega = \\sum_{i=1}^n A_i \\, dx_i$. **Dérivée extérieure** : $d\\omega = \\sum_{i < j}\\left(\\frac{\\partial A_j}{\\partial x_i} - \\frac{\\partial A_i}{\\partial x_j}\\right) dx_i \\wedge dx_j$.\n• $\\omega$ est **exacte** s'il existe $f$ telle que $\\omega = df$ ; **fermée** si $d\\omega = 0$. Toute forme exacte de classe $\\mathcal{C}^1$ est fermée (lemme de Schwarz : $d \\circ d = 0$).\n• **Lemme de Poincaré** : sur un ouvert **étoilé**, toute forme fermée de classe $\\mathcal{C}^1$ est exacte.\n• **Intégrale curviligne** : si $\\omega = df$ et $\\gamma$ est un chemin $\\mathcal{C}^1$ par morceaux de $A$ à $B$, $\\int_\\gamma \\omega = f(B) - f(A)$ ; en particulier l'intégrale sur un lacet est nulle.\n• **Formule de Stokes** : pour $M$ une sous-variété compacte orientée à bord de dimension $k$ (bord muni de l'orientation induite) et $\\omega$ une $(k-1)$-forme de classe $\\mathcal{C}^1$ au voisinage de $M$ :\n$$\\int_{\\partial M} \\omega = \\int_M d\\omega$$\nCas particuliers : formule de Green-Riemann ($k = 2$ dans le plan), formule d'Ostrogradski (flux et divergence), formule de Kelvin-Stokes (circulation et rotationnel)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer l'espace tangent de la sphère $\\mathbb{S}^{n-1}$",
        "example": "Déterminer $T_x\\mathbb{S}^{n-1}$ pour $x \\in \\mathbb{S}^{n-1} = \\{y \\in \\mathbb{R}^n \\mid \\|y\\|^2 = 1\\}$.",
        "steps": [
          "**Étape 1 (Équation)** : $\\mathbb{S}^{n-1} = f^{-1}(\\{0\\})$ avec $f(y) = \\sum_{i=1}^n y_i^2 - 1$, de classe $\\mathcal{C}^\\infty$ sur $\\mathbb{R}^n$.",
          "**Étape 2 (Submersion)** : $\\nabla f(y) = 2y$ ; pour $x \\in \\mathbb{S}^{n-1}$, $\\nabla f(x) = 2x \\neq 0$, donc $df(x)$ est surjective : $\\mathbb{S}^{n-1}$ est une sous-variété de dimension $n-1$.",
          "**Étape 3 (Noyau)** : $df(x)(v) = 2\\langle x, v \\rangle$.",
          "**Conclusion** : $T_x\\mathbb{S}^{n-1} = \\{v \\in \\mathbb{R}^n \\mid \\langle x, v \\rangle = 0\\} = x^\\perp$ et $N_x\\mathbb{S}^{n-1} = \\mathbb{R}x$."
        ]
      },
      {
        "title": "Méthode : Chercher les extrema d'une fonction sur une courbe compacte",
        "example": "Déterminer le maximum et le minimum de $F(x, y) = x + 2y$ sur le cercle $\\mathcal{C} : x^2 + y^2 = 5$.",
        "steps": [
          "**Étape 1 (Existence et qualification)** : $\\mathcal{C}$ est compact et $F$ continue, donc les extrema existent. Avec $g(x, y) = x^2 + y^2 - 5$, $\\nabla g = (2x, 2y) \\neq (0, 0)$ sur $\\mathcal{C}$ : les contraintes sont qualifiées.",
          "**Étape 2 (Système de Lagrange)** : $\\nabla F = \\lambda \\nabla g$ donne $1 = 2\\lambda x$, $2 = 2\\lambda y$, donc $\\lambda \\neq 0$, $x = \\frac{1}{2\\lambda}$, $y = \\frac{1}{\\lambda}$.",
          "**Étape 3 (Contrainte)** : $\\frac{1}{4\\lambda^2} + \\frac{1}{\\lambda^2} = 5 \\iff \\lambda^2 = \\frac{1}{4} \\iff \\lambda = \\pm\\frac{1}{2}$, d'où les points critiques $(1, 2)$ et $(-1, -2)$.",
          "**Conclusion** : $F(1, 2) = 5$ et $F(-1, -2) = -5$ ; le maximum vaut $5$ et le minimum $-5$ (cohérent avec Cauchy-Schwarz : $|x + 2y| \\le \\sqrt{5}\\sqrt{x^2 + y^2} = 5$)."
        ]
      }
    ],
    "traps": [
      "La formule $T_xM = \\text{Ker}\\, df(x)$ exige que $df(x)$ soit surjective : pour le cône $x^2 + y^2 - z^2 = 0$ au sommet, $df(0) = 0$ et l'ensemble n'est pas une sous-variété.",
      "Les multiplicateurs de Lagrange donnent une condition nécessaire sous l'hypothèse de qualification. Sans elle, la conclusion peut tomber : $F(x, y) = x$ admet un minimum en $(0, 0)$ sur la courbe $y^2 = x^3$, mais $\\nabla g(0, 0) = (0, 0)$ et aucune relation $\\nabla F = \\lambda \\nabla g$ n'est possible.",
      "Un point critique de Lagrange n'est pas forcément un extremum : il faut conclure par compacité, par comparaison de valeurs ou par une étude du second ordre.",
      "L'image d'une immersion injective n'est pas toujours une sous-variété : une courbe en « huit » parcourue sans repasser par le même paramètre n'est pas homéomorphe à son image au point de croisement.",
      "Une forme fermée n'est pas exacte sur un ouvert non étoilé : $\\omega = \\frac{-y \\, dx + x \\, dy}{x^2 + y^2}$ est fermée sur $\\mathbb{R}^2 \\setminus \\{0\\}$, mais son intégrale sur le cercle unité vaut $2\\pi \\neq 0$."
    ],
    "flashcards": [
      {
        "q": "Espace tangent de $M = f^{-1}(\\{0\\})$, $f$ submersion ?",
        "a": "$T_xM = \\text{Ker}\\, df(x)$, de dimension $n - k$ ; l'espace normal est engendré par les gradients $\\nabla f_i(x)$."
      },
      {
        "q": "Quelles sont les étapes de la preuve de $T_xM = \\text{Ker}\\, df(x)$ ?",
        "a": "Inclusion directe en dérivant $f \\circ \\gamma = 0$ ; puis fonctions implicites pour fabriquer $d$ directions tangentes indépendantes ; égalité par les dimensions."
      },
      {
        "q": "Énoncer le théorème des fonctions implicites.",
        "a": "Si $F(a, b) = 0$ avec $F$ de classe $\\mathcal{C}^p$ et $\\partial_y F(a, b)$ inversible, alors près de $(a, b)$, $F(x, y) = 0 \\iff y = g(x)$ avec $g$ de classe $\\mathcal{C}^p$."
      },
      {
        "q": "Énoncer le théorème des extrema liés.",
        "a": "Si $x_0$ est un extremum local de $F$ sur $g^{-1}(0)$ et si les $dg_i(x_0)$ sont libres, alors $\\nabla F(x_0) = \\sum \\lambda_i \\nabla g_i(x_0)$."
      },
      {
        "q": "Énoncer le lemme de Poincaré.",
        "a": "Sur un ouvert étoilé, toute forme différentielle fermée de classe $\\mathcal{C}^1$ est exacte."
      },
      {
        "q": "Énoncer la formule de Stokes.",
        "a": "Pour $M$ sous-variété compacte orientée à bord de dimension $k$ et $\\omega$ une $(k-1)$-forme $\\mathcal{C}^1$ : $\\int_{\\partial M}\\omega = \\int_M d\\omega$."
      }
    ]
  },
  "L3-NUM": {
    "title": "L3-NUM : Analyse numérique : interpolation, quadratures et résolution matricielle",
    "domain": "Analyse Numérique",
    "objectives": [
      "Analyser le conditionnement d'un système linéaire et utiliser les méthodes directes (LU, Cholesky, QR).",
      "Connaître les méthodes itératives (Jacobi, Gauss-Seidel) et leur critère de convergence par le rayon spectral.",
      "Construire le polynôme d'interpolation de Lagrange et démontrer la formule de l'erreur d'interpolation.",
      "Utiliser les formules de quadrature (trapèzes, Simpson, Gauss) simples et composites, avec leur erreur.",
      "Connaître la méthode de Newton et les schémas d'Euler et de Runge-Kutta pour les équations différentielles."
    ],
    "keyPoints": [
      {
        "title": "1. Systèmes linéaires $Ax = b$ : conditionnement et méthodes directes",
        "content": "• **Conditionnement** : pour $A \\in \\text{GL}_n(\\mathbb{R})$ et une norme subordonnée, $\\kappa(A) = \\|A\\| \\, \\|A^{-1}\\| \\ge 1$. Si $Ax = b$ et $A(x + \\delta x) = b + \\delta b$ :\n$$\\frac{\\|\\delta x\\|}{\\|x\\|} \\le \\kappa(A) \\frac{\\|\\delta b\\|}{\\|b\\|}$$\nPour la norme 2 et $A$ symétrique définie positive, $\\kappa_2(A) = \\frac{\\lambda_{\\max}}{\\lambda_{\\min}}$.\n• **Décomposition LU** : pour $A$ inversible, il existe une unique écriture $A = LU$ ($L$ triangulaire inférieure à diagonale unité, $U$ triangulaire supérieure) si et seulement si tous les mineurs principaux dominants de $A$ sont non nuls. Sinon, on pivote : $PA = LU$ avec $P$ matrice de permutation (existe toujours). Coût : environ $\\frac{2}{3}n^3$ opérations.\n• **Cholesky** : si $A$ est **symétrique définie positive**, il existe une unique $L$ triangulaire inférieure à diagonale strictement positive telle que $A = L \\, {}^tL$ (coût environ $\\frac{1}{3}n^3$).\n• **QR** : toute $A$ inversible s'écrit $A = QR$ avec $Q$ orthogonale et $R$ triangulaire supérieure (Gram-Schmidt, ou réflexions de Householder, numériquement plus stables)."
      },
      {
        "title": "2. Méthodes itératives",
        "content": "• **Principe** : on écrit $A = M - N$ avec $M$ facile à inverser et l'on itère $x_{k+1} = M^{-1}N x_k + M^{-1}b$. L'erreur $e_k = x_k - x$ vérifie $e_{k+1} = B e_k$ avec $B = M^{-1}N$.\n• **Critère** : la méthode converge pour tout $x_0$ si et seulement si le rayon spectral $\\rho(B) < 1$. (Si $\\rho(B) < 1$, il existe une norme subordonnée telle que $\\|B\\| < 1$ ; si $\\rho(B) \\ge 1$, un vecteur propre associé fournit une erreur qui ne tend pas vers 0.)\n• **Jacobi** : $M = D$ (diagonale de $A$). **Gauss-Seidel** : $M = D - E$ (partie triangulaire inférieure de $A$, avec $A = D - E - F$).\n• **Conditions suffisantes** : si $A$ est à **diagonale strictement dominante** ($|a_{ii}| > \\sum_{j \\neq i} |a_{ij}|$), Jacobi et Gauss-Seidel convergent ; si $A$ est symétrique définie positive, Gauss-Seidel converge.\n• **Vitesse** : asymptotiquement, l'erreur est multipliée par environ $\\rho(B)$ à chaque itération."
      },
      {
        "title": "3. Interpolation de Lagrange",
        "content": "• **Existence et unicité** : pour $n+1$ abscisses **distinctes** $x_0, \\dots, x_n$ et des valeurs $y_0, \\dots, y_n$, il existe un unique $P \\in \\mathbb{R}_n[X]$ tel que $P(x_i) = y_i$ pour tout $i$ :\n$$P = \\sum_{i=0}^n y_i L_i, \\qquad L_i(x) = \\prod_{j \\neq i}\\frac{x - x_j}{x_i - x_j}$$\n(Unicité : la différence de deux solutions est de degré $\\le n$ et a $n+1$ racines.)\n• **Forme de Newton** : $P(x) = f[x_0] + f[x_0, x_1](x - x_0) + \\dots + f[x_0, \\dots, x_n]\\prod_{i<n}(x - x_i)$ avec les **différences divisées** $f[x_i, \\dots, x_{i+k}] = \\frac{f[x_{i+1}, \\dots, x_{i+k}] - f[x_i, \\dots, x_{i+k-1}]}{x_{i+k} - x_i}$ ; ajouter un point ne demande qu'un terme de plus.\n• **Erreur** : si $f \\in \\mathcal{C}^{n+1}([a ; b])$ et les $x_i \\in [a ; b]$, pour tout $x \\in [a ; b]$, il existe $\\xi_x$ dans le plus petit intervalle contenant $x, x_0, \\dots, x_n$ tel que\n$$f(x) - P(x) = \\frac{f^{(n+1)}(\\xi_x)}{(n+1)!}\\prod_{i=0}^n (x - x_i)$$\n• **Runge et Tchebychev** : avec des nœuds équirépartis, l'erreur peut tendre vers l'infini quand $n$ croît (exemple $f(x) = \\frac{1}{1 + 25x^2}$ sur $[-1 ; 1]$). Les nœuds de Tchebychev $x_k = \\cos\\left(\\frac{(2k+1)\\pi}{2n+2}\\right)$ minimisent $\\max_{[-1;1]}\\left|\\prod (x - x_i)\\right|$, qui vaut alors $2^{-n}$."
      },
      {
        "title": "4. Démonstration : formule de l'erreur d'interpolation",
        "content": "**Théorème.** Soit $f \\in \\mathcal{C}^{n+1}([a ; b])$, $x_0, \\dots, x_n$ distincts dans $[a ; b]$ et $P$ le polynôme d'interpolation de $f$ en ces points. Pour tout $x \\in [a ; b]$, il existe $\\xi_x$ dans le plus petit intervalle $I_x$ contenant $x, x_0, \\dots, x_n$ tel que $f(x) - P(x) = \\frac{f^{(n+1)}(\\xi_x)}{(n+1)!}\\pi(x)$, avec $\\pi(t) = \\prod_{i=0}^n (t - x_i)$.\n\n**Démonstration.**\n1. Si $x$ est l'un des $x_i$, les deux membres sont nuls ; tout $\\xi_x$ convient. Supposons désormais $x \\notin \\{x_0, \\dots, x_n\\}$, de sorte que $\\pi(x) \\neq 0$.\n2. **Fonction auxiliaire.** Posons $K = \\frac{f(x) - P(x)}{\\pi(x)}$ et $\\phi(t) = f(t) - P(t) - K\\pi(t)$ pour $t \\in [a ; b]$. Alors $\\phi \\in \\mathcal{C}^{n+1}$.\n3. **Zéros.** $\\phi(x_i) = f(x_i) - P(x_i) - 0 = 0$ pour $0 \\le i \\le n$, et $\\phi(x) = 0$ par choix de $K$ : $\\phi$ s'annule en $n+2$ points distincts de $I_x$.\n4. **Rolle itéré.** Entre deux zéros consécutifs de $\\phi$, le théorème de Rolle fournit un zéro de $\\phi'$ : $\\phi'$ a au moins $n+1$ zéros distincts dans $I_x$. En itérant, $\\phi^{(j)}$ a au moins $n+2-j$ zéros dans $I_x$ ; donc $\\phi^{(n+1)}$ s'annule en un point $\\xi_x \\in I_x$.\n5. **Calcul.** $P$ est de degré $\\le n$, donc $P^{(n+1)} = 0$ ; $\\pi$ est unitaire de degré $n+1$, donc $\\pi^{(n+1)} = (n+1)!$. Ainsi $0 = \\phi^{(n+1)}(\\xi_x) = f^{(n+1)}(\\xi_x) - K(n+1)!$.\n6. D'où $K = \\frac{f^{(n+1)}(\\xi_x)}{(n+1)!}$, c'est-à-dire la formule annoncée. $\\square$\n\n**Corollaire.** $\\|f - P\\|_{\\infty, [a;b]} \\le \\frac{\\|f^{(n+1)}\\|_\\infty}{(n+1)!}\\|\\pi\\|_{\\infty, [a;b]}$."
      },
      {
        "title": "5. Intégration numérique",
        "content": "Une formule de quadrature $\\int_a^b f \\approx \\sum w_i f(x_i)$ est **de degré d'exactitude $m$** si elle est exacte pour tous les polynômes de degré $\\le m$ mais pas pour $X^{m+1}$.\n• **Trapèzes** : $\\int_a^b f \\approx \\frac{b-a}{2}(f(a) + f(b))$ ; degré 1 ; erreur $-\\frac{(b-a)^3}{12}f''(\\xi)$ pour $f \\in \\mathcal{C}^2$.\n• **Simpson** : $\\int_a^b f \\approx \\frac{b-a}{6}\\left(f(a) + 4f\\left(\\frac{a+b}{2}\\right) + f(b)\\right)$ ; degré 3 ; erreur $-\\frac{(b-a)^5}{2880}f^{(4)}(\\xi)$ pour $f \\in \\mathcal{C}^4$.\n• **Méthodes composites** : en découpant $[a ; b]$ en $N$ intervalles de longueur $H = \\frac{b-a}{N}$, l'erreur devient $-\\frac{(b-a)H^2}{12}f''(\\xi)$ (trapèzes, ordre 2) et $-\\frac{(b-a)H^4}{2880}f^{(4)}(\\xi)$ (Simpson, ordre 4).\n• **Gauss-Legendre** : avec $n+1$ nœuds choisis comme racines du polynôme de Legendre de degré $n+1$ (et des poids adaptés), la formule a le degré d'exactitude maximal $2n+1$.\n• **Newton** pour $f(x) = 0$ : $x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)}$. Si $f \\in \\mathcal{C}^2$ et $r$ est une racine **simple** ($f'(r) \\neq 0$), la convergence est locale et **quadratique** : $|x_{k+1} - r| \\le C|x_k - r|^2$ pour $x_0$ assez proche de $r$.\n• **EDO** $y' = f(t, y)$, $f$ lipschitzienne en $y$ : Euler explicite $y_{n+1} = y_n + hf(t_n, y_n)$ est d'ordre 1 (erreur globale $O(h)$) ; Runge-Kutta classique (RK4) est d'ordre 4 (erreur globale $O(h^4)$). Les schémas explicites demandent un pas petit sur les problèmes raides."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre un système par la décomposition de Cholesky $A = L\\,{}^tL$",
        "example": "Résoudre $Ax = b$ avec $A = \\begin{pmatrix} 4 & 2 \\\\ 2 & 10 \\end{pmatrix}$ et $b = \\begin{pmatrix} 6 \\\\ 18 \\end{pmatrix}$.",
        "steps": [
          "**Étape 1 (Hypothèse)** : $A$ est symétrique, $a_{11} = 4 > 0$ et $\\det A = 36 > 0$ : $A$ est définie positive (critère de Sylvester).",
          "**Étape 2 (Calcul de $L$)** : $l_{11}^2 = 4$, donc $l_{11} = 2$ ; $l_{11}l_{21} = 2$, donc $l_{21} = 1$ ; $l_{21}^2 + l_{22}^2 = 10$, donc $l_{22} = 3$. Ainsi $L = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$.",
          "**Étape 3 (Descente $Ly = b$ puis remontée $ {}^tLx = y$)** : $2y_1 = 6$, $y_1 + 3y_2 = 18$, d'où $y = (3, 5)$ ; puis $3x_2 = 5$ et $2x_1 + x_2 = 3$, d'où $x_2 = \\frac{5}{3}$ et $x_1 = \\frac{2}{3}$.",
          "**Conclusion** : $x = \\left(\\frac{2}{3}, \\frac{5}{3}\\right)$. Vérification : $4 \\times \\frac{2}{3} + 2 \\times \\frac{5}{3} = 6$ et $2 \\times \\frac{2}{3} + 10 \\times \\frac{5}{3} = 18$."
        ]
      },
      {
        "title": "Méthode : Construire un polynôme d'interpolation et majorer l'erreur",
        "example": "Interpoler $f = \\sin$ aux nœuds $0, h, 2h$ avec $h = \\frac{\\pi}{4}$, puis majorer l'erreur sur $\\left[0 ; \\frac{\\pi}{2}\\right]$.",
        "steps": [
          "**Étape 1 (Différences divisées)** : $f[0] = 0$, $f[0, h] = \\frac{\\sqrt{2}/2}{h}$, $f[h, 2h] = \\frac{1 - \\sqrt{2}/2}{h}$, $f[0, h, 2h] = \\frac{1 - \\sqrt{2}}{2h^2}$.",
          "**Étape 2 (Forme de Newton)** : $P(x) = \\frac{\\sqrt{2}}{2h}x + \\frac{1 - \\sqrt{2}}{2h^2}x(x - h)$. Contrôle : $P(2h) = \\sqrt{2} + (1 - \\sqrt{2}) = 1 = \\sin\\frac{\\pi}{2}$.",
          "**Étape 3 (Majoration)** : $|\\sin'''| \\le 1$, et $|x(x - h)(x - 2h)|$ atteint sur $[0 ; 2h]$ son maximum $\\frac{2h^3}{3\\sqrt{3}}$ en $x = h \\pm \\frac{h}{\\sqrt{3}}$. Donc $|\\sin x - P(x)| \\le \\frac{1}{6} \\times \\frac{2h^3}{3\\sqrt{3}} = \\frac{h^3}{9\\sqrt{3}} \\approx 0{,}0311$.",
          "**Conclusion** : l'erreur est inférieure à $0{,}032$ sur $\\left[0 ; \\frac{\\pi}{2}\\right]$. Par exemple en $\\frac{\\pi}{8}$ : $P\\left(\\frac{\\pi}{8}\\right) \\approx 0{,}4053$ et $\\sin\\frac{\\pi}{8} \\approx 0{,}3827$, écart $\\approx 0{,}0226$, conforme à la borne."
        ]
      }
    ],
    "traps": [
      "Cholesky exige une matrice symétrique **définie positive** : $\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$ est symétrique mais de valeurs propres $3$ et $-1$, et l'algorithme échoue ($l_{22}^2 = 1 - 4 < 0$).",
      "Pour une racine multiple, Newton ne converge que linéairement : pour $f(x) = x^2$, $x_{k+1} = \\frac{x_k}{2}$.",
      "Augmenter le nombre de nœuds équirépartis n'améliore pas forcément l'interpolation (phénomène de Runge) : préférer des nœuds de Tchebychev ou une interpolation par morceaux.",
      "Un petit déterminant ne signifie pas un mauvais conditionnement : $A = 10^{-1} I_{10}$ a pour déterminant $10^{-10}$ mais $\\kappa(A) = 1$.",
      "Jacobi et Gauss-Seidel ne convergent pas pour toute matrice inversible : il faut vérifier $\\rho(B) < 1$ ou une condition suffisante (diagonale strictement dominante, matrice symétrique définie positive pour Gauss-Seidel)."
    ],
    "flashcards": [
      {
        "q": "Ordre de convergence de la méthode de Newton pour une racine simple ?",
        "a": "Ordre 2 (convergence quadratique locale), si $f$ est de classe $\\mathcal{C}^2$ et $f'(r) \\neq 0$."
      },
      {
        "q": "Degré d'exactitude de la méthode de Simpson ?",
        "a": "3 : elle est exacte pour tout polynôme de degré $\\le 3$."
      },
      {
        "q": "Formule de l'erreur d'interpolation de Lagrange ?",
        "a": "$f(x) - P(x) = \\frac{f^{(n+1)}(\\xi_x)}{(n+1)!}\\prod_{i=0}^n (x - x_i)$, avec $\\xi_x$ dans l'intervalle contenant $x$ et les nœuds."
      },
      {
        "q": "Quel est l'outil central de la preuve de l'erreur d'interpolation ?",
        "a": "Le théorème de Rolle appliqué $n+1$ fois à $\\phi = f - P - K\\pi$, qui a $n+2$ zéros."
      },
      {
        "q": "Critère de convergence d'une méthode itérative linéaire ?",
        "a": "$x_{k+1} = Bx_k + c$ converge pour tout $x_0$ si et seulement si $\\rho(B) < 1$."
      },
      {
        "q": "Quand la décomposition de Cholesky existe-t-elle ?",
        "a": "Pour toute matrice symétrique définie positive ; elle est unique si l'on impose une diagonale strictement positive."
      }
    ]
  },
  "L3-PROG": {
    "title": "L3-PROG : Optimisation et programmation linéaire (algorithme du simplexe)",
    "domain": "Optimisation",
    "objectives": [
      "Formaliser un programme linéaire sous forme standard et définir les solutions de base admissibles.",
      "Énoncer le théorème fondamental de la programmation linéaire (optimum atteint en un sommet).",
      "Dérouler l'algorithme du simplexe (variable entrante, test du ratio, pivot) et détecter un problème non borné.",
      "Écrire le dual d'un programme linéaire, démontrer la dualité faible et utiliser la dualité forte et les écarts complémentaires.",
      "Énoncer les conditions de Karush-Kuhn-Tucker pour un problème d'optimisation convexe."
    ],
    "keyPoints": [
      {
        "title": "1. Polyèdres et forme standard",
        "content": "• **Polyèdre** : intersection finie de demi-espaces fermés, $P = \\{x \\in \\mathbb{R}^n \\mid Ax \\le b\\}$ ; il est convexe et fermé. Un polyèdre borné est un **polytope**.\n• **Point extrême (sommet)** : $x \\in P$ qui n'est le milieu d'aucun segment $[y ; z] \\subset P$ avec $y \\neq z$.\n• **Forme standard** :\n$$\\max_{x \\in \\mathbb{R}^n} \\; {}^tc\\,x \\quad \\text{sous} \\quad Ax = b, \\; x \\ge 0$$\navec $A \\in \\mathcal{M}_{m,n}(\\mathbb{R})$ de rang $m \\le n$.\n• **Passage en forme standard** : une contrainte $ {}^ta_i x \\le b_i$ devient $ {}^ta_i x + s_i = b_i$ avec une **variable d'écart** $s_i \\ge 0$ ; une variable libre s'écrit $x_j = x_j^+ - x_j^-$ avec $x_j^\\pm \\ge 0$ ; minimiser $ {}^tc\\,x$ revient à maximiser $-{}^tc\\,x$."
      },
      {
        "title": "2. Solutions de base admissibles et théorème fondamental",
        "content": "• **Base** : ensemble $B$ de $m$ indices tel que la sous-matrice $A_B$ soit inversible ; $N$ désigne les autres indices. La **solution de base** associée est $x_N = 0$, $x_B = A_B^{-1}b$.\n• **Solution de base admissible** (SBA) : solution de base avec $x_B \\ge 0$. **Théorème** : les SBA sont exactement les sommets du polyèdre $\\{Ax = b, \\, x \\ge 0\\}$. Il y en a au plus $\\binom{n}{m}$.\n• **Dégénérescence** : une SBA est dégénérée si une variable de base est nulle ; plusieurs bases peuvent alors définir le même sommet.\n• **Théorème fondamental** : pour un programme linéaire sous forme standard,\n  1. si l'ensemble admissible est non vide, il possède au moins un sommet ;\n  2. si le problème admet une solution optimale, il existe une **SBA optimale** ;\n  3. si l'ensemble admissible est non vide et l'objectif majoré sur cet ensemble, une solution optimale existe.\n• L'ensemble des solutions optimales est une face du polyèdre : il peut y avoir une infinité d'optima (une arête entière, par exemple)."
      },
      {
        "title": "3. Algorithme du simplexe",
        "content": "On part d'une SBA de base $B$.\n• **Coûts réduits** : $ {}^t\\bar{c}_N = {}^tc_N - {}^tc_B A_B^{-1}A_N$ ; l'objectif s'écrit $z = {}^tc_B A_B^{-1}b + {}^t\\bar{c}_N x_N$.\n• **Optimalité** (en maximisation) : si $\\bar{c}_j \\le 0$ pour tout $j \\in N$, la SBA courante est optimale.\n• **Variable entrante** : un indice $e$ avec $\\bar{c}_e > 0$ (règle de Dantzig : le plus grand).\n• **Variable sortante** (test du ratio) : avec $\\bar{A} = A_B^{-1}A$ et $\\bar{b} = A_B^{-1}b$, on choisit\n$$i^{\\ast} \\in \\arg\\min \\left\\{ \\frac{\\bar{b}_i}{\\bar{a}_{ie}} \\;\\middle|\\; \\bar{a}_{ie} > 0 \\right\\}$$\nSi aucun $\\bar{a}_{ie}$ n'est $> 0$, le problème est **non borné**.\n• **Pivot** sur $\\bar{a}_{i^{\\ast}e}$, puis itération.\n• **Terminaison** : sans dégénérescence, l'objectif augmente strictement et l'algorithme s'arrête (nombre fini de bases). En cas de dégénérescence, il peut **cycler** ; la **règle de Bland** (plus petit indice) l'évite.\n• **Initialisation** : si $0$ n'est pas admissible, une **phase I** (minimiser la somme de variables artificielles) fournit une SBA de départ ou prouve que le problème est irréalisable."
      },
      {
        "title": "4. Dualité : énoncés et démonstration de la dualité faible",
        "content": "• **Primal** $(P)$ : $\\max {}^tc\\,x$ sous $Ax \\le b$, $x \\ge 0$. **Dual** $(D)$ : $\\min {}^tb\\,y$ sous $ {}^tA\\,y \\ge c$, $y \\ge 0$. Le dual du dual est le primal.\n\n**Théorème (dualité faible).** Si $x$ est admissible pour $(P)$ et $y$ admissible pour $(D)$, alors $ {}^tc\\,x \\le {}^tb\\,y$.\n\n**Démonstration.**\n1. Comme $x \\ge 0$ et $ {}^tA\\,y - c \\ge 0$ (composante par composante), le produit scalaire $ {}^t({}^tA\\,y - c)\\,x = \\sum_j ({}^tA\\,y - c)_j x_j$ est une somme de termes positifs : $ {}^tc\\,x \\le {}^t({}^tA\\,y)\\,x = {}^ty\\,Ax$.\n2. Comme $y \\ge 0$ et $b - Ax \\ge 0$ : $ {}^ty\\,(b - Ax) \\ge 0$, donc $ {}^ty\\,Ax \\le {}^ty\\,b = {}^tb\\,y$.\n3. En combinant : $ {}^tc\\,x \\le {}^ty\\,Ax \\le {}^tb\\,y$. $\\square$\n\n**Corollaires.**\n- Si $ {}^tc\\,x = {}^tb\\,y$ pour des points admissibles $x, y$, ils sont **optimaux** tous les deux (certificat d'optimalité).\n- Si $(P)$ est non borné, $(D)$ est irréalisable ; si $(D)$ est non borné, $(P)$ est irréalisable.\n- **Écarts complémentaires** : l'égalité $ {}^tc\\,x = {}^tb\\,y$ équivaut à l'égalité dans les étapes 1 et 2, c'est-à-dire, les termes étant positifs, à\n$$x_j\\,({}^tA\\,y - c)_j = 0 \\;\\; \\forall j \\qquad \\text{et} \\qquad y_i\\,(b - Ax)_i = 0 \\;\\; \\forall i$$\n• **Dualité forte** : si $(P)$ (ou $(D)$) admet une solution optimale, alors l'autre aussi et $\\max (P) = \\min (D)$. La preuve utilise le simplexe (coûts réduits à l'optimum) ou le **lemme de Farkas** : $Ax = b$, $x \\ge 0$ a une solution si et seulement s'il n'existe pas de $y$ avec $ {}^tA\\,y \\ge 0$ et $ {}^tb\\,y < 0$.\n• Ainsi $x^{\\ast}$ et $y^{\\ast}$ admissibles sont optimaux si et seulement s'ils vérifient les écarts complémentaires."
      },
      {
        "title": "5. Conditions de Karush-Kuhn-Tucker",
        "content": "On considère $\\min f(x)$ sous $g_i(x) \\le 0$ ($1 \\le i \\le p$), avec $f, g_i$ de classe $\\mathcal{C}^1$ sur $\\mathbb{R}^n$.\n• **Conditions KKT** en $x^{\\ast}$ admissible : il existe $\\mu_1, \\dots, \\mu_p$ tels que\n$$\\nabla f(x^{\\ast}) + \\sum_{i=1}^p \\mu_i \\nabla g_i(x^{\\ast}) = 0, \\qquad \\mu_i \\ge 0, \\qquad \\mu_i\\, g_i(x^{\\ast}) = 0$$\n(les multiplicateurs des contraintes inactives sont nuls).\n• **Nécessité** : si $x^{\\ast}$ est un minimum local et si les contraintes sont **qualifiées** en $x^{\\ast}$ (par exemple contraintes affines, ou gradients des contraintes actives linéairement indépendants, ou, dans le cas convexe, condition de Slater : existence de $\\tilde{x}$ avec $g_i(\\tilde{x}) < 0$ pour tout $i$), alors les conditions KKT sont satisfaites.\n• **Suffisance** : si $f$ et les $g_i$ sont **convexes**, tout point admissible vérifiant KKT est un minimum global.\n• **Lien avec la programmation linéaire** : pour un programme linéaire, les multiplicateurs KKT sont une solution du dual et la condition $\\mu_i g_i(x^{\\ast}) = 0$ est exactement la condition des écarts complémentaires."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire le dual et certifier l'optimalité",
        "example": "Former le dual de : $\\max\\, 3x_1 + 2x_2$ sous $x_1 + 2x_2 \\le 4$, $2x_1 + x_2 \\le 5$, $x_1, x_2 \\ge 0$, puis vérifier que $x^{\\ast} = (2, 1)$ est optimal.",
        "steps": [
          "**Étape 1 (Données)** : $c = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$, $b = \\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix}$, $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$.",
          "**Étape 2 (Dual)** : une variable duale $y_i \\ge 0$ par contrainte, une contrainte duale par variable primale : $\\min\\, 4y_1 + 5y_2$ sous $y_1 + 2y_2 \\ge 3$, $2y_1 + y_2 \\ge 2$, $y_1, y_2 \\ge 0$.",
          "**Étape 3 (Écarts complémentaires)** : $x_1^{\\ast}, x_2^{\\ast} > 0$ impose que les deux contraintes duales soient des égalités : $y_1 + 2y_2 = 3$ et $2y_1 + y_2 = 2$, d'où $y^{\\ast} = \\left(\\frac{1}{3}, \\frac{4}{3}\\right) \\ge 0$ (admissible). Les deux contraintes primales sont saturées en $x^{\\ast}$ ($2 + 2 = 4$, $4 + 1 = 5$), ce qui est compatible avec $y^{\\ast} > 0$.",
          "**Conclusion** : $ {}^tc\\,x^{\\ast} = 6 + 2 = 8$ et $ {}^tb\\,y^{\\ast} = \\frac{4}{3} + \\frac{20}{3} = 8$. Par la dualité faible, $x^{\\ast}$ et $y^{\\ast}$ sont optimaux, de valeur commune $8$."
        ]
      },
      {
        "title": "Méthode : Dérouler l'algorithme du simplexe",
        "example": "Résoudre par le simplexe : $\\max\\, Z = 3x_1 + 2x_2$ sous $x_1 + 2x_2 \\le 4$, $2x_1 + x_2 \\le 5$, $x_1, x_2 \\ge 0$.",
        "steps": [
          "**Étape 1 (Forme standard)** : avec des variables d'écart $s_1, s_2 \\ge 0$ : $x_1 + 2x_2 + s_1 = 4$ et $2x_1 + x_2 + s_2 = 5$. Base initiale $(s_1, s_2)$ : $x = (0, 0)$, $s = (4, 5)$, $Z = 0$.",
          "**Étape 2 (Entrée)** : coûts réduits $\\bar{c}_1 = 3$, $\\bar{c}_2 = 2$ ; $x_1$ entre (plus grand coût réduit).",
          "**Étape 3 (Ratio)** : ligne 1 : $\\frac{4}{1} = 4$ ; ligne 2 : $\\frac{5}{2} = 2{,}5$. Le minimum est en ligne 2 : $s_2$ sort, pivot $2$.",
          "**Étape 4 (Pivot)** : $x_1 = 2{,}5 - 0{,}5x_2 - 0{,}5s_2$ ; la ligne 1 devient $1{,}5x_2 + s_1 - 0{,}5s_2 = 1{,}5$ ; $Z = 3(2{,}5 - 0{,}5x_2 - 0{,}5s_2) + 2x_2 = 7{,}5 + 0{,}5x_2 - 1{,}5s_2$.",
          "**Étape 5 (Deuxième itération)** : $\\bar{c}_{x_2} = 0{,}5 > 0$, $x_2$ entre ; seul ratio : $\\frac{1{,}5}{1{,}5} = 1$ (ligne 1), $s_1$ sort. On obtient $x_2 = 1 - \\frac{2}{3}s_1 + \\frac{1}{3}s_2$, $x_1 = 2 + \\frac{1}{3}s_1 - \\frac{2}{3}s_2$ et $Z = 8 - \\frac{1}{3}s_1 - \\frac{4}{3}s_2$.",
          "**Conclusion** : tous les coûts réduits sont négatifs : l'optimum est $(x_1^{\\ast}, x_2^{\\ast}) = (2, 1)$, $Z^{\\ast} = 8$. Les opposés des coûts réduits des variables d'écart, $\\left(\\frac{1}{3}, \\frac{4}{3}\\right)$, sont la solution duale."
        ]
      }
    ],
    "traps": [
      "Si, pour la variable entrante, tous les coefficients de la colonne pivot sont $\\le 0$, le problème est non borné : on peut augmenter indéfiniment cette variable sans violer les contraintes.",
      "Sens des inégalités au passage au dual : pour un primal $\\max$ avec contraintes $\\le$ et $x \\ge 0$, le dual est un $\\min$ avec contraintes $\\ge$ et $y \\ge 0$ ; une contrainte primale d'égalité donne une variable duale de signe quelconque.",
      "La dégénérescence peut faire stagner, voire cycler, le simplexe (pivots sans gain) : utiliser la règle de Bland garantit la terminaison.",
      "Un optimum atteint en un sommet n'est pas forcément unique : pour $\\max\\, x_1 + x_2$ sous $x_1 + x_2 \\le 1$, $x \\ge 0$, tout le segment joignant $(1, 0)$ et $(0, 1)$ est optimal.",
      "Si le primal est irréalisable, le dual n'est pas forcément non borné : les deux problèmes peuvent être irréalisables simultanément."
    ],
    "flashcards": [
      {
        "q": "Énoncer la dualité faible et sa preuve en une ligne.",
        "a": "$ {}^tc\\,x \\le {}^ty\\,Ax \\le {}^tb\\,y$ pour $x, y$ admissibles, en utilisant $x \\ge 0$, $ {}^tA\\,y \\ge c$, puis $y \\ge 0$, $Ax \\le b$."
      },
      {
        "q": "Énoncer la dualité forte en programmation linéaire.",
        "a": "Si le primal ou le dual admet une solution optimale, les deux en admettent et $\\max\\,{}^tc\\,x = \\min\\,{}^tb\\,y$."
      },
      {
        "q": "Quelle caractérisation géométrique ont les solutions de base admissibles ?",
        "a": "Ce sont exactement les sommets (points extrêmes) du polyèdre admissible."
      },
      {
        "q": "Critère d'arrêt du simplexe en maximisation ?",
        "a": "Tous les coûts réduits sont $\\le 0$ : la SBA courante est optimale."
      },
      {
        "q": "Énoncer les conditions des écarts complémentaires.",
        "a": "$x_j({}^tA\\,y - c)_j = 0$ pour tout $j$ et $y_i(b - Ax)_i = 0$ pour tout $i$ ; avec l'admissibilité, elles caractérisent l'optimalité du couple $(x, y)$."
      },
      {
        "q": "Quand les conditions KKT sont-elles suffisantes ?",
        "a": "Lorsque l'objectif et les contraintes $g_i$ sont convexes : un point admissible vérifiant KKT est alors un minimum global."
      }
    ]
  },
  "L3-PRC": {
    "title": "L3-PRC : Variables aléatoires à densité, convergence en loi et Théorème Central Limite",
    "domain": "Probabilités",
    "objectives": [
      "Définir les variables aléatoires à densité, l'espérance, la variance et la fonction de répartition.",
      "Démontrer les inégalités de Markov et de Bienaymé-Tchebychev et la loi faible des grands nombres.",
      "Définir la fonction caractéristique et énoncer ses propriétés (moments, indépendance, caractérisation de la loi).",
      "Distinguer les convergences presque sûre, dans $L^p$, en probabilité et en loi, avec contre-exemples.",
      "Énoncer la loi forte des grands nombres et le théorème central limite, et démontrer ce dernier par les fonctions caractéristiques."
    ],
    "keyPoints": [
      {
        "title": "1. Variables à densité et fonction de répartition",
        "content": "• **Variable à densité** : $X$ réelle sur $(\\Omega, \\mathcal{F}, \\mathbb{P})$ admet la densité $f_X$ (borélienne, positive, d'intégrale 1) si $\\mathbb{P}(X \\in B) = \\int_B f_X(t) \\, dt$ pour tout borélien $B$. Alors $\\mathbb{P}(X = a) = 0$ pour tout $a$.\n• **Fonction de répartition** : $F_X(x) = \\mathbb{P}(X \\le x) = \\int_{-\\infty}^x f_X(t) \\, dt$. Elle est croissante, de limites $0$ et $1$, et **continue** ; en tout point où $f_X$ est continue, $F_X$ est dérivable et $F_X'(x) = f_X(x)$ (et $F_X' = f_X$ presque partout en général).\n• **Moments** : si $\\int |t| f_X(t) \\, dt < +\\infty$, $\\mathbb{E}[X] = \\int t f_X(t) \\, dt$ ; **transfert** : $\\mathbb{E}[g(X)] = \\int g(t) f_X(t) \\, dt$ dès que $\\int |g| f_X < +\\infty$. Variance : $\\text{Var}(X) = \\mathbb{E}[(X - \\mathbb{E}X)^2] = \\mathbb{E}[X^2] - (\\mathbb{E}X)^2$.\n• **Lois usuelles** :\n  1. uniforme $\\mathcal{U}([a ; b])$ : $f = \\frac{1}{b-a}\\mathbf{1}_{[a;b]}$, $\\mathbb{E} = \\frac{a+b}{2}$, $\\text{Var} = \\frac{(b-a)^2}{12}$ ;\n  2. exponentielle $\\mathcal{E}(\\lambda)$ : $f(x) = \\lambda e^{-\\lambda x}\\mathbf{1}_{x \\ge 0}$, $\\mathbb{E} = \\frac{1}{\\lambda}$, $\\text{Var} = \\frac{1}{\\lambda^2}$, loi sans mémoire ;\n  3. normale $\\mathcal{N}(\\mu, \\sigma^2)$ : $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$, et $\\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$."
      },
      {
        "title": "2. Indépendance, covariance et inégalités",
        "content": "• **Indépendance** : $X$ et $Y$ sont indépendantes si $\\mathbb{P}(X \\in A, Y \\in B) = \\mathbb{P}(X \\in A)\\mathbb{P}(Y \\in B)$ pour tous boréliens. Pour un couple à densité, cela équivaut à $f_{(X,Y)}(x, y) = f_X(x)f_Y(y)$ presque partout.\n• Si $X, Y$ sont indépendantes et intégrables, $XY$ est intégrable et $\\mathbb{E}[XY] = \\mathbb{E}[X]\\mathbb{E}[Y]$.\n• **Covariance** : $\\text{Cov}(X, Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y]$ ; $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\,\\text{Cov}(X, Y)$. Des variables **non corrélées** (en particulier indépendantes) ont des variances qui s'additionnent.\n• **Inégalité de Markov** : si $X \\ge 0$ et $a > 0$, $\\mathbb{P}(X \\ge a) \\le \\frac{\\mathbb{E}[X]}{a}$.\n• **Inégalité de Bienaymé-Tchebychev** : si $X$ admet une variance, pour tout $\\varepsilon > 0$, $\\mathbb{P}(|X - \\mathbb{E}X| \\ge \\varepsilon) \\le \\frac{\\text{Var}(X)}{\\varepsilon^2}$.\n• **Somme de variables indépendantes à densité** : $f_{X+Y} = f_X \\ast f_Y$ (produit de convolution)."
      },
      {
        "title": "3. Démonstration : Bienaymé-Tchebychev et loi faible des grands nombres",
        "content": "**Inégalité de Markov.** Soit $X \\ge 0$ et $a > 0$. On a $a\\mathbf{1}_{\\{X \\ge a\\}} \\le X$ point par point ; en prenant l'espérance (croissance), $a\\,\\mathbb{P}(X \\ge a) \\le \\mathbb{E}[X]$. $\\square$\n\n**Inégalité de Bienaymé-Tchebychev.** Soit $X$ de carré intégrable, $m = \\mathbb{E}[X]$, $\\varepsilon > 0$.\n1. Les événements $\\{|X - m| \\ge \\varepsilon\\}$ et $\\{(X - m)^2 \\ge \\varepsilon^2\\}$ sont égaux (croissance de $t \\mapsto t^2$ sur $\\mathbb{R}^+$).\n2. Markov appliqué à la variable positive $(X - m)^2$ et à $a = \\varepsilon^2$ : $\\mathbb{P}((X - m)^2 \\ge \\varepsilon^2) \\le \\frac{\\mathbb{E}[(X - m)^2]}{\\varepsilon^2} = \\frac{\\text{Var}(X)}{\\varepsilon^2}$. $\\square$\n\n**Loi faible des grands nombres ($L^2$).** Soit $(X_n)_{n \\ge 1}$ une suite de variables deux à deux non corrélées (par exemple indépendantes), de même espérance $\\mu$ et de même variance $\\sigma^2 < +\\infty$, et $\\bar{X}_n = \\frac{1}{n}\\sum_{k=1}^n X_k$. Alors pour tout $\\varepsilon > 0$, $\\mathbb{P}(|\\bar{X}_n - \\mu| \\ge \\varepsilon) \\to 0$.\n1. **Espérance** : par linéarité, $\\mathbb{E}[\\bar{X}_n] = \\frac{1}{n}\\sum \\mathbb{E}[X_k] = \\mu$.\n2. **Variance** : les covariances croisées étant nulles, $\\text{Var}\\left(\\sum_{k=1}^n X_k\\right) = \\sum_{k=1}^n \\text{Var}(X_k) = n\\sigma^2$, donc $\\text{Var}(\\bar{X}_n) = \\frac{n\\sigma^2}{n^2} = \\frac{\\sigma^2}{n}$.\n3. **Bienaymé-Tchebychev** : $\\mathbb{P}(|\\bar{X}_n - \\mu| \\ge \\varepsilon) \\le \\frac{\\sigma^2}{n\\varepsilon^2} \\xrightarrow[n \\to \\infty]{} 0$. $\\square$\n\nLa démonstration fournit en plus une **vitesse** explicite en $\\frac{1}{n}$, utile pour dimensionner un échantillon."
      },
      {
        "title": "4. Fonctions caractéristiques",
        "content": "• **Définition** : $\\Phi_X(t) = \\mathbb{E}[e^{itX}]$, $t \\in \\mathbb{R}$ ; pour $X$ à densité, $\\Phi_X(t) = \\int e^{itx}f_X(x) \\, dx$.\n• **Propriétés** :\n  1. $\\Phi_X(0) = 1$, $|\\Phi_X(t)| \\le 1$, et $\\Phi_X$ est uniformément continue sur $\\mathbb{R}$ ; $\\Phi_{aX + b}(t) = e^{ibt}\\Phi_X(at)$.\n  2. **Indépendance** : si $X$ et $Y$ sont indépendantes, $\\Phi_{X+Y} = \\Phi_X \\, \\Phi_Y$.\n  3. **Moments** : si $\\mathbb{E}[|X|^k] < +\\infty$, $\\Phi_X$ est de classe $\\mathcal{C}^k$ et $\\Phi_X^{(j)}(0) = i^j\\,\\mathbb{E}[X^j]$ pour $j \\le k$. En particulier, si $\\mathbb{E}[X^2] < +\\infty$ : $\\Phi_X(t) = 1 + it\\,\\mathbb{E}[X] - \\frac{t^2}{2}\\mathbb{E}[X^2] + o(t^2)$.\n  4. **Caractérisation** : deux variables ont la même loi si et seulement si elles ont la même fonction caractéristique.\n• **Exemples** : $\\mathcal{N}(\\mu, \\sigma^2)$ : $\\Phi(t) = e^{i\\mu t - \\sigma^2t^2/2}$ ; $\\mathcal{E}(\\lambda)$ : $\\Phi(t) = \\frac{\\lambda}{\\lambda - it}$ ; loi de Cauchy de densité $\\frac{1}{\\pi(1 + x^2)}$ : $\\Phi(t) = e^{-|t|}$.\n• **Conséquence** : la somme de deux gaussiennes indépendantes $\\mathcal{N}(\\mu_1, \\sigma_1^2)$ et $\\mathcal{N}(\\mu_2, \\sigma_2^2)$ suit $\\mathcal{N}(\\mu_1 + \\mu_2, \\sigma_1^2 + \\sigma_2^2)$."
      },
      {
        "title": "5. Modes de convergence",
        "content": "Soient $(X_n)$ et $X$ des variables aléatoires réelles.\n• **Presque sûre** : $\\mathbb{P}(X_n \\to X) = 1$.\n• **Dans $L^p$** ($p \\ge 1$) : $\\mathbb{E}[|X_n - X|^p] \\to 0$.\n• **En probabilité** : $\\forall \\varepsilon > 0$, $\\mathbb{P}(|X_n - X| > \\varepsilon) \\to 0$.\n• **En loi** : $\\mathbb{E}[g(X_n)] \\to \\mathbb{E}[g(X)]$ pour toute $g$ continue bornée ; de façon équivalente, $F_{X_n}(x) \\to F_X(x)$ en tout point $x$ où $F_X$ est **continue**. La convergence en loi ne concerne que les lois : les $X_n$ peuvent être définies sur des espaces différents.\n• **Théorème de Lévy** : $X_n \\xrightarrow{\\mathcal{L}} X$ si et seulement si $\\Phi_{X_n}(t) \\to \\Phi_X(t)$ pour tout $t \\in \\mathbb{R}$.\n• **Hiérarchie** : p.s. $\\implies$ en probabilité $\\implies$ en loi ; $L^p \\implies$ en probabilité (Markov) ; $L^q \\implies L^p$ pour $q \\ge p$. Réciproque partielle : la convergence en loi vers une **constante** implique la convergence en probabilité ; de toute suite convergeant en probabilité on peut extraire une sous-suite convergeant p.s."
      },
      {
        "title": "6. Loi forte des grands nombres et théorème central limite",
        "content": "Soit $(X_n)_{n \\ge 1}$ une suite de variables **indépendantes et de même loi** (i.i.d.) et $S_n = X_1 + \\dots + X_n$.\n• **Loi forte des grands nombres** : si $\\mathbb{E}[|X_1|] < +\\infty$, $\\frac{S_n}{n} \\xrightarrow{\\text{p.s.}} \\mu = \\mathbb{E}[X_1]$. (La loi faible, en probabilité, a été démontrée au point 3 sous hypothèse $L^2$.)\n• **Théorème central limite** : si $\\mathbb{E}[X_1^2] < +\\infty$ et $\\sigma^2 = \\text{Var}(X_1) > 0$,\n$$Z_n = \\frac{S_n - n\\mu}{\\sigma\\sqrt{n}} = \\sqrt{n}\\,\\frac{\\bar{X}_n - \\mu}{\\sigma} \\xrightarrow[n \\to \\infty]{\\mathcal{L}} \\mathcal{N}(0, 1)$$\nComme la fonction de répartition $\\Phi_{\\mathcal{N}}$ de $\\mathcal{N}(0, 1)$ est continue, pour tous $a \\le b$ : $\\mathbb{P}(a \\le Z_n \\le b) \\to \\int_a^b \\frac{e^{-t^2/2}}{\\sqrt{2\\pi}} \\, dt$.\n• **Lecture** : $\\bar{X}_n - \\mu$ est de l'ordre de $\\frac{\\sigma}{\\sqrt{n}}$ ; d'où l'intervalle de confiance asymptotique $\\left[\\bar{X}_n \\pm 1{,}96\\frac{\\sigma}{\\sqrt{n}}\\right]$ au niveau $95\\,\\%$.\n• **Cas binomial (Moivre-Laplace)** : si $S_n \\sim \\mathcal{B}(n, p)$, $\\frac{S_n - np}{\\sqrt{np(1-p)}} \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0, 1)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer le TCL à l'aide des fonctions caractéristiques",
        "example": "Soient $X_1, X_2, \\dots$ i.i.d. avec $\\mathbb{E}[X_1] = 0$ et $\\mathbb{E}[X_1^2] = 1$. Montrer que $Z_n = \\frac{1}{\\sqrt{n}}\\sum_{k=1}^n X_k$ converge en loi vers $\\mathcal{N}(0, 1)$.",
        "steps": [
          "**Étape 1 (Développement de $\\Phi = \\Phi_{X_1}$)** : $X_1$ ayant un moment d'ordre 2, $\\Phi$ est $\\mathcal{C}^2$ et $\\Phi(u) = 1 - \\frac{u^2}{2} + u^2\\eta(u)$ avec $\\eta(u) \\to 0$ quand $u \\to 0$.",
          "**Étape 2 (Indépendance)** : pour $t$ fixé, $\\Phi_{Z_n}(t) = \\Phi\\left(\\frac{t}{\\sqrt{n}}\\right)^n$, et l'on veut comparer cette quantité à $e^{-t^2/2} = \\left(e^{-t^2/(2n)}\\right)^n$.",
          "**Étape 3 (Comparaison sans logarithme)** : pour $a, b \\in \\mathbb{C}$ de modules $\\le 1$, $|a^n - b^n| = \\left|(a - b)\\sum_{k=0}^{n-1} a^k b^{n-1-k}\\right| \\le n|a - b|$. Avec $a = \\Phi\\left(\\frac{t}{\\sqrt{n}}\\right)$ et $b = e^{-t^2/(2n)} = 1 - \\frac{t^2}{2n} + O\\left(\\frac{1}{n^2}\\right)$ : $\\left|\\Phi_{Z_n}(t) - e^{-t^2/2}\\right| \\le n\\left|\\frac{t^2}{n}\\eta\\left(\\frac{t}{\\sqrt{n}}\\right) + O\\left(\\frac{1}{n^2}\\right)\\right| \\xrightarrow[n \\to \\infty]{} 0$.",
          "**Conclusion** : $e^{-t^2/2}$ est la fonction caractéristique de $\\mathcal{N}(0, 1)$ ; par le théorème de Lévy, $Z_n \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0, 1)$. Le cas général s'obtient en appliquant ce résultat à $\\frac{X_k - \\mu}{\\sigma}$."
        ]
      },
      {
        "title": "Méthode : Comparer Bienaymé-Tchebychev et l'approximation normale",
        "example": "On lance $n = 10\\,000$ fois une pièce équilibrée. Estimer $\\mathbb{P}\\left(\\left|\\bar{X}_n - \\frac{1}{2}\\right| \\ge 0{,}01\\right)$, où $\\bar{X}_n$ est la fréquence de « pile ».",
        "steps": [
          "**Étape 1 (Modèle)** : $X_k \\sim \\mathcal{B}\\left(\\frac{1}{2}\\right)$ i.i.d., $\\mu = \\frac{1}{2}$, $\\sigma^2 = \\frac{1}{4}$, donc $\\text{Var}(\\bar{X}_n) = \\frac{1}{4n} = 2{,}5 \\times 10^{-5}$.",
          "**Étape 2 (Majoration de Bienaymé-Tchebychev)** : $\\mathbb{P}(|\\bar{X}_n - \\frac{1}{2}| \\ge 0{,}01) \\le \\frac{2{,}5 \\times 10^{-5}}{10^{-4}} = 0{,}25$.",
          "**Étape 3 (Approximation par le TCL)** : $\\frac{0{,}01}{\\sigma/\\sqrt{n}} = \\frac{0{,}01}{0{,}5/100} = 2$, donc $\\mathbb{P}(|\\bar{X}_n - \\frac{1}{2}| \\ge 0{,}01) \\approx \\mathbb{P}(|Z| \\ge 2) \\approx 0{,}046$ avec $Z \\sim \\mathcal{N}(0, 1)$.",
          "**Conclusion** : Bienaymé-Tchebychev donne une borne **certaine** mais grossière (0,25) ; le TCL donne une **approximation** asymptotique bien plus précise (environ 0,046), sans garantie d'erreur à $n$ fixé."
        ]
      }
    ],
    "traps": [
      "La convergence en loi n'implique pas la convergence en probabilité (sauf vers une constante) : si $X \\sim \\mathcal{N}(0, 1)$ et $X_n = -X$ pour tout $n$, $X_n$ a la loi de $X$, donc $X_n \\xrightarrow{\\mathcal{L}} X$, mais $|X_n - X| = 2|X|$ ne tend pas vers $0$.",
      "Le TCL exige un moment d'ordre 2 : pour des variables de Cauchy i.i.d., $\\bar{X}_n$ suit encore la loi de Cauchy (sa fonction caractéristique est $e^{-|t|}$ pour tout $n$), et ni la loi des grands nombres ni le TCL ne s'appliquent.",
      "La convergence presque sûre n'implique pas la convergence dans $L^1$ : sur $[0 ; 1]$ muni de la mesure de Lebesgue, $X_n = n\\mathbf{1}_{]0 ; 1/n[}$ tend vers $0$ partout mais $\\mathbb{E}[X_n] = 1$.",
      "Non corrélées n'implique pas indépendantes : si $X \\sim \\mathcal{N}(0, 1)$ et $Y = X^2$, $\\text{Cov}(X, Y) = \\mathbb{E}[X^3] = 0$, mais $Y$ est une fonction de $X$.",
      "Une densité n'est pas une probabilité et peut dépasser 1 : la loi $\\mathcal{U}\\left(\\left[0 ; \\frac{1}{2}\\right]\\right)$ a pour densité $2$ sur $\\left[0 ; \\frac{1}{2}\\right]$."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème central limite.",
        "a": "Si les $X_n$ sont i.i.d. avec $\\mathbb{E}[X_1^2] < \\infty$ et $\\sigma^2 > 0$, alors $\\sqrt{n}\\,\\frac{\\bar{X}_n - \\mu}{\\sigma} \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0, 1)$."
      },
      {
        "q": "Énoncer l'inégalité de Bienaymé-Tchebychev.",
        "a": "$\\mathbb{P}(|X - \\mathbb{E}X| \\ge \\varepsilon) \\le \\frac{\\text{Var}(X)}{\\varepsilon^2}$ ; elle s'obtient par Markov appliquée à $(X - \\mathbb{E}X)^2$."
      },
      {
        "q": "Démontrer la loi faible des grands nombres en une ligne (cas $L^2$).",
        "a": "$\\text{Var}(\\bar{X}_n) = \\frac{\\sigma^2}{n}$, donc par Bienaymé-Tchebychev $\\mathbb{P}(|\\bar{X}_n - \\mu| \\ge \\varepsilon) \\le \\frac{\\sigma^2}{n\\varepsilon^2} \\to 0$."
      },
      {
        "q": "Fonction caractéristique d'une somme de variables indépendantes ?",
        "a": "$\\Phi_{X+Y} = \\Phi_X \\, \\Phi_Y$."
      },
      {
        "q": "Définir la convergence en loi par les fonctions de répartition.",
        "a": "$F_{X_n}(x) \\to F_X(x)$ en tout point $x$ de continuité de $F_X$."
      },
      {
        "q": "Ordonner les modes de convergence.",
        "a": "p.s. $\\implies$ proba $\\implies$ loi, et $L^p \\implies$ proba ; la convergence en loi vers une constante entraîne la convergence en probabilité."
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
      "hint2": "Écris la liste des diviseurs de $24$, puis compare-la aux quatre ordres proposés.",
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
      "hint2": "Avec $x' = xh_1$ et $y' = yh_2$, on a $x'y' = xy\\,(y^{-1}h_1 y)\\,h_2$ : quelle propriété de $H$ garantit que $y^{-1}h_1 y \\in H$ pour tout $y \\in G$ ?",
      "solution": "L'ensemble des classes à gauche $G/H$ hérite d'une structure de groupe quotient si et seulement si $H$ est distingué dans $G$ (noté $H \\triangleleft G$)."
    },
    {
      "id": "L3-GRP1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Premier théorème d'isomorphisme",
      "skill": "Identifier le quotient $G / \\text{Ker}\\,\\varphi$",
      "statement": "Si $\\varphi : G \\to G'$ est un morphisme de groupes, alors le premier théorème d'isomorphisme établit que :",
      "options": [
        "$G / \\text{Ker}(\\varphi) \\simeq \\text{Im}(\\varphi)$",
        "$G / \\text{Im}(\\varphi) \\simeq \\text{Ker}(\\varphi)$",
        "$G \\simeq \\text{Ker}(\\varphi) \\times \\text{Im}(\\varphi)$",
        "$\\text{Ker}(\\varphi) = \\text{Im}(\\varphi)$"
      ],
      "correctIndex": 0,
      "answer": "$G / \\text{Ker}(\\varphi) \\simeq \\text{Im}(\\varphi)$",
      "hint1": "Le noyau $\\text{Ker}(\\varphi)$ est distingué dans $G$, donc le quotient $G / \\text{Ker}(\\varphi)$ est un groupe. Si $x$ et $y$ sont dans la même classe, que peux-tu dire de $\\varphi(x)$ et $\\varphi(y)$ ?",
      "hint2": "L'application $\\bar{\\varphi} : x \\,\\text{Ker}\\,\\varphi \\mapsto \\varphi(x)$ est donc bien définie ; vérifie qu'elle est un morphisme injectif. Quelle est son image ?",
      "solution": "Le premier théorème d'isomorphisme affirme que pour tout morphisme $\\varphi$, la projection au quotient induit un isomorphisme canonique $G / \\text{Ker}(\\varphi) \\simeq \\text{Im}(\\varphi)$."
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
      "hint2": "Chaque orbite non ponctuelle a une taille divisible par $p$ (elle divise $|G| = p^k$ et vaut plus que 1). Que peux-tu en déduire pour $|Z(G)|$, sachant que $e \\in Z(G)$ ?",
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
      "hint1": "Compte de deux façons l'ensemble des couples $(g, x) \\in G \\times X$ tels que $g \\cdot x = x$.",
      "hint2": "On obtient $\\sum_{g} |\\text{Fix}(g)| = \\sum_{x} |\\text{Stab}(x)|$. Avec la formule orbite-stabilisateur, que vaut la contribution des $x$ d'une même orbite ?",
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
      "hint1": "Avec $|G| = p^k m$ et $p \\nmid m$, quelle est la plus grande puissance de $p$ qui divise $|G|$ ? Par Lagrange, un sous-groupe dont l'ordre est une puissance de $p$ a un ordre au plus égal à celle-ci.",
      "hint2": "Teste les options sur $\\mathfrak{S}_3$, d'ordre $6 = 2 \\times 3$ : ce groupe est-il abélien ? Ses sous-groupes d'ordre 2 sont-ils distingués ? Quels sous-groupes d'ordre $2$ et $3$ possède-t-il ?",
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
      "hint1": "Teste les options sur les idéaux $\\{0\\}$, $2\\mathbb{Z}$ et $4\\mathbb{Z}$ de $\\mathbb{Z}$ : $4\\mathbb{Z}$ est-il maximal ? est-il nul ? est-il un corps ?",
      "hint2": "Dans $\\mathbb{Z}$, l'idéal $4\\mathbb{Z} + 6\\mathbb{Z}$ peut-il s'écrire $a\\mathbb{Z}$ pour un seul entier $a$ ? Lequel ? Rappelle la définition d'un anneau principal.",
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
      "hint1": "En dimension finie, la sphère unité pour une norme de référence (par exemple $\\|\\cdot\\|_\\infty$ dans une base) est compacte : une fonction continue y est bornée et atteint ses bornes.",
      "hint2": "Une norme $N$ quelconque est continue pour $\\|\\cdot\\|_\\infty$ et ne s'annule pas sur la sphère unité : que donnent son minimum $\\alpha > 0$ et son maximum $\\beta$ sur cette sphère pour comparer $N$ et $\\|\\cdot\\|_\\infty$ ?",
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
      "title": "Intérieur, adhérence et frontière de Q",
      "skill": "Calculer adhérence, intérieur et frontière d'une partie",
      "statement": "Dans $\\mathbb{R}$ muni de sa topologie usuelle, quelle est la frontière $\\mathrm{Fr}(\\mathbb{Q}) = \\overline{\\mathbb{Q}} \\setminus \\mathring{\\mathbb{Q}}$ de l'ensemble des rationnels ?",
      "options": [
        "$\\mathbb{R}$",
        "$\\emptyset$",
        "$\\mathbb{Q}$",
        "$\\mathbb{R} \\setminus \\mathbb{Q}$"
      ],
      "correctIndex": 0,
      "answer": "$\\mathbb{R}$",
      "hint1": "$\\mathbb{Q}$ est dense dans $\\mathbb{R}$ : que vaut son adhérence ?",
      "hint2": "Tout intervalle ouvert non vide contient des irrationnels : que vaut l'intérieur de $\\mathbb{Q}$ ?",
      "solution": "1. Adhérence : tout intervalle $]x - \\varepsilon, x + \\varepsilon[$ contient un rationnel (densité de $\\mathbb{Q}$), donc $\\overline{\\mathbb{Q}} = \\mathbb{R}$.\n2. Intérieur : aucun intervalle ouvert non vide n'est inclus dans $\\mathbb{Q}$ (il contient des irrationnels, par densité de $\\mathbb{R} \\setminus \\mathbb{Q}$), donc $\\mathring{\\mathbb{Q}} = \\emptyset$.\n3. Frontière : $\\mathrm{Fr}(\\mathbb{Q}) = \\mathbb{R} \\setminus \\emptyset = \\mathbb{R}$.\n$\\mathbb{Q}$ n'est donc ni ouvert ni fermé dans $\\mathbb{R}$."
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
      "hint1": "Considère la suite $x_{n+1} = f(x_n)$ : montre que $d(x_{n+1}, x_n) \\le k^n d(x_1, x_0)$, puis que la suite est de Cauchy.",
      "hint2": "La limite $\\ell$ existe par complétude et vérifie $f(\\ell) = \\ell$ par continuité. Si $a$ et $b$ sont deux points fixes, compare $d(a, b)$ et $k\\,d(a, b)$.",
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
      "hint1": "Compare des exemples : $\\mathbb{R}$ est un espace de Banach, $\\mathbb{Q}$ ne l'est pas, et $\\ell^\\infty$ en est un bien qu'il soit de dimension infinie. Quelle propriété des suites de Cauchy distingue $\\mathbb{R}$ de $\\mathbb{Q}$ ?",
      "hint2": "S'il possède en plus un produit scalaire, c'est un espace de Hilbert.",
      "solution": "Par définition, un espace de Banach est un espace vectoriel normé complet pour la métrique issue de sa norme."
    },
    {
      "id": "L3-BAN-3",
      "tier": 3,
      "type": "mcq",
      "title": "Un espace vectoriel normé non complet",
      "skill": "Montrer qu'un espace normé n'est pas complet",
      "statement": "On munit $E = \\mathcal{C}([0,1], \\mathbb{R})$ de la norme $\\|f\\|_1 = \\int_0^1 |f(t)|\\,dt$. L'espace $(E, \\|\\cdot\\|_1)$ est-il un espace de Banach ?",
      "options": [
        "Non : une suite de fonctions continues qui approche une fonction échelon est de Cauchy pour $\\|\\cdot\\|_1$ mais n'a pas de limite continue",
        "Oui : $\\mathcal{C}([0,1], \\mathbb{R})$ est complet pour toute norme",
        "Oui : car $[0,1]$ est compact",
        "Non : car $\\|\\cdot\\|_1$ n'est pas une norme sur $E$"
      ],
      "correctIndex": 0,
      "answer": "Non : une suite de fonctions continues qui approche une fonction échelon est de Cauchy pour $\\|\\cdot\\|_1$ mais n'a pas de limite continue",
      "hint1": "Pense à $f_n$ valant $0$ sur $[0, \\frac12]$, $1$ sur $[\\frac12 + \\frac1n, 1]$ et affine entre les deux.",
      "hint2": "Majore $\\|f_n - f_m\\|_1$ par l'aire d'un petit triangle, puis montre qu'une limite continue $f$ devrait valoir $0$ sur $[0,\\frac12]$ et $1$ sur $]\\frac12, 1]$.",
      "solution": "Soit $f_n$ nulle sur $[0, \\frac12]$, égale à $1$ sur $[\\frac12 + \\frac1n, 1]$ et affine sur $[\\frac12, \\frac12 + \\frac1n]$. Pour $m \\ge n$, $f_n$ et $f_m$ ne diffèrent que sur $[\\frac12, \\frac12 + \\frac1n]$, où $|f_n - f_m| \\le 1$ : donc $\\|f_n - f_m\\|_1 \\le \\frac1n$, et la suite est de Cauchy.\nSi $f_n \\to f$ dans $(E, \\|\\cdot\\|_1)$ avec $f$ continue, alors $\\int_0^{1/2} |f| \\le \\|f_n - f\\|_1 \\to 0$, donc $f = 0$ sur $[0, \\frac12]$ ; et pour tout $a > \\frac12$, $\\int_a^1 |f - 1| \\le \\|f_n - f\\|_1$ dès que $\\frac12 + \\frac1n \\le a$, donc $f = 1$ sur $]\\frac12, 1]$. C'est incompatible avec la continuité de $f$ en $\\frac12$.\nConclusion : $(E, \\|\\cdot\\|_1)$ n'est pas complet (son complété est $L^1([0,1])$). En revanche, $(E, \\|\\cdot\\|_\\infty)$ est un Banach : la complétude dépend de la norme, ce qui n'est pas contradictoire car en dimension infinie les normes ne sont pas toutes équivalentes."
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
      "hint1": "Pour montrer qu'une partie est dense, il suffit de montrer qu'elle rencontre toute boule ouverte $B_0$ de $E$.",
      "hint2": "Construis des boules fermées emboîtées $\\overline{B}_n \\subset O_n \\cap B_{n-1}$ de rayons tendant vers $0$ ; leurs centres forment une suite de Cauchy. Où se trouve sa limite ?",
      "solution": "Le théorème de Baire énonce que dans tout espace métrique complet (ou localement compact), toute intersection dénombrable d'ouverts denses est dense."
    }
  ],
  "L3-CMP": [
    {
      "id": "L3-CMP-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Heine-Borel en dimension finie",
      "skill": "Caractériser les compacts de $\\mathbb{R}^n$",
      "statement": "Dans l'espace euclidien $\\mathbb{R}^n$ muni de sa topologie usuelle, une partie $K$ est compacte si et seulement si elle est :",
      "options": [
        "Fermée et bornée",
        "Ouverte et bornée",
        "Convexe et fermée",
        "Dénombrable"
      ],
      "correctIndex": 0,
      "answer": "Fermée et bornée",
      "hint1": "C'est le théorème de Borel-Lebesgue (ou Heine-Borel) en dimension finie.",
      "hint2": "Attention : cette équivalence est fausse en dimension infinie d'après le théorème de Riesz !",
      "solution": "D'après le théorème de Heine-Borel, dans $\\mathbb{R}^n$ (ou tout EVN de dimension finie), une partie est compacte si et seulement si elle est fermée et bornée."
    },
    {
      "id": "L3-CMP-2",
      "tier": 2,
      "type": "mcq",
      "title": "Théorème de Heine et continuité uniforme",
      "skill": "Déduire la continuité uniforme sur un compact",
      "statement": "Que garantit le théorème de Heine pour une fonction $f : K \\to \\mathbb{R}$ continue sur un espace métrique compact $K$ ?",
      "options": [
        "$f$ est uniformément continue sur $K$",
        "$f$ est dérivable sur $K$",
        "$f$ est lipschitzienne sur $K$",
        "$f$ est une fonction constante"
      ],
      "correctIndex": 0,
      "answer": "$f$ est uniformément continue sur $K$",
      "hint1": "Le pas $\\delta$ dans la définition de la continuité dépend-il du point $x$ sur un compact ?",
      "hint2": "La compacité permet d'extraire un sous-recouvrement fini de boules et de choisir un $\\delta$ global uniforme.",
      "solution": "Le théorème de Heine énonce que toute application continue définie sur un espace métrique compact est uniformément continue."
    },
    {
      "id": "L3-CMP-3",
      "tier": 3,
      "type": "mcq",
      "title": "Propriété de Bolzano-Weierstrass",
      "skill": "Caractériser la compacité séquentielle",
      "statement": "Soit $K$ un sous-ensemble d'un espace métrique $(E, d)$. Quelle propriété séquentielle équivaut à la compacité de $K$ ?",
      "options": [
        "Toute suite d'éléments de $K$ admet une valeur d'adhérence dans $K$ (sous-suite convergente)",
        "Toute suite d'éléments de $K$ est monotone",
        "Toute suite de Cauchy dans $K$ est bornée",
        "Toute suite d'éléments de $K$ est convergente"
      ],
      "correctIndex": 0,
      "answer": "Toute suite d'éléments de $K$ admet une valeur d'adhérence dans $K$ (sous-suite convergente)",
      "hint1": "C'est la propriété de Bolzano-Weierstrass.",
      "hint2": "Élimine les options avec la suite $((-1)^n)$ dans le compact $[-1, 1]$ : est-elle convergente ? monotone ? Possède-t-elle une sous-suite convergente ?",
      "solution": "Dans un espace métrique, un ensemble est compact si et seulement s'il vérifie la propriété de Bolzano-Weierstrass : toute suite d'éléments de $K$ admet une sous-suite convergente dont la limite appartient à $K$."
    },
    {
      "id": "L3-CMP-4",
      "tier": 4,
      "type": "mcq",
      "title": "Connexité et TVI généralisé",
      "skill": "Comprendre l'image continue d'un espace connexe",
      "statement": "Soit $E$ un espace topologique connexe et $f : E \\to \\mathbb{R}$ une application continue. Quelle est la nature de l'image directe $f(E)$ ?",
      "options": [
        "$f(E)$ est un intervalle de $\\mathbb{R}$",
        "$f(E)$ est un ensemble fini",
        "$f(E)$ est obligatoirement un segment fermé $[a, b]$",
        "$f(E)$ est un ouvert de $\\mathbb{R}$"
      ],
      "correctIndex": 0,
      "answer": "$f(E)$ est un intervalle de $\\mathbb{R}$",
      "hint1": "L'image continue d'un connexe est connexe.",
      "hint2": "Quelles sont les seules parties connexes de la droite réelle $\\mathbb{R}$ ?",
      "solution": "L'image continue d'un espace connexe est connexe. Comme les seules parties connexes de $\\mathbb{R}$ sont les intervalles, $f(E)$ est nécessairement un intervalle de $\\mathbb{R}$ (généralisation du Théorème des Valeurs Intermédiaires)."
    }
  ],
  "L3-SDF": [
    {
      "id": "L3-SDF-1",
      "tier": 1,
      "type": "mcq",
      "title": "Convergence simple vs uniforme",
      "skill": "Distinguer les modes de convergence d'une suite de fonctions",
      "statement": "Soit la suite de fonctions $f_n(x) = x^n$ définies sur $[0, 1]$. Quelle affirmation est exacte ?",
      "options": [
        "$(f_n)$ converge simplement sur $[0, 1]$, mais pas uniformément car la limite est discontinue",
        "$(f_n)$ converge uniformément sur $[0, 1]$ vers la fonction nulle",
        "$(f_n)$ converge normalement sur $[0, 1]$",
        "$(f_n)$ ne converge simplement en aucun point de $[0, 1]$"
      ],
      "correctIndex": 0,
      "answer": "$(f_n)$ converge simplement sur $[0, 1]$, mais pas uniformément car la limite est discontinue",
      "hint1": "Calcule la limite simple pour $x \\in [0, 1[$ puis pour $x = 1$.",
      "hint2": "Si la convergence était uniforme, la limite d'une suite de fonctions continues serait continue.",
      "solution": "La limite simple est $f(x) = 0$ si $x \\in [0, 1[$ et $f(1) = 1$. Comme les $f_n$ sont continues et la limite $f$ est discontinue en 1, la convergence ne peut pas être uniforme sur $[0, 1]$."
    },
    {
      "id": "L3-SDF-2",
      "tier": 2,
      "type": "mcq",
      "title": "Critère de convergence normale",
      "skill": "Montrer la convergence normale d'une série de fonctions",
      "statement": "La série de fonctions $\\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}$ converge-t-elle normalement sur $\\mathbb{R}$ ?",
      "options": [
        "Oui, car $\\|u_n\\|_\\infty = \\frac{1}{n^2}$ et $\\sum \\frac{1}{n^2}$ converge (Riemann $\\alpha=2$)",
        "Non, elle converge seulement simplement",
        "Non, le cosinus oscille donc la série diverge",
        "Oui, mais uniquement sur $[-1, 1]$"
      ],
      "correctIndex": 0,
      "answer": "Oui, car $\\|u_n\\|_\\infty = \\frac{1}{n^2}$ et $\\sum \\frac{1}{n^2}$ converge (Riemann $\\alpha=2$)",
      "hint1": "Majore $|u_n(x)|$ indépendamment de $x$.",
      "hint2": "$|\\cos(nx)| \\le 1$ pour tout $x \\in \\mathbb{R}$.",
      "solution": "Pour tout $x \\in \\mathbb{R}$, $|u_n(x)| \\le \\frac{1}{n^2}$, donc $\\|u_n\\|_\\infty = \\frac{1}{n^2}$. Comme la série de Riemann $\\sum \\frac{1}{n^2}$ converge ($\\alpha = 2 > 1$), la série converge normalement sur $\\mathbb{R}$."
    },
    {
      "id": "L3-SDF-3",
      "tier": 3,
      "type": "mcq",
      "title": "Continuité de la somme d'une série de fonctions",
      "skill": "Appliquer le théorème de continuité sous convergence uniforme",
      "statement": "Soit $\\sum u_n$ une série de fonctions continues sur un intervalle $I$. Quelle condition garantit que la somme $S(x) = \\sum_{n=0}^\\infty u_n(x)$ est continue sur $I$ ?",
      "options": [
        "La convergence uniforme de $\\sum u_n$ sur tout segment compact de $I$",
        "La convergence simple de $\\sum u_n$ en tout point de $I$",
        "L'intégrabilité de chaque $u_n$",
        "La décroissance de la suite $(u_n)$"
      ],
      "correctIndex": 0,
      "answer": "La convergence uniforme de $\\sum u_n$ sur tout segment compact de $I$",
      "hint1": "La continuité est une propriété locale : pour l'établir en $x_0 \\in I$, il suffit de travailler sur un segment $[a, b] \\subset I$ voisinage de $x_0$ (relativement à $I$).",
      "hint2": "La convergence simple ne conserve pas la continuité (pense à $x^n$ sur $[0, 1]$). Quel mode de convergence la conserve ?",
      "solution": "D'après le théorème de continuité, si chaque $u_n$ est continue et si la série converge uniformément sur tout segment inclus dans $I$, alors la somme $S$ est continue sur $I$."
    },
    {
      "id": "L3-SDF-4",
      "tier": 4,
      "type": "mcq",
      "title": "Dérivation terme à terme",
      "skill": "Vérifier les hypothèses du théorème de dérivation terme à terme",
      "statement": "Pour affirmer que $\\left(\\sum_{n=0}^\\infty u_n(x)\\right)' = \\sum_{n=0}^\\infty u_n'(x)$ sur un intervalle $I$ pour des fonctions $\\mathcal{C}^1$, quelle condition fondamentale doit vérifier la série des dérivées $\\sum u_n'$ ?",
      "options": [
        "Converger uniformément sur tout segment compact de $I$",
        "Converger simplement en au moins un point",
        "Avoir des termes tous positifs",
        "Être bornée par 1"
      ],
      "correctIndex": 0,
      "answer": "Converger uniformément sur tout segment compact de $I$",
      "hint1": "Écris $u_n(x) = u_n(x_0) + \\int_{x_0}^x u_n'(t)\\,dt$ et somme : quel mode de convergence de $\\sum u_n'$ permet d'intervertir somme et intégrale sur un segment ?",
      "hint2": "La série initiale $\\sum u_n$ n'a besoin de converger qu'en un seul point $x_0$.",
      "solution": "Le théorème de dérivation terme à terme requiert que chaque $u_n$ soit $\\mathcal{C}^1$, que $\\sum u_n(x_0)$ converge en un point, et que la série des dérivées $\\sum u_n'$ converge uniformément sur tout segment compact de $I$."
    }
  ],
  "L3-SER": [
    {
      "id": "L3-SER-1",
      "tier": 1,
      "type": "mcq",
      "title": "Rayon de convergence par la règle de d'Alembert",
      "skill": "Calculer le rayon de convergence d'une série entière",
      "statement": "Quel est le rayon de convergence $R$ de la série entière $\\sum_{n=1}^\\infty \\frac{n}{3^n} z^n$ ?",
      "options": [
        "$R = 3$",
        "$R = \\frac{1}{3}$",
        "$R = +\\infty$",
        "$R = 1$"
      ],
      "correctIndex": 0,
      "answer": "$R = 3$",
      "hint1": "Calcule le rapport $|a_{n+1}/a_n|$ avec $a_n = \\frac{n}{3^n}$.",
      "hint2": "$\\frac{a_{n+1}}{a_n} = \\frac{n+1}{3^{n+1}} \\frac{3^n}{n} = \\frac{n+1}{3n} \\to \\frac{1}{3}$. Comment en déduit-on le rayon ?",
      "solution": "On pose $a_n = \\frac{n}{3^n}$. Alors $\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{n+1}{n} \\cdot \\frac{1}{3} \\xrightarrow[n\\to+\\infty]{} \\frac{1}{3} = \\ell$. Par la règle de d'Alembert, le rayon de convergence est $R = \\frac{1}{\\ell} = 3$."
    },
    {
      "id": "L3-SER-2",
      "tier": 2,
      "type": "mcq",
      "title": "Développement en série entière géométrique",
      "skill": "Déterminer la somme d'une série entière géométrique dérivée",
      "statement": "Pour tout $x \\in ]-1, 1[$, que vaut la somme de la série entière $\\sum_{n=1}^\\infty n x^{n-1}$ ?",
      "options": [
        "$\\frac{1}{(1-x)^2}$",
        "$\\frac{1}{1-x}$",
        "$\\ln(1-x)$",
        "$\\frac{x}{(1-x)^2}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{(1-x)^2}$",
      "hint1": "Remarque que $n x^{n-1} = (x^n)'$.",
      "hint2": "Dérive terme à terme la série géométrique $\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}$.",
      "solution": "Sur $]-1, 1[$, $\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}$. Par dérivation terme à terme d'une série entière sur son disque ouvert de convergence : $\\sum_{n=1}^\\infty n x^{n-1} = \\left(\\frac{1}{1-x}\\right)' = \\frac{1}{(1-x)^2}$."
    },
    {
      "id": "L3-SER-3",
      "tier": 3,
      "type": "mcq",
      "title": "Théorème de la limite radiale d'Abel",
      "skill": "Étudier le comportement d'une série entière au bord du disque",
      "statement": "Soit $f(x) = \\sum_{n=0}^\\infty a_n x^n$ de rayon de convergence $R = 1$. Si la série numérique $\\sum a_n$ converge, que garantit le théorème radial d'Abel ?",
      "options": [
        "$\\lim_{x \\to 1^-} f(x) = \\sum_{n=0}^\\infty a_n$",
        "$f$ est prolongeable par continuité sur $\\mathbb{R}$ tout entier",
        "$\\sum a_n$ est absolument convergente",
        "$\\lim_{x \\to 1^-} f'(x) = 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\lim_{x \\to 1^-} f(x) = \\sum_{n=0}^\\infty a_n$",
      "hint1": "Les options portent sur le comportement de $f$ au bord, en $x = 1$ : que vaudrait formellement $f(1)$ ?",
      "hint2": "Le théorème d'Abel est un résultat de continuité : si $\\sum a_n$ converge, la série $\\sum a_n x^n$ converge uniformément sur $[0, 1]$. Qu'en déduis-tu pour $f$ en $1^-$ ?",
      "solution": "Le théorème de la limite radiale d'Abel affirme que si $\\sum a_n R^n$ converge, alors la fonction somme $f(x)$ est continue à gauche en $R$, de sorte que $\\lim_{x \\to R^-} f(x) = \\sum_{n=0}^\\infty a_n R^n$."
    },
    {
      "id": "L3-SER-4",
      "tier": 4,
      "type": "mcq",
      "title": "Produit de Cauchy de deux séries entières",
      "skill": "Déterminer les coefficients du produit de séries entières",
      "statement": "Si $f(z) = \\sum a_n z^n$ (rayon $R_a$) et $g(z) = \\sum b_n z^n$ (rayon $R_b$), quel est le coefficient $c_n$ de la série produit $f(z)g(z) = \\sum c_n z^n$ ?",
      "options": [
        "$c_n = \\sum_{k=0}^n a_k b_{n-k}$",
        "$c_n = a_n b_n$",
        "$c_n = \\sum_{k=0}^n a_k + b_{n-k}$",
        "$c_n = \\frac{a_n + b_n}{2}$"
      ],
      "correctIndex": 0,
      "answer": "$c_n = \\sum_{k=0}^n a_k b_{n-k}$",
      "hint1": "Formule du produit de convolution discret ou produit de Cauchy.",
      "hint2": "Développe $(a_0 + a_1 z + a_2 z^2)(b_0 + b_1 z + b_2 z^2)$ et regroupe les termes en $z^2$ : quels produits $a_i b_j$ apparaissent ?",
      "solution": "Le produit de Cauchy de deux séries entières a pour terme général $c_n = \\sum_{k=0}^n a_k b_{n-k}$, et son rayon de convergence vérifie $R_c \\ge \\min(R_a, R_b)$."
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
      "hint1": "En un point où $f$ est continue, la série de Fourier converge vers $f(x)$ : quelles options redonnent bien $f(x)$ dans ce cas ?",
      "hint2": "Teste sur le créneau impair ($f = -1$ sur $]-\\pi, 0[$, $f = 1$ sur $]0, \\pi[$) : sa série de Fourier ne contient que des sinus. Que vaut-elle en $x = 0$ ?",
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
      "hint1": "Teste avec $f(t) = \\cos t$ (donc $a_1 = 1$, tous les autres coefficients nuls) : calcule $\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} \\cos^2 t\\,dt$ et compare aux options.",
      "hint2": "Teste aussi $f = 1$ : avec la convention $a_0 = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(t)\\,dt = 2$, le membre de gauche vaut $1$. Quelle formule redonne $1$ ?",
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
      "hint1": "Commence par $f = \\mathbf{1}_{[a, b]}$ : calcule $\\int_a^b e^{-int}\\,dt$ pour $n \\ne 0$ et majore son module.",
      "hint2": "Ce module est majoré par $\\frac{2}{n}$ : que se passe-t-il quand $n \\to +\\infty$ ? On passe ensuite à toute $f \\in L^1$ par densité des fonctions en escalier.",
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
      "hint2": "Calcule de même $\\frac{d - a}{d - b} = \\frac{3 - 0}{3 - 1}$, puis divise le premier rapport par celui-ci.",
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
      "hint1": "$ABC$ et $A'B'C'$ sont en perspective depuis un point $O$ lorsque les droites $(AA')$, $(BB')$, $(CC')$ sont concourantes. Le théorème donne une condition « duale », portant sur les côtés.",
      "hint2": "Considère $P = (BC) \\cap (B'C')$, $Q = (CA) \\cap (C'A')$ et $R = (AB) \\cap (A'B')$ : quelle propriété d'incidence ces trois points vérifient-ils ?",
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
      "hint2": "Si $0$ est valeur régulière, $df_x : \\mathbb{R}^n \\to \\mathbb{R}^p$ est surjective en tout $x \\in M$ et $T_x M = \\text{Ker}(df_x)$. Applique le théorème du rang.",
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
      "hint2": "L'espace tangent à une ligne de niveau régulière est le noyau $\\text{Ker}(df_x)$ : décris géométriquement ce noyau.",
      "solution": "Comme $f(x) = \\langle x, x \\rangle$, la différentielle est $df_x(v) = 2\\langle x, v \\rangle$. L'espace tangent est son noyau, soit le plan orthogonal $x^\\perp$."
    },
    {
      "id": "L3-GDF-3",
      "tier": 3,
      "type": "mcq",
      "title": "Première forme fondamentale d'un cylindre",
      "skill": "Calculer la première forme fondamentale d'une surface paramétrée",
      "statement": "On paramètre le cylindre de révolution de rayon $R > 0$ par $\\varphi(\\theta, z) = (R\\cos\\theta, R\\sin\\theta, z)$. Quelle est sa première forme fondamentale $I = E\\,d\\theta^2 + 2F\\,d\\theta\\,dz + G\\,dz^2$ ?",
      "options": [
        "$I = R^2\\,d\\theta^2 + dz^2$",
        "$I = d\\theta^2 + dz^2$",
        "$I = R\\,d\\theta^2 + dz^2$",
        "$I = R^2\\,d\\theta^2 + R^2\\,dz^2$"
      ],
      "correctIndex": 0,
      "answer": "$I = R^2\\,d\\theta^2 + dz^2$",
      "hint1": "$E = \\|\\varphi_\\theta\\|^2$, $F = \\langle \\varphi_\\theta, \\varphi_z \\rangle$, $G = \\|\\varphi_z\\|^2$.",
      "hint2": "$\\varphi_\\theta = (-R\\sin\\theta, R\\cos\\theta, 0)$ et $\\varphi_z = (0, 0, 1)$.",
      "solution": "$\\varphi_\\theta = (-R\\sin\\theta, R\\cos\\theta, 0)$ et $\\varphi_z = (0,0,1)$, donc $E = R^2$, $F = 0$, $G = 1$ : $I = R^2\\,d\\theta^2 + dz^2$.\nAvec $u = R\\theta$, on obtient $I = du^2 + dz^2$ : c'est la métrique du plan. Le cylindre est donc localement isométrique au plan (on peut le « dérouler »), et sa courbure de Gauss est nulle, conformément au Theorema Egregium."
    },
    {
      "id": "L3-GDF-4",
      "tier": 4,
      "type": "mcq",
      "title": "Courbure de Gauss de la sphère et Theorema Egregium",
      "skill": "Calculer une courbure de Gauss et utiliser le Theorema Egregium",
      "statement": "Soit $S$ la sphère de centre $O$ et de rayon $R > 0$ dans $\\mathbb{R}^3$. Quelle est sa courbure de Gauss $K$, et qu'en déduit-on grâce au Theorema Egregium de Gauss ?",
      "options": [
        "$K = \\frac{1}{R^2}$ en tout point ; aucun ouvert de la sphère n'est isométrique à un ouvert du plan",
        "$K = \\frac{1}{R}$ en tout point ; la sphère est localement isométrique au plan",
        "$K = 0$ car la sphère est une surface de révolution",
        "$K = R^2$ ; une carte plane conservant les distances existe"
      ],
      "correctIndex": 0,
      "answer": "$K = \\frac{1}{R^2}$ en tout point ; aucun ouvert de la sphère n'est isométrique à un ouvert du plan",
      "hint1": "La normale unitaire sortante est $N(p) = \\frac{p}{R}$ : calcule sa différentielle (l'application de Weingarten).",
      "hint2": "$dN_p = \\frac{1}{R}\\,\\mathrm{Id}$ : les deux courbures principales valent $\\frac1R$ (au signe près selon l'orientation), et $K = k_1 k_2$.",
      "solution": "La normale unitaire est $N(p) = \\frac{p}{R}$, donc $dN_p = \\frac1R \\mathrm{Id}_{T_pS}$ : tous les points sont ombilics, de courbures principales $k_1 = k_2 = \\frac1R$ (au signe près, qui disparaît dans le produit). D'où $K = k_1 k_2 = \\frac{1}{R^2} > 0$.\nLe Theorema Egregium affirme que $K$ ne dépend que de la première forme fondamentale : elle est conservée par isométrie locale. Le plan ayant $K = 0$, aucun ouvert de la sphère n'est isométrique à un ouvert du plan : il n'existe pas de carte géographique plane respectant toutes les distances."
    }
  ],
  "L3-NUM": [
    {
      "id": "L3-NUM-1",
      "tier": 1,
      "type": "mcq",
      "title": "Décomposition de Cholesky",
      "skill": "Conditions d'application de la factorisation $A = L \\,{}^t L$",
      "statement": "Une matrice réelle $A \\in \\mathcal{M}_n(\\mathbb{R})$ admet une factorisation de Cholesky $A = L \\,{}^t L$ (avec $L$ triangulaire inférieure à diagonale strictement positive) si et seulement si $A$ est :",
      "options": [
        "Symétrique définie positive",
        "Inversible quelconque",
        "Orthogonale",
        "Diagonale"
      ],
      "correctIndex": 0,
      "answer": "Symétrique définie positive",
      "hint1": "Si $A = L\\,{}^tL$, calcule ${}^tA$ puis ${}^tx A x$ pour $x \\ne 0$ : quelles propriétés de $A$ en découlent ?",
      "hint2": "${}^tx A x = \\|{}^tL x\\|^2$, et ${}^tL$ est inversible car sa diagonale est strictement positive. Réciproquement, l'algorithme de Cholesky demande des pivots strictement positifs : pour quelle classe de matrices est-ce garanti ?",
      "solution": "La factorisation de Cholesky $A = L \\,{}^t L$ existe de façon unique si et seulement si la matrice $A$ est symétrique définie positive."
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
      "hint1": "Avec $A = D - E - F$ ($D$ diagonale, $-E$ et $-F$ parties strictement inférieure et supérieure), Gauss-Seidel s'écrit $(D - E)x_{k+1} = F x_k + b$. Pour une matrice antisymétrique, $D$ est nulle : la méthode est-elle même définie ?",
      "hint2": "La méthode converge pour tout $x_0$ si et seulement si le rayon spectral de $(D - E)^{-1}F$ est strictement inférieur à $1$. Quelles hypothèses du cours sur $A$ assurent cette condition ?",
      "solution": "La méthode de Gauss-Seidel converge inconditionnellement dès que la matrice $A$ est symétrique définie positive ou à diagonale strictement dominante."
    },
    {
      "id": "L3-NUM-4",
      "tier": 4,
      "type": "mcq",
      "title": "Décomposition en valeurs singulières (SVD)",
      "skill": "Factorisation $A = U \\Sigma \\,{}^t V$",
      "statement": "Pour toute matrice rectangulaire $A \\in \\mathcal{M}_{m,n}(\\mathbb{R})$, les valeurs singulières de $A$ sont :",
      "options": [
        "Les racines carrées des valeurs propres positives de ${}^t A A$",
        "Les valeurs propres de $A$",
        "Les éléments diagonaux de $A$",
        "Les déterminants des blocs de $A$"
      ],
      "correctIndex": 0,
      "answer": "Les racines carrées des valeurs propres positives de ${}^t A A$",
      "hint1": "${}^t A A$ est une matrice symétrique semi-définie positive.",
      "hint2": "Écris $A = U \\Sigma\\,{}^tV$ avec $U, V$ orthogonales et $\\Sigma$ « diagonale » de coefficients $\\sigma_i \\ge 0$ : que vaut ${}^tA A$ ? Quelles sont ses valeurs propres ?",
      "solution": "Par définition, les valeurs singulières de $A$ sont les racines carrées des valeurs propres de la matrice symétrique semi-définie positive ${}^t A A$."
    }
  ],
  "L3-PROG": [
    {
      "id": "L3-PROG-1",
      "tier": 1,
      "type": "mcq",
      "title": "Forme standard d'un programme linéaire et variables d'écart",
      "skill": "Mettre un programme linéaire sous forme standard",
      "statement": "Pour mettre la contrainte d'inégalité $2x_1 + 3x_2 \\le 12$ sous forme standard d'égalité avec des variables positives, quelle transformation effectue-t-on ?",
      "options": [
        "On introduit une variable d'écart $s \\ge 0$ telle que $2x_1 + 3x_2 + s = 12$",
        "On remplace simplement $\\le$ par $=$ sans rien ajouter",
        "On introduit une variable $s \\le 0$ telle que $2x_1 + 3x_2 = 12 + s$",
        "On élève la contrainte au carré"
      ],
      "correctIndex": 0,
      "answer": "On introduit une variable d'écart $s \\ge 0$ telle que $2x_1 + 3x_2 + s = 12$",
      "hint1": "Une contrainte $\\le$ signifie que le membre de gauche est inférieur au membre de droite.",
      "hint2": "Pour obtenir une égalité sans perdre l'information « $2x_1 + 3x_2$ est au plus $12$ », quelle quantité faut-il ajouter au membre de gauche, et quel est son signe ?",
      "solution": "Dans la mise sous forme standard, toute contrainte d'inégalité $\\le$ est transformée en égalité par l'addition d'une variable d'écart positive ($s \\ge 0$) : $2x_1 + 3x_2 + s = 12$."
    },
    {
      "id": "L3-PROG-2",
      "tier": 2,
      "type": "mcq",
      "title": "Règle de la variable entrante dans le simplexe",
      "skill": "Appliquer le critère de Dantzig sur les coûts réduits",
      "statement": "Dans l'algorithme du simplexe en maximisation, comment choisit-on la variable hors-base entrante selon la règle de Dantzig ?",
      "options": [
        "On choisit la variable ayant le coût réduit strictement positif le plus grand ($\\bar{c}_e = \\max_{j} \\bar{c}_j > 0$)",
        "On choisit la variable ayant le coût réduit le plus négatif",
        "On choisit la variable ayant la plus grande valeur dans le vecteur $b$",
        "On choisit arbitrairement n'importe quelle variable de base"
      ],
      "correctIndex": 0,
      "answer": "On choisit la variable ayant le coût réduit strictement positif le plus grand ($\\bar{c}_e = \\max_{j} \\bar{c}_j > 0$)",
      "hint1": "Un coût réduit positif $\\bar{c}_j > 0$ indique que faire croître $x_j$ augmentera la fonction objectif.",
      "hint2": "S'il y a plusieurs candidates à coût réduit positif, laquelle fait croître le plus l'objectif par unité d'augmentation de la variable entrante ?",
      "solution": "En maximisation, le critère de Dantzig prescrit de faire entrer en base la variable hors-base $x_e$ dont le coût réduit est le plus grand strictement positif : $\\bar{c}_e = \\max_{j \\in N} \\bar{c}_j > 0$. Si tous les coûts réduits sont $\\le 0$, la solution actuelle est optimale."
    },
    {
      "id": "L3-PROG-3",
      "tier": 3,
      "type": "mcq",
      "title": "Test du ratio minimum et variable sortante",
      "skill": "Déterminer la variable qui quitte la base pour préserver l'admissibilité",
      "statement": "Lors d'une itération du simplexe avec colonne pivot $A_e$, la variable de base sortante est déterminée par :",
      "options": [
        "Le minimum des ratios $\\frac{\\bar{b}_i}{\\bar{a}_{i, e}}$ pour les lignes où $\\bar{a}_{i, e} > 0$",
        "Le maximum des ratios $\\frac{\\bar{b}_i}{\\bar{a}_{i, e}}$",
        "La ligne où $\\bar{a}_{i, e}$ est le plus proche de 0",
        "La ligne où le terme indépendant $\\bar{b}_i$ est négatif"
      ],
      "correctIndex": 0,
      "answer": "Le minimum des ratios $\\frac{\\bar{b}_i}{\\bar{a}_{i, e}}$ pour les lignes où $\\bar{a}_{i, e} > 0$",
      "hint1": "En augmentant la variable entrante $x_e$, les composantes de base deviennent $x_{B(i)} = \\bar{b}_i - \\bar{a}_{i, e} x_e$.",
      "hint2": "Si $\\bar{a}_{i,e} \\le 0$, $x_{B(i)}$ ne diminue pas ; si $\\bar{a}_{i,e} > 0$, elle s'annule pour $x_e = \\bar{b}_i / \\bar{a}_{i,e}$. Jusqu'où peut-on augmenter $x_e$ sans qu'aucune variable ne devienne négative ?",
      "solution": "Pour préserver la positivité de toutes les variables (admissibilité), la variable de base qui quitte la base est celle dont la valeur s'annule en premier : $i^* = \\arg \\min \\{ \\frac{\\bar{b}_i}{\\bar{a}_{i,e}} \\mid \\bar{a}_{i,e} > 0 \\}$."
    },
    {
      "id": "L3-PROG-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème des écarts complémentaires",
      "skill": "Vérifier l'optimalité conjointe primale/duale",
      "statement": "Soient $x^*$ et $y^*$ des solutions admissibles respectives du problème primal ($\\max {}^t c x$ sous $Ax \\le b, x \\ge 0$) et dual ($\\min {}^t b y$ sous ${}^t A y \\ge c, y \\ge 0$). Quelle condition caractérise leur optimalité conjointe ?",
      "options": [
        "$y_i^* (b - Ax^*)_i = 0$ pour tout $i$ et $x_j^* ({}^t A y^* - c)_j = 0$ pour tout $j$",
        "$x^* = y^*$ obligatoirement",
        "${}^t c x^* < {}^t b y^*$, strictement",
        "$\\det(A) = 0$"
      ],
      "correctIndex": 0,
      "answer": "$y_i^* (b - Ax^*)_i = 0$ pour tout $i$ et $x_j^* ({}^t A y^* - c)_j = 0$ pour tout $j$",
      "hint1": "Pour $x^*, y^*$ admissibles : ${}^tc\\,x^* \\le {}^ty^* A x^* \\le {}^tb\\,y^*$. Par dualité, l'optimalité conjointe équivaut à ${}^tc\\,x^* = {}^tb\\,y^*$ : les deux inégalités doivent être des égalités.",
      "hint2": "Si une contrainte primale n'est pas saturée ($(b - Ax^*)_i > 0$), la variable duale associée doit être nulle ($y_i^* = 0$).",
      "solution": "D'après le théorème des écarts complémentaires, deux solutions admissibles sont optimales si et seulement si pour tout $i$, $y_i^*(b_i - (Ax^*)_i) = 0$ (le produit du multiplicateur par la variable d'écart est nul) et pour tout $j$, $x_j^*(({}^t A y^*)_j - c_j) = 0$."
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
      "hint1": "Teste $f_n = n\\,\\mathbf{1}_{]0, 1/n[}$ sur $[0, 1]$ : elle tend vers $0$ presque partout sur un espace de mesure finie. Que vaut $\\int f_n$ ? Quelles options ce contre-exemple élimine-t-il ?",
      "hint2": "Dans ce contre-exemple, $\\sup_n f_n(x)$ est de l'ordre de $\\frac{1}{x}$ : cette enveloppe est-elle intégrable sur $[0, 1]$ ? Quelle hypothèse sur une enveloppe des $|f_n|$ empêcherait ce phénomène ?",
      "solution": "Le théorème de convergence dominée de Lebesgue requiert l'existence d'une fonction intégrable dominante $g \\in L^1$ telle que $|f_n| \\le g$ p.p."
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
      "hint1": "Pose $g_n = \\inf_{k \\ge n} f_k$ : la suite $(g_n)$ est croissante, positive, et tend vers $\\liminf f_n$.",
      "hint2": "Applique la convergence monotone à $(g_n)$, puis utilise $g_n \\le f_k$ pour tout $k \\ge n$ : quelle inégalité obtiens-tu entre $\\int g_n$ et $\\inf_{k \\ge n} \\int f_k$ ?",
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
      "hint1": "Par croissance, $f_n \\le f$, donc la suite $(\\int f_n)$ est croissante et majorée par $\\int f$. Reste à obtenir l'inégalité inverse.",
      "hint2": "Fixe une fonction étagée $0 \\le s \\le f$ et $c \\in ]0, 1[$ : les ensembles $\\{f_n \\ge c\\,s\\}$ croissent vers l'espace entier. Minore $\\int f_n$ par $c \\int_{\\{f_n \\ge cs\\}} s$ et fais tendre $n \\to \\infty$ (le résultat reste valable si $\\int f = +\\infty$).",
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
      "hint1": "Calcule $\\mathbb{E}[Z_n]$ et $\\text{Var}(Z_n)$ : cela rend déjà invraisemblables la constante $\\mu$ et la loi $\\mathcal{U}(0, 1)$ (d'espérance $\\frac12$).",
      "hint2": "Avec $Y_i = \\frac{X_i - \\mu}{\\sigma}$, on a $\\phi_{Z_n}(t) = \\left(\\phi_{Y_1}\\!\\left(\\frac{t}{\\sqrt{n}}\\right)\\right)^n = \\left(1 - \\frac{t^2}{2n} + o\\left(\\frac{1}{n}\\right)\\right)^n$. Quelle est sa limite, et de quelle loi est-ce la fonction caractéristique ?",
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
      "hint2": "Pour $Y \\sim \\mathcal{N}(0, 1)$, dériver sous l'intégrale puis intégrer par parties donne $\\phi_Y'(t) = -t\\,\\phi_Y(t)$ avec $\\phi_Y(0) = 1$. Résous, puis utilise $X = \\sigma Y$, d'où $\\phi_X(t) = \\phi_Y(\\sigma t)$.",
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
      "hint2": "La fonction caractéristique d'un vecteur gaussien ne dépend que de son espérance et de sa matrice de covariance. À quelle condition sur cette matrice se factorise-t-elle en $\\phi_X(s)\\,\\phi_Y(t)$ ?",
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
      "hint1": "La loi faible donne la convergence en probabilité de $\\bar{X}_n$ vers la constante $\\mu$ ; la loi forte donne un mode strictement plus fort. Une limite gaussienne ou une convergence « en loi uniquement » sont-elles compatibles avec cela ?",
      "hint2": "Parmi les modes de convergence de variables aléatoires (en loi, en probabilité, presque sûre, $L^p$), lequel est plus fort que la convergence en probabilité tout en portant sur chaque trajectoire $\\omega$ ?",
      "solution": "La loi forte des grands nombres de Kolmogorov établit que si $\\mathbb{E}[|X_1|] < \\infty$, la moyenne empirique converge presque sûrement vers $\\mu$ : $\\mathbb{P}\\left(\\lim_{n \\to \\infty} \\frac{1}{n}\\sum_{i=1}^n X_i = \\mu\\right) = 1$."
    }
  ]
};

window.MATHS_WORKSHEETS_L3 = {
  "L3-GRP1": [
    {
      "id": "L3-GRP1-fiche_td",
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
  ],
  "L3-MET": [
    {
      "id": "L3-MET-fiche_td",
      "title": "Feuille de TD L3 : Topologie des Espaces Métriques et Normés",
      "filename": "TD_L3_Topologie_Metrique.md",
      "statement": `## Travaux Dirigés L3 : Topologie des Espaces Métriques et Normés

### Exercice 1 : Équivalence des normes en dimension finie et contre-exemple (8 points)
1. Énoncer le théorème d'équivalence des normes sur un espace vectoriel de dimension finie.
2. Soit $E = \\mathcal{C}([0, 1], \\mathbb{R})$. On considère les normes $\\|f\\|_1 = \\int_0^1 |f(t)| dt$ et $\\|f\\|_\\infty = \\sup_{t \\in [0, 1]} |f(t)|$.
   a. Montrer que $\\|f\\|_1 \\le \\|f\\|_\\infty$ pour tout $f \\in E$.
   b. En considérant la suite de fonctions $f_n(t) = t^n$ pour $n \\ge 1$, montrer que ces deux normes ne sont pas équivalentes sur $E$.
   c. En déduire que $E$ est de dimension infinie.

### Exercice 2 : Compacité et Théorème de Heine (12 points)
Soit $(K, d_K)$ un espace métrique compact et $(F, d_F)$ un espace métrique quelconque. Soit $f : K \\to F$ une application continue.
1. Rappeler la définition de la compacité par la propriété de Borel-Lebesgue (recouvrement d'ouverts).
2. Pour $\\varepsilon > 0$ fixé, et pour chaque $x \\in K$, justifier qu'il existe $r_x > 0$ tel que :
$$\\forall y \\in B(x, r_x), \\quad d_F(f(x), f(y)) < \\frac{\\varepsilon}{2}$$
3. En considérant le recouvrement ouvert $K \\subset \\bigcup_{x \\in K} B(x, \\frac{r_x}{2})$, démontrer que $f$ est uniformément continue sur $K$ (Théorème de Heine).`,
      "solution": `### Correction Exercice 1
1. Sur un $\\mathbb{R}$-espace vectoriel de dimension finie, toutes les normes sont équivalentes : pour toutes normes $N_1, N_2$, $\\exists \\alpha, \\beta > 0$ tels que $\\alpha N_1(x) \\le N_2(x) \\le \\beta N_1(x)$.
2. a. Pour tout $t \\in [0, 1]$, $|f(t)| \\le \\|f\\|_\\infty$, d'où en intégrant : $\\|f\\|_1 = \\int_0^1 |f(t)| dt \\le \\int_0^1 \\|f\\|_\\infty dt = \\|f\\|_\\infty$.
b. Pour $f_n(t) = t^n$ : $\\|f_n\\|_\\infty = \\sup_{t \\in [0, 1]} t^n = 1$.
En revanche, $\\|f_n\\|_1 = \\int_0^1 t^n dt = \\left[ \\frac{t^{n+1}}{n+1} \\right]_0^1 = \\frac{1}{n+1}$.
S'il existait $C > 0$ tel que $\\|f\\|_\\infty \\le C \\|f\\|_1$ pour tout $f$, on aurait $1 \\le \\frac{C}{n+1}$ pour tout $n \\ge 1$, ce qui est absurde quand $n \\to \\infty$. Les normes ne sont pas équivalentes.
c. Comme deux normes ne sont pas équivalentes sur $E$, d'après le théorème d'équivalence en dimension finie, $E$ est nécessairement de dimension infinie.

### Correction Exercice 2
1. Un espace métrique $K$ est compact ssi de tout recouvrement ouvert $K = \\bigcup_{i \\in I} U_i$, on peut extraire un sous-recouvrement fini : $\\exists i_1, \\dots, i_N \\in I$ tels que $K = \\bigcup_{k=1}^N U_{i_k}$.
2. Par continuité de $f$ en $x$, pour tout $\\varepsilon' = \\frac{\\varepsilon}{2} > 0$, il existe $r_x > 0$ tel que $d_K(x, y) < r_x \\implies d_F(f(x), f(y)) < \\frac{\\varepsilon}{2}$.
3. La famille des boules ouvertes $\\left( B(x, \\frac{r_x}{2}) \\right)_{x \\in K}$ forme un recouvrement ouvert du compact $K$.
Par compacité, il existe un nombre fini de points $x_1, \\dots, x_N \\in K$ tels que :
$$K \\subset \\bigcup_{k=1}^N B\\left(x_k, \\frac{r_{x_k}}{2}\\right)$$
Posons $\\delta = \\min_{1 \\le k \\le N} \\frac{r_{x_k}}{2} > 0$.
Soient $y, z \\in K$ tels que $d_K(y, z) < \\delta$.
Comme $y \\in K$, il existe un indice $k \\in \\{1, \\dots, N\\}$ tel que $y \\in B(x_k, \\frac{r_{x_k}}{2})$, c'est-à-dire $d_K(y, x_k) < \\frac{r_{x_k}}{2}$.
Alors par inégalité triangulaire :
$$d_K(z, x_k) \\le d_K(z, y) + d_K(y, x_k) < \\delta + \\frac{r_{x_k}}{2} \\le \\frac{r_{x_k}}{2} + \\frac{r_{x_k}}{2} = r_{x_k}$$
Ainsi, $y \\in B(x_k, r_{x_k})$ et $z \\in B(x_k, r_{x_k})$.
Il en résulte :
$$d_F(f(y), f(z)) \\le d_F(f(y), f(x_k)) + d_F(f(x_k), f(z)) < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon$$
Le réel $\\delta > 0$ ne dépend que de $\\varepsilon$ et non des points choisis : $f$ est uniformément continue sur $K$.`
    }
  ],
  "L3-PROG": [
    {
      "id": "L3-PROG-fiche_td",
      "title": "Feuille de TD L3 : Programmation Linéaire, Simplexe et Dualité",
      "filename": "TD_L3_Simplexe_Dualite.md",
      "statement": `## Travaux Dirigés L3 : Programmation Linéaire et Dualité

### Exercice 1 : Résolution complète par l'Algorithme du Simplexe (12 points)
On considère le problème linéaire suivant :
$$\\max Z = 5 x_1 + 4 x_2$$
sous les contraintes :
$$\\begin{cases} x_1 + 2 x_2 \\le 6 \\\\ 3 x_1 + 2 x_2 \\le 12 \\\\ x_1 \\ge 0, \\; x_2 \\ge 0 \\end{cases}$$
1. Mettre le problème sous forme standard en introduisant des variables d'écart positives $s_1, s_2 \\ge 0$.
2. Identifier la solution de base admissible (SBA) initiale et la valeur de la fonction objectif correspondante.
3. Déterminer la variable entrante selon la règle de Dantzig.
4. Effectuer le test du ratio minimum pour déterminer la variable sortante et le pivot.
5. Effectuer l'opération de pivotage de Gauss-Jordan.
6. Effectuer la deuxième itération du simplexe jusqu'à ce que tous les coûts réduits soient négatifs ou nuls.
7. Conclure sur la solution optimale $(x_1^*, x_2^*)$ et la valeur optimale $Z^*$.

### Exercice 2 : Problème Dual et Écarts Complémentaires (8 points)
1. Écrire le problème dual $(D)$ associé au programme linéaire précédent.
2. En utilisant le théorème des écarts complémentaires et la solution optimale trouvée à l'exercice 1, déterminer la solution optimale duale $(y_1^*, y_2^*)$.
3. Vérifier que la valeur optimale du dual coïncide avec la valeur optimale du primal (Théorème de Dualité Forte).`,
      "solution": `### Correction Exercice 1
1. Forme standard avec $s_1, s_2 \\ge 0$ :
$$\\max Z = 5x_1 + 4x_2 + 0s_1 + 0s_2$$
sous :
$$\\begin{cases} x_1 + 2x_2 + s_1 = 6 \\\\ 3x_1 + 2x_2 + s_2 = 12 \\end{cases}$$
2. Base initiale $B = (s_1, s_2)$. Variables hors-base : $x_1 = 0, x_2 = 0$.
Valeurs de base : $s_1 = 6, s_2 = 12$. La solution est admissible car $s_1, s_2 \\ge 0$. Valeur initiale $Z = 0$.
3. Coûts réduits : $\\bar{c}_1 = 5$ et $\\bar{c}_2 = 4$. Comme $\\max(5, 4) = 5 > 0$, la variable $x_1$ entre en base.
4. Ratios $\\frac{b_i}{a_{i, 1}}$ :
- Ligne 1 ($s_1$) : $6 / 1 = 6$.
- Ligne 2 ($s_2$) : $12 / 3 = 4$.
Le ratio minimal est $4$ sur la ligne 2. Donc $s_2$ quitte la base. Le pivot est $a_{2, 1} = 3$.
5. Pivotage :
Nouvelle ligne 2 : $L_2 \\leftarrow \\frac{1}{3} L_2 \\iff x_1 + \\frac{2}{3} x_2 + \\frac{1}{3} s_2 = 4$.
Nouvelle ligne 1 : $L_1 \\leftarrow L_1 - L_2' \\iff \\frac{4}{3} x_2 + s_1 - \\frac{1}{3} s_2 = 2$.
Fonction objectif : $Z = 5(4 - \\frac{2}{3} x_2 - \\frac{1}{3} s_2) + 4 x_2 = 20 + \\frac{2}{3} x_2 - \\frac{5}{3} s_2$.
Nouvelle base $B = (s_1, x_1)$ avec $x_1 = 4, s_1 = 2, Z = 20$.
6. Deuxième itération :
Le coût réduit de $x_2$ est $\\bar{c}_2 = \\frac{2}{3} > 0$. Donc $x_2$ entre en base.
Test des ratios :
- Ligne 1 ($s_1$) : $\\frac{2}{4/3} = \\frac{3}{2} = 1.5$.
- Ligne 2 ($x_1$) : $\\frac{4}{2/3} = 6$.
Le ratio minimal est $1.5$ sur la ligne 1. Donc $s_1$ sort de la base. Le pivot est $\\frac{4}{3}$.
Nouvelle ligne 1 : $L_1 \\leftarrow \\frac{3}{4} L_1 \\iff x_2 + \\frac{3}{4} s_1 - \\frac{1}{4} s_2 = \\frac{3}{2}$.
Nouvelle ligne 2 : $L_2 \\leftarrow L_2 - \\frac{2}{3} L_1' \\iff x_1 - \\frac{1}{2} s_1 + \\frac{1}{2} s_2 = 3$.
Fonction objectif : $Z = 20 + \\frac{2}{3}\\left(\\frac{3}{2} - \\frac{3}{4} s_1 + \\frac{1}{4} s_2\\right) - \\frac{5}{3} s_2 = 21 - \\frac{1}{2} s_1 - \\frac{3}{2} s_2$.
7. Les coûts réduits sont désormais $-\\frac{1}{2} \\le 0$ et $-\\frac{3}{2} \\le 0$. L'algorithme s'arrête à l'optimum :
$x_1^* = 3, \\; x_2^* = \\frac{3}{2} = 1.5, \\quad Z^* = 5(3) + 4(1.5) = 21$.

### Correction Exercice 2
1. Problème dual $(D)$ :
$$\\min W = 6 y_1 + 12 y_2$$
sous les contraintes :
$$\\begin{cases} y_1 + 3 y_2 \\ge 5 \\\\ 2 y_1 + 2 y_2 \\ge 4 \\\\ y_1 \\ge 0, \\; y_2 \\ge 0 \\end{cases}$$
2. Écarts complémentaires :
À l'optimum primal, les variables d'écart sont $s_1^* = 0$ et $s_2^* = 0$ (les deux contraintes primales sont saturées : $3 + 2(1.5) = 6$ et $3(3) + 2(1.5) = 12$).
De plus, les variables de décision sont strictement positives : $x_1^* = 3 > 0$ et $x_2^* = 1.5 > 0$.
D'après les relations d'exclusion :
$x_1^* > 0 \\implies y_1^* + 3 y_2^* = 5$
$x_2^* > 0 \\implies 2 y_1^* + 2 y_2^* = 4 \\iff y_1^* + y_2^* = 2$.
Soustraction des équations : $2 y_2^* = 3 \\implies y_2^* = \\frac{3}{2} = 1.5$.
Puis $y_1^* = 2 - 1.5 = 0.5 = \\frac{1}{2}$.
Comme $y_1^* \\ge 0$ et $y_2^* \\ge 0$, la solution duale admissible et optimale est $(y_1^*, y_2^*) = (\\frac{1}{2}, \\frac{3}{2})$.
Remarque remarquable : les valeurs optimales des variables duales coïncident exactement avec l'opposé des coefficients des variables d'écart dans la ligne de coût optimal du simplexe ($Z = 21 - \\frac{1}{2} s_1 - \\frac{3}{2} s_2$) !
3. Valeur duale optimale :
$W^* = 6 y_1^* + 12 y_2^* = 6(0.5) + 12(1.5) = 3 + 18 = 21 = Z^*$.
La dualité forte est parfaitement vérifiée : $\\max (P) = \\min (D) = 21$.`
    }
  ],
  "L3-NUM": [
    {
      "id": "L3-NUM-fiche_td",
      "title": "Feuille de TD L3 : Analyse Numérique Matricielle et Interpolation",
      "filename": "TD_L3_Analyse_Numerique.md",
      "statement": `## Travaux Dirigés L3 : Analyse Numérique Matricielle et Interpolation

### Exercice 1 : Factorisation de Cholesky $A = L L^T$ (10 points)
Soit la matrice symétrique réelle suivante :
$$A = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 10 & 5 \\\\ -2 & 5 & 14 \\end{pmatrix}$$
1. Rappeler la définition d'une matrice symétrique définie positive et énoncer le critère de Sylvester (mineurs dominants).
2. Vérifier que $A$ est symétrique définie positive à l'aide des déterminants de ses mineurs principaux de Gauss.
3. Calculer pas à pas les coefficients de la matrice triangulaire inférieure $L = \\begin{pmatrix} \\ell_{11} & 0 & 0 \\\\ \\ell_{21} & \\ell_{22} & 0 \\\\ \\ell_{31} & \\ell_{32} & \\ell_{33} \\end{pmatrix}$ à diagonale strictement positive telle que $A = L L^T$.
4. Expliquer comment cette factorisation permet de résoudre efficacement le système linéaire $A x = b$.

### Exercice 2 : Interpolation Polynomiale de Lagrange et Erreur (10 points)
Soient trois points d'interpolation distincts $x_0 = 0, x_1 = 1, x_2 = 2$ et les valeurs associées $y_0 = 1, y_1 = 3, y_2 = 2$.
1. Écrire les trois polynômes élémentaires de Lagrange $L_0(x), L_1(x), L_2(x)$ associés à ces nœuds.
2. En déduire le polynôme d'interpolation de Lagrange $P_2(x) = \\sum_{i=0}^2 y_i L_i(x)$ sous forme développée.
3. On suppose que ces données proviennent d'une fonction $f$ de classe $\\mathcal{C}^3([0, 2])$ vérifiant $|f^{(3)}(t)| \\le M_3$ pour tout $t \\in [0, 2]$.
   Rappeler la formule de l'erreur d'interpolation et donner une majoration uniforme de $|f(x) - P_2(x)|$ sur $[0, 2]$ en fonction de $M_3$.`,
      "solution": `### Correction Exercice 1
1. Une matrice symétrique $A \\in \\mathcal{S}_n(\\mathbb{R})$ est définie positive si pour tout $x \\in \\mathbb{R}^n \\setminus \\{0\\}$, $x^T A x > 0$.
Critère de Sylvester : $A$ est définie positive ssi tous ses mineurs principaux dominants $\\Delta_k = \\det(A_{1..k, 1..k})$ sont strictement positifs pour $k = 1, \\dots, n$.
2. Mineurs dominants :
$\\Delta_1 = 4 > 0$.
$\\Delta_2 = \\begin{vmatrix} 4 & 2 \\\\ 2 & 10 \\end{vmatrix} = 40 - 4 = 36 > 0$.
$\\Delta_3 = \\det(A) = 4(140 - 25) - 2(28 - (-10)) + (-2)(10 - (-20)) = 4(115) - 2(38) - 2(30) = 460 - 76 - 60 = 324 > 0$.
Tous les mineurs étant strictement positifs, $A$ est symétrique définie positive.
3. Formules de Cholesky :
- Colonne 1 :
  $\\ell_{11} = \\sqrt{a_{11}} = \\sqrt{4} = 2$.
  $\\ell_{21} = \\frac{a_{21}}{\\ell_{11}} = \\frac{2}{2} = 1$.
  $\\ell_{31} = \\frac{a_{31}}{\\ell_{11}} = \\frac{-2}{2} = -1$.
- Colonne 2 :
  $\\ell_{22} = \\sqrt{a_{22} - \\ell_{21}^2} = \\sqrt{10 - 1} = \\sqrt{9} = 3$.
  $\\ell_{32} = \\frac{a_{32} - \\ell_{31}\\ell_{21}}{\\ell_{22}} = \\frac{5 - (-1)(1)}{3} = \\frac{6}{3} = 2$.
- Colonne 3 :
  $\\ell_{33} = \\sqrt{a_{33} - (\\ell_{31}^2 + \\ell_{32}^2)} = \\sqrt{14 - (1 + 4)} = \\sqrt{9} = 3$.
D'où la matrice $L = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 3 & 0 \\\\ -1 & 2 & 3 \\end{pmatrix}$.
Vérification : $L L^T = \\begin{pmatrix} 2 & 0 & 0 \\\\ 1 & 3 & 0 \\\\ -1 & 2 & 3 \\end{pmatrix} \\begin{pmatrix} 2 & 1 & -1 \\\\ 0 & 3 & 2 \\\\ 0 & 0 & 3 \\end{pmatrix} = \\begin{pmatrix} 4 & 2 & -2 \\\\ 2 & 10 & 5 \\\\ -2 & 5 & 14 \\end{pmatrix} = A$.
4. Résolution de $Ax = b \\iff L (L^T x) = b$ :
- Résolution du système triangulaire inférieur par descente : $L y = b$ (coût en $O(n^2/2)$).
- Résolution du système triangulaire supérieur par remontée : $L^T x = y$ (coût en $O(n^2/2)$).
Cette méthode évite le calcul d'inverse et ne requiert pas de pivotage car les pivots de Cholesky sont garantis stables.

### Correction Exercice 2
1. Base de Lagrange :
$L_0(x) = \\frac{(x-1)(x-2)}{(0-1)(0-2)} = \\frac{(x-1)(x-2)}{2} = \\frac{x^2 - 3x + 2}{2}$.
$L_1(x) = \\frac{(x-0)(x-2)}{(1-0)(1-2)} = \\frac{x(x-2)}{-1} = -x^2 + 2x$.
$L_2(x) = \\frac{(x-0)(x-1)}{(2-0)(2-1)} = \\frac{x(x-1)}{2} = \\frac{x^2 - x}{2}$.
2. Polynôme interpolateur :
$P_2(x) = 1 \\cdot L_0(x) + 3 \\cdot L_1(x) + 2 \\cdot L_2(x)$
$P_2(x) = \\frac{x^2 - 3x + 2}{2} + 3(-x^2 + 2x) + 2\\frac{x^2 - x}{2} = \\left(\\frac{1}{2} - 3 + 1\\right) x^2 + \\left(-\\frac{3}{2} + 6 - 1\\right) x + 1 = -\\frac{3}{2} x^2 + \\frac{7}{2} x + 1$.
Vérification : $P_2(0) = 1$, $P_2(1) = -1.5 + 3.5 + 1 = 3$, $P_2(2) = -6 + 7 + 1 = 2$.
3. Formule d'erreur de Cauchy :
Pour tout $x \\in [0, 2]$, il existe $\\xi_x \\in ]0, 2[$ tel que :
$$f(x) - P_2(x) = \\frac{f^{(3)}(\\xi_x)}{3!} (x-0)(x-1)(x-2)$$
Posons $\\omega(x) = x(x-1)(x-2) = x^3 - 3x^2 + 2x$.
Sa dérivée $\\omega'(x) = 3x^2 - 6x + 2$ s'annule pour $x = \\frac{6 \\pm \\sqrt{12}}{6} = 1 \\pm \\frac{\\sqrt{3}}{3}$.
Pour $x = 1 - \\frac{1}{\\sqrt{3}}$ :
$\\omega(x) = \\left(1 - \\frac{1}{\\sqrt{3}}\\right)\\left(-\\frac{1}{\\sqrt{3}}\\right)\\left(-1 - \\frac{1}{\\sqrt{3}}\\right) = -\\frac{1}{\\sqrt{3}}\\left(\\frac{1}{3} - 1\\right) = \\frac{2}{3\\sqrt{3}}$.
Donc $\\max_{x \\in [0, 2]} |\\omega(x)| = \\frac{2}{3\\sqrt{3}} = \\frac{2\\sqrt{3}}{9} \\approx 0.385$.
D'où la majoration uniforme sur $[0, 2]$ :
$$\\sup_{x \\in [0, 2]} |f(x) - P_2(x)| \\le \\frac{M_3}{6} \\cdot \\frac{2\\sqrt{3}}{9} = \\frac{M_3 \\sqrt{3}}{27}$$`
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

