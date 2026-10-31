/**
 * Flashcards complémentaires de Première (spécialité) — L'Établi des Maths
 * Programme de Première (BO n° 14 du 2 avril 2026). Chargé avec le niveau (index.html, level-bundles) ;
 * les cartes sont ajoutées aux flashcards des cours par MathsFlashcards.enrichCoursesWithExtras().
 */
window.MATHS_EXTRA_FLASHCARDS = window.MATHS_EXTRA_FLASHCARDS || {};
Object.assign(window.MATHS_EXTRA_FLASHCARDS, {
  "1A1": [
    {
      q: "Vrai ou faux : si $a$ et $c$ sont de signes contraires, le trinôme $ax^2 + bx + c$ a deux racines réelles distinctes.",
      a: "**Vrai** : $ac < 0$ donne $-4ac > 0$, donc $\\Delta = b^2 - 4ac > 0$. La réciproque est fausse : $x^2 - 5x + 6$ a deux racines ($2$ et $3$) avec $a$ et $c$ positifs."
    },
    {
      q: "Mettre $x^2 - 8x + 5$ sous forme canonique par complétion du carré.",
      a: "$x^2 - 8x = (x - 4)^2 - 16$, donc $x^2 - 8x + 5 = (x - 4)^2 - 11$."
    },
    {
      q: "Résoudre l'inéquation $x^2 - 3x - 4 < 0$.",
      a: "Racines $-1$ et $4$ (somme $3$, produit $-4$). Le trinôme ($a = 1 > 0$) est négatif strictement entre ses racines : $S = ]-1 ; 4[$."
    },
    {
      q: "Le trinôme $3x^2 - 5x + 2$ a une racine évidente. Laquelle, et quelle est l'autre ?",
      a: "$3 - 5 + 2 = 0$, donc $1$ est racine. Le produit des racines vaut $\\frac{c}{a} = \\frac{2}{3}$, donc l'autre racine est $\\frac{2}{3}$."
    },
    {
      q: "Vrai ou faux : $x^2 + x + 1 > 0$ pour tout réel $x$.",
      a: "**Vrai** : $\\Delta = 1 - 4 = -3 < 0$, donc le trinôme garde le signe de $a = 1 > 0$ sur $\\mathbb{R}$ et ne s'annule pas."
    },
    {
      q: "Écrire la négation de « pour tout réel $x$, $x^2 \\ge x$ ». Laquelle des deux propositions est vraie ?",
      a: "Négation : « il existe un réel $x$ tel que $x^2 < x$ ». C'est elle qui est vraie : pour $x = \\frac{1}{2}$, $x^2 = \\frac{1}{4} < \\frac{1}{2}$."
    },
    {
      q: "Quelle forme d'un trinôme choisir pour lire l'extremum, les racines, ou l'image de $0$ ?",
      a: "Forme **canonique** $a(x - \\alpha)^2 + \\beta$ : extremum $\\beta$ atteint en $\\alpha$. Forme **factorisée** : racines et signe. Forme **développée** : image de $0$, égale à $c$."
    },
    {
      q: "Trouver deux nombres dont la somme vaut $7$ et le produit $12$.",
      a: "Ce sont les racines de $x^2 - 7x + 12$ : $\\Delta = 49 - 48 = 1$, d'où $3$ et $4$."
    }
  ],
  "1A2": [
    {
      q: "Que représente graphiquement le taux de variation $\\frac{f(a + h) - f(a)}{h}$ ?",
      a: "Le coefficient directeur de la **sécante** passant par les points $A(a ; f(a))$ et $M(a + h ; f(a + h))$ de la courbe."
    },
    {
      q: "Pour $f(x) = 3x^2$, calculer $f'(1)$ à l'aide de la définition.",
      a: "$\\frac{3(1 + h)^2 - 3}{h} = \\frac{6h + 3h^2}{h} = 6 + 3h$, qui tend vers $6$ quand $h$ tend vers $0$ : $f'(1) = 6$."
    },
    {
      q: "Vrai ou faux : si $f'(a) = 0$, alors la courbe de $f$ coupe l'axe des abscisses au point d'abscisse $a$.",
      a: "**Faux** : $f'(a) = 0$ signifie que la tangente est horizontale. Pour $f(x) = x^2 + 1$, $f'(0) = 0$ mais $f(0) = 1 \\neq 0$."
    },
    {
      q: "Comment lire $f'(a)$ sur un graphique où la tangente en $A$ est tracée ?",
      a: "On lit deux points de la tangente et on calcule sa pente $\\frac{y_2 - y_1}{x_2 - x_1}$. *Exemple* : si elle passe par $(1 ; 2)$ et $(3 ; 6)$, $f'(a) = \\frac{4}{2} = 2$."
    },
    {
      q: "Un mobile a parcouru $d(t) = t^2 + 2t$ mètres à l'instant $t$ (en s). Quelle est sa vitesse instantanée à $t = 3$ ?",
      a: "$\\frac{d(3 + h) - d(3)}{h} = \\frac{8h + h^2}{h} = 8 + h$, qui tend vers $8$ : la vitesse vaut $d'(3) = 8$ m/s."
    },
    {
      q: "Une entreprise a un coût marginal $C'(100) = 12$ (en euros). Comment l'interpréter ?",
      a: "Produire une unité de plus à partir de $100$ unités coûte environ $12$ euros : $C(101) - C(100) \\approx C'(100) = 12$."
    },
    {
      q: "Donner l'équation de la tangente à la courbe de $f(x) = x^2$ au point d'abscisse $1$.",
      a: "$f(1) = 1$ et $f'(1) = 2$, donc $y = 2(x - 1) + 1$, soit $y = 2x - 1$."
    },
    {
      q: "Vrai ou faux : une tangente ne traverse jamais la courbe.",
      a: "**Faux** : pour $f(x) = x^3$, $\\frac{h^3}{h} = h^2$ tend vers $0$, donc $f'(0) = 0$ et la tangente en $0$ est l'axe des abscisses $y = 0$, que la courbe traverse à l'origine."
    }
  ],
  "1A3": [
    {
      q: "Dériver $f(x) = \\frac{2x + 1}{x - 3}$ sur $]3 ; +\\infty[$.",
      a: "$f'(x) = \\frac{2(x - 3) - (2x + 1) \\times 1}{(x - 3)^2} = \\frac{-7}{(x - 3)^2}$."
    },
    {
      q: "Vrai ou faux : si $f'(c) = 0$, alors $f$ admet un extremum local en $c$.",
      a: "**Faux** : $f(x) = x^3$ vérifie $f'(0) = 0$, mais $f'(x) = 3x^2$ ne change pas de signe en $0$ : $f$ est croissante sur $\\mathbb{R}$, sans extremum en $0$."
    },
    {
      q: "Vrai ou faux : $(uv)' = u'v'$.",
      a: "**Faux** : $(uv)' = u'v + uv'$. Avec $u(x) = v(x) = x$ : $(x^2)' = 2x$, alors que $u'v' = 1$."
    },
    {
      q: "Dériver $f(x) = x\\sqrt{x}$ sur $]0 ; +\\infty[$.",
      a: "$f'(x) = 1 \\times \\sqrt{x} + x \\times \\frac{1}{2\\sqrt{x}} = \\sqrt{x} + \\frac{\\sqrt{x}}{2} = \\frac{3}{2}\\sqrt{x}$."
    },
    {
      q: "Dresser le sens de variation de $f(x) = x^3 - 3x$ sur $\\mathbb{R}$.",
      a: "$f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$ : $f$ est croissante sur $]-\\infty ; -1]$, décroissante sur $[-1 ; 1]$, croissante sur $[1 ; +\\infty[$. Maximum local $f(-1) = 2$, minimum local $f(1) = -2$."
    },
    {
      q: "Comment démontrer une inégalité $f(x) \\ge g(x)$ sur un intervalle $I$ ?",
      a: "On étudie $h = f - g$ sur $I$ (dérivée, variations) et on montre que son minimum est positif ou nul. *Exemple* : $h(x) = x^3 - 3x + 2$ a pour minimum $h(1) = 0$ sur $[0 ; +\\infty[$, donc $x^3 \\ge 3x - 2$."
    },
    {
      q: "La fonction $f(x) = x^3 - x$ est-elle paire, impaire, ou ni l'un ni l'autre ? Conséquence graphique ?",
      a: "Elle est définie sur $\\mathbb{R}$ et $f(-x) = -x^3 + x = -f(x)$ : $f$ est **impaire**, sa courbe est symétrique par rapport à l'origine."
    },
    {
      q: "Dériver $f(x) = \\frac{1}{x^2}$ sur $]0 ; +\\infty[$.",
      a: "$f(x) = x^{-2}$, donc $f'(x) = -2x^{-3} = -\\frac{2}{x^3}$."
    }
  ],
  "1A4": [
    {
      q: "Résoudre dans $\\mathbb{R}$ l'équation $e^{2x - 1} = e^{x + 3}$.",
      a: "$e^a = e^b \\iff a = b$, donc $2x - 1 = x + 3$, soit $x = 4$."
    },
    {
      q: "Résoudre dans $\\mathbb{R}$ l'inéquation $e^{3x} > 1$.",
      a: "$e^{3x} > e^0 \\iff 3x > 0 \\iff x > 0$ (stricte croissance de $\\exp$) : $S = ]0 ; +\\infty[$."
    },
    {
      q: "Vrai ou faux : $e^{a + b} = e^a + e^b$.",
      a: "**Faux** : $e^{a + b} = e^a \\times e^b$. Avec $a = b = 0$ : $e^0 = 1$, alors que $e^0 + e^0 = 2$."
    },
    {
      q: "Étudier les variations de $f(x) = x\\,e^x$ sur $\\mathbb{R}$.",
      a: "$f'(x) = e^x + x\\,e^x = (1 + x)e^x$, du signe de $1 + x$ car $e^x > 0$ : $f$ est décroissante sur $]-\\infty ; -1]$, croissante sur $[-1 ; +\\infty[$, de minimum $f(-1) = -\\frac{1}{e}$."
    },
    {
      q: "Dans la méthode d'Euler pour construire $\\exp$, quelle relation relie $y_{k+1}$ à $y_k$, et pourquoi ?",
      a: "$y_{k+1} = (1 + h)\\,y_k$ : par approximation affine, $\\exp(x + h) \\approx \\exp(x) + h\\exp'(x) = \\exp(x)(1 + h)$, car $\\exp' = \\exp$."
    },
    {
      q: "Quelle suite permet d'approcher le nombre $e$ ? Donner une valeur approchée de $e$.",
      a: "La suite $\\left(1 + \\frac{1}{n}\\right)^n$, dont les termes se rapprochent de $e$ quand $n$ devient grand ; $e \\approx 2{,}718$."
    },
    {
      q: "Vrai ou faux : la fonction $t \\mapsto 3e^{-0{,}2t}$ est croissante sur $\\mathbb{R}$.",
      a: "**Faux** : sa dérivée $t \\mapsto -0{,}6\\,e^{-0{,}2t}$ est strictement négative ; la fonction est strictement décroissante (décroissance exponentielle)."
    }
  ],
  "1A5": [
    {
      q: "Pour calculer $u_{100}$, quel est l'avantage d'une forme explicite sur une relation de récurrence ?",
      a: "Avec $u_n = f(n)$, on calcule directement $u_{100} = f(100)$ ; avec $u_{n+1} = f(u_n)$, il faut calculer successivement $u_1, u_2, \\dots, u_{99}$."
    },
    {
      q: "Étudier le sens de variation de la suite définie par $u_n = n^2 + n$.",
      a: "$u_{n+1} - u_n = (n + 1)^2 + (n + 1) - n^2 - n = 2n + 2 > 0$ pour tout $n$ : la suite est strictement croissante."
    },
    {
      q: "Étudier le sens de variation de la suite définie par $u_n = 5 \\times 0{,}8^n$.",
      a: "Tous les termes sont strictement positifs et $\\frac{u_{n+1}}{u_n} = 0{,}8 < 1$ : la suite est strictement décroissante."
    },
    {
      q: "Comment justifier rapidement que la suite $u_n = \\sqrt{n + 2}$ est croissante ?",
      a: "$u_n = f(n)$ avec $f(x) = \\sqrt{x + 2}$, croissante sur $[0 ; +\\infty[$ : la suite $(u_n)$ est donc croissante."
    },
    {
      q: "Vrai ou faux : si $f$ est croissante, la suite définie par $u_{n+1} = f(u_n)$ est croissante.",
      a: "**Faux** : avec $f(x) = \\frac{x}{2}$ (croissante) et $u_0 = 1$, on obtient $1$, $\\frac{1}{2}$, $\\frac{1}{4}$… : la suite est décroissante."
    },
    {
      q: "Pour représenter une suite $u_{n+1} = f(u_n)$ « en toile d'araignée », quelles courbes trace-t-on ?",
      a: "La courbe de $f$ et la droite d'équation $y = x$, qui sert à reporter chaque terme $u_{n+1}$ sur l'axe des abscisses."
    },
    {
      q: "Vrai ou faux : une suite qui n'est pas croissante est décroissante.",
      a: "**Faux** : $u_n = (-1)^n$ prend les valeurs $1, -1, 1, -1$… ; elle n'est ni croissante ni décroissante."
    },
    {
      q: "Vrai ou faux : une suite strictement croissante tend forcément vers $+\\infty$.",
      a: "**Faux** : $u_n = 1 - \\frac{1}{n + 1}$ est strictement croissante, mais ses termes restent inférieurs à $1$ et semblent tendre vers $1$."
    }
  ],
  "1A6": [
    {
      q: "$(u_n)$ est géométrique de raison $3$ avec $u_2 = 12$. Que vaut $u_5$ ?",
      a: "$u_5 = u_2 \\times 3^{5 - 2} = 12 \\times 27 = 324$."
    },
    {
      q: "Montrer que la suite définie par $u_n = 5 - 2n$ est arithmétique.",
      a: "$u_{n+1} - u_n = 5 - 2(n + 1) - 5 + 2n = -2$, constante : la suite est arithmétique de raison $-2$ et de premier terme $u_0 = 5$."
    },
    {
      q: "Calculer $1 + 3 + 5 + \\dots + 99$.",
      a: "Somme de $50$ termes consécutifs d'une suite arithmétique : $50 \\times \\frac{1 + 99}{2} = 2500$."
    },
    {
      q: "$(u_n)$ est géométrique avec $u_0 = 2$ et $q = 3$. Calculer $u_0 + u_1 + \\dots + u_4$.",
      a: "$5$ termes : $2 \\times \\frac{1 - 3^5}{1 - 3} = 2 \\times \\frac{-242}{-2} = 242$ (on vérifie : $2 + 6 + 18 + 54 + 162$)."
    },
    {
      q: "Vrai ou faux : une suite géométrique de raison $q > 1$ est croissante.",
      a: "**Faux** si $u_0 < 0$ : avec $u_0 = -1$ et $q = 2$, on obtient $-1, -2, -4$… (suite décroissante). C'est vrai si $u_0 > 0$."
    },
    {
      q: "On place $1000$ euros à $5\\,\\%$ par an. Quel type de suite modélise le capital, à intérêts simples puis à intérêts composés ?",
      a: "Intérêts simples : suite **arithmétique** de raison $50$ ($C_n = 1000 + 50n$). Intérêts composés : suite **géométrique** de raison $1{,}05$ ($C_n = 1000 \\times 1{,}05^n$)."
    },
    {
      q: "La suite définie par $u_n = 2^n + 1$ est-elle géométrique ?",
      a: "Non : $u_0 = 2$, $u_1 = 3$, $u_2 = 5$ et $\\frac{u_1}{u_0} = \\frac{3}{2} \\neq \\frac{5}{3} = \\frac{u_2}{u_1}$."
    }
  ],
  "1G1": [
    {
      q: "Sur un cercle de rayon $2$, quelle est la longueur de l'arc intercepté par un angle de $\\frac{3\\pi}{4}$ rad ?",
      a: "$\\ell = R\\,\\theta = 2 \\times \\frac{3\\pi}{4} = \\frac{3\\pi}{2}$."
    },
    {
      q: "Que vaut $\\sin\\left(\\frac{7\\pi}{6}\\right)$ ?",
      a: "$\\frac{7\\pi}{6} = \\pi + \\frac{\\pi}{6}$, donc $\\sin\\left(\\frac{7\\pi}{6}\\right) = -\\sin\\left(\\frac{\\pi}{6}\\right) = -\\frac{1}{2}$."
    },
    {
      q: "Que valent $\\cos\\left(\\frac{\\pi}{2} - x\\right)$ et $\\sin\\left(\\frac{\\pi}{2} - x\\right)$ ?",
      a: "$\\cos\\left(\\frac{\\pi}{2} - x\\right) = \\sin(x)$ et $\\sin\\left(\\frac{\\pi}{2} - x\\right) = \\cos(x)$ (symétrie par rapport à la droite $y = x$)."
    },
    {
      q: "On sait que $\\cos(x) = \\frac{3}{5}$ et $x \\in \\left]-\\frac{\\pi}{2} ; 0\\right[$. Calculer $\\sin(x)$.",
      a: "$\\sin^2(x) = 1 - \\frac{9}{25} = \\frac{16}{25}$ ; sur cet intervalle $\\sin(x) < 0$, donc $\\sin(x) = -\\frac{4}{5}$."
    },
    {
      q: "Vrai ou faux : deux réels distincts ont toujours des images distinctes sur le cercle trigonométrique.",
      a: "**Faux** : $x$ et $x + 2\\pi$ (et plus généralement $x + 2k\\pi$, $k \\in \\mathbb{Z}$) ont la même image, par exemple $0$ et $2\\pi$."
    },
    {
      q: "Comment démontre-t-on que $\\cos\\left(\\frac{\\pi}{4}\\right) = \\sin\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$ ?",
      a: "L'image de $\\frac{\\pi}{4}$ est sur la droite $y = x$, donc $\\cos = \\sin = c > 0$ ; alors $2c^2 = 1$, d'où $c = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."
    },
    {
      q: "Quels sont les signes de $\\cos\\left(\\frac{3\\pi}{4}\\right)$ et de $\\sin\\left(\\frac{3\\pi}{4}\\right)$ ?",
      a: "L'image de $\\frac{3\\pi}{4}$ est dans le quart de cercle « en haut à gauche » : $\\cos\\left(\\frac{3\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2} < 0$ et $\\sin\\left(\\frac{3\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2} > 0$."
    },
    {
      q: "Dans la méthode d'Archimède, quelle valeur approchée de $\\pi$ donne l'hexagone régulier inscrit dans un cercle de rayon $1$ ?",
      a: "Ses $6$ côtés mesurent $1$ : son demi-périmètre vaut $3$, valeur approchée par défaut de $\\pi$."
    }
  ],
  "1G2": [
    {
      q: "$ABCD$ est un carré de côté $4$. Calculer $\\vec{AB} \\cdot \\vec{AC}$.",
      a: "Le projeté orthogonal de $C$ sur $(AB)$ est $B$, donc $\\vec{AB} \\cdot \\vec{AC} = \\vec{AB} \\cdot \\vec{AB} = AB^2 = 16$."
    },
    {
      q: "$ABC$ est un triangle équilatéral de côté $2$. Calculer $\\vec{AB} \\cdot \\vec{AC}$.",
      a: "$\\vec{AB} \\cdot \\vec{AC} = 2 \\times 2 \\times \\cos\\left(\\frac{\\pi}{3}\\right) = 4 \\times \\frac{1}{2} = 2$."
    },
    {
      q: "Vrai ou faux : si $\\vec{u} \\cdot \\vec{v} = 0$, alors $\\vec{u} = \\vec{0}$ ou $\\vec{v} = \\vec{0}$.",
      a: "**Faux** : $\\vec{u}(1 ; 0)$ et $\\vec{v}(0 ; 1)$ sont non nuls et $\\vec{u} \\cdot \\vec{v} = 0$ ; ils sont orthogonaux."
    },
    {
      q: "Vrai ou faux : $\\vec{AB} \\cdot \\vec{AC} = AB \\times AC$.",
      a: "**Faux** en général : $\\vec{AB} \\cdot \\vec{AC} = AB \\times AC \\times \\cos\\left(\\widehat{BAC}\\right)$. L'égalité n'a lieu que si $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires de même sens."
    },
    {
      q: "Déterminer le réel $m$ tel que $\\vec{u}(m ; 3)$ et $\\vec{v}(2 ; -4)$ soient orthogonaux (repère orthonormé).",
      a: "$\\vec{u} \\cdot \\vec{v} = 2m - 12 = 0 \\iff m = 6$."
    },
    {
      q: "Comment calculer l'angle entre $\\vec{u}(1 ; 1)$ et $\\vec{v}(1 ; 0)$ ?",
      a: "$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\times \\|\\vec{v}\\|} = \\frac{1}{\\sqrt{2} \\times 1} = \\frac{\\sqrt{2}}{2}$ : l'angle géométrique mesure $\\frac{\\pi}{4}$."
    },
    {
      q: "On sait que $\\vec{u} \\cdot \\vec{v} = 4$ et $\\|\\vec{v}\\| = 3$. Calculer $(2\\vec{u} - \\vec{v}) \\cdot \\vec{v}$.",
      a: "Par bilinéarité : $2\\,\\vec{u} \\cdot \\vec{v} - \\vec{v} \\cdot \\vec{v} = 2 \\times 4 - 3^2 = -1$."
    },
    {
      q: "Vrai ou faux : si $\\|\\vec{u}\\| = \\|\\vec{v}\\|$, alors $\\vec{u} + \\vec{v}$ et $\\vec{u} - \\vec{v}$ sont orthogonaux.",
      a: "**Vrai** : $(\\vec{u} + \\vec{v}) \\cdot (\\vec{u} - \\vec{v}) = \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2 = 0$. (Les diagonales d'un losange sont perpendiculaires.)"
    }
  ],
  "1G3": [
    {
      q: "Dans un triangle $ABC$, $AC = 3$, $AB = 5$ et $\\widehat{A} = 60^\\circ$. Calculer $BC$.",
      a: "$BC^2 = 9 + 25 - 2 \\times 3 \\times 5 \\times \\frac{1}{2} = 19$, donc $BC = \\sqrt{19}$."
    },
    {
      q: "Vrai ou faux : si $a^2 > b^2 + c^2$ dans un triangle $ABC$ (notations usuelles), l'angle $\\widehat{A}$ est obtus.",
      a: "**Vrai** : $\\cos(\\widehat{A}) = \\frac{b^2 + c^2 - a^2}{2bc} < 0$, donc $\\widehat{A}$ est obtus."
    },
    {
      q: "Déterminer une équation cartésienne de la droite passant par $A(1 ; 2)$ et de vecteur normal $\\vec{n}(3 ; -1)$.",
      a: "$M(x ; y)$ convient si et seulement si $\\vec{AM} \\cdot \\vec{n} = 0$ : $3(x - 1) - (y - 2) = 0$, soit $3x - y - 1 = 0$."
    },
    {
      q: "À quelle condition les droites $ax + by + c = 0$ et $a'x + b'y + c' = 0$ sont-elles perpendiculaires ?",
      a: "Lorsque leurs vecteurs normaux $\\vec{n}(a ; b)$ et $\\vec{n'}(a' ; b')$ sont orthogonaux : $aa' + bb' = 0$."
    },
    {
      q: "Donner une équation du cercle de diamètre $[AB]$ avec $A(1 ; 0)$ et $B(5 ; 0)$.",
      a: "$\\vec{MA} \\cdot \\vec{MB} = 0$ donne $(x - 1)(x - 5) + y^2 = 0$, c'est-à-dire $(x - 3)^2 + y^2 = 4$ : centre $(3 ; 0)$, rayon $2$."
    },
    {
      q: "Déterminer le centre et le rayon du cercle d'équation $x^2 + y^2 - 4x + 6y - 3 = 0$.",
      a: "$(x - 2)^2 - 4 + (y + 3)^2 - 9 - 3 = 0$, soit $(x - 2)^2 + (y + 3)^2 = 16$ : centre $\\Omega(2 ; -3)$, rayon $4$."
    },
    {
      q: "Vrai ou faux : $x^2 + y^2 + 2x + 5 = 0$ est l'équation d'un cercle.",
      a: "**Faux** : elle s'écrit $(x + 1)^2 + y^2 = -4$ ; une somme de carrés ne peut être négative, l'ensemble des points est vide."
    },
    {
      q: "Déterminer le projeté orthogonal $H$ du point $A(3 ; 4)$ sur la droite $d$ d'équation $x - y = 0$.",
      a: "$\\vec{AH}$ est colinéaire au vecteur normal $\\vec{n}(1 ; -1)$ : $H(3 + t ; 4 - t)$. $H \\in d$ donne $3 + t = 4 - t$, soit $t = \\frac{1}{2}$ : $H\\left(\\frac{7}{2} ; \\frac{7}{2}\\right)$."
    }
  ],
  "1S1": [
    {
      q: "On a $P(A) = 0{,}6$, $P_A(B) = 0{,}3$ et $P_{\\overline{A}}(B) = 0{,}5$. Calculer $P(B)$.",
      a: "Probabilités totales : $P(B) = 0{,}6 \\times 0{,}3 + 0{,}4 \\times 0{,}5 = 0{,}18 + 0{,}2 = 0{,}38$."
    },
    {
      q: "Avec les mêmes données ($P(A \\cap B) = 0{,}18$ et $P(B) = 0{,}38$), calculer $P_B(A)$.",
      a: "$P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}18}{0{,}38} = \\frac{9}{19}$."
    },
    {
      q: "Vrai ou faux : $P_A(B) = P_B(A)$.",
      a: "**Faux** en général. Lancer d'un dé, $A$ : « obtenir $6$ », $B$ : « obtenir un nombre pair » : $P_A(B) = 1$, mais $P_B(A) = \\frac{1}{3}$."
    },
    {
      q: "Vrai ou faux : deux événements incompatibles de probabilités non nulles sont indépendants.",
      a: "**Faux** : $P(A \\cap B) = 0$ alors que $P(A) \\times P(B) > 0$. Ils sont même fortement liés : si $A$ est réalisé, $B$ ne l'est pas."
    },
    {
      q: "On a $P(A) = 0{,}4$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Les événements $A$ et $B$ sont-ils indépendants ?",
      a: "Oui : $P(A) \\times P(B) = 0{,}4 \\times 0{,}5 = 0{,}2 = P(A \\cap B)$."
    },
    {
      q: "Qu'appelle-t-on une partition de l'univers $\\Omega$ ?",
      a: "Des événements $A_1, \\dots, A_n$ de probabilités non nulles, **deux à deux incompatibles**, dont la **réunion** est $\\Omega$ (exemple : $A$ et $\\overline{A}$)."
    },
    {
      q: "On répète deux fois, de façon indépendante, une épreuve de succès $p = 0{,}2$. Probabilité d'obtenir exactement un succès ?",
      a: "Deux chemins, $S\\overline{S}$ et $\\overline{S}S$, de probabilité $0{,}2 \\times 0{,}8 = 0{,}16$ chacun : $2 \\times 0{,}16 = 0{,}32$."
    }
  ],
  "1S2": [
    {
      q: "$X$ prend les valeurs $-1$, $2$ et $5$ avec $P(X = -1) = 0{,}5$ et $P(X = 2) = 0{,}3$. Déterminer $P(X = 5)$ puis $E(X)$.",
      a: "$P(X = 5) = 1 - 0{,}8 = 0{,}2$ ; $E(X) = -0{,}5 + 0{,}6 + 1 = 1{,}1$."
    },
    {
      q: "Qu'est-ce qu'une variable aléatoire réelle sur un univers fini $\\Omega$ ?",
      a: "Une fonction qui associe un nombre réel à chaque issue de $\\Omega$ (par exemple le gain associé à chaque résultat d'un jeu)."
    },
    {
      q: "$X$ prend les valeurs $0$ et $2$, chacune avec la probabilité $\\frac{1}{2}$. Calculer $E(X)$, $V(X)$ et $\\sigma(X)$.",
      a: "$E(X) = 1$ ; $E(X^2) = \\frac{0 + 4}{2} = 2$, donc $V(X) = 2 - 1^2 = 1$ et $\\sigma(X) = 1$."
    },
    {
      q: "Vrai ou faux : $E(X^2) = \\left(E(X)\\right)^2$.",
      a: "**Faux** en général : leur différence est $V(X)$. Si $X$ vaut $-1$ ou $1$ avec probabilité $\\frac{1}{2}$, $E(X) = 0$ mais $E(X^2) = 1$."
    },
    {
      q: "Vrai ou faux : une variance peut être négative.",
      a: "**Faux** : $V(X) = \\sum (x_i - E(X))^2 p_i$ est une somme de termes positifs ou nuls, donc $V(X) \\ge 0$."
    },
    {
      q: "Pourquoi utilise-t-on l'écart-type plutôt que la variance pour décrire la dispersion ?",
      a: "$\\sigma(X) = \\sqrt{V(X)}$ s'exprime dans la **même unité** que $X$ (la variance est dans l'unité au carré) ; plus il est grand, plus les valeurs sont dispersées autour de $E(X)$."
    },
    {
      q: "On mise $m$ euros puis on lance un dé équilibré : on reçoit $12$ euros si l'on obtient $6$, rien sinon. Pour quelle mise le jeu est-il équitable ?",
      a: "Gain algébrique : $12 - m$ avec probabilité $\\frac{1}{6}$, $-m$ sinon. $E = \\frac{12}{6} - m = 2 - m$, nul pour $m = 2$ euros."
    }
  ],
  "1S3": [
    {
      q: "Si `L = [2, 7, 7, 4]`, que vaut `L` après `L.remove(7)` ?",
      a: "`[2, 7, 4]` : `remove` supprime seulement la **première** occurrence de la valeur."
    },
    {
      q: "Si `L = [10, 20, 30]`, que renvoie `L.pop()` et que vaut ensuite `L` ?",
      a: "`L.pop()` renvoie $30$ (le dernier élément) et `L` vaut ensuite `[10, 20]`."
    },
    {
      q: "Vrai ou faux : `for k in range(5):` fait prendre à `k` les valeurs $1$ à $5$.",
      a: "**Faux** : `k` prend les valeurs $0, 1, 2, 3, 4$ (cinq valeurs, de $0$ à $4$). Pour $1$ à $5$, on écrit `range(1, 6)`."
    },
    {
      q: "Écrire une fonction Python qui renvoie $1 + 2 + \\dots + n$ à l'aide d'un accumulateur.",
      a: "`def somme(n):` puis `s = 0`, `for k in range(1, n + 1): s = s + k`, enfin `return s`."
    },
    {
      q: "Que renvoie ce programme : `n = 0`, `u = 1`, `while u < 100: u = 2 * u ; n = n + 1`, puis `return n` ?",
      a: "$7$ : $u$ prend les valeurs $2, 4, 8, 16, 32, 64, 128$ ; c'est le plus petit $n$ tel que $2^n \\ge 100$."
    },
    {
      q: "Comment simuler en Python un événement de probabilité $0{,}3$ ?",
      a: "Avec `random() < 0.3` (module `random`) : `random()` renvoie un flottant de $[0 ; 1[$, et la condition est vraie avec la probabilité $0{,}3$."
    },
    {
      q: "Que vaut `[k for k in range(10) if k % 3 == 0]` ?",
      a: "`[0, 3, 6, 9]` : les entiers de $0$ à $9$ divisibles par $3$ (`k % 3` est le reste de la division de `k` par $3$)."
    }
  ]
});
