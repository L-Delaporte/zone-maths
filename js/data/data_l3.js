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

