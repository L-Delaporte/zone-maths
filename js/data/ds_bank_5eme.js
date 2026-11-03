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
    },
    {
      id: "5N1-ds-09",
      title: "Crochets et traits de fraction",
      difficulty: 1,
      points: 4,
      statement: `Calculer chacune des expressions suivantes en détaillant les étapes, sans calculatrice.

$$A = \\frac{45 - 9}{4 \\times 3} \\qquad B = 60 - [\\,4 \\times (7 - 2) + 8\\,] \\qquad C = 2 \\times [\\,18 - (3 + 4) \\times 2\\,] \\qquad D = \\frac{7 \\times 8 - 6}{2 + 3}$$

1. Calculer $A$.
2. Réécrire $A$ sur une seule ligne, avec le symbole $\\div$ et des parenthèses.
3. Calculer $B$ et $C$.
4. Calculer $D$.`,
      solution: `**1.** Un trait de fraction joue le rôle de parenthèses : on calcule séparément le numérateur et le dénominateur.
$A = \\frac{45 - 9}{4 \\times 3} = \\frac{36}{12} = 3$.

**2.** Le numérateur et le dénominateur doivent rester groupés : $A = (45 - 9) \\div (4 \\times 3)$.
(Sans parenthèses, $45 - 9 \\div 4 \\times 3$ donnerait un tout autre calcul.)

**3.** On commence par les parenthèses les plus intérieures, puis les crochets.
$B = 60 - [\\,4 \\times 5 + 8\\,] = 60 - [\\,20 + 8\\,] = 60 - 28 = 32$.
$C = 2 \\times [\\,18 - 7 \\times 2\\,] = 2 \\times [\\,18 - 14\\,] = 2 \\times 4 = 8$.

**4.** Au numérateur, la multiplication est prioritaire : $7 \\times 8 - 6 = 56 - 6 = 50$. Au dénominateur : $2 + 3 = 5$.
$D = \\frac{50}{5} = 10$.`
    },
    {
      id: "5N1-ds-10",
      title: "Ranger des œufs dans des boîtes",
      difficulty: 2,
      points: 5,
      statement: `Une ferme a ramassé $347$ œufs dans la journée. On les range dans des boîtes de $6$ œufs.

1. Effectuer la division euclidienne de $347$ par $6$ et écrire l'égalité correspondante.
2. Combien de boîtes peut-on remplir complètement ? Combien d'œufs reste-t-il hors des boîtes ?
3. Chaque boîte pleine est vendue $2$ €. Écrire en une seule expression la recette obtenue si l'on vend toutes les boîtes pleines sauf $7$, puis la calculer.
4. Le lendemain, on reçoit des boîtes de $12$ œufs. Combien de boîtes de $12$ peut-on remplir avec les $347$ œufs ? Combien d'œufs restent ?`,
      solution: `**1.** $6 \\times 50 = 300$ et $6 \\times 57 = 342$, $6 \\times 58 = 348 > 347$. Le quotient est $57$ et le reste $347 - 342 = 5$.
$$347 = 6 \\times 57 + 5 \\quad \\text{avec } 5 < 6.$$

**2.** On peut remplir **$57$ boîtes** et il reste **$5$ œufs** (le reste est bien inférieur à $6$ : on ne peut pas remplir une boîte de plus).

**3.** On vend $57 - 7$ boîtes à $2$ € : la recette est $(57 - 7) \\times 2$. Les parenthèses sont indispensables, car la soustraction doit être faite avant la multiplication.
$(57 - 7) \\times 2 = 50 \\times 2 = 100$ €.

**4.** $12 \\times 28 = 336$ et $12 \\times 29 = 348 > 347$. Donc $347 = 12 \\times 28 + 11$ avec $11 < 12$.
On remplit **$28$ boîtes de $12$** et il reste **$11$ œufs**.`
    },
    {
      id: "5N1-ds-11",
      title: "Les erreurs de calcul de Tom",
      difficulty: 3,
      points: 5,
      statement: `Tom a fait les calculs suivants, mais ils sont tous faux.

- a) $30 - 4 \\times 5 = 130$
- b) $48 \\div 4 \\times 2 = 6$
- c) $20 - 8 + 2 = 10$
- d) $3 + 2 \\times (5 + 1) = 30$

1. Pour chaque calcul, expliquer quelle erreur Tom a commise, puis donner le bon résultat en détaillant.
2. Tom doit calculer « la moitié de la somme de $18$ et de $6$ ». Il écrit $18 + 6 \\div 2 = 21$.
   a) Pourquoi son expression ne traduit-elle pas la phrase ?
   b) Écrire une expression correcte et la calculer.`,
      solution: `**1.**
a) Tom a d'abord calculé $30 - 4 = 26$, puis $26 \\times 5 = 130$. Or la multiplication est prioritaire sur la soustraction :
$30 - 4 \\times 5 = 30 - 20 = 10$.

b) Tom a calculé $4 \\times 2 = 8$ en premier, puis $48 \\div 8 = 6$. Or, entre multiplications et divisions, on calcule **de gauche à droite** :
$48 \\div 4 \\times 2 = 12 \\times 2 = 24$.

c) Tom a calculé $8 + 2 = 10$ en premier, puis $20 - 10 = 10$. Entre additions et soustractions, on calcule aussi de gauche à droite :
$20 - 8 + 2 = 12 + 2 = 14$.

d) Tom a calculé $(3 + 2) \\times 6 = 30$, comme s'il y avait des parenthèses autour de $3 + 2$. Après la parenthèse, la multiplication reste prioritaire :
$3 + 2 \\times (5 + 1) = 3 + 2 \\times 6 = 3 + 12 = 15$.

**2.** a) Dans $18 + 6 \\div 2$, la division est prioritaire : on ne prend la moitié que de $6$. L'expression est une somme, alors que la phrase décrit un quotient (« la moitié de… »).
b) Il faut grouper la somme avec des parenthèses : $(18 + 6) \\div 2 = 24 \\div 2 = 12$.`
    },
    {
      id: "5N1-ds-12",
      title: "Le compte est bon",
      difficulty: 4,
      points: 6,
      statement: `Dans un jeu, on dispose des quatre nombres $2$, $3$, $5$ et $25$. On doit utiliser **chacun d'eux exactement une fois**, avec les opérations $+$, $-$, $\\times$, $\\div$ et autant de parenthèses que l'on veut, pour obtenir un nombre cible.

1. La cible est $100$. Ana propose $25 - 5 \\times 3 + 2$ et Bilal propose $(25 - 5) \\times (3 + 2)$.
   a) Calculer chaque proposition.
   b) Qui a atteint la cible ?
2. La cible est $125$. Proposer une expression qui convient et la calculer.
3. La cible est $1$. Proposer une expression qui convient et la calculer.
4. On considère $C = 25 \\times 2 + 3 \\times 5$.
   a) Calculer $C$.
   b) $C$ est-il une somme ou un produit ? Traduire $C$ par une phrase utilisant les mots « somme » et « produit ».`,
      solution: `**1.** a) Ana : la multiplication est prioritaire, $25 - 5 \\times 3 + 2 = 25 - 15 + 2 = 10 + 2 = 12$.
Bilal : on calcule les parenthèses d'abord, $(25 - 5) \\times (3 + 2) = 20 \\times 5 = 100$.
b) C'est **Bilal** qui a atteint la cible $100$.

**2.** Par exemple $25 \\times 5 \\times (3 - 2) = 125 \\times 1 = 125$.
Chaque nombre est utilisé une fois. (D'autres réponses sont possibles.)

**3.** Par exemple $(25 \\div 5 - 3) \\div 2$ : on calcule $25 \\div 5 = 5$, puis $5 - 3 = 2$, puis $2 \\div 2 = 1$.
Les quatre nombres sont utilisés une fois chacun. (D'autres réponses sont possibles.)

**4.** a) Les multiplications sont prioritaires : $C = 50 + 15 = 65$.
b) La dernière opération effectuée est l'addition : $C$ est une **somme**. Phrase : « $C$ est la somme du produit de $25$ par $2$ et du produit de $3$ par $5$ ».`
    },
    {
      id: "5N1-ds-13",
      title: "Par quoi commencer ?",
      difficulty: 1,
      points: 4,
      statement: `Sans calculatrice.

1. Pour chacun des calculs suivants, indiquer l'opération à effectuer en premier, puis calculer en détaillant les étapes :
$$A = 18 - 3 \\times 4 + 2 \\qquad B = (18 - 3) \\times (4 + 2)$$
$$C = 50 \\div 5 \\times 2 \\qquad D = 7 + 3 \\times (8 - 2 \\times 3)$$
2. Les calculs $A$ et $B$ utilisent les mêmes nombres et les mêmes opérations. Pourquoi leurs résultats sont-ils différents ?`,
      solution: `**1.**
- $A$ : on commence par la multiplication $3 \\times 4$.
$A = 18 - 12 + 2 = 6 + 2 = 8$ (additions et soustractions de gauche à droite).
- $B$ : on commence par les parenthèses.
$B = 15 \\times 6 = 90$.
- $C$ : il n'y a que des multiplications et des divisions, on les effectue de gauche à droite : d'abord $50 \\div 5$.
$C = 10 \\times 2 = 20$.
- $D$ : on commence par la parenthèse, et dans la parenthèse par la multiplication $2 \\times 3$.
$D = 7 + 3 \\times (8 - 6) = 7 + 3 \\times 2 = 7 + 6 = 13$.

**2.** Dans $A$, la multiplication est prioritaire : on calcule $3 \\times 4$ avant les autres opérations. Dans $B$, les parenthèses imposent de calculer d'abord $18 - 3$ et $4 + 2$, puis de multiplier. L'ordre des opérations n'est pas le même, donc les résultats sont différents ($8 \\neq 90$).`
    },
    {
      id: "5N1-ds-14",
      title: "Le ticket du snack",
      difficulty: 2,
      points: 5,
      statement: `Au snack du stade, une famille achète $3$ menus à $8{,}50$ € l'un, $2$ desserts à $2{,}50$ € l'un et $4$ boissons à $1{,}80$ € l'une. Elle paie avec un billet de $50$ €.

1. Calculer le prix total des achats en détaillant.
2. Écrire **une seule expression** donnant la somme rendue par le vendeur, puis la calculer.
3. Léo a écrit l'expression suivante pour la somme rendue :
$$50 - 3 \\times 8{,}5 + 2 \\times 2{,}5 + 4 \\times 1{,}8$$
   a) Calculer la valeur de l'expression de Léo.
   b) Expliquer son erreur.`,
      solution: `**1.** Menus : $3 \\times 8{,}50 = 25{,}50$ € ; desserts : $2 \\times 2{,}50 = 5$ € ; boissons : $4 \\times 1{,}80 = 7{,}20$ €.
Total : $25{,}50 + 5 + 7{,}20 = 37{,}70$ €.

**2.** Somme rendue : $50 - (3 \\times 8{,}5 + 2 \\times 2{,}5 + 4 \\times 1{,}8)$.
On calcule d'abord la parenthèse (en commençant par les multiplications) : $25{,}5 + 5 + 7{,}2 = 37{,}7$.
Puis $50 - 37{,}7 = 12{,}3$. Le vendeur rend **$12{,}30$ €**.

**3. a)** On effectue d'abord les multiplications : $50 - 25{,}5 + 5 + 7{,}2$, puis de gauche à droite : $24{,}5 + 5 + 7{,}2 = 36{,}7$.

**b)** Sans parenthèses, seul le prix des menus est soustrait de $50$ : les prix des desserts et des boissons sont **ajoutés** au lieu d'être retirés. Il fallait mettre des parenthèses autour de la somme de tous les achats.`
    },
    {
      id: "5N1-ds-15",
      title: "Deux calculatrices qui ne sont pas d'accord",
      difficulty: 3,
      points: 5,
      statement: `Une calculatrice **simple** effectue les opérations dans l'ordre où on les tape, sans tenir compte des priorités. Une calculatrice de **collège** respecte les priorités opératoires.

On tape sur chacune la suite de touches : $4 \; + \; 6 \; \\times \; 5 \; =$

1. Quel résultat affiche chacune des deux calculatrices ? Lequel correspond à l'expression $4 + 6 \\times 5$ ?
2. Même question avec la suite de touches $20 \; + \; 12 \; \\div \; 4 \; =$
3. Avec la calculatrice **simple**, dans quel ordre peut-on taper les touches pour obtenir la bonne valeur de $4 + 6 \\times 5$ ? et celle de $20 + 12 \\div 4$ ?
4. Sur la calculatrice simple, Inès tape $3 \; + \; 7 \; \\times \; 2 \; - \; 4 \; =$. Quelle expression, écrite avec des parenthèses, la calculatrice a-t-elle réellement calculée ? Comparer avec la valeur de $3 + 7 \\times 2 - 4$.`,
      solution: `**1.** Calculatrice simple : $4 + 6 = 10$, puis $10 \\times 5 = 50$. Elle affiche $50$.
Calculatrice de collège : la multiplication est prioritaire : $4 + 30 = 34$. Elle affiche $34$.
C'est **$34$** qui est la valeur de $4 + 6 \\times 5$.

**2.** Calculatrice simple : $20 + 12 = 32$, puis $32 \\div 4 = 8$.
Calculatrice de collège : $12 \\div 4 = 3$, puis $20 + 3 = 23$.
La valeur de $20 + 12 \\div 4$ est **$23$**.

**3.** Il faut taper l'opération prioritaire en premier :
- $6 \\times 5 + 4 =$ donne $30 + 4 = 34$ ;
- $12 \\div 4 + 20 =$ donne $3 + 20 = 23$.
(L'addition peut changer d'ordre sans changer le résultat.)

**4.** La calculatrice simple a calculé $\\big((3 + 7) \\times 2\\big) - 4 = 20 - 4 = 16$.
Avec les priorités : $3 + 7 \\times 2 - 4 = 3 + 14 - 4 = 13$. Les résultats sont différents : $16 \\neq 13$.`
    },
    {
      id: "5N1-ds-16",
      title: "Le défi des quatre 4",
      difficulty: 4,
      points: 6,
      statement: `Règle du jeu : écrire un nombre en utilisant **exactement quatre fois** le chiffre $4$, les opérations $+$, $-$, $\\times$, $\\div$ et autant de parenthèses que nécessaire. On a aussi le droit d'écrire le nombre $44$ (il compte pour deux chiffres $4$).

1. Calculer les expressions suivantes et dire quel nombre chacune permet d'écrire :
$$44 - 44 \\qquad 44 \\div 44 \\qquad 4 \\div 4 + 4 \\div 4 \\qquad 44 \\div 4 - 4$$
2. Placer des parenthèses dans chaque expression pour obtenir l'égalité :
   a) $4 + 4 + 4 \\div 4 = 3$
   b) $4 \\times 4 + 4 \\div 4 = 5$
   c) $4 + 4 + 4 \\div 4 = 6$ (on ne peut ici placer qu'un seul couple de parenthèses)
3. Sam affirme que $4 + 4 \\div 4 + 4 = 6$. Calculer cette expression et expliquer son erreur.
4. Trouver une écriture du nombre $8$ avec quatre chiffres $4$, puis une écriture du nombre $4$.`,
      solution: `**1.**
- $44 - 44 = 0$ : on écrit $0$.
- $44 \\div 44 = 1$ : on écrit $1$.
- $4 \\div 4 + 4 \\div 4 = 1 + 1 = 2$ (divisions prioritaires) : on écrit $2$.
- $44 \\div 4 - 4 = 11 - 4 = 7$ : on écrit $7$.

**2. a)** $(4 + 4 + 4) \\div 4 = 12 \\div 4 = 3$.

**b)** $(4 \\times 4 + 4) \\div 4 = (16 + 4) \\div 4 = 20 \\div 4 = 5$.

**c)** $4 + (4 + 4) \\div 4 = 4 + 8 \\div 4 = 4 + 2 = 6$.

**3.** La division est prioritaire : $4 + 4 \\div 4 + 4 = 4 + 1 + 4 = 9$, et non $6$.
Sam a sans doute calculé de gauche à droite sans respecter les priorités, ou pensé à $(4 + 4) \\div 4 + 4 = 2 + 4 = 6$ : il fallait alors des parenthèses.

**4.** Par exemple $4 + 4 + 4 - 4 = 8$ (ou $4 \\times 4 - 4 - 4 = 8$).
Pour $4$ : par exemple $4 + (4 - 4) \\times 4 = 4 + 0 = 4$ (ou $(4 - 4) \\times 4 + 4$, ou $4 \\times (4 - 4) + 4$).
Toute expression correcte utilisant exactement quatre chiffres $4$ est acceptée.`
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
    },
    {
      id: "5N2-ds-09",
      title: "Opposés et distance à zéro",
      difficulty: 1,
      points: 4,
      statement: `On considère les nombres suivants :
$$-7 \\qquad 4{,}5 \\qquad 0 \\qquad -2{,}5 \\qquad 6 \\qquad -6$$

1. Donner l'opposé de chacun de ces nombres.
2. Quels sont, dans cette liste, les deux nombres opposés l'un de l'autre ?
3. Donner la distance à zéro de $-7$, de $4{,}5$ et de $-2{,}5$.
4. Sur une droite graduée, le point $A$ a pour abscisse $-3$ et le point $B$ a pour abscisse $5$. Quelle est la longueur du segment $[AB]$ (en unités de graduation) ? Justifier.`,
      solution: `**1.** L'opposé d'un nombre a la même distance à zéro mais le signe contraire :
- opposé de $-7$ : $7$ ;
- opposé de $4{,}5$ : $-4{,}5$ ;
- opposé de $0$ : $0$ ;
- opposé de $-2{,}5$ : $2{,}5$ ;
- opposé de $6$ : $-6$ ;
- opposé de $-6$ : $6$.

**2.** $6$ et $-6$ sont opposés : leur somme vaut $0$ et ils sont à la même distance de zéro, de part et d'autre.

**3.** La distance à zéro est le nombre sans son signe : $-7$ est à $7$ unités de zéro, $4{,}5$ à $4{,}5$ unités et $-2{,}5$ à $2{,}5$ unités.

**4.** $A$ est à $3$ unités à gauche de zéro et $B$ à $5$ unités à droite. Les deux points sont de part et d'autre de l'origine, donc $AB = 3 + 5 = 8$ unités. On peut aussi calculer $5 - (-3) = 5 + 3 = 8$.`
    },
    {
      id: "5N2-ds-10",
      title: "L'ascenseur de l'hôtel",
      difficulty: 2,
      points: 5,
      statement: `Dans un hôtel, les étages sont numérotés de $-3$ (parking le plus bas) à $12$. Le rez-de-chaussée porte le numéro $0$. Un déplacement vers le haut est compté positivement, un déplacement vers le bas négativement.

1. Un client part de l'étage $4$, monte de $6$ étages, puis descend de $13$ étages. À quel étage arrive-t-il ? Écrire le calcul.
2. Le groom part de l'étage $-2$ et arrive à l'étage $9$. Quel est son déplacement ?
3. Une cliente part de l'étage $11$ et arrive au parking $-3$. Quel est son déplacement ?
4. L'ascenseur part de l'étage $-1$ et effectue successivement les déplacements $+8$ ; $-5$ ; $+9$ ; $-14$. Calculer l'étage d'arrivée. L'ascenseur est-il resté dans le bâtiment pendant tout le trajet ?`,
      solution: `**1.** $4 + (+6) + (-13) = 10 + (-13) = -3$. Le client arrive à l'étage **$-3$** (le parking le plus bas).

**2.** Le déplacement est « arrivée $-$ départ » : $9 - (-2) = 9 + 2 = +11$. Le groom **monte de $11$ étages**.

**3.** $-3 - 11 = -14$. La cliente **descend de $14$ étages**.

**4.** On suit les étages successifs :
- $-1 + 8 = 7$ ;
- $7 + (-5) = 2$ ;
- $2 + 9 = 11$ ;
- $11 + (-14) = -3$.
L'ascenseur arrive à l'étage **$-3$**. Les étages atteints ($7$ ; $2$ ; $11$ ; $-3$) sont tous compris entre $-3$ et $12$ : l'ascenseur est bien resté dans le bâtiment.`
    },
    {
      id: "5N2-ds-11",
      title: "Les décalages horaires",
      difficulty: 3,
      points: 5,
      statement: `En hiver, le tableau suivant donne le décalage horaire de quelques villes par rapport à Paris (un décalage de $-6$ signifie qu'il est $6$ heures de moins qu'à Paris).

| Ville | New York | Tokyo | Los Angeles | Dubaï |
|---|---|---|---|---|
| Décalage (en h) | $-6$ | $+8$ | $-9$ | $+3$ |

1. Quand il est $14$ h à Paris, quelle heure est-il à New York ? À Tokyo ?
2. Quel est le décalage horaire entre Tokyo et New York ? Justifier par un calcul.
3. Quand il est $2$ h du matin à Los Angeles, quelle heure est-il à Dubaï ?
4. Un avion décolle de New York à $18$ h (heure de New York) pour Paris. Le vol dure $7$ h. À quelle heure (heure de Paris) atterrit-il ?`,
      solution: `**1.** À New York : $14 + (-6) = 8$, il est **$8$ h**. À Tokyo : $14 + 8 = 22$, il est **$22$ h**.

**2.** On calcule la différence des décalages : $8 - (-6) = 8 + 6 = 14$. Il est **$14$ heures de plus à Tokyo qu'à New York**.

**3.** Décalage de Dubaï par rapport à Los Angeles : $3 - (-9) = 3 + 9 = 12$. Il est $12$ heures de plus à Dubaï : $2 + 12 = 14$, il est **$14$ h** à Dubaï.

**4.** L'avion arrive à $18 + 7 = 25$ h, heure de New York, c'est-à-dire $1$ h du matin le lendemain (heure de New York).
Paris a $6$ heures d'avance sur New York : $1 + 6 = 7$. L'avion atterrit à **$7$ h du matin, heure de Paris**.`
    },
    {
      id: "5N2-ds-12",
      title: "Une suite qui se répète",
      difficulty: 4,
      points: 6,
      statement: `On écrit une liste de nombres en suivant la règle : **chaque nombre est égal au précédent moins celui d'avant**. On commence par $4$ puis $-3$. Le troisième nombre est donc $-3 - 4 = -7$.

1. Calculer les nombres de la liste du $4^\\text{e}$ au $8^\\text{e}$, en détaillant chaque calcul.
2. Que remarque-t-on à partir du $7^\\text{e}$ nombre ? Expliquer pourquoi la liste se répète ensuite indéfiniment.
3. Quel est le $20^\\text{e}$ nombre de la liste ? Justifier.
4. a) Calculer la somme des $6$ premiers nombres.
   b) En déduire la somme des $20$ premiers nombres.`,
      solution: `**1.** On applique la règle « précédent $-$ celui d'avant » :
- $4^\\text{e}$ : $-7 - (-3) = -7 + 3 = -4$ ;
- $5^\\text{e}$ : $-4 - (-7) = -4 + 7 = 3$ ;
- $6^\\text{e}$ : $3 - (-4) = 3 + 4 = 7$ ;
- $7^\\text{e}$ : $7 - 3 = 4$ ;
- $8^\\text{e}$ : $4 - 7 = -3$.
La liste commence par : $4$ ; $-3$ ; $-7$ ; $-4$ ; $3$ ; $7$ ; $4$ ; $-3$.

**2.** Les $7^\\text{e}$ et $8^\\text{e}$ nombres sont $4$ et $-3$, comme les deux premiers. Chaque nombre ne dépend que des deux précédents : la suite des calculs recommence donc à l'identique. La liste se répète **par blocs de $6$ nombres** : $4$ ; $-3$ ; $-7$ ; $-4$ ; $3$ ; $7$.

**3.** $20 = 6 \\times 3 + 2$ : après $3$ blocs complets ($18$ nombres), le $20^\\text{e}$ nombre est le $2^\\text{e}$ d'un bloc. C'est **$-3$**.

**4.** a) $4 + (-3) + (-7) + (-4) + 3 + 7$. On regroupe les opposés : $(-3) + 3 = 0$, $(-7) + 7 = 0$, $4 + (-4) = 0$. La somme vaut **$0$**.
b) Les $18$ premiers nombres forment $3$ blocs de somme nulle. Il reste les $19^\\text{e}$ et $20^\\text{e}$ nombres, $4$ et $-3$ : la somme des $20$ premiers nombres vaut $0 + 4 + (-3) = 1$.`
    },
    {
      id: "5N2-ds-13",
      title: "Le jeu des cartes gagnantes et perdantes",
      difficulty: 1,
      points: 4,
      statement: `Dans un jeu, chaque carte rapporte ou fait perdre des points. Maëlle a tiré, dans l'ordre, les cartes suivantes :
$$(+5) \\quad (-8) \\quad (+3) \\quad (-2) \\quad (-6) \\quad (+4)$$

1. Quel est son score après les trois premières cartes ?
2. Calculer la somme des cartes positives, puis la somme des cartes négatives.
3. En déduire le score final de Maëlle. A-t-elle gagné ou perdu des points au total ?
4. Quelle carte aurait-elle dû tirer en plus pour terminer avec un score de $0$ ?`,
      solution: `**1.** $(+5) + (-8) + (+3) = (-3) + (+3) = 0$. Après trois cartes, son score est $0$.

**2.** Cartes positives : $(+5) + (+3) + (+4) = +12$.
Cartes négatives : $(-8) + (-2) + (-6) = -16$.

**3.** Score final : $(+12) + (-16) = -4$. Maëlle a **perdu $4$ points** au total.

**4.** Il faut ajouter l'opposé de $-4$ : la carte $(+4)$, car $(-4) + (+4) = 0$.`
    },
    {
      id: "5N2-ds-14",
      title: "La partie de golf",
      difficulty: 2,
      points: 5,
      statement: `Au golf, on note pour chaque trou l'écart entre le nombre de coups joués et le nombre de coups prévu (le « par ») : $-1$ signifie un coup de moins que prévu, $+2$ deux coups de plus. **Le joueur qui a le total le plus petit gagne.**

| Trou | 1 | 2 | 3 | 4 | 5 | 6 |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Alice | $-1$ | $+2$ | $0$ | $-2$ | $+1$ | $-1$ |
| Bilal | $+1$ | $-1$ | $-2$ | $0$ | $+2$ | $-2$ |

1. Calculer le total de chaque joueur après les trois premiers trous. Qui mène à ce moment-là ?
2. Calculer le total de chaque joueur après les six trous. Qui a gagné ?
3. Sur quel trou Alice a-t-elle le mieux joué ? Justifier.
4. Chloé a un total de $+1$ après les cinq premiers trous. Quel écart doit-elle obtenir au sixième trou pour finir à égalité avec Bilal ?`,
      solution: `**1.** Alice : $(-1) + (+2) + 0 = +1$. Bilal : $(+1) + (-1) + (-2) = -2$.
Comme $-2 < +1$, c'est **Bilal** qui mène après trois trous.

**2.** Alice : $(+1) + (-2) + (+1) + (-1) = -1$.
Bilal : $(-2) + 0 + (+2) + (-2) = -2$.
Comme $-2 < -1$, **Bilal a gagné**.

**3.** Le meilleur trou est celui où l'écart est le plus petit : c'est le **trou 4** avec $-2$ (deux coups de moins que prévu).

**4.** On cherche le nombre à ajouter à $+1$ pour obtenir $-2$ : $(+1) + (-3) = -2$. Chloé doit obtenir **$-3$** au sixième trou.`
    },
    {
      id: "5N2-ds-15",
      title: "Additions et soustractions à trous",
      difficulty: 3,
      points: 5,
      statement: `Sans calculatrice.

1. Compléter chaque égalité, en justifiant :
   a) $(-7) + \\ldots = 3$
   b) $\\ldots - 8 = -11$
   c) $4 - \\ldots = 9$
   d) $(-2{,}5) + \\ldots = -6$
2. Calculer $A = 3 - (-5) + (-12) - 4$ et $B = -6{,}5 - (-1{,}5) + 2$.
3. Trouver deux nombres relatifs dont la somme est $-3$ et la différence (le premier moins le second) est $7$. Expliquer la démarche (on pourra faire des essais).`,
      solution: `**1. a)** On cherche ce qu'il faut ajouter à $-7$ pour obtenir $3$ : $3 - (-7) = 3 + 7 = 10$. Donc $(-7) + 10 = 3$.

**b)** Le nombre cherché est $-11 + 8 = -3$. Vérification : $-3 - 8 = -11$.

**c)** Soustraire un nombre revient à ajouter son opposé : $4 + 5 = 9$, donc $4 - (-5) = 9$. Le nombre cherché est $-5$.

**d)** $-6 - (-2{,}5) = -6 + 2{,}5 = -3{,}5$. Donc $(-2{,}5) + (-3{,}5) = -6$.

**2.** $A = 3 + 5 + (-12) + (-4) = 8 + (-16) = -8$.
$B = -6{,}5 + 1{,}5 + 2 = -5 + 2 = -3$.

**3.** La différence vaut $7$ : le premier nombre dépasse le second de $7$. On essaie des couples dont l'écart est $7$ :
- $7$ et $0$ : somme $7$ (trop grand) ;
- $4$ et $-3$ : somme $1$ (trop grand) ;
- $2$ et $-5$ : somme $2 + (-5) = -3$.

Les nombres **$2$ et $-5$** conviennent : $2 + (-5) = -3$ et $2 - (-5) = 2 + 5 = 7$.`
    },
    {
      id: "5N2-ds-16",
      title: "L'escargot au fond du puits",
      difficulty: 4,
      points: 6,
      statement: `Un escargot est au fond d'un puits. On repère sa position par son altitude en mètres par rapport au bord du puits (altitude $0$) : au départ, il est à l'altitude $-10$.
Chaque jour, il monte de $3$ m ; chaque nuit, il glisse et redescend de $2$ m.

1. Recopier et compléter le tableau :

| Jour | 1 | 2 | 3 | 4 |
|:---|:---:|:---:|:---:|:---:|
| Altitude le matin (au réveil) | $-10$ | | | |
| Altitude le soir | | | | |

2. De combien de mètres l'escargot s'élève-t-il en tout sur une journée complète (un jour et une nuit) ?
3. Quel jour l'escargot atteint-il le bord du puits (altitude $0$) ? Justifier.
4. Un autre escargot part de l'altitude $-20$ dans un puits plus profond, au même rythme. Quel jour atteindra-t-il le bord ?`,
      solution: `**1.** Le soir : altitude du matin $+ 3$ ; le matin suivant : altitude du soir $- 2$.

| Jour | 1 | 2 | 3 | 4 |
|:---|:---:|:---:|:---:|:---:|
| Altitude le matin (au réveil) | $-10$ | $-9$ | $-8$ | $-7$ |
| Altitude le soir | $-7$ | $-6$ | $-5$ | $-4$ |

Par exemple : $-10 + 3 = -7$, puis $-7 - 2 = -9$.

**2.** Sur un jour et une nuit : $(+3) + (-2) = +1$. L'escargot s'élève de $1$ m.

**3.** Chaque matin, l'altitude augmente de $1$ : le matin du jour $7$ il est à $-4$, le soir du jour $7$ à $-1$, le matin du jour $8$ à $-3$, et le soir du jour $8$ à $-3 + 3 = 0$.
L'escargot atteint le bord **le 8e jour** (et non le 10e : le dernier jour, il monte de $3$ m d'un coup et ne redescend plus).

**4.** Le soir, il est $3$ m au-dessus de son altitude du matin : il atteint $0$ le jour où il part le matin de l'altitude $-3$.
Le matin du jour $1$ il est à $-20$, puis il gagne $1$ m par jour : $-19$ le matin du jour $2$, …, $-3$ le matin du jour $18$ (car $-20 + 17 = -3$).
Le soir du jour $18$ : $-3 + 3 = 0$. Il atteint le bord **le 18e jour**.`
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
    },
    {
      id: "5N3-ds-09",
      title: "Quotients et écritures décimales",
      difficulty: 1,
      points: 4,
      statement: `1. Compléter chaque égalité par une fraction :
   a) $3 \\times \\ldots = 7$
   b) $8 \\times \\ldots = 30$
2. Donner l'écriture décimale de $\\frac{7}{4}$ et de $\\frac{3}{8}$.
3. a) Simplifier la fraction $\\frac{30}{8}$, puis donner son écriture décimale.
   b) Vérifier que $8 \\times 3{,}75 = 30$.
4. La fraction $\\frac{2}{3}$ a-t-elle une écriture décimale exacte ? En donner une valeur approchée au centième.`,
      solution: `**1.** Par définition, le quotient de $a$ par $b$ est le nombre qui, multiplié par $b$, donne $a$ ; il s'écrit $\\frac{a}{b}$.
a) $3 \\times \\frac{7}{3} = 7$.
b) $8 \\times \\frac{30}{8} = 30$.

**2.** $\\frac{7}{4} = 7 \\div 4 = 1{,}75$ et $\\frac{3}{8} = 3 \\div 8 = 0{,}375$.

**3.** a) On divise le numérateur et le dénominateur par $2$ : $\\frac{30}{8} = \\frac{15}{4}$. Et $15 \\div 4 = 3{,}75$.
b) $8 \\times 3{,}75 = 8 \\times 3 + 8 \\times 0{,}75 = 24 + 6 = 30$. On retrouve bien que $\\frac{30}{8} = 3{,}75$ est le nombre qui, multiplié par $8$, donne $30$.

**4.** En posant la division de $2$ par $3$, on obtient $0{,}666\\ldots$ : le chiffre $6$ se répète sans fin, la division ne « tombe jamais juste ». $\\frac{2}{3}$ n'a donc **pas d'écriture décimale exacte**. Une valeur approchée au centième est $0{,}67$.`
    },
    {
      id: "5N3-ds-10",
      title: "Quel sirop est le plus sucré ?",
      difficulty: 2,
      points: 5,
      statement: `Pour préparer une boisson, Inès mélange du sirop et de l'eau.
- Verre A : $3$ cL de sirop pour un mélange total de $20$ cL.
- Verre B : $4$ cL de sirop pour un mélange total de $25$ cL.

1. Quelle est la proportion de sirop dans le verre A ? Dans le verre B ? (Répondre par une fraction.)
2. Écrire ces deux proportions avec le dénominateur $100$, puis dire quel verre a le goût de sirop le plus prononcé.
3. Quelle est la proportion d'eau dans le verre A ?
4. Inès verse les deux verres dans une carafe. Quelle est la proportion de sirop dans la carafe ? Est-elle plus grande ou plus petite que celle du verre A ? Justifier.`,
      solution: `**1.** La proportion de sirop est « quantité de sirop $\\div$ quantité totale » : $\\frac{3}{20}$ pour le verre A et $\\frac{4}{25}$ pour le verre B.

**2.** $\\frac{3}{20} = \\frac{3 \\times 5}{20 \\times 5} = \\frac{15}{100}$ et $\\frac{4}{25} = \\frac{4 \\times 4}{25 \\times 4} = \\frac{16}{100}$.
Comme $\\frac{16}{100} > \\frac{15}{100}$, le **verre B** est le plus sucré ($16\\,\\%$ de sirop contre $15\\,\\%$).

**3.** Il y a $20 - 3 = 17$ cL d'eau sur $20$ cL : la proportion d'eau est $\\frac{17}{20}$. (On peut aussi calculer $1 - \\frac{3}{20} = \\frac{20}{20} - \\frac{3}{20} = \\frac{17}{20}$.)

**4.** Dans la carafe, il y a $3 + 4 = 7$ cL de sirop pour $20 + 25 = 45$ cL : la proportion de sirop est $\\frac{7}{45}$.
Pour comparer avec $\\frac{3}{20}$, on prend un dénominateur commun : $180$ est un multiple de $45$ et de $20$.
$\\frac{7}{45} = \\frac{28}{180}$ et $\\frac{3}{20} = \\frac{27}{180}$. Comme $28 > 27$, la proportion de sirop dans la carafe est **plus grande** que dans le verre A (mais plus petite que dans le verre B).`
    },
    {
      id: "5N3-ds-11",
      title: "Le samedi de Zoé",
      difficulty: 3,
      points: 5,
      statement: `Un samedi, Zoé a passé :
- $\\frac{3}{8}$ de la journée à dormir ;
- $\\frac{1}{12}$ de la journée à faire du sport ;
- $\\frac{1}{8}$ de la journée à prendre ses repas ;
- $\\frac{1}{6}$ de la journée devant un écran.

Une journée dure $24$ heures.

1. Combien d'heures Zoé a-t-elle dormi ?
2. Quelle fraction de la journée représentent ces quatre activités ensemble ? Donner le résultat sous forme simplifiée.
3. Quelle fraction de la journée lui reste-t-il pour ses autres activités ? Combien d'heures cela représente-t-il ?
4. Zoé affirme : « J'ai passé deux fois plus de temps devant un écran qu'à faire du sport. » A-t-elle raison ? Calculer la différence entre ces deux fractions de la journée.`,
      solution: `**1.** $\\frac{3}{8}$ de $24$ h : $24 \\div 8 = 3$, puis $3 \\times 3 = 9$. Zoé a dormi **$9$ heures**.

**2.** On réduit au même dénominateur $24$ (multiple de $8$, de $12$ et de $6$) :
$\\frac{3}{8} = \\frac{9}{24}$ ; $\\frac{1}{12} = \\frac{2}{24}$ ; $\\frac{1}{8} = \\frac{3}{24}$ ; $\\frac{1}{6} = \\frac{4}{24}$.
$$\\frac{9}{24} + \\frac{2}{24} + \\frac{3}{24} + \\frac{4}{24} = \\frac{18}{24} = \\frac{3}{4}.$$
Les quatre activités occupent les **$\\frac{3}{4}$** de la journée.

**3.** Il reste $1 - \\frac{3}{4} = \\frac{4}{4} - \\frac{3}{4} = \\frac{1}{4}$ de la journée, soit $24 \\div 4 = 6$ heures.

**4.** Écran : $\\frac{1}{6} = \\frac{2}{12}$ ; sport : $\\frac{1}{12}$. Comme $\\frac{2}{12}$ est le double de $\\frac{1}{12}$, **Zoé a raison** ($4$ h d'écran contre $2$ h de sport).
Différence : $\\frac{1}{6} - \\frac{1}{12} = \\frac{2}{12} - \\frac{1}{12} = \\frac{1}{12}$ de la journée, c'est-à-dire $2$ heures.`
    },
    {
      id: "5N3-ds-12",
      title: "Des fractions de numérateur 1",
      difficulty: 4,
      points: 6,
      statement: `Dans l'Égypte ancienne, on écrivait les fractions comme des sommes de fractions de numérateur $1$, toutes différentes.

1. Vérifier par le calcul que $\\frac{3}{4} = \\frac{1}{2} + \\frac{1}{4}$ et que $\\frac{7}{12} = \\frac{1}{2} + \\frac{1}{12}$.
2. On considère $S = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16}$.
   a) Écrire chacune de ces fractions avec le dénominateur $16$, puis calculer $S$.
   b) Combien manque-t-il à $S$ pour atteindre $1$ ?
3. On veut écrire $\\frac{11}{12}$ comme une somme de fractions de numérateur $1$, toutes différentes.
   a) Recopier et compléter : $\\frac{1}{2} = \\frac{\\ldots}{12}$ ; $\\frac{1}{3} = \\frac{\\ldots}{12}$ ; $\\frac{1}{4} = \\frac{\\ldots}{12}$ ; $\\frac{1}{6} = \\frac{\\ldots}{12}$.
   b) En utilisant ces fractions et $\\frac{1}{12}$, trouver deux façons différentes d'écrire $\\frac{11}{12}$ comme une somme de trois fractions de numérateur $1$, toutes différentes. Vérifier chaque égalité.`,
      solution: `**1.** $\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$ et $\\frac{1}{2} + \\frac{1}{12} = \\frac{6}{12} + \\frac{1}{12} = \\frac{7}{12}$. Les deux égalités sont vraies.

**2.** a) $16$ est un multiple de $2$, $4$ et $8$ : $\\frac{1}{2} = \\frac{8}{16}$, $\\frac{1}{4} = \\frac{4}{16}$, $\\frac{1}{8} = \\frac{2}{16}$.
$S = \\frac{8}{16} + \\frac{4}{16} + \\frac{2}{16} + \\frac{1}{16} = \\frac{15}{16}$.
b) $1 = \\frac{16}{16}$ : il manque $\\frac{16}{16} - \\frac{15}{16} = \\frac{1}{16}$.

**3.** a) $\\frac{1}{2} = \\frac{6}{12}$ ; $\\frac{1}{3} = \\frac{4}{12}$ ; $\\frac{1}{4} = \\frac{3}{12}$ ; $\\frac{1}{6} = \\frac{2}{12}$ (et $\\frac{1}{12}$ vaut $1$ douzième).
b) Il faut trois numérateurs différents parmi $6$, $4$, $3$, $2$ et $1$ dont la somme vaut $11$ :
- $6 + 3 + 2 = 11$ : $\\frac{11}{12} = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{6}$ ;
- $6 + 4 + 1 = 11$ : $\\frac{11}{12} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{12}$.
Vérification : $\\frac{6}{12} + \\frac{3}{12} + \\frac{2}{12} = \\frac{11}{12}$ et $\\frac{6}{12} + \\frac{4}{12} + \\frac{1}{12} = \\frac{11}{12}$.`
    },
    {
      id: "5N3-ds-13",
      title: "La pizza en douze parts",
      difficulty: 1,
      points: 4,
      statement: `Une pizza est coupée en $12$ parts égales. Ana en mange $\\frac{1}{4}$, Ben en mange $\\frac{1}{3}$ et Chloé en mange $\\frac{1}{6}$.

1. Combien de parts chacun a-t-il mangées ?
2. Écrire chacune des trois fractions avec le dénominateur $12$.
3. Quelle fraction de la pizza a été mangée en tout ? Donner le résultat sous forme simplifiée.
4. Quelle fraction de la pizza reste-t-il ? Combien de parts cela représente-t-il ?`,
      solution: `**1.** $\\frac{1}{4}$ de $12$ parts : $12 \\div 4 = 3$ parts pour Ana.
$\\frac{1}{3}$ de $12$ parts : $12 \\div 3 = 4$ parts pour Ben.
$\\frac{1}{6}$ de $12$ parts : $12 \\div 6 = 2$ parts pour Chloé.

**2.** $\\frac{1}{4} = \\frac{3}{12}$ ; $\\quad \\frac{1}{3} = \\frac{4}{12}$ ; $\\quad \\frac{1}{6} = \\frac{2}{12}$.

**3.** $\\frac{3}{12} + \\frac{4}{12} + \\frac{2}{12} = \\frac{9}{12} = \\frac{3}{4}$ (on divise le numérateur et le dénominateur par $3$).
Les trois amis ont mangé les **$\\frac{3}{4}$** de la pizza.

**4.** Il reste $1 - \\frac{3}{4} = \\frac{4}{4} - \\frac{3}{4} = \\frac{1}{4}$ de la pizza, soit $12 - 9 = 3$ parts.`
    },
    {
      id: "5N3-ds-14",
      title: "Qui est le plus avancé dans la course ?",
      difficulty: 2,
      points: 5,
      statement: `Lors d'un cross de $2\\,400$ m, on relève au même instant la position de trois coureurs. Ils ont parcouru :
- Inès : les $\\frac{5}{8}$ du parcours ;
- Jules : les $\\frac{3}{4}$ du parcours ;
- Karim : les $\\frac{11}{16}$ du parcours.

1. Écrire les trois fractions avec le même dénominateur $16$.
2. Ranger les trois coureurs du plus avancé au moins avancé.
3. Calculer la distance (en m) parcourue par chacun.
4. Quelle fraction du parcours reste-t-il à Jules ? Quelle distance cela représente-t-il ?`,
      solution: `**1.** $\\frac{5}{8} = \\frac{5 \\times 2}{8 \\times 2} = \\frac{10}{16}$ ; $\\quad \\frac{3}{4} = \\frac{3 \\times 4}{4 \\times 4} = \\frac{12}{16}$ ; $\\quad \\frac{11}{16}$ reste inchangée.

**2.** Avec le même dénominateur, on compare les numérateurs : $12 > 11 > 10$, donc $\\frac{3}{4} > \\frac{11}{16} > \\frac{5}{8}$.
Du plus avancé au moins avancé : **Jules, Karim, Inès**.

**3.** Un seizième du parcours : $2\\,400 \\div 16 = 150$ m.
- Inès : $10 \\times 150 = 1\\,500$ m ;
- Jules : $12 \\times 150 = 1\\,800$ m ;
- Karim : $11 \\times 150 = 1\\,650$ m.

**4.** Il reste à Jules $1 - \\frac{3}{4} = \\frac{1}{4}$ du parcours, soit $2\\,400 \\div 4 = 600$ m (vérification : $2\\,400 - 1\\,800 = 600$ m).`
    },
    {
      id: "5N3-ds-15",
      title: "Le mélange de peinture",
      difficulty: 3,
      points: 5,
      statement: `Pour repeindre un mur, Hugo prépare $20$ litres de peinture verte. Le mélange contient $\\frac{3}{10}$ de peinture blanche, $\\frac{2}{5}$ de peinture bleue, et le reste est de la peinture jaune.

1. Quelle fraction du mélange représente la peinture jaune ? Détailler le calcul.
2. Calculer le volume (en litres) de chacune des trois peintures.
3. Hugo dit : « Il y a plus de jaune que de blanc. » A-t-il raison ? Justifier.
4. Pour obtenir un vert plus foncé, Hugo ajoute $2$ litres de peinture bleue à ses $20$ litres. Quelle fraction du nouveau mélange la peinture bleue représente-t-elle ? Donner le résultat sous forme simplifiée.`,
      solution: `**1.** On écrit les fractions avec le dénominateur $10$ : $\\frac{2}{5} = \\frac{4}{10}$.
Blanc et bleu ensemble : $\\frac{3}{10} + \\frac{4}{10} = \\frac{7}{10}$.
Jaune : $1 - \\frac{7}{10} = \\frac{10}{10} - \\frac{7}{10} = \\frac{3}{10}$.

**2.** Un dixième de $20$ L vaut $20 \\div 10 = 2$ L.
- Blanc : $3 \\times 2 = 6$ L ;
- Bleu : $4 \\times 2 = 8$ L ;
- Jaune : $3 \\times 2 = 6$ L.
Vérification : $6 + 8 + 6 = 20$ L.

**3.** Non : il y a autant de jaune que de blanc ($\\frac{3}{10}$ chacun, soit $6$ L).

**4.** Le nouveau mélange contient $20 + 2 = 22$ L, dont $8 + 2 = 10$ L de bleu.
La peinture bleue représente $\\frac{10}{22} = \\frac{5}{11}$ du nouveau mélange (on divise par $2$).`
    },
    {
      id: "5N3-ds-16",
      title: "Le trajet à vélo en trois étapes",
      difficulty: 4,
      points: 6,
      statement: `Malo fait une randonnée à vélo. Le matin, il parcourt $\\frac{1}{3}$ du trajet. L'après-midi, il parcourt la moitié de ce qui lui restait. Le lendemain, il termine en parcourant les $12$ km restants.

On représente le trajet complet par une bande partagée en $6$ cases égales :

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 340 60" width="340" height="60" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="20" y="15" width="300" height="30" fill="none" stroke="currentColor" stroke-width="2"/><line x1="70" y1="15" x2="70" y2="45" stroke="currentColor" stroke-width="1.2"/><line x1="120" y1="15" x2="120" y2="45" stroke="currentColor" stroke-width="1.2"/><line x1="170" y1="15" x2="170" y2="45" stroke="currentColor" stroke-width="1.2"/><line x1="220" y1="15" x2="220" y2="45" stroke="currentColor" stroke-width="1.2"/><line x1="270" y1="15" x2="270" y2="45" stroke="currentColor" stroke-width="1.2"/></svg></div>

1. Combien de cases représentent la partie parcourue le matin ?
2. Combien de cases reste-t-il après le matin ? Combien de cases Malo parcourt-il l'après-midi ?
3. Quelle fraction du trajet lui reste-t-il pour le lendemain ?
4. En déduire la longueur d'une case, puis la longueur totale du trajet.
5. Vérifier le résultat en calculant les distances parcourues le matin et l'après-midi.`,
      solution: `**1.** $\\frac{1}{3} = \\frac{2}{6}$ : le matin correspond à **$2$ cases** sur $6$.

**2.** Il reste $6 - 2 = 4$ cases. L'après-midi, il parcourt la moitié de ces $4$ cases, soit **$2$ cases**.

**3.** Il reste $6 - 2 - 2 = 2$ cases, soit $\\frac{2}{6} = \\frac{1}{3}$ du trajet.

**4.** Les $2$ cases restantes représentent $12$ km, donc une case représente $12 \\div 2 = 6$ km.
Le trajet complet mesure $6 \\times 6 = 36$ km.

**5.** Matin : $\\frac{1}{3}$ de $36$ km $= 36 \\div 3 = 12$ km. Il reste $36 - 12 = 24$ km.
Après-midi : la moitié de $24$ km, soit $12$ km. Il reste $24 - 12 = 12$ km pour le lendemain : c'est bien la donnée de l'énoncé.`
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
    },
    {
      id: "5N4-ds-09",
      title: "Carré ou double ?",
      difficulty: 1,
      points: 4,
      statement: `1. Calculer :
   a) $6^2$ et $6 \\times 2$
   b) $2^4$ et $4^2$
   c) $2^3$ et $3^2$
   d) $10^2$ et $10 \\times 2$
2. Léa affirme : « $5^2 = 10$ ». Expliquer son erreur.
3. Écrire sous la forme d'une puissance : $3 \\times 3 \\times 3 \\times 3$ ; $\\;7 \\times 7$ ; $\\;2 \\times 2 \\times 2 \\times 2 \\times 2$.
4. Trouver le nombre entier positif qui convient : $\\ldots^2 = 81$ ; $\\;2^{\\ldots} = 64$.`,
      solution: `**1.** Le carré d'un nombre est ce nombre multiplié **par lui-même** ; le double est ce nombre multiplié par $2$.
a) $6^2 = 6 \\times 6 = 36$ et $6 \\times 2 = 12$.
b) $2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$ et $4^2 = 4 \\times 4 = 16$ (cas particulier où les deux sont égaux).
c) $2^3 = 2 \\times 2 \\times 2 = 8$ et $3^2 = 3 \\times 3 = 9$ : ils sont différents.
d) $10^2 = 10 \\times 10 = 100$ et $10 \\times 2 = 20$.

**2.** Léa a calculé $5 \\times 2$ (le double) au lieu de $5 \\times 5$. En réalité $5^2 = 5 \\times 5 = 25$.

**3.** $3 \\times 3 \\times 3 \\times 3 = 3^4$ ; $\\;7 \\times 7 = 7^2$ ; $\\;2 \\times 2 \\times 2 \\times 2 \\times 2 = 2^5$ (on compte le nombre de facteurs égaux).

**4.** $9 \\times 9 = 81$, donc $9^2 = 81$.
$2^5 = 32$ et $2^6 = 32 \\times 2 = 64$, donc $2^6 = 64$.`
    },
    {
      id: "5N4-ds-10",
      title: "Le tournoi à élimination directe",
      difficulty: 2,
      points: 5,
      statement: `Dans un tournoi de tennis de table, les joueurs s'affrontent par matchs à deux. À chaque tour, le perdant de chaque match est éliminé, le gagnant passe au tour suivant. Le tournoi se termine quand il ne reste qu'un joueur.

1. Le tournoi commence avec $32$ joueurs. Combien en reste-t-il après chaque tour ? Combien de tours faut-il pour désigner le vainqueur ?
2. Écrire $32$ sous la forme d'une puissance de $2$. Quel lien y a-t-il avec le nombre de tours ?
3. Un tournoi se déroule en $7$ tours. Combien de joueurs y avait-il au départ ? Justifier.
4. Combien de matchs ont été joués en tout dans le tournoi à $32$ joueurs ? Expliquer pourquoi ce nombre est égal à $32 - 1$.`,
      solution: `**1.** À chaque tour, le nombre de joueurs est divisé par $2$ : $32 \\to 16 \\to 8 \\to 4 \\to 2 \\to 1$.
Il faut **$5$ tours** pour désigner le vainqueur.

**2.** $32 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 2^5$. L'exposant $5$ est égal au **nombre de tours** : chaque tour correspond à une division par $2$.

**3.** En remontant le tournoi, on multiplie par $2$ à chaque tour : il y avait $2^7$ joueurs au départ.
$2^7 = 2^5 \\times 2 \\times 2 = 32 \\times 4 = 128$ joueurs.

**4.** Chaque tour comporte un match pour deux joueurs : $16 + 8 + 4 + 2 + 1 = 31$ matchs.
Chaque match élimine exactement un joueur et, à la fin, tous les joueurs sauf le vainqueur ont été éliminés : il y a donc autant de matchs que de joueurs éliminés, soit $32 - 1 = 31$.`
    },
    {
      id: "5N4-ds-11",
      title: "Sommes de nombres impairs",
      difficulty: 3,
      points: 5,
      statement: `On additionne les premiers nombres impairs :
$$1 \\qquad 1 + 3 \\qquad 1 + 3 + 5 \\qquad 1 + 3 + 5 + 7 \\qquad \\ldots$$

1. Calculer ces quatre sommes, puis la suivante $1 + 3 + 5 + 7 + 9$. Que remarque-t-on ?
2. Recopier et compléter la phrase suivante, qui énonce une conjecture : « Quand on additionne les … premiers nombres impairs, on obtient le carré de … ».
3. a) Combien y a-t-il de nombres impairs de $1$ à $23$ ? (On pourra les écrire tous.)
   b) En utilisant la conjecture, calculer sans poser l'addition $1 + 3 + 5 + \\ldots + 23$. Vérifier ensuite le résultat à la calculatrice.
4. On additionne les premiers nombres impairs à partir de $1$ et on obtient $121$. Combien de nombres a-t-on additionnés, et quel est le dernier ?`,
      solution: `**1.** $1 = 1$ ; $1 + 3 = 4$ ; $1 + 3 + 5 = 9$ ; $1 + 3 + 5 + 7 = 16$ ; $1 + 3 + 5 + 7 + 9 = 25$.
On reconnaît les carrés : $1 = 1^2$, $4 = 2^2$, $9 = 3^2$, $16 = 4^2$, $25 = 5^2$.

**2.** « Quand on additionne les **$5$** (ou $4$, $10$, …) premiers nombres impairs, on obtient le carré de **$5$** (respectivement $4$, $10$, …) » : la somme des premiers nombres impairs est égale au carré du nombre de termes additionnés.

**3.** a) Les nombres impairs de $1$ à $23$ sont $1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23$ : il y en a **$12$**.
b) D'après la conjecture : $1 + 3 + \\ldots + 23 = 12^2 = 144$. La calculatrice confirme.

**4.** $121 = 11^2$ : on a additionné **$11$ nombres impairs**. Ce sont $1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21$ : le dernier nombre est **$21$**.`
    },
    {
      id: "5N4-ds-12",
      title: "Le chiffre des unités d'une puissance",
      difficulty: 4,
      points: 6,
      statement: `1. a) Écrire les carrés des nombres entiers de $1$ à $12$.
   b) Quels chiffres des unités obtient-on ? Lesquels n'apparaissent jamais ?
2. On admet que le chiffre des unités du carré d'un nombre entier ne dépend que du chiffre des unités de ce nombre (par exemple, $23^2$ se termine comme $3^2$, c'est-à-dire par $9$). En déduire que $2\\,027$ n'est le carré d'aucun nombre entier.
3. a) Calculer les puissances de $2$ de $2^1$ à $2^8$ et noter leur chiffre des unités.
   b) Que remarque-t-on ? Prévoir le chiffre des unités de $2^{12}$.
   c) Vérifier en calculant $2^9$, $2^{10}$, $2^{11}$ et $2^{12}$ par doublements successifs.
4. Calculer les puissances de $3$ de $3^1$ à $3^6$ et noter leur chiffre des unités. Prévoir le chiffre des unités de $3^8$, puis vérifier sachant que $3^8 = 3^4 \\times 3^4$.`,
      solution: `**1.** a) $1^2 = 1$ ; $2^2 = 4$ ; $3^2 = 9$ ; $4^2 = 16$ ; $5^2 = 25$ ; $6^2 = 36$ ; $7^2 = 49$ ; $8^2 = 64$ ; $9^2 = 81$ ; $10^2 = 100$ ; $11^2 = 121$ ; $12^2 = 144$.
b) Les chiffres des unités obtenus sont $0$, $1$, $4$, $5$, $6$ et $9$. Les chiffres **$2$, $3$, $7$ et $8$** n'apparaissent jamais.

**2.** Le chiffre des unités d'un carré est celui de l'un des carrés $0^2, 1^2, \\ldots, 9^2$ : d'après la question 1, il ne peut valoir que $0$, $1$, $4$, $5$, $6$ ou $9$. Comme $2\\,027$ se termine par $7$, **ce n'est pas un carré**.

**3.** a) $2^1 = 2$ ; $2^2 = 4$ ; $2^3 = 8$ ; $2^4 = 16$ ; $2^5 = 32$ ; $2^6 = 64$ ; $2^7 = 128$ ; $2^8 = 256$.
Chiffres des unités : $2$ ; $4$ ; $8$ ; $6$ ; $2$ ; $4$ ; $8$ ; $6$.
b) Les chiffres des unités se répètent par groupes de quatre : $2, 4, 8, 6$. En continuant : $2^9 \\to 2$, $2^{10} \\to 4$, $2^{11} \\to 8$, $2^{12} \\to 6$. On prévoit que **$2^{12}$ se termine par $6$**.
c) $2^9 = 512$ ; $2^{10} = 1\\,024$ ; $2^{11} = 2\\,048$ ; $2^{12} = 4\\,096$ : la prévision est vérifiée.

**4.** $3^1 = 3$ ; $3^2 = 9$ ; $3^3 = 27$ ; $3^4 = 81$ ; $3^5 = 243$ ; $3^6 = 729$. Chiffres des unités : $3$ ; $9$ ; $7$ ; $1$ ; $3$ ; $9$.
Ils se répètent par groupes de quatre : $3, 9, 7, 1$. En continuant : $3^7 \\to 7$ et $3^8 \\to 1$. On prévoit que $3^8$ se termine par **$1$**.
Vérification : $3^8 = 81 \\times 81 = 6\\,561$, qui se termine bien par $1$.`
    },
    {
      id: "5N4-ds-13",
      title: "Puissance ou produit ?",
      difficulty: 1,
      points: 4,
      statement: `Sans calculatrice.

1. Calculer chacun des nombres suivants :
$$3^2 \\quad ; \\quad 3 \\times 2 \\quad ; \\quad 2^3 \\quad ; \\quad 2 \\times 3 \\quad ; \\quad 2^4 \\quad ; \\quad 4^2$$
2. Lucie affirme : « $3^2$ et $3 \\times 2$, c'est la même chose. » Expliquer son erreur.
3. Les nombres $2^4$ et $4^2$ sont-ils égaux ? Et les nombres $2^3$ et $3^2$ ?
4. Écrire $3 \\times 3 \\times 3 + 2 \\times 2$ à l'aide de puissances, puis calculer.`,
      solution: `**1.** $3^2 = 3 \\times 3 = 9$ ; $\\;3 \\times 2 = 6$ ; $\\;2^3 = 2 \\times 2 \\times 2 = 8$ ; $\\;2 \\times 3 = 6$ ; $\\;2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$ ; $\\;4^2 = 4 \\times 4 = 16$.

**2.** $3^2$ est le produit de **deux facteurs égaux à $3$** : $3 \\times 3 = 9$. Alors que $3 \\times 2$ est le produit de $3$ par $2$, qui vaut $6$. Comme $9 \\neq 6$, ce n'est pas la même chose.

**3.** $2^4 = 16$ et $4^2 = 16$ : ces deux nombres sont égaux (c'est un cas particulier).
$2^3 = 8$ et $3^2 = 9$ : ces nombres ne sont pas égaux. En général, on ne peut pas échanger le nombre et l'exposant.

**4.** $3 \\times 3 \\times 3 + 2 \\times 2 = 3^3 + 2^2 = 27 + 4 = 31$.`
    },
    {
      id: "5N4-ds-14",
      title: "Le dallage de la cour",
      difficulty: 2,
      points: 5,
      statement: `Un artisan pose des dalles carrées toutes identiques pour former des dallages **carrés** (autant de dalles sur chaque côté).

1. Combien faut-il de dalles pour un dallage carré de $7$ dalles de côté ? de $12$ dalles de côté ?
2. Un dallage carré utilise exactement $81$ dalles. Combien y a-t-il de dalles sur un côté ?
3. L'artisan dispose de $130$ dalles.
   a) Quel est le plus grand dallage carré qu'il peut réaliser ? Combien lui reste-t-il de dalles ?
   b) Combien de dalles devrait-il acheter en plus pour réaliser un dallage carré de $12$ dalles de côté ?
4. Le nombre $50$ est-il le carré d'un nombre entier ? Entre quels carrés d'entiers consécutifs est-il compris ?`,
      solution: `**1.** Pour $7$ dalles de côté : $7^2 = 7 \\times 7 = 49$ dalles.
Pour $12$ dalles de côté : $12^2 = 12 \\times 12 = 144$ dalles.

**2.** On cherche un nombre dont le carré vaut $81$ : $9^2 = 81$. Il y a **$9$ dalles** sur un côté.

**3. a)** $11^2 = 121 \\leqslant 130$ mais $12^2 = 144 > 130$. Le plus grand dallage carré possible a **$11$ dalles de côté**. Il reste $130 - 121 = 9$ dalles.

**b)** Il faut $144$ dalles : il doit en acheter $144 - 130 = 14$ de plus.

**4.** $7^2 = 49$ et $8^2 = 64$. Comme $49 < 50 < 64$, le nombre $50$ est compris entre deux carrés d'entiers consécutifs : **ce n'est pas le carré d'un nombre entier**.`
    },
    {
      id: "5N4-ds-15",
      title: "Des nombres fabriqués avec des 2 et des 3",
      difficulty: 3,
      points: 5,
      statement: `Certains nombres entiers peuvent s'écrire comme un produit de puissances de $2$ et de puissances de $3$. Par exemple : $12 = 4 \\times 3 = 2^2 \\times 3$.

1. Calculer : $A = 2^3 \\times 3$ ; $\\;B = 2^2 \\times 3^2$ ; $\\;C = 2 \\times 3^3$.
2. On veut écrire $72$ de cette façon.
   a) Diviser $72$ par $2$ autant de fois que possible : combien de fois peut-on le faire, et quel quotient obtient-on à la fin ?
   b) En déduire l'écriture de $72$ sous la forme d'un produit d'une puissance de $2$ et d'une puissance de $3$.
3. Avec la même méthode, écrire $48$ et $108$ sous cette forme.
4. Le nombre $40$ peut-il s'écrire de cette façon ? Justifier.`,
      solution: `**1.** $A = 8 \\times 3 = 24$ ; $\\;B = 4 \\times 9 = 36$ ; $\\;C = 2 \\times 27 = 54$.

**2. a)** $72 \\div 2 = 36$ ; $36 \\div 2 = 18$ ; $18 \\div 2 = 9$. Le nombre $9$ est impair : on a pu diviser **$3$ fois** par $2$, et il reste $9$.

**b)** $72 = 2 \\times 2 \\times 2 \\times 9 = 2^3 \\times 3^2$. Vérification : $8 \\times 9 = 72$.

**3.** $48 \\div 2 = 24$, $24 \\div 2 = 12$, $12 \\div 2 = 6$, $6 \\div 2 = 3$ : quatre divisions, il reste $3$.
Donc $48 = 2^4 \\times 3$ (vérification : $16 \\times 3 = 48$).

$108 \\div 2 = 54$, $54 \\div 2 = 27$ : deux divisions, il reste $27 = 3 \\times 3 \\times 3$.
Donc $108 = 2^2 \\times 3^3$ (vérification : $4 \\times 27 = 108$).

**4.** $40 \\div 2 = 20$, $20 \\div 2 = 10$, $10 \\div 2 = 5$ : il reste $5$, qui n'est pas une puissance de $3$ (car $3^1 = 3$ et $3^2 = 9$).
Donc $40 = 2^3 \\times 5$ ne peut **pas** s'écrire uniquement avec des puissances de $2$ et de $3$.`
    },
    {
      id: "5N4-ds-16",
      title: "Plier une feuille de papier",
      difficulty: 4,
      points: 6,
      statement: `On plie une feuille de papier en deux, puis encore en deux, et ainsi de suite. À chaque pliage, le nombre d'épaisseurs de papier double. Une feuille a une épaisseur de $0{,}1$ mm.

1. Recopier et compléter le tableau, en écrivant le nombre d'épaisseurs sous la forme d'une puissance de $2$ puis en nombre entier :

| Nombre de pliages | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Nombre d'épaisseurs | $2^1 = 2$ | | | | | | |

2. Quelle est l'épaisseur (en mm) de la feuille pliée après $7$ pliages ?
3. Combien de pliages faut-il au minimum pour dépasser $100$ épaisseurs ?
4. Nina affirme : « Avec $10$ pliages, on dépasse les $10$ cm d'épaisseur. » Vérifier son affirmation (on pourra continuer le tableau).
5. Sur une autre feuille, on fait des pliages « en accordéon » en trois : à chaque pliage, le nombre d'épaisseurs est multiplié par $3$. Combien de pliages en trois faut-il pour dépasser $100$ épaisseurs ?`,
      solution: `**1.**

| Nombre de pliages | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Nombre d'épaisseurs | $2^1 = 2$ | $2^2 = 4$ | $2^3 = 8$ | $2^4 = 16$ | $2^5 = 32$ | $2^6 = 64$ | $2^7 = 128$ |

**2.** Après $7$ pliages : $128 \\times 0{,}1 = 12{,}8$ mm.

**3.** $2^6 = 64 < 100$ et $2^7 = 128 > 100$ : il faut au minimum **$7$ pliages**.

**4.** On continue en doublant : $2^8 = 256$, $2^9 = 512$, $2^{10} = 1\\,024$ épaisseurs.
Épaisseur : $1\\,024 \\times 0{,}1 = 102{,}4$ mm, soit $10{,}24$ cm. Comme $10{,}24 > 10$, **Nina a raison**.

**5.** $3^1 = 3$, $3^2 = 9$, $3^3 = 27$, $3^4 = 81$, $3^5 = 243$.
$3^4 = 81 < 100$ et $3^5 = 243 > 100$ : il faut **$5$ pliages en trois**.`
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
    },
    {
      id: "5N5-ds-09",
      title: "Formule de livraison et test d'égalité",
      difficulty: 1,
      points: 4,
      statement: `Une pizzeria livre à domicile. Le prix à payer, en euros, pour $n$ pizzas livrées est donné par la formule :
$$P = 9n + 3.$$

1. Que représentent, à votre avis, le nombre $9$ et le nombre $3$ dans cette formule ?
2. Calculer le prix à payer pour $2$ pizzas, puis pour $5$ pizzas.
3. On considère l'égalité $4x + 3 = 2x + 11$.
   a) Est-elle vraie pour $x = 4$ ? Justifier.
   b) Est-elle vraie pour $x = 2$ ? Justifier.`,
      solution: `**1.** $9n$ augmente de $9$ quand on commande une pizza de plus : $9$ € est le **prix d'une pizza**. Le nombre $3$ s'ajoute quel que soit le nombre de pizzas : ce sont les **frais de livraison** ($3$ €).

**2.** On remplace $n$ par sa valeur ($9n$ signifie $9 \\times n$) :
- pour $n = 2$ : $P = 9 \\times 2 + 3 = 18 + 3 = 21$ € ;
- pour $n = 5$ : $P = 9 \\times 5 + 3 = 45 + 3 = 48$ €.

**3.** On calcule séparément les deux membres.
a) Pour $x = 4$ : $4 \\times 4 + 3 = 16 + 3 = 19$ et $2 \\times 4 + 11 = 8 + 11 = 19$. Les deux membres sont égaux : l'égalité est **vraie** pour $x = 4$.
b) Pour $x = 2$ : $4 \\times 2 + 3 = 11$ et $2 \\times 2 + 11 = 15$. Comme $11 \\neq 15$, l'égalité est **fausse** pour $x = 2$.`
    },
    {
      id: "5N5-ds-10",
      title: "Les âges de la famille",
      difficulty: 2,
      points: 5,
      statement: `Léo a $x$ ans. Sa sœur Maya a $3$ ans de plus que lui et leur père a le triple de l'âge de Léo.

1. Exprimer en fonction de $x$ l'âge de Maya et l'âge du père.
2. Montrer que la somme des âges des trois personnes est égale à $5x + 3$.
3. Calculer cette somme lorsque Léo a $10$ ans.
4. En réalité, la somme des trois âges est $58$ ans.
   a) Écrire une équation traduisant cette information.
   b) Résoudre cette équation et donner l'âge de chacun. Vérifier.`,
      solution: `**1.** Maya a $3$ ans de plus : son âge est $x + 3$. Le père a le triple de l'âge de Léo : $3 \\times x = 3x$.

**2.** Somme des âges : $x + (x + 3) + 3x = x + x + 3x + 3 = 5x + 3$ (on regroupe les termes en $x$ : $1 + 1 + 3 = 5$).

**3.** Pour $x = 10$ : $5 \\times 10 + 3 = 53$ ans.

**4.** a) $5x + 3 = 58$.
b) On soustrait $3$ aux deux membres : $5x = 55$. On divise par $5$ : $x = 11$.
Léo a **$11$ ans**, Maya **$14$ ans** et le père **$33$ ans**.
Vérification : $11 + 14 + 33 = 58$.`
    },
    {
      id: "5N5-ds-11",
      title: "Le cadre photo",
      difficulty: 3,
      points: 5,
      statement: `Une photo carrée a pour côté $x$ cm. On l'entoure d'un cadre de bois qui forme une bande de $2$ cm de large tout autour de la photo. L'ensemble (photo et cadre) est donc aussi un carré.

1. Montrer que le côté du carré extérieur est égal à $x + 4$ (en cm).
2. Exprimer en fonction de $x$ :
   a) le périmètre de la photo ;
   b) le périmètre extérieur du cadre, sous la forme d'une expression développée et réduite.
3. Calculer le périmètre extérieur du cadre pour une photo de $15$ cm de côté.
4. Le périmètre extérieur du cadre mesure $100$ cm. Écrire une équation, la résoudre, puis donner le côté de la photo.
5. Noé affirme : « Quelle que soit la photo, le périmètre extérieur du cadre dépasse celui de la photo de $16$ cm. » A-t-il raison ? Justifier.`,
      solution: `**1.** Sur chaque côté, le cadre ajoute $2$ cm à gauche et $2$ cm à droite de la photo : le côté extérieur mesure $2 + x + 2 = x + 4$ cm.

**2.** a) La photo est un carré de côté $x$ : son périmètre est $4x$.
b) Le périmètre extérieur est $4 \\times (x + 4)$. Par distributivité : $4(x + 4) = 4x + 16$.

**3.** Pour $x = 15$ : $4 \\times 15 + 16 = 60 + 16 = 76$ cm.

**4.** On résout $4x + 16 = 100$.
On soustrait $16$ : $4x = 84$. On divise par $4$ : $x = 21$.
La photo a **$21$ cm** de côté. Vérification : $4 \\times (21 + 4) = 4 \\times 25 = 100$.

**5.** Différence des périmètres : $(4x + 16) - 4x = 16$. Le résultat ne dépend pas de $x$ : **Noé a raison**, pour toute photo l'écart est de $16$ cm.`
    },
    {
      id: "5N5-ds-12",
      title: "Le carré du calendrier",
      difficulty: 4,
      points: 6,
      statement: `Sur une page de calendrier, les dates d'une même semaine sont écrites sur une ligne de $7$ cases. On entoure un carré de $4$ dates, comme les dates en gras ci-dessous.

| Lun. | Mar. | Mer. | Jeu. | Ven. | Sam. | Dim. |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $1$ | $2$ | **$3$** | **$4$** | $5$ | $6$ | $7$ |
| $8$ | $9$ | **$10$** | **$11$** | $12$ | $13$ | $14$ |
| $15$ | $16$ | $17$ | $18$ | $19$ | $20$ | $21$ |
| $22$ | $23$ | $24$ | $25$ | $26$ | $27$ | $28$ |
| $29$ | $30$ | $31$ | | | | |

1. Calculer la somme des $4$ dates entourées dans cet exemple.
2. On appelle $n$ la date en haut à gauche d'un tel carré.
   a) Expliquer pourquoi les trois autres dates sont $n + 1$, $n + 7$ et $n + 8$.
   b) Montrer que la somme des quatre dates est égale à $4n + 16$. Vérifier avec l'exemple.
3. Un carré de quatre dates a pour somme $76$. Trouver les quatre dates en résolvant une équation.
4. Peut-on trouver un carré de quatre dates dont la somme vaut $50$ ? Justifier.
5. Peut-on trouver un carré de quatre dates dont la somme vaut $140$ ? Justifier.`,
      solution: `**1.** $3 + 4 + 10 + 11 = 28$.

**2.** a) La date à droite de $n$ est le lendemain : $n + 1$. La date en dessous de $n$ est le même jour de la semaine suivante, $7$ jours plus tard : $n + 7$. Celle en dessous de $n + 1$ est $n + 1 + 7 = n + 8$.
b) $n + (n + 1) + (n + 7) + (n + 8) = 4n + 16$ (quatre fois $n$, et $1 + 7 + 8 = 16$).
Avec $n = 3$ : $4 \\times 3 + 16 = 12 + 16 = 28$. On retrouve le résultat de la question 1.

**3.** On résout $4n + 16 = 76$ : $4n = 60$, donc $n = 15$.
Les dates sont **$15$, $16$, $22$ et $23$**. Vérification : $15 + 16 + 22 + 23 = 76$.

**4.** Il faudrait $4n + 16 = 50$, donc $4n = 34$ et $n = 8{,}5$. Une date est un nombre entier : **c'est impossible**.
(On peut aussi remarquer que $4n + 16 = 4(n + 4)$ est toujours un multiple de $4$, ce qui n'est pas le cas de $50$.)

**5.** Il faudrait $4n + 16 = 140$, donc $4n = 124$ et $n = 31$. Mais alors la date en bas à droite serait $31 + 8 = 39$, et aucun mois n'a $39$ jours : **c'est impossible**.`
    },
    {
      id: "5N5-ds-13",
      title: "Une rangée de carrés en allumettes",
      difficulty: 1,
      points: 4,
      statement: `Avec des allumettes, on construit une rangée de carrés collés les uns aux autres. Voici la rangée de $3$ carrés :

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:300px;"><svg class="geo-svg-figure" viewBox="0 0 220 80" width="220" height="80" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><g stroke="#b45309" stroke-width="4" stroke-linecap="round"><line x1="20" y1="10" x2="80" y2="10"/><line x1="80" y1="10" x2="140" y2="10"/><line x1="140" y1="10" x2="200" y2="10"/><line x1="20" y1="70" x2="80" y2="70"/><line x1="80" y1="70" x2="140" y2="70"/><line x1="140" y1="70" x2="200" y2="70"/><line x1="20" y1="10" x2="20" y2="70"/><line x1="80" y1="10" x2="80" y2="70"/><line x1="140" y1="10" x2="140" y2="70"/><line x1="200" y1="10" x2="200" y2="70"/></g></svg></div>

1. Combien d'allumettes faut-il pour une rangée de $1$ carré ? de $2$ carrés ? de $3$ carrés ? de $4$ carrés ?
2. On admet que, pour une rangée de $n$ carrés, il faut $3 \\times n + 1$ allumettes. Vérifier cette formule pour $n = 3$ et $n = 4$.
3. Combien faut-il d'allumettes pour une rangée de $20$ carrés ?
4. Avec $121$ allumettes, combien de carrés peut-on aligner (en utilisant toutes les allumettes) ?`,
      solution: `**1.** $1$ carré : $4$ allumettes. Chaque nouveau carré ajoute $3$ allumettes (le côté gauche est déjà posé).
$2$ carrés : $4 + 3 = 7$ ; $3$ carrés : $7 + 3 = 10$ ; $4$ carrés : $10 + 3 = 13$ allumettes.

**2.** Pour $n = 3$ : $3 \\times 3 + 1 = 10$. Pour $n = 4$ : $3 \\times 4 + 1 = 13$. On retrouve bien les résultats de la question 1.

**3.** Pour $n = 20$ : $3 \\times 20 + 1 = 61$ allumettes.

**4.** On cherche $n$ tel que $3n + 1 = 121$.
$3n = 121 - 1 = 120$, donc $n = 120 \\div 3 = 40$.
On peut aligner **$40$ carrés** (vérification : $3 \\times 40 + 1 = 121$).`
    },
    {
      id: "5N5-ds-14",
      title: "Développer en découpant un rectangle",
      difficulty: 2,
      points: 5,
      statement: `Le grand rectangle ci-dessous a pour largeur $5$ et pour longueur $x + 3$ (les longueurs sont en cm). Il est découpé en deux rectangles.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 300 150" width="300" height="150" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="40" y="20" width="180" height="100" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="2"/><rect x="220" y="20" width="60" height="100" fill="rgba(234,179,8,0.15)" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="15" fill="currentColor">x</text><text x="250" y="140" text-anchor="middle" font-size="15" fill="currentColor">3</text><text x="25" y="75" text-anchor="middle" font-size="15" fill="currentColor">5</text><text x="130" y="75" text-anchor="middle" font-size="16" font-weight="bold" fill="#2563eb">A</text><text x="250" y="75" text-anchor="middle" font-size="16" font-weight="bold" fill="#b45309">B</text></svg></div>

1. Exprimer l'aire du grand rectangle en fonction de $x$ (sous la forme d'un produit).
2. Exprimer l'aire du rectangle $A$ et celle du rectangle $B$. En déduire une autre expression de l'aire du grand rectangle.
3. Quelle égalité obtient-on ? La vérifier pour $x = 4$.
4. Sur le même modèle, développer : $4(x + 2)$ ; $\\;7(2x - 1)$ ; $\\;3(5 + 2x)$.`,
      solution: `**1.** Aire du grand rectangle : $5 \\times (x + 3) = 5(x + 3)$.

**2.** Aire de $A$ : $5 \\times x = 5x$. Aire de $B$ : $5 \\times 3 = 15$.
Aire du grand rectangle : $5x + 15$.

**3.** On obtient $5(x + 3) = 5x + 15$ (c'est la distributivité).
Vérification pour $x = 4$ : $5 \\times (4 + 3) = 5 \\times 7 = 35$ et $5 \\times 4 + 15 = 20 + 15 = 35$. Les deux résultats sont égaux.

**4.** $4(x + 2) = 4 \\times x + 4 \\times 2 = 4x + 8$.
$7(2x - 1) = 7 \\times 2x - 7 \\times 1 = 14x - 7$.
$3(5 + 2x) = 3 \\times 5 + 3 \\times 2x = 15 + 6x$.`
    },
    {
      id: "5N5-ds-15",
      title: "Trois nombres qui se suivent",
      difficulty: 3,
      points: 5,
      statement: `On cherche trois nombres entiers **consécutifs** (qui se suivent, comme $11$, $12$, $13$) dont la somme vaut $84$.

1. Calculer la somme de $11$, $12$ et $13$. Ces nombres conviennent-ils ?
2. On appelle $x$ le plus petit des trois nombres. Exprimer les deux autres en fonction de $x$.
3. Montrer que la somme des trois nombres est égale à $3x + 3$.
4. Écrire une équation traduisant le problème, la résoudre et donner les trois nombres.
5. Peut-on trouver trois nombres entiers consécutifs dont la somme vaut $100$ ? Justifier.`,
      solution: `**1.** $11 + 12 + 13 = 36$. Comme $36 \\neq 84$, ces nombres ne conviennent pas.

**2.** Les deux autres nombres sont $x + 1$ et $x + 2$.

**3.** $x + (x + 1) + (x + 2) = x + x + x + 1 + 2 = 3x + 3$.

**4.** On résout $3x + 3 = 84$.
$3x = 84 - 3 = 81$, donc $x = 81 \\div 3 = 27$.
Les trois nombres sont **$27$, $28$ et $29$** (vérification : $27 + 28 + 29 = 84$).

**5.** Il faudrait $3x + 3 = 100$, soit $3x = 97$. Or $97$ n'est pas un multiple de $3$ ($3 \\times 32 = 96$ et $3 \\times 33 = 99$) : $x$ ne serait pas un nombre entier.
**Ce n'est pas possible.**`
    },
    {
      id: "5N5-ds-16",
      title: "Un triangle isocèle à dimensions variables",
      difficulty: 4,
      points: 6,
      statement: `Un triangle $ABC$ est isocèle en $A$. On note $x$ un nombre (supérieur à $1$) et on sait que, en cm :
$$AB = AC = 2x - 1 \\qquad \\text{et} \\qquad BC = x + 2.$$

1. Calculer les longueurs des trois côtés lorsque $x = 4$, puis le périmètre du triangle.
2. Montrer que, pour tout nombre $x$, le périmètre du triangle est égal à $5x$.
3. Trouver la valeur de $x$ pour laquelle le périmètre vaut $40$ cm, et donner alors les longueurs des trois côtés.
4. Pour quelle valeur de $x$ le triangle est-il équilatéral ? Justifier en écrivant une équation, puis vérifier.`,
      solution: `**1.** Pour $x = 4$ : $AB = AC = 2 \\times 4 - 1 = 7$ cm et $BC = 4 + 2 = 6$ cm.
Périmètre : $7 + 7 + 6 = 20$ cm.

**2.** $P = (2x - 1) + (2x - 1) + (x + 2) = 2x + 2x + x - 1 - 1 + 2 = 5x$.
(Vérification avec la question 1 : $5 \\times 4 = 20$.)

**3.** On résout $5x = 40$, donc $x = 40 \\div 5 = 8$.
Alors $AB = AC = 2 \\times 8 - 1 = 15$ cm et $BC = 8 + 2 = 10$ cm. Vérification : $15 + 15 + 10 = 40$ cm.

**4.** Le triangle est équilatéral lorsque $AB = BC$, c'est-à-dire $2x - 1 = x + 2$.
On teste quelques valeurs : pour $x = 2$, $3 \\neq 4$ ; pour $x = 3$, $2 \\times 3 - 1 = 5$ et $3 + 2 = 5$.
On peut aussi raisonner : on retire $x$ des deux côtés, $x - 1 = 2$, donc $x = 3$.
Pour **$x = 3$**, les trois côtés mesurent $5$ cm (périmètre $15 = 5 \\times 3$).`
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
    },
    {
      id: "5G1-ds-09",
      title: "Distances sur une droite graduée",
      difficulty: 1,
      points: 4,
      statement: `Sur une droite graduée d'origine $O$, on a placé les points $A(-4)$, $B(2{,}5)$ et $C(-1{,}5)$.

1. Ranger les points $A$, $B$, $C$ et $O$ dans l'ordre où on les rencontre en parcourant la droite de gauche à droite.
2. Calculer les distances $AC$, $CB$ et $AB$ (en unités de graduation).
3. Quelle est l'abscisse du milieu $M$ du segment $[AB]$ ? Justifier.
4. Le point $D$ est le symétrique de $B$ par rapport à l'origine $O$. Quelle est son abscisse ? Le point $D$ est-il situé entre $A$ et $C$ ?`,
      solution: `**1.** On range les abscisses dans l'ordre croissant : $-4 < -1{,}5 < 0 < 2{,}5$. L'ordre est donc **$A$, $C$, $O$, $B$**.

**2.**
- $A$ et $C$ sont du même côté de $O$ : $AC = 4 - 1{,}5 = 2{,}5$ unités.
- $C$ et $B$ sont de part et d'autre de $O$ : $CB = 1{,}5 + 2{,}5 = 4$ unités.
- $A$ et $B$ sont de part et d'autre de $O$ : $AB = 4 + 2{,}5 = 6{,}5$ unités. (On vérifie : $AC + CB = 2{,}5 + 4 = 6{,}5$.)

**3.** $M$ est à mi-chemin entre $A$ et $B$ : $6{,}5 \\div 2 = 3{,}25$. En partant de $A$ et en avançant de $3{,}25$ vers la droite : $-4 + 3{,}25 = -0{,}75$. L'abscisse de $M$ est **$-0{,}75$**.

**4.** Le symétrique de $B$ par rapport à $O$ est à la même distance de $O$, de l'autre côté : $D$ a pour abscisse l'opposé de $2{,}5$, soit **$-2{,}5$**.
Comme $-4 < -2{,}5 < -1{,}5$, le point $D$ est bien situé **entre $A$ et $C$**.`
    },
    {
      id: "5G1-ds-10",
      title: "Le personnage du jeu vidéo",
      difficulty: 2,
      points: 5,
      statement: `Dans un jeu vidéo, la carte est munie d'un repère orthogonal. Un déplacement « vers la droite » augmente l'abscisse, un déplacement « vers le haut » augmente l'ordonnée (une case vaut une unité).

Le personnage part du point $P(-3 ; 2)$.

1. Il se déplace de $5$ cases vers la droite puis de $4$ cases vers le bas. Quelles sont les coordonnées du point $Q$ où il arrive ?
2. De $Q$, il se déplace de $6$ cases vers la gauche et de $1$ case vers le haut. Donner les coordonnées du point $R$ d'arrivée.
3. Pour chacun des points $P$, $Q$ et $R$, donner le signe de l'abscisse et celui de l'ordonnée.
4. Le trésor est en $T(3 ; -5)$. Décrire un déplacement qui mène directement de $R$ au trésor.`,
      solution: `**1.** Vers la droite, on ajoute à l'abscisse : $-3 + 5 = 2$. Vers le bas, on retire à l'ordonnée : $2 - 4 = -2$. Donc **$Q(2 ; -2)$**.

**2.** Abscisse : $2 - 6 = -4$. Ordonnée : $-2 + 1 = -1$. Donc **$R(-4 ; -1)$**.

**3.**
- $P(-3 ; 2)$ : abscisse négative, ordonnée positive.
- $Q(2 ; -2)$ : abscisse positive, ordonnée négative.
- $R(-4 ; -1)$ : abscisse et ordonnée négatives.

**4.** Pour l'abscisse, on passe de $-4$ à $3$ : $3 - (-4) = 7$, soit $7$ cases **vers la droite**.
Pour l'ordonnée, on passe de $-1$ à $-5$ : $-5 - (-1) = -4$, soit $4$ cases **vers le bas**.`
    },
    {
      id: "5G1-ds-11",
      title: "Des points sur une même ligne",
      difficulty: 3,
      points: 5,
      statement: `Dans un repère orthogonal d'unité $1$ cm, on considère le point $A(1 ; -2)$.

1. Placer $A$, puis placer trois autres points ayant la même ordonnée que $A$. Que remarque-t-on ?
2. Trouver les coordonnées des deux points $B$ et $C$ qui ont la même ordonnée que $A$ et qui sont à $3$ cm de $A$ ($B$ étant à gauche de $A$). Justifier.
3. Trouver de même les coordonnées des deux points $D$ et $E$ qui ont la même abscisse que $A$ et qui sont à $3$ cm de $A$ ($D$ étant au-dessus de $A$).
4. a) Calculer les longueurs $BC$ et $DE$.
   b) Quel est le milieu du segment $[BC]$ ? Celui du segment $[DE]$ ? Justifier.
   c) Le point $F(1 ; 2)$ est-il à $3$ cm de $A$ ? Justifier.`,
      solution: `**1.** Tous les points d'ordonnée $-2$ sont situés sur **une même droite parallèle à l'axe des abscisses** (horizontale), qui coupe l'axe des ordonnées au point $(0 ; -2)$.

**2.** $B$ et $C$ sont sur cette droite horizontale, à $3$ cm de $A$ : on retire ou on ajoute $3$ à l'abscisse de $A$.
$1 - 3 = -2$ et $1 + 3 = 4$. Donc **$B(-2 ; -2)$** et **$C(4 ; -2)$**.

**3.** Les points d'abscisse $1$ sont sur une droite parallèle à l'axe des ordonnées (verticale). On ajoute ou on retire $3$ à l'ordonnée de $A$ : $-2 + 3 = 1$ et $-2 - 3 = -5$. Donc **$D(1 ; 1)$** et **$E(1 ; -5)$**.

**4.** a) $B$ et $C$ ont la même ordonnée : $BC$ est l'écart entre leurs abscisses, de $-2$ à $4$, soit $BC = 6$ cm. De même, $DE$ est l'écart entre les ordonnées, de $-5$ à $1$ : $DE = 6$ cm.
b) $A$ est sur $[BC]$ avec $AB = AC = 3$ cm : **$A$ est le milieu de $[BC]$**. De même, $A$ est sur $[DE]$ avec $AD = AE = 3$ cm : **$A$ est aussi le milieu de $[DE]$**.
c) $F$ a la même abscisse que $A$ ; ses ordonnées vont de $-2$ à $2$, soit un écart de $4$ : $AF = 4$ cm. **Non**, $F$ n'est pas à $3$ cm de $A$ (le point d'abscisse $1$ situé à $3$ cm au-dessus de $A$ est $D(1 ; 1)$).`
    },
    {
      id: "5G1-ds-12",
      title: "Deux robots se croisent-ils ?",
      difficulty: 4,
      points: 6,
      statement: `Dans un repère orthogonal, deux robots se déplacent par sauts, en même temps.
- Le robot Alpha part de l'origine $(0 ; 0)$. À chaque saut, son abscisse augmente de $3$ et son ordonnée diminue de $2$.
- Le robot Bêta part du point $(-10 ; 5)$. À chaque saut, son abscisse augmente de $5$ et son ordonnée diminue de $3$.

1. Donner les coordonnées d'Alpha après $1$, $2$, $3$ et $4$ sauts.
2. Pour connaître la position d'Alpha, on utilise deux programmes de calcul :
   - abscisse : « prendre le nombre de sauts et le multiplier par $3$ » ;
   - ordonnée : « prendre le nombre de sauts et le multiplier par $-2$ ».
   a) Expliquer pourquoi ces programmes donnent bien la position d'Alpha.
   b) Où est Alpha après $10$ sauts ?
3. Alpha passera-t-il par le point $(45 ; -30)$ ? Par le point $(20 ; -14)$ ? Justifier.
4. Recopier et compléter le tableau des positions des deux robots, puis dire s'ils se retrouvent un jour au même point en même temps. Si oui, où et après combien de sauts ?

| Nombre de sauts | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Position d'Alpha | $(0 ; 0)$ | | | | | | |
| Position de Bêta | $(-10 ; 5)$ | | | | | | |`,
      solution: `**1.** On ajoute $3$ à l'abscisse et on retire $2$ à l'ordonnée à chaque saut : $(3 ; -2)$, $(6 ; -4)$, $(9 ; -6)$, $(12 ; -8)$.

**2.** a) Alpha part de $(0 ; 0)$. Après un certain nombre de sauts, son abscisse a augmenté autant de fois de $3$ : elle vaut (nombre de sauts) $\\times 3$. Son ordonnée a diminué autant de fois de $2$ : elle vaut (nombre de sauts) $\\times (-2)$.
b) Après $10$ sauts : abscisse $10 \\times 3 = 30$, ordonnée $10 \\times (-2) = -20$. Alpha est en **$(30 ; -20)$**.

**3.** Pour $(45 ; -30)$ : l'abscisse $45 = 15 \\times 3$ correspond à $15$ sauts, et après $15$ sauts l'ordonnée vaut $15 \\times (-2) = -30$. Les deux coordonnées correspondent : **oui**, Alpha y passe après $15$ sauts.
Pour $(20 ; -14)$ : l'abscisse d'Alpha est toujours un multiple de $3$, et $20$ n'est pas un multiple de $3$. **Non**, Alpha n'y passe pas (après $7$ sauts, son ordonnée vaut bien $-14$, mais il est en $(21 ; -14)$).

**4.** Pour Bêta, on ajoute $5$ à l'abscisse et on retire $3$ à l'ordonnée à chaque saut.

| Nombre de sauts | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Position d'Alpha | $(0 ; 0)$ | $(3 ; -2)$ | $(6 ; -4)$ | $(9 ; -6)$ | $(12 ; -8)$ | $(15 ; -10)$ | $(18 ; -12)$ |
| Position de Bêta | $(-10 ; 5)$ | $(-5 ; 2)$ | $(0 ; -1)$ | $(5 ; -4)$ | $(10 ; -7)$ | $(15 ; -10)$ | $(20 ; -13)$ |

Après **$5$ sauts**, les deux robots sont au même point **$(15 ; -10)$**.
L'abscisse de Bêta augmente plus vite que celle d'Alpha ($5$ contre $3$ par saut) : avant le $5^\\text{e}$ saut, Bêta est toujours à gauche d'Alpha, et après, toujours à droite. Ils ne se retrouvent donc qu'une seule fois.`
    },
    {
      id: "5G1-ds-13",
      title: "Une graduation en demi-unités",
      difficulty: 1,
      points: 4,
      statement: `On a représenté une droite graduée sur laquelle sont placés quatre points.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 360 90" width="360" height="90" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="15.0" y1="50.0" x2="345.0" y2="50.0" stroke="currentColor" stroke-width="2"/><line x1="30.0" y1="41.0" x2="30.0" y2="59.0" stroke="currentColor" stroke-width="2"/><line x1="55.0" y1="45.0" x2="55.0" y2="55.0" stroke="currentColor" stroke-width="1.2"/><line x1="80.0" y1="41.0" x2="80.0" y2="59.0" stroke="currentColor" stroke-width="2"/><line x1="105.0" y1="45.0" x2="105.0" y2="55.0" stroke="currentColor" stroke-width="1.2"/><line x1="130.0" y1="41.0" x2="130.0" y2="59.0" stroke="currentColor" stroke-width="2"/><line x1="155.0" y1="45.0" x2="155.0" y2="55.0" stroke="currentColor" stroke-width="1.2"/><line x1="180.0" y1="41.0" x2="180.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="180.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">0</text><line x1="205.0" y1="45.0" x2="205.0" y2="55.0" stroke="currentColor" stroke-width="1.2"/><line x1="230.0" y1="41.0" x2="230.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="230.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">1</text><line x1="255.0" y1="45.0" x2="255.0" y2="55.0" stroke="currentColor" stroke-width="1.2"/><line x1="280.0" y1="41.0" x2="280.0" y2="59.0" stroke="currentColor" stroke-width="2"/><line x1="305.0" y1="45.0" x2="305.0" y2="55.0" stroke="currentColor" stroke-width="1.2"/><line x1="330.0" y1="41.0" x2="330.0" y2="59.0" stroke="currentColor" stroke-width="2"/><circle cx="55.0" cy="50" r="4" fill="#2563eb"/><text x="55.0" y="32.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">A</text><circle cx="130.0" cy="50" r="4" fill="#2563eb"/><text x="130.0" y="32.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">B</text><circle cx="255.0" cy="50" r="4" fill="#2563eb"/><text x="255.0" y="32.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">C</text><circle cx="305.0" cy="50" r="4" fill="#2563eb"/><text x="305.0" y="32.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">D</text></svg></div>

1. Quelle longueur, en unités, représente l'écart entre deux graduations consécutives ? Justifier.
2. Lire les abscisses des points $A$, $B$, $C$ et $D$.
3. Deux de ces points ont des abscisses opposées. Lesquels ?
4. a) Recopier la droite graduée et placer les points $E(-0{,}5)$ et $F(2)$.
   b) Calculer la distance $BC$.
   c) Donner les abscisses des deux points de la droite situés à $2$ unités du point $B$.`,
      solution: `**1.** Entre $0$ et $1$, il y a $2$ intervalles égaux : un écart entre deux graduations représente $1 \\div 2 = 0{,}5$ unité.

**2.** On compte les graduations à partir de $0$ (vers la droite pour les positifs, vers la gauche pour les négatifs) :
$A(-2{,}5)$, $\\;B(-1)$, $\\;C(1{,}5)$, $\\;D(2{,}5)$.

**3.** $-2{,}5$ et $2{,}5$ sont opposés (même distance à l'origine, de part et d'autre de $0$) : ce sont les points **$A$ et $D$**.

**4.** a) $E$ est placé une graduation à gauche de $0$ ; $F$ est placé quatre graduations à droite de $0$.
b) $B$ est à $1$ unité à gauche de $0$ et $C$ à $1{,}5$ unité à droite : $BC = 1 + 1{,}5 = 2{,}5$ unités.
c) À partir de $B(-1)$, on avance de $2$ unités vers la droite : $-1 + 2 = 1$ ; ou on recule de $2$ unités vers la gauche : $-1 - 2 = -3$. Les deux points ont pour abscisses **$1$ et $-3$**.`
    },
    {
      id: "5G1-ds-14",
      title: "Une partie de bataille navale",
      difficulty: 2,
      points: 5,
      statement: `Léa et Tom jouent à la bataille navale dans un repère orthogonal : les bateaux occupent des points à coordonnées entières. Léa a placé :
- son croiseur sur les points $(-3 ; 2)$, $(-3 ; 1)$, $(-3 ; 0)$ et $(-3 ; -1)$ ;
- son sous-marin sur les points $(1 ; -2)$, $(2 ; -2)$ et $(3 ; -2)$.

1. Tracer un repère (une unité par carreau) et y placer les points des deux bateaux.
2. a) Que remarque-t-on sur les coordonnées des points du croiseur ? Le croiseur est-il horizontal ou vertical ?
   b) Même question pour le sous-marin.
3. Tom annonce les tirs suivants : $(-3 ; 1)$, $(2 ; 3)$, $(2 ; -2)$, $(-1 ; -3)$ et $(-2 ; 1)$. Pour chaque tir, dire s'il est « touché » ou « manqué », en précisant le bateau touché.
4. Léa veut placer un troisième bateau de $3$ points alignés horizontalement, dont tous les points ont une abscisse négative et une ordonnée négative, sans utiliser un point déjà occupé. Dans quelle partie du repère doit-elle le placer ? Proposer des coordonnées qui conviennent.`,
      solution: `**1.** Pour placer un point, on lit d'abord l'abscisse sur l'axe horizontal, puis l'ordonnée sur l'axe vertical.

**2.** a) Les quatre points du croiseur ont la **même abscisse** $-3$ : ils sont sur une même ligne verticale. Le croiseur est **vertical**.
b) Les trois points du sous-marin ont la **même ordonnée** $-2$ : ils sont sur une même ligne horizontale. Le sous-marin est **horizontal**.

**3.**
- $(-3 ; 1)$ : c'est un point du croiseur, **touché**.
- $(2 ; 3)$ : aucun bateau n'a ce point, **manqué** (attention, le sous-marin contient $(2 ; -2)$, pas $(2 ; 3)$).
- $(2 ; -2)$ : c'est un point du sous-marin, **touché**.
- $(-1 ; -3)$ : **manqué**.
- $(-2 ; 1)$ : **manqué**. L'abscisse $-2$ n'est pas celle du croiseur ; il ne faut pas confondre avec $(1 ; -2)$, où l'abscisse et l'ordonnée sont échangées.

**4.** Abscisse négative : le point est à gauche de l'axe des ordonnées ; ordonnée négative : il est en dessous de l'axe des abscisses. Le bateau doit donc être placé **en bas à gauche** du repère.
Ses trois points ont la même ordonnée (bateau horizontal). Par exemple : $(-3 ; -3)$, $(-2 ; -3)$ et $(-1 ; -3)$. Aucun de ces points n'est occupé (le point $(-3 ; -1)$ du croiseur a une ordonnée différente). D'autres réponses sont possibles, par exemple $(-5 ; -1)$, $(-6 ; -1)$, $(-7 ; -1)$.`
    },
    {
      id: "5G1-ds-15",
      title: "Déplacer un triangle dans un repère",
      difficulty: 3,
      points: 5,
      statement: `Dans un repère orthogonal, on considère les points $A(-4 ; 1)$, $B(-2 ; 4)$ et $C(-1 ; 0)$.

1. Placer ces points et tracer le triangle $ABC$.
2. On fait glisser le triangle de $5$ unités vers la droite, puis de $3$ unités vers le bas. Les points $A$, $B$, $C$ arrivent en $A'$, $B'$, $C'$.
   a) Donner les coordonnées de $A'$, $B'$ et $C'$, puis tracer le triangle $A'B'C'$.
   b) Expliquer comment on obtient les coordonnées de $A'$ à partir de celles de $A$, sans faire de figure.
3. Un autre déplacement amène le point $B$ au point $(0 ; -1)$.
   a) Décrire ce déplacement (combien d'unités vers la droite ou la gauche, vers le haut ou le bas).
   b) Ce même déplacement amène-t-il le point $A$ au point $(2 ; -4)$ ? Justifier.
4. On reprend le déplacement de la question 2. Quel point $N$ arrive à l'origine $O$ du repère ?`,
      solution: `**1.** On place chaque point en lisant d'abord l'abscisse, puis l'ordonnée.

**2.** a) Aller de $5$ unités vers la droite ajoute $5$ à l'abscisse ; aller de $3$ unités vers le bas retranche $3$ à l'ordonnée :
- $A'(-4 + 5 ; 1 - 3)$, soit $A'(1 ; -2)$ ;
- $B'(-2 + 5 ; 4 - 3)$, soit $B'(3 ; 1)$ ;
- $C'(-1 + 5 ; 0 - 3)$, soit $C'(4 ; -3)$.

b) On **ajoute $5$ à l'abscisse** et on **retranche $3$ à l'ordonnée**.

**3.** a) De $B(-2 ; 4)$ à $(0 ; -1)$ : l'abscisse passe de $-2$ à $0$, soit $2$ unités vers la droite ; l'ordonnée passe de $4$ à $-1$, soit $5$ unités vers le bas.
b) Avec ce déplacement, $A(-4 ; 1)$ arrive en $(-4 + 2 ; 1 - 5)$, soit $(-2 ; -4)$. Ce n'est pas le point $(2 ; -4)$ : **non**.

**4.** On fait le chemin inverse à partir de $O(0 ; 0)$ : $5$ unités vers la gauche et $3$ unités vers le haut. Donc $N(-5 ; 3)$.
Vérification : $-5 + 5 = 0$ et $3 - 3 = 0$.`
    },
    {
      id: "5G1-ds-16",
      title: "La maison dans le repère",
      difficulty: 4,
      points: 6,
      statement: `Dans un repère orthogonal d'unité $1$ cm, on considère les points :
$$A(-3 ; -2) \\qquad B(3 ; -2) \\qquad C(3 ; 2) \\qquad D(0 ; 4) \\qquad E(-3 ; 2)$$

1. Placer ces points et tracer le pentagone $ABCDE$ (il a la forme d'une maison).
2. a) Calculer les longueurs $AB$ et $BC$.
   b) En utilisant les coordonnées, justifier que le quadrilatère $ABCE$ est un rectangle.
3. a) Quelle est la longueur de la hauteur du triangle $ECD$ issue de $D$ ?
   b) Calculer l'aire de la maison $ABCDE$.
4. Un point $P$ est situé sur l'axe des ordonnées, et le triangle $ABP$ a une aire de $18\\text{ cm}^2$.
   a) Quelle doit être la longueur de la hauteur du triangle $ABP$ issue de $P$ ?
   b) Trouver les deux positions possibles du point $P$ et donner leurs coordonnées.`,
      solution: `**1.** On place les cinq points puis on les relie dans l'ordre $A$, $B$, $C$, $D$, $E$, $A$.

**2.** a) $A$ et $B$ ont la même ordonnée : $AB = 3 - (-3) = 6$ cm. $B$ et $C$ ont la même abscisse : $BC = 2 - (-2) = 4$ cm.
b) $A$ et $B$ ont la même ordonnée $-2$, $E$ et $C$ la même ordonnée $2$ : les côtés $[AB]$ et $[EC]$ sont horizontaux. $B$ et $C$ ont la même abscisse $3$, $A$ et $E$ la même abscisse $-3$ : les côtés $[BC]$ et $[AE]$ sont verticaux. Un côté horizontal et un côté vertical sont perpendiculaires : $ABCE$ a quatre angles droits, c'est un **rectangle**.

**3.** a) Le côté $[EC]$ est sur la ligne horizontale d'ordonnée $2$. La hauteur issue de $D(0 ; 4)$ est verticale, de pied $(0 ; 2)$ : elle mesure $4 - 2 = 2$ cm.
b) Aire du rectangle $ABCE$ : $6 \\times 4 = 24\\text{ cm}^2$. Le triangle $ECD$ a pour base $EC = 6$ cm et pour hauteur $2$ cm : $\\dfrac{6 \\times 2}{2} = 6\\text{ cm}^2$.
Aire de la maison : $24 + 6 = 30\\text{ cm}^2$.

**4.** a) Aire $= \\dfrac{\\text{base} \\times \\text{hauteur}}{2}$, donc base $\\times$ hauteur $= 2 \\times 18 = 36$. Avec la base $AB = 6$ cm, la hauteur mesure $36 \\div 6 = 6$ cm.
b) $[AB]$ est horizontal (ordonnée $-2$) et $P$ est sur l'axe des ordonnées : la hauteur issue de $P$ est verticale et son pied est le point $(0 ; -2)$. Le point $P$ doit donc être à $6$ unités au-dessus ou au-dessous de ce pied :
- $6$ au-dessus : ordonnée $-2 + 6 = 4$, donc $P(0 ; 4)$, c'est le point $D$ ;
- $6$ au-dessous : ordonnée $-2 - 6 = -8$, donc $P(0 ; -8)$.
Les deux positions possibles sont **$(0 ; 4)$ et $(0 ; -8)$**.`
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
    },
    {
      id: "5G2-ds-09",
      title: "Symétrie par rapport à l'origine d'un repère",
      difficulty: 1,
      points: 4,
      statement: `Dans un repère orthogonal d'origine $O$, on place les points $A(3 ; -2)$, $B(-4 ; -1)$ et $C(0 ; 5)$.

1. Placer les points $A$, $B$ et $C$, puis construire leurs symétriques $A'$, $B'$ et $C'$ par rapport au point $O$.
2. Lire les coordonnées de $A'$, $B'$ et $C'$.
3. Quelle règle permet d'obtenir les coordonnées du symétrique d'un point par rapport à l'origine ?
4. Les points $E(2 ; 2)$ et $F(-2 ; -2)$ sont-ils symétriques par rapport à $O$ ? Et les points $G(1 ; 3)$ et $H(-3 ; -1)$ ? Justifier.`,
      solution: `**1.** Pour construire $A'$, on trace la demi-droite $[AO)$ et on reporte la longueur $OA$ de l'autre côté de $O$ : $O$ est le milieu de $[AA']$. On fait de même pour $B$ et $C$.

**2.** $A'(-3 ; 2)$, $\\;B'(4 ; 1)$, $\\;C'(0 ; -5)$.

**3.** $O$ est le milieu du segment joignant un point à son symétrique : on passe d'un point à son symétrique en **remplaçant l'abscisse et l'ordonnée par leurs opposés**.

**4.** Les coordonnées de $F$ sont les opposées de celles de $E$ ($2 \\to -2$ et $2 \\to -2$) : **$E$ et $F$ sont symétriques** par rapport à $O$.
Le symétrique de $G(1 ; 3)$ est $(-1 ; -3)$, qui n'est pas $H(-3 ; -1)$ : **$G$ et $H$ ne sont pas symétriques** par rapport à $O$ (on a échangé l'abscisse et l'ordonnée).`
    },
    {
      id: "5G2-ds-10",
      title: "Images d'un cercle et de droites",
      difficulty: 2,
      points: 5,
      statement: `On considère un point $O$, un cercle $\\mathcal{C}$ de centre $I$ et de rayon $3$ cm, avec $OI = 5$ cm.

1. On construit le symétrique $\\mathcal{C}'$ du cercle $\\mathcal{C}$ par rapport à $O$.
   a) Quelle est la nature de $\\mathcal{C}'$ ? Préciser son centre $I'$ et son rayon.
   b) Calculer la distance $II'$.
2. Une droite $(d)$ passe par le point $O$. Quelle est sa symétrique par rapport à $O$ ? Justifier.
3. Une droite $(\\Delta)$ ne passe pas par $O$. Sur $(\\Delta)$, on place deux points $A$ et $B$ tels que $AB = 4{,}2$ cm.
   a) Quelle est la longueur $A'B'$ de l'image du segment $[AB]$ ?
   b) Que peut-on dire des droites $(\\Delta)$ et $(A'B')$ ?
4. Un angle $\\widehat{xAy}$ mesure $37^\\circ$. Combien mesure son symétrique par rapport à $O$ ?`,
      solution: `**1.** a) La symétrie centrale conserve les longueurs : tous les points de $\\mathcal{C}'$ sont à $3$ cm du symétrique $I'$ de $I$. $\\mathcal{C}'$ est donc **le cercle de centre $I'$ et de rayon $3$ cm**.
b) $O$ est le milieu de $[II']$, donc $II' = 2 \\times OI = 2 \\times 5 = 10$ cm.

**2.** Le symétrique d'un point de $(d)$ est sur la droite qui joint ce point à $O$, c'est-à-dire sur $(d)$ elle-même. La droite $(d)$ est **sa propre symétrique**.

**3.** a) La symétrie centrale conserve les longueurs : $A'B' = AB = 4{,}2$ cm.
b) Le symétrique d'une droite par rapport à un point est une **droite parallèle** : $(A'B') \\parallel (\\Delta)$. Les deux droites sont distinctes car $(\\Delta)$ ne passe pas par $O$.

**4.** La symétrie centrale conserve les mesures d'angles : le symétrique mesure aussi **$37^\\circ$**.`
    },
    {
      id: "5G2-ds-11",
      title: "Symétrique d'un triangle sur quadrillage",
      difficulty: 3,
      points: 5,
      statement: `Sur le quadrillage ci-dessous, chaque carreau a pour côté $1$ cm. Le triangle $ABC$ est rectangle en $B$, avec $AB = BC = 3$ cm. On a aussi placé deux points $O$ et $E$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 330 210" width="330" height="210" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="15" y1="195" x2="15" y2="15" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="45" y1="195" x2="45" y2="15" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="75" y1="195" x2="75" y2="15" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="105" y1="195" x2="105" y2="15" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="135" y1="195" x2="135" y2="15" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="165" y1="195" x2="165" y2="15" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="195" y1="195" x2="195" y2="15" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="225" y1="195" x2="225" y2="15" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="255" y1="195" x2="255" y2="15" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="285" y1="195" x2="285" y2="15" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="315" y1="195" x2="315" y2="15" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="15" y1="195" x2="315" y2="195" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="15" y1="165" x2="315" y2="165" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="15" y1="135" x2="315" y2="135" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="15" y1="105" x2="315" y2="105" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="15" y1="75" x2="315" y2="75" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="15" y1="45" x2="315" y2="45" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><line x1="15" y1="15" x2="315" y2="15" stroke="currentColor" stroke-width="0.5" opacity="0.35"/><polygon points="45,165 135,165 135,75" fill="rgba(59,130,246,0.12)" stroke="currentColor" stroke-width="2"/><circle cx="45" cy="165" r="3.5" fill="currentColor"/><text x="35" y="183" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">A</text><circle cx="135" cy="165" r="3.5" fill="currentColor"/><text x="145" y="183" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">B</text><circle cx="135" cy="75" r="3.5" fill="currentColor"/><text x="145" y="67" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">C</text><circle cx="165" cy="105" r="3.5" fill="#2563eb"/><text x="177" y="97" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">O</text><circle cx="195" cy="165" r="3.5" fill="#dc2626"/><text x="207" y="183" text-anchor="middle" font-size="15" font-weight="bold" fill="#dc2626">E</text></svg></div>

1. On veut placer le point $A'$, symétrique de $A$ par rapport à $O$. Expliquer comment le placer en comptant les carreaux, puis reproduire la figure et placer $A'$, $B'$ et $C'$, symétriques de $A$, $B$ et $C$ par rapport à $O$.
2. Sans mesurer, donner les longueurs $A'B'$ et $B'C'$ et la mesure de l'angle $\\widehat{A'B'C'}$. Justifier.
3. Les droites $(AB)$ et $(A'B')$ sont-elles parallèles ? Justifier.
4. Lucas affirme : « Le point $E$ est le symétrique de $C$ par rapport à $O$. » A-t-il raison ? Justifier.`,
      solution: `**1.** $A'$ est le point tel que $O$ soit le milieu de $[AA']$. Pour aller de $A$ à $O$, on se déplace de $4$ carreaux vers la droite et de $2$ carreaux vers le haut ; on recommence le même déplacement à partir de $O$ : $4$ carreaux vers la droite et $2$ vers le haut. On obtient $A'$.
De même : de $B$ à $O$, $1$ carreau vers la droite et $2$ vers le haut, donc $B'$ est $1$ carreau à droite et $2$ carreaux au-dessus de $O$ ; de $C$ à $O$, $1$ carreau vers la droite et $1$ vers le bas, donc $C'$ est $1$ carreau à droite et $1$ carreau en dessous de $O$.

**2.** Le triangle $A'B'C'$ est le symétrique du triangle $ABC$ par rapport à $O$. La symétrie centrale conserve les longueurs et les angles :
$A'B' = AB = 3$ cm, $B'C' = BC = 3$ cm et $\\widehat{A'B'C'} = \\widehat{ABC} = 90^\\circ$.

**3.** Par une symétrie centrale, une droite a pour image une droite qui lui est parallèle. La droite $(A'B')$ est l'image de la droite $(AB)$, donc **$(AB) \\parallel (A'B')$**. (On le voit aussi sur le quadrillage : les deux droites suivent des lignes horizontales du quadrillage.)

**4.** D'après la question 1, $C'$ est $1$ carreau à droite et $1$ carreau en dessous de $O$. Le point $E$ est $1$ carreau à droite et $2$ carreaux en dessous de $O$ : $E$ n'est pas le point $C'$. Autre justification : $O$ n'est pas le milieu de $[CE]$ (de $C$ à $O$ on descend de $1$ carreau, de $O$ à $E$ on descend de $2$ carreaux). **Lucas a tort.**`
    },
    {
      id: "5G2-ds-12",
      title: "Deux symétries axiales valent un demi-tour",
      difficulty: 4,
      points: 6,
      statement: `On travaille dans un repère orthogonal d'origine $O$. On note $s_1$ la symétrie axiale d'axe l'axe des abscisses et $s_2$ la symétrie axiale d'axe l'axe des ordonnées.

1. On considère le point $M(3 ; 2)$.
   a) Construire son symétrique $M_1$ par la symétrie $s_1$ et donner ses coordonnées.
   b) Construire le symétrique $M_2$ de $M_1$ par la symétrie $s_2$ et donner ses coordonnées.
2. Comparer les coordonnées de $M_2$ et celles de $M$. Que peut-on en déduire pour les points $M$ et $M_2$ ?
3. Recommencer avec le point $N(-1 ; 4)$ : donner les coordonnées de $N_1$ puis de $N_2$. La conclusion est-elle la même ?
4. Expliquer pourquoi, pour n'importe quel point $P(a ; b)$, appliquer $s_1$ puis $s_2$ revient à appliquer la symétrie de centre $O$.
5. Obtient-on le même point si l'on applique d'abord $s_2$, puis $s_1$ ? Justifier.`,
      solution: `**1.** a) Le symétrique par rapport à l'axe des abscisses garde l'abscisse et change l'ordonnée en son opposée : $M_1(3 ; -2)$.
b) Le symétrique par rapport à l'axe des ordonnées garde l'ordonnée et change l'abscisse en son opposée : $M_2(-3 ; -2)$.

**2.** Les coordonnées de $M_2$ sont les opposées de celles de $M$. Donc $O$ est le milieu de $[MM_2]$ : **$M_2$ est le symétrique de $M$ par rapport à $O$**.

**3.** $N(-1 ; 4) \\to N_1(-1 ; -4) \\to N_2(1 ; -4)$. Les coordonnées de $N_2$ sont encore les opposées de celles de $N$ : $N_2$ est le symétrique de $N$ par rapport à $O$. La conclusion est la même.

**4.** $s_1$ transforme $P(a ; b)$ en $P_1(a ; -b)$ : l'ordonnée devient son opposée. Puis $s_2$ transforme $P_1$ en $P_2(-a ; -b)$ : l'abscisse devient son opposée.
Les deux coordonnées de $P_2$ sont les opposées de celles de $P$ : $P_2$ est le symétrique de $P$ par rapport à $O$, pour tout point $P$. Enchaîner les deux symétries axiales d'axes perpendiculaires revient donc à faire **un demi-tour autour de $O$**.

**5.** Avec $s_2$ d'abord : $P(a ; b) \\to (-a ; b)$, puis avec $s_1$ : $(-a ; b) \\to (-a ; -b)$. On obtient **le même point** $P_2(-a ; -b)$ : l'ordre n'a pas d'importance ici.`
    },
    {
      id: "5G2-ds-13",
      title: "Symétrie centrale sur une droite graduée",
      difficulty: 1,
      points: 4,
      statement: `Sur la droite graduée ci-dessous, le point $K$ a pour abscisse $2$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 340 90" width="340" height="90" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="5.0" y1="50.0" x2="335.0" y2="50.0" stroke="currentColor" stroke-width="2"/><line x1="20.0" y1="41.0" x2="20.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="20.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">−3</text><line x1="50.0" y1="41.0" x2="50.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="50.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">−2</text><line x1="80.0" y1="41.0" x2="80.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="80.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">−1</text><line x1="110.0" y1="41.0" x2="110.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="110.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">0</text><line x1="140.0" y1="41.0" x2="140.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="140.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">1</text><line x1="170.0" y1="41.0" x2="170.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="170.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">2</text><line x1="200.0" y1="41.0" x2="200.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="200.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">3</text><line x1="230.0" y1="41.0" x2="230.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="230.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">4</text><line x1="260.0" y1="41.0" x2="260.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="260.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">5</text><line x1="290.0" y1="41.0" x2="290.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="290.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">6</text><line x1="320.0" y1="41.0" x2="320.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="320.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">7</text><circle cx="50.0" cy="50" r="4" fill="#2563eb"/><text x="50.0" y="32.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">C</text><circle cx="170.0" cy="50" r="4" fill="#2563eb"/><text x="170.0" y="32.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">K</text><circle cx="215.0" cy="50" r="4" fill="#2563eb"/><text x="215.0" y="32.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">B</text><circle cx="260.0" cy="50" r="4" fill="#2563eb"/><text x="260.0" y="32.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">A</text></svg></div>

1. Lire les abscisses des points $A$, $B$ et $C$.
2. Calculer la distance $KA$, puis donner l'abscisse du point $A'$, symétrique de $A$ par rapport à $K$.
3. Donner de même les abscisses des symétriques $B'$ et $C'$ des points $B$ et $C$ par rapport à $K$.
4. Quel point de la droite est son propre symétrique par rapport à $K$ ?
5. Le symétrique d'un point $M$ par rapport à $K$ a pour abscisse $7$. Quelle est l'abscisse de $M$ ?`,
      solution: `On rappelle que $A'$ est le symétrique de $A$ par rapport à $K$ lorsque $K$ est le milieu du segment $[AA']$ : $A'$ est de l'autre côté de $K$, à la même distance.

**1.** $A(5)$, $\\;B(3{,}5)$, $\\;C(-2)$.

**2.** $KA = 5 - 2 = 3$ unités. $A'$ est à $3$ unités de $K$, de l'autre côté (à gauche) : son abscisse est $2 - 3 = -1$.

**3.** $KB = 3{,}5 - 2 = 1{,}5$ : $B'$ a pour abscisse $2 - 1{,}5 = 0{,}5$.
$KC = 2 - (-2) = 4$ et $C$ est à gauche de $K$ : $C'$ est à $4$ unités à droite de $K$, son abscisse est $2 + 4 = 6$.

**4.** Seul le centre de symétrie est son propre symétrique : c'est le point **$K$** (abscisse $2$).

**5.** Le point d'abscisse $7$ est à $7 - 2 = 5$ unités à droite de $K$. Le point $M$ est donc à $5$ unités à gauche de $K$ : son abscisse est $2 - 5 = -3$.`
    },
    {
      id: "5G2-ds-14",
      title: "L'hélice à deux pales",
      difficulty: 2,
      points: 5,
      statement: `L'hélice d'un modèle réduit d'avion est formée de deux pales triangulaires. La pale $OA'B'$ est la symétrique de la pale $OAB$ par rapport au point $O$. On sait que $OA = 4$ cm, $OB = 3$ cm et $\\widehat{AOB} = 30^\\circ$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 340 230" width="340" height="230" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="170.0,115.0 266.6,89.1 223.0,62.0" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="1.8"/><polygon points="170.0,115.0 73.4,140.9 117.0,168.0" fill="rgba(234,88,12,0.12)" stroke="currentColor" stroke-width="1.8"/><circle cx="170.0" cy="115.0" r="3.5" fill="currentColor"/><text x="170.0" y="137.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">O</text><text x="280.6" y="94.1" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="227.0" y="54.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="59.4" y="145.9" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A'</text><text x="113.0" y="188.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B'</text></svg></div>

1. Donner, sans mesurer, les longueurs $OA'$ et $OB'$. Justifier.
2. a) Les points $A$, $O$ et $A'$ sont-ils alignés ? Justifier.
   b) Calculer la distance $AA'$ entre les extrémités des deux pales, puis la distance $BB'$.
3. Donner la mesure de l'angle $\\widehat{A'OB'}$. Justifier.
4. Calculer la mesure de l'angle $\\widehat{AOB'}$.`,
      solution: `**1.** $A'$ est le symétrique de $A$ par rapport à $O$ : $O$ est le milieu de $[AA']$, donc $OA' = OA = 4$ cm. De même, $O$ est le milieu de $[BB']$, donc $OB' = OB = 3$ cm.

**2.** a) $O$ est le milieu du segment $[AA']$ : les points $A$, $O$ et $A'$ sont **alignés**.
b) $AA' = OA + OA' = 4 + 4 = 8$ cm et $BB' = 3 + 3 = 6$ cm.

**3.** La symétrie centrale conserve les mesures d'angles. L'angle $\\widehat{A'OB'}$ est le symétrique de l'angle $\\widehat{AOB}$, donc $\\widehat{A'OB'} = 30^\\circ$.

**4.** Les points $B$, $O$ et $B'$ sont alignés ($O$ est le milieu de $[BB']$) : l'angle $\\widehat{BOB'}$ est plat. Les angles $\\widehat{AOB}$ et $\\widehat{AOB'}$ sont adjacents et forment cet angle plat, ils sont supplémentaires :
$\\widehat{AOB'} = 180^\\circ - 30^\\circ = 150^\\circ$.`
    },
    {
      id: "5G2-ds-15",
      title: "Deux cercles symétriques",
      difficulty: 3,
      points: 5,
      statement: `On considère un cercle $\\mathcal{C}$ de centre $I$ et de rayon $2$ cm, et un point $O$ tel que $OI = 3$ cm. On construit le cercle $\\mathcal{C}'$, symétrique du cercle $\\mathcal{C}$ par rapport au point $O$.

1. Faire la figure. Préciser la nature de $\\mathcal{C}'$, son centre $I'$ et son rayon. Justifier.
2. Calculer la distance $II'$.
3. On veut savoir si les cercles $\\mathcal{C}$ et $\\mathcal{C}'$ ont un point commun. On suppose qu'un point $M$ est sur les deux cercles.
   a) Que valent alors $IM$ et $MI'$ ?
   b) À l'aide de l'inégalité triangulaire dans le triangle $IMI'$ (ou dans le cas où $M$ est sur le segment $[II']$), montrer que c'est impossible.
4. On recommence avec un point $O$ tel que $OI = 2$ cm (le rayon de $\\mathcal{C}$ ne change pas).
   a) Justifier que le point $O$ est sur le cercle $\\mathcal{C}$.
   b) En déduire que $O$ est aussi sur le cercle $\\mathcal{C}'$. Que peut-on dire des deux cercles ?`,
      solution: `**1.** La symétrie centrale conserve les longueurs : tous les points de $\\mathcal{C}$ sont à $2$ cm de $I$, donc leurs symétriques sont à $2$ cm du symétrique $I'$ de $I$. $\\mathcal{C}'$ est le **cercle de centre $I'$** (symétrique de $I$ par rapport à $O$) **et de rayon $2$ cm**.

**2.** $O$ est le milieu de $[II']$ : $II' = 2 \\times OI = 2 \\times 3 = 6$ cm.

**3.** a) $M$ est sur $\\mathcal{C}$, donc $IM = 2$ cm ; $M$ est sur $\\mathcal{C}'$, donc $MI' = 2$ cm.
b) D'après l'inégalité triangulaire, $II' \\leqslant IM + MI'$ (avec égalité si $M$ est sur le segment $[II']$). On aurait donc $II' \\leqslant 2 + 2 = 4$ cm. Or $II' = 6$ cm et $6 > 4$ : c'est impossible.
Les deux cercles n'ont **aucun point commun**.

**4.** a) $OI = 2$ cm et le rayon de $\\mathcal{C}$ est $2$ cm : $O$ est sur $\\mathcal{C}$.
b) Le symétrique de $O$ par rapport à $O$ est $O$ lui-même. Comme $O$ est sur $\\mathcal{C}$, son symétrique, c'est-à-dire $O$, est sur le cercle symétrique $\\mathcal{C}'$.
Les deux cercles ont donc **un point commun, $O$**. (Ici $II' = 4$ cm $= 2 + 2$ : les cercles se touchent en $O$, qui est le milieu de $[II']$.)`
    },
    {
      id: "5G2-ds-16",
      title: "Deux symétries centrales à la suite",
      difficulty: 4,
      points: 6,
      statement: `Sur la droite graduée ci-dessous, $A$ a pour abscisse $1$ et $B$ a pour abscisse $4$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 330 90" width="330" height="90" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="10.0" y1="50.0" x2="320.0" y2="50.0" stroke="currentColor" stroke-width="2"/><line x1="25.0" y1="41.0" x2="25.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="25.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">−2</text><line x1="60.0" y1="41.0" x2="60.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="60.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">−1</text><line x1="95.0" y1="41.0" x2="95.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="95.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">0</text><line x1="130.0" y1="41.0" x2="130.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="130.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">1</text><line x1="165.0" y1="41.0" x2="165.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="165.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">2</text><line x1="200.0" y1="41.0" x2="200.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="200.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">3</text><line x1="235.0" y1="41.0" x2="235.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="235.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">4</text><line x1="270.0" y1="41.0" x2="270.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="270.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">5</text><line x1="305.0" y1="41.0" x2="305.0" y2="59.0" stroke="currentColor" stroke-width="2"/><text x="305.0" y="77.0" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="currentColor" text-anchor="middle">6</text><circle cx="130.0" cy="50" r="4" fill="#2563eb"/><text x="130.0" y="32.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">A</text><circle cx="235.0" cy="50" r="4" fill="#2563eb"/><text x="235.0" y="32.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">B</text></svg></div>

À partir d'un point $M$ de la droite, on construit :
- le point $M_1$, symétrique de $M$ par rapport à $A$ ;
- puis le point $M_2$, symétrique de $M_1$ par rapport à $B$.

1. On choisit pour $M$ le point d'abscisse $0$. Donner les abscisses de $M_1$ et de $M_2$ en expliquant.
2. Recopier et compléter le tableau suivant.

| Abscisse de $M$ | $0$ | $3$ | $-2{,}5$ |
|:---:|:---:|:---:|:---:|
| Abscisse de $M_1$ | | | |
| Abscisse de $M_2$ | | | |
| Distance $MM_2$ | | | |

3. Quelle conjecture peut-on faire sur la position de $M_2$ par rapport à $M$ ? Comparer la distance $MM_2$ à la distance $AB$.
4. Quel point $M$ faut-il choisir au départ pour que $M_2$ ait pour abscisse $20$ ? Vérifier en calculant $M_1$ et $M_2$.
5. On fait maintenant les symétries dans l'autre ordre (d'abord par rapport à $B$, puis par rapport à $A$), en partant du point d'abscisse $0$. Où arrive-t-on ?`,
      solution: `Le symétrique d'un point par rapport à un centre est de l'autre côté du centre, à la même distance.

**1.** $M(0)$ est à $1$ unité à gauche de $A(1)$, donc $M_1$ est à $1$ unité à droite de $A$ : $M_1(2)$.
$M_1(2)$ est à $2$ unités à gauche de $B(4)$, donc $M_2$ est à $2$ unités à droite de $B$ : $M_2(6)$.

**2.**
| Abscisse de $M$ | $0$ | $3$ | $-2{,}5$ |
|:---:|:---:|:---:|:---:|
| Abscisse de $M_1$ | $2$ | $-1$ | $4{,}5$ |
| Abscisse de $M_2$ | $6$ | $9$ | $3{,}5$ |
| Distance $MM_2$ | $6$ | $6$ | $6$ |

Détail pour $M(3)$ : $M$ est à $2$ à droite de $A$, donc $M_1 = 1 - 2 = -1$ ; $M_1$ est à $5$ à gauche de $B$, donc $M_2 = 4 + 5 = 9$.
Pour $M(-2{,}5)$ : $M$ est à $3{,}5$ à gauche de $A$, donc $M_1 = 1 + 3{,}5 = 4{,}5$ ; $M_1$ est à $0{,}5$ à droite de $B$, donc $M_2 = 4 - 0{,}5 = 3{,}5$.

**3.** Conjecture : $M_2$ est toujours **$6$ unités à droite de $M$**. Or $AB = 4 - 1 = 3$ : la distance $MM_2$ est le **double** de la distance $AB$.

**4.** D'après la conjecture, il faut partir de $20 - 6 = 14$.
Vérification : $M(14)$ est à $13$ à droite de $A$, donc $M_1 = 1 - 13 = -12$ ; $M_1(-12)$ est à $16$ à gauche de $B$, donc $M_2 = 4 + 16 = 20$ : la conjecture est vérifiée.

**5.** $M(0)$ est à $4$ à gauche de $B$ : son symétrique par rapport à $B$ a pour abscisse $8$. Le point d'abscisse $8$ est à $7$ à droite de $A$ : son symétrique par rapport à $A$ a pour abscisse $1 - 7 = -6$.
On arrive au point d'abscisse $-6$ : cette fois, on s'est déplacé de $6$ unités **vers la gauche**. L'ordre des deux symétries compte.`
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
    },
    {
      id: "5G3-ds-09",
      title: "La route qui traverse la voie ferrée",
      difficulty: 1,
      points: 4,
      statement: `Les deux rails d'une voie ferrée sont représentés par deux droites parallèles $(AB)$ et $(CD)$, avec $(AB)$ au-dessus de $(CD)$, $A$ et $C$ à gauche, $B$ et $D$ à droite. Une route rectiligne coupe $(AB)$ en $E$ et $(CD)$ en $F$. Le point $G$ est sur la route, au-dessus de $E$.

On sait que $\\widehat{BEF} = 72^\\circ$. La figure ci-dessous n'est pas en vraie grandeur.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 340 200" width="340" height="200" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="15" y1="60" x2="325" y2="60" stroke="currentColor" stroke-width="2"/><line x1="15" y1="150" x2="325" y2="150" stroke="currentColor" stroke-width="2"/><line x1="134.5" y1="12.4" x2="187.0" y2="173.8" stroke="#2563eb" stroke-width="2"/><circle cx="25.0" cy="60.0" r="3" fill="currentColor"/><text x="25.0" y="52.0" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">A</text><circle cx="315.0" cy="60.0" r="3" fill="currentColor"/><text x="315.0" y="52.0" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">B</text><circle cx="25.0" cy="150.0" r="3" fill="currentColor"/><text x="25.0" y="170.0" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">C</text><circle cx="315.0" cy="150.0" r="3" fill="currentColor"/><text x="315.0" y="170.0" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">D</text><circle cx="150.0" cy="60.0" r="3" fill="currentColor"/><text x="136.0" y="54.0" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">E</text><circle cx="179.2" cy="150.0" r="3" fill="currentColor"/><text x="165.2" y="168.0" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">F</text><circle cx="134.5" cy="12.4" r="3" fill="currentColor"/><text x="122.5" y="16.4" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">G</text><path d="M172,60 A22,22 0 0 1 156.8,80.9" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="186" y="84" font-size="13" fill="#dc2626">72°</text></svg></div>

1. Reproduire la figure à main levée et y coder les données (droites parallèles, angle de $72^\\circ$).
2. a) Nommer l'angle alterne-interne à $\\widehat{BEF}$.
   b) Calculer sa mesure en justifiant.
3. Calculer $\\widehat{GEB}$.
4. Nommer l'angle correspondant à $\\widehat{GEB}$ et donner sa mesure. Retrouver cette mesure d'une autre façon.`,
      solution: `**1.** On reproduit les deux droites parallèles et la sécante qui les coupe en $E$ (en haut) et $F$ (en bas) ; on code le parallélisme et l'angle $\\widehat{BEF} = 72^\\circ$.

**2.** a) Les angles alternes-internes sont situés entre les deux droites, de part et d'autre de la sécante : l'angle alterne-interne à $\\widehat{BEF}$ est **$\\widehat{EFC}$**.
b) Propriété : si deux droites parallèles sont coupées par une sécante, alors les angles alternes-internes ont la même mesure. Comme $(AB) \\parallel (CD)$, $\\widehat{EFC} = \\widehat{BEF} = 72^\\circ$.

**3.** $\\widehat{GEB}$ et $\\widehat{BEF}$ sont adjacents et forment un angle plat ($G$, $E$, $F$ sont alignés) :
$\\widehat{GEB} = 180^\\circ - 72^\\circ = 108^\\circ$.

**4.** L'angle correspondant à $\\widehat{GEB}$ est **$\\widehat{EFD}$** (même position : au-dessus de la droite, à droite de la sécante). Les droites étant parallèles, les angles correspondants ont la même mesure : $\\widehat{EFD} = 108^\\circ$.
Autre façon : $\\widehat{EFD}$ et $\\widehat{EFC}$ forment un angle plat, donc $\\widehat{EFD} = 180^\\circ - 72^\\circ = 108^\\circ$.`
    },
    {
      id: "5G3-ds-10",
      title: "Angles de triangles particuliers",
      difficulty: 2,
      points: 5,
      statement: `1. Le pignon d'une maison a la forme d'un triangle $ABC$ isocèle en $A$ (le sommet du toit), avec $\\widehat{BAC} = 110^\\circ$. Calculer $\\widehat{ABC}$ et $\\widehat{ACB}$.
2. Un triangle $DEF$ est isocèle en $D$ et $\\widehat{DEF} = 50^\\circ$. Calculer les deux autres angles.
3. Un triangle $GHI$ est rectangle en $G$ et $\\widehat{GHI} = 27^\\circ$. Calculer $\\widehat{GIH}$.
4. Mila affirme : « J'ai construit un triangle qui a un angle de $95^\\circ$ et un angle droit. » Est-ce possible ? Justifier.
5. Combien mesure chacun des angles d'un triangle équilatéral ? Justifier.`,
      solution: `On utilise dans chaque cas la propriété : **la somme des mesures des angles d'un triangle est égale à $180^\\circ$**.

**1.** Dans un triangle isocèle en $A$, les angles à la base sont égaux : $\\widehat{ABC} = \\widehat{ACB}$.
Leur somme vaut $180^\\circ - 110^\\circ = 70^\\circ$, donc $\\widehat{ABC} = \\widehat{ACB} = 70^\\circ \\div 2 = 35^\\circ$.

**2.** Le triangle est isocèle en $D$, donc $\\widehat{DFE} = \\widehat{DEF} = 50^\\circ$.
Puis $\\widehat{EDF} = 180^\\circ - 50^\\circ - 50^\\circ = 80^\\circ$.

**3.** $\\widehat{GIH} = 180^\\circ - 90^\\circ - 27^\\circ = 63^\\circ$.

**4.** Ces deux angles auraient déjà une somme de $95^\\circ + 90^\\circ = 185^\\circ$, ce qui dépasse $180^\\circ$. **C'est impossible.**

**5.** Un triangle équilatéral a ses trois angles égaux et leur somme vaut $180^\\circ$ : chacun mesure $180^\\circ \\div 3 = 60^\\circ$.`
    },
    {
      id: "5G3-ds-11",
      title: "Une droite parallèle à un côté ?",
      difficulty: 3,
      points: 5,
      statement: `$ABC$ est un triangle tel que $\\widehat{BAC} = 40^\\circ$ et $\\widehat{ABC} = 75^\\circ$. Le point $E$ est sur le segment $[AC]$ et le point $F$ sur le segment $[BC]$, de sorte que $\\widehat{CEF} = 40^\\circ$.

1. Calculer $\\widehat{ACB}$.
2. a) Pour les droites $(EF)$ et $(AB)$ coupées par la sécante $(AC)$, quelle est la position des angles $\\widehat{CEF}$ et $\\widehat{CAB}$ ?
   b) Démontrer que les droites $(EF)$ et $(AB)$ sont parallèles.
3. Calculer $\\widehat{CFE}$ de deux façons différentes.
4. Si l'on avait placé $E$ de sorte que $\\widehat{CEF} = 45^\\circ$, les droites $(EF)$ et $(AB)$ seraient-elles parallèles ? Justifier.`,
      solution: `**1.** Dans le triangle $ABC$ : $\\widehat{ACB} = 180^\\circ - 40^\\circ - 75^\\circ = 65^\\circ$.

**2.** a) Les angles $\\widehat{CEF}$ (en $E$) et $\\widehat{CAB}$ (en $A$) sont du même côté de la sécante $(AC)$ et occupent la même position par rapport aux droites $(EF)$ et $(AB)$ : ce sont des **angles correspondants**.
b) Propriété : si deux droites coupées par une sécante forment deux angles correspondants de même mesure, alors ces droites sont parallèles. Ici $\\widehat{CEF} = \\widehat{CAB} = 40^\\circ$, donc **$(EF) \\parallel (AB)$**.

**3.** Première façon, dans le triangle $CEF$ : $\\widehat{CFE} = 180^\\circ - \\widehat{CEF} - \\widehat{ECF} = 180^\\circ - 40^\\circ - 65^\\circ = 75^\\circ$.
Deuxième façon : $(EF) \\parallel (AB)$ et la sécante $(BC)$ forme les angles correspondants $\\widehat{CFE}$ et $\\widehat{CBA}$, qui ont donc la même mesure : $\\widehat{CFE} = 75^\\circ$.

**4.** Si $(EF)$ était parallèle à $(AB)$, les angles correspondants $\\widehat{CEF}$ et $\\widehat{CAB}$ auraient la même mesure. Or $45^\\circ \\neq 40^\\circ$ : les droites **ne seraient pas parallèles**.`
    },
    {
      id: "5G3-ds-12",
      title: "La trajectoire d'une boule de billard",
      difficulty: 4,
      points: 6,
      statement: `Deux bandes d'un billard sont représentées par deux droites parallèles : $(d_1)$ en haut et $(d_2)$ en bas. Sur $(d_1)$, le point $P$ est à gauche et le point $Q$ à droite ; sur $(d_2)$, le point $R$ est à gauche et le point $S$ à droite.

Une boule part d'un point $M$ situé entre les bandes et touche $(d_1)$ en $A$, avec $\\widehat{MAP} = 35^\\circ$. Elle rebondit en repartant vers la droite selon la règle : **l'angle de départ est égal à l'angle d'arrivée**, c'est-à-dire $\\widehat{QAB} = 35^\\circ$, où $B$ est le point où elle touche $(d_2)$. En $B$, elle rebondit de la même façon vers un point $C$, avec $\\widehat{SBC} = \\widehat{ABR}$. La figure ci-dessous n'est pas en vraie grandeur.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 340 190" width="340" height="190" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="5" y1="40" x2="335" y2="40" stroke="currentColor" stroke-width="2"/><line x1="5" y1="150" x2="335" y2="150" stroke="currentColor" stroke-width="2"/><polyline points="20.9,74.4 70.0,40.0 227.1,150.0 304.9,95.5" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="6 3"/><circle cx="20.9" cy="74.4" r="3" fill="currentColor"/><text x="18.9" y="92.4" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">M</text><circle cx="70.0" cy="40.0" r="3" fill="currentColor"/><text x="70.0" y="32.0" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">A</text><circle cx="227.1" cy="150.0" r="3" fill="currentColor"/><text x="227.1" y="170.0" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">B</text><circle cx="304.9" cy="95.5" r="3" fill="currentColor"/><text x="314.9" y="89.5" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">C</text><circle cx="12.0" cy="40.0" r="3" fill="currentColor"/><text x="12.0" y="32.0" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">P</text><circle cx="328.0" cy="40.0" r="3" fill="currentColor"/><text x="328.0" y="32.0" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">Q</text><circle cx="12.0" cy="150.0" r="3" fill="currentColor"/><text x="12.0" y="170.0" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">R</text><circle cx="328.0" cy="150.0" r="3" fill="currentColor"/><text x="328.0" y="170.0" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">S</text><text x="330" y="58" text-anchor="end" font-size="13" fill="currentColor">(d₁)</text><text x="330" y="142" text-anchor="end" font-size="13" fill="currentColor">(d₂)</text><path d="M44,40 A26,26 0 0 0 48.7,54.9" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="26" y="54" font-size="12" fill="#dc2626">35°</text></svg></div>

1. Reproduire la figure à main levée et la coder (droites parallèles, angles connus).
2. Calculer $\\widehat{MAB}$.
3. Calculer $\\widehat{ABR}$ en justifiant, puis $\\widehat{ABC}$.
4. Démontrer que la trajectoire $(BC)$ après le deuxième rebond est parallèle à la trajectoire de départ $(MA)$.
5. Reprendre les calculs des questions 2 et 3 avec un angle de départ de $50^\\circ$ au lieu de $35^\\circ$. La conclusion de la question 4 change-t-elle ?`,
      solution: `**1.** On reproduit les deux droites parallèles et la ligne brisée $M \\to A \\to B \\to C$ ; on code le parallélisme de $(d_1)$ et $(d_2)$ et les angles de $35^\\circ$.

**2.** Les angles $\\widehat{PAM}$, $\\widehat{MAB}$ et $\\widehat{BAQ}$ sont adjacents et forment l'angle plat $\\widehat{PAQ}$ :
$\\widehat{MAB} = 180^\\circ - 35^\\circ - 35^\\circ = 110^\\circ$.

**3.** Les droites $(d_1)$ et $(d_2)$ sont parallèles et coupées par la sécante $(AB)$. Les angles $\\widehat{QAB}$ et $\\widehat{ABR}$ sont **alternes-internes** (entre les deux droites, de part et d'autre de la sécante), donc ils ont la même mesure : $\\widehat{ABR} = 35^\\circ$.
Par la règle du rebond, $\\widehat{SBC} = \\widehat{ABR} = 35^\\circ$. Les angles $\\widehat{RBA}$, $\\widehat{ABC}$ et $\\widehat{CBS}$ forment l'angle plat $\\widehat{RBS}$ :
$\\widehat{ABC} = 180^\\circ - 35^\\circ - 35^\\circ = 110^\\circ$.

**4.** Les droites $(MA)$ et $(BC)$ sont coupées par la sécante $(AB)$. Les angles $\\widehat{MAB}$ et $\\widehat{ABC}$ sont alternes-internes ($M$ et $C$ sont de part et d'autre de $(AB)$) et mesurent tous les deux $110^\\circ$.
Propriété : si deux droites coupées par une sécante forment des angles alternes-internes de même mesure, alors elles sont parallèles. Donc **$(BC) \\parallel (MA)$**.

**5.** Avec $50^\\circ$ : $\\widehat{MAB} = 180^\\circ - 50^\\circ - 50^\\circ = 80^\\circ$ ; $\\widehat{ABR} = \\widehat{QAB} = 50^\\circ$ (alternes-internes), donc $\\widehat{SBC} = 50^\\circ$ et $\\widehat{ABC} = 180^\\circ - 50^\\circ - 50^\\circ = 80^\\circ$.
Les angles alternes-internes $\\widehat{MAB}$ et $\\widehat{ABC}$ sont encore égaux : **la conclusion ne change pas**, $(BC) \\parallel (MA)$. Le raisonnement fonctionne de la même façon quel que soit l'angle de départ : après deux rebonds sur des bandes parallèles, la boule repart toujours parallèlement à sa trajectoire de départ.`
    },
    {
      id: "5G3-ds-13",
      title: "Angles autour d'un point",
      difficulty: 1,
      points: 4,
      statement: `Sur la figure ci-dessous (qui n'est pas en vraie grandeur), les droites $(AB)$ et $(CD)$ se coupent en $O$, la demi-droite $[OE)$ est perpendiculaire à la droite $(AB)$ et $\\widehat{AOC} = 35^\\circ$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 360 250" width="360" height="250" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="40.0" y1="140.0" x2="320.0" y2="140.0" stroke="currentColor" stroke-width="1.8"/><line x1="73.5" y1="65.4" x2="286.5" y2="214.6" stroke="currentColor" stroke-width="1.8"/><line x1="180.0" y1="140.0" x2="180.0" y2="20.0" stroke="currentColor" stroke-width="1.8"/><polyline points="180.0,129.0 191.0,129.0 191.0,140.0" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="180.0" cy="140.0" r="3" fill="currentColor"/><text x="38.0" y="132.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="322.0" y="132.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="63.5" y="65.4" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="296.5" y="222.6" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">D</text><text x="192.0" y="26.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">E</text><text x="184.0" y="160.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">O</text><path d="M 142 140 A 38 38 0 0 1 148.9 118.2" fill="none" stroke="#2563eb" stroke-width="1.6"/><text x="122.0" y="132.0" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#2563eb" text-anchor="middle">35°</text></svg></div>

1. Comment appelle-t-on les angles $\\widehat{AOC}$ et $\\widehat{BOD}$ ? En déduire la mesure de $\\widehat{BOD}$.
2. Les angles $\\widehat{AOC}$ et $\\widehat{AOD}$ sont adjacents. Justifier qu'ils sont supplémentaires, puis calculer $\\widehat{AOD}$.
3. Calculer $\\widehat{COE}$. Que peut-on dire des angles $\\widehat{AOC}$ et $\\widehat{COE}$ ?
4. Calculer $\\widehat{EOD}$.`,
      solution: `**1.** Les droites $(AB)$ et $(CD)$ se coupent en $O$ : $\\widehat{AOC}$ et $\\widehat{BOD}$ sont **opposés par le sommet**. Deux angles opposés par le sommet ont la même mesure : $\\widehat{BOD} = 35^\\circ$.

**2.** Les points $C$, $O$ et $D$ sont alignés : l'angle $\\widehat{COD}$ est plat ($180^\\circ$). Les angles adjacents $\\widehat{AOC}$ et $\\widehat{AOD}$ le composent, donc leur somme vaut $180^\\circ$ : ils sont supplémentaires.
$\\widehat{AOD} = 180^\\circ - 35^\\circ = 145^\\circ$.

**3.** $[OE)$ est perpendiculaire à $(AB)$, donc $\\widehat{AOE} = 90^\\circ$. La demi-droite $[OC)$ est entre $[OA)$ et $[OE)$ : $\\widehat{COE} = 90^\\circ - 35^\\circ = 55^\\circ$.
Les angles $\\widehat{AOC}$ et $\\widehat{COE}$ sont adjacents et leur somme vaut $90^\\circ$ : ils sont **complémentaires**.

**4.** $C$, $O$ et $D$ sont alignés : $\\widehat{COE} + \\widehat{EOD} = 180^\\circ$, donc $\\widehat{EOD} = 180^\\circ - 55^\\circ = 125^\\circ$.
(Autre méthode : $\\widehat{EOD} = \\widehat{EOB} + \\widehat{BOD} = 90^\\circ + 35^\\circ = 125^\\circ$.)`
    },
    {
      id: "5G3-ds-14",
      title: "La somme des angles d'un quadrilatère",
      difficulty: 2,
      points: 5,
      statement: `$ABCD$ est un quadrilatère. La diagonale $[AC]$ le partage en deux triangles $ABC$ et $ACD$ (la figure n'est pas en vraie grandeur).

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 350 240" width="350" height="240" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="40.0,190.0 310.0,210.0 270.0,50.0 90.0,40.0" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="1.8"/><line x1="40.0" y1="190.0" x2="270.0" y2="50.0" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4"/><text x="28.0" y="198.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="322.0" y="218.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="282.0" y="46.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="78.0" y="36.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">D</text></svg></div>

1. a) Quelle est la somme des angles du triangle $ABC$ ? Celle des angles du triangle $ACD$ ?
   b) En remarquant que $\\widehat{DAB} = \\widehat{DAC} + \\widehat{CAB}$ et que $\\widehat{BCD} = \\widehat{BCA} + \\widehat{ACD}$, démontrer que la somme des quatre angles du quadrilatère $ABCD$ est égale à $360^\\circ$.
2. On sait que $\\widehat{DAB} = 85^\\circ$, $\\widehat{ABC} = 70^\\circ$ et $\\widehat{BCD} = 110^\\circ$. Calculer $\\widehat{CDA}$.
3. a) Un quadrilatère peut-il avoir quatre angles obtus ? Justifier.
   b) Un quadrilatère peut-il avoir trois angles obtus ? Si oui, donner un exemple de mesures possibles pour ses quatre angles.
4. Un quadrilatère a ses quatre angles de même mesure. Calculer cette mesure. Quelle est la nature de ce quadrilatère ?`,
      solution: `**1.** a) La somme des angles d'un triangle vaut $180^\\circ$ : c'est vrai pour $ABC$ et pour $ACD$.
b) On additionne les angles des deux triangles : $\\widehat{CAB} + \\widehat{ABC} + \\widehat{BCA} + \\widehat{DAC} + \\widehat{ACD} + \\widehat{CDA} = 180^\\circ + 180^\\circ = 360^\\circ$.
En regroupant : $(\\widehat{DAC} + \\widehat{CAB}) + \\widehat{ABC} + (\\widehat{BCA} + \\widehat{ACD}) + \\widehat{CDA} = 360^\\circ$, c'est-à-dire $\\widehat{DAB} + \\widehat{ABC} + \\widehat{BCD} + \\widehat{CDA} = 360^\\circ$.

**2.** $\\widehat{CDA} = 360^\\circ - (85^\\circ + 70^\\circ + 110^\\circ) = 360^\\circ - 265^\\circ = 95^\\circ$.

**3.** a) Un angle obtus mesure plus de $90^\\circ$. Quatre angles obtus auraient une somme supérieure à $4 \\times 90^\\circ = 360^\\circ$ : c'est **impossible**.
b) **Oui**. Par exemple $100^\\circ$, $100^\\circ$, $100^\\circ$ et $360^\\circ - 300^\\circ = 60^\\circ$.

**4.** Chaque angle mesure $360^\\circ \\div 4 = 90^\\circ$. Un quadrilatère qui a quatre angles droits est un **rectangle**.`
    },
    {
      id: "5G3-ds-15",
      title: "Le périscope",
      difficulty: 3,
      points: 5,
      statement: `Un périscope permet de voir par-dessus un obstacle. Il contient deux miroirs **parallèles** : $(MN) \\parallel (PQ)$. Un rayon lumineux arrive horizontalement selon $[EA]$, se réfléchit en $A$ sur le miroir 1, va jusqu'en $B$ sur le miroir 2, s'y réfléchit et repart selon $[BF]$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:330px;"><svg class="geo-svg-figure" viewBox="0 0 330 260" width="330" height="260" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="105.0" y1="15.0" x2="195.0" y2="105.0" stroke="#64748b" stroke-width="4"/><line x1="105.0" y1="155.0" x2="195.0" y2="245.0" stroke="#64748b" stroke-width="4"/><line x1="20.0" y1="60.0" x2="150.0" y2="60.0" stroke="#dc2626" stroke-width="2"/><line x1="150.0" y1="60.0" x2="150.0" y2="200.0" stroke="#dc2626" stroke-width="2"/><line x1="150.0" y1="200.0" x2="310.0" y2="200.0" stroke="#dc2626" stroke-width="2"/><polygon points="75,55 85,60 75,65" fill="#dc2626"/><polygon points="145,125 150,135 155,125" fill="#dc2626"/><polygon points="245,195 255,200 245,205" fill="#dc2626"/><circle cx="150.0" cy="60.0" r="3" fill="currentColor"/><circle cx="150.0" cy="200.0" r="3" fill="currentColor"/><text x="20.0" y="50.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">E</text><text x="164.0" y="54.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="136.0" y="218.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="310.0" y="190.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">F</text><text x="93.0" y="19.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">M</text><text x="207.0" y="115.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">N</text><text x="93.0" y="159.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">P</text><text x="207.0" y="251.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">Q</text><text x="225.0" y="92.0" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="start">miroir 1</text><text x="60.0" y="190.0" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="start">miroir 2</text></svg></div>

On admet la loi de la réflexion : **le rayon qui arrive sur un miroir et le rayon réfléchi font le même angle avec le miroir**.
On sait que $\\widehat{EAM} = 45^\\circ$.

1. a) D'après la loi de la réflexion en $A$, quelle est la mesure de l'angle $\\widehat{NAB}$ ?
   b) Les points $M$, $A$, $N$ sont alignés. Calculer $\\widehat{EAB}$.
2. Les droites $(MN)$ et $(PQ)$ sont coupées par la sécante $(AB)$. Nommer l'angle alterne-interne à l'angle $\\widehat{NAB}$, puis donner sa mesure en justifiant.
3. D'après la loi de la réflexion en $B$, l'angle $\\widehat{FBQ}$ est égal à l'angle $\\widehat{ABP}$. Calculer $\\widehat{ABF}$.
4. En déduire que le rayon qui sort, $(BF)$, est parallèle au rayon qui entre, $(EA)$. Justifier.`,
      solution: `**1.** a) En $A$, le rayon qui arrive fait avec le miroir l'angle $\\widehat{EAM} = 45^\\circ$ ; le rayon réfléchi fait le même angle : $\\widehat{NAB} = 45^\\circ$.
b) $M$, $A$, $N$ sont alignés, donc $\\widehat{MAE} + \\widehat{EAB} + \\widehat{BAN} = 180^\\circ$, d'où $\\widehat{EAB} = 180^\\circ - 45^\\circ - 45^\\circ = 90^\\circ$.

**2.** L'angle alterne-interne à $\\widehat{NAB}$ est $\\widehat{ABP}$ (entre les deux miroirs, de l'autre côté de la sécante $(AB)$). Les droites $(MN)$ et $(PQ)$ sont parallèles : deux angles alternes-internes formés avec une sécante ont alors la même mesure. Donc $\\widehat{ABP} = \\widehat{NAB} = 45^\\circ$.

**3.** $\\widehat{FBQ} = \\widehat{ABP} = 45^\\circ$. Les points $P$, $B$, $Q$ sont alignés : $\\widehat{PBA} + \\widehat{ABF} + \\widehat{FBQ} = 180^\\circ$, donc $\\widehat{ABF} = 180^\\circ - 45^\\circ - 45^\\circ = 90^\\circ$.

**4.** D'après les questions 1 et 3, $(EA) \\perp (AB)$ et $(BF) \\perp (AB)$. Si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles : **$(EA) \\parallel (BF)$**. Le rayon ressort dans la même direction que celle dans laquelle il est entré, mais plus bas.`
    },
    {
      id: "5G3-ds-16",
      title: "Bissectrice et parallèle : un triangle isocèle caché",
      difficulty: 4,
      points: 6,
      statement: `$ABC$ est un triangle tel que $\\widehat{ABC} = 70^\\circ$ et $\\widehat{ACB} = 50^\\circ$. La bissectrice de l'angle $\\widehat{ABC}$ coupe le segment $[AC]$ en $D$. La droite parallèle à $(BC)$ passant par $D$ coupe le segment $[AB]$ en $E$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 320 250" width="320" height="250" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="112.6,30.5 40.0,230.0 280.0,230.0" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="1.8"/><line x1="40.0" y1="230.0" x2="191.2" y2="124.1" stroke="#2563eb" stroke-width="1.8"/><line x1="78.5" y1="124.1" x2="191.2" y2="124.1" stroke="#ea580c" stroke-width="1.8"/><text x="112.6" y="20.5" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="28.0" y="240.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="292.0" y="240.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="203.2" y="122.1" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">D</text><text x="66.5" y="122.1" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">E</text></svg></div>

1. Calculer la mesure de l'angle $\\widehat{BAC}$.
2. Calculer les mesures des angles $\\widehat{ABD}$ et $\\widehat{DBC}$.
3. Les droites $(ED)$ et $(BC)$ sont coupées par la sécante $(BD)$. Démontrer que $\\widehat{EDB} = 35^\\circ$.
4. Démontrer que le triangle $EBD$ est isocèle. Préciser son sommet principal.
5. a) Démontrer que $\\widehat{AED} = 70^\\circ$ et que $\\widehat{ADE} = 50^\\circ$.
   b) Vérifier le résultat en calculant la somme des angles du triangle $AED$.`,
      solution: `**1.** La somme des angles d'un triangle vaut $180^\\circ$ : $\\widehat{BAC} = 180^\\circ - (70^\\circ + 50^\\circ) = 60^\\circ$.

**2.** La bissectrice partage l'angle $\\widehat{ABC}$ en deux angles de même mesure : $\\widehat{ABD} = \\widehat{DBC} = 70^\\circ \\div 2 = 35^\\circ$.

**3.** Les angles $\\widehat{EDB}$ et $\\widehat{DBC}$ sont alternes-internes, formés par les droites $(ED)$ et $(BC)$ et la sécante $(BD)$. Comme $(ED) \\parallel (BC)$, ils ont la même mesure : $\\widehat{EDB} = \\widehat{DBC} = 35^\\circ$.

**4.** Dans le triangle $EBD$ : $\\widehat{EBD} = \\widehat{ABD} = 35^\\circ$ et $\\widehat{EDB} = 35^\\circ$. Un triangle qui a deux angles de même mesure est isocèle : $EBD$ est **isocèle en $E$** (le sommet opposé à $[BD]$), et $EB = ED$.

**5.** a) Les angles $\\widehat{AED}$ et $\\widehat{ABC}$ sont correspondants, formés par les parallèles $(ED)$ et $(BC)$ et la sécante $(AB)$ : $\\widehat{AED} = \\widehat{ABC} = 70^\\circ$.
De même, avec la sécante $(AC)$ : $\\widehat{ADE} = \\widehat{ACB} = 50^\\circ$.
b) $\\widehat{EAD} + \\widehat{AED} + \\widehat{ADE} = 60^\\circ + 70^\\circ + 50^\\circ = 180^\\circ$ : c'est cohérent.
(On peut aussi vérifier en $E$ : $\\widehat{BED} = 180^\\circ - 35^\\circ - 35^\\circ = 110^\\circ$ et $\\widehat{AED} = 180^\\circ - 110^\\circ = 70^\\circ$.)`
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
    },
    {
      id: "5G4-ds-09",
      title: "Les voiles du dériveur",
      difficulty: 1,
      points: 4,
      statement: `Un petit voilier porte deux voiles triangulaires.
- La grand-voile est un triangle rectangle dont les deux côtés de l'angle droit mesurent $2{,}4$ m (le long du mât) et $4{,}5$ m (le long de la bôme).
- Le foc est un triangle dont un côté mesure $1{,}8$ m ; la hauteur relative à ce côté mesure $3{,}5$ m.

1. Rappeler la formule de l'aire d'un triangle.
2. Calculer l'aire de la grand-voile.
3. Calculer l'aire du foc.
4. Calculer la surface totale de toile, puis l'exprimer en $\\text{dm}^2$.`,
      solution: `**1.** $\\text{Aire d'un triangle} = \\dfrac{\\text{base} \\times \\text{hauteur}}{2}$, où la hauteur est relative à la base choisie.

**2.** Dans un triangle rectangle, chacun des deux côtés de l'angle droit est une hauteur relative à l'autre. Donc
$\\mathcal{A}_{\\text{grand-voile}} = \\dfrac{2{,}4 \\times 4{,}5}{2} = \\dfrac{10{,}8}{2} = 5{,}4$. La grand-voile a une aire de $5{,}4\\text{ m}^2$.

**3.** $\\mathcal{A}_{\\text{foc}} = \\dfrac{1{,}8 \\times 3{,}5}{2} = \\dfrac{6{,}3}{2} = 3{,}15$. Le foc a une aire de $3{,}15\\text{ m}^2$.

**4.** Surface totale : $5{,}4 + 3{,}15 = 8{,}55$, soit $8{,}55\\text{ m}^2$.
Comme $1\\text{ m}^2 = 100\\text{ dm}^2$, on obtient $8{,}55 \\times 100 = 855\\text{ dm}^2$.`
    },
    {
      id: "5G4-ds-10",
      title: "Partager un champ avec une médiane",
      difficulty: 2,
      points: 5,
      statement: `Un champ a la forme d'un triangle $ABC$ avec $BC = 12$ m. La hauteur issue de $A$ mesure $9$ m ; on note $H$ son pied sur la droite $(BC)$. On note $I$ le milieu du segment $[BC]$.

1. Comment s'appelle la droite $(AI)$ pour le triangle $ABC$ ?
2. Calculer l'aire du champ $ABC$.
3. a) Calculer l'aire du triangle $ABI$, puis celle du triangle $AIC$.
   b) Expliquer pourquoi la droite $(AI)$ partage toujours un triangle en deux triangles de même aire.
4. Deux frères et leur sœur veulent se partager le champ en trois parcelles triangulaires de même aire, en traçant deux clôtures droites partant de $A$ jusqu'au côté $[BC]$. Où faut-il placer les extrémités $M$ et $N$ des clôtures sur $[BC]$ ? Justifier en calculant l'aire de chaque parcelle.`,
      solution: `**1.** $(AI)$ passe par le sommet $A$ et par le milieu du côté opposé $[BC]$ : c'est la **médiane** issue de $A$.

**2.** $\\mathcal{A}_{ABC} = \\dfrac{BC \\times AH}{2} = \\dfrac{12 \\times 9}{2} = 54$. Le champ a une aire de $54\\text{ m}^2$.

**3.** a) $I$ est le milieu de $[BC]$, donc $BI = IC = 6$ m. Les triangles $ABI$ et $AIC$ ont la même hauteur $[AH]$ (relative aux bases $[BI]$ et $[IC]$, situées sur la même droite $(BC)$) :
$\\mathcal{A}_{ABI} = \\dfrac{6 \\times 9}{2} = 27\\text{ m}^2$ et $\\mathcal{A}_{AIC} = \\dfrac{6 \\times 9}{2} = 27\\text{ m}^2$.
b) Les deux triangles ont des bases de même longueur ($BI = IC$) et la même hauteur (la distance de $A$ à la droite $(BC)$) : ils ont donc toujours la même aire, égale à la moitié de l'aire de $ABC$.

**4.** On partage $[BC]$ en trois segments de même longueur : $12 \\div 3 = 4$ m. On place $M$ sur $[BC]$ tel que $BM = 4$ m et $N$ tel que $BN = 8$ m (donc $MN = NC = 4$ m).
Les trois parcelles $ABM$, $AMN$ et $ANC$ ont toutes une base de $4$ m et la même hauteur $AH = 9$ m :
chacune a une aire de $\\dfrac{4 \\times 9}{2} = 18\\text{ m}^2$, et $3 \\times 18 = 54\\text{ m}^2$ : le partage est équitable.`
    },
    {
      id: "5G4-ds-11",
      title: "Un point qui se promène",
      difficulty: 3,
      points: 5,
      statement: `$ABCD$ est un rectangle avec $AB = 10$ cm et $AD = 6$ cm. Un point $M$ se déplace sur le côté $[DC]$.

1. On place $M$ tel que $DM = 3$ cm.
   a) Faire une figure en vraie grandeur.
   b) Quelle est la hauteur du triangle $ABM$ relative à la base $[AB]$ ? Calculer l'aire du triangle $ABM$.
2. On place maintenant $M$ tel que $DM = 7$ cm. Que devient l'aire du triangle $ABM$ ? Expliquer pourquoi elle ne dépend pas de la position de $M$ sur $[DC]$.
3. On revient au cas $DM = 3$ cm. Calculer les aires des triangles $ADM$ et $BCM$. Vérifier que leur somme est cohérente avec les résultats précédents.
4. Où faut-il placer $M$ sur $[DC]$ pour que le triangle $ADM$ ait une aire de $12\\text{ cm}^2$ ?`,
      solution: `**1.** a) On trace le rectangle puis on place $M$ sur $[DC]$ à $3$ cm de $D$.
b) La hauteur issue de $M$ est le segment perpendiculaire à $(AB)$ passant par $M$ : comme $(DC)$ est parallèle à $(AB)$, sa longueur est égale à $AD = 6$ cm.
$\\mathcal{A}_{ABM} = \\dfrac{AB \\times 6}{2} = \\dfrac{10 \\times 6}{2} = 30\\text{ cm}^2$.

**2.** Pour $DM = 7$ cm, la base est toujours $AB = 10$ cm et la hauteur est toujours $6$ cm (la distance entre les droites parallèles $(DC)$ et $(AB)$) : l'aire vaut encore $30\\text{ cm}^2$.
Quelle que soit la position de $M$ sur $[DC]$, ni la base ni la hauteur ne changent : l'aire de $ABM$ vaut toujours $30\\text{ cm}^2$, la moitié de l'aire du rectangle ($10 \\times 6 = 60\\text{ cm}^2$).

**3.** $ADM$ est rectangle en $D$ : $\\mathcal{A}_{ADM} = \\dfrac{AD \\times DM}{2} = \\dfrac{6 \\times 3}{2} = 9\\text{ cm}^2$.
$MC = 10 - 3 = 7$ cm et $BCM$ est rectangle en $C$ : $\\mathcal{A}_{BCM} = \\dfrac{6 \\times 7}{2} = 21\\text{ cm}^2$.
Somme : $9 + 21 = 30\\text{ cm}^2$. C'est cohérent : le rectangle ($60\\text{ cm}^2$) est formé des trois triangles $ADM$, $ABM$ et $BCM$, et $60 - 30 = 30\\text{ cm}^2$.

**4.** On veut $\\dfrac{6 \\times DM}{2} = 12$, donc $6 \\times DM = 24$ et $DM = 24 \\div 6 = 4$. Il faut placer $M$ sur $[DC]$ à $4$ cm de $D$.`
    },
    {
      id: "5G4-ds-12",
      title: "Côtés et hauteurs d'un même triangle",
      difficulty: 4,
      points: 6,
      statement: `$ABC$ est un triangle tel que $AB = 13$ cm, $BC = 14$ cm et $AC = 15$ cm. La hauteur issue de $A$ mesure $AH = 12$ cm.

1. Vérifier que ce triangle est constructible.
2. Calculer l'aire du triangle $ABC$.
3. a) Calculer la longueur de la hauteur issue de $B$ (relative au côté $[AC]$).
   b) Calculer la longueur de la hauteur issue de $C$ (relative au côté $[AB]$), arrondie au dixième.
4. Ranger les trois hauteurs dans l'ordre croissant, puis les trois côtés dans l'ordre croissant. Que remarque-t-on ? Expliquer cette remarque à l'aide de la formule de l'aire.`,
      solution: `**1.** Le plus grand côté mesure $15$ cm et $13 + 14 = 27 > 15$ : le triangle est constructible.

**2.** Avec la base $[BC]$ et la hauteur $[AH]$ : $\\mathcal{A}_{ABC} = \\dfrac{14 \\times 12}{2} = 84\\text{ cm}^2$.

**3.** a) Notons $h_B$ la hauteur issue de $B$ : $\\dfrac{AC \\times h_B}{2} = 84$, donc $15 \\times h_B = 168$ et $h_B = 168 \\div 15 = 11{,}2$ cm.
b) Notons $h_C$ la hauteur issue de $C$ : $13 \\times h_C = 168$, donc $h_C = \\dfrac{168}{13} \\approx 12{,}9$ cm.

**4.** Hauteurs : $h_B \\approx 11{,}2 < AH = 12 < h_C \\approx 12{,}9$ (relatives aux côtés de $15$ cm, $14$ cm et $13$ cm).
Côtés : $AB = 13 < BC = 14 < AC = 15$.
On remarque que **plus le côté est long, plus la hauteur relative à ce côté est courte** : la plus petite hauteur correspond au plus grand côté.
Explication : pour chaque côté, $\\text{côté} \\times \\text{hauteur} = 2 \\times \\text{aire} = 168$. Le produit est toujours le même ; donc si le côté est plus grand, la hauteur doit être plus petite.`
    },
    {
      id: "5G4-ds-13",
      title: "Aires de triangles sur quadrillage",
      difficulty: 1,
      points: 4,
      statement: `Sur le quadrillage ci-dessous, chaque carreau est un carré de $1$ cm de côté.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:420px;"><svg class="geo-svg-figure" viewBox="0 0 400 140" width="400" height="140" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="10.0" y1="10.0" x2="10.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="30.0" y1="10.0" x2="30.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="50.0" y1="10.0" x2="50.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="70.0" y1="10.0" x2="70.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="90.0" y1="10.0" x2="90.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="110.0" y1="10.0" x2="110.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="130.0" y1="10.0" x2="130.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="150.0" y1="10.0" x2="150.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="170.0" y1="10.0" x2="170.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="190.0" y1="10.0" x2="190.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="210.0" y1="10.0" x2="210.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="230.0" y1="10.0" x2="230.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="250.0" y1="10.0" x2="250.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="270.0" y1="10.0" x2="270.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="290.0" y1="10.0" x2="290.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="310.0" y1="10.0" x2="310.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="330.0" y1="10.0" x2="330.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="350.0" y1="10.0" x2="350.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="370.0" y1="10.0" x2="370.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="390.0" y1="10.0" x2="390.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="10.0" y1="10.0" x2="390.0" y2="10.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="10.0" y1="30.0" x2="390.0" y2="30.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="10.0" y1="50.0" x2="390.0" y2="50.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="10.0" y1="70.0" x2="390.0" y2="70.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="10.0" y1="90.0" x2="390.0" y2="90.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="10.0" y1="110.0" x2="390.0" y2="110.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><line x1="10.0" y1="130.0" x2="390.0" y2="130.0" stroke="currentColor" stroke-width="0.6" stroke-opacity="0.3"/><polygon points="30.0,110.0 110.0,110.0 30.0,50.0" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="1.8"/><polygon points="130.0,110.0 250.0,110.0 170.0,30.0" fill="rgba(16,185,129,0.12)" stroke="currentColor" stroke-width="1.8"/><polygon points="270.0,110.0 330.0,110.0 370.0,30.0" fill="rgba(234,88,12,0.12)" stroke="currentColor" stroke-width="1.8"/><text x="54.0" y="98.0" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">T₁</text><text x="182.0" y="94.0" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">T₂</text><text x="318.0" y="94.0" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="currentColor" text-anchor="middle">T₃</text></svg></div>

1. Le triangle $T_1$ est rectangle. Calculer son aire.
2. Pour le triangle $T_2$, on prend comme base son côté horizontal. Donner la longueur de cette base et celle de la hauteur correspondante, puis calculer l'aire de $T_2$.
3. Pour le triangle $T_3$, on prend aussi comme base son côté horizontal.
   a) Où se trouve le pied de la hauteur issue du sommet du haut ?
   b) Calculer l'aire de $T_3$.
4. Ranger les trois triangles selon leur aire. Deux d'entre eux ont-ils la même aire ?`,
      solution: `On utilise : $\\text{Aire d'un triangle} = \\dfrac{\\text{base} \\times \\text{hauteur}}{2}$.

**1.** Les côtés de l'angle droit de $T_1$ mesurent $4$ cm (horizontal) et $3$ cm (vertical). L'un est une hauteur relative à l'autre : $\\mathcal{A}_1 = \\dfrac{4 \\times 3}{2} = 6\\text{ cm}^2$.

**2.** La base horizontale de $T_2$ mesure $6$ cm ; le sommet du haut est $4$ carreaux au-dessus de la base, donc la hauteur mesure $4$ cm.
$\\mathcal{A}_2 = \\dfrac{6 \\times 4}{2} = 12\\text{ cm}^2$.

**3.** a) La hauteur issue du sommet du haut est verticale. Ce sommet est situé à droite de l'extrémité droite de la base : le pied de la hauteur est **sur le prolongement de la base**, à l'extérieur du triangle ($T_3$ a un angle obtus).
b) La base mesure $3$ cm et la hauteur $4$ cm : $\\mathcal{A}_3 = \\dfrac{3 \\times 4}{2} = 6\\text{ cm}^2$.

**4.** $\\mathcal{A}_1 = \\mathcal{A}_3 = 6\\text{ cm}^2 < \\mathcal{A}_2 = 12\\text{ cm}^2$. Les triangles $T_1$ et $T_3$ ont la **même aire**, bien qu'ils n'aient pas la même forme.`
    },
    {
      id: "5G4-ds-14",
      title: "Repérer hauteur, médiane et médiatrice",
      difficulty: 2,
      points: 5,
      statement: `Sur la figure codée ci-dessous (qui n'est pas en vraie grandeur), $ABC$ est un triangle, $H$ est un point de $[BC]$, $I$ est un point de $[AC]$ et $J$ un point de $[AB]$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 400 250" width="400" height="250" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="120.0,20.0 40.0,220.0 360.0,220.0" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="1.8"/><line x1="120.0" y1="20.0" x2="120.0" y2="220.0" stroke="#2563eb" stroke-width="1.8"/><polyline points="120.0,210.0 130.0,210.0 130.0,220.0" fill="none" stroke="currentColor" stroke-width="1.3"/><line x1="40.0" y1="220.0" x2="240.0" y2="120.0" stroke="#16a34a" stroke-width="1.8"/><line x1="182.3" y1="64.1" x2="174.6" y2="73.3" stroke="currentColor" stroke-width="1.4"/><line x1="185.4" y1="66.7" x2="177.7" y2="75.9" stroke="currentColor" stroke-width="1.4"/><line x1="302.3" y1="164.1" x2="294.6" y2="173.3" stroke="currentColor" stroke-width="1.4"/><line x1="305.4" y1="166.7" x2="297.7" y2="175.9" stroke="currentColor" stroke-width="1.4"/><line x1="52.1" y1="108.9" x2="191.4" y2="164.6" stroke="#ea580c" stroke-width="1.8"/><line x1="105.6" y1="72.2" x2="94.4" y2="67.8" stroke="currentColor" stroke-width="1.4"/><line x1="65.6" y1="172.2" x2="54.4" y2="167.8" stroke="currentColor" stroke-width="1.4"/><polyline points="83.3,111.6 91.7,115.0 88.4,123.3" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="120.0" y="14.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="28.0" y="230.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="372.0" y="230.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="120.0" y="240.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">H</text><text x="252.0" y="116.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">I</text><text x="66.0" y="120.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">J</text><text x="195.4" y="182.6" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#ea580c" text-anchor="middle">(d)</text></svg></div>

1. En utilisant le codage, dire ce que représente pour le triangle $ABC$ (ou pour l'un de ses côtés) :
   a) le segment $[AH]$ ;
   b) le segment $[BI]$ ;
   c) la droite $(d)$.
   Justifier chaque réponse.
2. On sait que $BC = 8$ cm et $AH = 5$ cm. Calculer l'aire du triangle $ABC$.
3. On sait de plus que $BH = 2$ cm. Calculer les aires des triangles $ABH$ et $AHC$, puis vérifier la cohérence avec la question 2.
4. Un point $K$ de la droite $(d)$ est tel que $KA = 3{,}7$ cm. Quelle est la longueur $KB$ ? Justifier.`,
      solution: `**1.** a) $[AH]$ part du sommet $A$ et est perpendiculaire au côté opposé $[BC]$ (angle droit codé en $H$) : c'est la **hauteur** du triangle issue de $A$.
b) $I$ est le milieu de $[AC]$ (codage $IA = IC$) et $[BI]$ part du sommet opposé $B$ : c'est la **médiane** du triangle issue de $B$.
c) $(d)$ passe par le milieu $J$ de $[AB]$ (codage $JA = JB$) et est perpendiculaire à $(AB)$ : c'est la **médiatrice** du segment $[AB]$.

**2.** $\\mathcal{A}_{ABC} = \\dfrac{BC \\times AH}{2} = \\dfrac{8 \\times 5}{2} = 20\\text{ cm}^2$.

**3.** $ABH$ est rectangle en $H$ : $\\mathcal{A}_{ABH} = \\dfrac{BH \\times AH}{2} = \\dfrac{2 \\times 5}{2} = 5\\text{ cm}^2$.
$HC = 8 - 2 = 6$ cm, donc $\\mathcal{A}_{AHC} = \\dfrac{6 \\times 5}{2} = 15\\text{ cm}^2$.
$5 + 15 = 20\\text{ cm}^2$ : c'est bien l'aire de $ABC$.

**4.** Tout point de la médiatrice d'un segment est à égale distance des extrémités de ce segment. $K$ est sur la médiatrice de $[AB]$, donc $KB = KA = 3{,}7$ cm.`
    },
    {
      id: "5G4-ds-15",
      title: "Où placer le troisième sommet ?",
      difficulty: 3,
      points: 5,
      statement: `On trace un segment $[AB]$ de longueur $6$ cm. On cherche un point $C$ tel que le triangle $ABC$ ait une aire de $12\\text{ cm}^2$.

1. Calculer la longueur de la hauteur issue de $C$ dans le triangle $ABC$.
2. Expliquer pourquoi il existe une infinité de positions possibles pour le point $C$, et décrire où elles se trouvent. Les tracer.
3. On veut en plus que le triangle $ABC$ soit isocèle en $C$.
   a) Sur quelle droite doit se trouver le point $C$ ? Justifier.
   b) Combien y a-t-il de positions possibles ? Construire l'une d'elles et mesurer $AC$.
4. On veut maintenant que le triangle $ABC$ soit rectangle en $A$ (et toujours d'aire $12\\text{ cm}^2$). Construire une position de $C$ et donner la longueur $AC$.
5. Peut-on trouver un point $C$ tel que le triangle $ABC$ soit à la fois isocèle en $C$ et rectangle en $A$, avec cette aire ? Justifier.`,
      solution: `**1.** $\\text{Aire} = \\dfrac{AB \\times \\text{hauteur}}{2}$, donc $AB \\times \\text{hauteur} = 2 \\times 12 = 24$ et la hauteur mesure $24 \\div 6 = 4$ cm.

**2.** Il suffit que $C$ soit à $4$ cm de la droite $(AB)$. Les points situés à $4$ cm de $(AB)$ forment **deux droites parallèles à $(AB)$**, une de chaque côté, à $4$ cm de distance. Tout point $C$ de ces deux droites convient : il y en a une infinité. On les trace avec l'équerre (perpendiculaire à $(AB)$, report de $4$ cm, puis parallèle).

**3.** a) $CA = CB$ : $C$ est à égale distance de $A$ et de $B$, il est donc sur la **médiatrice de $[AB]$**.
b) La médiatrice coupe chacune des deux parallèles en un point : il y a **$2$ positions**, symétriques par rapport à $(AB)$. Avec la figure, on mesure $AC = 5$ cm (une mesure entre $4{,}9$ cm et $5{,}1$ cm est acceptée).

**4.** On trace la perpendiculaire à $(AB)$ passant par $A$ ; elle coupe la parallèle en $C$. Alors $[AC]$ est la hauteur issue de $C$ : $AC = 4$ cm.

**5.** Pour être isocèle en $C$, le point $C$ doit être sur la médiatrice de $[AB]$, qui est perpendiculaire à $(AB)$ et passe par le milieu de $[AB]$. Pour être rectangle en $A$, le point $C$ doit être sur la perpendiculaire à $(AB)$ passant par $A$.
Ces deux droites sont perpendiculaires à la même droite $(AB)$, donc elles sont parallèles ; elles sont distinctes (l'une passe par $A$, l'autre par le milieu de $[AB]$). Elles n'ont aucun point commun : **c'est impossible**.`
    },
    {
      id: "5G4-ds-16",
      title: "Un triangle qui change d'aire",
      difficulty: 4,
      points: 6,
      statement: `$ABCD$ est un rectangle tel que $AB = 10$ cm et $BC = 6$ cm. Le point $M$ est le milieu du côté $[DC]$ et $N$ est un point du côté $[BC]$. On s'intéresse à l'aire du triangle $AMN$ (en couleur). La figure n'est pas en vraie grandeur.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 340 220" width="340" height="220" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="30.0,200.0 310.0,200.0 310.0,32.0 30.0,32.0" fill="none" stroke="currentColor" stroke-width="1.8"/><polygon points="30.0,200.0 170.0,32.0 310.0,144.0" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.8"/><line x1="98.0" y1="26.0" x2="98.0" y2="38.0" stroke="currentColor" stroke-width="1.4"/><line x1="102.0" y1="26.0" x2="102.0" y2="38.0" stroke="currentColor" stroke-width="1.4"/><line x1="238.0" y1="26.0" x2="238.0" y2="38.0" stroke="currentColor" stroke-width="1.4"/><line x1="242.0" y1="26.0" x2="242.0" y2="38.0" stroke="currentColor" stroke-width="1.4"/><text x="20.0" y="214.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="320.0" y="214.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="320.0" y="28.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="20.0" y="28.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">D</text><text x="170.0" y="24.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">M</text><text x="323.0" y="149.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">N</text></svg></div>

1. Dans cette question, $BN = 2$ cm.
   a) Calculer les aires des triangles rectangles $ABN$, $NCM$ et $MDA$.
   b) En déduire l'aire du triangle $AMN$.
2. En procédant de la même façon, recopier et compléter le tableau suivant.

| $BN$ (en cm) | $0$ | $2$ | $4$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|
| Aire de $AMN$ (en $\\text{cm}^2$) | | | | |

3. L'aire du triangle $AMN$ est-elle proportionnelle à la longueur $BN$ ? Justifier.
4. Comment varie l'aire de $AMN$ quand $BN$ augmente de $2$ cm ? En déduire une position de $N$ pour laquelle l'aire de $AMN$ vaut $22{,}5\\text{ cm}^2$, puis vérifier par un calcul.`,
      solution: `L'aire du rectangle est $10 \\times 6 = 60\\text{ cm}^2$. On obtient l'aire de $AMN$ en retirant les trois triangles rectangles qui l'entourent.

**1.** a) $ABN$ : $\\dfrac{10 \\times 2}{2} = 10\\text{ cm}^2$. $NCM$ : $CN = 6 - 2 = 4$ cm et $CM = 10 \\div 2 = 5$ cm, donc $\\dfrac{4 \\times 5}{2} = 10\\text{ cm}^2$. $MDA$ : $\\dfrac{5 \\times 6}{2} = 15\\text{ cm}^2$.
b) $\\mathcal{A}_{AMN} = 60 - 10 - 10 - 15 = 25\\text{ cm}^2$.

**2.** Le triangle $MDA$ a toujours une aire de $15\\text{ cm}^2$.
- $BN = 0$ : $N$ est en $B$ ; $ABN$ est réduit à un segment (aire $0$) ; $NCM$ : $\\dfrac{6 \\times 5}{2} = 15$ ; aire $= 60 - 0 - 15 - 15 = 30$.
- $BN = 4$ : $ABN$ : $\\dfrac{10 \\times 4}{2} = 20$ ; $NCM$ : $\\dfrac{2 \\times 5}{2} = 5$ ; aire $= 60 - 20 - 5 - 15 = 20$.
- $BN = 6$ : $N$ est en $C$ ; $ABN$ : $\\dfrac{10 \\times 6}{2} = 30$ ; $NCM$ est réduit à un segment ; aire $= 60 - 30 - 0 - 15 = 15$.

| $BN$ (en cm) | $0$ | $2$ | $4$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|
| Aire de $AMN$ (en $\\text{cm}^2$) | $30$ | $25$ | $20$ | $15$ |

**3.** Non : quand $BN$ double (de $2$ à $4$ cm), l'aire ne double pas (elle passe de $25$ à $20\\text{ cm}^2$). D'ailleurs, pour $BN = 0$, l'aire n'est pas nulle.

**4.** Chaque fois que $BN$ augmente de $2$ cm, l'aire **diminue de $5\\text{ cm}^2$**, soit $2{,}5\\text{ cm}^2$ par centimètre. $22{,}5$ est à mi-chemin entre $25$ et $20$ : on essaie $BN = 3$ cm.
Vérification : $ABN$ : $\\dfrac{10 \\times 3}{2} = 15$ ; $CN = 3$ cm, $NCM$ : $\\dfrac{3 \\times 5}{2} = 7{,}5$ ; aire de $AMN$ : $60 - 15 - 7{,}5 - 15 = 22{,}5\\text{ cm}^2$. Il faut placer $N$ tel que **$BN = 3$ cm**.`
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
    },
    {
      id: "5G5-ds-09",
      title: "Des places de parking en épi",
      difficulty: 1,
      points: 4,
      statement: `Sur un parking, chaque place est un parallélogramme $ABCD$ : le côté $[AB]$, le long du trottoir, mesure $3$ m, le côté oblique $[AD]$ mesure $5$ m et la distance entre les droites $(AB)$ et $(DC)$ est de $4{,}5$ m. L'angle $\\widehat{DAB}$ mesure $65^\\circ$.

1. Donner, sans les mesurer, les longueurs $DC$ et $BC$. Justifier.
2. Donner les mesures des angles $\\widehat{BCD}$, $\\widehat{ABC}$ et $\\widehat{CDA}$. Justifier.
3. Calculer l'aire d'une place de parking.
4. Le parking comporte $15$ places identiques. Calculer l'aire totale occupée par les places.`,
      solution: `**1.** Dans un parallélogramme, les côtés opposés ont la même longueur : $DC = AB = 3$ m et $BC = AD = 5$ m.

**2.** Dans un parallélogramme, les angles opposés ont la même mesure : $\\widehat{BCD} = \\widehat{DAB} = 65^\\circ$.
Deux angles consécutifs sont supplémentaires : $\\widehat{ABC} = 180^\\circ - 65^\\circ = 115^\\circ$, et $\\widehat{CDA} = \\widehat{ABC} = 115^\\circ$ (angles opposés).
(Vérification : $65 + 115 + 65 + 115 = 360$.)

**3.** Aire d'un parallélogramme : base $\\times$ hauteur relative. Avec la base $[AB]$ et la hauteur $4{,}5$ m :
$\\mathcal{A} = 3 \\times 4{,}5 = 13{,}5\\text{ m}^2$. (Attention : on n'utilise pas le côté oblique de $5$ m, qui n'est pas perpendiculaire à la base.)

**4.** $15 \\times 13{,}5 = 202{,}5$. Les places occupent $202{,}5\\text{ m}^2$.`
    },
    {
      id: "5G5-ds-10",
      title: "Construire à partir des diagonales",
      difficulty: 2,
      points: 5,
      statement: `1. On veut construire un losange $ABCD$ de centre $O$ dont les diagonales mesurent $AC = 8$ cm et $BD = 6$ cm.
   a) Rappeler deux propriétés des diagonales d'un losange.
   b) Écrire un programme de construction, puis construire le losange.
   c) Mesurer un côté du losange.
2. On veut construire un rectangle $EFGH$ tel que $EG = 10$ cm et $EF = 6$ cm.
   a) Rappeler deux propriétés des diagonales d'un rectangle.
   b) Expliquer pourquoi les quatre sommets du rectangle sont sur un même cercle dont on précisera le centre et le rayon.
   c) En déduire une construction du rectangle (sans équerre), puis mesurer $FG$.`,
      solution: `**1.** a) Les diagonales d'un losange **se coupent en leur milieu** (comme pour tout parallélogramme) et elles sont **perpendiculaires**.
b) On trace $[AC]$ de longueur $8$ cm et on place son milieu $O$ ($OA = OC = 4$ cm). On trace la perpendiculaire à $(AC)$ passant par $O$ et on place sur cette droite $B$ et $D$ de part et d'autre de $O$, avec $OB = OD = 3$ cm. On trace les côtés $[AB]$, $[BC]$, $[CD]$ et $[DA]$.
c) On mesure $AB = BC = CD = DA = 5$ cm.

**2.** a) Les diagonales d'un rectangle **se coupent en leur milieu** et elles **ont la même longueur**.
b) Notons $O$ le point d'intersection des diagonales. Il est le milieu de $[EG]$ et de $[FH]$, et $EG = FH = 10$ cm, donc $OE = OG = OF = OH = 5$ cm. Les quatre sommets sont sur le cercle de centre $O$ et de rayon $5$ cm.
c) On trace $[EG]$ de longueur $10$ cm, son milieu $O$, puis le cercle de centre $O$ et de rayon $5$ cm. Avec le compas, on place sur ce cercle le point $F$ tel que $EF = 6$ cm. On place $H$, le point du cercle diamétralement opposé à $F$ (sur la droite $(FO)$, avec $OH = 5$ cm). Le quadrilatère $EFGH$ a des diagonales de même longueur qui se coupent en leur milieu : c'est un rectangle. On mesure $FG = 8$ cm.`
    },
    {
      id: "5G5-ds-11",
      title: "Une droite qui passe par le centre",
      difficulty: 3,
      points: 5,
      statement: `$ABCD$ est un parallélogramme de centre $O$ tel que $AB = 8$ cm ; la distance entre les droites $(AB)$ et $(DC)$ est de $5$ cm. Une droite $d$ passant par $O$ coupe le segment $[AB]$ en $E$ et le segment $[DC]$ en $F$.

**Rappels.** Le centre d'un parallélogramme est le point d'intersection de ses diagonales ; c'est son centre de symétrie. Une symétrie centrale conserve les longueurs et les aires.

1. Faire une figure.
2. Quel est le symétrique du point $A$ par rapport à $O$ ? celui du point $B$ ? Justifier. En déduire le symétrique du segment $[AB]$.
3. On admet que le symétrique du point $E$ par rapport à $O$ est le point $F$. Que représente alors le point $O$ pour le segment $[EF]$ ?
4. Démontrer que le quadrilatère $AECF$ est un parallélogramme.
5. La droite $d$ partage $ABCD$ en deux quadrilatères $AEFD$ et $EBCF$.
   a) Calculer l'aire du parallélogramme $ABCD$.
   b) Donner les symétriques des points $A$, $E$, $F$ et $D$ par rapport à $O$. En déduire le symétrique du quadrilatère $AEFD$.
   c) En utilisant les rappels, calculer l'aire de chacun des deux quadrilatères.`,
      solution: `**1.** Figure : un parallélogramme $ABCD$, ses diagonales qui se coupent en $O$, une droite passant par $O$ qui coupe $[AB]$ en $E$ et $[DC]$ en $F$.

**2.** Les diagonales d'un parallélogramme se coupent en leur milieu : $O$ est le milieu de $[AC]$ et de $[BD]$. Donc le symétrique de $A$ par rapport à $O$ est $C$ et celui de $B$ est $D$. La symétrie centrale transforme un segment en un segment : le symétrique de $[AB]$ est $[CD]$.

**3.** Si $F$ est le symétrique de $E$ par rapport à $O$, alors, par définition de la symétrie centrale, **$O$ est le milieu du segment $[EF]$**.
(Justification possible de ce qui est admis : $E$ est sur $[AB]$, donc son symétrique est sur $[CD]$ ; il est aussi sur la droite $d$, qui passe par $O$ ; c'est donc le point d'intersection $F$ de $d$ et de $[DC]$.)

**4.** Les diagonales $[AC]$ et $[EF]$ du quadrilatère $AECF$ ont le même milieu $O$. Or un quadrilatère dont les diagonales se coupent en leur milieu est un parallélogramme : $AECF$ est un parallélogramme.

**5.** a) Aire de $ABCD$ : base $\\times$ hauteur $= 8 \\times 5 = 40\\text{ cm}^2$.
b) Par la symétrie de centre $O$ : $A$ a pour image $C$, $E$ a pour image $F$, $F$ a pour image $E$ et $D$ a pour image $B$. Le quadrilatère $AEFD$ a donc pour symétrique le quadrilatère $CFEB$, c'est-à-dire $EBCF$.
c) La symétrie centrale conserve les aires : $AEFD$ et $EBCF$ ont la même aire. Comme ils se partagent le parallélogramme, chacun a pour aire $40 \\div 2 = 20\\text{ cm}^2$, quelle que soit la droite $d$ passant par $O$.`
    },
    {
      id: "5G5-ds-12",
      title: "Le cadre articulé",
      difficulty: 4,
      points: 6,
      statement: `Lucie fabrique un cadre articulé avec quatre baguettes : deux de $6$ cm et deux de $4$ cm, fixées par des attaches à leurs extrémités, les baguettes de même longueur étant face à face. En déformant le cadre, elle obtient un quadrilatère $ABCD$ avec $AB = CD = 6$ cm et $AD = BC = 4$ cm.

**Rappel.** Un quadrilatère non croisé dont les côtés opposés ont deux à deux la même longueur est un parallélogramme.

1. Expliquer pourquoi le cadre est toujours un parallélogramme.
2. Dans une première position, la hauteur relative au côté $[AB]$ mesure $3{,}2$ cm.
   a) Calculer l'aire du parallélogramme.
   b) En prenant cette fois $[AD]$ comme base, on a : aire $= AD \\times$ hauteur relative à $[AD]$. En déduire cette hauteur.
3. On note $H$ le pied de la perpendiculaire à $(AB)$ passant par $D$ : la hauteur relative à $[AB]$ est la longueur $DH$.
   a) Rappeler pourquoi $DH$ est inférieure ou égale à $DA$. En déduire que la hauteur ne peut pas dépasser $4$ cm.
   b) Lucie affirme qu'en déformant le cadre, elle peut obtenir une aire de $30\\text{ cm}^2$. A-t-elle raison ?
4. Quelle est l'aire maximale que peut avoir ce cadre ? Quelle est alors la nature du quadrilatère ?`,
      solution: `**1.** Quelle que soit la position, les côtés opposés ont la même longueur : $AB = CD = 6$ cm et $AD = BC = 4$ cm. D'après le rappel, le cadre est toujours un **parallélogramme**.

**2.** a) $\\mathcal{A} = AB \\times h = 6 \\times 3{,}2 = 19{,}2\\text{ cm}^2$.
b) $4 \\times h' = 19{,}2$, donc $h' = 19{,}2 \\div 4 = 4{,}8$ cm.

**3.** a) $DH$ est la distance du point $D$ à la droite $(AB)$ : c'est la plus courte des distances entre $D$ et un point de la droite $(AB)$. Comme $A$ est un point de $(AB)$, on a $DH \\leqslant DA = 4$ cm. La hauteur ne dépasse donc jamais $4$ cm.
b) L'aire vaut $6 \\times DH$, donc elle est au plus $6 \\times 4 = 24\\text{ cm}^2$. Une aire de $30\\text{ cm}^2$ est impossible : Lucie a **tort**.

**4.** L'aire vaut $24\\text{ cm}^2$ lorsque $DH = DA$, c'est-à-dire lorsque $H$ est en $A$ : le côté $[AD]$ est alors perpendiculaire à $[AB]$. Le parallélogramme a un angle droit : c'est un **rectangle** de $6$ cm sur $4$ cm. L'aire maximale est $24\\text{ cm}^2$.`
    },
    {
      id: "5G5-ds-13",
      title: "Le tableau des propriétés des quadrilatères",
      difficulty: 1,
      points: 4,
      statement: `1. Recopier et compléter le tableau suivant par « oui » ou « non ».

| Propriété | Parallélogramme | Rectangle | Losange | Carré |
|:---|:---:|:---:|:---:|:---:|
| Les côtés opposés sont parallèles | | | | |
| Les quatre côtés ont la même longueur | | | | |
| Les quatre angles sont droits | | | | |
| Les diagonales ont le même milieu | | | | |
| Les diagonales ont la même longueur | | | | |
| Les diagonales sont perpendiculaires | | | | |

2. Quel quadrilatère possède toutes les propriétés du tableau ?
3. Les diagonales d'un quadrilatère $EFGH$ ont le même milieu et sont perpendiculaires, mais elles n'ont pas la même longueur. Quelle est la nature de $EFGH$ ?
4. Léo affirme : « Un carré est un losange particulier, et un losange est toujours un carré. » Qu'en penser ? Justifier.`,
      solution: `**1.**

| Propriété | Parallélogramme | Rectangle | Losange | Carré |
|:---|:---:|:---:|:---:|:---:|
| Les côtés opposés sont parallèles | oui | oui | oui | oui |
| Les quatre côtés ont la même longueur | non | non | oui | oui |
| Les quatre angles sont droits | non | oui | non | oui |
| Les diagonales ont le même milieu | oui | oui | oui | oui |
| Les diagonales ont la même longueur | non | oui | non | oui |
| Les diagonales sont perpendiculaires | non | non | oui | oui |

(« non » signifie : pas toujours. Un parallélogramme particulier peut par exemple avoir des angles droits ; c'est alors un rectangle.)

**2.** Le **carré** possède toutes ces propriétés : il est à la fois un rectangle et un losange.

**3.** Des diagonales qui ont le même milieu : $EFGH$ est un parallélogramme. Si de plus elles sont perpendiculaires, c'est un **losange**. Comme elles n'ont pas la même longueur, ce n'est pas un carré.

**4.** La première partie est vraie : un carré a ses quatre côtés de même longueur, c'est donc un losange. La seconde est fausse : un losange n'a pas forcément d'angle droit. Par exemple, un losange de côté $5$ cm avec un angle de $60^\\circ$ n'est pas un carré.`
    },
    {
      id: "5G5-ds-14",
      title: "Construire un losange avec un angle",
      difficulty: 2,
      points: 5,
      statement: `On veut construire un losange $EFGH$ tel que $EF = 5$ cm et $\\widehat{FEH} = 70^\\circ$.

1. Faire une figure à main levée codée.
2. Écrire un programme de construction de ce losange, puis le construire en vraie grandeur.
3. Donner, sans les mesurer, les mesures des angles $\\widehat{EFG}$, $\\widehat{FGH}$ et $\\widehat{GHE}$. Justifier.
4. Calculer le périmètre du losange.
5. Tracer les diagonales $[EG]$ et $[FH]$, qui se coupent en $O$.
   a) Mesurer $EG$ et $FH$.
   b) Quelle est la mesure de l'angle $\\widehat{EOF}$ ? Justifier sans mesurer.`,
      solution: `**1.** Figure à main levée : un losange $EFGH$ avec les quatre côtés codés de même longueur, $EF = 5$ cm et l'angle de $70^\\circ$ en $E$.

**2.** Programme de construction :
- tracer le segment $[EF]$ de longueur $5$ cm ;
- avec le rapporteur, tracer en $E$ une demi-droite faisant un angle de $70^\\circ$ avec $[EF]$ ;
- placer sur cette demi-droite le point $H$ tel que $EH = 5$ cm ;
- avec le compas, tracer un arc de centre $F$ et un arc de centre $H$, de rayon $5$ cm : ils se coupent en $G$ ;
- tracer $[FG]$ et $[HG]$.

**3.** Un losange est un parallélogramme.
- Deux angles consécutifs d'un parallélogramme sont supplémentaires : $\\widehat{EFG} = 180^\\circ - 70^\\circ = 110^\\circ$.
- Deux angles opposés ont la même mesure : $\\widehat{FGH} = \\widehat{FEH} = 70^\\circ$ et $\\widehat{GHE} = \\widehat{EFG} = 110^\\circ$.

**4.** Les quatre côtés mesurent $5$ cm : $\\mathcal{P} = 4 \\times 5 = 20$ cm.

**5.** a) On mesure $EG \\approx 8{,}2$ cm et $FH \\approx 5{,}7$ cm (on accepte $EG$ entre $8{,}1$ et $8{,}3$ cm, $FH$ entre $5{,}6$ et $5{,}8$ cm).
b) Les diagonales d'un losange sont perpendiculaires : $\\widehat{EOF} = 90^\\circ$.`
    },
    {
      id: "5G5-ds-15",
      title: "Un parallélogramme dans un repère",
      difficulty: 3,
      points: 5,
      statement: `Dans un repère orthogonal d'unité $1$ cm, on considère les points $A(-2 ; -1)$, $B(3 ; -1)$, $C(5 ; 2)$ et $D(0 ; 2)$.

1. Placer ces points et tracer le quadrilatère $ABCD$.
2. a) Déterminer les coordonnées du milieu du segment $[AC]$, puis celles du milieu du segment $[BD]$.
   b) En déduire la nature du quadrilatère $ABCD$. Justifier.
3. Calculer la longueur $AB$, puis la distance entre les droites $(AB)$ et $(DC)$. En déduire l'aire de $ABCD$.
4. Le quadrilatère $ABCD$ est-il un rectangle ? Justifier.
5. Déterminer les coordonnées du point $K$ tel que $ACBK$ soit un parallélogramme.`,
      solution: `**1.** On place les points en lisant l'abscisse puis l'ordonnée.

**2.** a) Le milieu d'un segment a pour abscisse le nombre à mi-chemin entre les abscisses des extrémités, et de même pour l'ordonnée.
- Milieu de $[AC]$ : à mi-chemin entre $-2$ et $5$, on trouve $1{,}5$ ; entre $-1$ et $2$, on trouve $0{,}5$. Milieu : $(1{,}5 ; 0{,}5)$.
- Milieu de $[BD]$ : entre $3$ et $0$, on trouve $1{,}5$ ; entre $-1$ et $2$, on trouve $0{,}5$. Milieu : $(1{,}5 ; 0{,}5)$.
b) Les diagonales $[AC]$ et $[BD]$ ont le même milieu. Si les diagonales d'un quadrilatère ont le même milieu, alors c'est un parallélogramme : **$ABCD$ est un parallélogramme**.

**3.** $A$ et $B$ ont la même ordonnée : $AB = 3 - (-2) = 5$ cm. Les droites $(AB)$ et $(DC)$ sont horizontales (ordonnées $-1$ et $2$) : la distance entre elles est $2 - (-1) = 3$ cm.
Aire d'un parallélogramme : base $\\times$ hauteur $= 5 \\times 3 = 15\\text{ cm}^2$.

**4.** $(AB)$ est horizontale. Pour aller de $A$ à $D$, on se déplace de $2$ unités vers la droite et de $3$ vers le haut : $(AD)$ n'est pas verticale, donc elle n'est pas perpendiculaire à $(AB)$. L'angle $\\widehat{DAB}$ n'est pas droit : $ABCD$ **n'est pas un rectangle**.

**5.** $ACBK$ est un parallélogramme si ses diagonales $[AB]$ et $[CK]$ ont le même milieu. Le milieu de $[AB]$ est $(0{,}5 ; -1)$.
Pour aller de $C(5 ; 2)$ à ce milieu, on se déplace de $4{,}5$ unités vers la gauche et de $3$ unités vers le bas. On recommence à partir du milieu : $K(0{,}5 - 4{,}5 ; -1 - 3)$, soit **$K(-4 ; -4)$**.`
    },
    {
      id: "5G5-ds-16",
      title: "Deux bandes de papier croisées",
      difficulty: 4,
      points: 6,
      statement: `On croise deux bandes de papier dont les bords sont parallèles. Les deux bandes ont la même largeur : $3$ cm. Leur partie commune est le quadrilatère $ABCD$ : les côtés $[AB]$ et $[DC]$ sont sur les bords de la bande 1, les côtés $[AD]$ et $[BC]$ sur les bords de la bande 2.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:400px;"><svg class="geo-svg-figure" viewBox="0 0 420 260" width="420" height="260" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="0,100 420,100 420,160 0,160" fill="rgba(59,130,246,0.15)" stroke="none"/><polygon points="253.9,-20.0 323.2,-20.0 150.0,280.0 80.7,280.0" fill="rgba(234,88,12,0.15)" stroke="none"/><line x1="0.0" y1="100.0" x2="420.0" y2="100.0" stroke="currentColor" stroke-width="1.8"/><line x1="0.0" y1="160.0" x2="420.0" y2="160.0" stroke="currentColor" stroke-width="1.8"/><line x1="253.9" y1="-20.0" x2="80.7" y2="280.0" stroke="currentColor" stroke-width="1.8"/><line x1="323.2" y1="-20.0" x2="150.0" y2="280.0" stroke="currentColor" stroke-width="1.8"/><polygon points="150.0,160.0 219.3,160.0 253.9,100.0 184.6,100.0" fill="rgba(16,185,129,0.25)" stroke="currentColor" stroke-width="2.4"/><text x="140.0" y="178.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="231.3" y="178.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="265.9" y="94.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="172.6" y="94.0" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">D</text><text x="395.0" y="135.0" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">bande 1</text><text x="351.2" y="22.0" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="start">bande 2</text></svg></div>

1. Justifier que $ABCD$ est un parallélogramme.
2. a) Quelle est la hauteur du parallélogramme relative à la base $[AB]$ ? Exprimer son aire à l'aide de la longueur $AB$.
   b) Quelle est la hauteur relative à la base $[AD]$ ? Exprimer l'aire de $ABCD$ à l'aide de la longueur $AD$.
3. En déduire que $AB = AD$, puis que $ABCD$ est un losange.
4. On mesure $AB = 5$ cm. Calculer l'aire et le périmètre de $ABCD$.
5. On remplace la bande 2 par une bande de largeur $4$ cm (la bande 1 garde sa largeur de $3$ cm). On obtient un parallélogramme tel que $AB = 6$ cm. Calculer son aire, puis la longueur $AD$. Est-ce encore un losange ?`,
      solution: `**1.** Les bords d'une bande sont parallèles : $(AB) \\parallel (DC)$ (bande 1) et $(AD) \\parallel (BC)$ (bande 2). Un quadrilatère dont les côtés opposés sont parallèles est un **parallélogramme** (définition).

**2.** a) La hauteur relative à $[AB]$ est la distance entre les droites $(AB)$ et $(DC)$, c'est-à-dire la largeur de la bande 1 : $3$ cm. Donc $\\text{Aire} = AB \\times 3$.
b) De même, la hauteur relative à $[AD]$ est la distance entre $(AD)$ et $(BC)$, c'est la largeur de la bande 2 : $3$ cm. Donc $\\text{Aire} = AD \\times 3$.

**3.** Les deux calculs donnent la même aire : $AB \\times 3 = AD \\times 3$, donc $AB = AD$.
Dans un parallélogramme, les côtés opposés ont la même longueur : $DC = AB$ et $BC = AD$. Les quatre côtés ont donc la même longueur : $ABCD$ est un **losange**.

**4.** $\\text{Aire} = 5 \\times 3 = 15\\text{ cm}^2$ et $\\mathcal{P} = 4 \\times 5 = 20$ cm.

**5.** Avec la base $[AB]$ (hauteur $3$ cm) : $\\text{Aire} = 6 \\times 3 = 18\\text{ cm}^2$.
Avec la base $[AD]$, la hauteur est maintenant la largeur de la bande 2, soit $4$ cm : $AD \\times 4 = 18$, donc $AD = 18 \\div 4 = 4{,}5$ cm.
$AB = 6$ cm et $AD = 4{,}5$ cm : deux côtés consécutifs n'ont pas la même longueur, ce **n'est plus un losange**.`
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
    },
    {
      id: "5G6-ds-09",
      title: "Le crayon à papier",
      difficulty: 1,
      points: 4,
      statement: `Un crayon à papier neuf a la forme d'un prisme droit de longueur $17{,}5$ cm dont les bases sont des hexagones (polygones à $6$ côtés) d'aire $0{,}6\\text{ cm}^2$. En son centre, sur toute la longueur, se trouve une mine en forme de cylindre de révolution de rayon $0{,}1$ cm.

1. Combien le prisme a-t-il de faces ? d'arêtes ? de sommets ? Quelle est la nature de ses faces latérales ?
2. Calculer le volume du crayon entier (bois et mine).
3. Calculer le volume de la mine : donner la valeur exacte, puis l'arrondi au centième de $\\text{cm}^3$.
4. En déduire le volume de bois, arrondi au centième de $\\text{cm}^3$.`,
      solution: `**1.** Les bases sont des hexagones : il y a $2$ bases et $6$ faces latérales, soit $8$ faces. Arêtes : $6 + 6$ (les deux bases) $+ 6$ (arêtes latérales) $= 18$ arêtes. Sommets : $6 + 6 = 12$ sommets. Comme c'est un prisme droit, les faces latérales sont des **rectangles**.

**2.** Volume d'un prisme droit : aire de la base $\\times$ hauteur. $V = 0{,}6 \\times 17{,}5 = 10{,}5\\text{ cm}^3$.

**3.** Volume d'un cylindre : $\\pi \\times r^2 \\times h$. $V_{\\text{mine}} = \\pi \\times 0{,}1^2 \\times 17{,}5 = \\pi \\times 0{,}01 \\times 17{,}5 = 0{,}175\\pi\\text{ cm}^3$, soit environ $0{,}55\\text{ cm}^3$.

**4.** $V_{\\text{bois}} = 10{,}5 - 0{,}175\\pi \\approx 10{,}5 - 0{,}55 = 9{,}95\\text{ cm}^3$ (calcul exact à la calculatrice : $9{,}950\\,2\\ldots$).

Le volume de bois est donc d'environ $9{,}95\\text{ cm}^3$ : la mine ne représente qu'une très petite partie du crayon.`
    },
    {
      id: "5G6-ds-10",
      title: "La tente canadienne",
      difficulty: 2,
      points: 5,
      statement: `Une tente a la forme d'un prisme droit couché, de longueur $2$ m. Ses deux bases (l'avant et l'arrière de la tente) sont des triangles isocèles : la base du triangle, posée au sol, mesure $1{,}8$ m, la hauteur relative à cette base mesure $1{,}2$ m et les deux autres côtés mesurent $1{,}5$ m.

1. Dessiner la tente en perspective cavalière (à main levée), en indiquant les dimensions.
2. Décrire le patron du prisme : nombre, nature et dimensions des faces.
3. Calculer le volume d'air à l'intérieur de la tente, en $\\text{m}^3$ puis en litres.
4. La toile recouvre les deux triangles et les deux pans inclinés (le sol n'est pas en toile). Calculer l'aire de toile nécessaire.`,
      solution: `**1.** On dessine le triangle avant en vraie forme, puis on trace les arêtes fuyantes (parallèles, de même longueur réduite) vers l'arrière, les arêtes cachées en pointillés.

**2.** Le patron comporte $5$ faces : $2$ triangles isocèles (côtés $1{,}5$ m, $1{,}5$ m et $1{,}8$ m) et $3$ rectangles de longueur $2$ m : un de $1{,}8$ m sur $2$ m (le sol) et deux de $1{,}5$ m sur $2$ m (les pans inclinés).

**3.** Aire d'une base : $\\mathcal{B} = \\dfrac{1{,}8 \\times 1{,}2}{2} = 1{,}08\\text{ m}^2$.
Volume : $V = \\mathcal{B} \\times h = 1{,}08 \\times 2 = 2{,}16\\text{ m}^3$.
Comme $1\\text{ m}^3 = 1\\,000$ L, $V = 2\\,160$ L.

**4.** Deux triangles : $2 \\times 1{,}08 = 2{,}16\\text{ m}^2$. Deux pans : $2 \\times (1{,}5 \\times 2) = 6\\text{ m}^2$.
Aire de toile : $2{,}16 + 6 = 8{,}16\\text{ m}^2$.`
    },
    {
      id: "5G6-ds-11",
      title: "Le rouleau de peinture",
      difficulty: 3,
      points: 5,
      statement: `Calculatrice autorisée. Un rouleau de peinture a la forme d'un cylindre de révolution de rayon $2{,}5$ cm et de longueur $18$ cm.

**Rappels.** Le périmètre d'un cercle de rayon $r$ est $2 \\times \\pi \\times r$. Le patron de la surface latérale d'un cylindre est un rectangle dont une dimension est la hauteur (ici la longueur) du cylindre et l'autre le périmètre du disque de base ; l'aire latérale est donc égale à : périmètre de la base $\\times$ hauteur.

1. Lorsqu'on « déroule » la surface latérale du cylindre, on obtient un rectangle. Donner ses dimensions (valeur exacte, puis arrondi au millimètre).
2. Quand le rouleau fait un tour complet sur un mur, il peint exactement ce rectangle. Quelle aire peint-il ? Donner la valeur exacte, puis l'arrondi au $\\text{cm}^2$.
3. Un mur rectangulaire mesure $4$ m sur $2{,}5$ m.
   a) Calculer son aire en $\\text{m}^2$, puis la convertir en $\\text{cm}^2$ (on rappelle que $1\\text{ m}^2 = 10\\,000\\text{ cm}^2$).
   b) Calculer le nombre minimal de tours de rouleau nécessaires pour le peindre une fois.
4. Calculer le volume du cylindre (arrondi au $\\text{cm}^3$).`,
      solution: `**1.** Une dimension du rectangle est la longueur du cylindre : $18$ cm. L'autre est le périmètre du disque de base : $2 \\times \\pi \\times 2{,}5 = 5\\pi$ cm, soit environ $15{,}7$ cm. Le rectangle mesure $18$ cm sur $5\\pi \\approx 15{,}7$ cm.

**2.** Aire latérale : $5\\pi \\times 18 = 90\\pi\\text{ cm}^2$, soit environ $283\\text{ cm}^2$.

**3.** a) Aire du mur : $4 \\times 2{,}5 = 10\\text{ m}^2$, soit $10 \\times 10\\,000 = 100\\,000\\text{ cm}^2$.
b) Nombre de tours : $100\\,000 \\div (90\\pi) \\approx 353{,}7$. Avec $353$ tours, le mur n'est pas entièrement peint : il faut au minimum **$354$ tours**.

**4.** $V = \\pi \\times r^2 \\times h = \\pi \\times 2{,}5^2 \\times 18 = \\pi \\times 6{,}25 \\times 18 = 112{,}5\\pi \\approx 353\\text{ cm}^3$.`
    },
    {
      id: "5G6-ds-12",
      title: "Changer de moule à gâteau",
      difficulty: 4,
      points: 6,
      statement: `Calculatrice autorisée. Une recette de gâteau est prévue pour un moule cylindrique de $20$ cm de diamètre : la pâte y monte à $4$ cm de hauteur.

**Rappel.** Pour un cylindre comme pour un pavé droit : volume $=$ aire de la base $\\times$ hauteur. Si l'on connaît le volume et l'aire de la base, on obtient donc la hauteur en calculant : volume $\\div$ aire de la base.

1. Calculer le volume de pâte : valeur exacte, puis arrondi au $\\text{cm}^3$. Est-ce plus ou moins d'un litre ?
2. Lina n'a qu'un moule en forme de pavé droit dont le fond mesure $25$ cm sur $16$ cm.
   a) Calculer l'aire du fond de ce moule.
   b) Quelle hauteur la pâte atteindra-t-elle ? Arrondir au millimètre.
3. Pour une fête, Lina double les quantités de la recette et utilise un moule à charlotte cylindrique de $16$ cm de diamètre et de $12$ cm de haut.
   a) Calculer le volume de pâte (valeur exacte) et l'aire du fond du moule (valeur exacte).
   b) Calculer la hauteur atteinte par la pâte. La pâte va-t-elle déborder ?`,
      solution: `**1.** Le rayon est $20 \\div 2 = 10$ cm. $V = \\pi \\times 10^2 \\times 4 = 400\\pi \\approx 1\\,257\\text{ cm}^3$.
$1$ L $= 1\\text{ dm}^3 = 1\\,000\\text{ cm}^3$ : il y a **un peu plus d'un litre** de pâte (environ $1{,}26$ L).

**2.** a) Aire du fond : $25 \\times 16 = 400\\text{ cm}^2$.
b) Hauteur : $400\\pi \\div 400 = \\pi \\approx 3{,}1$ cm. La pâte atteindra environ **$3{,}1$ cm** de hauteur.

**3.** a) Volume doublé : $2 \\times 400\\pi = 800\\pi\\text{ cm}^3$ (environ $2\\,513\\text{ cm}^3$). Rayon du moule : $16 \\div 2 = 8$ cm ; aire du fond : $\\pi \\times 8^2 = 64\\pi\\text{ cm}^2$ (environ $201\\text{ cm}^2$).
b) Hauteur : $800\\pi \\div 64\\pi = 800 \\div 64 = 12{,}5$ cm (à la calculatrice : $2\\,513 \\div 201 \\approx 12{,}5$).
$12{,}5$ cm $> 12$ cm : la pâte va **déborder** (avant même la cuisson).`
    },
    {
      id: "5G6-ds-13",
      title: "Une boîte de fromage et une barre de chocolat",
      difficulty: 1,
      points: 4,
      statement: `On rappelle les formules :
- volume d'un prisme droit : $V = \\text{aire de la base} \\times \\text{hauteur}$ ;
- volume d'un cylindre de révolution de rayon $r$ et de hauteur $h$ : $V = \\pi \\times r^2 \\times h$.

1. Une boîte de fromage est un cylindre de révolution de diamètre $10$ cm et de hauteur $3$ cm.
   a) Quel est son rayon ?
   b) Calculer son volume exact, puis son arrondi au $\\text{cm}^3$.
2. Une barre de chocolat a la forme d'un prisme droit de longueur $15$ cm. Sa base est un triangle dont un côté mesure $6$ cm et la hauteur relative à ce côté $4$ cm.
   a) Calculer l'aire de la base.
   b) Calculer le volume de la barre.
3. Lequel de ces deux objets a le plus grand volume ?
4. Convertir le volume de la barre de chocolat en litres, puis en centilitres.`,
      solution: `**1.** a) Le rayon est la moitié du diamètre : $r = 10 \\div 2 = 5$ cm.
b) $V = \\pi \\times 5^2 \\times 3 = \\pi \\times 25 \\times 3 = 75\\pi\\text{ cm}^3$, soit environ $236\\text{ cm}^3$ ($75\\pi \\approx 235{,}6$).

**2.** a) $\\mathcal{B} = \\dfrac{6 \\times 4}{2} = 12\\text{ cm}^2$.
b) $V = 12 \\times 15 = 180\\text{ cm}^3$.

**3.** $236 > 180$ : la **boîte de fromage** a le plus grand volume.

**4.** $1\\text{ L} = 1\\text{ dm}^3 = 1\\,000\\text{ cm}^3$, donc $180\\text{ cm}^3 = 0{,}18$ L $= 18$ cL.`
    },
    {
      id: "5G6-ds-14",
      title: "Le patron d'un prisme droit",
      difficulty: 2,
      points: 5,
      statement: `Voici le patron d'un solide (il n'est pas en vraie grandeur). Les deux triangles sont rectangles, de côtés $6$ cm, $8$ cm et $10$ cm.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:420px;"><svg class="geo-svg-figure" viewBox="0 0 430 295" width="430" height="295" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="20.0,110.0 110.0,110.0 110.0,185.0 20.0,185.0" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="1.8"/><polygon points="110.0,110.0 230.0,110.0 230.0,185.0 110.0,185.0" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="1.8"/><polygon points="230.0,110.0 380.0,110.0 380.0,185.0 230.0,185.0" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="1.8"/><polygon points="110.0,110.0 230.0,110.0 110.0,20.0" fill="rgba(234,88,12,0.12)" stroke="currentColor" stroke-width="1.8"/><polygon points="110.0,185.0 230.0,185.0 110.0,275.0" fill="rgba(234,88,12,0.12)" stroke="currentColor" stroke-width="1.8"/><polyline points="119.0,110.0 119.0,101.0 110.0,101.0" fill="none" stroke="currentColor" stroke-width="1.3"/><polyline points="119.0,185.0 119.0,194.0 110.0,194.0" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="65.0" y="201.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">6 cm</text><text x="180.0" y="177.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">8 cm</text><text x="305.0" y="201.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">10 cm</text><text x="384.0" y="151.5" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="start">5 cm</text></svg></div>

1. Quel est le solide obtenu en pliant ce patron ? Préciser la nature de ses bases et de ses faces latérales.
2. Combien ce solide a-t-il de faces, d'arêtes et de sommets ?
3. Quelle est la hauteur de ce solide ?
4. Calculer l'aire totale du patron.
5. Calculer le volume du solide.`,
      solution: `**1.** On obtient un **prisme droit** dont les bases sont des **triangles rectangles** (côtés de l'angle droit $6$ cm et $8$ cm) et dont les trois faces latérales sont des **rectangles**.

**2.** $2$ bases et $3$ faces latérales : **$5$ faces**. $3$ arêtes sur chaque base et $3$ arêtes latérales : **$9$ arêtes**. $3$ sommets sur chaque base : **$6$ sommets**.

**3.** La hauteur du prisme est la longueur commune des arêtes latérales, c'est-à-dire la largeur des rectangles : **$5$ cm**.

**4.** Les trois rectangles forment un grand rectangle de longueur $6 + 8 + 10 = 24$ cm et de largeur $5$ cm : $24 \\times 5 = 120\\text{ cm}^2$.
Chaque triangle rectangle : $\\dfrac{6 \\times 8}{2} = 24\\text{ cm}^2$, donc $2 \\times 24 = 48\\text{ cm}^2$ pour les deux.
Aire totale : $120 + 48 = 168\\text{ cm}^2$.

**5.** $V = \\text{aire de la base} \\times \\text{hauteur} = 24 \\times 5 = 120\\text{ cm}^3$.`
    },
    {
      id: "5G6-ds-15",
      title: "Le château d'eau",
      difficulty: 3,
      points: 5,
      statement: `La calculatrice est autorisée.

Le réservoir d'un château d'eau a la forme d'un cylindre de révolution de diamètre $10$ m et de hauteur $8$ m. On rappelle que le volume d'un cylindre de rayon $r$ et de hauteur $h$ est $V = \\pi \\times r^2 \\times h$, et que $1\\text{ m}^3 = 1\\,000$ L.

1. Calculer le volume exact du réservoir, puis son arrondi au $\\text{m}^3$.
2. Convertir ce volume arrondi en litres.
3. Le château d'eau alimente un village de $1\\,200$ habitants. Chaque habitant consomme en moyenne $150$ L d'eau par jour. Calculer la consommation journalière du village en litres, puis en $\\text{m}^3$.
4. Le réservoir est plein et n'est plus alimenté. Pendant combien de jours complets le village peut-il être approvisionné ?
5. Un matin, l'eau n'occupe plus que les trois quarts du réservoir. Quelle est la hauteur de l'eau ? Quel volume d'eau reste-t-il (arrondi au $\\text{m}^3$) ?`,
      solution: `**1.** Le rayon est $10 \\div 2 = 5$ m. $V = \\pi \\times 5^2 \\times 8 = 200\\pi\\text{ m}^3$, soit environ $628\\text{ m}^3$ ($200\\pi \\approx 628{,}3$).

**2.** $628\\text{ m}^3 = 628 \\times 1\\,000 = 628\\,000$ L.

**3.** $1\\,200 \\times 150 = 180\\,000$ L par jour, soit $180\\,000 \\div 1\\,000 = 180\\text{ m}^3$ par jour.

**4.** $628{,}3 \\div 180 \\approx 3{,}49$. Le réservoir permet d'approvisionner le village pendant **$3$ jours complets** (au 4e jour, il manquerait de l'eau : $4 \\times 180 = 720 > 628{,}3$).

**5.** La base du cylindre ne change pas : les trois quarts du volume correspondent aux trois quarts de la hauteur, soit $\\dfrac{3}{4} \\times 8 = 6$ m.
Volume restant : $\\pi \\times 5^2 \\times 6 = 150\\pi \\approx 471\\text{ m}^3$ (on retrouve bien $\\dfrac{3}{4} \\times 628{,}3 \\approx 471$).`
    },
    {
      id: "5G6-ds-16",
      title: "La piscine à fond incliné",
      difficulty: 4,
      points: 6,
      statement: `Une piscine a une longueur de $10$ m et une largeur de $4$ m. Sa profondeur est de $1$ m d'un côté (petit bain) et de $2$ m de l'autre côté (grand bain) ; le fond est un plan incliné. Voici sa coupe dans le sens de la longueur (la figure n'est pas à l'échelle).

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:400px;"><svg class="geo-svg-figure" viewBox="0 0 400 175" width="400" height="175" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="40.0,40.0 340.0,40.0 340.0,140.0 40.0,90.0" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="1.8"/><text x="190.0" y="30.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">10 m</text><text x="30.0" y="70.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="end">1 m</text><text x="350.0" y="95.0" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="start">2 m</text><polyline points="49.0,40.0 49.0,49.0 40.0,49.0" fill="none" stroke="currentColor" stroke-width="1.3"/><polyline points="331.0,40.0 331.0,49.0 340.0,49.0" fill="none" stroke="currentColor" stroke-width="1.3"/><text x="130.0" y="162.0" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">fond incliné</text></svg></div>

1. La piscine est un prisme droit « couché ». Quelle est sa base ? Quelle est sa hauteur ?
2. En découpant la base en un rectangle et un triangle, calculer son aire.
3. Calculer le volume de la piscine en $\\text{m}^3$, puis en litres.
4. On remplit la piscine avec une pompe qui débite $4\\,000$ L par heure. Combien de temps faut-il pour la remplir entièrement ?
5. En réalité, on arrête le remplissage quand l'eau arrive à $20$ cm sous le bord. Quel volume d'eau contient alors la piscine ?`,
      solution: `**1.** La base est la coupe dessinée : un quadrilatère ayant deux angles droits (côtés $10$ m, $1$ m, $2$ m et le fond incliné). La hauteur du prisme est la **largeur de la piscine : $4$ m**.

**2.** On trace le segment horizontal à $1$ m sous le bord : on obtient un rectangle de $10$ m sur $1$ m et un triangle rectangle de côtés $10$ m et $2 - 1 = 1$ m.
Rectangle : $10 \\times 1 = 10\\text{ m}^2$. Triangle : $\\dfrac{10 \\times 1}{2} = 5\\text{ m}^2$. Aire de la base : $10 + 5 = 15\\text{ m}^2$.

**3.** $V = \\text{aire de la base} \\times \\text{hauteur} = 15 \\times 4 = 60\\text{ m}^3$, soit $60 \\times 1\\,000 = 60\\,000$ L.

**4.** $60\\,000 \\div 4\\,000 = 15$ : il faut **$15$ heures**.

**5.** La partie vide est un pavé droit de $10$ m sur $4$ m sur $0{,}2$ m : $10 \\times 4 \\times 0{,}2 = 8\\text{ m}^3$.
Volume d'eau : $60 - 8 = 52\\text{ m}^3$, soit $52\\,000$ L.
(Autre méthode : l'eau occupe un prisme de base $15 - 10 \\times 0{,}2 = 13\\text{ m}^2$ et de hauteur $4$ m : $13 \\times 4 = 52\\text{ m}^3$.)`
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
    },
    {
      id: "5D1-ds-09",
      title: "Les emprunts au CDI",
      difficulty: 1,
      points: 4,
      statement: `La documentaliste du collège a relevé le genre des $50$ livres empruntés pendant une semaine.

| Genre | Bande dessinée | Roman | Manga | Documentaire |
|---|---|---|---|---|
| Effectif | $18$ | $12$ | $15$ | $5$ |

1. Vérifier que l'effectif total est bien $50$.
2. Calculer la fréquence de chaque genre, sous forme décimale puis en pourcentage.
3. Écrire la fréquence des mangas sous la forme d'une fraction irréductible.
4. Quel pourcentage des livres empruntés sont des livres dessinés (bandes dessinées ou mangas) ?`,
      solution: `**1.** $18 + 12 + 15 + 5 = 50$ : l'effectif total est bien $50$.

**2.** La fréquence d'une valeur est égale à $\\dfrac{\\text{effectif}}{\\text{effectif total}}$.
- Bande dessinée : $\\dfrac{18}{50} = 0{,}36$, soit $36\\,\\%$.
- Roman : $\\dfrac{12}{50} = 0{,}24$, soit $24\\,\\%$.
- Manga : $\\dfrac{15}{50} = 0{,}3$, soit $30\\,\\%$.
- Documentaire : $\\dfrac{5}{50} = 0{,}1$, soit $10\\,\\%$.
(Vérification : $36 + 24 + 30 + 10 = 100$.)

**3.** $\\dfrac{15}{50} = \\dfrac{15 \\div 5}{50 \\div 5} = \\dfrac{3}{10}$, fraction irréductible car $3$ et $10$ n'ont pas de diviseur commun autre que $1$.

**4.** $18 + 15 = 33$ livres dessinés, et $\\dfrac{33}{50} = \\dfrac{66}{100}$ : cela représente $66\\,\\%$ des emprunts (on retrouve $36\\,\\% + 30\\,\\%$).`
    },
    {
      id: "5D1-ds-10",
      title: "Le vote du menu de fin d'année",
      difficulty: 2,
      points: 5,
      statement: `Les $60$ élèves de 5e ont voté pour le menu du repas de fin d'année. Les résultats sont représentés par un diagramme circulaire dont les secteurs ont les angles suivants :
- pizza : $144^\\circ$ ;
- burger : $90^\\circ$ ;
- couscous : $72^\\circ$ ;
- lasagnes : $54^\\circ$.

1. Vérifier que la somme des angles est cohérente.
2. Quel angle représente un élève ?
3. Retrouver le nombre de votes pour chaque menu.
4. Calculer la fréquence, en pourcentage, de chaque menu.
5. Le menu choisi doit obtenir plus de la moitié des voix, sinon on fait un second tour. Faut-il un second tour ? Justifier.`,
      solution: `**1.** $144 + 90 + 72 + 54 = 360$ : les secteurs remplissent bien tout le disque ($360^\\circ$).

**2.** Les $60$ élèves se partagent $360^\\circ$ : un élève correspond à $360 \\div 60 = 6^\\circ$.

**3.** On divise chaque angle par $6$ :
- pizza : $144 \\div 6 = 24$ votes ;
- burger : $90 \\div 6 = 15$ votes ;
- couscous : $72 \\div 6 = 12$ votes ;
- lasagnes : $54 \\div 6 = 9$ votes.
(Vérification : $24 + 15 + 12 + 9 = 60$.)

**4.** Pizza : $\\dfrac{24}{60} = 0{,}4 = 40\\,\\%$ ; burger : $\\dfrac{15}{60} = 0{,}25 = 25\\,\\%$ ; couscous : $\\dfrac{12}{60} = 0{,}2 = 20\\,\\%$ ; lasagnes : $\\dfrac{9}{60} = 0{,}15 = 15\\,\\%$.

**5.** La moitié des voix correspond à $30$ votes (ou à un angle de $180^\\circ$). Le menu arrivé en tête, la pizza, n'a que $24$ votes ($40\\,\\%$, angle $144^\\circ < 180^\\circ$) : il faut un **second tour**.`
    },
    {
      id: "5D1-ds-11",
      title: "Une erreur de saisie",
      difficulty: 3,
      points: 5,
      statement: `Un professeur a calculé que la moyenne des $24$ élèves de sa classe à un contrôle est $11{,}5$ sur $20$.

1. Calculer la somme des notes des $24$ élèves.
2. En relisant les copies, il s'aperçoit qu'il a saisi la note $8$ au lieu de $14$ pour l'une d'elles. Calculer la moyenne corrigée.
3. Deux élèves absents passent ensuite le contrôle et obtiennent $15$ et $9$.
   a) Sans calculer, dire si la moyenne de la classe va augmenter ou diminuer. Justifier.
   b) Calculer la nouvelle moyenne de la classe, arrondie au centième.
4. Un élève affirme : « Si on ajoute une note égale à la moyenne, la moyenne ne change pas. » Vérifier cette affirmation sur l'exemple de la question 2.`,
      solution: `**1.** Moyenne $= \\dfrac{\\text{somme des notes}}{\\text{nombre de notes}}$, donc somme $= 11{,}5 \\times 24 = 276$.

**2.** La somme corrigée est $276 - 8 + 14 = 282$. Moyenne corrigée : $\\dfrac{282}{24} = 11{,}75$.

**3.** a) Les deux nouvelles notes ont pour moyenne $\\dfrac{15 + 9}{2} = 12$, ce qui est plus que $11{,}75$ : la moyenne de la classe va **augmenter** (légèrement).
b) Nouvelle somme : $282 + 15 + 9 = 306$ pour $26$ élèves. Moyenne : $\\dfrac{306}{26} \\approx 11{,}77$.

**4.** On ajoute la note $11{,}75$ aux $24$ notes corrigées : somme $282 + 11{,}75 = 293{,}75$ pour $25$ notes, et $\\dfrac{293{,}75}{25} = 11{,}75$. La moyenne ne change pas : l'affirmation est vérifiée sur cet exemple.`
    },
    {
      id: "5D1-ds-12",
      title: "Les séances de sport de la semaine",
      difficulty: 4,
      points: 6,
      statement: `On a demandé aux $25$ élèves d'une classe combien de séances de sport ils pratiquent par semaine (en dehors du collège). Le tableau a été en partie effacé.

| Nombre de séances | $0$ | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|---|
| Effectif | | $5$ | | $6$ | $2$ |

On sait aussi que $8\\,\\%$ des élèves ne pratiquent aucune séance.

1. Calculer l'effectif de la valeur $0$, puis celui de la valeur $2$.
2. Calculer le nombre moyen de séances par élève.
3. On veut représenter la série par un diagramme circulaire. Calculer l'angle du secteur correspondant à $2$ séances.
4. Quel pourcentage des élèves pratique au moins $2$ séances par semaine ?
5. Des élèves d'une autre classe, qui pratiquent tous $4$ séances par semaine, rejoignent le groupe. Combien doivent-ils être au minimum pour que la moyenne du groupe dépasse $2{,}5$ séances ? Justifier par des essais.`,
      solution: `**1.** $8\\,\\%$ de $25$ : $\\dfrac{8}{100} \\times 25 = 2$. L'effectif de la valeur $0$ est $2$.
Effectif de la valeur $2$ : $25 - (2 + 5 + 6 + 2) = 25 - 15 = 10$.

**2.** Nombre total de séances : $0 \\times 2 + 1 \\times 5 + 2 \\times 10 + 3 \\times 6 + 4 \\times 2 = 0 + 5 + 20 + 18 + 8 = 51$.
Moyenne : $\\dfrac{51}{25} = 2{,}04$ séances par élève.

**3.** Un élève correspond à $360 \\div 25 = 14{,}4^\\circ$. Pour $10$ élèves : $10 \\times 14{,}4 = 144^\\circ$.

**4.** $10 + 6 + 2 = 18$ élèves pratiquent au moins $2$ séances ; $\\dfrac{18}{25} = \\dfrac{72}{100} = 72\\,\\%$.

**5.** Avec $n$ élèves de plus à $4$ séances, il y a $51 + 4n$ séances pour $25 + n$ élèves.
- $n = 7$ : $\\dfrac{51 + 28}{32} = \\dfrac{79}{32} \\approx 2{,}47$, ce qui ne dépasse pas $2{,}5$.
- $n = 8$ : $\\dfrac{51 + 32}{33} = \\dfrac{83}{33} \\approx 2{,}52$, ce qui dépasse $2{,}5$.
Plus on ajoute d'élèves à $4$ séances, plus la moyenne augmente ; il faut donc au minimum **$8$ élèves**.`
    },
    {
      id: "5D1-ds-13",
      title: "Le petit-déjeuner des élèves",
      difficulty: 1,
      points: 4,
      statement: `L'infirmière du collège a demandé à $20$ élèves de 5e ce qu'ils mangent le plus souvent au petit-déjeuner. Elle a noté les réponses avec un code : C (céréales), T (tartines), F (fruits), R (rien).

$$\\text{C} \\;\\; \\text{T} \\;\\; \\text{C} \\;\\; \\text{R} \\;\\; \\text{F} \\;\\; \\text{C} \\;\\; \\text{T} \\;\\; \\text{C} \\;\\; \\text{T} \\;\\; \\text{R} \\;\\; \\text{C} \\;\\; \\text{F} \\;\\; \\text{C} \\;\\; \\text{T} \\;\\; \\text{C} \\;\\; \\text{C} \\;\\; \\text{R} \\;\\; \\text{T} \\;\\; \\text{C} \\;\\; \\text{F}$$

1. Recopier et compléter le tableau des effectifs.

| Petit-déjeuner | Céréales | Tartines | Fruits | Rien | Total |
|---|---|---|---|---|---|
| Effectif | … | … | … | … | … |

2. Calculer la fréquence des élèves qui mangent des tartines, sous la forme d'une fraction, d'un nombre décimal puis d'un pourcentage.
3. Calculer, en pourcentage, la fréquence de chacune des autres réponses. Vérifier que la somme des fréquences est égale à $100\\,\\%$.
4. Quel pourcentage des élèves interrogés prend un petit-déjeuner ?`,
      solution: `**1.** On compte chaque code (on peut barrer les réponses au fur et à mesure pour n'en oublier aucune).

| Petit-déjeuner | Céréales | Tartines | Fruits | Rien | Total |
|---|---|---|---|---|---|
| Effectif | $9$ | $5$ | $3$ | $3$ | $20$ |

On vérifie : $9 + 5 + 3 + 3 = 20$, c'est bien le nombre d'élèves interrogés.

**2.** Fréquence des tartines : $\\dfrac{5}{20} = \\dfrac{25}{100} = 0{,}25$, soit $25\\,\\%$.

**3.**
- Céréales : $\\dfrac{9}{20} = \\dfrac{45}{100}$, soit $45\\,\\%$.
- Fruits : $\\dfrac{3}{20} = \\dfrac{15}{100}$, soit $15\\,\\%$.
- Rien : $\\dfrac{3}{20} = \\dfrac{15}{100}$, soit $15\\,\\%$.

Somme : $45 + 25 + 15 + 15 = 100$, on obtient bien $100\\,\\%$.

**4.** Les élèves qui prennent un petit-déjeuner sont ceux qui n'ont pas répondu « rien » : $45 + 25 + 15 = 85$, soit $85\\,\\%$ (ou $100\\,\\% - 15\\,\\% = 85\\,\\%$).`
    },
    {
      id: "5D1-ds-14",
      title: "Deux joueuses de basket",
      difficulty: 2,
      points: 5,
      statement: `L'entraîneuse d'un club de basket hésite entre deux joueuses pour le prochain match. Voici le nombre de points marqués par chacune lors des cinq derniers matchs.

| Match | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| Points de Maëlys | $12$ | $15$ | $8$ | $20$ | $10$ |
| Points de Jade | $13$ | $12$ | $14$ | $11$ | $15$ |

1. Calculer le nombre moyen de points marqués par match par Maëlys.
2. Calculer le nombre moyen de points marqués par match par Jade. Peut-on départager les deux joueuses avec leur moyenne ?
3. Pour chaque joueuse, calculer l'écart entre son meilleur match et son moins bon match. Laquelle est la plus régulière ?
4. Au sixième match, Maëlys marque $25$ points. Calculer sa nouvelle moyenne sur les six matchs.`,
      solution: `**1.** Total de Maëlys : $12 + 15 + 8 + 20 + 10 = 65$ points en $5$ matchs.
Moyenne : $\\dfrac{65}{5} = 13$ points par match.

**2.** Total de Jade : $13 + 12 + 14 + 11 + 15 = 65$ points.
Moyenne : $\\dfrac{65}{5} = 13$ points par match.
Les deux joueuses ont la **même moyenne** : la moyenne seule ne permet pas de les départager.

**3.** Maëlys : $20 - 8 = 12$ points d'écart. Jade : $15 - 11 = 4$ points d'écart.
Les scores de Jade sont beaucoup plus resserrés autour de $13$ : **Jade est la plus régulière**. (Maëlys peut faire de très bons matchs, mais aussi de moins bons.)

**4.** Nouveau total de Maëlys : $65 + 25 = 90$ points en $6$ matchs.
Nouvelle moyenne : $\\dfrac{90}{6} = 15$ points par match.`
    },
    {
      id: "5D1-ds-15",
      title: "Le sondage sur la cantine",
      difficulty: 3,
      points: 5,
      statement: `Le conseil de la vie collégienne a interrogé $240$ élèves demi-pensionnaires sur la qualité des repas. Chaque élève a donné une seule réponse. Les résultats, exprimés en fréquences, sont représentés ci-dessous.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 360 262" width="360" height="262" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="60" y1="220" x2="340" y2="220" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><text x="52" y="224" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">0 %</text><line x1="60" y1="204" x2="340" y2="204" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="60" y1="188" x2="340" y2="188" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><text x="52" y="192" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">10 %</text><line x1="60" y1="172" x2="340" y2="172" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="60" y1="156" x2="340" y2="156" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><text x="52" y="160" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">20 %</text><line x1="60" y1="140" x2="340" y2="140" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="60" y1="124" x2="340" y2="124" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><text x="52" y="128" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">30 %</text><line x1="60" y1="108" x2="340" y2="108" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="60" y1="92" x2="340" y2="92" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><text x="52" y="96" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">40 %</text><line x1="60" y1="76" x2="340" y2="76" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><line x1="60" y1="60" x2="340" y2="60" stroke="currentColor" stroke-opacity="0.18" stroke-width="1"/><text x="52" y="64" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">50 %</text><line x1="60" y1="220" x2="340" y2="220" stroke="currentColor" stroke-width="1.6"/><line x1="60" y1="220" x2="60" y2="45" stroke="currentColor" stroke-width="1.6"/><rect x="82" y="156" width="36" height="64" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1.2" /><text x="100" y="236" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">Très</text><text x="100" y="250" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">satisfaits</text><rect x="152" y="76" width="36" height="144" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1.2" /><text x="170" y="236" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">Plutôt</text><text x="170" y="250" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">satisfaits</text><rect x="222" y="140" width="36" height="80" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1.2" /><text x="240" y="236" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">Peu</text><text x="240" y="250" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">satisfaits</text><rect x="292" y="188" width="36" height="32" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1.2" /><text x="310" y="236" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">Pas</text><text x="310" y="250" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">satisfaits</text><text x="66" y="36" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="start">Fréquence (en %)</text></svg></div>

1. Lire la fréquence de chaque réponse et vérifier que leur somme est cohérente.
2. Calculer l'effectif de chaque réponse.
3. Combien d'élèves sont « très satisfaits » ou « plutôt satisfaits » ? Quel pourcentage des élèves interrogés cela représente-t-il ?
4. L'année suivante, on interroge $270$ élèves : $162$ d'entre eux sont « très satisfaits » ou « plutôt satisfaits ».
Le principal affirme : « La satisfaction a augmenté, puisque $162$ élèves sont satisfaits cette année, contre $156$ l'an dernier. » A-t-il raison ? Justifier par un calcul de fréquence.`,
      solution: `**1.** On lit : très satisfaits $20\\,\\%$ ; plutôt satisfaits $45\\,\\%$ ; peu satisfaits $25\\,\\%$ ; pas satisfaits $10\\,\\%$.
Somme : $20 + 45 + 25 + 10 = 100$ : on retrouve bien $100\\,\\%$ (tous les élèves ont donné une réponse).

**2.** Pour calculer $p\\,\\%$ de $240$, on multiplie $240$ par $\\dfrac{p}{100}$ :
- très satisfaits : $240 \\times \\dfrac{20}{100} = 48$ élèves ;
- plutôt satisfaits : $240 \\times \\dfrac{45}{100} = 108$ élèves ;
- peu satisfaits : $240 \\times \\dfrac{25}{100} = 60$ élèves ;
- pas satisfaits : $240 \\times \\dfrac{10}{100} = 24$ élèves.

Vérification : $48 + 108 + 60 + 24 = 240$.

**3.** $48 + 108 = 156$ élèves, soit $20\\,\\% + 45\\,\\% = 65\\,\\%$ des élèves interrogés.

**4.** L'année suivante, la fréquence des élèves satisfaits est $\\dfrac{162}{270}$. On simplifie : $\\dfrac{162}{270} = \\dfrac{162 \\div 27}{270 \\div 27} = \\dfrac{6}{10} = 60\\,\\%$.
Il y a bien plus d'élèves satisfaits ($162$ au lieu de $156$), mais on a interrogé plus d'élèves : la **proportion** d'élèves satisfaits est passée de $65\\,\\%$ à $60\\,\\%$. Le principal **a tort** : la satisfaction a diminué. Pour comparer deux groupes d'effectifs différents, il faut comparer les fréquences, pas les effectifs.`
    },
    {
      id: "5D1-ds-16",
      title: "La moyenne de deux groupes",
      difficulty: 4,
      points: 6,
      statement: `Une classe de $30$ élèves est partagée en deux groupes pour un devoir de sciences :
- le groupe A compte $12$ élèves et sa moyenne est $13$ sur $20$ ;
- le groupe B compte $18$ élèves et sa moyenne est $10{,}5$ sur $20$.

Tom affirme : « La moyenne de la classe est la moyenne de $13$ et de $10{,}5$, c'est-à-dire $11{,}75$. »

1. Calculer la somme des notes des élèves du groupe A.
2. Calculer la somme des notes des élèves du groupe B.
3. En déduire la moyenne de la classe entière. Tom a-t-il raison ? Expliquer son erreur.
4. Un nouvel élève arrive dans la classe et fait le même devoir. Quelle note doit-il obtenir pour que la moyenne des $31$ élèves soit égale à $11{,}6$ ?`,
      solution: `**1.** Moyenne $=$ somme des notes $\\div$ effectif, donc somme des notes $=$ moyenne $\\times$ effectif.
Groupe A : $13 \\times 12 = 156$.

**2.** Groupe B : $10{,}5 \\times 18 = 189$.

**3.** Somme des notes de la classe : $156 + 189 = 345$, pour $12 + 18 = 30$ élèves.
Moyenne de la classe : $\\dfrac{345}{30} = 11{,}5$.
Tom a **tort** ($11{,}5 \\ne 11{,}75$). Il a fait comme si les deux groupes avaient le même effectif. Or le groupe B, dont la moyenne est la plus basse, compte plus d'élèves : il « pèse » davantage dans la moyenne de la classe, qui est donc plus proche de $10{,}5$ que de $13$.

**4.** Pour avoir une moyenne de $11{,}6$ avec $31$ élèves, la somme des notes doit être $11{,}6 \\times 31 = 359{,}6$.
Il manque $359{,}6 - 345 = 14{,}6$ : le nouvel élève doit obtenir **$14{,}6$ sur $20$**.
Vérification : $\\dfrac{345 + 14{,}6}{31} = \\dfrac{359{,}6}{31} = 11{,}6$.`
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
    },
    {
      id: "5D2-ds-09",
      title: "Le dé à huit faces",
      difficulty: 1,
      points: 4,
      statement: `On lance un dé équilibré à huit faces numérotées de $1$ à $8$ et on note le numéro obtenu.

On considère les événements suivants :
- A : « obtenir un nombre pair » ;
- B : « obtenir un multiple de $3$ » ;
- C : « obtenir $9$ » ;
- D : « obtenir un nombre inférieur ou égal à $8$ » ;
- E : « ne pas obtenir $1$ ».

1. Pourquoi les issues de cette expérience sont-elles équiprobables ? Quelle est la probabilité de chaque issue ?
2. Calculer la probabilité de chacun des événements A, B, C, D et E.
3. Comment appelle-t-on l'événement C ? et l'événement D ?
4. Tracer une échelle de probabilité de $0$ à $1$ (de longueur $8$ cm) et y placer les cinq événements.`,
      solution: `**1.** Le dé est équilibré : chacune des $8$ faces a la même chance d'apparaître. Chaque issue a donc pour probabilité $\\dfrac{1}{8}$.

**2.**
- A est réalisé par $2$, $4$, $6$, $8$ : $P(A) = \\dfrac{4}{8} = \\dfrac{1}{2}$.
- B est réalisé par $3$ et $6$ : $P(B) = \\dfrac{2}{8} = \\dfrac{1}{4}$.
- C n'est réalisé par aucune issue : $P(C) = 0$.
- D est réalisé par les $8$ issues : $P(D) = \\dfrac{8}{8} = 1$.
- E est réalisé par $2$, $3$, $4$, $5$, $6$, $7$, $8$ : $P(E) = \\dfrac{7}{8}$.

**3.** C est un événement **impossible** (probabilité $0$) ; D est un événement **certain** (probabilité $1$).

**4.** Sur l'échelle de $8$ cm, $1$ cm représente $\\dfrac{1}{8}$ : C est placé à $0$ cm, B à $2$ cm, A à $4$ cm (au milieu), E à $7$ cm et D à $8$ cm.`
    },
    {
      id: "5D2-ds-10",
      title: "Tirer une lettre au hasard",
      difficulty: 2,
      points: 5,
      statement: `On écrit chacune des lettres du mot PROBABILITE sur un carton (un carton par lettre, donc certaines lettres sont écrites plusieurs fois). On mélange les cartons, retournés, et on en tire un au hasard.

1. Combien y a-t-il de cartons ? Les issues « obtenir P », « obtenir B », … sont-elles toutes équiprobables ? Justifier.
2. Calculer la probabilité de tirer la lettre B, puis celle de tirer la lettre T.
3. On rappelle que les voyelles sont A, E, I, O, U et Y. Calculer la probabilité de l'événement V : « tirer une voyelle ».
4. Décrire par une phrase l'événement contraire de V et calculer sa probabilité.
5. Quelle est la probabilité de tirer la lettre Z ?`,
      solution: `**1.** Le mot PROBABILITE comporte $11$ lettres, donc il y a $11$ cartons, chacun ayant la même chance d'être tiré.
Les lettres, elles, ne sont pas équiprobables : B et I figurent sur $2$ cartons chacune, alors que P, R, O, A, L, T et E ne figurent que sur un carton. On a plus de chances de tirer un B qu'un P.

**2.** $P(\\text{B}) = \\dfrac{2}{11}$ (deux cartons sur onze) et $P(\\text{T}) = \\dfrac{1}{11}$.

**3.** Les cartons portant une voyelle sont O, A, I, I, E : il y en a $5$. Donc $P(V) = \\dfrac{5}{11}$.

**4.** L'événement contraire de V est « tirer une consonne ». Il est réalisé par P, R, B, B, L, T, soit $6$ cartons : sa probabilité est $\\dfrac{6}{11}$. On vérifie que $\\dfrac{5}{11} + \\dfrac{6}{11} = 1$.

**5.** Aucun carton ne porte la lettre Z : c'est un événement impossible, de probabilité $0$.`
    },
    {
      id: "5D2-ds-11",
      title: "La tombola de l'association",
      difficulty: 3,
      points: 5,
      statement: `Pour sa tombola, une association vend $200$ billets numérotés. Les numéros gagnants seront tirés au hasard : il y a $1$ gros lot, $4$ lots moyens et $15$ petits lots (un billet gagne au plus un lot). Noa achète un billet.

1. Quelle est la probabilité que le billet de Noa gagne le gros lot ?
2. Quelle est la probabilité qu'il gagne un lot (quel qu'il soit) ? Donner le résultat sous forme de fraction simplifiée puis de pourcentage.
3. Quelle est la probabilité qu'il ne gagne rien ?
4. L'association voudrait que la probabilité de gagner un lot soit égale à $\\dfrac{1}{8}$, sans changer le nombre de billets. Combien de petits lots doit-elle ajouter ?
5. Une autre tombola propose $16$ lots pour $150$ billets. Dans laquelle des deux tombolas (avant l'ajout de la question 4) a-t-on le plus de chances de gagner un lot ? Justifier.`,
      solution: `On suppose que chaque billet a la même chance d'être tiré.

**1.** Un seul billet sur $200$ gagne le gros lot : la probabilité est $\\dfrac{1}{200}$.

**2.** Il y a $1 + 4 + 15 = 20$ billets gagnants. La probabilité de gagner un lot est $\\dfrac{20}{200} = \\dfrac{1}{10}$, soit $10\\,\\%$.

**3.** « Ne rien gagner » est l'événement contraire de « gagner un lot » : sa probabilité est $1 - \\dfrac{1}{10} = \\dfrac{9}{10}$, soit $90\\,\\%$.

**4.** On veut $\\dfrac{\\text{nombre de lots}}{200} = \\dfrac{1}{8}$, donc le nombre de lots doit être $200 \\div 8 = 25$. Il faut ajouter $25 - 20 = 5$ petits lots.

**5.** Dans la seconde tombola, la probabilité de gagner un lot est $\\dfrac{16}{150} \\approx 0{,}107$, alors qu'elle vaut $\\dfrac{1}{10} = 0{,}1$ dans la première. On a donc un peu plus de chances de gagner avec la **seconde tombola**.`
    },
    {
      id: "5D2-ds-12",
      title: "Deux pièces de monnaie",
      difficulty: 4,
      points: 6,
      statement: `On lance deux pièces de monnaie équilibrées, une pièce de $1$ € et une pièce de $2$ €, et on note la face obtenue par chacune (P pour pile, F pour face). L'arbre ci-dessous représente l'expérience : on lit d'abord le résultat de la pièce de $1$ €, puis celui de la pièce de $2$ €.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 300 240" width="300" height="240" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="20" y1="110" x2="118" y2="58" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="110" x2="118" y2="162" stroke="currentColor" stroke-width="1.5"/><line x1="142" y1="55" x2="238" y2="28" stroke="currentColor" stroke-width="1.5"/><line x1="142" y1="55" x2="238" y2="82" stroke="currentColor" stroke-width="1.5"/><line x1="142" y1="165" x2="238" y2="138" stroke="currentColor" stroke-width="1.5"/><line x1="142" y1="165" x2="238" y2="192" stroke="currentColor" stroke-width="1.5"/><circle cx="20" cy="110" r="4" fill="currentColor"/><text x="130" y="60" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">P</text><text x="130" y="170" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">F</text><text x="250" y="33" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">P</text><text x="250" y="87" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">F</text><text x="250" y="143" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">P</text><text x="250" y="197" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">F</text><text x="130" y="228" text-anchor="middle" font-size="15" fill="currentColor">pièce de 1 €</text><text x="250" y="228" text-anchor="middle" font-size="15" fill="currentColor">pièce de 2 €</text></svg></div>

Hugo affirme : « Il y a trois résultats possibles : deux piles, deux faces, ou un pile et un face. Chacun a donc une probabilité de $\\dfrac{1}{3}$. »

1. En suivant les branches de l'arbre, écrire la liste des issues de l'expérience (par exemple PF signifie : pile pour la pièce de $1$ €, face pour la pièce de $2$ €). Combien y en a-t-il ?
2. Les pièces étant équilibrées, toutes ces issues ont la même probabilité. Quelle est la probabilité de chacune ?
3. a) Quelles issues réalisent l'événement « obtenir deux piles » ? Quelle est sa probabilité ?
   b) Quelles issues réalisent l'événement « obtenir un pile et un face » ? Quelle est sa probabilité ?
   c) Hugo a-t-il raison ? Expliquer son erreur.
4. Hugo et Lina jouent : Hugo gagne si les deux pièces tombent sur la même face, Lina gagne sinon. Le jeu est-il équitable ? Justifier.`,
      solution: `**1.** Il y a $4$ chemins dans l'arbre, donc $4$ issues : **PP, PF, FP, FF**.

**2.** Les $4$ issues ont la même probabilité : chacune a pour probabilité $\\dfrac{1}{4}$.

**3.** a) « Deux piles » n'est réalisé que par PP : probabilité $\\dfrac{1}{4}$.
b) « Un pile et un face » est réalisé par PF et FP : probabilité $\\dfrac{2}{4} = \\dfrac{1}{2}$.
c) Hugo a **tort** : les trois résultats qu'il cite ne sont pas équiprobables. Il oublie que « un pile et un face » peut se produire de deux façons (pile avec la pièce de $1$ € ou pile avec la pièce de $2$ €) : ce résultat est deux fois plus probable que « deux piles ».

**4.** Hugo gagne avec PP ou FF : probabilité $\\dfrac{2}{4} = \\dfrac{1}{2}$. Lina gagne avec PF ou FP : probabilité $\\dfrac{2}{4} = \\dfrac{1}{2}$. Les deux joueurs ont la même probabilité de gagner : le jeu est **équitable**.`
    },
    {
      id: "5D2-ds-13",
      title: "Tirer au sort un élève de la classe",
      difficulty: 1,
      points: 4,
      statement: `Une classe de 5e compte $25$ élèves : $14$ filles et $11$ garçons. Parmi ces élèves, $6$ portent des lunettes : $4$ filles et $2$ garçons. Tous les élèves de la classe ont $11$ ou $12$ ans.
Pour désigner le délégué au conseil d'administration, le professeur écrit le nom de chaque élève sur un papier, mélange les papiers dans une boîte et en tire un au hasard.

1. Pourquoi s'agit-il d'une expérience aléatoire ? Chaque élève a-t-il la même chance d'être tiré ?
2. Calculer la probabilité que l'élève tiré soit une fille, puis celle que ce soit un garçon. Que remarque-t-on en additionnant ces deux probabilités ?
3. Calculer la probabilité que l'élève tiré porte des lunettes, puis celle que ce soit un garçon qui porte des lunettes.
4. Donner la probabilité de chacun des événements suivants, en précisant s'il est certain ou impossible :
   a) « l'élève tiré a moins de $15$ ans » ;
   b) « l'élève tiré a $20$ ans ».
5. Ranger les six événements des questions 2, 3 et 4 du moins probable au plus probable.`,
      solution: `**1.** On connaît toutes les issues possibles (les $25$ élèves), mais on ne peut pas prévoir lequel sera tiré : c'est une expérience aléatoire. Les papiers sont identiques et mélangés : chaque élève a la même chance d'être tiré, les $25$ issues sont équiprobables.

**2.** $P(\\text{fille}) = \\dfrac{14}{25}$ et $P(\\text{garçon}) = \\dfrac{11}{25}$.
$\\dfrac{14}{25} + \\dfrac{11}{25} = \\dfrac{25}{25} = 1$ : « tirer un garçon » est l'événement contraire de « tirer une fille », la somme de leurs probabilités vaut $1$.

**3.** $P(\\text{lunettes}) = \\dfrac{6}{25}$ ; $P(\\text{garçon à lunettes}) = \\dfrac{2}{25}$.

**4.** a) Tous les élèves ont $11$ ou $12$ ans, donc moins de $15$ ans : l'événement est **certain**, sa probabilité est $1$.
b) Aucun élève n'a $20$ ans : l'événement est **impossible**, sa probabilité est $0$.

**5.** Les probabilités ont toutes le même dénominateur $25$ (on écrit $0 = \\dfrac{0}{25}$ et $1 = \\dfrac{25}{25}$) : il suffit de comparer les numérateurs.
« a $20$ ans » ($0$) $<$ « garçon à lunettes » $\\left(\\dfrac{2}{25}\\right)$ $<$ « lunettes » $\\left(\\dfrac{6}{25}\\right)$ $<$ « garçon » $\\left(\\dfrac{11}{25}\\right)$ $<$ « fille » $\\left(\\dfrac{14}{25}\\right)$ $<$ « moins de $15$ ans » ($1$).`
    },
    {
      id: "5D2-ds-14",
      title: "La roue colorée",
      difficulty: 2,
      points: 5,
      statement: `Une roue de loterie est partagée en $8$ secteurs identiques, numérotés de $1$ à $8$ et coloriés comme sur la figure. On fait tourner la roue ; lorsqu'elle s'arrête, la flèche désigne un secteur au hasard.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:300px;"><svg class="geo-svg-figure" viewBox="0 0 300 285" width="300" height="285" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M150,140 L150.0,30.0 A110,110 0 0 1 227.8,62.2 Z" fill="rgba(239,68,68,0.55)" stroke="currentColor" stroke-width="1.5"/><text x="178.6" y="75.9" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">1</text><text x="166.8" y="103.3" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="currentColor" text-anchor="middle">R</text><path d="M150,140 L227.8,62.2 A110,110 0 0 1 260.0,140.0 Z" fill="rgba(239,68,68,0.55)" stroke="currentColor" stroke-width="1.5"/><text x="219.1" y="116.4" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">2</text><text x="190.7" y="127.2" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="currentColor" text-anchor="middle">R</text><path d="M150,140 L260.0,140.0 A110,110 0 0 1 227.8,217.8 Z" fill="rgba(239,68,68,0.55)" stroke="currentColor" stroke-width="1.5"/><text x="219.1" y="173.6" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">3</text><text x="190.7" y="160.8" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="currentColor" text-anchor="middle">R</text><path d="M150,140 L227.8,217.8 A110,110 0 0 1 150.0,250.0 Z" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1.5"/><text x="178.6" y="214.1" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">4</text><text x="166.8" y="184.7" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="currentColor" text-anchor="middle">B</text><path d="M150,140 L150.0,250.0 A110,110 0 0 1 72.2,217.8 Z" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1.5"/><text x="121.4" y="214.1" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">5</text><text x="133.2" y="184.7" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="currentColor" text-anchor="middle">B</text><path d="M150,140 L72.2,217.8 A110,110 0 0 1 40.0,140.0 Z" fill="rgba(34,197,94,0.55)" stroke="currentColor" stroke-width="1.5"/><text x="80.9" y="173.6" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">6</text><text x="109.3" y="160.8" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="currentColor" text-anchor="middle">V</text><path d="M150,140 L40.0,140.0 A110,110 0 0 1 72.2,62.2 Z" fill="rgba(34,197,94,0.55)" stroke="currentColor" stroke-width="1.5"/><text x="80.9" y="116.4" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">7</text><text x="109.3" y="127.2" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="currentColor" text-anchor="middle">V</text><path d="M150,140 L72.2,62.2 A110,110 0 0 1 150.0,30.0 Z" fill="rgba(234,179,8,0.6)" stroke="currentColor" stroke-width="1.5"/><text x="121.4" y="75.9" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="currentColor" text-anchor="middle">8</text><text x="133.2" y="103.3" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="currentColor" text-anchor="middle">J</text><polygon points="142,12 158,12 150,34" fill="currentColor"/><text x="150" y="272" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">R : rouge · B : bleu · V : vert · J : jaune</text></svg></div>

1. Quelle est la probabilité que la flèche désigne le secteur numéro $5$ ?
2. Calculer la probabilité d'obtenir chacune des couleurs : rouge, bleu, vert, jaune. Vérifier que la somme de ces probabilités est égale à $1$.
3. Calculer la probabilité des événements suivants :
   a) A : « obtenir un numéro pair » ;
   b) B : « obtenir un secteur rouge portant un numéro pair ».
4. Décrire par une phrase l'événement contraire de « obtenir un secteur rouge » et calculer sa probabilité.
5. Lou et Tim jouent avec cette roue : Lou gagne si la flèche s'arrête sur un secteur rouge, Tim gagne si elle s'arrête sur un secteur vert ou jaune ; sur un secteur bleu, personne ne gagne et on relance. Ce jeu est-il équitable ? Justifier.`,
      solution: `Les $8$ secteurs sont identiques : les $8$ issues sont équiprobables, chacune a pour probabilité $\\dfrac{1}{8}$.

**1.** $P(\\text{secteur } 5) = \\dfrac{1}{8}$.

**2.** Rouge : secteurs $1$, $2$, $3$, donc $P(\\text{rouge}) = \\dfrac{3}{8}$.
Bleu : secteurs $4$ et $5$, donc $P(\\text{bleu}) = \\dfrac{2}{8} = \\dfrac{1}{4}$.
Vert : secteurs $6$ et $7$, donc $P(\\text{vert}) = \\dfrac{2}{8} = \\dfrac{1}{4}$.
Jaune : secteur $8$, donc $P(\\text{jaune}) = \\dfrac{1}{8}$.
Somme : $\\dfrac{3}{8} + \\dfrac{2}{8} + \\dfrac{2}{8} + \\dfrac{1}{8} = \\dfrac{8}{8} = 1$.

**3.** a) Les numéros pairs sont $2$, $4$, $6$ et $8$ : $P(A) = \\dfrac{4}{8} = \\dfrac{1}{2}$.
b) Parmi les secteurs rouges ($1$, $2$, $3$), seul le $2$ est pair : $P(B) = \\dfrac{1}{8}$.

**4.** Le contraire de « obtenir un secteur rouge » est « obtenir un secteur bleu, vert ou jaune » (c'est-à-dire « ne pas obtenir un secteur rouge »).
Sa probabilité est $1 - \\dfrac{3}{8} = \\dfrac{5}{8}$ (secteurs $4$, $5$, $6$, $7$, $8$).

**5.** Lou gagne avec les secteurs $1$, $2$, $3$ : probabilité $\\dfrac{3}{8}$.
Tim gagne avec les secteurs $6$, $7$, $8$ : probabilité $\\dfrac{2}{8} + \\dfrac{1}{8} = \\dfrac{3}{8}$.
Les deux joueurs ont la même probabilité de gagner : le jeu est **équitable** (même si aucun des deux n'a une chance sur deux de gagner à chaque lancer).`
    },
    {
      id: "5D2-ds-15",
      title: "Le lancer de punaise",
      difficulty: 3,
      points: 5,
      statement: `Une punaise lancée sur une table peut retomber « pointe en haut » ou « pointe en bas » (couchée sur le côté). Des élèves ont lancé un grand nombre de fois la même punaise et ont noté, au fur et à mesure, le nombre total de lancers « pointe en haut ».

| Nombre de lancers | $50$ | $100$ | $500$ | $1\\,000$ |
|---|---|---|---|---|
| Nombre de « pointe en haut » | $31$ | $58$ | $304$ | $612$ |
| Fréquence de « pointe en haut » | … | … | … | … |

1. Peut-on calculer la probabilité d'obtenir « pointe en haut » comme pour une pièce de monnaie ou un dé ? Justifier.
2. Recopier et compléter la dernière ligne du tableau (fréquences écrites sous forme décimale).
3. Comment les fréquences évoluent-elles lorsque le nombre de lancers augmente ?
4. Proposer une estimation de la probabilité d'obtenir « pointe en haut », puis de celle d'obtenir « pointe en bas ».
5. On lance cette punaise $3\\,000$ fois. Environ combien de fois peut-on s'attendre à obtenir « pointe en haut » ? Est-on sûr d'obtenir exactement ce nombre ?`,
      solution: `**1.** Non : une pièce ou un dé équilibrés ont des issues équiprobables grâce à leur symétrie. La punaise n'est pas symétrique (une tête plate d'un côté, une pointe de l'autre) : rien ne permet d'affirmer que les deux issues ont la même chance. On ne peut pas calculer la probabilité, on va l'**estimer** grâce aux fréquences.

**2.** Fréquence $=$ nombre de « pointe en haut » $\\div$ nombre de lancers :
- $\\dfrac{31}{50} = \\dfrac{62}{100} = 0{,}62$ ;
- $\\dfrac{58}{100} = 0{,}58$ ;
- $\\dfrac{304}{500} = \\dfrac{608}{1\\,000} = 0{,}608$ ;
- $\\dfrac{612}{1\\,000} = 0{,}612$.

**3.** Sur un petit nombre de lancers, la fréquence varie beaucoup ($0{,}62$ puis $0{,}58$). Quand le nombre de lancers augmente, elle varie de moins en moins et **se stabilise** autour de $0{,}61$.

**4.** On peut estimer la probabilité d'obtenir « pointe en haut » à environ $0{,}61$ (soit $61\\,\\%$).
« Pointe en bas » est l'événement contraire : sa probabilité est environ $1 - 0{,}61 = 0{,}39$.

**5.** $3\\,000 \\times 0{,}61 = 1\\,830$ : on peut s'attendre à **environ $1\\,830$** « pointe en haut ».
On n'est pas sûr d'obtenir exactement ce nombre : l'expérience est aléatoire, le résultat sera seulement proche de $1\\,830$.`
    },
    {
      id: "5D2-ds-16",
      title: "Rendre un jeu équitable",
      difficulty: 4,
      points: 6,
      statement: `Un sac contient $4$ boules rouges et $6$ boules noires, indiscernables au toucher. Ali et Inès jouent : on tire une boule au hasard ; si elle est rouge, Ali gagne ; si elle est noire, Inès gagne.

1. Calculer la probabilité que la boule tirée soit rouge, puis qu'elle soit noire. Le jeu est-il équitable ?
2. Ali propose d'ajouter des boules rouges dans le sac (sans retirer de boules noires). Combien doit-il en ajouter pour que le jeu devienne équitable ? Justifier.
3. On ajoute maintenant des boules rouges dans le sac de départ. Recopier et compléter le tableau.

| Nombre de boules rouges ajoutées | $0$ | $2$ | $6$ | $10$ | $14$ |
|---|---|---|---|---|---|
| Nombre de boules rouges dans le sac | $4$ | … | … | … | … |
| Nombre total de boules dans le sac | $10$ | … | … | … | … |
| Probabilité de tirer une rouge | $\\dfrac{4}{10}$ | … | … | … | … |

4. Combien de boules rouges faut-il ajouter au sac de départ pour que la probabilité de tirer une boule rouge soit égale à $\\dfrac{3}{4}$ ? Justifier à l'aide du tableau.
5. Inès propose une autre idée : repartir du sac de départ et **retirer** des boules noires. Combien faut-il en retirer pour que la probabilité de tirer une boule rouge soit égale à $\\dfrac{2}{3}$ ?`,
      solution: `**1.** Il y a $4 + 6 = 10$ boules, toutes ayant la même chance d'être tirées.
$P(\\text{rouge}) = \\dfrac{4}{10} = \\dfrac{2}{5}$ et $P(\\text{noire}) = \\dfrac{6}{10} = \\dfrac{3}{5}$.
Les deux probabilités sont différentes : le jeu **n'est pas équitable** (il avantage Inès).

**2.** Le jeu est équitable s'il y a autant de boules rouges que de noires : il faut $6$ rouges, donc ajouter $6 - 4 = 2$ boules rouges.
On a alors $P(\\text{rouge}) = \\dfrac{6}{12} = \\dfrac{1}{2} = P(\\text{noire})$.

**3.** Le nombre de noires reste $6$ ; on ajoute le même nombre aux rouges et au total.

| Nombre de boules rouges ajoutées | $0$ | $2$ | $6$ | $10$ | $14$ |
|---|---|---|---|---|---|
| Nombre de boules rouges dans le sac | $4$ | $6$ | $10$ | $14$ | $18$ |
| Nombre total de boules dans le sac | $10$ | $12$ | $16$ | $20$ | $24$ |
| Probabilité de tirer une rouge | $\\dfrac{4}{10}$ | $\\dfrac{6}{12} = \\dfrac{1}{2}$ | $\\dfrac{10}{16} = \\dfrac{5}{8}$ | $\\dfrac{14}{20} = \\dfrac{7}{10}$ | $\\dfrac{18}{24} = \\dfrac{3}{4}$ |

**4.** D'après la dernière colonne, il faut ajouter **$14$ boules rouges** : il y a alors $18$ rouges sur $24$ boules, et $\\dfrac{18}{24} = \\dfrac{18 \\div 6}{24 \\div 6} = \\dfrac{3}{4}$.
(Autre façon de voir : une probabilité de $\\dfrac{3}{4}$ signifie $3$ rouges pour $1$ noire ; avec $6$ noires, il faut $3 \\times 6 = 18$ rouges.)

**5.** Les $4$ boules rouges doivent représenter les $\\dfrac{2}{3}$ du sac, donc $2$ rouges pour $1$ noire : il ne faut garder que $4 \\div 2 = 2$ boules noires.
Il faut retirer $6 - 2 = 4$ boules noires. Vérification : $\\dfrac{4}{4 + 2} = \\dfrac{4}{6} = \\dfrac{2}{3}$.`
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
    },
    {
      id: "5P1-ds-09",
      title: "La photocopieuse de la médiathèque",
      difficulty: 1,
      points: 4,
      statement: `À la médiathèque, le prix des photocopies est proportionnel au nombre de photocopies : $25$ photocopies coûtent $1{,}50$ €.

1. Recopier et compléter le tableau de proportionnalité suivant.

| Nombre de photocopies | $25$ | $50$ | $10$ | $40$ | $100$ |
|---|---|---|---|---|---|
| Prix (€) | $1{,}50$ | … | … | … | … |

2. Quel est le prix d'une photocopie ? Quel est le coefficient de proportionnalité qui permet de passer de la première ligne à la seconde ?
3. Combien de photocopies peut-on faire avec $4{,}20$ € ?
4. On représente le prix en fonction du nombre de photocopies dans un repère. Comment sont placés les points obtenus ? Justifier.`,
      solution: `**1.**
- $50 = 2 \\times 25$, donc le prix est $2 \\times 1{,}50 = 3$ €.
- $10$ photocopies : $1{,}50 \\div 25 \\times 10 = 0{,}06 \\times 10 = 0{,}60$ €.
- $40 = 50 - 10$, donc le prix est $3 - 0{,}60 = 2{,}40$ €.
- $100 = 4 \\times 25$, donc le prix est $4 \\times 1{,}50 = 6$ €.

**2.** Prix d'une photocopie : $1{,}50 \\div 25 = 0{,}06$ €, soit $6$ centimes. Le coefficient de proportionnalité est $0{,}06$ : on multiplie le nombre de photocopies par $0{,}06$ pour obtenir le prix.

**3.** $4{,}20 \\div 0{,}06 = 70$. Avec $4{,}20$ €, on peut faire $70$ photocopies.

**4.** Le prix est proportionnel au nombre de photocopies : les points sont **alignés avec l'origine du repère**.`
    },
    {
      id: "5P1-ds-10",
      title: "Le sucre dans les barres de céréales",
      difficulty: 2,
      points: 5,
      statement: `Une barre de céréales de la marque A pèse $25$ g et contient $6$ g de sucre. Une barre de la marque B pèse $40$ g et contient $9$ g de sucre.

1. Calculer le pourcentage de sucre dans une barre de la marque A.
2. Calculer le pourcentage de sucre dans une barre de la marque B.
3. Quelle barre est la plus sucrée en proportion ? Laquelle apporte le plus de sucre quand on en mange une ?
4. La barre A contient aussi $12\\,\\%$ de protéines. Calculer la masse de protéines dans une barre A.
5. Une boîte contient $6$ barres A. Calculer la masse de sucre contenue dans la boîte. Le pourcentage de sucre dans la boîte est-il différent de celui d'une barre ? Justifier.`,
      solution: `**1.** $\\dfrac{6}{25} = \\dfrac{24}{100}$ : la barre A contient $24\\,\\%$ de sucre.

**2.** $\\dfrac{9}{40} = 0{,}225 = \\dfrac{22{,}5}{100}$ : la barre B contient $22{,}5\\,\\%$ de sucre.

**3.** $24\\,\\% > 22{,}5\\,\\%$ : la barre **A** est la plus sucrée en proportion. Mais une barre B apporte $9$ g de sucre contre $6$ g pour une barre A : c'est la barre **B** qui apporte le plus de sucre quand on en mange une (car elle est plus lourde).

**4.** $12\\,\\%$ de $25$ g : $\\dfrac{12}{100} \\times 25 = 3$ g de protéines.

**5.** Masse de sucre : $6 \\times 6 = 36$ g pour $6 \\times 25 = 150$ g de barres.
$\\dfrac{36}{150} = 0{,}24 = 24\\,\\%$ : le pourcentage est le même, car la masse de sucre et la masse totale ont toutes les deux été multipliées par $6$.`
    },
    {
      id: "5P1-ds-11",
      title: "Mélanger de la peinture verte",
      difficulty: 3,
      points: 5,
      statement: `Pour obtenir une certaine teinte de vert, Malo mélange de la peinture jaune et de la peinture bleue : il faut toujours $3$ volumes de jaune pour $2$ volumes de bleu.

1. Recopier et compléter le tableau (volumes en mL), qui est un tableau de proportionnalité.

| Jaune (mL) | $300$ | $150$ | … | $900$ |
|---|---|---|---|---|
| Bleu (mL) | $200$ | … | $50$ | … |
| Vert obtenu (mL) | … | … | … | … |

2. Quel pourcentage du mélange vert la peinture jaune représente-t-elle ?
3. Malo veut préparer exactement $750$ mL de vert. Quels volumes de jaune et de bleu doit-il mélanger ?
4. Il lui reste $1$ L de jaune et $0{,}5$ L de bleu. Quelle quantité maximale de vert peut-il préparer ? Quelle peinture restera-t-il, et en quelle quantité ?`,
      solution: `**1.** Le volume de bleu s'obtient en multipliant celui de jaune par $\\dfrac{2}{3}$, et le vert est la somme des deux.
- $300$ mL de jaune, $200$ mL de bleu : $500$ mL de vert.
- $150$ mL de jaune (moitié) : $100$ mL de bleu, $250$ mL de vert.
- $50$ mL de bleu : $50 \\times \\dfrac{3}{2} = 75$ mL de jaune, $125$ mL de vert.
- $900$ mL de jaune ($3$ fois $300$) : $600$ mL de bleu, $1\\,500$ mL de vert.

**2.** Sur $5$ volumes de mélange, $3$ sont jaunes : $\\dfrac{3}{5} = \\dfrac{60}{100}$, soit $60\\,\\%$ de jaune (et $40\\,\\%$ de bleu).

**3.** Jaune : $60\\,\\%$ de $750$ mL, soit $0{,}6 \\times 750 = 450$ mL. Bleu : $750 - 450 = 300$ mL. (Vérification : $\\dfrac{450}{3} = 150$ et $\\dfrac{300}{2} = 150$, on a bien $3$ volumes pour $2$.)

**4.** Avec les $500$ mL de bleu, il faudrait $500 \\times \\dfrac{3}{2} = 750$ mL de jaune : il en a assez ($1\\,000$ mL).
Avec les $1\\,000$ mL de jaune, il faudrait $1\\,000 \\times \\dfrac{2}{3} \\approx 667$ mL de bleu : il n'en a pas assez.
C'est donc le bleu qui limite : il prépare $750 + 500 = 1\\,250$ mL de vert, soit $1{,}25$ L, et il lui restera $1\\,000 - 750 = 250$ mL de peinture jaune.`
    },
    {
      id: "5P1-ds-12",
      title: "Soldes : quelle offre choisir ?",
      difficulty: 4,
      points: 6,
      statement: `1. Pendant les soldes, le magasin A affiche une réduction de $20\\,\\%$ sur tous ses articles. Après réduction, un sweat coûte $36$ €.
   a) Quel pourcentage du prix initial paie-t-on ?
   b) Calculer le prix initial du sweat.
2. Le magasin B vend le même sweat au même prix initial, avec l'offre : « le deuxième article à moitié prix » (le premier et le troisième sont au prix normal).
   a) Calculer le prix payé pour deux sweats dans le magasin B.
   b) Quel pourcentage de réduction cela représente-t-il sur le prix de deux sweats ?
3. Léna veut acheter deux sweats. Dans quel magasin doit-elle aller ?
4. Son frère veut en acheter trois. Quel magasin est le plus intéressant pour lui ? Justifier par des calculs de pourcentages.`,
      solution: `**1.** a) On paie $100\\,\\% - 20\\,\\% = 80\\,\\%$ du prix initial.
b) $80\\,\\%$ du prix initial valent $36$ € : $1\\,\\%$ vaut $36 \\div 80 = 0{,}45$ €, donc $100\\,\\%$ valent $45$ €. Le prix initial est $45$ €. (Vérification : $45 \\times 0{,}8 = 36$.)

**2.** a) $45 + 45 \\div 2 = 45 + 22{,}50 = 67{,}50$ €.
b) Sans réduction, deux sweats coûtent $90$ € ; la réduction est de $90 - 67{,}50 = 22{,}50$ €. $\\dfrac{22{,}5}{90} = 0{,}25$ : c'est une réduction de $25\\,\\%$.

**3.** Dans le magasin A, deux sweats coûtent $2 \\times 36 = 72$ € ; dans le magasin B, $67{,}50$ €. Léna doit aller dans le **magasin B** ($25\\,\\% > 20\\,\\%$).

**4.** Magasin A : $3 \\times 36 = 108$ € (réduction de $20\\,\\%$).
Magasin B : $45 + 22{,}50 + 45 = 112{,}50$ € ; la réduction est de $135 - 112{,}50 = 22{,}50$ € sur $135$ €, soit $\\dfrac{22{,}5}{135} \\approx 0{,}167$, environ $16{,}7\\,\\%$.
Pour trois sweats, le **magasin A** est le plus intéressant.`
    },
    {
      id: "5P1-ds-13",
      title: "Le fromage à la coupe",
      difficulty: 1,
      points: 4,
      statement: `Au rayon fromagerie, le comté est vendu à la coupe au prix de $18$ € le kilogramme. Le prix payé est proportionnel à la masse achetée.

1. Recopier et compléter le tableau de proportionnalité.

| Masse (g) | $1\\,000$ | $500$ | $250$ | $750$ | $1\\,500$ |
|---|---|---|---|---|---|
| Prix (€) | $18$ | … | … | … | … |

2. En passant par le prix de $100$ g, calculer le prix d'un morceau de $600$ g.
3. Nina a payé $22{,}50$ €. Quelle masse de comté a-t-elle achetée ?
4. Par quel nombre faut-il multiplier une masse exprimée en kilogrammes pour obtenir le prix en euros ? Comment appelle-t-on ce nombre ?`,
      solution: `**1.** On utilise les propriétés de linéarité :
- $500$ g, c'est la moitié de $1\\,000$ g : $18 \\div 2 = 9$ € ;
- $250$ g, c'est la moitié de $500$ g : $9 \\div 2 = 4{,}50$ € ;
- $750$ g $= 500$ g $+ 250$ g : $9 + 4{,}50 = 13{,}50$ € ;
- $1\\,500$ g $= 1\\,000$ g $+ 500$ g : $18 + 9 = 27$ €.

| Masse (g) | $1\\,000$ | $500$ | $250$ | $750$ | $1\\,500$ |
|---|---|---|---|---|---|
| Prix (€) | $18$ | $9$ | $4{,}50$ | $13{,}50$ | $27$ |

**2.** $100$ g, c'est $1\\,000$ g divisé par $10$ : $100$ g coûtent $18 \\div 10 = 1{,}80$ €.
$600$ g coûtent donc $6 \\times 1{,}80 = 10{,}80$ €.

**3.** $22{,}50 = 18 + 4{,}50$ : c'est le prix de $1\\,000$ g $+ 250$ g. Nina a acheté **$1\\,250$ g**, soit $1{,}25$ kg.
(Ou bien : $22{,}50 \\div 1{,}80 = 12{,}5$ fois $100$ g, soit $1\\,250$ g.)

**4.** Le prix d'un kilogramme est $18$ € : prix (en €) $=$ masse (en kg) $\\times 18$. Ce nombre $18$ est le **coefficient de proportionnalité**.`
    },
    {
      id: "5P1-ds-14",
      title: "Louer un kayak : lire un graphique",
      difficulty: 2,
      points: 5,
      statement: `Une base nautique propose deux offres pour louer un kayak. Le graphique ci-dessous donne le prix à payer en fonction de la durée de location pour chacune des deux offres.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:420px;"><svg class="geo-svg-figure" viewBox="0 0 400 285" width="400" height="285" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="50" y1="240" x2="50" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="100" y1="240" x2="100" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="150" y1="240" x2="150" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="200" y1="240" x2="200" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="250" y1="240" x2="250" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="300" y1="240" x2="300" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="350" y1="240" x2="350" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="240" x2="350" y2="240" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="215" x2="350" y2="215" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="190" x2="350" y2="190" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="165" x2="350" y2="165" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="140" x2="350" y2="140" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="115" x2="350" y2="115" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="90" x2="350" y2="90" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="65" x2="350" y2="65" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="40" x2="350" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="240" x2="370" y2="240" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="240" x2="50" y2="25" stroke="currentColor" stroke-width="1.5"/><text x="50" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">0</text><text x="100" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">1</text><text x="150" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">2</text><text x="200" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">3</text><text x="250" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">4</text><text x="300" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">5</text><text x="350" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">6</text><text x="42" y="244" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">0</text><text x="42" y="194" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">10</text><text x="42" y="144" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">20</text><text x="42" y="94" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">30</text><text x="42" y="44" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">40</text><line x1="50" y1="240" x2="350" y2="60" stroke="#2563eb" stroke-width="2.4"/><line x1="50" y1="190" x2="350" y2="70" stroke="#dc2626" stroke-width="2.4" stroke-dasharray="7 4"/><text x="180" y="192" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#2563eb" text-anchor="start">Offre A</text><text x="100" y="142" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626" text-anchor="start">Offre B</text><text x="370" y="278" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">Durée de location (h)</text><text x="56" y="26" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="start">Prix (€)</text></svg></div>

1. Lire sur le graphique le prix d'une location de $2$ h avec l'offre A, puis avec l'offre B.
2. Pour l'une des deux offres, le prix est proportionnel à la durée de location. Laquelle ? Justifier à l'aide du graphique.
3. Pour l'offre B, quel est le prix à payer pour une durée de $0$ h, c'est-à-dire avant même de naviguer ? Comment peut-on interpréter ce montant ?
4. Avec l'offre A, quel est le prix d'une heure de location ? En déduire, par le calcul, le prix d'une location de $4$ h $30$ min avec cette offre.
5. Pour quelle durée les deux offres coûtent-elles le même prix ? Pour une location de $6$ h, quelle offre est la moins chère ?`,
      solution: `**1.** On part de l'abscisse $2$ et on lit l'ordonnée du point de chaque droite :
- offre A : $12$ € ;
- offre B : $18$ €.

**2.** C'est l'**offre A** : sa représentation graphique est une droite qui passe par l'origine du repère. La représentation de l'offre B est aussi une droite, mais elle ne passe pas par l'origine : ce n'est pas une situation de proportionnalité.

**3.** Pour $0$ h, la droite de l'offre B passe par l'ordonnée $10$ : il faut payer $10$ €. On peut l'interpréter comme un montant fixe (frais d'inscription, location du gilet…) payé quelle que soit la durée.

**4.** Avec l'offre A, $2$ h coûtent $12$ €, donc $1$ h coûte $12 \\div 2 = 6$ €.
$4$ h $30$ min $= 4{,}5$ h : le prix est $4{,}5 \\times 6 = 27$ €.

**5.** Les deux droites se coupent au point de coordonnées $(5 \\,;\\, 30)$ : pour une durée de **$5$ h**, les deux offres coûtent $30$ €.
Pour $6$ h, on lit $36$ € pour l'offre A et $34$ € pour l'offre B : l'**offre B** est la moins chère.`
    },
    {
      id: "5P1-ds-15",
      title: "Le budget du voyage scolaire",
      difficulty: 3,
      points: 5,
      statement: `Le voyage scolaire des $48$ élèves de 5e coûte $2\\,400$ € au total. Le transport représente $30\\,\\%$ de ce coût, l'hébergement $45\\,\\%$, et le reste correspond aux activités.

1. Calculer le coût du transport et celui de l'hébergement.
2. Quel pourcentage du coût total les activités représentent-elles ? Calculer leur coût.
3. Le foyer socio-éducatif du collège finance $600$ € du voyage. Quel pourcentage du coût total cela représente-t-il ?
4. Le reste est partagé de façon égale entre les $48$ élèves. Combien chaque famille doit-elle payer ?
5. Finalement, le transporteur accorde une réduction de $5\\,\\%$ sur le prix du transport. Le foyer finance toujours $600$ €. Quelle somme chaque famille doit-elle alors payer ?`,
      solution: `**1.** Transport : $30\\,\\%$ de $2\\,400$ € $= 2\\,400 \\times \\dfrac{30}{100} = 24 \\times 30 = 720$ €.
Hébergement : $45\\,\\%$ de $2\\,400$ € $= 24 \\times 45 = 1\\,080$ €.

**2.** Activités : $100\\,\\% - 30\\,\\% - 45\\,\\% = 25\\,\\%$ du coût total.
$25\\,\\%$ de $2\\,400$ €, c'est le quart : $2\\,400 \\div 4 = 600$ €. (Vérification : $720 + 1\\,080 + 600 = 2\\,400$.)

**3.** $\\dfrac{600}{2\\,400} = \\dfrac{1}{4} = \\dfrac{25}{100}$ : le foyer finance **$25\\,\\%$** du coût total.

**4.** Reste à payer : $2\\,400 - 600 = 1\\,800$ €. Par élève : $1\\,800 \\div 48 = 37{,}50$ €.
(On peut calculer ainsi : $48 \\times 37 = 1\\,776$ et $48 \\times 0{,}5 = 24$, total $1\\,800$.)

**5.** Réduction sur le transport : $5\\,\\%$ de $720$ € $= 720 \\times \\dfrac{5}{100} = 36$ €.
Nouveau coût total : $2\\,400 - 36 = 2\\,364$ €. Reste à payer par les familles : $2\\,364 - 600 = 1\\,764$ €.
Par élève : $1\\,764 \\div 48 = 36{,}75$ €. Chaque famille paie **$36{,}75$ €**, soit $36 \\div 48 = 0{,}75$ € de moins par élève.`
    },
    {
      id: "5P1-ds-16",
      title: "Combien de convives avec ce qui reste ?",
      difficulty: 4,
      points: 6,
      statement: `Voici les ingrédients d'une recette de clafoutis pour $6$ personnes : $240$ g de farine, $3$ œufs, $450$ mL de lait et $90$ g de sucre. Les quantités sont proportionnelles au nombre de personnes.

Dans sa cuisine, Hugo dispose de $500$ g de farine, $7$ œufs, $1$ L de lait et $200$ g de sucre.

1. Calculer la quantité de chaque ingrédient nécessaire pour $1$ personne.
2. Hugo peut-il préparer un clafoutis pour $10$ personnes ? Justifier.
3. Pour chaque ingrédient, calculer le nombre maximal de personnes pour lequel Hugo en a assez (on cherche un nombre entier de personnes).
4. En déduire le nombre maximal de personnes pour lequel Hugo peut préparer le clafoutis. Quel ingrédient limite la recette ?
5. Hugo prépare le clafoutis pour ce nombre maximal de personnes. Quelles quantités de chaque ingrédient lui reste-t-il ?`,
      solution: `**1.** On divise chaque quantité par $6$ :
- farine : $240 \\div 6 = 40$ g ;
- œufs : $3 \\div 6 = 0{,}5$ œuf ;
- lait : $450 \\div 6 = 75$ mL ;
- sucre : $90 \\div 6 = 15$ g.

**2.** Pour $10$ personnes : $400$ g de farine, $5$ œufs, $750$ mL de lait et $150$ g de sucre. Hugo a assez de chaque ingrédient : **oui**, il peut le préparer.

**3.**
- Farine : $500 \\div 40 = 12{,}5$ ; $40 \\times 12 = 480 \\leqslant 500$ mais $40 \\times 13 = 520 > 500$ : au plus $12$ personnes.
- Œufs : $7 \\div 0{,}5 = 14$ : au plus $14$ personnes.
- Lait : $1$ L $= 1\\,000$ mL ; $75 \\times 13 = 975 \\leqslant 1\\,000$ mais $75 \\times 14 = 1\\,050 > 1\\,000$ : au plus $13$ personnes.
- Sucre : $15 \\times 13 = 195 \\leqslant 200$ mais $15 \\times 14 = 210 > 200$ : au plus $13$ personnes.

**4.** Il faut avoir assez de **tous** les ingrédients : on prend le plus petit des nombres trouvés. Hugo peut préparer le clafoutis pour **$12$ personnes** au maximum ; c'est la **farine** qui limite la recette.

**5.** Pour $12$ personnes (deux fois la recette) : $480$ g de farine, $6$ œufs, $900$ mL de lait et $180$ g de sucre.
Il lui reste : $500 - 480 = 20$ g de farine, $7 - 6 = 1$ œuf, $1\\,000 - 900 = 100$ mL de lait et $200 - 180 = 20$ g de sucre.`
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
    },
    {
      id: "5P2-ds-09",
      title: "La recharge du téléphone",
      difficulty: 1,
      points: 4,
      statement: `Sacha met son téléphone à charger et relève le niveau de la batterie toutes les $10$ minutes.

| Temps de charge (min) | $0$ | $10$ | $20$ | $30$ | $40$ | $50$ | $60$ |
|---|---|---|---|---|---|---|---|
| Niveau de batterie (%) | $15$ | $32$ | $48$ | $62$ | $74$ | $84$ | $91$ |

1. Compléter la phrase : « Le niveau de batterie est donné en fonction de … ».
2. Quel était le niveau de la batterie au moment du branchement ? au bout de $40$ minutes ?
3. Au bout de combien de minutes de charge la batterie a-t-elle dépassé $80\\,\\%$ pour la première fois, d'après les relevés ?
4. De combien le niveau a-t-il augmenté pendant les $10$ premières minutes ? pendant les $10$ dernières ? Que remarque-t-on ?
5. Le niveau de batterie est-il proportionnel au temps de charge ? Justifier.`,
      solution: `**1.** « Le niveau de batterie est donné en fonction du **temps de charge**. »

**2.** Au branchement ($0$ min), le niveau était de $15\\,\\%$. Au bout de $40$ minutes, il était de $74\\,\\%$.

**3.** À $40$ min, le niveau est $74\\,\\% < 80\\,\\%$ ; à $50$ min, il est $84\\,\\% > 80\\,\\%$. C'est au relevé de **$50$ minutes** que le niveau dépasse $80\\,\\%$ pour la première fois.

**4.** Pendant les $10$ premières minutes : $32 - 15 = 17$ points de pourcentage. Pendant les $10$ dernières : $91 - 84 = 7$ points. La charge **ralentit** au fur et à mesure que la batterie se remplit.

**5.** Non : pour $0$ minute, le niveau n'est pas nul ($15\\,\\%$). De plus $\\dfrac{32}{10} = 3{,}2$ et $\\dfrac{48}{20} = 2{,}4$ : les quotients ne sont pas égaux. Le niveau n'est pas proportionnel au temps de charge.`
    },
    {
      id: "5P2-ds-10",
      title: "La température en montagne",
      difficulty: 2,
      points: 5,
      statement: `Un jour d'été, il fait $15$ °C au niveau de la mer. On admet qu'en montant, la température baisse de $6$ °C tous les $1\\,000$ m d'altitude.

1. Recopier et compléter le tableau donnant la température $T$ (en °C) en fonction de l'altitude $a$ (en m).

| Altitude $a$ (m) | $0$ | $1\\,000$ | $2\\,000$ | $3\\,000$ | $4\\,000$ |
|---|---|---|---|---|---|
| Température $T$ (°C) | $15$ | … | … | … | … |

2. De combien de degrés la température baisse-t-elle quand on monte de $100$ m ? En déduire une expression de $T$ en fonction de $a$.
3. À quelle altitude la température est-elle égale à $0$ °C ? Justifier.
4. Calculer la température prévue au sommet d'une montagne de $4\\,800$ m d'altitude.
5. On place les points du tableau dans un repère (altitude en abscisse, température en ordonnée). Que remarque-t-on ?`,
      solution: `**1.** On retire $6$ °C par tranche de $1\\,000$ m :
- $1\\,000$ m : $15 - 6 = 9$ °C ;
- $2\\,000$ m : $9 - 6 = 3$ °C ;
- $3\\,000$ m : $3 - 6 = -3$ °C ;
- $4\\,000$ m : $-3 - 6 = -9$ °C.

**2.** $100$ m représentent $\\dfrac{1}{10}$ de $1\\,000$ m : la température baisse de $6 \\div 10 = 0{,}6$ °C. Pour $1$ m, elle baisse de $0{,}006$ °C. Donc $T = 15 - 0{,}006 \\times a$.

**3.** Il faut que la baisse soit de $15$ °C : $15 \\div 0{,}6 = 25$ tranches de $100$ m, soit $2\\,500$ m. (Vérification : $15 - 0{,}006 \\times 2\\,500 = 15 - 15 = 0$.) Il fait $0$ °C à $2\\,500$ m d'altitude.

**4.** $T = 15 - 0{,}006 \\times 4\\,800 = 15 - 28{,}8 = -13{,}8$. Il fait environ $-13{,}8$ °C au sommet.

**5.** Les points ont pour coordonnées $(0 ; 15)$, $(1\\,000 ; 9)$, $(2\\,000 ; 3)$, $(3\\,000 ; -3)$, $(4\\,000 ; -9)$. Ils sont **alignés** (la température baisse toujours de la même quantité pour une même hausse d'altitude), mais la droite ne passe pas par l'origine : la température n'est pas proportionnelle à l'altitude (elle diminue quand l'altitude augmente).`
    },
    {
      id: "5P2-ds-11",
      title: "Le trajet de Zoé à vélo",
      difficulty: 3,
      points: 5,
      statement: `Zoé part de chez elle à vélo pour rejoindre une amie. Le tableau donne la distance $d$ (en km) qui la sépare de chez elle en fonction du temps $t$ (en min) écoulé depuis son départ.

| Temps $t$ (min) | $0$ | $5$ | $10$ | $15$ | $20$ | $25$ | $30$ |
|---|---|---|---|---|---|---|---|
| Distance $d$ (km) | $0$ | $1{,}5$ | $3$ | $3$ | $3$ | $4{,}5$ | $6$ |

1. Placer ces points dans un repère : $1$ cm pour $5$ min en abscisse, $1$ cm pour $1$ km en ordonnée. Relier les points par des segments.
2. À quelle distance de chez elle se trouve l'amie de Zoé, sachant que Zoé arrive au bout de $30$ minutes ?
3. Que s'est-il passé entre la $10^\\text{e}$ et la $20^\\text{e}$ minute ? Comment cela se voit-il sur le graphique ?
4. Zoé roule à vitesse constante pendant chaque phase de déplacement. Quelle distance parcourt-elle en $5$ minutes ? Les deux phases de déplacement se font-elles à la même vitesse ?
5. À quel instant Zoé se trouve-t-elle à $4$ km de chez elle ? Donner la réponse en minutes et secondes.`,
      solution: `**1.** On place les points $(0 ; 0)$, $(5 ; 1{,}5)$, $(10 ; 3)$, $(15 ; 3)$, $(20 ; 3)$, $(25 ; 4{,}5)$, $(30 ; 6)$ et on les relie : deux segments « montants » séparés par un palier horizontal.

**2.** Au bout de $30$ minutes, $d = 6$ km : l'amie habite à $6$ km de chez Zoé.

**3.** Entre la $10^\\text{e}$ et la $20^\\text{e}$ minute, la distance reste égale à $3$ km : Zoé s'est **arrêtée** pendant $10$ minutes. Sur le graphique, cela correspond à un segment horizontal.

**4.** Pendant chaque phase, elle parcourt $1{,}5$ km toutes les $5$ minutes (de $0$ à $1{,}5$ puis de $1{,}5$ à $3$ km ; de $3$ à $4{,}5$ puis de $4{,}5$ à $6$ km). Les deux phases se font à la **même vitesse** ($1{,}5$ km en $5$ min, soit $18$ km par heure).

**5.** $4$ km est atteint pendant la deuxième phase, entre $t = 20$ ($3$ km) et $t = 25$ ($4{,}5$ km). Il lui reste $4 - 3 = 1$ km à parcourir après la pause. En $5$ min elle parcourt $1{,}5$ km, donc $1$ km lui prend $5 \\times \\dfrac{1}{1{,}5} = \\dfrac{10}{3}$ min, soit $3$ min et $20$ s.
Elle est à $4$ km de chez elle à $t = 23$ min $20$ s.`
    },
    {
      id: "5P2-ds-12",
      title: "Les poignées de main",
      difficulty: 4,
      points: 6,
      statement: `Lors d'une réunion, chaque personne serre la main de chacune des autres personnes, une seule fois. On s'intéresse au nombre total de poignées de main échangées en fonction du nombre de personnes présentes.

1. Quatre amis, Ali, Bea, Cyril et Dina, se retrouvent. Écrire la liste de toutes les poignées de main (par exemple « Ali–Bea ») et les compter.
2. Une cinquième personne arrive et serre la main de chacun. Combien de nouvelles poignées de main y a-t-il ? Combien y en a-t-il alors en tout ?
3. Recopier et compléter le tableau, en utilisant l'idée de la question 2.

| Nombre de personnes | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Nombre de poignées de main | $1$ | | | | | | | | |

4. Le nombre de poignées de main est-il proportionnel au nombre de personnes ? Justifier à l'aide du tableau.
5. À la fin d'une réunion, on a compté $45$ poignées de main. Combien de personnes étaient présentes ?
6. Un élève propose le programme de calcul suivant : « Prendre le nombre de personnes, le multiplier par ce nombre diminué de $1$, puis diviser le résultat par $2$. »
   a) Vérifier que ce programme donne le bon résultat pour $4$ et pour $10$ personnes.
   b) L'utiliser pour calculer le nombre de poignées de main échangées dans une classe de $20$ élèves.`,
      solution: `**1.** Ali–Bea, Ali–Cyril, Ali–Dina, Bea–Cyril, Bea–Dina, Cyril–Dina : il y a **$6$ poignées de main**.

**2.** La cinquième personne serre la main des $4$ personnes déjà présentes : $4$ nouvelles poignées de main. En tout : $6 + 4 = 10$.

**3.** Quand une nouvelle personne arrive, on ajoute autant de poignées de main qu'il y avait de personnes avant elle :

| Nombre de personnes | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Nombre de poignées de main | $1$ | $3$ | $6$ | $10$ | $15$ | $21$ | $28$ | $36$ | $45$ |

($1 + 2 = 3$ ; $3 + 3 = 6$ ; $6 + 4 = 10$ ; $10 + 5 = 15$ ; … ; $36 + 9 = 45$.)

**4.** Non. Par exemple, avec $2$ personnes il y a $1$ poignée de main, et avec $4$ personnes (deux fois plus), il y en a $6$, et non $2$. Les quotients ne sont pas égaux : $1 \\div 2 = 0{,}5$ mais $6 \\div 4 = 1{,}5$. Ce n'est **pas une situation de proportionnalité**.

**5.** D'après le tableau, $45$ poignées de main correspondent à **$10$ personnes**.

**6.** a) Pour $4$ : $4 \\times 3 = 12$, puis $12 \\div 2 = 6$. Pour $10$ : $10 \\times 9 = 90$, puis $90 \\div 2 = 45$. On retrouve les valeurs du tableau.
b) Pour $20$ : $20 \\times 19 = 380$, puis $380 \\div 2 = 190$. Il y a **$190$ poignées de main**.
(Explication du programme : chacune des $20$ personnes serre $19$ mains, mais chaque poignée de main est alors comptée deux fois, une fois pour chacune des deux personnes.)`
    },
    {
      id: "5P2-ds-13",
      title: "La marée au port",
      difficulty: 1,
      points: 4,
      statement: `La capitainerie d'un port relève la hauteur d'eau dans le bassin toutes les deux heures, à partir de minuit.

| Heure (h) | $0$ | $2$ | $4$ | $6$ | $8$ | $10$ | $12$ |
|---|---|---|---|---|---|---|---|
| Hauteur d'eau (m) | $1{,}2$ | $2{,}5$ | $4{,}3$ | $5{,}1$ | $4{,}0$ | $2{,}2$ | $1{,}3$ |

1. Quelle est la hauteur d'eau à $4$ h ?
2. À quelle heure relève-t-on la plus grande hauteur d'eau ? Quelle est cette hauteur ?
3. Calculer la différence entre la plus grande et la plus petite hauteur relevées.
4. Un voilier ne peut sortir du port que si la hauteur d'eau est d'au moins $4$ m. Parmi les heures du tableau, à quelles heures peut-il sortir ?
5. La hauteur d'eau est-elle proportionnelle à l'heure ? Justifier.`,
      solution: `**1.** Dans la colonne $4$ h, on lit : la hauteur d'eau est de **$4{,}3$ m**.

**2.** La plus grande valeur de la deuxième ligne est $5{,}1$ : elle est relevée à **$6$ h** (c'est la pleine mer).

**3.** La plus petite hauteur relevée est $1{,}2$ m (à $0$ h) : $5{,}1 - 1{,}2 = 3{,}9$ m.

**4.** On cherche les hauteurs supérieures ou égales à $4$ m : $4{,}3$ ; $5{,}1$ et $4{,}0$. Le voilier peut sortir à **$4$ h, $6$ h et $8$ h**.

**5.** Non. Par exemple, de $6$ h à $12$ h l'heure double, mais la hauteur d'eau passe de $5{,}1$ m à $1{,}3$ m : elle diminue. De plus, à $0$ h la hauteur n'est pas nulle. La hauteur d'eau dépend de l'heure, mais elle ne lui est pas proportionnelle.`
    },
    {
      id: "5P2-ds-14",
      title: "La distance de freinage",
      difficulty: 2,
      points: 5,
      statement: `Sur route sèche, la distance de freinage d'une voiture (en mètres) dépend de sa vitesse (en km/h). On utilise la formule simplifiée suivante :
$$\\text{distance de freinage} = \\text{vitesse} \\times \\text{vitesse} \\div 100.$$
Par exemple, à $30$ km/h : $30 \\times 30 \\div 100 = 900 \\div 100 = 9$ m.

1. Recopier et compléter le tableau à l'aide de la formule.

| Vitesse (km/h) | $30$ | $50$ | $70$ | $90$ | $110$ | $130$ |
|---|---|---|---|---|---|---|
| Distance de freinage (m) | $9$ | … | … | … | … | … |

2. La distance de freinage est-elle proportionnelle à la vitesse ? Justifier à l'aide de deux colonnes du tableau.
3. Calculer la distance de freinage à $100$ km/h. Lorsque la vitesse double (de $50$ km/h à $100$ km/h), par combien la distance de freinage est-elle multipliée ?
4. Un automobiliste aperçoit un obstacle à $60$ m devant lui et freine aussitôt. Évite-t-il l'obstacle s'il roule à $70$ km/h ? s'il roule à $90$ km/h ? (On ne tient compte que de la distance de freinage.)`,
      solution: `**1.**
- $50$ km/h : $50 \\times 50 \\div 100 = 2\\,500 \\div 100 = 25$ m ;
- $70$ km/h : $4\\,900 \\div 100 = 49$ m ;
- $90$ km/h : $8\\,100 \\div 100 = 81$ m ;
- $110$ km/h : $12\\,100 \\div 100 = 121$ m ;
- $130$ km/h : $16\\,900 \\div 100 = 169$ m.

| Vitesse (km/h) | $30$ | $50$ | $70$ | $90$ | $110$ | $130$ |
|---|---|---|---|---|---|---|
| Distance de freinage (m) | $9$ | $25$ | $49$ | $81$ | $121$ | $169$ |

**2.** Non. De $30$ km/h à $90$ km/h, la vitesse est multipliée par $3$, mais la distance de freinage passe de $9$ m à $81$ m : elle est multipliée par $9$. Ce n'est pas une situation de proportionnalité.

**3.** À $100$ km/h : $100 \\times 100 \\div 100 = 100$ m.
De $50$ km/h à $100$ km/h, la distance passe de $25$ m à $100$ m : elle est **multipliée par $4$** ($25 \\times 4 = 100$). Doubler sa vitesse, c'est quadrupler sa distance de freinage.

**4.** À $70$ km/h, la distance de freinage est $49$ m $< 60$ m : la voiture s'arrête avant l'obstacle.
À $90$ km/h, elle est $81$ m $> 60$ m : la voiture **ne s'arrête pas** à temps.`
    },
    {
      id: "5P2-ds-15",
      title: "La température du four",
      difficulty: 3,
      points: 5,
      statement: `Romane allume son four pour faire cuire un gâteau. Le graphique ci-dessous donne la température à l'intérieur du four en fonction du temps écoulé depuis l'allumage.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:420px;"><svg class="geo-svg-figure" viewBox="0 0 400 285" width="400" height="285" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="50" y1="240" x2="50" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="75" y1="240" x2="75" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="100" y1="240" x2="100" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="125" y1="240" x2="125" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="150" y1="240" x2="150" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="175" y1="240" x2="175" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="200" y1="240" x2="200" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="225" y1="240" x2="225" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="250" y1="240" x2="250" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="275" y1="240" x2="275" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="300" y1="240" x2="300" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="325" y1="240" x2="325" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="350" y1="240" x2="350" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="240" x2="350" y2="240" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="220" x2="350" y2="220" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="200" x2="350" y2="200" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="180" x2="350" y2="180" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="160" x2="350" y2="160" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="140" x2="350" y2="140" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="120" x2="350" y2="120" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="100" x2="350" y2="100" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="80" x2="350" y2="80" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="60" x2="350" y2="60" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="40" x2="350" y2="40" stroke="currentColor" stroke-opacity="0.15"/><line x1="50" y1="240" x2="370" y2="240" stroke="currentColor" stroke-width="1.5"/><line x1="50" y1="240" x2="50" y2="30" stroke="currentColor" stroke-width="1.5"/><text x="50" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">0</text><text x="100" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">10</text><text x="150" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">20</text><text x="200" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">30</text><text x="250" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">40</text><text x="300" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">50</text><text x="350" y="256" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="middle">60</text><text x="42" y="244" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">0</text><text x="42" y="204" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">40</text><text x="42" y="164" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">80</text><text x="42" y="124" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">120</text><text x="42" y="84" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">160</text><text x="42" y="44" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">200</text><polyline points="50,220 100,60 250,60 275,92 300,116 325,132 350,140" fill="none" stroke="#2563eb" stroke-width="2.4" stroke-linejoin="round"/><text x="370" y="278" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="end">Temps (min)</text><text x="56" y="24" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="currentColor" text-anchor="start">Température (°C)</text></svg></div>

1. Quelle est la température dans le four au moment de l'allumage ? À quoi correspond-elle ?
2. Au bout de combien de minutes le four atteint-il $180$ °C ? Pendant combien de temps la température reste-t-elle ensuite égale à $180$ °C ?
3. Pendant la montée en température, la courbe est un segment. De combien de degrés la température augmente-t-elle chaque minute ?
4. Lire à quels instants la température du four est égale à $100$ °C.
5. Que s'est-il passé, à votre avis, $40$ minutes après l'allumage ?
6. La température du four est-elle proportionnelle au temps écoulé ? Justifier.`,
      solution: `**1.** Au temps $0$, on lit $20$ °C : c'est la température de la cuisine, le four est encore froid.

**2.** La courbe atteint $180$ °C au temps **$10$ min**. Elle reste horizontale jusqu'au temps $40$ min : la température reste égale à $180$ °C pendant $40 - 10 = $ **$30$ minutes**.

**3.** En $10$ minutes, la température passe de $20$ °C à $180$ °C : elle augmente de $180 - 20 = 160$ °C, soit $160 \\div 10 = 16$ °C par minute (la courbe est un segment, l'augmentation est régulière).

**4.** On trace la droite horizontale d'ordonnée $100$ : elle coupe la courbe en deux points.
- Pendant la montée : au bout de $5$ min (vérification : $20 + 5 \\times 16 = 100$).
- Pendant le refroidissement : au bout de $60$ min.

**5.** À partir de $40$ min, la température baisse : Romane a probablement **éteint le four** (la cuisson est terminée) et il refroidit.

**6.** Non : la courbe n'est pas une droite passant par l'origine (au temps $0$, la température vaut déjà $20$ °C, et la température finit par baisser alors que le temps augmente).`
    },
    {
      id: "5P2-ds-16",
      title: "Deux cuves reliées",
      difficulty: 4,
      points: 6,
      statement: `Dans une station d'épuration, on transvase de l'eau entre deux cuves. À $0$ min :
- la cuve A contient $200$ L et se remplit de $15$ L par minute ;
- la cuve B contient $500$ L et se vide de $25$ L par minute.

1. Quel volume d'eau chaque cuve contient-elle au bout de $4$ minutes ?
2. Recopier et compléter le tableau.

| Temps (min) | $0$ | $2$ | $4$ | $6$ | $8$ | $10$ |
|---|---|---|---|---|---|---|
| Volume dans la cuve A (L) | $200$ | … | … | … | … | … |
| Volume dans la cuve B (L) | $500$ | … | … | … | … | … |

3. D'après le tableau, entre quels instants les deux cuves contiennent-elles le même volume d'eau ? Justifier.
4. Calculer le volume de chaque cuve au bout de $7{,}5$ minutes. Que constate-t-on ?
5. Au bout de combien de minutes la cuve B sera-t-elle vide (si on ne l'arrête pas) ?`,
      solution: `**1.** Cuve A : $200 + 4 \\times 15 = 200 + 60 = 260$ L.
Cuve B : $500 - 4 \\times 25 = 500 - 100 = 400$ L.

**2.** Toutes les $2$ minutes, A gagne $2 \\times 15 = 30$ L et B perd $2 \\times 25 = 50$ L.

| Temps (min) | $0$ | $2$ | $4$ | $6$ | $8$ | $10$ |
|---|---|---|---|---|---|---|
| Volume dans la cuve A (L) | $200$ | $230$ | $260$ | $290$ | $320$ | $350$ |
| Volume dans la cuve B (L) | $500$ | $450$ | $400$ | $350$ | $300$ | $250$ |

**3.** À $6$ min, A contient moins d'eau que B ($290 < 350$) ; à $8$ min, A en contient plus ($320 > 300$). Les volumes sont donc égaux à un instant compris **entre $6$ et $8$ minutes**.

**4.** Cuve A : $200 + 7{,}5 \\times 15 = 200 + 112{,}5 = 312{,}5$ L.
Cuve B : $500 - 7{,}5 \\times 25 = 500 - 187{,}5 = 312{,}5$ L.
Les deux cuves contiennent **le même volume** ($312{,}5$ L) au bout de $7{,}5$ minutes, soit $7$ min $30$ s.
(Autre raisonnement : au départ, l'écart est de $500 - 200 = 300$ L, et il diminue de $15 + 25 = 40$ L par minute ; il s'annule au bout de $300 \\div 40 = 7{,}5$ minutes.)

**5.** La cuve B perd $25$ L par minute : elle est vide au bout de $500 \\div 25 = $ **$20$ minutes**.`
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
    },
    {
      id: "5A1-ds-09",
      title: "Le compte à rebours",
      difficulty: 1,
      points: 4,
      statement: `On considère le script suivant, qui utilise une variable nommée « compteur ».

\`\`\`scratch
quand drapeau cliqué
mettre [compteur] à 10
répéter 4 fois
    dire (compteur) pendant 1 secondes
    ajouter -2 à [compteur]
\`\`\`

1. Quel nombre le lutin dit-il en premier ? Justifier.
2. Écrire la liste de tous les nombres dits par le lutin, dans l'ordre.
3. Quelle est la valeur de la variable « compteur » à la fin du script ? Combien de temps dure l'exécution du script (environ) ?
4. On veut que le lutin dise $10$, $8$, $6$, $4$, $2$ puis $0$. Quelle modification faut-il apporter au script ?`,
      solution: `**1.** La variable « compteur » est initialisée à $10$ avant la boucle, et l'instruction « dire » est exécutée avant « ajouter -2 » : le lutin dit d'abord **$10$**.

**2.** À chaque passage, il dit la valeur de compteur puis lui retire $2$ :
- passage 1 : il dit $10$, compteur devient $8$ ;
- passage 2 : il dit $8$, compteur devient $6$ ;
- passage 3 : il dit $6$, compteur devient $4$ ;
- passage 4 : il dit $4$, compteur devient $2$.
Le lutin dit : $10$, $8$, $6$, $4$.

**3.** À la fin, compteur vaut **$2$**. Chaque nombre est affiché pendant $1$ seconde et il y a $4$ passages : le script dure environ $4$ secondes.

**4.** Il faut dire $6$ nombres au lieu de $4$ : on remplace « répéter 4 fois » par « répéter **6** fois ». (On peut vérifier : la dernière valeur dite est $10 - 5 \\times 2 = 0$.)`
    },
    {
      id: "5A1-ds-10",
      title: "Les créneaux du château fort",
      difficulty: 2,
      points: 5,
      statement: `Le lutin part du point de coordonnées $(-90 \\,;\\, 0)$, orienté vers la droite (orientation $90$).

\`\`\`scratch
quand drapeau cliqué
effacer tout
aller à x: -90 y: 0
s'orienter à 90
stylo en position d'écriture
répéter 3 fois
    avancer de 30 pas
    tourner ↺ de 90 degrés
    avancer de 20 pas
    tourner ↻ de 90 degrés
    avancer de 30 pas
    tourner ↻ de 90 degrés
    avancer de 20 pas
    tourner ↺ de 90 degrés
\`\`\`

1. Décrire le trajet du lutin pendant le premier passage dans la boucle et donner ses coordonnées à la fin de ce passage.
2. Dans quelle direction le lutin est-il orienté à la fin d'un passage ? Pourquoi est-ce important pour la suite ?
3. Tracer à main levée la figure obtenue et donner les coordonnées du lutin à la fin du script.
4. Calculer la longueur totale du tracé.
5. On veut que le lutin s'arrête au point d'abscisse $150$. Combien de répétitions faut-il programmer ?`,
      solution: `**1.** Le lutin avance de $30$ pas vers la droite (jusqu'à $(-60 \\,;\\, 0)$), tourne vers le haut et monte de $20$ pas (jusqu'à $(-60 \\,;\\, 20)$), tourne vers la droite et avance de $30$ pas (jusqu'à $(-30 \\,;\\, 20)$), tourne vers le bas et descend de $20$ pas (jusqu'à $(-30 \\,;\\, 0)$), puis tourne de nouveau vers la droite.
À la fin du premier passage, il est en $(-30 \\,;\\, 0)$.

**2.** Il a tourné deux fois ↺ et deux fois ↻ de $90^\\circ$ : les rotations se compensent et il est de nouveau **orienté vers la droite**. Ainsi, chaque passage reproduit le même motif, décalé de $60$ pas vers la droite.

**3.** La figure est une ligne en créneaux (comme le haut d'une muraille de château) formée de $3$ motifs identiques. Chaque passage augmente l'abscisse de $30 + 30 = 60$ et ne change pas l'ordonnée : à la fin, le lutin est en $(-90 + 3 \\times 60 \\,;\\, 0) = (90 \\,;\\, 0)$.

**4.** Un passage : $30 + 20 + 30 + 20 = 100$ pas. Trois passages : $3 \\times 100 = 300$ pas.

**5.** Il faut parcourir horizontalement $150 - (-90) = 240$ pas, soit $240 \\div 60 = 4$ motifs : il faut programmer « répéter **4** fois ».`
    },
    {
      id: "5A1-ds-11",
      title: "L'étoile à cinq branches",
      difficulty: 3,
      points: 5,
      statement: `Au départ, le lutin est orienté vers la droite.

\`\`\`scratch
quand drapeau cliqué
effacer tout
stylo en position d'écriture
répéter 5 fois
    avancer de 100 pas
    tourner ↻ de 144 degrés
\`\`\`

1. Combien de segments le lutin trace-t-il ? Calculer la longueur totale du tracé.
2. De combien de degrés le lutin a-t-il tourné au total à la fin du script ? Combien de tours complets cela représente-t-il ? Dans quelle direction est-il alors orienté ?
3. On admet que le lutin revient à son point de départ. Dessiner à main levée la figure obtenue.
4. Noa remplace $144$ par $72$ dans le script. De combien de degrés le lutin tourne-t-il au total ? Quelle figure obtient-on ?
5. Avec le script de départ, Noa remplace « répéter 5 fois » par « répéter 3 fois ». Le lutin revient-il à son point de départ ? Justifier par un calcul d'angle.`,
      solution: `**1.** L'instruction « avancer de 100 pas » est exécutée $5$ fois : le lutin trace $5$ segments, pour une longueur totale de $5 \\times 100 = 500$ pas.

**2.** $5 \\times 144 = 720^\\circ$. Or un tour complet vaut $360^\\circ$ et $720 = 2 \\times 360$ : le lutin a fait **deux tours complets**. Il est donc de nouveau orienté vers la droite, comme au départ.

**3.** La figure est une **étoile à cinq branches** : les cinq segments se croisent et l'on retrouve le tracé de l'étoile « dessinée sans lever le crayon ».

**4.** $5 \\times 72 = 360^\\circ$ : un seul tour complet. Le lutin trace $5$ côtés de même longueur en tournant toujours du même angle : on obtient un **pentagone régulier** de côté $100$ pas.

**5.** Après $3$ passages, le lutin a tourné de $3 \\times 144 = 432^\\circ$, soit un tour complet plus $72^\\circ$ : il n'a pas retrouvé son orientation de départ, et il n'a tracé que trois des cinq branches. Il **ne revient pas** à son point de départ : la figure est une étoile inachevée.`
    },
    {
      id: "5A1-ds-12",
      title: "Des carrés emboîtés",
      difficulty: 4,
      points: 6,
      statement: `Au départ, le lutin est en $(0 \\,;\\, 0)$, orienté vers la droite.

\`\`\`scratch
quand drapeau cliqué
effacer tout
aller à x: 0 y: 0
s'orienter à 90
stylo en position d'écriture
mettre [côté] à 20
répéter 4 fois
    répéter 4 fois
        avancer de (côté) pas
        tourner ↺ de 90 degrés
    ajouter 20 à [côté]
\`\`\`

1. Que trace la boucle intérieure lors du premier passage dans la grande boucle ? Où se trouve alors le lutin, et vers où est-il orienté ?
2. Recopier et compléter le tableau.

| Passage dans la grande boucle | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| Valeur de côté au début du passage | $20$ | … | … | … |
| Longueur tracée pendant le passage (pas) | $80$ | … | … | … |

3. Dessiner à main levée la figure obtenue. Quels sont les points communs à tous les carrés ?
4. Quelle est la valeur de la variable « côté » à la fin du script ? Calculer la longueur totale du tracé.
5. On veut obtenir $6$ carrés emboîtés dont le plus grand a pour côté $120$ pas. Quelle modification faut-il apporter ? Calculer alors la longueur totale du tracé.`,
      solution: `**1.** La boucle intérieure fait avancer le lutin de $20$ pas puis tourner d'un quart de tour vers la gauche, $4$ fois : elle trace un **carré de côté $20$ pas**. Le lutin a tourné de $4 \\times 90 = 360^\\circ$ et a fait le tour du carré : il est revenu en $(0 \\,;\\, 0)$, orienté vers la droite.

**2.** À chaque passage, côté augmente de $20$, et le lutin trace un carré de périmètre $4 \\times \\text{côté}$.

| Passage dans la grande boucle | $1$ | $2$ | $3$ | $4$ |
|---|---|---|---|---|
| Valeur de côté au début du passage | $20$ | $40$ | $60$ | $80$ |
| Longueur tracée pendant le passage (pas) | $80$ | $160$ | $240$ | $320$ |

**3.** On obtient $4$ carrés de côtés $20$, $40$, $60$ et $80$ pas, emboîtés les uns dans les autres. Ils ont tous pour sommet le point $(0 \\,;\\, 0)$ (coin en bas à gauche), et leurs côtés de départ sont portés par les mêmes demi-droites (vers la droite et vers le haut).

**4.** Après le $4^\\text{e}$ passage, on a ajouté $20$ une dernière fois : côté vaut $80 + 20 = 100$.
Longueur totale : $80 + 160 + 240 + 320 = 800$ pas.

**5.** Les côtés seront $20$, $40$, $60$, $80$, $100$ et $120$ : il suffit de remplacer la grande boucle « répéter 4 fois » par « répéter **6** fois » (la boucle intérieure reste « répéter 4 fois »).
Longueur totale : $4 \\times (20 + 40 + 60 + 80 + 100 + 120) = 4 \\times 420 = 1\\,680$ pas.`
    },
    {
      id: "5A1-ds-13",
      title: "Le tarif du cinéma",
      difficulty: 1,
      points: 4,
      statement: `Un cinéma utilise le script suivant pour afficher le prix d'une place.

\`\`\`scratch
quand drapeau cliqué
demander [Quel est ton âge ?] et attendre
si (réponse < 14) alors
    dire [Tarif réduit : 5 euros]
sinon
    dire [Tarif plein : 9 euros]
\`\`\`

1. Que dit le lutin si l'on répond $10$ ? si l'on répond $16$ ?
2. Que dit le lutin si l'on répond $14$ ? Justifier.
3. Une famille va au cinéma : deux adultes de $40$ ans et deux enfants de $8$ ans et $14$ ans. Combien va-t-elle payer en tout ?
4. Le cinéma décide que les jeunes de $14$ ans paieront aussi le tarif réduit. Quelle modification faut-il apporter au script ?`,
      solution: `**1.** Avec $10$ : la condition « $10 < 14$ » est vraie, le lutin exécute le bloc « si » et dit **« Tarif réduit : 5 euros »**.
Avec $16$ : « $16 < 14$ » est fausse, le lutin exécute le bloc « sinon » et dit **« Tarif plein : 9 euros »**.

**2.** « $14 < 14$ » est **fausse** ($14$ n'est pas strictement inférieur à $14$) : le lutin dit « Tarif plein : 9 euros ».

**3.** Les deux adultes et l'enfant de $14$ ans paient le tarif plein, l'enfant de $8$ ans le tarif réduit :
$3 \\times 9 + 5 = 27 + 5 = 32$ €.

**4.** Il suffit de remplacer la condition « réponse $< 14$ » par « réponse $< 15$ » : les âges $14$ ans et moins donneront alors le tarif réduit. (Pour les âges entiers, cela revient à « $14$ ans ou moins ».)`
    },
    {
      id: "5A1-ds-14",
      title: "Le nombre mystère",
      difficulty: 2,
      points: 5,
      statement: `Voici le script d'un jeu : il faut deviner le nombre mystère choisi par le lutin.

\`\`\`scratch
quand drapeau cliqué
mettre [mystère] à 37
mettre [essais] à 0
mettre [proposition] à 0
répéter jusqu'à ce que (proposition = mystère)
    demander [Propose un nombre] et attendre
    mettre [proposition] à (réponse)
    ajouter 1 à [essais]
    si (proposition < mystère) alors
        dire [Plus grand !]
    si (proposition > mystère) alors
        dire [Plus petit !]
dire (essais)
\`\`\`

1. Quel est le rôle de la variable « essais » ?
2. Léa propose successivement $50$, puis $25$, puis $40$, puis $37$. Recopier et compléter le tableau.

| Proposition de Léa | $50$ | $25$ | $40$ | $37$ |
|---|---|---|---|---|
| Message du lutin | … | … | … | … |
| Valeur de « essais » après la proposition | … | … | … | … |

3. Pourquoi la boucle s'arrête-t-elle après la proposition $37$ ? Que dit alors le lutin ?
4. Tom a deviné le nombre en $3$ essais. Donner un exemple de propositions possibles, en respectant les indications du lutin.
5. On veut que le nombre mystère soit choisi au hasard entre $1$ et $100$ à chaque partie. Quelle instruction faut-il modifier, et comment ?`,
      solution: `**1.** « essais » compte le nombre de propositions : elle vaut $0$ au départ et augmente de $1$ à chaque passage dans la boucle, c'est-à-dire à chaque nombre proposé.

**2.**

| Proposition de Léa | $50$ | $25$ | $40$ | $37$ |
|---|---|---|---|---|
| Message du lutin | Plus petit ! | Plus grand ! | Plus petit ! | aucun |
| Valeur de « essais » après la proposition | $1$ | $2$ | $3$ | $4$ |

($50 > 37$ : « Plus petit ! » ; $25 < 37$ : « Plus grand ! » ; $40 > 37$ : « Plus petit ! » ; pour $37$, aucune des deux conditions n'est vraie.)

**3.** Après la proposition $37$, la condition « proposition $=$ mystère » est vraie : la boucle « répéter jusqu'à ce que » s'arrête. Le lutin exécute l'instruction suivante et dit la valeur de « essais », c'est-à-dire **$4$**.

**4.** Par exemple : $20$ (le lutin dit « Plus grand ! »), puis $40$ (« Plus petit ! »), puis $37$. Toute suite de trois propositions dont les deux premières sont différentes de $37$ et dont la troisième est $37$ convient.

**5.** Il faut remplacer « mettre [mystère] à 37 » par « mettre [mystère] à (nombre aléatoire entre 1 et 100) ».`
    },
    {
      id: "5A1-ds-15",
      title: "La tirelire",
      difficulty: 3,
      points: 5,
      statement: `Mila a $20$ € dans sa tirelire et y ajoute $15$ € chaque semaine. Elle écrit le script suivant.

\`\`\`scratch
quand drapeau cliqué
mettre [épargne] à 20
mettre [semaine] à 0
répéter jusqu'à ce que (épargne > 100)
    ajouter 15 à [épargne]
    ajouter 1 à [semaine]
dire (semaine)
\`\`\`

1. Recopier et compléter le tableau, qui donne les valeurs des variables à la fin de chaque passage dans la boucle.

| semaine | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|---|
| épargne | $20$ | … | … | … | … | … | … |

2. Quel nombre le lutin dit-il ? Que représente ce nombre pour Mila ?
3. Quelle est la valeur de la variable « épargne » à la fin du script ?
4. Son frère Tom remplace la condition « épargne $> 100$ » par « épargne $= 100$ ». Que se passe-t-il quand on lance son script ? Justifier.
5. Tom garde la condition « épargne $= 100$ ». Quelle valeur de départ, comprise entre $20$ et $30$, doit-il donner à « épargne » pour que son script s'arrête ? Que dit alors le lutin ?`,
      solution: `**1.** À chaque passage, « épargne » augmente de $15$ et « semaine » de $1$.

| semaine | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|---|
| épargne | $20$ | $35$ | $50$ | $65$ | $80$ | $95$ | $110$ |

**2.** Après $5$ passages, épargne vaut $95$, qui n'est pas supérieur à $100$ : la boucle continue. Après $6$ passages, épargne vaut $110 > 100$ : la boucle s'arrête. Le lutin dit **$6$** : il faut $6$ semaines à Mila pour avoir plus de $100$ € dans sa tirelire.

**3.** À la fin du script, épargne vaut **$110$**.

**4.** Les valeurs successives de épargne sont $20$, $35$, $50$, $65$, $80$, $95$, $110$, $125$… : on passe de $95$ à $110$ sans jamais obtenir exactement $100$. La condition « épargne $= 100$ » n'est jamais vraie : la boucle **ne s'arrête jamais** (le lutin ne dit rien et le script tourne sans fin).

**5.** Il faut atteindre exactement $100$ en ajoutant des paquets de $15$. En partant de $25$ : $25 + 5 \\times 15 = 25 + 75 = 100$. Il faut donc partir de **$25$** ; la boucle s'arrête après $5$ passages et le lutin dit **$5$**.
(On vérifie qu'aucune autre valeur entre $20$ et $30$ ne convient : il faudrait que $100$ moins cette valeur soit un multiple de $15$, et seul $100 - 25 = 75$ l'est.)`
    },
    {
      id: "5A1-ds-16",
      title: "La somme des multiples",
      difficulty: 4,
      points: 6,
      statement: `Dans Scratch, « a modulo b » donne le reste de la division euclidienne de a par b. On considère le script suivant.

\`\`\`scratch
quand drapeau cliqué
mettre [somme] à 0
mettre [nombre] à 1
répéter 20 fois
    si ((nombre modulo 3) = 0) alors
        ajouter nombre à [somme]
    ajouter 1 à [nombre]
dire (somme)
\`\`\`

1. Calculer $7$ modulo $3$, puis $12$ modulo $3$. Que signifie la condition « (nombre modulo $3$) $= 0$ » ?
2. Recopier et compléter le tableau pour les sept premiers passages dans la boucle.

| Passage | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
|---|---|---|---|---|---|---|---|
| Valeur de nombre au début du passage | $1$ | $2$ | … | … | … | … | … |
| Valeur de somme à la fin du passage | $0$ | $0$ | … | … | … | … | … |

3. Quelles sont toutes les valeurs de « nombre » testées par la condition ? Quel nombre le lutin dit-il à la fin ? Décrire par une phrase ce que calcule ce script.
4. Quelle est la valeur de « nombre » à la fin du script ?
5. Modifier le script pour qu'il calcule la somme des multiples de $5$ compris entre $1$ et $50$. Quel nombre le lutin dira-t-il alors ?`,
      solution: `**1.** $7 = 2 \\times 3 + 1$, donc $7$ modulo $3$ vaut $1$. $12 = 4 \\times 3 + 0$, donc $12$ modulo $3$ vaut $0$.
La condition « (nombre modulo $3$) $= 0$ » signifie que le reste de la division de nombre par $3$ est nul, c'est-à-dire que **nombre est un multiple de $3$**.

**2.** Seuls $3$ et $6$ sont des multiples de $3$ parmi les nombres de $1$ à $7$ : somme augmente de $3$ au passage $3$, puis de $6$ au passage $6$.

| Passage | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
|---|---|---|---|---|---|---|---|
| Valeur de nombre au début du passage | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
| Valeur de somme à la fin du passage | $0$ | $0$ | $3$ | $3$ | $3$ | $9$ | $9$ |

**3.** La boucle est exécutée $20$ fois et nombre augmente de $1$ à chaque passage : les valeurs testées sont $1$, $2$, $3$, …, $20$.
Les multiples de $3$ parmi elles sont $3$, $6$, $9$, $12$, $15$, $18$ ; le lutin dit $3 + 6 + 9 + 12 + 15 + 18 = $ **$63$**.
Ce script calcule **la somme des multiples de $3$ compris entre $1$ et $20$**.

**4.** Au dernier passage, nombre vaut $20$ au début puis on lui ajoute $1$ : à la fin, nombre vaut **$21$**.

**5.** Il faut tester les nombres de $1$ à $50$ et garder les multiples de $5$ : on remplace « répéter 20 fois » par « répéter **50** fois » et « (nombre modulo 3) » par « (nombre modulo **5**) ».
Le lutin dira $5 + 10 + 15 + 20 + 25 + 30 + 35 + 40 + 45 + 50 = $ **$275$**.
(Astuce : $5 + 50 = 10 + 45 = 15 + 40 = 20 + 35 = 25 + 30 = 55$, et $5 \\times 55 = 275$.)`
    }
  ]
});
