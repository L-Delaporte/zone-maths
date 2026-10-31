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
    }
  ]
});

