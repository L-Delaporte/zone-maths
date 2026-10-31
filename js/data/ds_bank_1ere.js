window.MATHS_DS_BANK = window.MATHS_DS_BANK || {};
Object.assign(window.MATHS_DS_BANK, {
  "1A1": [
    { id: "1A1-ds-01", title: "Les trois formes d'un trinôme", difficulty: 1, points: 4,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = 2x^2 - 8x + 6$.

1. Déterminer la forme canonique de $f(x)$.
2. Calculer le discriminant de $f(x)$, puis déterminer les racines de $f$.
3. En déduire la forme factorisée de $f(x)$.
4. Dresser le tableau de variations de $f$ sur $\\mathbb{R}$ en précisant les coordonnées du sommet de la parabole.`,
      solution: `**1.** On factorise par $a = 2$ : $f(x) = 2\\left(x^2 - 4x\\right) + 6 = 2\\left[(x-2)^2 - 4\\right] + 6 = 2(x-2)^2 - 8 + 6$.

Donc $f(x) = 2(x-2)^2 - 2$.

(On peut aussi utiliser $\\alpha = -\\frac{b}{2a} = \\frac{8}{4} = 2$ et $\\beta = f(2) = 8 - 16 + 6 = -2$.)

**2.** $\\Delta = b^2 - 4ac = (-8)^2 - 4 \\times 2 \\times 6 = 64 - 48 = 16 > 0$ : il y a deux racines distinctes
$$x_1 = \\frac{8 - 4}{4} = 1 \\quad \\text{et} \\quad x_2 = \\frac{8 + 4}{4} = 3.$$

**3.** Pour tout réel $x$ : $f(x) = a(x - x_1)(x - x_2) = 2(x-1)(x-3)$.

*Vérification* : $2(x^2 - 4x + 3) = 2x^2 - 8x + 6$.

**4.** Comme $a = 2 > 0$, $f$ est décroissante sur $]-\\infty ; 2]$ puis croissante sur $[2 ; +\\infty[$.

| $x$ | $-\\infty$ | | $2$ | | $+\\infty$ |
|---|---|---|---|---|---|
| $f(x)$ | | $\\searrow$ | $-2$ | $\\nearrow$ | |

Le sommet de la parabole est $S(2 ; -2)$ : c'est le minimum de $f$.` },
    { id: "1A1-ds-02", title: "Résolutions d'équations du second degré", difficulty: 1, points: 4,
      statement: `Résoudre dans $\\mathbb{R}$ les équations suivantes, en choisissant à chaque fois la méthode la plus adaptée.

1. $3x^2 + 5x - 2 = 0$
2. $x^2 - 6x + 9 = 0$
3. $2x^2 + x + 4 = 0$
4. $5x^2 - 20x = 0$`,
      solution: `**1.** $\\Delta = 5^2 - 4 \\times 3 \\times (-2) = 25 + 24 = 49 = 7^2 > 0$. Deux solutions :
$$x_1 = \\frac{-5 - 7}{6} = -2 \\quad \\text{et} \\quad x_2 = \\frac{-5 + 7}{6} = \\frac{1}{3}.$$
$\\mathcal{S} = \\left\\{-2 ; \\frac{1}{3}\\right\\}$.

**2.** On reconnaît une identité remarquable : $x^2 - 6x + 9 = (x-3)^2$. Or $(x-3)^2 = 0 \\iff x = 3$ (racine double, $\\Delta = 36 - 36 = 0$). $\\mathcal{S} = \\{3\\}$.

**3.** $\\Delta = 1^2 - 4 \\times 2 \\times 4 = 1 - 32 = -31 < 0$ : l'équation n'a aucune solution réelle. $\\mathcal{S} = \\varnothing$.

**4.** Inutile de calculer $\\Delta$ : on factorise par $5x$.
$5x^2 - 20x = 5x(x - 4) = 0 \\iff x = 0$ ou $x = 4$ (un produit est nul si et seulement si l'un de ses facteurs est nul). $\\mathcal{S} = \\{0 ; 4\\}$.` },
    { id: "1A1-ds-03", title: "Inéquations du second degré", difficulty: 2, points: 5,
      statement: `Résoudre dans $\\mathbb{R}$ les inéquations suivantes. On justifiera à l'aide du signe d'un trinôme.

1. $-x^2 + x + 6 \\geqslant 0$
2. $2x^2 - 3x - 2 < 0$
3. $x^2 + x + 1 > 0$
4. $x^2 \\leqslant 4x - 4$`,
      solution: `**Rappel** : un trinôme est du signe de $a$ à l'extérieur de ses racines et du signe contraire entre ses racines ; s'il n'a pas de racine, il est du signe de $a$ sur $\\mathbb{R}$.

**1.** $\\Delta = 1 + 24 = 25$, racines $x_1 = \\frac{-1 - 5}{-2} = 3$ et $x_2 = \\frac{-1 + 5}{-2} = -2$. Comme $a = -1 < 0$, le trinôme est positif entre ses racines : $\\mathcal{S} = [-2 ; 3]$.

**2.** $\\Delta = 9 + 16 = 25$, racines $\\frac{3 - 5}{4} = -\\frac{1}{2}$ et $\\frac{3 + 5}{4} = 2$. Comme $a = 2 > 0$, le trinôme est strictement négatif strictement entre ses racines : $\\mathcal{S} = \\left]-\\frac{1}{2} ; 2\\right[$.

**3.** $\\Delta = 1 - 4 = -3 < 0$ : le trinôme n'a pas de racine et garde le signe de $a = 1 > 0$. Il est donc strictement positif pour tout réel : $\\mathcal{S} = \\mathbb{R}$.

**4.** $x^2 \\leqslant 4x - 4 \\iff x^2 - 4x + 4 \\leqslant 0 \\iff (x-2)^2 \\leqslant 0$. Un carré est toujours positif ou nul, il est nul seulement pour $x = 2$ : $\\mathcal{S} = \\{2\\}$.` },
    { id: "1A1-ds-04", title: "Retrouver un trinôme à partir de sa parabole", difficulty: 2, points: 5,
      statement: `Une parabole $\\mathcal{P}$ représente une fonction polynôme du second degré $f$. On sait que son sommet est $S(-1 ; 4)$ et qu'elle passe par le point $A(1 ; -4)$.

1. Justifier qu'il existe un réel $a$ non nul tel que, pour tout réel $x$, $f(x) = a(x+1)^2 + 4$.
2. Déterminer $a$, puis la forme développée de $f(x)$.
3. Déterminer les abscisses des points d'intersection de $\\mathcal{P}$ avec l'axe des abscisses (valeurs exactes).
4. Dresser le tableau de signes de $f(x)$.`,
      solution: `**1.** La forme canonique d'un trinôme est $f(x) = a(x - \\alpha)^2 + \\beta$ où $(\\alpha ; \\beta)$ sont les coordonnées du sommet de la parabole. Ici $\\alpha = -1$ et $\\beta = 4$, d'où $f(x) = a(x+1)^2 + 4$ avec $a \\neq 0$.

**2.** $A \\in \\mathcal{P}$ donc $f(1) = -4$ : $a \\times 2^2 + 4 = -4 \\iff 4a = -8 \\iff a = -2$.

Ainsi $f(x) = -2(x+1)^2 + 4 = -2(x^2 + 2x + 1) + 4 = -2x^2 - 4x + 2$.

**3.** On résout $f(x) = 0$ à partir de la forme canonique :
$$-2(x+1)^2 + 4 = 0 \\iff (x+1)^2 = 2 \\iff x + 1 = \\sqrt{2} \\ \\text{ou} \\ x + 1 = -\\sqrt{2}.$$
Les abscisses sont $x_1 = -1 - \\sqrt{2}$ et $x_2 = -1 + \\sqrt{2}$.

(Avec le discriminant : $\\Delta = 16 + 16 = 32$, $\\sqrt{32} = 4\\sqrt{2}$, $x = \\frac{4 \\pm 4\\sqrt{2}}{-4}$, ce qui donne les mêmes valeurs.)

**4.** $a = -2 < 0$ : $f(x)$ est négatif à l'extérieur des racines et positif entre elles.

| $x$ | $-\\infty$ | | $-1-\\sqrt{2}$ | | $-1+\\sqrt{2}$ | | $+\\infty$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |` },
    { id: "1A1-ds-05", title: "Trinôme dépendant d'un paramètre", difficulty: 3, points: 6,
      statement: `Pour tout réel $m$, on considère l'équation $(E_m)$ : $x^2 - 2mx + m + 6 = 0$.

1. Montrer que le discriminant de $(E_m)$ est $\\Delta_m = 4(m^2 - m - 6)$.
2. Factoriser $m^2 - m - 6$, puis étudier son signe selon les valeurs de $m$.
3. Déterminer les valeurs de $m$ pour lesquelles $(E_m)$ admet une unique solution ; préciser cette solution dans chaque cas.
4. Pour quelles valeurs de $m$ l'équation $(E_m)$ n'a-t-elle aucune solution réelle ?`,
      solution: `**1.** Avec $a = 1$, $b = -2m$, $c = m + 6$ :
$$\\Delta_m = (-2m)^2 - 4 \\times 1 \\times (m+6) = 4m^2 - 4m - 24 = 4(m^2 - m - 6).$$

**2.** Le trinôme $m^2 - m - 6$ a pour discriminant $1 + 24 = 25$ et pour racines $\\frac{1 - 5}{2} = -2$ et $\\frac{1+5}{2} = 3$. Donc $m^2 - m - 6 = (m+2)(m-3)$.

Son coefficient dominant est positif : $m^2 - m - 6 > 0$ pour $m \\in \\,]-\\infty ; -2[\\, \\cup \\,]3 ; +\\infty[$, nul pour $m = -2$ ou $m = 3$, et $< 0$ pour $m \\in \\,]-2 ; 3[$.

**3.** $(E_m)$ admet une unique solution si et seulement si $\\Delta_m = 0$, c'est-à-dire $m = -2$ ou $m = 3$. La solution est alors $x_0 = -\\frac{b}{2a} = \\frac{2m}{2} = m$.
- Pour $m = -2$ : $x^2 + 4x + 4 = (x+2)^2 = 0$, solution $x = -2$.
- Pour $m = 3$ : $x^2 - 6x + 9 = (x-3)^2 = 0$, solution $x = 3$.

**4.** $(E_m)$ n'a pas de solution réelle si et seulement si $\\Delta_m < 0$, c'est-à-dire $m \\in \\,]-2 ; 3[$.` },
    { id: "1A1-ds-06", title: "Somme et produit des racines", difficulty: 3, points: 6,
      statement: `On rappelle que si un trinôme $ax^2 + bx + c$ admet deux racines $x_1$ et $x_2$, alors $x_1 + x_2 = -\\frac{b}{a}$ et $x_1 x_2 = \\frac{c}{a}$.

1. Démontrer ce résultat à partir des expressions des racines à l'aide du discriminant (on suppose $\\Delta > 0$).
2. On considère l'équation $x^2 - 5x + 3 = 0$.
 a) Justifier qu'elle admet deux solutions $x_1$ et $x_2$, sans les calculer.
 b) Calculer $\\frac{1}{x_1} + \\frac{1}{x_2}$ et $x_1^2 + x_2^2$.
3. Déterminer deux nombres réels dont la somme vaut $10$ et le produit vaut $21$.`,
      solution: `**1.** Si $\\Delta > 0$, $x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}$ et $x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$.
- Somme : $x_1 + x_2 = \\frac{-2b}{2a} = -\\frac{b}{a}$.
- Produit : $x_1 x_2 = \\frac{(-b)^2 - (\\sqrt{\\Delta})^2}{4a^2} = \\frac{b^2 - (b^2 - 4ac)}{4a^2} = \\frac{4ac}{4a^2} = \\frac{c}{a}$.

**2. a)** $\\Delta = 25 - 12 = 13 > 0$ : l'équation admet deux solutions distinctes.

**b)** D'après la question 1 : $x_1 + x_2 = 5$ et $x_1 x_2 = 3$ (en particulier $x_1 \\neq 0$ et $x_2 \\neq 0$).
$$\\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{x_1 + x_2}{x_1 x_2} = \\frac{5}{3}.$$
$$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2 = 25 - 6 = 19.$$

**3.** Deux nombres de somme $S = 10$ et de produit $P = 21$ sont les racines du trinôme $x^2 - Sx + P = x^2 - 10x + 21$ (car $(x - x_1)(x - x_2) = x^2 - (x_1 + x_2)x + x_1x_2$).

$\\Delta = 100 - 84 = 16$, racines $\\frac{10 - 4}{2} = 3$ et $\\frac{10 + 4}{2} = 7$.

Les deux nombres sont $3$ et $7$ (vérification : $3 + 7 = 10$, $3 \\times 7 = 21$).` },
    { id: "1A1-ds-07", title: "L'enclos le long d'un mur", difficulty: 4, points: 7,
      statement: `Un éleveur dispose de $60$ m de grillage pour fabriquer un enclos rectangulaire adossé à un long mur : le grillage ne sert que pour les trois autres côtés. On note $x$ la longueur (en m) de chacun des deux côtés perpendiculaires au mur.

1. Justifier que $x \\in \\,]0 ; 30[$ et que l'aire de l'enclos, en m², est $A(x) = -2x^2 + 60x$.
2. Déterminer la forme canonique de $A(x)$. En déduire les dimensions de l'enclos d'aire maximale et cette aire maximale.
3. L'éleveur souhaite une aire d'au moins $400$ m². Déterminer l'ensemble des valeurs de $x$ possibles.
4. Peut-il obtenir un enclos de $480$ m² ? Justifier.`,
      solution: `**1.** Les deux côtés perpendiculaires mesurent $x$ et le côté parallèle au mur mesure $60 - 2x$. Il faut $x > 0$ et $60 - 2x > 0$, soit $x \\in \\,]0 ; 30[$.
Aire : $A(x) = x(60 - 2x) = -2x^2 + 60x$.

**2.** $A(x) = -2(x^2 - 30x) = -2\\left[(x - 15)^2 - 225\\right] = -2(x-15)^2 + 450$.
Comme $-2(x-15)^2 \\leqslant 0$, on a $A(x) \\leqslant 450$ avec égalité pour $x = 15$.
L'aire maximale est $450$ m², obtenue pour un enclos de $15$ m sur $60 - 30 = 30$ m.

**3.** $A(x) \\geqslant 400 \\iff -2x^2 + 60x - 400 \\geqslant 0 \\iff x^2 - 30x + 200 \\leqslant 0$ (division par $-2 < 0$).
$\\Delta = 900 - 800 = 100$, racines $\\frac{30 - 10}{2} = 10$ et $\\frac{30 + 10}{2} = 20$. Le trinôme $x^2 - 30x + 200$ ($a = 1 > 0$) est négatif entre ses racines : $x \\in [10 ; 20]$, intervalle bien inclus dans $]0 ; 30[$.
Il faut donc que les côtés perpendiculaires au mur mesurent entre $10$ m et $20$ m.

**4.** Non : d'après la question 2, l'aire ne peut pas dépasser $450$ m² $< 480$ m². (Par le calcul : $-2x^2 + 60x = 480 \\iff x^2 - 30x + 240 = 0$, de discriminant $900 - 960 = -60 < 0$, pas de solution.)` },
    { id: "1A1-ds-08", title: "Une parabole et une famille de droites", difficulty: 4, points: 7,
      statement: `Dans un repère, on considère la parabole $\\mathcal{P}$ d'équation $y = x^2 - 3x + 1$ et, pour tout réel $m$, la droite $D_m$ d'équation $y = x + m$.

1. Montrer que les abscisses des points d'intersection de $\\mathcal{P}$ et $D_m$ sont les solutions de l'équation $x^2 - 4x + 1 - m = 0$.
2. Discuter, selon les valeurs de $m$, le nombre de points d'intersection de $\\mathcal{P}$ et $D_m$.
3. Pour la valeur de $m$ où il n'y a qu'un point commun, donner les coordonnées de ce point.
4. Pour $m = 2$, étudier la position relative de $\\mathcal{P}$ et $D_2$.
5. Lorsque $D_m$ coupe $\\mathcal{P}$ en deux points $M$ et $N$, montrer que le milieu de $[MN]$ a une abscisse indépendante de $m$.`,
      solution: `**1.** Un point $(x ; y)$ est commun aux deux courbes si et seulement si $y = x^2 - 3x + 1$ et $y = x + m$, donc $x^2 - 3x + 1 = x + m \\iff x^2 - 4x + 1 - m = 0$.

**2.** $\\Delta = 16 - 4(1 - m) = 12 + 4m = 4(m + 3)$.
- Si $m > -3$ : $\\Delta > 0$, deux points d'intersection.
- Si $m = -3$ : $\\Delta = 0$, un seul point commun.
- Si $m < -3$ : $\\Delta < 0$, aucun point commun.

**3.** Pour $m = -3$, l'équation devient $x^2 - 4x + 4 = (x-2)^2 = 0$, donc $x = 2$ et $y = 2 - 3 = -1$. Le point commun est $(2 ; -1)$ (la droite $D_{-3}$ est tangente à la parabole).

**4.** On étudie le signe de $d(x) = (x^2 - 3x + 1) - (x + 2) = x^2 - 4x - 1$.
$\\Delta = 16 + 4 = 20$, racines $\\frac{4 \\pm 2\\sqrt{5}}{2} = 2 \\pm \\sqrt{5}$.
Comme $a = 1 > 0$ :
- $\\mathcal{P}$ est au-dessus de $D_2$ sur $]-\\infty ; 2 - \\sqrt{5}[$ et sur $]2 + \\sqrt{5} ; +\\infty[$ ;
- $\\mathcal{P}$ est en dessous de $D_2$ sur $]2 - \\sqrt{5} ; 2 + \\sqrt{5}[$ ;
- elles se coupent aux points d'abscisses $2 \\pm \\sqrt{5}$.

**5.** Si $m > -3$, les abscisses $x_M$ et $x_N$ sont les deux racines de $x^2 - 4x + 1 - m$ ; leur somme vaut $-\\frac{b}{a} = 4$. L'abscisse du milieu de $[MN]$ est $\\frac{x_M + x_N}{2} = 2$, indépendante de $m$.` }
  ],
  "1A2": [
    { id: "1A2-ds-01", title: "Nombre dérivé par le taux de variation", difficulty: 1, points: 4,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^2 + 3x$, et $\\mathcal{C}_f$ sa courbe représentative.

1. Pour $h \\neq 0$, montrer que le taux de variation de $f$ entre $1$ et $1 + h$ est égal à $5 + h$.
2. En déduire que $f$ est dérivable en $1$ et donner $f'(1)$.
3. Déterminer l'équation réduite de la tangente $T$ à $\\mathcal{C}_f$ au point d'abscisse $1$.`,
      solution: `**1.** $f(1+h) = (1+h)^2 + 3(1+h) = 1 + 2h + h^2 + 3 + 3h = 4 + 5h + h^2$ et $f(1) = 1 + 3 = 4$.
$$\\frac{f(1+h) - f(1)}{h} = \\frac{5h + h^2}{h} = \\frac{h(5 + h)}{h} = 5 + h.$$

**2.** Quand $h$ tend vers $0$, $5 + h$ tend vers $5$, limite finie. Donc $f$ est dérivable en $1$ et $f'(1) = 5$.

**3.** $T : y = f'(1)(x - 1) + f(1) = 5(x - 1) + 4$, soit $T : y = 5x - 1$.` },
    { id: "1A2-ds-02", title: "Lire et utiliser des tangentes", difficulty: 1, points: 4,
      statement: `On donne les informations suivantes sur une fonction $g$ dérivable sur $\\mathbb{R}$ et sa courbe $\\mathcal{C}_g$ :
- $\\mathcal{C}_g$ passe par $A(2 ; 3)$ et la tangente en $A$ passe aussi par le point $B(4 ; 7)$ ;
- $\\mathcal{C}_g$ passe par $C(-1 ; 5)$ et admet en ce point une tangente parallèle à l'axe des abscisses ;
- $g(0) = 1$ et $g'(0) = -3$.

1. Déterminer $g(2)$ et $g'(2)$, puis l'équation réduite de la tangente en $A$.
2. Donner $g'(-1)$ et l'équation de la tangente en $C$.
3. Déterminer l'équation réduite de la tangente au point d'abscisse $0$ et les coordonnées de son point d'intersection avec l'axe des abscisses.`,
      solution: `**1.** $A \\in \\mathcal{C}_g$ donc $g(2) = 3$. Le nombre dérivé $g'(2)$ est le coefficient directeur de la tangente $(AB)$ :
$$g'(2) = \\frac{y_B - y_A}{x_B - x_A} = \\frac{7 - 3}{4 - 2} = 2.$$
Tangente en $A$ : $y = 2(x - 2) + 3$, soit $y = 2x - 1$.

**2.** Une tangente parallèle à l'axe des abscisses a un coefficient directeur nul : $g'(-1) = 0$. Comme $g(-1) = 5$, la tangente en $C$ a pour équation $y = 5$.

**3.** $y = g'(0)(x - 0) + g(0) = -3x + 1$.
Elle coupe l'axe des abscisses lorsque $-3x + 1 = 0$, soit $x = \\frac{1}{3}$ : point $\\left(\\frac{1}{3} ; 0\\right)$.` },
    { id: "1A2-ds-03", title: "Tangente à l'hyperbole et triangle", difficulty: 2, points: 5,
      statement: `Soit $f$ la fonction inverse, définie sur $]0 ; +\\infty[$ par $f(x) = \\frac{1}{x}$.

1. Pour $h \\neq 0$ avec $2 + h > 0$, montrer que $\\frac{f(2+h) - f(2)}{h} = \\frac{-1}{2(2+h)}$.
2. En déduire $f'(2)$.
3. Déterminer l'équation réduite de la tangente $T$ à la courbe de $f$ au point d'abscisse $2$.
4. $T$ coupe les axes du repère (orthonormé) en $P$ et $Q$. Calculer l'aire du triangle $OPQ$.`,
      solution: `**1.** $f(2+h) - f(2) = \\frac{1}{2+h} - \\frac{1}{2} = \\frac{2 - (2+h)}{2(2+h)} = \\frac{-h}{2(2+h)}$.
En divisant par $h \\neq 0$ : $\\frac{f(2+h) - f(2)}{h} = \\frac{-1}{2(2+h)}$.

**2.** Quand $h \\to 0$, $2(2+h) \\to 4$, donc le taux tend vers $-\\frac{1}{4}$ : $f'(2) = -\\frac{1}{4}$.

**3.** $f(2) = \\frac{1}{2}$, donc $T : y = -\\frac{1}{4}(x - 2) + \\frac{1}{2} = -\\frac{1}{4}x + 1$.

**4.** Avec $x = 0$ : $y = 1$, donc $Q(0 ; 1)$. Avec $y = 0$ : $-\\frac{1}{4}x + 1 = 0 \\iff x = 4$, donc $P(4 ; 0)$.
Le triangle $OPQ$ est rectangle en $O$ : son aire vaut $\\frac{OP \\times OQ}{2} = \\frac{4 \\times 1}{2} = 2$ unités d'aire.` },
    { id: "1A2-ds-04", title: "Racine carrée et approximation affine", difficulty: 2, points: 5,
      statement: `Soit $f$ la fonction racine carrée, définie sur $[0 ; +\\infty[$ par $f(x) = \\sqrt{x}$.

1. Pour $h \\neq 0$ tel que $4 + h > 0$, montrer que $\\frac{f(4+h) - f(4)}{h} = \\frac{1}{\\sqrt{4+h} + 2}$.
   (On pourra multiplier par la quantité conjuguée.)
2. En déduire $f'(4)$ et l'équation de la tangente $T$ au point d'abscisse $4$.
3. En utilisant $T$, donner une valeur approchée de $\\sqrt{4{,}2}$. Comparer avec la valeur donnée par la calculatrice.`,
      solution: `**1.** $\\frac{\\sqrt{4+h} - 2}{h} = \\frac{(\\sqrt{4+h} - 2)(\\sqrt{4+h} + 2)}{h(\\sqrt{4+h} + 2)} = \\frac{(4 + h) - 4}{h(\\sqrt{4+h} + 2)} = \\frac{1}{\\sqrt{4+h} + 2}$.

**2.** Quand $h \\to 0$, $\\sqrt{4+h} \\to 2$, donc le taux tend vers $\\frac{1}{4}$ : $f'(4) = \\frac{1}{4}$.
Comme $f(4) = 2$ : $T : y = \\frac{1}{4}(x - 4) + 2 = \\frac{1}{4}x + 1$.

**3.** Près de $4$, la courbe est proche de sa tangente : $\\sqrt{4{,}2} \\approx \\frac{4{,}2}{4} + 1 = 1{,}05 + 1 = 2{,}05$.
La calculatrice donne $\\sqrt{4{,}2} \\approx 2{,}0494$ : l'erreur commise est d'environ $0{,}0006$, très faible.` },
    { id: "1A2-ds-05", title: "Fonction cube : tangente et position relative", difficulty: 3, points: 6,
      statement: `Soit $f$ la fonction cube, définie sur $\\mathbb{R}$ par $f(x) = x^3$, et $\\mathcal{C}$ sa courbe.

1. Développer $(a+h)^3$, puis montrer que pour tout réel $a$, $f$ est dérivable en $a$ et $f'(a) = 3a^2$.
2. Déterminer l'équation réduite de la tangente $T$ à $\\mathcal{C}$ au point d'abscisse $1$.
3. a) Vérifier que pour tout réel $x$, $x^3 - 3x + 2 = (x - 1)^2(x + 2)$.
   b) En déduire la position relative de $\\mathcal{C}$ et de $T$.
   c) $T$ recoupe-t-elle $\\mathcal{C}$ en un autre point ? Si oui, lequel ?`,
      solution: `**1.** $(a+h)^3 = a^3 + 3a^2h + 3ah^2 + h^3$. Pour $h \\neq 0$ :
$$\\frac{f(a+h) - f(a)}{h} = \\frac{3a^2h + 3ah^2 + h^3}{h} = 3a^2 + 3ah + h^2.$$
Quand $h \\to 0$, ce taux tend vers $3a^2$ : $f$ est dérivable en $a$ et $f'(a) = 3a^2$.

**2.** $f(1) = 1$, $f'(1) = 3$ : $T : y = 3(x - 1) + 1 = 3x - 2$.

**3. a)** $(x-1)^2(x+2) = (x^2 - 2x + 1)(x + 2) = x^3 + 2x^2 - 2x^2 - 4x + x + 2 = x^3 - 3x + 2$.

**b)** On étudie le signe de $f(x) - (3x - 2) = x^3 - 3x + 2 = (x-1)^2(x+2)$. Comme $(x-1)^2 \\geqslant 0$, ce signe est celui de $x + 2$ (sauf en $x = 1$ où il est nul) :
- sur $]-\\infty ; -2[$ : $\\mathcal{C}$ est en dessous de $T$ ;
- sur $]-2 ; +\\infty[$ : $\\mathcal{C}$ est au-dessus de $T$ (avec contact en $x = 1$).

**c)** La différence s'annule pour $x = 1$ (point de tangence) et pour $x = -2$. $f(-2) = -8$ (et $3 \\times (-2) - 2 = -8$) : $T$ recoupe $\\mathcal{C}$ au point $(-2 ; -8)$.` },
    { id: "1A2-ds-06", title: "Dérivable ou pas en zéro ?", difficulty: 3, points: 5,
      statement: `On étudie la dérivabilité en $0$ de deux fonctions définies sur $\\mathbb{R}$ : $g(x) = |x|$ et $f(x) = x|x|$.

1. a) Pour $h \\neq 0$, calculer le taux de variation de $g$ entre $0$ et $h$, en distinguant $h > 0$ et $h < 0$.
   b) La fonction $g$ est-elle dérivable en $0$ ? Interpréter graphiquement.
2. a) Pour $h \\neq 0$, montrer que le taux de variation de $f$ entre $0$ et $h$ vaut $|h|$.
   b) En déduire que $f$ est dérivable en $0$, donner $f'(0)$ et l'équation de la tangente à sa courbe à l'origine.`,
      solution: `**1. a)** $\\frac{g(h) - g(0)}{h} = \\frac{|h|}{h}$, qui vaut $\\frac{h}{h} = 1$ si $h > 0$ et $\\frac{-h}{h} = -1$ si $h < 0$.

**b)** Quand $h$ tend vers $0$, ce taux vaut $1$ « à droite » et $-1$ « à gauche » : il ne se rapproche pas d'un unique nombre. $g$ n'est donc **pas dérivable en $0$**. Graphiquement, la courbe de $g$ (un « V ») présente un point anguleux à l'origine : on ne peut pas y tracer de tangente.

**2. a)** $\\frac{f(h) - f(0)}{h} = \\frac{h|h| - 0}{h} = |h|$.

**b)** Quand $h \\to 0$, $|h| \\to 0$ : la limite existe et est finie. Donc $f$ est dérivable en $0$ et $f'(0) = 0$.
La tangente à l'origine a pour équation $y = f'(0)(x - 0) + f(0)$, soit $y = 0$ : c'est l'axe des abscisses.` },
    { id: "1A2-ds-07", title: "Vitesse moyenne et vitesse instantanée", difficulty: 4, points: 7,
      statement: `On lâche une bille sans vitesse initiale. On admet que la distance parcourue (en mètres) au bout de $t$ secondes est $d(t) = 5t^2$, pour $t \\in [0 ; 4]$.

1. Calculer la vitesse moyenne de la bille entre les instants $t = 0$ et $t = 4$.
2. Soit $a \\in [0 ; 4[$ et $h > 0$ petit. Montrer que la vitesse moyenne entre les instants $a$ et $a + h$ est $10a + 5h$.
3. La vitesse instantanée à l'instant $a$ est le nombre dérivé $d'(a)$. Déterminer $d'(a)$.
4. À quel instant la vitesse instantanée est-elle égale à $30$ m/s ? Convertir cette vitesse en km/h.
5. À quel instant la vitesse instantanée est-elle égale à la vitesse moyenne calculée à la question 1 ?`,
      solution: `**1.** $v_{\\text{moy}} = \\frac{d(4) - d(0)}{4 - 0} = \\frac{80 - 0}{4} = 20$ m/s.

**2.** $d(a+h) - d(a) = 5(a^2 + 2ah + h^2) - 5a^2 = 10ah + 5h^2$, donc la vitesse moyenne vaut
$$\\frac{d(a+h) - d(a)}{h} = \\frac{10ah + 5h^2}{h} = 10a + 5h.$$

**3.** Quand $h \\to 0$, $10a + 5h \\to 10a$ : $d'(a) = 10a$ (en m/s).

**4.** $10a = 30 \\iff a = 3$ : à l'instant $t = 3$ s. $30$ m/s $= 30 \\times 3{,}6 = 108$ km/h.

**5.** $10a = 20 \\iff a = 2$ : à $t = 2$ s, la vitesse instantanée égale la vitesse moyenne sur $[0 ; 4]$. Graphiquement, la tangente à la courbe de $d$ au point d'abscisse $2$ est parallèle à la corde joignant les points d'abscisses $0$ et $4$.` },
    { id: "1A2-ds-08", title: "Tangentes issues d'un point", difficulty: 4, points: 7,
      statement: `Soit $\\mathcal{P}$ la parabole d'équation $y = x^2$ dans un repère. On admet que la fonction carré est dérivable sur $\\mathbb{R}$, de nombre dérivé $2a$ en tout réel $a$.

1. Montrer que la tangente $T_a$ à $\\mathcal{P}$ au point d'abscisse $a$ a pour équation $y = 2ax - a^2$.
2. Déterminer les tangentes à $\\mathcal{P}$ qui passent par le point $P(1 ; -3)$. Donner leurs équations.
3. Existe-t-il une tangente à $\\mathcal{P}$ de coefficient directeur $4$ ? Si oui, donner son équation.
4. Montrer qu'aucune tangente à $\\mathcal{P}$ ne passe par le point $Q(0 ; 1)$. Interpréter.`,
      solution: `**1.** $T_a : y = 2a(x - a) + a^2 = 2ax - 2a^2 + a^2 = 2ax - a^2$.

**2.** $P \\in T_a \\iff -3 = 2a \\times 1 - a^2 \\iff a^2 - 2a - 3 = 0$.
$\\Delta = 4 + 12 = 16$, d'où $a = \\frac{2 - 4}{2} = -1$ ou $a = \\frac{2 + 4}{2} = 3$.
- $a = -1$ : $T_{-1} : y = -2x - 1$ (vérification : $-2 - 1 = -3$).
- $a = 3$ : $T_3 : y = 6x - 9$ (vérification : $6 - 9 = -3$).
Deux tangentes passent par $P$.

**3.** Il faut $2a = 4$, soit $a = 2$ : $T_2 : y = 4x - 4$. Elle touche $\\mathcal{P}$ au point $(2 ; 4)$.

**4.** $Q \\in T_a \\iff 1 = 0 - a^2 \\iff a^2 = -1$, impossible dans $\\mathbb{R}$. Aucune tangente ne passe par $Q$.
Interprétation : $Q$ est « à l'intérieur » de la parabole ($1 > 0^2$) ; toute tangente à $\\mathcal{P}$ reste sous la courbe (car $x^2 - (2ax - a^2) = (x - a)^2 \\geqslant 0$), elle ne peut donc pas atteindre un point situé au-dessus de $\\mathcal{P}$.` }
  ],
  "1A3": [
    { id: "1A3-ds-01", title: "Calculs de dérivées", difficulty: 1, points: 4,
      statement: `Calculer la fonction dérivée de chacune des fonctions suivantes, sur l'intervalle indiqué (on admet qu'elles y sont dérivables). Donner le résultat sous forme simplifiée.

1. $f(x) = 3x^4 - 5x^2 + 2x - 7$ sur $\\mathbb{R}$.
2. $g(x) = \\frac{4}{x} + 2\\sqrt{x}$ sur $]0 ; +\\infty[$.
3. $h(x) = (2x + 1)(x^2 - 3)$ sur $\\mathbb{R}$.
4. $k(x) = \\frac{3x - 1}{x + 2}$ sur $]-2 ; +\\infty[$.`,
      solution: `**1.** $f'(x) = 3 \\times 4x^3 - 5 \\times 2x + 2 = 12x^3 - 10x + 2$.

**2.** $\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}$ et $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$, donc $g'(x) = -\\frac{4}{x^2} + \\frac{2}{2\\sqrt{x}} = -\\frac{4}{x^2} + \\frac{1}{\\sqrt{x}}$.

**3.** Produit $uv$ avec $u(x) = 2x + 1$, $u'(x) = 2$, $v(x) = x^2 - 3$, $v'(x) = 2x$ :
$h'(x) = u'v + uv' = 2(x^2 - 3) + (2x + 1) \\times 2x = 2x^2 - 6 + 4x^2 + 2x = 6x^2 + 2x - 6$.

**4.** Quotient $\\frac{u}{v}$ avec $u(x) = 3x - 1$, $u'(x) = 3$, $v(x) = x + 2$, $v'(x) = 1$ :
$$k'(x) = \\frac{u'v - uv'}{v^2} = \\frac{3(x+2) - (3x - 1)}{(x+2)^2} = \\frac{7}{(x+2)^2}.$$` },
    { id: "1A3-ds-02", title: "Variations d'une fonction polynôme de degré 3", difficulty: 1, points: 4,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^3 - 3x + 1$.

1. Calculer $f'(x)$ et montrer que $f'(x) = 3(x - 1)(x + 1)$.
2. Étudier le signe de $f'(x)$ et dresser le tableau de variations de $f$ sur $\\mathbb{R}$.
3. Préciser les extremums locaux de $f$ et les valeurs de $x$ en lesquelles ils sont atteints.`,
      solution: `**1.** $f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$.

**2.** $f'(x)$ est un trinôme de racines $-1$ et $1$, de coefficient dominant $3 > 0$ : il est positif à l'extérieur des racines et négatif entre elles.
$f(-1) = -1 + 3 + 1 = 3$ et $f(1) = 1 - 3 + 1 = -1$.

| $x$ | $-\\infty$ | | $-1$ | | $1$ | | $+\\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | | $\\nearrow$ | $3$ | $\\searrow$ | $-1$ | $\\nearrow$ | |

**3.** $f$ admet un maximum local égal à $3$, atteint en $x = -1$, et un minimum local égal à $-1$, atteint en $x = 1$ (la dérivée s'annule en changeant de signe en ces points).` },
    { id: "1A3-ds-03", title: "Étude d'une fonction rationnelle", difficulty: 2, points: 5,
      statement: `Soit $f$ la fonction définie sur $]1 ; +\\infty[$ par $f(x) = \\frac{x^2 + 3}{x - 1}$.

1. Montrer que pour tout $x > 1$, $f'(x) = \\frac{x^2 - 2x - 3}{(x-1)^2}$.
2. Factoriser $x^2 - 2x - 3$, puis dresser le tableau de variations de $f$ sur $]1 ; +\\infty[$.
3. En déduire que pour tout réel $x > 1$, $x^2 + 3 \\geqslant 6(x - 1)$.`,
      solution: `**1.** Avec $u(x) = x^2 + 3$, $u'(x) = 2x$, $v(x) = x - 1$, $v'(x) = 1$ :
$$f'(x) = \\frac{2x(x - 1) - (x^2 + 3)}{(x-1)^2} = \\frac{2x^2 - 2x - x^2 - 3}{(x-1)^2} = \\frac{x^2 - 2x - 3}{(x-1)^2}.$$

**2.** $\\Delta = 4 + 12 = 16$, racines $\\frac{2 - 4}{2} = -1$ et $\\frac{2 + 4}{2} = 3$ : $x^2 - 2x - 3 = (x+1)(x-3)$.
Sur $]1 ; +\\infty[$, $(x-1)^2 > 0$ et $x + 1 > 0$, donc $f'(x)$ a le signe de $x - 3$.
$f(3) = \\frac{9 + 3}{2} = 6$.

| $x$ | $1$ | | $3$ | | $+\\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | $\\searrow$ | $6$ | $\\nearrow$ | |

**3.** D'après le tableau, $6$ est le minimum de $f$ sur $]1 ; +\\infty[$ : pour tout $x > 1$, $\\frac{x^2 + 3}{x - 1} \\geqslant 6$. En multipliant par $x - 1 > 0$ (le sens de l'inégalité est conservé) : $x^2 + 3 \\geqslant 6(x - 1)$.` },
    { id: "1A3-ds-04", title: "Un produit avec une racine carrée", difficulty: 2, points: 5,
      statement: `Soit $f$ la fonction définie sur $[0 ; +\\infty[$ par $f(x) = (x - 4)\\sqrt{x}$. On admet que $f$ est dérivable sur $]0 ; +\\infty[$.

1. Montrer que pour tout $x > 0$, $f'(x) = \\frac{3x - 4}{2\\sqrt{x}}$.
2. Dresser le tableau de variations de $f$ sur $[0 ; +\\infty[$.
3. Déterminer la valeur exacte du minimum de $f$, puis une valeur approchée à $10^{-2}$ près.
4. Résoudre l'équation $f(x) = 0$.`,
      solution: `**1.** Produit $uv$ avec $u(x) = x - 4$, $u'(x) = 1$, $v(x) = \\sqrt{x}$, $v'(x) = \\frac{1}{2\\sqrt{x}}$ :
$$f'(x) = \\sqrt{x} + \\frac{x - 4}{2\\sqrt{x}} = \\frac{2x + x - 4}{2\\sqrt{x}} = \\frac{3x - 4}{2\\sqrt{x}}.$$

**2.** Pour $x > 0$, $2\\sqrt{x} > 0$ : $f'(x)$ a le signe de $3x - 4$, négatif si $x < \\frac{4}{3}$, positif si $x > \\frac{4}{3}$.
$f(0) = 0$.

| $x$ | $0$ | | $\\frac{4}{3}$ | | $+\\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | $0$ | $\\searrow$ | $-\\frac{16\\sqrt{3}}{9}$ | $\\nearrow$ | |

**3.** $f\\left(\\frac{4}{3}\\right) = \\left(\\frac{4}{3} - 4\\right)\\sqrt{\\frac{4}{3}} = -\\frac{8}{3} \\times \\frac{2}{\\sqrt{3}} = -\\frac{16}{3\\sqrt{3}} = -\\frac{16\\sqrt{3}}{9} \\approx -3{,}08$.

**4.** $f(x) = 0 \\iff x - 4 = 0$ ou $\\sqrt{x} = 0 \\iff x = 4$ ou $x = 0$. $\\mathcal{S} = \\{0 ; 4\\}$.` },
    { id: "1A3-ds-05", title: "Coût, recette et bénéfice", difficulty: 3, points: 6,
      statement: `Une entreprise fabrique $q$ centaines d'objets par jour, avec $q \\in [0 ; 8]$. Le coût de production, en milliers d'euros, est $C(q) = q^3 - 9q^2 + 30q + 10$. Chaque centaine d'objets est vendue $15$ milliers d'euros.

1. Montrer que la fonction coût $C$ est strictement croissante sur $[0 ; 8]$. (On pourra écrire $C'(q)$ sous forme canonique.)
2. Montrer que le bénéfice est $B(q) = -q^3 + 9q^2 - 15q - 10$.
3. Étudier les variations de $B$ sur $[0 ; 8]$.
4. Quelle quantité faut-il produire pour maximiser le bénéfice ? Quel est ce bénéfice maximal ?`,
      solution: `**1.** $C'(q) = 3q^2 - 18q + 30 = 3(q^2 - 6q + 10) = 3\\left[(q - 3)^2 + 1\\right]$.
Pour tout $q$, $(q-3)^2 + 1 \\geqslant 1 > 0$, donc $C'(q) > 0$ : $C$ est strictement croissante sur $[0 ; 8]$ (produire plus coûte toujours plus).

**2.** La recette est $R(q) = 15q$. $B(q) = R(q) - C(q) = 15q - q^3 + 9q^2 - 30q - 10 = -q^3 + 9q^2 - 15q - 10$.

**3.** $B'(q) = -3q^2 + 18q - 15 = -3(q^2 - 6q + 5) = -3(q - 1)(q - 5)$ (racines $1$ et $5$ de $q^2 - 6q + 5$).
$B'(q)$ est un trinôme de coefficient dominant $-3 < 0$ : négatif à l'extérieur de $[1 ; 5]$, positif entre $1$ et $5$.
$B(0) = -10$ ; $B(1) = -1 + 9 - 15 - 10 = -17$ ; $B(5) = -125 + 225 - 75 - 10 = 15$ ; $B(8) = -512 + 576 - 120 - 10 = -66$.

| $q$ | $0$ | | $1$ | | $5$ | | $8$ |
|---|---|---|---|---|---|---|---|
| $B'(q)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $B(q)$ | $-10$ | $\\searrow$ | $-17$ | $\\nearrow$ | $15$ | $\\searrow$ | $-66$ |

**4.** Le maximum de $B$ sur $[0 ; 8]$ est $15$ (supérieur à $B(0) = -10$), atteint pour $q = 5$. Il faut produire $500$ objets par jour ; le bénéfice maximal est alors de $15\\,000$ €.` },
    { id: "1A3-ds-06", title: "Démontrer une inégalité par une étude de fonction", difficulty: 3, points: 6,
      statement: `On veut démontrer que pour tout réel $x \\geqslant 0$, $\\sqrt{x} \\leqslant \\frac{x + 1}{2}$.

1. On pose $g(x) = \\frac{x+1}{2} - \\sqrt{x}$ pour $x \\geqslant 0$. Montrer que pour $x > 0$, $g'(x) = \\frac{\\sqrt{x} - 1}{2\\sqrt{x}}$.
2. Étudier les variations de $g$ sur $[0 ; +\\infty[$ et en déduire l'inégalité annoncée. Dans quel cas a-t-on égalité ?
3. Interpréter graphiquement ce résultat à l'aide de la tangente à la courbe de la fonction racine carrée au point d'abscisse $1$.
4. Application : soient $a$ et $b$ deux réels strictement positifs. En choisissant $x = \\frac{a}{b}$, démontrer que $\\sqrt{ab} \\leqslant \\frac{a + b}{2}$.`,
      solution: `**1.** $g'(x) = \\frac{1}{2} - \\frac{1}{2\\sqrt{x}} = \\frac{\\sqrt{x}}{2\\sqrt{x}} - \\frac{1}{2\\sqrt{x}} = \\frac{\\sqrt{x} - 1}{2\\sqrt{x}}$.

**2.** Pour $x > 0$, $2\\sqrt{x} > 0$, donc $g'(x)$ a le signe de $\\sqrt{x} - 1$ : négatif sur $]0 ; 1[$, nul en $1$, positif sur $]1 ; +\\infty[$ (la fonction racine est croissante et $\\sqrt{1} = 1$).
$g$ est décroissante sur $[0 ; 1]$ et croissante sur $[1 ; +\\infty[$ : elle admet un minimum en $1$, égal à $g(1) = 1 - 1 = 0$.
Donc pour tout $x \\geqslant 0$, $g(x) \\geqslant 0$, c'est-à-dire $\\sqrt{x} \\leqslant \\frac{x+1}{2}$, avec égalité si et seulement si $x = 1$.

**3.** Pour $f(x) = \\sqrt{x}$ : $f(1) = 1$ et $f'(1) = \\frac{1}{2}$, donc la tangente en $1$ a pour équation $y = \\frac{1}{2}(x - 1) + 1 = \\frac{x + 1}{2}$. L'inégalité signifie que la courbe de la fonction racine carrée est **en dessous de sa tangente** au point d'abscisse $1$, avec un seul point de contact.

**4.** Avec $x = \\frac{a}{b} > 0$ : $\\sqrt{\\frac{a}{b}} \\leqslant \\frac{\\frac{a}{b} + 1}{2}$. En multipliant par $b > 0$ et en utilisant $b\\sqrt{\\frac{a}{b}} = \\sqrt{b^2 \\times \\frac{a}{b}} = \\sqrt{ab}$ :
$$\\sqrt{ab} \\leqslant \\frac{a + b}{2}.$$
(La moyenne géométrique de deux réels positifs est inférieure à leur moyenne arithmétique.)` },
    { id: "1A3-ds-07", title: "La boîte de volume maximal", difficulty: 4, points: 7,
      statement: `On dispose d'une feuille de carton carrée de $30$ cm de côté. On découpe à chaque coin un carré de côté $x$ cm, puis on relève les bords pour obtenir une boîte sans couvercle.

1. Préciser les valeurs possibles de $x$ et montrer que le volume de la boîte, en cm³, est $V(x) = x(30 - 2x)^2$.
2. Montrer que $V'(x) = (30 - 2x)(30 - 6x)$.
3. Étudier les variations de $V$ et déterminer la valeur de $x$ pour laquelle le volume est maximal. Quel est ce volume ?
4. Le fabricant veut une boîte d'au moins $1\\,500$ cm³. À l'aide de la calculatrice et de la question 3, déterminer les valeurs entières de $x$ qui conviennent.`,
      solution: `**1.** Il faut $x > 0$ et $30 - 2x > 0$, soit $x \\in \\,]0 ; 15[$. Le fond est un carré de côté $30 - 2x$ et la hauteur vaut $x$ : $V(x) = x(30 - 2x)^2$.

**2.** Produit $uv$ avec $u(x) = x$, $v(x) = (30 - 2x)^2 = 900 - 120x + 4x^2$, $v'(x) = -120 + 8x = -4(30 - 2x)$ :
$$V'(x) = (30 - 2x)^2 + x \\times (-4)(30 - 2x) = (30 - 2x)(30 - 2x - 4x) = (30 - 2x)(30 - 6x).$$

**3.** Sur $]0 ; 15[$, $30 - 2x > 0$, donc $V'(x)$ a le signe de $30 - 6x$ : positif si $x < 5$, négatif si $x > 5$.
$V$ est croissante sur $]0 ; 5]$ et décroissante sur $[5 ; 15[$. Le volume est maximal pour $x = 5$ cm : $V(5) = 5 \\times 20^2 = 2\\,000$ cm³.

**4.** On calcule : $V(1) = 784$, $V(2) = 1\\,352$, $V(3) = 1\\,728$, … , $V(8) = 1\\,568$, $V(9) = 1\\,296$.
Comme $V$ croît sur $]0 ; 5]$ et décroît sur $[5 ; 15[$, les valeurs entières de $x$ telles que $V(x) \\geqslant 1\\,500$ sont $x \\in \\{3 ; 4 ; 5 ; 6 ; 7 ; 8\\}$ ($V(4) = 1\\,936$, $V(6) = 1\\,944$, $V(7) = 1\\,792$).` },
    { id: "1A3-ds-08", title: "Retrouver une fonction à partir de ses tangentes", difficulty: 4, points: 7,
      statement: `On cherche une fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = x^3 + ax^2 + bx + c$, où $a$, $b$, $c$ sont des réels, telle que sa courbe $\\mathcal{C}$ vérifie :
- $\\mathcal{C}$ passe par le point $A(0 ; 2)$ ;
- la tangente à $\\mathcal{C}$ en $A$ a pour coefficient directeur $-9$ ;
- $\\mathcal{C}$ admet une tangente horizontale au point d'abscisse $1$.

1. Traduire ces trois conditions par des équations, puis déterminer $a$, $b$ et $c$.
2. Dresser le tableau de variations de $f$ sur $\\mathbb{R}$ et préciser ses extremums locaux.
3. Déterminer l'équation de la tangente à $\\mathcal{C}$ au point d'abscisse $-1$.
4. Existe-t-il d'autres points de $\\mathcal{C}$ où la tangente est horizontale ?`,
      solution: `**1.** $f'(x) = 3x^2 + 2ax + b$.
- $A \\in \\mathcal{C}$ : $f(0) = 2 \\iff c = 2$.
- $f'(0) = -9 \\iff b = -9$.
- Tangente horizontale en $1$ : $f'(1) = 0 \\iff 3 + 2a + b = 0 \\iff 2a = 6 \\iff a = 3$.

Donc $f(x) = x^3 + 3x^2 - 9x + 2$.

**2.** $f'(x) = 3x^2 + 6x - 9 = 3(x^2 + 2x - 3) = 3(x - 1)(x + 3)$, positif à l'extérieur de $[-3 ; 1]$ et négatif entre $-3$ et $1$.
$f(-3) = -27 + 27 + 27 + 2 = 29$ ; $f(1) = 1 + 3 - 9 + 2 = -3$.

| $x$ | $-\\infty$ | | $-3$ | | $1$ | | $+\\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | | $\\nearrow$ | $29$ | $\\searrow$ | $-3$ | $\\nearrow$ | |

Maximum local $29$ en $x = -3$ ; minimum local $-3$ en $x = 1$.

**3.** $f(-1) = -1 + 3 + 9 + 2 = 13$ et $f'(-1) = 3 - 6 - 9 = -12$.
Tangente : $y = -12(x + 1) + 13 = -12x + 1$.

**4.** Une tangente horizontale correspond à $f'(x) = 0$, soit $x = 1$ ou $x = -3$. Il y a donc un autre point : $(-3 ; 29)$.` }
  ],
  "1A4": [
    { id: "1A4-ds-01", title: "Règles de calcul sur l'exponentielle", difficulty: 1, points: 4,
      statement: `1. Écrire chacun des nombres suivants sous la forme $e^k$ avec $k$ réel :
 a) $A = \\frac{e^3 \\times e^{-5}}{e^{-4}}$  b) $B = \\left(e^{2}\\right)^{3} \\times e^{-1}$  c) $C = \\frac{e^{x+1}}{e^{x-1}}$ (pour $x$ réel)
2. Simplifier, pour tout réel $x$ : $D(x) = \\left(e^x\\right)^3 \\times e^{-2x}$ et $E(x) = \\left(e^{2x} + 1\\right)\\left(e^{2x} - 1\\right)$.
3. Montrer que pour tout réel $x$, $e^{-x} - e^{-2x} = e^{-2x}\\left(e^x - 1\\right)$.`,
      solution: `**1. a)** $A = \\frac{e^{3 + (-5)}}{e^{-4}} = \\frac{e^{-2}}{e^{-4}} = e^{-2 - (-4)} = e^{2}$.

**b)** $B = e^{2 \\times 3} \\times e^{-1} = e^{6} \\times e^{-1} = e^{5}$.

**c)** $C = e^{(x + 1) - (x - 1)} = e^{2}$ (indépendant de $x$).

**2.** $D(x) = e^{3x} \\times e^{-2x} = e^{3x - 2x} = e^{x}$.
$E(x)$ est de la forme $(a + b)(a - b) = a^2 - b^2$ : $E(x) = \\left(e^{2x}\\right)^2 - 1 = e^{4x} - 1$.

**3.** $e^{-2x}\\left(e^x - 1\\right) = e^{-2x} \\times e^{x} - e^{-2x} = e^{-2x + x} - e^{-2x} = e^{-x} - e^{-2x}$.` },
    { id: "1A4-ds-02", title: "Équations et inéquations exponentielles", difficulty: 1, points: 4,
      statement: `On rappelle que pour tous réels $a$ et $b$ : $e^a = e^b \\iff a = b$ et $e^a < e^b \\iff a < b$.

Résoudre dans $\\mathbb{R}$ :

1. $e^{2x - 1} = e^{x + 3}$
2. $e^{x^2} = e^{4x - 3}$
3. $e^{3x} > e^{-x + 8}$
4. $e^{x} \\times e^{x + 2} \\leqslant 1$`,
      solution: `**1.** $e^{2x - 1} = e^{x + 3} \\iff 2x - 1 = x + 3 \\iff x = 4$. $\\mathcal{S} = \\{4\\}$.

**2.** $e^{x^2} = e^{4x - 3} \\iff x^2 = 4x - 3 \\iff x^2 - 4x + 3 = 0$. $\\Delta = 16 - 12 = 4$, racines $\\frac{4 - 2}{2} = 1$ et $\\frac{4 + 2}{2} = 3$. $\\mathcal{S} = \\{1 ; 3\\}$.

**3.** La fonction exponentielle est strictement croissante : $e^{3x} > e^{-x + 8} \\iff 3x > -x + 8 \\iff 4x > 8 \\iff x > 2$. $\\mathcal{S} = \\,]2 ; +\\infty[$.

**4.** $e^{x} \\times e^{x + 2} = e^{2x + 2}$ et $1 = e^0$, donc l'inéquation équivaut à $2x + 2 \\leqslant 0 \\iff x \\leqslant -1$. $\\mathcal{S} = \\,]-\\infty ; -1]$.` },
    { id: "1A4-ds-03", title: "Dérivées avec l'exponentielle", difficulty: 2, points: 5,
      statement: `Calculer la dérivée de chacune des fonctions suivantes (on admet qu'elles sont dérivables sur l'intervalle indiqué) et l'écrire sous forme factorisée.

1. $f(x) = (2x - 1)e^{x}$ sur $\\mathbb{R}$.
2. $g(x) = e^{-3x + 1}$ sur $\\mathbb{R}$.
3. $h(x) = \\frac{e^{x}}{x + 1}$ sur $]-1 ; +\\infty[$.
4. $k(x) = x^2 e^{-x}$ sur $\\mathbb{R}$. En déduire le signe de $k'(x)$ selon les valeurs de $x$.`,
      solution: `**1.** $f'(x) = 2e^{x} + (2x - 1)e^{x} = (2x + 1)e^{x}$.

**2.** On utilise $\\left(e^{ax + b}\\right)' = a\\,e^{ax + b}$ : $g'(x) = -3e^{-3x + 1}$.

**3.** $h'(x) = \\frac{e^{x}(x + 1) - e^{x} \\times 1}{(x+1)^2} = \\frac{x\\,e^{x}}{(x + 1)^2}$.

**4.** $\\left(e^{-x}\\right)' = -e^{-x}$, donc $k'(x) = 2x\\,e^{-x} + x^2 \\times (-e^{-x}) = x(2 - x)e^{-x}$.
Comme $e^{-x} > 0$, $k'(x)$ a le signe du trinôme $x(2 - x)$, de racines $0$ et $2$ et de coefficient dominant $-1$ : $k'(x) < 0$ sur $]-\\infty ; 0[$ et sur $]2 ; +\\infty[$, $k'(x) > 0$ sur $]0 ; 2[$, $k'(0) = k'(2) = 0$.` },
    { id: "1A4-ds-04", title: "Étude de (x − 2)eˣ", difficulty: 2, points: 5,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = (x - 2)e^{x}$ et $\\mathcal{C}$ sa courbe.

1. Étudier le signe de $f(x)$ selon les valeurs de $x$.
2. Montrer que $f'(x) = (x - 1)e^{x}$ et dresser le tableau de variations de $f$ (sans les limites).
3. Déterminer l'équation de la tangente à $\\mathcal{C}$ au point d'abscisse $0$.
4. Justifier que pour tout réel $x$, $f(x) \\geqslant -e$.`,
      solution: `**1.** Pour tout réel $x$, $e^{x} > 0$ : $f(x)$ a le signe de $x - 2$. $f(x) < 0$ si $x < 2$, $f(2) = 0$, $f(x) > 0$ si $x > 2$.

**2.** $f'(x) = 1 \\times e^{x} + (x - 2)e^{x} = (x - 1)e^{x}$, du signe de $x - 1$.
$f(1) = (1 - 2)e^{1} = -e$.

| $x$ | $-\\infty$ | | $1$ | | $+\\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | $\\searrow$ | $-e$ | $\\nearrow$ | |

**3.** $f(0) = -2$ et $f'(0) = (0 - 1)e^0 = -1$ : $y = -1(x - 0) - 2$, soit $y = -x - 2$.

**4.** D'après le tableau, $f$ admet un minimum global sur $\\mathbb{R}$ en $x = 1$, égal à $-e$. Donc pour tout réel $x$, $f(x) \\geqslant -e$.` },
    { id: "1A4-ds-05", title: "Refroidissement d'une tasse de thé", difficulty: 3, points: 6,
      statement: `Une tasse de thé est servie à $90$ °C dans une pièce à $20$ °C. Sa température, en °C, au bout de $t$ minutes est modélisée par $T(t) = 20 + 70e^{-0{,}1t}$, pour $t \\geqslant 0$.

1. Vérifier que $T(0) = 90$ et calculer la température au bout de $10$ minutes (arrondie au dixième).
2. Calculer $T'(t)$ et en déduire le sens de variation de $T$. Interpréter.
3. Justifier que la température reste toujours strictement supérieure à $20$ °C.
4. On estime que le thé est buvable quand sa température est inférieure à $40$ °C. À l'aide de la calculatrice (tableau de valeurs), déterminer au bout de combien de minutes entières le thé devient buvable.`,
      solution: `**1.** $T(0) = 20 + 70e^{0} = 20 + 70 = 90$ °C. $T(10) = 20 + 70e^{-1} \\approx 45{,}8$ °C.

**2.** $\\left(e^{-0{,}1t}\\right)' = -0{,}1e^{-0{,}1t}$, donc $T'(t) = 70 \\times (-0{,}1)e^{-0{,}1t} = -7e^{-0{,}1t}$.
Comme $e^{-0{,}1t} > 0$, $T'(t) < 0$ : $T$ est strictement décroissante sur $[0 ; +\\infty[$. Le thé refroidit continuellement.

**3.** $70e^{-0{,}1t} > 0$ pour tout $t$, donc $T(t) > 20$ : la température du thé reste supérieure à celle de la pièce (elle s'en rapproche sans l'atteindre).

**4.** $T(12) = 20 + 70e^{-1{,}2} \\approx 41{,}1$ et $T(13) = 20 + 70e^{-1{,}3} \\approx 39{,}1$.
Comme $T$ est décroissante, $T(t) < 40$ pour tout $t \\geqslant 13$ et $T(t) > 40$ pour $t \\leqslant 12$. Le thé devient buvable au bout de $13$ minutes.` },
    { id: "1A4-ds-06", title: "Une fonction en e²ˣ", difficulty: 3, points: 6,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = e^{2x} - 2e^{x}$.

1. Montrer que $f'(x) = 2e^{x}\\left(e^{x} - 1\\right)$.
2. Étudier le signe de $e^{x} - 1$, puis dresser le tableau de variations de $f$.
3. En déduire que pour tout réel $x$, $e^{2x} + 1 \\geqslant 2e^{x}$. Retrouver ce résultat par une identité remarquable.
4. Résoudre l'équation $e^{2x} - 2e^{x} + 1 = 0$.`,
      solution: `**1.** $\\left(e^{2x}\\right)' = 2e^{2x}$, donc $f'(x) = 2e^{2x} - 2e^{x} = 2e^{x} \\times e^{x} - 2e^{x} = 2e^{x}\\left(e^{x} - 1\\right)$.

**2.** Par stricte croissance de l'exponentielle et $e^0 = 1$ : $e^{x} - 1 > 0 \\iff x > 0$, $e^x - 1 < 0 \\iff x < 0$.
Comme $2e^{x} > 0$, $f'(x)$ a le signe de $e^{x} - 1$. $f(0) = 1 - 2 = -1$.

| $x$ | $-\\infty$ | | $0$ | | $+\\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | $\\searrow$ | $-1$ | $\\nearrow$ | |

**3.** Le minimum de $f$ est $-1$ : pour tout $x$, $e^{2x} - 2e^{x} \\geqslant -1$, soit $e^{2x} + 1 \\geqslant 2e^{x}$.
Autre méthode : $e^{2x} - 2e^{x} + 1 = \\left(e^{x} - 1\\right)^2 \\geqslant 0$.

**4.** $e^{2x} - 2e^{x} + 1 = 0 \\iff \\left(e^{x} - 1\\right)^2 = 0 \\iff e^{x} = 1 \\iff x = 0$. $\\mathcal{S} = \\{0\\}$ (c'est le point où $f$ atteint son minimum $-1$).` },
    { id: "1A4-ds-07", title: "L'inégalité eˣ ≥ 1 + x et un encadrement", difficulty: 4, points: 7,
      statement: `1. Soit $g$ la fonction définie sur $\\mathbb{R}$ par $g(x) = e^{x} - x - 1$. Étudier les variations de $g$ et en déduire que pour tout réel $x$, $e^{x} \\geqslant 1 + x$.
2. Interpréter graphiquement ce résultat à l'aide d'une tangente à la courbe de la fonction exponentielle.
3. En appliquant l'inégalité à $-x$, montrer que pour tout réel $x < 1$, $e^{x} \\leqslant \\frac{1}{1 - x}$.
4. En déduire un encadrement de $e^{0{,}1}$, puis comparer avec la valeur donnée par la calculatrice.`,
      solution: `**1.** $g'(x) = e^{x} - 1$, positif si $x > 0$, négatif si $x < 0$ (stricte croissance de $\\exp$ et $e^0 = 1$).
$g$ est décroissante sur $]-\\infty ; 0]$ et croissante sur $[0 ; +\\infty[$ : son minimum est $g(0) = 1 - 0 - 1 = 0$.
Donc $g(x) \\geqslant 0$ pour tout $x$, c'est-à-dire $e^{x} \\geqslant 1 + x$.

**2.** La tangente à la courbe de $\\exp$ au point d'abscisse $0$ a pour équation $y = e^0(x - 0) + e^0 = x + 1$. La courbe de l'exponentielle est **au-dessus de cette tangente** sur $\\mathbb{R}$ (contact uniquement en $0$).

**3.** Pour tout réel $x$, en remplaçant $x$ par $-x$ : $e^{-x} \\geqslant 1 - x$.
Si $x < 1$, $1 - x > 0$ ; comme $e^{-x} = \\frac{1}{e^{x}}$, on a $\\frac{1}{e^x} \\geqslant 1 - x > 0$. La fonction inverse étant décroissante sur $]0 ; +\\infty[$ : $e^{x} \\leqslant \\frac{1}{1 - x}$.

**4.** Avec $x = 0{,}1$ : $1{,}1 \\leqslant e^{0{,}1} \\leqslant \\frac{1}{0{,}9} = \\frac{10}{9} \\approx 1{,}1111$.
La calculatrice donne $e^{0{,}1} \\approx 1{,}1052$, qui est bien dans cet encadrement d'amplitude environ $0{,}011$.` },
    { id: "1A4-ds-08", title: "Concentration d'un médicament", difficulty: 4, points: 7,
      statement: `La concentration d'un médicament dans le sang (en mg/L), $t$ heures après une prise, est modélisée par $C(t) = 5t\\,e^{-0{,}5t}$ pour $t \\in [0 ; 10]$.

1. Montrer que $C'(t) = (5 - 2{,}5t)e^{-0{,}5t}$.
2. Dresser le tableau de variations de $C$ sur $[0 ; 10]$. Au bout de combien de temps la concentration est-elle maximale ? Donner la valeur exacte, puis arrondie au centième, de cette concentration maximale.
3. Interpréter $C'(0)$ dans le contexte.
4. Le médicament est efficace lorsque la concentration est supérieure ou égale à $2$ mg/L. À l'aide d'un tableau de valeurs de pas $0{,}1$, déterminer un encadrement de la durée pendant laquelle le médicament est efficace.`,
      solution: `**1.** Produit $uv$ avec $u(t) = 5t$, $u'(t) = 5$, $v(t) = e^{-0{,}5t}$, $v'(t) = -0{,}5e^{-0{,}5t}$ :
$C'(t) = 5e^{-0{,}5t} + 5t \\times (-0{,}5)e^{-0{,}5t} = (5 - 2{,}5t)e^{-0{,}5t}$.

**2.** $e^{-0{,}5t} > 0$, donc $C'(t)$ a le signe de $5 - 2{,}5t$ : positif sur $[0 ; 2[$, nul en $2$, négatif sur $]2 ; 10]$.
$C(0) = 0$ ; $C(2) = 10e^{-1} = \\frac{10}{e} \\approx 3{,}68$ ; $C(10) = 50e^{-5} \\approx 0{,}34$.

| $t$ | $0$ | | $2$ | | $10$ |
|---|---|---|---|---|---|
| $C'(t)$ | | $+$ | $0$ | $-$ | |
| $C(t)$ | $0$ | $\\nearrow$ | $\\frac{10}{e}$ | $\\searrow$ | $50e^{-5}$ |

La concentration est maximale au bout de $2$ heures ; elle vaut alors $\\frac{10}{e} \\approx 3{,}68$ mg/L.

**3.** $C'(0) = 5$ : juste après la prise, la concentration augmente à la vitesse instantanée de $5$ mg/L par heure.

**4.** Tableau de valeurs (arrondies au millième) :
- $C(0{,}5) \\approx 1{,}947 < 2$ et $C(0{,}6) \\approx 2{,}222 \\geqslant 2$ ;
- $C(5{,}0) \\approx 2{,}052 \\geqslant 2$ et $C(5{,}1) \\approx 1{,}991 < 2$.

$C$ étant croissante sur $[0 ; 2]$ puis décroissante sur $[2 ; 10]$, l'ensemble des instants où $C(t) \\geqslant 2$ est un intervalle $[t_1 ; t_2]$ avec $0{,}5 < t_1 < 0{,}6$ et $5{,}0 < t_2 < 5{,}1$.
La durée d'efficacité $t_2 - t_1$ vérifie donc $5{,}0 - 0{,}6 < t_2 - t_1 < 5{,}1 - 0{,}5$, soit entre $4{,}4$ h et $4{,}6$ h environ.` }
  ],
  "1A5": [
    { id: "1A5-ds-01", title: "Suite définie explicitement", difficulty: 1, points: 4,
      statement: `Soit $(u_n)$ la suite définie pour tout entier naturel $n$ par $u_n = n^2 - 3n + 1$.

1. Calculer $u_0$, $u_1$, $u_2$ et $u_3$.
2. Exprimer $u_{n+1}$ en fonction de $n$ sous forme réduite.
3. Montrer que $u_{n+1} - u_n = 2n - 2$.
4. En déduire le sens de variation de la suite $(u_n)$ à partir du rang $1$.`,
      solution: `**1.** $u_0 = 1$ ; $u_1 = 1 - 3 + 1 = -1$ ; $u_2 = 4 - 6 + 1 = -1$ ; $u_3 = 9 - 9 + 1 = 1$.

**2.** $u_{n+1} = (n+1)^2 - 3(n+1) + 1 = n^2 + 2n + 1 - 3n - 3 + 1 = n^2 - n - 1$.

**3.** $u_{n+1} - u_n = (n^2 - n - 1) - (n^2 - 3n + 1) = 2n - 2$.

**4.** Pour $n \\geqslant 1$, $2n - 2 \\geqslant 0$, donc $u_{n+1} \\geqslant u_n$ : la suite est croissante à partir du rang $1$ (avec $u_2 = u_1$, puis strictement croissante dès le rang $2$). Elle n'est pas croissante dès le rang $0$ puisque $u_1 < u_0$.` },
    { id: "1A5-ds-02", title: "Suites définies par récurrence", difficulty: 1, points: 4,
      statement: `1. Soit $(u_n)$ définie par $u_0 = 3$ et, pour tout entier naturel $n$, $u_{n+1} = 3u_n - 4$.
 a) Calculer $u_1$, $u_2$ et $u_3$.
 b) Peut-on calculer directement $u_{10}$ sans calculer les termes précédents avec cette définition ? Expliquer.
2. Soit $(w_n)$ définie par $w_0 = 0$ et $w_{n+1} = w_n + 2n + 1$.
 a) Calculer $w_1$, $w_2$, $w_3$ et $w_4$.
 b) Conjecturer une expression de $w_n$ en fonction de $n$, puis vérifier que cette expression satisfait bien la relation de récurrence.`,
      solution: `**1. a)** $u_1 = 3 \\times 3 - 4 = 5$ ; $u_2 = 3 \\times 5 - 4 = 11$ ; $u_3 = 3 \\times 11 - 4 = 29$.

**b)** Non : la suite est définie par récurrence, chaque terme se calcule à partir du précédent. Pour obtenir $u_{10}$, il faut calculer de proche en proche $u_1, u_2, \\dots, u_9$ (ou utiliser un programme ou un tableur).

**2. a)** $w_1 = 0 + 2 \\times 0 + 1 = 1$ ; $w_2 = 1 + 2 \\times 1 + 1 = 4$ ; $w_3 = 4 + 2 \\times 2 + 1 = 9$ ; $w_4 = 9 + 2 \\times 3 + 1 = 16$.

**b)** On conjecture $w_n = n^2$. Vérification : $w_0 = 0^2 = 0$ et, si $w_n = n^2$, alors $w_n + 2n + 1 = n^2 + 2n + 1 = (n+1)^2$, ce qui est bien l'expression conjecturée au rang $n + 1$.` },
    { id: "1A5-ds-03", title: "Variations d'une suite homographique", difficulty: 2, points: 5,
      statement: `Soit $(u_n)$ la suite définie pour tout $n \\in \\mathbb{N}$ par $u_n = \\frac{2n + 1}{n + 3}$.

1. Calculer $u_0$, $u_1$ et $u_2$.
2. Montrer que pour tout $n \\in \\mathbb{N}$, $u_{n+1} - u_n = \\frac{5}{(n + 3)(n + 4)}$. En déduire le sens de variation de $(u_n)$.
3. Montrer que pour tout $n$, $u_n = 2 - \\frac{5}{n + 3}$. En déduire que $u_n < 2$.
4. Déterminer le plus petit entier $n$ tel que $u_n > 1{,}99$.`,
      solution: `**1.** $u_0 = \\frac{1}{3}$ ; $u_1 = \\frac{3}{4}$ ; $u_2 = \\frac{5}{5} = 1$.

**2.** $u_{n+1} = \\frac{2n + 3}{n + 4}$, donc
$$u_{n+1} - u_n = \\frac{(2n+3)(n+3) - (2n+1)(n+4)}{(n+3)(n+4)} = \\frac{(2n^2 + 9n + 9) - (2n^2 + 9n + 4)}{(n+3)(n+4)} = \\frac{5}{(n+3)(n+4)}.$$
Pour tout $n \\in \\mathbb{N}$, le dénominateur est strictement positif, donc $u_{n+1} - u_n > 0$ : la suite $(u_n)$ est strictement croissante.

**3.** $2 - \\frac{5}{n+3} = \\frac{2(n+3) - 5}{n + 3} = \\frac{2n + 1}{n + 3} = u_n$. Comme $\\frac{5}{n+3} > 0$, $u_n < 2$.

**4.** $u_n > 1{,}99 \\iff \\frac{5}{n + 3} < 0{,}01 \\iff n + 3 > 500$ (les deux membres étant positifs) $\\iff n > 497$.
Le plus petit entier est $n = 498$ (vérification : $u_{498} = 2 - \\frac{5}{501} \\approx 1{,}99002$ et $u_{497} = 2 - \\frac{5}{500} = 1{,}99$, qui n'est pas strictement supérieur).` },
    { id: "1A5-ds-04", title: "Deux méthodes pour le sens de variation", difficulty: 2, points: 5,
      statement: `1. Soit $(u_n)$ définie par $u_0 = -1$ et $u_{n+1} = u_n^2 + u_n + 1$ pour tout $n \\in \\mathbb{N}$.
 a) Calculer $u_1$, $u_2$ et $u_3$.
 b) Étudier le signe de $u_{n+1} - u_n$ et en déduire le sens de variation de $(u_n)$.
2. Soit $(v_n)$ définie pour $n \\geqslant 1$ par $v_n = f(n)$, où $f(x) = \\frac{x}{x^2 + 1}$.
 a) Montrer que $f'(x) = \\frac{1 - x^2}{(x^2 + 1)^2}$.
 b) En déduire le sens de variation de $f$ sur $[1 ; +\\infty[$, puis celui de $(v_n)$.`,
      solution: `**1. a)** $u_1 = 1 - 1 + 1 = 1$ ; $u_2 = 1 + 1 + 1 = 3$ ; $u_3 = 9 + 3 + 1 = 13$.

**b)** $u_{n+1} - u_n = u_n^2 + 1 > 0$ pour tout $n$ (un carré est positif). La suite $(u_n)$ est strictement croissante.

**2. a)** Quotient avec $u(x) = x$, $v(x) = x^2 + 1$ : $f'(x) = \\frac{1 \\times (x^2 + 1) - x \\times 2x}{(x^2 + 1)^2} = \\frac{1 - x^2}{(x^2 + 1)^2}$.

**b)** Pour $x \\geqslant 1$, $x^2 \\geqslant 1$ donc $1 - x^2 \\leqslant 0$ (nul seulement en $1$) : $f$ est décroissante sur $[1 ; +\\infty[$.
Pour $n \\geqslant 1$, $n < n + 1$ donc $f(n) \\geqslant f(n+1)$, soit $v_{n+1} \\leqslant v_n$ : $(v_n)$ est décroissante (et même strictement : $v_1 = \\frac{1}{2}$, $v_2 = \\frac{2}{5}$, $v_3 = \\frac{3}{10}$…).` },
    { id: "1A5-ds-05", title: "Suite récurrente et toile d'araignée", difficulty: 3, points: 6,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = 0{,}5x + 3$ et $(u_n)$ la suite définie par $u_0 = 0$ et $u_{n+1} = f(u_n)$.

1. Calculer $u_1$, $u_2$, $u_3$ et $u_4$.
2. Dans un repère, on trace la droite $\\mathcal{D}$ d'équation $y = f(x)$ et la droite $\\Delta$ d'équation $y = x$. Expliquer comment placer, sans calcul, les termes $u_1$, $u_2$, $u_3$ sur l'axe des abscisses (construction « en escalier »).
3. Déterminer les coordonnées du point d'intersection de $\\mathcal{D}$ et $\\Delta$. Quelle conjecture peut-on faire sur le comportement de $u_n$ quand $n$ devient grand ?
4. Montrer que pour tout $n$, $u_{n+1} - 6 = 0{,}5(u_n - 6)$ et $u_{n+1} - u_n = 0{,}5(6 - u_n)$.
5. On admet que $u_n < 6$ pour tout $n$. En déduire le sens de variation de $(u_n)$.`,
      solution: `**1.** $u_1 = 3$ ; $u_2 = 0{,}5 \\times 3 + 3 = 4{,}5$ ; $u_3 = 2{,}25 + 3 = 5{,}25$ ; $u_4 = 2{,}625 + 3 = 5{,}625$.

**2.** On place $u_0$ sur l'axe des abscisses ; on monte verticalement jusqu'à $\\mathcal{D}$ : le point obtenu a pour ordonnée $f(u_0) = u_1$. On se déplace horizontalement jusqu'à $\\Delta$ : le point atteint a pour abscisse $u_1$ (car sur $\\Delta$, $x = y$). On redescend sur l'axe des abscisses pour lire $u_1$, puis on recommence à partir de $u_1$ pour obtenir $u_2$, etc.

**3.** $0{,}5x + 3 = x \\iff 0{,}5x = 3 \\iff x = 6$ : le point d'intersection est $(6 ; 6)$.
L'escalier se resserre vers ce point : on conjecture que $u_n$ se rapproche de $6$ quand $n$ devient grand (et que la suite est croissante).

**4.** $u_{n+1} - 6 = 0{,}5u_n + 3 - 6 = 0{,}5u_n - 3 = 0{,}5(u_n - 6)$.
$u_{n+1} - u_n = 0{,}5u_n + 3 - u_n = 3 - 0{,}5u_n = 0{,}5(6 - u_n)$.

**5.** Si $u_n < 6$, alors $6 - u_n > 0$ et $u_{n+1} - u_n > 0$. La suite $(u_n)$ est donc strictement croissante.` },
    { id: "1A5-ds-06", title: "Une population de bactéries", difficulty: 3, points: 6,
      statement: `Une culture contient $1\\,000$ bactéries. Chaque heure, la population augmente de $20\\,\\%$, puis on prélève $100$ bactéries pour des analyses. On note $P_n$ le nombre de bactéries au bout de $n$ heures, donc $P_0 = 1\\,000$.

1. Justifier que $P_{n+1} = 1{,}2P_n - 100$ et calculer $P_1$, $P_2$, $P_3$.
2. Montrer que $P_{n+1} - P_n = 0{,}2P_n - 100$. On admet que $P_n > 500$ pour tout $n$ : en déduire le sens de variation de $(P_n)$.
3. On considère la fonction Python ci-dessous.
\`\`\`python
def seuil():
    n = 0
    P = 1000
    while P <= 2000:
        n = n + 1
        P = 1.2 * P - 100
    return n
\`\`\`
 a) Que représente la valeur renvoyée ?
 b) À l'aide de la calculatrice, déterminer cette valeur.`,
      solution: `**1.** Augmenter de $20\\,\\%$ revient à multiplier par $1{,}2$, puis on retire $100$ : $P_{n+1} = 1{,}2P_n - 100$.
$P_1 = 1\\,200 - 100 = 1\\,100$ ; $P_2 = 1\\,320 - 100 = 1\\,220$ ; $P_3 = 1\\,464 - 100 = 1\\,364$.

**2.** $P_{n+1} - P_n = 1{,}2P_n - 100 - P_n = 0{,}2P_n - 100$.
Si $P_n > 500$, alors $0{,}2P_n > 100$, donc $P_{n+1} - P_n > 0$ : la suite $(P_n)$ est strictement croissante.

**3. a)** La boucle s'arrête dès que $P > 2\\,000$ : la fonction renvoie le plus petit entier $n$ tel que $P_n > 2\\,000$, c'est-à-dire le nombre d'heures au bout duquel la population dépasse $2\\,000$ bactéries.

**b)** $P_4 = 1\\,536{,}8$ ; $P_5 \\approx 1\\,744{,}2$ ; $P_6 \\approx 1\\,993{,}0$ ; $P_7 \\approx 2\\,291{,}6$.
La fonction renvoie $7$ : la population dépasse $2\\,000$ bactéries au bout de $7$ heures.` },
    { id: "1A5-ds-07", title: "Sens de variation par quotient", difficulty: 4, points: 7,
      statement: `Soit $(u_n)$ la suite définie pour $n \\geqslant 1$ par $u_n = \\frac{n^2}{2^n}$.

1. Calculer $u_1$, $u_2$, $u_3$, $u_4$ et $u_5$ (valeurs exactes).
2. Justifier que $u_n > 0$ pour tout $n \\geqslant 1$ et montrer que $\\frac{u_{n+1}}{u_n} = \\frac{(n+1)^2}{2n^2}$.
3. Expliquer pourquoi, pour une suite à termes strictement positifs, $\\frac{u_{n+1}}{u_n} \\leqslant 1$ équivaut à $u_{n+1} \\leqslant u_n$.
4. Résoudre l'inéquation $(n+1)^2 \\leqslant 2n^2$ pour $n$ entier naturel non nul, puis en déduire le sens de variation de $(u_n)$ à partir d'un certain rang.
5. Quel est le plus grand terme de la suite ?`,
      solution: `**1.** $u_1 = \\frac{1}{2}$ ; $u_2 = \\frac{4}{4} = 1$ ; $u_3 = \\frac{9}{8}$ ; $u_4 = \\frac{16}{16} = 1$ ; $u_5 = \\frac{25}{32}$.

**2.** $n^2 > 0$ et $2^n > 0$, donc $u_n > 0$.
$$\\frac{u_{n+1}}{u_n} = \\frac{(n+1)^2}{2^{n+1}} \\times \\frac{2^n}{n^2} = \\frac{(n+1)^2}{2n^2}.$$

**3.** Comme $u_n > 0$, multiplier les deux membres de $\\frac{u_{n+1}}{u_n} \\leqslant 1$ par $u_n$ conserve le sens : on obtient $u_{n+1} \\leqslant u_n$, et réciproquement en divisant par $u_n > 0$.

**4.** $(n+1)^2 \\leqslant 2n^2 \\iff n^2 - 2n - 1 \\geqslant 0$. Les racines de $x^2 - 2x - 1$ sont $1 \\pm \\sqrt{2}$, soit environ $-0{,}41$ et $2{,}41$ ; le trinôme est positif à l'extérieur. Pour $n$ entier $\\geqslant 1$, cela donne $n \\geqslant 3$ (vérification : $n = 2$ : $9 > 8$ ; $n = 3$ : $16 \\leqslant 18$).
Donc pour $n \\geqslant 3$, $\\frac{u_{n+1}}{u_n} < 1$ (l'égalité n'a jamais lieu car $1 \\pm \\sqrt 2$ n'est pas entier) : la suite est strictement décroissante à partir du rang $3$.

**5.** Pour $n \\in \\{1 ; 2\\}$, le quotient est $> 1$ : $u_1 < u_2 < u_3$. Ensuite $u_3 > u_4 > u_5 > \\dots$
Le plus grand terme est $u_3 = \\frac{9}{8}$.` },
    { id: "1A5-ds-08", title: "Écart entre deux racines consécutives", difficulty: 4, points: 7,
      statement: `Soit $(u_n)$ la suite définie pour tout $n \\in \\mathbb{N}$ par $u_n = \\sqrt{n + 1} - \\sqrt{n}$.

1. Calculer $u_0$, $u_3$ et $u_8$ (valeurs exactes).
2. Montrer que pour tout $n$, $u_n = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}}$.
3. En déduire que $(u_n)$ est à termes strictement positifs et strictement décroissante.
4. Déterminer le plus petit entier $n$ tel que $u_n < 0{,}01$. On pourra encadrer $\\sqrt{n+1} + \\sqrt{n}$.
5. Interpréter le résultat : que peut-on dire de l'écart entre les racines carrées de deux entiers consécutifs lorsque ces entiers sont grands ?`,
      solution: `**1.** $u_0 = 1 - 0 = 1$ ; $u_3 = \\sqrt{4} - \\sqrt{3} = 2 - \\sqrt{3}$ ; $u_8 = \\sqrt{9} - \\sqrt{8} = 3 - 2\\sqrt{2}$.

**2.** Avec la quantité conjuguée :
$$u_n = \\frac{(\\sqrt{n+1} - \\sqrt{n})(\\sqrt{n+1} + \\sqrt{n})}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{(n+1) - n}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}}.$$

**3.** Le dénominateur $d_n = \\sqrt{n+1} + \\sqrt{n}$ est strictement positif, donc $u_n > 0$.
La fonction racine est strictement croissante, donc $\\sqrt{n+2} > \\sqrt{n+1}$ et $\\sqrt{n+1} > \\sqrt{n}$ : $d_{n+1} > d_n > 0$. La fonction inverse étant strictement décroissante sur $]0 ; +\\infty[$, $u_{n+1} = \\frac{1}{d_{n+1}} < \\frac{1}{d_n} = u_n$ : la suite est strictement décroissante.

**4.** $u_n < 0{,}01 \\iff \\sqrt{n+1} + \\sqrt{n} > 100$.
- Pour $n = 2\\,500$ : $\\sqrt{2\\,501} + 50 > 50 + 50 = 100$, donc $u_{2500} < 0{,}01$.
- Pour $n = 2\\,499$ : $\\sqrt{2\\,499} + \\sqrt{2\\,500} < 50 + 50 = 100$, donc $u_{2499} > 0{,}01$.

Comme $(u_n)$ est décroissante, $u_n > 0{,}01$ pour tout $n \\leqslant 2\\,499$ ; le plus petit entier cherché est $n = 2\\,500$.

**5.** L'écart $\\sqrt{n+1} - \\sqrt{n}$ diminue et devient aussi petit que l'on veut : au-delà de $2\\,500$, deux entiers consécutifs ont des racines carrées distantes de moins de $0{,}01$. Intuitivement, $u_n$ tend vers $0$.` }
  ],
  "1A6": [
    { id: "1A6-ds-01", title: "Une suite arithmétique", difficulty: 1, points: 4,
      statement: `Soit $(u_n)$ la suite arithmétique de premier terme $u_0 = 5$ et de raison $r = -3$.

1. Calculer $u_1$ et $u_2$, puis exprimer $u_n$ en fonction de $n$.
2. Calculer $u_{20}$.
3. Déterminer le rang $n$ pour lequel $u_n = -61$.
4. Calculer la somme $S = u_0 + u_1 + \\dots + u_{20}$.`,
      solution: `**1.** $u_1 = 5 - 3 = 2$ ; $u_2 = 2 - 3 = -1$. Pour une suite arithmétique, $u_n = u_0 + nr$, donc $u_n = 5 - 3n$.

**2.** $u_{20} = 5 - 60 = -55$.

**3.** $5 - 3n = -61 \\iff 3n = 66 \\iff n = 22$.

**4.** $S$ compte $21$ termes (de l'indice $0$ à l'indice $20$) :
$$S = \\text{nombre de termes} \\times \\frac{\\text{premier} + \\text{dernier}}{2} = 21 \\times \\frac{5 + (-55)}{2} = 21 \\times (-25) = -525.$$` },
    { id: "1A6-ds-02", title: "Reconnaître une suite géométrique", difficulty: 1, points: 4,
      statement: `1. Soit $(v_n)$ la suite géométrique de premier terme $v_0 = 3$ et de raison $q = 2$.
 a) Exprimer $v_n$ en fonction de $n$ et calculer $v_{10}$.
 b) Calculer $S = v_0 + v_1 + \\dots + v_9$.
2. Pour chacune des suites suivantes, dire si elle est arithmétique, géométrique ou ni l'une ni l'autre, en justifiant.
 a) $a_n = 5 \\times \\left(\\frac{1}{3}\\right)^n$  b) $b_n = 7 - 2n$  c) $c_n = n^2 + 1$`,
      solution: `**1. a)** $v_n = v_0 \\times q^n = 3 \\times 2^n$. $v_{10} = 3 \\times 1\\,024 = 3\\,072$.

**b)** Somme de $10$ termes consécutifs d'une suite géométrique de raison $q \\neq 1$ :
$$S = v_0 \\times \\frac{1 - q^{10}}{1 - q} = 3 \\times \\frac{1 - 1\\,024}{1 - 2} = 3 \\times 1\\,023 = 3\\,069.$$

**2. a)** $a_{n+1} = 5 \\times \\left(\\frac{1}{3}\\right)^{n+1} = \\frac{1}{3} a_n$ : géométrique de raison $\\frac{1}{3}$ et de premier terme $5$.

**b)** $b_{n+1} - b_n = 7 - 2(n+1) - (7 - 2n) = -2$, constante : arithmétique de raison $-2$.

**c)** $c_0 = 1$, $c_1 = 2$, $c_2 = 5$. $c_1 - c_0 = 1 \\neq c_2 - c_1 = 3$ : pas arithmétique. $\\frac{c_1}{c_0} = 2 \\neq \\frac{c_2}{c_1} = 2{,}5$ : pas géométrique. Ni l'une ni l'autre.` },
    { id: "1A6-ds-03", title: "Deux propositions de salaire", difficulty: 2, points: 5,
      statement: `Une entreprise propose à une nouvelle salariée deux contrats sur $10$ ans, avec un salaire mensuel de $1\\,800$ € la première année :
- **Contrat A** : le salaire mensuel augmente de $50$ € chaque année ;
- **Contrat B** : le salaire mensuel augmente de $2{,}5\\,\\%$ chaque année.

On note $a_n$ et $b_n$ les salaires mensuels de l'année $n + 1$ (ainsi $a_0 = b_0 = 1\\,800$).

1. Préciser la nature des suites $(a_n)$ et $(b_n)$, puis exprimer $a_n$ et $b_n$ en fonction de $n$.
2. Comparer les salaires mensuels de la dixième année (arrondis à l'euro).
3. Calculer, pour chaque contrat, la somme totale perçue sur les $10$ ans (arrondie à l'euro). Quel contrat est le plus avantageux sur cette durée ?`,
      solution: `**1.** $(a_n)$ est arithmétique de raison $50$ : $a_n = 1\\,800 + 50n$.
Augmenter de $2{,}5\\,\\%$ revient à multiplier par $1{,}025$ : $(b_n)$ est géométrique de raison $1{,}025$, $b_n = 1\\,800 \\times 1{,}025^n$.

**2.** La dixième année correspond à $n = 9$ : $a_9 = 1\\,800 + 450 = 2\\,250$ € et $b_9 = 1\\,800 \\times 1{,}025^9 \\approx 2\\,248$ €. Le contrat A donne un salaire légèrement supérieur la dixième année.

**3.** Chaque année compte $12$ mois.
- Contrat A : $a_0 + \\dots + a_9 = 10 \\times \\frac{1\\,800 + 2\\,250}{2} = 20\\,250$, soit $12 \\times 20\\,250 = 243\\,000$ €.
- Contrat B : $b_0 + \\dots + b_9 = 1\\,800 \\times \\frac{1{,}025^{10} - 1}{1{,}025 - 1} \\approx 20\\,166{,}1$, soit environ $241\\,993$ €.

Sur $10$ ans, le contrat A est le plus avantageux (environ $1\\,007$ € de plus). (Sur une durée plus longue, le contrat B finirait par l'emporter, car la croissance géométrique dépasse la croissance arithmétique.)` },
    { id: "1A6-ds-04", title: "Suite auxiliaire géométrique", difficulty: 2, points: 5,
      statement: `Soit $(u_n)$ la suite définie par $u_0 = 10$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = 0{,}5u_n + 2$. On pose $v_n = u_n - 4$.

1. Calculer $u_1$, $u_2$, puis $v_0$, $v_1$, $v_2$.
2. Montrer que $(v_n)$ est une suite géométrique dont on précisera la raison et le premier terme.
3. En déduire l'expression de $v_n$, puis de $u_n$, en fonction de $n$.
4. Conjecturer la limite de $(u_n)$ quand $n$ tend vers $+\\infty$.`,
      solution: `**1.** $u_1 = 5 + 2 = 7$ ; $u_2 = 3{,}5 + 2 = 5{,}5$. $v_0 = 6$ ; $v_1 = 3$ ; $v_2 = 1{,}5$.

**2.** $v_{n+1} = u_{n+1} - 4 = 0{,}5u_n + 2 - 4 = 0{,}5u_n - 2 = 0{,}5(u_n - 4) = 0{,}5v_n$.
$(v_n)$ est géométrique de raison $q = 0{,}5$ et de premier terme $v_0 = 6$.

**3.** $v_n = 6 \\times 0{,}5^n$ et $u_n = v_n + 4 = 4 + 6 \\times 0{,}5^n$.
(Vérification : $u_2 = 4 + 6 \\times 0{,}25 = 5{,}5$.)

**4.** Comme $0 < 0{,}5 < 1$, $0{,}5^n$ se rapproche de $0$ quand $n$ devient grand ; on conjecture que $u_n$ tend vers $4$.` },
    { id: "1A6-ds-05", title: "Sommes d'entiers", difficulty: 3, points: 6,
      statement: `1. Rappeler la formule donnant $1 + 2 + \\dots + n$ et calculer $S = 1 + 2 + \\dots + 100$.
2. Calculer $T = 51 + 52 + \\dots + 150$.
3. a) Montrer que la somme des $n$ premiers entiers impairs $1 + 3 + 5 + \\dots + (2n - 1)$ est égale à $n^2$.
   b) Combien vaut $1 + 3 + 5 + \\dots + 99$ ?
4. Déterminer le plus petit entier $n$ tel que $1 + 2 + \\dots + n > 1\\,000$.`,
      solution: `**1.** $1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$. $S = \\frac{100 \\times 101}{2} = 5\\,050$.

**2.** $T$ est la somme de $150 - 51 + 1 = 100$ termes consécutifs d'une suite arithmétique de raison $1$ : $T = 100 \\times \\frac{51 + 150}{2} = 100 \\times 100{,}5 = 10\\,050$.
(Autre méthode : $T = (1 + \\dots + 150) - (1 + \\dots + 50) = 11\\,325 - 1\\,275 = 10\\,050$.)

**3. a)** Les nombres $1, 3, \\dots, 2n - 1$ sont les $n$ premiers termes de la suite arithmétique de premier terme $1$ et de raison $2$. Leur somme vaut $n \\times \\frac{1 + (2n - 1)}{2} = n \\times n = n^2$.

**b)** $99 = 2n - 1$ pour $n = 50$ : la somme vaut $50^2 = 2\\,500$.

**4.** On cherche $n$ tel que $\\frac{n(n+1)}{2} > 1\\,000$, soit $n^2 + n - 2\\,000 > 0$. Les racines du trinôme sont $\\frac{-1 \\pm \\sqrt{8\\,001}}{2}$, la racine positive vaut environ $44{,}2$. Pour $n$ entier positif, il faut $n \\geqslant 45$.
Vérification : $\\frac{44 \\times 45}{2} = 990 \\leqslant 1\\,000$ et $\\frac{45 \\times 46}{2} = 1\\,035 > 1\\,000$. Le plus petit entier est $n = 45$.` },
    { id: "1A6-ds-06", title: "Trois nombres en progression", difficulty: 3, points: 6,
      statement: `1. Trois nombres sont les termes consécutifs d'une suite arithmétique. Leur somme est $15$ et leur produit est $80$. On les note $a - r$, $a$, $a + r$.
 a) Déterminer $a$.
 b) Déterminer les valeurs possibles de $r$, puis les trois nombres.
2. Trois nombres strictement positifs $b$, $c$, $d$ sont des termes consécutifs d'une suite géométrique.
 a) Justifier que $c^2 = bd$.
 b) Déterminer $x > 0$ pour que $x$, $x + 6$, $4x$ soient, dans cet ordre, des termes consécutifs d'une suite géométrique. Préciser la raison.`,
      solution: `**1. a)** $(a - r) + a + (a + r) = 3a = 15$, donc $a = 5$.

**b)** Produit : $(5 - r) \\times 5 \\times (5 + r) = 5(25 - r^2) = 80 \\iff 25 - r^2 = 16 \\iff r^2 = 9 \\iff r = 3$ ou $r = -3$.
Dans les deux cas, les trois nombres sont $2$, $5$ et $8$ (dans l'ordre croissant si $r = 3$, décroissant si $r = -3$).

**2. a)** Si $q$ est la raison, $c = bq$ et $d = cq = bq^2$, donc $bd = b^2q^2 = (bq)^2 = c^2$.

**b)** Il faut $(x + 6)^2 = x \\times 4x$, soit $x^2 + 12x + 36 = 4x^2 \\iff 3x^2 - 12x - 36 = 0 \\iff x^2 - 4x - 12 = 0$.
$\\Delta = 16 + 48 = 64$, racines $\\frac{4 - 8}{2} = -2$ et $\\frac{4 + 8}{2} = 6$. Comme $x > 0$, $x = 6$.
Les nombres sont $6$, $12$, $24$ : suite géométrique de raison $2$.
(La condition $c^2 = bd$ est aussi suffisante ici : pour des nombres strictement positifs, elle donne $\\frac{c}{b} = \\frac{d}{c}$.)` },
    { id: "1A6-ds-07", title: "Les rebonds d'une balle", difficulty: 4, points: 7,
      statement: `On lâche une balle d'une hauteur de $10$ m. À chaque rebond, elle remonte à $60\\,\\%$ de la hauteur d'où elle est tombée. On note $h_n$ la hauteur (en m) atteinte après le $n$-ième rebond, et $h_0 = 10$.

1. Montrer que $(h_n)$ est géométrique et exprimer $h_n$ en fonction de $n$.
2. Combien de rebonds dépassent une hauteur de $10$ cm ? Justifier à l'aide de la calculatrice.
3. On note $D_n$ la distance totale parcourue par la balle au moment où elle touche le sol pour la $n$-ième fois ($D_1 = 10$).
 a) Justifier que pour $n \\geqslant 2$, $D_n = 10 + 2(h_1 + h_2 + \\dots + h_{n-1})$.
 b) En déduire que $D_n = 10 + 30\\left(1 - 0{,}6^{\\,n-1}\\right)$, puis calculer $D_5$.
 c) La balle peut-elle parcourir plus de $40$ m ? Justifier.`,
      solution: `**1.** $h_{n+1} = 0{,}6h_n$ : $(h_n)$ est géométrique de raison $0{,}6$ et de premier terme $10$. $h_n = 10 \\times 0{,}6^n$.

**2.** $10$ cm $= 0{,}1$ m. $h_n > 0{,}1 \\iff 0{,}6^n > 0{,}01$. La suite $(0{,}6^n)$ est décroissante ; à la calculatrice $0{,}6^9 \\approx 0{,}0101 > 0{,}01$ et $0{,}6^{10} \\approx 0{,}0060 < 0{,}01$.
Les rebonds $1$ à $9$ dépassent $10$ cm : il y en a $9$.

**3. a)** La balle descend d'abord de $10$ m (premier contact). Entre deux contacts successifs avec le sol, après le $k$-ième rebond, elle monte de $h_k$ puis redescend de $h_k$. Au $n$-ième contact, elle a effectué les rebonds $1$ à $n - 1$ : $D_n = 10 + 2(h_1 + \\dots + h_{n-1})$.

**b)** $h_1 + \\dots + h_{n-1}$ est une somme de $n - 1$ termes géométriques de premier terme $h_1 = 6$ et de raison $0{,}6$ :
$$h_1 + \\dots + h_{n-1} = 6 \\times \\frac{1 - 0{,}6^{\\,n-1}}{1 - 0{,}6} = 15\\left(1 - 0{,}6^{\\,n-1}\\right).$$
Donc $D_n = 10 + 30\\left(1 - 0{,}6^{\\,n-1}\\right)$ (formule encore valable pour $n = 1$).
$D_5 = 10 + 30(1 - 0{,}6^4) = 10 + 30 \\times 0{,}8704 = 36{,}112$ m.

**c)** Pour tout $n$, $0{,}6^{\\,n-1} > 0$ donc $D_n < 10 + 30 = 40$. La balle ne parcourt jamais $40$ m ; comme $0{,}6^{\\,n-1}$ tend vers $0$, la distance totale se rapproche de $40$ m sans l'atteindre.` },
    { id: "1A6-ds-08", title: "Un placement avec versements annuels", difficulty: 4, points: 7,
      statement: `Le $1^{\\text{er}}$ janvier 2026, Léa place $1\\,000$ € sur un compte rémunéré à $3\\,\\%$ par an (intérêts composés). Chaque $31$ décembre, après le versement des intérêts, elle ajoute $100$ €. On note $C_n$ le capital au $1^{\\text{er}}$ janvier de l'année $2026 + n$ ; ainsi $C_0 = 1\\,000$.

1. Justifier que $C_{n+1} = 1{,}03C_n + 100$ et calculer $C_1$ et $C_2$.
2. La suite $(C_n)$ est-elle arithmétique ? géométrique ?
3. On pose $v_n = C_n + \\frac{10\\,000}{3}$. Montrer que $(v_n)$ est géométrique de raison $1{,}03$.
4. En déduire $C_n$ en fonction de $n$, puis le capital au $1^{\\text{er}}$ janvier 2036 (arrondi au centime).
5. Quelle part de ce capital provient des intérêts ?`,
      solution: `**1.** Les intérêts de $3\\,\\%$ multiplient le capital par $1{,}03$, puis on ajoute $100$ : $C_{n+1} = 1{,}03C_n + 100$.
$C_1 = 1\\,030 + 100 = 1\\,130$ ; $C_2 = 1{,}03 \\times 1\\,130 + 100 = 1\\,163{,}9 + 100 = 1\\,263{,}9$.

**2.** $C_1 - C_0 = 130$ et $C_2 - C_1 = 133{,}9$ : pas arithmétique. $\\frac{C_1}{C_0} = 1{,}13$ et $\\frac{C_2}{C_1} \\approx 1{,}1185$ : pas géométrique.

**3.** $v_{n+1} = C_{n+1} + \\frac{10\\,000}{3} = 1{,}03C_n + 100 + \\frac{10\\,000}{3}$.
Or $1{,}03 v_n = 1{,}03C_n + 1{,}03 \\times \\frac{10\\,000}{3} = 1{,}03C_n + \\frac{10\\,300}{3} = 1{,}03C_n + 100 + \\frac{10\\,000}{3}$.
Donc $v_{n+1} = 1{,}03v_n$ : $(v_n)$ est géométrique de raison $1{,}03$, de premier terme $v_0 = 1\\,000 + \\frac{10\\,000}{3} = \\frac{13\\,000}{3}$.

**4.** $v_n = \\frac{13\\,000}{3} \\times 1{,}03^n$, donc $C_n = \\frac{13\\,000}{3} \\times 1{,}03^n - \\frac{10\\,000}{3}$.
Le $1^{\\text{er}}$ janvier 2036 correspond à $n = 10$ : $C_{10} = \\frac{13\\,000}{3} \\times 1{,}03^{10} - \\frac{10\\,000}{3} \\approx 2\\,490{,}30$ €.

**5.** Léa a versé $1\\,000 + 10 \\times 100 = 2\\,000$ €. Les intérêts représentent environ $2\\,490{,}30 - 2\\,000 = 490{,}30$ €, soit à peu près $19{,}7\\,\\%$ du capital.` }
  ],
  "1G1": [
    { id: "1G1-ds-01", title: "Radians et mesures principales", difficulty: 1, points: 4,
      statement: `1. Convertir en radians : $150^\\circ$ et $225^\\circ$. Convertir en degrés : $\\frac{7\\pi}{6}$ rad et $\\frac{\\pi}{10}$ rad.
2. Déterminer la mesure principale (c'est-à-dire la mesure appartenant à $]-\\pi ; \\pi]$) de chacun des réels suivants :
 a) $\\frac{17\\pi}{4}$  b) $-\\frac{11\\pi}{6}$  c) $\\frac{25\\pi}{3}$
3. Sur un cercle de rayon $5$ cm, quelle est la longueur de l'arc intercepté par un angle de $\\frac{2\\pi}{5}$ rad ?`,
      solution: `**1.** On utilise $180^\\circ = \\pi$ rad.
- $150^\\circ = 150 \\times \\frac{\\pi}{180} = \\frac{5\\pi}{6}$ rad ; $225^\\circ = \\frac{225\\pi}{180} = \\frac{5\\pi}{4}$ rad.
- $\\frac{7\\pi}{6}$ rad $= \\frac{7 \\times 180}{6} = 210^\\circ$ ; $\\frac{\\pi}{10}$ rad $= \\frac{180}{10} = 18^\\circ$.

**2.** On retire ou on ajoute un multiple de $2\\pi$.
- **a)** $\\frac{17\\pi}{4} = \\frac{16\\pi}{4} + \\frac{\\pi}{4} = 4\\pi + \\frac{\\pi}{4}$ : mesure principale $\\frac{\\pi}{4}$.
- **b)** $-\\frac{11\\pi}{6} = -\\frac{12\\pi}{6} + \\frac{\\pi}{6} = -2\\pi + \\frac{\\pi}{6}$ : mesure principale $\\frac{\\pi}{6}$.
- **c)** $\\frac{25\\pi}{3} = \\frac{24\\pi}{3} + \\frac{\\pi}{3} = 8\\pi + \\frac{\\pi}{3}$ : mesure principale $\\frac{\\pi}{3}$.

**3.** $\\ell = R\\theta = 5 \\times \\frac{2\\pi}{5} = 2\\pi \\approx 6{,}28$ cm.` },
    { id: "1G1-ds-02", title: "Valeurs remarquables sur le cercle", difficulty: 1, points: 4,
      statement: `1. Placer sur un cercle trigonométrique les points associés aux réels $\\frac{2\\pi}{3}$, $\\frac{5\\pi}{4}$, $-\\frac{\\pi}{6}$ et $\\frac{7\\pi}{2}$ (on expliquera la démarche).
2. Donner les valeurs exactes de $\\cos$ et $\\sin$ de chacun de ces réels, en justifiant à l'aide des symétries du cercle.`,
      solution: `**1.** On repère chaque réel par rapport aux angles remarquables du premier quadrant :
- $\\frac{2\\pi}{3} = \\pi - \\frac{\\pi}{3}$ : symétrique du point associé à $\\frac{\\pi}{3}$ par rapport à l'axe des ordonnées (2e quadrant).
- $\\frac{5\\pi}{4} = \\pi + \\frac{\\pi}{4}$ : symétrique du point associé à $\\frac{\\pi}{4}$ par rapport à l'origine (3e quadrant).
- $-\\frac{\\pi}{6}$ : symétrique du point associé à $\\frac{\\pi}{6}$ par rapport à l'axe des abscisses (4e quadrant).
- $\\frac{7\\pi}{2} = 4\\pi - \\frac{\\pi}{2}$ : même point que $-\\frac{\\pi}{2}$, c'est le point $(0 ; -1)$.

**2.**
- $\\cos\\frac{2\\pi}{3} = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}$ et $\\sin\\frac{2\\pi}{3} = \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$.
- $\\cos\\frac{5\\pi}{4} = -\\cos\\frac{\\pi}{4} = -\\frac{\\sqrt{2}}{2}$ et $\\sin\\frac{5\\pi}{4} = -\\sin\\frac{\\pi}{4} = -\\frac{\\sqrt{2}}{2}$.
- $\\cos\\left(-\\frac{\\pi}{6}\\right) = \\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$ (cosinus pair) et $\\sin\\left(-\\frac{\\pi}{6}\\right) = -\\sin\\frac{\\pi}{6} = -\\frac{1}{2}$ (sinus impair).
- $\\cos\\frac{7\\pi}{2} = \\cos\\left(-\\frac{\\pi}{2}\\right) = 0$ et $\\sin\\frac{7\\pi}{2} = \\sin\\left(-\\frac{\\pi}{2}\\right) = -1$.` },
    { id: "1G1-ds-03", title: "Du sinus au cosinus", difficulty: 2, points: 5,
      statement: `Soit $x$ un réel de l'intervalle $\\left[\\frac{\\pi}{2} ; \\pi\\right]$ tel que $\\sin x = \\frac{3}{5}$.

1. Calculer la valeur exacte de $\\cos x$ en justifiant son signe.
2. En déduire les valeurs exactes de :
 a) $\\cos(\\pi - x)$  b) $\\sin(\\pi + x)$  c) $\\cos\\left(\\frac{\\pi}{2} - x\\right)$  d) $\\sin(-x) + \\cos(-x)$`,
      solution: `**1.** Pour tout réel $x$, $\\cos^2 x + \\sin^2 x = 1$, donc $\\cos^2 x = 1 - \\frac{9}{25} = \\frac{16}{25}$ et $\\cos x = \\frac{4}{5}$ ou $\\cos x = -\\frac{4}{5}$.
Comme $x \\in \\left[\\frac{\\pi}{2} ; \\pi\\right]$, le point associé est dans le deuxième quadrant, où le cosinus est négatif : $\\cos x = -\\frac{4}{5}$.

**2. a)** $\\cos(\\pi - x) = -\\cos x = \\frac{4}{5}$.

**b)** $\\sin(\\pi + x) = -\\sin x = -\\frac{3}{5}$.

**c)** $\\cos\\left(\\frac{\\pi}{2} - x\\right) = \\sin x = \\frac{3}{5}$.

**d)** $\\sin(-x) = -\\sin x = -\\frac{3}{5}$ et $\\cos(-x) = \\cos x = -\\frac{4}{5}$, donc $\\sin(-x) + \\cos(-x) = -\\frac{7}{5}$.` },
    { id: "1G1-ds-04", title: "Équations trigonométriques", difficulty: 2, points: 5,
      statement: `Résoudre les équations suivantes dans l'intervalle indiqué, en s'aidant du cercle trigonométrique.

1. $\\cos x = \\frac{1}{2}$ dans $]-\\pi ; \\pi]$.
2. $\\sin x = -\\frac{\\sqrt{2}}{2}$ dans $[0 ; 2\\pi[$.
3. $2\\cos x + \\sqrt{3} = 0$ dans $]-\\pi ; \\pi]$.
4. $\\sin x = 1$ dans $\\mathbb{R}$.`,
      solution: `**1.** $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$. Les points du cercle d'abscisse $\\frac{1}{2}$ sont associés à $\\frac{\\pi}{3}$ et $-\\frac{\\pi}{3}$ (symétriques par rapport à l'axe des abscisses). $\\mathcal{S} = \\left\\{-\\frac{\\pi}{3} ; \\frac{\\pi}{3}\\right\\}$.

**2.** $\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$, donc $\\sin\\left(-\\frac{\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$ et $\\sin\\left(\\pi + \\frac{\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$. Dans $[0 ; 2\\pi[$, $-\\frac{\\pi}{4}$ correspond à $2\\pi - \\frac{\\pi}{4} = \\frac{7\\pi}{4}$.
$\\mathcal{S} = \\left\\{\\frac{5\\pi}{4} ; \\frac{7\\pi}{4}\\right\\}$.

**3.** $2\\cos x + \\sqrt{3} = 0 \\iff \\cos x = -\\frac{\\sqrt{3}}{2}$. Or $\\cos\\left(\\pi - \\frac{\\pi}{6}\\right) = -\\cos\\frac{\\pi}{6} = -\\frac{\\sqrt{3}}{2}$, et par parité $\\cos\\left(-\\frac{5\\pi}{6}\\right) = -\\frac{\\sqrt{3}}{2}$.
$\\mathcal{S} = \\left\\{-\\frac{5\\pi}{6} ; \\frac{5\\pi}{6}\\right\\}$.

**4.** Le seul point du cercle d'ordonnée $1$ est associé à $\\frac{\\pi}{2}$ ; tous les réels associés à ce point s'écrivent $\\frac{\\pi}{2} + 2k\\pi$ :
$\\mathcal{S} = \\left\\{\\frac{\\pi}{2} + 2k\\pi,\\ k \\in \\mathbb{Z}\\right\\}$.` },
    { id: "1G1-ds-05", title: "Simplifications avec les angles associés", difficulty: 3, points: 6,
      statement: `1. Simplifier, pour tout réel $x$ :
 a) $A(x) = \\cos(\\pi - x) + \\sin\\left(\\frac{\\pi}{2} - x\\right) + \\cos(x + \\pi) + \\cos(-x)$
 b) $B(x) = \\sin(x + \\pi) + \\sin(\\pi - x) + \\cos\\left(\\frac{\\pi}{2} - x\\right) - \\sin(-x)$
2. Calculer, sans calculatrice : $C = \\cos\\frac{\\pi}{5} + \\cos\\frac{2\\pi}{5} + \\cos\\frac{3\\pi}{5} + \\cos\\frac{4\\pi}{5}$.
3. Calculer : $D = \\sin^2\\frac{\\pi}{8} + \\sin^2\\frac{3\\pi}{8}$. (On pourra remarquer que $\\frac{3\\pi}{8} = \\frac{\\pi}{2} - \\frac{\\pi}{8}$.)`,
      solution: `**1. a)** $\\cos(\\pi - x) = -\\cos x$ ; $\\sin\\left(\\frac{\\pi}{2} - x\\right) = \\cos x$ ; $\\cos(x + \\pi) = -\\cos x$ ; $\\cos(-x) = \\cos x$.
$A(x) = -\\cos x + \\cos x - \\cos x + \\cos x = 0$.

**b)** $\\sin(x + \\pi) = -\\sin x$ ; $\\sin(\\pi - x) = \\sin x$ ; $\\cos\\left(\\frac{\\pi}{2} - x\\right) = \\sin x$ ; $-\\sin(-x) = \\sin x$.
$B(x) = -\\sin x + \\sin x + \\sin x + \\sin x = 2\\sin x$.

**2.** $\\frac{4\\pi}{5} = \\pi - \\frac{\\pi}{5}$ donc $\\cos\\frac{4\\pi}{5} = -\\cos\\frac{\\pi}{5}$ ; de même $\\frac{3\\pi}{5} = \\pi - \\frac{2\\pi}{5}$ donc $\\cos\\frac{3\\pi}{5} = -\\cos\\frac{2\\pi}{5}$.
Les termes s'annulent deux à deux : $C = 0$.

**3.** $\\sin\\frac{3\\pi}{8} = \\sin\\left(\\frac{\\pi}{2} - \\frac{\\pi}{8}\\right) = \\cos\\frac{\\pi}{8}$. Donc $D = \\sin^2\\frac{\\pi}{8} + \\cos^2\\frac{\\pi}{8} = 1$.` },
    { id: "1G1-ds-06", title: "Inéquations et fonctions trigonométriques", difficulty: 3, points: 6,
      statement: `1. À l'aide du cercle trigonométrique, résoudre :
 a) $\\cos x \\geqslant \\frac{1}{2}$ dans $]-\\pi ; \\pi]$ ;
 b) $\\sin x < \\frac{1}{2}$ dans $[0 ; 2\\pi[$.
2. Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = \\sin(2x)$.
 a) Montrer que $f$ est impaire.
 b) Montrer que pour tout réel $x$, $f(x + \\pi) = f(x)$. Que peut-on en déduire pour la courbe de $f$ ?
 c) Calculer $f\\left(\\frac{\\pi}{4}\\right)$, $f\\left(\\frac{\\pi}{3}\\right)$ et $f\\left(-\\frac{\\pi}{12}\\right)$.`,
      solution: `**1. a)** Les points d'abscisse $\\frac{1}{2}$ sont associés à $\\pm\\frac{\\pi}{3}$. Les points d'abscisse supérieure ou égale à $\\frac{1}{2}$ forment l'arc situé « à droite », entre $-\\frac{\\pi}{3}$ et $\\frac{\\pi}{3}$ : $\\mathcal{S} = \\left[-\\frac{\\pi}{3} ; \\frac{\\pi}{3}\\right]$.

**b)** Les points d'ordonnée $\\frac{1}{2}$ sont associés à $\\frac{\\pi}{6}$ et $\\frac{5\\pi}{6}$. L'ordonnée est $\\geqslant \\frac{1}{2}$ sur l'arc supérieur $\\left[\\frac{\\pi}{6} ; \\frac{5\\pi}{6}\\right]$ ; elle est donc $< \\frac{1}{2}$ ailleurs :
$\\mathcal{S} = \\left[0 ; \\frac{\\pi}{6}\\right[ \\cup \\left]\\frac{5\\pi}{6} ; 2\\pi\\right[$.

**2. a)** $\\mathbb{R}$ est symétrique par rapport à $0$ et $f(-x) = \\sin(-2x) = -\\sin(2x) = -f(x)$ : $f$ est impaire (courbe symétrique par rapport à l'origine).

**b)** $f(x + \\pi) = \\sin(2x + 2\\pi) = \\sin(2x) = f(x)$ car la fonction sinus est $2\\pi$-périodique. $f$ est périodique de période $\\pi$ : sa courbe est invariante par la translation de vecteur $\\pi\\,\\vec{i}$ ; il suffit de la tracer sur un intervalle de longueur $\\pi$.

**c)** $f\\left(\\frac{\\pi}{4}\\right) = \\sin\\frac{\\pi}{2} = 1$ ; $f\\left(\\frac{\\pi}{3}\\right) = \\sin\\frac{2\\pi}{3} = \\frac{\\sqrt{3}}{2}$ ; $f\\left(-\\frac{\\pi}{12}\\right) = \\sin\\left(-\\frac{\\pi}{6}\\right) = -\\frac{1}{2}$.` },
    { id: "1G1-ds-07", title: "La grande roue", difficulty: 4, points: 7,
      statement: `Une grande roue a un rayon de $20$ m ; son centre est situé à $22$ m du sol. Elle fait un tour complet en $12$ minutes, à vitesse constante. On repère la position d'une nacelle par un réel $\\theta$ (en radians) : sa hauteur au-dessus du sol est alors $h(\\theta) = 22 + 20\\sin\\theta$.

1. Quelles sont la hauteur minimale et la hauteur maximale de la nacelle ? Pour quelles valeurs de $\\theta \\in [0 ; 2\\pi[$ sont-elles atteintes ?
2. Calculer $h\\left(\\frac{\\pi}{6}\\right)$ et $h\\left(\\frac{5\\pi}{4}\\right)$ (valeur exacte puis arrondie au dixième).
3. Résoudre dans $[0 ; 2\\pi[$ l'inéquation $h(\\theta) \\geqslant 32$.
4. En déduire, pendant un tour, la durée pendant laquelle la nacelle est à au moins $32$ m du sol.
5. Quelle distance la nacelle parcourt-elle pendant cette durée ? (arrondir au dixième de mètre)`,
      solution: `**1.** Pour tout $\\theta$, $-1 \\leqslant \\sin\\theta \\leqslant 1$, donc $2 \\leqslant h(\\theta) \\leqslant 42$.
Minimum $2$ m pour $\\sin\\theta = -1$, soit $\\theta = \\frac{3\\pi}{2}$ ; maximum $42$ m pour $\\sin\\theta = 1$, soit $\\theta = \\frac{\\pi}{2}$.

**2.** $h\\left(\\frac{\\pi}{6}\\right) = 22 + 20 \\times \\frac{1}{2} = 32$ m.
$h\\left(\\frac{5\\pi}{4}\\right) = 22 + 20 \\times \\left(-\\frac{\\sqrt{2}}{2}\\right) = 22 - 10\\sqrt{2} \\approx 7{,}9$ m.

**3.** $h(\\theta) \\geqslant 32 \\iff 20\\sin\\theta \\geqslant 10 \\iff \\sin\\theta \\geqslant \\frac{1}{2}$.
Sur le cercle, les points d'ordonnée au moins $\\frac{1}{2}$ forment l'arc d'extrémités $\\frac{\\pi}{6}$ et $\\frac{5\\pi}{6}$ : $\\mathcal{S} = \\left[\\frac{\\pi}{6} ; \\frac{5\\pi}{6}\\right]$.

**4.** Cet arc correspond à un angle de $\\frac{5\\pi}{6} - \\frac{\\pi}{6} = \\frac{2\\pi}{3}$, soit $\\frac{2\\pi/3}{2\\pi} = \\frac{1}{3}$ de tour. La roue tournant à vitesse constante, la durée est $\\frac{1}{3} \\times 12 = 4$ minutes.

**5.** La nacelle parcourt un arc de cercle de rayon $20$ m et d'angle $\\frac{2\\pi}{3}$ rad : $\\ell = 20 \\times \\frac{2\\pi}{3} = \\frac{40\\pi}{3} \\approx 41{,}9$ m.` },
    { id: "1G1-ds-08", title: "Équations se ramenant au second degré", difficulty: 4, points: 7,
      statement: `1. Résoudre dans $\\mathbb{R}$ l'équation $2X^2 - X - 1 = 0$.
2. En déduire les solutions dans $]-\\pi ; \\pi]$ de l'équation $2\\sin^2 x - \\sin x - 1 = 0$.
3. Résoudre dans $]-\\pi ; \\pi]$ l'équation $2\\cos^2 x + 3\\cos x - 2 = 0$.
4. Montrer que pour tout réel $x$, $\\cos^4 x - \\sin^4 x = 2\\cos^2 x - 1$. En déduire les solutions dans $]-\\pi ; \\pi]$ de $\\cos^4 x - \\sin^4 x = 0$.`,
      solution: `**1.** $\\Delta = 1 + 8 = 9$ ; $X_1 = \\frac{1 - 3}{4} = -\\frac{1}{2}$ et $X_2 = \\frac{1 + 3}{4} = 1$.

**2.** On pose $X = \\sin x$ : l'équation équivaut à $\\sin x = 1$ ou $\\sin x = -\\frac{1}{2}$.
- $\\sin x = 1$ dans $]-\\pi ; \\pi]$ : $x = \\frac{\\pi}{2}$.
- $\\sin x = -\\frac{1}{2}$ : $\\sin\\left(-\\frac{\\pi}{6}\\right) = -\\frac{1}{2}$ et $\\sin\\left(-\\pi + \\frac{\\pi}{6}\\right) = -\\sin\\frac{\\pi}{6} = -\\frac{1}{2}$ (car $\\sin(-\\pi + a) = -\\sin a$), d'où $x = -\\frac{\\pi}{6}$ ou $x = -\\frac{5\\pi}{6}$.

$\\mathcal{S} = \\left\\{-\\frac{5\\pi}{6} ; -\\frac{\\pi}{6} ; \\frac{\\pi}{2}\\right\\}$.

**3.** Avec $X = \\cos x$ : $2X^2 + 3X - 2 = 0$, $\\Delta = 9 + 16 = 25$, $X = \\frac{-3 - 5}{4} = -2$ ou $X = \\frac{-3 + 5}{4} = \\frac{1}{2}$.
$\\cos x = -2$ est impossible ($-1 \\leqslant \\cos x \\leqslant 1$). $\\cos x = \\frac{1}{2}$ donne $x = \\pm\\frac{\\pi}{3}$.
$\\mathcal{S} = \\left\\{-\\frac{\\pi}{3} ; \\frac{\\pi}{3}\\right\\}$.

**4.** $\\cos^4 x - \\sin^4 x = (\\cos^2 x - \\sin^2 x)(\\cos^2 x + \\sin^2 x) = \\cos^2 x - \\sin^2 x$, et comme $\\sin^2 x = 1 - \\cos^2 x$, cela vaut $2\\cos^2 x - 1$.
$\\cos^4 x - \\sin^4 x = 0 \\iff \\cos^2 x = \\frac{1}{2} \\iff \\cos x = \\frac{\\sqrt{2}}{2}$ ou $\\cos x = -\\frac{\\sqrt{2}}{2}$.
Dans $]-\\pi ; \\pi]$ : $x \\in \\left\\{-\\frac{3\\pi}{4} ; -\\frac{\\pi}{4} ; \\frac{\\pi}{4} ; \\frac{3\\pi}{4}\\right\\}$.` }
  ],
  "1G2": [
    { id: "1G2-ds-01", title: "Produit scalaire en coordonnées", difficulty: 1, points: 4,
      statement: `Le plan est muni d'un repère orthonormé. On considère les vecteurs $\\vec{u}\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$, $\\vec{v}\\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}$ et $\\vec{w}\\begin{pmatrix} -1 \\\\ 5 \\end{pmatrix}$.

1. Calculer $\\vec{u} \\cdot \\vec{v}$. Que peut-on en déduire ?
2. Calculer $\\vec{u} \\cdot \\vec{w}$ et $\\vec{u} \\cdot \\vec{u}$. En déduire $\\|\\vec{u}\\|$.
3. Calculer $\\vec{u} \\cdot (\\vec{v} + \\vec{w})$ de deux façons différentes.`,
      solution: `**1.** $\\vec{u} \\cdot \\vec{v} = 3 \\times 4 + (-2) \\times 6 = 12 - 12 = 0$. Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont **orthogonaux**.

**2.** $\\vec{u} \\cdot \\vec{w} = 3 \\times (-1) + (-2) \\times 5 = -3 - 10 = -13$.
$\\vec{u} \\cdot \\vec{u} = 3^2 + (-2)^2 = 13$, et $\\vec{u} \\cdot \\vec{u} = \\|\\vec{u}\\|^2$, donc $\\|\\vec{u}\\| = \\sqrt{13}$.

**3.** Par bilinéarité : $\\vec{u} \\cdot (\\vec{v} + \\vec{w}) = \\vec{u} \\cdot \\vec{v} + \\vec{u} \\cdot \\vec{w} = 0 + (-13) = -13$.
Directement : $\\vec{v} + \\vec{w}\\begin{pmatrix} 3 \\\\ 11 \\end{pmatrix}$ et $\\vec{u} \\cdot (\\vec{v} + \\vec{w}) = 9 - 22 = -13$.` },
    { id: "1G2-ds-02", title: "Normes, angle et projection", difficulty: 1, points: 4,
      statement: `1. Soient $\\vec{u}$ et $\\vec{v}$ deux vecteurs tels que $\\|\\vec{u}\\| = 4$ et $\\|\\vec{v}\\| = 3$. Calculer $\\vec{u} \\cdot \\vec{v}$ lorsque l'angle $(\\vec{u}, \\vec{v})$ mesure :
 a) $\\frac{\\pi}{3}$  b) $\\frac{3\\pi}{4}$  c) $\\frac{\\pi}{2}$
2. $ABCD$ est un carré de côté $5$. Calculer, en justifiant (projection orthogonale) :
 a) $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$  b) $\\overrightarrow{AB} \\cdot \\overrightarrow{CD}$  c) $\\overrightarrow{AB} \\cdot \\overrightarrow{AD}$`,
      solution: `**1.** $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\vec{u}, \\vec{v}) = 12\\cos(\\vec{u}, \\vec{v})$.
- **a)** $12 \\times \\frac{1}{2} = 6$.
- **b)** $12 \\times \\left(-\\frac{\\sqrt{2}}{2}\\right) = -6\\sqrt{2}$.
- **c)** $12 \\times 0 = 0$ (vecteurs orthogonaux).

**2. a)** Le projeté orthogonal de $C$ sur la droite $(AB)$ est $B$. Donc $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\overrightarrow{AB} \\cdot \\overrightarrow{AB} = AB^2 = 25$.

**b)** $\\overrightarrow{CD} = -\\overrightarrow{AB}$, donc $\\overrightarrow{AB} \\cdot \\overrightarrow{CD} = -AB^2 = -25$.

**c)** $(AB) \\perp (AD)$, donc $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = 0$.` },
    { id: "1G2-ds-03", title: "Angle d'un triangle par le produit scalaire", difficulty: 2, points: 5,
      statement: `Dans un repère orthonormé, on considère les points $A(1 ; 2)$, $B(4 ; 3)$ et $C(2 ; 6)$.

1. Calculer les coordonnées de $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$, puis $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.
2. Calculer les longueurs $AB$ et $AC$.
3. En déduire $\\cos\\widehat{BAC}$, puis une mesure de l'angle $\\widehat{BAC}$ arrondie au dixième de degré.
4. Calculer $\\overrightarrow{BA} \\cdot \\overrightarrow{BC}$. L'angle $\\widehat{ABC}$ est-il aigu ou obtus ?`,
      solution: `**1.** $\\overrightarrow{AB}\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}$ ; $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 3 \\times 1 + 1 \\times 4 = 7$.

**2.** $AB = \\sqrt{9 + 1} = \\sqrt{10}$ et $AC = \\sqrt{1 + 16} = \\sqrt{17}$.

**3.** $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB \\times AC \\times \\cos\\widehat{BAC}$, donc
$$\\cos\\widehat{BAC} = \\frac{7}{\\sqrt{10}\\sqrt{17}} = \\frac{7}{\\sqrt{170}} \\approx 0{,}5369.$$
À la calculatrice : $\\widehat{BAC} \\approx 57{,}5^\\circ$.

**4.** $\\overrightarrow{BA}\\begin{pmatrix} -3 \\\\ -1 \\end{pmatrix}$, $\\overrightarrow{BC}\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$ : $\\overrightarrow{BA} \\cdot \\overrightarrow{BC} = 6 - 3 = 3 > 0$.
Le cosinus de $\\widehat{ABC}$ est du signe du produit scalaire, donc positif : l'angle $\\widehat{ABC}$ est **aigu**.` },
    { id: "1G2-ds-04", title: "Produit scalaire et normes", difficulty: 2, points: 5,
      statement: `Soient $\\vec{u}$ et $\\vec{v}$ deux vecteurs tels que $\\|\\vec{u}\\| = 3$, $\\|\\vec{v}\\| = 5$ et $\\|\\vec{u} + \\vec{v}\\| = \\sqrt{19}$.

1. Démontrer que $\\|\\vec{u} + \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 + 2\\,\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$.
2. En déduire $\\vec{u} \\cdot \\vec{v}$.
3. Calculer $\\|\\vec{u} - \\vec{v}\\|$.
4. Déterminer une mesure de l'angle géométrique entre $\\vec{u}$ et $\\vec{v}$.
5. Calculer $(2\\vec{u} - \\vec{v}) \\cdot (\\vec{u} + 3\\vec{v})$.`,
      solution: `**1.** Par bilinéarité et symétrie : $\\|\\vec{u} + \\vec{v}\\|^2 = (\\vec{u} + \\vec{v}) \\cdot (\\vec{u} + \\vec{v}) = \\vec{u} \\cdot \\vec{u} + \\vec{u} \\cdot \\vec{v} + \\vec{v} \\cdot \\vec{u} + \\vec{v} \\cdot \\vec{v} = \\|\\vec{u}\\|^2 + 2\\,\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$.

**2.** $19 = 9 + 2\\,\\vec{u} \\cdot \\vec{v} + 25$, donc $\\vec{u} \\cdot \\vec{v} = \\frac{19 - 34}{2} = -\\frac{15}{2}$.

**3.** $\\|\\vec{u} - \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 - 2\\,\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2 = 9 + 15 + 25 = 49$, donc $\\|\\vec{u} - \\vec{v}\\| = 7$.

**4.** $\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\times \\|\\vec{v}\\|} = \\frac{-15/2}{15} = -\\frac{1}{2}$, d'où $\\theta = \\frac{2\\pi}{3}$ (soit $120^\\circ$).

**5.** $(2\\vec{u} - \\vec{v}) \\cdot (\\vec{u} + 3\\vec{v}) = 2\\|\\vec{u}\\|^2 + 6\\,\\vec{u} \\cdot \\vec{v} - \\vec{v} \\cdot \\vec{u} - 3\\|\\vec{v}\\|^2 = 2\\|\\vec{u}\\|^2 + 5\\,\\vec{u} \\cdot \\vec{v} - 3\\|\\vec{v}\\|^2$
$= 18 - \\frac{75}{2} - 75 = -\\frac{189}{2}$.` },
    { id: "1G2-ds-05", title: "Dans un triangle équilatéral", difficulty: 3, points: 6,
      statement: `$ABC$ est un triangle équilatéral de côté $4$ ; $I$ est le milieu de $[BC]$.

1. Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.
2. Calculer la longueur $AI$, puis $\\overrightarrow{AI} \\cdot \\overrightarrow{BC}$ et $\\overrightarrow{AB} \\cdot \\overrightarrow{AI}$.
3. Calculer $\\overrightarrow{BA} \\cdot \\overrightarrow{BI}$ de deux manières différentes.
4. Montrer, sans calcul de coordonnées, que $(\\overrightarrow{AB} + \\overrightarrow{AC}) \\cdot (\\overrightarrow{AB} - \\overrightarrow{AC}) = 0$ et interpréter géométriquement.`,
      solution: `**1.** L'angle $\\widehat{BAC}$ mesure $60^\\circ$ : $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 4 \\times 4 \\times \\cos 60^\\circ = 16 \\times \\frac{1}{2} = 8$.

**2.** Dans un triangle équilatéral, la médiane $(AI)$ est aussi hauteur. Pythagore dans $ABI$ rectangle en $I$ : $AI^2 = 16 - 4 = 12$, $AI = 2\\sqrt{3}$.
$(AI) \\perp (BC)$ donc $\\overrightarrow{AI} \\cdot \\overrightarrow{BC} = 0$.
Le projeté orthogonal de $B$ sur $(AI)$ est $I$, donc $\\overrightarrow{AB} \\cdot \\overrightarrow{AI} = \\overrightarrow{AI} \\cdot \\overrightarrow{AI} = AI^2 = 12$.

**3.** *Par projection* : le projeté orthogonal de $A$ sur $(BC)$ est $I$, donc $\\overrightarrow{BA} \\cdot \\overrightarrow{BI} = \\overrightarrow{BI} \\cdot \\overrightarrow{BI} = BI^2 = 4$.
*Avec l'angle* : $\\widehat{ABI} = 60^\\circ$, donc $\\overrightarrow{BA} \\cdot \\overrightarrow{BI} = 4 \\times 2 \\times \\frac{1}{2} = 4$.

**4.** $(\\overrightarrow{AB} + \\overrightarrow{AC}) \\cdot (\\overrightarrow{AB} - \\overrightarrow{AC}) = AB^2 - AC^2 = 16 - 16 = 0$.
Or $\\overrightarrow{AB} + \\overrightarrow{AC} = 2\\overrightarrow{AI}$ (car $I$ est le milieu de $[BC]$) et $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CB}$. On retrouve que la médiane $(AI)$ est perpendiculaire à $(BC)$ : c'est vrai dans tout triangle isocèle en $A$.` },
    { id: "1G2-ds-06", title: "Orthogonalité et triangle rectangle", difficulty: 3, points: 6,
      statement: `Le plan est muni d'un repère orthonormé.

1. Pour quelles valeurs du réel $m$ les vecteurs $\\vec{u}\\begin{pmatrix} m \\\\ 2 \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} m - 1 \\\\ -3 \\end{pmatrix}$ sont-ils orthogonaux ?
2. On considère les points $A(-1 ; 1)$, $B(3 ; 3)$ et $C(1 ; 7)$.
 a) Démontrer que le triangle $ABC$ est rectangle ; préciser en quel sommet.
 b) Calculer son aire.
3. Déterminer les coordonnées du point $D$ tel que $ABCD$ soit un rectangle.`,
      solution: `**1.** $\\vec{u} \\cdot \\vec{v} = m(m - 1) + 2 \\times (-3) = m^2 - m - 6$.
$\\vec{u} \\perp \\vec{v} \\iff m^2 - m - 6 = 0$ ; $\\Delta = 1 + 24 = 25$ ; $m = \\frac{1 - 5}{2} = -2$ ou $m = \\frac{1 + 5}{2} = 3$.

**2. a)** $\\overrightarrow{AB}\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$, $\\overrightarrow{AC}\\begin{pmatrix} 2 \\\\ 6 \\end{pmatrix}$, $\\overrightarrow{BC}\\begin{pmatrix} -2 \\\\ 4 \\end{pmatrix}$.
- $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 8 + 12 = 20 \\neq 0$ ;
- $\\overrightarrow{BA} \\cdot \\overrightarrow{BC} = (-4)(-2) + (-2)(4) = 8 - 8 = 0$.

Les vecteurs $\\overrightarrow{BA}$ et $\\overrightarrow{BC}$ sont orthogonaux : $ABC$ est rectangle en $B$.

**b)** $BA = \\sqrt{16 + 4} = 2\\sqrt{5}$ et $BC = \\sqrt{4 + 16} = 2\\sqrt{5}$. Aire $= \\frac{BA \\times BC}{2} = \\frac{20}{2} = 10$ unités d'aire. (Le triangle est même isocèle rectangle en $B$.)

**3.** $ABCD$ est un rectangle (angle droit en $B$) si et seulement si $ABCD$ est un parallélogramme, c'est-à-dire $\\overrightarrow{AD} = \\overrightarrow{BC}$ : $D(-1 - 2 ; 1 + 4) = (-3 ; 5)$. Comme $BA = BC$, $ABCD$ est même un carré.` },
    { id: "1G2-ds-07", title: "Perpendicularité dans un rectangle", difficulty: 4, points: 7,
      statement: `$ABCD$ est un rectangle avec $AB = 6$ et $AD = 4$. $E$ est le milieu de $[CD]$. On se place dans le repère orthonormé d'origine $A$ tel que $B(6 ; 0)$ et $D(0 ; 4)$.

1. Donner les coordonnées de $C$ et de $E$.
2. On cherche un point $F$ du segment $[BC]$ tel que les droites $(AE)$ et $(EF)$ soient perpendiculaires. On note $F(6 ; y)$.
 a) Exprimer $\\overrightarrow{AE} \\cdot \\overrightarrow{EF}$ en fonction de $y$.
 b) Déterminer $y$ et vérifier que $F$ appartient bien à $[BC]$.
3. Calculer $\\overrightarrow{AC} \\cdot \\overrightarrow{BD}$. Les diagonales du rectangle sont-elles perpendiculaires ?
4. Déterminer une mesure, arrondie au dixième de degré, de l'angle aigu formé par les diagonales $(AC)$ et $(BD)$.`,
      solution: `**1.** $C(6 ; 4)$ et $E$, milieu de $[CD]$ avec $D(0 ; 4)$ : $E(3 ; 4)$.

**2. a)** $\\overrightarrow{AE}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ et $\\overrightarrow{EF}\\begin{pmatrix} 3 \\\\ y - 4 \\end{pmatrix}$ : $\\overrightarrow{AE} \\cdot \\overrightarrow{EF} = 9 + 4(y - 4) = 4y - 7$.

**b)** $(AE) \\perp (EF) \\iff 4y - 7 = 0 \\iff y = \\frac{7}{4} = 1{,}75$. Comme $0 \\leqslant 1{,}75 \\leqslant 4$, $F\\left(6 ; \\frac{7}{4}\\right)$ appartient bien au segment $[BC]$ (qui va de $B(6 ; 0)$ à $C(6 ; 4)$).

**3.** $\\overrightarrow{AC}\\begin{pmatrix} 6 \\\\ 4 \\end{pmatrix}$, $\\overrightarrow{BD}\\begin{pmatrix} -6 \\\\ 4 \\end{pmatrix}$ : $\\overrightarrow{AC} \\cdot \\overrightarrow{BD} = -36 + 16 = -20 \\neq 0$. Les diagonales ne sont pas perpendiculaires (le rectangle n'est pas un carré).

**4.** $AC = BD = \\sqrt{36 + 16} = \\sqrt{52}$. $\\cos(\\overrightarrow{AC}, \\overrightarrow{BD}) = \\frac{-20}{52} = -\\frac{5}{13}$, d'où un angle d'environ $112{,}6^\\circ$ entre ces vecteurs.
L'angle aigu entre les droites est son supplémentaire : $180 - 112{,}6 \\approx 67{,}4^\\circ$.` },
    { id: "1G2-ds-08", title: "Identité du parallélogramme", difficulty: 4, points: 7,
      statement: `$ABCD$ est un parallélogramme. On pose $\\vec{u} = \\overrightarrow{AB}$ et $\\vec{v} = \\overrightarrow{AD}$.

1. Exprimer $\\overrightarrow{AC}$ et $\\overrightarrow{DB}$ en fonction de $\\vec{u}$ et $\\vec{v}$.
2. Démontrer que $AC^2 + BD^2 = 2\\left(AB^2 + AD^2\\right)$.
3. Application : on donne $AB = 5$, $AD = 3$ et $AC = 7$. Calculer $BD$, puis $\\overrightarrow{AB} \\cdot \\overrightarrow{AD}$ et une mesure de l'angle $\\widehat{BAD}$.
4. Démontrer que $\\overrightarrow{AC} \\cdot \\overrightarrow{DB} = AB^2 - AD^2$. En déduire qu'un parallélogramme a ses diagonales perpendiculaires si et seulement si c'est un losange.`,
      solution: `**1.** Par la relation de Chasles et $\\overrightarrow{BC} = \\overrightarrow{AD}$ : $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{BC} = \\vec{u} + \\vec{v}$ et $\\overrightarrow{DB} = \\overrightarrow{DA} + \\overrightarrow{AB} = \\vec{u} - \\vec{v}$.

**2.** $AC^2 = \\|\\vec{u} + \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 + 2\\,\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$ et $BD^2 = \\|\\vec{u} - \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 - 2\\,\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$.
En additionnant : $AC^2 + BD^2 = 2\\|\\vec{u}\\|^2 + 2\\|\\vec{v}\\|^2 = 2\\left(AB^2 + AD^2\\right)$.

**3.** $BD^2 = 2(25 + 9) - 49 = 68 - 49 = 19$, donc $BD = \\sqrt{19}$.
$AC^2 = AB^2 + 2\\,\\overrightarrow{AB} \\cdot \\overrightarrow{AD} + AD^2$ donne $49 = 34 + 2\\,\\overrightarrow{AB} \\cdot \\overrightarrow{AD}$, soit $\\overrightarrow{AB} \\cdot \\overrightarrow{AD} = \\frac{15}{2}$.
$\\cos\\widehat{BAD} = \\frac{15/2}{5 \\times 3} = \\frac{1}{2}$, donc $\\widehat{BAD} = 60^\\circ$.

**4.** $\\overrightarrow{AC} \\cdot \\overrightarrow{DB} = (\\vec{u} + \\vec{v}) \\cdot (\\vec{u} - \\vec{v}) = \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2 = AB^2 - AD^2$.
Les diagonales sont perpendiculaires $\\iff \\overrightarrow{AC} \\cdot \\overrightarrow{DB} = 0 \\iff AB^2 = AD^2 \\iff AB = AD$. Un parallélogramme ayant deux côtés consécutifs de même longueur est un losange : d'où l'équivalence.` }
  ],
  "1G3": [
    { id: "1G3-ds-01", title: "Al-Kashi : une longueur, un angle", difficulty: 1, points: 4,
      statement: `1. Dans un triangle $ABC$, on donne $AB = 5$, $AC = 8$ et $\\widehat{BAC} = 60^\\circ$. Calculer $BC$.
2. Un triangle $EFG$ a pour côtés $EF = 4$, $FG = 5$ et $EG = 6$.
 a) Quel est son plus grand angle ? Justifier.
 b) Calculer le cosinus de cet angle, puis une mesure arrondie au dixième de degré. Le triangle est-il rectangle ? obtusangle ?`,
      solution: `**1.** Théorème d'Al-Kashi : $BC^2 = AB^2 + AC^2 - 2 \\times AB \\times AC \\times \\cos\\widehat{BAC} = 25 + 64 - 2 \\times 5 \\times 8 \\times \\frac{1}{2} = 89 - 40 = 49$.
Donc $BC = 7$.

**2. a)** Dans un triangle, le plus grand angle est opposé au plus grand côté : c'est l'angle $\\widehat{EFG}$, opposé à $[EG]$.

**b)** Al-Kashi : $EG^2 = EF^2 + FG^2 - 2 \\times EF \\times FG \\times \\cos\\widehat{EFG}$, donc
$$\\cos\\widehat{EFG} = \\frac{EF^2 + FG^2 - EG^2}{2 \\times EF \\times FG} = \\frac{16 + 25 - 36}{40} = \\frac{5}{40} = \\frac{1}{8}.$$
$\\widehat{EFG} \\approx 82{,}8^\\circ$. Le cosinus n'est pas nul : le triangle n'est pas rectangle. Le plus grand angle est aigu (cosinus positif) : le triangle a ses trois angles aigus, il n'est pas obtusangle.` },
    { id: "1G3-ds-02", title: "Vecteur normal et équation de droite", difficulty: 1, points: 4,
      statement: `Le plan est muni d'un repère orthonormé.

1. Déterminer une équation cartésienne de la droite $d$ passant par $A(2 ; -1)$ et de vecteur normal $\\vec{n}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$.
2. Le point $B(-2 ; 2)$ appartient-il à $d$ ? Donner un vecteur directeur de $d$.
3. Soit $d'$ la droite d'équation $2x - 5y + 1 = 0$. Donner un vecteur normal à $d'$, puis une équation de la droite perpendiculaire à $d'$ passant par l'origine $O$.`,
      solution: `**1.** $M(x ; y) \\in d \\iff \\overrightarrow{AM} \\cdot \\vec{n} = 0 \\iff 3(x - 2) + 4(y + 1) = 0 \\iff 3x + 4y - 2 = 0$.

**2.** $3 \\times (-2) + 4 \\times 2 - 2 = -6 + 8 - 2 = 0$ : $B \\in d$.
Un vecteur directeur de $d$ est orthogonal à $\\vec{n}$ : par exemple $\\vec{u}\\begin{pmatrix} -4 \\\\ 3 \\end{pmatrix}$ (car $3 \\times (-4) + 4 \\times 3 = 0$). On peut vérifier que $\\overrightarrow{AB}\\begin{pmatrix} -4 \\\\ 3 \\end{pmatrix}$ convient.

**3.** Un vecteur normal à $d'$ (d'équation $ax + by + c = 0$) est $\\vec{n'}\\begin{pmatrix} 2 \\\\ -5 \\end{pmatrix}$.
Une droite perpendiculaire à $d'$ admet $\\vec{n'}$ comme vecteur **directeur**, donc un vecteur normal $\\begin{pmatrix} 5 \\\\ 2 \\end{pmatrix}$ (orthogonal à $\\vec{n'}$). Passant par $O$, elle a pour équation $5x + 2y = 0$.` },
    { id: "1G3-ds-03", title: "Reconnaître un cercle", difficulty: 2, points: 5,
      statement: `Le plan est muni d'un repère orthonormé.

1. Écrire une équation du cercle $\\mathcal{C}_1$ de centre $\\Omega(2 ; -3)$ et de rayon $5$. Le point $A(5 ; 1)$ appartient-il à $\\mathcal{C}_1$ ?
2. Montrer que l'ensemble des points $M(x ; y)$ tels que $x^2 + y^2 + 6x - 2y - 15 = 0$ est un cercle dont on précisera le centre et le rayon.
3. Déterminer l'ensemble des points $M(x ; y)$ tels que $x^2 + y^2 - 2x + 4y + 10 = 0$.`,
      solution: `**1.** $M(x ; y) \\in \\mathcal{C}_1 \\iff \\Omega M^2 = 25 \\iff (x - 2)^2 + (y + 3)^2 = 25$.
Pour $A$ : $(5 - 2)^2 + (1 + 3)^2 = 9 + 16 = 25$ : $A \\in \\mathcal{C}_1$.

**2.** On fait apparaître des formes canoniques : $x^2 + 6x = (x + 3)^2 - 9$ et $y^2 - 2y = (y - 1)^2 - 1$.
L'équation devient $(x + 3)^2 - 9 + (y - 1)^2 - 1 - 15 = 0 \\iff (x + 3)^2 + (y - 1)^2 = 25$.
C'est le cercle de centre $(-3 ; 1)$ et de rayon $5$.

**3.** $x^2 - 2x = (x - 1)^2 - 1$ et $y^2 + 4y = (y + 2)^2 - 4$, d'où $(x - 1)^2 + (y + 2)^2 = 1 + 4 - 10 = -5$.
Une somme de carrés ne peut pas être négative : l'ensemble est **vide**.` },
    { id: "1G3-ds-04", title: "Cercle de diamètre donné et tangente", difficulty: 2, points: 5,
      statement: `Dans un repère orthonormé, on considère $A(-1 ; 2)$ et $B(3 ; 4)$, et $\\mathcal{C}$ l'ensemble des points $M$ tels que $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$.

1. Justifier que $\\mathcal{C}$ est le cercle de diamètre $[AB]$.
2. Montrer qu'une équation de $\\mathcal{C}$ est $x^2 + y^2 - 2x - 6y + 5 = 0$, puis en déduire son centre $\\Omega$ et son rayon. Vérifier le résultat avec la longueur $AB$.
3. Déterminer une équation de la tangente $T$ à $\\mathcal{C}$ au point $A$ (droite passant par $A$ et de vecteur normal $\\overrightarrow{\\Omega A}$).`,
      solution: `**1.** Pour $M$ distinct de $A$ et $B$, $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ signifie que le triangle $AMB$ est rectangle en $M$, ce qui caractérise les points du cercle de diamètre $[AB]$ ; les points $A$ et $B$ conviennent aussi (vecteur nul). Donc $\\mathcal{C}$ est le cercle de diamètre $[AB]$.

**2.** $\\overrightarrow{MA}\\begin{pmatrix} -1 - x \\\\ 2 - y \\end{pmatrix}$ et $\\overrightarrow{MB}\\begin{pmatrix} 3 - x \\\\ 4 - y \\end{pmatrix}$ :
$\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = (-1 - x)(3 - x) + (2 - y)(4 - y) = x^2 - 2x - 3 + y^2 - 6y + 8 = x^2 + y^2 - 2x - 6y + 5$.
Forme canonique : $(x - 1)^2 - 1 + (y - 3)^2 - 9 + 5 = 0 \\iff (x - 1)^2 + (y - 3)^2 = 5$.
Centre $\\Omega(1 ; 3)$, rayon $\\sqrt{5}$.
Vérification : $\\Omega$ est bien le milieu de $[AB]$ et $AB = \\sqrt{16 + 4} = 2\\sqrt{5}$, donc le rayon vaut $\\frac{AB}{2} = \\sqrt{5}$.

**3.** $\\overrightarrow{\\Omega A}\\begin{pmatrix} -2 \\\\ -1 \\end{pmatrix}$. $M(x ; y) \\in T \\iff \\overrightarrow{AM} \\cdot \\overrightarrow{\\Omega A} = 0 \\iff -2(x + 1) - (y - 2) = 0 \\iff -2x - y = 0$.
$T : 2x + y = 0$ (vérification : $2 \\times (-1) + 2 = 0$).` },
    { id: "1G3-ds-05", title: "Théorème de la médiane", difficulty: 3, points: 6,
      statement: `On rappelle le théorème de la médiane : si $I$ est le milieu de $[BC]$, alors $AB^2 + AC^2 = 2AI^2 + \\frac{BC^2}{2}$.

1. Démontrer ce théorème en écrivant $\\overrightarrow{AB} = \\overrightarrow{AI} + \\overrightarrow{IB}$ et $\\overrightarrow{AC} = \\overrightarrow{AI} + \\overrightarrow{IC}$.
2. Dans un triangle $ABC$ avec $AB = 6$, $AC = 8$ et $BC = 10$, calculer la longueur de la médiane $AI$. Commenter le résultat.
3. Dans un triangle $ABC$ avec $AB = 7$, $AC = 5$ et $BC = 6$ :
 a) calculer la longueur de la médiane issue de $A$ ;
 b) calculer une mesure arrondie au dixième de degré de l'angle $\\widehat{ABC}$.`,
      solution: `**1.** $AB^2 = (\\overrightarrow{AI} + \\overrightarrow{IB})^2 = AI^2 + 2\\,\\overrightarrow{AI} \\cdot \\overrightarrow{IB} + IB^2$ et $AC^2 = AI^2 + 2\\,\\overrightarrow{AI} \\cdot \\overrightarrow{IC} + IC^2$.
Comme $I$ est le milieu de $[BC]$, $\\overrightarrow{IC} = -\\overrightarrow{IB}$ et $IB = IC = \\frac{BC}{2}$. En additionnant, les doubles produits s'annulent :
$AB^2 + AC^2 = 2AI^2 + 2 \\times \\frac{BC^2}{4} = 2AI^2 + \\frac{BC^2}{2}$.

**2.** $36 + 64 = 2AI^2 + 50 \\iff 2AI^2 = 50 \\iff AI = 5$.
Commentaire : $6^2 + 8^2 = 10^2$, le triangle est rectangle en $A$ ; on retrouve que dans un triangle rectangle, la médiane issue de l'angle droit mesure la moitié de l'hypoténuse ($A$ est sur le cercle de diamètre $[BC]$).

**3. a)** $49 + 25 = 2AI^2 + 18 \\iff 2AI^2 = 56 \\iff AI^2 = 28 \\iff AI = 2\\sqrt{7} \\approx 5{,}29$.

**b)** Al-Kashi : $AC^2 = AB^2 + BC^2 - 2 \\times AB \\times BC \\times \\cos\\widehat{ABC}$, donc
$$\\cos\\widehat{ABC} = \\frac{49 + 36 - 25}{2 \\times 7 \\times 6} = \\frac{60}{84} = \\frac{5}{7}, \\qquad \\widehat{ABC} \\approx 44{,}4^\\circ.$$` },
    { id: "1G3-ds-06", title: "Projeté orthogonal d'un point sur une droite", difficulty: 3, points: 6,
      statement: `Dans un repère orthonormé, on considère la droite $d$ d'équation $x - 2y + 3 = 0$ et le point $A(4 ; 1)$.

1. Vérifier que $A \\notin d$ et donner un vecteur normal $\\vec{n}$ à $d$.
2. Déterminer une équation cartésienne de la droite $\\Delta$ passant par $A$ et perpendiculaire à $d$.
3. En déduire les coordonnées du projeté orthogonal $H$ de $A$ sur $d$.
4. Calculer la distance $AH$. Justifier que c'est la plus petite distance entre $A$ et un point de $d$.`,
      solution: `**1.** $4 - 2 + 3 = 5 \\neq 0$ : $A \\notin d$. Un vecteur normal à $d$ est $\\vec{n}\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$.

**2.** $\\Delta$ est perpendiculaire à $d$ : $\\vec{n}$ est un vecteur directeur de $\\Delta$, donc $\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$ (orthogonal à $\\vec{n}$) est un vecteur normal à $\\Delta$.
$\\Delta : 2(x - 4) + 1(y - 1) = 0 \\iff 2x + y - 9 = 0$.

**3.** $H$ est l'intersection de $d$ et $\\Delta$ : $\\begin{cases} x - 2y + 3 = 0 \\\\ 2x + y - 9 = 0 \\end{cases}$.
De la première, $x = 2y - 3$ ; en remplaçant : $4y - 6 + y - 9 = 0 \\iff y = 3$, puis $x = 3$. Donc $H(3 ; 3)$.
Vérification : $3 - 6 + 3 = 0$ et $\\overrightarrow{AH}\\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$ est colinéaire à $\\vec{n}$.

**4.** $AH = \\sqrt{1 + 4} = \\sqrt{5}$.
Pour tout point $M$ de $d$, le triangle $AHM$ est rectangle en $H$ (ou $M = H$), donc par Pythagore $AM^2 = AH^2 + HM^2 \\geqslant AH^2$. $AH = \\sqrt{5}$ est la distance du point $A$ à la droite $d$.` },
    { id: "1G3-ds-07", title: "Lignes de niveau de MA·MB", difficulty: 4, points: 7,
      statement: `$A$ et $B$ sont deux points tels que $AB = 6$ ; $I$ est le milieu de $[AB]$.

1. Démontrer que pour tout point $M$ du plan, $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = MI^2 - 9$.
2. Déterminer l'ensemble $E_1$ des points $M$ tels que $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 16$.
3. Déterminer les ensembles $E_2$ et $E_3$ des points $M$ tels que $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = -9$, puis $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = -12$.
4. On se place dans un repère orthonormé où $A(-3 ; 0)$ et $B(3 ; 0)$. Retrouver par le calcul une équation de $E_1$.
5. Pour quelles valeurs du réel $k$ l'ensemble des points $M$ tels que $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = k$ est-il un cercle ?`,
      solution: `**1.** $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = (\\overrightarrow{MI} + \\overrightarrow{IA}) \\cdot (\\overrightarrow{MI} + \\overrightarrow{IB})$. Comme $\\overrightarrow{IB} = -\\overrightarrow{IA}$ :
$\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = (\\overrightarrow{MI} + \\overrightarrow{IA}) \\cdot (\\overrightarrow{MI} - \\overrightarrow{IA}) = MI^2 - IA^2 = MI^2 - 9$ (car $IA = 3$).

**2.** $MI^2 - 9 = 16 \\iff MI^2 = 25 \\iff MI = 5$ : $E_1$ est le cercle de centre $I$ et de rayon $5$.

**3.** $MI^2 - 9 = -9 \\iff MI = 0 \\iff M = I$ : $E_2 = \\{I\\}$.
$MI^2 - 9 = -12 \\iff MI^2 = -3$, impossible : $E_3 = \\varnothing$.

**4.** $\\overrightarrow{MA}\\begin{pmatrix} -3 - x \\\\ -y \\end{pmatrix}$, $\\overrightarrow{MB}\\begin{pmatrix} 3 - x \\\\ -y \\end{pmatrix}$ : $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = (-3 - x)(3 - x) + y^2 = x^2 - 9 + y^2$.
$x^2 + y^2 - 9 = 16 \\iff x^2 + y^2 = 25$ : cercle de centre $O = I$ et de rayon $5$.

**5.** $MI^2 = k + 9$ : c'est un cercle (de rayon $\\sqrt{k + 9}$) si et seulement si $k + 9 > 0$, soit $k > -9$. Pour $k = -9$ on obtient un point, pour $k < -9$ l'ensemble vide.` },
    { id: "1G3-ds-08", title: "Trajet d'un bateau", difficulty: 4, points: 7,
      statement: `Un bateau quitte le port $P$ et parcourt $12$ km en ligne droite jusqu'à une bouée $Q$. Il change alors de cap et parcourt $8$ km jusqu'à un point $R$, de sorte que $\\widehat{PQR} = 120^\\circ$.

1. Calculer la distance $PR$ (valeur exacte, puis arrondie au centième de km).
2. Calculer le cosinus de l'angle $\\widehat{QPR}$ et en déduire une mesure de cet angle arrondie au dixième de degré.
3. On admet que l'aire d'un triangle $ABC$ est $\\frac{1}{2} \\times AB \\times AC \\times \\sin\\widehat{BAC}$. Calculer l'aire du triangle $PQR$ (valeur exacte, puis arrondie au centième de km²).
4. En déduire la distance entre $Q$ et la droite $(PR)$, arrondie au centième.`,
      solution: `**1.** Al-Kashi dans $PQR$ : $PR^2 = PQ^2 + QR^2 - 2 \\times PQ \\times QR \\times \\cos 120^\\circ = 144 + 64 - 2 \\times 12 \\times 8 \\times \\left(-\\frac{1}{2}\\right) = 208 + 96 = 304$.
$PR = \\sqrt{304} = 4\\sqrt{19} \\approx 17{,}44$ km.

**2.** $QR^2 = PQ^2 + PR^2 - 2 \\times PQ \\times PR \\times \\cos\\widehat{QPR}$, donc
$$\\cos\\widehat{QPR} = \\frac{144 + 304 - 64}{2 \\times 12 \\times 4\\sqrt{19}} = \\frac{384}{96\\sqrt{19}} = \\frac{4}{\\sqrt{19}} \\approx 0{,}9177,$$
d'où $\\widehat{QPR} \\approx 23{,}4^\\circ$.

**3.** $\\mathcal{A} = \\frac{1}{2} \\times QP \\times QR \\times \\sin 120^\\circ = \\frac{1}{2} \\times 12 \\times 8 \\times \\frac{\\sqrt{3}}{2} = 24\\sqrt{3} \\approx 41{,}57$ km².

**4.** Si $h$ est la distance de $Q$ à $(PR)$, c'est la hauteur issue de $Q$ : $\\mathcal{A} = \\frac{PR \\times h}{2}$, donc
$$h = \\frac{2\\mathcal{A}}{PR} = \\frac{48\\sqrt{3}}{4\\sqrt{19}} = \\frac{12\\sqrt{3}}{\\sqrt{19}} \\approx 4{,}77 \\text{ km}.$$` }
  ],
  "1S1": [
    { id: "1S1-ds-01", title: "Tableau croisé et indépendance", difficulty: 1, points: 4,
      statement: `Dans un lycée, on interroge les $200$ élèves de Première sur leur choix d'option latin. Les résultats sont les suivants.

| | Latin | Pas de latin | Total |
|---|---|---|---|
| Filles | $30$ | $90$ | $120$ |
| Garçons | $20$ | $60$ | $80$ |
| Total | $50$ | $150$ | $200$ |

On choisit un élève au hasard. On note $F$ : « l'élève est une fille » et $L$ : « l'élève fait du latin ».

1. Calculer $P(L)$, $P(F \\cap L)$ et $P_F(L)$.
2. Calculer $P_L(F)$ et interpréter ce nombre par une phrase.
3. Les événements $F$ et $L$ sont-ils indépendants ? Justifier.`,
      solution: `**1.** $P(L) = \\frac{50}{200} = 0{,}25$ ; $P(F \\cap L) = \\frac{30}{200} = 0{,}15$ ; $P_F(L) = \\frac{P(F \\cap L)}{P(F)} = \\frac{30}{120} = 0{,}25$.

**2.** $P_L(F) = \\frac{30}{50} = 0{,}6$ : parmi les latinistes, $60\\,\\%$ sont des filles (probabilité qu'un élève soit une fille sachant qu'il fait du latin).

**3.** $P(F) \\times P(L) = 0{,}6 \\times 0{,}25 = 0{,}15 = P(F \\cap L)$ : $F$ et $L$ sont indépendants.
(De manière équivalente, $P_F(L) = P(L) = 0{,}25$ : savoir que l'élève est une fille ne modifie pas la probabilité qu'il fasse du latin.)` },
    { id: "1S1-ds-02", title: "Lecture d'un arbre pondéré", difficulty: 1, points: 4,
      statement: `On considère deux événements $A$ et $B$ d'une expérience aléatoire tels que $P(A) = 0{,}3$, $P_A(B) = 0{,}6$ et $P_{\\overline{A}}(B) = 0{,}2$.

1. Construire l'arbre pondéré correspondant (on complétera toutes les branches).
2. Calculer $P(A \\cap B)$ et $P(\\overline{A} \\cap B)$.
3. En déduire $P(B)$ en citant la propriété utilisée.
4. Calculer $P_B(A)$ (valeur exacte).`,
      solution: `**1.** Premier niveau : $A$ ($0{,}3$) et $\\overline{A}$ ($0{,}7$).
Après $A$ : $B$ ($0{,}6$) et $\\overline{B}$ ($0{,}4$). Après $\\overline{A}$ : $B$ ($0{,}2$) et $\\overline{B}$ ($0{,}8$).
(La somme des probabilités issues d'un même nœud vaut $1$.)

**2.** $P(A \\cap B) = P(A) \\times P_A(B) = 0{,}3 \\times 0{,}6 = 0{,}18$.
$P(\\overline{A} \\cap B) = 0{,}7 \\times 0{,}2 = 0{,}14$.

**3.** $A$ et $\\overline{A}$ forment une partition de l'univers ; d'après la formule des probabilités totales :
$P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = 0{,}18 + 0{,}14 = 0{,}32$.

**4.** $P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}18}{0{,}32} = \\frac{9}{16} = 0{,}5625$.` },
    { id: "1S1-ds-03", title: "Fiabilité d'un test de dépistage", difficulty: 2, points: 5,
      statement: `Une maladie touche $2\\,\\%$ d'une population. Un test de dépistage donne :
- un résultat positif pour $95\\,\\%$ des personnes malades ;
- un résultat positif pour $3\\,\\%$ des personnes non malades.

On choisit une personne au hasard ; on note $M$ : « la personne est malade » et $T$ : « le test est positif ».

1. Représenter la situation par un arbre pondéré.
2. Calculer $P(M \\cap T)$, puis montrer que $P(T) = 0{,}0484$.
3. Une personne a un test positif. Quelle est la probabilité qu'elle soit malade ? (arrondir au centième)
4. Commenter ce résultat. Calculer également la probabilité qu'une personne ayant un test négatif soit malade (arrondir à $10^{-4}$).`,
      solution: `**1.** $M$ ($0{,}02$) puis $T$ ($0{,}95$), $\\overline{T}$ ($0{,}05$) ; $\\overline{M}$ ($0{,}98$) puis $T$ ($0{,}03$), $\\overline{T}$ ($0{,}97$).

**2.** $P(M \\cap T) = 0{,}02 \\times 0{,}95 = 0{,}019$ ; $P(\\overline{M} \\cap T) = 0{,}98 \\times 0{,}03 = 0{,}0294$.
Probabilités totales : $P(T) = 0{,}019 + 0{,}0294 = 0{,}0484$.

**3.** $P_T(M) = \\frac{P(M \\cap T)}{P(T)} = \\frac{0{,}019}{0{,}0484} \\approx 0{,}39$.

**4.** Même avec un test positif, la personne n'a qu'environ $39\\,\\%$ de chances d'être malade : la maladie étant rare, les faux positifs (issus des $98\\,\\%$ de non-malades) sont plus nombreux que les vrais positifs. Un second test est nécessaire pour confirmer.
$P(\\overline{T}) = 1 - 0{,}0484 = 0{,}9516$ et $P(M \\cap \\overline{T}) = 0{,}02 \\times 0{,}05 = 0{,}001$, donc $P_{\\overline{T}}(M) = \\frac{0{,}001}{0{,}9516} \\approx 0{,}0011$ : un test négatif est très rassurant.` },
    { id: "1S1-ds-04", title: "Prouver ou réfuter une indépendance", difficulty: 2, points: 5,
      statement: `1. $A$ et $B$ sont deux événements tels que $P(A) = 0{,}4$, $P(B) = 0{,}5$ et $P(A \\cup B) = 0{,}7$.
 a) Calculer $P(A \\cap B)$.
 b) Les événements $A$ et $B$ sont-ils indépendants ?
 c) Calculer $P(\\overline{A} \\cap B)$ ; les événements $\\overline{A}$ et $B$ sont-ils indépendants ?
2. On lance un dé équilibré à six faces. On considère les événements $A$ : « le résultat est pair », $B$ : « le résultat est supérieur ou égal à $5$ » et $C$ : « le résultat est inférieur ou égal à $3$ ».
 a) $A$ et $B$ sont-ils indépendants ?
 b) $A$ et $C$ sont-ils indépendants ?`,
      solution: `**1. a)** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, donc $P(A \\cap B) = 0{,}4 + 0{,}5 - 0{,}7 = 0{,}2$.

**b)** $P(A) \\times P(B) = 0{,}4 \\times 0{,}5 = 0{,}2 = P(A \\cap B)$ : $A$ et $B$ sont indépendants.

**c)** $P(\\overline{A} \\cap B) = P(B) - P(A \\cap B) = 0{,}5 - 0{,}2 = 0{,}3$ et $P(\\overline{A}) \\times P(B) = 0{,}6 \\times 0{,}5 = 0{,}3$ : $\\overline{A}$ et $B$ sont indépendants (ce qui est conforme à la propriété : si $A$ et $B$ sont indépendants, $\\overline{A}$ et $B$ le sont aussi).

**2.** Situation d'équiprobabilité sur $\\{1, 2, 3, 4, 5, 6\\}$.

**a)** $A = \\{2 ; 4 ; 6\\}$, $B = \\{5 ; 6\\}$, $A \\cap B = \\{6\\}$. $P(A) \\times P(B) = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6} = P(A \\cap B)$ : indépendants.

**b)** $C = \\{1 ; 2 ; 3\\}$, $A \\cap C = \\{2\\}$. $P(A) \\times P(C) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4} \\neq \\frac{1}{6} = P(A \\cap C)$ : $A$ et $C$ ne sont pas indépendants.` },
    { id: "1S1-ds-05", title: "Deux urnes et une pièce", difficulty: 3, points: 6,
      statement: `On dispose d'une urne $U_1$ contenant $3$ boules rouges et $2$ bleues, et d'une urne $U_2$ contenant $1$ boule rouge et $4$ bleues. On lance une pièce équilibrée : si elle tombe sur Pile, on choisit $U_1$, sinon $U_2$. On tire alors une boule dans l'urne choisie.

1. Construire un arbre pondéré et calculer la probabilité d'obtenir une boule rouge.
2. On a obtenu une boule rouge. Quelle est la probabilité qu'elle provienne de $U_1$ ?
3. On modifie l'expérience : après avoir choisi l'urne, on y effectue deux tirages successifs **avec remise**. On note $R_1$ et $R_2$ les événements « la première (resp. la seconde) boule est rouge ».
 a) Calculer $P(R_1 \\cap R_2)$.
 b) Justifier que $P(R_1) = P(R_2) = 0{,}4$.
 c) Les événements $R_1$ et $R_2$ sont-ils indépendants ? Expliquer pourquoi, alors que les tirages sont avec remise.`,
      solution: `**1.** Arbre : $U_1$ ($0{,}5$) puis $R$ ($0{,}6$), $\\overline{R}$ ($0{,}4$) ; $U_2$ ($0{,}5$) puis $R$ ($0{,}2$), $\\overline{R}$ ($0{,}8$).
$P(R) = 0{,}5 \\times 0{,}6 + 0{,}5 \\times 0{,}2 = 0{,}3 + 0{,}1 = 0{,}4$.

**2.** $P_R(U_1) = \\frac{P(U_1 \\cap R)}{P(R)} = \\frac{0{,}3}{0{,}4} = 0{,}75$.

**3. a)** Une fois l'urne choisie, les deux tirages avec remise sont identiques et indépendants :
$P(R_1 \\cap R_2) = 0{,}5 \\times 0{,}6^2 + 0{,}5 \\times 0{,}2^2 = 0{,}18 + 0{,}02 = 0{,}2$.

**b)** Chaque tirage, considéré seul, se déroule comme dans la question 1 : $P(R_1) = P(R_2) = 0{,}5 \\times 0{,}6 + 0{,}5 \\times 0{,}2 = 0{,}4$.

**c)** $P(R_1) \\times P(R_2) = 0{,}16 \\neq 0{,}2$ : $R_1$ et $R_2$ ne sont pas indépendants.
Explication : obtenir une boule rouge au premier tirage rend plus probable d'avoir choisi $U_1$ ($P_{R_1}(U_1) = 0{,}75$), qui contient plus de rouges ; cela augmente la probabilité d'un second rouge : $P_{R_1}(R_2) = \\frac{0{,}2}{0{,}4} = 0{,}5 > 0{,}4$.` },
    { id: "1S1-ds-06", title: "Trois machines et des pièces défectueuses", difficulty: 3, points: 6,
      statement: `Une usine fabrique des pièces sur trois machines : $M_1$ produit $50\\,\\%$ des pièces, $M_2$ en produit $30\\,\\%$ et $M_3$ le reste. Les taux de pièces défectueuses sont de $2\\,\\%$ pour $M_1$, $3\\,\\%$ pour $M_2$ et $5\\,\\%$ pour $M_3$. On prélève une pièce au hasard dans la production ; on note $D$ : « la pièce est défectueuse ».

1. Construire un arbre pondéré décrivant la situation.
2. Calculer la probabilité que la pièce provienne de $M_3$ et soit défectueuse.
3. Montrer que $P(D) = 0{,}029$.
4. La pièce prélevée est défectueuse. Quelle est la probabilité qu'elle provienne de $M_3$ ? (arrondir au millième) Comparer avec la part de $M_3$ dans la production.
5. Le responsable affirme : « Plus de la moitié des pièces défectueuses viennent de $M_1$. » A-t-il raison ?`,
      solution: `**1.** Premier niveau : $M_1$ ($0{,}5$), $M_2$ ($0{,}3$), $M_3$ ($0{,}2$). Second niveau : $D$ ($0{,}02$ / $0{,}03$ / $0{,}05$) et $\\overline{D}$ ($0{,}98$ / $0{,}97$ / $0{,}95$).

**2.** $P(M_3 \\cap D) = 0{,}2 \\times 0{,}05 = 0{,}01$.

**3.** Les événements $M_1$, $M_2$, $M_3$ forment une partition de l'univers ; formule des probabilités totales :
$P(D) = 0{,}5 \\times 0{,}02 + 0{,}3 \\times 0{,}03 + 0{,}2 \\times 0{,}05 = 0{,}01 + 0{,}009 + 0{,}01 = 0{,}029$.

**4.** $P_D(M_3) = \\frac{0{,}01}{0{,}029} = \\frac{10}{29} \\approx 0{,}345$. $M_3$ ne fabrique que $20\\,\\%$ des pièces mais environ $34{,}5\\,\\%$ des pièces défectueuses : c'est la machine la moins fiable.

**5.** $P_D(M_1) = \\frac{0{,}01}{0{,}029} = \\frac{10}{29} \\approx 0{,}345 < 0{,}5$. Il a tort : environ $34{,}5\\,\\%$ seulement des pièces défectueuses viennent de $M_1$.` },
    { id: "1S1-ds-07", title: "Prévisions météorologiques", difficulty: 4, points: 7,
      statement: `Dans une région, on observe que :
- si une journée est ensoleillée, le lendemain est ensoleillé avec une probabilité de $0{,}8$ ;
- si une journée est pluvieuse, le lendemain est ensoleillé avec une probabilité de $0{,}4$.

Chaque journée est soit ensoleillée, soit pluvieuse. Lundi est ensoleillé.

1. À l'aide d'un arbre, calculer la probabilité que mercredi soit ensoleillé.
2. Mercredi est ensoleillé. Quelle est la probabilité que mardi ait été pluvieux ?
3. On note $p_n$ la probabilité que le $n$-ième jour après lundi soit ensoleillé ($p_0 = 1$). Montrer que $p_{n+1} = 0{,}4p_n + 0{,}4$.
4. Déterminer le réel $\\ell$ tel que $\\ell = 0{,}4\\ell + 0{,}4$, puis montrer que $p_{n+1} - \\ell = 0{,}4(p_n - \\ell)$. Que peut-on conjecturer sur $p_n$ à long terme ?`,
      solution: `**1.** On note $S_1$, $S_2$ les événements « mardi (resp. mercredi) ensoleillé ». Mardi : $S_1$ ($0{,}8$), $\\overline{S_1}$ ($0{,}2$). Puis :
$P(S_2) = P(S_1 \\cap S_2) + P(\\overline{S_1} \\cap S_2) = 0{,}8 \\times 0{,}8 + 0{,}2 \\times 0{,}4 = 0{,}64 + 0{,}08 = 0{,}72$.

**2.** $P_{S_2}(\\overline{S_1}) = \\frac{P(\\overline{S_1} \\cap S_2)}{P(S_2)} = \\frac{0{,}08}{0{,}72} = \\frac{1}{9} \\approx 0{,}111$.

**3.** Probabilités totales avec la partition « jour $n$ ensoleillé / pluvieux » :
$p_{n+1} = 0{,}8p_n + 0{,}4(1 - p_n) = 0{,}8p_n + 0{,}4 - 0{,}4p_n = 0{,}4p_n + 0{,}4$.
(Vérification : $p_1 = 0{,}8$, $p_2 = 0{,}32 + 0{,}4 = 0{,}72$.)

**4.** $\\ell = 0{,}4\\ell + 0{,}4 \\iff 0{,}6\\ell = 0{,}4 \\iff \\ell = \\frac{2}{3}$.
$p_{n+1} - \\frac{2}{3} = 0{,}4p_n + 0{,}4 - \\frac{2}{3} = 0{,}4p_n - \\frac{4}{15} = 0{,}4\\left(p_n - \\frac{2}{3}\\right)$ (car $0{,}4 \\times \\frac{2}{3} = \\frac{4}{15}$).
La suite $\\left(p_n - \\frac{2}{3}\\right)$ est géométrique de raison $0{,}4$ : $p_n = \\frac{2}{3} + \\frac{1}{3} \\times 0{,}4^n$. Comme $0{,}4^n$ se rapproche de $0$, on conjecture qu'à long terme la probabilité qu'un jour soit ensoleillé se stabilise vers $\\frac{2}{3}$, quel que soit le temps de départ.` },
    { id: "1S1-ds-08", title: "Un détecteur de fraude", difficulty: 4, points: 7,
      statement: `Une banque utilise un logiciel pour repérer les opérations frauduleuses. On note $p$ la proportion d'opérations frauduleuses ($0 < p < 1$). Le logiciel déclenche une alerte pour $90\\,\\%$ des opérations frauduleuses et, par erreur, pour $5\\,\\%$ des opérations honnêtes. On choisit une opération au hasard ; on note $F$ : « l'opération est frauduleuse » et $A$ : « une alerte est déclenchée ».

1. Montrer que $P(A) = 0{,}05 + 0{,}85p$.
2. Exprimer $P_A(F)$ en fonction de $p$.
3. Dans cette question, $p = 0{,}01$. Calculer $P_A(F)$ (arrondir au centième) et interpréter.
4. Déterminer les valeurs de $p$ pour lesquelles une alerte correspond à une fraude avec une probabilité au moins égale à $0{,}5$.
5. Les événements $F$ et $A$ peuvent-ils être indépendants ? Justifier.`,
      solution: `**1.** Probabilités totales : $P(A) = P(F) \\times P_F(A) + P(\\overline{F}) \\times P_{\\overline{F}}(A) = 0{,}9p + 0{,}05(1 - p) = 0{,}05 + 0{,}85p$.

**2.** $P_A(F) = \\frac{P(F \\cap A)}{P(A)} = \\frac{0{,}9p}{0{,}05 + 0{,}85p}$.

**3.** $P_A(F) = \\frac{0{,}009}{0{,}05 + 0{,}0085} = \\frac{0{,}009}{0{,}0585} \\approx 0{,}15$. Seulement $15\\,\\%$ environ des alertes correspondent à de vraies fraudes : la plupart des alertes sont de fausses alertes, car les opérations honnêtes sont très majoritaires.

**4.** Comme $0{,}05 + 0{,}85p > 0$ :
$\\frac{0{,}9p}{0{,}05 + 0{,}85p} \\geqslant 0{,}5 \\iff 0{,}9p \\geqslant 0{,}025 + 0{,}425p \\iff 0{,}475p \\geqslant 0{,}025 \\iff p \\geqslant \\frac{0{,}025}{0{,}475} = \\frac{1}{19}$.
Il faut $p \\geqslant \\frac{1}{19} \\approx 0{,}053$, c'est-à-dire au moins $5{,}3\\,\\%$ environ d'opérations frauduleuses.

**5.** $F$ et $A$ seraient indépendants si $P_F(A) = P(A)$, soit $0{,}9 = 0{,}05 + 0{,}85p \\iff p = 1$, ce qui est exclu. Ils ne sont donc jamais indépendants : savoir qu'une opération est frauduleuse augmente nettement la probabilité d'alerte (le logiciel apporte de l'information).` }
  ],
  "1S2": [
    { id: "1S2-ds-01", title: "Exploiter une loi de probabilité", difficulty: 1, points: 4,
      statement: `Une variable aléatoire $X$ a la loi de probabilité suivante, où $a$ est un réel.

| $x_i$ | $-2$ | $0$ | $3$ | $5$ |
|---|---|---|---|---|
| $P(X = x_i)$ | $0{,}2$ | $0{,}3$ | $a$ | $0{,}1$ |

1. Déterminer $a$.
2. Calculer $P(X > 0)$ et $P(X \\leqslant 3)$.
3. Calculer l'espérance $E(X)$.
4. Calculer la variance $V(X)$, puis l'écart-type $\\sigma(X)$ arrondi au centième.`,
      solution: `**1.** La somme des probabilités vaut $1$ : $0{,}2 + 0{,}3 + a + 0{,}1 = 1$, donc $a = 0{,}4$.

**2.** $P(X > 0) = P(X = 3) + P(X = 5) = 0{,}4 + 0{,}1 = 0{,}5$.
$P(X \\leqslant 3) = 1 - P(X = 5) = 0{,}9$.

**3.** $E(X) = -2 \\times 0{,}2 + 0 \\times 0{,}3 + 3 \\times 0{,}4 + 5 \\times 0{,}1 = -0{,}4 + 1{,}2 + 0{,}5 = 1{,}3$.

**4.** $E(X^2) = 4 \\times 0{,}2 + 0 + 9 \\times 0{,}4 + 25 \\times 0{,}1 = 0{,}8 + 3{,}6 + 2{,}5 = 6{,}9$.
Formule de König-Huygens : $V(X) = E(X^2) - E(X)^2 = 6{,}9 - 1{,}69 = 5{,}21$.
$\\sigma(X) = \\sqrt{5{,}21} \\approx 2{,}28$.` },
    { id: "1S2-ds-02", title: "Un jeu de dé est-il équitable ?", difficulty: 1, points: 4,
      statement: `Pour jouer, on paie $1$ €, puis on lance un dé équilibré à six faces. Si on obtient $6$, on reçoit $a$ euros ($a > 0$) ; sinon on ne reçoit rien. On note $G$ le gain algébrique du joueur (gain reçu moins mise).

1. Dans cette question, $a = 4$. Donner la loi de probabilité de $G$ et calculer $E(G)$. Interpréter.
2. Exprimer $E(G)$ en fonction de $a$.
3. Pour quelle valeur de $a$ le jeu est-il équitable ?
4. L'organisateur veut gagner en moyenne $0{,}25$ € par partie. Quelle valeur de $a$ doit-il choisir ?`,
      solution: `**1.** Si on obtient $6$, $G = 4 - 1 = 3$ ; sinon $G = -1$.

| $g_i$ | $-1$ | $3$ |
|---|---|---|
| $P(G = g_i)$ | $\\frac{5}{6}$ | $\\frac{1}{6}$ |

$E(G) = -\\frac{5}{6} + \\frac{3}{6} = -\\frac{2}{6} = -\\frac{1}{3} \\approx -0{,}33$ : sur un grand nombre de parties, le joueur perd en moyenne environ $0{,}33$ € par partie.

**2.** $G$ prend les valeurs $a - 1$ (probabilité $\\frac{1}{6}$) et $-1$ (probabilité $\\frac{5}{6}$) :
$E(G) = \\frac{a - 1}{6} - \\frac{5}{6} = \\frac{a - 6}{6}$.

**3.** Le jeu est équitable si $E(G) = 0$, soit $a = 6$.

**4.** L'organisateur gagne en moyenne $0{,}25$ € si $E(G) = -0{,}25$ : $\\frac{a - 6}{6} = -0{,}25 \\iff a - 6 = -1{,}5 \\iff a = 4{,}5$ €.` },
    { id: "1S2-ds-03", title: "Le plus grand de deux dés", difficulty: 2, points: 5,
      statement: `On lance deux dés équilibrés à six faces et on note $X$ le plus grand des deux nombres obtenus (si les deux dés donnent le même nombre, $X$ est ce nombre).

1. À l'aide d'un tableau à double entrée, déterminer la loi de probabilité de $X$.
2. Vérifier que pour tout $k \\in \\{1, \\dots, 6\\}$, $P(X = k) = \\frac{2k - 1}{36}$.
3. Calculer $E(X)$ (valeur exacte puis arrondie au centième).
4. Calculer $P(X \\geqslant 4)$.`,
      solution: `**1.** Les $36$ issues (couples) sont équiprobables. En remplissant le tableau avec le maximum de chaque couple, on compte :

| $k$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $P(X = k)$ | $\\frac{1}{36}$ | $\\frac{3}{36}$ | $\\frac{5}{36}$ | $\\frac{7}{36}$ | $\\frac{9}{36}$ | $\\frac{11}{36}$ |

**2.** $X = k$ lorsque les deux dés sont $\\leqslant k$ et l'un au moins vaut $k$ : il y a $k^2$ couples avec deux résultats $\\leqslant k$, dont $(k-1)^2$ avec deux résultats $\\leqslant k - 1$. D'où $k^2 - (k-1)^2 = 2k - 1$ couples, et $P(X = k) = \\frac{2k-1}{36}$, ce qui est cohérent avec le tableau.

**3.** $E(X) = \\frac{1 \\times 1 + 2 \\times 3 + 3 \\times 5 + 4 \\times 7 + 5 \\times 9 + 6 \\times 11}{36} = \\frac{1 + 6 + 15 + 28 + 45 + 66}{36} = \\frac{161}{36} \\approx 4{,}47$.

**4.** $P(X \\geqslant 4) = \\frac{7 + 9 + 11}{36} = \\frac{27}{36} = \\frac{3}{4}$.
(Autre méthode : $P(X \\leqslant 3) = \\frac{9}{36}$, deux dés $\\leqslant 3$, donc $P(X \\geqslant 4) = 1 - \\frac{1}{4} = \\frac{3}{4}$.)` },
    { id: "1S2-ds-04", title: "Transformations affines d'une variable aléatoire", difficulty: 2, points: 5,
      statement: `On rappelle que pour tous réels $a$ et $b$, $E(aX + b) = aE(X) + b$ et $V(aX + b) = a^2V(X)$.

1. Les notes $X$ d'un contrôle ont pour moyenne $E(X) = 12$ et pour écart-type $\\sigma(X) = 3$. Le professeur décide de transformer chaque note $x$ en $1{,}5x - 2$. On note $Y = 1{,}5X - 2$.
 a) Calculer $E(Y)$, $V(Y)$ et $\\sigma(Y)$.
 b) Une note de $16$ devient-elle supérieure à $20$ ?
2. Dans un jeu, le nombre de jetons gagnés $J$ vérifie $E(J) = 2$ et $V(J) = 4$. Chaque jeton vaut $0{,}5$ € et la participation coûte $1$ €. On note $Z$ le gain algébrique en euros.
 a) Exprimer $Z$ en fonction de $J$.
 b) Calculer $E(Z)$ et $\\sigma(Z)$. Le jeu est-il équitable ?`,
      solution: `**1. a)** $E(Y) = 1{,}5 \\times 12 - 2 = 16$.
$V(X) = 3^2 = 9$, donc $V(Y) = 1{,}5^2 \\times 9 = 2{,}25 \\times 9 = 20{,}25$ et $\\sigma(Y) = |1{,}5| \\times 3 = 4{,}5$.

**b)** $1{,}5 \\times 16 - 2 = 22 > 20$ : oui, la transformation n'est pas adaptée aux bonnes notes (il faudrait plafonner à $20$).

**2. a)** Les jetons rapportent $0{,}5J$ euros, et on retire la mise : $Z = 0{,}5J - 1$.

**b)** $E(Z) = 0{,}5 \\times 2 - 1 = 0$ ; $V(Z) = 0{,}25 \\times 4 = 1$ et $\\sigma(Z) = 1$.
$E(Z) = 0$ : le jeu est équitable (le gain moyen sur un grand nombre de parties est nul), même si le gain varie d'une partie à l'autre (écart-type $1$ €).` },
    { id: "1S2-ds-05", title: "Tirages sans remise", difficulty: 3, points: 6,
      statement: `Une urne contient $3$ boules rouges et $5$ boules blanches, indiscernables au toucher. On tire successivement et **sans remise** deux boules. On note $X$ le nombre de boules rouges obtenues.

1. Construire un arbre pondéré décrivant l'expérience.
2. Déterminer la loi de probabilité de $X$ (fractions irréductibles).
3. Calculer $E(X)$ et interpréter.
4. Calculer $V(X)$ (valeur exacte).
5. Chaque boule rouge rapporte $4$ € et chaque boule blanche fait perdre $1$ €. Exprimer le gain $G$ en fonction de $X$, puis calculer $E(G)$.`,
      solution: `**1.** Premier tirage : $R$ ($\\frac{3}{8}$), $B$ ($\\frac{5}{8}$). Second tirage (il reste $7$ boules) : après $R$ : $R$ ($\\frac{2}{7}$), $B$ ($\\frac{5}{7}$) ; après $B$ : $R$ ($\\frac{3}{7}$), $B$ ($\\frac{4}{7}$).

**2.**
- $P(X = 2) = \\frac{3}{8} \\times \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}$ ;
- $P(X = 0) = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$ ;
- $P(X = 1) = \\frac{3}{8} \\times \\frac{5}{7} + \\frac{5}{8} \\times \\frac{3}{7} = \\frac{30}{56} = \\frac{15}{28}$.

(Vérification : $\\frac{10}{28} + \\frac{15}{28} + \\frac{3}{28} = 1$.)

**3.** $E(X) = 0 \\times \\frac{10}{28} + 1 \\times \\frac{15}{28} + 2 \\times \\frac{3}{28} = \\frac{21}{28} = \\frac{3}{4}$. En répétant l'expérience un grand nombre de fois, on obtient en moyenne $0{,}75$ boule rouge par tirage de deux boules.

**4.** $E(X^2) = \\frac{15}{28} + 4 \\times \\frac{3}{28} = \\frac{27}{28}$, donc $V(X) = \\frac{27}{28} - \\frac{9}{16} = \\frac{108 - 63}{112} = \\frac{45}{112} \\approx 0{,}40$.

**5.** Avec $X$ boules rouges et $2 - X$ blanches : $G = 4X - (2 - X) = 5X - 2$.
$E(G) = 5E(X) - 2 = \\frac{15}{4} - 2 = \\frac{7}{4} = 1{,}75$ €.` },
    { id: "1S2-ds-06", title: "Prime d'assurance", difficulty: 3, points: 6,
      statement: `Une compagnie d'assurance étudie un contrat annuel. D'après ses statistiques, pour un assuré :
- la probabilité d'un sinistre coûtant $1\\,000$ € est $0{,}05$ ;
- la probabilité d'un sinistre coûtant $5\\,000$ € est $0{,}01$ ;
- sinon, il n'y a aucun sinistre (on suppose au plus un sinistre par an).

On note $C$ le coût annuel (en €) des sinistres pour un assuré.

1. Donner la loi de probabilité de $C$ et calculer $E(C)$.
2. Calculer $\\sigma(C)$, arrondi à l'euro. Commenter.
3. L'assurance fait payer une prime annuelle de $p$ euros. On note $B = p - C$ le bénéfice de l'assurance sur un contrat. Exprimer $E(B)$ en fonction de $p$.
4. Quelle prime doit-elle fixer pour gagner en moyenne $20$ € par contrat ? Avec $10\\,000$ contrats, quel bénéfice total peut-elle espérer ?`,
      solution: `**1.**

| $c_i$ | $0$ | $1\\,000$ | $5\\,000$ |
|---|---|---|---|
| $P(C = c_i)$ | $0{,}94$ | $0{,}05$ | $0{,}01$ |

$E(C) = 0 + 1\\,000 \\times 0{,}05 + 5\\,000 \\times 0{,}01 = 50 + 50 = 100$ €.

**2.** $E(C^2) = 10^6 \\times 0{,}05 + 25 \\times 10^6 \\times 0{,}01 = 50\\,000 + 250\\,000 = 300\\,000$.
$V(C) = 300\\,000 - 100^2 = 290\\,000$ et $\\sigma(C) = \\sqrt{290\\,000} \\approx 539$ €.
L'écart-type est grand devant l'espérance : le coût est très variable d'un assuré à l'autre (le plus souvent nul, parfois très élevé). C'est la raison d'être de l'assurance : mutualiser ce risque.

**3.** $E(B) = E(p - C) = p - E(C) = p - 100$.

**4.** $p - 100 = 20 \\iff p = 120$ €. Sur $10\\,000$ contrats, le bénéfice moyen attendu est d'environ $10\\,000 \\times 20 = 200\\,000$ € (interprétation de l'espérance comme moyenne sur un grand nombre de contrats).` },
    { id: "1S2-ds-07", title: "Concevoir un jeu équitable", difficulty: 4, points: 7,
      statement: `Une urne contient $2$ boules rouges et $n$ boules blanches ($n$ entier, $n \\geqslant 1$). Un joueur tire une boule au hasard : s'il obtient une boule rouge, il gagne $9$ € ; sinon il perd $3$ €. On note $X$ le gain algébrique du joueur.

1. Déterminer la loi de $X$ en fonction de $n$.
2. Montrer que $E(X) = \\frac{18 - 3n}{n + 2}$.
3. Pour quelle valeur de $n$ le jeu est-il équitable ? Pour quelles valeurs est-il favorable au joueur ?
4. Dans le cas $n = 6$, calculer $V(X)$ et $\\sigma(X)$ (valeur exacte).
5. L'organisateur garde $n = 6$ mais veut un jeu où le joueur perd en moyenne $1$ €, en modifiant seulement le gain $g$ attribué à une boule rouge. Déterminer $g$.`,
      solution: `**1.** Il y a $n + 2$ boules équiprobables : $P(X = 9) = \\frac{2}{n + 2}$ et $P(X = -3) = \\frac{n}{n + 2}$.

**2.** $E(X) = 9 \\times \\frac{2}{n + 2} - 3 \\times \\frac{n}{n + 2} = \\frac{18 - 3n}{n + 2}$.

**3.** Équitable $\\iff E(X) = 0 \\iff 18 - 3n = 0 \\iff n = 6$.
Favorable au joueur $\\iff E(X) > 0 \\iff 18 - 3n > 0$ (car $n + 2 > 0$) $\\iff n < 6$, soit $n \\in \\{1 ; 2 ; 3 ; 4 ; 5\\}$.

**4.** Pour $n = 6$ : $P(X = 9) = \\frac{1}{4}$, $P(X = -3) = \\frac{3}{4}$, $E(X) = 0$.
$V(X) = E(X^2) - 0^2 = 81 \\times \\frac{1}{4} + 9 \\times \\frac{3}{4} = \\frac{81 + 27}{4} = 27$, d'où $\\sigma(X) = \\sqrt{27} = 3\\sqrt{3} \\approx 5{,}20$ €.

**5.** $E(X) = \\frac{g}{4} - \\frac{9}{4} = -1 \\iff g - 9 = -4 \\iff g = 5$ €.` },
    { id: "1S2-ds-08", title: "Concours de tir à l'arc", difficulty: 4, points: 7,
      statement: `Un archer touche la cible avec une probabilité de $0{,}4$ à chaque tir, les tirs étant indépendants. Il tire jusqu'à toucher la cible, avec au plus $3$ tirs. Il marque $10$ points s'il touche au premier tir, $6$ points au deuxième, $2$ points au troisième, et perd $4$ points s'il ne touche jamais. On note $Y$ le nombre de points obtenus.

1. Construire un arbre et déterminer la loi de probabilité de $Y$.
2. Calculer $E(Y)$.
3. Calculer $V(Y)$ et $\\sigma(Y)$ (arrondis au centième).
4. On note $N$ le nombre de tirs effectués. Déterminer la loi de $N$ et $E(N)$.
5. Un second archer obtient en moyenne $5$ points avec un écart-type de $8$ points. Comparer les deux archers.`,
      solution: `**1.** À chaque tir : touché ($0{,}4$) ou manqué ($0{,}6$), indépendamment.
- $P(Y = 10) = 0{,}4$ ;
- $P(Y = 6) = 0{,}6 \\times 0{,}4 = 0{,}24$ ;
- $P(Y = 2) = 0{,}6^2 \\times 0{,}4 = 0{,}144$ ;
- $P(Y = -4) = 0{,}6^3 = 0{,}216$.

(Somme : $0{,}4 + 0{,}24 + 0{,}144 + 0{,}216 = 1$.)

**2.** $E(Y) = 10 \\times 0{,}4 + 6 \\times 0{,}24 + 2 \\times 0{,}144 - 4 \\times 0{,}216 = 4 + 1{,}44 + 0{,}288 - 0{,}864 = 4{,}864$.

**3.** $E(Y^2) = 100 \\times 0{,}4 + 36 \\times 0{,}24 + 4 \\times 0{,}144 + 16 \\times 0{,}216 = 40 + 8{,}64 + 0{,}576 + 3{,}456 = 52{,}672$.
$V(Y) = 52{,}672 - 4{,}864^2 = 52{,}672 - 23{,}658\\,496 \\approx 29{,}01$ et $\\sigma(Y) \\approx 5{,}39$.

**4.** $N = 1$ si le premier tir touche : $0{,}4$ ; $N = 2$ : $0{,}24$ ; $N = 3$ dans tous les autres cas (troisième tir effectué, touché ou non) : $0{,}6^2 = 0{,}36$.
$E(N) = 0{,}4 + 2 \\times 0{,}24 + 3 \\times 0{,}36 = 0{,}4 + 0{,}48 + 1{,}08 = 1{,}96$ tir en moyenne.

**5.** Le second archer a une espérance légèrement supérieure ($5 > 4{,}864$) mais un écart-type nettement plus grand ($8 > 5{,}39$) : il marque un peu plus en moyenne mais de façon beaucoup plus irrégulière. Le premier archer est plus régulier.` }
  ],
  "1S3": [
    { id: "1S3-ds-01", title: "Manipuler une liste Python", difficulty: 1, points: 4,
      statement: `On exécute les instructions Python suivantes.
\`\`\`python
L = [3, 7, 2, 9]
L.append(5)
L[2] = 10
n = len(L)
a = L[0] + L[n - 1]
C = [k**2 for k in range(5)]
D = [x for x in L if x % 2 == 1]
\`\`\`
1. Donner le contenu de la liste \`L\` à la fin, ainsi que les valeurs de \`n\` et \`a\`.
2. Donner le contenu de la liste \`C\`.
3. Donner le contenu de la liste \`D\` et expliquer ce que fait l'instruction qui la crée.
4. Écrire une instruction qui crée, en compréhension, la liste des $10$ premiers multiples de $3$ (en commençant par $0$).`,
      solution: `**1.** Au départ \`L = [3, 7, 2, 9]\`. Après \`append(5)\` : \`[3, 7, 2, 9, 5]\`. Après \`L[2] = 10\` (l'indice $2$ est le troisième élément, car les indices commencent à $0$) : \`L = [3, 7, 10, 9, 5]\`.
\`n = 5\` (nombre d'éléments) et \`a = L[0] + L[4] = 3 + 5 = 8\`.

**2.** \`range(5)\` parcourt $0, 1, 2, 3, 4$ : \`C = [0, 1, 4, 9, 16]\`.

**3.** \`x % 2 == 1\` teste si \`x\` est impair (reste de la division par $2$ égal à $1$). On garde les éléments impairs de \`L\`, dans l'ordre : \`D = [3, 7, 9, 5]\`.

**4.** \`M = [3 * k for k in range(10)]\`, qui donne \`[0, 3, 6, 9, 12, 15, 18, 21, 24, 27]\`.` },
    { id: "1S3-ds-02", title: "Calculer les termes d'une suite récurrente", difficulty: 1, points: 4,
      statement: `On considère la suite $(u_n)$ définie par $u_0 = 2$ et $u_{n+1} = 3u_n - 1$ pour tout $n \\in \\mathbb{N}$.

1. Calculer $u_1$, $u_2$ et $u_3$.
2. Compléter la fonction Python suivante pour qu'elle renvoie $u_n$.
\`\`\`python
def terme(n):
    u = ...
    for k in range(...):
        u = ...
    return u
\`\`\`
3. Modifier cette fonction pour qu'elle renvoie la **liste** $[u_0, u_1, \\dots, u_n]$. Que renvoie l'appel avec $n = 3$ ?`,
      solution: `**1.** $u_1 = 3 \\times 2 - 1 = 5$ ; $u_2 = 3 \\times 5 - 1 = 14$ ; $u_3 = 3 \\times 14 - 1 = 41$.

**2.**
\`\`\`python
def terme(n):
    u = 2
    for k in range(n):
        u = 3 * u - 1
    return u
\`\`\`
La boucle s'exécute $n$ fois : partant de $u_0$, on obtient $u_n$.

**3.**
\`\`\`python
def liste_termes(n):
    u = 2
    L = [u]
    for k in range(n):
        u = 3 * u - 1
        L.append(u)
    return L
\`\`\`
L'appel \`liste_termes(3)\` renvoie \`[2, 5, 14, 41]\`.` },
    { id: "1S3-ds-03", title: "Algorithme de seuil", difficulty: 2, points: 5,
      statement: `Un lac contient $100$ tonnes de déchets. Chaque année, on retire $10\\,\\%$ des déchets présents, mais $5$ tonnes nouvelles sont déversées. On note $u_n$ la masse de déchets (en tonnes) au bout de $n$ années : $u_0 = 100$ et $u_{n+1} = 0{,}9u_n + 5$.

1. Calculer $u_1$ et $u_2$.
2. On admet que $(u_n)$ est décroissante et que $u_n = 50 + 50 \\times 0{,}9^n$. On veut savoir au bout de combien d'années la masse de déchets passera sous $60$ tonnes. Compléter le programme :
\`\`\`python
def seuil():
    n = 0
    u = 100
    while ...:
        u = ...
        n = ...
    return n
\`\`\`
3. Déterminer la valeur renvoyée en utilisant l'expression explicite et la calculatrice.
4. Peut-on remplacer $60$ par $50$ dans ce programme ? Justifier.`,
      solution: `**1.** $u_1 = 90 + 5 = 95$ ; $u_2 = 85{,}5 + 5 = 90{,}5$.

**2.**
\`\`\`python
def seuil():
    n = 0
    u = 100
    while u >= 60:
        u = 0.9 * u + 5
        n = n + 1
    return n
\`\`\`
Tant que la masse est encore supérieure ou égale à $60$, on passe à l'année suivante.

**3.** $u_n < 60 \\iff 50 \\times 0{,}9^n < 10 \\iff 0{,}9^n < 0{,}2$. À la calculatrice : $0{,}9^{15} \\approx 0{,}206$ et $0{,}9^{16} \\approx 0{,}185$. Comme $(0{,}9^n)$ est décroissante, le programme renvoie $16$ : la masse passe sous $60$ tonnes au bout de $16$ ans ($u_{16} \\approx 59{,}27$).

**4.** Non : $u_n = 50 + 50 \\times 0{,}9^n > 50$ pour tout $n$, donc la condition \`u >= 50\` resterait toujours vraie et la boucle ne s'arrêterait jamais (boucle infinie).` },
    { id: "1S3-ds-04", title: "Sommes et listes", difficulty: 2, points: 5,
      statement: `On considère la fonction Python suivante.
\`\`\`python
def somme(n):
    S = 0
    for k in range(1, n + 1):
        S = S + 1 / k
    return S
\`\`\`
1. Quelle somme cette fonction calcule-t-elle ? L'écrire avec des points de suspension.
2. Faire tourner la fonction « à la main » pour $n = 4$ en présentant un tableau de l'évolution de \`k\` et \`S\` (valeurs exactes sous forme de fractions).
3. Écrire une fonction \`somme2(n)\` qui renvoie $1^2 + 2^2 + \\dots + n^2$ en utilisant une liste en compréhension et la fonction \`sum\`.
4. Écrire une fonction qui renvoie la liste des sommes partielles $[S_1, S_2, \\dots, S_n]$ de la première somme.`,
      solution: `**1.** La fonction renvoie $S_n = 1 + \\frac{1}{2} + \\frac{1}{3} + \\dots + \\frac{1}{n}$ (\`range(1, n + 1)\` parcourt les entiers de $1$ à $n$).

**2.**

| \`k\` | — | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|
| \`S\` | $0$ | $1$ | $\\frac{3}{2}$ | $\\frac{11}{6}$ | $\\frac{25}{12}$ |

La fonction renvoie $\\frac{25}{12} \\approx 2{,}083$ (Python affiche une valeur décimale approchée).

**3.**
\`\`\`python
def somme2(n):
    return sum([k**2 for k in range(1, n + 1)])
\`\`\`

**4.**
\`\`\`python
def sommes_partielles(n):
    S = 0
    L = []
    for k in range(1, n + 1):
        S = S + 1 / k
        L.append(S)
    return L
\`\`\`` },
    { id: "1S3-ds-05", title: "Simuler des lancers de dés", difficulty: 3, points: 6,
      statement: `On rappelle que \`randint(a, b)\` (module \`random\`) renvoie un entier aléatoire entre \`a\` et \`b\` inclus.
\`\`\`python
from random import randint

def experience():
    d1 = randint(1, 6)
    d2 = randint(1, 6)
    return d1 + d2 == 7

def frequence(N):
    c = 0
    for i in range(N):
        if experience():
            c = c + 1
    return c / N
\`\`\`
1. Que renvoie la fonction \`experience\` ? Quel est son type ?
2. Que calcule \`frequence(N)\` ?
3. Calculer la probabilité théorique $p$ d'obtenir une somme égale à $7$ en lançant deux dés équilibrés.
4. Un élève obtient \`frequence(1000) = 0.172\`. Ce résultat est-il surprenant ? Que peut-on attendre pour \`frequence(100000)\` ?
5. Modifier le programme pour estimer la probabilité que la somme soit **supérieure ou égale à** $10$, puis calculer cette probabilité exactement.`,
      solution: `**1.** \`experience\` simule le lancer de deux dés et renvoie un **booléen** : \`True\` si la somme vaut $7$, \`False\` sinon.

**2.** \`frequence(N)\` répète $N$ fois l'expérience, compte dans \`c\` le nombre de succès et renvoie la fréquence d'apparition d'une somme égale à $7$.

**3.** Les $36$ couples sont équiprobables ; la somme vaut $7$ pour $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$, soit $6$ couples : $p = \\frac{6}{36} = \\frac{1}{6} \\approx 0{,}167$.

**4.** $0{,}172$ est proche de $0{,}167$ : l'écart s'explique par la fluctuation d'échantillonnage, il n'est pas surprenant (il est bien inférieur à $\\frac{1}{\\sqrt{1000}} \\approx 0{,}03$). D'après la loi des grands nombres, pour $N = 100\\,000$ on attend une fréquence encore plus proche de $\\frac{1}{6}$.

**5.** On remplace la dernière ligne de \`experience\` par \`return d1 + d2 >= 10\`.
Les couples favorables sont $(4,6), (5,5), (6,4)$ (somme $10$), $(5,6), (6,5)$ (somme $11$) et $(6,6)$ (somme $12$) : $6$ couples, donc la probabilité vaut aussi $\\frac{6}{36} = \\frac{1}{6}$.` },
    { id: "1S3-ds-06", title: "Méthode de balayage", difficulty: 3, points: 6,
      statement: `Soit $f$ la fonction définie sur $[0 ; 1]$ par $f(x) = x^3 + x - 1$.

1. Montrer que $f$ est strictement croissante sur $[0 ; 1]$ et calculer $f(0)$ et $f(1)$. On admet que l'équation $f(x) = 0$ a une unique solution $\\alpha$ dans $[0 ; 1]$.
2. On considère le programme suivant.
\`\`\`python
def f(x):
    return x**3 + x - 1

def balayage(pas):
    x = 0
    while f(x) < 0:
        x = x + pas
    return x - pas, x
\`\`\`
 a) Expliquer pourquoi la valeur \`x\` renvoyée en second vérifie $f(x) \\geqslant 0$, tandis que $f(x - \\text{pas}) < 0$.
 b) Déterminer, en calculant les images utiles, ce que renvoie \`balayage(0.1)\`.
3. Sans programme, en calculant $f(0{,}68)$ et $f(0{,}69)$, donner un encadrement de $\\alpha$ d'amplitude $0{,}01$.`,
      solution: `**1.** $f'(x) = 3x^2 + 1 > 0$ : $f$ est strictement croissante. $f(0) = -1 < 0$ et $f(1) = 1 > 0$.

**2. a)** La boucle continue tant que $f(x) < 0$ : elle s'arrête au premier $x$ (de la forme $k \\times \\text{pas}$) tel que $f(x) \\geqslant 0$. La valeur précédente $x - \\text{pas}$ vérifiait encore $f < 0$ (sinon la boucle se serait arrêtée avant). Comme $f$ est croissante, $\\alpha$ est entre ces deux valeurs.

**b)** $f(0{,}6) = 0{,}216 + 0{,}6 - 1 = -0{,}184 < 0$ et $f(0{,}7) = 0{,}343 + 0{,}7 - 1 = 0{,}043 > 0$ (et $f < 0$ pour les valeurs précédentes, $f$ étant croissante). Le programme renvoie environ \`(0.6, 0.7)\` (à des erreurs d'arrondi de la machine près) : $0{,}6 < \\alpha < 0{,}7$.

**3.** $f(0{,}68) = 0{,}314\\,432 + 0{,}68 - 1 = -0{,}005\\,568 < 0$ et $f(0{,}69) = 0{,}328\\,509 + 0{,}69 - 1 = 0{,}018\\,509 > 0$.
$f$ étant strictement croissante : $0{,}68 < \\alpha < 0{,}69$.` },
    { id: "1S3-ds-07", title: "Évolution d'une population", difficulty: 4, points: 7,
      statement: `Une ville compte $20\\,000$ habitants en 2025. Chaque année, $2\\,\\%$ des habitants quittent la ville et $300$ nouveaux habitants s'y installent. On note $p_n$ la population en $2025 + n$ ; ainsi $p_0 = 20\\,000$ et $p_{n+1} = 0{,}98p_n + 300$.

1. Écrire une fonction Python \`population(n)\` qui renvoie la liste $[p_0, p_1, \\dots, p_n]$. Donner le résultat (arrondi à l'unité) pour $n = 5$.
2. On pose $v_n = p_n - 15\\,000$. Montrer que $(v_n)$ est géométrique et en déduire $p_n$ en fonction de $n$.
3. Écrire une fonction \`annee_seuil()\` qui renvoie la première année où la population devient inférieure à $18\\,000$ habitants.
4. Déterminer cette année par le calcul (à l'aide de la calculatrice).
5. La population peut-elle descendre sous $15\\,000$ habitants ? Que se passe-t-il si l'on appelle une fonction de seuil avec $15\\,000$ ?`,
      solution: `**1.**
\`\`\`python
def population(n):
    p = 20000
    L = [p]
    for k in range(n):
        p = 0.98 * p + 300
        L.append(p)
    return L
\`\`\`
Pour $n = 5$, on obtient environ \`[20000, 19900, 19802, 19706, 19612, 19520]\`.

**2.** $v_{n+1} = p_{n+1} - 15\\,000 = 0{,}98p_n + 300 - 15\\,000 = 0{,}98p_n - 14\\,700 = 0{,}98(p_n - 15\\,000) = 0{,}98v_n$.
$(v_n)$ est géométrique de raison $0{,}98$, de premier terme $v_0 = 5\\,000$ : $p_n = 15\\,000 + 5\\,000 \\times 0{,}98^n$.

**3.**
\`\`\`python
def annee_seuil():
    n = 0
    p = 20000
    while p >= 18000:
        p = 0.98 * p + 300
        n = n + 1
    return 2025 + n
\`\`\`

**4.** $p_n < 18\\,000 \\iff 5\\,000 \\times 0{,}98^n < 3\\,000 \\iff 0{,}98^n < 0{,}6$. À la calculatrice : $0{,}98^{25} \\approx 0{,}603$ et $0{,}98^{26} \\approx 0{,}591$. Le plus petit $n$ est $26$ : la population passe sous $18\\,000$ habitants en $2051$ ($p_{26} \\approx 17\\,957$).

**5.** $5\\,000 \\times 0{,}98^n > 0$, donc $p_n > 15\\,000$ pour tout $n$ : la population diminue en se rapprochant de $15\\,000$ sans jamais l'atteindre. Avec une boucle \`while p >= 15000\`, la condition resterait toujours vraie : la boucle ne s'arrêterait jamais (boucle infinie). Il faut toujours s'assurer qu'un seuil sera effectivement franchi avant de programmer sa recherche.` },
    { id: "1S3-ds-08", title: "Estimer π par une méthode de Monte-Carlo", difficulty: 4, points: 7,
      statement: `On choisit au hasard un point $M(x ; y)$ dans le carré $[0 ; 1] \\times [0 ; 1]$, les coordonnées étant obtenues par \`random()\` (nombre aléatoire de $[0 ; 1[$).

1. On considère le quart de disque $Q$ formé des points du carré tels que $x^2 + y^2 \\leqslant 1$. Calculer l'aire de $Q$ et justifier que la probabilité que $M$ appartienne à $Q$ est $p = \\frac{\\pi}{4}$.
2. Compléter la fonction suivante pour qu'elle renvoie une estimation de $\\pi$ à partir de $N$ points.
\`\`\`python
from random import random

def estimation_pi(N):
    c = 0
    for i in range(N):
        x = random()
        y = random()
        if ...:
            c = ...
    return ...
\`\`\`
3. Pour $N = 10\\,000$, un élève obtient $c = 7\\,864$. Quelle estimation de $\\pi$ obtient-il ? Quel est l'écart avec $\\pi$ ?
4. On sait que, pour $N$ grand, la fréquence $f = \\frac{c}{N}$ vérifie $|f - p| \\leqslant \\frac{1}{\\sqrt{N}}$ dans au moins $95\\,\\%$ des cas environ. En déduire un intervalle dans lequel l'estimation de $\\pi$ se trouve avec une telle probabilité, pour $N = 10\\,000$.
5. Combien de points faudrait-il, d'après ce critère, pour que l'estimation de $\\pi$ soit à moins de $0{,}01$ de $\\pi$ dans environ $95\\,\\%$ des cas ?`,
      solution: `**1.** $Q$ est un quart du disque de centre $O$ et de rayon $1$ : son aire est $\\frac{\\pi \\times 1^2}{4} = \\frac{\\pi}{4}$. Le point étant choisi uniformément dans le carré d'aire $1$, la probabilité de tomber dans $Q$ est le rapport des aires : $p = \\frac{\\pi/4}{1} = \\frac{\\pi}{4}$.

**2.**
\`\`\`python
from random import random

def estimation_pi(N):
    c = 0
    for i in range(N):
        x = random()
        y = random()
        if x**2 + y**2 <= 1:
            c = c + 1
    return 4 * c / N
\`\`\`
La fréquence $\\frac{c}{N}$ estime $\\frac{\\pi}{4}$, donc $4 \\times \\frac{c}{N}$ estime $\\pi$.

**3.** $4 \\times \\frac{7\\,864}{10\\,000} = 3{,}1456$. Écart : $|3{,}1456 - \\pi| \\approx 0{,}004$.

**4.** $|f - p| \\leqslant \\frac{1}{100} = 0{,}01$, donc $|4f - \\pi| \\leqslant 0{,}04$ : l'estimation $4f$ appartient à $[\\pi - 0{,}04 ; \\pi + 0{,}04] \\approx [3{,}10 ; 3{,}18]$ dans environ $95\\,\\%$ des cas.

**5.** On veut $|4f - \\pi| \\leqslant 0{,}01$, garanti si $\\frac{4}{\\sqrt{N}} \\leqslant 0{,}01$, soit $\\sqrt{N} \\geqslant 400$, donc $N \\geqslant 160\\,000$ points. La précision progresse lentement : diviser l'erreur par $4$ demande $16$ fois plus de points.` }
  ]
});
