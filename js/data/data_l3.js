/**
 * Données pédagogiques universitaires de Licence 3 de Mathématiques (S5 & S6)
 * Synthétisant les enseignements de Théorie des Groupes/Anneaux, Topologie, Mesure & Intégration et Analyse Harmonique
 */

window.MATHS_COURSES_L3 = {
  "L3-GRP1": {
    "title": "L3-GRP1 : Théorie des Groupes I : Morphismes, sous-groupes distingués et quotients",
    "domain": "Théorie des Groupes",
    "objectives": [
      "Énoncer et démontrer le Théorème de Lagrange : si $G$ est un groupe fini et $H$ un sous-groupe, alors $|H|$ divise $|G|$.",
      "Définir un sous-groupe distingué (ou normal) $H \\trianglelefteq G$ par $\\forall g \\in G, gHg^{-1} = H$.",
      "Construire le groupe quotient $G/H$ et formuler le Premier Théorème d'Isomorphisme : $G/\\ker(f) \\simeq \\text{Im}(f)$.",
      "Classifier les groupes cycliques et calculer l'indicatrice d'Euler $\\varphi(n)$."
    ],
    "keyPoints": [
      {
        "title": "1. Théorème de Lagrange et Ordre d'un élément",
        "content": "• **Théorème de Lagrange** : Pour tout groupe fini $G$ et tout sous-groupe $H \\le G$ :\n$$|G| = |H| \\times [G : H]$$\noù $[G : H]$ est l'indice de $H$ dans $G$ (nombre de classes à gauche $gH$).\n• **Corollaire fondamental** : L'ordre de tout élément $g \\in G$ divise l'ordre du groupe $|G|$, et par conséquent :\n$$g^{|G|} = e_G$$\n• Tout groupe d'ordre premier $p$ est cyclique et isomorphe à $\\mathbb{Z}/p\\mathbb{Z}$."
      },
      {
        "title": "2. Sous-groupes distingués et Premier Théorème d'Isomorphisme",
        "content": "• $H$ est **distingué** dans $G$ (noté $H \\trianglelefteq G$) si pour tout $g \\in G$, $gHg^{-1} \\subset H$.\n• Si $H \\trianglelefteq G$, l'ensemble quotient $G/H$ muni de la loi $(xH)(yH) = (xy)H$ est un groupe.\n• **Premier Théorème d'Isomorphisme de Noether** : Soit $f : G \\to G'$ un morphisme de groupes :\n$$\\ker(f) \\trianglelefteq G \\quad \\text{et} \\quad G/\\ker(f) \\simeq \\text{Im}(f)$$"
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
    "domain": "Topologie Générale",
    "objectives": [
      "Définir un espace métrique $(E, d)$ : positivité, séparation, symétrie, inégalité triangulaire.",
      "Définir la topologie métrique : boules ouvertes/fermées, ouverts, fermés, voisinages, intérieur, adhérence, frontière.",
      "Énoncer et démontrer le Théorème d'équivalence de toutes les normes en dimension finie.",
      "Caractériser la continuité métrique par les suites et par l'image réciproque d'ouverts."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et équivalence des normes en dimension finie",
        "content": "• Une **distance** $d$ sur $E$ vérifie : $d(x,y) \\ge 0$, $d(x,y)=0 \\iff x=y$, $d(x,y)=d(y,x)$ et $d(x,z) \\le d(x,y) + d(y,z)$.\n• Deux normes $N_1$ et $N_2$ sur $E$ sont **équivalentes** s'il existe $\\alpha, \\beta > 0$ tels que $\\alpha N_1 \\le N_2 \\le \\beta N_1$.\n• **Théorème fondamental** : Sur un espace vectoriel de **dimension finie**, TOUTES les normes sont équivalentes. Elles définissent exactement la même topologie."
      },
      {
        "title": "2. Adhérence, Intérieur et Caractérisation séquentielle",
        "content": "Soit $A \\subset E$ dans un espace métrique :\n• **Adhérence $\\bar{A}$** : plus petit fermé contenant $A$.\n$$x \\in \\bar{A} \\iff \\forall r > 0, B(x, r) \\cap A \\neq \\emptyset \\iff \\exists (x_n) \\in A^\\mathbb{N}, x_n \\to x$$\n• **Intérieur $\\mathring{A}$** : plus grand ouvert inclus dans $A$.\n$$x \\in \\mathring{A} \\iff \\exists r > 0, B(x, r) \\subset A$$\n• **Continuité globale** : $f : E \\to F$ est continue ssi pour tout ouvert $U$ de $F$, $f^{-1}(U)$ est un ouvert de $E$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer qu'un ensemble est fermé",
        "example": "Démontrer que $F = \\{(x, y) \\in \\mathbb{R}^2 \\mid x^2 + y^2 \\le 1\\}$ est un fermé de $\\mathbb{R}^2$.",
        "steps": [
          "**Étape 1 (Fonction continue)** : On considère l'application $f : \\mathbb{R}^2 \\to \\mathbb{R}$ définie par $f(x, y) = x^2 + y^2$. C'est une fonction polynôme, donc continue sur $\\mathbb{R}^2$.",
          "**Étape 2 (Image réciproque)** : L'ensemble $F$ s'écrit $F = f^{-1}(]-\\infty ; 1])$.",
          "**Étape 3 (Conclusion)** : Comme $]-\\infty ; 1]$ est un fermé de $\\mathbb{R}$ et $f$ est continue, son image réciproque $F$ est un fermé de $\\mathbb{R}^2$."
        ]
      }
    ],
    "traps": [
      "⚠️ En dimension infinie, les normes ne sont généralement PAS équivalentes (ex: sur $\\mathcal{C}([0,1], \\mathbb{R})$, la norme $\\|\\cdot\\|_1$ et la norme $\\|\\cdot\\|_\\infty$ ne sont pas équivalentes) !",
      "⚠️ L'image directe d'un ouvert par une application continue n'est pas nécessairement un ouvert (ex: $x \\mapsto x^2$ applique $]-1 ; 1[$ sur $[0 ; 1[$)."
    ],
    "flashcards": [
      {
        "q": "Toutes les normes sont-elles équivalentes sur un espace de dimension infinie ?",
        "a": "Non, cela n'est vrai qu'en dimension finie."
      },
      {
        "q": "Comment caractérise-t-on la continuité globale d'une fonction entre espaces topologiques ?",
        "a": "L'image réciproque de tout ouvert est un ouvert."
      }
    ]
  },
  "L3-CMP": {
    "title": "L3-CMP : Compacité, Connexité et Théorème de Heine",
    "domain": "Topologie Générale",
    "objectives": [
      "Définir la compacité par la propriété de Borel-Lebesgue (de tout recouvrement d'ouverts, on peut extraire un sous-recouvrement fini).",
      "Connaître le Théorème de Bolzano-Weierstrass métrique : un espace métrique est compact ssi toute suite admet une sous-suite convergente.",
      "Caractériser les compacts de $\\mathbb{R}^n$ : les parties **fermées et bornées**.",
      "Énoncer et appliquer le Théorème de Heine : toute fonction continue sur un compact est uniformément continue."
    ],
    "keyPoints": [
      {
        "title": "1. Compacité dans $\\mathbb{R}^n$ et Théorème de Borel-Lebesgue",
        "content": "• Dans $\\mathbb{R}^n$ muni d'une norme quelconque :\n$$K \\text{ est compact} \\iff K \\text{ est fermé et borné}$$\n• **Théorème de Weierstrass** : L'image d'un compact par une fonction continue est un compact. En particulier, toute fonction continue réelle sur un compact atteint ses bornes (maximum et minimum finis)."
      },
      {
        "title": "2. Théorème de Heine (Continuité uniforme)",
        "content": "Soit $(K, d_K)$ un espace métrique **compact** et $(F, d_F)$ un espace métrique quelconque :\n$$\\text{Si } f : K \\to F \\text{ est continue, alors } f \\text{ est } \\mathbf{uniformément\\;continue} :$$\n$$\\forall \\varepsilon > 0, \\quad \\exists \\delta > 0, \\quad \\forall x, y \\in K, \\quad d_K(x, y) < \\delta \\implies d_F(f(x), f(y)) < \\varepsilon$$\n*(Le $\\delta$ ne dépend pas du point $x$, mais uniquement de $\\varepsilon$)*."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer qu'une partie n'est pas compacte",
        "example": "Montrer que $A = ]0 ; 1]$ n'est pas un compact de $\\mathbb{R}$.",
        "steps": [
          "**Méthode séquentielle** : Considérons la suite $u_n = \\frac{1}{n}$ pour $n \\ge 1$.",
          "Chaque terme $u_n \\in A$. La suite $(u_n)$ converge vers $0$ dans $\\mathbb{R}$.",
          "Toute sous-suite extraite $(u_{\\varphi(n)})$ converge également vers $0$.",
          "Or $0 \\notin A$. Donc la suite $(u_n)$ n'admet aucune sous-suite convergeant dans $A$. Par le théorème de Bolzano-Weierstrass, $A$ n'est pas compact."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un espace vectoriel normé de dimension **infinie**, la boule unité fermée n'est JAMAIS compacte (Théorème de Riesz) !",
      "⚠️ Une fonction continue sur un intervalle quelconque n'est pas forcément uniformément continue (ex: $f(x) = x^2$ sur $\\mathbb{R}$ ou $g(x) = 1/x$ sur $]0 ; 1[$)."
    ],
    "flashcards": [
      {
        "q": "Quelle est la caractérisation des compacts dans $\\mathbb{R}^n$ ?",
        "a": "Ce sont les parties fermées et bornées."
      },
      {
        "q": "Énoncer le Théorème de Heine.",
        "a": "Toute fonction continue sur un espace métrique compact est uniformément continue."
      }
    ]
  },
  "L3-MES": {
    "title": "L3-MES : Théorie de la Mesure et Intégration de Lebesgue",
    "domain": "Théorie de la Mesure",
    "objectives": [
      "Définir une tribu ($\\sigma$-algèbre), un espace mesurable $(X, \\mathcal{A})$ et la tribu borélienne $\\mathcal{B}(\\mathbb{R}^n)$.",
      "Définir une mesure positive $\\mu$ et la mesure de Lebesgue $\\lambda$ sur $\\mathbb{R}^n$.",
      "Énoncer les grands théorèmes de convergence : Lemme de Fatou, Convergence Monotone de Beppo Levi, Théorème de Convergence Dominée de Lebesgue (TCD).",
      "Comprendre la supériorité de l'intégrale de Lebesgue sur Riemann (complétude de $L^1, L^2, L^p$)."
    ],
    "keyPoints": [
      {
        "title": "1. Théorème de Convergence Dominée de Lebesgue (TCD)",
        "content": "Soit $(f_n)$ une suite de fonctions mesurables définies sur un espace mesuré $(X, \\mathcal{A}, \\mu)$ telles que :\n1. $f_n(x) \\to f(x)$ pour $\\mu$-presque tout $x$ (convergence simple presque partout).\n2. **Hypothèse de domination** : Il existe une fonction $g \\in L^1(X, \\mu)$ telle que pour tout $n$ :\n$$|f_n(x)| \\le g(x) \\quad \\mu\\text{-p.p.}$$\n**Alors** $f \\in L^1(X, \\mu)$ et l'on peut intervertir limite et intégrale :\n$$\\lim_{n \\to +\\infty} \\int_X f_n d\\mu = \\int_X f d\\mu$$"
      },
      {
        "title": "2. Théorème de Convergence Monotone (Beppo Levi)",
        "content": "Soit $(f_n)$ une suite de fonctions mesurables **positives** telle que pour tout $n$, $0 \\le f_n \\le f_{n+1}$ presque partout.\nSi $f_n \\to f$ simplement p.p., alors :\n$$\\lim_{n \\to +\\infty} \\int_X f_n d\\mu = \\int_X \\left(\\lim_{n \\to +\\infty} f_n\\right) d\\mu = \\int_X f d\\mu$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une limite d'intégrale avec le TCD",
        "example": "Calculer la limite quand $n \\to +\\infty$ de $I_n = \\int_0^1 \\frac{n x^n}{1 + x} dx$.",
        "steps": [
          "**Étape 1 (Convergence simple)** : Pour tout $x \\in [0 ; 1[$, $x^n \\to 0$, donc $f_n(x) = \\frac{n x^n}{1 + x} \\to 0$. En $x=1$, $f_n(1) = \\frac{n}{2} \\to +\\infty$.",
          "La suite converge simplement vers 0 presque partout sur $[0 ; 1]$ (sauf en $x=1$, ensemble de mesure nulle).",
          "**Étape 2 (Changement de variable)** : En posant $u = x^n \\implies x = u^{1/n}$ : $I_n = \\int_0^1 \\frac{u}{1 + u^{1/n}} \\frac{1}{n} u^{\\frac{1}{n}-1} n du = \\int_0^1 \\frac{u^{1/n}}{1 + u^{1/n}} du$.",
          "**Étape 3 (Domination)** : Pour $u \\in ]0 ; 1]$, $g_n(u) = \\frac{u^{1/n}}{1 + u^{1/n}} \\to \\frac{1}{1 + 1} = \\frac{1}{2}$, et $|g_n(u)| \\le 1$ intégrable sur $[0 ; 1]$.",
          "**Conclusion** : Par convergence dominée, $\\lim I_n = \\int_0^1 \\frac{1}{2} du = \\frac{1}{2}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans le Théorème de Convergence Dominée, la fonction chapeau $g$ doit être **indépendante de $n$** et **intégrable** !",
      "⚠️ L'indicatrice de $\\mathbb{Q} \\cap [0 ; 1]$ n'est pas Riemann-intégrable, mais elle est Lebesgue-intégrable et son intégrale vaut 0 (car $\\mathbb{Q}$ est dénombrable donc de mesure nulle)."
    ],
    "flashcards": [
      {
        "q": "Quelle est l'hypothèse clé du Théorème de Convergence Dominée de Lebesgue ?",
        "a": "L'existence d'une fonction dominatrice $g \\in L^1$ indépendante de $n$ telle que $|f_n| \\le g$ presque partout."
      },
      {
        "q": "Quelle est la mesure de Lebesgue d'une partie dénombrable de $\\mathbb{R}$ ?",
        "a": "Elle est nulle (mesure 0)."
      }
    ]
  },
  "L3-GRP2": {
    "title": "L3-GRP2 : Actions de groupes, orbites, stabilisateurs et théorèmes de Sylow",
    "domain": "Théorie des Groupes",
    "objectives": [
      "Définir l'action d'un groupe $G$ sur un ensemble $X$, les notions d'orbite et de stabilisateur.",
      "Énoncer et démontrer la formule des classes : $|X| = \\sum |\\text{Orb}(x)|$ et la formule orbite-stabilisateur $|\\text{Orb}(x)| = [G : \\text{Stab}(x)]$.",
      "Énoncer les trois théorèmes de Sylow et classifier les groupes d'ordre d'ordre $pq$, $p^2$, etc."
    ],
    "keyPoints": [
      {
        "title": "1. Formule orbite-stabilisateur et formule des classes",
        "content": "• **Formule orbite-stabilisateur** : Pour tout $x \\in X$, l'application $g \\cdot \\text{Stab}(x) \\mapsto g \\cdot x$ est une bijection, d'où :\n$$|\\text{Orb}(x)| = [G : \\text{Stab}(x)] = \\frac{|G|}{|\\text{Stab}(x)|}$$\n• **Formule des classes** (action par conjugaison $g \\cdot x = gxg^{-1}$) :\n$$|G| = |Z(G)| + \\sum_{i=1}^k [G : C_G(x_i)]$$\noù $Z(G)$ est le centre de $G$ et $C_G(x)$ le centralisateur de $x$."
      },
      {
        "title": "2. Théorèmes de Sylow",
        "content": "Soit $G$ un groupe fini d'ordre $|G| = p^{\\alpha} m$ avec $p$ premier et $p \\nmid m$ :\n1. **Existence** : $G$ contient au moins un sous-groupe d'ordre $p^{\\alpha}$ (appelé $p$-sous-groupe de Sylow).\n2. **Conjugaison** : Tous les $p$-Sylow de $G$ sont deux à deux conjugués.\n3. **Nombre de Sylow** : Le nombre $n_p$ de $p$-Sylow vérifie $n_p \\equiv 1 \\pmod{p}$ et $n_p \\mid m$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Montrer qu'un groupe d'ordre 15 est cyclique",
        "example": "Démontrer que tout groupe d'ordre $15 = 3 \\times 5$ est isomorphe à $\\mathbb{Z}/15\\mathbb{Z}$.",
        "steps": [
          "**Étape 1 (Nombre de 5-Sylow)** : $n_5 \\equiv 1 \\pmod{5}$ et $n_5 \\mid 3 \\implies n_5 = 1$. Le 5-Sylow $P$ est unique, donc distingué.",
          "**Étape 2 (Nombre de 3-Sylow)** : $n_3 \\equiv 1 \\pmod{3}$ et $n_3 \\mid 5 \\implies n_3 = 1$. Le 3-Sylow $Q$ est unique, donc distingué.",
          "**Étape 3 (Produit direct)** : $P \\cap Q = \\{e\\}$ par Lagrange, et $|PQ| = |P||Q| = 15 = |G|$, d'où $G \\simeq P \\times Q \\simeq \\mathbb{Z}/5\\mathbb{Z} \\times \\mathbb{Z}/3\\mathbb{Z}$.",
          "**Conclusion** : Comme $\\text{PGCD}(3, 5) = 1$, par le lemme des restes chinois, $G \\simeq \\mathbb{Z}/15\\mathbb{Z}$ (cyclique)."
        ]
      }
    ],
    "traps": [
      "⚠️ Un sous-groupe de Sylow est distingué si et seulement si il est **unique** ($n_p = 1$) !"
    ],
    "flashcards": [
      {
        "q": "Énoncer la formule orbite-stabilisateur.",
        "a": "$|\\text{Orb}(x)| \\times |\\text{Stab}(x)| = |G|$ (ou $|\\text{Orb}(x)| = [G : \\text{Stab}(x)]$)."
      },
      {
        "q": "Que valent les congruences et divisibilités du nombre $n_p$ de $p$-Sylow ?",
        "a": "$n_p \\equiv 1 \\pmod{p}$ et $n_p$ divise $m$ (où $|G| = p^\\alpha m$)."
      }
    ]
  },
  "L3-ANN": {
    "title": "L3-ANN : Anneaux, idéaux, anneaux principaux et factoriels, polynômes",
    "domain": "Structures Algébriques",
    "objectives": [
      "Définir anneau, corps, sous-anneau, idéal à gauche, à droite, bilatère, et quotient $A/I$.",
      "Caractériser les idéaux premiers et maximaux (Théorème : $A/I$ est un corps $\\iff I$ est maximal).",
      "Maîtriser la hiérarchie : Anneaux euclidiens $\\subset$ Anneaux principaux $\\subset$ Anneaux factoriels $\\subset$ Anneaux intègres."
    ],
    "keyPoints": [
      {
        "title": "1. Idéaux et Anneaux quotients",
        "content": "Soit $A$ un anneau commutatif unitaire :\n• Un sous-groupe $(I, +)$ est un **idéal** si $\\forall a \\in A, \\forall x \\in I, ax \\in I$.\n• $A/I$ est un corps $\\iff I$ est un **idéal maximal**.\n• $A/I$ est intègre $\\iff I$ est un **idéal premier**."
      },
      {
        "title": "2. Anneaux principaux et factoriels",
        "content": "• Un anneau intègre est **principal** si tout idéal est engendré par un seul élément ($I = (a) = aA$).\n• Exemples classiques d'anneaux principaux : $\\mathbb{Z}$ et $\\mathbb{K}[X]$.\n• Dans un anneau principal, tout idéal premier non nul est maximal (Théorème de Bézout)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Montrer qu'un quotient de polynôme est un corps",
        "example": "Montrer que $\\mathbb{R}[X]/(X^2 + 1)$ est un corps isomorphe à $\\mathbb{C}$.",
        "steps": [
          "**Étape 1** : $X^2 + 1$ est de degré 2 et sans racine dans $\\mathbb{R}$ ($\\Delta = -4 < 0$), donc il est irréductible dans $\\mathbb{R}[X]$.",
          "**Étape 2** : Comme $\\mathbb{R}[X]$ est principal, tout idéal engendré par un irréductible est maximal.",
          "**Étape 3** : Le quotient $\\mathbb{R}[X]/(X^2+1)$ est donc un corps.",
          "**Conclusion** : L'évaluation en $i$ montre l'isomorphisme avec $\\mathbb{C}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans $\\mathbb{Z}[X]$, l'idéal $(2, X)$ n'est pas principal : $\\mathbb{Z}[X]$ est factoriel mais **non principal** !"
    ],
    "flashcards": [
      {
        "q": "À quelle condition sur l'idéal $I$ l'anneau quotient $A/I$ est-il un corps ?",
        "a": "Si et seulement si $I$ est un idéal maximal de $A$."
      },
      {
        "q": "Donner un exemple d'anneau factoriel qui n'est pas principal.",
        "a": "$\\mathbb{Z}[X]$ (ou $\\mathbb{K}[X, Y]$)."
      }
    ]
  },
  "L3-BAN": {
    "title": "L3-BAN : Espaces vectoriels normés, complétude et espaces de Banach / Hilbert",
    "domain": "Analyse Fonctionnelle",
    "objectives": [
      "Définir un espace de Banach (EVN complet) et un espace de Hilbert (espace préhilbertien complet).",
      "Énoncer et démontrer le Théorème du point fixe de Picard-Banach (application contractante).",
      "Énoncer les grands théorèmes de l'analyse fonctionnelle : Théorème de Baire, Banach-Steinhaus, Théorème de l'application ouverte."
    ],
    "keyPoints": [
      {
        "title": "1. Espaces de Banach et Théorème du point fixe",
        "content": "• Un **espace de Banach** est un espace vectoriel normé complet pour la distance induite par la norme.\n• **Théorème du point fixe de Banach** : Soit $(E, d)$ un espace métrique complet et $f : E \\to E$ une application $k$-contractante ($k < 1$). Alors $f$ admet un **unique point fixe** $x^* \\in E$, et pour tout $x_0$, la suite récurrente $x_{n+1} = f(x_n)$ converge vers $x^*$ avec majoration de l'erreur : $d(x_n, x^*) \\le \\frac{k^n}{1-k} d(x_0, x_1)$."
      },
      {
        "title": "2. Théorème de Baire",
        "content": "Dans un espace métrique complet, toute intersection dénombrable d'ouverts denses est dense.\n• Corollaire : Un espace de Banach ne peut pas être réunion dénombrable de fermés d'intérieur vide."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une équation intégrale par le point fixe de Banach",
        "example": "Résoudre $u(x) = f(x) + \\lambda \\int_0^1 K(x, t) u(t) dt$ pour $|lambda|$ assez petit sur $\\mathcal{C}([0,1])$.",
        "steps": [
          "**Étape 1** : $(\\mathcal{C}([0,1]), \\|\\cdot\\|_\\infty)$ est un espace de Banach.",
          "**Étape 2** : On pose $T(u)(x) = f(x) + \\lambda \\int_0^1 K(x, t) u(t) dt$.",
          "**Étape 3** : $\\|T(u) - T(v)\\|_\\infty \\le |\\lambda| \\|K\\|_\\infty \\|u - v\\|_\\infty$. Pour $|\\lambda| < 1/\\|K\\|_\\infty$, $T$ est contractante.",
          "**Conclusion** : Par le théorème du point fixe de Banach, il existe une unique solution."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour appliquer le théorème du point fixe de Banach, la complétude de l'espace est **indispensable** !"
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce qu'un espace de Banach ?",
        "a": "Un espace vectoriel normé complet."
      },
      {
        "q": "Qu'est-ce qu'un espace de Hilbert ?",
        "a": "Un espace préhilbertien complet pour la norme induite par le produit scalaire."
      }
    ]
  },
  "L3-SDF": {
    "title": "L3-SDF : Séries de fonctions et convergence uniforme / normale",
    "domain": "Analyse Harmonique et Fonctionnelle",
    "objectives": [
      "Distinguer convergence simple, uniforme et normale pour une série de fonctions $\\sum f_n(x)$.",
      "Établir les théorèmes de continuité, dérivation terme à terme et intégration terme à terme.",
      "Appliquer le critère de Weierstrass ($\\|f_n\\|_\\infty \\le M_n$ avec $\\sum M_n < +\\infty$)."
    ],
    "keyPoints": [
      {
        "title": "1. Hiérarchie des modes de convergence",
        "content": "• **Convergence normale** : $\\sum \\|f_n\\|_\\infty < +\\infty$.\n• **Théorème** : Convergence normale $\\implies$ Convergence uniforme $\\implies$ Convergence simple.\n• Si chaque $f_n$ est continue et si $\\sum f_n$ converge uniformément sur $I$, alors la somme $S = \\sum_{n=0}^{+\\infty} f_n$ est **continue** sur $I$."
      },
      {
        "title": "2. Dérivation terme à terme",
        "content": "Si chaque $f_n$ est de classe $\\mathcal{C}^1$, si $\\sum f_n(x_0)$ converge en au moins un point $x_0$, et si la série des dérivées $\\sum f_n'$ **converge uniformément** sur tout segment de $I$, alors $S = \\sum f_n$ est de classe $\\mathcal{C}^1$ et :\n$$S'(x) = \\sum_{n=0}^{+\\infty} f_n'(x)$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer la convergence normale par majoration de la norme uniforme",
        "example": "Étudier la convergence sur $\\mathbb{R}$ de $\\sum_{n=1}^{+\\infty} \\frac{\\cos(nx)}{n^2}$.",
        "steps": [
          "**Étape 1** : Pour tout $x \\in \\mathbb{R}$, $\\left| \\frac{\\cos(nx)}{n^2} \\right| \\le \\frac{1}{n^2}$.",
          "**Étape 2** : La norme uniforme vérifie $\\|f_n\\|_\\infty \\le \\frac{1}{n^2}$.",
          "**Étape 3** : La série numérique $\\sum \\frac{1}{n^2}$ est une série de Riemann convergente ($2 > 1$).",
          "**Conclusion** : La série converge normalement (donc uniformément) sur $\\mathbb{R}$. Sa somme est continue."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour dériver terme à terme, c'est la série des **dérivées** $\\sum f_n'$ qui doit converger uniformément !"
    ],
    "flashcards": [
      {
        "q": "La convergence normale implique-t-elle la convergence uniforme ?",
        "a": "Oui, toujours."
      },
      {
        "q": "Que garantit la convergence uniforme d'une série de fonctions continues sur un intervalle ?",
        "a": "La continuité de la fonction somme sur cet intervalle."
      }
    ]
  },
  "L3-SER": {
    "title": "L3-SER : Séries entières et rayon de convergence",
    "domain": "Analyse Complexe",
    "objectives": [
      "Définir une série entière $\\sum a_n z^n$ et son rayon de convergence $R \\in [0 ; +\\infty]$.",
      "Appliquer le lemme d'Abel et calculer $R$ par la règle de d'Alembert ou de Hadamard.",
      "Développer en série entière les fonctions usuelles et dériver/intégrer sur le disque ouvert de convergence."
    ],
    "keyPoints": [
      {
        "title": "1. Lemme d'Abel et Rayon de convergence",
        "content": "• **Lemme d'Abel** : S'il existe $z_0 \\neq 0$ tel que la suite $(a_n z_0^n)$ soit bornée, alors pour tout $z$ tel que $|z| < |z_0|$, la série $\\sum a_n z^n$ est **absolument convergente**.\n• **Rayon de convergence $R$** : $R = \\sup\\{r \\ge 0 \\mid (a_n r^n) \\text{ est bornée}\\}$.\n• Sur le disque ouvert $D(0, R)$, la convergence est absolue ; hors du disque fermé, la série diverge grossièrement."
      },
      {
        "title": "2. Règle de d'Alembert pour les séries entières",
        "content": "Si $\\lim_{n \\to +\\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| = L$, alors le rayon de convergence vaut :\n$$R = \\frac{1}{L} \\quad (R = +\\infty \\text{ si } L = 0, \\text{ et } R = 0 \\text{ si } L = +\\infty)$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver le rayon de convergence par la règle de d'Alembert",
        "example": "Déterminer le rayon de convergence de $\\sum_{n=0}^{+\\infty} \\frac{n!}{n^n} z^n$.",
        "steps": [
          "**Étape 1** : $\\left| \\frac{a_{n+1}}{a_n} \\right| = \\frac{(n+1)!}{(n+1)^{n+1}} \\times \\frac{n^n}{n!} = \\frac{(n+1) n^n}{(n+1)(n+1)^n} = \\left( \\frac{n}{n+1} \\right)^n = \\frac{1}{\\left(1 + \\frac{1}{n}\\right)^n}$.",
          "**Étape 2** : On sait que $\\lim (1 + 1/n)^n = e$. Donc $L = \\frac{1}{e}$.",
          "**Conclusion** : Le rayon de convergence est $R = \\frac{1}{L} = e$."
        ]
      }
    ],
    "traps": [
      "⚠️ Le comportement sur le cercle frontière $|z| = R$ dépend de chaque série : elle peut converger en certains points et diverger en d'autres !"
    ],
    "flashcards": [
      {
        "q": "Énoncer la règle de d'Alembert pour le rayon de convergence $R$.",
        "a": "Si $|a_{n+1}/a_n| \\to L$, alors $R = 1/L$."
      },
      {
        "q": "Que peut-on dire de la somme d'une série entière sur son disque ouvert de convergence ?",
        "a": "Elle est indéfiniment dérivable (analytique) et se dérive terme à terme."
      }
    ]
  },
  "L3-FOU": {
    "title": "L3-FOU : Séries de Fourier, égalité de Parseval et convergence ponctuelle",
    "domain": "Analyse Harmonique",
    "objectives": [
      "Calculer les coefficients de Fourier trigonométriques et complexes $c_n(f)$ d'une fonction $T$-périodique.",
      "Énoncer et appliquer le Théorème de Dirichlet (convergence ponctuelle pour les fonctions $\\mathcal{C}^1$ par morceaux).",
      "Énoncer et appliquer l'égalité de Parseval pour calculer des sommes de séries numériques remarquables."
    ],
    "keyPoints": [
      {
        "title": "1. Coefficients de Fourier et Théorème de Dirichlet",
        "content": "Pour $f$ $2\\pi$-périodique intégrable :\n• $c_n(f) = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} f(t) e^{-int} dt$.\n• **Théorème de Dirichlet** : Si $f$ est $2\\pi$-périodique et $\\mathcal{C}^1$ par morceaux, alors sa série de Fourier converge en tout point $x$ vers sa régularisée :\n$$\\lim_{N \\to +\\infty} S_N(f)(x) = \\frac{f(x^+) + f(x^-)}{2}$$\nSi $f$ est continue en $x$, la somme de Fourier vaut exactement $f(x)$."
      },
      {
        "title": "2. Formule de Parseval (Conservation de l'énergie)",
        "content": "Pour toute fonction $f \\in L^2([-\\pi ; \\pi])$ :\n$$\\frac{1}{2\\pi} \\int_{-\\pi}^\\pi |f(t)|^2 dt = \\sum_{n=-\\infty}^{+\\infty} |c_n(f)|^2 = a_0^2 + \\frac{1}{2} \\sum_{n=1}^{+\\infty} (a_n^2 + b_n^2)$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer $\\sum_{n=1}^{+\\infty} \\frac{1}{n^2}$ grâce à la série de Fourier de $f(x) = x^2$",
        "example": "Déterminer la valeur de $\\zeta(2) = \\sum_{n=1}^{+\\infty} \\frac{1}{n^2}$.",
        "steps": [
          "**Étape 1** : Soit $f$ $2\\pi$-périodique paire égale à $x^2$ sur $[-\\pi ; \\pi]$. Ses coefficients sont $a_0 = \\frac{\\pi^2}{3}$ et $a_n = \\frac{4(-1)^n}{n^2}$ pour $n \\ge 1$ ($b_n = 0$).",
          "**Étape 2 (Dirichlet en 0)** : $f$ est continue en 0 : $f(0) = 0 = a_0 + \\sum_{n=1}^{+\\infty} a_n = \\frac{\\pi^2}{3} + 4 \\sum_{n=1}^{+\\infty} \\frac{(-1)^n}{n^2}$.",
          "**Étape 3 (Dirichlet en $\\pi$)** : $f(\\pi) = \\pi^2 = \\frac{\\pi^2}{3} + 4 \\sum_{n=1}^{+\\infty} \\frac{1}{n^2}$.",
          "**Conclusion** : $4 \\sum_{n=1}^{+\\infty} \\frac{1}{n^2} = \\frac{2\\pi^2}{3} \\implies \\sum_{n=1}^{+\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Aux points de discontinuité, la série de Fourier converge vers la moyenne des limites à gauche et à droite $\\frac{f(x^+) + f(x^-)}{2}$ !"
    ],
    "flashcards": [
      {
        "q": "Vers quoi converge la série de Fourier d'une fonction $\\mathcal{C}^1$ par morceaux selon Dirichlet ?",
        "a": "Vers la demi-somme des limites à gauche et à droite : $\\frac{f(x^+) + f(x^-)}{2}$."
      },
      {
        "q": "Que permet d'exprimer la formule de Parseval ?",
        "a": "La norme $L^2$ de la fonction comme somme des carrés de ses coefficients de Fourier."
      }
    ]
  },
  "L3-GPR": {
    "title": "L3-GPR : Géométrie projective élémentaire",
    "domain": "Géométrie Fondamentale",
    "objectives": [
      "Définir l'espace projectif $\\mathbb{P}(E)$ comme ensemble des droites vectorielles de $E$.",
      "Maîtriser les coordonnées homogènes et les cartes affines.",
      "Définir le birapport de quatre points alignés et énoncer le Théorème de Desargues et de Pappus."
    ],
    "keyPoints": [
      {
        "title": "1. Espace projectif et coordonnées homogènes",
        "content": "• Pour $E$ de dimension $n+1$, l'espace projectif $\\mathbb{P}(E)$ est de dimension $n$.\n• Un point de $\\mathbb{P}^n(\\mathbb{K})$ est représenté par une classe de proportionnalité de coordonnées non nulles : $[x_0 : x_1 : \\dots : x_n]$.\n• Deux droites du plan projectif $\\mathbb{P}^2$ sont **toujours sécantes** (pas de droites strictement parallèles : elles se coupent sur la droite à l'infini)."
      },
      {
        "title": "2. Birapport et homographies",
        "content": "Le birapport de quatre points distincts d'une droite projective est invariant par toute projectivité (homographie) :\n$$[A, B, C, D] = \\frac{x_C - x_A}{x_C - x_B} : \\frac{x_D - x_A}{x_D - x_B}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer le point d'intersection de deux droites parallèles à l'infini",
        "example": "Trouver l'intersection dans $\\mathbb{P}^2(\\mathbb{R})$ des droites d'équations affines $y = 2x + 1$ et $y = 2x + 5$.",
        "steps": [
          "**Étape 1 (Homogénéisation)** : On pose $x = X/Z, y = Y/Z$. Droite 1 : $Y = 2X + Z$. Droite 2 : $Y = 2X + 5Z$.",
          "**Étape 2 (Intersection)** : En soustrayant : $4Z = 0 \\implies Z = 0$ (droite à l'infini).",
          "**Étape 3** : Pour $Z = 0$, $Y = 2X$. En posant $X = 1$, on a $Y = 2$.",
          "**Conclusion** : Les droites se coupent au point à l'infini de coordonnées homogènes $[1 : 2 : 0]$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un espace projectif, $(0, 0, \\dots, 0)$ ne représente **aucun point** !"
    ],
    "flashcards": [
      {
        "q": "Deux droites distinctes du plan projectif peuvent-elles être sans intersection ?",
        "a": "Non, deux droites du plan projectif sont toujours sécantes en un unique point."
      },
      {
        "q": "Quelle quantité est invariante par les homographies projectives ?",
        "a": "Le birapport de 4 points alignés."
      }
    ]
  },
  "L3-GDF": {
    "title": "L3-GDF : Sous-variétés différentielles et espaces tangents",
    "domain": "Géométrie Différentielle",
    "objectives": [
      "Définir une sous-variété de dimension $d$ de $\\mathbb{R}^n$ par cartes locales ou comme ligne de niveau régulière d'une submersion.",
      "Déterminer l'espace tangent $T_x M$ à une sous-variété.",
      "Énoncer et appliquer le Théorème des Extrema Liés (Multiplicateurs de Lagrange)."
    ],
    "keyPoints": [
      {
        "title": "1. Caractérisation par submersion",
        "content": "Soit $f : U \\subset \\mathbb{R}^n \\to \\mathbb{R}^{n-d}$ de classe $\\mathcal{C}^1$. Si $0$ est une **valeur régulière** de $f$ (la différentielle $df(x)$ est surjective en tout point de $f^{-1}(\\{0\\})$), alors :\n$$M = f^{-1}(\\{0\\})$$\nest une sous-variété différentielle de dimension $d$ de $\\mathbb{R}^n$."
      },
      {
        "title": "2. Espace tangent et multiplicateurs de Lagrange",
        "content": "• L'espace tangent en $x$ est $T_x M = \\ker(df(x))$.\n• **Théorème de Lagrange** : Pour optimiser une fonction $g$ sous la contrainte $f(x) = 0$, en tout extremum local, il existe des multiplicateurs $\\lambda_1, \\dots, \\lambda_{n-d}$ tels que :\n$$\\nabla g(x) = \\sum_{j=1}^{n-d} \\lambda_j \\nabla f_j(x)$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver l'espace tangent à la sphère $S^2$",
        "example": "Déterminer l'espace tangent à la sphère $x^2 + y^2 + z^2 = 1$ au point $(0, 0, 1)$.",
        "steps": [
          "**Étape 1** : $f(x, y, z) = x^2 + y^2 + z^2 - 1$. Gradient : $\\nabla f(x, y, z) = (2x, 2y, 2z)$.",
          "**Étape 2** : En $(0, 0, 1)$, $\\nabla f(0, 0, 1) = (0, 0, 2) \\neq (0,0,0)$ (valeur régulière).",
          "**Étape 3** : $T_{(0,0,1)} S^2 = \\ker(df(0,0,1)) = \\{(u, v, w) \\mid 0u + 0v + 2w = 0\\} = \\{(u, v, 0)\\}$.",
          "**Conclusion** : L'espace tangent est le plan horizontal $z = 0$ (vectoriel) ou $z = 1$ (affine)."
        ]
      }
    ],
    "traps": [
      "⚠️ Si la différentielle n'est pas de rang maximal, le lieu des zéros n'est pas forcément une variété (présence de points de rebroussement ou d'auto-intersection) !"
    ],
    "flashcards": [
      {
        "q": "Comment s'exprime l'espace tangent $T_x M$ pour une variété définie par submersion $f(x) = 0$ ?",
        "a": "$T_x M = \\ker(df(x))$."
      },
      {
        "q": "Que stipule la méthode des multiplicateurs de Lagrange pour un extremum sous contrainte ?",
        "a": "Le gradient de la fonction à optimiser est combinaison linéaire des gradients des contraintes."
      }
    ]
  },
  "L3-NUM": {
    "title": "L3-NUM : Analyse numérique : interpolation, quadratures et résolution matricielle",
    "domain": "Mathématiques Appliquées",
    "objectives": [
      "Construire le polynôme d'interpolation de Lagrange et analyser le phénomène de Runge.",
      "Appliquer les formules de quadrature numérique (trapèzes, Simpson, Gauss-Legendre) et évaluer les erreurs.",
      "Résoudre des systèmes linéaires par méthodes directes (décomposition LU, Cholesky) et itératives (Jacobi, Gauss-Seidel)."
    ],
    "keyPoints": [
      {
        "title": "1. Interpolation de Lagrange",
        "content": "Soient $n+1$ points distincts $(x_i, y_i)$. L'unique polynôme $P_n \\in \\mathbb{R}_n[X]$ vérifiant $P_n(x_i) = y_i$ est :\n$$P_n(X) = \\sum_{i=0}^n y_i L_i(X) \\quad \\text{avec} \\quad L_i(X) = \\prod_{j \\neq i} \\frac{X - x_j}{x_i - x_j}$$\n• **Erreur d'interpolation** : $f(x) - P_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} \\prod_{i=0}^n (x - x_i)$."
      },
      {
        "title": "2. Décomposition de Cholesky",
        "content": "Pour toute matrice symétrique définie positive $A \\in \\mathcal{S}_n^{++}(\\mathbb{R})$, il existe une unique matrice triangulaire inférieure $L$ à diagonale strictement positive telle que :\n$$A = L {}^tL$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Évaluer l'erreur de la méthode des trapèzes",
        "example": "Majorer l'erreur de quadrature sur un pas $h = b - a$ pour la méthode des trapèzes.",
        "steps": [
          "**Formule** : $\\int_a^b f(x) dx \\approx \\frac{b-a}{2}(f(a) + f(b))$.",
          "**Erreur** : $E(f) = -\\frac{(b-a)^3}{12} f''(\\xi)$.",
          "**Conclusion** : La méthode des trapèzes est d'ordre 1 (exacte pour les polynômes de degré $\\le 1$)."
        ]
      }
    ],
    "traps": [
      "⚠️ Augmenter le degré d'un polynôme d'interpolation sur des points équidistants ne garantit pas la convergence (phénomène d'oscillation de Runge) : il faut privilégier les abscisses de Tchebychev !"
    ],
    "flashcards": [
      {
        "q": "Quelle condition sur une matrice $A$ permet d'appliquer la décomposition de Cholesky $A = L {}^tL$ ?",
        "a": "Elle doit être symétrique définie positive."
      },
      {
        "q": "Comment éviter le phénomène de Runge en interpolation polynomiale ?",
        "a": "En choisissant des nœuds d'interpolation de Tchebychev au lieu de points équidistants."
      }
    ]
  },
  "L3-PROG": {
    "title": "L3-PROG : Optimisation et programmation linéaire (algorithme du simplexe)",
    "domain": "Optimisation et Recherche Opérationnelle",
    "objectives": [
      "Formuler un problème d'optimisation linéaire sous forme standard : $\\max c^T x$ sous $Ax \\le b$ et $x \\ge 0$.",
      "Maîtriser la géométrie des polyèdres convexes et caractériser les sommets (solutions de base admissibles).",
      "Dérouler l'algorithme du simplexe et formuler le Théorème de dualité forte de la programmation linéaire."
    ],
    "keyPoints": [
      {
        "title": "1. Solutions de base admissibles et sommets",
        "content": "• L'ensemble admissible $P = \\{x \\in \\mathbb{R}^n \\mid Ax = b, x \\ge 0\\}$ est un polyèdre convexe.\n• Théorème fondamental : Si un problème linéaire admet une solution optimale finie, alors il existe un **sommet** (solution de base réalisable) qui est optimal.\n• L'algorithme du simplexe parcourt les sommets adjacents en augmentant strictement la valeur de la fonction objectif."
      },
      {
        "title": "2. Théorème de dualité forte",
        "content": "• Problème primal : $\\max c^T x$ s.c. $Ax \\le b, x \\ge 0$.\n• Problème dual : $\\min b^T y$ s.c. $A^T y \\ge c, y \\ge 0$.\n• **Dualité forte** : Si le primal admet une solution optimale $x^*$, alors le dual admet une solution optimale $y^*$, et leurs valeurs optimales coïncident : $c^T x^* = b^T y^*$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire le problème dual",
        "example": "Écrire le dual de : Maximiser $z = 3x_1 + 2x_2$ sous $x_1 + 2x_2 \\le 6$ et $2x_1 + x_2 \\le 8$ ($x_1, x_2 \\ge 0$).",
        "steps": [
          "**Étape 1 (Variables duales)** : 2 contraintes $\\implies$ 2 variables duales $y_1, y_2 \\ge 0$.",
          "**Étape 2 (Objectif dual)** : Minimiser $w = 6y_1 + 8y_2$.",
          "**Étape 3 (Contraintes duales)** : $y_1 + 2y_2 \\ge 3$ et $2y_1 + y_2 \\ge 2$.",
          "**Conclusion** : Le dual est : $\\min 6y_1 + 8y_2$ sous $y_1 + 2y_2 \\ge 3, 2y_1 + y_2 \\ge 2, y_1, y_2 \\ge 0$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans le simplexe, une variable entrante est choisie parmi les coûts réduits strictement positifs, et la variable sortante est déterminée par la règle du ratio minimal !"
    ],
    "flashcards": [
      {
        "q": "Où se situe toujours la solution optimale d'un problème d'optimisation linéaire ?",
        "a": "En au moins un sommet (solution de base admissible) du polyèdre des contraintes."
      },
      {
        "q": "Que dit le théorème de dualité forte en programmation linéaire ?",
        "a": "Les valeurs optimales du primal et du dual sont exactement égales."
      }
    ]
  },
  "L3-PRC": {
    "title": "L3-PRC : Variables aléatoires à densité, convergence en loi et Théorème Central Limite",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Définir une variable aléatoire absolument continue par sa densité de probabilité $f_X(t) \\ge 0$ avec $\\int_\\mathbb{R} f_X(t) dt = 1$.",
      "Maîtriser les lois continues usuelles : uniforme $\\mathcal{U}([a,b])$, exponentielle $\\mathcal{E}(\\lambda)$, gaussienne $\\mathcal{N}(\\mu, \\sigma^2)$.",
      "Énoncer et démontrer par les fonctions caractéristiques la Loi Forte des Grands Nombres et le Théorème Central Limite (TCL)."
    ],
    "keyPoints": [
      {
        "title": "1. Loi normale (gaussienne) $\\mathcal{N}(\\mu, \\sigma^2)$",
        "content": "La densité de probabilité de la loi normale centrée réduite $\\mathcal{N}(0, 1)$ est :\n$$f(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{x^2}{2}}$$\n• Si $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$, alors $Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$."
      },
      {
        "title": "2. Théorème Central Limite (TCL)",
        "content": "Soient $(X_n)_{n \\ge 1}$ des variables aléatoires i.i.d. d'espérance $\\mu$ et de variance finie $\\sigma^2 > 0$ :\n$$Z_n = \\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma \\sqrt{n}} = \\sqrt{n} \\left( \\frac{M_n - \\mu}{\\sigma} \\right) \\xrightarrow[n \\to +\\infty]{\\mathcal{L}} \\mathcal{N}(0, 1)$$\nPour tout intervalle $[a ; b]$, $P(a \\le Z_n \\le b) \\xrightarrow[n \\to +\\infty]{} \\int_a^b \\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2} dt$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Normaliser une somme de variables pour appliquer le TCL",
        "example": "Soit $S_{100} = \\sum_{i=1}^{100} X_i$ où les $X_i$ sont i.i.d. avec $\\mu = 5$ et $\\sigma^2 = 9$. Approcher $P(S_{100} \\le 530)$.",
        "steps": [
          "**Étape 1** : $E(S_{100}) = 100 \\times 5 = 500$ et $V(S_{100}) = 100 \\times 9 = 900$, d'où $\\sigma(S_{100}) = 30$.",
          "**Étape 2 (Centrage et réduction)** : $P(S_{100} \\le 530) = P\\left( \\frac{S_{100} - 500}{30} \\le \\frac{530 - 500}{30} \\right) = P(Z \\le 1)$.",
          "**Conclusion** : Par lecture de la table de Gauss $\\Phi(1) \\approx 0{,}8413$, la probabilité est environ $84{,}13\\%$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour appliquer le TCL, la variance $\\sigma^2$ doit impérativement être **finie** (contre-exemple : loi de Cauchy) !"
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème Central Limite (TCL).",
        "a": "La somme normalisée $\\frac{S_n - n\\mu}{\\sigma\\sqrt{n}}$ de variables i.i.d. de variance finie converge en loi vers la loi normale $\\mathcal{N}(0, 1)$."
      },
      {
        "q": "Que vaut l'intégrale de la densité de la loi normale centrée réduite sur $\\mathbb{R}$ ?",
        "a": "$1$ (puisque c'est une mesure de probabilité)."
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
      "title": "Théorème de Lagrange",
      "skill": "Ordre d'un sous-groupe",
      "statement": "Soit $G$ un groupe fini d'ordre 24. Quel ordre un sous-groupe $H$ de $G$ NE peut-il PAS avoir ?",
      "options": [
        "$5$",
        "$6$",
        "$8$",
        "$12$"
      ],
      "correctIndex": 0,
      "answer": "$5$",
      "hint1": "D'après le théorème de Lagrange, l'ordre d'un sous-groupe doit diviser l'ordre du groupe.",
      "hint2": "5 ne divise pas 24 car $24 = 5 \\times 4 + 4$.",
      "solution": "D'après le théorème de Lagrange, $|H|$ divise $|G| = 24$. Comme 5 ne divise pas 24, un tel sous-groupe ne peut pas exister."
    }
  ],
  "L3-GRP2": [
    {
      "id": "L3-GRP2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Formule orbite-stabilisateur",
      "skill": "Calculer le cardinal d'une orbite",
      "statement": "Un groupe $G$ d'ordre 60 agit sur un ensemble $X$. Si le stabilisateur d'un point $x$ est d'ordre 12, quel est le cardinal de son orbite ?",
      "options": [
        "$5$",
        "$12$",
        "$60$",
        "$720$"
      ],
      "correctIndex": 0,
      "answer": "$5$",
      "hint1": "Formule orbite-stabilisateur : $|\\text{Orb}(x)| \\times |\\text{Stab}(x)| = |G|$.",
      "hint2": "$|\\text{Orb}(x)| = 60 / 12 = 5$.",
      "solution": "Par la relation orbite-stabilisateur, $|\\text{Orb}(x)| = \\frac{|G|}{|\\text{Stab}(x)|} = \\frac{60}{12} = 5$."
    }
  ],
  "L3-ANN": [
    {
      "id": "L3-ANN-1",
      "tier": 1,
      "type": "mcq",
      "title": "Quotient par un idéal maximal",
      "skill": "Propriétés des anneaux quotients",
      "statement": "Si $A$ est un anneau commutatif unitaire et $I$ un idéal maximal de $A$, quelle est la nature de l'anneau quotient $A/I$ ?",
      "options": [
        "Un corps",
        "Un anneau non intègre",
        "Un espace vectoriel de dimension 0",
        "Un groupe cyclique"
      ],
      "correctIndex": 0,
      "answer": "Un corps",
      "hint1": "Un idéal est maximal si et seulement si tout élément non nul du quotient est inversible.",
      "hint2": "C'est un théorème fondamental d'algèbre générale.",
      "solution": "Un idéal $I$ d'un anneau commutatif unitaire est maximal si et seulement si l'anneau quotient $A/I$ est un corps."
    }
  ],
  "L3-MET": [
    {
      "id": "L3-MET-1",
      "tier": 1,
      "type": "mcq",
      "title": "Équivalence des normes en dimension finie",
      "skill": "Topologie des EVN",
      "statement": "Soit $E$ un $\\mathbb{R}$-espace vectoriel de dimension finie $n$. Que peut-on affirmer de deux normes quelconques $N_1$ et $N_2$ sur $E$ ?",
      "options": [
        "Elles sont toujours équivalentes",
        "Elles ne sont équivalentes que si $n \\le 2$",
        "Elles ne sont jamais équivalentes",
        "Elles sont égales"
      ],
      "correctIndex": 0,
      "answer": "Elles sont toujours équivalentes",
      "hint1": "C'est le grand théorème de topologie vectorielle en dimension finie.",
      "hint2": "La sphère unité est compacte en dimension finie.",
      "solution": "Sur tout espace vectoriel de dimension finie, toutes les normes sont équivalentes et induisent la même topologie."
    }
  ],
  "L3-BAN": [
    {
      "id": "L3-BAN-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème du point fixe de Picard-Banach",
      "skill": "Applications contractantes",
      "statement": "Quelles sont les deux hypothèses requises pour appliquer le théorème du point fixe de Banach à $f : E \\to E$ ?",
      "options": [
        "$E$ complet et $f$ strictement contractante ($k < 1$)",
        "$E$ borné et $f$ continue",
        "$E$ de dimension finie et $f$ dérivable",
        "$E$ compact et $f$ linéaire"
      ],
      "correctIndex": 0,
      "answer": "$E$ complet et $f$ strictement contractante ($k < 1$)",
      "hint1": "L'espace métrique doit être complet pour assurer la convergence de la suite de Cauchy.",
      "hint2": "Le rapport de contraction $k$ doit être strictement inférieur à 1.",
      "solution": "Le théorème du point fixe de Banach requiert que l'espace soit complet et que l'application soit strictement contractante."
    }
  ],
  "L3-CMP": [
    {
      "id": "L3-CMP-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Borel-Lebesgue (Compacité)",
      "skill": "Compacité dans $\\mathbb{R}^n$",
      "statement": "Dans $\\mathbb{R}^n$ muni de sa topologie usuelle, une partie $K$ est compacte si et seulement si :",
      "options": [
        "$K$ est fermée et bornée",
        "$K$ est ouverte et bornée",
        "$K$ est connexe",
        "$K$ est dénombrable"
      ],
      "correctIndex": 0,
      "answer": "$K$ est fermée et bornée",
      "hint1": "C'est le théorème de Borel-Lebesgue (ou Bolzano-Weierstrass) en dimension finie.",
      "hint2": "Fermé + Borné $\\iff$ Compact.",
      "solution": "Dans $\\mathbb{R}^n$ (dimension finie), les parties compactes sont exactement les sous-ensembles fermés et bornés."
    }
  ],
  "L3-SDF": [
    {
      "id": "L3-SDF-1",
      "tier": 1,
      "type": "mcq",
      "title": "Critère de Weierstrass pour les séries de fonctions",
      "skill": "Convergence normale",
      "statement": "Si pour tout $n$, $\\|f_n\\|_\\infty \\le M_n$ avec la série numérique $\\sum M_n$ convergente, alors la série $\\sum f_n$ :",
      "options": [
        "Converge normalement, donc uniformément",
        "Converge simplement mais pas uniformément",
        "Ne converge pas forcément",
        "Est constante"
      ],
      "correctIndex": 0,
      "answer": "Converge normalement, donc uniformément",
      "hint1": "C'est le critère de Weierstrass (convergence normale).",
      "hint2": "La convergence normale entraîne la convergence uniforme et la continuité de la somme.",
      "solution": "La majoration par une série numérique convergente assure la convergence normale, qui implique la convergence uniforme."
    }
  ],
  "L3-SER": [
    {
      "id": "L3-SER-1",
      "tier": 1,
      "type": "mcq",
      "title": "Rayon de convergence de l'exponentielle",
      "skill": "Calculer un rayon de convergence",
      "statement": "Quel est le rayon de convergence $R$ de la série entière de l'exponentielle $\\sum_{n=0}^{+\\infty} \\frac{z^n}{n!}$ ?",
      "options": [
        "$R = +\\infty$",
        "$R = 1$",
        "$R = e$",
        "$R = 0$"
      ],
      "correctIndex": 0,
      "answer": "$R = +\\infty$",
      "hint1": "Règle de d'Alembert : $\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{1}{n+1} \\to 0$.",
      "hint2": "$R = 1/0 = +\\infty$.",
      "solution": "$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{1}{n+1} \\to 0$, d'où le rayon de convergence $R = +\\infty$."
    }
  ],
  "L3-FOU": [
    {
      "id": "L3-FOU-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Dirichlet",
      "skill": "Convergence de Fourier en un point de discontinuité",
      "statement": "Pour une fonction $f$ continue par morceaux et $\\mathcal{C}^1$ par morceaux, vers quelle valeur converge sa série de Fourier en $x_0$ ?",
      "options": [
        "$\\frac{f(x_0^+) + f(x_0^-)}{2}$",
        "$f(x_0^+)$",
        "$0$",
        "Elle diverge toujours en un point de discontinuité"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{f(x_0^+) + f(x_0^-)}{2}$",
      "hint1": "Elle converge vers la demi-somme des limites à gauche et à droite.",
      "hint2": "C'est la régularisée de Dirichlet.",
      "solution": "D'après le Théorème de Dirichlet, la série de Fourier converge vers la moyenne $\\frac{f(x_0^+) + f(x_0^-)}{2}$."
    }
  ],
  "L3-GPR": [
    {
      "id": "L3-GPR-1",
      "tier": 1,
      "type": "mcq",
      "title": "Intersection de deux droites projectives",
      "skill": "Propriétés du plan projectif",
      "statement": "Dans le plan projectif $\\mathbb{P}^2(\\mathbb{R})$, combien de points d'intersection possèdent deux droites projectives distinctes ?",
      "options": [
        "Exactement 1",
        "0 si elles sont parallèles",
        "Une infinité",
        "2 points"
      ],
      "correctIndex": 0,
      "answer": "Exactement 1",
      "hint1": "Dans le plan projectif, deux droites quelconques se coupent toujours (au point à l'infini si elles sont parallèles dans le plan affine).",
      "hint2": "Il n'y a pas de parallélisme strict dans $\\mathbb{P}^2$.",
      "solution": "Dans le plan projectif $\\mathbb{P}^2$, deux droites distinctes se coupent toujours en exactement un point."
    }
  ],
  "L3-GDF": [
    {
      "id": "L3-GDF-1",
      "tier": 1,
      "type": "mcq",
      "title": "Dimension d'une sous-variété définie par submersion",
      "skill": "Submersion et dimension",
      "statement": "Soit $f : \\mathbb{R}^5 \\to \\mathbb{R}^2$ une submersion en tout point de $M = f^{-1}(\\{0\\})$. Quelle est la dimension de la sous-variété $M$ ?",
      "options": [
        "$3$",
        "$2$",
        "$5$",
        "$7$"
      ],
      "correctIndex": 0,
      "answer": "$3$",
      "hint1": "Formule : $\\dim(M) = n - p = 5 - 2$.",
      "hint2": "L'espace tangent est de dimension $\\dim(\\ker df) = 5 - 2$.",
      "solution": "La codimension d'une submersion à valeurs dans $\\mathbb{R}^2$ est 2, d'où $\\dim(M) = 5 - 2 = 3$."
    }
  ],
  "L3-NUM": [
    {
      "id": "L3-NUM-1",
      "tier": 1,
      "type": "mcq",
      "title": "Décomposition de Cholesky",
      "skill": "Factorisation matricielle numérique",
      "statement": "Sous quelle condition une matrice réelle $A$ admet-elle une factorisation de Cholesky $A = L {}^tL$ avec $L$ triangulaire inférieure à éléments diagonaux strictement positifs ?",
      "options": [
        "$A$ est symétrique définie positive",
        "$A$ est quelconque inversible",
        "$A$ est orthogonale",
        "$\\det(A) > 0$"
      ],
      "correctIndex": 0,
      "answer": "$A$ est symétrique définie positive",
      "hint1": "La matrice doit être symétrique et toutes ses valeurs propres doivent être strictement positives.",
      "hint2": "C'est l'analogue matriciel de la racine carrée d'un réel strictement positif.",
      "solution": "Une matrice admet une factorisation de Cholesky si et seulement si elle est symétrique définie positive."
    }
  ],
  "L3-PROG": [
    {
      "id": "L3-PROG-1",
      "tier": 1,
      "type": "mcq",
      "title": "Dualité forte en programmation linéaire",
      "skill": "Relation primal-dual",
      "statement": "Si le problème primal linéaire admet une valeur optimale finie $z^*$, quelle relation vérifie la valeur optimale $w^*$ du problème dual ?",
      "options": [
        "$z^* = w^*$ (égalité parfaite)",
        "$z^* < w^*$",
        "$z^* > w^*$",
        "$w^* = 0$"
      ],
      "correctIndex": 0,
      "answer": "$z^* = w^*$ (égalité parfaite)",
      "hint1": "C'est le Théorème de Dualité Forte de Von Neumann.",
      "hint2": "L'écart de dualité à l'optimum est nul.",
      "solution": "Par le Théorème de Dualité Forte, la valeur optimale du problème primal coïncide exactement avec celle du problème dual."
    }
  ],
  "L3-MES": [
    {
      "id": "L3-MES-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de convergence dominée de Lebesgue",
      "skill": "Interversion intégrale de Lebesgue",
      "statement": "Sous quelle hypothèse majeure peut-on intervertir la limite et l'intégrale pour une suite de fonctions mesurables $(f_n)$ convergeant presque partout vers $f$ ?",
      "options": [
        "Il existe $g \\in L^1$ telle que $|f_n| \\le g$ presque partout (domination)",
        "Les fonctions $f_n$ doivent être bornées par une constante",
        "La convergence doit être uniforme",
        "Les fonctions doivent être des polynômes"
      ],
      "correctIndex": 0,
      "answer": "Il existe $g \\in L^1$ telle que $|f_n| \\le g$ presque partout (domination)",
      "hint1": "C'est le cœur du Théorème de Convergence Dominée de Lebesgue.",
      "hint2": "L'existence d'une fonction chapeau intégrable indépendante de $n$.",
      "solution": "Le Théorème de Convergence Dominée exige l'existence d'une fonction $g$ intégrable dominant la suite $|f_n| \\le g$ p.p."
    }
  ],
  "L3-PRC": [
    {
      "id": "L3-PRC-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème Central Limite (TCL)",
      "skill": "Convergence en loi vers la loi normale",
      "statement": "Soient $(X_n)$ des variables aléatoires i.i.d. d'espérance $\\mu$ et de variance finie $\\sigma^2 > 0$. Vers quelle loi converge la suite $\\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma\\sqrt{n}}$ ?",
      "options": [
        "La loi normale centrée réduite $\\mathcal{N}(0, 1)$",
        "La loi uniforme $\\mathcal{U}([0, 1])$",
        "La loi de Cauchy",
        "La loi exponentielle $\\mathcal{E}(1)$"
      ],
      "correctIndex": 0,
      "answer": "La loi normale centrée réduite $\\mathcal{N}(0, 1)$",
      "hint1": "C'est l'un des théorèmes les plus célèbres de toute la théorie des probabilités.",
      "hint2": "La distribution de la somme convenablement centrée et réduite devient gaussienne.",
      "solution": "D'après le Théorème Central Limite, la somme centrée et réduite converge en loi vers $\\mathcal{N}(0, 1)$."
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

