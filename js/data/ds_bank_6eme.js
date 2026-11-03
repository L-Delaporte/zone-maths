/**
 * Banque d'exercices de devoir surveillé — 6e (questions ouvertes, corrigés rédigés).
 * Programme de 6e (arrêté du 10 avril 2025). Schéma : voir scripts/tests/test_ds_banks.js
 */
window.MATHS_DS_BANK = window.MATHS_DS_BANK || {};
Object.assign(window.MATHS_DS_BANK, {
  "6N1": [
    {
      id: "6N1-ds-01",
      title: "La valeur des chiffres d'un grand nombre",
      difficulty: 1,
      points: 4,
      statement: `Une sonde spatiale a parcouru $4\\,507\\,238{,}196$ km depuis son lancement.

1. Dans ce nombre, donner :
   a) le chiffre des centaines ;
   b) le chiffre des dixièmes ;
   c) le chiffre des millièmes ;
   d) le chiffre des unités de mille.
2. Quelle est la valeur du chiffre $5$ dans ce nombre ?
3. Combien y a-t-il de centaines (en tout) dans ce nombre ?
4. Écrire en lettres la partie entière de ce nombre.`,
      solution: `On place le nombre dans un tableau de numération : $4\\,507\\,238{,}196$ = 4 millions, 5 centaines de mille, 0 dizaine de mille, 7 unités de mille, 2 centaines, 3 dizaines, 8 unités, puis 1 dixième, 9 centièmes, 6 millièmes.

**1.** a) Le chiffre des centaines est $2$.
b) Le chiffre des dixièmes est $1$ (premier chiffre après la virgule).
c) Le chiffre des millièmes est $6$ (troisième chiffre après la virgule).
d) Le chiffre des unités de mille est $7$.

**2.** Le chiffre $5$ est au rang des centaines de mille : il vaut $500\\,000$.

**3.** On garde tous les chiffres jusqu'au rang des centaines : $4\\,507\\,238 = 45\\,072 \\times 100 + 38$. Il y a donc **$45\\,072$ centaines** dans ce nombre.

**4.** $4\\,507\\,238$ s'écrit : « quatre millions cinq cent sept mille deux cent trente-huit ».`
    },
    {
      id: "6N1-ds-02",
      title: "Fractions décimales et écriture à virgule",
      difficulty: 1,
      points: 4,
      statement: `Sans calculatrice.

1. Donner l'écriture à virgule de chacun des nombres suivants :
$$A = \\frac{37}{10} \\qquad B = \\frac{506}{100} \\qquad C = \\frac{49}{1\\,000} \\qquad D = 8 + \\frac{3}{10} + \\frac{5}{1\\,000}$$
2. Écrire chacun des nombres suivants sous la forme d'une fraction décimale : $2{,}7$ ; $0{,}43$ ; $12{,}008$.
3. Décomposer le nombre $64{,}25$ sous la forme : partie entière $+$ fractions décimales (dixièmes, centièmes).`,
      solution: `**1.**
- $A = \\frac{37}{10}$ : 37 dixièmes, c'est 3 unités et 7 dixièmes, donc $A = 3{,}7$.
- $B = \\frac{506}{100}$ : 506 centièmes, c'est 5 unités, 0 dixième et 6 centièmes, donc $B = 5{,}06$.
- $C = \\frac{49}{1\\,000}$ : 49 millièmes, donc $C = 0{,}049$.
- $D = 8 + \\frac{3}{10} + \\frac{5}{1\\,000}$ : 8 unités, 3 dixièmes, 0 centième, 5 millièmes, donc $D = 8{,}305$.

**2.** $2{,}7 = \\frac{27}{10}$ ; $\\quad 0{,}43 = \\frac{43}{100}$ ; $\\quad 12{,}008 = \\frac{12\\,008}{1\\,000}$.
(Le dernier chiffre est celui des dixièmes, des centièmes ou des millièmes : c'est ce qui donne le dénominateur.)

**3.** $64{,}25 = 64 + \\frac{2}{10} + \\frac{5}{100}$ (2 dixièmes et 5 centièmes).`
    },
    {
      id: "6N1-ds-03",
      title: "Lire et écrire de grands nombres",
      difficulty: 2,
      points: 4,
      statement: `Dans un livre de géographie, Nina lit les informations suivantes.
- « La France compte environ soixante-huit millions trois cent mille habitants. »
- « La distance moyenne entre la Terre et le Soleil est d'environ cent quarante-neuf millions six cent mille kilomètres. »

1. Écrire ces deux nombres en chiffres.
2. Combien de millions y a-t-il dans le nombre de kilomètres de la Terre au Soleil ?
3. Écrire en lettres le nombre $2\\,030\\,405\\,000$.
4. On lit aussi : « La population mondiale a dépassé 8 milliards d'habitants. » Écrire 8 milliards en chiffres. Combien de zéros comporte ce nombre ?`,
      solution: `**1.** On regroupe les chiffres par classes de trois (millions, milliers, unités) :
- soixante-huit millions trois cent mille : $68\\,300\\,000$ habitants ;
- cent quarante-neuf millions six cent mille : $149\\,600\\,000$ km.

**2.** Dans $149\\,600\\,000$, la classe des millions contient $149$ : il y a **149 millions** (en entier) dans ce nombre.

**3.** $2\\,030\\,405\\,000$ = 2 milliards, 30 millions, 405 milliers, 0 unité : « deux milliards trente millions quatre cent cinq mille ».

**4.** 8 milliards s'écrit $8\\,000\\,000\\,000$ : un milliard s'écrit avec 9 zéros, donc ce nombre comporte **9 zéros**.`
    },
    {
      id: "6N1-ds-04",
      title: "Nombres mixtes et pourcentages",
      difficulty: 2,
      points: 5,
      statement: `1. Écrire chaque fraction sous la forme d'un nombre mixte (un entier plus une fraction inférieure à $1$) :
$$\\frac{17}{5} \\qquad \\frac{23}{4}$$
2. Écrire $2 + \\frac{3}{7}$ sous la forme d'une seule fraction.
3. Dans un collège, $45\\,\\%$ des élèves mangent à la cantine.
   a) Écrire $45\\,\\%$ sous la forme d'une fraction décimale, puis d'un nombre à virgule.
   b) Écrire le nombre $0{,}08$ sous la forme d'un pourcentage.
   c) Écrire $\\frac{3}{4}$ sous la forme d'une fraction de dénominateur $100$, puis d'un pourcentage.`,
      solution: `**1.** $17 = 5 \\times 3 + 2$, donc $\\frac{17}{5} = \\frac{15}{5} + \\frac{2}{5} = 3 + \\frac{2}{5}$.
$23 = 4 \\times 5 + 3$, donc $\\frac{23}{4} = \\frac{20}{4} + \\frac{3}{4} = 5 + \\frac{3}{4}$.

**2.** $2 = \\frac{14}{7}$, donc $2 + \\frac{3}{7} = \\frac{14}{7} + \\frac{3}{7} = \\frac{17}{7}$.

**3.** a) Un pourcentage est une fraction de dénominateur 100 : $45\\,\\% = \\frac{45}{100} = 0{,}45$.
b) $0{,}08 = \\frac{8}{100} = 8\\,\\%$.
c) $\\frac{3}{4} = \\frac{3 \\times 25}{4 \\times 25} = \\frac{75}{100} = 75\\,\\%$.`
    },
    {
      id: "6N1-ds-05",
      title: "Le nombre mystère",
      difficulty: 3,
      points: 5,
      statement: `Lucas propose une énigme à sa classe :
- « Mon nombre de dizaines est $352$.
- Mon chiffre des unités est $3$.
- Mon chiffre des dixièmes est le double de mon chiffre des unités.
- Mon chiffre des centièmes est $0$.
- Mon chiffre des millièmes est égal à la somme de mes chiffres des milliers et des unités.
- Je n'ai pas d'autre chiffre après les millièmes. »

1. Trouver le nombre de Lucas. Expliquer la démarche.
2. Écrire ce nombre sous la forme d'une fraction décimale.
3. Écrire ce nombre en lettres, en utilisant le mot « millièmes ».
4. Combien de centièmes (en tout) y a-t-il dans ce nombre ?`,
      solution: `**1.**
- « Mon nombre de dizaines est 352 » : la partie entière s'écrit $352\\ldots$, entre $3\\,520$ et $3\\,529$.
- Le chiffre des unités est 3 : la partie entière est $3\\,523$.
- Le chiffre des dixièmes est le double de 3 : c'est $6$.
- Le chiffre des centièmes est $0$.
- Le chiffre des milliers est 3 et celui des unités est 3 : le chiffre des millièmes est $3 + 3 = 6$.

Le nombre de Lucas est **$3\\,523{,}606$**.

**2.** Il y a trois chiffres après la virgule (millièmes) : $3\\,523{,}606 = \\frac{3\\,523\\,606}{1\\,000}$.

**3.** « Trois mille cinq cent vingt-trois unités et six cent six millièmes ».

**4.** Une unité vaut 100 centièmes, donc $3\\,523{,}606$ correspond à $352\\,360{,}6$ centièmes : on garde les chiffres jusqu'au rang des centièmes, $352\\,360$. Il y a **$352\\,360$ centièmes** en tout.`
    },
    {
      id: "6N1-ds-06",
      title: "Corriger les erreurs de Léo",
      difficulty: 3,
      points: 5,
      statement: `Léo a rendu l'exercice suivant. Pour chaque égalité, dire si elle est vraie ou fausse. Si elle est fausse, expliquer l'erreur de Léo et la corriger.

1. $3{,}7 = \\frac{3}{7}$
2. $0{,}25 = \\frac{25}{10}$
3. $4 + \\frac{6}{100} = 4{,}6$
4. $12\\,\\% = 0{,}12$
5. « Le chiffre des dixièmes de $5{,}083$ est $8$. »`,
      solution: `**1.** Faux. Léo a confondu la virgule et le trait de fraction. $3{,}7$ c'est 37 dixièmes : $3{,}7 = \\frac{37}{10}$ (alors que $\\frac{3}{7}$ est plus petit que 1).

**2.** Faux. Le dernier chiffre de $0{,}25$ est au rang des centièmes : $0{,}25 = \\frac{25}{100}$. (On a $\\frac{25}{10} = 2{,}5$.)

**3.** Faux. $\\frac{6}{100}$, ce sont 6 centièmes : le chiffre 6 doit être au 2e rang après la virgule, avec un 0 au rang des dixièmes. $4 + \\frac{6}{100} = 4{,}06$.

**4.** Vrai : $12\\,\\% = \\frac{12}{100} = 0{,}12$.

**5.** Faux. Le chiffre des dixièmes est le premier chiffre après la virgule : dans $5{,}083$ c'est $0$. Le chiffre $8$ est celui des centièmes.`
    },
    {
      id: "6N1-ds-07",
      title: "Le budget d'une commune",
      difficulty: 4,
      points: 6,
      statement: `Le budget annuel d'une commune est de $2\\,450\\,000$ €. Le conseil municipal le répartit ainsi :
- écoles : $18\\,\\%$ du budget ;
- routes et trottoirs : $\\frac{3}{10}$ du budget ;
- sport et culture : $0{,}12$ du budget ;
- tout le reste est consacré aux autres dépenses.

1. Écrire en lettres le montant du budget.
2. Écrire la part de chaque poste (écoles, routes, sport et culture) sous la forme d'un pourcentage.
3. Quel pourcentage du budget est consacré aux autres dépenses ? Justifier.
4. Ranger les quatre postes de dépenses du plus petit au plus grand.
5. L'année suivante, le budget augmente de $10$ dizaines de milliers d'euros. Quel est le nouveau budget ?`,
      solution: `**1.** $2\\,450\\,000$ € : « deux millions quatre cent cinquante mille euros ».

**2.** Un pourcentage est une fraction de dénominateur 100.
- Écoles : $18\\,\\%$.
- Routes : $\\frac{3}{10} = \\frac{30}{100} = 30\\,\\%$.
- Sport et culture : $0{,}12 = \\frac{12}{100} = 12\\,\\%$.

**3.** Le budget entier correspond à $100\\,\\%$. Les trois premiers postes représentent $18 + 30 + 12 = 60$, soit $60\\,\\%$. Il reste $100 - 60 = 40$ : les autres dépenses représentent **$40\\,\\%$** du budget.

**4.** $12\\,\\% < 18\\,\\% < 30\\,\\% < 40\\,\\%$ : sport et culture, écoles, routes, autres dépenses.

**5.** 10 dizaines de milliers, c'est $10 \\times 10\\,000 = 100\\,000$ €. Le chiffre des centaines de mille passe de 4 à 5 : le nouveau budget est de **$2\\,550\\,000$ €**.`
    },
    {
      id: "6N1-ds-08",
      title: "Le jeu des cartes chiffres",
      difficulty: 4,
      points: 5,
      statement: `Inès dispose de cinq cartes portant les chiffres $2$, $4$, $5$, $7$ et $9$, et d'une carte « virgule ». Elle forme des nombres en utilisant **chaque carte exactement une fois**, avec toujours **deux chiffres après la virgule**.

1. Quel est le plus grand nombre qu'elle peut former ? Le plus petit ? Expliquer.
2. Quel nombre doit-elle former pour être le plus près possible de $500$ ? Justifier.
3. Écrire le nombre trouvé à la question 2 sous la forme d'une fraction décimale, puis le décomposer (centaines, dizaines, unités, dixièmes, centièmes).
4. Quel est le plus grand nombre qu'elle peut former dont le chiffre des centaines est $2$ et le chiffre des dixièmes est $9$ ?`,
      solution: `**1.** Le nombre s'écrit avec 3 chiffres avant la virgule et 2 après. Pour le plus grand, on place les chiffres du plus grand au plus petit, en commençant par le rang le plus élevé : **$975{,}42$**. Pour le plus petit, on les place du plus petit au plus grand : **$245{,}79$**.

**2.** On ne peut pas former exactement 500 (il n'y a pas de carte 0) : on cherche le nombre le plus proche juste en dessous et juste au-dessus.
- En dessous de 500 : le plus grand nombre commençant par 4 est $497{,}52$ ; il est à $500 - 497{,}52 = 2{,}48$ de 500.
- Au-dessus de 500 : le plus petit nombre commençant par 5 est $524{,}79$ ; il est à $24{,}79$ de 500.

Le nombre le plus proche de 500 est donc **$497{,}52$**.

**3.** $497{,}52 = \\frac{49\\,752}{100} = 4 \\times 100 + 9 \\times 10 + 7 + \\frac{5}{10} + \\frac{2}{100}$.

**4.** On place 2 aux centaines et 9 aux dixièmes ; il reste 4, 5 et 7. Pour obtenir le plus grand nombre, on met 7 aux dizaines, 5 aux unités et 4 aux centièmes : **$275{,}94$**.`
    },
    {
      id: "6N1-ds-09",
      title: "Reconstituer un nombre à partir de sa décomposition",
      difficulty: 1,
      points: 4,
      statement: `Sans calculatrice.

1. Écrire en chiffres chacun des nombres suivants :
   a) $3$ millions, $4$ dizaines de mille, $6$ unités et $2$ centièmes ;
   b) $7$ centaines de mille, $5$ centaines et $9$ millièmes ;
   c) $8 \\times 10\\,000 + 3 \\times 100 + 1 + \\frac{4}{10}$.
2. Dans le nombre obtenu au 1. a), quel est le chiffre des dizaines de mille ? Quelle est sa valeur ?
3. Écrire en chiffres le nombre « douze unités et trente-cinq millièmes ».`,
      solution: `**1.** On remplit un tableau de numération et on écrit $0$ dans chaque rang vide.
a) $3$ millions, $0$ centaine de mille, $4$ dizaines de mille, $0$ unité de mille, $0$ centaine, $0$ dizaine, $6$ unités, $0$ dixième, $2$ centièmes : **$3\\,040\\,006{,}02$**.
b) $7$ centaines de mille, puis $0$ jusqu'aux centaines, $5$ centaines, $0$ dizaine, $0$ unité, $0$ dixième, $0$ centième, $9$ millièmes : **$700\\,500{,}009$**.
c) $8$ dizaines de mille, $0$ unité de mille, $3$ centaines, $0$ dizaine, $1$ unité et $4$ dixièmes : **$80\\,301{,}4$**.

**2.** Dans $3\\,040\\,006{,}02$, le chiffre des dizaines de mille est $4$ ; il vaut $4 \\times 10\\,000 = 40\\,000$.

**3.** Trente-cinq millièmes, c'est $\\frac{35}{1\\,000} = 0{,}035$ (le $5$ doit être au rang des millièmes, avec un $0$ aux dixièmes). Le nombre est **$12{,}035$**.`
    },
    {
      id: "6N1-ds-10",
      title: "Remplir un chèque",
      difficulty: 2,
      points: 4,
      statement: `Sur un chèque, la somme doit être écrite en chiffres et en lettres.

1. M. Durand achète un canapé à $1\\,280{,}50$ €. Écrire cette somme en lettres (avec les mots « euros » et « centimes »).
2. Mme Petit a écrit sur son chèque : « deux mille quatorze euros et sept centimes ». Écrire cette somme en chiffres.
3. Un centime vaut un centième d'euro. Écrire $7$ centimes sous la forme d'une fraction décimale d'euro, puis d'un nombre à virgule.
4. Combien de centimes y a-t-il en tout dans $1\\,280{,}50$ € ?
5. Un chèque porte la somme $3\\,006{,}8$ €. Le banquier préfère qu'on écrive $3\\,006{,}80$ €. Les deux écritures représentent-elles la même somme ? Justifier.`,
      solution: `**1.** $1\\,280{,}50$ € : « mille deux cent quatre-vingts euros et cinquante centimes ».

**2.** Deux mille quatorze euros : $2\\,014$ ; sept centimes : $0{,}07$ €. La somme est **$2\\,014{,}07$ €** (le $7$ est au rang des centièmes, avec $0$ aux dixièmes).

**3.** $7$ centimes $= \\frac{7}{100}$ € $= 0{,}07$ €.

**4.** $1$ € $= 100$ centimes, donc $1\\,280$ € $= 128\\,000$ centimes. On ajoute $50$ centimes : $128\\,000 + 50 = 128\\,050$ centimes.

**5.** Oui. $3\\,006{,}8$ a $8$ dixièmes et $0$ centième ; $3\\,006{,}80$ aussi. Ajouter un zéro à la fin de la partie décimale ne change pas la valeur du nombre : $\\frac{8}{10} = \\frac{80}{100}$. Les deux écritures désignent $3\\,006$ euros et $80$ centimes.`
    },
    {
      id: "6N1-ds-11",
      title: "Une même longueur, plusieurs écritures",
      difficulty: 3,
      points: 5,
      statement: `Une planche mesure $3{,}456$ m.

1. Donner le chiffre des dixièmes, celui des centièmes et celui des millièmes de ce nombre.
2. Sachant que $1$ dm $= \\frac{1}{10}$ m, $1$ cm $= \\frac{1}{100}$ m et $1$ mm $= \\frac{1}{1\\,000}$ m, combien la planche mesure-t-elle de millimètres ? de centimètres ?
3. Compléter, en expliquant : $3{,}456 = 3 + \\frac{\\ldots}{10} + \\frac{\\ldots}{100} + \\frac{\\ldots}{1\\,000}$ et $3{,}456 = 3 + \\frac{\\ldots}{1\\,000}$.
4. Combien y a-t-il de dixièmes (en tout) dans $3{,}456$ ?
5. On coupe dans cette planche un morceau de $4$ dixièmes de mètre. Écrire la longueur restante à l'aide d'une écriture à virgule.`,
      solution: `**1.** Dixièmes : $4$ ; centièmes : $5$ ; millièmes : $6$.

**2.** $1$ m $= 1\\,000$ mm, donc $3{,}456$ m $= 3\\,456$ mm (le chiffre des millièmes de mètre est celui des millimètres).
$1$ m $= 100$ cm, donc $3{,}456$ m $= 345{,}6$ cm.

**3.** $3{,}456 = 3 + \\frac{4}{10} + \\frac{5}{100} + \\frac{6}{1\\,000}$ (un chiffre par rang).
Les trois chiffres après la virgule forment $456$ millièmes : $3{,}456 = 3 + \\frac{456}{1\\,000}$.

**4.** Une unité vaut $10$ dixièmes : $3$ unités font $30$ dixièmes, auxquels on ajoute les $4$ dixièmes, soit **$34$ dixièmes** en tout (le reste, $56$ millièmes, ne fait pas un dixième entier).

**5.** On retire $4$ dixièmes : le chiffre des dixièmes passe de $4$ à $0$. Il reste $3{,}056$ m.`
    },
    {
      id: "6N1-ds-12",
      title: "Le compteur du vélo",
      difficulty: 4,
      points: 5,
      statement: `Le compteur du vélo de Yanis affiche les kilomètres parcourus avec un chiffre après la virgule. Ce matin, il affiche $1\\,999{,}7$.

1. Écrire ce nombre en lettres, puis sous la forme d'une fraction décimale.
2. Yanis parcourt $3$ dixièmes de kilomètre. Expliquer, en comptant les dixièmes, ce que devient l'affichage. Combien de chiffres du compteur ont changé ?
3. Le soir, le compteur affiche $2\\,035{,}1$.
   a) Donner le chiffre des dizaines et le chiffre des dixièmes de ce nombre.
   b) Combien de dixièmes de kilomètre (en tout) ce nombre représente-t-il ?
4. Yanis remarque que le compteur affichera un jour un nombre dont les cinq chiffres sont tous égaux.
   a) Écrire les trois plus petits nombres de ce type que peut afficher le compteur (en dehors de $0\\,000{,}0$).
   b) Quel est le premier nombre de ce type qui apparaîtra après $2\\,035{,}1$ ? Justifier en comparant.
   c) Décomposer ce nombre : partie entière $+$ fraction décimale.`,
      solution: `**1.** « Mille neuf cent quatre-vingt-dix-neuf unités et sept dixièmes ». Il y a un chiffre après la virgule, donc $1\\,999{,}7 = \\frac{19\\,997}{10}$.

**2.** Le compteur affiche $19\\,997$ dixièmes. En ajoutant $3$ dixièmes, on obtient $20\\,000$ dixièmes, c'est-à-dire $2\\,000$ unités : l'affichage devient **$2\\,000{,}0$**. Les **cinq chiffres** ont changé ($1 \\to 2$, $9 \\to 0$, $9 \\to 0$, $9 \\to 0$, $7 \\to 0$).

**3.** a) Dans $2\\,035{,}1$ : le chiffre des dizaines est $3$ et le chiffre des dixièmes est $1$.
b) $2\\,035{,}1 = \\frac{20\\,351}{10}$ : ce nombre représente **$20\\,351$ dixièmes** de kilomètre.

**4.** a) Les plus petits sont $1\\,111{,}1$ ; $2\\,222{,}2$ et $3\\,333{,}3$.
b) $1\\,111{,}1 < 2\\,035{,}1$ car, au rang des unités de mille, $1 < 2$. Ensuite $2\\,222{,}2$ et $2\\,035{,}1$ ont le même chiffre des milliers ($2$) ; au rang des centaines, $2 > 0$, donc $2\\,222{,}2 > 2\\,035{,}1$. Le premier nombre de ce type après $2\\,035{,}1$ est **$2\\,222{,}2$**.
c) $2\\,222{,}2 = 2\\,222 + \\frac{2}{10}$.`
    },
    {
      id: "6N1-ds-13",
      title: "Des nombres dictés",
      difficulty: 1,
      points: 4,
      statement: `Lors d'une dictée de nombres, le professeur lit les nombres suivants :
- a) « deux millions quarante mille trois cent six » ;
- b) « dix-sept unités et neuf centièmes » ;
- c) « trois cent cinq millièmes » ;
- d) « quatre mille deux unités et soixante-dix-huit centièmes ».

1. Écrire chacun de ces nombres en chiffres.
2. Pour le nombre d), donner :
   a) son chiffre des dizaines ;
   b) son chiffre des dixièmes ;
   c) son nombre de centaines (en tout).
3. Écrire le nombre c) sous la forme d'une fraction décimale.`,
      solution: `**1.**
a) $2\\,040\\,306$ (2 millions, 0 centaine de mille, 4 dizaines de mille, 0 unité de mille, 3 centaines, 0 dizaine, 6 unités).
b) $17{,}09$ : il n'y a aucun dixième, on écrit donc un $0$ au rang des dixièmes.
c) $0{,}305$ : $305$ millièmes, c'est $3$ dixièmes, $0$ centième et $5$ millièmes.
d) $4\\,002{,}78$ : $78$ centièmes, c'est $7$ dixièmes et $8$ centièmes.

**2.** Dans $4\\,002{,}78$ :
a) le chiffre des dizaines est $0$ ;
b) le chiffre des dixièmes est $7$ ;
c) on garde tous les chiffres jusqu'au rang des centaines : $4\\,002 = 40 \\times 100 + 2$, il y a donc **$40$ centaines** dans ce nombre.

**3.** $0{,}305 = \\frac{305}{1\\,000}$ (le dernier chiffre est celui des millièmes, d'où le dénominateur $1\\,000$).`
    },
    {
      id: "6N1-ds-14",
      title: "Le contenu de la tirelire",
      difficulty: 2,
      points: 4,
      statement: `Rappel : $1$ € $= 100$ centimes, donc $10$ centimes $= 0{,}1$ € et $1$ centime $= 0{,}01$ €.

En vidant sa tirelire, Malik trouve :
- $3$ billets de $20$ € et $1$ billet de $5$ € ;
- $3$ pièces de $2$ € ;
- $7$ pièces de $10$ centimes ;
- $3$ pièces de $1$ centime.

1. Quelle somme, en euros, Malik possède-t-il ? Écrire le résultat avec une virgule.
2. Écrire cette somme en centimes.
3. Décomposer la somme trouvée à la question 1 sous la forme : partie entière $+$ dixièmes $+$ centièmes (avec des fractions décimales).
4. Au guichet, Malik échange tout son argent contre des pièces de $10$ centimes et des pièces de $1$ centime, avec le moins de pièces de $1$ centime possible. Combien de pièces de chaque sorte reçoit-il ?`,
      solution: `**1.** Billets et pièces en euros : $3 \\times 20 + 5 + 3 \\times 2 = 60 + 5 + 6 = 71$ €.
Les $7$ pièces de $10$ centimes valent $7$ dixièmes d'euro et les $3$ pièces de $1$ centime valent $3$ centièmes d'euro.
Malik possède donc **$71{,}73$ €**.

**2.** $71$ € $= 7\\,100$ centimes, et $70 + 3 = 73$ centimes : en tout **$7\\,173$ centimes**.

**3.** $71{,}73 = 71 + \\frac{7}{10} + \\frac{3}{100}$.

**4.** On cherche le nombre de dixièmes d'euro (pièces de $10$ centimes) contenus dans $71{,}73$ € : on garde tous les chiffres jusqu'au rang des dixièmes, soit $717$ dixièmes. Il reste $3$ centièmes.
Malik reçoit **$717$ pièces de $10$ centimes et $3$ pièces de $1$ centime**.
(Vérification : $717 \\times 10 + 3 = 7\\,173$ centimes.)`
    },
    {
      id: "6N1-ds-15",
      title: "Des décompositions inhabituelles",
      difficulty: 3,
      points: 5,
      statement: `Sans calculatrice.

1. Donner l'écriture à virgule de chacun des nombres suivants. Attention : certaines fractions ont un numérateur supérieur à $9$.
$$A = 3 + \\frac{4}{10} + \\frac{12}{100} \\qquad B = \\frac{25}{10} + \\frac{7}{100} \\qquad C = 5 + \\frac{18}{1\\,000} \\qquad D = 6 + \\frac{14}{10} + \\frac{3}{1\\,000}$$
2. Compléter les égalités suivantes :
$$4{,}6 = \\frac{\\ldots}{100} \\qquad 0{,}09 = \\frac{9}{\\ldots} \\qquad 12{,}5 = \\frac{125}{\\ldots} \\qquad 7 = \\frac{\\ldots}{1\\,000}$$
3. Écrire le nombre $8{,}26$ de trois façons différentes en utilisant des fractions décimales.`,
      solution: `**1.**
- $\\frac{12}{100}$, c'est $12$ centièmes, soit $1$ dixième et $2$ centièmes. Donc $A = 3 + \\frac{5}{10} + \\frac{2}{100} = 3{,}52$.
- $\\frac{25}{10}$, c'est $25$ dixièmes, soit $2$ unités et $5$ dixièmes. Donc $B = 2 + \\frac{5}{10} + \\frac{7}{100} = 2{,}57$.
- $\\frac{18}{1\\,000}$, c'est $18$ millièmes, soit $1$ centième et $8$ millièmes (et $0$ dixième). Donc $C = 5{,}018$.
- $\\frac{14}{10}$, c'est $1$ unité et $4$ dixièmes. Donc $D = 7 + \\frac{4}{10} + \\frac{3}{1\\,000} = 7{,}403$.

**2.**
- $4{,}6 = 4{,}60$, c'est $460$ centièmes : $4{,}6 = \\frac{460}{100}$.
- $0{,}09$, c'est $9$ centièmes : $0{,}09 = \\frac{9}{100}$.
- $12{,}5$, c'est $125$ dixièmes : $12{,}5 = \\frac{125}{10}$.
- $7$ unités, c'est $7\\,000$ millièmes : $7 = \\frac{7\\,000}{1\\,000}$.

**3.** Par exemple (d'autres réponses sont possibles) :
$$8{,}26 = \\frac{826}{100} = 8 + \\frac{26}{100} = 8 + \\frac{2}{10} + \\frac{6}{100} = \\frac{82}{10} + \\frac{6}{100}$$`
    },
    {
      id: "6N1-ds-16",
      title: "Le message codé",
      difficulty: 4,
      points: 6,
      statement: `Pour coder un mot, Jade remplace chaque lettre par un nombre dont le **chiffre des centièmes** correspond à la lettre, d'après le tableau suivant.

| Chiffre des centièmes | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Lettre | E | B | R | O | A | S | V | I | N | T |

Voici les cinq nombres de son message, dans l'ordre :
$$N_1 = 5 + \\frac{9}{10} + \\frac{11}{100} \\qquad N_2 = \\frac{47}{10} + \\frac{25}{1\\,000} \\qquad N_3 = \\frac{1\\,234}{100}$$
$$N_4 = 2 \\text{ dizaines}, \\ 15 \\text{ dixièmes et } 16 \\text{ centièmes} \\qquad N_5 = 8 + \\frac{5}{100} + \\frac{980}{1\\,000}$$

1. Écrire chaque fraction décimale de $N_1$ sous forme d'un nombre à virgule, puis donner l'écriture à virgule de $N_1$.
2. Faire de même pour $N_2$, $N_3$, $N_4$ et $N_5$.
3. Donner le chiffre des centièmes de chacun des cinq nombres, puis décoder le message.
4. Léo affirme : « Le chiffre des centièmes de $N_5$ est $5$, car on lit $\\frac{5}{100}$. » A-t-il raison ? Expliquer son erreur.
5. Proposer un nombre, écrit à l'aide d'une fraction décimale dont le numérateur est supérieur à $9$, qui code la lettre S.`,
      solution: `**1.** $\\frac{9}{10} = 0{,}9$ et $\\frac{11}{100} = 0{,}11$. Donc $N_1 = 5 + 0{,}9 + 0{,}11 = 6{,}01$ : les $9$ dixièmes et le dixième contenu dans $11$ centièmes font $10$ dixièmes, soit $1$ unité.

**2.**
- $\\frac{47}{10} = 4{,}7$ et $\\frac{25}{1\\,000} = 0{,}025$, donc $N_2 = 4{,}725$.
- $N_3 = \\frac{1\\,234}{100} = 12{,}34$.
- $N_4 = 20 + 1{,}5 + 0{,}16 = 21{,}66$.
- $\\frac{5}{100} = 0{,}05$ et $\\frac{980}{1\\,000} = 0{,}98$, donc $N_5 = 8 + 0{,}05 + 0{,}98 = 9{,}03$.

**3.**

| Nombre | $6{,}01$ | $4{,}725$ | $12{,}34$ | $21{,}66$ | $9{,}03$ |
|:---|:---:|:---:|:---:|:---:|:---:|
| Chiffre des centièmes | $1$ | $2$ | $4$ | $6$ | $3$ |
| Lettre | B | R | A | V | O |

Le message est **BRAVO**.

**4.** Non : le chiffre des centièmes de $N_5 = 9{,}03$ est $3$. Léo oublie que $\\frac{980}{1\\,000} = 0{,}98$ contient aussi $8$ centièmes : $5$ centièmes $+ 8$ centièmes $= 13$ centièmes, soit $1$ dixième et $3$ centièmes. Il faut toujours calculer l'écriture à virgule avant de lire un chiffre.

**5.** Il faut un nombre dont le chiffre des centièmes est $5$. Par exemple $\\frac{345}{100} = 3{,}45$, ou $2 + \\frac{15}{100} = 2{,}15$ (toute réponse correcte est acceptée).`
    }
  ],
  "6N2": [
    {
      id: "6N2-ds-01",
      title: "Comparer et ranger des décimaux",
      difficulty: 1,
      points: 4,
      statement: `1. Comparer les nombres suivants en utilisant le symbole $<$, $>$ ou $=$ :
   a) $3{,}5$ et $3{,}49$
   b) $12{,}07$ et $12{,}7$
   c) $0{,}8$ et $0{,}800$
   d) $5{,}099$ et $5{,}1$
2. Ranger les nombres suivants dans l'ordre croissant :
$$2{,}3 \\qquad 2{,}03 \\qquad 3{,}02 \\qquad 2{,}33 \\qquad 2{,}303$$`,
      solution: `Pour comparer deux décimaux, on compare d'abord les parties entières ; si elles sont égales, on compare les chiffres des dixièmes, puis des centièmes… (on peut ajouter des zéros à droite pour avoir autant de chiffres après la virgule).

**1.** a) $3{,}50 > 3{,}49$ car 50 centièmes > 49 centièmes : $3{,}5 > 3{,}49$.
b) Mêmes parties entières ; dixièmes : $0 < 7$, donc $12{,}07 < 12{,}7$.
c) $0{,}8 = 0{,}800$ (les zéros à la fin de la partie décimale ne changent pas le nombre).
d) $5{,}099 < 5{,}100$ car $99 < 100$ millièmes : $5{,}099 < 5{,}1$.

**2.** On écrit tous les nombres avec trois chiffres après la virgule : $2{,}300$ ; $2{,}030$ ; $3{,}020$ ; $2{,}330$ ; $2{,}303$.
Ordre croissant : $$2{,}03 < 2{,}3 < 2{,}303 < 2{,}33 < 3{,}02$$`
    },
    {
      id: "6N2-ds-02",
      title: "Encadrer et arrondir une longueur",
      difficulty: 1,
      points: 4,
      statement: `En mesurant une piste avec un décamètre très précis, des élèves trouvent une longueur de $47{,}368$ m.

1. Encadrer $47{,}368$ :
   a) entre deux nombres entiers consécutifs ;
   b) entre deux nombres consécutifs ayant un chiffre après la virgule.
2. Donner l'arrondi de $47{,}368$ :
   a) à l'unité ;
   b) au dixième ;
   c) au centième.`,
      solution: `**1.** a) $47 < 47{,}368 < 48$.
b) $47{,}3 < 47{,}368 < 47{,}4$.

**2.** Pour arrondir, on regarde le chiffre qui suit le rang demandé : s'il vaut 0, 1, 2, 3 ou 4, on garde la valeur inférieure ; s'il vaut 5, 6, 7, 8 ou 9, on prend la valeur supérieure.
a) À l'unité : le chiffre des dixièmes est 3, donc l'arrondi est **47 m**.
b) Au dixième : le chiffre des centièmes est 6, donc l'arrondi est **47,4 m**.
c) Au centième : le chiffre des millièmes est 8, donc l'arrondi est **47,37 m**.`
    },
    {
      id: "6N2-ds-03",
      title: "Lire et placer sur une demi-droite graduée",
      difficulty: 2,
      points: 4,
      statement: `Voici une partie d'une demi-droite graduée.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 340 90" width="340" height="90" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="20" y1="50" x2="335" y2="50" stroke="currentColor" stroke-width="2"/><line x1="40" y1="40" x2="40" y2="60" stroke="currentColor" stroke-width="2"/><text x="40" y="78" text-anchor="middle" font-size="15" fill="currentColor">4</text><line x1="60" y1="45" x2="60" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="80" y1="45" x2="80" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="100" y1="45" x2="100" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="120" y1="45" x2="120" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="140" y1="45" x2="140" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="160" y1="45" x2="160" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="180" y1="45" x2="180" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="200" y1="45" x2="200" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="220" y1="45" x2="220" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="240" y1="40" x2="240" y2="60" stroke="currentColor" stroke-width="2"/><text x="240" y="78" text-anchor="middle" font-size="15" fill="currentColor">5</text><line x1="260" y1="45" x2="260" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="280" y1="45" x2="280" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="300" y1="45" x2="300" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="320" y1="45" x2="320" y2="55" stroke="currentColor" stroke-width="1.2"/><circle cx="100" cy="50" r="4" fill="#2563eb"/><text x="100" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">A</text><circle cx="200" cy="50" r="4" fill="#2563eb"/><text x="200" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">B</text><circle cx="280" cy="50" r="4" fill="#2563eb"/><text x="280" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">C</text></svg></div>

1. Quelle est la longueur (en unités) représentée par une petite graduation ? Justifier.
2. Lire les abscisses des points $A$, $B$ et $C$.
3. Recopier la graduation et placer les points $D(4{,}5)$ et $E(5{,}3)$.
4. Entre quelles graduations se trouve le point $F$ d'abscisse $4{,}65$ ? Le placer approximativement.`,
      solution: `**1.** Entre 4 et 5, l'unité est partagée en 10 intervalles égaux : une petite graduation représente $1 \\div 10 = 0{,}1$ (un dixième).

**2.** $A$ est 3 graduations après 4 : $A(4{,}3)$. $B$ est 8 graduations après 4 : $B(4{,}8)$. $C$ est 2 graduations après 5 : $C(5{,}2)$.

**3.** $D(4{,}5)$ se place sur la 5e graduation après 4 (au milieu entre 4 et 5). $E(5{,}3)$ se place sur la 3e graduation après 5.

**4.** $4{,}6 < 4{,}65 < 4{,}7$ : le point $F$ est entre les graduations $4{,}6$ et $4{,}7$, exactement au milieu car $4{,}65$ est à 5 centièmes de chacune.`
    },
    {
      id: "6N2-ds-04",
      title: "Intercaler des nombres",
      difficulty: 2,
      points: 4,
      statement: `1. Donner un nombre décimal compris entre $7{,}4$ et $7{,}5$.
2. Donner un nombre décimal compris entre $3{,}99$ et $4$.
3. Donner trois nombres décimaux compris entre $0{,}1$ et $0{,}11$.
4. Combien y a-t-il de nombres **entiers** compris entre $12{,}7$ et $18{,}2$ ? Les écrire.`,
      solution: `**1.** On écrit $7{,}4 = 7{,}40$ et $7{,}5 = 7{,}50$ : par exemple $7{,}45$ convient ($7{,}40 < 7{,}45 < 7{,}50$).

**2.** $3{,}99 = 3{,}990$ et $4 = 4{,}000$ : par exemple $3{,}995$ convient.

**3.** $0{,}1 = 0{,}100$ et $0{,}11 = 0{,}110$ : par exemple $0{,}101$ ; $0{,}105$ ; $0{,}109$. (Il y en a une infinité.)

**4.** Les entiers compris entre $12{,}7$ et $18{,}2$ sont $13$, $14$, $15$, $16$, $17$ et $18$ : il y en a **6**.`
    },
    {
      id: "6N2-ds-05",
      title: "Le classement du 100 mètres",
      difficulty: 3,
      points: 5,
      statement: `Voici les temps (en secondes) de cinq élèves au 100 mètres :

| Élève | Ana | Bilal | Chloé | Dylan | Emma |
|:---|:---:|:---:|:---:|:---:|:---:|
| Temps (s) | $14{,}8$ | $14{,}08$ | $15$ | $14{,}85$ | $14{,}58$ |

1. Établir le classement de la course (le premier est celui qui a mis le moins de temps).
2. Le tableau d'affichage donne les temps arrondis au dixième. Donner ces arrondis.
3. Si le tableau affichait les temps arrondis à l'unité, pourrait-on encore établir le classement ? Justifier.
4. Farid a couru plus tard. Son temps, arrondi au dixième, est $14{,}6$ s, et il est arrivé devant Emma. Donner tous les temps possibles de Farid au centième de seconde près.`,
      solution: `**1.** On compare les nombres : $14{,}08 < 14{,}58 < 14{,}80 < 14{,}85 < 15{,}00$.
Classement : 1. Bilal ; 2. Emma ; 3. Ana ; 4. Dylan ; 5. Chloé.

**2.** Arrondis au dixième : Ana $14{,}8$ ; Bilal $14{,}1$ (chiffre des centièmes 8) ; Chloé $15{,}0$ ; Dylan $14{,}9$ (chiffre des centièmes 5) ; Emma $14{,}6$ (chiffre des centièmes 8).

**3.** Arrondis à l'unité : Bilal 14 ; Emma 15 ; Ana 15 ; Dylan 15 ; Chloé 15. Quatre élèves auraient le même affichage : **on ne pourrait pas les départager**.

**4.** Un nombre a pour arrondi au dixième $14{,}6$ s'il est compris entre $14{,}55$ (inclus) et $14{,}65$ (exclu). Farid est devant Emma, donc son temps est inférieur à $14{,}58$. Au centième près, les temps possibles sont **$14{,}55$ s, $14{,}56$ s et $14{,}57$ s**.`
    },
    {
      id: "6N2-ds-06",
      title: "Vrai ou faux sur les décimaux",
      difficulty: 3,
      points: 4,
      statement: `Pour chaque affirmation, répondre par « vrai » ou « faux » et **justifier**.

1. « $3{,}12 > 3{,}9$ car $12 > 9$. »
2. « L'arrondi au centième de $6{,}995$ est $7$. »
3. « Il n'existe aucun nombre compris entre $2{,}4$ et $2{,}5$. »
4. « $0{,}7$ et $0{,}70$ sont deux écritures du même nombre. »`,
      solution: `**1.** Faux. Les parties entières sont égales (3) ; on compare les dixièmes : $1 < 9$, donc $3{,}12 < 3{,}9$. (On peut aussi écrire $3{,}9 = 3{,}90$ et comparer 12 centièmes et 90 centièmes.) On ne compare pas les parties décimales comme des entiers.

**2.** Vrai. $6{,}99 < 6{,}995 < 7{,}00$ et le chiffre des millièmes est 5, donc on arrondit à la valeur supérieure : $7{,}00$, c'est-à-dire $7$.

**3.** Faux. Par exemple $2{,}45$ est compris entre $2{,}4 = 2{,}40$ et $2{,}5 = 2{,}50$. Il en existe même une infinité.

**4.** Vrai. $0{,}70 = \\frac{70}{100} = \\frac{7}{10} = 0{,}7$ : ajouter un zéro à la fin de la partie décimale ne change pas le nombre.`
    },
    {
      id: "6N2-ds-07",
      title: "Retrouver un nombre à partir d'indices",
      difficulty: 4,
      points: 5,
      statement: `Maya pense à un nombre qui s'écrit avec **exactement deux chiffres après la virgule**. Elle donne les indices suivants :
- indice 1 : « Mon arrondi au dixième est $7{,}6$. »
- indice 2 : « Je suis plus grand que $7{,}58$. »
- indice 3 : « Mon chiffre des centièmes est impair. »
- indice 4 : « La somme de tous mes chiffres est $14$. »

1. Écrire tous les nombres à deux chiffres après la virgule qui respectent l'indice 1.
2. Parmi ceux-ci, lesquels respectent aussi les indices 2 et 3 ?
3. Quel est le nombre de Maya ? Justifier.
4. Donner l'arrondi à l'unité du nombre de Maya, puis un encadrement de ce nombre entre deux nombres consécutifs ayant un chiffre après la virgule.`,
      solution: `**1.** Un nombre a pour arrondi au dixième $7{,}6$ lorsqu'il est supérieur ou égal à $7{,}55$ et strictement inférieur à $7{,}65$. Avec deux chiffres après la virgule : $7{,}55$ ; $7{,}56$ ; $7{,}57$ ; $7{,}58$ ; $7{,}59$ ; $7{,}60$ ; $7{,}61$ ; $7{,}62$ ; $7{,}63$ ; $7{,}64$ (10 nombres).

**2.** Indice 2 : il reste $7{,}59$ ; $7{,}60$ ; $7{,}61$ ; $7{,}62$ ; $7{,}63$ ; $7{,}64$.
Indice 3 (centièmes impairs) : il reste **$7{,}59$ ; $7{,}61$ ; $7{,}63$**.

**3.** Somme des chiffres : $7 + 5 + 9 = 21$ ; $7 + 6 + 1 = 14$ ; $7 + 6 + 3 = 16$. Seul $7{,}61$ convient : le nombre de Maya est **$7{,}61$**.

**4.** Le chiffre des dixièmes de $7{,}61$ est 6, donc l'arrondi à l'unité est **8**. Encadrement : $7{,}6 < 7{,}61 < 7{,}7$.`
    },
    {
      id: "6N2-ds-08",
      title: "La finale de natation",
      difficulty: 4,
      points: 6,
      statement: `Lors d'une finale de 50 m nage libre, on a relevé les temps suivants (en secondes) :

| Nageur | Ana | Bilal | Chloé | Dylan | Emma |
|:---|:---:|:---:|:---:|:---:|:---:|
| Temps (s) | $31{,}47$ | $31{,}5$ | $30{,}98$ | $31{,}09$ | $31{,}4$ |

1. Établir le classement de la finale.
2. Tracer une demi-droite graduée de $30{,}9$ à $31{,}6$ en prenant $2$ cm pour $0{,}1$ s et y placer approximativement les cinq temps (on notera les points avec l'initiale du nageur).
3. Le panneau lumineux n'affiche que les temps **arrondis au dixième**. Quels nageurs ne peuvent pas être départagés à l'aide du panneau ? Justifier.
4. Farid, sixième nageur, voit s'afficher $31{,}3$ s sur le panneau.
   a) Donner un encadrement de son temps réel.
   b) Peut-on être sûr de sa place dans le classement ? Justifier.`,
      solution: `**1.** On compare : $30{,}98 < 31{,}09 < 31{,}40 < 31{,}47 < 31{,}50$.
Classement : 1. Chloé ; 2. Dylan ; 3. Emma ; 4. Ana ; 5. Bilal.

**2.** Une graduation de 2 cm correspond à $0{,}1$ s, donc 1 mm correspond à $0{,}005$ s. On place C un peu avant $31{,}0$ (4 mm avant, car $0{,}02$ s correspond à 4 mm), D juste avant $31{,}1$ (2 mm avant), E sur la graduation $31{,}4$, A entre $31{,}4$ et $31{,}5$ (à 14 mm après $31{,}4$), B sur la graduation $31{,}5$.

**3.** Arrondis au dixième : Ana $31{,}5$ (centièmes : 7) ; Bilal $31{,}5$ ; Chloé $31{,}0$ ; Dylan $31{,}1$ ; Emma $31{,}4$.
**Ana et Bilal** affichent tous les deux $31{,}5$ s : le panneau ne permet pas de les départager.

**4.** a) Le temps $t$ de Farid a pour arrondi au dixième $31{,}3$, donc $31{,}25 \\leqslant t < 31{,}35$.
b) Oui. Son temps est supérieur à $31{,}25$, donc supérieur à celui de Dylan ($31{,}09$) ; il est inférieur à $31{,}35$, donc inférieur à celui d'Emma ($31{,}4$). Farid se classe donc **3e**, entre Dylan et Emma, quel que soit son temps exact.`
    },
    {
      id: "6N2-ds-09",
      title: "Le concours de saut en longueur",
      difficulty: 1,
      points: 4,
      statement: `Voici les meilleurs sauts (en mètres) de six élèves lors du concours de saut en longueur :
$$\\text{Jade} : 3{,}6 \\qquad \\text{Malo} : 3{,}46 \\qquad \\text{Lina} : 3{,}06 \\qquad \\text{Tom} : 4{,}03 \\qquad \\text{Rose} : 3{,}64 \\qquad \\text{Noé} : 3{,}600$$

1. Jade dit qu'elle a sauté plus loin que Noé. A-t-elle raison ? Justifier.
2. Ranger les sauts dans l'ordre **décroissant** et donner le podium (les trois meilleurs).
3. Encadrer le saut de Malo entre deux nombres entiers consécutifs.
4. Donner l'arrondi au dixième du saut de Rose et celui du saut de Malo.`,
      solution: `**1.** Non : $3{,}600 = 3{,}6$ (les zéros à la fin de la partie décimale ne changent pas le nombre). Jade et Noé ont sauté **la même distance**.

**2.** On écrit tous les nombres avec deux chiffres après la virgule : $3{,}60$ ; $3{,}46$ ; $3{,}06$ ; $4{,}03$ ; $3{,}64$ ; $3{,}60$.
$$4{,}03 > 3{,}64 > 3{,}6 = 3{,}600 > 3{,}46 > 3{,}06$$
Podium : 1. Tom ($4{,}03$ m), 2. Rose ($3{,}64$ m), 3. Jade et Noé ex aequo ($3{,}6$ m).

**3.** $3 < 3{,}46 < 4$.

**4.** Rose : $3{,}6 < 3{,}64 < 3{,}7$ et le chiffre des centièmes est $4$, donc l'arrondi au dixième est $3{,}6$ m.
Malo : $3{,}4 < 3{,}46 < 3{,}5$ et le chiffre des centièmes est $6$, donc l'arrondi au dixième est $3{,}5$ m.`
    },
    {
      id: "6N2-ds-10",
      title: "Des chiffres effacés",
      difficulty: 2,
      points: 4,
      statement: `Dans chaque cas, le symbole $\\square$ remplace **un seul chiffre** (de $0$ à $9$).

1. Donner toutes les valeurs possibles du chiffre caché pour que l'inégalité soit vraie :
   a) $4{,}\\square 7 > 4{,}58$
   b) $12{,}3\\square < 12{,}34$
2. Peut-on remplacer $\\square$ par un chiffre pour que $0{,}\\square 9 > 0{,}99$ ? Justifier.
3. Trouver le chiffre caché sachant que $6{,}\\square 2$ a pour arrondi à l'unité $7$ et que ce nombre est plus petit que $6{,}6$.`,
      solution: `**1.** a) Les parties entières sont égales. Si le chiffre des dixièmes vaut $6$, $7$, $8$ ou $9$, le nombre est plus grand que $4{,}58$. S'il vaut $5$, on compare $4{,}57$ et $4{,}58$ : $7 < 8$ centièmes, donc $4{,}57 < 4{,}58$, ce qui ne convient pas. Les chiffres possibles sont **$6$, $7$, $8$, $9$**.
b) Les parties entières et les dixièmes sont égaux ; on compare les centièmes : il faut que le chiffre caché soit inférieur à $4$. Les chiffres possibles sont **$0$, $1$, $2$, $3$**.

**2.** Non. Le plus grand nombre possible est $0{,}99$ (avec le chiffre $9$), qui est égal à $0{,}99$ et non plus grand. Tous les autres sont plus petits. Aucun chiffre ne convient.

**3.** L'arrondi à l'unité de $6{,}\\square 2$ est $7$ lorsque le chiffre des dixièmes vaut $5$, $6$, $7$, $8$ ou $9$. De plus, le nombre doit être plus petit que $6{,}6 = 6{,}60$ : seul le chiffre $5$ convient ($6{,}52 < 6{,}60$ alors que $6{,}62 > 6{,}60$). Le chiffre caché est **$5$** : le nombre est $6{,}52$.`
    },
    {
      id: "6N2-ds-11",
      title: "Zoomer sur une droite graduée",
      difficulty: 3,
      points: 5,
      statement: `On s'intéresse à une droite graduée en dixièmes. On « zoome » sur la partie comprise entre $2{,}3$ et $2{,}4$ : cette portion est partagée en $10$ intervalles égaux.

1. Que représente un intervalle dans cette nouvelle graduation ? Justifier.
2. Un point $A$ est situé sur la $7^\\text{e}$ graduation après $2{,}3$. Quelle est son abscisse ?
3. Le point $B$ a pour abscisse $2{,}35$. Combien de graduations le séparent de $2{,}3$ ? Que peut-on dire de sa position entre $2{,}3$ et $2{,}4$ ?
4. On zoome une seconde fois, sur la portion comprise entre $2{,}37$ et $2{,}38$, à nouveau partagée en $10$ intervalles égaux. Quelle est l'abscisse du point $C$ situé sur la $4^\\text{e}$ graduation après $2{,}37$ ?
5. Ranger $A$, $B$ et $C$ dans l'ordre croissant de leurs abscisses, puis donner l'arrondi au centième de l'abscisse de $C$.`,
      solution: `**1.** La portion mesure $2{,}4 - 2{,}3 = 0{,}1$ (un dixième). Partagée en $10$, chaque intervalle représente un dixième de dixième, c'est-à-dire **un centième** ($0{,}01$).

**2.** $A$ est à $7$ centièmes de $2{,}3$ : $A(2{,}37)$.

**3.** $2{,}35 = 2{,}30 + 0{,}05$ : le point $B$ est **à $5$ graduations** de $2{,}3$. Comme la portion compte $10$ graduations, $B$ est **au milieu** du segment qui va de $2{,}3$ à $2{,}4$.

**4.** Cette fois, la portion mesure un centième ; partagée en $10$, chaque intervalle représente **un millième**. $C$ est à $4$ millièmes de $2{,}37$ : $C(2{,}374)$.

**5.** $2{,}350 < 2{,}370 < 2{,}374$, donc l'ordre croissant est $B$, $A$, $C$.
Arrondi au centième de $2{,}374$ : le chiffre des millièmes est $4$, donc l'arrondi est $2{,}37$.`
    },
    {
      id: "6N2-ds-12",
      title: "Le contrôle de qualité",
      difficulty: 4,
      points: 6,
      statement: `Une usine fabrique des vis qui doivent mesurer $25$ mm. Une vis est acceptée si sa longueur est **supérieure ou égale à $24{,}95$ mm et inférieure ou égale à $25{,}05$ mm**. Un contrôleur mesure huit vis (en mm) :
$$25{,}1 \\quad 24{,}97 \\quad 25{,}005 \\quad 24{,}9 \\quad 25{,}05 \\quad 24{,}949 \\quad 25{,}04 \\quad 24{,}99$$

1. Quelles vis sont acceptées ? Justifier pour chacune des vis refusées.
2. Ranger les longueurs des vis acceptées dans l'ordre croissant.
3. Le contrôleur arrondit chaque mesure au dixième. Donner l'arrondi au dixième de $24{,}97$, de $25{,}05$ et de $25{,}1$. Expliquer pourquoi le contrôleur ne peut pas se contenter de ces arrondis pour décider si une vis est acceptée.
4. Donner une longueur, écrite avec trois chiffres après la virgule, d'une vis acceptée qui soit plus courte que toutes les vis acceptées de la liste.`,
      solution: `**1.** On compare chaque mesure à $24{,}950$ et à $25{,}050$ (en écrivant trois chiffres après la virgule).
- $25{,}1 = 25{,}100 > 25{,}050$ : **refusée** (trop longue).
- $24{,}9 = 24{,}900 < 24{,}950$ : **refusée** (trop courte).
- $24{,}949 < 24{,}950$ : **refusée** (trop courte, d'un millième seulement).
- $24{,}970$ ; $25{,}005$ ; $25{,}050$ ; $25{,}040$ ; $24{,}990$ sont tous compris entre $24{,}950$ et $25{,}050$ ($25{,}05$ est accepté car l'égalité est autorisée).
Les vis acceptées mesurent $24{,}97$ ; $25{,}005$ ; $25{,}05$ ; $25{,}04$ et $24{,}99$ mm.

**2.** $24{,}97 < 24{,}99 < 25{,}005 < 25{,}04 < 25{,}05$.

**3.** $24{,}97$ : le chiffre des centièmes est $7$, l'arrondi au dixième est $25{,}0$.
$25{,}05$ : le chiffre des centièmes est $5$, l'arrondi au dixième est $25{,}1$.
$25{,}1$ : l'arrondi au dixième est $25{,}1$.
Les vis de $25{,}05$ mm (acceptée) et de $25{,}1$ mm (refusée) ont **le même arrondi au dixième** : avec ce seul arrondi, on ne peut pas savoir si la vis est acceptée. Les arrondis au dixième sont trop peu précis, car la tolérance se joue au centième.

**4.** La plus courte vis acceptée de la liste mesure $24{,}97$ mm et la longueur minimale autorisée est $24{,}95$ mm. Il faut donc un nombre supérieur ou égal à $24{,}950$ et inférieur à $24{,}970$ : par exemple **$24{,}960$ mm** (ou $24{,}951$ ; $24{,}955$ ; … ; $24{,}969$).`
    },
    {
      id: "6N2-ds-13",
      title: "La pesée des cartables",
      difficulty: 1,
      points: 4,
      statement: `L'infirmière du collège pèse les cartables de cinq élèves. Voici les masses relevées (en kg) :
$$\\text{Inès} : 4{,}8 \\qquad \\text{Hugo} : 5{,}25 \\qquad \\text{Lou} : 4{,}75 \\qquad \\text{Noé} : 5{,}2 \\qquad \\text{Zoé} : 4{,}08$$

1. Ranger ces masses dans l'ordre croissant.
2. Il est conseillé qu'un cartable de 6e pèse moins de $5$ kg. Quels élèves ont un cartable trop lourd ?
3. Arrondir chaque masse à l'unité.
4. Encadrer la masse du cartable de Lou entre deux nombres consécutifs ayant un seul chiffre après la virgule.`,
      solution: `**1.** On compare d'abord les parties entières, puis les dixièmes, puis les centièmes (on peut écrire $4{,}8 = 4{,}80$ et $5{,}2 = 5{,}20$) :
$$4{,}08 < 4{,}75 < 4{,}8 < 5{,}2 < 5{,}25$$
(Zoé, Lou, Inès, Noé, Hugo.)

**2.** Les masses supérieures à $5$ kg sont $5{,}2$ et $5{,}25$ : **Noé et Hugo** ont un cartable trop lourd.

**3.** On regarde le chiffre des dixièmes :
- $4{,}8$ : $8 \\geqslant 5$, arrondi $5$ ;
- $5{,}25$ : $2 < 5$, arrondi $5$ ;
- $4{,}75$ : $7 \\geqslant 5$, arrondi $5$ ;
- $5{,}2$ : $2 < 5$, arrondi $5$ ;
- $4{,}08$ : $0 < 5$, arrondi $4$.

**4.** $4{,}7 < 4{,}75 < 4{,}8$ ($4{,}75$ est exactement au milieu de $4{,}7$ et $4{,}8$).`
    },
    {
      id: "6N2-ds-14",
      title: "Comparer des nombres écrits de façons différentes",
      difficulty: 2,
      points: 4,
      statement: `Sans calculatrice.

1. Comparer les nombres suivants avec le symbole $<$, $>$ ou $=$. On pourra d'abord écrire chaque nombre avec une virgule.
   a) $\\frac{3}{10}$ et $0{,}03$
   b) $\\frac{25}{100}$ et $2{,}5$
   c) $4 + \\frac{7}{100}$ et $4{,}7$
   d) $\\frac{18}{10}$ et $1{,}8$
   e) $\\frac{5}{1\\,000}$ et $0{,}05$
2. Ranger les nombres suivants dans l'ordre **décroissant** :
$$\\frac{12}{10} \\qquad 1{,}02 \\qquad 1 + \\frac{1}{10} + \\frac{5}{100} \\qquad \\frac{1\\,012}{1\\,000} \\qquad 1{,}1$$`,
      solution: `**1.**
a) $\\frac{3}{10} = 0{,}3$ et $0{,}3 > 0{,}03$ (3 dixièmes contre 0 dixième) : $\\frac{3}{10} > 0{,}03$.
b) $\\frac{25}{100} = 0{,}25$ et $0{,}25 < 2{,}5$ (parties entières $0 < 2$) : $\\frac{25}{100} < 2{,}5$.
c) $4 + \\frac{7}{100} = 4{,}07$ et $4{,}07 < 4{,}7$ (dixièmes $0 < 7$) : $4 + \\frac{7}{100} < 4{,}7$.
d) $\\frac{18}{10} = 1{,}8$ : $\\frac{18}{10} = 1{,}8$.
e) $\\frac{5}{1\\,000} = 0{,}005$ et $0{,}005 < 0{,}05$ (centièmes $0 < 5$) : $\\frac{5}{1\\,000} < 0{,}05$.

**2.** Écritures à virgule : $\\frac{12}{10} = 1{,}2$ ; $1{,}02$ ; $1 + \\frac{1}{10} + \\frac{5}{100} = 1{,}15$ ; $\\frac{1\\,012}{1\\,000} = 1{,}012$ ; $1{,}1$.
Toutes ont pour partie entière $1$ ; on compare les dixièmes ($2$ ; $0$ ; $1$ ; $0$ ; $1$), puis les centièmes si besoin ($1{,}15 > 1{,}10$ et $1{,}020 > 1{,}012$) :
$$\\frac{12}{10} > 1 + \\frac{1}{10} + \\frac{5}{100} > 1{,}1 > 1{,}02 > \\frac{1\\,012}{1\\,000}$$`
    },
    {
      id: "6N2-ds-15",
      title: "Ranger les livres de la bibliothèque",
      difficulty: 3,
      points: 5,
      statement: `Au CDI, chaque documentaire porte une cote qui est un nombre décimal. Les livres sont rangés sur l'étagère du plus petit nombre au plus grand. Voici les cotes de sept livres de mathématiques :
$$510{,}2 \\qquad 510{,}12 \\qquad 512 \\qquad 510{,}125 \\qquad 510{,}9 \\qquad 510{,}09 \\qquad 511{,}3$$

1. Ranger ces cotes dans l'ordre croissant.
2. Un nouveau livre a pour cote $510{,}13$. Entre quels livres doit-on le ranger ?
3. La documentaliste regroupe dans une même boîte tous les livres dont la cote, **arrondie à l'unité**, vaut $510$. Quels livres de la liste vont dans cette boîte ? Justifier.
4. Proposer trois cotes possibles pour des livres qu'on rangerait entre $510{,}12$ et $510{,}125$.
5. Combien existe-t-il de nombres ayant **exactement deux chiffres après la virgule** compris strictement entre $510{,}1$ et $510{,}2$ ? Les écrire.`,
      solution: `**1.** On compare les parties entières, puis les chiffres après la virgule rang par rang (en complétant par des zéros) :
$$510{,}09 < 510{,}12 < 510{,}125 < 510{,}2 < 510{,}9 < 511{,}3 < 512$$

**2.** $510{,}125 < 510{,}130 < 510{,}200$ : le nouveau livre se range **entre $510{,}125$ et $510{,}2$**.

**3.** Un nombre a pour arrondi à l'unité $510$ s'il est supérieur ou égal à $509{,}5$ et strictement inférieur à $510{,}5$.
- $510{,}09$ ; $510{,}12$ ; $510{,}125$ ; $510{,}2$ : chiffre des dixièmes inférieur à $5$, arrondi $510$ : **ils vont dans la boîte**.
- $510{,}9$ : chiffre des dixièmes $9 \\geqslant 5$, arrondi $511$ : non.
- $511{,}3$ et $512$ : arrondis $511$ et $512$ : non.

**4.** On écrit $510{,}12 = 510{,}120$ : entre $510{,}120$ et $510{,}125$ on trouve par exemple $510{,}121$ ; $510{,}122$ ; $510{,}124$ (ou $510{,}1205$, …).

**5.** $510{,}1 = 510{,}10$ et $510{,}2 = 510{,}20$. Les nombres cherchés sont $510{,}11$ ; $510{,}12$ ; $510{,}13$ ; $510{,}14$ ; $510{,}15$ ; $510{,}16$ ; $510{,}17$ ; $510{,}18$ ; $510{,}19$ : il y en a **$9$**.`
    },
    {
      id: "6N2-ds-16",
      title: "Le tableau d'affichage du stade",
      difficulty: 4,
      points: 6,
      statement: `Lors d'une course de $100$ m, les chronomètres mesurent les temps au centième de seconde, mais le tableau d'affichage du stade n'affiche que l'**arrondi au dixième** de chaque temps.

1. Les temps réels de quatre coureurs sont : Léa $12{,}47$ s ; Tom $12{,}43$ s ; Sam $12{,}45$ s ; Inès $12{,}55$ s. Qu'affiche le tableau pour chacun ?
2. Pour un coureur, le tableau affiche $12{,}5$ s.
   a) Son temps réel peut-il être $12{,}44$ s ? $12{,}55$ s ? Justifier.
   b) Donner tous ses temps réels possibles (avec deux chiffres après la virgule). Combien y en a-t-il ?
3. Le tableau affiche $12{,}4$ s pour Paul et $12{,}5$ s pour Max. Peut-on être sûr que Paul a été plus rapide que Max ? Justifier.
4. Le tableau affiche $12{,}5$ s pour Jo et pour Ali. Peut-on savoir lequel a été le plus rapide ? Justifier à l'aide d'un exemple.
5. On apprend de plus que le temps réel d'Ali, **arrondi à l'unité**, vaut $13$ s. Donner tous ses temps réels possibles.`,
      solution: `**1.** On regarde le chiffre des centièmes :
- Léa : $12{,}47$, centièmes $7 \\geqslant 5$ : affichage **$12{,}5$** ;
- Tom : $12{,}43$, centièmes $3 < 5$ : affichage **$12{,}4$** ;
- Sam : $12{,}45$, centièmes $5$ : affichage **$12{,}5$** ;
- Inès : $12{,}55$, centièmes $5$ : affichage **$12{,}6$**.

**2.** a) $12{,}44$ s'arrondit à $12{,}4$ et $12{,}55$ s'arrondit à $12{,}6$ : **aucun des deux** n'est possible.
b) Les temps possibles vont de $12{,}45$ à $12{,}54$ :
$12{,}45$ ; $12{,}46$ ; $12{,}47$ ; $12{,}48$ ; $12{,}49$ ; $12{,}50$ ; $12{,}51$ ; $12{,}52$ ; $12{,}53$ ; $12{,}54$, soit **$10$ temps**.

**3.** Oui. Affiché $12{,}4$, le temps de Paul est au plus $12{,}44$ s. Affiché $12{,}5$, le temps de Max est au moins $12{,}45$ s. Comme $12{,}44 < 12{,}45$, Paul a mis moins de temps : **il a été plus rapide**.

**4.** Non. Les deux temps sont entre $12{,}45$ et $12{,}54$. Par exemple, si Jo a couru en $12{,}46$ s et Ali en $12{,}52$ s, Jo est plus rapide ; mais si Jo a couru en $12{,}53$ s et Ali en $12{,}48$ s, c'est Ali. On **ne peut pas savoir**.

**5.** Le temps d'Ali est entre $12{,}45$ et $12{,}54$ (question 2). Son arrondi à l'unité vaut $13$ seulement si son chiffre des dixièmes est au moins $5$, c'est-à-dire s'il est supérieur ou égal à $12{,}5$.
Les temps possibles sont donc **$12{,}50$ ; $12{,}51$ ; $12{,}52$ ; $12{,}53$ ; $12{,}54$**.`
    }
  ],
  "6N3": [
    {
      id: "6N3-ds-01",
      title: "Poser des additions et des soustractions",
      difficulty: 1,
      points: 4,
      statement: `Poser et effectuer les opérations suivantes.

1. $245{,}8 + 37{,}65$
2. $52{,}06 - 18{,}9$
3. $1\\,000 - 356{,}7$
4. $7{,}5 + 12{,}48 + 0{,}9$`,
      solution: `On aligne les virgules (les unités sous les unités, les dixièmes sous les dixièmes…), en complétant si besoin par des zéros.

**1.** $245{,}80 + 37{,}65 = 283{,}45$.

**2.** $52{,}06 - 18{,}90 = 33{,}16$. Vérification : $33{,}16 + 18{,}9 = 52{,}06$.

**3.** $1\\,000{,}0 - 356{,}7 = 643{,}3$. Vérification : $643{,}3 + 356{,}7 = 1\\,000$.

**4.** $7{,}50 + 12{,}48 + 0{,}90 = 20{,}88$.`
    },
    {
      id: "6N3-ds-02",
      title: "Calcul mental avec des décimaux",
      difficulty: 1,
      points: 3,
      statement: `Calculer mentalement, en écrivant seulement le résultat et, si besoin, une étape.

1. $3{,}7 + 2{,}3$ ; $\\quad 6{,}25 + 3{,}75$ ; $\\quad 9{,}9 + 4{,}5$
2. $15 - 0{,}4$ ; $\\quad 12{,}5 - 7{,}5$ ; $\\quad 20 - 13{,}8$
3. Quel nombre faut-il ajouter à $6{,}35$ pour obtenir $10$ ?`,
      solution: `**1.** $3{,}7 + 2{,}3 = 6$ (7 dixièmes + 3 dixièmes = 1 unité).
$6{,}25 + 3{,}75 = 10$ (25 centièmes + 75 centièmes = 1 unité).
$9{,}9 + 4{,}5 = 10 + 4{,}5 - 0{,}1 = 14{,}4$.

**2.** $15 - 0{,}4 = 14{,}6$ ; $\\quad 12{,}5 - 7{,}5 = 5$ ; $\\quad 20 - 13{,}8 = 20 - 14 + 0{,}2 = 6{,}2$.

**3.** De $6{,}35$ à $7$ il faut $0{,}65$, puis de 7 à 10 il faut 3 : il faut ajouter $0{,}65 + 3 = 3{,}65$. Vérification : $6{,}35 + 3{,}65 = 10$.`
    },
    {
      id: "6N3-ds-03",
      title: "Le passage en caisse",
      difficulty: 2,
      points: 4,
      statement: `Samia achète un paquet de pâtes à $3{,}45$ €, un poulet à $12{,}90$ €, du fromage à $7{,}15$ € et une bouteille de jus à $1{,}65$ €.

1. Donner un ordre de grandeur du prix total en arrondissant chaque prix à l'unité.
2. Calculer le prix total exact.
3. Samia paie avec un billet de $20$ € et un billet de $10$ €. Combien la caissière doit-elle lui rendre ?`,
      solution: `**1.** $3{,}45 \\approx 3$ ; $12{,}90 \\approx 13$ ; $7{,}15 \\approx 7$ ; $1{,}65 \\approx 2$. Ordre de grandeur : $3 + 13 + 7 + 2 = 25$ €.

**2.** $3{,}45 + 12{,}90 + 7{,}15 + 1{,}65 = 25{,}15$. Le prix total est **$25{,}15$ €**, ce qui est cohérent avec l'ordre de grandeur.

**3.** Samia donne $20 + 10 = 30$ €. $30 - 25{,}15 = 4{,}85$. La caissière doit lui rendre **$4{,}85$ €**.`
    },
    {
      id: "6N3-ds-04",
      title: "Contrôler un calcul par un ordre de grandeur",
      difficulty: 2,
      points: 4,
      statement: `Sami a utilisé sa calculatrice, mais il a parfois mal tapé les nombres. Il a obtenu :
- calcul A : $398{,}7 + 52{,}45 = 923{,}2$ ;
- calcul B : $1\\,205{,}6 - 389{,}9 = 815{,}7$.

1. Pour chaque calcul, donner un ordre de grandeur du résultat (en arrondissant les nombres à la dizaine).
2. Lequel des deux résultats est certainement faux ? Justifier.
3. Poser les deux opérations pour trouver les résultats exacts.`,
      solution: `**1.** Calcul A : $398{,}7 \\approx 400$ et $52{,}45 \\approx 50$, donc le résultat est proche de $400 + 50 = 450$.
Calcul B : $1\\,205{,}6 \\approx 1\\,210$ et $389{,}9 \\approx 390$, donc le résultat est proche de $1\\,210 - 390 = 820$.

**2.** Le résultat de A ($923{,}2$) est très loin de 450 : **il est certainement faux**. Celui de B ($815{,}7$) est proche de 820 : il est plausible.

**3.** A : $398{,}70 + 52{,}45 = 451{,}15$.
B : $1\\,205{,}6 - 389{,}9 = 815{,}7$ ; le résultat de Sami était juste. Vérification : $815{,}7 + 389{,}9 = 1\\,205{,}6$.`
    },
    {
      id: "6N3-ds-05",
      title: "Une randonnée en trois étapes",
      difficulty: 3,
      points: 5,
      statement: `Un groupe de randonneurs parcourt $42{,}5$ km en trois étapes.
- La première étape mesure $12{,}75$ km.
- La deuxième étape est plus longue que la première de $3{,}4$ km.

1. Calculer la longueur de la deuxième étape.
2. Calculer la longueur de la troisième étape.
3. Quelle est l'étape la plus longue ? Quelle est la différence entre l'étape la plus longue et l'étape la plus courte ?`,
      solution: `**1.** Deuxième étape : $12{,}75 + 3{,}4 = 16{,}15$ km.

**2.** Les deux premières étapes mesurent $12{,}75 + 16{,}15 = 28{,}9$ km.
Troisième étape : $42{,}5 - 28{,}9 = 13{,}6$ km.
Vérification : $12{,}75 + 16{,}15 + 13{,}6 = 42{,}5$.

**3.** $12{,}75 < 13{,}6 < 16{,}15$ : l'étape la plus longue est **la deuxième** et la plus courte est la première. Différence : $16{,}15 - 12{,}75 = 3{,}4$ km (c'est bien l'écart donné dans l'énoncé).`
    },
    {
      id: "6N3-ds-06",
      title: "Pyramides de nombres",
      difficulty: 3,
      points: 5,
      statement: `Dans une pyramide de nombres, chaque case est égale à la **somme des deux cases situées juste en dessous**.

Pyramide 1 : la ligne du bas contient $2{,}5$ ; $1{,}75$ ; $3{,}2$ (de gauche à droite).

1. Calculer les deux cases de la ligne du milieu, puis la case du sommet de la pyramide 1.

Pyramide 2 : le sommet vaut $10$. Dans la ligne du milieu, la case de droite vaut $6{,}3$. Dans la ligne du bas, la case de gauche vaut $1{,}8$.

2. Calculer la case de gauche de la ligne du milieu.
3. Calculer les deux cases manquantes de la ligne du bas. Vérifier en recalculant le sommet.`,
      solution: `**1.** Ligne du milieu : $2{,}5 + 1{,}75 = 4{,}25$ et $1{,}75 + 3{,}2 = 4{,}95$.
Sommet : $4{,}25 + 4{,}95 = 9{,}2$.

**2.** Le sommet est la somme des deux cases du milieu : case de gauche $+ 6{,}3 = 10$, donc la case de gauche vaut $10 - 6{,}3 = 3{,}7$.

**3.** La case $3{,}7$ est la somme de $1{,}8$ et de la case centrale du bas : celle-ci vaut $3{,}7 - 1{,}8 = 1{,}9$.
La case $6{,}3$ est la somme de $1{,}9$ et de la case de droite du bas : celle-ci vaut $6{,}3 - 1{,}9 = 4{,}4$.
Vérification : $1{,}8 + 1{,}9 = 3{,}7$ ; $1{,}9 + 4{,}4 = 6{,}3$ ; $3{,}7 + 6{,}3 = 10$, on retrouve bien le sommet.`
    },
    {
      id: "6N3-ds-07",
      title: "Partir en vacances : voiture ou train ?",
      difficulty: 4,
      points: 6,
      statement: `La famille Martin (deux adultes et deux enfants) prépare un voyage aller-retour et compare deux solutions.

- **En voiture** : carburant pour l'aller-retour $48{,}36$ € ; péage $9{,}80$ € à l'aller et autant au retour ; parking sur place $14{,}50$ €.
- **En train** : billets adultes $64{,}80$ € (pour les deux) ; billets enfants $23{,}40$ € (pour les deux) ; bus entre la gare et le lieu de vacances $6{,}20$ € en tout.

1. Sans calcul exact, quelle solution semble la moins chère ? Utiliser des ordres de grandeur.
2. Calculer le coût exact de chaque solution.
3. Quelle somme la famille économise-t-elle en choisissant la solution la moins chère ?
4. La famille a prévu un budget de $120$ € pour le transport et les pique-niques. Avec la solution la moins chère, combien lui reste-t-il pour les pique-niques ?`,
      solution: `**1.** Voiture : $50 + 10 + 10 + 15 = 85$ € environ. Train : $65 + 25 + 5 = 95$ € environ. La voiture semble moins chère.

**2.** Voiture : $48{,}36 + 9{,}80 + 9{,}80 + 14{,}50 = 82{,}46$ €.
Train : $64{,}80 + 23{,}40 + 6{,}20 = 94{,}40$ €.

**3.** $94{,}40 - 82{,}46 = 11{,}94$. En prenant la voiture, la famille économise **$11{,}94$ €**.

**4.** $120 - 82{,}46 = 37{,}54$. Il reste **$37{,}54$ €** pour les pique-niques.`
    },
    {
      id: "6N3-ds-08",
      title: "Le ticket de caisse abîmé",
      difficulty: 4,
      points: 5,
      statement: `Le ticket de caisse de Paul a été taché. On peut encore lire :

| Article | Prix (€) |
|:---|---:|
| Ballon | $12{,}40$ |
| Gourde | $8{,}95$ |
| Chaussettes | $3{,}50$ |
| Chaussures | illisible |
| **Total** | $47{,}85$ |
| Espèces données | $50{,}00$ |
| Monnaie rendue | $2{,}15$ |

1. Vérifier que la monnaie rendue est correcte.
2. Calculer le prix des chaussures.
3. À la caisse, Paul aurait pu utiliser un bon de réduction de $4{,}75$ € sur le total. Quel aurait alors été le prix à payer ? Combien la caissière lui aurait-elle rendu sur son billet de $50$ € ?`,
      solution: `**1.** $50 - 47{,}85 = 2{,}15$ : la monnaie rendue est correcte.

**2.** Les trois articles lisibles coûtent $12{,}40 + 8{,}95 + 3{,}50 = 24{,}85$ €.
Prix des chaussures : $47{,}85 - 24{,}85 = 23$ €. Les chaussures coûtent **$23{,}00$ €**.
Vérification : $24{,}85 + 23 = 47{,}85$.

**3.** Prix avec le bon : $47{,}85 - 4{,}75 = 43{,}10$ €.
Monnaie rendue : $50 - 43{,}10 = 6{,}90$ €. Paul aurait payé **$43{,}10$ €** et la caissière lui aurait rendu **$6{,}90$ €**.`
    },
    {
      id: "6N3-ds-09",
      title: "Le colis de la poste",
      difficulty: 1,
      points: 4,
      statement: `Clara prépare un colis. Elle y met un livre de $1{,}25$ kg, un pot de confiture de $0{,}875$ kg et une paire de chaussures de $2{,}4$ kg. Le carton vide a une masse négligeable.

1. Poser l'addition et calculer la masse totale du colis.
2. Le tarif « petit colis » est accepté jusqu'à $5$ kg. Le colis de Clara peut-il partir à ce tarif ? Quelle masse peut-elle encore ajouter au maximum ?
3. Quelle est la différence de masse entre l'objet le plus lourd et l'objet le plus léger ?`,
      solution: `**1.** On aligne les virgules et on complète avec des zéros :
$$1{,}250 + 0{,}875 + 2{,}400 = 4{,}525$$
Le colis pèse **$4{,}525$ kg**.

**2.** $4{,}525 < 5$ : le colis peut partir au tarif « petit colis ».
Masse encore possible : $5 - 4{,}525 = 0{,}475$ kg, soit $475$ g au maximum.
(Vérification : $4{,}525 + 0{,}475 = 5$.)

**3.** L'objet le plus lourd est la paire de chaussures ($2{,}4$ kg), le plus léger le pot de confiture ($0{,}875$ kg) :
$$2{,}400 - 0{,}875 = 1{,}525$$
La différence est de **$1{,}525$ kg**.`
    },
    {
      id: "6N3-ds-10",
      title: "Un carré magique décimal",
      difficulty: 2,
      points: 4,
      statement: `Dans un carré magique, les sommes des trois nombres de chaque ligne, de chaque colonne et de chacune des deux diagonales sont toutes égales. Voici un carré magique incomplet :

| | Colonne 1 | Colonne 2 | Colonne 3 |
|:---|:---:|:---:|:---:|
| **Ligne 1** | $2$ | $a$ | $4$ |
| **Ligne 2** | $b$ | $3{,}5$ | $c$ |
| **Ligne 3** | $3$ | $d$ | $e$ |

1. En utilisant la diagonale qui contient $4$, $3{,}5$ et $3$, calculer la somme magique.
2. Calculer $a$, puis $b$ (justifier par un calcul).
3. Calculer $c$, $d$ et $e$.
4. Vérifier le résultat avec la colonne de droite et avec l'autre diagonale.`,
      solution: `**1.** $4 + 3{,}5 + 3 = 10{,}5$ : la somme magique est **$10{,}5$**.

**2.** Première ligne : $2 + a + 4 = 10{,}5$, donc $a = 10{,}5 - 6 = 4{,}5$.
Première colonne : $2 + b + 3 = 10{,}5$, donc $b = 10{,}5 - 5 = 5{,}5$.

**3.** Deuxième ligne : $5{,}5 + 3{,}5 + c = 10{,}5$, donc $c = 10{,}5 - 9 = 1{,}5$.
Deuxième colonne : $4{,}5 + 3{,}5 + d = 10{,}5$, donc $d = 10{,}5 - 8 = 2{,}5$.
Troisième ligne : $3 + 2{,}5 + e = 10{,}5$, donc $e = 10{,}5 - 5{,}5 = 5$.

**4.** Colonne de droite : $4 + 1{,}5 + 5 = 10{,}5$. Diagonale : $2 + 3{,}5 + 5 = 10{,}5$. Le carré est bien magique.`
    },
    {
      id: "6N3-ds-11",
      title: "Les comptes de la coopérative",
      difficulty: 3,
      points: 5,
      statement: `Au début du mois, la coopérative de la classe dispose de $152{,}40$ €. Le trésorier note les opérations du mois :

| Opération | Recette (€) | Dépense (€) |
|:---|:---:|:---:|
| Vente de gâteaux | $87{,}65$ | |
| Achat de ballons | | $64{,}90$ |
| Tombola | $120{,}50$ | |
| Sortie au musée | | $198{,}75$ |

1. Calculer la somme disponible après chaque opération, dans l'ordre du tableau.
2. Calculer le total des recettes et le total des dépenses du mois.
3. La coopérative a-t-elle gagné ou perdu de l'argent ce mois-ci ? De combien ? Vérifier la cohérence avec la question 1.
4. La classe veut acheter un jeu de société à $120$ €. Combien lui manque-t-il ?`,
      solution: `**1.**
- Après la vente de gâteaux : $152{,}40 + 87{,}65 = 240{,}05$ €.
- Après l'achat de ballons : $240{,}05 - 64{,}90 = 175{,}15$ €.
- Après la tombola : $175{,}15 + 120{,}50 = 295{,}65$ €.
- Après la sortie : $295{,}65 - 198{,}75 = 96{,}90$ €.

**2.** Recettes : $87{,}65 + 120{,}50 = 208{,}15$ €. Dépenses : $64{,}90 + 198{,}75 = 263{,}65$ €.

**3.** Les dépenses dépassent les recettes : la coopérative a **perdu** de l'argent. Perte : $263{,}65 - 208{,}15 = 55{,}50$ €.
Cohérence : la somme est passée de $152{,}40$ € à $96{,}90$ €, et $152{,}40 - 96{,}90 = 55{,}50$ €. On retrouve bien la même perte.

**4.** $120 - 96{,}90 = 23{,}10$. Il manque **$23{,}10$ €**.`
    },
    {
      id: "6N3-ds-12",
      title: "Des additions à chiffres cachés",
      difficulty: 4,
      points: 5,
      statement: `Chaque case $\\square$ cache un chiffre (les cases peuvent cacher des chiffres différents).

1. Retrouver les chiffres cachés dans l'addition posée suivante, en expliquant la démarche colonne par colonne (en commençant par la droite) :
$$\\begin{array}{r} 3\\,\\square{,}7\\,\\square \\\\ +\\ \\square\\,7{,}\\square\\,8 \\\\ \\hline 6\\,2{,}1\\,3 \\end{array}$$
2. Vérifier le résultat en effectuant une soustraction.
3. Dans l'égalité suivante, les trois cases cachent **le même chiffre** :
$$5{,}\\square + \\square{,}7 + 2{,}\\square 5 = 11{,}35$$
Trouver ce chiffre. Justifier, par exemple en testant et en expliquant pourquoi c'est le seul possible.`,
      solution: `**1.** On travaille de droite à gauche, en tenant compte des retenues.
- Centièmes : $\\square + 8$ se termine par $3$, donc $\\square = 5$ ($5 + 8 = 13$) ; on retient $1$.
- Dixièmes : $7 + \\square + 1$ se termine par $1$, donc $\\square = 3$ ($7 + 3 + 1 = 11$) ; on retient $1$.
- Unités : $\\square + 7 + 1$ se termine par $2$, donc $\\square = 4$ ($4 + 7 + 1 = 12$) ; on retient $1$.
- Dizaines : $3 + \\square + 1 = 6$, donc $\\square = 2$.

L'addition est $34{,}75 + 27{,}38 = 62{,}13$.

**2.** $62{,}13 - 27{,}38 = 34{,}75$ : on retrouve bien le premier terme.

**3.** Si le chiffre caché augmente de $1$, chacun des trois nombres augmente : la somme augmente donc toujours. Il y a ainsi au plus un chiffre qui convient. On teste :
- avec $2$ : $5{,}2 + 2{,}7 + 2{,}25 = 10{,}15$, trop petit ;
- avec $3$ : $5{,}3 + 3{,}7 + 2{,}35 = 11{,}35$ : c'est la somme voulue.

Le chiffre caché est **$3$**.`
    },
    {
      id: "6N3-ds-13",
      title: "Rendre la monnaie",
      difficulty: 1,
      points: 4,
      statement: `Sans calculatrice pour les questions 1 et 2.

1. Emma achète un livre à $13{,}65$ € et paie avec un billet de $20$ €. Combien la libraire doit-elle lui rendre ?
2. Compléter :
   a) $4{,}7 + \\ldots = 10$
   b) $0{,}85 + \\ldots = 1$
   c) $12{,}4 + \\ldots = 20$
3. Poser et effectuer :
   a) $27{,}8 + 145{,}63$
   b) $80 - 35{,}46$`,
      solution: `**1.** On cherche ce qu'il faut ajouter à $13{,}65$ pour obtenir $20$ : $13{,}65 + 0{,}35 = 14$, puis $14 + 6 = 20$. Il faut donc ajouter $0{,}35 + 6 = 6{,}35$.
La libraire rend **$6{,}35$ €** (on vérifie : $20 - 13{,}65 = 6{,}35$).

**2.**
a) $4{,}7 + 0{,}3 = 5$ et $5 + 5 = 10$ : $4{,}7 + \\mathbf{5{,}3} = 10$.
b) $0{,}85 + 0{,}05 = 0{,}9$ et $0{,}9 + 0{,}1 = 1$ : $0{,}85 + \\mathbf{0{,}15} = 1$.
c) $12{,}4 + 0{,}6 = 13$ et $13 + 7 = 20$ : $12{,}4 + \\mathbf{7{,}6} = 20$.

**3.** On aligne les virgules (on complète par des zéros si besoin).
a) $27{,}80 + 145{,}63 = 173{,}43$.
b) $80{,}00 - 35{,}46 = 44{,}54$ (vérification : $44{,}54 + 35{,}46 = 80$).`
    },
    {
      id: "6N3-ds-14",
      title: "Le relais 4 × 100 m",
      difficulty: 2,
      points: 5,
      statement: `Deux équipes de quatre coureurs disputent un relais $4 \\times 100$ m. Voici le temps (en secondes) de chaque relayeur :

| Équipe | 1er relayeur | 2e relayeur | 3e relayeur | 4e relayeur |
|:---|:---:|:---:|:---:|:---:|
| Bleue | $13{,}85$ | $14{,}2$ | $13{,}6$ | $14{,}05$ |
| Rouge | $14{,}1$ | $13{,}75$ | $13{,}9$ | $13{,}82$ |

1. Sans calcul posé, donner un ordre de grandeur du temps total de chaque équipe.
2. Calculer le temps total exact de chaque équipe.
3. Quelle équipe a gagné ? Avec combien de secondes d'avance ?
4. Quel temps aurait dû réaliser le 4e relayeur de l'équipe Bleue pour que son équipe fasse exactement le même temps que l'équipe Rouge ?`,
      solution: `**1.** Chaque relayeur court en environ $14$ s : chaque équipe met environ $4 \\times 14 = 56$ s.

**2.** Équipe Bleue : $13{,}85 + 14{,}2 + 13{,}6 + 14{,}05 = 55{,}7$ s.
(On peut regrouper : $13{,}85 + 14{,}05 = 27{,}9$ et $14{,}2 + 13{,}6 = 27{,}8$, puis $27{,}9 + 27{,}8 = 55{,}7$.)
Équipe Rouge : $14{,}1 + 13{,}75 + 13{,}9 + 13{,}82 = 55{,}57$ s.
(Ces résultats sont cohérents avec l'ordre de grandeur $56$ s.)

**3.** $55{,}57 < 55{,}70$ : l'**équipe Rouge** a gagné (le plus petit temps).
Avance : $55{,}7 - 55{,}57 = 0{,}13$ s.

**4.** Le 4e relayeur bleu aurait dû courir $0{,}13$ s plus vite : $14{,}05 - 0{,}13 = 13{,}92$ s.
Vérification : $13{,}85 + 14{,}2 + 13{,}6 + 13{,}92 = 55{,}57$ s.`
    },
    {
      id: "6N3-ds-15",
      title: "La balance à plateaux",
      difficulty: 3,
      points: 5,
      statement: `Une balance à plateaux est en équilibre lorsque les masses posées sur les deux plateaux sont égales.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 340 170" width="340" height="170" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="170" y1="40" x2="170" y2="150" stroke="currentColor" stroke-width="3"/><line x1="135" y1="150" x2="205" y2="150" stroke="currentColor" stroke-width="3"/><line x1="60" y1="40" x2="280" y2="40" stroke="currentColor" stroke-width="3"/><circle cx="170" cy="40" r="4" fill="currentColor"/><line x1="60" y1="40" x2="22" y2="95" stroke="currentColor" stroke-width="1.2"/><line x1="60" y1="40" x2="98" y2="95" stroke="currentColor" stroke-width="1.2"/><line x1="18" y1="95" x2="102" y2="95" stroke="currentColor" stroke-width="3"/><line x1="280" y1="40" x2="242" y2="95" stroke="currentColor" stroke-width="1.2"/><line x1="280" y1="40" x2="318" y2="95" stroke="currentColor" stroke-width="1.2"/><line x1="238" y1="95" x2="322" y2="95" stroke="currentColor" stroke-width="3"/><ellipse cx="42" cy="82" rx="17" ry="12" fill="rgba(34,197,94,0.35)" stroke="currentColor" stroke-width="1.2"/><rect x="66" y="80" width="26" height="14" fill="rgba(239,68,68,0.30)" stroke="currentColor" stroke-width="1.2"/><rect x="250" y="81" width="14" height="13" fill="currentColor"/><rect x="276" y="70" width="30" height="24" fill="rgba(234,179,8,0.30)" stroke="currentColor" stroke-width="1.2"/><text x="60" y="118" text-anchor="middle" font-size="12" fill="currentColor">melon : 1,25 kg</text><text x="60" y="134" text-anchor="middle" font-size="12" fill="currentColor">barquette : 0,8 kg</text><text x="280" y="118" text-anchor="middle" font-size="12" fill="currentColor">masse : 0,375 kg</text><text x="280" y="134" text-anchor="middle" font-size="12" fill="currentColor">sac de farine : ?</text></svg></div>

1. La balance ci-dessus est en équilibre. Calculer la masse totale posée sur le plateau de gauche.
2. En déduire la masse du sac de farine.
3. On ajoute une pomme de $0{,}215$ kg sur le plateau de gauche. Quelle masse faut-il ajouter sur le plateau de droite pour retrouver l'équilibre ? Quelle est alors la masse totale sur chaque plateau ?
4. Sur une autre balance, on pose $2{,}3$ kg de pommes à gauche et deux masses de $1{,}5$ kg et $0{,}6$ kg à droite. De quel côté la balance penche-t-elle ? Que peut-on retirer du plateau de gauche pour rétablir l'équilibre ?`,
      solution: `**1.** Plateau de gauche : $1{,}25 + 0{,}8 = 2{,}05$ kg.

**2.** La balance est en équilibre, donc le plateau de droite porte aussi $2{,}05$ kg. Le sac de farine pèse :
$$2{,}05 - 0{,}375 = 1{,}675 \\text{ kg}$$
Vérification : $0{,}375 + 1{,}675 = 2{,}05$.

**3.** Pour garder l'équilibre, il faut ajouter la même masse des deux côtés : on ajoute **$0{,}215$ kg** à droite.
Chaque plateau porte alors $2{,}05 + 0{,}215 = 2{,}265$ kg.

**4.** À droite : $1{,}5 + 0{,}6 = 2{,}1$ kg. À gauche : $2{,}3$ kg. Comme $2{,}3 > 2{,}1$, la balance **penche à gauche**.
Écart : $2{,}3 - 2{,}1 = 0{,}2$ kg. Il faut retirer **$0{,}2$ kg de pommes** du plateau de gauche (on peut aussi ajouter $0{,}2$ kg à droite).`
    },
    {
      id: "6N3-ds-16",
      title: "Les repères d'une piste cyclable",
      difficulty: 4,
      points: 6,
      statement: `Une piste cyclable relie quatre villages $A$, $B$, $C$ et $D$. Des bornes indiquent la distance (en km) parcourue depuis le village $A$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 370 90" width="370" height="90" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="25" y1="45" x2="345" y2="45" stroke="currentColor" stroke-width="2"/><circle cx="25" cy="45" r="4" fill="#2563eb"/><text x="25" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">A</text><text x="25" y="72" text-anchor="middle" font-size="12" fill="currentColor">km 0</text><circle cx="98" cy="45" r="4" fill="#2563eb"/><text x="98" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">B</text><text x="98" y="72" text-anchor="middle" font-size="12" fill="currentColor">km 23,7</text><circle cx="214" cy="45" r="4" fill="#2563eb"/><text x="214" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">C</text><text x="214" y="72" text-anchor="middle" font-size="12" fill="currentColor">km 61,45</text><circle cx="345" cy="45" r="4" fill="#2563eb"/><text x="345" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">D</text><text x="340" y="72" text-anchor="middle" font-size="12" fill="currentColor">km 104,2</text></svg></div>

1. Calculer les distances $AB$, $BC$ et $CD$.
2. Vérifier, à l'aide d'une addition, que la somme de ces trois distances est égale à la longueur totale de la piste.
3. Lucie part de $A$ en direction de $D$. Elle a parcouru $48{,}6$ km.
   a) Entre quels villages se trouve-t-elle ?
   b) Quelle distance lui reste-t-il à parcourir pour atteindre $C$ ?
4. Au même moment, Marc, parti de $D$ en direction de $A$, a parcouru $37{,}85$ km.
   a) Quel nombre est inscrit sur la borne près de laquelle il se trouve ?
   b) Entre quels villages est-il ? À quelle distance du village $C$ ?
5. Quelle distance sépare alors Lucie et Marc ? Contrôler le résultat en additionnant les distances parcourues par Lucie, par Marc, et la distance qui les sépare.`,
      solution: `**1.** On soustrait les numéros des bornes :
- $AB = 23{,}7 - 0 = 23{,}7$ km ;
- $BC = 61{,}45 - 23{,}7 = 37{,}75$ km ;
- $CD = 104{,}2 - 61{,}45 = 42{,}75$ km.

**2.** $23{,}7 + 37{,}75 + 42{,}75 = 61{,}45 + 42{,}75 = 104{,}2$ km : on retrouve bien la longueur totale de la piste.

**3.** a) $23{,}7 < 48{,}6 < 61{,}45$ : Lucie est **entre $B$ et $C$**.
b) Il lui reste $61{,}45 - 48{,}6 = 12{,}85$ km jusqu'à $C$.

**4.** a) Marc part de la borne $104{,}2$ et revient vers $A$ : il est près de la borne $104{,}2 - 37{,}85 = 66{,}35$.
b) $61{,}45 < 66{,}35 < 104{,}2$ : Marc est **entre $C$ et $D$**, à $66{,}35 - 61{,}45 = 4{,}9$ km de $C$.

**5.** Lucie est à la borne $48{,}6$ et Marc à la borne $66{,}35$ : ils sont séparés de $66{,}35 - 48{,}6 = 17{,}75$ km.
Contrôle : $48{,}6 + 17{,}75 + 37{,}85 = 66{,}35 + 37{,}85 = 104{,}2$ km, soit la longueur totale de la piste.`
    }
  ]
});

Object.assign(window.MATHS_DS_BANK, {
  "6N4": [
    {
      id: "6N4-ds-01",
      title: "Multiplier par 10, 100, 1 000 et par 0,1 ; 0,01 ; 0,001",
      difficulty: 1,
      points: 4,
      statement: `Sans poser d'opération.

1. Calculer :
   a) $3{,}47 \\times 10$
   b) $0{,}52 \\times 100$
   c) $6{,}8 \\times 1\\,000$
2. Calculer :
   a) $45 \\times 0{,}1$
   b) $362 \\times 0{,}01$
   c) $7{,}5 \\times 0{,}001$
3. Compléter les égalités : $2{,}3 \\times \\ldots = 230$ ; $\\quad \\ldots \\times 0{,}1 = 0{,}48$.`,
      solution: `Multiplier par 10, 100 ou 1 000, c'est rendre chaque chiffre 10, 100 ou 1 000 fois plus grand : la virgule se déplace de 1, 2 ou 3 rangs vers la droite. Multiplier par $0{,}1$, $0{,}01$ ou $0{,}001$, c'est diviser par 10, 100 ou 1 000 : la virgule se déplace vers la gauche.

**1.** a) $3{,}47 \\times 10 = 34{,}7$ ; b) $0{,}52 \\times 100 = 52$ ; c) $6{,}8 \\times 1\\,000 = 6\\,800$.

**2.** a) $45 \\times 0{,}1 = 4{,}5$ ; b) $362 \\times 0{,}01 = 3{,}62$ ; c) $7{,}5 \\times 0{,}001 = 0{,}0075$.

**3.** $2{,}3 \\times 100 = 230$ (la virgule s'est déplacée de deux rangs vers la droite).
$4{,}8 \\times 0{,}1 = 0{,}48$ (multiplier par $0{,}1$ revient à diviser par 10, donc le nombre cherché est $0{,}48 \\times 10 = 4{,}8$).`
    },
    {
      id: "6N4-ds-02",
      title: "Poser des multiplications de décimaux",
      difficulty: 1,
      points: 4,
      statement: `1. Donner un ordre de grandeur de chacun des produits suivants.
2. Poser et effectuer les multiplications :
   a) $4{,}6 \\times 3{,}5$
   b) $12{,}75 \\times 8$
   c) $0{,}24 \\times 1{,}5$`,
      solution: `**1.** a) $4{,}6 \\times 3{,}5 \\approx 5 \\times 3{,}5 = 17{,}5$ (environ 16 à 18).
b) $12{,}75 \\times 8 \\approx 13 \\times 8 = 104$.
c) $0{,}24 \\times 1{,}5 \\approx 0{,}2 \\times 2 = 0{,}4$.

**2.** On multiplie les nombres sans tenir compte des virgules, puis on place la virgule : le produit a autant de chiffres après la virgule que les deux facteurs réunis.
a) $46 \\times 35 = 1\\,610$ ; il faut $1 + 1 = 2$ chiffres après la virgule : $4{,}6 \\times 3{,}5 = 16{,}10 = 16{,}1$.
b) $1\\,275 \\times 8 = 10\\,200$ ; 2 chiffres après la virgule : $12{,}75 \\times 8 = 102{,}00 = 102$.
c) $24 \\times 15 = 360$ ; $2 + 1 = 3$ chiffres après la virgule : $0{,}24 \\times 1{,}5 = 0{,}360 = 0{,}36$.
Les résultats sont cohérents avec les ordres de grandeur.`
    },
    {
      id: "6N4-ds-03",
      title: "Au marché",
      difficulty: 2,
      points: 4,
      statement: `Au marché, Hugo achète $2{,}4$ kg de pommes à $2{,}35$ € le kilogramme et $3$ baguettes à $1{,}15$ € l'une.

1. Calculer le prix des pommes.
2. Calculer le prix des baguettes.
3. Hugo paie avec un billet de $20$ €. Combien lui rend-on ?`,
      solution: `**1.** Prix des pommes : $2{,}4 \\times 2{,}35$. On calcule $24 \\times 235 = 5\\,640$ et on place 3 chiffres après la virgule : $5{,}640$. Les pommes coûtent **$5{,}64$ €** (ordre de grandeur : $2 \\times 2{,}5 = 5$ €, cohérent).

**2.** Prix des baguettes : $3 \\times 1{,}15 = 3{,}45$ €.

**3.** Total : $5{,}64 + 3{,}45 = 9{,}09$ €. Monnaie rendue : $20 - 9{,}09 = 10{,}91$ €. On rend **$10{,}91$ €** à Hugo.`
    },
    {
      id: "6N4-ds-04",
      title: "Utiliser un produit connu",
      difficulty: 2,
      points: 5,
      statement: `1. Mia a calculé $48{,}7 \\times 5{,}2$ et a trouvé $25{,}324$. Sans poser l'opération, montrer que son résultat est faux. Quel est le résultat exact ?
2. On sait que $156 \\times 23 = 3\\,588$. Sans poser d'opération, en déduire :
   a) $15{,}6 \\times 2{,}3$
   b) $1{,}56 \\times 23$
   c) $156 \\times 0{,}23$
   d) $0{,}156 \\times 2{,}3$`,
      solution: `**1.** Ordre de grandeur : $48{,}7 \\times 5{,}2 \\approx 50 \\times 5 = 250$. Le résultat de Mia ($25{,}324$) est environ 10 fois trop petit : il est faux (elle a mal placé la virgule).
On a $487 \\times 52 = 25\\,324$ ; le produit doit avoir $1 + 1 = 2$ chiffres après la virgule : $48{,}7 \\times 5{,}2 = 253{,}24$.

**2.** Les chiffres du résultat sont ceux de $3\\,588$ ; seule la place de la virgule change (nombre total de chiffres après la virgule dans les facteurs).
a) $15{,}6 \\times 2{,}3$ : $1 + 1 = 2$ chiffres après la virgule, donc $35{,}88$.
b) $1{,}56 \\times 23$ : 2 chiffres après la virgule, donc $35{,}88$.
c) $156 \\times 0{,}23$ : 2 chiffres après la virgule, donc $35{,}88$.
d) $0{,}156 \\times 2{,}3$ : $3 + 1 = 4$ chiffres après la virgule, donc $0{,}3588$.`
    },
    {
      id: "6N4-ds-05",
      title: "Le budget couture",
      difficulty: 3,
      points: 5,
      statement: `Pour coudre une veste, Pierre a besoin de $3{,}5$ m de tissu vendu $12{,}80$ € le mètre et de $6$ boutons à $0{,}85$ € pièce. Il dispose de $50$ €.

1. Calculer le prix du tissu.
2. Calculer le prix des boutons.
3. Pierre a-t-il assez d'argent ? Si oui, combien lui reste-t-il ?
4. Finalement, Pierre choisit un tissu à $13{,}50$ € le mètre. Peut-il encore tout acheter ? Justifier.`,
      solution: `**1.** $3{,}5 \\times 12{,}80$ : $35 \\times 128 = 4\\,480$, avec 2 chiffres après la virgule : $44{,}80$. Le tissu coûte **$44{,}80$ €**.

**2.** $6 \\times 0{,}85 = 5{,}10$. Les boutons coûtent **$5{,}10$ €**.

**3.** Total : $44{,}80 + 5{,}10 = 49{,}90$ €. Comme $49{,}90 < 50$, Pierre a assez d'argent ; il lui reste $50 - 49{,}90 = 0{,}10$ €, soit **10 centimes**.

**4.** Nouveau prix du tissu : $3{,}5 \\times 13{,}50 = 47{,}25$ €. Total : $47{,}25 + 5{,}10 = 52{,}35$ €. Comme $52{,}35 > 50$, **Pierre n'a plus assez d'argent** (il lui manque $2{,}35$ €).`
    },
    {
      id: "6N4-ds-06",
      title: "Des miles aux kilomètres",
      difficulty: 3,
      points: 5,
      statement: `Au Royaume-Uni, les distances sont indiquées en miles. Un mile mesure environ $1{,}609$ km.

1. Sans poser d'opération, convertir en kilomètres : $10$ miles ; $100$ miles ; $0{,}1$ mile.
2. Convertir $0{,}1$ mile en mètres.
3. Un marathon mesure environ $26{,}2$ miles.
   a) Donner un ordre de grandeur de sa longueur en kilomètres.
   b) Calculer sa longueur en kilomètres, puis l'arrondir au dixième.`,
      solution: `**1.** $10 \\times 1{,}609 = 16{,}09$ km ; $\\quad 100 \\times 1{,}609 = 160{,}9$ km ; $\\quad 0{,}1 \\times 1{,}609 = 0{,}1609$ km.

**2.** $1$ km $= 1\\,000$ m, donc $0{,}1609$ km $= 0{,}1609 \\times 1\\,000$ m $= 160{,}9$ m.

**3.** a) $26{,}2 \\times 1{,}609 \\approx 26 \\times 1{,}6 = 41{,}6$ : environ 42 km.
b) $262 \\times 1\\,609 = 421\\,558$ ; il faut $1 + 3 = 4$ chiffres après la virgule : $26{,}2 \\times 1{,}609 = 42{,}1558$ km.
Arrondi au dixième (le chiffre des centièmes est 5) : un marathon mesure environ **$42{,}2$ km**.`
    },
    {
      id: "6N4-ds-07",
      title: "Choisir un forfait de téléphone",
      difficulty: 4,
      points: 6,
      statement: `Lina compare deux forfaits mensuels de téléphone :
- **Forfait A** : $9{,}99$ € par mois, internet illimité ;
- **Forfait B** : $2{,}50$ € par mois, plus $0{,}15$ € par gigaoctet (Go) consommé.

1. Calculer le prix du forfait B pour un mois où Lina consomme $40$ Go, puis $60$ Go.
2. Pour chacune de ces consommations, quel forfait est le plus avantageux ?
3. Combien Lina paie-t-elle en un an avec le forfait A ?
4. Par des essais, trouver à partir de combien de gigaoctets (nombre entier) le forfait A devient plus avantageux que le forfait B.`,
      solution: `**1.** Pour $40$ Go : $2{,}50 + 40 \\times 0{,}15 = 2{,}50 + 6 = 8{,}50$ €.
Pour $60$ Go : $2{,}50 + 60 \\times 0{,}15 = 2{,}50 + 9 = 11{,}50$ €.

**2.** Pour 40 Go : $8{,}50 < 9{,}99$, **le forfait B** est plus avantageux.
Pour 60 Go : $11{,}50 > 9{,}99$, **le forfait A** est plus avantageux.

**3.** $12 \\times 9{,}99 = 119{,}88$ €. (On peut calculer $12 \\times 10 - 12 \\times 0{,}01 = 120 - 0{,}12$.)

**4.** Essais avec le forfait B :
- $49$ Go : $2{,}50 + 49 \\times 0{,}15 = 2{,}50 + 7{,}35 = 9{,}85$ €, moins cher que A ;
- $50$ Go : $2{,}50 + 50 \\times 0{,}15 = 2{,}50 + 7{,}50 = 10$ €, plus cher que A ($9{,}99$ €).

Le forfait A devient plus avantageux **à partir de 50 Go** par mois.`
    },
    {
      id: "6N4-ds-08",
      title: "Le coût d'un trajet en voiture",
      difficulty: 4,
      points: 5,
      statement: `La voiture de la famille Bernard consomme $5{,}8$ litres de carburant pour $100$ km. La famille doit faire un trajet de $350$ km. Le carburant coûte $1{,}85$ € le litre.

1. Combien de fois $100$ km y a-t-il dans $350$ km ?
2. Calculer la quantité de carburant nécessaire pour ce trajet.
3. Calculer le prix du carburant pour ce trajet, arrondi au centime.
4. Il faut ajouter $12{,}40$ € de péage. Quel est le coût total du trajet ?`,
      solution: `**1.** $350 = 3{,}5 \\times 100$ : il y a $3{,}5$ fois 100 km dans 350 km.

**2.** La voiture consomme $5{,}8$ L pour chaque centaine de kilomètres : $3{,}5 \\times 5{,}8 = 20{,}3$ L. Il faut **$20{,}3$ L** de carburant.

**3.** $20{,}3 \\times 1{,}85$ : $203 \\times 185 = 37\\,555$, avec $1 + 2 = 3$ chiffres après la virgule : $37{,}555$ €. Arrondi au centime : **$37{,}56$ €** (ordre de grandeur : $20 \\times 2 = 40$ €, cohérent).

**4.** $37{,}56 + 12{,}40 = 49{,}96$. Le trajet coûte environ **$49{,}96$ €**.`
    },
    {
      id: "6N4-ds-09",
      title: "Multiplier par 0,5 ; 0,25 et 1,5",
      difficulty: 1,
      points: 4,
      statement: `Sans calculatrice.

1. Calculer : $46 \\times 0{,}5$ ; $\\quad 3{,}8 \\times 0{,}5$ ; $\\quad 120 \\times 0{,}25$ ; $\\quad 18 \\times 0{,}25$.
2. Expliquer pourquoi multiplier un nombre par $0{,}5$ revient à en prendre la moitié.
3. Calculer $24 \\times 1{,}5$ et $7 \\times 1{,}5$ en remarquant que $1{,}5 = 1 + 0{,}5$.
4. Poser la multiplication $6{,}4 \\times 0{,}25$.`,
      solution: `**1.** Multiplier par $0{,}5$ revient à prendre la moitié ; multiplier par $0{,}25$ revient à prendre le quart (la moitié de la moitié).
- $46 \\times 0{,}5 = 23$ ;
- $3{,}8 \\times 0{,}5 = 1{,}9$ ;
- $120 \\times 0{,}25 = 30$ (moitié : $60$, puis moitié : $30$) ;
- $18 \\times 0{,}25 = 4{,}5$ (moitié : $9$, puis moitié : $4{,}5$).

**2.** $0{,}5 = \\frac{5}{10} = \\frac{1}{2}$ : multiplier par $0{,}5$, c'est multiplier par $5$ puis diviser par $10$, ce qui revient à diviser par $2$, donc à prendre la moitié.

**3.** $24 \\times 1{,}5 = 24 + 24 \\times 0{,}5 = 24 + 12 = 36$.
$7 \\times 1{,}5 = 7 + 7 \\times 0{,}5 = 7 + 3{,}5 = 10{,}5$.

**4.** On calcule $64 \\times 25 = 1\\,600$. Il y a un chiffre après la virgule dans $6{,}4$ et deux dans $0{,}25$, donc trois en tout dans le produit : $6{,}4 \\times 0{,}25 = 1{,}600 = 1{,}6$.
(Contrôle : le quart de $6{,}4$ est bien $1{,}6$.)`
    },
    {
      id: "6N4-ds-10",
      title: "Recharger une voiture électrique",
      difficulty: 2,
      points: 5,
      statement: `Pour recharger sa voiture électrique, Mme Lambert a le choix entre deux bornes :
- borne A : $0{,}32$ € par kilowattheure (kWh) ;
- borne B : $2{,}50$ € de frais par recharge, plus $0{,}18$ € par kWh.

1. Calculer le prix d'une recharge de $42{,}5$ kWh avec la borne A.
2. Calculer le prix de la même recharge avec la borne B. Quelle borne est la plus avantageuse ?
3. Pour une petite recharge de $5$ kWh, quelle borne est la plus avantageuse ? Justifier.
4. Même question pour une recharge de $20$ kWh.`,
      solution: `**1.** Borne A : $42{,}5 \\times 0{,}32 = 13{,}6$. La recharge coûte **$13{,}60$ €**.
(On calcule $425 \\times 32 = 13\\,600$, puis on place la virgule : $1 + 2 = 3$ chiffres après la virgule, soit $13{,}600$.)

**2.** Borne B : $42{,}5 \\times 0{,}18 = 7{,}65$, puis $7{,}65 + 2{,}50 = 10{,}15$ €.
$10{,}15 < 13{,}60$ : la **borne B** est la plus avantageuse pour cette recharge.

**3.** Borne A : $5 \\times 0{,}32 = 1{,}60$ €. Borne B : $5 \\times 0{,}18 + 2{,}50 = 0{,}90 + 2{,}50 = 3{,}40$ €.
Pour $5$ kWh, la **borne A** est la plus avantageuse : les frais fixes de la borne B pèsent lourd pour une petite recharge.

**4.** Borne A : $20 \\times 0{,}32 = 6{,}40$ €. Borne B : $20 \\times 0{,}18 + 2{,}50 = 3{,}60 + 2{,}50 = 6{,}10$ €.
Pour $20$ kWh, la **borne B** est (de peu) la plus avantageuse.`
    },
    {
      id: "6N4-ds-11",
      title: "Multiplier, est-ce toujours agrandir ?",
      difficulty: 3,
      points: 5,
      statement: `On considère les produits suivants :
$$A = 45 \\times 0{,}8 \\qquad B = 45 \\times 1{,}2 \\qquad C = 2{,}5 \\times 0{,}4 \\qquad D = 0{,}6 \\times 0{,}5 \\qquad E = 12 \\times 1$$

1. **Sans calculer**, dire pour chaque produit si le résultat est plus petit, plus grand ou égal au premier facteur. Expliquer la règle utilisée.
2. Calculer $A$, $B$, $C$, $D$ et $E$ pour vérifier.
3. Léa affirme : « $0{,}6 \\times 0{,}5$ est forcément plus grand que $0{,}6$, car une multiplication agrandit toujours. » Expliquer son erreur.
4. Pendant les soldes, un magasin affiche : « Vous payez $0{,}7$ fois le prix initial. » Une veste coûte $64$ € avant les soldes. Combien coûte-t-elle pendant les soldes ? Quelle est l'économie réalisée ?
5. Par quel nombre faut-il multiplier $8$ pour obtenir $6$ ? Justifier par un calcul.`,
      solution: `**1.** Règle : multiplier par un nombre plus petit que $1$ donne un résultat plus petit que le nombre de départ ; multiplier par un nombre plus grand que $1$ donne un résultat plus grand ; multiplier par $1$ ne change rien.
- $A$ : $0{,}8 < 1$, donc $A < 45$.
- $B$ : $1{,}2 > 1$, donc $B > 45$.
- $C$ : $0{,}4 < 1$, donc $C < 2{,}5$.
- $D$ : $0{,}5 < 1$, donc $D < 0{,}6$.
- $E$ : $E = 12$.

**2.** $A = 36$ ; $\\ B = 54$ ; $\\ C = 1$ ; $\\ D = 0{,}3$ ; $\\ E = 12$. Les résultats confirment la question 1.

**3.** Multiplier par $0{,}5$, c'est prendre la moitié : $0{,}6 \\times 0{,}5 = 0{,}3$, qui est plus petit que $0{,}6$. Une multiplication n'agrandit que si l'on multiplie par un nombre plus grand que $1$.

**4.** $64 \\times 0{,}7 = 44{,}8$ : la veste coûte **$44{,}80$ €**. L'économie est de $64 - 44{,}80 = 19{,}20$ €.

**5.** Le nombre cherché est plus petit que $1$, car $6 < 8$. On essaie $0{,}75$ : $8 \\times 0{,}75 = 6$. Il faut multiplier $8$ par **$0{,}75$**.`
    },
    {
      id: "6N4-ds-12",
      title: "Plier une feuille de papier",
      difficulty: 4,
      points: 6,
      statement: `Une feuille de papier a une épaisseur de $0{,}08$ mm. On la plie en deux, puis encore en deux, et ainsi de suite. À chaque pliage, l'épaisseur est multipliée par $2$.

1. Recopier et compléter le tableau des épaisseurs.

| Nombre de pliages | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Épaisseur (mm) | $0{,}08$ | | | | | |

2. Après combien de pliages l'épaisseur dépasse-t-elle $1$ cm pour la première fois ? Justifier.
3. a) Recopier et compléter le tableau suivant, en doublant à chaque fois : il indique par combien l'épaisseur de départ a été multipliée.

| Nombre de pliages | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Épaisseur de départ multipliée par | $2$ | $4$ | | | | | | | | |

   b) En déduire que l'épaisseur après $10$ pliages est égale à $0{,}08 \\times 1\\,024$ mm, puis la calculer.
4. Un roman a une épaisseur de $2{,}5$ cm. Après $10$ pliages, le papier plié est-il plus épais que ce roman ? Combien de fois plus épais environ (donner un nombre entier) ?`,
      solution: `**1.** On multiplie par $2$ à chaque étape :

| Nombre de pliages | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Épaisseur (mm) | $0{,}08$ | $0{,}16$ | $0{,}32$ | $0{,}64$ | $1{,}28$ | $2{,}56$ |

**2.** $1$ cm $= 10$ mm. On continue : $6$ pliages : $2{,}56 \\times 2 = 5{,}12$ mm ; $7$ pliages : $5{,}12 \\times 2 = 10{,}24$ mm.
$5{,}12 < 10 < 10{,}24$ : l'épaisseur dépasse $1$ cm pour la première fois après **$7$ pliages**.

**3.** a) On double à chaque pliage :

| Nombre de pliages | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Épaisseur de départ multipliée par | $2$ | $4$ | $8$ | $16$ | $32$ | $64$ | $128$ | $256$ | $512$ | $1\\,024$ |

b) Après $10$ pliages, l'épaisseur de départ $0{,}08$ mm a été multipliée par $1\\,024$ : elle vaut $0{,}08 \\times 1\\,024 = 81{,}92$ mm.

**4.** $2{,}5$ cm $= 25$ mm et $81{,}92 > 25$ : oui, le papier plié est plus épais que le roman.
$3 \\times 25 = 75$ et $4 \\times 25 = 100$ : $81{,}92$ est entre les deux, plus proche de $75$. Le papier plié est environ **$3$ fois** plus épais que le roman.

*(En pratique, il est très difficile de plier une feuille plus de $7$ ou $8$ fois !)*`
    },
    {
      id: "6N4-ds-13",
      title: "La sortie au cinéma",
      difficulty: 1,
      points: 4,
      statement: `Au cinéma, une place coûte $9{,}80$ € au tarif plein et $7{,}40$ € au tarif réduit (enfants). Un cornet de pop-corn coûte $4{,}50$ €.
La famille Moreau (deux adultes et trois enfants) va voir un film et achète deux cornets de pop-corn.

1. Donner un ordre de grandeur de la dépense de la famille.
2. Calculer le prix des places des adultes, puis celui des places des enfants.
3. Calculer la dépense totale de la famille.
4. Les parents paient avec trois billets de $20$ €. Combien la caissière leur rend-elle ?`,
      solution: `**1.** On arrondit les prix : $9{,}80 \\approx 10$ ; $7{,}40 \\approx 7$ ; $4{,}50 \\approx 5$.
Ordre de grandeur : $2 \\times 10 + 3 \\times 7 + 2 \\times 5 = 20 + 21 + 10 = 51$ €.

**2.** Places adultes : $2 \\times 9{,}80 = 19{,}60$ €.
Places enfants : $3 \\times 7{,}40 = 22{,}20$ €.

**3.** Pop-corn : $2 \\times 4{,}50 = 9$ €.
Dépense totale : $19{,}60 + 22{,}20 + 9 = 50{,}80$ € (cohérent avec l'ordre de grandeur $51$ €).

**4.** Les parents donnent $3 \\times 20 = 60$ €. La caissière rend $60 - 50{,}80 = 9{,}20$ €.`
    },
    {
      id: "6N4-ds-14",
      title: "Le robinet qui fuit",
      difficulty: 2,
      points: 5,
      statement: `Sans calculatrice.

Un robinet mal fermé laisse échapper $0{,}15$ litre d'eau par minute.

1. Quelle quantité d'eau (en litres) s'échappe en une heure ?
2. Quelle quantité d'eau s'échappe en une journée ($24$ heures) ?
3. Quelle quantité d'eau s'échappe en $30$ jours ?
4. Un litre d'eau coûte $0{,}004$ €. Combien coûte cette fuite en $30$ jours ?
5. Un réparateur demande $22{,}50$ € pour changer le joint. La réparation est-elle « remboursée » en un mois ?`,
      solution: `**1.** Une heure dure $60$ minutes : $0{,}15 \\times 60 = 9$ litres.
(Calcul : $15 \\times 60 = 900$, et $0{,}15$ a deux chiffres après la virgule, donc $0{,}15 \\times 60 = 9{,}00$.)

**2.** $9 \\times 24 = 216$ litres en une journée.

**3.** $216 \\times 30 = 6\\,480$ litres en $30$ jours.

**4.** $6\\,480 \\times 0{,}004$ : on calcule $6\\,480 \\times 4 = 25\\,920$, puis on place la virgule ($0{,}004$ a trois chiffres après la virgule) : $25{,}920$.
La fuite coûte **$25{,}92$ €** en $30$ jours.

**5.** $25{,}92 > 22{,}50$ : en un mois, la fuite coûte plus cher que la réparation. Oui, la réparation est « remboursée » en un mois (et ensuite on économise environ $26$ € par mois).`
    },
    {
      id: "6N4-ds-15",
      title: "Le carreleur",
      difficulty: 3,
      points: 5,
      statement: `Un carreleur pose une rangée de carreaux carrés le long d'un mur de $2{,}95$ m. Chaque carreau mesure $20{,}5$ cm de côté. Entre deux carreaux voisins, il laisse un joint de $0{,}4$ cm. Il n'y a pas de joint aux deux extrémités de la rangée.

1. Il pose d'abord $14$ carreaux. Combien de joints y a-t-il ? (On pourra faire un petit schéma avec $3$ ou $4$ carreaux.)
2. Calculer la longueur totale des $14$ carreaux, puis la longueur totale des joints.
3. Quelle est la longueur de la rangée de $14$ carreaux ? Quelle longueur de mur reste-t-il sans carreau ?
4. Le carreleur aurait-il pu poser $15$ carreaux entiers dans cette rangée ? Justifier par un calcul.`,
      solution: `**1.** Avec $3$ carreaux il y a $2$ joints, avec $4$ carreaux $3$ joints : il y a toujours un joint de moins que de carreaux. Avec $14$ carreaux, il y a **$13$ joints**.

**2.** Carreaux : $14 \\times 20{,}5 = 287$ cm.
Joints : $13 \\times 0{,}4 = 5{,}2$ cm.

**3.** Longueur de la rangée : $287 + 5{,}2 = 292{,}2$ cm.
Le mur mesure $2{,}95$ m $= 295$ cm. Il reste $295 - 292{,}2 = 2{,}8$ cm sans carreau.

**4.** Avec $15$ carreaux, il y aurait $14$ joints : $15 \\times 20{,}5 + 14 \\times 0{,}4 = 307{,}5 + 5{,}6 = 313{,}1$ cm.
Comme $313{,}1 > 295$, **non**, $15$ carreaux entiers ne tiennent pas dans la rangée.`
    },
    {
      id: "6N4-ds-16",
      title: "La photocopieuse",
      difficulty: 4,
      points: 6,
      statement: `Sans calculatrice.

Sur une photocopieuse, la touche « agrandir » multiplie toutes les longueurs d'un document par $1{,}2$ ; la touche « réduire » les multiplie par $0{,}8$.

1. Sur un document, un segment mesure $10$ cm. On l'agrandit une fois. Quelle est sa nouvelle longueur ?
2. On agrandit une deuxième fois la copie obtenue. Quelle est maintenant la longueur du segment ?
3. Léo affirme : « Agrandir deux fois de suite, c'est comme multiplier les longueurs par $1{,}4$. » Utiliser les questions 1 et 2 pour montrer que Léo se trompe.
   a) Calculer $1{,}2 \\times 1{,}2$.
   b) Vérifier qu'en multipliant $10$ par ce nombre, on retrouve le résultat de la question 2.
4. Sur une photo, la largeur mesure $25$ cm. Quelle sera sa largeur après deux agrandissements ? (Utiliser le résultat de la question 3.)
5. Mia agrandit une fois le segment de $10$ cm, puis réduit une fois la copie. Retrouve-t-elle la longueur de départ ? Justifier.`,
      solution: `**1.** $10 \\times 1{,}2 = 12$ cm.

**2.** $12 \\times 1{,}2 = 14{,}4$ cm.

**3.** Si Léo avait raison, on obtiendrait $10 \\times 1{,}4 = 14$ cm. Or on a trouvé $14{,}4$ cm : **Léo se trompe**.
a) $12 \\times 12 = 144$, et le produit doit avoir $1 + 1 = 2$ chiffres après la virgule : $1{,}2 \\times 1{,}2 = 1{,}44$.
b) $10 \\times 1{,}44 = 14{,}4$ cm : on retrouve bien le résultat de la question 2. Agrandir deux fois revient à multiplier les longueurs par $1{,}44$ (et non par $1{,}4$).

**4.** $25 \\times 1{,}44 = 36$ cm.
(Vérification en deux étapes : $25 \\times 1{,}2 = 30$, puis $30 \\times 1{,}2 = 36$.)

**5.** Après l'agrandissement : $12$ cm. Après la réduction : $12 \\times 0{,}8 = 9{,}6$ cm.
Comme $9{,}6 \\neq 10$, Mia **ne retrouve pas** la longueur de départ : réduire avec $0{,}8$ ne « défait » pas un agrandissement avec $1{,}2$ (en effet $1{,}2 \\times 0{,}8 = 0{,}96$, qui n'est pas égal à $1$).`
    }
  ],
  "6N5": [
    {
      id: "6N5-ds-01",
      title: "Effectuer des divisions euclidiennes",
      difficulty: 1,
      points: 4,
      statement: `1. Poser et effectuer la division euclidienne de $157$ par $6$. Écrire l'égalité correspondante.
2. Poser et effectuer la division euclidienne de $2\\,024$ par $15$. Écrire l'égalité correspondante.
3. Le nombre $999$ est-il divisible par $37$ ? Justifier par une division.`,
      solution: `Dans la division euclidienne de $a$ par $b$, on cherche le quotient $q$ et le reste $r$ tels que $a = b \\times q + r$ avec $r < b$.

**1.** $6 \\times 26 = 156$ et $157 - 156 = 1$. Quotient $26$, reste $1$ : $$157 = 6 \\times 26 + 1 \\quad (1 < 6)$$

**2.** $15 \\times 134 = 2\\,010$ et $2\\,024 - 2\\,010 = 14$. Quotient $134$, reste $14$ : $$2\\,024 = 15 \\times 134 + 14 \\quad (14 < 15)$$

**3.** $37 \\times 27 = 999$ : la division de 999 par 37 tombe juste (quotient 27, reste 0). Donc **999 est divisible par 37**.`
    },
    {
      id: "6N5-ds-02",
      title: "Critères de divisibilité",
      difficulty: 1,
      points: 4,
      statement: `On considère les nombres : $120$ ; $235$ ; $342$ ; $4\\,581$ ; $7\\,290$.

1. Lesquels sont divisibles par $2$ ? par $5$ ? par $10$ ? Justifier.
2. Lesquels sont divisibles par $3$ ? par $9$ ? Justifier.
3. Quel nombre de cette liste est divisible à la fois par $2$, $3$, $5$, $9$ et $10$ ?`,
      solution: `**1.** Par 2 : le chiffre des unités est pair (0, 2, 4, 6, 8) : $120$, $342$, $7\\,290$.
Par 5 : le chiffre des unités est 0 ou 5 : $120$, $235$, $7\\,290$.
Par 10 : le chiffre des unités est 0 : $120$, $7\\,290$.

**2.** On calcule la somme des chiffres :
- $120$ : $1 + 2 + 0 = 3$ ; - $235$ : $2 + 3 + 5 = 10$ ; - $342$ : $3 + 4 + 2 = 9$ ;
- $4\\,581$ : $4 + 5 + 8 + 1 = 18$ ; - $7\\,290$ : $7 + 2 + 9 + 0 = 18$.

Divisibles par 3 (somme multiple de 3) : $120$, $342$, $4\\,581$, $7\\,290$.
Divisibles par 9 (somme multiple de 9) : $342$, $4\\,581$, $7\\,290$.

**3.** Seul **$7\\,290$** apparaît dans toutes les listes.`
    },
    {
      id: "6N5-ds-03",
      title: "Problèmes de partage et de groupement",
      difficulty: 2,
      points: 4,
      statement: `1. Pour une sortie, $250$ élèves doivent prendre des cars de $48$ places.
   a) Effectuer la division euclidienne de $250$ par $48$.
   b) Combien de cars faut-il réserver ? Justifier.
2. Une maîtresse partage équitablement $145$ bonbons entre $8$ enfants, en donnant à chacun le plus possible de bonbons.
   a) Combien de bonbons chaque enfant reçoit-il ?
   b) Combien en reste-t-il ?`,
      solution: `**1.** a) $48 \\times 5 = 240$ et $250 - 240 = 10$ : $250 = 48 \\times 5 + 10$ (quotient 5, reste 10).
b) 5 cars pleins transportent 240 élèves ; il reste 10 élèves qu'il faut aussi transporter. Il faut donc **6 cars**.

**2.** $8 \\times 18 = 144$ et $145 - 144 = 1$ : $145 = 8 \\times 18 + 1$.
a) Chaque enfant reçoit **18 bonbons**.
b) Il reste **1 bonbon**.`
    },
    {
      id: "6N5-ds-04",
      title: "Partager une addition",
      difficulty: 2,
      points: 4,
      statement: `1. Quatre amis partagent équitablement une addition de $25{,}60$ €. Combien chacun paie-t-il ?
2. Une corde de $37{,}8$ m est coupée en $7$ morceaux de même longueur. Quelle est la longueur d'un morceau ?
3. Poser la division de $9$ par $8$ et donner le quotient exact.
4. Calculer $14{,}5 \\div 5$ et vérifier le résultat par une multiplication.`,
      solution: `On pose la division et on place la virgule au quotient dès qu'on abaisse le chiffre des dixièmes.

**1.** $25{,}6 \\div 4 = 6{,}4$ (car $4 \\times 6 = 24$, reste 1, puis $16$ dixièmes $\\div 4 = 4$ dixièmes). Chacun paie **$6{,}40$ €**.

**2.** $37{,}8 \\div 7 = 5{,}4$ (car $7 \\times 5 = 35$, reste 2, puis $28$ dixièmes $\\div 7 = 4$ dixièmes). Un morceau mesure **$5{,}4$ m**.

**3.** $9 \\div 8$ : $9 = 8 \\times 1 + 1$ ; on continue : $10$ dixièmes $\\div 8 = 1$ reste $2$ ; $20$ centièmes $\\div 8 = 2$ reste $4$ ; $40$ millièmes $\\div 8 = 5$ reste $0$. Donc $9 \\div 8 = 1{,}125$.

**4.** $14{,}5 \\div 5 = 2{,}9$. Vérification : $5 \\times 2{,}9 = 14{,}5$.`
    },
    {
      id: "6N5-ds-05",
      title: "Les bouquets du fleuriste",
      difficulty: 3,
      points: 5,
      statement: `Un fleuriste dispose de $36$ roses et de $48$ tulipes. Il veut composer des bouquets **tous identiques** (même nombre de roses et même nombre de tulipes dans chaque bouquet) en utilisant **toutes** ses fleurs.

1. Peut-il faire $8$ bouquets ? Justifier.
2. Écrire la liste de tous les diviseurs de $36$, puis de tous les diviseurs de $48$.
3. Quel est le plus grand nombre de bouquets qu'il peut composer ? Combien de roses et de tulipes y aura-t-il alors dans chaque bouquet ?`,
      solution: `**1.** $36 = 8 \\times 4 + 4$ : 36 n'est pas divisible par 8. Il ne peut pas répartir toutes les roses dans 8 bouquets identiques : **non**.

**2.** Diviseurs de 36 (on cherche les produits égaux à 36 : $1 \\times 36$, $2 \\times 18$, $3 \\times 12$, $4 \\times 9$, $6 \\times 6$) :
$1$ ; $2$ ; $3$ ; $4$ ; $6$ ; $9$ ; $12$ ; $18$ ; $36$.
Diviseurs de 48 ($1 \\times 48$, $2 \\times 24$, $3 \\times 16$, $4 \\times 12$, $6 \\times 8$) :
$1$ ; $2$ ; $3$ ; $4$ ; $6$ ; $8$ ; $12$ ; $16$ ; $24$ ; $48$.

**3.** Le nombre de bouquets doit diviser 36 et 48. Diviseurs communs : 1, 2, 3, 4, 6, 12. Le plus grand est 12.
Il peut composer **12 bouquets**, chacun avec $36 \\div 12 = 3$ roses et $48 \\div 12 = 4$ tulipes.`
    },
    {
      id: "6N5-ds-06",
      title: "Jours de la semaine et phares",
      difficulty: 3,
      points: 5,
      statement: `1. Aujourd'hui, nous sommes lundi.
   a) Quel jour de la semaine serons-nous dans $100$ jours ? Justifier à l'aide d'une division euclidienne.
   b) Quel jour serons-nous dans $365$ jours ?
2. Deux phares s'allument en même temps. Le premier s'allume ensuite toutes les $6$ secondes, le second toutes les $8$ secondes.
   a) Écrire les dix premiers multiples non nuls de $6$ et de $8$.
   b) Au bout de combien de secondes les deux phares se rallumeront-ils en même temps pour la première fois ?`,
      solution: `**1.** Les jours se répètent toutes les semaines de 7 jours.
a) $100 = 7 \\times 14 + 2$ : dans 100 jours, on aura fait 14 semaines complètes (on retombe sur un lundi), puis 2 jours de plus. Nous serons **mercredi**.
b) $365 = 7 \\times 52 + 1$ : 52 semaines complètes puis 1 jour. Nous serons **mardi**.

**2.** a) Multiples de 6 : 6, 12, 18, 24, 30, 36, 42, 48, 54, 60.
Multiples de 8 : 8, 16, 24, 32, 40, 48, 56, 64, 72, 80.
b) Le plus petit multiple commun non nul est 24 : les deux phares se rallumeront ensemble pour la première fois au bout de **24 secondes**.`
    },
    {
      id: "6N5-ds-07",
      title: "Organiser une sortie scolaire",
      difficulty: 4,
      points: 6,
      statement: `Un collège organise une sortie pour $158$ élèves de 6e, répartis en $8$ classes, accompagnés de $12$ adultes.

**Proposition 1** : des cars de $52$ places, à $420$ € le car.
**Proposition 2** : des cars de $60$ places, à $520$ € le car.

1. Combien de personnes faut-il transporter ?
2. Pour chaque proposition, calculer le nombre de cars nécessaires et le coût total.
3. Quelle proposition est la moins chère ?
4. Avec la proposition la moins chère, le coût est partagé équitablement entre les 8 classes. Combien paie chaque classe ? Dans une classe de $15$ élèves où chacun paie la même somme, combien paie chaque élève ?`,
      solution: `**1.** $158 + 12 = 170$ personnes.

**2.** Proposition 1 : $170 = 52 \\times 3 + 14$. Trois cars ne suffisent pas (il resterait 14 personnes) : il faut **4 cars**, soit $4 \\times 420 = 1\\,680$ €.
Proposition 2 : $170 = 60 \\times 2 + 50$. Il faut **3 cars** ($3 \\times 60 = 180$ places $\\geqslant 170$), soit $3 \\times 520 = 1\\,560$ €.

**3.** $1\\,560 < 1\\,680$ : la **proposition 2** est la moins chère.

**4.** $1\\,560 \\div 8 = 195$ : chaque classe paie **195 €**.
$195 = 15 \\times 13 + 0$ : chaque élève paie **13 €**. Vérification : $15 \\times 13 = 195$.`
    },
    {
      id: "6N5-ds-08",
      title: "Les chocolats de Noël",
      difficulty: 4,
      points: 5,
      statement: `Un chocolatier a fabriqué entre $300$ et $400$ chocolats. Il remarque que :
- s'il les range par $9$, il n'en reste aucun ;
- s'il les range par $5$, il n'en reste aucun ;
- s'il les range par $2$, il n'en reste aucun.

1. Que peut-on dire du chiffre des unités de ce nombre ? Justifier.
2. Que peut-on dire de la somme de ses chiffres ?
3. Trouver le nombre de chocolats. Expliquer la démarche.
4. Il range finalement ses chocolats dans des boîtes de $12$. Combien de boîtes remplit-il ? Reste-t-il des chocolats ?`,
      solution: `**1.** Le nombre est divisible par 5 et par 2, donc son chiffre des unités est 0 ou 5, et il est pair : **le chiffre des unités est 0**.

**2.** Le nombre est divisible par 9 : **la somme de ses chiffres est un multiple de 9**.

**3.** Le nombre s'écrit $3?0$ (entre 300 et 400, unités 0). La somme des chiffres vaut $3 + ? + 0$ ; elle doit être un multiple de 9 : $3 + ? = 9$, donc le chiffre des dizaines est 6 (la somme ne peut pas valoir 18 car $? \\leqslant 9$).
Le chocolatier a **360 chocolats**. Vérification : $360 = 9 \\times 40 = 5 \\times 72 = 2 \\times 180$.

**4.** $360 = 12 \\times 30$ : il remplit **30 boîtes** et il ne reste aucun chocolat.`
    },
    {
      id: "6N5-ds-09",
      title: "Multiples et diviseurs : le vocabulaire",
      difficulty: 1,
      points: 4,
      statement: `1. Recopier et compléter chaque phrase par « multiple » ou « diviseur », en justifiant par un calcul :
   a) $84$ est un … de $7$.
   b) $6$ est un … de $54$.
   c) $100$ est un … de $25$.
2. Écrire la liste de tous les diviseurs de $30$.
3. Écrire tous les multiples de $13$ compris entre $50$ et $120$.
4. Le nombre $91$ est-il un multiple de $13$ ? Est-il divisible par $3$ ? Justifier.`,
      solution: `**1.** a) $84 = 7 \\times 12$ : $84$ est un **multiple** de $7$ (et $7$ est un diviseur de $84$).
b) $54 = 6 \\times 9$ : $6$ est un **diviseur** de $54$.
c) $100 = 25 \\times 4$ : $100$ est un **multiple** de $25$.

**2.** On cherche les produits égaux à $30$ : $30 = 1 \\times 30 = 2 \\times 15 = 3 \\times 10 = 5 \\times 6$.
Les diviseurs de $30$ sont : $1$ ; $2$ ; $3$ ; $5$ ; $6$ ; $10$ ; $15$ ; $30$.

**3.** Les multiples de $13$ sont $13$ ; $26$ ; $39$ ; $52$ ; $65$ ; … Entre $50$ et $120$ : $52$ ; $65$ ; $78$ ; $91$ ; $104$ ; $117$ (le suivant, $130$, dépasse $120$).

**4.** $91 = 13 \\times 7$ : oui, $91$ est un multiple de $13$ (il apparaît dans la liste précédente).
La somme de ses chiffres est $9 + 1 = 10$, qui n'est pas divisible par $3$ : $91$ **n'est pas** divisible par $3$.`
    },
    {
      id: "6N5-ds-10",
      title: "Le prix d'un yaourt",
      difficulty: 2,
      points: 5,
      statement: `Au supermarché, les mêmes yaourts sont vendus en deux formats :
- le lot de $6$ yaourts à $3{,}72$ € ;
- le lot de $4$ yaourts à $2{,}58$ €.

1. Poser la division et calculer le prix d'un yaourt dans le lot de $6$.
2. Calculer le prix d'un yaourt dans le lot de $4$.
3. Quel lot est le plus avantageux ? Justifier.
4. Nora a besoin de $24$ yaourts. Combien paie-t-elle si elle n'achète que des lots de $6$ ? Combien économise-t-elle par rapport à des lots de $4$ uniquement ?`,
      solution: `**1.** $3{,}72 \\div 6 = 0{,}62$ (on divise $3$ unités : $0$ au quotient ; puis $37$ dixièmes : $6$ fois $6$ font $36$, reste $1$ ; puis $12$ centièmes : $2$ fois). Un yaourt coûte **$0{,}62$ €**.
Vérification : $6 \\times 0{,}62 = 3{,}72$.

**2.** $2{,}58 \\div 4 = 0{,}645$. Un yaourt coûte **$0{,}645$ €** (environ $0{,}65$ €).
Vérification : $4 \\times 0{,}645 = 2{,}58$.

**3.** $0{,}62 < 0{,}645$ : le yaourt est moins cher dans le **lot de $6$**.

**4.** $24 = 6 \\times 4$ : il faut $4$ lots de $6$, soit $4 \\times 3{,}72 = 14{,}88$ €.
Avec des lots de $4$ : $24 = 4 \\times 6$, il faut $6$ lots, soit $6 \\times 2{,}58 = 15{,}48$ €.
Économie : $15{,}48 - 14{,}88 = 0{,}60$ €.`
    },
    {
      id: "6N5-ds-11",
      title: "Les rangs de la fanfare",
      difficulty: 3,
      points: 5,
      statement: `Une fanfare compte entre $100$ et $200$ musiciens. Le chef remarque que :
- s'il les range par $4$, il en reste $3$ ;
- s'il les range par $5$, il en reste $4$ ;
- s'il les range par $6$, il en reste $5$ ;
- s'il les range par $7$, il ne reste personne.

1. Que peut-on dire du chiffre des unités du nombre de musiciens ? Justifier à l'aide des rangs de $5$ puis des rangs de $4$.
2. Écrire la liste des nombres possibles compris entre $100$ et $200$ qui vérifient les deux premières conditions.
3. En déduire le nombre de musiciens. Justifier par des divisions euclidiennes.
4. Combien de rangs de $7$ le chef forme-t-il ?`,
      solution: `**1.** Rangés par $5$, il en reste $4$ : le nombre s'écrit $5 \\times q + 4$, donc son chiffre des unités est $4$ ou $9$ (les multiples de $5$ se terminent par $0$ ou $5$).
Rangés par $4$, il en reste $3$ : le nombre n'est pas pair (un multiple de $4$ est pair, plus $3$ donne un nombre impair). Son chiffre des unités est donc **$9$**.

**2.** Nombres entre $100$ et $200$ terminés par $9$ : $109$ ; $119$ ; $129$ ; … ; $199$. On garde ceux dont le reste dans la division par $4$ vaut $3$ :
$109 = 4 \\times 27 + 1$ (non) ; $119 = 4 \\times 29 + 3$ (oui) ; $129 = 4 \\times 32 + 1$ (non) ; $139 = 4 \\times 34 + 3$ (oui) ; … On obtient : **$119$ ; $139$ ; $159$ ; $179$ ; $199$**.

**3.** On teste les rangs de $6$ et de $7$ :
- $119 = 6 \\times 19 + 5$ et $119 = 7 \\times 17 + 0$ : les deux conditions sont vérifiées ;
- $139 = 6 \\times 23 + 1$ (non) ; $159 = 6 \\times 26 + 3$ (non) ; $199 = 6 \\times 33 + 1$ (non) ;
- $179 = 6 \\times 29 + 5$ mais $179 = 7 \\times 25 + 4$ (non).

La fanfare compte **$119$ musiciens**.

**4.** $119 = 7 \\times 17$ : le chef forme **$17$ rangs** de $7$ musiciens.`
    },
    {
      id: "6N5-ds-12",
      title: "L'addition du restaurant",
      difficulty: 4,
      points: 6,
      statement: `Huit amis dînent au restaurant. L'addition s'élève à $187{,}60$ €. Elle comprend $5$ desserts à $6{,}40$ € chacun ; le reste correspond aux plats, que tout le monde a partagés.

1. Si l'on partage l'addition en huit parts égales, combien chacun paie-t-il ? Poser la division.
2. Ceux qui n'ont pas pris de dessert trouvent ce partage injuste. On décide que chacun paie une part égale des plats, et que ceux qui ont pris un dessert paient en plus leur dessert.
   a) Calculer le prix total des desserts, puis celui des plats.
   b) Calculer la part des plats pour chaque personne.
   c) Combien paie une personne qui a pris un dessert ? une personne qui n'en a pas pris ?
3. Vérifier que les huit paiements de la question 2 redonnent bien le montant de l'addition.
4. Pour le pourboire, chacun ajoute $1{,}50$ €. Quel est le montant total payé par le groupe ?`,
      solution: `**1.** $187{,}60 \\div 8 = 23{,}45$. Chacun paierait **$23{,}45$ €** (vérification : $8 \\times 23{,}45 = 187{,}60$).

**2.** a) Desserts : $5 \\times 6{,}40 = 32$ €. Plats : $187{,}60 - 32 = 155{,}60$ €.
b) $155{,}60 \\div 8 = 19{,}45$ € par personne.
c) Avec dessert : $19{,}45 + 6{,}40 = 25{,}85$ €. Sans dessert : **$19{,}45$ €**.

**3.** $5$ personnes ont pris un dessert et $8 - 5 = 3$ n'en ont pas pris :
$$5 \\times 25{,}85 + 3 \\times 19{,}45 = 129{,}25 + 58{,}35 = 187{,}60$$
On retrouve bien le montant de l'addition.

**4.** Pourboire : $8 \\times 1{,}50 = 12$ €. Total : $187{,}60 + 12 = 199{,}60$ €.`
    },
    {
      id: "6N5-ds-13",
      title: "Les œufs de la ferme",
      difficulty: 1,
      points: 4,
      statement: `1. Un fermier a ramassé $250$ œufs. Il les range dans des boîtes de $12$ œufs.
   a) Poser et effectuer la division euclidienne de $250$ par $12$. Écrire l'égalité correspondante.
   b) Combien de boîtes pleines obtient-il ? Combien d'œufs restent hors des boîtes ?
2. Le lendemain, il ramasse $252$ œufs. Pourra-t-il remplir des boîtes de $12$ sans qu'il reste d'œuf ? Justifier. Que peut-on dire de $252$ par rapport à $12$ ?
3. Il coupe un ruban de $45$ m en $8$ morceaux de même longueur pour décorer son stand. Poser la division décimale de $45$ par $8$ et donner la longueur d'un morceau.`,
      solution: `**1.** a) $250 = 12 \\times 20 + 10$, avec $10 < 12$ : le quotient est $20$ et le reste est $10$.
b) Il obtient **$20$ boîtes pleines** et il reste **$10$ œufs**.

**2.** $252 = 12 \\times 21 + 0$ : le reste est nul, il remplit exactement $21$ boîtes. On dit que **$252$ est un multiple de $12$** (ou que $12$ est un diviseur de $252$).

**3.** On pose $45 \\div 8$ : $45 = 8 \\times 5 + 5$ ; on abaisse un $0$ : $50 = 8 \\times 6 + 2$ ; puis $20 = 8 \\times 2 + 4$ ; puis $40 = 8 \\times 5 + 0$.
$45 \\div 8 = 5{,}625$ : chaque morceau mesure **$5{,}625$ m**. (Vérification : $8 \\times 5{,}625 = 45$.)`
    },
    {
      id: "6N5-ds-14",
      title: "Disposer des chaises en rectangle",
      difficulty: 2,
      points: 5,
      statement: `Pour un spectacle, on dispose $36$ chaises en rangées qui contiennent toutes le même nombre de chaises, sans chaise isolée.

1. Si l'on fait $4$ rangées, combien y a-t-il de chaises par rangée ?
2. Peut-on faire $5$ rangées ? $8$ rangées ? Justifier.
3. Donner la liste de **tous** les diviseurs de $36$, puis toutes les dispositions possibles (nombre de rangées et nombre de chaises par rangée).
4. Le directeur veut au moins $3$ rangées et au moins $5$ chaises par rangée. Quelles dispositions conviennent ?
5. Un autre jour, on dispose de $37$ chaises. Quelles dispositions sont alors possibles ?`,
      solution: `**1.** $36 = 4 \\times 9$ : il y a **$9$ chaises** par rangée.

**2.** $36 = 5 \\times 7 + 1$ : le reste n'est pas nul, on ne peut pas faire $5$ rangées.
$36 = 8 \\times 4 + 4$ : on ne peut pas faire $8$ rangées non plus.

**3.** On cherche les produits égaux à $36$ : $1 \\times 36$ ; $2 \\times 18$ ; $3 \\times 12$ ; $4 \\times 9$ ; $6 \\times 6$.
Les diviseurs de $36$ sont : $1$ ; $2$ ; $3$ ; $4$ ; $6$ ; $9$ ; $12$ ; $18$ ; $36$.
Dispositions possibles (rangées × chaises par rangée) : $1 \\times 36$ ; $2 \\times 18$ ; $3 \\times 12$ ; $4 \\times 9$ ; $6 \\times 6$ ; $9 \\times 4$ ; $12 \\times 3$ ; $18 \\times 2$ ; $36 \\times 1$.

**4.** Il faut au moins $3$ rangées et au moins $5$ chaises par rangée : **$3$ rangées de $12$**, **$4$ rangées de $9$** ou **$6$ rangées de $6$**. ($9$ rangées de $4$ ne conviennent pas : moins de $5$ chaises par rangée.)

**5.** $37$ n'est divisible ni par $2$, ni par $3$, ni par $4$, ni par $5$, ni par $6$ (il suffit de tester jusqu'à $6$, car $7 \\times 7 = 49 > 37$). Ses seuls diviseurs sont $1$ et $37$ : on ne peut faire qu'**une seule rangée de $37$ chaises** (ou $37$ « rangées » d'une chaise, ce qui n'est pas raisonnable).`
    },
    {
      id: "6N5-ds-15",
      title: "Partager un ruban",
      difficulty: 3,
      points: 5,
      statement: `Une couturière veut couper des rubans en morceaux de même longueur.

1. Elle partage un ruban de $10$ m en $3$ morceaux égaux.
   a) Poser la division décimale de $10$ par $3$ jusqu'au rang des centièmes. Que remarque-t-on ?
   b) Elle mesure au centimètre près : elle coupe des morceaux de $3{,}33$ m. Quelle longueur de ruban reste-t-il ? Donner le résultat en cm.
2. Elle partage un ruban de $22$ m en $7$ morceaux égaux, coupés au centimètre près (sans dépasser).
   a) Calculer le quotient décimal de $22$ par $7$ jusqu'au rang des centièmes.
   b) Quelle est la longueur de chaque morceau ? Quelle longueur reste-t-il ?
3. Avec le ruban de $22$ m, elle veut maintenant des morceaux de **$3$ m exactement**. Combien de morceaux peut-elle couper, et quelle longueur reste-t-il ? Quelle division faut-il effectuer ?`,
      solution: `**1.** a) $10 = 3 \\times 3 + 1$ ; on abaisse un $0$ : $10 = 3 \\times 3 + 1$ ; puis encore $10 = 3 \\times 3 + 1$… Le reste vaut toujours $1$ : la division **ne s'arrête jamais**, on obtient $3{,}33\\ldots$
Au centième : $10 \\div 3 \\approx 3{,}33$.
b) $3 \\times 3{,}33 = 9{,}99$ m. Il reste $10 - 9{,}99 = 0{,}01$ m, soit **$1$ cm**.

**2.** a) $22 = 7 \\times 3 + 1$ ; $10 = 7 \\times 1 + 3$ ; $30 = 7 \\times 4 + 2$ : le quotient au centième est $3{,}14$ (la division continue : $22 \\div 7 = 3{,}142\\ldots$).
b) Chaque morceau mesure **$3{,}14$ m**. Les $7$ morceaux mesurent $7 \\times 3{,}14 = 21{,}98$ m ; il reste $22 - 21{,}98 = 0{,}02$ m, soit **$2$ cm**.

**3.** On effectue la **division euclidienne** de $22$ par $3$ : $22 = 3 \\times 7 + 1$.
Elle coupe **$7$ morceaux de $3$ m** et il reste **$1$ m** de ruban.`
    },
    {
      id: "6N5-ds-16",
      title: "Le collier de perles",
      difficulty: 4,
      points: 6,
      statement: `Zoé enfile des perles sur un fil en répétant toujours le même motif : $3$ perles rouges, puis $4$ perles bleues. Voici le début de son fil (les perles sont numérotées) :

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 340 80" width="340" height="80" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="5" y1="35" x2="335" y2="35" stroke="currentColor" stroke-width="1.2"/><circle cx="20" cy="35" r="9" fill="#dc2626"/><text x="20" y="65" text-anchor="middle" font-size="11" fill="currentColor">1</text><circle cx="43" cy="35" r="9" fill="#dc2626"/><text x="43" y="65" text-anchor="middle" font-size="11" fill="currentColor">2</text><circle cx="66" cy="35" r="9" fill="#dc2626"/><text x="66" y="65" text-anchor="middle" font-size="11" fill="currentColor">3</text><circle cx="89" cy="35" r="9" fill="#2563eb"/><text x="89" y="65" text-anchor="middle" font-size="11" fill="currentColor">4</text><circle cx="112" cy="35" r="9" fill="#2563eb"/><text x="112" y="65" text-anchor="middle" font-size="11" fill="currentColor">5</text><circle cx="135" cy="35" r="9" fill="#2563eb"/><text x="135" y="65" text-anchor="middle" font-size="11" fill="currentColor">6</text><circle cx="158" cy="35" r="9" fill="#2563eb"/><text x="158" y="65" text-anchor="middle" font-size="11" fill="currentColor">7</text><circle cx="181" cy="35" r="9" fill="#dc2626"/><text x="181" y="65" text-anchor="middle" font-size="11" fill="currentColor">8</text><circle cx="204" cy="35" r="9" fill="#dc2626"/><text x="204" y="65" text-anchor="middle" font-size="11" fill="currentColor">9</text><circle cx="227" cy="35" r="9" fill="#dc2626"/><text x="227" y="65" text-anchor="middle" font-size="11" fill="currentColor">10</text><circle cx="250" cy="35" r="9" fill="#2563eb"/><text x="250" y="65" text-anchor="middle" font-size="11" fill="currentColor">11</text><circle cx="273" cy="35" r="9" fill="#2563eb"/><text x="273" y="65" text-anchor="middle" font-size="11" fill="currentColor">12</text><circle cx="296" cy="35" r="9" fill="#2563eb"/><text x="296" y="65" text-anchor="middle" font-size="11" fill="currentColor">13</text><circle cx="319" cy="35" r="9" fill="#2563eb"/><text x="319" y="65" text-anchor="middle" font-size="11" fill="currentColor">14</text></svg></div>

1. Combien de perles compte un motif ? De quelle couleur est la $10^{e}$ perle ? la $20^{e}$ ?
2. Pour trouver la couleur de la $150^{e}$ perle :
   a) effectuer la division euclidienne de $150$ par $7$ ;
   b) combien de motifs complets y a-t-il avant la $150^{e}$ perle ? Quelle est la position de la $150^{e}$ perle dans son motif ?
   c) en déduire sa couleur.
3. Zoé a enfilé $150$ perles. Combien de perles rouges et combien de perles bleues a-t-elle utilisées ?
4. Combien de perles Zoé doit-elle enfiler pour avoir utilisé exactement $100$ perles bleues, la dernière perle enfilée étant bleue ?
5. Pour fermer son collier sans couper un motif, le nombre total de perles doit être un multiple de $7$. Zoé a-t-elle raison de vouloir un collier de $150$ perles ? Sinon, proposer le nombre de perles le plus proche de $150$ qui convienne.`,
      solution: `**1.** Un motif compte $3 + 4 = 7$ perles. Les perles $1$ à $3$ de chaque motif sont rouges et les perles $4$ à $7$ sont bleues.
- $10 = 7 \\times 1 + 3$ : la $10^{e}$ perle est la $3^{e}$ du $2^{e}$ motif, elle est **rouge**.
- $20 = 7 \\times 2 + 6$ : la $20^{e}$ perle est la $6^{e}$ du $3^{e}$ motif, elle est **bleue**.

**2.** a) $150 = 7 \\times 21 + 3$, avec $3 < 7$.
b) Il y a $21$ motifs complets ($147$ perles), et la $150^{e}$ perle est la $3^{e}$ du motif suivant.
c) La $3^{e}$ perle d'un motif est rouge : la $150^{e}$ perle est **rouge**.

**3.** $21$ motifs complets contiennent $21 \\times 3 = 63$ rouges et $21 \\times 4 = 84$ bleues. Les $3$ perles suivantes sont rouges.
Total : **$66$ rouges** et **$84$ bleues** (vérification : $66 + 84 = 150$).

**4.** Chaque motif contient $4$ bleues et $100 = 4 \\times 25$ : il faut $25$ motifs complets, et la $100^{e}$ bleue est la dernière perle du $25^{e}$ motif. Il faut donc $25 \\times 7 =$ **$175$ perles**.

**5.** $150 = 7 \\times 21 + 3$ : le reste n'est pas nul, $150$ n'est pas un multiple de $7$, le collier de $150$ perles couperait un motif.
Les multiples de $7$ les plus proches sont $7 \\times 21 = 147$ et $7 \\times 22 = 154$. Le plus proche de $150$ est **$147$** (écart $3$, contre $4$ pour $154$).`
    }
  ]
});

Object.assign(window.MATHS_DS_BANK, {
  "6N6": [
    {
      id: "6N6-ds-01",
      title: "Quotients et fractions égales",
      difficulty: 1,
      points: 4,
      statement: `1. Compléter : $7 \\times \\ldots = 3$. Écrire le nombre manquant sous la forme d'une fraction.
2. Donner l'écriture décimale de : $\\frac{12}{4}$ ; $\\frac{3}{4}$ ; $\\frac{7}{2}$.
3. Compléter les égalités : $\\frac{2}{5} = \\frac{\\ldots}{15} = \\frac{8}{\\ldots}$.
4. Simplifier le plus possible : $\\frac{18}{24}$ ; $\\frac{35}{50}$.`,
      solution: `**1.** Le nombre qui, multiplié par 7, donne 3 est le quotient de 3 par 7 : c'est $\\frac{3}{7}$. On a bien $7 \\times \\frac{3}{7} = 3$.

**2.** $\\frac{12}{4} = 12 \\div 4 = 3$ ; $\\quad \\frac{3}{4} = 3 \\div 4 = 0{,}75$ ; $\\quad \\frac{7}{2} = 7 \\div 2 = 3{,}5$.

**3.** On ne change pas une fraction en multipliant son numérateur et son dénominateur par un même nombre non nul :
$\\frac{2}{5} = \\frac{2 \\times 3}{5 \\times 3} = \\frac{6}{15}$ et $\\frac{2}{5} = \\frac{2 \\times 4}{5 \\times 4} = \\frac{8}{20}$.

**4.** $\\frac{18}{24} = \\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}$ ; $\\quad \\frac{35}{50} = \\frac{35 \\div 5}{50 \\div 5} = \\frac{7}{10}$.`
    },
    {
      id: "6N6-ds-02",
      title: "Fractions sur une demi-droite graduée",
      difficulty: 1,
      points: 4,
      statement: `Voici une demi-droite graduée.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 300 90" width="300" height="90" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="10" y1="50" x2="285" y2="50" stroke="currentColor" stroke-width="2"/><line x1="30" y1="40" x2="30" y2="60" stroke="currentColor" stroke-width="2"/><text x="30" y="78" text-anchor="middle" font-size="15" fill="currentColor">0</text><line x1="60" y1="45" x2="60" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="90" y1="45" x2="90" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="120" y1="45" x2="120" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="150" y1="40" x2="150" y2="60" stroke="currentColor" stroke-width="2"/><text x="150" y="78" text-anchor="middle" font-size="15" fill="currentColor">1</text><line x1="180" y1="45" x2="180" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="210" y1="45" x2="210" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="240" y1="45" x2="240" y2="55" stroke="currentColor" stroke-width="1.2"/><line x1="270" y1="40" x2="270" y2="60" stroke="currentColor" stroke-width="2"/><text x="270" y="78" text-anchor="middle" font-size="15" fill="currentColor">2</text><circle cx="120" cy="50" r="4" fill="#2563eb"/><text x="120" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">A</text><circle cx="180" cy="50" r="4" fill="#2563eb"/><text x="180" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">B</text><circle cx="240" cy="50" r="4" fill="#2563eb"/><text x="240" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">C</text></svg></div>

1. En combien de parts égales l'unité est-elle partagée ? Quelle fraction de l'unité représente une graduation ?
2. Donner l'abscisse des points $A$, $B$ et $C$ sous la forme d'une fraction.
3. Écrire l'abscisse de $B$ et celle de $C$ sous la forme d'un nombre mixte (entier + fraction inférieure à 1).
4. Recopier la demi-droite et placer le point $D$ d'abscisse $\\frac{1}{2}$.`,
      solution: `**1.** Entre 0 et 1, il y a 4 intervalles égaux : l'unité est partagée en **4 parts égales** et une graduation représente $\\frac{1}{4}$.

**2.** $A$ est à 3 graduations de 0 : $A\\left(\\frac{3}{4}\\right)$. $B$ est à 5 graduations : $B\\left(\\frac{5}{4}\\right)$. $C$ est à 7 graduations : $C\\left(\\frac{7}{4}\\right)$.

**3.** $\\frac{5}{4} = \\frac{4}{4} + \\frac{1}{4} = 1 + \\frac{1}{4}$ et $\\frac{7}{4} = 1 + \\frac{3}{4}$.

**4.** $\\frac{1}{2} = \\frac{2}{4}$ : on place $D$ sur la 2e graduation après 0 (au milieu entre 0 et 1).`
    },
    {
      id: "6N6-ds-03",
      title: "Comparer et encadrer des fractions",
      difficulty: 2,
      points: 5,
      statement: `1. Comparer, en justifiant :
   a) $\\frac{7}{9}$ et $\\frac{5}{9}$
   b) $\\frac{11}{8}$ et $1$
   c) $\\frac{3}{4}$ et $\\frac{5}{8}$
   d) $\\frac{2}{3}$ et $\\frac{7}{12}$
2. Encadrer $\\frac{17}{5}$ entre deux nombres entiers consécutifs, puis l'écrire sous la forme d'un nombre mixte.`,
      solution: `**1.** a) Même dénominateur : on compare les numérateurs. $7 > 5$, donc $\\frac{7}{9} > \\frac{5}{9}$.
b) $1 = \\frac{8}{8}$ et $11 > 8$, donc $\\frac{11}{8} > 1$ (le numérateur est plus grand que le dénominateur).
c) $\\frac{3}{4} = \\frac{6}{8}$ et $6 > 5$, donc $\\frac{3}{4} > \\frac{5}{8}$.
d) $\\frac{2}{3} = \\frac{8}{12}$ et $8 > 7$, donc $\\frac{2}{3} > \\frac{7}{12}$.

**2.** $17 = 5 \\times 3 + 2$, donc $\\frac{17}{5} = \\frac{15}{5} + \\frac{2}{5} = 3 + \\frac{2}{5}$.
Comme $\\frac{15}{5} = 3$ et $\\frac{20}{5} = 4$ : $3 < \\frac{17}{5} < 4$.`
    },
    {
      id: "6N6-ds-04",
      title: "Qui a mangé le plus de pizza ?",
      difficulty: 2,
      points: 4,
      statement: `Quatre amis ont mangé des parts de pizzas identiques :
- Tom a mangé $\\frac{3}{8}$ d'une pizza ;
- Lina a mangé $\\frac{1}{2}$ d'une pizza ;
- Sacha a mangé $\\frac{5}{16}$ d'une pizza ;
- Jade a mangé $\\frac{3}{4}$ d'une pizza.

1. Écrire chacune de ces fractions avec le dénominateur $16$.
2. Ranger les quatre amis du plus petit au plus gros mangeur.
3. Qui a mangé le double de ce qu'a mangé Tom ? Justifier.`,
      solution: `**1.** $\\frac{3}{8} = \\frac{3 \\times 2}{8 \\times 2} = \\frac{6}{16}$ ; $\\quad \\frac{1}{2} = \\frac{8}{16}$ ; $\\quad \\frac{5}{16}$ ; $\\quad \\frac{3}{4} = \\frac{3 \\times 4}{4 \\times 4} = \\frac{12}{16}$.

**2.** Avec le même dénominateur, on compare les numérateurs : $5 < 6 < 8 < 12$.
$$\\frac{5}{16} < \\frac{3}{8} < \\frac{1}{2} < \\frac{3}{4}$$
Ordre : Sacha, Tom, Lina, Jade.

**3.** Tom a mangé $\\frac{6}{16}$ ; le double est $\\frac{12}{16} = \\frac{3}{4}$. C'est **Jade** qui a mangé le double de Tom.`
    },
    {
      id: "6N6-ds-05",
      title: "Partager des tartes",
      difficulty: 3,
      points: 5,
      statement: `1. On partage équitablement $4$ tartes identiques entre $6$ amis.
   a) Quelle fraction de tarte chaque ami reçoit-il ? Simplifier cette fraction.
   b) Expliquer, par un schéma ou une phrase, comment faire le partage.
   c) Ce nombre est-il un nombre décimal ? Donner une valeur approchée au centième.
2. On partage maintenant $9$ tartes entre $4$ amis.
   a) Quelle fraction de tarte chacun reçoit-il ?
   b) Écrire cette fraction sous la forme d'un nombre mixte, puis d'un nombre décimal.`,
      solution: `**1.** a) Chaque ami reçoit $4 \\div 6 = \\frac{4}{6}$ de tarte, et $\\frac{4}{6} = \\frac{2}{3}$.
b) On coupe chaque tarte en 3 parts égales : on obtient $4 \\times 3 = 12$ parts, soit 2 parts (2 tiers) par ami.
c) $2 \\div 3 = 0{,}666\\ldots$ : la division ne s'arrête jamais, **ce n'est pas un nombre décimal**. Valeur approchée au centième : $0{,}67$.

**2.** a) Chacun reçoit $\\frac{9}{4}$ de tarte.
b) $9 = 4 \\times 2 + 1$, donc $\\frac{9}{4} = 2 + \\frac{1}{4}$ : chacun reçoit 2 tartes entières et un quart de tarte. En écriture décimale : $\\frac{9}{4} = 2{,}25$.`
    },
    {
      id: "6N6-ds-06",
      title: "Vrai ou faux sur les fractions",
      difficulty: 3,
      points: 5,
      statement: `Pour chaque affirmation, répondre par « vrai » ou « faux » et **justifier**.

1. « $\\frac{5}{3}$ est plus grand que $1$. »
2. « $\\frac{3}{7} = \\frac{6}{14}$. »
3. « Plus le dénominateur est grand, plus la fraction est grande. »
4. « $\\frac{12}{5}$ est compris entre $2$ et $3$. »
5. « $\\frac{7}{10}$ et $0{,}7$ désignent le même nombre. »`,
      solution: `**1.** Vrai. $\\frac{5}{3} = \\frac{3}{3} + \\frac{2}{3} = 1 + \\frac{2}{3}$, donc $\\frac{5}{3} > 1$ (le numérateur est plus grand que le dénominateur).

**2.** Vrai. $\\frac{3}{7} = \\frac{3 \\times 2}{7 \\times 2} = \\frac{6}{14}$.

**3.** Faux. Contre-exemple : $\\frac{1}{2} > \\frac{1}{3}$ (une moitié de pizza est plus grosse qu'un tiers) alors que $3 > 2$. Avec le même numérateur, c'est même l'inverse.

**4.** Vrai. $2 = \\frac{10}{5}$ et $3 = \\frac{15}{5}$ ; comme $10 < 12 < 15$, on a $2 < \\frac{12}{5} < 3$.

**5.** Vrai. $\\frac{7}{10}$ se lit « sept dixièmes » et $0{,}7$ aussi : $\\frac{7}{10} = 7 \\div 10 = 0{,}7$.`
    },
    {
      id: "6N6-ds-07",
      title: "Le cross du collège",
      difficulty: 4,
      points: 6,
      statement: `Pour s'entraîner au cross, quatre amis courent sur une boucle de $1$ km. Chacun s'arrête quand il est fatigué :
- Alice a parcouru $\\frac{7}{10}$ de la boucle ;
- Bastien a parcouru $\\frac{3}{5}$ de la boucle ;
- Clément a parcouru $\\frac{3}{4}$ de la boucle ;
- Daniel a parcouru $\\frac{13}{20}$ de la boucle.

1. Écrire toutes ces fractions avec le dénominateur $20$.
2. Ranger les quatre amis du plus petit au plus grand parcours.
3. Tracer une demi-droite graduée de $0$ à $1$ en prenant $10$ cm pour une unité, partagée en $20$ parts égales, et placer les points $A$, $B$, $C$, $D$ correspondant aux quatre amis.
4. Quelle distance, en mètres, chacun a-t-il parcourue ?
5. Quelle fraction de la boucle manque-t-il à Clément pour terminer la boucle ?`,
      solution: `**1.** $\\frac{7}{10} = \\frac{14}{20}$ ; $\\quad \\frac{3}{5} = \\frac{12}{20}$ ; $\\quad \\frac{3}{4} = \\frac{15}{20}$ ; $\\quad \\frac{13}{20}$.

**2.** $12 < 13 < 14 < 15$, donc $\\frac{3}{5} < \\frac{13}{20} < \\frac{7}{10} < \\frac{3}{4}$ : Bastien, Daniel, Alice, Clément.

**3.** Une graduation mesure $10 \\div 20 = 0{,}5$ cm. On place $B$ à 12 graduations de 0 (6 cm), $D$ à 13 graduations ($6{,}5$ cm), $A$ à 14 graduations (7 cm) et $C$ à 15 graduations ($7{,}5$ cm).

**4.** $1$ km $= 1\\,000$ m et $\\frac{1}{20}$ de km $= 1\\,000 \\div 20 = 50$ m.
Bastien : $12 \\times 50 = 600$ m ; Daniel : $13 \\times 50 = 650$ m ; Alice : $14 \\times 50 = 700$ m ; Clément : $15 \\times 50 = 750$ m.

**5.** La boucle entière correspond à $\\frac{20}{20}$ ; Clément a parcouru $\\frac{15}{20}$ : il lui manque $\\frac{5}{20} = \\frac{1}{4}$ de la boucle (soit 250 m).`
    },
    {
      id: "6N6-ds-08",
      title: "Chercher des fractions intermédiaires",
      difficulty: 4,
      points: 5,
      statement: `Dans le jeu de la « fraction cachée », il faut trouver des fractions comprises entre deux nombres donnés.

1. Écrire toutes les fractions de dénominateur $6$ strictement comprises entre $1$ et $2$.
2. a) Écrire $\\frac{1}{2}$ et $\\frac{2}{3}$ avec le dénominateur $12$.
   b) En déduire une fraction comprise entre $\\frac{1}{2}$ et $\\frac{2}{3}$.
3. Trouver une fraction comprise entre $\\frac{2}{3}$ et $\\frac{3}{4}$. Expliquer la méthode.`,
      solution: `**1.** $1 = \\frac{6}{6}$ et $2 = \\frac{12}{6}$. Les fractions de dénominateur 6 strictement comprises entre 1 et 2 ont un numérateur compris entre 6 et 12 (exclus) :
$$\\frac{7}{6} \\quad \\frac{8}{6} \\quad \\frac{9}{6} \\quad \\frac{10}{6} \\quad \\frac{11}{6}$$

**2.** a) $\\frac{1}{2} = \\frac{6}{12}$ et $\\frac{2}{3} = \\frac{8}{12}$.
b) $\\frac{6}{12} < \\frac{7}{12} < \\frac{8}{12}$ : la fraction $\\frac{7}{12}$ convient.

**3.** Avec le dénominateur 12 : $\\frac{2}{3} = \\frac{8}{12}$ et $\\frac{3}{4} = \\frac{9}{12}$ ; il n'y a pas de numérateur entier entre 8 et 9. On double les dénominateurs : $\\frac{2}{3} = \\frac{16}{24}$ et $\\frac{3}{4} = \\frac{18}{24}$.
Comme $16 < 17 < 18$, la fraction **$\\frac{17}{24}$** est comprise entre $\\frac{2}{3}$ et $\\frac{3}{4}$.`
    },
    {
      id: "6N6-ds-09",
      title: "La tablette de chocolat",
      difficulty: 1,
      points: 4,
      statement: `Une tablette de chocolat est formée de $24$ carreaux identiques ($4$ rangées de $6$ carreaux). Léna mange $6$ carreaux, son frère Sacha en mange $8$.

1. Quelle fraction de la tablette Léna a-t-elle mangée ? Simplifier cette fraction le plus possible.
2. Quelle fraction de la tablette Sacha a-t-il mangée ? Simplifier.
3. Qui a mangé la plus grande part de la tablette ? Justifier.
4. Une rangée de la tablette représente quelle fraction de la tablette ? Combien de rangées Léna a-t-elle mangées ?
5. Écrire en lettres la fraction $\\frac{3}{4}$, puis donner son écriture décimale.`,
      solution: `**1.** Léna a mangé $6$ carreaux sur $24$ : $\\frac{6}{24}$. En divisant le numérateur et le dénominateur par $6$ : $\\frac{6}{24} = \\frac{1}{4}$.

**2.** Sacha a mangé $\\frac{8}{24}$. En divisant par $8$ : $\\frac{8}{24} = \\frac{1}{3}$.

**3.** On compare $\\frac{6}{24}$ et $\\frac{8}{24}$ : même dénominateur et $8 > 6$, donc **Sacha** a mangé la plus grande part.

**4.** Une rangée contient $6$ carreaux sur $24$ : elle représente $\\frac{6}{24} = \\frac{1}{4}$ de la tablette. Léna a mangé $6$ carreaux, donc **une rangée**.

**5.** $\\frac{3}{4}$ se lit « trois quarts ». $3 \\div 4 = 0{,}75$, donc $\\frac{3}{4} = 0{,}75$.`
    },
    {
      id: "6N6-ds-10",
      title: "Le nombre qui manque",
      difficulty: 2,
      points: 4,
      statement: `On rappelle que $\\frac{a}{b}$ est le nombre qui, multiplié par $b$, donne $a$.

1. Compléter chaque égalité avec un nombre entier, un nombre décimal ou une fraction :
   a) $7 \\times \\ldots = 21$
   b) $4 \\times \\ldots = 3$
   c) $7 \\times \\ldots = 5$
   d) $\\ldots \\times 9 = 2$
2. Pour chacun des nombres trouvés en b) et c), dire s'il peut s'écrire sous la forme d'un nombre décimal. Si oui, donner cette écriture.
3. Écrire $\\frac{45}{9}$ et $\\frac{30}{8}$ sous une forme plus simple.
4. Le nombre $\\frac{13}{6}$ est-il plus grand ou plus petit que $2$ ? Justifier.`,
      solution: `**1.** a) $7 \\times 3 = 21$ (le quotient $\\frac{21}{7}$ est égal à $3$).
b) $4 \\times \\frac{3}{4} = 3$.
c) $7 \\times \\frac{5}{7} = 5$.
d) $\\frac{2}{9} \\times 9 = 2$.

**2.** $\\frac{3}{4} = 3 \\div 4 = 0{,}75$ : c'est un nombre décimal.
$\\frac{5}{7} = 5 \\div 7 = 0{,}714\\,285\\,7\\ldots$ : la division ne s'arrête pas, ce **n'est pas** un nombre décimal (on peut seulement en donner une valeur approchée, par exemple $0{,}71$).

**3.** $\\frac{45}{9} = 5$ car $9 \\times 5 = 45$.
$\\frac{30}{8} = \\frac{15}{4}$ (on divise numérateur et dénominateur par $2$), et $\\frac{15}{4} = 3{,}75$.

**4.** $2 = \\frac{12}{6}$ et $13 > 12$, donc $\\frac{13}{6} > 2$ (on a $\\frac{13}{6} = 2 + \\frac{1}{6}$).`
    },
    {
      id: "6N6-ds-11",
      title: "Des fractions d'heure",
      difficulty: 3,
      points: 5,
      statement: `Quatre élèves indiquent la durée de leur trajet pour venir au collège :
$$\\text{Anis} : \\frac{3}{4}\\text{ h} \\qquad \\text{Bérénice} : \\frac{2}{3}\\text{ h} \\qquad \\text{Côme} : \\frac{7}{12}\\text{ h} \\qquad \\text{Dina} : \\frac{5}{6}\\text{ h}$$

1. Écrire ces quatre fractions avec le dénominateur $12$.
2. Ranger les élèves du trajet le plus court au trajet le plus long.
3. Une heure dure $60$ minutes, donc $\\frac{1}{12}$ h dure $5$ minutes. En déduire la durée de chaque trajet en minutes, et vérifier le classement de la question 2.
4. Le trajet d'Élio dure $\\frac{17}{12}$ h. Ce trajet dure-t-il plus d'une heure ? Encadrer $\\frac{17}{12}$ entre deux entiers consécutifs, puis donner la durée en heures et minutes.`,
      solution: `**1.** $12 = 4 \\times 3 = 3 \\times 4 = 6 \\times 2$ :
$\\frac{3}{4} = \\frac{9}{12}$ ; $\\quad \\frac{2}{3} = \\frac{8}{12}$ ; $\\quad \\frac{7}{12}$ ; $\\quad \\frac{5}{6} = \\frac{10}{12}$.

**2.** Les fractions ont le même dénominateur, on compare les numérateurs : $7 < 8 < 9 < 10$.
Du plus court au plus long : **Côme, Bérénice, Anis, Dina**.

**3.** $\\frac{1}{12}$ h $= 60 \\div 12 = 5$ min.
Côme : $7 \\times 5 = 35$ min ; Bérénice : $8 \\times 5 = 40$ min ; Anis : $9 \\times 5 = 45$ min ; Dina : $10 \\times 5 = 50$ min. On retrouve le même classement.

**4.** $1 = \\frac{12}{12}$ et $17 > 12$ : le trajet dure plus d'une heure.
$\\frac{12}{12} < \\frac{17}{12} < \\frac{24}{12}$, donc $1 < \\frac{17}{12} < 2$.
$\\frac{17}{12} = 1 + \\frac{5}{12}$ : le trajet dure $1$ h et $5 \\times 5 = 25$ min, soit **$1$ h $25$ min**.`
    },
    {
      id: "6N6-ds-12",
      title: "Des fractions égales sous conditions",
      difficulty: 4,
      points: 5,
      statement: `On cherche des fractions égales à $\\frac{3}{4}$.

1. Écrire cinq fractions égales à $\\frac{3}{4}$. Expliquer comment on les obtient.
2. Trouver la fraction égale à $\\frac{3}{4}$ dont la somme du numérateur et du dénominateur vaut $35$.
3. Trouver la fraction égale à $\\frac{3}{4}$ dont le dénominateur dépasse le numérateur de $6$.
4. Trouver une fraction égale à $\\frac{3}{4}$ dont le numérateur est compris entre $40$ et $50$ et dont le dénominateur est un multiple de $10$.
5. a) Recopier et compléter le tableau.

| Fraction égale à $\\frac{3}{4}$ | $\\frac{3}{4}$ | $\\frac{6}{8}$ | $\\frac{9}{12}$ | $\\frac{12}{16}$ | $\\frac{15}{20}$ | $\\frac{18}{24}$ | $\\frac{21}{28}$ | $\\frac{24}{32}$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Numérateur $+$ dénominateur | $7$ | $14$ | | | | | | |

   b) De combien la somme augmente-t-elle d'une colonne à la suivante ?
   c) Peut-on trouver, dans ce tableau prolongé, une fraction dont la somme du numérateur et du dénominateur vaut $50$ ? Justifier.`,
      solution: `**1.** On multiplie le numérateur et le dénominateur par un même nombre entier : $\\frac{6}{8}$ ; $\\frac{9}{12}$ ; $\\frac{12}{16}$ ; $\\frac{15}{20}$ ; $\\frac{30}{40}$ (multiplication par $2$, $3$, $4$, $5$, $10$).

**2.** Pour $\\frac{3}{4}$, la somme vaut $3 + 4 = 7$. Quand on multiplie numérateur et dénominateur par un même nombre, la somme est multipliée par ce nombre. Or $35 = 7 \\times 5$ : on multiplie par $5$ et on obtient $\\frac{15}{20}$ (et $15 + 20 = 35$).

**3.** Pour $\\frac{3}{4}$, l'écart entre dénominateur et numérateur vaut $1$ ; en multipliant par $6$, l'écart devient $6$ : $\\frac{18}{24}$ (et $24 - 18 = 6$).

**4.** Les numérateurs possibles sont des multiples de $3$ : entre $40$ et $50$, ce sont $42$, $45$ et $48$, ce qui donne $\\frac{42}{56}$, $\\frac{45}{60}$ et $\\frac{48}{64}$. Seul $60$ est un multiple de $10$ : la fraction cherchée est **$\\frac{45}{60}$**.

**5.** a) Sommes : $7$ ; $14$ ; $21$ ; $28$ ; $35$ ; $42$ ; $49$ ; $56$.
b) La somme augmente de $7$ à chaque colonne (on ajoute $3$ au numérateur et $4$ au dénominateur).
c) Les sommes sont $7$, $14$, $21$, …, c'est-à-dire les multiples de $7$. On passe de $49$ à $56$ sans obtenir $50$ : **il n'existe pas** de telle fraction ($50$ n'est pas un multiple de $7$).`
    },
    {
      id: "6N6-ds-13",
      title: "Le drapeau colorié",
      difficulty: 1,
      points: 4,
      statement: `Un drapeau rectangulaire est partagé en $8$ cases identiques. Certaines cases sont coloriées en bleu.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:280px;"><svg class="geo-svg-figure" viewBox="0 0 260 140" width="260" height="140" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="30" y="20" width="50" height="50" fill="rgba(59,130,246,0.45)"/><rect x="80" y="20" width="50" height="50" fill="rgba(59,130,246,0.45)"/><rect x="180" y="70" width="50" height="50" fill="rgba(59,130,246,0.45)"/><rect x="30" y="20" width="200" height="100" fill="none" stroke="currentColor" stroke-width="2"/><line x1="80" y1="20" x2="80" y2="120" stroke="currentColor" stroke-width="1.5"/><line x1="130" y1="20" x2="130" y2="120" stroke="currentColor" stroke-width="1.5"/><line x1="180" y1="20" x2="180" y2="120" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="70" x2="230" y2="70" stroke="currentColor" stroke-width="1.5"/></svg></div>

1. Quelle fraction du drapeau est coloriée en bleu ?
2. Quelle fraction du drapeau n'est pas coloriée ?
3. Écrire en lettres la fraction trouvée à la question 1.
4. La partie bleue représente-t-elle plus ou moins de la moitié du drapeau ? Justifier.
5. Combien de cases faudrait-il colorier en plus pour que la partie bleue représente exactement $\\frac{3}{4}$ du drapeau ?`,
      solution: `**1.** Le drapeau est partagé en $8$ cases identiques et $3$ cases sont bleues : la partie bleue représente $\\frac{3}{8}$ du drapeau.

**2.** $8 - 3 = 5$ cases ne sont pas coloriées : cela représente $\\frac{5}{8}$ du drapeau.

**3.** $\\frac{3}{8}$ se lit « trois huitièmes ».

**4.** La moitié du drapeau, c'est $4$ cases sur $8$, soit $\\frac{4}{8}$. Comme $3 < 4$, on a $\\frac{3}{8} < \\frac{4}{8}$ : la partie bleue représente **moins** de la moitié du drapeau.

**5.** $\\frac{3}{4} = \\frac{3 \\times 2}{4 \\times 2} = \\frac{6}{8}$ : il faut $6$ cases bleues. Il faut donc colorier $6 - 3 = 3$ cases de plus.`
    },
    {
      id: "6N6-ds-14",
      title: "Des fractions aux nombres décimaux",
      difficulty: 2,
      points: 5,
      statement: `Sans calculatrice.

1. Donner l'écriture décimale de chacune des fractions suivantes, en expliquant la méthode :
$$\\frac{13}{10} \\qquad \\frac{7}{4} \\qquad \\frac{9}{2} \\qquad \\frac{3}{5}$$
2. Ranger ces quatre fractions dans l'ordre croissant.
3. a) Écrire $0{,}35$ sous la forme d'une fraction de dénominateur $100$.
   b) Trouver une fraction de dénominateur $20$ égale à $0{,}35$.
4. Lequel de ces nombres est égal à $1{,}25$ : $\\frac{5}{4}$ ou $\\frac{12}{5}$ ? Justifier.`,
      solution: `**1.** On utilise le fait que $\\frac{a}{b}$ est le quotient de $a$ par $b$, ou on cherche une fraction égale de dénominateur $10$ ou $100$.
- $\\frac{13}{10}$ : $13$ dixièmes, donc $\\frac{13}{10} = 1{,}3$.
- $\\frac{7}{4} = \\frac{7 \\times 25}{4 \\times 25} = \\frac{175}{100} = 1{,}75$ (ou $7 \\div 4 = 1{,}75$).
- $\\frac{9}{2} = 9 \\div 2 = 4{,}5$.
- $\\frac{3}{5} = \\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10} = 0{,}6$.

**2.** On compare les écritures décimales : $0{,}6 < 1{,}3 < 1{,}75 < 4{,}5$, donc
$$\\frac{3}{5} < \\frac{13}{10} < \\frac{7}{4} < \\frac{9}{2}.$$

**3.** a) $0{,}35$, c'est $35$ centièmes : $0{,}35 = \\frac{35}{100}$.
b) $100 = 20 \\times 5$ et $35 = 7 \\times 5$, donc $\\frac{35}{100} = \\frac{7}{20}$. Ainsi $0{,}35 = \\frac{7}{20}$.

**4.** $\\frac{5}{4} = 5 \\div 4 = 1{,}25$ : c'est $\\frac{5}{4}$ qui est égal à $1{,}25$.
(En revanche $\\frac{12}{5} = 12 \\div 5 = 2{,}4$.)`
    },
    {
      id: "6N6-ds-15",
      title: "Trois rubans à comparer",
      difficulty: 3,
      points: 5,
      statement: `Pour un bricolage, Zoé dispose de trois rubans :
- un ruban rouge de $\\frac{7}{4}$ m ;
- un ruban vert de $\\frac{5}{2}$ m ;
- un ruban jaune de $\\frac{19}{8}$ m.

1. Pour chaque ruban, donner les deux nombres entiers consécutifs entre lesquels se trouve sa longueur. Justifier.
2. Écrire les trois longueurs avec le même dénominateur $8$.
3. Ranger les trois rubans du plus court au plus long.
4. Zoé veut un ruban de $3$ m exactement. Elle dispose de petits morceaux de $\\frac{1}{8}$ m. Combien de petits morceaux doit-elle ajouter au ruban jaune pour obtenir $3$ m ?`,
      solution: `**1.**
- $\\frac{7}{4}$ : $\\frac{4}{4} = 1$ et $\\frac{8}{4} = 2$, et $4 < 7 < 8$, donc $1 < \\frac{7}{4} < 2$.
- $\\frac{5}{2}$ : $\\frac{4}{2} = 2$ et $\\frac{6}{2} = 3$, donc $2 < \\frac{5}{2} < 3$.
- $\\frac{19}{8}$ : $\\frac{16}{8} = 2$ et $\\frac{24}{8} = 3$, et $16 < 19 < 24$, donc $2 < \\frac{19}{8} < 3$.

**2.** $\\frac{7}{4} = \\frac{7 \\times 2}{4 \\times 2} = \\frac{14}{8}$ ; $\\quad \\frac{5}{2} = \\frac{5 \\times 4}{2 \\times 4} = \\frac{20}{8}$ ; $\\quad \\frac{19}{8}$ reste $\\frac{19}{8}$.

**3.** Avec le même dénominateur, on compare les numérateurs : $14 < 19 < 20$, donc $\\frac{7}{4} < \\frac{19}{8} < \\frac{5}{2}$.
Du plus court au plus long : **rouge, jaune, vert**.

**4.** $3 = \\frac{24}{8}$. Le ruban jaune mesure $\\frac{19}{8}$ m : il manque $24 - 19 = 5$ huitièmes de mètre.
Zoé doit ajouter **$5$ petits morceaux** de $\\frac{1}{8}$ m.`
    },
    {
      id: "6N6-ds-16",
      title: "Retrouver l'unité sur une demi-droite",
      difficulty: 4,
      points: 6,
      statement: `Sur une demi-droite graduée d'origine $O$, on a effacé le point d'abscisse $1$. On sait seulement que le point $A$ d'abscisse $\\frac{2}{3}$ est placé à $4$ cm de l'origine $O$.

1. À quelle distance de $O$ se trouve le point d'abscisse $\\frac{1}{3}$ ? Justifier.
2. En déduire la longueur, en cm, de l'unité.
3. Tracer la demi-droite et placer les points $O$, $A$, puis $B\\left(\\frac{5}{3}\\right)$, $C(2)$ et $D\\left(\\frac{7}{6}\\right)$. Indiquer pour chaque point sa distance à $O$.
4. Un point $E$ est placé à $9$ cm de $O$.
   a) Donner son abscisse sous la forme d'une fraction de dénominateur $6$.
   b) Donner une autre écriture fractionnaire de cette abscisse, puis son écriture décimale.`,
      solution: `**1.** $\\frac{2}{3}$, c'est $2$ fois $\\frac{1}{3}$. Comme $A$ est à $4$ cm de $O$, le point d'abscisse $\\frac{1}{3}$ est à $4 \\div 2 = 2$ cm de $O$.

**2.** L'unité, c'est $\\frac{3}{3}$, soit $3$ fois $\\frac{1}{3}$ : elle mesure $3 \\times 2 = 6$ cm.

**3.** On place les points à partir de $O$ :
- $A\\left(\\frac{2}{3}\\right)$ : $4$ cm ;
- $B\\left(\\frac{5}{3}\\right)$ : $5 \\times 2 = 10$ cm ;
- $C(2)$ : $2 \\times 6 = 12$ cm ;
- $D\\left(\\frac{7}{6}\\right)$ : un sixième de l'unité mesure $6 \\div 6 = 1$ cm, donc $D$ est à $7 \\times 1 = 7$ cm.

**4.** a) Un sixième d'unité mesure $1$ cm, donc $9$ cm correspondent à $9$ sixièmes : l'abscisse de $E$ est $\\frac{9}{6}$.
b) $\\frac{9}{6} = \\frac{3 \\times 3}{2 \\times 3} = \\frac{3}{2}$, et $\\frac{3}{2} = 3 \\div 2 = 1{,}5$.
(Vérification : $1{,}5 \\times 6 = 9$ cm.)`
    }
  ],
  "6N7": [
    {
      id: "6N7-ds-01",
      title: "Additionner, soustraire et multiplier des fractions",
      difficulty: 1,
      points: 4,
      statement: `Calculer et donner le résultat sous la forme la plus simple possible.

1. $A = \\frac{3}{7} + \\frac{2}{7}$ $\\qquad B = \\frac{9}{11} - \\frac{4}{11}$
2. $C = \\frac{1}{4} + \\frac{5}{8}$ $\\qquad D = \\frac{5}{6} - \\frac{1}{3}$
3. $E = 4 \\times \\frac{2}{9}$ $\\qquad F = 3 \\times \\frac{5}{12}$`,
      solution: `**1.** Même dénominateur : on additionne (ou on soustrait) les numérateurs et on garde le dénominateur.
$A = \\frac{3 + 2}{7} = \\frac{5}{7}$ ; $\\quad B = \\frac{9 - 4}{11} = \\frac{5}{11}$.

**2.** On écrit d'abord les fractions avec le même dénominateur.
$C = \\frac{1 \\times 2}{4 \\times 2} + \\frac{5}{8} = \\frac{2}{8} + \\frac{5}{8} = \\frac{7}{8}$.
$D = \\frac{5}{6} - \\frac{1 \\times 2}{3 \\times 2} = \\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$.

**3.** On multiplie seulement le numérateur par l'entier.
$E = \\frac{4 \\times 2}{9} = \\frac{8}{9}$ ; $\\quad F = \\frac{3 \\times 5}{12} = \\frac{15}{12} = \\frac{5}{4}$.`
    },
    {
      id: "6N7-ds-02",
      title: "Prendre une fraction d'une quantité",
      difficulty: 1,
      points: 4,
      statement: `Calculer, en détaillant :

1. $\\frac{2}{3}$ de $24$ billes ;
2. $\\frac{3}{5}$ de $40$ € ;
3. $\\frac{3}{4}$ d'une heure (réponse en minutes) ;
4. $\\frac{7}{10}$ de $200$ g.`,
      solution: `Prendre $\\frac{a}{b}$ d'une quantité, c'est la diviser par $b$ puis multiplier le résultat par $a$.

**1.** $24 \\div 3 = 8$ et $8 \\times 2 = 16$ : $\\frac{2}{3}$ de 24 billes, c'est **16 billes**.

**2.** $40 \\div 5 = 8$ et $8 \\times 3 = 24$ : **24 €**.

**3.** Une heure = 60 min ; $60 \\div 4 = 15$ et $15 \\times 3 = 45$ : **45 minutes**.

**4.** $200 \\div 10 = 20$ et $20 \\times 7 = 140$ : **140 g**.`
    },
    {
      id: "6N7-ds-03",
      title: "Le partage de la pizza",
      difficulty: 2,
      points: 4,
      statement: `Léa et Max partagent une pizza. Léa en mange $\\frac{1}{4}$ et Max en mange $\\frac{3}{8}$.

1. Qui a mangé le plus ? Justifier.
2. Quelle fraction de la pizza ont-ils mangée à eux deux ?
3. Quelle fraction de la pizza reste-t-il ?
4. La pizza était coupée en $8$ parts égales. Combien de parts reste-t-il ?`,
      solution: `**1.** $\\frac{1}{4} = \\frac{2}{8}$ et $\\frac{2}{8} < \\frac{3}{8}$ : **Max** a mangé le plus.

**2.** $\\frac{1}{4} + \\frac{3}{8} = \\frac{2}{8} + \\frac{3}{8} = \\frac{5}{8}$. Ils ont mangé $\\frac{5}{8}$ de la pizza.

**3.** La pizza entière correspond à $\\frac{8}{8}$ : il reste $\\frac{8}{8} - \\frac{5}{8} = \\frac{3}{8}$ de la pizza.

**4.** Il reste $\\frac{3}{8}$ de la pizza, c'est-à-dire **3 parts** sur 8.`
    },
    {
      id: "6N7-ds-04",
      title: "Les activités d'une classe",
      difficulty: 2,
      points: 5,
      statement: `Dans une classe de $28$ élèves :
- $\\frac{3}{7}$ des élèves font du sport dans un club ;
- $\\frac{1}{4}$ des élèves font de la musique ;
- les autres n'ont pas d'activité extra-scolaire (aucun élève ne fait à la fois du sport et de la musique).

1. Combien d'élèves font du sport dans un club ?
2. Combien d'élèves font de la musique ?
3. Combien d'élèves n'ont pas d'activité ? Quelle fraction de la classe cela représente-t-il ?`,
      solution: `**1.** $\\frac{3}{7}$ de 28 : $28 \\div 7 = 4$ et $4 \\times 3 = 12$. **12 élèves** font du sport.

**2.** $\\frac{1}{4}$ de 28 : $28 \\div 4 = 7$. **7 élèves** font de la musique.

**3.** $28 - 12 - 7 = 9$. **9 élèves** n'ont pas d'activité, ce qui représente $\\frac{9}{28}$ de la classe.`
    },
    {
      id: "6N7-ds-05",
      title: "Le réservoir d'eau",
      difficulty: 3,
      points: 5,
      statement: `Un réservoir d'eau de pluie a une contenance de $60$ litres. Au début de la semaine, il est rempli aux $\\frac{3}{4}$.

1. Combien de litres d'eau contient-il au début de la semaine ?
2. Pendant la semaine, Julien utilise pour arroser une quantité d'eau égale à $\\frac{2}{5}$ de la contenance du réservoir. Combien de litres utilise-t-il ?
3. Combien de litres reste-t-il dans le réservoir à la fin de la semaine ?
4. Quelle fraction de la contenance du réservoir cela représente-t-il ? Simplifier la fraction.`,
      solution: `**1.** $\\frac{3}{4}$ de 60 L : $60 \\div 4 = 15$ et $15 \\times 3 = 45$. Le réservoir contient **45 L**.

**2.** $\\frac{2}{5}$ de 60 L : $60 \\div 5 = 12$ et $12 \\times 2 = 24$. Julien utilise **24 L**.

**3.** $45 - 24 = 21$. Il reste **21 L** dans le réservoir.

**4.** $\\frac{21}{60} = \\frac{21 \\div 3}{60 \\div 3} = \\frac{7}{20}$. Il reste $\\frac{7}{20}$ de la contenance du réservoir.`
    },
    {
      id: "6N7-ds-06",
      title: "Une journée de collégien",
      difficulty: 3,
      points: 5,
      statement: `Une journée dure $24$ heures. Lors d'une journée de cours, Malik :
- dort pendant $\\frac{3}{8}$ de la journée ;
- est au collège pendant $\\frac{1}{4}$ de la journée ;
- passe $\\frac{1}{12}$ de la journée à manger.

1. Calculer, en heures, le temps que Malik consacre à chacune de ces activités.
2. Calculer $\\frac{3}{8} + \\frac{1}{4}$. Que représente ce nombre ?
3. Combien d'heures reste-t-il pour ses autres activités ? Quelle fraction de la journée cela représente-t-il ?`,
      solution: `**1.** Sommeil : $24 \\div 8 = 3$ et $3 \\times 3 = 9$ h.
Collège : $24 \\div 4 = 6$ h.
Repas : $24 \\div 12 = 2$ h.

**2.** $\\frac{3}{8} + \\frac{1}{4} = \\frac{3}{8} + \\frac{2}{8} = \\frac{5}{8}$. C'est la fraction de la journée que Malik passe à dormir ou au collège. (Vérification : $\\frac{5}{8}$ de 24 h $= 15$ h $= 9 + 6$.)

**3.** $9 + 6 + 2 = 17$ h, donc il reste $24 - 17 = 7$ h pour les autres activités, soit $\\frac{7}{24}$ de la journée.`
    },
    {
      id: "6N7-ds-07",
      title: "L'aménagement d'un terrain",
      difficulty: 4,
      points: 6,
      statement: `Une commune aménage un terrain de $1\\,200$ m². Elle consacre :
- $\\frac{1}{3}$ du terrain à des jardins partagés ;
- $\\frac{1}{6}$ du terrain à un verger ;
- $\\frac{1}{4}$ du terrain à une aire de jeux ;
- le reste à un parking à vélos et à des allées.

1. Calculer $\\frac{1}{3} + \\frac{1}{6}$. Que représente ce résultat ?
2. En déduire la fraction du terrain occupée par les jardins, le verger et l'aire de jeux.
3. Quelle fraction du terrain reste-t-il pour le parking et les allées ?
4. Calculer l'aire de chacune des quatre zones, en m². Vérifier que leur somme vaut bien $1\\,200$ m².`,
      solution: `**1.** $\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$. Les jardins et le verger occupent **la moitié** du terrain.

**2.** $\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$ du terrain.

**3.** $\\frac{4}{4} - \\frac{3}{4} = \\frac{1}{4}$ du terrain pour le parking et les allées.

**4.** Jardins : $1\\,200 \\div 3 = 400$ m². Verger : $1\\,200 \\div 6 = 200$ m². Aire de jeux : $1\\,200 \\div 4 = 300$ m². Parking et allées : $1\\,200 \\div 4 = 300$ m².
Vérification : $400 + 200 + 300 + 300 = 1\\,200$ m².`
    },
    {
      id: "6N7-ds-08",
      title: "La collection de cartes",
      difficulty: 4,
      points: 5,
      statement: `Hugo possède $96$ cartes à collectionner. Il en donne $\\frac{1}{4}$ à sa sœur et $\\frac{3}{8}$ à son meilleur ami.

1. Quelle fraction de sa collection Hugo a-t-il donnée en tout ?
2. Quelle fraction de sa collection lui reste-t-il ? Combien de cartes cela représente-t-il ?
3. Vérifier ce résultat en calculant le nombre de cartes données à chacun.
4. Hugo achète ensuite $12$ nouvelles cartes. Quelle fraction de sa nouvelle collection les cartes achetées représentent-elles ? Simplifier.`,
      solution: `**1.** $\\frac{1}{4} + \\frac{3}{8} = \\frac{2}{8} + \\frac{3}{8} = \\frac{5}{8}$. Hugo a donné $\\frac{5}{8}$ de sa collection.

**2.** Il lui reste $\\frac{8}{8} - \\frac{5}{8} = \\frac{3}{8}$ de sa collection, soit $96 \\div 8 \\times 3 = 12 \\times 3 = 36$ cartes.

**3.** Sœur : $\\frac{1}{4}$ de 96 $= 96 \\div 4 = 24$ cartes. Ami : $\\frac{3}{8}$ de 96 $= 12 \\times 3 = 36$ cartes. Il reste $96 - 24 - 36 = 36$ cartes : on retrouve le même résultat.

**4.** La nouvelle collection compte $36 + 12 = 48$ cartes. Les cartes achetées représentent $\\frac{12}{48} = \\frac{1}{4}$ de la nouvelle collection.`
    },
    {
      id: "6N7-ds-09",
      title: "La recette du cake",
      difficulty: 1,
      points: 4,
      statement: `Pour préparer un cake, Yasmine verse dans un saladier $\\frac{1}{2}$ L de lait et $\\frac{1}{4}$ L de crème. Elle dispose d'un paquet de $\\frac{3}{4}$ kg de farine et en utilise $\\frac{3}{8}$ kg.

1. Calculer la quantité totale de liquide (lait et crème) versée dans le saladier, en litre.
2. Quelle masse de farine reste-t-il dans le paquet ?
3. Yasmine prépare $3$ cakes identiques. Quelle quantité de lait utilise-t-elle en tout ? Donner le résultat sous forme d'une fraction, puis d'un nombre décimal.
4. Convertir en grammes la masse de farine utilisée pour un cake.`,
      solution: `**1.** $\\frac{1}{2} = \\frac{2}{4}$, donc $\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$. Elle a versé $\\frac{3}{4}$ L de liquide.

**2.** $\\frac{3}{4} = \\frac{6}{8}$, donc $\\frac{3}{4} - \\frac{3}{8} = \\frac{6}{8} - \\frac{3}{8} = \\frac{3}{8}$. Il reste $\\frac{3}{8}$ kg de farine.

**3.** $3 \\times \\frac{1}{2} = \\frac{3}{2}$ L, et $\\frac{3}{2} = 3 \\div 2 = 1{,}5$ L.

**4.** $1$ kg $= 1\\,000$ g, donc $\\frac{1}{8}$ kg $= 1\\,000 \\div 8 = 125$ g et $\\frac{3}{8}$ kg $= 3 \\times 125 = 375$ g.`
    },
    {
      id: "6N7-ds-10",
      title: "Remplir des bouteilles",
      difficulty: 2,
      points: 5,
      statement: `Pour un pique-nique, Arthur remplit $6$ gourdes de $\\frac{3}{4}$ L chacune avec l'eau d'un bidon de $5$ L.

1. Écrire la quantité totale d'eau versée dans les gourdes sous la forme d'un produit, puis calculer ce produit. Simplifier la fraction obtenue.
2. Le bidon de $5$ L suffit-il ? Combien d'eau reste-t-il dans le bidon ?
3. Avec l'eau restante, Arthur remplit des gobelets de $\\frac{1}{8}$ L. Combien de gobelets peut-il remplir ?
4. Sa sœur affirme : « $6 \\times \\frac{3}{4}$, c'est $\\frac{18}{24}$. » Expliquer son erreur.`,
      solution: `**1.** Quantité totale : $6 \\times \\frac{3}{4} = \\frac{6 \\times 3}{4} = \\frac{18}{4}$. En divisant par $2$ : $\\frac{18}{4} = \\frac{9}{2}$, soit $4{,}5$ L.

**2.** $4{,}5 < 5$ : le bidon suffit. Il reste $5 - 4{,}5 = 0{,}5$ L, c'est-à-dire $\\frac{1}{2}$ L.
(En fractions : $5 = \\frac{10}{2}$ et $\\frac{10}{2} - \\frac{9}{2} = \\frac{1}{2}$.)

**3.** $\\frac{1}{2} = \\frac{4}{8}$ : il reste $4$ huitièmes de litre, Arthur peut remplir **$4$ gobelets**.

**4.** Pour multiplier un entier par une fraction, on multiplie seulement le numérateur : $6 \\times \\frac{3}{4} = \\frac{18}{4}$. Sa sœur a aussi multiplié le dénominateur par $6$ ; or $\\frac{18}{24} = \\frac{3}{4}$, ce qui correspond à une seule gourde, pas à six.`
    },
    {
      id: "6N7-ds-11",
      title: "Une pyramide de fractions",
      difficulty: 3,
      points: 5,
      statement: `Dans une pyramide de nombres, chaque case est égale à la **somme** des deux cases situées juste en dessous d'elle.

**Pyramide 1** — ligne du bas : $\\frac{1}{8}$ ; $\\frac{3}{8}$ ; $\\frac{1}{4}$.

**Pyramide 2** — ligne du bas : $\\frac{1}{4}$ ; $\\square$ ; $\\frac{1}{2}$. La case de gauche de la ligne du milieu vaut $\\frac{7}{8}$.

1. Pyramide 1 : calculer les deux cases de la ligne du milieu, puis le sommet. Simplifier les résultats quand c'est possible.
2. Le sommet de la pyramide 1 est-il plus grand que $1$ ? Justifier.
3. Pyramide 2 :
   a) Expliquer pourquoi la case manquante $\\square$ vérifie $\\frac{1}{4} + \\square = \\frac{7}{8}$, puis calculer sa valeur.
   b) Compléter la pyramide 2 : case de droite de la ligne du milieu, puis sommet.`,
      solution: `**1.** Ligne du milieu : $\\frac{1}{8} + \\frac{3}{8} = \\frac{4}{8} = \\frac{1}{2}$ et $\\frac{3}{8} + \\frac{1}{4} = \\frac{3}{8} + \\frac{2}{8} = \\frac{5}{8}$.
Sommet : $\\frac{1}{2} + \\frac{5}{8} = \\frac{4}{8} + \\frac{5}{8} = \\frac{9}{8}$.

**2.** $1 = \\frac{8}{8}$ et $9 > 8$ : oui, $\\frac{9}{8} > 1$ (on a $\\frac{9}{8} = 1 + \\frac{1}{8}$).

**3.** a) La case $\\frac{7}{8}$ est située au-dessus des cases $\\frac{1}{4}$ et $\\square$ : elle est égale à leur somme, donc $\\frac{1}{4} + \\square = \\frac{7}{8}$.
On cherche ce qu'il faut ajouter à $\\frac{1}{4} = \\frac{2}{8}$ pour obtenir $\\frac{7}{8}$ : $\\square = \\frac{7}{8} - \\frac{2}{8} = \\frac{5}{8}$.
b) Case de droite de la ligne du milieu : $\\frac{5}{8} + \\frac{1}{2} = \\frac{5}{8} + \\frac{4}{8} = \\frac{9}{8}$.
Sommet : $\\frac{7}{8} + \\frac{9}{8} = \\frac{16}{8} = 2$.`
    },
    {
      id: "6N7-ds-12",
      title: "Remonter au tout",
      difficulty: 4,
      points: 6,
      statement: `Dans chaque situation, on connaît une partie et la fraction qu'elle représente ; on cherche le tout. On s'aide d'un schéma en barres : la barre entière représente le tout, partagé en parts égales.

1. Mathis a dépensé $\\frac{3}{8}$ de son argent de poche, soit $15$ €.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 340 100" width="340" height="100" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="10.0" y="30" width="40.0" height="30" fill="rgba(59,130,246,0.35)" stroke="currentColor" stroke-width="1.5"/><rect x="50.0" y="30" width="40.0" height="30" fill="rgba(59,130,246,0.35)" stroke="currentColor" stroke-width="1.5"/><rect x="90.0" y="30" width="40.0" height="30" fill="rgba(59,130,246,0.35)" stroke="currentColor" stroke-width="1.5"/><rect x="130.0" y="30" width="40.0" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="170.0" y="30" width="40.0" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="210.0" y="30" width="40.0" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="250.0" y="30" width="40.0" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="290.0" y="30" width="40.0" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10.0,26 L10.0,20 L130.0,20 L130.0,26" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="70.0" y="16" text-anchor="middle" font-size="14" font-weight="bold" fill="#2563eb">15 €</text><path d="M10,64 L10,70 L330,70 L330,64" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="170" y="88" text-anchor="middle" font-size="14" fill="currentColor">argent de départ : ?</text></svg></div>

   a) Combien vaut une part du schéma, c'est-à-dire $\\frac{1}{8}$ de son argent ?
   b) Combien avait-il au départ ? Combien lui reste-t-il ?
2. Dans un bus, $\\frac{2}{7}$ des places sont libres, ce qui fait $16$ places libres.
   a) Dessiner un schéma en barres de $7$ parts et colorier les places libres.
   b) Combien de places représente une part ? Combien le bus compte-t-il de places en tout ? Combien sont occupées ?
3. Inès a lu $\\frac{5}{12}$ d'un roman. Il lui reste $210$ pages à lire. Sur le schéma, les $5$ parts blanches représentent les pages lues.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 340 100" width="340" height="100" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="10.0" y="30" width="26.7" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="36.7" y="30" width="26.7" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="63.3" y="30" width="26.7" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="90.0" y="30" width="26.7" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="116.7" y="30" width="26.7" height="30" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="143.3" y="30" width="26.7" height="30" fill="rgba(59,130,246,0.35)" stroke="currentColor" stroke-width="1.5"/><rect x="170.0" y="30" width="26.7" height="30" fill="rgba(59,130,246,0.35)" stroke="currentColor" stroke-width="1.5"/><rect x="196.7" y="30" width="26.7" height="30" fill="rgba(59,130,246,0.35)" stroke="currentColor" stroke-width="1.5"/><rect x="223.3" y="30" width="26.7" height="30" fill="rgba(59,130,246,0.35)" stroke="currentColor" stroke-width="1.5"/><rect x="250.0" y="30" width="26.7" height="30" fill="rgba(59,130,246,0.35)" stroke="currentColor" stroke-width="1.5"/><rect x="276.7" y="30" width="26.7" height="30" fill="rgba(59,130,246,0.35)" stroke="currentColor" stroke-width="1.5"/><rect x="303.3" y="30" width="26.7" height="30" fill="rgba(59,130,246,0.35)" stroke="currentColor" stroke-width="1.5"/><path d="M143.3,26 L143.3,20 L330.0,20 L330.0,26" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="236.7" y="16" text-anchor="middle" font-size="14" font-weight="bold" fill="#2563eb">210 pages restantes</text><path d="M10,64 L10,70 L330,70 L330,64" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="170" y="88" text-anchor="middle" font-size="14" fill="currentColor">roman entier : ?</text></svg></div>

   a) Quelle fraction du roman lui reste-t-il à lire ? Combien de parts du schéma cela représente-t-il ?
   b) Combien de pages représente une part ? Combien de pages compte le roman ?
   c) Vérifier en calculant $\\frac{5}{12}$ du nombre de pages trouvé.`,
      solution: `**1.** a) $\\frac{3}{8}$ correspond à $3$ parts égales qui valent $15$ € en tout : une part, $\\frac{1}{8}$, vaut $15 \\div 3 = 5$ €.
b) Le tout correspond à $8$ parts : $8 \\times 5 = 40$ €. Il lui reste $40 - 15 = 25$ € (soit les $5$ parts non coloriées : $5 \\times 5 = 25$ €).

**2.** a) On dessine une barre partagée en $7$ parts égales et on en colorie $2$, qui représentent les $16$ places libres.
b) Une part représente $16 \\div 2 = 8$ places. Le bus compte $7 \\times 8 = 56$ places, dont $56 - 16 = 40$ occupées.

**3.** a) Il lui reste $\\frac{12}{12} - \\frac{5}{12} = \\frac{7}{12}$ du roman, c'est-à-dire les $7$ parts coloriées.
b) Ces $7$ parts représentent $210$ pages : une part représente $210 \\div 7 = 30$ pages. Le roman compte $12 \\times 30 = 360$ pages.
c) $\\frac{5}{12}$ de $360$ : $360 \\div 12 \\times 5 = 30 \\times 5 = 150$ pages lues. Et $360 - 150 = 210$ pages restantes : le résultat est cohérent.`
    },
    {
      id: "6N7-ds-13",
      title: "La course de relais",
      difficulty: 1,
      points: 4,
      statement: `Trois coureurs se relaient sur une course de $1\\,800$ m :
- Nora court les $\\frac{2}{9}$ de la course ;
- Bilal court les $\\frac{4}{9}$ de la course ;
- Jade court le reste.

1. Quelle fraction de la course Nora et Bilal ont-ils parcourue à eux deux ?
2. Quelle fraction de la course Jade court-elle ?
3. Calculer la distance, en mètres, parcourue par chacun des trois coureurs.
4. Vérifier que la somme des trois distances est bien égale à $1\\,800$ m.`,
      solution: `**1.** Les fractions ont le même dénominateur : $\\frac{2}{9} + \\frac{4}{9} = \\frac{6}{9}$.
Nora et Bilal ont parcouru les $\\frac{6}{9}$ de la course (on peut aussi écrire $\\frac{2}{3}$).

**2.** La course entière correspond à $\\frac{9}{9}$ : Jade court $\\frac{9}{9} - \\frac{6}{9} = \\frac{3}{9}$ de la course (soit $\\frac{1}{3}$).

**3.** $\\frac{1}{9}$ de $1\\,800$ m, c'est $1\\,800 \\div 9 = 200$ m. Donc :
- Nora : $2 \\times 200 = 400$ m ;
- Bilal : $4 \\times 200 = 800$ m ;
- Jade : $3 \\times 200 = 600$ m.

**4.** $400 + 800 + 600 = 1\\,800$ m : le compte est bon.`
    },
    {
      id: "6N7-ds-14",
      title: "Les livres de la bibliothèque",
      difficulty: 2,
      points: 5,
      statement: `La bibliothèque d'un collège compte $600$ livres :
- $\\frac{2}{5}$ des livres sont des romans ;
- $\\frac{3}{10}$ des livres sont des bandes dessinées ;
- les autres livres sont des documentaires.

1. Écrire $\\frac{2}{5}$ sous la forme d'une fraction de dénominateur $10$.
2. Quelle fraction des livres représentent les romans et les bandes dessinées ensemble ?
3. Quelle fraction des livres représentent les documentaires ?
4. Calculer le nombre de romans, de bandes dessinées et de documentaires.
5. Y a-t-il plus de bandes dessinées ou de documentaires ? Justifier de deux façons.`,
      solution: `**1.** $\\frac{2}{5} = \\frac{2 \\times 2}{5 \\times 2} = \\frac{4}{10}$.

**2.** $\\frac{4}{10} + \\frac{3}{10} = \\frac{7}{10}$ : romans et bandes dessinées représentent $\\frac{7}{10}$ des livres.

**3.** $\\frac{10}{10} - \\frac{7}{10} = \\frac{3}{10}$ : les documentaires représentent $\\frac{3}{10}$ des livres.

**4.** $\\frac{1}{10}$ de $600$, c'est $600 \\div 10 = 60$ livres. Donc :
- romans : $\\frac{4}{10}$ de $600$, soit $4 \\times 60 = 240$ livres ;
- bandes dessinées : $3 \\times 60 = 180$ livres ;
- documentaires : $3 \\times 60 = 180$ livres.
(Vérification : $240 + 180 + 180 = 600$.)

**5.** Il y en a autant :
- avec les fractions : les deux catégories représentent $\\frac{3}{10}$ des livres ;
- avec les nombres : $180$ bandes dessinées et $180$ documentaires.`
    },
    {
      id: "6N7-ds-15",
      title: "Les morceaux de ruban",
      difficulty: 3,
      points: 5,
      statement: `Une couturière possède un ruban de $3$ m. Elle y découpe $5$ morceaux qui mesurent chacun $\\frac{3}{8}$ m.

1. Calculer, sous forme de fraction, la longueur totale des $5$ morceaux découpés.
2. Cette longueur est-elle plus grande ou plus petite que $2$ m ? Justifier.
3. Écrire $3$ sous la forme d'une fraction de dénominateur $8$, puis calculer la longueur de ruban qui reste.
4. Combien de morceaux de $\\frac{3}{8}$ m peut-elle encore découper dans ce qui reste ? Reste-t-il alors du ruban ?
5. Donner la longueur d'un morceau en écriture décimale, en mètres, puis en centimètres.`,
      solution: `**1.** $5 \\times \\frac{3}{8} = \\frac{5 \\times 3}{8} = \\frac{15}{8}$ m.

**2.** $2 = \\frac{16}{8}$ et $15 < 16$, donc $\\frac{15}{8} < 2$ : la longueur découpée est plus petite que $2$ m.

**3.** $3 = \\frac{24}{8}$. Il reste $\\frac{24}{8} - \\frac{15}{8} = \\frac{9}{8}$ m de ruban.

**4.** Un morceau mesure $\\frac{3}{8}$ m et il reste $\\frac{9}{8}$ m, soit $9$ huitièmes de mètre. Comme $9 = 3 \\times 3$, elle peut découper exactement $3$ morceaux de plus : $3 \\times \\frac{3}{8} = \\frac{9}{8}$.
Il ne reste alors plus de ruban (elle aura découpé $5 + 3 = 8$ morceaux en tout, et $8 \\times \\frac{3}{8} = \\frac{24}{8} = 3$ m).

**5.** $\\frac{3}{8} = 3 \\div 8 = 0{,}375$ m, soit $0{,}375 \\times 100 = 37{,}5$ cm.`
    },
    {
      id: "6N7-ds-16",
      title: "Le jeu des cartes-fractions",
      difficulty: 4,
      points: 6,
      statement: `Dans un jeu, on dispose de cinq cartes portant les fractions suivantes :
$$\\frac{1}{2} \\qquad \\frac{1}{4} \\qquad \\frac{3}{8} \\qquad \\frac{5}{8} \\qquad \\frac{1}{8}$$
Le but est de choisir des cartes dont la somme est égale à un nombre cible.

1. Écrire chacune des cinq fractions avec le dénominateur $8$.
2. Calculer $\\frac{1}{2} + \\frac{3}{8}$.
3. La cible est $1$.
   a) Trouver deux cartes dont la somme est égale à $1$.
   b) Trouver deux façons différentes de choisir trois cartes dont la somme est égale à $1$.
4. La cible est $2$. Peut-on l'atteindre en utilisant les cinq cartes ? Justifier.
5. Quelle carte faudrait-il ajouter au jeu pour que la somme des six cartes soit égale à $2$ ?`,
      solution: `**1.** $\\frac{1}{2} = \\frac{4}{8}$ ; $\\quad \\frac{1}{4} = \\frac{2}{8}$ ; $\\quad \\frac{3}{8}$, $\\frac{5}{8}$ et $\\frac{1}{8}$ ont déjà le dénominateur $8$.

**2.** $\\frac{1}{2} + \\frac{3}{8} = \\frac{4}{8} + \\frac{3}{8} = \\frac{7}{8}$.

**3.** En huitièmes, il faut obtenir $1 = \\frac{8}{8}$, donc des numérateurs dont la somme vaut $8$ (les numérateurs disponibles sont $4$, $2$, $3$, $5$ et $1$).
a) $3 + 5 = 8$ : $\\frac{3}{8} + \\frac{5}{8} = \\frac{8}{8} = 1$.
b) $4 + 3 + 1 = 8$ : $\\frac{1}{2} + \\frac{3}{8} + \\frac{1}{8} = 1$ ;
$\\quad 2 + 5 + 1 = 8$ : $\\frac{1}{4} + \\frac{5}{8} + \\frac{1}{8} = 1$.

**4.** Somme des cinq cartes : $\\frac{4}{8} + \\frac{2}{8} + \\frac{3}{8} + \\frac{5}{8} + \\frac{1}{8} = \\frac{15}{8}$.
Or $2 = \\frac{16}{8}$ et $\\frac{15}{8} < \\frac{16}{8}$ : même avec toutes les cartes, on n'atteint pas $2$. La cible $2$ est impossible.

**5.** Il manque $\\frac{16}{8} - \\frac{15}{8} = \\frac{1}{8}$ : il faudrait ajouter une deuxième carte $\\frac{1}{8}$.`
    }
  ]
});

Object.assign(window.MATHS_DS_BANK, {
  "6N8": [
    {
      id: "6N8-ds-01",
      title: "Égalités à trou",
      difficulty: 1,
      points: 4,
      statement: `Dans chaque égalité, un nombre a été effacé et remplacé par un carré $\\square$.

1. Trouver le nombre manquant dans chaque égalité, en écrivant le calcul effectué :
   a) $27 + \\square = 63$
   b) $\\square - 18 = 45$
   c) $7 \\times \\square = 56$
   d) $\\square \\div 6 = 9$
2. Même question avec : $4{,}5 + \\square = 10$.
3. Vérifier la réponse de la question 2 en remplaçant le carré par le nombre trouvé.`,
      solution: `Pour retrouver le nombre effacé, on utilise l'opération « inverse ».

**1.**
a) $\\square = 63 - 27 = 36$.
b) $\\square = 45 + 18 = 63$.
c) $\\square = 56 \\div 7 = 8$.
d) $\\square = 9 \\times 6 = 54$.

**2.** $\\square = 10 - 4{,}5 = 5{,}5$.

**3.** $4{,}5 + 5{,}5 = 10$ : l'égalité est vraie, donc le nombre manquant est bien $5{,}5$.`
    },
    {
      id: "6N8-ds-02",
      title: "Un programme de calcul",
      difficulty: 1,
      points: 4,
      statement: `Voici un programme de calcul :
- Choisir un nombre.
- Le multiplier par $3$.
- Ajouter $7$ au résultat.

1. Montrer que si l'on choisit $5$, on obtient $22$.
2. Quel résultat obtient-on si l'on choisit $2{,}5$ ?
3. Inès a obtenu $37$. Quel nombre a-t-elle choisi au départ ? Expliquer la démarche.`,
      solution: `**1.** $5 \\times 3 = 15$ puis $15 + 7 = 22$. On obtient bien $22$.

**2.** $2{,}5 \\times 3 = 7{,}5$ puis $7{,}5 + 7 = 14{,}5$. On obtient $14{,}5$.

**3.** On remonte le programme en faisant les opérations inverses, en partant de la fin :
- avant d'ajouter $7$, Inès avait $37 - 7 = 30$ ;
- avant de multiplier par $3$, elle avait $30 \\div 3 = 10$.

Vérification : $10 \\times 3 + 7 = 30 + 7 = 37$. Inès a choisi le nombre $10$.`
    },
    {
      id: "6N8-ds-03",
      title: "Partage de cartes avec un schéma en barres",
      difficulty: 2,
      points: 5,
      statement: `Léa et Hugo collectionnent des cartes. À eux deux, ils en ont $84$. Hugo a trois fois plus de cartes que Léa.

1. Représenter la situation par un schéma en barres (une barre pour Léa, une barre pour Hugo).
2. Combien de cartes Léa possède-t-elle ? Et Hugo ?
3. Vérifier les résultats.
4. Leur amie Inès possède $12$ cartes de plus que Léa. Combien Inès a-t-elle de cartes ?`,
      solution: `**1.** Léa : une part [■]. Hugo : trois parts identiques à celle de Léa [■ ■ ■]. Au total, il y a $1 + 3 = 4$ parts égales qui représentent $84$ cartes.

**2.** Une part vaut $84 \\div 4 = 21$ cartes.
Léa a donc $21$ cartes et Hugo a $3 \\times 21 = 63$ cartes.

**3.** $21 + 63 = 84$ et $63 = 3 \\times 21$ : les deux conditions sont respectées.

**4.** $21 + 12 = 33$. Inès possède $33$ cartes.`
    },
    {
      id: "6N8-ds-04",
      title: "Des carrés en allumettes",
      difficulty: 2,
      points: 5,
      statement: `Avec des allumettes, Tom construit une rangée de carrés collés les uns aux autres :
- étape 1 : $1$ carré, il utilise $4$ allumettes ;
- étape 2 : $2$ carrés, il utilise $7$ allumettes ;
- étape 3 : $3$ carrés, il utilise $10$ allumettes.

1. Recopier et compléter le tableau :

| Nombre de carrés | 1 | 2 | 3 | 4 | 5 |
|:---|:---:|:---:|:---:|:---:|:---:|
| Nombre d'allumettes | 4 | 7 | 10 | | |

2. Expliquer comment on passe d'une étape à la suivante.
3. Combien d'allumettes faut-il pour une rangée de $10$ carrés ?
4. Tom possède exactement $100$ allumettes. Combien de carrés peut-il construire en les utilisant toutes ?`,
      solution: `**1.**

| Nombre de carrés | 1 | 2 | 3 | 4 | 5 |
|:---|:---:|:---:|:---:|:---:|:---:|
| Nombre d'allumettes | 4 | 7 | 10 | 13 | 16 |

**2.** Pour ajouter un carré, on réutilise le côté du carré précédent : il suffit d'ajouter $3$ allumettes à chaque étape.

**3.** On part de $1$ allumette, puis chaque carré en ajoute $3$ : nombre d'allumettes $= 1 + 3 \\times (\\text{nombre de carrés})$.
Pour $10$ carrés : $1 + 3 \\times 10 = 1 + 30 = 31$. Il faut $31$ allumettes.

**4.** On enlève la première allumette : $100 - 1 = 99$, puis $99 \\div 3 = 33$.
Vérification : $1 + 3 \\times 33 = 100$. Tom peut construire $33$ carrés.`
    },
    {
      id: "6N8-ds-05",
      title: "Deux programmes de calcul",
      difficulty: 3,
      points: 5,
      statement: `On considère deux programmes de calcul.

**Programme A** : choisir un nombre ; lui ajouter $5$ ; multiplier le résultat par $2$.
**Programme B** : choisir un nombre ; le multiplier par $2$ ; ajouter $10$ au résultat.

1. Appliquer les deux programmes au nombre $3$.
2. Appliquer les deux programmes au nombre $7{,}5$.
3. Que remarque-t-on ? Expliquer, à l'aide d'un schéma en barres ou d'une phrase, pourquoi c'est toujours le cas.
4. Avec le programme A, Malik obtient $33$. Quel nombre a-t-il choisi ?`,
      solution: `**1.** Programme A : $3 + 5 = 8$ puis $8 \\times 2 = 16$.
Programme B : $3 \\times 2 = 6$ puis $6 + 10 = 16$.

**2.** Programme A : $7{,}5 + 5 = 12{,}5$ puis $12{,}5 \\times 2 = 25$.
Programme B : $7{,}5 \\times 2 = 15$ puis $15 + 10 = 25$.

**3.** Les deux programmes donnent le même résultat.
Explication : dans le programme A, on double la somme « nombre $+ 5$ », c'est-à-dire qu'on prend deux fois le nombre et deux fois $5$. On obtient donc le double du nombre plus $10$, ce qui est exactement le programme B. Avec un schéma : deux barres « nombre | 5 » mises bout à bout contiennent deux fois le nombre et deux fois $5$, soit $10$.

**4.** On remonte le programme A : $33 \\div 2 = 16{,}5$ puis $16{,}5 - 5 = 11{,}5$.
Vérification : $(11{,}5 + 5) \\times 2 = 16{,}5 \\times 2 = 33$. Malik a choisi $11{,}5$.`
    },
    {
      id: "6N8-ds-06",
      title: "Partager une cagnotte",
      difficulty: 3,
      points: 5,
      statement: `Clara, Bastien et Ahmed se partagent une cagnotte de $150$ €.
- Bastien reçoit $20$ € de plus que Clara.
- Ahmed reçoit le double de la somme de Clara.

1. Représenter la situation par un schéma en barres.
2. Combien de « parts de Clara » y a-t-il en tout ? Quelle somme reste-t-il à partager en parts égales une fois les $20$ € de Bastien mis de côté ?
3. Calculer la somme reçue par chacun.
4. Vérifier que le total fait bien $150$ €.`,
      solution: `**1.** Clara : [■] ; Bastien : [■] [20 €] ; Ahmed : [■ ■], où ■ représente la part de Clara.

**2.** Il y a $1 + 1 + 2 = 4$ parts de Clara. Une fois les $20$ € de Bastien mis de côté, il reste $150 - 20 = 130$ € à partager en $4$ parts égales.

**3.** Une part vaut $130 \\div 4 = 32{,}5$.
- Clara reçoit $32{,}50$ €.
- Bastien reçoit $32{,}50 + 20 = 52{,}50$ €.
- Ahmed reçoit $2 \\times 32{,}50 = 65$ €.

**4.** $32{,}50 + 52{,}50 + 65 = 85 + 65 = 150$. Le total fait bien $150$ €.`
    },
    {
      id: "6N8-ds-07",
      title: "Choisir une formule à la piscine",
      difficulty: 4,
      points: 6,
      statement: `La piscine municipale propose deux formules :
- **Formule 1** : $4$ € l'entrée ;
- **Formule 2** : une carte annuelle à $15$ €, puis $2{,}50$ € l'entrée.

1. Calculer le prix payé avec chaque formule pour $6$ entrées, puis pour $12$ entrées.
2. Recopier et compléter le tableau suivant :

| Nombre d'entrées | 8 | 9 | 10 | 11 |
|:---|:---:|:---:|:---:|:---:|
| Prix formule 1 (€) | | | | |
| Prix formule 2 (€) | | | | |

3. Pour quel nombre d'entrées les deux formules coûtent-elles le même prix ? À partir de combien d'entrées la formule 2 est-elle la plus avantageuse ?
4. Nora dispose de $60$ €. Avec quelle formule peut-elle aller le plus souvent à la piscine ? Justifier.`,
      solution: `**1.** Pour $6$ entrées : formule 1 : $6 \\times 4 = 24$ € ; formule 2 : $15 + 6 \\times 2{,}5 = 15 + 15 = 30$ €.
Pour $12$ entrées : formule 1 : $12 \\times 4 = 48$ € ; formule 2 : $15 + 12 \\times 2{,}5 = 15 + 30 = 45$ €.

**2.**

| Nombre d'entrées | 8 | 9 | 10 | 11 |
|:---|:---:|:---:|:---:|:---:|
| Prix formule 1 (€) | 32 | 36 | 40 | 44 |
| Prix formule 2 (€) | 35 | 37,5 | 40 | 42,5 |

**3.** Pour $10$ entrées, les deux formules coûtent $40$ €. À chaque entrée, la formule 2 coûte $4 - 2{,}5 = 1{,}5$ € de moins que la formule 1 : au-delà de $10$ entrées, elle devient la moins chère. La formule 2 est la plus avantageuse à partir de $11$ entrées.

**4.** Formule 1 : $60 \\div 4 = 15$, soit $15$ entrées.
Formule 2 : après la carte, il reste $60 - 15 = 45$ € et $45 \\div 2{,}5 = 18$, soit $18$ entrées.
Avec la formule 2, Nora peut aller $18$ fois à la piscine : c'est la formule à choisir.`
    },
    {
      id: "6N8-ds-08",
      title: "Tables et chaises pour la fête",
      difficulty: 4,
      points: 6,
      statement: `Pour la fête du collège, on aligne des tables carrées bout à bout. On peut placer une chaise de chaque côté libre d'une table :
- $1$ table : $4$ chaises ;
- $2$ tables alignées : $6$ chaises ;
- $3$ tables alignées : $8$ chaises.

1. Combien de chaises peut-on placer autour de $4$ tables alignées ? De $5$ tables ?
2. Expliquer la règle qui permet de calculer le nombre de chaises à partir du nombre de tables. Combien de chaises pour $15$ tables alignées ?
3. On attend $50$ invités. Combien de tables faut-il aligner, au minimum, pour que chacun soit assis ?
4. Un autre organisateur propose de faire des îlots séparés de $2$ tables alignées ($6$ chaises par îlot). Combien de tables faut-il alors pour asseoir les $50$ invités ? Quelle disposition utilise le moins de tables ?`,
      solution: `**1.** À chaque table ajoutée, on gagne $2$ chaises (une de chaque côté). $4$ tables : $8 + 2 = 10$ chaises ; $5$ tables : $10 + 2 = 12$ chaises.

**2.** Chaque table a une chaise de chaque côté, plus une chaise à chaque bout de la rangée :
nombre de chaises $= 2 \\times (\\text{nombre de tables}) + 2$.
Pour $15$ tables : $2 \\times 15 + 2 = 32$ chaises.

**3.** Il faut $2 \\times (\\text{nombre de tables}) + 2 = 50$, donc $2 \\times (\\text{nombre de tables}) = 48$ et nombre de tables $= 48 \\div 2 = 24$.
Il faut aligner au minimum $24$ tables.

**4.** $50 \\div 6$ : $6 \\times 8 = 48 < 50$ et $6 \\times 9 = 54 \\geqslant 50$. Il faut $9$ îlots, soit $9 \\times 2 = 18$ tables.
Avec les îlots, on utilise $18$ tables au lieu de $24$ : c'est la disposition en îlots qui utilise le moins de tables.`
    },
    {
      id: "6N8-ds-09",
      title: "Des balances en équilibre",
      difficulty: 1,
      points: 4,
      statement: `On utilise une balance à deux plateaux. Quand la balance est en équilibre, les deux plateaux portent la même masse.

**Balance 1** : sur le plateau de gauche, $3$ sacs de sable identiques et une masse de $2$ kg ; sur le plateau de droite, une masse de $11$ kg. La balance est en équilibre.

**Balance 2** : sur le plateau de gauche, $5$ boules identiques ; sur le plateau de droite, $2$ boules identiques aux précédentes et une masse de $4{,}5$ kg. La balance est en équilibre.

1. Traduire l'équilibre de la balance 1 par une égalité à trou, en notant $\\square$ la masse d'un sac (en kg).
2. Trouver la masse d'un sac. Expliquer la démarche.
3. Pour la balance 2, on retire $2$ boules de chaque plateau. La balance reste-t-elle en équilibre ? Que reste-t-il sur chaque plateau ?
4. En déduire la masse d'une boule, puis vérifier.`,
      solution: `**1.** $3 \\times \\square + 2 = 11$.

**2.** On retire la masse de $2$ kg de chaque côté : la balance reste en équilibre, donc $3 \\times \\square = 11 - 2 = 9$. Les $3$ sacs pèsent $9$ kg, donc un sac pèse $\\square = 9 \\div 3 = 3$ kg.
Vérification : $3 \\times 3 + 2 = 11$.

**3.** On enlève la même masse des deux côtés : la balance **reste en équilibre**. Il reste $5 - 2 = 3$ boules à gauche et la masse de $4{,}5$ kg à droite.

**4.** $3$ boules pèsent $4{,}5$ kg, donc une boule pèse $4{,}5 \\div 3 = 1{,}5$ kg.
Vérification : à gauche $5 \\times 1{,}5 = 7{,}5$ kg ; à droite $2 \\times 1{,}5 + 4{,}5 = 3 + 4{,}5 = 7{,}5$ kg. Les deux plateaux portent bien la même masse.`
    },
    {
      id: "6N8-ds-10",
      title: "Pour quel nombre l'égalité est-elle vraie ?",
      difficulty: 2,
      points: 5,
      statement: `On considère l'égalité $\\square \\times 2 + 1 = \\square + 4$, où le même nombre est écrit dans les deux carrés.

1. Remplacer le carré par $0$, puis par $1$. L'égalité est-elle vraie ? Calculer chaque membre.
2. Recopier et compléter le tableau suivant :

| Nombre dans le carré | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| $\\square \\times 2 + 1$ | | | | | | |
| $\\square + 4$ | | | | | | |

3. Pour quel nombre l'égalité est-elle vraie ?
4. Que remarque-t-on sur chaque ligne du tableau quand le nombre augmente de $1$ ? Expliquer pourquoi, au-delà de ce nombre, l'égalité ne peut plus être vraie.
5. L'égalité $\\square + \\square + \\square = 3 \\times \\square$ est-elle vraie pour tous les nombres ? Justifier.`,
      solution: `**1.** Avec $0$ : $0 \\times 2 + 1 = 1$ et $0 + 4 = 4$ ; $1 \\neq 4$, l'égalité est fausse.
Avec $1$ : $1 \\times 2 + 1 = 3$ et $1 + 4 = 5$ ; $3 \\neq 5$, l'égalité est fausse.

**2.**

| Nombre dans le carré | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| $\\square \\times 2 + 1$ | $1$ | $3$ | $5$ | $7$ | $9$ | $11$ |
| $\\square + 4$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |

**3.** Les deux lignes sont égales pour le nombre **$3$** : $3 \\times 2 + 1 = 7$ et $3 + 4 = 7$.

**4.** Quand le nombre augmente de $1$, la première ligne augmente de $2$ et la seconde de $1$. À partir de $3$, où les deux valeurs sont égales, la première ligne augmente plus vite que la seconde : elle reste toujours plus grande, donc l'égalité ne peut plus être vraie.

**5.** Oui : ajouter trois fois le même nombre, c'est multiplier ce nombre par $3$ (par exemple $5 + 5 + 5 = 15 = 3 \\times 5$). L'égalité est vraie quel que soit le nombre choisi.`
    },
    {
      id: "6N8-ds-11",
      title: "Les âges de deux frères",
      difficulty: 3,
      points: 5,
      statement: `Tom et son frère Lou ont, à eux deux, $31$ ans. Tom a $7$ ans de plus que Lou.

1. Représenter la situation par un schéma en barres.
2. Expliquer pourquoi, si l'on retire les $7$ ans d'écart, il reste deux parts égales. En déduire l'âge de Lou, puis celui de Tom.
3. Vérifier les deux conditions de l'énoncé.
4. Leur grand-père a le double de la somme de leurs âges. Quel âge a-t-il ?
5. Dans $3$ ans, quelle sera la somme des âges des deux frères ? Quel sera alors l'écart entre leurs âges ? Justifier sans calculer chaque âge.`,
      solution: `**1.** Lou : [■] ; Tom : [■][7 ans]. Les deux barres ensemble représentent $31$ ans.

**2.** La barre de Tom est formée d'une part identique à celle de Lou et de $7$ ans. Si on enlève ces $7$ ans, il reste deux parts égales : $31 - 7 = 24$ ans pour deux parts, donc une part vaut $24 \\div 2 = 12$ ans.
Lou a **$12$ ans** et Tom a $12 + 7 =$ **$19$ ans**.

**3.** $12 + 19 = 31$ et $19 - 12 = 7$ : les deux conditions sont vérifiées.

**4.** $2 \\times 31 = 62$. Le grand-père a **$62$ ans**.

**5.** Dans $3$ ans, chacun aura vieilli de $3$ ans : la somme augmente de $3 + 3 = 6$ ans et vaudra $31 + 6 = 37$ ans.
L'écart ne change pas : les deux frères vieillissent en même temps, Tom aura toujours **$7$ ans** de plus que Lou (en effet : $22 - 15 = 7$).`
    },
    {
      id: "6N8-ds-12",
      title: "Des escaliers de carrés",
      difficulty: 4,
      points: 6,
      statement: `On construit des escaliers avec des carrés identiques. À chaque étape, on ajoute à droite une colonne qui a un carré de plus que la précédente.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 320 110" width="320" height="110" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="30" y="62" width="18" height="18" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><text x="39" y="102" text-anchor="middle" font-size="14" fill="currentColor">Étape 1</text><rect x="100" y="62" width="18" height="18" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><rect x="118" y="62" width="18" height="18" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><rect x="118" y="44" width="18" height="18" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><text x="118" y="102" text-anchor="middle" font-size="14" fill="currentColor">Étape 2</text><rect x="200" y="62" width="18" height="18" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><rect x="218" y="62" width="18" height="18" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><rect x="218" y="44" width="18" height="18" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><rect x="236" y="62" width="18" height="18" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><rect x="236" y="44" width="18" height="18" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><rect x="236" y="26" width="18" height="18" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><text x="227" y="102" text-anchor="middle" font-size="14" fill="currentColor">Étape 3</text></svg></div>

1. Combien de carrés y a-t-il aux étapes $1$, $2$ et $3$ ? Calculer le nombre de carrés des étapes $4$, $5$ et $6$.
2. Combien de carrés ajoute-t-on pour passer de l'étape $3$ à l'étape $4$ ? de l'étape $4$ à l'étape $5$ ? Ajoute-t-on toujours le même nombre de carrés ?
3. On place deux escaliers identiques de l'étape $4$ l'un contre l'autre, le second étant retourné : on obtient un rectangle de $4$ carrés de large et $5$ carrés de haut.
   a) Combien de carrés contient ce rectangle ?
   b) En déduire le nombre de carrés de l'escalier de l'étape $4$, et vérifier avec la question 1.
4. On fait de même avec deux escaliers de l'étape $20$ : on obtient un rectangle de $20$ carrés de large et $21$ carrés de haut. Combien de carrés contient l'escalier de l'étape $20$ ?
5. Lina a $78$ carrés. En continuant le calcul de la question 1 étape par étape, dire si elle peut construire un escalier complet en les utilisant tous. Si oui, de quelle étape ?`,
      solution: `**1.** Étape 1 : $1$ carré ; étape 2 : $1 + 2 = 3$ carrés ; étape 3 : $3 + 3 = 6$ carrés.
On ajoute une colonne de $4$, puis $5$, puis $6$ carrés : étape 4 : $6 + 4 = 10$ ; étape 5 : $10 + 5 = 15$ ; étape 6 : $15 + 6 = 21$ carrés.

**2.** De l'étape $3$ à l'étape $4$, on ajoute $4$ carrés ; de l'étape $4$ à l'étape $5$, on en ajoute $5$. Non, on n'ajoute pas toujours le même nombre : on ajoute le numéro de la nouvelle étape, qui augmente de $1$ à chaque fois.

**3.** a) Le rectangle contient $4 \\times 5 = 20$ carrés.
b) Il est formé de deux escaliers identiques, donc un escalier en contient $20 \\div 2 = 10$. C'est bien le résultat de la question 1.

**4.** Le rectangle contient $20 \\times 21 = 420$ carrés ; l'escalier de l'étape $20$ en compte $420 \\div 2 = 210$.

**5.** On continue en ajoutant à chaque fois le numéro de l'étape : étape 7 : $21 + 7 = 28$ ; étape 8 : $28 + 8 = 36$ ; étape 9 : $36 + 9 = 45$ ; étape 10 : $45 + 10 = 55$ ; étape 11 : $55 + 11 = 66$ ; étape 12 : $66 + 12 = 78$.
**Oui** : l'escalier de l'**étape $12$** utilise exactement $78$ carrés.
(Vérification avec la méthode du rectangle : $12 \\times 13 = 156$ et $156 \\div 2 = 78$.)`
    },
    {
      id: "6N8-ds-13",
      title: "Devinettes de nombres",
      difficulty: 1,
      points: 4,
      statement: `Pour chaque devinette, trouver le nombre auquel on a pensé. Écrire d'abord une égalité à trou avec un carré $\\square$, puis le calcul qui permet de trouver le nombre, et enfin vérifier.

1. « Je pense à un nombre. Je lui ajoute $15$ et j'obtiens $42$. »
2. « Je pense à un nombre. Je le multiplie par $8$ et j'obtiens $72$. »
3. « Je pense à un nombre. Je lui enlève $3{,}5$ et j'obtiens $6$. »
4. « Je pense à un nombre. Je le divise par $4$ et j'obtiens $2{,}5$. »`,
      solution: `**1.** $\\square + 15 = 42$. Pour trouver le nombre, on fait l'opération inverse : $42 - 15 = 27$.
Vérification : $27 + 15 = 42$. Le nombre est **$27$**.

**2.** $\\square \\times 8 = 72$. On divise : $72 \\div 8 = 9$.
Vérification : $9 \\times 8 = 72$. Le nombre est **$9$**.

**3.** $\\square - 3{,}5 = 6$. On ajoute : $6 + 3{,}5 = 9{,}5$.
Vérification : $9{,}5 - 3{,}5 = 6$. Le nombre est **$9{,}5$**.

**4.** $\\square \\div 4 = 2{,}5$. On multiplie : $2{,}5 \\times 4 = 10$.
Vérification : $10 \\div 4 = 2{,}5$. Le nombre est **$10$**.`
    },
    {
      id: "6N8-ds-14",
      title: "Le bracelet de perles",
      difficulty: 2,
      points: 5,
      statement: `Inès enfile des perles sur un fil en répétant toujours le même motif : $2$ perles rouges, puis $3$ perles bleues, puis de nouveau $2$ rouges, $3$ bleues, etc.

Le début du bracelet est donc : R R B B B R R B B B R R …

1. Combien de perles comporte un motif complet ?
2. De quelle couleur est la $13$e perle ? Justifier.
3. Combien y a-t-il de perles bleues parmi les $20$ premières perles ?
4. De quelle couleur est la $47$e perle ? Expliquer la méthode sans écrire les $47$ perles.
5. Le bracelet terminé compte $50$ perles. Combien de perles bleues faut-il prévoir ?`,
      solution: `**1.** Un motif comporte $2 + 3 = 5$ perles.

**2.** Les $10$ premières perles forment $2$ motifs complets. La $13$e perle est la $3$e perle du motif suivant (car $13 = 10 + 3$) : c'est une perle **bleue** (les perles $1$ et $2$ d'un motif sont rouges, les perles $3$, $4$ et $5$ sont bleues).

**3.** $20 = 4 \\times 5$ : les $20$ premières perles forment $4$ motifs complets, avec $3$ perles bleues chacun, soit $4 \\times 3 = 12$ perles bleues.

**4.** On cherche combien de motifs complets tiennent dans $47$ perles : $47 = 9 \\times 5 + 2$. Après $9$ motifs ($45$ perles), la $47$e perle est la $2$e perle du motif suivant : elle est **rouge**.

**5.** $50 = 10 \\times 5$ : il y a $10$ motifs complets, donc $10 \\times 3 = 30$ perles bleues.`
    },
    {
      id: "6N8-ds-15",
      title: "Remonter un programme de calcul",
      difficulty: 3,
      points: 5,
      statement: `Voici un programme de calcul :
- Choisir un nombre.
- Le multiplier par $4$.
- Soustraire $3$ au résultat.
- Multiplier le tout par $2$.

1. Montrer que si l'on choisit $5$, on obtient $34$.
2. Quel résultat obtient-on si l'on choisit $2{,}5$ ?
3. Léo a obtenu $50$. Quel nombre a-t-il choisi ? Expliquer la méthode en « remontant » le programme étape par étape, puis vérifier.
4. Quel nombre faut-il choisir pour obtenir $0$ ?
5. Compléter l'écriture en une seule ligne de ce programme, où $\\square$ désigne le nombre choisi : $(\\square \\times \\ldots - \\ldots) \\times \\ldots$`,
      solution: `**1.** $5 \\times 4 = 20$ ; $20 - 3 = 17$ ; $17 \\times 2 = 34$. On obtient bien $34$.

**2.** $2{,}5 \\times 4 = 10$ ; $10 - 3 = 7$ ; $7 \\times 2 = 14$. On obtient $14$.

**3.** On part du résultat et on fait les opérations inverses, dans l'ordre inverse :
- la dernière étape est « multiplier par $2$ » : avant, on avait $50 \\div 2 = 25$ ;
- avant « soustraire $3$ », on avait $25 + 3 = 28$ ;
- avant « multiplier par $4$ », on avait $28 \\div 4 = 7$.
Léo a choisi **$7$**. Vérification : $7 \\times 4 = 28$ ; $28 - 3 = 25$ ; $25 \\times 2 = 50$.

**4.** Même méthode : $0 \\div 2 = 0$ ; $0 + 3 = 3$ ; $3 \\div 4 = 0{,}75$. Il faut choisir **$0{,}75$**.
Vérification : $0{,}75 \\times 4 = 3$ ; $3 - 3 = 0$ ; $0 \\times 2 = 0$.

**5.** $(\\square \\times 4 - 3) \\times 2$. Les parenthèses indiquent que la soustraction est effectuée avant la dernière multiplication.`
    },
    {
      id: "6N8-ds-16",
      title: "Une rue de maisons en allumettes",
      difficulty: 4,
      points: 6,
      statement: `Avec des allumettes, Sami construit des maisons collées les unes aux autres. Chaque maison est un carré surmonté d'un toit triangulaire ; deux maisons voisines partagent un mur.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:300px;"><svg class="geo-svg-figure" viewBox="0 0 280 130" width="280" height="130" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><g stroke="#b45309" stroke-width="3" stroke-linecap="round" fill="none"><line x1="20" y1="110" x2="70" y2="110"/><line x1="70" y1="110" x2="120" y2="110"/><line x1="120" y1="110" x2="170" y2="110"/><line x1="20" y1="60" x2="70" y2="60"/><line x1="70" y1="60" x2="120" y2="60"/><line x1="120" y1="60" x2="170" y2="60"/><line x1="20" y1="60" x2="20" y2="110"/><line x1="70" y1="60" x2="70" y2="110"/><line x1="120" y1="60" x2="120" y2="110"/><line x1="170" y1="60" x2="170" y2="110"/><line x1="20" y1="60" x2="45" y2="17"/><line x1="45" y1="17" x2="70" y2="60"/><line x1="70" y1="60" x2="95" y2="17"/><line x1="95" y1="17" x2="120" y2="60"/><line x1="120" y1="60" x2="145" y2="17"/><line x1="145" y1="17" x2="170" y2="60"/></g><text x="225" y="90" text-anchor="middle" font-size="14" fill="currentColor">3 maisons</text></svg></div>

1. Combien faut-il d'allumettes pour $1$ maison ? pour $2$ maisons ? Vérifier sur la figure qu'il en faut $16$ pour $3$ maisons.
2. Recopier et compléter le tableau :

| Nombre de maisons | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Nombre d'allumettes | | | $16$ | | | |

3. De combien augmente le nombre d'allumettes quand on ajoute une maison ? Expliquer pourquoi à l'aide de la figure.
4. Combien faut-il d'allumettes pour construire $10$ maisons ? Expliquer la méthode par une phrase.
5. Sami a une boîte de $75$ allumettes. Combien de maisons peut-il construire au maximum ? Lui reste-t-il des allumettes ?`,
      solution: `**1.** Une maison : $4$ allumettes pour le carré et $2$ pour le toit, soit $6$ allumettes.
Pour $2$ maisons, le mur du milieu est commun : $6 + 5 = 11$ allumettes.
Pour $3$ maisons, on compte sur la figure : $3$ allumettes en bas, $3$ en haut des murs, $4$ murs verticaux et $6$ pour les toits : $3 + 3 + 4 + 6 = 16$ allumettes.

**2.**

| Nombre de maisons | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Nombre d'allumettes | $6$ | $11$ | $16$ | $21$ | $26$ | $31$ |

**3.** Le nombre d'allumettes augmente de $5$ à chaque nouvelle maison : la nouvelle maison réutilise le mur de sa voisine, il faut seulement $1$ allumette en bas, $1$ en haut, $1$ mur et $2$ pour le toit.

**4.** On compte $1$ allumette pour le tout premier mur, puis $5$ allumettes par maison. Pour $10$ maisons : $1 + 10 \\times 5 = 51$ allumettes.
(On peut aussi poursuivre le tableau de $5$ en $5$ : $31$, $36$, $41$, $46$, $51$.)

**5.** On enlève le premier mur : $75 - 1 = 74$ allumettes pour les maisons, à raison de $5$ par maison. $74 = 14 \\times 5 + 4$.
Sami peut construire **$14$ maisons** au maximum, avec $1 + 14 \\times 5 = 71$ allumettes. Il lui reste $75 - 71 = 4$ allumettes, ce qui ne suffit pas pour une $15$e maison.`
    }
  ],
  "6P1": [
    {
      id: "6P1-ds-01",
      title: "Le prix des croissants",
      difficulty: 1,
      points: 4,
      statement: `À la boulangerie, $3$ croissants coûtent $2{,}70$ €. Le prix payé est proportionnel au nombre de croissants achetés.

1. Quel est le prix d'un croissant ?
2. Recopier et compléter le tableau de proportionnalité :

| Nombre de croissants | 3 | 1 | 6 | 9 | 10 |
|:---|:---:|:---:|:---:|:---:|:---:|
| Prix (€) | 2,70 | | | | |

3. Avec $13{,}50$ €, combien de croissants peut-on acheter ?`,
      solution: `**1.** On utilise le retour à l'unité : $2{,}70 \\div 3 = 0{,}90$. Un croissant coûte $0{,}90$ €.

**2.**
- $6$ croissants, c'est $2$ fois plus que $3$ : $2 \\times 2{,}70 = 5{,}40$ €.
- $9 = 3 \\times 3$ : $3 \\times 2{,}70 = 8{,}10$ €.
- $10$ croissants : $10 \\times 0{,}90 = 9$ €.

| Nombre de croissants | 3 | 1 | 6 | 9 | 10 |
|:---|:---:|:---:|:---:|:---:|:---:|
| Prix (€) | 2,70 | 0,90 | 5,40 | 8,10 | 9 |

**3.** $13{,}50 \\div 0{,}90 = 15$. Avec $13{,}50$ €, on peut acheter $15$ croissants.`
    },
    {
      id: "6P1-ds-02",
      title: "Proportionnel ou pas ?",
      difficulty: 1,
      points: 4,
      statement: `On donne deux tableaux.

**Tableau 1** : prix de pommes au marché.

| Masse (kg) | 2 | 4 | 5 |
|:---|:---:|:---:|:---:|
| Prix (€) | 3 | 6 | 7,50 |

**Tableau 2** : taille d'un enfant selon son âge.

| Âge (ans) | 2 | 4 | 6 |
|:---|:---:|:---:|:---:|
| Taille (cm) | 85 | 102 | 115 |

1. Le tableau 1 est-il un tableau de proportionnalité ? Justifier.
2. Le tableau 2 est-il un tableau de proportionnalité ? Justifier.
3. Dans le cas où le tableau est proportionnel, calculer le prix de $7$ kg de pommes.`,
      solution: `**1.** On calcule le prix d'un kilogramme pour chaque colonne : $3 \\div 2 = 1{,}5$ ; $6 \\div 4 = 1{,}5$ ; $7{,}5 \\div 5 = 1{,}5$.
On multiplie toujours par le même nombre $1{,}5$ : le tableau 1 est un tableau de proportionnalité.

**2.** L'âge double de $2$ à $4$ ans, mais la taille ne double pas : $2 \\times 85 = 170$ et non $102$.
Le tableau 2 n'est pas un tableau de proportionnalité (un enfant ne grandit pas proportionnellement à son âge).

**3.** Un kilogramme coûte $1{,}50$ €, donc $7$ kg coûtent $7 \\times 1{,}5 = 10{,}5$, soit $10{,}50$ €.`
    },
    {
      id: "6P1-ds-03",
      title: "Adapter une recette de crêpes",
      difficulty: 2,
      points: 5,
      statement: `Voici une recette de pâte à crêpes **pour 4 personnes** :
- $250$ g de farine ;
- $4$ œufs ;
- $50$ cL de lait ;
- $40$ g de beurre fondu.

Les quantités sont proportionnelles au nombre de personnes.

1. Quelles quantités faut-il pour $8$ personnes ?
2. Quelles quantités faut-il pour $6$ personnes ? Expliquer la méthode.
3. Pour la classe, on prépare des crêpes pour $10$ personnes. Quelle quantité de lait faut-il, en litres ?`,
      solution: `**1.** $8$ personnes, c'est $2$ fois plus que $4$ : on double toutes les quantités.
$500$ g de farine, $8$ œufs, $100$ cL de lait et $80$ g de beurre.

**2.** $6$ personnes, c'est $4$ personnes plus $2$ personnes (la moitié de $4$). On ajoute donc aux quantités pour $4$ personnes leur moitié :
- farine : $250 + 125 = 375$ g ;
- œufs : $4 + 2 = 6$ ;
- lait : $50 + 25 = 75$ cL ;
- beurre : $40 + 20 = 60$ g.

**3.** Pour une personne, il faut $50 \\div 4 = 12{,}5$ cL de lait. Pour $10$ personnes : $10 \\times 12{,}5 = 125$ cL.
Or $100$ cL $= 1$ L, donc $125$ cL $= 1{,}25$ L. Il faut $1{,}25$ L de lait.`
    },
    {
      id: "6P1-ds-04",
      title: "Pourcentages du quotidien",
      difficulty: 2,
      points: 4,
      statement: `1. Dans une classe de $25$ élèves, $40\\,\\%$ sont demi-pensionnaires. Combien d'élèves mangent à la cantine ?
2. Un jeu vidéo coûte $35$ €. Le magasin accorde une réduction de $10\\,\\%$.
   a) Calculer le montant de la réduction.
   b) Calculer le nouveau prix du jeu.
3. Calculer $25\\,\\%$ de $80$ €. Expliquer pourquoi on peut aussi diviser $80$ par $4$.`,
      solution: `**1.** Prendre $40\\,\\%$ de $25$, c'est calculer $\\frac{40}{100} \\times 25 = \\frac{40 \\times 25}{100} = \\frac{1\\,000}{100} = 10$.
$10$ élèves sont demi-pensionnaires.

**2.** a) $10\\,\\%$ de $35$ : $35 \\div 10 = 3{,}5$. La réduction est de $3{,}50$ €.
b) $35 - 3{,}50 = 31{,}50$. Le jeu coûte $31{,}50$ € après réduction.

**3.** $\\frac{25}{100} \\times 80 = \\frac{2\\,000}{100} = 20$, soit $20$ €.
Comme $\\frac{25}{100} = \\frac{1}{4}$, prendre $25\\,\\%$ revient à prendre le quart : $80 \\div 4 = 20$ €.`
    },
    {
      id: "6P1-ds-05",
      title: "Le plan de la maison",
      difficulty: 3,
      points: 5,
      statement: `Le plan d'une maison est dessiné à l'échelle $\\frac{1}{200}$ : cela signifie que $1$ cm sur le plan représente $200$ cm en réalité.

1. Combien de mètres en réalité représente $1$ cm sur le plan ?
2. Sur le plan, la chambre de Zoé est un rectangle de $2{,}5$ cm sur $1{,}8$ cm. Quelles sont ses dimensions réelles ?
3. Le couloir mesure $7$ m de long en réalité. Quelle est sa longueur sur le plan ?
4. Sur le plan, la maison mesure $6{,}5$ cm de long. Quelle est sa longueur réelle ?`,
      solution: `**1.** $200$ cm $= 2$ m. Donc $1$ cm sur le plan représente $2$ m en réalité.

**2.** Les longueurs réelles sont proportionnelles aux longueurs du plan, avec un coefficient de $2$ (en passant des cm du plan aux m réels) :
$2{,}5 \\times 2 = 5$ et $1{,}8 \\times 2 = 3{,}6$.
La chambre mesure $5$ m sur $3{,}6$ m.

**3.** $7 \\div 2 = 3{,}5$. Le couloir mesure $3{,}5$ cm sur le plan.

**4.** $6{,}5 \\times 2 = 13$. La maison mesure $13$ m de long.`
    },
    {
      id: "6P1-ds-06",
      title: "Randonnée sur une carte",
      difficulty: 3,
      points: 5,
      statement: `Une carte de randonnée est à l'échelle $\\frac{1}{25\\,000}$.

1. Que signifie cette échelle ? Montrer que $1$ cm sur la carte représente $250$ m en réalité.
2. Sur la carte, le chemin entre le parking et le lac mesure $8$ cm. Quelle est la distance réelle, en kilomètres ?
3. Le refuge est à $3{,}5$ km du lac. À quelle distance du lac se trouve-t-il sur la carte ?
4. La famille de Yanis marche à allure régulière : elle parcourt $1$ km en $15$ minutes. Combien de temps lui faut-il pour aller du parking au lac ?`,
      solution: `**1.** L'échelle $\\frac{1}{25\\,000}$ signifie que $1$ cm sur la carte représente $25\\,000$ cm en réalité.
$25\\,000$ cm $= 250$ m. Donc $1$ cm représente $250$ m.

**2.** $8 \\times 250 = 2\\,000$ m, soit $2$ km. La distance réelle est de $2$ km.

**3.** $3{,}5$ km $= 3\\,500$ m et $3\\,500 \\div 250 = 14$. Le refuge est à $14$ cm du lac sur la carte.

**4.** La durée est proportionnelle à la distance : $2$ km demandent $2 \\times 15 = 30$ minutes.
Il faut $30$ minutes pour aller du parking au lac.`
    },
    {
      id: "6P1-ds-07",
      title: "Le jus de fruits le moins cher",
      difficulty: 4,
      points: 6,
      statement: `Pour la fête de fin d'année, la classe achète du jus d'orange. Le magasin propose :
- **offre A** : une bouteille de $1{,}5$ L à $2{,}40$ € ;
- **offre B** : un pack de $6$ briques de $25$ cL à $2{,}10$ € le pack ;
- **offre C** : un bidon de $2$ L à $3{,}30$ €.

1. Quelle quantité de jus, en litres, contient un pack de l'offre B ?
2. Calculer le prix d'un litre de jus pour chacune des trois offres. Quelle est l'offre la plus avantageuse ?
3. La classe a besoin de $9$ L de jus. Combien coûtent $9$ L avec l'offre A ? Avec l'offre B ?
4. Quelle économie réalise-t-on en choisissant l'offre la plus avantageuse plutôt que l'offre A ?`,
      solution: `**1.** $6 \\times 25 = 150$ cL, soit $1{,}5$ L. Un pack contient $1{,}5$ L de jus.

**2.** On calcule le prix pour $1$ L (retour à l'unité) :
- offre A : $2{,}40 \\div 1{,}5 = 1{,}60$ € le litre ;
- offre B : $2{,}10 \\div 1{,}5 = 1{,}40$ € le litre ;
- offre C : $3{,}30 \\div 2 = 1{,}65$ € le litre.

L'offre B est la plus avantageuse ($1{,}40$ € le litre).

**3.** $9 \\div 1{,}5 = 6$ : il faut $6$ bouteilles ou $6$ packs.
Offre A : $6 \\times 2{,}40 = 14{,}40$ €. Offre B : $6 \\times 2{,}10 = 12{,}60$ €.

**4.** $14{,}40 - 12{,}60 = 1{,}80$. En choisissant l'offre B, la classe économise $1{,}80$ €.`
    },
    {
      id: "6P1-ds-08",
      title: "Repeindre un mur",
      difficulty: 4,
      points: 6,
      statement: `Mathis veut repeindre un mur rectangulaire de $9$ m de long et $2{,}5$ m de haut. Il faut passer **deux couches** de peinture.
Sur l'étiquette du pot, on lit : « Pot de $2{,}5$ L : couvre $30$ m² (pour une couche) ». La surface couverte est proportionnelle à la quantité de peinture.

1. Calculer l'aire du mur, puis la surface totale à peindre en comptant les deux couches.
2. Quelle quantité de peinture, en litres, faut-il ?
3. Combien de pots Mathis doit-il acheter ?
4. Un pot coûte $24{,}90$ €. Le magasin fait une remise de $20\\,\\%$ dès l'achat de deux pots. Combien Mathis va-t-il payer ?`,
      solution: `**1.** Aire du mur : $9 \\times 2{,}5 = 22{,}5$ m². Avec deux couches : $2 \\times 22{,}5 = 45$ m².

**2.** $2{,}5$ L couvrent $30$ m², donc $1$ L couvre $30 \\div 2{,}5 = 12$ m².
Pour $45$ m² : $45 \\div 12 = 3{,}75$. Il faut $3{,}75$ L de peinture.

**3.** Un pot contient $2{,}5$ L : un pot ne suffit pas ($2{,}5 < 3{,}75$), deux pots donnent $5$ L $\\geqslant 3{,}75$ L. Mathis doit acheter $2$ pots.

**4.** Prix sans remise : $2 \\times 24{,}90 = 49{,}80$ €.
Remise : $20\\,\\%$ de $49{,}80$, c'est $\\frac{20}{100} \\times 49{,}80 = 9{,}96$ €.
Prix payé : $49{,}80 - 9{,}96 = 39{,}84$. Mathis paiera $39{,}84$ €.`
    },
    {
      id: "6P1-ds-09",
      title: "L'imprimante du CDI",
      difficulty: 1,
      points: 4,
      statement: `L'imprimante du CDI imprime $12$ pages en $3$ minutes. Le nombre de pages imprimées est proportionnel à la durée d'impression.

1. Recopier et compléter le tableau en expliquant, pour chaque case, le calcul effectué :

| Durée (min) | 3 | 6 | 9 | 15 | 1 |
|:---|:---:|:---:|:---:|:---:|:---:|
| Nombre de pages | 12 | | | | |

2. Combien de pages l'imprimante imprime-t-elle en $20$ minutes ?
3. Le professeur doit imprimer $100$ pages. Combien de temps faut-il ?`,
      solution: `**1.**
- $6 = 2 \\times 3$ : en $6$ min, on imprime $2 \\times 12 = 24$ pages.
- $9 = 3 \\times 3$ : en $9$ min, on imprime $3 \\times 12 = 36$ pages.
- $15 = 6 + 9$ : on ajoute les pages des colonnes $6$ et $9$, soit $24 + 36 = 60$ pages.
- $1 = 3 \\div 3$ : en $1$ min, on imprime $12 \\div 3 = 4$ pages.

| Durée (min) | 3 | 6 | 9 | 15 | 1 |
|:---|:---:|:---:|:---:|:---:|:---:|
| Nombre de pages | 12 | 24 | 36 | 60 | 4 |

**2.** L'imprimante imprime $4$ pages par minute, donc en $20$ minutes : $20 \\times 4 = 80$ pages.

**3.** $100 \\div 4 = 25$. Il faut $25$ minutes pour imprimer $100$ pages.`
    },
    {
      id: "6P1-ds-10",
      title: "Lire une étiquette de céréales",
      difficulty: 2,
      points: 5,
      statement: `Sur un paquet de céréales de $500$ g, on lit : « sucres : $20\\,\\%$ ; fibres : $8\\,\\%$ ».

1. Quelle masse de sucres contient le paquet entier ?
2. Quelle masse de fibres contient le paquet entier ?
3. Le matin, Inès mange un bol de $40$ g de ces céréales. Quelle masse de sucres avale-t-elle ?
4. Un autre paquet, de $200$ g, contient $30$ g de sucres.
   a) Quelle masse de sucres y a-t-il dans $100$ g de ces céréales ?
   b) En déduire le pourcentage de sucres de ce paquet. Lequel des deux paquets est le plus sucré ?`,
      solution: `**1.** $20\\,\\%$ de $500$ g : $\\frac{20}{100} \\times 500 = \\frac{10\\,000}{100} = 100$ g de sucres.

**2.** $8\\,\\%$ de $500$ g : $\\frac{8}{100} \\times 500 = \\frac{4\\,000}{100} = 40$ g de fibres.

**3.** $20\\,\\%$ de $40$ g : $\\frac{20}{100} \\times 40 = \\frac{800}{100} = 8$ g. Inès avale $8$ g de sucres.

**4.** a) La masse de sucres est proportionnelle à la masse de céréales. $100$ g, c'est $2$ fois moins que $200$ g : il y a $30 \\div 2 = 15$ g de sucres dans $100$ g de céréales.
b) $15$ g pour $100$ g, c'est $15\\,\\%$ de sucres. Comme $15\\,\\% < 20\\,\\%$, c'est le **premier paquet** qui est le plus sucré.`
    },
    {
      id: "6P1-ds-11",
      title: "La maquette du voilier",
      difficulty: 3,
      points: 5,
      statement: `Tom construit la maquette d'un voilier. Le vrai voilier mesure $12$ m de long et la maquette mesure $30$ cm de long. Toutes les longueurs de la maquette sont proportionnelles aux longueurs réelles.

1. Exprimer $12$ m en centimètres. Par combien faut-il diviser une longueur réelle pour obtenir la longueur sur la maquette ? En déduire l'échelle de la maquette.
2. Le mât du vrai voilier mesure $16$ m. Quelle est la hauteur du mât de la maquette ?
3. Sur la maquette, la largeur du voilier est de $9$ cm. Quelle est sa largeur réelle, en mètres ?
4. Tom fabrique un petit personnage pour la maquette. Il veut représenter un marin de $1{,}80$ m. Quelle doit être la taille du personnage, en millimètres ?`,
      solution: `**1.** $12$ m $= 1\\,200$ cm. $1\\,200 \\div 30 = 40$ : les longueurs de la maquette sont $40$ fois plus petites que les longueurs réelles. L'échelle de la maquette est $\\frac{1}{40}$ ($1$ cm sur la maquette représente $40$ cm en réalité).

**2.** $16$ m $= 1\\,600$ cm et $1\\,600 \\div 40 = 40$. Le mât de la maquette mesure $40$ cm.

**3.** $9 \\times 40 = 360$ cm, soit $3{,}6$ m. Le voilier mesure $3{,}6$ m de large.

**4.** $1{,}80$ m $= 1\\,800$ mm et $1\\,800 \\div 40 = 45$. Le personnage doit mesurer $45$ mm.`
    },
    {
      id: "6P1-ds-12",
      title: "Le sirop de menthe",
      difficulty: 4,
      points: 6,
      statement: `Léa prépare ses verres de menthe à l'eau avec $3$ cL de sirop et $21$ cL d'eau. Hugo prépare sa gourde avec $6$ cL de sirop et $36$ cL d'eau.

1. Quelle est la contenance d'un verre de Léa ? D'une gourde de Hugo ?
2. On veut savoir quelle boisson a le goût de menthe le plus fort.
   a) Si Léa utilise $6$ cL de sirop (le double), quelle quantité d'eau doit-elle ajouter pour garder le même goût ?
   b) Pour $6$ cL de sirop, qui met le plus d'eau : Léa ou Hugo ?
   c) En déduire qui obtient la boisson la plus forte en goût de menthe.
3. Pour une fête, Léa veut préparer $4{,}8$ L de boisson avec sa recette.
   a) Convertir $4{,}8$ L en cL. Combien de verres de Léa cela représente-t-il ?
   b) Quelles quantités de sirop et d'eau doit-elle utiliser ?
4. Une bouteille contient $75$ cL de sirop. Combien de verres peut-on préparer avec la recette de Léa ? Combien de gourdes avec celle de Hugo ? Dans le cas de Hugo, que reste-t-il de sirop ?`,
      solution: `**1.** Verre de Léa : $3 + 21 = 24$ cL. Gourde de Hugo : $6 + 36 = 42$ cL.

**2.** a) Pour garder le même goût, les quantités doivent rester proportionnelles : deux fois plus de sirop, donc deux fois plus d'eau, soit $2 \\times 21 = 42$ cL d'eau.
b) Pour $6$ cL de sirop, Léa met $42$ cL d'eau et Hugo $36$ cL : **Léa met le plus d'eau**.
c) Pour la même quantité de sirop, Hugo met moins d'eau : sa boisson est **plus forte** en goût de menthe.

**3.** a) $4{,}8$ L $= 480$ cL et $480 \\div 24 = 20$ : cela correspond à $20$ verres de Léa.
b) Il faut $20 \\times 3 = 60$ cL de sirop et $20 \\times 21 = 420$ cL d'eau (vérification : $60 + 420 = 480$ cL).

**4.** Recette de Léa : $75 \\div 3 = 25$, on prépare $25$ verres.
Recette de Hugo : $75 = 6 \\times 12 + 3$, on prépare $12$ gourdes et il reste $3$ cL de sirop (pas assez pour une gourde de plus).`
    },
    {
      id: "6P1-ds-13",
      title: "Le tissu au mètre",
      difficulty: 1,
      points: 4,
      statement: `Au rayon couture, $4$ m de tissu coûtent $18$ €. Le prix payé est proportionnel à la longueur de tissu achetée.

1. Recopier et compléter le tableau, en indiquant à chaque fois le calcul effectué :

| Longueur (m) | $4$ | $2$ | $6$ | $10$ | $1$ |
|:---|:---:|:---:|:---:|:---:|:---:|
| Prix (€) | $18$ | | | | |

2. Combien coûtent $7$ m de tissu ?
3. Avec $36$ €, quelle longueur de tissu peut-on acheter ?`,
      solution: `**1.**
- $2$ m, c'est la moitié de $4$ m : $18 \\div 2 = 9$ €.
- $6$ m $= 4$ m $+ 2$ m : $18 + 9 = 27$ €.
- $10$ m $= 4$ m $+ 6$ m : $18 + 27 = 45$ € (ou $5 \\times 9 = 45$ €, car $10 = 5 \\times 2$).
- $1$ m, c'est le quart de $4$ m : $18 \\div 4 = 4{,}50$ €.

| Longueur (m) | $4$ | $2$ | $6$ | $10$ | $1$ |
|:---|:---:|:---:|:---:|:---:|:---:|
| Prix (€) | $18$ | $9$ | $27$ | $45$ | $4{,}50$ |

**2.** Par retour à l'unité : $7 \\times 4{,}50 = 31{,}50$ €. (Ou : $6$ m $+ 1$ m, soit $27 + 4{,}50 = 31{,}50$ €.)

**3.** $36 = 2 \\times 18$ : on peut acheter $2 \\times 4 = 8$ m de tissu.`
    },
    {
      id: "6P1-ds-14",
      title: "La balade à vélo",
      difficulty: 2,
      points: 5,
      statement: `Sur une voie verte, Hugo roule à vitesse constante : il parcourt $45$ km en $3$ heures. La distance parcourue est proportionnelle à la durée du trajet.

1. Quelle distance Hugo parcourt-il en $1$ heure ?
2. Quelle distance parcourt-il en $2$ h $30$ min ?
3. Combien de temps lui faut-il pour parcourir $60$ km ?
4. a) Combien de minutes y a-t-il dans $1$ heure ? Quelle fraction d'heure représentent $20$ minutes ?
   b) En déduire la distance parcourue en $20$ minutes.`,
      solution: `**1.** En $1$ heure, Hugo parcourt $3$ fois moins de distance qu'en $3$ heures : $45 \\div 3 = 15$ km.

**2.** $2$ h $30$ min, c'est $2$ heures et une demi-heure. En $2$ heures : $2 \\times 15 = 30$ km ; en une demi-heure : $15 \\div 2 = 7{,}5$ km.
Total : $30 + 7{,}5 = 37{,}5$ km.

**3.** Il parcourt $15$ km par heure, et $60 = 4 \\times 15$ : il lui faut **$4$ heures**.

**4.** a) $1$ h $= 60$ min, et $60 = 3 \\times 20$ : $20$ minutes représentent $\\frac{1}{3}$ d'heure.
b) En $20$ minutes, il parcourt $3$ fois moins qu'en une heure : $15 \\div 3 = 5$ km.`
    },
    {
      id: "6P1-ds-15",
      title: "Agrandir un rectangle",
      difficulty: 3,
      points: 5,
      statement: `Lou dessine un rectangle de $4$ cm de longueur et de $2{,}5$ cm de largeur. Elle veut en tracer un agrandissement : toutes les longueurs de l'agrandissement sont proportionnelles à celles du rectangle de départ, et la longueur devient $10$ cm.

1. Par quel nombre faut-il multiplier les longueurs du rectangle de départ pour obtenir celles de l'agrandissement ?
2. Calculer la largeur de l'agrandissement.
3. a) Calculer le périmètre de chacun des deux rectangles.
   b) Le périmètre est-il multiplié par le même nombre que les longueurs ? Justifier.
4. a) Calculer l'aire de chacun des deux rectangles.
   b) L'aire de l'agrandissement est-elle égale à $2{,}5$ fois l'aire du rectangle de départ ? Que peut-on en conclure ?`,
      solution: `**1.** On cherche le nombre qui, multiplié par $4$, donne $10$ : $10 \\div 4 = 2{,}5$. Il faut multiplier les longueurs par $2{,}5$.

**2.** Largeur de l'agrandissement : $2{,}5 \\times 2{,}5 = 6{,}25$ cm.

**3.** a) Rectangle de départ : $P = 2 \\times (4 + 2{,}5) = 2 \\times 6{,}5 = 13$ cm.
Agrandissement : $P' = 2 \\times (10 + 6{,}25) = 2 \\times 16{,}25 = 32{,}5$ cm.
b) $13 \\times 2{,}5 = 32{,}5$ : oui, le périmètre est lui aussi multiplié par $2{,}5$.

**4.** a) Rectangle de départ : $A = 4 \\times 2{,}5 = 10$ cm². Agrandissement : $A' = 10 \\times 6{,}25 = 62{,}5$ cm².
b) $2{,}5 \\times 10 = 25$ cm², et $62{,}5 \\neq 25$ : l'aire n'est pas multipliée par $2{,}5$.
On en conclut que l'aire n'est **pas proportionnelle** aux longueurs : quand on agrandit une figure, les longueurs et le périmètre sont multipliés par le même nombre, mais pas l'aire.`
    },
    {
      id: "6P1-ds-16",
      title: "Deux tarifs pour tirer des photos",
      difficulty: 4,
      points: 6,
      statement: `Pour faire tirer ses photos de vacances sur papier, Maëlle compare deux sites de tirage :
- **tarif A** : $0{,}15$ € par photo ;
- **tarif B** : $3$ € de frais d'envoi, plus $0{,}12$ € par photo.

1. Recopier et compléter le tableau :

| Nombre de photos | $10$ | $50$ | $100$ | $200$ |
|:---|:---:|:---:|:---:|:---:|
| Prix avec le tarif A (€) | | | | |
| Prix avec le tarif B (€) | | | | |

2. Le prix du tarif A est-il proportionnel au nombre de photos ? Et celui du tarif B ? Justifier.
3. Pour quel nombre de photos du tableau les deux tarifs coûtent-ils le même prix ?
4. Maëlle veut faire tirer $60$ photos. Quel tarif doit-elle choisir ? Justifier par un calcul.
5. Son frère veut faire tirer $250$ photos. Quel tarif lui conseiller ? Combien économise-t-il par rapport à l'autre tarif ?`,
      solution: `**1.** Tarif A : on multiplie le nombre de photos par $0{,}15$. Tarif B : on multiplie par $0{,}12$, puis on ajoute $3$.

| Nombre de photos | $10$ | $50$ | $100$ | $200$ |
|:---|:---:|:---:|:---:|:---:|
| Prix avec le tarif A (€) | $1{,}50$ | $7{,}50$ | $15$ | $30$ |
| Prix avec le tarif B (€) | $4{,}20$ | $9$ | $15$ | $27$ |

Par exemple, pour $50$ photos avec le tarif B : $3 + 50 \\times 0{,}12 = 3 + 6 = 9$ €.

**2.** Tarif A : oui, on passe toujours du nombre de photos au prix en multipliant par $0{,}15$ (c'est le prix d'une photo).
Tarif B : non. Par exemple, $50$ photos, c'est $5$ fois $10$ photos, mais $5 \\times 4{,}20 = 21$ € et non $9$ €. Les frais d'envoi de $3$ € sont payés une seule fois, quel que soit le nombre de photos.

**3.** Pour $100$ photos, les deux tarifs coûtent $15$ €.

**4.** Tarif A : $60 \\times 0{,}15 = 9$ €. Tarif B : $3 + 60 \\times 0{,}12 = 3 + 7{,}20 = 10{,}20$ €.
Pour $60$ photos, le **tarif A** est le moins cher.

**5.** Tarif A : $250 \\times 0{,}15 = 37{,}50$ €. Tarif B : $3 + 250 \\times 0{,}12 = 3 + 30 = 33$ €.
On lui conseille le **tarif B** ; il économise $37{,}50 - 33 = 4{,}50$ €.`
    }
  ],
  "6M1": [
    {
      id: "6M1-ds-01",
      title: "Conversions de longueurs",
      difficulty: 1,
      points: 4,
      statement: `1. Convertir dans l'unité demandée :
   a) $3{,}5$ km $= \\ldots$ m
   b) $47$ mm $= \\ldots$ cm
   c) $2{,}8$ m $= \\ldots$ cm
   d) $650$ cm $= \\ldots$ m
2. Convertir : a) $0{,}75$ m en mm ; b) $12$ hm en km.
3. Ranger les longueurs suivantes dans l'ordre croissant : $1{,}2$ km ; $950$ m ; $13\\,000$ dm.`,
      solution: `On utilise le tableau de conversion : km, hm, dam, m, dm, cm, mm (chaque unité vaut $10$ fois la suivante).

**1.** a) $1$ km $= 1\\,000$ m, donc $3{,}5$ km $= 3{,}5 \\times 1\\,000 = 3\\,500$ m.
b) $1$ cm $= 10$ mm, donc $47$ mm $= 47 \\div 10 = 4{,}7$ cm.
c) $1$ m $= 100$ cm, donc $2{,}8$ m $= 280$ cm.
d) $650$ cm $= 650 \\div 100 = 6{,}5$ m.

**2.** a) $1$ m $= 1\\,000$ mm, donc $0{,}75$ m $= 750$ mm.
b) $10$ hm $= 1$ km, donc $12$ hm $= 1{,}2$ km.

**3.** On convertit tout en mètres : $1{,}2$ km $= 1\\,200$ m ; $950$ m ; $13\\,000$ dm $= 1\\,300$ m.
Ordre croissant : $950$ m $< 1{,}2$ km $< 13\\,000$ dm.`
    },
    {
      id: "6M1-ds-02",
      title: "Périmètres de polygones",
      difficulty: 1,
      points: 4,
      statement: `1. Calculer le périmètre d'un carré de côté $7{,}5$ cm.
2. Calculer le périmètre d'un rectangle de longueur $12$ cm et de largeur $4{,}5$ cm.
3. Un triangle a pour côtés $5$ cm, $6{,}2$ cm et $4{,}8$ cm. Calculer son périmètre.
4. Un carré a un périmètre de $26$ cm. Quelle est la longueur de son côté ?`,
      solution: `**1.** Le périmètre d'un carré est $P = 4 \\times c$ : $P = 4 \\times 7{,}5 = 30$ cm.

**2.** Le périmètre d'un rectangle est $P = 2 \\times (L + \\ell)$ : $P = 2 \\times (12 + 4{,}5) = 2 \\times 16{,}5 = 33$ cm.

**3.** Le périmètre d'un polygone est la somme des longueurs de ses côtés : $P = 5 + 6{,}2 + 4{,}8 = 16$ cm.

**4.** Les quatre côtés d'un carré ont la même longueur : $c = 26 \\div 4 = 6{,}5$. Le côté mesure $6{,}5$ cm.`
    },
    {
      id: "6M1-ds-03",
      title: "Roue de vélo et rond-point",
      difficulty: 2,
      points: 5,
      statement: `Dans cet exercice, on prend $3{,}14$ comme valeur approchée de $\\pi$.

1. La roue du vélo de Jade a un diamètre de $70$ cm. Calculer la longueur du cercle formé par le pneu.
2. Quelle distance Jade parcourt-elle lorsque la roue fait $100$ tours ? Donner le résultat en mètres.
3. Un rond-point a la forme d'un cercle de rayon $15$ m. Calculer la longueur du tour de ce rond-point.`,
      solution: `La longueur d'un cercle de diamètre $d$ est $P = \\pi \\times d$ (et $d = 2 \\times r$).

**1.** $P \\approx 3{,}14 \\times 70 = 219{,}8$. La longueur du cercle est environ $219{,}8$ cm.

**2.** À chaque tour, le vélo avance de la longueur du cercle : $100 \\times 219{,}8 = 21\\,980$ cm.
$21\\,980$ cm $= 219{,}8$ m. Jade parcourt environ $219{,}8$ m.

**3.** Le diamètre vaut $d = 2 \\times 15 = 30$ m, donc $P \\approx 3{,}14 \\times 30 = 94{,}2$.
Le tour du rond-point mesure environ $94{,}2$ m.`
    },
    {
      id: "6M1-ds-04",
      title: "Clôturer un jardin",
      difficulty: 2,
      points: 5,
      statement: `M. Bernard veut entourer son jardin rectangulaire de $18$ m de long sur $12{,}5$ m de large avec du grillage. Il laisse une ouverture de $3$ m pour le portail, qui n'est pas grillagée.

1. Calculer le périmètre du jardin.
2. Quelle longueur de grillage faut-il acheter ?
3. Le grillage est vendu en rouleaux de $10$ m. Combien de rouleaux faut-il acheter ?
4. Un rouleau coûte $27{,}90$ €. Calculer le prix total du grillage.`,
      solution: `**1.** $P = 2 \\times (18 + 12{,}5) = 2 \\times 30{,}5 = 61$ m. Le périmètre du jardin est $61$ m.

**2.** On retire la largeur du portail : $61 - 3 = 58$ m. Il faut $58$ m de grillage.

**3.** $5$ rouleaux donnent $50$ m, ce qui ne suffit pas ; $6$ rouleaux donnent $60$ m $\\geqslant 58$ m. Il faut acheter $6$ rouleaux.

**4.** $6 \\times 27{,}90 = 167{,}40$. Le grillage coûte $167{,}40$ €.`
    },
    {
      id: "6M1-ds-05",
      title: "Le contour d'une fenêtre",
      difficulty: 3,
      points: 5,
      statement: `Une fenêtre a la forme d'un rectangle de $80$ cm de large et de $120$ cm de haut, surmonté d'un demi-cercle de diamètre $80$ cm (figure ci-dessous, qui n'est pas à l'échelle). On prend $3{,}14$ comme valeur approchée de $\\pi$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 300 230" width="300" height="230" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M110,200 L110,80 A40,40 0 0 1 190,80 L190,200 Z" fill="rgba(59,130,246,0.10)" stroke="var(--text-main, #334155)" stroke-width="2"/><line x1="110" y1="80" x2="190" y2="80" stroke="var(--text-main, #334155)" stroke-width="1" stroke-dasharray="4 3"/><text x="150" y="218" text-anchor="middle" font-size="13" fill="currentColor">80 cm</text><text x="200" y="145" font-size="13" fill="currentColor">120 cm</text></svg></div>

1. Calculer la longueur de l'arc formé par le demi-cercle.
2. Calculer le périmètre de la fenêtre (le pointillé ne fait pas partie du contour).
3. On pose un joint tout autour de la fenêtre. Le joint est vendu en rouleaux de $5$ m. Un rouleau suffit-il ? Justifier.`,
      solution: `**1.** La longueur d'un cercle de diamètre $80$ cm est $3{,}14 \\times 80 = 251{,}2$ cm. Le demi-cercle mesure la moitié : $251{,}2 \\div 2 = 125{,}6$ cm.

**2.** Le contour est formé de trois côtés du rectangle (le côté du haut est remplacé par l'arc) :
$P \\approx 120 + 80 + 120 + 125{,}6 = 445{,}6$ cm.
Le périmètre de la fenêtre est environ $445{,}6$ cm.

**3.** $5$ m $= 500$ cm et $445{,}6 < 500$. Un rouleau de joint suffit (il en restera environ $54{,}4$ cm).`
    },
    {
      id: "6M1-ds-06",
      title: "Courir sur la piste",
      difficulty: 3,
      points: 5,
      statement: `La piste du stade est formée de deux lignes droites de $100$ m et de deux demi-cercles de $60$ m de diamètre, placés à chaque bout. On prend $3{,}14$ comme valeur approchée de $\\pi$.

1. Expliquer pourquoi les deux demi-cercles forment ensemble un cercle entier. Calculer la longueur totale des deux virages.
2. Calculer la longueur d'un tour de piste.
3. Rayan veut courir au moins $3$ km. Combien de tours complets doit-il faire au minimum ?`,
      solution: `**1.** Les deux demi-cercles ont le même diamètre : mis bout à bout, ils forment un cercle complet de diamètre $60$ m.
Longueur des deux virages : $3{,}14 \\times 60 = 188{,}4$ m.

**2.** Un tour : $100 + 100 + 188{,}4 = 388{,}4$ m.

**3.** $3$ km $= 3\\,000$ m.
$7$ tours : $7 \\times 388{,}4 = 2\\,718{,}8$ m, ce qui est moins que $3\\,000$ m.
$8$ tours : $8 \\times 388{,}4 = 3\\,107{,}2$ m, ce qui dépasse $3\\,000$ m.
Rayan doit faire au minimum $8$ tours de piste.`
    },
    {
      id: "6M1-ds-07",
      title: "Le tour de l'étang ou le tour du parc ?",
      difficulty: 4,
      points: 6,
      statement: `Lina fait le tour d'un étang circulaire de $250$ m de diamètre. Tom fait le tour d'un parc carré de $200$ m de côté. On prend $3{,}14$ comme valeur approchée de $\\pi$.

1. Calculer la longueur d'un tour pour Lina, puis pour Tom.
2. Qui parcourt la plus grande distance en un tour ? De combien de mètres ?
3. Chacun fait $5$ tours. Quelle est alors la différence entre les distances parcourues ?
4. Quel devrait être, environ, le diamètre de l'étang pour que son tour mesure exactement $800$ m ? Arrondir au mètre.`,
      solution: `**1.** Lina : $P \\approx 3{,}14 \\times 250 = 785$ m.
Tom : $P = 4 \\times 200 = 800$ m.

**2.** $800 > 785$ : c'est Tom qui parcourt la plus grande distance, avec $800 - 785 = 15$ m de plus par tour.

**3.** Sur $5$ tours : $5 \\times 15 = 75$ m (on peut vérifier : $5 \\times 800 = 4\\,000$ m et $5 \\times 785 = 3\\,925$ m, $4\\,000 - 3\\,925 = 75$ m). Tom parcourt $75$ m de plus que Lina.

**4.** On cherche $d$ tel que $3{,}14 \\times d = 800$, donc $d = 800 \\div 3{,}14 \\approx 254{,}8$.
L'étang devrait avoir un diamètre d'environ $255$ m.`
    },
    {
      id: "6M1-ds-08",
      title: "Fabriquer des bracelets",
      difficulty: 4,
      points: 6,
      statement: `Pour un atelier, des élèves fabriquent des bracelets en fil. Chaque bracelet a la forme d'un cercle de $6{,}5$ cm de diamètre. Pour faire le nœud, on ajoute $3$ cm de fil à chaque bracelet. On prend $3{,}14$ comme valeur approchée de $\\pi$.

1. Calculer la longueur du cercle d'un bracelet. Arrondir au millimètre (au dixième de centimètre).
2. En déduire la longueur de fil utilisée pour un bracelet.
3. Le fil est vendu en bobines de $5$ m. Combien de bracelets complets peut-on fabriquer avec une bobine ? Quelle longueur de fil reste-t-il ?
4. On enfile sur le cercle des perles de $8$ mm de long, collées les unes aux autres. Combien de perles peut-on enfiler au maximum sur un bracelet ?`,
      solution: `**1.** $3{,}14 \\times 6{,}5 = 20{,}41$. Arrondie au millimètre, la longueur du cercle est $20{,}4$ cm.

**2.** $20{,}4 + 3 = 23{,}4$. Il faut $23{,}4$ cm de fil par bracelet.

**3.** $5$ m $= 500$ cm. $21 \\times 23{,}4 = 491{,}4$ cm et $22 \\times 23{,}4 = 514{,}8$ cm $> 500$ cm.
On peut fabriquer $21$ bracelets ; il reste $500 - 491{,}4 = 8{,}6$ cm de fil.

**4.** $20{,}4$ cm $= 204$ mm. $25 \\times 8 = 200$ mm et $26 \\times 8 = 208$ mm $> 204$ mm.
On peut enfiler au maximum $25$ perles sur un bracelet.`
    },
    {
      id: "6M1-ds-09",
      title: "Polygones réguliers et côté manquant",
      difficulty: 1,
      points: 4,
      statement: `1. Un hexagone régulier (six côtés de même longueur) a des côtés de $4{,}5$ cm. Calculer son périmètre.
2. Un triangle équilatéral a un périmètre de $27$ cm. Quelle est la longueur de chacun de ses côtés ?
3. Un triangle $ABC$ a un périmètre de $18$ cm. On sait que $AB = 5{,}5$ cm et $BC = 7$ cm. Calculer la longueur $AC$.
4. Un rectangle a un périmètre de $1$ m et une largeur de $15$ cm. Calculer sa longueur en centimètres.`,
      solution: `**1.** Les six côtés ont la même longueur : $P = 6 \\times 4{,}5 = 27$ cm.

**2.** Les trois côtés d'un triangle équilatéral ont la même longueur : $27 \\div 3 = 9$. Chaque côté mesure $9$ cm.

**3.** $AB + BC = 5{,}5 + 7 = 12{,}5$ cm, donc $AC = 18 - 12{,}5 = 5{,}5$ cm.

**4.** $1$ m $= 100$ cm. Le périmètre vaut deux longueurs plus deux largeurs : les deux largeurs mesurent $2 \\times 15 = 30$ cm, donc les deux longueurs mesurent $100 - 30 = 70$ cm. Une longueur mesure $70 \\div 2 = 35$ cm.`
    },
    {
      id: "6M1-ds-10",
      title: "Les aiguilles de l'horloge",
      difficulty: 2,
      points: 5,
      statement: `L'aiguille des minutes de l'horloge de la classe mesure $12$ cm et celle des heures mesure $8$ cm. On prend $3{,}14$ comme valeur approchée de $\\pi$.

1. En une heure, l'extrémité de l'aiguille des minutes fait un tour complet. Quelle distance parcourt-elle ?
2. Quelle distance parcourt cette extrémité en $15$ minutes ?
3. Quelle distance parcourt-elle en une journée de $24$ heures ? Donner le résultat en mètres, arrondi au centimètre.
4. L'aiguille des heures fait un tour complet en $12$ heures. Quelle distance parcourt son extrémité en une journée ?`,
      solution: `**1.** L'extrémité décrit un cercle de rayon $12$ cm, donc de diamètre $2 \\times 12 = 24$ cm.
Longueur du cercle : $3{,}14 \\times 24 = 75{,}36$ cm. En une heure, elle parcourt environ $75{,}36$ cm.

**2.** $15$ minutes, c'est un quart d'heure : l'aiguille fait un quart de tour. $75{,}36 \\div 4 = 18{,}84$ cm.

**3.** En $24$ heures, l'aiguille fait $24$ tours : $24 \\times 75{,}36 = 1\\,808{,}64$ cm, soit environ $18{,}09$ m.

**4.** En une journée, l'aiguille des heures fait $24 \\div 12 = 2$ tours d'un cercle de diamètre $2 \\times 8 = 16$ cm.
Un tour : $3{,}14 \\times 16 = 50{,}24$ cm ; deux tours : $2 \\times 50{,}24 = 100{,}48$ cm, soit environ $1$ m.`
    },
    {
      id: "6M1-ds-11",
      title: "La rosace en demi-cercles",
      difficulty: 3,
      points: 5,
      statement: `On trace un carré de $10$ cm de côté. Sur chacun de ses quatre côtés, on trace à l'extérieur du carré un demi-cercle dont ce côté est le diamètre. On obtient une rosace à quatre pétales dont le contour est formé uniquement des quatre demi-cercles. On prend $3{,}14$ comme valeur approchée de $\\pi$.

1. Calculer la longueur d'un demi-cercle.
2. En déduire le périmètre de la rosace. Expliquer pourquoi on aurait pu calculer directement la longueur de deux cercles.
3. La rosace a-t-elle un périmètre plus grand ou plus petit que celui du carré ? De combien ?
4. On ne trace maintenant les demi-cercles que sur deux côtés opposés du carré. Calculer le périmètre de la nouvelle figure.`,
      solution: `**1.** Un cercle de diamètre $10$ cm mesure $3{,}14 \\times 10 = 31{,}4$ cm. Un demi-cercle mesure $31{,}4 \\div 2 = 15{,}7$ cm.

**2.** Périmètre de la rosace : $4 \\times 15{,}7 = 62{,}8$ cm.
Quatre demi-cercles de même diamètre forment deux cercles entiers : $2 \\times 31{,}4 = 62{,}8$ cm.

**3.** Le périmètre du carré est $4 \\times 10 = 40$ cm. $62{,}8 - 40 = 22{,}8$ : la rosace a un périmètre plus grand de $22{,}8$ cm.

**4.** Le contour est formé de deux demi-cercles (soit un cercle entier) et des deux côtés du carré restés libres :
$P \\approx 31{,}4 + 10 + 10 = 51{,}4$ cm.`
    },
    {
      id: "6M1-ds-12",
      title: "Les roues du tracteur",
      difficulty: 4,
      points: 6,
      statement: `Les roues arrière d'un tracteur ont un diamètre de $1{,}5$ m et ses roues avant un diamètre de $0{,}75$ m. On prend $3{,}14$ comme valeur approchée de $\\pi$. Quand une roue fait un tour, le tracteur avance de la longueur du cercle de cette roue.

1. Calculer la longueur du cercle d'une roue arrière, puis celle d'une roue avant.
2. Pendant un trajet, une roue arrière fait $200$ tours. Quelle distance le tracteur a-t-il parcourue ?
3. Combien de tours une roue avant a-t-elle faits pendant ce même trajet ? Expliquer pourquoi ce résultat était prévisible en comparant les diamètres.
4. Le fermier doit parcourir $3$ km pour rejoindre son champ. Combien de tours complets une roue arrière doit-elle faire, au minimum, pour qu'il ait parcouru au moins cette distance ?`,
      solution: `**1.** Roue arrière : $3{,}14 \\times 1{,}5 = 4{,}71$ m. Roue avant : $3{,}14 \\times 0{,}75 = 2{,}355$ m.

**2.** $200 \\times 4{,}71 = 942$. Le tracteur a parcouru environ $942$ m.

**3.** $942 \\div 2{,}355 = 400$. Une roue avant a fait $400$ tours.
C'était prévisible : le diamètre de la roue avant est la moitié de celui de la roue arrière ($1{,}5 \\div 2 = 0{,}75$), donc sa longueur de cercle est aussi deux fois plus petite. Pour parcourir la même distance, elle doit faire deux fois plus de tours : $2 \\times 200 = 400$.

**4.** $3$ km $= 3\\,000$ m.
$636 \\times 4{,}71 = 2\\,995{,}56$ m : c'est moins que $3\\,000$ m.
$637 \\times 4{,}71 = 3\\,000{,}27$ m : c'est au moins $3\\,000$ m.
Une roue arrière doit faire au minimum $637$ tours.`
    },
    {
      id: "6M1-ds-13",
      title: "Périmètres avec des unités différentes",
      difficulty: 1,
      points: 4,
      statement: `1. Un cadre photo carré a des côtés de $25$ cm. Calculer son périmètre en cm, puis en m.
2. Un triangle a des côtés de $4{,}5$ cm, $62$ mm et $0{,}08$ m.
   a) Convertir les trois longueurs en cm.
   b) Calculer le périmètre de ce triangle en cm.
3. Une table rectangulaire mesure $1{,}2$ m de long et $45$ cm de large. Calculer son périmètre en cm, puis en m.`,
      solution: `**1.** Un carré a quatre côtés de même longueur : $P = 4 \\times 25 = 100$ cm, soit $1$ m.

**2.** a) $4{,}5$ cm reste $4{,}5$ cm ; $62$ mm $= 6{,}2$ cm (car $1$ cm $= 10$ mm) ; $0{,}08$ m $= 8$ cm (car $1$ m $= 100$ cm).
b) $P = 4{,}5 + 6{,}2 + 8 = 18{,}7$ cm.
Attention : on ne peut additionner des longueurs que si elles sont exprimées dans la même unité.

**3.** $1{,}2$ m $= 120$ cm. $P = 2 \\times (120 + 45) = 2 \\times 165 = 330$ cm, soit $3{,}3$ m.`
    },
    {
      id: "6M1-ds-14",
      title: "Le périmètre d'une figure en escalier",
      difficulty: 2,
      points: 5,
      statement: `La figure ci-dessous est formée uniquement d'angles droits. Elle n'est pas en vraie grandeur.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 300 190" width="300" height="190" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="40,20 160,20 160,80 240,80 240,160 40,160" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="2"/><text x="100" y="14" text-anchor="middle" font-size="13" fill="currentColor">6 cm</text><text x="34" y="94" text-anchor="end" font-size="13" fill="currentColor">7 cm</text><text x="140" y="178" text-anchor="middle" font-size="13" fill="currentColor">10 cm</text><text x="246" y="124" font-size="13" fill="currentColor">4 cm</text><text x="168" y="54" font-size="15" font-weight="bold" fill="#2563eb">?</text><text x="200" y="72" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">?</text></svg></div>

1. Calculer les deux longueurs marquées d'un point d'interrogation. Expliquer le raisonnement.
2. Calculer le périmètre de la figure.
3. Calculer le périmètre d'un rectangle de $10$ cm sur $7$ cm. Que remarque-t-on ?
4. Expliquer cette remarque en observant les côtés de la figure.`,
      solution: `**1.** Le côté horizontal marqué « ? » : la longueur totale du bas est $10$ cm, et le haut mesure $6$ cm, donc ce côté mesure $10 - 6 = 4$ cm.
Le côté vertical marqué « ? » : la hauteur totale à gauche est $7$ cm, et le côté droit mesure $4$ cm, donc ce côté mesure $7 - 4 = 3$ cm.

**2.** On fait le tour de la figure : $P = 6 + 3 + 4 + 4 + 10 + 7 = 34$ cm.

**3.** $P = 2 \\times (10 + 7) = 2 \\times 17 = 34$ cm. Les deux périmètres sont **égaux**.

**4.** Les côtés horizontaux du haut de la figure ($6$ cm et $4$ cm) mesurent ensemble $10$ cm, comme le haut du rectangle. Les côtés verticaux de droite ($3$ cm et $4$ cm) mesurent ensemble $7$ cm, comme le côté droit du rectangle. Couper un coin « en escalier » ne change donc pas le périmètre.`
    },
    {
      id: "6M1-ds-15",
      title: "La bordure du bassin",
      difficulty: 3,
      points: 5,
      statement: `Dans un jardin public, un bassin circulaire a un rayon de $3{,}5$ m. On veut poser une bordure tout autour du bassin. On prend $3{,}14$ comme valeur approchée de $\\pi$.

1. Quel est le diamètre du bassin ?
2. Calculer la longueur de la bordure à poser.
3. La bordure est vendue en éléments de $50$ cm de long. Combien d'éléments faut-il acheter au minimum ? Justifier.
4. Un élément coûte $12{,}50$ €. Calculer le prix de la bordure.`,
      solution: `**1.** Le diamètre est le double du rayon : $2 \\times 3{,}5 = 7$ m.

**2.** La longueur d'un cercle est $\\pi \\times$ diamètre : $L \\approx 3{,}14 \\times 7 = 21{,}98$ m.

**3.** $50$ cm $= 0{,}5$ m. Il faut $2$ éléments par mètre : $21{,}98 \\times 2 = 43{,}96$.
$43$ éléments ne couvrent que $21{,}5$ m, ce qui ne suffit pas : il faut acheter **$44$ éléments** au minimum.

**4.** $44 \\times 12{,}50 = 550$ €.`
    },
    {
      id: "6M1-ds-16",
      title: "Trois chemins en demi-cercles",
      difficulty: 4,
      points: 6,
      statement: `Dans un parc, deux bancs $A$ et $B$ sont distants de $12$ m. Pour aller de $A$ à $B$, on peut suivre la ligne droite, ou l'un des chemins en demi-cercles suivants. On prend $3{,}14$ comme valeur approchée de $\\pi$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 300 215" width="300" height="215" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="30" y1="130" x2="270" y2="130" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M30,130 A120,120 0 0 1 270,130" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M30,130 A60,60 0 0 0 150,130 A60,60 0 0 0 270,130" fill="none" stroke="#ea580c" stroke-width="2.5"/><circle cx="30" cy="130" r="4" fill="currentColor"/><circle cx="270" cy="130" r="4" fill="currentColor"/><text x="20" y="125" text-anchor="end" font-size="15" font-weight="bold" fill="currentColor">A</text><text x="280" y="125" font-size="15" font-weight="bold" fill="currentColor">B</text><text x="150" y="30" text-anchor="middle" font-size="13" fill="#2563eb">chemin 1</text><text x="150" y="207" text-anchor="middle" font-size="13" fill="#ea580c">chemin 2</text><text x="150" y="124" text-anchor="middle" font-size="12" fill="currentColor">12 m</text></svg></div>

- **Chemin 1** (en bleu) : un demi-cercle de diamètre $[AB]$.
- **Chemin 2** (en orange) : deux demi-cercles de même diamètre, placés bout à bout entre $A$ et $B$.
- **Chemin 3** (non dessiné) : quatre demi-cercles de même diamètre, placés bout à bout entre $A$ et $B$.

1. Calculer la longueur du chemin 1.
2. a) Quel est le diamètre de chacun des demi-cercles du chemin 2 ?
   b) Calculer la longueur du chemin 2.
3. Calculer la longueur du chemin 3.
4. Que remarque-t-on ? Expliquer pourquoi, sans refaire de calcul, le résultat serait le même avec $6$ demi-cercles.
5. Combien de mètres de plus que la ligne droite parcourt-on en suivant l'un de ces chemins ?`,
      solution: `**1.** Un cercle de diamètre $12$ m mesure environ $3{,}14 \\times 12 = 37{,}68$ m. Le chemin 1 est un demi-cercle : $37{,}68 \\div 2 = 18{,}84$ m.

**2.** a) Les deux diamètres mis bout à bout font $12$ m : chaque diamètre mesure $12 \\div 2 = 6$ m.
b) Un demi-cercle de diamètre $6$ m mesure $3{,}14 \\times 6 \\div 2 = 9{,}42$ m. Le chemin 2 mesure $2 \\times 9{,}42 = 18{,}84$ m.

**3.** Chaque diamètre mesure $12 \\div 4 = 3$ m. Un demi-cercle mesure $3{,}14 \\times 3 \\div 2 = 4{,}71$ m, et le chemin 3 mesure $4 \\times 4{,}71 = 18{,}84$ m.

**4.** Les trois chemins ont **la même longueur**, environ $18{,}84$ m.
Explication : la longueur d'un demi-cercle est la moitié de $\\pi \\times$ son diamètre. En additionnant les demi-cercles, on obtient la moitié de $\\pi \\times$ (somme des diamètres). Or la somme des diamètres vaut toujours $AB = 12$ m, quel que soit le nombre de demi-cercles. Avec $6$ demi-cercles, on trouverait donc aussi $18{,}84$ m.

**5.** $18{,}84 - 12 = 6{,}84$ m de plus que la ligne droite.`
    }
  ],
  "6M2": [
    {
      id: "6M2-ds-01",
      title: "Aires de carrés et de rectangles",
      difficulty: 1,
      points: 4,
      statement: `1. Calculer l'aire d'un carré de côté $9$ cm.
2. Calculer l'aire d'un rectangle de longueur $7{,}5$ m et de largeur $4$ m.
3. Un rectangle a une aire de $42$ cm² et une longueur de $7$ cm. Quelle est sa largeur ?
4. Calculer le périmètre du rectangle de la question 2. Pourquoi ne peut-on pas comparer directement ce nombre avec son aire ?`,
      solution: `**1.** Aire d'un carré : $\\mathcal{A} = c \\times c = 9 \\times 9 = 81$ cm².

**2.** Aire d'un rectangle : $\\mathcal{A} = L \\times \\ell = 7{,}5 \\times 4 = 30$ m².

**3.** $L \\times \\ell = 42$ avec $L = 7$, donc $\\ell = 42 \\div 7 = 6$. La largeur est $6$ cm.

**4.** $P = 2 \\times (7{,}5 + 4) = 2 \\times 11{,}5 = 23$ m.
Le périmètre est une longueur (en m) et l'aire une surface (en m²) : ce ne sont pas les mêmes grandeurs, on ne peut pas les comparer.`
    },
    {
      id: "6M2-ds-02",
      title: "Conversions d'aires",
      difficulty: 1,
      points: 4,
      statement: `1. Recopier et compléter :
   a) $5$ m² $= \\ldots$ dm²
   b) $3$ cm² $= \\ldots$ mm²
   c) $2\\,500$ cm² $= \\ldots$ m²
   d) $7$ dm² $= \\ldots$ m²
2. Convertir $0{,}6$ m² en cm².
3. Expliquer pourquoi $1$ m² $= 100$ dm² et non $10$ dm².`,
      solution: `Dans le tableau des unités d'aire, on passe d'une unité à la suivante en multipliant par $100$ (deux colonnes par unité).

**1.** a) $5$ m² $= 5 \\times 100 = 500$ dm².
b) $3$ cm² $= 3 \\times 100 = 300$ mm².
c) $1$ m² $= 10\\,000$ cm², donc $2\\,500$ cm² $= 2\\,500 \\div 10\\,000 = 0{,}25$ m².
d) $7$ dm² $= 7 \\div 100 = 0{,}07$ m².

**2.** $0{,}6$ m² $= 0{,}6 \\times 10\\,000 = 6\\,000$ cm².

**3.** Un carré de $1$ m de côté mesure $10$ dm de côté : on peut le paver avec $10$ rangées de $10$ carrés de $1$ dm de côté, soit $10 \\times 10 = 100$ dm².`
    },
    {
      id: "6M2-ds-03",
      title: "Même périmètre, même aire ?",
      difficulty: 2,
      points: 4,
      statement: `On considère trois figures :
- la figure A est un rectangle de $6$ cm sur $4$ cm ;
- la figure B est un carré de $5$ cm de côté ;
- la figure C est un rectangle de $8$ cm sur $3$ cm.

1. Calculer le périmètre et l'aire de chacune des trois figures.
2. Noé affirme : « Deux figures qui ont le même périmètre ont la même aire. » A-t-il raison ? Justifier avec les figures.
3. Deux de ces figures ont-elles la même aire ? Ont-elles alors le même périmètre ?`,
      solution: `**1.**
- A : $P = 2 \\times (6 + 4) = 20$ cm ; $\\mathcal{A} = 6 \\times 4 = 24$ cm².
- B : $P = 4 \\times 5 = 20$ cm ; $\\mathcal{A} = 5 \\times 5 = 25$ cm².
- C : $P = 2 \\times (8 + 3) = 22$ cm ; $\\mathcal{A} = 8 \\times 3 = 24$ cm².

**2.** Noé a tort : A et B ont le même périmètre ($20$ cm) mais pas la même aire ($24$ cm² et $25$ cm²).

**3.** A et C ont la même aire ($24$ cm²) mais pas le même périmètre ($20$ cm et $22$ cm). Aire et périmètre sont deux grandeurs différentes.`
    },
    {
      id: "6M2-ds-04",
      title: "Carreler une cuisine",
      difficulty: 2,
      points: 5,
      statement: `Le sol d'une cuisine est un rectangle de $4$ m sur $3{,}5$ m. On veut le recouvrir de carreaux carrés de $50$ cm de côté.

1. Calculer l'aire du sol, en m².
2. Calculer l'aire d'un carreau, en m².
3. Combien de carreaux faut-il pour recouvrir le sol (sans perte) ?
4. Les carreaux sont vendus par boîtes de $10$. Combien de boîtes faut-il acheter ?`,
      solution: `**1.** $\\mathcal{A} = 4 \\times 3{,}5 = 14$ m².

**2.** $50$ cm $= 0{,}5$ m, donc $\\mathcal{A} = 0{,}5 \\times 0{,}5 = 0{,}25$ m².

**3.** $14 \\div 0{,}25 = 56$. Autre méthode : on place $4 \\div 0{,}5 = 8$ carreaux dans la longueur et $3{,}5 \\div 0{,}5 = 7$ dans la largeur, soit $8 \\times 7 = 56$ carreaux.
Il faut $56$ carreaux.

**4.** $5$ boîtes contiennent $50$ carreaux, ce qui ne suffit pas ; $6$ boîtes en contiennent $60$. Il faut acheter $6$ boîtes.`
    },
    {
      id: "6M2-ds-05",
      title: "Une figure en forme de L",
      difficulty: 3,
      points: 5,
      statement: `La figure ci-dessous (qui n'est pas en vraie grandeur) est obtenue en retirant un rectangle de $4$ cm sur $3$ cm dans un coin d'un rectangle de $10$ cm sur $8$ cm. Tous les angles sont droits.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 290 210" width="290" height="210" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="40,20 160,20 160,80 240,80 240,180 40,180" fill="rgba(16,185,129,0.12)" stroke="var(--text-main, #334155)" stroke-width="2"/><polygon points="160,20 240,20 240,80 160,80" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/><text x="140" y="198" text-anchor="middle" font-size="13" fill="currentColor">10 cm</text><text x="12" y="104" font-size="13" fill="currentColor">8 cm</text><text x="200" y="74" text-anchor="middle" font-size="13" fill="currentColor">4 cm</text><text x="166" y="54" font-size="13" fill="currentColor">3 cm</text></svg></div>

1. Calculer l'aire de la figure en forme de L en utilisant une soustraction.
2. Retrouver ce résultat en découpant la figure en deux rectangles. Préciser leurs dimensions.
3. Calculer le périmètre de la figure en forme de L. Le comparer au périmètre du grand rectangle de départ.`,
      solution: `**1.** Aire du grand rectangle : $10 \\times 8 = 80$ cm². Aire du rectangle retiré : $4 \\times 3 = 12$ cm².
Aire de la figure : $80 - 12 = 68$ cm².

**2.** On coupe verticalement : un rectangle de $10 - 4 = 6$ cm sur $8$ cm et un rectangle de $4$ cm sur $8 - 3 = 5$ cm.
$6 \\times 8 + 4 \\times 5 = 48 + 20 = 68$ cm². On retrouve bien $68$ cm².

**3.** Les côtés de la figure mesurent : $10$ ; $8$ ; $6$ ; $3$ ; $4$ ; $5$ (en cm).
$P = 10 + 8 + 6 + 3 + 4 + 5 = 36$ cm.
Le grand rectangle a pour périmètre $2 \\times (10 + 8) = 36$ cm : le périmètre est le même, alors que l'aire a diminué.`
    },
    {
      id: "6M2-ds-06",
      title: "Semer la pelouse",
      difficulty: 3,
      points: 5,
      statement: `Un terrain rectangulaire mesure $25$ m sur $16$ m. On y trouve un potager carré de $6$ m de côté et une terrasse rectangulaire de $8$ m sur $4{,}5$ m. Le reste du terrain est recouvert de pelouse.

1. Calculer l'aire du terrain, puis celles du potager et de la terrasse.
2. Calculer l'aire de la pelouse.
3. Pour la pelouse, il faut $1$ kg d'engrais pour $40$ m². Quelle masse d'engrais faut-il ?
4. L'engrais est vendu en sacs de $2{,}5$ kg. Combien de sacs faut-il acheter ?`,
      solution: `**1.** Terrain : $25 \\times 16 = 400$ m². Potager : $6 \\times 6 = 36$ m². Terrasse : $8 \\times 4{,}5 = 36$ m².

**2.** $400 - 36 - 36 = 328$. La pelouse a une aire de $328$ m².

**3.** La masse d'engrais est proportionnelle à l'aire : $328 \\div 40 = 8{,}2$. Il faut $8{,}2$ kg d'engrais.

**4.** $3$ sacs donnent $7{,}5$ kg, ce qui ne suffit pas ; $4$ sacs donnent $10$ kg $\\geqslant 8{,}2$ kg. Il faut acheter $4$ sacs.`
    },
    {
      id: "6M2-ds-07",
      title: "Repeindre la chambre",
      difficulty: 4,
      points: 6,
      statement: `La chambre d'Emma a la forme d'un pavé : le sol est un rectangle de $4$ m sur $3$ m et la hauteur sous plafond est $2{,}5$ m. Emma veut repeindre les quatre murs (pas le plafond).
Il y a une porte de $0{,}9$ m sur $2$ m et une fenêtre de $1{,}2$ m sur $1{,}5$ m, qui ne seront pas peintes.

1. Calculer l'aire totale des quatre murs, sans tenir compte de la porte et de la fenêtre.
2. Calculer l'aire à peindre.
3. Il faut passer deux couches. Un litre de peinture permet de couvrir $10$ m² (une couche). Quelle quantité de peinture faut-il ?
4. La peinture est vendue en pots de $2{,}5$ L à $19{,}90$ € le pot. Combien Emma va-t-elle dépenser ?`,
      solution: `**1.** Deux murs mesurent $4$ m sur $2{,}5$ m et deux murs mesurent $3$ m sur $2{,}5$ m :
$2 \\times (4 \\times 2{,}5) + 2 \\times (3 \\times 2{,}5) = 2 \\times 10 + 2 \\times 7{,}5 = 20 + 15 = 35$ m².

**2.** Porte : $0{,}9 \\times 2 = 1{,}8$ m². Fenêtre : $1{,}2 \\times 1{,}5 = 1{,}8$ m².
Aire à peindre : $35 - 1{,}8 - 1{,}8 = 31{,}4$ m².

**3.** Deux couches : $2 \\times 31{,}4 = 62{,}8$ m². Il faut $62{,}8 \\div 10 = 6{,}28$ L de peinture.

**4.** $2$ pots donnent $5$ L (pas assez) ; $3$ pots donnent $7{,}5$ L $\\geqslant 6{,}28$ L. Il faut $3$ pots.
$3 \\times 19{,}90 = 59{,}70$. Emma dépensera $59{,}70$ €.`
    },
    {
      id: "6M2-ds-08",
      title: "Le plus grand enclos",
      difficulty: 4,
      points: 5,
      statement: `Sacha dispose de $24$ m de grillage pour construire un enclos rectangulaire pour ses lapins. Il utilise tout le grillage et les dimensions de l'enclos sont des nombres entiers de mètres.

1. Expliquer pourquoi la somme de la longueur et de la largeur de l'enclos vaut $12$ m.
2. Recopier et compléter le tableau :

| Largeur (m) | 1 | 2 | 3 | 4 | 5 | 6 |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Longueur (m) | 11 | | | | | |
| Aire (m²) | | | | | | |

3. Quelles dimensions Sacha doit-il choisir pour que l'enclos ait la plus grande aire possible ? Quelle est la forme de cet enclos ?
4. Chaque lapin a besoin d'au moins $4$ m². Combien de lapins Sacha peut-il mettre au maximum dans cet enclos ?`,
      solution: `**1.** Le périmètre du rectangle est $2 \\times (L + \\ell) = 24$, donc $L + \\ell = 24 \\div 2 = 12$ m.

**2.**

| Largeur (m) | 1 | 2 | 3 | 4 | 5 | 6 |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Longueur (m) | 11 | 10 | 9 | 8 | 7 | 6 |
| Aire (m²) | 11 | 20 | 27 | 32 | 35 | 36 |

**3.** La plus grande aire est $36$ m², obtenue pour $6$ m sur $6$ m : l'enclos est alors un carré.

**4.** $36 \\div 4 = 9$. Sacha peut mettre au maximum $9$ lapins dans l'enclos.`
    },
    {
      id: "6M2-ds-09",
      title: "Le tapis du salon",
      difficulty: 1,
      points: 4,
      statement: `1. Un tapis rectangulaire mesure $1{,}2$ m de long et $80$ cm de large.
   a) Calculer son aire en cm².
   b) Convertir cette aire en m².
2. Une dalle carrée mesure $4{,}5$ dm de côté. Calculer son aire en dm², puis en cm².
3. Ranger dans l'ordre croissant les aires suivantes : $0{,}5$ m² ; $4\\,800$ cm² ; $52$ dm².`,
      solution: `**1.** a) Il faut exprimer les deux dimensions dans la même unité : $1{,}2$ m $= 120$ cm.
$\\mathcal{A} = 120 \\times 80 = 9\\,600$ cm².
b) $1$ m² $= 10\\,000$ cm², donc $9\\,600$ cm² $= 9\\,600 \\div 10\\,000 = 0{,}96$ m².
(Vérification : $1{,}2 \\times 0{,}8 = 0{,}96$ m².)

**2.** $\\mathcal{A} = 4{,}5 \\times 4{,}5 = 20{,}25$ dm². Comme $1$ dm² $= 100$ cm², cela fait $2\\,025$ cm².

**3.** On convertit tout en dm² : $0{,}5$ m² $= 50$ dm² ; $4\\,800$ cm² $= 48$ dm² ; $52$ dm².
Ordre croissant : $4\\,800$ cm² $< 0{,}5$ m² $< 52$ dm².`
    },
    {
      id: "6M2-ds-10",
      title: "La photo et son cadre",
      difficulty: 2,
      points: 5,
      statement: `Une photo rectangulaire mesure $15$ cm sur $10$ cm. On la place dans un cadre en bois qui forme tout autour de la photo une bande de $2$ cm de large.

1. Calculer l'aire de la photo.
2. Quelles sont les dimensions extérieures du cadre ? Calculer l'aire du rectangle extérieur.
3. En déduire l'aire de la bande de bois visible autour de la photo.
4. Calculer le périmètre extérieur du cadre.`,
      solution: `**1.** $\\mathcal{A} = 15 \\times 10 = 150$ cm².

**2.** La bande de $2$ cm s'ajoute des deux côtés, dans chaque direction :
longueur $15 + 2 + 2 = 19$ cm et largeur $10 + 2 + 2 = 14$ cm.
Aire du rectangle extérieur : $19 \\times 14 = 266$ cm².

**3.** L'aire de la bande est la différence des deux aires : $266 - 150 = 116$ cm².

**4.** $P = 2 \\times (19 + 14) = 2 \\times 33 = 66$ cm.`
    },
    {
      id: "6M2-ds-11",
      title: "Le jardin partagé",
      difficulty: 3,
      points: 5,
      statement: `Un jardin partagé est un rectangle de $30$ m sur $20$ m. Deux allées de $2$ m de large le traversent en croix : l'une parallèle à la longueur, l'autre parallèle à la largeur. Elles découpent le jardin en $4$ parcelles rectangulaires identiques.

1. Calculer l'aire totale du jardin.
2. Calculer les dimensions d'une parcelle, puis l'aire totale des quatre parcelles.
3. En déduire l'aire des allées.
4. Ilyès calcule l'aire des allées ainsi : $30 \\times 2 + 20 \\times 2 = 100$ m². Expliquer pourquoi son résultat est faux et le corriger.`,
      solution: `**1.** $\\mathcal{A} = 30 \\times 20 = 600$ m².

**2.** Dans la longueur, il reste $30 - 2 = 28$ m pour deux parcelles, soit $28 \\div 2 = 14$ m chacune. Dans la largeur, il reste $20 - 2 = 18$ m, soit $18 \\div 2 = 9$ m.
Une parcelle mesure $14$ m sur $9$ m : son aire est $14 \\times 9 = 126$ m². Les quatre parcelles : $4 \\times 126 = 504$ m².

**3.** Aire des allées : $600 - 504 = 96$ m².

**4.** Ilyès a compté deux fois le carré de $2$ m sur $2$ m où les deux allées se croisent : il appartient aux deux allées.
Il faut l'enlever une fois : $100 - 2 \\times 2 = 100 - 4 = 96$ m². On retrouve le résultat de la question 3.`
    },
    {
      id: "6M2-ds-12",
      title: "Agrandir une photo",
      difficulty: 4,
      points: 6,
      statement: `Une photo rectangulaire mesure $10$ cm sur $15$ cm. Le photographe propose des agrandissements.

1. Calculer l'aire de la photo.
2. On multiplie la longueur et la largeur par $2$.
   a) Calculer les nouvelles dimensions et la nouvelle aire.
   b) Par combien l'aire a-t-elle été multipliée ?
3. Même question si on multiplie la longueur et la largeur par $3$.
4. Le prix d'un tirage est proportionnel à son aire : la photo de départ coûte $0{,}30$ €. Combien coûte le tirage de la question 2 ?
5. Un poster de même forme (dimensions de la photo multipliées par un même nombre entier) a une aire de $2\\,400$ cm². Trouver ses dimensions en expliquant la démarche.`,
      solution: `**1.** $\\mathcal{A} = 10 \\times 15 = 150$ cm².

**2.** a) $20$ cm sur $30$ cm, d'aire $20 \\times 30 = 600$ cm².
b) $600 \\div 150 = 4$ : l'aire a été multipliée par $4$ (et non par $2$), car $2 \\times 2 = 4$.

**3.** $30$ cm sur $45$ cm, d'aire $30 \\times 45 = 1\\,350$ cm². $1\\,350 \\div 150 = 9$ : l'aire est multipliée par $9 = 3 \\times 3$.

**4.** L'aire est multipliée par $4$, donc le prix aussi : $4 \\times 0{,}30 = 1{,}20$ €.

**5.** $2\\,400 \\div 150 = 16$ : l'aire doit être multipliée par $16$. D'après les questions précédentes, multiplier les dimensions par un nombre multiplie l'aire par ce nombre multiplié par lui-même. Or $4 \\times 4 = 16$ : on multiplie les dimensions par $4$.
Le poster mesure $40$ cm sur $60$ cm (vérification : $40 \\times 60 = 2\\,400$ cm²).`
    },
    {
      id: "6M2-ds-13",
      title: "Compter les carreaux",
      difficulty: 1,
      points: 4,
      statement: `Les figures $A$ et $B$ sont tracées sur un quadrillage dont chaque carreau est un carré de $1$ cm de côté.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 320 120" width="320" height="120" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="10" y1="10" x2="10" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="30" y1="10" x2="30" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="50" y1="10" x2="50" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="70" y1="10" x2="70" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="90" y1="10" x2="90" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="110" y1="10" x2="110" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="130" y1="10" x2="130" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="150" y1="10" x2="150" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="170" y1="10" x2="170" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="190" y1="10" x2="190" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="210" y1="10" x2="210" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="230" y1="10" x2="230" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="250" y1="10" x2="250" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="270" y1="10" x2="270" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="290" y1="10" x2="290" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="310" y1="10" x2="310" y2="110" stroke="#cbd5e1" stroke-width="1"/><line x1="10" y1="10" x2="310" y2="10" stroke="#cbd5e1" stroke-width="1"/><line x1="10" y1="30" x2="310" y2="30" stroke="#cbd5e1" stroke-width="1"/><line x1="10" y1="50" x2="310" y2="50" stroke="#cbd5e1" stroke-width="1"/><line x1="10" y1="70" x2="310" y2="70" stroke="#cbd5e1" stroke-width="1"/><line x1="10" y1="90" x2="310" y2="90" stroke="#cbd5e1" stroke-width="1"/><line x1="10" y1="110" x2="310" y2="110" stroke="#cbd5e1" stroke-width="1"/><polygon points="30,50 150,50 150,90 30,90" fill="rgba(59,130,246,0.18)" stroke="#2563eb" stroke-width="2"/><text x="90" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#2563eb">A</text><polygon points="190,30 210,30 210,50 230,50 230,70 250,70 250,90 190,90" fill="rgba(16,185,129,0.18)" stroke="#059669" stroke-width="2"/><text x="270" y="62" text-anchor="middle" font-size="14" font-weight="bold" fill="#059669">B</text></svg></div>

1. Combien de carreaux recouvre la figure $A$ ? Et la figure $B$ ?
2. En déduire l'aire de chaque figure, en cm².
3. Dessiner sur un quadrillage un rectangle qui n'a pas les mêmes dimensions que $A$ mais qui a la même aire. Donner ses dimensions.
4. On reproduit la figure $A$ sur un quadrillage dont les carreaux mesurent $5$ mm de côté (même nombre de carreaux).
   a) Quelle est l'aire d'un carreau, en mm² ?
   b) Quelle est alors l'aire de la figure $A$, en mm² ?`,
      solution: `**1.** La figure $A$ est un rectangle de $6$ carreaux sur $2$ carreaux : $6 \\times 2 = 12$ carreaux.
La figure $B$ est un « escalier » : une colonne de $3$ carreaux, une de $2$ carreaux et une de $1$ carreau, soit $3 + 2 + 1 = 6$ carreaux.

**2.** Un carreau a une aire de $1$ cm². Donc l'aire de $A$ est **$12$ cm²** et l'aire de $B$ est **$6$ cm²** (la figure $B$ a une aire deux fois plus petite que $A$).

**3.** Il faut deux nombres entiers dont le produit vaut $12$, autres que $6$ et $2$ : par exemple un rectangle de $4$ cm sur $3$ cm ($4 \\times 3 = 12$), ou de $12$ cm sur $1$ cm.

**4.** a) Un carreau est un carré de $5$ mm de côté : son aire est $5 \\times 5 = 25$ mm².
b) La figure $A$ recouvre toujours $12$ carreaux : $12 \\times 25 = 300$ mm².`
    },
    {
      id: "6M2-ds-14",
      title: "Le champ de blé",
      difficulty: 2,
      points: 5,
      statement: `On rappelle que $1$ a (are) $= 100$ m² et $1$ ha (hectare) $= 10\\,000$ m².

Un agriculteur possède un champ rectangulaire de $120$ m de long et $75$ m de large.

1. Calculer l'aire de ce champ, en m².
2. Exprimer cette aire en ares, puis en hectares.
3. Pour semer du blé, il faut $1$ kg de semences pour $50$ m². Quelle masse de semences faut-il pour tout le champ ?
4. Son voisin possède un champ rectangulaire de $1{,}2$ ha dont la largeur mesure $80$ m.
   a) Convertir $1{,}2$ ha en m².
   b) Calculer la longueur de ce second champ.
   c) Quel est le plus grand des deux champs ?`,
      solution: `**1.** $\\mathcal{A} = 120 \\times 75 = 9\\,000$ m².

**2.** $1$ a $= 100$ m², donc $9\\,000$ m² $= 9\\,000 \\div 100 = 90$ a.
$1$ ha $= 10\\,000$ m², donc $9\\,000$ m² $= 9\\,000 \\div 10\\,000 = 0{,}9$ ha.

**3.** Il y a $9\\,000 \\div 50 = 180$ fois $50$ m² dans le champ. Il faut donc **$180$ kg** de semences.

**4.** a) $1{,}2$ ha $= 1{,}2 \\times 10\\,000 = 12\\,000$ m².
b) Aire $=$ longueur $\\times$ largeur, donc longueur $= 12\\,000 \\div 80 = 150$ m.
(Vérification : $150 \\times 80 = 12\\,000$.)
c) $12\\,000$ m² $> 9\\,000$ m² : c'est **le champ du voisin** qui est le plus grand ($1{,}2$ ha contre $0{,}9$ ha).`
    },
    {
      id: "6M2-ds-15",
      title: "Coller des affiches sur un panneau",
      difficulty: 3,
      points: 5,
      statement: `Un panneau d'affichage rectangulaire mesure $2{,}4$ m de long et $1{,}5$ m de haut. On veut y coller des affiches rectangulaires de $60$ cm sur $40$ cm, sans qu'elles se chevauchent ni dépassent du panneau, toutes posées dans le même sens.

1. Calculer l'aire du panneau, en cm².
2. Calculer l'aire d'une affiche, en cm².
3. Lucas calcule $36\\,000 \\div 2\\,400$ et affirme : « On peut coller $15$ affiches. » Quel calcul a-t-il fait ? Expliquer pourquoi ce raisonnement ne suffit pas.
4. On pose les affiches avec leur côté de $60$ cm le long du côté de $2{,}4$ m du panneau.
   a) Combien d'affiches peut-on mettre sur une rangée ? Combien de rangées ?
   b) Combien d'affiches peut-on coller en tout ?
5. Même question en posant le côté de $40$ cm le long du côté de $2{,}4$ m.
6. Quelle aire du panneau reste non recouverte ?`,
      solution: `**1.** $2{,}4$ m $= 240$ cm et $1{,}5$ m $= 150$ cm. Aire du panneau : $240 \\times 150 = 36\\,000$ cm².

**2.** Aire d'une affiche : $60 \\times 40 = 2\\,400$ cm².

**3.** Lucas a divisé l'aire du panneau par l'aire d'une affiche : $36\\,000 \\div 2\\,400 = 15$. Ce calcul dit seulement que $15$ affiches ont la même aire que le panneau. Mais les affiches ne peuvent pas être découpées : il faut vérifier qu'elles « rentrent » vraiment, rangée par rangée.

**4.** a) Sur la longueur : $240 \\div 60 = 4$ affiches par rangée. Sur la hauteur : $150 = 3 \\times 40 + 30$, donc $3$ rangées (il reste une bande de $30$ cm).
b) $4 \\times 3 = 12$ affiches.

**5.** Sur la longueur : $240 \\div 40 = 6$ affiches par rangée. Sur la hauteur : $150 = 2 \\times 60 + 30$, donc $2$ rangées.
$6 \\times 2 = 12$ affiches. On obtient encore $12$ affiches : on ne peut pas en coller $15$.

**6.** Aire recouverte : $12 \\times 2\\,400 = 28\\,800$ cm². Aire non recouverte : $36\\,000 - 28\\,800 = 7\\,200$ cm².
(C'est bien la bande de $240$ cm sur $30$ cm : $240 \\times 30 = 7\\,200$ cm².)`
    },
    {
      id: "6M2-ds-16",
      title: "Partager un terrain en trois",
      difficulty: 4,
      points: 6,
      statement: `Un terrain rectangulaire de $60$ m sur $30$ m doit être partagé en trois parcelles rectangulaires **de même aire**. On sépare les parcelles par des clôtures (en pointillés rouges sur les schémas, qui ne sont pas en vraie grandeur). On étudie deux partages.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:420px;"><svg class="geo-svg-figure" viewBox="-30 0 364 117" width="364" height="117" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg" role="img"><text x="81" y="15" text-anchor="middle" font-size="12" fill="currentColor">Partage 1</text><rect x="15" y="25" width="132" height="66" fill="rgba(16,185,129,0.12)" stroke="var(--text-main, #334155)" stroke-width="2"/><line x1="59" y1="25" x2="59" y2="91" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/><line x1="103" y1="25" x2="103" y2="91" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/><text x="81" y="107" text-anchor="middle" font-size="12" fill="currentColor">60 m</text><text x="12" y="62" text-anchor="end" font-size="12" fill="currentColor">30 m</text><text x="37" y="62" text-anchor="middle" font-size="12" fill="currentColor">P1</text><text x="81" y="62" text-anchor="middle" font-size="12" fill="currentColor">P2</text><text x="125.00000000000001" y="62" text-anchor="middle" font-size="12" fill="currentColor">P3</text><text x="253" y="15" text-anchor="middle" font-size="12" fill="currentColor">Partage 2</text><rect x="187" y="25" width="132" height="66" fill="rgba(16,185,129,0.12)" stroke="var(--text-main, #334155)" stroke-width="2"/><line x1="187" y1="47" x2="319" y2="47" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/><line x1="253" y1="47" x2="253" y2="91" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/><text x="253" y="107" text-anchor="middle" font-size="12" fill="currentColor">60 m</text><text x="253" y="40" text-anchor="middle" font-size="12" fill="currentColor">Q1</text><text x="220" y="73" text-anchor="middle" font-size="12" fill="currentColor">Q2</text><text x="286" y="73" text-anchor="middle" font-size="12" fill="currentColor">Q3</text></svg></div>

- Partage 1 : trois bandes $P_1$, $P_2$, $P_3$ de même largeur, perpendiculaires à la longueur.
- Partage 2 : une bande $Q_1$ de $60$ m de long, puis le reste coupé en deux rectangles $Q_2$ et $Q_3$ identiques.

1. Calculer l'aire du terrain, puis l'aire que doit avoir chaque parcelle.
2. Partage 1 : donner les dimensions de chaque parcelle et vérifier son aire.
3. Partage 2 :
   a) Quelle doit être la largeur de la bande $Q_1$ ?
   b) En déduire les dimensions de $Q_2$ et de $Q_3$, et vérifier leur aire.
4. Calculer la longueur totale de clôture intérieure (en pointillés) pour chaque partage.
5. La clôture coûte $12$ € le mètre. Quel partage est le moins cher, et de combien ?
6. Calculer le périmètre de $P_1$ et celui de $Q_1$. Deux parcelles de même aire ont-elles toujours le même périmètre ?`,
      solution: `**1.** Aire du terrain : $60 \\times 30 = 1\\,800$ m². Chaque parcelle : $1\\,800 \\div 3 = 600$ m².

**2.** On partage la longueur de $60$ m en trois : $60 \\div 3 = 20$ m. Chaque parcelle mesure $20$ m sur $30$ m, et $20 \\times 30 = 600$ m². ✓

**3.** a) $Q_1$ a pour longueur $60$ m et pour aire $600$ m² : sa largeur est $600 \\div 60 = 10$ m.
b) Il reste un rectangle de $60$ m sur $30 - 10 = 20$ m, coupé en deux : $Q_2$ et $Q_3$ mesurent $60 \\div 2 = 30$ m sur $20$ m. $30 \\times 20 = 600$ m². ✓

**4.** Partage 1 : deux clôtures de $30$ m, soit $2 \\times 30 = 60$ m.
Partage 2 : une clôture de $60$ m (entre $Q_1$ et le reste) et une de $20$ m (entre $Q_2$ et $Q_3$), soit $60 + 20 = 80$ m.

**5.** Partage 1 : $60 \\times 12 = 720$ €. Partage 2 : $80 \\times 12 = 960$ €.
Le **partage 1** est le moins cher, de $960 - 720 = 240$ € (c'est le prix des $20$ m de clôture en plus).

**6.** Périmètre de $P_1$ : $2 \\times (20 + 30) = 100$ m. Périmètre de $Q_1$ : $2 \\times (60 + 10) = 140$ m.
Les deux parcelles ont la même aire ($600$ m²) mais pas le même périmètre : **non**, aire égale n'entraîne pas périmètre égal.`
    }
  ],
  "6M3": [
    {
      id: "6M3-ds-01",
      title: "Volumes de pavés et de cubes",
      difficulty: 1,
      points: 4,
      statement: `1. Calculer le volume d'un pavé droit de longueur $5$ cm, de largeur $3$ cm et de hauteur $4$ cm.
2. Calculer le volume d'un cube d'arête $6$ cm.
3. Calculer le volume d'une boîte en forme de pavé droit de $12$ cm sur $10$ cm sur $2{,}5$ cm.
4. Un cube a un volume de $8$ cm³. Quelle est la longueur de son arête ?`,
      solution: `**1.** Volume d'un pavé droit : $V = L \\times \\ell \\times h = 5 \\times 3 \\times 4 = 60$ cm³.

**2.** Volume d'un cube : $V = c \\times c \\times c = 6 \\times 6 \\times 6 = 216$ cm³.

**3.** $V = 12 \\times 10 \\times 2{,}5 = 120 \\times 2{,}5 = 300$ cm³.

**4.** On cherche un nombre $c$ tel que $c \\times c \\times c = 8$ : $2 \\times 2 \\times 2 = 8$. L'arête mesure $2$ cm.`
    },
    {
      id: "6M3-ds-02",
      title: "Compter des cubes unités",
      difficulty: 1,
      points: 4,
      statement: `Mia empile des cubes de $1$ cm d'arête pour construire un pavé droit plein. La couche du bas comporte $4$ cubes dans la longueur et $3$ cubes dans la largeur. Elle construit $2$ couches identiques.

1. Combien de cubes y a-t-il dans une couche ?
2. Combien de cubes Mia a-t-elle utilisés en tout ?
3. Quel est le volume du pavé, en cm³ ?
4. Mia ajoute une troisième couche identique. Quel est le nouveau volume ?`,
      solution: `**1.** Une couche contient $4$ rangées de $3$ cubes : $4 \\times 3 = 12$ cubes.

**2.** Avec $2$ couches : $2 \\times 12 = 24$ cubes.

**3.** Chaque cube a un volume de $1$ cm³ (cube de $1$ cm d'arête). Le pavé a donc un volume de $24$ cm³. On retrouve $V = 4 \\times 3 \\times 2 = 24$ cm³.

**4.** $3 \\times 12 = 36$. Le nouveau volume est de $36$ cm³.`
    },
    {
      id: "6M3-ds-03",
      title: "Remplir un aquarium",
      difficulty: 2,
      points: 5,
      statement: `Un aquarium a la forme d'un pavé droit de $50$ cm de long, $30$ cm de large et $40$ cm de haut. On rappelle que $1$ L $= 1$ dm³ $= 1\\,000$ cm³.

1. Calculer le volume de l'aquarium en cm³.
2. Exprimer ce volume en litres.
3. On remplit l'aquarium d'eau jusqu'à une hauteur de $32$ cm. Quel volume d'eau, en litres, contient-il ?
4. Quel volume d'eau faudrait-il ajouter pour le remplir à ras bord ?`,
      solution: `**1.** $V = 50 \\times 30 \\times 40 = 60\\,000$ cm³.

**2.** $60\\,000 \\div 1\\,000 = 60$. L'aquarium a une contenance de $60$ L.

**3.** L'eau forme un pavé de $50$ cm sur $30$ cm sur $32$ cm : $50 \\times 30 \\times 32 = 48\\,000$ cm³, soit $48$ L.

**4.** $60 - 48 = 12$. Il faudrait ajouter $12$ L d'eau.`
    },
    {
      id: "6M3-ds-04",
      title: "Litres et centimètres cubes",
      difficulty: 2,
      points: 4,
      statement: `On rappelle que $1$ L $= 1$ dm³ $= 1\\,000$ cm³ et que $1$ L $= 100$ cL.

1. Convertir : a) $2\\,500$ cm³ en L ; b) $0{,}75$ L en cm³ ; c) $3$ dm³ en L ; d) $20$ cL en cm³.
2. Une brique de jus a la forme d'un pavé droit de $10$ cm sur $6$ cm sur $4$ cm. Calculer son volume.
3. Cette brique peut-elle contenir $20$ cL de jus ? Justifier.`,
      solution: `**1.** a) $2\\,500$ cm³ $= 2\\,500 \\div 1\\,000 = 2{,}5$ L.
b) $0{,}75$ L $= 0{,}75 \\times 1\\,000 = 750$ cm³.
c) $1$ dm³ $= 1$ L, donc $3$ dm³ $= 3$ L.
d) $20$ cL $= 0{,}2$ L $= 0{,}2 \\times 1\\,000 = 200$ cm³.

**2.** $V = 10 \\times 6 \\times 4 = 240$ cm³.

**3.** $20$ cL $= 200$ cm³ et $200 < 240$. La brique peut contenir $20$ cL de jus.`
    },
    {
      id: "6M3-ds-05",
      title: "La boîte de sucres",
      difficulty: 3,
      points: 5,
      statement: `Des morceaux de sucre ont la forme de pavés droits de $2$ cm de long, $1$ cm de large et $1$ cm de haut. On les range, tous dans le même sens, dans une boîte en forme de pavé droit de $12$ cm de long, $6$ cm de large et $4$ cm de haut, en plaçant la longueur des sucres dans la longueur de la boîte.

1. Calculer le volume de la boîte et celui d'un morceau de sucre.
2. Combien de morceaux peut-on aligner dans la longueur de la boîte ? Dans la largeur ? Combien de couches peut-on empiler ?
3. Combien de morceaux de sucre la boîte peut-elle contenir ? Vérifier ce résultat avec les volumes.`,
      solution: `**1.** Boîte : $V = 12 \\times 6 \\times 4 = 288$ cm³. Sucre : $V = 2 \\times 1 \\times 1 = 2$ cm³.

**2.** Dans la longueur : $12 \\div 2 = 6$ morceaux. Dans la largeur : $6 \\div 1 = 6$ morceaux. En hauteur : $4 \\div 1 = 4$ couches.

**3.** $6 \\times 6 \\times 4 = 144$. La boîte contient $144$ morceaux de sucre.
Vérification : $288 \\div 2 = 144$ ; les sucres remplissent exactement la boîte.`
    },
    {
      id: "6M3-ds-06",
      title: "Doubler l'arête d'un cube",
      difficulty: 3,
      points: 5,
      statement: `Léo possède un cube de $4$ cm d'arête et un pavé droit de $8$ cm sur $4$ cm sur $2$ cm.

1. Calculer le volume du cube et celui du pavé. Que remarque-t-on ?
2. Léo construit un grand cube dont l'arête est le double de celle du petit cube. Calculer le volume du grand cube.
3. Léo pense que le volume du grand cube est le double de celui du petit. A-t-il raison ? Combien de petits cubes faut-il pour remplir le grand cube ?`,
      solution: `**1.** Cube : $V = 4 \\times 4 \\times 4 = 64$ cm³. Pavé : $V = 8 \\times 4 \\times 2 = 64$ cm³.
Les deux solides ont le même volume, alors qu'ils n'ont pas la même forme.

**2.** L'arête du grand cube mesure $2 \\times 4 = 8$ cm : $V = 8 \\times 8 \\times 8 = 512$ cm³.

**3.** Le double de $64$ cm³ est $128$ cm³, et non $512$ cm³ : Léo a tort.
$512 \\div 64 = 8$ : il faut $8$ petits cubes pour remplir le grand ($2$ dans la longueur, $2$ dans la largeur et $2$ en hauteur, soit $2 \\times 2 \\times 2 = 8$).`
    },
    {
      id: "6M3-ds-07",
      title: "La piscine gonflable",
      difficulty: 4,
      points: 6,
      statement: `Une piscine gonflable a la forme d'un pavé droit de $3$ m de long, $2$ m de large et $0{,}6$ m de profondeur. On la remplit d'eau jusqu'à $50$ cm de hauteur. On rappelle que $1$ m³ $= 1\\,000$ L.

1. Calculer le volume d'eau dans la piscine, en m³, puis en litres.
2. Le tuyau d'arrosage débite $12$ L d'eau par minute. Combien de temps faut-il pour remplir la piscine jusqu'à $50$ cm ? Donner le résultat en heures et minutes.
3. Le remplissage commence à $14$ h $15$. À quelle heure sera-t-il terminé ?
4. L'eau coûte $4$ € le m³. Combien coûte le remplissage ?`,
      solution: `**1.** $50$ cm $= 0{,}5$ m. $V = 3 \\times 2 \\times 0{,}5 = 3$ m³, soit $3 \\times 1\\,000 = 3\\,000$ L.

**2.** $3\\,000 \\div 12 = 250$ minutes. Or $250 = 4 \\times 60 + 10$, donc $250$ min $= 4$ h $10$ min.

**3.** $14$ h $15$ min $+ 4$ h $10$ min $= 18$ h $25$ min. Le remplissage sera terminé à $18$ h $25$.

**4.** $3 \\times 4 = 12$. Le remplissage coûte $12$ €.`
    },
    {
      id: "6M3-ds-08",
      title: "Charger le camion de déménagement",
      difficulty: 4,
      points: 6,
      statement: `L'espace de chargement d'un camion est un pavé droit de $4$ m de long, $2$ m de large et $2$ m de haut. On veut y ranger des cartons cubiques de $50$ cm d'arête.

1. Calculer le volume de l'espace de chargement, en m³.
2. Combien de cartons peut-on ranger dans la longueur ? Dans la largeur ? En hauteur ? En déduire le nombre maximal de cartons.
3. Calculer le volume d'un carton en m³ et vérifier le résultat de la question 2.
4. La famille Martin charge $90$ cartons. Il reste aussi une armoire de $2$ m sur $1$ m sur $0{,}6$ m. Le volume restant est-il suffisant pour l'armoire ?`,
      solution: `**1.** $V = 4 \\times 2 \\times 2 = 16$ m³.

**2.** $50$ cm $= 0{,}5$ m. Longueur : $4 \\div 0{,}5 = 8$ cartons ; largeur : $2 \\div 0{,}5 = 4$ ; hauteur : $2 \\div 0{,}5 = 4$.
Nombre maximal : $8 \\times 4 \\times 4 = 128$ cartons.

**3.** Un carton : $0{,}5 \\times 0{,}5 \\times 0{,}5 = 0{,}125$ m³. $16 \\div 0{,}125 = 128$ : on retrouve $128$ cartons.

**4.** $90$ cartons occupent $90 \\times 0{,}125 = 11{,}25$ m³. Il reste $16 - 11{,}25 = 4{,}75$ m³.
L'armoire a un volume de $2 \\times 1 \\times 0{,}6 = 1{,}2$ m³ et $1{,}2 < 4{,}75$ : le volume restant est suffisant (à condition de bien ranger les cartons).`
    },
    {
      id: "6M3-ds-09",
      title: "La boîte à chaussures",
      difficulty: 1,
      points: 4,
      statement: `On rappelle que $1$ L $= 1$ dm³ $= 1\\,000$ cm³.

1. Une boîte à chaussures a la forme d'un pavé droit de $0{,}3$ m de long, $20$ cm de large et $15$ cm de haut.
   a) Exprimer toutes les dimensions en centimètres.
   b) Calculer le volume de la boîte en cm³.
   c) Exprimer ce volume en litres.
2. Un cube a une arête de $1$ dm. Calculer son volume en cm³. Que peut-on dire de sa contenance ?`,
      solution: `**1.** a) $0{,}3$ m $= 30$ cm. Les dimensions sont $30$ cm, $20$ cm et $15$ cm.
b) $V = 30 \\times 20 \\times 15 = 600 \\times 15 = 9\\,000$ cm³.
c) $9\\,000 \\div 1\\,000 = 9$. La boîte a un volume de $9$ L.

**2.** $1$ dm $= 10$ cm, donc $V = 10 \\times 10 \\times 10 = 1\\,000$ cm³.
Ce cube a un volume de $1$ dm³ : sa contenance est exactement $1$ L.`
    },
    {
      id: "6M3-ds-10",
      title: "Le bac à sable",
      difficulty: 2,
      points: 5,
      statement: `L'école maternelle installe un bac à sable en forme de pavé droit de $1{,}5$ m de long et $1{,}2$ m de large. On veut le remplir de sable sur une hauteur de $25$ cm. On rappelle que $1$ m³ $= 1\\,000$ L.

1. Exprimer $25$ cm en mètres.
2. Calculer le volume de sable nécessaire, en m³, puis en litres.
3. Le sable est vendu en sacs de $25$ L. Combien de sacs faut-il acheter ?
4. Un sac coûte $4{,}50$ €. Calculer le prix total du sable.`,
      solution: `**1.** $25$ cm $= 0{,}25$ m.

**2.** $V = 1{,}5 \\times 1{,}2 \\times 0{,}25 = 1{,}8 \\times 0{,}25 = 0{,}45$ m³, soit $0{,}45 \\times 1\\,000 = 450$ L.

**3.** $450 \\div 25 = 18$. Il faut acheter $18$ sacs de sable.

**4.** $18 \\times 4{,}50 = 81$. Le sable coûte $81$ €.`
    },
    {
      id: "6M3-ds-11",
      title: "Le volume d'un caillou",
      difficulty: 3,
      points: 5,
      statement: `Pour mesurer le volume d'un caillou, Chloé utilise un récipient en forme de pavé droit dont le fond est un rectangle de $20$ cm sur $15$ cm et dont la hauteur est $15$ cm. Elle y verse de l'eau jusqu'à une hauteur de $12$ cm.

1. Calculer le volume d'eau versé, en cm³, puis en litres.
2. Chloé plonge le caillou, qui est entièrement recouvert par l'eau. Le niveau de l'eau monte jusqu'à $12{,}8$ cm. Expliquer pourquoi le volume du caillou est égal au volume d'un pavé droit de $20$ cm sur $15$ cm sur $0{,}8$ cm. Calculer ce volume.
3. Elle ajoute ensuite des billes de $8$ cm³ chacune, qui coulent au fond. Combien de billes peut-elle ajouter au maximum sans que l'eau ne déborde ?`,
      solution: `**1.** $V = 20 \\times 15 \\times 12 = 3\\,600$ cm³, soit $3{,}6$ L.

**2.** Le caillou prend la place d'une partie de l'eau, qui est poussée vers le haut : l'eau monte de $12{,}8 - 12 = 0{,}8$ cm. Le volume « gagné » au-dessus de l'ancien niveau est un pavé droit de $20$ cm sur $15$ cm sur $0{,}8$ cm, et il est égal au volume du caillou.
$V = 20 \\times 15 \\times 0{,}8 = 300 \\times 0{,}8 = 240$ cm³. Le caillou a un volume de $240$ cm³.

**3.** Espace libre au-dessus de l'eau : $15 - 12{,}8 = 2{,}2$ cm de hauteur, soit $20 \\times 15 \\times 2{,}2 = 660$ cm³.
$82 \\times 8 = 656$ cm³ $\\leqslant 660$ cm³ et $83 \\times 8 = 664$ cm³ $> 660$ cm³.
Chloé peut ajouter au maximum $82$ billes.`
    },
    {
      id: "6M3-ds-12",
      title: "La boîte sans couvercle la plus grande",
      difficulty: 4,
      points: 6,
      statement: `On dispose d'une plaque de carton rectangulaire de $30$ cm sur $20$ cm. Dans chaque coin, on découpe un carré de même côté, puis on relève les bords pour obtenir une boîte sans couvercle en forme de pavé droit.

1. On découpe des carrés de $2$ cm de côté.
   a) Expliquer pourquoi le fond de la boîte mesure $26$ cm sur $16$ cm. Quelle est la hauteur de la boîte ?
   b) Calculer le volume de la boîte.
2. Recopier et compléter le tableau (côté du carré découpé en cm, volume en cm³) :

| Côté du carré | 1 | 2 | 3 | 4 | 5 |
|:---|:---:|:---:|:---:|:---:|:---:|
| Longueur du fond | | 26 | | | |
| Largeur du fond | | 16 | | | |
| Volume | | | | | |

3. Parmi ces valeurs, quel côté faut-il choisir pour obtenir la boîte de plus grand volume ?
4. Peut-on découper des carrés de $10$ cm de côté ? Justifier.`,
      solution: `**1.** a) On enlève $2$ cm à chaque bout de la longueur et de la largeur : $30 - 2 - 2 = 26$ cm et $20 - 2 - 2 = 16$ cm. En relevant les bords, la hauteur de la boîte est le côté du carré découpé, soit $2$ cm.
b) $V = 26 \\times 16 \\times 2 = 832$ cm³.

**2.** Pour un côté $c$ : longueur $30 - 2 \\times c$, largeur $20 - 2 \\times c$, hauteur $c$.

| Côté du carré | 1 | 2 | 3 | 4 | 5 |
|:---|:---:|:---:|:---:|:---:|:---:|
| Longueur du fond | 28 | 26 | 24 | 22 | 20 |
| Largeur du fond | 18 | 16 | 14 | 12 | 10 |
| Volume | 504 | 832 | 1 008 | 1 056 | 1 000 |

(Par exemple, pour $4$ cm : $22 \\times 12 \\times 4 = 1\\,056$ cm³.)

**3.** Le plus grand volume du tableau est $1\\,056$ cm³ : il faut découper des carrés de $4$ cm de côté.

**4.** Non : la largeur du fond serait $20 - 10 - 10 = 0$ cm. Il n'y aurait plus de fond, donc plus de boîte.`
    },
    {
      id: "6M3-ds-13",
      title: "Le bac à glaçons",
      difficulty: 1,
      points: 4,
      statement: `On rappelle que $1$ L $= 1\\,000$ cm³ et que $1$ L $= 100$ cL.

Un bac à glaçons permet de fabriquer $12$ glaçons. Chaque glaçon a la forme d'un cube de $3$ cm d'arête. On considère que l'eau versée a le même volume que les glaçons obtenus.

1. Combien de petits cubes de $1$ cm d'arête faudrait-il pour construire un glaçon ? Expliquer.
2. Calculer le volume d'un glaçon, en cm³.
3. Calculer le volume d'eau nécessaire pour remplir le bac, en cm³.
4. a) Combien de cm³ y a-t-il dans $1$ cL ?
   b) Exprimer le volume d'eau de la question 3 en cL.`,
      solution: `**1.** Un glaçon peut être découpé en $3$ couches ; chaque couche contient $3 \\times 3 = 9$ petits cubes. Il faut donc $3 \\times 9 = 27$ petits cubes de $1$ cm d'arête.

**2.** $V = 3 \\times 3 \\times 3 = 27$ cm³ (on retrouve les $27$ cubes de $1$ cm³).

**3.** $12 \\times 27 = 324$ cm³.

**4.** a) $1$ L $= 1\\,000$ cm³ $= 100$ cL, donc $1$ cL $= 1\\,000 \\div 100 = 10$ cm³.
b) $324 \\div 10 = 32{,}4$ cL. Il faut $32{,}4$ cL d'eau.`
    },
    {
      id: "6M3-ds-14",
      title: "Quelle boîte pour le riz ?",
      difficulty: 2,
      points: 5,
      statement: `On rappelle que $1$ L $= 1\\,000$ cm³.

Un magasin vend du riz en paquets de $1{,}1$ L. On dispose de trois boîtes en forme de pavé droit :
- boîte A : $10$ cm sur $10$ cm sur $10$ cm ;
- boîte B : $20$ cm sur $5$ cm sur $12$ cm ;
- boîte C : $25$ cm sur $8$ cm sur $5$ cm.

1. Calculer le volume de chaque boîte, en cm³.
2. Deux boîtes ont le même volume. Lesquelles ? Ont-elles la même forme ?
3. Exprimer le volume de chaque boîte en litres.
4. Dans quelle(s) boîte(s) peut-on verser entièrement un paquet de riz ? Justifier.
5. On veut fabriquer une boîte D dont le fond est un rectangle de $8$ cm sur $10$ cm et qui contienne exactement $1{,}2$ L. Quelle doit être sa hauteur ?`,
      solution: `**1.**
- $V_A = 10 \\times 10 \\times 10 = 1\\,000$ cm³ ;
- $V_B = 20 \\times 5 \\times 12 = 1\\,200$ cm³ ;
- $V_C = 25 \\times 8 \\times 5 = 1\\,000$ cm³.

**2.** Les boîtes A et C ont le même volume ($1\\,000$ cm³), mais pas la même forme : A est un cube, C est un pavé allongé et plat.

**3.** $V_A = 1$ L ; $V_B = 1\\,200 \\div 1\\,000 = 1{,}2$ L ; $V_C = 1$ L.

**4.** Un paquet contient $1{,}1$ L, soit $1\\,100$ cm³. Seule la **boîte B** convient, car $1{,}2$ L $> 1{,}1$ L, alors que les boîtes A et C ne contiennent que $1$ L.

**5.** $1{,}2$ L $= 1\\,200$ cm³. L'aire du fond est $8 \\times 10 = 80$ cm². Il faut $80 \\times$ hauteur $= 1\\,200$, donc hauteur $= 1\\,200 \\div 80 = 15$ cm.
(Vérification : $8 \\times 10 \\times 15 = 1\\,200$ cm³.)`
    },
    {
      id: "6M3-ds-15",
      title: "La cuve de récupération d'eau de pluie",
      difficulty: 3,
      points: 5,
      statement: `On rappelle que $1$ m³ $= 1\\,000$ L.

Dans son jardin, Maxime installe une cuve en forme de pavé droit pour récupérer l'eau de pluie. Elle mesure $2$ m de long, $1{,}5$ m de large et $1{,}2$ m de haut.

1. Calculer le volume de la cuve, en m³, puis en litres.
2. En été, Maxime utilise $150$ L d'eau par jour pour arroser. La cuve étant pleine au départ et sans pluie, pendant combien de jours peut-il arroser ?
3. Un matin, l'eau atteint une hauteur de $80$ cm dans la cuve. Combien de litres d'eau contient-elle ?
4. a) Calculer l'aire du fond de la cuve, en m².
   b) Un orage apporte $600$ L d'eau dans la cuve. De combien de centimètres le niveau de l'eau monte-t-il ?`,
      solution: `**1.** $V = 2 \\times 1{,}5 \\times 1{,}2 = 3 \\times 1{,}2 = 3{,}6$ m³.
$3{,}6$ m³ $= 3{,}6 \\times 1\\,000 = 3\\,600$ L.

**2.** $3\\,600 \\div 150 = 24$. Il peut arroser pendant **$24$ jours**.

**3.** $80$ cm $= 0{,}8$ m. Volume d'eau : $2 \\times 1{,}5 \\times 0{,}8 = 3 \\times 0{,}8 = 2{,}4$ m³, soit $2\\,400$ L.

**4.** a) Aire du fond : $2 \\times 1{,}5 = 3$ m².
b) $600$ L $= 0{,}6$ m³. L'eau ajoutée forme un pavé de fond $3$ m² : sa hauteur $h$ vérifie $3 \\times h = 0{,}6$, donc $h = 0{,}6 \\div 3 = 0{,}2$ m.
Le niveau monte de **$20$ cm**. (Vérification : $2 \\times 1{,}5 \\times 0{,}2 = 0{,}6$ m³ $= 600$ L.)`
    },
    {
      id: "6M3-ds-16",
      title: "Modeler la pâte",
      difficulty: 4,
      points: 6,
      statement: `Inès a un bloc de pâte à modeler en forme de cube de $6$ cm d'arête. Elle le remodèle plusieurs fois, sans perdre ni ajouter de pâte : le volume reste donc toujours le même.

1. Calculer le volume du bloc, en cm³.
2. Elle en fait un pavé droit dont le fond est un rectangle de $9$ cm sur $4$ cm. Quelle est la hauteur de ce pavé ?
3. Elle l'aplatit ensuite en une plaque en forme de pavé droit de $12$ cm sur $9$ cm. Quelle est l'épaisseur de la plaque ?
4. Elle découpe enfin toute la pâte en petits cubes de $2$ cm d'arête.
   a) Quel est le volume d'un petit cube ?
   b) Combien de petits cubes obtient-elle ? Retrouver ce résultat en imaginant le grand cube de départ découpé.
5. Son frère veut fabriquer un cube **deux fois plus volumineux** que le cube de départ, avec une arête mesurant un nombre entier de centimètres. Est-ce possible ? Justifier en calculant quelques volumes de cubes.`,
      solution: `**1.** $V = 6 \\times 6 \\times 6 = 216$ cm³.

**2.** Aire du fond : $9 \\times 4 = 36$ cm². Hauteur : $216 \\div 36 = 6$ cm. (Vérification : $9 \\times 4 \\times 6 = 216$.)

**3.** Aire de la plaque : $12 \\times 9 = 108$ cm². Épaisseur : $216 \\div 108 = 2$ cm.

**4.** a) $2 \\times 2 \\times 2 = 8$ cm³.
b) $216 \\div 8 = 27$ petits cubes.
Autre méthode : sur chaque arête du cube de $6$ cm, on place $6 \\div 2 = 3$ petits cubes, donc $3 \\times 3 \\times 3 = 27$ petits cubes. On retrouve $27$.

**5.** Il faudrait un volume de $2 \\times 216 = 432$ cm³.
$7 \\times 7 \\times 7 = 343$ cm³ (trop petit) et $8 \\times 8 \\times 8 = 512$ cm³ (trop grand).
Aucun nombre entier entre $7$ et $8$ : ce **n'est pas possible** avec une arête entière (l'arête serait comprise entre $7$ et $8$ cm). Doubler l'arête ne convient pas non plus : on obtiendrait $12 \\times 12 \\times 12 = 1\\,728$ cm³, soit $8$ fois plus.`
    }
  ],
  "6M4": [
    {
      id: "6M4-ds-01",
      title: "Conversions de durées",
      difficulty: 1,
      points: 4,
      statement: `On rappelle que $1$ h $= 60$ min et $1$ min $= 60$ s.

1. Convertir en minutes : a) $3$ h ; b) $2$ h $15$ min ; c) $1$ h $45$ min.
2. Convertir en heures et minutes : a) $200$ min ; b) $95$ min.
3. Convertir en secondes : a) $4$ min $30$ s ; b) $1$ h.`,
      solution: `**1.** a) $3 \\times 60 = 180$ min.
b) $2 \\times 60 + 15 = 120 + 15 = 135$ min.
c) $60 + 45 = 105$ min.

**2.** a) $200 = 3 \\times 60 + 20$, donc $200$ min $= 3$ h $20$ min.
b) $95 = 60 + 35$, donc $95$ min $= 1$ h $35$ min.

**3.** a) $4 \\times 60 + 30 = 240 + 30 = 270$ s.
b) $1$ h $= 60$ min $= 60 \\times 60 = 3\\,600$ s.`
    },
    {
      id: "6M4-ds-02",
      title: "Durée d'un film et heure d'arrivée",
      difficulty: 1,
      points: 4,
      statement: `1. Un film commence à $20$ h $45$ et se termine à $22$ h $38$. Calculer sa durée.
2. Un train part à $9$ h $47$ et le trajet dure $2$ h $25$ min. À quelle heure arrive-t-il ?
3. Une émission de $50$ min se termine à $18$ h $10$. À quelle heure a-t-elle commencé ?`,
      solution: `**1.** On compte par étapes : de $20$ h $45$ à $21$ h : $15$ min ; de $21$ h à $22$ h : $1$ h ; de $22$ h à $22$ h $38$ : $38$ min.
Durée : $1$ h $+ 15$ min $+ 38$ min $= 1$ h $53$ min.

**2.** $9$ h $47$ min $+ 2$ h $25$ min $= 11$ h $72$ min. Or $72$ min $= 1$ h $12$ min, donc le train arrive à $12$ h $12$.

**3.** $18$ h $10$ min $- 50$ min : on retire d'abord $10$ min pour arriver à $18$ h, puis encore $40$ min : $17$ h $20$. L'émission a commencé à $17$ h $20$.`
    },
    {
      id: "6M4-ds-03",
      title: "Une matinée au collège",
      difficulty: 2,
      points: 5,
      statement: `Au collège de Sofia, les cours du matin commencent à $8$ h $05$. Chaque cours dure $55$ min. Il y a deux cours, puis une récréation de $15$ min, puis deux autres cours. Il n'y a pas de pause entre deux cours.

1. À quelle heure se termine le premier cours ? Le deuxième ?
2. À quelle heure se termine la récréation ?
3. À quelle heure se termine la matinée ?
4. Combien de temps Sofia passe-t-elle en cours pendant la matinée ? Donner la réponse en heures et minutes.`,
      solution: `**1.** $8$ h $05 + 55$ min $= 8$ h $60$ min $= 9$ h $00$. Le premier cours se termine à $9$ h.
$9$ h $+ 55$ min $= 9$ h $55$. Le deuxième cours se termine à $9$ h $55$.

**2.** $9$ h $55 + 15$ min $= 9$ h $70$ min $= 10$ h $10$.

**3.** $10$ h $10 + 55$ min $= 11$ h $05$, puis $11$ h $05 + 55$ min $= 12$ h $00$. La matinée se termine à midi.

**4.** $4 \\times 55 = 220$ min et $220 = 3 \\times 60 + 40$. Sofia passe $3$ h $40$ min en cours.`
    },
    {
      id: "6M4-ds-04",
      title: "Le gâteau du goûter",
      difficulty: 2,
      points: 4,
      statement: `Pour un goûter prévu à $16$ h $30$, Hugo prépare un gâteau. La préparation dure $25$ min, la cuisson $35$ min et le gâteau doit refroidir pendant $20$ min avant d'être servi.

1. Quelle est la durée totale entre le début de la préparation et le moment où le gâteau peut être servi ?
2. À quelle heure Hugo doit-il commencer, au plus tard ?
3. Hugo commence finalement à $14$ h $50$. Combien de temps le gâteau attendra-t-il avant le goûter, une fois refroidi ?`,
      solution: `**1.** $25 + 35 + 20 = 80$ min, et $80$ min $= 1$ h $20$ min.

**2.** On remonte le temps : $16$ h $30 - 1$ h $20$ min $= 15$ h $10$. Hugo doit commencer au plus tard à $15$ h $10$.

**3.** $14$ h $50 + 1$ h $20$ min $= 15$ h $70$ min $= 16$ h $10$. Le gâteau est prêt à $16$ h $10$.
De $16$ h $10$ à $16$ h $30$, il y a $20$ min. Le gâteau attendra $20$ minutes.`
    },
    {
      id: "6M4-ds-05",
      title: "Prendre le bus pour le collège",
      difficulty: 3,
      points: 5,
      statement: `Voici une partie des horaires du bus que prend Nina pour aller au collège :

| Arrêt | Bus 1 | Bus 2 | Bus 3 |
|:---|:---:|:---:|:---:|
| Gare | 7 h 12 | 7 h 42 | 8 h 12 |
| Mairie | 7 h 21 | 7 h 51 | 8 h 21 |
| Collège | 7 h 36 | 8 h 06 | 8 h 36 |

Nina monte à l'arrêt « Gare ». Ses cours commencent à $8$ h $15$.

1. Combien de temps dure le trajet de la Gare au Collège ?
2. Quel est le dernier bus que Nina peut prendre pour être à l'heure ?
3. Nina met $7$ min pour aller à pied de chez elle à la gare. À quelle heure doit-elle partir de chez elle, au plus tard ?
4. Avec ce bus, combien de temps s'écoule-t-il entre son départ de chez elle et le début des cours ?`,
      solution: `**1.** De $7$ h $12$ à $7$ h $36$ : $36 - 12 = 24$ min. Le trajet dure $24$ min.

**2.** Le bus 3 arrive à $8$ h $36$, après le début des cours ($8$ h $15$). Le bus 2 arrive à $8$ h $06$, avant $8$ h $15$. Le dernier bus possible est le bus 2, qui part de la gare à $7$ h $42$.

**3.** $7$ h $42 - 7$ min $= 7$ h $35$. Nina doit partir au plus tard à $7$ h $35$.

**4.** De $7$ h $35$ à $8$ h : $25$ min ; de $8$ h à $8$ h $15$ : $15$ min. Il s'écoule $25 + 15 = 40$ min.`
    },
    {
      id: "6M4-ds-06",
      title: "Le sommeil de Paul",
      difficulty: 3,
      points: 5,
      statement: `Les jours d'école, Paul se couche à $21$ h $40$ et se lève à $6$ h $55$ le lendemain matin.

1. Calculer la durée de sommeil de Paul pendant une nuit.
2. Combien de temps Paul dort-il en tout pendant $5$ nuits d'école ? Donner le résultat en heures et minutes.
3. Les médecins conseillent à un enfant de son âge de dormir $10$ h par nuit. Combien de temps de sommeil manque-t-il à Paul sur ces $5$ nuits ?
4. À quelle heure Paul devrait-il se coucher pour dormir $10$ h, s'il se lève toujours à $6$ h $55$ ?`,
      solution: `**1.** De $21$ h $40$ à $22$ h : $20$ min ; de $22$ h à $6$ h : $8$ h ; de $6$ h à $6$ h $55$ : $55$ min.
Durée : $8$ h $+ 20$ min $+ 55$ min $= 8$ h $75$ min $= 9$ h $15$ min.

**2.** $5 \\times 9$ h $15$ min $= 45$ h $75$ min $= 46$ h $15$ min.

**3.** Il manque $10$ h $- 9$ h $15$ min $= 45$ min par nuit, donc $5 \\times 45 = 225$ min sur $5$ nuits.
$225 = 3 \\times 60 + 45$ : il manque $3$ h $45$ min de sommeil.

**4.** On remonte le temps de $10$ h à partir de $6$ h $55$ : remonter de $12$ h donne $18$ h $55$ la veille, puis on avance de $2$ h : $20$ h $55$.
Vérification : de $20$ h $55$ à $6$ h $55$, il y a bien $10$ h. Paul devrait se coucher à $20$ h $55$.`
    },
    {
      id: "6M4-ds-07",
      title: "Le triathlon",
      difficulty: 4,
      points: 6,
      statement: `Lors d'un triathlon, Camille a réalisé les temps suivants :
- natation : $18$ min $45$ s ;
- vélo : $1$ h $12$ min $30$ s ;
- course à pied : $41$ min $50$ s.

1. Calculer le temps total de Camille, en heures, minutes et secondes.
2. Le départ a été donné à $9$ h $30$ min $0$ s. À quelle heure Camille a-t-elle franchi la ligne d'arrivée ?
3. Son amie Inès, partie en même temps, est arrivée à $11$ h $40$ min $20$ s. Quel est le temps total d'Inès ? Laquelle des deux a été la plus rapide, et de combien ?`,
      solution: `**1.** On additionne séparément les heures, les minutes et les secondes :
$18$ min $45$ s $+ 1$ h $12$ min $30$ s $+ 41$ min $50$ s $= 1$ h $71$ min $125$ s.
$125$ s $= 2$ min $5$ s, donc on obtient $1$ h $73$ min $5$ s ; et $73$ min $= 1$ h $13$ min.
Temps total : $2$ h $13$ min $5$ s.

**2.** $9$ h $30$ min $+ 2$ h $13$ min $5$ s $= 11$ h $43$ min $5$ s.
Camille est arrivée à $11$ h $43$ min $5$ s.

**3.** De $9$ h $30$ min $0$ s à $11$ h $40$ min $20$ s : $2$ h $10$ min $20$ s. C'est le temps d'Inès.
Inès est arrivée avant Camille : elle a été la plus rapide.
Écart : de $11$ h $40$ min $20$ s à $11$ h $43$ min $5$ s, il y a $40$ s pour atteindre $11$ h $41$ min, puis $2$ min $5$ s, soit $2$ min $45$ s.`
    },
    {
      id: "6M4-ds-08",
      title: "Arriver à l'heure au rendez-vous",
      difficulty: 4,
      points: 6,
      statement: `Maëlle a rendez-vous à $10$ h $30$ dans une ville voisine. Elle prend le train puis le bus.
- Le trajet en train dure $1$ h $48$ min. Deux trains sont possibles : départ à $7$ h $37$ ou à $8$ h $07$.
- De la gare, il faut $12$ min de marche pour rejoindre l'arrêt de bus.
- Les bus partent toutes les $20$ minutes, à chaque heure pile, à « … h $20$ » et à « … h $40$ ». Le trajet en bus dure $14$ min.

1. Si Maëlle prend le train de $8$ h $07$, à quelle heure arrive-t-elle à la gare ? À l'arrêt de bus ?
2. Quel bus prendra-t-elle alors ? Sera-t-elle à l'heure à son rendez-vous ? Justifier.
3. Reprendre le même travail avec le train de $7$ h $37$. Combien de temps Maëlle devra-t-elle attendre avant son rendez-vous ?`,
      solution: `**1.** $8$ h $07 + 1$ h $48$ min $= 9$ h $55$ min. Elle arrive à la gare à $9$ h $55$.
$9$ h $55 + 12$ min $= 10$ h $07$. Elle arrive à l'arrêt de bus à $10$ h $07$.

**2.** Le bus de $10$ h $00$ est déjà parti : elle prend celui de $10$ h $20$.
$10$ h $20 + 14$ min $= 10$ h $34$. Elle arrivera à $10$ h $34$, soit $4$ min de retard : elle ne sera pas à l'heure.

**3.** Train de $7$ h $37$ : arrivée en gare à $7$ h $37 + 1$ h $48$ min $= 9$ h $25$, à l'arrêt de bus à $9$ h $37$.
Elle prend le bus de $9$ h $40$ et arrive à $9$ h $40 + 14$ min $= 9$ h $54$.
De $9$ h $54$ à $10$ h $30$, il y a $6 + 30 = 36$ min. Maëlle sera à l'heure et attendra $36$ minutes.`
    },
    {
      id: "6M4-ds-09",
      title: "Dates, siècles et calendrier",
      difficulty: 1,
      points: 4,
      statement: `1. Dans quel siècle se situe chacune des années suivantes ? Écrire la réponse en chiffres romains.
   a) $1789$ ; b) $2026$ ; c) $1600$.
2. Combien d'années se sont écoulées entre $1492$ et $2026$ ?
3. Une année, le 3 mars tombe un mardi. On rappelle que le mois de mars compte $31$ jours.
   a) Combien de jours y a-t-il du 3 mars au 17 avril de la même année ?
   b) Quel jour de la semaine sera le 17 avril ? Justifier.`,
      solution: `**1.** Le premier siècle va de l'an $1$ à l'an $100$, le deuxième de $101$ à $200$, etc.
a) $1789$ est entre $1701$ et $1800$ : c'est le XVIIIe siècle.
b) $2026$ est entre $2001$ et $2100$ : c'est le XXIe siècle.
c) $1600$ est la dernière année du siècle qui va de $1501$ à $1600$ : c'est le XVIe siècle.

**2.** $2026 - 1492 = 534$. Il s'est écoulé $534$ ans.

**3.** a) Du 3 mars au 31 mars : $31 - 3 = 28$ jours ; puis du 31 mars au 17 avril : $17$ jours. En tout : $28 + 17 = 45$ jours.
b) $45 = 6 \\times 7 + 3$ : $45$ jours, c'est $6$ semaines et $3$ jours. Après $6$ semaines, on est de nouveau un mardi ; $3$ jours plus tard, c'est un **vendredi**.`
    },
    {
      id: "6M4-ds-10",
      title: "Le relais du cross",
      difficulty: 2,
      points: 5,
      statement: `Une équipe de quatre élèves court un relais. Chacun parcourt $800$ m. Voici leurs temps :

| Coureur | Adam | Lou | Malik | Sarah |
|:---|:---:|:---:|:---:|:---:|
| Temps | 2 min 35 s | 2 min 48 s | 2 min 29 s | 2 min 51 s |

1. Convertir le temps d'Adam en secondes.
2. Quel est le coureur le plus rapide ? Quel est l'écart, en secondes, entre le plus rapide et le plus lent ?
3. Calculer le temps total de l'équipe, en minutes et secondes.
4. L'équipe gagnante a mis $10$ min $31$ s. Combien de secondes de plus l'équipe d'Adam a-t-elle mis ?`,
      solution: `**1.** $2$ min $35$ s $= 2 \\times 60 + 35 = 120 + 35 = 155$ s.

**2.** Le plus petit temps est celui de Malik ($2$ min $29$ s) : c'est le plus rapide. Le plus lent est Sarah ($2$ min $51$ s).
Écart : $51 - 29 = 22$ s.

**3.** On additionne les minutes et les secondes séparément : $2 + 2 + 2 + 2 = 8$ min et $35 + 48 + 29 + 51 = 163$ s.
$163$ s $= 2 \\times 60 + 43 = 2$ min $43$ s. Temps total : $8$ min $+ 2$ min $43$ s $= 10$ min $43$ s.

**4.** $10$ min $43$ s $- 10$ min $31$ s $= 12$ s. L'équipe d'Adam a mis $12$ secondes de plus.`
    },
    {
      id: "6M4-ds-11",
      title: "Le voyage à Montréal",
      difficulty: 3,
      points: 5,
      statement: `Quand il est $12$ h à Paris, il est $6$ h à Montréal : l'heure de Montréal a $6$ h de moins que celle de Paris.
Jules prend l'avion à Paris à $13$ h $40$ (heure de Paris). Le vol dure $7$ h $35$ min.

1. À quelle heure arrive-t-il, en heure de Paris ?
2. Quelle heure est-il alors à Montréal ?
3. Jules écrit à sa grand-mère : « Je suis parti à $13$ h $40$ et arrivé à $15$ h $15$, le vol n'a duré qu'$1$ h $35$ min ! » Expliquer son erreur.
4. Pour le retour, l'avion décolle de Montréal à $22$ h $10$ (heure de Montréal) et le vol dure $6$ h $50$ min. À quelle heure, en heure de Paris, Jules arrive-t-il à Paris ?`,
      solution: `**1.** $13$ h $40 + 7$ h $35$ min $= 20$ h $75$ min $= 21$ h $15$. Il arrive à $21$ h $15$, heure de Paris.

**2.** $21$ h $15 - 6$ h $= 15$ h $15$. Il est $15$ h $15$ à Montréal.

**3.** Jules a soustrait deux horaires qui ne sont pas lus sur la même horloge : $13$ h $40$ est une heure de Paris et $15$ h $15$ une heure de Montréal. Pour calculer une durée, il faut exprimer les deux horaires dans le même fuseau : en heure de Paris, de $13$ h $40$ à $21$ h $15$, il s'écoule bien $7$ h $35$ min.

**4.** Au décollage, il est $22$ h $10 + 6$ h $= 28$ h $10$ à Paris, c'est-à-dire $4$ h $10$ le lendemain.
$4$ h $10 + 6$ h $50$ min $= 10$ h $60$ min $= 11$ h. Jules arrive à Paris à $11$ h (heure de Paris), le lendemain du décollage.`
    },
    {
      id: "6M4-ds-12",
      title: "L'horloge qui avance",
      difficulty: 4,
      points: 6,
      statement: `Un lundi à $8$ h $00$, Inès règle exactement l'horloge de sa cuisine. Mais cette horloge avance régulièrement de $3$ minutes par jour (toutes les $24$ heures).

1. Quelle heure affichera l'horloge le jeudi suivant, quand il sera réellement $8$ h $00$ ?
2. Au bout de combien de jours l'horloge aura-t-elle exactement $1$ h d'avance ?
3. Quel jour de la semaine cela se produira-t-il ? Justifier.
4. Si Inès ne la règle jamais, quelle avance l'horloge aura-t-elle au bout d'une année de $365$ jours ? Donner le résultat en heures et minutes.
5. Quelle avance l'horloge prend-elle en $8$ heures réelles ? Donner le résultat en secondes.`,
      solution: `**1.** Du lundi $8$ h au jeudi $8$ h, il s'écoule $3$ jours. L'horloge a pris $3 \\times 3 = 9$ min d'avance : elle affiche $8$ h $09$.

**2.** $1$ h $= 60$ min et $60 \\div 3 = 20$. L'horloge aura $1$ h d'avance au bout de $20$ jours.

**3.** $20 = 2 \\times 7 + 6$ : $20$ jours, c'est $2$ semaines et $6$ jours. Après $2$ semaines, on est de nouveau un lundi ; $6$ jours plus tard, c'est un **dimanche**.

**4.** $365 \\times 3 = 1\\,095$ min. Or $1\\,095 = 18 \\times 60 + 15$, donc l'avance est de $18$ h $15$ min.

**5.** $8$ heures, c'est le tiers d'une journée ($24 \\div 3 = 8$). L'avance est donc le tiers de $3$ min, soit $1$ min, c'est-à-dire $60$ secondes.`
    },
    {
      id: "6M4-ds-13",
      title: "En cuisine",
      difficulty: 1,
      points: 4,
      statement: `1. Hugo met des pâtes à cuire à $12$ h $52$. Elles doivent cuire $11$ min. À quelle heure doit-il les égoutter ?
2. Un rôti doit cuire $1$ h $40$ min et être prêt à $13$ h $15$. À quelle heure faut-il le mettre au four ?
3. Convertir en minutes : un quart d'heure ; une demi-heure ; trois quarts d'heure.
4. Tom affirme : « $1{,}5$ h, c'est $1$ h $50$ min. » A-t-il raison ? Corriger si nécessaire.`,
      solution: `**1.** $12$ h $52$ + $8$ min $= 13$ h $00$, puis $+ 3$ min (car $11 = 8 + 3$) : il égoutte les pâtes à **$13$ h $03$**.

**2.** On remonte le temps : $13$ h $15 - 1$ h $= 12$ h $15$, puis $12$ h $15 - 15$ min $= 12$ h $00$, puis $12$ h $00 - 25$ min $= 11$ h $35$ (car $40 = 15 + 25$).
Il faut mettre le rôti au four à **$11$ h $35$**. (Vérification : $11$ h $35 + 1$ h $40$ min $= 13$ h $15$.)

**3.** Une heure dure $60$ min :
- un quart d'heure : $60 \\div 4 = 15$ min ;
- une demi-heure : $60 \\div 2 = 30$ min ;
- trois quarts d'heure : $3 \\times 15 = 45$ min.

**4.** Tom a tort. $1{,}5$ h $= 1$ h $+ 0{,}5$ h, et $0{,}5$ h est une demi-heure, soit $30$ min.
Donc $1{,}5$ h $= 1$ h $30$ min (et non $1$ h $50$ min) : dans une durée, les minutes ne se comptent pas en centièmes d'heure.`
    },
    {
      id: "6M4-ds-14",
      title: "Le calendrier du club",
      difficulty: 2,
      points: 5,
      statement: `Une année non bissextile compte $365$ jours. Les mois de janvier et mars ont $31$ jours ; février en a $28$ ; avril en a $30$.

1. Un stage de football a lieu du lundi $18$ avril au vendredi $29$ avril, ces deux jours compris. Combien de jours dure le stage ?
2. Le club organise un tournoi trois semaines après le mardi $7$ mars. Quelle est la date du tournoi ? Quel jour de la semaine sera-t-il ?
3. Combien de semaines complètes y a-t-il dans une année non bissextile ? Combien reste-t-il de jours ?
4. Le président lance un défi : courir chaque jour pendant $100$ jours, en commençant le $1^\\text{er}$ janvier (premier jour du défi). Quelle sera la date du dernier jour du défi ?`,
      solution: `**1.** Du $18$ au $29$ avril, ces deux jours compris : $29 - 18 + 1 = 12$ jours.
(Attention : $29 - 18 = 11$ compte les « intervalles » entre les jours ; il faut ajouter le premier jour.)

**2.** Trois semaines font $3 \\times 7 = 21$ jours. $7 + 21 = 28$ : le tournoi a lieu le **mardi $28$ mars** (après un nombre entier de semaines, on retombe sur le même jour de la semaine). Comme mars a $31$ jours, on reste bien en mars.

**3.** $365 = 7 \\times 52 + 1$. Il y a **$52$ semaines complètes** et il reste **$1$ jour**.

**4.** Le $1^\\text{er}$ janvier est le jour $1$ du défi. On compte les jours :
- janvier : jours $1$ à $31$ ;
- février : $28$ jours, on arrive au jour $31 + 28 = 59$ (le $28$ février) ;
- mars : $31$ jours, on arrive au jour $59 + 31 = 90$ (le $31$ mars).
Il reste $100 - 90 = 10$ jours en avril : le dernier jour du défi est le **$10$ avril**.`
    },
    {
      id: "6M4-ds-15",
      title: "Programmer les appareils la nuit",
      difficulty: 3,
      points: 5,
      statement: `Dans la maison de Léna, l'électricité coûte moins cher pendant les « heures creuses », de $22$ h $30$ à $6$ h $30$ le lendemain matin.

1. Combien de temps durent les heures creuses ?
2. Le lave-linge a un programme qui dure $2$ h $35$ min. Léna veut que le linge soit prêt à $7$ h $15$ du matin.
   a) À quelle heure le lave-linge doit-il démarrer ?
   b) Il est $22$ h $40$. Le lave-linge possède un bouton « départ différé » qui retarde le démarrage d'un nombre entier d'heures. Quel retard faut-il choisir ?
   c) Le lavage se fait-il entièrement pendant les heures creuses ?
3. Le lave-vaisselle a un programme de $3$ h $20$ min.
   a) S'il démarre à $23$ h $50$, à quelle heure s'arrête-t-il ?
   b) Quelle est l'heure de démarrage la plus tardive pour que tout le programme soit en heures creuses ?`,
      solution: `**1.** De $22$ h $30$ à minuit : $1$ h $30$ min. De minuit à $6$ h $30$ : $6$ h $30$ min.
Total : $1$ h $30$ min $+ 6$ h $30$ min $= 8$ h. Les heures creuses durent **$8$ h**.

**2.** a) $7$ h $15 - 2$ h $= 5$ h $15$, puis $5$ h $15 - 35$ min $= 4$ h $40$. Le lave-linge doit démarrer à **$4$ h $40$**.
b) De $22$ h $40$ à $4$ h $40$ le lendemain, il s'écoule $1$ h $20$ min (jusqu'à minuit) $+ 4$ h $40$ min $= 6$ h. Il faut choisir un départ différé de **$6$ heures**.
c) Le lavage a lieu de $4$ h $40$ à $7$ h $15$. Or les heures creuses s'arrêtent à $6$ h $30$ : **non**, les $45$ dernières minutes (de $6$ h $30$ à $7$ h $15$) sont en heures pleines.

**3.** a) $23$ h $50 + 3$ h $= 2$ h $50$, puis $2$ h $50 + 20$ min $= 3$ h $10$. Il s'arrête à **$3$ h $10$** (le lendemain).
b) Il doit finir au plus tard à $6$ h $30$ : $6$ h $30 - 3$ h $20$ min $= 3$ h $10$. Il doit démarrer au plus tard à **$3$ h $10$**.`
    },
    {
      id: "6M4-ds-16",
      title: "Le voyage en autocar",
      difficulty: 4,
      points: 6,
      statement: `Pour un voyage scolaire, l'autocar doit rouler $7$ h $30$ min au total. Le règlement impose au conducteur une pause de $15$ min après chaque période complète de $2$ h de conduite. L'autocar part à $6$ h $50$.

1. Recopier et compléter le tableau du trajet.

| Étape | Durée | Heure à la fin de l'étape |
|:---|:---:|:---:|
| Conduite n° 1 | $2$ h | |
| Pause n° 1 | $15$ min | |
| Conduite n° 2 | $2$ h | |
| Pause n° 2 | $15$ min | |
| Conduite n° 3 | $2$ h | |
| Pause n° 3 | $15$ min | |
| Conduite n° 4 | | |

2. Pourquoi n'y a-t-il pas de pause après la conduite n° 4 ?
3. Quelle est la durée totale du voyage, pauses comprises ? À quelle heure l'autocar arrive-t-il ?
4. Les élèves doivent arriver au plus tard à $14$ h $30$. À quelle heure l'autocar aurait-il dû partir, au plus tard ?
5. Finalement, la pause n° 2 est remplacée par une pause déjeuner de $45$ min (l'autocar repart toujours à $6$ h $50$). À quelle heure arrive-t-il ?`,
      solution: `**1.** La dernière conduite dure $7$ h $30$ min $- 3 \\times 2$ h $= 1$ h $30$ min.

| Étape | Durée | Heure à la fin de l'étape |
|:---|:---:|:---:|
| Conduite n° 1 | $2$ h | $8$ h $50$ |
| Pause n° 1 | $15$ min | $9$ h $05$ |
| Conduite n° 2 | $2$ h | $11$ h $05$ |
| Pause n° 2 | $15$ min | $11$ h $20$ |
| Conduite n° 3 | $2$ h | $13$ h $20$ |
| Pause n° 3 | $15$ min | $13$ h $35$ |
| Conduite n° 4 | $1$ h $30$ min | $15$ h $05$ |

**2.** La conduite n° 4 ne dure que $1$ h $30$ min : ce n'est pas une période complète de $2$ h. De plus, le voyage est terminé.

**3.** Durée totale : $7$ h $30$ min $+ 3 \\times 15$ min $= 7$ h $30$ min $+ 45$ min $= 8$ h $15$ min.
$6$ h $50 + 8$ h $15$ min $= 14$ h $65$ min $= 15$ h $05$ : l'autocar arrive à **$15$ h $05$** (comme dans le tableau).

**4.** Il faut retirer $8$ h $15$ min à $14$ h $30$ : $14$ h $30 - 8$ h $= 6$ h $30$, puis $6$ h $30 - 15$ min $= 6$ h $15$.
L'autocar aurait dû partir au plus tard à **$6$ h $15$** (Vérification : l'arrivée prévue à $15$ h $05$ dépasse $14$ h $30$ de $35$ min ; il faut donc partir $35$ min plus tôt que $6$ h $50$, soit à $6$ h $15$.).

**5.** La pause n° 2 dure $45$ min au lieu de $15$ min, soit $30$ min de plus. L'arrivée est retardée de $30$ min : $15$ h $05 + 30$ min, soit **$15$ h $35$**.
(Autre calcul : $7$ h $30$ min $+ 15 + 45 + 15$ min $= 8$ h $45$ min, et $6$ h $50 + 8$ h $45$ min $= 15$ h $35$.)`
    }
  ],
  "6D1": [
    {
      id: "6D1-ds-01",
      title: "Les sports préférés de la classe",
      difficulty: 1,
      points: 4,
      statement: `On a demandé à chaque élève d'une classe de 6e son sport préféré. Voici les résultats :

| Sport | Football | Basket | Natation | Danse | Autre |
|:---|:---:|:---:|:---:|:---:|:---:|
| Nombre d'élèves | 8 | 5 | 6 | 4 | 3 |

1. Quel est le sport préféré du plus grand nombre d'élèves ?
2. Combien d'élèves de plus ont choisi le football plutôt que la danse ?
3. Combien d'élèves y a-t-il dans la classe ?
4. Combien d'élèves ont choisi un sport collectif (football ou basket) ?`,
      solution: `**1.** Le plus grand nombre du tableau est $8$ : le football est le sport préféré du plus grand nombre d'élèves.

**2.** $8 - 4 = 4$. Quatre élèves de plus ont choisi le football plutôt que la danse.

**3.** On additionne tous les effectifs : $8 + 5 + 6 + 4 + 3 = 26$. Il y a $26$ élèves dans la classe.

**4.** $8 + 5 = 13$. $13$ élèves ont choisi un sport collectif.`
    },
    {
      id: "6D1-ds-02",
      title: "Lire un diagramme en barres",
      difficulty: 1,
      points: 4,
      statement: `Le diagramme en barres ci-dessous donne le nombre de livres empruntés au CDI du collège pendant quatre mois.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 340 235" width="340" height="235" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="50" y1="190" x2="320" y2="190" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="194" text-anchor="end" font-size="11" fill="currentColor">0</text><line x1="50" y1="170" x2="320" y2="170" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="174" text-anchor="end" font-size="11" fill="currentColor">10</text><line x1="50" y1="150" x2="320" y2="150" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="154" text-anchor="end" font-size="11" fill="currentColor">20</text><line x1="50" y1="130" x2="320" y2="130" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="134" text-anchor="end" font-size="11" fill="currentColor">30</text><line x1="50" y1="110" x2="320" y2="110" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="114" text-anchor="end" font-size="11" fill="currentColor">40</text><line x1="50" y1="90" x2="320" y2="90" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="94" text-anchor="end" font-size="11" fill="currentColor">50</text><line x1="50" y1="70" x2="320" y2="70" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="74" text-anchor="end" font-size="11" fill="currentColor">60</text><line x1="50" y1="50" x2="320" y2="50" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="54" text-anchor="end" font-size="11" fill="currentColor">70</text><line x1="50" y1="30" x2="320" y2="30" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="34" text-anchor="end" font-size="11" fill="currentColor">80</text><rect x="70" y="110" width="40" height="80" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="90" y="206" text-anchor="middle" font-size="12" fill="currentColor">Sept.</text><rect x="135" y="80" width="40" height="110" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="155" y="206" text-anchor="middle" font-size="12" fill="currentColor">Oct.</text><rect x="200" y="50" width="40" height="140" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="220" y="206" text-anchor="middle" font-size="12" fill="currentColor">Nov.</text><rect x="265" y="120" width="40" height="70" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="285" y="206" text-anchor="middle" font-size="12" fill="currentColor">Déc.</text><line x1="50" y1="190" x2="320" y2="190" stroke="var(--text-main, #334155)" stroke-width="2"/><line x1="50" y1="190" x2="50" y2="20" stroke="var(--text-main, #334155)" stroke-width="2"/><text x="12" y="14" font-size="11" fill="currentColor">Nombre de livres</text><text x="185" y="228" text-anchor="middle" font-size="11" fill="currentColor">Mois</text></svg></div>

1. Combien de livres ont été empruntés en octobre ?
2. Pendant quel mois a-t-on emprunté le plus de livres ? Le moins ?
3. Combien de livres de plus ont été empruntés en novembre qu'en septembre ?
4. Combien de livres ont été empruntés en tout pendant ces quatre mois ?`,
      solution: `On lit la hauteur de chaque barre sur l'axe vertical (une graduation représente $10$ livres) : septembre $40$, octobre $55$, novembre $70$, décembre $35$.

**1.** La barre d'octobre s'arrête entre $50$ et $60$, au milieu : $55$ livres ont été empruntés en octobre.

**2.** La barre la plus haute est celle de novembre ($70$ livres) ; la plus basse est celle de décembre ($35$ livres).

**3.** $70 - 40 = 30$. On a emprunté $30$ livres de plus en novembre qu'en septembre.

**4.** $40 + 55 + 70 + 35 = 200$. $200$ livres ont été empruntés en tout.`
    },
    {
      id: "6D1-ds-03",
      title: "Compléter un tableau à double entrée",
      difficulty: 2,
      points: 5,
      statement: `Le tableau suivant indique la répartition des élèves de 6e et de 5e d'un collège selon leur régime (demi-pensionnaire ou externe). Certaines cases sont vides.

| | Demi-pensionnaires | Externes | Total |
|:---|:---:|:---:|:---:|
| 6e | 92 | 38 | |
| 5e | 85 | | 120 |
| Total | | | |

1. Recopier et compléter le tableau en écrivant les calculs.
2. Combien d'élèves de 5e sont externes ?
3. Combien d'élèves sont demi-pensionnaires en tout ?
4. Y a-t-il plus d'élèves en 6e ou en 5e ? De combien ?`,
      solution: `**1.**
- Total des 6e : $92 + 38 = 130$.
- Externes de 5e : $120 - 85 = 35$.
- Total des demi-pensionnaires : $92 + 85 = 177$.
- Total des externes : $38 + 35 = 73$.
- Total général : $130 + 120 = 250$ (vérification : $177 + 73 = 250$).

| | Demi-pensionnaires | Externes | Total |
|:---|:---:|:---:|:---:|
| 6e | 92 | 38 | 130 |
| 5e | 85 | 35 | 120 |
| Total | 177 | 73 | 250 |

**2.** $35$ élèves de 5e sont externes.

**3.** $177$ élèves sont demi-pensionnaires.

**4.** $130 - 120 = 10$. Il y a $10$ élèves de plus en 6e qu'en 5e.`
    },
    {
      id: "6D1-ds-04",
      title: "Construire un diagramme en barres",
      difficulty: 2,
      points: 4,
      statement: `On a demandé aux élèves d'une classe quel animal de compagnie ils ont chez eux (un seul animal par élève, le principal) :

| Animal | Chat | Chien | Poisson | Lapin | Aucun |
|:---|:---:|:---:|:---:|:---:|:---:|
| Nombre d'élèves | 9 | 7 | 3 | 2 | 4 |

1. Combien d'élèves ont répondu ?
2. Combien d'élèves ont un animal ?
3. Construire le diagramme en barres correspondant, en prenant $1$ cm pour $1$ élève en hauteur. Préciser la hauteur de chaque barre.`,
      solution: `**1.** $9 + 7 + 3 + 2 + 4 = 25$. $25$ élèves ont répondu.

**2.** On retire ceux qui n'ont aucun animal : $25 - 4 = 21$ (ou $9 + 7 + 3 + 2 = 21$). $21$ élèves ont un animal.

**3.** On trace un axe horizontal où l'on place les cinq catégories, et un axe vertical gradué de $0$ à $10$ (1 cm pour 1 élève). Les barres ont toutes la même largeur et sont séparées par un espace ; leurs hauteurs sont :
chat $9$ cm, chien $7$ cm, poisson $3$ cm, lapin $2$ cm, aucun $4$ cm.
On n'oublie pas le titre du diagramme et le nom des axes (« Animal » et « Nombre d'élèves »).`
    },
    {
      id: "6D1-ds-05",
      title: "Trier les données du trajet",
      difficulty: 3,
      points: 5,
      statement: `Voici des informations sur le trajet domicile-collège de huit élèves :

| Prénom | Transport | Durée (min) | Classe |
|:---|:---:|:---:|:---:|
| Adam | bus | 25 | 6e A |
| Bérénice | vélo | 12 | 6e B |
| Chloé | à pied | 8 | 6e A |
| Djibril | bus | 18 | 6e B |
| Éva | voiture | 15 | 6e A |
| Farid | bus | 32 | 6e A |
| Gaëlle | à pied | 14 | 6e B |
| Hugo | vélo | 20 | 6e A |

1. Quels élèves viennent en bus ?
2. Quels élèves de 6e A ont un trajet de plus de $15$ minutes ?
3. Combien d'élèves ont un trajet de $15$ minutes ou moins ?
4. Parmi les élèves qui viennent à pied ou à vélo, qui a le trajet le plus long ?
5. Ranger les élèves de 6e B du trajet le plus court au plus long.`,
      solution: `On filtre le tableau en gardant seulement les lignes qui vérifient le critère demandé.

**1.** Transport « bus » : Adam, Djibril et Farid.

**2.** Classe 6e A et durée strictement supérieure à $15$ min : Adam ($25$ min), Farid ($32$ min) et Hugo ($20$ min). Éva n'est pas retenue car $15$ n'est pas plus grand que $15$.

**3.** Durée $\\leqslant 15$ min : Bérénice ($12$), Chloé ($8$), Éva ($15$) et Gaëlle ($14$), soit $4$ élèves.

**4.** À pied ou à vélo : Bérénice ($12$), Chloé ($8$), Gaëlle ($14$), Hugo ($20$). C'est Hugo qui a le trajet le plus long ($20$ min).

**5.** Élèves de 6e B : Bérénice ($12$), Djibril ($18$), Gaëlle ($14$). Ordre : Bérénice ($12$ min), Gaëlle ($14$ min), Djibril ($18$ min).`
    },
    {
      id: "6D1-ds-06",
      title: "Les températures d'une journée",
      difficulty: 3,
      points: 5,
      statement: `Le graphique ci-dessous montre la température relevée toutes les deux heures, de $6$ h à $20$ h, un jour de printemps.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:380px;"><svg class="geo-svg-figure" viewBox="0 0 360 250" width="360" height="250" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="50" y1="200" x2="340" y2="200" stroke="#e2e8f0" stroke-width="1"/><text x="44" y="204" text-anchor="end" font-size="11" fill="currentColor">0</text><line x1="50" y1="186" x2="340" y2="186" stroke="#e2e8f0" stroke-width="1"/><line x1="50" y1="172" x2="340" y2="172" stroke="#e2e8f0" stroke-width="1"/><text x="44" y="176" text-anchor="end" font-size="11" fill="currentColor">4</text><line x1="50" y1="158" x2="340" y2="158" stroke="#e2e8f0" stroke-width="1"/><line x1="50" y1="144" x2="340" y2="144" stroke="#e2e8f0" stroke-width="1"/><text x="44" y="148" text-anchor="end" font-size="11" fill="currentColor">8</text><line x1="50" y1="130" x2="340" y2="130" stroke="#e2e8f0" stroke-width="1"/><line x1="50" y1="116" x2="340" y2="116" stroke="#e2e8f0" stroke-width="1"/><text x="44" y="120" text-anchor="end" font-size="11" fill="currentColor">12</text><line x1="50" y1="102" x2="340" y2="102" stroke="#e2e8f0" stroke-width="1"/><line x1="50" y1="88" x2="340" y2="88" stroke="#e2e8f0" stroke-width="1"/><text x="44" y="92" text-anchor="end" font-size="11" fill="currentColor">16</text><line x1="50" y1="74" x2="340" y2="74" stroke="#e2e8f0" stroke-width="1"/><line x1="50" y1="60" x2="340" y2="60" stroke="#e2e8f0" stroke-width="1"/><text x="44" y="64" text-anchor="end" font-size="11" fill="currentColor">20</text><line x1="50" y1="46" x2="340" y2="46" stroke="#e2e8f0" stroke-width="1"/><line x1="50" y1="32" x2="340" y2="32" stroke="#e2e8f0" stroke-width="1"/><text x="44" y="36" text-anchor="end" font-size="11" fill="currentColor">24</text><line x1="50" y1="30" x2="50" y2="200" stroke="#e2e8f0" stroke-width="1"/><text x="50" y="216" text-anchor="middle" font-size="11" fill="currentColor">6 h</text><line x1="90" y1="30" x2="90" y2="200" stroke="#e2e8f0" stroke-width="1"/><text x="90" y="216" text-anchor="middle" font-size="11" fill="currentColor">8 h</text><line x1="130" y1="30" x2="130" y2="200" stroke="#e2e8f0" stroke-width="1"/><text x="130" y="216" text-anchor="middle" font-size="11" fill="currentColor">10 h</text><line x1="170" y1="30" x2="170" y2="200" stroke="#e2e8f0" stroke-width="1"/><text x="170" y="216" text-anchor="middle" font-size="11" fill="currentColor">12 h</text><line x1="210" y1="30" x2="210" y2="200" stroke="#e2e8f0" stroke-width="1"/><text x="210" y="216" text-anchor="middle" font-size="11" fill="currentColor">14 h</text><line x1="250" y1="30" x2="250" y2="200" stroke="#e2e8f0" stroke-width="1"/><text x="250" y="216" text-anchor="middle" font-size="11" fill="currentColor">16 h</text><line x1="290" y1="30" x2="290" y2="200" stroke="#e2e8f0" stroke-width="1"/><text x="290" y="216" text-anchor="middle" font-size="11" fill="currentColor">18 h</text><line x1="330" y1="30" x2="330" y2="200" stroke="#e2e8f0" stroke-width="1"/><text x="330" y="216" text-anchor="middle" font-size="11" fill="currentColor">20 h</text><line x1="50" y1="200" x2="340" y2="200" stroke="var(--text-main, #334155)" stroke-width="2"/><line x1="50" y1="200" x2="50" y2="25" stroke="var(--text-main, #334155)" stroke-width="2"/><polyline points="50,144 90,130 130,102 170,74 210,53 250,67 290,95 330,116" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="50" cy="144" r="3.5" fill="#dc2626"/><circle cx="90" cy="130" r="3.5" fill="#dc2626"/><circle cx="130" cy="102" r="3.5" fill="#dc2626"/><circle cx="170" cy="74" r="3.5" fill="#dc2626"/><circle cx="210" cy="53" r="3.5" fill="#dc2626"/><circle cx="250" cy="67" r="3.5" fill="#dc2626"/><circle cx="290" cy="95" r="3.5" fill="#dc2626"/><circle cx="330" cy="116" r="3.5" fill="#dc2626"/><text x="8" y="18" font-size="11" fill="currentColor">Température (°C)</text><text x="200" y="240" text-anchor="middle" font-size="11" fill="currentColor">Heure</text></svg></div>

1. Quelle température faisait-il à $10$ h ? À $18$ h ?
2. À quelle heure la température a-t-elle été la plus élevée ? Quelle était-elle ?
3. De combien de degrés la température a-t-elle augmenté entre $8$ h et $12$ h ?
4. Calculer l'écart entre la température la plus haute et la plus basse relevées ce jour-là.
5. Recopier et compléter le tableau des relevés :

| Heure | 6 h | 8 h | 10 h | 12 h | 14 h | 16 h | 18 h | 20 h |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Température (°C) | | | | | | | | |`,
      solution: `Sur l'axe vertical, une petite graduation représente $2$ °C.

**1.** À $10$ h, il faisait $14$ °C ; à $18$ h, il faisait $15$ °C.

**2.** Le point le plus haut est celui de $14$ h : la température maximale était de $21$ °C.

**3.** À $8$ h : $10$ °C ; à $12$ h : $18$ °C. $18 - 10 = 8$ : la température a augmenté de $8$ °C.

**4.** La plus haute est $21$ °C (à $14$ h), la plus basse est $8$ °C (à $6$ h). Écart : $21 - 8 = 13$ °C.

**5.**

| Heure | 6 h | 8 h | 10 h | 12 h | 14 h | 16 h | 18 h | 20 h |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Température (°C) | 8 | 10 | 14 | 18 | 21 | 19 | 15 | 12 |`
    },
    {
      id: "6D1-ds-07",
      title: "Les pointures des élèves",
      difficulty: 4,
      points: 6,
      statement: `Le professeur d'EPS a noté la pointure de chaussures des $20$ élèves de la classe :

$36$ ; $38$ ; $37$ ; $39$ ; $38$ ; $40$ ; $37$ ; $38$ ; $36$ ; $39$ ; $38$ ; $37$ ; $41$ ; $38$ ; $39$ ; $37$ ; $38$ ; $40$ ; $36$ ; $38$.

1. Recopier et compléter le tableau des effectifs. Vérifier que le total est bien $20$.

| Pointure | 36 | 37 | 38 | 39 | 40 | 41 | Total |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Effectif | | | | | | | |

2. Quelle est la pointure la plus fréquente ?
3. Combien d'élèves chaussent du $38$ ou plus ?
4. Le club achète des chaussons d'escalade : il commande pour chaque pointure l'effectif observé, plus $1$ paire de réserve par pointure. Combien de paires commande-t-il en tout ?
5. Une paire coûte $12{,}50$ €. Quel est le montant de la commande ?`,
      solution: `**1.** On compte chaque valeur en barrant au fur et à mesure :

| Pointure | 36 | 37 | 38 | 39 | 40 | 41 | Total |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Effectif | 3 | 4 | 7 | 3 | 2 | 1 | 20 |

$3 + 4 + 7 + 3 + 2 + 1 = 20$ : on a bien compté tous les élèves.

**2.** La pointure $38$ a le plus grand effectif ($7$) : c'est la pointure la plus fréquente.

**3.** $7 + 3 + 2 + 1 = 13$. $13$ élèves chaussent du $38$ ou plus.

**4.** Il y a $6$ pointures différentes, donc $6$ paires de réserve : $20 + 6 = 26$ paires.

**5.** $26 \\times 12{,}50 = 325$. La commande coûte $325$ €.`
    },
    {
      id: "6D1-ds-08",
      title: "Les ventes de la fête du collège",
      difficulty: 4,
      points: 6,
      statement: `Pour financer un voyage, les élèves ont tenu un stand à la fête du collège. Voici le bilan des ventes :

| Produit | Crêpe | Gaufre | Jus de fruits | Part de gâteau |
|:---|:---:|:---:|:---:|:---:|
| Prix unitaire (€) | 1,50 | 2 | 1 | 2,50 |
| Quantité vendue | 124 | 85 | 140 | 46 |

1. Quel produit a été le plus vendu ?
2. Recopier le tableau en ajoutant une ligne « Recette (€) » et la compléter.
3. Quel produit a rapporté le plus d'argent ? Est-ce le même que celui de la question 1 ? Expliquer.
4. L'objectif était de récolter au moins $600$ €. Est-il atteint ? Justifier.`,
      solution: `**1.** Le plus grand nombre de la ligne « Quantité vendue » est $140$ : le jus de fruits a été le plus vendu.

**2.** Recette $=$ prix unitaire $\\times$ quantité vendue :
- crêpes : $124 \\times 1{,}5 = 186$ € ;
- gaufres : $85 \\times 2 = 170$ € ;
- jus : $140 \\times 1 = 140$ € ;
- gâteau : $46 \\times 2{,}5 = 115$ €.

| Produit | Crêpe | Gaufre | Jus de fruits | Part de gâteau |
|:---|:---:|:---:|:---:|:---:|
| Prix unitaire (€) | 1,50 | 2 | 1 | 2,50 |
| Quantité vendue | 124 | 85 | 140 | 46 |
| Recette (€) | 186 | 170 | 140 | 115 |

**3.** Ce sont les crêpes qui ont rapporté le plus ($186$ €). Ce n'est pas le jus de fruits : il s'en est vendu davantage, mais il coûte seulement $1$ €, alors qu'une crêpe coûte $1{,}50$ €.

**4.** Recette totale : $186 + 170 + 140 + 115 = 611$ €. Comme $611 > 600$, l'objectif est atteint (avec $11$ € de plus).`
    },
    {
      id: "6D1-ds-09",
      title: "Le tableau des distances",
      difficulty: 1,
      points: 4,
      statement: `Le tableau ci-dessous donne les distances par la route, en kilomètres (valeurs arrondies), entre quatre villes.

| | Lille | Paris | Lyon | Marseille |
|:---|:---:|:---:|:---:|:---:|
| **Lille** | | 225 | 690 | 1 005 |
| **Paris** | 225 | | 465 | 780 |
| **Lyon** | 690 | 465 | | 315 |
| **Marseille** | 1 005 | 780 | 315 | |

1. Quelle est la distance entre Paris et Lyon ?
2. Quelles sont les deux villes les plus éloignées l'une de l'autre ? Les plus proches ?
3. Pourquoi certaines cases du tableau sont-elles vides ?
4. Un camion part de Lille, va à Lyon, puis à Marseille, et revient directement à Lille. Quelle distance parcourt-il ?`,
      solution: `**1.** On lit la case à l'intersection de la ligne « Paris » et de la colonne « Lyon » : $465$ km.

**2.** La plus grande valeur du tableau est $1\\,005$ km : Lille et Marseille sont les plus éloignées. La plus petite est $225$ km : Lille et Paris sont les plus proches.

**3.** Les cases vides correspondent à la distance entre une ville et elle-même (par exemple Lille–Lille), qui vaut $0$ km : il n'y a rien à indiquer.

**4.** Lille → Lyon : $690$ km ; Lyon → Marseille : $315$ km ; Marseille → Lille : $1\\,005$ km.
$690 + 315 + 1\\,005 = 2\\,010$. Le camion parcourt $2\\,010$ km.`
    },
    {
      id: "6D1-ds-10",
      title: "Choisir l'échelle d'un diagramme",
      difficulty: 2,
      points: 5,
      statement: `Une station météo a relevé la hauteur de pluie tombée chaque mois, en millimètres (mm) :

| Mois | Janv. | Févr. | Mars | Avr. | Mai | Juin |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Pluie (mm) | 80 | 60 | 50 | 70 | 90 | 40 |

1. Quelle hauteur de pluie est tombée en tout pendant ces six mois ?
2. Pendant quels mois est-il tombé plus de $60$ mm de pluie ?
3. On veut construire un diagramme en barres avec l'échelle : $1$ cm de hauteur pour $20$ mm de pluie. Calculer la hauteur de chaque barre.
4. Yanis propose plutôt l'échelle : $1$ cm pour $5$ mm. Calculer la hauteur de la barre de mai avec cette échelle. Pourquoi ce choix n'est-il pas pratique ?`,
      solution: `**1.** $80 + 60 + 50 + 70 + 90 + 40 = 390$. Il est tombé $390$ mm de pluie.

**2.** Plus de $60$ mm (strictement) : janvier ($80$), avril ($70$) et mai ($90$). Février ($60$ mm) n'est pas retenu.

**3.** La hauteur est proportionnelle à la quantité de pluie : on divise par $20$.
Janvier : $80 \\div 20 = 4$ cm ; février : $3$ cm ; mars : $50 \\div 20 = 2{,}5$ cm ; avril : $3{,}5$ cm ; mai : $4{,}5$ cm ; juin : $2$ cm.

**4.** $90 \\div 5 = 18$ : la barre de mai mesurerait $18$ cm. Le diagramme serait trop haut pour tenir facilement sur une feuille de cahier ; l'échelle de la question 3 est mieux adaptée.`
    },
    {
      id: "6D1-ds-11",
      title: "Le tableau des médailles",
      difficulty: 3,
      points: 5,
      statement: `Voici les médailles obtenues par quatre pays lors d'une compétition :

| Pays | Or | Argent | Bronze |
|:---|:---:|:---:|:---:|
| Pays A | 10 | 5 | 3 |
| Pays B | 8 | 12 | 9 |
| Pays C | 10 | 7 | 2 |
| Pays D | 6 | 9 | 15 |

1. Ajouter une colonne « Total » et la compléter.
2. **Classement 1** : on range les pays selon leur nombre de médailles d'or ; en cas d'égalité, on regarde le nombre de médailles d'argent. Donner ce classement.
3. **Classement 2** : on range les pays selon leur nombre total de médailles. Donner ce classement.
4. **Classement 3** : une médaille d'or rapporte $3$ points, une d'argent $2$ points et une de bronze $1$ point. Calculer les points de chaque pays et donner ce classement.
5. Quel pays a intérêt à ce qu'on utilise le classement 1 ? Le classement 2 ?`,
      solution: `**1.** A : $10 + 5 + 3 = 18$ ; B : $8 + 12 + 9 = 29$ ; C : $10 + 7 + 2 = 19$ ; D : $6 + 9 + 15 = 30$.

**2.** A et C ont tous les deux $10$ médailles d'or ; C a $7$ médailles d'argent contre $5$ pour A, donc C passe devant.
Classement 1 : C, A, B ($8$), D ($6$).

**3.** Classement 2 : D ($30$), B ($29$), C ($19$), A ($18$).

**4.** A : $3 \\times 10 + 2 \\times 5 + 3 = 30 + 10 + 3 = 43$ points.
B : $3 \\times 8 + 2 \\times 12 + 9 = 24 + 24 + 9 = 57$ points.
C : $3 \\times 10 + 2 \\times 7 + 2 = 30 + 14 + 2 = 46$ points.
D : $3 \\times 6 + 2 \\times 9 + 15 = 18 + 18 + 15 = 51$ points.
Classement 3 : B, D, C, A.

**5.** Le pays C est premier avec le classement 1, et le pays D est premier avec le classement 2 : chacun a intérêt à ce que « son » classement soit utilisé. Les mêmes données peuvent donc être présentées de façons différentes selon le critère choisi.`
    },
    {
      id: "6D1-ds-12",
      title: "Un diagramme trompeur",
      difficulty: 4,
      points: 6,
      statement: `Une marque de vélos publie un diagramme en barres pour montrer ses ventes. Sur ce diagramme :
- l'axe vertical ne commence pas à $0$ mais à $900$ vélos, et $1$ cm représente $10$ vélos ;
- la barre de l'année 2025 mesure $2$ cm de haut ;
- la barre de l'année 2026 mesure $8$ cm de haut.

Voici ce diagramme (reproduit en plus petit : chaque petite graduation de l'axe vertical représente $10$ vélos).

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 300 300" width="300" height="300" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="70" y1="270" x2="280" y2="270" stroke="currentColor" stroke-width="1.5"/><line x1="70" y1="270" x2="70" y2="10" stroke="currentColor" stroke-width="1.5"/><line x1="65" y1="270" x2="70" y2="270" stroke="currentColor" stroke-width="1.2"/><text x="60" y="274" text-anchor="end" font-size="12" fill="currentColor">900</text><line x1="65" y1="245" x2="70" y2="245" stroke="currentColor" stroke-width="1.2"/><line x1="65" y1="220" x2="70" y2="220" stroke="currentColor" stroke-width="1.2"/><text x="60" y="224" text-anchor="end" font-size="12" fill="currentColor">920</text><line x1="65" y1="195" x2="70" y2="195" stroke="currentColor" stroke-width="1.2"/><line x1="65" y1="170" x2="70" y2="170" stroke="currentColor" stroke-width="1.2"/><text x="60" y="174" text-anchor="end" font-size="12" fill="currentColor">940</text><line x1="65" y1="145" x2="70" y2="145" stroke="currentColor" stroke-width="1.2"/><line x1="65" y1="120" x2="70" y2="120" stroke="currentColor" stroke-width="1.2"/><text x="60" y="124" text-anchor="end" font-size="12" fill="currentColor">960</text><line x1="65" y1="95" x2="70" y2="95" stroke="currentColor" stroke-width="1.2"/><line x1="65" y1="70" x2="70" y2="70" stroke="currentColor" stroke-width="1.2"/><text x="60" y="74" text-anchor="end" font-size="12" fill="currentColor">980</text><line x1="65" y1="45" x2="70" y2="45" stroke="currentColor" stroke-width="1.2"/><line x1="65" y1="20" x2="70" y2="20" stroke="currentColor" stroke-width="1.2"/><text x="60" y="24" text-anchor="end" font-size="12" fill="currentColor">1000</text><rect x="100" y="220" width="55" height="50" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1"/><rect x="195" y="70" width="55" height="200" fill="rgba(59,130,246,0.55)" stroke="currentColor" stroke-width="1"/><text x="127.5" y="288" text-anchor="middle" font-size="13" fill="currentColor" >2025</text><text x="222.5" y="288" text-anchor="middle" font-size="13" fill="currentColor" >2026</text><text x="16" y="140" font-size="12" fill="currentColor" transform="rotate(-90 16 140)" text-anchor="middle">Nombre de vélos vendus</text></svg></div>

1. Combien de vélos ont été vendus en 2025 ? En 2026 ? Expliquer.
2. Quelle a été l'augmentation des ventes entre 2025 et 2026 ?
3. Sur le diagramme, combien de fois la barre de 2026 est-elle plus haute que celle de 2025 ? Les ventes de 2026 sont-elles vraiment ce nombre de fois plus grandes que celles de 2025 ? Justifier.
4. On construit un nouveau diagramme dont l'axe vertical commence à $0$, avec $1$ cm pour $100$ vélos. Calculer la hauteur des deux barres.
5. Expliquer en une ou deux phrases pourquoi le premier diagramme est trompeur.`,
      solution: `**1.** La barre de 2025 dépasse le bas de l'axe ($900$) de $2$ cm, soit $2 \\times 10 = 20$ vélos : $900 + 20 = 920$ vélos.
La barre de 2026 dépasse de $8$ cm, soit $8 \\times 10 = 80$ vélos : $900 + 80 = 980$ vélos.

**2.** $980 - 920 = 60$. Les ventes ont augmenté de $60$ vélos.

**3.** $8 \\div 2 = 4$ : la barre de 2026 est $4$ fois plus haute. Mais $4 \\times 920 = 3\\,680$, bien plus que $980$ : les ventes ne sont pas $4$ fois plus grandes, elles ont seulement augmenté de $60$ vélos sur $920$.

**4.** $920 \\div 100 = 9{,}2$ cm pour 2025 et $980 \\div 100 = 9{,}8$ cm pour 2026.

**5.** Comme l'axe commence à $900$, la hauteur des barres n'est pas proportionnelle aux ventes : la petite différence de $60$ vélos paraît énorme. Avec un axe partant de $0$, les deux barres sont presque de la même hauteur, ce qui montre que les ventes ont peu changé.`
    },
    {
      id: "6D1-ds-13",
      title: "Le temps d'écran de la semaine",
      difficulty: 1,
      points: 4,
      statement: `Inès a noté chaque jour, en minutes, le temps passé devant un écran pendant une semaine :

| Jour | Lun. | Mar. | Mer. | Jeu. | Ven. | Sam. | Dim. |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Durée (min) | $45$ | $30$ | $90$ | $40$ | $35$ | $120$ | $100$ |

1. Combien de temps Inès a-t-elle passé devant un écran le mercredi ?
2. Quel jour ce temps a-t-il été le plus long ? Le plus court ? Calculer la différence entre ces deux durées.
3. Quels jours ce temps a-t-il dépassé une heure ?
4. Calculer le temps total de la semaine, en minutes, puis en heures et minutes.`,
      solution: `**1.** On lit dans la colonne « Mer. » : $90$ min (soit $1$ h $30$ min).

**2.** Le plus long : le samedi ($120$ min). Le plus court : le mardi ($30$ min).
Différence : $120 - 30 = 90$ min.

**3.** Une heure, c'est $60$ min. Les durées supérieures à $60$ min sont celles du **mercredi** ($90$), du **samedi** ($120$) et du **dimanche** ($100$).

**4.** $45 + 30 + 90 + 40 + 35 + 120 + 100 = 460$ min.
$460 = 7 \\times 60 + 40$, donc $460$ min $= 7$ h $40$ min.`
    },
    {
      id: "6D1-ds-14",
      title: "Comment vient-on au collège ?",
      difficulty: 2,
      points: 5,
      statement: `On a demandé à des élèves de 6e leur principal moyen de transport pour venir au collège. Chaque élève n'a donné qu'une réponse. Les résultats sont représentés par le diagramme en barres ci-dessous.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 330 232" width="330" height="232" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="80" y1="20" x2="80" y2="190" stroke="#cbd5e1" stroke-width="1"/><text x="80" y="206" text-anchor="middle" font-size="11" fill="currentColor">0</text><line x1="108" y1="20" x2="108" y2="190" stroke="#cbd5e1" stroke-width="1"/><text x="108" y="206" text-anchor="middle" font-size="11" fill="currentColor">5</text><line x1="136" y1="20" x2="136" y2="190" stroke="#cbd5e1" stroke-width="1"/><text x="136" y="206" text-anchor="middle" font-size="11" fill="currentColor">10</text><line x1="164" y1="20" x2="164" y2="190" stroke="#cbd5e1" stroke-width="1"/><text x="164" y="206" text-anchor="middle" font-size="11" fill="currentColor">15</text><line x1="192" y1="20" x2="192" y2="190" stroke="#cbd5e1" stroke-width="1"/><text x="192" y="206" text-anchor="middle" font-size="11" fill="currentColor">20</text><line x1="220" y1="20" x2="220" y2="190" stroke="#cbd5e1" stroke-width="1"/><text x="220" y="206" text-anchor="middle" font-size="11" fill="currentColor">25</text><line x1="248" y1="20" x2="248" y2="190" stroke="#cbd5e1" stroke-width="1"/><text x="248" y="206" text-anchor="middle" font-size="11" fill="currentColor">30</text><line x1="276" y1="20" x2="276" y2="190" stroke="#cbd5e1" stroke-width="1"/><text x="276" y="206" text-anchor="middle" font-size="11" fill="currentColor">35</text><line x1="304" y1="20" x2="304" y2="190" stroke="#cbd5e1" stroke-width="1"/><text x="304" y="206" text-anchor="middle" font-size="11" fill="currentColor">40</text><rect x="80" y="32" width="196" height="24" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="74" y="48" text-anchor="end" font-size="12" fill="currentColor">Bus</text><rect x="80" y="72" width="112" height="24" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="74" y="88" text-anchor="end" font-size="12" fill="currentColor">Voiture</text><rect x="80" y="112" width="84" height="24" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="74" y="128" text-anchor="end" font-size="12" fill="currentColor">Vélo</text><rect x="80" y="152" width="168" height="24" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="74" y="168" text-anchor="end" font-size="12" fill="currentColor">À pied</text><line x1="80" y1="190" x2="314" y2="190" stroke="var(--text-main, #334155)" stroke-width="2"/><line x1="80" y1="190" x2="80" y2="20" stroke="var(--text-main, #334155)" stroke-width="2"/><text x="192" y="224" text-anchor="middle" font-size="11" fill="currentColor">Nombre d'élèves</text></svg></div>

1. Que représente une graduation de l'axe horizontal ?
2. Recopier et compléter le tableau :

| Transport | Bus | Voiture | Vélo | À pied | Total |
|:---|:---:|:---:|:---:|:---:|:---:|
| Nombre d'élèves | | | | | |

3. Combien d'élèves de plus viennent en bus qu'en voiture ?
4. Quel moyen de transport est utilisé par deux fois plus d'élèves que le vélo ?
5. Léa affirme : « Plus du quart des élèves interrogés viennent en bus. » A-t-elle raison ?`,
      solution: `**1.** Entre $0$ et $5$, il y a une graduation : une graduation représente **$5$ élèves**.

**2.** On lit l'extrémité de chaque barre :

| Transport | Bus | Voiture | Vélo | À pied | Total |
|:---|:---:|:---:|:---:|:---:|:---:|
| Nombre d'élèves | $35$ | $20$ | $15$ | $30$ | $100$ |

($35 + 20 + 15 + 30 = 100$.)

**3.** $35 - 20 = 15$ élèves de plus viennent en bus.

**4.** $2 \\times 15 = 30$ : ce sont les élèves qui viennent **à pied**.

**5.** Le quart de $100$ est $100 \\div 4 = 25$. Or $35 > 25$ : **oui**, plus du quart des élèves viennent en bus.`
    },
    {
      id: "6D1-ds-15",
      title: "Le graphique de la randonnée",
      difficulty: 3,
      points: 5,
      statement: `Un groupe part en randonnée à $9$ h. Le graphique ci-dessous donne la distance parcourue depuis le départ, en kilomètres, en fonction de l'heure.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 310 240" width="310" height="240" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="50" y1="200" x2="290" y2="200" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="204" text-anchor="end" font-size="11" fill="currentColor">0</text><line x1="50" y1="180" x2="290" y2="180" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="184" text-anchor="end" font-size="11" fill="currentColor">2</text><line x1="50" y1="160" x2="290" y2="160" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="164" text-anchor="end" font-size="11" fill="currentColor">4</text><line x1="50" y1="140" x2="290" y2="140" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="144" text-anchor="end" font-size="11" fill="currentColor">6</text><line x1="50" y1="120" x2="290" y2="120" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="124" text-anchor="end" font-size="11" fill="currentColor">8</text><line x1="50" y1="100" x2="290" y2="100" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="104" text-anchor="end" font-size="11" fill="currentColor">10</text><line x1="50" y1="80" x2="290" y2="80" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="84" text-anchor="end" font-size="11" fill="currentColor">12</text><line x1="50" y1="60" x2="290" y2="60" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="64" text-anchor="end" font-size="11" fill="currentColor">14</text><line x1="50" y1="40" x2="290" y2="40" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="44" text-anchor="end" font-size="11" fill="currentColor">16</text><line x1="50" y1="20" x2="290" y2="20" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="24" text-anchor="end" font-size="11" fill="currentColor">18</text><line x1="50" y1="200" x2="50" y2="20" stroke="#cbd5e1" stroke-width="1"/><text x="50" y="216" text-anchor="middle" font-size="11" fill="currentColor">9 h</text><line x1="90" y1="200" x2="90" y2="20" stroke="#cbd5e1" stroke-width="1"/><text x="90" y="216" text-anchor="middle" font-size="11" fill="currentColor">10 h</text><line x1="130" y1="200" x2="130" y2="20" stroke="#cbd5e1" stroke-width="1"/><text x="130" y="216" text-anchor="middle" font-size="11" fill="currentColor">11 h</text><line x1="170" y1="200" x2="170" y2="20" stroke="#cbd5e1" stroke-width="1"/><text x="170" y="216" text-anchor="middle" font-size="11" fill="currentColor">12 h</text><line x1="210" y1="200" x2="210" y2="20" stroke="#cbd5e1" stroke-width="1"/><text x="210" y="216" text-anchor="middle" font-size="11" fill="currentColor">13 h</text><line x1="250" y1="200" x2="250" y2="20" stroke="#cbd5e1" stroke-width="1"/><text x="250" y="216" text-anchor="middle" font-size="11" fill="currentColor">14 h</text><line x1="290" y1="200" x2="290" y2="20" stroke="#cbd5e1" stroke-width="1"/><text x="290" y="216" text-anchor="middle" font-size="11" fill="currentColor">15 h</text><polyline points="50,200 90,160 130,120 170,100 210,100 250,50 290,20" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="50" cy="200" r="3" fill="#2563eb"/><circle cx="90" cy="160" r="3" fill="#2563eb"/><circle cx="130" cy="120" r="3" fill="#2563eb"/><circle cx="170" cy="100" r="3" fill="#2563eb"/><circle cx="210" cy="100" r="3" fill="#2563eb"/><circle cx="250" cy="50" r="3" fill="#2563eb"/><circle cx="290" cy="20" r="3" fill="#2563eb"/><line x1="50" y1="200" x2="300" y2="200" stroke="var(--text-main, #334155)" stroke-width="2"/><line x1="50" y1="200" x2="50" y2="10" stroke="var(--text-main, #334155)" stroke-width="2"/><text x="8" y="12" font-size="11" fill="currentColor">Distance parcourue (km)</text><text x="170" y="234" text-anchor="middle" font-size="11" fill="currentColor">Heure</text></svg></div>

1. Quelle distance le groupe avait-il parcourue à $11$ h ?
2. À quelle heure le groupe avait-il parcouru $15$ km ?
3. Entre quelles heures le groupe s'est-il arrêté pour déjeuner ? Comment le voit-on sur le graphique ?
4. Quelle distance totale le groupe a-t-il parcourue ?
5. Recopier et compléter le tableau des distances parcourues pendant chaque heure, puis dire pendant quelle heure le groupe a parcouru la plus grande distance.

| Heure | $9$ h – $10$ h | $10$ h – $11$ h | $11$ h – $12$ h | $12$ h – $13$ h | $13$ h – $14$ h | $14$ h – $15$ h |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Distance (km) | | | | | | |`,
      solution: `Sur l'axe vertical, une graduation représente $2$ km.

**1.** À $11$ h, on lit $8$ km.

**2.** La distance $15$ km est atteinte à **$14$ h**.

**3.** Entre $12$ h et $13$ h, la distance reste égale à $10$ km : le groupe n'avance pas. Sur le graphique, la ligne est **horizontale** entre $12$ h et $13$ h : c'est la pause déjeuner.

**4.** À $15$ h, on lit $18$ km : le groupe a parcouru **$18$ km**.

**5.** On fait la différence des distances lues au début et à la fin de chaque heure :

| Heure | $9$ h – $10$ h | $10$ h – $11$ h | $11$ h – $12$ h | $12$ h – $13$ h | $13$ h – $14$ h | $14$ h – $15$ h |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Distance (km) | $4$ | $4$ | $2$ | $0$ | $5$ | $3$ |

(Vérification : $4 + 4 + 2 + 0 + 5 + 3 = 18$ km.)
La plus grande distance a été parcourue entre **$13$ h et $14$ h** ($5$ km).`
    },
    {
      id: "6D1-ds-16",
      title: "Le diagramme des visiteurs du musée",
      difficulty: 4,
      points: 6,
      statement: `Un musée, fermé le lundi, a compté ses visiteurs pendant une semaine :

| Jour | Mar. | Mer. | Jeu. | Ven. | Sam. | Dim. |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Visiteurs | $60$ | $110$ | $80$ | $70$ | $150$ | $130$ |

Tom a représenté ces données par le diagramme en barres suivant.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 345 240" width="345" height="240" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="50" y1="200" x2="330" y2="200" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="204" text-anchor="end" font-size="11" fill="currentColor">0</text><line x1="50" y1="180" x2="330" y2="180" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="184" text-anchor="end" font-size="11" fill="currentColor">20</text><line x1="50" y1="160" x2="330" y2="160" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="164" text-anchor="end" font-size="11" fill="currentColor">40</text><line x1="50" y1="140" x2="330" y2="140" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="144" text-anchor="end" font-size="11" fill="currentColor">60</text><line x1="50" y1="120" x2="330" y2="120" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="124" text-anchor="end" font-size="11" fill="currentColor">80</text><line x1="50" y1="100" x2="330" y2="100" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="104" text-anchor="end" font-size="11" fill="currentColor">100</text><line x1="50" y1="80" x2="330" y2="80" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="84" text-anchor="end" font-size="11" fill="currentColor">120</text><line x1="50" y1="60" x2="330" y2="60" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="64" text-anchor="end" font-size="11" fill="currentColor">140</text><line x1="50" y1="40" x2="330" y2="40" stroke="#cbd5e1" stroke-width="1"/><text x="44" y="44" text-anchor="end" font-size="11" fill="currentColor">160</text><rect x="62" y="140" width="30" height="60" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="77" y="216" text-anchor="middle" font-size="12" fill="currentColor">Mar.</text><rect x="107" y="90" width="30" height="110" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="122" y="216" text-anchor="middle" font-size="12" fill="currentColor">Mer.</text><rect x="152" y="110" width="30" height="90" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="167" y="216" text-anchor="middle" font-size="12" fill="currentColor">Jeu.</text><rect x="197" y="130" width="30" height="70" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="212" y="216" text-anchor="middle" font-size="12" fill="currentColor">Ven.</text><rect x="242" y="50" width="30" height="150" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="257" y="216" text-anchor="middle" font-size="12" fill="currentColor">Sam.</text><rect x="287" y="70" width="30" height="130" fill="rgba(37,99,235,0.55)" stroke="#2563eb"/><text x="302" y="216" text-anchor="middle" font-size="12" fill="currentColor">Dim.</text><line x1="50" y1="200" x2="335" y2="200" stroke="var(--text-main, #334155)" stroke-width="2"/><line x1="50" y1="200" x2="50" y2="30" stroke="var(--text-main, #334155)" stroke-width="2"/><text x="8" y="16" font-size="11" fill="currentColor">Nombre de visiteurs</text><text x="190" y="234" text-anchor="middle" font-size="11" fill="currentColor">Jour</text></svg></div>

1. Que représente une graduation de l'axe vertical sur le diagramme de Tom ?
2. Tom a fait une erreur. Quelle barre est fausse ? Quelle hauteur aurait-elle dû avoir ?
3. Calculer le nombre total de visiteurs de la semaine.
4. Le directeur affirme : « Le week-end (samedi et dimanche), nous avons reçu plus de la moitié des visiteurs de la semaine. » A-t-il raison ?
5. Est-il vrai que le samedi, il y a eu plus de deux fois plus de visiteurs que le mardi ?
6. Sur une feuille, on refait le diagramme en représentant $20$ visiteurs par $1$ cm. Quelle doit être la hauteur de la barre du samedi ? Celle du vendredi ?`,
      solution: `**1.** Les graduations sont $0$, $20$, $40$, … : une graduation représente **$20$ visiteurs**.

**2.** La barre du **jeudi** s'arrête au milieu entre $80$ et $100$, c'est-à-dire à $90$. Or le tableau indique $80$ visiteurs : la barre aurait dû s'arrêter **sur la graduation $80$**. Les autres barres sont correctes ($60$ ; $110$ ; $70$ ; $150$ ; $130$).

**3.** $60 + 110 + 80 + 70 + 150 + 130 = 600$ visiteurs.

**4.** Le week-end : $150 + 130 = 280$ visiteurs. La moitié de $600$ est $300$. Or $280 < 300$ : le directeur **a tort**, c'est un peu moins de la moitié.

**5.** Le double du nombre de visiteurs du mardi est $2 \\times 60 = 120$. Or $150 > 120$ : **oui**, il y a eu plus de deux fois plus de visiteurs le samedi.

**6.** $1$ cm représente $20$ visiteurs.
- Samedi : $150 \\div 20 = 7{,}5$, la barre mesure $7{,}5$ cm.
- Vendredi : $70 \\div 20 = 3{,}5$, la barre mesure $3{,}5$ cm.`
    }
  ]
});

Object.assign(window.MATHS_DS_BANK, {
  "6G1": [
    {
      id: "6G1-ds-01",
      title: "Écrire avec les notations de la géométrie",
      difficulty: 1,
      points: 4,
      statement: `Dans son cahier, Inès a écrit des phrases en français. Le professeur lui demande de les traduire avec les symboles de la géométrie.

1. Écrire avec des symboles :
a) le point $E$ appartient au segment $[AB]$ ;
b) le point $F$ n'appartient pas à la droite $(CD)$ ;
c) la longueur du segment $[AB]$ est égale à $5$ cm ;
d) les droites $(d)$ et $(d')$ sont perpendiculaires ;
e) les droites $(AB)$ et $(CD)$ sont parallèles.
2. Expliquer avec des mots la différence entre $[AB]$, $[AB)$ et $(AB)$.
3. Combien de droites passent par deux points distincts $A$ et $B$ ?`,
      solution: `**1.**
a) $E \\in [AB]$
b) $F \\notin (CD)$
c) $AB = 5$ cm (on écrit $AB$ sans crochets pour une longueur).
d) $(d) \\perp (d')$
e) $(AB) \\parallel (CD)$

**2.**
- $[AB]$ est le **segment** d'extrémités $A$ et $B$ : il est limité des deux côtés.
- $[AB)$ est la **demi-droite** d'origine $A$ passant par $B$ : elle est limitée en $A$ et illimitée du côté de $B$.
- $(AB)$ est la **droite** passant par $A$ et $B$ : elle est illimitée des deux côtés.

**3.** Par deux points distincts, il passe **une seule droite** : la droite $(AB)$.`
    },
    {
      id: "6G1-ds-02",
      title: "Le vocabulaire du cercle",
      difficulty: 1,
      points: 4,
      statement: `On a tracé un cercle $\\mathcal{C}$ de centre $O$ et de rayon $3$ cm. Les points $A$, $B$ et $C$ sont sur le cercle, et le point $O$ appartient au segment $[AB]$.

1. Que représente le segment $[AB]$ pour le cercle ? Quelle est sa longueur ?
2. Que représente le segment $[OC]$ ? Quelle est sa longueur ?
3. Que représente le segment $[AC]$ pour le cercle ?
4. Un point $M$ est tel que $OM = 2{,}5$ cm. Le point $M$ est-il sur le cercle, à l'intérieur ou à l'extérieur ? Justifier.`,
      solution: `**1.** $A$ et $B$ sont sur le cercle et $[AB]$ passe par le centre $O$ : $[AB]$ est un **diamètre**. Un diamètre mesure le double du rayon : $AB = 2 \\times 3 = 6$ cm.

**2.** $[OC]$ relie le centre à un point du cercle : c'est un **rayon**. Donc $OC = 3$ cm.

**3.** $[AC]$ relie deux points du cercle : c'est une **corde** du cercle.

**4.** $OM = 2{,}5$ cm et $2{,}5 < 3$ : le point $M$ est plus proche du centre que les points du cercle. Le point $M$ est donc **à l'intérieur** du cercle.`
    },
    {
      id: "6G1-ds-03",
      title: "Points alignés et milieux",
      difficulty: 2,
      points: 5,
      statement: `Les points $A$, $B$ et $C$ sont alignés dans cet ordre, avec $AB = 4{,}6$ cm et $BC = 3{,}8$ cm.

1. Calculer la longueur $AC$.
2. On appelle $M$ le milieu du segment $[AC]$. Calculer $AM$.
3. Le point $M$ est-il sur le segment $[AB]$ ou sur le segment $[BC]$ ? Justifier, puis calculer la distance $MB$.
4. On appelle $I$ le milieu de $[AB]$. Calculer la distance $IM$.`,
      solution: `**1.** $B$ est entre $A$ et $C$, donc $AC = AB + BC = 4{,}6 + 3{,}8 = 8{,}4$ cm.

**2.** $M$ est le milieu de $[AC]$, donc $AM = AC \\div 2 = 8{,}4 \\div 2 = 4{,}2$ cm.

**3.** $AM = 4{,}2$ cm et $AB = 4{,}6$ cm. Comme $4{,}2 < 4{,}6$, le point $M$ est entre $A$ et $B$ : il est **sur le segment $[AB]$**.
$MB = AB - AM = 4{,}6 - 4{,}2 = 0{,}4$ cm.

**4.** $I$ est le milieu de $[AB]$, donc $AI = 4{,}6 \\div 2 = 2{,}3$ cm. Les points $A$, $I$, $M$ sont alignés dans cet ordre ($2{,}3 < 4{,}2$), donc $IM = AM - AI = 4{,}2 - 2{,}3 = 1{,}9$ cm.`
    },
    {
      id: "6G1-ds-04",
      title: "Droites parallèles et perpendiculaires",
      difficulty: 2,
      points: 5,
      statement: `On considère une droite $(d)$. On sait que :
- la droite $(d_1)$ est perpendiculaire à $(d)$ ;
- la droite $(d_2)$ est perpendiculaire à $(d)$ ;
- la droite $(d_3)$ est parallèle à $(d_1)$ ;
- la droite $(d_4)$ est perpendiculaire à $(d_1)$.

1. Que peut-on dire des droites $(d_1)$ et $(d_2)$ ? Citer la propriété utilisée.
2. Que peut-on dire des droites $(d_3)$ et $(d_2)$ ? Justifier.
3. Que peut-on dire des droites $(d_4)$ et $(d_2)$ ? Justifier.
4. Que peut-on dire des droites $(d_4)$ et $(d)$ ? Justifier.`,
      solution: `**1.** On sait que $(d_1) \\perp (d)$ et $(d_2) \\perp (d)$.
Propriété : si deux droites sont perpendiculaires à une même droite, alors elles sont parallèles entre elles.
Donc $(d_1) \\parallel (d_2)$.

**2.** $(d_3) \\parallel (d_1)$ et $(d_1) \\parallel (d_2)$.
Propriété : si deux droites sont parallèles à une même droite, alors elles sont parallèles entre elles.
Donc $(d_3) \\parallel (d_2)$.

**3.** $(d_4) \\perp (d_1)$ et $(d_1) \\parallel (d_2)$.
Propriété : si deux droites sont parallèles, toute droite perpendiculaire à l'une est perpendiculaire à l'autre.
Donc $(d_4) \\perp (d_2)$.

**4.** $(d_4) \\perp (d_1)$ et $(d) \\perp (d_1)$ : ce sont deux droites perpendiculaires à la même droite $(d_1)$, donc $(d_4) \\parallel (d)$.`
    },
    {
      id: "6G1-ds-05",
      title: "Le chien attaché à son piquet",
      difficulty: 3,
      points: 5,
      statement: `Rex est attaché à un piquet $P$ par une laisse de $4$ m. Sa niche $N$ est à $3$ m du piquet et sa gamelle $G$ est à $5$ m du piquet. On représente la situation sur un plan où $1$ cm représente $1$ m.

1. Décrire avec le vocabulaire du cercle la zone dans laquelle Rex peut se déplacer.
2. Rex peut-il atteindre sa niche ? sa gamelle ? Justifier.
3. Quelle longueur minimale doit avoir la laisse pour que Rex atteigne sa gamelle ?
4. Avec la laisse de $4$ m, on veut placer un jouet à exactement $4$ m du piquet et à $2$ m de la niche. Expliquer comment construire sa position sur le plan. Combien y a-t-il de positions possibles ?`,
      solution: `**1.** Les points situés à $4$ m (ou moins) du piquet forment le **disque de centre $P$ et de rayon $4$ m** : Rex peut aller sur le cercle de centre $P$ de rayon $4$ m et à l'intérieur de ce cercle.

**2.** Niche : $PN = 3$ m et $3 < 4$, donc la niche est à l'intérieur du cercle : **Rex peut l'atteindre**.
Gamelle : $PG = 5$ m et $5 > 4$, donc la gamelle est à l'extérieur du cercle : **Rex ne peut pas l'atteindre**.

**3.** La gamelle est à $5$ m du piquet : il faut une laisse d'au moins **$5$ m**.

**4.** Le jouet est à $4$ m de $P$, donc sur le **cercle de centre $P$ et de rayon $4$ cm** (sur le plan). Il est aussi à $2$ m de $N$, donc sur le **cercle de centre $N$ et de rayon $2$ cm**. On trace ces deux cercles : le jouet est à un de leurs points d'intersection.
Avec $PN = 3$ cm, les deux cercles se coupent en **deux points** : il y a deux positions possibles, symétriques par rapport à la droite $(PN)$.`
    },
    {
      id: "6G1-ds-06",
      title: "Suivre un programme de construction",
      difficulty: 3,
      points: 5,
      statement: `On réalise le programme de construction suivant :
- tracer un segment $[AB]$ de longueur $6$ cm et placer son milieu $I$ ;
- tracer le cercle $\\mathcal{C}$ de centre $I$ passant par $A$ ;
- tracer la droite $(d)$ perpendiculaire à $(AB)$ passant par $I$ ; elle coupe le cercle $\\mathcal{C}$ en deux points $E$ et $F$.

1. Réaliser la figure.
2. Quel est le rayon du cercle $\\mathcal{C}$ ? Justifier.
3. Le point $B$ est-il sur le cercle $\\mathcal{C}$ ? Justifier.
4. Calculer la longueur $EF$. Justifier.
5. Que peut-on dire des droites $(AB)$ et $(EF)$ ?`,
      solution: `**1.** On trace $[AB]$ de $6$ cm, on place $I$ à $3$ cm de $A$, on trace le cercle de centre $I$ passant par $A$, puis la perpendiculaire à $(AB)$ en $I$ à l'équerre.

**2.** Le cercle passe par $A$, donc son rayon est $IA$. $I$ est le milieu de $[AB]$, donc $IA = 6 \\div 2 = 3$ cm. Le rayon est **$3$ cm**.

**3.** $IB = 6 \\div 2 = 3$ cm, égal au rayon. Donc **$B$ est sur le cercle** ($[AB]$ est même un diamètre puisqu'il passe par le centre $I$).

**4.** $E$ et $F$ sont sur le cercle et sur une droite passant par le centre $I$ : $[EF]$ est un diamètre. Donc $EF = 2 \\times 3 = 6$ cm.

**5.** La droite $(d)$, c'est-à-dire $(EF)$, a été tracée perpendiculaire à $(AB)$ : $(AB) \\perp (EF)$. Les deux diamètres $[AB]$ et $[EF]$ sont perpendiculaires.`
    },
    {
      id: "6G1-ds-07",
      title: "La carte au trésor",
      difficulty: 4,
      points: 6,
      statement: `Sur une carte, le chêne $C$ et le puits $P$ sont à $6$ cm l'un de l'autre. Le message du pirate dit : « Le trésor est à $5$ cm du chêne et à $3$ cm du puits, du même côté de la droite $(CP)$ que la cabane. »

1. Où se trouvent tous les points situés à $5$ cm du chêne ? à $3$ cm du puits ?
2. Expliquer comment construire la position du trésor. Sans la phrase « du même côté que la cabane », combien de positions seraient possibles ?
3. Sur une autre carte, le chêne et le puits sont à $9$ cm l'un de l'autre, avec le même message. Peut-on trouver le trésor ? Justifier.
4. À quelle distance devraient être le chêne et le puits pour qu'il n'y ait qu'une seule position possible ? Où serait alors le trésor ?`,
      solution: `**1.** Les points à $5$ cm de $C$ forment le **cercle de centre $C$ et de rayon $5$ cm**. Les points à $3$ cm de $P$ forment le **cercle de centre $P$ et de rayon $3$ cm**.

**2.** On trace $[CP]$ de $6$ cm, puis au compas les deux cercles précédents. Le trésor est à un point d'intersection des deux cercles. Les deux cercles se coupent en **deux points**, situés de part et d'autre de $(CP)$ : sans indication supplémentaire, il y aurait deux positions. La phrase sur la cabane permet de choisir l'une des deux.

**3.** Si un point $T$ était à $5$ cm de $C$ et à $3$ cm de $P$, le trajet de $C$ à $P$ en passant par $T$ mesurerait $5 + 3 = 8$ cm. Or le plus court chemin de $C$ à $P$ est le segment $[CP]$, qui mesure $9$ cm : un trajet de $8$ cm de $C$ à $P$ est impossible. Les deux cercles ne se coupent pas : **On ne peut pas trouver le trésor.**

**4.** Il faut $CP = 5 + 3 = 8$ cm : les deux cercles se touchent alors en un seul point, situé **sur le segment $[CP]$**, à $5$ cm du chêne et $3$ cm du puits.`
    },
    {
      id: "6G1-ds-08",
      title: "Quatre villages sur une route droite",
      difficulty: 4,
      points: 5,
      statement: `Quatre villages $A$, $B$, $C$ et $D$ sont placés dans cet ordre le long d'une route parfaitement droite. On sait que :
- la distance $AD$ vaut $24$ km ;
- $B$ est le milieu de $[AC]$ ;
- $C$ est le milieu de $[BD]$.

1. Expliquer pourquoi $AB = BC$ et $BC = CD$. En déduire la distance entre deux villages voisins.
2. Une école $E$ est construite au milieu de $[AD]$. Calculer $AE$.
3. Entre quels villages se trouve l'école ? À quelle distance de $B$ et de $C$ est-elle ?
4. Un élève habite en $A$, un autre en $D$. Ils se retrouvent à l'école. Lequel parcourt la plus grande distance ?`,
      solution: `**1.** $B$ est le milieu de $[AC]$, donc $AB = BC$. $C$ est le milieu de $[BD]$, donc $BC = CD$.
Les trois distances $AB$, $BC$ et $CD$ sont égales, et $AB + BC + CD = AD = 24$ km.
Chaque distance vaut donc $24 \\div 3 = 8$ km : **deux villages voisins sont à $8$ km**.

**2.** $E$ est le milieu de $[AD]$, donc $AE = 24 \\div 2 = 12$ km.

**3.** $AB = 8$ km et $AC = 16$ km. Comme $8 < 12 < 16$, l'école est **entre $B$ et $C$**.
$BE = AE - AB = 12 - 8 = 4$ km et $EC = AC - AE = 16 - 12 = 4$ km. L'école est à $4$ km de $B$ et à $4$ km de $C$ : c'est aussi le milieu de $[BC]$.

**4.** $AE = ED = 12$ km puisque $E$ est le milieu de $[AD]$ : les deux élèves parcourent **la même distance, $12$ km**.`
    },
    {
      id: "6G1-ds-09",
      title: "Quatre points et des traits",
      difficulty: 1,
      points: 4,
      statement: `On place quatre points $A$, $B$, $C$ et $D$ sur une feuille, de sorte que trois d'entre eux ne soient jamais alignés.

1. Combien de segments ont pour extrémités deux de ces quatre points ? Les nommer tous.
2. Combien de droites passent par deux de ces quatre points ?
3. On place un point $E$ sur le segment $[AB]$, différent de $A$ et de $B$. Les droites $(AE)$ et $(AB)$ sont-elles différentes ? Justifier.
4. On place un point $F$ tel que $F \\in [AB)$ mais $F \\notin [AB]$. Où se trouve le point $F$ ?`,
      solution: `**1.** On associe chaque point à chacun des points suivants dans la liste : $[AB]$, $[AC]$, $[AD]$, $[BC]$, $[BD]$, $[CD]$. Il y a **$6$ segments** (le segment $[BA]$ est le même que $[AB]$, on ne le compte pas deux fois).

**2.** Par deux points distincts passe une seule droite. Comme trois des points ne sont jamais alignés, deux segments différents ne sont jamais portés par la même droite : il y a **$6$ droites** : $(AB)$, $(AC)$, $(AD)$, $(BC)$, $(BD)$ et $(CD)$.

**3.** Le point $E$ est sur le segment $[AB]$, donc sur la droite $(AB)$. La droite $(AE)$ passe par $A$ et $E$, comme la droite $(AB)$. Or par deux points distincts il ne passe qu'une seule droite : $(AE)$ et $(AB)$ sont **la même droite**.

**4.** La demi-droite $[AB)$ part de $A$, passe par $B$ et continue au-delà de $B$. Le point $F$ est sur cette demi-droite mais pas sur le segment $[AB]$ : il se trouve donc **au-delà de $B$**, dans le prolongement du segment $[AB]$ du côté de $B$ (les points $A$, $B$ et $F$ sont alignés dans cet ordre).`
    },
    {
      id: "6G1-ds-10",
      title: "Deux cercles qui se coupent",
      difficulty: 2,
      points: 5,
      statement: `On trace un segment $[AB]$ de longueur $4$ cm, puis :
- le cercle $\\mathcal{C}_1$ de centre $A$ et de rayon $3$ cm ;
- le cercle $\\mathcal{C}_2$ de centre $B$ et de rayon $2$ cm.

Les deux cercles se coupent en deux points $M$ et $N$.

1. Faire la figure en vraie grandeur.
2. Donner, sans mesurer, les longueurs $AM$, $AN$, $BM$ et $BN$. Justifier.
3. Calculer le périmètre du quadrilatère $AMBN$.
4. Le cercle $\\mathcal{C}_1$ coupe le segment $[AB]$ en $P$, et le cercle $\\mathcal{C}_2$ coupe le segment $[AB]$ en $Q$.
   a) Calculer $AP$, $PB$, $BQ$ et $AQ$.
   b) Que représente le point $Q$ pour le segment $[AB]$ ? Justifier.
   c) Calculer la longueur $PQ$.`,
      solution: `**1.** On trace $[AB]$ à la règle, puis les deux cercles au compas (écartement $3$ cm avec la pointe en $A$, écartement $2$ cm avec la pointe en $B$).

**2.** $M$ et $N$ sont sur le cercle $\\mathcal{C}_1$ de centre $A$ et de rayon $3$ cm, donc $AM = AN = 3$ cm.
$M$ et $N$ sont aussi sur le cercle $\\mathcal{C}_2$ de centre $B$ et de rayon $2$ cm, donc $BM = BN = 2$ cm.

**3.** Périmètre de $AMBN$ : $AM + MB + BN + NA = 3 + 2 + 2 + 3 = 10$ cm.

**4.** a) $P$ est sur $\\mathcal{C}_1$, donc $AP = 3$ cm ; comme $P$ est sur $[AB]$, $PB = AB - AP = 4 - 3 = 1$ cm.
$Q$ est sur $\\mathcal{C}_2$, donc $BQ = 2$ cm ; comme $Q$ est sur $[AB]$, $AQ = AB - BQ = 4 - 2 = 2$ cm.

b) Le point $Q$ appartient au segment $[AB]$ et $AQ = QB = 2$ cm : $Q$ est **le milieu** du segment $[AB]$.

c) Sur le segment $[AB]$, les points sont dans l'ordre $A$, $Q$, $P$, $B$ (car $AQ = 2$ cm et $AP = 3$ cm). Donc $PQ = AP - AQ = 3 - 2 = 1$ cm.`
    },
    {
      id: "6G1-ds-11",
      title: "La cible de fléchettes",
      difficulty: 3,
      points: 5,
      statement: `Une cible est formée de trois cercles de même centre $O$, de rayons $2$ cm, $4$ cm et $6$ cm.
- Une fléchette plantée à moins de $2$ cm de $O$ rapporte $10$ points.
- Entre $2$ cm et $4$ cm de $O$, elle rapporte $5$ points.
- Entre $4$ cm et $6$ cm de $O$, elle rapporte $2$ points.
- Au-delà de $6$ cm, elle ne rapporte rien.
- Une fléchette plantée exactement sur un cercle rapporte le plus grand des deux scores possibles.

1. Quel est le diamètre du plus grand cercle ?
2. Malo lance quatre fléchettes, plantées aux points $A$, $B$, $C$ et $D$ tels que $OA = 1{,}5$ cm, $OB = 4{,}5$ cm, $OC = 6{,}2$ cm et $OD = 3$ cm. Calculer son score total.
3. Sa cinquième fléchette $E$ est plantée sur le cercle de rayon $4$ cm. Quel est alors son nouveau score total ?
4. On sait que les points $A$, $O$ et $B$ sont alignés.
   a) Calculer $AB$ si $O$ est entre $A$ et $B$.
   b) Calculer $AB$ si $A$ et $B$ sont du même côté de $O$.`,
      solution: `**1.** Le plus grand cercle a pour rayon $6$ cm ; son diamètre mesure le double : $2 \\times 6 = 12$ cm.

**2.** On compare chaque distance au centre avec les rayons :
- $OA = 1{,}5$ cm et $1{,}5 < 2$ : $A$ est dans la zone centrale, $10$ points ;
- $OB = 4{,}5$ cm, entre $4$ et $6$ : $2$ points ;
- $OC = 6{,}2$ cm et $6{,}2 > 6$ : $C$ est hors de la cible, $0$ point ;
- $OD = 3$ cm, entre $2$ et $4$ : $5$ points.

Score total : $10 + 2 + 0 + 5 = 17$ points.

**3.** $E$ est sur le cercle de rayon $4$ cm : il est à la limite entre la zone à $5$ points et la zone à $2$ points ; il rapporte le plus grand score, $5$ points. Nouveau total : $17 + 5 = 22$ points.

**4.** a) Si $O$ est entre $A$ et $B$, la longueur $AB$ est la somme des deux distances : $AB = AO + OB = 1{,}5 + 4{,}5 = 6$ cm.

b) Si $A$ et $B$ sont du même côté de $O$, comme $OA < OB$, le point $A$ est entre $O$ et $B$ : $AB = OB - OA = 4{,}5 - 1{,}5 = 3$ cm.`
    },
    {
      id: "6G1-ds-12",
      title: "Deux antennes le long d'une route",
      difficulty: 4,
      points: 6,
      statement: `Deux antennes de radio $A$ et $B$ sont installées au bord d'une route droite, à $7$ km l'une de l'autre. L'antenne $A$ capte tous les lieux situés à $4$ km ou moins d'elle ; l'antenne $B$ capte tous les lieux situés à $5$ km ou moins d'elle. Sur une carte, $1$ cm représente $1$ km.

1. Décrire, avec le vocabulaire du cercle, la zone de la carte captée par l'antenne $A$.
2. Pour chacun des lieux suivants, dire par quelle(s) antenne(s) il est capté. Justifier.
   a) le hameau $H$, avec $HA = 3{,}5$ km et $HB = 6$ km ;
   b) la ferme $F$, avec $FA = 4{,}5$ km et $FB = 2{,}5$ km ;
   c) le village $V$, avec $VA = 5$ km et $VB = 5{,}5$ km.
3. On s'intéresse aux points de la route situés entre $A$ et $B$.
   a) Un point $M$ du segment $[AB]$ est à $1{,}5$ km de $A$. À quelle distance est-il de $B$ ? Par quelle(s) antenne(s) est-il capté ?
   b) Montrer que tous les points du segment $[AB]$ sont captés, puis calculer la longueur de la portion de route captée par les deux antennes.
4. L'antenne $B$ tombe en panne et ne capte plus qu'à $2$ km. Quelle longueur de la route entre $A$ et $B$ n'est plus captée ? Quelle portée minimale faudrait-il à l'antenne $B$ pour que tout le segment $[AB]$ soit de nouveau capté ?`,
      solution: `**1.** Les lieux captés par $A$ sont à $4$ km ou moins de $A$ : sur la carte, c'est le **cercle de centre $A$ et de rayon $4$ cm, ainsi que tout son intérieur** (le disque de centre $A$ et de rayon $4$ cm).

**2.** a) $HA = 3{,}5 \\le 4$ : $H$ est capté par $A$. $HB = 6 > 5$ : il n'est pas capté par $B$. Le hameau est capté **seulement par $A$**.
b) $FA = 4{,}5 > 4$ : pas capté par $A$. $FB = 2{,}5 \\le 5$ : capté par $B$. La ferme est captée **seulement par $B$**.
c) $VA = 5 > 4$ et $VB = 5{,}5 > 5$ : le village **n'est capté par aucune antenne**.

**3.** a) $M$ est sur $[AB]$, donc $MB = AB - AM = 7 - 1{,}5 = 5{,}5$ km. $AM = 1{,}5 \\le 4$ : $M$ est capté par $A$ ; $MB = 5{,}5 > 5$ : il n'est pas capté par $B$.

b) Un point du segment $[AB]$ est capté par $A$ s'il est à $4$ km ou moins de $A$. Il est capté par $B$ s'il est à $5$ km ou moins de $B$, c'est-à-dire à au moins $7 - 5 = 2$ km de $A$.
- Les points situés de $0$ à $4$ km de $A$ sont captés par $A$ ;
- les points situés de $2$ à $7$ km de $A$ sont captés par $B$.

Ces deux portions se chevauchent : tout le segment $[AB]$ est capté. La portion captée par les deux antennes va de $2$ km à $4$ km de $A$ : sa longueur est $4 - 2 = 2$ km.

**4.** L'antenne $B$ capte maintenant les points à au moins $7 - 2 = 5$ km de $A$. L'antenne $A$ capte jusqu'à $4$ km de $A$. Les points situés entre $4$ km et $5$ km de $A$ ne sont plus captés : cela fait $5 - 4 = 1$ km de route.

Pour tout capter, l'antenne $B$ doit atteindre le point situé à $4$ km de $A$, qui est à $7 - 4 = 3$ km de $B$. Il faut une portée d'**au moins $3$ km**.`
    },
    {
      id: "6G1-ds-13",
      title: "Lire une figure avec les bons symboles",
      difficulty: 1,
      points: 4,
      statement: `Sur la figure ci-dessous, les points $A$, $B$ et $C$ sont sur la droite tracée, et le point $D$ n'est pas sur cette droite.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 340 130" width="340" height="130" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="15" y1="100" x2="325" y2="100" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="100" r="3.5" fill="#2563eb"/><text x="60" y="122" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">A</text><circle cx="160" cy="100" r="3.5" fill="#2563eb"/><text x="160" y="122" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">B</text><circle cx="270" cy="100" r="3.5" fill="#2563eb"/><text x="270" y="122" text-anchor="middle" font-size="15" font-weight="bold" fill="#2563eb">C</text><circle cx="210" cy="30" r="3.5" fill="#dc2626"/><text x="222" y="28" font-size="15" font-weight="bold" fill="#dc2626">D</text></svg></div>

1. Donner trois noms différents de la droite tracée.
2. Recopier et compléter avec le symbole $\\in$ ou $\\notin$ :
   a) $C \\ldots (AB)$ ;
   b) $C \\ldots [AB]$ ;
   c) $B \\ldots [AC]$ ;
   d) $D \\ldots (BC)$.
3. Nommer les deux demi-droites d'origine $B$ portées par la droite tracée.
4. Le point $C$ appartient-il à la demi-droite $[AB)$ ? Justifier.`,
      solution: `**1.** Une droite se nomme avec deux de ses points, dans n'importe quel ordre : par exemple $(AB)$, $(AC)$ et $(BC)$ (on accepte aussi $(BA)$, $(CA)$, $(CB)$).

**2.**
a) $C \\in (AB)$ : la droite $(AB)$ est illimitée et $C$ est dessus.
b) $C \\notin [AB]$ : le segment $[AB]$ s'arrête en $A$ et en $B$, et $C$ est au-delà de $B$.
c) $B \\in [AC]$ : $B$ est entre $A$ et $C$.
d) $D \\notin (BC)$ : le point $D$ n'est pas sur la droite tracée, qui est aussi la droite $(BC)$.

**3.** Les deux demi-droites d'origine $B$ sont $[BA)$ (qui part de $B$ et passe par $A$) et $[BC)$ (qui part de $B$ et passe par $C$).

**4.** La demi-droite $[AB)$ part de $A$, passe par $B$ et continue sans fin au-delà de $B$. Le point $C$ est sur la droite, au-delà de $B$ quand on part de $A$ : donc **$C \\in [AB)$**.`
    },
    {
      id: "6G1-ds-14",
      title: "La distance d'un point à une droite",
      difficulty: 2,
      points: 5,
      statement: `Un randonneur est au point $P$ et veut rejoindre une route droite, représentée par la droite $(d)$. Sur la figure (qui n'est pas en vraie grandeur), le point $H$ est sur $(d)$ et la droite $(PH)$ est perpendiculaire à $(d)$. Les points $M$ et $N$ sont aussi sur $(d)$. On sait que : $PH = 3$ km, $PM = 4{,}2$ km et $PN = 5$ km.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 340 185" width="340" height="185" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="10" y1="150" x2="330" y2="150" stroke="currentColor" stroke-width="2"/><text x="315" y="142" font-size="14" fill="currentColor">(d)</text><line x1="150" y1="60" x2="150" y2="150" stroke="#2563eb" stroke-width="2"/><line x1="150" y1="60" x2="238" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="150" y1="60" x2="30" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M150,140 L160,140 L160,150" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="150" cy="60" r="3.5" fill="#dc2626"/><text x="146" y="48" font-size="15" font-weight="bold" fill="#dc2626">P</text><circle cx="150" cy="150" r="3" fill="currentColor"/><text x="145" y="172" font-size="15" fill="currentColor">H</text><circle cx="238" cy="150" r="3" fill="currentColor"/><text x="233" y="172" font-size="15" fill="currentColor">M</text><circle cx="30" cy="150" r="3" fill="currentColor"/><text x="25" y="172" font-size="15" fill="currentColor">N</text></svg></div>

1. Parmi les trois chemins en ligne droite $[PH]$, $[PM]$ et $[PN]$, lequel est le plus court ? Est-ce un hasard ?
2. Quelle est la distance du point $P$ à la droite $(d)$ ? Rappeler la définition utilisée.
3. Un deuxième randonneur est au point $Q$, de l'autre côté de la route. La perpendiculaire à $(d)$ passant par $Q$ coupe $(d)$ en $K$, avec $QK = 2{,}5$ km. Lequel des deux randonneurs est le plus près de la route ? De combien de kilomètres ?
4. Sur un plan à l'échelle $1$ cm pour $1$ km, expliquer comment construire le point $H$ à partir du point $P$ et de la droite $(d)$, avec les instruments.`,
      solution: `**1.** Le chemin le plus court est $[PH]$ : $3 < 4{,}2 < 5$. Ce n'est pas un hasard : le point $H$ est le pied de la perpendiculaire à $(d)$ passant par $P$, et de tous les points de $(d)$, c'est le plus proche de $P$.

**2.** La distance du point $P$ à la droite $(d)$ est la longueur $PH$, où $H$ est le point d'intersection de $(d)$ et de la perpendiculaire à $(d)$ passant par $P$. Ici, **la distance de $P$ à $(d)$ est $3$ km**.

**3.** La distance de $Q$ à la route est $QK = 2{,}5$ km. Comme $2{,}5 < 3$, **le deuxième randonneur est le plus près de la route**, de $3 - 2{,}5 = 0{,}5$ km.

**4.** On place l'équerre : un côté de l'angle droit le long de la droite $(d)$, l'autre côté de l'angle droit passant par $P$. On trace la perpendiculaire à $(d)$ passant par $P$ ; elle coupe $(d)$ en $H$. Sur le plan, on doit alors mesurer $PH = 3$ cm.`
    },
    {
      id: "6G1-ds-15",
      title: "Rédiger un programme de construction",
      difficulty: 3,
      points: 5,
      statement: `Voici une figure réalisée par Elsa. Les codages indiquent les égalités de longueurs et l'angle droit. On sait de plus que $AB = 6$ cm, que le cercle a pour centre $A$ et passe par $I$, et que $BC = 3$ cm.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 330 235" width="330" height="235" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><circle cx="100" cy="130" r="90" fill="none" stroke="#2563eb" stroke-width="1.8"/><line x1="100" y1="130" x2="280" y2="130" stroke="currentColor" stroke-width="2"/><line x1="280" y1="15" x2="280" y2="225" stroke="currentColor" stroke-width="1.5"/><line x1="190" y1="130" x2="280" y2="40" stroke="#dc2626" stroke-width="2"/><line x1="141" y1="124" x2="149" y2="136" stroke="currentColor" stroke-width="1.5"/><line x1="231" y1="124" x2="239" y2="136" stroke="currentColor" stroke-width="1.5"/><path d="M270,130 L270,120 L280,120" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="100" cy="130" r="3" fill="currentColor"/><text x="88" y="150" font-size="15" fill="currentColor">A</text><circle cx="190" cy="130" r="3" fill="currentColor"/><text x="186" y="150" font-size="15" fill="currentColor">I</text><circle cx="280" cy="130" r="3" fill="currentColor"/><text x="287" y="150" font-size="15" fill="currentColor">B</text><circle cx="280" cy="40" r="3" fill="currentColor"/><text x="288" y="44" font-size="15" fill="currentColor">C</text></svg></div>

1. Que représente le point $I$ pour le segment $[AB]$ ? Calculer $AI$.
2. Donner le rayon et le diamètre du cercle. Justifier.
3. Rédiger un programme de construction de cette figure, en quatre ou cinq étapes, avec le vocabulaire et les notations de géométrie, pour qu'un camarade puisse la reproduire sans la voir.
4. Construire la figure en vraie grandeur en suivant le programme.`,
      solution: `**1.** Les codages indiquent $AI = IB$ et $I$ est sur le segment $[AB]$ : $I$ est **le milieu de $[AB]$**. Donc $AI = 6 \\div 2 = 3$ cm.

**2.** Le cercle a pour centre $A$ et passe par $I$ : son rayon est $AI = 3$ cm. Son diamètre est le double du rayon : $2 \\times 3 = 6$ cm (c'est aussi la longueur $AB$).

**3.** Un programme possible :
- Tracer un segment $[AB]$ de longueur $6$ cm.
- Placer le point $I$, milieu du segment $[AB]$.
- Tracer le cercle de centre $A$ passant par $I$ (de rayon $3$ cm).
- Tracer la droite perpendiculaire à $(AB)$ passant par $B$.
- Placer sur cette droite un point $C$ tel que $BC = 3$ cm, puis tracer le segment $[IC]$.

(Toute rédaction précise, dans un ordre qui permet de construire chaque élément, est acceptée. Il faut indiquer quel côté de $(AB)$ choisir pour $C$ si l'on veut exactement la même figure : par exemple « au-dessus de $(AB)$ ».)

**4.** On trace $[AB]$ à la règle graduée, on place $I$ à $3$ cm de $A$, on trace le cercle au compas (écartement $3$ cm, pointe en $A$), la perpendiculaire avec l'équerre, puis on reporte $3$ cm à partir de $B$ pour placer $C$.`
    },
    {
      id: "6G1-ds-16",
      title: "Des points à égale distance de deux points",
      difficulty: 4,
      points: 6,
      statement: `On trace un segment $[AB]$ de longueur $6$ cm et on note $I$ son milieu. On cherche les points situés à la **même distance $r$** du point $A$ et du point $B$, pour différentes valeurs de $r$.

1. Cas $r = 4$ cm.
   a) Où se trouvent tous les points situés à $4$ cm du point $A$ ? Et tous les points situés à $4$ cm du point $B$ ?
   b) Construire ces deux ensembles de points. Combien de points sont à la fois à $4$ cm de $A$ et à $4$ cm de $B$ ? Les nommer $M$ et $N$.
2. Cas $r = 3$ cm. Tracer les cercles de centre $A$ et de centre $B$ de rayon $3$ cm. Que constate-t-on ? Quel point est à la fois à $3$ cm de $A$ et à $3$ cm de $B$ ?
3. Cas $r = 2$ cm. Sur le segment $[AB]$, les points situés à $2$ cm ou moins de $A$ vont de $A$ jusqu'à quelle distance de $A$ ? Et ceux situés à $2$ cm ou moins de $B$ ? En s'aidant de la figure, expliquer pourquoi aucun point n'est à la fois à $2$ cm de $A$ et à $2$ cm de $B$.
4. Quelle est la plus petite valeur de $r$ pour laquelle il existe au moins un point à la distance $r$ de $A$ et de $B$ ?`,
      solution: `**1.** a) Les points situés à $4$ cm de $A$ forment le **cercle de centre $A$ et de rayon $4$ cm**. Ceux situés à $4$ cm de $B$ forment le **cercle de centre $B$ et de rayon $4$ cm**.
b) Les deux cercles se coupent en **deux points** $M$ et $N$, un de chaque côté de la droite $(AB)$. Ce sont les seuls points à $4$ cm de $A$ et à $4$ cm de $B$ : $MA = MB = 4$ cm et $NA = NB = 4$ cm.

**2.** Les deux cercles de rayon $3$ cm se touchent en **un seul point** : le milieu $I$ de $[AB]$. En effet, $IA = IB = 6 \\div 2 = 3$ cm. Le seul point à $3$ cm de $A$ et de $B$ est $I$.

**3.** Sur le segment $[AB]$, les points à $2$ cm ou moins de $A$ vont de $A$ jusqu'à $2$ cm de $A$ ; les points à $2$ cm ou moins de $B$ vont de $6 - 2 = 4$ cm de $A$ jusqu'à $B$. Il reste un « trou » de $2$ cm entre les deux. Sur la figure, le cercle de centre $A$ de rayon $2$ cm et le cercle de centre $B$ de rayon $2$ cm sont trop petits pour se rejoindre : ils n'ont **aucun point commun**, donc aucun point n'est à $2$ cm de $A$ et à $2$ cm de $B$.

**4.** Les deux cercles se rencontrent dès que le rayon atteint la moitié de $AB$. La plus petite valeur est **$r = 3$ cm**, et le seul point obtenu est alors le milieu $I$. Pour $r < 3$ cm, il n'y a aucun point ; pour $r > 3$ cm, il y en a deux.`
    }
  ],
  "6G2": [
    {
      id: "6G2-ds-01",
      title: "Utiliser la médiatrice d'un segment",
      difficulty: 1,
      points: 4,
      statement: `On considère un segment $[AB]$ de longueur $7$ cm et sa médiatrice $(d)$, qui coupe $[AB]$ en $I$.

1. Rappeler la définition de la médiatrice d'un segment.
2. Calculer $IA$.
3. Un point $M$ de $(d)$ est tel que $MA = 4{,}5$ cm. Que vaut $MB$ ? Justifier.
4. Un point $N$ vérifie $NA = 5$ cm et $NB = 5$ cm. Le point $N$ est-il sur $(d)$ ? Justifier.
5. Un point $P$ vérifie $PA = 3$ cm et $PB = 4$ cm. Le point $P$ est-il sur $(d)$ ?`,
      solution: `**1.** La médiatrice d'un segment est la droite **perpendiculaire à ce segment qui passe par son milieu**.

**2.** $I$ est le milieu de $[AB]$, donc $IA = 7 \\div 2 = 3{,}5$ cm.

**3.** Propriété : si un point est sur la médiatrice d'un segment, alors il est à égale distance des extrémités de ce segment. $M \\in (d)$, donc $MB = MA = 4{,}5$ cm.

**4.** $NA = NB = 5$ cm : $N$ est à égale distance de $A$ et de $B$. Propriété : si un point est à égale distance des extrémités d'un segment, alors il est sur sa médiatrice. Donc **$N \\in (d)$**.

**5.** $PA = 3$ cm et $PB = 4$ cm : $PA \\neq PB$, donc **$P$ n'est pas sur la médiatrice** $(d)$.`
    },
    {
      id: "6G2-ds-02",
      title: "Ce que conserve la symétrie axiale",
      difficulty: 1,
      points: 4,
      statement: `Par la symétrie d'axe $(d)$, le segment $[AB]$ a pour symétrique le segment $[A'B']$. On sait que $AB = 4{,}2$ cm. Le point $C$ est sur l'axe $(d)$.

1. Quelle est la longueur $A'B'$ ? Justifier.
2. Quel est le symétrique du point $C$ ? Justifier.
3. L'angle $\\widehat{ABC}$ mesure $35^\\circ$. Que mesure l'angle $\\widehat{A'B'C'}$, où $C'$ est le symétrique de $C$ ?
4. Le cercle de centre $O$ et de rayon $2$ cm a pour symétrique un cercle. Donner son centre et son rayon.`,
      solution: `**1.** La symétrie axiale **conserve les longueurs** : le symétrique d'un segment est un segment de même longueur. Donc $A'B' = AB = 4{,}2$ cm.

**2.** $C$ est sur l'axe de symétrie : un point de l'axe est **son propre symétrique**. Donc $C' = C$.

**3.** La symétrie axiale **conserve les mesures d'angles** : $\\widehat{A'B'C'} = \\widehat{ABC} = 35^\\circ$.

**4.** Le symétrique d'un cercle est un cercle de **même rayon**, dont le centre est le symétrique du centre. C'est donc le cercle de centre $O'$ (symétrique de $O$ par rapport à $(d)$) et de rayon $2$ cm.`
    },
    {
      id: "6G2-ds-03",
      title: "Compter les axes de symétrie",
      difficulty: 2,
      points: 5,
      statement: `Pour décorer la classe, Noé découpe des figures en papier et les plie pour chercher leurs axes de symétrie.

1. Recopier et compléter le tableau en indiquant le nombre d'axes de symétrie de chaque figure.

| Figure | carré | rectangle (non carré) | losange (non carré) | triangle équilatéral | triangle isocèle (non équilatéral) | cercle |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Nombre d'axes | | | | | | |

2. Décrire précisément les axes de symétrie du rectangle.
3. Un triangle dont les trois côtés ont des longueurs différentes a-t-il un axe de symétrie ? Expliquer.`,
      solution: `**1.**

| Figure | carré | rectangle (non carré) | losange (non carré) | triangle équilatéral | triangle isocèle (non équilatéral) | cercle |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Nombre d'axes | $4$ | $2$ | $2$ | $3$ | $1$ | une infinité |

Pour le cercle : toute droite passant par le centre est un axe de symétrie.

**2.** Les deux axes de symétrie du rectangle sont les **médiatrices de ses côtés** : la droite qui passe par les milieux des deux longueurs et la droite qui passe par les milieux des deux largeurs. (Les diagonales ne sont pas des axes de symétrie d'un rectangle non carré : en pliant, les coins ne se superposent pas.)

**3.** Non. Un axe de symétrie d'un triangle devrait envoyer un côté sur un autre côté de même longueur (la symétrie conserve les longueurs). Si les trois côtés ont des longueurs différentes, c'est impossible : ce triangle n'a **aucun axe de symétrie**.`
    },
    {
      id: "6G2-ds-04",
      title: "Médiatrice et triangle isocèle",
      difficulty: 2,
      points: 5,
      statement: `On construit un triangle $ABC$ tel que $AB = AC = 5$ cm et $BC = 6$ cm. On appelle $(d)$ la médiatrice du segment $[BC]$ et $I$ le milieu de $[BC]$.

1. Construire la figure en vraie grandeur.
2. Montrer que le point $A$ est sur la droite $(d)$.
3. Calculer $BI$. Que peut-on dire des droites $(AI)$ et $(BC)$ ?
4. Un point $D$ de la droite $(d)$ est tel que $DB = 4$ cm. Calculer $DC$. Justifier.`,
      solution: `**1.** On trace $[BC]$ de $6$ cm, puis deux arcs de cercle de rayon $5$ cm, centrés en $B$ et en $C$ : leur point d'intersection est $A$.

**2.** $AB = AC = 5$ cm : le point $A$ est à égale distance de $B$ et de $C$. Or, si un point est à égale distance des extrémités d'un segment, alors il est sur sa médiatrice. Donc **$A \\in (d)$**.

**3.** $I$ est le milieu de $[BC]$, donc $BI = 6 \\div 2 = 3$ cm.
$A$ et $I$ sont tous les deux sur la médiatrice $(d)$, donc $(AI) = (d)$. La médiatrice est perpendiculaire au segment : **$(AI) \\perp (BC)$**.

**4.** $D$ est sur la médiatrice de $[BC]$, donc il est à égale distance de $B$ et de $C$ : $DC = DB = 4$ cm.`
    },
    {
      id: "6G2-ds-05",
      title: "La fontaine du village",
      difficulty: 3,
      points: 5,
      statement: `Deux maisons $A$ et $B$ sont situées du même côté d'une route droite $(r)$. Le maire veut installer une fontaine $F$ **au bord de la route**, à **la même distance** des deux maisons.

1. Sur quelle droite doit se trouver la fontaine pour être à égale distance de $A$ et de $B$ ? Justifier.
2. Expliquer comment construire le point $F$ sur un plan.
3. Sur le plan (échelle : $1$ cm pour $10$ m), on mesure $FA = 4{,}5$ cm. À quelle distance réelle de chaque maison se trouve la fontaine ?
4. Dans un autre village, la route est perpendiculaire à la droite $(AB)$, mais ne passe pas par le milieu de $[AB]$. Peut-on y placer la fontaine ? Expliquer.`,
      solution: `**1.** Les points à égale distance de $A$ et de $B$ sont exactement les points de la **médiatrice du segment $[AB]$** (propriété caractéristique de la médiatrice). La fontaine doit donc être sur cette médiatrice.

**2.** On trace la médiatrice de $[AB]$ (à la règle et au compas, ou en plaçant le milieu de $[AB]$ et en traçant la perpendiculaire). La fontaine $F$ est le **point d'intersection de cette médiatrice avec la route $(r)$**.

**3.** $F$ est sur la médiatrice, donc $FB = FA = 4{,}5$ cm sur le plan. En réalité : $4{,}5 \\times 10 = 45$ m. La fontaine est à **$45$ m de chaque maison**.

**4.** La médiatrice de $[AB]$ est perpendiculaire à $(AB)$, et la route aussi. Deux droites perpendiculaires à une même droite sont parallèles : la route et la médiatrice sont parallèles. Comme la route ne passe pas par le milieu de $[AB]$, ces deux droites sont distinctes et **ne se coupent pas** : on ne peut pas placer la fontaine au bord de cette route.`
    },
    {
      id: "6G2-ds-06",
      title: "Le symétrique d'un triangle",
      difficulty: 3,
      points: 5,
      statement: `On considère un triangle $ABC$ dont le sommet $A$ est sur une droite $(d)$, les points $B$ et $C$ étant d'un même côté de $(d)$. On a : $AB = 4$ cm, $BC = 5$ cm, $AC = 3$ cm et $\\widehat{ABC} = 37^\\circ$. On construit $A'B'C'$, le symétrique du triangle $ABC$ par rapport à $(d)$.

1. Quel est le symétrique du point $A$ ? Justifier.
2. Donner les longueurs $A'B'$, $B'C'$, $A'C'$ et la mesure de $\\widehat{A'B'C'}$. Justifier.
3. Calculer le périmètre du triangle $ABC$, puis celui du triangle $A'B'C'$.
4. Que représente la droite $(d)$ pour le segment $[BB']$ ? En déduire la position des droites $(BB')$ et $(d)$.`,
      solution: `**1.** $A$ est sur l'axe $(d)$ : il est son propre symétrique, donc $A' = A$.

**2.** La symétrie axiale conserve les longueurs et les angles :
$A'B' = AB = 4$ cm ; $B'C' = BC = 5$ cm ; $A'C' = AC = 3$ cm ; $\\widehat{A'B'C'} = \\widehat{ABC} = 37^\\circ$.

**3.** Périmètre de $ABC$ : $4 + 5 + 3 = 12$ cm.
Les côtés de $A'B'C'$ ont les mêmes longueurs, donc son périmètre vaut aussi **$12$ cm** (la symétrie conserve les périmètres).

**4.** Par définition, $B'$ est le symétrique de $B$ par rapport à $(d)$ signifie que $(d)$ est la **médiatrice du segment $[BB']$**. La médiatrice est perpendiculaire au segment, donc **$(BB') \\perp (d)$**.`
    },
    {
      id: "6G2-ds-07",
      title: "Le plus court chemin jusqu'à la rivière",
      difficulty: 4,
      points: 6,
      statement: `Une ferme $A$ et une écurie $B$ sont situées du même côté d'une rivière bien droite, représentée par la droite $(d)$. Chaque matin, le fermier part de $A$, va remplir un seau au bord de la rivière en un point $M$, puis apporte l'eau en $B$. Il cherche le point $M$ qui rend son trajet $AM + MB$ le plus court possible.

On appelle $A'$ le symétrique de $A$ par rapport à $(d)$.

1. Pour un point $M$ quelconque de $(d)$, expliquer pourquoi $AM = A'M$.
2. En déduire que la longueur du trajet est égale à $A'M + MB$.
3. Où faut-il placer $M$ sur $(d)$ pour que $A'M + MB$ soit le plus petit possible ? Expliquer la construction.
4. Sur le plan (échelle : $1$ cm pour $50$ m), on mesure $A'B = 9{,}6$ cm. Quelle est la longueur réelle du trajet le plus court ?`,
      solution: `**1.** $A'$ est le symétrique de $A$ par rapport à $(d)$, donc $(d)$ est la médiatrice de $[AA']$. Le point $M$ est sur cette médiatrice, donc il est à égale distance de $A$ et de $A'$ : **$AM = A'M$**.
(Autre justification : $M$ est sur l'axe, il est son propre symétrique ; $[A'M]$ est le symétrique de $[AM]$ et la symétrie conserve les longueurs.)

**2.** Trajet $= AM + MB = A'M + MB$ puisque $AM = A'M$.

**3.** $A'$ et $B$ sont de part et d'autre de la rivière. Le chemin le plus court entre $A'$ et $B$ est le segment $[A'B]$ : $A'M + MB$ est le plus petit lorsque $M$ est sur $[A'B]$.
Construction : on construit $A'$, symétrique de $A$ par rapport à $(d)$, on trace le segment $[A'B]$ ; **$M$ est le point d'intersection de $[A'B]$ et de $(d)$**.

**4.** Le trajet le plus court vaut $A'B$, soit $9{,}6$ cm sur le plan. En réalité : $9{,}6 \\times 50 = 480$ m. Le trajet le plus court mesure **$480$ m**.`
    },
    {
      id: "6G2-ds-08",
      title: "Le cerf-volant",
      difficulty: 4,
      points: 5,
      statement: `Lina dessine un cerf-volant $ABCD$ : le point $C$ est le symétrique du point $A$ par rapport à la droite $(BD)$. On sait que $AB = 5$ cm, $AD = 8$ cm, $AC = 6$ cm et $\\widehat{BAD} = 121^\\circ$. Les segments $[AC]$ et $[BD]$ se coupent en $I$.

1. Quel est le symétrique de $B$ par rapport à $(BD)$ ? et celui de $D$ ?
2. En déduire les longueurs $CB$ et $CD$, puis le périmètre du cerf-volant $ABCD$.
3. Que mesure l'angle $\\widehat{BCD}$ ? Justifier.
4. Que représente la droite $(BD)$ pour le segment $[AC]$ ? En déduire la longueur $AI$ et la nature de l'angle $\\widehat{AIB}$.`,
      solution: `**1.** $B$ et $D$ sont sur l'axe $(BD)$ : chacun est **son propre symétrique**.

**2.** Le segment $[CB]$ est le symétrique de $[AB]$ et $[CD]$ celui de $[AD]$. La symétrie conserve les longueurs : $CB = AB = 5$ cm et $CD = AD = 8$ cm.
Périmètre : $AB + BC + CD + DA = 5 + 5 + 8 + 8 = 26$ cm.

**3.** L'angle $\\widehat{BCD}$ est le symétrique de l'angle $\\widehat{BAD}$. La symétrie conserve les angles : $\\widehat{BCD} = 121^\\circ$.

**4.** $C$ est le symétrique de $A$ par rapport à $(BD)$, donc **$(BD)$ est la médiatrice de $[AC]$** : elle coupe $[AC]$ en son milieu et perpendiculairement.
Donc $I$ est le milieu de $[AC]$ : $AI = 6 \\div 2 = 3$ cm, et $(AC) \\perp (BD)$ : l'angle $\\widehat{AIB}$ est un **angle droit** ($90^\\circ$).`
    },
    {
      id: "6G2-ds-09",
      title: "Le papillon plié",
      difficulty: 1,
      points: 4,
      statement: `Léa plie une feuille en deux le long d'une droite $(d)$. Elle dessine la moitié d'un papillon d'un côté du pli, puis décalque son dessin de l'autre côté pour obtenir le papillon entier.

- Le bout de l'aile droite est le point $T$ ; le segment qui le relie au bout de l'aile gauche $T'$ coupe le pli $(d)$ en $H$, avec $TH = 4$ cm.
- La tête du papillon est un point $K$ situé sur le pli, avec $KT = 5$ cm.
- L'antenne droite mesure $3$ cm et fait un angle de $30^\\circ$ avec le pli.

1. Quelle transformation permet de passer d'une moitié du papillon à l'autre ? Préciser son axe.
2. Que représente la droite $(d)$ pour le segment $[TT']$ ? En déduire la longueur $TT'$.
3. Quel est le symétrique du point $K$ ? En déduire la longueur $KT'$.
4. Donner la longueur de l'antenne gauche et l'angle qu'elle fait avec le pli. Justifier.`,
      solution: `**1.** Le pliage fait coïncider les deux moitiés : on passe de l'une à l'autre par la **symétrie axiale d'axe $(d)$** (le pli).

**2.** $T'$ est le symétrique de $T$ par rapport à $(d)$ : la droite $(d)$ est donc la **médiatrice** du segment $[TT']$. Elle le coupe perpendiculairement en son milieu, qui est $H$. Ainsi $TT' = 2 \\times TH = 2 \\times 4 = 8$ cm.

**3.** Le point $K$ est sur l'axe $(d)$ : il est **son propre symétrique**. Le segment $[KT']$ est donc le symétrique du segment $[KT]$. La symétrie axiale conserve les longueurs, donc $KT' = KT = 5$ cm.

**4.** L'antenne gauche est la symétrique de l'antenne droite, et le pli est son propre symétrique. La symétrie axiale conserve les longueurs et les angles : l'antenne gauche mesure **$3$ cm** et fait un angle de **$30^\\circ$** avec le pli.`
    },
    {
      id: "6G2-ds-10",
      title: "Le symétrique d'un point au compas seul",
      difficulty: 2,
      points: 5,
      statement: `Pour construire le symétrique d'un point $A$ par rapport à une droite $(d)$ sans équerre, Hugo procède ainsi :
- il place deux points $E$ et $F$ sur la droite $(d)$ ;
- il trace l'arc de cercle de centre $E$ passant par $A$ ;
- il trace l'arc de cercle de centre $F$ passant par $A$ ;
- les deux arcs se recoupent, de l'autre côté de $(d)$, en un point qu'il appelle $A'$.

1. Réaliser cette construction avec $EA = 4$ cm et $FA = 3$ cm.
2. Expliquer pourquoi $EA' = EA$ et $FA' = FA$.
3. En déduire que les points $E$ et $F$ sont sur la médiatrice du segment $[AA']$.
4. Expliquer pourquoi la droite $(d)$ est la médiatrice de $[AA']$, puis conclure : le point $A'$ est-il bien le symétrique de $A$ par rapport à $(d)$ ?`,
      solution: `**1.** On place $E$ et $F$ sur $(d)$, on règle le compas à $4$ cm avec la pointe en $E$ et à $3$ cm avec la pointe en $F$ ($E$ et $F$ étant choisis pour que ces arcs passent par $A$). Les deux arcs se recoupent en $A'$.

**2.** $A$ et $A'$ sont tous les deux sur l'arc de centre $E$ passant par $A$ : ils sont à la même distance de $E$, donc $EA' = EA$. De même, ils sont sur l'arc de centre $F$, donc $FA' = FA$.

**3.** La médiatrice d'un segment est formée des points situés à égale distance de ses extrémités.
- $EA = EA'$ : le point $E$ est sur la médiatrice de $[AA']$.
- $FA = FA'$ : le point $F$ est sur la médiatrice de $[AA']$.

**4.** La médiatrice de $[AA']$ est une droite qui passe par $E$ et par $F$. Or par deux points distincts il ne passe qu'une seule droite : c'est la droite $(EF)$, c'est-à-dire $(d)$. Donc $(d)$ est la médiatrice de $[AA']$.

Par définition, le symétrique de $A$ par rapport à $(d)$ est le point $A'$ tel que $(d)$ soit la médiatrice de $[AA']$ : la construction d'Hugo donne **bien le symétrique** de $A$.`
    },
    {
      id: "6G2-ds-11",
      title: "Un triangle né d'une symétrie",
      difficulty: 3,
      points: 5,
      statement: `On trace une droite $(d)$ et un point $A$ sur cette droite. On note $[Ax)$ une des deux demi-droites d'origine $A$ portées par $(d)$. On place un point $B$ hors de $(d)$ tel que $AB = 5$ cm et $\\widehat{xAB} = 35^\\circ$. On construit le point $B'$, symétrique de $B$ par rapport à $(d)$. Le segment $[BB']$ coupe $(d)$ en $I$.

1. Construire la figure en vraie grandeur.
2. Calculer $AB'$. Justifier.
3. Quelle est la nature du triangle $ABB'$ ?
4. Donner la mesure de l'angle $\\widehat{xAB'}$, puis celle de l'angle $\\widehat{BAB'}$. Justifier.
5. a) Que représente le point $I$ pour le segment $[BB']$ ? Quel angle forment les droites $(BB')$ et $(d)$ ?
   b) On mesure $BB' \\approx 5{,}7$ cm. En déduire une valeur approchée de $BI$.`,
      solution: `**1.** On trace $(d)$, le point $A$ et la demi-droite $[Ax)$. Au rapporteur, on trace la demi-droite faisant un angle de $35^\\circ$ avec $[Ax)$ et on y place $B$ à $5$ cm de $A$. On construit $B'$ à l'équerre et à la règle graduée (ou au compas).

**2.** $A$ est sur l'axe : il est son propre symétrique. Le segment $[AB']$ est donc le symétrique de $[AB]$ ; la symétrie axiale conserve les longueurs, donc $AB' = AB = 5$ cm.

**3.** $AB = AB' = 5$ cm : le triangle $ABB'$ est **isocèle en $A$**.

**4.** La demi-droite $[Ax)$ est portée par l'axe, elle est sa propre symétrique. L'angle $\\widehat{xAB'}$ est le symétrique de l'angle $\\widehat{xAB}$ ; la symétrie conserve les angles, donc $\\widehat{xAB'} = 35^\\circ$.
Les points $B$ et $B'$ sont de part et d'autre de $(d)$, donc les angles $\\widehat{xAB}$ et $\\widehat{xAB'}$ sont adjacents : $\\widehat{BAB'} = 35^\\circ + 35^\\circ = 70^\\circ$.

**5.** a) $B'$ est le symétrique de $B$ par rapport à $(d)$, donc $(d)$ est la médiatrice de $[BB']$ : elle coupe $[BB']$ perpendiculairement en son milieu. Le point $I$ est le **milieu** de $[BB']$ et les droites $(BB')$ et $(d)$ sont **perpendiculaires** (angle droit, $90^\\circ$).

b) $BI = BB' \\div 2 \\approx 5{,}7 \\div 2 = 2{,}85$ cm.`
    },
    {
      id: "6G2-ds-12",
      title: "Deux miroirs perpendiculaires",
      difficulty: 4,
      points: 5,
      statement: `Deux droites $(d_1)$ et $(d_2)$ sont perpendiculaires en un point $O$. Le point $A$ est situé à $3$ cm de $O$, et la demi-droite $[OA)$ fait un angle de $25^\\circ$ avec la droite $(d_1)$.

On construit le point $A_1$, symétrique de $A$ par rapport à $(d_1)$, puis le point $A_2$, symétrique de $A_1$ par rapport à $(d_2)$.

1. Construire la figure en vraie grandeur.
2. Justifier que $OA_1 = 3$ cm et que $OA_2 = 3$ cm.
3. a) Justifier que l'angle $\\widehat{AOA_1}$ mesure $50^\\circ$.
   b) On admet que l'angle $\\widehat{A_1OA_2}$ mesure $130^\\circ$. Calculer $\\widehat{AOA_1} + \\widehat{A_1OA_2}$.
4. Que peut-on en déduire pour les points $A$, $O$ et $A_2$ ? Que représente le point $O$ pour le segment $[AA_2]$ ?`,
      solution: `**1.** On trace les deux droites perpendiculaires, la demi-droite $[OA)$ au rapporteur à $25^\\circ$ de $(d_1)$, et $A$ à $3$ cm de $O$. On construit $A_1$ puis $A_2$ à l'équerre et au compas (ou sur papier quadrillé).

**2.** $O$ est sur $(d_1)$ : il est son propre symétrique par rapport à $(d_1)$. Le segment $[OA_1]$ est le symétrique de $[OA]$, et la symétrie axiale conserve les longueurs : $OA_1 = OA = 3$ cm.
De même, $O$ est sur $(d_2)$, donc $[OA_2]$ est le symétrique de $[OA_1]$ par rapport à $(d_2)$ : $OA_2 = OA_1 = 3$ cm.

**3.** a) La symétrie axiale conserve les angles : $[OA_1)$ fait, elle aussi, un angle de $25^\\circ$ avec $(d_1)$, mais de l'autre côté de $(d_1)$. Donc $\\widehat{AOA_1} = 25^\\circ + 25^\\circ = 50^\\circ$.
(Pour l'angle admis : $[OA_1)$ fait un angle de $90^\\circ - 25^\\circ = 65^\\circ$ avec $(d_2)$, et son symétrique aussi, de l'autre côté : $65^\\circ + 65^\\circ = 130^\\circ$.)
b) $\\widehat{AOA_1} + \\widehat{A_1OA_2} = 50^\\circ + 130^\\circ = 180^\\circ$.

**4.** Les deux angles sont adjacents et forment ensemble l'angle $\\widehat{AOA_2}$, qui mesure $180^\\circ$ : c'est un angle plat. Les points $A$, $O$ et $A_2$ sont donc **alignés**, avec $O$ entre $A$ et $A_2$.
Comme de plus $OA = OA_2 = 3$ cm, le point $O$ est le **milieu** du segment $[AA_2]$.`
    },
    {
      id: "6G2-ds-13",
      title: "Le symétrique sur un quadrillage",
      difficulty: 1,
      points: 4,
      statement: `Sur le quadrillage ci-dessous, la droite $(d)$ en pointillés rouges est un axe de symétrie. On a tracé le segment $[AB]$ et placé le point $C$ sur $(d)$, ainsi que les points $E$, $F$, $G$ et $K$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 330 210" width="330" height="210" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="15" y1="15" x2="15" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="45" y1="15" x2="45" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="75" y1="15" x2="75" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="105" y1="15" x2="105" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="135" y1="15" x2="135" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="165" y1="15" x2="165" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="195" y1="15" x2="195" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="225" y1="15" x2="225" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="255" y1="15" x2="255" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="285" y1="15" x2="285" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="315" y1="15" x2="315" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="15" y1="15" x2="315" y2="15" stroke="#cbd5e1" stroke-width="1"/><line x1="15" y1="45" x2="315" y2="45" stroke="#cbd5e1" stroke-width="1"/><line x1="15" y1="75" x2="315" y2="75" stroke="#cbd5e1" stroke-width="1"/><line x1="15" y1="105" x2="315" y2="105" stroke="#cbd5e1" stroke-width="1"/><line x1="15" y1="135" x2="315" y2="135" stroke="#cbd5e1" stroke-width="1"/><line x1="15" y1="165" x2="315" y2="165" stroke="#cbd5e1" stroke-width="1"/><line x1="15" y1="195" x2="315" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="165" y1="5" x2="165" y2="205" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/><text x="170" y="14" font-size="13" fill="#dc2626">(d)</text><line x1="75" y1="45" x2="105" y2="135" stroke="#2563eb" stroke-width="2"/><circle cx="75" cy="45" r="3.5" fill="#2563eb"/><text x="81" y="39" font-size="14" font-weight="bold" fill="#2563eb">A</text><circle cx="105" cy="135" r="3.5" fill="#2563eb"/><text x="111" y="129" font-size="14" font-weight="bold" fill="#2563eb">B</text><circle cx="165" cy="75" r="3.5" fill="#2563eb"/><text x="171" y="69" font-size="14" font-weight="bold" fill="#2563eb">C</text><circle cx="255" cy="45" r="3.5" fill="currentColor"/><text x="261" y="39" font-size="14" font-weight="bold" fill="currentColor">E</text><circle cx="225" cy="45" r="3.5" fill="currentColor"/><text x="231" y="39" font-size="14" font-weight="bold" fill="currentColor">G</text><circle cx="225" cy="135" r="3.5" fill="currentColor"/><text x="231" y="129" font-size="14" font-weight="bold" fill="currentColor">F</text><circle cx="255" cy="165" r="3.5" fill="currentColor"/><text x="261" y="159" font-size="14" font-weight="bold" fill="currentColor">K</text></svg></div>

1. Parmi les points $E$ et $G$, lequel est le symétrique du point $A$ par rapport à $(d)$ ? Justifier en comptant les carreaux.
2. Quel est le symétrique du point $B$ par rapport à $(d)$ ? Justifier.
3. Quel est le symétrique du point $C$ ? Justifier.
4. Quel est le symétrique du segment $[AB]$ ? Que peut-on dire de sa longueur ?
5. Le point $K$ est-il le symétrique d'un des points $A$, $B$ ou $C$ ? Justifier.`,
      solution: `On compte les carreaux horizontalement : le symétrique d'un point est sur la même ligne du quadrillage (la droite qui les joint est perpendiculaire à l'axe vertical $(d)$), de l'autre côté de l'axe et **à la même distance** de l'axe.

**1.** Le point $A$ est à $3$ carreaux à gauche de $(d)$. Le point $E$, sur la même ligne, est à $3$ carreaux à droite de $(d)$ ; le point $G$ n'est qu'à $2$ carreaux. Le symétrique de $A$ est donc **$E$**.

**2.** Le point $B$ est à $2$ carreaux à gauche de $(d)$. Le point $F$, sur la même ligne, est à $2$ carreaux à droite : le symétrique de $B$ est **$F$**.

**3.** Le point $C$ est sur l'axe $(d)$ : il est **son propre symétrique**.

**4.** Le symétrique du segment $[AB]$ est le segment **$[EF]$**. La symétrie axiale conserve les longueurs : $EF = AB$.

**5.** Le point $K$ est à $3$ carreaux à droite de $(d)$, sur une ligne horizontale du quadrillage. Son symétrique serait à $3$ carreaux à gauche de $(d)$ sur cette même ligne : aucun des points $A$, $B$, $C$ ne s'y trouve. Donc **$K$ n'est le symétrique d'aucun de ces points**.`
    },
    {
      id: "6G2-ds-14",
      title: "Des lettres et des mots symétriques",
      difficulty: 2,
      points: 5,
      statement: `On écrit des lettres capitales en écriture « bâton » (des traits simples, sans empattement) :
$$\\text{A} \\quad \\text{B} \\quad \\text{C} \\quad \\text{E} \\quad \\text{F} \\quad \\text{H} \\quad \\text{I} \\quad \\text{M} \\quad \\text{N} \\quad \\text{S} \\quad \\text{T} \\quad \\text{X} \\quad \\text{Z}$$

1. Recopier et compléter le tableau suivant en plaçant chaque lettre dans la bonne colonne.

| Aucun axe | Un axe vertical seulement | Un axe horizontal seulement | Deux axes |
|:---:|:---:|:---:|:---:|
| … | … | … | … |

2. Le mot « BEC », écrit en ligne, possède un axe de symétrie. Lequel ? Expliquer.
3. Le mot « AHA », écrit en ligne, possède un axe de symétrie. Lequel ? Expliquer pourquoi l'ordre des lettres compte ici, alors qu'il ne comptait pas pour « BEC ».
4. Le mot « MAT » possède-t-il un axe de symétrie vertical ? Justifier.`,
      solution: `**1.**

| Aucun axe | Un axe vertical seulement | Un axe horizontal seulement | Deux axes |
|:---:|:---:|:---:|:---:|
| F, N, S, Z | A, M, T | B, C, E | H, I, X |

(Pour N, S et Z, on peut essayer de plier selon n'importe quelle droite : les deux moitiés ne coïncident jamais.)

**2.** Les lettres B, E et C ont chacune un axe de symétrie horizontal, et ces trois axes sont à la même hauteur (au milieu de la ligne). La droite horizontale qui passe au milieu des lettres est donc **un axe de symétrie du mot « BEC »** : en pliant, le haut de chaque lettre vient sur le bas de la même lettre.

**3.** L'axe est **vertical** et passe par le milieu du H. En pliant le long de cet axe :
- le H vient sur lui-même (il a un axe vertical) ;
- le premier A vient sur le dernier A, à la même distance de l'axe, et le A est symétrique par rapport à un axe vertical.
Avec un axe vertical, chaque lettre vient se poser sur **une autre lettre** (celle à la même place en partant de l'autre bout) : il faut donc que le mot se lise pareil dans les deux sens. Avec l'axe horizontal de « BEC », chaque lettre vient sur elle-même : l'ordre ne compte pas.

**4.** Non. Les lettres M, A et T ont chacune un axe vertical, mais un axe vertical du mot devrait passer par le A et envoyer le M sur le T, ce qui est faux : le M et le T n'ont pas la même forme. **« MAT » n'a pas d'axe de symétrie vertical.**`
    },
    {
      id: "6G2-ds-15",
      title: "Retrouver un axe effacé",
      difficulty: 3,
      points: 5,
      statement: `Lina a construit le symétrique $A'B'C'$ d'un triangle $ABC$ par rapport à une droite $(d)$, puis elle a effacé la droite $(d)$ par erreur. Elle sait que :
- $AB = 4{,}5$ cm, $BC = 3{,}8$ cm, $AC = 5{,}2$ cm et $\\widehat{BAC} = 47^\\circ$ ;
- $AA' = 6$ cm.

1. On rappelle que $A'$ est le symétrique de $A$ par rapport à $(d)$. Que représente la droite $(d)$ pour le segment $[AA']$ ?
2. Expliquer comment Lina peut retracer la droite $(d)$ avec la règle et le compas.
3. On note $I$ le point d'intersection de $(d)$ et de $[AA']$. Calculer $AI$. Quelle est la distance du point $A$ à la droite $(d)$ ?
4. Donner, sans mesurer, les longueurs $A'B'$, $B'C'$, $A'C'$ et la mesure de l'angle $\\widehat{B'A'C'}$. Calculer le périmètre du triangle $A'B'C'$.
5. Hugo affirme : « $BB'$ mesure forcément $6$ cm, comme $AA'$. » A-t-il raison ? Expliquer.`,
      solution: `**1.** Dire que $A'$ est le symétrique de $A$ par rapport à $(d)$, c'est dire que $(d)$ est perpendiculaire à $[AA']$ et passe par son milieu : **$(d)$ est la médiatrice du segment $[AA']$**.

**2.** Elle construit la médiatrice de $[AA']$ au compas : avec un même écartement (plus grand que la moitié de $AA'$), elle trace deux arcs de centre $A$ et deux arcs de centre $A'$, de part et d'autre de $[AA']$. Les arcs se coupent en deux points ; la droite qui passe par ces deux points est la médiatrice de $[AA']$, donc la droite $(d)$.

**3.** Le point $I$ est le milieu de $[AA']$ : $AI = 6 \\div 2 = 3$ cm. Comme $(d)$ est perpendiculaire à $(AA')$ en $I$, la distance de $A$ à la droite $(d)$ est $AI = $ **$3$ cm**.

**4.** La symétrie axiale conserve les longueurs et les angles :
$A'B' = AB = 4{,}5$ cm ; $B'C' = BC = 3{,}8$ cm ; $A'C' = AC = 5{,}2$ cm ; $\\widehat{B'A'C'} = \\widehat{BAC} = 47^\\circ$.
Périmètre de $A'B'C'$ : $4{,}5 + 3{,}8 + 5{,}2 = 13{,}5$ cm.

**5.** Hugo a tort. La droite $(d)$ est aussi la médiatrice de $[BB']$, mais la longueur $BB'$ est le double de la distance de $B$ à $(d)$, qui n'a aucune raison d'être égale à celle de $A$ à $(d)$. Par exemple, si $B$ est plus loin de l'axe que $A$, alors $BB'$ est plus grand que $6$ cm. On ne peut pas connaître $BB'$ avec les données.`
    },
    {
      id: "6G2-ds-16",
      title: "Plier et découper",
      difficulty: 4,
      points: 6,
      statement: `Zoé plie une feuille en deux. Le long du pli (la droite $(d)$ en pointillés), elle découpe un triangle $PQR$ : les points $P$ et $Q$ sont sur le pli, $PQ = 3$ cm, $QR = 4$ cm, $PR = 5$ cm, et l'angle $\\widehat{PQR}$ est droit. Elle ne découpe que le long de $[QR]$ et de $[PR]$, puis elle déplie la feuille. On note $R'$ le symétrique de $R$ par rapport à $(d)$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:300px;"><svg class="geo-svg-figure" viewBox="0 0 290 220" width="290" height="220" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="60" y="15" width="210" height="195" fill="rgba(59,130,246,0.06)" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="5" x2="60" y2="215" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/><text x="12" y="30" font-size="13" fill="#dc2626">pli (d)</text><path d="M60,60 L180,150 L60,150 Z" fill="rgba(220,38,38,0.12)" stroke="#2563eb" stroke-width="2"/><path d="M60,140 L70,140 L70,150" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="44" y="64" font-size="15" fill="currentColor">P</text><text x="44" y="158" font-size="15" fill="currentColor">Q</text><text x="184" y="160" font-size="15" fill="currentColor">R</text><text x="112" y="168" font-size="12" fill="currentColor">4 cm</text><text x="124" y="96" font-size="12" fill="currentColor">5 cm</text><text x="64" y="108" font-size="12" fill="currentColor">3 cm</text></svg></div>

1. Après dépliage, le trou est un triangle $PRR'$. Expliquer pourquoi $PR' = PR$. Quelle est la nature du triangle $PRR'$ ?
2. Expliquer pourquoi les points $R$, $Q$ et $R'$ sont alignés, puis calculer $RR'$.
3. Que représente le pli $(d)$ pour le segment $[RR']$ ? Justifier.
4. Calculer le périmètre du trou. Quelle longueur de découpe Zoé a-t-elle réalisée avec ses ciseaux ?
5. Sur une autre feuille pliée, Zoé découpe un demi-disque de rayon $2$ cm dont le centre est sur le pli. Quelle forme obtient-elle en dépliant ? Calculer la longueur du bord du trou, en prenant $3{,}14$ comme valeur approchée de $\\pi$.`,
      solution: `**1.** Quand on déplie, la partie découpée de l'autre moitié de la feuille est le symétrique de $PQR$ par rapport au pli $(d)$. Le point $P$ est sur l'axe, donc il est son propre symétrique, et $R'$ est le symétrique de $R$ : le segment $[PR']$ est le symétrique de $[PR]$. La symétrie conserve les longueurs, donc $PR' = PR = 5$ cm. Le triangle $PRR'$ a deux côtés de même longueur : il est **isocèle en $P$**.

**2.** La droite $(QR)$ est perpendiculaire au pli $(d)$ en $Q$. Le symétrique $R'$ de $R$ est sur la perpendiculaire à $(d)$ passant par $R$, c'est-à-dire sur $(QR)$, de l'autre côté de $(d)$, à la même distance : $QR' = QR = 4$ cm. Donc $R$, $Q$ et $R'$ sont alignés et $RR' = 4 + 4 = 8$ cm.

**3.** Le pli $(d)$ est perpendiculaire à $[RR']$ et passe par son milieu $Q$ (car $QR = QR' = 4$ cm) : **$(d)$ est la médiatrice de $[RR']$**. C'est normal : $R'$ est le symétrique de $R$ par rapport à $(d)$.

**4.** Périmètre du trou : $PR + RR' + R'P = 5 + 8 + 5 = 18$ cm.
Zoé n'a découpé que $[QR]$ et $[PR]$ sur la feuille pliée (deux épaisseurs à la fois) : $4 + 5 = 9$ cm de découpe. C'est la moitié du périmètre, puisque la découpe est faite en double.

**5.** Le demi-disque et son symétrique par rapport au pli forment un **disque entier** de rayon $2$ cm (de diamètre $4$ cm). Le bord du trou est un cercle de longueur :
$$2 \\times \\pi \\times 2 = 4 \\times \\pi \\approx 4 \\times 3{,}14 = 12{,}56 \\text{ cm}.$$`
    }
  ]
});
Object.assign(window.MATHS_DS_BANK, {
  "6G3": [
    {
      id: "6G3-ds-01",
      title: "Classer des angles",
      difficulty: 1,
      points: 4,
      statement: `Le professeur a mesuré plusieurs angles au rapporteur :
$$\\widehat{ABC} = 35^\\circ \\quad \\widehat{DEF} = 90^\\circ \\quad \\widehat{GHI} = 127^\\circ \\quad \\widehat{JKL} = 180^\\circ \\quad \\widehat{MNP} = 89^\\circ \\quad \\widehat{RST} = 0^\\circ$$

1. Quel est le sommet de l'angle $\\widehat{GHI}$ ? Quels sont ses côtés ?
2. Donner la nature de chacun des six angles (aigu, droit, obtus, plat ou nul).
3. Que peut-on dire des points $J$, $K$ et $L$ ? Justifier.
4. Donner la mesure d'un angle plein.`,
      solution: `**1.** Le sommet est la lettre du milieu : c'est le point **$H$**. Les côtés de l'angle sont les demi-droites **$[HG)$ et $[HI)$**.

**2.**
- $35^\\circ$ est compris entre $0^\\circ$ et $90^\\circ$ : $\\widehat{ABC}$ est **aigu**.
- $\\widehat{DEF} = 90^\\circ$ : angle **droit**.
- $127^\\circ$ est compris entre $90^\\circ$ et $180^\\circ$ : $\\widehat{GHI}$ est **obtus**.
- $\\widehat{JKL} = 180^\\circ$ : angle **plat**.
- $89^\\circ < 90^\\circ$ : $\\widehat{MNP}$ est **aigu** (il n'est pas droit, même s'il en est proche).
- $\\widehat{RST} = 0^\\circ$ : angle **nul**.

**3.** Un angle plat a ses deux côtés dans le prolongement l'un de l'autre : les points **$J$, $K$ et $L$ sont alignés**, avec $K$ entre $J$ et $L$.

**4.** Un angle plein mesure $360^\\circ$ (un tour complet).`
    },
    {
      id: "6G3-ds-02",
      title: "Angles adjacents et supplémentaires",
      difficulty: 1,
      points: 4,
      statement: `1. L'angle $\\widehat{xOy}$ mesure $130^\\circ$. On trace une demi-droite $[Oz)$ à l'intérieur de cet angle de sorte que $\\widehat{xOz} = 48^\\circ$.
a) Que peut-on dire des angles $\\widehat{xOz}$ et $\\widehat{zOy}$ ?
b) Calculer la mesure de l'angle $\\widehat{zOy}$.
2. Deux angles sont supplémentaires. L'un mesure $65^\\circ$. Combien mesure l'autre ?
3. Deux angles supplémentaires ont la même mesure. Quelle est cette mesure ?`,
      solution: `**1.** a) Les angles $\\widehat{xOz}$ et $\\widehat{zOy}$ ont le même sommet $O$, un côté commun $[Oz)$ et sont situés de part et d'autre de ce côté : ils sont **adjacents**.
b) Les angles étant adjacents, leurs mesures s'additionnent : $\\widehat{xOz} + \\widehat{zOy} = \\widehat{xOy}$.
Donc $\\widehat{zOy} = 130^\\circ - 48^\\circ = 82^\\circ$.

**2.** Deux angles supplémentaires ont des mesures dont la somme vaut $180^\\circ$ : $180^\\circ - 65^\\circ = 115^\\circ$. L'autre angle mesure **$115^\\circ$**.

**3.** Les deux mesures sont égales et leur somme vaut $180^\\circ$ : chacune vaut $180^\\circ \\div 2 = 90^\\circ$. Ce sont deux **angles droits**.`
    },
    {
      id: "6G3-ds-03",
      title: "Deux droites sécantes",
      difficulty: 2,
      points: 5,
      statement: `Deux droites $(AC)$ et $(BD)$ se coupent en un point $O$, avec $O$ entre $A$ et $C$ et entre $B$ et $D$. On sait que $\\widehat{AOB} = 38^\\circ$.

1. Que peut-on dire des angles $\\widehat{AOB}$ et $\\widehat{COD}$ ? En déduire la mesure de $\\widehat{COD}$.
2. Calculer la mesure de l'angle $\\widehat{BOC}$. Justifier.
3. En déduire la mesure de $\\widehat{AOD}$.
4. On trace la bissectrice $[OE)$ de l'angle $\\widehat{AOB}$. Calculer $\\widehat{AOE}$.`,
      solution: `**1.** Les angles $\\widehat{AOB}$ et $\\widehat{COD}$ ont le même sommet et leurs côtés sont dans le prolongement l'un de l'autre : ils sont **opposés par le sommet**. Deux angles opposés par le sommet ont la même mesure : $\\widehat{COD} = 38^\\circ$.

**2.** Les points $A$, $O$, $C$ sont alignés, donc $\\widehat{AOC}$ est un angle plat. Les angles adjacents $\\widehat{AOB}$ et $\\widehat{BOC}$ sont supplémentaires :
$\\widehat{BOC} = 180^\\circ - 38^\\circ = 142^\\circ$.

**3.** $\\widehat{AOD}$ et $\\widehat{BOC}$ sont opposés par le sommet, donc $\\widehat{AOD} = 142^\\circ$.

**4.** La bissectrice partage l'angle en deux angles de même mesure : $\\widehat{AOE} = 38^\\circ \\div 2 = 19^\\circ$.`
    },
    {
      id: "6G3-ds-04",
      title: "Les angles de l'horloge",
      difficulty: 2,
      points: 5,
      statement: `Le cadran d'une horloge est un cercle partagé en $12$ parties égales par les graduations des heures. On s'intéresse à l'angle formé par les deux aiguilles lorsqu'il est une heure « pile » (l'aiguille des minutes est alors sur le $12$).

1. Quel angle les aiguilles parcourent-elles en faisant un tour complet ? En déduire l'angle entre deux graduations d'heures voisines.
2. Calculer l'angle formé par les aiguilles à $3$ h, à $4$ h et à $6$ h.
3. Donner la nature de chacun de ces trois angles.
4. À quelle(s) heure(s) « pile » les aiguilles forment-elles un angle de $150^\\circ$ ?`,
      solution: `**1.** Un tour complet correspond à un angle plein : $360^\\circ$. Entre deux graduations voisines : $360^\\circ \\div 12 = 30^\\circ$.

**2.**
- À $3$ h : $3$ intervalles, soit $3 \\times 30^\\circ = 90^\\circ$.
- À $4$ h : $4 \\times 30^\\circ = 120^\\circ$.
- À $6$ h : $6 \\times 30^\\circ = 180^\\circ$.

**3.** $90^\\circ$ : angle **droit** ; $120^\\circ$ : angle **obtus** ; $180^\\circ$ : angle **plat** (les aiguilles sont alignées).

**4.** $150^\\circ \\div 30^\\circ = 5$ : il faut $5$ intervalles entre les aiguilles. C'est le cas à **$5$ h** et aussi à **$7$ h** (l'aiguille des heures est alors à $5$ intervalles du $12$ de l'autre côté : $12 - 7 = 5$).`
    },
    {
      id: "6G3-ds-05",
      title: "Calculer des angles sur une figure",
      difficulty: 3,
      points: 5,
      statement: `Sur la figure ci-dessous (qui n'est pas en vraie grandeur), les points $A$, $O$ et $B$ sont alignés. On sait que $\\widehat{AOC} = 42^\\circ$ et que la demi-droite $[OD)$ est la bissectrice de l'angle $\\widehat{COB}$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 300 175" width="300" height="175" style="width:100%; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="30" y1="150" x2="270" y2="150" stroke="var(--text-main, #334155)" stroke-width="2"/><line x1="150" y1="150" x2="68.3" y2="76.4" stroke="#2563eb" stroke-width="2"/><line x1="150" y1="150" x2="189.4" y2="47.3" stroke="#dc2626" stroke-width="2"/><path d="M 120 150 A 30 30 0 0 1 127.7 129.9" fill="none" stroke="#2563eb" stroke-width="1.5"/><text x="100" y="140" font-size="12" fill="var(--text-main, #334155)">42°</text><circle cx="150" cy="150" r="3" fill="var(--text-main, #334155)"/><text x="146" y="168" font-size="14" fill="var(--text-main, #334155)">O</text><text x="22" y="168" font-size="14" fill="var(--text-main, #334155)">A</text><text x="268" y="168" font-size="14" fill="var(--text-main, #334155)">B</text><text x="52" y="70" font-size="14" fill="var(--text-main, #334155)">C</text><text x="192" y="38" font-size="14" fill="var(--text-main, #334155)">D</text></svg></div>

1. Quelle est la nature de l'angle $\\widehat{AOB}$ ? Que vaut sa mesure ?
2. Calculer la mesure de l'angle $\\widehat{COB}$.
3. Calculer la mesure de l'angle $\\widehat{COD}$.
4. Calculer la mesure de l'angle $\\widehat{AOD}$ et donner sa nature.`,
      solution: `**1.** $A$, $O$ et $B$ sont alignés, avec $O$ entre $A$ et $B$ : $\\widehat{AOB}$ est un **angle plat**, il mesure $180^\\circ$.

**2.** Les angles $\\widehat{AOC}$ et $\\widehat{COB}$ sont adjacents et forment l'angle plat $\\widehat{AOB}$ : ils sont supplémentaires.
$\\widehat{COB} = 180^\\circ - 42^\\circ = 138^\\circ$.

**3.** $[OD)$ est la bissectrice de $\\widehat{COB}$ : elle le partage en deux angles égaux.
$\\widehat{COD} = 138^\\circ \\div 2 = 69^\\circ$.

**4.** $\\widehat{AOC}$ et $\\widehat{COD}$ sont adjacents : $\\widehat{AOD} = 42^\\circ + 69^\\circ = 111^\\circ$.
$111^\\circ$ est compris entre $90^\\circ$ et $180^\\circ$ : $\\widehat{AOD}$ est un **angle obtus**.`
    },
    {
      id: "6G3-ds-06",
      title: "Construire un angle et des bissectrices",
      difficulty: 3,
      points: 5,
      statement: `1. Construire un angle $\\widehat{ABC}$ de mesure $110^\\circ$. Expliquer comment placer le rapporteur.
2. Construire la bissectrice $[BD)$ de l'angle $\\widehat{ABC}$. Calculer $\\widehat{ABD}$.
3. On prolonge la demi-droite $[BA)$ au-delà de $B$ : on obtient une demi-droite $[BE)$ telle que $A$, $B$ et $E$ sont alignés. Calculer $\\widehat{EBC}$. Justifier.
4. On trace la bissectrice $[BF)$ de l'angle $\\widehat{EBC}$. Calculer $\\widehat{CBF}$, puis $\\widehat{DBF}$. Que remarque-t-on ?`,
      solution: `**1.** On trace la demi-droite $[BA)$. On place le centre du rapporteur sur le sommet $B$ et la graduation $0$ sur la demi-droite $[BA)$. On repère la graduation $110$ sur la même échelle (celle qui part de $0$ sur $[BA)$), on place un point $C$, puis on trace $[BC)$.

**2.** On trace $[BD)$ à l'intérieur de l'angle avec $\\widehat{ABD} = \\widehat{DBC}$. La bissectrice partage l'angle en deux angles égaux : $\\widehat{ABD} = 110^\\circ \\div 2 = 55^\\circ$.

**3.** $A$, $B$, $E$ sont alignés : $\\widehat{ABE}$ est un angle plat. Les angles adjacents $\\widehat{ABC}$ et $\\widehat{CBE}$ sont donc supplémentaires :
$\\widehat{EBC} = 180^\\circ - 110^\\circ = 70^\\circ$.

**4.** $\\widehat{CBF} = 70^\\circ \\div 2 = 35^\\circ$.
Les angles $\\widehat{DBC}$ et $\\widehat{CBF}$ sont adjacents : $\\widehat{DBF} = 55^\\circ + 35^\\circ = 90^\\circ$.
On remarque que **les deux bissectrices sont perpendiculaires** : $\\widehat{DBF}$ est un angle droit (c'est la moitié de l'angle plat : $180^\\circ \\div 2 = 90^\\circ$).`
    },
    {
      id: "6G3-ds-07",
      title: "La rose des vents",
      difficulty: 4,
      points: 6,
      statement: `Sur une rose des vents, les quatre directions principales Nord (N), Est (E), Sud (S) et Ouest (O) partagent le tour complet en quatre angles droits. La direction Nord-Est (NE) est la bissectrice de l'angle formé par le Nord et l'Est ; de même pour Sud-Est (SE), Sud-Ouest (SO) et Nord-Ouest (NO). La direction Nord-Nord-Est (NNE) est la bissectrice de l'angle formé par N et NE.

1. Quel angle forment les directions N et E ? les directions N et NE ? Justifier.
2. Quel angle forment les directions NE et SE ? les directions N et NNE ?
3. Un voilier se dirige vers le Nord-Est. Il tourne dans le sens des aiguilles d'une montre de $135^\\circ$. Dans quelle direction va-t-il maintenant ? Justifier.
4. Un randonneur marche vers l'Ouest. De quel angle (dans le sens des aiguilles d'une montre) doit-il tourner pour marcher vers le Nord-Nord-Est ?`,
      solution: `**1.** Les quatre directions principales partagent le tour ($360^\\circ$) en quatre angles droits : N et E forment un angle de $360^\\circ \\div 4 = 90^\\circ$.
NE est la bissectrice de l'angle formé par N et E, donc N et NE forment un angle de $90^\\circ \\div 2 = 45^\\circ$.

**2.** De NE à E : $45^\\circ$ ; de E à SE : $45^\\circ$. Ces angles sont adjacents : NE et SE forment un angle de $45^\\circ + 45^\\circ = 90^\\circ$.
NNE est la bissectrice de l'angle formé par N et NE : N et NNE forment $45^\\circ \\div 2 = 22{,}5^\\circ$.

**3.** En tournant dans le sens des aiguilles d'une montre depuis NE, on rencontre E à $45^\\circ$, SE à $90^\\circ$ et S à $135^\\circ$ ($45^\\circ + 45^\\circ + 45^\\circ$). Le voilier va maintenant **vers le Sud**.

**4.** Dans le sens des aiguilles d'une montre : de O à N, il y a $90^\\circ$, puis de N à NNE, $22{,}5^\\circ$. Il doit tourner de $90^\\circ + 22{,}5^\\circ = 112{,}5^\\circ$.`
    },
    {
      id: "6G3-ds-08",
      title: "L'éventail",
      difficulty: 4,
      points: 5,
      statement: `Un éventail ouvert forme un angle plat. Il possède $10$ branches, numérotées de $1$ à $10$ de gauche à droite : la branche $1$ et la branche $10$ sont dans le prolongement l'une de l'autre, et deux branches voisines forment toujours le même angle.

1. Combien y a-t-il d'intervalles entre deux branches voisines ? En déduire l'angle formé par deux branches voisines.
2. Quel angle forment la branche $1$ et la branche $4$ ?
3. Léo veut tracer la bissectrice de l'angle plat formé par les branches $1$ et $10$. Cette bissectrice est-elle portée par une branche ? Sinon, entre quelles branches se trouve-t-elle ? Justifier.
4. Combien de branches forment avec la branche $1$ un angle obtus ?`,
      solution: `**1.** Entre $10$ branches, il y a $10 - 1 = 9$ intervalles. Ils partagent l'angle plat en $9$ angles égaux : $180^\\circ \\div 9 = 20^\\circ$. Deux branches voisines forment un angle de **$20^\\circ$**.

**2.** De la branche $1$ à la branche $4$, il y a $3$ intervalles : $3 \\times 20^\\circ = 60^\\circ$.

**3.** La bissectrice d'un angle plat forme un angle de $180^\\circ \\div 2 = 90^\\circ$ avec chaque côté. La branche $k$ forme avec la branche $1$ un angle de $(k - 1) \\times 20^\\circ$ : la branche $5$ est à $80^\\circ$ et la branche $6$ à $100^\\circ$. Aucune branche n'est à $90^\\circ$ : la bissectrice n'est pas une branche, elle se trouve **entre les branches $5$ et $6$** (c'est d'ailleurs la bissectrice de l'angle qu'elles forment).

**4.** Un angle obtus est strictement compris entre $90^\\circ$ et $180^\\circ$. Les branches $6$, $7$, $8$, $9$ forment avec la branche $1$ des angles de $100^\\circ$, $120^\\circ$, $140^\\circ$ et $160^\\circ$ ; la branche $10$ forme un angle plat. Il y a donc **$4$ branches**.`
    },
    {
      id: "6G3-ds-09",
      title: "Lire correctement un rapporteur",
      difficulty: 1,
      points: 4,
      statement: `Lou mesure des angles de sommet $O$. Elle place le centre du rapporteur sur $O$ et aligne la graduation $0$ de l'échelle extérieure sur la demi-droite $[Ox)$.
- La demi-droite $[Oy)$ passe par la graduation où l'on lit $65$ sur l'échelle extérieure et $115$ sur l'échelle intérieure.
- La demi-droite $[Oz)$ passe par la graduation $150$ de l'échelle extérieure.

1. Quelle est la mesure de l'angle $\\widehat{xOy}$ : $65^\\circ$ ou $115^\\circ$ ? Expliquer le choix de l'échelle.
2. Donner la nature (aigu, droit, obtus, plat) de l'angle $\\widehat{xOy}$ et de l'angle $\\widehat{xOz}$.
3. La demi-droite $[Oy)$ est entre $[Ox)$ et $[Oz)$. Calculer la mesure de l'angle $\\widehat{yOz}$.
4. Dans l'écriture $\\widehat{yOz}$, quel est le sommet de l'angle ? Quels sont ses côtés ?`,
      solution: `**1.** On lit toujours l'échelle dont le $0$ est placé sur le premier côté de l'angle. Ici, c'est le $0$ de l'échelle **extérieure** qui est sur $[Ox)$ : on lit donc $\\widehat{xOy} = 65^\\circ$ (le $115$ appartient à l'autre échelle, qui part de l'autre côté).

**2.** $65^\\circ$ est compris entre $0^\\circ$ et $90^\\circ$ : $\\widehat{xOy}$ est **aigu**.
$\\widehat{xOz} = 150^\\circ$ est compris entre $90^\\circ$ et $180^\\circ$ : il est **obtus**.

**3.** $[Oy)$ est entre $[Ox)$ et $[Oz)$, donc les angles $\\widehat{xOy}$ et $\\widehat{yOz}$ sont adjacents et forment ensemble $\\widehat{xOz}$ :
$\\widehat{yOz} = 150^\\circ - 65^\\circ = 85^\\circ$.

**4.** La lettre du milieu, $O$, est le **sommet**. Les côtés sont les demi-droites **$[Oy)$ et $[Oz)$**.`
    },
    {
      id: "6G3-ds-10",
      title: "Les parts du gâteau rond",
      difficulty: 2,
      points: 5,
      statement: `Pour un anniversaire, on découpe des gâteaux ronds en parts égales, en coupant toujours depuis le centre. On rappelle qu'un tour complet (angle plein) mesure $360^\\circ$.

1. On découpe un gâteau en $8$ parts égales. Quel est l'angle au centre d'une part ? Quelle est sa nature ?
2. Un autre gâteau est découpé en $6$ parts égales. Quel est l'angle au centre d'une part ?
3. Inès veut des parts d'angle $40^\\circ$. Combien de parts obtiendra-t-elle ?
4. Dans le gâteau en $8$ parts, Tom prend $3$ parts voisines. Quel angle forme l'ensemble de ses parts ? Quelle est sa nature ?
5. Peut-on découper un gâteau en parts égales d'angle $50^\\circ$, sans reste ? Justifier.`,
      solution: `**1.** Les $8$ parts se partagent le tour complet : $360 \\div 8 = 45$. L'angle d'une part mesure $45^\\circ$ : c'est un angle **aigu** (moins de $90^\\circ$).

**2.** $360 \\div 6 = 60$ : chaque part a un angle de $60^\\circ$.

**3.** $360 \\div 40 = 9$ : Inès obtiendra **$9$ parts**.

**4.** Les $3$ parts voisines sont adjacentes : $3 \\times 45^\\circ = 135^\\circ$. C'est un angle **obtus** (entre $90^\\circ$ et $180^\\circ$).

**5.** Il faudrait que $360$ soit un multiple de $50$. Or $50 \\times 7 = 350$ et $50 \\times 8 = 400$ : $360$ n'est pas dans la table de $50$ (il resterait un morceau de $10^\\circ$). **Ce n'est pas possible.**`
    },
    {
      id: "6G3-ds-11",
      title: "Trois demi-droites autour d'un point",
      difficulty: 3,
      points: 5,
      statement: `Trois demi-droites $[OA)$, $[OB)$ et $[OC)$ de même origine $O$ partagent le plan en trois angles adjacents : $\\widehat{AOB}$, $\\widehat{BOC}$ et $\\widehat{COA}$. On sait que $\\widehat{AOB} = 110^\\circ$ et $\\widehat{BOC} = 140^\\circ$. Ces trois angles font le tour complet du point $O$.

1. Calculer la mesure de l'angle $\\widehat{COA}$.
2. On trace la demi-droite $[OD)$ opposée à $[OA)$ (les points $A$, $O$ et $D$ sont alignés, $O$ entre $A$ et $D$). La demi-droite $[OD)$ est à l'intérieur de l'angle $\\widehat{BOC}$.
   a) Quelle est la mesure de l'angle $\\widehat{AOD}$ ?
   b) Calculer $\\widehat{BOD}$, puis $\\widehat{DOC}$.
3. Que représente la demi-droite $[OD)$ pour l'angle $\\widehat{BOC}$ ? Justifier.
4. On trace la bissectrice $[Ou)$ de l'angle $\\widehat{AOB}$. Calculer l'angle $\\widehat{uOD}$.`,
      solution: `**1.** Les trois angles font le tour complet, soit $360^\\circ$ :
$\\widehat{COA} = 360^\\circ - 110^\\circ - 140^\\circ = 110^\\circ$.

**2.** a) $A$, $O$, $D$ sont alignés avec $O$ entre $A$ et $D$ : $\\widehat{AOD}$ est un angle plat, il mesure $180^\\circ$.

b) Les angles $\\widehat{AOB}$ et $\\widehat{BOD}$ sont adjacents et forment l'angle plat $\\widehat{AOD}$ : ils sont supplémentaires. $\\widehat{BOD} = 180^\\circ - 110^\\circ = 70^\\circ$.
$[OD)$ est à l'intérieur de $\\widehat{BOC}$, donc $\\widehat{DOC} = \\widehat{BOC} - \\widehat{BOD} = 140^\\circ - 70^\\circ = 70^\\circ$.
(Vérification : de l'autre côté, $\\widehat{COA}$ et $\\widehat{DOC}$ sont supplémentaires : $110^\\circ + 70^\\circ = 180^\\circ$.)

**3.** La demi-droite $[OD)$ partage l'angle $\\widehat{BOC}$ en deux angles adjacents de même mesure ($70^\\circ$ et $70^\\circ$) : $[OD)$ est la **bissectrice** de l'angle $\\widehat{BOC}$.

**4.** $[Ou)$ est la bissectrice de $\\widehat{AOB}$ : $\\widehat{uOB} = 110^\\circ \\div 2 = 55^\\circ$.
Les angles $\\widehat{uOB}$ et $\\widehat{BOD}$ sont adjacents : $\\widehat{uOD} = 55^\\circ + 70^\\circ = 125^\\circ$.`
    },
    {
      id: "6G3-ds-12",
      title: "La grande roue",
      difficulty: 4,
      points: 6,
      statement: `Une grande roue porte $12$ nacelles, numérotées de $1$ à $12$ dans l'ordre, accrochées à égale distance les unes des autres sur un cercle de centre $O$. La roue tourne toujours dans le même sens, à vitesse constante, et fait un tour complet en $8$ minutes.

1. Quel angle forment les rayons $[ON_1]$ et $[ON_2]$ qui vont du centre à deux nacelles voisines ?
2. Quelle est la mesure de l'angle formé par les rayons des nacelles $1$ et $5$ ? Quelle est sa nature ?
3. Avec quelle nacelle les rayons de la nacelle $1$ forment-ils un angle plat ? Justifier.
4. De quel angle la roue tourne-t-elle en $1$ minute ? En $3$ minutes ?
5. Combien de temps faut-il pour que la roue tourne de $210^\\circ$ ? Donner la réponse en minutes et secondes.
6. Au départ, la nacelle $1$ est tout en bas. Où est-elle au bout de $20$ minutes ? Justifier.`,
      solution: `**1.** Les $12$ nacelles partagent le tour complet en $12$ angles égaux : $360 \\div 12 = 30$. L'angle mesure $30^\\circ$.

**2.** De la nacelle $1$ à la nacelle $5$, il y a $4$ intervalles : $4 \\times 30^\\circ = 120^\\circ$. C'est un angle **obtus**.

**3.** Un angle plat mesure $180^\\circ$, soit $180 \\div 30 = 6$ intervalles. C'est la nacelle $1 + 6 = 7$ : les rayons des nacelles $1$ et $7$ forment un angle plat (elles sont diamétralement opposées).

**4.** En $8$ minutes, la roue tourne de $360^\\circ$. En $1$ minute : $360 \\div 8 = 45$, soit $45^\\circ$. En $3$ minutes : $3 \\times 45^\\circ = 135^\\circ$.

**5.** $210 \\div 45$ : $45 \\times 4 = 180$, il reste $30^\\circ$. Or $30^\\circ$ correspondent à $\\frac{30}{45} = \\frac{2}{3}$ de minute, soit $\\frac{2}{3} \\times 60 = 40$ secondes. Il faut **$4$ min $40$ s**.
(Vérification : en $1$ seconde, la roue tourne de $45 \\div 60 = 0{,}75^\\circ$, et $280 \\times 0{,}75 = 210$.)

**6.** $20 = 8 + 8 + 4$ : en $20$ minutes, la roue fait $2$ tours complets (la nacelle revient en bas) puis tourne encore pendant $4$ minutes, soit $4 \\times 45^\\circ = 180^\\circ$, un demi-tour. La nacelle $1$ est alors **tout en haut** de la roue.`
    },
    {
      id: "6G3-ds-13",
      title: "Des angles dans un rectangle",
      difficulty: 1,
      points: 4,
      statement: `$ABCD$ est un rectangle. On a tracé la diagonale $[AC]$ et prolongé le côté $[BA]$ au-delà de $A$ jusqu'au point $E$. On sait que $\\widehat{BAC} = 30^\\circ$. La figure n'est pas en vraie grandeur.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 310 200" width="310" height="200" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="80" y="54.5" width="200" height="115.5" fill="rgba(59,130,246,0.06)" stroke="currentColor" stroke-width="2"/><line x1="20" y1="170" x2="80" y2="170" stroke="currentColor" stroke-width="2"/><line x1="80" y1="170" x2="280" y2="54.5" stroke="#2563eb" stroke-width="2"/><path d="M115,170 A35,35 0 0 0 110.3,152.5" fill="none" stroke="#dc2626" stroke-width="1.8"/><text x="120" y="164" font-size="12" fill="#dc2626">30°</text><path d="M80,64.5 L90,64.5 L90,54.5" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M270,170 L270,160 L280,160" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M270,54.5 L270,64.5 L280,64.5" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="70" y="190" font-size="15" fill="currentColor">A</text><text x="282" y="190" font-size="15" fill="currentColor">B</text><text x="285" y="52" font-size="15" fill="currentColor">C</text><text x="64" y="52" font-size="15" fill="currentColor">D</text><text x="14" y="190" font-size="15" fill="currentColor">E</text></svg></div>

1. Pour l'angle $\\widehat{BAC}$, donner son sommet et ses deux côtés.
2. Quelle est la mesure de l'angle $\\widehat{DAB}$ ? Justifier.
3. Calculer la mesure de l'angle $\\widehat{CAD}$.
4. Les points $E$, $A$ et $B$ sont alignés. Quelle est la mesure de l'angle $\\widehat{EAB}$ ? En déduire la mesure de l'angle $\\widehat{EAC}$.
5. Donner la nature (aigu, droit, obtus ou plat) des angles $\\widehat{BAC}$, $\\widehat{DAB}$, $\\widehat{EAC}$ et $\\widehat{EAB}$.`,
      solution: `**1.** L'angle $\\widehat{BAC}$ a pour sommet le point $A$ (la lettre du milieu) et pour côtés les demi-droites $[AB)$ et $[AC)$.

**2.** $ABCD$ est un rectangle : ses quatre angles sont droits. Donc $\\widehat{DAB} = 90^\\circ$.

**3.** La demi-droite $[AC)$ est à l'intérieur de l'angle droit $\\widehat{DAB}$, qu'elle partage en deux angles adjacents :
$$\\widehat{CAD} = 90^\\circ - 30^\\circ = 60^\\circ.$$

**4.** $E$, $A$ et $B$ sont alignés avec $A$ entre $E$ et $B$ : $\\widehat{EAB}$ est un angle plat, $\\widehat{EAB} = 180^\\circ$. Les angles $\\widehat{EAC}$ et $\\widehat{CAB}$ sont adjacents et forment cet angle plat :
$$\\widehat{EAC} = 180^\\circ - 30^\\circ = 150^\\circ.$$

**5.** $\\widehat{BAC} = 30^\\circ$ : **aigu** ; $\\widehat{DAB} = 90^\\circ$ : **droit** ; $\\widehat{EAC} = 150^\\circ$ : **obtus** ; $\\widehat{EAB} = 180^\\circ$ : **plat**.`
    },
    {
      id: "6G3-ds-14",
      title: "Plier pour partager un angle",
      difficulty: 2,
      points: 5,
      statement: `Sans rapporteur, Malo obtient des angles en pliant des feuilles de papier.

1. Il prend un coin d'une feuille rectangulaire et le plie de façon que les deux bords du coin se superposent exactement. Quel angle partage-t-il ainsi ? Quelle est la mesure de chacun des deux angles obtenus ? Comment s'appelle la droite du pli pour l'angle de départ ?
2. Il replie encore une fois de la même façon l'angle obtenu. Quelle est la mesure du nouvel angle ?
3. Le long d'un bord droit de la feuille, Malo marque un point $O$. Le bord forme, autour de $O$, un angle plat. Il plie la feuille en faisant passer le pli par $O$ et en superposant les deux morceaux du bord. Quel angle obtient-il ?
4. En pliant habilement en trois parts égales l'angle plat de la question 3, quelle mesure aurait chaque part ? Et deux parts ensemble ?
5. Malo dit : « En repliant plusieurs fois en deux un angle droit, je peux obtenir un angle de $10^\\circ$. » A-t-il raison ? Justifier en donnant les premières mesures obtenues.`,
      solution: `Plier un angle en superposant ses deux côtés le partage en deux angles égaux : le pli est la **bissectrice** de l'angle.

**1.** Le coin d'une feuille rectangulaire est un **angle droit** ($90^\\circ$). Le pli le partage en deux angles de $90^\\circ \\div 2 = 45^\\circ$. Le pli est la bissectrice de l'angle droit.

**2.** $45^\\circ \\div 2 = 22{,}5^\\circ$.

**3.** L'angle plat mesure $180^\\circ$ ; le pli le partage en deux angles de $180^\\circ \\div 2 = 90^\\circ$ : on obtient un **angle droit**.

**4.** Une part : $180^\\circ \\div 3 = 60^\\circ$. Deux parts : $2 \\times 60^\\circ = 120^\\circ$.

**5.** En partant de $90^\\circ$ et en divisant par $2$ à chaque pliage, on obtient :
$$90^\\circ \\to 45^\\circ \\to 22{,}5^\\circ \\to 11{,}25^\\circ \\to 5{,}625^\\circ \\to \\ldots$$
Après $11{,}25^\\circ$, on passe directement à $5{,}625^\\circ$ : on n'obtient jamais exactement $10^\\circ$. **Malo a tort.**`
    },
    {
      id: "6G3-ds-15",
      title: "Trois droites qui se croisent",
      difficulty: 3,
      points: 5,
      statement: `Trois droites $(AD)$, $(BE)$ et $(CF)$ se coupent en un même point $O$, comme sur la figure (qui n'est pas en vraie grandeur). On sait que $\\widehat{AOB} = 50^\\circ$ et $\\widehat{BOC} = 70^\\circ$. La demi-droite $[OG)$, en pointillés, est la bissectrice de l'angle $\\widehat{BOC}$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 320 220" width="320" height="220" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="65" y1="110" x2="255" y2="110" stroke="currentColor" stroke-width="2"/><line x1="98.9" y1="182.8" x2="221.1" y2="37.2" stroke="currentColor" stroke-width="2"/><line x1="112.5" y1="27.7" x2="207.5" y2="192.3" stroke="currentColor" stroke-width="2"/><line x1="160" y1="110" x2="167" y2="30.3" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="5 4"/><path d="M185,110 A25,25 0 0 0 176.1,90.8" fill="none" stroke="#2563eb" stroke-width="1.6"/><path d="M176.1,90.8 A25,25 0 0 0 147.5,88.3" fill="none" stroke="#16a34a" stroke-width="1.6"/><text x="191" y="102" font-size="12" fill="#2563eb">50°</text><text x="126" y="76" font-size="12" fill="#16a34a">70°</text><circle cx="160" cy="110" r="3" fill="currentColor"/><text x="146" y="128" font-size="14" fill="currentColor">O</text><text x="262" y="115" font-size="14" fill="currentColor">A</text><text x="226" y="34" font-size="14" fill="currentColor">B</text><text x="102" y="24" font-size="14" fill="currentColor">C</text><text x="46" y="115" font-size="14" fill="currentColor">D</text><text x="86" y="199" font-size="14" fill="currentColor">E</text><text x="212" y="208" font-size="14" fill="currentColor">F</text><text x="170" y="24" font-size="14" fill="#dc2626">G</text></svg></div>

1. Les points $A$, $O$ et $D$ sont alignés. Calculer la mesure de l'angle $\\widehat{COD}$.
2. Que peut-on dire des angles $\\widehat{AOB}$ et $\\widehat{DOE}$ ? En déduire $\\widehat{DOE}$, puis donner de la même façon $\\widehat{EOF}$ et $\\widehat{FOA}$.
3. Vérifier que la somme des six angles $\\widehat{AOB}$, $\\widehat{BOC}$, $\\widehat{COD}$, $\\widehat{DOE}$, $\\widehat{EOF}$ et $\\widehat{FOA}$ fait un tour complet.
4. Calculer $\\widehat{BOG}$, puis $\\widehat{AOG}$ et $\\widehat{GOD}$.`,
      solution: `**1.** Comme $A$, $O$ et $D$ sont alignés, $\\widehat{AOD}$ est un angle plat ($180^\\circ$). Il est formé des trois angles adjacents $\\widehat{AOB}$, $\\widehat{BOC}$ et $\\widehat{COD}$ :
$$\\widehat{COD} = 180^\\circ - 50^\\circ - 70^\\circ = 60^\\circ.$$

**2.** Les angles $\\widehat{AOB}$ et $\\widehat{DOE}$ sont **opposés par le sommet** (formés par les droites $(AD)$ et $(BE)$) : ils ont la même mesure, donc $\\widehat{DOE} = 50^\\circ$.
De même, $\\widehat{EOF}$ est opposé par le sommet à $\\widehat{BOC}$ : $\\widehat{EOF} = 70^\\circ$ ; et $\\widehat{FOA}$ est opposé par le sommet à $\\widehat{COD}$ : $\\widehat{FOA} = 60^\\circ$.

**3.** $50 + 70 + 60 + 50 + 70 + 60 = 360$ : la somme vaut $360^\\circ$, c'est bien un tour complet.

**4.** $[OG)$ partage $\\widehat{BOC}$ en deux angles égaux : $\\widehat{BOG} = 70^\\circ \\div 2 = 35^\\circ$.
$\\widehat{AOG} = \\widehat{AOB} + \\widehat{BOG} = 50^\\circ + 35^\\circ = 85^\\circ$.
$\\widehat{GOD} = \\widehat{GOC} + \\widehat{COD} = 35^\\circ + 60^\\circ = 95^\\circ$.
Vérification : $85^\\circ + 95^\\circ = 180^\\circ$, ce qui est normal puisque $A$, $O$ et $D$ sont alignés.`
    },
    {
      id: "6G3-ds-16",
      title: "Le rayon de lumière et le miroir",
      difficulty: 4,
      points: 6,
      statement: `Un rayon de lumière part du point $A$, frappe un miroir plan au point $I$ et repart vers le point $B$. Le miroir est représenté par une droite. On admet la loi suivante : **l'angle entre le rayon qui arrive et le miroir est égal à l'angle entre le rayon qui repart et le miroir** (ces deux angles, de part et d'autre, sont notés $a$ sur la figure). La droite en pointillés est perpendiculaire au miroir en $I$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 320 185" width="320" height="185" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="20" y1="150" x2="300" y2="150" stroke="currentColor" stroke-width="3"/><line x1="40" y1="150" x2="30" y2="162" stroke="currentColor" stroke-width="1"/><line x1="80" y1="150" x2="70" y2="162" stroke="currentColor" stroke-width="1"/><line x1="120" y1="150" x2="110" y2="162" stroke="currentColor" stroke-width="1"/><line x1="160" y1="150" x2="150" y2="162" stroke="currentColor" stroke-width="1"/><line x1="200" y1="150" x2="190" y2="162" stroke="currentColor" stroke-width="1"/><line x1="240" y1="150" x2="230" y2="162" stroke="currentColor" stroke-width="1"/><line x1="280" y1="150" x2="270" y2="162" stroke="currentColor" stroke-width="1"/><line x1="160" y1="150" x2="160" y2="40" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="69.9" y1="86.9" x2="160" y2="150" stroke="#dc2626" stroke-width="2"/><line x1="160" y1="150" x2="250.1" y2="86.9" stroke="#dc2626" stroke-width="2"/><path d="M130,150 A30,30 0 0 1 135.4,132.8" fill="none" stroke="#2563eb" stroke-width="1.6"/><path d="M190,150 A30,30 0 0 0 184.6,132.8" fill="none" stroke="#2563eb" stroke-width="1.6"/><text x="114" y="144" font-size="14" fill="#2563eb">a</text><text x="198" y="144" font-size="14" fill="#2563eb">a</text><text x="56" y="80" font-size="15" fill="currentColor">A</text><text x="254" y="80" font-size="15" fill="currentColor">B</text><text x="156" y="178" font-size="15" fill="currentColor">I</text></svg></div>

1. Dans cette question, $a = 35^\\circ$. Les trois angles $a$, $\\widehat{AIB}$ et $a$ forment l'angle plat du miroir. Calculer $\\widehat{AIB}$.
2. On veut que le rayon reparte perpendiculairement à sa direction d'arrivée, c'est-à-dire $\\widehat{AIB} = 90^\\circ$. Que doit valoir l'angle $a$ ? Justifier.
3. Même question si l'on veut $\\widehat{AIB} = 50^\\circ$.
4. Dans le cas de la question 1, calculer l'angle entre le rayon $[IA)$ et la perpendiculaire au miroir en $I$. Montrer que cette perpendiculaire est la bissectrice de l'angle $\\widehat{AIB}$.
5. Expliquer pourquoi, quelle que soit la valeur de $a$, la perpendiculaire au miroir en $I$ est toujours la bissectrice de $\\widehat{AIB}$.`,
      solution: `**1.** Les trois angles adjacents forment un angle plat :
$$\\widehat{AIB} = 180^\\circ - 35^\\circ - 35^\\circ = 110^\\circ.$$

**2.** Il faut $a + 90^\\circ + a = 180^\\circ$, donc les deux angles $a$ font ensemble $180^\\circ - 90^\\circ = 90^\\circ$, et $a = 90^\\circ \\div 2 = 45^\\circ$.
Vérification : $45 + 90 + 45 = 180$.

**3.** Les deux angles $a$ font ensemble $180^\\circ - 50^\\circ = 130^\\circ$, donc $a = 130^\\circ \\div 2 = 65^\\circ$. Vérification : $65 + 50 + 65 = 180$.

**4.** La perpendiculaire au miroir forme avec le miroir un angle droit. L'angle entre $[IA)$ et la perpendiculaire est donc $90^\\circ - 35^\\circ = 55^\\circ$. De l'autre côté, l'angle entre la perpendiculaire et $[IB)$ vaut aussi $90^\\circ - 35^\\circ = 55^\\circ$.
Les deux angles sont adjacents, égaux, et $55^\\circ + 55^\\circ = 110^\\circ = \\widehat{AIB}$ : la perpendiculaire partage $\\widehat{AIB}$ en deux angles égaux, c'est **la bissectrice de $\\widehat{AIB}$**.

**5.** Quelle que soit la valeur de $a$, l'angle entre $[IA)$ et la perpendiculaire vaut $90^\\circ - a$, et l'angle entre la perpendiculaire et $[IB)$ vaut aussi $90^\\circ - a$, car les deux angles $a$ sont égaux. La perpendiculaire partage donc toujours $\\widehat{AIB}$ en deux angles égaux : c'est toujours sa bissectrice.`
    }
  ],
  "6G4": [
    {
      id: "6G4-ds-01",
      title: "Somme des angles d'un triangle",
      difficulty: 1,
      points: 4,
      statement: `1. Dans le triangle $ABC$, on sait que $\\widehat{BAC} = 47^\\circ$ et $\\widehat{ABC} = 68^\\circ$. Calculer la mesure de l'angle $\\widehat{ACB}$.
2. Le triangle $DEF$ est rectangle en $D$ et $\\widehat{DEF} = 34^\\circ$. Calculer la mesure de l'angle $\\widehat{DFE}$.
3. Un triangle peut-il avoir deux angles obtus ? Justifier.`,
      solution: `**1.** Dans un triangle, la somme des mesures des trois angles est égale à $180^\\circ$.
$\\widehat{ACB} = 180^\\circ - (47^\\circ + 68^\\circ) = 180^\\circ - 115^\\circ = 65^\\circ$.

**2.** Le triangle est rectangle en $D$, donc $\\widehat{EDF} = 90^\\circ$.
$\\widehat{DFE} = 180^\\circ - (90^\\circ + 34^\\circ) = 180^\\circ - 124^\\circ = 56^\\circ$.

**3.** Un angle obtus mesure plus de $90^\\circ$. Deux angles obtus mesureraient ensemble plus de $90^\\circ + 90^\\circ = 180^\\circ$, ce qui dépasse déjà la somme des trois angles d'un triangle. **C'est impossible.**`
    },
    {
      id: "6G4-ds-02",
      title: "Reconnaître et construire des triangles particuliers",
      difficulty: 1,
      points: 4,
      statement: `On donne les longueurs des côtés de trois triangles :
- triangle $ABC$ : $AB = 6$ cm, $BC = 5$ cm, $AC = 4$ cm ;
- triangle $DEF$ : $DE = 5$ cm, $DF = 5$ cm, $EF = 3$ cm ;
- triangle $GHI$ : $GH = HI = GI = 4$ cm.

1. Décrire les étapes de construction du triangle $ABC$ à la règle et au compas.
2. Donner la nature des triangles $DEF$ et $GHI$, en précisant le sommet principal du triangle $DEF$.
3. Quelle est la mesure de chaque angle du triangle $GHI$ ?`,
      solution: `**1.** On trace le segment $[AB]$ de longueur $6$ cm. On trace un arc de cercle de centre $A$ et de rayon $4$ cm, puis un arc de cercle de centre $B$ et de rayon $5$ cm. Ces deux arcs se coupent au point $C$. On trace enfin $[AC]$ et $[BC]$.

**2.** $DE = DF = 5$ cm : le triangle $DEF$ a deux côtés de même longueur, il est **isocèle en $D$** ($D$ est son sommet principal, $[EF]$ sa base).
$GH = HI = GI$ : les trois côtés ont la même longueur, $GHI$ est **équilatéral**.

**3.** Les trois angles d'un triangle équilatéral sont égaux et leur somme vaut $180^\\circ$ : chacun mesure $180^\\circ \\div 3 = 60^\\circ$.`
    },
    {
      id: "6G4-ds-03",
      title: "Angles d'un triangle isocèle",
      difficulty: 2,
      points: 5,
      statement: `1. Le triangle $ABC$ est isocèle en $A$ et $\\widehat{BAC} = 40^\\circ$. Calculer les mesures des angles $\\widehat{ABC}$ et $\\widehat{ACB}$.
2. Le triangle $RST$ est isocèle en $R$ et $\\widehat{RST} = 52^\\circ$. Calculer les deux autres angles.
3. Un triangle isocèle a un angle de $60^\\circ$ au sommet principal. Quelle est la nature exacte de ce triangle ? Justifier.`,
      solution: `**1.** Dans un triangle isocèle, les deux angles à la base sont égaux : $\\widehat{ABC} = \\widehat{ACB}$.
La somme des angles vaut $180^\\circ$ : $\\widehat{ABC} + \\widehat{ACB} = 180^\\circ - 40^\\circ = 140^\\circ$.
Donc $\\widehat{ABC} = \\widehat{ACB} = 140^\\circ \\div 2 = 70^\\circ$.

**2.** $RST$ est isocèle en $R$, donc les angles à la base sont $\\widehat{RST}$ et $\\widehat{RTS}$ : $\\widehat{RTS} = 52^\\circ$.
$\\widehat{SRT} = 180^\\circ - (52^\\circ + 52^\\circ) = 180^\\circ - 104^\\circ = 76^\\circ$.

**3.** Les deux angles à la base sont égaux et valent ensemble $180^\\circ - 60^\\circ = 120^\\circ$, donc chacun mesure $60^\\circ$. Les trois angles mesurent $60^\\circ$ : le triangle est **équilatéral**.`
    },
    {
      id: "6G4-ds-04",
      title: "Le triangle rectangle",
      difficulty: 2,
      points: 5,
      statement: `1. Construire un triangle $MNP$ rectangle en $M$ tel que $MN = 4$ cm et $MP = 3$ cm. Décrire les étapes de la construction.
2. Dans le triangle $MNP$, on mesure $\\widehat{MNP} \\approx 37^\\circ$. Calculer une valeur approchée de $\\widehat{MPN}$.
3. Le triangle $UVW$ a deux angles qui mesurent $35^\\circ$ et $55^\\circ$. Est-il rectangle ? Justifier.
4. Comment s'appelle le côté $[NP]$ du triangle $MNP$ ? Pourquoi est-il opposé à l'angle droit ?`,
      solution: `**1.** On trace $[MN]$ de $4$ cm. À l'équerre, on trace la perpendiculaire à $(MN)$ passant par $M$. Sur cette perpendiculaire, on place le point $P$ tel que $MP = 3$ cm. On trace $[NP]$.

**2.** La somme des angles vaut $180^\\circ$ et $\\widehat{NMP} = 90^\\circ$ :
$\\widehat{MPN} \\approx 180^\\circ - (90^\\circ + 37^\\circ) = 53^\\circ$.

**3.** Le troisième angle mesure $180^\\circ - (35^\\circ + 55^\\circ) = 180^\\circ - 90^\\circ = 90^\\circ$. Le triangle $UVW$ a un angle droit : **il est rectangle**.

**4.** $[NP]$ est l'**hypoténuse** du triangle rectangle : c'est le côté qui ne contient pas le sommet $M$ de l'angle droit, il est donc situé « en face » de l'angle droit.`
    },
    {
      id: "6G4-ds-05",
      title: "Le cercle circonscrit",
      difficulty: 3,
      points: 5,
      statement: `On a construit un triangle $ABC$, puis les médiatrices des segments $[AB]$ et $[BC]$. Elles se coupent en un point $O$.

1. Expliquer pourquoi $OA = OB$, puis pourquoi $OB = OC$.
2. En déduire que le point $O$ est aussi sur la médiatrice de $[AC]$.
3. On mesure $OA = 3{,}5$ cm. Expliquer pourquoi le cercle de centre $O$ et de rayon $3{,}5$ cm passe par $A$, $B$ et $C$. Comment appelle-t-on ce cercle ? Quel est son diamètre ?
4. Un point $D$ est tel que $OD = 3$ cm. Le point $D$ est-il sur ce cercle ?`,
      solution: `**1.** $O$ est sur la médiatrice de $[AB]$. Or tout point de la médiatrice d'un segment est à égale distance de ses extrémités : $OA = OB$.
De même, $O$ est sur la médiatrice de $[BC]$, donc $OB = OC$.

**2.** On a $OA = OB$ et $OB = OC$, donc $OA = OC$ : $O$ est à égale distance de $A$ et de $C$. Il est donc **sur la médiatrice de $[AC]$** : les trois médiatrices passent par le même point $O$.

**3.** $OA = OB = OC = 3{,}5$ cm : les points $A$, $B$ et $C$ sont tous à $3{,}5$ cm de $O$, donc sur le cercle de centre $O$ et de rayon $3{,}5$ cm. C'est le **cercle circonscrit** au triangle $ABC$. Son diamètre vaut $2 \\times 3{,}5 = 7$ cm.

**4.** $OD = 3$ cm $\\neq 3{,}5$ cm, donc $D$ n'est pas sur le cercle : il est à l'intérieur.`
    },
    {
      id: "6G4-ds-06",
      title: "Un carré et un triangle équilatéral",
      difficulty: 3,
      points: 5,
      statement: `$ABCD$ est un carré de côté $5$ cm. À l'extérieur du carré, on construit le triangle équilatéral $BCE$.

1. Construire la figure en vraie grandeur.
2. Quelles sont les mesures des angles $\\widehat{ABC}$ et $\\widehat{CBE}$ ? En déduire la mesure de l'angle $\\widehat{ABE}$.
3. Montrer que le triangle $ABE$ est isocèle en $B$.
4. Calculer la mesure des angles $\\widehat{BAE}$ et $\\widehat{BEA}$.`,
      solution: `**1.** On construit le carré $ABCD$ de côté $5$ cm, puis, du côté opposé au carré par rapport à $(BC)$, le point $E$ à l'intersection des arcs de cercle de centres $B$ et $C$ et de rayon $5$ cm.

**2.** $ABCD$ est un carré, donc $\\widehat{ABC} = 90^\\circ$. $BCE$ est équilatéral, donc $\\widehat{CBE} = 60^\\circ$.
Ces angles sont adjacents (le triangle est construit à l'extérieur) : $\\widehat{ABE} = 90^\\circ + 60^\\circ = 150^\\circ$.

**3.** $BA = 5$ cm (côté du carré) et $BE = BC = 5$ cm (côtés du triangle équilatéral). Donc $BA = BE$ : le triangle $ABE$ est **isocèle en $B$**.

**4.** Les angles à la base d'un triangle isocèle sont égaux et la somme des angles vaut $180^\\circ$ :
$\\widehat{BAE} = \\widehat{BEA} = (180^\\circ - 150^\\circ) \\div 2 = 30^\\circ \\div 2 = 15^\\circ$.`
    },
    {
      id: "6G4-ds-07",
      title: "Une antenne pour trois villages",
      difficulty: 4,
      points: 6,
      statement: `Une entreprise veut installer une antenne de téléphone à **égale distance** de trois villages $A$, $B$ et $C$. Sur un plan à l'échelle $1$ cm pour $1$ km, on a $AB = 7$ cm, $BC = 6$ cm et $AC = 5$ cm.

1. Construire le triangle $ABC$ sur le plan.
2. Expliquer comment trouver la position $O$ de l'antenne. Justifier par une propriété.
3. Sur le plan, on mesure $OA \\approx 3{,}6$ cm. À quelle distance réelle de chaque village se trouve l'antenne ?
4. Deux modèles d'antenne existent : une de portée $3$ km et une de portée $4$ km. Laquelle choisir pour que les trois villages captent le réseau ? Justifier.`,
      solution: `**1.** On trace $[AB]$ de $7$ cm, puis les arcs de centre $A$ de rayon $5$ cm et de centre $B$ de rayon $6$ cm : ils se coupent en $C$.

**2.** Les points à égale distance de $A$ et de $B$ sont sur la médiatrice de $[AB]$ ; ceux à égale distance de $B$ et de $C$ sont sur la médiatrice de $[BC]$. On trace ces deux médiatrices : l'antenne est en leur **point d'intersection $O$**. Alors $OA = OB$ et $OB = OC$, donc $OA = OB = OC$ : $O$ est le centre du cercle circonscrit au triangle $ABC$.

**3.** $OA = OB = OC \\approx 3{,}6$ cm sur le plan, soit environ $3{,}6$ km en réalité ($1$ cm pour $1$ km).

**4.** Chaque village est à environ $3{,}6$ km de l'antenne. Avec une portée de $3$ km, aucun village ne serait couvert ($3{,}6 > 3$). Avec une portée de $4$ km, les trois villages sont couverts ($3{,}6 < 4$). Il faut choisir **l'antenne de portée $4$ km**.`
    },
    {
      id: "6G4-ds-08",
      title: "Des angles liés entre eux",
      difficulty: 4,
      points: 6,
      statement: `1. Dans un triangle $ABC$, l'angle $\\widehat{ABC}$ est le double de l'angle $\\widehat{BAC}$ et l'angle $\\widehat{ACB}$ est le triple de l'angle $\\widehat{BAC}$.
a) En représentant l'angle $\\widehat{BAC}$ par une « part », combien de parts représentent les trois angles réunis ?
b) Calculer les trois angles. Quelle est la nature du triangle $ABC$ ?
2. Dans un triangle isocèle, l'angle au sommet principal est le double de chacun des angles à la base. Calculer les trois angles et donner la nature précise du triangle.
3. Peut-on construire un triangle isocèle dont l'angle au sommet principal mesure $180^\\circ$ ? Expliquer.`,
      solution: `**1.** a) $\\widehat{BAC}$ vaut $1$ part, $\\widehat{ABC}$ vaut $2$ parts et $\\widehat{ACB}$ vaut $3$ parts : en tout $1 + 2 + 3 = 6$ parts.
b) La somme des angles d'un triangle vaut $180^\\circ$, donc une part vaut $180^\\circ \\div 6 = 30^\\circ$.
$\\widehat{BAC} = 30^\\circ$ ; $\\widehat{ABC} = 2 \\times 30^\\circ = 60^\\circ$ ; $\\widehat{ACB} = 3 \\times 30^\\circ = 90^\\circ$.
Vérification : $30 + 60 + 90 = 180$. Le triangle $ABC$ est **rectangle en $C$**.

**2.** Chaque angle à la base vaut $1$ part et l'angle au sommet $2$ parts : $1 + 1 + 2 = 4$ parts $= 180^\\circ$, donc une part vaut $180^\\circ \\div 4 = 45^\\circ$.
Les angles mesurent $45^\\circ$, $45^\\circ$ et $90^\\circ$ : c'est un **triangle rectangle isocèle**.

**3.** Non : il resterait $180^\\circ - 180^\\circ = 0^\\circ$ pour les deux angles à la base. Les trois sommets seraient alignés : ce ne serait pas un vrai triangle.`
    },
    {
      id: "6G4-ds-09",
      title: "Construire des triangles avec des angles",
      difficulty: 1,
      points: 4,
      statement: `1. On veut construire un triangle $ABC$ tel que $AB = 6$ cm, $\\widehat{BAC} = 50^\\circ$ et $\\widehat{ABC} = 60^\\circ$.
   a) Décrire les étapes de la construction, puis la réaliser.
   b) Calculer la mesure de l'angle $\\widehat{ACB}$, puis vérifier au rapporteur.
2. On veut construire un triangle $DEF$ tel que $DE = 5$ cm, $DF = 4$ cm et $\\widehat{EDF} = 45^\\circ$.
   a) Décrire les étapes de la construction, puis la réaliser.
   b) Mesurer la longueur $EF$ (au millimètre près).`,
      solution: `**1.** a) On trace le segment $[AB]$ de $6$ cm. Au rapporteur (centre en $A$, zéro sur $[AB)$), on trace une demi-droite d'origine $A$ faisant un angle de $50^\\circ$ avec $[AB]$. Puis, du même côté de $[AB]$, on trace en $B$ une demi-droite faisant un angle de $60^\\circ$ avec $[BA]$. Les deux demi-droites se coupent en $C$.

b) La somme des angles d'un triangle vaut $180^\\circ$ :
$\\widehat{ACB} = 180^\\circ - 50^\\circ - 60^\\circ = 70^\\circ$. On vérifie au rapporteur : toute mesure comprise entre $68^\\circ$ et $72^\\circ$ est acceptée, compte tenu de la précision du tracé.

**2.** a) On trace $[DE]$ de $5$ cm. En $D$, on trace au rapporteur une demi-droite faisant un angle de $45^\\circ$ avec $[DE]$. Sur cette demi-droite, on place $F$ à $4$ cm de $D$ (règle graduée ou compas). On trace le segment $[EF]$.

b) On mesure $EF \\approx 3{,}6$ cm : toute mesure comprise **entre $3{,}5$ cm et $3{,}7$ cm** est acceptée, selon la précision du tracé.`
    },
    {
      id: "6G4-ds-10",
      title: "Des triangles impossibles ?",
      difficulty: 2,
      points: 5,
      statement: `Pour chaque question, répondre par une phrase et justifier par un calcul ou une propriété.

1. Peut-on construire un triangle dont deux angles mesurent $100^\\circ$ et $85^\\circ$ ?
2. Un triangle peut-il avoir deux angles droits ?
3. Un triangle $ABC$ a deux angles de $30^\\circ$ et $60^\\circ$. Quelle est la mesure du troisième angle ? Que peut-on dire de ce triangle ?
4. Un triangle équilatéral a ses trois angles de même mesure. Calculer cette mesure.
5. Le triangle $MNP$ est rectangle et isocèle en $M$. Calculer les mesures de ses angles $\\widehat{MNP}$ et $\\widehat{MPN}$.
6. Un triangle isocèle peut-il avoir des angles à la base de $95^\\circ$ ?`,
      solution: `On utilise : la somme des angles d'un triangle vaut $180^\\circ$.

**1.** $100^\\circ + 85^\\circ = 185^\\circ$, ce qui dépasse déjà $180^\\circ$ : **impossible**.

**2.** Deux angles droits font déjà $90^\\circ + 90^\\circ = 180^\\circ$ ; le troisième angle mesurerait $0^\\circ$ : ce ne serait plus un triangle. **Impossible.**

**3.** $180^\\circ - 30^\\circ - 60^\\circ = 90^\\circ$ : le troisième angle est droit, le triangle $ABC$ est **rectangle**.

**4.** Les trois angles sont égaux et leur somme vaut $180^\\circ$ : chacun mesure $180 \\div 3 = 60^\\circ$.

**5.** L'angle $\\widehat{NMP}$ est droit : $90^\\circ$. Le triangle étant isocèle en $M$, ses angles à la base $\\widehat{MNP}$ et $\\widehat{MPN}$ sont égaux. Leur somme vaut $180^\\circ - 90^\\circ = 90^\\circ$, donc chacun mesure $90 \\div 2 = 45^\\circ$.

**6.** Les deux angles à la base d'un triangle isocèle sont égaux : $95^\\circ + 95^\\circ = 190^\\circ > 180^\\circ$. **Impossible** (les angles à la base d'un triangle isocèle sont toujours aigus).`
    },
    {
      id: "6G4-ds-11",
      title: "Le toit de la maison",
      difficulty: 3,
      points: 5,
      statement: `Vue de face, la façade du grenier d'une maison est un triangle $ABC$ : la base $[BC]$ (le plancher) mesure $8$ m et les deux pentes du toit mesurent $AB = AC = 5$ m. Sur un plan, on a mesuré l'angle $\\widehat{ABC}$ : on trouve environ $37^\\circ$. Dans les calculs, on prendra $\\widehat{ABC} = 37^\\circ$.

1. Quelle est la nature du triangle $ABC$ ? En déduire la mesure de $\\widehat{ACB}$.
2. Calculer la mesure de l'angle au sommet $\\widehat{BAC}$. Cet angle est-il aigu ou obtus ?
3. Construire le triangle $ABC$ à l'échelle $1$ cm pour $1$ m.
4. On note $H$ le milieu de $[BC]$.
   a) Expliquer pourquoi le point $A$ est sur la médiatrice de $[BC]$. Que peut-on dire de la droite $(AH)$ ?
   b) Calculer la mesure de l'angle $\\widehat{BAH}$ en utilisant le triangle $ABH$.
   c) Mesurer $AH$ sur le plan et en déduire la hauteur réelle du grenier.`,
      solution: `**1.** $AB = AC$ : le triangle $ABC$ est **isocèle en $A$**. Ses angles à la base sont égaux : $\\widehat{ACB} = \\widehat{ABC} = 37^\\circ$.

**2.** $\\widehat{BAC} = 180^\\circ - 37^\\circ - 37^\\circ = 106^\\circ$. C'est un angle **obtus** (plus de $90^\\circ$).

**3.** On trace $[BC]$ de $8$ cm, puis deux arcs de rayon $5$ cm centrés en $B$ et en $C$ : ils se coupent en $A$.

**4.** a) $AB = AC$ : le point $A$ est à égale distance de $B$ et de $C$, il est donc sur la médiatrice de $[BC]$. Cette médiatrice passe aussi par le milieu $H$ de $[BC]$ : c'est la droite $(AH)$. Ainsi **$(AH)$ est perpendiculaire à $(BC)$** en $H$ ($\\widehat{AHB} = 90^\\circ$).

b) Dans le triangle $ABH$, rectangle en $H$ :
$\\widehat{BAH} = 180^\\circ - 90^\\circ - 37^\\circ = 53^\\circ$.
(On retrouve bien la moitié de $\\widehat{BAC} = 106^\\circ$.)

c) On mesure $AH \\approx 3$ cm sur le plan : toute mesure comprise **entre $2{,}9$ cm et $3{,}1$ cm** est acceptée. Avec l'échelle $1$ cm pour $1$ m, le grenier a une hauteur d'environ **$3$ m**.
(Plus tard, le théorème de Pythagore permettra de démontrer que la hauteur vaut exactement $3$ m.)`
    },
    {
      id: "6G4-ds-12",
      title: "Un triangle équilatéral et un triangle rectangle isocèle",
      difficulty: 4,
      points: 6,
      statement: `$ABC$ est un triangle équilatéral de côté $4$ cm. On construit, de l'autre côté de la droite $(BC)$ par rapport à $A$, le triangle $BCD$ rectangle et isocèle en $C$ (donc $CD = CB$ et $\\widehat{BCD} = 90^\\circ$). On trace ensuite les segments $[AD]$ et $[BD]$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:260px;"><svg class="geo-svg-figure" viewBox="0 0 250 265" width="250" height="265" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="120,16 60,120 180,120" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="2"/><polygon points="60,120 180,120 180,240" fill="rgba(16,185,129,0.10)" stroke="currentColor" stroke-width="2"/><line x1="120" y1="16" x2="180" y2="240" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="6 4"/><polyline points="168,120 168,132 180,132" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="120" y="10" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">A</text><text x="48" y="126" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">B</text><text x="194" y="122" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">C</text><text x="194" y="250" text-anchor="middle" font-size="15" font-weight="bold" fill="currentColor">D</text></svg></div>

*La figure est à main levée : les angles et les longueurs n'y sont pas mesurables.*

1. Construire la figure en vraie grandeur. Expliquer la construction du point $D$.
2. Donner, sans justifier, la mesure des angles $\\widehat{ACB}$ et $\\widehat{ABC}$. Calculer ensuite les mesures des angles $\\widehat{CBD}$ et $\\widehat{CDB}$ en justifiant.
3. a) Montrer que le triangle $ACD$ est isocèle en $C$.
   b) Expliquer pourquoi $\\widehat{ACD} = 150^\\circ$.
   c) En déduire les mesures des angles $\\widehat{CAD}$ et $\\widehat{CDA}$.
4. a) En utilisant la figure, calculer $\\widehat{BAD}$, $\\widehat{ABD}$ et $\\widehat{ADB}$.
   b) Vérifier que la somme des angles du triangle $ABD$ vaut bien $180^\\circ$.`,
      solution: `**1.** On trace $[BC]$ de $4$ cm, puis $A$ à l'intersection de deux arcs de rayon $4$ cm centrés en $B$ et en $C$. Pour $D$ : on trace à l'équerre la perpendiculaire à $(BC)$ passant par $C$, du côté opposé à $A$, et on y place $D$ tel que $CD = 4$ cm (au compas).

**2.** Les trois angles d'un triangle équilatéral mesurent $60^\\circ$ : $\\widehat{ACB} = \\widehat{ABC} = 60^\\circ$.
Le triangle $BCD$ est isocèle en $C$ : ses angles à la base sont égaux, $\\widehat{CBD} = \\widehat{CDB}$. Leur somme vaut $180^\\circ - 90^\\circ = 90^\\circ$, donc $\\widehat{CBD} = \\widehat{CDB} = 45^\\circ$.

**3.** a) $CA = CB = 4$ cm (triangle équilatéral) et $CD = CB = 4$ cm : donc $CA = CD$, le triangle $ACD$ est **isocèle en $C$**.
b) Les angles $\\widehat{ACB}$ et $\\widehat{BCD}$ sont adjacents (côté commun $[CB)$, $A$ et $D$ de part et d'autre de $(BC)$) : $\\widehat{ACD} = 60^\\circ + 90^\\circ = 150^\\circ$.
c) Dans le triangle $ACD$ isocèle en $C$, les angles à la base sont égaux et leur somme vaut $180^\\circ - 150^\\circ = 30^\\circ$ : $\\widehat{CAD} = \\widehat{CDA} = 15^\\circ$.

**4.** a) La demi-droite $[AD)$ est à l'intérieur de l'angle $\\widehat{BAC}$ : $\\widehat{BAD} = \\widehat{BAC} - \\widehat{CAD} = 60^\\circ - 15^\\circ = 45^\\circ$.
La demi-droite $[BC)$ est à l'intérieur de l'angle $\\widehat{ABD}$ : $\\widehat{ABD} = \\widehat{ABC} + \\widehat{CBD} = 60^\\circ + 45^\\circ = 105^\\circ$.
La demi-droite $[DA)$ est à l'intérieur de l'angle $\\widehat{CDB}$ : $\\widehat{ADB} = \\widehat{CDB} - \\widehat{CDA} = 45^\\circ - 15^\\circ = 30^\\circ$.
b) $45^\\circ + 105^\\circ + 30^\\circ = 180^\\circ$ : la somme des angles du triangle $ABD$ vaut bien $180^\\circ$.`
    },
    {
      id: "6G4-ds-13",
      title: "La nature d'un triangle grâce à ses angles",
      difficulty: 1,
      points: 4,
      statement: `Pour chaque triangle, on connaît la mesure de deux angles.

| Triangle | Premier angle | Deuxième angle |
|:---:|:---:|:---:|
| $T_1$ | $60^\\circ$ | $60^\\circ$ |
| $T_2$ | $90^\\circ$ | $45^\\circ$ |
| $T_3$ | $30^\\circ$ | $75^\\circ$ |
| $T_4$ | $35^\\circ$ | $55^\\circ$ |
| $T_5$ | $50^\\circ$ | $70^\\circ$ |

1. Rappeler la somme des mesures des trois angles d'un triangle.
2. Calculer, pour chaque triangle, la mesure du troisième angle.
3. On rappelle qu'un triangle qui a deux angles de même mesure est isocèle et qu'un triangle qui a ses trois angles de même mesure est équilatéral. Donner la nature de chaque triangle (quelconque, isocèle, équilatéral, rectangle, rectangle isocèle). Justifier.`,
      solution: `**1.** Dans un triangle, la somme des mesures des trois angles est égale à $180^\\circ$.

**2.** On soustrait les deux angles connus à $180^\\circ$ :
- $T_1$ : $180 - 60 - 60 = 60$, troisième angle $60^\\circ$ ;
- $T_2$ : $180 - 90 - 45 = 45$, troisième angle $45^\\circ$ ;
- $T_3$ : $180 - 30 - 75 = 75$, troisième angle $75^\\circ$ ;
- $T_4$ : $180 - 35 - 55 = 90$, troisième angle $90^\\circ$ ;
- $T_5$ : $180 - 50 - 70 = 60$, troisième angle $60^\\circ$.

**3.**
- $T_1$ : trois angles de $60^\\circ$ : **équilatéral**.
- $T_2$ : un angle droit et deux angles de $45^\\circ$ : **rectangle isocèle**.
- $T_3$ : deux angles de $75^\\circ$ : **isocèle** (non rectangle, non équilatéral).
- $T_4$ : un angle de $90^\\circ$ (le troisième) : **rectangle** ; ses deux autres angles, $35^\\circ$ et $55^\\circ$, sont différents, il n'est pas isocèle.
- $T_5$ : angles $50^\\circ$, $70^\\circ$, $60^\\circ$, tous différents et aucun droit : **quelconque**.`
    },
    {
      id: "6G4-ds-14",
      title: "Un hexagone en triangles équilatéraux",
      difficulty: 2,
      points: 5,
      statement: `Paul assemble six triangles équilatéraux identiques, de côté $3$ cm, autour d'un même point $O$. Il obtient l'hexagone $ABCDEF$ ci-dessous.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:300px;"><svg class="geo-svg-figure" viewBox="0 0 300 220" width="300" height="220" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="240,110 195,32.1 105,32.1 60,110 105,187.9 195,187.9" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="2"/><line x1="150" y1="110" x2="240" y2="110" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="110" x2="195" y2="32.1" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="110" x2="105" y2="32.1" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="110" x2="60" y2="110" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="110" x2="105" y2="187.9" stroke="currentColor" stroke-width="1.5"/><line x1="150" y1="110" x2="195" y2="187.9" stroke="currentColor" stroke-width="1.5"/><circle cx="150" cy="110" r="3" fill="currentColor"/><text x="146" y="130" font-size="14" fill="currentColor">O</text><text x="248" y="115" font-size="14" fill="currentColor">A</text><text x="198" y="26" font-size="14" fill="currentColor">B</text><text x="92" y="26" font-size="14" fill="currentColor">C</text><text x="42" y="115" font-size="14" fill="currentColor">D</text><text x="92" y="205" font-size="14" fill="currentColor">E</text><text x="198" y="205" font-size="14" fill="currentColor">F</text></svg></div>

1. Quelle est la mesure de chaque angle d'un triangle équilatéral ? Justifier.
2. Calculer la somme des six angles de sommet $O$. Expliquer pourquoi les six triangles s'assemblent sans laisser de trou.
3. Calculer le périmètre de l'hexagone $ABCDEF$.
4. Quelle est la mesure de l'angle $\\widehat{ABC}$ de l'hexagone ? Justifier.
5. Pourrait-on assembler de la même façon, autour d'un point, des triangles identiques dont un angle mesure $50^\\circ$, en utilisant toujours ce même angle au centre ? Justifier.`,
      solution: `**1.** Un triangle équilatéral a ses trois angles de même mesure, et leur somme vaut $180^\\circ$ : chaque angle mesure $180^\\circ \\div 3 = 60^\\circ$.

**2.** Il y a six angles de $60^\\circ$ autour de $O$ : $6 \\times 60^\\circ = 360^\\circ$. C'est exactement un tour complet : les six triangles font le tour du point $O$ sans se chevaucher et sans laisser de trou.

**3.** Le bord de l'hexagone est formé de six côtés de triangles, chacun de $3$ cm : périmètre $= 6 \\times 3 = 18$ cm.

**4.** En $B$, l'angle de l'hexagone est formé de deux angles de triangles équilatéraux ($\\widehat{ABO}$ et $\\widehat{OBC}$) : $\\widehat{ABC} = 60^\\circ + 60^\\circ = 120^\\circ$.

**5.** Il faudrait remplir exactement $360^\\circ$ avec des angles de $50^\\circ$. Or $7 \\times 50 = 350$ et $8 \\times 50 = 400$ : $360$ n'est pas un multiple de $50$. **Ce n'est pas possible** : il resterait un trou de $10^\\circ$ avec $7$ triangles, et avec $8$ triangles ils se chevaucheraient.`
    },
    {
      id: "6G4-ds-15",
      title: "Construire un triangle isocèle par ses angles",
      difficulty: 3,
      points: 5,
      statement: `On veut construire un triangle $ABC$ isocèle en $C$ tel que $AB = 7$ cm et $\\widehat{CAB} = 40^\\circ$.

1. Quelle est la mesure de l'angle $\\widehat{CBA}$ ? Justifier.
2. Décrire les étapes de la construction, puis la réaliser en vraie grandeur.
3. Calculer la mesure de l'angle $\\widehat{ACB}$, puis la vérifier au rapporteur.
4. Mesurer $CA$ et $CB$ sur la figure. Pourquoi ces deux longueurs doivent-elles être égales ?
5. On note $H$ le milieu de $[AB]$. Expliquer pourquoi le point $C$ est sur la médiatrice de $[AB]$. En déduire la mesure de l'angle $\\widehat{CHA}$, puis mesurer $CH$.`,
      solution: `**1.** Dans un triangle isocèle, les deux angles à la base ont la même mesure. Le triangle est isocèle en $C$, sa base est $[AB]$ : $\\widehat{CBA} = \\widehat{CAB} = 40^\\circ$.

**2.** On trace le segment $[AB]$ de $7$ cm. Au rapporteur, on construit en $A$ une demi-droite faisant un angle de $40^\\circ$ avec $[AB)$, puis en $B$ une demi-droite faisant un angle de $40^\\circ$ avec $[BA)$, du même côté de $(AB)$. Les deux demi-droites se coupent en $C$.

**3.** $\\widehat{ACB} = 180^\\circ - 40^\\circ - 40^\\circ = 100^\\circ$ (c'est un angle obtus). Au rapporteur, on accepte une mesure comprise entre $98^\\circ$ et $102^\\circ$.

**4.** On mesure $CA \\approx CB \\approx 4{,}6$ cm ; on accepte toute mesure comprise **entre $4{,}4$ cm et $4{,}7$ cm**, la même pour les deux côtés. Ces longueurs sont égales car le triangle est isocèle en $C$ : $CA = CB$.

**5.** $CA = CB$ : le point $C$ est à égale distance de $A$ et de $B$, donc il est sur la médiatrice de $[AB]$. Cette médiatrice passe par le milieu $H$ de $[AB]$ et elle est perpendiculaire à $(AB)$ : la droite $(CH)$ est la médiatrice, et $\\widehat{CHA} = 90^\\circ$.
On mesure $CH \\approx 2{,}9$ cm ; on accepte une mesure comprise **entre $2{,}8$ cm et $3{,}1$ cm**.`
    },
    {
      id: "6G4-ds-16",
      title: "Le triangle d'or",
      difficulty: 4,
      points: 6,
      statement: `$ABC$ est un triangle isocèle en $A$ tel que $\\widehat{BAC} = 36^\\circ$. La bissectrice de l'angle $\\widehat{ABC}$ coupe le côté $[AC]$ en $D$. La figure n'est pas en vraie grandeur.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:260px;"><svg class="geo-svg-figure" viewBox="0 0 300 240" width="300" height="240" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="150,76.5 105,215 195,215" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="2"/><line x1="105" y1="215" x2="177.8" y2="162.1" stroke="#dc2626" stroke-width="2"/><circle cx="177.8" cy="162.1" r="3" fill="currentColor"/><text x="145" y="68" font-size="15" fill="currentColor">A</text><text x="88" y="230" font-size="15" fill="currentColor">B</text><text x="200" y="230" font-size="15" fill="currentColor">C</text><text x="185" y="160" font-size="15" fill="currentColor">D</text><text x="141" y="110" font-size="12" fill="currentColor">36°</text></svg></div>

On admet la propriété suivante : **si un triangle a deux angles de même mesure, alors il est isocèle** (les deux côtés égaux partent du sommet du troisième angle).

1. Calculer les mesures des angles $\\widehat{ABC}$ et $\\widehat{ACB}$.
2. Calculer $\\widehat{ABD}$ et $\\widehat{DBC}$.
3. Dans le triangle $ABD$, calculer $\\widehat{ADB}$. Quelle est la nature du triangle $ABD$ ? Préciser son sommet principal.
4. Dans le triangle $BDC$, calculer $\\widehat{BDC}$. Quelle est la nature du triangle $BDC$ ? Préciser son sommet principal.
5. Vérifier que $\\widehat{ADB} + \\widehat{BDC} = 180^\\circ$. Pourquoi fallait-il s'y attendre ?
6. On donne $BC = 4$ cm. Sans mesurer, donner les longueurs $BD$ et $AD$.`,
      solution: `**1.** Le triangle est isocèle en $A$ : ses angles à la base sont égaux, $\\widehat{ABC} = \\widehat{ACB}$. Ils font ensemble $180^\\circ - 36^\\circ = 144^\\circ$, donc
$$\\widehat{ABC} = \\widehat{ACB} = 144^\\circ \\div 2 = 72^\\circ.$$

**2.** $[BD)$ est la bissectrice de $\\widehat{ABC}$ : $\\widehat{ABD} = \\widehat{DBC} = 72^\\circ \\div 2 = 36^\\circ$.

**3.** Dans $ABD$ : $\\widehat{DAB} = 36^\\circ$ et $\\widehat{ABD} = 36^\\circ$, donc
$$\\widehat{ADB} = 180^\\circ - 36^\\circ - 36^\\circ = 108^\\circ.$$
Les angles en $A$ et en $B$ sont égaux : d'après la propriété admise, **$ABD$ est isocèle en $D$**, c'est-à-dire $DA = DB$.

**4.** Dans $BDC$ : $\\widehat{DBC} = 36^\\circ$ et $\\widehat{DCB} = 72^\\circ$, donc
$$\\widehat{BDC} = 180^\\circ - 36^\\circ - 72^\\circ = 72^\\circ.$$
Les angles en $D$ et en $C$ sont égaux : **$BDC$ est isocèle en $B$**, c'est-à-dire $BD = BC$.

**5.** $108^\\circ + 72^\\circ = 180^\\circ$. C'est normal : $D$ est sur le segment $[AC]$, donc $A$, $D$ et $C$ sont alignés et $\\widehat{ADC}$ est un angle plat, formé des deux angles adjacents $\\widehat{ADB}$ et $\\widehat{BDC}$.

**6.** Le triangle $BDC$ est isocèle en $B$ : $BD = BC = 4$ cm. Le triangle $ABD$ est isocèle en $D$ : $AD = BD = 4$ cm.`
    }
  ]
});
Object.assign(window.MATHS_DS_BANK, {
  "6G5": [
    {
      id: "6G5-ds-01",
      title: "Décrire un pavé droit",
      difficulty: 1,
      points: 4,
      statement: `Une boîte à chaussures est un pavé droit de longueur $30$ cm, de largeur $20$ cm et de hauteur $12$ cm.

1. Combien ce pavé droit a-t-il de faces, d'arêtes et de sommets ?
2. Quelle est la forme de chaque face ? Donner les dimensions des différentes faces et dire combien il y a de faces de chaque sorte.
3. On veut coller un ruban adhésif sur toutes les arêtes de la boîte. Quelle longueur de ruban faut-il ?`,
      solution: `**1.** Un pavé droit a **$6$ faces**, **$12$ arêtes** et **$8$ sommets**.

**2.** Toutes les faces sont des **rectangles**, égaux deux à deux (faces opposées) :
- $2$ faces de $30$ cm sur $20$ cm (le fond et le couvercle) ;
- $2$ faces de $30$ cm sur $12$ cm (devant et derrière) ;
- $2$ faces de $20$ cm sur $12$ cm (les côtés).

**3.** Les $12$ arêtes se répartissent en $4$ arêtes de $30$ cm, $4$ de $20$ cm et $4$ de $12$ cm :
$4 \\times 30 + 4 \\times 20 + 4 \\times 12 = 120 + 80 + 48 = 248$ cm.
Il faut **$248$ cm** de ruban, soit $2{,}48$ m.`
    },
    {
      id: "6G5-ds-02",
      title: "Compter les cubes d'un assemblage",
      difficulty: 1,
      points: 4,
      statement: `Tom a empilé des cubes identiques sur un plateau carré de $3$ cases sur $3$. Le tableau ci-dessous représente la **vue de dessus** : chaque case indique le nombre de cubes empilés à cet endroit.

| | gauche | milieu | droite |
|:---|:---:|:---:|:---:|
| rangée du fond | $3$ | $2$ | $1$ |
| rangée du milieu | $2$ | $1$ | $0$ |
| rangée de devant | $1$ | $0$ | $0$ |

1. Combien de cubes Tom a-t-il utilisés ?
2. Quelle est la hauteur de la plus haute pile (en nombre de cubes) ? Où se trouve-t-elle ?
3. Tom veut compléter son assemblage pour obtenir un grand cube de $3$ cubes de côté. Combien de cubes doit-il ajouter ?`,
      solution: `**1.** On additionne les nombres de toutes les cases :
$(3 + 2 + 1) + (2 + 1 + 0) + (1 + 0 + 0) = 6 + 3 + 1 = 10$. Tom a utilisé **$10$ cubes**.

**2.** La plus haute pile compte **$3$ cubes** : elle est dans le coin au fond à gauche.

**3.** Un grand cube de $3$ cubes de côté contient $3 \\times 3 \\times 3 = 27$ petits cubes (trois étages de $9$ cubes).
$27 - 10 = 17$ : Tom doit ajouter **$17$ cubes**.`
    },
    {
      id: "6G5-ds-03",
      title: "Patrons d'un cube",
      difficulty: 2,
      points: 5,
      statement: `Maëlle veut fabriquer un dé en carton : un cube d'arête $4$ cm.

1. Combien de faces son patron doit-il comporter ? Quelle est la forme et la taille de chaque face ?
2. Pour chacune des figures suivantes, formées de carrés de $4$ cm de côté, dire si c'est un patron de cube. Justifier.
a) Quatre carrés alignés horizontalement, avec un carré collé au-dessus du deuxième carré et un carré collé en dessous du deuxième carré.
b) Six carrés alignés.
c) Quatre carrés alignés horizontalement, avec un carré collé au-dessus du premier carré et un autre collé au-dessus du deuxième carré.
3. Quelle est la longueur totale des arêtes du dé ?`,
      solution: `**1.** Un cube a **$6$ faces** : le patron comporte $6$ **carrés** de $4$ cm de côté.

**2.**
a) **Oui.** Les quatre carrés alignés se replient pour former les quatre faces latérales (le $4^\\text{e}$ vient se coller au $1^\\text{er}$) ; les carrés au-dessus et en dessous du deuxième deviennent le dessus et le dessous. C'est le patron « en croix ».
b) **Non.** En repliant, les quatre premiers carrés font le tour du cube, puis les $5^\\text{e}$ et $6^\\text{e}$ se superposent aux $1^\\text{er}$ et $2^\\text{e}$ : il manque le dessus et le dessous.
c) **Non.** Les deux carrés collés au-dessus du premier et du deuxième carré se rabattent tous les deux sur la face du dessus : ils se superposent, et il manque la face du dessous.

**3.** Un cube a $12$ arêtes de même longueur : $12 \\times 4 = 48$ cm.`
    },
    {
      id: "6G5-ds-04",
      title: "Vues d'un assemblage de cubes",
      difficulty: 2,
      points: 5,
      statement: `Voici la **vue de dessus** d'un assemblage de cubes posé sur une table ; chaque case indique le nombre de cubes empilés.

| | gauche | milieu | droite |
|:---|:---:|:---:|:---:|
| rangée du fond | $1$ | $2$ | $3$ |
| rangée de devant | $2$ | $1$ | $1$ |

1. Combien de cubes compte cet assemblage ?
2. Dessiner (ou décrire colonne par colonne) la **vue de face**, c'est-à-dire ce que voit une personne placée devant l'assemblage.
3. Dessiner (ou décrire) la **vue de droite**.
4. Combien de cubes sont cachés quand on regarde l'assemblage de face, c'est-à-dire derrière un autre cube ?`,
      solution: `**1.** $1 + 2 + 3 + 2 + 1 + 1 = 10$ cubes.

**2.** De face, on voit pour chaque colonne la pile la plus haute (fond ou devant) :
- colonne de gauche : le maximum de $1$ et $2$, soit $2$ cubes ;
- colonne du milieu : le maximum de $2$ et $1$, soit $2$ cubes ;
- colonne de droite : le maximum de $3$ et $1$, soit $3$ cubes.
La vue de face est formée de trois colonnes de **$2$, $2$ et $3$ carrés** (de gauche à droite).

**3.** De droite, on voit deux colonnes : la rangée de devant (à gauche pour l'observateur) et la rangée du fond (à droite pour l'observateur).
- rangée de devant : le maximum de $2$, $1$ et $1$, soit $2$ cubes ;
- rangée du fond : le maximum de $1$, $2$ et $3$, soit $3$ cubes.
La vue de droite est formée de deux colonnes de **$2$ et $3$ carrés**.

**4.** La vue de face montre $2 + 2 + 3 = 7$ carrés. L'assemblage compte $10$ cubes, donc $10 - 7 = 3$ cubes ne sont pas visibles de face.`
    },
    {
      id: "6G5-ds-05",
      title: "L'aquarium sans couvercle",
      difficulty: 3,
      points: 5,
      statement: `Un aquarium a la forme d'un pavé droit **sans couvercle** de longueur $30$ cm, de largeur $20$ cm et de hauteur $10$ cm. Ses parois et son fond sont des plaques de verre.

1. Combien de plaques de verre faut-il ? Donner les dimensions de chacune.
2. Calculer l'aire totale de verre nécessaire, en $\\text{cm}^2$.
3. On colle un joint d'étanchéité le long de toutes les arêtes de l'aquarium (y compris le bord supérieur). Quelle longueur de joint faut-il ?
4. Combien l'aquarium a-t-il de sommets ?`,
      solution: `**1.** Un pavé droit a $6$ faces ; sans couvercle, il en reste **$5$** :
- le fond : $30$ cm sur $20$ cm ;
- $2$ grandes parois : $30$ cm sur $10$ cm ;
- $2$ petites parois : $20$ cm sur $10$ cm.

**2.** Aire du fond : $30 \\times 20 = 600$ $\\text{cm}^2$.
Grandes parois : $2 \\times 30 \\times 10 = 600$ $\\text{cm}^2$.
Petites parois : $2 \\times 20 \\times 10 = 400$ $\\text{cm}^2$.
Total : $600 + 600 + 400 = 1\\,600$ $\\text{cm}^2$ de verre.

**3.** Même sans couvercle, l'aquarium a les $12$ arêtes d'un pavé droit : $4$ de $30$ cm, $4$ de $20$ cm et $4$ de $10$ cm.
$4 \\times 30 + 4 \\times 20 + 4 \\times 10 = 120 + 80 + 40 = 240$ cm de joint, soit $2{,}4$ m.

**4.** Comme tout pavé droit, il a **$8$ sommets**.`
    },
    {
      id: "6G5-ds-06",
      title: "Le grand cube peint",
      difficulty: 3,
      points: 5,
      statement: `On assemble $27$ petits cubes blancs identiques pour former un grand cube de $3$ petits cubes de côté. On peint en rouge toutes les faces extérieures du grand cube, puis on le démonte.

1. Combien de petits cubes ont exactement $3$ faces peintes ? Où étaient-ils placés ?
2. Combien de petits cubes ont exactement $2$ faces peintes ? Justifier.
3. Combien de petits cubes ont exactement $1$ face peinte ? Combien n'ont aucune face peinte ?
4. Vérifier que le total est bien égal à $27$.`,
      solution: `**1.** Les petits cubes ayant $3$ faces peintes sont ceux placés aux **sommets** du grand cube. Un cube a $8$ sommets : il y en a **$8$**.

**2.** Les petits cubes ayant $2$ faces peintes sont placés **au milieu d'une arête** du grand cube (ni coin, ni centre de face). Chaque arête compte $3$ petits cubes dont $2$ coins, donc $1$ seul au milieu. Le cube ayant $12$ arêtes, il y en a $12 \\times 1 = 12$.

**3.** Les petits cubes ayant $1$ face peinte sont au **centre de chaque face** : $1$ par face, et $6$ faces, donc **$6$**.
Aucune face peinte : seul le petit cube **au centre** du grand cube, entièrement caché : **$1$**.

**4.** $8 + 12 + 6 + 1 = 27$. On retrouve bien les $27$ petits cubes.`
    },
    {
      id: "6G5-ds-07",
      title: "L'escalier en cubes",
      difficulty: 4,
      points: 6,
      statement: `Pour une maquette, Sacha construit un escalier avec des cubes de $1$ cm d'arête. Vu de face, l'escalier est formé de colonnes de $1$, $2$, $3$ et $4$ cubes de haut, de gauche à droite. Chaque marche a une profondeur de $3$ cubes (l'escalier compte donc $3$ rangées identiques, de l'avant vers l'arrière).

1. Dessiner la vue de face de l'escalier sur un quadrillage.
2. Combien de cubes Sacha a-t-il utilisés ?
3. Il veut ajouter une cinquième marche, plus haute d'un cube que la quatrième, en gardant la même profondeur. Combien de cubes doit-il ajouter ?
4. Combien de cubes faudrait-il pour un escalier de $10$ marches construit de la même façon ? Expliquer la méthode.`,
      solution: `**1.** La vue de face est formée de $4$ colonnes de carrés accolées : $1$, $2$, $3$ puis $4$ carrés de haut, alignées sur le bas (forme d'escalier).

**2.** Une rangée (de face) contient $1 + 2 + 3 + 4 = 10$ cubes. Il y a $3$ rangées identiques : $3 \\times 10 = 30$ cubes.

**3.** La cinquième marche a $5$ cubes de haut et $3$ cubes de profondeur : $5 \\times 3 = 15$ cubes à ajouter.

**4.** Une rangée contient $1 + 2 + 3 + \\ldots + 10$ cubes. On regroupe : $(1 + 10) + (2 + 9) + (3 + 8) + (4 + 7) + (5 + 6) = 5 \\times 11 = 55$.
Avec $3$ rangées : $3 \\times 55 = 165$. Il faudrait **$165$ cubes**.`
    },
    {
      id: "6G5-ds-08",
      title: "Le patron d'une boîte",
      difficulty: 4,
      points: 5,
      statement: `On veut fabriquer une boîte en forme de pavé droit de dimensions $6$ cm, $4$ cm et $2$ cm. On dessine son patron ainsi : une colonne de quatre rectangles collés les uns sous les autres — le fond ($6$ cm sur $4$ cm), une face de $6$ cm sur $2$ cm, le dessus ($6$ cm sur $4$ cm), puis une face de $6$ cm sur $2$ cm — avec, collés à gauche et à droite du fond, deux rectangles de $2$ cm sur $4$ cm.

1. Vérifier que ce patron comporte bien le bon nombre de faces et que chaque face apparaît le bon nombre de fois.
2. Calculer la hauteur totale du patron (colonne de quatre rectangles) et sa largeur totale (à l'endroit du fond).
3. On découpe ce patron dans le plus petit rectangle de papier possible. Quelles sont les dimensions de ce rectangle et son aire ?
4. Calculer l'aire du patron, puis l'aire du papier perdu.`,
      solution: `**1.** Le patron comporte $4 + 2 = 6$ rectangles, comme les $6$ faces du pavé : $2$ faces de $6 \\times 4$, $2$ faces de $6 \\times 2$ et $2$ faces de $2 \\times 4$. Chaque sorte de face apparaît bien $2$ fois.

**2.** Hauteur de la colonne : $4 + 2 + 4 + 2 = 12$ cm. Largeur au niveau du fond : $2 + 6 + 2 = 10$ cm.

**3.** Le plus petit rectangle contenant le patron mesure **$10$ cm sur $12$ cm** ; son aire vaut $10 \\times 12 = 120$ $\\text{cm}^2$.

**4.** Aire du patron $= 2 \\times (6 \\times 4) + 2 \\times (6 \\times 2) + 2 \\times (2 \\times 4) = 48 + 24 + 16 = 88$ $\\text{cm}^2$.
Papier perdu : $120 - 88 = 32$ $\\text{cm}^2$.`
    },
    {
      id: "6G5-ds-09",
      title: "Des solides en fil de fer",
      difficulty: 1,
      points: 4,
      statement: `Pour une décoration, Jade fabrique des solides « squelettes » : seules les arêtes sont réalisées, en fil de fer.

1. Combien un cube a-t-il de faces, d'arêtes et de sommets ?
2. Jade fabrique un cube d'arête $5$ cm. Quelle longueur de fil utilise-t-elle ?
3. Elle fabrique ensuite un pavé droit de longueur $6$ cm, de largeur $4$ cm et de hauteur $3$ cm.
   a) Combien d'arêtes mesurent $6$ cm ? $4$ cm ? $3$ cm ?
   b) Quelle longueur de fil faut-il pour ce pavé ?
4. Il lui reste $1$ m de fil. Peut-elle fabriquer un cube d'arête $8$ cm ? Justifier.`,
      solution: `**1.** Un cube a **$6$ faces** (des carrés), **$12$ arêtes** et **$8$ sommets**.

**2.** Les $12$ arêtes mesurent toutes $5$ cm : $12 \\times 5 = 60$ cm de fil.

**3.** a) Dans un pavé droit, les arêtes vont par groupes de $4$ arêtes de même longueur : $4$ arêtes de $6$ cm, $4$ arêtes de $4$ cm et $4$ arêtes de $3$ cm.

b) $4 \\times 6 + 4 \\times 4 + 4 \\times 3 = 24 + 16 + 12 = 52$ cm de fil.

**4.** Il faut $12 \\times 8 = 96$ cm de fil, et $1$ m $= 100$ cm. Comme $96 < 100$, **oui**, elle peut le fabriquer (il lui restera $4$ cm de fil).`
    },
    {
      id: "6G5-ds-10",
      title: "Ranger 24 cubes en pavé",
      difficulty: 2,
      points: 5,
      statement: `Arthur possède $24$ cubes identiques de $1$ cm d'arête. Il veut les assembler, **tous**, pour former un pavé droit plein.

1. Il forme une première couche de $3$ cubes sur $4$ cubes. Combien de cubes contient cette couche ? Combien de couches peut-il empiler ? Donner les dimensions du pavé obtenu.
2. Peut-il former un pavé de $2$ cubes de large, $2$ cubes de long et $5$ cubes de haut ? Justifier.
3. Trouver toutes les façons de former un pavé droit avec les $24$ cubes (on donne les trois dimensions en cubes ; on ne compte pas deux fois le même pavé posé différemment).
4. Arthur voudrait plutôt construire un cube plein. Quel est le plus petit cube plein qu'il ne peut pas construire avec ses $24$ cubes ? Combien de cubes lui manque-t-il pour le construire ?`,
      solution: `**1.** La couche contient $3 \\times 4 = 12$ cubes. Avec $24$ cubes : $24 \\div 12 = 2$ couches. Le pavé mesure $3$ cm, $4$ cm et $2$ cm.

**2.** Un tel pavé contiendrait $2 \\times 2 \\times 5 = 20$ cubes, et non $24$ : **non**, il resterait $4$ cubes inutilisés.

**3.** On cherche trois nombres entiers dont le produit vaut $24$ (rangés du plus petit au plus grand) :
- $1 \\times 1 \\times 24$ ;
- $1 \\times 2 \\times 12$ ;
- $1 \\times 3 \\times 8$ ;
- $1 \\times 4 \\times 6$ ;
- $2 \\times 2 \\times 6$ ;
- $2 \\times 3 \\times 4$.

Il y a **$6$ pavés** possibles.

**4.** Un cube de $2$ cubes d'arête utilise $2 \\times 2 \\times 2 = 8$ cubes : il peut le construire. Un cube de $3$ cubes d'arête utilise $3 \\times 3 \\times 3 = 27$ cubes : c'est plus que $24$. Le plus petit cube impossible est donc celui de $3$ cm d'arête ; il lui manque $27 - 24 = 3$ cubes.`
    },
    {
      id: "6G5-ds-11",
      title: "Le patron d'un dé",
      difficulty: 3,
      points: 5,
      statement: `Sur un dé ordinaire, la somme des points de deux faces opposées vaut toujours $7$.

On utilise un patron de cube en forme de croix : une colonne de quatre carrés notés, de haut en bas, $A$, $B$, $C$ et $D$ ; un carré $E$ collé à gauche de $B$ et un carré $F$ collé à droite de $B$.

1. En imaginant le pliage, indiquer quelle face est opposée à $A$, à $B$ et à $E$. Expliquer.
2. Maëlle écrit sur son patron : $A = 1$, $B = 2$, $C = 6$, $D = 5$, $E = 3$, $F = 4$. Obtient-elle un dé ordinaire ? Justifier.
3. Léo écrit : $A = 1$, $B = 2$, $C = 3$, $D = 4$, $E = 5$, $F = 6$. Obtient-il un dé ordinaire ? Justifier.
4. Sur un nouveau patron du même modèle, on a déjà écrit $A = 4$, $B = 1$ et $E = 2$. Compléter les faces $C$, $D$ et $F$ pour obtenir un dé ordinaire.`,
      solution: `**1.** Les quatre carrés de la colonne se replient en faisant le tour du cube : $A$ et $C$ sont séparés par $B$, ils se retrouvent face à face ; de même $B$ et $D$ sont opposées. Les carrés $E$ et $F$, de part et d'autre de $B$, viennent fermer les deux côtés de ce « tour » : ils sont opposés.
Faces opposées : **$A$ et $C$**, **$B$ et $D$**, **$E$ et $F$**.

**2.** Sommes des faces opposées : $A + C = 1 + 6 = 7$, $B + D = 2 + 5 = 7$, $E + F = 3 + 4 = 7$. Toutes valent $7$ : **oui**, c'est un dé ordinaire.

**3.** $A + C = 1 + 3 = 4 \\ne 7$ : les faces $1$ et $3$ seraient opposées. **Non**, ce n'est pas un dé ordinaire.

**4.** $C$ est opposée à $A$ : $C = 7 - 4 = 3$.
$D$ est opposée à $B$ : $D = 7 - 1 = 6$.
$F$ est opposée à $E$ : $F = 7 - 2 = 5$.
On vérifie que les six nombres $4$, $1$, $3$, $6$, $2$, $5$ sont bien différents et vont de $1$ à $6$.`
    },
    {
      id: "6G5-ds-12",
      title: "Des vues qui ne disent pas tout",
      difficulty: 4,
      points: 6,
      statement: `Un assemblage de cubes identiques est posé sur un plateau de $2$ cases sur $2$ : une rangée du fond et une rangée de devant, une colonne de gauche et une colonne de droite. Sur chaque case, les cubes sont empilés en colonne, sans trou.

On connaît seulement :
- la **vue de dessus** : les $4$ cases sont occupées ;
- la **vue de face** : la colonne de gauche paraît haute de $2$ cubes et la colonne de droite de $3$ cubes ;
- la **vue de côté** (regard depuis la droite) : la rangée du fond paraît haute de $2$ cubes et la rangée de devant de $3$ cubes.

(Sur une vue de face, chaque colonne apparaît avec la hauteur de sa pile la plus haute ; de même pour la vue de côté et les rangées.)

1. Pourquoi y a-t-il au moins un cube sur chaque case ?
2. Sur quelle case se trouve une pile de $3$ cubes ? Justifier. Peut-il y en avoir une autre ?
3. Quel est le nombre **maximal** de cubes de cet assemblage ? Donner le nombre de cubes de chaque case.
4. Quel est le nombre **minimal** de cubes ? Donner une répartition possible.
5. Donner une répartition qui respecte les trois vues et utilise exactement $8$ cubes.`,
      solution: `**1.** Sur la vue de dessus, les $4$ cases sont occupées : chaque case porte au moins un cube.

**2.** La vue de face montre une pile de $3$ cubes uniquement dans la colonne de droite ; la vue de côté en montre une uniquement dans la rangée de devant. Une pile de $3$ est donc dans la colonne de droite **et** dans la rangée de devant : c'est la case **devant-droite**. Aucune autre case ne peut avoir $3$ cubes (elle serait dans la colonne de gauche ou dans la rangée du fond, qui ne dépassent pas $2$).

**3.** Chaque pile ne peut pas dépasser la hauteur de sa colonne (vue de face) ni celle de sa rangée (vue de côté) :
- fond-gauche : au plus $2$ ; fond-droite : au plus $2$ (rangée du fond) ;
- devant-gauche : au plus $2$ (colonne de gauche) ; devant-droite : $3$.

En mettant le maximum partout, les vues sont bien respectées : $2 + 2 + 2 + 3 = 9$ cubes au **maximum**.

**4.** Il faut $3$ cubes sur la case devant-droite. La colonne de gauche doit paraître haute de $2$ et la rangée du fond aussi : en mettant $2$ cubes sur la case fond-gauche, on satisfait les deux à la fois. Les deux autres cases ont au moins $1$ cube.
Minimum : fond-gauche $2$, fond-droite $1$, devant-gauche $1$, devant-droite $3$, soit $2 + 1 + 1 + 3 = 7$ cubes.
On ne peut pas faire moins : il faut $3$ cubes devant-droite, au moins $1$ cube sur chacune des trois autres cases, et une pile de $2$ dans la colonne de gauche, ce qui ajoute au moins $1$ cube.

**5.** Par exemple : fond-gauche $2$, fond-droite $2$, devant-gauche $1$, devant-droite $3$ ; total $2 + 2 + 1 + 3 = 8$ cubes. Vue de face : la plus haute pile de gauche a $2$ cubes et celle de droite $3$ cubes ; vue de côté : la plus haute pile du fond a $2$ cubes et celle de devant $3$ cubes. Les trois vues sont respectées.`
    },
    {
      id: "6G5-ds-13",
      title: "Reconnaître des solides de la vie courante",
      difficulty: 1,
      points: 4,
      statement: `Voici des objets de la vie courante :
- un dé à jouer ;
- une brique de lait ;
- une boîte de conserve ;
- un ballon de football ;
- un cornet de glace (sans la glace) ;
- une boîte de chocolats dont les deux bouts sont des triangles identiques et les trois autres faces des rectangles.

1. Donner le nom du solide que représente chaque objet.
2. Parmi ces solides, lesquels n'ont que des faces planes ?
3. Recopier et compléter le tableau.

| Solide | Nombre de faces | Nombre d'arêtes | Nombre de sommets |
|:---:|:---:|:---:|:---:|
| Cube | … | … | … |
| Pavé droit | … | … | … |
| Boîte de chocolats | … | … | … |

4. Pour chaque solide du tableau, calculer « faces $+$ sommets $-$ arêtes ». Que remarque-t-on ?`,
      solution: `**1.**
- dé à jouer : **cube** ;
- brique de lait : **pavé droit** ;
- boîte de conserve : **cylindre** ;
- ballon de football : **boule** (sa surface est une sphère) ;
- cornet de glace : **cône** ;
- boîte de chocolats : **prisme droit** à base triangulaire.

**2.** Le cube, le pavé droit et le prisme n'ont que des faces planes. Le cylindre, le cône et la boule ont une surface courbe.

**3.**

| Solide | Nombre de faces | Nombre d'arêtes | Nombre de sommets |
|:---:|:---:|:---:|:---:|
| Cube | $6$ | $12$ | $8$ |
| Pavé droit | $6$ | $12$ | $8$ |
| Boîte de chocolats | $5$ | $9$ | $6$ |

(Pour le prisme : $2$ triangles et $3$ rectangles font $5$ faces ; chaque triangle a $3$ côtés, ce qui fait $6$ arêtes, plus $3$ arêtes qui relient les deux triangles, soit $9$ ; $3$ sommets par triangle, soit $6$.)

**4.** Cube et pavé : $6 + 8 - 12 = 2$. Prisme : $5 + 6 - 9 = 2$. On trouve **toujours $2$**.`
    },
    {
      id: "6G5-ds-14",
      title: "Lire le patron d'un pavé droit",
      difficulty: 2,
      points: 5,
      statement: `Voici le patron d'un pavé droit (il n'est pas en vraie grandeur). Les faces sont numérotées de $1$ à $6$. On sait que la face $1$ mesure $5$ cm sur $3$ cm et que la hauteur totale du patron, de haut en bas, est $10$ cm.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:260px;"><svg class="geo-svg-figure" viewBox="0 0 260 240" width="260" height="240" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="80" y="20" width="100" height="60" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="1.8"/><rect x="80" y="80" width="100" height="40" fill="rgba(59,130,246,0.04)" stroke="currentColor" stroke-width="1.8"/><rect x="80" y="120" width="100" height="60" fill="rgba(59,130,246,0.10)" stroke="currentColor" stroke-width="1.8"/><rect x="80" y="180" width="100" height="40" fill="rgba(59,130,246,0.04)" stroke="currentColor" stroke-width="1.8"/><rect x="40" y="20" width="40" height="60" fill="rgba(220,38,38,0.08)" stroke="currentColor" stroke-width="1.8"/><rect x="180" y="20" width="40" height="60" fill="rgba(220,38,38,0.08)" stroke="currentColor" stroke-width="1.8"/><text x="125" y="56" font-size="15" fill="currentColor">1</text><text x="125" y="106" font-size="15" fill="currentColor">2</text><text x="125" y="156" font-size="15" fill="currentColor">3</text><text x="125" y="206" font-size="15" fill="currentColor">4</text><text x="55" y="56" font-size="15" fill="currentColor">5</text><text x="195" y="56" font-size="15" fill="currentColor">6</text><text x="112" y="14" font-size="12" fill="currentColor">5 cm</text><text x="2" y="55" font-size="12" fill="currentColor">3 cm</text><text x="56" y="96" font-size="14" font-style="italic" fill="#dc2626">a</text><text x="188" y="205" font-size="14" font-style="italic" fill="#dc2626">b</text></svg></div>

1. Combien de faces a ce pavé droit ? Quelle forme ont-elles ?
2. Quand on plie le patron, quelle face est opposée à la face $1$ ? À la face $2$ ? À la face $5$ ?
3. Les faces $1$ et $3$ sont identiques, ainsi que les faces $2$ et $4$. En utilisant la hauteur totale du patron, calculer la longueur $b$.
4. La longueur $a$ est la hauteur du pavé, comme $b$. Donner $a$, puis les trois dimensions du pavé droit.
5. Calculer la largeur totale du patron, puis la longueur totale des arêtes du pavé droit.`,
      solution: `**1.** Un pavé droit a **$6$ faces**, qui sont toutes des **rectangles**.

**2.** En pliant les faces $2$, $3$, $4$ autour de la face $1$ : la face $3$ se retrouve au-dessus de la face $1$, donc **la face $3$ est opposée à la face $1$** ; **la face $4$ est opposée à la face $2$** ; les faces $5$ et $6$ se relèvent de chaque côté, **la face $6$ est opposée à la face $5$**.

**3.** De haut en bas, on traverse les faces $1$, $2$, $3$, $4$ : $3 + b + 3 + b = 10$, donc $b + b = 10 - 6 = 4$ et **$b = 2$ cm**.

**4.** $a = b = 2$ cm. Les dimensions du pavé sont **$5$ cm, $3$ cm et $2$ cm**.

**5.** Largeur totale du patron : $a + 5 + a = 2 + 5 + 2 = 9$ cm.
Un pavé droit a $12$ arêtes : $4$ de chaque longueur. Longueur totale : $4 \\times 5 + 4 \\times 3 + 4 \\times 2 = 20 + 12 + 8 = 40$ cm.`
    },
    {
      id: "6G5-ds-15",
      title: "La fourmi sur les arêtes du cube",
      difficulty: 3,
      points: 5,
      statement: `$ABCDEFGH$ est un cube d'arête $4$ cm, représenté en perspective (les arêtes cachées sont en pointillés). Une fourmi se déplace **uniquement le long des arêtes**.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:280px;"><svg class="geo-svg-figure" viewBox="0 0 280 225" width="280" height="225" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="60,200 180,200 180,80 60,80" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="2"/><polyline points="180,200 240,150 240,30 180,80" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="60,80 120,30 240,30" fill="none" stroke="currentColor" stroke-width="2"/><line x1="60" y1="200" x2="120" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="120" y1="150" x2="240" y2="150" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="120" y1="150" x2="120" y2="30" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/><text x="46" y="216" font-size="15" fill="currentColor">A</text><text x="182" y="218" font-size="15" fill="currentColor">B</text><text x="166" y="97" font-size="15" fill="currentColor">C</text><text x="44" y="80" font-size="15" fill="currentColor">D</text><text x="104" y="146" font-size="15" fill="currentColor">E</text><text x="246" y="158" font-size="15" fill="currentColor">F</text><text x="246" y="30" font-size="15" fill="currentColor">G</text><text x="110" y="22" font-size="15" fill="currentColor">H</text></svg></div>

1. Combien d'arêtes partent de chaque sommet du cube ? Nommer celles qui partent de $A$.
2. La fourmi part de $A$ et veut aller en $G$, le sommet opposé. Quel est le plus petit nombre d'arêtes qu'elle doit parcourir ? Donner un tel chemin et sa longueur.
3. Trouver tous les chemins les plus courts de $A$ à $G$. Combien y en a-t-il ?
4. La fourmi veut passer par les $8$ sommets, sans repasser deux fois par le même, puis revenir en $A$. Proposer un tel chemin et calculer sa longueur.
5. Sur un pavé droit de dimensions $5$ cm, $3$ cm et $2$ cm, quelle est la longueur du plus court chemin le long des arêtes entre deux sommets opposés ?`,
      solution: `**1.** De chaque sommet partent **$3$ arêtes**. De $A$ partent $[AB]$, $[AD]$ et $[AE]$.

**2.** Pour aller de $A$ à $G$, il faut avancer dans les trois directions du cube (largeur, hauteur, profondeur) : au moins **$3$ arêtes**. Par exemple $A \\to B \\to C \\to G$, de longueur $3 \\times 4 = 12$ cm.

**3.** On choisit la première arête ($3$ possibilités), puis la deuxième parmi les deux directions restantes ($2$ possibilités), la troisième est alors imposée : $3 \\times 2 = 6$ chemins.
$A\\,B\\,C\\,G$ ; $A\\,B\\,F\\,G$ ; $A\\,D\\,C\\,G$ ; $A\\,D\\,H\\,G$ ; $A\\,E\\,F\\,G$ ; $A\\,E\\,H\\,G$. Il y en a **$6$**.

**4.** Par exemple $A \\to B \\to C \\to D \\to H \\to G \\to F \\to E \\to A$ (chaque étape suit bien une arête). Il comporte $8$ arêtes : longueur $8 \\times 4 = 32$ cm. (D'autres chemins conviennent ; ils ont tous $8$ arêtes.)

**5.** Comme pour le cube, il faut parcourir une arête dans chacune des trois directions : une de $5$ cm, une de $3$ cm et une de $2$ cm. Le plus court chemin mesure $5 + 3 + 2 = 10$ cm.`
    },
    {
      id: "6G5-ds-16",
      title: "Peindre un escalier de cubes",
      difficulty: 4,
      points: 6,
      statement: `Avec des cubes de $1$ cm d'arête, Nora construit un escalier d'une seule rangée de profondeur, posé sur une table. Pour un escalier à $3$ marches, les colonnes ont, de gauche à droite, $3$, $2$ et $1$ cubes (vue de face ci-dessous). Elle peint toutes les faces visibles des cubes, sauf celles posées sur la table.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:220px;"><svg class="geo-svg-figure" viewBox="0 0 210 140" width="210" height="140" style="width:100%; height:auto; color:var(--text-main, #334155);" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="60" y="90" width="30" height="30" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><rect x="60" y="60" width="30" height="30" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><rect x="60" y="30" width="30" height="30" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><rect x="90" y="90" width="30" height="30" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><rect x="90" y="60" width="30" height="30" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><rect x="120" y="90" width="30" height="30" fill="rgba(59,130,246,0.15)" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="120" x2="190" y2="120" stroke="currentColor" stroke-width="2.5"/></svg></div>

1. Combien de cubes compte l'escalier à $3$ marches ?
2. Pour l'escalier à $3$ marches, compter les carrés peints : a) sur la face avant ; b) sur la face arrière ; c) sur le dessus (les « marches » vues de haut) ; d) sur le côté gauche ; e) sur les côtés tournés vers la droite.
   En déduire le nombre total de carrés peints.
3. Vérifier ce résultat autrement : chaque cube a $6$ faces ; enlever les faces posées sur la table et les faces collées à un autre cube.
4. Recopier et compléter le tableau pour un escalier construit de la même façon.

| Nombre de marches | $3$ | $4$ | $10$ |
|:---:|:---:|:---:|:---:|
| Nombre de cubes | | | |
| Carrés peints (avant $+$ arrière) | | | |
| Carrés peints (dessus $+$ gauche $+$ droite) | | | |
| Total de carrés peints | | | |`,
      solution: `**1.** $3 + 2 + 1 = 6$ cubes.

**2.** a) Face avant : on voit tous les cubes, soit $6$ carrés.
b) Face arrière : de même, $6$ carrés.
c) Dessus : le haut de chaque colonne, soit $3$ carrés.
d) Côté gauche : la colonne de gauche, haute de $3$ cubes, soit $3$ carrés.
e) Vers la droite : chaque colonne dépasse la suivante d'un cube, et la dernière colonne a $1$ cube : $1 + 1 + 1 = 3$ carrés.
Total : $6 + 6 + 3 + 3 + 3 = 21$ carrés peints.

**3.** $6$ cubes ont $6 \\times 6 = 36$ faces.
- Faces sur la table : $3$ (une par colonne).
- Collages verticaux (un cube sur un autre) : $2$ dans la première colonne, $1$ dans la deuxième, soit $3$ collages, donc $6$ faces cachées.
- Collages horizontaux (colonnes voisines) : $2$ entre la première et la deuxième colonne, $1$ entre la deuxième et la troisième, soit $3$ collages, donc $6$ faces cachées.
$36 - 3 - 6 - 6 = 21$. On retrouve bien **$21$ carrés peints**.

**4.** Avec $n$ marches, l'avant et l'arrière montrent chacun tous les cubes, et le dessus, la gauche et la droite montrent chacun autant de carrés qu'il y a de marches.

| Nombre de marches | $3$ | $4$ | $10$ |
|:---:|:---:|:---:|:---:|
| Nombre de cubes | $6$ | $10$ | $55$ |
| Carrés peints (avant $+$ arrière) | $12$ | $20$ | $110$ |
| Carrés peints (dessus $+$ gauche $+$ droite) | $9$ | $12$ | $30$ |
| Total de carrés peints | $21$ | $32$ | $140$ |

Pour $10$ marches : $10 + 9 + \\ldots + 1 = 55$ cubes ; avant et arrière : $2 \\times 55 = 110$ ; dessus, gauche et droite : $3 \\times 10 = 30$ ; total $110 + 30 = 140$ carrés peints.`
    }
  ],
  "6D2": [
    {
      id: "6D2-ds-01",
      title: "Le vocabulaire du hasard avec un dé",
      difficulty: 1,
      points: 4,
      statement: `On lance un dé équilibré à six faces numérotées de $1$ à $6$.

1. Pour chacun des événements suivants, dire s'il est **impossible**, **certain**, ou **ni l'un ni l'autre** :
a) « obtenir $7$ » ;
b) « obtenir un nombre inférieur ou égal à $6$ » ;
c) « obtenir un nombre pair ».
2. Donner la probabilité de chacun de ces trois événements.
3. L'événement « obtenir $5$ » est-il plus probable, moins probable ou aussi probable que « obtenir $2$ » ? Justifier.`,
      solution: `**1.** a) Aucune face ne porte le $7$ : événement **impossible**.
b) Toutes les faces portent un nombre inférieur ou égal à $6$ : événement **certain**.
c) On peut l'obtenir ou non : il n'est **ni impossible ni certain**.

**2.** Le dé est équilibré : les $6$ issues ont la même chance de sortir.
a) Probabilité $0$ (impossible).
b) Probabilité $1$ (certain).
c) Les nombres pairs sont $2$, $4$ et $6$ : $3$ issues favorables sur $6$, donc la probabilité vaut $\\frac{3}{6} = \\frac{1}{2}$.

**3.** Chaque face a la même probabilité $\\frac{1}{6}$ de sortir : les deux événements sont **aussi probables** l'un que l'autre.`
    },
    {
      id: "6D2-ds-02",
      title: "Tirer une bille dans un sac",
      difficulty: 1,
      points: 4,
      statement: `Un sac opaque contient $3$ billes rouges, $5$ billes bleues et $2$ billes vertes, indiscernables au toucher. On tire une bille au hasard.

1. Combien y a-t-il de billes dans le sac ?
2. Calculer la probabilité de tirer une bille rouge, puis celle de tirer une bille bleue, puis celle de tirer une bille verte.
3. Quelle couleur a le plus de chances d'être tirée ?
4. Quelle est la probabilité de tirer une bille jaune ?`,
      solution: `**1.** $3 + 5 + 2 = 10$ billes.

**2.** Chaque bille a la même chance d'être tirée (situation d'équiprobabilité). La probabilité est le nombre de billes de la couleur divisé par le nombre total de billes :
- rouge : $\\frac{3}{10}$ ;
- bleue : $\\frac{5}{10} = \\frac{1}{2}$ ;
- verte : $\\frac{2}{10} = \\frac{1}{5}$.

**3.** La plus grande probabilité est $\\frac{5}{10}$ : c'est la couleur **bleue**, la plus nombreuse.

**4.** Il n'y a aucune bille jaune : l'événement est impossible, sa probabilité vaut **$0$**.`
    },
    {
      id: "6D2-ds-03",
      title: "La roue de la kermesse",
      difficulty: 2,
      points: 5,
      statement: `À la kermesse, une roue est partagée en $8$ secteurs de même taille : $1$ secteur « gros lot », $3$ secteurs « petit lot » et $4$ secteurs « perdu ». On fait tourner la roue ; elle s'arrête au hasard sur un secteur.

1. Quelle est la probabilité de gagner le gros lot ?
2. Quelle est la probabilité de gagner un petit lot ?
3. Quelle est la probabilité de gagner un lot (gros ou petit) ? Et celle de perdre ?
4. Hugo affirme : « Il y a trois sortes de cases, donc j'ai une chance sur trois de gagner le gros lot. » A-t-il raison ? Expliquer.`,
      solution: `**1.** Les $8$ secteurs ont la même taille, donc les mêmes chances. $1$ secteur sur $8$ : probabilité $\\frac{1}{8}$.

**2.** $3$ secteurs sur $8$ : probabilité $\\frac{3}{8}$.

**3.** Gagner un lot : $1 + 3 = 4$ secteurs sur $8$, probabilité $\\frac{4}{8} = \\frac{1}{2}$.
Perdre : $4$ secteurs sur $8$, probabilité $\\frac{4}{8} = \\frac{1}{2}$.

**4.** Hugo a **tort** : les trois sortes de cases n'ont pas la même taille sur la roue (le « gros lot » n'occupe qu'un secteur sur $8$). Il faut compter les secteurs, qui sont équiprobables : la probabilité est $\\frac{1}{8}$, et non $\\frac{1}{3}$.`
    },
    {
      id: "6D2-ds-04",
      title: "Quelle urne choisir ?",
      difficulty: 2,
      points: 5,
      statement: `Pour gagner, il faut tirer une boule rouge. On peut choisir l'une des deux urnes :
- urne A : $3$ boules rouges et $2$ boules noires ;
- urne B : $5$ boules rouges et $5$ boules noires.

1. Calculer la probabilité de tirer une boule rouge dans l'urne A, puis dans l'urne B. Donner les résultats sous forme décimale.
2. Lucie dit : « Je choisis l'urne B, car elle contient plus de boules rouges. » A-t-elle raison ? Expliquer.
3. On ajoute des boules rouges dans l'urne B. Combien faut-il en ajouter, au minimum, pour que l'urne B devienne plus intéressante que l'urne A ? Justifier par des calculs.`,
      solution: `**1.** Urne A : $5$ boules dont $3$ rouges, probabilité $\\frac{3}{5} = 0{,}6$.
Urne B : $10$ boules dont $5$ rouges, probabilité $\\frac{5}{10} = 0{,}5$.

**2.** Lucie a **tort**. Ce qui compte, ce n'est pas le nombre de boules rouges mais la proportion de boules rouges parmi toutes les boules. Comme $0{,}6 > 0{,}5$, l'urne A donne plus de chances de gagner.

**3.** On essaie en ajoutant des boules rouges une par une (l'urne garde $5$ boules noires) :
- $1$ rouge ajoutée : $\\frac{6}{11} \\approx 0{,}55$ ;
- $2$ rouges ajoutées : $\\frac{7}{12} \\approx 0{,}58$ ;
- $3$ rouges ajoutées : $\\frac{8}{13} \\approx 0{,}62$.
Or $0{,}58 < 0{,}6 < 0{,}62$. Il faut donc ajouter **au minimum $3$ boules rouges** pour que l'urne B devienne plus intéressante que l'urne A.`
    },
    {
      id: "6D2-ds-05",
      title: "Fréquences et probabilité",
      difficulty: 3,
      points: 5,
      statement: `Zoé a lancé $60$ fois un dé équilibré à six faces et a noté ses résultats :

| Face | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Nombre d'apparitions | $8$ | $12$ | $9$ | $11$ | $7$ | $13$ |

1. Vérifier que le total des apparitions vaut bien $60$.
2. Calculer la fréquence d'apparition de la face $6$. Donner le résultat sous forme de fraction puis arrondi au centième.
3. Quelle est la probabilité d'obtenir $6$ ? Comparer avec la fréquence obtenue. Le dé est-il truqué ? Expliquer.
4. Calculer la fréquence des nombres pairs, puis la comparer à la probabilité d'obtenir un nombre pair.`,
      solution: `**1.** $8 + 12 + 9 + 11 + 7 + 13 = 60$. Le total est correct.

**2.** Fréquence de la face $6$ : $\\frac{13}{60} \\approx 0{,}22$.

**3.** Le dé est équilibré : la probabilité d'obtenir $6$ est $\\frac{1}{6} \\approx 0{,}17$. La fréquence observée ($0{,}22$) est un peu différente : c'est normal, car le hasard fait varier les résultats sur un petit nombre de lancers. **On ne peut pas conclure que le dé est truqué** ; en faisant beaucoup plus de lancers, la fréquence devrait se rapprocher de $\\frac{1}{6}$.

**4.** Nombres pairs : $12 + 11 + 13 = 36$ apparitions, fréquence $\\frac{36}{60} = 0{,}6$.
Probabilité d'un nombre pair : $\\frac{3}{6} = 0{,}5$. La fréquence est proche de la probabilité, sans lui être égale.`
    },
    {
      id: "6D2-ds-06",
      title: "Tirer une carte",
      difficulty: 3,
      points: 5,
      statement: `Un jeu de $32$ cartes comporte $4$ couleurs (cœur, carreau, trèfle, pique). Dans chaque couleur, il y a $8$ cartes : $7$, $8$, $9$, $10$, valet, dame, roi et as. On tire une carte au hasard.

1. Quelle est la probabilité de tirer un roi ?
2. Quelle est la probabilité de tirer un cœur ?
3. Quelle est la probabilité de tirer le roi de cœur ?
4. Les « figures » sont les valets, les dames et les rois. Quelle est la probabilité de tirer une figure ?
5. Quelle est la probabilité de tirer une carte qui n'est pas une figure ?`,
      solution: `Les $32$ cartes ont toutes la même chance d'être tirées.

**1.** Il y a $4$ rois (un par couleur) : $\\frac{4}{32} = \\frac{1}{8}$.

**2.** Il y a $8$ cœurs : $\\frac{8}{32} = \\frac{1}{4}$.

**3.** Il y a un seul roi de cœur : $\\frac{1}{32}$.

**4.** Il y a $3$ figures par couleur, donc $3 \\times 4 = 12$ figures : $\\frac{12}{32} = \\frac{3}{8}$.

**5.** Cartes qui ne sont pas des figures : $32 - 12 = 20$, probabilité $\\frac{20}{32} = \\frac{5}{8}$. (On vérifie : $\\frac{3}{8} + \\frac{5}{8} = 1$.)`
    },
    {
      id: "6D2-ds-07",
      title: "Un jeu est-il équitable ?",
      difficulty: 4,
      points: 6,
      statement: `Tom et Léa jouent avec un dé équilibré à six faces. Tom gagne si le dé tombe sur $5$ ou $6$ ; sinon, c'est Léa qui gagne.

1. Calculer la probabilité que Tom gagne, puis celle que Léa gagne.
2. Le jeu est-il équitable (les deux joueurs ont-ils la même chance de gagner) ? Proposer une nouvelle règle pour qu'il le soit.
3. Ils changent de jeu : un sac contient $4$ boules rouges et des boules bleues. Tom gagne s'il tire une boule rouge. Combien faut-il mettre de boules bleues pour que la probabilité que Tom gagne soit égale à $\\frac{1}{3}$ ? Justifier.
4. Et pour que cette probabilité soit égale à $\\frac{1}{5}$ ?`,
      solution: `**1.** Les $6$ faces sont équiprobables. Tom gagne avec $2$ faces : $\\frac{2}{6} = \\frac{1}{3}$. Léa gagne avec $4$ faces ($1$, $2$, $3$, $4$) : $\\frac{4}{6} = \\frac{2}{3}$.

**2.** $\\frac{1}{3} \\neq \\frac{2}{3}$ : le jeu **n'est pas équitable**, il avantage Léa. Pour qu'il le soit, chacun doit gagner avec $3$ faces sur $6$, par exemple : « Tom gagne si le nombre est pair, Léa s'il est impair » (probabilité $\\frac{1}{2}$ chacun).

**3.** On veut que les $4$ boules rouges représentent $\\frac{1}{3}$ du sac : le sac doit contenir $3 \\times 4 = 12$ boules. Il faut donc $12 - 4 = 8$ boules bleues. Vérification : $\\frac{4}{12} = \\frac{1}{3}$.

**4.** Il faut $5 \\times 4 = 20$ boules en tout, donc $20 - 4 = 16$ boules bleues. Vérification : $\\frac{4}{20} = \\frac{1}{5}$.`
    },
    {
      id: "6D2-ds-08",
      title: "Deviner le contenu d'un sac",
      difficulty: 4,
      points: 5,
      statement: `Un sac contient $20$ boules rouges, bleues ou vertes, mais on ne sait pas combien de chaque couleur. La classe effectue $500$ tirages : à chaque fois, on tire une boule, on note sa couleur, puis on la **remet** dans le sac. Résultats : $302$ boules rouges, $148$ boules bleues et $50$ boules vertes.

1. Vérifier le nombre total de tirages.
2. Calculer la fréquence d'apparition de chaque couleur, sous forme décimale (arrondie au centième si nécessaire).
3. En utilisant ces fréquences, estimer le nombre de boules de chaque couleur dans le sac. Vérifier que le total est cohérent.
4. Pourquoi a-t-on fait $500$ tirages plutôt que $10$ ?`,
      solution: `**1.** $302 + 148 + 50 = 500$ tirages.

**2.** Rouge : $\\frac{302}{500} = 0{,}604 \\approx 0{,}60$ ; bleue : $\\frac{148}{500} = 0{,}296 \\approx 0{,}30$ ; verte : $\\frac{50}{500} = 0{,}1$.

**3.** Quand on fait beaucoup de tirages, la fréquence est proche de la probabilité, c'est-à-dire de la proportion de boules de chaque couleur dans le sac.
- rouges : $0{,}6 \\times 20 = 12$ ;
- bleues : $0{,}3 \\times 20 = 6$ ;
- vertes : $0{,}1 \\times 20 = 2$.
Total : $12 + 6 + 2 = 20$, cohérent avec le nombre de boules. On peut estimer que le sac contient **$12$ rouges, $6$ bleues et $2$ vertes** (c'est une estimation, pas une certitude).

**4.** Avec peu de tirages, les fréquences peuvent beaucoup s'éloigner des probabilités (le hasard « fluctue ») ; avec un grand nombre de tirages, elles s'en rapprochent : l'estimation est plus fiable.`
    },
    {
      id: "6D2-ds-09",
      title: "Les jetons du mot PROBABILITE",
      difficulty: 1,
      points: 4,
      statement: `On écrit chaque lettre du mot **PROBABILITE** sur un jeton (une lettre par jeton, en écrivant toutes les lettres, même répétées). On met les jetons dans un sac et on en tire un au hasard.

1. Combien y a-t-il de jetons dans le sac ?
2. Calculer la probabilité de tirer la lettre B, puis celle de tirer la lettre T.
3. Calculer la probabilité de tirer une voyelle.
4. Pour chacun des événements suivants, dire s'il est certain, impossible ou ni l'un ni l'autre, et donner sa probabilité :
   a) « tirer la lettre Z » ;
   b) « tirer une lettre du mot PROBABILITE ».`,
      solution: `**1.** Le mot P-R-O-B-A-B-I-L-I-T-E compte $11$ lettres : il y a **$11$ jetons**.

Les jetons ont tous la même chance d'être tirés : la probabilité d'un événement est le nombre de jetons qui le réalisent divisé par $11$.

**2.** Il y a $2$ jetons B : $P(\\text{B}) = \\frac{2}{11}$. Il y a $1$ jeton T : $P(\\text{T}) = \\frac{1}{11}$.

**3.** Les voyelles sont O, A, I, I, E : $5$ jetons. La probabilité est $\\frac{5}{11}$.

**4.** a) Aucun jeton ne porte la lettre Z : l'événement est **impossible**, sa probabilité est $0$.
b) Tous les jetons portent une lettre du mot : l'événement est **certain**, sa probabilité est $\\frac{11}{11} = 1$.`
    },
    {
      id: "6D2-ds-10",
      title: "Le dé à douze faces",
      difficulty: 2,
      points: 5,
      statement: `Pour un jeu de société, on utilise un dé équilibré à $12$ faces numérotées de $1$ à $12$.

1. Quelle est la probabilité d'obtenir le $7$ ?
2. Calculer la probabilité de chacun des événements suivants. Donner le résultat sous la forme d'une fraction la plus simple possible.
   a) $A$ : « obtenir un nombre pair » ;
   b) $B$ : « obtenir un multiple de $3$ » ;
   c) $C$ : « obtenir un diviseur de $12$ ».
3. Calculer la probabilité de ne pas obtenir un multiple de $3$.
4. Avec un dé ordinaire à $6$ faces, on gagne si l'on obtient $6$. Avec le dé à $12$ faces, on gagne si l'on obtient $11$ ou plus. Quel dé donne le plus de chances de gagner ? Justifier.`,
      solution: `Les $12$ faces ont la même chance de sortir.

**1.** Une seule face porte le $7$ : $P = \\frac{1}{12}$.

**2.** a) Les nombres pairs sont $2$, $4$, $6$, $8$, $10$, $12$ : $6$ faces. $P(A) = \\frac{6}{12} = \\frac{1}{2}$.
b) Les multiples de $3$ sont $3$, $6$, $9$, $12$ : $4$ faces. $P(B) = \\frac{4}{12} = \\frac{1}{3}$.
c) Les diviseurs de $12$ sont $1$, $2$, $3$, $4$, $6$, $12$ : $6$ faces. $P(C) = \\frac{6}{12} = \\frac{1}{2}$.

**3.** $12 - 4 = 8$ faces ne portent pas un multiple de $3$ : $P = \\frac{8}{12} = \\frac{2}{3}$.
(On peut aussi calculer $1 - \\frac{1}{3} = \\frac{2}{3}$.)

**4.** Dé à $6$ faces : $P(\\text{gagner}) = \\frac{1}{6}$.
Dé à $12$ faces : on gagne avec $11$ ou $12$, soit $2$ faces : $P = \\frac{2}{12} = \\frac{1}{6}$.
Les deux probabilités sont égales : **les deux dés donnent la même chance de gagner**.`
    },
    {
      id: "6D2-ds-11",
      title: "La tombola de la fête du collège",
      difficulty: 3,
      points: 5,
      statement: `Pour la fête du collège, on met en vente $200$ tickets de tombola, bien mélangés. Parmi eux, $1$ ticket fait gagner le gros lot, $4$ tickets font gagner un lot moyen et $25$ tickets font gagner un petit lot. Les autres tickets sont perdants.

1. Combien de tickets sont perdants ?
2. On achète le premier ticket vendu. Calculer la probabilité :
   a) de gagner le gros lot (donner l'écriture décimale) ;
   b) de gagner un lot, quel qu'il soit (sous forme de fraction simplifiée, puis de pourcentage) ;
   c) de perdre.
3. En fin d'après-midi, $50$ tickets ont déjà été vendus et ouverts. Parmi eux, il y avait $1$ lot moyen et $5$ petits lots ; le gros lot n'est pas encore sorti.
   a) Combien reste-t-il de tickets ? Combien sont encore gagnants ?
   b) Calculer la probabilité qu'un ticket acheté maintenant soit gagnant. Est-ce plus ou moins intéressant qu'au début ? Justifier.`,
      solution: `**1.** Tickets gagnants : $1 + 4 + 25 = 30$. Tickets perdants : $200 - 30 = 170$.

**2.** Les $200$ tickets ont la même chance d'être achetés.
a) $P(\\text{gros lot}) = \\frac{1}{200} = 0{,}005$.
b) $P(\\text{gagner}) = \\frac{30}{200} = \\frac{3}{20} = \\frac{15}{100} = 15\\,\\%$.
c) $P(\\text{perdre}) = \\frac{170}{200} = \\frac{17}{20} = 85\\,\\%$ (on vérifie : $15\\,\\% + 85\\,\\% = 100\\,\\%$).

**3.** a) Il reste $200 - 50 = 150$ tickets. Il est sorti $1 + 5 = 6$ tickets gagnants, il en reste donc $30 - 6 = 24$.

b) Sur les $150$ tickets restants, $24$ sont gagnants : $P = \\frac{24}{150} = \\frac{8}{50} = \\frac{16}{100} = 16\\,\\%$.
$16\\,\\% > 15\\,\\%$ : c'est **un peu plus intéressant** qu'au début, car proportionnellement il est sorti moins de tickets gagnants que prévu ($6$ sur $50$, soit $12\\,\\%$).`
    },
    {
      id: "6D2-ds-12",
      title: "Modifier le contenu d'un sac",
      difficulty: 4,
      points: 6,
      statement: `Un sac contient $4$ jetons rouges et $6$ jetons bleus, indiscernables au toucher. On tire un jeton au hasard.

1. Calculer la probabilité de tirer un jeton rouge. Donner le résultat sous forme décimale.
2. Combien de jetons rouges faut-il **ajouter** dans le sac pour que la probabilité de tirer un rouge soit égale à $\\frac{1}{2}$ ? Justifier.
3. On repart du sac de départ. On veut que la probabilité de tirer un rouge soit égale à $\\frac{2}{3}$.
   a) Expliquer pourquoi il faut alors qu'il y ait deux fois plus de jetons rouges que de jetons bleus.
   b) Combien de jetons rouges faut-il ajouter (sans toucher aux bleus) ?
   c) Combien de jetons bleus faudrait-il plutôt retirer (sans toucher aux rouges) ?
4. En ajoutant suffisamment de jetons rouges, peut-on rendre certain l'événement « tirer un jeton rouge » ? Justifier.`,
      solution: `**1.** Le sac contient $4 + 6 = 10$ jetons, dont $4$ rouges : $P(\\text{rouge}) = \\frac{4}{10} = 0{,}4$.

**2.** La probabilité vaut $\\frac{1}{2}$ quand la moitié des jetons sont rouges, c'est-à-dire quand il y a autant de rouges que de bleus. Il y a $6$ bleus : il faut $6$ rouges, donc **ajouter $2$ jetons rouges**. Vérification : $\\frac{6}{12} = \\frac{1}{2}$.

**3.** a) Si $P(\\text{rouge}) = \\frac{2}{3}$, sur $3$ parts égales du sac, $2$ parts sont rouges et $1$ part est bleue : il y a deux fois plus de rouges que de bleus.

b) Avec $6$ bleus, il faut $2 \\times 6 = 12$ rouges : on ajoute $12 - 4 = 8$ jetons rouges. Vérification : $\\frac{12}{18} = \\frac{2}{3}$.

c) Avec $4$ rouges, il faut $4 \\div 2 = 2$ bleus : on retire $6 - 2 = 4$ jetons bleus. Vérification : $\\frac{4}{6} = \\frac{2}{3}$.

**4.** Non. Tant que les $6$ jetons bleus sont dans le sac, il est toujours possible d'en tirer un : l'événement « tirer un rouge » n'est jamais certain, sa probabilité reste inférieure à $1$ (même si elle s'en rapproche quand on ajoute beaucoup de rouges).`
    },
    {
      id: "6D2-ds-13",
      title: "Tirer au sort un responsable",
      difficulty: 1,
      points: 4,
      statement: `Une classe compte $25$ élèves : $12$ filles et $13$ garçons. Parmi eux, $4$ élèves portent des lunettes : $1$ fille et $3$ garçons. Pour désigner un responsable du cahier de textes, on écrit le nom de chaque élève sur un papier et on tire un papier au hasard.

1. L'événement « le responsable est un élève de la classe » est-il impossible, certain, ou ni l'un ni l'autre ? Et l'événement « le responsable a $40$ ans » ?
2. Quelle est la probabilité que le responsable soit une fille ? Un garçon ?
3. Est-il plus probable de tirer une fille ou un garçon ? Justifier.
4. Quelle est la probabilité que le responsable porte des lunettes ?
5. Quelle est la probabilité que le responsable soit un garçon qui porte des lunettes ?`,
      solution: `Il y a $25$ papiers, tous ayant la même chance d'être tirés.

**1.** « Le responsable est un élève de la classe » est **certain** : tous les papiers portent le nom d'un élève de la classe.
« Le responsable a $40$ ans » est **impossible** : aucun élève de la classe n'a $40$ ans.

**2.** $12$ papiers sur $25$ portent le nom d'une fille : $P(\\text{fille}) = \\frac{12}{25}$.
$13$ papiers sur $25$ portent le nom d'un garçon : $P(\\text{garçon}) = \\frac{13}{25}$.

**3.** $\\frac{13}{25} > \\frac{12}{25}$ (même dénominateur, $13 > 12$) : il est un peu plus probable de tirer **un garçon**.

**4.** $4$ élèves sur $25$ portent des lunettes : la probabilité est $\\frac{4}{25}$.

**5.** $3$ élèves sont des garçons à lunettes : la probabilité est $\\frac{3}{25}$.`
    },
    {
      id: "6D2-ds-14",
      title: "Quelle roue choisir ?",
      difficulty: 2,
      points: 5,
      statement: `À la fête de l'école, on peut jouer avec l'une des deux roues ci-dessous. Chaque roue est partagée en secteurs de même taille. On fait tourner la roue ; on gagne si la flèche s'arrête sur un secteur jaune.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:360px;"><svg class="geo-svg-figure" viewBox="0 0 350 175" width="350" height="175" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M90,80 L90.0,15.0 A65,65 0 0 1 146.3,47.5 Z" fill="rgba(234,179,8,0.75)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M90,80 L146.3,47.5 A65,65 0 0 1 146.3,112.5 Z" fill="rgba(148,163,184,0.15)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M90,80 L146.3,112.5 A65,65 0 0 1 90.0,145.0 Z" fill="rgba(148,163,184,0.15)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M90,80 L90.0,145.0 A65,65 0 0 1 33.7,112.5 Z" fill="rgba(234,179,8,0.75)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M90,80 L33.7,112.5 A65,65 0 0 1 33.7,47.5 Z" fill="rgba(148,163,184,0.15)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M90,80 L33.7,47.5 A65,65 0 0 1 90.0,15.0 Z" fill="rgba(148,163,184,0.15)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><text x="90" y="167" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Roue A</text><path d="M260,80 L260.0,15.0 A65,65 0 0 1 292.5,23.7 Z" fill="rgba(234,179,8,0.75)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M260,80 L292.5,23.7 A65,65 0 0 1 316.3,47.5 Z" fill="rgba(148,163,184,0.15)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M260,80 L316.3,47.5 A65,65 0 0 1 325.0,80.0 Z" fill="rgba(234,179,8,0.75)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M260,80 L325.0,80.0 A65,65 0 0 1 316.3,112.5 Z" fill="rgba(148,163,184,0.15)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M260,80 L316.3,112.5 A65,65 0 0 1 292.5,136.3 Z" fill="rgba(148,163,184,0.15)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M260,80 L292.5,136.3 A65,65 0 0 1 260.0,145.0 Z" fill="rgba(234,179,8,0.75)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M260,80 L260.0,145.0 A65,65 0 0 1 227.5,136.3 Z" fill="rgba(148,163,184,0.15)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M260,80 L227.5,136.3 A65,65 0 0 1 203.7,112.5 Z" fill="rgba(234,179,8,0.75)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M260,80 L203.7,112.5 A65,65 0 0 1 195.0,80.0 Z" fill="rgba(148,163,184,0.15)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M260,80 L195.0,80.0 A65,65 0 0 1 203.7,47.5 Z" fill="rgba(148,163,184,0.15)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M260,80 L203.7,47.5 A65,65 0 0 1 227.5,23.7 Z" fill="rgba(234,179,8,0.75)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><path d="M260,80 L227.5,23.7 A65,65 0 0 1 260.0,15.0 Z" fill="rgba(148,163,184,0.15)" stroke="var(--text-main, #334155)" stroke-width="1.5"/><text x="260" y="167" text-anchor="middle" font-size="14" font-weight="bold" fill="currentColor">Roue B</text></svg></div>

1. Combien la roue A a-t-elle de secteurs ? Combien sont jaunes ? Même question pour la roue B.
2. Calculer la probabilité de gagner avec la roue A, puis avec la roue B.
3. Calculer la probabilité de perdre avec la roue A.
4. a) Écrire la probabilité de gagner avec la roue A sous la forme d'une fraction de dénominateur $12$.
   b) Avec quelle roue a-t-on le plus de chances de gagner ?
5. Combien faudrait-il de secteurs jaunes sur la roue B pour avoir exactement la même probabilité de gagner qu'avec la roue A ?`,
      solution: `**1.** Roue A : $6$ secteurs, dont $2$ jaunes. Roue B : $12$ secteurs, dont $5$ jaunes.

**2.** Les secteurs ont la même taille, donc chacun a la même chance d'être désigné.
Roue A : $P = \\frac{2}{6}$. Roue B : $P = \\frac{5}{12}$.

**3.** Avec la roue A, $4$ secteurs sur $6$ font perdre : $P(\\text{perdre}) = \\frac{4}{6}$ (on peut aussi écrire $1 - \\frac{2}{6} = \\frac{4}{6}$).

**4.** a) $\\frac{2}{6} = \\frac{2 \\times 2}{6 \\times 2} = \\frac{4}{12}$.
b) $\\frac{5}{12} > \\frac{4}{12}$ : on a plus de chances de gagner avec la **roue B**.

**5.** Il faudrait $\\frac{4}{12}$, donc **$4$ secteurs jaunes** sur la roue B (au lieu de $5$).`
    },
    {
      id: "6D2-ds-15",
      title: "Les jetons numérotés",
      difficulty: 3,
      points: 5,
      statement: `Un sac contient $20$ jetons indiscernables au toucher, numérotés de $1$ à $20$. On tire un jeton au hasard.

1. Quelle est la probabilité de tirer le jeton numéro $7$ ?
2. Quelle est la probabilité de tirer un numéro pair ?
3. a) Écrire la liste des multiples de $3$ compris entre $1$ et $20$.
   b) Quelle est la probabilité de tirer un multiple de $3$ ?
4. Quelle est la probabilité de tirer un numéro qui est à la fois pair et multiple de $3$ ?
5. Quelle est la probabilité de tirer un numéro dans lequel on voit le chiffre $1$ ?
6. Donner un événement dont la probabilité est égale à $0$.`,
      solution: `Les $20$ jetons ont tous la même chance d'être tirés.

**1.** Un seul jeton porte le numéro $7$ : $P = \\frac{1}{20}$.

**2.** Les numéros pairs sont $2$ ; $4$ ; $6$ ; … ; $20$ : il y en a $10$. $P = \\frac{10}{20}$ (soit $\\frac{1}{2}$).

**3.** a) $3$ ; $6$ ; $9$ ; $12$ ; $15$ ; $18$.
b) Il y en a $6$ : $P = \\frac{6}{20}$.

**4.** Parmi les multiples de $3$, les nombres pairs sont $6$ ; $12$ ; $18$ : $P = \\frac{3}{20}$.

**5.** Le chiffre $1$ apparaît dans $1$ ; $10$ ; $11$ ; $12$ ; $13$ ; $14$ ; $15$ ; $16$ ; $17$ ; $18$ ; $19$, soit $11$ numéros (attention à ne pas oublier $1$ et $10$). $P = \\frac{11}{20}$.

**6.** Par exemple « tirer le numéro $25$ » ou « tirer un numéro supérieur à $20$ » : c'est un événement impossible, sa probabilité est $0$.`
    },
    {
      id: "6D2-ds-16",
      title: "Inventer la règle de la loterie",
      difficulty: 4,
      points: 6,
      statement: `Pour une loterie, on met dans une urne $100$ boules numérotées de $1$ à $100$, indiscernables au toucher. Un joueur tire une boule au hasard. Les organisateurs hésitent entre plusieurs règles pour désigner les boules gagnantes.

1. Règle 1 : « La boule est gagnante si son numéro se termine par $7$. »
   a) Combien y a-t-il de boules gagnantes ? Les écrire.
   b) Quelle est la probabilité de gagner ?
2. Règle 2 : « La boule est gagnante si son numéro est un multiple de $25$. » Quelle est la probabilité de gagner ?
3. Règle 3 : « La boule est gagnante si son numéro s'écrit avec deux chiffres identiques (comme $44$). » Quelle est la probabilité de gagner ?
4. Règle 4 : « La boule est gagnante si son numéro se termine par $7$ **ou** est un multiple de $25$. » Expliquer pourquoi aucune boule n'est comptée deux fois, puis calculer la probabilité de gagner.
5. Les organisateurs veulent une règle pour laquelle la probabilité de gagner est $\\frac{1}{5}$. Combien faut-il de boules gagnantes ? Proposer une règle qui convient.
6. Léo dit : « Un numéro pair a plus de chances de sortir qu'un numéro impair. » Qu'en penser ?`,
      solution: `Les $100$ boules ont toutes la même chance d'être tirées.

**1.** a) $7$ ; $17$ ; $27$ ; $37$ ; $47$ ; $57$ ; $67$ ; $77$ ; $87$ ; $97$ : il y a $10$ boules gagnantes.
b) $P = \\frac{10}{100}$ (soit $\\frac{1}{10}$).

**2.** Les multiples de $25$ jusqu'à $100$ sont $25$ ; $50$ ; $75$ ; $100$. $P = \\frac{4}{100}$.

**3.** $11$ ; $22$ ; $33$ ; $44$ ; $55$ ; $66$ ; $77$ ; $88$ ; $99$ : $9$ boules. $P = \\frac{9}{100}$.

**4.** Les multiples de $25$ se terminent par $0$ ou par $5$, jamais par $7$ : aucune boule ne vérifie les deux conditions à la fois. Il y a donc $10 + 4 = 14$ boules gagnantes et $P = \\frac{14}{100}$.

**5.** $\\frac{1}{5} = \\frac{20}{100}$ : il faut $20$ boules gagnantes.
Exemple de règle : « la boule est gagnante si son numéro est un multiple de $5$ » ($5$ ; $10$ ; … ; $100$, soit $100 \\div 5 = 20$ boules). D'autres règles conviennent, par exemple « le numéro se termine par $3$ ou par $8$ ».

**6.** Il y a $50$ numéros pairs et $50$ numéros impairs entre $1$ et $100$ : les deux probabilités valent $\\frac{50}{100}$. Léo **a tort**, les deux événements ont la même probabilité.`
    }
  ]
});
Object.assign(window.MATHS_DS_BANK, {
  "6A1": [
    {
      id: "6A1-ds-01",
      title: "Exécuter un programme de flèches",
      difficulty: 1,
      points: 4,
      statement: `Un robot se déplace sur un quadrillage. Chaque flèche le fait avancer d'une case : → (droite), ← (gauche), ↑ (haut), ↓ (bas). Le robot part d'une case notée D et exécute le programme :
$$\\rightarrow \\; \\rightarrow \\; \\uparrow \\; \\uparrow \\; \\uparrow \\; \\leftarrow \\; \\downarrow$$

1. Combien d'instructions comporte ce programme ?
2. Où le robot arrive-t-il par rapport à la case D ? Expliquer.
3. Écrire un programme le plus court possible qui amène le robot de D à la même case d'arrivée.
4. Écrire un programme qui ramène le robot de sa case d'arrivée jusqu'à la case D.`,
      solution: `**1.** Le programme comporte **$7$ instructions** (une par flèche).

**2.** On compte séparément les déplacements :
- horizontalement : $2$ cases à droite et $1$ à gauche, soit $2 - 1 = 1$ case **à droite** ;
- verticalement : $3$ cases vers le haut et $1$ vers le bas, soit $3 - 1 = 2$ cases **vers le haut**.
Le robot arrive $1$ case à droite et $2$ cases au-dessus de la case D.

**3.** Un programme de $3$ instructions suffit, par exemple : $\\rightarrow \\; \\uparrow \\; \\uparrow$ (on ne peut pas faire moins, car il faut au moins $1$ pas horizontal et $2$ pas verticaux).

**4.** Il faut faire le chemin inverse : $1$ case à gauche et $2$ cases vers le bas, par exemple : $\\downarrow \\; \\downarrow \\; \\leftarrow$.`
    },
    {
      id: "6A1-ds-02",
      title: "Le carré du lutin",
      difficulty: 1,
      points: 4,
      statement: `Dans Scratch, le lutin est orienté vers la droite et son stylo est baissé. On lance le script suivant :

\`\`\`scratch
quand drapeau cliqué
stylo en position d'écriture
répéter 4 fois
    avancer de 60 pas
    tourner ↻ de 90 degrés
\`\`\`

1. Quelle figure le lutin trace-t-il ? Préciser la longueur de ses côtés.
2. Quelle distance totale le lutin parcourt-il ?
3. Combien d'instructions de déplacement faudrait-il écrire à la suite si l'on n'utilisait pas de boucle ?
4. Que faut-il modifier pour obtenir un carré de côté $100$ pas ?`,
      solution: `**1.** Le lutin répète $4$ fois : « avancer de $60$ pas, tourner d'un angle droit ». Il trace $4$ côtés de $60$ pas qui forment des angles droits : c'est un **carré de côté $60$ pas**.

**2.** Il parcourt $4 \\times 60 = 240$ pas (le périmètre du carré).

**3.** Sans boucle, il faudrait écrire $4$ fois les $2$ instructions « avancer » et « tourner », soit $4 \\times 2 = 8$ instructions.

**4.** Il suffit de remplacer « avancer de $60$ pas » par **« avancer de $100$ pas »** ; le nombre de répétitions ($4$) et l'angle ($90$ degrés) ne changent pas.`
    },
    {
      id: "6A1-ds-03",
      title: "Une boucle de flèches",
      difficulty: 2,
      points: 5,
      statement: `Un robot se déplace case par case sur un quadrillage avec les flèches → (droite), ← (gauche), ↑ (haut), ↓ (bas). On lui donne le programme :

« répéter $3$ fois : $\\rightarrow \\; \\rightarrow \\; \\uparrow$ »

1. Écrire la liste complète des flèches exécutées par le robot.
2. Où arrive-t-il par rapport à sa case de départ ? Décrire la forme de son trajet.
3. Écrire, avec une boucle, un programme qui amène le robot $8$ cases à droite et $4$ cases vers le haut en suivant le même type de trajet.
4. Combien de flèches ce programme fait-il exécuter au robot ?`,
      solution: `**1.** La séquence $\\rightarrow \\; \\rightarrow \\; \\uparrow$ est exécutée $3$ fois :
$\\rightarrow \\; \\rightarrow \\; \\uparrow \\; \\rightarrow \\; \\rightarrow \\; \\uparrow \\; \\rightarrow \\; \\rightarrow \\; \\uparrow$ ($9$ flèches).

**2.** À chaque passage, le robot va $2$ cases à droite et $1$ vers le haut. En $3$ passages : $3 \\times 2 = 6$ cases à droite et $3 \\times 1 = 3$ cases vers le haut. Le trajet a la forme d'un **escalier** de $3$ marches.

**3.** Chaque passage fait $2$ cases à droite et $1$ vers le haut. Pour $8$ cases à droite : $8 \\div 2 = 4$ passages, ce qui donne bien $4 \\times 1 = 4$ cases vers le haut.
Programme : « répéter $4$ fois : $\\rightarrow \\; \\rightarrow \\; \\uparrow$ ».

**4.** $4 \\times 3 = 12$ flèches.`
    },
    {
      id: "6A1-ds-04",
      title: "Trouver l'erreur dans un script",
      difficulty: 2,
      points: 5,
      statement: `Nina veut tracer un rectangle de longueur $100$ pas et de largeur $50$ pas. Son lutin est orienté vers la droite, stylo baissé. Elle écrit :

\`\`\`scratch
quand drapeau cliqué
stylo en position d'écriture
répéter 4 fois
    avancer de 100 pas
    tourner ↻ de 90 degrés
    avancer de 50 pas
    tourner ↻ de 90 degrés
\`\`\`

1. Quel est le périmètre du rectangle que veut tracer Nina ?
2. Combien de côtés le lutin trace-t-il en un seul passage dans la boucle ? Où se trouve-t-il après deux passages ?
3. Quelle distance totale le lutin parcourt-il avec ce script ? Le dessin obtenu est-il faux ?
4. Corriger le script pour qu'il trace le rectangle une seule fois.`,
      solution: `**1.** Périmètre : $2 \\times (100 + 50) = 2 \\times 150 = 300$ pas.

**2.** En un passage, le lutin trace **$2$ côtés** ($100$ pas puis $50$ pas) et fait un demi-tour en deux quarts de tour. Après $2$ passages, il a tracé les $4$ côtés du rectangle : il est **revenu à son point de départ**, orienté vers la droite.

**3.** Le script fait $4$ passages, donc le lutin parcourt $4 \\times (100 + 50) = 600$ pas : il fait **deux fois le tour** du rectangle. Le dessin obtenu est correct (il repasse sur les mêmes traits), mais le script fait deux fois trop de travail.

**4.** Il faut remplacer « répéter 4 fois » par **« répéter 2 fois »** : chaque passage trace une longueur et une largeur, et deux passages suffisent pour fermer le rectangle.`
    },
    {
      id: "6A1-ds-05",
      title: "Le robot et le mur",
      difficulty: 3,
      points: 5,
      statement: `Un robot se déplace case par case sur le quadrillage ci-dessous (colonnes $A$ à $F$, lignes $1$ à $5$), avec les flèches → (droite), ← (gauche), ↑ (haut), ↓ (bas). Il part de la case $A1$ (notée D) et doit rejoindre la case $E1$ (notée ★). Les cases grisées $C1$, $C2$ et $C3$ forment un mur : le robot ne peut pas y entrer.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 300 250" width="300" height="250" style="width:100%; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="120" y="100" width="40" height="120" fill="#94a3b8"/><path d="M40 20V220M80 20V220M120 20V220M160 20V220M200 20V220M240 20V220M280 20V220M40 20H280M40 60H280M40 100H280M40 140H280M40 180H280M40 220H280" stroke="var(--text-main, #334155)" stroke-width="1.2" fill="none"/><text x="60" y="205" font-size="16" font-weight="bold" text-anchor="middle" fill="#2563eb">D</text><text x="220" y="206" font-size="18" text-anchor="middle" fill="#dc2626">★</text><text x="60" y="240" font-size="13" text-anchor="middle" fill="var(--text-main, #334155)">A</text><text x="100" y="240" font-size="13" text-anchor="middle" fill="var(--text-main, #334155)">B</text><text x="140" y="240" font-size="13" text-anchor="middle" fill="var(--text-main, #334155)">C</text><text x="180" y="240" font-size="13" text-anchor="middle" fill="var(--text-main, #334155)">D</text><text x="220" y="240" font-size="13" text-anchor="middle" fill="var(--text-main, #334155)">E</text><text x="260" y="240" font-size="13" text-anchor="middle" fill="var(--text-main, #334155)">F</text><text x="25" y="205" font-size="13" text-anchor="middle" fill="var(--text-main, #334155)">1</text><text x="25" y="165" font-size="13" text-anchor="middle" fill="var(--text-main, #334155)">2</text><text x="25" y="125" font-size="13" text-anchor="middle" fill="var(--text-main, #334155)">3</text><text x="25" y="85" font-size="13" text-anchor="middle" fill="var(--text-main, #334155)">4</text><text x="25" y="45" font-size="13" text-anchor="middle" fill="var(--text-main, #334155)">5</text></svg></div>

1. Léo propose le programme : $\\uparrow \\; \\uparrow \\; \\rightarrow \\; \\rightarrow \\; \\rightarrow \\; \\downarrow \\; \\downarrow \\; \\rightarrow$. Exécuter ce programme case par case. Que se passe-t-il ?
2. Écrire un programme qui amène le robot de D à ★ sans entrer dans le mur.
3. Expliquer pourquoi il faut au moins $10$ flèches pour aller de D à ★.
4. Réécrire un programme de $10$ flèches en utilisant des boucles « répéter ».`,
      solution: `**1.** Départ $A1$ ; ↑ : $A2$ ; ↑ : $A3$ ; → : $B3$ ; → : $C3$. La case $C3$ fait partie du mur : **le robot heurte le mur** à la $4^\\text{e}$ instruction, le programme ne fonctionne pas.

**2.** Le mur occupe les lignes $1$ à $3$ de la colonne $C$ : il faut passer par la ligne $4$. Par exemple :
$\\uparrow \\; \\uparrow \\; \\uparrow \\; \\rightarrow \\; \\rightarrow \\; \\rightarrow \\; \\rightarrow \\; \\downarrow \\; \\downarrow \\; \\downarrow$
Trajet : $A1 \\to A4$, puis $A4 \\to E4$, puis $E4 \\to E1$.

**3.** Le robot doit se déplacer de $4$ colonnes vers la droite ($A \\to E$) : au moins $4$ flèches →. Pour franchir la colonne $C$, il doit monter au moins jusqu'à la ligne $4$ : au moins $3$ flèches ↑, puis redescendre à la ligne $1$ : au moins $3$ flèches ↓. Au total : au moins $4 + 3 + 3 = 10$ flèches.

**4.** « répéter $3$ fois : $\\uparrow$ » ; « répéter $4$ fois : $\\rightarrow$ » ; « répéter $3$ fois : $\\downarrow$ ».`
    },
    {
      id: "6A1-ds-06",
      title: "Un escalier dans Scratch",
      difficulty: 3,
      points: 5,
      statement: `Le lutin est orienté vers la droite, stylo baissé. On exécute le script :

\`\`\`scratch
quand drapeau cliqué
stylo en position d'écriture
répéter 5 fois
    avancer de 20 pas
    tourner ↺ de 90 degrés
    avancer de 20 pas
    tourner ↻ de 90 degrés
\`\`\`

Rappel : « tourner ↺ » fait tourner le lutin vers la gauche, « tourner ↻ » vers la droite.

1. Décrire le trajet du lutin lors du premier passage dans la boucle. Dans quelle direction est-il orienté à la fin de ce passage ?
2. Quelle figure obtient-on à la fin du script ?
3. Calculer la longueur totale du tracé. De combien de pas le lutin s'est-il déplacé vers la droite et vers le haut au total ?
4. Modifier le script pour obtenir un escalier de $8$ marches, chacune de $30$ pas de large et $10$ pas de haut. Quelle est alors la longueur totale du tracé ?`,
      solution: `**1.** Le lutin avance de $20$ pas vers la droite, tourne d'un quart de tour vers la gauche (il est alors orienté vers le haut), avance de $20$ pas vers le haut, puis tourne d'un quart de tour vers la droite : il est de nouveau **orienté vers la droite**.

**2.** Chaque passage trace une « marche » ($20$ pas horizontaux puis $20$ pas verticaux). On obtient un **escalier de $5$ marches** qui monte vers la droite.

**3.** Chaque passage trace $20 + 20 = 40$ pas ; en $5$ passages : $5 \\times 40 = 200$ pas.
Vers la droite : $5 \\times 20 = 100$ pas ; vers le haut : $5 \\times 20 = 100$ pas.

**4.** On écrit « répéter **8** fois », le premier « avancer de **30** pas » et le second « avancer de **10** pas » (les rotations ne changent pas).
Longueur du tracé : $8 \\times (30 + 10) = 8 \\times 40 = 320$ pas.`
    },
    {
      id: "6A1-ds-07",
      title: "La spirale du lutin",
      difficulty: 4,
      points: 6,
      statement: `Le lutin est orienté vers la droite, stylo baissé. On exécute le script suivant, qui utilise une variable « longueur » :

\`\`\`scratch
quand drapeau cliqué
stylo en position d'écriture
mettre [longueur] à 10
répéter 5 fois
    avancer de (longueur) pas
    tourner ↺ de 90 degrés
    ajouter 10 à [longueur]
\`\`\`

1. Recopier et compléter le tableau : il donne la valeur de « longueur » au moment où le lutin avance, à chaque passage dans la boucle.

| Passage | $1$ | $2$ | $3$ | $4$ | $5$ |
|:---|:---:|:---:|:---:|:---:|:---:|
| longueur (en pas) | | | | | |

2. Quelle est la valeur de la variable « longueur » à la fin du script ?
3. Calculer la longueur totale du tracé.
4. Dans quelle direction le lutin est-il orienté à la fin ? Justifier.
5. On remplace « répéter 5 fois » par « répéter 8 fois ». Quelle est alors la longueur totale du tracé ?`,
      solution: `**1.** La variable commence à $10$ et augmente de $10$ après chaque déplacement :

| Passage | $1$ | $2$ | $3$ | $4$ | $5$ |
|:---|:---:|:---:|:---:|:---:|:---:|
| longueur (en pas) | $10$ | $20$ | $30$ | $40$ | $50$ |

**2.** Après le $5^\\text{e}$ passage, on ajoute encore $10$ : $50 + 10 = 60$. La variable vaut **$60$**.

**3.** $10 + 20 + 30 + 40 + 50 = 150$ pas.

**4.** Le lutin tourne $5$ fois d'un quart de tour vers la gauche. Après $4$ quarts de tour ($4 \\times 90^\\circ = 360^\\circ$), il a fait un tour complet et regarde de nouveau vers la droite ; le $5^\\text{e}$ quart de tour vers la gauche l'oriente **vers le haut**.

**5.** Les longueurs vont de $10$ à $80$ pas : $10 + 20 + 30 + 40 + 50 + 60 + 70 + 80$. En regroupant : $(10 + 80) + (20 + 70) + (30 + 60) + (40 + 50) = 4 \\times 90 = 360$ pas.`
    },
    {
      id: "6A1-ds-08",
      title: "La tirelire programmée",
      difficulty: 4,
      points: 5,
      statement: `Sami simule l'évolution de sa tirelire avec Scratch : il y a déjà $20$ € et il ajoute $5$ € chaque semaine.

\`\`\`scratch
quand drapeau cliqué
mettre [argent] à 20
répéter 12 fois
    ajouter 5 à [argent]
dire (argent)
\`\`\`

1. Que représente un passage dans la boucle ? Que vaut la variable « argent » après $3$ passages ?
2. Quel nombre le lutin dit-il à la fin du script ? Justifier par un calcul.
3. Sami veut savoir au bout de combien de semaines il aura exactement $100$ €. Par quel nombre faut-il remplacer $12$ dans le script ? Justifier.
4. Sa sœur Lou part de $0$ € et économise $7$ € par semaine. Écrire son script. Combien de semaines lui faut-il au minimum pour avoir au moins $100$ € ?`,
      solution: `**1.** Un passage représente **une semaine** : on ajoute $5$ € à la tirelire. Après $3$ passages : $20 + 3 \\times 5 = 20 + 15 = 35$ €.

**2.** Après $12$ passages : $20 + 12 \\times 5 = 20 + 60 = 80$. Le lutin dit **$80$**.

**3.** Il faut ajouter $100 - 20 = 80$ €, à raison de $5$ € par semaine : $80 \\div 5 = 16$. On remplace $12$ par **$16$** : au bout de $16$ semaines, Sami a exactement $100$ €.

**4.** Script de Lou : « quand drapeau cliqué ; mettre [argent] à 0 ; répéter … fois : ajouter 7 à [argent] ; dire (argent) ».
$7 \\times 14 = 98$ € : c'est moins que $100$ €. $7 \\times 15 = 105$ € : c'est au moins $100$ €. Il faut **$15$ semaines** au minimum (donc « répéter 15 fois »).`
    },
    {
      id: "6A1-ds-09",
      title: "Le robot qui tourne sur place",
      difficulty: 1,
      points: 4,
      statement: `Un robot se déplace sur un quadrillage. Il comprend trois instructions :
- **A** : avancer d'une case dans la direction où il regarde ;
- **G** : tourner sur place d'un quart de tour vers sa gauche ;
- **D** : tourner sur place d'un quart de tour vers sa droite.

Au départ, le robot est sur la case S et regarde vers le haut de la feuille. Il exécute le programme :
$$\\text{A} \; \\text{A} \; \\text{D} \; \\text{A} \; \\text{A} \; \\text{A} \; \\text{D} \; \\text{A}$$

1. Combien d'instructions comporte ce programme ? Combien d'entre elles font changer le robot de case ?
2. Décrire, étape par étape, le trajet du robot. Où arrive-t-il par rapport à la case S, et dans quelle direction regarde-t-il à la fin ?
3. Écrire un programme qui ramène ensuite le robot sur la case S.`,
      solution: `**1.** Le programme comporte **$8$ instructions**. Seules les instructions A déplacent le robot : il y en a **$6$** (les instructions D le font seulement tourner sur place).

**2.**
- A A : il monte de $2$ cases (il regarde vers le haut).
- D : il tourne d'un quart de tour vers sa droite, il regarde maintenant **vers la droite**.
- A A A : il avance de $3$ cases vers la droite.
- D : nouveau quart de tour vers sa droite, il regarde maintenant **vers le bas**.
- A : il descend d'une case.

Bilan : $3$ cases à droite et $2 - 1 = 1$ case vers le haut. Le robot arrive **$3$ cases à droite et $1$ case au-dessus de S**, et il **regarde vers le bas**.

**3.** Le robot regarde vers le bas. Par exemple : D (il regarde vers la gauche), A A A (il revient $3$ cases à gauche), G (il regarde vers le bas), A (il descend d'une case). Programme : $\\text{D} \; \\text{A} \; \\text{A} \; \\text{A} \; \\text{G} \; \\text{A}$.
(D'autres programmes sont possibles, par exemple $\\text{A} \; \\text{D} \; \\text{A} \; \\text{A} \; \\text{A}$ : il descend d'abord d'une case puis va $3$ cases à gauche.)`
    },
    {
      id: "6A1-ds-10",
      title: "Une ligne en pointillés",
      difficulty: 2,
      points: 5,
      statement: `Le lutin est orienté vers la droite. On exécute le script suivant :

\`\`\`scratch
quand drapeau cliqué
répéter 5 fois
    stylo en position d'écriture
    avancer de 20 pas
    relever le stylo
    avancer de 10 pas
\`\`\`

1. Décrire ce que dessine le lutin.
2. Quelle est la longueur totale des traits dessinés ? Quelle distance le lutin a-t-il parcourue en tout ?
3. Combien d'instructions faudrait-il écrire sans utiliser de boucle ?
4. Modifier le script pour obtenir $8$ traits de $15$ pas séparés par des espaces de $5$ pas. Quelle distance le lutin parcourt-il alors ?`,
      solution: `**1.** À chaque passage dans la boucle, le lutin trace un trait de $20$ pas (stylo baissé), puis avance de $10$ pas sans tracer (stylo relevé). Il dessine une **ligne en pointillés horizontale** formée de $5$ traits de $20$ pas séparés par des espaces de $10$ pas.

**2.** Traits dessinés : $5 \\times 20 = 100$ pas.
Distance parcourue : à chaque passage $20 + 10 = 30$ pas, donc $5 \\times 30 = 150$ pas.

**3.** La boucle contient $4$ instructions, répétées $5$ fois : $5 \\times 4 = 20$ instructions (sans compter « quand drapeau cliqué »).

**4.** Script modifié :
\`\`\`scratch
quand drapeau cliqué
répéter 8 fois
    stylo en position d'écriture
    avancer de 15 pas
    relever le stylo
    avancer de 5 pas
\`\`\`
Distance parcourue : $8 \\times (15 + 5) = 8 \\times 20 = 160$ pas.`
    },
    {
      id: "6A1-ds-11",
      title: "Le triangle qui ne se ferme pas",
      difficulty: 3,
      points: 5,
      statement: `Emma veut que le lutin trace un triangle équilatéral de côté $100$ pas. Le lutin est orienté vers la droite, stylo baissé. Comme les angles d'un triangle équilatéral mesurent $60^\\circ$, elle écrit :

\`\`\`scratch
quand drapeau cliqué
stylo en position d'écriture
répéter 3 fois
    avancer de 100 pas
    tourner ↺ de 60 degrés
\`\`\`

Le dessin obtenu n'est pas un triangle.

1. Après le premier « tourner », quel angle forment le premier trait dessiné et la direction dans laquelle le lutin va avancer ? (On pourra faire un schéma.)
2. Le lutin revient-il à son point de départ ? Que dessine-t-il ?
3. Par quel angle faut-il remplacer $60$ pour obtenir le triangle équilatéral ? Justifier.
4. De combien de degrés le lutin a-t-il tourné en tout avec le script corrigé ? Interpréter ce résultat.
5. En gardant « tourner ↺ de 60 degrés », combien de fois faut-il répéter la boucle pour que le lutin revienne à son point de départ ? Quelle figure obtient-on ?`,
      solution: `**1.** Le lutin tourne de $60^\\circ$ par rapport à la direction dans laquelle il avançait. Le trait déjà tracé est derrière lui : l'angle entre ce trait et la nouvelle direction est le supplémentaire de $60^\\circ$, soit $180^\\circ - 60^\\circ = 120^\\circ$.

**2.** Les côtés successifs forment des angles de $120^\\circ$ et non de $60^\\circ$ : le lutin ne revient pas à son point de départ. Il dessine **$3$ côtés de $100$ pas d'un hexagone régulier**, une ligne brisée ouverte.

**3.** Pour que deux côtés consécutifs forment un angle de $60^\\circ$, le lutin doit tourner du supplémentaire : $180^\\circ - 60^\\circ = 120^\\circ$. On remplace donc $60$ par **$120$**.

**4.** $3 \\times 120^\\circ = 360^\\circ$ : le lutin a fait **un tour complet**. Il revient à son point de départ, orienté comme au début (vers la droite).

**5.** Pour faire un tour complet par tranches de $60^\\circ$, il faut $360 \\div 60 = 6$ répétitions. Le lutin trace alors **un hexagone régulier** de côté $100$ pas ($6$ côtés égaux).`
    },
    {
      id: "6A1-ds-12",
      title: "La course de deux lutins",
      difficulty: 4,
      points: 6,
      statement: `Dans un jeu, deux lutins courent sur une même ligne droite, vers la droite. Le lutin Lapin part de la ligne de départ ; le lutin Tortue part $100$ pas devant lui. Quand on clique sur le drapeau, les deux scripts se lancent en même temps et les deux boucles avancent au même rythme (un passage chacun, en même temps).

Script de Lapin :
\`\`\`scratch
quand drapeau cliqué
répéter 25 fois
    avancer de 15 pas
\`\`\`

Script de Tortue :
\`\`\`scratch
quand drapeau cliqué
répéter 25 fois
    avancer de 10 pas
\`\`\`

1. Recopier et compléter le tableau des distances à la ligne de départ :

| Nombre de passages | $0$ | $1$ | $2$ | $3$ | $10$ |
|:---|:---:|:---:|:---:|:---:|:---:|
| Lapin (en pas) | $0$ | | | | |
| Tortue (en pas) | $100$ | | | | |

2. De combien de pas l'écart entre les deux lutins diminue-t-il à chaque passage ?
3. Après combien de passages Lapin rattrape-t-il Tortue ? À quelle distance de la ligne de départ ?
4. À la fin des deux scripts, qui est devant, et de combien de pas ?
5. On veut que Lapin rattrape Tortue après exactement $10$ passages, sans changer le script de Lapin. Par quel nombre faut-il remplacer $10$ dans « avancer de 10 pas » du script de Tortue ? Justifier.`,
      solution: `**1.** À chaque passage, Lapin avance de $15$ pas et Tortue de $10$ pas ; Tortue part de $100$ pas. Par exemple, après $10$ passages : Lapin est à $10 \\times 15 = 150$ pas et Tortue à $100 + 10 \\times 10 = 200$ pas.

| Nombre de passages | $0$ | $1$ | $2$ | $3$ | $10$ |
|:---|:---:|:---:|:---:|:---:|:---:|
| Lapin (en pas) | $0$ | $15$ | $30$ | $45$ | $150$ |
| Tortue (en pas) | $100$ | $110$ | $120$ | $130$ | $200$ |

**2.** À chaque passage, Lapin avance de $15$ pas et Tortue de $10$ pas : l'écart diminue de $15 - 10 = 5$ pas.

**3.** L'écart de départ est $100$ pas. Il faut $100 \\div 5 = 20$ passages pour l'annuler.
Distance : Lapin est à $20 \\times 15 = 300$ pas ; Tortue à $100 + 20 \\times 10 = 300$ pas. Ils sont ensemble à **$300$ pas** de la ligne de départ.

**4.** Après $25$ passages : Lapin est à $25 \\times 15 = 375$ pas, Tortue à $100 + 25 \\times 10 = 350$ pas. **Lapin est devant, de $25$ pas.**

**5.** Pour rattraper $100$ pas en $10$ passages, l'écart doit diminuer de $100 \\div 10 = 10$ pas par passage. Tortue doit donc avancer de $15 - 10 = 5$ pas par passage : on remplace $10$ par **$5$**.
Vérification : après $10$ passages, Lapin est à $150$ pas et Tortue à $100 + 10 \\times 5 = 150$ pas.`
    },
    {
      id: "6A1-ds-13",
      title: "Que dit le lutin ?",
      difficulty: 1,
      points: 4,
      statement: `On exécute le script Scratch suivant, qui utilise une variable « nombre » :

\`\`\`scratch
quand drapeau cliqué
mettre [nombre] à 7
ajouter 5 à [nombre]
mettre [nombre] à (nombre * 2)
ajouter -4 à [nombre]
dire (nombre)
\`\`\`

1. Recopier et compléter le tableau en donnant la valeur de « nombre » après chaque instruction.

| Instruction | mettre à $7$ | ajouter $5$ | multiplier par $2$ | ajouter $-4$ |
|:---|:---:|:---:|:---:|:---:|
| Valeur de « nombre » | | | | |

2. Que dit le lutin à la fin ?
3. On remplace la deuxième ligne par « mettre [nombre] à 10 ». Que dit alors le lutin ?
4. Par quel nombre faut-il remplacer $7$ pour que le lutin dise $30$ ? Expliquer la démarche.`,
      solution: `**1.** Les instructions sont exécutées dans l'ordre, de haut en bas :

| Instruction | mettre à $7$ | ajouter $5$ | multiplier par $2$ | ajouter $-4$ |
|:---|:---:|:---:|:---:|:---:|
| Valeur de « nombre » | $7$ | $12$ | $24$ | $20$ |

(« ajouter $-4$ » revient à enlever $4$ : $24 - 4 = 20$.)

**2.** Le lutin dit **$20$**.

**3.** $10 \\to 10 + 5 = 15 \\to 15 \\times 2 = 30 \\to 30 - 4 = 26$. Le lutin dit **$26$**.

**4.** On remonte le programme en faisant les opérations inverses, en partant de la fin :
- avant « ajouter $-4$ », le nombre valait $30 + 4 = 34$ ;
- avant « multiplier par $2$ », il valait $34 \\div 2 = 17$ ;
- avant « ajouter $5$ », il valait $17 - 5 = 12$.
Il faut remplacer $7$ par **$12$**. (Vérification : $12 + 5 = 17$ ; $17 \\times 2 = 34$ ; $34 - 4 = 30$.)`
    },
    {
      id: "6A1-ds-14",
      title: "Les créneaux du château",
      difficulty: 2,
      points: 5,
      statement: `Le lutin est orienté vers la droite, stylo baissé. On exécute le script suivant :

\`\`\`scratch
quand drapeau cliqué
stylo en position d'écriture
répéter 4 fois
    tourner ↺ de 90 degrés
    avancer de 20 pas
    tourner ↻ de 90 degrés
    avancer de 20 pas
    tourner ↻ de 90 degrés
    avancer de 20 pas
    tourner ↺ de 90 degrés
    avancer de 20 pas
\`\`\`

(↺ : tourner vers la gauche ; ↻ : tourner vers la droite.)

1. Lors du premier passage dans la boucle, dans quelles directions successives (haut, bas, gauche, droite) le lutin avance-t-il ?
2. Dessiner à main levée la figure obtenue après le premier passage, puis la figure complète.
3. Quelle est la longueur totale du tracé, en pas ?
4. Dans quelle direction le lutin est-il orienté à la fin ? De combien de pas s'est-il déplacé vers la droite entre son point de départ et son point d'arrivée ?
5. Que faut-il modifier pour tracer $6$ créneaux au lieu de $4$ ?`,
      solution: `**1.** Le lutin regarde vers la droite. Il tourne à gauche et avance vers le **haut**, tourne à droite et avance vers la **droite**, tourne à droite et avance vers le **bas**, puis tourne à gauche et avance vers la **droite**.

**2.** Un passage dessine un « créneau » (une marche qui monte, un palier, une marche qui descend, puis un palier) ; la boucle répète ce motif $4$ fois :

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:320px;"><svg class="geo-svg-figure" viewBox="0 0 290 100" width="290" height="100" style="width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg" role="img"><polyline points="20,70 20,40 50,40 50,70 80,70 80,40 110,40 110,70 140,70 140,40 170,40 170,70 200,70 200,40 230,40 230,70 260,70" fill="none" stroke="#2563eb" stroke-width="2.5"/><circle cx="20" cy="70" r="4" fill="#dc2626"/><text x="20" y="88" text-anchor="middle" font-size="11" fill="currentColor">départ</text><text x="260" y="88" text-anchor="middle" font-size="11" fill="currentColor">arrivée</text></svg></div>

**3.** Chaque passage trace $4 \\times 20 = 80$ pas. Pour $4$ passages : $4 \\times 80 = 320$ pas.

**4.** Dans un passage, le lutin tourne une fois à gauche, deux fois à droite, puis une fois à gauche : les quarts de tour se compensent et il regarde de nouveau **vers la droite**. Il est revenu à la même hauteur qu'au départ.
À chaque passage, il avance vers la droite de $20 + 20 = 40$ pas. Au total : $4 \\times 40 = 160$ pas vers la droite.

**5.** Il suffit de remplacer « répéter 4 fois » par **« répéter 6 fois »**.`
    },
    {
      id: "6A1-ds-15",
      title: "Le compte à rebours",
      difficulty: 3,
      points: 5,
      statement: `On exécute le script suivant, qui utilise une variable $n$ :

\`\`\`scratch
quand drapeau cliqué
mettre [n] à 50
répéter jusqu'à ce que (n < 10)
    dire (n)
    attendre 1 secondes
    ajouter -7 à [n]
dire [Fin !]
\`\`\`

La boucle « répéter jusqu'à ce que » s'arrête dès que la condition $n < 10$ est vraie au moment où elle est testée (c'est-à-dire au début de chaque passage).

1. Recopier et compléter le tableau jusqu'à l'arrêt de la boucle.

| Passage | $1$ | $2$ | $3$ | $\\ldots$ |
|:---|:---:|:---:|:---:|:---:|
| Nombre dit par le lutin | $50$ | | | |

2. Combien de nombres le lutin dit-il avant « Fin ! » ? Combien de temps environ dure le compte à rebours ?
3. Quelle est la valeur de $n$ à la fin du script ?
4. On veut que le lutin dise $50$ ; $45$ ; $40$ ; … ; $10$ ; $5$, puis « Fin ! ». Quelles modifications faut-il faire ? Combien de nombres dira-t-il alors ?`,
      solution: `**1.** $n$ commence à $50$ et diminue de $7$ après chaque nombre dit :

| Passage | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| Nombre dit par le lutin | $50$ | $43$ | $36$ | $29$ | $22$ | $15$ |

Après le $6^\\text{e}$ passage, $n = 15 - 7 = 8$. Au test suivant, $8 < 10$ est vrai : la boucle s'arrête.

**2.** Le lutin dit **$6$ nombres**. Chaque passage dure environ $1$ seconde : le compte à rebours dure environ **$6$ secondes**.

**3.** À la fin, $n = 8$.

**4.** Il faut enlever $5$ à chaque passage : remplacer « ajouter -7 à [n] » par **« ajouter -5 à [n] »**.
Il faut aussi dire $5$ mais pas $0$ : on remplace la condition par **« n < 5 »** (ou « n = 0 »). En effet, après $5$, on obtient $n = 0$ et $0 < 5$ arrête la boucle.
Les nombres dits sont $50$ ; $45$ ; … ; $5$ : ce sont les multiples de $5$ de $5$ à $50$, soit $50 \\div 5 = 10$ nombres.
(Avec la condition « n < 10 » inchangée, le lutin s'arrêterait après $10$ et ne dirait pas $5$.)`
    },
    {
      id: "6A1-ds-16",
      title: "Le jeu du nombre mystère",
      difficulty: 4,
      points: 6,
      statement: `Voici le script d'un jeu : le joueur doit deviner un nombre entier compris entre $1$ et $100$.

\`\`\`scratch
quand drapeau cliqué
mettre [mystère] à 37
mettre [essais] à 0
répéter jusqu'à ce que (réponse = mystère)
    demander [Propose un nombre entre 1 et 100] et attendre
    ajouter 1 à [essais]
    si (réponse > mystère) alors
        dire [Trop grand !]
    si (réponse < mystère) alors
        dire [Trop petit !]
dire (essais)
\`\`\`

(« réponse » contient le dernier nombre tapé par le joueur.)

1. Lina propose successivement $50$, puis $25$, puis $37$. Qu'affiche le lutin après chaque proposition ? Que dit-il à la fin ?
2. Hugo propose successivement $60$, $20$, $45$, $30$, $37$. Recopier et compléter le tableau.

| Proposition | $60$ | $20$ | $45$ | $30$ | $37$ |
|:---|:---:|:---:|:---:|:---:|:---:|
| Message du lutin | | | | | |
| Valeur de « essais » | | | | | |

3. Que représente le nombre dit par le lutin à la fin du jeu ?
4. Un joueur a proposé $50$ (« Trop grand ! ») puis $25$ (« Trop petit ! »). Combien de nombres sont encore possibles ? Quel nombre a-t-il intérêt à proposer ensuite ? Expliquer.
5. Avec ce script, le nombre mystère est toujours $37$. Quelle ligne faut-il modifier pour que le nombre change à chaque partie ? Par quoi la remplacer ?`,
      solution: `**1.** $50 > 37$ : « Trop grand ! ». $25 < 37$ : « Trop petit ! ». $37 = 37$ : aucun des deux messages ; la condition « réponse = mystère » devient vraie, la boucle s'arrête et le lutin dit **$3$** (le nombre d'essais).

**2.**

| Proposition | $60$ | $20$ | $45$ | $30$ | $37$ |
|:---|:---:|:---:|:---:|:---:|:---:|
| Message du lutin | Trop grand ! | Trop petit ! | Trop grand ! | Trop petit ! | (aucun) |
| Valeur de « essais » | $1$ | $2$ | $3$ | $4$ | $5$ |

À la fin, le lutin dit $5$.

**3.** La variable « essais » augmente de $1$ à chaque proposition : le nombre dit à la fin est le **nombre de propositions** faites par le joueur pour trouver le nombre mystère.

**4.** Le nombre est plus petit que $50$ et plus grand que $25$ : il est entre $26$ et $49$. Il reste $49 - 26 + 1 = 24$ nombres possibles.
Le joueur a intérêt à proposer un nombre « au milieu » de ces possibilités, par exemple $37$ ou $38$ : quelle que soit la réponse, il élimine environ la moitié des nombres restants.

**5.** Il faut modifier la ligne « mettre [mystère] à 37 » et la remplacer par **« mettre [mystère] à (nombre aléatoire entre 1 et 100) »**.`
    }
  ]
});

