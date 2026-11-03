/**
 * Banque d'exercices de devoir surveillé — Quatrième (questions ouvertes, corrigés rédigés).
 * Schéma : voir scripts/tests/test_ds_banks.js
 */
window.MATHS_DS_BANK = window.MATHS_DS_BANK || {};
Object.assign(window.MATHS_DS_BANK, {
  "4N1": [
    {
      id: "4N1-ds-01",
      title: "Règle des signes : produits et quotients",
      difficulty: 1,
      points: 4,
      statement: `1. Calculer, sans calculatrice :
$$A = (-7) \\times (+8) \\qquad B = (-6) \\times (-9) \\qquad C = (-72) \\div (-8) \\qquad D = (+45) \\div (-5)$$
2. On considère le produit $P = (-2) \\times (+3) \\times (-5) \\times (-1) \\times (+4)$.
   a) Sans effectuer le calcul, donner le signe de $P$. Justifier.
   b) Calculer $P$.
3. Compléter les égalités suivantes en justifiant : $(-4) \\times \\ldots = 28$ et $\\ldots \\div (-6) = -5$.`,
      solution: `**1.** On applique la règle des signes : deux nombres de même signe donnent un résultat positif, deux nombres de signes contraires donnent un résultat négatif.
- $A = (-7) \\times (+8) = -56$ (signes contraires).
- $B = (-6) \\times (-9) = +54$ (même signe).
- $C = (-72) \\div (-8) = +9$ (même signe).
- $D = (+45) \\div (-5) = -9$ (signes contraires).

**2. a)** Le produit comporte trois facteurs négatifs : $-2$, $-5$ et $-1$. Le nombre de facteurs négatifs est impair, donc $P$ est **négatif**.

**b)** $2 \\times 3 \\times 5 \\times 1 \\times 4 = 120$, donc $P = -120$.

**3.** On cherche le nombre qui, multiplié par $-4$, donne $28$ : c'est $28 \\div (-4) = -7$. Vérification : $(-4) \\times (-7) = 28$.
On cherche le nombre qui, divisé par $-6$, donne $-5$ : c'est $(-5) \\times (-6) = 30$. Vérification : $30 \\div (-6) = -5$.`
    },
    {
      id: "4N1-ds-02",
      title: "Priorités opératoires avec des relatifs",
      difficulty: 1,
      points: 4,
      statement: `Calculer les expressions suivantes en détaillant les étapes.
1. $A = -5 + 3 \\times (-4)$ et $B = (-5 + 3) \\times (-4)$.
2. $C = 18 \\div (-3) - (-2) \\times 7$.
3. $D = -2 \\times (-3)^2$ et $E = \\left(-2 \\times (-3)\\right)^2$.
4. Expliquer pourquoi $A$ et $B$ n'ont pas la même valeur, alors qu'ils s'écrivent avec les mêmes nombres.`,
      solution: `**1.** La multiplication est prioritaire sur l'addition.
$A = -5 + 3 \\times (-4) = -5 + (-12) = -17$.
Les parenthèses sont prioritaires : $B = (-5 + 3) \\times (-4) = (-2) \\times (-4) = 8$.

**2.** On effectue d'abord la division et la multiplication :
$C = 18 \\div (-3) - (-2) \\times 7 = -6 - (-14) = -6 + 14 = 8$.

**3.** La puissance est prioritaire sur la multiplication : $(-3)^2 = (-3) \\times (-3) = 9$, donc $D = -2 \\times 9 = -18$.
Pour $E$, on calcule d'abord la parenthèse : $-2 \\times (-3) = 6$, donc $E = 6^2 = 36$.

**4.** Dans $A$, on effectue d'abord la multiplication $3 \\times (-4)$ ; dans $B$, les parenthèses obligent à calculer d'abord la somme $-5 + 3$. L'ordre des opérations n'est pas le même, donc les résultats sont différents : $-17 \\neq 8$.`
    },
    {
      id: "4N1-ds-03",
      title: "Relevés de températures",
      difficulty: 2,
      points: 5,
      statement: `Une station météo relève la température à 6 h du matin pendant six jours :

| Jour | lundi | mardi | mercredi | jeudi | vendredi | samedi |
|---|---|---|---|---|---|---|
| Température (°C) | $-4$ | $-2$ | $3$ | $-5$ | $1$ | $-5$ |

1. Calculer la somme de ces six températures.
2. En déduire la température moyenne à 6 h sur ces six jours.
3. Le dimanche, à 18 h, il fait $2$ °C. La température baisse ensuite de $1{,}5$ °C par heure jusqu'à minuit.
   a) Écrire une expression permettant de calculer la température à minuit, puis la calculer.
   b) À quelle heure la température atteint-elle $0$ °C ?`,
      solution: `**1.** $(-4) + (-2) + 3 + (-5) + 1 + (-5) = (3 + 1) + (-4 - 2 - 5 - 5) = 4 + (-16) = -12$.
La somme des températures est $-12$ °C.

**2.** Moyenne : $\\dfrac{-12}{6} = -2$ (quotient de deux nombres de signes contraires, donc négatif).
La température moyenne à 6 h est de $-2$ °C.

**3. a)** De 18 h à minuit, il s'écoule $6$ heures. Chaque heure, la température varie de $-1{,}5$ °C :
$2 + 6 \\times (-1{,}5) = 2 + (-9) = -7$.
À minuit, il fait $-7$ °C.

**b)** La température doit baisser de $2$ °C. Cela prend $2 \\div 1{,}5 = \\dfrac{4}{3}$ h, soit $1$ h et $\\dfrac{1}{3}$ h $= 1$ h $20$ min.
La température atteint $0$ °C à **19 h 20**.`
    },
    {
      id: "4N1-ds-04",
      title: "Signe d'un produit, opposé et inverse",
      difficulty: 2,
      points: 4,
      statement: `1. Sans calculer, donner le signe de chacun des nombres suivants. Justifier.
   a) $F = (-1) \\times (-2) \\times (-3) \\times (-4) \\times (-5) \\times (-6) \\times (-7) \\times (-8) \\times (-9) \\times (-10)$
   b) $G = (-3) \\times (-3) \\times (-3) \\times (-3) \\times (-3)$
   c) $H = (-7) \\times 0 \\times (-2)$
2. Recopier et compléter le tableau.

| Nombre | $-4$ | $0{,}5$ | $-1$ |
|---|---|---|---|
| Opposé | | | |
| Inverse | | | |

3. Lisa affirme : « Un nombre non nul et son inverse ont toujours le même signe. » A-t-elle raison ? Justifier.`,
      solution: `**1. a)** $F$ comporte $10$ facteurs négatifs. Ce nombre est pair, donc $F$ est **positif**.
**b)** $G$ comporte $5$ facteurs négatifs. Ce nombre est impair, donc $G$ est **négatif**.
**c)** L'un des facteurs est nul, donc $H = 0$ : il n'est ni strictement positif, ni strictement négatif.

**2.** L'opposé de $a$ est le nombre $-a$ (leur somme vaut $0$) ; l'inverse de $a \\neq 0$ est $\\dfrac{1}{a}$ (leur produit vaut $1$).

| Nombre | $-4$ | $0{,}5$ | $-1$ |
|---|---|---|---|
| Opposé | $4$ | $-0{,}5$ | $1$ |
| Inverse | $-0{,}25$ | $2$ | $-1$ |

Vérifications : $(-4) \\times (-0{,}25) = 1$ ; $0{,}5 \\times 2 = 1$ ; $(-1) \\times (-1) = 1$.

**3.** Si $a$ est un nombre non nul, alors $a \\times \\dfrac{1}{a} = 1$, qui est positif. D'après la règle des signes, un produit de deux nombres est positif seulement si les deux nombres ont le même signe. Donc $a$ et son inverse ont toujours le même signe : **Lisa a raison**.`
    },
    {
      id: "4N1-ds-05",
      title: "Enchaînements d'opérations",
      difficulty: 3,
      points: 5,
      statement: `1. Calculer en détaillant : $A = \\dfrac{(-3) \\times (-8) - 4}{(-2) \\times 5 + 6}$.
2. Calculer $B = -2 \\times \\left[\\,3 - (-4) \\times (-2)\\,\\right]$.
3. Tom calcule $C = (-12) \\div (-4) \\times (-3)$ et trouve $-1$.
   a) Calculer $C$ correctement.
   b) Expliquer l'erreur de Tom.
4. Calculer la valeur de l'expression $2x^2 - 5x + 1$ pour $x = -3$.`,
      solution: `**1.** On calcule séparément le numérateur et le dénominateur :
- numérateur : $(-3) \\times (-8) - 4 = 24 - 4 = 20$ ;
- dénominateur : $(-2) \\times 5 + 6 = -10 + 6 = -4$.

Donc $A = \\dfrac{20}{-4} = -5$.

**2.** On commence par l'intérieur des crochets, en effectuant la multiplication avant la soustraction :
$(-4) \\times (-2) = 8$, puis $3 - 8 = -5$. Donc $B = -2 \\times (-5) = 10$.

**3. a)** La division et la multiplication ont la même priorité : on effectue les calculs de gauche à droite.
$C = (-12) \\div (-4) \\times (-3) = 3 \\times (-3) = -9$.

**b)** Tom a d'abord calculé $(-4) \\times (-3) = 12$, puis $(-12) \\div 12 = -1$ : il n'a pas respecté l'ordre de gauche à droite pour des opérations de même priorité.

**4.** Pour $x = -3$ : $x^2 = (-3)^2 = 9$, donc
$2 \\times 9 - 5 \\times (-3) + 1 = 18 + 15 + 1 = 34$.`
    },
    {
      id: "4N1-ds-06",
      title: "Le quiz à points négatifs",
      difficulty: 3,
      points: 4,
      statement: `Lors d'un quiz de $20$ questions, chaque bonne réponse rapporte $5$ points, chaque mauvaise réponse enlève $3$ points et chaque question sans réponse enlève $1$ point.
1. Léa a donné $11$ bonnes réponses, $6$ mauvaises et n'a pas répondu à $3$ questions. Calculer son score.
2. Hugo a donné $7$ bonnes réponses, $10$ mauvaises et n'a pas répondu à $3$ questions. Calculer son score.
3. Quel score obtient un candidat qui ne répond à aucune question ?
4. Un candidat répond à toutes les questions. Peut-il obtenir un score de $0$ point ? Justifier.`,
      solution: `**1.** Score de Léa : $11 \\times 5 + 6 \\times (-3) + 3 \\times (-1) = 55 - 18 - 3 = 34$ points.

**2.** Score de Hugo : $7 \\times 5 + 10 \\times (-3) + 3 \\times (-1) = 35 - 30 - 3 = 2$ points.

**3.** Il laisse $20$ questions sans réponse : $20 \\times (-1) = -20$ points.

**4.** S'il répond à toutes les questions, chaque bonne réponse en plus remplace une mauvaise réponse et fait gagner $5 + 3 = 8$ points.
- Avec $7$ bonnes et $13$ mauvaises : $35 - 39 = -4$ points.
- Avec $8$ bonnes et $12$ mauvaises : $40 - 36 = 4$ points.

Le score passe directement de $-4$ à $4$ : un score de $0$ est **impossible** (il faudrait $7{,}5$ bonnes réponses).`
    },
    {
      id: "4N1-ds-07",
      title: "Produits de nombreux facteurs",
      difficulty: 4,
      points: 5,
      statement: `On considère $P = (-1) \\times 2 \\times (-3) \\times 4 \\times (-5) \\times 6 \\times \\ldots \\times (-19) \\times 20$ : c'est le produit des entiers de $1$ à $20$, où chaque entier impair est remplacé par son opposé.
1. Combien de facteurs négatifs comporte $P$ ? En déduire le signe de $P$.
2. On note $Q$ le produit de $2\\,027$ facteurs tous égaux à $-1$. Calculer $Q$.
3. Trouver trois nombres entiers relatifs, tous différents, dont la somme est égale à $0$ et le produit est égal à $-12$.
4. Deux nombres relatifs $a$ et $b$ vérifient $a \\times b < 0$ et $a + b > 0$. Que peut-on dire de leurs signes et de leurs distances à zéro ? Justifier.`,
      solution: `**1.** Les facteurs négatifs sont les opposés des entiers impairs de $1$ à $19$ : $-1, -3, -5, \\ldots, -19$. Il y en a $10$.
Ce nombre est pair, donc $P$ est **positif**.

**2.** $(-1) \\times (-1) = 1$ : les facteurs se regroupent par paires de produit $1$. Avec $2\\,027 = 2 \\times 1\\,013 + 1$ facteurs, on obtient $1\\,013$ paires et il reste un facteur $-1$. Donc $Q = 1 \\times (-1) = -1$ (nombre impair de facteurs négatifs).

**3.** Par exemple $-4$, $1$ et $3$ :
- somme : $-4 + 1 + 3 = 0$ ;
- produit : $(-4) \\times 1 \\times 3 = -12$.

**4.** Comme $a \\times b < 0$, d'après la règle des signes, $a$ et $b$ sont de **signes contraires**.
La somme de deux nombres de signes contraires a le signe de celui qui a la plus grande distance à zéro. Comme $a + b > 0$, **le nombre positif a la plus grande distance à zéro** (par exemple $a = 5$ et $b = -2$).`
    },
    {
      id: "4N1-ds-08",
      title: "Pyramides de produits",
      difficulty: 4,
      points: 6,
      statement: `Dans une pyramide de produits, chaque brique contient le produit des deux nombres situés juste en dessous d'elle.
1. La rangée du bas d'une pyramide à quatre étages contient, de gauche à droite : $-1$ ; $2$ ; $-3$ ; $-1$.
   a) Calculer les nombres des trois rangées supérieures.
   b) Sans refaire tous les calculs, donner le nombre du sommet si l'on remplace le premier nombre $-1$ (à gauche) par $1$. Justifier.
2. Une pyramide à trois étages a pour rangée du bas : $-2$ ; $x$ ; $5$, et son sommet vaut $-90$.
   a) Montrer que le sommet est égal à $-10 \\times x^2$.
   b) Trouver toutes les valeurs possibles de $x$.`,
      solution: `**1. a)** Deuxième rangée : $(-1) \\times 2 = -2$ ; $2 \\times (-3) = -6$ ; $(-3) \\times (-1) = 3$.
Troisième rangée : $(-2) \\times (-6) = 12$ ; $(-6) \\times 3 = -18$.
Sommet : $12 \\times (-18) = -216$.

**b)** Le premier nombre $-1$ n'intervient que dans la brique $-2$, qui devient $1 \\times 2 = 2$ (son opposé). Alors la brique $12$ devient $2 \\times (-6) = -12$, puis le sommet devient $(-12) \\times (-18) = 216$.
Changer le signe d'un seul facteur change le signe du produit : le sommet vaut **$216$**.

**2. a)** Deuxième rangée : $-2 \\times x$ et $x \\times 5$. Sommet : $(-2 \\times x) \\times (x \\times 5) = (-2) \\times 5 \\times x \\times x = -10 \\times x^2$.

**b)** On veut $-10 \\times x^2 = -90$, donc $x^2 = 9$. Les nombres dont le carré vaut $9$ sont $3$ et $-3$.
Vérifications : $(-2 \\times 3) \\times (3 \\times 5) = -6 \\times 15 = -90$ et $(-2 \\times (-3)) \\times ((-3) \\times 5) = 6 \\times (-15) = -90$.
Il y a **deux** valeurs possibles : $x = 3$ ou $x = -3$.`
    },
    {
      id: "4N1-ds-09",
      title: "Le relevé de compte",
      difficulty: 1,
      points: 4,
      statement: `Le $1^{\\text{er}}$ mars, le compte bancaire de Nora affiche un solde de $-35$ €. Pendant le mois, on enregistre les opérations suivantes : un dépôt de $120$ €, un paiement par carte de $48$ €, un prélèvement de $75$ € et trois retraits de $20$ € chacun.
1. Écrire une expression qui permet de calculer le solde du compte à la fin du mois, en utilisant des nombres relatifs.
2. Calculer ce solde.
3. Quelle somme minimale Nora doit-elle déposer pour que son compte ne soit plus négatif ? Justifier.
4. La banque retire $2$ € de frais pour chaque jour où le compte est négatif. Le compte reste négatif pendant $9$ jours après la fin du mois, sans autre opération. Calculer le solde après ces $9$ jours.`,
      solution: `**1.** Un dépôt est une variation positive, un paiement, un prélèvement ou un retrait est une variation négative :
$$S = -35 + 120 + (-48) + (-75) + 3 \\times (-20)$$

**2.** La multiplication est prioritaire : $3 \\times (-20) = -60$. Puis, de gauche à droite :
$-35 + 120 = 85$ ; $85 - 48 = 37$ ; $37 - 75 = -38$ ; $-38 - 60 = -98$.
Le solde à la fin du mois est de $-98$ €.

**3.** Pour atteindre $0$ €, il faut ajouter l'opposé de $-98$, c'est-à-dire $98$ € : $-98 + 98 = 0$. Nora doit déposer **au moins $98$ €**.

**4.** Les frais représentent $9 \\times (-2) = -18$ €. Nouveau solde : $-98 + (-18) = -116$ €.`
    },
    {
      id: "4N1-ds-10",
      title: "Un carré magique de relatifs",
      difficulty: 2,
      points: 5,
      statement: `Dans un carré magique, les sommes des nombres de chaque ligne, de chaque colonne et de chacune des deux diagonales sont toutes égales. On considère le carré magique incomplet suivant :

| $-5$ | $\\ldots$ | $-1$ |
|---|---|---|
| $\\ldots$ | $-2$ | $\\ldots$ |
| $-3$ | $\\ldots$ | $1$ |

1. Calculer la somme des nombres de la diagonale qui contient $-5$, $-2$ et $1$. Quelle est la somme « magique » de ce carré ?
2. Compléter le carré en justifiant chaque case par un calcul.
3. On multiplie chaque nombre du carré par $-3$.
   a) Écrire la première ligne du nouveau carré.
   b) Le nouveau carré est-il encore magique ? Si oui, quelle est sa somme magique ? Justifier.`,
      solution: `**1.** $-5 + (-2) + 1 = -7 + 1 = -6$. Toutes les sommes sont égales, donc la somme magique vaut $-6$.

**2.** On complète case par case :
- 1re ligne : $-5 + \\ldots + (-1) = -6$, donc la case vaut $-6 - (-6) = 0$ ;
- 1re colonne : $-5 + \\ldots + (-3) = -6$, donc la case vaut $-6 - (-8) = 2$ ;
- 3e ligne : $-3 + \\ldots + 1 = -6$, donc la case vaut $-6 - (-2) = -4$ ;
- 3e colonne : $-1 + \\ldots + 1 = -6$, donc la case vaut $-6 - 0 = -6$.

| $-5$ | $0$ | $-1$ |
|---|---|---|
| $2$ | $-2$ | $-6$ |
| $-3$ | $-4$ | $1$ |

Vérifications : 2e ligne $2 - 2 - 6 = -6$ ; 2e colonne $0 - 2 - 4 = -6$ ; autre diagonale $-1 - 2 - 3 = -6$.

**3. a)** $(-5) \\times (-3) = 15$ ; $0 \\times (-3) = 0$ ; $(-1) \\times (-3) = 3$. La première ligne devient $15$ ; $0$ ; $3$.

**b)** Dans chaque ligne, colonne ou diagonale, on a multiplié les trois nombres par $-3$, donc leur somme est aussi multipliée par $-3$ (distributivité : $-3a + (-3b) + (-3c) = -3 \\times (a + b + c)$). Toutes les sommes valent donc $-6 \\times (-3) = 18$ : le carré est **encore magique**, de somme magique $18$. Exemple : $15 + 0 + 3 = 18$.`
    },
    {
      id: "4N1-ds-11",
      title: "La plongée sous-marine",
      difficulty: 3,
      points: 5,
      statement: `On repère les altitudes par rapport à la surface de la mer : la surface est à l'altitude $0$ m, un point situé sous l'eau a une altitude négative.
1. Un plongeur part de la surface et descend régulièrement jusqu'à l'altitude $-24$ m en $3$ minutes. De combien son altitude varie-t-elle chaque minute ?
2. Au même moment, une mouette vole à l'altitude $15$ m, juste au-dessus du plongeur. Calculer la distance entre la mouette et le plongeur.
3. Pour sa sécurité, le plongeur doit remonter de $-24$ m jusqu'à $-3$ m sans dépasser une vitesse de $9$ m par minute. Quelle est la durée minimale de cette remontée ? Donner la réponse en minutes et secondes.
4. Pendant la plongée, l'altitude a été relevée toutes les $5$ minutes :

| Relevé | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Altitude (m) | $-6$ | $-12$ | $-24$ | $-24$ | $-15$ | $-3$ |

Calculer l'altitude moyenne de ces relevés.`,
      solution: `**1.** La variation totale est $-24 - 0 = -24$ m en $3$ minutes, donc chaque minute : $(-24) \\div 3 = -8$ m. L'altitude **diminue de $8$ m par minute**.

**2.** La distance entre deux altitudes est la différence entre la plus grande et la plus petite : $15 - (-24) = 15 + 24 = 39$ m.

**3.** Le plongeur doit remonter de $-3 - (-24) = 21$ m. À $9$ m par minute au maximum, il lui faut au moins $21 \\div 9 = \\dfrac{21}{9} = \\dfrac{7}{3}$ min, soit $2$ min et $\\dfrac{1}{3}$ min. Or $\\dfrac{1}{3}$ min $= 20$ s.
La durée minimale de la remontée est de **2 min 20 s**.

**4.** Somme des relevés : $(-6) + (-12) + (-24) + (-24) + (-15) + (-3) = -84$.
Moyenne : $(-84) \\div 6 = -14$ (quotient de deux nombres de signes contraires, donc négatif).
L'altitude moyenne est de $-14$ m.`
    },
    {
      id: "4N1-ds-12",
      title: "Sommes et produits imposés",
      difficulty: 4,
      points: 6,
      statement: `1. Trouver deux nombres entiers relatifs dont la somme est $-3$ et le produit est $-40$. Expliquer la démarche.
2. Trouver deux nombres entiers relatifs dont la somme est $-13$ et le produit est $40$. Expliquer la démarche.
3. Deux nombres non nuls ont une somme égale à $0$. Montrer que leur produit est forcément négatif.
4. On multiplie quatre nombres entiers relatifs consécutifs (par exemple $-7$, $-6$, $-5$ et $-4$).
   a) Calculer le produit de l'exemple.
   b) Montrer que le produit de quatre nombres entiers relatifs consécutifs n'est jamais strictement négatif.`,
      solution: `**1.** Le produit $-40$ est négatif, donc les deux nombres sont de signes contraires. Les décompositions de $40$ en produit de deux entiers positifs sont : $1 \\times 40$, $2 \\times 20$, $4 \\times 10$, $5 \\times 8$.
Deux nombres de signes contraires ont une somme égale, au signe près, à la différence de leurs distances à zéro ; il faut donc une différence de $3$ : seul le couple $5$ et $8$ convient. La somme est négative, donc c'est le nombre de plus grande distance à zéro qui est négatif : les nombres sont **$5$ et $-8$**.
Vérification : $5 + (-8) = -3$ et $5 \\times (-8) = -40$.

**2.** Le produit $40$ est positif, donc les deux nombres ont le même signe ; leur somme est négative, donc ils sont tous les deux négatifs. On cherche deux entiers positifs de produit $40$ et de somme $13$ : $5 + 8 = 13$. Les nombres sont **$-5$ et $-8$**.
Vérification : $(-5) + (-8) = -13$ et $(-5) \\times (-8) = 40$.

**3.** Si $a + b = 0$, alors $b$ est l'opposé de $a$. Deux nombres opposés non nuls sont de signes contraires (l'un est positif, l'autre négatif). D'après la règle des signes, leur produit est **négatif**.

**4. a)** $(-7) \\times (-6) \\times (-5) \\times (-4)$ : quatre facteurs négatifs (nombre pair), donc le produit est positif ; $7 \\times 6 = 42$, $5 \\times 4 = 20$, $42 \\times 20 = 840$. Le produit vaut $840$.

**b)** Trois cas sont possibles pour quatre entiers consécutifs :
- l'un d'eux est $0$ : le produit est nul ;
- ils sont tous strictement positifs : le produit est positif ;
- ils sont tous strictement négatifs : il y a $4$ facteurs négatifs, nombre pair, donc le produit est positif.

On ne peut pas avoir à la fois des nombres strictement négatifs et strictement positifs sans « passer » par $0$, puisque les nombres se suivent. Dans tous les cas, le produit est positif ou nul : il n'est **jamais strictement négatif**.`
    }
  ],
  "4N2": [
    {
      id: "4N2-ds-01",
      title: "Produits et quotients de fractions",
      difficulty: 1,
      points: 4,
      statement: `Calculer et donner chaque résultat sous la forme d'une fraction irréductible (ou d'un entier).
1. $A = -\\dfrac{3}{4} \\times \\dfrac{8}{9}$
2. $B = \\dfrac{5}{6} \\div \\left(-\\dfrac{10}{3}\\right)$
3. $C = \\dfrac{-7}{12} \\times \\dfrac{-18}{35}$
4. $D = -4 \\div \\dfrac{2}{5}$`,
      solution: `**1.** On décompose avant de multiplier : $A = -\\dfrac{3 \\times 8}{4 \\times 9} = -\\dfrac{3 \\times 4 \\times 2}{4 \\times 3 \\times 3} = -\\dfrac{2}{3}$.

**2.** Diviser par une fraction revient à multiplier par son inverse. L'inverse de $-\\dfrac{10}{3}$ est $-\\dfrac{3}{10}$ :
$B = \\dfrac{5}{6} \\times \\left(-\\dfrac{3}{10}\\right) = -\\dfrac{5 \\times 3}{2 \\times 3 \\times 2 \\times 5} = -\\dfrac{1}{4}$.

**3.** Le produit de deux nombres négatifs est positif :
$C = \\dfrac{7 \\times 18}{12 \\times 35} = \\dfrac{7 \\times 6 \\times 3}{6 \\times 2 \\times 7 \\times 5} = \\dfrac{3}{10}$.

**4.** L'inverse de $\\dfrac{2}{5}$ est $\\dfrac{5}{2}$ : $D = -4 \\times \\dfrac{5}{2} = -\\dfrac{20}{2} = -10$.`
    },
    {
      id: "4N2-ds-02",
      title: "Inverses, sommes et différences",
      difficulty: 1,
      points: 4,
      statement: `1. Donner l'inverse de chacun des nombres suivants : $\\dfrac{3}{7}$ ; $-5$ ; $-\\dfrac{2}{9}$ ; $0{,}25$.
2. Calculer et donner le résultat sous forme irréductible :
$$E = \\frac{2}{3} + \\frac{5}{6} \\qquad F = \\frac{3}{4} - \\frac{7}{10} \\qquad G = -\\frac{1}{2} + \\frac{5}{8}$$
3. Le nombre $0$ a-t-il un inverse ? Justifier.`,
      solution: `**1.** L'inverse d'un nombre $a$ non nul est le nombre qui, multiplié par $a$, donne $1$.
- inverse de $\\dfrac{3}{7}$ : $\\dfrac{7}{3}$ ;
- inverse de $-5$ : $-\\dfrac{1}{5}$ ;
- inverse de $-\\dfrac{2}{9}$ : $-\\dfrac{9}{2}$ ;
- $0{,}25 = \\dfrac{1}{4}$, son inverse est $4$ (car $0{,}25 \\times 4 = 1$).

**2.** On réduit au même dénominateur.
- $E = \\dfrac{4}{6} + \\dfrac{5}{6} = \\dfrac{9}{6} = \\dfrac{3}{2}$.
- $F = \\dfrac{15}{20} - \\dfrac{14}{20} = \\dfrac{1}{20}$.
- $G = -\\dfrac{4}{8} + \\dfrac{5}{8} = \\dfrac{1}{8}$.

**3.** Pour tout nombre $x$, $0 \\times x = 0 \\neq 1$. Aucun nombre multiplié par $0$ ne donne $1$ : **$0$ n'a pas d'inverse**.`
    },
    {
      id: "4N2-ds-03",
      title: "Calculs avec priorités",
      difficulty: 2,
      points: 5,
      statement: `Calculer en détaillant les étapes ; donner chaque résultat sous forme d'une fraction irréductible.
1. $H = \\dfrac{1}{3} + \\dfrac{2}{3} \\times \\dfrac{9}{4}$
2. $I = \\left(\\dfrac{1}{2} - \\dfrac{3}{4}\\right) \\div \\dfrac{5}{8}$
3. $J = \\dfrac{2 - \\dfrac{1}{3}}{1 + \\dfrac{2}{3}}$
4. Sarah écrit : « $\\dfrac{1}{3} + \\dfrac{2}{3} \\times \\dfrac{9}{4} = 1 \\times \\dfrac{9}{4} = \\dfrac{9}{4}$ ». Expliquer son erreur.`,
      solution: `**1.** La multiplication est prioritaire : $\\dfrac{2}{3} \\times \\dfrac{9}{4} = \\dfrac{18}{12} = \\dfrac{3}{2}$.
$H = \\dfrac{1}{3} + \\dfrac{3}{2} = \\dfrac{2}{6} + \\dfrac{9}{6} = \\dfrac{11}{6}$.

**2.** Parenthèses d'abord : $\\dfrac{1}{2} - \\dfrac{3}{4} = \\dfrac{2}{4} - \\dfrac{3}{4} = -\\dfrac{1}{4}$.
Puis $I = -\\dfrac{1}{4} \\times \\dfrac{8}{5} = -\\dfrac{8}{20} = -\\dfrac{2}{5}$.

**3.** Numérateur : $2 - \\dfrac{1}{3} = \\dfrac{6}{3} - \\dfrac{1}{3} = \\dfrac{5}{3}$. Dénominateur : $1 + \\dfrac{2}{3} = \\dfrac{5}{3}$.
$J = \\dfrac{5}{3} \\div \\dfrac{5}{3} = 1$.

**4.** Sarah a effectué l'addition $\\dfrac{1}{3} + \\dfrac{2}{3} = 1$ avant la multiplication : elle n'a pas respecté la priorité de la multiplication sur l'addition. Le bon résultat est $\\dfrac{11}{6}$.`
    },
    {
      id: "4N2-ds-04",
      title: "Le jardin partagé",
      difficulty: 2,
      points: 4,
      statement: `Un jardin a une aire de $360$ m². Les $\\dfrac{2}{5}$ du jardin sont occupés par le potager, $\\dfrac{1}{4}$ par la pelouse et le reste par des fleurs.
1. Quelle fraction du jardin est occupée par les fleurs ?
2. Calculer l'aire occupée par les fleurs.
3. Les tomates occupent les $\\dfrac{3}{8}$ du potager.
   a) Quelle fraction du jardin est occupée par les tomates ?
   b) Calculer l'aire occupée par les tomates.`,
      solution: `**1.** Le jardin entier correspond à $1 = \\dfrac{20}{20}$.
Fleurs : $1 - \\dfrac{2}{5} - \\dfrac{1}{4} = \\dfrac{20}{20} - \\dfrac{8}{20} - \\dfrac{5}{20} = \\dfrac{7}{20}$ du jardin.

**2.** $\\dfrac{7}{20} \\times 360 = \\dfrac{7 \\times 360}{20} = 7 \\times 18 = 126$. Les fleurs occupent **$126$ m²**.

**3. a)** Prendre les $\\dfrac{3}{8}$ des $\\dfrac{2}{5}$ revient à multiplier : $\\dfrac{3}{8} \\times \\dfrac{2}{5} = \\dfrac{6}{40} = \\dfrac{3}{20}$ du jardin.

**b)** $\\dfrac{3}{20} \\times 360 = 3 \\times 18 = 54$. Les tomates occupent **$54$ m²**.`
    },
    {
      id: "4N2-ds-05",
      title: "Le réservoir",
      difficulty: 3,
      points: 5,
      statement: `Un réservoir est rempli aux $\\dfrac{3}{4}$ de sa capacité. On utilise les $\\dfrac{2}{3}$ de son contenu pour arroser.
1. Quelle fraction de la capacité du réservoir a-t-on utilisée ?
2. Quelle fraction de la capacité reste-t-il dans le réservoir ?
3. Il reste $15$ L dans le réservoir. Calculer sa capacité.
4. On ajoute de l'eau pour que le réservoir soit rempli aux $\\dfrac{5}{6}$ de sa capacité. Combien de litres ajoute-t-on ?`,
      solution: `**1.** On a utilisé les $\\dfrac{2}{3}$ des $\\dfrac{3}{4}$ : $\\dfrac{2}{3} \\times \\dfrac{3}{4} = \\dfrac{6}{12} = \\dfrac{1}{2}$ de la capacité.

**2.** $\\dfrac{3}{4} - \\dfrac{1}{2} = \\dfrac{3}{4} - \\dfrac{2}{4} = \\dfrac{1}{4}$ de la capacité.

**3.** Le quart de la capacité vaut $15$ L, donc la capacité est $4 \\times 15 = 60$ L.

**4.** Les $\\dfrac{5}{6}$ de la capacité représentent $\\dfrac{5}{6} \\times 60 = 50$ L. Il y a déjà $15$ L, donc on ajoute $50 - 15 = 35$ L.`
    },
    {
      id: "4N2-ds-06",
      title: "Fractions emboîtées et bouteilles",
      difficulty: 3,
      points: 4,
      statement: `1. Calculer $K = \\dfrac{1}{1 + \\dfrac{1}{1 + \\dfrac{1}{2}}}$ en détaillant les étapes.
2. Calculer $L = \\left(-\\dfrac{3}{4}\\right) \\div \\left(-\\dfrac{9}{8}\\right) \\times \\left(-\\dfrac{2}{3}\\right)$.
3. Combien de bouteilles de $\\dfrac{3}{4}$ L peut-on remplir entièrement avec $12$ L de jus de pomme ? Écrire le calcul sous la forme d'une division de fractions.`,
      solution: `**1.** On calcule de bas en haut :
- $1 + \\dfrac{1}{2} = \\dfrac{3}{2}$ ;
- $\\dfrac{1}{\\frac{3}{2}} = \\dfrac{2}{3}$ (inverse de $\\dfrac{3}{2}$) ;
- $1 + \\dfrac{2}{3} = \\dfrac{5}{3}$ ;
- $K = \\dfrac{1}{\\frac{5}{3}} = \\dfrac{3}{5}$.

**2.** On calcule de gauche à droite (même priorité) :
$\\left(-\\dfrac{3}{4}\\right) \\div \\left(-\\dfrac{9}{8}\\right) = \\dfrac{3}{4} \\times \\dfrac{8}{9} = \\dfrac{24}{36} = \\dfrac{2}{3}$, puis $L = \\dfrac{2}{3} \\times \\left(-\\dfrac{2}{3}\\right) = -\\dfrac{4}{9}$.

**3.** $12 \\div \\dfrac{3}{4} = 12 \\times \\dfrac{4}{3} = \\dfrac{48}{3} = 16$. On peut remplir **$16$ bouteilles**.`
    },
    {
      id: "4N2-ds-07",
      title: "Une somme télescopique",
      difficulty: 4,
      points: 5,
      statement: `1. Calculer $\\dfrac{1}{2} - \\dfrac{1}{3}$ puis $\\dfrac{1}{3} - \\dfrac{1}{4}$.
2. Soit $n$ un entier naturel non nul. Montrer que $\\dfrac{1}{n} - \\dfrac{1}{n+1} = \\dfrac{1}{n \\times (n+1)}$.
3. En déduire, sans réduire au même dénominateur, la valeur de
$$S = \\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} + \\frac{1}{20} + \\frac{1}{30}.$$`,
      solution: `**1.** $\\dfrac{1}{2} - \\dfrac{1}{3} = \\dfrac{3}{6} - \\dfrac{2}{6} = \\dfrac{1}{6}$ et $\\dfrac{1}{3} - \\dfrac{1}{4} = \\dfrac{4}{12} - \\dfrac{3}{12} = \\dfrac{1}{12}$.

**2.** Dénominateur commun $n(n+1)$ :
$$\\frac{1}{n} - \\frac{1}{n+1} = \\frac{n+1}{n(n+1)} - \\frac{n}{n(n+1)} = \\frac{n + 1 - n}{n(n+1)} = \\frac{1}{n(n+1)}.$$

**3.** On remarque que $2 = 1 \\times 2$, $6 = 2 \\times 3$, $12 = 3 \\times 4$, $20 = 4 \\times 5$ et $30 = 5 \\times 6$. D'après la question 2 :
$$S = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{5}\\right) + \\left(\\frac{1}{5} - \\frac{1}{6}\\right).$$
Les termes intermédiaires s'éliminent deux à deux : $S = 1 - \\dfrac{1}{6} = \\dfrac{5}{6}$.`
    },
    {
      id: "4N2-ds-08",
      title: "Le partage d'un terrain",
      difficulty: 4,
      points: 6,
      statement: `Un agriculteur partage son terrain entre quatre personnes :
- Anna reçoit le tiers du terrain ;
- Bilal reçoit les $\\dfrac{2}{5}$ de ce qui reste après la part d'Anna ;
- Chloé reçoit les $\\dfrac{3}{4}$ de ce qui reste ensuite ;
- Driss reçoit le reste, soit $300$ m².

1. Montrer que Bilal reçoit les $\\dfrac{4}{15}$ du terrain.
2. Calculer la fraction du terrain reçue par Chloé, puis par Driss.
3. Calculer l'aire totale du terrain, puis l'aire de la part de chacun.
4. Vérifier la cohérence des résultats.`,
      solution: `**1.** Après la part d'Anna, il reste $1 - \\dfrac{1}{3} = \\dfrac{2}{3}$ du terrain. Bilal en reçoit les $\\dfrac{2}{5}$ : $\\dfrac{2}{5} \\times \\dfrac{2}{3} = \\dfrac{4}{15}$ du terrain.

**2.** Il reste $\\dfrac{2}{3} - \\dfrac{4}{15} = \\dfrac{10}{15} - \\dfrac{4}{15} = \\dfrac{6}{15} = \\dfrac{2}{5}$ du terrain.
Chloé : $\\dfrac{3}{4} \\times \\dfrac{2}{5} = \\dfrac{6}{20} = \\dfrac{3}{10}$ du terrain.
Driss : $\\dfrac{2}{5} - \\dfrac{3}{10} = \\dfrac{4}{10} - \\dfrac{3}{10} = \\dfrac{1}{10}$ du terrain.

**3.** Le dixième du terrain mesure $300$ m², donc le terrain mesure $10 \\times 300 = 3\\,000$ m².
- Anna : $\\dfrac{1}{3} \\times 3\\,000 = 1\\,000$ m² ;
- Bilal : $\\dfrac{4}{15} \\times 3\\,000 = 800$ m² ;
- Chloé : $\\dfrac{3}{10} \\times 3\\,000 = 900$ m² ;
- Driss : $300$ m².

**4.** $1\\,000 + 800 + 900 + 300 = 3\\,000$ m² : on retrouve bien l'aire totale. De même, $\\dfrac{1}{3} + \\dfrac{4}{15} + \\dfrac{3}{10} + \\dfrac{1}{10} = \\dfrac{10 + 8 + 9 + 3}{30} = 1$.`
    },
    {
      id: "4N2-ds-09",
      title: "Crêpes et paquet de farine",
      difficulty: 1,
      points: 4,
      statement: `Une recette de crêpes pour $6$ personnes demande $\\dfrac{3}{4}$ L de lait.
1. Quelle quantité de lait faut-il pour $4$ personnes ? Donner le résultat sous forme d'une fraction simplifiée.
2. Sami utilise d'abord les $\\dfrac{2}{5}$ d'un paquet de farine, puis, le lendemain, le quart de ce qui reste.
   a) Calculer la fraction du paquet utilisée le lendemain.
   b) Calculer la fraction du paquet utilisée en tout.
3. Le paquet contenait $1$ kg de farine. Quelle masse de farine reste-t-il ?`,
      solution: `**1.** Pour $1$ personne, il faut $\\dfrac{3}{4} \\div 6 = \\dfrac{3}{4} \\times \\dfrac{1}{6} = \\dfrac{3}{24} = \\dfrac{1}{8}$ L. Pour $4$ personnes : $4 \\times \\dfrac{1}{8} = \\dfrac{4}{8} = \\dfrac{1}{2}$ L.
(On peut aussi calculer $\\dfrac{3}{4} \\times \\dfrac{4}{6} = \\dfrac{12}{24} = \\dfrac{1}{2}$.)

**2. a)** Après le premier jour, il reste $1 - \\dfrac{2}{5} = \\dfrac{3}{5}$ du paquet. Le quart de ce reste représente $\\dfrac{1}{4} \\times \\dfrac{3}{5} = \\dfrac{3}{20}$ du paquet.

**b)** En tout : $\\dfrac{2}{5} + \\dfrac{3}{20} = \\dfrac{8}{20} + \\dfrac{3}{20} = \\dfrac{11}{20}$ du paquet.

**3.** Il reste $1 - \\dfrac{11}{20} = \\dfrac{9}{20}$ du paquet, soit $\\dfrac{9}{20} \\times 1\\,000 = 450$ g de farine.`
    },
    {
      id: "4N2-ds-10",
      title: "Une journée en fractions",
      difficulty: 2,
      points: 5,
      statement: `Un jour de semaine, Lina passe $\\dfrac{1}{3}$ de la journée ($24$ h) à dormir, $\\dfrac{1}{4}$ au collège et $\\dfrac{1}{8}$ devant des écrans.
1. Quelle fraction de la journée reste-t-il pour ses autres activités ?
2. Combien d'heures cela représente-t-il ? Combien d'heures passe-t-elle devant des écrans ?
3. Les $\\dfrac{2}{3}$ de son temps d'écran sont consacrés à regarder des vidéos. Quelle fraction de la journée cela représente-t-il ? Combien d'heures ?
4. Le samedi, son temps d'écran augmente d'un tiers par rapport à un jour de semaine. Quelle fraction de la journée passe-t-elle alors devant des écrans ?`,
      solution: `**1.** Fraction déjà occupée : $\\dfrac{1}{3} + \\dfrac{1}{4} + \\dfrac{1}{8} = \\dfrac{8}{24} + \\dfrac{6}{24} + \\dfrac{3}{24} = \\dfrac{17}{24}$.
Il reste $1 - \\dfrac{17}{24} = \\dfrac{24}{24} - \\dfrac{17}{24} = \\dfrac{7}{24}$ de la journée.

**2.** $\\dfrac{7}{24} \\times 24 = 7$ h pour les autres activités, et $\\dfrac{1}{8} \\times 24 = 3$ h devant des écrans.

**3.** Prendre les $\\dfrac{2}{3}$ de $\\dfrac{1}{8}$ revient à multiplier : $\\dfrac{2}{3} \\times \\dfrac{1}{8} = \\dfrac{2}{24} = \\dfrac{1}{12}$ de la journée, soit $\\dfrac{1}{12} \\times 24 = 2$ h.

**4.** Augmenter d'un tiers revient à ajouter $\\dfrac{1}{3}$ de la quantité, donc à la multiplier par $1 + \\dfrac{1}{3} = \\dfrac{4}{3}$ :
$\\dfrac{1}{8} \\times \\dfrac{4}{3} = \\dfrac{4}{24} = \\dfrac{1}{6}$ de la journée (soit $4$ h).`
    },
    {
      id: "4N2-ds-11",
      title: "Remplir une baignoire",
      difficulty: 3,
      points: 5,
      statement: `Une baignoire vide peut être remplie par le robinet A seul en $6$ minutes, ou par le robinet B seul en $12$ minutes. Les débits sont constants.
1. Quelle fraction de la baignoire le robinet A remplit-il en une minute ? Et le robinet B ?
2. On ouvre les deux robinets en même temps.
   a) Quelle fraction de la baignoire est remplie en une minute ?
   b) En combien de temps la baignoire est-elle pleine ?
3. On ouvre les deux robinets, mais la bonde est restée ouverte : seule, elle viderait une baignoire pleine en $8$ minutes. En combien de temps la baignoire sera-t-elle pleine ?
4. Sans bonde ouverte, on ouvre d'abord le robinet A seul pendant $2$ minutes, puis on ouvre aussi le robinet B. Combien de temps faut-il en tout pour remplir la baignoire ?`,
      solution: `**1.** En une minute, A remplit $\\dfrac{1}{6}$ de la baignoire et B en remplit $\\dfrac{1}{12}$.

**2. a)** $\\dfrac{1}{6} + \\dfrac{1}{12} = \\dfrac{2}{12} + \\dfrac{1}{12} = \\dfrac{3}{12} = \\dfrac{1}{4}$ de la baignoire par minute.

**b)** Il faut $4$ quarts pour remplir la baignoire, donc $4$ minutes.

**3.** En une minute, la bonde vide $\\dfrac{1}{8}$ de la baignoire. Bilan par minute :
$\\dfrac{1}{6} + \\dfrac{1}{12} - \\dfrac{1}{8} = \\dfrac{4}{24} + \\dfrac{2}{24} - \\dfrac{3}{24} = \\dfrac{3}{24} = \\dfrac{1}{8}$.
La baignoire se remplit de $\\dfrac{1}{8}$ par minute : elle est pleine en **8 minutes**.

**4.** En $2$ minutes, A remplit $2 \\times \\dfrac{1}{6} = \\dfrac{1}{3}$ de la baignoire. Il reste $1 - \\dfrac{1}{3} = \\dfrac{2}{3}$ à remplir, à raison de $\\dfrac{1}{4}$ par minute avec les deux robinets :
$\\dfrac{2}{3} \\div \\dfrac{1}{4} = \\dfrac{2}{3} \\times 4 = \\dfrac{8}{3}$ min, soit $2$ min $40$ s (car $\\dfrac{2}{3}$ min $= 40$ s).
Durée totale : $2$ min $+ 2$ min $40$ s $=$ **4 min 40 s**.`
    },
    {
      id: "4N2-ds-12",
      title: "Entre deux fractions",
      difficulty: 4,
      points: 6,
      statement: `1. Trouver le nombre situé exactement au milieu de $\\dfrac{2}{7}$ et $\\dfrac{3}{7}$. Justifier.
2. Écrire $\\dfrac{1}{3}$ et $\\dfrac{1}{2}$ avec le dénominateur $24$, puis donner trois fractions comprises strictement entre $\\dfrac{1}{3}$ et $\\dfrac{1}{2}$.
3. Tom affirme : « Pour additionner deux fractions, il suffit d'additionner les numérateurs entre eux et les dénominateurs entre eux. »
   a) Montrer, à l'aide d'un exemple, que Tom se trompe.
   b) Avec la « méthode de Tom », on obtient à partir de $\\dfrac{1}{3}$ et $\\dfrac{1}{2}$ la fraction $\\dfrac{1 + 1}{3 + 2} = \\dfrac{2}{5}$. Démontrer, par des calculs de différences, que $\\dfrac{2}{5}$ est comprise entre $\\dfrac{1}{3}$ et $\\dfrac{1}{2}$.
4. Trouver une fraction de dénominateur $48$ comprise strictement entre $\\dfrac{5}{8}$ et $\\dfrac{2}{3}$.`,
      solution: `**1.** $\\dfrac{2}{7} = \\dfrac{4}{14}$ et $\\dfrac{3}{7} = \\dfrac{6}{14}$. Le nombre situé au milieu est $\\dfrac{5}{14}$ : en effet $\\dfrac{5}{14} - \\dfrac{4}{14} = \\dfrac{1}{14}$ et $\\dfrac{6}{14} - \\dfrac{5}{14} = \\dfrac{1}{14}$, les deux écarts sont égaux.
(Autre méthode : $\\left(\\dfrac{2}{7} + \\dfrac{3}{7}\\right) \\div 2 = \\dfrac{5}{7} \\times \\dfrac{1}{2} = \\dfrac{5}{14}$.)

**2.** $\\dfrac{1}{3} = \\dfrac{8}{24}$ et $\\dfrac{1}{2} = \\dfrac{12}{24}$. Les fractions $\\dfrac{9}{24}$, $\\dfrac{10}{24}$ et $\\dfrac{11}{24}$ conviennent (soit $\\dfrac{3}{8}$, $\\dfrac{5}{12}$ et $\\dfrac{11}{24}$).

**3. a)** Avec la méthode de Tom, $\\dfrac{1}{2} + \\dfrac{1}{2}$ donnerait $\\dfrac{2}{4} = \\dfrac{1}{2}$, alors que $\\dfrac{1}{2} + \\dfrac{1}{2} = 1$. Tom se trompe.

**b)** $\\dfrac{2}{5} - \\dfrac{1}{3} = \\dfrac{6}{15} - \\dfrac{5}{15} = \\dfrac{1}{15}$, qui est positif, donc $\\dfrac{2}{5} > \\dfrac{1}{3}$.
$\\dfrac{1}{2} - \\dfrac{2}{5} = \\dfrac{5}{10} - \\dfrac{4}{10} = \\dfrac{1}{10}$, qui est positif, donc $\\dfrac{2}{5} < \\dfrac{1}{2}$.
Ainsi $\\dfrac{1}{3} < \\dfrac{2}{5} < \\dfrac{1}{2}$ : la fraction obtenue n'est pas la somme, mais elle est bien comprise entre les deux.

**4.** $\\dfrac{5}{8} = \\dfrac{30}{48}$ et $\\dfrac{2}{3} = \\dfrac{32}{48}$. La fraction $\\dfrac{31}{48}$ convient : $\\dfrac{30}{48} < \\dfrac{31}{48} < \\dfrac{32}{48}$.`
    }
  ],
  "4N3": [
    {
      id: "4N3-ds-01",
      title: "Calculer des puissances",
      difficulty: 1,
      points: 4,
      statement: `1. Calculer sans calculatrice :
$$2^5 \\qquad (-3)^4 \\qquad -3^4 \\qquad (-2)^3 \\qquad 5^0 \\qquad 10^{-3}$$
2. Écrire sous la forme d'une puissance d'un nombre :
   a) $7 \\times 7 \\times 7 \\times 7$
   b) $(-4) \\times (-4) \\times (-4)$
   c) $\\dfrac{1}{3 \\times 3 \\times 3}$
3. Expliquer pourquoi $(-3)^4$ et $-3^4$ ne sont pas égaux.`,
      solution: `**1.**
- $2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$ ;
- $(-3)^4 = (-3) \\times (-3) \\times (-3) \\times (-3) = 81$ (quatre facteurs négatifs) ;
- $-3^4 = -(3 \\times 3 \\times 3 \\times 3) = -81$ ;
- $(-2)^3 = (-2) \\times (-2) \\times (-2) = -8$ (trois facteurs négatifs) ;
- $5^0 = 1$ (par convention, $a^0 = 1$ pour $a \\neq 0$) ;
- $10^{-3} = \\dfrac{1}{10^3} = 0{,}001$.

**2. a)** $7^4$ ; **b)** $(-4)^3$ ; **c)** $\\dfrac{1}{3^3} = 3^{-3}$.

**3.** Dans $(-3)^4$, l'exposant porte sur $-3$ (grâce aux parenthèses) : on multiplie quatre fois $-3$ et on obtient $81$. Dans $-3^4$, l'exposant ne porte que sur $3$ : on calcule $3^4 = 81$ puis on prend l'opposé, $-81$.`
    },
    {
      id: "4N3-ds-02",
      title: "Puissances de 10",
      difficulty: 1,
      points: 4,
      statement: `1. Écrire sous la forme $10^n$ :
$$A = 10^4 \\times 10^3 \\qquad B = \\frac{10^5}{10^8} \\qquad C = (10^2)^3 \\qquad D = 10^{-2} \\times 10^6$$
2. Donner l'écriture décimale de : $3{,}7 \\times 10^4$ ; $2{,}5 \\times 10^{-3}$ ; $10^{-1}$.
3. Compléter : $0{,}000\\,01 = 10^{\\ldots}$ et $1$ million $= 10^{\\ldots}$.`,
      solution: `**1.** On utilise $10^m \\times 10^n = 10^{m+n}$, $\\dfrac{10^m}{10^n} = 10^{m-n}$ et $(10^m)^n = 10^{m \\times n}$.
- $A = 10^{4+3} = 10^7$ ;
- $B = 10^{5-8} = 10^{-3}$ ;
- $C = 10^{2 \\times 3} = 10^6$ ;
- $D = 10^{-2+6} = 10^4$.

**2.**
- $3{,}7 \\times 10^4 = 37\\,000$ (on décale la virgule de 4 rangs vers la droite) ;
- $2{,}5 \\times 10^{-3} = 0{,}002\\,5$ (on décale la virgule de 3 rangs vers la gauche) ;
- $10^{-1} = 0{,}1$.

**3.** $0{,}000\\,01 = \\dfrac{1}{100\\,000} = 10^{-5}$ et $1$ million $= 1\\,000\\,000 = 10^6$.`
    },
    {
      id: "4N3-ds-03",
      title: "Règles de calcul sur les puissances",
      difficulty: 2,
      points: 5,
      statement: `1. Écrire chaque expression sous la forme d'une seule puissance :
$$A = 2^3 \\times 2^5 \\qquad B = \\frac{5^7}{5^4} \\qquad C = (3^2)^4 \\qquad D = 6^3 \\times 6^{-5} \\qquad E = 2^4 \\times 5^4$$
2. Donner la valeur de $B$ et de $E$ sans calculatrice.
3. Malik affirme que $2^3 + 2^5 = 2^8$. Vérifier par un calcul s'il a raison.`,
      solution: `**1.**
- $A = 2^{3+5} = 2^8$ ;
- $B = 5^{7-4} = 5^3$ ;
- $C = 3^{2 \\times 4} = 3^8$ ;
- $D = 6^{3 + (-5)} = 6^{-2}$ ;
- $E = (2 \\times 5)^4 = 10^4$ (même exposant : $a^n \\times b^n = (a \\times b)^n$).

**2.** $B = 5^3 = 125$ et $E = 10^4 = 10\\,000$.

**3.** $2^3 + 2^5 = 8 + 32 = 40$ alors que $2^8 = 256$. **Malik a tort** : la règle $a^m \\times a^n = a^{m+n}$ concerne les produits, pas les sommes.`
    },
    {
      id: "4N3-ds-04",
      title: "Notation scientifique",
      difficulty: 2,
      points: 4,
      statement: `1. Écrire chaque nombre en notation scientifique :
$$45\\,000\\,000 \\qquad 0{,}000\\,32 \\qquad 728 \\times 10^5 \\qquad 0{,}06 \\times 10^{-2}$$
2. Calculer $F = \\dfrac{3 \\times 10^5 \\times 4 \\times 10^{-2}}{6 \\times 10^2}$ et donner le résultat en notation scientifique, puis en écriture décimale.
3. Ranger dans l'ordre croissant : $4{,}5 \\times 10^7$ ; $7{,}28 \\times 10^7$ ; $3{,}2 \\times 10^{-4}$ ; $6 \\times 10^{-4}$.`,
      solution: `**1.** La notation scientifique s'écrit $a \\times 10^n$ avec $1 \\leqslant a < 10$.
- $45\\,000\\,000 = 4{,}5 \\times 10^7$ ;
- $0{,}000\\,32 = 3{,}2 \\times 10^{-4}$ ;
- $728 \\times 10^5 = 7{,}28 \\times 10^2 \\times 10^5 = 7{,}28 \\times 10^7$ ;
- $0{,}06 \\times 10^{-2} = 6 \\times 10^{-2} \\times 10^{-2} = 6 \\times 10^{-4}$.

**2.** $F = \\dfrac{3 \\times 4}{6} \\times \\dfrac{10^5 \\times 10^{-2}}{10^2} = 2 \\times \\dfrac{10^3}{10^2} = 2 \\times 10^1$, soit $F = 20$.

**3.** On compare d'abord les exposants, puis les mantisses : $3{,}2 \\times 10^{-4} < 6 \\times 10^{-4} < 4{,}5 \\times 10^7 < 7{,}28 \\times 10^7$.`
    },
    {
      id: "4N3-ds-05",
      title: "La lumière du Soleil",
      difficulty: 3,
      points: 5,
      statement: `On donne :
- distance moyenne entre la Terre et le Soleil : $1{,}5 \\times 10^8$ km ;
- vitesse de la lumière : $3 \\times 10^5$ km/s.

1. Calculer le temps, en secondes, mis par la lumière du Soleil pour atteindre la Terre. Convertir ce temps en minutes et secondes.
2. Une année-lumière est la distance parcourue par la lumière en une année de $365$ jours. Montrer qu'elle vaut environ $9{,}46 \\times 10^{12}$ km.
3. L'étoile la plus proche du Soleil est située à environ $4{,}2$ années-lumière. Donner cette distance en km, en notation scientifique (mantisse arrondie au centième).`,
      solution: `**1.** $t = \\dfrac{d}{v} = \\dfrac{1{,}5 \\times 10^8}{3 \\times 10^5} = 0{,}5 \\times 10^3 = 500$ s.
$500 = 8 \\times 60 + 20$, donc la lumière met **8 min 20 s**.

**2.** Une année compte $365 \\times 24 \\times 3\\,600 = 31\\,536\\,000$ s.
Distance : $3 \\times 10^5 \\times 31\\,536\\,000 = 9\\,460\\,800\\,000\\,000 \\approx 9{,}46 \\times 10^{12}$ km.

**3.** $4{,}2 \\times 9{,}460\\,8 \\times 10^{12} \\approx 39{,}74 \\times 10^{12} \\approx 3{,}97 \\times 10^{13}$ km.`
    },
    {
      id: "4N3-ds-06",
      title: "Stockage de photos",
      difficulty: 3,
      points: 4,
      statement: `On rappelle que $1$ Mo $= 10^6$ octets, $1$ Go $= 10^9$ octets et $1$ To $= 10^{12}$ octets. Une photo occupe $4$ Mo.
1. Écrire la taille d'une photo en octets, en notation scientifique.
2. Combien de photos peut-on stocker sur un disque dur de $2$ To ?
3. Combien de photos peut-on stocker sur une clé USB de $64$ Go ?
4. Une vidéo de $3$ Go et $2\\,500$ photos peuvent-elles tenir ensemble sur une clé de $16$ Go ? Justifier.`,
      solution: `**1.** $4$ Mo $= 4 \\times 10^6$ octets.

**2.** $2$ To $= 2 \\times 10^{12}$ octets. $\\dfrac{2 \\times 10^{12}}{4 \\times 10^6} = 0{,}5 \\times 10^{6} = 5 \\times 10^5$. On peut stocker **$500\\,000$ photos**.

**3.** $\\dfrac{64 \\times 10^9}{4 \\times 10^6} = 16 \\times 10^3 = 16\\,000$ photos.

**4.** Les photos occupent $2\\,500 \\times 4 = 10\\,000$ Mo $= 10^4 \\times 10^6 = 10^{10}$ octets, soit $10$ Go. Avec la vidéo : $10 + 3 = 13$ Go. Comme $13 < 16$, **cela tient sur la clé**.`
    },
    {
      id: "4N3-ds-07",
      title: "Comparer de grandes puissances",
      difficulty: 4,
      points: 5,
      statement: `1. Calculer $2^{10}$.
2. En déduire, sans calculatrice, laquelle des deux puissances $2^{20}$ et $10^6$ est la plus grande.
3. a) Montrer que $2^{30} = 8^{10}$ et que $3^{20} = 9^{10}$.
   b) En déduire le rangement dans l'ordre croissant de $2^{30}$, $3^{20}$ et $10^9$.
4. Simplifier $A = \\dfrac{2^5 \\times 4^3}{8^2}$ puis donner sa valeur.`,
      solution: `**1.** $2^{10} = 1\\,024$.

**2.** $2^{20} = 2^{10 \\times 2} = (2^{10})^2 = 1\\,024^2$ et $10^6 = (10^3)^2 = 1\\,000^2$. Comme $1\\,024 > 1\\,000$, on a $1\\,024^2 > 1\\,000^2$, donc **$2^{20} > 10^6$**.

**3. a)** $2^{30} = 2^{3 \\times 10} = (2^3)^{10} = 8^{10}$ et $3^{20} = 3^{2 \\times 10} = (3^2)^{10} = 9^{10}$.
**b)** On a $9^{10} > 8^{10}$ (même exposant, $9 > 8$), donc $3^{20} > 2^{30}$.
De plus $2^{30} = (2^{10})^3 = 1\\,024^3 > 1\\,000^3 = 10^9$.
Donc $10^9 < 2^{30} < 3^{20}$.

**4.** $4 = 2^2$ et $8 = 2^3$ : $A = \\dfrac{2^5 \\times (2^2)^3}{(2^3)^2} = \\dfrac{2^5 \\times 2^6}{2^6} = 2^5 = 32$.`
    },
    {
      id: "4N3-ds-08",
      title: "La croissance des bactéries",
      difficulty: 4,
      points: 6,
      statement: `Une population de bactéries double toutes les $20$ minutes. Au départ, il y a $500$ bactéries.
1. Combien y a-t-il de bactéries au bout d'une heure ?
2. Exprimer le nombre de bactéries après $n$ doublements à l'aide d'une puissance.
3. Montrer qu'au bout de $5$ heures, il y a $16\\,384\\,000$ bactéries. Écrire ce nombre en notation scientifique.
4. Une bactérie mesure $2 \\times 10^{-6}$ m de long. Si l'on alignait toutes les bactéries obtenues au bout de $5$ heures, quelle longueur obtiendrait-on, en mètres ?
5. Au bout de combien de temps la population dépasse-t-elle un million de bactéries ?`,
      solution: `**1.** En une heure, il y a $3$ périodes de $20$ min, donc $3$ doublements : $500 \\times 2^3 = 500 \\times 8 = 4\\,000$ bactéries.

**2.** Après $n$ doublements : $500 \\times 2^n$ bactéries.

**3.** En $5$ h, il y a $5 \\times 3 = 15$ doublements : $500 \\times 2^{15} = 500 \\times 32\\,768 = 16\\,384\\,000$ bactéries, soit $1{,}638\\,4 \\times 10^7$.

**4.** $1{,}638\\,4 \\times 10^7 \\times 2 \\times 10^{-6} = 3{,}276\\,8 \\times 10^1 = 32{,}768$ m, soit environ **$32{,}8$ m**.

**5.** On cherche le plus petit $n$ tel que $500 \\times 2^n > 1\\,000\\,000$, c'est-à-dire $2^n > 2\\,000$.
$2^{10} = 1\\,024 < 2\\,000$ et $2^{11} = 2\\,048 > 2\\,000$, donc $n = 11$ doublements.
$11 \\times 20 = 220$ min $= 3$ h $40$ min. La population dépasse un million au bout de **3 h 40 min**.`
    },
    {
      id: "4N3-ds-09",
      title: "Du kilomètre au nanomètre",
      difficulty: 1,
      points: 4,
      statement: `On rappelle que $1$ mm $= 10^{-3}$ m, $1$ µm (micromètre) $= 10^{-6}$ m et $1$ nm (nanomètre) $= 10^{-9}$ m.
1. Écrire $1$ km en mètres sous la forme d'une puissance de $10$.
2. Un cheveu a une épaisseur de $80$ µm. Écrire cette épaisseur en mètres, en notation scientifique.
3. Combien y a-t-il de micromètres dans un millimètre ? Justifier par un calcul sur les puissances de $10$.
4. Un virus mesure environ $100$ nm.
   a) Écrire cette longueur en mètres sous la forme d'une puissance de $10$.
   b) Combien de virus faudrait-il aligner pour couvrir l'épaisseur du cheveu ?`,
      solution: `**1.** $1$ km $= 1\\,000$ m $= 10^3$ m.

**2.** $80$ µm $= 80 \\times 10^{-6}$ m $= 8 \\times 10 \\times 10^{-6}$ m $= 8 \\times 10^{-5}$ m.

**3.** $\\dfrac{1 \\text{ mm}}{1 \\text{ µm}} = \\dfrac{10^{-3}}{10^{-6}} = 10^{-3 - (-6)} = 10^{3}$. Il y a $1\\,000$ micromètres dans un millimètre.

**4. a)** $100$ nm $= 10^2 \\times 10^{-9}$ m $= 10^{-7}$ m.

**b)** $\\dfrac{8 \\times 10^{-5}}{10^{-7}} = 8 \\times 10^{-5 - (-7)} = 8 \\times 10^{2} = 800$. Il faudrait aligner environ $800$ virus.`
    },
    {
      id: "4N3-ds-10",
      title: "L'eau des océans",
      difficulty: 2,
      points: 5,
      statement: `Le volume d'eau des océans est estimé à $1{,}34 \\times 10^{9}$ km³. On rappelle que $1$ km³ $= 10^{9}$ m³ et que $1$ m³ $= 10^{3}$ L.
1. Montrer que $1$ km³ $= 10^{12}$ L.
2. Exprimer le volume d'eau des océans en litres, en notation scientifique.
3. La Terre compte environ $8 \\times 10^{9}$ habitants. Si l'on partageait l'eau des océans équitablement, quel volume, en litres, reviendrait à chaque habitant ? Donner le résultat en notation scientifique.
4. Une goutte d'eau a un volume d'environ $5 \\times 10^{-5}$ L. Combien de gouttes d'eau contiennent les océans ? Donner le résultat en notation scientifique.`,
      solution: `**1.** $1$ km³ $= 10^9$ m³ $= 10^9 \\times 10^3$ L $= 10^{9 + 3}$ L $= 10^{12}$ L.

**2.** $1{,}34 \\times 10^{9} \\times 10^{12} = 1{,}34 \\times 10^{21}$ L.

**3.** $\\dfrac{1{,}34 \\times 10^{21}}{8 \\times 10^{9}} = \\dfrac{1{,}34}{8} \\times 10^{21 - 9} = 0{,}1675 \\times 10^{12} = 1{,}675 \\times 10^{11}$ L par habitant.

**4.** $\\dfrac{1{,}34 \\times 10^{21}}{5 \\times 10^{-5}} = \\dfrac{1{,}34}{5} \\times 10^{21 - (-5)} = 0{,}268 \\times 10^{26} = 2{,}68 \\times 10^{25}$ gouttes.`
    },
    {
      id: "4N3-ds-11",
      title: "Les atomes d'un diamant",
      difficulty: 3,
      points: 5,
      statement: `Un diamant est formé d'atomes de carbone. Un atome de carbone a une masse d'environ $2 \\times 10^{-23}$ g et un diamètre d'environ $1{,}4 \\times 10^{-10}$ m.
1. Calculer la masse d'un million d'atomes de carbone. Donner le résultat en notation scientifique.
2. Un petit diamant a une masse de $0{,}2$ g. Montrer qu'il contient environ $10^{22}$ atomes de carbone.
3. On imagine que l'on aligne tous les atomes de ce diamant, côte à côte, en ligne droite. Quelle longueur, en mètres, obtiendrait-on ? Donner le résultat en notation scientifique.
4. La distance entre la Terre et le Soleil est d'environ $1{,}5 \\times 10^{11}$ m. Combien de fois environ la longueur trouvée à la question 3 est-elle plus grande que cette distance ? Arrondir à l'unité.`,
      solution: `**1.** Un million $= 10^6$. Masse : $10^6 \\times 2 \\times 10^{-23} = 2 \\times 10^{6 + (-23)} = 2 \\times 10^{-17}$ g.

**2.** Nombre d'atomes : $\\dfrac{0{,}2}{2 \\times 10^{-23}} = \\dfrac{0{,}2}{2} \\times 10^{23} = 0{,}1 \\times 10^{23} = 10^{-1} \\times 10^{23} = 10^{22}$.

**3.** Longueur : $10^{22} \\times 1{,}4 \\times 10^{-10} = 1{,}4 \\times 10^{22 - 10} = 1{,}4 \\times 10^{12}$ m.

**4.** $\\dfrac{1{,}4 \\times 10^{12}}{1{,}5 \\times 10^{11}} = \\dfrac{1{,}4}{1{,}5} \\times 10^{1} \\approx 0{,}933 \\times 10 \\approx 9{,}33$.
La longueur obtenue représente environ **9 fois** la distance Terre-Soleil.`
    },
    {
      id: "4N3-ds-12",
      title: "Le dernier chiffre d'une puissance",
      difficulty: 4,
      points: 6,
      statement: `1. Calculer $3^1$, $3^2$, $3^3$, $3^4$, $3^5$, $3^6$, $3^7$ et $3^8$.
2. Quels sont les chiffres des unités obtenus ? Que remarque-t-on ? Expliquer pourquoi ce phénomène se poursuit pour les puissances suivantes.
3. En déduire le chiffre des unités de $3^{2026}$.
4. a) Trouver de même le cycle des chiffres des unités des puissances de $7$.
   b) En déduire le chiffre des unités de $7^{100}$.
5. Démontrer que $3^{2025} + 7^{2025}$ est divisible par $10$.`,
      solution: `**1.** $3^1 = 3$ ; $3^2 = 9$ ; $3^3 = 27$ ; $3^4 = 81$ ; $3^5 = 243$ ; $3^6 = 729$ ; $3^7 = 2\\,187$ ; $3^8 = 6\\,561$.

**2.** Chiffres des unités : $3$, $9$, $7$, $1$, $3$, $9$, $7$, $1$. Ils se répètent par cycles de $4$.
Pour passer d'une puissance à la suivante, on multiplie par $3$, et le chiffre des unités du résultat ne dépend que du chiffre des unités de la puissance précédente. Comme on retrouve le chiffre $1$ tous les $4$ rangs (et $1 \\times 3 = 3$), le cycle $3$ ; $9$ ; $7$ ; $1$ recommence indéfiniment.

**3.** $2026 = 4 \\times 506 + 2$. Après $506$ cycles complets, on est au $2^{\\text{e}}$ terme du cycle : le chiffre des unités de $3^{2026}$ est le même que celui de $3^2$, c'est-à-dire **9**.

**4. a)** $7^1 = 7$, $7^2 = 49$, $7^3 = 343$, $7^4 = 2\\,401$, $7^5 = 16\\,807$ : les chiffres des unités sont $7$ ; $9$ ; $3$ ; $1$, puis le cycle recommence (même raisonnement qu'à la question 2).

**b)** $100 = 4 \\times 25$ : $7^{100}$ est en fin de cycle, comme $7^4$. Son chiffre des unités est **1**.

**5.** $2025 = 4 \\times 506 + 1$ : $3^{2025}$ a le même chiffre des unités que $3^1$, soit $3$, et $7^{2025}$ le même que $7^1$, soit $7$. Le chiffre des unités de la somme est celui de $3 + 7 = 10$, c'est-à-dire $0$. Un nombre entier qui se termine par $0$ est divisible par $10$ : $3^{2025} + 7^{2025}$ est **divisible par 10**.`
    }
  ],
  "4N4": [
    {
      id: "4N4-ds-01",
      title: "Définition de la racine carrée",
      difficulty: 1,
      points: 4,
      statement: `1. Calculer sans calculatrice : $\\sqrt{49}$ ; $\\sqrt{121}$ ; $\\sqrt{0}$ ; $\\sqrt{144}$ ; $\\left(\\sqrt{7}\\right)^2$ ; $\\sqrt{5^2}$.
2. Le nombre $\\sqrt{-9}$ existe-t-il ? Justifier.
3. Trouver tous les nombres dont le carré est égal à $64$.
4. Calculer $\\sqrt{36} + \\sqrt{64}$ et $\\sqrt{36 + 64}$. Que remarque-t-on ?`,
      solution: `**1.** $\\sqrt{a}$ est le nombre positif dont le carré vaut $a$.
- $\\sqrt{49} = 7$ car $7^2 = 49$ et $7 \\geqslant 0$ ;
- $\\sqrt{121} = 11$ ; $\\sqrt{0} = 0$ ; $\\sqrt{144} = 12$ ;
- $\\left(\\sqrt{7}\\right)^2 = 7$ par définition ;
- $\\sqrt{5^2} = \\sqrt{25} = 5$.

**2.** Un carré est toujours positif ou nul : aucun nombre n'a pour carré $-9$. Donc **$\\sqrt{-9}$ n'existe pas**.

**3.** $8^2 = 64$ et $(-8)^2 = 64$. Les nombres dont le carré vaut $64$ sont **$8$ et $-8$**.

**4.** $\\sqrt{36} + \\sqrt{64} = 6 + 8 = 14$ et $\\sqrt{36 + 64} = \\sqrt{100} = 10$.
On remarque que $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ en général.`
    },
    {
      id: "4N4-ds-02",
      title: "Encadrer une racine carrée",
      difficulty: 1,
      points: 4,
      statement: `1. Encadrer chacun des nombres suivants entre deux entiers consécutifs, sans calculatrice, en justifiant : $\\sqrt{30}$ ; $\\sqrt{90}$ ; $\\sqrt{140}$ ; $\\sqrt{7}$.
2. À l'aide de la calculatrice, donner un arrondi au dixième de chacun de ces nombres.
3. Les arrondis de la question 2 sont-ils cohérents avec les encadrements de la question 1 ?`,
      solution: `**1.** On encadre le nombre sous le radical par deux carrés parfaits consécutifs.
- $25 < 30 < 36$, donc $5 < \\sqrt{30} < 6$ ;
- $81 < 90 < 100$, donc $9 < \\sqrt{90} < 10$ ;
- $121 < 140 < 144$, donc $11 < \\sqrt{140} < 12$ ;
- $4 < 7 < 9$, donc $2 < \\sqrt{7} < 3$.

**2.** $\\sqrt{30} \\approx 5{,}5$ ; $\\sqrt{90} \\approx 9{,}5$ ; $\\sqrt{140} \\approx 11{,}8$ ; $\\sqrt{7} \\approx 2{,}6$.

**3.** Oui : chaque arrondi est bien compris entre les deux entiers trouvés à la question 1 ($5 < 5{,}5 < 6$, $9 < 9{,}5 < 10$, $11 < 11{,}8 < 12$ et $2 < 2{,}6 < 3$).`
    },
    {
      id: "4N4-ds-03",
      title: "Un carré d'aire 50 cm²",
      difficulty: 2,
      points: 5,
      statement: `On veut tracer un carré dont l'aire est le double de celle d'un carré de côté $5$ cm.
1. Calculer l'aire du carré à tracer.
2. On note $c$ la longueur de son côté, en cm. Donner la valeur exacte de $c$.
3. Encadrer $c$ entre deux entiers consécutifs sans calculatrice.
4. Donner l'arrondi de $c$ au millimètre.
5. Calculer le périmètre de ce carré, arrondi au millimètre.`,
      solution: `**1.** Le carré de côté $5$ cm a une aire de $5^2 = 25$ cm². Le carré à tracer a donc une aire de $2 \\times 25 = 50$ cm².

**2.** $c^2 = 50$ et $c > 0$, donc $c = \\sqrt{50}$ cm (valeur exacte).

**3.** $49 < 50 < 64$, donc $7 < \\sqrt{50} < 8$.

**4.** À la calculatrice, $\\sqrt{50} \\approx 7{,}071$ cm, donc $c \\approx 7{,}1$ cm au millimètre près.

**5.** Périmètre : $4 \\times \\sqrt{50} \\approx 28{,}28$ cm, soit environ **$28{,}3$ cm** au millimètre près. (On utilise la valeur exacte avant d'arrondir.)`
    },
    {
      id: "4N4-ds-04",
      title: "Vrai ou faux ?",
      difficulty: 2,
      points: 4,
      statement: `Pour chaque affirmation, dire si elle est vraie ou fausse, puis justifier la réponse.
1. $\\sqrt{16} + \\sqrt{9} = \\sqrt{25}$.
2. $\\sqrt{36 \\times 4} = 6 \\times 2$.
3. $\\sqrt{10}$ est compris entre $3$ et $4$.
4. La racine carrée d'un nombre positif est toujours plus petite que ce nombre.`,
      solution: `**1. Faux.** $\\sqrt{16} + \\sqrt{9} = 4 + 3 = 7$, alors que $\\sqrt{25} = 5$.

**2. Vrai.** $\\sqrt{36 \\times 4} = \\sqrt{144} = 12$ et $6 \\times 2 = 12$.

**3. Vrai.** $9 < 10 < 16$, donc $3 < \\sqrt{10} < 4$.

**4. Faux.** Contre-exemple : $\\sqrt{0{,}25} = 0{,}5$ car $0{,}5^2 = 0{,}25$, et $0{,}5 > 0{,}25$. (Un seul contre-exemple suffit pour prouver qu'une affirmation est fausse.)`
    },
    {
      id: "4N4-ds-05",
      title: "Ranger des racines carrées",
      difficulty: 3,
      points: 5,
      statement: `1. Ranger dans l'ordre croissant, sans calculatrice, en justifiant : $7$ ; $\\sqrt{50}$ ; $\\sqrt{45}$ ; $6{,}4$.
2. Montrer que $\\sqrt{42{,}25} = 6{,}5$.
3. Trouver tous les nombres entiers $n$ tels que $\\sqrt{n}$ soit strictement compris entre $4$ et $5$. Combien y en a-t-il ?`,
      solution: `**1.** Tous ces nombres sont positifs : ils sont rangés dans le même ordre que leurs carrés.
$7^2 = 49$ ; $\\left(\\sqrt{50}\\right)^2 = 50$ ; $\\left(\\sqrt{45}\\right)^2 = 45$ ; $6{,}4^2 = 40{,}96$.
Comme $40{,}96 < 45 < 49 < 50$, on obtient : $6{,}4 < \\sqrt{45} < 7 < \\sqrt{50}$.

**2.** $6{,}5^2 = 42{,}25$ et $6{,}5 \\geqslant 0$, donc par définition $\\sqrt{42{,}25} = 6{,}5$.

**3.** $4 < \\sqrt{n} < 5$ équivaut à $16 < n < 25$ (en élevant au carré des nombres positifs). Les entiers solutions sont $17, 18, 19, 20, 21, 22, 23, 24$ : il y en a **$8$**.`
    },
    {
      id: "4N4-ds-06",
      title: "Le terrain carré",
      difficulty: 3,
      points: 4,
      statement: `1. Recopier la liste des carrés parfaits de $0^2$ à $12^2$.
2. Parmi les nombres $81$ ; $98$ ; $121$ ; $150$ ; $169$, lesquels sont des carrés parfaits ? Justifier.
3. Un terrain carré a une aire de $1\\,296$ m².
   a) Vérifier que $36^2 = 1\\,296$. En déduire la longueur du côté du terrain.
   b) On clôture le terrain en plantant un poteau tous les $3$ m sur tout le pourtour (un poteau à chaque coin). Combien de poteaux faut-il ?`,
      solution: `**1.** $0$ ; $1$ ; $4$ ; $9$ ; $16$ ; $25$ ; $36$ ; $49$ ; $64$ ; $81$ ; $100$ ; $121$ ; $144$.

**2.** $81 = 9^2$, $121 = 11^2$ et $169 = 13^2$ sont des carrés parfaits.
$98$ n'en est pas un car $9^2 = 81 < 98 < 100 = 10^2$ ; $150$ non plus car $12^2 = 144 < 150 < 169 = 13^2$.

**3. a)** $36 \\times 36 = 1\\,296$. Le côté $c$ vérifie $c^2 = 1\\,296$ et $c > 0$, donc $c = \\sqrt{1\\,296} = 36$ m.

**b)** Le périmètre vaut $4 \\times 36 = 144$ m. Sur un contour fermé, il y a autant de poteaux que d'intervalles de $3$ m : $144 \\div 3 = 48$ poteaux.`
    },
    {
      id: "4N4-ds-07",
      title: "Approcher racine de 2",
      difficulty: 4,
      points: 5,
      statement: `1. Calculer $1{,}4^2$ et $1{,}5^2$. En déduire un encadrement de $\\sqrt{2}$ entre deux nombres décimaux d'un chiffre après la virgule.
2. Calculer $1{,}41^2$ et $1{,}42^2$. En déduire un encadrement de $\\sqrt{2}$ au centième.
3. Le nombre $\\sqrt{2}$ est-il égal à $1{,}414$ ? Justifier.
4. Une feuille A4 mesure $29{,}7$ cm sur $21$ cm. Calculer le quotient de la longueur par la largeur, arrondi au millième. Comparer avec $\\sqrt{2}$.`,
      solution: `**1.** $1{,}4^2 = 1{,}96$ et $1{,}5^2 = 2{,}25$. Comme $1{,}96 < 2 < 2{,}25$ et que les nombres sont positifs, $1{,}4 < \\sqrt{2} < 1{,}5$.

**2.** $1{,}41^2 = 1{,}988\\,1$ et $1{,}42^2 = 2{,}016\\,4$. Comme $1{,}988\\,1 < 2 < 2{,}016\\,4$, on a $1{,}41 < \\sqrt{2} < 1{,}42$.

**3.** $1{,}414^2 = 1{,}999\\,396 \\neq 2$, donc $\\sqrt{2} \\neq 1{,}414$ : $1{,}414$ n'est qu'une **valeur approchée** de $\\sqrt{2}$.

**4.** $\\dfrac{29{,}7}{21} \\approx 1{,}414$. Ce quotient est très proche de $\\sqrt{2} \\approx 1{,}414$ : le format A4 est conçu pour que le rapport longueur/largeur soit (presque) égal à $\\sqrt{2}$.`
    },
    {
      id: "4N4-ds-08",
      title: "Carrelage d'une pièce carrée",
      difficulty: 4,
      points: 6,
      statement: `Une pièce carrée a une aire de $20{,}25$ m².
1. Calculer la longueur du côté de la pièce.
2. On la recouvre de carreaux carrés d'aire $0{,}09$ m².
   a) Calculer le côté d'un carreau, en m.
   b) Combien de carreaux faut-il par rangée ? Au total ? Vérifier le total par un autre calcul.
3. On pose une plinthe sur tout le tour de la pièce, sauf devant la porte large de $0{,}9$ m. Quelle longueur de plinthe faut-il ?
4. Une autre pièce carrée a une aire de $30$ m². Peut-on la carreler avec ces mêmes carreaux sans en découper aucun ? Justifier.`,
      solution: `**1.** Le côté $c$ vérifie $c^2 = 20{,}25$, donc $c = \\sqrt{20{,}25} = 4{,}5$ m (car $4{,}5^2 = 20{,}25$).

**2. a)** Côté du carreau : $\\sqrt{0{,}09} = 0{,}3$ m (car $0{,}3^2 = 0{,}09$).
**b)** Par rangée : $4{,}5 \\div 0{,}3 = 15$ carreaux. Au total : $15 \\times 15 = 225$ carreaux.
Vérification par les aires : $20{,}25 \\div 0{,}09 = 225$.

**3.** Périmètre : $4 \\times 4{,}5 = 18$ m. Plinthe : $18 - 0{,}9 = 17{,}1$ m.

**4.** Le côté de cette pièce vaut $\\sqrt{30} \\approx 5{,}477$ m. Il faudrait $\\sqrt{30} \\div 0{,}3 \\approx 18{,}26$ carreaux par rangée, ce qui n'est pas un nombre entier. **On devra découper des carreaux.**`
    },
    {
      id: "4N4-ds-09",
      title: "Les plates-bandes carrées",
      difficulty: 1,
      points: 4,
      statement: `Un jardinier aménage trois plates-bandes carrées, d'aires respectives $144$ m², $2{,}25$ m² et $30$ m².
1. Calculer la longueur du côté de chacune des trois plates-bandes. Donner une valeur exacte, puis, si nécessaire, une valeur arrondie au centimètre.
2. Le nombre $30$ est-il un carré parfait ? Justifier.
3. Calculer le périmètre de la plus grande plate-bande.
4. Une quatrième plate-bande carrée a un périmètre de $26$ m. Calculer son aire.`,
      solution: `**1.** Le côté $c$ d'un carré d'aire $A$ vérifie $c^2 = A$ avec $c$ positif, donc $c = \\sqrt{A}$.
- $\\sqrt{144} = 12$ car $12^2 = 144$ : côté de $12$ m.
- $\\sqrt{2{,}25} = 1{,}5$ car $1{,}5^2 = 2{,}25$ : côté de $1{,}5$ m.
- Le côté vaut $\\sqrt{30}$ m (valeur exacte), soit environ $5{,}48$ m.

**2.** $5^2 = 25$ et $6^2 = 36$. On a $25 < 30 < 36$ : aucun entier n'a pour carré $30$, donc $30$ **n'est pas** un carré parfait.

**3.** Périmètre : $4 \\times 12 = 48$ m.

**4.** Côté : $26 \\div 4 = 6{,}5$ m. Aire : $6{,}5^2 = 42{,}25$ m².`
    },
    {
      id: "4N4-ds-10",
      title: "Chasse aux carrés parfaits",
      difficulty: 2,
      points: 5,
      statement: `On rappelle qu'un carré parfait est le carré d'un nombre entier.
1. Le nombre $1\\,089$ est-il un carré parfait ? Justifier. Que vaut $\\sqrt{1\\,089}$ ?
2. Par quel plus petit nombre entier non nul faut-il multiplier $12$ pour obtenir un carré parfait ? Justifier.
3. Combien y a-t-il de carrés parfaits compris entre $100$ et $400$ (inclus) ? Justifier.
4. a) Recopier et compléter le tableau des chiffres des unités :

| Chiffre des unités de $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| Chiffre des unités de $n^2$ | | | | | | | | | | |

   b) Un nombre entier se termine par $7$. Peut-il être un carré parfait ? Justifier.`,
      solution: `**1.** $33^2 = 33 \\times 33 = 1\\,089$. Donc $1\\,089$ est un carré parfait et $\\sqrt{1\\,089} = 33$.

**2.** On essaie les multiples successifs : $12 \\times 1 = 12$ et $12 \\times 2 = 24$ ne sont pas des carrés parfaits ($3^2 = 9$, $4^2 = 16$, $5^2 = 25$), mais $12 \\times 3 = 36 = 6^2$. Le plus petit nombre cherché est **3**.

**3.** $100 = 10^2$ et $400 = 20^2$. Les carrés parfaits compris entre $100$ et $400$ sont $10^2, 11^2, \\ldots, 20^2$, soit $20 - 10 + 1 = 11$ carrés parfaits.

**4. a)** Le chiffre des unités de $n^2$ ne dépend que du chiffre des unités de $n$ :

| Chiffre des unités de $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| Chiffre des unités de $n^2$ | 0 | 1 | 4 | 9 | 6 | 5 | 6 | 9 | 4 | 1 |

**b)** Le chiffre $7$ n'apparaît pas dans la deuxième ligne : aucun carré d'entier ne se termine par $7$. Un nombre qui se termine par $7$ **n'est donc pas** un carré parfait.`
    },
    {
      id: "4N4-ds-11",
      title: "Un carré incliné sur un quadrillage",
      difficulty: 3,
      points: 5,
      statement: `Dans un repère orthonormé d'unité $1$ cm, on place les points $A(0 ; 1)$, $B(3 ; 0)$, $C(4 ; 3)$ et $D(1 ; 4)$. On admet que $ABCD$ est un carré.
1. Le carré $ABCD$ est contenu dans le carré de sommets $(0 ; 0)$, $(4 ; 0)$, $(4 ; 4)$ et $(0 ; 4)$. Calculer l'aire de ce grand carré.
2. Le grand carré est formé du carré $ABCD$ et de quatre triangles rectangles. Calculer l'aire d'un de ces triangles, puis en déduire l'aire du carré $ABCD$.
3. En déduire la valeur exacte de la longueur $AB$.
4. Donner un encadrement de $AB$ entre deux nombres décimaux consécutifs ayant un chiffre après la virgule. Justifier.
5. Sur le même principe, proposer les coordonnées de quatre points formant un carré d'aire $5$ cm². Justifier.`,
      solution: `**1.** Le grand carré a pour côté $4$ cm : son aire est $4^2 = 16$ cm².

**2.** Par exemple, le triangle de sommets $(0 ; 0)$, $B(3 ; 0)$ et $A(0 ; 1)$ est rectangle, de côtés de l'angle droit $3$ cm et $1$ cm. Son aire est $\\dfrac{3 \\times 1}{2} = 1{,}5$ cm². Les quatre triangles sont superposables (mêmes dimensions $3$ et $1$).
Aire de $ABCD$ : $16 - 4 \\times 1{,}5 = 16 - 6 = 10$ cm².

**3.** $AB^2 = 10$ et $AB$ est une longueur positive, donc $AB = \\sqrt{10}$ cm.

**4.** $3{,}1^2 = 9{,}61$ et $3{,}2^2 = 10{,}24$. Comme $9{,}61 < 10 < 10{,}24$, on a $3{,}1 < \\sqrt{10} < 3{,}2$.

**5.** Il faut un grand carré d'aire $9$ et des triangles de côtés $2$ et $1$ : $3^2 - 4 \\times \\dfrac{2 \\times 1}{2} = 9 - 4 = 5$. Par exemple $E(0 ; 1)$, $F(2 ; 0)$, $G(3 ; 2)$ et $H(1 ; 3)$, dans le carré de côté $3$ de sommets $(0 ; 0)$, $(3 ; 0)$, $(3 ; 3)$ et $(0 ; 3)$. Le côté de $EFGH$ vaut $\\sqrt{5}$ cm.`
    },
    {
      id: "4N4-ds-12",
      title: "Un disque et un carré de même aire",
      difficulty: 4,
      points: 6,
      statement: `On rappelle que l'aire d'un disque de rayon $r$ est $\\pi r^2$ et que son périmètre est $2 \\pi r$.
1. Un disque a une aire de $49\\pi$ cm². Calculer son rayon.
2. Un disque a une aire de $50\\pi$ cm². Donner la valeur exacte de son rayon, puis une valeur arrondie au millimètre.
3. On veut un disque et un carré qui ont tous les deux une aire de $100$ cm².
   a) Calculer le côté du carré et son périmètre.
   b) Montrer que le rayon du disque vaut $\\sqrt{\\dfrac{100}{\\pi}}$ cm. En donner une valeur arrondie au centième.
   c) Calculer le périmètre du disque, arrondi au dixième. Laquelle des deux figures a le plus petit périmètre ?
4. On multiplie l'aire d'un disque par $4$. Par combien son rayon est-il multiplié ? Justifier.`,
      solution: `**1.** $\\pi r^2 = 49\\pi$, donc $r^2 = 49$. Le rayon est positif, donc $r = \\sqrt{49} = 7$ cm.

**2.** $r^2 = 50$, donc $r = \\sqrt{50}$ cm. Comme $7{,}07^2 = 49{,}9849$ et $7{,}08^2 = 50{,}1264$, on a $r \\approx 7{,}1$ cm.

**3. a)** Côté du carré : $\\sqrt{100} = 10$ cm ; périmètre : $4 \\times 10 = 40$ cm.

**b)** $\\pi r^2 = 100$ donne $r^2 = \\dfrac{100}{\\pi}$ ; comme $r$ est positif, $r = \\sqrt{\\dfrac{100}{\\pi}}$. À la calculatrice, $r \\approx 5{,}64$ cm.

**c)** Périmètre du disque : $2 \\pi r \\approx 2 \\times \\pi \\times 5{,}642 \\approx 35{,}4$ cm. Pour une même aire, **le disque** a un périmètre plus petit que le carré ($35{,}4 < 40$).

**4.** Si l'aire $\\pi r^2$ est multipliée par $4$, le nouveau rayon $R$ vérifie $\\pi R^2 = 4\\pi r^2$, donc $R^2 = 4 r^2 = (2r)^2$. Comme $R$ et $2r$ sont positifs, $R = 2r$ : le rayon est **multiplié par 2**.`
    }
  ],
  "4N5": [
    {
      id: "4N5-ds-01",
      title: "Développer et réduire",
      difficulty: 1,
      points: 4,
      statement: `Développer puis réduire chaque expression.
1. $A = 3(x + 5)$
2. $B = -2(4x - 3)$
3. $C = 5x - (2x - 7)$
4. $D = 4(2x - 1) - 3(x + 2)$`,
      solution: `On utilise la distributivité : $k(a + b) = ka + kb$.

**1.** $A = 3 \\times x + 3 \\times 5 = 3x + 15$.

**2.** $B = -2 \\times 4x + (-2) \\times (-3) = -8x + 6$.

**3.** Une parenthèse précédée d'un signe $-$ : on la supprime en changeant le signe de chaque terme.
$C = 5x - 2x + 7 = 3x + 7$.

**4.** $D = 8x - 4 - 3x - 6 = 5x - 10$.`
    },
    {
      id: "4N5-ds-02",
      title: "Résoudre des équations",
      difficulty: 1,
      points: 4,
      statement: `Résoudre chaque équation et vérifier la solution.
1. $x + 7 = 3$
2. $5x = -35$
3. $3x - 4 = 14$
4. $2x + 9 = 5x - 6$`,
      solution: `**1.** $x + 7 = 3$ donc $x = 3 - 7 = -4$. Vérification : $-4 + 7 = 3$. La solution est $-4$.

**2.** $5x = -35$ donc $x = \\dfrac{-35}{5} = -7$. Vérification : $5 \\times (-7) = -35$. La solution est $-7$.

**3.** $3x - 4 = 14$ donc $3x = 18$ puis $x = 6$. Vérification : $3 \\times 6 - 4 = 14$. La solution est $6$.

**4.** $2x + 9 = 5x - 6$ donc $9 + 6 = 5x - 2x$, soit $15 = 3x$, puis $x = 5$.
Vérification : $2 \\times 5 + 9 = 19$ et $5 \\times 5 - 6 = 19$. La solution est $5$.`
    },
    {
      id: "4N5-ds-03",
      title: "Tester une égalité et réduire",
      difficulty: 2,
      points: 5,
      statement: `1. L'égalité $4x - 3 = 2x + 5$ est-elle vraie pour $x = 3$ ? pour $x = 4$ ? Justifier.
2. On considère $E = 3x^2 + 5x - x^2 - 8x + 4$.
   a) Réduire $E$.
   b) Calculer $E$ pour $x = -2$.
3. Développer et réduire $F = x(x + 3) - 2x$.`,
      solution: `**1.** Pour $x = 3$ : $4 \\times 3 - 3 = 9$ et $2 \\times 3 + 5 = 11$. Comme $9 \\neq 11$, l'égalité est **fausse** pour $x = 3$.
Pour $x = 4$ : $4 \\times 4 - 3 = 13$ et $2 \\times 4 + 5 = 13$. L'égalité est **vraie** pour $x = 4$.

**2. a)** On regroupe les termes de même nature : $E = (3x^2 - x^2) + (5x - 8x) + 4 = 2x^2 - 3x + 4$.
**b)** Pour $x = -2$ : $E = 2 \\times (-2)^2 - 3 \\times (-2) + 4 = 2 \\times 4 + 6 + 4 = 18$.

**3.** $F = x \\times x + x \\times 3 - 2x = x^2 + 3x - 2x = x^2 + x$.`
    },
    {
      id: "4N5-ds-04",
      title: "Le périmètre d'un rectangle",
      difficulty: 2,
      points: 5,
      statement: `Un rectangle a pour largeur $x$ cm et pour longueur $x + 4$ cm.
1. Exprimer le périmètre du rectangle en fonction de $x$, sous forme réduite.
2. Calculer le périmètre lorsque $x = 3$.
3. On veut que le périmètre soit égal à $30$ cm.
   a) Écrire une équation traduisant cette condition.
   b) La résoudre et en déduire les dimensions du rectangle.
   c) Vérifier le résultat.`,
      solution: `**1.** $P = 2 \\times (x + x + 4) = 2(2x + 4) = 4x + 8$.

**2.** Pour $x = 3$ : $P = 4 \\times 3 + 8 = 20$ cm.

**3. a)** $4x + 8 = 30$.
**b)** $4x = 22$ donc $x = \\dfrac{22}{4} = 5{,}5$. Le rectangle mesure $5{,}5$ cm de large et $5{,}5 + 4 = 9{,}5$ cm de long.
**c)** $2 \\times (5{,}5 + 9{,}5) = 2 \\times 15 = 30$ cm : c'est bien le périmètre voulu.`
    },
    {
      id: "4N5-ds-05",
      title: "Deux formules d'abonnement",
      difficulty: 3,
      points: 5,
      statement: `Une piscine propose deux tarifs :
- **formule A** : un abonnement de $12$ € par mois, puis $1{,}50$ € par séance ;
- **formule B** : $3$ € par séance, sans abonnement.

1. Calculer le prix payé pour $6$ séances dans le mois avec chaque formule.
2. On note $x$ le nombre de séances dans le mois. Exprimer en fonction de $x$ le prix payé avec chaque formule.
3. Résoudre l'équation $12 + 1{,}5x = 3x$. Interpréter le résultat.
4. Camille va à la piscine $10$ fois par mois. Quelle formule lui conseiller ? Justifier.`,
      solution: `**1.** Formule A : $12 + 6 \\times 1{,}5 = 12 + 9 = 21$ €. Formule B : $6 \\times 3 = 18$ €.

**2.** Formule A : $12 + 1{,}5x$ ; formule B : $3x$.

**3.** $12 + 1{,}5x = 3x$ donc $12 = 3x - 1{,}5x = 1{,}5x$, puis $x = \\dfrac{12}{1{,}5} = 8$.
Vérification : $12 + 1{,}5 \\times 8 = 24$ et $3 \\times 8 = 24$. Pour **$8$ séances**, les deux formules coûtent le même prix, $24$ €.

**4.** Pour $10$ séances : formule A : $12 + 15 = 27$ € ; formule B : $30$ €. On lui conseille la **formule A**.`
    },
    {
      id: "4N5-ds-06",
      title: "Équations avec parenthèses",
      difficulty: 3,
      points: 5,
      statement: `Résoudre chaque équation.
1. $3(x - 2) = 2x + 5$
2. $5 - 2(x + 1) = 4x - 9$
3. $7x - 4 = 7x + 2$
4. Vérifier la solution de l'équation 2.`,
      solution: `**1.** On développe : $3x - 6 = 2x + 5$, donc $3x - 2x = 5 + 6$, soit $x = 11$. La solution est $11$.

**2.** On développe : $5 - 2x - 2 = 4x - 9$, soit $3 - 2x = 4x - 9$.
Donc $3 + 9 = 4x + 2x$, soit $12 = 6x$, puis $x = 2$. La solution est $2$.

**3.** $7x - 4 = 7x + 2$ donne $7x - 7x = 2 + 4$, soit $0 = 6$, ce qui est impossible. Cette équation **n'a pas de solution**.

**4.** Pour $x = 2$ : $5 - 2 \\times (2 + 1) = 5 - 6 = -1$ et $4 \\times 2 - 9 = -1$. Les deux membres sont égaux : $2$ est bien la solution.`
    },
    {
      id: "4N5-ds-07",
      title: "Problème d'âges",
      difficulty: 4,
      points: 5,
      statement: `Aujourd'hui, Paul a $41$ ans et sa fille Inès a $9$ ans.
1. Quel âge auront-ils dans $5$ ans ? L'âge de Paul sera-t-il alors le triple de celui d'Inès ?
2. On note $x$ un nombre d'années. Dans combien d'années l'âge de Paul sera-t-il le triple de celui d'Inès ? Mettre le problème en équation et le résoudre.
3. Dans combien d'années l'âge de Paul sera-t-il le double de celui d'Inès ?
4. Résoudre l'équation $41 + x = 5(9 + x)$. Que signifie la solution trouvée ?`,
      solution: `**1.** Dans $5$ ans : Paul aura $46$ ans et Inès $14$ ans. Or $3 \\times 14 = 42 \\neq 46$ : ce ne sera pas le triple.

**2.** Dans $x$ années, Paul aura $41 + x$ ans et Inès $9 + x$ ans. On résout $41 + x = 3(9 + x)$ :
$41 + x = 27 + 3x$, donc $41 - 27 = 3x - x$, soit $14 = 2x$ et $x = 7$.
Vérification : dans $7$ ans, Paul aura $48$ ans et Inès $16$ ans, et $3 \\times 16 = 48$. Réponse : **dans 7 ans**.

**3.** $41 + x = 2(9 + x)$ donne $41 + x = 18 + 2x$, donc $x = 23$. Vérification : $64 = 2 \\times 32$. Réponse : **dans 23 ans**.

**4.** $41 + x = 45 + 5x$ donne $41 - 45 = 5x - x$, soit $-4 = 4x$ et $x = -1$.
La solution est négative : cela signifie **il y a un an**. Paul avait alors $40$ ans et Inès $8$ ans, et $5 \\times 8 = 40$.`
    },
    {
      id: "4N5-ds-08",
      title: "Triangle, carré et rectangle de même périmètre",
      difficulty: 4,
      points: 6,
      statement: `Soit $x$ un nombre positif. On considère :
- un triangle équilatéral de côté $x + 2$ ;
- un carré de côté $x$ ;
- un rectangle de longueur $2x$ et de largeur $x + 1$.

1. Exprimer le périmètre de chaque figure en fonction de $x$, sous forme réduite.
2. Pour quelle valeur de $x$ le triangle et le carré ont-ils le même périmètre ?
3. Pour quelle valeur de $x$ le triangle et le rectangle ont-ils le même périmètre ? Donner la solution sous forme de fraction, puis vérifier.
4. Le carré et le rectangle peuvent-ils avoir le même périmètre ? Justifier.`,
      solution: `**1.** Triangle : $3(x + 2) = 3x + 6$. Carré : $4x$. Rectangle : $2(2x + x + 1) = 2(3x + 1) = 6x + 2$.

**2.** $3x + 6 = 4x$ donne $6 = x$. Pour $x = 6$, les deux périmètres valent $24$.

**3.** $3x + 6 = 6x + 2$ donne $6 - 2 = 6x - 3x$, soit $4 = 3x$ et $x = \\dfrac{4}{3}$.
Vérification : triangle $3 \\times \\dfrac{4}{3} + 6 = 4 + 6 = 10$ ; rectangle $6 \\times \\dfrac{4}{3} + 2 = 8 + 2 = 10$.

**4.** $4x = 6x + 2$ donne $-2 = 2x$, soit $x = -1$. Or $x$ est une longueur, donc positif : **c'est impossible**.`
    },
    {
      id: "4N5-ds-09",
      title: "La balance équilibrée",
      difficulty: 1,
      points: 4,
      statement: `1. Sur le plateau gauche d'une balance, on pose $5$ boîtes identiques et une masse de $40$ g. Sur le plateau droit, on pose $2$ boîtes identiques aux précédentes et une masse de $190$ g. La balance est équilibrée. On note $x$ la masse d'une boîte, en grammes.
   a) Écrire une équation traduisant l'équilibre de la balance.
   b) Résoudre cette équation et conclure.
2. Le nombre $3$ est-il solution de l'équation $4x - 7 = 2x - 1$ ? Justifier.
3. Résoudre l'équation $7 - 2x = 15$.`,
      solution: `**1. a)** Le plateau gauche porte $5x + 40$ grammes et le plateau droit $2x + 190$ grammes. L'équilibre se traduit par $5x + 40 = 2x + 190$.

**b)** On soustrait $2x$ aux deux membres : $3x + 40 = 190$. On soustrait $40$ : $3x = 150$. On divise par $3$ : $x = 50$.
Vérification : $5 \\times 50 + 40 = 290$ et $2 \\times 50 + 190 = 290$. Une boîte pèse **50 g**.

**2.** Pour $x = 3$ : $4 \\times 3 - 7 = 12 - 7 = 5$ et $2 \\times 3 - 1 = 6 - 1 = 5$. Les deux membres sont égaux, donc $3$ **est solution**.

**3.** $7 - 2x = 15$ donne $-2x = 15 - 7 = 8$, donc $x = \\dfrac{8}{-2} = -4$.
Vérification : $7 - 2 \\times (-4) = 7 + 8 = 15$. La solution est $-4$.`
    },
    {
      id: "4N5-ds-10",
      title: "Les carrés en allumettes",
      difficulty: 2,
      points: 5,
      statement: `On construit une rangée de carrés accolés avec des allumettes : un carré utilise $4$ allumettes, deux carrés accolés en utilisent $7$, trois carrés accolés en utilisent $10$, et ainsi de suite.
1. Combien faut-il d'allumettes pour une rangée de $4$ carrés ? de $5$ carrés ?
2. Expliquer pourquoi une rangée de $n$ carrés nécessite $3n + 1$ allumettes.
3. Combien faut-il d'allumettes pour une rangée de $100$ carrés ?
4. Avec $85$ allumettes, combien de carrés peut-on former exactement ? Résoudre une équation.
5. Peut-on utiliser exactement $200$ allumettes pour former une telle rangée ? Justifier.`,
      solution: `**1.** Chaque nouveau carré ajoute $3$ allumettes (il partage un côté avec le carré précédent) : $4$ carrés → $10 + 3 = 13$ allumettes ; $5$ carrés → $13 + 3 = 16$ allumettes.

**2.** Le premier carré utilise $4$ allumettes, soit $1 + 3$. Chacun des carrés suivants en ajoute $3$. Pour $n$ carrés, on a donc $1 + 3 \\times n = 3n + 1$ allumettes. (Vérification : $n = 3$ donne $3 \\times 3 + 1 = 10$.)

**3.** $3 \\times 100 + 1 = 301$ allumettes.

**4.** On résout $3n + 1 = 85$ : $3n = 84$, donc $n = 28$. On forme **28 carrés**.

**5.** Il faudrait $3n + 1 = 200$, soit $3n = 199$, donc $n = \\dfrac{199}{3}$. Or $199$ n'est pas divisible par $3$ ($1 + 9 + 9 = 19$ n'est pas un multiple de $3$), donc $n$ ne serait pas un nombre entier : **c'est impossible**.`
    },
    {
      id: "4N5-ds-11",
      title: "Trois entiers consécutifs",
      difficulty: 3,
      points: 5,
      statement: `1. On considère l'expression $A = 3(2x - 5) - 4(x - 2)$.
   a) Développer et réduire $A$.
   b) Résoudre l'équation $A = 9$.
2. On note $n$ un nombre entier.
   a) Écrire, en fonction de $n$, les deux entiers qui suivent $n$.
   b) Démontrer que la somme de trois entiers consécutifs est toujours un multiple de $3$.
3. Trouver trois entiers consécutifs dont la somme est égale à $2\\,025$.
4. Existe-t-il trois entiers consécutifs dont la somme est égale à $1\\,000$ ? Justifier.`,
      solution: `**1. a)** $A = 3 \\times 2x - 3 \\times 5 - 4 \\times x + 4 \\times 2 = 6x - 15 - 4x + 8 = 2x - 7$.

**b)** $2x - 7 = 9$ donne $2x = 16$, puis $x = 8$. Vérification : $2 \\times 8 - 7 = 9$.

**2. a)** Les deux entiers suivants sont $n + 1$ et $n + 2$.

**b)** $n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)$. Comme $n + 1$ est un entier, cette somme est un multiple de $3$.

**3.** On résout $3n + 3 = 2\\,025$ : $3n = 2\\,022$, donc $n = 674$. Les entiers sont **674, 675 et 676**.
Vérification : $674 + 675 + 676 = 2\\,025$.

**4.** D'après la question 2, la somme serait un multiple de $3$. Or $1 + 0 + 0 + 0 = 1$ n'est pas un multiple de $3$, donc $1\\,000$ n'est pas divisible par $3$ : **c'est impossible**.`
    },
    {
      id: "4N5-ds-12",
      title: "Les deux bougies",
      difficulty: 4,
      points: 6,
      statement: `Une bougie A mesure $30$ cm et raccourcit de $2$ cm par heure. Une bougie B mesure $18$ cm et raccourcit de $0{,}5$ cm par heure. On les allume en même temps. On note $t$ le nombre d'heures écoulées depuis l'allumage.
1. Exprimer, en fonction de $t$, la hauteur de chaque bougie.
2. Au bout de combien de temps les deux bougies ont-elles la même hauteur ? Quelle est alors cette hauteur ?
3. Au bout de combien de temps chaque bougie est-elle entièrement consumée ?
4. On recommence avec deux bougies neuves, mais cette fois on allume la bougie B $4$ heures avant la bougie A. On note encore $t$ le temps écoulé depuis l'allumage de la bougie A.
   a) Montrer que la hauteur de la bougie B est alors $16 - 0{,}5t$.
   b) Au bout de combien de temps (en heures et minutes) après l'allumage de A les deux bougies ont-elles la même hauteur ?`,
      solution: `**1.** Bougie A : $30 - 2t$ (en cm). Bougie B : $18 - 0{,}5t$ (en cm).

**2.** On résout $30 - 2t = 18 - 0{,}5t$. On ajoute $2t$ aux deux membres : $30 = 18 + 1{,}5t$. On soustrait $18$ : $12 = 1{,}5t$, donc $t = \\dfrac{12}{1{,}5} = 8$.
Au bout de **8 heures**, les deux bougies mesurent $30 - 2 \\times 8 = 14$ cm (et $18 - 0{,}5 \\times 8 = 14$ cm).

**3.** Bougie A : $30 - 2t = 0$ donne $t = 15$ h. Bougie B : $18 - 0{,}5t = 0$ donne $t = 36$ h.

**4. a)** Quand $t$ heures se sont écoulées depuis l'allumage de A, la bougie B brûle depuis $t + 4$ heures. Sa hauteur est $18 - 0{,}5(t + 4) = 18 - 0{,}5t - 2 = 16 - 0{,}5t$.

**b)** On résout $30 - 2t = 16 - 0{,}5t$ : $14 = 1{,}5t$, donc $t = \\dfrac{14}{1{,}5} = \\dfrac{28}{3} = 9 + \\dfrac{1}{3}$ h.
Or $\\dfrac{1}{3}$ h $= 20$ min. Les deux bougies ont la même hauteur **9 h 20 min** après l'allumage de A (la bougie A n'est pas encore consumée, car $\\dfrac{28}{3} < 15$). Cette hauteur vaut $30 - 2 \\times \\dfrac{28}{3} = \\dfrac{34}{3} \\approx 11{,}3$ cm.`
    }
  ],
  "4G1": [
    {
      id: "4G1-ds-01",
      title: "Calculer des longueurs avec Pythagore",
      difficulty: 1,
      points: 4,
      statement: `1. Le triangle $ABC$ est rectangle en $A$, avec $AB = 6$ cm et $AC = 8$ cm.
   a) Nommer l'hypoténuse de ce triangle.
   b) Calculer la longueur $BC$.
2. Le triangle $DEF$ est rectangle en $E$, avec $DF = 13$ cm et $DE = 5$ cm. Calculer la longueur $EF$.
3. Le triangle $KLM$ est rectangle en $K$, avec $KL = KM = 3$ cm. Donner la valeur exacte de $LM$, puis son arrondi au millimètre.`,
      solution: `**1. a)** L'hypoténuse est le côté opposé à l'angle droit : c'est $[BC]$.
**b)** Le triangle $ABC$ est rectangle en $A$, donc d'après le théorème de Pythagore :
$BC^2 = AB^2 + AC^2 = 6^2 + 8^2 = 36 + 64 = 100$, donc $BC = \\sqrt{100} = 10$ cm.

**2.** Le triangle $DEF$ est rectangle en $E$, son hypoténuse est $[DF]$. D'après le théorème de Pythagore :
$DF^2 = DE^2 + EF^2$, donc $EF^2 = 13^2 - 5^2 = 169 - 25 = 144$ et $EF = \\sqrt{144} = 12$ cm.

**3.** Le triangle $KLM$ est rectangle en $K$. D'après le théorème de Pythagore :
$LM^2 = KL^2 + KM^2 = 9 + 9 = 18$, donc $LM = \\sqrt{18}$ cm (valeur exacte) $\\approx 4{,}2$ cm.`
    },
    {
      id: "4G1-ds-02",
      title: "Rectangle ou pas ?",
      difficulty: 1,
      points: 4,
      statement: `1. Le triangle $RST$ est tel que $RS = 7{,}5$ cm, $ST = 4{,}5$ cm et $RT = 6$ cm. Démontrer qu'il est rectangle et préciser en quel sommet.
2. Le triangle $KLM$ est tel que $KL = 5$ cm, $LM = 7$ cm et $KM = 9$ cm. Ce triangle est-il rectangle ? Justifier.
3. Quel théorème a-t-on utilisé dans chacune des deux questions ?`,
      solution: `**1.** Le plus grand côté est $[RS]$.
D'une part : $RS^2 = 7{,}5^2 = 56{,}25$.
D'autre part : $ST^2 + RT^2 = 4{,}5^2 + 6^2 = 20{,}25 + 36 = 56{,}25$.
Comme $RS^2 = ST^2 + RT^2$, d'après la réciproque du théorème de Pythagore, le triangle $RST$ est **rectangle en $T$** (sommet opposé au plus grand côté).

**2.** Le plus grand côté est $[KM]$.
D'une part : $KM^2 = 9^2 = 81$. D'autre part : $KL^2 + LM^2 = 25 + 49 = 74$.
Comme $81 \\neq 74$, d'après la contraposée du théorème de Pythagore, le triangle $KLM$ **n'est pas rectangle**.

**3.** Question 1 : la **réciproque** du théorème de Pythagore (pour prouver qu'un triangle est rectangle). Question 2 : la **contraposée** du théorème de Pythagore (pour prouver qu'un triangle n'est pas rectangle).`
    },
    {
      id: "4G1-ds-03",
      title: "L'échelle contre le mur",
      difficulty: 2,
      points: 5,
      statement: `Une échelle de $5$ m de long est appuyée contre un mur vertical. Le sol est horizontal. Le pied de l'échelle est situé à $1{,}4$ m du pied du mur.
1. Faire un schéma de la situation et préciser le triangle rectangle utilisé.
2. À quelle hauteur le haut de l'échelle touche-t-il le mur ?
3. Pour des raisons de sécurité, la distance entre le pied de l'échelle et le mur doit être au moins égale au quart de la longueur de l'échelle. Cette consigne est-elle respectée ici ?
4. Peut-on, avec cette échelle et en respectant la consigne, atteindre une fenêtre située à $4{,}9$ m de hauteur ? Justifier.`,
      solution: `**1.** On note $M$ le pied du mur, $P$ le pied de l'échelle et $H$ le haut de l'échelle. Le mur est perpendiculaire au sol, donc le triangle $HMP$ est rectangle en $M$, d'hypoténuse $[HP]$ (l'échelle).

**2.** D'après le théorème de Pythagore dans $HMP$ rectangle en $M$ :
$HP^2 = HM^2 + MP^2$, donc $HM^2 = 5^2 - 1{,}4^2 = 25 - 1{,}96 = 23{,}04$ et $HM = \\sqrt{23{,}04} = 4{,}8$ m.

**3.** Le quart de la longueur vaut $5 \\div 4 = 1{,}25$ m. Comme $1{,}4 > 1{,}25$, **la consigne est respectée**.

**4.** Si le haut de l'échelle est à $4{,}9$ m, alors $MP^2 = 25 - 4{,}9^2 = 25 - 24{,}01 = 0{,}99$, donc $MP = \\sqrt{0{,}99} \\approx 0{,}99$ m.
Comme $0{,}99 < 1{,}25$, la consigne ne serait pas respectée : **ce n'est pas possible en sécurité**.`
    },
    {
      id: "4G1-ds-04",
      title: "La diagonale d'un écran",
      difficulty: 2,
      points: 5,
      statement: `La taille d'un écran de télévision est donnée par la longueur de sa diagonale, exprimée en pouces ($1$ pouce $= 2{,}54$ cm). L'écran est un rectangle de $88$ cm de long et $49{,}5$ cm de large.
1. Calculer la longueur de la diagonale de l'écran, arrondie au millimètre.
2. En déduire la taille de l'écran en pouces, arrondie à l'unité.
3. Un meuble possède une niche rectangulaire de $90$ cm de large et $52$ cm de haut. L'écran (posé verticalement, sans support) peut-il y entrer ? Justifier.`,
      solution: `**1.** L'écran est un rectangle : la diagonale le partage en deux triangles rectangles dont les côtés de l'angle droit mesurent $88$ cm et $49{,}5$ cm. D'après le théorème de Pythagore :
$d^2 = 88^2 + 49{,}5^2 = 7\\,744 + 2\\,450{,}25 = 10\\,194{,}25$, donc $d = \\sqrt{10\\,194{,}25} \\approx 100{,}97$ cm, soit environ $101{,}0$ cm au millimètre près.

**2.** $\\dfrac{100{,}97}{2{,}54} \\approx 39{,}75$, soit un écran d'environ **$40$ pouces**.

**3.** L'écran mesure $88$ cm de large ($88 < 90$) et $49{,}5$ cm de haut ($49{,}5 < 52$) : **il entre dans la niche**. (C'est la largeur et la hauteur qui comptent ici, pas la diagonale.)`
    },
    {
      id: "4G1-ds-05",
      title: "Le terrain en forme de quadrilatère",
      difficulty: 3,
      points: 5,
      statement: `Le terrain $ABCD$ est représenté ci-dessous (la figure n'est pas à l'échelle). On sait que l'angle $\\widehat{ABC}$ est droit, que $AB = 9$ m, $BC = 12$ m, $CD = 8$ m et $AD = 17$ m.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 260" width="400" height="260" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="40,68 40,230 256,230 342.4,114.8" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="40" y1="68" x2="256" y2="230" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" /><polyline points="40,218 52,218 52,230" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /><text x="28" y="64" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="30" y="248" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="262" y="248" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="356" y="112" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">D</text><text x="32" y="154" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">9 m</text><text x="148" y="250" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">12 m</text><text x="306" y="184" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="start">8 m</text><text x="186" y="82" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">17 m</text></svg></div>

1. Calculer la longueur de la diagonale $AC$.
2. Démontrer que le triangle $ACD$ est rectangle.
3. Calculer l'aire du terrain $ABCD$.
4. On veut entourer le terrain d'une clôture vendue $14{,}50$ € le mètre. Calculer le prix de la clôture.`,
      solution: `**1.** Le triangle $ABC$ est rectangle en $B$. D'après le théorème de Pythagore :
$AC^2 = AB^2 + BC^2 = 81 + 144 = 225$, donc $AC = \\sqrt{225} = 15$ m.

**2.** Dans le triangle $ACD$, le plus grand côté est $[AD]$.
$AD^2 = 17^2 = 289$ et $AC^2 + CD^2 = 225 + 64 = 289$.
Comme $AD^2 = AC^2 + CD^2$, d'après la réciproque du théorème de Pythagore, le triangle $ACD$ est **rectangle en $C$**.

**3.** Aire de $ABC$ : $\\dfrac{AB \\times BC}{2} = \\dfrac{9 \\times 12}{2} = 54$ m². Aire de $ACD$ (rectangle en $C$) : $\\dfrac{AC \\times CD}{2} = \\dfrac{15 \\times 8}{2} = 60$ m².
Aire du terrain : $54 + 60 = 114$ m².

**4.** Périmètre : $9 + 12 + 8 + 17 = 46$ m. Prix : $46 \\times 14{,}5 = 667$ €.`
    },
    {
      id: "4G1-ds-06",
      title: "La toiture",
      difficulty: 3,
      points: 5,
      statement: `Le pignon d'une maison a la forme d'un triangle isocèle $ABC$ de sommet principal $A$ : la base $[BC]$ mesure $8$ m et la hauteur $[AH]$ issue de $A$ mesure $3$ m ($H$ est le milieu de $[BC]$). Le toit est formé de deux pans rectangulaires identiques, de largeur $AB$ et de longueur $12$ m.
1. Calculer la longueur $AB$.
2. Calculer l'aire totale des deux pans du toit.
3. Il faut $15$ tuiles par m². Combien de tuiles faut-il commander ?
4. L'angle $\\widehat{BAC}$ est-il droit ? Justifier.`,
      solution: `**1.** $H$ est le milieu de $[BC]$, donc $BH = 4$ m. La hauteur $(AH)$ est perpendiculaire à $(BC)$ : le triangle $ABH$ est rectangle en $H$. D'après le théorème de Pythagore :
$AB^2 = AH^2 + BH^2 = 9 + 16 = 25$, donc $AB = 5$ m.

**2.** Chaque pan est un rectangle de $5$ m sur $12$ m : $5 \\times 12 = 60$ m². Les deux pans : $2 \\times 60 = 120$ m².

**3.** $120 \\times 15 = 1\\,800$ tuiles.

**4.** Dans le triangle $ABC$, le plus grand côté est $[BC]$ : $BC^2 = 64$ et $AB^2 + AC^2 = 25 + 25 = 50$.
Comme $64 \\neq 50$, d'après la contraposée du théorème de Pythagore, le triangle $ABC$ n'est pas rectangle en $A$ : **l'angle $\\widehat{BAC}$ n'est pas droit**.`
    },
    {
      id: "4G1-ds-07",
      title: "Le crayon dans la boîte",
      difficulty: 4,
      points: 5,
      statement: `Une boîte a la forme d'un pavé droit $ABCDEFGH$ : la base $ABCD$ est un rectangle avec $AB = 4$ cm et $BC = 3$ cm, et l'arête $[CG]$, verticale, mesure $12$ cm.
1. Calculer la longueur $AC$ de la diagonale de la base.
2. Justifier que le triangle $ACG$ est rectangle en $C$.
3. Calculer la longueur $AG$.
4. Peut-on ranger dans cette boîte fermée un crayon de $13{,}5$ cm de long ? Et un crayon de $12{,}8$ cm ? Justifier.`,
      solution: `**1.** Le triangle $ABC$ est rectangle en $B$ (la base est un rectangle). D'après le théorème de Pythagore :
$AC^2 = AB^2 + BC^2 = 16 + 9 = 25$, donc $AC = 5$ cm.

**2.** L'arête $[CG]$ est verticale, donc perpendiculaire au plan de la base, et en particulier à la droite $(AC)$ de ce plan. Le triangle $ACG$ est donc rectangle en $C$.

**3.** D'après le théorème de Pythagore dans $ACG$ rectangle en $C$ :
$AG^2 = AC^2 + CG^2 = 25 + 144 = 169$, donc $AG = 13$ cm.

**4.** La plus grande longueur que l'on peut placer dans la boîte est la diagonale $[AG]$, qui mesure $13$ cm.
- $13{,}5 > 13$ : le crayon de $13{,}5$ cm **ne rentre pas**.
- $12{,}8 \\leqslant 13$ : le crayon de $12{,}8$ cm **rentre** (en le plaçant selon la diagonale, puisque $12{,}8 > 12$ il ne rentre pas debout).`
    },
    {
      id: "4G1-ds-08",
      title: "Triangles à côtés entiers",
      difficulty: 4,
      points: 6,
      statement: `1. Démontrer que le triangle dont les côtés mesurent $20$ cm, $21$ cm et $29$ cm est rectangle.
2. Pour un entier $n \\geqslant 1$, on considère les trois nombres $2n + 1$, $2n^2 + 2n$ et $2n^2 + 2n + 1$.
   a) Calculer ces trois nombres pour $n = 1$, $n = 2$ et $n = 3$.
   b) Vérifier que, dans chacun de ces trois cas, ce sont les longueurs des côtés d'un triangle rectangle.
3. Un triangle a deux côtés de $6$ cm et $8$ cm ; on note $x$ la longueur (en cm) du troisième côté.
   a) Calculer $x$ pour que le triangle soit rectangle, l'hypoténuse étant le côté de longueur $x$.
   b) Existe-t-il une autre valeur de $x$ pour laquelle le triangle est rectangle ? Si oui, la donner (valeur exacte puis arrondi au centième).`,
      solution: `**1.** Le plus grand côté mesure $29$ cm : $29^2 = 841$ et $20^2 + 21^2 = 400 + 441 = 841$. L'égalité est vérifiée, donc d'après la réciproque du théorème de Pythagore, le triangle est rectangle (l'angle droit est opposé au côté de $29$ cm).

**2. a)** $n = 1$ : $3$ ; $4$ ; $5$. $\\quad n = 2$ : $5$ ; $12$ ; $13$. $\\quad n = 3$ : $7$ ; $24$ ; $25$.
**b)** On compare le carré du plus grand côté à la somme des carrés des deux autres :
- $5^2 = 25$ et $3^2 + 4^2 = 9 + 16 = 25$ ;
- $13^2 = 169$ et $5^2 + 12^2 = 25 + 144 = 169$ ;
- $25^2 = 625$ et $7^2 + 24^2 = 49 + 576 = 625$.

Dans les trois cas, d'après la réciproque du théorème de Pythagore, les triangles sont rectangles.

**3. a)** Si $x$ est l'hypoténuse : $x^2 = 6^2 + 8^2 = 100$, donc $x = 10$ cm.
**b)** Oui : si le côté de $8$ cm est l'hypoténuse, alors $8^2 = 6^2 + x^2$, donc $x^2 = 64 - 36 = 28$ et $x = \\sqrt{28} \\approx 5{,}29$ cm.`
    },
    {
      id: "4G1-ds-09",
      title: "Couper à travers le parc",
      difficulty: 1,
      points: 4,
      statement: `Un parc a la forme d'un rectangle $ABCD$ avec $AB = 80$ m et $BC = 60$ m. Pour aller de $A$ à $C$, Malik peut longer les bords ($A \\to B \\to C$) ou traverser le parc en ligne droite.
1. Calculer la longueur du trajet en ligne droite $AC$.
2. Quelle distance Malik économise-t-il en traversant le parc ?
3. Un autre parc a la forme d'un triangle dont les côtés mesurent $50$ m, $120$ m et $130$ m. Ce triangle est-il rectangle ? Justifier.`,
      solution: `**1.** $ABCD$ est un rectangle, donc le triangle $ABC$ est rectangle en $B$. D'après le théorème de Pythagore :
$AC^2 = AB^2 + BC^2 = 80^2 + 60^2 = 6\\,400 + 3\\,600 = 10\\,000$, donc $AC = \\sqrt{10\\,000} = 100$ m.

**2.** En longeant les bords : $80 + 60 = 140$ m. Économie : $140 - 100 = 40$ m.

**3.** Le plus grand côté mesure $130$ m. $130^2 = 16\\,900$ et $50^2 + 120^2 = 2\\,500 + 14\\,400 = 16\\,900$.
L'égalité de Pythagore est vérifiée, donc, d'après la réciproque du théorème de Pythagore, ce triangle **est rectangle** (l'angle droit est opposé au côté de $130$ m).`
    },
    {
      id: "4G1-ds-10",
      title: "La rampe d'accès",
      difficulty: 2,
      points: 5,
      statement: `Pour permettre l'accès d'un bâtiment aux fauteuils roulants, on installe une rampe. On modélise la situation par un triangle $ABC$ rectangle en $B$ : $[AB]$ est le sol horizontal, $[BC]$ la hauteur à franchir et $[AC]$ la rampe.
Une première rampe mesure $AC = 7{,}25$ m, avec $AB = 7{,}2$ m.
1. Calculer la hauteur $BC$ franchie par cette rampe.
2. Une règle impose que la hauteur franchie ne dépasse pas $\\dfrac{1}{12}$ de la longueur horizontale $AB$. Cette rampe respecte-t-elle la règle ? Justifier.
3. On garde la même hauteur $BC$, mais on allonge la partie horizontale pour respecter exactement la règle.
   a) Quelle doit être la longueur horizontale ?
   b) Calculer la longueur de la nouvelle rampe, arrondie au centimètre.`,
      solution: `**1.** Le triangle $ABC$ est rectangle en $B$. D'après le théorème de Pythagore : $AC^2 = AB^2 + BC^2$, donc
$BC^2 = AC^2 - AB^2 = 7{,}25^2 - 7{,}2^2 = 52{,}5625 - 51{,}84 = 0{,}7225$, d'où $BC = \\sqrt{0{,}7225} = 0{,}85$ m.

**2.** $\\dfrac{1}{12} \\times 7{,}2 = 0{,}6$ m. Or $0{,}85 > 0{,}6$ : la rampe **ne respecte pas** la règle (elle est trop raide).

**3. a)** Il faut $\\dfrac{AB}{12} = 0{,}85$, donc $AB = 12 \\times 0{,}85 = 10{,}2$ m.

**b)** Dans le nouveau triangle rectangle : $AC^2 = 10{,}2^2 + 0{,}85^2 = 104{,}04 + 0{,}7225 = 104{,}7625$, donc $AC = \\sqrt{104{,}7625} \\approx 10{,}24$ m.`
    },
    {
      id: "4G1-ds-11",
      title: "Un triangle sur quadrillage",
      difficulty: 3,
      points: 5,
      statement: `Dans un repère orthonormé d'unité $1$ cm, on place les points $A(1 ; 1)$, $B(5 ; 3)$, $C(3 ; 7)$ et $D(-1 ; 5)$.
1. En utilisant un triangle rectangle dont les côtés suivent les lignes du quadrillage, montrer que $AB^2 = 20$.
2. Calculer de même $BC^2$ et $AC^2$.
3. Démontrer que le triangle $ABC$ est rectangle et isocèle. Préciser le sommet de l'angle droit.
4. Calculer l'aire du triangle $ABC$.
5. Calculer $AD^2$ et $CD^2$. En déduire la nature du quadrilatère $ABCD$. Justifier.`,
      solution: `**1.** On considère le point $E(5 ; 1)$ : le triangle $AEB$ est rectangle en $E$, avec $AE = 5 - 1 = 4$ cm et $EB = 3 - 1 = 2$ cm. D'après le théorème de Pythagore : $AB^2 = 4^2 + 2^2 = 16 + 4 = 20$.

**2.** De la même manière :
- pour $[BC]$ : écarts horizontal $5 - 3 = 2$ et vertical $7 - 3 = 4$, donc $BC^2 = 2^2 + 4^2 = 20$ ;
- pour $[AC]$ : écarts $3 - 1 = 2$ et $7 - 1 = 6$, donc $AC^2 = 2^2 + 6^2 = 40$.

**3.** $AB^2 = BC^2 = 20$, donc $AB = BC$ : le triangle est isocèle en $B$. Le plus grand côté est $[AC]$ et $AB^2 + BC^2 = 20 + 20 = 40 = AC^2$. D'après la réciproque du théorème de Pythagore, $ABC$ est rectangle en $B$. Il est donc **rectangle isocèle en $B$**.

**4.** Aire $= \\dfrac{AB \\times BC}{2}$. Comme $AB = BC$, on a $AB \\times BC = AB^2 = 20$. L'aire vaut $\\dfrac{20}{2} = 10$ cm².

**5.** $AD^2 = (1 - (-1))^2 + (5 - 1)^2 = 4 + 16 = 20$ et $CD^2 = (3 - (-1))^2 + (7 - 5)^2 = 16 + 4 = 20$.
Les quatre côtés de $ABCD$ ont la même longueur ($\\sqrt{20}$ cm) : c'est un losange. Il possède un angle droit en $B$ : un losange ayant un angle droit est un **carré**.`
    },
    {
      id: "4G1-ds-12",
      title: "Le triangle 13-14-15",
      difficulty: 4,
      points: 6,
      statement: `Le triangle $ABC$ a pour côtés $AB = 13$ cm, $BC = 14$ cm et $AC = 15$ cm. On note $H$ le pied de la hauteur issue de $A$ ; on admet que $H$ appartient au segment $[BC]$ et que $BH = 5$ cm.
1. Le triangle $ABC$ est-il rectangle ? Justifier.
2. Calculer la longueur $AH$.
3. Calculer $HC$, puis vérifier, par un calcul, que la longueur $AC$ obtenue est bien cohérente avec l'énoncé.
4. Calculer l'aire du triangle $ABC$.
5. On note $K$ le pied de la hauteur issue de $B$, sur le côté $[AC]$. En utilisant l'aire, calculer la longueur $BK$.`,
      solution: `**1.** Le plus grand côté est $[AC]$. $AC^2 = 15^2 = 225$ et $AB^2 + BC^2 = 169 + 196 = 365$. Comme $225 \\neq 365$, l'égalité de Pythagore n'est pas vérifiée : d'après la contraposée du théorème de Pythagore, le triangle $ABC$ **n'est pas rectangle**.

**2.** Le triangle $ABH$ est rectangle en $H$. D'après le théorème de Pythagore : $AH^2 = AB^2 - BH^2 = 169 - 25 = 144$, donc $AH = 12$ cm.

**3.** $H$ appartient à $[BC]$, donc $HC = BC - BH = 14 - 5 = 9$ cm. Dans le triangle $AHC$ rectangle en $H$ : $AC^2 = AH^2 + HC^2 = 144 + 81 = 225$, donc $AC = 15$ cm. C'est bien la longueur de l'énoncé.

**4.** Aire $= \\dfrac{BC \\times AH}{2} = \\dfrac{14 \\times 12}{2} = 84$ cm².

**5.** L'aire se calcule aussi avec la base $[AC]$ et la hauteur $[BK]$ : $\\dfrac{AC \\times BK}{2} = 84$, donc $15 \\times BK = 168$ et $BK = \\dfrac{168}{15} = 11{,}2$ cm.`
    }
  ],
  "4G2": [
    {
      id: "4G2-ds-01",
      title: "Les milieux de deux côtés",
      difficulty: 1,
      points: 4,
      statement: `Dans le triangle $ABC$ ci-dessous, $I$ est le milieu de $[AB]$ et $J$ est le milieu de $[AC]$. On donne $AB = 7$ cm, $AC = 8$ cm et $BC = 9$ cm.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 400 250" width="400" height="250" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="200,25 40,225 360,225" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="120" y1="125" x2="280" y2="125" stroke="currentColor" stroke-width="1.8" /><circle cx="120" cy="125" r="2.6" fill="currentColor" /><circle cx="280" cy="125" r="2.6" fill="currentColor" /><text x="200" y="18" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="30" y="242" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="370" y="242" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="106" y="125" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="end">I</text><text x="294" y="125" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="start">J</text></svg></div>

1. Démontrer que les droites $(IJ)$ et $(BC)$ sont parallèles.
2. Calculer la longueur $IJ$.
3. On note $K$ le milieu de $[BC]$. Calculer les longueurs $IK$ et $JK$.
4. Comparer le périmètre du triangle $IJK$ à celui du triangle $ABC$.`,
      solution: `**1.** Dans le triangle $ABC$, $I$ est le milieu de $[AB]$ et $J$ est le milieu de $[AC]$. Or, si une droite passe par les milieux de deux côtés d'un triangle, alors elle est parallèle au troisième côté. Donc $(IJ) \\parallel (BC)$.

**2.** Si un segment joint les milieux de deux côtés d'un triangle, alors sa longueur est égale à la moitié de celle du troisième côté. Donc $IJ = \\dfrac{BC}{2} = \\dfrac{9}{2} = 4{,}5$ cm.

**3.** De la même façon :
- $I$ et $K$ sont les milieux de $[AB]$ et $[BC]$ : $IK = \\dfrac{AC}{2} = 4$ cm ;
- $J$ et $K$ sont les milieux de $[AC]$ et $[BC]$ : $JK = \\dfrac{AB}{2} = 3{,}5$ cm.

**4.** Périmètre de $IJK$ : $4{,}5 + 4 + 3{,}5 = 12$ cm. Périmètre de $ABC$ : $7 + 8 + 9 = 24$ cm. Le périmètre de $IJK$ est **la moitié** de celui de $ABC$.`
    },
    {
      id: "4G2-ds-02",
      title: "Cercle circonscrit à un triangle rectangle",
      difficulty: 1,
      points: 4,
      statement: `Le triangle $EFG$ est rectangle en $E$ et $FG = 10$ cm. On note $O$ le milieu de $[FG]$.
1. Où se trouve le centre du cercle circonscrit au triangle $EFG$ ? Quel est son rayon ?
2. En déduire la longueur $EO$. Comment appelle-t-on le segment $[EO]$ dans le triangle $EFG$ ?
3. Un point $H$, distinct de $F$ et de $G$, appartient au cercle de diamètre $[FG]$. Quelle est la nature du triangle $FGH$ ? Justifier.`,
      solution: `**1.** Si un triangle est rectangle, alors le centre de son cercle circonscrit est le milieu de son hypoténuse. L'hypoténuse de $EFG$ est $[FG]$, donc le centre est $O$, et le rayon vaut $\\dfrac{FG}{2} = 5$ cm.

**2.** $E$ est sur le cercle de centre $O$ et de rayon $5$ cm, donc $EO = 5$ cm. Le segment $[EO]$ joint un sommet au milieu du côté opposé : c'est la **médiane** issue de l'angle droit (elle mesure la moitié de l'hypoténuse).

**3.** Si un point $H$ appartient au cercle de diamètre $[FG]$ (et est distinct de $F$ et $G$), alors le triangle $FGH$ est rectangle en $H$. Donc $FGH$ est **rectangle en $H$**.`
    },
    {
      id: "4G2-ds-03",
      title: "Trouver un milieu et une longueur",
      difficulty: 2,
      points: 5,
      statement: `Dans le triangle $RST$, on donne $RS = 6$ cm, $RT = 11$ cm et $ST = 7{,}4$ cm. Le point $M$ est le milieu de $[RS]$. La droite parallèle à $(ST)$ passant par $M$ coupe $[RT]$ en $N$.
1. Faire une figure à main levée codée.
2. Démontrer que $N$ est le milieu de $[RT]$. En déduire la longueur $RN$.
3. Calculer la longueur $MN$.
4. Calculer le périmètre du trapèze $MNTS$.`,
      solution: `**1.** Figure : triangle $RST$, $M$ au milieu de $[RS]$ (codage de deux segments égaux), $[MN]$ parallèle à $[ST]$ avec $N$ sur $[RT]$.

**2.** Dans le triangle $RST$, la droite $(MN)$ passe par le milieu $M$ de $[RS]$ et est parallèle à $(ST)$. Or, si une droite passe par le milieu d'un côté d'un triangle et est parallèle à un deuxième côté, alors elle coupe le troisième côté en son milieu. Donc $N$ est le milieu de $[RT]$ et $RN = \\dfrac{11}{2} = 5{,}5$ cm.

**3.** $M$ et $N$ sont les milieux de $[RS]$ et $[RT]$, donc $MN = \\dfrac{ST}{2} = \\dfrac{7{,}4}{2} = 3{,}7$ cm.

**4.** $MS = 3$ cm et $NT = 5{,}5$ cm. Périmètre de $MNTS$ : $MN + NT + TS + SM = 3{,}7 + 5{,}5 + 7{,}4 + 3 = 19{,}6$ cm.`
    },
    {
      id: "4G2-ds-04",
      title: "Rayon du cercle circonscrit",
      difficulty: 2,
      points: 4,
      statement: `Le triangle $ABC$ est rectangle en $B$, avec $AB = 6$ cm et $BC = 8$ cm. On note $M$ le milieu de $[AC]$.
1. Calculer la longueur $AC$.
2. Déterminer le centre et le rayon du cercle $\\mathcal{C}$ circonscrit au triangle $ABC$.
3. Calculer la longueur $BM$.
4. Un point $D$ de $\\mathcal{C}$, distinct de $A$ et de $C$, est placé de l'autre côté de $(AC)$ par rapport à $B$. Que peut-on dire de l'angle $\\widehat{ADC}$ ? Justifier.`,
      solution: `**1.** Le triangle $ABC$ est rectangle en $B$. D'après le théorème de Pythagore : $AC^2 = 36 + 64 = 100$, donc $AC = 10$ cm.

**2.** Le cercle circonscrit à un triangle rectangle a pour centre le milieu de l'hypoténuse : son centre est $M$ et son rayon est $\\dfrac{AC}{2} = 5$ cm.

**3.** $B$ est sur le cercle $\\mathcal{C}$ de centre $M$, donc $BM = 5$ cm (rayon).

**4.** $[AC]$ est un diamètre de $\\mathcal{C}$ et $D$ est un point de $\\mathcal{C}$ distinct de $A$ et $C$. Si un triangle est inscrit dans un cercle ayant pour diamètre l'un de ses côtés, alors il est rectangle : $ADC$ est rectangle en $D$, donc **$\\widehat{ADC} = 90^\\circ$**.`
    },
    {
      id: "4G2-ds-05",
      title: "Les milieux d'un quadrilatère",
      difficulty: 3,
      points: 5,
      statement: `$ABCD$ est un quadrilatère quelconque dont les diagonales mesurent $AC = 10$ cm et $BD = 8$ cm. On note $I$, $J$, $K$ et $L$ les milieux respectifs de $[AB]$, $[BC]$, $[CD]$ et $[DA]$.
1. Dans le triangle $ABC$, démontrer que $(IJ) \\parallel (AC)$ et calculer $IJ$.
2. Dans le triangle $ACD$, démontrer que $(LK) \\parallel (AC)$ et calculer $LK$.
3. En déduire la nature du quadrilatère $IJKL$.
4. Calculer le périmètre de $IJKL$.`,
      solution: `**1.** Dans le triangle $ABC$, $I$ est le milieu de $[AB]$ et $J$ celui de $[BC]$. D'après le théorème de la droite des milieux, $(IJ) \\parallel (AC)$ et $IJ = \\dfrac{AC}{2} = 5$ cm.

**2.** Dans le triangle $ACD$, $L$ est le milieu de $[DA]$ et $K$ celui de $[CD]$. De même, $(LK) \\parallel (AC)$ et $LK = \\dfrac{AC}{2} = 5$ cm.

**3.** $(IJ)$ et $(LK)$ sont parallèles à la même droite $(AC)$, donc parallèles entre elles, et $IJ = LK$. Un quadrilatère non croisé qui a deux côtés opposés parallèles et de même longueur est un parallélogramme : **$IJKL$ est un parallélogramme**.

**4.** De même, dans les triangles $ABD$ et $BCD$ : $IL = JK = \\dfrac{BD}{2} = 4$ cm.
Périmètre : $2 \\times (5 + 4) = 18$ cm (c'est la somme des longueurs des diagonales de $ABCD$).`
    },
    {
      id: "4G2-ds-06",
      title: "Cercle, diamètre et droite des milieux",
      difficulty: 3,
      points: 5,
      statement: `On considère un cercle $\\mathcal{C}$ de centre $O$ et de diamètre $[AB]$, avec $AB = 10$ cm. Le point $C$ appartient à $\\mathcal{C}$ et $AC = 8$ cm. On note $I$ le milieu de $[AC]$.
1. Démontrer que le triangle $ABC$ est rectangle en $C$.
2. Calculer la longueur $BC$.
3. Démontrer que $(OI) \\parallel (BC)$ et calculer $OI$.
4. En déduire que $(OI)$ est perpendiculaire à $(AC)$.`,
      solution: `**1.** Le point $C$ appartient au cercle de diamètre $[AB]$ (et est distinct de $A$ et $B$). Donc le triangle $ABC$ est rectangle en $C$.

**2.** D'après le théorème de Pythagore dans $ABC$ rectangle en $C$ : $BC^2 = AB^2 - AC^2 = 100 - 64 = 36$, donc $BC = 6$ cm.

**3.** $O$ est le centre du cercle, donc le milieu du diamètre $[AB]$ ; $I$ est le milieu de $[AC]$. Dans le triangle $ABC$, d'après le théorème de la droite des milieux, $(OI) \\parallel (BC)$ et $OI = \\dfrac{BC}{2} = 3$ cm.

**4.** On sait que $(BC) \\perp (AC)$ (triangle rectangle en $C$) et que $(OI) \\parallel (BC)$. Or, si deux droites sont parallèles, toute droite perpendiculaire à l'une est perpendiculaire à l'autre. Donc $(OI) \\perp (AC)$.`
    },
    {
      id: "4G2-ds-07",
      title: "Triangles des milieux successifs",
      difficulty: 4,
      points: 5,
      statement: `Le triangle $ABC$ a pour côtés $AB = 12$ cm, $BC = 20$ cm et $CA = 16$ cm. On construit le triangle $A_1B_1C_1$ dont les sommets sont les milieux des côtés de $ABC$, puis le triangle $A_2B_2C_2$ dont les sommets sont les milieux des côtés de $A_1B_1C_1$, et ainsi de suite.
1. Démontrer que $ABC$ est rectangle, puis calculer son aire.
2. Calculer les longueurs des côtés de $A_1B_1C_1$ et son périmètre. Justifier.
3. Le triangle $ABC$ est partagé en quatre petits triangles par les segments joignant les milieux. Expliquer pourquoi ces quatre triangles ont la même aire. En déduire l'aire de $A_1B_1C_1$.
4. À partir de quel triangle $A_nB_nC_n$ le périmètre devient-il inférieur à $1$ cm ?`,
      solution: `**1.** Le plus grand côté est $[BC]$ : $BC^2 = 400$ et $AB^2 + CA^2 = 144 + 256 = 400$. D'après la réciproque du théorème de Pythagore, $ABC$ est rectangle en $A$. Son aire vaut $\\dfrac{12 \\times 16}{2} = 96$ cm².

**2.** D'après le théorème de la droite des milieux, chaque côté de $A_1B_1C_1$ mesure la moitié du côté de $ABC$ qui lui est parallèle : $6$ cm, $10$ cm et $8$ cm. Son périmètre vaut $24$ cm, la moitié de celui de $ABC$ ($48$ cm).

**3.** Chacun des quatre petits triangles a des côtés de longueurs $6$ cm, $8$ cm et $10$ cm (moitiés des côtés de $ABC$). Ils ont les mêmes longueurs de côtés, donc ils sont superposables et ont la même aire. L'aire de $A_1B_1C_1$ vaut donc $\\dfrac{96}{4} = 24$ cm². (Vérification : $A_1B_1C_1$ est rectangle, d'aire $\\dfrac{6 \\times 8}{2} = 24$ cm².)

**4.** Le périmètre est divisé par $2$ à chaque étape : $48 \\to 24 \\to 12 \\to 6 \\to 3 \\to 1{,}5 \\to 0{,}75$.
Il devient inférieur à $1$ cm pour le triangle **$A_6B_6C_6$** ($0{,}75$ cm).`
    },
    {
      id: "4G2-ds-08",
      title: "Droite des milieux dans un parallélogramme",
      difficulty: 4,
      points: 6,
      statement: `$ABCD$ est un parallélogramme de centre $O$, avec $AD = 7$ cm. On note $I$ le milieu de $[AB]$. La droite $(OI)$ coupe le segment $[CD]$ en $J$.
1. Justifier que $O$ est le milieu de $[AC]$.
2. Démontrer que $(OI) \\parallel (BC)$ et calculer $OI$.
3. Justifier que $(OJ) \\parallel (AD)$.
4. Démontrer que $J$ est le milieu de $[CD]$, puis calculer $OJ$ et $IJ$.`,
      solution: `**1.** Les diagonales d'un parallélogramme se coupent en leur milieu. $O$ est le centre de $ABCD$, donc $O$ est le milieu de $[AC]$ (et de $[BD]$).

**2.** Dans le triangle $ABC$, $I$ est le milieu de $[AB]$ et $O$ est le milieu de $[AC]$. D'après le théorème de la droite des milieux, $(OI) \\parallel (BC)$ et $OI = \\dfrac{BC}{2}$. Comme $ABCD$ est un parallélogramme, $BC = AD = 7$ cm, donc $OI = 3{,}5$ cm.

**3.** $(OJ)$ est la droite $(OI)$, parallèle à $(BC)$. Or $(BC) \\parallel (AD)$ (côtés opposés d'un parallélogramme). Deux droites parallèles à une même troisième sont parallèles entre elles : $(OJ) \\parallel (AD)$.

**4.** Dans le triangle $CAD$, la droite $(OJ)$ passe par le milieu $O$ de $[CA]$ et est parallèle à $(AD)$. D'après la réciproque du théorème de la droite des milieux, elle coupe $[CD]$ en son milieu : **$J$ est le milieu de $[CD]$**.
Alors $OJ = \\dfrac{AD}{2} = 3{,}5$ cm, et comme $O$ est entre $I$ et $J$ : $IJ = OI + OJ = 7$ cm.`
    },
    {
      id: "4G2-ds-09",
      title: "L'escabeau",
      difficulty: 1,
      points: 4,
      statement: `Un escabeau est schématisé par un triangle $ABC$ : $A$ est le sommet, $B$ et $C$ sont les pieds posés au sol. Une corde relie les points $M$ et $N$, milieux respectifs des montants $[AB]$ et $[AC]$.
1. Les pieds sont écartés de $BC = 1{,}2$ m. Calculer la longueur de la corde $MN$. Justifier.
2. Démontrer que la corde est parallèle au sol $(BC)$.
3. On remplace la corde par une corde de $0{,}7$ m, toujours fixée aux milieux des montants et bien tendue. Quel est alors l'écartement des pieds ?`,
      solution: `**1.** Dans le triangle $ABC$, $M$ est le milieu de $[AB]$ et $N$ est le milieu de $[AC]$. Or, si un segment joint les milieux de deux côtés d'un triangle, alors sa longueur est la moitié de celle du troisième côté. Donc $MN = \\dfrac{BC}{2} = \\dfrac{1{,}2}{2} = 0{,}6$ m.

**2.** Si une droite passe par les milieux de deux côtés d'un triangle, alors elle est parallèle au troisième côté. Donc $(MN) \\parallel (BC)$ : la corde est parallèle au sol.

**3.** On a toujours $MN = \\dfrac{BC}{2}$, donc $BC = 2 \\times MN = 2 \\times 0{,}7 = 1{,}4$ m.`
    },
    {
      id: "4G2-ds-10",
      title: "Le puits équidistant",
      difficulty: 2,
      points: 5,
      statement: `Trois maisons $A$, $B$ et $C$ forment un triangle rectangle en $A$, avec $AB = 30$ m et $AC = 40$ m. On veut creuser un puits $P$ situé à la même distance des trois maisons.
1. Calculer la distance $BC$.
2. Où faut-il placer le puits ? Justifier, puis calculer la distance entre le puits et chaque maison.
3. Une quatrième maison $D$, située de l'autre côté de $(BC)$ par rapport à $A$, est à $14$ m de $B$ et à $48$ m de $C$.
   a) Démontrer que le triangle $BDC$ est rectangle.
   b) En déduire que la maison $D$ est, elle aussi, à $25$ m du puits.`,
      solution: `**1.** Le triangle $ABC$ est rectangle en $A$. D'après le théorème de Pythagore : $BC^2 = 30^2 + 40^2 = 900 + 1\\,600 = 2\\,500$, donc $BC = 50$ m.

**2.** Le point à égale distance des trois sommets d'un triangle est le centre de son cercle circonscrit. Si un triangle est rectangle, alors le centre de son cercle circonscrit est le milieu de son hypoténuse. Il faut donc placer le puits au **milieu $P$ de $[BC]$**. La distance à chaque maison est le rayon : $\\dfrac{BC}{2} = 25$ m.

**3. a)** Dans le triangle $BDC$, le plus grand côté est $[BC]$. $BC^2 = 2\\,500$ et $BD^2 + DC^2 = 14^2 + 48^2 = 196 + 2\\,304 = 2\\,500$. D'après la réciproque du théorème de Pythagore, $BDC$ est rectangle en $D$.

**b)** Le triangle $BDC$ est rectangle en $D$, d'hypoténuse $[BC]$ : son cercle circonscrit a pour centre le milieu $P$ de $[BC]$ et pour rayon $25$ m. Donc $PD = 25$ m : le puits est aussi à $25$ m de la maison $D$.`
    },
    {
      id: "4G2-ds-11",
      title: "La ligne médiane d'un trapèze",
      difficulty: 3,
      points: 5,
      statement: `$ABCD$ est un trapèze de bases $[AB]$ et $[CD]$, avec $(AB) \\parallel (CD)$, $AB = 10$ cm et $CD = 6$ cm. Le point $M$ est le milieu de $[AD]$. La droite parallèle à $(AB)$ passant par $M$ coupe $[AC]$ en $I$ et $[BC]$ en $N$.
1. Faire une figure à main levée codée.
2. En se plaçant dans le triangle $ACD$, démontrer que $I$ est le milieu de $[AC]$, puis calculer $MI$.
3. En se plaçant dans le triangle $ABC$, démontrer que $N$ est le milieu de $[BC]$, puis calculer $IN$.
4. En déduire la longueur $MN$. Comparer avec la moyenne des longueurs des deux bases.`,
      solution: `**1.** Figure : trapèze $ABCD$ avec $[AB]$ et $[CD]$ parallèles, $M$ milieu de $[AD]$ (codage), la diagonale $[AC]$, et le segment $[MN]$ parallèle aux bases, qui coupe $[AC]$ en $I$.

**2.** La droite $(MN)$ est parallèle à $(AB)$, et $(AB) \\parallel (CD)$ ; donc $(MI) \\parallel (DC)$.
Dans le triangle $ACD$, la droite $(MI)$ passe par le milieu $M$ de $[AD]$ et est parallèle à $(DC)$. Si une droite passe par le milieu d'un côté d'un triangle et est parallèle à un deuxième côté, alors elle coupe le troisième côté en son milieu : $I$ est le milieu de $[AC]$.
$M$ et $I$ sont les milieux de $[AD]$ et $[AC]$, donc $MI = \\dfrac{DC}{2} = \\dfrac{6}{2} = 3$ cm.

**3.** Dans le triangle $ABC$, la droite $(IN)$ passe par le milieu $I$ de $[AC]$ et est parallèle à $(AB)$ : elle coupe $[BC]$ en son milieu, donc $N$ est le milieu de $[BC]$.
$I$ et $N$ sont les milieux de $[CA]$ et $[CB]$, donc $IN = \\dfrac{AB}{2} = \\dfrac{10}{2} = 5$ cm.

**4.** $I$ est situé sur le segment $[MN]$, donc $MN = MI + IN = 3 + 5 = 8$ cm.
Moyenne des bases : $\\dfrac{10 + 6}{2} = 8$ cm. La longueur $MN$ est **égale à la moyenne** des longueurs des deux bases.`
    },
    {
      id: "4G2-ds-12",
      title: "Le triangle rectangle à 60°",
      difficulty: 4,
      points: 6,
      statement: `Le triangle $ABC$ est rectangle en $A$, avec $BC = 12$ cm et $\\widehat{ABC} = 60^\\circ$. On note $M$ le milieu de $[BC]$ et $I$ le milieu de $[AC]$.
1. Justifier que $MA = MB = MC = 6$ cm.
2. a) Quelle est la nature du triangle $ABM$ ? Justifier.
   b) En déduire la longueur $AB$.
3. Calculer la longueur $AC$, arrondie au millimètre.
4. Démontrer que $(MI) \\parallel (AB)$ et calculer $MI$.
5. Démontrer que les droites $(MI)$ et $(AC)$ sont perpendiculaires. Que représente la droite $(MI)$ pour le segment $[AC]$ ?`,
      solution: `**1.** Le triangle $ABC$ est rectangle en $A$ : le centre de son cercle circonscrit est le milieu $M$ de l'hypoténuse $[BC]$, et le rayon vaut $\\dfrac{BC}{2} = 6$ cm. Les points $A$, $B$ et $C$ sont sur ce cercle, donc $MA = MB = MC = 6$ cm.

**2. a)** $MA = MB$, donc le triangle $ABM$ est isocèle en $M$ : ses angles à la base sont égaux, $\\widehat{MAB} = \\widehat{MBA} = 60^\\circ$. La somme des angles d'un triangle vaut $180^\\circ$, donc $\\widehat{AMB} = 180^\\circ - 60^\\circ - 60^\\circ = 60^\\circ$. Ses trois angles mesurent $60^\\circ$ : $ABM$ est **équilatéral**.

**b)** Donc $AB = MB = 6$ cm (c'est la moitié de l'hypoténuse).

**3.** D'après le théorème de Pythagore dans $ABC$ rectangle en $A$ : $AC^2 = BC^2 - AB^2 = 144 - 36 = 108$, donc $AC = \\sqrt{108} \\approx 10{,}4$ cm.

**4.** Dans le triangle $ABC$, $M$ est le milieu de $[CB]$ et $I$ celui de $[CA]$. La droite qui joint les milieux de deux côtés est parallèle au troisième côté : $(MI) \\parallel (AB)$. De plus, $MI = \\dfrac{AB}{2} = 3$ cm.

**5.** $(AB) \\perp (AC)$ (angle droit en $A$) et $(MI) \\parallel (AB)$. Si deux droites sont parallèles, toute droite perpendiculaire à l'une est perpendiculaire à l'autre : $(MI) \\perp (AC)$.
La droite $(MI)$ est perpendiculaire à $[AC]$ et passe par son milieu $I$ : c'est la **médiatrice** de $[AC]$ (ce qui est cohérent avec $MA = MC$).`
    }
  ],
  "4G3": [
    {
      id: "4G3-ds-01",
      title: "Translation dans un repère",
      difficulty: 1,
      points: 4,
      statement: `Dans un repère du plan, on place les points $A(1 ; 2)$, $B(4 ; 3)$, $C(0 ; -1)$ et $D(-2 ; 4)$. On note $t$ la translation qui transforme $A$ en $B$.
1. Décrire le déplacement associé à $t$ (de combien d'unités vers la droite ? vers le haut ?).
2. Donner les coordonnées de $C'$ et $D'$, images respectives de $C$ et $D$ par $t$.
3. Quelle est la nature du quadrilatère $ABC'C$ ? Justifier.
4. Le point $F(5 ; 5)$ est l'image d'un point $E$ par la translation $t$. Donner les coordonnées de $E$.`,
      solution: `**1.** Pour aller de $A(1 ; 2)$ à $B(4 ; 3)$, on se déplace de $4 - 1 = 3$ unités vers la droite et de $3 - 2 = 1$ unité vers le haut.

**2.** On applique ce même déplacement : $C'(0 + 3 ; -1 + 1) = C'(3 ; 0)$ et $D'(-2 + 3 ; 4 + 1) = D'(1 ; 5)$.

**3.** $C'$ est l'image de $C$ par la translation qui transforme $A$ en $B$, donc **$ABC'C$ est un parallélogramme** (éventuellement aplati ; ici, $C$ n'est pas sur la droite $(AB)$, il n'est pas aplati).

**4.** On fait le déplacement inverse : $E(5 - 3 ; 5 - 1) = E(2 ; 4)$. Vérification : l'image de $E$ par $t$ est $(2 + 3 ; 4 + 1) = (5 ; 5)$.`
    },
    {
      id: "4G3-ds-02",
      title: "Ce que conserve une translation",
      difficulty: 1,
      points: 4,
      statement: `Le triangle $MNP$ est tel que $MN = 5$ cm, $\\widehat{MNP} = 40^\\circ$ et son aire vaut $12$ cm². Par une translation $t$, il a pour image le triangle $M'N'P'$ (les points $M$, $N$, $P$ ont pour images $M'$, $N'$, $P'$).
1. Donner, en justifiant, la longueur $M'N'$, la mesure de l'angle $\\widehat{M'N'P'}$ et l'aire du triangle $M'N'P'$.
2. Que peut-on dire des droites $(MN)$ et $(M'N')$ ?
3. On suppose que $M'$ n'est pas sur la droite $(MN)$. Quelle est la nature du quadrilatère $MM'N'N$ ?`,
      solution: `**1.** Une translation conserve les longueurs, les mesures d'angles et les aires. Donc $M'N' = MN = 5$ cm, $\\widehat{M'N'P'} = \\widehat{MNP} = 40^\\circ$ et l'aire de $M'N'P'$ vaut $12$ cm².

**2.** L'image d'une droite par une translation est une droite qui lui est parallèle : $(M'N') \\parallel (MN)$.

**3.** $M'$ et $N'$ sont les images de $M$ et $N$ par la même translation : $N'$ est l'image de $N$ par la translation qui transforme $M$ en $M'$. Donc $MM'N'N$ est un **parallélogramme** (non aplati, car $M'$ n'est pas sur $(MN)$).`
    },
    {
      id: "4G3-ds-03",
      title: "Translation et parallélogramme",
      difficulty: 2,
      points: 5,
      statement: `$ABCD$ est un parallélogramme tel que $AB = 5$ cm, $AD = 3$ cm et $\\widehat{DAB} = 60^\\circ$. On note $t$ la translation qui transforme $A$ en $B$.
1. Quelle est l'image de $D$ par $t$ ? Justifier.
2. On note $E$ l'image de $B$ par $t$. Justifier que $B$ est le milieu de $[AE]$.
3. Démontrer que $DCEB$ est un parallélogramme.
4. Quelle est l'image de l'angle $\\widehat{DAB}$ par $t$ ? En déduire la mesure de $\\widehat{CBE}$.`,
      solution: `**1.** $ABCD$ est un parallélogramme, donc $C$ est l'image de $D$ par la translation qui transforme $A$ en $B$. L'image de $D$ par $t$ est **$C$**.

**2.** $E$ est l'image de $B$ par la translation qui transforme $A$ en $B$ : on fait glisser $B$ dans la même direction, le même sens et de la même longueur que de $A$ à $B$. Donc $A$, $B$, $E$ sont alignés dans cet ordre et $BE = AB$ : $B$ est le milieu de $[AE]$.

**3.** D'après la question 1, $t$ transforme aussi $D$ en $C$ : c'est donc également la translation qui transforme $D$ en $C$. Comme $E$ est l'image de $B$ par cette translation, **$DCEB$ est un parallélogramme**.

**4.** $t$ transforme $D$ en $C$, $A$ en $B$ et $B$ en $E$ : l'image de l'angle $\\widehat{DAB}$ est l'angle $\\widehat{CBE}$. Une translation conserve les angles, donc $\\widehat{CBE} = 60^\\circ$.`
    },
    {
      id: "4G3-ds-04",
      title: "Image d'un triangle dans un repère",
      difficulty: 2,
      points: 4,
      statement: `Dans un repère, on considère les points $A(-2 ; 1)$, $B(0 ; 4)$ et $C(1 ; -3)$. La translation $t$ transforme $A$ en $A'(3 ; -1)$.
1. Décrire le déplacement associé à $t$.
2. Calculer les coordonnées de $B'$ et $C'$, images de $B$ et $C$ par $t$.
3. Calculer la longueur $AB$, puis la longueur $A'B'$ (on pourra utiliser le théorème de Pythagore). Le résultat était-il prévisible ?`,
      solution: `**1.** De $A(-2 ; 1)$ à $A'(3 ; -1)$ : on se déplace de $3 - (-2) = 5$ unités vers la droite et de $-1 - 1 = -2$, c'est-à-dire de $2$ unités vers le bas.

**2.** $B'(0 + 5 ; 4 - 2) = B'(5 ; 2)$ et $C'(1 + 5 ; -3 - 2) = C'(6 ; -5)$.

**3.** De $A$ à $B$ : $2$ unités horizontalement et $3$ unités verticalement. Dans le triangle rectangle ainsi formé, d'après le théorème de Pythagore : $AB^2 = 2^2 + 3^2 = 13$, donc $AB = \\sqrt{13}$.
De $A'(3 ; -1)$ à $B'(5 ; 2)$ : $2$ unités horizontalement et $3$ verticalement, donc $A'B' = \\sqrt{13}$.
C'était prévisible : **une translation conserve les longueurs**.`
    },
    {
      id: "4G3-ds-05",
      title: "Enchaîner deux translations",
      difficulty: 3,
      points: 5,
      statement: `Dans un repère, on donne $A(0 ; 0)$, $B(2 ; 3)$, $C(6 ; 2)$ et $M(1 ; 1)$. On note $t_1$ la translation qui transforme $A$ en $B$ et $t_2$ celle qui transforme $B$ en $C$.
1. Calculer les coordonnées de $M_1$, image de $M$ par $t_1$, puis de $M_2$, image de $M_1$ par $t_2$.
2. Calculer les coordonnées de l'image de $M$ par la translation $t_3$ qui transforme $A$ en $C$. Que remarque-t-on ?
3. Par quelle transformation unique peut-on remplacer « $t_1$ puis la translation qui transforme $B$ en $A$ » ? Justifier.`,
      solution: `**1.** $t_1$ : de $A(0 ; 0)$ à $B(2 ; 3)$, soit $2$ vers la droite et $3$ vers le haut. $M_1(1 + 2 ; 1 + 3) = M_1(3 ; 4)$.
$t_2$ : de $B(2 ; 3)$ à $C(6 ; 2)$, soit $4$ vers la droite et $1$ vers le bas. $M_2(3 + 4 ; 4 - 1) = M_2(7 ; 3)$.

**2.** $t_3$ : de $A(0 ; 0)$ à $C(6 ; 2)$, soit $6$ vers la droite et $2$ vers le haut. Image de $M$ : $(1 + 6 ; 1 + 2) = (7 ; 3)$.
On retrouve $M_2$ : appliquer $t_1$ puis $t_2$ revient à appliquer la translation qui transforme $A$ en $C$.

**3.** $t_1$ déplace de $2$ vers la droite et $3$ vers le haut ; la translation qui transforme $B$ en $A$ déplace de $2$ vers la gauche et $3$ vers le bas. Les deux déplacements se compensent : chaque point revient à sa place. On peut les remplacer par la **transformation qui laisse tous les points fixes** (translation « nulle »).`
    },
    {
      id: "4G3-ds-06",
      title: "Reconnaître une transformation",
      difficulty: 3,
      points: 4,
      statement: `Dans un repère d'origine $O$, le triangle $T$ a pour sommets $(0 ; 0)$, $(2 ; 0)$ et $(0 ; 1)$. On considère trois autres triangles :
- $T_1$ de sommets $(3 ; 2)$, $(5 ; 2)$ et $(3 ; 3)$ ;
- $T_2$ de sommets $(0 ; 0)$, $(-2 ; 0)$ et $(0 ; -1)$ ;
- $T_3$ de sommets $(0 ; 0)$, $(-2 ; 0)$ et $(0 ; 1)$.

1. Placer ces quatre triangles dans un repère.
2. Pour chacun des triangles $T_1$, $T_2$, $T_3$, préciser la transformation qui permet de passer de $T$ à ce triangle. Justifier à l'aide des coordonnées.
3. Ces trois triangles ont-ils la même aire que $T$ ? Justifier sans calcul.`,
      solution: `**1.** Figure à réaliser sur papier quadrillé.

**2.**
- $T \\to T_1$ : chaque sommet est déplacé de $3$ unités vers la droite et $2$ vers le haut ($(0 ; 0) \\to (3 ; 2)$, $(2 ; 0) \\to (5 ; 2)$, $(0 ; 1) \\to (3 ; 3)$). C'est une **translation**.
- $T \\to T_2$ : chaque sommet $(x ; y)$ a pour image $(-x ; -y)$ : c'est la **symétrie centrale de centre $O$**.
- $T \\to T_3$ : chaque sommet $(x ; y)$ a pour image $(-x ; y)$ : c'est la **symétrie axiale d'axe l'axe des ordonnées**.

**3.** Oui : la translation, la symétrie centrale et la symétrie axiale conservent les longueurs, donc les aires. Les trois triangles ont la même aire que $T$, à savoir $\\dfrac{2 \\times 1}{2} = 1$ unité d'aire.`
    },
    {
      id: "4G3-ds-07",
      title: "Démontrer avec deux translations",
      difficulty: 4,
      points: 5,
      statement: `$ABC$ est un triangle. On note $D$ l'image de $C$ par la translation qui transforme $A$ en $B$, et $E$ l'image de $C$ par la translation qui transforme $B$ en $A$.
1. Faire une figure.
2. Démontrer que $ABDC$ et $BAEC$ sont des parallélogrammes.
3. En déduire que les droites $(CD)$ et $(CE)$ sont parallèles à $(AB)$, puis que les points $D$, $C$ et $E$ sont alignés.
4. Démontrer que $C$ est le milieu de $[DE]$.`,
      solution: `**1.** Figure : $D$ s'obtient en faisant glisser $C$ comme on passe de $A$ à $B$ ; $E$ en faisant glisser $C$ comme on passe de $B$ à $A$.

**2.** $D$ est l'image de $C$ par la translation qui transforme $A$ en $B$, donc $ABDC$ est un parallélogramme. $E$ est l'image de $C$ par la translation qui transforme $B$ en $A$, donc $BAEC$ est un parallélogramme.

**3.** Les côtés opposés d'un parallélogramme sont parallèles : $(CD) \\parallel (AB)$ (dans $ABDC$) et $(CE) \\parallel (AB)$ (dans $BAEC$). Les droites $(CD)$ et $(CE)$ sont parallèles à la même droite, donc parallèles entre elles ; comme elles ont le point $C$ en commun, elles sont confondues : $D$, $C$, $E$ sont alignés.

**4.** Les côtés opposés d'un parallélogramme ont la même longueur : $CD = AB$ et $CE = AB$, donc $CD = CE$. De plus, $D$ est obtenu à partir de $C$ en glissant dans le sens de $A$ vers $B$, et $E$ dans le sens contraire : $D$ et $E$ sont de part et d'autre de $C$. Donc **$C$ est le milieu de $[DE]$**.`
    },
    {
      id: "4G3-ds-08",
      title: "Deux carrés qui se chevauchent",
      difficulty: 4,
      points: 6,
      statement: `Dans un repère (unité : le centimètre), on considère le carré $ABCD$ avec $A(0 ; 0)$, $B(4 ; 0)$, $C(4 ; 4)$ et $D(0 ; 4)$. On note $O$ son centre et $t$ la translation qui transforme $A$ en $O$.
1. Donner les coordonnées de $O$.
2. Construire l'image $A'B'C'D'$ du carré par $t$ et donner les coordonnées de ses sommets.
3. Justifier, sans calcul, que $A'B'C'D'$ est un carré de même aire que $ABCD$.
4. Les deux carrés se chevauchent. Calculer l'aire de la partie commune, puis l'aire de la figure formée par la réunion des deux carrés.
5. Calculer le périmètre de cette réunion.`,
      solution: `**1.** $O$ est le milieu de la diagonale $[AC]$ : $O(2 ; 2)$.

**2.** $t$ déplace chaque point de $2$ cm vers la droite et $2$ cm vers le haut : $A'(2 ; 2)$, $B'(6 ; 2)$, $C'(6 ; 6)$, $D'(2 ; 6)$.

**3.** Une translation conserve les longueurs et les angles : l'image d'un carré de côté $4$ cm est un carré de côté $4$ cm. Elle conserve aussi les aires : $16$ cm².

**4.** La partie commune est le carré de sommets $(2 ; 2)$, $(4 ; 2)$, $(4 ; 4)$, $(2 ; 4)$, de côté $2$ cm : aire $4$ cm².
Réunion : $16 + 16 - 4 = 28$ cm² (on retire la partie commune comptée deux fois).

**5.** Chaque carré a un périmètre de $16$ cm, mais une partie de son bord est à l'intérieur de l'autre carré : pour $ABCD$, les segments de $(4 ; 2)$ à $(4 ; 4)$ et de $(2 ; 4)$ à $(4 ; 4)$, soit $4$ cm ; de même $4$ cm pour $A'B'C'D'$.
Périmètre de la réunion : $(16 - 4) + (16 - 4) = 24$ cm.`
    },
    {
      id: "4G3-ds-09",
      title: "La banderole à motifs",
      difficulty: 1,
      points: 4,
      statement: `Pour décorer une banderole, Inès dessine un motif triangulaire $ABC$ tel que $AB = 3$ cm, $AC = 2{,}5$ cm et $\\widehat{BAC} = 50^\\circ$. Elle le reproduit ensuite plusieurs fois en le faisant glisser de $4$ cm vers la droite : le deuxième motif $A_1B_1C_1$ est l'image du triangle $ABC$ par la translation $t$ qui transforme $A$ en $A_1$, avec $AA_1 = 4$ cm. On suppose que le point $B$ n'est pas sur la droite $(AA_1)$.
1. Donner, en justifiant, les longueurs $A_1B_1$ et $A_1C_1$ et la mesure de l'angle $\\widehat{B_1A_1C_1}$.
2. Que peut-on dire des droites $(BC)$ et $(B_1C_1)$ ? Justifier.
3. Quelle est la nature du quadrilatère $AA_1B_1B$ ? Justifier.
4. Inès dessine $10$ motifs, chacun obtenu à partir du précédent par la translation $t$. Chaque motif occupe une largeur de $3$ cm.
   a) De quelle distance le $6^\\text{e}$ motif est-il décalé par rapport au premier ?
   b) Quelle longueur de banderole occupent les $10$ motifs, du bord gauche du premier au bord droit du dernier ?`,
      solution: `**1.** Une translation conserve les longueurs et les mesures d'angles. Donc $A_1B_1 = AB = 3$ cm, $A_1C_1 = AC = 2{,}5$ cm et $\\widehat{B_1A_1C_1} = \\widehat{BAC} = 50^\\circ$.

**2.** L'image d'une droite par une translation est une droite parallèle : $(B_1C_1) \\parallel (BC)$.

**3.** La translation $t$ transforme $A$ en $A_1$ et $B$ en $B_1$, donc $AA_1B_1B$ est un **parallélogramme** (non aplati, car $B$ n'est pas sur la droite $(AA_1)$). On a d'ailleurs $BB_1 = AA_1 = 4$ cm.

**4. a)** Pour passer du $1^\\text{er}$ au $6^\\text{e}$ motif, on applique $5$ fois la translation $t$ : le décalage est de $5 \\times 4 = 20$ cm vers la droite.

**b)** Le $10^\\text{e}$ motif est décalé de $9 \\times 4 = 36$ cm par rapport au premier. Il faut ajouter la largeur du dernier motif : $36 + 3 = 39$ cm.
Les $10$ motifs occupent **$39$ cm** de banderole.`
    },
    {
      id: "4G3-ds-10",
      title: "Compléter un parallélogramme dans un repère",
      difficulty: 2,
      points: 5,
      statement: `Dans un repère, on considère les points $A(-1 ; 2)$, $B(3 ; 0)$ et $C(4 ; 3)$.
1. On note $t$ la translation qui transforme $B$ en $A$. Décrire le déplacement associé à $t$.
2. Calculer les coordonnées du point $D$, image de $C$ par la translation $t$.
3. Justifier que $ABCD$ est un parallélogramme.
4. Déterminer les coordonnées du point $E$ tel que $ABEC$ soit un parallélogramme. Expliquer la méthode.
5. Démontrer que $C$ est le milieu du segment $[DE]$.`,
      solution: `**1.** Pour aller de $B(3 ; 0)$ à $A(-1 ; 2)$, on se déplace de $-1 - 3 = -4$, soit $4$ unités **vers la gauche**, et de $2 - 0 = 2$ unités **vers le haut**.

**2.** On applique ce déplacement à $C$ : $D(4 - 4 ; 3 + 2) = D(0 ; 5)$.

**3.** La translation $t$ transforme $B$ en $A$ et $C$ en $D$, donc le quadrilatère $BADC$ est un parallélogramme. Ses côtés sont $[BA]$, $[AD]$, $[DC]$ et $[CB]$ : ce sont les côtés de $ABCD$. Donc **$ABCD$ est un parallélogramme** (non aplati, car $C$ n'est pas sur la droite $(AB)$).

**4.** $ABEC$ est un parallélogramme lorsque $E$ est l'image de $C$ par la translation qui transforme $A$ en $B$ (côtés opposés $[AB]$ et $[CE]$). Cette translation correspond à un déplacement de $4$ unités vers la droite et $2$ unités vers le bas.
Donc $E(4 + 4 ; 3 - 2) = E(8 ; 1)$.

**5.** Pour aller de $C$ à $D$, on se déplace de $4$ unités vers la gauche et $2$ vers le haut ; pour aller de $C$ à $E$, de $4$ unités vers la droite et $2$ vers le bas. Ces deux déplacements sont opposés : $D$, $C$, $E$ sont alignés et $CD = CE$.
Donc **$C$ est le milieu de $[DE]$**. (Vérification : $\\dfrac{0 + 8}{2} = 4$ et $\\dfrac{5 + 1}{2} = 3$.)`
    },
    {
      id: "4G3-ds-11",
      title: "Un triangle isocèle qui glisse",
      difficulty: 3,
      points: 5,
      statement: `$ABC$ est un triangle isocèle en $A$ tel que $AB = AC = 5$ cm et $BC = 6$ cm. On note $t$ la translation qui transforme $B$ en $C$. Elle transforme $A$ en $A'$ et $C$ en $C'$.
1. Quelle est la nature du triangle $A'CC'$ ? Justifier.
2. a) Démontrer que $ABCA'$ est un parallélogramme.
   b) En déduire les longueurs $AA'$ et $CA'$, puis la nature du triangle $ACA'$.
3. Justifier que les points $B$, $C$ et $C'$ sont alignés et calculer $BC'$.
4. On note $H$ le milieu de $[BC]$. On admet que $(AH)$ est perpendiculaire à $(BC)$.
   a) Calculer $AH$.
   b) Calculer l'aire du quadrilatère $ABC'A'$.`,
      solution: `**1.** Le triangle $A'CC'$ est l'image du triangle $ABC$ par la translation $t$ (car $t$ transforme $B$ en $C$). Une translation conserve les longueurs : $A'C = AB = 5$ cm, $A'C' = AC = 5$ cm et $CC' = BC = 6$ cm. Le triangle $A'CC'$ est donc **isocèle en $A'$**.

**2. a)** La translation $t$ transforme $B$ en $C$ et $A$ en $A'$, donc $BCA'A$ est un parallélogramme. Ses côtés $[BC]$, $[CA']$, $[A'A]$, $[AB]$ sont ceux de $ABCA'$ : **$ABCA'$ est un parallélogramme**.

**b)** Les côtés opposés d'un parallélogramme ont la même longueur : $AA' = BC = 6$ cm et $CA' = AB = 5$ cm.
Dans le triangle $ACA'$, on a $CA = 5$ cm et $CA' = 5$ cm : il est **isocèle en $C$**.

**3.** La translation $t$ transforme $B$ en $C$ et $C$ en $C'$ : elle fait glisser chaque point dans la direction de $(BC)$, du sens de $B$ vers $C$, d'une longueur $BC$. Donc $C'$ est sur la droite $(BC)$, au-delà de $C$, avec $CC' = BC = 6$ cm.
Ainsi $B$, $C$, $C'$ sont alignés et $BC' = 6 + 6 = 12$ cm.

**4. a)** $H$ est le milieu de $[BC]$, donc $BH = 3$ cm. Le triangle $ABH$ est rectangle en $H$ ; d'après le théorème de Pythagore :
$AH^2 = AB^2 - BH^2 = 25 - 9 = 16$, donc $AH = 4$ cm.

**b)** Le quadrilatère $ABC'A'$ est formé de trois triangles : $ABC$, $ACA'$ et $A'CC'$.
- Aire de $ABC$ : $\\dfrac{BC \\times AH}{2} = \\dfrac{6 \\times 4}{2} = 12$ cm².
- $A'CC'$ est l'image de $ABC$ par une translation, qui conserve les aires : $12$ cm².
- $ACA'$ a pour base $AA' = 6$ cm ; comme $(AA') \\parallel (BC)$, sa hauteur relative à $[AA']$ est la distance entre ces deux droites, soit $AH = 4$ cm. Aire : $\\dfrac{6 \\times 4}{2} = 12$ cm².

Aire de $ABC'A'$ : $12 + 12 + 12 = 36$ cm².`
    },
    {
      id: "4G3-ds-12",
      title: "Le pont sur le canal",
      difficulty: 4,
      points: 6,
      statement: `Dans un repère (unité : $100$ m), la maison de Noé est au point $A(0 ; 0)$ et son collège au point $B(6 ; 7)$. Entre les deux coule un canal : c'est la bande comprise entre la droite horizontale passant par le point $(0 ; 2)$ (rive sud) et la droite horizontale passant par le point $(0 ; 3)$ (rive nord).
La mairie veut construire un pont $[PQ]$ perpendiculaire aux rives, avec $P$ sur la rive sud et $Q$ sur la rive nord : $Q$ est donc l'image de $P$ par la translation de $1$ unité vers le haut. Noé va de $A$ à $P$ en ligne droite, traverse le pont, puis va de $Q$ à $B$ en ligne droite.
1. On place le pont en $P(0 ; 2)$ et $Q(0 ; 3)$. Calculer la longueur du trajet $A \\to P \\to Q \\to B$, arrondie au mètre.
2. On note $A'$ l'image de $A$ par la translation de $1$ unité vers le haut.
   a) Donner les coordonnées de $A'$.
   b) Démontrer que, quelle que soit la position du pont, $AP = A'Q$.
3. En déduire que la longueur du trajet est égale à $A'Q + QB + 1$, puis expliquer pourquoi elle est la plus courte possible lorsque $Q$ est sur le segment $[A'B]$.
4. On admet que les points $A'$, $Q(2 ; 3)$ et $B$ sont alignés. Calculer la longueur du trajet lorsque le pont relie $P(2 ; 2)$ à $Q(2 ; 3)$, arrondie au mètre, et la comparer à celle de la question 1.`,
      solution: `**1.** $AP = 2$ (segment vertical) et $PQ = 1$.
Pour $QB$ : de $Q(0 ; 3)$ à $B(6 ; 7)$, on se déplace de $6$ horizontalement et de $4$ verticalement. D'après le théorème de Pythagore, $QB^2 = 6^2 + 4^2 = 52$, donc $QB = \\sqrt{52} \\approx 7{,}211$.
Trajet : $2 + 1 + \\sqrt{52} \\approx 10{,}211$ unités, soit environ **$1\\,021$ m**.

**2. a)** $A'(0 ; 1)$.

**b)** La translation de $1$ unité vers le haut transforme $A$ en $A'$ et $P$ en $Q$. Donc $AA'QP$ est un parallélogramme (éventuellement aplati), et ses côtés opposés $[AP]$ et $[A'Q]$ ont la même longueur : $AP = A'Q$.

**3.** Le trajet mesure $AP + PQ + QB = A'Q + 1 + QB$.
Le pont mesure toujours $1$ unité ; il faut donc rendre $A'Q + QB$ le plus petit possible. D'après l'inégalité triangulaire, $A'Q + QB \\geqslant A'B$, avec égalité seulement lorsque $Q$ appartient au segment $[A'B]$. Le trajet est donc le plus court lorsque $Q$ est sur $[A'B]$.

**4.** $Q(2 ; 3)$ est sur $[A'B]$, donc $A'Q + QB = A'B$.
De $A'(0 ; 1)$ à $B(6 ; 7)$ : $6$ horizontalement et $6$ verticalement, donc $A'B^2 = 36 + 36 = 72$ et $A'B = \\sqrt{72} \\approx 8{,}485$.
Trajet : $\\sqrt{72} + 1 \\approx 9{,}485$ unités, soit environ **$949$ m**.
Vérification directe : $AP = \\sqrt{2^2 + 2^2} = \\sqrt{8} \\approx 2{,}828$ ; $PQ = 1$ ; $QB = \\sqrt{4^2 + 4^2} = \\sqrt{32} \\approx 5{,}657$ ; total $\\approx 9{,}485$.
Ce trajet est plus court d'environ $1\\,021 - 949 = 72$ m que celui de la question 1.`
    }
  ],
  "4G4": [
    {
      id: "4G4-ds-01",
      title: "Volumes d'une pyramide et d'un cône",
      difficulty: 1,
      points: 4,
      statement: `1. Une pyramide régulière a pour base un carré de $6$ cm de côté et pour hauteur $10$ cm.
   a) Donner son nombre de faces, d'arêtes et de sommets.
   b) Calculer son volume.
2. Un cône de révolution a pour rayon de base $3$ cm et pour hauteur $7$ cm. Calculer son volume : donner la valeur exacte, puis l'arrondi au cm³.`,
      solution: `**1. a)** Une pyramide à base carrée a $5$ faces (la base et $4$ faces latérales triangulaires), $8$ arêtes ($4$ autour de la base et $4$ latérales) et $5$ sommets.
**b)** $V = \\dfrac{1}{3} \\times \\mathcal{B} \\times h = \\dfrac{1}{3} \\times 6^2 \\times 10 = \\dfrac{360}{3} = 120$ cm³.

**2.** La base est un disque d'aire $\\pi \\times 3^2 = 9\\pi$ cm².
$V = \\dfrac{1}{3} \\times 9\\pi \\times 7 = 21\\pi$ cm³ (valeur exacte) $\\approx 66$ cm³.`
    },
    {
      id: "4G4-ds-02",
      title: "Pyramide et tétraèdre",
      difficulty: 1,
      points: 4,
      statement: `1. Une pyramide a pour base un rectangle de $5$ m sur $8$ m et pour hauteur $6$ m.
   a) Calculer son volume en m³.
   b) Convertir ce volume en litres.
2. Un tétraèdre $SABC$ a pour base le triangle $ABC$ rectangle en $A$, avec $AB = 3$ cm et $AC = 4$ cm. Sa hauteur issue de $S$ mesure $9$ cm.
   a) Calculer l'aire de la base.
   b) Calculer le volume du tétraèdre.`,
      solution: `**1. a)** Aire de la base : $5 \\times 8 = 40$ m². $V = \\dfrac{1}{3} \\times 40 \\times 6 = 80$ m³.
**b)** $1$ m³ $= 1\\,000$ L, donc $V = 80\\,000$ L.

**2. a)** Le triangle $ABC$ est rectangle en $A$ : $\\mathcal{B} = \\dfrac{AB \\times AC}{2} = \\dfrac{3 \\times 4}{2} = 6$ cm².
**b)** $V = \\dfrac{1}{3} \\times 6 \\times 9 = 18$ cm³.`
    },
    {
      id: "4G4-ds-03",
      title: "Le cornet de glace",
      difficulty: 2,
      points: 5,
      statement: `Un cornet de glace a la forme d'un cône de révolution de rayon $2{,}5$ cm et de hauteur $12$ cm. On le remplit de glace à ras bord.
1. Calculer le volume du cornet. Donner la valeur exacte, puis l'arrondi au dixième de cm³.
2. Un bac contient $1$ L de glace. Combien de cornets peut-on remplir entièrement ?
3. Calculer la longueur de la génératrice du cône (distance entre le sommet et un point du cercle de base), arrondie au millimètre.`,
      solution: `**1.** $V = \\dfrac{1}{3} \\times \\pi \\times 2{,}5^2 \\times 12 = \\dfrac{1}{3} \\times 6{,}25 \\times 12 \\times \\pi = 25\\pi$ cm³ $\\approx 78{,}5$ cm³.

**2.** $1$ L $= 1\\,000$ cm³. $1\\,000 \\div 25\\pi \\approx 12{,}7$. On peut remplir entièrement **$12$ cornets**.

**3.** Le sommet $S$, le centre $O$ de la base et un point $M$ du cercle de base forment un triangle $SOM$ rectangle en $O$ (la hauteur est perpendiculaire à la base). D'après le théorème de Pythagore :
$SM^2 = SO^2 + OM^2 = 144 + 6{,}25 = 150{,}25$, donc $SM = \\sqrt{150{,}25} \\approx 12{,}3$ cm.`
    },
    {
      id: "4G4-ds-04",
      title: "Verre conique ou verre cylindrique ?",
      difficulty: 2,
      points: 5,
      statement: `Un verre a la forme d'un cône de révolution (pointe en bas) de rayon $4$ cm et de profondeur $9$ cm. Une carafe a la forme d'un cylindre de même rayon et de même hauteur.
1. Calculer le volume du verre, en valeur exacte puis arrondi au cm³.
2. Calculer le volume de la carafe, en valeur exacte puis arrondi au cm³.
3. Combien de verres pleins faut-il pour remplir la carafe ? Justifier sans utiliser les arrondis.
4. Le verre peut-il contenir $20$ cL ? Justifier.`,
      solution: `**1.** $V_{\\text{verre}} = \\dfrac{1}{3} \\times \\pi \\times 4^2 \\times 9 = 48\\pi$ cm³ $\\approx 151$ cm³.

**2.** $V_{\\text{carafe}} = \\pi \\times 4^2 \\times 9 = 144\\pi$ cm³ $\\approx 452$ cm³.

**3.** $\\dfrac{144\\pi}{48\\pi} = 3$ : il faut exactement **$3$ verres**. (Un cône a un volume égal au tiers de celui du cylindre de même base et de même hauteur.)

**4.** $20$ cL $= 200$ cm³. Comme $151 < 200$, **le verre ne peut pas contenir $20$ cL**.`
    },
    {
      id: "4G4-ds-05",
      title: "La pyramide de verre",
      difficulty: 3,
      points: 5,
      statement: `Une pyramide de verre, régulière, a pour base un carré de $35$ m de côté et pour hauteur $21$ m. On note $S$ son sommet, $O$ le centre de la base et $I$ le milieu d'un côté de la base.
1. Calculer le volume de cette pyramide.
2. Justifier que $OI = 17{,}5$ m, puis que le triangle $SOI$ est rectangle en $O$.
3. Calculer $SI$, la hauteur d'une face latérale, arrondie au centimètre.
4. Calculer l'aire totale des quatre faces vitrées, arrondie au m².`,
      solution: `**1.** $V = \\dfrac{1}{3} \\times 35^2 \\times 21 = \\dfrac{1}{3} \\times 1\\,225 \\times 21 = 8\\,575$ m³.

**2.** $O$ est le centre du carré, à égale distance de deux côtés opposés : $OI = \\dfrac{35}{2} = 17{,}5$ m. La hauteur $[SO]$ est perpendiculaire au plan de la base, donc à la droite $(OI)$ : le triangle $SOI$ est rectangle en $O$.

**3.** D'après le théorème de Pythagore : $SI^2 = SO^2 + OI^2 = 441 + 306{,}25 = 747{,}25$, donc $SI = \\sqrt{747{,}25} \\approx 27{,}34$ m.

**4.** Chaque face est un triangle isocèle de base $35$ m et de hauteur $SI$ (car $I$ est le milieu de la base de la face). Aire des quatre faces :
$4 \\times \\dfrac{35 \\times \\sqrt{747{,}25}}{2} = 70 \\times \\sqrt{747{,}25} \\approx 1\\,914$ m².`
    },
    {
      id: "4G4-ds-06",
      title: "Patron d'un cône",
      difficulty: 3,
      points: 5,
      statement: `Un cône de révolution a pour rayon de base $r = 3$ cm et pour hauteur $h = 4$ cm.
1. Calculer la longueur $g$ de sa génératrice.
2. Calculer le volume du cône, en valeur exacte puis arrondi au dixième de cm³.
3. Le patron de la surface latérale est une portion de disque de rayon $g$. La longueur de son arc est égale au périmètre de la base du cône.
   a) Calculer le périmètre de la base et le périmètre du disque complet de rayon $g$.
   b) Par proportionnalité, en déduire la mesure de l'angle de cette portion de disque.
4. Calculer l'aire de la surface latérale du cône (valeur exacte).`,
      solution: `**1.** Le sommet, le centre de la base et un point du cercle de base forment un triangle rectangle. D'après le théorème de Pythagore : $g^2 = 3^2 + 4^2 = 25$, donc $g = 5$ cm.

**2.** $V = \\dfrac{1}{3} \\times \\pi \\times 3^2 \\times 4 = 12\\pi$ cm³ $\\approx 37{,}7$ cm³.

**3. a)** Périmètre de la base : $2\\pi \\times 3 = 6\\pi$ cm. Périmètre du disque de rayon $5$ : $2\\pi \\times 5 = 10\\pi$ cm.
**b)** Un angle de $360^\\circ$ correspond à un arc de $10\\pi$ cm ; l'angle est proportionnel à la longueur de l'arc. Angle cherché : $360 \\times \\dfrac{6\\pi}{10\\pi} = 216^\\circ$.

**4.** L'aire de la portion de disque est elle aussi proportionnelle à l'angle : $\\pi \\times 5^2 \\times \\dfrac{216}{360} = 25\\pi \\times 0{,}6 = 15\\pi$ cm².`
    },
    {
      id: "4G4-ds-07",
      title: "Couper une pyramide",
      difficulty: 4,
      points: 5,
      statement: `On reprend une pyramide $SABCD$ de base carrée de $6$ cm de côté et de hauteur $10$ cm (volume $120$ cm³). On la coupe par un plan parallèle à la base, passant par le milieu de la hauteur. On obtient une petite pyramide (au-dessus) et un tronc de pyramide (en dessous).
1. La petite pyramide est une réduction de la grande. Quel est le coefficient de réduction $k$ ? Justifier.
2. En déduire la longueur du côté de la base de la petite pyramide.
3. Calculer le volume de la petite pyramide de deux façons : avec la formule, puis avec le coefficient $k$.
4. Calculer le volume du tronc de pyramide. Quelle fraction du volume total représente-t-il ?`,
      solution: `**1.** La hauteur de la petite pyramide vaut $\\dfrac{10}{2} = 5$ cm. Le coefficient de réduction est $k = \\dfrac{5}{10} = \\dfrac{1}{2}$.

**2.** Toutes les longueurs sont multipliées par $k$ : côté de la base $6 \\times \\dfrac{1}{2} = 3$ cm.

**3.** Avec la formule : $V = \\dfrac{1}{3} \\times 3^2 \\times 5 = 15$ cm³.
Avec le coefficient : dans une réduction de rapport $k$, les volumes sont multipliés par $k^3$ : $120 \\times \\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{120}{8} = 15$ cm³.

**4.** Tronc : $120 - 15 = 105$ cm³, soit $\\dfrac{105}{120} = \\dfrac{7}{8}$ du volume total.`
    },
    {
      id: "4G4-ds-08",
      title: "Le silo à grain",
      difficulty: 4,
      points: 6,
      statement: `Un silo est formé d'un cylindre de rayon $3$ m et de hauteur $8$ m, posé sur un cône de révolution de même rayon et de hauteur $2$ m (pointe en bas).
1. Calculer le volume du cylindre et celui du cône, en valeur exacte.
2. Montrer que le volume total du silo est $78\\pi$ m³, puis en donner l'arrondi au m³.
3. Le silo est rempli à $80\\,\\%$ de blé. Un mètre cube de blé a une masse de $0{,}75$ tonne. Calculer la masse de blé contenue dans le silo, arrondie à la tonne.
4. On vide le silo avec des camions pouvant transporter chacun au plus $25$ tonnes. Combien de camions faut-il au minimum ?`,
      solution: `**1.** Cylindre : $\\pi \\times 3^2 \\times 8 = 72\\pi$ m³. Cône : $\\dfrac{1}{3} \\times \\pi \\times 3^2 \\times 2 = 6\\pi$ m³.

**2.** $V = 72\\pi + 6\\pi = 78\\pi$ m³ $\\approx 245$ m³.

**3.** Volume de blé : $0{,}8 \\times 78\\pi \\approx 196{,}0$ m³. Masse : $0{,}75 \\times 0{,}8 \\times 78\\pi = 46{,}8\\pi \\approx 147$ tonnes.

**4.** $46{,}8\\pi \\div 25 \\approx 5{,}9$. Cinq camions ne suffisent pas ($5 \\times 25 = 125 < 147$) : il faut **$6$ camions**.`
    },
    {
      id: "4G4-ds-09",
      title: "Le tas de sable et la tente",
      difficulty: 1,
      points: 4,
      statement: `1. Sur un chantier, un tas de sable a la forme d'un cône de révolution de $4$ m de diamètre et de $1{,}5$ m de hauteur.
   a) Calculer le volume exact du tas de sable, puis son arrondi au dm³.
   b) Un ouvrier transporte le sable avec une brouette de $80$ L. Combien de voyages devra-t-il faire au minimum ?
2. Une tente a la forme d'une pyramide régulière à base carrée de $2{,}4$ m de côté et de $1{,}8$ m de hauteur. Calculer le volume d'air contenu dans la tente.`,
      solution: `**1. a)** Le rayon de la base vaut $4 \\div 2 = 2$ m. Aire de la base : $\\pi \\times 2^2 = 4\\pi$ m².
$V = \\dfrac{1}{3} \\times 4\\pi \\times 1{,}5 = 2\\pi$ m³ (valeur exacte) $\\approx 6{,}283$ m³.

**b)** $6{,}283$ m³ $= 6\\,283$ dm³ $= 6\\,283$ L. Et $6\\,283 \\div 80 \\approx 78{,}5$.
$78$ voyages ne suffisent pas ($78 \\times 80 = 6\\,240$ L $< 6\\,283$ L) : il faut **$79$ voyages** au minimum.

**2.** Aire de la base : $2{,}4^2 = 5{,}76$ m².
$V = \\dfrac{1}{3} \\times 5{,}76 \\times 1{,}8 = 3{,}456$ m³, soit $3\\,456$ L d'air.`
    },
    {
      id: "4G4-ds-10",
      title: "Retrouver une dimension",
      difficulty: 2,
      points: 5,
      statement: `1. Un cône de révolution a pour rayon de base $5$ cm et pour volume $100\\pi$ cm³.
   a) Calculer sa hauteur.
   b) Calculer la longueur d'une génératrice (segment qui joint le sommet du cône à un point du cercle de base).
2. Une pyramide à base carrée a pour hauteur $9$ cm et pour volume $75$ cm³. Calculer la longueur du côté de sa base.
3. Un cône de révolution a pour hauteur $6$ cm et pour volume $50\\pi$ cm³. Calculer le rayon de sa base.`,
      solution: `**1. a)** Aire de la base : $\\pi \\times 5^2 = 25\\pi$ cm². On cherche $h$ tel que $\\dfrac{1}{3} \\times 25\\pi \\times h = 100\\pi$.
Donc $25\\pi \\times h = 300\\pi$, d'où $h = \\dfrac{300\\pi}{25\\pi} = 12$ cm.

**b)** Le sommet $S$, le centre $O$ de la base et un point $M$ du cercle de base forment un triangle $SOM$ rectangle en $O$, avec $SO = 12$ cm et $OM = 5$ cm. D'après le théorème de Pythagore :
$SM^2 = 12^2 + 5^2 = 144 + 25 = 169$, donc $SM = 13$ cm.

**2.** On note $\\mathcal{B}$ l'aire de la base : $\\dfrac{1}{3} \\times \\mathcal{B} \\times 9 = 75$, donc $3 \\times \\mathcal{B} = 75$ et $\\mathcal{B} = 25$ cm².
La base est un carré d'aire $25$ cm² : son côté mesure $\\sqrt{25} = 5$ cm.

**3.** On note $r$ le rayon : $\\dfrac{1}{3} \\times \\pi r^2 \\times 6 = 50\\pi$, donc $2\\pi r^2 = 50\\pi$ et $r^2 = 25$.
Comme $r$ est une longueur, $r = 5$ cm.`
    },
    {
      id: "4G4-ds-11",
      title: "La bougie",
      difficulty: 3,
      points: 5,
      statement: `Une bougie est formée d'un cylindre de révolution de rayon $3$ cm et de hauteur $10$ cm, surmonté d'un cône de révolution de même rayon et de hauteur $4$ cm.
1. Quelle est la hauteur totale de la bougie ?
2. Calculer la longueur d'une génératrice du cône.
3. Montrer que le volume de la bougie est égal à $102\\pi$ cm³, puis en donner l'arrondi au cm³.
4. La cire utilisée a une masse de $0{,}9$ g par cm³. Calculer la masse d'une bougie, arrondie au gramme.
5. Combien de bougies complètes peut-on fabriquer avec un bloc de $5$ kg de cire ?`,
      solution: `**1.** $10 + 4 = 14$ cm.

**2.** Le sommet du cône, le centre de sa base et un point du cercle de base forment un triangle rectangle dont les côtés de l'angle droit mesurent $4$ cm et $3$ cm. D'après le théorème de Pythagore, la génératrice $g$ vérifie $g^2 = 4^2 + 3^2 = 25$, donc $g = 5$ cm.

**3.** Aire de la base commune : $\\pi \\times 3^2 = 9\\pi$ cm².
- Volume du cylindre : $9\\pi \\times 10 = 90\\pi$ cm³.
- Volume du cône : $\\dfrac{1}{3} \\times 9\\pi \\times 4 = 12\\pi$ cm³.

Volume de la bougie : $90\\pi + 12\\pi = 102\\pi$ cm³ $\\approx 320$ cm³.

**4.** $0{,}9 \\times 102\\pi \\approx 288{,}4$ : une bougie pèse environ **$288$ g**.

**5.** $5$ kg $= 5\\,000$ g et $5\\,000 \\div 288{,}4 \\approx 17{,}3$.
On peut fabriquer **$17$ bougies** complètes ($17 \\times 288{,}4 \\approx 4\\,903$ g $\\leqslant 5\\,000$ g, alors que $18$ bougies demanderaient environ $5\\,191$ g).`
    },
    {
      id: "4G4-ds-12",
      title: "Des pyramides dans un cube",
      difficulty: 4,
      points: 6,
      statement: `$ABCDEFGH$ est un cube d'arête $6$ cm ; sa face du bas est le carré $ABCD$ et sa face du haut est le carré $EFGH$ (avec $E$ au-dessus de $A$, $F$ au-dessus de $B$, etc.).
1. Calculer le volume du cube.
2. On note $S$ le centre de la face $EFGH$. Calculer le volume de la pyramide $SABCD$. Quelle fraction du volume du cube représente-t-il ?
3. On note $K$ le centre du cube (point d'intersection de ses grandes diagonales).
   a) Calculer le volume de la pyramide $KABCD$.
   b) Expliquer pourquoi le cube peut être découpé en $6$ pyramides identiques à $KABCD$, et vérifier la cohérence avec les volumes trouvés.
4. On note $O$ le centre du carré $ABCD$ ; le segment $[SO]$ est la hauteur de la pyramide $SABCD$.
   a) Calculer $AC^2$, puis $OA^2$.
   b) En déduire la longueur de l'arête latérale $SA$, arrondie au millimètre.`,
      solution: `**1.** $V_{\\text{cube}} = 6^3 = 216$ cm³.

**2.** La base $ABCD$ a pour aire $6^2 = 36$ cm² et la hauteur est la distance entre les faces du bas et du haut : $6$ cm.
$V = \\dfrac{1}{3} \\times 36 \\times 6 = 72$ cm³. Or $\\dfrac{72}{216} = \\dfrac{1}{3}$ : la pyramide occupe **le tiers** du cube.

**3. a)** $K$ est au milieu du cube, à $3$ cm de la face $ABCD$. $V = \\dfrac{1}{3} \\times 36 \\times 3 = 36$ cm³.

**b)** Le cube a $6$ faces carrées identiques et $K$ est à la même distance ($3$ cm) de chacune. En joignant $K$ aux sommets du cube, on découpe le cube en $6$ pyramides de sommet $K$, ayant chacune pour base une face du cube : elles sont identiques à $KABCD$.
Vérification : $6 \\times 36 = 216$ cm³, c'est bien le volume du cube.

**4. a)** Le triangle $ABC$ est rectangle en $B$ ; d'après le théorème de Pythagore, $AC^2 = 6^2 + 6^2 = 72$.
$O$ est le milieu de la diagonale $[AC]$, donc $OA = \\dfrac{AC}{2}$ et $OA^2 = \\dfrac{AC^2}{4} = \\dfrac{72}{4} = 18$.

**b)** Le triangle $SOA$ est rectangle en $O$ (la hauteur $[SO]$ est perpendiculaire à la base), avec $SO = 6$ cm. D'après le théorème de Pythagore :
$SA^2 = SO^2 + OA^2 = 36 + 18 = 54$, donc $SA = \\sqrt{54} \\approx 7{,}348$ cm, soit environ $7{,}3$ cm au millimètre près.`
    }
  ],
  "4D1": [
    {
      id: "4D1-ds-01",
      title: "Les notes de Yanis",
      difficulty: 1,
      points: 4,
      statement: `Voici les notes obtenues par Yanis aux sept évaluations du trimestre :
$$12 \\quad 8 \\quad 15 \\quad 10 \\quad 17 \\quad 9 \\quad 14$$
1. Calculer la moyenne de Yanis, arrondie au centième.
2. Déterminer la médiane de cette série. Interpréter le résultat par une phrase.
3. Calculer l'étendue de cette série.
4. Yanis obtient $20$ à une huitième évaluation. Sa médiane change-t-elle ? Justifier.`,
      solution: `**1.** Somme des notes : $12 + 8 + 15 + 10 + 17 + 9 + 14 = 85$. Moyenne : $\\dfrac{85}{7} \\approx 12{,}14$.

**2.** On range les notes dans l'ordre croissant : $8 \\;;\\; 9 \\;;\\; 10 \\;;\\; 12 \\;;\\; 14 \\;;\\; 15 \\;;\\; 17$.
L'effectif est $7$ (impair) : la médiane est la $4^\\text{e}$ valeur, soit **$12$**. Au moins la moitié des notes de Yanis sont inférieures ou égales à $12$, et au moins la moitié sont supérieures ou égales à $12$.

**3.** Étendue : $17 - 8 = 9$ points.

**4.** Série rangée : $8 \\;;\\; 9 \\;;\\; 10 \\;;\\; 12 \\;;\\; 14 \\;;\\; 15 \\;;\\; 17 \\;;\\; 20$. L'effectif est $8$ (pair) : la médiane est la moyenne des $4^\\text{e}$ et $5^\\text{e}$ valeurs : $\\dfrac{12 + 14}{2} = 13$. **La médiane change** : elle passe à $13$.`
    },
    {
      id: "4D1-ds-02",
      title: "Moyenne avec coefficients",
      difficulty: 1,
      points: 4,
      statement: `Au deuxième trimestre, Emma a obtenu les notes suivantes en mathématiques :

| Note | $14$ | $11$ | $9$ | $17$ |
|---|---|---|---|---|
| Coefficient | $2$ | $1$ | $2$ | $3$ |

1. Calculer la moyenne pondérée d'Emma.
2. Calculer la moyenne des quatre notes sans tenir compte des coefficients.
3. Expliquer pourquoi les deux moyennes sont différentes.`,
      solution: `**1.** On multiplie chaque note par son coefficient, puis on divise par la somme des coefficients :
$$\\frac{14 \\times 2 + 11 \\times 1 + 9 \\times 2 + 17 \\times 3}{2 + 1 + 2 + 3} = \\frac{28 + 11 + 18 + 51}{8} = \\frac{108}{8} = 13{,}5.$$
La moyenne d'Emma est $13{,}5$.

**2.** $\\dfrac{14 + 11 + 9 + 17}{4} = \\dfrac{51}{4} = 12{,}75$.

**3.** Avec les coefficients, la note de $17$ compte trois fois : elle pèse davantage dans le calcul. Comme c'est la meilleure note, la moyenne pondérée est plus élevée que la moyenne simple.`
    },
    {
      id: "4D1-ds-03",
      title: "Les pointures d'une classe",
      difficulty: 2,
      points: 5,
      statement: `On a relevé la pointure des $25$ élèves d'une classe :

| Pointure | $36$ | $37$ | $38$ | $39$ | $40$ | $41$ |
|---|---|---|---|---|---|---|
| Effectif | $2$ | $5$ | $7$ | $6$ | $3$ | $2$ |

1. Calculer la pointure moyenne de la classe.
2. Déterminer la pointure médiane. Justifier.
3. Calculer l'étendue de la série.
4. Quel pourcentage des élèves chaussent du $39$ ou plus ?`,
      solution: `**1.** Moyenne pondérée par les effectifs :
$$\\frac{36 \\times 2 + 37 \\times 5 + 38 \\times 7 + 39 \\times 6 + 40 \\times 3 + 41 \\times 2}{25} = \\frac{72 + 185 + 266 + 234 + 120 + 82}{25} = \\frac{959}{25} = 38{,}36.$$

**2.** L'effectif total est $25$ (impair) : la médiane est la $13^\\text{e}$ valeur de la série rangée. Effectifs cumulés : $2$ ; $7$ ; $14$ ; … La $13^\\text{e}$ valeur est donc $38$ (les valeurs de rang $8$ à $14$ valent $38$). La médiane est **$38$**.

**3.** Étendue : $41 - 36 = 5$.

**4.** $6 + 3 + 2 = 11$ élèves, soit $\\dfrac{11}{25} = 0{,}44 = 44\\,\\%$ des élèves.`
    },
    {
      id: "4D1-ds-04",
      title: "Deux nageurs à comparer",
      difficulty: 2,
      points: 5,
      statement: `L'entraîneur d'un club relève, en secondes, les temps de deux nageurs sur $50$ m lors de cinq courses :
- Alex : $31$ ; $34$ ; $29$ ; $33$ ; $33$
- Bao : $30$ ; $38$ ; $28$ ; $36$ ; $28$

1. Calculer le temps moyen de chaque nageur.
2. Calculer le temps médian de chaque nageur.
3. Calculer l'étendue des temps de chaque nageur.
4. L'entraîneur veut sélectionner le nageur le plus régulier. Lequel doit-il choisir ? Justifier.`,
      solution: `**1.** Alex : $\\dfrac{31 + 34 + 29 + 33 + 33}{5} = \\dfrac{160}{5} = 32$ s. Bao : $\\dfrac{30 + 38 + 28 + 36 + 28}{5} = \\dfrac{160}{5} = 32$ s.

**2.** Séries rangées (effectif $5$, médiane = $3^\\text{e}$ valeur) :
- Alex : $29 \\;;\\; 31 \\;;\\; 33 \\;;\\; 33 \\;;\\; 34$ → médiane $33$ s ;
- Bao : $28 \\;;\\; 28 \\;;\\; 30 \\;;\\; 36 \\;;\\; 38$ → médiane $30$ s.

**3.** Alex : $34 - 29 = 5$ s. Bao : $38 - 28 = 10$ s.

**4.** Les moyennes sont égales, mais l'étendue des temps d'Alex est deux fois plus petite : ses temps sont moins dispersés. L'entraîneur doit choisir **Alex**, le plus régulier. (Bao réussit de meilleurs temps plus souvent, comme le montre sa médiane, mais il est irrégulier.)`
    },
    {
      id: "4D1-ds-05",
      title: "La note manquante",
      difficulty: 3,
      points: 5,
      statement: `Les six notes d'un élève sont : $11$ ; $15$ ; $8$ ; $x$ ; $13$ ; $9$. On sait que sa moyenne est égale à $11{,}5$.
1. Calculer la somme des six notes.
2. En déduire la note $x$.
3. Déterminer la médiane et l'étendue de cette série.
4. Quelle note l'élève doit-il obtenir à un septième devoir pour que sa moyenne soit exactement égale à $12$ ?`,
      solution: `**1.** La moyenne est la somme divisée par l'effectif, donc la somme vaut $11{,}5 \\times 6 = 69$.

**2.** $11 + 15 + 8 + 13 + 9 = 56$, donc $x = 69 - 56 = 13$.

**3.** Série rangée : $8 \\;;\\; 9 \\;;\\; 11 \\;;\\; 13 \\;;\\; 13 \\;;\\; 15$. L'effectif est pair ($6$) : médiane $= \\dfrac{11 + 13}{2} = 12$. Étendue : $15 - 8 = 7$.

**4.** Pour avoir $12$ de moyenne sur $7$ notes, la somme doit valoir $12 \\times 7 = 84$. Il faut donc obtenir $84 - 69 = 15$.`
    },
    {
      id: "4D1-ds-06",
      title: "Temps de trajet regroupés en classes",
      difficulty: 3,
      points: 5,
      statement: `On a demandé aux $30$ élèves d'une classe la durée de leur trajet domicile–collège, en minutes :

| Durée (min) | $[0 ; 10[$ | $[10 ; 20[$ | $[20 ; 30[$ | $[30 ; 40[$ |
|---|---|---|---|---|
| Effectif | $8$ | $12$ | $6$ | $4$ |

1. Quel pourcentage des élèves mettent moins de $20$ minutes ? Arrondir à l'unité.
2. En remplaçant chaque classe par son centre, calculer une valeur approchée de la durée moyenne du trajet.
3. Dans quelle classe se trouve la médiane ? Justifier.
4. Peut-on calculer l'étendue exacte de cette série ? Justifier.`,
      solution: `**1.** $8 + 12 = 20$ élèves sur $30$ : $\\dfrac{20}{30} \\approx 0{,}67$, soit environ $67\\,\\%$.

**2.** Centres des classes : $5$ ; $15$ ; $25$ ; $35$.
$$\\frac{5 \\times 8 + 15 \\times 12 + 25 \\times 6 + 35 \\times 4}{30} = \\frac{40 + 180 + 150 + 140}{30} = \\frac{510}{30} = 17.$$
La durée moyenne est d'environ $17$ minutes.

**3.** L'effectif est $30$ : la médiane est la moyenne des $15^\\text{e}$ et $16^\\text{e}$ valeurs. Les $8$ premières valeurs sont dans $[0 ; 10[$, les valeurs de rang $9$ à $20$ dans $[10 ; 20[$. La médiane est donc dans la classe **$[10 ; 20[$**.

**4.** Non : on ne connaît pas les valeurs exactes, seulement les classes. On sait seulement que l'étendue est inférieure à $40$ min.`
    },
    {
      id: "4D1-ds-07",
      title: "Objectif moyenne",
      difficulty: 4,
      points: 5,
      statement: `Léo a obtenu quatre notes de coefficient $1$ : $12$ ; $9$ ; $14$ ; $11$. Il lui reste un devoir de coefficient $2$.
1. Calculer la moyenne actuelle de Léo.
2. On note $x$ la note qu'il obtiendra au dernier devoir. Montrer que sa moyenne finale est $\\dfrac{46 + 2x}{6}$.
3. Quelle note doit-il obtenir pour avoir exactement $12$ de moyenne ?
4. Léo peut-il obtenir $15$ de moyenne ? Justifier.`,
      solution: `**1.** $\\dfrac{12 + 9 + 14 + 11}{4} = \\dfrac{46}{4} = 11{,}5$.

**2.** La somme des notes pondérées est $46 + 2x$ et la somme des coefficients est $4 + 2 = 6$ : la moyenne finale vaut $\\dfrac{46 + 2x}{6}$.

**3.** $\\dfrac{46 + 2x}{6} = 12$ donne $46 + 2x = 72$, donc $2x = 26$ et $x = 13$. Il doit obtenir **$13$**.

**4.** $\\dfrac{46 + 2x}{6} = 15$ donne $46 + 2x = 90$, donc $x = 22$. Une note est au plus égale à $20$ : **c'est impossible**. (Même avec $20$, sa moyenne serait $\\dfrac{86}{6} \\approx 14{,}33$.)`
    },
    {
      id: "4D1-ds-08",
      title: "Les salaires d'une entreprise",
      difficulty: 4,
      points: 6,
      statement: `Les salaires mensuels nets (en euros) des neuf personnes d'une petite entreprise sont :
$$1\\,500 \\;;\\; 1\\,600 \\;;\\; 1\\,600 \\;;\\; 1\\,700 \\;;\\; 1\\,800 \\;;\\; 1\\,900 \\;;\\; 2\\,000 \\;;\\; 2\\,100 \\;;\\; 6\\,800$$
1. Calculer le salaire moyen, arrondi à l'euro.
2. Déterminer le salaire médian.
3. Combien de personnes gagnent plus que le salaire moyen ? Lequel des deux indicateurs représente le mieux le salaire « habituel » dans cette entreprise ? Justifier.
4. Le salaire le plus élevé passe à $9\\,500$ €. Recalculer la moyenne et la médiane. Commenter.`,
      solution: `**1.** Somme : $1\\,500 + 1\\,600 + 1\\,600 + 1\\,700 + 1\\,800 + 1\\,900 + 2\\,000 + 2\\,100 + 6\\,800 = 21\\,000$ €.
Moyenne : $\\dfrac{21\\,000}{9} \\approx 2\\,333$ €.

**2.** La série est rangée et l'effectif est $9$ (impair) : la médiane est la $5^\\text{e}$ valeur, **$1\\,800$ €**.

**3.** Seule la personne qui gagne $6\\,800$ € dépasse la moyenne : **une seule personne**. La moyenne est tirée vers le haut par une valeur très éloignée des autres ; la **médiane** représente mieux le salaire habituel.

**4.** Nouvelle somme : $21\\,000 + 2\\,700 = 23\\,700$ €, nouvelle moyenne $\\dfrac{23\\,700}{9} \\approx 2\\,633$ €. La médiane ne change pas ($1\\,800$ €), car la $5^\\text{e}$ valeur est inchangée.
La moyenne est sensible aux valeurs extrêmes, la médiane ne l'est pas.`
    },
    {
      id: "4D1-ds-09",
      title: "Les précipitations d'une année",
      difficulty: 1,
      points: 4,
      statement: `Voici les hauteurs de pluie (en mm) relevées chaque mois dans une ville pendant une année :

| Mois | J | F | M | A | M | J | J | A | S | O | N | D |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pluie (mm) | $62$ | $48$ | $55$ | $70$ | $81$ | $43$ | $18$ | $25$ | $54$ | $89$ | $96$ | $71$ |

1. Calculer la hauteur totale de pluie tombée dans l'année.
2. Calculer la hauteur moyenne mensuelle, arrondie au dixième.
3. Déterminer la médiane de cette série. Interpréter le résultat.
4. Calculer l'étendue de la série.
5. Combien de mois ont reçu une hauteur de pluie supérieure à la moyenne ?`,
      solution: `**1.** $62 + 48 + 55 + 70 + 81 + 43 + 18 + 25 + 54 + 89 + 96 + 71 = 712$ mm.

**2.** Moyenne : $\\dfrac{712}{12} \\approx 59{,}3$ mm.

**3.** On range les $12$ valeurs dans l'ordre croissant :
$18 ; 25 ; 43 ; 48 ; 54 ; 55 ; 62 ; 70 ; 71 ; 81 ; 89 ; 96$.
L'effectif est pair : la médiane est la moyenne des $6^\\text{e}$ et $7^\\text{e}$ valeurs, $\\dfrac{55 + 62}{2} = 58{,}5$ mm.
Interprétation : pendant la moitié des mois, il est tombé au plus $58{,}5$ mm de pluie ; pendant l'autre moitié, au moins $58{,}5$ mm.

**4.** Étendue : $96 - 18 = 78$ mm.

**5.** Les valeurs supérieures à $59{,}3$ sont $62$, $70$, $71$, $81$, $89$ et $96$ : **$6$ mois**.`
    },
    {
      id: "4D1-ds-10",
      title: "Le temps d'écran",
      difficulty: 2,
      points: 5,
      statement: `On a demandé aux $25$ élèves d'une classe combien d'heures ils passent devant un écran, en dehors du travail scolaire, un jour de semaine (arrondi à l'heure). Voici les résultats :

| Nombre d'heures | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| Effectif | $2$ | $5$ | $8$ | $6$ | $3$ | $1$ |

1. Vérifier que $25$ élèves ont répondu.
2. Calculer le temps d'écran moyen par élève.
3. Déterminer la médiane de cette série. Justifier.
4. Calculer l'étendue.
5. Quel pourcentage des élèves passe au moins $3$ heures devant un écran ?`,
      solution: `**1.** $2 + 5 + 8 + 6 + 3 + 1 = 25$.

**2.** On calcule une moyenne pondérée par les effectifs :
$\\dfrac{0 \\times 2 + 1 \\times 5 + 2 \\times 8 + 3 \\times 6 + 4 \\times 3 + 5 \\times 1}{25} = \\dfrac{0 + 5 + 16 + 18 + 12 + 5}{25} = \\dfrac{56}{25} = 2{,}24$ h.
Le temps d'écran moyen est de $2{,}24$ h, soit environ $2$ h $14$ min ($0{,}24 \\times 60 = 14{,}4$).

**3.** L'effectif est impair ($25$) : la médiane est la $13^\\text{e}$ valeur de la série rangée dans l'ordre croissant.
Effectifs cumulés : $2$ élèves à $0$ h ; $2 + 5 = 7$ jusqu'à $1$ h ; $7 + 8 = 15$ jusqu'à $2$ h. La $13^\\text{e}$ valeur est donc $2$.
La médiane est **$2$ heures** : au moins la moitié des élèves passe au plus $2$ h devant un écran.

**4.** Étendue : $5 - 0 = 5$ h.

**5.** Au moins $3$ heures : $6 + 3 + 1 = 10$ élèves. $\\dfrac{10}{25} = 0{,}4$, soit **$40$ %** des élèves.`
    },
    {
      id: "4D1-ds-11",
      title: "Les deux groupes du club d'athlétisme",
      difficulty: 3,
      points: 5,
      statement: `Dans un club d'athlétisme, on mesure la performance de chaque sauteur en longueur.
- Le groupe A compte $12$ sauteurs ; leur moyenne est de $4{,}20$ m.
- Le groupe B compte $8$ sauteurs ; leur moyenne est de $3{,}70$ m.
1. Calculer la somme des performances du groupe A, puis celle du groupe B.
2. Calculer la moyenne des $20$ sauteurs du club.
3. Lucas affirme : « La moyenne du club est $\\dfrac{4{,}20 + 3{,}70}{2} = 3{,}95$ m. » Expliquer son erreur.
4. Un sauteur du groupe B, dont la performance est de $3{,}10$ m, quitte le club.
   a) Calculer la nouvelle moyenne du groupe B, arrondie au centimètre.
   b) Calculer la nouvelle moyenne du club, arrondie au centimètre. Pourquoi était-il prévisible qu'elle augmente ?`,
      solution: `**1.** La somme des valeurs est égale à la moyenne multipliée par l'effectif.
Groupe A : $12 \\times 4{,}20 = 50{,}4$ m. Groupe B : $8 \\times 3{,}70 = 29{,}6$ m.

**2.** Moyenne du club : $\\dfrac{50{,}4 + 29{,}6}{20} = \\dfrac{80}{20} = 4$ m.

**3.** Lucas fait la moyenne des deux moyennes comme si les deux groupes avaient le même effectif. Or le groupe A ($12$ sauteurs) est plus nombreux que le groupe B ($8$ sauteurs) : il faut pondérer chaque moyenne par l'effectif du groupe. La bonne moyenne, $4$ m, est plus proche de celle du groupe A.

**4. a)** Il reste $7$ sauteurs dans le groupe B : $\\dfrac{29{,}6 - 3{,}10}{7} = \\dfrac{26{,}5}{7} \\approx 3{,}79$ m.

**b)** Il reste $19$ sauteurs dans le club : $\\dfrac{80 - 3{,}10}{19} = \\dfrac{76{,}9}{19} \\approx 4{,}05$ m.
C'était prévisible : le sauteur qui part a une performance ($3{,}10$ m) inférieure à la moyenne du club ($4$ m) ; en le retirant, on enlève une valeur qui « tirait la moyenne vers le bas ».`
    },
    {
      id: "4D1-ds-12",
      title: "Construire une série de notes",
      difficulty: 4,
      points: 6,
      statement: `Un professeur a rendu $5$ notes entières (sur $20$) à un groupe d'élèves. Il donne les indications suivantes : la moyenne est $12$, la médiane est $14$ et l'étendue est $10$.
1. Vérifier que la série $6 ; 8 ; 14 ; 16 ; 16$ respecte ces trois conditions.
2. On range les notes dans l'ordre croissant : $a \\leqslant b \\leqslant c \\leqslant d \\leqslant e$.
   a) Que vaut $c$ ? Que vaut $a + b + c + d + e$ ?
   b) Exprimer $e$ en fonction de $a$.
3. Expliquer pourquoi la plus petite note ne peut pas être $3$.
4. Expliquer pourquoi la plus petite note ne peut pas être $8$.
5. Proposer une série qui respecte les conditions et dont la plus petite note est $7$.`,
      solution: `**1.** Moyenne : $\\dfrac{6 + 8 + 14 + 16 + 16}{5} = \\dfrac{60}{5} = 12$. Médiane : il y a $5$ valeurs rangées, la $3^\\text{e}$ est $14$. Étendue : $16 - 6 = 10$. Les trois conditions sont respectées.

**2. a)** La médiane d'une série de $5$ valeurs rangées est la $3^\\text{e}$ : $c = 14$.
La moyenne vaut $12$, donc la somme vaut $5 \\times 12 = 60$.

**b)** L'étendue vaut $10$ : $e - a = 10$, donc $e = a + 10$.

**3.** Si $a = 3$, alors $e = 13$. Mais $e$ est la plus grande note, elle doit être supérieure ou égale à la médiane $c = 14$ : c'est impossible.

**4.** Si $a = 8$, alors $e = 18$ et $b + d = 60 - 8 - 14 - 18 = 20$.
Or $b \\geqslant a = 8$ et $d \\geqslant c = 14$, donc $b + d \\geqslant 22$. Comme $20 < 22$, c'est impossible.

**5.** Avec $a = 7$ : $e = 17$ et $b + d = 60 - 7 - 14 - 17 = 22$, avec $7 \\leqslant b \\leqslant 14$ et $14 \\leqslant d \\leqslant 17$. On peut prendre $b = 8$ et $d = 14$.
Série : $7 ; 8 ; 14 ; 14 ; 17$. Vérification : somme $60$, moyenne $12$ ; médiane $14$ ; étendue $17 - 7 = 10$. (La série $7 ; 7 ; 14 ; 15 ; 17$ convient aussi.)`
    }
  ],
  "4D2": [
    {
      id: "4D2-ds-01",
      title: "Tirage dans une urne",
      difficulty: 1,
      points: 4,
      statement: `Une urne contient $5$ boules rouges, $3$ boules vertes et $2$ boules bleues, indiscernables au toucher. On tire une boule au hasard.
1. Combien y a-t-il d'issues possibles ? Sont-elles équiprobables ?
2. Calculer la probabilité de l'événement $R$ : « la boule est rouge », puis celle de $V$ : « la boule est verte ».
3. Décrire par une phrase l'événement contraire de $B$ : « la boule est bleue », puis calculer sa probabilité.
4. Calculer la probabilité de l'événement « la boule est rouge ou verte ». Que remarque-t-on ?`,
      solution: `**1.** Il y a $5 + 3 + 2 = 10$ boules, donc $10$ issues possibles. Les boules sont indiscernables au toucher et tirées au hasard : les issues sont équiprobables.

**2.** $P(R) = \\dfrac{5}{10} = \\dfrac{1}{2}$ et $P(V) = \\dfrac{3}{10}$.

**3.** $\\overline{B}$ : « la boule n'est pas bleue ». $P(\\overline{B}) = 1 - P(B) = 1 - \\dfrac{2}{10} = \\dfrac{8}{10} = \\dfrac{4}{5}$.

**4.** $5 + 3 = 8$ boules sont rouges ou vertes : probabilité $\\dfrac{8}{10} = \\dfrac{4}{5}$. On remarque que c'est la même probabilité qu'à la question 3 : « rouge ou verte » et « pas bleue » désignent le même événement.`
    },
    {
      id: "4D2-ds-02",
      title: "Le dé à six faces",
      difficulty: 1,
      points: 4,
      statement: `On lance un dé équilibré à six faces numérotées de $1$ à $6$. On considère les événements $A$ : « obtenir un nombre pair » et $B$ : « obtenir un multiple de $3$ ».
1. Donner les issues qui réalisent $A$, puis celles qui réalisent $B$. Calculer $P(A)$ et $P(B)$.
2. Décrire l'événement $\\overline{B}$ et calculer sa probabilité.
3. Calculer la probabilité de l'événement « $A$ et $B$ ».
4. Calculer la probabilité de l'événement « $A$ ou $B$ ».`,
      solution: `**1.** $A$ est réalisé par $2$, $4$, $6$ : $P(A) = \\dfrac{3}{6} = \\dfrac{1}{2}$. $B$ est réalisé par $3$ et $6$ : $P(B) = \\dfrac{2}{6} = \\dfrac{1}{3}$.

**2.** $\\overline{B}$ : « ne pas obtenir un multiple de $3$ », réalisé par $1$, $2$, $4$, $5$. $P(\\overline{B}) = 1 - \\dfrac{1}{3} = \\dfrac{2}{3}$.

**3.** « $A$ et $B$ » : nombre pair **et** multiple de $3$, seulement $6$. Probabilité $\\dfrac{1}{6}$.

**4.** « $A$ ou $B$ » : pair **ou** multiple de $3$ (ou les deux) : $2$, $3$, $4$, $6$. Probabilité $\\dfrac{4}{6} = \\dfrac{2}{3}$.`
    },
    {
      id: "4D2-ds-03",
      title: "Deux pièces de monnaie",
      difficulty: 2,
      points: 5,
      statement: `On lance successivement deux pièces de monnaie équilibrées et on note le côté obtenu : Pile ($P$) ou Face ($F$).
1. Représenter cette expérience par un arbre et donner la liste des issues.
2. Calculer la probabilité d'obtenir deux fois Pile.
3. Calculer la probabilité d'obtenir une fois Pile et une fois Face (dans n'importe quel ordre).
4. Calculer la probabilité d'obtenir au moins une fois Face, en utilisant l'événement contraire.`,
      solution: `**1.** Arbre : au premier lancer, deux branches $P$ et $F$ ; de chacune partent deux branches $P$ et $F$ pour le second lancer. Il y a $4$ issues équiprobables : $PP$, $PF$, $FP$, $FF$.

**2.** Une seule issue, $PP$, sur $4$ : probabilité $\\dfrac{1}{4}$.

**3.** Issues $PF$ et $FP$ : probabilité $\\dfrac{2}{4} = \\dfrac{1}{2}$.

**4.** L'événement contraire de « au moins une fois Face » est « aucune Face », c'est-à-dire « deux fois Pile ». Donc la probabilité cherchée vaut $1 - \\dfrac{1}{4} = \\dfrac{3}{4}$.`
    },
    {
      id: "4D2-ds-04",
      title: "Les lettres d'un mot",
      difficulty: 2,
      points: 5,
      statement: `On écrit chaque lettre du mot PROBABILITE sur un carton. Les $11$ cartons, identiques, sont placés dans un sac et on en tire un au hasard.
1. Calculer la probabilité de tirer la lettre B.
2. Calculer la probabilité de tirer une voyelle.
3. Calculer la probabilité de ne pas tirer la lettre I.
4. On ajoute des cartons portant la lettre Z, jusqu'à ce que la probabilité de tirer une voyelle soit égale à $\\dfrac{1}{3}$. Combien de cartons Z ajoute-t-on ?`,
      solution: `**1.** Le mot comporte $11$ lettres, dont $2$ B : $P(\\text{B}) = \\dfrac{2}{11}$.

**2.** Voyelles : O, A, I, I, E, soit $5$ cartons : probabilité $\\dfrac{5}{11}$.

**3.** Il y a $2$ cartons I, donc $P(\\text{I}) = \\dfrac{2}{11}$ et $P(\\text{non I}) = 1 - \\dfrac{2}{11} = \\dfrac{9}{11}$.

**4.** On garde $5$ voyelles. Pour que la probabilité soit $\\dfrac{1}{3}$, il faut $5 \\times 3 = 15$ cartons au total, donc ajouter $15 - 11 = 4$ cartons Z. Vérification : $\\dfrac{5}{15} = \\dfrac{1}{3}$.`
    },
    {
      id: "4D2-ds-05",
      title: "La somme de deux dés",
      difficulty: 3,
      points: 5,
      statement: `On lance deux dés équilibrés à six faces, l'un rouge et l'autre vert, et on calcule la somme des deux nombres obtenus.
1. Construire un tableau à double entrée donnant toutes les sommes possibles. Combien y a-t-il d'issues ?
2. Calculer la probabilité que la somme soit égale à $7$.
3. Calculer la probabilité que la somme soit supérieure ou égale à $10$.
4. Ali gagne si la somme vaut $7$, Bérénice gagne si la somme est supérieure ou égale à $10$. Le jeu est-il favorable à l'un des deux ?
5. Calculer la probabilité que la somme soit différente de $2$.`,
      solution: `**1.**

| + | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
| $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
| $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
| $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
| $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $11$ |
| $6$ | $7$ | $8$ | $9$ | $10$ | $11$ | $12$ |

Il y a $6 \\times 6 = 36$ issues équiprobables.

**2.** La somme $7$ apparaît $6$ fois : $P = \\dfrac{6}{36} = \\dfrac{1}{6}$.

**3.** Somme $10$ : $3$ fois ; $11$ : $2$ fois ; $12$ : $1$ fois. Total $6$ cases : $P = \\dfrac{6}{36} = \\dfrac{1}{6}$.

**4.** Les deux joueurs ont la même probabilité de gagner, $\\dfrac{1}{6}$ : le jeu n'est favorable à aucun des deux (et dans $\\dfrac{2}{3}$ des cas, personne ne gagne).

**5.** La somme $2$ n'apparaît qu'une fois : $P(\\text{somme} \\neq 2) = 1 - \\dfrac{1}{36} = \\dfrac{35}{36}$.`
    },
    {
      id: "4D2-ds-06",
      title: "Roue et urne",
      difficulty: 3,
      points: 5,
      statement: `Un jeu se déroule en deux étapes :
- on fait tourner une roue partagée en trois secteurs de même taille : un rouge, un bleu, un vert ;
- puis on tire au hasard une boule dans une urne contenant $2$ boules rouges et $1$ boule bleue.

On gagne si la couleur de la boule est la même que celle du secteur obtenu.
1. On numérote les boules $R_1$, $R_2$ et $B$. Construire un tableau à double entrée représentant toutes les issues. Combien y en a-t-il ?
2. Calculer la probabilité de gagner.
3. Calculer la probabilité de perdre.
4. Peut-on gagner si la roue s'arrête sur le vert ? On ajoute une boule verte dans l'urne : la probabilité de gagner change-t-elle ? Justifier.`,
      solution: `**1.**

| Roue \\ Urne | $R_1$ | $R_2$ | $B$ |
|---|---|---|---|
| rouge | gagné | gagné | perdu |
| bleu | perdu | perdu | gagné |
| vert | perdu | perdu | perdu |

Il y a $3 \\times 3 = 9$ issues équiprobables.

**2.** $3$ issues sont gagnantes : $P(\\text{gagner}) = \\dfrac{3}{9} = \\dfrac{1}{3}$.

**3.** Perdre est l'événement contraire : $P(\\text{perdre}) = 1 - \\dfrac{1}{3} = \\dfrac{2}{3}$.

**4.** Non : l'urne ne contient aucune boule verte, donc les $3$ issues « vert » sont perdantes.
Avec une boule verte en plus ($R_1$, $R_2$, $B$, $V$), il y a $3 \\times 4 = 12$ issues équiprobables, dont $2 + 1 + 1 = 4$ gagnantes : $P(\\text{gagner}) = \\dfrac{4}{12} = \\dfrac{1}{3}$. **La probabilité ne change pas.**`
    },
    {
      id: "4D2-ds-07",
      title: "Avec ou sans remise",
      difficulty: 4,
      points: 5,
      statement: `Une urne contient $3$ boules rouges ($R_1$, $R_2$, $R_3$) et $2$ boules noires ($N_1$, $N_2$). On tire successivement deux boules.
1. **Tirage sans remise** : on ne remet pas la première boule dans l'urne avant de tirer la seconde.
   a) Combien y a-t-il d'issues (couples de boules ordonnés) possibles ? Justifier.
   b) Calculer la probabilité d'obtenir deux boules rouges, puis deux boules noires.
   c) En déduire la probabilité d'obtenir deux boules de la même couleur.
2. **Tirage avec remise** : on remet la première boule avant de tirer la seconde. Reprendre les questions b) et c).
3. Dans quel cas a-t-on le plus de chances d'obtenir deux boules de la même couleur ?`,
      solution: `**1. a)** Pour la première boule, $5$ possibilités ; pour la seconde, il reste $4$ boules. Il y a $5 \\times 4 = 20$ issues équiprobables.
**b)** Deux rouges : $3$ choix pour la première, puis $2$ pour la seconde : $3 \\times 2 = 6$ issues, probabilité $\\dfrac{6}{20} = \\dfrac{3}{10}$.
Deux noires : $2 \\times 1 = 2$ issues, probabilité $\\dfrac{2}{20} = \\dfrac{1}{10}$.
**c)** Les deux événements ne peuvent pas se produire en même temps : $\\dfrac{6 + 2}{20} = \\dfrac{8}{20} = \\dfrac{2}{5}$.

**2.** Il y a maintenant $5 \\times 5 = 25$ issues équiprobables.
Deux rouges : $3 \\times 3 = 9$ issues, probabilité $\\dfrac{9}{25}$. Deux noires : $2 \\times 2 = 4$ issues, probabilité $\\dfrac{4}{25}$.
Même couleur : $\\dfrac{9 + 4}{25} = \\dfrac{13}{25}$.

**3.** $\\dfrac{2}{5} = \\dfrac{10}{25} < \\dfrac{13}{25}$ : on a plus de chances d'obtenir deux boules de la même couleur **avec remise**.`
    },
    {
      id: "4D2-ds-08",
      title: "Un jeu est-il équitable ?",
      difficulty: 4,
      points: 6,
      statement: `Paul et Zoé lancent chacun un dé équilibré à quatre faces numérotées de $1$ à $4$, puis calculent le **produit** des deux nombres obtenus. Paul gagne si le produit est pair, Zoé gagne s'il est impair.
1. Construire un tableau à double entrée donnant tous les produits possibles.
2. Calculer la probabilité que Zoé gagne, puis celle que Paul gagne. Le jeu est-il équitable ?
3. Ils changent la règle : Zoé gagne si le produit est inférieur ou égal à $4$, Paul gagne sinon. Le jeu est-il équitable maintenant ? Justifier.
4. Avec la première règle, ils jouent $200$ parties et le produit est pair $148$ fois. Calculer la fréquence de victoire de Paul. Est-ce cohérent avec la question 2 ?`,
      solution: `**1.**

| × | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| $1$ | $1$ | $2$ | $3$ | $4$ |
| $2$ | $2$ | $4$ | $6$ | $8$ |
| $3$ | $3$ | $6$ | $9$ | $12$ |
| $4$ | $4$ | $8$ | $12$ | $16$ |

Il y a $4 \\times 4 = 16$ issues équiprobables.

**2.** Produits impairs : $1$, $3$, $3$, $9$, soit $4$ issues. $P(\\text{Zoé}) = \\dfrac{4}{16} = \\dfrac{1}{4}$ et $P(\\text{Paul}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$. **Le jeu n'est pas équitable** : il favorise Paul.

**3.** Produits inférieurs ou égaux à $4$ : $1, 2, 3, 4$ (première ligne), $2, 4$ (deuxième), $3$ (troisième), $4$ (quatrième), soit $8$ issues. $P(\\text{Zoé}) = \\dfrac{8}{16} = \\dfrac{1}{2} = P(\\text{Paul})$ : **le jeu est équitable**.

**4.** Fréquence : $\\dfrac{148}{200} = 0{,}74$. C'est très proche de la probabilité $\\dfrac{3}{4} = 0{,}75$ : c'est cohérent (sur un grand nombre de parties, la fréquence se rapproche de la probabilité).`
    },
    {
      id: "4D2-ds-09",
      title: "Le jeu de 32 cartes",
      difficulty: 1,
      points: 4,
      statement: `Un jeu de $32$ cartes comporte $4$ couleurs (pique, cœur, carreau, trèfle). Dans chaque couleur, il y a $8$ cartes : $7$, $8$, $9$, $10$, valet, dame, roi et as. Les valets, dames et rois sont appelés des « figures ».
On tire une carte au hasard dans ce jeu bien mélangé.
1. Calculer la probabilité de chacun des événements suivants. Donner les résultats sous forme de fractions irréductibles.
   a) $C$ : « la carte est un cœur ».
   b) $R$ : « la carte est un roi ».
   c) $K$ : « la carte est le roi de cœur ».
   d) $F$ : « la carte est une figure ».
2. Décrire par une phrase l'événement contraire de $C$, puis calculer sa probabilité.
3. Est-il plus probable de tirer une figure ou un as ? Justifier.`,
      solution: `Les $32$ cartes ont la même chance d'être tirées : la probabilité d'un événement est $\\dfrac{\\text{nombre d'issues favorables}}{32}$.

**1. a)** Il y a $8$ cœurs : $P(C) = \\dfrac{8}{32} = \\dfrac{1}{4}$.
**b)** Il y a $4$ rois (un par couleur) : $P(R) = \\dfrac{4}{32} = \\dfrac{1}{8}$.
**c)** Il n'y a qu'un roi de cœur : $P(K) = \\dfrac{1}{32}$.
**d)** Il y a $3$ figures par couleur, soit $3 \\times 4 = 12$ figures : $P(F) = \\dfrac{12}{32} = \\dfrac{3}{8}$.

**2.** L'événement contraire de $C$ est « la carte n'est pas un cœur » (c'est un pique, un carreau ou un trèfle).
$P(\\text{non } C) = 1 - P(C) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$.

**3.** Il y a $4$ as, donc $P(\\text{as}) = \\dfrac{4}{32} = \\dfrac{1}{8}$, alors que $P(F) = \\dfrac{3}{8}$. Il est **plus probable de tirer une figure** (trois fois plus).`
    },
    {
      id: "4D2-ds-10",
      title: "Le code du cadenas",
      difficulty: 2,
      points: 5,
      statement: `Le code d'un cadenas est formé de deux chiffres : le premier chiffre et le second chiffre peuvent chacun valoir $1$, $2$, $3$ ou $4$. Le propriétaire a choisi son code au hasard.
1. Représenter toutes les issues possibles dans un tableau à double entrée. Combien y a-t-il de codes possibles ?
2. Un voleur essaie un code au hasard. Quelle est la probabilité qu'il ouvre le cadenas du premier coup ?
3. Calculer la probabilité des événements suivants :
   a) $A$ : « les deux chiffres du code sont identiques » ;
   b) $B$ : « la somme des deux chiffres du code est égale à $5$ ».
4. On considère l'événement $C$ : « le code contient au moins un $4$ ».
   a) Décrire l'événement contraire de $C$ et calculer sa probabilité.
   b) En déduire $P(C)$.`,
      solution: `**1.**

| $1^\\text{er}$ \\ $2^\\text{e}$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| $1$ | $11$ | $12$ | $13$ | $14$ |
| $2$ | $21$ | $22$ | $23$ | $24$ |
| $3$ | $31$ | $32$ | $33$ | $34$ |
| $4$ | $41$ | $42$ | $43$ | $44$ |

Il y a $4 \\times 4 = 16$ codes possibles, tous équiprobables.

**2.** Un seul code ouvre le cadenas : $P = \\dfrac{1}{16}$.

**3. a)** Codes favorables : $11$, $22$, $33$, $44$. $P(A) = \\dfrac{4}{16} = \\dfrac{1}{4}$.
**b)** Codes favorables : $14$, $23$, $32$, $41$. $P(B) = \\dfrac{4}{16} = \\dfrac{1}{4}$.

**4. a)** L'événement contraire de $C$ est « le code ne contient aucun $4$ » : chacun des deux chiffres vaut $1$, $2$ ou $3$, ce qui donne $3 \\times 3 = 9$ codes. $P(\\text{non } C) = \\dfrac{9}{16}$.

**b)** $P(C) = 1 - \\dfrac{9}{16} = \\dfrac{7}{16}$. (Vérification dans le tableau : $14$, $24$, $34$, $41$, $42$, $43$, $44$, soit $7$ codes.)`
    },
    {
      id: "4D2-ds-11",
      title: "Le produit de deux tétraèdres",
      difficulty: 3,
      points: 5,
      statement: `On lance deux dés équilibrés en forme de tétraèdre, dont les faces sont numérotées de $1$ à $4$ : un dé rouge et un dé vert. On note le nombre lu sur chaque dé, puis on calcule le **produit** de ces deux nombres.
1. Construire un tableau à double entrée donnant tous les produits possibles. Combien y a-t-il d'issues ?
2. Calculer la probabilité que le produit soit égal à $4$.
3. a) Dans quel cas le produit est-il impair ? Calculer la probabilité que le produit soit impair.
   b) En déduire la probabilité que le produit soit pair.
4. Calculer la probabilité que le produit soit strictement supérieur à $8$.
5. Quel produit a le plus de chances d'être obtenu ? Justifier.`,
      solution: `**1.**

| Rouge \\ Vert | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| $1$ | $1$ | $2$ | $3$ | $4$ |
| $2$ | $2$ | $4$ | $6$ | $8$ |
| $3$ | $3$ | $6$ | $9$ | $12$ |
| $4$ | $4$ | $8$ | $12$ | $16$ |

Il y a $4 \\times 4 = 16$ issues équiprobables (les dés sont équilibrés).

**2.** Le produit vaut $4$ dans $3$ cases : (rouge $1$, vert $4$), ($2$ ; $2$) et ($4$ ; $1$). $P = \\dfrac{3}{16}$.

**3. a)** Un produit est impair seulement si les deux nombres sont impairs : $(1 ; 1)$, $(1 ; 3)$, $(3 ; 1)$, $(3 ; 3)$. $P(\\text{impair}) = \\dfrac{4}{16} = \\dfrac{1}{4}$.
**b)** « Pair » est l'événement contraire de « impair » : $P(\\text{pair}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$.

**4.** Produits strictement supérieurs à $8$ : $9$, $12$, $12$ et $16$, soit $4$ cases. $P = \\dfrac{4}{16} = \\dfrac{1}{4}$.

**5.** Nombre de cases pour chaque produit : $1$ (une fois), $2$ (deux), $3$ (deux), $4$ (trois), $6$ (deux), $8$ (deux), $9$ (une), $12$ (deux), $16$ (une). Le total vaut bien $16$.
Le produit **$4$** est le plus probable, avec une probabilité de $\\dfrac{3}{16}$.`
    },
    {
      id: "4D2-ds-12",
      title: "Composer une urne",
      difficulty: 4,
      points: 6,
      statement: `Une urne contient $3$ boules rouges et un certain nombre $n$ de boules bleues, indiscernables au toucher. On tire une boule au hasard.
1. Dans cette question, $n = 9$. Calculer la probabilité de tirer une boule rouge.
2. Combien de boules bleues faut-il dans l'urne pour que la probabilité de tirer une boule rouge soit égale à $\\dfrac{1}{5}$ ?
3. L'urne contient maintenant $3$ boules rouges et $12$ boules bleues. Combien de boules rouges faut-il ajouter pour que la probabilité de tirer une boule bleue soit égale à $\\dfrac{3}{5}$ ?
4. Avec $3$ boules rouges et $12$ boules bleues, peut-on, en ajoutant uniquement des boules bleues, obtenir une probabilité de tirer une boule rouge égale à $\\dfrac{1}{4}$ ? Justifier.
5. Avec $3$ boules rouges et $12$ boules bleues, on tire une boule, on note sa couleur, on la remet dans l'urne, puis on tire une seconde boule.
   a) Combien y a-t-il d'issues, en numérotant les boules ? Combien d'issues donnent deux boules rouges ?
   b) En déduire la probabilité d'obtenir deux boules rouges, puis celle d'obtenir au moins une boule bleue.`,
      solution: `**1.** L'urne contient $3 + 9 = 12$ boules, dont $3$ rouges : $P(\\text{rouge}) = \\dfrac{3}{12} = \\dfrac{1}{4}$.

**2.** Il faut que les $3$ boules rouges représentent $\\dfrac{1}{5}$ du total, donc que le total soit $3 \\times 5 = 15$ boules. Il faut **$12$ boules bleues**. Vérification : $\\dfrac{3}{15} = \\dfrac{1}{5}$.

**3.** Les $12$ boules bleues doivent représenter $\\dfrac{3}{5}$ du total. Or $12 = 3 \\times 4$, donc le total doit être $5 \\times 4 = 20$ boules. Il y a déjà $15$ boules : il faut ajouter **$5$ boules rouges**.
Vérification : $8$ rouges et $12$ bleues, $P(\\text{bleue}) = \\dfrac{12}{20} = \\dfrac{3}{5}$.

**4.** Actuellement $P(\\text{rouge}) = \\dfrac{3}{15} = \\dfrac{1}{5}$, et $\\dfrac{1}{5} < \\dfrac{1}{4}$. Si l'on ajoute des boules bleues, le nombre de rouges reste $3$ mais le total augmente : la probabilité de tirer une rouge **diminue**. On ne peut donc pas atteindre $\\dfrac{1}{4}$ : **c'est impossible**.

**5. a)** On numérote les $15$ boules. Il y a $15$ possibilités pour le premier tirage et $15$ pour le second (la boule est remise) : $15 \\times 15 = 225$ issues équiprobables. Deux boules rouges : $3 \\times 3 = 9$ issues.

**b)** $P(\\text{deux rouges}) = \\dfrac{9}{225} = \\dfrac{1}{25}$.
« Au moins une boule bleue » est l'événement contraire de « deux boules rouges » : $P = 1 - \\dfrac{1}{25} = \\dfrac{24}{25}$.`
    }
  ],
  "4P1": [
    {
      id: "4P1-ds-01",
      title: "Tableaux de proportionnalité",
      difficulty: 1,
      points: 4,
      statement: `1. Au marché, $3$ kg de pommes coûtent $7{,}20$ €. Le prix est proportionnel à la masse.
   a) Calculer le prix d'un kilogramme, puis de $5$ kg de pommes.
   b) Quelle masse de pommes peut-on acheter avec $18$ € ?
2. Un cinéma affiche les tarifs suivants. Le prix payé est-il proportionnel au nombre de places ? Justifier.

| Nombre de places | $1$ | $2$ | $5$ |
|---|---|---|---|
| Prix (€) | $8$ | $15$ | $35$ |`,
      solution: `**1. a)** Prix d'un kilogramme : $7{,}20 \\div 3 = 2{,}40$ €. Prix de $5$ kg : $5 \\times 2{,}40 = 12$ €.
**b)** $18 \\div 2{,}40 = 7{,}5$. On peut acheter **$7{,}5$ kg** de pommes. (Produit en croix : $\\dfrac{18 \\times 3}{7{,}2} = 7{,}5$.)

**2.** On calcule le prix par place : $\\dfrac{8}{1} = 8$ ; $\\dfrac{15}{2} = 7{,}5$ ; $\\dfrac{35}{5} = 7$. Ces quotients ne sont pas égaux : **le prix n'est pas proportionnel** au nombre de places.`
    },
    {
      id: "4P1-ds-02",
      title: "Coefficients multiplicateurs",
      difficulty: 1,
      points: 4,
      statement: `1. Un article coûte $80$ €. Son prix augmente de $15\\,\\%$. Par quel nombre multiplie-t-on le prix ? Calculer le nouveau prix.
2. Une veste coûte $65$ €. Elle est soldée à $-30\\,\\%$. Par quel nombre multiplie-t-on le prix ? Calculer le prix soldé.
3. Traduire en pourcentage d'évolution :
   a) multiplier par $0{,}88$ ;
   b) multiplier par $1{,}07$.`,
      solution: `**1.** Augmenter de $15\\,\\%$ revient à multiplier par $1 + \\dfrac{15}{100} = 1{,}15$. Nouveau prix : $80 \\times 1{,}15 = 92$ €.

**2.** Diminuer de $30\\,\\%$ revient à multiplier par $1 - \\dfrac{30}{100} = 0{,}7$. Prix soldé : $65 \\times 0{,}7 = 45{,}50$ €.

**3. a)** $0{,}88 = 1 - 0{,}12$ : c'est une **baisse de $12\\,\\%$**.
**b)** $1{,}07 = 1 + 0{,}07$ : c'est une **hausse de $7\\,\\%$**.`
    },
    {
      id: "4P1-ds-03",
      title: "Partages selon un ratio",
      difficulty: 2,
      points: 5,
      statement: `1. Deux frères se partagent $84$ € dans le ratio $3 : 4$. Combien reçoit chacun ?
2. Une vinaigrette est composée d'huile et de vinaigre dans le ratio $3 : 1$. Quelles quantités faut-il pour préparer $200$ mL de vinaigrette ?
3. Dans une classe de $28$ élèves, le ratio filles : garçons est $4 : 3$. Combien y a-t-il de filles et de garçons ?
4. Une pâte est faite de farine, de beurre et de sucre dans le ratio $5 : 3 : 2$. Quelle masse de chaque ingrédient faut-il pour $600$ g de pâte ?`,
      solution: `**1.** On partage en $3 + 4 = 7$ parts égales : une part vaut $84 \\div 7 = 12$ €. Le premier reçoit $3 \\times 12 = 36$ € et le second $4 \\times 12 = 48$ €. (Vérification : $36 + 48 = 84$.)

**2.** $3 + 1 = 4$ parts : une part vaut $200 \\div 4 = 50$ mL. Il faut $150$ mL d'huile et $50$ mL de vinaigre.

**3.** $4 + 3 = 7$ parts : une part vaut $28 \\div 7 = 4$ élèves. Il y a $16$ filles et $12$ garçons.

**4.** $5 + 3 + 2 = 10$ parts : une part vaut $600 \\div 10 = 60$ g. Farine : $300$ g ; beurre : $180$ g ; sucre : $120$ g.`
    },
    {
      id: "4P1-ds-04",
      title: "Vitesses moyennes",
      difficulty: 2,
      points: 5,
      statement: `1. Une voiture parcourt $240$ km en $2$ h $30$ min. Calculer sa vitesse moyenne.
2. Convertir $2{,}4$ h en heures et minutes.
3. Quelle distance parcourt-on en $1$ h $45$ min à la vitesse moyenne de $110$ km/h ?
4. Combien de temps faut-il pour parcourir $150$ km à $90$ km/h ? Donner la réponse en heures et minutes.`,
      solution: `**1.** $2$ h $30$ min $= 2{,}5$ h. $v = \\dfrac{d}{t} = \\dfrac{240}{2{,}5} = 96$ km/h.

**2.** $0{,}4$ h $= 0{,}4 \\times 60$ min $= 24$ min, donc $2{,}4$ h $= 2$ h $24$ min.

**3.** $1$ h $45$ min $= 1{,}75$ h. $d = v \\times t = 110 \\times 1{,}75 = 192{,}5$ km.

**4.** $t = \\dfrac{d}{v} = \\dfrac{150}{90} = \\dfrac{5}{3}$ h $= 1$ h $+ \\dfrac{2}{3}$ h. Or $\\dfrac{2}{3} \\times 60 = 40$ min. Il faut **$1$ h $40$ min**.`
    },
    {
      id: "4P1-ds-05",
      title: "Soldes successifs",
      difficulty: 3,
      points: 5,
      statement: `1. Un manteau coûte $120$ €. Il subit une première baisse de $20\\,\\%$, puis une seconde baisse de $10\\,\\%$ sur le nouveau prix.
   a) Calculer le prix final.
   b) Par quel nombre unique a-t-on multiplié le prix de départ ? En déduire le pourcentage de baisse global.
   c) Lina pensait que la baisse globale serait de $30\\,\\%$. Expliquer son erreur.
2. Le prix d'une action augmente de $25\\,\\%$, puis baisse de $20\\,\\%$. Montrer qu'elle revient à son prix de départ.`,
      solution: `**1. a)** $120 \\times 0{,}8 = 96$ €, puis $96 \\times 0{,}9 = 86{,}40$ €.
**b)** $0{,}8 \\times 0{,}9 = 0{,}72$ et $0{,}72 = 1 - 0{,}28$ : la baisse globale est de **$28\\,\\%$**. (Vérification : $120 \\times 0{,}72 = 86{,}4$.)
**c)** La seconde baisse de $10\\,\\%$ s'applique au prix déjà réduit ($96$ €) et non au prix de départ : elle porte sur une somme plus petite. Les pourcentages successifs ne s'additionnent pas, les coefficients se multiplient.

**2.** Les coefficients multiplicateurs sont $1{,}25$ et $0{,}8$. $1{,}25 \\times 0{,}8 = 1$ : le prix final est égal au prix de départ multiplié par $1$, il revient donc à son prix de départ.`
    },
    {
      id: "4P1-ds-06",
      title: "Masse volumique",
      difficulty: 3,
      points: 5,
      statement: `La masse volumique de l'aluminium est de $2{,}7$ g/cm³ : un centimètre cube d'aluminium a une masse de $2{,}7$ g.
1. Calculer la masse d'un cube d'aluminium de $5$ cm d'arête.
2. Quel est le volume d'un bloc d'aluminium de $1$ kg ? Arrondir au dixième de cm³.
3. Un objet métallique a une masse de $540$ g et un volume de $200$ cm³. Peut-il être en aluminium ? Justifier.
4. Exprimer la masse volumique de l'aluminium en kg/m³.`,
      solution: `**1.** Volume du cube : $5^3 = 125$ cm³. Masse : $125 \\times 2{,}7 = 337{,}5$ g.

**2.** $1$ kg $= 1\\,000$ g. Volume : $\\dfrac{1\\,000}{2{,}7} \\approx 370{,}4$ cm³.

**3.** Masse volumique de l'objet : $\\dfrac{540}{200} = 2{,}7$ g/cm³. C'est celle de l'aluminium : **l'objet peut être en aluminium**.

**4.** $1$ m³ $= 1\\,000\\,000$ cm³, donc $1$ m³ d'aluminium a une masse de $2{,}7 \\times 1\\,000\\,000 = 2\\,700\\,000$ g $= 2\\,700$ kg. La masse volumique est de $2\\,700$ kg/m³.`
    },
    {
      id: "4P1-ds-07",
      title: "Retrouver une valeur de départ",
      difficulty: 4,
      points: 5,
      statement: `1. Après une augmentation de $8\\,\\%$, un jeu coûte $54$ €. Quel était son prix avant l'augmentation ?
2. Après une réduction de $35\\,\\%$, une console coûte $52$ €. Quel était son prix initial ?
3. Une ville comptait $12\\,500$ habitants en 2024. Sa population augmente de $4\\,\\%$ par an.
   a) Calculer la population prévue en 2026.
   b) Tom affirme : « En deux ans, la population aura augmenté de $8\\,\\%$. » A-t-il raison ? Justifier.`,
      solution: `**1.** On note $p$ le prix initial : $p \\times 1{,}08 = 54$, donc $p = \\dfrac{54}{1{,}08} = 50$ €.

**2.** $p \\times 0{,}65 = 52$, donc $p = \\dfrac{52}{0{,}65} = 80$ €.

**3. a)** On multiplie deux fois par $1{,}04$ : $12\\,500 \\times 1{,}04 \\times 1{,}04 = 12\\,500 \\times 1{,}081\\,6 = 13\\,520$ habitants.
**b)** Une hausse de $8\\,\\%$ donnerait $12\\,500 \\times 1{,}08 = 13\\,500$ habitants, et non $13\\,520$. Le coefficient global est $1{,}04^2 = 1{,}081\\,6$, soit une hausse de $8{,}16\\,\\%$ : **Tom a tort**.`
    },
    {
      id: "4P1-ds-08",
      title: "Le piège de la vitesse moyenne",
      difficulty: 4,
      points: 6,
      statement: `Un cycliste fait l'aller-retour entre deux villages distants de $120$ km. À l'aller, sa vitesse moyenne est de $60$ km/h ; au retour, fatigué, elle n'est que de $40$ km/h.
1. Calculer la durée de l'aller, puis celle du retour.
2. Calculer la vitesse moyenne sur l'ensemble du trajet aller-retour.
3. Son ami affirme que la vitesse moyenne est $\\dfrac{60 + 40}{2} = 50$ km/h. Expliquer pourquoi c'est faux.
4. Convertir la vitesse moyenne trouvée à la question 2 en m/s, arrondie au dixième.
5. À quelle vitesse moyenne aurait-il dû rouler au retour pour réaliser l'aller-retour en $4$ h ?`,
      solution: `**1.** Aller : $t = \\dfrac{120}{60} = 2$ h. Retour : $t = \\dfrac{120}{40} = 3$ h.

**2.** Distance totale : $240$ km ; durée totale : $5$ h. Vitesse moyenne : $\\dfrac{240}{5} = 48$ km/h.

**3.** Le cycliste roule plus longtemps à $40$ km/h ($3$ h) qu'à $60$ km/h ($2$ h) : les deux vitesses ne « comptent » pas autant. La vitesse moyenne est le quotient de la distance totale par la durée totale, et non la moyenne des vitesses.

**4.** $48$ km/h $= \\dfrac{48\\,000 \\text{ m}}{3\\,600 \\text{ s}} \\approx 13{,}3$ m/s.

**5.** L'aller dure $2$ h ; il resterait $4 - 2 = 2$ h pour le retour de $120$ km : il aurait fallu rouler à $\\dfrac{120}{2} = 60$ km/h.`
    },
    {
      id: "4P1-ds-09",
      title: "La carte de randonnée",
      difficulty: 1,
      points: 4,
      statement: `Une carte de randonnée est à l'échelle $\\dfrac{1}{25\\,000}$.
1. Que signifie cette échelle ?
2. Sur la carte, deux refuges sont distants de $6$ cm. Quelle est la distance réelle, en km ?
3. Un sentier mesure en réalité $4{,}2$ km. Quelle longueur mesure-t-il sur la carte ?
4. Ce sentier traverse une forêt sur $30$ % de sa longueur. Calculer la longueur de la partie en forêt.
5. Un randonneur marche à la vitesse moyenne de $4$ km/h. Combien de temps met-il pour parcourir ce sentier de $4{,}2$ km ? Donner la réponse en heures et minutes.`,
      solution: `**1.** Les distances sur la carte sont proportionnelles aux distances réelles : $1$ cm sur la carte représente $25\\,000$ cm en réalité.

**2.** $6 \\times 25\\,000 = 150\\,000$ cm $= 1\\,500$ m $= 1{,}5$ km.

**3.** $4{,}2$ km $= 420\\,000$ cm et $420\\,000 \\div 25\\,000 = 16{,}8$ cm.

**4.** $30$ % de $4{,}2$ km : $0{,}3 \\times 4{,}2 = 1{,}26$ km.

**5.** Durée $= \\dfrac{\\text{distance}}{\\text{vitesse}} = \\dfrac{4{,}2}{4} = 1{,}05$ h. Or $0{,}05$ h $= 0{,}05 \\times 60 = 3$ min. Le randonneur met **$1$ h $3$ min**.`
    },
    {
      id: "4P1-ds-10",
      title: "Des crêpes pour toute la classe",
      difficulty: 2,
      points: 5,
      statement: `Voici une recette de pâte à crêpes pour $4$ personnes :
- $250$ g de farine ;
- $4$ œufs ;
- $0{,}5$ L de lait ;
- $40$ g de beurre.

On suppose que les quantités sont proportionnelles au nombre de personnes.
1. Calculer les quantités nécessaires pour $26$ personnes. Présenter les résultats dans un tableau.
2. La farine est vendue en paquets de $1$ kg et le lait en bouteilles de $1$ L. Combien de paquets de farine et de bouteilles de lait faut-il acheter pour $26$ personnes ?
3. Avec un seul paquet de $1$ kg de farine (et suffisamment des autres ingrédients), pour combien de personnes peut-on préparer la pâte ? Quelle quantité de lait faut-il alors ?
4. Dans cette recette, quel est le ratio masse de farine (en g) : volume de lait (en mL) ? Le simplifier.`,
      solution: `**1.** On passe de $4$ à $26$ personnes en multipliant par $\\dfrac{26}{4} = 6{,}5$.

| Personnes | $4$ | $26$ |
|---|---|---|
| Farine (g) | $250$ | $250 \\times 6{,}5 = 1\\,625$ |
| Œufs | $4$ | $4 \\times 6{,}5 = 26$ |
| Lait (L) | $0{,}5$ | $0{,}5 \\times 6{,}5 = 3{,}25$ |
| Beurre (g) | $40$ | $40 \\times 6{,}5 = 260$ |

**2.** $1\\,625$ g $= 1{,}625$ kg : un paquet ne suffit pas, il faut **$2$ paquets** de farine. $3{,}25$ L de lait : $3$ bouteilles ne suffisent pas, il faut **$4$ bouteilles**.

**3.** $1\\,000 \\div 250 = 4$ : on peut faire $4$ fois la recette, soit pour $4 \\times 4 = 16$ personnes. Il faut alors $4 \\times 0{,}5 = 2$ L de lait.

**4.** $0{,}5$ L $= 500$ mL. Ratio $250 : 500$, soit en divisant par $250$ : **$1 : 2$**. Il faut deux fois plus de millilitres de lait que de grammes de farine.`
    },
    {
      id: "4P1-ds-11",
      title: "La boisson aux fruits",
      difficulty: 3,
      points: 5,
      statement: `Une bouteille de $1{,}5$ L de boisson aux fruits contient $20$ % de jus de fruits pur (le reste est de l'eau).
1. Calculer le volume de jus pur contenu dans la bouteille.
2. Inès verse toute la bouteille dans une carafe et ajoute $0{,}5$ L d'eau. Quel est le pourcentage de jus pur dans la carafe ?
3. Hugo, lui, part d'une bouteille identique ($1{,}5$ L à $20$ %) et veut obtenir une boisson à $25$ % de jus pur en ajoutant du jus pur. On note $x$ le volume de jus pur ajouté, en litres.
   a) Exprimer en fonction de $x$ le volume total de boisson et le volume de jus pur.
   b) Justifier que $x$ vérifie l'équation $0{,}3 + x = 0{,}25 \\times (1{,}5 + x)$.
   c) Résoudre cette équation et conclure en centilitres.
4. Vérifier le résultat de la question 3.`,
      solution: `**1.** $20$ % de $1{,}5$ L : $0{,}2 \\times 1{,}5 = 0{,}3$ L de jus pur.

**2.** La carafe contient toujours $0{,}3$ L de jus pur, pour un volume total de $1{,}5 + 0{,}5 = 2$ L.
$\\dfrac{0{,}3}{2} = 0{,}15$ : la boisson contient **$15$ %** de jus pur.

**3. a)** Volume total : $1{,}5 + x$ litres. Volume de jus pur : $0{,}3 + x$ litres.

**b)** On veut que le jus pur représente $25$ % du volume total : $0{,}3 + x = 0{,}25 \\times (1{,}5 + x)$.

**c)** On développe : $0{,}3 + x = 0{,}375 + 0{,}25x$.
Donc $x - 0{,}25x = 0{,}375 - 0{,}3$, soit $0{,}75x = 0{,}075$ et $x = \\dfrac{0{,}075}{0{,}75} = 0{,}1$.
Hugo doit ajouter $0{,}1$ L, soit **$10$ cL** de jus pur.

**4.** Volume total : $1{,}5 + 0{,}1 = 1{,}6$ L ; jus pur : $0{,}3 + 0{,}1 = 0{,}4$ L. $\\dfrac{0{,}4}{1{,}6} = 0{,}25$, soit bien $25$ %.`
    },
    {
      id: "4P1-ds-12",
      title: "La TVA offerte",
      difficulty: 4,
      points: 6,
      statement: `Le prix TTC (toutes taxes comprises) d'un article s'obtient en ajoutant au prix HT (hors taxes) une taxe, la TVA, égale à $20$ % du prix HT.
1. Un casque audio coûte $45$ € HT. Calculer son prix TTC.
2. Par quel nombre faut-il multiplier un prix HT pour obtenir le prix TTC ? En déduire le prix HT d'un article vendu $72$ € TTC.
3. Le magasin accorde une remise de $10$ % sur le casque.
   a) Calculer le prix payé si la remise est appliquée sur le prix TTC.
   b) Calculer le prix payé si la remise est appliquée sur le prix HT, la TVA étant ajoutée ensuite.
   c) Expliquer pourquoi on obtient le même résultat.
4. Pendant une opération « TVA offerte », le client paie le prix HT au lieu du prix TTC.
   a) Pour le casque, calculer le pourcentage de réduction par rapport au prix TTC, arrondi au dixième.
   b) Un client pense que « TVA offerte » signifie « $20$ % de réduction ». A-t-il raison ? Justifier, quel que soit le prix de l'article.`,
      solution: `**1.** TVA : $0{,}2 \\times 45 = 9$ €. Prix TTC : $45 + 9 = 54$ €.

**2.** Ajouter $20$ %, c'est multiplier par $1 + \\dfrac{20}{100} = 1{,}2$. Donc prix TTC $=$ prix HT $\\times 1{,}2$.
Pour retrouver le prix HT, on divise par $1{,}2$ : $72 \\div 1{,}2 = 60$ € HT. Vérification : $60 \\times 1{,}2 = 72$.

**3. a)** Une remise de $10$ % revient à multiplier par $0{,}9$ : $54 \\times 0{,}9 = 48{,}60$ €.

**b)** $45 \\times 0{,}9 = 40{,}50$ € HT, puis $40{,}50 \\times 1{,}2 = 48{,}60$ € TTC.

**c)** Dans les deux cas, on multiplie le prix HT par $1{,}2$ et par $0{,}9$, seulement dans un ordre différent : $45 \\times 1{,}2 \\times 0{,}9 = 45 \\times 0{,}9 \\times 1{,}2$. L'ordre des facteurs d'un produit ne change pas le résultat.

**4. a)** Le client paie $45$ € au lieu de $54$ € : réduction de $9$ €. $\\dfrac{9}{54} \\approx 0{,}167$, soit environ **$16{,}7$ %**.

**b)** Il a tort. Le prix HT s'obtient en divisant le prix TTC par $1{,}2$, c'est-à-dire en le multipliant par $\\dfrac{1}{1{,}2} = \\dfrac{10}{12} = \\dfrac{5}{6}$.
La réduction est donc de $\\dfrac{1}{6}$ du prix TTC, soit environ $16{,}7$ % et non $20$ %, quel que soit l'article. (La TVA représente $20$ % du prix HT, mais seulement $\\dfrac{1}{6}$ du prix TTC.)`
    }
  ],
  "4P2": [
    {
      id: "4P2-ds-01",
      title: "Un programme de calcul",
      difficulty: 1,
      points: 4,
      statement: `On considère le programme de calcul suivant :
- choisir un nombre ;
- le multiplier par $3$ ;
- soustraire $5$ au résultat.

On note $f$ la fonction qui, au nombre choisi, associe le résultat du programme.
1. Calculer $f(4)$ et $f(-2)$.
2. Exprimer $f(x)$ en fonction de $x$.
3. Quel nombre faut-il choisir pour obtenir $13$ ? Comment appelle-t-on ce nombre pour la fonction $f$ ?`,
      solution: `**1.** Avec $4$ : $4 \\times 3 = 12$ puis $12 - 5 = 7$, donc $f(4) = 7$.
Avec $-2$ : $-2 \\times 3 = -6$ puis $-6 - 5 = -11$, donc $f(-2) = -11$.

**2.** $f(x) = 3x - 5$.

**3.** On résout $3x - 5 = 13$ : $3x = 18$, donc $x = 6$. Vérification : $f(6) = 18 - 5 = 13$.
Il faut choisir $6$ : c'est un **antécédent** de $13$ par $f$ ($13$ est l'image de $6$).`
    },
    {
      id: "4P2-ds-02",
      title: "Tableau de valeurs",
      difficulty: 1,
      points: 4,
      statement: `On considère la fonction $f$ définie par $f(x) = x^2 - 2x$.
1. Calculer l'image de $3$, de $-1$ et de $0$ par $f$.
2. Recopier et compléter le tableau de valeurs :

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|
| $f(x)$ | | | | | | |

3. Citer deux nombres qui ont la même image par $f$.
4. Quelle est l'image de $5$ par $f$ ?`,
      solution: `**1.** $f(3) = 3^2 - 2 \\times 3 = 9 - 6 = 3$ ; $f(-1) = (-1)^2 - 2 \\times (-1) = 1 + 2 = 3$ ; $f(0) = 0$.

**2.**

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|
| $f(x)$ | $8$ | $3$ | $0$ | $-1$ | $0$ | $3$ |

Par exemple : $f(-2) = 4 + 4 = 8$ ; $f(1) = 1 - 2 = -1$ ; $f(2) = 4 - 4 = 0$.

**3.** D'après le tableau, $-1$ et $3$ ont la même image $3$ (de même, $0$ et $2$ ont la même image $0$).

**4.** $f(5) = 25 - 10 = 15$.`
    },
    {
      id: "4P2-ds-03",
      title: "Deux programmes identiques ?",
      difficulty: 2,
      points: 5,
      statement: `Voici deux programmes de calcul :

| Programme A | Programme B |
|---|---|
| Choisir un nombre | Choisir un nombre |
| Ajouter $3$ | Le multiplier par $2$ |
| Multiplier le résultat par $4$ | Ajouter $6$ |
| | Multiplier le résultat par $2$ |

1. Appliquer les deux programmes au nombre $5$.
2. Appliquer les deux programmes au nombre $-1{,}5$.
3. Que peut-on conjecturer ?
4. On note $x$ le nombre choisi. Exprimer le résultat de chaque programme en fonction de $x$ et démontrer la conjecture.`,
      solution: `**1.** A : $5 + 3 = 8$, puis $8 \\times 4 = 32$. B : $5 \\times 2 = 10$, $10 + 6 = 16$, $16 \\times 2 = 32$.

**2.** A : $-1{,}5 + 3 = 1{,}5$, puis $1{,}5 \\times 4 = 6$. B : $-1{,}5 \\times 2 = -3$, $-3 + 6 = 3$, $3 \\times 2 = 6$.

**3.** On conjecture que les deux programmes donnent toujours le même résultat.

**4.** A : $4(x + 3) = 4x + 12$. B : $2(2x + 6) = 4x + 12$.
Les deux expressions sont égales pour tout nombre $x$ : la conjecture est démontrée.`
    },
    {
      id: "4P2-ds-04",
      title: "Lecture graphique",
      difficulty: 2,
      points: 5,
      statement: `La courbe ci-dessous représente une fonction $f$ définie pour les nombres $x$ compris entre $0$ et $8$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 380 300" width="380" height="300" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="30" y1="270" x2="30" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="70" y1="270" x2="70" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="110" y1="270" x2="110" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="150" y1="270" x2="150" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="190" y1="270" x2="190" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="230" y1="270" x2="230" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="270" y1="270" x2="270" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="310" y1="270" x2="310" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="350" y1="270" x2="350" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="270" x2="350" y2="270" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="230" x2="350" y2="230" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="190" x2="350" y2="190" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="150" x2="350" y2="150" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="110" x2="350" y2="110" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="70" x2="350" y2="70" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="30" x2="350" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="270" x2="350" y2="270" stroke="currentColor" stroke-width="1.5" /><line x1="30" y1="270" x2="30" y2="30" stroke="currentColor" stroke-width="1.5" /><text x="70" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">1</text><text x="110" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">2</text><text x="150" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">3</text><text x="190" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">4</text><text x="230" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">5</text><text x="270" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">6</text><text x="310" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">7</text><text x="350" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">8</text><text x="24" y="235" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">1</text><text x="24" y="195" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">2</text><text x="24" y="155" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">3</text><text x="24" y="115" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">4</text><text x="24" y="75" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">5</text><text x="24" y="35" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">6</text><text x="24" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">0</text><polyline points="30,230 110,70 270,230 350,150" fill="none" stroke="#2563eb" stroke-width="2.4" stroke-linejoin="round" /></svg></div>

1. Lire l'image de $0$, de $2$ et de $6$ par $f$.
2. Lire $f(4)$ et $f(8)$.
3. Déterminer graphiquement les antécédents de $3$ par $f$.
4. Le nombre $6$ a-t-il un antécédent par $f$ ? Justifier.
5. Pour quelle valeur de $x$ l'image est-elle la plus grande ?`,
      solution: `**1.** On lit les ordonnées des points de la courbe d'abscisses $0$, $2$ et $6$ : $f(0) = 1$, $f(2) = 5$, $f(6) = 1$.

**2.** $f(4) = 3$ et $f(8) = 3$.

**3.** On trace la droite horizontale d'ordonnée $3$ : elle coupe la courbe en trois points, d'abscisses $1$, $4$ et $8$. Les antécédents de $3$ sont **$1$, $4$ et $8$**.

**4.** La courbe ne monte jamais au-dessus de l'ordonnée $5$ : la droite horizontale d'ordonnée $6$ ne la coupe pas. **$6$ n'a pas d'antécédent** par $f$.

**5.** Le point le plus haut de la courbe a pour coordonnées $(2 ; 5)$ : l'image est la plus grande pour **$x = 2$** (elle vaut $5$).`
    },
    {
      id: "4P2-ds-05",
      title: "Un programme surprenant",
      difficulty: 3,
      points: 5,
      statement: `On considère le programme de calcul :
- choisir un nombre ;
- lui ajouter $4$ ;
- multiplier le résultat par le nombre choisi au départ ;
- soustraire le carré du nombre choisi au départ.

1. Appliquer ce programme aux nombres $3$ puis $-2$.
2. Quelle conjecture peut-on faire ?
3. On note $x$ le nombre choisi. Exprimer le résultat en fonction de $x$, puis démontrer la conjecture.
4. Quel nombre faut-il choisir pour obtenir $30$ ?`,
      solution: `**1.** Avec $3$ : $3 + 4 = 7$ ; $7 \\times 3 = 21$ ; $21 - 3^2 = 21 - 9 = 12$.
Avec $-2$ : $-2 + 4 = 2$ ; $2 \\times (-2) = -4$ ; $-4 - (-2)^2 = -4 - 4 = -8$.

**2.** $12 = 4 \\times 3$ et $-8 = 4 \\times (-2)$ : on conjecture que le résultat est toujours égal à **$4$ fois le nombre de départ**.

**3.** Résultat : $(x + 4) \\times x - x^2 = x^2 + 4x - x^2 = 4x$. La conjecture est démontrée.

**4.** $4x = 30$ donne $x = 7{,}5$. Il faut choisir $7{,}5$.`
    },
    {
      id: "4P2-ds-06",
      title: "Le prix d'une course en taxi",
      difficulty: 3,
      points: 5,
      statement: `Un taxi facture $4$ € de prise en charge, puis $1{,}60$ € par kilomètre parcouru. On note $f(x)$ le prix (en €) d'une course de $x$ km.
1. Exprimer $f(x)$ en fonction de $x$.
2. Calculer $f(10)$ et interpréter le résultat.
3. Une course a coûté $28$ €. Quelle distance a été parcourue ?
4. Le prix est-il proportionnel à la distance ? Justifier de deux façons différentes.
5. Une autre compagnie facture $2$ € par kilomètre, sans prise en charge. Pour quelle distance les deux compagnies proposent-elles le même prix ?`,
      solution: `**1.** $f(x) = 4 + 1{,}6x$.

**2.** $f(10) = 4 + 16 = 20$ : une course de $10$ km coûte $20$ €.

**3.** $4 + 1{,}6x = 28$ donne $1{,}6x = 24$, donc $x = 15$ : la course a fait $15$ km.

**4.** Première façon : $f(0) = 4 \\neq 0$, alors que pour $0$ km un prix proportionnel serait nul.
Deuxième façon : $\\dfrac{f(10)}{10} = 2$ et $\\dfrac{f(15)}{15} = \\dfrac{28}{15} \\approx 1{,}87$ ; les quotients ne sont pas égaux. **Le prix n'est pas proportionnel** à la distance (la représentation graphique est une droite qui ne passe pas par l'origine).

**5.** $4 + 1{,}6x = 2x$ donne $4 = 0{,}4x$, donc $x = 10$ : pour $10$ km, les deux prix valent $20$ €.`
    },
    {
      id: "4P2-ds-07",
      title: "Comparer deux programmes",
      difficulty: 4,
      points: 5,
      statement: `- **Programme A** : choisir un nombre ; le multiplier par $5$ ; soustraire $7$.
- **Programme B** : choisir un nombre ; lui soustraire $3$ ; multiplier le résultat par $2$ ; ajouter le nombre choisi au départ.

1. Appliquer les deux programmes au nombre $4$.
2. On note $x$ le nombre choisi. Montrer que le programme B donne $3x - 6$.
3. Quel nombre faut-il choisir pour que les deux programmes donnent le même résultat ? Vérifier.
4. Sam affirme : « Le programme B donne toujours un résultat plus petit que le programme A. » A-t-il raison ? Justifier.`,
      solution: `**1.** A : $4 \\times 5 - 7 = 13$. B : $4 - 3 = 1$ ; $1 \\times 2 = 2$ ; $2 + 4 = 6$.

**2.** B : $2(x - 3) + x = 2x - 6 + x = 3x - 6$.

**3.** A donne $5x - 7$. On résout $5x - 7 = 3x - 6$ : $2x = 1$, donc $x = 0{,}5$.
Vérification : A : $2{,}5 - 7 = -4{,}5$ ; B : $1{,}5 - 6 = -4{,}5$.

**4.** **Non** : contre-exemple avec $x = 0$. A donne $-7$ et B donne $-6$, or $-6 > -7$ : le résultat de B est plus grand. (En fait, B donne un résultat plus grand pour les nombres inférieurs à $0{,}5$.)`
    },
    {
      id: "4P2-ds-08",
      title: "Aire d'un rectangle de périmètre fixé",
      difficulty: 4,
      points: 6,
      statement: `On considère tous les rectangles de périmètre $20$ cm. On note $x$ la largeur (en cm) d'un tel rectangle, avec $0 < x < 10$.
1. Montrer que la longueur du rectangle vaut $10 - x$.
2. On note $A(x)$ l'aire du rectangle. Montrer que $A(x) = 10x - x^2$.
3. Recopier et compléter le tableau :

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|---|---|---|---|
| $A(x)$ | | | | | | | | | |

4. L'aire est-elle proportionnelle à la largeur ? Justifier.
5. Déterminer les antécédents de $21$ par $A$ dans le tableau. Interpréter.
6. D'après le tableau, quel rectangle semble avoir la plus grande aire ? Quelle est sa particularité ?`,
      solution: `**1.** Le demi-périmètre vaut $10$ cm, donc largeur + longueur $= 10$ et la longueur vaut $10 - x$.

**2.** $A(x) = x \\times (10 - x) = 10x - x^2$.

**3.**

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|---|---|---|---|
| $A(x)$ | $9$ | $16$ | $21$ | $24$ | $25$ | $24$ | $21$ | $16$ | $9$ |

**4.** Non : $\\dfrac{A(1)}{1} = 9$ et $\\dfrac{A(2)}{2} = 8$, les quotients ne sont pas égaux. (D'ailleurs l'aire diminue quand $x$ dépasse $5$.)

**5.** $A(3) = A(7) = 21$ : les antécédents de $21$ sont $3$ et $7$. Ils correspondent au même rectangle de $3$ cm sur $7$ cm, pris dans un sens ou dans l'autre.

**6.** L'aire maximale du tableau est $25$ cm², pour $x = 5$ : la longueur vaut alors $10 - 5 = 5$ cm. Le rectangle d'aire maximale est un **carré** de $5$ cm de côté.`
    },
    {
      id: "4P2-ds-09",
      title: "La location de vélos",
      difficulty: 1,
      points: 4,
      statement: `Un loueur de vélos fait payer $5$ € de frais fixes, plus $3$ € par heure de location. On note $f$ la fonction qui, au nombre $x$ d'heures de location, associe le prix à payer en euros.
1. Calculer le prix d'une location de $2$ h, puis d'une location de $4{,}5$ h.
2. Exprimer $f(x)$ en fonction de $x$.
3. Calculer $f(6)$. Traduire ce résultat par une phrase.
4. Léna a payé $26$ €. Combien de temps a-t-elle loué son vélo ? Comment appelle-t-on ce nombre pour la fonction $f$ ?
5. Le prix est-il proportionnel à la durée de location ? Justifier.`,
      solution: `**1.** $2$ h : $5 + 3 \\times 2 = 11$ €. $4{,}5$ h : $5 + 3 \\times 4{,}5 = 5 + 13{,}5 = 18{,}50$ €.

**2.** $f(x) = 3x + 5$.

**3.** $f(6) = 3 \\times 6 + 5 = 23$. Une location de $6$ heures coûte $23$ €.

**4.** On cherche $x$ tel que $3x + 5 = 26$ : $3x = 21$, donc $x = 7$. Léna a loué son vélo **$7$ heures**. Le nombre $7$ est un **antécédent** de $26$ par la fonction $f$.

**5.** Non : pour $2$ h on paie $11$ €, pour $4$ h on paie $f(4) = 17$ €. La durée double mais le prix ne double pas ($2 \\times 11 = 22 \\neq 17$). Le prix n'est donc pas proportionnel à la durée (à cause des frais fixes).`
    },
    {
      id: "4P2-ds-10",
      title: "Une fonction et ses antécédents",
      difficulty: 2,
      points: 5,
      statement: `On considère la fonction $g$ définie par $g(x) = x^2 - 4x$.
1. Calculer $g(0)$, $g(3)$ et $g(-1)$. Détailler les calculs.
2. Recopier et compléter le tableau de valeurs suivant.

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|---|
| $g(x)$ | | | | | | | |

3. À l'aide du tableau, donner deux antécédents de $0$ par $g$, puis deux antécédents de $5$.
4. Quel est, d'après le tableau, le plus petit nombre obtenu comme image ? Pour quelle valeur de $x$ ?
5. Montrer que $g(x) = x \\times (x - 4)$ pour tout nombre $x$, puis retrouver le résultat de la question 3 concernant le nombre $0$.`,
      solution: `**1.** $g(0) = 0^2 - 4 \\times 0 = 0$.
$g(3) = 3^2 - 4 \\times 3 = 9 - 12 = -3$.
$g(-1) = (-1)^2 - 4 \\times (-1) = 1 + 4 = 5$.

**2.**

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|---|
| $g(x)$ | $5$ | $0$ | $-3$ | $-4$ | $-3$ | $0$ | $5$ |

(Par exemple $g(2) = 4 - 8 = -4$ et $g(5) = 25 - 20 = 5$.)

**3.** $g(0) = 0$ et $g(4) = 0$ : $0$ et $4$ sont deux antécédents de $0$.
$g(-1) = 5$ et $g(5) = 5$ : $-1$ et $5$ sont deux antécédents de $5$.

**4.** La plus petite image du tableau est $-4$, obtenue pour $x = 2$.

**5.** En développant : $x \\times (x - 4) = x \\times x - x \\times 4 = x^2 - 4x = g(x)$.
Pour $x = 0$ : $0 \\times (0 - 4) = 0$. Pour $x = 4$ : $4 \\times (4 - 4) = 4 \\times 0 = 0$. Un produit dont un facteur est nul est nul : on retrouve que $0$ et $4$ ont pour image $0$.`
    },
    {
      id: "4P2-ds-11",
      title: "La boîte sans couvercle",
      difficulty: 3,
      points: 5,
      statement: `Dans une feuille de carton carrée de $20$ cm de côté, on découpe un carré de côté $x$ cm à chacun des quatre coins, puis on relève les bords pour former une boîte sans couvercle (un pavé droit).
1. Expliquer pourquoi la base de la boîte est un carré de côté $20 - 2x$ cm et pourquoi la hauteur de la boîte est $x$ cm.
2. Pourquoi faut-il que $x$ soit strictement compris entre $0$ et $10$ ?
3. On note $V$ la fonction qui à $x$ associe le volume de la boîte en cm³. Montrer que $V(x) = x \\times (20 - 2x)^2$.
4. Recopier et compléter le tableau suivant.

| $x$ (cm) | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $8$ |
|---|---|---|---|---|---|---|---|
| $V(x)$ (cm³) | | | | | | | |

5. Parmi les valeurs entières du tableau, laquelle donne la boîte de plus grand volume ?
6. Calculer $V(3{,}5)$. Que peut-on en conclure ?`,
      solution: `**1.** Sur chaque côté de $20$ cm, on retire deux carrés de côté $x$ (un à chaque extrémité) : il reste $20 - 2x$ cm. La base est donc un carré de côté $20 - 2x$. Les bords relevés ont pour largeur le côté $x$ des carrés découpés : la hauteur est $x$.

**2.** Il faut $x > 0$ pour qu'il y ait des bords. Il faut aussi $20 - 2x > 0$, c'est-à-dire $x < 10$, pour que la base existe (pour $x = 10$, les quatre carrés recouvrent toute la feuille).

**3.** Volume d'un pavé droit : aire de la base $\\times$ hauteur $= (20 - 2x)^2 \\times x = x \\times (20 - 2x)^2$.

**4.**

| $x$ (cm) | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $8$ |
|---|---|---|---|---|---|---|---|
| $V(x)$ (cm³) | $324$ | $512$ | $588$ | $576$ | $500$ | $384$ | $128$ |

Par exemple : $V(3) = 3 \\times 14^2 = 3 \\times 196 = 588$ ; $V(4) = 4 \\times 12^2 = 576$ ; $V(8) = 8 \\times 4^2 = 128$.

**5.** Parmi les valeurs entières, c'est $x = 3$ cm qui donne le plus grand volume : $588$ cm³.

**6.** $V(3{,}5) = 3{,}5 \\times (20 - 7)^2 = 3{,}5 \\times 169 = 591{,}5$ cm³.
Comme $591{,}5 > 588$, la valeur $x = 3$ ne donne pas le plus grand volume possible : en découpant des carrés dont le côté n'est pas entier, on peut obtenir une boîte encore plus grande.`
    },
    {
      id: "4P2-ds-12",
      title: "Défaire un programme de calcul",
      difficulty: 4,
      points: 6,
      statement: `On considère le programme de calcul suivant :
- choisir un nombre ;
- lui soustraire $3$ ;
- multiplier le résultat par $4$ ;
- ajouter au résultat le double du nombre choisi au départ.

On note $h$ la fonction qui, au nombre $x$ choisi, associe le résultat du programme.
1. Calculer $h(5)$ et $h(-2)$.
2. Montrer que $h(x) = 6x - 12$.
3. Quel nombre faut-il choisir pour obtenir $0$ ? pour obtenir $33$ ?
4. Montrer que, si le nombre de départ est un nombre entier, le résultat est toujours un multiple de $6$.
5. Écrire un programme de calcul en deux étapes qui, à partir du résultat de ce programme, permet de retrouver le nombre de départ. Le tester avec le résultat $33$.
6. Existe-t-il un nombre de départ égal au résultat obtenu ? Si oui, lequel ?`,
      solution: `**1.** Avec $5$ : $5 - 3 = 2$ ; $2 \\times 4 = 8$ ; $8 + 2 \\times 5 = 18$. Donc $h(5) = 18$.
Avec $-2$ : $-2 - 3 = -5$ ; $-5 \\times 4 = -20$ ; $-20 + 2 \\times (-2) = -24$. Donc $h(-2) = -24$.

**2.** $h(x) = (x - 3) \\times 4 + 2x = 4x - 12 + 2x = 6x - 12$.
(Vérification : $6 \\times 5 - 12 = 18$ et $6 \\times (-2) - 12 = -24$.)

**3.** $6x - 12 = 0$ donne $6x = 12$, donc $x = 2$.
$6x - 12 = 33$ donne $6x = 45$, donc $x = 7{,}5$.

**4.** $6x - 12 = 6 \\times x - 6 \\times 2 = 6 \\times (x - 2)$. Si $x$ est entier, $x - 2$ est entier, donc $h(x)$ est un multiple de $6$.

**5.** Le programme multiplie par $6$ puis soustrait $12$. Pour revenir en arrière, on effectue les opérations inverses dans l'ordre inverse :
- ajouter $12$ au résultat ;
- diviser par $6$.

Test : $33 + 12 = 45$ et $45 \\div 6 = 7{,}5$ : on retrouve bien le nombre de départ de la question 3.

**6.** On cherche $x$ tel que $6x - 12 = x$, soit $5x = 12$, donc $x = \\dfrac{12}{5} = 2{,}4$.
Vérification : $6 \\times 2{,}4 - 12 = 14{,}4 - 12 = 2{,}4$. Oui : en choisissant $2{,}4$, on obtient $2{,}4$.`
    }
  ],
  "4A1": [
    {
      id: "4A1-ds-01",
      title: "Grand ou petit ?",
      difficulty: 1,
      points: 4,
      statement: `On considère le script suivant :

\`\`\`scratch
quand drapeau cliqué
demander [Choisis un nombre] et attendre
mettre [x] à (réponse)
mettre [y] à ((2 × x) − 3)
si (y > 10) alors
    dire [Grand]
sinon
    dire [Petit]
\`\`\`

1. Qu'affiche le lutin si l'on saisit $5$ ? $8$ ? $6{,}5$ ? Justifier par les calculs.
2. Quel est le plus petit nombre entier pour lequel le lutin affiche « Grand » ?
3. Quelle est la valeur de la variable $y$ si l'on saisit $-4$ ? Qu'affiche alors le lutin ?`,
      solution: `**1.**
- Avec $5$ : $y = 2 \\times 5 - 3 = 7$. Comme $7 > 10$ est faux, le lutin dit « Petit ».
- Avec $8$ : $y = 16 - 3 = 13$. Comme $13 > 10$ est vrai, le lutin dit « Grand ».
- Avec $6{,}5$ : $y = 13 - 3 = 10$. La condition $10 > 10$ est fausse (il faut être strictement supérieur), le lutin dit « Petit ».

**2.** Avec $6$ : $y = 9$ (Petit) ; avec $7$ : $y = 11 > 10$ (Grand). Le plus petit entier est **$7$**.

**3.** $y = 2 \\times (-4) - 3 = -11$. Comme $-11 > 10$ est faux, le lutin dit « Petit ».`
    },
    {
      id: "4A1-ds-02",
      title: "Suivre l'évolution des variables",
      difficulty: 1,
      points: 4,
      statement: `On considère le script suivant :

\`\`\`scratch
quand drapeau cliqué
mettre [a] à (3)
mettre [b] à (5)
mettre [a] à (a + b)
mettre [b] à (a − b)
mettre [a] à (a − b)
dire (regrouper (a) et (b))
\`\`\`

1. Recopier et compléter un tableau donnant les valeurs de $a$ et $b$ après chaque instruction « mettre ».
2. Quelles sont les valeurs finales de $a$ et de $b$ ?
3. Reprendre le script en remplaçant $3$ par $-2$ et $5$ par $7$. Que remarque-t-on ?
4. À quoi sert ce script ?`,
      solution: `**1.**

| Instruction | $a$ | $b$ |
|---|---|---|
| mettre a à 3 | $3$ | — |
| mettre b à 5 | $3$ | $5$ |
| mettre a à a + b | $8$ | $5$ |
| mettre b à a − b | $8$ | $3$ |
| mettre a à a − b | $5$ | $3$ |

**2.** À la fin, $a = 5$ et $b = 3$.

**3.** $a = -2$, $b = 7$ ; puis $a = -2 + 7 = 5$ ; $b = 5 - 7 = -2$ ; $a = 5 - (-2) = 7$. À la fin, $a = 7$ et $b = -2$.

**4.** Dans les deux cas, les valeurs de $a$ et de $b$ ont été **échangées** : ce script permet d'échanger le contenu de deux variables sans utiliser de troisième variable.`
    },
    {
      id: "4A1-ds-03",
      title: "Tracer des polygones réguliers",
      difficulty: 2,
      points: 5,
      statement: `On considère le script suivant (le lutin part orienté vers la droite) :

\`\`\`scratch
quand drapeau cliqué
effacer tout
stylo en position d'écriture
répéter 5 fois
    avancer de 60 pas
    tourner ↻ de 72 degrés
\`\`\`

1. Quelle figure obtient-on ? Justifier.
2. Calculer la longueur totale du tracé.
3. Quelles modifications faut-il apporter au script pour tracer un hexagone régulier de côté $60$ pas ?
4. Nina veut tracer un triangle équilatéral : elle écrit « répéter 3 fois », « avancer de 60 pas » et « tourner ↻ de 60 degrés ». Obtient-elle un triangle ? Corriger son script en justifiant.`,
      solution: `**1.** Le lutin trace $5$ segments de même longueur, en tournant à chaque fois du même angle de $72^\\circ$ ; au total il tourne de $5 \\times 72 = 360^\\circ$ et revient à son point de départ. On obtient un **pentagone régulier** de côté $60$ pas.

**2.** $5 \\times 60 = 300$ pas.

**3.** Il faut « répéter 6 fois » et « tourner ↻ de 60 degrés » (car $360 \\div 6 = 60$).

**4.** Non : en tournant de $60^\\circ$ trois fois, le lutin ne tourne que de $180^\\circ$ au total et la figure ne se referme pas. L'angle dont il faut tourner est l'angle « extérieur » $180 - 60 = 120^\\circ$ (et $3 \\times 120 = 360$). Il faut écrire « tourner ↻ de 120 degrés ».`
    },
    {
      id: "4A1-ds-04",
      title: "Tarifs d'un cinéma",
      difficulty: 2,
      points: 5,
      statement: `Un cinéma calcule le prix d'une place avec le script suivant :

\`\`\`scratch
quand drapeau cliqué
demander [Quel est ton âge ?] et attendre
mettre [âge] à (réponse)
si (âge < 14) alors
    mettre [prix] à (5)
sinon
    si (âge < 60) alors
        mettre [prix] à (9)
    sinon
        mettre [prix] à (7)
dire (regrouper [Prix en euros : ] et (prix))
\`\`\`

1. Quel prix affiche le script pour une personne de $12$ ans ? de $14$ ans ? de $35$ ans ? de $60$ ans ?
2. Écrire une phrase qui explique la grille de tarifs de ce cinéma.
3. Une famille est composée de deux adultes de $40$ et $42$ ans, de deux enfants de $8$ et $15$ ans et d'une grand-mère de $65$ ans. Combien paie-t-elle au total ?
4. Le cinéma veut ajouter un tarif de $4$ € pour les enfants de moins de $6$ ans. Où et comment modifier le script ?`,
      solution: `**1.**
- $12$ ans : $12 < 14$ est vrai, prix $5$ €.
- $14$ ans : $14 < 14$ est faux ; $14 < 60$ est vrai, prix $9$ €.
- $35$ ans : $35 < 14$ faux, $35 < 60$ vrai, prix $9$ €.
- $60$ ans : $60 < 14$ faux, $60 < 60$ faux, prix $7$ €.

**2.** La place coûte $5$ € pour les moins de $14$ ans, $9$ € de $14$ à $59$ ans et $7$ € à partir de $60$ ans.

**3.** $9 + 9 + 5 + 9 + 7 = 39$ €. (L'enfant de $15$ ans paie le plein tarif.)

**4.** Dans le premier bloc « si (âge < 14) alors », on remplace « mettre prix à 5 » par un nouveau test : « si (âge < 6) alors mettre prix à 4, sinon mettre prix à 5 ».`
    },
    {
      id: "4A1-ds-05",
      title: "Une boucle qui additionne",
      difficulty: 3,
      points: 5,
      statement: `On considère le script suivant :

\`\`\`scratch
quand drapeau cliqué
mettre [somme] à (0)
mettre [n] à (1)
répéter 10 fois
    ajouter (n) à [somme]
    ajouter 2 à [n]
dire (somme)
\`\`\`

1. Recopier et compléter le tableau de suivi des variables pour les trois premiers passages dans la boucle.

| Passage | $1$ | $2$ | $3$ |
|---|---|---|---|
| somme (après) | | | |
| n (après) | | | |

2. Quels nombres sont successivement ajoutés à la variable somme ?
3. Quel nombre le lutin dit-il à la fin ? Quelle est la valeur finale de $n$ ?
4. Que dirait le lutin si l'on remplaçait « répéter 10 fois » par « répéter 20 fois » ? Quelle conjecture peut-on faire ?`,
      solution: `**1.**

| Passage | $1$ | $2$ | $3$ |
|---|---|---|---|
| somme (après) | $1$ | $4$ | $9$ |
| n (après) | $3$ | $5$ | $7$ |

**2.** On ajoute successivement $1$, $3$, $5$, $7$, …, c'est-à-dire les nombres impairs ; au $10^\\text{e}$ passage, on ajoute $19$.

**3.** $1 + 3 + 5 + \\ldots + 19 = 100$. Le lutin dit **$100$**. La variable $n$ a été augmentée $10$ fois de $2$ : $n = 1 + 20 = 21$.

**4.** On additionne les $20$ premiers nombres impairs, de $1$ à $39$ : la somme vaut $400$. On remarque $100 = 10^2$ et $400 = 20^2$ : on conjecture que la somme des $k$ premiers nombres impairs est égale à $k^2$.`
    },
    {
      id: "4A1-ds-06",
      title: "Déboguer le jeu du nombre mystère",
      difficulty: 3,
      points: 5,
      statement: `Léna a programmé un jeu : l'ordinateur choisit un nombre entier au hasard entre $1$ et $100$ et le joueur doit le deviner. Voici son script :

\`\`\`scratch
quand drapeau cliqué
mettre [mystère] à (nombre aléatoire entre (1) et (100))
répéter jusqu'à (réponse = mystère)
    mettre [essais] à (0)
    demander [Propose un nombre] et attendre
    ajouter 1 à [essais]
    si (réponse < mystère) alors
        dire [C'est plus grand] pendant 2 secondes
    sinon
        dire [C'est plus petit] pendant 2 secondes
dire (regrouper [Bravo ! Nombre d'essais : ] et (essais))
\`\`\`

1. Le nombre mystère est $37$. Le joueur propose $50$, puis $25$, puis $37$. Écrire tous les messages affichés par le lutin.
2. Le compteur d'essais est faux. Expliquer pourquoi et proposer une correction.
3. Le lutin dit un message erroné lorsque le joueur trouve le bon nombre. Lequel ? Proposer une correction.
4. En procédant toujours par « coupure en deux », expliquer pourquoi on peut toujours trouver le nombre en $7$ essais au plus.`,
      solution: `**1.** $50$ : $50 < 37$ est faux, le lutin dit « C'est plus petit ». $25$ : $25 < 37$ est vrai, il dit « C'est plus grand ». $37$ : $37 < 37$ est faux, il dit « C'est plus petit » ; puis la boucle s'arrête et il dit « Bravo ! Nombre d'essais : 1 ».

**2.** L'instruction « mettre essais à 0 » est **à l'intérieur** de la boucle : le compteur est remis à $0$ à chaque essai, puis augmenté de $1$, donc il vaut toujours $1$. Il faut placer « mettre essais à 0 » **avant** la boucle (juste après avoir choisi le nombre mystère).

**3.** Quand le joueur trouve le nombre, la condition « réponse < mystère » est fausse et le lutin dit « C'est plus petit », ce qui est faux. Correction : dans le « sinon », ajouter un test « si (réponse > mystère) alors dire C'est plus petit » ; ainsi rien n'est dit en cas d'égalité.

**4.** Chaque essai bien choisi (au milieu des valeurs encore possibles) élimine au moins la moitié des nombres restants : $100 \\to 50 \\to 25 \\to 12 \\to 6 \\to 3 \\to 1$. Après $6$ essais, il reste au plus $1$ nombre possible ; le $7^\\text{e}$ essai est donc le bon (on remarque que $2^7 = 128 \\geqslant 100$).`
    },
    {
      id: "4A1-ds-07",
      title: "Le prix d'un colis",
      difficulty: 4,
      points: 5,
      statement: `Un transporteur calcule le prix d'envoi d'un colis avec le script suivant (la masse $m$ est en kg et le prix en euros) :

\`\`\`scratch
quand drapeau cliqué
demander [Masse du colis en kg ?] et attendre
mettre [m] à (réponse)
si (m > 10) alors
    dire [Colis refusé]
sinon
    si (m < 1) alors
        mettre [prix] à (5)
    sinon
        mettre [prix] à (5 + (2 × (m − 1)))
    dire (regrouper [Prix : ] et (prix))
\`\`\`

1. Que dit le lutin pour un colis de $0{,}5$ kg ? de $3$ kg ? de $10$ kg ? de $12$ kg ?
2. Quelle est la masse d'un colis dont l'envoi coûte $15$ € ? Mettre en équation.
3. Quel est le prix maximal d'un envoi ? Justifier.
4. Le transporteur décide d'accepter les colis de plus de $10$ kg avec un supplément de $10$ € par rapport au calcul habituel. Quelle(s) instruction(s) faut-il modifier ? Combien coûterait alors l'envoi d'un colis de $12$ kg ?`,
      solution: `**1.**
- $0{,}5$ kg : $0{,}5 > 10$ est faux, puis $0{,}5 < 1$ est vrai : prix $5$ €.
- $3$ kg : prix $5 + 2 \\times (3 - 1) = 5 + 4 = 9$ €.
- $10$ kg : $10 > 10$ est faux ; prix $5 + 2 \\times 9 = 23$ €.
- $12$ kg : $12 > 10$ est vrai : « Colis refusé ».

**2.** Le prix dépasse $5$ €, donc $m \\geqslant 1$ et $5 + 2(m - 1) = 15$. Alors $2(m - 1) = 10$, $m - 1 = 5$, $m = 6$ kg. Vérification : $5 + 2 \\times 5 = 15$.

**3.** Le prix augmente avec la masse et la masse acceptée est au plus $10$ kg : le prix maximal est $23$ € (colis de $10$ kg).

**4.** On remplace « dire Colis refusé » par « mettre prix à (5 + 2 × (m − 1) + 10) » suivi de l'affichage du prix (ou on déplace le « dire » après le grand bloc « si … sinon »). Pour $12$ kg : $5 + 2 \\times 11 + 10 = 37$ €.`
    },
    {
      id: "4A1-ds-08",
      title: "Une spirale",
      difficulty: 4,
      points: 6,
      statement: `Le lutin est placé au point de coordonnées $(0 ; 0)$ et orienté vers la droite (orientation $90$). L'axe des abscisses est orienté vers la droite et l'axe des ordonnées vers le haut ; un pas correspond à une unité.

\`\`\`scratch
quand drapeau cliqué
aller à x: (0) y: (0)
s'orienter à (90)
mettre [longueur] à (20)
stylo en position d'écriture
répéter 5 fois
    avancer de (longueur) pas
    tourner ↻ de (90) degrés
    ajouter 10 à [longueur]
\`\`\`

1. Donner les longueurs des cinq segments tracés, puis la longueur totale du tracé.
2. Quelle est la valeur de la variable longueur à la fin du script ?
3. Déterminer les coordonnées des extrémités de chaque segment. En déduire la position finale du lutin.
4. Dans quelle direction le lutin est-il orienté à la fin ?
5. Quelle(s) modification(s) faut-il faire pour que le script trace un carré de côté $20$ pas ?`,
      solution: `**1.** Les longueurs sont $20$, $30$, $40$, $50$ et $60$ pas. Longueur totale : $20 + 30 + 40 + 50 + 60 = 200$ pas.

**2.** On ajoute $10$ cinq fois à $20$ : longueur $= 70$.

**3.** Le lutin tourne de $90^\\circ$ dans le sens des aiguilles d'une montre après chaque segment : droite, puis bas, puis gauche, puis haut, puis droite.
- $20$ vers la droite : $(0 ; 0) \\to (20 ; 0)$ ;
- $30$ vers le bas : $(20 ; 0) \\to (20 ; -30)$ ;
- $40$ vers la gauche : $(20 ; -30) \\to (-20 ; -30)$ ;
- $50$ vers le haut : $(-20 ; -30) \\to (-20 ; 20)$ ;
- $60$ vers la droite : $(-20 ; 20) \\to (40 ; 20)$.

Position finale : **$(40 ; 20)$**.

**4.** Après le dernier segment, le lutin tourne encore de $90^\\circ$ : il est orienté **vers le bas** (orientation $180$).

**5.** Il faut supprimer l'instruction « ajouter 10 à longueur » (pour que tous les côtés mesurent $20$ pas) et remplacer « répéter 5 fois » par « répéter 4 fois ».`
    },
    {
      id: "4A1-ds-09",
      title: "Suivre le lutin dans le repère",
      difficulty: 1,
      points: 4,
      statement: `La scène de Scratch est munie d'un repère : $x$ est l'abscisse du lutin et $y$ son ordonnée. On considère le script suivant :

\`\`\`scratch
quand drapeau cliqué
aller à x: (-100) y: (50)
s'orienter à (90)
avancer de (80)
ajouter (-30) à y
répéter (3) fois
    ajouter (40) à x
    ajouter (10) à y
\`\`\`

L'instruction « s'orienter à 90 » tourne le lutin vers la droite.
1. Donner les coordonnées du lutin après l'instruction « avancer de 80 », puis après « ajouter -30 à y ».
2. Recopier et compléter le tableau des coordonnées du lutin à la fin de chaque passage dans la boucle.

| Passage | $1$ | $2$ | $3$ |
|---|---|---|---|
| $x$ | | | |
| $y$ | | | |

3. Quelles sont les coordonnées finales du lutin ?
4. Par quel nombre faut-il remplacer le $3$ de « répéter 3 fois » pour que le lutin termine avec une abscisse égale à $180$ ? Quelle serait alors son ordonnée ?`,
      solution: `**1.** Le lutin part de $(-100 ; 50)$, tourné vers la droite. « Avancer de 80 » augmente son abscisse de $80$ : il arrive en $(-20 ; 50)$.
« Ajouter -30 à y » : $50 - 30 = 20$, il est en $(-20 ; 20)$.

**2.** À chaque passage, $x$ augmente de $40$ et $y$ augmente de $10$.

| Passage | $1$ | $2$ | $3$ |
|---|---|---|---|
| $x$ | $20$ | $60$ | $100$ |
| $y$ | $30$ | $40$ | $50$ |

**3.** Le lutin termine en $(100 ; 50)$.

**4.** Avant la boucle, $x = -20$. Il faut $-20 + 40 \\times n = 180$, soit $40n = 200$ et $n = 5$. On remplace $3$ par **$5$**.
L'ordonnée vaut alors $20 + 5 \\times 10 = 70$.`
    },
    {
      id: "4A1-ds-10",
      title: "Pair ou impair ?",
      difficulty: 2,
      points: 5,
      statement: `Dans Scratch, l'opérateur « $a$ modulo $b$ » donne le **reste** de la division euclidienne de $a$ par $b$. On considère le script suivant :

\`\`\`scratch
quand drapeau cliqué
demander [Donne un nombre entier positif] et attendre
mettre [n] à (réponse)
si (((n) modulo (2)) = (0)) alors
    dire [Pair]
sinon
    dire [Impair]
\`\`\`

1. Calculer $27$ modulo $2$, puis $27$ modulo $5$.
2. Qu'affiche le lutin si l'on saisit $14$ ? $27$ ? $0$ ? Justifier.
3. Modifier le script pour que le lutin dise « Multiple de 3 » ou « Pas multiple de 3 ».
4. Léo veut que le lutin dise « Multiple de 10 » lorsque le nombre saisi est un multiple de $10$.
   a) Écrire une condition utilisant l'opérateur modulo qui convient.
   b) Mia propose la condition « $(n$ modulo $2 = 0)$ et $(n$ modulo $5 = 0)$ ». Sa condition convient-elle aussi ? Justifier.`,
      solution: `**1.** $27 = 2 \\times 13 + 1$, donc $27$ modulo $2$ vaut $1$.
$27 = 5 \\times 5 + 2$, donc $27$ modulo $5$ vaut $2$.

**2.**
- $14 = 2 \\times 7 + 0$ : le reste vaut $0$, la condition est vraie, le lutin dit « Pair ».
- $27$ : le reste vaut $1$, la condition est fausse, le lutin dit « Impair ».
- $0 = 2 \\times 0 + 0$ : le reste vaut $0$, le lutin dit « Pair » (c'est correct : $0$ est un nombre pair).

**3.** On remplace le test par « $(n$ modulo $3) = 0$ », le premier message par « Multiple de 3 » et le second par « Pas multiple de 3 ». En effet, $n$ est un multiple de $3$ exactement lorsque le reste de sa division par $3$ est nul.

**4. a)** La condition « $(n$ modulo $10) = 0$ » convient.

**b)** Oui. Si $n$ est multiple de $10$, il est multiple de $2$ et de $5$ (car $10 = 2 \\times 5$), donc la condition de Mia est vraie.
Réciproquement, si $n$ est multiple de $5$, son chiffre des unités est $0$ ou $5$ ; s'il est aussi pair, son chiffre des unités est pair, donc c'est $0$ : $n$ est un multiple de $10$. Les deux conditions sont donc équivalentes.`
    },
    {
      id: "4A1-ds-11",
      title: "Les rebonds de la balle",
      difficulty: 3,
      points: 5,
      statement: `On lâche une balle d'une hauteur de $200$ cm. À chaque rebond, elle remonte aux $\\dfrac{6}{10}$ de la hauteur précédente. Le script suivant compte les rebonds :

\`\`\`scratch
quand drapeau cliqué
mettre [hauteur] à (200)
mettre [rebonds] à (0)
répéter jusqu'à ((hauteur) < (10))
    mettre [hauteur] à (((hauteur) × (6)) / (10))
    ajouter 1 à [rebonds]
dire (rebonds)
\`\`\`

1. Quelle est la valeur de la variable hauteur après le premier passage dans la boucle ?
2. Recopier et compléter un tableau donnant les valeurs de hauteur et de rebonds après chaque passage dans la boucle, jusqu'à l'arrêt.
3. Qu'affiche le lutin à la fin ? Interpréter ce nombre.
4. Zoé remplace la condition par « répéter jusqu'à (hauteur = 0) ». Que se passe-t-il ? Justifier.
5. On remplace $6$ par $5$ dans le script (la balle remonte à la moitié de la hauteur précédente). Qu'affiche alors le lutin ?`,
      solution: `**1.** $200 \\times 6 \\div 10 = 120$ cm.

**2.** À chaque passage, la hauteur est multipliée par $0{,}6$ et rebonds augmente de $1$.

| Passage | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| hauteur | $120$ | $72$ | $43{,}2$ | $25{,}92$ | $15{,}552$ | $9{,}3312$ |
| rebonds | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |

Après le $5^\\text{e}$ passage, $15{,}552 < 10$ est faux : la boucle continue. Après le $6^\\text{e}$, $9{,}3312 < 10$ est vrai : la boucle s'arrête.

**3.** Le lutin dit **$6$** : c'est le nombre de rebonds nécessaires pour que la balle remonte à moins de $10$ cm.

**4.** On multiplie toujours la hauteur par $0{,}6$ : un produit de deux nombres non nuls n'est jamais nul, donc la hauteur ne vaut jamais exactement $0$. La condition n'est jamais vraie et **la boucle ne s'arrête jamais** (en théorie).

**5.** Les hauteurs successives sont $100$ ; $50$ ; $25$ ; $12{,}5$ ; $6{,}25$. La condition devient vraie au $5^\\text{e}$ passage : le lutin dit **$5$**.`
    },
    {
      id: "4A1-ds-12",
      title: "Compter les diviseurs",
      difficulty: 4,
      points: 6,
      statement: `On rappelle que « $a$ modulo $b$ » donne le reste de la division euclidienne de $a$ par $b$. On considère le script suivant :

\`\`\`scratch
quand drapeau cliqué
demander [Donne un nombre entier supérieur ou égal à 1] et attendre
mettre [n] à (réponse)
mettre [compteur] à (0)
mettre [d] à (1)
répéter (n) fois
    si (((n) modulo (d)) = (0)) alors
        ajouter 1 à [compteur]
    ajouter 1 à [d]
dire (compteur)
\`\`\`

1. On saisit $6$. Recopier et compléter le tableau suivant, qui décrit chaque passage dans la boucle.

| Passage | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $d$ au début du passage | | | | | | |
| $6$ modulo $d$ | | | | | | |
| compteur à la fin du passage | | | | | | |

2. Qu'affiche le lutin pour $n = 6$ ? Que représente ce nombre ?
3. Sans refaire de tableau, qu'affiche le lutin pour $n = 12$ ? pour $n = 13$ ? pour $n = 1$ ? Justifier.
4. Pour quels nombres entiers compris entre $20$ et $30$ le lutin affiche-t-il $2$ ?
5. On remplace l'instruction « ajouter 1 à compteur » par « ajouter (d) à compteur ». Que calcule alors le script ? Qu'affiche-t-il pour $n = 6$, puis pour $n = 28$ ?`,
      solution: `**1.**

| Passage | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $d$ au début du passage | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
| $6$ modulo $d$ | $0$ | $0$ | $0$ | $2$ | $1$ | $0$ |
| compteur à la fin du passage | $1$ | $2$ | $3$ | $3$ | $3$ | $4$ |

**2.** Le lutin dit **$4$**. Le compteur augmente de $1$ chaque fois que le reste de la division de $n$ par $d$ est nul, c'est-à-dire chaque fois que $d$ est un diviseur de $n$. Comme $d$ prend toutes les valeurs entières de $1$ à $n$, le script affiche le **nombre de diviseurs** de $n$ : $6$ a $4$ diviseurs ($1$, $2$, $3$, $6$).

**3.**
- $12$ a pour diviseurs $1$, $2$, $3$, $4$, $6$, $12$ : le lutin dit $6$.
- $13$ n'est divisible que par $1$ et $13$ : le lutin dit $2$.
- Pour $n = 1$, la boucle tourne une fois avec $d = 1$, et $1$ modulo $1$ vaut $0$ : le lutin dit $1$.

**4.** Le lutin dit $2$ pour les nombres qui ont exactement deux diviseurs, $1$ et eux-mêmes. Entre $20$ et $30$ : $21 = 3 \\times 7$, $22 = 2 \\times 11$, $24$, $25 = 5 \\times 5$, $26$, $27 = 3 \\times 9$, $28$, $30$ ont d'autres diviseurs. Il reste **$23$ et $29$**.

**5.** Le script additionne alors les diviseurs de $n$ : il calcule la **somme des diviseurs** de $n$.
Pour $6$ : $1 + 2 + 3 + 6 = 12$. Pour $28$ (diviseurs $1$, $2$, $4$, $7$, $14$, $28$) : $1 + 2 + 4 + 7 + 14 + 28 = 56$.`
    }
  ]
});
