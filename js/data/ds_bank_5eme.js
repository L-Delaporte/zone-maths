/**
 * Banque d'exercices de devoir surveillé — Cinquième (questions ouvertes, corrigés rédigés).
 * Contenus originaux — L'Établi des maths. Programme du cycle 4, attendus de fin de 5e.
 * Schéma : voir scripts/tests/test_ds_banks.js
 */
window.MATHS_DS_BANK = window.MATHS_DS_BANK || {};
Object.assign(window.MATHS_DS_BANK, {
  "5N1": [
    {
      id: "5N1-ds-01",
      title: "Appliquer les priorités opératoires",
      difficulty: 1,
      points: 4,
      statement: `Calculer chacune des expressions suivantes en détaillant les étapes. On ne demande pas de calculatrice.

$$A = 25 - 3 \\times 6 \\qquad B = (25 - 3) \\times 6 \\qquad C = 48 \\div 6 + 2 \\times 5 \\qquad D = 7 + 3 \\times (12 - 2 \\times 4)$$

1. Calculer $A$ et $B$. Pourquoi les résultats sont-ils différents ?
2. Calculer $C$.
3. Calculer $D$.
4. Dire si $A$ est une somme, une différence, un produit ou un quotient. Justifier.`,
      solution: `**1.** Dans $A$, la multiplication est prioritaire sur la soustraction :
$A = 25 - 3 \\times 6 = 25 - 18 = 7$.
Dans $B$, on calcule d'abord entre parenthèses :
$B = (25 - 3) \\times 6 = 22 \\times 6 = 132$.
Les résultats sont différents car les parenthèses changent l'ordre des calculs.

**2.** La division et la multiplication sont prioritaires sur l'addition :
$C = 48 \\div 6 + 2 \\times 5 = 8 + 10 = 18$.

**3.** On commence par les parenthèses, et dans les parenthèses par la multiplication :
$D = 7 + 3 \\times (12 - 8) = 7 + 3 \\times 4 = 7 + 12 = 19$.

**4.** Dans $A$, la dernière opération effectuée est la soustraction $25 - 18$ : $A$ est donc une **différence**.`
    },
    {
      id: "5N1-ds-02",
      title: "Vocabulaire et traduction d'un calcul",
      difficulty: 1,
      points: 4,
      statement: `1. Pour chaque expression, dire s'il s'agit d'une somme, d'une différence, d'un produit ou d'un quotient, puis la calculer.
   a) $E = 3 \\times (8 + 2)$
   b) $F = 3 \\times 8 + 2$
2. Traduire chaque phrase par une expression numérique, puis la calculer.
   a) Le produit de $7$ par la somme de $4$ et de $9$.
   b) La différence entre $50$ et le quotient de $36$ par $4$.
   c) La somme de $15$ et du produit de $6$ par $8$.`,
      solution: `**1. a)** Dans $E$, on calcule d'abord la parenthèse, puis on multiplie : la dernière opération est une multiplication, donc $E$ est un **produit**.
$E = 3 \\times 10 = 30$.

**b)** Dans $F$, on multiplie d'abord, puis on ajoute $2$ : la dernière opération est une addition, donc $F$ est une **somme**.
$F = 24 + 2 = 26$.

**2. a)** « Le produit de $7$ par la somme de $4$ et de $9$ » : $7 \\times (4 + 9) = 7 \\times 13 = 91$.

**b)** « La différence entre $50$ et le quotient de $36$ par $4$ » : $50 - 36 \\div 4 = 50 - 9 = 41$.

**c)** « La somme de $15$ et du produit de $6$ par $8$ » : $15 + 6 \\times 8 = 15 + 48 = 63$.`
    },
    {
      id: "5N1-ds-03",
      title: "La sortie scolaire en car",
      difficulty: 2,
      points: 5,
      statement: `Un collège organise une sortie pour ses $487$ élèves de cinquième. Chaque car peut transporter au maximum $52$ élèves.

1. Effectuer la division euclidienne de $487$ par $52$. Écrire l'égalité correspondante.
2. Combien de cars faut-il réserver pour transporter tous les élèves ? Justifier.
3. Si tous les cars sont remplis au maximum sauf le dernier, combien de places restent vides dans le dernier car ?
4. Un élève affirme : « l'égalité $487 = 52 \\times 9 + 19$ donne aussi la division euclidienne de $487$ par $9$ ». A-t-il raison ? Justifier, puis donner le quotient et le reste de la division euclidienne de $487$ par $9$.`,
      solution: `**1.** $52 \\times 9 = 468$ et $52 \\times 10 = 520 > 487$, donc le quotient est $9$.
Le reste est $487 - 468 = 19$, et $19 < 52$.
$$487 = 52 \\times 9 + 19$$

**2.** Avec $9$ cars complets, on transporte $468$ élèves ; il reste $19$ élèves à transporter. Il faut donc un car de plus : **il faut réserver $10$ cars**.

**3.** Le dernier car transporte $19$ élèves : il reste $52 - 19 = 33$ **places vides**.

**4.** Non : dans une division euclidienne par $9$, le reste doit être strictement inférieur à $9$. Or $19 > 9$.
On a $9 \\times 54 = 486$ et $487 - 486 = 1$, donc $487 = 9 \\times 54 + 1$ avec $1 < 9$ : le quotient est $54$ et le reste est $1$.`
    },
    {
      id: "5N1-ds-04",
      title: "Calculer astucieusement avec la distributivité",
      difficulty: 2,
      points: 5,
      statement: `On rappelle que, pour tous nombres $k$, $a$ et $b$ : $k \\times (a + b) = k \\times a + k \\times b$ et $k \\times (a - b) = k \\times a - k \\times b$.

1. Calculer $25 \\times 104$ en écrivant $104 = 100 + 4$.
2. Calculer $13 \\times 99$ en écrivant $99 = 100 - 1$.
3. Calculer astucieusement, en détaillant :
   a) $G = 7 \\times 36 + 7 \\times 64$
   b) $H = 4{,}5 \\times 17 - 4{,}5 \\times 7$`,
      solution: `**1.** $25 \\times 104 = 25 \\times (100 + 4) = 25 \\times 100 + 25 \\times 4 = 2\\,500 + 100 = 2\\,600$.

**2.** $13 \\times 99 = 13 \\times (100 - 1) = 13 \\times 100 - 13 \\times 1 = 1\\,300 - 13 = 1\\,287$.

**3. a)** On factorise par $7$ : $G = 7 \\times (36 + 64) = 7 \\times 100 = 700$.

**b)** On factorise par $4{,}5$ : $H = 4{,}5 \\times (17 - 7) = 4{,}5 \\times 10 = 45$.`
    },
    {
      id: "5N1-ds-05",
      title: "Rendre la monnaie",
      difficulty: 3,
      points: 5,
      statement: `À la papeterie, Léa achète $3$ cahiers à $2{,}40$ € l'un et $2$ stylos à $1{,}15$ € l'un. Elle paie avec un billet de $20$ €.

1. Écrire **une seule expression** permettant de calculer la somme que l'on doit rendre à Léa.
2. Calculer cette somme en détaillant les étapes.
3. Tom a écrit l'expression $20 - 3 \\times 2{,}40 + 2 \\times 1{,}15$. Calculer son résultat et expliquer son erreur.`,
      solution: `**1.** Le prix total des achats est $3 \\times 2{,}40 + 2 \\times 1{,}15$. Il faut le soustraire en entier de $20$ €, donc avec des parenthèses :
$$R = 20 - (3 \\times 2{,}40 + 2 \\times 1{,}15)$$

**2.** $R = 20 - (7{,}20 + 2{,}30) = 20 - 9{,}50 = 10{,}50$.
On doit rendre **$10{,}50$ €** à Léa.

**3.** Expression de Tom : $20 - 7{,}20 + 2{,}30 = 12{,}80 + 2{,}30 = 15{,}10$.
Tom obtient $15{,}10$ € : sans parenthèses, il soustrait le prix des cahiers mais **ajoute** le prix des stylos au lieu de le soustraire. Il fallait des parenthèses autour du prix total.`
    },
    {
      id: "5N1-ds-06",
      title: "Placer des parenthèses",
      difficulty: 3,
      points: 5,
      statement: `On considère la suite de calculs $3 + 5 \\times 4 - 2$.

1. Calculer $3 + 5 \\times 4 - 2$ en respectant les priorités opératoires.
2. Recopier chaque égalité en ajoutant des parenthèses pour qu'elle soit vraie. Justifier par un calcul.
   a) $3 + 5 \\times 4 - 2 = 13$
   b) $3 + 5 \\times 4 - 2 = 30$
   c) $3 + 5 \\times 4 - 2 = 16$
3. Calculer $K = [12 - (3 + 5)] \\times 2 + 18 \\div (7 - 4)$.`,
      solution: `**1.** La multiplication est prioritaire : $3 + 20 - 2 = 21$.

**2. a)** $3 + 5 \\times (4 - 2) = 3 + 5 \\times 2 = 3 + 10 = 13$.

**b)** $(3 + 5) \\times 4 - 2 = 8 \\times 4 - 2 = 32 - 2 = 30$.

**c)** $(3 + 5) \\times (4 - 2) = 8 \\times 2 = 16$.

**3.** On commence par les parenthèses les plus intérieures :
$K = [12 - 8] \\times 2 + 18 \\div 3 = 4 \\times 2 + 6 = 8 + 6 = 14$.`
    },
    {
      id: "5N1-ds-07",
      title: "Un programme de calcul surprenant",
      difficulty: 4,
      points: 6,
      statement: `On considère le programme de calcul suivant :
- Choisir un nombre.
- Lui ajouter $4$.
- Multiplier le résultat par $3$.
- Soustraire $12$ au résultat obtenu.

1. Vérifier que, si l'on choisit $5$, on obtient $15$.
2. Quel résultat obtient-on en choisissant $2{,}5$ ?
3. Écrire **une seule expression** traduisant le programme lorsque le nombre choisi est $7$, puis la calculer.
4. Zoé remarque : « le résultat est toujours le triple du nombre choisi ». En utilisant la distributivité, expliquer pourquoi elle a raison.`,
      solution: `**1.** $5 + 4 = 9$ ; $9 \\times 3 = 27$ ; $27 - 12 = 15$. On obtient bien $15$.

**2.** $2{,}5 + 4 = 6{,}5$ ; $6{,}5 \\times 3 = 19{,}5$ ; $19{,}5 - 12 = 7{,}5$. On obtient $7{,}5$.

**3.** $(7 + 4) \\times 3 - 12 = 11 \\times 3 - 12 = 33 - 12 = 21$.

**4.** Si l'on note « nombre » le nombre choisi, le programme calcule $(\\text{nombre} + 4) \\times 3 - 12$.
Par distributivité : $(\\text{nombre} + 4) \\times 3 = \\text{nombre} \\times 3 + 4 \\times 3 = \\text{nombre} \\times 3 + 12$.
Donc le résultat est $\\text{nombre} \\times 3 + 12 - 12 = \\text{nombre} \\times 3$ : c'est bien le **triple** du nombre choisi (on retrouve $3 \\times 5 = 15$, $3 \\times 2{,}5 = 7{,}5$ et $3 \\times 7 = 21$).`
    },
    {
      id: "5N1-ds-08",
      title: "Une sortie au cinéma",
      difficulty: 4,
      points: 6,
      statement: `Un groupe va au cinéma : il comprend $12$ adultes et $8$ enfants. Un billet adulte coûte $9{,}50$ € et un billet enfant $6{,}50$ €. Le groupe achète aussi $4$ paquets de pop-corn à $3{,}75$ € l'un.

1. Écrire une seule expression donnant la dépense totale du groupe, puis la calculer.
2. Les $4$ familles du groupe partagent la dépense en parts égales. Combien paie chaque famille ?
3. Le cinéma accorde un tarif de groupe à partir de $20$ personnes : chaque billet (adulte ou enfant) coûte $1$ € de moins. Le pop-corn n'est pas concerné.
   a) Écrire une expression de la nouvelle dépense totale, puis la calculer.
   b) Expliquer à l'aide de la distributivité pourquoi l'économie réalisée est de $20$ €.`,
      solution: `**1.** $T = 12 \\times 9{,}50 + 8 \\times 6{,}50 + 4 \\times 3{,}75 = 114 + 52 + 15 = 181$.
La dépense totale est de **$181$ €**.

**2.** $181 \\div 4 = 45{,}25$. Chaque famille paie **$45{,}25$ €**.

**3. a)** Le groupe compte $12 + 8 = 20$ personnes : il a droit au tarif de groupe.
$T' = 12 \\times (9{,}50 - 1) + 8 \\times (6{,}50 - 1) + 4 \\times 3{,}75 = 12 \\times 8{,}50 + 8 \\times 5{,}50 + 15 = 102 + 44 + 15 = 161$.
La nouvelle dépense est de **$161$ €**.

**b)** Par distributivité, $12 \\times (9{,}50 - 1) = 12 \\times 9{,}50 - 12 \\times 1$ et $8 \\times (6{,}50 - 1) = 8 \\times 6{,}50 - 8 \\times 1$.
L'économie est donc $12 \\times 1 + 8 \\times 1 = 20$ € : $1$ € par billet pour $20$ billets. On vérifie : $181 - 161 = 20$ €.`
    }
  ],
  "5N2": [
    {
      id: "5N2-ds-01",
      title: "Comparer et ranger des nombres relatifs",
      difficulty: 1,
      points: 4,
      statement: `On considère les nombres : $-3$ ; $\\;2$ ; $\\;-0{,}5$ ; $\\;4{,}5$ ; $\\;-7$ ; $\\;0$.

1. Ranger ces nombres dans l'ordre croissant.
2. Donner l'opposé de chacun de ces nombres.
3. Quelle est la distance à zéro du nombre $-7$ ?
4. Recopier et compléter avec $<$ ou $>$, en justifiant :
   a) $-8 \\;\\ldots\\; -12$
   b) $-2{,}5 \\;\\ldots\\; -2{,}05$
   c) $3 \\;\\ldots\\; -15$`,
      solution: `**1.** Les nombres négatifs sont rangés dans l'ordre inverse de leurs distances à zéro :
$$-7 < -3 < -0{,}5 < 0 < 2 < 4{,}5$$

**2.** L'opposé de $-3$ est $3$ ; de $2$ est $-2$ ; de $-0{,}5$ est $0{,}5$ ; de $4{,}5$ est $-4{,}5$ ; de $-7$ est $7$ ; l'opposé de $0$ est $0$.

**3.** La distance à zéro de $-7$ est $7$.

**4. a)** $-8 > -12$ : deux nombres négatifs sont rangés dans l'ordre inverse de leurs distances à zéro, et $8 < 12$.

**b)** $-2{,}5 < -2{,}05$ : les distances à zéro sont $2{,}5$ et $2{,}05$, et $2{,}5 > 2{,}05$.

**c)** $3 > -15$ : un nombre positif est toujours plus grand qu'un nombre négatif.`
    },
    {
      id: "5N2-ds-02",
      title: "Additions et soustractions de relatifs",
      difficulty: 1,
      points: 4,
      statement: `1. Calculer les sommes suivantes :
   a) $(-7) + (-5)$
   b) $(+9) + (-14)$
   c) $(-6{,}5) + (+4)$
   d) $(-13) + (+13)$
2. Transformer chaque soustraction en addition, puis calculer :
   a) $(+3) - (+8)$
   b) $(-4) - (-10)$
   c) $(-2) - (+7)$
   d) $(+5) - (-6)$`,
      solution: `**1. a)** Deux nombres négatifs : on additionne les distances à zéro et on garde le signe $-$ : $(-7) + (-5) = -12$.

**b)** Signes contraires : on soustrait les distances à zéro ($14 - 9 = 5$) et on prend le signe du nombre de plus grande distance à zéro : $(+9) + (-14) = -5$.

**c)** $6{,}5 - 4 = 2{,}5$, signe de $-6{,}5$ : $(-6{,}5) + (+4) = -2{,}5$.

**d)** Deux nombres opposés ont une somme nulle : $(-13) + (+13) = 0$.

**2.** Soustraire un nombre revient à ajouter son opposé.

**a)** $(+3) - (+8) = (+3) + (-8) = -5$.

**b)** $(-4) - (-10) = (-4) + (+10) = +6$.

**c)** $(-2) - (+7) = (-2) + (-7) = -9$.

**d)** $(+5) - (-6) = (+5) + (+6) = +11$.`
    },
    {
      id: "5N2-ds-03",
      title: "Températures du matin",
      difficulty: 2,
      points: 5,
      statement: `Le tableau donne les températures relevées un matin de janvier dans cinq villes.

| Ville | Oslo | Montréal | Paris | Rome | Ottawa |
|---|---|---|---|---|---|
| Température (°C) | $-7$ | $-15$ | $4$ | $11$ | $-18$ |

1. Ranger ces températures de la plus froide à la plus chaude.
2. Calculer l'écart de température entre Paris et Montréal.
3. Quel est le plus grand écart de température entre deux de ces villes ? Justifier par un calcul.
4. Dans la journée, la température d'Oslo baisse encore de $6$ °C, et celle d'Ottawa monte de $9$ °C. Quelles sont les nouvelles températures de ces deux villes ? Laquelle est maintenant la plus froide ?`,
      solution: `**1.** $-18 < -15 < -7 < 4 < 11$ : Ottawa, Montréal, Oslo, Paris, Rome.

**2.** Écart : $4 - (-15) = 4 + 15 = 19$. L'écart est de **$19$ °C**.

**3.** Le plus grand écart est entre la plus chaude (Rome) et la plus froide (Ottawa) :
$11 - (-18) = 11 + 18 = 29$. Le plus grand écart est de **$29$ °C**.

**4.** Oslo : $-7 - 6 = -13$ °C. Ottawa : $-18 + 9 = -9$ °C.
Comme $-13 < -9$, c'est maintenant **Oslo** la plus froide des deux.`
    },
    {
      id: "5N2-ds-04",
      title: "Calculer des suites d'additions et de soustractions",
      difficulty: 2,
      points: 5,
      statement: `1. Calculer astucieusement en regroupant les termes positifs d'une part et les termes négatifs d'autre part :
$$A = (-5) + (+8) + (-12) + (+3) + (-4)$$
2. Simplifier l'écriture de $B = (-3) - (+7) + (-2) - (-9)$ (sans parenthèses), puis calculer $B$.
3. Calculer $C = 7 - 15 + 4 - 9 + 13$ et $D = -2{,}5 + 6 - 3{,}5 - 1$.`,
      solution: `**1.** Termes positifs : $8 + 3 = 11$. Termes négatifs : $(-5) + (-12) + (-4) = -21$.
$A = 11 + (-21) = -10$.

**2.** Soustraire un nombre revient à ajouter son opposé : $B = (-3) + (-7) + (-2) + (+9)$, ce qui s'écrit simplement
$B = -3 - 7 - 2 + 9 = -12 + 9 = -3$.

**3.** $C$ : positifs $7 + 4 + 13 = 24$ ; négatifs $-15 - 9 = -24$ ; donc $C = 24 - 24 = 0$.
$D$ : positifs $6$ ; négatifs $-2{,}5 - 3{,}5 - 1 = -7$ ; donc $D = 6 - 7 = -1$.`
    },
    {
      id: "5N2-ds-05",
      title: "Le plongeur et la mouette",
      difficulty: 3,
      points: 5,
      statement: `Un plongeur se trouve à l'altitude $-18$ m (c'est-à-dire $18$ m sous la surface de la mer). Il remonte de $7$ m, puis redescend de $12$ m, puis remonte de $9$ m.

1. Écrire une seule expression permettant de calculer l'altitude finale du plongeur, puis la calculer.
2. De combien de mètres doit-il ensuite remonter pour atteindre la surface (altitude $0$ m) ?
3. Au même moment, une mouette vole à l'altitude $+25$ m. Quelle distance verticale la sépare du plongeur ?
4. Au cours de sa plongée, quelle a été l'altitude la plus basse atteinte par le plongeur ? Justifier.`,
      solution: `**1.** $-18 + 7 - 12 + 9 = -11 - 12 + 9 = -23 + 9 = -14$.
L'altitude finale du plongeur est **$-14$ m**.

**2.** $0 - (-14) = 14$ : il doit remonter de **$14$ m**.

**3.** $25 - (-14) = 25 + 14 = 39$. La mouette est à **$39$ m** au-dessus du plongeur.

**4.** Altitudes successives : $-18$ m ; $-18 + 7 = -11$ m ; $-11 - 12 = -23$ m ; $-23 + 9 = -14$ m.
L'altitude la plus basse est **$-23$ m** (après la descente de $12$ m).`
    },
    {
      id: "5N2-ds-06",
      title: "Un carré magique avec des relatifs",
      difficulty: 3,
      points: 5,
      statement: `Dans un carré magique, les sommes des nombres de chaque ligne, de chaque colonne et de chacune des deux diagonales sont toutes égales.

| | | |
|---|---|---|
| $-4$ | $\\ldots$ | $0$ |
| $\\ldots$ | $-1$ | $\\ldots$ |
| $-2$ | $\\ldots$ | $2$ |

1. Calculer la somme des nombres de la diagonale qui contient $-4$, $-1$ et $2$.
2. Vérifier que l'autre diagonale donne la même somme.
3. Compléter le carré magique en justifiant chaque calcul.
4. Vérifier les sommes de la deuxième colonne et de la troisième colonne.`,
      solution: `**1.** $(-4) + (-1) + 2 = -5 + 2 = -3$. La somme magique est $-3$.

**2.** $0 + (-1) + (-2) = -3$ : on retrouve bien $-3$.

**3.**
- Ligne 1 : $-4 + \\ldots + 0 = -3$, donc la case manquante vaut $-3 - (-4) = 1$.
- Colonne 1 : $-4 + \\ldots + (-2) = -3$, donc la case vaut $-3 - (-6) = 3$.
- Ligne 3 : $-2 + \\ldots + 2 = -3$, donc la case vaut $-3 - 0 = -3$.
- Ligne 2 : $3 + (-1) + \\ldots = -3$, donc la case vaut $-3 - 2 = -5$.

| | | |
|---|---|---|
| $-4$ | $1$ | $0$ |
| $3$ | $-1$ | $-5$ |
| $-2$ | $-3$ | $2$ |

**4.** Colonne 2 : $1 + (-1) + (-3) = -3$. Colonne 3 : $0 + (-5) + 2 = -3$. Le carré est bien magique.`
    },
    {
      id: "5N2-ds-07",
      title: "Pyramides de nombres relatifs",
      difficulty: 4,
      points: 6,
      statement: `Dans une pyramide de nombres, chaque brique contient la **somme** des deux briques sur lesquelles elle repose.

**Pyramide 1** (de bas en haut) :
- ligne du bas : $-7$ ; $\\;4$ ; $\\;-2$ ; $\\;6$ ;
- deuxième ligne : trois briques à compléter ;
- troisième ligne : deux briques à compléter ;
- sommet : une brique à compléter.

**Pyramide 2** (trois étages) :
- ligne du bas : trois briques, celle de droite contient $-4$, les deux autres sont inconnues ;
- deuxième ligne : la brique de gauche contient $-7$, celle de droite est inconnue ;
- sommet : $-10$.

1. Compléter la pyramide 1 en écrivant les calculs.
2. a) Calculer la brique de droite de la deuxième ligne de la pyramide 2.
   b) En déduire les deux briques manquantes de la ligne du bas.
3. Vérifier la pyramide 2 en recalculant le sommet à partir de la ligne du bas.`,
      solution: `**1.** Deuxième ligne : $(-7) + 4 = -3$ ; $\\;4 + (-2) = 2$ ; $\\;(-2) + 6 = 4$.
Troisième ligne : $(-3) + 2 = -1$ ; $\\;2 + 4 = 6$.
Sommet : $(-1) + 6 = 5$.

**2. a)** Le sommet est la somme des deux briques de la deuxième ligne : $-7 + \\ldots = -10$, donc la brique de droite vaut $-10 - (-7) = -10 + 7 = -3$.

**b)** Brique du milieu du bas : $\\ldots + (-4) = -3$, donc elle vaut $-3 - (-4) = 1$.
Brique de gauche du bas : $\\ldots + 1 = -7$, donc elle vaut $-7 - 1 = -8$.
Ligne du bas : $-8$ ; $1$ ; $-4$.

**3.** Deuxième ligne : $(-8) + 1 = -7$ et $1 + (-4) = -3$ ; sommet : $(-7) + (-3) = -10$. La pyramide est correcte.`
    },
    {
      id: "5N2-ds-08",
      title: "Le relevé de compte",
      difficulty: 4,
      points: 6,
      statement: `Au début du mois, le compte bancaire de Nadia affiche un solde de $125$ €. Voici les opérations du mois, dans l'ordre (un nombre négatif est une dépense, un nombre positif est un versement) :

| Opération | Courses | Virement reçu | Loyer | Facture | Remboursement |
|---|---|---|---|---|---|
| Montant (€) | $-48$ | $+200$ | $-312$ | $-27{,}50$ | $+35$ |

1. Calculer le solde après chaque opération. À quel moment le compte devient-il négatif (« à découvert ») ?
2. Quel est le solde à la fin du mois ?
3. Calculer le total des dépenses et le total des versements, puis retrouver le solde final par un autre calcul.
4. Quelle somme Nadia doit-elle verser pour que son solde soit de $100$ € ?`,
      solution: `**1.** $125 - 48 = 77$ € ; $77 + 200 = 277$ € ; $277 - 312 = -35$ € ; $-35 - 27{,}50 = -62{,}50$ € ; $-62{,}50 + 35 = -27{,}50$ €.
Le compte devient négatif **après le paiement du loyer** (solde $-35$ €).

**2.** Le solde final est de **$-27{,}50$ €**.

**3.** Dépenses : $(-48) + (-312) + (-27{,}50) = -387{,}50$ €. Versements : $200 + 35 = 235$ €.
Solde final : $125 + 235 - 387{,}50 = 360 - 387{,}50 = -27{,}50$ €. On retrouve le même résultat.

**4.** $100 - (-27{,}50) = 100 + 27{,}50 = 127{,}50$. Nadia doit verser **$127{,}50$ €**.`
    }
  ],
  "5N3": [
    {
      id: "5N3-ds-01",
      title: "Fractions égales et simplification",
      difficulty: 1,
      points: 4,
      statement: `1. Simplifier chaque fraction pour la rendre la plus simple possible, en indiquant par quel nombre on divise.
   a) $\\dfrac{18}{24}$
   b) $\\dfrac{35}{49}$
   c) $\\dfrac{45}{60}$
   d) $\\dfrac{72}{108}$
2. Recopier et compléter les égalités :
   a) $\\dfrac{3}{5} = \\dfrac{\\ldots}{20}$
   b) $\\dfrac{7}{4} = \\dfrac{21}{\\ldots}$
   c) $\\dfrac{2}{9} = \\dfrac{10}{\\ldots}$
3. Parmi les fractions de la question 1, lesquelles sont égales entre elles ? Justifier.`,
      solution: `**1.** On divise le numérateur et le dénominateur par un même nombre non nul.

**a)** $\\dfrac{18}{24} = \\dfrac{18 \\div 6}{24 \\div 6} = \\dfrac{3}{4}$.

**b)** $\\dfrac{35}{49} = \\dfrac{35 \\div 7}{49 \\div 7} = \\dfrac{5}{7}$.

**c)** $\\dfrac{45}{60} = \\dfrac{45 \\div 15}{60 \\div 15} = \\dfrac{3}{4}$.

**d)** $\\dfrac{72}{108} = \\dfrac{72 \\div 36}{108 \\div 36} = \\dfrac{2}{3}$ (on peut aussi diviser successivement par $4$ puis par $9$).

**2. a)** $5 \\times 4 = 20$, donc $\\dfrac{3}{5} = \\dfrac{3 \\times 4}{5 \\times 4} = \\dfrac{12}{20}$.

**b)** $7 \\times 3 = 21$, donc $\\dfrac{7}{4} = \\dfrac{7 \\times 3}{4 \\times 3} = \\dfrac{21}{12}$.

**c)** $2 \\times 5 = 10$, donc $\\dfrac{2}{9} = \\dfrac{2 \\times 5}{9 \\times 5} = \\dfrac{10}{45}$.

**3.** $\\dfrac{18}{24}$ et $\\dfrac{45}{60}$ sont égales : elles se simplifient toutes les deux en $\\dfrac{3}{4}$.`
    },
    {
      id: "5N3-ds-02",
      title: "Additionner et soustraire des fractions",
      difficulty: 1,
      points: 4,
      statement: `Calculer et donner le résultat sous la forme d'une fraction la plus simple possible.

1. $A = \\dfrac{3}{7} + \\dfrac{2}{7}$
2. $B = \\dfrac{5}{6} - \\dfrac{1}{3}$
3. $C = \\dfrac{2}{5} + \\dfrac{3}{10}$
4. $D = \\dfrac{7}{4} - \\dfrac{5}{8}$
5. $E = 1 + \\dfrac{2}{3}$`,
      solution: `**1.** Même dénominateur : on additionne les numérateurs. $A = \\dfrac{3 + 2}{7} = \\dfrac{5}{7}$.

**2.** On met au même dénominateur $6$ : $\\dfrac{1}{3} = \\dfrac{2}{6}$. $B = \\dfrac{5}{6} - \\dfrac{2}{6} = \\dfrac{3}{6} = \\dfrac{1}{2}$.

**3.** $\\dfrac{2}{5} = \\dfrac{4}{10}$, donc $C = \\dfrac{4}{10} + \\dfrac{3}{10} = \\dfrac{7}{10}$.

**4.** $\\dfrac{7}{4} = \\dfrac{14}{8}$, donc $D = \\dfrac{14}{8} - \\dfrac{5}{8} = \\dfrac{9}{8}$.

**5.** $1 = \\dfrac{3}{3}$, donc $E = \\dfrac{3}{3} + \\dfrac{2}{3} = \\dfrac{5}{3}$.`
    },
    {
      id: "5N3-ds-03",
      title: "Comparer, ranger et encadrer des fractions",
      difficulty: 2,
      points: 5,
      statement: `1. Comparer les fractions suivantes en justifiant.
   a) $\\dfrac{5}{8}$ et $\\dfrac{3}{4}$
   b) $\\dfrac{7}{9}$ et $\\dfrac{23}{27}$
   c) $\\dfrac{11}{12}$ et $1$
   d) $\\dfrac{13}{10}$ et $\\dfrac{6}{5}$
2. Ranger dans l'ordre croissant : $\\dfrac{2}{3}$ ; $\\dfrac{5}{6}$ ; $\\dfrac{7}{12}$ ; $\\dfrac{3}{4}$.
3. Encadrer $\\dfrac{17}{5}$ entre deux nombres entiers consécutifs.`,
      solution: `**1. a)** $\\dfrac{3}{4} = \\dfrac{6}{8}$ et $5 < 6$, donc $\\dfrac{5}{8} < \\dfrac{3}{4}$.

**b)** $\\dfrac{7}{9} = \\dfrac{21}{27}$ et $21 < 23$, donc $\\dfrac{7}{9} < \\dfrac{23}{27}$.

**c)** Le numérateur $11$ est inférieur au dénominateur $12$, donc $\\dfrac{11}{12} < 1$.

**d)** $\\dfrac{6}{5} = \\dfrac{12}{10}$ et $13 > 12$, donc $\\dfrac{13}{10} > \\dfrac{6}{5}$.

**2.** On écrit toutes les fractions avec le dénominateur $12$ :
$\\dfrac{2}{3} = \\dfrac{8}{12}$ ; $\\dfrac{5}{6} = \\dfrac{10}{12}$ ; $\\dfrac{7}{12}$ ; $\\dfrac{3}{4} = \\dfrac{9}{12}$.
Donc $\\dfrac{7}{12} < \\dfrac{2}{3} < \\dfrac{3}{4} < \\dfrac{5}{6}$.

**3.** $5 \\times 3 = 15$ et $5 \\times 4 = 20$, avec $15 < 17 < 20$, donc $3 < \\dfrac{17}{5} < 4$ (en effet $\\dfrac{17}{5} = 3{,}4$).`
    },
    {
      id: "5N3-ds-04",
      title: "Le quotient et la fraction d'une quantité",
      difficulty: 2,
      points: 5,
      statement: `1. Recopier et compléter avec une fraction :
   a) $7 \\times \\ldots = 3$
   b) $9 \\times \\ldots = 4$
2. Calculer :
   a) les $\\dfrac{3}{4}$ de $36$ € ;
   b) les $\\dfrac{2}{5}$ de $45$ minutes ;
   c) les $\\dfrac{5}{8}$ de $2$ kg (donner le résultat en grammes).
3. Donner l'écriture décimale de $\\dfrac{7}{4}$ et de $\\dfrac{3}{8}$.`,
      solution: `**1. a)** Le nombre qui, multiplié par $7$, donne $3$ est le quotient de $3$ par $7$ : $7 \\times \\dfrac{3}{7} = 3$.

**b)** De même, $9 \\times \\dfrac{4}{9} = 4$.

**2. a)** $36 \\div 4 = 9$ et $9 \\times 3 = 27$ : les $\\dfrac{3}{4}$ de $36$ € font **$27$ €**.

**b)** $45 \\div 5 = 9$ et $9 \\times 2 = 18$ : **$18$ minutes**.

**c)** $2$ kg $= 2\\,000$ g ; $2\\,000 \\div 8 = 250$ et $250 \\times 5 = 1\\,250$ : **$1\\,250$ g**.

**3.** $\\dfrac{7}{4} = 7 \\div 4 = 1{,}75$ et $\\dfrac{3}{8} = 3 \\div 8 = 0{,}375$.`
    },
    {
      id: "5N3-ds-05",
      title: "Le partage du jardin",
      difficulty: 3,
      points: 5,
      statement: `M. Lebrun partage son jardin : $\\dfrac{1}{4}$ de la surface est réservé aux légumes, $\\dfrac{1}{8}$ aux fleurs et le reste est en pelouse.

1. Quelle fraction de la surface du jardin est occupée par les légumes et les fleurs réunis ?
2. Quelle fraction de la surface du jardin est en pelouse ?
3. La pelouse occupe-t-elle plus de la moitié du jardin ? Justifier.
4. Le jardin a une aire de $240$ m². Calculer l'aire de chacune des trois parties, puis vérifier que leur somme vaut bien $240$ m².`,
      solution: `**1.** $\\dfrac{1}{4} + \\dfrac{1}{8} = \\dfrac{2}{8} + \\dfrac{1}{8} = \\dfrac{3}{8}$. Les légumes et les fleurs occupent les $\\dfrac{3}{8}$ du jardin.

**2.** Le jardin entier correspond à $1 = \\dfrac{8}{8}$. Pelouse : $\\dfrac{8}{8} - \\dfrac{3}{8} = \\dfrac{5}{8}$.

**3.** La moitié correspond à $\\dfrac{1}{2} = \\dfrac{4}{8}$. Comme $\\dfrac{5}{8} > \\dfrac{4}{8}$, la pelouse occupe **plus de la moitié** du jardin.

**4.** Légumes : $240 \\div 4 = 60$ m². Fleurs : $240 \\div 8 = 30$ m². Pelouse : $(240 \\div 8) \\times 5 = 150$ m².
Vérification : $60 + 30 + 150 = 240$ m².`
    },
    {
      id: "5N3-ds-06",
      title: "Quelle classe est la plus sportive ?",
      difficulty: 3,
      points: 5,
      statement: `Dans la classe de 5e A, $18$ élèves sur $24$ pratiquent un sport en club. Dans la classe de 5e B, $20$ élèves sur $30$ pratiquent un sport en club.

1. Écrire, pour chaque classe, la proportion d'élèves pratiquant un sport en club sous la forme d'une fraction la plus simple possible.
2. Dans quelle classe la proportion de sportifs est-elle la plus grande ? Justifier.
3. Un élève dit : « C'est la 5e B, car il y a $20$ sportifs, contre $18$ en 5e A. » Que penser de son raisonnement ?
4. Écrire la proportion de sportifs dans l'ensemble des deux classes réunies, sous forme simplifiée.`,
      solution: `**1.** 5e A : $\\dfrac{18}{24} = \\dfrac{3}{4}$ (division par $6$). 5e B : $\\dfrac{20}{30} = \\dfrac{2}{3}$ (division par $10$).

**2.** Au dénominateur $12$ : $\\dfrac{3}{4} = \\dfrac{9}{12}$ et $\\dfrac{2}{3} = \\dfrac{8}{12}$. Comme $\\dfrac{9}{12} > \\dfrac{8}{12}$, la proportion est plus grande en **5e A**.

**3.** Son raisonnement est faux : il compare des effectifs alors que les classes n'ont pas le même nombre d'élèves. Il faut comparer des **proportions**.

**4.** Au total : $18 + 20 = 38$ sportifs sur $24 + 30 = 54$ élèves, soit $\\dfrac{38}{54} = \\dfrac{19}{27}$.`
    },
    {
      id: "5N3-ds-07",
      title: "Des moitiés de moitiés",
      difficulty: 4,
      points: 6,
      statement: `On considère les sommes successives :
$$S_2 = \\dfrac{1}{2} + \\dfrac{1}{4} \\qquad S_3 = \\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8} \\qquad S_4 = \\dfrac{1}{2} + \\dfrac{1}{4} + \\dfrac{1}{8} + \\dfrac{1}{16}$$

1. Calculer $S_2$, $S_3$ et $S_4$ sous forme de fractions.
2. Pour chacune de ces sommes, calculer ce qu'il manque pour atteindre $1$.
3. On ajoute $\\dfrac{1}{32}$ à $S_4$ pour obtenir $S_5$. Prévoir, sans calculer la somme terme à terme, la valeur de $S_5$, puis vérifier.
4. En continuant ainsi (en ajoutant $\\dfrac{1}{64}$, puis $\\dfrac{1}{128}$, …), la somme peut-elle dépasser $1$ ? Expliquer.`,
      solution: `**1.** $S_2 = \\dfrac{2}{4} + \\dfrac{1}{4} = \\dfrac{3}{4}$ ; $\\;S_3 = \\dfrac{6}{8} + \\dfrac{1}{8} = \\dfrac{7}{8}$ ; $\\;S_4 = \\dfrac{14}{16} + \\dfrac{1}{16} = \\dfrac{15}{16}$.

**2.** $1 - \\dfrac{3}{4} = \\dfrac{1}{4}$ ; $\\;1 - \\dfrac{7}{8} = \\dfrac{1}{8}$ ; $\\;1 - \\dfrac{15}{16} = \\dfrac{1}{16}$.
Il manque toujours le dernier terme ajouté.

**3.** Il manquait $\\dfrac{1}{16} = \\dfrac{2}{32}$ ; on ajoute $\\dfrac{1}{32}$, il ne manque plus que $\\dfrac{1}{32}$. Donc $S_5 = \\dfrac{31}{32}$.
Vérification : $S_5 = \\dfrac{15}{16} + \\dfrac{1}{32} = \\dfrac{30}{32} + \\dfrac{1}{32} = \\dfrac{31}{32}$.

**4.** Non : à chaque étape, on ajoute exactement la moitié de ce qu'il manque pour atteindre $1$. Il reste donc toujours l'autre moitié : la somme s'approche de $1$ sans jamais l'atteindre ni le dépasser.`
    },
    {
      id: "5N3-ds-08",
      title: "La cuve d'eau de pluie",
      difficulty: 4,
      points: 6,
      statement: `Une cuve de récupération d'eau de pluie de $54$ litres est pleine. Lundi, on utilise $\\dfrac{1}{3}$ de la capacité de la cuve, mardi $\\dfrac{2}{9}$ et mercredi $\\dfrac{1}{18}$.

1. Quelle fraction de la capacité de la cuve a été utilisée en trois jours ?
2. A-t-on utilisé plus de la moitié de l'eau ? Justifier.
3. Quelle fraction de la capacité reste-t-il dans la cuve ? Combien de litres cela représente-t-il ?
4. Jeudi, on souhaite utiliser $\\dfrac{1}{3}$ de la capacité de la cuve. Est-ce possible sans qu'il pleuve ? Si oui, combien de litres resteront dans la cuve ?`,
      solution: `**1.** On écrit tout avec le dénominateur $18$ : $\\dfrac{1}{3} = \\dfrac{6}{18}$ et $\\dfrac{2}{9} = \\dfrac{4}{18}$.
$\\dfrac{6}{18} + \\dfrac{4}{18} + \\dfrac{1}{18} = \\dfrac{11}{18}$.

**2.** $\\dfrac{1}{2} = \\dfrac{9}{18}$ et $\\dfrac{11}{18} > \\dfrac{9}{18}$ : **oui**, on a utilisé plus de la moitié de l'eau.

**3.** Il reste $\\dfrac{18}{18} - \\dfrac{11}{18} = \\dfrac{7}{18}$ de la cuve.
$54 \\div 18 = 3$ et $3 \\times 7 = 21$ : il reste **$21$ litres**.

**4.** $\\dfrac{1}{3} = \\dfrac{6}{18}$ et $\\dfrac{6}{18} < \\dfrac{7}{18}$ : c'est **possible**.
On utilise $54 \\div 3 = 18$ L ; il restera $21 - 18 = 3$ litres (soit $\\dfrac{1}{18}$ de la cuve).`
    }
  ],
  "5N4": [
    {
      id: "5N4-ds-01",
      title: "Écrire et calculer des puissances",
      difficulty: 1,
      points: 4,
      statement: `1. Écrire sous la forme d'une puissance :
   a) $3 \\times 3 \\times 3 \\times 3$
   b) $2 \\times 2 \\times 2 \\times 2 \\times 2$
   c) $7 \\times 7$
2. Calculer : $2^6$ ; $\\;3^3$ ; $\\;11^2$ ; $\\;2^1$.
3. Dans l'écriture $5^3$, comment s'appelle le nombre $3$ ? Que signifie $5^3$ ? Calculer $5^3$.`,
      solution: `**1. a)** $3 \\times 3 \\times 3 \\times 3 = 3^4$ ($4$ facteurs égaux à $3$).

**b)** $2 \\times 2 \\times 2 \\times 2 \\times 2 = 2^5$.

**c)** $7 \\times 7 = 7^2$ (« $7$ au carré »).

**2.** $2^6 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 64$ ; $\\;3^3 = 3 \\times 3 \\times 3 = 27$ ; $\\;11^2 = 11 \\times 11 = 121$ ; $\\;2^1 = 2$.

**3.** Le nombre $3$ est l'**exposant**. $5^3$ est le produit de $3$ facteurs égaux à $5$ : $5^3 = 5 \\times 5 \\times 5 = 125$.`
    },
    {
      id: "5N4-ds-02",
      title: "Les carrés à connaître",
      difficulty: 1,
      points: 4,
      statement: `1. Calculer de tête : $8^2$ ; $\\;12^2$ ; $\\;9^2$ ; $\\;6^2$.
2. Trouver le nombre entier positif dont le carré vaut :
   a) $49$
   b) $144$
   c) $121$
3. Calculer et comparer en justifiant :
   a) $4^2$ et $4 \\times 2$
   b) $2^3$ et $3^2$`,
      solution: `**1.** $8^2 = 64$ ; $\\;12^2 = 144$ ; $\\;9^2 = 81$ ; $\\;6^2 = 36$.

**2. a)** $7^2 = 49$ : le nombre est $7$.

**b)** $12^2 = 144$ : le nombre est $12$.

**c)** $11^2 = 121$ : le nombre est $11$.

**3. a)** $4^2 = 4 \\times 4 = 16$ et $4 \\times 2 = 8$ : $4^2 > 4 \\times 2$. Il ne faut pas confondre « au carré » et « fois $2$ ».

**b)** $2^3 = 2 \\times 2 \\times 2 = 8$ et $3^2 = 3 \\times 3 = 9$ : $2^3 < 3^2$. L'ordre du nombre et de l'exposant compte.`
    },
    {
      id: "5N4-ds-03",
      title: "Priorités opératoires avec des puissances",
      difficulty: 2,
      points: 5,
      statement: `On rappelle que les puissances sont calculées avant les multiplications, divisions, additions et soustractions (mais après les parenthèses).

1. Calculer :
   a) $A = 3 + 2^4$
   b) $B = (3 + 2)^2$
   c) $C = 2 \\times 5^2$
   d) $D = (2 \\times 5)^2$
2. Calculer $E = 10 - 3^2$ et $F = 2^3 \\times 3^2$.
3. Léo affirme que $(3 + 4)^2 = 3^2 + 4^2$. Vérifier par un calcul s'il a raison.`,
      solution: `**1. a)** $A = 3 + 16 = 19$.

**b)** Parenthèses d'abord : $B = 5^2 = 25$.

**c)** Puissance d'abord : $C = 2 \\times 25 = 50$.

**d)** Parenthèses d'abord : $D = 10^2 = 100$.

**2.** $E = 10 - 9 = 1$ et $F = 8 \\times 9 = 72$.

**3.** $(3 + 4)^2 = 7^2 = 49$ et $3^2 + 4^2 = 9 + 16 = 25$. Comme $49 \\neq 25$, **Léo a tort**.`
    },
    {
      id: "5N4-ds-04",
      title: "Une population de bactéries",
      difficulty: 2,
      points: 5,
      statement: `Au début d'une expérience, on place $1$ bactérie dans un milieu favorable. Le nombre de bactéries double toutes les heures.

1. Recopier et compléter le tableau.

| Nombre d'heures | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| Nombre de bactéries | $1$ | $2$ | | | | |

2. Écrire le nombre de bactéries au bout de $5$ heures sous la forme d'une puissance de $2$.
3. Combien y a-t-il de bactéries au bout de $10$ heures ?
4. Au bout de combien d'heures le nombre de bactéries dépasse-t-il $1\\,000$ pour la première fois ? Justifier.`,
      solution: `**1.** On multiplie par $2$ à chaque heure : $1$ ; $2$ ; $4$ ; $8$ ; $16$ ; $32$.

**2.** Au bout de $5$ heures : $2 \\times 2 \\times 2 \\times 2 \\times 2 = 2^5 = 32$ bactéries.

**3.** Au bout de $10$ heures : $2^{10} = 1\\,024$ bactéries.

**4.** $2^9 = 512 < 1\\,000$ et $2^{10} = 1\\,024 > 1\\,000$. Le nombre de bactéries dépasse $1\\,000$ pour la première fois **au bout de $10$ heures**.`
    },
    {
      id: "5N4-ds-05",
      title: "La chaîne de messages",
      difficulty: 3,
      points: 5,
      statement: `Sacha envoie un message à $3$ amis (étape 1). À l'étape 2, chacun de ces amis le transfère à $3$ nouvelles personnes, et ainsi de suite : à chaque étape, chaque personne qui vient de recevoir le message le transfère à $3$ personnes qui ne l'ont pas encore reçu.

1. Combien de personnes reçoivent le message à l'étape 2 ? à l'étape 3 ?
2. Exprimer le nombre de personnes qui reçoivent le message à l'étape 5 sous forme d'une puissance de $3$, puis le calculer.
3. Combien de personnes au total (sans compter Sacha) ont reçu le message à la fin de l'étape 4 ?
4. À partir de quelle étape plus de $2\\,000$ nouvelles personnes reçoivent-elles le message ? Justifier.`,
      solution: `**1.** Étape 2 : $3 \\times 3 = 3^2 = 9$ personnes. Étape 3 : $9 \\times 3 = 3^3 = 27$ personnes.

**2.** Étape 5 : $3^5 = 3 \\times 3 \\times 3 \\times 3 \\times 3 = 243$ personnes.

**3.** Étape 4 : $3^4 = 81$ personnes. Total : $3 + 9 + 27 + 81 = 120$ personnes.

**4.** $3^6 = 729 < 2\\,000$ et $3^7 = 2\\,187 > 2\\,000$. C'est **à partir de l'étape 7** que plus de $2\\,000$ nouvelles personnes reçoivent le message.`
    },
    {
      id: "5N4-ds-06",
      title: "Carrés et aires",
      difficulty: 3,
      points: 5,
      statement: `1. Un carré a une aire de $81$ cm². Quelle est la longueur de son côté ? Calculer son périmètre.
2. On considère deux carrés de côtés $5$ cm et $12$ cm.
   a) Calculer la somme de leurs aires.
   b) Existe-t-il un carré dont l'aire est égale à cette somme et dont le côté est un nombre entier de centimètres ? Si oui, préciser son côté.
3. Un carré a pour côté $5$ cm. On double la longueur de son côté. Par combien son aire est-elle multipliée ? Justifier.`,
      solution: `**1.** On cherche le nombre dont le carré vaut $81$ : $9^2 = 81$. Le côté mesure **$9$ cm** et le périmètre vaut $4 \\times 9 = 36$ cm.

**2. a)** $5^2 + 12^2 = 25 + 144 = 169$ cm².

**b)** $13^2 = 169$ : **oui**, un carré de côté **$13$ cm** a une aire de $169$ cm².

**3.** Aire du carré de côté $5$ cm : $5^2 = 25$ cm². Aire du carré de côté $10$ cm : $10^2 = 100$ cm².
$100 \\div 25 = 4$ : l'aire est multipliée par **$4$** (et non par $2$).`
    },
    {
      id: "5N4-ds-07",
      title: "Comparer des puissances",
      difficulty: 4,
      points: 6,
      statement: `1. Calculer puis comparer :
   a) $2^5$ et $5^2$
   b) $2^4$ et $4^2$
   c) $3^4$ et $4^3$
   d) $2^{10}$ et $10^3$
2. Recopier et compléter le tableau.

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $2^n$ | | | | | | |
| $n^2$ | | | | | | |

3. Pour quelles valeurs de $n$ du tableau a-t-on $2^n > n^2$ ?`,
      solution: `**1. a)** $2^5 = 32$ et $5^2 = 25$ : $2^5 > 5^2$.

**b)** $2^4 = 16$ et $4^2 = 16$ : $2^4 = 4^2$.

**c)** $3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$ et $4^3 = 4 \\times 4 \\times 4 = 64$ : $3^4 > 4^3$.

**d)** $2^{10} = 1\\,024$ et $10^3 = 1\\,000$ : $2^{10} > 10^3$.

**2.**

| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $2^n$ | $2$ | $4$ | $8$ | $16$ | $32$ | $64$ |
| $n^2$ | $1$ | $4$ | $9$ | $16$ | $25$ | $36$ |

**3.** On a $2^n > n^2$ pour $n = 1$, $n = 5$ et $n = 6$. (Pour $n = 2$ et $n = 4$ il y a égalité, et pour $n = 3$ on a $8 < 9$.)`
    },
    {
      id: "5N4-ds-08",
      title: "Les grains sur l'échiquier",
      difficulty: 4,
      points: 6,
      statement: `On pose $1$ grain de riz sur la première case d'une rangée de $8$ cases, $2$ grains sur la deuxième, $4$ sur la troisième, et ainsi de suite : on double à chaque case.

1. Combien de grains y a-t-il sur la $4$e case ? sur la $8$e case ? Écrire ces nombres sous forme de puissances de $2$.
2. Calculer le nombre total de grains sur les $3$ premières cases, puis sur les $4$ premières cases.
3. Comparer chacun de ces totaux à la puissance de $2$ suivante. Quelle remarque peut-on faire ?
4. En utilisant cette remarque, prévoir le nombre total de grains sur les $8$ cases, puis le vérifier par un calcul.`,
      solution: `**1.** Case 1 : $1$ ; case 2 : $2$ ; case 3 : $2^2 = 4$ ; case 4 : $2^3 = 8$ grains.
Case 8 : $2^7 = 128$ grains.

**2.** $1 + 2 + 4 = 7$ grains ; $\\;1 + 2 + 4 + 8 = 15$ grains.

**3.** $7 = 8 - 1 = 2^3 - 1$ et $15 = 16 - 1 = 2^4 - 1$.
Le total est égal à la puissance de $2$ suivante, diminuée de $1$.

**4.** Sur $8$ cases, on prévoit $2^8 - 1 = 256 - 1 = 255$ grains.
Vérification : $1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 = 255$ grains.`
    }
  ],
  "5N5": [
    {
      id: "5N5-ds-01",
      title: "Calculer la valeur d'une expression",
      difficulty: 1,
      points: 4,
      statement: `On considère les trois expressions suivantes :
$$A = 4x - 7 \\qquad B = 2(x + 3) \\qquad C = x^2 + 1$$

1. Calculer $A$, $B$ et $C$ lorsque $x = 5$.
2. Calculer $A$, $B$ et $C$ lorsque $x = 2{,}5$.
3. L'égalité $4x - 7 = 2(x + 3)$ est-elle vraie pour $x = 5$ ? Et pour $x = 6{,}5$ ? Justifier par des calculs.`,
      solution: `**1.** Pour $x = 5$ :
- $A = 4 \\times 5 - 7 = 20 - 7 = 13$ ;
- $B = 2 \\times (5 + 3) = 2 \\times 8 = 16$ ;
- $C = 5^2 + 1 = 25 + 1 = 26$.

**2.** Pour $x = 2{,}5$ :
- $A = 4 \\times 2{,}5 - 7 = 10 - 7 = 3$ ;
- $B = 2 \\times (2{,}5 + 3) = 2 \\times 5{,}5 = 11$ ;
- $C = 2{,}5^2 + 1 = 6{,}25 + 1 = 7{,}25$.

**3.** Pour $x = 5$ : le membre de gauche vaut $13$ et celui de droite vaut $16$. Comme $13 \\neq 16$, l'égalité est **fausse** pour $x = 5$.

Pour $x = 6{,}5$ : $4 \\times 6{,}5 - 7 = 26 - 7 = 19$ et $2 \\times (6{,}5 + 3) = 2 \\times 9{,}5 = 19$. Les deux membres sont égaux : l'égalité est **vraie** pour $x = 6{,}5$.`
    },
    {
      id: "5N5-ds-02",
      title: "Simplifier, réduire et développer",
      difficulty: 1,
      points: 4,
      statement: `1. Écrire chaque expression en supprimant le signe $\\times$ lorsque c'est possible :
   $7 \\times x$ ; $\\quad a \\times b$ ; $\\quad 4 \\times (x + 1)$ ; $\\quad x \\times x$ ; $\\quad 3 \\times x \\times x$.
2. Réduire chaque expression :
   $D = 5x + 3x$ ; $\\quad E = 9a - a$ ; $\\quad F = 2x + 4 + 3x - 1$ ; $\\quad G = 6y + 2 - 6y$.
3. Développer en utilisant la distributivité :
   $H = 3(x + 4)$ ; $\\quad K = 5(2a - 1)$.`,
      solution: `**1.** On peut supprimer le signe $\\times$ devant une lettre ou une parenthèse :
$7 \\times x = 7x$ ; $\\;a \\times b = ab$ ; $\\;4 \\times (x + 1) = 4(x + 1)$ ; $\\;x \\times x = x^2$ ; $\\;3 \\times x \\times x = 3x^2$.

**2.** On regroupe les termes « en $x$ » (ou en $a$, en $y$) d'une part et les nombres d'autre part :
- $D = 5x + 3x = (5 + 3)x = 8x$ ;
- $E = 9a - a = 9a - 1a = 8a$ ;
- $F = 2x + 3x + 4 - 1 = 5x + 3$ ;
- $G = 6y - 6y + 2 = 0 + 2 = 2$.

**3.** D'après la distributivité $k(a + b) = ka + kb$ :
- $H = 3 \\times x + 3 \\times 4 = 3x + 12$ ;
- $K = 5 \\times 2a - 5 \\times 1 = 10a - 5$.`
    },
    {
      id: "5N5-ds-03",
      title: "Un programme de calcul surprenant",
      difficulty: 2,
      points: 5,
      statement: `Voici un programme de calcul :
- Choisir un nombre.
- Lui ajouter $3$.
- Multiplier le résultat par $4$.
- Soustraire $12$ au résultat.

1. Vérifier que, si l'on choisit $5$, on obtient $20$.
2. Quel résultat obtient-on si l'on choisit $2{,}5$ ?
3. On note $x$ le nombre choisi. Écrire, en fonction de $x$, une expression du résultat obtenu.
4. Développer et réduire cette expression. Que remarque-t-on ? Quel nombre faut-il choisir pour obtenir $58$ ?`,
      solution: `**1.** $5 + 3 = 8$ ; $\\;8 \\times 4 = 32$ ; $\\;32 - 12 = 20$. On obtient bien $20$.

**2.** $2{,}5 + 3 = 5{,}5$ ; $\\;5{,}5 \\times 4 = 22$ ; $\\;22 - 12 = 10$. On obtient $10$.

**3.** On ajoute $3$ : $x + 3$ ; on multiplie par $4$ : $4(x + 3)$ ; on soustrait $12$ : le résultat est $4(x + 3) - 12$.

**4.** $4(x + 3) - 12 = 4x + 12 - 12 = 4x$.
Le programme revient à **multiplier le nombre choisi par $4$** (on le vérifie : $4 \\times 5 = 20$ et $4 \\times 2{,}5 = 10$).
Pour obtenir $58$, il faut choisir le nombre $x$ tel que $4x = 58$, soit $x = 58 \\div 4 = 14{,}5$.`
    },
    {
      id: "5N5-ds-04",
      title: "Tester puis résoudre des équations",
      difficulty: 2,
      points: 5,
      statement: `1. Le nombre $3$ est-il solution de l'équation $5x - 4 = 2x + 5$ ? Justifier.
2. Le nombre $2$ est-il solution de cette même équation ? Justifier.
3. Résoudre les équations suivantes en détaillant :
   a) $x + 7 = 15$
   b) $4x = 26$
   c) $x - 2{,}5 = 3$
   d) $3x + 4 = 19$`,
      solution: `**1.** Pour $x = 3$ : $5 \\times 3 - 4 = 15 - 4 = 11$ et $2 \\times 3 + 5 = 6 + 5 = 11$. Les deux membres sont égaux, donc **$3$ est solution** de l'équation.

**2.** Pour $x = 2$ : $5 \\times 2 - 4 = 6$ et $2 \\times 2 + 5 = 9$. Comme $6 \\neq 9$, **$2$ n'est pas solution**.

**3.**
a) $x + 7 = 15$ donc $x = 15 - 7 = 8$. La solution est $8$ (vérification : $8 + 7 = 15$).
b) $4x = 26$ donc $x = 26 \\div 4 = 6{,}5$. La solution est $6{,}5$ (vérification : $4 \\times 6{,}5 = 26$).
c) $x - 2{,}5 = 3$ donc $x = 3 + 2{,}5 = 5{,}5$. La solution est $5{,}5$.
d) $3x + 4 = 19$ donc $3x = 19 - 4 = 15$, puis $x = 15 \\div 3 = 5$. La solution est $5$ (vérification : $3 \\times 5 + 4 = 19$).`
    },
    {
      id: "5N5-ds-05",
      title: "Périmètre et aire d'un rectangle",
      difficulty: 3,
      points: 5,
      statement: `Un rectangle a une largeur de $x$ cm et une longueur qui mesure $5$ cm de plus que sa largeur.

1. Exprimer la longueur du rectangle en fonction de $x$.
2. Montrer que le périmètre du rectangle, en cm, est égal à $4x + 10$.
3. Calculer le périmètre et l'aire du rectangle lorsque $x = 3$.
4. Écrire puis résoudre une équation permettant de trouver la largeur $x$ pour laquelle le périmètre vaut $38$ cm. Donner alors les dimensions du rectangle.`,
      solution: `**1.** La longueur mesure $x + 5$ (en cm).

**2.** Périmètre d'un rectangle : $2 \\times (\\text{longueur} + \\text{largeur})$.
$P = 2 \\times (x + 5 + x) = 2 \\times (2x + 5) = 4x + 10$.

**3.** Pour $x = 3$ : $P = 4 \\times 3 + 10 = 22$ cm.
La longueur vaut $3 + 5 = 8$ cm, donc l'aire vaut $\\mathcal{A} = 8 \\times 3 = 24$ cm².

**4.** On cherche $x$ tel que $4x + 10 = 38$.
$4x = 38 - 10 = 28$, donc $x = 28 \\div 4 = 7$.
La largeur mesure $7$ cm et la longueur $7 + 5 = 12$ cm. Vérification : $2 \\times (12 + 7) = 38$ cm.`
    },
    {
      id: "5N5-ds-06",
      title: "Choisir une formule d'abonnement",
      difficulty: 3,
      points: 5,
      statement: `Une salle d'escalade propose deux formules :
- **Formule A** : $7$ € par séance ;
- **Formule B** : un abonnement annuel de $18$ €, puis $4$ € par séance.

On note $n$ le nombre de séances dans l'année.

1. Exprimer, en fonction de $n$, le prix payé avec la formule A, puis avec la formule B.
2. Calculer le prix payé avec chaque formule pour $10$ séances. Quelle formule est la plus avantageuse ?
3. Pour quel nombre de séances les deux formules coûtent-elles le même prix ? Justifier par un calcul.
4. Jade dispose de $90$ € et choisit la formule B. Combien de séances peut-elle payer ? Justifier en résolvant une équation.`,
      solution: `**1.** Formule A : $P_A = 7n$. Formule B : $P_B = 18 + 4n$.

**2.** Pour $n = 10$ : $P_A = 7 \\times 10 = 70$ € et $P_B = 18 + 4 \\times 10 = 58$ €.
Comme $58 < 70$, la **formule B** est la plus avantageuse pour $10$ séances.

**3.** On teste plusieurs valeurs de $n$ :

| $n$ | $5$ | $6$ | $7$ |
|---|---|---|---|
| $P_A = 7n$ | $35$ | $42$ | $49$ |
| $P_B = 18 + 4n$ | $38$ | $42$ | $46$ |

Pour $n = 6$, les deux formules coûtent $42$ €. (Chaque séance coûte $3$ € de plus avec A, il faut donc $18 \\div 3 = 6$ séances pour compenser l'abonnement.)

**4.** On résout $18 + 4n = 90$ : $4n = 90 - 18 = 72$, donc $n = 72 \\div 4 = 18$.
Jade peut payer **$18$ séances** (vérification : $18 + 4 \\times 18 = 18 + 72 = 90$ €).`
    },
    {
      id: "5N5-ds-07",
      title: "Vrai pour tous les nombres ?",
      difficulty: 4,
      points: 6,
      statement: `Trois élèves affirment des égalités.

- **Tom** : « Pour n'importe quel nombre $x$, on a $3(x + 2) - x = 2(x + 3)$. »
- **Zoé** : « Pour n'importe quel nombre $x$, on a $2(x + 1) = 2x + 1$. »
- **Lina** : « Pour n'importe quel nombre $x$, on a $x + x^2 = 2x^2$. J'ai vérifié avec $x = 1$ et ça marche ! »

1. Tester l'égalité de Tom pour $x = 4$.
2. Démontrer que Tom a raison, en développant et en réduisant chaque membre.
3. Montrer, à l'aide d'un exemple, que Zoé a tort.
4. a) Vérifier que l'égalité de Lina est vraie pour $x = 1$.
   b) Lina a-t-elle raison ? Justifier.`,
      solution: `**1.** Pour $x = 4$ : $3 \\times (4 + 2) - 4 = 18 - 4 = 14$ et $2 \\times (4 + 3) = 14$. L'égalité est vraie pour $x = 4$.

**2.** Membre de gauche : $3(x + 2) - x = 3x + 6 - x = 2x + 6$.
Membre de droite : $2(x + 3) = 2x + 6$.
Les deux membres s'écrivent $2x + 6$ : ils sont égaux **pour tout nombre $x$**. Tom a raison.

**3.** Pour $x = 0$ : $2 \\times (0 + 1) = 2$ mais $2 \\times 0 + 1 = 1$. Comme $2 \\neq 1$, l'égalité est fausse pour $x = 0$ : un seul contre-exemple suffit à prouver que **Zoé a tort**. (En effet $2(x + 1) = 2x + 2$.)

**4.** a) Pour $x = 1$ : $1 + 1^2 = 1 + 1 = 2$ et $2 \\times 1^2 = 2$. L'égalité est vraie pour $x = 1$.
b) Pour $x = 2$ : $2 + 2^2 = 2 + 4 = 6$ mais $2 \\times 2^2 = 2 \\times 4 = 8$. Comme $6 \\neq 8$, l'égalité est fausse pour $x = 2$ : **Lina a tort**. Un exemple qui marche ne suffit pas à prouver qu'une égalité est toujours vraie.`
    },
    {
      id: "5N5-ds-08",
      title: "Le partage de la cagnotte",
      difficulty: 4,
      points: 6,
      statement: `Trois frères se partagent une cagnotte de $64$ €. Le deuxième reçoit $4$ € de plus que le premier et le troisième reçoit le double de ce que reçoit le premier.
On note $x$ la somme, en euros, reçue par le premier frère.

1. Exprimer en fonction de $x$ la somme reçue par le deuxième frère, puis par le troisième.
2. Montrer que la somme totale reçue par les trois frères peut s'écrire $4x + 4$.
3. Écrire une équation traduisant le problème, puis la résoudre.
4. Combien chaque frère reçoit-il ? Vérifier la réponse.`,
      solution: `**1.** Le deuxième frère reçoit $x + 4$ (en €) et le troisième reçoit $2x$ (en €).

**2.** Somme totale : $x + (x + 4) + 2x = x + x + 2x + 4 = 4x + 4$.

**3.** La cagnotte vaut $64$ €, donc $4x + 4 = 64$.
$4x = 64 - 4 = 60$, puis $x = 60 \\div 4 = 15$.

**4.** Le premier frère reçoit $15$ €, le deuxième $15 + 4 = 19$ €, le troisième $2 \\times 15 = 30$ €.
Vérification : $15 + 19 + 30 = 64$ € ; on a bien $19 = 15 + 4$ et $30 = 2 \\times 15$.`
    }
  ],
  "5G1": [
    {
      id: "5G1-ds-01",
      title: "Points sur une droite graduée",
      difficulty: 1,
      points: 4,
      statement: `Sur une droite graduée d'origine $O$, on place les points suivants :
$$A(-3) \\qquad B(2{,}5) \\qquad C(-1{,}5) \\qquad D(4)$$

1. Tracer une droite graduée (unité : $1$ cm) et y placer les points $A$, $B$, $C$ et $D$.
2. Ranger les abscisses de ces quatre points dans l'ordre croissant.
3. Quel est le point le plus proche de l'origine $O$ ? Justifier.
4. Calculer la distance $AB$, puis l'abscisse du milieu $M$ du segment $[AD]$.`,
      solution: `**1.** On trace une droite, on place l'origine $O$ puis on reporte $1$ cm par unité : $A$ à $3$ cm à gauche de $O$, $C$ à $1{,}5$ cm à gauche, $B$ à $2{,}5$ cm à droite et $D$ à $4$ cm à droite.

**2.** $-3 < -1{,}5 < 2{,}5 < 4$, donc dans l'ordre croissant : $A$, $C$, $B$, $D$.

**3.** Les distances à l'origine sont $OA = 3$, $OB = 2{,}5$, $OC = 1{,}5$ et $OD = 4$. La plus petite est $OC = 1{,}5$ : le point le plus proche de $O$ est **$C$**.

**4.** $A$ et $B$ sont de part et d'autre de $O$ : $AB = 3 + 2{,}5 = 5{,}5$ unités, soit $5{,}5$ cm.
$AD = 3 + 4 = 7$ unités ; le milieu $M$ est à $7 \\div 2 = 3{,}5$ unités de $A$, vers la droite : son abscisse est $-3 + 3{,}5 = 0{,}5$.`
    },
    {
      id: "5G1-ds-02",
      title: "Lire des coordonnées",
      difficulty: 1,
      points: 4,
      statement: `Dans le repère orthogonal ci-dessous (une graduation pour une unité sur chaque axe), on a placé six points.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 320 320" width="320" height="320" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="20.0" y1="20.0" x2="20.0" y2="300.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="20.0" y1="20.0" x2="300.0" y2="20.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="48.0" y1="20.0" x2="48.0" y2="300.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="20.0" y1="48.0" x2="300.0" y2="48.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="76.0" y1="20.0" x2="76.0" y2="300.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="20.0" y1="76.0" x2="300.0" y2="76.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="104.0" y1="20.0" x2="104.0" y2="300.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="20.0" y1="104.0" x2="300.0" y2="104.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="132.0" y1="20.0" x2="132.0" y2="300.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="20.0" y1="132.0" x2="300.0" y2="132.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="160.0" y1="20.0" x2="160.0" y2="300.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="20.0" y1="160.0" x2="300.0" y2="160.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="188.0" y1="20.0" x2="188.0" y2="300.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="20.0" y1="188.0" x2="300.0" y2="188.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="216.0" y1="20.0" x2="216.0" y2="300.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="20.0" y1="216.0" x2="300.0" y2="216.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="244.0" y1="20.0" x2="244.0" y2="300.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="20.0" y1="244.0" x2="300.0" y2="244.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="272.0" y1="20.0" x2="272.0" y2="300.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="20.0" y1="272.0" x2="300.0" y2="272.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="300.0" y1="20.0" x2="300.0" y2="300.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="20.0" y1="300.0" x2="300.0" y2="300.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="6.0" y1="160.0" x2="314.0" y2="160.0" stroke="currentColor" stroke-width="1.6" /><line x1="160.0" y1="314.0" x2="160.0" y2="6.0" stroke="currentColor" stroke-width="1.6" /><text x="151.0" y="177.0" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="currentColor" text-anchor="middle">O</text><text x="188.0" y="177.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">1</text><text x="150.0" y="137.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">1</text><line x1="239.0" y1="99.0" x2="249.0" y2="109.0" stroke="currentColor" stroke-width="2" /><line x1="239.0" y1="109.0" x2="249.0" y2="99.0" stroke="currentColor" stroke-width="2" /><text x="255.0" y="96.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A</text><line x1="43.0" y1="127.0" x2="53.0" y2="137.0" stroke="currentColor" stroke-width="2" /><line x1="43.0" y1="137.0" x2="53.0" y2="127.0" stroke="currentColor" stroke-width="2" /><text x="59.0" y="124.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B</text><line x1="99.0" y1="239.0" x2="109.0" y2="249.0" stroke="currentColor" stroke-width="2" /><line x1="99.0" y1="249.0" x2="109.0" y2="239.0" stroke="currentColor" stroke-width="2" /><text x="115.0" y="236.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">C</text><line x1="155.0" y1="43.0" x2="165.0" y2="53.0" stroke="currentColor" stroke-width="2" /><line x1="155.0" y1="53.0" x2="165.0" y2="43.0" stroke="currentColor" stroke-width="2" /><text x="171.0" y="40.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">D</text><line x1="267.0" y1="211.0" x2="277.0" y2="221.0" stroke="currentColor" stroke-width="2" /><line x1="267.0" y1="221.0" x2="277.0" y2="211.0" stroke="currentColor" stroke-width="2" /><text x="283.0" y="208.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">E</text><line x1="71.0" y1="155.0" x2="81.0" y2="165.0" stroke="currentColor" stroke-width="2" /><line x1="71.0" y1="165.0" x2="81.0" y2="155.0" stroke="currentColor" stroke-width="2" /><text x="87.0" y="152.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">F</text></svg></div>

1. Lire les coordonnées des points $A$, $B$, $C$, $D$, $E$ et $F$.
2. Quel point se trouve sur l'axe des abscisses ? Lequel se trouve sur l'axe des ordonnées ?
3. Quel point a une abscisse négative et une ordonnée positive ?
4. Placer sur la figure le point $G(-1 ; -4)$.`,
      solution: `**1.** On lit d'abord l'abscisse (axe horizontal), puis l'ordonnée (axe vertical) :
$A(3 ; 2)$, $\\;B(-4 ; 1)$, $\\;C(-2 ; -3)$, $\\;D(0 ; 4)$, $\\;E(4 ; -2)$, $\\;F(-3 ; 0)$.

**2.** Un point de l'axe des abscisses a une ordonnée nulle : c'est **$F$**. Un point de l'axe des ordonnées a une abscisse nulle : c'est **$D$**.

**3.** Abscisse négative et ordonnée positive : c'est le point **$B(-4 ; 1)$**.

**4.** À partir de l'origine, on se déplace de $1$ unité vers la gauche, puis de $4$ unités vers le bas : on place $G$ (une unité à droite et une unité en dessous du point $C$).`
    },
    {
      id: "5G1-ds-03",
      title: "Un quadrilatère dans un repère",
      difficulty: 2,
      points: 5,
      statement: `Dans un repère orthogonal d'unité $1$ cm, placer les points :
$$A(-2 ; 1) \\qquad B(3 ; 1) \\qquad C(3 ; -2) \\qquad D(-2 ; -2)$$

1. Faire la figure et tracer le quadrilatère $ABCD$.
2. Quelle semble être la nature de $ABCD$ ? Justifier à l'aide des coordonnées.
3. Calculer les longueurs $AB$ et $BC$, puis le périmètre et l'aire de $ABCD$.
4. Donner les coordonnées du centre $K$ de ce quadrilatère (point d'intersection de ses diagonales).`,
      solution: `**1.** Voir la figure : les quatre points sont placés en lisant l'abscisse sur l'axe horizontal puis l'ordonnée sur l'axe vertical.

**2.** $A$ et $B$ ont la même ordonnée $1$ : $[AB]$ est horizontal ; de même $[DC]$ (ordonnée $-2$). $B$ et $C$ ont la même abscisse $3$ : $[BC]$ est vertical ; de même $[AD]$ (abscisse $-2$). Les côtés sont donc perpendiculaires deux à deux : **$ABCD$ est un rectangle**.

**3.** $AB = 3 - (-2) = 5$ cm et $BC = 1 - (-2) = 3$ cm.
Périmètre : $2 \\times (5 + 3) = 16$ cm. Aire : $5 \\times 3 = 15$ cm².

**4.** Les diagonales d'un rectangle se coupent en leur milieu. Le milieu de $[AC]$ a pour abscisse le nombre à mi-chemin entre $-2$ et $3$, soit $0{,}5$, et pour ordonnée le nombre à mi-chemin entre $1$ et $-2$, soit $-0{,}5$.
Donc $K(0{,}5 ; -0{,}5)$.`
    },
    {
      id: "5G1-ds-04",
      title: "La chasse au trésor",
      difficulty: 2,
      points: 5,
      statement: `Sur la carte d'une île, munie d'un repère orthogonal d'origine $O$ (une unité = $100$ m), le capitaine part de $O$ et suit les instructions :
- Étape 1 : $3$ unités vers l'ouest (gauche) puis $4$ unités vers le nord (haut) : il arrive au point $P$.
- Étape 2 : $5$ unités vers l'est (droite) puis $1$ unité vers le sud (bas) : il arrive au point $Q$.
- Étape 3 : $6$ unités vers le sud : il arrive au point $R$.
- Étape 4 : $4$ unités vers l'ouest : il arrive au trésor $T$.

1. Donner les coordonnées des points $P$, $Q$, $R$ et $T$.
2. Placer ces points dans un repère et tracer le trajet.
3. Quelle distance réelle, en mètres, le capitaine a-t-il parcourue en tout ?
4. Un perroquet vole en ligne droite de $Q$ à $R$. Quelle distance parcourt-il, en mètres ?`,
      solution: `**1.** On ajoute les déplacements vers la droite (et on retranche vers la gauche) à l'abscisse, ceux vers le haut à l'ordonnée :
- $P(0 - 3 ; 0 + 4)$, soit $P(-3 ; 4)$ ;
- $Q(-3 + 5 ; 4 - 1)$, soit $Q(2 ; 3)$ ;
- $R(2 ; 3 - 6)$, soit $R(2 ; -3)$ ;
- $T(2 - 4 ; -3)$, soit $T(-2 ; -3)$.

**2.** On place les points et on trace la ligne brisée $O \\to P \\to Q \\to R \\to T$ en suivant les lignes du quadrillage.

**3.** Nombre total d'unités : $3 + 4 + 5 + 1 + 6 + 4 = 23$ unités, soit $23 \\times 100 = 2\\,300$ m.

**4.** $Q$ et $R$ ont la même abscisse : la distance $QR$ est $3 - (-3) = 6$ unités, soit $600$ m.`
    },
    {
      id: "5G1-ds-05",
      title: "Symétriques dans un repère",
      difficulty: 3,
      points: 5,
      statement: `Dans un repère orthogonal d'origine $O$, on considère le point $A(3 ; 2)$.

1. Placer $A$, puis construire :
   a) le point $B$, symétrique de $A$ par rapport à l'axe des ordonnées ;
   b) le point $C$, symétrique de $A$ par rapport à l'origine $O$ ;
   c) le point $D$, symétrique de $A$ par rapport à l'axe des abscisses.
2. Donner les coordonnées de $B$, $C$ et $D$.
3. Quelle est la nature du quadrilatère $ABCD$ ? Calculer son aire (en unités d'aire).
4. Sans faire de figure, donner les coordonnées du symétrique du point $M(-1{,}5 ; 4)$ par rapport à l'origine. Expliquer la règle utilisée.`,
      solution: `**1.** Voir la figure.

**2.** Le symétrique par rapport à l'axe des ordonnées change le signe de l'abscisse : $B(-3 ; 2)$.
Le symétrique par rapport à l'origine change le signe des deux coordonnées : $C(-3 ; -2)$.
Le symétrique par rapport à l'axe des abscisses change le signe de l'ordonnée : $D(3 ; -2)$.

**3.** $[AB]$ et $[CD]$ sont horizontaux, $[BC]$ et $[DA]$ sont verticaux : $ABCD$ est un **rectangle**.
$AB = 3 - (-3) = 6$ et $AD = 2 - (-2) = 4$, donc l'aire vaut $6 \\times 4 = 24$ unités d'aire.

**4.** $O$ est le milieu du segment joignant un point à son symétrique : les coordonnées sont changées en leurs opposées. Le symétrique de $M(-1{,}5 ; 4)$ est le point $M'(1{,}5 ; -4)$.`
    },
    {
      id: "5G1-ds-06",
      title: "Retrouver la graduation",
      difficulty: 3,
      points: 5,
      statement: `Sur une droite graduée régulièrement, on lit seulement deux abscisses : le point $M$ a pour abscisse $-1{,}4$ et le point $N$ a pour abscisse $0{,}6$. Entre $M$ et $N$, il y a exactement $10$ intervalles de même longueur entre deux graduations consécutives.

1. Quel est le pas de la graduation (la différence d'abscisse entre deux graduations consécutives) ?
2. Le point $P$ est situé $3$ graduations à droite de $N$. Quelle est son abscisse ?
3. Quelle est l'abscisse du point $K$ situé à égale distance de $M$ et de $N$ ?
4. On veut placer le point $Q$ tel que $N$ soit le milieu de $[MQ]$. Déterminer l'abscisse de $Q$.`,
      solution: `**1.** La distance de $M$ à $N$ est $0{,}6 - (-1{,}4) = 0{,}6 + 1{,}4 = 2$. Elle est partagée en $10$ intervalles : le pas vaut $2 \\div 10 = 0{,}2$.

**2.** $P$ a pour abscisse $0{,}6 + 3 \\times 0{,}2 = 0{,}6 + 0{,}6 = 1{,}2$.

**3.** $K$ est le milieu de $[MN]$ : il est à $2 \\div 2 = 1$ de $M$, donc son abscisse est $-1{,}4 + 1 = -0{,}4$. (Vérification : $0{,}6 - 1 = -0{,}4$.)

**4.** Si $N$ est le milieu de $[MQ]$, alors $NQ = MN = 2$, $Q$ étant à droite de $N$. L'abscisse de $Q$ est $0{,}6 + 2 = 2{,}6$.`
    },
    {
      id: "5G1-ds-07",
      title: "Le quatrième sommet",
      difficulty: 4,
      points: 6,
      statement: `Dans un repère orthogonal (unité : $1$ cm), on donne les points $A(-3 ; -1)$, $B(2 ; -1)$ et $C(4 ; 3)$.

1. Placer ces points.
2. On veut placer le point $D$ tel que $ABCD$ soit un parallélogramme. Expliquer comment on passe de $A$ à $B$ sur le quadrillage, puis en déduire les coordonnées de $D$.
3. Calculer l'aire du parallélogramme $ABCD$.
4. Déterminer les coordonnées du centre $I$ du parallélogramme. Vérifier que $I$ est aussi le milieu de $[BD]$.`,
      solution: `**1.** Voir la figure.

**2.** Pour aller de $A$ à $B$, on se déplace de $5$ unités vers la droite (même ordonnée $-1$). Dans un parallélogramme $ABCD$, les côtés $[AB]$ et $[DC]$ sont parallèles et de même longueur : pour aller de $D$ à $C$, on fait le même déplacement. Donc $D$ est $5$ unités à gauche de $C$ : $D(4 - 5 ; 3)$, soit **$D(-1 ; 3)$**.

**3.** La base $[AB]$ mesure $5$ cm. La hauteur correspondante est la distance entre les droites horizontales d'ordonnées $-1$ et $3$, soit $4$ cm.
Aire $= \\text{base} \\times \\text{hauteur} = 5 \\times 4 = 20$ cm².

**4.** Les diagonales d'un parallélogramme se coupent en leur milieu. Milieu de $[AC]$ : abscisse à mi-chemin entre $-3$ et $4$, soit $0{,}5$ ; ordonnée à mi-chemin entre $-1$ et $3$, soit $1$. Donc $I(0{,}5 ; 1)$.
Milieu de $[BD]$ : à mi-chemin entre $2$ et $-1$, on trouve $0{,}5$ ; entre $-1$ et $3$, on trouve $1$. C'est bien le point $I$.`
    },
    {
      id: "5G1-ds-08",
      title: "Des points mystères",
      difficulty: 4,
      points: 6,
      statement: `Dans un repère orthogonal (unité : $1$ cm), on place les points $A(-4 ; 0)$ et $B(4 ; 0)$.

1. Le point $M$ a une abscisse égale au double de son ordonnée, et la somme de ses deux coordonnées est égale à $-9$. Déterminer les coordonnées de $M$.
2. Le point $C$ a une abscisse nulle et une ordonnée non nulle. Expliquer pourquoi le triangle $ABC$ est isocèle en $C$.
3. Déterminer les coordonnées de tous les points $C$ d'abscisse nulle tels que l'aire du triangle $ABC$ soit égale à $12$ cm².`,
      solution: `**1.** Notons $y$ l'ordonnée de $M$ ; son abscisse est $2y$. La somme des coordonnées vaut $2y + y = 3y$, donc $3y = -9$ et $y = -3$. L'abscisse vaut $2 \\times (-3) = -6$.
Donc **$M(-6 ; -3)$**. (Vérification : $-6 + (-3) = -9$ et $-6 = 2 \\times (-3)$.)

**2.** $C$ est sur l'axe des ordonnées. Le milieu de $[AB]$ est l'origine $O(0 ; 0)$ et l'axe des ordonnées est perpendiculaire à $(AB)$ en $O$ : c'est la médiatrice de $[AB]$. Tout point de la médiatrice est à égale distance de $A$ et $B$, donc $CA = CB$ : le triangle $ABC$ est isocèle en $C$.

**3.** La base $[AB]$ mesure $8$ cm et la hauteur issue de $C$ est $[OC]$. Aire $= \\dfrac{8 \\times OC}{2} = 4 \\times OC$.
$4 \\times OC = 12$ donne $OC = 3$ cm. Le point $C$ est à $3$ cm de $O$ sur l'axe des ordonnées : **$C(0 ; 3)$ ou $C(0 ; -3)$**.`
    }
  ],
  "5G2": [
    {
      id: "5G2-ds-01",
      title: "Construire un symétrique",
      difficulty: 1,
      points: 4,
      statement: `On considère un point $O$ et un point $A$ tels que $OA = 3$ cm.

1. Rappeler la définition : « Le point $A'$ est le symétrique du point $A$ par rapport au point $O$ si … ».
2. Expliquer comment construire $A'$ à la règle et au compas, puis calculer la longueur $AA'$.
3. Le point $M'$ est le symétrique d'un point $M$ par rapport à $O$, et $MM' = 9$ cm. Combien mesure $OM$ ?
4. Quel est le symétrique du point $O$ par rapport à lui-même ?`,
      solution: `**1.** Le point $A'$ est le symétrique du point $A$ par rapport au point $O$ si **$O$ est le milieu du segment $[AA']$**.

**2.** On trace la demi-droite $[AO)$. Avec le compas, on prend l'écartement $OA = 3$ cm, on pique en $O$ et on reporte cette longueur sur la demi-droite, de l'autre côté de $O$ : on obtient $A'$.
Comme $O$ est le milieu de $[AA']$ : $AA' = 2 \\times OA = 2 \\times 3 = 6$ cm.

**3.** $O$ est le milieu de $[MM']$, donc $OM = MM' \\div 2 = 9 \\div 2 = 4{,}5$ cm.

**4.** Le symétrique de $O$ par rapport à $O$ est **$O$ lui-même** : le centre de symétrie est le seul point qui est son propre symétrique.`
    },
    {
      id: "5G2-ds-02",
      title: "Ce que conserve la symétrie centrale",
      difficulty: 1,
      points: 4,
      statement: `Le triangle $ABC$ est tel que $AB = 4$ cm, $BC = 6$ cm, $AC = 5$ cm et $\\widehat{ABC} \\approx 56^\\circ$. Le triangle $A'B'C'$ est son symétrique par rapport à un point $O$.

1. Donner, sans les mesurer, les longueurs $A'B'$, $B'C'$ et $A'C'$. Justifier.
2. Calculer le périmètre du triangle $A'B'C'$.
3. Quelle est la mesure de l'angle $\\widehat{A'B'C'}$ ? Justifier.
4. Que peut-on dire des droites $(AB)$ et $(A'B')$ ?`,
      solution: `**1.** La symétrie centrale conserve les longueurs : le segment $[A'B']$ est le symétrique de $[AB]$, donc $A'B' = AB = 4$ cm. De même $B'C' = BC = 6$ cm et $A'C' = AC = 5$ cm.

**2.** Périmètre de $A'B'C'$ : $4 + 6 + 5 = 15$ cm (le même que celui de $ABC$).

**3.** La symétrie centrale conserve les mesures d'angles : $\\widehat{A'B'C'} = \\widehat{ABC} \\approx 56^\\circ$.

**4.** Le symétrique d'une droite par rapport à un point est une droite qui lui est parallèle : **$(A'B')$ est parallèle à $(AB)$**.`
    },
    {
      id: "5G2-ds-03",
      title: "Centres de symétrie",
      difficulty: 2,
      points: 5,
      statement: `1. Parmi les lettres majuscules suivantes, écrites en caractères d'imprimerie, lesquelles ont un centre de symétrie ?
$$\\text{A} \\quad \\text{H} \\quad \\text{E} \\quad \\text{N} \\quad \\text{S} \\quad \\text{T} \\quad \\text{X} \\quad \\text{Z} \\quad \\text{M} \\quad \\text{O}$$
2. Pour chacune des figures suivantes, dire si elle possède un centre de symétrie et, si oui, le préciser : un carré, un triangle équilatéral, un parallélogramme, un cercle, un trapèze isocèle (non parallélogramme), un losange.
3. Les mots « SOS » et « NON » ont-ils un centre de symétrie ? Et le mot « OUI » ? Justifier.`,
      solution: `**1.** Une figure a un centre de symétrie si elle se superpose à elle-même après un demi-tour autour de ce point. Les lettres **H, N, S, X, Z et O** ont un centre de symétrie. A, E, T et M n'en ont pas (après un demi-tour, elles sont « à l'envers »).

**2.**
- Carré : oui, le point d'intersection de ses diagonales.
- Triangle équilatéral : **non** (il a trois axes de symétrie, mais pas de centre de symétrie).
- Parallélogramme : oui, le point d'intersection de ses diagonales.
- Cercle : oui, son centre.
- Trapèze isocèle : **non** (il a seulement un axe de symétrie).
- Losange : oui, le point d'intersection de ses diagonales.

**3.** Après un demi-tour autour du centre du O, « SOS » redevient « SOS » : chaque S est envoyé sur l'autre S et le O sur lui-même. De même pour « NON ». Ces deux mots ont un centre de symétrie (le centre de la lettre du milieu).
Pour « OUI », après un demi-tour, les lettres seraient dans l'ordre I, U, O et le U serait retourné (ouvert vers le bas) : on n'obtient pas « OUI ». Ce mot n'a **pas** de centre de symétrie.`
    },
    {
      id: "5G2-ds-04",
      title: "Symétrie centrale sur quadrillage",
      difficulty: 2,
      points: 5,
      statement: `Dans un repère orthogonal, on considère les points $A(2 ; 3)$, $B(-1 ; 4)$, $C(4 ; -2)$ et $K(1 ; 1)$.

1. Donner les coordonnées des symétriques de $A$ et de $B$ par rapport à l'origine $O$ du repère.
2. a) Placer les points $A$ et $K$. En comptant les carreaux, expliquer comment on passe de $A$ à $K$.
   b) En déduire les coordonnées du point $A'$, symétrique de $A$ par rapport à $K$.
3. Déterminer de même les coordonnées du point $C'$, symétrique de $C$ par rapport à $K$.`,
      solution: `**1.** Par rapport à l'origine, on remplace chaque coordonnée par son opposée : le symétrique de $A$ est $(-2 ; -3)$ et celui de $B$ est $(1 ; -4)$.

**2.** a) Pour aller de $A(2 ; 3)$ à $K(1 ; 1)$, on se déplace de $1$ carreau vers la gauche et de $2$ carreaux vers le bas.
b) $K$ doit être le milieu de $[AA']$ : on refait le même déplacement à partir de $K$. $A'(1 - 1 ; 1 - 2)$, soit **$A'(0 ; -1)$**.

**3.** Pour aller de $C(4 ; -2)$ à $K(1 ; 1)$ : $3$ carreaux vers la gauche et $3$ vers le haut. On recommence à partir de $K$ : $C'(1 - 3 ; 1 + 3)$, soit **$C'(-2 ; 4)$**.`
    },
    {
      id: "5G2-ds-05",
      title: "Deux segments symétriques",
      difficulty: 3,
      points: 5,
      statement: `Les points $A$, $O$, $C$ sont alignés dans cet ordre, ainsi que les points $B$, $O$, $D$, avec $OA = OC$ et $OB = OD$. Les points $A$, $B$, $C$, $D$ ne sont pas alignés. On sait de plus que $AB = 5{,}2$ cm et $\\widehat{OAB} = 38^\\circ$.

1. Faire une figure à main levée codée.
2. Justifier que $C$ est le symétrique de $A$ et que $D$ est le symétrique de $B$ par rapport à $O$.
3. En déduire la longueur $CD$ et la mesure de l'angle $\\widehat{OCD}$.
4. Démontrer que les droites $(AB)$ et $(CD)$ sont parallèles.`,
      solution: `**1.** Figure à main levée : deux segments $[AC]$ et $[BD]$ qui se coupent en $O$, avec les codages $OA = OC$ et $OB = OD$.

**2.** $A$, $O$, $C$ sont alignés et $OA = OC$ : $O$ est le milieu de $[AC]$, donc $C$ est le symétrique de $A$ par rapport à $O$. De même, $O$ est le milieu de $[BD]$, donc $D$ est le symétrique de $B$ par rapport à $O$.

**3.** Le segment $[CD]$ est le symétrique du segment $[AB]$ par rapport à $O$. La symétrie centrale conserve les longueurs : $CD = AB = 5{,}2$ cm.
L'angle $\\widehat{OCD}$ est le symétrique de l'angle $\\widehat{OAB}$ (le symétrique de $O$ est $O$). La symétrie centrale conserve les angles : $\\widehat{OCD} = 38^\\circ$.

**4.** La droite $(CD)$ est la symétrique de la droite $(AB)$ par rapport à $O$. Or le symétrique d'une droite par rapport à un point est une droite parallèle : donc $(AB) \\parallel (CD)$.`
    },
    {
      id: "5G2-ds-06",
      title: "Deux rectangles qui se touchent",
      difficulty: 3,
      points: 5,
      statement: `$ABCD$ est un rectangle tel que $AB = 6$ cm et $BC = 4$ cm. On construit le quadrilatère $A'B'C'D'$, symétrique de $ABCD$ par rapport au point $C$.

1. Quel est le symétrique du point $C$ ? Justifier.
2. Quelle est la nature de $A'B'C'D'$ ? Donner ses dimensions.
3. Les points $A$, $C$ et $A'$ sont-ils alignés ? Justifier.
4. La figure formée par les deux rectangles a-t-elle un centre de symétrie ? Calculer son aire totale.`,
      solution: `**1.** $C$ est le centre de symétrie : son symétrique est **$C$ lui-même** ($C' = C$).

**2.** La symétrie centrale conserve les longueurs, les angles et le parallélisme : l'image d'un rectangle est un **rectangle de mêmes dimensions**. $A'B' = AB = 6$ cm et $B'C' = BC = 4$ cm.

**3.** $A'$ est le symétrique de $A$ par rapport à $C$, donc $C$ est le milieu de $[AA']$ : les points $A$, $C$ et $A'$ sont **alignés**.

**4.** Oui : par construction, la symétrie de centre $C$ échange les deux rectangles, donc la figure entière se superpose à elle-même par un demi-tour autour de $C$. Le point $C$ est un centre de symétrie de la figure.
Les deux rectangles ont la même aire (la symétrie conserve les aires) et ne se touchent qu'au point $C$ : aire totale $= 2 \\times 6 \\times 4 = 48$ cm².`
    },
    {
      id: "5G2-ds-07",
      title: "Construire un parallélogramme par symétrie",
      difficulty: 4,
      points: 6,
      statement: `$ABC$ est un triangle tel que $AB = 5$ cm, $BC = 7$ cm et $\\widehat{ABC} = 110^\\circ$. On note $O$ le milieu de $[AC]$ et $D$ le symétrique de $B$ par rapport à $O$.

1. Construire la figure en vraie grandeur.
2. Quel est le symétrique de $A$ par rapport à $O$ ? Celui de $C$ ?
3. En déduire, en justifiant, les longueurs $CD$ et $DA$, puis la mesure de l'angle $\\widehat{CDA}$.
4. Démontrer que $ABCD$ est un parallélogramme, puis calculer son périmètre.`,
      solution: `**1.** On trace $[BC]$ de $7$ cm, l'angle de $110^\\circ$ en $B$, puis $[BA]$ de $5$ cm. On place $O$, milieu de $[AC]$, puis $D$ sur la demi-droite $[BO)$ avec $OD = OB$.

**2.** $O$ est le milieu de $[AC]$ : le symétrique de $A$ par rapport à $O$ est $C$, et celui de $C$ est $A$.

**3.** Par la symétrie de centre $O$ : $A \\mapsto C$, $B \\mapsto D$, $C \\mapsto A$.
- $[AB]$ a pour image $[CD]$, donc $CD = AB = 5$ cm (conservation des longueurs) ;
- $[BC]$ a pour image $[DA]$, donc $DA = BC = 7$ cm ;
- l'angle $\\widehat{ABC}$ a pour image l'angle $\\widehat{CDA}$, donc $\\widehat{CDA} = 110^\\circ$ (conservation des angles).

**4.** $O$ est le milieu de $[AC]$ et de $[BD]$ : les diagonales du quadrilatère $ABCD$ se coupent en leur milieu, donc **$ABCD$ est un parallélogramme**.
Périmètre : $5 + 7 + 5 + 7 = 24$ cm.`
    },
    {
      id: "5G2-ds-08",
      title: "Retrouver le centre de symétrie",
      difficulty: 4,
      points: 6,
      statement: `Dans un repère orthogonal, le point $A'(5 ; -4)$ est le symétrique du point $A(1 ; 2)$ par rapport à un point $O'$ inconnu.

1. Expliquer pourquoi $O'$ est le milieu de $[AA']$, puis déterminer ses coordonnées.
2. Déterminer les coordonnées du point $B'$, symétrique de $B(-2 ; 0)$ par rapport à $O'$.
3. Démontrer que le quadrilatère $ABA'B'$ est un parallélogramme.
4. Existe-t-il un point du plan qui soit son propre symétrique par rapport à $O'$ ? Justifier.`,
      solution: `**1.** Par définition, $A'$ est le symétrique de $A$ par rapport à $O'$ signifie que $O'$ est le milieu de $[AA']$.
L'abscisse de $O'$ est à mi-chemin entre $1$ et $5$ : c'est $3$. L'ordonnée est à mi-chemin entre $2$ et $-4$ : c'est $-1$. Donc **$O'(3 ; -1)$**.

**2.** Pour aller de $B(-2 ; 0)$ à $O'(3 ; -1)$, on se déplace de $5$ unités vers la droite et de $1$ unité vers le bas. On recommence à partir de $O'$ : $B'(3 + 5 ; -1 - 1)$, soit **$B'(8 ; -2)$**.

**3.** Les diagonales $[AA']$ et $[BB']$ du quadrilatère $ABA'B'$ ont le même milieu $O'$. Un quadrilatère dont les diagonales se coupent en leur milieu est un parallélogramme : **$ABA'B'$ est un parallélogramme**.

**4.** Oui, un seul : le centre $O'$ lui-même. Pour tout autre point $M$, son symétrique $M'$ vérifie $O'M' = O'M \\neq 0$ et se trouve de l'autre côté de $O'$, donc $M' \\neq M$.`
    }
  ],
  "5G3": [
    {
      id: "5G3-ds-01",
      title: "Calculer des angles dans des triangles",
      difficulty: 1,
      points: 4,
      statement: `Dans chaque cas, calculer la mesure demandée en justifiant.

1. $ABC$ est un triangle tel que $\\widehat{BAC} = 47^\\circ$ et $\\widehat{ABC} = 68^\\circ$. Calculer $\\widehat{ACB}$.
2. $DEF$ est un triangle isocèle en $D$ tel que $\\widehat{EDF} = 40^\\circ$. Calculer $\\widehat{DEF}$ et $\\widehat{DFE}$.
3. $GHI$ est un triangle équilatéral. Quelle est la mesure de chacun de ses angles ?
4. $JKL$ est un triangle rectangle en $J$ tel que $\\widehat{JKL} = 35^\\circ$. Calculer $\\widehat{JLK}$.`,
      solution: `**1.** La somme des angles d'un triangle est égale à $180^\\circ$ :
$\\widehat{ACB} = 180^\\circ - (47^\\circ + 68^\\circ) = 180^\\circ - 115^\\circ = 65^\\circ$.

**2.** $DEF$ est isocèle en $D$, donc ses angles à la base sont égaux : $\\widehat{DEF} = \\widehat{DFE}$.
$\\widehat{DEF} + \\widehat{DFE} = 180^\\circ - 40^\\circ = 140^\\circ$, donc $\\widehat{DEF} = \\widehat{DFE} = 140^\\circ \\div 2 = 70^\\circ$.

**3.** Les trois angles d'un triangle équilatéral sont égaux : chacun mesure $180^\\circ \\div 3 = 60^\\circ$.

**4.** $\\widehat{KJL} = 90^\\circ$, donc $\\widehat{JLK} = 180^\\circ - (90^\\circ + 35^\\circ) = 55^\\circ$.`
    },
    {
      id: "5G3-ds-02",
      title: "Vocabulaire des angles",
      difficulty: 1,
      points: 4,
      statement: `Sur la figure ci-dessous, les droites $(d_1)$ et $(d_2)$ sont coupées par la sécante $(\\Delta)$ en $A$ et en $B$. Les huit angles formés sont numérotés de $1$ à $8$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:420px;"><svg class="geo-svg-figure" viewBox="0 0 430 260" width="430" height="260" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="30.0" y1="70.0" x2="400.0" y2="70.0" stroke="currentColor" stroke-width="1.8" /><line x1="30.0" y1="190.0" x2="400.0" y2="190.0" stroke="currentColor" stroke-width="1.8" /><line x1="116.7" y1="239.9" x2="263.3" y2="20.1" stroke="currentColor" stroke-width="1.8" /><text x="395.0" y="62.0" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">(d₁)</text><text x="395.0" y="182.0" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">(d₂)</text><text x="281.3" y="25.1" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">(Δ)</text><text x="218.7" y="53.8" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">1</text><text x="251.2" y="63.7" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">2</text><text x="241.3" y="96.2" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">3</text><text x="208.8" y="86.3" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">4</text><text x="138.7" y="173.8" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">5</text><text x="171.2" y="183.7" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">6</text><text x="161.3" y="216.2" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">7</text><text x="128.8" y="206.3" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">8</text><text x="196.0" y="63.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="116.0" y="183.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B</text><circle cx="230" cy="70" r="2.5" fill="currentColor"/><circle cx="150" cy="190" r="2.5" fill="currentColor"/></svg></div>

1. Citer deux paires d'angles alternes-internes.
2. Citer quatre paires d'angles correspondants.
3. Citer deux paires d'angles opposés par le sommet ayant pour sommet $A$.
4. On sait maintenant que $(d_1) \\parallel (d_2)$ et que l'angle $2$ mesure $55^\\circ$. Donner la mesure de chacun des huit angles en justifiant.`,
      solution: `**1.** Les angles alternes-internes sont situés entre les deux droites et de part et d'autre de la sécante : **$3$ et $5$** ; **$4$ et $6$**.

**2.** Les angles correspondants sont situés du même côté de la sécante, l'un au-dessus de $(d_1)$, l'autre au-dessus de $(d_2)$ (ou tous deux en dessous) : **$1$ et $5$** ; **$2$ et $6$** ; **$3$ et $7$** ; **$4$ et $8$**.

**3.** **$1$ et $3$** ; **$2$ et $4$**.

**4.** L'angle $4$ est opposé par le sommet à l'angle $2$, donc il mesure $55^\\circ$. Les angles $1$ et $2$ forment un angle plat : l'angle $1$ mesure $180^\\circ - 55^\\circ = 125^\\circ$, et l'angle $3$, opposé à l'angle $1$, mesure aussi $125^\\circ$.
Comme $(d_1) \\parallel (d_2)$, deux angles correspondants ont la même mesure : angle $5$ = angle $1$ = $125^\\circ$ ; angle $6$ = angle $2$ = $55^\\circ$ ; angle $7$ = angle $3$ = $125^\\circ$ ; angle $8$ = angle $4$ = $55^\\circ$.
Bilan : les angles $2$, $4$, $6$, $8$ mesurent $55^\\circ$ ; les angles $1$, $3$, $5$, $7$ mesurent $125^\\circ$.`
    },
    {
      id: "5G3-ds-03",
      title: "Parallèles ou non ?",
      difficulty: 2,
      points: 5,
      statement: `Dans chaque cas, deux droites $(d)$ et $(d')$ sont coupées par une sécante $(\\Delta)$.

1. Deux angles alternes-internes mesurent tous les deux $72^\\circ$. Les droites $(d)$ et $(d')$ sont-elles parallèles ? Justifier.
2. Deux angles correspondants mesurent respectivement $64^\\circ$ et $66^\\circ$. Les droites $(d)$ et $(d')$ sont-elles parallèles ? Justifier.
3. On sait que $(d) \\parallel (d')$ et qu'un angle $\\widehat{1}$ formé par $(d)$ et $(\\Delta)$ mesure $115^\\circ$.
   a) Quelle est la mesure de l'angle alterne-interne à l'angle $\\widehat{1}$ ? Justifier.
   b) Quelle est la mesure d'un angle adjacent à $\\widehat{1}$ formant avec lui un angle plat ?`,
      solution: `**1.** Propriété : si deux droites coupées par une sécante forment deux angles alternes-internes de même mesure, alors ces droites sont parallèles. Ici, les deux angles mesurent $72^\\circ$, donc **$(d) \\parallel (d')$**.

**2.** Si $(d)$ et $(d')$ étaient parallèles, les angles correspondants auraient la même mesure. Or $64^\\circ \\neq 66^\\circ$ : les droites **ne sont pas parallèles** (elles sont sécantes, même si cela se voit peu sur une figure).

**3.** a) Propriété : si deux droites parallèles sont coupées par une sécante, alors les angles alternes-internes ont la même mesure. L'angle alterne-interne à $\\widehat{1}$ mesure donc $115^\\circ$.
b) Deux angles qui forment un angle plat ont une somme de $180^\\circ$ : l'angle adjacent mesure $180^\\circ - 115^\\circ = 65^\\circ$.`
    },
    {
      id: "5G3-ds-04",
      title: "Triangles isocèles",
      difficulty: 2,
      points: 5,
      statement: `1. $ABC$ est un triangle isocèle en $A$ tel que $\\widehat{ABC} = 52^\\circ$. Calculer $\\widehat{ACB}$ puis $\\widehat{BAC}$.
2. $DEF$ est un triangle isocèle en $D$ tel que $\\widehat{EDF} = 110^\\circ$. Calculer les deux autres angles.
3. Léo affirme : « J'ai construit un triangle isocèle dont les deux angles à la base mesurent $95^\\circ$. » Est-ce possible ? Justifier.
4. Un triangle $RST$ est isocèle en $R$ et $\\widehat{RST} = 45^\\circ$. Quelle est la nature précise de ce triangle ? Justifier.`,
      solution: `**1.** $ABC$ est isocèle en $A$, donc ses angles à la base sont égaux : $\\widehat{ACB} = \\widehat{ABC} = 52^\\circ$.
La somme des angles vaut $180^\\circ$ : $\\widehat{BAC} = 180^\\circ - 2 \\times 52^\\circ = 180^\\circ - 104^\\circ = 76^\\circ$.

**2.** $\\widehat{DEF} = \\widehat{DFE}$ (triangle isocèle en $D$) et $\\widehat{DEF} + \\widehat{DFE} = 180^\\circ - 110^\\circ = 70^\\circ$.
Donc $\\widehat{DEF} = \\widehat{DFE} = 70^\\circ \\div 2 = 35^\\circ$.

**3.** Les deux angles à la base auraient une somme de $2 \\times 95^\\circ = 190^\\circ$, ce qui dépasse déjà $180^\\circ$, la somme des trois angles d'un triangle. **C'est impossible.**

**4.** $\\widehat{RTS} = \\widehat{RST} = 45^\\circ$ (angles à la base). Donc $\\widehat{SRT} = 180^\\circ - 2 \\times 45^\\circ = 90^\\circ$.
Le triangle $RST$ est **rectangle et isocèle en $R$**.`
    },
    {
      id: "5G3-ds-05",
      title: "Démontrer que la somme des angles vaut 180°",
      difficulty: 3,
      points: 5,
      statement: `$ABC$ est un triangle tel que $\\widehat{BAC} = 50^\\circ$ et $\\widehat{ABC} = 60^\\circ$. On trace la droite $(d)$ passant par $A$ et parallèle à $(BC)$. On place sur $(d)$ deux points $M$ et $N$, de part et d'autre de $A$, avec $M$ du côté de $B$ et $N$ du côté de $C$.

1. Faire une figure à main levée.
2. Démontrer que $\\widehat{MAB} = 60^\\circ$.
3. Démontrer de même que $\\widehat{NAC} = \\widehat{ACB}$.
4. En utilisant l'angle plat $\\widehat{MAN}$, calculer $\\widehat{NAC}$, puis en déduire $\\widehat{ACB}$. Vérifier que la somme des angles du triangle $ABC$ est $180^\\circ$.`,
      solution: `**1.** Figure : le triangle $ABC$ avec $[BC]$ en bas, et la droite $(d)$ horizontale passant par $A$ en haut, $M$ à gauche (côté $B$) et $N$ à droite (côté $C$).

**2.** Les droites $(d)$ et $(BC)$ sont parallèles et coupées par la sécante $(AB)$. Les angles $\\widehat{MAB}$ et $\\widehat{ABC}$ sont alternes-internes. Or, si deux droites parallèles sont coupées par une sécante, les angles alternes-internes ont la même mesure : $\\widehat{MAB} = \\widehat{ABC} = 60^\\circ$.

**3.** De même, avec la sécante $(AC)$ : $\\widehat{NAC}$ et $\\widehat{ACB}$ sont alternes-internes, donc $\\widehat{NAC} = \\widehat{ACB}$.

**4.** $M$, $A$, $N$ sont alignés, donc $\\widehat{MAB} + \\widehat{BAC} + \\widehat{NAC} = 180^\\circ$.
$\\widehat{NAC} = 180^\\circ - 60^\\circ - 50^\\circ = 70^\\circ$, donc $\\widehat{ACB} = 70^\\circ$.
Vérification : $\\widehat{BAC} + \\widehat{ABC} + \\widehat{ACB} = 50^\\circ + 60^\\circ + 70^\\circ = 180^\\circ$.`
    },
    {
      id: "5G3-ds-06",
      title: "Une parallèle dans un triangle",
      difficulty: 3,
      points: 5,
      statement: `$ABC$ est un triangle tel que $\\widehat{BAC} = 45^\\circ$ et $\\widehat{ABC} = 65^\\circ$. Le point $E$ est sur le segment $[AB]$ et le point $F$ sur le segment $[AC]$, de sorte que les droites $(EF)$ et $(BC)$ sont parallèles.

1. Calculer $\\widehat{ACB}$.
2. Démontrer que $\\widehat{AEF} = 65^\\circ$.
3. Calculer $\\widehat{AFE}$ de deux façons différentes.
4. Calculer $\\widehat{BEF}$.`,
      solution: `**1.** Dans le triangle $ABC$ : $\\widehat{ACB} = 180^\\circ - (45^\\circ + 65^\\circ) = 70^\\circ$.

**2.** Les droites $(EF)$ et $(BC)$ sont parallèles et coupées par la sécante $(AB)$. Les angles $\\widehat{AEF}$ et $\\widehat{ABC}$ sont correspondants. Si deux droites parallèles sont coupées par une sécante, les angles correspondants ont la même mesure : $\\widehat{AEF} = \\widehat{ABC} = 65^\\circ$.

**3.** Première façon : avec la sécante $(AC)$, les angles $\\widehat{AFE}$ et $\\widehat{ACB}$ sont correspondants, donc $\\widehat{AFE} = 70^\\circ$.
Deuxième façon : dans le triangle $AEF$, $\\widehat{AFE} = 180^\\circ - (45^\\circ + 65^\\circ) = 70^\\circ$.

**4.** $A$, $E$, $B$ sont alignés, donc $\\widehat{AEF}$ et $\\widehat{BEF}$ forment un angle plat : $\\widehat{BEF} = 180^\\circ - 65^\\circ = 115^\\circ$.`
    },
    {
      id: "5G3-ds-07",
      title: "L'angle en zigzag",
      difficulty: 4,
      points: 6,
      statement: `Sur la figure ci-dessous (qui n'est pas à l'échelle), les droites $(d_1)$ et $(d_2)$ sont parallèles. Le point $A$ est sur $(d_1)$, le point $B$ sur $(d_2)$, et le point $M$ est situé entre les deux droites. On sait que $\\widehat{xAM} = 35^\\circ$ et $\\widehat{yBM} = 50^\\circ$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:420px;"><svg class="geo-svg-figure" viewBox="0 0 430 240" width="430" height="240" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="30.0" y1="60.0" x2="400.0" y2="60.0" stroke="currentColor" stroke-width="1.8" /><line x1="30.0" y1="200.0" x2="400.0" y2="200.0" stroke="currentColor" stroke-width="1.8" /><line x1="90.0" y1="60.0" x2="270.0" y2="130.0" stroke="currentColor" stroke-width="1.8" /><line x1="110.0" y1="200.0" x2="270.0" y2="130.0" stroke="currentColor" stroke-width="1.8" /><circle cx="90" cy="60" r="2.5" fill="currentColor"/><circle cx="110" cy="200" r="2.5" fill="currentColor"/><circle cx="270" cy="130" r="2.5" fill="currentColor"/><text x="86.0" y="50.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="106.0" y="220.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="284.0" y="135.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">M</text><text x="385.0" y="52.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">x</text><text x="385.0" y="222.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">y</text><text x="40.0" y="52.0" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">(d₁)</text><text x="40.0" y="222.0" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">(d₂)</text><text x="165.0" y="78.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">35°</text><text x="180.0" y="192.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">50°</text></svg></div>

On trace la droite $(d_3)$ passant par $M$ et parallèle à $(d_1)$, et on place sur $(d_3)$ un point $z$ à gauche de $M$ (du côté des points $A$ et $B$).

1. Justifier que $(d_3)$ est aussi parallèle à $(d_2)$.
2. Démontrer que $\\widehat{AMz} = 35^\\circ$.
3. Démontrer que $\\widehat{BMz} = 50^\\circ$, puis en déduire la mesure de l'angle $\\widehat{AMB}$.
4. On modifie la figure : on garde $\\widehat{xAM} = 35^\\circ$ mais on veut que l'angle $\\widehat{AMB}$ soit droit. Quelle doit être la mesure de $\\widehat{yBM}$ ?`,
      solution: `**1.** Si deux droites sont parallèles à une même troisième, alors elles sont parallèles entre elles. Ici $(d_3) \\parallel (d_1)$ et $(d_1) \\parallel (d_2)$, donc $(d_3) \\parallel (d_2)$.

**2.** Les droites $(d_1)$ et $(d_3)$ sont parallèles et coupées par la sécante $(AM)$. Les angles $\\widehat{xAM}$ et $\\widehat{AMz}$ sont alternes-internes, donc ils ont la même mesure : $\\widehat{AMz} = 35^\\circ$.

**3.** De même, $(d_2) \\parallel (d_3)$ sont coupées par la sécante $(BM)$ : les angles $\\widehat{yBM}$ et $\\widehat{BMz}$ sont alternes-internes, donc $\\widehat{BMz} = 50^\\circ$.
La demi-droite $[Mz)$ est située entre $[MA)$ et $[MB)$, donc $\\widehat{AMB} = \\widehat{AMz} + \\widehat{zMB} = 35^\\circ + 50^\\circ = 85^\\circ$.

**4.** Le même raisonnement donne $\\widehat{AMB} = \\widehat{xAM} + \\widehat{yBM}$. Pour avoir $90^\\circ$, il faut $\\widehat{yBM} = 90^\\circ - 35^\\circ = 55^\\circ$.`
    },
    {
      id: "5G3-ds-08",
      title: "Le triangle d'or",
      difficulty: 4,
      points: 6,
      statement: `$ABC$ est un triangle isocèle en $A$ tel que $\\widehat{BAC} = 36^\\circ$. La demi-droite qui partage l'angle $\\widehat{ABC}$ en deux angles de même mesure (sa bissectrice) coupe le côté $[AC]$ en $D$.

1. Calculer $\\widehat{ABC}$ et $\\widehat{ACB}$.
2. Calculer $\\widehat{ABD}$ et $\\widehat{DBC}$.
3. Démontrer que le triangle $ABD$ est isocèle. Préciser son sommet principal.
4. Calculer $\\widehat{BDC}$, puis démontrer que le triangle $BCD$ est lui aussi isocèle.
5. Sachant que $BC = 4$ cm, que peut-on dire des longueurs $BD$ et $AD$ ? Justifier.`,
      solution: `**1.** $ABC$ est isocèle en $A$ : $\\widehat{ABC} = \\widehat{ACB}$ et leur somme vaut $180^\\circ - 36^\\circ = 144^\\circ$. Donc $\\widehat{ABC} = \\widehat{ACB} = 72^\\circ$.

**2.** $[BD)$ partage $\\widehat{ABC}$ en deux angles égaux : $\\widehat{ABD} = \\widehat{DBC} = 72^\\circ \\div 2 = 36^\\circ$.

**3.** Dans le triangle $ABD$ : $\\widehat{DAB} = 36^\\circ$ et $\\widehat{ABD} = 36^\\circ$. Il a deux angles de même mesure, donc il est **isocèle en $D$** (le sommet opposé au côté $[AB]$) : $DA = DB$.

**4.** Dans le triangle $BCD$ : $\\widehat{BDC} = 180^\\circ - (\\widehat{DBC} + \\widehat{DCB}) = 180^\\circ - (36^\\circ + 72^\\circ) = 72^\\circ$.
Les angles $\\widehat{BDC}$ et $\\widehat{BCD}$ mesurent tous deux $72^\\circ$ : le triangle $BCD$ est **isocèle en $B$**, donc $BD = BC$.

**5.** D'après la question 4, $BD = BC = 4$ cm, et d'après la question 3, $AD = BD = 4$ cm.`
    }
  ],
  "5G4": [
    {
      id: "5G4-ds-01",
      title: "Triangle constructible ou non ?",
      difficulty: 1,
      points: 4,
      statement: `On donne les longueurs des trois côtés de trois triangles.

| Triangle | Longueurs des côtés |
|---|---|
| $ABC$ | $5$ cm ; $7$ cm ; $10$ cm |
| $DEF$ | $3$ cm ; $4$ cm ; $8$ cm |
| $GHI$ | $4$ cm ; $6$ cm ; $10$ cm |

1. Rappeler l'inégalité triangulaire.
2. Pour chacun des trois triangles, dire s'il est constructible. Justifier par un calcul.
3. L'un de ces « triangles » est particulier : lequel ? Que peut-on dire de ses trois sommets ?
4. Construire le triangle $ABC$ tel que $AB = 7$ cm, $AC = 5$ cm et $BC = 10$ cm, en laissant les traits de construction.`,
      solution: `**1.** Dans un triangle, la longueur de chaque côté est inférieure à la somme des longueurs des deux autres côtés. Pour savoir si un triangle est constructible, il suffit de comparer la plus grande longueur à la somme des deux autres.

**2.**
- $ABC$ : la plus grande longueur est $10$ cm et $5 + 7 = 12$ ; comme $10 < 12$, le triangle $ABC$ est constructible.
- $DEF$ : la plus grande longueur est $8$ cm et $3 + 4 = 7$ ; comme $8 > 7$, le triangle $DEF$ n'est pas constructible (les deux arcs de cercle ne se coupent pas).
- $GHI$ : la plus grande longueur est $10$ cm et $4 + 6 = 10$ ; il y a égalité.

**3.** Pour $GHI$, on a $4 + 6 = 10$ : le triangle est « aplati ». Ses trois sommets sont **alignés** : le sommet commun aux côtés de $4$ cm et $6$ cm est situé sur le côté de $10$ cm.

**4.** Programme de construction : on trace le segment $[BC]$ de longueur $10$ cm ; on trace un arc de cercle de centre $B$ et de rayon $7$ cm, puis un arc de cercle de centre $C$ et de rayon $5$ cm ; ces deux arcs se coupent en $A$ ; on trace $[AB]$ et $[AC]$. (On vérifie à la règle que $AB = 7$ cm et $AC = 5$ cm.)`
    },
    {
      id: "5G4-ds-02",
      title: "Aires de triangles",
      difficulty: 1,
      points: 4,
      statement: `Les longueurs sont en centimètres. Les figures ne sont pas en vraie grandeur.

1. Le triangle $ABC$ a pour côté $[BC]$ avec $BC = 8$ cm, et la hauteur issue de $A$ mesure $5$ cm. Calculer son aire.
2. Le triangle $DEF$ est rectangle en $D$, avec $DE = 6$ cm et $DF = 4{,}5$ cm. Calculer son aire.
3. Le triangle $RST$ a une aire de $42\\text{ cm}^2$ et $RS = 12$ cm. Calculer la longueur de la hauteur issue de $T$.
4. Exprimer l'aire du triangle $ABC$ de la question 1 en $\\text{mm}^2$.`,
      solution: `On utilise la formule : $\\text{Aire d'un triangle} = \\dfrac{\\text{base} \\times \\text{hauteur}}{2}$.

**1.** $\\mathcal{A}_{ABC} = \\dfrac{8 \\times 5}{2} = \\dfrac{40}{2} = 20$. L'aire du triangle $ABC$ est $20\\text{ cm}^2$.

**2.** Le triangle $DEF$ est rectangle en $D$, donc $[DF]$ est la hauteur relative au côté $[DE]$ :
$\\mathcal{A}_{DEF} = \\dfrac{6 \\times 4{,}5}{2} = \\dfrac{27}{2} = 13{,}5$. L'aire de $DEF$ est $13{,}5\\text{ cm}^2$.

**3.** Notons $h$ la hauteur issue de $T$. On a $\\dfrac{12 \\times h}{2} = 42$, donc $12 \\times h = 84$ et $h = 84 \\div 12 = 7$. La hauteur issue de $T$ mesure $7$ cm.

**4.** $1\\text{ cm}^2 = 100\\text{ mm}^2$, donc $20\\text{ cm}^2 = 2\\,000\\text{ mm}^2$.`
    },
    {
      id: "5G4-ds-03",
      title: "Les droites remarquables du triangle",
      difficulty: 2,
      points: 5,
      statement: `On considère un triangle $ABC$ quelconque. On note $I$ le milieu du segment $[BC]$ et $H$ le point de la droite $(BC)$ tel que les droites $(AH)$ et $(BC)$ soient perpendiculaires.

1. Donner la définition de la médiatrice du segment $[BC]$.
2. Recopier et compléter avec le bon vocabulaire (médiane, hauteur, médiatrice) :
   a) la droite $(AI)$ est … du triangle $ABC$ issue de $A$ ;
   b) la droite $(AH)$ est … du triangle $ABC$ issue de $A$ ;
   c) la droite perpendiculaire à $(BC)$ passant par $I$ est … du segment $[BC]$.
3. On trace les trois médiatrices des côtés du triangle $ABC$ : elles se coupent en un point $O$. On mesure $OA = 4{,}2$ cm.
   a) Quelles sont les longueurs $OB$ et $OC$ ? Justifier.
   b) Quel cercle peut-on alors tracer ? Comment s'appelle-t-il ?`,
      solution: `**1.** La médiatrice du segment $[BC]$ est la droite perpendiculaire à $[BC]$ qui passe par son milieu. (C'est aussi l'ensemble des points situés à égale distance de $B$ et de $C$.)

**2.**
a) $I$ est le milieu de $[BC]$ : la droite $(AI)$, qui passe par un sommet et par le milieu du côté opposé, est la **médiane** issue de $A$.
b) $(AH)$ passe par $A$ et est perpendiculaire au côté opposé $(BC)$ : c'est la **hauteur** issue de $A$.
c) Cette droite est perpendiculaire à $[BC]$ et passe par son milieu : c'est la **médiatrice** de $[BC]$.

**3.** a) $O$ est sur la médiatrice de $[AB]$, donc $OB = OA = 4{,}2$ cm. $O$ est sur la médiatrice de $[AC]$, donc $OC = OA = 4{,}2$ cm.
b) Comme $OA = OB = OC = 4{,}2$ cm, le cercle de centre $O$ et de rayon $4{,}2$ cm passe par les trois sommets $A$, $B$ et $C$ : c'est le **cercle circonscrit** au triangle $ABC$.`
    },
    {
      id: "5G4-ds-04",
      title: "Construire un triangle à partir d'angles",
      difficulty: 2,
      points: 5,
      statement: `On veut construire un triangle $EFG$ tel que $EF = 6$ cm, $\\widehat{GEF} = 50^\\circ$ et $\\widehat{EFG} = 80^\\circ$.

1. Écrire un programme de construction de ce triangle (instruments utilisés compris), puis le construire.
2. Calculer la mesure de l'angle $\\widehat{EGF}$.
3. Montrer que le triangle $EFG$ est isocèle. Préciser son sommet principal.
4. En déduire la longueur $FG$ sans la mesurer.`,
      solution: `**1.** On trace le segment $[EF]$ de longueur $6$ cm. Avec le rapporteur, on trace en $E$ une demi-droite faisant un angle de $50^\\circ$ avec $[EF]$, puis en $F$, du même côté de $(EF)$, une demi-droite faisant un angle de $80^\\circ$ avec $[FE]$. Ces deux demi-droites se coupent au point $G$.

**2.** La somme des angles d'un triangle est égale à $180^\\circ$, donc
$\\widehat{EGF} = 180^\\circ - 50^\\circ - 80^\\circ = 50^\\circ$.

**3.** Dans le triangle $EFG$, les angles $\\widehat{GEF}$ et $\\widehat{EGF}$ mesurent tous les deux $50^\\circ$. Un triangle qui a deux angles de même mesure est isocèle : $EFG$ est isocèle, de base $[EG]$ : les côtés $[FE]$ et $[FG]$, opposés aux angles égaux, ont la même longueur. Son sommet principal est $F$.

**4.** Le triangle $EFG$ est isocèle en $F$, donc $FG = FE = 6$ cm.`
    },
    {
      id: "5G4-ds-05",
      title: "L'aire d'un terrain",
      difficulty: 3,
      points: 5,
      statement: `Le terrain de M. Ollier est représenté ci-dessous. $ABCD$ est un rectangle avec $AB = 15$ m et $BC = 8$ m ; $DCE$ est un triangle, et $H$ est le pied de la hauteur issue de $E$, avec $EH = 6$ m.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 420 245" width="420" height="245" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="50,210 350,210 350,110 200,30 50,110" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="50" y1="110" x2="350" y2="110" stroke="currentColor" stroke-width="1.3" /><line x1="200" y1="30" x2="200" y2="110" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5,4" /><polyline points="200,100 210,100 210,110" fill="none" stroke="currentColor" stroke-width="1.2" /><polyline points="60,210 60,200 50,200" fill="none" stroke="currentColor" stroke-width="1.2" /><polyline points="340,210 340,200 350,200" fill="none" stroke="currentColor" stroke-width="1.2" /><polyline points="340,110 340,120 350,120" fill="none" stroke="currentColor" stroke-width="1.2" /><text x="38" y="226" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="362" y="226" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="362" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="38" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">D</text><text x="200" y="22" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">E</text><text x="207" y="126" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">H</text><text x="200" y="230" font-family="system-ui, sans-serif" font-size="15" font-weight="500" fill="currentColor" text-anchor="middle">15 m</text><text x="378" y="165" font-family="system-ui, sans-serif" font-size="15" font-weight="500" fill="currentColor" text-anchor="middle">8 m</text><text x="222" y="75" font-family="system-ui, sans-serif" font-size="15" font-weight="500" fill="currentColor" text-anchor="start">6 m</text></svg></div>

La figure n'est pas à l'échelle.

1. Calculer l'aire du rectangle $ABCD$.
2. Calculer l'aire du triangle $DCE$.
3. En déduire l'aire totale du terrain.
4. M. Ollier veut semer du gazon sur tout le terrain. Il faut $1$ kg de graines pour $25\\text{ m}^2$ et les graines sont vendues en sacs de $2$ kg. Combien de sacs doit-il acheter ? Justifier.`,
      solution: `**1.** $\\mathcal{A}_{ABCD} = AB \\times BC = 15 \\times 8 = 120$. L'aire du rectangle est $120\\text{ m}^2$.

**2.** Dans le triangle $DCE$, la base $[DC]$ mesure $DC = AB = 15$ m (côtés opposés du rectangle) et la hauteur relative est $EH = 6$ m :
$\\mathcal{A}_{DCE} = \\dfrac{15 \\times 6}{2} = \\dfrac{90}{2} = 45$. L'aire du triangle est $45\\text{ m}^2$.

**3.** $\\mathcal{A}_{\\text{terrain}} = 120 + 45 = 165$. L'aire du terrain est $165\\text{ m}^2$.

**4.** Masse de graines nécessaire : $165 \\div 25 = 6{,}6$ kg.
Avec des sacs de $2$ kg : $3$ sacs donnent $6$ kg (pas assez) et $4$ sacs donnent $8$ kg. M. Ollier doit acheter **4 sacs**.`
    },
    {
      id: "5G4-ds-06",
      title: "Deux hauteurs pour une même aire",
      difficulty: 3,
      points: 5,
      statement: `$ABC$ est un triangle tel que $BC = 10$ cm et $AB = 8$ cm. On note $H$ le pied de la hauteur issue de $A$ et $K$ le pied de la hauteur issue de $C$. On sait que $AH = 6$ cm.

1. Faire une figure à main levée en codant les données.
2. Calculer l'aire du triangle $ABC$.
3. En utilisant la base $[AB]$, écrire une autre expression de l'aire du triangle $ABC$ ; en déduire la longueur $CK$.
4. Les droites $(AH)$ et $(CK)$ se coupent en un point $M$. Que représente le point $M$ pour le triangle $ABC$ ? Que peut-on dire de la droite $(BM)$ ?`,
      solution: `**1.** Figure : triangle $ABC$, $[AH]$ perpendiculaire à $(BC)$ avec $H$ sur $(BC)$, $[CK]$ perpendiculaire à $(AB)$ avec $K$ sur $(AB)$, angles droits codés, longueurs $BC = 10$ cm, $AB = 8$ cm, $AH = 6$ cm indiquées.

**2.** Avec la base $[BC]$ et la hauteur $[AH]$ :
$\\mathcal{A}_{ABC} = \\dfrac{BC \\times AH}{2} = \\dfrac{10 \\times 6}{2} = 30$. L'aire est $30\\text{ cm}^2$.

**3.** Avec la base $[AB]$ et la hauteur $[CK]$ : $\\mathcal{A}_{ABC} = \\dfrac{AB \\times CK}{2} = \\dfrac{8 \\times CK}{2}$.
Donc $\\dfrac{8 \\times CK}{2} = 30$, soit $8 \\times CK = 60$ et $CK = 60 \\div 8 = 7{,}5$. Donc $CK = 7{,}5$ cm.

**4.** Les trois hauteurs d'un triangle sont concourantes ; leur point de concours s'appelle l'**orthocentre**. $M$ est donc l'orthocentre de $ABC$, et la droite $(BM)$ est la troisième hauteur : elle est perpendiculaire à $(AC)$.`
    },
    {
      id: "5G4-ds-07",
      title: "Le troisième côté",
      difficulty: 4,
      points: 6,
      statement: `Un triangle a deux côtés qui mesurent $7$ cm et $11$ cm. On note $x$ la longueur, en centimètres, de son troisième côté ; on suppose que $x$ est un **nombre entier**.

1. Le triangle est-il constructible si $x = 3$ ? si $x = 15$ ? si $x = 20$ ? Justifier.
2. Déterminer toutes les valeurs entières possibles de $x$. Combien y en a-t-il ?
3. Pour quelles valeurs de $x$ le triangle est-il isocèle ?
4. On veut en plus que le périmètre du triangle ne dépasse pas $25$ cm. Quelles valeurs de $x$ conviennent ?`,
      solution: `**1.** On compare la plus grande longueur à la somme des deux autres.
- $x = 3$ : la plus grande longueur est $11$ et $7 + 3 = 10 < 11$ : **non constructible**.
- $x = 15$ : la plus grande est $15$ et $7 + 11 = 18 > 15$ : **constructible**.
- $x = 20$ : la plus grande est $20$ et $7 + 11 = 18 < 20$ : **non constructible**.

**2.** Il faut que $x < 7 + 11$, c'est-à-dire $x < 18$, et que $11 < 7 + x$, c'est-à-dire $x > 4$ (si $x = 4$, le triangle est aplati). Les valeurs entières possibles sont donc $5, 6, 7, \\ldots, 17$ : il y en a $17 - 5 + 1 = 13$.

**3.** Le triangle est isocèle s'il a deux côtés de même longueur : $x = 7$ ou $x = 11$ (ces deux valeurs sont bien comprises entre $5$ et $17$).

**4.** Le périmètre vaut $7 + 11 + x = 18 + x$. On veut $18 + x \\le 25$, donc $x \\le 7$. Avec la question 2, les valeurs qui conviennent sont $x = 5$, $x = 6$ et $x = 7$.`
    },
    {
      id: "5G4-ds-08",
      title: "Une antenne pour trois villages",
      difficulty: 4,
      points: 6,
      statement: `Trois villages $A$, $B$ et $C$ veulent installer une antenne relais à la **même distance** des trois villages. Sur une carte à l'échelle $1$ cm pour $1$ km, on a $AB = 6$ cm, $AC = 8$ cm, $BC = 10$ cm et l'angle $\\widehat{BAC}$ est droit.

1. Où se trouvent tous les points situés à la même distance de $A$ et de $B$ ?
2. On note $O$ le point d'intersection de la médiatrice de $[AB]$ et de la médiatrice de $[AC]$. Expliquer pourquoi $O$ est à la même distance des trois villages.
3. Construire la carte et le point $O$. Où semble se trouver le point $O$ ? Mesurer $OA$ et en déduire la distance réelle entre l'antenne et chaque village.
4. L'antenne a une portée de $4{,}8$ km. Les trois villages seront-ils couverts ? Justifier.`,
      solution: `**1.** Les points situés à égale distance de $A$ et de $B$ sont les points de la **médiatrice** du segment $[AB]$.

**2.** $O$ est sur la médiatrice de $[AB]$, donc $OA = OB$. $O$ est sur la médiatrice de $[AC]$, donc $OA = OC$. Ainsi $OA = OB = OC$ : $O$ est à la même distance des trois villages (c'est le centre du cercle circonscrit au triangle $ABC$, et il est aussi sur la médiatrice de $[BC]$).

**3.** On construit le triangle rectangle $ABC$ ($AB = 6$ cm, $AC = 8$ cm, angle droit en $A$ ; on vérifie que $BC = 10$ cm), puis les deux médiatrices. On observe que $O$ se trouve **au milieu de l'hypoténuse** $[BC]$, et on mesure $OA = 5$ cm (d'ailleurs $OB = OC = 10 \\div 2 = 5$ cm).
À l'échelle $1$ cm pour $1$ km, l'antenne est à $5$ km de chaque village.

**4.** Chaque village est à $5$ km de l'antenne, et $5 > 4{,}8$ : la portée est insuffisante, **aucun des trois villages** ne sera couvert.`
    }
  ],
  "5G5": [
    {
      id: "5G5-ds-01",
      title: "Propriétés du parallélogramme",
      difficulty: 1,
      points: 4,
      statement: `$ABCD$ est un parallélogramme de centre $O$. On sait que $AB = 6$ cm, $BC = 4$ cm, $AC = 8{,}4$ cm et $\\widehat{ABC} = 110^\\circ$.

1. Donner, sans les mesurer, les longueurs $CD$ et $AD$. Justifier.
2. Calculer la longueur $OA$. Justifier.
3. Donner la mesure de l'angle $\\widehat{CDA}$ puis celle de l'angle $\\widehat{BCD}$. Justifier.
4. Calculer le périmètre du parallélogramme $ABCD$.`,
      solution: `**1.** Dans un parallélogramme, les côtés opposés ont la même longueur. Donc $CD = AB = 6$ cm et $AD = BC = 4$ cm.

**2.** Dans un parallélogramme, les diagonales se coupent en leur milieu. $O$ est donc le milieu de $[AC]$ : $OA = 8{,}4 \\div 2 = 4{,}2$ cm.

**3.** Dans un parallélogramme, les angles opposés ont la même mesure : $\\widehat{CDA} = \\widehat{ABC} = 110^\\circ$.
Deux angles consécutifs d'un parallélogramme sont supplémentaires (leur somme vaut $180^\\circ$) : $\\widehat{BCD} = 180^\\circ - 110^\\circ = 70^\\circ$.

**4.** $\\mathcal{P} = 2 \\times (6 + 4) = 20$. Le périmètre de $ABCD$ est $20$ cm.`
    },
    {
      id: "5G5-ds-02",
      title: "Calculs d'aires de quadrilatères",
      difficulty: 1,
      points: 4,
      statement: `1. Calculer l'aire d'un parallélogramme de base $9$ cm et de hauteur relative $4$ cm.
2. $EFGH$ est un parallélogramme tel que $EF = 7{,}5$ cm et $FG = 5$ cm. La distance entre les droites $(EF)$ et $(HG)$ est $3{,}2$ cm.
   a) Calculer l'aire de $EFGH$.
   b) Lina affirme que l'aire vaut $7{,}5 \\times 5 = 37{,}5\\text{ cm}^2$. Expliquer son erreur.
3. Un rectangle a la même aire que le parallélogramme $EFGH$ et une largeur de $4$ cm. Calculer sa longueur.`,
      solution: `**1.** $\\text{Aire} = \\text{base} \\times \\text{hauteur} = 9 \\times 4 = 36$. L'aire est $36\\text{ cm}^2$.

**2.** a) La hauteur relative à la base $[EF]$ est la distance entre $(EF)$ et $(HG)$, soit $3{,}2$ cm :
$\\mathcal{A}_{EFGH} = 7{,}5 \\times 3{,}2 = 24$. L'aire est $24\\text{ cm}^2$.
b) Lina a multiplié la base par la longueur du côté oblique $[FG]$. Or il faut multiplier la base par la **hauteur**, qui est perpendiculaire à la base ; le côté $[FG]$ n'est pas perpendiculaire à $[EF]$ (sinon ce serait un rectangle), et il est plus long que la hauteur.

**3.** Aire du rectangle : $\\text{longueur} \\times 4 = 24$, donc $\\text{longueur} = 24 \\div 4 = 6$ cm.`
    },
    {
      id: "5G5-ds-03",
      title: "Reconnaître un quadrilatère par ses diagonales",
      difficulty: 2,
      points: 5,
      statement: `$ABCD$ est un quadrilatère dont les diagonales $[AC]$ et $[BD]$ se coupent en $O$. Dans chacun des cas suivants, donner la nature la plus précise possible du quadrilatère $ABCD$ en citant la propriété utilisée.

1. $OA = OC = 3$ cm et $OB = OD = 5$ cm.
2. $OA = OB = OC = OD = 4$ cm.
3. $OA = OC = 3$ cm, $OB = OD = 5$ cm et les droites $(AC)$ et $(BD)$ sont perpendiculaires.
4. $OA = OB = OC = OD = 4$ cm et les droites $(AC)$ et $(BD)$ sont perpendiculaires.`,
      solution: `**1.** $O$ est le milieu de $[AC]$ et de $[BD]$ : les diagonales se coupent en leur milieu. Si un quadrilatère a ses diagonales qui se coupent en leur milieu, alors c'est un **parallélogramme**. (Les diagonales n'ont pas la même longueur, $6$ cm et $10$ cm, et rien n'indique qu'elles soient perpendiculaires.)

**2.** Les diagonales ont le même milieu $O$, donc $ABCD$ est un parallélogramme ; de plus $AC = BD = 8$ cm. Si un parallélogramme a des diagonales de même longueur, alors c'est un **rectangle**.

**3.** $ABCD$ est un parallélogramme (diagonales de même milieu) dont les diagonales sont perpendiculaires. Si un parallélogramme a des diagonales perpendiculaires, alors c'est un **losange**.

**4.** $ABCD$ est un parallélogramme dont les diagonales ont la même longueur ($8$ cm) et sont perpendiculaires : c'est à la fois un rectangle et un losange, donc un **carré**.`
    },
    {
      id: "5G5-ds-04",
      title: "Construire un parallélogramme",
      difficulty: 2,
      points: 5,
      statement: `On veut construire un parallélogramme $EFGH$ tel que $EF = 5$ cm, $FG = 3$ cm et $\\widehat{EFG} = 60^\\circ$.

1. Faire une figure à main levée codée.
2. Construire le parallélogramme $EFGH$ en vraie grandeur et expliquer comment on place le point $H$.
3. Donner sans les mesurer les angles $\\widehat{FGH}$, $\\widehat{GHE}$ et $\\widehat{HEF}$. Justifier.
4. Calculer le périmètre de $EFGH$.
5. On mesure la distance entre les droites $(EF)$ et $(HG)$ : on trouve environ $2{,}6$ cm. En déduire une valeur approchée de l'aire de $EFGH$.`,
      solution: `**1.** Figure à main levée : parallélogramme $EFGH$ (sommets dans l'ordre), avec $EF = 5$ cm, $FG = 3$ cm, angle de $60^\\circ$ en $F$ ; on code les côtés opposés parallèles.

**2.** On trace $[EF]$ de $5$ cm, puis au rapporteur l'angle $\\widehat{EFG} = 60^\\circ$ et on place $G$ sur ce côté à $3$ cm de $F$. Pour placer $H$ : arc de cercle de centre $E$ et de rayon $3$ cm (car $EH = FG$) et arc de cercle de centre $G$ et de rayon $5$ cm (car $GH = EF$) ; $H$ est leur point d'intersection situé du même côté que $G$. (On peut aussi tracer la parallèle à $(FG)$ passant par $E$ et la parallèle à $(EF)$ passant par $G$.)

**3.** Les angles opposés d'un parallélogramme ont la même mesure et deux angles consécutifs sont supplémentaires :
$\\widehat{GHE} = \\widehat{EFG} = 60^\\circ$ ; $\\widehat{FGH} = 180^\\circ - 60^\\circ = 120^\\circ$ ; $\\widehat{HEF} = \\widehat{FGH} = 120^\\circ$.
(Vérification : $60 + 120 + 60 + 120 = 360$.)

**4.** $\\mathcal{P} = 2 \\times (5 + 3) = 16$. Le périmètre est $16$ cm.

**5.** La hauteur relative à la base $[EF]$ est environ $2{,}6$ cm : $\\mathcal{A} \\approx 5 \\times 2{,}6 = 13$. L'aire de $EFGH$ est environ $13\\text{ cm}^2$.`
    },
    {
      id: "5G5-ds-05",
      title: "Démontrer qu'un quadrilatère est un parallélogramme",
      difficulty: 3,
      points: 5,
      statement: `$ABC$ est un triangle. On note $I$ le milieu du segment $[BC]$ et $D$ le symétrique du point $A$ par rapport au point $I$.

1. Faire une figure.
2. Démontrer que le quadrilatère $ABDC$ est un parallélogramme.
3. On suppose dans cette question que $AB = AC$. Démontrer que $ABDC$ est un losange.
4. On suppose dans cette question que l'angle $\\widehat{BAC}$ est droit. Quelle est la nature de $ABDC$ ? Justifier.`,
      solution: `**1.** Figure : triangle $ABC$, $I$ milieu de $[BC]$, $D$ sur la demi-droite $[AI)$ au-delà de $I$ avec $ID = IA$.

**2.** $D$ est le symétrique de $A$ par rapport à $I$, donc $I$ est le milieu de $[AD]$. $I$ est aussi le milieu de $[BC]$.
Les diagonales $[AD]$ et $[BC]$ du quadrilatère $ABDC$ ont donc le même milieu. Or si un quadrilatère a ses diagonales qui se coupent en leur milieu, alors c'est un parallélogramme. Donc $ABDC$ est un **parallélogramme**.

**3.** $ABDC$ est un parallélogramme et ses deux côtés consécutifs $[AB]$ et $[AC]$ ont la même longueur. Or un parallélogramme qui a deux côtés consécutifs de même longueur est un losange. Donc $ABDC$ est un **losange**.

**4.** $ABDC$ est un parallélogramme qui possède un angle droit (en $A$). Or un parallélogramme qui a un angle droit est un rectangle. Donc $ABDC$ est un **rectangle**.`
    },
    {
      id: "5G5-ds-06",
      title: "Une allée dans un jardin",
      difficulty: 3,
      points: 5,
      statement: `Un jardin a la forme d'un rectangle $ABCD$ de longueur $AB = 20$ m et de largeur $BC = 12$ m. On y aménage une allée pavée $EFGH$ en forme de parallélogramme : $E$ et $F$ sont sur le côté $[AB]$ avec $EF = 2$ m, $G$ et $H$ sont sur le côté $[DC]$ avec $HG = 2$ m, et l'allée traverse le jardin en biais. Le reste du jardin est en gazon.

1. Quelle est la hauteur du parallélogramme $EFGH$ relative à la base $[EF]$ ? Justifier.
2. Calculer l'aire de l'allée.
3. Calculer l'aire de la partie en gazon.
4. Le pavage coûte $35$ € par $\\text{m}^2$. Calculer le coût du pavage de l'allée.
5. Quel pourcentage de l'aire du jardin l'allée occupe-t-elle ?`,
      solution: `**1.** Les côtés $[EF]$ et $[HG]$ sont portés par les droites $(AB)$ et $(DC)$, parallèles. La hauteur relative à $[EF]$ est la distance entre ces deux droites, c'est-à-dire la largeur du rectangle : $12$ m.

**2.** $\\mathcal{A}_{\\text{allée}} = \\text{base} \\times \\text{hauteur} = 2 \\times 12 = 24$. L'allée a une aire de $24\\text{ m}^2$.

**3.** $\\mathcal{A}_{\\text{jardin}} = 20 \\times 12 = 240\\text{ m}^2$, donc $\\mathcal{A}_{\\text{gazon}} = 240 - 24 = 216$. Le gazon occupe $216\\text{ m}^2$.

**4.** $24 \\times 35 = 840$. Le pavage coûte $840$ €.

**5.** $\\dfrac{24}{240} = \\dfrac{1}{10} = 0{,}1 = 10\\,\\%$. L'allée occupe $10\\,\\%$ de l'aire du jardin.`
    },
    {
      id: "5G5-ds-07",
      title: "Losange ou carré ?",
      difficulty: 4,
      points: 6,
      statement: `$ABCD$ est un losange de centre $O$ dont les diagonales mesurent $AC = 12$ cm et $BD = 16$ cm. Ses côtés mesurent $10$ cm.

1. Que peut-on dire des diagonales d'un losange ? En déduire la nature du triangle $AOB$ et les longueurs $OA$ et $OB$.
2. Calculer l'aire du triangle $AOB$, puis en déduire l'aire du losange $ABCD$.
3. Le losange est aussi un parallélogramme. En prenant $[AB]$ comme base, calculer la hauteur du losange relative à ce côté.
4. Un carré a le même périmètre que ce losange. Lequel des deux a la plus grande aire ? Justifier.`,
      solution: `**1.** Les diagonales d'un losange se coupent en leur milieu et sont perpendiculaires. Donc le triangle $AOB$ est **rectangle en $O$**, avec $OA = 12 \\div 2 = 6$ cm et $OB = 16 \\div 2 = 8$ cm.

**2.** $\\mathcal{A}_{AOB} = \\dfrac{OA \\times OB}{2} = \\dfrac{6 \\times 8}{2} = 24\\text{ cm}^2$.
Les diagonales partagent le losange en quatre triangles rectangles superposables ($AOB$, $BOC$, $COD$, $DOA$ ont les mêmes côtés de l'angle droit, $6$ cm et $8$ cm). Donc $\\mathcal{A}_{ABCD} = 4 \\times 24 = 96\\text{ cm}^2$.
(On retrouve la formule $\\dfrac{AC \\times BD}{2} = \\dfrac{12 \\times 16}{2} = 96$.)

**3.** Aire d'un parallélogramme : $\\text{base} \\times \\text{hauteur}$, donc $10 \\times h = 96$ et $h = 96 \\div 10 = 9{,}6$ cm.

**4.** Périmètre du losange : $4 \\times 10 = 40$ cm. Le carré de même périmètre a pour côté $40 \\div 4 = 10$ cm, donc pour aire $10 \\times 10 = 100\\text{ cm}^2$.
Comme $100 > 96$, c'est le **carré** qui a la plus grande aire.`
    },
    {
      id: "5G5-ds-08",
      title: "Bissectrice dans un parallélogramme",
      difficulty: 4,
      points: 6,
      statement: `$ABCD$ est un parallélogramme tel que $AD = 4$ cm, $AB = 7$ cm et $\\widehat{DAB} = 2 \\times \\widehat{ABC}$.

1. Calculer les mesures des angles $\\widehat{ABC}$ et $\\widehat{DAB}$. Justifier.
2. La bissectrice de l'angle $\\widehat{DAB}$ coupe le segment $[DC]$ en $E$. Donner la mesure de l'angle $\\widehat{DAE}$.
3. Démontrer que $\\widehat{AED} = 60^\\circ$.
4. En déduire la nature du triangle $ADE$, puis les longueurs $DE$ et $EC$.`,
      solution: `**1.** Deux angles consécutifs d'un parallélogramme sont supplémentaires : $\\widehat{DAB} + \\widehat{ABC} = 180^\\circ$. Comme $\\widehat{DAB} = 2 \\times \\widehat{ABC}$, on a $3 \\times \\widehat{ABC} = 180^\\circ$, donc $\\widehat{ABC} = 60^\\circ$ et $\\widehat{DAB} = 120^\\circ$.

**2.** La bissectrice partage l'angle en deux angles de même mesure : $\\widehat{DAE} = \\widehat{EAB} = 120^\\circ \\div 2 = 60^\\circ$.

**3.** $ABCD$ est un parallélogramme, donc $(DC)$ et $(AB)$ sont parallèles. Les angles $\\widehat{AED}$ et $\\widehat{EAB}$ sont alternes-internes, formés par ces deux droites parallèles et la sécante $(AE)$ ; ils ont donc la même mesure : $\\widehat{AED} = \\widehat{EAB} = 60^\\circ$.

**4.** Dans le triangle $ADE$ : $\\widehat{ADE} = 180^\\circ - 60^\\circ - 60^\\circ = 60^\\circ$. Les trois angles mesurent $60^\\circ$ : $ADE$ est **équilatéral**.
Donc $DE = AD = 4$ cm. Comme $DC = AB = 7$ cm, on obtient $EC = DC - DE = 7 - 4 = 3$ cm.`
    }
  ],
  "5G6": [
    {
      id: "5G6-ds-01",
      title: "Décrire des solides",
      difficulty: 1,
      points: 4,
      statement: `1. Un prisme droit a pour bases deux triangles.
   a) Combien a-t-il de faces, d'arêtes et de sommets ?
   b) Quelle est la nature de ses faces latérales ?
2. Décrire un cylindre de révolution : nature de ses bases, de sa surface latérale.
3. Un pavé droit a pour dimensions $5$ cm, $4$ cm et $3$ cm. Calculer son volume.
4. Combien un cube possède-t-il d'arêtes ? Calculer le volume d'un cube d'arête $6$ cm.`,
      solution: `**1.** a) Le prisme a $2$ bases triangulaires et $3$ faces latérales, soit $5$ faces. Il a $3$ arêtes sur chaque base et $3$ arêtes latérales, soit $9$ arêtes. Il a $3$ sommets sur chaque base, soit $6$ sommets.
b) Dans un prisme droit, les faces latérales sont des **rectangles**.

**2.** Un cylindre de révolution a deux bases qui sont des **disques** superposables, situés dans des plans parallèles ; sa surface latérale est courbe (une fois déroulée, elle donne un rectangle).

**3.** $V = 5 \\times 4 \\times 3 = 60$. Le volume du pavé est $60\\text{ cm}^3$.

**4.** Un cube a $12$ arêtes. $V = 6 \\times 6 \\times 6 = 216$. Le volume du cube est $216\\text{ cm}^3$.`
    },
    {
      id: "5G6-ds-02",
      title: "Conversions de volumes et de capacités",
      difficulty: 1,
      points: 4,
      statement: `On rappelle que $1\\text{ L} = 1\\text{ dm}^3$.

1. Convertir :
   a) $3{,}5\\text{ m}^3$ en $\\text{dm}^3$, puis en litres ;
   b) $750\\text{ cm}^3$ en litres, puis en centilitres ;
   c) $2{,}4$ L en $\\text{cm}^3$ ;
   d) $0{,}008\\text{ m}^3$ en litres.
2. Un aquarium a la forme d'un pavé droit de dimensions intérieures $60$ cm, $30$ cm et $40$ cm. Calculer son volume en $\\text{cm}^3$, puis sa contenance en litres.`,
      solution: `**1.** a) $1\\text{ m}^3 = 1\\,000\\text{ dm}^3$, donc $3{,}5\\text{ m}^3 = 3\\,500\\text{ dm}^3 = 3\\,500$ L.
b) $1\\text{ dm}^3 = 1\\,000\\text{ cm}^3$, donc $750\\text{ cm}^3 = 0{,}75\\text{ dm}^3 = 0{,}75$ L $= 75$ cL.
c) $2{,}4$ L $= 2{,}4\\text{ dm}^3 = 2\\,400\\text{ cm}^3$.
d) $0{,}008\\text{ m}^3 = 8\\text{ dm}^3 = 8$ L.

**2.** $V = 60 \\times 30 \\times 40 = 72\\,000$. Le volume est $72\\,000\\text{ cm}^3$, soit $72\\text{ dm}^3$ : l'aquarium contient $72$ L.`
    },
    {
      id: "5G6-ds-03",
      title: "Un prisme à base triangulaire",
      difficulty: 2,
      points: 5,
      statement: `Un prisme droit a pour hauteur $10$ cm. Ses bases sont des triangles $ABC$ rectangles en $A$ tels que $AB = 3$ cm, $AC = 4$ cm et $BC = 5$ cm.

1. Dessiner ce prisme en perspective cavalière (à main levée), en nommant $DEF$ la seconde base, $D$, $E$ et $F$ étant situés respectivement « au-dessus » de $A$, $B$ et $C$.
2. Calculer l'aire d'une base, puis le volume du prisme.
3. Donner la nature et les dimensions de chacune des trois faces latérales.
4. Calculer l'aire totale de ce prisme (somme des aires de toutes ses faces).`,
      solution: `**1.** En perspective cavalière, les arêtes cachées sont en pointillés et les arêtes latérales $[AD]$, $[BE]$, $[CF]$ sont parallèles et de même longueur.

**2.** La base est un triangle rectangle en $A$ : $\\mathcal{B} = \\dfrac{AB \\times AC}{2} = \\dfrac{3 \\times 4}{2} = 6\\text{ cm}^2$.
Volume d'un prisme droit : $V = \\mathcal{B} \\times h = 6 \\times 10 = 60$. Le volume du prisme est $60\\text{ cm}^3$.

**3.** Les faces latérales d'un prisme droit sont des rectangles dont une dimension est la hauteur du prisme :
- $ABED$ : rectangle de $3$ cm sur $10$ cm ;
- $ACFD$ : rectangle de $4$ cm sur $10$ cm ;
- $BCFE$ : rectangle de $5$ cm sur $10$ cm.

**4.** Faces latérales : $3 \\times 10 + 4 \\times 10 + 5 \\times 10 = 30 + 40 + 50 = 120\\text{ cm}^2$. Les deux bases : $2 \\times 6 = 12\\text{ cm}^2$.
Aire totale : $120 + 12 = 132\\text{ cm}^2$.`
    },
    {
      id: "5G6-ds-04",
      title: "Volume d'une canette",
      difficulty: 2,
      points: 5,
      statement: `On rappelle que le volume d'un cylindre de rayon $r$ et de hauteur $h$ est $V = \\pi \\times r^2 \\times h$.

1. Calculer le volume exact d'un cylindre de rayon $3$ cm et de hauteur $10$ cm, puis en donner l'arrondi au $\\text{cm}^3$.
2. Une canette cylindrique a un diamètre de $6{,}6$ cm et une hauteur de $11{,}5$ cm.
   a) Quel est son rayon ?
   b) Calculer son volume, arrondi au $\\text{cm}^3$.
   c) Sur l'étiquette, on lit « $33$ cL ». La canette peut-elle contenir cette quantité de boisson ? Justifier.`,
      solution: `**1.** $V = \\pi \\times 3^2 \\times 10 = 90\\pi$. Le volume exact est $90\\pi\\text{ cm}^3$, soit environ $283\\text{ cm}^3$.

**2.** a) Le rayon est la moitié du diamètre : $r = 6{,}6 \\div 2 = 3{,}3$ cm.
b) $V = \\pi \\times 3{,}3^2 \\times 11{,}5 = \\pi \\times 10{,}89 \\times 11{,}5 = 125{,}235\\pi \\approx 393$. Le volume de la canette est environ $393\\text{ cm}^3$.
c) $33\\text{ cL} = 0{,}33\\text{ L} = 0{,}33\\text{ dm}^3 = 330\\text{ cm}^3$. Comme $393 > 330$, la canette peut contenir $33$ cL (il reste de l'air au-dessus de la boisson).`
    },
    {
      id: "5G6-ds-05",
      title: "Remplir une piscine",
      difficulty: 3,
      points: 5,
      statement: `Une piscine a la forme d'un pavé droit de $10$ m de long, $4$ m de large et $1{,}5$ m de profondeur.

1. Calculer le volume de la piscine en $\\text{m}^3$, puis en litres.
2. On la remplit jusqu'à $10$ cm sous le bord. Quelle est alors la hauteur d'eau ? Calculer le volume d'eau en $\\text{m}^3$.
3. Le tuyau d'arrosage débite $2\\,500$ L d'eau par heure. Combien de temps faut-il pour effectuer le remplissage de la question 2 ? Donner la réponse en heures et minutes.
4. L'eau coûte $4$ € le $\\text{m}^3$. Quel est le coût de ce remplissage ?`,
      solution: `**1.** $V = 10 \\times 4 \\times 1{,}5 = 60$. Le volume est $60\\text{ m}^3$. Comme $1\\text{ m}^3 = 1\\,000$ L, cela fait $60\\,000$ L.

**2.** $10$ cm $= 0{,}1$ m, donc la hauteur d'eau est $1{,}5 - 0{,}1 = 1{,}4$ m.
$V_{\\text{eau}} = 10 \\times 4 \\times 1{,}4 = 56$. Le volume d'eau est $56\\text{ m}^3$, soit $56\\,000$ L.

**3.** $56\\,000 \\div 2\\,500 = 22{,}4$. Il faut $22{,}4$ h. Or $0{,}4\\text{ h} = 0{,}4 \\times 60\\text{ min} = 24$ min. Le remplissage dure **22 h 24 min**.

**4.** $56 \\times 4 = 224$. Le remplissage coûte $224$ €.`
    },
    {
      id: "5G6-ds-06",
      title: "L'abri de jardin",
      difficulty: 3,
      points: 5,
      statement: `Un abri de jardin a la forme d'un prisme droit de longueur $3$ m. Sa base (la façade avant) est un pentagone formé d'un rectangle de $4$ m de large et $2$ m de haut, surmonté d'un triangle (le pignon) de base $4$ m et de hauteur $1$ m.

1. Combien ce prisme a-t-il de faces, d'arêtes et de sommets ?
2. Calculer l'aire de la façade avant.
3. Calculer le volume de l'abri en $\\text{m}^3$.
4. On veut chauffer l'abri ; un petit radiateur convient pour un volume d'au plus $25\\text{ m}^3$. Ce radiateur suffit-il ? Justifier.`,
      solution: `**1.** Les bases sont des pentagones (5 côtés). Le prisme a $2$ bases et $5$ faces latérales, soit $7$ faces ; $5 + 5 + 5 = 15$ arêtes (deux bases et $5$ arêtes latérales) ; $5 + 5 = 10$ sommets.

**2.** Aire du rectangle : $4 \\times 2 = 8\\text{ m}^2$. Aire du triangle : $\\dfrac{4 \\times 1}{2} = 2\\text{ m}^2$.
Aire de la façade : $\\mathcal{B} = 8 + 2 = 10\\text{ m}^2$.

**3.** Volume d'un prisme droit : $V = \\mathcal{B} \\times h = 10 \\times 3 = 30$. Le volume de l'abri est $30\\text{ m}^3$.

**4.** $30 > 25$ : le volume de l'abri dépasse le volume maximal prévu pour ce radiateur. Il ne suffit pas.`
    },
    {
      id: "5G6-ds-07",
      title: "Verres et carafe",
      difficulty: 4,
      points: 6,
      statement: `Une carafe a la forme d'un pavé droit à base carrée de côté $10$ cm et de hauteur $15$ cm. Des verres ont la forme de cylindres de rayon $3$ cm et de hauteur $8$ cm. On néglige l'épaisseur du verre.

1. Calculer la contenance de la carafe en $\\text{cm}^3$, puis en litres.
2. Calculer le volume d'un verre, arrondi au $\\text{cm}^3$.
3. La carafe est pleine. Combien de verres peut-on remplir entièrement ? Quel volume d'eau reste-t-il alors dans la carafe (arrondi au $\\text{cm}^3$) ?
4. On verse $1$ L d'eau dans la carafe vide. À quelle hauteur l'eau monte-t-elle ?`,
      solution: `**1.** $V_{\\text{carafe}} = 10 \\times 10 \\times 15 = 1\\,500\\text{ cm}^3$, soit $1{,}5\\text{ dm}^3 = 1{,}5$ L.

**2.** $V_{\\text{verre}} = \\pi \\times 3^2 \\times 8 = 72\\pi \\approx 226\\text{ cm}^3$.

**3.** $1\\,500 \\div 226{,}19\\ldots \\approx 6{,}6$ : on peut remplir entièrement **6 verres** (le septième ne le sera pas).
Il reste $1\\,500 - 6 \\times 72\\pi = 1\\,500 - 432\\pi \\approx 143\\text{ cm}^3$ dans la carafe.

**4.** $1$ L $= 1\\,000\\text{ cm}^3$. L'aire de la base de la carafe est $10 \\times 10 = 100\\text{ cm}^2$. Si $x$ est la hauteur d'eau, $100 \\times x = 1\\,000$, donc $x = 10$ cm. L'eau monte à $10$ cm de hauteur.`
    },
    {
      id: "5G6-ds-08",
      title: "Cylindre et prisme à base carrée",
      difficulty: 4,
      points: 6,
      statement: `On considère un cylindre de révolution de rayon $4$ cm et de hauteur $10$ cm.

1. On réalise le patron de ce cylindre. Il est formé de deux disques et d'un rectangle.
   a) Quel est le rayon des disques ?
   b) Quelles sont les dimensions du rectangle ? Donner la valeur exacte, puis l'arrondi au millimètre.
2. Calculer le volume exact du cylindre, puis son arrondi au $\\text{cm}^3$.
3. Un prisme droit à base carrée de côté $7$ cm a la même hauteur que le cylindre. Lequel des deux solides a le plus grand volume ?
4. Noé affirme : « Si je double le rayon du cylindre sans changer sa hauteur, son volume double. » A-t-il raison ? Justifier.`,
      solution: `**1.** a) Les disques ont le même rayon que le cylindre : $4$ cm.
b) Une dimension du rectangle est la hauteur du cylindre, $10$ cm. L'autre est égale au périmètre d'un disque de base : $2 \\times \\pi \\times 4 = 8\\pi \\approx 25{,}1$ cm. Le rectangle mesure $10$ cm sur $8\\pi$ cm, soit environ $25{,}1$ cm.

**2.** $V = \\pi \\times 4^2 \\times 10 = 160\\pi \\approx 503\\text{ cm}^3$.

**3.** $V_{\\text{prisme}} = 7 \\times 7 \\times 10 = 490\\text{ cm}^3$. Comme $503 > 490$, c'est le **cylindre** qui a le plus grand volume.

**4.** Avec un rayon de $8$ cm : $V' = \\pi \\times 8^2 \\times 10 = 640\\pi\\text{ cm}^3$. Or $640\\pi = 4 \\times 160\\pi$ : le volume est multiplié par $4$, et non par $2$. Noé a tort (le rayon intervient deux fois dans $r^2 = r \\times r$).`
    }
  ],
  "5D1": [
    {
      id: "5D1-ds-01",
      title: "Le trajet jusqu'au collège",
      difficulty: 1,
      points: 4,
      statement: `On a demandé aux $25$ élèves d'une classe de 5e leur moyen de transport pour venir au collège.

| Moyen de transport | À pied | Vélo | Bus | Voiture |
|---|---|---|---|---|
| Effectif | $6$ | $4$ | $10$ | $5$ |
| Fréquence (décimale) | | | | |
| Fréquence (en %) | | | | |

1. Vérifier que l'effectif total est bien $25$.
2. Recopier et compléter le tableau.
3. Écrire la fréquence des élèves venant en bus sous la forme d'une fraction irréductible.
4. Quel pourcentage des élèves vient au collège sans moyen de transport motorisé ?`,
      solution: `**1.** $6 + 4 + 10 + 5 = 25$ : l'effectif total est bien $25$.

**2.** La fréquence d'une valeur est $\\dfrac{\\text{effectif de la valeur}}{\\text{effectif total}}$.

| Moyen de transport | À pied | Vélo | Bus | Voiture |
|---|---|---|---|---|
| Effectif | $6$ | $4$ | $10$ | $5$ |
| Fréquence (décimale) | $0{,}24$ | $0{,}16$ | $0{,}4$ | $0{,}2$ |
| Fréquence (en %) | $24\\,\\%$ | $16\\,\\%$ | $40\\,\\%$ | $20\\,\\%$ |

Par exemple $\\dfrac{6}{25} = \\dfrac{24}{100} = 0{,}24 = 24\\,\\%$. (Vérification : $24 + 16 + 40 + 20 = 100$.)

**3.** $\\dfrac{10}{25} = \\dfrac{2 \\times 5}{5 \\times 5} = \\dfrac{2}{5}$.

**4.** À pied ou à vélo : $24\\,\\% + 16\\,\\% = 40\\,\\%$ des élèves.`
    },
    {
      id: "5D1-ds-02",
      title: "Calculer une moyenne",
      difficulty: 1,
      points: 4,
      statement: `Voici les notes sur $20$ obtenues par Inès au premier trimestre :
$$12 \\quad 15 \\quad 9 \\quad 14 \\quad 10 \\quad 18 \\quad 13$$

1. Combien de notes Inès a-t-elle obtenues ? Quelle est sa meilleure note ?
2. Calculer la moyenne de ces notes.
3. Inès obtient ensuite un $17$. Calculer sa nouvelle moyenne.
4. Combien de ses huit notes sont strictement supérieures à sa nouvelle moyenne ?`,
      solution: `**1.** Inès a obtenu $7$ notes ; sa meilleure note est $18$.

**2.** Somme des notes : $12 + 15 + 9 + 14 + 10 + 18 + 13 = 91$.
Moyenne : $\\dfrac{91}{7} = 13$. La moyenne d'Inès est $13$ sur $20$.

**3.** Nouvelle somme : $91 + 17 = 108$, pour $8$ notes.
Nouvelle moyenne : $\\dfrac{108}{8} = 13{,}5$ sur $20$.

**4.** Les notes strictement supérieures à $13{,}5$ sont $15$, $14$, $18$ et $17$ : il y en a $4$.`
    },
    {
      id: "5D1-ds-03",
      title: "Les pointures de la classe",
      difficulty: 2,
      points: 5,
      statement: `Voici les pointures des $20$ élèves d'une classe :
$$36 \\;\\; 38 \\;\\; 37 \\;\\; 38 \\;\\; 39 \\;\\; 40 \\;\\; 38 \\;\\; 37 \\;\\; 36 \\;\\; 38 \\;\\; 39 \\;\\; 38 \\;\\; 37 \\;\\; 40 \\;\\; 41 \\;\\; 38 \\;\\; 39 \\;\\; 37 \\;\\; 38 \\;\\; 36$$

1. Recopier et compléter le tableau d'effectifs suivant.

| Pointure | $36$ | $37$ | $38$ | $39$ | $40$ | $41$ |
|---|---|---|---|---|---|---|
| Effectif | | | | | | |

2. Quelle est la pointure la plus fréquente ? Quelle est sa fréquence en pourcentage ?
3. Quel pourcentage des élèves chausse du $39$ ou plus ?
4. Décrire comment représenter cette série par un diagramme en bâtons (axes, graduations, hauteur des bâtons).`,
      solution: `**1.** En comptant chaque valeur :

| Pointure | $36$ | $37$ | $38$ | $39$ | $40$ | $41$ |
|---|---|---|---|---|---|---|
| Effectif | $3$ | $4$ | $7$ | $3$ | $2$ | $1$ |

Vérification : $3 + 4 + 7 + 3 + 2 + 1 = 20$.

**2.** La pointure la plus fréquente est $38$ (effectif $7$). Sa fréquence est $\\dfrac{7}{20} = \\dfrac{35}{100} = 35\\,\\%$.

**3.** Élèves chaussant du $39$ ou plus : $3 + 2 + 1 = 6$. Fréquence : $\\dfrac{6}{20} = \\dfrac{30}{100} = 30\\,\\%$.

**4.** On place les pointures ($36$ à $41$) sur l'axe horizontal et les effectifs sur l'axe vertical, gradué de $0$ à $7$ (par exemple $1$ cm pour $1$ élève). Pour chaque pointure, on trace un bâton vertical dont la hauteur est égale à l'effectif : $3$ cm pour $36$, $4$ cm pour $37$, $7$ cm pour $38$, etc. On donne un titre et on légende les axes.`
    },
    {
      id: "5D1-ds-04",
      title: "Diagramme circulaire des sports",
      difficulty: 2,
      points: 5,
      statement: `On a interrogé $40$ élèves sur leur sport préféré.

| Sport | Football | Basket | Natation | Danse |
|---|---|---|---|---|
| Effectif | $14$ | $8$ | $12$ | $6$ |

On veut représenter ces données par un diagramme circulaire.

1. Quelle mesure d'angle correspond à un élève ? Justifier.
2. Calculer la mesure de l'angle de chaque secteur.
3. Construire le diagramme circulaire (rayon $4$ cm).
4. Quelle fraction du disque représente la natation ? Simplifier.`,
      solution: `**1.** Le disque entier ($360^\\circ$) représente les $40$ élèves. Les angles sont proportionnels aux effectifs : un élève correspond à $360^\\circ \\div 40 = 9^\\circ$.

**2.**
- Football : $14 \\times 9^\\circ = 126^\\circ$ ;
- Basket : $8 \\times 9^\\circ = 72^\\circ$ ;
- Natation : $12 \\times 9^\\circ = 108^\\circ$ ;
- Danse : $6 \\times 9^\\circ = 54^\\circ$.

Vérification : $126 + 72 + 108 + 54 = 360$.

**3.** On trace un cercle de rayon $4$ cm et un rayon de départ ; au rapporteur, on reporte successivement les angles de $126^\\circ$, $72^\\circ$, $108^\\circ$ et $54^\\circ$ ; on colorie et on légende chaque secteur.

**4.** $\\dfrac{108}{360} = \\dfrac{12}{40} = \\dfrac{3}{10}$. La natation représente les $\\dfrac{3}{10}$ du disque.`
    },
    {
      id: "5D1-ds-05",
      title: "Les résultats d'un contrôle",
      difficulty: 3,
      points: 5,
      statement: `Voici les notes obtenues par une classe à un contrôle noté sur $20$.

| Note | $8$ | $10$ | $12$ | $14$ | $16$ |
|---|---|---|---|---|---|
| Effectif | $2$ | $5$ | $6$ | $4$ | $3$ |

1. Combien d'élèves ont passé ce contrôle ?
2. Calculer la note moyenne de la classe.
3. Quel pourcentage des élèves a obtenu au moins $12$ ?
4. Un élève absent passe le contrôle plus tard et obtient $20$. La moyenne de la classe augmente-t-elle de plus d'un demi-point ? Justifier.`,
      solution: `**1.** $2 + 5 + 6 + 4 + 3 = 20$ élèves.

**2.** On multiplie chaque note par son effectif :
$8 \\times 2 + 10 \\times 5 + 12 \\times 6 + 14 \\times 4 + 16 \\times 3 = 16 + 50 + 72 + 56 + 48 = 242$.
Moyenne : $\\dfrac{242}{20} = 12{,}1$. La moyenne de la classe est $12{,}1$ sur $20$.

**3.** Au moins $12$ : $6 + 4 + 3 = 13$ élèves. $\\dfrac{13}{20} = \\dfrac{65}{100} = 65\\,\\%$.

**4.** Nouvelle somme : $242 + 20 = 262$ pour $21$ élèves. Nouvelle moyenne : $\\dfrac{262}{21} \\approx 12{,}48$.
L'augmentation est d'environ $12{,}48 - 12{,}1 = 0{,}38$, inférieure à $0{,}5$ : la moyenne n'augmente **pas** de plus d'un demi-point.`
    },
    {
      id: "5D1-ds-06",
      title: "Lire un diagramme en bâtons",
      difficulty: 3,
      points: 5,
      statement: `On a demandé à chaque élève d'une classe combien il a de frères et sœurs. Les résultats sont représentés par le diagramme en bâtons ci-dessous.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 350 250" width="350" height="250" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="50" y1="200" x2="330" y2="200" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="40" y="205" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">0</text><line x1="50" y1="184" x2="330" y2="184" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="168" x2="330" y2="168" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="40" y="173" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">2</text><line x1="50" y1="152" x2="330" y2="152" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="136" x2="330" y2="136" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="40" y="141" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">4</text><line x1="50" y1="120" x2="330" y2="120" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="104" x2="330" y2="104" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="40" y="109" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">6</text><line x1="50" y1="88" x2="330" y2="88" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="72" x2="330" y2="72" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="40" y="77" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">8</text><line x1="50" y1="56" x2="330" y2="56" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><line x1="50" y1="40" x2="330" y2="40" stroke="currentColor" stroke-opacity="0.18" stroke-width="1" /><text x="40" y="45" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">10</text><line x1="50" y1="200" x2="330" y2="200" stroke="currentColor" stroke-width="1.6" /><line x1="50" y1="200" x2="50" y2="30" stroke="currentColor" stroke-width="1.6" /><rect x="78" y="120" width="24" height="80" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1.2" /><text x="90" y="218" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">0</text><rect x="133" y="56" width="24" height="144" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1.2" /><text x="145" y="218" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">1</text><rect x="188" y="88" width="24" height="112" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1.2" /><text x="200" y="218" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">2</text><rect x="243" y="152" width="24" height="48" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1.2" /><text x="255" y="218" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">3</text><rect x="298" y="184" width="24" height="16" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1.2" /><text x="310" y="218" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">4</text><text x="190" y="240" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">Nombre de frères et sœurs</text><text x="55" y="22" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="start">Effectif</text></svg></div>

1. Combien d'élèves ont exactement $2$ frères et sœurs ?
2. Construire le tableau d'effectifs de cette série et calculer l'effectif total.
3. Calculer le nombre moyen de frères et sœurs par élève.
4. Quel pourcentage des élèves a au moins $2$ frères et sœurs ?`,
      solution: `**1.** Le bâton correspondant à $2$ s'arrête à la graduation $7$ : $7$ élèves ont exactement $2$ frères et sœurs.

**2.**

| Nombre de frères et sœurs | $0$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|
| Effectif | $5$ | $9$ | $7$ | $3$ | $1$ |

Effectif total : $5 + 9 + 7 + 3 + 1 = 25$ élèves.

**3.** Nombre total de frères et sœurs : $0 \\times 5 + 1 \\times 9 + 2 \\times 7 + 3 \\times 3 + 4 \\times 1 = 0 + 9 + 14 + 9 + 4 = 36$.
Moyenne : $\\dfrac{36}{25} = 1{,}44$. En moyenne, un élève a $1{,}44$ frère ou sœur.

**4.** Au moins $2$ : $7 + 3 + 1 = 11$ élèves. $\\dfrac{11}{25} = \\dfrac{44}{100} = 44\\,\\%$.`
    },
    {
      id: "5D1-ds-07",
      title: "Quelle note pour atteindre 12 ?",
      difficulty: 4,
      points: 6,
      statement: `Léa a obtenu les notes suivantes (sur $20$) : $11$ ; $14$ ; $9$ ; $13$. Il lui reste un dernier contrôle, de même coefficient.

1. Calculer la moyenne actuelle de Léa.
2. Quelle note doit-elle obtenir au dernier contrôle pour avoir exactement $12$ de moyenne ? Justifier.
3. Quelle note devrait-elle obtenir pour avoir $13$ de moyenne ?
4. Léa peut-elle espérer obtenir $14$ de moyenne ? Justifier.`,
      solution: `**1.** $11 + 14 + 9 + 13 = 47$ ; moyenne : $\\dfrac{47}{4} = 11{,}75$ sur $20$.

**2.** Pour avoir $12$ de moyenne sur $5$ notes, la somme des notes doit être $12 \\times 5 = 60$. Il lui faut donc $60 - 47 = 13$.
Vérification : $\\dfrac{47 + 13}{5} = \\dfrac{60}{5} = 12$.

**3.** Somme nécessaire : $13 \\times 5 = 65$ ; note nécessaire : $65 - 47 = 18$.

**4.** Somme nécessaire : $14 \\times 5 = 70$ ; note nécessaire : $70 - 47 = 23$. Or une note sur $20$ ne peut pas dépasser $20$ : Léa ne peut **pas** obtenir $14$ de moyenne (au mieux, avec $20$, elle aurait $\\dfrac{67}{5} = 13{,}4$).`
    },
    {
      id: "5D1-ds-08",
      title: "Demi-pensionnaires dans deux classes",
      difficulty: 4,
      points: 6,
      statement: `Au collège, la 5e A compte $20$ élèves dont $15$ demi-pensionnaires ; la 5e B compte $30$ élèves dont $12$ demi-pensionnaires.

1. Calculer la fréquence des demi-pensionnaires dans chaque classe, en pourcentage.
2. Dans quelle classe la proportion de demi-pensionnaires est-elle la plus grande ? Y a-t-il pour autant plus de demi-pensionnaires dans cette classe ?
3. On regroupe les deux classes. Calculer le pourcentage de demi-pensionnaires dans ce groupe.
4. Tom affirme : « Il suffit de faire la moyenne des deux pourcentages de la question 1. » A-t-il raison ? Justifier.`,
      solution: `**1.** 5e A : $\\dfrac{15}{20} = \\dfrac{75}{100} = 75\\,\\%$. 5e B : $\\dfrac{12}{30} = \\dfrac{4}{10} = 40\\,\\%$.

**2.** La proportion est plus grande en 5e A ($75\\,\\% > 40\\,\\%$). Il y a d'ailleurs aussi plus de demi-pensionnaires en 5e A ($15$ contre $12$) ; mais ce n'est pas toujours le cas : une fréquence compare un effectif à l'effectif total de la classe.

**3.** Groupe : $15 + 12 = 27$ demi-pensionnaires sur $20 + 30 = 50$ élèves. $\\dfrac{27}{50} = \\dfrac{54}{100} = 54\\,\\%$.

**4.** Moyenne des deux pourcentages : $\\dfrac{75 + 40}{2} = 57{,}5\\,\\%$, alors que le vrai pourcentage est $54\\,\\%$. Tom a tort : les deux classes n'ont pas le même effectif, donc on ne peut pas faire la moyenne des pourcentages ; il faut revenir aux effectifs.`
    }
  ],
  "5D2": [
    {
      id: "5D2-ds-01",
      title: "Le lancer d'un dé équilibré",
      difficulty: 1,
      points: 4,
      statement: `On lance un dé équilibré à six faces numérotées de 1 à 6 et on note le numéro de la face du dessus.

1. Cette expérience est-elle une expérience aléatoire ? Justifier.
2. Donner la liste de toutes les issues possibles.
3. Calculer la probabilité de chacun des événements suivants :
   a) A : « obtenir 5 » ;
   b) B : « obtenir un nombre pair » ;
   c) C : « obtenir un multiple de 3 ».
4. Quelle est la probabilité de l'événement D : « obtenir 7 » ? Comment appelle-t-on un tel événement ?`,
      solution: `**1.** Oui : on connaît toutes les issues possibles, mais on ne peut pas prévoir à l'avance celle qui va se produire. C'est une expérience aléatoire.

**2.** Les issues possibles sont : 1 ; 2 ; 3 ; 4 ; 5 ; 6. Il y en a 6.

**3.** Le dé est équilibré, donc les 6 issues ont la même probabilité, égale à $\\dfrac{1}{6}$.
a) Une seule issue réalise A (le 5) : $P(A) = \\dfrac{1}{6}$.
b) Les issues 2, 4 et 6 réalisent B : $P(B) = \\dfrac{3}{6} = \\dfrac{1}{2}$.
c) Les multiples de 3 compris entre 1 et 6 sont 3 et 6 : $P(C) = \\dfrac{2}{6} = \\dfrac{1}{3}$.

**4.** Aucune face ne porte le numéro 7 : aucune issue ne réalise D, donc $P(D) = 0$. C'est un **événement impossible**.`
    },
    {
      id: "5D2-ds-02",
      title: "Le sac de billes",
      difficulty: 1,
      points: 4,
      statement: `Un sac opaque contient 5 billes rouges, 3 billes bleues et 2 billes vertes, indiscernables au toucher. On tire une bille au hasard et on regarde sa couleur.

1. Combien y a-t-il de billes dans le sac ?
2. Calculer la probabilité de tirer une bille rouge, puis celle de tirer une bille bleue.
3. Calculer la probabilité de l'événement « ne pas tirer une bille verte ».
4. Sur une échelle de probabilité graduée de 0 à 1, l'événement « tirer une bille rouge » est-il plutôt du côté de « impossible », au milieu ou plutôt du côté de « certain » ? Justifier.`,
      solution: `**1.** $5 + 3 + 2 = 10$. Il y a 10 billes dans le sac.

**2.** Les billes sont indiscernables au toucher, donc chaque bille a la même chance d'être tirée : c'est une situation d'équiprobabilité.
- 5 billes sur 10 sont rouges : $P(\\text{rouge}) = \\dfrac{5}{10} = \\dfrac{1}{2}$.
- 3 billes sur 10 sont bleues : $P(\\text{bleue}) = \\dfrac{3}{10}$.

**3.** Les billes qui ne sont pas vertes sont les rouges et les bleues : $5 + 3 = 8$ billes.
$P(\\text{pas verte}) = \\dfrac{8}{10} = \\dfrac{4}{5}$.

**4.** $P(\\text{rouge}) = \\dfrac{1}{2} = 0{,}5$ : l'événement se place exactement **au milieu** de l'échelle. Il a autant de chances de se produire que de ne pas se produire.`
    },
    {
      id: "5D2-ds-03",
      title: "La roue de la kermesse",
      difficulty: 2,
      points: 5,
      statement: `À la kermesse du collège, une roue est partagée en 12 secteurs identiques numérotés de 1 à 12. On fait tourner la roue et on note le numéro du secteur qui s'arrête devant la flèche. Chaque secteur a la même chance d'être obtenu.

On considère les événements :
- A : « obtenir un nombre premier » ;
- B : « obtenir un multiple de 4 » ;
- C : « obtenir un diviseur de 12 ».

1. Pour chaque événement, écrire la liste des issues qui le réalisent.
2. Calculer $P(A)$, $P(B)$ et $P(C)$. Donner les résultats sous forme de fractions simplifiées.
3. Ranger ces trois événements du moins probable au plus probable.
4. Léo gagne un lot s'il obtient un nombre supérieur ou égal à 10. Quelle est la probabilité qu'il gagne ?`,
      solution: `**1.**
- A : 2 ; 3 ; 5 ; 7 ; 11 (1 n'est pas un nombre premier). 5 issues.
- B : 4 ; 8 ; 12. 3 issues.
- C : 1 ; 2 ; 3 ; 4 ; 6 ; 12. 6 issues.

**2.** Il y a 12 issues équiprobables.
$P(A) = \\dfrac{5}{12}$ ; $\\quad P(B) = \\dfrac{3}{12} = \\dfrac{1}{4}$ ; $\\quad P(C) = \\dfrac{6}{12} = \\dfrac{1}{2}$.

**3.** Avec le même dénominateur 12 : $\\dfrac{3}{12} < \\dfrac{5}{12} < \\dfrac{6}{12}$, donc $P(B) < P(A) < P(C)$.
Du moins probable au plus probable : B, puis A, puis C.

**4.** Les issues gagnantes sont 10 ; 11 ; 12, soit 3 issues sur 12.
La probabilité que Léo gagne est $\\dfrac{3}{12} = \\dfrac{1}{4}$.`
    },
    {
      id: "5D2-ds-04",
      title: "Tirer une carte dans un jeu de 32 cartes",
      difficulty: 2,
      points: 5,
      statement: `Un jeu de 32 cartes comporte 4 couleurs (cœur, carreau, trèfle, pique). Dans chaque couleur, il y a 8 cartes : 7, 8, 9, 10, valet, dame, roi et as. Le valet, la dame et le roi sont appelés des **figures**.

On tire une carte au hasard dans ce jeu bien mélangé.

1. Calculer la probabilité de tirer un as.
2. Calculer la probabilité de tirer un cœur.
3. Calculer la probabilité de tirer une figure.
4. Calculer la probabilité de tirer l'as de pique.
5. Nina affirme : « J'ai plus de chances de tirer une figure qu'un cœur. » A-t-elle raison ? Justifier.`,
      solution: `Le jeu est bien mélangé : les 32 cartes ont la même probabilité d'être tirées.

**1.** Il y a 4 as (un par couleur) : $P(\\text{as}) = \\dfrac{4}{32} = \\dfrac{1}{8}$.

**2.** Il y a 8 cœurs : $P(\\text{cœur}) = \\dfrac{8}{32} = \\dfrac{1}{4}$.

**3.** Il y a 3 figures par couleur et 4 couleurs, soit $3 \\times 4 = 12$ figures : $P(\\text{figure}) = \\dfrac{12}{32} = \\dfrac{3}{8}$.

**4.** Il n'y a qu'un as de pique : $P(\\text{as de pique}) = \\dfrac{1}{32}$.

**5.** $P(\\text{figure}) = \\dfrac{12}{32}$ et $P(\\text{cœur}) = \\dfrac{8}{32}$. Comme $12 > 8$, on a $P(\\text{figure}) > P(\\text{cœur})$ : Nina a raison.`
    },
    {
      id: "5D2-ds-05",
      title: "Choisir la meilleure urne",
      difficulty: 3,
      points: 5,
      statement: `Pour gagner à un jeu, il faut tirer une boule blanche. On a le choix entre deux urnes ; dans chacune, les boules sont indiscernables au toucher.
- Urne A : 3 boules noires et 5 boules blanches.
- Urne B : 7 boules noires et 11 boules blanches.

1. Calculer la probabilité de tirer une boule blanche dans l'urne A.
2. Calculer la probabilité de tirer une boule blanche dans l'urne B.
3. Dans quelle urne vaut-il mieux tirer ? Justifier en comparant les deux probabilités (on pourra utiliser des valeurs approchées au millième).
4. On ajoute une boule blanche dans l'urne B. Le choix de la question 3 change-t-il ? Justifier.`,
      solution: `**1.** L'urne A contient $3 + 5 = 8$ boules, dont 5 blanches : $P_A = \\dfrac{5}{8} = 0{,}625$.

**2.** L'urne B contient $7 + 11 = 18$ boules, dont 11 blanches : $P_B = \\dfrac{11}{18} \\approx 0{,}611$.

**3.** $0{,}625 > 0{,}611$, donc $P_A > P_B$ : il vaut mieux tirer dans l'**urne A**.
(Remarque : l'urne B contient plus de boules blanches, mais aussi beaucoup plus de boules en tout ; c'est la proportion qui compte.)

**4.** L'urne B contient alors 19 boules dont 12 blanches : $P_B = \\dfrac{12}{19} \\approx 0{,}632$.
Comme $0{,}632 > 0{,}625$, c'est maintenant l'**urne B** qui est la plus avantageuse : le choix change.`
    },
    {
      id: "5D2-ds-06",
      title: "Le dé est-il truqué ?",
      difficulty: 3,
      points: 5,
      statement: `Léa a lancé 120 fois le même dé à six faces et a noté les résultats dans le tableau ci-dessous.

| Face obtenue | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Effectif | 18 | 22 | 19 | 21 | 17 | 23 |

1. Vérifier que le total des effectifs est bien 120.
2. Calculer la fréquence d'apparition de la face 6. Arrondir au centième.
3. Si le dé est équilibré, quelle est la probabilité d'obtenir 6 ? En donner une valeur approchée au centième.
4. Léa affirme : « La face 6 est sortie plus souvent que les autres, donc mon dé est truqué. » Que peut-on lui répondre ?
5. Calculer la fréquence des résultats pairs dans cette série et la comparer à la probabilité d'obtenir un nombre pair avec un dé équilibré.`,
      solution: `**1.** $18 + 22 + 19 + 21 + 17 + 23 = 120$. Le total est bien 120.

**2.** Fréquence de la face 6 : $\\dfrac{23}{120} \\approx 0{,}19$.

**3.** Avec un dé équilibré, les 6 faces sont équiprobables : $P(6) = \\dfrac{1}{6} \\approx 0{,}17$.

**4.** La fréquence $0{,}19$ est proche de la probabilité $0{,}17$. Sur seulement 120 lancers, il est normal que les fréquences ne soient pas exactement égales à $\\dfrac{1}{6}$ : les résultats **fluctuent**. On ne peut pas conclure que le dé est truqué ; il faudrait faire beaucoup plus de lancers pour en juger.

**5.** Résultats pairs : $22 + 21 + 23 = 66$. Fréquence : $\\dfrac{66}{120} = 0{,}55$.
Probabilité d'obtenir un nombre pair avec un dé équilibré : $\\dfrac{3}{6} = 0{,}5$.
La fréquence observée ($0{,}55$) est proche de la probabilité ($0{,}5$).`
    },
    {
      id: "5D2-ds-07",
      title: "Retrouver le contenu d'un sac",
      difficulty: 4,
      points: 6,
      statement: `Un sac contient 20 jetons rouges, bleus ou verts, indiscernables au toucher. On tire un jeton au hasard. On sait que :
- la probabilité de tirer un jeton rouge est $\\dfrac{1}{4}$ ;
- la probabilité de tirer un jeton bleu est $\\dfrac{2}{5}$.

1. Combien y a-t-il de jetons rouges dans le sac ? de jetons bleus ?
2. En déduire le nombre de jetons verts, puis la probabilité de tirer un jeton vert.
3. Vérifier que la somme des probabilités des trois couleurs est égale à 1.
4. On veut ajouter uniquement des jetons verts dans le sac pour que la probabilité de tirer un jeton vert soit égale à $\\dfrac{1}{2}$. Combien faut-il en ajouter ? Justifier.`,
      solution: `**1.** Jetons rouges : $\\dfrac{1}{4}$ de 20, soit $20 \\div 4 = 5$ jetons rouges.
Jetons bleus : $\\dfrac{2}{5}$ de 20, soit $20 \\div 5 \\times 2 = 8$ jetons bleus.

**2.** Jetons verts : $20 - 5 - 8 = 7$. Donc $P(\\text{vert}) = \\dfrac{7}{20}$.

**3.** $\\dfrac{5}{20} + \\dfrac{8}{20} + \\dfrac{7}{20} = \\dfrac{20}{20} = 1$. La somme vaut bien 1.

**4.** Pour avoir une probabilité de $\\dfrac{1}{2}$, il faut que les jetons verts représentent la moitié des jetons, donc qu'il y ait autant de verts que de jetons non verts.
Les jetons non verts sont les rouges et les bleus : $5 + 8 = 13$ jetons, et leur nombre ne change pas.
Il faut donc 13 jetons verts, soit $13 - 7 = 6$ jetons verts à ajouter.
Vérification : le sac contient alors $20 + 6 = 26$ jetons dont 13 verts, et $\\dfrac{13}{26} = \\dfrac{1}{2}$.`
    },
    {
      id: "5D2-ds-08",
      title: "Deux dés à quatre faces",
      difficulty: 4,
      points: 6,
      statement: `On lance deux dés équilibrés à quatre faces (en forme de tétraèdre), numérotées de 1 à 4 : un dé rouge et un dé bleu. On s'intéresse à la **somme** des deux numéros obtenus.

1. Recopier et compléter le tableau à double entrée suivant, qui donne la somme pour chaque issue.

| Rouge \\ Bleu | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| 1 | 2 | … | … | … |
| 2 | … | … | … | … |
| 3 | … | … | … | … |
| 4 | … | … | … | … |

2. Combien y a-t-il d'issues possibles ? Sont-elles équiprobables ?
3. Calculer la probabilité d'obtenir une somme égale à 5, puis la probabilité d'obtenir une somme supérieure ou égale à 6.
4. Quelle est la somme la plus probable ? Justifier.
5. Sam propose un jeu : « Je gagne si le **produit** des deux numéros est pair, tu gagnes s'il est impair. » Ce jeu est-il équitable ? Justifier.`,
      solution: `**1.**

| Rouge \\ Bleu | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 |
| 2 | 3 | 4 | 5 | 6 |
| 3 | 4 | 5 | 6 | 7 |
| 4 | 5 | 6 | 7 | 8 |

**2.** Il y a $4 \\times 4 = 16$ issues (16 cases du tableau). Les dés sont équilibrés : chaque case a la même probabilité $\\dfrac{1}{16}$.

**3.** La somme 5 apparaît dans 4 cases : $P(\\text{somme} = 5) = \\dfrac{4}{16} = \\dfrac{1}{4}$.
Somme supérieure ou égale à 6 : 6 apparaît 3 fois, 7 apparaît 2 fois, 8 apparaît 1 fois, soit 6 cases : $P = \\dfrac{6}{16} = \\dfrac{3}{8}$.

**4.** Effectifs des sommes : 2 → 1 ; 3 → 2 ; 4 → 3 ; 5 → 4 ; 6 → 3 ; 7 → 2 ; 8 → 1. La somme 5 apparaît le plus souvent : c'est la plus probable, avec une probabilité de $\\dfrac{1}{4}$.

**5.** Le produit est impair seulement si les deux numéros sont impairs (1 ou 3) : $2 \\times 2 = 4$ cases sur 16. Le produit est pair dans les $16 - 4 = 12$ autres cases.
$P(\\text{Sam gagne}) = \\dfrac{12}{16} = \\dfrac{3}{4}$ et $P(\\text{l'autre gagne}) = \\dfrac{4}{16} = \\dfrac{1}{4}$.
Les deux probabilités sont différentes : le jeu **n'est pas équitable**, il avantage Sam.`
    }
  ],
  "5P1": [
    {
      id: "5P1-ds-01",
      title: "Reconnaître une situation de proportionnalité",
      difficulty: 1,
      points: 4,
      statement: `On donne deux tableaux.

**Tableau 1 :** prix payé au marché en fonction de la masse de pommes achetée.

| Masse (kg) | 2 | 3 | 5 |
|---|---|---|---|
| Prix (€) | 4,80 | 7,20 | 12 |

**Tableau 2 :** taille d'un enfant en fonction de son âge.

| Âge (ans) | 2 | 4 | 8 |
|---|---|---|---|
| Taille (cm) | 86 | 102 | 128 |

1. Le tableau 1 est-il un tableau de proportionnalité ? Justifier par des calculs de quotients.
2. Le tableau 2 est-il un tableau de proportionnalité ? Justifier.
3. Quel est le prix de 8 kg de pommes ?`,
      solution: `**1.** On calcule les quotients prix ÷ masse :
$4{,}80 \\div 2 = 2{,}4$ ; $\\quad 7{,}20 \\div 3 = 2{,}4$ ; $\\quad 12 \\div 5 = 2{,}4$.
Les quotients sont tous égaux à $2{,}4$ : le tableau 1 est un tableau de proportionnalité, de coefficient $2{,}4$ (le kilogramme de pommes coûte $2{,}40$ €).

**2.** $86 \\div 2 = 43$ et $102 \\div 4 = 25{,}5$. Les quotients ne sont pas égaux : le tableau 2 n'est **pas** un tableau de proportionnalité. (On le voit aussi sans calcul : quand l'âge double de 4 à 8 ans, la taille ne double pas.)

**3.** $8 \\times 2{,}4 = 19{,}2$. Le prix de 8 kg de pommes est $19{,}20$ €.`
    },
    {
      id: "5P1-ds-02",
      title: "Une recette de crêpes",
      difficulty: 1,
      points: 4,
      statement: `Pour faire des crêpes pour 4 personnes, il faut 200 g de farine et 60 cL de lait. Les quantités sont proportionnelles au nombre de personnes.

1. Recopier et compléter le tableau suivant.

| Nombre de personnes | 4 | 2 | 6 | 10 |
|---|---|---|---|---|
| Farine (g) | 200 | … | … | … |
| Lait (cL) | 60 | … | … | … |

2. Quelle quantité de lait faut-il pour une personne ?
3. Avec 1 L de lait, pour combien de personnes au maximum peut-on préparer des crêpes ?`,
      solution: `**1.**
- Pour 2 personnes (moitié de 4) : $200 \\div 2 = 100$ g de farine et $60 \\div 2 = 30$ cL de lait.
- Pour 6 personnes ($4 + 2$) : $200 + 100 = 300$ g et $60 + 30 = 90$ cL.
- Pour 10 personnes ($4 + 6$) : $200 + 300 = 500$ g et $60 + 90 = 150$ cL.

| Nombre de personnes | 4 | 2 | 6 | 10 |
|---|---|---|---|---|
| Farine (g) | 200 | 100 | 300 | 500 |
| Lait (cL) | 60 | 30 | 90 | 150 |

**2.** Passage à l'unité : $60 \\div 4 = 15$. Il faut 15 cL de lait par personne.

**3.** $1$ L $= 100$ cL et $100 \\div 15 \\approx 6{,}7$. On peut préparer des crêpes pour **6 personnes** au maximum (pour 7 personnes, il faudrait $7 \\times 15 = 105$ cL).`
    },
    {
      id: "5P1-ds-03",
      title: "Pourcentages au quotidien",
      difficulty: 2,
      points: 5,
      statement: `1. Dans un collège de 540 élèves, 35 % des élèves mangent à la cantine. Combien d'élèves mangent à la cantine ?
2. Pendant les soldes, un pull affiché à 48 € bénéficie d'une réduction de 30 %.
   a) Calculer le montant de la réduction.
   b) Calculer le prix payé après réduction.
3. Dans une classe, 27 élèves sur 60 inscrits à l'association sportive pratiquent le handball. Quel pourcentage des inscrits cela représente-t-il ?`,
      solution: `**1.** Prendre 35 % de 540, c'est calculer $\\dfrac{35}{100} \\times 540 = 0{,}35 \\times 540 = 189$.
189 élèves mangent à la cantine.

**2.** a) $\\dfrac{30}{100} \\times 48 = 0{,}3 \\times 48 = 14{,}4$. La réduction est de $14{,}40$ €.
b) $48 - 14{,}40 = 33{,}60$. Le pull coûte $33{,}60$ € après réduction.

**3.** On cherche $p$ tel que $\\dfrac{27}{60} = \\dfrac{p}{100}$.
$27 \\div 60 = 0{,}45 = \\dfrac{45}{100}$. Les joueurs de handball représentent **45 %** des inscrits.`
    },
    {
      id: "5P1-ds-04",
      title: "Cartes et plans à l'échelle",
      difficulty: 2,
      points: 5,
      statement: `1. Sur une carte de randonnée à l'échelle $\\dfrac{1}{25\\,000}$, deux refuges sont distants de 6 cm.
   a) Que signifie cette échelle ?
   b) Calculer la distance réelle entre les deux refuges, en km.
2. Sur cette même carte, quelle longueur représente un sentier rectiligne de 4 km ?
3. Sur le plan d'une maison à l'échelle $\\dfrac{1}{50}$, le salon mesure 7,5 cm de long. Quelle est sa longueur réelle, en mètres ?`,
      solution: `**1.** a) L'échelle $\\dfrac{1}{25\\,000}$ signifie que 1 cm sur la carte représente $25\\,000$ cm en réalité. Les distances réelles sont proportionnelles aux distances sur la carte.
b) $6 \\times 25\\,000 = 150\\,000$ cm. Or $150\\,000$ cm $= 1\\,500$ m $= 1{,}5$ km.
Les refuges sont distants de **1,5 km**.

**2.** $4$ km $= 400\\,000$ cm et $400\\,000 \\div 25\\,000 = 16$.
Le sentier mesure **16 cm** sur la carte.

**3.** $7{,}5 \\times 50 = 375$ cm $= 3{,}75$ m. Le salon mesure **3,75 m** de long.`
    },
    {
      id: "5P1-ds-05",
      title: "Deux tarifs pour la piscine",
      difficulty: 3,
      points: 5,
      statement: `La piscine municipale propose deux tarifs :
- **Tarif A :** 6 € par entrée ;
- **Tarif B :** un abonnement annuel de 20 €, puis 4 € par entrée.

1. Recopier et compléter le tableau.

| Nombre d'entrées | 2 | 5 | 10 | 15 |
|---|---|---|---|---|
| Prix avec le tarif A (€) | … | … | … | … |
| Prix avec le tarif B (€) | … | … | … | … |

2. L'un des deux tarifs est-il proportionnel au nombre d'entrées ? Justifier.
3. On représente chaque tarif dans un repère (nombre d'entrées en abscisse, prix en ordonnée). Pour quel tarif les points sont-ils alignés avec l'origine du repère ? Justifier sans tracer.
4. Inès compte aller à la piscine 12 fois dans l'année. Quel tarif doit-elle choisir ? Justifier.`,
      solution: `**1.**
- Tarif A : $6 \\times 2 = 12$ ; $6 \\times 5 = 30$ ; $6 \\times 10 = 60$ ; $6 \\times 15 = 90$.
- Tarif B : $20 + 4 \\times 2 = 28$ ; $20 + 4 \\times 5 = 40$ ; $20 + 4 \\times 10 = 60$ ; $20 + 4 \\times 15 = 80$.

| Nombre d'entrées | 2 | 5 | 10 | 15 |
|---|---|---|---|---|
| Prix avec le tarif A (€) | 12 | 30 | 60 | 90 |
| Prix avec le tarif B (€) | 28 | 40 | 60 | 80 |

**2.** Tarif A : les quotients prix ÷ entrées valent tous 6 ($12 \\div 2 = 30 \\div 5 = 60 \\div 10 = 90 \\div 15 = 6$) : il est proportionnel.
Tarif B : $28 \\div 2 = 14$ et $40 \\div 5 = 8$ : les quotients sont différents, il n'est pas proportionnel.

**3.** Une situation de proportionnalité est représentée par des points alignés avec l'origine. C'est donc le cas du **tarif A** seulement (pour le tarif B, 0 entrée coûte déjà 20 €).

**4.** Tarif A : $6 \\times 12 = 72$ €. Tarif B : $20 + 4 \\times 12 = 68$ €.
$68 < 72$ : Inès doit choisir le **tarif B**, elle économise 4 €.`
    },
    {
      id: "5P1-ds-06",
      title: "Comparer des prix et passer à l'unité",
      difficulty: 3,
      points: 5,
      statement: `1. Au supermarché, le même café est vendu en deux formats :
   - paquet de 750 g à 4,20 € ;
   - paquet de 1,2 kg à 6,48 €.

   Calculer le prix d'un kilogramme de café pour chaque format. Quel est le format le plus avantageux ?
2. Une imprimante imprime 14 pages en 40 secondes, à vitesse constante.
   a) Combien de pages imprime-t-elle en 3 minutes ?
   b) Combien de temps lui faut-il pour imprimer 98 pages ? Donner la réponse en minutes et secondes.`,
      solution: `**1.** Le prix est proportionnel à la masse.
- Format 750 g : $750$ g $= 0{,}75$ kg et $4{,}20 \\div 0{,}75 = 5{,}6$. Le kilogramme coûte $5{,}60$ €.
- Format 1,2 kg : $6{,}48 \\div 1{,}2 = 5{,}4$. Le kilogramme coûte $5{,}40$ €.

$5{,}40 < 5{,}60$ : le paquet de **1,2 kg** est le plus avantageux.

**2.** a) $3$ min $= 180$ s. En 180 s, l'imprimante imprime $\\dfrac{14 \\times 180}{40} = \\dfrac{2\\,520}{40} = 63$ pages.
b) $98 \\div 14 = 7$ : il y a 7 fois plus de pages, donc il faut 7 fois plus de temps : $7 \\times 40 = 280$ s.
$280$ s $= 4 \\times 60$ s $+ 40$ s, soit **4 min 40 s**.`
    },
    {
      id: "5P1-ds-07",
      title: "Une hausse puis une baisse",
      difficulty: 4,
      points: 6,
      statement: `Un vélo coûte 250 €. En septembre, son prix augmente de 10 %. En janvier, le nouveau prix baisse de 10 %.

1. Calculer le prix du vélo après l'augmentation de septembre.
2. Calculer le prix du vélo après la baisse de janvier.
3. Tom affirme : « Une hausse de 10 % puis une baisse de 10 %, ça s'annule : le vélo coûte à nouveau 250 €. » A-t-il raison ? Expliquer pourquoi.
4. Finalement, de combien d'euros le prix a-t-il varié entre le départ et janvier ? Quel pourcentage du prix de départ cela représente-t-il ?`,
      solution: `**1.** Augmentation : $\\dfrac{10}{100} \\times 250 = 25$ €. Nouveau prix : $250 + 25 = 275$ €.

**2.** Baisse : $\\dfrac{10}{100} \\times 275 = 27{,}5$ €. Prix en janvier : $275 - 27{,}50 = 247{,}50$ €.

**3.** Tom a tort : le vélo coûte $247{,}50$ € et non 250 €. Les deux pourcentages ne s'appliquent pas au même prix : la hausse de 10 % porte sur 250 € (elle vaut 25 €), alors que la baisse de 10 % porte sur 275 € (elle vaut $27{,}50$ €). La baisse est donc plus grande que la hausse.

**4.** $250 - 247{,}50 = 2{,}50$ €. Le prix a baissé de $2{,}50$ €.
$\\dfrac{2{,}5}{250} = 0{,}01 = \\dfrac{1}{100}$ : cela représente une baisse de **1 %** du prix de départ.`
    },
    {
      id: "5P1-ds-08",
      title: "Le plan d'un terrain",
      difficulty: 4,
      points: 6,
      statement: `Sur un plan à l'échelle $\\dfrac{1}{200}$, un terrain rectangulaire mesure 9 cm de long et 6 cm de large.

1. Calculer les dimensions réelles du terrain, en mètres.
2. Calculer l'aire réelle du terrain, en m², puis l'aire du rectangle dessiné sur le plan, en cm².
3. Convertir l'aire réelle en cm², puis calculer combien de fois l'aire réelle est plus grande que l'aire sur le plan.
4. Paul dit : « Puisque l'échelle est $\\dfrac{1}{200}$, l'aire réelle est 200 fois plus grande que l'aire sur le plan. » A-t-il raison ? Justifier à l'aide des questions précédentes.`,
      solution: `**1.** Les longueurs réelles sont 200 fois plus grandes que sur le plan.
- Longueur : $9 \\times 200 = 1\\,800$ cm $= 18$ m.
- Largeur : $6 \\times 200 = 1\\,200$ cm $= 12$ m.

**2.** Aire réelle : $18 \\times 12 = 216$ m².
Aire sur le plan : $9 \\times 6 = 54$ cm².

**3.** $1$ m² $= 10\\,000$ cm², donc $216$ m² $= 2\\,160\\,000$ cm².
$2\\,160\\,000 \\div 54 = 40\\,000$ : l'aire réelle est $40\\,000$ fois plus grande que l'aire sur le plan.

**4.** Paul a tort : l'aire est multipliée par $40\\,000$ et non par 200. En effet, la longueur **et** la largeur sont chacune multipliées par 200, donc l'aire est multipliée par $200 \\times 200 = 40\\,000$. L'échelle concerne les longueurs, pas les aires.`
    }
  ],
  "5P2": [
    {
      id: "5P2-ds-01",
      title: "Location de vélos",
      difficulty: 1,
      points: 4,
      statement: `Un loueur de vélos affiche ses tarifs dans le tableau suivant.

| Durée de location (h) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Prix (€) | 5 | 7 | 9 | 11 | 13 |

1. Quel est le prix d'une location de 3 heures ?
2. Pendant combien de temps peut-on louer un vélo avec 13 € ?
3. Compléter la phrase : « Le prix est donné en fonction de … ».
4. Le prix est-il proportionnel à la durée de location ? Justifier.`,
      solution: `**1.** On lit dans la colonne « 3 h » : une location de 3 heures coûte **9 €**.

**2.** On cherche 13 dans la ligne des prix : il correspond à 5 h. Avec 13 €, on peut louer un vélo pendant **5 heures**.

**3.** « Le prix est donné en fonction de **la durée de location**. » (C'est la durée que l'on choisit ; le prix en dépend.)

**4.** $5 \\div 1 = 5$ et $7 \\div 2 = 3{,}5$. Les quotients prix ÷ durée ne sont pas égaux : le prix **n'est pas** proportionnel à la durée. (On le voit aussi : pour 2 h, on ne paie pas le double du prix d'une heure.)`
    },
    {
      id: "5P2-ds-02",
      title: "Températures d'une journée d'hiver",
      difficulty: 1,
      points: 4,
      statement: `Une station météo a relevé la température toutes les deux heures au cours d'une journée de janvier.

| Heure (h) | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Température (°C) | −3 | −4 | −5 | −4 | 0 | 4 | 8 | 11 | 12 | 9 | 5 | 2 |

1. Quelle température faisait-il à 14 h ?
2. À quelle heure la température a-t-elle été la plus basse ? la plus haute ? Donner ces températures.
3. Entre quelles heures relevées la température a-t-elle été négative ?
4. Dans un repère, avec l'heure en abscisse et la température en ordonnée, quelles seraient les coordonnées du point correspondant au relevé de 6 h ?`,
      solution: `**1.** À 14 h, il faisait **11 °C**.

**2.** La température la plus basse est $-5$ °C, relevée à **4 h**. La plus haute est $12$ °C, relevée à **16 h**.

**3.** La température est négative aux relevés de 0 h, 2 h, 4 h et 6 h ($-3$ ; $-4$ ; $-5$ ; $-4$), et vaut 0 °C à 8 h. Elle a donc été négative de **0 h à 6 h** (au moins jusqu'au relevé de 6 h).

**4.** L'abscisse est l'heure (6) et l'ordonnée la température ($-4$) : le point a pour coordonnées $(6 \\,;\\, -4)$.`
    },
    {
      id: "5P2-ds-03",
      title: "Périmètre et aire d'un carré",
      difficulty: 2,
      points: 5,
      statement: `On considère un carré dont le côté $c$ est exprimé en cm.

1. Recopier et compléter le tableau suivant.

| Côté $c$ (cm) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Périmètre (cm) | … | … | … | … | … |
| Aire (cm²) | … | … | … | … | … |

2. Exprimer le périmètre $P$ puis l'aire $A$ en fonction de $c$.
3. Le périmètre est-il proportionnel au côté ? Et l'aire ? Justifier.
4. On place dans un repère les points dont l'abscisse est le côté et l'ordonnée l'aire. Les points obtenus sont-ils alignés avec l'origine ? Justifier à l'aide de la question 3.`,
      solution: `**1.** Le périmètre vaut $4 \\times c$ et l'aire $c \\times c$.

| Côté $c$ (cm) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Périmètre (cm) | 4 | 8 | 12 | 16 | 20 |
| Aire (cm²) | 1 | 4 | 9 | 16 | 25 |

**2.** $P = 4 \\times c$ (ou $4c$) et $A = c \\times c = c^2$.

**3.** Périmètre : $4 \\div 1 = 8 \\div 2 = 12 \\div 3 = 16 \\div 4 = 20 \\div 5 = 4$. Les quotients sont égaux : le périmètre est proportionnel au côté (coefficient 4).
Aire : $1 \\div 1 = 1$ et $4 \\div 2 = 2$. Les quotients sont différents : l'aire **n'est pas** proportionnelle au côté.

**4.** Des points sont alignés avec l'origine seulement dans une situation de proportionnalité. L'aire n'est pas proportionnelle au côté, donc les points **ne sont pas alignés** avec l'origine (ils forment une courbe qui monte de plus en plus vite).`
    },
    {
      id: "5P2-ds-04",
      title: "La croissance d'une plante",
      difficulty: 2,
      points: 5,
      statement: `Lina a mesuré chaque semaine la hauteur d'un plant de tomate. Elle a représenté ses mesures par le graphique ci-dessous.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:420px;"><svg class="geo-svg-figure" viewBox="0 0 400 270" width="400" height="270" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="50" y1="230" x2="50" y2="50" stroke="currentColor" stroke-opacity="0.15" /><line x1="100" y1="230" x2="100" y2="50" stroke="currentColor" stroke-opacity="0.15" /><line x1="150" y1="230" x2="150" y2="50" stroke="currentColor" stroke-opacity="0.15" /><line x1="200" y1="230" x2="200" y2="50" stroke="currentColor" stroke-opacity="0.15" /><line x1="250" y1="230" x2="250" y2="50" stroke="currentColor" stroke-opacity="0.15" /><line x1="300" y1="230" x2="300" y2="50" stroke="currentColor" stroke-opacity="0.15" /><line x1="350" y1="230" x2="350" y2="50" stroke="currentColor" stroke-opacity="0.15" /><line x1="50" y1="230" x2="350" y2="230" stroke="currentColor" stroke-opacity="0.15" /><line x1="50" y1="210" x2="350" y2="210" stroke="currentColor" stroke-opacity="0.15" /><line x1="50" y1="190" x2="350" y2="190" stroke="currentColor" stroke-opacity="0.15" /><line x1="50" y1="170" x2="350" y2="170" stroke="currentColor" stroke-opacity="0.15" /><line x1="50" y1="150" x2="350" y2="150" stroke="currentColor" stroke-opacity="0.15" /><line x1="50" y1="130" x2="350" y2="130" stroke="currentColor" stroke-opacity="0.15" /><line x1="50" y1="110" x2="350" y2="110" stroke="currentColor" stroke-opacity="0.15" /><line x1="50" y1="90" x2="350" y2="90" stroke="currentColor" stroke-opacity="0.15" /><line x1="50" y1="70" x2="350" y2="70" stroke="currentColor" stroke-opacity="0.15" /><line x1="50" y1="50" x2="350" y2="50" stroke="currentColor" stroke-opacity="0.15" /><line x1="50" y1="230" x2="370" y2="230" stroke="currentColor" stroke-width="1.5" /><line x1="50" y1="230" x2="50" y2="35" stroke="currentColor" stroke-width="1.5" /><text x="50" y="246" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="middle">0</text><text x="100" y="246" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="middle">1</text><text x="150" y="246" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="middle">2</text><text x="200" y="246" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="middle">3</text><text x="250" y="246" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="middle">4</text><text x="300" y="246" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="middle">5</text><text x="350" y="246" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="middle">6</text><text x="42" y="234" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="end">0</text><text x="42" y="214" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="end">2</text><text x="42" y="194" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="end">4</text><text x="42" y="174" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="end">6</text><text x="42" y="154" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="end">8</text><text x="42" y="134" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="end">10</text><text x="42" y="114" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="end">12</text><text x="42" y="94" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="end">14</text><text x="42" y="74" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="end">16</text><text x="42" y="54" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="end">18</text><polyline points="50,210 100,190 150,160 200,120 250,90 300,70 350,60" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linejoin="round" /><circle cx="50" cy="210" r="3.5" fill="#2563eb" /><circle cx="100" cy="190" r="3.5" fill="#2563eb" /><circle cx="150" cy="160" r="3.5" fill="#2563eb" /><circle cx="200" cy="120" r="3.5" fill="#2563eb" /><circle cx="250" cy="90" r="3.5" fill="#2563eb" /><circle cx="300" cy="70" r="3.5" fill="#2563eb" /><circle cx="350" cy="60" r="3.5" fill="#2563eb" /><text x="360" y="262" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="end">Nombre de semaines</text><text x="56" y="46" font-family="system-ui, sans-serif" fill="currentColor" font-size="12" text-anchor="start">Hauteur (cm)</text></svg></div>

1. Quelle était la hauteur du plant au début de l'expérience (semaine 0) ?
2. Quelle était sa hauteur au bout de 3 semaines ?
3. Au bout de combien de semaines le plant a-t-il atteint 14 cm ?
4. De combien de centimètres le plant a-t-il poussé entre la semaine 2 et la semaine 3 ? Est-ce pendant cette semaine qu'il a le plus poussé ? Justifier.
5. La hauteur du plant est-elle proportionnelle au nombre de semaines ? Justifier.`,
      solution: `**1.** Le point d'abscisse 0 a pour ordonnée 2 : au départ, le plant mesurait **2 cm**.

**2.** Le point d'abscisse 3 a pour ordonnée 11 : au bout de 3 semaines, il mesurait **11 cm**.

**3.** L'ordonnée 14 correspond à l'abscisse 4 : le plant a atteint 14 cm au bout de **4 semaines**.

**4.** $11 - 7 = 4$ : entre la semaine 2 et la semaine 3, il a poussé de **4 cm**.
Pousse de chaque semaine : $4 - 2 = 2$ ; $7 - 4 = 3$ ; $11 - 7 = 4$ ; $14 - 11 = 3$ ; $16 - 14 = 2$ ; $17 - 16 = 1$ (en cm). Le plus grand écart est 4 cm : c'est bien pendant la 3e semaine qu'il a le plus poussé.

**5.** Non : les points ne sont pas alignés avec l'origine du repère (à la semaine 0, la hauteur vaut déjà 2 cm, et la courbe n'est pas une droite). La hauteur n'est pas proportionnelle au nombre de semaines.`
    },
    {
      id: "5P2-ds-05",
      title: "Le prix d'une course en taxi",
      difficulty: 3,
      points: 5,
      statement: `Dans une ville, le prix d'une course en taxi se calcule ainsi : une prise en charge de 4 €, plus 1,50 € par kilomètre parcouru.

1. Calculer le prix d'une course de 5 km.
2. Écrire une expression du prix $p$ (en €) en fonction de la distance $d$ parcourue (en km).
3. Recopier et compléter le tableau de valeurs.

| Distance $d$ (km) | 0 | 2 | 5 | 10 | 20 |
|---|---|---|---|---|---|
| Prix $p$ (€) | … | … | … | … | … |

4. Une course a coûté 25 €. Quelle distance a été parcourue ? Justifier.
5. Le prix est-il proportionnel à la distance ? Justifier.`,
      solution: `**1.** $4 + 1{,}5 \\times 5 = 4 + 7{,}5 = 11{,}5$. Une course de 5 km coûte $11{,}50$ €.

**2.** $p = 4 + 1{,}5 \\times d$.

**3.**
- $d = 0$ : $p = 4 + 0 = 4$ ;
- $d = 2$ : $p = 4 + 3 = 7$ ;
- $d = 5$ : $p = 11{,}5$ ;
- $d = 10$ : $p = 4 + 15 = 19$ ;
- $d = 20$ : $p = 4 + 30 = 34$.

| Distance $d$ (km) | 0 | 2 | 5 | 10 | 20 |
|---|---|---|---|---|---|
| Prix $p$ (€) | 4 | 7 | 11,5 | 19 | 34 |

**4.** On enlève la prise en charge : $25 - 4 = 21$ €, qui correspondent aux kilomètres parcourus.
$21 \\div 1{,}5 = 14$. La distance parcourue est de **14 km**.
Vérification : $4 + 1{,}5 \\times 14 = 4 + 21 = 25$ €.

**5.** Non : pour 0 km, on paie déjà 4 € (et pour 10 km, on ne paie pas le double du prix de 5 km : $19 \\neq 2 \\times 11{,}5 = 23$). Le prix n'est pas proportionnel à la distance.`
    },
    {
      id: "5P2-ds-06",
      title: "La cuve qui se vide",
      difficulty: 3,
      points: 5,
      statement: `Une cuve contient 60 L d'eau. On ouvre le robinet : la cuve se vide de 4 L par minute.

1. Quel volume d'eau reste-t-il dans la cuve au bout de 3 minutes ?
2. Recopier et compléter le tableau donnant le volume $V$ restant (en L) en fonction du temps $t$ écoulé (en min).

| Temps $t$ (min) | 0 | 3 | 5 | 10 | 15 |
|---|---|---|---|---|---|
| Volume $V$ (L) | … | … | … | … | … |

3. Écrire une expression de $V$ en fonction de $t$.
4. Au bout de combien de temps la cuve est-elle vide ?
5. Au bout de combien de temps reste-t-il exactement 22 L dans la cuve ? Donner la réponse en minutes et secondes.`,
      solution: `**1.** En 3 minutes, il s'écoule $3 \\times 4 = 12$ L. Il reste $60 - 12 = 48$ L.

**2.** On calcule $60 - 4 \\times t$ :

| Temps $t$ (min) | 0 | 3 | 5 | 10 | 15 |
|---|---|---|---|---|---|
| Volume $V$ (L) | 60 | 48 | 40 | 20 | 0 |

**3.** $V = 60 - 4 \\times t$.

**4.** Les 60 L s'écoulent à raison de 4 L par minute : $60 \\div 4 = 15$. La cuve est vide au bout de **15 minutes**.

**5.** Il faut qu'il se soit écoulé $60 - 22 = 38$ L. $38 \\div 4 = 9{,}5$ min.
$9{,}5$ min $= 9$ min $+ 0{,}5 \\times 60$ s $=$ **9 min 30 s**.`
    },
    {
      id: "5P2-ds-07",
      title: "Le rectangle d'aire maximale",
      difficulty: 4,
      points: 6,
      statement: `On dispose d'une ficelle de 20 cm avec laquelle on forme des rectangles : le périmètre vaut donc toujours 20 cm. On note $\\ell$ la largeur du rectangle, en cm.

1. Si la largeur vaut 3 cm, quelle est la longueur ? Quelle est l'aire ?
2. Expliquer pourquoi la longueur est égale à $10 - \\ell$.
3. Recopier et compléter le tableau donnant l'aire en fonction de la largeur.

| Largeur $\\ell$ (cm) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| Aire (cm²) | … | … | … | … | … | … | … | … | … |

4. Pour quelle largeur l'aire est-elle la plus grande ? Quelle est alors la nature du rectangle ?
5. On place les points (largeur ; aire) dans un repère. Sont-ils alignés ? Décrire l'allure de la courbe obtenue.`,
      solution: `**1.** Le demi-périmètre (longueur + largeur) vaut $20 \\div 2 = 10$ cm, donc la longueur vaut $10 - 3 = 7$ cm. L'aire vaut $7 \\times 3 = 21$ cm².

**2.** Le périmètre vaut $2 \\times (\\text{longueur} + \\ell) = 20$, donc longueur $+ \\ell = 10$, d'où longueur $= 10 - \\ell$.

**3.** L'aire vaut $\\ell \\times (10 - \\ell)$ :

| Largeur $\\ell$ (cm) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| Aire (cm²) | 9 | 16 | 21 | 24 | 25 | 24 | 21 | 16 | 9 |

**4.** L'aire la plus grande du tableau est 25 cm², obtenue pour $\\ell = 5$ cm. La longueur vaut alors $10 - 5 = 5$ cm : les quatre côtés sont égaux, le rectangle est un **carré**.

**5.** Les points ne sont pas alignés : l'aire augmente de moins en moins vite de 1 à 5 (+7, +5, +3, +1), puis diminue (−1, −3, −5, −7). La courbe monte jusqu'au point $(5 \\,;\\, 25)$ puis redescend de façon symétrique : elle a la forme d'une « colline ».`
    },
    {
      id: "5P2-ds-08",
      title: "Une frise d'allumettes",
      difficulty: 4,
      points: 6,
      statement: `Avec des allumettes, on construit une frise de carrés accolés en ligne : 1 carré utilise 4 allumettes, 2 carrés accolés utilisent 7 allumettes, 3 carrés accolés utilisent 10 allumettes, etc.

1. Combien faut-il d'allumettes pour 4 carrés ? Faire un schéma ou expliquer.
2. Recopier et compléter le tableau.

| Nombre de carrés $n$ | 1 | 2 | 3 | 4 | 10 |
|---|---|---|---|---|---|
| Nombre d'allumettes | 4 | 7 | 10 | … | … |

3. Expliquer pourquoi le nombre d'allumettes est égal à $3 \\times n + 1$.
4. Le nombre d'allumettes est-il proportionnel au nombre de carrés ? Justifier.
5. Avec une boîte de 100 allumettes, combien de carrés peut-on construire au maximum ? Reste-t-il des allumettes ?`,
      solution: `**1.** Chaque nouveau carré accolé demande 3 allumettes de plus (le côté commun est déjà posé). Pour 4 carrés : $10 + 3 = 13$ allumettes.

**2.** On ajoute 3 allumettes par carré : pour 10 carrés, $3 \\times 10 + 1 = 31$ allumettes.

| Nombre de carrés $n$ | 1 | 2 | 3 | 4 | 10 |
|---|---|---|---|---|---|
| Nombre d'allumettes | 4 | 7 | 10 | 13 | 31 |

**3.** On pose d'abord 1 allumette verticale à gauche. Ensuite, chaque carré se complète avec 3 allumettes (en haut, en bas et à droite). Pour $n$ carrés, il faut donc $1 + 3 \\times n$, c'est-à-dire $3 \\times n + 1$ allumettes.

**4.** $4 \\div 1 = 4$ et $7 \\div 2 = 3{,}5$ : les quotients ne sont pas égaux, le nombre d'allumettes **n'est pas** proportionnel au nombre de carrés.

**5.** On cherche le plus grand $n$ tel que $3 \\times n + 1 \\leq 100$, c'est-à-dire $3 \\times n \\leq 99$, soit $n \\leq 33$.
Pour $n = 33$ : $3 \\times 33 + 1 = 100$. On peut construire **33 carrés** et il ne reste **aucune** allumette.`
    }
  ],
  "5A1": [
    {
      id: "5A1-ds-01",
      title: "Le script du carré",
      difficulty: 1,
      points: 4,
      statement: `Au départ, le lutin est orienté vers la droite. Une longueur de 1 pas correspond à 1 pixel.

\`\`\`scratch
quand drapeau cliqué
effacer tout
stylo en position d'écriture
répéter 4 fois
    avancer de 60 pas
    tourner ↻ de 90 degrés
\`\`\`

1. Quelle figure le lutin trace-t-il ? Préciser la longueur de ses côtés.
2. Combien de fois l'instruction « avancer de 60 pas » est-elle exécutée ?
3. Calculer la longueur totale du tracé, en pas.
4. Quelle modification faut-il apporter au script pour tracer un carré de côté 100 pas ?`,
      solution: `**1.** Le lutin avance de 60 pas puis tourne de 90° (un angle droit), et ceci 4 fois : il trace un **carré de côté 60 pas**.

**2.** L'instruction est dans une boucle « répéter 4 fois » : elle est exécutée **4 fois**.

**3.** $4 \\times 60 = 240$. La longueur totale du tracé est **240 pas** (c'est le périmètre du carré).

**4.** Il suffit de remplacer « avancer de 60 pas » par « avancer de **100** pas ». Le nombre de répétitions (4) et l'angle (90°) ne changent pas.`
    },
    {
      id: "5A1-ds-02",
      title: "Suivre les déplacements du lutin",
      difficulty: 1,
      points: 4,
      statement: `La scène de Scratch est munie d'un repère : $x$ est l'abscisse et $y$ l'ordonnée du lutin. L'orientation 90 correspond à « vers la droite ».

\`\`\`scratch
quand drapeau cliqué
aller à x: 0 y: 0
s'orienter à 90
stylo en position d'écriture
avancer de 100 pas
tourner ↺ de 90 degrés
avancer de 50 pas
tourner ↺ de 90 degrés
avancer de 30 pas
\`\`\`

1. Après l'instruction « avancer de 100 pas », quelles sont les coordonnées du lutin ?
2. Après le premier « tourner ↺ de 90 degrés », vers où le lutin est-il orienté ? Donner ses coordonnées après « avancer de 50 pas ».
3. Quelles sont les coordonnées du lutin à la fin du script ?
4. Quelle distance totale le lutin a-t-il parcourue ?`,
      solution: `**1.** Le lutin part de $(0 \\,;\\, 0)$ et avance de 100 pas vers la droite : son abscisse augmente de 100. Il est en $(100 \\,;\\, 0)$.

**2.** Tourner de 90° dans le sens inverse des aiguilles d'une montre (↺) quand on regarde vers la droite, c'est se tourner **vers le haut**. En avançant de 50 pas, l'ordonnée augmente de 50 : le lutin est en $(100 \\,;\\, 50)$.

**3.** Un nouveau quart de tour ↺ l'oriente **vers la gauche**. En avançant de 30 pas, son abscisse diminue de 30 : $100 - 30 = 70$. À la fin, le lutin est en $(70 \\,;\\, 50)$.

**4.** $100 + 50 + 30 = 180$. Le lutin a parcouru **180 pas**.`
    },
    {
      id: "5A1-ds-03",
      title: "Un programme de calcul en Scratch",
      difficulty: 2,
      points: 5,
      statement: `Voici un script Scratch qui utilise une variable nommée « résultat ».

\`\`\`scratch
quand drapeau cliqué
demander [Choisis un nombre] et attendre
mettre [résultat] à (réponse)
mettre [résultat] à (résultat × 3)
ajouter 5 à [résultat]
dire (résultat)
\`\`\`

1. Quel nombre le lutin dit-il si l'on répond 4 ?
2. Quel nombre le lutin dit-il si l'on répond 0 ? si l'on répond 2,5 ?
3. Écrire une expression du nombre dit par le lutin quand on répond un nombre $x$.
4. Quel nombre faut-il donner pour que le lutin dise 26 ? Justifier.`,
      solution: `**1.** résultat prend la valeur 4, puis $4 \\times 3 = 12$, puis $12 + 5 = 17$. Le lutin dit **17**.

**2.** Avec 0 : $0 \\times 3 + 5 = 5$, le lutin dit **5**.
Avec 2,5 : $2{,}5 \\times 3 + 5 = 7{,}5 + 5 = 12{,}5$, le lutin dit **12,5**.

**3.** Le nombre dit est $3 \\times x + 5$.

**4.** On « remonte » le programme : avant d'ajouter 5, résultat valait $26 - 5 = 21$ ; avant de multiplier par 3, il valait $21 \\div 3 = 7$.
Il faut répondre **7**. Vérification : $7 \\times 3 + 5 = 21 + 5 = 26$.`
    },
    {
      id: "5A1-ds-04",
      title: "Le triangle raté",
      difficulty: 2,
      points: 5,
      statement: `Malo veut tracer un triangle équilatéral de côté 80 pas. Il écrit le script suivant (le lutin est orienté vers la droite au départ).

\`\`\`scratch
quand drapeau cliqué
effacer tout
stylo en position d'écriture
répéter 3 fois
    avancer de 80 pas
    tourner ↻ de 60 degrés
\`\`\`

1. Malo a choisi 60° car « les angles d'un triangle équilatéral mesurent 60° ». Après les 3 répétitions, de combien de degrés le lutin a-t-il tourné au total ?
2. Le lutin revient-il à son point de départ ? Décrire la figure obtenue.
3. Quel angle faut-il indiquer dans l'instruction « tourner » pour obtenir le triangle équilatéral ? Justifier.
4. Voici, dans le désordre, les instructions d'un script qui trace un rectangle de 100 pas sur 40 pas. Les remettre dans l'ordre (une même instruction peut servir plusieurs fois) : « tourner ↻ de 90 degrés » ; « avancer de 40 pas » ; « répéter 2 fois » ; « avancer de 100 pas ».`,
      solution: `**1.** $3 \\times 60 = 180$. Le lutin a tourné de **180°** au total : il est orienté vers la gauche.

**2.** Non. Pour revenir au départ et fermer la figure, le lutin doit faire un tour complet, soit 360°. Ici, il trace 3 segments de 80 pas qui forment une ligne brisée ouverte (la moitié d'un hexagone régulier) : **la figure n'est pas fermée**.

**3.** Le lutin tourne de l'angle **extérieur** du triangle, qui vaut $180^\\circ - 60^\\circ = 120^\\circ$. Vérification : $3 \\times 120^\\circ = 360^\\circ$, le lutin fait un tour complet et revient à son point de départ. Il faut écrire « tourner ↻ de **120** degrés ».

**4.**
\`\`\`scratch
répéter 2 fois
    avancer de 100 pas
    tourner ↻ de 90 degrés
    avancer de 40 pas
    tourner ↻ de 90 degrés
\`\`\`
Chaque passage dans la boucle trace une longueur et une largeur ; deux passages tracent le rectangle complet.`
    },
    {
      id: "5A1-ds-05",
      title: "La spirale",
      difficulty: 3,
      points: 5,
      statement: `Le lutin part du point de coordonnées $(0 \\,;\\, 0)$, orienté vers la droite. On rappelle que « ajouter 10 à [côté] » augmente de 10 la valeur de la variable côté.

\`\`\`scratch
quand drapeau cliqué
effacer tout
aller à x: 0 y: 0
s'orienter à 90
stylo en position d'écriture
mettre [côté] à 10
répéter 5 fois
    avancer de côté pas
    tourner ↻ de 90 degrés
    ajouter 10 à [côté]
\`\`\`

1. Recopier et compléter le tableau donnant, à chaque passage dans la boucle, la longueur du segment tracé.

| Passage | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Longueur tracée (pas) | 10 | … | … | … | … |

2. Quelle est la valeur de la variable côté à la fin du script ?
3. Calculer la longueur totale du tracé.
4. Tracer à main levée la figure obtenue, puis déterminer les coordonnées du lutin à la fin du script.`,
      solution: `**1.** La variable côté vaut 10 au premier passage et augmente de 10 à chaque passage.

| Passage | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Longueur tracée (pas) | 10 | 20 | 30 | 40 | 50 |

**2.** Au 5e passage, côté vaut 50 avant d'être augmentée une dernière fois de 10 : à la fin, côté vaut **60**.

**3.** $10 + 20 + 30 + 40 + 50 = 150$. Le tracé mesure **150 pas**.

**4.** Le lutin tourne à droite d'un quart de tour à chaque fois : il va successivement vers la droite, le bas, la gauche, le haut, puis la droite. Il trace une **spirale** carrée qui s'agrandit.
- 10 pas vers la droite : $(10 \\,;\\, 0)$ ;
- 20 pas vers le bas : $(10 \\,;\\, -20)$ ;
- 30 pas vers la gauche : $(-20 \\,;\\, -20)$ ;
- 40 pas vers le haut : $(-20 \\,;\\, 20)$ ;
- 50 pas vers la droite : $(30 \\,;\\, 20)$.

À la fin, le lutin est en $(30 \\,;\\, 20)$.`
    },
    {
      id: "5A1-ds-06",
      title: "Une somme calculée par le lutin",
      difficulty: 3,
      points: 5,
      statement: `On considère le script suivant.

\`\`\`scratch
quand drapeau cliqué
mettre [somme] à 0
mettre [n] à 1
répéter 10 fois
    ajouter n à [somme]
    ajouter 1 à [n]
dire somme
\`\`\`

1. Recopier et compléter le tableau donnant les valeurs des variables à la fin de chacun des trois premiers passages dans la boucle.

| Fin du passage | 1 | 2 | 3 |
|---|---|---|---|
| somme | … | … | … |
| n | … | … | … |

2. Quel calcul ce script effectue-t-il ? Quel nombre le lutin dit-il ?
3. Quelle est la valeur de la variable n à la fin du script ?
4. On veut que le lutin calcule la somme des 10 premiers nombres pairs $2 + 4 + 6 + \\ldots + 20$. Quelles modifications faut-il apporter au script ? Quel nombre le lutin dira-t-il alors ?`,
      solution: `**1.**
- Passage 1 : somme $= 0 + 1 = 1$, puis n $= 2$.
- Passage 2 : somme $= 1 + 2 = 3$, puis n $= 3$.
- Passage 3 : somme $= 3 + 3 = 6$, puis n $= 4$.

| Fin du passage | 1 | 2 | 3 |
|---|---|---|---|
| somme | 1 | 3 | 6 |
| n | 2 | 3 | 4 |

**2.** Le script ajoute successivement 1, 2, 3, …, 10 : il calcule $1 + 2 + 3 + \\ldots + 10$.
$1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55$. Le lutin dit **55**.

**3.** n vaut 1 au départ et augmente de 1 à chacun des 10 passages : à la fin, n vaut $1 + 10 = $ **11**.

**4.** Il faut que n prenne les valeurs 2, 4, 6, …, 20 : on remplace « mettre [n] à 1 » par « mettre [n] à **2** » et « ajouter 1 à [n] » par « ajouter **2** à [n] » (on garde « répéter 10 fois »).
Le lutin dit alors $2 + 4 + \\ldots + 20 = 2 \\times (1 + 2 + \\ldots + 10) = 2 \\times 55 = $ **110**.`
    },
    {
      id: "5A1-ds-07",
      title: "Une frise de carrés",
      difficulty: 4,
      points: 6,
      statement: `Le lutin part du point de coordonnées $(-200 \\,;\\, 0)$, orienté vers la droite.

\`\`\`scratch
quand drapeau cliqué
effacer tout
aller à x: -200 y: 0
s'orienter à 90
stylo en position d'écriture
répéter 4 fois
    répéter 4 fois
        avancer de 30 pas
        tourner ↺ de 90 degrés
    avancer de 40 pas
\`\`\`

1. Que trace la boucle intérieure « répéter 4 fois : avancer de 30 pas, tourner ↺ de 90 degrés » ? Dans quelle direction le lutin est-il orienté après cette boucle ?
2. Combien de fois l'instruction « avancer de 30 pas » est-elle exécutée en tout ?
3. Calculer la distance totale parcourue par le lutin.
4. Quelle est l'abscisse du lutin à la fin du script ?
5. Sur le dessin, les carrés sont reliés par un trait. Où faut-il ajouter les instructions « relever le stylo » et « stylo en position d'écriture » pour obtenir quatre carrés séparés ?`,
      solution: `**1.** Le lutin avance de 30 pas puis tourne d'un angle droit, 4 fois : il trace un **carré de côté 30 pas** (au-dessus de sa position, car il tourne vers la gauche). Après 4 quarts de tour, il a fait un tour complet ($4 \\times 90^\\circ = 360^\\circ$) : il est de nouveau orienté **vers la droite**.

**2.** La boucle intérieure est répétée 4 fois, et elle-même est exécutée 4 fois : $4 \\times 4 = 16$ fois.

**3.** À chaque passage de la grande boucle, le lutin parcourt $4 \\times 30 + 40 = 160$ pas. Pour 4 passages : $4 \\times 160 = 640$ pas.

**4.** Chaque carré ramène le lutin à son point de départ ; seul « avancer de 40 pas » le déplace vers la droite. Il se décale donc de $4 \\times 40 = 160$ pas : son abscisse finale est $-200 + 160 = -40$.

**5.** On place « relever le stylo » juste avant « avancer de 40 pas » et « stylo en position d'écriture » juste après (au début de chaque passage, avant de tracer le carré) :
\`\`\`scratch
répéter 4 fois
    stylo en position d'écriture
    répéter 4 fois
        avancer de 30 pas
        tourner ↺ de 90 degrés
    relever le stylo
    avancer de 40 pas
\`\`\`
Les carrés de 30 pas sont alors séparés par des espaces de $40 - 30 = 10$ pas.`
    },
    {
      id: "5A1-ds-08",
      title: "Tracer n'importe quel polygone régulier",
      difficulty: 4,
      points: 6,
      statement: `Pour tracer un polygone régulier à $n$ côtés de longueur 50 pas, Yanis écrit le script suivant. Le lutin doit faire un tour complet (360°) pour revenir à son point de départ.

\`\`\`scratch
quand drapeau cliqué
effacer tout
stylo en position d'écriture
demander [Nombre de côtés ?] et attendre
mettre [n] à (réponse)
répéter n fois
    avancer de 50 pas
    tourner ↻ de (360 / n) degrés
\`\`\`

1. On répond 6. De quel angle le lutin tourne-t-il à chaque fois ? Quelle figure obtient-on ?
2. Recopier et compléter le tableau.

| Nombre de côtés $n$ | 3 | 5 | 8 | 10 |
|---|---|---|---|---|
| Angle tourné (°) | … | … | … | … |
| Périmètre (pas) | … | … | … | … |

3. On observe que le lutin tourne de 40° à chaque fois. Quel nombre a-t-on répondu ? Justifier.
4. Pour un polygone régulier, l'angle intérieur et l'angle dont tourne le lutin ont pour somme 180°. Calculer l'angle intérieur d'un pentagone régulier ($n = 5$).`,
      solution: `**1.** $360 \\div 6 = 60$ : le lutin tourne de **60°** à chaque fois. Il trace 6 côtés de 50 pas en faisant un tour complet : on obtient un **hexagone régulier** de côté 50 pas.

**2.** L'angle tourné vaut $360 \\div n$ et le périmètre $50 \\times n$.

| Nombre de côtés $n$ | 3 | 5 | 8 | 10 |
|---|---|---|---|---|
| Angle tourné (°) | 120 | 72 | 45 | 36 |
| Périmètre (pas) | 150 | 250 | 400 | 500 |

**3.** On cherche $n$ tel que $360 \\div n = 40$, c'est-à-dire $n = 360 \\div 40 = 9$. On a répondu **9** (le lutin trace un polygone régulier à 9 côtés). Vérification : $9 \\times 40^\\circ = 360^\\circ$.

**4.** Pour $n = 5$, le lutin tourne de $360 \\div 5 = 72^\\circ$. L'angle intérieur vaut $180^\\circ - 72^\\circ = $ **108°**.`
    }
  ]
});
