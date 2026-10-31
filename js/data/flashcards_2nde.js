/**
 * Flashcards complémentaires de Seconde — L'Établi des Maths
 * Programme de Seconde (BO n° 14 du 2 avril 2026). Chargé avec le niveau (index.html, level-bundles) ;
 * les cartes sont ajoutées aux flashcards des cours par MathsFlashcards.enrichCoursesWithExtras().
 */
window.MATHS_EXTRA_FLASHCARDS = window.MATHS_EXTRA_FLASHCARDS || {};
Object.assign(window.MATHS_EXTRA_FLASHCARDS, {
  "2N1": [
    {
      q: "Décomposer $360$ en produit de facteurs premiers.",
      a: "$360 = 2^3 \\times 3^2 \\times 5$ (on divise successivement par $2$, puis $3$, puis $5$)."
    },
    {
      q: "Comment rendre irréductible la fraction $\\frac{84}{126}$ à l'aide des facteurs premiers ?",
      a: "$84 = 2^2 \\times 3 \\times 7$ et $126 = 2 \\times 3^2 \\times 7$. On simplifie par les facteurs communs $2 \\times 3 \\times 7 = 42$ : $\\frac{84}{126} = \\frac{2}{3}$."
    },
    {
      q: "Démontrer que la somme de deux multiples d'un entier $a$ est un multiple de $a$.",
      a: "Si $m = ka$ et $n = k'a$ avec $k$, $k'$ entiers, alors $m + n = (k + k')a$, et $k + k'$ est un entier."
    },
    {
      q: "Vrai ou faux : la somme de deux nombres irrationnels est toujours irrationnelle ?",
      a: "**Faux** : $\\sqrt{2}$ et $-\\sqrt{2}$ sont irrationnels, mais leur somme vaut $0$, qui est rationnel."
    },
    {
      q: "Vrai ou faux : $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$ pour tous réels $a, b \\ge 0$ ?",
      a: "**Faux** : $\\sqrt{9 + 16} = \\sqrt{25} = 5$, alors que $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$."
    },
    {
      q: "Vrai ou faux : $\\sqrt{x^2} = x$ pour tout réel $x$ ?",
      a: "**Faux** : $\\sqrt{(-3)^2} = \\sqrt{9} = 3 \\neq -3$. L'égalité n'est vraie que pour $x \\ge 0$ (une racine carrée est toujours positive ou nulle)."
    },
    {
      q: "Quelle est la réciproque de « si $n$ est un multiple de $4$, alors $n$ est pair » ? Est-elle vraie ?",
      a: "Réciproque : « si $n$ est pair, alors $n$ est un multiple de $4$ ». Elle est **fausse** : contre-exemple $n = 6$, pair mais non multiple de $4$."
    },
    {
      q: "Soient $A = \\{1, 2, 3, 4\\}$ et $B = \\{3, 4, 5\\}$. Déterminer $A \\cap B$, $A \\cup B$ et $\\text{Card}(A \\cup B)$.",
      a: "$A \\cap B = \\{3, 4\\}$ (éléments communs), $A \\cup B = \\{1, 2, 3, 4, 5\\}$ (éléments de l'un ou de l'autre), donc $\\text{Card}(A \\cup B) = 5$."
    }
  ],
  "2N2": [
    {
      q: "Vrai ou faux : $(a + b)^2 = a^2 + b^2$ ?",
      a: "**Faux** : il manque le double produit, $(a + b)^2 = a^2 + 2ab + b^2$. Contre-exemple : $(1 + 2)^2 = 9$ mais $1^2 + 2^2 = 5$."
    },
    {
      q: "Calculer mentalement $101^2$ et $99 \\times 101$ à l'aide des identités remarquables.",
      a: "$101^2 = (100 + 1)^2 = 10\\,000 + 200 + 1 = 10\\,201$ ; $99 \\times 101 = (100 - 1)(100 + 1) = 10\\,000 - 1 = 9\\,999$."
    },
    {
      q: "Factoriser $(x + 2)(3x - 1) - (x + 2)(x + 5)$.",
      a: "Facteur commun $(x + 2)$ : $(x + 2)\\big[(3x - 1) - (x + 5)\\big] = (x + 2)(2x - 6) = 2(x + 2)(x - 3)$. Attention aux parenthèses après le signe $-$."
    },
    {
      q: "Factoriser $(2x + 1)^2 - 9$.",
      a: "C'est $a^2 - b^2$ avec $a = 2x + 1$ et $b = 3$ : $(2x + 1 - 3)(2x + 1 + 3) = (2x - 2)(2x + 4) = 4(x - 1)(x + 2)$."
    },
    {
      q: "Écrire $\\frac{1}{x} + \\frac{2}{x + 1}$ sous la forme d'un seul quotient, en précisant les valeurs interdites.",
      a: "Valeurs interdites : $0$ et $-1$. Au dénominateur commun $x(x + 1)$ : $\\frac{(x + 1) + 2x}{x(x + 1)} = \\frac{3x + 1}{x(x + 1)}$."
    },
    {
      q: "Vrai ou faux : $(-2)^4 = -2^4$ ?",
      a: "**Faux** : $(-2)^4 = 16$ alors que $-2^4 = -(2^4) = -16$. Sans parenthèses, la puissance ne porte que sur $2$."
    },
    {
      q: "Simplifier $\\frac{(a^2)^3 \\times a^{-4}}{a^{-1}}$ pour $a \\neq 0$.",
      a: "$(a^2)^3 = a^6$, donc l'expression vaut $a^{6 - 4 - (-1)} = a^3$."
    },
    {
      q: "Vrai ou faux : $\\frac{a + b}{a} = 1 + b$ (avec $a \\neq 0$) ?",
      a: "**Faux** : $\\frac{a + b}{a} = \\frac{a}{a} + \\frac{b}{a} = 1 + \\frac{b}{a}$. Contre-exemple : $\\frac{2 + 4}{2} = 3$ et non $5$."
    }
  ],
  "2N3": [
    {
      q: "Déterminer $[-2 ; 5] \\cap \\, ]3 ; 8]$ et $[-2 ; 5] \\cup \\, ]3 ; 8]$.",
      a: "Intersection (réels communs aux deux) : $]3 ; 5]$. Réunion (réels de l'un ou de l'autre) : $[-2 ; 8]$."
    },
    {
      q: "Comment comparer deux réels $a$ et $b$ à l'aide de leur différence ?",
      a: "On étudie le signe de $a - b$ : si $a - b > 0$, alors $a > b$ ; si $a - b < 0$, alors $a < b$ ; si $a - b = 0$, alors $a = b$."
    },
    {
      q: "Vrai ou faux : si $a < b$, alors $-2a < -2b$ ?",
      a: "**Faux** : multiplier par un nombre strictement négatif **inverse** le sens : $-2a > -2b$. Exemple : $1 < 3$ mais $-2 > -6$."
    },
    {
      q: "Vrai ou faux : si $a < b$ et $c < d$, alors $a - c < b - d$ ?",
      a: "**Faux** : on peut additionner deux inégalités de même sens, pas les soustraire. Contre-exemple : $1 < 2$ et $0 < 5$, mais $1 - 0 = 1 > 2 - 5 = -3$."
    },
    {
      q: "Traduire $|x - 2| < 0{,}1$ à l'aide d'un intervalle.",
      a: "La distance entre $x$ et $2$ est strictement inférieure à $0{,}1$ : $x \\in \\, ]1{,}9 ; 2{,}1[$."
    },
    {
      q: "Donner un encadrement de $\\sqrt{2}$ d'amplitude $10^{-2}$.",
      a: "$1{,}41 < \\sqrt{2} < 1{,}42$, car $1{,}41^2 = 1{,}9881 < 2$ et $1{,}42^2 = 2{,}0164 > 2$."
    },
    {
      q: "Arrondir $0{,}004\\,736$ à deux chiffres significatifs.",
      a: "$0{,}0047$ : les zéros placés avant le premier chiffre non nul ne sont pas significatifs ; le chiffre suivant ($3$) est inférieur à $5$."
    }
  ],
  "2N4": [
    {
      q: "Comment résoudre une équation quotient $\\frac{A(x)}{B(x)} = 0$ ?",
      a: "On cherche les valeurs interdites ($B(x) = 0$), on résout $A(x) = 0$, puis on ne garde que les solutions qui ne sont pas interdites."
    },
    {
      q: "Résoudre $\\frac{x^2 - 4}{x - 2} = 0$.",
      a: "Valeur interdite : $2$. $x^2 - 4 = 0 \\iff (x - 2)(x + 2) = 0 \\iff x = 2$ ou $x = -2$. Comme $2$ est interdite, $S = \\{-2\\}$."
    },
    {
      q: "Vrai ou faux : l'équation $x^2 = 3x$ équivaut à $x = 3$ ?",
      a: "**Faux** : diviser par $x$ fait perdre la solution $0$. On factorise : $x^2 - 3x = 0 \\iff x(x - 3) = 0 \\iff x = 0$ ou $x = 3$."
    },
    {
      q: "Quel est le signe de $(x - 1)(3 - x)$ sur $]1 ; 3[$ ?",
      a: "Sur $]1 ; 3[$, $x - 1 > 0$ et $3 - x > 0$ : le produit est strictement **positif**. Il est strictement négatif sur $]-\\infty ; 1[$ et sur $]3 ; +\\infty[$."
    },
    {
      q: "Résoudre $\\frac{x + 2}{x - 1} \\le 0$.",
      a: "$x + 2$ s'annule en $-2$, $x - 1$ en $1$ (valeur interdite). Le quotient est négatif ou nul entre ces valeurs : $S = [-2 ; 1[$ (crochet ouvert en $1$)."
    },
    {
      q: "Vrai ou faux : pour tout réel $x$, $x^2 + 1 > 0$ ?",
      a: "**Vrai** : un carré est toujours positif ou nul, donc $x^2 + 1 \\ge 1 > 0$. L'équation $x^2 + 1 = 0$ n'a donc pas de solution réelle."
    },
    {
      q: "Le périmètre d'un rectangle dont la longueur est le double de la largeur vaut $36$ cm. Quelles sont ses dimensions ?",
      a: "Largeur $\\ell$, longueur $2\\ell$ : $2(\\ell + 2\\ell) = 36 \\iff 6\\ell = 36 \\iff \\ell = 6$. Largeur $6$ cm, longueur $12$ cm."
    }
  ],
  "2A1": [
    {
      q: "Quelle différence y a-t-il entre image et antécédent ?",
      a: "Si $f(a) = b$ : $b$ est **l'**image de $a$ (elle est unique) et $a$ est **un** antécédent de $b$ (un nombre peut avoir zéro, un ou plusieurs antécédents)."
    },
    {
      q: "Soit $f(x) = x^2 - 3$. Déterminer les antécédents de $6$ par $f$.",
      a: "$x^2 - 3 = 6 \\iff x^2 = 9 \\iff x = 3$ ou $x = -3$. Le nombre $6$ a deux antécédents : $-3$ et $3$."
    },
    {
      q: "Quel est l'ensemble de définition de $x \\mapsto \\frac{5}{x + 2}$ ?",
      a: "Il faut $x + 2 \\neq 0$, soit $x \\neq -2$ : $\\mathcal{D} = \\, ]-\\infty ; -2[ \\, \\cup \\, ]-2 ; +\\infty[$."
    },
    {
      q: "Comment déterminer par le calcul les points d'intersection des courbes de $f$ et de $g$ ?",
      a: "On résout l'équation $f(x) = g(x)$ ; pour chaque solution $x_0$, le point d'intersection a pour coordonnées $(x_0 ; f(x_0))$."
    },
    {
      q: "Comment résoudre graphiquement l'inéquation $f(x) < g(x)$ ?",
      a: "On lit les abscisses des points où la courbe $\\mathcal{C}_f$ est strictement **en dessous** de la courbe $\\mathcal{C}_g$."
    },
    {
      q: "Vrai ou faux : pour toute fonction $f$, $f(2 + 3) = f(2) + f(3)$ ?",
      a: "**Faux** : avec $f(x) = x^2$, $f(5) = 25$ alors que $f(2) + f(3) = 4 + 9 = 13$."
    },
    {
      q: "Vrai ou faux : un cercle peut être la courbe représentative d'une fonction ?",
      a: "**Faux** : certaines droites verticales coupent le cercle en deux points ; une même abscisse aurait alors deux images, ce qui est impossible pour une fonction."
    },
    {
      q: "Comment déterminer la fonction affine $f$ telle que $f(1) = 3$ et $f(3) = 7$ ?",
      a: "$m = \\frac{f(3) - f(1)}{3 - 1} = \\frac{7 - 3}{2} = 2$, puis $f(1) = 2 \\times 1 + p = 3$ donne $p = 1$ : $f(x) = 2x + 1$."
    }
  ],
  "2A2": [
    {
      q: "Définition : $f$ est strictement croissante sur un intervalle $I$.",
      a: "Pour tous réels $a$ et $b$ de $I$, si $a < b$, alors $f(a) < f(b)$ : $f$ conserve l'ordre."
    },
    {
      q: "Définition : $M$ est le maximum de $f$ sur un intervalle $I$.",
      a: "Pour tout $x \\in I$, $f(x) \\le M$, **et** il existe un réel $a \\in I$ tel que $f(a) = M$ (le maximum est atteint)."
    },
    {
      q: "Comment démontrer que $f(x) = 3x - 2$ est strictement croissante sur $\\mathbb{R}$ ?",
      a: "Soient $a < b$. Alors $f(b) - f(a) = 3b - 2 - (3a - 2) = 3(b - a) > 0$, donc $f(a) < f(b)$."
    },
    {
      q: "Démontrer que la fonction carré est strictement croissante sur $[0 ; +\\infty[$.",
      a: "Pour $0 \\le a < b$ : $b^2 - a^2 = (b - a)(b + a)$, avec $b - a > 0$ et $b + a > 0$. Donc $b^2 - a^2 > 0$, soit $a^2 < b^2$."
    },
    {
      q: "Vrai ou faux : si $f(1) < f(2)$, alors $f$ est croissante sur $[1 ; 2]$ ?",
      a: "**Faux** : deux valeurs ne suffisent pas. Avec $f(x) = (x - 1{,}2)^2$, $f(1) = 0{,}04 < f(2) = 0{,}64$, mais $f$ est décroissante sur $[1 ; 1{,}2]$."
    },
    {
      q: "$f$ est strictement croissante sur $[-2 ; 1]$ de $-3$ à $4$, puis strictement décroissante sur $[1 ; 5]$ de $4$ à $0$. Combien de solutions a $f(x) = 2$ ?",
      a: "Deux : une dans $]-2 ; 1[$ (car $-3 < 2 < 4$) et une dans $]1 ; 5[$ (car $4 > 2 > 0$)."
    },
    {
      q: "Quel est le principe de la dichotomie pour approcher une solution de $f(x) = k$ ?",
      a: "On coupe l'intervalle en deux en son milieu, on garde la moitié qui contient la solution (par exemple à l'aide des signes de $f(x) - k$ aux bornes), et on recommence : l'amplitude est divisée par $2$ à chaque étape."
    },
    {
      q: "Parmi les rectangles de périmètre $20$, lequel a la plus grande aire ?",
      a: "Côtés $\\ell$ et $10 - \\ell$ : $\\mathcal{A}(\\ell) = \\ell(10 - \\ell) = 25 - (\\ell - 5)^2 \\le 25$. Maximum $25$ pour $\\ell = 5$ : c'est le carré de côté $5$."
    }
  ],
  "2A3": [
    {
      q: "Démontrer que la fonction inverse est strictement décroissante sur $]0 ; +\\infty[$.",
      a: "Pour $0 < a < b$ : $\\frac{1}{b} - \\frac{1}{a} = \\frac{a - b}{ab} < 0$, car $a - b < 0$ et $ab > 0$. Donc $\\frac{1}{a} > \\frac{1}{b}$."
    },
    {
      q: "Vrai ou faux : la fonction inverse est décroissante sur $]-\\infty ; 0[ \\, \\cup \\, ]0 ; +\\infty[$ ?",
      a: "**Faux** : elle est décroissante sur chacun des deux intervalles séparément, mais $-1 < 1$ et $\\frac{1}{-1} = -1 < \\frac{1}{1} = 1$."
    },
    {
      q: "Résoudre $x^2 > 9$.",
      a: "$x^2 > 9 \\iff x < -3$ ou $x > 3$ : $S = \\, ]-\\infty ; -3[ \\, \\cup \\, ]3 ; +\\infty[$. Ne pas oublier les solutions négatives."
    },
    {
      q: "Si $2 \\le x \\le 5$, encadrer $\\frac{1}{x}$.",
      a: "La fonction inverse est décroissante sur $]0 ; +\\infty[$, donc l'ordre est inversé : $\\frac{1}{5} \\le \\frac{1}{x} \\le \\frac{1}{2}$."
    },
    {
      q: "Si $-3 \\le x \\le 2$, encadrer $x^2$.",
      a: "Piège : $0 \\le x^2 \\le 9$ (et non $4 \\le x^2 \\le 9$). L'intervalle contient $0$, où le carré vaut $0$ ; le maximum $9$ est atteint en $x = -3$."
    },
    {
      q: "Pour $0 < x < 1$, ranger $x$, $x^2$ et $x^3$ dans l'ordre croissant.",
      a: "$x^3 < x^2 < x$. Par exemple, $0{,}5^3 = 0{,}125 < 0{,}5^2 = 0{,}25 < 0{,}5$."
    },
    {
      q: "Quel est le signe de la fonction cube, et quelle symétrie présente sa courbe ?",
      a: "$x^3$ est du signe de $x$ (négatif pour $x < 0$, positif pour $x > 0$). Comme $(-x)^3 = -x^3$, la fonction est impaire : sa courbe est symétrique par rapport à l'origine $O$."
    }
  ],
  "2G1": [
    {
      q: "Vrai ou faux : la formule $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$ est valable dans tout repère ?",
      a: "**Faux** : elle n'est valable que dans un repère **orthonormé** (elle découle du théorème de Pythagore). La formule du milieu, elle, est valable dans tout repère."
    },
    {
      q: "Comment démontrer avec des coordonnées qu'un quadrilatère $ABCD$ est un parallélogramme ?",
      a: "On montre que ses diagonales $[AC]$ et $[BD]$ ont le **même milieu**."
    },
    {
      q: "$A(1 ; 2)$, $B(5 ; 3)$ et $C(4 ; 6)$. Coordonnées de $D$ tel que $ABCD$ soit un parallélogramme ?",
      a: "Le milieu de $[AC]$ est $(2{,}5 ; 4)$ ; c'est aussi celui de $[BD]$ : $x_D = 2 \\times 2{,}5 - 5 = 0$ et $y_D = 2 \\times 4 - 3 = 5$. Donc $D(0 ; 5)$."
    },
    {
      q: "Comment démontrer qu'un parallélogramme est un rectangle ? un losange ?",
      a: "Rectangle : ses diagonales ont la même longueur. Losange : deux côtés consécutifs ont la même longueur (ou ses diagonales sont perpendiculaires)."
    },
    {
      q: "Dans un repère orthonormé, comment prouver qu'un triangle $ABC$ est rectangle en $A$ ?",
      a: "On calcule $AB^2$, $AC^2$ et $BC^2$, puis on vérifie que $BC^2 = AB^2 + AC^2$ : c'est la réciproque du théorème de Pythagore."
    },
    {
      q: "Dans un repère orthonormé, $A(0 ; 0)$, $B(4 ; 0)$ et $C(2 ; 3)$. Le triangle $ABC$ est-il isocèle ?",
      a: "$CA = \\sqrt{2^2 + 3^2} = \\sqrt{13}$ et $CB = \\sqrt{(4 - 2)^2 + (0 - 3)^2} = \\sqrt{13}$ : oui, il est isocèle en $C$."
    },
    {
      q: "Dans un triangle $ABC$ rectangle en $A$, exprimer $\\cos \\widehat{B}$, $\\sin \\widehat{B}$ et $\\tan \\widehat{B}$.",
      a: "$\\cos \\widehat{B} = \\frac{AB}{BC}$ (adjacent sur hypoténuse), $\\sin \\widehat{B} = \\frac{AC}{BC}$ (opposé sur hypoténuse), $\\tan \\widehat{B} = \\frac{AC}{AB}$ (opposé sur adjacent)."
    },
    {
      q: "Énoncer le théorème de Thalès.",
      a: "Soit $ABC$ un triangle, $M$ un point de $(AB)$ et $N$ un point de $(AC)$, distincts de $A$. Si $(MN)$ et $(BC)$ sont parallèles, alors $\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$."
    }
  ],
  "2G2": [
    {
      q: "Que signifie l'égalité $\\vec{AB} = \\vec{DC}$ pour les points $A$, $B$, $C$, $D$ ?",
      a: "$ABCD$ est un parallélogramme (éventuellement aplati). Attention à l'ordre des lettres : $\\vec{AB} = \\vec{DC}$, et non $\\vec{CD}$."
    },
    {
      q: "Énoncer la règle du parallélogramme.",
      a: "$\\vec{AB} + \\vec{AD} = \\vec{AC}$ si et seulement si $ABCD$ est un parallélogramme."
    },
    {
      q: "Vrai ou faux : $\\vec{AB} + \\vec{AC} = \\vec{BC}$ ?",
      a: "**Faux** en général. La relation de Chasles enchaîne les points : $\\vec{BA} + \\vec{AC} = \\vec{BC}$, c'est-à-dire $\\vec{AC} - \\vec{AB} = \\vec{BC}$."
    },
    {
      q: "Comment démontrer que trois points sont alignés ? que deux droites sont parallèles ?",
      a: "$A$, $B$, $C$ sont alignés si et seulement si $\\det(\\vec{AB}, \\vec{AC}) = 0$. Les droites $(AB)$ et $(CD)$ sont parallèles si et seulement si $\\det(\\vec{AB}, \\vec{CD}) = 0$."
    },
    {
      q: "Déterminer le réel $x$ pour que $\\vec{u}(2 ; x)$ et $\\vec{v}(3 ; 6)$ soient colinéaires.",
      a: "$\\det(\\vec{u}, \\vec{v}) = 2 \\times 6 - x \\times 3 = 12 - 3x = 0 \\iff x = 4$."
    },
    {
      q: "Vrai ou faux : si $\\|\\vec{u}\\| = \\|\\vec{v}\\|$, alors $\\vec{u} = \\vec{v}$ ?",
      a: "**Faux** : deux vecteurs égaux ont même direction, même sens **et** même norme. Contre-exemple : $\\vec{u}(1 ; 0)$ et $\\vec{v}(0 ; 1)$ ont la même norme $1$."
    },
    {
      q: "Qu'est-ce que l'image d'un point $M$ par la translation de vecteur $\\vec{u}$ ?",
      a: "C'est l'unique point $M'$ tel que $\\vec{MM'} = \\vec{u}$."
    }
  ],
  "2G3": [
    {
      q: "Donner un vecteur directeur de la droite d'équation réduite $y = mx + p$.",
      a: "$\\vec{u}(1 ; m)$ : quand $x$ augmente de $1$, $y$ augmente de $m$."
    },
    {
      q: "Quelle est la forme de l'équation d'une droite parallèle à l'axe des ordonnées ?",
      a: "$x = c$ (avec $c$ réel). Une telle droite n'a ni équation réduite de la forme $y = mx + p$, ni coefficient directeur."
    },
    {
      q: "Comment obtenir une équation cartésienne de la droite passant par $A$ et de vecteur directeur $\\vec{u}$ ?",
      a: "$M(x ; y)$ appartient à la droite si et seulement si $\\vec{AM}$ et $\\vec{u}$ sont colinéaires, c'est-à-dire $\\det(\\vec{AM}, \\vec{u}) = 0$."
    },
    {
      q: "Équation cartésienne de la droite passant par $A(1 ; 2)$ et de vecteur directeur $\\vec{u}(3 ; -1)$ ?",
      a: "$\\det(\\vec{AM}, \\vec{u}) = (x - 1) \\times (-1) - (y - 2) \\times 3 = -x - 3y + 7 = 0$, ou encore $x + 3y - 7 = 0$."
    },
    {
      q: "Coefficient directeur de la droite $(AB)$ avec $A(-1 ; 3)$ et $B(3 ; -5)$ ?",
      a: "$m = \\frac{y_B - y_A}{x_B - x_A} = \\frac{-5 - 3}{3 - (-1)} = \\frac{-8}{4} = -2$."
    },
    {
      q: "Point d'intersection des droites d'équations $y = 2x + 1$ et $y = -x + 7$ ?",
      a: "$2x + 1 = -x + 7 \\iff 3x = 6 \\iff x = 2$, puis $y = 2 \\times 2 + 1 = 5$ : le point $(2 ; 5)$."
    },
    {
      q: "Vrai ou faux : une droite admet une unique équation cartésienne ?",
      a: "**Faux** : si $ax + by + c = 0$ en est une, alors $k(ax + by + c) = 0$ en est une autre pour tout $k \\neq 0$. En revanche, l'équation réduite (si elle existe) est unique."
    },
    {
      q: "Résoudre par combinaison le système $\\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases}$.",
      a: "En additionnant les deux lignes : $2x = 6$, donc $x = 3$ ; puis $y = 5 - 3 = 2$. Le couple solution est $(3 ; 2)$."
    }
  ],
  "2S1": [
    {
      q: "Comment calcule-t-on la moyenne d'une série de valeurs $x_1, \\dots, x_p$ d'effectifs $n_1, \\dots, n_p$ ?",
      a: "$\\bar{x} = \\frac{n_1 x_1 + n_2 x_2 + \\dots + n_p x_p}{N}$, où $N = n_1 + n_2 + \\dots + n_p$ est l'effectif total."
    },
    {
      q: "Médiane de la série $3 ; 7 ; 8 ; 12 ; 15 ; 20$ ?",
      a: "$N = 6$ est pair : la médiane est la moyenne des 3e et 4e valeurs, $Me = \\frac{8 + 12}{2} = 10$."
    },
    {
      q: "Déterminer $Q_1$ et $Q_3$ pour la série ordonnée $2 ; 4 ; 5 ; 7 ; 9 ; 10 ; 12 ; 15$.",
      a: "$N = 8$. $Q_1$ est la valeur de rang $\\lceil 0{,}25 \\times 8 \\rceil = 2$ : $Q_1 = 4$. $Q_3$ est la valeur de rang $\\lceil 0{,}75 \\times 8 \\rceil = 6$ : $Q_3 = 10$."
    },
    {
      q: "On multiplie toutes les valeurs d'une série par $3$. Que deviennent la moyenne et l'écart-type ?",
      a: "Les deux sont multipliés par $3$ (un changement d'unité multiplie la moyenne et l'écart-type par le même facteur positif)."
    },
    {
      q: "Que vaut l'écart-type d'une série dont toutes les valeurs sont égales ?",
      a: "$0$ : tous les écarts à la moyenne sont nuls. Un écart-type est toujours positif ou nul."
    },
    {
      q: "Quand préférer le couple (médiane ; écart interquartile) au couple (moyenne ; écart-type) ?",
      a: "Quand la série contient des valeurs extrêmes : la médiane et l'écart interquartile y sont peu sensibles, contrairement à la moyenne et à l'écart-type."
    },
    {
      q: "Comment estimer la moyenne d'une série regroupée en classes ?",
      a: "On remplace chaque classe $[a ; b[$ par son centre $\\frac{a + b}{2}$, puis on calcule la moyenne pondérée par les effectifs (on suppose les valeurs uniformément réparties dans chaque classe)."
    },
    {
      q: "Dans un tableau croisé d'effectifs, qu'est-ce qu'une fréquence marginale ?",
      a: "Le quotient d'un total de ligne (ou de colonne) par l'effectif total : c'est la fréquence d'une modalité d'une seule variable dans toute la population."
    }
  ],
  "2S2": [
    {
      q: "Quelles conditions doivent vérifier les probabilités $p_1, \\dots, p_n$ d'une loi sur $\\Omega = \\{e_1, \\dots, e_n\\}$ ?",
      a: "Chaque $p_i$ est compris entre $0$ et $1$, et $p_1 + p_2 + \\dots + p_n = 1$."
    },
    {
      q: "Un dé truqué donne $6$ avec la probabilité $0{,}5$, les autres faces étant équiprobables. Que vaut $P(\\{1\\})$ ?",
      a: "Les cinq autres faces se partagent $1 - 0{,}5 = 0{,}5$ : $P(\\{1\\}) = \\frac{0{,}5}{5} = 0{,}1$."
    },
    {
      q: "On lance trois fois une pièce équilibrée. Quelle est la probabilité d'obtenir au moins un pile ?",
      a: "Il y a $8$ issues équiprobables ; une seule ne contient aucun pile (FFF). Par l'événement contraire : $P = 1 - \\frac{1}{8} = \\frac{7}{8}$."
    },
    {
      q: "Vrai ou faux : $P_A(B) = P_B(A)$ ?",
      a: "**Faux** en général. Avec un dé équilibré, $A$ : « obtenir $6$ », $B$ : « obtenir un nombre pair » : $P_A(B) = 1$ mais $P_B(A) = \\frac{1}{3}$."
    },
    {
      q: "Une urne contient $3$ boules rouges et $2$ vertes. On tire successivement deux boules sans remise. Probabilité d'obtenir deux rouges ?",
      a: "Règle du chemin : $\\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$ (au second tirage, il ne reste que $4$ boules dont $2$ rouges)."
    },
    {
      q: "Sur $200$ élèves, $80$ sont des filles, dont $30$ externes. Quelle est la probabilité qu'un élève soit externe sachant que c'est une fille ?",
      a: "On se restreint aux $80$ filles : $P_F(E) = \\frac{30}{80} = \\frac{3}{8} = 0{,}375$."
    },
    {
      q: "Dans un test de dépistage d'une maladie $M$ ($T$ : « test positif »), que sont un faux positif et un faux négatif ?",
      a: "Faux positif : personne non malade dont le test est positif, de probabilité $P_{\\overline{M}}(T)$. Faux négatif : personne malade dont le test est négatif, de probabilité $P_M(\\overline{T})$."
    }
  ],
  "2S3": [
    {
      q: "Qu'appelle-t-on fluctuation d'échantillonnage ?",
      a: "Le fait que la fréquence observée d'un caractère varie d'un échantillon à l'autre, même pour des échantillons de même taille."
    },
    {
      q: "Vrai ou faux : après cinq « pile » consécutifs avec une pièce équilibrée, « face » est plus probable au lancer suivant ?",
      a: "**Faux** : les lancers sont indépendants, la probabilité de « face » reste $\\frac{1}{2}$. La loi des grands nombres porte sur un grand nombre de lancers, pas sur le suivant."
    },
    {
      q: "Vrai ou faux : pour un très grand échantillon, la fréquence observée est égale à la probabilité ?",
      a: "**Faux** : elle en est généralement **proche**, mais pas forcément égale. Par exemple, sur $1\\,001$ lancers, la fréquence de « pile » ne peut pas valoir exactement $0{,}5$."
    },
    {
      q: "Comment simuler en Python une expérience qui réussit avec la probabilité $p$ ?",
      a: "Avec le test `random() < p` : comme `random()` renvoie un nombre aléatoire uniforme de $[0 ; 1[$, la condition est vraie avec la probabilité $p$."
    },
    {
      q: "Comment écrire une fonction Python renvoyant la fréquence des $6$ sur $n$ lancers d'un dé ?",
      a: "On initialise un compteur `c = 0`, on répète `n` fois (`for i in range(n):`) le test `if randint(1, 6) == 6:` suivi de `c = c + 1`, puis on renvoie `c / n`."
    },
    {
      q: "(Pour aller plus loin) Que signifie : « $|f - p| \\le \\frac{1}{\\sqrt{n}}$ pour environ $95\\,\\%$ des échantillons » ?",
      a: "Si l'on prélève de nombreux échantillons de taille $n$ (assez grande), la fréquence observée $f$ est à une distance au plus $\\frac{1}{\\sqrt{n}}$ de $p$ dans environ $95\\,\\%$ des cas."
    },
    {
      q: "(Pour aller plus loin) Sur $100$ lancers d'une pièce supposée équilibrée, on obtient $65$ « pile ». Que peut-on conclure ?",
      a: "$\\frac{1}{\\sqrt{100}} = 0{,}1$, et $|0{,}65 - 0{,}5| = 0{,}15 > 0{,}1$. On rejette l'hypothèse « pièce équilibrée », avec un risque d'erreur d'environ $5\\,\\%$."
    }
  ],
  "2N5": [
    {
      q: "Comment calcule-t-on la proportion $p$ d'une sous-population $A$ dans une population $E$ ?",
      a: "$p = \\frac{n_A}{n_E}$ (effectif de $A$ divisé par l'effectif de $E$). C'est un nombre de $[0 ; 1]$, que l'on peut écrire en pourcentage."
    },
    {
      q: "Dans un lycée de $1\\,200$ élèves, $35\\,\\%$ sont demi-pensionnaires. Combien sont-ils ?",
      a: "$n_A = p \\times n_E = 0{,}35 \\times 1\\,200 = 420$ élèves."
    },
    {
      q: "Un article passe de $80$ € à $92$ €. Quel est le taux d'évolution ?",
      a: "$t = \\frac{92 - 80}{80} = \\frac{12}{80} = 0{,}15$ : une hausse de $15\\,\\%$."
    },
    {
      q: "Quel taux d'évolution correspond à un coefficient multiplicateur de $0{,}7$ ? de $2$ ?",
      a: "$t = CM - 1$ : $0{,}7 - 1 = -0{,}3$, soit une baisse de $30\\,\\%$ ; $2 - 1 = 1$, soit une hausse de $100\\,\\%$ (doublement)."
    },
    {
      q: "Vrai ou faux : une hausse de $20\\,\\%$ suivie d'une baisse de $20\\,\\%$ ramène à la valeur initiale ?",
      a: "**Faux** : $CM = 1{,}2 \\times 0{,}8 = 0{,}96$, soit une baisse globale de $4\\,\\%$."
    },
    {
      q: "L'ordre de deux évolutions successives change-t-il l'évolution globale ?",
      a: "Non : le coefficient global est le produit $CM_1 \\times CM_2 = CM_2 \\times CM_1$. Par exemple, $+10\\,\\%$ puis $-5\\,\\%$ ou l'inverse donnent $1{,}1 \\times 0{,}95 = 1{,}045$, soit $+4{,}5\\,\\%$."
    },
    {
      q: "Démontrer que le coefficient multiplicateur global de deux évolutions successives est le produit des coefficients.",
      a: "$V_1 = CM_1 \\times V_0$ et $V_2 = CM_2 \\times V_1$, donc $V_2 = CM_2 \\times CM_1 \\times V_0$ : le coefficient global est $CM_1 \\times CM_2$."
    }
  ],
  "2S4": [
    {
      q: "Après `a = 3`, `b = 5`, `a = b`, `b = a`, que valent `a` et `b` ?",
      a: "Tous deux valent $5$ : `a = b` écrase l'ancienne valeur de `a`. Pour échanger, il faut une variable auxiliaire : `c = a`, puis `a = b`, puis `b = c`."
    },
    {
      q: "Quelle différence y a-t-il entre `=` et `==` en Python ?",
      a: "`=` est l'affectation (on donne une valeur à une variable) ; `==` est le test d'égalité, qui renvoie un booléen (`True` ou `False`)."
    },
    {
      q: "Que vaut `s` après `s = 0` puis `for i in range(1, 5): s = s + i` ?",
      a: "$s = 1 + 2 + 3 + 4 = 10$ (la borne $5$ est exclue de `range`)."
    },
    {
      q: "Quels sont la valeur et le type de `7 / 2` et de `7 // 2` ?",
      a: "`7 / 2` vaut `3.5` (type `float`) ; `7 // 2` vaut `3` (quotient entier, type `int`)."
    },
    {
      q: "En partant de `n = 3`, quelle est la valeur de `n` à la fin de la boucle `while n < 100: n = 2 * n` ?",
      a: "`n` prend les valeurs $6$, $12$, $24$, $48$, $96$, $192$ : la boucle s'arrête à $192$, première valeur supérieure ou égale à $100$."
    },
    {
      q: "Avec `def f(x): return x ** 2 - 1`, que renvoie l'appel `f(4)` ?",
      a: "$4^2 - 1 = 15$ (en Python, `**` désigne la puissance)."
    },
    {
      q: "Vrai ou faux : la condition `not (x > 2 and x < 5)` équivaut à `x <= 2 or x >= 5` ?",
      a: "**Vrai** : la négation de « A et B » est « non A ou non B ». Les réels qui ne sont pas dans $]2 ; 5[$ sont ceux de $]-\\infty ; 2] \\cup [5 ; +\\infty[$."
    }
  ]
});
