/**
 * Flashcards complémentaires de Terminale (spécialité et maths expertes) — L'Établi des Maths
 * Chargé avec le niveau (index.html, level-bundles) ;
 * les cartes sont ajoutées aux flashcards des cours par MathsFlashcards.enrichCoursesWithExtras().
 */
window.MATHS_EXTRA_FLASHCARDS = window.MATHS_EXTRA_FLASHCARDS || {};
Object.assign(window.MATHS_EXTRA_FLASHCARDS, {
  "TA1": [
    {
      q: "Vrai ou faux : dans l'hérédité, on peut partir de $P(k+1)$ et aboutir à une égalité vraie.",
      a: "**Faux** : c'est un raisonnement circulaire (on suppose ce qu'on veut démontrer). On part de l'hypothèse de récurrence $P(k)$ et on en **déduit** $P(k+1)$."
    },
    {
      q: "Une propriété est annoncée « pour tout entier $n \\ge 5$ ». À quel rang fait-on l'initialisation ?",
      a: "Au rang $n_0 = 5$ : on vérifie $P(5)$. L'hérédité se fait ensuite pour un entier $k \\ge 5$ quelconque."
    },
    {
      q: "Comment rédiger l'hérédité pour $S_n = 1 + 2 + \\dots + n = \\dfrac{n(n+1)}{2}$ ?",
      a: "On suppose $S_k = \\dfrac{k(k+1)}{2}$. Alors $S_{k+1} = S_k + (k+1) = \\dfrac{k(k+1)}{2} + (k+1) = \\dfrac{(k+1)(k+2)}{2}$, ce qui est $P(k+1)$."
    },
    {
      q: "Quelle formule pour $1^2 + 2^2 + \\dots + n^2$ démontre-t-on classiquement par récurrence ?",
      a: "$$1^2 + 2^2 + \\dots + n^2 = \\frac{n(n+1)(2n+1)}{6}$$ L'hérédité repose sur $\\dfrac{k(k+1)(2k+1)}{6} + (k+1)^2 = \\dfrac{(k+1)(k+2)(2k+3)}{6}$."
    },
    {
      q: "Vrai ou faux : si $P(0)$ et $P(1)$ sont vraies, alors $P(n)$ est vraie pour tout $n$.",
      a: "**Faux** : vérifier quelques rangs ne prouve rien sans hérédité. Exemple : « $n^2 = n$ » est vraie pour $n = 0$ et $n = 1$, mais fausse pour $n = 2$."
    },
    {
      q: "Pour $u_{n+1} = f(u_n)$ avec $f$ croissante, comment prouver par récurrence que $a \\le u_n \\le b$ ?",
      a: "Si $a \\le u_k \\le b$, la croissance de $f$ donne $f(a) \\le u_{k+1} \\le f(b)$. Il suffit donc que $f(a) \\ge a$ et $f(b) \\le b$ (et que $a \\le u_0 \\le b$ pour l'initialisation)."
    },
    {
      q: "Comment mener l'hérédité de « $2^n > n^2$ pour tout $n \\ge 5$ » ?",
      a: "Si $2^k > k^2$ avec $k \\ge 5$, alors $2^{k+1} > 2k^2$. Or $2k^2 - (k+1)^2 = (k-1)^2 - 2 > 0$ pour $k \\ge 3$, donc $2^{k+1} > (k+1)^2$. Initialisation : $2^5 = 32 > 25$."
    }
  ],
  "TA2": [
    {
      q: "Énoncer le théorème des gendarmes pour les suites.",
      a: "Si, à partir d'un certain rang, $v_n \\le u_n \\le w_n$, et si $(v_n)$ et $(w_n)$ convergent vers **la même** limite $\\ell$, alors $(u_n)$ converge vers $\\ell$."
    },
    {
      q: "Quelles sont les quatre formes indéterminées ?",
      a: "$\\infty - \\infty$, $0 \\times \\infty$, $\\dfrac{\\infty}{\\infty}$ et $\\dfrac{0}{0}$. On les lève en factorisant par le terme dominant, en simplifiant, ou avec la quantité conjuguée."
    },
    {
      q: "Vrai ou faux : une suite bornée est convergente.",
      a: "**Faux** : $u_n = (-1)^n$ est bornée mais n'a pas de limite. Il faut en plus la monotonie (théorème de convergence monotone)."
    },
    {
      q: "Vrai ou faux : si $u_n < 1$ pour tout $n$ et si $(u_n)$ converge vers $\\ell$, alors $\\ell < 1$.",
      a: "**Faux** : le passage à la limite ne conserve que les inégalités larges, donc $\\ell \\le 1$. Exemple : $u_n = 1 - \\dfrac{1}{n+1} < 1$ et $\\ell = 1$."
    },
    {
      q: "Quel est le comportement de $(q^n)$ lorsque $q = 1$, puis lorsque $q \\le -1$ ?",
      a: "Si $q = 1$, la suite est constante égale à $1$. Si $q \\le -1$, elle n'a **pas de limite** (signes alternés ; pour $q < -1$, $|q^n| \\to +\\infty$)."
    },
    {
      q: "Que signifie $\\lim\\limits_{n \\to +\\infty} u_n = +\\infty$ ?",
      a: "Tout intervalle $]A ; +\\infty[$ contient tous les termes de la suite à partir d'un certain rang : pour tout réel $A$, il existe $N$ tel que, pour tout $n \\ge N$, $u_n > A$."
    },
    {
      q: "Vrai ou faux : une suite croissante et majorée par $2$ converge vers $2$.",
      a: "**Faux** : elle converge vers une limite $\\ell \\le 2$, pas forcément égale à $2$. Exemple : $u_n = 1 - \\dfrac{1}{n+1}$ est croissante, majorée par $2$, et tend vers $1$."
    }
  ],
  "TA3": [
    {
      q: "Énoncer le théorème des valeurs intermédiaires.",
      a: "Si $f$ est **continue** sur $[a ; b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet **au moins** une solution dans $[a ; b]$."
    },
    {
      q: "Si $\\lim\\limits_{x \\to 2^+} f(x) = +\\infty$, que peut-on dire de la courbe de $f$ ?",
      a: "Elle admet la droite d'équation $x = 2$ comme **asymptote verticale**."
    },
    {
      q: "Déterminer $\\lim\\limits_{x \\to +\\infty} e^{-x^2}$.",
      a: "Par composition : $\\lim\\limits_{x \\to +\\infty} (-x^2) = -\\infty$ et $\\lim\\limits_{X \\to -\\infty} e^X = 0$, donc la limite vaut $0$."
    },
    {
      q: "Que vaut $\\lim\\limits_{x \\to +\\infty} x^2 e^{-x}$ ?",
      a: "$x^2 e^{-x} = \\dfrac{x^2}{e^x}$ et, par croissance comparée, $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x^2} = +\\infty$. La limite vaut donc $0$."
    },
    {
      q: "Comment lever l'indétermination de $e^x - x$ en $+\\infty$ ?",
      a: "On factorise par le terme dominant : $e^x - x = e^x\\left(1 - \\dfrac{x}{e^x}\\right)$. Comme $\\dfrac{x}{e^x} \\to 0$, la parenthèse tend vers $1$ et la limite vaut $+\\infty$."
    },
    {
      q: "Vrai ou faux : si $f(a)$ et $f(b)$ sont de signes contraires, alors $f$ s'annule sur $[a ; b]$.",
      a: "**Faux** sans continuité : la fonction valant $-1$ sur $[-1 ; 0[$ et $1$ sur $[0 ; 1]$ ne s'annule pas. Le TVI exige que $f$ soit continue sur $[a ; b]$."
    },
    {
      q: "Énoncer le théorème de comparaison pour une limite infinie en $+\\infty$.",
      a: "Si $f(x) \\ge g(x)$ pour $x$ assez grand et si $\\lim\\limits_{x \\to +\\infty} g(x) = +\\infty$, alors $\\lim\\limits_{x \\to +\\infty} f(x) = +\\infty$."
    }
  ],
  "TA4": [
    {
      q: "Qu'est-ce qu'un point d'inflexion d'une courbe ?",
      a: "Un point où la courbe **traverse sa tangente** : la fonction change de convexité en ce point (convexe d'un côté, concave de l'autre)."
    },
    {
      q: "Comment détermine-t-on les points d'inflexion à l'aide de $f''$ ?",
      a: "On cherche les réels $a$ où $f''$ **s'annule en changeant de signe** ; le point $(a ; f(a))$ de la courbe est alors un point d'inflexion."
    },
    {
      q: "Vrai ou faux : si $f''(a) = 0$, la courbe de $f$ a un point d'inflexion d'abscisse $a$.",
      a: "**Faux** : pour $f(x) = x^4$, $f''(x) = 12x^2$ s'annule en $0$ sans changer de signe ; $f$ est convexe sur $\\mathbb{R}$ et il n'y a pas d'inflexion."
    },
    {
      q: "Étudier la convexité de $x \\mapsto x^3$.",
      a: "$f''(x) = 6x$ : $f$ est concave sur $]-\\infty ; 0]$, convexe sur $[0 ; +\\infty[$, et l'origine est un point d'inflexion."
    },
    {
      q: "Comment caractériser la convexité d'une fonction dérivable à l'aide de $f'$ ?",
      a: "$f$ est convexe sur $I$ si et seulement si $f'$ est **croissante** sur $I$ ; concave si et seulement si $f'$ est décroissante sur $I$."
    },
    {
      q: "Comment obtient-on l'inégalité $\\ln(x) \\le x - 1$ pour tout $x > 0$ ?",
      a: "$\\ln$ est concave sur $]0 ; +\\infty[$, donc sa courbe est sous chacune de ses tangentes, en particulier sous la tangente en $1$, d'équation $y = x - 1$."
    },
    {
      q: "Donner la convexité de $x \\mapsto \\dfrac{1}{x}$ et de $x \\mapsto \\sqrt{x}$.",
      a: "$\\left(\\dfrac{1}{x}\\right)'' = \\dfrac{2}{x^3}$ : convexe sur $]0 ; +\\infty[$, concave sur $]-\\infty ; 0[$. $(\\sqrt{x})'' = -\\dfrac{1}{4x\\sqrt{x}} < 0$ : la fonction racine carrée est concave sur $]0 ; +\\infty[$."
    }
  ],
  "TA5": [
    {
      q: "Que valent $\\ln(1)$, $\\ln(e)$, $\\ln(e^x)$ et $e^{\\ln(x)}$ ?",
      a: "$\\ln(1) = 0$, $\\ln(e) = 1$, $\\ln(e^x) = x$ pour tout réel $x$, et $e^{\\ln(x)} = x$ pour tout $x > 0$."
    },
    {
      q: "Simplifier $\\ln(12) - \\ln(3) + \\ln\\left(\\dfrac{1}{4}\\right)$.",
      a: "$\\ln(12) - \\ln(3) + \\ln\\left(\\dfrac{1}{4}\\right) = \\ln\\left(\\dfrac{12}{3} \\times \\dfrac{1}{4}\\right) = \\ln(1) = 0$."
    },
    {
      q: "Vrai ou faux : $\\ln(a + b) = \\ln(a) + \\ln(b)$ pour tous $a, b > 0$.",
      a: "**Faux** : c'est le **produit** qui devient une somme, $\\ln(ab) = \\ln(a) + \\ln(b)$. Contre-exemple : $\\ln(1 + 1) = \\ln(2) \\neq 0 = \\ln(1) + \\ln(1)$."
    },
    {
      q: "Résoudre l'inéquation $\\ln(2x - 1) \\le 0$.",
      a: "Domaine : $2x - 1 > 0$, soit $x > \\dfrac{1}{2}$. Par stricte croissance de $\\ln$ : $2x - 1 \\le 1$, soit $x \\le 1$. Donc $S = \\left]\\dfrac{1}{2} ; 1\\right]$."
    },
    {
      q: "Donner les limites de $\\ln$ aux bornes de son ensemble de définition.",
      a: "$\\lim\\limits_{x \\to 0^+} \\ln(x) = -\\infty$ (la droite $x = 0$ est asymptote verticale) et $\\lim\\limits_{x \\to +\\infty} \\ln(x) = +\\infty$."
    },
    {
      q: "Que vaut $\\lim\\limits_{x \\to 0^+} x\\ln(x)$ ?",
      a: "$0$, par croissance comparée : au voisinage de $0$, le facteur $x$ « l'emporte » sur $\\ln(x)$."
    },
    {
      q: "Déterminer le plus petit entier $n$ tel que $0{,}8^n < 0{,}05$.",
      a: "$n\\ln(0{,}8) < \\ln(0{,}05)$, puis on divise par $\\ln(0{,}8) < 0$, ce qui change le sens : $n > \\dfrac{\\ln(0{,}05)}{\\ln(0{,}8)} \\approx 13{,}4$. Donc $n = 14$."
    },
    {
      q: "Où la fonction $x \\mapsto \\ln(u(x))$ est-elle définie, et quel est son sens de variation ?",
      a: "Elle est définie là où $u(x) > 0$. Comme $\\ln$ est strictement croissante, $\\ln(u)$ a **les mêmes variations** que $u$ sur tout intervalle où $u > 0$."
    }
  ],
  "TA6": [
    {
      q: "Qu'est-ce qu'une primitive de $f$ sur un intervalle $I$ ?",
      a: "Une fonction $F$ dérivable sur $I$ telle que $F'(x) = f(x)$ pour tout $x \\in I$. Toute fonction continue sur $I$ admet des primitives sur $I$."
    },
    {
      q: "Donner une primitive de $x \\mapsto \\dfrac{2x}{x^2 + 1}$ sur $\\mathbb{R}$.",
      a: "C'est la forme $\\dfrac{u'}{u}$ avec $u(x) = x^2 + 1 > 0$ : une primitive est $x \\mapsto \\ln(x^2 + 1)$."
    },
    {
      q: "Quelle est une primitive de $u'u^n$ ($n$ entier naturel) ?",
      a: "$\\dfrac{u^{n+1}}{n+1}$. Exemple : une primitive de $x \\mapsto 2x(x^2 + 1)^3$ est $x \\mapsto \\dfrac{(x^2 + 1)^4}{4}$."
    },
    {
      q: "Donner une primitive de $x \\mapsto x e^{x^2}$.",
      a: "Forme $u'e^u$ à un facteur près, avec $u(x) = x^2$ : $x e^{x^2} = \\dfrac{1}{2} \\times 2x e^{x^2}$, donc $F(x) = \\dfrac{1}{2} e^{x^2}$ convient."
    },
    {
      q: "Résoudre $y' = -2y + 6$ avec la condition $y(0) = 1$.",
      a: "Solutions : $y(x) = Ce^{-2x} + 3$ ($3$ est la solution constante). $y(0) = C + 3 = 1$ donne $C = -2$, d'où $y(x) = 3 - 2e^{-2x}$."
    },
    {
      q: "Donner une primitive de $x \\mapsto \\dfrac{1}{x^2}$ et de $x \\mapsto \\dfrac{1}{\\sqrt{x}}$ sur $]0 ; +\\infty[$.",
      a: "$x \\mapsto -\\dfrac{1}{x}$ et $x \\mapsto 2\\sqrt{x}$ (on vérifie en dérivant)."
    },
    {
      q: "Quel est le principe de la méthode d'Euler pour $y' = ay + b$, $y(x_0) = y_0$, avec un pas $h$ ?",
      a: "On utilise $y(x + h) \\approx y(x) + h\\,y'(x)$ : $x_{k+1} = x_k + h$ et $y_{k+1} = y_k + h(ay_k + b)$. La courbe est approchée par une ligne brisée."
    }
  ],
  "TA7": [
    {
      q: "Énoncer la relation de Chasles pour les intégrales.",
      a: "Pour $f$ continue sur un intervalle contenant $a$, $b$ et $c$ : $$\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$$"
    },
    {
      q: "Vrai ou faux : si $\\int_a^b f(x)\\,dx \\ge 0$, alors $f \\ge 0$ sur $[a ; b]$.",
      a: "**Faux** : $\\int_{-1}^{2} x\\,dx = 2 - \\dfrac{1}{2} = \\dfrac{3}{2} \\ge 0$, alors que $x < 0$ sur $[-1 ; 0[$. Seule la réciproque (positivité, avec $a \\le b$) est vraie."
    },
    {
      q: "Énoncer la propriété de croissance (comparaison) de l'intégrale.",
      a: "Si $a \\le b$ et $f \\le g$ sur $[a ; b]$ ($f$, $g$ continues), alors $\\int_a^b f(x)\\,dx \\le \\int_a^b g(x)\\,dx$. Elle sert à encadrer une intégrale."
    },
    {
      q: "Calculer $\\int_1^e \\ln(x)\\,dx$.",
      a: "IPP avec $u'(x) = 1$, $v(x) = \\ln(x)$ : $\\int_1^e \\ln(x)\\,dx = [x\\ln(x)]_1^e - \\int_1^e 1\\,dx = e - (e - 1) = 1$."
    },
    {
      q: "Que représente $\\int_a^b f(x)\\,dx$ si $f$ est négative sur $[a ; b]$ (avec $a \\le b$) ?",
      a: "L'**opposé** de l'aire (en u.a.) du domaine entre la courbe, l'axe des abscisses et les droites $x = a$ et $x = b$. Exemple : $\\int_{\\pi}^{2\\pi} \\sin(x)\\,dx = -2$."
    },
    {
      q: "Quelle approximation de $\\int_a^b f(x)\\,dx$ donne la méthode des rectangles (à gauche, $n$ rectangles) ?",
      a: "Avec $h = \\dfrac{b - a}{n}$ : $$\\int_a^b f(x)\\,dx \\approx h\\sum_{k=0}^{n-1} f(a + kh)$$ L'approximation s'améliore quand $n$ augmente."
    },
    {
      q: "Comment montrer que la suite $I_n = \\int_0^1 x^n e^x\\,dx$ est décroissante ?",
      a: "Par linéarité, $I_{n+1} - I_n = \\int_0^1 x^n(x - 1)e^x\\,dx$. Sur $[0 ; 1]$, $x^n(x - 1)e^x \\le 0$, donc par positivité $I_{n+1} - I_n \\le 0$."
    }
  ],
  "TA8": [
    {
      q: "Sur quels intervalles la fonction $\\sqrt{u}$ est-elle dérivable ?",
      a: "Sur tout intervalle où $u$ est dérivable et **strictement positive**. Là où $u$ s'annule, $\\sqrt{u}$ est définie mais pas forcément dérivable (exemple : $\\sqrt{x}$ en $0$)."
    },
    {
      q: "Dériver $\\dfrac{1}{u}$.",
      a: "$\\left(\\dfrac{1}{u}\\right)' = -\\dfrac{u'}{u^2}$, sur tout intervalle où $u$ est dérivable et ne s'annule pas."
    },
    {
      q: "Dériver $f(x) = (2x + 1)^5$.",
      a: "Forme $u^n$ : $f'(x) = 5 \\times 2 \\times (2x + 1)^4 = 10(2x + 1)^4$."
    },
    {
      q: "Dériver $f(x) = e^{-x^2}$.",
      a: "Forme $e^u$ avec $u(x) = -x^2$ : $f'(x) = -2x\\,e^{-x^2}$."
    },
    {
      q: "Déterminer la tangente en $1$ à la courbe de $f(x) = \\ln(2x - 1)$.",
      a: "$f(1) = \\ln(1) = 0$ et $f'(x) = \\dfrac{2}{2x - 1}$, donc $f'(1) = 2$. Tangente : $y = f'(1)(x - 1) + f(1)$, soit $y = 2x - 2$."
    },
    {
      q: "Vrai ou faux : $(g \\circ u)' = g' \\circ u'$.",
      a: "**Faux** : $(g \\circ u)' = u' \\times (g' \\circ u)$. Exemple : $(e^{2x})' = 2e^{2x}$, alors que $g' \\circ u'$ donnerait la constante $e^2$."
    },
    {
      q: "Si $u$ est croissante sur $I$ et $g$ décroissante sur un intervalle contenant $u(I)$, quel est le sens de variation de $g \\circ u$ ?",
      a: "$g \\circ u$ est **décroissante** sur $I$ : si $x \\le y$, alors $u(x) \\le u(y)$, puis $g(u(x)) \\ge g(u(y))$. Exemple : $x \\mapsto \\dfrac{1}{x^2 + 1}$ est décroissante sur $[0 ; +\\infty[$."
    }
  ],
  "TA9": [
    {
      q: "Donner les solutions réelles de $\\cos(x) = \\cos(\\alpha)$.",
      a: "$x = \\alpha + 2k\\pi$ ou $x = -\\alpha + 2k\\pi$, avec $k \\in \\mathbb{Z}$."
    },
    {
      q: "Résoudre $\\cos(x) = \\dfrac{1}{2}$ sur $]-\\pi ; \\pi]$.",
      a: "$\\cos\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}$ et $\\cos$ est paire : $x = \\dfrac{\\pi}{3}$ ou $x = -\\dfrac{\\pi}{3}$."
    },
    {
      q: "Résoudre $\\sin(x) \\ge \\dfrac{1}{2}$ sur $[0 ; 2\\pi]$.",
      a: "Sur le cercle trigonométrique, l'ordonnée est au moins $\\dfrac{1}{2}$ entre $\\dfrac{\\pi}{6}$ et $\\dfrac{5\\pi}{6}$ : $S = \\left[\\dfrac{\\pi}{6} ; \\dfrac{5\\pi}{6}\\right]$."
    },
    {
      q: "Donner les variations de $\\cos$ et de $\\sin$ sur $[0 ; \\pi]$.",
      a: "$\\cos$ est décroissante sur $[0 ; \\pi]$, de $1$ à $-1$. $\\sin$ est croissante sur $\\left[0 ; \\dfrac{\\pi}{2}\\right]$ (de $0$ à $1$), puis décroissante sur $\\left[\\dfrac{\\pi}{2} ; \\pi\\right]$ (de $1$ à $0$)."
    },
    {
      q: "Comment justifier que $\\dfrac{\\sin(x)}{x}$ tend vers $1$ quand $x$ tend vers $0$ ?",
      a: "C'est le taux d'accroissement $\\dfrac{\\sin(x) - \\sin(0)}{x - 0}$ ; comme $\\sin$ est dérivable en $0$, sa limite est $\\sin'(0) = \\cos(0) = 1$."
    },
    {
      q: "Dériver $f(x) = \\sin^2(x)$.",
      a: "Forme $u^2$ avec $u = \\sin$ : $f'(x) = 2\\sin(x)\\cos(x)$."
    },
    {
      q: "Donner $\\cos$ et $\\sin$ de $\\dfrac{\\pi}{6}$, $\\dfrac{\\pi}{4}$ et $\\dfrac{\\pi}{3}$.",
      a: "$\\cos\\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2}$, $\\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$ ; $\\cos\\dfrac{\\pi}{4} = \\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$ ; $\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}$, $\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}$."
    }
  ],
  "TG1": [
    {
      q: "Comment démontrer que trois points $A$, $B$, $C$ de l'espace sont alignés ?",
      a: "On montre que $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont **colinéaires** : il existe un réel $k$ tel que $\\overrightarrow{AC} = k\\overrightarrow{AB}$ (coordonnées proportionnelles)."
    },
    {
      q: "Écrire une représentation paramétrique de la droite passant par $A(1 ; -2 ; 0)$ et dirigée par $\\vec{u}(3 ; 1 ; -1)$.",
      a: "$\\begin{cases} x = 1 + 3t \\\\ y = -2 + t \\\\ z = -t \\end{cases}$, avec $t \\in \\mathbb{R}$."
    },
    {
      q: "Comment étudier la position relative de deux droites données par des représentations paramétriques ?",
      a: "Si les vecteurs directeurs sont colinéaires, les droites sont parallèles (confondues si elles ont un point commun). Sinon, on résout le système avec **deux paramètres distincts** $t$ et $s$ : une solution donne des droites sécantes, aucune des droites non coplanaires."
    },
    {
      q: "Vrai ou faux : deux droites parallèles à un même plan sont parallèles entre elles.",
      a: "**Faux** : dans un cube, deux arêtes sécantes de la face du dessus sont toutes deux parallèles au plan de la face du dessous, sans être parallèles entre elles."
    },
    {
      q: "Comment démontrer que quatre points $A$, $B$, $C$, $D$ sont coplanaires ?",
      a: "Avec $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ non colinéaires, on cherche des réels $x$ et $y$ tels que $\\overrightarrow{AD} = x\\overrightarrow{AB} + y\\overrightarrow{AC}$. S'ils existent, les quatre points sont coplanaires."
    },
    {
      q: "Comment caractériser vectoriellement le plan passant par $A$ et dirigé par deux vecteurs $\\vec{u}$ et $\\vec{v}$ non colinéaires ?",
      a: "C'est l'ensemble des points $M$ tels que $\\overrightarrow{AM} = s\\vec{u} + t\\vec{v}$, avec $s$ et $t$ réels."
    },
    {
      q: "Quelles sont les positions relatives possibles d'une droite et d'un plan de l'espace ?",
      a: "La droite est soit **incluse** dans le plan, soit **strictement parallèle** au plan (aucun point commun), soit **sécante** au plan en un unique point."
    }
  ],
  "TG2": [
    {
      q: "Déterminer une équation du plan passant par $A(1 ; 2 ; -1)$ et de vecteur normal $\\vec{n}(2 ; -1 ; 3)$.",
      a: "Le plan a une équation de la forme $2x - y + 3z + d = 0$, et $A$ y appartient : $2 - 2 - 3 + d = 0$, d'où $d = 3$. Équation : $2x - y + 3z + 3 = 0$."
    },
    {
      q: "Comment calculer la distance d'un point $M$ à un plan $\\mathcal{P}$ ?",
      a: "On écrit une représentation paramétrique de la droite passant par $M$ et dirigée par un vecteur normal à $\\mathcal{P}$, on calcule son intersection $H$ avec $\\mathcal{P}$ (le projeté orthogonal de $M$), puis la distance vaut $MH$."
    },
    {
      q: "Comment calculer une mesure de l'angle $\\widehat{BAC}$ à partir des coordonnées ?",
      a: "$\\cos\\widehat{BAC} = \\dfrac{\\overrightarrow{AB} \\cdot \\overrightarrow{AC}}{AB \\times AC}$, le produit scalaire et les longueurs se calculant avec les coordonnées dans un repère orthonormé."
    },
    {
      q: "Comment reconnaître que deux plans sont parallèles à l'aide de leurs équations cartésiennes ?",
      a: "Leurs vecteurs normaux sont **colinéaires**. Les plans sont confondus si, de plus, ils ont un point commun."
    },
    {
      q: "Comment trouver l'intersection d'une droite (représentation paramétrique) et d'un plan (équation cartésienne) ?",
      a: "On remplace $x$, $y$, $z$ par leurs expressions en $t$ dans l'équation du plan. Une solution unique $t_0$ donne le point d'intersection ; aucune solution : droite strictement parallèle ; tout $t$ convient : droite incluse."
    },
    {
      q: "Vrai ou faux : si $\\vec{u} \\cdot \\vec{v} = 0$, alors $\\vec{u} = \\vec{0}$ ou $\\vec{v} = \\vec{0}$.",
      a: "**Faux** : $\\vec{u}(1 ; 0 ; 0)$ et $\\vec{v}(0 ; 1 ; 0)$ sont non nuls et $\\vec{u} \\cdot \\vec{v} = 0$ : ils sont orthogonaux."
    },
    {
      q: "Comment vérifier qu'un vecteur $\\vec{n}$ est normal au plan $(ABC)$ ?",
      a: "Avec $A$, $B$, $C$ non alignés, on vérifie que $\\vec{n}$ est non nul et orthogonal à deux vecteurs non colinéaires du plan : $\\vec{n} \\cdot \\overrightarrow{AB} = 0$ et $\\vec{n} \\cdot \\overrightarrow{AC} = 0$."
    }
  ],
  "TS1": [
    {
      q: "Comment justifier qu'une variable aléatoire $X$ suit une loi binomiale ?",
      a: "On identifie une épreuve à deux issues (succès de probabilité $p$), répétée $n$ fois de façon **identique et indépendante**, et $X$ compte le nombre de succès : $X \\sim \\mathcal{B}(n, p)$."
    },
    {
      q: "Comment calculer $P(X \\ge 1)$ pour $X \\sim \\mathcal{B}(n, p)$ ?",
      a: "Par l'événement contraire : $P(X \\ge 1) = 1 - P(X = 0) = 1 - (1 - p)^n$."
    },
    {
      q: "Vrai ou faux : le nombre de boules rouges obtenues en tirant $3$ boules **sans remise** dans une urne suit une loi binomiale.",
      a: "**Faux** : sans remise, la composition de l'urne change à chaque tirage ; les épreuves ne sont ni identiques ni indépendantes."
    },
    {
      q: "Comment calculer $P(3 \\le X \\le 7)$ à l'aide des probabilités cumulées ?",
      a: "$P(3 \\le X \\le 7) = P(X \\le 7) - P(X \\le 2)$, chaque terme étant obtenu à la calculatrice (probabilités cumulées de la loi binomiale)."
    },
    {
      q: "Avec $p = 0{,}1$, combien d'épreuves faut-il au minimum pour que $P(X \\ge 1) \\ge 0{,}99$ ?",
      a: "$1 - 0{,}9^n \\ge 0{,}99 \\iff 0{,}9^n \\le 0{,}01 \\iff n \\ge \\dfrac{\\ln(0{,}01)}{\\ln(0{,}9)} \\approx 43{,}7$ (le sens change car $\\ln(0{,}9) < 0$). Il faut $n = 44$ épreuves."
    },
    {
      q: "Que valent l'espérance et la variance d'une variable de Bernoulli de paramètre $p$ ?",
      a: "$E(X) = p$ et $V(X) = p(1 - p)$. Une variable de loi $\\mathcal{B}(n, p)$ est la somme de $n$ telles variables indépendantes."
    },
    {
      q: "Pour $X \\sim \\mathcal{B}(3 ; 0{,}5)$, calculer $P(X = 2)$.",
      a: "$P(X = 2) = \\binom{3}{2} \\times 0{,}5^2 \\times 0{,}5^1 = 3 \\times 0{,}125 = 0{,}375$."
    }
  ],
  "TS2": [
    {
      q: "Énoncer l'inégalité de concentration.",
      a: "Si $M_n$ est la moyenne d'un échantillon de $n$ variables indépendantes de même loi, d'espérance $\\mu$ et de variance $V$, alors pour tout $\\delta > 0$ : $$P(|M_n - \\mu| \\ge \\delta) \\le \\frac{V}{n\\delta^2}$$"
    },
    {
      q: "Vrai ou faux : $V(X + Y) = V(X) + V(Y)$ pour toutes variables aléatoires $X$ et $Y$.",
      a: "**Faux** : il faut l'indépendance. Avec $Y = X$ : $V(2X) = 4V(X) \\neq 2V(X)$ dès que $V(X) \\neq 0$."
    },
    {
      q: "Que valent $E(S_n)$ et $V(S_n)$ pour $S_n = X_1 + \\dots + X_n$, variables indépendantes de même loi d'espérance $\\mu$ et de variance $\\sigma^2$ ?",
      a: "$E(S_n) = n\\mu$ et $V(S_n) = n\\sigma^2$, d'où $\\sigma(S_n) = \\sigma\\sqrt{n}$."
    },
    {
      q: "Avec $V = 0{,}25$, quelle taille $n$ garantit $P(|M_n - \\mu| \\ge 0{,}1) \\le 0{,}05$ par l'inégalité de concentration ?",
      a: "Il suffit que $\\dfrac{0{,}25}{n \\times 0{,}1^2} = \\dfrac{25}{n} \\le 0{,}05$, soit $n \\ge 500$."
    },
    {
      q: "D'après l'inégalité de Bienaymé-Tchebychev, quelle proportion minimale des valeurs de $X$ se trouve à moins de $2\\sigma$ de l'espérance ?",
      a: "$P(|X - \\mu| < 2\\sigma) \\ge 1 - \\dfrac{1}{2^2} = 0{,}75$ : au moins $75\\,\\%$, quelle que soit la loi de $X$."
    },
    {
      q: "$X$ a pour espérance $50$ et pour variance $25$. Majorer $P(|X - 50| \\ge 10)$.",
      a: "Par l'inégalité de Bienaymé-Tchebychev : $P(|X - 50| \\ge 10) \\le \\dfrac{25}{10^2} = 0{,}25$."
    },
    {
      q: "Que vaut l'espérance de la moyenne empirique $M_n$ d'un échantillon de loi d'espérance $\\mu$ ?",
      a: "$E(M_n) = \\mu$, par linéarité : $E(M_n) = \\dfrac{1}{n}\\big(E(X_1) + \\dots + E(X_n)\\big) = \\dfrac{n\\mu}{n} = \\mu$ (sans besoin d'indépendance)."
    }
  ],
  "TS3": [
    {
      q: "Quand additionne-t-on et quand multiplie-t-on des dénombrements ?",
      a: "On **additionne** pour des cas disjoints (principe additif) ; on **multiplie** pour des choix successifs, le nombre de possibilités à chaque étape ne dépendant pas des choix précédents (principe multiplicatif)."
    },
    {
      q: "Comment choisir la bonne formule de dénombrement pour $k$ éléments pris parmi $n$ ?",
      a: "Ordre pris en compte, répétitions permises : $n^k$. Ordre pris en compte, sans répétition : $\\dfrac{n!}{(n-k)!}$. Ordre non pris en compte, sans répétition : $\\binom{n}{k}$."
    },
    {
      q: "Combien existe-t-il de codes à $4$ chiffres (de $0000$ à $9999$) ?",
      a: "Ce sont des $4$-uplets de l'ensemble des $10$ chiffres : $10^4 = 10\\,000$ codes."
    },
    {
      q: "De combien de façons peut-on attribuer l'or, l'argent et le bronze parmi $8$ coureurs ?",
      a: "L'ordre compte et il n'y a pas de répétition : arrangements de $3$ parmi $8$, soit $8 \\times 7 \\times 6 = 336$."
    },
    {
      q: "Combien de mains de $5$ cartes peut-on former avec un jeu de $32$ cartes ?",
      a: "L'ordre ne compte pas : $\\binom{32}{5} = \\dfrac{32 \\times 31 \\times 30 \\times 29 \\times 28}{5!} = 201\\,376$."
    },
    {
      q: "Pourquoi a-t-on $\\binom{n}{k} = \\binom{n}{n-k}$ ?",
      a: "Choisir les $k$ éléments d'une partie revient à choisir les $n - k$ éléments laissés de côté : à chaque partie à $k$ éléments correspond son complémentaire, qui a $n - k$ éléments."
    },
    {
      q: "Que valent $\\binom{n}{0}$, $\\binom{n}{1}$ et $\\binom{n}{2}$ ?",
      a: "$\\binom{n}{0} = 1$, $\\binom{n}{1} = n$ et $\\binom{n}{2} = \\dfrac{n(n-1)}{2}$ (nombre de paires)."
    },
    {
      q: "Quelle est la probabilité qu'une main de $5$ cartes tirée au hasard dans un jeu de $32$ contienne les $4$ as ?",
      a: "Équiprobabilité : $28$ mains favorables (les $4$ as et $1$ carte parmi les $28$ autres) sur $\\binom{32}{5} = 201\\,376$, soit $p = \\dfrac{28}{201\\,376} = \\dfrac{1}{7\\,192}$."
    }
  ],
  "TS4": [
    {
      q: "Que renvoie la fonction suivante ? `def seuil():` puis `u, n = 1, 0`, `while u < 100: u, n = 2*u, n + 1` et `return n`.",
      a: "Elle renvoie $7$ : c'est le plus petit $n$ tel que $2^n \\ge 100$ ($2^6 = 64$ et $2^7 = 128$)."
    },
    {
      q: "Vrai ou faux : si la suite $(u_n)$ est croissante, la boucle `while u < 6:` se termine toujours.",
      a: "**Faux** : si $(u_n)$ est croissante et converge vers $5$, la condition `u < 6` reste toujours vraie et la boucle ne s'arrête jamais. Il faut s'assurer que le seuil est atteint (par exemple si $u_n \\to +\\infty$)."
    },
    {
      q: "Comment estimer $\\int_0^1 f(x)\\,dx$ par la méthode de Monte-Carlo, lorsque $0 \\le f \\le 1$ sur $[0 ; 1]$ ?",
      a: "On tire $N$ points $(x ; y)$ au hasard dans le carré $[0 ; 1] \\times [0 ; 1]$ et on compte ceux qui vérifient $y \\le f(x)$. Leur proportion approche l'aire sous la courbe, donc l'intégrale."
    },
    {
      q: "Que vaut `sum([k*k for k in range(1, 4)])` ?",
      a: "`range(1, 4)` parcourt $1$, $2$, $3$ : la somme vaut $1 + 4 + 9 = 14$."
    },
    {
      q: "Que vaut `max([abs(x - 2) for x in [1, 4, 2.5]])` ?",
      a: "La liste construite est `[1, 2, 0.5]`, donc le résultat est $2$."
    },
    {
      q: "Quelle condition de boucle permet de trouver le premier rang $n$ tel que $|u_n - \\ell| \\le 10^{-3}$ ?",
      a: "On itère tant que l'écart est trop grand : `while abs(u - l) > 0.001:`, en calculant le terme suivant et en augmentant `n` dans la boucle, puis on renvoie `n`."
    },
    {
      q: "Dans une dichotomie sur $[a ; b]$ avec $m = \\dfrac{a + b}{2}$, quelle moitié conserve-t-on ?",
      a: "Celle où $f$ change de signe : si `f(a) * f(m) <= 0`, on pose `b = m`, sinon `a = m`. La solution reste ainsi encadrée entre `a` et `b`."
    }
  ],
  "TX1": [
    {
      q: "Calculer l'inverse de $2 + i$ sous forme algébrique.",
      a: "On multiplie par le conjugué : $\\dfrac{1}{2 + i} = \\dfrac{2 - i}{(2 + i)(2 - i)} = \\dfrac{2 - i}{5} = \\dfrac{2}{5} - \\dfrac{1}{5}i$."
    },
    {
      q: "Résoudre dans $\\mathbb{C}$ l'équation $z^2 - 2z + 5 = 0$.",
      a: "$\\Delta = 4 - 20 = -16 < 0$, donc $z = \\dfrac{2 \\pm 4i}{2}$ : $z_1 = 1 + 2i$ et $z_2 = 1 - 2i$ (solutions conjuguées)."
    },
    {
      q: "Exprimer $\\text{Re}(z)$ et $\\text{Im}(z)$ à l'aide de $z$ et $\\bar{z}$.",
      a: "$\\text{Re}(z) = \\dfrac{z + \\bar{z}}{2}$ et $\\text{Im}(z) = \\dfrac{z - \\bar{z}}{2i}$."
    },
    {
      q: "Résoudre dans $\\mathbb{C}$ l'équation $z + 2\\bar{z} = 3 - i$.",
      a: "On pose $z = x + iy$ ($x, y$ réels) : $3x - iy = 3 - i$. Par identification des parties réelles et imaginaires, $x = 1$ et $y = 1$, donc $z = 1 + i$."
    },
    {
      q: "Si $a$ est une racine d'un polynôme $P$ de degré $n \\ge 1$, que peut-on en déduire ?",
      a: "$P(z) = (z - a)Q(z)$, où $Q$ est un polynôme de degré $n - 1$. Conséquence : un polynôme de degré $n$ a au plus $n$ racines."
    },
    {
      q: "Calculer $(1 + i)^3$ avec la formule du binôme de Newton.",
      a: "$(1 + i)^3 = 1 + 3i + 3i^2 + i^3 = 1 + 3i - 3 - i = -2 + 2i$."
    },
    {
      q: "Vrai ou faux : $z^2 \\ge 0$ pour tout nombre complexe $z$.",
      a: "**Faux** : $i^2 = -1$. Plus généralement, on ne compare pas les nombres complexes : écrire $z \\ge 0$ n'a de sens que si $z$ est réel."
    }
  ],
  "TX2": [
    {
      q: "Écrire $1 + i$ sous forme exponentielle.",
      a: "$|1 + i| = \\sqrt{2}$ et $\\cos\\theta = \\sin\\theta = \\dfrac{\\sqrt{2}}{2}$, donc $\\theta = \\dfrac{\\pi}{4}$ : $1 + i = \\sqrt{2}\\,e^{i\\pi/4}$."
    },
    {
      q: "Énoncer les formules d'Euler.",
      a: "$\\cos\\theta = \\dfrac{e^{i\\theta} + e^{-i\\theta}}{2}$ et $\\sin\\theta = \\dfrac{e^{i\\theta} - e^{-i\\theta}}{2i}$. Elles servent notamment à linéariser $\\cos^n\\theta$ et $\\sin^n\\theta$."
    },
    {
      q: "Que valent le module et un argument d'un produit et d'un quotient de complexes non nuls ?",
      a: "$|zz'| = |z||z'|$ et $\\arg(zz') = \\arg(z) + \\arg(z') \\pmod{2\\pi}$ ; $\\left|\\dfrac{z}{z'}\\right| = \\dfrac{|z|}{|z'|}$ et $\\arg\\left(\\dfrac{z}{z'}\\right) = \\arg(z) - \\arg(z') \\pmod{2\\pi}$."
    },
    {
      q: "Comment obtenir une mesure de l'angle orienté $(\\overrightarrow{AB}, \\overrightarrow{AC})$ avec les affixes ?",
      a: "$(\\overrightarrow{AB}, \\overrightarrow{AC}) = \\arg\\left(\\dfrac{z_C - z_A}{z_B - z_A}\\right) \\pmod{2\\pi}$, avec $A \\neq B$ et $A \\neq C$."
    },
    {
      q: "Calculer $(1 + i)^8$.",
      a: "$(1 + i)^8 = \\left(\\sqrt{2}\\,e^{i\\pi/4}\\right)^8 = (\\sqrt{2})^8 e^{2i\\pi} = 16$."
    },
    {
      q: "Vrai ou faux : $|z + z'| = |z| + |z'|$ pour tous complexes $z$ et $z'$.",
      a: "**Faux** : avec $z = 1$ et $z' = -1$, $|z + z'| = 0$ alors que $|z| + |z'| = 2$. On a seulement l'inégalité triangulaire $|z + z'| \\le |z| + |z'|$."
    },
    {
      q: "Comment traduire l'alignement de trois points distincts $A$, $B$, $C$ à l'aide de leurs affixes ?",
      a: "$A$, $B$, $C$ sont alignés si et seulement si $\\dfrac{z_C - z_A}{z_B - z_A}$ est un **réel** (d'argument $0$ ou $\\pi$ modulo $2\\pi$)."
    }
  ],
  "TX3": [
    {
      q: "Énoncer le théorème de la division euclidienne dans $\\mathbb{Z}$.",
      a: "Pour $a \\in \\mathbb{Z}$ et $b \\in \\mathbb{N}^*$, il existe un **unique** couple d'entiers $(q ; r)$ tel que $a = bq + r$ et $0 \\le r < b$."
    },
    {
      q: "Quelles opérations sont compatibles avec les congruences modulo $n$ ?",
      a: "Si $a \\equiv b \\pmod{n}$ et $c \\equiv d \\pmod{n}$, alors $a + c \\equiv b + d$, $ac \\equiv bd$ et $a^k \\equiv b^k \\pmod{n}$ pour tout $k \\in \\mathbb{N}$."
    },
    {
      q: "Vrai ou faux : si $2x \\equiv 2y \\pmod{4}$, alors $x \\equiv y \\pmod{4}$.",
      a: "**Faux** : on ne peut pas simplifier une congruence en général. Avec $x = 0$ et $y = 2$ : $0 \\equiv 4 \\pmod{4}$, mais $0 \\not\\equiv 2 \\pmod{4}$."
    },
    {
      q: "Vrai ou faux : si $ab \\equiv 0 \\pmod{n}$, alors $a \\equiv 0 \\pmod{n}$ ou $b \\equiv 0 \\pmod{n}$.",
      a: "**Faux** : $2 \\times 3 = 6 \\equiv 0 \\pmod{6}$, alors que ni $2$ ni $3$ n'est divisible par $6$."
    },
    {
      q: "Si $d$ divise $a$ et $b$, que divise-t-il encore ?",
      a: "$d$ divise toute combinaison $au + bv$ avec $u, v \\in \\mathbb{Z}$, en particulier $a + b$ et $a - b$."
    },
    {
      q: "Quels sont les restes possibles de $n^2$ dans la division par $4$ ?",
      a: "Table de congruences : si $n \\equiv 0, 1, 2, 3 \\pmod{4}$, alors $n^2 \\equiv 0, 1, 0, 1 \\pmod{4}$. Un carré n'est donc jamais congru à $2$ ou $3$ modulo $4$."
    },
    {
      q: "Résoudre $3x \\equiv 2 \\pmod{7}$.",
      a: "$3 \\times 5 = 15 \\equiv 1 \\pmod{7}$ : on multiplie par $5$, d'où $x \\equiv 10 \\equiv 3 \\pmod{7}$. Les solutions sont les $x = 3 + 7k$, $k \\in \\mathbb{Z}$."
    },
    {
      q: "Quel critère de divisibilité par $11$ découle de $10 \\equiv -1 \\pmod{11}$ ?",
      a: "Un entier est congru modulo $11$ à la somme alternée de ses chiffres, en partant des unités. Exemple : pour $918\\,082$, $2 - 8 + 0 - 8 + 1 - 9 = -22$, donc $11$ divise $918\\,082$."
    }
  ],
  "TX4": [
    {
      q: "Énoncer le petit théorème de Fermat.",
      a: "Si $p$ est premier et si $a$ est un entier non divisible par $p$, alors $a^{p-1} \\equiv 1 \\pmod{p}$. Pour tout entier $a$ : $a^p \\equiv a \\pmod{p}$."
    },
    {
      q: "À quelle condition l'équation $ax + by = c$ admet-elle des solutions entières ?",
      a: "Si et seulement si $\\text{PGCD}(a, b)$ divise $c$ (conséquence du théorème de Bézout)."
    },
    {
      q: "Résoudre dans $\\mathbb{Z}^2$ l'équation $3x + 5y = 1$.",
      a: "Solution particulière : $(2 ; -1)$. Par différence, $3(x - 2) = -5(y + 1)$ ; $5$ divise $3(x - 2)$ et $\\text{PGCD}(5, 3) = 1$, donc (Gauss) $x = 2 + 5k$, puis $y = -1 - 3k$, $k \\in \\mathbb{Z}$."
    },
    {
      q: "Vrai ou faux : si $a$ divise $bc$ et si $a$ ne divise pas $b$, alors $a$ divise $c$.",
      a: "**Faux** : $6$ divise $4 \\times 3 = 12$ sans diviser ni $4$ ni $3$. Le théorème de Gauss exige que $a$ et $b$ soient **premiers entre eux**."
    },
    {
      q: "Si un nombre premier $p$ divise un produit $ab$, que peut-on en déduire ?",
      a: "$p$ divise $a$ ou $p$ divise $b$. En effet, si $p$ ne divise pas $a$, alors $\\text{PGCD}(p, a) = 1$ et le théorème de Gauss donne $p \\mid b$."
    },
    {
      q: "Sur quelle propriété repose l'algorithme d'Euclide ?",
      a: "Si $a = bq + r$ est la division euclidienne de $a$ par $b$, alors $\\text{PGCD}(a, b) = \\text{PGCD}(b, r)$. Le PGCD est le dernier reste non nul."
    },
    {
      q: "Comment tester si un entier $n \\ge 2$ est premier ?",
      a: "Il suffit de vérifier qu'aucun nombre premier $p \\le \\sqrt{n}$ ne divise $n$. Exemple : $97$ n'est divisible ni par $2$, ni par $3$, ni par $5$, ni par $7$ (et $11^2 > 97$), donc $97$ est premier."
    },
    {
      q: "Sur quoi repose la sécurité du chiffrement RSA ?",
      a: "Sur la difficulté de **factoriser** un très grand entier $N = pq$, produit de deux grands nombres premiers : $N$ est public, mais retrouver $p$ et $q$, nécessaires pour calculer la clé de déchiffrement, est hors de portée en pratique."
    }
  ],
  "TX5": [
    {
      q: "Donner la formule de l'inverse de $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$.",
      a: "Si $\\det(A) = ad - bc \\neq 0$ : $$A^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$"
    },
    {
      q: "Vrai ou faux : pour deux matrices carrées de même taille, $AB = BA$.",
      a: "**Faux** en général. Avec $A = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ et $B = \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}$ : $AB = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$ mais $BA = \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$."
    },
    {
      q: "Comment résoudre le système $AX = B$ lorsque $A$ est inversible ?",
      a: "On multiplie **à gauche** par $A^{-1}$ : $X = A^{-1}B$ (l'écriture $BA^{-1}$ serait fausse, le produit n'étant pas commutatif)."
    },
    {
      q: "Déterminer la distribution stationnaire de la chaîne de Markov de matrice $P = \\begin{pmatrix} 0{,}8 & 0{,}2 \\\\ 0{,}3 & 0{,}7 \\end{pmatrix}$.",
      a: "On cherche $\\pi = \\begin{pmatrix} x & y \\end{pmatrix}$ avec $\\pi P = \\pi$ et $x + y = 1$ : $0{,}8x + 0{,}3y = x$ donne $0{,}2x = 0{,}3y$, d'où $\\pi = \\begin{pmatrix} 0{,}6 & 0{,}4 \\end{pmatrix}$."
    },
    {
      q: "Si $U_{n+1} = AU_n + B$ et si $C$ vérifie $C = AC + B$, comment exprimer $U_n$ ?",
      a: "$V_n = U_n - C$ vérifie $V_{n+1} = AV_n$, donc $V_n = A^nV_0$ et $U_n = A^n(U_0 - C) + C$."
    },
    {
      q: "Si $A = QDQ^{-1}$ avec $D$ diagonale, comment calculer $A^n$ ?",
      a: "$A^n = QD^nQ^{-1}$ (les produits $Q^{-1}Q$ intermédiaires valent $I$), et $D^n$ s'obtient en élevant chaque coefficient diagonal à la puissance $n$."
    },
    {
      q: "Quelle est la matrice de la rotation de centre $O$ et d'angle $\\dfrac{\\pi}{2}$ ?",
      a: "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ (cas $\\theta = \\dfrac{\\pi}{2}$ de $\\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$) : le point $(x ; y)$ a pour image $(-y ; x)$."
    }
  ]
});
