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
    },
    {
      id: "4N1-ds-13",
      title: "Une table de multiplication de relatifs",
      difficulty: 1,
      points: 4,
      statement: `1. Recopier et compléter la table de multiplication suivante : chaque case contient le produit du nombre de sa ligne par le nombre de sa colonne.

| $\\times$ | $-4$ | $2$ | $-10$ |
|---|---|---|---|
| $-3$ | … | … | … |
| $5$ | … | … | … |
| $-0{,}5$ | … | … | … |

2. Calculer : $A = (-36) \\div (-4)$ ; $B = 4{,}8 \\div (-1{,}2)$ ; $C = (-2{,}5) \\div 0{,}5$.
3. Trouver le nombre manquant : $(-6) \\times \\ldots = -1{,}8$. Justifier.`,
      solution: `**1.** On applique la règle des signes : deux facteurs de même signe donnent un produit positif, deux facteurs de signes contraires un produit négatif.

| $\\times$ | $-4$ | $2$ | $-10$ |
|---|---|---|---|
| $-3$ | $12$ | $-6$ | $30$ |
| $5$ | $-20$ | $10$ | $-50$ |
| $-0{,}5$ | $2$ | $-1$ | $5$ |

Par exemple, $(-0{,}5) \\times (-10) = +5$ (même signe) et $5 \\times (-4) = -20$ (signes contraires).

**2.** La règle des signes est la même pour la division.
- $A = (-36) \\div (-4) = 9$ (même signe).
- $B = 4{,}8 \\div (-1{,}2) = -4$ (signes contraires).
- $C = (-2{,}5) \\div 0{,}5 = -5$ (signes contraires).

**3.** Le nombre cherché est $(-1{,}8) \\div (-6) = 0{,}3$ (même signe, donc positif).
Vérification : $(-6) \\times 0{,}3 = -1{,}8$.`
    },
    {
      id: "4N1-ds-14",
      title: "Un programme de calcul à remonter",
      difficulty: 2,
      points: 5,
      statement: `On considère le programme de calcul suivant :
- choisir un nombre ;
- le multiplier par $-3$ ;
- ajouter $5$ au résultat ;
- multiplier le tout par $-2$.

1. Vérifier que, si l'on choisit $-4$, on obtient $-34$.
2. Appliquer le programme au nombre $2{,}5$, puis au nombre $-1{,}5$.
3. Le résultat obtenu est $14$. En « remontant » le programme étape par étape (opérations inverses), retrouver le nombre choisi au départ. Vérifier.`,
      solution: `**1.** $(-4) \\times (-3) = 12$ ; $12 + 5 = 17$ ; $17 \\times (-2) = -34$. On obtient bien $-34$.

**2.** Avec $2{,}5$ : $2{,}5 \\times (-3) = -7{,}5$ ; $-7{,}5 + 5 = -2{,}5$ ; $(-2{,}5) \\times (-2) = 5$. Résultat : $5$.
Avec $-1{,}5$ : $(-1{,}5) \\times (-3) = 4{,}5$ ; $4{,}5 + 5 = 9{,}5$ ; $9{,}5 \\times (-2) = -19$. Résultat : $-19$.

**3.** On part de la fin et on effectue les opérations inverses, dans l'ordre inverse :
- la dernière étape est « multiplier par $-2$ » : avant, on avait $14 \\div (-2) = -7$ ;
- l'étape précédente est « ajouter $5$ » : avant, on avait $-7 - 5 = -12$ ;
- la première étape est « multiplier par $-3$ » : le nombre choisi est $(-12) \\div (-3) = 4$.

Vérification : $4 \\times (-3) = -12$ ; $-12 + 5 = -7$ ; $(-7) \\times (-2) = 14$. Le nombre choisi est **$4$**.`
    },
    {
      id: "4N1-ds-15",
      title: "Distances sur une droite graduée",
      difficulty: 3,
      points: 5,
      statement: `Sur une droite graduée, le point $A$ a pour abscisse $-7{,}4$ et le point $B$ a pour abscisse $3{,}6$.
On rappelle que la distance entre deux points d'une droite graduée s'obtient en soustrayant la plus petite abscisse de la plus grande.
1. Calculer la distance $AB$.
2. Le point $M$ est le milieu du segment $[AB]$. Calculer son abscisse de deux façons :
   a) en partant de $A$ et en avançant de la moitié de la distance $AB$ ;
   b) en calculant la moyenne des abscisses de $A$ et de $B$.
3. Le point $C$ est le symétrique de $A$ par rapport à $B$. Calculer l'abscisse de $C$.
4. Trouver les abscisses des deux points situés à la distance $2{,}5$ du point $M$.`,
      solution: `**1.** $AB = 3{,}6 - (-7{,}4) = 3{,}6 + 7{,}4 = 11$.

**2. a)** La moitié de $AB$ vaut $11 \\div 2 = 5{,}5$. En partant de $A$ : $-7{,}4 + 5{,}5 = -1{,}9$.

**b)** $\\dfrac{-7{,}4 + 3{,}6}{2} = \\dfrac{-3{,}8}{2} = -1{,}9$.
Les deux méthodes donnent la même abscisse : $M$ a pour abscisse $-1{,}9$.

**3.** $B$ est le milieu de $[AC]$ : pour aller de $B$ à $C$, on avance de la même distance que de $A$ à $B$, soit $11$. L'abscisse de $C$ est $3{,}6 + 11 = 14{,}6$.

**4.** On recule ou on avance de $2{,}5$ à partir de $M$ :
$-1{,}9 - 2{,}5 = -4{,}4$ et $-1{,}9 + 2{,}5 = 0{,}6$.
Les deux points ont pour abscisses $-4{,}4$ et $0{,}6$.`
    },
    {
      id: "4N1-ds-16",
      title: "Le signe sans connaître les nombres",
      difficulty: 4,
      points: 6,
      statement: `On considère deux nombres relatifs non nuls : $a$ est **négatif** et $b$ est **positif**. On ne connaît pas leurs valeurs.
1. Donner, en justifiant, le signe de chacun des nombres suivants :
   a) $a \\times b$
   b) $-a$
   c) $a \\times a \\times b$
   d) $\\dfrac{-a}{b}$
2. a) Expliquer pourquoi $a - b$ est négatif. (On pourra écrire $a - b = a + (-b)$.)
   b) En déduire le signe de $b - a$, puis celui de $(a - b) \\times (b - a)$.
3. Vérifier les réponses des questions 1 et 2 avec $a = -2$ et $b = 3$.
4. Lucas affirme : « $a + b$ est toujours négatif. » A-t-il raison ? Justifier à l'aide d'exemples.`,
      solution: `**1. a)** $a$ et $b$ sont de signes contraires : $a \\times b$ est **négatif**.
**b)** $a$ est négatif, donc son opposé $-a$ est **positif**.
**c)** $a \\times a$ est le produit de deux nombres de même signe : il est positif. Puis (positif) $\\times b$ (positif) donne un nombre **positif**.
**d)** $-a$ est positif et $b$ est positif : le quotient $\\dfrac{-a}{b}$ est **positif**.

**2. a)** $a - b = a + (-b)$. Or $a$ est négatif et $-b$ est négatif (opposé d'un positif). La somme de deux nombres négatifs est négative : $a - b$ est **négatif**.

**b)** $b - a$ est l'opposé de $a - b$, donc $b - a$ est **positif**.
$(a - b) \\times (b - a)$ est le produit d'un nombre négatif et d'un nombre positif : il est **négatif**.

**3.** Avec $a = -2$ et $b = 3$ :
- $a \\times b = -6$ (négatif) ; $-a = 2$ (positif) ; $a \\times a \\times b = 4 \\times 3 = 12$ (positif) ; $\\dfrac{-a}{b} = \\dfrac{2}{3}$ (positif) ;
- $a - b = -2 - 3 = -5$ (négatif) ; $b - a = 3 - (-2) = 5$ (positif) ; $(a - b) \\times (b - a) = (-5) \\times 5 = -25$ (négatif).
Les signes trouvés sont cohérents.

**4.** Lucas a tort. Avec $a = -1$ et $b = 5$, on a $a + b = 4$, qui est positif : c'est un contre-exemple.
(Avec $a = -5$ et $b = 1$, on a $a + b = -4$, négatif.) Le signe de $a + b$ dépend des valeurs de $a$ et de $b$ : on ne peut pas le connaître sans plus d'informations.`
    }
  ],
  "4N2": [
    {
      id: "4N2-ds-01",
      title: "Produits et quotients de fractions",
      difficulty: 1,
      points: 4,
      statement: `Calculer et donner chaque résultat sous la forme d'une fraction, simplifiée si possible (ou d'un entier).
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
2. Calculer et simplifier le résultat si possible :
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
      statement: `Calculer en détaillant les étapes ; donner chaque résultat sous forme d'une fraction, simplifiée si possible.
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
      statement: `Une baignoire vide contient $120$ L lorsqu'elle est pleine. Elle peut être remplie par le robinet A seul en $6$ minutes, ou par le robinet B seul en $12$ minutes. Les débits sont constants.
1. a) Combien de litres le robinet A verse-t-il en une minute ? Et le robinet B ?
   b) En déduire la fraction de la baignoire que remplit chaque robinet en une minute. (Par exemple, $30$ L représentent $\\dfrac{30}{120} = \\dfrac{1}{4}$ de la baignoire.)
2. On ouvre les deux robinets en même temps.
   a) Quelle fraction de la baignoire est remplie en une minute ? Vérifier le résultat avec les litres.
   b) En combien de temps la baignoire est-elle pleine ?
3. On ouvre les deux robinets, mais la bonde est restée ouverte : seule, elle viderait la baignoire pleine en $8$ minutes.
   a) Quelle fraction de la baignoire la bonde vide-t-elle en une minute ?
   b) Quelle fraction de la baignoire se remplit réellement en une minute ? En combien de temps la baignoire sera-t-elle pleine ?
4. Sans bonde ouverte, on ouvre d'abord le robinet A seul pendant $2$ minutes, puis on ouvre aussi le robinet B.
   a) Quelle fraction de la baignoire est remplie au bout des $2$ premières minutes ? Quelle fraction reste-t-il à remplir ?
   b) Combien de temps faut-il en tout pour remplir la baignoire ?`,
      solution: `**1. a)** A verse $120 \\div 6 = 20$ L par minute et B verse $120 \\div 12 = 10$ L par minute.

**b)** A remplit $\\dfrac{20}{120} = \\dfrac{1}{6}$ de la baignoire par minute et B en remplit $\\dfrac{10}{120} = \\dfrac{1}{12}$.

**2. a)** $\\dfrac{1}{6} + \\dfrac{1}{12} = \\dfrac{2}{12} + \\dfrac{1}{12} = \\dfrac{3}{12} = \\dfrac{1}{4}$ de la baignoire par minute.
Vérification : $20 + 10 = 30$ L par minute, et $\\dfrac{30}{120} = \\dfrac{1}{4}$.

**b)** Il faut $4$ quarts pour remplir la baignoire, donc **4 minutes** (ou $120 \\div 30 = 4$).

**3. a)** La bonde vide $\\dfrac{1}{8}$ de la baignoire par minute (soit $120 \\div 8 = 15$ L).

**b)** Bilan par minute : $\\dfrac{1}{6} + \\dfrac{1}{12} - \\dfrac{1}{8} = \\dfrac{4}{24} + \\dfrac{2}{24} - \\dfrac{3}{24} = \\dfrac{3}{24} = \\dfrac{1}{8}$.
La baignoire se remplit de $\\dfrac{1}{8}$ par minute (soit $30 - 15 = 15$ L) : elle est pleine en **8 minutes**.

**4. a)** En $2$ minutes, A remplit $2 \\times \\dfrac{1}{6} = \\dfrac{1}{3}$ de la baignoire. Il reste $1 - \\dfrac{1}{3} = \\dfrac{2}{3}$ à remplir.

**b)** Avec les deux robinets, on remplit $\\dfrac{1}{4}$ par minute. Le temps nécessaire est $\\dfrac{2}{3} \\div \\dfrac{1}{4} = \\dfrac{2}{3} \\times 4 = \\dfrac{8}{3}$ min, soit $2$ min $40$ s (car $\\dfrac{2}{3}$ min $= 40$ s).
Vérification en litres : il reste $80$ L à $30$ L par minute, soit $\\dfrac{80}{30} = \\dfrac{8}{3}$ min.
Durée totale : $2$ min $+ 2$ min $40$ s $=$ **4 min 40 s**.`
    },
    {
      id: "4N2-ds-12",
      title: "Entre deux fractions",
      difficulty: 4,
      points: 6,
      statement: `1. Trouver le nombre situé exactement au milieu de $\\dfrac{2}{7}$ et $\\dfrac{3}{7}$. Justifier.
2. Écrire $\\dfrac{1}{3}$ et $\\dfrac{1}{2}$ avec le dénominateur $24$, puis donner trois fractions comprises strictement entre $\\dfrac{1}{3}$ et $\\dfrac{1}{2}$.
3. Tom affirme : « Pour additionner deux fractions, il suffit d'additionner les numérateurs entre eux et les dénominateurs entre eux. » On appelle cette façon de faire la « méthode de Tom ».
   a) Calculer $\\dfrac{1}{2} + \\dfrac{1}{2}$, puis appliquer la méthode de Tom à ces deux fractions. Que peut-on conclure sur l'affirmation de Tom ?
   b) Tom se défend : « D'accord, ma méthode ne donne pas la somme. Mais elle donne toujours une fraction strictement comprise entre les deux fractions de départ. »
   Appliquer la méthode de Tom à $\\dfrac{1}{3}$ et $\\dfrac{1}{2}$, puis démontrer, par des calculs de différences, que la fraction obtenue est strictement comprise entre $\\dfrac{1}{3}$ et $\\dfrac{1}{2}$.
   c) Appliquer la méthode de Tom à $\\dfrac{1}{2}$ et $\\dfrac{3}{6}$. La nouvelle affirmation de Tom est-elle vraie dans tous les cas ? Expliquer pourquoi l'exemple de la question b) ne suffisait pas pour conclure.
4. Trouver une fraction de dénominateur $48$ comprise strictement entre $\\dfrac{5}{8}$ et $\\dfrac{2}{3}$.`,
      solution: `**1.** $\\dfrac{2}{7} = \\dfrac{4}{14}$ et $\\dfrac{3}{7} = \\dfrac{6}{14}$. Le nombre situé au milieu est $\\dfrac{5}{14}$ : en effet $\\dfrac{5}{14} - \\dfrac{4}{14} = \\dfrac{1}{14}$ et $\\dfrac{6}{14} - \\dfrac{5}{14} = \\dfrac{1}{14}$, les deux écarts sont égaux.
(Autre méthode : $\\left(\\dfrac{2}{7} + \\dfrac{3}{7}\\right) \\div 2 = \\dfrac{5}{7} \\times \\dfrac{1}{2} = \\dfrac{5}{14}$.)

**2.** $\\dfrac{1}{3} = \\dfrac{8}{24}$ et $\\dfrac{1}{2} = \\dfrac{12}{24}$. Les fractions $\\dfrac{9}{24}$, $\\dfrac{10}{24}$ et $\\dfrac{11}{24}$ conviennent (soit $\\dfrac{3}{8}$, $\\dfrac{5}{12}$ et $\\dfrac{11}{24}$).

**3. a)** $\\dfrac{1}{2} + \\dfrac{1}{2} = 1$, alors que la méthode de Tom donne $\\dfrac{1 + 1}{2 + 2} = \\dfrac{2}{4} = \\dfrac{1}{2}$. Comme $\\dfrac{1}{2} \\neq 1$, ce **contre-exemple** prouve que l'affirmation de Tom est fausse.

**b)** La méthode de Tom donne $\\dfrac{1 + 1}{3 + 2} = \\dfrac{2}{5}$.
$\\dfrac{2}{5} - \\dfrac{1}{3} = \\dfrac{6}{15} - \\dfrac{5}{15} = \\dfrac{1}{15}$, qui est positif, donc $\\dfrac{2}{5} > \\dfrac{1}{3}$.
$\\dfrac{1}{2} - \\dfrac{2}{5} = \\dfrac{5}{10} - \\dfrac{4}{10} = \\dfrac{1}{10}$, qui est positif, donc $\\dfrac{2}{5} < \\dfrac{1}{2}$.
Ainsi $\\dfrac{1}{3} < \\dfrac{2}{5} < \\dfrac{1}{2}$ : dans cet exemple, la fraction obtenue est bien strictement comprise entre les deux.

**c)** La méthode de Tom donne $\\dfrac{1 + 3}{2 + 6} = \\dfrac{4}{8} = \\dfrac{1}{2}$. Or $\\dfrac{3}{6} = \\dfrac{1}{2}$ aussi : la fraction obtenue est égale aux deux fractions de départ, elle n'est donc pas **strictement** comprise entre elles. Ce contre-exemple montre que la nouvelle affirmation de Tom n'est pas vraie dans tous les cas.
Un exemple qui fonctionne (question b) ne prouve pas qu'une propriété est toujours vraie ; en revanche, un seul contre-exemple suffit à prouver qu'elle est fausse.

**4.** $\\dfrac{5}{8} = \\dfrac{30}{48}$ et $\\dfrac{2}{3} = \\dfrac{32}{48}$. La fraction $\\dfrac{31}{48}$ convient : $\\dfrac{30}{48} < \\dfrac{31}{48} < \\dfrac{32}{48}$.`
    },
    {
      id: "4N2-ds-13",
      title: "Quatre calculs avec des fractions relatives",
      difficulty: 1,
      points: 4,
      statement: `Calculer les expressions suivantes en détaillant les étapes. Donner chaque résultat sous la forme d'une fraction, simplifiée si possible.
1. $A = \\dfrac{3}{4} - \\dfrac{5}{6}$
2. $B = -\\dfrac{2}{3} \\times \\dfrac{9}{10}$
3. $C = \\dfrac{7}{12} \\div \\left(-\\dfrac{14}{9}\\right)$
4. $D = \\dfrac{2}{5} + \\dfrac{1}{5} \\times \\dfrac{3}{4}$`,
      solution: `**1.** On réduit au même dénominateur $12$ : $A = \\dfrac{9}{12} - \\dfrac{10}{12} = -\\dfrac{1}{12}$.

**2.** Le produit d'un nombre négatif et d'un nombre positif est négatif :
$B = -\\dfrac{2 \\times 9}{3 \\times 10} = -\\dfrac{2 \\times 3 \\times 3}{3 \\times 2 \\times 5} = -\\dfrac{3}{5}$.

**3.** Diviser par une fraction revient à multiplier par son inverse :
$C = \\dfrac{7}{12} \\times \\left(-\\dfrac{9}{14}\\right) = -\\dfrac{7 \\times 9}{12 \\times 14} = -\\dfrac{7 \\times 3 \\times 3}{3 \\times 4 \\times 7 \\times 2} = -\\dfrac{3}{8}$.

**4.** La multiplication est prioritaire : $\\dfrac{1}{5} \\times \\dfrac{3}{4} = \\dfrac{3}{20}$.
$D = \\dfrac{2}{5} + \\dfrac{3}{20} = \\dfrac{8}{20} + \\dfrac{3}{20} = \\dfrac{11}{20}$.`
    },
    {
      id: "4N2-ds-14",
      title: "Les fractions égyptiennes",
      difficulty: 2,
      points: 5,
      statement: `Dans l'Égypte ancienne, on écrivait les fractions comme des sommes de fractions de numérateur $1$, toutes différentes, par exemple $\\dfrac{3}{4} = \\dfrac{1}{2} + \\dfrac{1}{4}$.
1. Vérifier l'égalité $\\dfrac{3}{4} = \\dfrac{1}{2} + \\dfrac{1}{4}$.
2. Calculer $\\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{6}$.
3. Vérifier que $\\dfrac{2}{7} = \\dfrac{1}{4} + \\dfrac{1}{28}$.
4. Calculer $\\dfrac{1}{3} + \\dfrac{1}{4}$. En déduire une écriture « égyptienne » de $\\dfrac{7}{12}$.
5. On cherche le nombre entier $a$ tel que $\\dfrac{5}{8} = \\dfrac{1}{2} + \\dfrac{1}{a}$. Calculer $\\dfrac{5}{8} - \\dfrac{1}{2}$, puis en déduire $a$.`,
      solution: `**1.** $\\dfrac{1}{2} + \\dfrac{1}{4} = \\dfrac{2}{4} + \\dfrac{1}{4} = \\dfrac{3}{4}$. L'égalité est vraie.

**2.** Avec le dénominateur commun $6$ : $\\dfrac{3}{6} + \\dfrac{2}{6} + \\dfrac{1}{6} = \\dfrac{6}{6} = 1$.

**3.** $\\dfrac{1}{4} + \\dfrac{1}{28} = \\dfrac{7}{28} + \\dfrac{1}{28} = \\dfrac{8}{28} = \\dfrac{2 \\times 4}{7 \\times 4} = \\dfrac{2}{7}$. L'égalité est vraie.

**4.** $\\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$. Donc $\\dfrac{7}{12} = \\dfrac{1}{3} + \\dfrac{1}{4}$.

**5.** $\\dfrac{5}{8} - \\dfrac{1}{2} = \\dfrac{5}{8} - \\dfrac{4}{8} = \\dfrac{1}{8}$. On veut $\\dfrac{1}{a} = \\dfrac{1}{8}$, donc $a = 8$.
Vérification : $\\dfrac{1}{2} + \\dfrac{1}{8} = \\dfrac{4}{8} + \\dfrac{1}{8} = \\dfrac{5}{8}$.`
    },
    {
      id: "4N2-ds-15",
      title: "Taux de réussite aux lancers francs",
      difficulty: 3,
      points: 5,
      statement: `Lors d'un entraînement de basket, Ana réussit $7$ lancers francs sur $12$ et Bilal en réussit $5$ sur $8$.
1. Écrire, pour chacun, la fraction des lancers réussis.
2. Qui a le meilleur taux de réussite ? Justifier en écrivant les deux fractions avec un même dénominateur.
3. Quelle fraction des lancers de l'équipe formée par Ana et Bilal a été réussie ? Simplifier cette fraction si possible.
4. Chloé propose de calculer le taux de réussite de l'équipe en additionnant $\\dfrac{7}{12}$ et $\\dfrac{5}{8}$. Calculer cette somme et expliquer pourquoi la méthode de Chloé ne peut pas convenir.
5. Ana continue à tirer et réussit tous ses lancers suivants. Combien de lancers doit-elle encore réussir pour que sa fraction de réussite soit égale à $\\dfrac{2}{3}$ ? On pourra procéder par essais.`,
      solution: `**1.** Ana : $\\dfrac{7}{12}$ ; Bilal : $\\dfrac{5}{8}$.

**2.** Avec le dénominateur $24$ : $\\dfrac{7}{12} = \\dfrac{14}{24}$ et $\\dfrac{5}{8} = \\dfrac{15}{24}$. Comme $\\dfrac{15}{24} > \\dfrac{14}{24}$, **Bilal** a le meilleur taux de réussite.

**3.** L'équipe a réussi $7 + 5 = 12$ lancers sur $12 + 8 = 20$ : $\\dfrac{12}{20} = \\dfrac{3}{5}$.

**4.** $\\dfrac{7}{12} + \\dfrac{5}{8} = \\dfrac{14}{24} + \\dfrac{15}{24} = \\dfrac{29}{24}$. Cette fraction est supérieure à $1$ : cela voudrait dire que l'équipe a réussi plus de lancers qu'elle n'en a tenté, ce qui est impossible. La méthode de Chloé ne convient pas : il faut compter le total des lancers réussis et le total des lancers tentés (question 3).

**5.** Si Ana réussit encore $k$ lancers, sa fraction de réussite devient $\\dfrac{7 + k}{12 + k}$.
- $k = 1$ : $\\dfrac{8}{13}$ ; $k = 2$ : $\\dfrac{9}{14}$ ; ces fractions ne sont pas égales à $\\dfrac{2}{3}$ (par exemple $\\dfrac{9}{14} = \\dfrac{27}{42}$ et $\\dfrac{2}{3} = \\dfrac{28}{42}$).
- $k = 3$ : $\\dfrac{10}{15} = \\dfrac{2 \\times 5}{3 \\times 5} = \\dfrac{2}{3}$.
Ana doit réussir **3 lancers** de plus.`
    },
    {
      id: "4N2-ds-16",
      title: "Des fractions en cascade",
      difficulty: 4,
      points: 6,
      statement: `On construit une liste de nombres de la façon suivante :
$$F_1 = 1 + \\dfrac{1}{1} \\qquad F_2 = 1 + \\dfrac{1}{F_1} \\qquad F_3 = 1 + \\dfrac{1}{F_2} \\qquad F_4 = 1 + \\dfrac{1}{F_3}\\qquad \\ldots$$
Chaque nombre s'obtient en ajoutant $1$ à l'inverse du nombre précédent.
1. Vérifier que $F_1 = 2$ et $F_2 = \\dfrac{3}{2}$.
2. Calculer $F_3$, $F_4$, $F_5$ et $F_6$ sous forme de fractions, simplifiées si possible.
3. Observer les numérateurs et les dénominateurs obtenus. Formuler une conjecture permettant de prévoir $F_7$ sans calculer, puis vérifier cette conjecture en calculant $F_7$.
4. a) Calculer $F_5 - F_4$ et $F_6 - F_5$.
   b) En déduire le rangement dans l'ordre croissant des nombres $F_4$, $F_5$ et $F_6$.`,
      solution: `**1.** $F_1 = 1 + 1 = 2$ et $F_2 = 1 + \\dfrac{1}{2} = \\dfrac{3}{2}$.

**2.** L'inverse d'une fraction $\\dfrac{p}{q}$ est $\\dfrac{q}{p}$.
- $F_3 = 1 + \\dfrac{2}{3} = \\dfrac{5}{3}$ ;
- $F_4 = 1 + \\dfrac{3}{5} = \\dfrac{8}{5}$ ;
- $F_5 = 1 + \\dfrac{5}{8} = \\dfrac{13}{8}$ ;
- $F_6 = 1 + \\dfrac{8}{13} = \\dfrac{21}{13}$.

**3.** Les numérateurs sont $2$ ; $3$ ; $5$ ; $8$ ; $13$ ; $21$ et chaque dénominateur est le numérateur précédent. On observe que chaque numérateur semble être la somme des deux numérateurs précédents : $2 + 3 = 5$, $3 + 5 = 8$, $5 + 8 = 13$, $8 + 13 = 21$.
**Conjecture** : $F_7 = \\dfrac{13 + 21}{21} = \\dfrac{34}{21}$.
Vérification : $F_7 = 1 + \\dfrac{13}{21} = \\dfrac{34}{21}$. La conjecture est vérifiée pour $F_7$ (ce n'est pas une démonstration dans le cas général).

**4. a)** $F_5 - F_4 = \\dfrac{13}{8} - \\dfrac{8}{5} = \\dfrac{65}{40} - \\dfrac{64}{40} = \\dfrac{1}{40}$.
$F_6 - F_5 = \\dfrac{21}{13} - \\dfrac{13}{8} = \\dfrac{168}{104} - \\dfrac{169}{104} = -\\dfrac{1}{104}$.

**b)** $F_5 - F_4 > 0$, donc $F_4 < F_5$ ; $F_6 - F_5 < 0$, donc $F_6 < F_5$.
Pour comparer $F_4$ et $F_6$ : $F_6 - F_4 = \\dfrac{21}{13} - \\dfrac{8}{5} = \\dfrac{105}{65} - \\dfrac{104}{65} = \\dfrac{1}{65} > 0$, donc $F_4 < F_6$.
Ainsi $F_4 < F_6 < F_5$.`
    },
    {
      id: "4N2-ds-17",
      title: "Nombres premiers et simplification",
      difficulty: 2,
      points: 6,
      statement: `1. Les nombres $47$, $51$, $87$ et $97$ sont-ils premiers ? Justifier.
2. Décomposer $420$ et $630$ en produits de facteurs premiers.
3. En déduire l'écriture de la fraction $\\dfrac{420}{630}$ simplifiée le plus possible.`,
      solution: `**1.** Pour un entier inférieur à $100$, il suffit de tester les divisions par $2$, $3$, $5$ et $7$.
- $47$ n'est divisible ni par $2$, ni par $3$ ($4 + 7 = 11$), ni par $5$, ni par $7$ ($47 = 7 \\times 6 + 5$) : $47$ est **premier**.
- $51 = 3 \\times 17$ : $51$ n'est **pas premier**.
- $87 = 3 \\times 29$ : $87$ n'est **pas premier**.
- $97$ n'est divisible ni par $2$, ni par $3$ ($9 + 7 = 16$), ni par $5$, ni par $7$ ($97 = 7 \\times 13 + 6$) : $97$ est **premier**.

**2.** On divise à chaque étape par le plus petit nombre premier possible :
$$420 = 2 \\times 210 = 2 \\times 2 \\times 105 = 2 \\times 2 \\times 3 \\times 35 = 2 \\times 2 \\times 3 \\times 5 \\times 7$$
donc $420 = 2^2 \\times 3 \\times 5 \\times 7$.
$$630 = 2 \\times 315 = 2 \\times 3 \\times 105 = 2 \\times 3 \\times 3 \\times 35 = 2 \\times 3 \\times 3 \\times 5 \\times 7$$
donc $630 = 2 \\times 3^2 \\times 5 \\times 7$.

**3.** On divise le numérateur et le dénominateur par les facteurs communs $2$, $3$, $5$ et $7$ :
$$\\dfrac{420}{630} = \\dfrac{2 \\times 2 \\times 3 \\times 5 \\times 7}{2 \\times 3 \\times 3 \\times 5 \\times 7} = \\dfrac{2}{3}$$`
    },
    {
      id: "4N2-ds-18",
      title: "Préparer des colis identiques",
      difficulty: 3,
      points: 6,
      statement: `Une association veut répartir $264$ cahiers et $360$ stylos dans des colis identiques : tous les colis contiennent le même nombre de cahiers et le même nombre de stylos, et tout le matériel est distribué.
1. Décomposer $264$ et $360$ en produits de facteurs premiers.
2. L'association peut-elle préparer $9$ colis ? Justifier à l'aide des décompositions.
3. Quel est le plus grand nombre de colis qu'elle peut préparer ?
4. Combien de cahiers et combien de stylos chaque colis contient-il alors ?`,
      solution: `**1.** $264 = 2 \\times 132 = 2 \\times 2 \\times 66 = 2 \\times 2 \\times 2 \\times 33 = 2 \\times 2 \\times 2 \\times 3 \\times 11$, donc $264 = 2^3 \\times 3 \\times 11$.
$360 = 2 \\times 180 = 2 \\times 2 \\times 90 = 2 \\times 2 \\times 2 \\times 45 = 2 \\times 2 \\times 2 \\times 3 \\times 15 = 2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 5$, donc $360 = 2^3 \\times 3^2 \\times 5$.

**2.** Le nombre de colis doit diviser à la fois $264$ et $360$. Or $9 = 3^2$ et la décomposition de $264$ ne contient qu'un seul facteur $3$ : $264$ n'est pas divisible par $9$. L'association **ne peut pas** préparer $9$ colis.

**3.** Le plus grand nombre qui divise $264$ et $360$ est le produit des facteurs premiers communs, chacun pris avec le plus petit exposant. Les facteurs communs sont $2$ (plus petit exposant $3$) et $3$ (plus petit exposant $1$) :
$$2^3 \\times 3 = 24$$
L'association peut préparer au plus **$24$ colis**.

**4.** $264 \\div 24 = 11$ et $360 \\div 24 = 15$ : chaque colis contient **$11$ cahiers et $15$ stylos**.`
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
   c) $\\dfrac{1}{10 \\times 10 \\times 10 \\times 10}$
3. Expliquer pourquoi $(-3)^4$ et $-3^4$ ne sont pas égaux.`,
      solution: `**1.**
- $2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$ ;
- $(-3)^4 = (-3) \\times (-3) \\times (-3) \\times (-3) = 81$ (quatre facteurs négatifs) ;
- $-3^4 = -(3 \\times 3 \\times 3 \\times 3) = -81$ ;
- $(-2)^3 = (-2) \\times (-2) \\times (-2) = -8$ (trois facteurs négatifs) ;
- $5^0 = 1$ (par convention, $a^0 = 1$ pour $a \\neq 0$) ;
- $10^{-3} = \\dfrac{1}{10^3} = 0{,}001$.

**2. a)** $7^4$ ; **b)** $(-4)^3$ ; **c)** $\\dfrac{1}{10^4} = 10^{-4}$.

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
      title: "Calculer avec des puissances d'un même nombre",
      difficulty: 2,
      points: 5,
      statement: `1. En revenant à l'écriture développée, écrire chaque expression sous la forme d'une seule puissance :
$$A = 2^3 \\times 2^5 \\qquad B = \\frac{5^7}{5^4} \\qquad C = (3^2)^4 \\qquad D = 6^4 \\times 6 \\qquad E = 2^4 \\times 5^4$$
2. Donner la valeur de $B$ et de $E$ sans calculatrice.
3. Malik affirme que $2^3 + 2^5 = 2^8$. Vérifier par un calcul s'il a raison.`,
      solution: `**1.**
- $A = (2 \\times 2 \\times 2) \\times (2 \\times 2 \\times 2 \\times 2 \\times 2) = 2^8$ (il y a $3 + 5 = 8$ facteurs égaux à $2$) ;
- $B = \\dfrac{5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5 \\times 5}{5 \\times 5 \\times 5 \\times 5} = 5 \\times 5 \\times 5 = 5^3$ (on simplifie quatre facteurs $5$) ;
- $C = 3^2 \\times 3^2 \\times 3^2 \\times 3^2 = (3 \\times 3) \\times (3 \\times 3) \\times (3 \\times 3) \\times (3 \\times 3) = 3^8$ (il y a $4 \\times 2 = 8$ facteurs égaux à $3$) ;
- $D = (6 \\times 6 \\times 6 \\times 6) \\times 6 = 6^5$ (il y a $4 + 1 = 5$ facteurs égaux à $6$) ;
- $E = (2 \\times 2 \\times 2 \\times 2) \\times (5 \\times 5 \\times 5 \\times 5) = (2 \\times 5) \\times (2 \\times 5) \\times (2 \\times 5) \\times (2 \\times 5) = 10^4$ (on regroupe chaque $2$ avec un $5$).

**2.** $B = 5^3 = 125$ et $E = 10^4 = 10\\,000$.

**3.** $2^3 + 2^5 = 8 + 32 = 40$ alors que $2^8 = 256$. **Malik a tort** : compter les facteurs permet de simplifier un produit de puissances d'un même nombre, pas une somme.`
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
      statement: `**Pour aller plus loin** (formules générales sur les puissances, non exigibles en 4e).

1. Calculer $2^{10}$.
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
      statement: `On rappelle que $1$ mm $= 10^{-3}$ m, $1$ μm (micromètre) $= 10^{-6}$ m et $1$ nm (nanomètre) $= 10^{-9}$ m.
1. Écrire $1$ km en mètres sous la forme d'une puissance de $10$.
2. Un cheveu a une épaisseur de $80$ μm. Écrire cette épaisseur en mètres, en notation scientifique.
3. Combien y a-t-il de micromètres dans un millimètre ? Justifier par un calcul sur les puissances de $10$.
4. Un virus mesure environ $100$ nm.
   a) Écrire cette longueur en mètres sous la forme d'une puissance de $10$.
   b) Combien de virus faudrait-il aligner pour couvrir l'épaisseur du cheveu ?`,
      solution: `**1.** $1$ km $= 1\\,000$ m $= 10^3$ m.

**2.** $80$ μm $= 80 \\times 10^{-6}$ m $= 8 \\times 10 \\times 10^{-6}$ m $= 8 \\times 10^{-5}$ m.

**3.** Un millimètre mesure $10^{-3}$ m et un micromètre $10^{-6}$ m. On divise : $\\dfrac{10^{-3}}{10^{-6}} = 10^{-3 - (-6)} = 10^{3}$. Il y a $1\\,000$ micromètres dans un millimètre.

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
      statement: `1. Recopier et compléter le tableau suivant (on pourra s'aider de la calculatrice pour la deuxième ligne).

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|
| $3^n$ | $3$ | $9$ | $27$ | … | … | … | … | … |
| Chiffre des unités de $3^n$ | $3$ | $9$ | $7$ | … | … | … | … | … |

2. a) On admet que le chiffre des unités d'un produit de deux entiers ne dépend que des chiffres des unités des deux facteurs (par exemple, $27 \\times 3$ se termine comme $7 \\times 3 = 21$, c'est-à-dire par $1$).
   Sachant que $3^4 = 81$ se termine par $1$, expliquer pourquoi $3^8 = 3^4 \\times 3^4$, puis $3^{12} = 3^8 \\times 3^4$, se terminent aussi par $1$.
   b) On admet que, de la même façon, toutes les puissances $3^4$, $3^8$, $3^{12}$, $3^{16}$, … (exposant multiple de $4$) se terminent par $1$. Vérifier que $2024$ est un multiple de $4$, puis écrire $3^{2026}$ sous la forme $3^{2024} \\times 3^{\\ldots}$.
   c) En déduire le chiffre des unités de $3^{2026}$.
3. a) Calculer $7^1$, $7^2$, $7^3$ et $7^4$ et donner leurs chiffres des unités.
   b) En raisonnant comme à la question 2, donner le chiffre des unités de $7^{100}$.
4. a) Donner le chiffre des unités de $3^{2025}$ et celui de $7^{2025}$ (on pourra écrire $2025 = 2024 + 1$).
   b) En déduire que $3^{2025} + 7^{2025}$ est divisible par $10$.`,
      solution: `**1.**

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|
| $3^n$ | $3$ | $9$ | $27$ | $81$ | $243$ | $729$ | $2\\,187$ | $6\\,561$ |
| Chiffre des unités de $3^n$ | $3$ | $9$ | $7$ | $1$ | $3$ | $9$ | $7$ | $1$ |

Les chiffres des unités se répètent dans l'ordre $3$ ; $9$ ; $7$ ; $1$.

**2. a)** $3^8 = 3^4 \\times 3^4$ est le produit de deux nombres qui se terminent par $1$ : il se termine comme $1 \\times 1 = 1$, donc par $1$. De même, $3^{12} = 3^8 \\times 3^4$ est le produit de deux nombres qui se terminent par $1$ : il se termine par $1$.

**b)** $2024 = 4 \\times 506$, donc $2024$ est un multiple de $4$ et $3^{2024}$ se termine par $1$.
$3^{2026} = 3^{2024} \\times 3^{2}$ (on compte les facteurs égaux à $3$ : $2024 + 2 = 2026$).

**c)** $3^{2026}$ est le produit d'un nombre qui se termine par $1$ et de $3^2 = 9$ : il se termine comme $1 \\times 9 = 9$. Le chiffre des unités de $3^{2026}$ est **9**.

**3. a)** $7^1 = 7$, $7^2 = 49$, $7^3 = 343$, $7^4 = 2\\,401$ : chiffres des unités $7$ ; $9$ ; $3$ ; $1$.

**b)** $7^4$ se termine par $1$ ; comme à la question 2, $7^8 = 7^4 \\times 7^4$, $7^{12}$, … se terminent par $1$, et plus généralement $7^n$ se termine par $1$ lorsque $n$ est un multiple de $4$. Or $100 = 4 \\times 25$ : le chiffre des unités de $7^{100}$ est **1**.

**4. a)** $3^{2025} = 3^{2024} \\times 3^1$ se termine comme $1 \\times 3 = 3$, donc par $3$.
$7^{2025} = 7^{2024} \\times 7^1$ se termine comme $1 \\times 7 = 7$, donc par $7$.

**b)** Le chiffre des unités de la somme est celui de $3 + 7 = 10$, c'est-à-dire $0$. Un nombre entier qui se termine par $0$ est divisible par $10$ : $3^{2025} + 7^{2025}$ est **divisible par 10**.`
    },
    {
      id: "4N3-ds-13",
      title: "Ranger grâce à la notation scientifique",
      difficulty: 1,
      points: 4,
      statement: `On considère les nombres suivants :
$$a = 32\\,000 \\qquad b = 0{,}004\\,5 \\qquad c = 45 \\times 10^{2} \\qquad d = 0{,}07 \\times 10^{5} \\qquad e = 2{,}8 \\times 10^{-2}$$
1. Écrire chacun de ces nombres en notation scientifique.
2. Donner l'écriture décimale de $c$, $d$ et $e$.
3. Ranger les cinq nombres dans l'ordre croissant.
4. Expliquer comment la notation scientifique permet de comparer rapidement deux nombres positifs.`,
      solution: `**1.** En notation scientifique, on écrit $m \\times 10^{n}$ avec $1 \\leqslant m < 10$ et $n$ entier relatif.
- $a = 32\\,000 = 3{,}2 \\times 10^{4}$ ;
- $b = 0{,}004\\,5 = 4{,}5 \\times 10^{-3}$ ;
- $c = 45 \\times 10^{2} = 4{,}5 \\times 10 \\times 10^{2} = 4{,}5 \\times 10^{3}$ ;
- $d = 0{,}07 \\times 10^{5} = 7 \\times 10^{-2} \\times 10^{5} = 7 \\times 10^{3}$ ;
- $e = 2{,}8 \\times 10^{-2}$ (déjà en notation scientifique).

**2.** $c = 4\\,500$ ; $d = 7\\,000$ ; $e = 0{,}028$.

**3.** On compare d'abord les exposants, puis, à exposant égal, les nombres placés devant :
$b = 4{,}5 \\times 10^{-3} < e = 2{,}8 \\times 10^{-2} < c = 4{,}5 \\times 10^{3} < d = 7 \\times 10^{3} < a = 3{,}2 \\times 10^{4}$.
Soit : $0{,}004\\,5 < 0{,}028 < 4\\,500 < 7\\,000 < 32\\,000$.

**4.** Pour deux nombres positifs en notation scientifique, le plus grand est celui qui a le plus grand exposant de $10$ ; si les exposants sont égaux, on compare les nombres situés devant la puissance de $10$.`
    },
    {
      id: "4N3-ds-14",
      title: "Les bactéries du yaourt",
      difficulty: 2,
      points: 5,
      statement: `Un gramme de yaourt contient environ $10^{8}$ bactéries. Un pot de yaourt a une masse de $125$ g.
1. Montrer qu'un pot contient environ $1{,}25 \\times 10^{10}$ bactéries.
2. Une bactérie de yaourt mesure environ $2$ μm de long, c'est-à-dire $2 \\times 10^{-6}$ m. On aligne bout à bout toutes les bactéries d'un pot. Calculer la longueur obtenue, en mètres, puis en kilomètres.
3. Une usine produit $4 \\times 10^{5}$ pots par jour.
   a) Calculer le nombre de bactéries contenues dans la production d'une journée, en notation scientifique.
   b) Si on les alignait bout à bout, quelle longueur obtiendrait-on, en kilomètres ?
   c) La distance de la Terre à la Lune est d'environ $3{,}84 \\times 10^{5}$ km. Combien de fois environ cette ligne de bactéries couvrirait-elle cette distance ?`,
      solution: `**1.** $125 \\times 10^{8} = 1{,}25 \\times 10^{2} \\times 10^{8} = 1{,}25 \\times 10^{10}$ bactéries.

**2.** Longueur : $1{,}25 \\times 10^{10} \\times 2 \\times 10^{-6} = 2{,}5 \\times 10^{4}$ m.
Comme $1$ km $= 10^{3}$ m : $\\dfrac{2{,}5 \\times 10^{4}}{10^{3}} = 2{,}5 \\times 10^{1} = 25$ km.

**3. a)** $4 \\times 10^{5} \\times 1{,}25 \\times 10^{10} = 5 \\times 10^{15}$ bactéries.

**b)** Chaque pot donne une ligne de $25$ km : $4 \\times 10^{5} \\times 25 = 10^{7}$ km (on peut aussi calculer $5 \\times 10^{15} \\times 2 \\times 10^{-6} = 10^{10}$ m $= 10^{7}$ km).

**c)** $\\dfrac{10^{7}}{3{,}84 \\times 10^{5}} \\approx 26$. La ligne couvrirait environ **26 fois** la distance de la Terre à la Lune.`
    },
    {
      id: "4N3-ds-15",
      title: "Télécharger un film",
      difficulty: 3,
      points: 5,
      statement: `Un film occupe $4{,}5$ Go (gigaoctets). On donne : $1$ Go $= 10^{9}$ octets et $1$ octet $= 8$ bits.
1. Montrer que la taille du film est de $3{,}6 \\times 10^{10}$ bits.
2. Avec une connexion par fibre optique, on télécharge $3 \\times 10^{8}$ bits par seconde.
   Calculer la durée du téléchargement du film, en secondes puis en minutes.
3. Avec une ancienne connexion, on télécharge seulement $8 \\times 10^{6}$ bits par seconde.
   a) Calculer la durée du téléchargement, en secondes, puis l'exprimer en heures et minutes.
   b) Combien de fois la connexion par fibre est-elle plus rapide que l'ancienne connexion ?`,
      solution: `**1.** $4{,}5$ Go $= 4{,}5 \\times 10^{9}$ octets. En bits : $4{,}5 \\times 10^{9} \\times 8 = 36 \\times 10^{9} = 3{,}6 \\times 10^{10}$ bits.

**2.** Durée : $\\dfrac{3{,}6 \\times 10^{10}}{3 \\times 10^{8}} = \\dfrac{3{,}6}{3} \\times 10^{10 - 8} = 1{,}2 \\times 10^{2} = 120$ s, soit **2 minutes**.

**3. a)** Durée : $\\dfrac{3{,}6 \\times 10^{10}}{8 \\times 10^{6}} = \\dfrac{3{,}6}{8} \\times 10^{4} = 0{,}45 \\times 10^{4} = 4\\,500$ s.
$4\\,500 = 3\\,600 + 900$ : cela fait $1$ h et $900$ s, soit $900 \\div 60 = 15$ min. La durée est **1 h 15 min**.

**b)** $\\dfrac{3 \\times 10^{8}}{8 \\times 10^{6}} = \\dfrac{3}{8} \\times 10^{2} = 0{,}375 \\times 100 = 37{,}5$. La fibre est $37{,}5$ fois plus rapide.
(Vérification : $4\\,500 \\div 120 = 37{,}5$.)`
    },
    {
      id: "4N3-ds-16",
      title: "Additionner des puissances de 2",
      difficulty: 4,
      points: 6,
      statement: `On considère la somme $S = 1 + 2 + 2^{2} + 2^{3} + \\ldots + 2^{10}$ (on additionne toutes les puissances de $2$, de $2^0 = 1$ jusqu'à $2^{10}$).
1. Calculer $1 + 2 + 2^2$, puis $1 + 2 + 2^2 + 2^3$. Comparer ces résultats à $2^3$ et à $2^4$.
2. a) Écrire $2 \\times S$ comme une somme de puissances de $2$.
   b) En calculant $2 \\times S - S$, montrer que $S = 2^{11} - 1$, puis donner la valeur de $S$.
3. En utilisant la même méthode, calculer la somme $T = 1 + 3 + 3^{2} + 3^{3} + 3^{4} + 3^{5} + 3^{6}$ (on calculera $3 \\times T - T$). Vérifier le résultat en effectuant directement l'addition.
4. Selon une légende, on place $1$ grain de riz sur la première case d'un échiquier, $2$ sur la deuxième, $2^2$ sur la troisième, et ainsi de suite jusqu'à la $64^{\\text{e}}$ case.
   a) Expliquer pourquoi le nombre total de grains est $2^{64} - 1$.
   b) On donne $2^{64} \\approx 1{,}8 \\times 10^{19}$ et on suppose qu'un grain de riz pèse $0{,}03$ g. Calculer la masse totale de riz, en tonnes ($1$ t $= 10^{6}$ g), en notation scientifique.`,
      solution: `**1.** $1 + 2 + 4 = 7$ et $2^3 = 8$ : la somme vaut $2^3 - 1$.
$1 + 2 + 4 + 8 = 15$ et $2^4 = 16$ : la somme vaut $2^4 - 1$.

**2. a)** En multipliant chaque terme par $2$ : $2 \\times S = 2 + 2^{2} + 2^{3} + \\ldots + 2^{10} + 2^{11}$.

**b)** Dans $2 \\times S - S$, tous les termes de $2$ à $2^{10}$ apparaissent une fois dans chaque somme et s'éliminent. Il reste :
$2 \\times S - S = 2^{11} - 1$, c'est-à-dire $S = 2^{11} - 1 = 2\\,048 - 1 = 2\\,047$.

**3.** $3 \\times T = 3 + 3^{2} + \\ldots + 3^{6} + 3^{7}$. Donc $3 \\times T - T = 3^{7} - 1$, c'est-à-dire $2 \\times T = 2\\,187 - 1 = 2\\,186$, d'où $T = 1\\,093$.
Vérification : $1 + 3 + 9 + 27 + 81 + 243 + 729 = 1\\,093$.

**4. a)** Sur la case numéro $k$, il y a $2^{k-1}$ grains. Le nombre total est donc $1 + 2 + 2^2 + \\ldots + 2^{63}$. Avec la même méthode qu'à la question 2, cette somme vaut $2^{64} - 1$.

**b)** Le nombre de grains est environ $1{,}8 \\times 10^{19}$ (le « $-1$ » est négligeable). Masse : $1{,}8 \\times 10^{19} \\times 0{,}03 = 1{,}8 \\times 10^{19} \\times 3 \\times 10^{-2} = 5{,}4 \\times 10^{17}$ g.
En tonnes : $\\dfrac{5{,}4 \\times 10^{17}}{10^{6}} = 5{,}4 \\times 10^{11}$ t, soit environ $540$ milliards de tonnes de riz.`
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
    },
    {
      id: "4N4-ds-13",
      title: "Racines carrées de nombres décimaux",
      difficulty: 1,
      points: 4,
      statement: `1. Calculer sans calculatrice, en justifiant par un calcul de carré :
$$\\sqrt{0{,}81} \\qquad \\sqrt{2{,}25} \\qquad \\sqrt{0{,}04} \\qquad \\sqrt{400} \\qquad \\sqrt{10\\,000}$$
2. Une nappe carrée a une aire de $1{,}44$ m². Calculer la longueur de son côté, puis son périmètre.
3. Léo affirme : « $\\sqrt{0{,}9} = 0{,}3$. » A-t-il raison ? Justifier.
4. Calculer $\\left(\\sqrt{13}\\right)^2$ et $\\sqrt{13^2}$.`,
      solution: `**1.** La racine carrée d'un nombre positif $a$ est le nombre positif dont le carré est $a$.
- $\\sqrt{0{,}81} = 0{,}9$ car $0{,}9^2 = 0{,}81$ ;
- $\\sqrt{2{,}25} = 1{,}5$ car $1{,}5^2 = 2{,}25$ ;
- $\\sqrt{0{,}04} = 0{,}2$ car $0{,}2^2 = 0{,}04$ ;
- $\\sqrt{400} = 20$ car $20^2 = 400$ ;
- $\\sqrt{10\\,000} = 100$ car $100^2 = 10\\,000$.

**2.** Le côté $c$ (en m) est positif et vérifie $c^2 = 1{,}44$, donc $c = \\sqrt{1{,}44} = 1{,}2$ m (car $1{,}2^2 = 1{,}44$).
Périmètre : $4 \\times 1{,}2 = 4{,}8$ m.

**3.** $0{,}3^2 = 0{,}09$, et non $0{,}9$. Léo a tort : $\\sqrt{0{,}09} = 0{,}3$, mais $\\sqrt{0{,}9} \\neq 0{,}3$ (en fait $\\sqrt{0{,}9} \\approx 0{,}95$).

**4.** $\\left(\\sqrt{13}\\right)^2 = 13$ par définition de la racine carrée, et $\\sqrt{13^2} = \\sqrt{169} = 13$.`
    },
    {
      id: "4N4-ds-14",
      title: "Diagonales de rectangles",
      difficulty: 2,
      points: 5,
      statement: `Dans un rectangle de longueur $L$ et de largeur $\\ell$, on admet que la longueur $d$ de la diagonale vérifie $d^2 = L^2 + \\ell^2$.
1. Calculer la longueur exacte de la diagonale d'un rectangle de $8$ cm sur $6$ cm.
2. Même question pour un rectangle de $12$ cm sur $5$ cm.
3. Un rectangle mesure $7$ cm sur $4$ cm.
   a) Donner la valeur exacte de sa diagonale.
   b) Sans calculatrice, encadrer cette diagonale entre deux nombres entiers consécutifs.
   c) Donner son arrondi au millimètre à l'aide de la calculatrice.
4. La diagonale d'un rectangle de $3$ cm sur $2$ cm mesure-t-elle un nombre entier de centimètres ? Justifier.`,
      solution: `**1.** $d^2 = 8^2 + 6^2 = 64 + 36 = 100$, donc $d = \\sqrt{100} = 10$ cm.

**2.** $d^2 = 12^2 + 5^2 = 144 + 25 = 169$, donc $d = \\sqrt{169} = 13$ cm.

**3. a)** $d^2 = 7^2 + 4^2 = 49 + 16 = 65$, donc $d = \\sqrt{65}$ cm.

**b)** $64 < 65 < 81$, donc $\\sqrt{64} < \\sqrt{65} < \\sqrt{81}$, c'est-à-dire $8 < \\sqrt{65} < 9$.

**c)** $\\sqrt{65} \\approx 8{,}06$, soit environ $8{,}1$ cm.

**4.** $d^2 = 3^2 + 2^2 = 9 + 4 = 13$. Or $13$ n'est pas un carré parfait ($3^2 = 9$ et $4^2 = 16$), donc $d = \\sqrt{13}$ n'est pas un nombre entier : il est compris entre $3$ et $4$ ($\\sqrt{13} \\approx 3{,}6$ cm).`
    },
    {
      id: "4N4-ds-15",
      title: "La clôture du potager",
      difficulty: 3,
      points: 5,
      statement: `Un jardinier veut un potager d'aire $200$ m² et souhaite l'entourer d'un grillage.
1. Il envisage d'abord un potager carré.
   a) Donner la valeur exacte de la longueur du côté.
   b) Sans calculatrice, encadrer cette longueur entre deux nombres entiers consécutifs.
   c) Calculer la longueur de grillage nécessaire, arrondie au décimètre.
2. Il envisage ensuite des potagers rectangulaires de même aire $200$ m². Recopier et compléter le tableau.

| Longueur (m) | $20$ | $25$ | $40$ |
|---|---|---|---|
| Largeur (m) | … | … | … |
| Périmètre (m) | … | … | … |

3. Parmi les potagers étudiés, lequel demande le moins de grillage ? Peut-on affirmer, avec ces seuls essais, que c'est le cas pour tous les potagers d'aire $200$ m² ?
4. Le grillage est vendu en rouleaux de $10$ m. Combien de rouleaux faut-il acheter pour le potager carré ? Pour le potager de $20$ m sur $10$ m ?`,
      solution: `**1. a)** Le côté $c$ est positif et vérifie $c^2 = 200$, donc $c = \\sqrt{200}$ m.

**b)** $196 < 200 < 225$, c'est-à-dire $14^2 < 200 < 15^2$, donc $14 < \\sqrt{200} < 15$.

**c)** Périmètre : $4 \\times \\sqrt{200} \\approx 4 \\times 14{,}142 \\approx 56{,}6$ m.

**2.** La largeur s'obtient en divisant l'aire par la longueur.

| Longueur (m) | $20$ | $25$ | $40$ |
|---|---|---|---|
| Largeur (m) | $10$ | $8$ | $5$ |
| Périmètre (m) | $60$ | $66$ | $90$ |

Par exemple, pour $20$ m : $2 \\times (20 + 10) = 60$ m.

**3.** Le potager carré demande le moins de grillage ($56{,}6$ m environ). Mais on n'a testé que quatre formes : ces essais ne suffisent pas à affirmer que c'est vrai pour tous les rectangles d'aire $200$ m². On peut seulement le **conjecturer**.

**4.** Carré : $56{,}6$ m de grillage, il faut $6$ rouleaux ($5$ rouleaux ne font que $50$ m).
Rectangle de $20$ m sur $10$ m : $60$ m, il faut aussi $6$ rouleaux. En pratique, le nombre de rouleaux est le même.`
    },
    {
      id: "4N4-ds-16",
      title: "Des carrés d'aires croissantes",
      difficulty: 4,
      points: 6,
      statement: `On construit une suite de carrés. Le carré $C_1$ a une aire de $1$ cm², et chaque carré a une aire supérieure de $1$ cm² à celle du précédent : ainsi, le carré $C_n$ a une aire de $n$ cm². On note $c_n$ la longueur du côté de $C_n$, en cm.

1. Donner la valeur exacte de $c_2$, de $c_3$ et de $c_4$.
2. Parmi les carrés $C_1$, $C_2$, …, $C_{30}$, lesquels ont un côté dont la longueur est un nombre entier de centimètres ? Justifier.
3. Sans calculatrice, encadrer $c_{20}$ entre deux nombres entiers consécutifs.
4. À partir de quel carré $C_n$ le côté dépasse-t-il $7$ cm ? Justifier.
5. a) Calculer $(2 \\times c_2)^2$.
   b) En déduire que le côté de $C_8$ est le double du côté de $C_2$.`,
      solution: `**1.** L'aire d'un carré est le carré de son côté, donc $c_n^2 = n$ et, comme $c_n$ est positif, $c_n = \\sqrt{n}$.
Ainsi $c_2 = \\sqrt{2}$ cm, $c_3 = \\sqrt{3}$ cm et $c_4 = \\sqrt{4} = 2$ cm.

**2.** $c_n = \\sqrt{n}$ est un nombre entier lorsque $n$ est un carré parfait. Les carrés parfaits compris entre $1$ et $30$ sont $1$, $4$, $9$, $16$ et $25$.
Les carrés cherchés sont donc $C_1$, $C_4$, $C_9$, $C_{16}$ et $C_{25}$, de côtés respectifs $1$, $2$, $3$, $4$ et $5$ cm.

**3.** $16 < 20 < 25$, donc $\\sqrt{16} < \\sqrt{20} < \\sqrt{25}$, c'est-à-dire $4 < c_{20} < 5$.

**4.** $c_n > 7$ signifie $\\sqrt{n} > 7$, c'est-à-dire $n > 49$ (les deux nombres étant positifs, on compare leurs carrés). Or $c_{49} = \\sqrt{49} = 7$ exactement.
Le côté dépasse $7$ cm à partir du carré **$C_{50}$** ($c_{50} = \\sqrt{50} \\approx 7{,}07$ cm).

**5. a)** $(2 \\times c_2)^2 = 2^2 \\times c_2^2 = 4 \\times 2 = 8$.

**b)** $2 \\times c_2$ est un nombre positif dont le carré vaut $8$ : c'est donc $\\sqrt{8}$, c'est-à-dire $c_8$. Le côté de $C_8$ est bien le double de celui de $C_2$.`
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
    },
    {
      id: "4N5-ds-13",
      title: "Réduire, tester, résoudre",
      difficulty: 1,
      points: 4,
      statement: `1. Réduire l'expression $A = 3x + 5 - 7x + 2$.
2. Calculer la valeur de $A$ pour $x = -2$, en utilisant l'expression réduite.
3. On considère l'équation $5x - 4 = 2x + 5$.
   a) Le nombre $3$ est-il solution de cette équation ? Justifier.
   b) Le nombre $-2$ est-il solution de cette équation ? Justifier.
4. Résoudre l'équation $5x - 4 = 2x + 5$.`,
      solution: `**1.** On regroupe les termes en $x$ et les nombres : $A = (3x - 7x) + (5 + 2) = -4x + 7$.

**2.** Pour $x = -2$ : $A = -4 \\times (-2) + 7 = 8 + 7 = 15$.

**3. a)** Pour $x = 3$ : membre de gauche $5 \\times 3 - 4 = 11$ ; membre de droite $2 \\times 3 + 5 = 11$. Les deux membres sont égaux : $3$ **est solution**.

**b)** Pour $x = -2$ : membre de gauche $5 \\times (-2) - 4 = -14$ ; membre de droite $2 \\times (-2) + 5 = 1$. Comme $-14 \\neq 1$, $-2$ **n'est pas solution**.

**4.** $5x - 4 = 2x + 5$
On soustrait $2x$ aux deux membres : $3x - 4 = 5$.
On ajoute $4$ aux deux membres : $3x = 9$.
On divise par $3$ : $x = 3$.
L'équation a pour unique solution $3$ (ce qui confirme la question 3. a).`
    },
    {
      id: "4N5-ds-14",
      title: "Mettre en équation : les fournitures",
      difficulty: 2,
      points: 5,
      statement: `1. Dans une papeterie, Inès achète $3$ cahiers identiques et un stylo à $1{,}30$ €. Elle paie $7{,}30$ € en tout. On note $x$ le prix d'un cahier, en euros.
   a) Écrire une équation traduisant la situation.
   b) Résoudre cette équation et en déduire le prix d'un cahier.
2. Dans une autre papeterie, un classeur coûte $1{,}50$ € de plus qu'un cahier. Pour $5$ cahiers et $2$ classeurs, Noé paie $17$ €. On note $y$ le prix d'un cahier dans cette papeterie, en euros.
   a) Exprimer le prix d'un classeur en fonction de $y$.
   b) Montrer que le problème se traduit par l'équation $7y + 3 = 17$.
   c) Résoudre cette équation et donner le prix d'un cahier et celui d'un classeur. Vérifier.`,
      solution: `**1. a)** $3$ cahiers coûtent $3x$ € ; avec le stylo : $3x + 1{,}3 = 7{,}3$.

**b)** $3x + 1{,}3 = 7{,}3$ donne $3x = 7{,}3 - 1{,}3 = 6$, puis $x = 6 \\div 3 = 2$. Un cahier coûte **2 €**.

**2. a)** Un classeur coûte $y + 1{,}5$ €.

**b)** $5$ cahiers et $2$ classeurs coûtent $5y + 2(y + 1{,}5)$ €. On développe : $5y + 2y + 3 = 7y + 3$. Le problème se traduit donc par $7y + 3 = 17$.

**c)** $7y + 3 = 17$ donne $7y = 14$, puis $y = 2$. Un cahier coûte **2 €** et un classeur $2 + 1{,}5 =$ **3,50 €**.
Vérification : $5 \\times 2 + 2 \\times 3{,}5 = 10 + 7 = 17$ €.`
    },
    {
      id: "4N5-ds-15",
      title: "Deux programmes jumeaux",
      difficulty: 3,
      points: 5,
      statement: `On considère trois programmes de calcul.
- **Programme A** : choisir un nombre ; lui ajouter $3$ ; multiplier le résultat par $4$ ; soustraire le double du nombre choisi.
- **Programme B** : choisir un nombre ; le multiplier par $2$ ; ajouter $12$.
- **Programme C** : choisir un nombre ; le multiplier par $5$ ; soustraire $3$.

1. Appliquer les programmes A et B au nombre $5$, puis au nombre $-1$. Que remarque-t-on ?
2. On note $x$ le nombre choisi. Écrire en fonction de $x$ le résultat de chaque programme, puis démontrer que les programmes A et B donnent toujours le même résultat.
3. Quel nombre faut-il choisir pour que le programme A donne $0$ ?
4. Quel nombre faut-il choisir pour que les programmes A et C donnent le même résultat ? Vérifier.`,
      solution: `**1.** Avec $5$ : A donne $(5 + 3) \\times 4 - 10 = 32 - 10 = 22$ ; B donne $5 \\times 2 + 12 = 22$.
Avec $-1$ : A donne $(-1 + 3) \\times 4 - (-2) = 8 + 2 = 10$ ; B donne $(-1) \\times 2 + 12 = 10$.
Les deux programmes donnent le même résultat dans ces deux cas.

**2.** A : $4(x + 3) - 2x$ ; B : $2x + 12$ ; C : $5x - 3$.
On développe et on réduit A : $4(x + 3) - 2x = 4x + 12 - 2x = 2x + 12$. C'est l'expression de B : les programmes A et B donnent le même résultat **quel que soit** le nombre choisi.

**3.** On résout $2x + 12 = 0$ : $2x = -12$, donc $x = -6$.
Vérification : $(-6 + 3) \\times 4 - (-12) = -12 + 12 = 0$.

**4.** On résout $2x + 12 = 5x - 3$.
On soustrait $2x$ : $12 = 3x - 3$. On ajoute $3$ : $15 = 3x$. Donc $x = 5$.
Vérification : A donne $22$ (question 1) et C donne $5 \\times 5 - 3 = 22$.`
    },
    {
      id: "4N5-ds-16",
      title: "Le croisement des deux trains",
      difficulty: 4,
      points: 6,
      statement: `Deux villes, Arville et Bourg, sont reliées par une voie ferrée de $450$ km. On suppose que les trains roulent à vitesse constante.
À $9$ h, un train part d'Arville vers Bourg à $120$ km/h. Au même moment, un autre train part de Bourg vers Arville à $105$ km/h. On note $t$ le temps écoulé depuis $9$ h, en heures.
1. Exprimer en fonction de $t$ la distance parcourue par chaque train.
2. Expliquer pourquoi les trains se croisent lorsque $120t + 105t = 450$. Résoudre cette équation.
3. À quelle heure les trains se croisent-ils ? À quelle distance d'Arville ?
4. Un autre jour, le train de Bourg part avec $30$ minutes de retard, à $9$ h $30$ (celui d'Arville part toujours à $9$ h).
   a) Justifier que, pour $t \\geqslant 0{,}5$, la distance parcourue par le train de Bourg est $105(t - 0{,}5)$.
   b) Écrire et résoudre l'équation permettant de trouver l'instant du croisement.
   c) À quelle heure (à la minute près) et à quelle distance d'Arville les trains se croisent-ils ce jour-là ?`,
      solution: `**1.** Distance = vitesse $\\times$ durée. Le train d'Arville a parcouru $120t$ km et celui de Bourg $105t$ km.

**2.** Au moment du croisement, les deux trains ont parcouru à eux deux toute la distance entre les villes : $120t + 105t = 450$.
$225t = 450$, donc $t = 2$.

**3.** Les trains se croisent $2$ h après le départ, à **11 h**. Le train d'Arville a parcouru $120 \\times 2 = 240$ km : le croisement a lieu à **240 km d'Arville**.
(Vérification : l'autre train a parcouru $105 \\times 2 = 210$ km et $240 + 210 = 450$.)

**4. a)** À l'instant $t$, le train de Bourg roule depuis $t - 0{,}5$ heure (il est parti une demi-heure après $9$ h). Il a donc parcouru $105(t - 0{,}5)$ km.

**b)** $120t + 105(t - 0{,}5) = 450$
$120t + 105t - 52{,}5 = 450$
$225t = 502{,}5$
$t = \\dfrac{502{,}5}{225} = \\dfrac{67}{30}$, soit environ $2{,}233$ h.

**c)** $\\dfrac{67}{30}$ h $= 2$ h $+ \\dfrac{7}{30}$ h, et $\\dfrac{7}{30} \\times 60 = 14$ min. Les trains se croisent à **11 h 14**.
Distance d'Arville : $120 \\times \\dfrac{67}{30} = 4 \\times 67 = 268$ km.
(Vérification : le train de Bourg a roulé $\\dfrac{67}{30} - \\dfrac{15}{30} = \\dfrac{52}{30}$ h, soit $105 \\times \\dfrac{52}{30} = 182$ km, et $268 + 182 = 450$.)`
    },
    {
      id: "4N5-ds-17",
      title: "Structure d'une expression, égalités et identités",
      difficulty: 2,
      points: 7,
      statement: `1. Pour chacune des expressions suivantes, indiquer s'il s'agit d'une somme ou d'un produit, en justifiant :
$A = 4(x + 7)$ ; $B = 4x + 7$ ; $C = 2(x + 1) + 5$.

2. On considère l'égalité $x^2 + 6 = 5x$.
a) Cette égalité est-elle vraie pour $x = 2$ ? pour $x = 3$ ? pour $x = 4$ ?
b) Cette égalité est-elle une identité ? Justifier.

3. Montrer que l'égalité $3(x + 4) - x = 2x + 12$ est une identité.`,
      solution: `**1.** On cherche la dernière opération à effectuer en respectant les priorités.
$A$ est un **produit** : on calcule d'abord la parenthèse, puis on multiplie par $4$.
$B$ est une **somme** : on calcule d'abord $4 \\times x$, puis on ajoute $7$.
$C$ est une **somme** : on calcule d'abord $2(x + 1)$, puis on ajoute $5$.

**2. a)** On calcule chaque membre séparément.
Pour $x = 2$ : à gauche $2^2 + 6 = 10$, à droite $5 \\times 2 = 10$. L'égalité est **vraie**.
Pour $x = 3$ : à gauche $3^2 + 6 = 15$, à droite $5 \\times 3 = 15$. L'égalité est **vraie**.
Pour $x = 4$ : à gauche $4^2 + 6 = 22$, à droite $5 \\times 4 = 20$. L'égalité est **fausse**.

**b)** Une identité est vraie pour toutes les valeurs de $x$. Or l'égalité est fausse pour $x = 4$ : $x = 4$ est un contre-exemple. Cette égalité n'est donc **pas** une identité, bien qu'elle soit vraie pour $x = 2$ et pour $x = 3$.

**3.** On développe puis on réduit le membre de gauche :
$3(x + 4) - x = 3x + 12 - x = 2x + 12$.
On obtient exactement le membre de droite, quelle que soit la valeur de $x$ : c'est une **identité**.`
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
      statement: `**Pour aller plus loin** (contraposée du théorème de Pythagore, non exigible en 4e).
1. Le triangle $RST$ est tel que $RS = 7{,}5$ cm, $ST = 4{,}5$ cm et $RT = 6$ cm. Démontrer qu'il est rectangle et préciser en quel sommet.
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
      statement: `**Pour aller plus loin** (contraposée du théorème de Pythagore, non exigible en 4e).
Le pignon d'une maison a la forme d'un triangle isocèle $ABC$ de sommet principal $A$ : la base $[BC]$ mesure $8$ m et la hauteur $[AH]$ issue de $A$ mesure $3$ m ($H$ est le milieu de $[BC]$). Le toit est formé de deux pans rectangulaires identiques, de largeur $AB$ et de longueur $12$ m.
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
5. a) Calculer $AD^2$ et $CD^2$. En déduire que $ABCD$ est un losange.
   b) Démontrer que $ABCD$ est un carré.`,
      solution: `**1.** On considère le point $E(5 ; 1)$ : le triangle $AEB$ est rectangle en $E$, avec $AE = 5 - 1 = 4$ cm et $EB = 3 - 1 = 2$ cm. D'après le théorème de Pythagore : $AB^2 = 4^2 + 2^2 = 16 + 4 = 20$.

**2.** De la même manière :
- pour $[BC]$ : écarts horizontal $5 - 3 = 2$ et vertical $7 - 3 = 4$, donc $BC^2 = 2^2 + 4^2 = 20$ ;
- pour $[AC]$ : écarts $3 - 1 = 2$ et $7 - 1 = 6$, donc $AC^2 = 2^2 + 6^2 = 40$.

**3.** $AB^2 = BC^2 = 20$, donc $AB = BC$ : le triangle est isocèle en $B$. Le plus grand côté est $[AC]$ et $AB^2 + BC^2 = 20 + 20 = 40 = AC^2$. D'après la réciproque du théorème de Pythagore, $ABC$ est rectangle en $B$. Il est donc **rectangle isocèle en $B$**.

**4.** Aire $= \\dfrac{AB \\times BC}{2}$. Comme $AB = BC$, on a $AB \\times BC = AB^2 = 20$. L'aire vaut $\\dfrac{20}{2} = 10$ cm².

**5. a)** $AD^2 = (1 - (-1))^2 + (5 - 1)^2 = 4 + 16 = 20$ et $CD^2 = (3 - (-1))^2 + (7 - 5)^2 = 16 + 4 = 20$.
Ainsi $AB^2 = BC^2 = CD^2 = DA^2 = 20$ : les quatre côtés de $ABCD$ ont la même longueur ($\\sqrt{20}$ cm). Un quadrilatère dont les quatre côtés ont la même longueur est un **losange**.

**b)** Un losange est un parallélogramme. D'après la question 3, l'angle $\\widehat{ABC}$ est droit. Or un parallélogramme qui a un angle droit est un rectangle : $ABCD$ est donc un rectangle.
$ABCD$ est à la fois un losange et un rectangle : c'est un **carré**.
Vérification : les diagonales d'un carré ont la même longueur. On a $AC^2 = 40$ et $BD^2 = (5 - (-1))^2 + (3 - 5)^2 = 36 + 4 = 40$, donc $AC = BD$.`
    },
    {
      id: "4G1-ds-12",
      title: "Le triangle 13-14-15",
      difficulty: 4,
      points: 6,
      statement: `**Pour aller plus loin** (contraposée du théorème de Pythagore, non exigible en 4e).
Le triangle $ABC$ a pour côtés $AB = 13$ cm, $BC = 14$ cm et $AC = 15$ cm. On note $H$ le pied de la hauteur issue de $A$ ; on admet que $H$ appartient au segment $[BC]$ et que $BH = 5$ cm.
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
    },
    {
      id: "4G1-ds-13",
      title: "Les haubans du mât",
      difficulty: 1,
      points: 4,
      statement: `**Pour aller plus loin** (contraposée du théorème de Pythagore, non exigible en 4e).
Un mât $[MS]$ de $8$ m de haut est planté verticalement sur un sol horizontal : $M$ est son pied et $S$ son sommet. Pour le maintenir, on tend des câbles (des haubans) entre le sommet $S$ et des points d'ancrage au sol.
1. Un premier hauban relie $S$ au point d'ancrage $A$ situé à $6$ m du pied du mât. Calculer la longueur $SA$ de ce hauban.
2. Un deuxième hauban $[SB]$ mesure $17$ m. À quelle distance du pied du mât le point $B$ est-il fixé ?
3. Sur un autre terrain, on mesure : hauteur du mât $MS = 8$ m, distance au sol $MC = 4$ m et longueur du hauban $SC = 9$ m. Le mât est-il vertical, c'est-à-dire le triangle $SMC$ est-il rectangle en $M$ ? Justifier.`,
      solution: `**1.** Le mât est vertical et le sol horizontal : le triangle $SMA$ est rectangle en $M$, d'hypoténuse $[SA]$. D'après le théorème de Pythagore :
$SA^2 = MS^2 + MA^2 = 8^2 + 6^2 = 64 + 36 = 100$, donc $SA = \\sqrt{100} = 10$ m.

**2.** Le triangle $SMB$ est rectangle en $M$, d'hypoténuse $[SB]$. D'après le théorème de Pythagore :
$SB^2 = MS^2 + MB^2$, donc $MB^2 = 17^2 - 8^2 = 289 - 64 = 225$ et $MB = \\sqrt{225} = 15$ m.
Le point $B$ est fixé à **$15$ m** du pied du mât.

**3.** Dans le triangle $SMC$, le plus grand côté est $[SC]$.
D'une part $SC^2 = 9^2 = 81$ ; d'autre part $MS^2 + MC^2 = 8^2 + 4^2 = 64 + 16 = 80$.
Comme $81 \\neq 80$, l'égalité de Pythagore n'est pas vérifiée. D'après la contraposée du théorème de Pythagore, le triangle $SMC$ **n'est pas rectangle** en $M$ : le mât n'est pas vertical (les mesures étant supposées exactes).`
    },
    {
      id: "4G1-ds-14",
      title: "La règle du maçon",
      difficulty: 2,
      points: 5,
      statement: `**Pour aller plus loin** (contraposée du théorème de Pythagore, non exigible en 4e).
Pour vérifier qu'un angle est droit, un maçon utilise la méthode suivante : à partir du coin $O$, il marque un point $P$ à $60$ cm sur le premier mur et un point $Q$ à $80$ cm sur le second mur, puis il mesure la distance $PQ$.
1. Démontrer que si $PQ = 100$ cm, alors l'angle $\\widehat{POQ}$ est droit.
2. Dans une autre pièce, le maçon trouve $PQ = 98$ cm. L'angle $\\widehat{POQ}$ est-il droit ? Justifier.
3. Un menuisier fabrique un cadre rectangulaire de $45$ cm sur $60$ cm. Il mesure une diagonale et trouve $75$ cm. Son cadre a-t-il bien des angles droits ? Justifier.
4. Pour un grand panneau, le maçon marque $0{,}9$ m sur un bord et $1{,}2$ m sur l'autre bord à partir d'un même coin. Quelle distance doit-il trouver entre ces deux marques pour que le coin soit un angle droit ?`,
      solution: `**1.** Dans le triangle $OPQ$, le plus grand côté est $[PQ]$.
$PQ^2 = 100^2 = 10\\,000$ et $OP^2 + OQ^2 = 60^2 + 80^2 = 3\\,600 + 6\\,400 = 10\\,000$.
Comme $PQ^2 = OP^2 + OQ^2$, d'après la réciproque du théorème de Pythagore, le triangle $OPQ$ est rectangle en $O$ : l'angle $\\widehat{POQ}$ est droit.

**2.** $PQ^2 = 98^2 = 9\\,604$ alors que $OP^2 + OQ^2 = 10\\,000$. Comme $9\\,604 \\neq 10\\,000$, d'après la contraposée du théorème de Pythagore, le triangle $OPQ$ n'est pas rectangle en $O$ : l'angle **n'est pas droit**.

**3.** Si le coin du cadre est droit, le triangle formé par deux côtés et la diagonale est rectangle. On vérifie : $45^2 + 60^2 = 2\\,025 + 3\\,600 = 5\\,625$ et $75^2 = 5\\,625$.
L'égalité est vérifiée : d'après la réciproque du théorème de Pythagore, l'angle entre les côtés de $45$ cm et de $60$ cm est droit. (Un cadre dont les côtés opposés ont la même longueur est un parallélogramme ; avec un angle droit, c'est un rectangle : tous ses angles sont droits.)

**4.** Si le coin est droit, le triangle est rectangle et, d'après le théorème de Pythagore, la distance $d$ cherchée vérifie :
$d^2 = 0{,}9^2 + 1{,}2^2 = 0{,}81 + 1{,}44 = 2{,}25$, donc $d = \\sqrt{2{,}25} = 1{,}5$ m.
Réciproquement, s'il mesure $1{,}5$ m, la réciproque du théorème de Pythagore garantit que l'angle est droit. Il doit trouver **$1{,}5$ m**.`
    },
    {
      id: "4G1-ds-15",
      title: "Deux triangles rectangles accolés",
      difficulty: 3,
      points: 5,
      statement: `Sur la figure ci-dessous (qui n'est pas en vraie grandeur), le point $H$ appartient au segment $[BC]$ et la droite $(AH)$ est perpendiculaire à $(BC)$. On donne $BH = 9$ cm, $HC = 16$ cm et $AH = 12$ cm.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 230" width="400" height="230" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="147,44 30,200 355,200" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="147" y1="44" x2="147" y2="200" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4" /><polyline points="147,189 158,189 158,200" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /><text x="24" y="218" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="361" y="218" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="147" y="34" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="147" y="220" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">H</text><text x="88.5" y="218" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">9 cm</text><text x="251" y="218" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">16 cm</text><text x="153" y="122" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="start">12 cm</text></svg></div>

1. Calculer la longueur $AB$.
2. Calculer la longueur $AC$.
3. Le triangle $ABC$ est-il rectangle ? Justifier.
4. Calculer l'aire du triangle $ABC$ de deux façons différentes et vérifier que l'on obtient le même résultat.`,
      solution: `**1.** Le triangle $ABH$ est rectangle en $H$, d'hypoténuse $[AB]$. D'après le théorème de Pythagore :
$AB^2 = AH^2 + BH^2 = 12^2 + 9^2 = 144 + 81 = 225$, donc $AB = 15$ cm.

**2.** Le triangle $ACH$ est rectangle en $H$, d'hypoténuse $[AC]$ :
$AC^2 = AH^2 + HC^2 = 12^2 + 16^2 = 144 + 256 = 400$, donc $AC = 20$ cm.

**3.** $H$ appartient à $[BC]$, donc $BC = BH + HC = 9 + 16 = 25$ cm : c'est le plus grand côté du triangle $ABC$.
$BC^2 = 25^2 = 625$ et $AB^2 + AC^2 = 225 + 400 = 625$.
Comme $BC^2 = AB^2 + AC^2$, d'après la réciproque du théorème de Pythagore, le triangle $ABC$ est **rectangle en $A$**.

**4.**
- Avec la base $[BC]$ et la hauteur $[AH]$ : $\\mathcal{A} = \\dfrac{BC \\times AH}{2} = \\dfrac{25 \\times 12}{2} = 150$ cm².
- Le triangle étant rectangle en $A$, on peut prendre $[AB]$ comme base et $[AC]$ comme hauteur : $\\mathcal{A} = \\dfrac{AB \\times AC}{2} = \\dfrac{15 \\times 20}{2} = 150$ cm².

On obtient bien le même résultat : **$150$ cm²**.`
    },
    {
      id: "4G1-ds-16",
      title: "La spirale de triangles rectangles",
      difficulty: 4,
      points: 6,
      statement: `On construit une spirale de triangles rectangles (unité : le centimètre) :
- le premier triangle $OA_1A_2$ est rectangle en $A_1$, avec $OA_1 = 1$ et $A_1A_2 = 1$ ;
- le deuxième triangle $OA_2A_3$ est rectangle en $A_2$, avec $A_2A_3 = 1$ ;
- et ainsi de suite : chaque nouveau triangle $OA_nA_{n+1}$ est rectangle en $A_n$, avec $A_nA_{n+1} = 1$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 380 300" width="380" height="300" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="250,180 312,180 312,118" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><polygon points="250,180 312,118 268.2,74.2" fill="rgba(59,130,246,0.16)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><polygon points="250,180 268.2,74.2 207.1,63.7" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><polygon points="250,180 207.1,63.7 148.9,85.1" fill="rgba(59,130,246,0.16)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><polygon points="250,180 148.9,85.1 106.5,130.4" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><polygon points="250,180 106.5,130.4 86.2,189" fill="rgba(59,130,246,0.16)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><polygon points="250,180 86.2,189 89.6,250.9" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><polyline points="304,180 304,172 312,172" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /><polyline points="306.3,123.7 300.7,118 306.3,112.3" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /><polyline points="266.8,82 258.9,80.7 260.3,72.8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /><polyline points="209.8,71.2 202.3,74 199.5,66.4" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /><polyline points="154.7,90.6 149.3,96.5 143.4,91" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /><polyline points="114,133 111.4,140.5 103.9,137.9" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /><polyline points="94.2,188.5 94.6,196.5 86.6,197" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /><text x="244" y="198" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="end">O</text><text x="328" y="185" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A<tspan font-size="11" dy="4">1</tspan></text><text x="323.3" y="111.7" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A<tspan font-size="11" dy="4">2</tspan></text><text x="270.9" y="63.4" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A<tspan font-size="11" dy="4">3</tspan></text><text x="201.5" y="53.7" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A<tspan font-size="11" dy="4">4</tspan></text><text x="137.2" y="79.2" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A<tspan font-size="11" dy="4">5</tspan></text><text x="91.3" y="130.1" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A<tspan font-size="11" dy="4">6</tspan></text><text x="70.2" y="194.8" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A<tspan font-size="11" dy="4">7</tspan></text><text x="75" y="262.3" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A<tspan font-size="11" dy="4">8</tspan></text></svg></div>

1. Calculer $OA_2^2$, puis $OA_3^2$ et $OA_4^2$. En déduire la valeur exacte de $OA_4$.
2. Expliquer pourquoi, à chaque nouveau triangle, le carré de la longueur augmente de $1$ : $OA_{n+1}^2 = OA_n^2 + 1$. En déduire $OA_n^2$ en fonction de $n$.
3. Combien de triangles faut-il construire pour obtenir un segment $[OA_n]$ de longueur $5$ cm ?
4. Parmi les segments $[OA_1]$, $[OA_2]$, …, $[OA_{50}]$, lesquels ont une longueur égale à un nombre entier ?
5. Peut-on obtenir, dans cette spirale, un segment $[OA_n]$ de longueur $7{,}5$ cm ? Justifier.
6. Calculer le périmètre du triangle $OA_3A_4$, arrondi au millimètre.`,
      solution: `**1.** Le triangle $OA_1A_2$ est rectangle en $A_1$ : d'après le théorème de Pythagore, $OA_2^2 = OA_1^2 + A_1A_2^2 = 1 + 1 = 2$.
Le triangle $OA_2A_3$ est rectangle en $A_2$ : $OA_3^2 = OA_2^2 + A_2A_3^2 = 2 + 1 = 3$.
De même, $OA_4^2 = OA_3^2 + 1 = 4$, donc $OA_4 = \\sqrt{4} = 2$ cm.

**2.** Le triangle $OA_nA_{n+1}$ est rectangle en $A_n$, d'hypoténuse $[OA_{n+1}]$, et $A_nA_{n+1} = 1$. D'après le théorème de Pythagore :
$OA_{n+1}^2 = OA_n^2 + A_nA_{n+1}^2 = OA_n^2 + 1$.
On part de $OA_1^2 = 1$ et on ajoute $1$ à chaque étape : $OA_2^2 = 2$, $OA_3^2 = 3$, … donc **$OA_n^2 = n$** et $OA_n = \\sqrt{n}$.

**3.** On veut $OA_n = 5$, c'est-à-dire $OA_n^2 = 25$, soit $n = 25$. Le segment $[OA_{25}]$ est l'hypoténuse du triangle $OA_{24}A_{25}$ ; comme les triangles sont $OA_1A_2$, $OA_2A_3$, …, $OA_{24}A_{25}$, il faut construire **$24$ triangles**.

**4.** $OA_n = \\sqrt{n}$ est un nombre entier lorsque $n$ est le carré d'un entier. Les carrés inférieurs ou égaux à $50$ sont $1$, $4$, $9$, $16$, $25$, $36$ et $49$. Les segments de longueur entière sont donc $[OA_1]$, $[OA_4]$, $[OA_9]$, $[OA_{16}]$, $[OA_{25}]$, $[OA_{36}]$ et $[OA_{49}]$, de longueurs respectives $1$, $2$, $3$, $4$, $5$, $6$ et $7$ cm.

**5.** Il faudrait $OA_n^2 = 7{,}5^2 = 56{,}25$, c'est-à-dire $n = 56{,}25$. Or $n$ est un nombre entier (c'est le numéro du point). **C'est impossible** : $OA_{56} = \\sqrt{56} \\approx 7{,}48$ cm et $OA_{57} = \\sqrt{57} \\approx 7{,}55$ cm encadrent $7{,}5$ cm sans l'atteindre.

**6.** $OA_3 = \\sqrt{3}$, $A_3A_4 = 1$ et $OA_4 = 2$. Le périmètre vaut $\\sqrt{3} + 1 + 2 = 3 + \\sqrt{3} \\approx 4{,}732$, soit environ **$4{,}7$ cm**.`
    }
  ],
  "4G2": [
    {
      id: "4G2-ds-01",
      title: "Les milieux de deux côtés",
      difficulty: 1,
      points: 4,
      statement: `**Pour aller plus loin** (non exigible en 4e).
Dans le triangle $ABC$ ci-dessous, $I$ est le milieu de $[AB]$ et $J$ est le milieu de $[AC]$. On donne $AB = 7$ cm, $AC = 8$ cm et $BC = 9$ cm.

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
      statement: `**Pour aller plus loin** (non exigible en 4e).
Le triangle $EFG$ est rectangle en $E$ et $FG = 10$ cm. On note $O$ le milieu de $[FG]$.
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
      statement: `**Pour aller plus loin** (non exigible en 4e).
Dans le triangle $RST$, on donne $RS = 6$ cm, $RT = 11$ cm et $ST = 7{,}4$ cm. Le point $M$ est le milieu de $[RS]$. La droite parallèle à $(ST)$ passant par $M$ coupe $[RT]$ en $N$.
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
      statement: `**Pour aller plus loin** (non exigible en 4e).
Le triangle $ABC$ est rectangle en $B$, avec $AB = 6$ cm et $BC = 8$ cm. On note $M$ le milieu de $[AC]$.
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
      statement: `**Pour aller plus loin** (non exigible en 4e).
$ABCD$ est un quadrilatère quelconque dont les diagonales mesurent $AC = 10$ cm et $BD = 8$ cm. On note $I$, $J$, $K$ et $L$ les milieux respectifs de $[AB]$, $[BC]$, $[CD]$ et $[DA]$.
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
      statement: `**Pour aller plus loin** (non exigible en 4e).
On considère un cercle $\\mathcal{C}$ de centre $O$ et de diamètre $[AB]$, avec $AB = 10$ cm. Le point $C$ appartient à $\\mathcal{C}$ et $AC = 8$ cm. On note $I$ le milieu de $[AC]$.
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
      statement: `**Pour aller plus loin** (non exigible en 4e).
Le triangle $ABC$ a pour côtés $AB = 12$ cm, $BC = 20$ cm et $CA = 16$ cm. On construit le triangle $A_1B_1C_1$ dont les sommets sont les milieux des côtés de $ABC$, puis le triangle $A_2B_2C_2$ dont les sommets sont les milieux des côtés de $A_1B_1C_1$, et ainsi de suite.
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
      statement: `**Pour aller plus loin** (non exigible en 4e).
$ABCD$ est un parallélogramme de centre $O$, avec $AD = 7$ cm. On note $I$ le milieu de $[AB]$. La droite $(OI)$ coupe le segment $[CD]$ en $J$.
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
      statement: `**Pour aller plus loin** (non exigible en 4e).
Un escabeau est schématisé par un triangle $ABC$ : $A$ est le sommet, $B$ et $C$ sont les pieds posés au sol. Une corde relie les points $M$ et $N$, milieux respectifs des montants $[AB]$ et $[AC]$.
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
      statement: `**Pour aller plus loin** (non exigible en 4e).
Trois maisons $A$, $B$ et $C$ forment un triangle rectangle en $A$, avec $AB = 30$ m et $AC = 40$ m. On veut creuser un puits $P$ situé à la même distance des trois maisons.
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
      statement: `**Pour aller plus loin** (non exigible en 4e).
$ABCD$ est un trapèze de bases $[AB]$ et $[CD]$, avec $(AB) \\parallel (CD)$, $AB = 10$ cm et $CD = 6$ cm. Le point $M$ est le milieu de $[AD]$. La droite parallèle à $(AB)$ passant par $M$ coupe la diagonale $[AC]$ en $I$ et le côté $[BC]$ en $N$ (la figure n'est pas en vraie grandeur).

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 250" width="400" height="250" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="40,220 360,220 296,92 104,92" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="40" y1="220" x2="296" y2="92" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4" /><line x1="72" y1="156" x2="328" y2="156" stroke="currentColor" stroke-width="1.8" /><line x1="50.6" y1="185.3" x2="61.4" y2="190.7" stroke="currentColor" stroke-width="1.4" /><line x1="82.6" y1="121.3" x2="93.4" y2="126.7" stroke="currentColor" stroke-width="1.4" /><circle cx="72" cy="156" r="2.6" fill="currentColor" /><circle cx="328" cy="156" r="2.6" fill="currentColor" /><circle cx="168" cy="156" r="2.6" fill="currentColor" /><text x="30" y="238" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="370" y="238" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="306" y="84" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="94" y="84" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">D</text><text x="60" y="161" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="end">M</text><text x="340" y="161" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="start">N</text><text x="170" y="148" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">I</text><text x="200" y="242" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">10 cm</text><text x="200" y="82" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">6 cm</text></svg></div>

1. Justifier que les droites $(MN)$ et $(DC)$ sont parallèles.
2. En se plaçant dans le triangle $ACD$, démontrer que $I$ est le milieu de $[AC]$, puis calculer $MI$.
3. En se plaçant dans le triangle $ABC$, démontrer que $N$ est le milieu de $[BC]$, puis calculer $IN$.
4. a) Le point $M$ est sur le côté $[AD]$ et le point $N$ sur le côté $[BC]$. Expliquer pourquoi $M$ et $N$ sont de part et d'autre de la diagonale $(AC)$, puis en déduire que $I$ appartient au segment $[MN]$.
   b) Calculer la longueur $MN$. Comparer avec la moyenne des longueurs des deux bases.`,
      solution: `**1.** La droite $(MN)$ est parallèle à $(AB)$, et $(AB) \\parallel (CD)$. Deux droites parallèles à une même troisième sont parallèles entre elles : $(MN) \\parallel (DC)$.

**2.** Le point $I$ est sur $(MN)$, donc $(MI) \\parallel (DC)$.
Dans le triangle $ACD$, la droite $(MI)$ passe par le milieu $M$ de $[AD]$ et est parallèle à $(DC)$. Si une droite passe par le milieu d'un côté d'un triangle et est parallèle à un deuxième côté, alors elle coupe le troisième côté en son milieu : $I$ est le milieu de $[AC]$.
$M$ et $I$ sont les milieux de $[AD]$ et $[AC]$, donc $MI = \\dfrac{DC}{2} = \\dfrac{6}{2} = 3$ cm.

**3.** Dans le triangle $ABC$, la droite $(IN)$ passe par le milieu $I$ de $[AC]$ et est parallèle à $(AB)$ : elle coupe $[BC]$ en son milieu, donc $N$ est le milieu de $[BC]$.
$I$ et $N$ sont les milieux de $[CA]$ et $[CB]$, donc $IN = \\dfrac{AB}{2} = \\dfrac{10}{2} = 5$ cm.

**4. a)** La diagonale $(AC)$ partage le trapèze en deux triangles : $ACD$, du côté du sommet $D$, et $ABC$, du côté du sommet $B$. Le point $M$, situé sur le côté $[AD]$ (et distinct de $A$), est du même côté de $(AC)$ que $D$ ; le point $N$, situé sur $[BC]$ (et distinct de $C$), est du même côté que $B$. Comme $B$ et $D$ sont de part et d'autre de la diagonale $(AC)$, les points $M$ et $N$ le sont aussi.
Le segment $[MN]$ traverse donc la droite $(AC)$ en un point. Ce point est commun aux droites $(MN)$ et $(AC)$ : c'est $I$. Ainsi **$I$ appartient au segment $[MN]$**.

**b)** Comme $I \\in [MN]$, on a $MN = MI + IN = 3 + 5 = 8$ cm.
Moyenne des bases : $\\dfrac{10 + 6}{2} = 8$ cm. La longueur $MN$ est **égale à la moyenne** des longueurs des deux bases.`
    },
    {
      id: "4G2-ds-12",
      title: "Le triangle rectangle à 60°",
      difficulty: 4,
      points: 6,
      statement: `**Pour aller plus loin** (non exigible en 4e).
Le triangle $ABC$ est rectangle en $A$, avec $BC = 12$ cm et $\\widehat{ABC} = 60^\\circ$. On note $M$ le milieu de $[BC]$ et $I$ le milieu de $[AC]$.
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
    },
    {
      id: "4G2-ds-13",
      title: "Une médiane qui révèle un angle droit",
      difficulty: 1,
      points: 4,
      statement: `**Pour aller plus loin** (non exigible en 4e).
$ABC$ est un triangle tel que $AB = 8$ cm et $AC = 4{,}8$ cm. On note $M$ le milieu de $[AB]$ et on mesure $MC = 4$ cm.
1. Calculer $MA$ et $MB$. Que remarque-t-on en comparant avec $MC$ ?
2. En déduire que le point $C$ appartient au cercle de diamètre $[AB]$, puis que le triangle $ABC$ est rectangle. Préciser en quel sommet.
3. Calculer la longueur $BC$.
4. Calculer l'aire du triangle $ABC$.`,
      solution: `**1.** $M$ est le milieu de $[AB]$, donc $MA = MB = \\dfrac{8}{2} = 4$ cm. On remarque que $MA = MB = MC = 4$ cm.

**2.** Les points $A$, $B$ et $C$ sont tous à $4$ cm de $M$ : ils appartiennent au cercle de centre $M$ et de rayon $4$ cm. Comme $M$ est le milieu de $[AB]$, ce cercle est le cercle de diamètre $[AB]$.
Si un triangle est inscrit dans un cercle ayant pour diamètre l'un de ses côtés, alors il est rectangle et ce côté est son hypoténuse. Le triangle $ABC$ est donc **rectangle en $C$**.

**3.** Le triangle $ABC$ est rectangle en $C$, d'hypoténuse $[AB]$. D'après le théorème de Pythagore :
$BC^2 = AB^2 - AC^2 = 8^2 - 4{,}8^2 = 64 - 23{,}04 = 40{,}96$, donc $BC = \\sqrt{40{,}96} = 6{,}4$ cm.

**4.** Le triangle étant rectangle en $C$ : $\\mathcal{A} = \\dfrac{AC \\times BC}{2} = \\dfrac{4{,}8 \\times 6{,}4}{2} = 15{,}36$ cm².`
    },
    {
      id: "4G2-ds-14",
      title: "La latte de la voile",
      difficulty: 2,
      points: 5,
      statement: `**Pour aller plus loin** (non exigible en 4e).
La voile d'un petit bateau est un triangle $ABC$ rectangle en $B$ : le mât $[AB]$ est vertical et mesure $6$ m, la bôme $[BC]$ est horizontale et mesure $3{,}2$ m. Pour rigidifier la voile, on coud une latte $[MN]$ qui relie le milieu $M$ du mât $[AB]$ au milieu $N$ du bord $[AC]$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:260px;"><svg class="geo-svg-figure" viewBox="0 0 300 280" width="300" height="280" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="80,30 80,250 208,250" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="80" y1="140" x2="144" y2="140" stroke="#ea580c" stroke-width="2.2" /><polyline points="80,239 91,239 91,250" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /><line x1="86" y1="85" x2="74" y2="85" stroke="currentColor" stroke-width="1.4" /><line x1="86" y1="195" x2="74" y2="195" stroke="currentColor" stroke-width="1.4" /><line x1="115.9" y1="79.8" x2="105.6" y2="85.9" stroke="currentColor" stroke-width="1.4" /><line x1="118.4" y1="84.1" x2="108.1" y2="90.2" stroke="currentColor" stroke-width="1.4" /><line x1="179.9" y1="189.8" x2="169.6" y2="195.9" stroke="currentColor" stroke-width="1.4" /><line x1="182.4" y1="194.1" x2="172.1" y2="200.2" stroke="currentColor" stroke-width="1.4" /><circle cx="80" cy="140" r="2.6" fill="currentColor" /><circle cx="144" cy="140" r="2.6" fill="currentColor" /><text x="70" y="34" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="end">A</text><text x="70" y="256" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="end">B</text><text x="218" y="256" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="start">C</text><text x="70" y="145" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="end">M</text><text x="154" y="140" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="start">N</text><text x="144" y="272" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">3,2 m</text></svg></div>

1. Calculer la longueur de la latte $MN$. Justifier.
2. Démontrer que la latte est horizontale, c'est-à-dire parallèle à la bôme, puis qu'elle est perpendiculaire au mât.
3. Calculer la longueur $AC$.
4. On veut tendre un fil entre le pied du mât $B$ et le point $N$. Quelle doit être sa longueur ? Justifier.`,
      solution: `**1.** Dans le triangle $ABC$, $M$ est le milieu de $[AB]$ et $N$ le milieu de $[AC]$. Le segment qui joint les milieux de deux côtés d'un triangle mesure la moitié du troisième côté :
$MN = \\dfrac{BC}{2} = \\dfrac{3{,}2}{2} = 1{,}6$ m.

**2.** Dans le triangle $ABC$, la droite qui passe par les milieux de deux côtés est parallèle au troisième côté : $(MN) \\parallel (BC)$. La bôme étant horizontale, la latte l'est aussi.
De plus, le triangle est rectangle en $B$, donc $(BC) \\perp (AB)$. Si deux droites sont parallèles, toute droite perpendiculaire à l'une est perpendiculaire à l'autre : $(MN) \\perp (AB)$.

**3.** Le triangle $ABC$ est rectangle en $B$, d'hypoténuse $[AC]$. D'après le théorème de Pythagore :
$AC^2 = AB^2 + BC^2 = 6^2 + 3{,}2^2 = 36 + 10{,}24 = 46{,}24$, donc $AC = \\sqrt{46{,}24} = 6{,}8$ m.

**4.** Le triangle $ABC$ est rectangle en $B$ : son cercle circonscrit a pour centre le milieu $N$ de l'hypoténuse $[AC]$ et pour rayon $\\dfrac{AC}{2}$. Le point $B$ est sur ce cercle, donc :
$BN = \\dfrac{AC}{2} = \\dfrac{6{,}8}{2} = 3{,}4$ m. Le fil doit mesurer **$3{,}4$ m**.`
    },
    {
      id: "4G2-ds-15",
      title: "Les milieux et le pied de la hauteur",
      difficulty: 3,
      points: 5,
      statement: `**Pour aller plus loin** (non exigible en 4e).
$ABC$ est un triangle tel que $AB = 10$ cm, $AC = 12$ cm et $BC = 14$ cm. On note $J$ le milieu de $[AB]$, $K$ le milieu de $[AC]$ et $H$ le pied de la hauteur issue de $A$ ; on admet que $H$ appartient au segment $[BC]$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 280" width="400" height="280" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="160.3,48.4 30,250 366,250" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="160.3" y1="48.4" x2="160.3" y2="250" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4" /><polyline points="160.3,240 170.3,240 170.3,250" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" /><polygon points="160.3,250 95.1,149.2 263.1,149.2" fill="rgba(234,88,12,0.12)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="132.8" y1="102.1" x2="122.7" y2="95.6" stroke="currentColor" stroke-width="1.4" /><line x1="67.6" y1="202.9" x2="57.5" y2="196.4" stroke="currentColor" stroke-width="1.4" /><line x1="214.1" y1="92.8" x2="205.7" y2="101.4" stroke="currentColor" stroke-width="1.4" /><line x1="217.7" y1="96.3" x2="209.3" y2="104.9" stroke="currentColor" stroke-width="1.4" /><line x1="317" y1="193.6" x2="308.6" y2="202.1" stroke="currentColor" stroke-width="1.4" /><line x1="320.6" y1="197.1" x2="312.2" y2="205.6" stroke="currentColor" stroke-width="1.4" /><text x="160.3" y="38.4" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="24" y="268" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="372" y="268" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="160.3" y="270" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">H</text><text x="83.1" y="149.2" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="end">J</text><text x="275.1" y="149.2" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="start">K</text></svg></div>

1. Démontrer que $(JK) \\parallel (BC)$ et calculer $JK$.
2. a) Quelle est la nature du triangle $ABH$ ? En déduire le centre de son cercle circonscrit.
   b) Calculer $HJ$.
3. Calculer de même $HK$.
4. Calculer le périmètre du triangle $HJK$ et le comparer à celui du triangle $ABC$.`,
      solution: `**1.** Dans le triangle $ABC$, $J$ est le milieu de $[AB]$ et $K$ le milieu de $[AC]$. La droite qui passe par les milieux de deux côtés d'un triangle est parallèle au troisième côté : $(JK) \\parallel (BC)$.
De plus, le segment qui joint ces milieux mesure la moitié du troisième côté : $JK = \\dfrac{BC}{2} = \\dfrac{14}{2} = 7$ cm.

**2. a)** $H$ est le pied de la hauteur issue de $A$, donc $(AH) \\perp (BC)$ : le triangle $ABH$ est **rectangle en $H$**, d'hypoténuse $[AB]$. Le centre du cercle circonscrit à un triangle rectangle est le milieu de son hypoténuse : c'est le point $J$.

**b)** $H$ appartient à ce cercle de centre $J$ et de rayon $\\dfrac{AB}{2}$, donc $HJ = \\dfrac{AB}{2} = \\dfrac{10}{2} = 5$ cm.

**3.** De même, le triangle $ACH$ est rectangle en $H$, d'hypoténuse $[AC]$ ; son cercle circonscrit a pour centre le milieu $K$ de $[AC]$. Donc $HK = \\dfrac{AC}{2} = \\dfrac{12}{2} = 6$ cm.

**4.** Périmètre de $HJK$ : $HJ + JK + KH = 5 + 7 + 6 = 18$ cm.
Périmètre de $ABC$ : $10 + 12 + 14 = 36$ cm.
Le périmètre du triangle $HJK$ est **la moitié** de celui du triangle $ABC$ : chaque côté de $HJK$ mesure la moitié d'un côté de $ABC$.`
    },
    {
      id: "4G2-ds-16",
      title: "Démontrer la propriété du cercle circonscrit",
      difficulty: 4,
      points: 6,
      statement: `**Pour aller plus loin** (non exigible en 4e).
On veut démontrer, à l'aide de la droite des milieux, que le milieu de l'hypoténuse d'un triangle rectangle est à égale distance des trois sommets.
$ABC$ est un triangle rectangle en $A$, avec $AB = 8$ cm et $AC = 6$ cm. On note $M$ le milieu de $[BC]$, $I$ le milieu de $[AB]$ et $J$ le milieu de $[AC]$.
1. Faire une figure en vraie grandeur.
2. a) Démontrer que $(MI) \\parallel (AC)$, puis que $(MI) \\perp (AB)$.
   b) En déduire que la droite $(MI)$ est la médiatrice du segment $[AB]$, puis que $MA = MB$.
3. Démontrer de même que $MA = MC$. Que peut-on en conclure pour le point $M$ ?
4. a) Démontrer que le quadrilatère $AIMJ$ est un rectangle.
   b) Calculer $MI$, $MJ$, puis l'aire du rectangle $AIMJ$. Quelle fraction de l'aire du triangle $ABC$ représente-t-elle ?
5. Calculer $BC$, puis vérifier que $MA = \\dfrac{BC}{2}$ en calculant la diagonale $[AM]$ du rectangle $AIMJ$.`,
      solution: `**1.** Figure : triangle $ABC$ rectangle en $A$ ($AB = 8$ cm, $AC = 6$ cm), avec les milieux $M$, $I$, $J$ codés et les segments $[MI]$, $[MJ]$, $[MA]$.

**2. a)** Dans le triangle $ABC$, $M$ est le milieu de $[BC]$ et $I$ celui de $[BA]$. La droite qui passe par les milieux de deux côtés d'un triangle est parallèle au troisième côté : $(MI) \\parallel (AC)$.
Or $(AC) \\perp (AB)$ car le triangle est rectangle en $A$. Si deux droites sont parallèles, toute droite perpendiculaire à l'une est perpendiculaire à l'autre : $(MI) \\perp (AB)$.

**b)** La droite $(MI)$ est perpendiculaire à $[AB]$ et passe par son milieu $I$ : c'est la **médiatrice** de $[AB]$. Le point $M$ est sur cette médiatrice, donc il est à égale distance de $A$ et de $B$ : $MA = MB$.

**3.** De même, $(MJ) \\parallel (AB)$ (droite des milieux dans le triangle $ABC$) et $(AB) \\perp (AC)$, donc $(MJ) \\perp (AC)$ ; comme $J$ est le milieu de $[AC]$, $(MJ)$ est la médiatrice de $[AC]$ et $MA = MC$.
Ainsi $MA = MB = MC$ : $M$ est **le centre du cercle circonscrit** au triangle $ABC$, et ce cercle a pour diamètre l'hypoténuse $[BC]$.

**4. a)** Le quadrilatère $AIMJ$ a trois angles droits : en $A$ (triangle rectangle), en $I$ (car $(MI) \\perp (AB)$) et en $J$ (car $(MJ) \\perp (AC)$). Un quadrilatère qui a trois angles droits est un **rectangle**.

**b)** D'après le théorème de la droite des milieux : $MI = \\dfrac{AC}{2} = 3$ cm et $MJ = \\dfrac{AB}{2} = 4$ cm.
Aire du rectangle : $3 \\times 4 = 12$ cm². Aire du triangle : $\\dfrac{AB \\times AC}{2} = \\dfrac{8 \\times 6}{2} = 24$ cm².
Le rectangle occupe **la moitié** de l'aire du triangle.

**5.** D'après le théorème de Pythagore dans $ABC$ rectangle en $A$ : $BC^2 = 8^2 + 6^2 = 100$, donc $BC = 10$ cm et $\\dfrac{BC}{2} = 5$ cm.
Dans le triangle $AIM$, rectangle en $I$, avec $AI = 4$ cm et $IM = 3$ cm : $AM^2 = 4^2 + 3^2 = 25$, donc $AM = 5$ cm.
On retrouve bien $MA = \\dfrac{BC}{2} = 5$ cm.`
    },
    {
      id: "4G2-ds-17",
      title: "Calculer des longueurs avec le théorème de Thalès",
      difficulty: 1,
      points: 4,
      statement: `$ABC$ est un triangle. Le point $M$ appartient au segment $[AB]$, le point $N$ appartient au segment $[AC]$, et les droites $(MN)$ et $(BC)$ sont parallèles.
On donne $AM = 6$ cm, $AB = 10$ cm, $AN = 9$ cm et $BC = 20$ cm.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 280" width="400" height="280" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="153.1,86.1 50,195 350,195" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="91.3" y1="151.4" x2="271.3" y2="151.4" stroke="currentColor" stroke-width="1.3" /><text x="153.1" y="78.1" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="38" y="211" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="362" y="211" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="77.3" y="151.4" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">M</text><text x="285.3" y="151.4" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">N</text></svg></div>

1. Écrire les trois quotients égaux donnés par le théorème de Thalès.
2. Calculer $AC$.
3. Calculer $MN$.`,
      solution: `**1.** Dans le triangle $ABC$, on a $M \\in [AB]$, $N \\in [AC]$ et $(MN) \\parallel (BC)$. D'après le théorème de Thalès : $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{MN}{BC}$.
**2.** On remplace par les longueurs connues : $\\dfrac{6}{10} = \\dfrac{9}{AC}$.
L'égalité des produits en croix donne $AC = \\dfrac{10 \\times 9}{6} = \\dfrac{90}{6} = 15$ cm.
**3.** De même, $\\dfrac{6}{10} = \\dfrac{MN}{20}$, donc $MN = \\dfrac{6 \\times 20}{10} = \\dfrac{120}{10} = 12$ cm.`
    },
    {
      id: "4G2-ds-18",
      title: "Un trapèze découpé dans un triangle",
      difficulty: 2,
      points: 4,
      statement: `$ABC$ est un triangle tel que $AB = 15$ cm, $AC = 10$ cm et $BC = 20$ cm. Le point $D$ appartient au segment $[AB]$, avec $AD = 6$ cm. La parallèle à $(BC)$ passant par $D$ coupe le segment $[AC]$ en $E$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 280" width="400" height="280" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="246.9,86.1 50,195 350,195" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><polygon points="168.1,129.6 50,195 350,195 288.1,129.6" fill="rgba(234,88,12,0.12)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><text x="246.9" y="78.1" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="38" y="211" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="362" y="211" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="154.1" y="127.6" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">D</text><text x="302.1" y="127.6" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">E</text></svg></div>

1. Calculer $AE$.
2. Calculer $DE$.
3. Calculer $DB$ et $EC$.
4. Calculer le périmètre du trapèze $DBCE$.`,
      solution: `Dans le triangle $ABC$, on a $D \\in [AB]$, $E \\in [AC]$ et $(DE) \\parallel (BC)$. D'après le théorème de Thalès : $\\dfrac{AD}{AB} = \\dfrac{AE}{AC} = \\dfrac{DE}{BC}$, soit $\\dfrac{6}{15} = \\dfrac{AE}{10} = \\dfrac{DE}{20}$.
**1.** $AE = \\dfrac{6 \\times 10}{15} = \\dfrac{60}{15} = 4$ cm.
**2.** $DE = \\dfrac{6 \\times 20}{15} = \\dfrac{120}{15} = 8$ cm.
**3.** $D \\in [AB]$, donc $DB = AB - AD = 15 - 6 = 9$ cm.
$E \\in [AC]$, donc $EC = AC - AE = 10 - 4 = 6$ cm.
**4.** Le périmètre du trapèze $DBCE$ est $DB + BC + CE + ED = 9 + 20 + 6 + 8 = 43$ cm.`
    },
    {
      id: "4G2-ds-19",
      title: "Parallèles ou non ? La réciproque de Thalès",
      difficulty: 3,
      points: 5,
      statement: `$RST$ est un triangle tel que $RS = 12$ cm, $RT = 18$ cm et $ST = 15$ cm. Le point $U$ appartient au segment $[RS]$, avec $RU = 4{,}8$ cm. Les points $V$ et $W$ appartiennent au segment $[RT]$, avec $RV = 7{,}2$ cm et $RW = 13{,}5$ cm.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 280" width="400" height="280" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="87,40.7 60,255 330,255" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="76.2" y1="126.4" x2="184.2" y2="126.4" stroke="currentColor" stroke-width="1.3" /><line x1="76.2" y1="126.4" x2="269.3" y2="201.4" stroke="currentColor" stroke-width="1.3" /><text x="87" y="34.7" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">R</text><text x="48" y="271" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">S</text><text x="342" y="271" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">T</text><text x="62.2" y="126.4" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">U</text><text x="198.2" y="126.4" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">V</text><text x="283.3" y="201.4" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">W</text></svg></div>

1. Démontrer que les droites $(UV)$ et $(ST)$ sont parallèles.
2. Les droites $(UW)$ et $(ST)$ sont-elles parallèles ? Justifier.
3. Calculer $UV$.
4. On veut placer un point $X$ sur le segment $[RS]$ de sorte que les droites $(XW)$ et $(ST)$ soient parallèles. Quelle doit être la longueur $RX$ ? Justifier.`,
      solution: `**1.** On calcule séparément les deux quotients : $\\dfrac{RU}{RS} = \\dfrac{4{,}8}{12} = 0{,}4$ et $\\dfrac{RV}{RT} = \\dfrac{7{,}2}{18} = 0{,}4$.
Les quotients sont égaux, avec $U \\in [RS]$ et $V \\in [RT]$. D'après la réciproque du théorème de Thalès, $(UV) \\parallel (ST)$.
**2.** $\\dfrac{RU}{RS} = 0{,}4$ et $\\dfrac{RW}{RT} = \\dfrac{13{,}5}{18} = 0{,}75$.
Si les droites $(UW)$ et $(ST)$ étaient parallèles, le théorème de Thalès donnerait l'égalité de ces deux quotients. Or $0{,}4 \\neq 0{,}75$, donc les droites $(UW)$ et $(ST)$ ne sont pas parallèles.
**3.** D'après la question 1, $(UV) \\parallel (ST)$. Le théorème de Thalès donne $\\dfrac{UV}{ST} = \\dfrac{RU}{RS} = 0{,}4$, donc $UV = 0{,}4 \\times 15 = 6$ cm.
**4.** Si $(XW) \\parallel (ST)$, le théorème de Thalès donne $\\dfrac{RX}{RS} = \\dfrac{RW}{RT} = 0{,}75$, donc $RX = 0{,}75 \\times 12 = 9$ cm.
Réciproquement, avec $RX = 9$ cm, on a $\\dfrac{RX}{RS} = \\dfrac{9}{12} = 0{,}75 = \\dfrac{RW}{RT}$, avec $X \\in [RS]$ et $W \\in [RT]$ : d'après la réciproque du théorème de Thalès, $(XW) \\parallel (ST)$. Il faut donc prendre $RX = 9$ cm.`
    },
    {
      id: "4G2-ds-20",
      title: "Deux réciproques et un trapèze",
      difficulty: 4,
      points: 6,
      statement: `Sur la figure ci-dessous, qui n'est pas à l'échelle, $ABC$ est un triangle tel que $AB = 16$ cm, $BC = 12$ cm et $AC = 20$ cm. Le point $M$ appartient au segment $[AB]$, avec $AM = 12$ cm, et le point $N$ appartient au segment $[AC]$, avec $AN = 15$ cm.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 280" width="400" height="280" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="110,30 60,235 340,235" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="72.5" y1="183.8" x2="282.5" y2="183.8" stroke="currentColor" stroke-width="1.3" /><text x="110" y="22" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="48" y="251" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="352" y="251" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="58.5" y="183.8" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">M</text><text x="296.5" y="181.8" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">N</text></svg></div>

1. Démontrer que le triangle $ABC$ est rectangle en $B$.
2. Démontrer que les droites $(MN)$ et $(BC)$ sont parallèles.
3. En déduire que les droites $(MN)$ et $(AB)$ sont perpendiculaires.
4. a) Calculer $MN$ à l'aide du théorème de Thalès.
   b) Retrouver cette longueur à l'aide du théorème de Pythagore.
5. Calculer l'aire du quadrilatère $MBCN$.`,
      solution: `**1.** Le plus grand côté est $[AC]$. On calcule séparément : $AC^2 = 20^2 = 400$ et $AB^2 + BC^2 = 16^2 + 12^2 = 256 + 144 = 400$.
Ces deux résultats sont égaux. D'après la réciproque du théorème de Pythagore, le triangle $ABC$ est rectangle en $B$.
**2.** $\\dfrac{AM}{AB} = \\dfrac{12}{16} = 0{,}75$ et $\\dfrac{AN}{AC} = \\dfrac{15}{20} = 0{,}75$.
Les quotients sont égaux, avec $M \\in [AB]$ et $N \\in [AC]$. D'après la réciproque du théorème de Thalès, $(MN) \\parallel (BC)$.
**3.** Le triangle $ABC$ est rectangle en $B$, donc $(BC) \\perp (AB)$. Or $(MN) \\parallel (BC)$. Si deux droites sont parallèles, toute perpendiculaire à l'une est perpendiculaire à l'autre : donc $(MN) \\perp (AB)$.
**4. a)** Comme $(MN) \\parallel (BC)$, le théorème de Thalès donne $\\dfrac{AM}{AB} = \\dfrac{MN}{BC}$, soit $\\dfrac{12}{16} = \\dfrac{MN}{12}$, donc $MN = \\dfrac{12 \\times 12}{16} = \\dfrac{144}{16} = 9$ cm.
**4. b)** D'après la question 3, le triangle $AMN$ est rectangle en $M$, d'hypoténuse $[AN]$. D'après le théorème de Pythagore, $AN^2 = AM^2 + MN^2$, donc $MN^2 = 15^2 - 12^2 = 225 - 144 = 81$, et $MN = \\sqrt{81} = 9$ cm. On retrouve bien la même longueur.
**5.** L'aire du triangle $ABC$, rectangle en $B$, vaut $\\dfrac{16 \\times 12}{2} = 96$ cm². L'aire du triangle $AMN$, rectangle en $M$, vaut $\\dfrac{12 \\times 9}{2} = 54$ cm².
L'aire du quadrilatère $MBCN$ est donc $96 - 54 = 42$ cm².`
    },
    {
      id: "4G2-ds-21",
      title: "Reconnaître des triangles égaux",
      difficulty: 1,
      points: 6,
      statement: `Pour chaque situation, indiquer si l'on peut affirmer que les triangles $ABC$ et $DEF$ sont égaux. Si oui, citer le cas d'égalité utilisé. Si non, expliquer pourquoi.

1. $AB = DE = 5$ cm, $BC = EF = 7$ cm et $AC = DF = 6$ cm.

2. $AB = DE = 4$ cm, $AC = DF = 6$ cm et $\\widehat{BAC} = \\widehat{EDF} = 50^\\circ$.

3. $BC = EF = 8$ cm, $\\widehat{ABC} = \\widehat{DEF} = 40^\\circ$ et $\\widehat{ACB} = \\widehat{DFE} = 70^\\circ$.

4. $\\widehat{BAC} = \\widehat{EDF} = 60^\\circ$, $\\widehat{ABC} = \\widehat{DEF} = 50^\\circ$ et $\\widehat{ACB} = \\widehat{DFE} = 70^\\circ$.

5. $AB = DE = 6$ cm, $BC = EF = 5$ cm et $\\widehat{BAC} = \\widehat{EDF} = 40^\\circ$.

6. Un élève trace un triangle à partir d'un programme de construction donnant ses trois longueurs ; son voisin suit le même programme. Leurs deux triangles sont-ils forcément égaux ? Justifier.`,
      solution: `**1.** Les trois côtés sont respectivement de même longueur : les triangles sont égaux d'après le cas des trois côtés.

**2.** L'angle en $A$ est compris entre les côtés $[AB]$ et $[AC]$, et l'angle en $D$ entre $[DE]$ et $[DF]$ : les triangles sont égaux d'après le cas de l'angle compris entre deux côtés.

**3.** Le côté $[BC]$ est compris entre les angles de sommets $B$ et $C$, et le côté $[EF]$ entre ceux de sommets $E$ et $F$ : les triangles sont égaux d'après le cas du côté compris entre deux angles.

**4.** On ne peut pas l'affirmer : un triangle et son agrandissement ont les mêmes angles sans être superposables. Trois angles de même mesure ne suffisent pas.

**5.** On ne peut pas l'affirmer : l'angle en $A$ n'est pas compris entre les côtés $[AB]$ et $[BC]$, dont l'extrémité commune est $B$. Ce n'est donc pas un cas d'égalité. D'ailleurs, à partir de $[AB]$ et de la demi-droite issue de $A$ qui fait un angle de $40^\\circ$ avec $[AB]$, le cercle de centre $B$ et de rayon $5$ cm coupe cette demi-droite en deux points : on peut construire deux triangles différents avec ces données.

**6.** Oui. Les deux triangles ont leurs trois côtés respectivement de même longueur, donc ils sont égaux d'après le cas des trois côtés (seule leur position sur la feuille peut changer).`
    },
    {
      id: "4G2-ds-22",
      title: "Le cerf-volant",
      difficulty: 2,
      points: 7,
      statement: `$ABCD$ est un quadrilatère convexe tel que $AB = AD$ et $CB = CD$ : on dit que c'est un cerf-volant. On trace sa diagonale $[AC]$.

1. Démontrer que les triangles $ABC$ et $ADC$ sont égaux.

2. En déduire que $\\widehat{BAC} = \\widehat{DAC}$. Que représente la demi-droite $[AC)$ pour l'angle $\\widehat{BAD}$ ?

3. On suppose que $\\widehat{ABC} = 100^\\circ$ et $\\widehat{BAD} = 70^\\circ$.

a) Quelle est la mesure de l'angle $\\widehat{ADC}$ ? Justifier.

b) En utilisant la diagonale $[AC]$, justifier que la somme des angles de $ABCD$ vaut $360^\\circ$, puis calculer $\\widehat{BCD}$.

4. Démontrer que la droite $(AC)$ est la médiatrice du segment $[BD]$.`,
      solution: `**1.** Dans les triangles $ABC$ et $ADC$ : $AB = AD$ et $CB = CD$ (données), et le côté $[AC]$ est commun. D'après le cas des trois côtés, ces triangles sont égaux.

**2.** Les sommets homologues sont $A$ et $A$, $B$ et $D$, $C$ et $C$. Les angles $\\widehat{BAC}$ et $\\widehat{DAC}$ sont homologues, donc ils ont la même mesure. La demi-droite $[AC)$ partage l'angle $\\widehat{BAD}$ en deux angles de même mesure : c'est sa bissectrice.

**3. a)** Les angles $\\widehat{ADC}$ et $\\widehat{ABC}$ sont homologues, donc $\\widehat{ADC} = 100^\\circ$.

**3. b)** La diagonale $[AC]$ découpe $ABCD$ en deux triangles, dont les angles valent chacun $180^\\circ$ au total : la somme des angles de $ABCD$ vaut $2 \\times 180^\\circ = 360^\\circ$. Donc $\\widehat{BCD} = 360^\\circ - 70^\\circ - 100^\\circ - 100^\\circ = 90^\\circ$.

**4.** $AB = AD$, donc $A$ est équidistant de $B$ et de $D$ : il appartient à la médiatrice de $[BD]$. $CB = CD$, donc $C$ appartient aussi à cette médiatrice. Les points $A$ et $C$ étant distincts, la droite $(AC)$ est la médiatrice de $[BD]$.`
    },
    {
      id: "4G2-ds-23",
      title: "Médiane d'un triangle isocèle",
      difficulty: 3,
      points: 8,
      statement: `$ABC$ est un triangle isocèle en $A$ et $M$ est le milieu de $[BC]$.

1. Démontrer que les triangles $ABM$ et $ACM$ sont égaux.

2. En déduire que $\\widehat{AMB} = \\widehat{AMC}$, puis que les droites $(AM)$ et $(BC)$ sont perpendiculaires.

3. Démontrer que la demi-droite $[AM)$ est la bissectrice de l'angle $\\widehat{BAC}$.

4. On donne $AB = AC = 13$ cm et $BC = 10$ cm.

a) Calculer la longueur $AM$.

b) Calculer l'aire du triangle $ABC$.`,
      solution: `**1.** Dans les triangles $ABM$ et $ACM$ : $AB = AC$ (triangle isocèle en $A$), $MB = MC$ ($M$ milieu de $[BC]$) et le côté $[AM]$ est commun. D'après le cas des trois côtés, ces triangles sont égaux.

**2.** Les angles $\\widehat{AMB}$ et $\\widehat{AMC}$ sont homologues, donc ils ont la même mesure. Comme $M$ appartient à $[BC]$, ils sont supplémentaires : leur somme vaut $180^\\circ$. Chacun mesure donc $90^\\circ$, et $(AM) \\perp (BC)$.

**3.** Les angles $\\widehat{BAM}$ et $\\widehat{CAM}$ sont homologues, donc ils ont la même mesure. La demi-droite $[AM)$ partage ainsi $\\widehat{BAC}$ en deux angles de même mesure : c'est sa bissectrice.

**4. a)** $M$ est le milieu de $[BC]$, donc $BM = \\dfrac{10}{2} = 5$ cm. Le triangle $ABM$ est rectangle en $M$ d'après la question 2. D'après le théorème de Pythagore, $AB^2 = AM^2 + BM^2$, donc $AM^2 = 13^2 - 5^2 = 169 - 25 = 144$ et $AM = \\sqrt{144} = 12$ cm.

**4. b)** $[AM]$ est la hauteur issue de $A$. Aire de $ABC$ : $\\dfrac{BC \\times AM}{2} = \\dfrac{10 \\times 12}{2} = 60$ cm².`
    },
    {
      id: "4G2-ds-24",
      title: "Cosinus : valeur exacte, angle, triangles emboîtés",
      difficulty: 2,
      points: 6,
      statement: `Le triangle $KLM$ est rectangle en $L$, avec $KL = 5$ cm et $KM = 13$ cm.

1. Faire une figure à main levée et y indiquer l'hypoténuse et le côté adjacent à l'angle $\\widehat{LKM}$.
2. Donner la valeur exacte de $\\cos(\\widehat{LKM})$.
3. En déduire la mesure de l'angle $\\widehat{LKM}$, arrondie au degré.
4. Le point $N$ appartient à $[KL]$, avec $KN = 2$ cm. La perpendiculaire à $(KL)$ passant par $N$ coupe $[KM]$ en $P$.
   a) Quelle est la nature du triangle $KNP$ ? Justifier.
   b) En écrivant de deux façons le cosinus de l'angle $\\widehat{LKM}$, calculer la longueur $KP$.`,
      solution: `**1.** L'hypoténuse est le côté opposé à l'angle droit : c'est $[KM]$. Le côté adjacent à l'angle $\\widehat{LKM}$ est l'autre côté qui forme cet angle : c'est $[KL]$.

**2.** Dans le triangle $KLM$ rectangle en $L$ :
$$\\cos(\\widehat{LKM}) = \\frac{KL}{KM} = \\frac{5}{13}$$

**3.** À la calculatrice, en mode degré, la touche $\\cos^{-1}$ donne $\\widehat{LKM} \\approx 67^\\circ$.

**4. a)** La droite $(NP)$ est perpendiculaire à $(KL)$ : le triangle $KNP$ est **rectangle en $N$**.

**b)** L'angle $\\widehat{LKM}$ est le même que l'angle $\\widehat{NKP}$, car $N$ appartient à $[KL]$ et $P$ à $[KM]$. Dans le triangle $KNP$ rectangle en $N$, on a $\\cos(\\widehat{NKP}) = \\dfrac{KN}{KP}$. Donc :
$$\\frac{KN}{KP} = \\frac{5}{13}, \\quad\\text{soit}\\quad \\frac{2}{KP} = \\frac{5}{13}$$
Par produit en croix, $KP = \\dfrac{2 \\times 13}{5} = 5{,}2$ cm.`
    },
    {
      id: "4G2-ds-25",
      title: "Le hauban d'un mât",
      difficulty: 3,
      points: 7,
      statement: `Un mât vertical $[PS]$ est planté sur un sol horizontal. Un hauban (câble tendu) relie le sommet $S$ du mât à un point $H$ du sol. On donne $SH = 25$ m et $PH = 15$ m.

1. Justifier que le triangle $PHS$ est rectangle et préciser en quel sommet.
2. Donner la valeur exacte de $\\cos(\\widehat{PHS})$ sous forme d'une fraction simplifiée, puis la mesure de l'angle $\\widehat{PHS}$, arrondie au degré.
3. Pour que le mât soit bien tenu, l'angle entre le hauban et le sol doit être compris entre $45^\\circ$ et $60^\\circ$. Cette installation convient-elle ?
4. On installe un autre mât vertical $[QT]$, plus haut, sur le même sol. Un hauban de $25$ m relie son sommet $T$ à un point $A$ du sol, et forme avec le sol un angle de $60^\\circ$.
   a) À quelle distance du pied $Q$ du mât se trouve le point $A$ ?
   b) Quelle est la hauteur de ce mât ? Donner une valeur arrondie au dixième de mètre.`,
      solution: `**1.** Le mât est vertical et le sol est horizontal : la droite $(PS)$ est perpendiculaire à la droite $(PH)$. Le triangle $PHS$ est donc **rectangle en $P$**.

**2.** L'hypoténuse est $[SH]$ et le côté adjacent à l'angle $\\widehat{PHS}$ est $[PH]$ :
$$\\cos(\\widehat{PHS}) = \\frac{PH}{SH} = \\frac{15}{25} = \\frac{3}{5}$$
À la calculatrice, $\\widehat{PHS} \\approx 53^\\circ$.

**3.** $45^\\circ \\leqslant 53^\\circ \\leqslant 60^\\circ$ : **l'installation convient**.

**4. a)** Le mât est vertical et le sol horizontal : le triangle $QAT$ est rectangle en $Q$, d'hypoténuse $[AT]$ de longueur $25$ m. Le côté adjacent à l'angle $\\widehat{QAT}$ est $[QA]$, donc :
$$\\cos(60^\\circ) = \\frac{QA}{25} \\quad\\text{donc}\\quad QA = 25 \\times \\cos(60^\\circ) = 25 \\times 0{,}5 = 12{,}5 \\text{ m}$$

**b)** D'après le théorème de Pythagore dans le triangle $QAT$ rectangle en $Q$ :
$$QT^2 = AT^2 - QA^2 = 625 - 156{,}25 = 468{,}75$$
Donc $QT = \\sqrt{468{,}75} \\approx 21{,}7$ m.`
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

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 240" width="400" height="240" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="114,98 30,210 198,210" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><polygon points="282,98 198,210 366,210" fill="rgba(234,88,12,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="114" y1="98" x2="282" y2="98" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4" /><line x1="78.3" y1="155.6" x2="68.7" y2="148.4" stroke="currentColor" stroke-width="1.4" /><line x1="75.3" y1="159.6" x2="65.7" y2="152.4" stroke="currentColor" stroke-width="1.4" /><line x1="159.3" y1="148.4" x2="149.7" y2="155.6" stroke="currentColor" stroke-width="1.4" /><line x1="162.3" y1="152.4" x2="152.7" y2="159.6" stroke="currentColor" stroke-width="1.4" /><text x="30" y="230" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="198" y="230" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="366" y="230" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C'</text><text x="114" y="88" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="282" y="88" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A'</text></svg></div>

1. Quelle est la nature du triangle $A'CC'$ ? Justifier.
2. a) Démontrer que $ABCA'$ est un parallélogramme.
   b) En déduire les longueurs $AA'$ et $CA'$, puis la nature du triangle $ACA'$.
3. On rappelle que l'image d'une droite par une translation est une droite qui lui est parallèle.
   a) Le point $B$ est sur la droite $(BC)$. En déduire que l'image de la droite $(BC)$ par $t$ est la droite $(BC)$ elle-même, puis que $C'$ appartient à la droite $(BC)$.
   b) Justifier que $C$ est le milieu de $[BC']$ et calculer $BC'$.
4. On note $H$ le milieu de $[BC]$. On admet que $(AH)$ est perpendiculaire à $(BC)$.
   a) Calculer $AH$.
   b) Calculer l'aire du quadrilatère $ABC'A'$.`,
      solution: `**1.** Le triangle $A'CC'$ est l'image du triangle $ABC$ par la translation $t$ (car $t$ transforme $B$ en $C$). Une translation conserve les longueurs : $A'C = AB = 5$ cm, $A'C' = AC = 5$ cm et $CC' = BC = 6$ cm. Le triangle $A'CC'$ est donc **isocèle en $A'$**.

**2. a)** La translation $t$ transforme $B$ en $C$ et $A$ en $A'$, donc $BCA'A$ est un parallélogramme. Ses côtés $[BC]$, $[CA']$, $[A'A]$, $[AB]$ sont ceux de $ABCA'$ : **$ABCA'$ est un parallélogramme**.

**b)** Les côtés opposés d'un parallélogramme ont la même longueur : $AA' = BC = 6$ cm et $CA' = AB = 5$ cm.
Dans le triangle $ACA'$, on a $CA = 5$ cm et $CA' = 5$ cm : il est **isocèle en $C$**.

**3. a)** L'image de la droite $(BC)$ par $t$ est une droite parallèle à $(BC)$. Elle passe par l'image de $B$, c'est-à-dire par $C$. Or la seule droite parallèle à $(BC)$ passant par $C$ est la droite $(BC)$ elle-même : l'image de $(BC)$ est donc $(BC)$.
Le point $C$ appartient à $(BC)$, donc son image $C'$ appartient à l'image de $(BC)$, c'est-à-dire à **la droite $(BC)$** : les points $B$, $C$, $C'$ sont alignés.

**b)** Une translation conserve les longueurs, donc $CC' = BC = 6$ cm. De plus, la translation $t$ fait glisser chaque point dans la même direction, le même sens et de la même longueur que pour aller de $B$ à $C$. Pour aller de $C$ à $C'$, on se déplace donc sur la droite $(BC)$, dans le sens de $B$ vers $C$ : $C'$ est situé de l'autre côté de $C$ par rapport à $B$, avec $CB = CC' = 6$ cm : **$C$ est le milieu de $[BC']$** et $BC' = 6 + 6 = 12$ cm.

**4. a)** $H$ est le milieu de $[BC]$, donc $BH = 3$ cm. Le triangle $ABH$ est rectangle en $H$ ; d'après le théorème de Pythagore :
$AH^2 = AB^2 - BH^2 = 25 - 9 = 16$, donc $AH = 4$ cm.

**b)** Le quadrilatère $ABC'A'$ est formé de trois triangles : $ABC$, $ACA'$ et $A'CC'$.
- Aire de $ABC$ : $\\dfrac{BC \\times AH}{2} = \\dfrac{6 \\times 4}{2} = 12$ cm².
- $A'CC'$ est l'image de $ABC$ par une translation, qui conserve les aires : $12$ cm².
- $ACA'$ a pour base $AA' = 6$ cm ; comme $(AA') \\parallel (BC)$, sa hauteur relative à $[AA']$ est la distance entre ces deux droites, soit $AH = 4$ cm. Aire : $\\dfrac{6 \\times 4}{2} = 12$ cm².

Aire de $ABC'A'$ : $12 + 12 + 12 = 36$ cm².
Vérification : $ABC'A'$ est un trapèze de bases $AA' = 6$ cm et $BC' = 12$ cm, de hauteur $4$ cm : $\\dfrac{(6 + 12) \\times 4}{2} = 36$ cm².`
    },
    {
      id: "4G3-ds-12",
      title: "Le pont sur le canal",
      difficulty: 4,
      points: 6,
      statement: `Dans un repère (unité : $100$ m), la maison de Noé est au point $A(0 ; 0)$ et son collège au point $B(6 ; 7)$. Entre les deux coule un canal : c'est la bande comprise entre la droite horizontale passant par le point $(0 ; 2)$ (rive sud) et la droite horizontale passant par le point $(0 ; 3)$ (rive nord).
La mairie veut construire un pont $[PQ]$ perpendiculaire aux rives, avec $P$ sur la rive sud et $Q$ sur la rive nord : $Q$ est donc l'image de $P$ par la translation de $1$ unité vers le haut. Noé va de $A$ à $P$ en ligne droite, traverse le pont, puis va de $Q$ à $B$ en ligne droite. La figure montre une position possible du pont.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 380 330" width="380" height="330" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="20" y="190" width="340" height="40" fill="rgba(59,130,246,0.18)" stroke="none" /><line x1="20" y1="230" x2="360" y2="230" stroke="currentColor" stroke-width="1.4" /><line x1="20" y1="190" x2="360" y2="190" stroke="currentColor" stroke-width="1.4" /><line x1="60" y1="314" x2="60" y2="306" stroke="currentColor" stroke-width="1" /><line x1="100" y1="314" x2="100" y2="306" stroke="currentColor" stroke-width="1" /><line x1="140" y1="314" x2="140" y2="306" stroke="currentColor" stroke-width="1" /><line x1="180" y1="314" x2="180" y2="306" stroke="currentColor" stroke-width="1" /><line x1="220" y1="314" x2="220" y2="306" stroke="currentColor" stroke-width="1" /><line x1="260" y1="314" x2="260" y2="306" stroke="currentColor" stroke-width="1" /><line x1="300" y1="314" x2="300" y2="306" stroke="currentColor" stroke-width="1" /><line x1="340" y1="314" x2="340" y2="306" stroke="currentColor" stroke-width="1" /><line x1="50" y1="310" x2="352" y2="310" stroke="currentColor" stroke-width="1" /><line x1="60" y1="315" x2="60" y2="15" stroke="currentColor" stroke-width="1" /><line x1="60" y1="310" x2="220" y2="230" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="5 4" /><line x1="220" y1="230" x2="220" y2="190" stroke="#ea580c" stroke-width="3" /><line x1="220" y1="190" x2="300" y2="30" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="5 4" /><circle cx="60" cy="310" r="2.6" fill="currentColor" /><circle cx="300" cy="30" r="2.6" fill="currentColor" /><circle cx="220" cy="230" r="2.6" fill="currentColor" /><circle cx="220" cy="190" r="2.6" fill="currentColor" /><text x="48" y="314" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="end">A</text><text x="310" y="35" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="start">B</text><text x="228" y="246" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="start">P</text><text x="228" y="184" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="start">Q</text><text x="100" y="328" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">1</text><text x="52" y="275" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">1</text><text x="350" y="215" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">canal</text></svg></div>

**On admet la propriété suivante (inégalité triangulaire)** : pour trois points $E$, $F$, $G$ quelconques, $EF + FG \\geqslant EG$, et l'égalité $EF + FG = EG$ n'a lieu que lorsque $F$ appartient au segment $[EG]$.

1. On place le pont en $P(0 ; 2)$ et $Q(0 ; 3)$. Calculer la longueur du trajet $A \\to P \\to Q \\to B$, arrondie au mètre.
2. On note $A'$ l'image de $A$ par la translation de $1$ unité vers le haut.
   a) Donner les coordonnées de $A'$.
   b) Démontrer que, quelle que soit la position du pont, $AP = A'Q$.
3. En déduire que la longueur du trajet est égale à $A'Q + QB + 1$, puis, à l'aide de la propriété admise, expliquer pourquoi elle est la plus courte possible lorsque $Q$ est sur le segment $[A'B]$.
4. On admet que le point $Q(2 ; 3)$ appartient au segment $[A'B]$. Calculer la longueur du trajet lorsque le pont relie $P(2 ; 2)$ à $Q(2 ; 3)$, arrondie au mètre, et la comparer à celle de la question 1.`,
      solution: `**1.** $AP = 2$ (segment vertical) et $PQ = 1$.
Pour $QB$ : de $Q(0 ; 3)$ à $B(6 ; 7)$, on se déplace de $6$ horizontalement et de $4$ verticalement. D'après le théorème de Pythagore, $QB^2 = 6^2 + 4^2 = 52$, donc $QB = \\sqrt{52} \\approx 7{,}211$.
Trajet : $2 + 1 + \\sqrt{52} \\approx 10{,}211$ unités, soit environ **$1\\,021$ m**.

**2. a)** $A'(0 ; 1)$.

**b)** La translation de $1$ unité vers le haut transforme $A$ en $A'$ et $P$ en $Q$. Donc $AA'QP$ est un parallélogramme (éventuellement aplati), et ses côtés opposés $[AP]$ et $[A'Q]$ ont la même longueur : $AP = A'Q$. (On peut aussi dire qu'une translation conserve les longueurs : $[A'Q]$ est l'image de $[AP]$.)

**3.** Le trajet mesure $AP + PQ + QB = A'Q + 1 + QB$.
Le pont mesure toujours $1$ unité ; il faut donc rendre $A'Q + QB$ le plus petit possible. D'après la propriété admise (avec $E = A'$, $F = Q$, $G = B$), $A'Q + QB \\geqslant A'B$, avec égalité seulement lorsque $Q$ appartient au segment $[A'B]$. La somme $A'Q + QB$ ne peut donc jamais être inférieure à $A'B$, et elle vaut exactement $A'B$ lorsque $Q \\in [A'B]$ : le trajet est le plus court lorsque $Q$ est sur $[A'B]$.

**4.** $Q(2 ; 3)$ est sur $[A'B]$, donc $A'Q + QB = A'B$.
De $A'(0 ; 1)$ à $B(6 ; 7)$ : $6$ horizontalement et $6$ verticalement, donc $A'B^2 = 36 + 36 = 72$ et $A'B = \\sqrt{72} \\approx 8{,}485$.
Trajet : $\\sqrt{72} + 1 \\approx 9{,}485$ unités, soit environ **$949$ m**.
Vérification directe : $AP = \\sqrt{2^2 + 2^2} = \\sqrt{8} \\approx 2{,}828$ ; $PQ = 1$ ; $QB = \\sqrt{4^2 + 4^2} = \\sqrt{32} \\approx 5{,}657$ ; total $\\approx 9{,}485$.
Ce trajet est plus court d'environ $1\\,021 - 949 = 72$ m que celui de la question 1.`
    },
    {
      id: "4G3-ds-13",
      title: "Translations sur un carrelage",
      difficulty: 1,
      points: 4,
      statement: `Un carrelage est formé de huit carreaux carrés identiques, numérotés de $1$ à $8$. Les sommets des carreaux sont nommés par des lettres.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 230" width="400" height="230" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="40" y="40" width="320" height="160" fill="rgba(59,130,246,0.08)" stroke="none" /><line x1="40" y1="40" x2="40" y2="200" stroke="currentColor" stroke-width="1.4" /><line x1="120" y1="40" x2="120" y2="200" stroke="currentColor" stroke-width="1.4" /><line x1="200" y1="40" x2="200" y2="200" stroke="currentColor" stroke-width="1.4" /><line x1="280" y1="40" x2="280" y2="200" stroke="currentColor" stroke-width="1.4" /><line x1="360" y1="40" x2="360" y2="200" stroke="currentColor" stroke-width="1.4" /><line x1="40" y1="40" x2="360" y2="40" stroke="currentColor" stroke-width="1.4" /><line x1="40" y1="120" x2="360" y2="120" stroke="currentColor" stroke-width="1.4" /><line x1="40" y1="200" x2="360" y2="200" stroke="currentColor" stroke-width="1.4" /><circle cx="40" cy="40" r="2.6" fill="currentColor" /><text x="32" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="end">A</text><circle cx="120" cy="40" r="2.6" fill="currentColor" /><text x="112" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="end">B</text><circle cx="200" cy="40" r="2.6" fill="currentColor" /><text x="192" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="end">C</text><circle cx="280" cy="40" r="2.6" fill="currentColor" /><text x="272" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="end">D</text><circle cx="360" cy="40" r="2.6" fill="currentColor" /><text x="372" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="start">E</text><circle cx="40" cy="120" r="2.6" fill="currentColor" /><text x="32" y="114" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="end">F</text><circle cx="120" cy="120" r="2.6" fill="currentColor" /><text x="112" y="114" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="end">G</text><circle cx="200" cy="120" r="2.6" fill="currentColor" /><text x="192" y="114" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="end">H</text><circle cx="280" cy="120" r="2.6" fill="currentColor" /><text x="272" y="114" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="end">I</text><circle cx="360" cy="120" r="2.6" fill="currentColor" /><text x="372" y="114" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="start">J</text><circle cx="40" cy="200" r="2.6" fill="currentColor" /><text x="32" y="220" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="end">K</text><circle cx="120" cy="200" r="2.6" fill="currentColor" /><text x="112" y="220" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="end">L</text><circle cx="200" cy="200" r="2.6" fill="currentColor" /><text x="192" y="220" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="end">M</text><circle cx="280" cy="200" r="2.6" fill="currentColor" /><text x="272" y="220" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="end">N</text><circle cx="360" cy="200" r="2.6" fill="currentColor" /><text x="372" y="220" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="start">O</text><text x="80" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="500" fill="#2563eb" text-anchor="middle">1</text><text x="160" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="500" fill="#2563eb" text-anchor="middle">2</text><text x="240" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="500" fill="#2563eb" text-anchor="middle">3</text><text x="320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="500" fill="#2563eb" text-anchor="middle">4</text><text x="80" y="166" font-family="system-ui, sans-serif" font-size="18" font-weight="500" fill="#2563eb" text-anchor="middle">5</text><text x="160" y="166" font-family="system-ui, sans-serif" font-size="18" font-weight="500" fill="#2563eb" text-anchor="middle">6</text><text x="240" y="166" font-family="system-ui, sans-serif" font-size="18" font-weight="500" fill="#2563eb" text-anchor="middle">7</text><text x="320" y="166" font-family="system-ui, sans-serif" font-size="18" font-weight="500" fill="#2563eb" text-anchor="middle">8</text></svg></div>

1. On considère la translation $t$ qui transforme $A$ en $C$.
   a) Décrire le déplacement associé à $t$.
   b) Donner l'image par $t$ du point $G$, du segment $[FG]$ et du carreau $1$.
2. Quelle est l'image du carreau $8$ par la translation qui transforme $H$ en $B$ ?
3. Compléter la phrase suivante, en justifiant : « Le carreau $7$ est l'image du carreau $2$ par la translation qui transforme $A$ en … ».
4. Le carreau $5$ est-il l'image du carreau $4$ par une translation ? Si oui, préciser une translation qui convient.`,
      solution: `**1. a)** Pour aller de $A$ à $C$, on se déplace de deux carreaux vers la droite (horizontalement). La translation $t$ fait donc glisser chaque point de **deux carreaux vers la droite**.

**b)** En glissant de deux carreaux vers la droite :
- $G$ a pour image $I$ ;
- $F$ a pour image $H$, donc le segment $[FG]$ a pour image le segment $[HI]$ ;
- le carreau $1$ (sommets $A$, $B$, $G$, $F$) a pour image le carreau de sommets $C$, $D$, $I$, $H$ : c'est le **carreau $3$**.

**2.** Pour aller de $H$ à $B$, on se déplace d'un carreau vers la gauche et d'un carreau vers le haut. Le carreau $8$ (en bas à droite) glisse d'un carreau vers la gauche et d'un vers le haut : son image est le **carreau $3$**.

**3.** Le carreau $7$ est situé un carreau à droite et un carreau en dessous du carreau $2$. Le sommet en haut à gauche du carreau $2$ est $B$, celui du carreau $7$ est $H$ : la translation qui transforme $B$ en $H$ convient. Pour le point $A$, il faut se déplacer d'un carreau vers la droite et d'un carreau vers le bas : on arrive en $G$.
« Le carreau $7$ est l'image du carreau $2$ par la translation qui transforme $A$ en **$G$** ».

**4.** Oui : le carreau $5$ est situé trois carreaux à gauche et un carreau en dessous du carreau $4$. Une translation fait glisser une figure sans la tourner ; comme les carreaux sont des carrés identiques, le carreau $4$ glisse exactement sur le carreau $5$. Par exemple, la translation qui transforme $D$ en $F$ (trois carreaux vers la gauche, un vers le bas) convient : elle transforme $D$, $E$, $J$, $I$ en $F$, $G$, $L$, $K$.`
    },
    {
      id: "4G3-ds-14",
      title: "Déplacer une table sur un plan",
      difficulty: 2,
      points: 5,
      statement: `Le plan d'une pièce rectangulaire est dessiné dans un repère dont l'unité représente $50$ cm : la pièce occupe la zone où l'abscisse est comprise entre $0$ et $8$ et l'ordonnée entre $0$ et $6$.
Une table rectangulaire $ABCD$ est représentée par les points $A(1 ; 1)$, $B(4 ; 1)$, $C(4 ; 3)$ et $D(1 ; 3)$. On la fait glisser sans la tourner : sa nouvelle position $A'B'C'D'$ est l'image de $ABCD$ par la translation $t$ qui transforme $A$ en $A'(5 ; 4)$.
1. Décrire le déplacement associé à $t$.
2. Calculer les coordonnées de $B'$, $C'$ et $D'$.
3. La table, dans sa nouvelle position, est-elle entièrement dans la pièce ? Touche-t-elle un mur ?
4. Calculer, en mètres, la distance parcourue par le coin $A$ de la table. Les autres coins ont-ils parcouru la même distance ? Justifier.
5. Calculer l'aire de la table en m², puis l'aire de son image. Justifier sans nouveau calcul.`,
      solution: `**1.** Pour aller de $A(1 ; 1)$ à $A'(5 ; 4)$, on se déplace de $5 - 1 = 4$ unités vers la droite et de $4 - 1 = 3$ unités vers le haut. La translation $t$ fait glisser chaque point de **$4$ unités vers la droite et $3$ unités vers le haut**.

**2.** On ajoute $4$ à l'abscisse et $3$ à l'ordonnée :
$B'(4 + 4 ; 1 + 3) = B'(8 ; 4)$, $C'(4 + 4 ; 3 + 3) = C'(8 ; 6)$, $D'(1 + 4 ; 3 + 3) = D'(5 ; 6)$.

**3.** Les abscisses des coins sont $5$ et $8$, comprises entre $0$ et $8$ ; les ordonnées sont $4$ et $6$, comprises entre $0$ et $6$. La table est donc entièrement dans la pièce. Elle touche le mur d'abscisse $8$ (côté $[B'C']$) et le mur d'ordonnée $6$ (côté $[C'D']$) : elle est **dans un coin** de la pièce.

**4.** Le coin $A$ s'est déplacé de $4$ unités horizontalement et de $3$ unités verticalement. D'après le théorème de Pythagore (triangle rectangle de côtés $4$ et $3$) : $AA'^2 = 4^2 + 3^2 = 25$, donc $AA' = 5$ unités, soit $5 \\times 50 = 250$ cm $= 2{,}5$ m.
Tous les coins ont parcouru la même distance : une translation fait glisser **tous les points** dans la même direction, le même sens et de la **même longueur**.

**5.** La table mesure $AB = 3$ unités $= 1{,}5$ m et $AD = 2$ unités $= 1$ m. Son aire est $1{,}5 \\times 1 = 1{,}5$ m².
Une translation conserve les aires : l'image $A'B'C'D'$ a aussi une aire de **$1{,}5$ m²**.`
    },
    {
      id: "4G3-ds-15",
      title: "Glissements dans un hexagone régulier",
      difficulty: 3,
      points: 5,
      statement: `$ABCDEF$ est un hexagone régulier de centre $O$. On admet qu'il est formé de six triangles équilatéraux $OAB$, $OBC$, $OCD$, $ODE$, $OEF$ et $OFA$, de côté $3$ cm.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 380 300" width="380" height="300" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="140,236.6 240,236.6 290,150 240,63.4 140,63.4 90,150" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="190" y1="150" x2="140" y2="236.6" stroke="currentColor" stroke-width="1.2" /><line x1="190" y1="150" x2="240" y2="236.6" stroke="currentColor" stroke-width="1.2" /><line x1="190" y1="150" x2="290" y2="150" stroke="currentColor" stroke-width="1.2" /><line x1="190" y1="150" x2="240" y2="63.4" stroke="currentColor" stroke-width="1.2" /><line x1="190" y1="150" x2="140" y2="63.4" stroke="currentColor" stroke-width="1.2" /><line x1="190" y1="150" x2="90" y2="150" stroke="currentColor" stroke-width="1.2" /><circle cx="190" cy="150" r="2.6" fill="currentColor" /><text x="194" y="142" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="start">O</text><text x="132" y="256.5" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="248" y="256.5" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="306" y="156" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="248" y="55.5" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">D</text><text x="132" y="55.5" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">E</text><text x="74" y="156" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">F</text></svg></div>

On rappelle que : si $PQRS$ est un parallélogramme (sommets dans cet ordre), alors la translation qui transforme $P$ en $Q$ transforme $S$ en $R$.
On note $t$ la translation qui transforme $A$ en $B$.
1. Démontrer que le quadrilatère $ABOF$ est un losange. En déduire l'image de $F$ par $t$.
2. a) Démontrer de même que $t$ transforme $O$ en $C$.
   b) Démontrer que $OCDE$ est un losange. En déduire que $t$ transforme $E$ en $D$.
3. Donner l'image par $t$ du triangle $AOF$, puis celle du segment $[FE]$.
4. Que peut-on en déduire pour les droites $(FE)$ et $(OD)$ ? Pour les longueurs $FE$ et $OD$ ? Justifier.`,
      solution: `**1.** Les triangles $OAB$ et $OFA$ sont équilatéraux de côté $3$ cm, donc $AB = BO = OF = FA = 3$ cm. Un quadrilatère dont les quatre côtés ont la même longueur est un losange : **$ABOF$ est un losange**, donc un parallélogramme.
D'après le rappel (avec $P = A$, $Q = B$, $R = O$, $S = F$), la translation qui transforme $A$ en $B$ transforme $F$ en $O$ : **$t(F) = O$**.

**2. a)** Les triangles $OAB$ et $OBC$ sont équilatéraux, donc $AB = BC = CO = OA = 3$ cm : $ABCO$ est un losange, donc un parallélogramme. D'après le rappel (avec $P = A$, $Q = B$, $R = C$, $S = O$), $t$ transforme $O$ en $C$.

**b)** Les triangles $OCD$ et $ODE$ sont équilatéraux, donc $OC = CD = DE = EO = 3$ cm : $OCDE$ est un losange, donc un parallélogramme. D'après le rappel, la translation qui transforme $O$ en $C$ transforme $E$ en $D$.
Or, d'après la question 2. a), $t$ transforme $O$ en $C$ : $t$ est donc la translation qui transforme $O$ en $C$ (une translation est entièrement déterminée par un point et son image). Ainsi **$t(E) = D$**.

**3.** $t$ transforme $A$ en $B$, $O$ en $C$ et $F$ en $O$ : l'image du triangle $AOF$ est le **triangle $BCO$**.
$t$ transforme $F$ en $O$ et $E$ en $D$ : l'image du segment $[FE]$ est le **segment $[OD]$**.

**4.** Par une translation, l'image d'une droite est une droite qui lui est parallèle : **$(FE) \\parallel (OD)$**.
Une translation conserve les longueurs : **$FE = OD$** ($= 3$ cm, ce que confirment les triangles équilatéraux).`
    },
    {
      id: "4G3-ds-16",
      title: "Image par une translation ou non ?",
      difficulty: 4,
      points: 6,
      statement: `Dans un repère orthonormé (unité : le centimètre), on considère les points $A(1 ; 2)$, $B(4 ; 3)$, $C(2 ; 5)$, puis $D(3 ; -1)$, $E(6 ; 0)$, $F(4 ; 2)$ et $G(-3 ; 1)$, $H(0 ; 2)$, $K(-1 ; 4)$.
1. a) Décrire le déplacement qui amène $A$ en $D$, celui qui amène $B$ en $E$ et celui qui amène $C$ en $F$.
   b) En déduire que le triangle $DEF$ est l'image du triangle $ABC$ par une translation que l'on précisera.
2. a) Calculer $AB^2$, $BC^2$ et $CA^2$, puis $GH^2$, $HK^2$ et $KG^2$.
   b) Une translation conserve les longueurs. En déduire, en justifiant, que le triangle $GHK$ n'est l'image du triangle $ABC$ par **aucune** translation.
3. On note $t'$ la translation qui transforme $A$ en $G$. Calculer les coordonnées du point $L$, image de $C$ par $t'$, et vérifier que $t'$ transforme $B$ en $H$.
4. a) Justifier que $ABED$ est un parallélogramme.
   b) Calculer son périmètre, arrondi au millimètre.`,
      solution: `**1. a)** De $A(1 ; 2)$ à $D(3 ; -1)$ : $+2$ en abscisse et $-3$ en ordonnée, c'est-à-dire $2$ unités vers la droite et $3$ vers le bas.
De $B(4 ; 3)$ à $E(6 ; 0)$ : $+2$ et $-3$. De $C(2 ; 5)$ à $F(4 ; 2)$ : $+2$ et $-3$.

**b)** Les trois sommets subissent exactement le même déplacement ($2$ unités vers la droite, $3$ vers le bas) : $DEF$ est l'image de $ABC$ par **la translation qui transforme $A$ en $D$**.

**2. a)** On utilise le théorème de Pythagore dans des triangles rectangles tracés sur le quadrillage (écart horizontal, écart vertical) :
- $AB^2 = 3^2 + 1^2 = 10$ ; $BC^2 = 2^2 + 2^2 = 8$ ; $CA^2 = 1^2 + 3^2 = 10$.
- $GH^2 = 3^2 + 1^2 = 10$ ; $HK^2 = 1^2 + 2^2 = 5$ ; $KG^2 = 2^2 + 3^2 = 13$.

**b)** Si $GHK$ était l'image de $ABC$ par une translation, les deux triangles auraient des côtés de mêmes longueurs, car une translation conserve les longueurs. Or les longueurs des côtés de $ABC$ sont $\\sqrt{10}$, $\\sqrt{8}$, $\\sqrt{10}$, alors que celles de $GHK$ sont $\\sqrt{10}$, $\\sqrt{5}$, $\\sqrt{13}$ : elles sont différentes (par exemple, aucun côté de $ABC$ ne mesure $\\sqrt{13}$).
Donc $GHK$ **n'est l'image de $ABC$ par aucune translation** (raisonnement par contraposée).

**3.** De $A(1 ; 2)$ à $G(-3 ; 1)$ : $-4$ en abscisse et $-1$ en ordonnée. Donc $L(2 - 4 ; 5 - 1) = L(-2 ; 4)$.
Image de $B$ : $(4 - 4 ; 3 - 1) = (0 ; 2)$, c'est bien $H$.
L'image de $ABC$ par $t'$ est donc $GHL$ ; elle diffère de $GHK$ seulement par le troisième sommet ($L(-2 ; 4)$ au lieu de $K(-1 ; 4)$).

**4. a)** La translation de la question 1 transforme $A$ en $D$ et $B$ en $E$ : donc $ABED$ est un parallélogramme (éventuellement aplati). Il n'est pas aplati, car les points $A$, $B$ et $D$ ne sont pas alignés (on le constate en les plaçant dans le repère).

**b)** $AB = \\sqrt{10}$ cm et $AD^2 = 2^2 + 3^2 = 13$, donc $AD = \\sqrt{13}$ cm. Les côtés opposés d'un parallélogramme ont la même longueur :
périmètre $= 2 \\times (\\sqrt{10} + \\sqrt{13}) \\approx 13{,}536$, soit environ **$13{,}5$ cm**.`
    },
    {
      id: "4G3-ds-17",
      title: "Une frise à vérifier et à prolonger",
      difficulty: 2,
      points: 5,
      statement: `Lina décore une bande de papier quadrillé avec une frise. Elle dessine un motif en forme de drapeau (le motif $1$), puis les motifs $2$, $3$ et $4$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="-2 -2 364 132" width="364" height="132" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quadrillage portant quatre motifs en forme de drapeau, numérotés de 1 à 4, espacés de 5 carreaux. Le mât des motifs 1, 2 et 3 est à gauche, celui du motif 4 est à droite."><path d="M0 0V108M18 0V108M36 0V108M54 0V108M72 0V108M90 0V108M108 0V108M126 0V108M144 0V108M162 0V108M180 0V108M198 0V108M216 0V108M234 0V108M252 0V108M270 0V108M288 0V108M306 0V108M324 0V108M342 0V108M360 0V108M0 0H360M0 18H360M0 36H360M0 54H360M0 72H360M0 90H360M0 108H360" fill="none" stroke="currentColor" stroke-opacity="0.25" stroke-width="0.6" /><rect x="18" y="18" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="18" y="36" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="18" y="54" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="18" y="72" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="36" y="18" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="54" y="18" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="36" y="36" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><text x="45" y="124" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">1</text><rect x="108" y="18" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="108" y="36" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="108" y="54" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="108" y="72" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="126" y="18" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="144" y="18" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="126" y="36" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><text x="135" y="124" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">2</text><rect x="198" y="18" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="198" y="36" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="198" y="54" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="198" y="72" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="216" y="18" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="234" y="18" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="216" y="36" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><text x="225" y="124" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">3</text><rect x="324" y="18" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="324" y="36" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="324" y="54" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="324" y="72" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="306" y="18" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="288" y="18" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><rect x="306" y="36" width="18" height="18" fill="rgba(37,99,235,0.45)" stroke="var(--primary, #2563eb)" stroke-width="1" /><text x="315" y="124" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">4</text></svg></div>

1. Décrire le glissement qui amène le motif $1$ sur le motif $2$ : nombre de carreaux, direction et sens.
2. Le motif $3$ est-il l'image du motif $2$ par cette même translation ? Justifier.
3. Lina s'aperçoit que le motif $4$ ne convient pas. Expliquer pourquoi il n'est pas l'image du motif $3$ par une translation.
4. Sur une feuille à petits carreaux, reproduire le motif $1$, puis construire une frise correcte de $5$ motifs avec la translation de la question 1. Quelle longueur, en carreaux, occupe cette frise, du bord gauche du motif $1$ au bord droit du motif $5$ ?
5. La bande de papier mesure $60$ carreaux de long et le motif $1$ touche son bord gauche. Combien de motifs Lina peut-elle placer au maximum, sans déborder ?`,
      solution: `**1.** Un point du motif $1$ et le point correspondant du motif $2$ sont séparés de $5$ carreaux : on passe du motif $1$ au motif $2$ par un glissement de **$5$ carreaux, horizontalement, vers la droite**.

**2.** **Oui.** Le motif $3$ a la même forme et la même orientation que le motif $2$, et chacun de ses carreaux se trouve $5$ carreaux plus à droite que le carreau correspondant du motif $2$. Le motif $3$ est donc l'image du motif $2$ par la même translation.

**3.** Une translation fait seulement glisser une figure : elle ne la tourne pas et ne la retourne pas. Or, sur les motifs $1$, $2$ et $3$, le mât (la colonne de $4$ carreaux) est à gauche de la flamme, alors que sur le motif $4$ il est à droite : le motif $4$ est **retourné**. Il ne peut donc pas être l'image du motif $3$ par une translation.

**4.** On reproduit le motif $1$, puis on déplace chacun de ses sommets de $5$ carreaux vers la droite pour obtenir le motif $2$. On recommence à partir du dernier motif obtenu, avec le même glissement, jusqu'au motif $5$. Contrôle : tous les motifs sont superposables et ont leur mât à gauche.
Du motif $1$ au motif $5$, il y a $5 - 1 = 4$ glissements de $5$ carreaux, soit $4 \\times 5 = 20$ carreaux. On ajoute la largeur du dernier motif, qui est de $3$ carreaux : $20 + 3 = 23$.
La frise occupe **$23$ carreaux**.

**5.** Le motif $1$ occupe $3$ carreaux : il en reste $60 - 3 = 57$ pour les glissements. Chaque glissement occupe $5$ carreaux. Or $11 \\times 5 = 55$ et $12 \\times 5 = 60$, avec $55 \\leqslant 57 < 60$ : on peut faire au plus $11$ glissements.
Avec le motif $1$, Lina peut placer au maximum $11 + 1 = 12$ motifs : **$12$ motifs** (le dernier se termine au carreau $55 + 3 = 58$, et un motif de plus irait jusqu'au carreau $63$).`
    },
    {
      id: "4G3-ds-18",
      title: "Un pavage de parallélogrammes",
      difficulty: 3,
      points: 6,
      statement: `Le pavage ci-dessous recouvre une zone du plan, sans trou ni chevauchement, avec $12$ parallélogrammes numérotés. Tous sont obtenus à partir du parallélogramme $ABCD$ (le carreau $1$, sommets cités dans l'ordre du tour) par des translations. On donne $AB = 6$ cm, et la hauteur relative au côté $[AB]$ mesure $3$ cm.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 376 124" width="376" height="124" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pavage de douze parallélogrammes numérotés de 1 à 12 sur trois rangées de quatre, de bas en haut et de gauche à droite. Le carreau 1, en bas à gauche, a pour sommets A en bas à gauche, B en bas à droite, C en haut à droite et D en haut à gauche."><polygon points="8,116 80,116 104,80 32,80" fill="rgba(37,99,235,0.25)" stroke="var(--primary, #2563eb)" stroke-width="1.3" stroke-linejoin="round" /><text x="56" y="103" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">1</text><polygon points="80,116 152,116 176,80 104,80" fill="none" stroke="var(--primary, #2563eb)" stroke-width="1.3" stroke-linejoin="round" /><text x="128" y="103" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">2</text><polygon points="152,116 224,116 248,80 176,80" fill="none" stroke="var(--primary, #2563eb)" stroke-width="1.3" stroke-linejoin="round" /><text x="200" y="103" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">3</text><polygon points="224,116 296,116 320,80 248,80" fill="none" stroke="var(--primary, #2563eb)" stroke-width="1.3" stroke-linejoin="round" /><text x="272" y="103" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">4</text><polygon points="32,80 104,80 128,44 56,44" fill="none" stroke="var(--primary, #2563eb)" stroke-width="1.3" stroke-linejoin="round" /><text x="80" y="67" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">5</text><polygon points="104,80 176,80 200,44 128,44" fill="none" stroke="var(--primary, #2563eb)" stroke-width="1.3" stroke-linejoin="round" /><text x="152" y="67" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">6</text><polygon points="176,80 248,80 272,44 200,44" fill="none" stroke="var(--primary, #2563eb)" stroke-width="1.3" stroke-linejoin="round" /><text x="224" y="67" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">7</text><polygon points="248,80 320,80 344,44 272,44" fill="none" stroke="var(--primary, #2563eb)" stroke-width="1.3" stroke-linejoin="round" /><text x="296" y="67" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">8</text><polygon points="56,44 128,44 152,8 80,8" fill="none" stroke="var(--primary, #2563eb)" stroke-width="1.3" stroke-linejoin="round" /><text x="104" y="31" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">9</text><polygon points="128,44 200,44 224,8 152,8" fill="none" stroke="var(--primary, #2563eb)" stroke-width="1.3" stroke-linejoin="round" /><text x="176" y="31" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">10</text><polygon points="200,44 272,44 296,8 224,8" fill="none" stroke="var(--primary, #2563eb)" stroke-width="1.3" stroke-linejoin="round" /><text x="248" y="31" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">11</text><polygon points="272,44 344,44 368,8 296,8" fill="none" stroke="var(--primary, #2563eb)" stroke-width="1.3" stroke-linejoin="round" /><text x="320" y="31" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor">12</text><text x="22.4" y="114.6" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-style="italic" font-weight="700" fill="currentColor">A</text><text x="72.8" y="114.6" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-style="italic" font-weight="700" fill="currentColor">B</text><text x="89.6" y="89.4" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-style="italic" font-weight="700" fill="currentColor">C</text><text x="39.2" y="89.4" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-style="italic" font-weight="700" fill="currentColor">D</text></svg></div>

1. Par quelle translation passe-t-on du carreau $1$ au carreau $2$ ? Et du carreau $1$ au carreau $5$ ? Répondre en citant deux sommets du carreau $1$.
2. a) Justifier que la translation qui transforme $A$ en $B$ transforme $D$ en $C$.
   b) En déduire quel côté les carreaux $1$ et $2$ ont en commun.
3. Quelle est l'image du carreau $6$ par la translation qui transforme $A$ en $C$ ? Justifier.
4. Calculer l'aire du carreau $1$, puis l'aire totale du pavage. Citer la propriété de la translation utilisée.
5. Sur une feuille à carreaux, on trace un parallélogramme $EFGH$ (sommets cités dans l'ordre du tour) : en partant de $E$, on atteint $F$ en comptant $4$ carreaux vers la droite, et on atteint $H$ en comptant $1$ carreau vers la droite et $3$ carreaux vers le haut.
   a) Comment atteint-on $G$ en partant de $F$ ? Justifier.
   b) Construire un pavage de $6$ carreaux, sur $2$ rangées de $3$ carreaux, en précisant les deux translations utilisées.`,
      solution: `**1.** Le sommet en bas à gauche du carreau $2$ est $B$ : on passe du carreau $1$ au carreau $2$ par la translation **qui transforme $A$ en $B$**. Le sommet en bas à gauche du carreau $5$ est $D$ : on passe du carreau $1$ au carreau $5$ par la translation **qui transforme $A$ en $D$**.

**2. a)** $ABCD$ est un parallélogramme : les côtés $[AB]$ et $[DC]$ sont parallèles, de même longueur, et on va de $D$ à $C$ dans le même sens que de $A$ à $B$. Le glissement de $A$ vers $B$ est donc aussi celui de $D$ vers $C$ : la translation qui transforme $A$ en $B$ transforme $D$ en $C$.

**b)** Cette translation transforme $A$ en $B$ et $D$ en $C$ : l'image du côté $[AD]$ du carreau $1$ est le segment $[BC]$, qui est donc un côté de son image, le carreau $2$. Les carreaux $1$ et $2$ ont en commun le côté **$[BC]$**.

**3.** Le sommet en bas à gauche du carreau $6$ est $C$ : l'image du carreau $1$ par la translation qui transforme $A$ en $C$ est donc le carreau $6$. Cette translation déplace ainsi chaque carreau d'une place vers la droite dans sa rangée et d'une rangée vers le haut.
Pour le carreau $6$, une place vers la droite mène au carreau $7$, et une rangée vers le haut mène alors au carreau $11$ : l'image du carreau $6$ est le **carreau $11$**.

**4.** Aire du carreau $1$, égale à sa base multipliée par la hauteur correspondante : $6 \\times 3 = 18$ cm². Chaque carreau est l'image du carreau $1$ par une translation et **une translation conserve les aires** : les $12$ carreaux ont tous une aire de $18$ cm². Comme il n'y a ni trou ni chevauchement, l'aire totale est $12 \\times 18 =$ **$216$ cm²**.

**5. a)** Dans le parallélogramme $EFGH$, les côtés $[EH]$ et $[FG]$ sont parallèles, de même longueur et se parcourent dans le même sens de $E$ à $H$ et de $F$ à $G$. Le glissement de $E$ vers $H$ est donc aussi celui de $F$ vers $G$ : en partant de $F$, on atteint $G$ en comptant **$1$ carreau vers la droite et $3$ carreaux vers le haut**.

**b)** Pour remplir une rangée, on utilise **la translation qui transforme $E$ en $F$** ($4$ carreaux vers la droite) : le deuxième carreau est l'image du premier, et le troisième l'image du deuxième. Pour passer à la rangée suivante, on applique aux trois carreaux **la translation qui transforme $E$ en $H$** ($1$ carreau vers la droite et $3$ vers le haut).
En repérant chaque carreau par son sommet en bas à gauche, à partir de $E$, on obtient, pour la première rangée, $0$, $4$ et $8$ carreaux à droite de $E$, et pour la deuxième, $1$, $5$ et $9$ carreaux à droite de $E$ en montant de $3$ carreaux. Contrôle : les carreaux sont superposables, ils ont la même orientation, et deux carreaux voisins ont un côté commun, sans trou ni chevauchement.`
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
      statement: `**Pour aller plus loin** (section d'une pyramide par un plan parallèle à sa base, notion étudiée en 3e).
On reprend une pyramide $SABCD$ de base carrée de $6$ cm de côté et de hauteur $10$ cm (volume $120$ cm³). On la coupe par un plan parallèle à la base, passant par le milieu de la hauteur. On obtient une petite pyramide (au-dessus) et un tronc de pyramide (en dessous).
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
      statement: `$ABCDEFGH$ est un cube d'arête $6$ cm ; sa face du bas est le carré $ABCD$ et sa face du haut est le carré $EFGH$ (avec $E$ au-dessus de $A$, $F$ au-dessus de $B$, etc.). Le point $K$ est le centre du cube (point d'intersection de ses grandes diagonales) ; la pyramide $KABCD$ est dessinée en bleu.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 350 300" width="350" height="300" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="50,280 230,280 230,100 50,100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="230" y1="280" x2="300" y2="220" stroke="currentColor" stroke-width="1.8" /><line x1="300" y1="220" x2="300" y2="40" stroke="currentColor" stroke-width="1.8" /><line x1="230" y1="100" x2="300" y2="40" stroke="currentColor" stroke-width="1.8" /><line x1="300" y1="40" x2="120" y2="40" stroke="currentColor" stroke-width="1.8" /><line x1="120" y1="40" x2="50" y2="100" stroke="currentColor" stroke-width="1.8" /><line x1="50" y1="280" x2="120" y2="220" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" /><line x1="120" y1="220" x2="300" y2="220" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" /><line x1="120" y1="220" x2="120" y2="40" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" /><polygon points="50,280 230,280 300,220 120,220" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-opacity="0" /><line x1="175" y1="160" x2="50" y2="280" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="5 4" /><line x1="175" y1="160" x2="230" y2="280" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="5 4" /><line x1="175" y1="160" x2="300" y2="220" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="5 4" /><line x1="175" y1="160" x2="120" y2="220" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="5 4" /><circle cx="175" cy="160" r="2.6" fill="currentColor" /><text x="181" y="152" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="start">K</text><text x="38" y="296" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="238" y="298" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="314" y="226" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="106" y="224" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">D</text><text x="36" y="100" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">E</text><text x="236" y="92" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">F</text><text x="314" y="40" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">G</text><text x="114" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">H</text></svg></div>

1. Calculer le volume du cube.
2. On note $S$ le centre de la face $EFGH$. Calculer le volume de la pyramide $SABCD$. Quelle fraction du volume du cube représente-t-il ?
3. a) On admet que le centre $K$ est à $3$ cm de chacune des six faces du cube. Calculer le volume de la pyramide $KABCD$.
   b) On relie $K$ aux huit sommets du cube. On obtient six pyramides de sommet $K$ : $KABCD$, $KEFGH$, $KABFE$, $KBCGF$, $KCDHG$ et $KDAEH$. Quelle est la base de chacune ? Quelle est sa hauteur ? En déduire qu'elles ont toutes le même volume.
   c) Vérifier que ces six pyramides remplissent bien le cube, en comparant les volumes.
4. On note $O$ le centre du carré $ABCD$ ; le segment $[SO]$ est la hauteur de la pyramide $SABCD$.
   a) Calculer $AC^2$, puis $OA^2$.
   b) En déduire la longueur de l'arête latérale $SA$, arrondie au millimètre.`,
      solution: `**1.** $V_{\\text{cube}} = 6^3 = 216$ cm³.

**2.** La base $ABCD$ a pour aire $6^2 = 36$ cm² et la hauteur est la distance entre les faces du bas et du haut : $6$ cm.
$V = \\dfrac{1}{3} \\times 36 \\times 6 = 72$ cm³. Or $\\dfrac{72}{216} = \\dfrac{1}{3}$ : la pyramide occupe **le tiers** du cube.

**3. a)** La hauteur de $KABCD$ est la distance de $K$ à la face $ABCD$, soit $3$ cm. $V = \\dfrac{1}{3} \\times 36 \\times 3 = 36$ cm³.

**b)** Chacune des six pyramides a pour base **une face du cube**, c'est-à-dire un carré de $6$ cm de côté (aire $36$ cm²), et pour hauteur la distance de $K$ à cette face, soit **$3$ cm**. Elles ont la même aire de base et la même hauteur, donc le même volume : $\\dfrac{1}{3} \\times 36 \\times 3 = 36$ cm³.

**c)** $6 \\times 36 = 216$ cm³ : c'est exactement le volume du cube. Les six pyramides, qui ne se chevauchent pas, remplissent donc entièrement le cube.

**4. a)** Le triangle $ABC$ est rectangle en $B$ ; d'après le théorème de Pythagore, $AC^2 = 6^2 + 6^2 = 72$.
$O$ est le milieu de la diagonale $[AC]$, donc $OA = \\dfrac{AC}{2}$ et $OA^2 = \\dfrac{AC^2}{4} = \\dfrac{72}{4} = 18$.

**b)** Le triangle $SOA$ est rectangle en $O$ (la hauteur $[SO]$ est perpendiculaire à la base), avec $SO = 6$ cm. D'après le théorème de Pythagore :
$SA^2 = SO^2 + OA^2 = 36 + 18 = 54$, donc $SA = \\sqrt{54} \\approx 7{,}348$ cm, soit environ $7{,}3$ cm au millimètre près.`
    },
    {
      id: "4G4-ds-13",
      title: "Le presse-papier et le chapeau pointu",
      difficulty: 1,
      points: 4,
      statement: `1. Un presse-papier en verre a la forme d'une pyramide dont la base est un carré de $5$ cm de côté et dont la hauteur mesure $6$ cm.
   a) Calculer le volume de ce presse-papier.
   b) Un cm³ de ce verre a une masse de $2{,}5$ g. Calculer la masse du presse-papier.
2. Un chapeau de fête a la forme d'un cône de révolution de rayon $9$ cm et de hauteur $24$ cm.
   a) Calculer le volume du cône : donner la valeur exacte, puis l'arrondi au cm³.
   b) Ce volume est-il supérieur à $2$ litres ? Justifier.`,
      solution: `**1. a)** Le volume d'une pyramide est $V = \\dfrac{\\text{aire de la base} \\times \\text{hauteur}}{3}$.
Aire de la base : $5 \\times 5 = 25$ cm². $V = \\dfrac{25 \\times 6}{3} = \\dfrac{150}{3} = 50$ cm³.

**b)** Masse : $50 \\times 2{,}5 = 125$ g.

**2. a)** Le volume d'un cône de révolution est $V = \\dfrac{\\pi \\times r^2 \\times h}{3}$.
$V = \\dfrac{\\pi \\times 9^2 \\times 24}{3} = \\dfrac{\\pi \\times 81 \\times 24}{3} = 648\\pi$ cm³ (valeur exacte), soit environ $2\\,036$ cm³.

**b)** $1$ L $= 1\\,000$ cm³, donc $2$ L $= 2\\,000$ cm³. Comme $2\\,036 > 2\\,000$, le volume du chapeau est **supérieur à $2$ litres** (environ $2{,}036$ L).`
    },
    {
      id: "4G4-ds-14",
      title: "La toupie en bois",
      difficulty: 2,
      points: 5,
      statement: `Une toupie en bois est formée de deux cônes de révolution identiques, collés par leurs bases. Chaque cône a pour rayon de base $3$ cm et pour hauteur $6$ cm.
1. Calculer le volume d'un cône, en valeur exacte puis arrondi au dixième de cm³.
2. En déduire le volume total de la toupie, en valeur exacte. Quelle est la hauteur totale de la toupie ?
3. Calculer la longueur d'une génératrice d'un cône (segment qui joint le sommet à un point du cercle de base), arrondie au millimètre.
4. Le bois utilisé a une masse de $0{,}8$ g par cm³. Calculer la masse de la toupie, arrondie au gramme.
5. La toupie est rangée dans une boîte cylindrique de rayon $3$ cm et de hauteur $12$ cm. Calculer le volume de la boîte laissé vide, en valeur exacte puis arrondi au dixième de cm³.`,
      solution: `**1.** $V_{\\text{cône}} = \\dfrac{\\pi \\times r^2 \\times h}{3} = \\dfrac{\\pi \\times 3^2 \\times 6}{3} = \\dfrac{54\\pi}{3} = 18\\pi$ cm³, soit environ $56{,}5$ cm³.

**2.** La toupie est formée de deux cônes identiques : $V = 2 \\times 18\\pi = 36\\pi$ cm³ (environ $113{,}1$ cm³). Sa hauteur totale est $6 + 6 = 12$ cm.

**3.** Soit $S$ le sommet, $O$ le centre de la base et $M$ un point du cercle de base. Le triangle $SOM$ est rectangle en $O$, avec $SO = 6$ cm et $OM = 3$ cm. D'après le théorème de Pythagore :
$SM^2 = 6^2 + 3^2 = 36 + 9 = 45$, donc $SM = \\sqrt{45} \\approx 6{,}7$ cm.

**4.** Masse : $0{,}8 \\times 36\\pi \\approx 90{,}5$, soit environ **$90$ g**.

**5.** Volume de la boîte : $\\pi \\times 3^2 \\times 12 = 108\\pi$ cm³. Volume vide : $108\\pi - 36\\pi = 72\\pi \\approx 226{,}2$ cm³ (les deux tiers de la boîte sont vides).`
    },
    {
      id: "4G4-ds-15",
      title: "Le cône dans la pyramide",
      difficulty: 3,
      points: 5,
      statement: `Une pyramide régulière $SABCD$ a pour base un carré de $6$ cm de côté et pour hauteur $10$ cm. On place à l'intérieur un cône de révolution de même sommet $S$ et de même hauteur, dont le cercle de base est inscrit dans le carré $ABCD$ (il touche les quatre côtés du carré).
1. Calculer le volume de la pyramide.
2. Justifier que le rayon du cône est $3$ cm, puis calculer le volume du cône en valeur exacte, puis arrondi au cm³.
3. Quel pourcentage du volume de la pyramide le cône occupe-t-il ? Arrondir à l'unité.
4. On veut fabriquer une autre pyramide, de même base carrée de $6$ cm de côté, qui ait **le même volume que le cône**. Quelle doit être sa hauteur ? Donner la valeur exacte, puis l'arrondi au millimètre.`,
      solution: `**1.** $V_{\\text{pyramide}} = \\dfrac{6^2 \\times 10}{3} = \\dfrac{360}{3} = 120$ cm³.

**2.** Le cercle inscrit dans le carré a pour diamètre le côté du carré, soit $6$ cm : son rayon est $3$ cm.
$V_{\\text{cône}} = \\dfrac{\\pi \\times 3^2 \\times 10}{3} = \\dfrac{90\\pi}{3} = 30\\pi$ cm³, soit environ $94$ cm³.

**3.** $\\dfrac{V_{\\text{cône}}}{V_{\\text{pyramide}}} = \\dfrac{30\\pi}{120} = \\dfrac{\\pi}{4} \\approx 0{,}785$. Le cône occupe environ **$79\\ \\%$** du volume de la pyramide.

**4.** On cherche la hauteur $h$ telle que $\\dfrac{36 \\times h}{3} = 30\\pi$, c'est-à-dire $12h = 30\\pi$.
Donc $h = \\dfrac{30\\pi}{12} = \\dfrac{5\\pi}{2} = 2{,}5\\pi$ cm (valeur exacte), soit environ **$7{,}9$ cm**.
Vérification : $\\dfrac{36 \\times 2{,}5\\pi}{3} = 12 \\times 2{,}5\\pi = 30\\pi$.`
    },
    {
      id: "4G4-ds-16",
      title: "Une pyramide dans un pavé droit",
      difficulty: 4,
      points: 6,
      statement: `$ABCDEFGH$ est un pavé droit tel que $AB = 8$ cm, $BC = 5$ cm et $AE = 6$ cm ; sa face du bas est le rectangle $ABCD$ et sa face du haut est le rectangle $EFGH$. Le point $S$ est un point quelconque de la face $EFGH$. On s'intéresse à la pyramide $SABCD$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 410 300" width="410" height="300" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="70,270 310,270 310,90 70,90" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="310" y1="270" x2="370" y2="220" stroke="currentColor" stroke-width="1.8" /><line x1="370" y1="220" x2="370" y2="40" stroke="currentColor" stroke-width="1.8" /><line x1="310" y1="90" x2="370" y2="40" stroke="currentColor" stroke-width="1.8" /><line x1="370" y1="40" x2="130" y2="40" stroke="currentColor" stroke-width="1.8" /><line x1="130" y1="40" x2="70" y2="90" stroke="currentColor" stroke-width="1.8" /><line x1="70" y1="270" x2="130" y2="220" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" /><line x1="130" y1="220" x2="370" y2="220" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" /><line x1="130" y1="220" x2="130" y2="40" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4" /><polygon points="70,270 310,270 370,220 130,220" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-opacity="0" /><line x1="240" y1="62" x2="70" y2="270" stroke="#2563eb" stroke-width="1.5" /><line x1="240" y1="62" x2="310" y2="270" stroke="#2563eb" stroke-width="1.5" /><line x1="240" y1="62" x2="370" y2="220" stroke="#2563eb" stroke-width="1.5" /><line x1="240" y1="62" x2="130" y2="220" stroke="#2563eb" stroke-width="1.4" stroke-dasharray="5 4" /><circle cx="240" cy="62" r="2.6" fill="currentColor" /><text x="240" y="54" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">S</text><text x="58" y="286" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="316" y="288" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="384" y="226" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="116" y="222" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">D</text><text x="56" y="90" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">E</text><text x="300" y="108" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">F</text><text x="384" y="40" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">G</text><text x="124" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">H</text><text x="190" y="292" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">8 cm</text><text x="352" y="258" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="start">5 cm</text><text x="60" y="185" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">6 cm</text></svg></div>

1. Calculer le volume du pavé droit.
2. a) Quelle est la hauteur de la pyramide $SABCD$ ? Justifier.
   b) Calculer son volume. Ce volume dépend-il de la position de $S$ sur la face $EFGH$ ?
   c) Quelle fraction du volume du pavé représente le volume de la pyramide ? Quel est le volume de l'espace du pavé situé en dehors de la pyramide ?
3. Dans cette question, on place $S$ en $E$ : on obtient la pyramide $EABCD$, dont l'arête $[EA]$ est verticale.
   a) Justifier que les triangles $EAB$ et $EAD$ sont rectangles en $A$.
   b) Calculer les longueurs $EB$ et $ED$, arrondies au millimètre si nécessaire.
   c) Calculer $AC^2$, puis la longueur de l'arête $[EC]$, arrondie au millimètre.
4. Calculer le volume de la pyramide $EABC$ (de base le triangle $ABC$). Comparer avec le volume de $EABCD$.`,
      solution: `**1.** $V_{\\text{pavé}} = 8 \\times 5 \\times 6 = 240$ cm³.

**2. a)** La hauteur de la pyramide est la distance entre le sommet $S$ et le plan de la base $ABCD$. Comme $S$ est sur la face du haut, parallèle à la face du bas, cette distance est la hauteur du pavé : **$6$ cm**, quelle que soit la position de $S$.

**b)** Aire de la base : $8 \\times 5 = 40$ cm². $V = \\dfrac{40 \\times 6}{3} = 80$ cm³.
La base et la hauteur ne dépendent pas de la position de $S$ : le volume vaut **toujours $80$ cm³**.

**c)** $\\dfrac{80}{240} = \\dfrac{1}{3}$ : la pyramide occupe le tiers du pavé. L'espace restant mesure $240 - 80 = 160$ cm³.

**3. a)** L'arête $[EA]$ est verticale, donc perpendiculaire à la face du bas $ABCD$, et en particulier aux droites $(AB)$ et $(AD)$ de cette face. Les triangles $EAB$ et $EAD$ sont donc rectangles en $A$ (ce sont des moitiés des faces rectangulaires $ABFE$ et $ADHE$ du pavé).

**b)** D'après le théorème de Pythagore :
- dans $EAB$ : $EB^2 = 6^2 + 8^2 = 36 + 64 = 100$, donc $EB = 10$ cm ;
- dans $EAD$ : $ED^2 = 6^2 + 5^2 = 36 + 25 = 61$, donc $ED = \\sqrt{61} \\approx 7{,}8$ cm.

**c)** Le triangle $ABC$ est rectangle en $B$ : $AC^2 = 8^2 + 5^2 = 64 + 25 = 89$.
Le triangle $EAC$ est rectangle en $A$ (car $(EA)$ est perpendiculaire à la face $ABCD$, qui contient $(AC)$) : $EC^2 = EA^2 + AC^2 = 36 + 89 = 125$, donc $EC = \\sqrt{125} \\approx 11{,}2$ cm.

**4.** Aire du triangle $ABC$ : $\\dfrac{8 \\times 5}{2} = 20$ cm². Hauteur : $EA = 6$ cm.
$V_{EABC} = \\dfrac{20 \\times 6}{3} = 40$ cm³, soit **la moitié** du volume de $EABCD$ : la base $ABC$ est la moitié du rectangle $ABCD$, pour la même hauteur.`
    },
    {
      id: "4G4-ds-17",
      title: "Se repérer dans un pavé droit",
      difficulty: 2,
      points: 5,
      statement: `On considère le pavé droit $ABCDEFGH$ ci-dessous, avec $AB = 8$ cm, $AD = 6$ cm et $AE = 4$ cm. On prend $A$ comme origine, les abscisses sur $(AB)$, les ordonnées sur $(AD)$ et les altitudes sur $(AE)$, en prenant le centimètre comme unité.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 300 190" width="300" height="190" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pavé droit ABCDEFGH en perspective cavalière"><polygon points="60,170 220,170 220,90 60,90" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" /><polygon points="220,170 265,130 265,50 220,90" fill="rgba(59,130,246,0.05)" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" /><polygon points="60,90 220,90 265,50 105,50" fill="rgba(59,130,246,0.05)" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" /><g stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"><line x1="60" y1="170" x2="105" y2="130" /><line x1="105" y1="130" x2="265" y2="130" /><line x1="105" y1="130" x2="105" y2="50" /></g><g font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor"><text x="49" y="182">A</text><text x="224" y="184">B</text><text x="271" y="138">C</text><text x="110" y="145">D</text><text x="47" y="88">E</text><text x="207" y="85">F</text><text x="270" y="47">G</text><text x="92" y="45">H</text></g></svg></div>

1. Donner les coordonnées des sommets $B$, $D$, $E$, $C$ et $G$.
2. Le point $M$ est le milieu de l'arête $[EF]$ et le point $N$ est le centre de la face du haut $EFGH$. Donner les coordonnées de $M$ et de $N$.
3. On considère le point $P(8 ; 3 ; 2)$. Sur quelle face du pavé se trouve-t-il ? Préciser sa position sur cette face.
4. Calculer le volume de la pyramide de sommet $G$ et de base $ABCD$.`,
      solution: `**1.** On part de $A$ et on avance le long de chaque axe :
$B(8 ; 0 ; 0)$, $D(0 ; 6 ; 0)$, $E(0 ; 0 ; 4)$, $C(8 ; 6 ; 0)$ et $G(8 ; 6 ; 4)$.

**2.** $E(0 ; 0 ; 4)$ et $F(8 ; 0 ; 4)$ : le milieu de $[EF]$ est à mi-chemin sur l'axe des abscisses, à la même altitude, donc $M(4 ; 0 ; 4)$.

Le centre de la face $EFGH$ est le milieu de la diagonale $[EG]$. Son altitude est $4$, son abscisse $\\dfrac{0 + 8}{2} = 4$ et son ordonnée $\\dfrac{0 + 6}{2} = 3$, donc $N(4 ; 3 ; 4)$.

**3.** L'abscisse de $P$ vaut $8$, soit la longueur $AB$ : $P$ est sur la face $BCGF$, celle qui est à droite sur la figure. Son ordonnée $3$ est la moitié de $AD$ et son altitude $2$ est la moitié de $AE$ : $P$ est le **centre** de la face $BCGF$.

**4.** Aire de la base : $8 \\times 6 = 48$ cm². La hauteur de la pyramide est $[GC]$, perpendiculaire à la face $ABCD$, et $GC = AE = 4$ cm.
$V = \\dfrac{48 \\times 4}{3} = 64$ cm³.`
    },
    {
      id: "4G4-ds-18",
      title: "Représenter une pyramide et un cône en perspective cavalière",
      difficulty: 2,
      points: 4,
      statement: `Les dessins sont à faire à la règle, sur une feuille.

1. Une pyramide $SABCD$ a pour base un carré $ABCD$ de côté $6$ cm. Son sommet $S$ est à la verticale du centre $O$ de la base, et $SO = 5$ cm.
On la représente en perspective cavalière. Le côté $[AB]$ est de face, en vraie grandeur. Les fuyantes $[AD]$ et $[BC]$ forment un angle de $45^\\circ$ avec $[AB]$, et on les réduit avec un coefficient de $0{,}5$.
   a) Quelle longueur faut-il donner à $[AD]$ et $[BC]$ sur le dessin ?
   b) Expliquer comment placer le point $O$, puis le point $S$, sur le dessin. Quelle longueur donner à $[OS]$ sur le dessin ?
   c) Quelles arêtes doivent être dessinées en pointillés ?
   d) Réaliser le dessin.
2. Un cône de révolution a un rayon de base de $3$ cm et une hauteur de $5$ cm. Expliquer comment le représenter en perspective cavalière, puis réaliser le dessin.
3. Un élève mesure $[AD]$ sur son dessin de la question 1 et trouve $3$ cm. Il en conclut que la base n'est pas un carré. Expliquer son erreur.`,
      solution: `**1. a)** Les fuyantes sont réduites par le coefficient $0{,}5$ : sur le dessin, $[AD]$ et $[BC]$ mesurent $6 \\times 0{,}5 = 3$ cm.

**b)** La base est dessinée comme un parallélogramme : $[AB]$ et $[DC]$ mesurent $6$ cm, $[AD]$ et $[BC]$ mesurent $3$ cm. Les diagonales de ce parallélogramme se coupent en $O$. La hauteur $[OS]$ est verticale, donc en vraie grandeur : on trace à partir de $O$ un segment vertical de $5$ cm, et son extrémité est $S$.

**c)** Le sommet $D$ de la base est caché. Les arêtes $[DA]$, $[DC]$ et $[DS]$ sont en pointillés, ainsi que la hauteur $[OS]$ et les diagonales tracées pour placer $O$, qui sont à l'intérieur du solide.

**d) et 2.** Pour le cône, on dessine la base comme un ovale aplati de largeur $6$ cm (le diamètre, en vraie grandeur), avec sa moitié arrière en pointillés. On trace à partir du centre un segment vertical de $5$ cm, puis on relie son extrémité aux deux bords de l'ovale : ce sont deux génératrices.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:420px;"><svg class="geo-svg-figure" viewBox="0 0 480 200" width="480" height="200" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pyramide à base carrée et cône de révolution en perspective cavalière"><polygon points="60,170 210,170 161.5,18.5" fill="rgba(59,130,246,0.08)" /><polygon points="210,170 263,117 161.5,18.5" fill="rgba(59,130,246,0.05)" /><g stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><line x1="60" y1="170" x2="210" y2="170" /><line x1="210" y1="170" x2="263" y2="117" /><line x1="161.5" y1="18.5" x2="60" y2="170" /><line x1="161.5" y1="18.5" x2="210" y2="170" /><line x1="161.5" y1="18.5" x2="263" y2="117" /></g><g stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4"><line x1="60" y1="170" x2="113" y2="117" /><line x1="113" y1="117" x2="263" y2="117" /><line x1="161.5" y1="18.5" x2="113" y2="117" /><line x1="161.5" y1="18.5" x2="161.5" y2="143.5" /></g><g stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"><line x1="60" y1="170" x2="263" y2="117" /><line x1="210" y1="170" x2="113" y2="117" /></g><circle cx="161.5" cy="143.5" r="2.4" fill="currentColor" /><path d="M 315 165 A 75 22 0 0 0 465 165" fill="none" stroke="currentColor" stroke-width="1.7" /><path d="M 315 165 A 75 22 0 0 1 465 165" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4" /><line x1="390" y1="40" x2="315" y2="165" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" /><line x1="390" y1="40" x2="465" y2="165" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" /><line x1="390" y1="40" x2="390" y2="165" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4" /><circle cx="390" cy="165" r="2.4" fill="currentColor" /><g font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="currentColor"><text x="157" y="14">S</text><text x="49" y="182">A</text><text x="214" y="184">B</text><text x="269" y="122">C</text><text x="100" y="114">D</text><text x="166" y="158">O</text></g></svg></div>

**3.** Sur une figure en perspective cavalière, les fuyantes sont réduites : on ne peut pas y mesurer directement les longueurs réelles. Ici, $3$ cm sur le dessin correspondent à $3 \\div 0{,}5 = 6$ cm en réalité, soit la longueur de $[AB]$. La base est donc bien un carré.`
    },
    {
      id: "4G4-ds-19",
      title: "Construire les patrons d'une pyramide et d'un cône",
      difficulty: 3,
      points: 5,
      statement: `Les constructions sont à faire à la règle, au compas et au rapporteur.

1. La pyramide $SABCD$ a pour base le rectangle $ABCD$ avec $AB = 6$ cm et $BC = 4$ cm. Ses quatre arêtes latérales mesurent $5$ cm.
   a) Expliquer comment construire le triangle $SAB$ à partir du côté $[AB]$, puis construire un patron complet de la pyramide.
   b) Calculer la hauteur issue de $S$ dans le triangle $SAB$, puis l'aire de ce triangle.
   c) Calculer l'aire totale du patron, arrondie au dixième de cm².
2. Un cône de révolution a pour rayon $r = 2$ cm et pour génératrice $g = 8$ cm.
   a) Calculer l'angle du secteur circulaire de son patron.
   b) Construire ce patron.
   c) Vérifier par le calcul que l'arc du secteur a la même longueur que le périmètre de la base.
3. On modifie le cône de la question 2.
   a) On double le rayon sans changer la génératrice. Que devient l'angle du secteur ?
   b) On double la génératrice sans changer le rayon. Que devient l'angle du secteur ?
   c) L'angle du secteur est-il toujours proportionnel au rayon ? Justifier.`,
      solution: `**1. a)** Depuis $A$ et depuis $B$, on trace au compas deux arcs de rayon $5$ cm, à l'extérieur du rectangle. Leur point d'intersection est le sommet du triangle $SAB$. On fait de même sur les trois autres côtés du rectangle : le patron comporte le rectangle et quatre triangles.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:300px;"><svg class="geo-svg-figure" viewBox="0 0 300 236" width="300" height="236" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Patron de la pyramide : un rectangle et quatre triangles isocèles"><polygon points="96,154 204,154 204,82 96,82" fill="rgba(16,185,129,0.12)" stroke="currentColor" stroke-width="1.7" /><polygon points="96,82 204,82 150,10" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.7" /><polygon points="204,82 204,154 286.5,118" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.7" /><polygon points="204,154 96,154 150,226" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.7" /><polygon points="96,154 96,82 13.5,118" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.7" /><g font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="currentColor"><text x="102" y="149">A</text><text x="191" y="149">B</text><text x="191" y="96">C</text><text x="102" y="96">D</text></g></svg></div>

**b)** Le triangle $SAB$ est isocèle en $S$. Soit $I$ le milieu de $[AB]$ : $(SI)$ est sa hauteur et le triangle $SIA$ est rectangle en $I$, avec $IA = 3$ cm.
D'après le théorème de Pythagore, $SI^2 = 5^2 - 3^2 = 25 - 9 = 16$, donc $SI = 4$ cm.
Aire de $SAB$ : $\\dfrac{6 \\times 4}{2} = 12$ cm².

**c)** Le triangle $SCD$ est identique à $SAB$. Pour $SBC$, soit $J$ le milieu de $[BC]$ : $SJ^2 = 5^2 - 2^2 = 21$, donc $SJ = \\sqrt{21}$ cm. Aire de $SBC$ : $\\dfrac{4 \\times \\sqrt{21}}{2} = 2\\sqrt{21}$ cm², et $SDA$ a la même aire.
Aire du patron : $6 \\times 4 + 2 \\times 12 + 2 \\times 2\\sqrt{21} = 48 + 4\\sqrt{21} \\approx 66{,}3$ cm².

**2. a)** $\\alpha = 360^\\circ \\times \\dfrac{2}{8} = 90^\\circ$.

**b)** On trace un secteur de rayon $8$ cm et d'angle $90^\\circ$, puis un cercle de rayon $2$ cm qui touche l'arc en un seul point.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:230px;"><svg class="geo-svg-figure" viewBox="0 0 220 170" width="220" height="170" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Patron du cône : un quart de disque de rayon 8 cm et un disque de rayon 2 cm"><path d="M 50 20 L 170 20 A 120 120 0 0 1 50 140 Z" fill="rgba(139,92,246,0.1)" stroke="currentColor" stroke-width="1.7" /><circle cx="156.06" cy="126.06" r="30" fill="rgba(16,185,129,0.12)" stroke="currentColor" stroke-width="1.7" /><path d="M 50 40 L 70 40 L 70 20" fill="none" stroke="currentColor" stroke-width="1.2" /><g font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="currentColor"><text x="100" y="15">8 cm</text><text x="145" y="130">2 cm</text></g></svg></div>

**c)** Arc : $\\dfrac{90}{360} \\times 2\\pi \\times 8 = 4\\pi$ cm. Périmètre de la base : $2\\pi \\times 2 = 4\\pi$ cm. Les deux longueurs sont égales.

**3. a)** Avec $r = 4$ cm et $g = 8$ cm : $\\alpha = 360^\\circ \\times \\dfrac{4}{8} = 180^\\circ$. L'angle a doublé.

**b)** Avec $r = 2$ cm et $g = 16$ cm : $\\alpha = 360^\\circ \\times \\dfrac{2}{16} = 45^\\circ$. L'angle a été divisé par $2$.

**c)** Non. L'angle n'est proportionnel au rayon que si la génératrice reste la même : la formule $\\alpha = 360^\\circ \\times \\dfrac{r}{g}$ dépend aussi de $g$.`
    },
    {
      id: "4G4-ds-20",
      title: "Agrandir et réduire : longueurs, aires et volumes",
      difficulty: 3,
      points: 6,
      statement: `1. Le triangle $ABC$ est tel que $AB = 3$ cm, $AC = 4$ cm et $BC = 5$ cm.
   a) Démontrer que $ABC$ est rectangle en $A$.
   b) Donner les longueurs des côtés de l'agrandissement de rapport $2$ de ce triangle, puis construire cet agrandissement.
   c) Calculer l'aire de chacun des deux triangles. Par combien l'aire a-t-elle été multipliée ?
2. Une pyramide a pour base un carré de côté $9$ cm et pour hauteur $12$ cm.
   a) Calculer son volume.
   b) On la réduit de façon à obtenir une pyramide de hauteur $4$ cm. Déterminer le rapport de cette réduction.
   c) En déduire le côté de la base réduite, puis son aire.
   d) Calculer de deux façons différentes le volume de la pyramide réduite.
3. Un cône a un volume de $54\\pi$ cm³ et un rayon de base de $6$ cm. Une réduction de ce cône a un volume de $16\\pi$ cm³.
   a) Montrer que le rapport $k$ de cette réduction vérifie $k^3 = \\dfrac{8}{27}$.
   b) En déduire la valeur de $k$, puis le rayon de la base du cône réduit.`,
      solution: `**1. a)** Le plus grand côté est $[BC]$. On a $BC^2 = 25$ et $AB^2 + AC^2 = 9 + 16 = 25$. Comme $BC^2 = AB^2 + AC^2$, d'après la réciproque du théorème de Pythagore, le triangle $ABC$ est rectangle en $A$.

**b)** On multiplie chaque longueur par $2$ : les côtés mesurent $6$ cm, $8$ cm et $10$ cm. On construit un angle droit, on reporte $6$ cm et $8$ cm sur ses côtés, et on relie les deux extrémités ; le troisième côté mesure alors $10$ cm.

**c)** Aire de $ABC$ : $\\dfrac{3 \\times 4}{2} = 6$ cm². Aire de l'agrandissement : $\\dfrac{6 \\times 8}{2} = 24$ cm². L'aire a été multipliée par $4 = 2^2$.

**2. a)** $V = \\dfrac{9^2 \\times 12}{3} = \\dfrac{81 \\times 12}{3} = 324$ cm³.

**b)** $k = \\dfrac{4}{12} = \\dfrac{1}{3}$.

**c)** Côté de la base réduite : $9 \\times \\dfrac{1}{3} = 3$ cm. Aire : $3^2 = 9$ cm² (on retrouve $81 \\times \\left(\\dfrac{1}{3}\\right)^2 = 9$).

**d)** Avec le rapport : $324 \\times \\left(\\dfrac{1}{3}\\right)^3 = \\dfrac{324}{27} = 12$ cm³.
Avec la formule : $V = \\dfrac{9 \\times 4}{3} = 12$ cm³.

**3. a)** Les volumes sont multipliés par $k^3$, donc $k^3 = \\dfrac{16\\pi}{54\\pi} = \\dfrac{16}{54} = \\dfrac{8}{27}$.

**b)** On cherche un nombre dont le cube vaut $\\dfrac{8}{27}$. Comme $2^3 = 8$ et $3^3 = 27$, on a $k = \\dfrac{2}{3}$.
Rayon du cône réduit : $6 \\times \\dfrac{2}{3} = 4$ cm.`
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
3. **Pour aller plus loin** (notion étudiée en 3e). Calculer l'étendue de cette série.
4. Yanis obtient $20$ à une huitième évaluation. Sa médiane change-t-elle ? Justifier.`,
      solution: `**1.** Somme des notes : $12 + 8 + 15 + 10 + 17 + 9 + 14 = 85$. Moyenne : $\\dfrac{85}{7} \\approx 12{,}14$.

**2.** On range les notes dans l'ordre croissant : $8 \\;;\\; 9 \\;;\\; 10 \\;;\\; 12 \\;;\\; 14 \\;;\\; 15 \\;;\\; 17$.
L'effectif est $7$ (impair) : la médiane est la $4^\\text{e}$ valeur, soit **$12$**. Au moins la moitié des notes de Yanis sont inférieures ou égales à $12$, et au moins la moitié sont supérieures ou égales à $12$.

**3.** (Pour aller plus loin.) Étendue : $17 - 8 = 9$ points.

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
3. **Pour aller plus loin** (notion étudiée en 3e). Calculer l'étendue de la série.
4. Quel pourcentage des élèves chaussent du $39$ ou plus ?`,
      solution: `**1.** Moyenne pondérée par les effectifs :
$$\\frac{36 \\times 2 + 37 \\times 5 + 38 \\times 7 + 39 \\times 6 + 40 \\times 3 + 41 \\times 2}{25} = \\frac{72 + 185 + 266 + 234 + 120 + 82}{25} = \\frac{959}{25} = 38{,}36.$$

**2.** L'effectif total est $25$ (impair) : la médiane est la $13^\\text{e}$ valeur de la série rangée. Effectifs cumulés : $2$ ; $7$ ; $14$ ; … La $13^\\text{e}$ valeur est donc $38$ (les valeurs de rang $8$ à $14$ valent $38$). La médiane est **$38$**.

**3.** (Pour aller plus loin.) Étendue : $41 - 36 = 5$.

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
3. **Pour aller plus loin** (notion étudiée en 3e). Calculer l'étendue des temps de chaque nageur.
4. **Pour aller plus loin.** L'entraîneur veut sélectionner le nageur le plus régulier. Lequel doit-il choisir ? Justifier.`,
      solution: `**1.** Alex : $\\dfrac{31 + 34 + 29 + 33 + 33}{5} = \\dfrac{160}{5} = 32$ s. Bao : $\\dfrac{30 + 38 + 28 + 36 + 28}{5} = \\dfrac{160}{5} = 32$ s.

**2.** Séries rangées (effectif $5$, médiane = $3^\\text{e}$ valeur) :
- Alex : $29 \\;;\\; 31 \\;;\\; 33 \\;;\\; 33 \\;;\\; 34$ → médiane $33$ s ;
- Bao : $28 \\;;\\; 28 \\;;\\; 30 \\;;\\; 36 \\;;\\; 38$ → médiane $30$ s.

**3.** (Pour aller plus loin.) Alex : $34 - 29 = 5$ s. Bao : $38 - 28 = 10$ s.

**4.** (Pour aller plus loin.) Les moyennes sont égales, mais l'étendue des temps d'Alex est deux fois plus petite : ses temps sont moins dispersés. L'entraîneur doit choisir **Alex**, le plus régulier. (Bao réussit de meilleurs temps plus souvent, comme le montre sa médiane, mais il est irrégulier.)`
    },
    {
      id: "4D1-ds-05",
      title: "La note manquante",
      difficulty: 3,
      points: 5,
      statement: `Les six notes d'un élève sont : $11$ ; $15$ ; $8$ ; $x$ ; $13$ ; $9$. On sait que sa moyenne est égale à $11{,}5$.
1. Calculer la somme des six notes.
2. En déduire la note $x$.
3. Déterminer la médiane de cette série. **Pour aller plus loin** (notion étudiée en 3e) : déterminer aussi son étendue.
4. Quelle note l'élève doit-il obtenir à un septième devoir pour que sa moyenne soit exactement égale à $12$ ?`,
      solution: `**1.** La moyenne est la somme divisée par l'effectif, donc la somme vaut $11{,}5 \\times 6 = 69$.

**2.** $11 + 15 + 8 + 13 + 9 = 56$, donc $x = 69 - 56 = 13$.

**3.** Série rangée : $8 \\;;\\; 9 \\;;\\; 11 \\;;\\; 13 \\;;\\; 13 \\;;\\; 15$. L'effectif est pair ($6$) : médiane $= \\dfrac{11 + 13}{2} = 12$. (Pour aller plus loin.) Étendue : $15 - 8 = 7$.

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
4. **Pour aller plus loin** (notion étudiée en 3e). Peut-on calculer l'étendue exacte de cette série ? Justifier.`,
      solution: `**1.** $8 + 12 = 20$ élèves sur $30$ : $\\dfrac{20}{30} \\approx 0{,}67$, soit environ $67\\,\\%$.

**2.** Centres des classes : $5$ ; $15$ ; $25$ ; $35$.
$$\\frac{5 \\times 8 + 15 \\times 12 + 25 \\times 6 + 35 \\times 4}{30} = \\frac{40 + 180 + 150 + 140}{30} = \\frac{510}{30} = 17.$$
La durée moyenne est d'environ $17$ minutes.

**3.** L'effectif est $30$ : la médiane est la moyenne des $15^\\text{e}$ et $16^\\text{e}$ valeurs. Les $8$ premières valeurs sont dans $[0 ; 10[$, les valeurs de rang $9$ à $20$ dans $[10 ; 20[$. La médiane est donc dans la classe **$[10 ; 20[$**.

**4.** (Pour aller plus loin.) Non : on ne connaît pas les valeurs exactes, seulement les classes. On sait seulement que l'étendue est inférieure à $40$ min.`
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
4. **Pour aller plus loin** (notion étudiée en 3e). Calculer l'étendue de la série.
5. Combien de mois ont reçu une hauteur de pluie supérieure à la moyenne ?`,
      solution: `**1.** $62 + 48 + 55 + 70 + 81 + 43 + 18 + 25 + 54 + 89 + 96 + 71 = 712$ mm.

**2.** Moyenne : $\\dfrac{712}{12} \\approx 59{,}3$ mm.

**3.** On range les $12$ valeurs dans l'ordre croissant :
$18 ; 25 ; 43 ; 48 ; 54 ; 55 ; 62 ; 70 ; 71 ; 81 ; 89 ; 96$.
L'effectif est pair : la médiane est la moyenne des $6^\\text{e}$ et $7^\\text{e}$ valeurs, $\\dfrac{55 + 62}{2} = 58{,}5$ mm.
Interprétation : pendant la moitié des mois, il est tombé au plus $58{,}5$ mm de pluie ; pendant l'autre moitié, au moins $58{,}5$ mm.

**4.** (Pour aller plus loin.) Étendue : $96 - 18 = 78$ mm.

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
4. **Pour aller plus loin** (notion étudiée en 3e). Calculer l'étendue.
5. Quel pourcentage des élèves passe au moins $3$ heures devant un écran ?`,
      solution: `**1.** $2 + 5 + 8 + 6 + 3 + 1 = 25$.

**2.** On calcule une moyenne pondérée par les effectifs :
$\\dfrac{0 \\times 2 + 1 \\times 5 + 2 \\times 8 + 3 \\times 6 + 4 \\times 3 + 5 \\times 1}{25} = \\dfrac{0 + 5 + 16 + 18 + 12 + 5}{25} = \\dfrac{56}{25} = 2{,}24$ h.
Le temps d'écran moyen est de $2{,}24$ h, soit environ $2$ h $14$ min ($0{,}24 \\times 60 = 14{,}4$).

**3.** L'effectif est impair ($25$) : la médiane est la $13^\\text{e}$ valeur de la série rangée dans l'ordre croissant.
Effectifs cumulés : $2$ élèves à $0$ h ; $2 + 5 = 7$ jusqu'à $1$ h ; $7 + 8 = 15$ jusqu'à $2$ h. La $13^\\text{e}$ valeur est donc $2$.
La médiane est **$2$ heures** : au moins la moitié des élèves passe au plus $2$ h devant un écran.

**4.** (Pour aller plus loin.) Étendue : $5 - 0 = 5$ h.

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
      statement: `**Pour aller plus loin** (l'étendue est une notion étudiée en 3e).

Un professeur a rendu $5$ notes entières (sur $20$) à un groupe d'élèves. Il donne les indications suivantes : la moyenne est $12$, la médiane est $14$ et l'étendue est $10$.
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
    },
    {
      id: "4D1-ds-13",
      title: "Les livres lus pendant l'été",
      difficulty: 1,
      points: 4,
      statement: `On a demandé aux élèves d'une classe combien de livres ils ont lus pendant l'été :

| Nombre de livres | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| Effectif | $3$ | $5$ | $8$ | $6$ | $2$ | $1$ |

1. Combien d'élèves ont répondu ?
2. Calculer le nombre moyen de livres lus par élève.
3. Déterminer la médiane de cette série. Justifier.
4. **Pour aller plus loin** (notion étudiée en 3e). Calculer l'étendue de la série.
5. Quel pourcentage des élèves a lu au moins $3$ livres ?`,
      solution: `**1.** $3 + 5 + 8 + 6 + 2 + 1 = 25$ élèves.

**2.** On calcule la moyenne pondérée par les effectifs :
$\\dfrac{0 \\times 3 + 1 \\times 5 + 2 \\times 8 + 3 \\times 6 + 4 \\times 2 + 5 \\times 1}{25} = \\dfrac{0 + 5 + 16 + 18 + 8 + 5}{25} = \\dfrac{52}{25} = 2{,}08$.
En moyenne, un élève a lu $2{,}08$ livres.

**3.** L'effectif $25$ est impair : la médiane est la $13^\\text{e}$ valeur de la série rangée dans l'ordre croissant.
Effectifs cumulés : $3$ élèves ont lu $0$ livre, $3 + 5 = 8$ en ont lu au plus $1$, $8 + 8 = 16$ en ont lu au plus $2$. La $13^\\text{e}$ valeur est donc $2$ : la médiane vaut **$2$ livres**.

**4.** (Pour aller plus loin.) Étendue : $5 - 0 = 5$ livres.

**5.** Au moins $3$ livres : $6 + 2 + 1 = 9$ élèves, soit $\\dfrac{9}{25} = 0{,}36 = 36\\,\\%$.`
    },
    {
      id: "4D1-ds-14",
      title: "Le club de théâtre",
      difficulty: 2,
      points: 5,
      statement: `Le diagramme en bâtons ci-dessous donne la répartition par âge des membres du club de théâtre d'un collège.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 300" width="400" height="300" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="50" y1="250" x2="370" y2="250" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="255" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">0</text><line x1="50" y1="224" x2="370" y2="224" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="229" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">1</text><line x1="50" y1="198" x2="370" y2="198" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="203" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">2</text><line x1="50" y1="172" x2="370" y2="172" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="177" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">3</text><line x1="50" y1="146" x2="370" y2="146" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="151" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">4</text><line x1="50" y1="120" x2="370" y2="120" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="125" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">5</text><line x1="50" y1="94" x2="370" y2="94" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="99" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">6</text><line x1="50" y1="68" x2="370" y2="68" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="73" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">7</text><line x1="50" y1="42" x2="370" y2="42" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="47" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">8</text><line x1="50" y1="250" x2="370" y2="250" stroke="currentColor" stroke-width="1.5" /><line x1="50" y1="250" x2="50" y2="26.400000000000006" stroke="currentColor" stroke-width="1.5" /><rect x="78" y="146" width="24" height="104" fill="#2563eb" fill-opacity="0.75" /><text x="90" y="268" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">11</text><rect x="138" y="94" width="24" height="156" fill="#2563eb" fill-opacity="0.75" /><text x="150" y="268" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">12</text><rect x="198" y="68" width="24" height="182" fill="#2563eb" fill-opacity="0.75" /><text x="210" y="268" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">13</text><rect x="258" y="120" width="24" height="130" fill="#2563eb" fill-opacity="0.75" /><text x="270" y="268" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">14</text><rect x="318" y="172" width="24" height="78" fill="#2563eb" fill-opacity="0.75" /><text x="330" y="268" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">15</text><text x="370" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">Âge (ans)</text><text x="56" y="22.400000000000006" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="start">Effectif</text></svg></div>

1. Recopier et compléter le tableau d'effectifs suivant :

| Âge (ans) | $11$ | $12$ | $13$ | $14$ | $15$ |
|---|---|---|---|---|---|
| Effectif | | | | | |

2. Combien le club compte-t-il de membres ?
3. Calculer l'âge moyen des membres du club.
4. Déterminer l'âge médian. **Pour aller plus loin** (notion étudiée en 3e) : déterminer aussi l'étendue de la série.
5. Quelle est la fréquence des membres âgés de $13$ ans ? Donner le résultat en pourcentage.`,
      solution: `**1.**

| Âge (ans) | $11$ | $12$ | $13$ | $14$ | $15$ |
|---|---|---|---|---|---|
| Effectif | $4$ | $6$ | $7$ | $5$ | $3$ |

**2.** $4 + 6 + 7 + 5 + 3 = 25$ membres.

**3.** Moyenne pondérée : $\\dfrac{11 \\times 4 + 12 \\times 6 + 13 \\times 7 + 14 \\times 5 + 15 \\times 3}{25} = \\dfrac{44 + 72 + 91 + 70 + 45}{25} = \\dfrac{322}{25} = 12{,}88$ ans.

**4.** L'effectif $25$ est impair : la médiane est la $13^\\text{e}$ valeur de la série rangée. Effectifs cumulés : $4$ ; $10$ ; $17$ ; … Les valeurs de rang $11$ à $17$ valent $13$ : l'âge médian est **$13$ ans**.
(Pour aller plus loin.) Étendue : $15 - 11 = 4$ ans.

**5.** $\\dfrac{7}{25} = 0{,}28$ : la fréquence des membres de $13$ ans est $28\\,\\%$.`
    },
    {
      id: "4D1-ds-15",
      title: "Les animaux de compagnie",
      difficulty: 3,
      points: 5,
      statement: `Une enquête menée auprès de $200$ foyers d'une commune porte sur le nombre d'animaux de compagnie de chaque foyer. Les résultats sont donnés sous forme de fréquences :

| Nombre d'animaux | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|
| Fréquence | $40\\,\\%$ | $35\\,\\%$ | $15\\,\\%$ | $10\\,\\%$ |

1. Calculer l'effectif de chaque valeur.
2. Calculer le nombre moyen d'animaux par foyer, de deux façons :
   a) à l'aide des effectifs ;
   b) directement à l'aide des fréquences, en calculant $0 \\times 0{,}40 + 1 \\times 0{,}35 + 2 \\times 0{,}15 + 3 \\times 0{,}10$. Expliquer pourquoi on obtient le même résultat.
3. Déterminer la médiane de cette série. Justifier.
4. Un journaliste écrit : « La plupart des foyers possèdent au moins un animal. » A-t-il raison ?`,
      solution: `**1.** Effectif $=$ fréquence $\\times$ effectif total :
- $0$ animal : $0{,}40 \\times 200 = 80$ foyers ;
- $1$ animal : $0{,}35 \\times 200 = 70$ foyers ;
- $2$ animaux : $0{,}15 \\times 200 = 30$ foyers ;
- $3$ animaux : $0{,}10 \\times 200 = 20$ foyers.
(Vérification : $80 + 70 + 30 + 20 = 200$.)

**2. a)** $\\dfrac{0 \\times 80 + 1 \\times 70 + 2 \\times 30 + 3 \\times 20}{200} = \\dfrac{0 + 70 + 60 + 60}{200} = \\dfrac{190}{200} = 0{,}95$ animal par foyer.

**b)** $0 \\times 0{,}40 + 1 \\times 0{,}35 + 2 \\times 0{,}15 + 3 \\times 0{,}10 = 0 + 0{,}35 + 0{,}30 + 0{,}30 = 0{,}95$.
On obtient le même résultat car $\\dfrac{1 \\times 70}{200} = 1 \\times \\dfrac{70}{200} = 1 \\times 0{,}35$, et de même pour chaque terme : diviser la somme par $200$ revient à multiplier chaque valeur par sa fréquence.

**3.** L'effectif $200$ est pair : la médiane est la moyenne des $100^\\text{e}$ et $101^\\text{e}$ valeurs de la série rangée.
Les $80$ premières valeurs valent $0$, les valeurs de rang $81$ à $150$ valent $1$. Les $100^\\text{e}$ et $101^\\text{e}$ valeurs valent donc $1$ : la médiane est **$1$ animal**.

**4.** Les foyers ayant au moins un animal représentent $35 + 15 + 10 = 60\\,\\%$ des foyers (ou $100 - 40 = 60\\,\\%$). C'est plus de la moitié : le journaliste a raison. On le retrouve avec la médiane : comme elle vaut $1$, au moins la moitié des foyers ont au moins un animal.`
    },
    {
      id: "4D1-ds-16",
      title: "Les juges de patinage",
      difficulty: 4,
      points: 6,
      statement: `Lors d'une compétition de patinage, sept juges notent chaque patineur sur $6$. Voici les notes obtenues par la patineuse Anna :
$$5{,}6 \\quad 5{,}8 \\quad 5{,}7 \\quad 5{,}8 \\quad 6{,}0 \\quad 5{,}9 \\quad 4{,}9$$

1. Calculer la moyenne des sept notes d'Anna, arrondie au centième.
2. Déterminer la médiane de ces notes. **Pour aller plus loin** (notion étudiée en 3e) : déterminer aussi leur étendue.
3. Le règlement prévoit de retirer la note la plus haute et la note la plus basse, puis de calculer la moyenne des cinq notes restantes. Calculer cette « moyenne réduite » pour Anna.
4. Supposons que le juge qui a donné $4{,}9$ se soit trompé et ait donné $2{,}0$.
   a) Calculer la nouvelle moyenne des sept notes, arrondie au centième.
   b) Que deviennent la médiane et la moyenne réduite ?
   c) Expliquer pourquoi le règlement utilise la moyenne réduite plutôt que la moyenne des sept notes.
5. La patineuse Bérénice obtient : $5{,}7$ ; $5{,}9$ ; $5{,}8$ ; $5{,}9$ ; $5{,}5$ ; $5{,}8$ ; $5{,}9$. Laquelle des deux patineuses est classée devant selon le règlement (avec les vraies notes d'Anna) ?`,
      solution: `**1.** Somme : $5{,}6 + 5{,}8 + 5{,}7 + 5{,}8 + 6{,}0 + 5{,}9 + 4{,}9 = 39{,}7$. Moyenne : $\\dfrac{39{,}7}{7} \\approx 5{,}67$.

**2.** Série rangée : $4{,}9$ ; $5{,}6$ ; $5{,}7$ ; $5{,}8$ ; $5{,}8$ ; $5{,}9$ ; $6{,}0$. L'effectif $7$ est impair : la médiane est la $4^\\text{e}$ valeur, $5{,}8$.
(Pour aller plus loin.) Étendue : $6{,}0 - 4{,}9 = 1{,}1$.

**3.** On retire $6{,}0$ et $4{,}9$ : $\\dfrac{5{,}6 + 5{,}7 + 5{,}8 + 5{,}8 + 5{,}9}{5} = \\dfrac{28{,}8}{5} = 5{,}76$.

**4. a)** La somme diminue de $4{,}9 - 2{,}0 = 2{,}9$ : elle vaut $36{,}8$. Moyenne : $\\dfrac{36{,}8}{7} \\approx 5{,}26$.

**b)** La série rangée devient $2{,}0$ ; $5{,}6$ ; $5{,}7$ ; $5{,}8$ ; $5{,}8$ ; $5{,}9$ ; $6{,}0$ : la $4^\\text{e}$ valeur est toujours $5{,}8$, la médiane ne change pas.
La note $2{,}0$ est la plus basse, elle est retirée : la moyenne réduite reste $5{,}76$.

**c)** Une seule note très différente des autres (erreur ou juge trop sévère) fait chuter la moyenne des sept notes de $5{,}67$ à $5{,}26$, alors qu'elle n'a aucun effet sur la moyenne réduite. La moyenne réduite est moins sensible aux notes extrêmes : elle est plus juste pour le patineur.

**5.** Notes de Bérénice rangées : $5{,}5$ ; $5{,}7$ ; $5{,}8$ ; $5{,}8$ ; $5{,}9$ ; $5{,}9$ ; $5{,}9$. On retire $5{,}5$ et une note $5{,}9$ :
$\\dfrac{5{,}7 + 5{,}8 + 5{,}8 + 5{,}9 + 5{,}9}{5} = \\dfrac{29{,}1}{5} = 5{,}82$.
Comme $5{,}82 > 5{,}76$, **Bérénice** est classée devant Anna.`
    },
    {
      id: "4D1-ds-17",
      title: "Les activités préférées de deux classes",
      difficulty: 2,
      points: 7,
      statement: `On a demandé aux $24$ élèves d'une classe quelle est leur activité préférée. Les réponses sont représentées par le diagramme circulaire ci-dessous.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 440 230" width="440" height="230" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagramme circulaire. Sport : 150° ; Lecture : 60° ; Jeux vidéo : 90° ; Musique : 60°."><path d="M 220 115 L 220.00 30.00 A 85 85 0 0 1 262.50 188.61 Z" fill="#2563eb" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2" /><path d="M 220 115 L 262.50 188.61 A 85 85 0 0 1 177.50 188.61 Z" fill="#f59e0b" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2" /><path d="M 220 115 L 177.50 188.61 A 85 85 0 0 1 146.39 72.50 Z" fill="#10b981" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2" /><path d="M 220 115 L 146.39 72.50 A 85 85 0 0 1 220.00 30.00 Z" fill="#db2777" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2" /><text x="311.8" y="95.4" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="start">Sport : 150°</text><text x="220.0" y="215.0" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="middle">Lecture : 60°</text><text x="128.2" y="144.6" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">Jeux vidéo : 90°</text><text x="172.5" y="37.7" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">Musique : 60°</text></svg></div>

1. Calculer le nombre d'élèves qui ont choisi chaque activité.
2. Quel pourcentage des élèves de cette classe a choisi les jeux vidéo ?
3. Dans une autre classe, $12$ élèves ont choisi le sport, $6$ la lecture, $9$ les jeux vidéo et $3$ la musique.
   a) Combien d'élèves compte cette classe ?
   b) Calculer l'angle du secteur correspondant à chaque activité dans un diagramme circulaire.
   c) Construire ce diagramme circulaire.
4. Dans laquelle des deux classes la proportion d'élèves qui ont choisi le sport est-elle la plus grande ? Justifier.`,
      solution: `**1.** Les $24$ élèves correspondent à $360^\\circ$, donc un élève correspond à $\\dfrac{360}{24} = 15^\\circ$.
Sport : $150 \\div 15 = 10$ élèves. Lecture : $60 \\div 15 = 4$ élèves. Jeux vidéo : $90 \\div 15 = 6$ élèves. Musique : $60 \\div 15 = 4$ élèves.
Vérification : $10 + 4 + 6 + 4 = 24$.

**2.** Le secteur des jeux vidéo mesure $90^\\circ$, soit le quart du disque : $\\dfrac{90}{360} = \\dfrac{1}{4} = 25\\,\\%$. Donc **$25\\,\\%$** des élèves ont choisi les jeux vidéo.

**3. a)** $12 + 6 + 9 + 3 = 30$ : cette classe compte **$30$ élèves**.

**b)** Un élève correspond à $\\dfrac{360}{30} = 12^\\circ$.
Sport : $12 \\times 12 = 144^\\circ$. Lecture : $6 \\times 12 = 72^\\circ$. Jeux vidéo : $9 \\times 12 = 108^\\circ$. Musique : $3 \\times 12 = 36^\\circ$.
Vérification : $144 + 72 + 108 + 36 = 360$.

**c)** On trace un disque et un rayon, puis on reporte les angles au rapporteur.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 440 230" width="440" height="230" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagramme circulaire. Sport : 144° ; Lecture : 72° ; Jeux vidéo : 108° ; Musique : 36°."><path d="M 220 115 L 220.00 30.00 A 85 85 0 0 1 269.96 183.77 Z" fill="#2563eb" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2" /><path d="M 220 115 L 269.96 183.77 A 85 85 0 0 1 170.04 183.77 Z" fill="#f59e0b" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2" /><path d="M 220 115 L 170.04 183.77 A 85 85 0 0 1 170.04 46.23 Z" fill="#10b981" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2" /><path d="M 220 115 L 170.04 46.23 A 85 85 0 0 1 220.00 30.00 Z" fill="#db2777" fill-opacity="0.7" stroke="currentColor" stroke-width="1.2" /><text x="310.4" y="90.6" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="start">Sport : 144°</text><text x="220.0" y="215.0" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="middle">Lecture : 72°</text><text x="125.0" y="120.0" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">Jeux vidéo : 108°</text><text x="190.6" y="29.6" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">Musique : 36°</text></svg></div>

**4.** Dans un diagramme circulaire, l'angle est proportionnel à la part de l'effectif total. Le secteur du sport mesure $150^\\circ$ dans la première classe et $144^\\circ$ dans la seconde : la proportion est la plus grande dans la **première classe**, bien que l'effectif ($10$) y soit plus petit que dans la seconde ($12$).
En fréquences : $\\dfrac{10}{24} \\approx 41{,}7\\,\\%$ et $\\dfrac{12}{30} = 40\\,\\%$.`
    },
    {
      id: "4D1-ds-18",
      title: "Sorties au cinéma : médiane et diagramme en bâtons",
      difficulty: 3,
      points: 8,
      statement: `Le diagramme en bâtons ci-dessous donne le nombre de sorties au cinéma effectuées pendant les vacances par les adolescents d'un club.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 280" width="400" height="280" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagramme en bâtons. 0 : effectif 3 ; 1 : effectif 6 ; 2 : effectif 6 ; 3 : effectif 8 ; 4 : effectif 4 ; 5 : effectif 3."><line x1="50" y1="224.0" x2="380" y2="224.0" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="229.0" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">0</text><line x1="50" y1="199.8" x2="380" y2="199.8" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="204.8" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">1</text><line x1="50" y1="175.5" x2="380" y2="175.5" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="180.5" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">2</text><line x1="50" y1="151.3" x2="380" y2="151.3" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="156.3" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">3</text><line x1="50" y1="127.0" x2="380" y2="127.0" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="132.0" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">4</text><line x1="50" y1="102.8" x2="380" y2="102.8" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="107.8" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">5</text><line x1="50" y1="78.5" x2="380" y2="78.5" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="83.5" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">6</text><line x1="50" y1="54.3" x2="380" y2="54.3" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="59.3" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">7</text><line x1="50" y1="30.0" x2="380" y2="30.0" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="42" y="35.0" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="end">8</text><line x1="50" y1="224" x2="380" y2="224" stroke="currentColor" stroke-width="1.6" /><line x1="50" y1="224" x2="50" y2="20" stroke="currentColor" stroke-width="1.6" /><line x1="80.0" y1="224" x2="80.0" y2="151.3" stroke="#2563eb" stroke-width="7" /><text x="80.0" y="246" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="middle">0</text><line x1="134.0" y1="224" x2="134.0" y2="78.5" stroke="#2563eb" stroke-width="7" /><text x="134.0" y="246" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="middle">1</text><line x1="188.0" y1="224" x2="188.0" y2="78.5" stroke="#2563eb" stroke-width="7" /><text x="188.0" y="246" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="middle">2</text><line x1="242.0" y1="224" x2="242.0" y2="30.0" stroke="#2563eb" stroke-width="7" /><text x="242.0" y="246" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="middle">3</text><line x1="296.0" y1="224" x2="296.0" y2="127.0" stroke="#2563eb" stroke-width="7" /><text x="296.0" y="246" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="middle">4</text><line x1="350.0" y1="224" x2="350.0" y2="151.3" stroke="#2563eb" stroke-width="7" /><text x="350.0" y="246" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="middle">5</text><text x="44" y="15" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="start">Effectif</text><text x="215" y="272" font-family="system-ui, sans-serif" font-weight="500" fill="currentColor" font-size="14" text-anchor="middle">Nombre de sorties au cinéma</text></svg></div>

1. Combien d'adolescents compte ce club ?
2. À l'aide des effectifs cumulés, déterminer la médiane de cette série. Interpréter le résultat par une phrase.
3. Noa affirme : « Le bâton le plus haut est celui de la valeur $3$, donc la médiane est $3$. » Expliquer l'erreur de Noa.
4. Calculer la moyenne de cette série, arrondie au dixième.
5. On regroupe les adolescents en trois catégories : « au plus $1$ sortie », « $2$ ou $3$ sorties » et « $4$ ou $5$ sorties ». Calculer l'angle du secteur correspondant à chaque catégorie dans un diagramme circulaire.`,
      solution: `**1.** $3 + 6 + 6 + 8 + 4 + 3 = 30$ : le club compte **$30$ adolescents**.

**2.** L'effectif total $30$ est pair : la médiane est la moyenne des $15^\\text{e}$ et $16^\\text{e}$ valeurs.
Effectifs cumulés : $3$ ; $9$ ; $15$ ; $23$ ; $27$ ; $30$. La valeur $2$ occupe les rangs $10$ à $15$ et la valeur $3$ les rangs $16$ à $23$.
La $15^\\text{e}$ valeur est $2$ et la $16^\\text{e}$ est $3$, donc la médiane est $\\dfrac{2 + 3}{2} = 2{,}5$.
La moitié des adolescents sont allés au cinéma au plus $2$ fois, l'autre moitié au moins $3$ fois.

**3.** Le bâton le plus haut indique la valeur la plus fréquente (ici $3$, avec un effectif de $8$). La médiane, elle, dépend du rang des valeurs dans la série rangée : elle vaut $2{,}5$ d'après la question 2.

**4.** Somme des valeurs : $0 \\times 3 + 1 \\times 6 + 2 \\times 6 + 3 \\times 8 + 4 \\times 4 + 5 \\times 3 = 0 + 6 + 12 + 24 + 16 + 15 = 73$.
Moyenne : $\\dfrac{73}{30} \\approx 2{,}4$ sorties.

**5.** Un adolescent correspond à $\\dfrac{360}{30} = 12^\\circ$.
Au plus $1$ sortie : $3 + 6 = 9$ adolescents, soit $9 \\times 12 = 108^\\circ$.
$2$ ou $3$ sorties : $6 + 8 = 14$ adolescents, soit $14 \\times 12 = 168^\\circ$.
$4$ ou $5$ sorties : $4 + 3 = 7$ adolescents, soit $7 \\times 12 = 84^\\circ$.
Vérification : $108 + 168 + 84 = 360$.`
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
      title: "Pour aller plus loin : deux pièces de monnaie",
      difficulty: 2,
      points: 5,
      statement: `**Pour aller plus loin** (expérience à deux épreuves).
On lance successivement deux pièces de monnaie équilibrées et on note le côté obtenu : Pile ($P$) ou Face ($F$).
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
      title: "Pour aller plus loin : la somme de deux dés",
      difficulty: 3,
      points: 5,
      statement: `**Pour aller plus loin** (expérience à deux épreuves).
On lance deux dés équilibrés à six faces, l'un rouge et l'autre vert, et on calcule la somme des deux nombres obtenus.
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
      title: "Pour aller plus loin : roue et urne",
      difficulty: 3,
      points: 5,
      statement: `**Pour aller plus loin** (expérience à deux épreuves).
Un jeu se déroule en deux étapes :
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
      title: "Pour aller plus loin : avec ou sans remise",
      difficulty: 4,
      points: 5,
      statement: `**Pour aller plus loin** (expérience à deux épreuves).
Une urne contient $3$ boules rouges ($R_1$, $R_2$, $R_3$) et $2$ boules noires ($N_1$, $N_2$). On tire successivement deux boules.
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
      title: "Pour aller plus loin : un jeu est-il équitable ?",
      difficulty: 4,
      points: 6,
      statement: `**Pour aller plus loin** (expérience à deux épreuves).
Paul et Zoé lancent chacun un dé équilibré à quatre faces numérotées de $1$ à $4$, puis calculent le **produit** des deux nombres obtenus. Paul gagne si le produit est pair, Zoé gagne s'il est impair.
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
1. Calculer la probabilité de chacun des événements suivants. Donner les résultats sous forme de fractions simplifiées.
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
      title: "Pour aller plus loin : le code du cadenas",
      difficulty: 2,
      points: 5,
      statement: `**Pour aller plus loin** (expérience à deux épreuves).
Le code d'un cadenas est formé de deux chiffres : le premier chiffre et le second chiffre peuvent chacun valoir $1$, $2$, $3$ ou $4$. Le propriétaire a choisi son code au hasard.
1. Représenter toutes les issues possibles dans un tableau à double entrée (en ligne : le premier chiffre ; en colonne : le second chiffre). Combien y a-t-il de codes possibles ?
2. Un voleur essaie un code au hasard. Quelle est la probabilité qu'il ouvre le cadenas du premier coup ?
3. Calculer la probabilité des événements suivants :
   a) $A$ : « les deux chiffres du code sont identiques » ;
   b) $B$ : « la somme des deux chiffres du code est égale à $5$ ».
4. On considère l'événement $C$ : « le code contient au moins un $4$ ».
   a) Décrire l'événement contraire de $C$ et calculer sa probabilité.
   b) En déduire $P(C)$.`,
      solution: `**1.**

| $1^\\text{er}$ chiffre / $2^\\text{e}$ chiffre | $1$ | $2$ | $3$ | $4$ |
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
      title: "Pour aller plus loin : le produit de deux tétraèdres",
      difficulty: 3,
      points: 5,
      statement: `**Pour aller plus loin** (expérience à deux épreuves).
On lance deux dés équilibrés en forme de tétraèdre, dont les faces sont numérotées de $1$ à $4$ : un dé rouge et un dé vert. On note le nombre lu sur chaque dé, puis on calcule le **produit** de ces deux nombres.
1. Construire un tableau à double entrée donnant tous les produits possibles (en ligne : le nombre du dé rouge ; en colonne : le nombre du dé vert). Combien y a-t-il d'issues ?
2. Calculer la probabilité que le produit soit égal à $4$.
3. a) Dans quel cas le produit est-il impair ? Calculer la probabilité que le produit soit impair.
   b) En déduire la probabilité que le produit soit pair.
4. Calculer la probabilité que le produit soit strictement supérieur à $8$.
5. Quel produit a le plus de chances d'être obtenu ? Justifier.`,
      solution: `**1.**

| Dé rouge / dé vert | $1$ | $2$ | $3$ | $4$ |
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
5. **Pour aller plus loin.** Une autre urne contient seulement $3$ boules : une rouge, notée $R$, et deux bleues, notées $B_1$ et $B_2$. On tire une boule, on note sa lettre, on la remet dans l'urne, puis on tire une seconde boule.
   a) Recopier et compléter le tableau des issues ci-dessous (en ligne : la première boule ; en colonne : la seconde). Combien y a-t-il d'issues ?

| $1^\\text{re}$ boule / $2^\\text{e}$ boule | $R$ | $B_1$ | $B_2$ |
|---|---|---|---|
| $R$ | $RR$ | | |
| $B_1$ | | | |
| $B_2$ | | | |

   b) En déduire la probabilité d'obtenir deux boules rouges, puis celle d'obtenir au moins une boule bleue.`,
      solution: `**1.** L'urne contient $3 + 9 = 12$ boules, dont $3$ rouges : $P(\\text{rouge}) = \\dfrac{3}{12} = \\dfrac{1}{4}$.

**2.** Il faut que les $3$ boules rouges représentent $\\dfrac{1}{5}$ du total, donc que le total soit $3 \\times 5 = 15$ boules. Il faut **$12$ boules bleues**. Vérification : $\\dfrac{3}{15} = \\dfrac{1}{5}$.

**3.** Les $12$ boules bleues doivent représenter $\\dfrac{3}{5}$ du total. Or $12 = 3 \\times 4$, donc le total doit être $5 \\times 4 = 20$ boules. Il y a déjà $15$ boules : il faut ajouter **$5$ boules rouges**.
Vérification : $8$ rouges et $12$ bleues, $P(\\text{bleue}) = \\dfrac{12}{20} = \\dfrac{3}{5}$.

**4.** Actuellement $P(\\text{rouge}) = \\dfrac{3}{15} = \\dfrac{1}{5}$, et $\\dfrac{1}{5} < \\dfrac{1}{4}$. Si l'on ajoute des boules bleues, le nombre de rouges reste $3$ mais le total augmente : la probabilité de tirer une rouge **diminue**. On ne peut donc pas atteindre $\\dfrac{1}{4}$ : **c'est impossible**.

**5. a)**

| $1^\\text{re}$ boule / $2^\\text{e}$ boule | $R$ | $B_1$ | $B_2$ |
|---|---|---|---|
| $R$ | $RR$ | $RB_1$ | $RB_2$ |
| $B_1$ | $B_1R$ | $B_1B_1$ | $B_1B_2$ |
| $B_2$ | $B_2R$ | $B_2B_1$ | $B_2B_2$ |

Il y a $3 \\times 3 = 9$ issues, équiprobables car les boules sont indiscernables au toucher et la première est remise.

**b)** Une seule issue donne deux boules rouges ($RR$) : $P(\\text{deux rouges}) = \\dfrac{1}{9}$.
« Au moins une boule bleue » est l'événement contraire de « deux boules rouges » : $P = 1 - \\dfrac{1}{9} = \\dfrac{8}{9}$ (on retrouve les $8$ autres cases du tableau).`
    },
    {
      id: "4D2-ds-13",
      title: "Le sachet de bonbons",
      difficulty: 1,
      points: 4,
      statement: `Un sachet contient $20$ bonbons de même forme : $6$ à la fraise, $4$ au citron, $5$ à la menthe et $5$ à l'orange. Sans regarder, Inès prend un bonbon au hasard.

On considère les événements :
- $F$ : « le bonbon est à la fraise » ;
- $M$ : « le bonbon est à la menthe » ;
- $A$ : « le bonbon est acidulé », c'est-à-dire au citron ou à l'orange.

1. Calculer $P(F)$ et $P(M)$.
2. Décrire par une phrase l'événement contraire de $M$, puis calculer sa probabilité.
3. Calculer $P(A)$.
4. Les événements $F$ et $A$ peuvent-ils se réaliser en même temps ? Comment les qualifie-t-on ?
5. Calculer la probabilité de l'événement « $F$ ou $A$ ».`,
      solution: `Les $20$ bonbons ont la même chance d'être pris : chaque probabilité se calcule par $\\dfrac{\\text{nombre de bonbons favorables}}{20}$.

**1.** $P(F) = \\dfrac{6}{20} = \\dfrac{3}{10} = 0{,}3$ et $P(M) = \\dfrac{5}{20} = \\dfrac{1}{4} = 0{,}25$.

**2.** L'événement contraire de $M$, noté « non $M$ », est : « le bonbon n'est pas à la menthe ».
$P(\\text{non } M) = 1 - P(M) = 1 - 0{,}25 = 0{,}75$. (Vérification : $6 + 4 + 5 = 15$ bonbons ne sont pas à la menthe, et $\\dfrac{15}{20} = 0{,}75$.)

**3.** Il y a $4 + 5 = 9$ bonbons acidulés : $P(A) = \\dfrac{9}{20} = 0{,}45$.

**4.** Un bonbon à la fraise n'est ni au citron ni à l'orange : $F$ et $A$ ne peuvent pas se réaliser en même temps. On dit que ce sont des événements **incompatibles**.

**5.** « $F$ ou $A$ » est réalisé par les $6 + 9 = 15$ bonbons à la fraise, au citron ou à l'orange : $P = \\dfrac{15}{20} = 0{,}75$.
On remarque que $P(F) + P(A) = 0{,}3 + 0{,}45 = 0{,}75$, car $F$ et $A$ sont incompatibles. On remarque aussi que « $F$ ou $A$ » est exactement l'événement « non $M$ ».`
    },
    {
      id: "4D2-ds-14",
      title: "Le dé est-il truqué ?",
      difficulty: 2,
      points: 5,
      statement: `Malo lance $50$ fois un dé à six faces et note les résultats :

| Face | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| Effectif | $7$ | $9$ | $8$ | $6$ | $8$ | $12$ |

1. Calculer la fréquence d'apparition de la face $6$.
2. Si le dé est équilibré, quelle est la probabilité d'obtenir $6$ ? Donner une valeur approchée au centième.
3. Malo affirme : « Mon dé est truqué, il donne trop souvent $6$. » Peut-on en être sûr après $50$ lancers ? Expliquer.
4. Malo programme un ordinateur qui simule $6\\,000$ lancers de ce dé ; la face $6$ apparaît $990$ fois. Calculer la fréquence obtenue. Qu'en pense-t-on ?
5. Avec le même dé, calculer la fréquence de l'événement « obtenir un nombre pair » sur les $50$ lancers de Malo, et la comparer à la probabilité de cet événement pour un dé équilibré.`,
      solution: `**1.** La face $6$ est apparue $12$ fois sur $50$ lancers : fréquence $\\dfrac{12}{50} = 0{,}24$.

**2.** Pour un dé équilibré, les six faces ont la même probabilité : $P(6) = \\dfrac{1}{6} \\approx 0{,}17$.

**3.** Non. La fréquence $0{,}24$ est supérieure à $0{,}17$, mais sur un petit nombre de lancers, les fréquences peuvent beaucoup varier d'une série à l'autre, même avec un dé équilibré. $50$ lancers ne suffisent pas pour conclure.

**4.** Fréquence : $\\dfrac{990}{6\\,000} = 0{,}165$, très proche de $\\dfrac{1}{6} \\approx 0{,}167$. Lorsque le nombre de lancers est grand, la fréquence se rapproche de la probabilité : ce résultat ne donne aucune raison de penser que le dé est truqué.

**5.** Faces paires : $9 + 6 + 12 = 27$ lancers, soit une fréquence de $\\dfrac{27}{50} = 0{,}54$.
Pour un dé équilibré, il y a $3$ faces paires sur $6$ : $P(\\text{pair}) = \\dfrac{3}{6} = 0{,}5$. La fréquence observée est proche de cette probabilité.`
    },
    {
      id: "4D2-ds-15",
      title: "Pour aller plus loin : le menu tiré au sort",
      difficulty: 3,
      points: 5,
      statement: `**Pour aller plus loin** (expérience à deux épreuves).
À la cantine, le jour de la « surprise », chaque élève reçoit un menu tiré au hasard :
- une entrée choisie au hasard parmi : salade ($S$), soupe ($O$) ;
- puis un plat choisi au hasard parmi : poisson ($P$), poulet ($V$), lasagnes aux légumes ($L$).

Chaque choix est équiprobable et les deux choix sont indépendants.

1. Construire un arbre représentant tous les menus possibles. Combien y a-t-il de menus ?
2. Quelle est la probabilité d'obtenir le menu « soupe et poisson » ?
3. Les deux entrées et les lasagnes sont végétariennes. Quelle est la probabilité d'obtenir un menu végétarien ? En déduire la probabilité d'obtenir un menu contenant de la viande ou du poisson.
4. On ajoute un dessert choisi au hasard parmi un fruit et un gâteau.
   a) Combien y a-t-il maintenant de menus ?
   b) Quelle est la probabilité d'obtenir le menu « salade, poulet, gâteau » ?
   c) Quelle est la probabilité d'obtenir un menu contenant de la soupe et un gâteau ?`,
      solution: `**1.** Arbre : de la racine partent deux branches ($S$ et $O$) ; de chacune partent trois branches ($P$, $V$, $L$).
Menus : $SP$, $SV$, $SL$, $OP$, $OV$, $OL$. Il y a $2 \\times 3 = 6$ menus, tous équiprobables.

**2.** Un seul menu sur $6$ : $P(OP) = \\dfrac{1}{6}$.

**3.** Un menu est végétarien lorsque le plat est $L$ (les deux entrées sont végétariennes) : $SL$ et $OL$, soit $2$ menus. $P(\\text{végétarien}) = \\dfrac{2}{6} = \\dfrac{1}{3}$.
« Contenir de la viande ou du poisson » est l'événement contraire : $P = 1 - \\dfrac{1}{3} = \\dfrac{2}{3}$.

**4. a)** Chacun des $6$ menus précédents peut être complété par $2$ desserts : $6 \\times 2 = 12$ menus équiprobables.

**b)** Un seul menu sur $12$ : $P = \\dfrac{1}{12}$.

**c)** Menus avec soupe et gâteau : la soupe, l'un des $3$ plats, le gâteau, soit $3$ menus. $P = \\dfrac{3}{12} = \\dfrac{1}{4}$.`
    },
    {
      id: "4D2-ds-16",
      title: "Un dé truqué",
      difficulty: 4,
      points: 6,
      statement: `Un dé à six faces est truqué : les faces $1$, $2$, $3$, $4$ et $5$ ont toutes la même probabilité $p$ de sortir, mais la face $6$ a trois fois plus de chances de sortir que chacune des autres.

1. Exprimer la probabilité d'obtenir $6$ en fonction de $p$.
2. On rappelle que la somme des probabilités de toutes les issues vaut $1$. Écrire une équation vérifiée par $p$, puis la résoudre.
3. En déduire la probabilité d'obtenir $6$.
4. Calculer la probabilité des événements :
   a) $A$ : « obtenir un nombre pair » ;
   b) $B$ : « obtenir un nombre supérieur ou égal à $5$ » ;
   c) « non $A$ ».
5. Paul et Zoé jouent avec ce dé : Paul gagne s'il sort $6$, Zoé gagne s'il sort un nombre impair ; sinon, personne ne gagne. Le jeu est-il équitable ? Le serait-il avec un dé équilibré ?`,
      solution: `**1.** La face $6$ a trois fois plus de chances que chacune des autres : $P(6) = 3p$.

**2.** $P(1) + P(2) + P(3) + P(4) + P(5) + P(6) = 1$, soit $p + p + p + p + p + 3p = 1$, c'est-à-dire $8p = 1$, donc $p = \\dfrac{1}{8}$.

**3.** $P(6) = 3 \\times \\dfrac{1}{8} = \\dfrac{3}{8}$.

**4. a)** $P(A) = P(2) + P(4) + P(6) = \\dfrac{1}{8} + \\dfrac{1}{8} + \\dfrac{3}{8} = \\dfrac{5}{8}$.

**b)** $P(B) = P(5) + P(6) = \\dfrac{1}{8} + \\dfrac{3}{8} = \\dfrac{4}{8} = \\dfrac{1}{2}$.

**c)** $P(\\text{non } A) = 1 - \\dfrac{5}{8} = \\dfrac{3}{8}$. (Vérification : $P(1) + P(3) + P(5) = \\dfrac{3}{8}$.)

**5.** Paul gagne avec probabilité $P(6) = \\dfrac{3}{8}$ ; Zoé gagne si le résultat est impair, avec probabilité $P(\\text{non } A) = \\dfrac{3}{8}$. Les deux joueurs ont la même probabilité de gagner : avec ce dé truqué, **le jeu est équitable**.
Avec un dé équilibré : Paul gagnerait avec probabilité $\\dfrac{1}{6}$ et Zoé avec probabilité $\\dfrac{3}{6} = \\dfrac{1}{2}$. Le jeu ne serait pas équitable (il serait favorable à Zoé).`
    },
    {
      id: "4D2-ds-17",
      title: "La cible de fléchettes",
      difficulty: 3,
      points: 5,
      statement: `Une cible carrée de côté $40$ cm est formée de trois zones. Au centre se trouve un carré rouge de côté $10$ cm. Ce carré rouge est placé à l'intérieur d'un carré de côté $30$ cm : la partie de ce carré qui n'est pas rouge est la zone bleue. Le reste de la cible est la zone blanche.
Une fléchette atteint toujours la cible, en un point pris au hasard : la probabilité d'atteindre une zone est égale au quotient de son aire par l'aire de la cible.
1. Calculer l'aire de la cible, puis l'aire de chacune des trois zones.
2. Calculer la probabilité d'atteindre chaque zone (fractions simplifiées). Vérifier que la somme de ces trois probabilités est égale à $1$.
3. Les issues « rouge », « bleu » et « blanc » sont-elles équiprobables ? Justifier.
4. On note $R$ l'événement « la fléchette atteint la zone rouge ». Décrire l'événement contraire de $R$ et calculer sa probabilité.
5. On remplace le carré rouge par un carré rouge de côté $c$ centimètres, en gardant le carré de côté $30$ cm et la cible. Quelle valeur faut-il donner à $c$ pour que la probabilité d'atteindre la zone rouge soit égale à $\\dfrac{1}{4}$ ?`,
      solution: `**1.** Aire de la cible : $40^2 = 1\\,600$ cm².
Zone rouge : $10^2 = 100$ cm².
Zone bleue : $30^2 - 10^2 = 900 - 100 = 800$ cm².
Zone blanche : $40^2 - 30^2 = 1\\,600 - 900 = 700$ cm².

**2.** $P(\\text{rouge}) = \\dfrac{100}{1\\,600} = \\dfrac{1}{16}$, $P(\\text{bleu}) = \\dfrac{800}{1\\,600} = \\dfrac{1}{2}$ et $P(\\text{blanc}) = \\dfrac{700}{1\\,600} = \\dfrac{7}{16}$.
Vérification : $\\dfrac{1}{16} + \\dfrac{8}{16} + \\dfrac{7}{16} = \\dfrac{16}{16} = 1$.

**3.** Non : les trois probabilités sont différentes, car les zones n'ont pas la même aire. Les issues ne sont pas équiprobables.

**4.** L'événement contraire de $R$ est « la fléchette n'atteint pas la zone rouge », c'est-à-dire « elle atteint la zone bleue ou la zone blanche ». $P(\\text{non } R) = 1 - \\dfrac{1}{16} = \\dfrac{15}{16}$.

**5.** On veut $\\dfrac{c^2}{1\\,600} = \\dfrac{1}{4}$, donc $c^2 = 400$. Comme $c$ est une longueur, $c = 20$ cm (et $20 < 30$ : le carré rouge tient bien dans le carré de côté $30$ cm).`
    },
    {
      id: "4D2-ds-18",
      title: "Les osselets",
      difficulty: 3,
      points: 5,
      statement: `Un osselet est un petit os qui peut retomber sur quatre faces de formes différentes, notées $A$, $B$, $C$ et $D$. Nina lance un osselet $1\\,000$ fois et note les résultats :

| Face | $A$ | $B$ | $C$ | $D$ |
|---|---|---|---|---|
| Effectif | $380$ | $420$ | $95$ | $105$ |

1. Calculer la fréquence d'apparition de chaque face, en écriture décimale. Les quatre faces semblent-elles équiprobables ? Justifier.

Dans les questions 2, 3 et 5, on prend ces fréquences comme estimations des probabilités.

2. Estimer la probabilité de l'événement $E$ : « l'osselet retombe sur la face $A$ ou sur la face $B$ ».
3. Décrire l'événement contraire de « l'osselet retombe sur la face $D$ », puis estimer sa probabilité.
4. Sur ses $50$ premiers lancers, Nina avait obtenu $14$ fois la face $B$. Calculer la fréquence correspondante. Laquelle des deux fréquences de la face $B$ donne la meilleure estimation de sa probabilité ? Pourquoi ?
5. Environ combien de fois peut-on s'attendre à obtenir la face $B$ en lançant l'osselet $5\\,000$ fois ?`,
      solution: `**1.** On divise chaque effectif par $1\\,000$ : $f_A = 0{,}38$ ; $f_B = 0{,}42$ ; $f_C = 0{,}095$ ; $f_D = 0{,}105$.
Ces fréquences, obtenues sur un grand nombre de lancers, sont très différentes (les faces $A$ et $B$ sortent environ quatre fois plus souvent que les faces $C$ et $D$) : les faces ne semblent pas équiprobables.

**2.** $P(E) \\approx 0{,}38 + 0{,}42 = 0{,}8$.

**3.** L'événement contraire est « l'osselet ne retombe pas sur la face $D$ », c'est-à-dire « il retombe sur $A$, $B$ ou $C$ ». Sa probabilité est estimée à $1 - 0{,}105 = 0{,}895$.

**4.** Fréquence sur $50$ lancers : $\\dfrac{14}{50} = 0{,}28$. La meilleure estimation est celle obtenue sur $1\\,000$ lancers, soit $0{,}42$ : plus le nombre de lancers est grand, plus la fréquence se rapproche de la probabilité, alors que sur peu de lancers les fréquences varient beaucoup.

**5.** $5\\,000 \\times 0{,}42 = 2\\,100$ : on peut s'attendre à obtenir la face $B$ environ $2\\,100$ fois.`
    },
    {
      id: "4D2-ds-19",
      title: "La roue de la kermesse",
      difficulty: 3,
      points: 5,
      statement: `À la kermesse, une roue est partagée en quatre secteurs dont les angles au centre sont : rouge $120^\\circ$, bleu $90^\\circ$, vert $60^\\circ$ et jaune $90^\\circ$. On fait tourner la roue, qui s'arrête au hasard : la probabilité d'obtenir une couleur est égale au quotient de l'angle de son secteur par $360^\\circ$.
1. Vérifier que les quatre secteurs couvrent toute la roue. Les quatre couleurs sont-elles équiprobables ? Justifier.
2. Calculer la probabilité d'obtenir chaque couleur (fractions simplifiées).
3. Julie gagne si la roue s'arrête sur le rouge ou sur le vert. On note $G$ cet événement. Calculer $P(G)$.
4. Décrire l'événement contraire de $G$, calculer sa probabilité et vérifier le résultat en additionnant les probabilités des couleurs concernées.
5. L'organisateur agrandit le secteur bleu en prenant uniquement sur le secteur jaune, de sorte que la probabilité d'obtenir bleu soit égale à $\\dfrac{1}{3}$. Quel est le nouvel angle du secteur bleu ? Quelle est alors la probabilité d'obtenir jaune ?`,
      solution: `**1.** $120 + 90 + 60 + 90 = 360$ : les quatre secteurs font bien un tour complet. Les couleurs ne sont pas équiprobables, car les secteurs n'ont pas tous le même angle (par exemple $120^\\circ$ pour le rouge et $60^\\circ$ pour le vert).

**2.** $P(\\text{rouge}) = \\dfrac{120}{360} = \\dfrac{1}{3}$ ; $P(\\text{bleu}) = \\dfrac{90}{360} = \\dfrac{1}{4}$ ; $P(\\text{vert}) = \\dfrac{60}{360} = \\dfrac{1}{6}$ ; $P(\\text{jaune}) = \\dfrac{90}{360} = \\dfrac{1}{4}$.

**3.** $P(G) = \\dfrac{1}{3} + \\dfrac{1}{6} = \\dfrac{2}{6} + \\dfrac{1}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}$.

**4.** L'événement contraire de $G$ est « la roue ne s'arrête ni sur le rouge ni sur le vert », c'est-à-dire « elle s'arrête sur le bleu ou sur le jaune ». $P(\\text{non } G) = 1 - \\dfrac{1}{2} = \\dfrac{1}{2}$.
Vérification : $\\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{1}{2}$.

**5.** Il faut un angle de $\\dfrac{360^\\circ}{3} = 120^\\circ$ pour le bleu, soit $30^\\circ$ de plus. Ces $30^\\circ$ sont pris sur le jaune, dont l'angle devient $90^\\circ - 30^\\circ = 60^\\circ$. Alors $P(\\text{jaune}) = \\dfrac{60}{360} = \\dfrac{1}{6}$.`
    },
    {
      id: "4D2-ds-20",
      title: "La cible à trois zones",
      difficulty: 4,
      points: 6,
      statement: `Une cible est formée de trois disques de même centre, de rayons $10$ cm, $20$ cm et $30$ cm. Le disque central rapporte $50$ points, l'anneau du milieu $20$ points et l'anneau extérieur $10$ points.
Une fléchette atteint toujours la cible, en un point pris au hasard : la probabilité d'atteindre une zone est égale au quotient de son aire par l'aire de la cible.
1. Exprimer en fonction de $\\pi$ l'aire de la cible, puis l'aire de chacune des trois zones.
2. Calculer la probabilité d'atteindre chaque zone (fractions simplifiées). Vérifier que la somme de ces trois probabilités est égale à $1$.
3. On note $E$ l'événement « marquer au moins $20$ points ». Calculer $P(E)$.
4. Décrire l'événement contraire de $E$ et calculer sa probabilité.
5. Un joueur lance $450$ fléchettes. Environ combien peut-on s'attendre à en voir dans le disque central ?
6. On veut modifier la cible sans changer son rayon de $30$ cm. Quel rayon faut-il donner au disque central pour que la probabilité de l'atteindre soit égale à $\\dfrac{1}{4}$ ?`,
      solution: `**1.** Aire de la cible : $\\pi \\times 30^2 = 900\\pi$ cm².
Disque central : $\\pi \\times 10^2 = 100\\pi$ cm².
Anneau du milieu : $\\pi \\times 20^2 - \\pi \\times 10^2 = 400\\pi - 100\\pi = 300\\pi$ cm².
Anneau extérieur : $900\\pi - 400\\pi = 500\\pi$ cm².

**2.** Le nombre $\\pi$ se simplifie dans chaque quotient :
$P(\\text{centre}) = \\dfrac{100\\pi}{900\\pi} = \\dfrac{1}{9}$ ; $P(\\text{milieu}) = \\dfrac{300\\pi}{900\\pi} = \\dfrac{1}{3}$ ; $P(\\text{extérieur}) = \\dfrac{500\\pi}{900\\pi} = \\dfrac{5}{9}$.
Vérification : $\\dfrac{1}{9} + \\dfrac{3}{9} + \\dfrac{5}{9} = \\dfrac{9}{9} = 1$.

**3.** Marquer au moins $20$ points, c'est atteindre le disque central ou l'anneau du milieu : $P(E) = \\dfrac{1}{9} + \\dfrac{3}{9} = \\dfrac{4}{9}$.

**4.** L'événement contraire de $E$ est « marquer moins de $20$ points », c'est-à-dire « atteindre l'anneau extérieur » et marquer $10$ points. $P(\\text{non } E) = 1 - \\dfrac{4}{9} = \\dfrac{5}{9}$ : on retrouve la probabilité de l'anneau extérieur.

**5.** $450 \\times \\dfrac{1}{9} = 50$ : on peut s'attendre à environ $50$ fléchettes dans le disque central.

**6.** Soit $r$ le rayon cherché, en centimètres. On veut $\\dfrac{\\pi r^2}{900\\pi} = \\dfrac{1}{4}$, soit $\\dfrac{r^2}{900} = \\dfrac{1}{4}$, donc $r^2 = 225$. Comme $r$ est une longueur, $r = 15$ cm.`
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
      title: "Pour aller plus loin : coefficients multiplicateurs",
      difficulty: 1,
      points: 4,
      statement: `**Pour aller plus loin** (notion étudiée en 3e).
1. Un article coûte $80$ €. Son prix augmente de $15\\,\\%$. Par quel nombre multiplie-t-on le prix ? Calculer le nouveau prix.
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
      statement: `**Pour aller plus loin** (notion étudiée en 3e).
1. Un manteau coûte $120$ €. Il subit une première baisse de $20\\,\\%$, puis une seconde baisse de $10\\,\\%$ sur le nouveau prix.
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
      statement: `**Pour aller plus loin** (notion étudiée en 3e).
1. Après une augmentation de $8\\,\\%$, un jeu coûte $54$ €. Quel était son prix avant l'augmentation ?
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
      statement: `Un cycliste fait l'aller-retour entre deux villages distants de $60$ km. À l'aller, sa vitesse moyenne est de $30$ km/h ; au retour, fatigué, elle n'est que de $20$ km/h.
1. Calculer la durée de l'aller, puis celle du retour.
2. Calculer la vitesse moyenne sur l'ensemble du trajet aller-retour.
3. Son ami affirme que la vitesse moyenne est $\\dfrac{30 + 20}{2} = 25$ km/h. Expliquer pourquoi c'est faux.
4. Convertir la vitesse moyenne trouvée à la question 2 en m/s, arrondie au dixième.
5. À quelle vitesse moyenne aurait-il dû rouler au retour pour réaliser l'aller-retour en $4$ h ?`,
      solution: `**1.** Aller : $t = \\dfrac{60}{30} = 2$ h. Retour : $t = \\dfrac{60}{20} = 3$ h.

**2.** Distance totale : $120$ km ; durée totale : $5$ h. Vitesse moyenne : $\\dfrac{120}{5} = 24$ km/h.

**3.** Le cycliste roule plus longtemps à $20$ km/h ($3$ h) qu'à $30$ km/h ($2$ h) : les deux vitesses ne « comptent » pas autant. La vitesse moyenne est le quotient de la distance totale par la durée totale, et non la moyenne des vitesses.

**4.** $24$ km/h $= \\dfrac{24\\,000 \\text{ m}}{3\\,600 \\text{ s}} \\approx 6{,}7$ m/s.

**5.** L'aller dure $2$ h ; il resterait $4 - 2 = 2$ h pour le retour de $60$ km : il aurait fallu rouler à $\\dfrac{60}{2} = 30$ km/h.`
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
      statement: `**Pour aller plus loin** (notion étudiée en 3e).
Le prix TTC (toutes taxes comprises) d'un article s'obtient en ajoutant au prix HT (hors taxes) une taxe, la TVA, égale à $20$ % du prix HT.
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
    },
    {
      id: "4P1-ds-13",
      title: "Proportionnel ou pas ?",
      difficulty: 1,
      points: 4,
      statement: `On étudie trois situations.

**Situation A** : au marché, les pommes coûtent $2{,}40$ € le kilogramme.

| Masse (kg) | $1{,}5$ | $2$ | $3{,}5$ |
|---|---|---|---|
| Prix (€) | $3{,}60$ | $4{,}80$ | $8{,}40$ |

**Situation B** : une salle de sport fait payer une inscription de $20$ € puis $5$ € par séance.

| Nombre de séances | $1$ | $2$ | $4$ |
|---|---|---|---|
| Prix total (€) | $25$ | $30$ | $40$ |

**Situation C** : au CDI, une photocopie coûte $0{,}15$ €.

| Nombre de photocopies | $10$ | $25$ | $40$ |
|---|---|---|---|
| Prix (€) | $1{,}50$ | $3{,}75$ | $6$ |

1. Pour chaque situation, dire si le tableau est un tableau de proportionnalité. Justifier.
2. Dans la situation A, calculer le prix de $2{,}5$ kg de pommes.
3. Dans la situation A, quelle masse de pommes peut-on acheter avec $10{,}80$ € ?
4. Dans la situation B, Hugo dit : « $8$ séances coûtent deux fois plus cher que $4$ séances. » A-t-il raison ?`,
      solution: `**1.** On calcule, pour chaque colonne, le quotient de la deuxième ligne par la première.
- Situation A : $\\dfrac{3{,}60}{1{,}5} = 2{,}4$ ; $\\dfrac{4{,}80}{2} = 2{,}4$ ; $\\dfrac{8{,}40}{3{,}5} = 2{,}4$. Les quotients sont égaux : c'est un tableau de proportionnalité, de coefficient $2{,}4$ (le prix au kilogramme).
- Situation B : $\\dfrac{25}{1} = 25$ et $\\dfrac{30}{2} = 15$. Les quotients sont différents : ce n'est pas un tableau de proportionnalité (à cause des $20$ € d'inscription).
- Situation C : $\\dfrac{1{,}50}{10} = \\dfrac{3{,}75}{25} = \\dfrac{6}{40} = 0{,}15$. C'est un tableau de proportionnalité, de coefficient $0{,}15$.

**2.** $2{,}5 \\times 2{,}40 = 6$ : $2{,}5$ kg de pommes coûtent $6$ €.

**3.** $10{,}80 \\div 2{,}40 = 4{,}5$ : on peut acheter $4{,}5$ kg de pommes.

**4.** $8$ séances coûtent $20 + 8 \\times 5 = 60$ € et $4$ séances coûtent $40$ €. Or $2 \\times 40 = 80 \\neq 60$ : Hugo a tort. Le prix total n'est pas proportionnel au nombre de séances.`
    },
    {
      id: "4P1-ds-14",
      title: "Remplir la cuve de récupération",
      difficulty: 2,
      points: 5,
      statement: `Un jardinier remplit une cuve de $600$ litres avec un robinet dont le débit est de $15$ litres par minute ($15$ L/min). Le volume d'eau versé est proportionnel à la durée.

1. Quel volume d'eau le robinet verse-t-il en $8$ minutes ?
2. Combien de temps faut-il pour remplir entièrement la cuve vide ?
3. Quel volume d'eau le robinet verse-t-il en une heure ? Exprimer ce débit en mètres cubes par heure (m³/h). On rappelle que $1$ m³ $= 1\\,000$ L.
4. On ajoute un second robinet de débit $25$ L/min. Les deux robinets coulent ensemble dans la cuve vide. Combien de temps faut-il maintenant pour la remplir ?`,
      solution: `**1.** $15 \\times 8 = 120$ : en $8$ minutes, le robinet verse $120$ L.

**2.** $600 \\div 15 = 40$ : il faut $40$ minutes pour remplir la cuve.

**3.** Une heure dure $60$ minutes : $15 \\times 60 = 900$ L. Or $900$ L $= 0{,}9$ m³, donc le débit est de $0{,}9$ m³/h.

**4.** Ensemble, les deux robinets versent $15 + 25 = 40$ L par minute. $600 \\div 40 = 15$ : il faut $15$ minutes.
Remarque : le temps n'est pas « divisé par deux » simplement parce qu'il y a deux robinets ; il faut additionner les débits.`
    },
    {
      id: "4P1-ds-15",
      title: "Consommation de carburant",
      difficulty: 3,
      points: 5,
      statement: `La voiture de la famille Martin consomme en moyenne $6{,}5$ litres d'essence pour $100$ km. On suppose que la consommation est proportionnelle à la distance parcourue. Le litre d'essence coûte $1{,}75$ €.

1. Quelle quantité d'essence la voiture consomme-t-elle pour un trajet de $340$ km ? Quel est le coût de ce trajet, arrondi au centime ?
2. Le réservoir contient $45$ L. Quelle distance peut-on parcourir avec un plein ? Arrondir au kilomètre.
3. La famille hésite à acheter une voiture B qui consomme $5{,}2$ L pour $100$ km.
   a) La famille parcourt $15\\,000$ km par an. Combien de litres d'essence économiserait-elle chaque année avec la voiture B ? Quelle économie cela représente-t-il en euros ?
   b) De quel pourcentage la consommation de la voiture B est-elle inférieure à celle de la voiture actuelle ?`,
      solution: `**1.** Pour $340$ km : $\\dfrac{6{,}5 \\times 340}{100} = 22{,}1$ L.
Coût : $22{,}1 \\times 1{,}75 = 38{,}675$, soit environ $38{,}68$ €.

**2.** Distance parcourue avec $45$ L : $\\dfrac{45 \\times 100}{6{,}5} \\approx 692{,}3$, soit environ $692$ km.

**3. a)** Sur $100$ km, la voiture B consomme $6{,}5 - 5{,}2 = 1{,}3$ L de moins.
Sur $15\\,000$ km, soit $150$ fois $100$ km : $1{,}3 \\times 150 = 195$ L économisés.
Économie : $195 \\times 1{,}75 = 341{,}25$ €.

**b)** $\\dfrac{1{,}3}{6{,}5} = 0{,}2 = \\dfrac{20}{100}$ : la voiture B consomme $20\\,\\%$ de moins.
(Vérification : $6{,}5 \\times 0{,}8 = 5{,}2$.)`
    },
    {
      id: "4P1-ds-16",
      title: "Plan d'appartement et aires",
      difficulty: 4,
      points: 6,
      statement: `Sur le plan d'un appartement à l'échelle $\\dfrac{1}{200}$, la chambre est représentée par un rectangle de $2{,}5$ cm sur $3{,}2$ cm.

1. Que signifie l'échelle $\\dfrac{1}{200}$ ?
2. Calculer les dimensions réelles de la chambre, en mètres, puis son aire réelle en m².
3. Calculer l'aire du rectangle sur le plan, en cm².
4. Nora affirme : « Puisque l'échelle est $\\dfrac{1}{200}$, l'aire réelle est $200$ fois plus grande que l'aire sur le plan. » En utilisant les questions 2 et 3, montrer qu'elle se trompe. Par quel nombre faut-il en réalité multiplier l'aire sur le plan ? Expliquer ce résultat.
5. Le salon a une aire réelle de $18$ m². Quelle est son aire sur le plan, en cm² ?`,
      solution: `**1.** Les longueurs réelles sont $200$ fois plus grandes que sur le plan : $1$ cm sur le plan représente $200$ cm, soit $2$ m, en réalité. Les longueurs réelles sont proportionnelles aux longueurs du plan.

**2.** $2{,}5 \\times 200 = 500$ cm $= 5$ m et $3{,}2 \\times 200 = 640$ cm $= 6{,}4$ m.
Aire réelle : $5 \\times 6{,}4 = 32$ m².

**3.** Aire sur le plan : $2{,}5 \\times 3{,}2 = 8$ cm².

**4.** $32$ m² $= 320\\,000$ cm² (car $1$ m² $= 10\\,000$ cm²). Or $8 \\times 200 = 1\\,600$ cm², ce qui est bien différent de $320\\,000$ cm² : Nora se trompe.
En fait, $320\\,000 \\div 8 = 40\\,000$. Chacune des deux dimensions est multipliée par $200$, donc l'aire est multipliée par $200 \\times 200 = 40\\,000$.

**5.** $18$ m² $= 180\\,000$ cm². Aire sur le plan : $180\\,000 \\div 40\\,000 = 4{,}5$ cm².`
    },
    {
      id: "4P1-ds-17",
      title: "Reconnaître la proportionnalité sur un graphique",
      difficulty: 1,
      points: 4,
      statement: `On remplit trois réservoirs. Le graphique donne le volume d'eau (en L) contenu dans chaque réservoir en fonction de la durée de remplissage (en min) : les lignes (A), (B) et (C).

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 260" width="400" height="260" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="50" y1="220" x2="50" y2="28" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="90" y1="220" x2="90" y2="28" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="130" y1="220" x2="130" y2="28" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="170" y1="220" x2="170" y2="28" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="210" y1="220" x2="210" y2="28" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="250" y1="220" x2="250" y2="28" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="290" y1="220" x2="290" y2="28" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="330" y1="220" x2="330" y2="28" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="370" y1="220" x2="370" y2="28" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="50" y1="220" x2="370" y2="220" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="50" y1="196" x2="370" y2="196" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="50" y1="172" x2="370" y2="172" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="50" y1="148" x2="370" y2="148" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="50" y1="124" x2="370" y2="124" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="50" y1="100" x2="370" y2="100" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="50" y1="76" x2="370" y2="76" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="50" y1="52" x2="370" y2="52" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="50" y1="28" x2="370" y2="28" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="50" y1="220" x2="384" y2="220" stroke="currentColor" stroke-width="1.6"/><line x1="50" y1="220" x2="50" y2="14" stroke="currentColor" stroke-width="1.6"/><text x="50" y="237" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="middle">0</text><text x="90" y="237" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="middle">1</text><text x="130" y="237" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="middle">2</text><text x="170" y="237" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="middle">3</text><text x="210" y="237" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="middle">4</text><text x="250" y="237" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="middle">5</text><text x="290" y="237" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="middle">6</text><text x="330" y="237" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="middle">7</text><text x="370" y="237" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="middle">8</text><text x="42" y="200" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="end">2</text><text x="42" y="176" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="end">4</text><text x="42" y="152" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="end">6</text><text x="42" y="128" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="end">8</text><text x="42" y="104" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="end">10</text><text x="42" y="80" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="end">12</text><text x="42" y="56" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="end">14</text><text x="42" y="32" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="end">16</text><text x="374" y="256" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="end">Durée (en min)</text><text x="56" y="14" font-family="system-ui, sans-serif" font-size="13" font-weight="400" fill="currentColor" text-anchor="start">Volume (en L)</text><polyline points="50,220 370,28" fill="none" stroke="currentColor" stroke-width="2.4"/><polyline points="50,172 370,76" fill="none" stroke="currentColor" stroke-width="2.4" stroke-dasharray="9 5"/><polyline points="50,220 90,217 130,208 170,193 210,172 250,145 290,112 330,73 370,28" fill="none" stroke="currentColor" stroke-width="2.4" stroke-dasharray="2 5"/><text x="308" y="50" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">(A)</text><text x="380" y="72" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">(B)</text><text x="304" y="132" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">(C)</text></svg></div>

1. Pour chacune des lignes (A), (B) et (C), dire si le volume est proportionnel à la durée. Justifier.
2. Pour le réservoir où il y a proportionnalité, lire le volume au bout de $3$ min, puis en déduire le coefficient de proportionnalité.
3. Calculer le volume de ce réservoir au bout de $11$ min.
4. Pour le réservoir (B), lire les volumes au bout de $2$ min et de $4$ min. Le volume double-t-il quand la durée double ?`,
      solution: `**1.** (A) est une droite qui passe par l'origine du repère : le volume est **proportionnel** à la durée.
(B) est une droite, mais elle ne passe pas par l'origine (le réservoir contient déjà $4$ L au départ) : **il n'y a pas proportionnalité**.
(C) passe par l'origine, mais ce n'est pas une droite : **il n'y a pas proportionnalité**.

**2.** Sur (A), au bout de $3$ min, on lit $6$ L. Le coefficient de proportionnalité est $6 \\div 3 = 2$ (le débit est de $2$ L/min).

**3.** $11 \\times 2 = 22$ : au bout de $11$ min, le réservoir contient $22$ L.

**4.** Sur (B), on lit $6$ L au bout de $2$ min et $8$ L au bout de $4$ min. Or $2 \\times 6 = 12$, et $8 \\neq 12$ : le volume ne double pas quand la durée double, ce qui confirme l'absence de proportionnalité.`
    },
    {
      id: "4P1-ds-18",
      title: "Grandeurs produits : énergie et trafic",
      difficulty: 2,
      points: 5,
      statement: `L'énergie consommée (en kWh) est le produit de la puissance (en kW) par la durée (en h). Le trafic (en passagers-kilomètres) est le produit du nombre de passagers par la distance parcourue (en km).

1. Un radiateur de puissance $1{,}5$ kW fonctionne $4$ h par jour.
   a) Quelle énergie consomme-t-il en une journée ?
   b) Le kilowattheure coûte $0{,}25$ €. Calculer le coût d'une journée de chauffage, puis celui de $30$ jours.
2. Une lampe de puissance $60$ W reste allumée pendant $5$ h. Quelle énergie consomme-t-elle, en kWh ?
3. Un autocar transporte $45$ passagers sur un trajet de $80$ km. Calculer le trafic correspondant.
4. Sur une ligne de $60$ km, un autocar a assuré un trafic de $2\\,400$ passagers-kilomètres. Combien de passagers transportait-il ?`,
      solution: `**1. a)** $1{,}5 \\times 4 = 6$ : le radiateur consomme $6$ kWh par jour.
**b)** Coût d'une journée : $6 \\times 0{,}25 = 1{,}50$ €. Pour $30$ jours : $30 \\times 1{,}50 = 45$ €.

**2.** $60$ W $= 0{,}06$ kW. Énergie : $0{,}06 \\times 5 = 0{,}3$ kWh.

**3.** $45 \\times 80 = 3\\,600$ : le trafic est de $3\\,600$ passagers-kilomètres.

**4.** Le trafic est le produit du nombre de passagers par la distance, donc le nombre de passagers est $\\dfrac{2\\,400}{60} = 40$.`
    },
    {
      id: "4P1-ds-19",
      title: "Conversions d'unités composées",
      difficulty: 3,
      points: 5,
      statement: `Effectuer les conversions suivantes en détaillant les calculs. On rappelle que $1$ m³ $= 1\\,000$ L.

1. Convertir $90$ km/h en m/s.
2. Convertir $10$ m/s en km/h.
3. Le débit d'une rivière est de $0{,}4$ m³/s. Exprimer ce débit en L/s, puis en L/min.
4. Une pompe a un débit de $120$ L/min. Exprimer ce débit en L/h, puis en m³/h.
5. La masse volumique de la glace est de $0{,}92$ g/cm³. Exprimer cette masse volumique en kg/m³.`,
      solution: `**1.** En une heure, on parcourt $90\\,000$ m, et une heure dure $3\\,600$ s : $\\dfrac{90\\,000}{3\\,600} = 25$. Donc $90$ km/h $= 25$ m/s.

**2.** En une seconde, on parcourt $10$ m ; en une heure, soit $3\\,600$ s, on parcourt $10 \\times 3\\,600 = 36\\,000$ m, soit $36$ km. Donc $10$ m/s $= 36$ km/h.

**3.** $0{,}4$ m³ $= 400$ L, donc le débit est de $400$ L/s. En une minute : $400 \\times 60 = 24\\,000$ L, soit $24\\,000$ L/min.

**4.** En une heure : $120 \\times 60 = 7\\,200$ L, soit $7\\,200$ L/h. Or $7\\,200$ L $= 7{,}2$ m³, donc le débit est de $7{,}2$ m³/h.

**5.** $1$ m³ $= 1\\,000\\,000$ cm³, donc $1$ m³ de glace a une masse de $0{,}92 \\times 1\\,000\\,000 = 920\\,000$ g, soit $920$ kg. La masse volumique est de $920$ kg/m³.`
    },
    {
      id: "4P1-ds-20",
      title: "Formules et proportionnalité",
      difficulty: 4,
      points: 6,
      statement: `**Partie A : loi d'Ohm.** On mesure la tension $U$ aux bornes d'un conducteur ohmique pour différentes intensités $I$.

| Intensité $I$ (en A) | $0{,}1$ | $0{,}2$ | $0{,}5$ |
|---|---|---|---|
| Tension $U$ (en V) | $3$ | $6$ | $15$ |

1. Montrer que la tension est proportionnelle à l'intensité et donner le coefficient de proportionnalité.
2. Dans la relation $U = R \\times I$, que représente ce coefficient ?
3. Calculer la tension pour une intensité de $0{,}8$ A, puis l'intensité pour une tension de $9$ V.

**Partie B : longueur d'un arc.** Sur un cercle, la longueur d'un arc est proportionnelle à l'angle au centre qui l'intercepte. Un arc d'angle au centre $40^\\circ$ mesure $6$ cm.

4. Calculer la longueur d'un arc d'angle au centre $100^\\circ$.
5. En utilisant le fait qu'un tour complet correspond à $360^\\circ$, calculer la longueur du cercle.
6. En déduire le rayon de ce cercle, arrondi au dixième de centimètre.`,
      solution: `**1.** $\\dfrac{3}{0{,}1} = 30$, $\\dfrac{6}{0{,}2} = 30$ et $\\dfrac{15}{0{,}5} = 30$ : les quotients sont égaux, donc la tension est proportionnelle à l'intensité, avec un coefficient de $30$.

**2.** Ce coefficient est la résistance $R$ du conducteur : $R = 30$ ohms.

**3.** $U = 30 \\times 0{,}8 = 24$ V. Pour $U = 9$ V : $I = \\dfrac{9}{30} = 0{,}3$ A.

**4.** Pour un degré : $\\dfrac{6}{40} = 0{,}15$ cm. Pour $100^\\circ$ : $100 \\times 0{,}15 = 15$ cm.

**5.** $360 \\times 0{,}15 = 54$ : le cercle mesure $54$ cm.

**6.** La longueur d'un cercle de rayon $r$ est $2\\pi r$, donc $r = \\dfrac{54}{2\\pi} \\approx 8{,}6$ cm.`
    },
    {
      id: "4P1-ds-21",
      title: "Eau salée et concentration",
      difficulty: 2,
      points: 7,
      statement: `On dissout $84$ g de sel dans de l'eau et on obtient $2{,}4$ L d'eau salée.

1. Calculer la concentration en sel de cette solution, en g/L.

2. Quelle masse de sel faut-il pour préparer $5$ L d'eau salée de même concentration ?

3. Quel volume d'eau salée de même concentration peut-on préparer avec $140$ g de sel ?

4. Une seconde solution est obtenue avec $45$ g de sel, pour un volume de $1{,}5$ L. Laquelle des deux solutions est la plus salée ? Justifier.

5. Convertir la concentration de la première solution en g/mL, puis en mg/mL.`,
      solution: `**1.** Concentration $= \\dfrac{84}{2{,}4} = 35$ g/L.

**2.** La masse dissoute est proportionnelle au volume de solution : $35 \\times 5 = 175$ g de sel.

**3.** Volume $= \\dfrac{140}{35} = 4$ L.

**4.** Concentration de la seconde solution : $\\dfrac{45}{1{,}5} = 30$ g/L. Comme $35 > 30$, la première solution est la plus salée.

**5.** $1$ L $= 1\\,000$ mL, donc $35$ g/L $= \\dfrac{35}{1\\,000}$ g/mL $= 0{,}035$ g/mL. Et $1$ g $= 1\\,000$ mg, donc $0{,}035$ g/mL $= 35$ mg/mL.`
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

1. Calculer le résultat obtenu lorsqu'on choisit $4$, puis lorsqu'on choisit $-2$.
2. On note $x$ le nombre choisi et $y$ le résultat obtenu. Exprimer $y$ en fonction de $x$.
3. Quel nombre faut-il choisir pour obtenir $13$ ?
4. **Pour aller plus loin** (notion étudiée en 3e). On note $f$ la fonction qui, au nombre choisi, associe le résultat du programme. Écrire les résultats de la question 1 avec la notation $f(\\dots)$. Comment appelle-t-on, pour la fonction $f$, le nombre trouvé à la question 3 ?`,
      solution: `**1.** Avec $4$ : $4 \\times 3 = 12$ puis $12 - 5 = 7$ : on obtient $7$.
Avec $-2$ : $-2 \\times 3 = -6$ puis $-6 - 5 = -11$ : on obtient $-11$.

**2.** On multiplie $x$ par $3$, puis on soustrait $5$ : $y = 3x - 5$.

**3.** On résout $3x - 5 = 13$ : $3x = 18$, donc $x = 6$. Vérification : $3 \\times 6 - 5 = 18 - 5 = 13$.
Il faut choisir $6$.

**4.** (Pour aller plus loin.) $f(4) = 7$ et $f(-2) = -11$. Comme $f(6) = 13$, le nombre $6$ est un **antécédent** de $13$ par $f$, et $13$ est l'**image** de $6$ par $f$.
`
    },
    {
      id: "4P2-ds-02",
      title: "Tableau de valeurs",
      difficulty: 1,
      points: 4,
      statement: `On considère la formule $y = x^2 - 2x$.
1. Calculer la valeur de $y$ pour $x = 3$, pour $x = -1$ et pour $x = 0$.
2. Recopier et compléter le tableau de valeurs :

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|
| $y$ | | | | | | |

3. Citer deux valeurs différentes de $x$ qui donnent la même valeur de $y$.
4. Quelle valeur de $y$ obtient-on pour $x = 5$ ?`,
      solution: `**1.** Pour $x = 3$ : $y = 3^2 - 2 \\times 3 = 9 - 6 = 3$.
Pour $x = -1$ : $y = (-1)^2 - 2 \\times (-1) = 1 + 2 = 3$.
Pour $x = 0$ : $y = 0^2 - 2 \\times 0 = 0$.

**2.**

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|
| $y$ | $8$ | $3$ | $0$ | $-1$ | $0$ | $3$ |

Par exemple : pour $x = -2$, $y = 4 + 4 = 8$ ; pour $x = 1$, $y = 1 - 2 = -1$ ; pour $x = 2$, $y = 4 - 4 = 0$.

**3.** D'après le tableau, $x = -1$ et $x = 3$ donnent tous les deux $y = 3$ (de même, $x = 0$ et $x = 2$ donnent tous les deux $y = 0$).

**4.** Pour $x = 5$ : $y = 5^2 - 2 \\times 5 = 25 - 10 = 15$.
`
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
      statement: `La courbe ci-dessous donne une grandeur $y$ en fonction d'une grandeur $x$, pour $x$ compris entre $0$ et $8$ (on lit $x$ sur l'axe horizontal et $y$ sur l'axe vertical).

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 380 300" width="380" height="300" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="30" y1="270" x2="30" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="70" y1="270" x2="70" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="110" y1="270" x2="110" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="150" y1="270" x2="150" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="190" y1="270" x2="190" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="230" y1="270" x2="230" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="270" y1="270" x2="270" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="310" y1="270" x2="310" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="350" y1="270" x2="350" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="270" x2="350" y2="270" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="230" x2="350" y2="230" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="190" x2="350" y2="190" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="150" x2="350" y2="150" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="110" x2="350" y2="110" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="70" x2="350" y2="70" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="30" x2="350" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="30" y1="270" x2="350" y2="270" stroke="currentColor" stroke-width="1.5" /><line x1="30" y1="270" x2="30" y2="30" stroke="currentColor" stroke-width="1.5" /><text x="70" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">1</text><text x="110" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">2</text><text x="150" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">3</text><text x="190" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">4</text><text x="230" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">5</text><text x="270" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">6</text><text x="310" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">7</text><text x="350" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">8</text><text x="24" y="235" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">1</text><text x="24" y="195" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">2</text><text x="24" y="155" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">3</text><text x="24" y="115" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">4</text><text x="24" y="75" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">5</text><text x="24" y="35" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">6</text><text x="24" y="286" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="end">0</text><polyline points="30,230 110,70 270,230 350,150" fill="none" stroke="#2563eb" stroke-width="2.4" stroke-linejoin="round" /></svg></div>

1. Lire la valeur de $y$ pour $x = 0$, pour $x = 2$ et pour $x = 6$.
2. Lire la valeur de $y$ pour $x = 4$ et pour $x = 8$.
3. Déterminer graphiquement toutes les valeurs de $x$ pour lesquelles $y = 3$.
4. La grandeur $y$ peut-elle prendre la valeur $6$ ? Justifier.
5. Pour quelle valeur de $x$ la grandeur $y$ est-elle la plus grande ?
6. **Pour aller plus loin** (notion étudiée en 3e). On note $f$ la fonction représentée par cette courbe. Donner $f(2)$, puis les antécédents de $3$ par $f$.`,
      solution: `**1.** On part de l'axe horizontal, on rejoint la courbe, puis on lit sur l'axe vertical : pour $x = 0$, $y = 1$ ; pour $x = 2$, $y = 5$ ; pour $x = 6$, $y = 1$.

**2.** Pour $x = 4$, $y = 3$ ; pour $x = 8$, $y = 3$.

**3.** On trace la droite horizontale d'ordonnée $3$ : elle coupe la courbe en trois points, d'abscisses $1$, $4$ et $8$. On a donc $y = 3$ pour **$x = 1$, $x = 4$ et $x = 8$**.

**4.** La courbe ne monte jamais au-dessus de l'ordonnée $5$ : la droite horizontale d'ordonnée $6$ ne la coupe pas. **La grandeur $y$ ne prend jamais la valeur $6$.**

**5.** Le point le plus haut de la courbe a pour coordonnées $(2 ; 5)$ : $y$ est le plus grand pour **$x = 2$** (il vaut alors $5$).

**6.** (Pour aller plus loin.) $f(2) = 5$ : l'image de $2$ par $f$ est $5$. D'après la question 3, les antécédents de $3$ par $f$ sont $1$, $4$ et $8$.
`
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
      statement: `Un taxi facture $4$ € de prise en charge, puis $1{,}60$ € par kilomètre parcouru. On note $P$ le prix (en €) d'une course de $x$ km.
1. Exprimer $P$ en fonction de $x$.
2. Calculer $P$ pour $x = 10$ et interpréter le résultat.
3. Une course a coûté $28$ €. Quelle distance a été parcourue ?
4. Le prix est-il proportionnel à la distance ? Justifier de deux façons différentes.
5. Une autre compagnie facture $2$ € par kilomètre, sans prise en charge. Pour quelle distance les deux compagnies proposent-elles le même prix ?`,
      solution: `**1.** $P = 4 + 1{,}6x$.

**2.** Pour $x = 10$ : $P = 4 + 1{,}6 \\times 10 = 4 + 16 = 20$. Une course de $10$ km coûte $20$ €.

**3.** $4 + 1{,}6x = 28$ donne $1{,}6x = 24$, donc $x = 15$ : la course a fait $15$ km.

**4.** Première façon : pour $x = 0$, on a $P = 4 \\neq 0$, alors que pour $0$ km un prix proportionnel serait nul.
Deuxième façon : $\\dfrac{20}{10} = 2$ et $\\dfrac{28}{15} \\approx 1{,}87$ ; les quotients du prix par la distance ne sont pas égaux. **Le prix n'est pas proportionnel** à la distance (la représentation graphique est une droite qui ne passe pas par l'origine).

**5.** $4 + 1{,}6x = 2x$ donne $4 = 0{,}4x$, donc $x = 10$ : pour $10$ km, les deux prix valent $20$ €.
`
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
2. On note $A$ l'aire du rectangle (en cm²). Montrer que $A = 10x - x^2$.
3. Recopier et compléter le tableau :

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|---|---|---|---|
| $A$ | | | | | | | | | |

4. L'aire est-elle proportionnelle à la largeur ? Justifier.
5. D'après le tableau, pour quelles valeurs de $x$ l'aire vaut-elle $21$ cm² ? Interpréter.
6. D'après le tableau, quel rectangle semble avoir la plus grande aire ? Quelle est sa particularité ?`,
      solution: `**1.** Le demi-périmètre vaut $10$ cm, donc largeur + longueur $= 10$ et la longueur vaut $10 - x$.

**2.** $A = x \\times (10 - x) = 10x - x^2$.

**3.**

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
|---|---|---|---|---|---|---|---|---|---|
| $A$ | $9$ | $16$ | $21$ | $24$ | $25$ | $24$ | $21$ | $16$ | $9$ |

**4.** Non : $\\dfrac{9}{1} = 9$ et $\\dfrac{16}{2} = 8$, les quotients de l'aire par la largeur ne sont pas égaux. (D'ailleurs l'aire diminue quand $x$ dépasse $5$.)

**5.** L'aire vaut $21$ cm² pour $x = 3$ et pour $x = 7$. Ces deux valeurs correspondent au même rectangle de $3$ cm sur $7$ cm, pris dans un sens ou dans l'autre.

**6.** L'aire maximale du tableau est $25$ cm², pour $x = 5$ : la longueur vaut alors $10 - 5 = 5$ cm. Le rectangle d'aire maximale est un **carré** de $5$ cm de côté.
`
    },
    {
      id: "4P2-ds-09",
      title: "La location de vélos",
      difficulty: 1,
      points: 4,
      statement: `Un loueur de vélos fait payer $5$ € de frais fixes, plus $3$ € par heure de location. On note $x$ le nombre d'heures de location et $P$ le prix à payer, en euros.
1. Calculer le prix d'une location de $2$ h, puis d'une location de $4{,}5$ h.
2. Exprimer $P$ en fonction de $x$.
3. Calculer $P$ pour $x = 6$. Traduire ce résultat par une phrase.
4. Léna a payé $26$ €. Combien de temps a-t-elle loué son vélo ?
5. Le prix est-il proportionnel à la durée de location ? Justifier.`,
      solution: `**1.** $2$ h : $5 + 3 \\times 2 = 11$ €. $4{,}5$ h : $5 + 3 \\times 4{,}5 = 5 + 13{,}5 = 18{,}50$ €.

**2.** $P = 3x + 5$.

**3.** Pour $x = 6$ : $P = 3 \\times 6 + 5 = 23$. Une location de $6$ heures coûte $23$ €.

**4.** On résout $3x + 5 = 26$ : $3x = 21$, donc $x = 7$. Léna a loué son vélo **$7$ heures**.

**5.** Non : pour $2$ h on paie $11$ €, pour $4$ h on paie $3 \\times 4 + 5 = 17$ €. La durée double mais le prix ne double pas ($2 \\times 11 = 22 \\neq 17$). Le prix n'est donc pas proportionnel à la durée (à cause des frais fixes).
`
    },
    {
      id: "4P2-ds-10",
      title: "Une formule avec un carré",
      difficulty: 2,
      points: 5,
      statement: `On considère la formule $y = x^2 - 4x$.
1. Calculer la valeur de $y$ pour $x = 0$, pour $x = 3$ et pour $x = -1$. Détailler les calculs.
2. Recopier et compléter le tableau de valeurs suivant.

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|---|
| $y$ | | | | | | | |

3. À l'aide du tableau, donner deux valeurs de $x$ pour lesquelles $y = 0$, puis deux valeurs de $x$ pour lesquelles $y = 5$.
4. Quelle est, d'après le tableau, la plus petite valeur de $y$ ? Pour quelle valeur de $x$ est-elle obtenue ?
5. Montrer que $x^2 - 4x = x \\times (x - 4)$ pour tout nombre $x$, puis retrouver le résultat de la question 3 concernant $y = 0$.
6. **Pour aller plus loin** (notion étudiée en 3e). On note $g$ la fonction définie par $g(x) = x^2 - 4x$. Donner $g(3)$, puis deux antécédents de $0$ par $g$.`,
      solution: `**1.** Pour $x = 0$ : $y = 0^2 - 4 \\times 0 = 0$.
Pour $x = 3$ : $y = 3^2 - 4 \\times 3 = 9 - 12 = -3$.
Pour $x = -1$ : $y = (-1)^2 - 4 \\times (-1) = 1 + 4 = 5$.

**2.**

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|---|
| $y$ | $5$ | $0$ | $-3$ | $-4$ | $-3$ | $0$ | $5$ |

(Par exemple, pour $x = 2$, $y = 4 - 8 = -4$ et, pour $x = 5$, $y = 25 - 20 = 5$.)

**3.** On a $y = 0$ pour $x = 0$ et pour $x = 4$.
On a $y = 5$ pour $x = -1$ et pour $x = 5$.

**4.** La plus petite valeur de $y$ dans le tableau est $-4$, obtenue pour $x = 2$.

**5.** En développant : $x \\times (x - 4) = x \\times x - x \\times 4 = x^2 - 4x$.
Pour $x = 0$ : $0 \\times (0 - 4) = 0$. Pour $x = 4$ : $4 \\times (4 - 4) = 4 \\times 0 = 0$. Un produit dont un facteur est nul est nul : on retrouve bien $y = 0$ pour $x = 0$ et pour $x = 4$.

**6.** (Pour aller plus loin.) $g(3) = -3$ : l'image de $3$ par $g$ est $-3$. D'après la question 3, $0$ et $4$ sont deux antécédents de $0$ par $g$.
`
    },
    {
      id: "4P2-ds-11",
      title: "La boîte sans couvercle",
      difficulty: 3,
      points: 5,
      statement: `Dans une feuille de carton carrée de $20$ cm de côté, on découpe un carré de côté $x$ cm à chacun des quatre coins, puis on relève les bords pour former une boîte sans couvercle (un pavé droit).
1. Expliquer pourquoi la base de la boîte est un carré de côté $20 - 2x$ cm et pourquoi la hauteur de la boîte est $x$ cm. Pourquoi faut-il que $x$ soit strictement compris entre $0$ et $10$ ?
2. On note $V$ le volume de la boîte en cm³. Justifier que $V = x \\times (20 - 2x)^2$, puis calculer $V$ pour $x = 3$.
3. Un tableur a donné les valeurs suivantes :

| $x$ (cm) | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $8$ |
|---|---|---|---|---|---|---|---|
| $V$ (cm³) | $324$ | $512$ | | $576$ | $500$ | $384$ | $128$ |

   a) Compléter la case manquante avec le résultat de la question 2.
   b) Parmi les valeurs du tableau, laquelle donne la boîte de plus grand volume ?
4. Voici la courbe qui donne le volume $V$ en fonction de $x$, pour $x$ compris entre $0$ et $10$ :

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:420px;"><svg class="geo-svg-figure" viewBox="0 0 400 290" width="400" height="290" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="50" y1="260" x2="50" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="82" y1="260" x2="82" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="114" y1="260" x2="114" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="146" y1="260" x2="146" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="178" y1="260" x2="178" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="210" y1="260" x2="210" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="242" y1="260" x2="242" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="274" y1="260" x2="274" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="306" y1="260" x2="306" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="338" y1="260" x2="338" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="370" y1="260" x2="370" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="260.0" x2="370" y2="260.0" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="240.8" x2="370" y2="240.8" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="221.7" x2="370" y2="221.7" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="202.5" x2="370" y2="202.5" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="183.3" x2="370" y2="183.3" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="164.2" x2="370" y2="164.2" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="145.0" x2="370" y2="145.0" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="125.8" x2="370" y2="125.8" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="106.7" x2="370" y2="106.7" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="87.5" x2="370" y2="87.5" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="68.3" x2="370" y2="68.3" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="49.2" x2="370" y2="49.2" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="30.0" x2="370" y2="30.0" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="260" x2="370" y2="260" stroke="currentColor" stroke-width="1.5" /><line x1="50" y1="260" x2="50" y2="30" stroke="currentColor" stroke-width="1.5" /><text x="50" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">0</text><text x="82" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">1</text><text x="114" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">2</text><text x="146" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">3</text><text x="178" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">4</text><text x="210" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">5</text><text x="242" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">6</text><text x="274" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">7</text><text x="306" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">8</text><text x="338" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">9</text><text x="370" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">10</text><text x="44" y="225.7" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">100</text><text x="44" y="187.3" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">200</text><text x="44" y="149.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">300</text><text x="44" y="110.7" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">400</text><text x="44" y="72.3" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">500</text><text x="44" y="34.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">600</text><text x="370" y="254" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">x (cm)</text><text x="56" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="start">V (cm³)</text><polyline points="50.0,260.0 53.2,245.0 56.4,230.5 59.6,216.7 62.8,203.5 66.0,190.8 69.2,178.7 72.4,167.2 75.6,156.2 78.8,145.7 82.0,135.8 85.2,126.4 88.4,117.5 91.6,109.1 94.8,101.2 98.0,93.8 101.2,86.9 104.4,80.4 107.6,74.4 110.8,68.9 114.0,63.7 117.2,59.0 120.4,54.8 123.6,50.9 126.8,47.4 130.0,44.4 133.2,41.7 136.4,39.4 139.6,37.4 142.8,35.8 146.0,34.6 149.2,33.7 152.4,33.1 155.6,32.9 158.8,32.9 162.0,33.3 165.2,33.9 168.4,34.8 171.6,36.0 174.8,37.5 178.0,39.2 181.2,41.2 184.4,43.4 187.6,45.8 190.8,48.4 194.0,51.3 197.2,54.3 200.4,57.6 203.6,61.0 206.8,64.6 210.0,68.3 213.2,72.2 216.4,76.3 219.6,80.5 222.8,84.8 226.0,89.2 229.2,93.8 232.4,98.4 235.6,103.1 238.8,107.9 242.0,112.8 245.2,117.7 248.4,122.7 251.6,127.8 254.8,132.8 258.0,137.9 261.2,143.0 264.4,148.1 267.6,153.2 270.8,158.3 274.0,163.4 277.2,168.4 280.4,173.4 283.6,178.4 286.8,183.3 290.0,188.1 293.2,192.9 296.4,197.5 299.6,202.1 302.8,206.6 306.0,210.9 309.2,215.2 312.4,219.3 315.6,223.2 318.8,227.0 322.0,230.7 325.2,234.2 328.4,237.5 331.6,240.6 334.8,243.5 338.0,246.2 341.2,248.7 344.4,251.0 347.6,253.0 350.8,254.8 354.0,256.4 357.2,257.6 360.4,258.7 363.6,259.4 366.8,259.8 370.0,260.0" fill="none" stroke="#2563eb" stroke-width="2.4" stroke-linejoin="round" /></svg></div>

   a) Lire graphiquement une valeur approchée du plus grand volume possible et de la valeur de $x$ correspondante.
   b) Lire graphiquement les valeurs de $x$ pour lesquelles le volume vaut $400$ cm³.
5. Lola affirme : « Le meilleur choix est $x = 3$, puisque c'est le meilleur du tableau. » Calculer $V$ pour $x = 3{,}5$ et répondre à Lola.`,
      solution: `**1.** Sur chaque côté de $20$ cm, on retire deux carrés de côté $x$ (un à chaque extrémité) : il reste $20 - 2x$ cm. La base est donc un carré de côté $20 - 2x$. Les bords relevés ont pour largeur le côté $x$ des carrés découpés : la hauteur est $x$.
Il faut $x > 0$ pour qu'il y ait des bords, et $20 - 2x > 0$, c'est-à-dire $x < 10$, pour que la base existe.

**2.** Volume d'un pavé droit : aire de la base $\\times$ hauteur $= (20 - 2x)^2 \\times x$.
Pour $x = 3$ : $V = 3 \\times (20 - 6)^2 = 3 \\times 14^2 = 3 \\times 196 = 588$ cm³.

**3. a)** La case manquante contient $588$.

**b)** Parmi les valeurs du tableau, c'est $x = 3$ cm qui donne le plus grand volume : $588$ cm³.

**4. a)** Le point le plus haut de la courbe a une abscisse d'environ $3{,}3$ et une ordonnée d'environ $590$ : le plus grand volume possible est d'environ $590$ cm³, obtenu pour $x \\approx 3{,}3$ cm. (Une lecture graphique ne donne qu'une valeur approchée ; on ne démontre pas ici la valeur exacte du maximum.)

**b)** La droite horizontale d'ordonnée $400$ coupe la courbe en deux points, d'abscisses environ $1{,}3$ et $5{,}9$ : le volume vaut $400$ cm³ pour $x \\approx 1{,}3$ cm ou $x \\approx 5{,}9$ cm.

**5.** Pour $x = 3{,}5$ : $V = 3{,}5 \\times (20 - 7)^2 = 3{,}5 \\times 169 = 591{,}5$ cm³.
Comme $591{,}5 > 588$, Lola a tort : $x = 3$ est le meilleur choix parmi les valeurs du tableau, mais pas parmi toutes les valeurs possibles. Le tableau ne contient que quelques valeurs de $x$, et la courbe montre que le maximum est atteint un peu après $3$.`
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

On note $x$ le nombre choisi et $y$ le résultat obtenu.
1. Calculer le résultat obtenu pour $x = 5$, puis pour $x = -2$.
2. Montrer que $y = 6x - 12$.
3. Quel nombre faut-il choisir pour obtenir $0$ ? pour obtenir $33$ ?
4. Montrer que, si le nombre de départ est un nombre entier, le résultat est toujours un multiple de $6$.
5. Écrire un programme de calcul en deux étapes qui, à partir du résultat de ce programme, permet de retrouver le nombre de départ. Le tester avec le résultat $33$.
6. Existe-t-il un nombre de départ égal au résultat obtenu ? Si oui, lequel ?`,
      solution: `**1.** Avec $5$ : $5 - 3 = 2$ ; $2 \\times 4 = 8$ ; $8 + 2 \\times 5 = 18$. On obtient $18$.
Avec $-2$ : $-2 - 3 = -5$ ; $-5 \\times 4 = -20$ ; $-20 + 2 \\times (-2) = -24$. On obtient $-24$.

**2.** $y = (x - 3) \\times 4 + 2x = 4x - 12 + 2x = 6x - 12$.
(Vérification : $6 \\times 5 - 12 = 18$ et $6 \\times (-2) - 12 = -24$.)

**3.** $6x - 12 = 0$ donne $6x = 12$, donc $x = 2$.
$6x - 12 = 33$ donne $6x = 45$, donc $x = 7{,}5$.

**4.** $6x - 12 = 6 \\times x - 6 \\times 2 = 6 \\times (x - 2)$. Si $x$ est entier, $x - 2$ est entier, donc le résultat est un multiple de $6$.

**5.** Le programme multiplie par $6$ puis soustrait $12$. Pour revenir en arrière, on effectue les opérations inverses dans l'ordre inverse :
- ajouter $12$ au résultat ;
- diviser par $6$.

Test : $33 + 12 = 45$ et $45 \\div 6 = 7{,}5$ : on retrouve bien le nombre de départ de la question 3.

**6.** On cherche $x$ tel que $6x - 12 = x$, soit $5x = 12$, donc $x = \\dfrac{12}{5} = 2{,}4$.
Vérification : $6 \\times 2{,}4 - 12 = 14{,}4 - 12 = 2{,}4$. Oui : en choisissant $2{,}4$, on obtient $2{,}4$.
`
    },
    {
      id: "4P2-ds-13",
      title: "Du programme à la formule",
      difficulty: 1,
      points: 4,
      statement: `On considère la formule $y = 4(x - 1)$.

1. Écrire un programme de calcul (avec des phrases du type « Choisir un nombre », « Soustraire… ») qui, à partir d'un nombre $x$, donne le résultat $y$.
2. Calculer $y$ pour $x = 5$, puis pour $x = 0$.
3. Recopier et compléter le tableau de valeurs :

| $x$ | $-2$ | $0$ | $1$ | $1{,}5$ | $5$ |
|---|---|---|---|---|---|
| $y$ | | | | | |

4. Pour quelle valeur de $x$ obtient-on $y = 0$ ?
5. Quelle valeur de $x$ faut-il choisir pour obtenir $y = 8$ ? Justifier.
6. **Pour aller plus loin** (notion étudiée en 3e). On note $f$ la fonction définie par $f(x) = 4(x - 1)$. Donner l'image de $5$ par $f$, puis un antécédent de $8$ par $f$.`,
      solution: `**1.** Programme : « Choisir un nombre. Lui soustraire $1$. Multiplier le résultat par $4$. »

**2.** Pour $x = 5$ : $y = 4 \\times (5 - 1) = 4 \\times 4 = 16$.
Pour $x = 0$ : $y = 4 \\times (0 - 1) = 4 \\times (-1) = -4$.

**3.**

| $x$ | $-2$ | $0$ | $1$ | $1{,}5$ | $5$ |
|---|---|---|---|---|---|
| $y$ | $-12$ | $-4$ | $0$ | $2$ | $16$ |

Par exemple, pour $x = -2$, $y = 4 \\times (-3) = -12$ et, pour $x = 1{,}5$, $y = 4 \\times 0{,}5 = 2$.

**4.** D'après le tableau, pour $x = 1$, $y = 4 \\times 0 = 0$ : on obtient $y = 0$ pour $x = 1$.

**5.** On résout $4(x - 1) = 8$. On remonte le programme : $8 \\div 4 = 2$, puis $2 + 1 = 3$.
Vérification : pour $x = 3$, $y = 4 \\times 2 = 8$. Il faut choisir $x = 3$.

**6.** (Pour aller plus loin.) D'après la question 2, $f(5) = 16$ : l'image de $5$ par $f$ est $16$. D'après la question 5, $f(3) = 8$ : $3$ est un antécédent de $8$ par $f$.
`
    },
    {
      id: "4P2-ds-14",
      title: "Périmètre et aire d'un carré",
      difficulty: 2,
      points: 5,
      statement: `Pour un carré de côté $x$ cm, on note $P$ son périmètre en cm et $A$ son aire en cm².

1. Exprimer $P$ et $A$ en fonction de $x$.
2. Recopier et compléter le tableau :

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| $P$ | | | | | |
| $A$ | | | | | |

3. Le périmètre est-il proportionnel à la longueur du côté ? Et l'aire ? Justifier à l'aide du tableau.
4. Pour quelle valeur de $x$ le périmètre et l'aire ont-ils la même valeur numérique ?
5. Quelle doit être la longueur du côté pour que l'aire vaille $49$ cm² ? Pourquoi $-7$ ne convient-il pas ici ?`,
      solution: `**1.** $P = 4x$ et $A = x \\times x = x^2$.

**2.**

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| $P$ | $4$ | $8$ | $12$ | $16$ | $20$ |
| $A$ | $1$ | $4$ | $9$ | $16$ | $25$ |

**3.** Pour le périmètre, $\\dfrac{4}{1} = \\dfrac{8}{2} = \\dfrac{12}{3} = \\dfrac{16}{4} = \\dfrac{20}{5} = 4$ : le périmètre est proportionnel au côté (coefficient $4$).
Pour l'aire, $\\dfrac{1}{1} = 1$ mais $\\dfrac{4}{2} = 2$ : les quotients ne sont pas égaux, l'aire n'est pas proportionnelle au côté. Par exemple, quand le côté double (de $2$ à $4$), l'aire est multipliée par $4$ (de $4$ à $16$).

**4.** D'après le tableau, pour $x = 4$ : $P = 16$ et $A = 16$.

**5.** $7 \\times 7 = 49$ : le côté doit mesurer $7$ cm.
On a aussi $(-7) \\times (-7) = 49$, mais $x$ est une longueur, donc il est positif : $-7$ ne convient pas.
`
    },
    {
      id: "4P2-ds-15",
      title: "Le lancer de balle",
      difficulty: 3,
      points: 5,
      statement: `Depuis le haut d'une tour, Sami lance une balle vers le haut. La hauteur $h$ de la balle au-dessus du sol, en mètres, $t$ secondes après le lancer, est donnée par la formule :
$$h = -5t^2 + 10t + 15 \\quad \\text{pour } t \\text{ compris entre } 0 \\text{ et } 3.$$
La courbe ci-dessous donne la hauteur $h$ en fonction du temps $t$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:420px;"><svg class="geo-svg-figure" viewBox="0 0 400 290" width="400" height="290" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="50.0" y1="260" x2="50.0" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="76.7" y1="260" x2="76.7" y2="30" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="103.3" y1="260" x2="103.3" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="130.0" y1="260" x2="130.0" y2="30" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="156.7" y1="260" x2="156.7" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="183.3" y1="260" x2="183.3" y2="30" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="210.0" y1="260" x2="210.0" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="236.7" y1="260" x2="236.7" y2="30" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="263.3" y1="260" x2="263.3" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="290.0" y1="260" x2="290.0" y2="30" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="316.7" y1="260" x2="316.7" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="343.3" y1="260" x2="343.3" y2="30" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="370.0" y1="260" x2="370.0" y2="30" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="249.5" x2="370" y2="249.5" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="239.1" x2="370" y2="239.1" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="228.6" x2="370" y2="228.6" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="218.2" x2="370" y2="218.2" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="207.7" x2="370" y2="207.7" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="197.3" x2="370" y2="197.3" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="186.8" x2="370" y2="186.8" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="176.4" x2="370" y2="176.4" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="165.9" x2="370" y2="165.9" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="155.5" x2="370" y2="155.5" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="145.0" x2="370" y2="145.0" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="134.5" x2="370" y2="134.5" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="124.1" x2="370" y2="124.1" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="113.6" x2="370" y2="113.6" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="103.2" x2="370" y2="103.2" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="92.7" x2="370" y2="92.7" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="82.3" x2="370" y2="82.3" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="71.8" x2="370" y2="71.8" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="61.4" x2="370" y2="61.4" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="50.9" x2="370" y2="50.9" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="40.5" x2="370" y2="40.5" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="30.0" x2="370" y2="30.0" stroke="currentColor" stroke-opacity="0.08" stroke-width="1" /><line x1="50" y1="260" x2="370" y2="260" stroke="currentColor" stroke-width="1.5" /><line x1="50" y1="260" x2="50" y2="30" stroke="currentColor" stroke-width="1.5" /><text x="50.0" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">0</text><text x="103.3" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">0,5</text><text x="156.7" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">1</text><text x="210.0" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">1,5</text><text x="263.3" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">2</text><text x="316.7" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">2,5</text><text x="370.0" y="276" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">3</text><text x="44" y="212.2" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">5</text><text x="44" y="160.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">10</text><text x="44" y="107.7" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">15</text><text x="44" y="55.4" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">20</text><text x="370" y="254" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">t (s)</text><text x="56" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="start">h (m)</text><polyline points="50.0,103.2 55.3,98.1 60.7,93.3 66.0,88.7 71.3,84.4 76.7,80.3 82.0,76.5 87.3,73.0 92.7,69.7 98.0,66.7 103.3,64.0 108.7,61.5 114.0,59.3 119.3,57.3 124.7,55.6 130.0,54.2 135.3,53.0 140.7,52.1 146.0,51.4 151.3,51.0 156.7,50.9 162.0,51.0 167.3,51.4 172.7,52.1 178.0,53.0 183.3,54.2 188.7,55.6 194.0,57.3 199.3,59.3 204.7,61.5 210.0,64.0 215.3,66.7 220.7,69.7 226.0,73.0 231.3,76.5 236.7,80.3 242.0,84.4 247.3,88.7 252.7,93.3 258.0,98.1 263.3,103.2 268.7,108.5 274.0,114.2 279.3,120.0 284.7,126.2 290.0,132.6 295.3,139.3 300.7,146.2 306.0,153.4 311.3,160.8 316.7,168.5 322.0,176.5 327.3,184.7 332.7,193.2 338.0,202.0 343.3,211.0 348.7,220.3 354.0,229.8 359.3,239.6 364.7,249.7 370.0,260.0" fill="none" stroke="#2563eb" stroke-width="2.4" stroke-linejoin="round" /></svg></div>

1. Calculer $h$ pour $t = 0$. Que représente ce nombre pour la situation ?
2. Calculer $h$ pour $t = 1$ et pour $t = 2$.
3. Lire graphiquement la hauteur maximale atteinte par la balle et l'instant où elle est atteinte.
4. Calculer $h$ pour $t = 3$. Que se passe-t-il à cet instant ?
5. Lire graphiquement à quel instant la balle se trouve à $10$ m du sol (on donnera une valeur approchée au dixième). À cet instant, la balle monte-t-elle ou descend-elle ?
6. Pendant combien de temps environ la balle est-elle à plus de $15$ m du sol ?`,
      solution: `**1.** Pour $t = 0$ : $h = -5 \\times 0^2 + 10 \\times 0 + 15 = 15$. À l'instant du lancer, la balle est à $15$ m du sol : c'est la hauteur de la tour (point de départ du lancer).

**2.** Pour $t = 1$ : $h = -5 \\times 1 + 10 \\times 1 + 15 = -5 + 10 + 15 = 20$.
Pour $t = 2$ : $h = -5 \\times 4 + 10 \\times 2 + 15 = -20 + 20 + 15 = 15$.

**3.** Le point le plus haut de la courbe a pour coordonnées $(1 ; 20)$ : la balle atteint sa hauteur maximale, $20$ m, au bout de $1$ seconde.

**4.** Pour $t = 3$ : $h = -5 \\times 9 + 10 \\times 3 + 15 = -45 + 30 + 15 = 0$. Au bout de $3$ secondes, la balle touche le sol.

**5.** On trace la droite horizontale d'ordonnée $10$ : elle coupe la courbe en un seul point, d'abscisse environ $2{,}4$. La balle est donc à $10$ m du sol environ $2{,}4$ secondes après le lancer. Elle redescend à cet instant, puisque la hauteur maximale a été atteinte au bout de $1$ seconde.
(Vérification : pour $t = 2{,}4$, $h = -28{,}8 + 24 + 15 = 10{,}2$, proche de $10$.)

**6.** D'après les questions 1 et 2, $h = 15$ pour $t = 0$ et pour $t = 2$ ; entre ces deux instants, la courbe est au-dessus de la droite d'ordonnée $15$. La balle est donc à plus de $15$ m du sol pendant environ $2$ secondes.
`
    },
    {
      id: "4P2-ds-16",
      title: "Le forfait mobile à paliers",
      difficulty: 4,
      points: 6,
      statement: `Un opérateur propose le forfait A : $10$ € par mois pour une consommation de données jusqu'à $20$ Go inclus ; au-delà, chaque Go supplémentaire est facturé $2$ €.
On note $P$ le prix mensuel, en euros, pour une consommation de $x$ Go.

1. Calculer $P$ pour $x = 15$, pour $x = 20$ et pour $x = 25$.
2. Lorsque $x$ est supérieur à $20$, montrer que $P = 10 + 2(x - 20)$.
3. Le prix est-il proportionnel à la consommation ? Justifier.
4. a) Pour quelles consommations le prix est-il égal à $10$ € ?
   b) Une facture s'élève à $26$ €. Quelle a été la consommation ?
5. Le forfait B coûte $15$ € par mois, quelle que soit la consommation. Pour quelles consommations le forfait A est-il moins cher que le forfait B ? Répondre par une phrase utilisant des inégalités.
6. **Pour aller plus loin** (notion étudiée en 3e). On note $f$ la fonction qui, à $x$, associe le prix $P$. Combien le nombre $10$ a-t-il d'antécédents par $f$ ?`,
      solution: `**1.** $15 \\leq 20$ et $20 \\leq 20$ : pour $x = 15$ et pour $x = 20$, $P = 10$.
Pour $x = 25$, il y a $25 - 20 = 5$ Go supplémentaires : $P = 10 + 5 \\times 2 = 20$.

**2.** Lorsque $x > 20$, le nombre de Go supplémentaires est $x - 20$, chacun coûte $2$ €, et on ajoute les $10$ € du forfait : $P = 10 + 2(x - 20)$.

**3.** Non : par exemple, pour $x = 15$ et pour $x = 20$, $P = 10$. Le prix ne change pas alors que la consommation augmente, donc il n'est pas proportionnel. (On peut aussi remarquer que, pour $x = 0$, $P = 10 \\neq 0$.)

**4. a)** Le prix est égal à $10$ € pour toutes les consommations $x$ telles que $0 \\leq x \\leq 20$.

**b)** $26 > 10$, donc la consommation dépasse $20$ Go : on cherche $x > 20$ tel que $10 + 2(x - 20) = 26$. Alors $2(x - 20) = 16$, $x - 20 = 8$, donc $x = 28$.
Vérification : $10 + 2 \\times 8 = 26$. Avec une facture de $26$ €, on a consommé $28$ Go.

**5.** Si $x \\leq 20$, le forfait A coûte $10$ €, moins que $15$ €.
Si $x > 20$ : le forfait A coûte $15$ € lorsque $2(x - 20) = 5$, soit $x - 20 = 2{,}5$, donc $x = 22{,}5$. Au-delà, chaque Go supplémentaire coûte encore $2$ € : A devient plus cher que B.
Conclusion : le forfait A est moins cher lorsque $0 \\leq x < 22{,}5$ ; les deux forfaits coûtent le même prix pour $x = 22{,}5$ ; le forfait B est moins cher lorsque $x > 22{,}5$.

**6.** (Pour aller plus loin.) D'après la question 4 a), tout nombre $x$ tel que $0 \\leq x \\leq 20$ a pour image $10$ : le nombre $10$ a une infinité d'antécédents par $f$, tous les nombres compris entre $0$ et $20$ (inclus). Une fonction associe une seule image à chaque nombre, mais un nombre peut avoir plusieurs antécédents.
`
    },
    {
      id: "4P2-ds-17",
      title: "Construire un graphique à partir d'une formule",
      difficulty: 2,
      points: 5,
      statement: `On considère la formule $y = 2x - 3$.
1. Recopier et compléter le tableau de valeurs :

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|---|
| $y$ | | | | | | |

2. Tracer un repère en prenant $1$ cm pour une unité sur chaque axe, avec un axe horizontal gradué de $-2$ à $5$ et un axe vertical gradué de $-6$ à $6$. Placer les six points dont les coordonnées sont données par les colonnes du tableau.
3. Les points semblent alignés ; on admet qu'ils le sont. Tracer la droite qui passe par ces points : c'est le graphique de la formule.
4. Sans placer de point, dire si le point $A(10 ; 17)$ appartient à cette droite, puis si le point $B(-5 ; -12)$ lui appartient. Justifier par un calcul.
5. Lire sur le graphique la valeur de $x$ pour laquelle $y = 2$, puis retrouver ce résultat en résolvant une équation.`,
      solution: `**1.** On remplace $x$ par chaque valeur dans la formule. Par exemple, pour $x = -1$ : $y = 2 \\times (-1) - 3 = -2 - 3 = -5$ ; pour $x = 3$ : $y = 2 \\times 3 - 3 = 6 - 3 = 3$.

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|---|
| $y$ | $-5$ | $-3$ | $-1$ | $1$ | $3$ | $5$ |

**2. et 3.** Chaque colonne du tableau donne un point, avec la valeur de $x$ pour abscisse (axe horizontal) et la valeur de $y$ pour ordonnée (axe vertical) : $(-1 ; -5)$, $(0 ; -3)$, $(1 ; -1)$, $(2 ; 1)$, $(3 ; 3)$ et $(4 ; 5)$. On obtient la figure suivante ; les pointillés rouges correspondent à la question 5.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:300px;"><svg class="geo-svg-figure" viewBox="0 0 246 344" width="246" height="344" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Repère où sont placés les six points du tableau, alignés sur une droite. Le point d'ordonnée 2 de cette droite a pour abscisse 2,5."><line x1="40" y1="332" x2="40" y2="20" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="66" y1="332" x2="66" y2="20" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="92" y1="332" x2="92" y2="20" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="118" y1="332" x2="118" y2="20" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="144" y1="332" x2="144" y2="20" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="170" y1="332" x2="170" y2="20" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="196" y1="332" x2="196" y2="20" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="222" y1="332" x2="222" y2="20" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="332" x2="222" y2="332" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="306" x2="222" y2="306" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="280" x2="222" y2="280" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="254" x2="222" y2="254" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="228" x2="222" y2="228" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="202" x2="222" y2="202" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="176" x2="222" y2="176" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="150" x2="222" y2="150" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="124" x2="222" y2="124" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="98" x2="222" y2="98" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="72" x2="222" y2="72" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="46" x2="222" y2="46" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="20" x2="222" y2="20" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="40" y1="176" x2="234" y2="176" stroke="currentColor" stroke-width="1.5"/><polygon points="236,176 228,172 228,180" fill="currentColor"/><line x1="92" y1="332" x2="92" y2="10" stroke="currentColor" stroke-width="1.5"/><polygon points="92,8 88,16 96,16" fill="currentColor"/><text x="40" y="191" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">−2</text><text x="66" y="191" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">−1</text><text x="118" y="191" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">1</text><text x="144" y="191" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">2</text><text x="170" y="191" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">3</text><text x="196" y="191" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">4</text><text x="222" y="191" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">5</text><text x="98" y="336" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="start">−6</text><text x="98" y="310" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="start">−5</text><text x="98" y="284" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="start">−4</text><text x="86" y="258" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">−3</text><text x="86" y="232" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">−2</text><text x="86" y="206" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">−1</text><text x="86" y="154" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">1</text><text x="86" y="128" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">2</text><text x="86" y="102" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">3</text><text x="86" y="76" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">4</text><text x="86" y="50" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">5</text><text x="86" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">6</text><text x="86" y="191" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">0</text><text x="234" y="168" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">x</text><text x="100" y="18" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="start">y</text><path d="M 92 124 H 157 V 176" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/><text x="161" y="170" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="start" style="fill:#dc2626">2,5</text><line x1="53" y1="332" x2="209" y2="20" stroke="#2563eb" stroke-width="2"/><circle cx="66" cy="306" r="3.5" fill="#2563eb"/><circle cx="92" cy="254" r="3.5" fill="#2563eb"/><circle cx="118" cy="202" r="3.5" fill="#2563eb"/><circle cx="144" cy="150" r="3.5" fill="#2563eb"/><circle cx="170" cy="98" r="3.5" fill="#2563eb"/><circle cx="196" cy="46" r="3.5" fill="#2563eb"/></svg></div>

**4.** Pour $x = 10$ : $y = 2 \\times 10 - 3 = 20 - 3 = 17$. Le point $A(10 ; 17)$ appartient à la droite.
Pour $x = -5$ : $y = 2 \\times (-5) - 3 = -10 - 3 = -13$, et non $-12$. Le point $B(-5 ; -12)$ n'appartient pas à la droite.

**5.** Sur le graphique, on part de la graduation $2$ de l'axe vertical, on rejoint la droite horizontalement, puis on descend jusqu'à l'axe horizontal : on lit $x = 2{,}5$.
Par le calcul : $2x - 3 = 2$ donne $2x = 5$, donc $x = 2{,}5$.`
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
mettre [y] à ((2 * x) − 3)
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
    tourner à droite de 72 degrés
\`\`\`

1. Quelle figure obtient-on ? Justifier.
2. Calculer la longueur totale du tracé.
3. Quelles modifications faut-il apporter au script pour tracer un hexagone régulier de côté $60$ pas ?
4. Nina veut tracer un triangle équilatéral : elle écrit « répéter 3 fois », « avancer de 60 pas » et « tourner à droite de 60 degrés ». Obtient-elle un triangle ? Corriger son script en justifiant.`,
      solution: `**1.** Le lutin trace $5$ segments de même longueur, en tournant à chaque fois du même angle de $72^\\circ$ ; au total il tourne de $5 \\times 72 = 360^\\circ$ et revient à son point de départ. On obtient un **pentagone régulier** de côté $60$ pas.

**2.** $5 \\times 60 = 300$ pas.

**3.** Il faut « répéter 6 fois » et « tourner à droite de 60 degrés » (car $360 \\div 6 = 60$).

**4.** Non : en tournant de $60^\\circ$ trois fois, le lutin ne tourne que de $180^\\circ$ au total et la figure ne se referme pas. L'angle dont il faut tourner est l'angle « extérieur » $180 - 60 = 120^\\circ$ (et $3 \\times 120 = 360$). Il faut écrire « tourner à droite de 120 degrés ».`
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
      title: "Pour aller plus loin : déboguer le jeu du nombre mystère",
      difficulty: 3,
      points: 5,
      statement: `**Pour aller plus loin** (boucle « répéter jusqu'à ce que », travaillée en 3e).

Léna a programmé un jeu : l'ordinateur choisit un nombre entier au hasard entre $1$ et $100$ et le joueur doit le deviner. Voici son script :

\`\`\`scratch
quand drapeau cliqué
mettre [mystère] à (nombre aléatoire entre (1) et (100))
répéter jusqu'à ce que (réponse = mystère)
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
        mettre [prix] à (5 + (2 * (m − 1)))
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

**4.** On remplace « dire Colis refusé » par « mettre prix à ((5 + (2 * (m − 1))) + 10) » suivi de l'affichage du prix (ou on déplace le « dire » après le grand bloc « si … sinon »). Pour $12$ kg : $5 + 2 \\times 11 + 10 = 37$ €.`
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
    tourner à droite de 90 degrés
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
      statement: `Dans Scratch, le bloc « ( ) modulo ( ) » donne le **reste de la division euclidienne** du premier nombre par le second. Par exemple, $17$ modulo $5$ vaut $2$, car $17 = 3 \\times 5 + 2$. On considère le script suivant :

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
      title: "Pour aller plus loin : les rebonds de la balle",
      difficulty: 3,
      points: 5,
      statement: `**Pour aller plus loin** (boucle « répéter jusqu'à ce que », travaillée en 3e).

On lâche une balle d'une hauteur de $200$ cm. À chaque rebond, elle remonte aux $\\dfrac{6}{10}$ de la hauteur précédente. Le script suivant compte les rebonds :

\`\`\`scratch
quand drapeau cliqué
mettre [hauteur] à (200)
mettre [rebonds] à (0)
répéter jusqu'à ce que ((hauteur) < (10))
    mettre [hauteur] à (((hauteur) * (6)) / (10))
    ajouter 1 à [rebonds]
dire (rebonds)
\`\`\`

1. Quelle est la valeur de la variable hauteur après le premier passage dans la boucle ?
2. Recopier et compléter un tableau donnant les valeurs de hauteur et de rebonds après chaque passage dans la boucle, jusqu'à l'arrêt.
3. Qu'affiche le lutin à la fin ? Interpréter ce nombre.
4. Zoé remplace la condition par « répéter jusqu'à ce que (hauteur = 0) ». Que se passe-t-il ? Justifier.
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
      statement: `On rappelle que le bloc Scratch « ( ) modulo ( ) » donne le **reste de la division euclidienne** du premier nombre par le second. Par exemple, $20$ modulo $6$ vaut $2$, car $20 = 3 \\times 6 + 2$ ; et $18$ modulo $6$ vaut $0$, car $6$ divise $18$. On considère le script suivant :

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
4. Pour quels nombres entiers compris entre $20$ et $30$ le lutin affiche-t-il $2$ ? Comment appelle-t-on ces nombres ?
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

**4.** Le lutin dit $2$ pour les nombres qui ont exactement deux diviseurs, $1$ et eux-mêmes. Ce sont les **nombres premiers**. Entre $20$ et $30$ : $20 = 2 \\times 10$, $21 = 3 \\times 7$, $22 = 2 \\times 11$, $24$, $25 = 5 \\times 5$, $26$, $27 = 3 \\times 9$, $28$, $30$ ont d'autres diviseurs. Il reste **$23$ et $29$**, les deux nombres premiers compris entre $20$ et $30$.

**5.** Le script additionne alors les diviseurs de $n$ : il calcule la **somme des diviseurs** de $n$.
Pour $6$ : $1 + 2 + 3 + 6 = 12$. Pour $28$ (diviseurs $1$, $2$, $4$, $7$, $14$, $28$) : $1 + 2 + 4 + 7 + 14 + 28 = 56$.`
    },
    {
      id: "4A1-ds-13",
      title: "Le thermostat",
      difficulty: 1,
      points: 4,
      statement: `Un lutin joue le rôle d'un thermostat. On considère le script suivant :

\`\`\`scratch
quand drapeau cliqué
demander [Quelle est la température en degrés ?] et attendre
mettre [température] à (réponse)
si ((température) < (19)) alors
    dire [Chauffage allumé]
sinon
    si ((température) > (24)) alors
        dire [Ouvrez les fenêtres]
    sinon
        dire [Température idéale]
\`\`\`

1. Qu'affiche le lutin si l'on saisit $15$ ? $21$ ? $25$ ?
2. Qu'affiche le lutin si l'on saisit $19$ ? $24$ ? Justifier.
3. Donner tous les nombres entiers pour lesquels le lutin dit « Température idéale ».
4. On veut que le chauffage s'allume aussi lorsque la température vaut exactement $19$ degrés. Proposer une modification de la première condition, en n'utilisant que les opérateurs de Scratch $<$, $>$ et $=$.`,
      solution: `**1.**
- $15$ : la condition $15 < 19$ est vraie, le lutin dit « Chauffage allumé ».
- $21$ : $21 < 19$ est faux, on passe au « sinon » ; $21 > 24$ est faux, le lutin dit « Température idéale ».
- $25$ : $25 < 19$ est faux ; $25 > 24$ est vrai, le lutin dit « Ouvrez les fenêtres ».

**2.**
- $19$ : $19 < 19$ est **faux** ($19$ n'est pas strictement inférieur à $19$) ; $19 > 24$ est faux : le lutin dit « Température idéale ».
- $24$ : $24 < 19$ est faux ; $24 > 24$ est faux : le lutin dit « Température idéale ».

**3.** Le lutin dit « Température idéale » lorsque la température n'est ni strictement inférieure à $19$, ni strictement supérieure à $24$, c'est-à-dire pour les entiers $19$, $20$, $21$, $22$, $23$ et $24$.

**4.** Plusieurs réponses sont possibles :
- remplacer la condition par « $(\\text{température} < 20)$ » (convient pour les températures entières) ;
- ou utiliser le bloc « ou » : « $(\\text{température} < 19)$ ou $(\\text{température} = 19)$ », qui convient pour toutes les températures, même décimales.`
    },
    {
      id: "4A1-ds-14",
      title: "Échanger deux variables",
      difficulty: 2,
      points: 5,
      statement: `Lina veut échanger les valeurs de deux variables $a$ et $b$. Elle écrit le script suivant :

\`\`\`scratch
quand drapeau cliqué
mettre [a] à (5)
mettre [b] à (8)
mettre [a] à (b)
mettre [b] à (a)
dire (regrouper (a) et (regrouper [ et ] et (b)))
\`\`\`

1. Recopier et compléter le tableau donnant les valeurs de $a$ et de $b$ après chacune des quatre instructions « mettre ».

| Après l'instruction | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| $a$ | | | | |
| $b$ | | | | |

2. Qu'affiche le lutin ? Les valeurs ont-elles été échangées ? Expliquer ce qui s'est passé.
3. Lina utilise une troisième variable, nommée « mémoire ». Écrire les trois instructions qui permettent d'échanger correctement les valeurs de $a$ et de $b$.
4. Tom propose une autre méthode, sans troisième variable :

\`\`\`scratch
mettre [a] à ((a) + (b))
mettre [b] à ((a) - (b))
mettre [a] à ((a) - (b))
\`\`\`

En partant de $a = 5$ et $b = 8$, vérifier que la méthode de Tom fonctionne.`,
      solution: `**1.**

| Après l'instruction | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| $a$ | $5$ | $5$ | $8$ | $8$ |
| $b$ | (pas encore fixée) | $8$ | $8$ | $8$ |

**2.** Le lutin dit « 8 et 8 ». Les valeurs n'ont pas été échangées : à l'instruction 3, la valeur $5$ de $a$ est remplacée par $8$, et elle est perdue. À l'instruction 4, $b$ reçoit la nouvelle valeur de $a$, c'est-à-dire $8$.

**3.** On sauvegarde d'abord la valeur de $a$ :
- mettre [mémoire] à (a) : mémoire vaut $5$ ;
- mettre [a] à (b) : $a$ vaut $8$ ;
- mettre [b] à (mémoire) : $b$ vaut $5$.
Les valeurs sont bien échangées.

**4.**
- $a$ prend la valeur $5 + 8 = 13$ ($b$ vaut toujours $8$) ;
- $b$ prend la valeur $13 - 8 = 5$ ;
- $a$ prend la valeur $13 - 5 = 8$.
À la fin, $a = 8$ et $b = 5$ : la méthode de Tom fonctionne.`
    },
    {
      id: "4A1-ds-15",
      title: "Le jeu des trois dés",
      difficulty: 3,
      points: 5,
      statement: `Voici le script d'un petit jeu :

\`\`\`scratch
quand drapeau cliqué
mettre [score] à (0)
répéter 3 fois
    mettre [dé] à (nombre aléatoire entre (1) et (6))
    si ((dé) > (4)) alors
        ajouter 3 à [score]
    sinon
        ajouter -1 à [score]
dire (score)
\`\`\`

Le bloc « nombre aléatoire entre (1) et (6) » donne au hasard un nombre entier compris entre $1$ et $6$, chaque valeur ayant la même probabilité.

1. Les trois nombres tirés sont successivement $6$, $2$ et $5$. Donner la valeur de score après chaque passage dans la boucle, puis ce que dit le lutin.
2. Quelles sont les valeurs de dé qui font gagner $3$ points ? En déduire la probabilité de gagner $3$ points lors d'un passage dans la boucle.
3. Quel est le score le plus élevé possible ? Le score le plus bas possible ?
4. Donner toutes les valeurs que peut prendre le score à la fin du jeu. Justifier.
5. On veut que le score ne devienne jamais négatif. Où faut-il placer le bloc suivant dans le script ? Avec les tirages $1$, $1$, $6$, qu'affiche alors le lutin ?

\`\`\`scratch
si ((score) < (0)) alors
    mettre [score] à (0)
\`\`\``,
      solution: `**1.**
- Passage 1 : dé $= 6$, $6 > 4$ est vrai, score $= 0 + 3 = 3$.
- Passage 2 : dé $= 2$, $2 > 4$ est faux, score $= 3 - 1 = 2$.
- Passage 3 : dé $= 5$, $5 > 4$ est vrai, score $= 2 + 3 = 5$.
Le lutin dit $5$.

**2.** La condition « dé $> 4$ » est vraie pour $5$ et $6$ seulement : $2$ issues favorables sur $6$. La probabilité de gagner $3$ points est $\\dfrac{2}{6} = \\dfrac{1}{3}$.

**3.** Score le plus élevé : trois fois $+3$, soit $9$. Score le plus bas : trois fois $-1$, soit $-3$.

**4.** Tout dépend du nombre de dés supérieurs à $4$ parmi les trois :
- $0$ : $-1 - 1 - 1 = -3$ ;
- $1$ : $3 - 1 - 1 = 1$ ;
- $2$ : $3 + 3 - 1 = 5$ ;
- $3$ : $3 + 3 + 3 = 9$.
Le score final peut valoir $-3$, $1$, $5$ ou $9$ (l'ordre des tirages ne change pas le score final).

**5.** On place ce bloc **dans la boucle**, juste après le bloc « si… alors… sinon… », pour corriger le score à chaque passage.
Avec $1$, $1$, $6$ : score $= -1$, ramené à $0$ ; puis $-1$, ramené à $0$ ; puis $0 + 3 = 3$. Le lutin dit $3$.
(Sans cette correction, il aurait dit $-1 - 1 + 3 = 1$.)`
    },
    {
      id: "4A1-ds-16",
      title: "Le triangle est-il rectangle ?",
      difficulty: 4,
      points: 6,
      statement: `Maël veut programmer un lutin qui indique si un triangle, dont on donne les trois longueurs, est rectangle. Il utilise la réciproque du théorème de Pythagore.

\`\`\`scratch
quand drapeau cliqué
demander [Longueur a ?] et attendre
mettre [a] à (réponse)
demander [Longueur b ?] et attendre
mettre [b] à (réponse)
demander [Longueur c ?] et attendre
mettre [c] à (réponse)
si ((((a) * (a)) + ((b) * (b))) = ((c) * (c))) alors
    dire [Rectangle]
sinon
    dire [Pas rectangle]
\`\`\`

1. Qu'affiche le lutin si l'on saisit $a = 3$, $b = 4$ et $c = 5$ ? Justifier par un calcul.
2. Même question avec $a = 5$, $b = 12$, $c = 13$, puis avec $a = 6$, $b = 7$, $c = 9$.
3. On saisit $a = 5$, $b = 3$ et $c = 4$. Qu'affiche le lutin ? Cette réponse est-elle correcte ? Expliquer le problème.
4. Pour corriger ce défaut, Maël veut que $c$ contienne toujours la plus grande des trois longueurs. Il ajoute, juste avant le test final, les deux blocs suivants :

\`\`\`scratch
si ((a) > (c)) alors
    mettre [mémoire] à (a)
    mettre [a] à (c)
    mettre [c] à (mémoire)
si ((b) > (c)) alors
    mettre [mémoire] à (b)
    mettre [b] à (c)
    mettre [c] à (mémoire)
\`\`\`

   a) Que font les trois instructions du premier bloc ?
   b) Avec $a = 5$, $b = 3$, $c = 4$, donner les valeurs de $a$, $b$ et $c$ après ces deux blocs, puis ce qu'affiche le lutin.
   c) Après ces deux blocs, $c$ contient-il toujours la plus grande longueur ? Justifier.`,
      solution: `**1.** $3 \\times 3 + 4 \\times 4 = 9 + 16 = 25$ et $5 \\times 5 = 25$. L'égalité est vraie : le lutin dit « Rectangle ».

**2.**
- $5 \\times 5 + 12 \\times 12 = 25 + 144 = 169$ et $13 \\times 13 = 169$ : le lutin dit « Rectangle ».
- $6 \\times 6 + 7 \\times 7 = 36 + 49 = 85$ et $9 \\times 9 = 81$. Comme $85 \\neq 81$, le lutin dit « Pas rectangle ». C'est correct : d'après le théorème de Pythagore, si le triangle était rectangle, ce serait en face du plus grand côté, et l'on aurait $85 = 81$.

**3.** $5 \\times 5 + 3 \\times 3 = 34$ et $4 \\times 4 = 16$ : le lutin dit « Pas rectangle ». C'est faux : ce triangle a les mêmes longueurs que celui de la question 1, il est rectangle.
Le problème : le script suppose que $c$ est la plus grande longueur (l'hypoténuse possible). Or ici, la plus grande longueur est $a$.

**4. a)** Si $a$ est plus grand que $c$, ces trois instructions **échangent** les valeurs de $a$ et de $c$ ; la variable mémoire sert à ne pas perdre la valeur de $a$.

**b)** $5 > 4$ est vrai : on échange $a$ et $c$, donc $a = 4$, $b = 3$, $c = 5$. Puis $3 > 5$ est faux : rien ne change.
Test : $4 \\times 4 + 3 \\times 3 = 25 = 5 \\times 5$ : le lutin dit « Rectangle ». La réponse est maintenant correcte.

**c)** Oui. Après le premier bloc, $c$ est supérieur ou égal à $a$ (s'il était plus petit, on les a échangés). Le second bloc compare $b$ et $c$ : si $b$ est plus grand, $c$ prend la valeur de $b$, qui est alors plus grande que les deux autres ; sinon $c$ est déjà supérieur ou égal à $b$. Dans tous les cas, $c$ contient la plus grande des trois longueurs.`
    },
    {
      id: "4A1-ds-17",
      title: "Compléter et remettre un script dans l'ordre",
      difficulty: 1,
      points: 4,
      statement: `Un script doit demander un nombre, le multiplier par $3$, ajouter $4$ au résultat, puis dire le résultat obtenu. Ses blocs ont été mélangés :

\`\`\`scratch
dire (N)
ajouter 4 à [N]
mettre [N] à (réponse)
demander [Choisis un nombre] et attendre
mettre [N] à (N * 3)
\`\`\`

1. Recopier ces blocs dans le bon ordre, sous le bloc « quand drapeau cliqué ».
2. Quel nombre le lutin dit-il si l'on choisit $5$ ? Si l'on choisit $-2$ ?
3. On échange les blocs « mettre [N] à (N * 3) » et « ajouter 4 à [N] ». Quel nombre le lutin dit-il alors si l'on choisit $5$ ?
4. Le lutin doit maintenant dire « Grand » si le résultat est strictement supérieur à $20$, et « Petit » sinon. Recopier et compléter les pointillés de ce bloc, qui remplace le bloc « dire (N) » :

\`\`\`scratch
si (N ... 20) alors
    dire [...]
sinon
    dire [...]
\`\`\``,
      solution: `**1.** On pose d'abord la question : le bloc « réponse » n'a de valeur qu'ensuite. Les calculs se font dans l'ordre de la consigne et le lutin ne parle qu'à la fin.

\`\`\`scratch
quand drapeau cliqué
demander [Choisis un nombre] et attendre
mettre [N] à (réponse)
mettre [N] à (N * 3)
ajouter 4 à [N]
dire (N)
\`\`\`

**2.** Avec $5$ : $5 \\times 3 = 15$, puis $15 + 4 = 19$. Le lutin dit $19$.
Avec $-2$ : $(-2) \\times 3 = -6$, puis $-6 + 4 = -2$. Le lutin dit $-2$.

**3.** Avec $5$ : $5 + 4 = 9$, puis $9 \\times 3 = 27$. Le lutin dit $27$ : l'ordre des blocs change le résultat.

**4.** « Strictement supérieur à $20$ » se traduit par la condition $N > 20$ :

\`\`\`scratch
si (N > 20) alors
    dire [Grand]
sinon
    dire [Petit]
\`\`\``
    },
    {
      id: "4A1-ds-18",
      title: "Un jeu piloté au clavier",
      difficulty: 2,
      points: 5,
      statement: `Noa programme un jeu avec les trois scripts suivants.

**Script 1**

\`\`\`scratch
quand drapeau cliqué
mettre [score] à (0)
mettre [vies] à (3)
\`\`\`

**Script 2**

\`\`\`scratch
quand la touche [a] est pressée
ajouter 10 à [score]
\`\`\`

**Script 3**

\`\`\`scratch
quand la touche [b] est pressée
ajouter -1 à [vies]
si (vies = 0) alors
    dire [Perdu !]
\`\`\`

1. Quel événement lance chacun de ces scripts ?
2. On clique sur le drapeau, puis on appuie successivement sur les touches a, a, b, a, b. Recopier et compléter un tableau donnant les valeurs de score et de vies après chaque événement.
3. À partir du lancement, combien d'appuis sur la touche b faut-il pour que le lutin dise « Perdu ! » ? Justifier.
4. Noa veut qu'à chaque clic sur le lutin, score augmente de $5$ et que le lutin dise la nouvelle valeur de score. Écrire ce quatrième script.
5. Noa déplace le bloc « mettre [score] à (0) » dans le script 2, juste au-dessus du bloc « ajouter 10 à [score] ». Que vaut score après trois appuis sur la touche a ? Expliquer pourquoi c'est une erreur.`,
      solution: `**1.** Le script 1 est lancé par le clic sur le drapeau, le script 2 par un appui sur la touche a, le script 3 par un appui sur la touche b.

**2.** Chaque événement ne lance que son propre script :

| Événement | drapeau | a | a | b | a | b |
|---|---|---|---|---|---|---|
| score | $0$ | $10$ | $20$ | $20$ | $30$ | $30$ |
| vies | $3$ | $3$ | $3$ | $2$ | $2$ | $1$ |

**3.** La variable vies vaut $3$ au lancement et diminue de $1$ à chaque appui sur b. Elle vaut $0$ au troisième appui : il faut **trois appuis**.

**4.**

\`\`\`scratch
quand ce lutin est cliqué
ajouter 5 à [score]
dire (score)
\`\`\`

**5.** À chaque appui sur a, score est remis à $0$, puis augmente de $10$ : il vaut donc $10$ après chaque appui, et encore $10$ après trois appuis. Les points ne s'accumulent plus. L'initialisation ne doit être faite qu'une fois : elle doit rester dans le script lancé par le drapeau.`
    },
    {
      id: "4A1-ds-19",
      title: "Écrire un script à partir d'une consigne",
      difficulty: 3,
      points: 6,
      statement: `Une salle de concert pratique les tarifs suivants : $15$ € pour une personne de moins de $18$ ans et $25$ € pour les autres. On veut écrire un programme qui :

- demande le nombre de personnes d'un groupe ;
- demande l'âge de chaque personne ;
- dit le prix total à payer par le groupe.

1. Quelles variables faut-il créer ? Préciser le rôle de chacune.
2. Écrire le script complet, en commençant par le bloc « quand drapeau cliqué ».
3. Exécuter le script à la main pour un groupe de trois personnes âgées de $12$, $40$ et $18$ ans. Quel prix le lutin dit-il ?
4. Le groupe bénéficie d'une réduction de $10$ € si le total dépasse strictement $100$ €. Quels blocs faut-il ajouter, et à quel endroit du script ? Expliquer ce qui se passerait, pour un groupe de $6$ adultes, si ces blocs étaient placés à l'intérieur de la boucle.`,
      solution: `**1.** Trois variables suffisent : nombre (le nombre de personnes du groupe), âge (l'âge de la personne en cours) et total (la somme à payer, qui doit valoir $0$ au départ).

**2.** La saisie de l'âge et le calcul du prix sont répétés pour chaque personne, donc placés dans la boucle. L'initialisation se fait avant la boucle et le lutin ne dit le total qu'après.

\`\`\`scratch
quand drapeau cliqué
mettre [total] à (0)
demander [Combien de personnes ?] et attendre
mettre [nombre] à (réponse)
répéter (nombre) fois
    demander [Quel âge ?] et attendre
    mettre [âge] à (réponse)
    si (âge < 18) alors
        ajouter 15 à [total]
    sinon
        ajouter 25 à [total]
dire (total)
\`\`\`

**3.** On suit la variable total :

| Tour | âge | Condition « âge < 18 » | total |
|---|---|---|---|
| $1$ | $12$ | vraie | $15$ |
| $2$ | $40$ | fausse | $40$ |
| $3$ | $18$ | fausse | $65$ |

Une personne de $18$ ans ne paie pas le tarif réduit, car $18 < 18$ est faux. Le lutin dit $65$.

**4.** On ajoute ces blocs après la boucle, juste avant « dire (total) » :

\`\`\`scratch
si (total > 100) alors
    ajouter -10 à [total]
\`\`\`

Dans la boucle, le test serait refait à chaque tour et la réduction pourrait s'appliquer plusieurs fois. Pour $6$ adultes, le total vaut $100$ après quatre tours. Au cinquième tour, il passe à $125$ puis à $115$ ; au sixième, à $140$ puis à $130$. Le groupe paierait $130$ € au lieu de $6 \\times 25 - 10 = 140$ €.`
    },
    {
      id: "4A1-ds-20",
      title: "Programmer un jeu de déplacement",
      difficulty: 4,
      points: 6,
      statement: `On programme un jeu dans lequel un lutin se déplace sur une ligne. Sa place est repérée par la variable position, qui doit toujours rester comprise entre $-30$ et $30$. Voici les règles :

- au lancement, position vaut $0$ et le lutin dit « C'est parti ! » ;
- à chaque appui sur la flèche droite, position augmente de $10$, sans jamais dépasser $30$ ;
- à chaque appui sur la flèche gauche, position diminue de $10$, sans jamais passer sous $-30$ ;
- à chaque clic sur le lutin, celui-ci dit la valeur de position.

1. Combien de scripts faut-il écrire ? Indiquer l'événement qui lance chacun d'eux.
2. Écrire ces scripts.
3. On clique sur le drapeau, on appuie quatre fois sur la flèche droite, deux fois sur la flèche gauche, puis on clique sur le lutin. Que dit le lutin ? Justifier à l'aide d'un tableau donnant la valeur de position après chaque événement.
4. Karim propose une autre écriture du script de la flèche gauche :

\`\`\`scratch
quand la touche [flèche gauche] est pressée
ajouter -10 à [position]
si (position < -30) alors
    mettre [position] à (-30)
\`\`\`

Cette écriture respecte-t-elle la règle ? Justifier.

5. On ajoute une variable score. Elle vaut $0$ au lancement et augmente de $1$ chaque fois que le joueur arrive sur la position $30$ en appuyant sur la flèche droite ; elle ne change pas s'il s'y trouvait déjà. Indiquer les blocs à ajouter et leur place.`,
      solution: `**1.** Il faut quatre scripts, lancés par : le clic sur le drapeau, un appui sur la flèche droite, un appui sur la flèche gauche, un clic sur le lutin.

**2.**

\`\`\`scratch
quand drapeau cliqué
mettre [position] à (0)
dire [C'est parti !]
\`\`\`

\`\`\`scratch
quand la touche [flèche droite] est pressée
si (position < 30) alors
    ajouter 10 à [position]
\`\`\`

\`\`\`scratch
quand la touche [flèche gauche] est pressée
si (position > -30) alors
    ajouter -10 à [position]
\`\`\`

\`\`\`scratch
quand ce lutin est cliqué
dire (position)
\`\`\`

**3.** Au quatrième appui sur la flèche droite, $30 < 30$ est faux : position ne change pas.

| Événement | drapeau | droite | droite | droite | droite | gauche | gauche |
|---|---|---|---|---|---|---|---|
| position | $0$ | $10$ | $20$ | $30$ | $30$ | $20$ | $10$ |

Le clic sur le lutin lance le dernier script : le lutin dit $10$.

**4.** Oui. Si position vaut au moins $-20$ avant l'appui, elle vaut au moins $-30$ après : la condition est fausse et rien d'autre ne change. Si position vaut $-30$ avant l'appui, elle passe à $-40$ : la condition est vraie et position revient à $-30$. Dans tous les cas, position ne passe jamais sous $-30$ à la fin du script.

**5.** On ajoute « mettre [score] à (0) » dans le script du drapeau, et on complète ainsi le script de la flèche droite :

\`\`\`scratch
quand la touche [flèche droite] est pressée
si (position < 30) alors
    ajouter 10 à [position]
    si (position = 30) alors
        ajouter 1 à [score]
\`\`\`

Le second test est placé dans le premier : si le joueur se trouve déjà à $30$, le premier test est faux, position ne change pas et score non plus.`
    }
  ]
});
