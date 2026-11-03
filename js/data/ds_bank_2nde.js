/**
 * Banque d'exercices de devoir surveillé — Seconde (questions ouvertes, corrigés rédigés).
 * Schéma : voir scripts/tests/test_ds_banks.js
 */
window.MATHS_DS_BANK = window.MATHS_DS_BANK || {};
Object.assign(window.MATHS_DS_BANK, {
  "2N1": [
    {
      id: "2N1-ds-01",
      title: "Ranger des nombres dans les bons ensembles",
      difficulty: 1,
      points: 4,
      statement: `On considère les nombres suivants :
$$a = -\\frac{12}{4} \\qquad b = \\frac{3}{8} \\qquad c = \\sqrt{49} \\qquad d = \\frac{2}{3} \\qquad e = \\sqrt{12} \\qquad f = 1{,}5 \\times 10^{-2} \\qquad g = \\pi - 1 \\qquad h = \\frac{7}{28}$$

1. Pour chacun de ces nombres, donner le plus petit ensemble parmi $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{D}$, $\\mathbb{Q}$ et $\\mathbb{R}$ auquel il appartient. Justifier brièvement.
2. Recopier et compléter avec $\\in$ ou $\\notin$ : $a \\;\\ldots\\; \\mathbb{N}$ ; $\\;h \\;\\ldots\\; \\mathbb{D}$ ; $\\;d \\;\\ldots\\; \\mathbb{D}$ ; $\\;c \\;\\ldots\\; \\mathbb{Z}$.
3. Donner un exemple de nombre rationnel non décimal compris entre $0$ et $1$, différent de $d$.`,
      solution: `**1.**
- $a = -\\frac{12}{4} = -3$ : entier négatif, donc $a \\in \\mathbb{Z}$ (et $a \\notin \\mathbb{N}$).
- $b = \\frac{3}{8} = 0{,}375$ : nombre à écriture décimale finie ($b = \\frac{375}{10^3}$), donc $b \\in \\mathbb{D}$ ; ce n'est pas un entier.
- $c = \\sqrt{49} = 7$ : $c \\in \\mathbb{N}$.
- $d = \\frac{2}{3} = 0{,}666\\ldots$ : quotient de deux entiers dont l'écriture décimale est illimitée périodique, donc $d \\in \\mathbb{Q}$ et $d \\notin \\mathbb{D}$.
- $e = \\sqrt{12} = 2\\sqrt{3}$ : $\\sqrt{3}$ est irrationnel, donc $e$ aussi ; plus petit ensemble : $\\mathbb{R}$.
- $f = 1{,}5 \\times 10^{-2} = 0{,}015 = \\frac{15}{10^3}$ : $f \\in \\mathbb{D}$.
- $g = \\pi - 1$ : $\\pi$ est irrationnel, donc $\\pi - 1$ aussi (sinon $\\pi = g + 1$ serait rationnel) : $g \\in \\mathbb{R}$.
- $h = \\frac{7}{28} = \\frac{1}{4} = 0{,}25$ : $h \\in \\mathbb{D}$.

**2.** $a \\notin \\mathbb{N}$ (car $a = -3 < 0$) ; $h \\in \\mathbb{D}$ ; $d \\notin \\mathbb{D}$ ; $c \\in \\mathbb{Z}$ (car $c = 7$ et $\\mathbb{N} \\subset \\mathbb{Z}$).

**3.** Par exemple $\\frac{1}{3} = 0{,}333\\ldots$ : c'est un quotient d'entiers, mais son écriture décimale ne s'arrête pas, donc il n'est pas décimal. ($\\frac{1}{7}$, $\\frac{5}{6}$, … conviennent aussi.)`
    },
    {
      id: "2N1-ds-02",
      title: "Décomposition en facteurs premiers et fraction irréductible",
      difficulty: 1,
      points: 5,
      statement: `1. Décomposer $360$ et $756$ en produits de facteurs premiers.
2. En déduire le plus grand diviseur commun de $360$ et $756$.
3. Écrire la fraction $\\frac{360}{756}$ sous forme irréductible.
4. a) Le nombre $756$ est-il le carré d'un entier ? Justifier.
   b) Déterminer le plus petit entier naturel $k$ non nul tel que $756k$ soit le carré d'un entier. Préciser cet entier.`,
      solution: `**1.** Par divisions successives :
- $360 = 2 \\times 180 = 2^2 \\times 90 = 2^3 \\times 45 = 2^3 \\times 3^2 \\times 5$.
- $756 = 2 \\times 378 = 2^2 \\times 189 = 2^2 \\times 3^3 \\times 7$ (car $189 = 27 \\times 7$).

**2.** On prend les facteurs premiers communs avec le plus petit exposant : $2^2 \\times 3^2 = 36$. Le plus grand diviseur commun de $360$ et $756$ est $36$.

**3.** $\\frac{360}{756} = \\frac{36 \\times 10}{36 \\times 21} = \\frac{10}{21}$. Comme $10 = 2 \\times 5$ et $21 = 3 \\times 7$ n'ont aucun facteur premier commun, la fraction $\\frac{10}{21}$ est irréductible.

**4. a)** Dans la décomposition d'un carré, tous les exposants sont pairs. Or $756 = 2^2 \\times 3^3 \\times 7$ comporte $3^3$ et $7^1$ : $756$ n'est pas un carré parfait.

**b)** Il faut rendre pairs les exposants de $3$ et de $7$ en multipliant par le moins possible : $k = 3 \\times 7 = 21$. Alors $756 \\times 21 = 2^2 \\times 3^4 \\times 7^2 = (2 \\times 3^2 \\times 7)^2 = 126^2 = 15\\,876$.`
    },
    {
      id: "2N1-ds-03",
      title: "Calculs avec des racines carrées",
      difficulty: 2,
      points: 5,
      statement: `1. Décomposer $180$ en produit de facteurs premiers, puis écrire $\\sqrt{180}$ sous la forme $a\\sqrt{5}$ avec $a$ entier.
2. Écrire $A = \\sqrt{75} - 2\\sqrt{12} + \\sqrt{27}$ sous la forme $b\\sqrt{3}$, avec $b$ entier.
3. Calculer $B = \\sqrt{50} \\times \\sqrt{8}$ et $C = \\dfrac{\\sqrt{98}}{\\sqrt{2}}$.
4. a) Développer et réduire $(\\sqrt{5} - 2)(\\sqrt{5} + 2)$.
   b) En déduire que $\\dfrac{1}{\\sqrt{5} - 2} = \\sqrt{5} + 2$.`,
      solution: `**1.** $180 = 2^2 \\times 3^2 \\times 5$, donc $\\sqrt{180} = \\sqrt{2^2 \\times 3^2} \\times \\sqrt{5} = 2 \\times 3 \\times \\sqrt{5} = 6\\sqrt{5}$.

**2.** $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$ ; $\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$ ; $\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}$.
$$A = 5\\sqrt{3} - 2 \\times 2\\sqrt{3} + 3\\sqrt{3} = (5 - 4 + 3)\\sqrt{3} = 4\\sqrt{3}.$$

**3.** $B = \\sqrt{50 \\times 8} = \\sqrt{400} = 20$ et $C = \\sqrt{\\frac{98}{2}} = \\sqrt{49} = 7$.

**4. a)** On reconnaît $(a - b)(a + b) = a^2 - b^2$ : $(\\sqrt{5} - 2)(\\sqrt{5} + 2) = (\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$.

**b)** Comme $(\\sqrt{5} - 2)(\\sqrt{5} + 2) = 1$ et $\\sqrt{5} - 2 \\neq 0$, on peut diviser par $\\sqrt{5} - 2$ : $\\sqrt{5} + 2 = \\dfrac{1}{\\sqrt{5} - 2}$.`
    },
    {
      id: "2N1-ds-04",
      title: "Pairs, impairs et multiples : premières démonstrations",
      difficulty: 2,
      points: 5,
      statement: `Dans tout l'exercice, $n$ désigne un entier relatif. On rappelle qu'un entier pair s'écrit $2k$ et un entier impair $2k + 1$, avec $k \\in \\mathbb{Z}$.

1. Démontrer que la somme de trois entiers consécutifs est un multiple de $3$.
2. Démontrer que la somme de deux entiers impairs est paire.
3. Démontrer que le carré d'un entier impair est impair.
4. Démontrer que le produit de deux entiers consécutifs $n(n + 1)$ est pair. *(On pourra distinguer deux cas.)*`,
      solution: `**1.** Trois entiers consécutifs s'écrivent $n$, $n + 1$, $n + 2$. Leur somme vaut $n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)$. Comme $n + 1$ est un entier, cette somme est un multiple de $3$.

**2.** Soient $a = 2k + 1$ et $b = 2m + 1$ deux entiers impairs ($k, m \\in \\mathbb{Z}$). Alors $a + b = 2k + 2m + 2 = 2(k + m + 1)$, et $k + m + 1$ est entier : $a + b$ est pair.

**3.** Soit $a = 2k + 1$ impair. Alors $a^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$. Comme $2k^2 + 2k$ est entier, $a^2$ est de la forme $2K + 1$ : il est impair.

**4.**
- Si $n$ est pair, $n = 2k$ et $n(n + 1) = 2\\,k(n + 1)$ est pair.
- Si $n$ est impair, $n + 1$ est pair : $n + 1 = 2k$ et $n(n + 1) = 2\\,nk$ est pair.

Dans tous les cas, $n(n + 1)$ est pair (parmi deux entiers consécutifs, l'un est toujours pair).`
    },
    {
      id: "2N1-ds-05",
      title: "Démontrer que racine de 2 est irrationnel",
      difficulty: 3,
      points: 6,
      statement: `1. Soit $n$ un entier. Démontrer que si $n$ est impair, alors $n^2$ est impair. En déduire que si $n^2$ est pair, alors $n$ est pair.
2. On suppose, par l'absurde, que $\\sqrt{2}$ est rationnel : il existe deux entiers naturels $p$ et $q$ non nuls tels que $\\sqrt{2} = \\frac{p}{q}$, la fraction $\\frac{p}{q}$ étant irréductible.
   a) Montrer que $p^2 = 2q^2$ et en déduire que $p$ est pair.
   b) On écrit $p = 2m$. Montrer que $q^2 = 2m^2$, puis que $q$ est pair.
   c) Conclure.
3. En déduire que le nombre $3 + \\sqrt{2}$ est irrationnel.`,
      solution: `**1.** Si $n = 2k + 1$, alors $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$ est impair.
Par contraposée : si $n^2$ est pair, $n$ ne peut pas être impair (sinon $n^2$ serait impair), donc $n$ est pair.

**2. a)** En élevant $\\sqrt{2} = \\frac{p}{q}$ au carré : $2 = \\frac{p^2}{q^2}$, d'où $p^2 = 2q^2$. Ainsi $p^2$ est pair et, d'après la question 1, $p$ est pair.

**b)** En remplaçant $p = 2m$ : $4m^2 = 2q^2$, donc $q^2 = 2m^2$ est pair, et par la question 1, $q$ est pair.

**c)** $p$ et $q$ sont tous deux pairs : la fraction $\\frac{p}{q}$ se simplifie par $2$, ce qui contredit son irréductibilité. L'hypothèse de départ est donc fausse : $\\sqrt{2}$ est irrationnel.

**3.** Raisonnons par l'absurde : si $r = 3 + \\sqrt{2}$ était rationnel, alors $\\sqrt{2} = r - 3$ serait la différence de deux rationnels, donc un rationnel (si $r = \\frac{a}{b}$, alors $r - 3 = \\frac{a - 3b}{b}$). C'est impossible d'après la question 2 : $3 + \\sqrt{2}$ est irrationnel.`
    },
    {
      id: "2N1-ds-06",
      title: "Quand une fraction est-elle un nombre décimal ?",
      difficulty: 3,
      points: 6,
      statement: `On rappelle qu'un nombre décimal est un nombre qui peut s'écrire $\\frac{a}{10^n}$ avec $a \\in \\mathbb{Z}$ et $n \\in \\mathbb{N}$.

1. Montrer que $\\frac{7}{40}$ est un nombre décimal en l'écrivant sous la forme $\\frac{a}{10^n}$.
2. On veut montrer que $\\frac{1}{3}$ n'est pas décimal. On suppose par l'absurde qu'il existe $a \\in \\mathbb{Z}$ et $n \\in \\mathbb{N}$ tels que $\\frac{1}{3} = \\frac{a}{10^n}$.
   a) Montrer qu'alors $10^n = 3a$.
   b) En utilisant la décomposition de $10^n$ en facteurs premiers, aboutir à une contradiction.
3. On admet qu'une fraction irréductible est décimale si et seulement si son dénominateur n'a pas d'autres facteurs premiers que $2$ et $5$. Les nombres $\\frac{21}{56}$, $\\frac{33}{120}$ et $\\frac{14}{45}$ sont-ils décimaux ? Donner l'écriture décimale de ceux qui le sont.`,
      solution: `**1.** $40 = 2^3 \\times 5$. Pour obtenir $10^3 = 2^3 \\times 5^3$ au dénominateur, on multiplie par $5^2 = 25$ : $\\frac{7}{40} = \\frac{7 \\times 25}{40 \\times 25} = \\frac{175}{1000} = \\frac{175}{10^3} = 0{,}175$. C'est un décimal.

**2. a)** De $\\frac{1}{3} = \\frac{a}{10^n}$, on tire par produit en croix $10^n = 3a$.

**b)** $10^n = 2^n \\times 5^n$ : par unicité de la décomposition en facteurs premiers, $3$ n'apparaît pas dans la décomposition de $10^n$, donc $3$ ne divise pas $10^n$. Or $10^n = 3a$ avec $a$ entier signifie que $3$ divise $10^n$ : contradiction. Donc $\\frac{1}{3}$ n'est pas décimal.

**3.**
- $\\frac{21}{56} = \\frac{7 \\times 3}{7 \\times 8} = \\frac{3}{8}$, irréductible, et $8 = 2^3$ : décimal, $\\frac{3}{8} = 0{,}375$.
- $\\frac{33}{120} = \\frac{3 \\times 11}{3 \\times 40} = \\frac{11}{40}$, irréductible, et $40 = 2^3 \\times 5$ : décimal, $\\frac{11}{40} = \\frac{275}{1000} = 0{,}275$.
- $\\frac{14}{45}$ : $14 = 2 \\times 7$ et $45 = 3^2 \\times 5$ n'ont pas de facteur commun, la fraction est irréductible ; son dénominateur contient le facteur $3$ : $\\frac{14}{45}$ n'est pas décimal ($\\frac{14}{45} = 0{,}3111\\ldots$).`
    },
    {
      id: "2N1-ds-07",
      title: "Carreler une pièce sans découpe",
      difficulty: 4,
      points: 6,
      statement: `Un artisan doit carreler le sol rectangulaire d'une pièce de $4{,}20$ m sur $3{,}36$ m avec des dalles carrées toutes identiques. Il ne veut faire **aucune découpe** et le côté des dalles, exprimé en centimètres, doit être un nombre entier.

1. Expliquer pourquoi le côté d'une dalle doit être un diviseur commun de $420$ et de $336$.
2. Décomposer $420$ et $336$ en produits de facteurs premiers.
3. Quel est le plus grand côté possible pour les dalles ? Combien de dalles faut-il alors ?
4. Le fournisseur ne propose que des dalles de côté inférieur ou égal à $30$ cm. Quel côté l'artisan doit-il choisir pour utiliser le moins de dalles possible ? Combien en faut-il ?`,
      solution: `**1.** Le long du côté de $420$ cm, on aligne un nombre entier de dalles de côté $c$ sans découpe : $c$ divise $420$. De même le long du côté de $336$ cm : $c$ divise $336$. Donc $c$ est un diviseur commun de $420$ et $336$.

**2.** $420 = 2^2 \\times 3 \\times 5 \\times 7$ et $336 = 2^4 \\times 3 \\times 7$.

**3.** Le plus grand diviseur commun s'obtient avec les facteurs communs affectés du plus petit exposant : $2^2 \\times 3 \\times 7 = 84$. Le plus grand côté possible est $84$ cm. Il faut alors $\\frac{420}{84} = 5$ dalles dans la longueur et $\\frac{336}{84} = 4$ dans la largeur, soit $5 \\times 4 = 20$ dalles.

**4.** Les diviseurs communs de $420$ et $336$ sont les diviseurs de $84 = 2^2 \\times 3 \\times 7$ : $1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84$. Moins il y a de dalles, plus elles sont grandes : on choisit le plus grand diviseur inférieur ou égal à $30$, soit $28$ cm. Il faut alors $\\frac{420}{28} = 15$ dalles sur la longueur et $\\frac{336}{28} = 12$ sur la largeur, soit $15 \\times 12 = 180$ dalles.`
    },
    {
      id: "2N1-ds-08",
      title: "Compter les diviseurs d'un entier",
      difficulty: 4,
      points: 7,
      statement: `1. Décomposer $72$ en produit de facteurs premiers.
2. Tout diviseur de $72$ s'écrit $2^a \\times 3^b$ avec $a \\in \\{0 ; 1 ; 2 ; 3\\}$ et $b \\in \\{0 ; 1 ; 2\\}$. Dresser un tableau à double entrée donnant tous les diviseurs de $72$. Combien y en a-t-il ?
3. Plus généralement, expliquer pourquoi un entier de la forme $2^m \\times 3^p$ (avec $m$ et $p$ entiers naturels) possède $(m + 1)(p + 1)$ diviseurs.
4. a) Combien de diviseurs possède $2^5 \\times 3^4$ ?
   b) Déterminer le plus petit entier naturel possédant exactement $6$ diviseurs. Justifier.`,
      solution: `**1.** $72 = 8 \\times 9 = 2^3 \\times 3^2$.

**2.** Tableau des $2^a \\times 3^b$ :

| | $a = 0$ | $a = 1$ | $a = 2$ | $a = 3$ |
|---|---|---|---|---|
| $b = 0$ | $1$ | $2$ | $4$ | $8$ |
| $b = 1$ | $3$ | $6$ | $12$ | $24$ |
| $b = 2$ | $9$ | $18$ | $36$ | $72$ |

$72$ possède $4 \\times 3 = 12$ diviseurs.

**3.** Un diviseur de $2^m \\times 3^p$ ne contient que les facteurs premiers $2$ et $3$, avec des exposants au plus égaux à $m$ et $p$ : il s'écrit $2^a \\times 3^b$ avec $a \\in \\{0 ; \\ldots ; m\\}$ ($m + 1$ choix) et $b \\in \\{0 ; \\ldots ; p\\}$ ($p + 1$ choix). Par unicité de la décomposition, deux choix différents donnent deux diviseurs différents : il y a $(m + 1)(p + 1)$ diviseurs.

**4. a)** $2^5 \\times 3^4$ possède $(5 + 1)(4 + 1) = 30$ diviseurs.

**b)** Si $n = p_1^{\\alpha_1} \\times \\cdots \\times p_k^{\\alpha_k}$, le même raisonnement donne $(\\alpha_1 + 1)\\cdots(\\alpha_k + 1)$ diviseurs. Pour obtenir $6 = 6 \\times 1 = 3 \\times 2$ :
- soit $n = p^5$ : le plus petit est $2^5 = 32$ ;
- soit $n = p^2 \\times q$ ($p \\neq q$ premiers) : le plus petit est $2^2 \\times 3 = 12$.

Le plus petit entier ayant exactement $6$ diviseurs est $12$ (ses diviseurs : $1, 2, 3, 4, 6, 12$). On vérifie qu'aucun entier de $1$ à $11$ n'en a $6$ : ils en ont tous au plus $4$.`
    },
    {
      id: "2N1-ds-09",
      title: "Diviseurs, nombres premiers et fraction irréductible",
      difficulty: 1,
      points: 4,
      statement: `1. Donner la liste de tous les diviseurs positifs de $84$.
2. a) Montrer que $221$ n'est pas un nombre premier.
 b) Le nombre $97$ est-il premier ? Justifier en précisant les divisions à tester.
3. Décomposer $84$ et $221$ en produits de facteurs premiers. La fraction $\\frac{84}{221}$ est-elle irréductible ?`,
      solution: `**1.** On cherche les produits de deux entiers égaux à $84$ : $84 = 1 \\times 84 = 2 \\times 42 = 3 \\times 28 = 4 \\times 21 = 6 \\times 14 = 7 \\times 12$ (on peut s'arrêter à $9$ car $9^2 = 81 \\leqslant 84 < 100 = 10^2$ ; ni $8$ ni $9$ ne divisent $84$).

Les diviseurs positifs de $84$ sont : $1$ ; $2$ ; $3$ ; $4$ ; $6$ ; $7$ ; $12$ ; $14$ ; $21$ ; $28$ ; $42$ ; $84$ (il y en a $12$).

**2. a)** $221 = 13 \\times 17$ : $221$ admet le diviseur $13$, différent de $1$ et de $221$, donc il n'est pas premier.

**b)** Si $97$ avait un diviseur $d$ avec $1 < d < 97$, il en aurait un inférieur ou égal à $\\sqrt{97}$, donc inférieur ou égal à $9$ (car $9^2 = 81 < 97 < 100 = 10^2$). Il suffit de tester les nombres premiers $2$, $3$, $5$ et $7$ :
- $97$ est impair, donc non divisible par $2$ ;
- la somme de ses chiffres vaut $16$, qui n'est pas multiple de $3$ ;
- il ne se termine ni par $0$ ni par $5$ ;
- $97 = 7 \\times 13 + 6$ : le reste n'est pas nul.

Donc $97$ est premier.

**3.** $84 = 2^2 \\times 3 \\times 7$ et $221 = 13 \\times 17$. Ces deux nombres n'ont aucun facteur premier commun : leur seul diviseur commun positif est $1$, donc la fraction $\\frac{84}{221}$ est irréductible.`
    },
    {
      id: "2N1-ds-10",
      title: "Implication, réciproque et contre-exemple",
      difficulty: 2,
      points: 5,
      statement: `Pour chacune des propositions suivantes, dire si elle est vraie ou fausse, en justifiant par une démonstration ou par un contre-exemple.

1. « Pour tout entier $n$, si $n$ est un multiple de $6$, alors $n$ est pair. »
2. Énoncer la réciproque de la proposition 1. Est-elle vraie ?
3. Énoncer la contraposée de la proposition 1.
4. « Pour tout réel $x$, $x^2 \\geqslant x$. »
5. « Il existe un entier $n$ non nul tel que $n^2 = 3n$. »
6. « Pour tous réels $a$ et $b$, si $a^2 = b^2$, alors $a = b$. »`,
      solution: `**1.** Vraie. Si $n$ est un multiple de $6$, il existe un entier $k$ tel que $n = 6k = 2 \\times (3k)$, et $3k$ est un entier : $n$ est pair.

**2.** Réciproque : « pour tout entier $n$, si $n$ est pair, alors $n$ est un multiple de $6$ ». Elle est fausse : $4$ est pair, mais $4$ n'est pas un multiple de $6$.

**3.** Contraposée : « pour tout entier $n$, si $n$ est impair (c'est-à-dire non pair), alors $n$ n'est pas un multiple de $6$ ». Elle est vraie, comme la proposition 1.

**4.** Fausse. Contre-exemple : $x = \\frac{1}{2}$ donne $x^2 = \\frac{1}{4}$, et $\\frac{1}{4} < \\frac{1}{2}$.

**5.** Vraie : $n = 3$ convient, car $3^2 = 9 = 3 \\times 3$. (On trouve toutes les solutions en écrivant $n^2 - 3n = n(n - 3) = 0$, soit $n = 0$ ou $n = 3$ ; seul $3$ est non nul.)

**6.** Fausse. Contre-exemple : $a = 2$ et $b = -2$ vérifient $a^2 = b^2 = 4$, mais $a \\neq b$. (On a seulement $a = b$ ou $a = -b$.)`
    },
    {
      id: "2N1-ds-11",
      title: "Écriture décimale périodique et fraction",
      difficulty: 3,
      points: 6,
      statement: `On note $x = 0{,}272727\\ldots$ le nombre dont l'écriture décimale répète indéfiniment le bloc « $27$ ».

1. Calculer $100x - x$. En déduire que $x$ est un nombre rationnel, que l'on écrira sous forme de fraction irréductible.
2. Avec la même méthode, écrire $y = 1{,}2343434\\ldots$ (le bloc « $34$ » se répète indéfiniment) sous forme de fraction irréductible. On pourra calculer $1\\,000y - 10y$.
3. On pose $z = 0{,}999\\ldots$ (le chiffre $9$ se répète indéfiniment). Calculer $10z - z$ et conclure. Le nombre $z$ est-il décimal ?
4. Le nombre $x$ est-il décimal ? Justifier.`,
      solution: `**1.** $100x = 27{,}272727\\ldots$, donc $100x - x = 27{,}2727\\ldots - 0{,}2727\\ldots = 27$ : les parties après la virgule se compensent exactement.

Ainsi $99x = 27$, d'où $x = \\frac{27}{99} = \\frac{3 \\times 9}{11 \\times 9} = \\frac{3}{11}$. C'est un quotient de deux entiers : $x \\in \\mathbb{Q}$.

**2.** $10y = 12{,}343434\\ldots$ et $1\\,000y = 1\\,234{,}343434\\ldots$ ont la même partie décimale. Donc $1\\,000y - 10y = 1\\,234 - 12 = 1\\,222$, soit $990y = 1\\,222$ et
$$y = \\frac{1\\,222}{990} = \\frac{611}{495}.$$
Cette fraction est irréductible : $611 = 13 \\times 47$ et $495 = 3^2 \\times 5 \\times 11$ n'ont aucun facteur premier commun.

**3.** $10z = 9{,}999\\ldots$ donc $10z - z = 9$, soit $9z = 9$ et $z = 1$. Les écritures $0{,}999\\ldots$ et $1$ désignent le même nombre : $z = 1$ est un entier, donc il est décimal.

**4.** $x = \\frac{3}{11}$. Si $x$ était décimal, on aurait $\\frac{3}{11} = \\frac{a}{10^n}$ avec $a$ entier, donc $3 \\times 10^n = 11a$ : $11$ diviserait $3 \\times 10^n = 3 \\times 2^n \\times 5^n$, ce qui est impossible car $11$ est un nombre premier qui n'apparaît pas dans cette décomposition. Donc $x$ n'est pas décimal (ce qui est cohérent avec son écriture décimale illimitée).`
    },
    {
      id: "2N1-ds-12",
      title: "Quels entiers sont somme de deux carrés ?",
      difficulty: 4,
      points: 6,
      statement: `Dans tout l'exercice, les lettres $n$, $a$, $b$ et $k$ désignent des entiers.

1. Montrer que pour tout entier $n$, le nombre $n^2 + n$ est pair. (On pourra raisonner par disjonction des cas, ou factoriser.)
2. a) Montrer que si $n$ est pair, alors $n^2$ est un multiple de $4$.
 b) Montrer que si $n$ est impair, alors $n^2$ s'écrit $4k + 1$ avec $k$ entier.
3. En déduire les restes possibles de la division euclidienne de $a^2 + b^2$ par $4$.
4. Le nombre $2\\,027$ peut-il s'écrire comme la somme des carrés de deux entiers ? Et $2\\,026$ ? Justifier.`,
      solution: `**1.** $n^2 + n = n(n + 1)$ est le produit de deux entiers consécutifs. L'un des deux est pair :
- si $n = 2p$, alors $n(n + 1) = 2 \\times p(2p + 1)$ ;
- si $n = 2p + 1$, alors $n(n + 1) = (2p + 1)(2p + 2) = 2 \\times (2p + 1)(p + 1)$.

Dans les deux cas, $n^2 + n$ est pair.

**2. a)** Si $n = 2p$, alors $n^2 = 4p^2$, multiple de $4$.

**b)** Si $n = 2p + 1$, alors $n^2 = 4p^2 + 4p + 1 = 4(p^2 + p) + 1$, de la forme $4k + 1$ avec $k = p^2 + p$ entier.

**3.** D'après la question 2, le reste de la division d'un carré par $4$ vaut $0$ ou $1$. Les restes de $a^2$ et $b^2$ s'ajoutent :
- $a$ et $b$ pairs : $a^2 + b^2 = 4k + 4k'$, reste $0$ ;
- un pair, un impair : reste $1$ ;
- $a$ et $b$ impairs : $a^2 + b^2 = 4(k + k') + 2$, reste $2$.

Le reste vaut donc $0$, $1$ ou $2$, **jamais $3$**.

**4.** $2\\,027 = 4 \\times 506 + 3$ : son reste dans la division par $4$ est $3$. D'après la question 3, $2\\,027$ ne peut pas être la somme de deux carrés d'entiers.

Pour $2\\,026 = 4 \\times 506 + 2$, l'argument ne permet pas de conclure, mais on peut chercher : $2\\,026 = 45^2 + 1^2 = 2\\,025 + 1$. Donc $2\\,026$ est bien la somme de deux carrés.`
    }
  ],
  "2N2": [
    {
      id: "2N2-ds-01",
      title: "Développer et réduire",
      difficulty: 1,
      points: 4,
      statement: `Développer et réduire les expressions suivantes.

1. $A = (3x - 2)^2$
2. $B = (2x + 5)(2x - 5)$
3. $C = (x + 4)(2x - 3) - 3(x - 1)$
4. $D = (x + 1)^2 - (x - 1)^2$`,
      solution: `**1.** Avec $(a - b)^2 = a^2 - 2ab + b^2$ où $a = 3x$ et $b = 2$ :
$A = 9x^2 - 2 \\times 3x \\times 2 + 4 = 9x^2 - 12x + 4$.

**2.** Avec $(a + b)(a - b) = a^2 - b^2$ : $B = (2x)^2 - 5^2 = 4x^2 - 25$.

**3.** $(x + 4)(2x - 3) = 2x^2 - 3x + 8x - 12 = 2x^2 + 5x - 12$, et $-3(x - 1) = -3x + 3$.
Donc $C = 2x^2 + 5x - 12 - 3x + 3 = 2x^2 + 2x - 9$.

**4.** $(x + 1)^2 = x^2 + 2x + 1$ et $(x - 1)^2 = x^2 - 2x + 1$.
$D = x^2 + 2x + 1 - (x^2 - 2x + 1) = x^2 + 2x + 1 - x^2 + 2x - 1 = 4x$.
Attention au signe « $-$ » devant la parenthèse : il change le signe de chaque terme.`
    },
    {
      id: "2N2-ds-02",
      title: "Factoriser",
      difficulty: 1,
      points: 4,
      statement: `Factoriser les expressions suivantes au maximum.

1. $E = 5x^2 - 15x$
2. $F = 49 - 16x^2$
3. $G = x^2 + 10x + 25$
4. $H = (2x + 1)(x - 3) + (2x + 1)(4x + 5)$`,
      solution: `**1.** Facteur commun $5x$ : $E = 5x \\times x - 5x \\times 3 = 5x(x - 3)$.

**2.** $F = 7^2 - (4x)^2$ est de la forme $a^2 - b^2 = (a - b)(a + b)$ : $F = (7 - 4x)(7 + 4x)$.

**3.** $G = x^2 + 2 \\times x \\times 5 + 5^2$ est de la forme $a^2 + 2ab + b^2 = (a + b)^2$ : $G = (x + 5)^2$.

**4.** Facteur commun $(2x + 1)$ :
$H = (2x + 1)\\big[(x - 3) + (4x + 5)\\big] = (2x + 1)(5x + 2)$.

*Vérification possible en $x = 0$ :* $H = 1 \\times (-3) + 1 \\times 5 = 2$ et $(2 \\times 0 + 1)(5 \\times 0 + 2) = 2$.`
    },
    {
      id: "2N2-ds-03",
      title: "Choisir la forme adaptée",
      difficulty: 2,
      points: 5,
      statement: `Soit $H(x) = (x - 2)^2 - 9$, définie pour tout réel $x$.

1. Développer et réduire $H(x)$.
2. Factoriser $H(x)$.
3. En choisissant à chaque fois la forme la plus adaptée (donnée, développée ou factorisée) :
   a) calculer $H(0)$ et $H(\\sqrt{2})$ ;
   b) résoudre l'équation $H(x) = 0$ ;
   c) résoudre l'équation $H(x) = -9$.`,
      solution: `**1.** $H(x) = x^2 - 4x + 4 - 9 = x^2 - 4x - 5$.

**2.** $H(x) = (x - 2)^2 - 3^2 = \\big[(x - 2) - 3\\big]\\big[(x - 2) + 3\\big] = (x - 5)(x + 1)$.

**3. a)** Forme développée : $H(0) = -5$ et $H(\\sqrt{2}) = 2 - 4\\sqrt{2} - 5 = -3 - 4\\sqrt{2}$.

**b)** Forme factorisée : $(x - 5)(x + 1) = 0$. Un produit est nul si et seulement si l'un de ses facteurs est nul : $x - 5 = 0$ ou $x + 1 = 0$, soit $x = 5$ ou $x = -1$. Ensemble des solutions : $\\{-1 ; 5\\}$.

**c)** Forme donnée : $H(x) = -9 \\iff (x - 2)^2 - 9 = -9 \\iff (x - 2)^2 = 0 \\iff x = 2$. Ensemble des solutions : $\\{2\\}$.`
    },
    {
      id: "2N2-ds-04",
      title: "Fractions numériques et fractions rationnelles",
      difficulty: 2,
      points: 5,
      statement: `1. Calculer et donner le résultat sous forme de fraction irréductible : $K = \\left(\\dfrac{2}{3} - \\dfrac{5}{4}\\right) \\div \\dfrac{7}{6}$.
2. Pour $x \\neq 0$ et $x \\neq -1$, écrire sous la forme d'un seul quotient : $L = \\dfrac{1}{x} + \\dfrac{2}{x + 1}$.
3. Pour $x \\neq 2$ et $x \\neq -2$, écrire sous la forme d'un seul quotient : $M = \\dfrac{3}{x - 2} - \\dfrac{1}{x + 2}$.
4. Pour $x \\neq -3$, simplifier $N = \\dfrac{x^2 - 9}{2x + 6}$.`,
      solution: `**1.** $\\frac{2}{3} - \\frac{5}{4} = \\frac{8}{12} - \\frac{15}{12} = -\\frac{7}{12}$, puis diviser par $\\frac{7}{6}$ revient à multiplier par $\\frac{6}{7}$ :
$$K = -\\frac{7}{12} \\times \\frac{6}{7} = -\\frac{6}{12} = -\\frac{1}{2}.$$

**2.** Dénominateur commun $x(x + 1)$ :
$$L = \\frac{x + 1}{x(x + 1)} + \\frac{2x}{x(x + 1)} = \\frac{3x + 1}{x(x + 1)}.$$

**3.** Dénominateur commun $(x - 2)(x + 2) = x^2 - 4$ :
$$M = \\frac{3(x + 2) - (x - 2)}{(x - 2)(x + 2)} = \\frac{3x + 6 - x + 2}{x^2 - 4} = \\frac{2x + 8}{x^2 - 4}.$$

**4.** $x^2 - 9 = (x - 3)(x + 3)$ et $2x + 6 = 2(x + 3)$. Pour $x \\neq -3$, $x + 3 \\neq 0$ et on simplifie :
$$N = \\frac{(x - 3)(x + 3)}{2(x + 3)} = \\frac{x - 3}{2}.$$`
    },
    {
      id: "2N2-ds-05",
      title: "Un programme de calcul surprenant",
      difficulty: 3,
      points: 5,
      statement: `On considère le programme de calcul suivant :
- choisir un nombre $x$ ;
- calculer le carré de la somme de $x$ et de $3$ ;
- lui soustraire le carré de la différence de $x$ et de $3$.

1. Appliquer ce programme aux nombres $5$ puis $-2$.
2. Quelle conjecture peut-on formuler sur le résultat en fonction du nombre de départ ?
3. Démontrer cette conjecture.
4. En déduire, sans calculatrice, la valeur de $1003^2 - 997^2$.`,
      solution: `**1.** Pour $5$ : $(5 + 3)^2 - (5 - 3)^2 = 64 - 4 = 60$.
Pour $-2$ : $(-2 + 3)^2 - (-2 - 3)^2 = 1 - 25 = -24$.

**2.** $60 = 12 \\times 5$ et $-24 = 12 \\times (-2)$ : on conjecture que le résultat est égal à $12$ fois le nombre de départ.

**3.** Le résultat est $R = (x + 3)^2 - (x - 3)^2$.
$R = (x^2 + 6x + 9) - (x^2 - 6x + 9) = 12x$.
(On peut aussi factoriser : $R = \\big[(x + 3) - (x - 3)\\big]\\big[(x + 3) + (x - 3)\\big] = 6 \\times 2x = 12x$.) La conjecture est démontrée.

**4.** $1003 = 1000 + 3$ et $997 = 1000 - 3$ : c'est le programme appliqué à $x = 1000$, donc $1003^2 - 997^2 = 12 \\times 1000 = 12\\,000$.`
    },
    {
      id: "2N2-ds-06",
      title: "Aire d'un cadre carré",
      difficulty: 3,
      points: 6,
      statement: `Dans un carré $ABCD$ de côté $2x + 1$ (en cm, avec $x > 0$), on découpe un carré de côté $x$. On note $\\mathcal{A}(x)$ l'aire, en cm², de la surface restante.

1. Exprimer $\\mathcal{A}(x)$ en fonction de $x$, puis développer et réduire.
2. Factoriser $\\mathcal{A}(x)$ à l'aide d'une identité remarquable.
3. Vérifier les deux résultats précédents pour $x = 3$.
4. Un rectangle a pour dimensions $x + 1$ et $3x + 1$. Montrer qu'il a la même aire que la surface restante, quel que soit $x > 0$.
5. Déterminer $x$ pour que l'aire restante soit égale à $3$ fois l'aire du petit carré découpé.`,
      solution: `**1.** $\\mathcal{A}(x) = (2x + 1)^2 - x^2 = 4x^2 + 4x + 1 - x^2 = 3x^2 + 4x + 1$.

**2.** $\\mathcal{A}(x) = (2x + 1)^2 - x^2 = \\big[(2x + 1) - x\\big]\\big[(2x + 1) + x\\big] = (x + 1)(3x + 1)$.

**3.** Pour $x = 3$ : $(2 \\times 3 + 1)^2 - 3^2 = 49 - 9 = 40$ ; forme développée $3 \\times 9 + 12 + 1 = 40$ ; forme factorisée $4 \\times 10 = 40$. Les trois résultats concordent.

**4.** L'aire du rectangle vaut $(x + 1)(3x + 1)$, qui est exactement la forme factorisée de $\\mathcal{A}(x)$ : les aires sont égales pour tout $x > 0$.

**5.** On résout $3x^2 + 4x + 1 = 3x^2$, c'est-à-dire $4x + 1 = 0$, soit $x = -\\frac{1}{4}$. Cette valeur n'est pas positive : **il n'existe aucune valeur de $x > 0$** convenable. En effet, l'aire restante $3x^2 + 4x + 1$ est toujours strictement supérieure à $3x^2$ lorsque $x > 0$.`
    },
    {
      id: "2N2-ds-07",
      title: "Une inégalité classique",
      difficulty: 4,
      points: 6,
      statement: `1. Soient $a$ et $b$ deux réels. Développer $(a - b)^2$ et en déduire que $a^2 + b^2 \\geqslant 2ab$. Dans quel cas a-t-on l'égalité ?
2. Soit $x$ un réel strictement positif.
   a) En appliquant la question 1 avec $a = \\sqrt{x}$ et $b = \\dfrac{1}{\\sqrt{x}}$, montrer que $x + \\dfrac{1}{x} \\geqslant 2$.
   b) Retrouver ce résultat en montrant que $x + \\dfrac{1}{x} - 2 = \\dfrac{(x - 1)^2}{x}$.
3. **Application.** Un rectangle a une aire de $1$ m². On note $x$ sa longueur en mètres.
   a) Exprimer son périmètre $P(x)$ en fonction de $x$.
   b) Montrer que $P(x) \\geqslant 4$ et déterminer le rectangle de périmètre minimal.`,
      solution: `**1.** $(a - b)^2 = a^2 - 2ab + b^2$. Un carré est toujours positif ou nul, donc $a^2 - 2ab + b^2 \\geqslant 0$, c'est-à-dire $a^2 + b^2 \\geqslant 2ab$. L'égalité a lieu si et seulement si $(a - b)^2 = 0$, c'est-à-dire $a = b$.

**2. a)** Avec $a = \\sqrt{x}$ et $b = \\frac{1}{\\sqrt{x}}$ : $a^2 = x$, $b^2 = \\frac{1}{x}$ et $ab = 1$. La question 1 donne $x + \\frac{1}{x} \\geqslant 2$.

**b)** $x + \\frac{1}{x} - 2 = \\frac{x^2 + 1 - 2x}{x} = \\frac{(x - 1)^2}{x}$. Le numérateur est un carré, donc positif ou nul, et $x > 0$ : le quotient est positif ou nul, d'où $x + \\frac{1}{x} \\geqslant 2$, avec égalité si et seulement si $x = 1$.

**3. a)** L'aire vaut $1$, donc la largeur est $\\frac{1}{x}$ et $P(x) = 2\\left(x + \\frac{1}{x}\\right)$.

**b)** D'après la question 2, $x + \\frac{1}{x} \\geqslant 2$, donc $P(x) \\geqslant 4$, avec égalité si et seulement si $x = 1$. Le rectangle d'aire $1$ m² de périmètre minimal est le **carré de côté $1$ m**, de périmètre $4$ m.`
    },
    {
      id: "2N2-ds-08",
      title: "Une somme qui se simplifie",
      difficulty: 4,
      points: 6,
      statement: `1. Montrer que pour tout entier $n \\geqslant 1$ : $\\dfrac{1}{n} - \\dfrac{1}{n + 1} = \\dfrac{1}{n(n + 1)}$.
2. En déduire la valeur exacte de
$$S = \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + \\cdots + \\frac{1}{9 \\times 10}.$$
3. a) Trouver le réel $k$ tel que, pour tout entier $n \\geqslant 1$ : $\\dfrac{1}{n(n + 2)} = k\\left(\\dfrac{1}{n} - \\dfrac{1}{n + 2}\\right)$.
   b) En déduire la valeur exacte de $T = \\dfrac{1}{1 \\times 3} + \\dfrac{1}{3 \\times 5} + \\dfrac{1}{5 \\times 7} + \\dfrac{1}{7 \\times 9}$.`,
      solution: `**1.** $\\frac{1}{n} - \\frac{1}{n + 1} = \\frac{(n + 1) - n}{n(n + 1)} = \\frac{1}{n(n + 1)}$.

**2.** On remplace chaque terme grâce à la question 1 :
$$S = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{9} - \\frac{1}{10}\\right).$$
Tous les termes intermédiaires s'éliminent deux à deux : $S = 1 - \\frac{1}{10} = \\frac{9}{10}$.

**3. a)** $\\frac{1}{n} - \\frac{1}{n + 2} = \\frac{(n + 2) - n}{n(n + 2)} = \\frac{2}{n(n + 2)}$. Donc $\\frac{1}{n(n + 2)} = \\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n + 2}\\right)$ : $k = \\frac{1}{2}$.

**b)** En appliquant 3. a) avec $n = 1, 3, 5, 7$ :
$$T = \\frac{1}{2}\\left[\\left(1 - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\left(\\frac{1}{5} - \\frac{1}{7}\\right) + \\left(\\frac{1}{7} - \\frac{1}{9}\\right)\\right] = \\frac{1}{2}\\left(1 - \\frac{1}{9}\\right) = \\frac{1}{2} \\times \\frac{8}{9} = \\frac{4}{9}.$$`
    },
    {
      id: "2N2-ds-09",
      title: "Calcul mental avec les identités remarquables",
      difficulty: 1,
      points: 4,
      statement: `Les calculs de cet exercice se font sans calculatrice : on détaillera l'identité remarquable utilisée.

1. Calculer $101^2$ en écrivant $101 = 100 + 1$.
2. Calculer $99 \\times 101$.
3. Calculer $49{,}5^2$.
4. Factoriser $4x^2 - 12x + 9$, puis en déduire, sans calculer de carré à la main, la valeur de $4 \\times 51^2 - 12 \\times 51 + 9$.`,
      solution: `**1.** $(a + b)^2 = a^2 + 2ab + b^2$ avec $a = 100$ et $b = 1$ :
$101^2 = 10\\,000 + 200 + 1 = 10\\,201$.

**2.** $(a - b)(a + b) = a^2 - b^2$ avec $a = 100$ et $b = 1$ :
$99 \\times 101 = (100 - 1)(100 + 1) = 10\\,000 - 1 = 9\\,999$.

**3.** $(a - b)^2 = a^2 - 2ab + b^2$ avec $a = 50$ et $b = 0{,}5$ :
$49{,}5^2 = 2\\,500 - 2 \\times 50 \\times 0{,}5 + 0{,}25 = 2\\,500 - 50 + 0{,}25 = 2\\,450{,}25$.

**4.** $4x^2 - 12x + 9 = (2x)^2 - 2 \\times (2x) \\times 3 + 3^2 = (2x - 3)^2$.

Pour $x = 51$ : $4 \\times 51^2 - 12 \\times 51 + 9 = (2 \\times 51 - 3)^2 = 99^2 = (100 - 1)^2 = 10\\,000 - 200 + 1 = 9\\,801$.`
    },
    {
      id: "2N2-ds-10",
      title: "Prouver une égalité ou la réfuter",
      difficulty: 2,
      points: 5,
      statement: `1. Montrer que pour tout réel $x$ : $(2x + 1)^2 - 4x(x + 1) = 1$.
2. Un élève affirme : « pour tous réels $a$ et $b$, $(a + b)^2 = a^2 + b^2$ ». Montrer qu'il a tort, puis donner tous les couples $(a ; b)$ pour lesquels l'égalité est vraie.
3. Montrer que pour tout réel $x$, $x(x + 6) + 9$ est le carré d'une expression que l'on précisera.
4. Factoriser $F(x) = (3x - 1)^2 - (x + 5)^2$ sous la forme $k(x - \\alpha)(x - \\beta)$, où $k$, $\\alpha$, $\\beta$ sont des réels.`,
      solution: `**1.** $(2x + 1)^2 - 4x(x + 1) = 4x^2 + 4x + 1 - 4x^2 - 4x = 1$ pour tout réel $x$.

**2.** Contre-exemple : $a = b = 1$ donne $(a + b)^2 = 4$ mais $a^2 + b^2 = 2$. L'affirmation est fausse.

Plus précisément, $(a + b)^2 = a^2 + 2ab + b^2$, donc $(a + b)^2 = a^2 + b^2 \\iff 2ab = 0 \\iff a = 0$ ou $b = 0$. L'égalité est vraie exactement pour les couples où l'un des deux nombres est nul.

**3.** $x(x + 6) + 9 = x^2 + 6x + 9 = (x + 3)^2$.

**4.** On reconnaît $A^2 - B^2 = (A - B)(A + B)$ avec $A = 3x - 1$ et $B = x + 5$ :
$$F(x) = \\big[(3x - 1) - (x + 5)\\big]\\big[(3x - 1) + (x + 5)\\big] = (2x - 6)(4x + 4).$$
Puis $2x - 6 = 2(x - 3)$ et $4x + 4 = 4(x + 1)$, d'où $F(x) = 8(x - 3)(x + 1)$.

*Vérification en $x = 0$* : $F(0) = 1 - 25 = -24$ et $8 \\times (-3) \\times 1 = -24$.`
    },
    {
      id: "2N2-ds-11",
      title: "Réduire au même dénominateur",
      difficulty: 3,
      points: 6,
      statement: `1. Pour tout réel $x$ différent de $1$ et de $-1$, montrer que
$$\\frac{1}{x - 1} - \\frac{1}{x + 1} = \\frac{2}{x^2 - 1}.$$
2. En choisissant une valeur de $x$ adaptée, calculer $\\dfrac{1}{99} - \\dfrac{1}{101}$ sous forme de fraction irréductible.
3. Pour tout réel $x$ différent de $2$ et de $-2$, on pose $B(x) = \\dfrac{x}{x - 2} - \\dfrac{8}{x^2 - 4}$.
 a) Montrer que $B(x) = \\dfrac{x^2 + 2x - 8}{x^2 - 4}$.
 b) Développer $(x + 4)(x - 2)$, puis simplifier $B(x)$.
 c) Résoudre l'équation $B(x) = 0$.`,
      solution: `**1.** Le dénominateur commun est $(x - 1)(x + 1) = x^2 - 1$ :
$$\\frac{1}{x - 1} - \\frac{1}{x + 1} = \\frac{(x + 1) - (x - 1)}{(x - 1)(x + 1)} = \\frac{2}{x^2 - 1}.$$

**2.** Pour $x = 100$ (qui est bien différent de $1$ et $-1$) :
$$\\frac{1}{99} - \\frac{1}{101} = \\frac{2}{100^2 - 1} = \\frac{2}{9\\,999}.$$
Cette fraction est irréductible : $9\\,999$ est impair, donc $2$ et $9\\,999$ n'ont que $1$ comme diviseur commun positif.

**3. a)** Comme $x^2 - 4 = (x - 2)(x + 2)$, le dénominateur commun est $x^2 - 4$ :
$$B(x) = \\frac{x(x + 2)}{(x - 2)(x + 2)} - \\frac{8}{x^2 - 4} = \\frac{x^2 + 2x - 8}{x^2 - 4}.$$

**b)** $(x + 4)(x - 2) = x^2 - 2x + 4x - 8 = x^2 + 2x - 8$. Donc, pour $x \\neq 2$ et $x \\neq -2$ :
$$B(x) = \\frac{(x + 4)(x - 2)}{(x - 2)(x + 2)} = \\frac{x + 4}{x + 2},$$
la simplification par $x - 2$ étant permise car $x - 2 \\neq 0$.

**c)** Pour $x \\neq 2$ et $x \\neq -2$ : $B(x) = 0 \\iff x + 4 = 0 \\iff x = -4$. Comme $-4$ n'est pas une valeur interdite, l'ensemble des solutions est $\\{-4\\}$.`
    },
    {
      id: "2N2-ds-12",
      title: "Quatre entiers consécutifs et un carré parfait",
      difficulty: 4,
      points: 6,
      statement: `On s'intéresse aux nombres de la forme $N = n(n + 1)(n + 2)(n + 3) + 1$, où $n$ est un entier naturel.

1. Calculer $N$ pour $n = 1$, $n = 2$ et $n = 3$. Que remarque-t-on ?
2. Développer $n(n + 3)$ et $(n + 1)(n + 2)$.
3. On pose $X = n^2 + 3n$. Exprimer $N$ en fonction de $X$, puis montrer que $N = (n^2 + 3n + 1)^2$.
4. Sans calculer le produit, justifier que $2\\,026 \\times 2\\,027 \\times 2\\,028 \\times 2\\,029 + 1$ est le carré d'un entier que l'on déterminera.`,
      solution: `**1.**
- $n = 1$ : $N = 1 \\times 2 \\times 3 \\times 4 + 1 = 25 = 5^2$ ;
- $n = 2$ : $N = 2 \\times 3 \\times 4 \\times 5 + 1 = 121 = 11^2$ ;
- $n = 3$ : $N = 3 \\times 4 \\times 5 \\times 6 + 1 = 361 = 19^2$.

On obtient à chaque fois le carré d'un entier.

**2.** $n(n + 3) = n^2 + 3n$ et $(n + 1)(n + 2) = n^2 + 3n + 2$.

**3.** En regroupant les facteurs : $N = \\big[n(n + 3)\\big]\\big[(n + 1)(n + 2)\\big] + 1 = X(X + 2) + 1$.

Or $X(X + 2) + 1 = X^2 + 2X + 1 = (X + 1)^2$. Donc $N = (n^2 + 3n + 1)^2$.

*Vérification* : pour $n = 1$, $n^2 + 3n + 1 = 5$ ; pour $n = 2$, $11$ ; pour $n = 3$, $19$.

**4.** C'est $N$ pour $n = 2\\,026$. Donc ce nombre est le carré de
$$2\\,026^2 + 3 \\times 2\\,026 + 1 = 4\\,104\\,676 + 6\\,078 + 1 = 4\\,110\\,755.$$`
    }
  ],
  "2N3": [
    {
      id: "2N3-ds-01",
      title: "Inégalités et intervalles",
      difficulty: 1,
      points: 4,
      statement: `1. Traduire chaque condition par l'appartenance de $x$ à un intervalle :
   a) $x \\geqslant -2$ ; $\\quad$ b) $-3 < x \\leqslant 5$ ; $\\quad$ c) $x < \\frac{1}{2}$ ; $\\quad$ d) $0 \\leqslant x < 4$.
2. On pose $I = [-3 ; 5]$ et $J = \\,]1 ; 8[$.
   a) Représenter $I$ et $J$ sur une même droite graduée.
   b) Déterminer $I \\cap J$ et $I \\cup J$.
   c) Le nombre $1$ appartient-il à $I \\cap J$ ? Et le nombre $5$ ? Justifier.`,
      solution: `**1. a)** $x \\in [-2 ; +\\infty[$ ; **b)** $x \\in \\,]-3 ; 5]$ ; **c)** $x \\in \\,]-\\infty ; \\frac{1}{2}[$ ; **d)** $x \\in [0 ; 4[$.

**2. a)** Sur la droite graduée, $I$ va de $-3$ (crochet fermé) à $5$ (crochet fermé) ; $J$ va de $1$ (crochet ouvert, exclu) à $8$ (crochet ouvert, exclu).

**b)** $I \\cap J$ est l'ensemble des réels appartenant **à la fois** à $I$ et à $J$ : $I \\cap J = \\,]1 ; 5]$.
$I \\cup J$ est l'ensemble des réels appartenant **à au moins un** des deux intervalles : $I \\cup J = [-3 ; 8[$.

**c)** $1 \\notin J$ (borne exclue), donc $1 \\notin I \\cap J$. En revanche $5 \\in I$ (borne incluse) et $1 < 5 < 8$ donc $5 \\in J$ : $5 \\in I \\cap J$.`
    },
    {
      id: "2N3-ds-02",
      title: "Valeurs absolues et distances",
      difficulty: 1,
      points: 4,
      statement: `On donne $\\sqrt{2} \\approx 1{,}414$ et $\\sqrt{3} \\approx 1{,}732$.

1. Donner la valeur de $|-7|$ et de $|2{,}5|$.
2. Écrire sans valeur absolue, en justifiant le signe de la quantité à l'intérieur :
   a) $|3 - \\pi|$ ; $\\quad$ b) $|\\sqrt{2} - 1{,}5|$ ; $\\quad$ c) $|1 - \\sqrt{3}|$.
3. Sur une droite graduée, on place les points $A$ d'abscisse $-4$ et $B$ d'abscisse $2{,}5$. Calculer la distance $AB$ en utilisant une valeur absolue.
4. Déterminer les réels $x$ tels que $|x| = 6$.`,
      solution: `**1.** $|-7| = 7$ et $|2{,}5| = 2{,}5$.

**2.** On rappelle que $|a| = a$ si $a \\geqslant 0$ et $|a| = -a$ si $a < 0$.
- a) $\\pi \\approx 3{,}14 > 3$, donc $3 - \\pi < 0$ et $|3 - \\pi| = \\pi - 3$.
- b) $\\sqrt{2} \\approx 1{,}414 < 1{,}5$, donc $\\sqrt{2} - 1{,}5 < 0$ et $|\\sqrt{2} - 1{,}5| = 1{,}5 - \\sqrt{2}$.
- c) $\\sqrt{3} > 1$, donc $1 - \\sqrt{3} < 0$ et $|1 - \\sqrt{3}| = \\sqrt{3} - 1$.

**3.** $AB = |x_B - x_A| = |2{,}5 - (-4)| = |6{,}5| = 6{,}5$.

**4.** $|x| = 6$ signifie que la distance de $x$ à $0$ vaut $6$ : $x = 6$ ou $x = -6$.`
    },
    {
      id: "2N3-ds-03",
      title: "Équations et inéquations avec une valeur absolue",
      difficulty: 2,
      points: 5,
      statement: `On rappelle que $|x - a|$ est la distance entre les réels $x$ et $a$ sur la droite graduée.

1. Résoudre l'équation $|x - 3| = 5$.
2. Résoudre l'inéquation $|x + 1| \\leqslant 2$ et donner l'ensemble des solutions sous forme d'intervalle.
3. Résoudre l'inéquation $|x - 2| > 4$.
4. Écrire l'intervalle $[-1 ; 7]$ sous la forme $\\{x \\in \\mathbb{R} : |x - c| \\leqslant r\\}$, en précisant $c$ et $r$.`,
      solution: `**1.** $|x - 3| = 5$ : la distance entre $x$ et $3$ vaut $5$, donc $x = 3 - 5 = -2$ ou $x = 3 + 5 = 8$. $\\mathcal{S} = \\{-2 ; 8\\}$.

**2.** $|x + 1| = |x - (-1)|$ est la distance entre $x$ et $-1$. Elle est inférieure ou égale à $2$ si et seulement si $-1 - 2 \\leqslant x \\leqslant -1 + 2$. $\\mathcal{S} = [-3 ; 1]$.

**3.** La distance entre $x$ et $2$ est strictement supérieure à $4$ si et seulement si $x < 2 - 4$ ou $x > 2 + 4$. $\\mathcal{S} = \\,]-\\infty ; -2[\\, \\cup \\,]6 ; +\\infty[$.

**4.** Le centre de l'intervalle est $c = \\frac{-1 + 7}{2} = 3$ et son rayon est $r = \\frac{7 - (-1)}{2} = 4$. Donc $[-1 ; 7] = \\{x \\in \\mathbb{R} : |x - 3| \\leqslant 4\\}$.`
    },
    {
      id: "2N3-ds-04",
      title: "Opérations sur les encadrements",
      difficulty: 2,
      points: 5,
      statement: `On sait que $2 \\leqslant x \\leqslant 5$ et $-3 \\leqslant y \\leqslant -1$.

1. Donner un encadrement de $x + y$.
2. Donner un encadrement de $-2x$, puis de $x - y$.
3. Donner un encadrement de $\\dfrac{1}{x}$.
4. a) Donner un encadrement de $-y$.
   b) En déduire un encadrement de $x \\times (-y)$, puis de $xy$.`,
      solution: `**1.** On additionne membre à membre deux encadrements de même sens : $2 + (-3) \\leqslant x + y \\leqslant 5 + (-1)$, soit $-1 \\leqslant x + y \\leqslant 4$.

**2.** Multiplier par $-2 < 0$ change le sens des inégalités : $-10 \\leqslant -2x \\leqslant -4$.
De $-3 \\leqslant y \\leqslant -1$, on tire $1 \\leqslant -y \\leqslant 3$, puis en ajoutant : $2 + 1 \\leqslant x - y \\leqslant 5 + 3$, soit $3 \\leqslant x - y \\leqslant 8$.

**3.** $x$ et les bornes sont strictement positifs ; passer à l'inverse de nombres strictement positifs change le sens des inégalités : $\\frac{1}{5} \\leqslant \\frac{1}{x} \\leqslant \\frac{1}{2}$.

**4. a)** $1 \\leqslant -y \\leqslant 3$ (multiplication par $-1$).

**b)** $x$ et $-y$ sont positifs : on peut multiplier membre à membre les encadrements $2 \\leqslant x \\leqslant 5$ et $1 \\leqslant -y \\leqslant 3$, d'où $2 \\leqslant -xy \\leqslant 15$. En multipliant par $-1$ : $-15 \\leqslant xy \\leqslant -2$.

*Remarque :* on ne multiplie membre à membre que des encadrements de nombres **positifs**, d'où le passage par $-y$.`
    },
    {
      id: "2N3-ds-05",
      title: "La somme de deux racines dépasse-t-elle pi ?",
      difficulty: 3,
      points: 5,
      statement: `On admet les encadrements : $1{,}414 \\leqslant \\sqrt{2} \\leqslant 1{,}415$, $\\quad 1{,}732 \\leqslant \\sqrt{3} \\leqslant 1{,}733$ $\\quad$ et $\\quad 3{,}141 \\leqslant \\pi \\leqslant 3{,}142$.

1. Donner un encadrement de $\\sqrt{2} + \\sqrt{3}$ et préciser son amplitude.
2. Donner un encadrement de $\\sqrt{3} - \\sqrt{2}$.
3. Comparer $\\sqrt{2} + \\sqrt{3}$ et $\\pi$ en justifiant.
4. a) Calculer $(\\sqrt{3} - \\sqrt{2})(\\sqrt{3} + \\sqrt{2})$.
   b) En déduire une autre façon d'encadrer $\\sqrt{3} - \\sqrt{2}$ à l'aide de la question 1. Comparer la précision obtenue avec celle de la question 2.`,
      solution: `**1.** On additionne : $1{,}414 + 1{,}732 \\leqslant \\sqrt{2} + \\sqrt{3} \\leqslant 1{,}415 + 1{,}733$, soit $3{,}146 \\leqslant \\sqrt{2} + \\sqrt{3} \\leqslant 3{,}148$. Amplitude : $3{,}148 - 3{,}146 = 0{,}002$.

**2.** De $1{,}414 \\leqslant \\sqrt{2} \\leqslant 1{,}415$ on tire $-1{,}415 \\leqslant -\\sqrt{2} \\leqslant -1{,}414$. En additionnant avec l'encadrement de $\\sqrt{3}$ : $0{,}317 \\leqslant \\sqrt{3} - \\sqrt{2} \\leqslant 0{,}319$ (amplitude $0{,}002$).

**3.** $\\pi \\leqslant 3{,}142 < 3{,}146 \\leqslant \\sqrt{2} + \\sqrt{3}$, donc $\\sqrt{2} + \\sqrt{3} > \\pi$.

**4. a)** $(\\sqrt{3} - \\sqrt{2})(\\sqrt{3} + \\sqrt{2}) = 3 - 2 = 1$.

**b)** Donc $\\sqrt{3} - \\sqrt{2} = \\dfrac{1}{\\sqrt{3} + \\sqrt{2}}$. Les nombres étant positifs, le passage à l'inverse change le sens : $\\dfrac{1}{3{,}148} \\leqslant \\sqrt{3} - \\sqrt{2} \\leqslant \\dfrac{1}{3{,}146}$, soit environ $0{,}31766 \\leqslant \\sqrt{3} - \\sqrt{2} \\leqslant 0{,}31787$ (bornes arrondies vers l'extérieur).
L'amplitude est d'environ $0{,}0002$ : cet encadrement est environ dix fois plus précis que celui de la question 2.`
    },
    {
      id: "2N3-ds-06",
      title: "Tolérance de fabrication",
      difficulty: 3,
      points: 6,
      statement: `Une usine fabrique des axes métalliques dont le diamètre nominal est $12$ mm. Un axe est accepté si son diamètre $d$ (en mm) vérifie $|d - 12| \\leqslant 0{,}05$.

1. Traduire cette condition par un intervalle.
2. Parmi les mesures suivantes, lesquelles correspondent à des axes acceptés ? $\\;11{,}94$ ; $12{,}05$ ; $11{,}97$ ; $12{,}06$ ; $12{,}049$.
3. Un client plus exigeant n'accepte que les axes dont le diamètre appartient à $[11{,}97 ; 12{,}07]$. Écrire cette condition sous la forme $|d - c| \\leqslant r$.
4. a) Déterminer l'ensemble des diamètres acceptés à la fois par l'usine et par ce client.
   b) Écrire cet ensemble sous la forme $|d - c'| \\leqslant r'$.`,
      solution: `**1.** $|d - 12| \\leqslant 0{,}05 \\iff 12 - 0{,}05 \\leqslant d \\leqslant 12 + 0{,}05 \\iff d \\in [11{,}95 ; 12{,}05]$.

**2.**
- $11{,}94 < 11{,}95$ : refusé.
- $12{,}05$ : accepté (borne incluse).
- $11{,}97$ : accepté.
- $12{,}06 > 12{,}05$ : refusé.
- $12{,}049$ : accepté.

**3.** Centre $c = \\frac{11{,}97 + 12{,}07}{2} = 12{,}02$ ; rayon $r = \\frac{12{,}07 - 11{,}97}{2} = 0{,}05$. La condition s'écrit $|d - 12{,}02| \\leqslant 0{,}05$.

**4. a)** Il faut $d \\in [11{,}95 ; 12{,}05] \\cap [11{,}97 ; 12{,}07] = [11{,}97 ; 12{,}05]$.

**b)** Centre $c' = \\frac{11{,}97 + 12{,}05}{2} = 12{,}01$ et rayon $r' = \\frac{12{,}05 - 11{,}97}{2} = 0{,}04$ : la condition s'écrit $|d - 12{,}01| \\leqslant 0{,}04$.`
    },
    {
      id: "2N3-ds-07",
      title: "Comparer et approcher",
      difficulty: 4,
      points: 6,
      statement: `1. Soit $a$ un réel. Factoriser $a^2 - a$ et en déduire, selon les valeurs de $a$, la comparaison de $a$ et $a^2$.
2. Sans calculatrice, comparer $0{,}9^2$ et $0{,}9$, puis $(\\sqrt{2})^2$ et $\\sqrt{2}$.
3. Soit $a$ un réel strictement positif.
   a) Montrer que $\\dfrac{1}{1 + a} - (1 - a) = \\dfrac{a^2}{1 + a}$.
   b) En déduire que $1 - a \\leqslant \\dfrac{1}{1 + a} \\leqslant 1 - a + a^2$.
4. **Application.** En déduire un encadrement de $\\dfrac{1}{1{,}002}$ d'amplitude inférieure à $10^{-5}$.`,
      solution: `**1.** $a^2 - a = a(a - 1)$. Tableau de signes : ce produit est positif si $a \\leqslant 0$ ou $a \\geqslant 1$, négatif si $0 \\leqslant a \\leqslant 1$. Donc :
- si $a < 0$ ou $a > 1$ : $a^2 > a$ ;
- si $0 < a < 1$ : $a^2 < a$ ;
- si $a = 0$ ou $a = 1$ : $a^2 = a$.

**2.** $0{,}9 \\in \\,]0 ; 1[$, donc $0{,}9^2 < 0{,}9$ (en effet $0{,}81 < 0{,}9$). $\\sqrt{2} > 1$, donc $(\\sqrt{2})^2 > \\sqrt{2}$ (en effet $2 > \\sqrt{2}$).

**3. a)** $\\frac{1}{1 + a} - (1 - a) = \\frac{1 - (1 - a)(1 + a)}{1 + a} = \\frac{1 - (1 - a^2)}{1 + a} = \\frac{a^2}{1 + a}$.

**b)** Comme $a > 0$, $\\frac{a^2}{1 + a} \\geqslant 0$, donc $\\frac{1}{1 + a} \\geqslant 1 - a$.
De plus $1 + a > 1$, donc $\\frac{a^2}{1 + a} \\leqslant a^2$, d'où $\\frac{1}{1 + a} \\leqslant 1 - a + a^2$.

**4.** Avec $a = 0{,}002$ : $1 - a = 0{,}998$ et $a^2 = 0{,}000\\,004$. Donc
$$0{,}998 \\leqslant \\frac{1}{1{,}002} \\leqslant 0{,}998\\,004.$$
L'amplitude est $a^2 = 4 \\times 10^{-6} < 10^{-5}$.`
    },
    {
      id: "2N3-ds-08",
      title: "Moyennes arithmétique et géométrique",
      difficulty: 4,
      points: 6,
      statement: `Soient $a$ et $b$ deux réels strictement positifs. On appelle **moyenne arithmétique** de $a$ et $b$ le nombre $m = \\frac{a + b}{2}$ et **moyenne géométrique** le nombre $g = \\sqrt{ab}$.

1. Calculer $m$ et $g$ pour $a = 4$ et $b = 9$, puis pour $a = b = 5$. Comparer $m$ et $g$ dans chaque cas.
2. Montrer que $m - g = \\frac{(\\sqrt{a} - \\sqrt{b})^2}{2}$.
3. En déduire que $g \\leqslant m$, et préciser dans quel cas on a l'égalité.
4. Un rectangle a une aire de $36$ cm². Montrer que son périmètre est supérieur ou égal à $24$ cm. Pour quel rectangle est-il égal à $24$ cm ?
5. Comparer, sans calculatrice, $\\sqrt{2\\,026 \\times 2\\,028}$ et $2\\,027$.`,
      solution: `**1.** Pour $a = 4$, $b = 9$ : $m = \\frac{13}{2} = 6{,}5$ et $g = \\sqrt{36} = 6$, donc $g < m$. Pour $a = b = 5$ : $m = 5$ et $g = \\sqrt{25} = 5$, donc $g = m$.

**2.** Comme $a = (\\sqrt{a})^2$, $b = (\\sqrt{b})^2$ et $\\sqrt{a}\\sqrt{b} = \\sqrt{ab}$ (car $a, b \\geqslant 0$) :
$$(\\sqrt{a} - \\sqrt{b})^2 = a - 2\\sqrt{a}\\sqrt{b} + b = a + b - 2\\sqrt{ab}.$$
En divisant par $2$ : $\\frac{(\\sqrt{a} - \\sqrt{b})^2}{2} = \\frac{a + b}{2} - \\sqrt{ab} = m - g$.

**3.** Un carré est positif ou nul, donc $m - g \\geqslant 0$, c'est-à-dire $g \\leqslant m$. L'égalité a lieu si et seulement si $\\sqrt{a} - \\sqrt{b} = 0$, soit $\\sqrt{a} = \\sqrt{b}$, c'est-à-dire $a = b$ (on élève au carré deux nombres positifs).

**4.** Notons $a$ et $b$ les dimensions (en cm) : $ab = 36$. Le périmètre vaut $P = 2(a + b) = 4m \\geqslant 4g = 4\\sqrt{36} = 24$. L'égalité $P = 24$ a lieu si et seulement si $a = b$, c'est-à-dire pour le **carré** de côté $6$ cm.

**5.** Avec $a = 2\\,026$ et $b = 2\\,028$ : $m = \\frac{2\\,026 + 2\\,028}{2} = 2\\,027$ et $a \\neq b$, donc $\\sqrt{2\\,026 \\times 2\\,028} < 2\\,027$. (On peut le vérifier : $2\\,026 \\times 2\\,028 = (2\\,027 - 1)(2\\,027 + 1) = 2\\,027^2 - 1 < 2\\,027^2$.)`
    },
    {
      id: "2N3-ds-09",
      title: "Intersections et réunions d'intervalles",
      difficulty: 1,
      points: 4,
      statement: `On considère les intervalles $I = [-3 ; 4[$, $\;J = \\,]1 ; 7]\;$ et $\;K = \\,]-\\infty ; 0]$.

1. Représenter $I$, $J$ et $K$ sur une même droite graduée.
2. Déterminer, sous forme d'intervalle ou d'ensemble, $I \\cap J$, $\;I \\cup J$, $\;I \\cap K$, $\;J \\cap K\;$ et $\;I \\cup K$.
3. Donner la liste des entiers appartenant à $I \\cap J$.
4. Le réel $4$ appartient-il à $I \\cup J$ ? Et le réel $-3$ à $J \\cup K$ ? Justifier.`,
      solution: `**1.** Sur la droite graduée : $I$ va de $-3$ (crochet fermé, inclus) à $4$ (crochet ouvert, exclu) ; $J$ va de $1$ (exclu) à $7$ (inclus) ; $K$ part de $-\\infty$ jusqu'à $0$ (inclus).

**2.**
- $I \\cap J$ (réels à la fois dans $I$ et dans $J$) : $]1 ; 4[$.
- $I \\cup J$ (réels dans $I$ ou dans $J$) : $[-3 ; 7]$, car les deux intervalles se chevauchent.
- $I \\cap K = [-3 ; 0]$.
- $J \\cap K = \\varnothing$ : un réel de $J$ est strictement supérieur à $1$, donc ne peut pas être inférieur ou égal à $0$.
- $I \\cup K = \\,]-\\infty ; 4[$.

**3.** Les entiers $n$ tels que $1 < n < 4$ sont $2$ et $3$.

**4.** $4 \\notin I$ (borne exclue) mais $4 \\in J$ car $1 < 4 \\leqslant 7$ : donc $4 \\in I \\cup J$.

$-3 \\notin J$ (car $-3 \\leqslant 1$) mais $-3 \\in K$ (car $-3 \\leqslant 0$) : donc $-3 \\in J \\cup K$.`
    },
    {
      id: "2N3-ds-10",
      title: "Traduire un intervalle par une valeur absolue",
      difficulty: 2,
      points: 5,
      statement: `On rappelle que $|x - c|$ est la distance entre les réels $x$ et $c$ sur la droite graduée.

1. a) Déterminer le centre et le rayon de l'intervalle $[2 ; 8]$.
 b) En déduire une condition de la forme $|x - c| \\leqslant r$ équivalente à $x \\in [2 ; 8]$.
2. Même question pour $x \\in \\,]-7 ; -1[$, avec une inégalité stricte.
3. Écrire sous forme d'intervalle l'ensemble des réels $x$ tels que $|x + 2| \\leqslant 0{,}5$.
4. Décrire par une phrase, puis écrire comme réunion d'intervalles, l'ensemble des réels $x$ tels que $|x - 4| > 1$.`,
      solution: `**1. a)** Le centre est le milieu $\\frac{2 + 8}{2} = 5$, le rayon est la demi-longueur $\\frac{8 - 2}{2} = 3$.

**b)** $x \\in [2 ; 8]$ signifie que $x$ est à une distance au plus $3$ de $5$ : $|x - 5| \\leqslant 3$.

**2.** Centre $\\frac{-7 + (-1)}{2} = -4$, rayon $\\frac{-1 - (-7)}{2} = 3$. Donc $x \\in \\,]-7 ; -1[ \\iff |x - (-4)| < 3 \\iff |x + 4| < 3$.

**3.** $|x + 2| = |x - (-2)|$ : c'est la distance de $x$ à $-2$. Elle est au plus $0{,}5$ si et seulement si $-2 - 0{,}5 \\leqslant x \\leqslant -2 + 0{,}5$, c'est-à-dire $x \\in [-2{,}5 ; -1{,}5]$.

**4.** C'est l'ensemble des réels situés à une distance strictement supérieure à $1$ du réel $4$. Les réels à distance au plus $1$ de $4$ forment $[3 ; 5]$ ; les autres sont
$$]-\\infty ; 3[\; \\cup \;]5 ; +\\infty[.$$`
    },
    {
      id: "2N3-ds-11",
      title: "Mesures approchées d'une pièce rectangulaire",
      difficulty: 3,
      points: 6,
      statement: `On mesure une pièce rectangulaire avec un télémètre peu précis. On sait seulement que sa longueur $L$ et sa largeur $\\ell$ (en m) vérifient
$$12{,}4 \\leqslant L \\leqslant 12{,}6 \\qquad \\text{et} \\qquad 7{,}8 \\leqslant \\ell \\leqslant 8.$$

1. Donner un encadrement du périmètre $P = 2(L + \\ell)$ de la pièce.
2. Montrer que $|P - 40{,}8| \\leqslant 0{,}4$ et interpréter ce résultat.
3. Donner un encadrement de l'aire $\\mathcal{A} = L \\times \\ell$ de la pièce. Justifier qu'on peut multiplier les inégalités membre à membre.
4. Peut-on affirmer que l'aire dépasse $95$ m² ? Qu'elle est inférieure à $100$ m² ?
5. On veut acheter de la moquette, vendue par mètre carré entier, pour couvrir tout le sol à coup sûr. Combien de mètres carrés faut-il acheter au minimum ?`,
      solution: `**1.** En ajoutant les encadrements : $20{,}2 \\leqslant L + \\ell \\leqslant 20{,}6$. En multipliant par $2 > 0$ (l'ordre est conservé) : $40{,}4 \\leqslant P \\leqslant 41{,}2$.

**2.** $40{,}8$ est le centre de l'intervalle $[40{,}4 ; 41{,}2]$ et $0{,}4$ son rayon. Donc $P \\in [40{,}4 ; 41{,}2] \\iff |P - 40{,}8| \\leqslant 0{,}4$ : la valeur $40{,}8$ m approche le périmètre à $0{,}4$ m près.

**3.** Tous les nombres en jeu sont positifs. De $L \\geqslant 12{,}4$ et $\\ell \\geqslant 7{,}8 > 0$, on tire $L\\ell \\geqslant 12{,}4\\,\\ell \\geqslant 12{,}4 \\times 7{,}8$ ; de même pour les majorations. Ainsi
$$12{,}4 \\times 7{,}8 \\leqslant \\mathcal{A} \\leqslant 12{,}6 \\times 8, \\quad \\text{soit} \\quad 96{,}72 \\leqslant \\mathcal{A} \\leqslant 100{,}8.$$
(Multiplier membre à membre n'est valable que pour des nombres **positifs**.)

**4.** Oui, l'aire dépasse $95$ m², car $\\mathcal{A} \\geqslant 96{,}72 > 95$. En revanche, on ne peut pas affirmer qu'elle est inférieure à $100$ m² : l'encadrement autorise des valeurs entre $100$ et $100{,}8$ (par exemple $L = 12{,}6$ et $\\ell = 8$ donnent $100{,}8$).

**5.** Pour être sûr de couvrir le sol, il faut au moins $100{,}8$ m², donc acheter $101$ m² de moquette.`
    },
    {
      id: "2N3-ds-12",
      title: "Ajouter le même nombre au numérateur et au dénominateur",
      difficulty: 4,
      points: 6,
      statement: `Dans tout l'exercice, $a$, $b$ et $c$ désignent des réels strictement positifs.

1. Comparer $\\frac{3}{5}$ et $\\frac{3 + 1}{5 + 1}$, puis $\\frac{7}{5}$ et $\\frac{7 + 1}{5 + 1}$.
2. Montrer que $\\dfrac{a + c}{b + c} - \\dfrac{a}{b} = \\dfrac{c(b - a)}{b(b + c)}$.
3. En déduire la comparaison de $\\dfrac{a + c}{b + c}$ et $\\dfrac{a}{b}$ selon que $a < b$, $a = b$ ou $a > b$.
4. Sans calculatrice, comparer $\\dfrac{2\\,025}{2\\,026}$ et $\\dfrac{2\\,026}{2\\,027}$.
5. a) Montrer que $\\left|\\dfrac{a + c}{b + c} - 1\\right| < \\left|\\dfrac{a}{b} - 1\\right|$ lorsque $a \\neq b$. Interpréter sur la droite graduée.
 b) Une basketteuse a réussi $12$ tirs sur $20$. Elle réussit ensuite ses $5$ tirs suivants. Son taux de réussite augmente-t-il ? Justifier à l'aide des questions précédentes, puis calculer le nouveau taux.`,
      solution: `**1.** $\\frac{3}{5} = 0{,}6$ et $\\frac{4}{6} = \\frac{2}{3} \\approx 0{,}667$ : $\\frac{4}{6} > \\frac{3}{5}$.

$\\frac{7}{5} = 1{,}4$ et $\\frac{8}{6} = \\frac{4}{3} \\approx 1{,}333$ : $\\frac{8}{6} < \\frac{7}{5}$.

**2.** Au même dénominateur $b(b + c)$ :
$$\\frac{a + c}{b + c} - \\frac{a}{b} = \\frac{b(a + c) - a(b + c)}{b(b + c)} = \\frac{ab + bc - ab - ac}{b(b + c)} = \\frac{c(b - a)}{b(b + c)}.$$

**3.** Comme $b > 0$, $c > 0$ et $b + c > 0$, la différence a le signe de $b - a$ :
- si $a < b$ : $\\frac{a + c}{b + c} > \\frac{a}{b}$ ;
- si $a = b$ : les deux quotients valent $1$ ;
- si $a > b$ : $\\frac{a + c}{b + c} < \\frac{a}{b}$.

**4.** Avec $a = 2\\,025 < b = 2\\,026$ et $c = 1$ : $\\frac{2\\,026}{2\\,027} > \\frac{2\\,025}{2\\,026}$.

**5. a)** $\\frac{a + c}{b + c} - 1 = \\frac{a - b}{b + c}$ et $\\frac{a}{b} - 1 = \\frac{a - b}{b}$. Donc
$$\\left|\\frac{a + c}{b + c} - 1\\right| = \\frac{|a - b|}{b + c} < \\frac{|a - b|}{b} = \\left|\\frac{a}{b} - 1\\right|,$$
car $|a - b| > 0$ et $0 < b < b + c$ (diviser par un nombre plus grand donne un résultat plus petit). Sur la droite graduée, le quotient $\\frac{a + c}{b + c}$ est **plus proche de $1$** que $\\frac{a}{b}$.

**b)** Son taux passe de $\\frac{12}{20}$ à $\\frac{12 + 5}{20 + 5}$ : on ajoute $c = 5$ au numérateur et au dénominateur, avec $a = 12 < b = 20$. D'après la question 3, le taux augmente : il passe de $0{,}6$ à $\\frac{17}{25} = 0{,}68$, soit de $60\\,\\%$ à $68\\,\\%$.`
    }
  ],
  "2N4": [
    {
      id: "2N4-ds-01",
      title: "Équations et inéquation du premier degré",
      difficulty: 1,
      points: 4,
      statement: `Résoudre dans $\\mathbb{R}$ :

1. $3x - 7 = 5x + 1$
2. $(2x - 3)(x + 5) = 0$
3. $x^2 = 4x$
4. $4 - 3x \\geqslant 10$ (donner l'ensemble des solutions sous forme d'intervalle).`,
      solution: `**1.** $3x - 7 = 5x + 1 \\iff 3x - 5x = 1 + 7 \\iff -2x = 8 \\iff x = -4$. $\\mathcal{S} = \\{-4\\}$.

**2.** Un produit est nul si et seulement si l'un au moins de ses facteurs est nul : $2x - 3 = 0$ ou $x + 5 = 0$, soit $x = \\frac{3}{2}$ ou $x = -5$. $\\mathcal{S} = \\left\\{-5 ; \\frac{3}{2}\\right\\}$.

**3.** $x^2 = 4x \\iff x^2 - 4x = 0 \\iff x(x - 4) = 0 \\iff x = 0$ ou $x = 4$. $\\mathcal{S} = \\{0 ; 4\\}$.
*Attention : diviser par $x$ ferait perdre la solution $x = 0$.*

**4.** $4 - 3x \\geqslant 10 \\iff -3x \\geqslant 6 \\iff x \\leqslant -2$ (on divise par $-3 < 0$ : le sens de l'inégalité change). $\\mathcal{S} = \\,]-\\infty ; -2]$.`
    },
    {
      id: "2N4-ds-02",
      title: "Signe d'un produit de facteurs affines",
      difficulty: 1,
      points: 5,
      statement: `1. Étudier le signe de $2x - 6$ selon les valeurs de $x$, puis celui de $-3x + 12$.
2. Dresser le tableau de signes de $P(x) = (2x - 6)(-3x + 12)$.
3. En déduire l'ensemble des solutions de l'inéquation $P(x) > 0$, puis de $P(x) \\leqslant 0$.`,
      solution: `**1.** $2x - 6 = 0 \\iff x = 3$ ; le coefficient de $x$ est $2 > 0$, donc $2x - 6 < 0$ pour $x < 3$ et $2x - 6 > 0$ pour $x > 3$.
$-3x + 12 = 0 \\iff x = 4$ ; le coefficient de $x$ est $-3 < 0$, donc $-3x + 12 > 0$ pour $x < 4$ et $-3x + 12 < 0$ pour $x > 4$.

**2.** On applique la règle des signes dans chaque colonne :

| $x$ | $-\\infty$ … $3$ | $3$ … $4$ | $4$ … $+\\infty$ |
|---|---|---|---|
| $2x - 6$ | $-$ | $+$ | $+$ |
| $-3x + 12$ | $+$ | $+$ | $-$ |
| $P(x)$ | $-$ | $+$ | $-$ |

$P(x)$ s'annule en $3$ et en $4$.

**3.** $P(x) > 0 \\iff x \\in \\,]3 ; 4[$.
$P(x) \\leqslant 0 \\iff x \\in \\,]-\\infty ; 3] \\cup [4 ; +\\infty[$ (les valeurs $3$ et $4$, où $P$ s'annule, sont incluses).`
    },
    {
      id: "2N4-ds-03",
      title: "Une inéquation quotient",
      difficulty: 2,
      points: 5,
      statement: `On considère l'inéquation $(E) : \\dfrac{x + 2}{3 - x} \\geqslant 0$.

1. Pour quelle valeur de $x$ le quotient n'est-il pas défini ?
2. Dresser le tableau de signes de $\\dfrac{x + 2}{3 - x}$.
3. Résoudre $(E)$.
4. Le nombre $3$ est-il solution ? Le nombre $-2$ ? Justifier.`,
      solution: `**1.** Le quotient n'est pas défini lorsque le dénominateur est nul : $3 - x = 0 \\iff x = 3$. Cette valeur est **interdite**.

**2.** $x + 2$ s'annule en $-2$ (coefficient $1 > 0$ : négatif puis positif) ; $3 - x$ s'annule en $3$ (coefficient $-1 < 0$ : positif puis négatif).

| $x$ | $-\\infty$ … $-2$ | $-2$ … $3$ | $3$ … $+\\infty$ |
|---|---|---|---|
| $x + 2$ | $-$ | $+$ | $+$ |
| $3 - x$ | $+$ | $+$ | $-$ |
| quotient | $-$ | $+$ | $-$ |

Le quotient vaut $0$ en $-2$ et n'est pas défini en $3$ (double barre dans le tableau).

**3.** $\\mathcal{S} = [-2 ; 3[$.

**4.** $3$ n'est pas solution : le quotient n'y est pas défini. $-2$ est solution : le quotient y vaut $0$ et $0 \\geqslant 0$.`
    },
    {
      id: "2N4-ds-04",
      title: "Factoriser pour résoudre",
      difficulty: 2,
      points: 5,
      statement: `1. a) Factoriser $A(x) = (x - 1)^2 - 16$.
   b) Résoudre $A(x) = 0$.
   c) Résoudre $A(x) < 0$ à l'aide d'un tableau de signes.
2. a) Factoriser $B(x) = (2x + 1)(x - 4) - (2x + 1)(3x - 2)$.
   b) Résoudre $B(x) = 0$.`,
      solution: `**1. a)** $A(x) = (x - 1)^2 - 4^2 = (x - 1 - 4)(x - 1 + 4) = (x - 5)(x + 3)$.

**b)** $(x - 5)(x + 3) = 0 \\iff x = 5$ ou $x = -3$. $\\mathcal{S} = \\{-3 ; 5\\}$.

**c)**

| $x$ | $-\\infty$ … $-3$ | $-3$ … $5$ | $5$ … $+\\infty$ |
|---|---|---|---|
| $x + 3$ | $-$ | $+$ | $+$ |
| $x - 5$ | $-$ | $-$ | $+$ |
| $A(x)$ | $+$ | $-$ | $+$ |

$A(x) < 0 \\iff x \\in \\,]-3 ; 5[$.

**2. a)** Facteur commun $(2x + 1)$ :
$B(x) = (2x + 1)\\big[(x - 4) - (3x - 2)\\big] = (2x + 1)(x - 4 - 3x + 2) = (2x + 1)(-2x - 2)$, soit $B(x) = -2(2x + 1)(x + 1)$.

**b)** $B(x) = 0 \\iff 2x + 1 = 0$ ou $x + 1 = 0 \\iff x = -\\frac{1}{2}$ ou $x = -1$. $\\mathcal{S} = \\left\\{-1 ; -\\frac{1}{2}\\right\\}$.`
    },
    {
      id: "2N4-ds-05",
      title: "Équations et inéquation rationnelles",
      difficulty: 3,
      points: 6,
      statement: `1. Résoudre l'équation $\\dfrac{2x - 1}{x + 3} = 1$, en précisant la valeur interdite.
2. Résoudre l'équation $\\dfrac{3}{x - 1} = \\dfrac{2}{x + 2}$.
3. On veut résoudre l'inéquation $\\dfrac{1}{x - 2} \\geqslant 3$.
   a) Montrer que, pour $x \\neq 2$, elle équivaut à $\\dfrac{7 - 3x}{x - 2} \\geqslant 0$.
   b) Résoudre l'inéquation.`,
      solution: `**1.** Valeur interdite : $x = -3$. Pour $x \\neq -3$ : $\\frac{2x - 1}{x + 3} = 1 \\iff 2x - 1 = x + 3 \\iff x = 4$. Comme $4 \\neq -3$, $\\mathcal{S} = \\{4\\}$.

**2.** Valeurs interdites : $1$ et $-2$. Pour $x \\notin \\{-2 ; 1\\}$, par produit en croix :
$3(x + 2) = 2(x - 1) \\iff 3x + 6 = 2x - 2 \\iff x = -8$. Comme $-8$ n'est pas interdite, $\\mathcal{S} = \\{-8\\}$.

**3. a)** Pour $x \\neq 2$ :
$$\\frac{1}{x - 2} \\geqslant 3 \\iff \\frac{1}{x - 2} - 3 \\geqslant 0 \\iff \\frac{1 - 3(x - 2)}{x - 2} \\geqslant 0 \\iff \\frac{7 - 3x}{x - 2} \\geqslant 0.$$

**b)** $7 - 3x$ s'annule en $\\frac{7}{3}$ (positif avant, négatif après) ; $x - 2$ s'annule en $2$ (négatif avant, positif après). Comme $2 < \\frac{7}{3}$ :

| $x$ | $-\\infty$ … $2$ | $2$ … $\\frac{7}{3}$ | $\\frac{7}{3}$ … $+\\infty$ |
|---|---|---|---|
| $7 - 3x$ | $+$ | $+$ | $-$ |
| $x - 2$ | $-$ | $+$ | $+$ |
| quotient | $-$ | $+$ | $-$ |

$\\mathcal{S} = \\left]2 ; \\frac{7}{3}\\right]$.

*Contrôle :* pour $x = 2{,}2$, $\\frac{1}{0{,}2} = 5 \\geqslant 3$, donc $2{,}2$ est bien solution ; pour $x = 3$, $\\frac{1}{1} = 1 < 3$, donc $3$ n'est pas solution.`
    },
    {
      id: "2N4-ds-06",
      title: "Trouver l'erreur dans une résolution",
      difficulty: 3,
      points: 6,
      statement: `Un élève doit résoudre l'inéquation $\\dfrac{x}{x + 1} < 2$ pour $x \\neq -1$. Il écrit :

> « $\\frac{x}{x + 1} < 2$ donc $x < 2(x + 1)$, donc $x < 2x + 2$, donc $-x < 2$, donc $x > -2$. »

1. Vérifier que $x = -1{,}5$ appartient à l'ensemble trouvé par l'élève mais n'est pas solution de l'inéquation.
2. Expliquer l'erreur commise.
3. Montrer que l'inéquation équivaut à $\\dfrac{-x - 2}{x + 1} < 0$.
4. Résoudre correctement l'inéquation à l'aide d'un tableau de signes.`,
      solution: `**1.** $-1{,}5 > -2$, donc $-1{,}5$ appartient à l'ensemble trouvé par l'élève. Mais $\\frac{-1{,}5}{-1{,}5 + 1} = \\frac{-1{,}5}{-0{,}5} = 3$ et $3 < 2$ est faux : $-1{,}5$ n'est pas solution.

**2.** L'élève a multiplié les deux membres par $x + 1$ sans connaître son signe. Si $x + 1 < 0$, cette multiplication **change le sens** de l'inégalité. Il fallait distinguer des cas ou, mieux, tout passer dans un membre.

**3.** $\\frac{x}{x + 1} - 2 = \\frac{x - 2(x + 1)}{x + 1} = \\frac{-x - 2}{x + 1}$. Donc l'inéquation équivaut à $\\frac{-x - 2}{x + 1} < 0$.

**4.** $-x - 2$ s'annule en $-2$ (coefficient $-1$ : positif puis négatif) ; $x + 1$ s'annule en $-1$.

| $x$ | $-\\infty$ … $-2$ | $-2$ … $-1$ | $-1$ … $+\\infty$ |
|---|---|---|---|
| $-x - 2$ | $+$ | $-$ | $-$ |
| $x + 1$ | $-$ | $-$ | $+$ |
| quotient | $-$ | $+$ | $-$ |

$\\mathcal{S} = \\,]-\\infty ; -2[\\, \\cup \\,]-1 ; +\\infty[$.
*Contrôle :* $x = -3$ donne $\\frac{-3}{-2} = 1{,}5 < 2$ : c'est vrai, alors que l'élève avait exclu cette valeur.`
    },
    {
      id: "2N4-ds-07",
      title: "Déformer un rectangle",
      difficulty: 4,
      points: 6,
      statement: `Un rectangle mesure $10$ cm sur $6$ cm. On note $x$ un réel de l'intervalle $[0 ; 6]$.

**Partie A.** On augmente la longueur de $x$ cm et on diminue la largeur de $x$ cm.
1. Montrer que le périmètre ne change pas.
2. On note $A(x)$ la nouvelle aire. Montrer que $A(x) - 60 = -x(x + 4)$.
3. L'aire peut-elle augmenter ? Justifier.

**Partie B.** On augmente maintenant la longueur de $2x$ cm et on diminue la largeur de $x$ cm.
4. Montrer que la nouvelle aire $B(x)$ vérifie $B(x) - 60 = 2x(1 - x)$.
5. Pour quelles valeurs de $x$ l'aire augmente-t-elle ? Justifier à l'aide d'un tableau de signes.`,
      solution: `**1.** Nouveau périmètre : $2\\big[(10 + x) + (6 - x)\\big] = 2 \\times 16 = 32$ cm, comme au départ ($2 \\times (10 + 6) = 32$).

**2.** $A(x) = (10 + x)(6 - x) = 60 - 10x + 6x - x^2 = 60 - 4x - x^2$, donc $A(x) - 60 = -x^2 - 4x = -x(x + 4)$.

**3.** Pour $x \\in \\,]0 ; 6]$ : $x > 0$ et $x + 4 > 0$, donc $-x(x + 4) < 0$ et $A(x) < 60$. Pour $x = 0$, l'aire est inchangée. L'aire ne peut donc jamais augmenter.

**4.** $B(x) = (10 + 2x)(6 - x) = 60 - 10x + 12x - 2x^2 = 60 + 2x - 2x^2$, donc $B(x) - 60 = 2x - 2x^2 = 2x(1 - x)$.

**5.** Sur $[0 ; 6]$ :

| $x$ | $0$ … $1$ | $1$ … $6$ |
|---|---|---|
| $2x$ | $+$ | $+$ |
| $1 - x$ | $+$ | $-$ |
| $B(x) - 60$ | $+$ | $-$ |

($B(x) - 60$ s'annule en $0$ et en $1$.) L'aire augmente si et seulement si $x \\in \\,]0 ; 1[$.
*Exemple :* $x = 0{,}5$ donne $11 \\times 5{,}5 = 60{,}5 > 60$.`
    },
    {
      id: "2N4-ds-08",
      title: "Vitesse moyenne sur un aller-retour",
      difficulty: 4,
      points: 7,
      statement: `Un cycliste parcourt une distance $d$ (en km) à l'aller à la vitesse de $20$ km/h, puis revient par le même chemin à la vitesse $v$ (en km/h, $v > 0$).

1. Exprimer la durée totale du trajet en fonction de $d$ et $v$, puis montrer que la vitesse moyenne sur l'aller-retour est
$$V(v) = \\frac{40v}{20 + v}.$$
2. Calculer $V(10)$ et $V(30)$. La vitesse moyenne est-elle la moyenne des deux vitesses ?
3. À quelle vitesse doit-il revenir pour que sa vitesse moyenne soit de $24$ km/h ?
4. Résoudre l'inéquation $V(v) \\geqslant 25$ et interpréter.
5. Montrer que $40 - V(v) = \\dfrac{800}{20 + v}$. Que peut-on en déduire ?`,
      solution: `**1.** Durée aller : $\\frac{d}{20}$ ; durée retour : $\\frac{d}{v}$. Durée totale : $t = \\frac{d}{20} + \\frac{d}{v} = \\frac{d(v + 20)}{20v}$.
La vitesse moyenne est la distance totale divisée par la durée totale :
$$V = \\frac{2d}{t} = 2d \\times \\frac{20v}{d(20 + v)} = \\frac{40v}{20 + v}.$$

**2.** $V(10) = \\frac{400}{30} = \\frac{40}{3} \\approx 13{,}3$ km/h et $V(30) = \\frac{1200}{50} = 24$ km/h. Ce n'est pas la moyenne des vitesses : par exemple $\\frac{20 + 30}{2} = 25 \\neq 24$. (Le cycliste passe plus de temps à la vitesse la plus faible.)

**3.** D'après la question 2, $V(30) = 24$. Par le calcul, pour $v > 0$ : $\\frac{40v}{20 + v} = 24 \\iff 40v = 24(20 + v) \\iff 16v = 480 \\iff v = 30$ km/h.

**4.** Comme $20 + v > 0$, on peut multiplier sans changer le sens :
$\\frac{40v}{20 + v} \\geqslant 25 \\iff 40v \\geqslant 500 + 25v \\iff 15v \\geqslant 500 \\iff v \\geqslant \\frac{100}{3} \\approx 33{,}3$.
Il doit revenir à au moins $\\frac{100}{3}$ km/h, soit environ $33{,}3$ km/h, pour avoir une moyenne d'au moins $25$ km/h.

**5.** $40 - \\frac{40v}{20 + v} = \\frac{40(20 + v) - 40v}{20 + v} = \\frac{800}{20 + v}$.
Ce quotient est strictement positif pour tout $v > 0$, donc $V(v) < 40$ : **quelle que soit la vitesse du retour, la vitesse moyenne restera inférieure à $40$ km/h**, le double de la vitesse aller.`
    },
    {
      id: "2N4-ds-09",
      title: "Isoler une grandeur dans une formule",
      difficulty: 1,
      points: 4,
      statement: `Dans chaque formule, toutes les grandeurs sont strictement positives.

1. La vitesse moyenne est $v = \\dfrac{d}{t}$. Exprimer $t$ en fonction de $d$ et $v$, puis calculer la durée d'un trajet de $150$ km à $60$ km/h.
2. Le périmètre d'un rectangle est $P = 2(L + \\ell)$. Exprimer $\\ell$ en fonction de $P$ et $L$.
3. L'énergie cinétique d'un objet est $E = \\dfrac{1}{2}mv^2$. Exprimer $m$ en fonction de $E$ et $v$.
4. Deux résistances $R_1$ et $R_2$ montées en parallèle équivalent à une résistance $R$ telle que $\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}$.
 a) Montrer que $R = \\dfrac{R_1 R_2}{R_1 + R_2}$.
 b) Calculer $R$ pour $R_1 = 6$ Ω et $R_2 = 3$ Ω.`,
      solution: `**1.** $v = \\frac{d}{t} \\iff vt = d \\iff t = \\frac{d}{v}$ (car $t \\neq 0$ et $v \\neq 0$). Pour $d = 150$ et $v = 60$ : $t = \\frac{150}{60} = 2{,}5$ h, soit $2$ h $30$ min.

**2.** $P = 2(L + \\ell) \\iff \\frac{P}{2} = L + \\ell \\iff \\ell = \\frac{P}{2} - L$.

**3.** $E = \\frac{1}{2}mv^2 \\iff 2E = mv^2 \\iff m = \\frac{2E}{v^2}$ (car $v^2 \\neq 0$).

**4. a)** On réduit au même dénominateur : $\\frac{1}{R} = \\frac{R_2 + R_1}{R_1 R_2}$. Deux nombres non nuls égaux ont des inverses égaux, donc $R = \\frac{R_1 R_2}{R_1 + R_2}$.

**b)** $R = \\frac{6 \\times 3}{6 + 3} = \\frac{18}{9} = 2$ Ω. (On vérifie : $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{1}{2}$.)`
    },
    {
      id: "2N4-ds-10",
      title: "Signe d'un produit de trois facteurs",
      difficulty: 2,
      points: 5,
      statement: `On considère, pour tout réel $x$, $P(x) = (x + 2)(3 - x)(2x - 1)$.

1. Étudier le signe de chacun des trois facteurs selon les valeurs de $x$.
2. Dresser le tableau de signes de $P(x)$.
3. Résoudre l'inéquation $P(x) \\leqslant 0$.
4. Sans calcul supplémentaire, donner le signe de $P(-100)$ et de $P(1)$.`,
      solution: `**1.**
- $x + 2 > 0 \\iff x > -2$ : négatif avant $-2$, positif après.
- $3 - x > 0 \\iff x < 3$ : positif avant $3$, négatif après (coefficient de $x$ négatif).
- $2x - 1 > 0 \\iff x > \\frac{1}{2}$ : négatif avant $\\frac{1}{2}$, positif après.

**2.** On applique la règle des signes sur chaque intervalle délimité par $-2$, $\\frac{1}{2}$ et $3$.

| $x$ | $-\\infty$ | | $-2$ | | $\\frac{1}{2}$ | | $3$ | | $+\\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $x + 2$ | | $-$ | $0$ | $+$ | | $+$ | | $+$ | |
| $3 - x$ | | $+$ | | $+$ | | $+$ | $0$ | $-$ | |
| $2x - 1$ | | $-$ | | $-$ | $0$ | $+$ | | $+$ | |
| $P(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | $0$ | $-$ | |

**3.** $P(x) \\leqslant 0$ lorsque $P(x)$ est négatif ou nul : $\\mathcal{S} = \\left[-2 ; \\frac{1}{2}\\right] \\cup [3 ; +\\infty[$.

**4.** $-100 < -2$, donc $P(-100) > 0$. Et $1 \\in \\left]\\frac{1}{2} ; 3\\right[$, donc $P(1) > 0$ (en effet $P(1) = 3 \\times 2 \\times 1 = 6$).`
    },
    {
      id: "2N4-ds-11",
      title: "Renforcer la concentration d'une solution salée",
      difficulty: 3,
      points: 6,
      statement: `Un récipient contient $2$ L d'eau salée dont la concentration en sel est de $10\\,\\%$ (en volume) : il contient donc $0{,}2$ L de sel. On y ajoute $x$ litres ($x \\geqslant 0$) d'une solution concentrée à $40\\,\\%$.

1. Montrer que la concentration du mélange obtenu est $c(x) = \\dfrac{0{,}2 + 0{,}4x}{2 + x}$.
2. Calculer $c(1)$ et $c(4)$.
3. Déterminer la quantité de solution concentrée à ajouter pour obtenir exactement une concentration de $30\\,\\%$.
4. Résoudre l'inéquation $c(x) \\geqslant 0{,}25$ sur $[0 ; +\\infty[$ et interpréter.
5. Montrer que, pour tout $x \\geqslant 0$, $c(x) - 0{,}4 = \\dfrac{-0{,}6}{2 + x}$. Peut-on atteindre une concentration de $40\\,\\%$ ?`,
      solution: `**1.** Le mélange a un volume de $2 + x$ litres. Il contient $0{,}2$ L de sel provenant de la première solution et $0{,}4x$ L provenant de la seconde. Sa concentration est donc $c(x) = \\frac{0{,}2 + 0{,}4x}{2 + x}$.

**2.** $c(1) = \\frac{0{,}6}{3} = 0{,}2$, soit $20\\,\\%$ ; $\;c(4) = \\frac{1{,}8}{6} = 0{,}3$, soit $30\\,\\%$.

**3.** Comme $2 + x > 0$ :
$c(x) = 0{,}3 \\iff 0{,}2 + 0{,}4x = 0{,}3(2 + x) \\iff 0{,}2 + 0{,}4x = 0{,}6 + 0{,}3x \\iff 0{,}1x = 0{,}4 \\iff x = 4$.

Il faut ajouter $4$ L de solution concentrée (ce que confirme $c(4) = 0{,}3$).

**4.** Comme $2 + x > 0$, on peut multiplier les deux membres par $2 + x$ sans changer le sens de l'inégalité :
$c(x) \\geqslant 0{,}25 \\iff 0{,}2 + 0{,}4x \\geqslant 0{,}5 + 0{,}25x \\iff 0{,}15x \\geqslant 0{,}3 \\iff x \\geqslant 2$.

$\\mathcal{S} = [2 ; +\\infty[$ : il faut ajouter au moins $2$ L de solution concentrée pour atteindre $25\\,\\%$.

**5.** $c(x) - 0{,}4 = \\frac{0{,}2 + 0{,}4x - 0{,}4(2 + x)}{2 + x} = \\frac{0{,}2 + 0{,}4x - 0{,}8 - 0{,}4x}{2 + x} = \\frac{-0{,}6}{2 + x}$.

Ce quotient est strictement négatif pour tout $x \\geqslant 0$, donc $c(x) < 0{,}4$ : on n'atteint jamais $40\\,\\%$ (le mélange contient toujours une part de la solution initiale, moins concentrée).`
    },
    {
      id: "2N4-ds-12",
      title: "Comparer deux quotients",
      difficulty: 4,
      points: 7,
      statement: `On veut résoudre l'inéquation $(I)$ : $\\dfrac{x + 1}{x - 2} \\geqslant \\dfrac{x - 3}{x + 2}$.

1. Quelles sont les valeurs interdites ?
2. Un élève « fait le produit en croix » et écrit : $(x + 1)(x + 2) \\geqslant (x - 3)(x - 2)$. Résoudre cette inéquation, puis tester la valeur $x = 0$ dans $(I)$. Que peut-on dire de la méthode de l'élève ?
3. Montrer que pour tout $x$ différent de $2$ et de $-2$ :
$$\\frac{x + 1}{x - 2} - \\frac{x - 3}{x + 2} = \\frac{4(2x - 1)}{(x - 2)(x + 2)}.$$
4. Dresser le tableau de signes de ce quotient et résoudre $(I)$.`,
      solution: `**1.** Les dénominateurs s'annulent pour $x = 2$ et $x = -2$ : ce sont les valeurs interdites.

**2.** $(x + 1)(x + 2) = x^2 + 3x + 2$ et $(x - 3)(x - 2) = x^2 - 5x + 6$. L'inéquation de l'élève équivaut à $8x \\geqslant 4$, soit $x \\geqslant \\frac{1}{2}$.

Or pour $x = 0$ : $\\frac{0 + 1}{0 - 2} = -\\frac{1}{2}$ et $\\frac{0 - 3}{0 + 2} = -\\frac{3}{2}$. Comme $-\\frac{1}{2} \\geqslant -\\frac{3}{2}$, $0$ est solution de $(I)$, alors qu'il ne vérifie pas $x \\geqslant \\frac{1}{2}$.

La méthode est fausse : multiplier par $(x - 2)(x + 2)$ ne conserve le sens de l'inégalité que si ce produit est positif, ce qu'on ignore a priori.

**3.** Au même dénominateur $(x - 2)(x + 2)$ :
$$\\frac{(x + 1)(x + 2) - (x - 3)(x - 2)}{(x - 2)(x + 2)} = \\frac{x^2 + 3x + 2 - x^2 + 5x - 6}{(x - 2)(x + 2)} = \\frac{8x - 4}{(x - 2)(x + 2)} = \\frac{4(2x - 1)}{(x - 2)(x + 2)}.$$

**4.** $(I)$ équivaut à : ce quotient est positif ou nul.

| $x$ | $-\\infty$ | | $-2$ | | $\\frac{1}{2}$ | | $2$ | | $+\\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $4(2x - 1)$ | | $-$ | | $-$ | $0$ | $+$ | | $+$ | |
| $x + 2$ | | $-$ | $0$ | $+$ | | $+$ | | $+$ | |
| $x - 2$ | | $-$ | | $-$ | | $-$ | $0$ | $+$ | |
| quotient | | $-$ | ‖ | $+$ | $0$ | $-$ | ‖ | $+$ | |

Le quotient est positif ou nul sur $\\left]-2 ; \\frac{1}{2}\\right]$ et sur $]2 ; +\\infty[$ (les valeurs interdites sont exclues, $\\frac{1}{2}$ est inclus car le quotient y est nul).

$$\\mathcal{S} = \\left]-2 ; \\frac{1}{2}\\right] \\cup \\,]2 ; +\\infty[.$$
On retrouve que $0$ est solution, contrairement à ce que donnait la méthode de l'élève.`
    }
  ],
  "2N5": [
    {
      id: "2N5-ds-01",
      title: "Effectifs et proportions dans un lycée",
      difficulty: 1,
      points: 4,
      statement: `Un lycée compte $1\\,200$ élèves. $45\\,\\%$ d'entre eux sont en classe de seconde. Parmi les élèves de seconde, $40\\,\\%$ suivent un enseignement optionnel de langue.

1. Combien y a-t-il d'élèves de seconde dans ce lycée ?
2. Combien d'élèves de seconde suivent l'option de langue ?
3. Quelle proportion des élèves du lycée représentent les élèves de seconde suivant l'option ? Donner le résultat en pourcentage.
4. Le lycée compte $330$ élèves de terminale. Quelle proportion des élèves du lycée cela représente-t-il ?`,
      solution: `**1.** $1\\,200 \\times 0{,}45 = 540$ élèves de seconde.

**2.** $540 \\times 0{,}40 = 216$ élèves.

**3.** C'est une proportion de proportion : $p = 0{,}45 \\times 0{,}40 = 0{,}18$, soit $18\\,\\%$ des élèves du lycée.
*Vérification :* $\\frac{216}{1\\,200} = 0{,}18$.

**4.** $\\frac{330}{1\\,200} = 0{,}275$, soit $27{,}5\\,\\%$.`
    },
    {
      id: "2N5-ds-02",
      title: "Coefficients multiplicateurs",
      difficulty: 1,
      points: 4,
      statement: `1. Un article coûte $80$ €. Son prix augmente de $15\\,\\%$. Quel est le nouveau prix ?
2. Donner le coefficient multiplicateur associé à une baisse de $30\\,\\%$, puis à une hausse de $2{,}5\\,\\%$.
3. Quelle évolution, exprimée en pourcentage, correspond à un coefficient multiplicateur égal à $1{,}08$ ? À $0{,}85$ ?
4. Le nombre d'abonnés d'une association est passé de $250$ à $310$. Calculer le taux d'évolution.`,
      solution: `**1.** Une hausse de $15\\,\\%$ correspond au coefficient $1 + \\frac{15}{100} = 1{,}15$ : $80 \\times 1{,}15 = 92$ €.

**2.** Baisse de $30\\,\\%$ : $c = 1 - 0{,}30 = 0{,}70$. Hausse de $2{,}5\\,\\%$ : $c = 1 + 0{,}025 = 1{,}025$.

**3.** $c = 1{,}08 = 1 + 0{,}08$ : hausse de $8\\,\\%$. $c = 0{,}85 = 1 - 0{,}15$ : baisse de $15\\,\\%$.

**4.** $t = \\frac{V_A - V_D}{V_D} = \\frac{310 - 250}{250} = \\frac{60}{250} = 0{,}24$, soit une hausse de $24\\,\\%$.`
    },
    {
      id: "2N5-ds-03",
      title: "Évolutions successives",
      difficulty: 2,
      points: 5,
      statement: `1. Le prix d'un vélo augmente de $20\\,\\%$ puis baisse de $20\\,\\%$. Un client affirme qu'il est revenu à son prix initial. A-t-il raison ? Déterminer le taux d'évolution global.
2. Le loyer d'un appartement augmente de $5\\,\\%$ par an pendant trois ans. Quel est le taux d'évolution global sur trois ans (arrondi à $0{,}01\\,\\%$) ?
3. Une action perd $40\\,\\%$ de sa valeur, puis gagne $50\\,\\%$. Quelle est l'évolution globale ?`,
      solution: `**1.** Le coefficient global est le produit des coefficients : $1{,}20 \\times 0{,}80 = 0{,}96 = 1 - 0{,}04$. Le prix a globalement **baissé de $4\\,\\%$** : le client a tort. (La baisse de $20\\,\\%$ s'applique à un prix plus élevé que celui auquel s'est appliquée la hausse.)

**2.** $c = 1{,}05^3 = 1{,}157\\,625$, soit une hausse globale d'environ $15{,}76\\,\\%$ (et non $15\\,\\%$).

**3.** $c = 0{,}60 \\times 1{,}50 = 0{,}90$ : l'action a globalement **perdu $10\\,\\%$**.`
    },
    {
      id: "2N5-ds-04",
      title: "Retrouver une valeur initiale, évolution réciproque",
      difficulty: 2,
      points: 5,
      statement: `1. Après une hausse de $25\\,\\%$, un abonnement coûte $150$ €. Quel était son prix avant la hausse ?
2. Quelle baisse, en pourcentage, faudrait-il appliquer au nouveau prix pour revenir au prix initial ?
3. Après une baisse de $40\\,\\%$, quelle hausse faut-il appliquer pour revenir à la valeur initiale ? Arrondir à $0{,}1\\,\\%$.
4. Un prix toutes taxes comprises (TTC) s'obtient en augmentant le prix hors taxes (HT) de $20\\,\\%$. Un article coûte $138$ € TTC. Quel est son prix HT ?`,
      solution: `**1.** On note $P$ le prix initial : $P \\times 1{,}25 = 150$, donc $P = \\frac{150}{1{,}25} = 120$ €.

**2.** Le coefficient réciproque est $\\frac{1}{1{,}25} = 0{,}8 = 1 - 0{,}2$ : il faut une baisse de $20\\,\\%$ (et non de $25\\,\\%$). *Vérification :* $150 \\times 0{,}8 = 120$.

**3.** Coefficient de la baisse : $0{,}6$. Coefficient réciproque : $\\frac{1}{0{,}6} = \\frac{5}{3} \\approx 1{,}6667$. Il faut une hausse d'environ $66{,}7\\,\\%$.

**4.** $\\text{HT} \\times 1{,}2 = 138$, donc $\\text{HT} = \\frac{138}{1{,}2} = 115$ €.`
    },
    {
      id: "2N5-ds-05",
      title: "Pratique sportive dans une commune",
      difficulty: 3,
      points: 6,
      statement: `Dans une commune, $52\\,\\%$ des habitants sont des femmes. Une enquête indique que $35\\,\\%$ des femmes et $28\\,\\%$ des hommes de la commune pratiquent un sport en club.

1. Quelle proportion des habitants de la commune sont des femmes pratiquant un sport en club ?
2. Quelle proportion des habitants de la commune sont des hommes pratiquant un sport en club ?
3. En déduire la proportion d'habitants pratiquant un sport en club.
4. Parmi les sportifs en club, quelle est la proportion de femmes ? Arrondir à $0{,}1\\,\\%$.
5. La commune compte $8\\,500$ habitants. Combien d'hommes pratiquent un sport en club ?`,
      solution: `**1.** Proportion de proportion : $0{,}52 \\times 0{,}35 = 0{,}182$, soit $18{,}2\\,\\%$ des habitants.

**2.** Les hommes représentent $1 - 0{,}52 = 0{,}48$ des habitants. $0{,}48 \\times 0{,}28 = 0{,}1344$, soit $13{,}44\\,\\%$.

**3.** Les deux sous-populations sont disjointes : $0{,}182 + 0{,}1344 = 0{,}3164$, soit $31{,}64\\,\\%$.

**4.** On cherche la part des femmes **parmi les sportifs** : $\\frac{0{,}182}{0{,}3164} \\approx 0{,}575$, soit environ $57{,}5\\,\\%$.
*(Attention : ce n'est ni $52\\,\\%$, ni $35\\,\\%$ ; la population de référence a changé.)*

**5.** $8\\,500 \\times 0{,}1344 = 1\\,142{,}4$ : environ $1\\,142$ hommes. *(La valeur non entière vient de ce que les pourcentages de l'enquête sont arrondis.)*`
    },
    {
      id: "2N5-ds-06",
      title: "Taux d'évolution moyen",
      difficulty: 3,
      points: 6,
      statement: `1. La population d'une ville est passée de $50\\,000$ à $60\\,500$ habitants en deux ans. On suppose que le taux d'évolution annuel $t$ a été le même les deux années.
   a) Justifier que $(1 + t)^2 = 1{,}21$.
   b) En déduire $t$.
2. Dans une autre ville, la population a augmenté de $5\\,\\%$ la première année puis de $15\\,\\%$ la seconde.
   a) Calculer le taux d'évolution global sur les deux ans.
   b) Un journaliste écrit : « cela revient à une hausse de $10\\,\\%$ par an ». Montrer qu'il se trompe.
   c) Déterminer le taux annuel moyen, c'est-à-dire le taux $t_m$ qui, appliqué deux années de suite, donnerait la même évolution globale. Arrondir à $0{,}01\\,\\%$.`,
      solution: `**1. a)** Le coefficient sur un an est $1 + t$ ; sur deux ans, $(1 + t)^2$. Or le coefficient global vaut $\\frac{60\\,500}{50\\,000} = 1{,}21$. Donc $(1 + t)^2 = 1{,}21$.

**b)** $1 + t > 0$, donc $1 + t = \\sqrt{1{,}21} = 1{,}1$ et $t = 0{,}1$ : hausse de $10\\,\\%$ par an.

**2. a)** $1{,}05 \\times 1{,}15 = 1{,}2075$ : hausse globale de $20{,}75\\,\\%$.

**b)** Deux hausses de $10\\,\\%$ donnent $1{,}1^2 = 1{,}21$, soit $+21\\,\\%$, et non $+20{,}75\\,\\%$ : le journaliste se trompe.

**c)** On cherche $t_m$ tel que $(1 + t_m)^2 = 1{,}2075$, d'où $1 + t_m = \\sqrt{1{,}2075} \\approx 1{,}0989$. Le taux annuel moyen est d'environ $9{,}89\\,\\%$, légèrement inférieur à $10\\,\\%$.`
    },
    {
      id: "2N5-ds-07",
      title: "TVA et soldes",
      difficulty: 4,
      points: 6,
      statement: `Dans un magasin, le prix TTC s'obtient en appliquant au prix HT une TVA de $20\\,\\%$, sauf pour certains produits alimentaires (TVA de $5{,}5\\,\\%$).

1. Un article coûte $75$ € HT. Quel est son prix TTC ?
2. Un produit alimentaire coûte $211$ € TTC. Quel est son prix HT ?
3. Pendant les soldes, un manteau subit une première démarque de $30\\,\\%$, puis une seconde démarque de $20\\,\\%$ sur le prix soldé.
   a) Une affiche annonce « jusqu'à $-50\\,\\%$ ». Est-ce exact pour ce manteau ? Calculer la baisse globale.
   b) Quelle aurait dû être la seconde démarque pour obtenir réellement une baisse globale de $50\\,\\%$ ? Arrondir à $0{,}1\\,\\%$.
4. Un commerçant peu scrupuleux augmente ses prix de $25\\,\\%$ juste avant les soldes, puis affiche « $-20\\,\\%$ ». Que paie finalement le client par rapport au prix d'origine ?`,
      solution: `**1.** $75 \\times 1{,}2 = 90$ € TTC.

**2.** $\\text{HT} \\times 1{,}055 = 211$, donc $\\text{HT} = \\frac{211}{1{,}055} = 200$ €.

**3. a)** Coefficient global : $0{,}70 \\times 0{,}80 = 0{,}56 = 1 - 0{,}44$. La baisse globale est de $44\\,\\%$, pas de $50\\,\\%$ : l'annonce est trompeuse pour ce manteau.

**b)** On cherche $c$ tel que $0{,}7 \\times c = 0{,}5$, d'où $c = \\frac{5}{7} \\approx 0{,}7143$. La seconde démarque aurait dû être d'environ $28{,}6\\,\\%$.

**4.** $1{,}25 \\times 0{,}80 = 1$ : le client paie **exactement le prix d'origine**, la « réduction » est fictive.`
    },
    {
      id: "2N5-ds-08",
      title: "Salaire, prix et pouvoir d'achat",
      difficulty: 4,
      points: 7,
      statement: `On s'intéresse au pouvoir d'achat d'un salarié, c'est-à-dire à la quantité de biens qu'il peut acheter avec son salaire. Si le salaire est multiplié par $c_S$ et les prix par $c_P$, le pouvoir d'achat est multiplié par $\\dfrac{c_S}{c_P}$.

1. Cette année, le salaire augmente de $3\\,\\%$ et les prix de $5\\,\\%$. Déterminer l'évolution du pouvoir d'achat, en pourcentage arrondi à $0{,}01\\,\\%$.
2. De quel pourcentage le salaire aurait-il dû augmenter pour que le pouvoir d'achat soit maintenu ?
3. On suppose que les prix augmentent de $2\\,\\%$ par an pendant $10$ ans. Quelle est la hausse globale des prix sur cette période, arrondie à $0{,}1\\,\\%$ ?
4. Dans un pays à forte inflation, les prix augmentent de $7\\,\\%$ par an. À l'aide de la calculatrice, déterminer au bout de combien d'années complètes les prix auront doublé. Justifier par deux calculs.`,
      solution: `**1.** $c_S = 1{,}03$ et $c_P = 1{,}05$, donc le pouvoir d'achat est multiplié par $\\frac{1{,}03}{1{,}05} \\approx 0{,}9810$. Il **baisse d'environ $1{,}90\\,\\%$**.

**2.** Il faut $\\frac{c_S}{1{,}05} = 1$, soit $c_S = 1{,}05$ : une hausse de salaire de $5\\,\\%$, égale à la hausse des prix.

**3.** $c = 1{,}02^{10} \\approx 1{,}2190$ : hausse globale d'environ $21{,}9\\,\\%$ (et non $20\\,\\%$).

**4.** Après $n$ années, les prix sont multipliés par $1{,}07^n$. On cherche le plus petit entier $n$ tel que $1{,}07^n \\geqslant 2$.
$1{,}07^{10} \\approx 1{,}967 < 2$ et $1{,}07^{11} \\approx 2{,}105 \\geqslant 2$.
Les prix auront doublé au bout de **$11$ ans**.`
    },
    {
      id: "2N5-ds-09",
      title: "La récolte d'un verger",
      difficulty: 1,
      points: 4,
      statement: `Un arboriculteur a récolté $2\\,400$ kg de pommes. $60\\,\\%$ de la récolte est vendue directement, $25\\,\\%$ est transformée en jus et le reste part au compost.

1. Calculer la masse de pommes vendue directement, puis celle transformée en jus.
2. Quelle proportion de la récolte part au compost ? Quelle masse cela représente-t-il ?
3. Parmi les pommes vendues directement, $40\\,\\%$ portent un label « agriculture biologique ».
 a) Calculer la masse de pommes vendues avec ce label.
 b) Quelle proportion de la récolte totale cela représente-t-il ? Retrouver ce résultat par un produit de proportions.
4. Un kilogramme de pommes donne $0{,}65$ L de jus. Combien de litres de jus obtient-on ?`,
      solution: `**1.** Vente directe : $0{,}60 \\times 2\\,400 = 1\\,440$ kg. Jus : $0{,}25 \\times 2\\,400 = 600$ kg.

**2.** La proportion restante est $100\\,\\% - 60\\,\\% - 25\\,\\% = 15\\,\\%$, soit $0{,}15 \\times 2\\,400 = 360$ kg.

(Vérification : $1\\,440 + 600 + 360 = 2\\,400$.)

**3. a)** $0{,}40 \\times 1\\,440 = 576$ kg.

**b)** $\\frac{576}{2\\,400} = 0{,}24$, soit $24\\,\\%$ de la récolte. C'est une proportion de proportion : $0{,}60 \\times 0{,}40 = 0{,}24$.

**4.** $600 \\times 0{,}65 = 390$ L de jus.`
    },
    {
      id: "2N5-ds-10",
      title: "Chiffre d'affaires sur quatre ans",
      difficulty: 2,
      points: 5,
      statement: `Le chiffre d'affaires d'une petite entreprise était de $250\\,000$ € en 2022. Il a augmenté de $12\\,\\%$ en 2023, baissé de $5\\,\\%$ en 2024, puis augmenté de $8\\,\\%$ en 2025.

1. Donner les coefficients multiplicateurs associés à chacune des trois évolutions.
2. Calculer le chiffre d'affaires de 2025.
3. Déterminer le taux d'évolution global entre 2022 et 2025. Est-il égal à $12 - 5 + 8 = 15\\,\\%$ ?
4. L'entreprise vise une hausse globale de $20\\,\\%$ entre 2022 et 2026. Quel taux d'évolution doit-elle réaliser en 2026 ? Arrondir à $0{,}01\\,\\%$.`,
      solution: `**1.** Hausse de $12\\,\\%$ : $1{,}12$ ; baisse de $5\\,\\%$ : $0{,}95$ ; hausse de $8\\,\\%$ : $1{,}08$.

**2.** Les coefficients se multiplient : $250\\,000 \\times 1{,}12 \\times 0{,}95 \\times 1{,}08 = 287\\,280$ €.

**3.** Le coefficient global est $1{,}12 \\times 0{,}95 \\times 1{,}08 = 1{,}149\\,12$, soit une hausse globale de $14{,}912\\,\\%$.

Ce n'est pas $15\\,\\%$ : les taux ne s'additionnent pas, car chaque pourcentage s'applique à une valeur différente (celle de l'année précédente).

**4.** On cherche le coefficient $c$ tel que $1{,}149\\,12 \\times c = 1{,}2$, soit $c = \\frac{1{,}2}{1{,}149\\,12} \\approx 1{,}0443$.

L'entreprise doit augmenter son chiffre d'affaires d'environ $4{,}43\\,\\%$ en 2026 (pour atteindre $300\\,000$ €).`
    },
    {
      id: "2N5-ds-11",
      title: "Points de pourcentage ou pourcentage ?",
      difficulty: 3,
      points: 6,
      statement: `Dans un pays, la population active compte $30$ millions de personnes et le taux de chômage (proportion de chômeurs dans la population active) passe de $8\\,\\%$ à $6\\,\\%$.

1. Un journal titre : « Le chômage baisse de $2\\,\\%$ ». Expliquer pourquoi ce titre est ambigu. Exprimer la baisse en points de pourcentage, puis calculer le taux d'évolution du taux de chômage.
2. On suppose que la population active n'a pas changé. Calculer le nombre de chômeurs avant et après, puis le taux d'évolution du nombre de chômeurs.
3. On suppose maintenant que la population active a augmenté de $5\\,\\%$ pendant la même période (le taux de chômage passant toujours de $8\\,\\%$ à $6\\,\\%$). Calculer le taux d'évolution du nombre de chômeurs.
4. Un taux de TVA passe de $5{,}5\\,\\%$ à $7\\,\\%$. Exprimer cette hausse en points, puis en pourcentage (arrondi à $0{,}1\\,\\%$).`,
      solution: `**1.** « $2\\,\\%$ » peut désigner deux choses différentes. Le taux passe de $8\\,\\%$ à $6\\,\\%$ : il perd $2$ **points de pourcentage**. Mais son taux d'évolution est
$$\\frac{6 - 8}{8} = -0{,}25,$$
soit une baisse de $25\\,\\%$ du taux de chômage.

**2.** Avant : $0{,}08 \\times 30 = 2{,}4$ millions de chômeurs ; après : $0{,}06 \\times 30 = 1{,}8$ million. Taux d'évolution : $\\frac{1{,}8 - 2{,}4}{2{,}4} = -0{,}25$, soit $-25\\,\\%$.

**3.** La nouvelle population active est $30 \\times 1{,}05 = 31{,}5$ millions, et le nombre de chômeurs $0{,}06 \\times 31{,}5 = 1{,}89$ million.

Taux d'évolution : $\\frac{1{,}89}{2{,}4} - 1 = 0{,}7875 - 1 = -0{,}2125$, soit une baisse de $21{,}25\\,\\%$. (Autrement : coefficient $0{,}75 \\times 1{,}05 = 0{,}7875$.)

**4.** Hausse de $7 - 5{,}5 = 1{,}5$ point. En pourcentage : $\\frac{1{,}5}{5{,}5} \\approx 0{,}2727$, soit une hausse d'environ $27{,}3\\,\\%$ du taux de TVA.`
    },
    {
      id: "2N5-ds-12",
      title: "Deux hôpitaux et un paradoxe",
      difficulty: 4,
      points: 7,
      statement: `Deux hôpitaux $A$ et $B$ pratiquent la même opération. On classe les patients en cas « simples » et cas « difficiles ». Les résultats d'une année sont les suivants :

| | Cas simples | | Cas difficiles | |
|---|---|---|---|---|
| | patients | réussites | patients | réussites |
| Hôpital $A$ | $100$ | $95$ | $400$ | $300$ |
| Hôpital $B$ | $400$ | $360$ | $100$ | $70$ |

1. Calculer, pour chaque hôpital, le taux de réussite sur les cas simples, puis sur les cas difficiles. Quel hôpital fait mieux dans chaque catégorie ?
2. Calculer le taux de réussite global de chaque hôpital. Quel hôpital semble le meilleur ?
3. a) Montrer que le taux global de l'hôpital $A$ est égal à $0{,}2 \\times 0{,}95 + 0{,}8 \\times 0{,}75$. Interpréter les coefficients $0{,}2$ et $0{,}8$.
 b) Expliquer le paradoxe constaté.
4. Quel taux global aurait l'hôpital $B$ s'il avait la même répartition de patients que l'hôpital $A$ (en gardant ses taux par catégorie) ? Conclure.`,
      solution: `**1.**
- Hôpital $A$ : cas simples $\\frac{95}{100} = 95\\,\\%$ ; cas difficiles $\\frac{300}{400} = 75\\,\\%$.
- Hôpital $B$ : cas simples $\\frac{360}{400} = 90\\,\\%$ ; cas difficiles $\\frac{70}{100} = 70\\,\\%$.

L'hôpital $A$ fait mieux dans **chaque** catégorie.

**2.** $A$ : $\\frac{95 + 300}{500} = \\frac{395}{500} = 79\\,\\%$. $\;B$ : $\\frac{360 + 70}{500} = \\frac{430}{500} = 86\\,\\%$.

Globalement, c'est l'hôpital $B$ qui semble meilleur.

**3. a)** $\\frac{395}{500} = \\frac{100}{500} \\times \\frac{95}{100} + \\frac{400}{500} \\times \\frac{300}{400} = 0{,}2 \\times 0{,}95 + 0{,}8 \\times 0{,}75 = 0{,}19 + 0{,}6 = 0{,}79$.

$0{,}2$ et $0{,}8$ sont les proportions de cas simples et de cas difficiles parmi les patients de $A$ : le taux global est la **moyenne pondérée** des taux par catégorie.

**b)** $A$ traite $80\\,\\%$ de cas difficiles, où les taux de réussite sont bas, alors que $B$ traite $80\\,\\%$ de cas simples ($0{,}8 \\times 0{,}9 + 0{,}2 \\times 0{,}7 = 0{,}86$). Les pondérations étant très différentes, la comparaison des taux globaux est trompeuse : elle reflète surtout la composition des patients.

**4.** Avec les pondérations de $A$ : $0{,}2 \\times 0{,}90 + 0{,}8 \\times 0{,}70 = 0{,}18 + 0{,}56 = 0{,}74$, soit $74\\,\\% < 79\\,\\%$.

À patientèle comparable, l'hôpital $A$ est le plus performant : c'est la répartition des cas qui avantageait $B$.`
    }
  ],
  "2A1": [
    {
      id: "2A1-ds-01",
      title: "Images, antécédents et point d'une courbe",
      difficulty: 1,
      points: 4,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = 2x^2 - 3x + 1$, et $\\mathcal{C}_f$ sa courbe représentative dans un repère.

1. Calculer les images par $f$ de $-1$, de $\\frac{1}{2}$ et de $\\sqrt{2}$.
2. Le point $A(2 ; 3)$ appartient-il à $\\mathcal{C}_f$ ? Et le point $B(-2 ; 13)$ ?
3. Déterminer les antécédents de $1$ par $f$.`,
      solution: `**1.** $f(-1) = 2 \\times 1 + 3 + 1 = 6$ ; $\\quad f\\left(\\frac{1}{2}\\right) = 2 \\times \\frac{1}{4} - \\frac{3}{2} + 1 = \\frac{1}{2} - \\frac{3}{2} + 1 = 0$ ; $\\quad f(\\sqrt{2}) = 2 \\times 2 - 3\\sqrt{2} + 1 = 5 - 3\\sqrt{2}$.

**2.** $f(2) = 8 - 6 + 1 = 3$ : $A \\in \\mathcal{C}_f$.
$f(-2) = 8 + 6 + 1 = 15 \\neq 13$ : $B \\notin \\mathcal{C}_f$.

**3.** On résout $f(x) = 1 \\iff 2x^2 - 3x = 0 \\iff x(2x - 3) = 0 \\iff x = 0$ ou $x = \\frac{3}{2}$.
Les antécédents de $1$ sont $0$ et $\\frac{3}{2}$.`
    },
    {
      id: "2A1-ds-02",
      title: "Ensembles de définition",
      difficulty: 1,
      points: 4,
      statement: `Déterminer l'ensemble de définition de chacune des fonctions suivantes, en justifiant.

1. $f(x) = \\dfrac{1}{x - 4}$
2. $g(x) = \\sqrt{2x + 6}$
3. $h(x) = \\dfrac{x + 1}{x^2 - 9}$
4. $k(x) = \\dfrac{\\sqrt{5 - x}}{x}$`,
      solution: `**1.** Le dénominateur ne doit pas s'annuler : $x - 4 \\neq 0 \\iff x \\neq 4$. $\\mathcal{D}_f = \\mathbb{R} \\setminus \\{4\\} = \\,]-\\infty ; 4[\\, \\cup \\,]4 ; +\\infty[$.

**2.** La racine carrée n'est définie que pour un nombre positif ou nul : $2x + 6 \\geqslant 0 \\iff x \\geqslant -3$. $\\mathcal{D}_g = [-3 ; +\\infty[$.

**3.** $x^2 - 9 = (x - 3)(x + 3) = 0 \\iff x = 3$ ou $x = -3$. $\\mathcal{D}_h = \\mathbb{R} \\setminus \\{-3 ; 3\\}$.

**4.** Deux conditions : $5 - x \\geqslant 0$ (soit $x \\leqslant 5$) et $x \\neq 0$. $\\mathcal{D}_k = \\,]-\\infty ; 0[\\, \\cup \\,]0 ; 5]$.`
    },
    {
      id: "2A1-ds-03",
      title: "Exploiter un tableau de valeurs",
      difficulty: 2,
      points: 5,
      statement: `Une fonction $f$ est définie sur $[-3 ; 4]$. On donne le tableau de valeurs suivant :

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|---|---|---|
| $f(x)$ | $5$ | $0$ | $-3$ | $-4$ | $-3$ | $0$ | $5$ | $12$ |

1. Donner l'image de $2$ par $f$, puis les antécédents de $-3$ figurant dans le tableau.
2. Lire dans le tableau deux antécédents de $5$. Peut-on affirmer qu'il n'y en a pas d'autres ? Expliquer.
3. On admet que $f(x) = x^2 - 4$. Vérifier cette expression pour trois valeurs du tableau.
4. Résoudre par le calcul l'équation $f(x) = 0$ sur $[-3 ; 4]$.
5. Le nombre $21$ admet-il des antécédents par $f$ ? Justifier.`,
      solution: `**1.** $f(2) = 0$. D'après le tableau, $f(-1) = f(1) = -3$ : $-1$ et $1$ sont des antécédents de $-3$.

**2.** $f(-3) = 5$ et $f(3) = 5$. Un tableau de valeurs ne donne qu'un nombre fini de valeurs : il pourrait exister d'autres antécédents entre les valeurs du tableau. On ne peut pas conclure sans information supplémentaire.

**3.** $f(-3) = 9 - 4 = 5$ ; $f(0) = 0 - 4 = -4$ ; $f(4) = 16 - 4 = 12$ : conforme au tableau.

**4.** $x^2 - 4 = 0 \\iff (x - 2)(x + 2) = 0 \\iff x = 2$ ou $x = -2$. Ces deux valeurs appartiennent à $[-3 ; 4]$ : $\\mathcal{S} = \\{-2 ; 2\\}$.

**5.** $x^2 - 4 = 21 \\iff x^2 = 25 \\iff x = 5$ ou $x = -5$. Aucune de ces valeurs n'appartient à $[-3 ; 4]$ : $21$ n'a pas d'antécédent par $f$ (sur son ensemble de définition).`
    },
    {
      id: "2A1-ds-04",
      title: "Parabole et droite : résolution graphique puis algébrique",
      difficulty: 2,
      points: 5,
      statement: `On considère les fonctions $f$ et $g$ définies sur $[-3 ; 3]$ par $f(x) = x^2$ et $g(x) = x + 2$.

1. Recopier et compléter le tableau de valeurs :

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | | | | | | | |
| $g(x)$ | | | | | | | |

2. Tracer les courbes $\\mathcal{C}_f$ et $\\mathcal{C}_g$ dans un même repère (unité : $1$ cm).
3. Résoudre graphiquement $f(x) = g(x)$, puis $f(x) \\leqslant g(x)$.
4. Vérifier par le calcul : montrer que $f(x) - g(x) = (x - 2)(x + 1)$ et conclure.`,
      solution: `**1.**

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | $9$ | $4$ | $1$ | $0$ | $1$ | $4$ | $9$ |
| $g(x)$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |

**2.** $\\mathcal{C}_f$ est une parabole de sommet l'origine ; $\\mathcal{C}_g$ est la droite passant par $(0 ; 2)$ et $(-2 ; 0)$.

**3.** Les courbes se coupent aux points d'abscisses $-1$ et $2$ : $\\mathcal{S} = \\{-1 ; 2\\}$.
$\\mathcal{C}_f$ est en dessous de $\\mathcal{C}_g$ (ou la coupe) pour $x$ entre $-1$ et $2$ : $\\mathcal{S} = [-1 ; 2]$.

**4.** $(x - 2)(x + 1) = x^2 + x - 2x - 2 = x^2 - x - 2 = f(x) - g(x)$.
- $f(x) = g(x) \\iff (x - 2)(x + 1) = 0 \\iff x = 2$ ou $x = -1$ : confirmé.
- Tableau de signes : $(x - 2)(x + 1)$ est négatif ou nul entre ses racines $-1$ et $2$, donc $f(x) \\leqslant g(x) \\iff x \\in [-1 ; 2]$ : confirmé.`
    },
    {
      id: "2A1-ds-05",
      title: "Fabriquer une boîte sans couvercle",
      difficulty: 3,
      points: 6,
      statement: `Dans une plaque carrée de carton de $20$ cm de côté, on découpe aux quatre coins un carré de côté $x$ cm, puis on relève les bords pour former une boîte sans couvercle.

1. Quelles valeurs peut prendre $x$ ? On note $I$ cet intervalle.
2. Montrer que le volume de la boîte, en cm³, est $V(x) = x(20 - 2x)^2$.
3. Calculer $V(2)$, $V(3)$ et $V(5)$.
4. Recopier et compléter le tableau ci-dessous (valeurs arrondies à l'unité), puis conjecturer la valeur de $x$ pour laquelle le volume semble maximal.

| $x$ | $1$ | $2$ | $3$ | $3{,}5$ | $4$ | $6$ | $8$ |
|---|---|---|---|---|---|---|---|
| $V(x)$ | | | | | | | |

5. Peut-on obtenir une boîte de volume $600$ cm³ ? Donner une réponse argumentée à l'aide du tableau (aucune preuve n'est attendue).`,
      solution: `**1.** La longueur $x$ est positive et la base de la boîte, de côté $20 - 2x$, doit exister : $20 - 2x > 0 \\iff x < 10$. Donc $I = \\,]0 ; 10[$.

**2.** La base est un carré de côté $20 - 2x$ et la hauteur vaut $x$ : $V(x) = (20 - 2x)^2 \\times x$.

**3.** $V(2) = 2 \\times 16^2 = 512$ ; $V(3) = 3 \\times 14^2 = 588$ ; $V(5) = 5 \\times 10^2 = 500$.

**4.**

| $x$ | $1$ | $2$ | $3$ | $3{,}5$ | $4$ | $6$ | $8$ |
|---|---|---|---|---|---|---|---|
| $V(x)$ | $324$ | $512$ | $588$ | $592$ | $576$ | $384$ | $128$ |

($V(3{,}5) = 3{,}5 \\times 13^2 = 591{,}5$.) Le volume semble maximal pour $x$ compris entre $3$ et $4$, vers $x \\approx 3{,}3$ ou $3{,}4$. *(On démontrera plus tard que le maximum est atteint en $x = \\frac{10}{3}$, avec $V\\left(\\frac{10}{3}\\right) = \\frac{16\\,000}{27} \\approx 592{,}6$.)*

**5.** Les valeurs du tableau ne dépassent pas $592$ environ et le volume semble atteindre au mieux un peu moins de $593$ cm³ : on ne peut pas obtenir $600$ cm³.`
    },
    {
      id: "2A1-ds-06",
      title: "Tarif d'un taxi",
      difficulty: 3,
      points: 6,
      statement: `Un taxi applique le tarif suivant : une prise en charge de $2{,}50$ €, puis $1{,}20$ € par kilomètre pour les $10$ premiers kilomètres, et $1{,}50$ € par kilomètre au-delà. On note $f(x)$ le prix, en euros, d'une course de $x$ km.

1. Calculer $f(4)$, $f(10)$ et $f(15)$.
2. Exprimer $f(x)$ en fonction de $x$ :
   a) pour $x \\in [0 ; 10]$ ;
   b) pour $x > 10$.
3. Un client a payé $10$ €. Quelle distance a-t-il parcourue ?
4. Un autre client a payé $20$ €. Quelle distance a-t-il parcourue (arrondir à $0{,}1$ km) ?
5. Avec $30$ €, quelle distance maximale peut-on parcourir ?`,
      solution: `**1.** $f(4) = 2{,}5 + 4 \\times 1{,}2 = 7{,}30$ € ; $f(10) = 2{,}5 + 12 = 14{,}50$ € ; $f(15) = 14{,}5 + 5 \\times 1{,}5 = 22$ €.

**2. a)** Pour $0 \\leqslant x \\leqslant 10$ : $f(x) = 2{,}5 + 1{,}2x$.

**b)** Pour $x > 10$, les $10$ premiers kilomètres coûtent $14{,}50$ € (prise en charge comprise), puis $1{,}5$ € par km supplémentaire : $f(x) = 14{,}5 + 1{,}5(x - 10) = 1{,}5x - 0{,}5$.

**3.** $10 < 14{,}5$, donc la course fait moins de $10$ km : $2{,}5 + 1{,}2x = 10 \\iff 1{,}2x = 7{,}5 \\iff x = 6{,}25$ km.

**4.** $20 > 14{,}5$, donc $x > 10$ : $1{,}5x - 0{,}5 = 20 \\iff x = \\frac{20{,}5}{1{,}5} \\approx 13{,}7$ km.

**5.** $1{,}5x - 0{,}5 \\leqslant 30 \\iff x \\leqslant \\frac{30{,}5}{1{,}5} \\approx 20{,}33$. On peut parcourir au maximum environ $20{,}3$ km.`
    },
    {
      id: "2A1-ds-07",
      title: "Étude d'une fonction homographique",
      difficulty: 4,
      points: 6,
      statement: `Soit $f$ la fonction définie par $f(x) = \\dfrac{2x + 1}{x - 1}$.

1. Déterminer l'ensemble de définition $\\mathcal{D}$ de $f$.
2. Calculer $f(0)$, $f(2)$ et $f\\left(-\\frac{1}{2}\\right)$. En déduire les coordonnées des points d'intersection de $\\mathcal{C}_f$ avec les axes du repère.
3. Déterminer le (ou les) antécédent(s) de $3$ par $f$.
4. a) Montrer que pour tout $x \\in \\mathcal{D}$, $f(x) = 2 + \\dfrac{3}{x - 1}$.
   b) Le nombre $2$ a-t-il un antécédent par $f$ ? Justifier de deux façons.
5. Résoudre l'inéquation $f(x) > 2$.`,
      solution: `**1.** $x - 1 \\neq 0 \\iff x \\neq 1$ : $\\mathcal{D} = \\mathbb{R} \\setminus \\{1\\}$.

**2.** $f(0) = \\frac{1}{-1} = -1$ ; $f(2) = \\frac{5}{1} = 5$ ; $f\\left(-\\frac{1}{2}\\right) = \\frac{0}{-\\frac{3}{2}} = 0$.
$\\mathcal{C}_f$ coupe l'axe des ordonnées en $(0 ; -1)$ et l'axe des abscisses en $\\left(-\\frac{1}{2} ; 0\\right)$ (seule solution de $2x + 1 = 0$).

**3.** Pour $x \\neq 1$ : $\\frac{2x + 1}{x - 1} = 3 \\iff 2x + 1 = 3x - 3 \\iff x = 4$. L'antécédent de $3$ est $4$.

**4. a)** $2 + \\frac{3}{x - 1} = \\frac{2(x - 1) + 3}{x - 1} = \\frac{2x + 1}{x - 1} = f(x)$.

**b)** *Première façon :* $f(x) = 2 \\iff 2x + 1 = 2x - 2 \\iff 1 = -2$, ce qui est impossible.
*Deuxième façon :* $f(x) = 2 \\iff \\frac{3}{x - 1} = 0$, impossible car un quotient est nul seulement si son numérateur est nul, et $3 \\neq 0$.
Le nombre $2$ n'a donc pas d'antécédent.

**5.** $f(x) > 2 \\iff \\frac{3}{x - 1} > 0 \\iff x - 1 > 0$ (car $3 > 0$) $\\iff x > 1$. $\\mathcal{S} = \\,]1 ; +\\infty[$.`
    },
    {
      id: "2A1-ds-08",
      title: "Trajectoire d'un ballon",
      difficulty: 4,
      points: 7,
      statement: `Un joueur lance un ballon. La hauteur du ballon, en mètres, $t$ secondes après le lancer, est donnée par $h(t) = -5t^2 + 20t + 1{,}8$, jusqu'à ce que le ballon touche le sol.

1. À quelle hauteur le ballon est-il lancé ? Calculer $h(2)$.
2. Résoudre $h(t) = 1{,}8$ et interpréter.
3. a) Montrer que $h(t) - 16{,}8 = -5(t - 1)(t - 3)$.
   b) Pendant combien de temps le ballon est-il à une hauteur d'au moins $16{,}8$ m ?
4. a) Montrer que pour tout $t$ : $h(t) = 21{,}8 - 5(t - 2)^2$.
   b) En déduire que le ballon ne dépasse jamais $21{,}8$ m.
5. Le ballon touche le sol à l'instant $t_0 > 0$ tel que $h(t_0) = 0$. En utilisant 4. a), montrer que $t_0 = 2 + \\sqrt{4{,}36}$, puis en donner un arrondi au dixième. En déduire l'ensemble de définition pertinent de $h$.`,
      solution: `**1.** $h(0) = 1{,}8$ : le ballon est lancé à $1{,}8$ m de hauteur. $h(2) = -20 + 40 + 1{,}8 = 21{,}8$ m.

**2.** $h(t) = 1{,}8 \\iff -5t^2 + 20t = 0 \\iff -5t(t - 4) = 0 \\iff t = 0$ ou $t = 4$. Le ballon repasse à sa hauteur de lancer $4$ secondes après le lancer.

**3. a)** $-5(t - 1)(t - 3) = -5(t^2 - 4t + 3) = -5t^2 + 20t - 15$ et $h(t) - 16{,}8 = -5t^2 + 20t + 1{,}8 - 16{,}8 = -5t^2 + 20t - 15$ : l'égalité est vérifiée.

**b)** $h(t) \\geqslant 16{,}8 \\iff -5(t - 1)(t - 3) \\geqslant 0 \\iff (t - 1)(t - 3) \\leqslant 0 \\iff t \\in [1 ; 3]$ (le produit est négatif entre ses racines). Le ballon est au-dessus de $16{,}8$ m pendant $3 - 1 = 2$ secondes.

**4. a)** $21{,}8 - 5(t - 2)^2 = 21{,}8 - 5(t^2 - 4t + 4) = -5t^2 + 20t + 1{,}8 = h(t)$.

**b)** $(t - 2)^2 \\geqslant 0$, donc $h(t) \\leqslant 21{,}8$, avec égalité pour $t = 2$ : la hauteur maximale est $21{,}8$ m.

**5.** $h(t_0) = 0 \\iff 5(t_0 - 2)^2 = 21{,}8 \\iff (t_0 - 2)^2 = 4{,}36$. Comme $t_0 > 2$ (le ballon est en l'air sur $[0 ; 4]$), $t_0 - 2 = \\sqrt{4{,}36}$, soit $t_0 = 2 + \\sqrt{4{,}36} \\approx 4{,}1$ s.
La fonction $h$ modélise la situation sur $[0 ; t_0]$, soit environ $[0 ; 4{,}1]$.`
    },
    {
      id: "2A1-ds-09",
      title: "Aire d'un triangle dans un carré",
      difficulty: 1,
      points: 4,
      statement: `$ABCD$ est un carré de côté $6$ cm. Un point $M$ se déplace sur le segment $[AB]$ et on note $x = AM$ (en cm). On note $f(x)$ l'aire, en cm², du triangle $MBC$.

1. Quel est l'ensemble de définition de $f$ ?
2. Montrer que $f(x) = 18 - 3x$.
3. Calculer l'image de $2$ par $f$ et interpréter.
4. Déterminer le ou les antécédents de $9$ par $f$. Où est alors placé le point $M$ ?
5. L'aire du triangle $MBC$ peut-elle valoir $20$ cm² ? Justifier.`,
      solution: `**1.** $M$ est sur le segment $[AB]$, de longueur $6$ : $x$ varie de $0$ (quand $M = A$) à $6$ (quand $M = B$). $\\mathcal{D}_f = [0 ; 6]$.

**2.** Le triangle $MBC$ est rectangle en $B$ (angle du carré), avec $MB = 6 - x$ et $BC = 6$. Son aire est
$$f(x) = \\frac{MB \\times BC}{2} = \\frac{6(6 - x)}{2} = 3(6 - x) = 18 - 3x.$$

**3.** $f(2) = 18 - 6 = 12$ : lorsque $AM = 2$ cm, l'aire du triangle $MBC$ est $12$ cm².

**4.** $f(x) = 9 \\iff 18 - 3x = 9 \\iff x = 3$, et $3 \\in [0 ; 6]$. L'unique antécédent de $9$ est $3$ : $M$ est alors le milieu de $[AB]$.

**5.** $f(x) = 20 \\iff 18 - 3x = 20 \\iff x = -\\frac{2}{3}$. Or $-\\frac{2}{3} \\notin [0 ; 6]$ : $20$ n'a pas d'antécédent, l'aire ne peut pas valoir $20$ cm². (D'ailleurs l'aire est au plus $18$ cm², valeur obtenue pour $x = 0$.)`
    },
    {
      id: "2A1-ds-10",
      title: "Points d'une parabole et antécédents",
      difficulty: 2,
      points: 5,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = (x - 1)(x + 3)$ et $\\mathcal{C}_f$ sa courbe représentative dans un repère.

1. Montrer que pour tout réel $x$ : $f(x) = x^2 + 2x - 3 = (x + 1)^2 - 4$.
2. Déterminer les coordonnées des points d'intersection de $\\mathcal{C}_f$ avec l'axe des abscisses, puis avec l'axe des ordonnées.
3. Les points $A(2 ; 5)$ et $B(-1 ; -3)$ appartiennent-ils à $\\mathcal{C}_f$ ?
4. En choisissant à chaque fois la forme la plus adaptée, déterminer les antécédents par $f$ de $-3$, de $-4$ et de $-5$.`,
      solution: `**1.** $(x - 1)(x + 3) = x^2 + 3x - x - 3 = x^2 + 2x - 3$ et $(x + 1)^2 - 4 = x^2 + 2x + 1 - 4 = x^2 + 2x - 3$.

**2.** Axe des abscisses : $f(x) = 0 \\iff (x - 1)(x + 3) = 0 \\iff x = 1$ ou $x = -3$ : points $(1 ; 0)$ et $(-3 ; 0)$.

Axe des ordonnées : $f(0) = -3$ : point $(0 ; -3)$.

**3.** $f(2) = 1 \\times 5 = 5$ : $A \\in \\mathcal{C}_f$. $\;f(-1) = (-2) \\times 2 = -4 \\neq -3$ : $B \\notin \\mathcal{C}_f$.

**4.**
- Forme développée : $f(x) = -3 \\iff x^2 + 2x = 0 \\iff x(x + 2) = 0 \\iff x = 0$ ou $x = -2$. Deux antécédents : $0$ et $-2$.
- Forme canonique : $f(x) = -4 \\iff (x + 1)^2 = 0 \\iff x = -1$. Un seul antécédent : $-1$.
- $f(x) = -5 \\iff (x + 1)^2 = -1$ : impossible, un carré est positif ou nul. $-5$ n'a pas d'antécédent.

(La forme canonique montre que $f(x) \\geqslant -4$ pour tout $x$ : aucun réel strictement inférieur à $-4$ n'a d'antécédent.)`
    },
    {
      id: "2A1-ds-11",
      title: "Rectangle inscrit dans un triangle rectangle",
      difficulty: 3,
      points: 6,
      statement: `$ABC$ est un triangle rectangle en $A$ avec $AB = 8$ cm et $AC = 6$ cm. Pour un point $M$ du segment $[AB]$, on note $x = AM$. La parallèle à $(AC)$ passant par $M$ coupe $[BC]$ en $N$, et on construit le rectangle $AMNP$ avec $P$ sur $[AC]$. On note $\\mathcal{A}(x)$ l'aire du rectangle $AMNP$, en cm².

1. Donner l'ensemble de définition de $\\mathcal{A}$.
2. Montrer, à l'aide du théorème de Thalès, que $MN = \\dfrac{3}{4}(8 - x)$, puis que $\\mathcal{A}(x) = \\dfrac{3}{4}x(8 - x)$.
3. Calculer $\\mathcal{A}(2)$ et $\\mathcal{A}(4)$.
4. Déterminer les valeurs de $x$ pour lesquelles l'aire du rectangle vaut $9$ cm².
5. Montrer que pour tout $x$ de l'ensemble de définition, $12 - \\mathcal{A}(x) = \\dfrac{3}{4}(x - 4)^2$. En déduire que l'aire du rectangle ne dépasse jamais la moitié de l'aire du triangle.`,
      solution: `**1.** $M$ parcourt $[AB]$ : $x \\in [0 ; 8]$.

**2.** Dans le triangle $ABC$, $M \\in [AB]$, $N \\in [BC]$ et $(MN) \\parallel (AC)$. D'après le théorème de Thalès : $\\frac{MN}{AC} = \\frac{BM}{BA}$, soit $\\frac{MN}{6} = \\frac{8 - x}{8}$, donc $MN = \\frac{6(8 - x)}{8} = \\frac{3}{4}(8 - x)$.

Le rectangle a pour côtés $AM = x$ et $MN$ : $\\mathcal{A}(x) = \\frac{3}{4}x(8 - x)$.

**3.** $\\mathcal{A}(2) = \\frac{3}{4} \\times 2 \\times 6 = 9$ et $\\mathcal{A}(4) = \\frac{3}{4} \\times 4 \\times 4 = 12$.

**4.** $\\mathcal{A}(x) = 9 \\iff x(8 - x) = 12 \\iff x^2 - 8x + 12 = 0$. Or $(x - 2)(x - 6) = x^2 - 8x + 12$. Donc $\\mathcal{A}(x) = 9 \\iff x = 2$ ou $x = 6$, deux valeurs de $[0 ; 8]$.

**5.** $12 - \\frac{3}{4}(8x - x^2) = \\frac{3}{4}(16 - 8x + x^2) = \\frac{3}{4}(x - 4)^2$.

Un carré est positif ou nul, donc $12 - \\mathcal{A}(x) \\geqslant 0$, c'est-à-dire $\\mathcal{A}(x) \\leqslant 12$, avec égalité pour $x = 4$. Or l'aire du triangle est $\\frac{8 \\times 6}{2} = 24$ cm² : l'aire du rectangle ne dépasse jamais $12$ cm², la moitié de celle du triangle (valeur atteinte quand $M$ est le milieu de $[AB]$).`
    },
    {
      id: "2A1-ds-12",
      title: "Racine carrée et droite : équation et inéquation",
      difficulty: 4,
      points: 7,
      statement: `On considère les fonctions $f$ et $g$ définies par $f(x) = \\sqrt{x + 3}$ et $g(x) = x + 1$.

1. Déterminer l'ensemble de définition de $f$.
2. Calculer $f(-2)$ et $g(-2)$, puis $f(1)$ et $g(1)$.
3. a) Montrer que si $f(x) = g(x)$, alors $x + 3 = (x + 1)^2$.
 b) Résoudre l'équation $x + 3 = (x + 1)^2$. (On pourra vérifier que $x^2 + x - 2 = (x - 1)(x + 2)$.)
 c) En déduire les solutions de $f(x) = g(x)$. Pourquoi faut-il vérifier les valeurs obtenues ?
4. On veut résoudre $f(x) > g(x)$ sur l'ensemble de définition de $f$.
 a) Justifier que tout réel de $[-3 ; -1]$ est solution.
 b) Pour $x > -1$, justifier que $f(x) > g(x) \\iff x + 3 > (x + 1)^2$, puis résoudre.
 c) Conclure et interpréter graphiquement.`,
      solution: `**1.** $f(x)$ existe si et seulement si $x + 3 \\geqslant 0$, soit $x \\geqslant -3$ : $\\mathcal{D}_f = [-3 ; +\\infty[$.

**2.** $f(-2) = \\sqrt{1} = 1$ et $g(-2) = -1$ ; $\;f(1) = \\sqrt{4} = 2$ et $g(1) = 2$.

**3. a)** Si $\\sqrt{x + 3} = x + 1$, en élevant au carré : $x + 3 = (x + 1)^2$.

**b)** $x + 3 = x^2 + 2x + 1 \\iff x^2 + x - 2 = 0 \\iff (x - 1)(x + 2) = 0 \\iff x = 1$ ou $x = -2$.

**c)** Élever au carré donne seulement une implication : les solutions de $f(x) = g(x)$ sont **parmi** $1$ et $-2$, mais il faut les tester. D'après la question 2, $f(1) = g(1)$, mais $f(-2) = 1 \\neq g(-2) = -1$ (deux nombres opposés ont le même carré). L'unique solution est $x = 1$.

**4. a)** Si $-3 \\leqslant x \\leqslant -1$ : $g(x) = x + 1 \\leqslant 0$ et $f(x) \\geqslant 0$. On a donc $f(x) \\geqslant g(x)$, l'égalité imposant $f(x) = g(x) = 0$, soit $x = -3$ et $x = -1$ à la fois, impossible. Donc $f(x) > g(x)$ sur $[-3 ; -1]$.

**b)** Pour $x > -1$, $f(x)$ et $g(x)$ sont positifs. Deux nombres positifs sont rangés dans le même ordre que leurs carrés (la fonction carré est croissante sur $[0 ; +\\infty[$) : $f(x) > g(x) \\iff x + 3 > (x + 1)^2 \\iff (x - 1)(x + 2) < 0$.

Le produit est négatif strictement entre $-2$ et $1$ ; avec $x > -1$, on obtient $x \\in \\,]-1 ; 1[$.

**c)** $\\mathcal{S} = [-3 ; -1] \\cup \\,]-1 ; 1[ = [-3 ; 1[$. Graphiquement, la courbe de la fonction $f$ est strictement au-dessus de la droite d'équation $y = x + 1$ sur $[-3 ; 1[$ ; elles se coupent au point $(1 ; 2)$, puis la droite passe au-dessus.`
    }
  ],
  "2A2": [
    {
      id: "2A2-ds-01",
      title: "Lire et exploiter un tableau de variations",
      difficulty: 1,
      points: 5,
      statement: `Une fonction $f$ définie sur $[-4 ; 5]$ a le tableau de variations suivant :

| $x$ | $-4$ | | $-1$ | | $2$ | | $5$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | $3$ | $\\searrow$ | $-2$ | $\\nearrow$ | $4$ | $\\searrow$ | $1$ |

1. Décrire les variations de $f$ par une phrase.
2. Donner le maximum et le minimum de $f$ sur $[-4 ; 5]$, en précisant où ils sont atteints.
3. Comparer, en justifiant, $f(-3)$ et $f(-2)$, puis $f(0)$ et $f(1)$.
4. Peut-on comparer $f(-3)$ et $f(3)$ ? Expliquer.
5. Combien de solutions l'équation $f(x) = 0$ admet-elle sur $[-4 ; 5]$ ?`,
      solution: `**1.** $f$ est strictement décroissante sur $[-4 ; -1]$, strictement croissante sur $[-1 ; 2]$, puis strictement décroissante sur $[2 ; 5]$.

**2.** Le maximum de $f$ sur $[-4 ; 5]$ est $4$, atteint en $x = 2$ (il est supérieur à $f(-4) = 3$). Le minimum est $-2$, atteint en $x = -1$ (il est inférieur à $f(5) = 1$).

**3.** $-3$ et $-2$ appartiennent à $[-4 ; -1]$ où $f$ est décroissante ; $-3 < -2$, donc $f(-3) > f(-2)$ (une fonction décroissante inverse l'ordre).
$0$ et $1$ appartiennent à $[-1 ; 2]$ où $f$ est croissante ; $0 < 1$, donc $f(0) < f(1)$.

**4.** Non : $-3$ et $3$ ne sont pas dans un même intervalle où $f$ est monotone. On sait seulement que $f(-3) \\in \\,]-2 ; 3[$ et $f(3) \\in \\,]1 ; 4[$, ce qui ne permet pas de conclure.

**5.** Sur $[-4 ; -1]$, $f$ décroît de $3$ à $-2$ : elle prend une fois la valeur $0$. Sur $[-1 ; 2]$, $f$ croît de $-2$ à $4$ : encore une fois. Sur $[2 ; 5]$, $f(x) \\geqslant 1 > 0$ : aucune solution. L'équation admet **deux solutions** (on admet que la courbe se trace sans lever le crayon).`
    },
    {
      id: "2A2-ds-02",
      title: "Sens de variation d'une fonction affine",
      difficulty: 1,
      points: 4,
      statement: `Soient $f$ et $g$ les fonctions définies sur $\\mathbb{R}$ par $f(x) = -3x + 2$ et $g(x) = 0{,}5x - 1$.

1. Soient $a$ et $b$ deux réels tels que $a < b$. Montrer que $f(a) > f(b)$. Que peut-on en conclure ?
2. Démontrer de même le sens de variation de $g$.
3. Sans calculer les images, comparer $f(\\sqrt{2})$ et $f(1{,}4)$, puis $g(\\pi)$ et $g(3{,}15)$.
4. Dresser le tableau de variations de $f$ sur $[-1 ; 3]$ et en déduire un encadrement de $f(x)$ pour $x \\in [-1 ; 3]$.`,
      solution: `**1.** $f(a) - f(b) = (-3a + 2) - (-3b + 2) = -3a + 3b = 3(b - a)$. Comme $a < b$, $b - a > 0$, donc $f(a) - f(b) > 0$, soit $f(a) > f(b)$. La fonction $f$ est **strictement décroissante** sur $\\mathbb{R}$.

**2.** $g(b) - g(a) = 0{,}5(b - a) > 0$ pour $a < b$ : $g$ est **strictement croissante** sur $\\mathbb{R}$.

**3.** $\\sqrt{2} \\approx 1{,}414 > 1{,}4$ et $f$ décroissante, donc $f(\\sqrt{2}) < f(1{,}4)$.
$\\pi \\approx 3{,}1416 < 3{,}15$ et $g$ croissante, donc $g(\\pi) < g(3{,}15)$.

**4.** $f(-1) = 5$ et $f(3) = -7$ ; $f$ décroît de $5$ à $-7$ sur $[-1 ; 3]$. Donc pour $x \\in [-1 ; 3]$ : $-7 \\leqslant f(x) \\leqslant 5$.`
    },
    {
      id: "2A2-ds-03",
      title: "Démontrer un sens de variation",
      difficulty: 2,
      points: 5,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = (x - 1)^2 + 2$.

1. Calculer $f(1)$ et justifier que, pour tout réel $x$, $f(x) \\geqslant 2$. Que peut-on en déduire ?
2. Soient $a$ et $b$ deux réels tels que $1 \\leqslant a < b$.
   a) Montrer que $f(b) - f(a) = (b - a)(a + b - 2)$.
   b) En déduire le sens de variation de $f$ sur $[1 ; +\\infty[$.
3. On admet que $f$ est décroissante sur $]-\\infty ; 1]$. Dresser le tableau de variations de $f$ sur $[-2 ; 4]$.
4. En déduire le maximum de $f$ sur $[-2 ; 4]$.`,
      solution: `**1.** $f(1) = 0 + 2 = 2$. Comme $(x - 1)^2 \\geqslant 0$, on a $f(x) \\geqslant 2 = f(1)$ pour tout $x$ : $f$ admet un **minimum égal à $2$, atteint en $x = 1$**.

**2. a)** $f(b) - f(a) = (b - 1)^2 - (a - 1)^2 = \\big[(b - 1) - (a - 1)\\big]\\big[(b - 1) + (a - 1)\\big] = (b - a)(a + b - 2)$.

**b)** $b - a > 0$ ; et comme $a \\geqslant 1$ et $b > 1$, $a + b > 2$, donc $a + b - 2 > 0$. Ainsi $f(b) - f(a) > 0$ : $f$ est strictement croissante sur $[1 ; +\\infty[$.

**3.** $f(-2) = 9 + 2 = 11$, $f(1) = 2$, $f(4) = 9 + 2 = 11$.

| $x$ | $-2$ | | $1$ | | $4$ |
|---|---|---|---|---|---|
| $f(x)$ | $11$ | $\\searrow$ | $2$ | $\\nearrow$ | $11$ |

**4.** Le maximum de $f$ sur $[-2 ; 4]$ vaut $11$, atteint en $x = -2$ et en $x = 4$.`
    },
    {
      id: "2A2-ds-04",
      title: "Maximum d'une fonction du second degré",
      difficulty: 2,
      points: 5,
      statement: `Soit $g$ la fonction définie sur $\\mathbb{R}$ par $g(x) = -2x^2 + 8x - 3$.

1. Montrer que pour tout réel $x$, $g(x) = 5 - 2(x - 2)^2$.
2. En déduire que $g$ admet un maximum sur $\\mathbb{R}$, dont on précisera la valeur et l'abscisse.
3. On admet que $g$ est croissante sur $]-\\infty ; 2]$ et décroissante sur $[2 ; +\\infty[$. Dresser le tableau de variations de $g$ sur $[0 ; 5]$.
4. Donner le meilleur encadrement possible de $g(x)$ lorsque $x \\in [0 ; 5]$, puis lorsque $x \\in [3 ; 5]$.`,
      solution: `**1.** $5 - 2(x - 2)^2 = 5 - 2(x^2 - 4x + 4) = 5 - 2x^2 + 8x - 8 = -2x^2 + 8x - 3 = g(x)$.

**2.** $(x - 2)^2 \\geqslant 0$, donc $-2(x - 2)^2 \\leqslant 0$ et $g(x) \\leqslant 5$. De plus $g(2) = 5$. Le maximum de $g$ est $5$, atteint en $x = 2$.

**3.** $g(0) = -3$, $g(2) = 5$, $g(5) = -50 + 40 - 3 = -13$.

| $x$ | $0$ | | $2$ | | $5$ |
|---|---|---|---|---|---|
| $g(x)$ | $-3$ | $\\nearrow$ | $5$ | $\\searrow$ | $-13$ |

**4.** Sur $[0 ; 5]$ : le maximum est $5$ et le minimum est $\\min(-3 ; -13) = -13$, donc $-13 \\leqslant g(x) \\leqslant 5$.
Sur $[3 ; 5]$ : $g$ est décroissante, $g(3) = -18 + 24 - 3 = 3$, donc $-13 \\leqslant g(x) \\leqslant 3$.`
    },
    {
      id: "2A2-ds-05",
      title: "Le rectangle d'aire maximale",
      difficulty: 3,
      points: 6,
      statement: `On souhaite délimiter un enclos rectangulaire avec $20$ m de clôture. On note $x$ la longueur d'un côté, en mètres.

1. Justifier que $x \\in [0 ; 10]$ et que l'aire de l'enclos est $A(x) = x(10 - x)$.
2. Montrer que $A(x) = 25 - (x - 5)^2$.
3. En déduire les dimensions de l'enclos d'aire maximale et cette aire maximale.
4. Soient $a$ et $b$ tels que $0 \\leqslant a < b \\leqslant 5$. Montrer que $A(b) - A(a) = (b - a)(10 - a - b)$ et en déduire le sens de variation de $A$ sur $[0 ; 5]$.
5. Pour des raisons d'implantation, un côté doit mesurer entre $1$ et $4$ m. Quelle est alors l'aire maximale possible ?`,
      solution: `**1.** $x$ est une longueur positive et le demi-périmètre vaut $10$ m : l'autre côté mesure $10 - x \\geqslant 0$. Donc $x \\in [0 ; 10]$ et $A(x) = x(10 - x)$.

**2.** $25 - (x - 5)^2 = 25 - (x^2 - 10x + 25) = 10x - x^2 = x(10 - x)$.

**3.** $(x - 5)^2 \\geqslant 0$ donc $A(x) \\leqslant 25$, avec égalité si et seulement si $x = 5$. L'enclos d'aire maximale est le **carré de $5$ m de côté**, d'aire $25$ m².

**4.** $A(b) - A(a) = 10b - b^2 - 10a + a^2 = 10(b - a) - (b - a)(b + a) = (b - a)(10 - a - b)$.
Si $0 \\leqslant a < b \\leqslant 5$ : $b - a > 0$ et $a + b < 10$, donc $10 - a - b > 0$. Ainsi $A(b) > A(a)$ : $A$ est strictement croissante sur $[0 ; 5]$.

**5.** Sur $[1 ; 4] \\subset [0 ; 5]$, $A$ est croissante : le maximum est atteint en $x = 4$. $A(4) = 4 \\times 6 = 24$ m² (enclos de $4$ m sur $6$ m).`
    },
    {
      id: "2A2-ds-06",
      title: "Encadrements et signe à partir des variations",
      difficulty: 3,
      points: 6,
      statement: `Une fonction $f$ est définie sur $[-2 ; 6]$. Elle est strictement croissante sur $[-2 ; 1]$ et strictement décroissante sur $[1 ; 6]$. On sait que $f(-2) = 1$, $f(1) = 5$, $f(3) = 2$ et $f(6) = -3$.

1. Dresser le tableau de variations de $f$.
2. Donner un encadrement de $f(x)$ :
   a) lorsque $x \\in [-2 ; 1]$ ; $\\quad$ b) lorsque $x \\in [3 ; 6]$.
3. Les affirmations suivantes sont-elles vraies ou fausses ? Justifier.
   a) « Pour tout $x \\in [-2 ; 6]$, $f(x) \\leqslant 5$. »
   b) « $f(-1) < f(4)$. »
   c) « L'équation $f(x) = 0$ admet exactement une solution sur $[-2 ; 6]$. »
4. On note $\\alpha$ la solution de $f(x) = 0$. Dans quel intervalle se trouve $\\alpha$ ? Dresser le tableau de signes de $f$.`,
      solution: `**1.**

| $x$ | $-2$ | | $1$ | | $6$ |
|---|---|---|---|---|---|
| $f(x)$ | $1$ | $\\nearrow$ | $5$ | $\\searrow$ | $-3$ |

**2. a)** $f$ croissante sur $[-2 ; 1]$ : $1 \\leqslant f(x) \\leqslant 5$.
**b)** $f$ décroissante sur $[3 ; 6]$ : $-3 \\leqslant f(x) \\leqslant 2$.

**3. a)** **Vrai** : $5 = f(1)$ est le maximum de $f$ sur $[-2 ; 6]$.

**b)** **On ne peut pas conclure avec certitude** ; l'affirmation n'est donc pas démontrable : $f(-1) \\in \\,]1 ; 5[$ et $f(4) \\in \\,]-3 ; 2[$. Par exemple, si $f(-1) = 3$ et $f(4) = 0$, elle est fausse ; si $f(-1) = 1{,}5$ et $f(4) = 1{,}8$, elle est vraie. Ces deux situations sont compatibles avec les données.

**c)** **Vrai** : sur $[-2 ; 1]$, $f(x) \\geqslant 1 > 0$, pas de solution. Sur $[1 ; 6]$, $f$ est strictement décroissante de $5$ à $-3$ : elle prend la valeur $0$ exactement une fois.

**4.** $f(3) = 2 > 0$ et $f(6) = -3 < 0$, avec $f$ strictement décroissante sur $[3 ; 6]$ : $\\alpha \\in \\,]3 ; 6[$.

| $x$ | $-2$ … $\\alpha$ | $\\alpha$ … $6$ |
|---|---|---|
| $f(x)$ | $+$ | $-$ |

($f(\\alpha) = 0$.)`
    },
    {
      id: "2A2-ds-07",
      title: "Bénéfice d'une entreprise",
      difficulty: 4,
      points: 7,
      statement: `Une entreprise fabrique chaque jour $q$ centaines d'objets, avec $q \\in [0 ; 12]$. Son bénéfice quotidien, en centaines d'euros, est modélisé par $B(q) = -q^2 + 14q - 33$.

1. Calculer $B(0)$ et interpréter. Calculer $B(5)$.
2. Montrer que $B(q) = 16 - (q - 7)^2$.
3. En déduire la production qui donne le bénéfice maximal et la valeur de ce bénéfice en euros.
4. Montrer que $B(q) = -(q - 3)(q - 11)$. Pour quelles productions l'entreprise est-elle rentable ($B(q) > 0$) ?
5. On admet que $B$ est croissante sur $[0 ; 7]$ et décroissante sur $[7 ; 12]$. Dresser le tableau de variations de $B$ sur $[0 ; 12]$.
6. La direction souhaite un bénéfice d'au moins $1\\,200$ €. Déterminer les productions possibles.`,
      solution: `**1.** $B(0) = -33$ : sans production, l'entreprise perd $3\\,300$ € par jour (charges fixes). $B(5) = -25 + 70 - 33 = 12$, soit $1\\,200$ €.

**2.** $16 - (q - 7)^2 = 16 - q^2 + 14q - 49 = -q^2 + 14q - 33 = B(q)$.

**3.** $(q - 7)^2 \\geqslant 0$, donc $B(q) \\leqslant 16$, avec égalité pour $q = 7$. Le bénéfice maximal est obtenu pour $700$ objets et vaut $16$ centaines d'euros, soit $1\\,600$ €.

**4.** $-(q - 3)(q - 11) = -(q^2 - 14q + 33) = B(q)$. Le produit $(q - 3)(q - 11)$ est strictement négatif entre ses racines, donc $B(q) > 0 \\iff q \\in \\,]3 ; 11[$. L'entreprise est rentable pour une production strictement comprise entre $300$ et $1\\,100$ objets.

**5.** $B(0) = -33$, $B(7) = 16$, $B(12) = -144 + 168 - 33 = -9$.

| $q$ | $0$ | | $7$ | | $12$ |
|---|---|---|---|---|---|
| $B(q)$ | $-33$ | $\\nearrow$ | $16$ | $\\searrow$ | $-9$ |

**6.** $B(q) \\geqslant 12 \\iff 16 - (q - 7)^2 \\geqslant 12 \\iff (q - 7)^2 \\leqslant 4 \\iff -2 \\leqslant q - 7 \\leqslant 2 \\iff 5 \\leqslant q \\leqslant 9$. Il faut produire entre $500$ et $900$ objets par jour.`
    },
    {
      id: "2A2-ds-08",
      title: "Distance minimale d'un point à une droite",
      difficulty: 4,
      points: 7,
      statement: `Dans un repère orthonormé, on considère le point $A(4 ; 2)$ et la droite $d$ d'équation $y = 2x - 1$. Pour tout réel $x$, on note $M$ le point de $d$ d'abscisse $x$.

1. Exprimer les coordonnées de $M$ en fonction de $x$.
2. Montrer que $AM^2 = 5x^2 - 20x + 25$.
3. Montrer que $AM^2 = 5(x - 2)^2 + 5$.
4. On pose $f(x) = AM^2$. Déterminer le minimum de $f$ sur $\\mathbb{R}$ et la valeur de $x$ où il est atteint.
5. En déduire les coordonnées du point $H$ de $d$ le plus proche de $A$, ainsi que la distance $AH$. Justifier que minimiser $AM$ revient à minimiser $AM^2$.
6. Vérifier que le triangle $AHB$, où $B(0 ; -1)$ est un autre point de $d$, est rectangle en $H$. Que peut-on conjecturer ?`,
      solution: `**1.** $M$ est sur $d$ : $M(x ; 2x - 1)$.

**2.** $AM^2 = (x - 4)^2 + (2x - 1 - 2)^2 = (x^2 - 8x + 16) + (4x^2 - 12x + 9) = 5x^2 - 20x + 25$.

**3.** $5(x - 2)^2 + 5 = 5(x^2 - 4x + 4) + 5 = 5x^2 - 20x + 25$.

**4.** $5(x - 2)^2 \\geqslant 0$, donc $f(x) \\geqslant 5 = f(2)$ : le minimum de $f$ est $5$, atteint en $x = 2$.

**5.** Pour $x = 2$ : $H(2 ; 3)$ et $AH = \\sqrt{5}$.
Les distances sont positives et la fonction racine carrée est croissante sur $[0 ; +\\infty[$ : $AM = \\sqrt{f(x)}$ est minimale exactement quand $f(x)$ l'est.

**6.** $AH^2 = 5$ ; $HB^2 = (0 - 2)^2 + (-1 - 3)^2 = 4 + 16 = 20$ ; $AB^2 = (0 - 4)^2 + (-1 - 2)^2 = 16 + 9 = 25$.
$AH^2 + HB^2 = 25 = AB^2$ : d'après la réciproque du théorème de Pythagore, $AHB$ est rectangle en $H$.
On conjecture que le point de $d$ le plus proche de $A$ est le **pied de la perpendiculaire** à $d$ passant par $A$.`
    },
    {
      id: "2A2-ds-09",
      title: "Température et altitude",
      difficulty: 1,
      points: 4,
      statement: `Dans un modèle simplifié de l'atmosphère, la température (en °C) à l'altitude $x$ (en km) est donnée par $T(x) = 15 - 6{,}5x$, pour $x \\in [0 ; 11]$.

1. Quel est le sens de variation de la fonction $T$ sur $[0 ; 11]$ ? Justifier.
2. Dresser le tableau de variations de $T$ et donner son maximum et son minimum sur $[0 ; 11]$.
3. À quelle altitude la température est-elle de $0$ °C ? Donner la valeur exacte puis une valeur arrondie au mètre près.
4. Sans calculer les images, comparer $T(2{,}3)$ et $T(2{,}4)$.`,
      solution: `**1.** $T$ est une fonction affine de coefficient directeur $-6{,}5 < 0$ : elle est strictement décroissante sur $[0 ; 11]$ (la température baisse de $6{,}5$ °C par kilomètre d'altitude).

**2.** $T(0) = 15$ et $T(11) = 15 - 71{,}5 = -56{,}5$.

| $x$ | $0$ | | $11$ |
|---|---|---|---|
| $T(x)$ | $15$ | $\\searrow$ | $-56{,}5$ |

Le maximum est $15$ °C (au niveau de la mer, $x = 0$) et le minimum $-56{,}5$ °C (pour $x = 11$).

**3.** $T(x) = 0 \\iff 6{,}5x = 15 \\iff x = \\frac{15}{6{,}5} = \\frac{30}{13}$. Comme $\\frac{30}{13} \\approx 2{,}3077$, la température est nulle à environ $2{,}308$ km, soit $2\\,308$ m.

**4.** $2{,}3 < 2{,}4$ et $T$ est strictement décroissante sur $[0 ; 11]$, donc $T(2{,}3) > T(2{,}4)$.`
    },
    {
      id: "2A2-ds-10",
      title: "Approcher un maximum par balayage",
      difficulty: 2,
      points: 5,
      statement: `Soit $g$ la fonction définie sur $[0 ; 3]$ par $g(x) = -x^2 + 3x + 1$. On considère le programme Python suivant.

\`\`\`python
def g(x):
    return -x**2 + 3*x + 1

def balayage(pas):
    x = 0
    M = g(0)
    xM = 0
    while x <= 3:
        if g(x) > M:
            M = g(x)
            xM = x
        x = x + pas
    return xM, M
\`\`\`

1. Recopier et compléter le tableau de valeurs de $g$ pour $x$ allant de $0$ à $3$ avec un pas de $0{,}5$.
2. En déduire ce que renvoie l'appel \`balayage(0.5)\`. Expliquer le rôle des variables \`M\` et \`xM\`.
3. Montrer que pour tout réel $x$ : $g(x) = 3{,}25 - (x - 1{,}5)^2$. En déduire le maximum exact de $g$ sur $[0 ; 3]$.
4. L'appel \`balayage(0.4)\` renvoie $(1{,}6 ; 3{,}24)$. Expliquer pourquoi ce résultat n'est qu'une approximation du maximum.`,
      solution: `**1.**

| $x$ | $0$ | $0{,}5$ | $1$ | $1{,}5$ | $2$ | $2{,}5$ | $3$ |
|---|---|---|---|---|---|---|---|
| $g(x)$ | $1$ | $2{,}25$ | $3$ | $3{,}25$ | $3$ | $2{,}25$ | $1$ |

**2.** Le programme parcourt les abscisses $0$ ; $0{,}5$ ; … ; $3$. La variable \`M\` contient la plus grande valeur de $g$ rencontrée jusque-là et \`xM\` l'abscisse où elle est atteinte : elles ne sont mises à jour que lorsqu'on trouve une valeur strictement plus grande. L'appel renvoie donc $(1{,}5 ; 3{,}25)$.

**3.** $3{,}25 - (x - 1{,}5)^2 = 3{,}25 - (x^2 - 3x + 2{,}25) = -x^2 + 3x + 1 = g(x)$.

Comme $(x - 1{,}5)^2 \\geqslant 0$, on a $g(x) \\leqslant 3{,}25$ pour tout $x$, et $g(1{,}5) = 3{,}25$. Le maximum de $g$ sur $[0 ; 3]$ est $3{,}25$, atteint en $x = 1{,}5$.

**4.** Avec un pas de $0{,}4$, les abscisses testées sont $0$ ; $0{,}4$ ; $0{,}8$ ; $1{,}2$ ; $1{,}6$ ; … : la valeur $1{,}5$ n'est jamais testée. Le programme renvoie la plus grande des valeurs calculées, $g(1{,}6) = 3{,}24$, qui est inférieure au vrai maximum. Un balayage ne donne en général qu'une valeur approchée, d'autant meilleure que le pas est petit.`
    },
    {
      id: "2A2-ds-11",
      title: "Résoudre une équation par dichotomie",
      difficulty: 3,
      points: 6,
      statement: `Soit $f$ la fonction définie sur $[1 ; 2]$ par $f(x) = x^3 + 2x - 5$.

1. Justifier que $f$ est strictement croissante sur $[1 ; 2]$. Calculer $f(1)$ et $f(2)$.
On admet que l'équation $f(x) = 0$ admet une unique solution $\\alpha$ dans $[1 ; 2]$.
2. On applique la méthode de dichotomie : à chaque étape, on calcule l'image du milieu $m$ de l'intervalle $[a ; b]$ et on garde la moitié qui contient $\\alpha$. Effectuer les trois premières étapes à partir de $[1 ; 2]$ (on donnera les valeurs de $f(m)$ arrondies au millième).
3. Compléter la fonction Python suivante pour qu'elle renvoie un encadrement de $\\alpha$ d'amplitude au plus \`e\`.
\`\`\`python
def dichotomie(e):
    a = 1
    b = 2
    while ............ :
        m = (a + b) / 2
        if f(m) < 0:
            ............
        else:
            ............
    return a, b
\`\`\`
4. Combien d'étapes faut-il pour obtenir un encadrement d'amplitude inférieure ou égale à $0{,}01$ ? Justifier.`,
      solution: `**1.** Les fonctions $x \\mapsto x^3$ et $x \\mapsto 2x - 5$ sont strictement croissantes sur $[1 ; 2]$, donc leur somme $f$ aussi. $f(1) = 1 + 2 - 5 = -2$ et $f(2) = 8 + 4 - 5 = 7$.

**2.**
- Étape 1 : $m = 1{,}5$, $f(1{,}5) = 3{,}375 + 3 - 5 = 1{,}375 > 0$. Comme $f$ est croissante et $f(\\alpha) = 0$, $\\alpha < 1{,}5$ : on garde $[1 ; 1{,}5]$.
- Étape 2 : $m = 1{,}25$, $f(1{,}25) \\approx -0{,}547 < 0$, donc $\\alpha > 1{,}25$ : on garde $[1{,}25 ; 1{,}5]$.
- Étape 3 : $m = 1{,}375$, $f(1{,}375) \\approx 0{,}350 > 0$ : on garde $[1{,}25 ; 1{,}375]$.

Ainsi $1{,}25 < \\alpha < 1{,}375$.

**3.**
\`\`\`python
def dichotomie(e):
    a = 1
    b = 2
    while b - a > e:
        m = (a + b) / 2
        if f(m) < 0:
            a = m
        else:
            b = m
    return a, b
\`\`\`
Si $f(m) < 0$, la solution est à droite de $m$ : on remplace $a$ par $m$ ; sinon on remplace $b$ par $m$.

**4.** L'amplitude initiale est $1$ et elle est divisée par $2$ à chaque étape : après $n$ étapes, elle vaut $\\frac{1}{2^n}$. On veut $\\frac{1}{2^n} \\leqslant 0{,}01$, soit $2^n \\geqslant 100$. Comme $2^6 = 64$ et $2^7 = 128$, il faut $7$ étapes. (On obtient $1{,}328 < \\alpha < 1{,}336$.)`
    },
    {
      id: "2A2-ds-12",
      title: "Un carré tournant dans un carré",
      difficulty: 4,
      points: 7,
      statement: `$ABCD$ est un carré de côté $10$ cm. Pour $x \\in [0 ; 10]$, on place les points $M \\in [AB]$, $N \\in [BC]$, $P \\in [CD]$ et $Q \\in [DA]$ tels que $AM = BN = CP = DQ = x$. On note $S(x)$ l'aire, en cm², du quadrilatère $MNPQ$.

1. Calculer $S(0)$ et $S(10)$.
2. Montrer que l'aire du triangle $AMQ$ est $\\dfrac{x(10 - x)}{2}$, puis que $S(x) = 2x^2 - 20x + 100$.
3. Montrer que $S(x) = 2(x - 5)^2 + 50$. En déduire le minimum de $S$ sur $[0 ; 10]$ et la position correspondante des points.
4. Soient $a$ et $b$ deux réels tels que $5 \\leqslant a < b \\leqslant 10$. Montrer que $S(b) - S(a) = 2(b - a)(a + b - 10)$ et en déduire le sens de variation de $S$ sur $[5 ; 10]$. On admet que $S$ est décroissante sur $[0 ; 5]$ ; dresser son tableau de variations.
5. Déterminer les valeurs de $x$ pour lesquelles l'aire de $MNPQ$ est au plus $68$ cm².`,
      solution: `**1.** Pour $x = 0$, $M = A$, $N = B$, $P = C$, $Q = D$ : $S(0) = 100$. Pour $x = 10$, $M = B$, $N = C$, $P = D$, $Q = A$ : $S(10) = 100$.

**2.** $Q \\in [DA]$ avec $DQ = x$, donc $AQ = 10 - x$. Le triangle $AMQ$ est rectangle en $A$ : son aire est $\\frac{AM \\times AQ}{2} = \\frac{x(10 - x)}{2}$.

Les quatre triangles des coins ($AMQ$, $BNM$, $CPN$, $DQP$) sont du même type et ont la même aire. Donc
$$S(x) = 100 - 4 \\times \\frac{x(10 - x)}{2} = 100 - 20x + 2x^2.$$

**3.** $2(x - 5)^2 + 50 = 2(x^2 - 10x + 25) + 50 = 2x^2 - 20x + 100 = S(x)$.

Comme $(x - 5)^2 \\geqslant 0$, $S(x) \\geqslant 50$ pour tout $x$, et $S(5) = 50$. Le minimum est $50$ cm², atteint quand $M$, $N$, $P$, $Q$ sont les milieux des côtés.

**4.** $S(b) - S(a) = 2\\left[(b - 5)^2 - (a - 5)^2\\right] = 2\\big[(b - 5) - (a - 5)\\big]\\big[(b - 5) + (a - 5)\\big] = 2(b - a)(a + b - 10)$.

Si $5 \\leqslant a < b$, alors $b - a > 0$ et $a + b > 10$, donc $S(b) - S(a) > 0$ : $S$ est strictement croissante sur $[5 ; 10]$.

| $x$ | $0$ | | $5$ | | $10$ |
|---|---|---|---|---|---|
| $S(x)$ | $100$ | $\\searrow$ | $50$ | $\\nearrow$ | $100$ |

**5.** $S(x) \\leqslant 68 \\iff 2(x - 5)^2 \\leqslant 18 \\iff (x - 5)^2 \\leqslant 9 \\iff |x - 5| \\leqslant 3 \\iff 2 \\leqslant x \\leqslant 8$.

L'aire est au plus $68$ cm² pour $x \\in [2 ; 8]$ (vérification : $S(2) = 8 - 40 + 100 = 68$).`
    }
  ],
  "2A3": [
    {
      id: "2A3-ds-01",
      title: "Comparer grâce aux fonctions de référence",
      difficulty: 1,
      points: 5,
      statement: `Sans calculer les nombres, comparer en justifiant à l'aide du sens de variation d'une fonction de référence :

1. $0{,}7^2$ et $0{,}8^2$
2. $(-3{,}1)^2$ et $(-2{,}9)^2$
3. $\\dfrac{1}{-3}$ et $\\dfrac{1}{-2}$
4. $\\sqrt{0{,}49}$ et $\\sqrt{0{,}5}$
5. $(-2)^3$ et $(-1{,}5)^3$`,
      solution: `**1.** La fonction carré est strictement croissante sur $[0 ; +\\infty[$ et $0 \\leqslant 0{,}7 < 0{,}8$, donc $0{,}7^2 < 0{,}8^2$.

**2.** La fonction carré est strictement décroissante sur $]-\\infty ; 0]$ et $-3{,}1 < -2{,}9 \\leqslant 0$, donc $(-3{,}1)^2 > (-2{,}9)^2$.

**3.** La fonction inverse est strictement décroissante sur $]-\\infty ; 0[$ et $-3 < -2 < 0$, donc $\\frac{1}{-3} > \\frac{1}{-2}$ (en effet $-0{,}33\\ldots > -0{,}5$).

**4.** La fonction racine carrée est strictement croissante sur $[0 ; +\\infty[$ et $0{,}49 < 0{,}5$, donc $\\sqrt{0{,}49} < \\sqrt{0{,}5}$.

**5.** La fonction cube est strictement croissante sur $\\mathbb{R}$ et $-2 < -1{,}5$, donc $(-2)^3 < (-1{,}5)^3$.`
    },
    {
      id: "2A3-ds-02",
      title: "Équations avec les fonctions de référence",
      difficulty: 1,
      points: 4,
      statement: `Résoudre dans $\\mathbb{R}$ les équations et inéquations suivantes.

1. $x^2 = 9$ $\\qquad$ 2. $x^2 = -4$ $\\qquad$ 3. $\\sqrt{x} = 3$
4. $\\dfrac{1}{x} = 4$ $\\qquad$ 5. $x^3 = -8$ $\\qquad$ 6. $x^2 \\leqslant 16$`,
      solution: `**1.** $x^2 = 9 \\iff x = 3$ ou $x = -3$. $\\mathcal{S} = \\{-3 ; 3\\}$.

**2.** Un carré est toujours positif ou nul, donc $x^2 = -4$ n'a pas de solution : $\\mathcal{S} = \\varnothing$.

**3.** Pour $x \\geqslant 0$ : $\\sqrt{x} = 3 \\iff x = 3^2 = 9$. $\\mathcal{S} = \\{9\\}$.

**4.** Pour $x \\neq 0$ : $\\frac{1}{x} = 4 \\iff x = \\frac{1}{4}$. $\\mathcal{S} = \\left\\{\\frac{1}{4}\\right\\}$.

**5.** $(-2)^3 = -8$ et la fonction cube est strictement croissante, donc $-8$ a un unique antécédent : $\\mathcal{S} = \\{-2\\}$.

**6.** $x^2 \\leqslant 16 \\iff x^2 - 16 \\leqslant 0 \\iff (x - 4)(x + 4) \\leqslant 0 \\iff x \\in [-4 ; 4]$ (lecture graphique : la parabole est sous la droite d'équation $y = 16$ entre $-4$ et $4$). $\\mathcal{S} = [-4 ; 4]$.`
    },
    {
      id: "2A3-ds-03",
      title: "Encadrements et pièges",
      difficulty: 2,
      points: 5,
      statement: `1. On suppose que $2 \\leqslant x \\leqslant 5$. Donner un encadrement de $x^2$, de $\\dfrac{1}{x}$ et de $\\sqrt{x}$.
2. On suppose que $-4 \\leqslant x \\leqslant -1$. Donner un encadrement de $\\dfrac{1}{x}$, puis de $x^2$.
3. On suppose que $-3 \\leqslant x \\leqslant 2$. Un élève écrit : « donc $9 \\leqslant x^2 \\leqslant 4$ ». Expliquer pourquoi c'est absurde, puis donner l'encadrement correct de $x^2$.
4. On suppose que $-2 \\leqslant x \\leqslant 1$. Donner un encadrement de $x^3$.`,
      solution: `**1.** Sur $[2 ; 5] \\subset [0 ; +\\infty[$, les fonctions carré et racine sont croissantes et la fonction inverse est décroissante :
$4 \\leqslant x^2 \\leqslant 25$ ; $\\quad \\frac{1}{5} \\leqslant \\frac{1}{x} \\leqslant \\frac{1}{2}$ ; $\\quad \\sqrt{2} \\leqslant \\sqrt{x} \\leqslant \\sqrt{5}$.

**2.** La fonction inverse est décroissante sur $]-\\infty ; 0[$ : $\\frac{1}{-1} \\leqslant \\frac{1}{x} \\leqslant \\frac{1}{-4}$, soit $-1 \\leqslant \\frac{1}{x} \\leqslant -\\frac{1}{4}$.
La fonction carré est décroissante sur $]-\\infty ; 0]$ : $(-1)^2 \\leqslant x^2 \\leqslant (-4)^2$, soit $1 \\leqslant x^2 \\leqslant 16$.

**3.** $9 \\leqslant 4$ est faux : l'encadrement est absurde. L'erreur : la fonction carré n'est pas monotone sur $[-3 ; 2]$ (elle décroît sur $[-3 ; 0]$ puis croît sur $[0 ; 2]$).
- Sur $[-3 ; 0]$ : $0 \\leqslant x^2 \\leqslant 9$ ;
- sur $[0 ; 2]$ : $0 \\leqslant x^2 \\leqslant 4$.

Donc pour $x \\in [-3 ; 2]$ : $0 \\leqslant x^2 \\leqslant 9$ (le minimum $0$ est atteint en $x = 0$).

**4.** La fonction cube est croissante sur $\\mathbb{R}$ : $(-2)^3 \\leqslant x^3 \\leqslant 1^3$, soit $-8 \\leqslant x^3 \\leqslant 1$.`
    },
    {
      id: "2A3-ds-04",
      title: "La fonction valeur absolue",
      difficulty: 2,
      points: 5,
      statement: `On considère la fonction valeur absolue $f$ définie sur $\\mathbb{R}$ par $f(x) = |x|$.

1. Calculer $f(-3)$, $f(2{,}5)$, $f(0)$ et $f\\left(-\\frac{7}{2}\\right)$.
2. Exprimer $f(x)$ sans valeur absolue selon le signe de $x$. En déduire la nature de la courbe représentative de $f$ et la tracer pour $x \\in [-4 ; 4]$.
3. Dresser le tableau de variations de $f$ sur $\\mathbb{R}$. Quel est son minimum ?
4. Résoudre graphiquement puis algébriquement : a) $|x| = 3$ ; b) $|x| \\leqslant 2$ ; c) $|x| > 1$.
5. Comparer $f(-4)$ et $f(-2)$ en utilisant le sens de variation de $f$, sans calculer ces nombres.`,
      solution: `**1.** $f(-3) = 3$ ; $f(2{,}5) = 2{,}5$ ; $f(0) = 0$ ; $f\\left(-\\frac{7}{2}\\right) = \\frac{7}{2}$.

**2.** Si $x \\geqslant 0$, $f(x) = x$ ; si $x < 0$, $f(x) = -x$. La courbe est la réunion de deux demi-droites issues de l'origine : celle d'équation $y = -x$ pour $x \\leqslant 0$ et celle d'équation $y = x$ pour $x \\geqslant 0$ (forme de « V », symétrique par rapport à l'axe des ordonnées). Elle passe par $(-4 ; 4)$, $(0 ; 0)$ et $(4 ; 4)$.

**3.** $f$ est décroissante sur $]-\\infty ; 0]$ (fonction affine $x \\mapsto -x$ de coefficient $-1 < 0$) et croissante sur $[0 ; +\\infty[$ (coefficient $1 > 0$). Son minimum est $f(0) = 0$, atteint en $0$.

**4. a)** La droite $y = 3$ coupe la courbe aux points d'abscisses $-3$ et $3$ : $\\mathcal{S} = \\{-3 ; 3\\}$ (la distance de $x$ à $0$ vaut $3$).
**b)** La courbe est sous la droite $y = 2$ pour $x \\in [-2 ; 2]$ : $|x| \\leqslant 2 \\iff -2 \\leqslant x \\leqslant 2$, $\\mathcal{S} = [-2 ; 2]$.
**c)** La courbe est strictement au-dessus de la droite $y = 1$ pour $x < -1$ ou $x > 1$ : $\\mathcal{S} = \\,]-\\infty ; -1[\\, \\cup \\,]1 ; +\\infty[$.

**5.** $-4 < -2$ et ces deux nombres appartiennent à $]-\\infty ; 0]$, où $f$ est décroissante : l'ordre est inversé, donc $f(-4) > f(-2)$ (on retrouve $4 > 2$).`
    },
    {
      id: "2A3-ds-05",
      title: "Inéquations avec carré, inverse et racine",
      difficulty: 3,
      points: 6,
      statement: `Résoudre les inéquations suivantes. On pourra s'appuyer sur l'allure des courbes des fonctions de référence, mais chaque réponse doit être justifiée.

1. $x^2 < 3$
2. $x^2 \\geqslant 5$
3. $\\sqrt{x} < 2$
4. $\\dfrac{1}{x} \\leqslant 2$
5. $\\dfrac{1}{x} > -1$`,
      solution: `**1.** $x^2 < 3 \\iff x^2 - (\\sqrt{3})^2 < 0 \\iff (x - \\sqrt{3})(x + \\sqrt{3}) < 0 \\iff x \\in \\,]-\\sqrt{3} ; \\sqrt{3}[$.

**2.** $x^2 \\geqslant 5 \\iff (x - \\sqrt{5})(x + \\sqrt{5}) \\geqslant 0 \\iff x \\in \\,]-\\infty ; -\\sqrt{5}] \\cup [\\sqrt{5} ; +\\infty[$.

**3.** La racine n'est définie que pour $x \\geqslant 0$. Sur $[0 ; +\\infty[$, la fonction carré est strictement croissante et les deux membres sont positifs : $\\sqrt{x} < 2 \\iff x < 4$. $\\mathcal{S} = [0 ; 4[$.

**4.** On distingue selon le signe de $x$ ($x \\neq 0$) :
- si $x < 0$ : $\\frac{1}{x} < 0 \\leqslant 2$, l'inéquation est toujours vérifiée ;
- si $x > 0$ : la fonction inverse est décroissante sur $]0 ; +\\infty[$ et $2 = \\frac{1}{1/2}$, donc $\\frac{1}{x} \\leqslant \\frac{1}{1/2} \\iff x \\geqslant \\frac{1}{2}$.

$\\mathcal{S} = \\,]-\\infty ; 0[\\, \\cup \\left[\\frac{1}{2} ; +\\infty\\right[$.

**5.**
- si $x > 0$ : $\\frac{1}{x} > 0 > -1$, toujours vérifiée ;
- si $x < 0$ : la fonction inverse est décroissante sur $]-\\infty ; 0[$ et $-1 = \\frac{1}{-1}$, donc $\\frac{1}{x} > \\frac{1}{-1} \\iff x < -1$.

$\\mathcal{S} = \\,]-\\infty ; -1[\\, \\cup \\,]0 ; +\\infty[$.`
    },
    {
      id: "2A3-ds-06",
      title: "Positions relatives des courbes de référence",
      difficulty: 3,
      points: 6,
      statement: `On étudie, pour $x \\geqslant 0$, les positions relatives des courbes des fonctions $x \\mapsto x$, $x \\mapsto x^2$, $x \\mapsto x^3$ et $x \\mapsto \\sqrt{x}$.

1. Factoriser $x^2 - x$ et $x^3 - x^2$.
2. En déduire, selon que $x \\in [0 ; 1]$ ou $x \\in [1 ; +\\infty[$, l'ordre des nombres $x$, $x^2$ et $x^3$.
3. a) Pour $x \\geqslant 0$, montrer que $x - \\sqrt{x} = \\sqrt{x}(\\sqrt{x} - 1)$.
   b) En déduire la comparaison de $x$ et $\\sqrt{x}$ selon les valeurs de $x$.
4. Ranger dans l'ordre croissant, sans calculatrice : $0{,}3$ ; $0{,}3^2$ ; $0{,}3^3$ ; $\\sqrt{0{,}3}$. Faire de même avec $1{,}7$ ; $1{,}7^2$ ; $1{,}7^3$ ; $\\sqrt{1{,}7}$.`,
      solution: `**1.** $x^2 - x = x(x - 1)$ et $x^3 - x^2 = x^2(x - 1)$.

**2.** Pour $x \\geqslant 0$, les facteurs $x$ et $x^2$ sont positifs ; le signe des deux différences est donc celui de $x - 1$.
- Si $0 \\leqslant x \\leqslant 1$ : $x^2 - x \\leqslant 0$ et $x^3 - x^2 \\leqslant 0$, donc $x^3 \\leqslant x^2 \\leqslant x$.
- Si $x \\geqslant 1$ : $x \\leqslant x^2 \\leqslant x^3$.

**3. a)** Pour $x \\geqslant 0$, $x = (\\sqrt{x})^2$, donc $x - \\sqrt{x} = \\sqrt{x}\\,\\sqrt{x} - \\sqrt{x} = \\sqrt{x}(\\sqrt{x} - 1)$.

**b)** $\\sqrt{x} \\geqslant 0$, et $\\sqrt{x} - 1 \\leqslant 0 \\iff \\sqrt{x} \\leqslant 1 \\iff x \\leqslant 1$. Donc :
- si $0 \\leqslant x \\leqslant 1$ : $x \\leqslant \\sqrt{x}$ ;
- si $x \\geqslant 1$ : $\\sqrt{x} \\leqslant x$.

**4.** $0{,}3 \\in \\,]0 ; 1[$ : $0{,}3^3 < 0{,}3^2 < 0{,}3 < \\sqrt{0{,}3}$ (inégalités strictes car $x \\neq 0$ et $x \\neq 1$).
$1{,}7 > 1$ : $\\sqrt{1{,}7} < 1{,}7 < 1{,}7^2 < 1{,}7^3$.`
    },
    {
      id: "2A3-ds-07",
      title: "Hyperbole et droite",
      difficulty: 4,
      points: 7,
      statement: `Dans un repère, on considère l'hyperbole $\\mathcal{H}$ représentant la fonction inverse et la droite $\\mathcal{D}$ d'équation $y = -x + \\frac{5}{2}$.

1. Montrer que pour tout $x \\neq 0$ : $\\dfrac{1}{x} - \\left(-x + \\dfrac{5}{2}\\right) = \\dfrac{2x^2 - 5x + 2}{2x}$.
2. Vérifier que $2x^2 - 5x + 2 = (2x - 1)(x - 2)$.
3. En déduire les coordonnées des points d'intersection de $\\mathcal{H}$ et $\\mathcal{D}$.
4. Étudier, à l'aide d'un tableau de signes, la position relative de $\\mathcal{H}$ et $\\mathcal{D}$.
5. Les points d'intersection sont-ils symétriques par rapport à une droite remarquable ? Justifier.`,
      solution: `**1.** $\\frac{1}{x} + x - \\frac{5}{2} = \\frac{2}{2x} + \\frac{2x^2}{2x} - \\frac{5x}{2x} = \\frac{2x^2 - 5x + 2}{2x}$.

**2.** $(2x - 1)(x - 2) = 2x^2 - 4x - x + 2 = 2x^2 - 5x + 2$.

**3.** Les abscisses des points d'intersection vérifient $\\frac{1}{x} = -x + \\frac{5}{2}$, soit $(2x - 1)(x - 2) = 0$ avec $x \\neq 0$ : $x = \\frac{1}{2}$ ou $x = 2$.
Points d'intersection : $\\left(\\frac{1}{2} ; 2\\right)$ et $\\left(2 ; \\frac{1}{2}\\right)$.

**4.** On étudie le signe de $\\frac{(2x - 1)(x - 2)}{2x}$ :

| $x$ | $-\\infty$ … $0$ | $0$ … $\\frac{1}{2}$ | $\\frac{1}{2}$ … $2$ | $2$ … $+\\infty$ |
|---|---|---|---|---|
| $2x - 1$ | $-$ | $-$ | $+$ | $+$ |
| $x - 2$ | $-$ | $-$ | $-$ | $+$ |
| $2x$ | $-$ | $+$ | $+$ | $+$ |
| différence | $-$ | $+$ | $-$ | $+$ |

- $\\mathcal{H}$ est **au-dessus** de $\\mathcal{D}$ sur $\\left]0 ; \\frac{1}{2}\\right[$ et sur $]2 ; +\\infty[$ ;
- $\\mathcal{H}$ est **en dessous** de $\\mathcal{D}$ sur $]-\\infty ; 0[$ et sur $\\left]\\frac{1}{2} ; 2\\right[$.

*Contrôle :* en $x = 1$, $\\frac{1}{1} = 1 < 1{,}5$ ; $\\mathcal{H}$ est bien en dessous.

**5.** Les points $\\left(\\frac{1}{2} ; 2\\right)$ et $\\left(2 ; \\frac{1}{2}\\right)$ s'échangent quand on permute abscisse et ordonnée : ils sont symétriques par rapport à la droite d'équation $y = x$ (qui est d'ailleurs un axe de symétrie de l'hyperbole, puisque $y = \\frac{1}{x} \\iff x = \\frac{1}{y}$).`
    },
    {
      id: "2A3-ds-08",
      title: "Cuves cubiques et fonction cube",
      difficulty: 4,
      points: 6,
      statement: `Une entreprise fabrique des cuves en forme de cube.

1. Quel est le volume, en m³, d'une cuve de $1{,}2$ m d'arête ?
2. On souhaite une cuve cubique de volume exactement $3$ m³. On note $c$ son arête.
   a) Justifier, à l'aide du sens de variation de la fonction cube, qu'il existe une seule valeur de $c$ possible.
   b) Calculer $1{,}44^3$ et $1{,}45^3$. En déduire un encadrement de $c$ d'amplitude $0{,}01$.
3. Par combien est multiplié le volume d'un cube lorsque son arête est doublée ? Lorsqu'elle est augmentée de $10\\,\\%$ ? Donner, dans ce second cas, le pourcentage d'augmentation du volume.
4. Résoudre l'inéquation $x^3 \\leqslant -27$.`,
      solution: `**1.** $V = 1{,}2^3 = 1{,}728$ m³.

**2. a)** La fonction cube est strictement croissante sur $\\mathbb{R}$ ; elle prend donc chaque valeur au plus une fois. Comme $1^3 = 1 < 3 < 8 = 2^3$ et que la courbe se trace sans lever le crayon, la valeur $3$ est atteinte une et une seule fois : il existe une unique arête $c$, comprise entre $1$ et $2$.

**b)** $1{,}44^3 = 2{,}985\\,984$ et $1{,}45^3 = 3{,}048\\,625$. Donc $1{,}44^3 < c^3 < 1{,}45^3$ et, la fonction cube étant strictement croissante, $1{,}44 < c < 1{,}45$.

**3.** $(2a)^3 = 8a^3$ : le volume est multiplié par $8$.
$(1{,}1a)^3 = 1{,}331a^3$ : le volume est multiplié par $1{,}331$, soit une augmentation de $33{,}1\\,\\%$.

**4.** $-27 = (-3)^3$ et la fonction cube est strictement croissante : $x^3 \\leqslant (-3)^3 \\iff x \\leqslant -3$. $\\mathcal{S} = \\,]-\\infty ; -3]$.`
    },
    {
      id: "2A3-ds-09",
      title: "Calculs et comparaisons avec la fonction cube",
      difficulty: 1,
      points: 4,
      statement: `Soit $f$ la fonction cube, définie sur $\\mathbb{R}$ par $f(x) = x^3$, et $\\mathcal{C}$ sa courbe représentative.

1. Calculer $f(-2)$, $f(0{,}1)$ et $f(-1{,}5)$.
2. Les points $A(-3 ; -27)$ et $B(0{,}5 ; 0{,}25)$ appartiennent-ils à $\\mathcal{C}$ ?
3. Sans calculer, comparer $(-2{,}1)^3$ et $(-2{,}01)^3$, en citant la propriété utilisée.
4. Résoudre dans $\\mathbb{R}$ : a) $x^3 = 64$ ; $\\quad$ b) $x^3 < -\\frac{1}{8}$.
5. Montrer que pour tout réel $x$, $f(-x) = -f(x)$. Que peut-on en déduire pour la courbe $\\mathcal{C}$ ?`,
      solution: `**1.** $f(-2) = (-2)^3 = -8$ ; $\;f(0{,}1) = 0{,}001$ ; $\;f(-1{,}5) = -3{,}375$.

**2.** $f(-3) = -27$ : $A \\in \\mathcal{C}$. $\;f(0{,}5) = 0{,}125 \\neq 0{,}25$ : $B \\notin \\mathcal{C}$.

**3.** La fonction cube est strictement croissante sur $\\mathbb{R}$ : elle conserve l'ordre. Comme $-2{,}1 < -2{,}01$, on a $(-2{,}1)^3 < (-2{,}01)^3$.

**4. a)** $4^3 = 64$ et la fonction cube est strictement croissante, donc $4$ est l'unique solution : $\\mathcal{S} = \\{4\\}$.

**b)** $-\\frac{1}{8} = \\left(-\\frac{1}{2}\\right)^3$. Par stricte croissance : $x^3 < \\left(-\\frac{1}{2}\\right)^3 \\iff x < -\\frac{1}{2}$. $\\mathcal{S} = \\left]-\\infty ; -\\frac{1}{2}\\right[$.

**5.** $f(-x) = (-x)^3 = (-x)(-x)(-x) = -x^3 = -f(x)$. Si le point $M(x ; x^3)$ est sur $\\mathcal{C}$, alors son symétrique par rapport à l'origine, $M'(-x ; -x^3)$, est aussi sur $\\mathcal{C}$ : la courbe est symétrique par rapport à l'origine du repère.`
    },
    {
      id: "2A3-ds-10",
      title: "Inéquations avec cube, valeur absolue et inverse",
      difficulty: 2,
      points: 5,
      statement: `Résoudre dans $\\mathbb{R}$ les inéquations suivantes, en justifiant à l'aide des propriétés des fonctions de référence. Donner les solutions sous forme d'intervalle ou de réunion d'intervalles.

1. $x^3 > 8$
2. $x^3 \\leqslant -1$
3. $|x| < 3$
4. $|x| \\geqslant 1{,}5$
5. $\\dfrac{1}{x} \\geqslant -2$ (on distinguera les cas $x > 0$ et $x < 0$).`,
      solution: `**1.** $8 = 2^3$ et la fonction cube est strictement croissante sur $\\mathbb{R}$ : $x^3 > 2^3 \\iff x > 2$. $\\mathcal{S} = \\,]2 ; +\\infty[$.

**2.** $-1 = (-1)^3$, donc de même $x^3 \\leqslant -1 \\iff x \\leqslant -1$. $\\mathcal{S} = \\,]-\\infty ; -1]$.

**3.** $|x|$ est la distance de $x$ à $0$ : elle est strictement inférieure à $3$ si et seulement si $-3 < x < 3$. $\\mathcal{S} = \\,]-3 ; 3[$.

**4.** La distance de $x$ à $0$ est au moins $1{,}5$ si et seulement si $x \\leqslant -1{,}5$ ou $x \\geqslant 1{,}5$. $\\mathcal{S} = \\,]-\\infty ; -1{,}5] \\cup [1{,}5 ; +\\infty[$.

**5.** L'inéquation n'a de sens que pour $x \\neq 0$.
- Si $x > 0$ : $\\frac{1}{x} > 0 > -2$, donc tout réel strictement positif est solution.
- Si $x < 0$ : $-2 = \\frac{1}{-1/2}$, et la fonction inverse est strictement décroissante sur $]-\\infty ; 0[$ (elle inverse l'ordre). Donc $\\frac{1}{x} \\geqslant \\frac{1}{-1/2} \\iff x \\leqslant -\\frac{1}{2}$.

$\\mathcal{S} = \\left]-\\infty ; -\\frac{1}{2}\\right] \\cup \\,]0 ; +\\infty[$. (Vérification : $x = -1$ donne $-1 \\geqslant -2$, vrai ; $x = -0{,}25$ donne $-4 \\geqslant -2$, faux.)`
    },
    {
      id: "2A3-ds-11",
      title: "Démontrer les variations des fonctions racine carrée et cube",
      difficulty: 3,
      points: 6,
      statement: `**Partie A : la fonction racine carrée.**
1. Soient $a$ et $b$ deux réels tels que $0 \\leqslant a < b$. Montrer que $\\sqrt{b} - \\sqrt{a} = \\dfrac{b - a}{\\sqrt{b} + \\sqrt{a}}$.
2. En déduire le sens de variation de la fonction racine carrée sur $[0 ; +\\infty[$.

**Partie B : la fonction cube.**
3. Montrer que pour tous réels $a$ et $b$ : $b^3 - a^3 = (b - a)(b^2 + ab + a^2)$.
4. Montrer que $b^2 + ab + a^2 = \\left(a + \\dfrac{b}{2}\\right)^2 + \\dfrac{3}{4}b^2$.
5. En déduire que si $a < b$, alors $b^2 + ab + a^2 > 0$, puis que la fonction cube est strictement croissante sur $\\mathbb{R}$.`,
      solution: `**1.** Comme $0 \\leqslant a < b$, on a $\\sqrt{b} > 0$, donc $\\sqrt{b} + \\sqrt{a} > 0$. Alors
$$\\frac{b - a}{\\sqrt{b} + \\sqrt{a}} = \\frac{(\\sqrt{b})^2 - (\\sqrt{a})^2}{\\sqrt{b} + \\sqrt{a}} = \\frac{(\\sqrt{b} - \\sqrt{a})(\\sqrt{b} + \\sqrt{a})}{\\sqrt{b} + \\sqrt{a}} = \\sqrt{b} - \\sqrt{a}.$$

**2.** Si $0 \\leqslant a < b$ : $b - a > 0$ et $\\sqrt{b} + \\sqrt{a} > 0$, donc $\\sqrt{b} - \\sqrt{a} > 0$, soit $\\sqrt{a} < \\sqrt{b}$. La fonction racine carrée est strictement croissante sur $[0 ; +\\infty[$.

**3.** $(b - a)(b^2 + ab + a^2) = b^3 + ab^2 + a^2b - ab^2 - a^2b - a^3 = b^3 - a^3$.

**4.** $\\left(a + \\frac{b}{2}\\right)^2 + \\frac{3}{4}b^2 = a^2 + ab + \\frac{b^2}{4} + \\frac{3b^2}{4} = a^2 + ab + b^2$.

**5.** D'après la question 4, $b^2 + ab + a^2$ est une somme de deux carrés (le second multiplié par $\\frac{3}{4} > 0$), donc il est positif ou nul. Il est nul seulement si $b = 0$ et $a + \\frac{b}{2} = 0$, c'est-à-dire $a = b = 0$, ce qui est impossible lorsque $a < b$. Donc $b^2 + ab + a^2 > 0$.

Si $a < b$, alors $b - a > 0$ et $b^2 + ab + a^2 > 0$, donc $b^3 - a^3 > 0$, soit $a^3 < b^3$ : la fonction cube est strictement croissante sur $\\mathbb{R}$.`
    },
    {
      id: "2A3-ds-12",
      title: "Placer un abribus : minimiser une somme de distances",
      difficulty: 4,
      points: 7,
      statement: `Le long d'une route rectiligne, repérée par une droite graduée en kilomètres, se trouvent deux hameaux aux abscisses $1$ et $5$. On veut installer un abribus à l'abscisse $x$.

1. On pose $f(x) = |x - 1| + |x - 5|$. Que représente $f(x)$ ?
2. Écrire $f(x)$ sans valeur absolue lorsque $x \\leqslant 1$, puis lorsque $1 \\leqslant x \\leqslant 5$, puis lorsque $x \\geqslant 5$.
3. En déduire le minimum de $f$ et les positions de l'abribus pour lesquelles il est atteint. Dresser le tableau de variations de $f$ sur $[-2 ; 8]$.
4. Résoudre l'équation $f(x) = 6$.
5. Un troisième hameau est construit à l'abscisse $8$ ; on pose $g(x) = |x - 1| + |x - 3| + |x - 8|$ (deux hameaux en $1$ et $8$, un village plus important en $3$).
 a) Justifier que pour tout $x \\in [1 ; 8]$, $|x - 1| + |x - 8| = 7$, et que pour $x \\notin [1 ; 8]$, $|x - 1| + |x - 8| > 7$.
 b) En déduire le minimum de $g$ et où placer l'abribus.`,
      solution: `**1.** $|x - 1|$ et $|x - 5|$ sont les distances de l'abribus à chacun des hameaux : $f(x)$ est la somme des distances à parcourir depuis les deux hameaux.

**2.**
- Si $x \\leqslant 1$ : $x - 1 \\leqslant 0$ et $x - 5 < 0$, donc $f(x) = (1 - x) + (5 - x) = 6 - 2x$.
- Si $1 \\leqslant x \\leqslant 5$ : $f(x) = (x - 1) + (5 - x) = 4$.
- Si $x \\geqslant 5$ : $f(x) = (x - 1) + (x - 5) = 2x - 6$.

**3.** Sur $]-\\infty ; 1]$, $f(x) = 6 - 2x \\geqslant 6 - 2 = 4$ ; sur $[5 ; +\\infty[$, $f(x) = 2x - 6 \\geqslant 4$. Donc $f(x) \\geqslant 4$ pour tout $x$ : le minimum est $4$, atteint pour **tout** $x \\in [1 ; 5]$ (n'importe quel point entre les deux hameaux).

$f$ est affine décroissante sur $[-2 ; 1]$ (coefficient $-2$), constante sur $[1 ; 5]$, affine croissante sur $[5 ; 8]$ (coefficient $2$), avec $f(-2) = 10$, $f(1) = f(5) = 4$ et $f(8) = 10$.

| $x$ | $-2$ | | $1$ | | $5$ | | $8$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | $10$ | $\\searrow$ | $4$ | $\\rightarrow$ | $4$ | $\\nearrow$ | $10$ |

**4.** Sur $[1 ; 5]$, $f(x) = 4 \\neq 6$. Pour $x \\leqslant 1$ : $6 - 2x = 6 \\iff x = 0$, qui convient. Pour $x \\geqslant 5$ : $2x - 6 = 6 \\iff x = 6$, qui convient. $\\mathcal{S} = \\{0 ; 6\\}$.

**5. a)** Si $1 \\leqslant x \\leqslant 8$ : $|x - 1| + |x - 8| = (x - 1) + (8 - x) = 7$ (la distance entre les deux hameaux). Si $x < 1$ : la somme vaut $(1 - x) + (8 - x) = 9 - 2x > 7$. Si $x > 8$ : elle vaut $2x - 9 > 7$.

**b)** Pour $x \\in [1 ; 8]$, $g(x) = 7 + |x - 3| \\geqslant 7$, avec égalité si et seulement si $x = 3$. Pour $x \\notin [1 ; 8]$, $g(x) > 7 + |x - 3| \\geqslant 7$. Le minimum de $g$ est $7$, atteint uniquement en $x = 3$ : il faut placer l'abribus au village (la valeur « du milieu »).`
    }
  ],
  "2G1": [
    {
      id: "2G1-ds-01",
      title: "Milieu, distance et symétrique",
      difficulty: 1,
      points: 4,
      statement: `Dans un repère orthonormé, on donne les points $A(-2 ; 3)$ et $B(4 ; 1)$.

1. Calculer les coordonnées du milieu $I$ du segment $[AB]$.
2. Calculer la longueur $AB$ et l'écrire sous la forme $a\\sqrt{b}$ avec $a$ et $b$ entiers, $b$ le plus petit possible.
3. Calculer les coordonnées du point $D$, symétrique de $A$ par rapport à $B$.`,
      solution: `**1.** $x_I = \\frac{x_A + x_B}{2} = \\frac{-2 + 4}{2} = 1$ et $y_I = \\frac{y_A + y_B}{2} = \\frac{3 + 1}{2} = 2$. Donc $I(1 ; 2)$.

**2.** Le repère étant orthonormé :
$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} = \\sqrt{6^2 + (-2)^2} = \\sqrt{40} = \\sqrt{4 \\times 10} = 2\\sqrt{10}$.

**3.** $D$ est le symétrique de $A$ par rapport à $B$ signifie que $B$ est le milieu de $[AD]$ :
$\\frac{-2 + x_D}{2} = 4 \\iff x_D = 10$ et $\\frac{3 + y_D}{2} = 1 \\iff y_D = -1$. Donc $D(10 ; -1)$.`
    },
    {
      id: "2G1-ds-02",
      title: "Nature d'un triangle",
      difficulty: 1,
      points: 4,
      statement: `Dans un repère orthonormé, on donne $A(1 ; 2)$, $B(5 ; 4)$ et $C(3 ; 8)$.

1. Calculer $AB^2$, $BC^2$ et $AC^2$.
2. Démontrer que le triangle $ABC$ est isocèle et rectangle, en précisant le sommet principal.
3. Calculer l'aire du triangle $ABC$.`,
      solution: `**1.** $AB^2 = (5 - 1)^2 + (4 - 2)^2 = 16 + 4 = 20$ ;
$BC^2 = (3 - 5)^2 + (8 - 4)^2 = 4 + 16 = 20$ ;
$AC^2 = (3 - 1)^2 + (8 - 2)^2 = 4 + 36 = 40$.

**2.** $AB^2 = BC^2$, donc $AB = BC$ : le triangle est isocèle en $B$.
De plus $AB^2 + BC^2 = 20 + 20 = 40 = AC^2$ : d'après la réciproque du théorème de Pythagore, il est rectangle en $B$.
$ABC$ est donc **isocèle rectangle en $B$**.

**3.** Les côtés de l'angle droit mesurent $AB = BC = \\sqrt{20}$, d'où $\\mathcal{A} = \\frac{AB \\times BC}{2} = \\frac{20}{2} = 10$ unités d'aire.`
    },
    {
      id: "2G1-ds-03",
      title: "Compléter un parallélogramme",
      difficulty: 2,
      points: 5,
      statement: `Dans un repère orthonormé, on considère les points $A(-1 ; 2)$, $B(3 ; 3)$ et $C(5 ; -1)$.

1. Calculer les coordonnées du milieu $K$ de $[AC]$.
2. En déduire les coordonnées du point $D$ tel que $ABCD$ soit un parallélogramme. Justifier.
3. Le parallélogramme $ABCD$ est-il un rectangle ? Un losange ? Justifier par des calculs de longueurs.`,
      solution: `**1.** $K\\left(\\frac{-1 + 5}{2} ; \\frac{2 - 1}{2}\\right) = K(2 ; 0{,}5)$.

**2.** Un quadrilatère est un parallélogramme si et seulement si ses diagonales $[AC]$ et $[BD]$ ont le même milieu. $K$ doit donc être le milieu de $[BD]$ :
$\\frac{3 + x_D}{2} = 2 \\iff x_D = 1$ et $\\frac{3 + y_D}{2} = 0{,}5 \\iff y_D = -2$. Donc $D(1 ; -2)$.

**3.** *Rectangle ?* Un parallélogramme est un rectangle si et seulement si ses diagonales ont la même longueur. $AC^2 = 6^2 + (-3)^2 = 45$ et $BD^2 = (1 - 3)^2 + (-2 - 3)^2 = 4 + 25 = 29$. $AC \\neq BD$ : **ce n'est pas un rectangle**.
*Losange ?* Il faudrait deux côtés consécutifs égaux. $AB^2 = 4^2 + 1^2 = 17$ et $BC^2 = 2^2 + (-4)^2 = 20$. $AB \\neq BC$ : **ce n'est pas un losange**.`
    },
    {
      id: "2G1-ds-04",
      title: "Points d'un cercle",
      difficulty: 2,
      points: 5,
      statement: `Dans un repère orthonormé, on considère le cercle $\\mathcal{C}$ de centre $\\Omega(2 ; -1)$ et de rayon $5$.

1. Les points $A(5 ; 3)$, $B(-2 ; 2)$ et $C(6 ; 1)$ appartiennent-ils au cercle $\\mathcal{C}$ ? Préciser, le cas échéant, si le point est à l'intérieur ou à l'extérieur du disque.
2. Le segment $[AB]$ est-il un diamètre de $\\mathcal{C}$ ?
3. Déterminer les coordonnées du point $A'$ diamétralement opposé à $A$ sur $\\mathcal{C}$.
4. Déterminer les points de $\\mathcal{C}$ d'abscisse $2$.`,
      solution: `**1.** On compare les distances au centre avec le rayon $5$ (on compare les carrés à $25$) :
- $\\Omega A^2 = 3^2 + 4^2 = 25$ : $A \\in \\mathcal{C}$ ;
- $\\Omega B^2 = (-4)^2 + 3^2 = 25$ : $B \\in \\mathcal{C}$ ;
- $\\Omega C^2 = 4^2 + 2^2 = 20 < 25$ : $C$ est à l'intérieur du disque.

**2.** Le milieu de $[AB]$ est $\\left(\\frac{5 - 2}{2} ; \\frac{3 + 2}{2}\\right) = (1{,}5 ; 2{,}5) \\neq \\Omega$ : $[AB]$ n'est pas un diamètre. (On peut aussi remarquer que $AB^2 = 49 + 1 = 50 \\neq 10^2$.)

**3.** $\\Omega$ est le milieu de $[AA']$ : $x_{A'} = 2 \\times 2 - 5 = -1$ et $y_{A'} = 2 \\times (-1) - 3 = -5$. Donc $A'(-1 ; -5)$.

**4.** Un point $M(2 ; y)$ est sur $\\mathcal{C}$ si et seulement si $\\Omega M = 5$, soit $|y + 1| = 5$, c'est-à-dire $y = 4$ ou $y = -6$. Les points cherchés sont $(2 ; 4)$ et $(2 ; -6)$.`
    },
    {
      id: "2G1-ds-05",
      title: "Un quadrilatère particulier",
      difficulty: 3,
      points: 6,
      statement: `Dans un repère orthonormé, on donne $A(0 ; 1)$, $B(4 ; 3)$, $C(6 ; -1)$ et $D(2 ; -3)$.

1. Démontrer que $ABCD$ est un parallélogramme.
2. Démontrer que $ABCD$ est un losange.
3. Démontrer que $ABCD$ est un rectangle.
4. Quelle est la nature précise de $ABCD$ ? Calculer son aire.`,
      solution: `**1.** Milieu de $[AC]$ : $\\left(\\frac{0 + 6}{2} ; \\frac{1 - 1}{2}\\right) = (3 ; 0)$. Milieu de $[BD]$ : $\\left(\\frac{4 + 2}{2} ; \\frac{3 - 3}{2}\\right) = (3 ; 0)$.
Les diagonales ont le même milieu : $ABCD$ est un parallélogramme.

**2.** $AB^2 = 4^2 + 2^2 = 20$ et $BC^2 = 2^2 + (-4)^2 = 20$. Le parallélogramme a deux côtés consécutifs de même longueur : c'est un losange.

**3.** $AC^2 = 6^2 + (-2)^2 = 40$ et $BD^2 = (-2)^2 + (-6)^2 = 40$. Le parallélogramme a des diagonales de même longueur : c'est un rectangle.

**4.** $ABCD$ est à la fois un losange et un rectangle : c'est un **carré**, de côté $\\sqrt{20}$. Son aire vaut $AB^2 = 20$ unités d'aire.`
    },
    {
      id: "2G1-ds-06",
      title: "Un point équidistant sur l'axe des abscisses",
      difficulty: 3,
      points: 6,
      statement: `Dans un repère orthonormé, on donne $A(1 ; 3)$ et $B(5 ; 1)$. On cherche un point $M$ de l'axe des abscisses tel que $MA = MB$.

1. On note $M(x ; 0)$. Exprimer $MA^2$ et $MB^2$ en fonction de $x$.
2. En déduire la valeur de $x$, puis les coordonnées de $M$.
3. Démontrer que le triangle $AMB$ est rectangle isocèle.
4. Soit $I$ le milieu de $[AB]$. Calculer $MI$ et vérifier que $MI = \\frac{AB}{2}$. Interpréter ce résultat à l'aide d'un cercle.`,
      solution: `**1.** $MA^2 = (1 - x)^2 + 3^2 = x^2 - 2x + 10$ et $MB^2 = (5 - x)^2 + 1^2 = x^2 - 10x + 26$.

**2.** Des distances positives sont égales si et seulement si leurs carrés le sont :
$x^2 - 2x + 10 = x^2 - 10x + 26 \\iff 8x = 16 \\iff x = 2$. Donc $M(2 ; 0)$.

**3.** $MA^2 = 4 - 4 + 10 = 10$, $MB^2 = 4 - 20 + 26 = 10$ et $AB^2 = 4^2 + (-2)^2 = 20$.
$MA = MB$ et $MA^2 + MB^2 = 20 = AB^2$ : $AMB$ est rectangle isocèle en $M$.

**4.** $I(3 ; 2)$, donc $MI = \\sqrt{1^2 + 2^2} = \\sqrt{5}$ et $\\frac{AB}{2} = \\frac{\\sqrt{20}}{2} = \\frac{2\\sqrt{5}}{2} = \\sqrt{5}$.
$IA = IB = IM$ : le point $M$ est sur le cercle de diamètre $[AB]$, ce qui est cohérent avec l'angle droit en $M$.`
    },
    {
      id: "2G1-ds-07",
      title: "Triangle rectangle et cercle circonscrit",
      difficulty: 4,
      points: 7,
      statement: `Dans un repère orthonormé, on considère $A(1 ; 1)$, $B(7 ; 3)$ et $C(2 ; -2)$.

1. Démontrer que le triangle $ABC$ est rectangle. En quel sommet ?
2. En déduire le centre $\\Omega$ et le rayon $R$ du cercle $\\mathcal{C}$ circonscrit au triangle $ABC$.
3. Le point $E(7 ; -2)$ appartient-il à $\\mathcal{C}$ ?
4. Soit $D$ le symétrique de $A$ par rapport à $\\Omega$.
   a) Calculer les coordonnées de $D$.
   b) Déterminer la nature du quadrilatère $ABDC$.`,
      solution: `**1.** $AB^2 = 6^2 + 2^2 = 40$, $AC^2 = 1^2 + (-3)^2 = 10$, $BC^2 = (-5)^2 + (-5)^2 = 50$.
$AB^2 + AC^2 = 50 = BC^2$ : d'après la réciproque du théorème de Pythagore, $ABC$ est rectangle en $A$.

**2.** Le cercle circonscrit à un triangle rectangle a pour diamètre l'hypoténuse. $\\Omega$ est le milieu de $[BC]$ : $\\Omega\\left(\\frac{7 + 2}{2} ; \\frac{3 - 2}{2}\\right) = \\Omega(4{,}5 ; 0{,}5)$, et $R = \\frac{BC}{2} = \\frac{\\sqrt{50}}{2} = \\frac{5\\sqrt{2}}{2}$, soit $R^2 = 12{,}5$.

**3.** $\\Omega E^2 = (7 - 4{,}5)^2 + (-2 - 0{,}5)^2 = 6{,}25 + 6{,}25 = 12{,}5 = R^2$ : $E \\in \\mathcal{C}$.

**4. a)** $\\Omega$ est le milieu de $[AD]$ : $x_D = 2 \\times 4{,}5 - 1 = 8$ et $y_D = 2 \\times 0{,}5 - 1 = 0$. Donc $D(8 ; 0)$.

**b)** Les diagonales $[AD]$ et $[BC]$ de $ABDC$ ont le même milieu $\\Omega$ : c'est un parallélogramme. Elles ont aussi la même longueur, puisque $AD = 2R = BC$ (les deux sont des diamètres de $\\mathcal{C}$). Un parallélogramme aux diagonales de même longueur est un **rectangle**. *(On vérifie : $AB^2 = 40$ et $DC^2 = 36 + 4 = 40$.)*`
    },
    {
      id: "2G1-ds-08",
      title: "Le milieu de l'hypoténuse : démonstration et application",
      difficulty: 4,
      points: 7,
      statement: `**Partie A : démonstration.** Soient $a$ et $b$ deux réels strictement positifs. Dans un repère orthonormé d'origine $O$, on considère $A(a ; 0)$ et $B(0 ; b)$. Le triangle $OAB$ est rectangle en $O$. On note $M$ le milieu de $[AB]$.

1. Calculer les coordonnées de $M$.
2. Calculer $OM$, $AM$ et $BM$ en fonction de $a$ et $b$.
3. Quel théorème vient-on de démontrer ?

**Partie B : application.** Un randonneur part d'un refuge $O$, marche $6$ km vers l'est jusqu'à un point $A$, puis rejoint un point $B$ situé à $8$ km au nord du refuge. Une source se trouve au milieu $M$ du trajet $[AB]$, supposé rectiligne.

4. Quelle distance le randonneur parcourt-il entre $A$ et $B$ ?
5. À quelle distance du refuge se trouve la source ?
6. Un second refuge $R$ est situé à $1$ km à l'est et $1$ km au sud de la source $M$.
   a) Montrer que $R$ est à la même distance du refuge $O$ que la source.
   b) Le point $R$ appartient-il au cercle circonscrit au triangle $OAB$ ?`,
      solution: `**1.** $M\\left(\\frac{a + 0}{2} ; \\frac{0 + b}{2}\\right) = M\\left(\\frac{a}{2} ; \\frac{b}{2}\\right)$.

**2.** $OM = \\sqrt{\\frac{a^2}{4} + \\frac{b^2}{4}} = \\frac{\\sqrt{a^2 + b^2}}{2}$.
$AM = \\sqrt{\\left(\\frac{a}{2} - a\\right)^2 + \\left(\\frac{b}{2}\\right)^2} = \\sqrt{\\frac{a^2}{4} + \\frac{b^2}{4}} = \\frac{\\sqrt{a^2 + b^2}}{2}$, et de même $BM = \\frac{\\sqrt{a^2 + b^2}}{2}$.

**3.** $OM = AM = BM$ : dans un triangle rectangle, le milieu de l'hypoténuse est à égale distance des trois sommets (c'est le centre du cercle circonscrit). Comme $AB = \\sqrt{a^2 + b^2}$, on a aussi $OM = \\frac{AB}{2}$.

**4.** On choisit un repère orthonormé d'origine $O$, l'unité étant le kilomètre, l'axe des abscisses orienté vers l'est : $A(6 ; 0)$ et $B(0 ; 8)$. $AB = \\sqrt{36 + 64} = 10$ km.

**5.** D'après la partie A, $OM = \\frac{AB}{2} = 5$ km.

**6. a)** $M(3 ; 4)$, donc $R(3 + 1 ; 4 - 1) = R(4 ; 3)$ et $OR = \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5$ km $= OM$.

**b)** Le cercle circonscrit à $OAB$ a pour centre $M$ et pour rayon $5$. Or $MR = \\sqrt{1^2 + (-1)^2} = \\sqrt{2} \\neq 5$ : $R$ n'appartient pas à ce cercle. (Il appartient en revanche au cercle de centre $O$ et de rayon $5$, qui passe par $M$.)`
    },
    {
      id: "2G1-ds-09",
      title: "Milieu, longueur et point symétrique",
      difficulty: 1,
      points: 4,
      statement: `Dans un repère orthonormé, on donne les points $A(-3 ; 1)$ et $B(5 ; -5)$.

1. Calculer les coordonnées du milieu $I$ du segment $[AB]$.
2. Calculer la longueur $AB$.
3. Déterminer les coordonnées du point $C$ tel que $B$ soit le milieu du segment $[AC]$.
4. Le point $E(7 ; 4)$ est-il à égale distance de $A$ et de $B$ ? Justifier.`,
      solution: `**1.** $x_I = \\frac{x_A + x_B}{2} = \\frac{-3 + 5}{2} = 1$ et $y_I = \\frac{y_A + y_B}{2} = \\frac{1 + (-5)}{2} = -2$. Donc $I(1 ; -2)$.

**2.** Le repère est orthonormé : $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} = \\sqrt{8^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$.

**3.** On note $C(x ; y)$. $B$ est le milieu de $[AC]$ si et seulement si $\\frac{-3 + x}{2} = 5$ et $\\frac{1 + y}{2} = -5$, c'est-à-dire $x = 13$ et $y = -11$. Donc $C(13 ; -11)$.

**4.** $EA = \\sqrt{(-3 - 7)^2 + (1 - 4)^2} = \\sqrt{100 + 9} = \\sqrt{109}$ et $EB = \\sqrt{(5 - 7)^2 + (-5 - 4)^2} = \\sqrt{4 + 81} = \\sqrt{85}$.

Comme $\\sqrt{109} \\neq \\sqrt{85}$, le point $E$ n'est pas à égale distance de $A$ et de $B$.`
    },
    {
      id: "2G1-ds-10",
      title: "Triangle isocèle, hauteur et aire",
      difficulty: 2,
      points: 5,
      statement: `Dans un repère orthonormé, on considère les points $A(-1 ; 0)$, $B(3 ; 4)$ et $C(5 ; -2)$.

1. Calculer $AB$, $AC$ et $BC$ (valeurs exactes).
2. En déduire la nature du triangle $ABC$. Est-il rectangle ?
3. On note $H$ le milieu de $[AB]$. Calculer les coordonnées de $H$, puis la longueur $CH$.
4. Justifier que $(CH)$ est la hauteur issue de $C$ du triangle $ABC$, puis calculer l'aire de ce triangle.`,
      solution: `**1.**
- $AB = \\sqrt{(3 + 1)^2 + (4 - 0)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$ ;
- $AC = \\sqrt{(5 + 1)^2 + (-2 - 0)^2} = \\sqrt{36 + 4} = \\sqrt{40} = 2\\sqrt{10}$ ;
- $BC = \\sqrt{(5 - 3)^2 + (-2 - 4)^2} = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10}$.

**2.** $CA = CB$ : le triangle $ABC$ est isocèle en $C$.

Le plus grand côté est $[AC]$ ou $[BC]$ (longueur $\\sqrt{40}$). Pour $[AC]$ : $AB^2 + BC^2 = 32 + 40 = 72 \\neq 40 = AC^2$ ; de même pour $[BC]$ : $AB^2 + AC^2 = 72 \\neq 40$. D'après le théorème de Pythagore (sa contraposée), le triangle n'est pas rectangle.

**3.** $H\\left(\\frac{-1 + 3}{2} ; \\frac{0 + 4}{2}\\right) = (1 ; 2)$ et $CH = \\sqrt{(1 - 5)^2 + (2 + 2)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}$.

**4.** Dans un triangle isocèle en $C$, la médiane issue de $C$ est aussi la hauteur issue de $C$ (car $C$ et $H$ sont tous deux sur la médiatrice de $[AB]$, puisque $CA = CB$ et $HA = HB$). Donc $(CH) \\perp (AB)$.

$$\\mathcal{A} = \\frac{AB \\times CH}{2} = \\frac{4\\sqrt{2} \\times 4\\sqrt{2}}{2} = \\frac{32}{2} = 16 \\text{ unités d'aire.}$$`
    },
    {
      id: "2G1-ds-11",
      title: "Le centre de gravité d'un triangle",
      difficulty: 3,
      points: 6,
      statement: `Dans un repère orthonormé, on considère le triangle $ABC$ avec $A(-1 ; -2)$, $B(5 ; 0)$ et $C(2 ; 5)$, ainsi que le point $G(2 ; 1)$.

1. Calculer les coordonnées du milieu $I$ de $[BC]$ et du milieu $J$ de $[AC]$.
2. a) Calculer les longueurs $AG$, $GI$ et $AI$ sous la forme $a\\sqrt{2}$.
 b) En déduire que $G$ appartient au segment $[AI]$ et que $AG = \\frac{2}{3}AI$.
3. Démontrer de même que $G$ appartient au segment $[BJ]$.
4. Que représente le point $G$ pour le triangle $ABC$ ? Vérifier que ses coordonnées sont les moyennes des coordonnées de $A$, $B$ et $C$.`,
      solution: `**1.** $I\\left(\\frac{5 + 2}{2} ; \\frac{0 + 5}{2}\\right) = (3{,}5 ; 2{,}5)$ et $J\\left(\\frac{-1 + 2}{2} ; \\frac{-2 + 5}{2}\\right) = (0{,}5 ; 1{,}5)$.

**2. a)**
- $AG = \\sqrt{(2 + 1)^2 + (1 + 2)^2} = \\sqrt{18} = 3\\sqrt{2}$ ;
- $GI = \\sqrt{1{,}5^2 + 1{,}5^2} = \\sqrt{4{,}5} = 1{,}5\\sqrt{2}$ (car $4{,}5 = 1{,}5^2 \\times 2$) ;
- $AI = \\sqrt{4{,}5^2 + 4{,}5^2} = 4{,}5\\sqrt{2}$.

**b)** $AG + GI = 3\\sqrt{2} + 1{,}5\\sqrt{2} = 4{,}5\\sqrt{2} = AI$. L'égalité $AG + GI = AI$ signifie que $G$ appartient au segment $[AI]$ (sinon, d'après l'inégalité triangulaire, on aurait $AG + GI > AI$).

De plus $\\frac{AG}{AI} = \\frac{3\\sqrt{2}}{4{,}5\\sqrt{2}} = \\frac{3}{4{,}5} = \\frac{2}{3}$, donc $AG = \\frac{2}{3}AI$.

**3.** $BG = \\sqrt{(2 - 5)^2 + (1 - 0)^2} = \\sqrt{10}$, $GJ = \\sqrt{(0{,}5 - 2)^2 + (1{,}5 - 1)^2} = \\sqrt{2{,}25 + 0{,}25} = \\sqrt{2{,}5} = \\frac{\\sqrt{10}}{2}$ (car $\\frac{10}{4} = 2{,}5$) et $BJ = \\sqrt{(0{,}5 - 5)^2 + 1{,}5^2} = \\sqrt{20{,}25 + 2{,}25} = \\sqrt{22{,}5} = \\frac{3\\sqrt{10}}{2}$ (car $\\frac{9 \\times 10}{4} = 22{,}5$).

$BG + GJ = \\sqrt{10} + \\frac{\\sqrt{10}}{2} = \\frac{3\\sqrt{10}}{2} = BJ$ : $G$ appartient au segment $[BJ]$.

**4.** $(AI)$ et $(BJ)$ sont deux médianes du triangle ; $G$ est sur chacune d'elles : c'est leur point d'intersection, le **centre de gravité** du triangle (situé aux deux tiers de chaque médiane en partant du sommet).

Vérification : $\\frac{-1 + 5 + 2}{3} = \\frac{6}{3} = 2$ et $\\frac{-2 + 0 + 5}{3} = \\frac{3}{3} = 1$ : on retrouve bien $G(2 ; 1)$.`
    },
    {
      id: "2G1-ds-12",
      title: "Quatre points sur un même cercle",
      difficulty: 4,
      points: 7,
      statement: `Dans un repère orthonormé, on considère les points $A(0 ; 0)$, $B(6 ; 2)$, $C(2 ; 6)$ et $D(-1 ; 3)$.

1. Calculer $AB$, $AC$ et $BC$. Le triangle $ABC$ est-il rectangle ? Est-il isocèle ?
2. On cherche un point $\\Omega(x ; y)$ situé à égale distance de $A$, $B$ et $C$.
 a) Montrer que $\\Omega A^2 = \\Omega B^2$ équivaut à $3x + y = 10$.
 b) Montrer que $\\Omega A^2 = \\Omega C^2$ équivaut à $x + 3y = 10$.
 c) En déduire les coordonnées de $\\Omega$.
3. Calculer le rayon $R$ du cercle $\\mathcal{C}$ circonscrit au triangle $ABC$ (valeur exacte).
4. Le point $D$ appartient-il au cercle $\\mathcal{C}$ ?`,
      solution: `**1.** $AB = \\sqrt{36 + 4} = \\sqrt{40}$, $AC = \\sqrt{4 + 36} = \\sqrt{40}$ et $BC = \\sqrt{(2 - 6)^2 + (6 - 2)^2} = \\sqrt{32}$.

$AB = AC$ : le triangle est isocèle en $A$. Le plus grand côté mesure $\\sqrt{40}$ et $AB^2 + BC^2 = 72 \\neq 40$ : le triangle n'est pas rectangle (contraposée du théorème de Pythagore).

**2. a)** $\\Omega A^2 = x^2 + y^2$ et $\\Omega B^2 = (x - 6)^2 + (y - 2)^2 = x^2 - 12x + 36 + y^2 - 4y + 4$.

$\\Omega A^2 = \\Omega B^2 \\iff 0 = -12x - 4y + 40 \\iff 12x + 4y = 40 \\iff 3x + y = 10$.

**b)** $\\Omega C^2 = (x - 2)^2 + (y - 6)^2 = x^2 - 4x + 4 + y^2 - 12y + 36$, donc $\\Omega A^2 = \\Omega C^2 \\iff 4x + 12y = 40 \\iff x + 3y = 10$.

**c)** On résout le système $3x + y = 10$ et $x + 3y = 10$. En soustrayant : $2x - 2y = 0$, donc $x = y$, puis $4x = 10$, soit $x = y = 2{,}5$. Donc $\\Omega(2{,}5 ; 2{,}5)$.

**3.** $R = \\Omega A = \\sqrt{2{,}5^2 + 2{,}5^2} = \\sqrt{12{,}5} = \\sqrt{\\frac{25}{2}} = \\frac{5}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2}$.

Vérification : $\\Omega B^2 = 3{,}5^2 + (-0{,}5)^2 = 12{,}25 + 0{,}25 = 12{,}5$ et $\\Omega C^2 = (-0{,}5)^2 + 3{,}5^2 = 12{,}5$.

**4.** $\\Omega D^2 = (-1 - 2{,}5)^2 + (3 - 2{,}5)^2 = 12{,}25 + 0{,}25 = 12{,}5 = R^2$, donc $\\Omega D = R$ : le point $D$ appartient au cercle $\\mathcal{C}$. Les quatre points $A$, $B$, $C$, $D$ sont sur un même cercle.`
    }
  ],
  "2G2": [
    {
      id: "2G2-ds-01",
      title: "Coordonnées de vecteurs",
      difficulty: 1,
      points: 4,
      statement: `Dans un repère orthonormé, on donne $A(2 ; -1)$, $B(5 ; 3)$ et $C(-1 ; 4)$.

1. Calculer les coordonnées des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$.
2. Calculer la norme $\\|\\overrightarrow{AB}\\|$.
3. Déterminer les coordonnées du point $D$ tel que $\\overrightarrow{CD} = \\overrightarrow{AB}$. Quelle est la nature du quadrilatère $ABDC$ ?
4. Calculer les coordonnées du vecteur $\\vec{u} = \\overrightarrow{AB} + 2\\overrightarrow{AC}$.`,
      solution: `**1.** $\\overrightarrow{AB}\\begin{pmatrix} 5 - 2 \\\\ 3 - (-1) \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix} -1 - 2 \\\\ 4 - (-1) \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 5 \\end{pmatrix}$.

**2.** Le repère étant orthonormé, $\\|\\overrightarrow{AB}\\| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.

**3.** $\\overrightarrow{CD}\\begin{pmatrix} x_D + 1 \\\\ y_D - 4 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix} \\iff x_D = 2$ et $y_D = 8$. Donc $D(2 ; 8)$.
$\\overrightarrow{AB} = \\overrightarrow{CD}$ signifie que $ABDC$ est un parallélogramme (éventuellement aplati ; ici $A$, $B$, $C$ ne sont pas alignés car $3 \\times 5 - 4 \\times (-3) = 27 \\neq 0$).

**4.** $\\vec{u}\\begin{pmatrix} 3 + 2 \\times (-3) \\\\ 4 + 2 \\times 5 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ 14 \\end{pmatrix}$.`
    },
    {
      id: "2G2-ds-02",
      title: "Relation de Chasles et colinéarité",
      difficulty: 1,
      points: 4,
      statement: `1. $A$, $B$, $C$ et $M$ sont quatre points du plan. Simplifier les sommes suivantes :
   a) $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA}$ ;
   b) $\\overrightarrow{MA} - \\overrightarrow{MB}$ ;
   c) $\\overrightarrow{AB} - \\overrightarrow{AC} + \\overrightarrow{BC}$.
2. On donne $\\vec{u}\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$, $\\vec{v}\\begin{pmatrix} -6 \\\\ 9 \\end{pmatrix}$ et $\\vec{w}\\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix}$.
   a) Calculer $\\det(\\vec{u}, \\vec{v})$. Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont-ils colinéaires ?
   b) Même question pour $\\vec{u}$ et $\\vec{w}$.`,
      solution: `**1. a)** $\\overrightarrow{AB} + \\overrightarrow{BC} + \\overrightarrow{CA} = \\overrightarrow{AC} + \\overrightarrow{CA} = \\overrightarrow{AA} = \\vec{0}$.

**b)** $\\overrightarrow{MA} - \\overrightarrow{MB} = \\overrightarrow{MA} + \\overrightarrow{BM} = \\overrightarrow{BM} + \\overrightarrow{MA} = \\overrightarrow{BA}$.

**c)** $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{CA} = \\overrightarrow{CA} + \\overrightarrow{AB} = \\overrightarrow{CB}$, puis $\\overrightarrow{CB} + \\overrightarrow{BC} = \\vec{0}$.

**2. a)** $\\det(\\vec{u}, \\vec{v}) = 2 \\times 9 - (-3) \\times (-6) = 18 - 18 = 0$ : $\\vec{u}$ et $\\vec{v}$ sont **colinéaires** (en effet $\\vec{v} = -3\\vec{u}$).

**b)** $\\det(\\vec{u}, \\vec{w}) = 2 \\times 5 - (-3) \\times 4 = 10 + 12 = 22 \\neq 0$ : $\\vec{u}$ et $\\vec{w}$ ne sont **pas colinéaires**.`
    },
    {
      id: "2G2-ds-03",
      title: "Points alignés",
      difficulty: 2,
      points: 5,
      statement: `Dans un repère, on donne $A(1 ; 2)$, $B(3 ; 5)$ et $C(7 ; 11)$.

1. Démontrer que les points $A$, $B$ et $C$ sont alignés.
2. Exprimer $\\overrightarrow{AC}$ en fonction de $\\overrightarrow{AB}$. Le point $B$ est-il entre $A$ et $C$ ?
3. Déterminer l'ordonnée $y$ du point $D(-2 ; y)$ pour que $D$ soit aligné avec $A$ et $B$.
4. Le point $E(101 ; 152)$ est-il sur la droite $(AB)$ ?`,
      solution: `**1.** $\\overrightarrow{AB}\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix} 6 \\\\ 9 \\end{pmatrix}$. $\\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = 2 \\times 9 - 3 \\times 6 = 0$ : les vecteurs sont colinéaires, donc $A$, $B$, $C$ sont alignés.

**2.** $\\overrightarrow{AC} = 3\\overrightarrow{AB}$. Comme $3 > 1$, les vecteurs ont le même sens et $AC = 3AB$ : $B$ est entre $A$ et $C$ (au tiers de $[AC]$ en partant de $A$).

**3.** $\\overrightarrow{AD}\\begin{pmatrix} -3 \\\\ y - 2 \\end{pmatrix}$. $A$, $B$, $D$ alignés $\\iff \\det(\\overrightarrow{AB}, \\overrightarrow{AD}) = 0 \\iff 2(y - 2) - 3 \\times (-3) = 0 \\iff 2y + 5 = 0 \\iff y = -\\frac{5}{2}$.

**4.** $\\overrightarrow{AE}\\begin{pmatrix} 100 \\\\ 150 \\end{pmatrix}$ et $\\det(\\overrightarrow{AB}, \\overrightarrow{AE}) = 2 \\times 150 - 3 \\times 100 = 0$ : oui, $E \\in (AB)$ (on a $\\overrightarrow{AE} = 50\\,\\overrightarrow{AB}$).`
    },
    {
      id: "2G2-ds-04",
      title: "Parallélogramme et règle du parallélogramme",
      difficulty: 2,
      points: 5,
      statement: `Dans un repère, on donne $A(-2 ; 1)$, $B(2 ; 3)$ et $C(3 ; 0)$.

1. Déterminer les coordonnées du point $D$ tel que $ABCD$ soit un parallélogramme.
2. On définit le point $E$ par $\\overrightarrow{AE} = \\overrightarrow{AB} + \\overrightarrow{AD}$. Calculer les coordonnées de $E$. Que constate-t-on ? Justifier ce résultat sans calcul.
3. Déterminer les coordonnées du centre $K$ du parallélogramme $ABCD$.
4. Déterminer les coordonnées du point $F$ image de $C$ par la translation de vecteur $\\overrightarrow{BA}$.`,
      solution: `**1.** $ABCD$ est un parallélogramme si et seulement si $\\overrightarrow{AB} = \\overrightarrow{DC}$. $\\overrightarrow{AB}\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$ et $\\overrightarrow{DC}\\begin{pmatrix} 3 - x_D \\\\ 0 - y_D \\end{pmatrix}$, d'où $x_D = -1$ et $y_D = -2$ : $D(-1 ; -2)$.

**2.** $\\overrightarrow{AD}\\begin{pmatrix} 1 \\\\ -3 \\end{pmatrix}$, donc $\\overrightarrow{AE}\\begin{pmatrix} 5 \\\\ -1 \\end{pmatrix}$ et $E(-2 + 5 ; 1 - 1) = E(3 ; 0)$ : $E = C$.
C'est la **règle du parallélogramme** : $\\overrightarrow{AB} + \\overrightarrow{AD} = \\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$ (car $\\overrightarrow{AD} = \\overrightarrow{BC}$ dans le parallélogramme), donc $E = C$.

**3.** $K$ est le milieu de $[AC]$ : $K\\left(\\frac{-2 + 3}{2} ; \\frac{1 + 0}{2}\\right) = K(0{,}5 ; 0{,}5)$.

**4.** $\\overrightarrow{CF} = \\overrightarrow{BA}\\begin{pmatrix} -4 \\\\ -2 \\end{pmatrix}$, donc $F(3 - 4 ; 0 - 2) = F(-1 ; -2)$. On retrouve $D$ : c'est cohérent, car $\\overrightarrow{CD} = \\overrightarrow{BA}$ dans le parallélogramme $ABCD$.`
    },
    {
      id: "2G2-ds-05",
      title: "Un point défini par une relation vectorielle",
      difficulty: 3,
      points: 6,
      statement: `$ABC$ est un triangle. On définit le point $M$ par $\\overrightarrow{AM} = 2\\overrightarrow{AB} - \\overrightarrow{AC}$.

1. En utilisant la relation de Chasles, montrer que $\\overrightarrow{BM} = \\overrightarrow{CB}$.
2. En déduire une construction simple du point $M$ et préciser la position de $B$ par rapport à $[CM]$.
3. **Vérification dans un repère.** On donne $A(1 ; 1)$, $B(5 ; 2)$ et $C(2 ; 6)$.
   a) Calculer les coordonnées de $M$ à l'aide de la définition.
   b) Vérifier que $B$ est le milieu de $[CM]$.
4. Soit $N$ le point tel que $\\overrightarrow{BN} = \\frac{1}{2}\\overrightarrow{BC}$. Montrer que $\\overrightarrow{MN} = \\frac{3}{2}\\overrightarrow{BC}$, et en déduire que $M$, $N$, $B$ et $C$ sont alignés.`,
      solution: `**1.** $\\overrightarrow{AM} = 2\\overrightarrow{AB} - \\overrightarrow{AC} \\iff \\overrightarrow{AM} - \\overrightarrow{AB} = \\overrightarrow{AB} - \\overrightarrow{AC}$.
Or $\\overrightarrow{AM} - \\overrightarrow{AB} = \\overrightarrow{BA} + \\overrightarrow{AM} = \\overrightarrow{BM}$ et $\\overrightarrow{AB} - \\overrightarrow{AC} = \\overrightarrow{CA} + \\overrightarrow{AB} = \\overrightarrow{CB}$. Donc $\\overrightarrow{BM} = \\overrightarrow{CB}$.

**2.** $\\overrightarrow{CB} = \\overrightarrow{BM}$ signifie que $B$ est le milieu de $[CM]$ : $M$ est le **symétrique de $C$ par rapport à $B$**.

**3. a)** $\\overrightarrow{AB}\\begin{pmatrix} 4 \\\\ 1 \\end{pmatrix}$, $\\overrightarrow{AC}\\begin{pmatrix} 1 \\\\ 5 \\end{pmatrix}$, donc $\\overrightarrow{AM}\\begin{pmatrix} 8 - 1 \\\\ 2 - 5 \\end{pmatrix} = \\begin{pmatrix} 7 \\\\ -3 \\end{pmatrix}$ et $M(8 ; -2)$.

**b)** Milieu de $[CM]$ : $\\left(\\frac{2 + 8}{2} ; \\frac{6 - 2}{2}\\right) = (5 ; 2)$, c'est bien $B$.

**4.** $\\overrightarrow{MN} = \\overrightarrow{MB} + \\overrightarrow{BN} = \\overrightarrow{BC} + \\frac{1}{2}\\overrightarrow{BC} = \\frac{3}{2}\\overrightarrow{BC}$ (car $\\overrightarrow{MB} = \\overrightarrow{BC}$ d'après la question 1).
$\\overrightarrow{MN}$ et $\\overrightarrow{BC}$ sont colinéaires, donc $(MN) \\parallel (BC)$ ; comme $N \\in (BC)$, les droites sont confondues : $M$, $N$, $B$, $C$ sont alignés.`
    },
    {
      id: "2G2-ds-06",
      title: "Droite des milieux et théorème de Varignon",
      difficulty: 3,
      points: 6,
      statement: `1. Soit $ABC$ un triangle, $I$ le milieu de $[AB]$ et $J$ le milieu de $[AC]$. Démontrer, à l'aide de la relation de Chasles, que $\\overrightarrow{IJ} = \\frac{1}{2}\\overrightarrow{BC}$. Quelle propriété de collège retrouve-t-on ?
2. Soit $ABCD$ un quadrilatère quelconque. On note $I$, $J$, $K$, $L$ les milieux respectifs de $[AB]$, $[BC]$, $[CD]$ et $[DA]$.
   a) Exprimer $\\overrightarrow{IJ}$ puis $\\overrightarrow{LK}$ en fonction de $\\overrightarrow{AC}$.
   b) En déduire la nature du quadrilatère $IJKL$.
3. Vérifier ce résultat avec $A(1 ; 5)$, $B(-3 ; 1)$, $C(5 ; -1)$ et $D(6 ; 4)$.`,
      solution: `**1.** $\\overrightarrow{IJ} = \\overrightarrow{IA} + \\overrightarrow{AJ} = \\frac{1}{2}\\overrightarrow{BA} + \\frac{1}{2}\\overrightarrow{AC} = \\frac{1}{2}\\left(\\overrightarrow{BA} + \\overrightarrow{AC}\\right) = \\frac{1}{2}\\overrightarrow{BC}$.
On retrouve le **théorème des milieux** : $(IJ) \\parallel (BC)$ et $IJ = \\frac{BC}{2}$.

**2. a)** Dans le triangle $ABC$, $I$ et $J$ sont les milieux de $[BA]$ et $[BC]$ : par le même raisonnement, $\\overrightarrow{IJ} = \\frac{1}{2}\\overrightarrow{AC}$.
Dans le triangle $DAC$, $L$ et $K$ sont les milieux de $[DA]$ et $[DC]$ : $\\overrightarrow{LK} = \\frac{1}{2}\\overrightarrow{AC}$.

**b)** $\\overrightarrow{IJ} = \\overrightarrow{LK}$ : $IJKL$ est un **parallélogramme** (théorème de Varignon).

**3.** $I(-1 ; 3)$, $J(1 ; 0)$, $K(5{,}5 ; 1{,}5)$, $L(3{,}5 ; 4{,}5)$.
$\\overrightarrow{IJ}\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$ et $\\overrightarrow{LK}\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$ : égaux. Et $\\frac{1}{2}\\overrightarrow{AC} = \\frac{1}{2}\\begin{pmatrix} 4 \\\\ -6 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$ : le résultat est vérifié.`
    },
    {
      id: "2G2-ds-07",
      title: "Navigation et courant marin",
      difficulty: 4,
      points: 7,
      statement: `Un bateau quitte le port $O$. On se place dans un repère orthonormé d'origine $O$, l'axe des abscisses étant orienté vers l'est, l'unité étant le kilomètre. Les vitesses sont représentées par des vecteurs (en km/h).

Le moteur donne au bateau, par rapport à l'eau, la vitesse $\\vec{u}\\begin{pmatrix} 4 \\\\ 3 \\end{pmatrix}$. Un courant marin a pour vitesse $\\vec{c}\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$. La vitesse réelle du bateau est $\\vec{v} = \\vec{u} + \\vec{c}$.

1. Calculer les coordonnées de $\\vec{v}$, puis la vitesse réelle du bateau (norme de $\\vec{v}$), arrondie à $0{,}01$ km/h.
2. Quelle est la vitesse du bateau par rapport à l'eau ?
3. Où se trouve le bateau au bout de $2$ heures ? À quelle distance du port ?
4. Le capitaine veut désormais aller **plein est**, en gardant une vitesse de $5$ km/h par rapport à l'eau. Il choisit donc $\\vec{u'}\\begin{pmatrix} a \\\\ b \\end{pmatrix}$ avec $a > 0$ et $\\|\\vec{u'}\\| = 5$.
   a) Justifier que $\\vec{u'} + \\vec{c}$ doit être colinéaire à $\\vec{\\imath}\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ et en déduire $b$.
   b) Calculer $a$ et la vitesse réelle obtenue, arrondie à $0{,}01$ km/h.`,
      solution: `**1.** $\\vec{v}\\begin{pmatrix} 4 + 1 \\\\ 3 - 2 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 1 \\end{pmatrix}$ et $\\|\\vec{v}\\| = \\sqrt{25 + 1} = \\sqrt{26} \\approx 5{,}10$ km/h.

**2.** $\\|\\vec{u}\\| = \\sqrt{16 + 9} = 5$ km/h.

**3.** En $2$ h, le déplacement est $2\\vec{v}\\begin{pmatrix} 10 \\\\ 2 \\end{pmatrix}$ : le bateau est au point $P(10 ; 2)$, à $OP = \\sqrt{104} = 2\\sqrt{26} \\approx 10{,}20$ km du port.

**4. a)** Aller plein est signifie que le déplacement réel est dirigé par $\\vec{\\imath}$ (avec une abscisse positive) : $\\vec{u'} + \\vec{c}\\begin{pmatrix} a + 1 \\\\ b - 2 \\end{pmatrix}$ doit être colinéaire à $\\vec{\\imath}$, donc $\\det = (a + 1) \\times 0 - (b - 2) \\times 1 = 0$, soit $b = 2$.

**b)** $\\|\\vec{u'}\\| = 5 \\iff a^2 + 4 = 25 \\iff a^2 = 21$, et $a > 0$ donc $a = \\sqrt{21} \\approx 4{,}58$.
La vitesse réelle est $\\vec{u'} + \\vec{c}\\begin{pmatrix} \\sqrt{21} + 1 \\\\ 0 \\end{pmatrix}$, de norme $\\sqrt{21} + 1 \\approx 5{,}58$ km/h.`
    },
    {
      id: "2G2-ds-08",
      title: "Colinéarité avec un paramètre",
      difficulty: 4,
      points: 6,
      statement: `Dans tout l'exercice, $m$ désigne un nombre réel.

1. On considère $\\vec{u}\\begin{pmatrix} m \\\\ 2 \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} 8 \\\\ m \\end{pmatrix}$. Déterminer les valeurs de $m$ pour lesquelles $\\vec{u}$ et $\\vec{v}$ sont colinéaires.
2. Dans un repère, on considère $A(1 ; 2)$, $B(m ; 4)$ et $C(7 ; m)$.
   a) Montrer que $A$, $B$, $C$ sont alignés si et seulement si $m^2 - 3m - 10 = 0$.
   b) Vérifier que $m^2 - 3m - 10 = (m - 5)(m + 2)$ et conclure.
3. Pour chacune des valeurs trouvées à la question 2, donner les coordonnées de $B$ et $C$, puis exprimer $\\overrightarrow{AC}$ en fonction de $\\overrightarrow{AB}$. Dans quel cas $B$ est-il situé entre $A$ et $C$ ?`,
      solution: `**1.** $\\det(\\vec{u}, \\vec{v}) = m \\times m - 2 \\times 8 = m^2 - 16 = (m - 4)(m + 4)$. Les vecteurs sont colinéaires si et seulement si $m = 4$ ou $m = -4$.

**2. a)** $\\overrightarrow{AB}\\begin{pmatrix} m - 1 \\\\ 2 \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix} 6 \\\\ m - 2 \\end{pmatrix}$.
$A$, $B$, $C$ alignés $\\iff \\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = 0 \\iff (m - 1)(m - 2) - 12 = 0 \\iff m^2 - 3m + 2 - 12 = 0 \\iff m^2 - 3m - 10 = 0$.

**b)** $(m - 5)(m + 2) = m^2 + 2m - 5m - 10 = m^2 - 3m - 10$. Les points sont alignés si et seulement si $m = 5$ ou $m = -2$.

**3.**
- $m = 5$ : $B(5 ; 4)$, $C(7 ; 5)$, $\\overrightarrow{AB}\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$, $\\overrightarrow{AC}\\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}$, donc $\\overrightarrow{AC} = \\frac{3}{2}\\overrightarrow{AB}$. Le coefficient est supérieur à $1$ : $B$ est entre $A$ et $C$.
- $m = -2$ : $B(-2 ; 4)$, $C(7 ; -2)$, $\\overrightarrow{AB}\\begin{pmatrix} -3 \\\\ 2 \\end{pmatrix}$, $\\overrightarrow{AC}\\begin{pmatrix} 6 \\\\ -4 \\end{pmatrix}$, donc $\\overrightarrow{AC} = -2\\overrightarrow{AB}$. Le coefficient est négatif : $A$ est entre $B$ et $C$, et $B$ n'est pas entre $A$ et $C$.`
    },
    {
      id: "2G2-ds-09",
      title: "Translation et combinaison de vecteurs",
      difficulty: 1,
      points: 4,
      statement: `Dans un repère orthonormé, on donne $A(1 ; -2)$, $B(4 ; 2)$ et $C(-3 ; 0)$.

1. Calculer les coordonnées du vecteur $\\overrightarrow{AB}$ et sa norme.
2. Déterminer les coordonnées du point $C'$, image de $C$ par la translation de vecteur $\\overrightarrow{AB}$.
3. Quelle est la nature du quadrilatère $ABC'C$ ? Justifier.
4. Calculer les coordonnées du vecteur $\\vec{w} = 2\\overrightarrow{AB} - \\overrightarrow{AC}$.`,
      solution: `**1.** $\\overrightarrow{AB}\\begin{pmatrix} 4 - 1 \\\\ 2 - (-2) \\end{pmatrix}$, soit $\\overrightarrow{AB}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$, et $\\|\\overrightarrow{AB}\\| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.

**2.** $C'$ est l'image de $C$ par la translation de vecteur $\\overrightarrow{AB}$ si et seulement si $\\overrightarrow{CC'} = \\overrightarrow{AB}$, c'est-à-dire $x_{C'} - (-3) = 3$ et $y_{C'} - 0 = 4$. Donc $C'(0 ; 4)$.

**3.** $\\overrightarrow{AB} = \\overrightarrow{CC'}$ : par définition, le quadrilatère $ABC'C$ est un parallélogramme (éventuellement aplati). Il n'est pas aplati car $A$, $B$, $C$ ne sont pas alignés : $\\overrightarrow{AC}\\begin{pmatrix} -4 \\\\ 2 \\end{pmatrix}$ et $\\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = 3 \\times 2 - 4 \\times (-4) = 22 \\neq 0$.

**4.** $2\\overrightarrow{AB}\\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix} -4 \\\\ 2 \\end{pmatrix}$, donc $\\vec{w}\\begin{pmatrix} 6 - (-4) \\\\ 8 - 2 \\end{pmatrix}$, soit $\\vec{w}\\begin{pmatrix} 10 \\\\ 6 \\end{pmatrix}$.`
    },
    {
      id: "2G2-ds-10",
      title: "Trapèze ou parallélogramme ?",
      difficulty: 2,
      points: 5,
      statement: `Dans un repère, on considère les points $A(-2 ; -1)$, $B(2 ; 1)$, $C(3 ; 4)$ et $D(-3 ; 1)$.

1. Calculer les coordonnées des vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{DC}$, puis démontrer que les droites $(AB)$ et $(DC)$ sont parallèles.
2. Les droites $(AD)$ et $(BC)$ sont-elles parallèles ? En déduire la nature du quadrilatère $ABCD$.
3. Exprimer $\\overrightarrow{DC}$ en fonction de $\\overrightarrow{AB}$.
4. Déterminer l'abscisse du point $E$ de l'axe des abscisses tel que $A$, $C$ et $E$ soient alignés.`,
      solution: `**1.** $\\overrightarrow{AB}\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$ et $\\overrightarrow{DC}\\begin{pmatrix} 3 - (-3) \\\\ 4 - 1 \\end{pmatrix}$, soit $\\overrightarrow{DC}\\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}$.

$\\det(\\overrightarrow{AB}, \\overrightarrow{DC}) = 4 \\times 3 - 2 \\times 6 = 12 - 12 = 0$ : les vecteurs sont colinéaires, donc $(AB)$ et $(DC)$ sont parallèles (elles sont distinctes car $D \\notin (AB)$ : $\\det(\\overrightarrow{AB}, \\overrightarrow{AD}) \\neq 0$, voir ci-dessous).

**2.** $\\overrightarrow{AD}\\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$ et $\\overrightarrow{BC}\\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$ : $\\det(\\overrightarrow{AD}, \\overrightarrow{BC}) = (-1) \\times 3 - 2 \\times 1 = -5 \\neq 0$. Les droites $(AD)$ et $(BC)$ ne sont pas parallèles.

$ABCD$ a deux côtés opposés parallèles et les deux autres non parallèles : c'est un **trapèze** (et non un parallélogramme).

(Par ailleurs $\\det(\\overrightarrow{AB}, \\overrightarrow{AD}) = 4 \\times 2 - 2 \\times (-1) = 10 \\neq 0$.)

**3.** $\\overrightarrow{DC}\\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix} = \\frac{3}{2}\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}$, donc $\\overrightarrow{DC} = \\frac{3}{2}\\overrightarrow{AB}$ : la grande base $[DC]$ est une fois et demie plus longue que $[AB]$.

**4.** On note $E(x ; 0)$. $\\overrightarrow{AC}\\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}$ et $\\overrightarrow{AE}\\begin{pmatrix} x + 2 \\\\ 1 \\end{pmatrix}$.

$A$, $C$, $E$ alignés $\\iff \\det(\\overrightarrow{AC}, \\overrightarrow{AE}) = 0 \\iff 5 \\times 1 - 5(x + 2) = 0 \\iff 5x = -5 \\iff x = -1$.

Donc $E(-1 ; 0)$.`
    },
    {
      id: "2G2-ds-11",
      title: "Diagonale et médiane dans un parallélogramme",
      difficulty: 3,
      points: 6,
      statement: `$ABCD$ est un parallélogramme et $I$ est le milieu du segment $[DC]$. On définit le point $E$ par $\\overrightarrow{AE} = \\frac{2}{3}\\overrightarrow{AI}$.

1. À l'aide de la relation de Chasles, montrer que $\\overrightarrow{AI} = \\overrightarrow{AD} + \\frac{1}{2}\\overrightarrow{AB}$.
2. En déduire $\\overrightarrow{AE}$ en fonction de $\\overrightarrow{AB}$ et $\\overrightarrow{AD}$.
3. Exprimer $\\overrightarrow{BE}$ puis $\\overrightarrow{BD}$ en fonction de $\\overrightarrow{AB}$ et $\\overrightarrow{AD}$.
4. En déduire que les points $B$, $E$ et $D$ sont alignés. Que représente le point $E$ pour les droites $(AI)$ et $(BD)$ ?`,
      solution: `**1.** $\\overrightarrow{AI} = \\overrightarrow{AD} + \\overrightarrow{DI}$ (Chasles). Comme $I$ est le milieu de $[DC]$, $\\overrightarrow{DI} = \\frac{1}{2}\\overrightarrow{DC}$, et comme $ABCD$ est un parallélogramme, $\\overrightarrow{DC} = \\overrightarrow{AB}$. Donc $\\overrightarrow{AI} = \\overrightarrow{AD} + \\frac{1}{2}\\overrightarrow{AB}$.

**2.** $\\overrightarrow{AE} = \\frac{2}{3}\\left(\\overrightarrow{AD} + \\frac{1}{2}\\overrightarrow{AB}\\right) = \\frac{1}{3}\\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AD}$.

**3.** $\\overrightarrow{BE} = \\overrightarrow{BA} + \\overrightarrow{AE} = -\\overrightarrow{AB} + \\frac{1}{3}\\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AD} = -\\frac{2}{3}\\overrightarrow{AB} + \\frac{2}{3}\\overrightarrow{AD}$.

$\\overrightarrow{BD} = \\overrightarrow{BA} + \\overrightarrow{AD} = -\\overrightarrow{AB} + \\overrightarrow{AD}$.

**4.** On constate que $\\overrightarrow{BE} = \\frac{2}{3}\\left(-\\overrightarrow{AB} + \\overrightarrow{AD}\\right) = \\frac{2}{3}\\overrightarrow{BD}$.

Les vecteurs $\\overrightarrow{BE}$ et $\\overrightarrow{BD}$ sont colinéaires et ont le point $B$ en commun : $B$, $E$ et $D$ sont alignés.

Le point $E$ appartient à la droite $(AI)$ (car $\\overrightarrow{AE}$ est colinéaire à $\\overrightarrow{AI}$) et à la droite $(BD)$ : c'est le **point d'intersection** de $(AI)$ et $(BD)$. Il est situé aux deux tiers de $[AI]$ en partant de $A$ et aux deux tiers de $[BD]$ en partant de $B$.`
    },
    {
      id: "2G2-ds-12",
      title: "Remorquage d'un navire",
      difficulty: 4,
      points: 7,
      statement: `Deux remorqueurs tirent un navire. Dans un repère orthonormé, les forces qu'ils exercent sont représentées par les vecteurs $\\vec{u}\\begin{pmatrix} 6 \\\\ 8 \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} 8 \\\\ -6 \\end{pmatrix}$ (unité : $10$ kN). La force résultante est $\\vec{r} = \\vec{u} + \\vec{v}$.

1. Calculer $\\|\\vec{u}\\|$ et $\\|\\vec{v}\\|$.
2. Calculer les coordonnées de $\\vec{r}$ et sa norme (valeur exacte).
3. On place les points $O(0 ; 0)$, $P$ tel que $\\overrightarrow{OP} = \\vec{u}$ et $Q$ tel que $\\overrightarrow{PQ} = \\vec{v}$.
 a) Justifier que $\\overrightarrow{OQ} = \\vec{r}$.
 b) Démontrer que le triangle $OPQ$ est rectangle en $P$. Que peut-on dire des directions des deux forces ?
4. Un courant marin exerce sur le navire une force $\\vec{c}$. Le navire reste immobile lorsque $\\vec{u} + \\vec{v} + \\vec{c} = \\vec{0}$. Déterminer les coordonnées de $\\vec{c}$ dans ce cas.
5. Le second remorqueur modifie l'intensité de sa traction : sa force devient $k\\vec{v}$, avec $k$ réel strictement positif. Pour quelle valeur de $k$ la résultante $\\vec{u} + k\\vec{v}$ est-elle colinéaire au vecteur $\\vec{i}\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ (le navire est alors tiré plein est) ? Donner alors les coordonnées de la résultante.`,
      solution: `**1.** $\\|\\vec{u}\\| = \\sqrt{36 + 64} = 10$ et $\\|\\vec{v}\\| = \\sqrt{64 + 36} = 10$.

**2.** $\\vec{r}\\begin{pmatrix} 6 + 8 \\\\ 8 - 6 \\end{pmatrix}$, soit $\\vec{r}\\begin{pmatrix} 14 \\\\ 2 \\end{pmatrix}$, et $\\|\\vec{r}\\| = \\sqrt{196 + 4} = \\sqrt{200} = 10\\sqrt{2}$.

**3. a)** D'après la relation de Chasles, $\\overrightarrow{OQ} = \\overrightarrow{OP} + \\overrightarrow{PQ} = \\vec{u} + \\vec{v} = \\vec{r}$.

**b)** $OP = 10$, $PQ = 10$ et $OQ = 10\\sqrt{2}$, donc $OP^2 + PQ^2 = 100 + 100 = 200 = OQ^2$. D'après la réciproque du théorème de Pythagore, le triangle $OPQ$ est rectangle en $P$.

Les directions des forces $\\vec{u}$ et $\\vec{v}$ sont donc **perpendiculaires**.

**4.** $\\vec{c} = -(\\vec{u} + \\vec{v}) = -\\vec{r}$, donc $\\vec{c}\\begin{pmatrix} -14 \\\\ -2 \\end{pmatrix}$.

**5.** $\\vec{u} + k\\vec{v}\\begin{pmatrix} 6 + 8k \\\\ 8 - 6k \\end{pmatrix}$. Ce vecteur est colinéaire à $\\vec{i}\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ si et seulement si $\\det = (6 + 8k) \\times 0 - (8 - 6k) \\times 1 = 0$, c'est-à-dire $8 - 6k = 0$, soit $k = \\frac{4}{3}$.

La résultante vaut alors $\\begin{pmatrix} 6 + \\frac{32}{3} \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} \\frac{50}{3} \\\\ 0 \\end{pmatrix}$ : le navire est bien tiré vers l'est, avec une force d'intensité $\\frac{50}{3} \\times 10 \\approx 167$ kN.`
    }
  ],
  "2G3": [
    {
      id: "2G3-ds-01",
      title: "Équation réduite d'une droite",
      difficulty: 1,
      points: 4,
      statement: `Dans un repère, on donne $A(1 ; 3)$, $B(4 ; 9)$, $C(-2 ; -3)$, $D(5 ; 1)$ et $E(5 ; -2)$.

1. Calculer le coefficient directeur de la droite $(AB)$.
2. Déterminer l'équation réduite de la droite $(AB)$.
3. Le point $C$ appartient-il à la droite $(AB)$ ?
4. Déterminer une équation de la droite $(DE)$. Pourquoi n'a-t-elle pas d'équation de la forme $y = mx + p$ ?`,
      solution: `**1.** $x_A \\neq x_B$, donc $m = \\frac{y_B - y_A}{x_B - x_A} = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$.

**2.** L'équation réduite est de la forme $y = 2x + p$. $A$ appartient à la droite : $3 = 2 \\times 1 + p$, donc $p = 1$. $(AB) : y = 2x + 1$.

**3.** $2 \\times (-2) + 1 = -3 = y_C$ : $C \\in (AB)$.

**4.** $D$ et $E$ ont la même abscisse $5$ : la droite $(DE)$ est parallèle à l'axe des ordonnées et a pour équation $x = 5$. Une telle droite (« verticale ») n'est pas la courbe d'une fonction : elle n'a pas de coefficient directeur, donc pas d'équation réduite de la forme $y = mx + p$.`
    },
    {
      id: "2G3-ds-02",
      title: "Coefficient directeur, ordonnée à l'origine, parallélisme",
      difficulty: 1,
      points: 4,
      statement: `On considère les droites $d_1 : y = -3x + 4$, $\\;d_2 : 2x + 5y - 10 = 0\\;$ et $\\;d_3 : y = -0{,}4x + 7$.

1. Donner le coefficient directeur et l'ordonnée à l'origine de $d_1$, puis un vecteur directeur de $d_1$.
2. Déterminer l'équation réduite de $d_2$.
3. Les droites $d_2$ et $d_3$ sont-elles parallèles ? Sont-elles confondues ?
4. Donner les coordonnées des points d'intersection de $d_2$ avec chacun des axes du repère.`,
      solution: `**1.** $m_1 = -3$ et $p_1 = 4$. Un vecteur directeur est $\\vec{u}_1\\begin{pmatrix} 1 \\\\ -3 \\end{pmatrix}$ (de la forme $\\begin{pmatrix} 1 \\\\ m \\end{pmatrix}$).

**2.** $2x + 5y - 10 = 0 \\iff 5y = -2x + 10 \\iff y = -0{,}4x + 2$.

**3.** $d_2$ et $d_3$ ont le même coefficient directeur $-0{,}4$ : elles sont parallèles. Leurs ordonnées à l'origine diffèrent ($2 \\neq 7$) : elles ne sont pas confondues (elles sont strictement parallèles).

**4.** Avec l'axe des ordonnées ($x = 0$) : $y = 2$, point $(0 ; 2)$.
Avec l'axe des abscisses ($y = 0$) : $2x - 10 = 0$, $x = 5$, point $(5 ; 0)$.`
    },
    {
      id: "2G3-ds-03",
      title: "Équations cartésiennes",
      difficulty: 2,
      points: 5,
      statement: `Dans un repère, on considère le point $A(2 ; -1)$, le vecteur $\\vec{u}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ et la droite $d : x + 2y - 3 = 0$.

1. Déterminer une équation cartésienne de la droite $\\Delta$ passant par $A$ et de vecteur directeur $\\vec{u}$.
2. Donner un vecteur directeur de $d$.
3. Déterminer une équation cartésienne de la droite $\\Delta'$ parallèle à $d$ passant par $A$.
4. Le point $B(-4 ; 2)$ appartient-il à $\\Delta'$ ? Que peut-on en déduire pour les points $O$, $A$ et $B$ ?`,
      solution: `**1.** $M(x ; y) \\in \\Delta \\iff \\overrightarrow{AM}\\begin{pmatrix} x - 2 \\\\ y + 1 \\end{pmatrix}$ et $\\vec{u}$ sont colinéaires $\\iff 4(x - 2) - 3(y + 1) = 0 \\iff 4x - 3y - 11 = 0$.

**2.** Pour la droite $ax + by + c = 0$, le vecteur $\\begin{pmatrix} -b \\\\ a \\end{pmatrix}$ est directeur : ici $\\vec{v}\\begin{pmatrix} -2 \\\\ 1 \\end{pmatrix}$.

**3.** $\\Delta'$ est parallèle à $d$ : elle a une équation de la forme $x + 2y + c = 0$. Elle passe par $A$ : $2 + 2 \\times (-1) + c = 0$, donc $c = 0$. $\\Delta' : x + 2y = 0$.

**4.** $-4 + 2 \\times 2 = 0$ : $B \\in \\Delta'$. Comme $c = 0$, l'origine $O$ vérifie aussi l'équation : $O$, $A$ et $B$ sont tous trois sur $\\Delta'$, donc **alignés**.`
    },
    {
      id: "2G3-ds-04",
      title: "Intersections de droites",
      difficulty: 2,
      points: 5,
      statement: `1. On considère $d_1 : y = 2x - 3$ et $d_2 : y = -x + 6$.
   a) Justifier que $d_1$ et $d_2$ sont sécantes.
   b) Déterminer les coordonnées de leur point d'intersection.
2. On considère $d_3 : 3x - 2y + 1 = 0$ et $d_4 : x + 4y - 9 = 0$.
   a) Justifier que $d_3$ et $d_4$ sont sécantes.
   b) Résoudre le système formé par leurs équations et en déduire leur point d'intersection.
3. Les droites $d_5 : y = 3x + 1$ et $d_6 : -6x + 2y - 2 = 0$ sont-elles sécantes ?`,
      solution: `**1. a)** Les coefficients directeurs $2$ et $-1$ sont différents : les droites sont sécantes.

**b)** $2x - 3 = -x + 6 \\iff 3x = 9 \\iff x = 3$, puis $y = 2 \\times 3 - 3 = 3$. Point d'intersection : $(3 ; 3)$.

**2. a)** Vecteurs directeurs : $\\vec{u}_3\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ et $\\vec{u}_4\\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}$. $\\det(\\vec{u}_3, \\vec{u}_4) = 2 \\times 1 - 3 \\times (-4) = 14 \\neq 0$ : ils ne sont pas colinéaires, les droites sont sécantes.

**b)** De la seconde équation : $x = 9 - 4y$. En remplaçant dans la première : $3(9 - 4y) - 2y + 1 = 0 \\iff 28 - 14y = 0 \\iff y = 2$, puis $x = 9 - 8 = 1$.
Point d'intersection : $(1 ; 2)$. *Vérification :* $3 - 4 + 1 = 0$ et $1 + 8 - 9 = 0$.

**3.** $d_6 : 2y = 6x + 2 \\iff y = 3x + 1$ : c'est la même équation réduite que $d_5$. Les droites sont **confondues** (elles ne sont donc pas sécantes au sens strict : elles ont une infinité de points communs).`
    },
    {
      id: "2G3-ds-05",
      title: "Droites remarquables d'un triangle",
      difficulty: 3,
      points: 6,
      statement: `Dans un repère, on considère $A(-1 ; 1)$, $B(3 ; 3)$ et $C(5 ; -3)$.

1. Déterminer les coordonnées du milieu $I$ de $[BC]$, puis l'équation réduite de la médiane $(AI)$.
2. Déterminer l'équation réduite de la droite $\\Delta$ parallèle à $(AB)$ passant par $C$.
3. Calculer les coordonnées du point $P$, intersection de $(AI)$ et de $\\Delta$.
4. Vérifier que $ABPC$ est un parallélogramme. *(On pourra comparer les milieux des diagonales.)*`,
      solution: `**1.** $I\\left(\\frac{3 + 5}{2} ; \\frac{3 - 3}{2}\\right) = I(4 ; 0)$. Coefficient directeur de $(AI)$ : $\\frac{0 - 1}{4 - (-1)} = -\\frac{1}{5}$. Donc $y = -\\frac{1}{5}x + p$ avec $0 = -\\frac{4}{5} + p$, soit $p = \\frac{4}{5}$. $(AI) : y = -\\frac{1}{5}x + \\frac{4}{5}$.

**2.** Coefficient directeur de $(AB)$ : $\\frac{3 - 1}{3 + 1} = \\frac{1}{2}$. $\\Delta : y = \\frac{1}{2}x + p$ avec $-3 = \\frac{5}{2} + p$, donc $p = -\\frac{11}{2}$. $\\Delta : y = \\frac{1}{2}x - \\frac{11}{2}$.

**3.** $-\\frac{1}{5}x + \\frac{4}{5} = \\frac{1}{2}x - \\frac{11}{2}$. En multipliant par $10$ : $-2x + 8 = 5x - 55 \\iff 7x = 63 \\iff x = 9$, puis $y = -\\frac{9}{5} + \\frac{4}{5} = -1$. Donc $P(9 ; -1)$.

**4.** Milieu de $[AP]$ : $\\left(\\frac{-1 + 9}{2} ; \\frac{1 - 1}{2}\\right) = (4 ; 0) = I$, et $I$ est le milieu de $[BC]$. Les diagonales $[AP]$ et $[BC]$ de $ABPC$ ont le même milieu : c'est un parallélogramme.
*(On le savait : dans un parallélogramme $ABPC$, $(CP) \\parallel (AB)$ et la diagonale $[AP]$ passe par le milieu de $[BC]$.)*`
    },
    {
      id: "2G3-ds-06",
      title: "Droites concourantes",
      difficulty: 3,
      points: 5,
      statement: `On considère les droites $d_1 : y = 2x - 1$, $\\;d_2 : y = -x + 5\\;$ et $\\;d_3 : x - 3y + 7 = 0$.

1. Déterminer les coordonnées du point d'intersection $K$ de $d_1$ et $d_2$.
2. Démontrer que les trois droites sont concourantes.
3. Pour tout réel $m$, on note $\\Delta_m$ la droite d'équation $y = mx + 1$.
   a) Quelle est la valeur de $m$ pour laquelle $\\Delta_m$ passe par $K$ ?
   b) Existe-t-il une valeur de $m$ pour laquelle $\\Delta_m$ est parallèle à $d_3$ ? Si oui, la donner.
   c) Montrer que toutes les droites $\\Delta_m$ passent par un même point que l'on précisera.`,
      solution: `**1.** $2x - 1 = -x + 5 \\iff 3x = 6 \\iff x = 2$ et $y = 3$. $K(2 ; 3)$.

**2.** $x_K - 3y_K + 7 = 2 - 9 + 7 = 0$ : $K \\in d_3$. Les trois droites passent par $K$ : elles sont concourantes.

**3. a)** $3 = 2m + 1 \\iff m = 1$.

**b)** $d_3 : 3y = x + 7 \\iff y = \\frac{1}{3}x + \\frac{7}{3}$, de coefficient directeur $\\frac{1}{3}$. Pour $m = \\frac{1}{3}$, $\\Delta_m$ est parallèle à $d_3$ (et distincte, car $1 \\neq \\frac{7}{3}$).

**c)** Pour $x = 0$, $y = m \\times 0 + 1 = 1$ quel que soit $m$ : toutes les droites $\\Delta_m$ passent par le point $(0 ; 1)$.`
    },
    {
      id: "2G3-ds-07",
      title: "Choisir la formule la moins chère",
      difficulty: 4,
      points: 7,
      statement: `Une salle d'escalade propose trois formules annuelles, où $x$ désigne le nombre de séances dans l'année :
- **formule A** : abonnement de $20$ € puis $0{,}50$ € par séance ;
- **formule B** : abonnement de $35$ € puis $0{,}20$ € par séance ;
- **formule C** : pas d'abonnement, $0{,}80$ € par séance.

On note $a(x)$, $b(x)$, $c(x)$ les prix annuels correspondants.

1. Exprimer $a(x)$, $b(x)$ et $c(x)$ en fonction de $x$. Dans un repère, que représentent les courbes de ces fonctions ?
2. Déterminer les coordonnées des points d'intersection des droites deux à deux (arrondir à $0{,}01$ si nécessaire).
3. Pour $x = 40$ puis $x = 70$, quelle formule est la plus avantageuse ?
4. Déterminer, selon le nombre de séances, la formule la plus avantageuse. Que remarque-t-on pour la formule A ?`,
      solution: `**1.** $a(x) = 0{,}5x + 20$, $\\;b(x) = 0{,}2x + 35$, $\\;c(x) = 0{,}8x$. Ce sont des fonctions affines : leurs courbes sont des droites (en pratique, seuls les points d'abscisse entière positive ont un sens).

**2.**
- $A \\cap B$ : $0{,}5x + 20 = 0{,}2x + 35 \\iff 0{,}3x = 15 \\iff x = 50$, prix $45$ € : point $(50 ; 45)$.
- $A \\cap C$ : $0{,}5x + 20 = 0{,}8x \\iff 0{,}3x = 20 \\iff x = \\frac{200}{3} \\approx 66{,}67$, prix $\\approx 53{,}33$ €.
- $B \\cap C$ : $0{,}2x + 35 = 0{,}8x \\iff 0{,}6x = 35 \\iff x = \\frac{175}{3} \\approx 58{,}33$, prix $\\approx 46{,}67$ €.

**3.** $x = 40$ : $a = 40$, $b = 43$, $c = 32$ : la formule C est la moins chère.
$x = 70$ : $a = 55$, $b = 49$, $c = 56$ : la formule B est la moins chère.

**4.**
- $c(x) < b(x) \\iff 0{,}6x < 35 \\iff x < 58{,}33$, et $c(x) < a(x) \\iff x < 66{,}67$. Donc pour $x \\leqslant 58$, **C** est la moins chère.
- Pour $x \\geqslant 59$ : $b(x) < c(x)$, et $b(x) < a(x) \\iff 0{,}3x > 15 \\iff x > 50$, vrai. Donc **B** est la moins chère.

*Contrôle :* $c(58) = 46{,}40 < b(58) = 46{,}60$ et $b(59) = 46{,}80 < c(59) = 47{,}20$.
La formule A n'est **jamais** la plus avantageuse : lorsqu'elle bat C ($x > 66{,}67$), elle est déjà battue par B ($x > 50$).`
    },
    {
      id: "2G3-ds-08",
      title: "Une famille de droites",
      difficulty: 4,
      points: 6,
      statement: `Pour tout réel $m$, on note $d_m$ la droite d'équation cartésienne $(m - 1)x + (2m + 1)y - 3 = 0$.

1. Justifier que, pour tout réel $m$, cette équation définit bien une droite.
2. Déterminer $d_0$ et $d_1$ et construire ces deux droites.
3. Déterminer la valeur de $m$ pour laquelle $d_m$ est parallèle à l'axe des ordonnées, et donner son équation.
4. Déterminer la valeur de $m$ pour laquelle $d_m$ passe par le point $A(1 ; 2)$.
5. a) Montrer que l'équation de $d_m$ s'écrit $m(x + 2y) + (-x + y - 3) = 0$.
   b) En déduire que toutes les droites $d_m$ passent par un même point $\\Omega$ dont on donnera les coordonnées.
6. Existe-t-il une droite $d_m$ passant par l'origine du repère ?`,
      solution: `**1.** Une équation $ax + by + c = 0$ définit une droite dès que $(a ; b) \\neq (0 ; 0)$. Ici $m - 1 = 0$ et $2m + 1 = 0$ donneraient $m = 1$ et $m = -\\frac{1}{2}$ simultanément, ce qui est impossible.

**2.** $d_0 : -x + y - 3 = 0$, soit $y = x + 3$. $\\quad d_1 : 3y - 3 = 0$, soit $y = 1$ (droite parallèle à l'axe des abscisses).

**3.** $d_m$ est parallèle à l'axe des ordonnées lorsque le coefficient de $y$ est nul : $2m + 1 = 0 \\iff m = -\\frac{1}{2}$. Alors $-\\frac{3}{2}x - 3 = 0$, soit $x = -2$.

**4.** $(m - 1) \\times 1 + (2m + 1) \\times 2 - 3 = 0 \\iff 5m - 2 = 0 \\iff m = \\frac{2}{5}$.

**5. a)** $(m - 1)x + (2m + 1)y - 3 = mx - x + 2my + y - 3 = m(x + 2y) + (-x + y - 3)$.

**b)** Si $x + 2y = 0$ et $-x + y - 3 = 0$, l'équation est vérifiée pour tout $m$. En additionnant : $3y - 3 = 0$, donc $y = 1$, puis $x = -2$. Le point $\\Omega(-2 ; 1)$ appartient à toutes les droites $d_m$. *(On retrouve que $d_1 : y = 1$ et $d_{-1/2} : x = -2$ passent par $\\Omega$.)*

**6.** Pour $O(0 ; 0)$ : $(m - 1) \\times 0 + (2m + 1) \\times 0 - 3 = -3 \\neq 0$ quel que soit $m$. Aucune droite $d_m$ ne passe par l'origine.`
    },
    {
      id: "2G3-ds-09",
      title: "Une droite, ses équations et ses points",
      difficulty: 1,
      points: 4,
      statement: `Dans un repère, on considère les points $A(-2 ; 5)$ et $B(4 ; 2)$.

1. Calculer le coefficient directeur de la droite $(AB)$, puis déterminer son équation réduite.
2. En déduire une équation cartésienne de $(AB)$ à coefficients entiers.
3. Le point $C(10 ; -1)$ appartient-il à la droite $(AB)$ ?
4. Déterminer les coordonnées des points d'intersection de $(AB)$ avec les deux axes du repère.
5. Donner une équation de la droite parallèle à l'axe des ordonnées passant par $A$.`,
      solution: `**1.** $m = \\frac{y_B - y_A}{x_B - x_A} = \\frac{2 - 5}{4 - (-2)} = \\frac{-3}{6} = -\\frac{1}{2}$.

L'équation réduite est de la forme $y = -\\frac{1}{2}x + p$. Comme $A \\in (AB)$ : $5 = -\\frac{1}{2} \\times (-2) + p = 1 + p$, donc $p = 4$. $(AB) : y = -\\frac{1}{2}x + 4$.

(Vérification avec $B$ : $-\\frac{1}{2} \\times 4 + 4 = 2$.)

**2.** $y = -\\frac{1}{2}x + 4 \\iff 2y = -x + 8 \\iff x + 2y - 8 = 0$.

**3.** $10 + 2 \\times (-1) - 8 = 0$ : les coordonnées de $C$ vérifient l'équation, donc $C \\in (AB)$.

**4.** Avec l'axe des ordonnées ($x = 0$) : $y = 4$, point $(0 ; 4)$.

Avec l'axe des abscisses ($y = 0$) : $x - 8 = 0$, soit $x = 8$, point $(8 ; 0)$.

**5.** Les points de cette droite ont tous la même abscisse que $A$ : son équation est $x = -2$ (ou $x + 2 = 0$). Elle n'a pas d'équation réduite de la forme $y = mx + p$.`
    },
    {
      id: "2G3-ds-10",
      title: "Parallèle à une droite et point d'intersection",
      difficulty: 2,
      points: 5,
      statement: `Dans un repère, on considère la droite $d$ d'équation $3x - 2y + 4 = 0$, le point $P(2 ; -1)$ et la droite $\\Delta$ d'équation $y = -2x + 10$.

1. Donner un vecteur directeur de $d$ et son coefficient directeur. Le point $P$ appartient-il à $d$ ?
2. Déterminer une équation cartésienne de la droite $d'$ parallèle à $d$ passant par $P$, puis son équation réduite.
3. Justifier que $d'$ et $\\Delta$ sont sécantes, puis calculer les coordonnées de leur point d'intersection $K$.
4. Calculer les coordonnées du point d'intersection $L$ de $d$ et $\\Delta$.`,
      solution: `**1.** Pour une équation $ax + by + c = 0$, un vecteur directeur est $\\vec{u}\\begin{pmatrix} -b \\\\ a \\end{pmatrix}$, ici $\\vec{u}\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$. Le coefficient directeur est $\\frac{3}{2} = 1{,}5$ (car $3x - 2y + 4 = 0 \\iff y = 1{,}5x + 2$).

$3 \\times 2 - 2 \\times (-1) + 4 = 12 \\neq 0$ : $P \\notin d$.

**2.** $d'$ est parallèle à $d$, elle a le même vecteur directeur : une équation est $3x - 2y + c = 0$. $P \\in d'$ donne $6 + 2 + c = 0$, soit $c = -8$.

$d' : 3x - 2y - 8 = 0$, soit $y = 1{,}5x - 4$.

**3.** Les coefficients directeurs de $d'$ ($1{,}5$) et de $\\Delta$ ($-2$) sont différents : les droites sont sécantes.

On remplace $y$ par $-2x + 10$ dans l'équation de $d'$ : $3x - 2(-2x + 10) - 8 = 0 \\iff 7x - 28 = 0 \\iff x = 4$, puis $y = -2 \\times 4 + 10 = 2$. Donc $K(4 ; 2)$.

(Vérification : $3 \\times 4 - 2 \\times 2 - 8 = 0$.)

**4.** $3x - 2(-2x + 10) + 4 = 0 \\iff 7x - 16 = 0 \\iff x = \\frac{16}{7}$, puis $y = -\\frac{32}{7} + \\frac{70}{7} = \\frac{38}{7}$. Donc $L\\left(\\frac{16}{7} ; \\frac{38}{7}\\right)$.`
    },
    {
      id: "2G3-ds-11",
      title: "Cafés et croissants : un système d'équations",
      difficulty: 3,
      points: 6,
      statement: `À la cafétéria d'un lycée, Inès paie $7{,}10$ € pour $3$ cafés et $2$ croissants, et Tom paie $9{,}50$ € pour $2$ cafés et $5$ croissants. On note $x$ le prix d'un café et $y$ celui d'un croissant, en euros.

1. Traduire l'énoncé par un système de deux équations d'inconnues $x$ et $y$.
2. Interpréter chaque équation comme l'équation d'une droite du plan. Justifier, sans résoudre, que le système admet une unique solution.
3. Résoudre le système et donner le prix d'un café et celui d'un croissant.
4. Léo dispose de $10$ €. Il achète $4$ croissants. Combien de cafés peut-il acheter au maximum avec la somme restante ?`,
      solution: `**1.** $$\\begin{cases} 3x + 2y = 7{,}1 \\\\ 2x + 5y = 9{,}5 \\end{cases}$$

**2.** Chaque équation est l'équation cartésienne d'une droite : $d_1 : 3x + 2y - 7{,}1 = 0$, de vecteur directeur $\\vec{u}_1\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$, et $d_2 : 2x + 5y - 9{,}5 = 0$, de vecteur directeur $\\vec{u}_2\\begin{pmatrix} -5 \\\\ 2 \\end{pmatrix}$.

$\\det(\\vec{u}_1, \\vec{u}_2) = (-2) \\times 2 - 3 \\times (-5) = -4 + 15 = 11 \\neq 0$ : les droites ne sont pas parallèles, elles sont sécantes en un unique point. Les coordonnées de ce point forment l'unique solution du système.

**3.** On multiplie la première équation par $2$ et la seconde par $3$ :
$$\\begin{cases} 6x + 4y = 14{,}2 \\\\ 6x + 15y = 28{,}5 \\end{cases}$$
Par soustraction : $11y = 14{,}3$, donc $y = 1{,}3$. Puis $3x = 7{,}1 - 2{,}6 = 4{,}5$, donc $x = 1{,}5$.

Vérification : $2 \\times 1{,}5 + 5 \\times 1{,}3 = 3 + 6{,}5 = 9{,}5$.

Un café coûte $1{,}50$ € et un croissant $1{,}30$ €.

**4.** Les croissants coûtent $4 \\times 1{,}30 = 5{,}20$ € ; il reste $10 - 5{,}20 = 4{,}80$ €. On cherche le plus grand entier $n$ tel que $1{,}5n \\leqslant 4{,}8$, soit $n \\leqslant 3{,}2$ : Léo peut acheter au maximum $3$ cafés.`
    },
    {
      id: "2G3-ds-12",
      title: "Le triangle formé par trois droites",
      difficulty: 4,
      points: 7,
      statement: `Dans un repère orthonormé, on considère les droites
$$d_1 : y = x + 1, \\qquad d_2 : y = -x + 5, \\qquad d_3 : x - 3y - 3 = 0.$$

1. Déterminer les coordonnées des points $A$, intersection de $d_1$ et $d_2$, $B$, intersection de $d_1$ et $d_3$, et $C$, intersection de $d_2$ et $d_3$.
2. Calculer $AB^2$, $AC^2$ et $BC^2$. Démontrer que le triangle $ABC$ est rectangle.
3. Calculer l'aire du triangle $ABC$.
4. Pour tout réel $m$, on note $\\Delta_m$ la droite d'équation $y = mx - 1$.
 a) Vérifier que toutes les droites $\\Delta_m$ passent par un même point $K$, dont on donnera les coordonnées. Ce point appartient-il à l'une des droites $d_1$, $d_2$, $d_3$ ?
 b) Pour quelle valeur de $m$ la droite $\\Delta_m$ est-elle parallèle à $d_1$ ?
 c) Pour quelle valeur de $m$ la droite $\\Delta_m$ passe-t-elle par $A$ ?`,
      solution: `**1.** On écrit l'équation réduite de $d_3$ : $x - 3y - 3 = 0 \\iff y = \\frac{1}{3}x - 1$.
- $A$ : $x + 1 = -x + 5 \\iff x = 2$, puis $y = 3$. $A(2 ; 3)$.
- $B$ : $x + 1 = \\frac{1}{3}x - 1 \\iff \\frac{2}{3}x = -2 \\iff x = -3$, puis $y = -2$. $B(-3 ; -2)$.
- $C$ : $-x + 5 = \\frac{1}{3}x - 1 \\iff \\frac{4}{3}x = 6 \\iff x = 4{,}5$, puis $y = 0{,}5$. $C(4{,}5 ; 0{,}5)$.

**2.** $AB^2 = (-5)^2 + (-5)^2 = 50$ ; $AC^2 = 2{,}5^2 + (-2{,}5)^2 = 12{,}5$ ; $BC^2 = 7{,}5^2 + 2{,}5^2 = 56{,}25 + 6{,}25 = 62{,}5$.

$AB^2 + AC^2 = 50 + 12{,}5 = 62{,}5 = BC^2$ : d'après la réciproque du théorème de Pythagore, le triangle $ABC$ est rectangle en $A$.

**3.** $AB = \\sqrt{50} = 5\\sqrt{2}$ et $AC = \\sqrt{12{,}5} = \\frac{5\\sqrt{2}}{2}$, donc
$$\\mathcal{A} = \\frac{AB \\times AC}{2} = \\frac{1}{2} \\times 5\\sqrt{2} \\times \\frac{5\\sqrt{2}}{2} = \\frac{50}{4} = 12{,}5 \\text{ unités d'aire.}$$

**4. a)** Pour $x = 0$, $y = m \\times 0 - 1 = -1$ quel que soit $m$ : toutes les droites $\\Delta_m$ passent par $K(0 ; -1)$.

$K$ appartient à $d_3$ ($0 - 3 \\times (-1) - 3 = 0$) mais pas à $d_1$ ($0 + 1 = 1 \\neq -1$) ni à $d_2$ ($5 \\neq -1$).

**b)** $\\Delta_m$ est parallèle à $d_1$ si et seulement si elles ont le même coefficient directeur : $m = 1$ (et $\\Delta_1 : y = x - 1$ est distincte de $d_1$).

**c)** $A \\in \\Delta_m \\iff 3 = 2m - 1 \\iff m = 2$.`
    }
  ],
  "2S1": [
    {
      id: "2S1-ds-01",
      title: "Notes d'un contrôle",
      difficulty: 1,
      points: 5,
      statement: `Voici la répartition des notes obtenues par une classe à un contrôle :

| Note | $8$ | $10$ | $12$ | $14$ | $16$ |
|---|---|---|---|---|---|
| Effectif | $3$ | $5$ | $7$ | $4$ | $1$ |

1. Quel est l'effectif total ? Calculer la moyenne de la classe.
2. Déterminer la médiane de la série. Justifier.
3. Déterminer le premier quartile $Q_1$ et le troisième quartile $Q_3$, puis l'écart interquartile.
4. Quel pourcentage des élèves a obtenu une note strictement supérieure à la moyenne ?`,
      solution: `**1.** $N = 3 + 5 + 7 + 4 + 1 = 20$.
$\\bar{x} = \\frac{8 \\times 3 + 10 \\times 5 + 12 \\times 7 + 14 \\times 4 + 16 \\times 1}{20} = \\frac{24 + 50 + 84 + 56 + 16}{20} = \\frac{230}{20} = 11{,}5$.

**2.** Effectifs cumulés croissants : $3$ ; $8$ ; $15$ ; $19$ ; $20$. $N = 20$ est pair : la médiane est la moyenne des $10^e$ et $11^e$ valeurs de la série ordonnée. Ces deux valeurs valent $12$ (rangs $9$ à $15$), donc $\\text{Me} = 12$.

**3.** $\\frac{N}{4} = 5$ : $Q_1$ est la $5^e$ valeur, soit $Q_1 = 10$ (rangs $4$ à $8$).
$\\frac{3N}{4} = 15$ : $Q_3$ est la $15^e$ valeur, soit $Q_3 = 12$.
Écart interquartile : $Q_3 - Q_1 = 2$.

**4.** Les notes strictement supérieures à $11{,}5$ sont $12$, $14$ et $16$ : $7 + 4 + 1 = 12$ élèves, soit $\\frac{12}{20} = 60\\,\\%$.`
    },
    {
      id: "2S1-ds-02",
      title: "Une valeur extrême",
      difficulty: 1,
      points: 4,
      statement: `Voici le nombre de livres lus en un an par $11$ adhérents d'un club de lecture :
$$4 \\quad 7 \\quad 7 \\quad 9 \\quad 10 \\quad 12 \\quad 12 \\quad 12 \\quad 15 \\quad 18 \\quad 25$$

1. Calculer la moyenne de cette série (arrondie au dixième) et déterminer sa médiane.
2. Déterminer $Q_1$, $Q_3$ et l'étendue.
3. L'adhérent ayant lu $25$ livres quitte le club. Recalculer la moyenne et la médiane de la nouvelle série.
4. Quel indicateur de position a été le plus modifié ? Expliquer pourquoi.`,
      solution: `**1.** Somme : $4 + 7 + 7 + 9 + 10 + 12 + 12 + 12 + 15 + 18 + 25 = 131$. $\\bar{x} = \\frac{131}{11} \\approx 11{,}9$.
La série est ordonnée et $N = 11$ est impair : la médiane est la $6^e$ valeur, $\\text{Me} = 12$.

**2.** $\\frac{N}{4} = 2{,}75$ : $Q_1$ est la $3^e$ valeur, $Q_1 = 7$. $\\frac{3N}{4} = 8{,}25$ : $Q_3$ est la $9^e$ valeur, $Q_3 = 15$. Étendue : $25 - 4 = 21$.

**3.** Nouvelle somme : $131 - 25 = 106$ pour $10$ valeurs, donc $\\bar{x}' = 10{,}6$.
$N = 10$ est pair : médiane $= \\frac{5^e + 6^e}{2} = \\frac{10 + 12}{2} = 11$.

**4.** La moyenne a baissé de $1{,}3$ environ, la médiane de $1$. Mais surtout la moyenne dépend de **toutes les valeurs**, y compris de leur grandeur : une valeur extrême ($25$, très éloignée des autres) la tire vers le haut. La médiane ne dépend que du **rang** des valeurs : elle est peu sensible aux valeurs extrêmes.`
    },
    {
      id: "2S1-ds-03",
      title: "Comparer deux classes avec des diagrammes en boîte",
      difficulty: 2,
      points: 5,
      statement: `Les résultats de deux classes à un même devoir sont résumés ci-dessous :

| | Minimum | $Q_1$ | Médiane | $Q_3$ | Maximum |
|---|---|---|---|---|---|
| Classe A | $4$ | $9$ | $12$ | $14$ | $19$ |
| Classe B | $7$ | $10$ | $11$ | $12$ | $17$ |

1. Construire, sur un même axe gradué, les diagrammes en boîte des deux classes.
2. Calculer l'étendue et l'écart interquartile de chaque classe.
3. Les affirmations suivantes sont-elles vraies, fausses, ou ne peut-on pas savoir ? Justifier.
   a) « Au moins $75\\,\\%$ des élèves de la classe A ont une note supérieure ou égale à $9$. »
   b) « Dans la classe B, au moins la moitié des élèves ont une note inférieure ou égale à $11$. »
   c) « La classe A a une meilleure moyenne que la classe B. »
4. Quelle classe est la plus homogène ? Justifier.`,
      solution: `**1.** Pour chaque classe : une boîte de $Q_1$ à $Q_3$, coupée par un trait à la médiane, et des « moustaches » allant du minimum au maximum.

**2.** Classe A : étendue $19 - 4 = 15$, écart interquartile $14 - 9 = 5$.
Classe B : étendue $17 - 7 = 10$, écart interquartile $12 - 10 = 2$.

**3. a)** **Vrai** : par définition de $Q_1$, au moins $75\\,\\%$ des valeurs sont supérieures ou égales à $Q_1 = 9$.

**b)** **Vrai** : par définition de la médiane, au moins la moitié des valeurs sont inférieures ou égales à $\\text{Me} = 11$.

**c)** **On ne peut pas savoir** : le diagramme en boîte ne donne pas la moyenne. Une médiane plus élevée ne garantit pas une moyenne plus élevée.

**4.** La classe B a une étendue et un écart interquartile plus petits : ses notes sont moins dispersées, elle est **plus homogène**. (La moitié centrale des élèves de B est dans un intervalle de largeur $2$, contre $5$ pour A.)`
    },
    {
      id: "2S1-ds-04",
      title: "Moyennes pondérées",
      difficulty: 2,
      points: 5,
      statement: `1. Dans un lycée, deux groupes ont passé le même test. Le premier groupe de $18$ élèves a obtenu une moyenne de $11$, le second groupe de $12$ élèves une moyenne de $13{,}5$. Calculer la moyenne de l'ensemble des $30$ élèves. Est-ce la moyenne de $11$ et $13{,}5$ ?
2. Léa a obtenu les notes suivantes ce trimestre :

| Note | $9$ | $14$ | $11$ |
|---|---|---|---|
| Coefficient | $2$ | $1$ | $3$ |

   a) Calculer sa moyenne (arrondie au centième).
   b) Il reste un devoir de coefficient $2$. Quelle note minimale doit-elle obtenir pour avoir au moins $12$ de moyenne ?
3. Le professeur décide d'ajouter $1$ point à toutes les notes du premier groupe. Quelle est la nouvelle moyenne de ce groupe ? Justifier.`,
      solution: `**1.** Somme des notes : $18 \\times 11 + 12 \\times 13{,}5 = 198 + 162 = 360$. Moyenne : $\\frac{360}{30} = 12$.
Ce n'est pas $\\frac{11 + 13{,}5}{2} = 12{,}25$ : les deux groupes n'ont pas le même effectif, il faut pondérer.

**2. a)** $\\bar{x} = \\frac{9 \\times 2 + 14 \\times 1 + 11 \\times 3}{2 + 1 + 3} = \\frac{18 + 14 + 33}{6} = \\frac{65}{6} \\approx 10{,}83$.

**b)** Avec une note $x$ de coefficient $2$ : $\\frac{65 + 2x}{8} \\geqslant 12 \\iff 65 + 2x \\geqslant 96 \\iff x \\geqslant 15{,}5$. Elle doit obtenir au moins $15{,}5$.

**3.** Si on ajoute $1$ à chacune des $18$ notes, la somme augmente de $18$ et la moyenne de $\\frac{18}{18} = 1$ : nouvelle moyenne $12$.`
    },
    {
      id: "2S1-ds-05",
      title: "Temps de trajet regroupés en classes",
      difficulty: 3,
      points: 6,
      statement: `On a interrogé $60$ salariés d'une entreprise sur la durée de leur trajet domicile-travail (en minutes) :

| Durée | $[0 ; 10[$ | $[10 ; 20[$ | $[20 ; 30[$ | $[30 ; 60[$ |
|---|---|---|---|---|
| Effectif | $12$ | $25$ | $18$ | $5$ |

1. Calculer une estimation de la durée moyenne, en expliquant la méthode utilisée.
2. Calculer les fréquences cumulées croissantes (arrondies au centième).
3. Dans quelle classe se trouve la médiane ? Et le troisième quartile ?
4. Quelle proportion des salariés met au moins $20$ minutes ? Arrondir à $0{,}1\\,\\%$.
5. Un salarié affirme : « la moitié d'entre nous met plus de $15$ minutes ». Peut-on le vérifier avec ces données ? Expliquer.`,
      solution: `**1.** On remplace chaque classe par son centre : $5$ ; $15$ ; $25$ ; $45$.
$\\bar{x} \\approx \\frac{5 \\times 12 + 15 \\times 25 + 25 \\times 18 + 45 \\times 5}{60} = \\frac{60 + 375 + 450 + 225}{60} = \\frac{1\\,110}{60} = 18{,}5$ min.
C'est une estimation : on suppose les valeurs réparties autour du centre de chaque classe.

**2.** Effectifs cumulés : $12$ ; $37$ ; $55$ ; $60$. Fréquences cumulées : $0{,}20$ ; $\\approx 0{,}62$ ; $\\approx 0{,}92$ ; $1$.

**3.** La fréquence cumulée dépasse $0{,}5$ pour la première fois dans la classe $[10 ; 20[$ : la médiane est dans $[10 ; 20[$.
Elle dépasse $0{,}75$ pour la première fois dans $[20 ; 30[$ : $Q_3 \\in [20 ; 30[$.

**4.** $\\frac{18 + 5}{60} = \\frac{23}{60} \\approx 38{,}3\\,\\%$.

**5.** Non : on sait seulement que la médiane est entre $10$ et $20$ minutes, mais on ignore la répartition des $25$ salariés à l'intérieur de la classe $[10 ; 20[$. Les données groupées ne permettent pas de trancher. *(Sous l'hypothèse d'une répartition régulière dans la classe, on estimerait la médiane à $10 + 10 \\times \\frac{30 - 12}{25} = 17{,}2$ min, ce qui irait dans son sens, mais ce n'est qu'une estimation.)*`
    },
    {
      id: "2S1-ds-06",
      title: "Écart-type et écart interquartile",
      difficulty: 3,
      points: 6,
      statement: `On considère deux séries de températures (en °C) relevées sur cinq jours dans deux villes :
- Ville A : $6$ ; $8$ ; $10$ ; $12$ ; $14$
- Ville B : $2$ ; $9$ ; $10$ ; $11$ ; $18$

1. Montrer que les deux séries ont la même moyenne et la même médiane.
2. Calculer l'écart interquartile de chaque série.
3. On rappelle que l'écart-type d'une série $x_1, \\dots, x_n$ de moyenne $\\bar{x}$ est $\\sigma = \\sqrt{\\frac{(x_1 - \\bar{x})^2 + \\cdots + (x_n - \\bar{x})^2}{n}}$. Calculer l'écart-type de chaque série (valeur exacte puis arrondi au centième).
4. Les deux indicateurs de dispersion donnent-ils la même conclusion ? Expliquer cette différence.
5. On ajoute $2$ °C à toutes les températures de la ville A. Que deviennent sa moyenne et son écart-type ?`,
      solution: `**1.** A : $\\frac{6 + 8 + 10 + 12 + 14}{5} = \\frac{50}{5} = 10$ ; B : $\\frac{2 + 9 + 10 + 11 + 18}{5} = \\frac{50}{5} = 10$. Les séries sont ordonnées, $N = 5$ : la médiane est la $3^e$ valeur, $10$ dans les deux cas.

**2.** $\\frac{N}{4} = 1{,}25$ : $Q_1$ est la $2^e$ valeur ; $\\frac{3N}{4} = 3{,}75$ : $Q_3$ est la $4^e$ valeur.
A : $Q_3 - Q_1 = 12 - 8 = 4$. $\\quad$ B : $Q_3 - Q_1 = 11 - 9 = 2$.

**3.** A : $\\sigma_A^2 = \\frac{16 + 4 + 0 + 4 + 16}{5} = 8$, donc $\\sigma_A = \\sqrt{8} = 2\\sqrt{2} \\approx 2{,}83$ °C.
B : $\\sigma_B^2 = \\frac{64 + 1 + 0 + 1 + 64}{5} = 26$, donc $\\sigma_B = \\sqrt{26} \\approx 5{,}10$ °C.

**4.** Non : l'écart interquartile est plus petit pour B, l'écart-type plus petit pour A. L'écart interquartile ne tient compte que de la moitié centrale des valeurs (ici très resserrée pour B), alors que l'écart-type tient compte de toutes les valeurs, et donc des valeurs extrêmes $2$ et $18$ de B, qui l'augmentent fortement.

**5.** La moyenne augmente de $2$ : elle vaut $12$ °C. Les écarts à la moyenne sont inchangés, donc l'écart-type reste $2\\sqrt{2} \\approx 2{,}83$ °C.`
    },
    {
      id: "2S1-ds-07",
      title: "Retrouver des valeurs manquantes",
      difficulty: 4,
      points: 6,
      statement: `Une série comporte $8$ notes. Six d'entre elles sont connues : $7$ ; $9$ ; $10$ ; $13$ ; $15$ ; $17$. Les deux notes manquantes $a$ et $b$ vérifient $a \\leqslant b$. On sait que la moyenne de la série est $12$ et que sa médiane est $12$.

1. Montrer que $a + b = 25$.
2. a) Montrer que si $a \\leqslant 10$, la médiane vaut $11{,}5$.
   b) Montrer que $a$ ne peut pas être strictement supérieur à $12{,}5$.
   c) On suppose $10 < a \\leqslant 12{,}5$. Montrer que $a = 11$ et en déduire $b$.
3. Vérifier que la série obtenue convient, puis donner $Q_1$, $Q_3$ et l'écart interquartile.`,
      solution: `**1.** La somme des $8$ notes vaut $8 \\times 12 = 96$. Or $7 + 9 + 10 + 13 + 15 + 17 = 71$, donc $a + b = 96 - 71 = 25$.

**2.** La médiane d'une série de $8$ valeurs est la moyenne des $4^e$ et $5^e$ valeurs ordonnées.

**a)** Si $a \\leqslant 10$, alors $b = 25 - a \\geqslant 15$. Les quatre plus petites valeurs sont $7$, $9$, $10$ et $a$ (dans un certain ordre), donc la $4^e$ valeur est $10$ ; la $5^e$ est $13$. Médiane : $\\frac{10 + 13}{2} = 11{,}5 \\neq 12$. Impossible.

**b)** Si $a > 12{,}5$, alors $b = 25 - a < 12{,}5 < a$, ce qui contredit $a \\leqslant b$.

**c)** Si $10 < a \\leqslant 12{,}5$, alors $12{,}5 \\leqslant b < 15$.
- Si $b \\geqslant 13$ : les valeurs ordonnées commencent par $7, 9, 10, a, 13, \\ldots$ ; médiane $\\frac{a + 13}{2} = 12 \\iff a = 11$, et alors $b = 14 \\geqslant 13$ convient.
- Si $b < 13$ (donc $a > 12$) : la $4^e$ valeur est $a$ et la $5^e$ est $b$, médiane $\\frac{a + b}{2} = 12{,}5 \\neq 12$. Impossible.

Donc $a = 11$ et $b = 14$.

**3.** Série ordonnée : $7 ; 9 ; 10 ; 11 ; 13 ; 14 ; 15 ; 17$. Somme : $96$, moyenne $12$ ; médiane $\\frac{11 + 13}{2} = 12$. 
$\\frac{N}{4} = 2$ : $Q_1 = 9$ ($2^e$ valeur) ; $\\frac{3N}{4} = 6$ : $Q_3 = 14$ ($6^e$ valeur). Écart interquartile : $5$.`
    },
    {
      id: "2S1-ds-08",
      title: "Contrôle qualité de deux machines",
      difficulty: 4,
      points: 7,
      statement: `Une usine remplit des bouteilles de $75$ cL avec deux machines. Une bouteille est **conforme** si son contenu est dans l'intervalle $[74{,}5 ; 75{,}5]$ (en cL). On a mesuré $12$ bouteilles de chaque machine :

- Machine A : $74{,}2$ ; $74{,}8$ ; $75{,}0$ ; $75{,}1$ ; $75{,}3$ ; $75{,}0$ ; $74{,}9$ ; $75{,}2$ ; $74{,}6$ ; $75{,}4$ ; $75{,}1$ ; $74{,}4$
- Machine B : $73{,}5$ ; $76{,}2$ ; $75{,}0$ ; $74{,}1$ ; $75{,}9$ ; $75{,}0$ ; $74{,}6$ ; $76{,}0$ ; $73{,}9$ ; $75{,}3$ ; $74{,}7$ ; $75{,}8$

1. Ordonner chaque série.
2. Calculer la moyenne de chaque série (arrondir au centième) ainsi que la médiane.
3. Déterminer $Q_1$, $Q_3$ et l'écart interquartile de chaque série.
4. Calculer, pour chaque machine, la proportion de bouteilles conformes dans l'échantillon.
5. Le responsable affirme : « les deux machines se valent puisqu'elles ont la même médiane ». Rédiger une réponse argumentée.`,
      solution: `**1.** A : $74{,}2 ; 74{,}4 ; 74{,}6 ; 74{,}8 ; 74{,}9 ; 75{,}0 ; 75{,}0 ; 75{,}1 ; 75{,}1 ; 75{,}2 ; 75{,}3 ; 75{,}4$.
B : $73{,}5 ; 73{,}9 ; 74{,}1 ; 74{,}6 ; 74{,}7 ; 75{,}0 ; 75{,}0 ; 75{,}3 ; 75{,}8 ; 75{,}9 ; 76{,}0 ; 76{,}2$.

**2.** A : somme $899$, moyenne $\\frac{899}{12} \\approx 74{,}92$ cL. B : somme $900$, moyenne $75{,}00$ cL.
$N = 12$ : médiane $= \\frac{6^e + 7^e}{2}$. A : $\\frac{75{,}0 + 75{,}0}{2} = 75{,}0$ ; B : $75{,}0$ également.

**3.** $\\frac{N}{4} = 3$ : $Q_1$ est la $3^e$ valeur ; $\\frac{3N}{4} = 9$ : $Q_3$ est la $9^e$ valeur.
A : $Q_1 = 74{,}6$, $Q_3 = 75{,}1$, écart interquartile $0{,}5$.
B : $Q_1 = 74{,}1$, $Q_3 = 75{,}8$, écart interquartile $1{,}7$.

**4.** A : seules $74{,}2$ et $74{,}4$ sont hors de l'intervalle : $\\frac{10}{12} \\approx 83\\,\\%$ de bouteilles conformes.
B : conformes : $74{,}6 ; 74{,}7 ; 75{,}0 ; 75{,}0 ; 75{,}3$, soit $\\frac{5}{12} \\approx 42\\,\\%$.

**5.** Les deux machines sont bien centrées (médiane $75$, moyennes très proches de $75$), mais la machine B est beaucoup plus **dispersée** (écart interquartile $1{,}7$ contre $0{,}5$), ce qui se traduit par une proportion de bouteilles conformes nettement plus faible ($42\\,\\%$ contre $83\\,\\%$). Les indicateurs de position ne suffisent pas : la machine A est préférable ; la machine B doit être réglée pour réduire sa dispersion.`
    },
    {
      id: "2S1-ds-09",
      title: "Températures d'une semaine",
      difficulty: 1,
      points: 4,
      statement: `Voici les températures maximales (en °C) relevées pendant une semaine de juin dans une ville :
$$12 \\quad 15 \\quad 9 \\quad 14 \\quad 18 \\quad 11 \\quad 19$$

1. Calculer la température moyenne de la semaine.
2. Ranger les valeurs dans l'ordre croissant, puis déterminer la médiane et l'étendue de la série.
3. Déterminer le premier quartile $Q_1$ et le troisième quartile $Q_3$, puis l'écart interquartile.
4. La semaine suivante, chaque température maximale est supérieure de $2$ °C à celle du même jour. Sans refaire tous les calculs, donner la moyenne, la médiane et l'étendue de cette nouvelle série.`,
      solution: `**1.** $\\overline{x} = \\frac{12 + 15 + 9 + 14 + 18 + 11 + 19}{7} = \\frac{98}{7} = 14$ °C.

**2.** Série ordonnée : $9$ ; $11$ ; $12$ ; $14$ ; $15$ ; $18$ ; $19$.

L'effectif $7$ est impair : la médiane est la $4^e$ valeur, $Me = 14$ °C. L'étendue vaut $19 - 9 = 10$ °C.

**3.** $\\frac{7}{4} = 1{,}75$ : $Q_1$ est la $2^e$ valeur, $Q_1 = 11$ °C. $\\frac{3 \\times 7}{4} = 5{,}25$ : $Q_3$ est la $6^e$ valeur, $Q_3 = 18$ °C.

Écart interquartile : $Q_3 - Q_1 = 18 - 11 = 7$ °C.

**4.** Ajouter $2$ à chaque valeur ne change pas leur ordre et décale toutes les valeurs de $2$ :
- la moyenne augmente de $2$ : $16$ °C (linéarité de la moyenne) ;
- la médiane augmente de $2$ : $16$ °C ;
- l'étendue ne change pas : $10$ °C (les deux valeurs extrêmes augmentent toutes deux de $2$).`
    },
    {
      id: "2S1-ds-10",
      title: "Moyens de transport : fréquences marginales et conditionnelles",
      difficulty: 2,
      points: 5,
      statement: `On a demandé à $250$ élèves d'un lycée leur moyen de transport principal pour venir au lycée.

| | Bus | Vélo | À pied | Total |
|---|---|---|---|---|
| Seconde | $60$ | $25$ | $35$ | |
| Première | $70$ | $40$ | $20$ | |
| Total | | | | $250$ |

1. Recopier et compléter le tableau.
2. Calculer la fréquence marginale des élèves qui viennent à vélo.
3. Calculer la fréquence des élèves qui viennent à vélo parmi les élèves de Première (arrondir à $0{,}001$).
4. Parmi les élèves qui viennent à vélo, quelle est la fréquence des élèves de Seconde ? (arrondir à $0{,}001$)
5. Un journaliste du lycée affirme : « Les élèves de Première prennent plus souvent le bus que ceux de Seconde. » Commenter.`,
      solution: `**1.**

| | Bus | Vélo | À pied | Total |
|---|---|---|---|---|
| Seconde | $60$ | $25$ | $35$ | $120$ |
| Première | $70$ | $40$ | $20$ | $130$ |
| Total | $130$ | $65$ | $55$ | $250$ |

**2.** $f(\\text{vélo}) = \\frac{65}{250} = 0{,}26$, soit $26\\,\\%$ des élèves.

**3.** On se restreint aux $130$ élèves de Première : $f_{\\text{Première}}(\\text{vélo}) = \\frac{40}{130} \\approx 0{,}308$.

**4.** On se restreint aux $65$ cyclistes : $f_{\\text{vélo}}(\\text{Seconde}) = \\frac{25}{65} \\approx 0{,}385$.

**5.** Il y a plus d'élèves de Première que de Seconde qui prennent le bus en effectif ($70$ contre $60$), mais il faut comparer des fréquences conditionnelles, car les deux niveaux n'ont pas le même effectif :
- parmi les Secondes : $\\frac{60}{120} = 0{,}5$ ;
- parmi les Premières : $\\frac{70}{130} \\approx 0{,}538$.

La proportion d'utilisateurs du bus est effectivement un peu plus élevée en Première ($53{,}8\\,\\%$ contre $50\\,\\%$) : l'affirmation est correcte pour cet échantillon, mais l'écart est faible.`
    },
    {
      id: "2S1-ds-11",
      title: "Masses de paquets : effet d'une transformation affine",
      difficulty: 3,
      points: 6,
      statement: `Une machine remplit des sachets de graines. On pèse cinq sachets (masses en grammes) :
$$48 \\quad 50 \\quad 51 \\quad 49 \\quad 52$$

On rappelle que l'écart-type d'une série $x_1, \\ldots, x_n$ de moyenne $\\overline{x}$ est $s = \\sqrt{\\frac{(x_1 - \\overline{x})^2 + \\cdots + (x_n - \\overline{x})^2}{n}}$.

1. Calculer la masse moyenne $\\overline{x}$ et l'écart-type $s$ de la série (valeur exacte, puis arrondi au centième).
2. On ajoute à chaque sachet un emballage de $15$ g. Donner, en justifiant, la moyenne et l'écart-type des masses des sachets emballés.
3. Les graines sont vendues $0{,}04$ € le gramme (emballage non compris). Donner la moyenne et l'écart-type des prix des cinq sachets.
4. Plus généralement, on transforme chaque valeur $x_i$ d'une série en $y_i = ax_i + b$ ($a$ et $b$ réels). Démontrer que $\\overline{y} = a\\overline{x} + b$ et que chaque écart $y_i - \\overline{y}$ est égal à $a(x_i - \\overline{x})$. Qu'en déduit-on pour l'écart-type ?`,
      solution: `**1.** $\\overline{x} = \\frac{48 + 50 + 51 + 49 + 52}{5} = \\frac{250}{5} = 50$ g.

Écarts à la moyenne : $-2$ ; $0$ ; $1$ ; $-1$ ; $2$, de carrés $4$ ; $0$ ; $1$ ; $1$ ; $4$, de somme $10$.

$s = \\sqrt{\\frac{10}{5}} = \\sqrt{2} \\approx 1{,}41$ g.

**2.** Les nouvelles masses sont $x_i + 15$ : la moyenne devient $50 + 15 = 65$ g. Les écarts à la moyenne sont inchangés ($x_i + 15 - 65 = x_i - 50$), donc l'écart-type reste $\\sqrt{2} \\approx 1{,}41$ g.

**3.** Les prix sont $0{,}04x_i$ : moyenne $0{,}04 \\times 50 = 2$ € ; les écarts sont multipliés par $0{,}04$, donc l'écart-type vaut $0{,}04\\sqrt{2} \\approx 0{,}06$ €.

**4.** $\\overline{y} = \\frac{(ax_1 + b) + \\cdots + (ax_n + b)}{n} = \\frac{a(x_1 + \\cdots + x_n) + nb}{n} = a\\overline{x} + b$.

Alors $y_i - \\overline{y} = ax_i + b - a\\overline{x} - b = a(x_i - \\overline{x})$.

Chaque carré d'écart est multiplié par $a^2$, donc la quantité sous la racine aussi :
$$s_y = \\sqrt{a^2 \\times \\frac{\\sum (x_i - \\overline{x})^2}{n}} = |a| \\, s_x.$$
L'écart-type est multiplié par $|a|$ et ne dépend pas de $b$ : un décalage ne change pas la dispersion.`
    },
    {
      id: "2S1-ds-12",
      title: "Âges des visiteurs d'un musée : classes et effectif manquant",
      difficulty: 4,
      points: 7,
      statement: `On a relevé l'âge des visiteurs d'un musée un samedi. Les résultats sont regroupés en classes ; l'effectif $n$ de la dernière classe a été effacé.

| Âge (ans) | $[0 ; 10[$ | $[10 ; 20[$ | $[20 ; 40[$ | $[40 ; 60[$ | $[60 ; 90[$ |
|---|---|---|---|---|---|
| Effectif | $20$ | $30$ | $60$ | $70$ | $n$ |

On sait que l'âge moyen, calculé en remplaçant chaque classe par son centre, est de $36{,}75$ ans.

1. Donner le centre de chaque classe.
2. Montrer que $n$ vérifie $\\frac{5\\,850 + 75n}{180 + n} = 36{,}75$, puis en déduire que $n = 20$.
3. Dans un histogramme, l'**aire** de chaque rectangle est proportionnelle à l'effectif de la classe. On choisit comme hauteur l'effectif divisé par l'amplitude de la classe. Calculer la hauteur de chaque rectangle. Pourquoi ne peut-on pas prendre l'effectif comme hauteur ?
4. Déterminer la classe qui contient la médiane. En supposant les âges répartis uniformément à l'intérieur de chaque classe, donner une estimation de la médiane.
5. Avec la même hypothèse, estimer le pourcentage de visiteurs de moins de $30$ ans.`,
      solution: `**1.** Centres : $5$ ; $15$ ; $30$ ; $50$ ; $75$.

**2.** La somme des produits « centre × effectif » vaut $5 \\times 20 + 15 \\times 30 + 30 \\times 60 + 50 \\times 70 + 75n = 100 + 450 + 1\\,800 + 3\\,500 + 75n = 5\\,850 + 75n$, et l'effectif total est $180 + n$. D'où l'équation.

$5\\,850 + 75n = 36{,}75(180 + n) \\iff 5\\,850 + 75n = 6\\,615 + 36{,}75n \\iff 38{,}25n = 765 \\iff n = 20$.

L'effectif total est donc $N = 200$.

**3.** Hauteurs (effectif ÷ amplitude) : $\\frac{20}{10} = 2$ ; $\\frac{30}{10} = 3$ ; $\\frac{60}{20} = 3$ ; $\\frac{70}{20} = 3{,}5$ ; $\\frac{20}{30} \\approx 0{,}67$ (visiteurs par année d'âge).

Les classes n'ont pas toutes la même amplitude : avec l'effectif comme hauteur, les classes larges (comme $[60 ; 90[$) paraîtraient beaucoup trop importantes, puisque l'œil compare des aires.

**4.** Effectifs cumulés croissants : $20$ ; $50$ ; $110$ ; $180$ ; $200$. La médiane correspond à la $100^e$ valeur environ ($\\frac{N}{2} = 100$) : $50 < 100 \\leqslant 110$, elle est dans la classe $[20 ; 40[$.

Dans cette classe, il y a $3$ visiteurs par année d'âge ; il faut $100 - 50 = 50$ visiteurs de plus après $20$ ans, soit $\\frac{50}{3} \\approx 16{,}7$ années. Estimation : $Me \\approx 20 + 16{,}7 \\approx 36{,}7$ ans.

**5.** Moins de $30$ ans : $20 + 30 + 3 \\times 10 = 80$ visiteurs (la moitié de la classe $[20 ; 40[$), soit $\\frac{80}{200} = 40\\,\\%$ des visiteurs.`
    }
  ],
  "2S2": [
    {
      id: "2S2-ds-01",
      title: "Lancer d'un dé équilibré",
      difficulty: 1,
      points: 4,
      statement: `On lance un dé équilibré à six faces numérotées de $1$ à $6$ et on note le numéro obtenu. On considère les événements $A$ : « obtenir un nombre pair » et $B$ : « obtenir un nombre supérieur ou égal à $5$ ».

1. Décrire l'univers $\\Omega$ et justifier qu'il s'agit d'une situation d'équiprobabilité.
2. Écrire $A$ et $B$ sous forme d'ensembles et calculer $P(A)$ et $P(B)$.
3. Décrire par une phrase l'événement $\\overline{B}$ et calculer sa probabilité.
4. Déterminer $A \\cap B$, puis calculer $P(A \\cup B)$ de deux façons.`,
      solution: `**1.** $\\Omega = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$. Le dé est équilibré : chaque issue a la même probabilité $\\frac{1}{6}$.

**2.** $A = \\{2 ; 4 ; 6\\}$, $P(A) = \\frac{3}{6} = \\frac{1}{2}$. $\\;B = \\{5 ; 6\\}$, $P(B) = \\frac{2}{6} = \\frac{1}{3}$.

**3.** $\\overline{B}$ : « obtenir un nombre strictement inférieur à $5$ », soit $\\{1 ; 2 ; 3 ; 4\\}$. $P(\\overline{B}) = 1 - P(B) = \\frac{2}{3}$.

**4.** $A \\cap B = \\{6\\}$, donc $P(A \\cap B) = \\frac{1}{6}$.
*Par la formule :* $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{6} = \\frac{3 + 2 - 1}{6} = \\frac{2}{3}$.
*Directement :* $A \\cup B = \\{2 ; 4 ; 5 ; 6\\}$, $P(A \\cup B) = \\frac{4}{6} = \\frac{2}{3}$.`
    },
    {
      id: "2S2-ds-02",
      title: "Urne et dé truqué",
      difficulty: 1,
      points: 4,
      statement: `1. Une urne contient $5$ boules rouges, $3$ vertes et $2$ bleues, indiscernables au toucher. On tire une boule au hasard.
   a) Calculer la probabilité de tirer une boule rouge.
   b) Calculer la probabilité de ne pas tirer une boule verte.
   c) Calculer la probabilité de tirer une boule rouge ou bleue.
2. Un dé truqué a la loi de probabilité suivante :

| Face | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| Probabilité | $0{,}1$ | $0{,}15$ | $0{,}2$ | $0{,}15$ | $0{,}1$ | $p$ |

   a) Calculer $p$.
   b) Calculer la probabilité d'obtenir un nombre pair. Le comparer à celle d'un dé équilibré.`,
      solution: `**1.** Il y a $10$ boules, chacune a la même probabilité d'être tirée (équiprobabilité).
**a)** $P(R) = \\frac{5}{10} = \\frac{1}{2}$.
**b)** $P(\\overline{V}) = 1 - \\frac{3}{10} = \\frac{7}{10}$.
**c)** Les événements « rouge » et « bleue » sont incompatibles : $P = \\frac{5}{10} + \\frac{2}{10} = \\frac{7}{10}$. (C'est le même événement que « ne pas tirer une verte ».)

**2. a)** La somme des probabilités vaut $1$ : $0{,}1 + 0{,}15 + 0{,}2 + 0{,}15 + 0{,}1 + p = 1$, soit $0{,}7 + p = 1$ et $p = 0{,}3$.

**b)** $P(\\{2 ; 4 ; 6\\}) = 0{,}15 + 0{,}15 + 0{,}3 = 0{,}6$, supérieure à $0{,}5$ pour un dé équilibré.`
    },
    {
      id: "2S2-ds-03",
      title: "Somme de deux dés",
      difficulty: 2,
      points: 5,
      statement: `On lance deux dés équilibrés à six faces, l'un rouge et l'autre bleu, et on s'intéresse à la somme des deux numéros.

1. Construire un tableau à double entrée donnant toutes les sommes possibles. Combien y a-t-il d'issues équiprobables ?
2. Calculer la probabilité des événements :
   $S$ : « la somme vaut $7$ » ; $\\;T$ : « la somme est supérieure ou égale à $10$ » ; $\\;D$ : « obtenir un double ».
3. Les événements $S$ et $D$ sont-ils incompatibles ? En déduire $P(S \\cup D)$.
4. Calculer $P(T \\cup D)$.`,
      solution: `**1.** Le tableau comporte $6 \\times 6 = 36$ cases ; chaque couple (rouge ; bleu) est équiprobable, de probabilité $\\frac{1}{36}$. Les sommes vont de $2$ à $12$.

**2.** $S$ : $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$, soit $P(S) = \\frac{6}{36} = \\frac{1}{6}$.
$T$ : somme $10$ ($3$ cases), $11$ ($2$ cases), $12$ ($1$ case), soit $P(T) = \\frac{6}{36} = \\frac{1}{6}$.
$D$ : $6$ doubles, $P(D) = \\frac{1}{6}$.

**3.** Un double a une somme paire ($2k$), donc jamais égale à $7$ : $S \\cap D = \\varnothing$, les événements sont incompatibles. $P(S \\cup D) = \\frac{6}{36} + \\frac{6}{36} = \\frac{1}{3}$.

**4.** $T \\cap D = \\{(5;5), (6;6)\\}$, donc $P(T \\cap D) = \\frac{2}{36}$.
$P(T \\cup D) = \\frac{6}{36} + \\frac{6}{36} - \\frac{2}{36} = \\frac{10}{36} = \\frac{5}{18}$.`
    },
    {
      id: "2S2-ds-04",
      title: "Sports pratiqués dans un lycée",
      difficulty: 2,
      points: 5,
      statement: `On a interrogé $200$ élèves d'un lycée sur le sport qu'ils pratiquent principalement :

| | Football | Natation | Autre | Total |
|---|---|---|---|---|
| Filles | $20$ | $35$ | $45$ | $100$ |
| Garçons | $50$ | $25$ | $25$ | $100$ |
| Total | $70$ | $60$ | $70$ | $200$ |

On choisit un élève au hasard. On note $F$ : « l'élève est une fille » et $N$ : « l'élève pratique la natation », $\\;B$ : « l'élève pratique le football ».

1. Calculer $P(F)$, $P(B)$ et $P(\\overline{N})$.
2. Décrire par une phrase l'événement $F \\cap B$ et calculer sa probabilité.
3. Calculer $P(F \\cup B)$ et vérifier le résultat à l'aide du tableau.
4. On choisit maintenant un élève au hasard **parmi les nageurs**. Quelle est la probabilité que ce soit une fille ?`,
      solution: `**1.** $P(F) = \\frac{100}{200} = 0{,}5$ ; $P(B) = \\frac{70}{200} = 0{,}35$ ; $P(\\overline{N}) = 1 - \\frac{60}{200} = 0{,}7$.

**2.** $F \\cap B$ : « l'élève est une fille qui pratique le football ». $P(F \\cap B) = \\frac{20}{200} = 0{,}1$.

**3.** $P(F \\cup B) = P(F) + P(B) - P(F \\cap B) = 0{,}5 + 0{,}35 - 0{,}1 = 0{,}75$.
*Vérification :* $F \\cup B$ regroupe les $100$ filles et les $50$ garçons footballeurs : $\\frac{150}{200} = 0{,}75$.

**4.** On se restreint aux $60$ nageurs, dont $35$ filles : $\\frac{35}{60} = \\frac{7}{12} \\approx 0{,}58$.`
    },
    {
      id: "2S2-ds-05",
      title: "Tirages successifs avec ou sans remise",
      difficulty: 3,
      points: 6,
      statement: `Une urne contient $3$ boules rouges $R_1, R_2, R_3$ et $2$ boules blanches $B_1, B_2$. On tire successivement deux boules.

**Partie A : tirage sans remise.**
1. Combien y a-t-il de tirages possibles (couples ordonnés de deux boules distinctes) ? On pourra s'aider d'un arbre ou d'un tableau.
2. Calculer la probabilité d'obtenir deux boules rouges.
3. Calculer la probabilité d'obtenir deux boules de la même couleur.
4. Calculer la probabilité d'obtenir au moins une boule blanche.

**Partie B : tirage avec remise.**
5. Reprendre la question 3 lorsque la première boule est remise dans l'urne avant le second tirage. Le résultat est-il plus grand ou plus petit ? Était-ce prévisible ?`,
      solution: `**1.** Pour la première boule, $5$ choix ; pour la seconde, $4$ choix (sans remise) : $5 \\times 4 = 20$ tirages, tous équiprobables.

**2.** Deux rouges : $3 \\times 2 = 6$ tirages, $P(RR) = \\frac{6}{20} = \\frac{3}{10}$.

**3.** Deux blanches : $2 \\times 1 = 2$ tirages. $P(\\text{même couleur}) = \\frac{6 + 2}{20} = \\frac{8}{20} = \\frac{2}{5}$.

**4.** « Au moins une blanche » est l'événement contraire de « deux rouges » : $P = 1 - \\frac{3}{10} = \\frac{7}{10}$.

**5.** Avec remise : $5 \\times 5 = 25$ tirages équiprobables. Deux rouges : $3 \\times 3 = 9$ ; deux blanches : $2 \\times 2 = 4$. $P(\\text{même couleur}) = \\frac{13}{25} = 0{,}52 > 0{,}4$.
C'était prévisible : avec remise, après avoir tiré une boule d'une couleur, il reste autant de boules de cette couleur pour le second tirage, ce qui favorise les paires de même couleur.`
    },
    {
      id: "2S2-ds-06",
      title: "Presse et radio",
      difficulty: 3,
      points: 5,
      statement: `Dans une ville, on choisit une personne au hasard. On note $A$ l'événement « la personne lit la presse quotidienne » et $B$ l'événement « la personne écoute la radio chaque jour ». Une enquête donne $P(A) = 0{,}45$, $P(B) = 0{,}3$ et $P(A \\cup B) = 0{,}6$.

1. Calculer $P(A \\cap B)$ et interpréter.
2. Calculer la probabilité qu'une personne ne lise pas la presse et n'écoute pas la radio.
3. Calculer la probabilité qu'une personne écoute la radio mais ne lise pas la presse.
4. Calculer la probabilité qu'une personne pratique exactement une des deux activités.
5. Représenter la situation par un tableau à double entrée de probabilités.`,
      solution: `**1.** $P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0{,}45 + 0{,}3 - 0{,}6 = 0{,}15$ : $15\\,\\%$ des personnes lisent la presse **et** écoutent la radio.

**2.** « Ni l'un ni l'autre » est l'événement $\\overline{A \\cup B}$ : $P = 1 - 0{,}6 = 0{,}4$.

**3.** $P(\\overline{A} \\cap B) = P(B) - P(A \\cap B) = 0{,}3 - 0{,}15 = 0{,}15$.

**4.** Exactement une activité : $P(A \\cup B) - P(A \\cap B) = 0{,}6 - 0{,}15 = 0{,}45$.
*(Détail : $P(A \\cap \\overline{B}) = 0{,}45 - 0{,}15 = 0{,}30$ et $P(\\overline{A} \\cap B) = 0{,}15$, total $0{,}45$.)*

**5.**

| | $B$ | $\\overline{B}$ | Total |
|---|---|---|---|
| $A$ | $0{,}15$ | $0{,}30$ | $0{,}45$ |
| $\\overline{A}$ | $0{,}15$ | $0{,}40$ | $0{,}55$ |
| Total | $0{,}30$ | $0{,}70$ | $1$ |`
    },
    {
      id: "2S2-ds-07",
      title: "Le problème du chevalier de Méré",
      difficulty: 4,
      points: 7,
      statement: `Au XVII$^e$ siècle, le chevalier de Méré pariait qu'en lançant **quatre fois** un dé équilibré, il obtiendrait au moins un $6$.

1. Une issue est une liste de quatre résultats, par exemple $(3 ; 6 ; 1 ; 6)$. Justifier qu'il y a $6^4 = 1\\,296$ issues équiprobables.
2. Combien d'issues ne comportent aucun $6$ ?
3. En déduire la probabilité d'obtenir au moins un $6$ en quatre lancers (arrondir au millième). Le pari était-il favorable au chevalier ?
4. Le chevalier pariait aussi qu'en lançant **vingt-quatre fois** une paire de dés, il obtiendrait au moins un double six.
   a) Combien d'issues possède un lancer d'une paire de dés ? Combien ne sont pas un double six ?
   b) En raisonnant comme précédemment, exprimer la probabilité d'obtenir au moins un double six en $24$ lancers, puis en donner une valeur approchée au millième. Ce pari était-il favorable ?
5. Avec un dé, combien de lancers faut-il au minimum pour que la probabilité d'obtenir au moins un $6$ dépasse $0{,}9$ ? Justifier à l'aide de la calculatrice.`,
      solution: `**1.** Chaque lancer a $6$ résultats possibles et le dé est équilibré : on obtient $6 \\times 6 \\times 6 \\times 6 = 1\\,296$ listes, toutes équiprobables.

**2.** Sans $6$, chaque lancer a $5$ résultats possibles : $5^4 = 625$ issues.

**3.** « Au moins un $6$ » est le contraire de « aucun $6$ » : $P = 1 - \\frac{625}{1\\,296} = \\frac{671}{1\\,296} \\approx 0{,}518$. Cette probabilité est supérieure à $\\frac{1}{2}$ : le pari était (légèrement) favorable au chevalier.

**4. a)** $6 \\times 6 = 36$ issues pour une paire de dés, dont $35$ ne sont pas le double six.

**b)** Sur $24$ lancers : $36^{24}$ issues équiprobables, dont $35^{24}$ sans double six. $P = 1 - \\frac{35^{24}}{36^{24}} = 1 - \\left(\\frac{35}{36}\\right)^{24} \\approx 0{,}491$. Cette probabilité est inférieure à $\\frac{1}{2}$ : le pari était (légèrement) défavorable.

**5.** Avec $n$ lancers, $P = 1 - \\left(\\frac{5}{6}\\right)^n$. On cherche le plus petit $n$ tel que $\\left(\\frac{5}{6}\\right)^n < 0{,}1$.
$\\left(\\frac{5}{6}\\right)^{12} \\approx 0{,}112$ et $\\left(\\frac{5}{6}\\right)^{13} \\approx 0{,}093$. Il faut au minimum **$13$ lancers**.`
    },
    {
      id: "2S2-ds-08",
      title: "Le problème du duc de Toscane",
      difficulty: 4,
      points: 7,
      statement: `On lance trois dés équilibrés à six faces (on les suppose de couleurs différentes) et on fait la somme des trois numéros. Le duc de Toscane avait remarqué qu'on obtient plus souvent $10$ que $9$, alors que ces deux sommes s'obtiennent chacune de six façons « sans tenir compte de l'ordre » :
- $9 = 1 + 2 + 6 = 1 + 3 + 5 = 1 + 4 + 4 = 2 + 2 + 5 = 2 + 3 + 4 = 3 + 3 + 3$ ;
- $10 = 1 + 3 + 6 = 1 + 4 + 5 = 2 + 2 + 6 = 2 + 3 + 5 = 2 + 4 + 4 = 3 + 3 + 4$.

1. Combien y a-t-il d'issues équiprobables (triplets ordonnés) ?
2. Combien de triplets ordonnés correspondent à la décomposition $1 + 2 + 6$ ? À $1 + 4 + 4$ ? À $3 + 3 + 3$ ?
3. Calculer la probabilité d'obtenir une somme égale à $9$, puis à $10$.
4. Expliquer pourquoi le raisonnement « six façons chacune, donc même probabilité » est faux.
5. Calculer la probabilité d'obtenir une somme égale à $9$ ou à $10$.`,
      solution: `**1.** $6 \\times 6 \\times 6 = 216$ triplets ordonnés équiprobables.

**2.** Trois nombres distincts (comme $1, 2, 6$) peuvent être ordonnés de $3 \\times 2 \\times 1 = 6$ façons. Deux nombres égaux et un différent (comme $1, 4, 4$) : $3$ façons (la position du nombre différent). Trois nombres égaux : $1$ façon.

**3.** Somme $9$ : $1+2+6$ ($6$), $1+3+5$ ($6$), $1+4+4$ ($3$), $2+2+5$ ($3$), $2+3+4$ ($6$), $3+3+3$ ($1$), soit $25$ triplets. $P(9) = \\frac{25}{216} \\approx 0{,}116$.
Somme $10$ : $1+3+6$ ($6$), $1+4+5$ ($6$), $2+2+6$ ($3$), $2+3+5$ ($6$), $2+4+4$ ($3$), $3+3+4$ ($3$), soit $27$ triplets. $P(10) = \\frac{27}{216} = \\frac{1}{8} = 0{,}125$.

**4.** Les six « façons » ne sont pas équiprobables : une décomposition en trois nombres distincts correspond à $6$ issues, alors que $3 + 3 + 3$ n'en représente qu'une. Pour calculer une probabilité par dénombrement, il faut compter des issues **équiprobables**.

**5.** Les événements sont incompatibles : $P = \\frac{25 + 27}{216} = \\frac{52}{216} = \\frac{13}{54} \\approx 0{,}241$.`
    },
    {
      id: "2S2-ds-09",
      title: "Tirer une carte dans un jeu de 32 cartes",
      difficulty: 1,
      points: 4,
      statement: `On tire au hasard une carte dans un jeu de $32$ cartes (quatre couleurs : cœur, carreau, trèfle, pique ; dans chaque couleur : 7, 8, 9, 10, valet, dame, roi, as). On considère les événements $C$ : « la carte est un cœur » et $F$ : « la carte est une figure » (valet, dame ou roi).

1. Quelle hypothèse permet de choisir un modèle d'équiprobabilité ? Calculer $P(C)$ et $P(F)$.
2. Décrire par une phrase l'événement $C \\cap F$, puis calculer sa probabilité.
3. Calculer $P(C \\cup F)$.
4. Décrire l'événement contraire $\\overline{C}$ et calculer sa probabilité.`,
      solution: `**1.** Le tirage se fait « au hasard » dans un jeu bien mélangé : chaque carte a la même chance d'être tirée, on choisit la loi équiprobable sur les $32$ cartes.

Il y a $8$ cœurs : $P(C) = \\frac{8}{32} = \\frac{1}{4}$. Il y a $3 \\times 4 = 12$ figures : $P(F) = \\frac{12}{32} = \\frac{3}{8}$.

**2.** $C \\cap F$ : « la carte est une figure de cœur » (valet, dame ou roi de cœur). $P(C \\cap F) = \\frac{3}{32}$.

**3.** $P(C \\cup F) = P(C) + P(F) - P(C \\cap F) = \\frac{8}{32} + \\frac{12}{32} - \\frac{3}{32} = \\frac{17}{32}$.

(On ne compte pas deux fois les trois figures de cœur.)

**4.** $\\overline{C}$ : « la carte n'est pas un cœur » (carreau, trèfle ou pique). $P(\\overline{C}) = 1 - \\frac{1}{4} = \\frac{3}{4}$.`
    },
    {
      id: "2S2-ds-10",
      title: "En retard au lycée ?",
      difficulty: 2,
      points: 5,
      statement: `Chaque matin, Samia va au lycée en bus avec une probabilité de $0{,}7$, et à vélo sinon. Lorsqu'elle prend le bus, elle arrive en retard avec une probabilité de $0{,}2$ ; à vélo, elle arrive en retard avec une probabilité de $0{,}05$.

On choisit un matin au hasard et on note $B$ l'événement « Samia prend le bus », $V$ l'événement « Samia prend son vélo » et $R$ l'événement « Samia arrive en retard ».

1. Construire un arbre pondéré décrivant la situation.
2. Calculer $P(B \\cap R)$ et interpréter ce nombre.
3. Montrer que $P(R) = 0{,}155$.
4. Un matin, Samia est arrivée en retard. Quelle est la probabilité qu'elle ait pris le bus ? Arrondir au centième.
5. Sur une année de $180$ jours de cours, combien de retards peut-on prévoir en moyenne ?`,
      solution: `**1.** Premier niveau : $P(B) = 0{,}7$ et $P(V) = 0{,}3$. Second niveau :
- après $B$ : $P_B(R) = 0{,}2$ et $P_B(\\overline{R}) = 0{,}8$ ;
- après $V$ : $P_V(R) = 0{,}05$ et $P_V(\\overline{R}) = 0{,}95$.

**2.** $P(B \\cap R) = P(B) \\times P_B(R) = 0{,}7 \\times 0{,}2 = 0{,}14$ : la probabilité que Samia prenne le bus **et** arrive en retard est $0{,}14$.

**3.** $B$ et $V$ forment une partition (l'un ou l'autre, jamais les deux) :
$$P(R) = P(B \\cap R) + P(V \\cap R) = 0{,}14 + 0{,}3 \\times 0{,}05 = 0{,}14 + 0{,}015 = 0{,}155.$$

**4.** On cherche $P_R(B) = \\frac{P(B \\cap R)}{P(R)} = \\frac{0{,}14}{0{,}155} \\approx 0{,}90$.

Quand Samia est en retard, c'est dans environ $90\\,\\%$ des cas un jour où elle a pris le bus.

**5.** $180 \\times 0{,}155 = 27{,}9$ : on peut prévoir environ $28$ retards sur l'année.`
    },
    {
      id: "2S2-ds-11",
      title: "Un détecteur de pannes et ses fausses alertes",
      difficulty: 3,
      points: 6,
      statement: `Une usine fabrique des circuits électroniques. $1\\,\\%$ des circuits sont défectueux. Un détecteur automatique déclenche une alerte pour $98\\,\\%$ des circuits défectueux, mais aussi pour $4\\,\\%$ des circuits non défectueux.

On choisit un circuit au hasard ; on note $D$ l'événement « le circuit est défectueux » et $A$ l'événement « le détecteur déclenche une alerte ».

1. Recopier et compléter le tableau d'effectifs suivant, établi pour $10\\,000$ circuits.

| | $A$ | $\\overline{A}$ | Total |
|---|---|---|---|
| $D$ | | | |
| $\\overline{D}$ | | | |
| Total | | | $10\\,000$ |

2. Calculer $P(A)$.
3. Le détecteur déclenche une alerte. Calculer la probabilité que le circuit soit réellement défectueux (arrondir au centième). Commenter ce résultat.
4. Calculer $P_{\\overline{A}}(D)$, probabilité qu'un circuit sans alerte soit défectueux (arrondir à $10^{-4}$). Le détecteur est-il utile ?
5. Le responsable propose de faire passer une seconde fois dans le détecteur les circuits ayant déclenché une alerte. On admet que le second passage a les mêmes caractéristiques que le premier et se fait de manière indépendante. Parmi les $10\\,000$ circuits, combien d'entre eux déclencheront en moyenne deux alertes, et quelle proportion de ceux-ci seront défectueux ?`,
      solution: `**1.** $D$ : $1\\,\\%$ de $10\\,000$, soit $100$ circuits, dont $98$ avec alerte. $\\overline{D}$ : $9\\,900$ circuits, dont $4\\,\\%$, soit $396$, avec alerte.

| | $A$ | $\\overline{A}$ | Total |
|---|---|---|---|
| $D$ | $98$ | $2$ | $100$ |
| $\\overline{D}$ | $396$ | $9\\,504$ | $9\\,900$ |
| Total | $494$ | $9\\,506$ | $10\\,000$ |

**2.** $P(A) = \\frac{494}{10\\,000} = 0{,}0494$.

**3.** $P_A(D) = \\frac{98}{494} \\approx 0{,}20$.

Seulement $20\\,\\%$ environ des alertes concernent un circuit défectueux : $4$ alertes sur $5$ sont de **fausses alertes**. Cela vient du fait que les circuits défectueux sont rares : $4\\,\\%$ d'un très grand nombre de circuits sains ($396$) dépasse largement $98\\,\\%$ d'un petit nombre de circuits défectueux ($98$).

**4.** $P_{\\overline{A}}(D) = \\frac{2}{9\\,506} \\approx 0{,}0002$.

Le détecteur est utile : sans alerte, le risque qu'un circuit soit défectueux passe de $1\\,\\%$ à environ $0{,}02\\,\\%$. Il permet d'écarter les circuits sûrs, mais une alerte doit être confirmée.

**5.** Parmi les $98$ circuits défectueux ayant déclenché une alerte, en moyenne $98\\,\\%$, soit $98 \\times 0{,}98 \\approx 96$, en déclenchent une seconde. Parmi les $396$ circuits sains avec alerte, $4\\,\\%$, soit $396 \\times 0{,}04 \\approx 15{,}8$, en déclenchent une seconde.

Environ $96 + 16 = 112$ circuits déclenchent deux alertes, et la proportion de défectueux parmi eux est $\\frac{96{,}04}{96{,}04 + 15{,}84} \\approx 0{,}86$, soit environ $86\\,\\%$ : le double contrôle rend l'alerte beaucoup plus fiable.`
    },
    {
      id: "2S2-ds-12",
      title: "Trois dés qui se battent en rond",
      difficulty: 4,
      points: 7,
      statement: `On dispose de trois dés équilibrés à six faces, de couleurs différentes :
- le dé rouge porte les nombres $2$ ; $2$ ; $4$ ; $4$ ; $9$ ; $9$ ;
- le dé vert porte les nombres $1$ ; $1$ ; $6$ ; $6$ ; $8$ ; $8$ ;
- le dé bleu porte les nombres $3$ ; $3$ ; $5$ ; $5$ ; $7$ ; $7$.

Deux joueurs choisissent chacun un dé différent et le lancent ; celui qui obtient le plus grand nombre gagne.

1. Justifier que, pour chaque dé, chacune des trois valeurs inscrites a une probabilité $\\frac{1}{3}$ d'apparaître. Calculer la moyenne des six nombres de chaque dé. Que constate-t-on ?
2. On lance le dé rouge et le dé vert.
 a) Construire un tableau à double entrée de $3 \\times 3$ cases indiquant, pour chaque couple de valeurs, le dé gagnant. Les égalités sont-elles possibles ?
 b) Justifier que les $9$ couples sont équiprobables, puis calculer la probabilité que le dé rouge gagne.
3. Calculer de même la probabilité que le dé vert batte le dé bleu, puis celle que le dé bleu batte le dé rouge.
4. Paul dit : « Je laisse mon adversaire choisir son dé en premier, puis je choisis le mien. » Expliquer pourquoi cette stratégie est avantageuse pour Paul.`,
      solution: `**1.** Chaque valeur figure sur $2$ faces sur $6$, et les faces sont équiprobables : chaque valeur a une probabilité $\\frac{2}{6} = \\frac{1}{3}$.

Moyennes : rouge $\\frac{2 + 4 + 9}{3} = 5$ ; vert $\\frac{1 + 6 + 8}{3} = 5$ ; bleu $\\frac{3 + 5 + 7}{3} = 5$. Les trois dés ont la même moyenne : elle ne permet pas de les départager.

**2. a)** (R = rouge gagne, V = vert gagne)

| rouge (lignes), vert (colonnes) | $1$ | $6$ | $8$ |
|---|---|---|---|
| $2$ | R | V | V |
| $4$ | R | V | V |
| $9$ | R | R | R |

Aucune valeur n'est commune aux deux dés : il n'y a jamais d'égalité.

**b)** Les deux dés sont lancés indépendamment et chaque valeur a la probabilité $\\frac{1}{3}$ : chaque couple a la probabilité $\\frac{1}{3} \\times \\frac{1}{3} = \\frac{1}{9}$ (ou : les $36$ couples de faces sont équiprobables et chaque case regroupe $2 \\times 2 = 4$ d'entre eux). Le rouge gagne dans $5$ cases :
$$P(\\text{rouge bat vert}) = \\frac{5}{9}.$$

**3.** Vert contre bleu : le vert gagne avec $6$ contre $3$ ou $5$ ($2$ cases) et avec $8$ contre tout ($3$ cases), soit $5$ cases : $P = \\frac{5}{9}$.

Bleu contre rouge : le bleu gagne avec $3$ contre $2$ ($1$ case), avec $5$ contre $2$ ou $4$ ($2$ cases), avec $7$ contre $2$ ou $4$ ($2$ cases), soit $5$ cases : $P = \\frac{5}{9}$.

**4.** Le rouge bat le vert, le vert bat le bleu et le bleu bat le rouge, chaque fois avec une probabilité $\\frac{5}{9} > \\frac{1}{2}$ : aucun dé n'est « le meilleur ». Quel que soit le dé choisi par l'adversaire, Paul peut choisir un dé qui le bat avec une probabilité $\\frac{5}{9}$ (bleu contre rouge, rouge contre vert, vert contre bleu). Il a donc l'avantage en choisissant en second.`
    }
  ],
  "2S3": [
    {
      id: "2S3-ds-01",
      title: "Lancers d'une punaise et loi des grands nombres",
      difficulty: 1,
      points: 4,
      statement: `Une punaise lancée peut tomber sur la pointe (événement $P$) ou sur le dos. On a regroupé les résultats de lancers successifs :

| Nombre de lancers $n$ | $10$ | $100$ | $1\\,000$ | $10\\,000$ |
|---|---|---|---|---|
| Nombre de « $P$ » | $7$ | $58$ | $623$ | $6\\,180$ |

1. Calculer la fréquence de l'événement $P$ pour chaque valeur de $n$.
2. Décrire l'évolution de ces fréquences lorsque $n$ augmente. Quel résultat du cours illustre-t-on ?
3. Proposer un modèle : quelle probabilité choisir pour l'événement $P$ ? Pour son événement contraire ?
4. Un élève affirme : « on a démontré que la probabilité de $P$ vaut $0{,}618$ ». Commenter.`,
      solution: `**1.** Les fréquences sont $\\frac{7}{10} = 0{,}7$ ; $\\frac{58}{100} = 0{,}58$ ; $\\frac{623}{1\\,000} = 0{,}623$ ; $\\frac{6\\,180}{10\\,000} = 0{,}618$.

**2.** Pour de petites valeurs de $n$, la fréquence varie beaucoup ; quand $n$ augmente, elle se stabilise autour de $0{,}62$. On illustre la **loi des grands nombres** : « lorsque $n$ est grand, sauf exception, la fréquence observée est proche de la probabilité ».

**3.** On peut choisir le modèle $P(P) = 0{,}62$ ; l'événement contraire « la punaise tombe sur le dos » a alors pour probabilité $1 - 0{,}62 = 0{,}38$.

**4.** L'affirmation est fausse : une probabilité ne se démontre pas à partir d'une expérience. Le modèle est une **hypothèse** construite à partir des fréquences observées ; une autre série de $10\\,000$ lancers donnerait une fréquence légèrement différente (fluctuation d'échantillonnage). On distingue le modèle probabiliste de la situation réelle.`
    },
    {
      id: "2S3-ds-02",
      title: "Lire un programme de simulation",
      difficulty: 1,
      points: 4,
      statement: `On considère la fonction Python suivante :

\`\`\`python
from random import randint

def frequence_six(n):
    compteur = 0
    for i in range(n):
        de = randint(1, 6)
        if de == 6:
            compteur = compteur + 1
    return compteur / n
\`\`\`

1. Que fait l'instruction \`randint(1, 6)\` ?
2. Combien de fois la boucle est-elle exécutée lors de l'appel \`frequence_six(500)\` ?
3. Que représente la variable \`compteur\` à la fin de la boucle ? Que renvoie la fonction ?
4. Un élève exécute \`frequence_six(10)\` et obtient \`0.4\`. Le dé est-il truqué ? Et s'il obtient \`0.4\` avec \`frequence_six(10000)\` ?
5. Modifier la fonction pour qu'elle renvoie la fréquence des résultats pairs.`,
      solution: `**1.** \`randint(1, 6)\` renvoie un entier aléatoire entre $1$ et $6$ (inclus), chaque valeur ayant la même probabilité : cela simule le lancer d'un dé équilibré.

**2.** \`range(n)\` parcourt les entiers de $0$ à $n - 1$ : la boucle est exécutée $500$ fois.

**3.** \`compteur\` est le nombre de $6$ obtenus en $n$ lancers. La fonction renvoie \`compteur / n\`, la **fréquence d'apparition du $6$**.

**4.** Avec $10$ lancers, obtenir $4$ fois le $6$ est tout à fait possible avec un dé équilibré : sur un si petit échantillon, la fluctuation est grande. On ne peut rien conclure.
Avec $10\\,000$ lancers, la fréquence devrait être proche de $\\frac{1}{6} \\approx 0{,}167$ (loi des grands nombres), l'écart avec $\\frac{1}{6}$ étant alors le plus souvent de l'ordre du centième. Une fréquence de $0{,}4$ est alors très improbable : c'est la simulation (le programme) qui serait en cause. *(Pour un vrai dé, on conclurait qu'il est truqué.)*

**5.** On remplace le test par \`if de % 2 == 0:\` (le reste de la division par $2$ est nul pour un nombre pair). On peut renommer la fonction \`frequence_pair\`.`
    },
    {
      id: "2S3-ds-03",
      title: "Un jeu à gratter simulé",
      difficulty: 2,
      points: 5,
      statement: `Une société affirme qu'un ticket de son jeu à gratter sur quatre est gagnant. Pour étudier ce modèle, on écrit en Python :

\`\`\`python
from random import random

def ticket():
    if random() < 0.25:
        return 1
    return 0

def gagnants(n):
    s = 0
    for i in range(n):
        s = s + ticket()
    return s
\`\`\`

1. Que renvoie \`ticket()\` ? Avec quelle probabilité renvoie-t-elle $1$ ? Justifier.
2. Que représente le nombre renvoyé par \`gagnants(n)\` ?
3. Écrire une fonction \`frequence(n)\` qui renvoie la fréquence des tickets gagnants parmi $n$ tickets simulés.
4. Trois appels \`frequence(100)\` donnent $0{,}21$, $0{,}27$ et $0{,}31$ ; trois appels \`frequence(10000)\` donnent $0{,}2487$, $0{,}2524$ et $0{,}2509$. Commenter.
5. Une association achète $10\\,000$ vrais tickets et en trouve $1\\,600$ gagnants. Que peut-on penser de l'affirmation de la société ?`,
      solution: `**1.** \`random()\` renvoie un nombre aléatoire de $[0 ; 1[$, réparti uniformément. La fonction renvoie $1$ lorsque ce nombre est dans $[0 ; 0{,}25[$, ce qui arrive avec la probabilité $0{,}25$ (longueur de l'intervalle), et $0$ sinon : elle simule un ticket gagnant ($1$) ou perdant ($0$) dans le modèle de la société.

**2.** La boucle additionne les résultats de $n$ tickets simulés : \`gagnants(n)\` est le **nombre de tickets gagnants** parmi $n$ tickets.

**3.**
\`\`\`python
def frequence(n):
    return gagnants(n) / n
\`\`\`

**4.** Avec $100$ tickets, les fréquences varient sensiblement d'une simulation à l'autre : c'est la **fluctuation d'échantillonnage**. Avec $10\\,000$ tickets, elles sont toutes très proches de $0{,}25$ : c'est la **loi des grands nombres**.

**5.** La fréquence observée vaut $\\frac{1\\,600}{10\\,000} = 0{,}16$. Or, dans le modèle de la société, les simulations de $10\\,000$ tickets donnent des fréquences qui ne s'écartent de $0{,}25$ que de quelques millièmes. Un écart de $0{,}09$ est donc très improbable si l'affirmation est vraie : on peut fortement douter de l'affirmation de la société (sans que ce soit une preuve absolue).`
    },
    {
      id: "2S3-ds-04",
      title: "Somme de deux dés : modèle et simulation",
      difficulty: 2,
      points: 5,
      statement: `On lance deux dés équilibrés et on note $S$ la somme des deux faces obtenues.

1. À l'aide d'un tableau à double entrée, déterminer $P(S = 7)$ et $P(S = 2)$.
2. Compléter la fonction suivante pour qu'elle renvoie la somme des deux dés :
\`\`\`python
from random import randint

def somme_des():
    return ...
\`\`\`
3. Écrire une fonction \`frequence_sept(n)\` qui simule $n$ lancers des deux dés et renvoie la fréquence des sommes égales à $7$.
4. On obtient $0{,}21$ pour $n = 100$, $0{,}172$ pour $n = 1\\,000$ et $0{,}1663$ pour $n = 100\\,000$. Interpréter ces résultats et les comparer à la question 1.
5. Un élève affirme : « les sommes possibles sont $2, 3, \\dots, 12$, soit $11$ valeurs, donc $P(S = 7) = \\frac{1}{11}$ ». Expliquer son erreur.`,
      solution: `**1.** Le tableau à double entrée contient $36$ couples équiprobables. $S = 7$ pour $(1;6)$, $(2;5)$, $(3;4)$, $(4;3)$, $(5;2)$, $(6;1)$, soit $6$ couples : $P(S = 7) = \\frac{6}{36} = \\frac{1}{6}$. $S = 2$ seulement pour $(1;1)$ : $P(S = 2) = \\frac{1}{36}$.

**2.** \`return randint(1, 6) + randint(1, 6)\` (chaque appel à \`randint(1, 6)\` simule un dé).

**3.**
\`\`\`python
def frequence_sept(n):
    c = 0
    for i in range(n):
        if somme_des() == 7:
            c = c + 1
    return c / n
\`\`\`

**4.** Les fréquences fluctuent, mais de moins en moins quand $n$ augmente, et se rapprochent de $\\frac{1}{6} \\approx 0{,}167$ : c'est la loi des grands nombres, en accord avec la probabilité calculée à la question 1.

**5.** Les $11$ sommes possibles ne sont **pas équiprobables** : la somme $7$ est obtenue par $6$ couples, la somme $2$ par un seul. La formule $\\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)}$ ne s'applique qu'avec des issues équiprobables, ici les $36$ couples.`
    },
    {
      id: "2S3-ds-05",
      title: "Simuler de nombreux échantillons",
      difficulty: 3,
      points: 6,
      statement: `On considère le programme Python suivant, où \`p\` est une proportion, \`n\` la taille d'un échantillon et \`N\` le nombre d'échantillons simulés.

\`\`\`python
from random import random
from math import sqrt

def frequence(p, n):
    succes = 0
    for i in range(n):
        if random() < p:
            succes = succes + 1
    return succes / n

def proportion_proches(p, n, N):
    bons = 0
    for k in range(N):
        f = frequence(p, n)
        if abs(f - p) <= 1 / sqrt(n):
            bons = bons + 1
    return bons / N
\`\`\`

1. Expliquer pourquoi le test \`random() < p\` simule un succès de probabilité \`p\`.
2. Que renvoie \`frequence(0.3, 100)\` ? Donner un ordre de grandeur du résultat attendu.
3. Que signifie la condition \`abs(f - p) <= 1 / sqrt(n)\` ? La traduire par l'appartenance de $f$ à un intervalle.
4. L'appel \`proportion_proches(0.3, 100, 1000)\` renvoie \`0.962\`. Interpréter ce résultat.
5. Est-il possible que cet appel renvoie \`0.90\` ? Est-ce probable ? Expliquer.`,
      solution: `**1.** \`random()\` renvoie un nombre aléatoire de $[0 ; 1[$, réparti uniformément : la probabilité qu'il soit inférieur à \`p\` est égale à la longueur de l'intervalle $[0 ; p[$, c'est-à-dire $p$.

**2.** La fonction simule $100$ expériences de probabilité de succès $0{,}3$ et renvoie la fréquence des succès. On s'attend à une valeur proche de $0{,}3$ (variant d'un appel à l'autre, le plus souvent entre $0{,}2$ et $0{,}4$).

**3.** \`abs(f - p)\` est la distance $|f - p|$. La condition $|f - p| \\leqslant \\frac{1}{\\sqrt{n}}$ équivaut à $f \\in \\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$ : la distance entre la fréquence observée et $p$ est au plus $\\frac{1}{\\sqrt{n}}$.

**4.** Sur $1\\,000$ échantillons de taille $100$, $96{,}2\\,\\%$ ont une fréquence dans l'intervalle $[0{,}2 ; 0{,}4]$. On observe ainsi qu'environ $95\\,\\%$ des échantillons de taille $100$ ont une fréquence à moins de $0{,}1$ de $p$ (ce résultat général, admis, est un approfondissement du programme de seconde).

**5.** C'est possible (le résultat est aléatoire), mais très peu probable : les simulations répétées montrent qu'environ $95\\,\\%$ au moins des échantillons vérifient la condition, et sur $1\\,000$ échantillons la proportion observée fluctue elle-même peu autour de sa valeur théorique. Une valeur de $0{,}90$ ferait plutôt soupçonner une erreur dans le programme.`
    },
    {
      id: "2S3-ds-06",
      title: "Répéter une expérience : trois lancers de pièce",
      difficulty: 3,
      points: 6,
      statement: `On lance trois fois une pièce équilibrée et on compte le nombre de « Pile ». On code Pile par $1$ et Face par $0$.

\`\`\`python
from random import randint

def nb_pile(n):
    c = 0
    for i in range(n):
        c = c + randint(0, 1)
    return c
\`\`\`

1. Expliquer pourquoi l'appel \`nb_pile(3)\` simule l'expérience.
2. À l'aide d'un arbre, écrire les $8$ issues équiprobables de l'expérience. En déduire la probabilité d'obtenir trois Pile, puis celle d'obtenir exactement deux Pile.
3. Écrire une fonction \`frequence_trois(N)\` qui répète $N$ fois l'expérience et renvoie la fréquence des répétitions donnant trois Pile.
4. L'appel \`frequence_trois(10000)\` renvoie $0{,}1262$. Ce résultat est-il cohérent avec la question 2 ?
5. On appelle \`nb_pile(3)\` un grand nombre de fois et on calcule la moyenne des résultats. Vers quelle valeur cette moyenne devrait-elle se stabiliser ? Justifier.`,
      solution: `**1.** \`randint(0, 1)\` renvoie $0$ ou $1$ avec la même probabilité $\\frac{1}{2}$ : c'est un lancer de pièce équilibrée. La boucle effectue $n$ lancers et \`c\` compte les Pile ; avec $n = 3$, on obtient le nombre de Pile en trois lancers.

**2.** Les issues sont $PPP$, $PPF$, $PFP$, $PFF$, $FPP$, $FPF$, $FFP$, $FFF$, chacune de probabilité $\\frac{1}{8}$. Trois Pile : $P = \\frac{1}{8} = 0{,}125$. Exactement deux Pile ($PPF$, $PFP$, $FPP$) : $P = \\frac{3}{8}$.

**3.**
\`\`\`python
def frequence_trois(N):
    k = 0
    for j in range(N):
        if nb_pile(3) == 3:
            k = k + 1
    return k / N
\`\`\`

**4.** Oui : $0{,}1262$ est très proche de $0{,}125$, ce qu'on attend pour $N = 10\\,000$ d'après la loi des grands nombres.

**5.** Sur un grand nombre de répétitions, les fréquences des résultats $0$, $1$, $2$, $3$ sont proches de leurs probabilités $\\frac{1}{8}$, $\\frac{3}{8}$, $\\frac{3}{8}$, $\\frac{1}{8}$. La moyenne, qui est la moyenne pondérée par ces fréquences, est donc proche de
$$0 \\times \\frac{1}{8} + 1 \\times \\frac{3}{8} + 2 \\times \\frac{3}{8} + 3 \\times \\frac{1}{8} = \\frac{12}{8} = 1{,}5.$$`
    },
    {
      id: "2S3-ds-07",
      title: "Attendre le premier six",
      difficulty: 4,
      points: 7,
      statement: `On s'intéresse au nombre de lancers d'un dé équilibré nécessaires pour obtenir un $6$ pour la première fois.

\`\`\`python
from random import randint

def attente():
    nb = 1
    while randint(1, 6) != 6:
        nb = nb + 1
    return nb

def moyenne_attente(N):
    total = 0
    for k in range(N):
        total = total + attente()
    return total / N
\`\`\`

1. Pourquoi utilise-t-on une boucle \`while\` et non une boucle \`for\` dans la fonction \`attente\` ?
2. Que renvoie \`attente()\` si les lancers successifs donnent $3$, $5$, $1$, $6$ ? Si le premier lancer donne $6$ ?
3. Quelle est la probabilité que \`attente()\` renvoie $1$ ? Que l'on ait besoin de plus de $2$ lancers (c'est-à-dire que les deux premiers lancers ne donnent pas $6$) ?
4. Que calcule \`moyenne_attente(N)\` ?
5. Trois appels à \`moyenne_attente(10000)\` donnent \`5.97\`, \`6.04\` et \`6.01\`. Formuler une conjecture et expliquer pourquoi les trois résultats sont différents mais proches.
6. Écrire une fonction \`proportion_longue(N)\` qui simule $N$ attentes et renvoie la fréquence des attentes strictement supérieures à $10$ lancers.`,
      solution: `**1.** On ne connaît pas à l'avance le nombre de lancers nécessaires : on répète **tant que** le $6$ n'est pas sorti. C'est le rôle d'une boucle non bornée \`while\`.

**2.** Lancers $3, 5, 1, 6$ : \`nb\` vaut $1$ au départ, puis $2$, $3$, $4$ après les trois échecs ; le quatrième lancer donne $6$, la boucle s'arrête : la fonction renvoie $4$.
Si le premier lancer donne $6$, la condition est fausse dès le départ : la fonction renvoie $1$.

**3.** $P(\\text{renvoie } 1) = \\frac{1}{6}$.
Il faut plus de $2$ lancers si les deux premiers ne donnent pas $6$ : sur les $36$ couples équiprobables, $5 \\times 5 = 25$ ne contiennent pas de $6$, d'où une probabilité $\\frac{25}{36} \\approx 0{,}69$.

**4.** Elle simule $N$ attentes et renvoie la **moyenne** des nombres de lancers obtenus.

**5.** On conjecture que le nombre moyen de lancers nécessaires est $6$ (ce qui est cohérent avec une probabilité $\\frac{1}{6}$ à chaque lancer). Les résultats diffèrent car ils sont aléatoires (fluctuation d'échantillonnage) ; ils sont proches car $N = 10\\,000$ est grand : la moyenne observée se stabilise (loi des grands nombres).

**6.**
\`\`\`python
def proportion_longue(N):
    compteur = 0
    for k in range(N):
        if attente() > 10:
            compteur = compteur + 1
    return compteur / N
\`\`\`
*(On obtiendrait environ $0{,}16$, car $\\left(\\frac{5}{6}\\right)^{10} \\approx 0{,}16$.)*`
    },
    {
      id: "2S3-ds-08",
      title: "Sondages simulés et fluctuation d'échantillonnage",
      difficulty: 4,
      points: 6,
      statement: `Dans une grande ville, $52\\,\\%$ des électeurs sont favorables à la construction d'une piscine. On simule des sondages auprès de $n$ électeurs choisis au hasard :

\`\`\`python
from random import random

def sondage(n, p):
    oui = 0
    for i in range(n):
        if random() < p:
            oui = oui + 1
    return oui / n

def ecart_max(N, n, p):
    m = 0
    for k in range(N):
        e = abs(sondage(n, p) - p)
        if e > m:
            m = e
    return m
\`\`\`

1. Que renvoie \`sondage(1000, 0.52)\` ? Cinq appels donnent $0{,}507$ ; $0{,}534$ ; $0{,}522$ ; $0{,}498$ ; $0{,}529$. Pourquoi ces résultats sont-ils différents ?
2. Que calcule la fonction \`ecart_max(N, n, p)\` ? Quel est le rôle de la variable \`m\` ?
3. On obtient \`ecart_max(100, 100, 0.52)\` $\\approx 0{,}13$ et \`ecart_max(100, 10000, 0.52)\` $\\approx 0{,}013$. Interpréter.
4. L'un des cinq sondages de la question 1 indique une majorité d'opposants. Est-ce surprenant ? Que faut-il en retenir pour la lecture d'un sondage ?
5. Un véritable sondage auprès de $1\\,000$ électeurs donne une fréquence de $0{,}43$. En s'appuyant sur les simulations, ce résultat paraît-il compatible avec une proportion réelle de $52\\,\\%$ ?`,
      solution: `**1.** \`sondage(1000, 0.52)\` renvoie la fréquence des réponses favorables dans un échantillon simulé de $1\\,000$ électeurs, chacun étant favorable avec la probabilité $0{,}52$. Les résultats sont aléatoires et varient d'un échantillon à l'autre : c'est la **fluctuation d'échantillonnage**.

**2.** La fonction simule $N$ sondages de taille $n$ ; pour chacun, elle calcule la distance $|f - p|$ entre la fréquence obtenue et $p$. La variable \`m\` conserve la plus grande distance rencontrée : la fonction renvoie le **plus grand écart** observé sur les $N$ sondages.

**3.** Sur $100$ sondages de $100$ personnes, la fréquence s'est écartée de $0{,}52$ jusqu'à environ $0{,}13$ ; avec $10\\,000$ personnes, l'écart maximal n'est que d'environ $0{,}013$. Plus l'échantillon est grand, plus la fréquence observée est proche de la proportion réelle (loi des grands nombres) : la fluctuation diminue.

**4.** Ce n'est pas surprenant : avec $1\\,000$ personnes, des écarts de deux ou trois centièmes autour de $0{,}52$ sont fréquents (les cinq simulations vont de $0{,}498$ à $0{,}534$), et $0{,}498$ est juste en dessous de $0{,}5$. Un sondage fournit une **estimation** de la proportion, pas sa valeur exacte : une faible majorité peut apparaître inversée.

**5.** L'écart vaut $0{,}52 - 0{,}43 = 0{,}09$, bien plus grand que les écarts observés dans les simulations de sondages de $1\\,000$ personnes (quelques centièmes). Un tel résultat est donc très improbable si la proportion réelle est $52\\,\\%$ : on peut douter de cette proportion (ou de la façon dont l'échantillon a été constitué).`
    },
    {
      id: "2S3-ds-09",
      title: "Fréquences de Pile sur plusieurs échantillons",
      difficulty: 1,
      points: 4,
      statement: `Cinq élèves lancent chacun $50$ fois une pièce équilibrée et notent le nombre de « Pile » obtenus :

| Élève | Adam | Bilal | Chloé | Dina | Emma |
|---|---|---|---|---|---|
| Nombre de Pile | $27$ | $22$ | $25$ | $30$ | $24$ |

1. Calculer la fréquence de Pile obtenue par chaque élève.
2. Les fréquences sont différentes d'un élève à l'autre, alors que la pièce est la même. Comment s'appelle ce phénomène ?
3. Calculer la fréquence de Pile sur l'ensemble des $250$ lancers.
4. Dina pense que la pièce est truquée en faveur de Pile. Que peut-on lui répondre ? Que faudrait-il faire pour mieux estimer la probabilité d'obtenir Pile ?`,
      solution: `**1.** Les fréquences sont $\\frac{27}{50} = 0{,}54$ ; $\\frac{22}{50} = 0{,}44$ ; $\\frac{25}{50} = 0{,}5$ ; $\\frac{30}{50} = 0{,}6$ ; $\\frac{24}{50} = 0{,}48$.

**2.** C'est la **fluctuation d'échantillonnage** : d'un échantillon à l'autre, la fréquence observée varie, même si l'expérience est la même.

**3.** $27 + 22 + 25 + 30 + 24 = 128$, donc $f = \\frac{128}{250} = 0{,}512$.

**4.** La fréquence $0{,}6$ de Dina n'est qu'un résultat sur $50$ lancers ; avec si peu de lancers, une fréquence assez éloignée de $0{,}5$ n'a rien d'exceptionnel. Sur les $250$ lancers, la fréquence $0{,}512$ est proche de $0{,}5$.

D'après la loi des grands nombres, plus le nombre de lancers est grand, plus la fréquence observée a tendance à se rapprocher de la probabilité. Pour mieux estimer la probabilité de Pile, il faut augmenter nettement le nombre de lancers de cette pièce (plusieurs milliers).`
    },
    {
      id: "2S3-ds-10",
      title: "Simuler un tirage dans une urne",
      difficulty: 2,
      points: 5,
      statement: `Une urne contient $3$ boules rouges et $7$ boules noires indiscernables au toucher. On considère le programme Python suivant :

\`\`\`python
from random import randint

def tirage():
    b = randint(1, 10)
    if b <= 3:
        return 1
    else:
        return 0

def frequence(n):
    s = 0
    for k in range(n):
        s = s + tirage()
    return s / n
\`\`\`

On rappelle que \`randint(1, 10)\` renvoie un entier aléatoire de $1$ à $10$, chacun ayant la même probabilité.

1. Expliquer pourquoi la fonction \`tirage\` simule le tirage d'une boule dans l'urne. Que signifie la valeur renvoyée ? Avec quelle probabilité renvoie-t-elle \`1\` ?
2. Que représente la variable \`s\` à la fin de la boucle ? Que renvoie \`frequence(n)\` ?
3. Un élève obtient \`frequence(20)\` $= 0{,}45$ puis \`frequence(10000)\` $= 0{,}2987$. Commenter ces résultats.
4. Modifier la fonction \`tirage\` pour simuler le tirage d'une boule dans une urne contenant $4$ boules rouges et $11$ boules noires.`,
      solution: `**1.** On numérote les boules de $1$ à $10$ : les numéros $1$, $2$, $3$ représentent les boules rouges, les autres les noires. \`randint(1, 10)\` choisit un numéro au hasard, comme on tire une boule au hasard. La fonction renvoie \`1\` si la boule est rouge, \`0\` si elle est noire.

Elle renvoie \`1\` avec la probabilité $\\frac{3}{10} = 0{,}3$.

**2.** À chaque passage dans la boucle, on ajoute \`1\` à \`s\` si la boule est rouge et \`0\` sinon : à la fin, \`s\` est le **nombre de boules rouges** obtenues sur les \`n\` tirages (avec remise). \`frequence(n)\` renvoie donc la fréquence d'apparition d'une boule rouge sur \`n\` tirages.

**3.** Sur $20$ tirages, la fréquence $0{,}45$ est assez éloignée de $0{,}3$ : c'est la fluctuation d'échantillonnage, importante pour un petit échantillon. Sur $10\\,000$ tirages, la fréquence $0{,}2987$ est très proche de $0{,}3$, conformément à la loi des grands nombres.

**4.**
\`\`\`python
def tirage():
    b = randint(1, 15)
    if b <= 4:
        return 1
    else:
        return 0
\`\`\`
Il y a $15$ boules, numérotées de $1$ à $15$ ; les numéros $1$ à $4$ représentent les rouges.`
    },
    {
      id: "2S3-ds-11",
      title: "Le taux de pièces défectueuses annoncé est-il crédible ?",
      difficulty: 3,
      points: 6,
      statement: `Un fabricant affirme que $10\\,\\%$ des ampoules qu'il produit sont défectueuses. On admet que, pour un échantillon de taille $n$ prélevé au hasard, la fréquence $f$ d'ampoules défectueuses appartient, dans au moins $95\\,\\%$ des cas, à l'intervalle $\\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$, où $p$ est la proportion réelle.

1. Un contrôleur prélève $400$ ampoules et en trouve $52$ défectueuses.
 a) Calculer la fréquence observée.
 b) Déterminer l'intervalle ci-dessus pour $p = 0{,}1$ et $n = 400$. Le résultat remet-il en cause l'affirmation du fabricant ?
2. Un second contrôle porte sur $2\\,500$ ampoules, dont $325$ défectueuses. Reprendre la question 1. Que peut-on en conclure ?
3. On souhaite vérifier par simulation la propriété admise pour $n = 400$ et $p = 0{,}1$. Compléter la fonction suivante pour qu'elle renvoie la proportion des \`N\` échantillons simulés dont la fréquence est dans l'intervalle.

\`\`\`python
from random import random

def echantillon(n, p):
    nb = 0
    for i in range(n):
        if random() < p:
            nb = nb + 1
    return nb / n

def proportion_dans_intervalle(N):
    compteur = 0
    for k in range(N):
        f = echantillon(400, 0.1)
        if ............ :
            compteur = compteur + 1
    return ............
\`\`\``,
      solution: `**1. a)** $f = \\frac{52}{400} = 0{,}13$.

**b)** $\\frac{1}{\\sqrt{400}} = \\frac{1}{20} = 0{,}05$ : l'intervalle est $[0{,}1 - 0{,}05 ; 0{,}1 + 0{,}05] = [0{,}05 ; 0{,}15]$.

$0{,}13 \\in [0{,}05 ; 0{,}15]$ : la fréquence observée est compatible avec la fluctuation d'échantillonnage, ce contrôle ne remet pas en cause l'affirmation du fabricant.

**2.** $f = \\frac{325}{2\\,500} = 0{,}13$ et $\\frac{1}{\\sqrt{2\\,500}} = \\frac{1}{50} = 0{,}02$ : l'intervalle est $[0{,}08 ; 0{,}12]$.

Cette fois $0{,}13 \\notin [0{,}08 ; 0{,}12]$. Si la proportion était vraiment $10\\,\\%$, une telle fréquence se produirait dans moins de $5\\,\\%$ des échantillons de cette taille : on peut raisonnablement **douter** de l'affirmation du fabricant (avec un faible risque de se tromper).

Avec la même fréquence $0{,}13$, l'échantillon plus grand est plus précis : la fluctuation diminue quand $n$ augmente.

**3.**
\`\`\`python
        if 0.05 <= f <= 0.15 :
            compteur = compteur + 1
    return compteur / N
\`\`\`
(on peut aussi écrire \`abs(f - 0.1) <= 0.05\`). Pour \`N\` grand, la valeur renvoyée devrait être supérieure ou égale à $0{,}95$ environ.`
    },
    {
      id: "2S3-ds-12",
      title: "Une marche aléatoire sur une droite",
      difficulty: 4,
      points: 7,
      statement: `Un pion est placé sur l'origine d'une droite graduée. À chaque étape, on lance une pièce équilibrée : sur Pile, le pion avance de $1$ ; sur Face, il recule de $1$. La fonction Python suivante simule $n$ étapes et renvoie la position finale du pion.

\`\`\`python
from random import randint

def marche(n):
    x = 0
    for i in range(n):
        if randint(0, 1) == 1:
            x = x + 1
        else:
            x = x - 1
    return x
\`\`\`

1. Quelles sont les valeurs possibles de \`marche(2)\` ? À l'aide d'un arbre, donner la probabilité de chacune.
2. Même question pour \`marche(3)\`.
3. Expliquer pourquoi la position finale après $n$ étapes a toujours la même parité que $n$.
4. Écrire une fonction \`freq_retour(n, N)\` qui simule \`N\` marches de \`n\` étapes et renvoie la fréquence des marches qui se terminent à l'origine.
5. a) Montrer que la probabilité que le pion soit à l'origine après $4$ étapes est $\\frac{6}{16} = 0{,}375$.
 b) Un élève obtient \`freq_retour(4, 10000)\` $= 0{,}31$. En utilisant le fait que, pour un échantillon de taille $N$, la fréquence s'écarte de la probabilité de plus de $\\frac{1}{\\sqrt{N}}$ dans moins de $5\\,\\%$ des cas, expliquer pourquoi on peut soupçonner une erreur dans son programme.`,
      solution: `**1.** Les quatre issues (Pile, Pile), (Pile, Face), (Face, Pile), (Face, Face) sont équiprobables (probabilité $\\frac{1}{4}$ chacune) et donnent les positions $2$ ; $0$ ; $0$ ; $-2$.

$P(X = -2) = \\frac{1}{4}$, $P(X = 0) = \\frac{2}{4} = \\frac{1}{2}$, $P(X = 2) = \\frac{1}{4}$.

**2.** $8$ issues équiprobables. La position vaut (nombre de Pile) $-$ (nombre de Face) :
- $3$ Pile : position $3$, $1$ issue ;
- $2$ Pile : position $1$, $3$ issues ;
- $1$ Pile : position $-1$, $3$ issues ;
- $0$ Pile : position $-3$, $1$ issue.

$P(X = -3) = P(X = 3) = \\frac{1}{8}$ et $P(X = -1) = P(X = 1) = \\frac{3}{8}$.

**3.** Si on obtient $k$ Pile et $n - k$ Face, la position est $k - (n - k) = 2k - n$. Or $2k - n$ et $n$ diffèrent de $2k$, qui est pair : ils ont la même parité.

**4.**
\`\`\`python
def freq_retour(n, N):
    c = 0
    for j in range(N):
        if marche(n) == 0:
            c = c + 1
    return c / N
\`\`\`

**5. a)** Il y a $2^4 = 16$ issues équiprobables. Le pion est à l'origine si et seulement s'il y a $2$ Pile et $2$ Face. Les issues correspondantes sont PPFF, PFPF, PFFP, FPPF, FPFP, FFPP, soit $6$ issues : $P = \\frac{6}{16} = 0{,}375$.

**b)** Pour $N = 10\\,000$, $\\frac{1}{\\sqrt{N}} = 0{,}01$. Dans au moins $95\\,\\%$ des cas, la fréquence devrait être dans $[0{,}365 ; 0{,}385]$. La valeur $0{,}31$ en est très éloignée (écart de $0{,}065$, plus de six fois $0{,}01$) : un tel résultat est extrêmement improbable si le programme est correct. On peut donc soupçonner une erreur dans le programme.`
    }
  ],
  "2S4": [
    {
      id: "2S4-ds-01",
      title: "Suivre l'évolution des variables",
      difficulty: 1,
      points: 4,
      statement: `On considère le programme Python suivant :

\`\`\`python
a = 3
b = 5
a = a + b
b = a - b
a = a - b
print(a, b)
\`\`\`

1. Recopier et compléter le tableau donnant les valeurs de \`a\` et \`b\` après chaque ligne.

| Ligne | \`a\` | \`b\` |
|---|---|---|
| \`a = 3\` | | |
| \`b = 5\` | | |
| \`a = a + b\` | | |
| \`b = a - b\` | | |
| \`a = a - b\` | | |

2. Qu'affiche le programme ? Quel est le rôle de ce programme ?
3. Reprendre le programme avec, au départ, \`a = x\` et \`b = y\` ($x$ et $y$ réels quelconques) et démontrer le résultat conjecturé.
4. Proposer une autre façon d'obtenir le même résultat en utilisant une troisième variable \`c\`.`,
      solution: `**1.**

| Ligne | \`a\` | \`b\` |
|---|---|---|
| \`a = 3\` | $3$ | — |
| \`b = 5\` | $3$ | $5$ |
| \`a = a + b\` | $8$ | $5$ |
| \`b = a - b\` | $8$ | $3$ |
| \`a = a - b\` | $5$ | $3$ |

**2.** Le programme affiche \`5 3\` : il **échange** les valeurs de \`a\` et \`b\`.

**3.** Après \`a = a + b\` : $a = x + y$, $b = y$. Après \`b = a - b\` : $b = (x + y) - y = x$. Après \`a = a - b\` : $a = (x + y) - x = y$. On a bien $a = y$ et $b = x$.

**4.**
\`\`\`python
c = a
a = b
b = c
\`\`\`
(En Python, on peut aussi écrire \`a, b = b, a\`.)`
    },
    {
      id: "2S4-ds-02",
      title: "Instructions conditionnelles : un tarif de cinéma",
      difficulty: 1,
      points: 4,
      statement: `Un cinéma applique les tarifs suivants : $5$ € pour les moins de $14$ ans, $7{,}50$ € de $14$ à $25$ ans inclus, $10$ € au-delà, sauf à partir de $65$ ans où le tarif est de $8$ €.

On propose la fonction suivante :

\`\`\`python
def tarif(age):
    if age < 14:
        prix = 5
    elif age <= 25:
        prix = 7.5
    elif age < 65:
        prix = 10
    else:
        prix = 8
    return prix
\`\`\`

1. Que renvoient \`tarif(10)\`, \`tarif(14)\`, \`tarif(25)\`, \`tarif(40)\` et \`tarif(65)\` ?
2. Pourquoi n'est-il pas nécessaire d'écrire \`elif age >= 14 and age <= 25:\` ?
3. Une famille comprend deux adultes de $42$ et $45$ ans, deux enfants de $8$ et $15$ ans et une grand-mère de $70$ ans. Écrire l'instruction Python qui calcule le prix total payé, et donner ce prix.
4. Modifier la fonction pour qu'elle renvoie $0$ (gratuité) pour les enfants de moins de $3$ ans.`,
      solution: `**1.** \`tarif(10)\` renvoie \`5\` ; \`tarif(14)\` renvoie \`7.5\` ; \`tarif(25)\` renvoie \`7.5\` ; \`tarif(40)\` renvoie \`10\` ; \`tarif(65)\` renvoie \`8\`.

**2.** On n'arrive au \`elif\` que si la condition précédente \`age < 14\` est fausse, c'est-à-dire si \`age >= 14\` : ce test est donc déjà acquis.

**3.** \`tarif(42) + tarif(45) + tarif(8) + tarif(15) + tarif(70)\`, soit $10 + 10 + 5 + 7{,}5 + 8 = 40{,}5$ €.

**4.** On ajoute un test en premier :
\`\`\`python
def tarif(age):
    if age < 3:
        prix = 0
    elif age < 14:
        prix = 5
    elif age <= 25:
        prix = 7.5
    elif age < 65:
        prix = 10
    else:
        prix = 8
    return prix
\`\`\``
    },
    {
      id: "2S4-ds-03",
      title: "Boucle bornée et sommes",
      difficulty: 2,
      points: 5,
      statement: `On considère la fonction suivante :

\`\`\`python
def somme(n):
    s = 0
    for i in range(1, n + 1):
        s = s + i
    return s
\`\`\`

1. Quelles valeurs prend la variable \`i\` lors de l'appel \`somme(5)\` ? Compléter un tableau donnant les valeurs successives de \`i\` et \`s\`, puis donner la valeur renvoyée.
2. Que calcule \`somme(n)\` en général ?
3. On admet que $1 + 2 + \\cdots + n = \\frac{n(n + 1)}{2}$. Calculer \`somme(100)\` sans exécuter le programme.
4. Modifier la fonction pour qu'elle calcule la somme des carrés $1^2 + 2^2 + \\cdots + n^2$. Que renvoie-t-elle pour $n = 4$ ?
5. Écrire une fonction \`somme_impairs(n)\` qui renvoie la somme des $n$ premiers nombres impairs $1 + 3 + 5 + \\cdots$. Calculer \`somme_impairs(4)\` et \`somme_impairs(5)\` à la main. Quelle conjecture peut-on faire ?`,
      solution: `**1.** \`range(1, 6)\` donne $1, 2, 3, 4, 5$.

| \`i\` | — | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| \`s\` | $0$ | $1$ | $3$ | $6$ | $10$ | $15$ |

La fonction renvoie $15$.

**2.** \`somme(n)\` calcule $1 + 2 + \\cdots + n$.

**3.** $\\frac{100 \\times 101}{2} = 5\\,050$.

**4.** On remplace \`s = s + i\` par \`s = s + i ** 2\`. Pour $n = 4$ : $1 + 4 + 9 + 16 = 30$.

**5.**
\`\`\`python
def somme_impairs(n):
    s = 0
    for i in range(n):
        s = s + (2 * i + 1)
    return s
\`\`\`
\`somme_impairs(4)\` $= 1 + 3 + 5 + 7 = 16$ et \`somme_impairs(5)\` $= 16 + 9 = 25$. On conjecture que la somme des $n$ premiers impairs vaut $n^2$.`
    },
    {
      id: "2S4-ds-04",
      title: "Boucle non bornée : un placement",
      difficulty: 2,
      points: 5,
      statement: `On place $1\\,000$ € sur un compte rémunéré à $3\\,\\%$ par an (intérêts composés). On souhaite savoir au bout de combien d'années le capital atteindra au moins $1\\,500$ €.

\`\`\`python
capital = 1000
annees = 0
while capital < 1500:
    capital = capital * 1.03
    annees = annees + 1
print(annees)
\`\`\`

1. Pourquoi multiplie-t-on par $1{,}03$ ?
2. Exécuter à la main les trois premiers passages dans la boucle (valeurs arrondies au centime).
3. Le programme affiche \`14\`. Interpréter ce résultat et le justifier à l'aide de deux calculs.
4. Modifier le programme pour qu'il demande le capital initial, le taux et l'objectif, en écrivant une fonction \`duree(c0, taux, objectif)\` qui renvoie le nombre d'années nécessaires.
5. Que se passerait-il si l'on appelait \`duree(1000, 0, 1500)\` ? Proposer une précaution.`,
      solution: `**1.** Une augmentation de $3\\,\\%$ correspond au coefficient multiplicateur $1 + \\frac{3}{100} = 1{,}03$.

**2.**

| Passage | $1$ | $2$ | $3$ |
|---|---|---|---|
| \`capital\` | $1\\,030{,}00$ | $1\\,060{,}90$ | $1\\,092{,}73$ |
| \`annees\` | $1$ | $2$ | $3$ |

**3.** Il faut $14$ années pour que le capital atteigne au moins $1\\,500$ €. En effet $1\\,000 \\times 1{,}03^{13} \\approx 1\\,468{,}53 < 1\\,500$ et $1\\,000 \\times 1{,}03^{14} \\approx 1\\,512{,}59 \\geqslant 1\\,500$.

**4.**
\`\`\`python
def duree(c0, taux, objectif):
    capital = c0
    annees = 0
    while capital < objectif:
        capital = capital * (1 + taux / 100)
        annees = annees + 1
    return annees
\`\`\`
(L'appel \`duree(1000, 3, 1500)\` renvoie \`14\`.)

**5.** Avec un taux nul, le capital reste à $1\\,000$ € et la condition \`capital < objectif\` reste toujours vraie : **la boucle ne s'arrête jamais**. Précaution possible : vérifier au début que \`taux > 0\` (ou que \`c0 >= objectif\`) et renvoyer un message ou une valeur particulière sinon.`
    },
    {
      id: "2S4-ds-05",
      title: "Diviseurs et nombres premiers",
      difficulty: 3,
      points: 6,
      statement: `On rappelle qu'en Python, \`a % b\` donne le reste de la division euclidienne de \`a\` par \`b\`.

\`\`\`python
def nb_diviseurs(n):
    compteur = 0
    for d in range(1, n + 1):
        if n % d == 0:
            compteur = compteur + 1
    return compteur
\`\`\`

1. Que renvoie \`12 % 5\` ? \`12 % 4\` ? Que signifie l'égalité \`n % d == 0\` ?
2. Que renvoie \`nb_diviseurs(12)\` ? Justifier en listant les diviseurs.
3. Un entier $n \\geqslant 2$ est premier s'il a exactement deux diviseurs. Écrire une fonction \`est_premier(n)\` qui renvoie \`True\` si $n$ est premier et \`False\` sinon, en utilisant \`nb_diviseurs\`.
4. Écrire une fonction \`liste_premiers(m)\` qui affiche tous les nombres premiers inférieurs ou égaux à \`m\`. Qu'affiche \`liste_premiers(20)\` ?
5. Pour $n = 1\\,000\\,003$, la fonction \`nb_diviseurs\` effectue un million de tests. Expliquer pourquoi il suffirait de tester les diviseurs $d$ jusqu'à $\\sqrt{n}$ pour savoir si $n$ est premier.`,
      solution: `**1.** $12 = 5 \\times 2 + 2$, donc \`12 % 5\` vaut \`2\` ; $12 = 4 \\times 3$, donc \`12 % 4\` vaut \`0\`. \`n % d == 0\` signifie que $d$ divise $n$.

**2.** Les diviseurs de $12$ sont $1, 2, 3, 4, 6, 12$ : la fonction renvoie \`6\`.

**3.**
\`\`\`python
def est_premier(n):
    return n >= 2 and nb_diviseurs(n) == 2
\`\`\`
(ou avec un \`if ... : return True else: return False\`).

**4.**
\`\`\`python
def liste_premiers(m):
    for n in range(2, m + 1):
        if est_premier(n):
            print(n)
\`\`\`
\`liste_premiers(20)\` affiche $2, 3, 5, 7, 11, 13, 17, 19$.

**5.** Si $n = d \\times d'$ avec $1 < d \\leqslant d'$, alors $d^2 \\leqslant d \\times d' = n$, donc $d \\leqslant \\sqrt{n}$. Ainsi, si $n$ n'est pas premier, il possède un diviseur $d$ tel que $2 \\leqslant d \\leqslant \\sqrt{n}$. Pour $n \\approx 10^6$, il suffit de tester environ $1\\,000$ diviseurs au lieu d'un million.`
    },
    {
      id: "2S4-ds-06",
      title: "La suite de Syracuse",
      difficulty: 3,
      points: 6,
      statement: `On considère la fonction suivante :

\`\`\`python
def syracuse(n):
    etapes = 0
    maximum = n
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3 * n + 1
        etapes = etapes + 1
        if n > maximum:
            maximum = n
    return etapes, maximum
\`\`\`

1. Écrire la suite des valeurs prises par \`n\` pour l'appel \`syracuse(6)\`. Que renvoie la fonction ?
2. Que renvoie \`syracuse(7)\` ?
3. Expliquer le rôle des variables \`etapes\` et \`maximum\`.
4. Personne n'a jamais démontré que la boucle \`while\` se termine pour tout entier de départ $n \\geqslant 1$. Pourquoi ne peut-on pas remplacer cette boucle par une boucle \`for\` ?
5. Écrire une fonction \`record(m)\` qui renvoie l'entier $n$ compris entre $1$ et $m$ dont le nombre d'étapes est le plus grand.`,
      solution: `**1.** $6 \\to 3 \\to 10 \\to 5 \\to 16 \\to 8 \\to 4 \\to 2 \\to 1$. Il y a $8$ étapes et la plus grande valeur atteinte est $16$ : la fonction renvoie \`(8, 16)\`.

**2.** $7 \\to 22 \\to 11 \\to 34 \\to 17 \\to 52 \\to 26 \\to 13 \\to 40 \\to 20 \\to 10 \\to 5 \\to 16 \\to 8 \\to 4 \\to 2 \\to 1$ : $16$ étapes, maximum $52$. La fonction renvoie \`(16, 52)\`.

**3.** \`etapes\` compte le nombre de transformations effectuées avant d'atteindre $1$ ; \`maximum\` mémorise la plus grande valeur atteinte (elle est mise à jour à chaque fois qu'une valeur plus grande apparaît).

**4.** Une boucle \`for\` exige de connaître à l'avance le nombre de répétitions. Ici, on ne sait pas combien d'étapes seront nécessaires (on ne sait même pas démontrer que ce nombre est toujours fini) : il faut une boucle non bornée.

**5.**
\`\`\`python
def record(m):
    meilleur = 1
    plus_long = 0
    for n in range(1, m + 1):
        e, mx = syracuse(n)
        if e > plus_long:
            plus_long = e
            meilleur = n
    return meilleur
\`\`\``
    },
    {
      id: "2S4-ds-07",
      title: "Résolution approchée par balayage",
      difficulty: 4,
      points: 7,
      statement: `On considère la fonction $f$ définie sur $[1 ; 2]$ par $f(x) = x^3 + x - 3$. On admet que $f$ est strictement croissante sur $[1 ; 2]$.

1. Calculer $f(1)$ et $f(2)$. Justifier que l'équation $f(x) = 0$ admet une unique solution $\\alpha$ dans $[1 ; 2]$.
2. On considère le programme suivant :

\`\`\`python
def f(x):
    return x**3 + x - 3

def balayage(pas):
    x = 1
    while f(x) < 0:
        x = x + pas
    return x
\`\`\`

   a) Expliquer pourquoi la fonction \`balayage\` s'arrête.
   b) Que représente la valeur renvoyée par \`balayage(0.1)\` par rapport à $\\alpha$ ? Calculer $f(1{,}2)$ et $f(1{,}3)$ et en déduire cette valeur.
   c) De même, déterminer \`balayage(0.01)\` en calculant $f(1{,}21)$ et $f(1{,}22)$.
3. En pratique, \`balayage(0.1)\` affiche \`1.3000000000000003\`. Expliquer brièvement ce phénomène.
4. Modifier la fonction pour qu'elle renvoie un encadrement de $\\alpha$ d'amplitude \`pas\` sous la forme de deux nombres.
5. Combien de passages dans la boucle faut-il environ pour obtenir un encadrement d'amplitude $10^{-6}$ ? Commenter.`,
      solution: `**1.** $f(1) = 1 + 1 - 3 = -1 < 0$ et $f(2) = 8 + 2 - 3 = 7 > 0$. $f$ est strictement croissante (et sa courbe se trace sans lever le crayon) : elle passe une seule fois par $0$ sur $[1 ; 2]$.

**2. a)** $x$ augmente de \`pas\` à chaque passage ; dès que $x \\geqslant \\alpha$, on a $f(x) \\geqslant 0$ et la boucle s'arrête. Comme $\\alpha \\leqslant 2$, cela arrive au bout d'un nombre fini de passages.

**b)** La fonction renvoie la première valeur de la forme $1 + k \\times$ \`pas\` telle que $f(x) \\geqslant 0$, c'est-à-dire un majorant de $\\alpha$ à \`pas\` près : $x - \\text{pas} < \\alpha \\leqslant x$.
$f(1{,}2) = 1{,}728 + 1{,}2 - 3 = -0{,}072 < 0$ et $f(1{,}3) = 2{,}197 + 1{,}3 - 3 = 0{,}497 > 0$. \`balayage(0.1)\` renvoie $1{,}3$ et $1{,}2 < \\alpha < 1{,}3$.

**c)** $f(1{,}21) = 1{,}771\\,561 + 1{,}21 - 3 \\approx -0{,}018 < 0$ et $f(1{,}22) = 1{,}815\\,848 + 1{,}22 - 3 \\approx 0{,}036 > 0$. \`balayage(0.01)\` renvoie $1{,}22$ et $1{,}21 < \\alpha < 1{,}22$.

**3.** Les nombres décimaux comme $0{,}1$ ne sont pas représentés exactement en machine (ils sont codés en binaire) : les additions successives accumulent de minuscules erreurs d'arrondi.

**4.**
\`\`\`python
def encadrement(pas):
    x = 1
    while f(x) < 0:
        x = x + pas
    return x - pas, x
\`\`\`

**5.** $\\alpha - 1 \\approx 0{,}21$ : il faut environ $\\frac{0{,}21}{10^{-6}} = 210\\,000$ passages. C'est beaucoup : la méthode par balayage est lente. (On peut l'accélérer en affinant progressivement le pas, ou utiliser la dichotomie, vue plus tard.)`
    },
    {
      id: "2S4-ds-08",
      title: "L'algorithme d'Euclide",
      difficulty: 4,
      points: 6,
      statement: `On considère la fonction suivante, où \`a\` et \`b\` sont des entiers naturels avec \`b\` non nul au départ :

\`\`\`python
def pgcd(a, b):
    while b != 0:
        r = a % b
        a = b
        b = r
    return a
\`\`\`

1. Exécuter à la main \`pgcd(420, 336)\` en donnant les valeurs de \`a\`, \`b\` et \`r\` à chaque passage dans la boucle. Que renvoie la fonction ?
2. Même question pour \`pgcd(1071, 462)\`.
3. En utilisant la décomposition en facteurs premiers $1071 = 3^2 \\times 7 \\times 17$ et $462 = 2 \\times 3 \\times 7 \\times 11$, vérifier le résultat de la question 2.
4. Écrire une fonction \`irreductible(n, d)\` qui renvoie \`True\` si la fraction $\\frac{n}{d}$ est irréductible et \`False\` sinon.
5. Écrire une fonction \`simplifier(n, d)\` qui renvoie le numérateur et le dénominateur de la fraction irréductible égale à $\\frac{n}{d}$. Que renvoie \`simplifier(1071, 462)\` ?`,
      solution: `**1.**

| Passage | \`r\` | \`a\` | \`b\` |
|---|---|---|---|
| départ | — | $420$ | $336$ |
| $1$ | $84$ | $336$ | $84$ |
| $2$ | $0$ | $84$ | $0$ |

($420 = 336 \\times 1 + 84$ et $336 = 84 \\times 4 + 0$.) La boucle s'arrête car \`b\` vaut $0$ : la fonction renvoie $84$.

**2.** $1071 = 462 \\times 2 + 147$ ; $462 = 147 \\times 3 + 21$ ; $147 = 21 \\times 7 + 0$.

| Passage | \`r\` | \`a\` | \`b\` |
|---|---|---|---|
| départ | — | $1071$ | $462$ |
| $1$ | $147$ | $462$ | $147$ |
| $2$ | $21$ | $147$ | $21$ |
| $3$ | $0$ | $21$ | $0$ |

La fonction renvoie $21$.

**3.** Facteurs premiers communs avec le plus petit exposant : $3 \\times 7 = 21$. On retrouve bien $21$.

**4.**
\`\`\`python
def irreductible(n, d):
    return pgcd(n, d) == 1
\`\`\`

**5.**
\`\`\`python
def simplifier(n, d):
    g = pgcd(n, d)
    return n // g, d // g
\`\`\`
\`simplifier(1071, 462)\` renvoie \`(51, 22)\`, car $1071 = 21 \\times 51$ et $462 = 21 \\times 22$.`
    },
    {
      id: "2S4-ds-09",
      title: "Convertir une durée en heures, minutes et secondes",
      difficulty: 1,
      points: 4,
      statement: `En Python, \`a // b\` donne le quotient et \`a % b\` le reste de la division euclidienne de l'entier \`a\` par l'entier \`b\`. On considère la fonction suivante :

\`\`\`python
def convertir(s):
    h = s // 3600
    reste = s % 3600
    m = reste // 60
    sec = reste % 60
    return h, m, sec
\`\`\`

1. Quelles valeurs prennent successivement les variables \`h\`, \`reste\`, \`m\` et \`sec\` lors de l'appel \`convertir(4000)\` ? Que renvoie cet appel ?
2. Que renvoie \`convertir(7384)\` ? Interpréter.
3. Quel est le type des valeurs renvoyées ?
4. Écrire une fonction \`en_secondes(h, m, sec)\` qui effectue la conversion inverse.`,
      solution: `**1.** $4\\,000 = 1 \\times 3\\,600 + 400$, donc \`h\` $= 1$ et \`reste\` $= 400$. Puis $400 = 6 \\times 60 + 40$, donc \`m\` $= 6$ et \`sec\` $= 40$.

L'appel renvoie \`(1, 6, 40)\` : $4\\,000$ secondes valent $1$ h $6$ min $40$ s.

**2.** $7\\,384 = 2 \\times 3\\,600 + 184$ et $184 = 3 \\times 60 + 4$. L'appel renvoie \`(2, 3, 4)\` : $7\\,384$ s $= 2$ h $3$ min $4$ s.

**3.** Ce sont des **entiers** (type \`int\`) : les opérateurs \`//\` et \`%\` appliqués à des entiers donnent des entiers.

**4.**
\`\`\`python
def en_secondes(h, m, sec):
    return 3600 * h + 60 * m + sec
\`\`\`
Par exemple \`en_secondes(1, 6, 40)\` renvoie $3\\,600 + 360 + 40 = 4\\,000$.`
    },
    {
      id: "2S4-ds-10",
      title: "Compter les multiples de 3 ou de 5",
      difficulty: 2,
      points: 5,
      statement: `On considère la fonction suivante :

\`\`\`python
def compte(n):
    c = 0
    for k in range(1, n + 1):
        if k % 3 == 0 or k % 5 == 0:
            c = c + 1
    return c
\`\`\`

1. Quelles valeurs prend \`k\` lors de l'appel \`compte(15)\` ? Pour quelles valeurs de \`k\` la condition est-elle vraie ? Que renvoie \`compte(15)\` ?
2. Que compte la fonction \`compte(n)\` en général ?
3. Sans exécuter le programme, déterminer \`compte(100)\` en justifiant (on pourra compter les multiples de $3$, ceux de $5$, et faire attention à ceux qui sont comptés deux fois).
4. Modifier la fonction pour qu'elle renvoie la **somme** des entiers de $1$ à $n$ multiples de $3$ ou de $5$. Que renverrait la fonction modifiée pour $n = 15$ ?`,
      solution: `**1.** \`range(1, n + 1)\` donne les entiers de $1$ à $15$. La condition (multiple de $3$ **ou** de $5$) est vraie pour $k = 3, 5, 6, 9, 10, 12, 15$.

\`compte(15)\` renvoie $7$.

**2.** \`compte(n)\` renvoie le nombre d'entiers compris entre $1$ et $n$ qui sont multiples de $3$ ou de $5$ (ou des deux).

**3.** Entre $1$ et $100$ :
- multiples de $3$ : $3, 6, \\ldots, 99$, soit $33$ nombres ($99 = 3 \\times 33$) ;
- multiples de $5$ : $5, 10, \\ldots, 100$, soit $20$ nombres ;
- les multiples de $3$ et de $5$, c'est-à-dire de $15$ ($3$ et $5$ sont premiers entre eux), sont comptés deux fois : $15, 30, \\ldots, 90$, soit $6$ nombres.

\`compte(100)\` renvoie $33 + 20 - 6 = 47$.

**4.**
\`\`\`python
def somme(n):
    s = 0
    for k in range(1, n + 1):
        if k % 3 == 0 or k % 5 == 0:
            s = s + k
    return s
\`\`\`
Pour $n = 15$ : $3 + 5 + 6 + 9 + 10 + 12 + 15 = 60$.`
    },
    {
      id: "2S4-ds-11",
      title: "Deviner un nombre par dichotomie",
      difficulty: 3,
      points: 6,
      statement: `Dans un jeu, il faut deviner un nombre entier secret compris entre $1$ et $100$ ; à chaque proposition, on répond « trop petit », « trop grand » ou « gagné ». La fonction suivante joue automatiquement en proposant toujours le milieu de l'intervalle restant et renvoie le nombre d'essais nécessaires.

\`\`\`python
def nb_essais(secret):
    bas = 1
    haut = 100
    essais = 0
    trouve = False
    while not trouve:
        milieu = (bas + haut) // 2
        essais = essais + 1
        if milieu == secret:
            trouve = True
        elif milieu < secret:
            bas = milieu + 1
        else:
            haut = milieu - 1
    return essais
\`\`\`

1. Quel est le type de la variable \`trouve\` ? Pourquoi utilise-t-on ici une boucle \`while\` plutôt qu'une boucle \`for\` ?
2. Que renvoie \`nb_essais(50)\` ?
3. Recopier et compléter le tableau des valeurs de \`bas\`, \`haut\` et \`milieu\` à chaque passage dans la boucle lors de l'appel \`nb_essais(70)\`. Que renvoie cet appel ?
4. À chaque essai raté, le nombre d'entiers encore possibles est au moins divisé par $2$. En déduire qu'on trouve toujours le nombre secret en au plus $7$ essais.`,
      solution: `**1.** \`trouve\` est un **booléen** (\`True\` ou \`False\`). On ne sait pas à l'avance combien d'essais seront nécessaires : on répète tant que le nombre n'est pas trouvé, d'où la boucle non bornée \`while\`.

**2.** Au premier passage, \`milieu\` $= (1 + 100) // 2 = 50$ : c'est le secret. \`nb_essais(50)\` renvoie $1$.

**3.**

| Essai | \`bas\` | \`haut\` | \`milieu\` | Comparaison |
|---|---|---|---|---|
| $1$ | $1$ | $100$ | $50$ | trop petit |
| $2$ | $51$ | $100$ | $75$ | trop grand |
| $3$ | $51$ | $74$ | $62$ | trop petit |
| $4$ | $63$ | $74$ | $68$ | trop petit |
| $5$ | $69$ | $74$ | $71$ | trop grand |
| $6$ | $69$ | $70$ | $69$ | trop petit |
| $7$ | $70$ | $70$ | $70$ | gagné |

\`nb_essais(70)\` renvoie $7$.

**4.** Au départ, il y a $100$ entiers possibles. Après un essai raté, il en reste au plus $50$, puis au plus $25$, $12$, $6$, $3$, $1$ (on retire le milieu et on garde au plus la moitié du reste). Après $6$ essais ratés, il reste au plus $1$ entier possible : c'est forcément le secret, trouvé au plus tard au $7^e$ essai.

On peut aussi remarquer que $2^6 = 64 < 100 \\leqslant 2^7 = 128$ : $7$ essais suffisent toujours, mais $6$ ne suffisent pas toujours (comme le montre le secret $70$).`
    },
    {
      id: "2S4-ds-12",
      title: "Somme des chiffres et divisibilité par 9",
      difficulty: 4,
      points: 7,
      statement: `On considère la fonction suivante, où \`n\` est un entier naturel :

\`\`\`python
def somme_chiffres(n):
    s = 0
    while n > 0:
        s = s + n % 10
        n = n // 10
    return s
\`\`\`

1. Que valent \`4072 % 10\` et \`4072 // 10\` ?
2. Exécuter à la main l'appel \`somme_chiffres(4072)\` en donnant les valeurs de \`s\` et \`n\` après chaque passage dans la boucle. Que renvoie cette fonction en général ?
3. Combien de passages dans la boucle effectue l'appel \`somme_chiffres(n)\` lorsque \`n\` est un entier de $k$ chiffres ?
4. Soit $n$ un entier à trois chiffres $a$, $b$, $c$ (on a $n = 100a + 10b + c$). Démontrer que $n - (a + b + c)$ est un multiple de $9$. En déduire que $n$ est divisible par $9$ si et seulement si la somme de ses chiffres l'est.
5. Écrire une fonction \`racine(n)\` qui applique \`somme_chiffres\` de façon répétée tant que le résultat a au moins deux chiffres, et renvoie le chiffre final. Que renvoie \`racine(4072)\` ?`,
      solution: `**1.** \`4072 % 10\` vaut $2$ (le chiffre des unités) et \`4072 // 10\` vaut $407$ (on « supprime » le chiffre des unités).

**2.**

| Passage | \`s\` | \`n\` |
|---|---|---|
| départ | $0$ | $4072$ |
| $1$ | $2$ | $407$ |
| $2$ | $9$ | $40$ |
| $3$ | $9$ | $4$ |
| $4$ | $13$ | $0$ |

La boucle s'arrête car \`n\` vaut $0$ ; la fonction renvoie $13 = 4 + 0 + 7 + 2$ : elle renvoie la **somme des chiffres** de \`n\`.

**3.** Chaque passage supprime un chiffre de \`n\` ; la boucle s'arrête quand il n'en reste plus : il y a exactement $k$ passages.

**4.** $n - (a + b + c) = 100a + 10b + c - a - b - c = 99a + 9b = 9(11a + b)$, avec $11a + b$ entier : c'est un multiple de $9$.

Notons $S = a + b + c$, de sorte que $n = S + 9(11a + b)$.
- Si $9$ divise $S$, alors $9$ divise la somme $S + 9(11a + b) = n$.
- Si $9$ divise $n$, alors $9$ divise $n - 9(11a + b) = S$.

Donc $n$ est divisible par $9$ si et seulement si $S$ l'est.

**5.**
\`\`\`python
def racine(n):
    while n >= 10:
        n = somme_chiffres(n)
    return n
\`\`\`
$4\\,072 \\to 13 \\to 4$ : \`racine(4072)\` renvoie $4$. (Cohérent avec la question 4 : $4\\,072 = 9 \\times 452 + 4$.)`
    }
  ]
});
