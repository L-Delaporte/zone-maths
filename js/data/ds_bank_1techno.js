/**
 * Banque d'exercices de devoirs surveillés : Première technologique (tronc commun de mathématiques).
 * Format et contraintes : voir js/data/ds_bank_1ere.js (au moins 16 exercices par chapitre, 3 par difficulté).
 */
window.MATHS_DS_BANK = window.MATHS_DS_BANK || {};
Object.assign(window.MATHS_DS_BANK, {
});

// ---- DS 1T1-1T4 (début) ----
Object.assign(window.MATHS_DS_BANK, {
  "1T1": [
    { id: "1T1-ds-01", title: "Proportions et pourcentages", difficulty: 1, points: 4,
      statement: `Les calculs se font sans calculatrice.

1. Calculer $15\\,\\%$ de $260$.
2. Un club compte $80$ membres, dont $28$ sont mineurs. Quelle est la proportion de mineurs, en pourcentage ?
3. Dans un lycée de $250$ élèves, $60\\,\\%$ sont demi-pensionnaires et, parmi eux, $30\\,\\%$ choisissent le menu végétarien.
   a) Combien d'élèves choisissent le menu végétarien ?
   b) Quelle proportion des élèves du lycée cela représente-t-il ?`,
      solution: `**1.** $260 \\times 0{,}15 = 26 + 13 = 39$.

**2.** $\\frac{28}{80} = \\frac{7}{20} = \\frac{35}{100}$ : la proportion de mineurs est de $35\\,\\%$.

**3. a)** Il y a $250 \\times 0{,}6 = 150$ demi-pensionnaires, et $150 \\times 0{,}3 = 45$ élèves choisissent le menu végétarien.

**3. b)** C'est une proportion de proportion : $0{,}6 \\times 0{,}3 = 0{,}18$, soit $18\\,\\%$ des élèves (on vérifie : $\\frac{45}{250} = 0{,}18$).` },
    { id: "1T1-ds-02", title: "Ensembles en extension", difficulty: 1, points: 4,
      statement: `On considère $E = \\{0 ; 1 ; 2 ; \\dots ; 12\\}$, l'ensemble des entiers de $0$ à $12$. On note $A$ l'ensemble des multiples de $3$ appartenant à $E$, et $B$ l'ensemble des éléments de $E$ strictement supérieurs à $7$.

1. Écrire $A$ et $B$ en extension.
2. Déterminer $A \\cap B$ et $A \\cup B$.
3. Déterminer $\\overline{A}$, le complémentaire de $A$ dans $E$, puis son cardinal.`,
      solution: `**1.** $A = \\{0 ; 3 ; 6 ; 9 ; 12\\}$ (attention : $0$ est un multiple de $3$) et $B = \\{8 ; 9 ; 10 ; 11 ; 12\\}$.

**2.** $A \\cap B = \\{9 ; 12\\}$ (éléments communs) et $A \\cup B = \\{0 ; 3 ; 6 ; 8 ; 9 ; 10 ; 11 ; 12\\}$.

**3.** $\\overline{A} = \\{1 ; 2 ; 4 ; 5 ; 7 ; 8 ; 10 ; 11\\}$. Son cardinal est $8$, ce que l'on vérifie : $\\text{Card}(E) - \\text{Card}(A) = 13 - 5 = 8$.` },
    { id: "1T1-ds-03", title: "Coefficients multiplicateurs", difficulty: 1, points: 4,
      statement: `Les calculs se font sans calculatrice.

1. Donner le coefficient multiplicateur associé à une hausse de $12\\,\\%$, puis à une baisse de $35\\,\\%$.
2. Quel taux d'évolution correspond à un coefficient multiplicateur de $1{,}07$ ? de $0{,}94$ ?
3. Un article coûte $45$ euros. Il est soldé à $-20\\,\\%$. Calculer son nouveau prix.
4. Une facture passe de $80$ euros à $92$ euros. Calculer le taux d'évolution.`,
      solution: `**1.** Hausse de $12\\,\\%$ : $CM = 1 + 0{,}12 = 1{,}12$. Baisse de $35\\,\\%$ : $CM = 1 - 0{,}35 = 0{,}65$.

**2.** $1{,}07 = 1 + 0{,}07$ : hausse de $7\\,\\%$. $0{,}94 = 1 - 0{,}06$ : baisse de $6\\,\\%$.

**3.** $45 \\times 0{,}8 = 36$ : le nouveau prix est $36$ euros.

**4.** $\\frac{92 - 80}{80} = \\frac{12}{80} = 0{,}15$ : la facture a augmenté de $15\\,\\%$.` },
    { id: "1T1-ds-04", title: "Connecteurs « et » et « ou »", difficulty: 1, points: 3,
      statement: `On considère les entiers de $1$ à $20$. Pour un tel entier $n$, on note $P$ la proposition « $n$ est pair » et $Q$ la proposition « $n$ est un multiple de $5$ ».

1. Donner la liste des entiers pour lesquels « $P$ et $Q$ » est vraie.
2. Combien d'entiers vérifient « $P$ ou $Q$ » ?
3. Écrire la négation de « $n$ est pair et $n$ est un multiple de $5$ ».`,
      solution: `**1.** « $P$ et $Q$ » : $n$ est à la fois pair et multiple de $5$, donc multiple de $10$ : ce sont $10$ et $20$.

**2.** Il y a $10$ entiers pairs et $4$ multiples de $5$ ($5$, $10$, $15$, $20$) ; deux d'entre eux sont comptés deux fois. Donc $10 + 4 - 2 = 12$ entiers vérifient « $P$ ou $Q$ » (le « ou » est inclusif).

**3.** La négation de « $P$ et $Q$ » est « non $P$ ou non $Q$ » : « $n$ est impair ou $n$ n'est pas un multiple de $5$ ».` },
    { id: "1T1-ds-05", title: "Évolutions successives", difficulty: 2, points: 5,
      statement: `Un prix de $200$ euros augmente de $10\\,\\%$, puis baisse de $10\\,\\%$.

1. Calculer le prix final.
2. Quel est le taux d'évolution global ?
3. Expliquer pourquoi on ne revient pas au prix de départ.
4. Quelle baisse, en pourcentage, aurait permis de revenir exactement à $200$ euros après la hausse ? On donnera la valeur arrondie à $0{,}01\\,\\%$.`,
      solution: `**1.** $200 \\times 1{,}1 \\times 0{,}9 = 220 \\times 0{,}9 = 198$ euros.

**2.** Le coefficient global est $1{,}1 \\times 0{,}9 = 0{,}99$, soit une baisse de $1\\,\\%$.

**3.** La baisse de $10\\,\\%$ s'applique à $220$ euros et non à $200$ euros : elle retire $22$ euros alors que la hausse en avait ajouté $20$.

**4.** Le coefficient réciproque est $\\frac{1}{1{,}1} = \\frac{10}{11} \\approx 0{,}9091$. Il aurait fallu une baisse d'environ $9{,}09\\,\\%$.` },
    { id: "1T1-ds-06", title: "Statut d'une égalité et des lettres", difficulty: 2, points: 4,
      statement: `1. Pour chacune des égalités suivantes, dire s'il s'agit d'une identité, d'une équation ou d'une définition, en justifiant.
   a) $(x - 2)^2 = x^2 - 4x + 4$
   b) $5x - 3 = 12$
   c) $g(x) = x^2 + 1$
2. Résoudre l'équation de la question 1. b).
3. Dans l'expression $y = mx + 2$, qui décrit une famille de droites, quel est le statut de la lettre $m$ ? de la lettre $x$ ?`,
      solution: `**1. a)** C'est une identité : en développant, $(x - 2)^2 = x^2 - 2 \\times 2 \\times x + 4 = x^2 - 4x + 4$ pour tout réel $x$.

**1. b)** C'est une équation : l'égalité n'est vraie que pour certaines valeurs de l'inconnue $x$.

**1. c)** C'est une définition : elle donne un nom, $g$, à la fonction qui à $x$ associe $x^2 + 1$.

**2.** $5x - 3 = 12 \\iff 5x = 15 \\iff x = 3$. La solution est $3$.

**3.** $m$ est un paramètre (il est fixé pour une droite donnée et change d'une droite à l'autre) ; $x$ est une variable.` },
    { id: "1T1-ds-07", title: "Produit cartésien", difficulty: 2, points: 4,
      statement: `Un restaurant propose deux entrées, $E = \\{\\text{salade} ; \\text{soupe}\\}$, et trois plats, $P = \\{\\text{poisson} ; \\text{omelette} ; \\text{gratin}\\}$. Un menu est un couple (entrée ; plat).

1. Écrire en extension l'ensemble $E \\times P$.
2. Combien de menus différents peut-on composer ?
3. Le restaurant ajoute un choix parmi $4$ desserts. Combien de menus (entrée ; plat ; dessert) peut-on alors composer ?
4. Le couple $(\\text{poisson} ; \\text{salade})$ appartient-il à $E \\times P$ ? Justifier.`,
      solution: `**1.** $E \\times P = \\{(\\text{salade} ; \\text{poisson}) ; (\\text{salade} ; \\text{omelette}) ; (\\text{salade} ; \\text{gratin}) ; (\\text{soupe} ; \\text{poisson}) ; (\\text{soupe} ; \\text{omelette}) ; (\\text{soupe} ; \\text{gratin})\\}$.

**2.** $\\text{Card}(E \\times P) = \\text{Card}(E) \\times \\text{Card}(P) = 2 \\times 3 = 6$ menus.

**3.** Pour chacun des $6$ couples, il y a $4$ desserts possibles : $6 \\times 4 = 24$ menus.

**4.** Non : dans un couple de $E \\times P$, la première composante est une entrée. Le couple $(\\text{poisson} ; \\text{salade})$ appartient à $P \\times E$, et l'ordre compte.` },
    { id: "1T1-ds-08", title: "Contre-exemples", difficulty: 2, points: 4,
      statement: `Chacune des affirmations suivantes est fausse. Pour chacune, donner un contre-exemple en justifiant.

1. « Si un entier est divisible par $2$, alors il est divisible par $4$. »
2. « Pour tout réel $x$, $x^2 > 0$. »
3. « La somme de deux nombres impairs est un nombre impair. »
4. « Pour tous réels $a$ et $b$, si $a > b$, alors $a^2 > b^2$. »`,
      solution: `Un contre-exemple est un cas où l'hypothèse est vraie et la conclusion fausse.

**1.** $6$ est divisible par $2$ ($6 = 2 \\times 3$), mais pas par $4$.

**2.** Pour $x = 0$, $x^2 = 0$, qui n'est pas strictement positif.

**3.** $1$ et $3$ sont impairs, mais $1 + 3 = 4$ est pair (la somme de deux impairs est toujours paire).

**4.** $a = 1$ et $b = -2$ : on a bien $a > b$, mais $a^2 = 1$ et $b^2 = 4$, donc $a^2 < b^2$.` },
    { id: "1T1-ds-09", title: "Taux réciproque", difficulty: 3, points: 6,
      statement: `Le cours d'une action a baissé de $40\\,\\%$ en 2024.

1. Donner le coefficient multiplicateur associé à cette baisse.
2. Quel taux de hausse aurait permis, en 2025, de retrouver le cours initial ? Donner la valeur exacte sous forme de fraction, puis une valeur arrondie à $0{,}1\\,\\%$.
3. En réalité, le cours a augmenté de $50\\,\\%$ en 2025. Quel est le taux d'évolution global sur les deux années ?
4. Un journaliste affirme : « après $-40\\,\\%$ puis $+50\\,\\%$, l'action a gagné $10\\,\\%$ ». Commenter.`,
      solution: `**1.** $CM = 1 - 0{,}4 = 0{,}6$.

**2.** Le coefficient réciproque est $\\frac{1}{0{,}6} = \\frac{10}{6} = \\frac{5}{3}$. Le taux est $\\frac{5}{3} - 1 = \\frac{2}{3} \\approx 0{,}667$ : il aurait fallu une hausse d'environ $66{,}7\\,\\%$.

**3.** $0{,}6 \\times 1{,}5 = 0{,}9$ : sur les deux années, le cours a baissé de $10\\,\\%$.

**4.** Le journaliste additionne les pourcentages, ce qui est faux : les évolutions s'appliquent à des valeurs de départ différentes. On multiplie les coefficients, et l'on obtient une baisse de $10\\,\\%$, pas une hausse.` },
    { id: "1T1-ds-10", title: "Réciproque et contraposée", difficulty: 3, points: 6,
      statement: `On considère l'implication : « Si un quadrilatère est un rectangle, alors ses diagonales ont la même longueur. »

1. Cette implication est-elle vraie ?
2. Énoncer sa réciproque. Est-elle vraie ? Justifier.
3. Énoncer sa contraposée. Quelle est sa valeur de vérité ?
4. Compléter avec « nécessaire » ou « suffisante » : « Avoir des diagonales de même longueur est une condition … pour qu'un quadrilatère soit un rectangle, mais ce n'est pas une condition … ».`,
      solution: `**1.** Oui : c'est une propriété du rectangle (ses diagonales sont de même longueur et se coupent en leur milieu).

**2.** Réciproque : « Si un quadrilatère a des diagonales de même longueur, alors c'est un rectangle. » Elle est fausse : un trapèze isocèle non rectangle a des diagonales de même longueur ; c'est un contre-exemple.

**3.** Contraposée : « Si les diagonales d'un quadrilatère n'ont pas la même longueur, alors ce n'est pas un rectangle. » Elle est vraie, comme l'implication de départ.

**4.** C'est une condition **nécessaire** (tout rectangle la vérifie) mais pas **suffisante** (la réciproque est fausse).` },
    { id: "1T1-ds-11", title: "Dénombrer avec des ensembles", difficulty: 3, points: 6,
      statement: `On interroge $200$ personnes : $120$ possèdent un vélo, $90$ possèdent une voiture et $40$ ne possèdent ni l'un ni l'autre. On note $V$ l'ensemble des personnes qui possèdent un vélo et $T$ celles qui possèdent une voiture.

1. Calculer $\\text{Card}(V \\cup T)$.
2. En déduire le nombre de personnes qui possèdent un vélo et une voiture.
3. Combien de personnes possèdent un vélo mais pas de voiture ?
4. Quelle proportion des personnes interrogées possède exactement un des deux moyens de transport ?`,
      solution: `**1.** $\\text{Card}(V \\cup T) = 200 - 40 = 160$ : ce sont les personnes qui possèdent au moins l'un des deux.

**2.** $\\text{Card}(V \\cap T) = \\text{Card}(V) + \\text{Card}(T) - \\text{Card}(V \\cup T) = 120 + 90 - 160 = 50$.

**3.** $120 - 50 = 70$ personnes possèdent un vélo sans voiture.

**4.** Voiture sans vélo : $90 - 50 = 40$. Exactement un des deux : $70 + 40 = 110$ personnes, soit $\\frac{110}{200} = 0{,}55 = 55\\,\\%$.` },
    { id: "1T1-ds-12", title: "Intervalles et ensembles de réels", difficulty: 3, points: 5,
      statement: `On considère les intervalles $I = [-2 ; 5[$ et $J = ]1 ; 8]$.

1. Représenter $I$ et $J$ sur une même droite graduée.
2. Déterminer $I \\cap J$ et $I \\cup J$.
3. Déterminer le complémentaire de $I$ dans $\\mathbb{R}$.
4. Le nombre $5$ appartient-il à $I \\cap J$ ? à $I \\cup J$ ? Justifier.`,
      solution: `**1.** $I$ va de $-2$ (inclus) à $5$ (exclu) ; $J$ va de $1$ (exclu) à $8$ (inclus).

**2.** $I \\cap J = ]1 ; 5[$ : les réels qui sont à la fois dans $I$ et dans $J$. $I \\cup J = [-2 ; 8]$ : les deux intervalles se chevauchent, donc la réunion est un seul intervalle.

**3.** $\\overline{I} = ]-\\infty ; -2[ \\cup [5 ; +\\infty[$.

**4.** $5 \\notin I$, donc $5 \\notin I \\cap J$. Mais $5 \\in J$, donc $5 \\in I \\cup J$.` },
    { id: "1T1-ds-13", title: "Chiffre d'affaires et évolutions", difficulty: 4, points: 8,
      statement: `Le chiffre d'affaires d'un magasin était de $400\\,000$ euros en 2023. Il a augmenté de $15\\,\\%$ en 2024, puis baissé de $20\\,\\%$ en 2025.

1. Calculer le chiffre d'affaires en 2025.
2. Calculer le taux d'évolution global entre 2023 et 2025.
3. Quel taux d'évolution faudrait-il en 2026 pour revenir au chiffre d'affaires de 2023 ? Arrondir à $0{,}1\\,\\%$.
4. En 2025, $35\\,\\%$ du chiffre d'affaires est réalisé en ligne, et $40\\,\\%$ des ventes en ligne sont faites sur téléphone. Quelle proportion du chiffre d'affaires total les ventes sur téléphone représentent-elles ? Quel montant cela représente-t-il ?`,
      solution: `**1.** $400\\,000 \\times 1{,}15 \\times 0{,}8 = 460\\,000 \\times 0{,}8 = 368\\,000$ euros.

**2.** Coefficient global : $1{,}15 \\times 0{,}8 = 0{,}92$, soit une baisse de $8\\,\\%$.

**3.** Il faut multiplier par $\\frac{400\\,000}{368\\,000} = \\frac{25}{23} \\approx 1{,}087$ : une hausse d'environ $8{,}7\\,\\%$ (et non de $8\\,\\%$).

**4.** Proportion de proportion : $0{,}35 \\times 0{,}4 = 0{,}14$, soit $14\\,\\%$ du chiffre d'affaires. Montant : $368\\,000 \\times 0{,}14 = 51\\,520$ euros.` },
    { id: "1T1-ds-14", title: "Conditions nécessaires et suffisantes", difficulty: 4, points: 8,
      statement: `Dans chaque cas, dire si la condition $P$ est nécessaire, suffisante, nécessaire et suffisante, ou ni l'un ni l'autre pour $Q$. Justifier chaque réponse par une démonstration ou un contre-exemple.

1. $x$ est un réel ; $P$ : « $x = 2$ » ; $Q$ : « $x^2 = 4$ ».
2. $n$ est un entier ; $P$ : « $n$ est un multiple de $4$ » ; $Q$ : « $n$ est pair ».
3. $x$ est un réel ; $P$ : « $x > 0$ » ; $Q$ : « $x^2 > 0$ ».
4. $n$ est un entier ; $P$ : « $n$ est un multiple de $2$ et de $3$ » ; $Q$ : « $n$ est un multiple de $6$ ».`,
      solution: `**1.** Si $x = 2$, alors $x^2 = 4$ : $P$ est suffisante. Mais $x = -2$ vérifie $Q$ sans vérifier $P$ : $P$ n'est pas nécessaire.

**2.** Si $n = 4k$, alors $n = 2 \\times 2k$ est pair : $P$ est suffisante. $6$ est pair mais n'est pas un multiple de $4$ : $P$ n'est pas nécessaire.

**3.** Si $x > 0$, alors $x^2 > 0$ : $P$ est suffisante. $x = -1$ vérifie $x^2 = 1 > 0$ avec $x < 0$ : $P$ n'est pas nécessaire.

**4.** Si $n$ est multiple de $6$, $n = 6k = 2 \\times 3k = 3 \\times 2k$ : il est multiple de $2$ et de $3$. Réciproquement, un multiple de $2$ et de $3$ est un multiple de $6$ ($2$ et $3$ n'ont pas de diviseur commun autre que $1$). $P$ est nécessaire et suffisante : $P$ et $Q$ sont équivalentes.` },
    { id: "1T1-ds-15", title: "Multiples et logique", difficulty: 4, points: 7,
      statement: `On note $E$ l'ensemble des entiers de $1$ à $30$, $A$ l'ensemble des multiples de $4$ appartenant à $E$, et $B$ l'ensemble des multiples de $6$ appartenant à $E$.

1. Écrire $A$ et $B$ en extension et donner leurs cardinaux.
2. Déterminer $A \\cap B$. Quelle propriété ont ses éléments ?
3. Calculer $\\text{Card}(A \\cup B)$, puis le nombre d'éléments de $E$ qui ne sont multiples ni de $4$ ni de $6$.
4. L'affirmation « tout entier multiple de $4$ et de $6$ est un multiple de $24$ » est-elle vraie ? Justifier.`,
      solution: `**1.** $A = \\{4 ; 8 ; 12 ; 16 ; 20 ; 24 ; 28\\}$, $\\text{Card}(A) = 7$ ; $B = \\{6 ; 12 ; 18 ; 24 ; 30\\}$, $\\text{Card}(B) = 5$.

**2.** $A \\cap B = \\{12 ; 24\\}$ : ce sont les multiples de $12$ de $E$.

**3.** $\\text{Card}(A \\cup B) = 7 + 5 - 2 = 10$. Donc $30 - 10 = 20$ entiers ne sont multiples ni de $4$ ni de $6$.

**4.** Elle est fausse : $12$ est multiple de $4$ et de $6$, mais pas de $24$. Un multiple commun de $4$ et de $6$ est un multiple de $12$, pas forcément de $24$.` },
    { id: "1T1-ds-16", title: "Statut des lettres dans un tarif", difficulty: 4, points: 7,
      statement: `Une plateforme de location facture un abonnement de $a$ euros par mois, plus $0{,}2$ euro par film regardé. Le coût mensuel, en euros, est $C = a + 0{,}2n$, où $n$ est le nombre de films regardés.

1. Quel est le statut de chacune des lettres $C$, $a$ et $n$ ?
2. On prend $a = 15$. Calculer $C$ pour $n = 30$.
3. Toujours avec $a = 15$, résoudre l'équation $15 + 0{,}2n = 27$ et interpréter le résultat.
4. Montrer que, pour tous $a$ et $n$, $0{,}2(n + 10) + a = (a + 2) + 0{,}2n$. Est-ce une identité ou une équation ? Interpréter.`,
      solution: `**1.** $n$ est la variable (le nombre de films), $C$ est la grandeur calculée (elle dépend de $n$), $a$ est un paramètre : fixé pour un abonnement donné, il peut changer d'une offre à l'autre.

**2.** $C = 15 + 0{,}2 \\times 30 = 15 + 6 = 21$ euros.

**3.** $15 + 0{,}2n = 27 \\iff 0{,}2n = 12 \\iff n = 60$. Un coût de $27$ euros correspond à $60$ films.

**4.** $0{,}2(n + 10) + a = 0{,}2n + 2 + a = (a + 2) + 0{,}2n$. L'égalité est vraie pour toutes les valeurs : c'est une identité. Regarder $10$ films de plus revient à payer $2$ euros de plus.` }
  ],
  "1T2": [
    { id: "1T2-ds-01", title: "Listes et indices", difficulty: 1, points: 4,
      statement: `On considère la liste \`L = [8, 3, 11, 6, 2]\`.

1. Que vaut \`len(L)\` ?
2. Que valent \`L[0]\`, \`L[3]\` et \`L[-1]\` ?
3. On exécute \`L.append(9)\`. Écrire la liste obtenue et donner sa longueur.
4. Écrire l'instruction qui remplace la valeur $11$ par $10$ dans la liste.`,
      solution: `**1.** La liste contient $5$ éléments : \`len(L)\` vaut $5$.

**2.** Les indices commencent à $0$ : \`L[0]\` vaut $8$, \`L[3]\` vaut $6$ et \`L[-1]\`, le dernier élément, vaut $2$.

**3.** \`append\` ajoute à la fin : \`L = [8, 3, 11, 6, 2, 9]\`, de longueur $6$.

**4.** La valeur $11$ est à l'indice $2$ : \`L[2] = 10\`.` },
    { id: "1T2-ds-02", title: "Affectations successives", difficulty: 1, points: 4,
      statement: `On considère le programme suivant.
\`\`\`python
a = 3
b = 4
a = a + b
b = a - b
a = a - b
\`\`\`

1. Recopier et compléter un tableau donnant les valeurs de \`a\` et \`b\` après chaque ligne.
2. Que valent \`a\` et \`b\` à la fin ?
3. Que fait ce programme ? Le vérifier avec \`a = 10\` et \`b = -2\` au départ.`,
      solution: `**1.** Ligne 1 : \`a = 3\`. Ligne 2 : \`b = 4\`. Ligne 3 : \`a = 3 + 4 = 7\`. Ligne 4 : \`b = 7 - 4 = 3\`. Ligne 5 : \`a = 7 - 3 = 4\`.

**2.** À la fin, \`a\` vaut $4$ et \`b\` vaut $3$.

**3.** Le programme échange les valeurs de \`a\` et \`b\`. Avec $10$ et $-2$ : \`a\` devient $8$, puis \`b = 8 - (-2) = 10\`, puis \`a = 8 - 10 = -2\`. On obtient bien \`a = -2\` et \`b = 10\`.` },
    { id: "1T2-ds-03", title: "Boucle for et range", difficulty: 1, points: 4,
      statement: `1. Donner les valeurs prises par \`k\` dans \`for k in range(5)\`, puis dans \`for k in range(2, 6)\`.
2. Qu'affiche le programme suivant ?
\`\`\`python
for k in range(1, 6):
    print(3 * k)
\`\`\`
3. Écrire une boucle qui affiche les nombres $10$, $20$, $30$, $40$ et $50$.`,
      solution: `**1.** \`range(5)\` donne $0$, $1$, $2$, $3$, $4$ ($5$ valeurs, la borne $5$ est exclue). \`range(2, 6)\` donne $2$, $3$, $4$, $5$.

**2.** \`k\` prend les valeurs de $1$ à $5$ ; le programme affiche $3$, $6$, $9$, $12$ et $15$, un nombre par ligne.

**3.** Par exemple :
\`\`\`python
for k in range(1, 6):
    print(10 * k)
\`\`\`
On fait varier \`k\` de $1$ à $5$ (borne $6$ exclue) et on affiche $10k$.` },
    { id: "1T2-ds-04", title: "Fonctions", difficulty: 1, points: 4,
      statement: `Un service de location de vélos facture $4$ euros de frais fixes, plus $2{,}5$ euros par heure. On définit :
\`\`\`python
def prix(n):
    return 2.5 * n + 4
\`\`\`

1. Que renvoie \`prix(10)\` ? Interpréter.
2. Que renvoie \`prix(0)\` ? Interpréter.
3. Écrire une fonction \`perimetre(L, l)\` qui renvoie le périmètre d'un rectangle de longueur \`L\` et de largeur \`l\`.`,
      solution: `**1.** \`prix(10)\` renvoie $2{,}5 \\times 10 + 4 = 29$ : une location de $10$ heures coûte $29$ euros.

**2.** \`prix(0)\` renvoie $4$ : ce sont les frais fixes, payés même sans utiliser le vélo.

**3.**
\`\`\`python
def perimetre(L, l):
    return 2 * (L + l)
\`\`\`
La fonction reçoit deux paramètres et renvoie le résultat avec \`return\` ; par exemple \`perimetre(5, 3)\` renvoie $16$.` },
    { id: "1T2-ds-05", title: "Accumulateur de somme", difficulty: 2, points: 5,
      statement: `On considère le programme suivant.
\`\`\`python
s = 0
for k in range(1, 11):
    s = s + k
\`\`\`

1. Quel est le rôle de la variable \`s\` ?
2. Que vaut \`s\` à la fin du programme ?
3. Modifier une ligne pour calculer la somme des carrés des entiers de $1$ à $10$. Quel résultat obtient-on ?
4. Écrire un programme qui calcule la moyenne de la liste \`notes = [12, 9, 15, 10, 14]\` et donner sa valeur.`,
      solution: `**1.** \`s\` est un accumulateur : elle est initialisée à $0$ et on lui ajoute \`k\` à chaque tour.

**2.** $s = 1 + 2 + \\dots + 10 = \\frac{10 \\times 11}{2} = 55$.

**3.** On remplace la ligne \`s = s + k\` par \`s = s + k * k\`. On obtient $1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 = 385$.

**4.**
\`\`\`python
s = 0
for x in notes:
    s = s + x
m = s / len(notes)
\`\`\`
La somme vaut $60$ et il y a $5$ notes : la moyenne est $12$.` },
    { id: "1T2-ds-06", title: "Compteur", difficulty: 2, points: 5,
      statement: `Les températures maximales d'une semaine sont rangées dans la liste \`T = [14, 18, 21, 25, 19, 23, 16]\`.
\`\`\`python
c = 0
for t in T:
    if t > 20:
        c = c + 1
\`\`\`

1. Que vaut \`c\` à la fin du programme ? Que représente cette valeur ?
2. Modifier le programme pour compter les jours où la température est d'au moins $18$ degrés. Quel résultat obtient-on ?
3. En déduire la proportion de jours de la semaine où la température a atteint au moins $18$ degrés.`,
      solution: `**1.** Les températures strictement supérieures à $20$ sont $21$, $25$ et $23$ : \`c\` vaut $3$. C'est le nombre de jours où il a fait plus de $20$ degrés.

**2.** On remplace la condition par \`if t >= 18:\`. Les valeurs retenues sont $18$, $21$, $25$, $19$ et $23$ : \`c\` vaut $5$.

**3.** La proportion est $\\frac{5}{7} \\approx 0{,}71$, soit environ $71\\,\\%$ des jours. En Python, on l'obtient avec \`c / len(T)\`.` },
    { id: "1T2-ds-07", title: "Construire des listes", difficulty: 2, points: 5,
      statement: `1. Quelle liste \`L\` obtient-on avec le programme suivant ?
\`\`\`python
L = []
for k in range(5):
    L.append(k * k)
\`\`\`
2. Écrire une instruction qui construit la même liste en compréhension.
3. Quelle liste obtient-on avec \`[x for x in [3, 8, 12, 5, 20] if x % 2 == 0]\` ? On rappelle que \`x % 2\` est le reste de la division de \`x\` par $2$.
4. Écrire en compréhension la liste des multiples de $5$ de $5$ à $50$.`,
      solution: `**1.** \`k\` prend les valeurs $0$ à $4$ et on ajoute $k^2$ à chaque tour : \`L = [0, 1, 4, 9, 16]\`.

**2.** \`L = [k * k for k in range(5)]\`.

**3.** On ne garde que les éléments dont le reste par $2$ est nul, c'est-à-dire les nombres pairs : \`[8, 12, 20]\`.

**4.** \`[5 * k for k in range(1, 11)]\` : \`k\` va de $1$ à $10$, ce qui donne $5$, $10$, …, $50$.` },
    { id: "1T2-ds-08", title: "Accumulateur de produit", difficulty: 2, points: 5,
      statement: `On considère la fonction suivante.
\`\`\`python
def produit(n):
    p = 1
    for k in range(1, n + 1):
        p = p * k
    return p
\`\`\`

1. Calculer \`produit(4)\` en détaillant les tours de boucle.
2. Pourquoi la variable \`p\` est-elle initialisée à $1$ et non à $0$ ?
3. Que renvoie \`produit(6)\` ?
4. Écrire une fonction \`puissance(a, n)\` qui renvoie $a^n$ à l'aide d'une boucle, sans utiliser \`**\`.`,
      solution: `**1.** $p = 1$ ; $k = 1$ : $p = 1$ ; $k = 2$ : $p = 2$ ; $k = 3$ : $p = 6$ ; $k = 4$ : $p = 24$. \`produit(4)\` renvoie $24$.

**2.** Si \`p\` valait $0$ au départ, tous les produits seraient nuls : $1$ est l'élément neutre de la multiplication.

**3.** $1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6 = 720$.

**4.**
\`\`\`python
def puissance(a, n):
    p = 1
    for k in range(n):
        p = p * a
    return p
\`\`\`
La boucle multiplie $n$ fois par $a$.` },
    { id: "1T2-ds-09", title: "Seuil avec une boucle while", difficulty: 3, points: 6,
      statement: `Un capital de $1000$ euros est placé à $3\\,\\%$ par an (intérêts composés).
\`\`\`python
u = 1000
n = 0
while u < 1200:
    u = u * 1.03
    n = n + 1
print(n)
\`\`\`

1. Expliquer le rôle de chacune des variables \`u\` et \`n\`.
2. Recopier et compléter le tableau des valeurs successives de \`u\`, arrondies au centime, jusqu'à l'arrêt de la boucle.
3. Qu'affiche le programme ? Interpréter.
4. Quelle ligne faut-il modifier pour savoir au bout de combien d'années le capital dépasse $1500$ euros ?`,
      solution: `**1.** \`u\` est le capital (multiplié par $1{,}03$ chaque année) et \`n\` compte les années écoulées.

**2.** $n = 0$ : $1000$ ; $1$ : $1030$ ; $2$ : $1060{,}90$ ; $3$ : $1092{,}73$ ; $4$ : $1125{,}51$ ; $5$ : $1159{,}27$ ; $6$ : $1194{,}05$ ; $7$ : $1229{,}87$. La condition \`u < 1200\` devient fausse pour $n = 7$.

**3.** Le programme affiche $7$ : le capital dépasse $1200$ euros pour la première fois au bout de $7$ ans.

**4.** Il suffit de remplacer la condition par \`while u < 1500:\`.` },
    { id: "1T2-ds-10", title: "Sélection de données", difficulty: 3, points: 6,
      statement: `Les ventes quotidiennes d'une boulangerie sur une semaine sont \`ventes = [120, 85, 140, 60, 95, 150, 120]\`.

1. Écrire une instruction qui construit la liste \`bons\` des ventes supérieures ou égales à $100$, puis donner cette liste.
2. Combien de jours les ventes ont-elles atteint au moins $100$ ?
3. Écrire un programme qui calcule la moyenne des ventes, puis donner sa valeur.
4. Écrire une fonction \`maximum(L)\` qui renvoie le plus grand élément d'une liste \`L\` non vide, sans utiliser \`max\`.`,
      solution: `**1.** \`bons = [v for v in ventes if v >= 100]\` donne \`[120, 140, 150, 120]\`.

**2.** \`len(bons)\` vaut $4$ : $4$ jours.

**3.**
\`\`\`python
s = 0
for v in ventes:
    s = s + v
m = s / len(ventes)
\`\`\`
La somme vaut $770$, pour $7$ jours : la moyenne est $110$.

**4.**
\`\`\`python
def maximum(L):
    m = L[0]
    for x in L:
        if x > m:
            m = x
    return m
\`\`\`
On garde en mémoire la plus grande valeur rencontrée ; ici \`maximum(ventes)\` renvoie $150$.` },
    { id: "1T2-ds-11", title: "Simulation d'une épreuve de Bernoulli", difficulty: 3, points: 6,
      statement: `Une machine produit des pièces ; chaque pièce est défectueuse avec la probabilité $0{,}04$, indépendamment des autres.
\`\`\`python
from random import random

def piece():
    return random() < 0.04
\`\`\`

1. Quelles valeurs peut renvoyer \`piece()\` ? Avec quelle probabilité renvoie-t-elle \`True\` ?
2. Écrire une fonction \`nb_defauts(n)\` qui simule la production de \`n\` pièces et renvoie le nombre de pièces défectueuses.
3. Vers quelle valeur le résultat de \`nb_defauts(5000)\` est-il en général proche ?
4. Deux exécutions de \`nb_defauts(5000)\` donnent $193$ et $211$. Est-ce anormal ?`,
      solution: `**1.** \`piece()\` renvoie \`True\` (pièce défectueuse) ou \`False\`. Comme \`random()\` est un nombre au hasard de $[0 ; 1[$, le test est vrai avec la probabilité $0{,}04$.

**2.**
\`\`\`python
def nb_defauts(n):
    c = 0
    for i in range(n):
        if piece():
            c = c + 1
    return c
\`\`\`

**3.** En moyenne, $4\\,\\%$ des pièces sont défectueuses : le résultat est en général proche de $5000 \\times 0{,}04 = 200$.

**4.** Non : la simulation est aléatoire, le résultat varie d'une exécution à l'autre ; les fréquences $0{,}0386$ et $0{,}0422$ restent proches de $0{,}04$.` },
    { id: "1T2-ds-12", title: "Fonctions et suites", difficulty: 3, points: 6,
      statement: `On considère les deux fonctions suivantes.
\`\`\`python
def u(n):
    return 5 + 3 * n

def v(n):
    p = 2
    for k in range(n):
        p = p * 3
    return p
\`\`\`

1. Calculer \`u(4)\` et \`v(3)\`.
2. Exprimer \`v(n)\` en fonction de \`n\`.
3. Quelle liste obtient-on avec \`[u(n) for n in range(5)]\` ? Quelle est la nature de la suite des valeurs \`u(n)\` ?
4. Écrire une boucle qui calcule la somme $v(0) + v(1) + \\dots + v(4)$, puis donner sa valeur.`,
      solution: `**1.** \`u(4)\` $= 5 + 12 = 17$. Pour \`v(3)\`, \`p\` vaut $2$, puis $6$, $18$, $54$ : \`v(3)\` vaut $54$.

**2.** On multiplie $n$ fois $2$ par $3$ : $v(n) = 2 \\times 3^n$.

**3.** \`[5, 8, 11, 14, 17]\` : on ajoute $3$ à chaque fois, la suite est arithmétique de raison $3$ et de premier terme $5$.

**4.**
\`\`\`python
s = 0
for n in range(5):
    s = s + v(n)
\`\`\`
$s = 2 + 6 + 18 + 54 + 162 = 242$.` },
    { id: "1T2-ds-13", title: "Corriger un programme", difficulty: 4, points: 8,
      statement: `Un élève veut écrire une fonction qui renvoie la moyenne d'une liste de nombres. Il propose :
\`\`\`python
def moyenne(L):
    s = 1
    for i in range(1, len(L)):
        s = s + L[i]
    return s / len(L)
\`\`\`

1. Que renvoie \`moyenne([10, 14, 12])\` ? Quelle est la vraie moyenne de cette liste ?
2. Repérer les deux erreurs du programme et expliquer leurs effets.
3. Écrire une version corrigée de la fonction.
4. Écrire une fonction \`nb_sup_moyenne(L)\` qui renvoie le nombre d'éléments de \`L\` strictement supérieurs à la moyenne.`,
      solution: `**1.** \`s\` part de $1$, puis \`i\` prend les valeurs $1$ et $2$ : $s = 1 + 14 + 12 = 27$, et la fonction renvoie $\\frac{27}{3} = 9$. La vraie moyenne est $\\frac{10 + 14 + 12}{3} = 12$.

**2.** L'accumulateur doit être initialisé à $0$ (et non à $1$) ; \`range(1, len(L))\` oublie l'élément d'indice $0$ : il faut \`range(len(L))\`.

**3.**
\`\`\`python
def moyenne(L):
    s = 0
    for i in range(len(L)):
        s = s + L[i]
    return s / len(L)
\`\`\`

**4.**
\`\`\`python
def nb_sup_moyenne(L):
    m = moyenne(L)
    c = 0
    for x in L:
        if x > m:
            c = c + 1
    return c
\`\`\`
Pour \`[10, 14, 12]\`, elle renvoie $1$.` },
    { id: "1T2-ds-14", title: "Comparer deux placements", difficulty: 4, points: 8,
      statement: `On place $2000$ euros selon deux formules. Formule A : on ajoute $100$ euros par an. Formule B : le capital augmente de $4\\,\\%$ par an. On note $a(n)$ et $b(n)$ les capitaux au bout de $n$ années.
\`\`\`python
a = 2000
b = 2000
n = 0
while b <= a:
    a = a + 100
    b = b * 1.04
    n = n + 1
print(n)
\`\`\`

1. Exprimer $a(n)$ et $b(n)$ en fonction de $n$.
2. Calculer $a(1)$, $b(1)$, $a(2)$ et $b(2)$. Quelle formule est la plus avantageuse au début ?
3. Que permet de déterminer ce programme ?
4. À l'aide de la calculatrice, on obtient $b(11) \\approx 3078{,}91$ et $b(12) \\approx 3202{,}06$. Qu'affiche le programme ?`,
      solution: `**1.** $a(n) = 2000 + 100n$ (croissance linéaire) et $b(n) = 2000 \\times 1{,}04^n$ (croissance exponentielle).

**2.** $a(1) = 2100$ et $b(1) = 2000 \\times 1{,}04 = 2080$ ; $a(2) = 2200$ et $b(2) = 2080 \\times 1{,}04 = 2163{,}20$. Au début, la formule A est plus avantageuse.

**3.** La boucle continue tant que $b \\leqslant a$ : le programme affiche le premier nombre d'années au bout duquel la formule B devient strictement plus avantageuse.

**4.** $a(11) = 3100 > 3078{,}91$ mais $a(12) = 3200 < 3202{,}06$ : le programme affiche $12$.` },
    { id: "1T2-ds-15", title: "Simulation d'un dé", difficulty: 4, points: 7,
      statement: `On simule des lancers d'un dé équilibré à six faces. On rappelle que \`randint(1, 6)\` renvoie un entier au hasard entre $1$ et $6$ inclus.

1. Écrire une fonction \`freq_six(n)\` qui simule \`n\` lancers et renvoie la fréquence d'apparition du $6$.
2. De quelle valeur \`freq_six(6000)\` est-elle en général proche ? Donner la valeur exacte puis une valeur approchée à $0{,}001$ près.
3. On veut maintenant compter les lancers nécessaires pour obtenir un premier $6$. Écrire une fonction \`premier_six()\` utilisant une boucle \`while\`.
4. Pourquoi ne peut-on pas utiliser une boucle \`for\` à la question 3 ?`,
      solution: `**1.**
\`\`\`python
from random import randint

def freq_six(n):
    c = 0
    for i in range(n):
        if randint(1, 6) == 6:
            c = c + 1
    return c / n
\`\`\`

**2.** La probabilité d'obtenir $6$ est $\\frac{1}{6} \\approx 0{,}167$ : la fréquence est en général proche de cette valeur.

**3.**
\`\`\`python
def premier_six():
    n = 1
    while randint(1, 6) != 6:
        n = n + 1
    return n
\`\`\`

**4.** Le nombre de lancers nécessaires n'est pas connu à l'avance (il est aléatoire) : seule une boucle \`while\` permet de répéter « tant que » le $6$ n'est pas sorti.` },
    { id: "1T2-ds-16", title: "Analyse de températures", difficulty: 4, points: 8,
      statement: `Les températures maximales relevées pendant deux semaines sont rangées dans la liste :
\`T = [18, 21, 24, 26, 23, 19, 17, 20, 25, 27, 22, 22, 21, 23]\`.

1. Écrire un programme qui calcule la moyenne \`m\` des températures à l'aide d'un accumulateur, puis donner sa valeur.
2. Écrire un programme qui compte les jours où la température est strictement supérieure à la moyenne. Quel résultat obtient-on ?
3. Écrire une instruction en compréhension qui donne la liste des **indices** des jours où la température dépasse strictement $25$ degrés. Quelle liste obtient-on ?
4. Écrire une boucle qui construit la liste des écarts entre deux jours consécutifs, \`T[i + 1] - T[i]\`. Combien cette liste contient-elle d'éléments ?`,
      solution: `**1.**
\`\`\`python
s = 0
for t in T:
    s = s + t
m = s / len(T)
\`\`\`
La somme vaut $308$ et il y a $14$ jours : $m = 22$.

**2.** Avec un compteur et le test \`if t > m:\`, on retient $24$, $26$, $23$, $25$, $27$ et $23$ : le résultat est $6$.

**3.** \`[i for i in range(len(T)) if T[i] > 25]\` donne \`[3, 9]\` (températures $26$ et $27$).

**4.**
\`\`\`python
ecarts = []
for i in range(len(T) - 1):
    ecarts.append(T[i + 1] - T[i])
\`\`\`
Il y a $13$ écarts pour $14$ jours : la boucle s'arrête à \`len(T) - 2\` pour ne pas sortir de la liste.` }
  ],
  "1T3": [
    { id: "1T3-ds-01", title: "Suite arithmétique", difficulty: 1, points: 4,
      statement: `La suite $(u_n)$ est arithmétique, de premier terme $u_0 = 12$ et de raison $r = -5$.

1. Calculer $u_1$, $u_2$ et $u_3$.
2. Exprimer $u_n$ en fonction de $n$.
3. Calculer $u_{20}$.
4. Quel est le sens de variation de la suite $(u_n)$ ? Justifier.`,
      solution: `**1.** On ajoute $-5$ à chaque étape : $u_1 = 7$, $u_2 = 2$, $u_3 = -3$.

**2.** Pour une suite arithmétique, $u_n = u_0 + nr$, donc $u_n = 12 - 5n$.

**3.** $u_{20} = 12 - 5 \\times 20 = 12 - 100 = -88$.

**4.** La raison $r = -5$ est négative : la suite est décroissante (on retire $5$ à chaque terme).` },
    { id: "1T3-ds-02", title: "Suite géométrique", difficulty: 1, points: 4,
      statement: `La suite $(v_n)$ est géométrique, de premier terme $v_0 = 3$ et de raison $q = 2$.

1. Calculer $v_1$, $v_2$, $v_3$ et $v_4$.
2. Exprimer $v_n$ en fonction de $n$.
3. Calculer $v_{10}$.
4. Représenter les cinq premiers termes dans un repère. Les points sont-ils alignés ?`,
      solution: `**1.** On multiplie par $2$ à chaque étape : $v_1 = 6$, $v_2 = 12$, $v_3 = 24$, $v_4 = 48$.

**2.** Pour une suite géométrique, $v_n = v_0 \\times q^n$, donc $v_n = 3 \\times 2^n$.

**3.** $v_{10} = 3 \\times 2^{10} = 3 \\times 1024 = 3072$.

**4.** Les points $(0 ; 3)$, $(1 ; 6)$, $(2 ; 12)$, $(3 ; 24)$, $(4 ; 48)$ ne sont pas alignés : les écarts entre termes successifs ($3$, $6$, $12$, $24$) ne sont pas constants. La croissance est exponentielle, pas linéaire.` },
    { id: "1T3-ds-03", title: "Formule explicite et relation de récurrence", difficulty: 1, points: 4,
      statement: `1. On définit la suite $(u_n)$ par $u_n = n^2 - 2n + 3$ pour tout entier naturel $n$. Calculer $u_0$, $u_1$, $u_2$ et $u_5$.
2. On définit la suite $(w_n)$ par $w_0 = 2$ et, pour tout entier naturel $n$, $w_{n+1} = 3w_n - 1$. Calculer $w_1$, $w_2$ et $w_3$.
3. Pour laquelle des deux suites peut-on calculer directement le terme de rang $50$ ? Expliquer.`,
      solution: `**1.** $u_0 = 3$ ; $u_1 = 1 - 2 + 3 = 2$ ; $u_2 = 4 - 4 + 3 = 3$ ; $u_5 = 25 - 10 + 3 = 18$.

**2.** $w_1 = 3 \\times 2 - 1 = 5$ ; $w_2 = 3 \\times 5 - 1 = 14$ ; $w_3 = 3 \\times 14 - 1 = 41$.

**3.** Pour $(u_n)$, définie par une formule explicite : il suffit de remplacer $n$ par $50$. Pour $(w_n)$, définie par récurrence, il faut calculer tous les termes précédents, de proche en proche.` },
    { id: "1T3-ds-04", title: "Modéliser une situation", difficulty: 1, points: 4,
      statement: `1. Un abonnement coûte $50$ euros la première année, puis augmente de $2$ euros chaque année. On note $a_n$ son prix l'année $n$, avec $a_0 = 50$. Exprimer $a_n$ en fonction de $n$ et calculer $a_5$.
2. Une ville compte $400$ arbres en 2025. Ce nombre augmente de $5\\,\\%$ par an. On note $b_n$ le nombre d'arbres en $2025 + n$. Préciser la nature de la suite $(b_n)$, exprimer $b_n$ en fonction de $n$ et calculer $b_2$.`,
      solution: `**1.** On ajoute $2$ chaque année : la suite $(a_n)$ est arithmétique de raison $2$, donc $a_n = 50 + 2n$ et $a_5 = 50 + 10 = 60$ euros.

**2.** Augmenter de $5\\,\\%$, c'est multiplier par $1{,}05$ : la suite $(b_n)$ est géométrique de raison $1{,}05$ et de premier terme $400$. Donc $b_n = 400 \\times 1{,}05^n$ et $b_2 = 400 \\times 1{,}1025 = 441$ arbres.` },
    { id: "1T3-ds-05", title: "Reconnaître la nature d'une suite", difficulty: 2, points: 5,
      statement: `Pour chacune des suites suivantes, définies pour tout entier naturel $n$, calculer les quatre premiers termes, puis dire si la suite est arithmétique, géométrique ou ni l'un ni l'autre. Justifier.

1. $u_n = 7 - 4n$
2. $v_n = 5 \\times 3^n$
3. $w_n = n^2$`,
      solution: `**1.** $u_0 = 7$, $u_1 = 3$, $u_2 = -1$, $u_3 = -5$. Pour tout $n$, $u_{n+1} - u_n = 7 - 4(n + 1) - (7 - 4n) = -4$ : la suite est arithmétique de raison $-4$.

**2.** $v_0 = 5$, $v_1 = 15$, $v_2 = 45$, $v_3 = 135$. Pour tout $n$, $v_{n+1} = 5 \\times 3^{n+1} = 3 \\times (5 \\times 3^n) = 3v_n$ : la suite est géométrique de raison $3$ (le calcul des premiers termes ne suffit pas à le prouver).

**3.** $w_0 = 0$, $w_1 = 1$, $w_2 = 4$, $w_3 = 9$. Les différences $1$, $3$, $5$ ne sont pas constantes : la suite n'est pas arithmétique. Elle n'est pas géométrique non plus, car $w_0 = 0$ et $w_1 = 1$ : aucun nombre $q$ ne vérifie $0 \\times q = 1$.` },
    { id: "1T3-ds-06", title: "Dépréciation d'un appareil", difficulty: 2, points: 5,
      statement: `Un appareil acheté $800$ euros perd $15\\,\\%$ de sa valeur chaque année. On note $v_n$ sa valeur, en euros, au bout de $n$ années, avec $v_0 = 800$.

1. Calculer $v_1$ et $v_2$.
2. Justifier que la suite $(v_n)$ est géométrique et préciser sa raison.
3. Exprimer $v_n$ en fonction de $n$ et calculer $v_3$.
4. Quel est le sens de variation de la suite $(v_n)$ ?`,
      solution: `**1.** $v_1 = 800 \\times 0{,}85 = 680$ et $v_2 = 680 \\times 0{,}85 = 578$.

**2.** Baisser de $15\\,\\%$, c'est multiplier par $1 - 0{,}15 = 0{,}85$. Pour tout $n$, $v_{n+1} = 0{,}85\\,v_n$ : la suite est géométrique de raison $0{,}85$.

**3.** $v_n = 800 \\times 0{,}85^n$, donc $v_3 = 578 \\times 0{,}85 = 491{,}3$ euros.

**4.** Le premier terme est positif et la raison est comprise entre $0$ et $1$ : la suite est décroissante.` },
    { id: "1T3-ds-07", title: "Retrouver une suite arithmétique", difficulty: 2, points: 5,
      statement: `La suite $(u_n)$ est arithmétique. On sait que $u_3 = 17$ et $u_8 = 42$.

1. Calculer la raison $r$ de la suite.
2. Calculer $u_0$, puis exprimer $u_n$ en fonction de $n$.
3. Calculer $u_{20}$.
4. Le nombre $100$ est-il un terme de la suite ? Justifier.`,
      solution: `**1.** On passe de $u_3$ à $u_8$ en ajoutant $5$ fois la raison : $5r = 42 - 17 = 25$, donc $r = 5$.

**2.** $u_0 = u_3 - 3r = 17 - 15 = 2$, donc $u_n = 2 + 5n$.

**3.** $u_{20} = 2 + 100 = 102$.

**4.** $2 + 5n = 100 \\iff 5n = 98 \\iff n = 19{,}6$, qui n'est pas un entier : $100$ n'est pas un terme de la suite (on a $u_{19} = 97$ et $u_{20} = 102$).` },
    { id: "1T3-ds-08", title: "Sens de variation", difficulty: 2, points: 4,
      statement: `Donner, en justifiant, le sens de variation de chacune des suites suivantes, définies pour tout entier naturel $n$.

1. $a_n = 3 - 2n$
2. $b_n = 5 \\times 1{,}2^n$
3. $c_n = 4 \\times 0{,}5^n$
4. $d_n = 10 + 0{,}5n$`,
      solution: `**1.** $(a_n)$ est arithmétique de raison $-2 < 0$ : elle est décroissante.

**2.** $(b_n)$ est géométrique de premier terme $5 > 0$ et de raison $1{,}2 > 1$ : elle est croissante.

**3.** $(c_n)$ est géométrique de premier terme $4 > 0$ et de raison $0{,}5$, comprise entre $0$ et $1$ : elle est décroissante.

**4.** $(d_n)$ est arithmétique de raison $0{,}5 > 0$ : elle est croissante.` },
    { id: "1T3-ds-09", title: "Seuil pour une suite arithmétique", difficulty: 3, points: 6,
      statement: `Une réserve d'eau contient $2500$ litres. On y prélève $120$ litres par jour. On note $u_n$ la quantité d'eau, en litres, au bout de $n$ jours.

1. Exprimer $u_n$ en fonction de $n$ et calculer $u_{10}$.
2. On considère le programme suivant.
\`\`\`python
u = 2500
n = 0
while u >= 400:
    u = u - 120
    n = n + 1
print(n)
\`\`\`
Que permet de déterminer ce programme ?
3. Déterminer, par le calcul, la valeur affichée.
4. Au bout de combien de jours la réserve sera-t-elle vide si l'on continue les prélèvements ?`,
      solution: `**1.** On retire $120$ litres par jour : $u_n = 2500 - 120n$ et $u_{10} = 2500 - 1200 = 1300$ litres.

**2.** Il affiche le premier nombre de jours au bout duquel il reste moins de $400$ litres.

**3.** $2500 - 120n < 400 \\iff 120n > 2100 \\iff n > 17{,}5$. On vérifie : $u_{17} = 460$ et $u_{18} = 340$. Le programme affiche $18$.

**4.** $2500 - 120n \\leqslant 0 \\iff n \\geqslant 20{,}83\\dots$ : au bout de $21$ jours ($u_{20} = 100$, et il ne reste pas assez d'eau pour un $21$e prélèvement complet).` },
    { id: "1T3-ds-10", title: "Seuil pour une suite géométrique", difficulty: 3, points: 6,
      statement: `Une population de bactéries compte $500$ individus au départ et augmente de $20\\,\\%$ par heure. On note $p_n$ le nombre de bactéries au bout de $n$ heures.

1. Exprimer $p_n$ en fonction de $n$.
2. Calculer $p_1$ et $p_2$.
3. À l'aide de la calculatrice, déterminer au bout de combien d'heures la population dépasse $2000$ bactéries. Donner les valeurs utiles arrondies au centième.
4. Écrire un programme Python qui affiche ce nombre d'heures.`,
      solution: `**1.** Augmenter de $20\\,\\%$, c'est multiplier par $1{,}2$ : $p_n = 500 \\times 1{,}2^n$.

**2.** $p_1 = 600$ et $p_2 = 720$.

**3.** $p_7 = 500 \\times 1{,}2^7 \\approx 1791{,}59$ et $p_8 = 500 \\times 1{,}2^8 \\approx 2149{,}91$. La population dépasse $2000$ bactéries au bout de $8$ heures.

**4.**
\`\`\`python
p = 500
n = 0
while p <= 2000:
    p = p * 1.2
    n = n + 1
print(n)
\`\`\`
Le programme affiche $8$.` },
    { id: "1T3-ds-11", title: "Entraînement progressif", difficulty: 3, points: 6,
      statement: `Une sportive court $2$ km le premier jour, puis augmente sa distance de $0{,}5$ km chaque jour. On note $d_n$ la distance parcourue le $n$-ième jour, avec $d_1 = 2$.

1. Calculer $d_2$ et $d_3$, puis exprimer $d_n$ en fonction de $n$.
2. Calculer $d_{20}$.
3. On rappelle que la somme de termes consécutifs d'une suite arithmétique vaut $\\text{nombre de termes} \\times \\frac{\\text{premier terme} + \\text{dernier terme}}{2}$. Calculer la distance totale parcourue pendant les $20$ premiers jours.
4. À partir de quel jour court-elle au moins $8$ km ?`,
      solution: `**1.** $d_2 = 2{,}5$ et $d_3 = 3$. La suite est arithmétique de raison $0{,}5$ et de premier terme $d_1 = 2$ : $d_n = 2 + 0{,}5(n - 1)$.

**2.** $d_{20} = 2 + 0{,}5 \\times 19 = 11{,}5$ km.

**3.** $20 \\times \\frac{2 + 11{,}5}{2} = 20 \\times 6{,}75 = 135$ km.

**4.** $2 + 0{,}5(n - 1) \\geqslant 8 \\iff 0{,}5(n - 1) \\geqslant 6 \\iff n - 1 \\geqslant 12 \\iff n \\geqslant 13$. Elle court au moins $8$ km à partir du $13$e jour ($d_{13} = 8$).` },
    { id: "1T3-ds-12", title: "Comparer deux évolutions de salaire", difficulty: 3, points: 6,
      statement: `Une entreprise propose deux évolutions pour un salaire mensuel de départ de $1800$ euros. Option A : une augmentation de $70$ euros par an. Option B : une augmentation de $3\\,\\%$ par an. On note $a_n$ et $b_n$ les salaires au bout de $n$ années.

1. Exprimer $a_n$ et $b_n$ en fonction de $n$.
2. Calculer $a_1$, $b_1$, $a_5$ et $b_5$ (arrondir au centime). Quelle option est la plus avantageuse au début ?
3. À l'aide de la calculatrice, on trouve $b_{17} \\approx 2975{,}13$ et $b_{18} \\approx 3064{,}38$. À partir de combien d'années l'option B devient-elle plus avantageuse ?
4. Expliquer pourquoi l'option B finit toujours par l'emporter.`,
      solution: `**1.** $a_n = 1800 + 70n$ (suite arithmétique) et $b_n = 1800 \\times 1{,}03^n$ (suite géométrique).

**2.** $a_1 = 1870$ et $b_1 = 1854$ ; $a_5 = 2150$ et $b_5 \\approx 2086{,}69$. Au début, l'option A est plus avantageuse.

**3.** $a_{17} = 2990 > 2975{,}13$ mais $a_{18} = 3060 < 3064{,}38$ : l'option B devient plus avantageuse à partir de $18$ ans.

**4.** Dans l'option A, on ajoute toujours $70$ euros. Dans l'option B, l'augmentation vaut $3\\,\\%$ du salaire, qui grandit : elle finit par dépasser $70$ euros, et la croissance exponentielle l'emporte sur la croissance linéaire.` },
    { id: "1T3-ds-13", title: "Production cumulée", difficulty: 4, points: 8,
      statement: `Une entreprise produit $2000$ objets la première année ; sa production augmente ensuite de $5\\,\\%$ par an. On note $u_n$ la production de l'année $n$, avec $u_0 = 2000$.

1. Justifier que $(u_n)$ est une suite géométrique ; exprimer $u_n$ en fonction de $n$.
2. Calculer $u_1$ et $u_2$.
3. On admet que, pour $q \\neq 1$, $1 + q + q^2 + \\dots + q^{9} = \\frac{1 - q^{10}}{1 - q}$. Calculer la production totale sur les $10$ premières années, de l'année $0$ à l'année $9$. Arrondir à l'unité.
4. Écrire un programme Python qui calcule cette production totale avec un accumulateur.`,
      solution: `**1.** Augmenter de $5\\,\\%$, c'est multiplier par $1{,}05$ : la suite est géométrique de raison $1{,}05$, et $u_n = 2000 \\times 1{,}05^n$.

**2.** $u_1 = 2100$ et $u_2 = 2205$.

**3.** $S = 2000(1 + 1{,}05 + \\dots + 1{,}05^9) = 2000 \\times \\frac{1 - 1{,}05^{10}}{1 - 1{,}05} \\approx 25\\,155{,}79$, soit environ $25\\,156$ objets.

**4.**
\`\`\`python
u = 2000
s = 0
for n in range(10):
    s = s + u
    u = u * 1.05
print(s)
\`\`\`
L'accumulateur \`s\` reçoit les $10$ productions successives.` },
    { id: "1T3-ds-14", title: "Rangées d'un amphithéâtre", difficulty: 4, points: 7,
      statement: `Le premier rang d'un amphithéâtre compte $16$ sièges, et chaque rang compte $3$ sièges de plus que le précédent. On note $s_n$ le nombre de sièges du rang $n$, avec $s_1 = 16$. L'amphithéâtre compte $25$ rangs.

1. Exprimer $s_n$ en fonction de $n$.
2. Combien de sièges compte le dernier rang ?
3. On rappelle que la somme de termes consécutifs d'une suite arithmétique vaut $\\text{nombre de termes} \\times \\frac{\\text{premier terme} + \\text{dernier terme}}{2}$. Calculer le nombre total de sièges.
4. Quel rang compte exactement $64$ sièges ?`,
      solution: `**1.** La suite est arithmétique de raison $3$ et de premier terme $s_1 = 16$ : $s_n = 16 + 3(n - 1)$.

**2.** $s_{25} = 16 + 3 \\times 24 = 88$ sièges.

**3.** $25 \\times \\frac{16 + 88}{2} = 25 \\times 52 = 1300$ sièges.

**4.** $16 + 3(n - 1) = 64 \\iff 3(n - 1) = 48 \\iff n - 1 = 16 \\iff n = 17$. C'est le $17$e rang.` },
    { id: "1T3-ds-15", title: "Élimination d'un médicament", difficulty: 4, points: 7,
      statement: `On injecte $80$ mg d'un médicament à un patient. Chaque heure, l'organisme élimine $30\\,\\%$ de la quantité présente. On note $q_n$ la quantité, en mg, présente au bout de $n$ heures.

1. Calculer $q_1$ et $q_2$.
2. Exprimer $q_n$ en fonction de $n$.
3. Le médicament n'est plus efficace en dessous de $10$ mg. Déterminer, à l'aide de la calculatrice, au bout de combien d'heures ce seuil est franchi. Donner les valeurs utiles arrondies au centième.
4. Écrire un programme Python qui affiche ce nombre d'heures.`,
      solution: `**1.** Éliminer $30\\,\\%$, c'est multiplier par $0{,}7$ : $q_1 = 56$ mg et $q_2 = 39{,}2$ mg.

**2.** $(q_n)$ est géométrique de raison $0{,}7$ : $q_n = 80 \\times 0{,}7^n$.

**3.** $q_5 = 80 \\times 0{,}7^5 \\approx 13{,}45$ et $q_6 = 80 \\times 0{,}7^6 \\approx 9{,}41$. Le seuil de $10$ mg est franchi au bout de $6$ heures.

**4.**
\`\`\`python
q = 80
n = 0
while q >= 10:
    q = q * 0.7
    n = n + 1
print(n)
\`\`\`
Le programme affiche $6$.` },
    { id: "1T3-ds-16", title: "Linéaire contre exponentiel", difficulty: 4, points: 8,
      statement: `On considère les suites $(u_n)$ et $(v_n)$ définies pour tout entier naturel $n$ par $u_n = 100 + 20n$ et $v_n = 100 \\times 1{,}1^n$.

1. Préciser la nature de chaque suite. Calculer $u_5$ et $v_5$ (arrondir au centième).
2. Calculer $u_0 + u_1 + \\dots + u_9$.
3. On admet que $1 + 1{,}1 + \\dots + 1{,}1^9 = \\frac{1{,}1^{10} - 1}{0{,}1}$. Calculer $v_0 + v_1 + \\dots + v_9$, arrondi au centième.
4. On donne $v_{14} \\approx 379{,}75$ et $v_{15} \\approx 417{,}72$. Déterminer le premier rang $n \\geqslant 1$ pour lequel $v_n > u_n$.`,
      solution: `**1.** $(u_n)$ est arithmétique de raison $20$ ; $(v_n)$ est géométrique de raison $1{,}1$. $u_5 = 200$ et $v_5 = 100 \\times 1{,}1^5 \\approx 161{,}05$.

**2.** $u_9 = 280$, donc la somme vaut $10 \\times \\frac{100 + 280}{2} = 1900$.

**3.** $100 \\times \\frac{1{,}1^{10} - 1}{0{,}1} \\approx 1593{,}74$.

**4.** $u_{14} = 380 > 379{,}75$ mais $u_{15} = 400 < 417{,}72$ : le premier rang est $n = 15$. La suite géométrique, d'abord en retard, finit par dépasser la suite arithmétique.` }
  ],
  "1T4": [
    { id: "1T4-ds-01", title: "Images et taux de variation", difficulty: 1, points: 4,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = x^2 + 1$.

1. Calculer $f(0)$, $f(2)$ et $f(5)$.
2. Calculer le taux de variation de $f$ entre $0$ et $2$.
3. Calculer le taux de variation de $f$ entre $2$ et $5$.
4. Que peut-on dire de ces deux taux ? La fonction $f$ est-elle affine ?`,
      solution: `**1.** $f(0) = 1$, $f(2) = 5$ et $f(5) = 26$.

**2.** $\\frac{f(2) - f(0)}{2 - 0} = \\frac{5 - 1}{2} = 2$.

**3.** $\\frac{f(5) - f(2)}{5 - 2} = \\frac{26 - 5}{3} = 7$.

**4.** Les deux taux sont différents. Pour une fonction affine, le taux de variation est constant (c'est le coefficient directeur) : $f$ n'est donc pas affine.` },
    { id: "1T4-ds-02", title: "Allure d'une parabole", difficulty: 1, points: 4,
      statement: `Pour chacune des fonctions suivantes, définies sur $\\mathbb{R}$, dire si la parabole qui la représente est tournée vers le haut ou vers le bas, et donner les abscisses de ses points d'intersection avec l'axe des abscisses lorsqu'on peut les lire directement.

1. $f(x) = 3x^2$
2. $g(x) = -x^2 + 4$
3. $h(x) = 2(x - 1)(x - 5)$
4. $k(x) = -0{,}5(x + 2)(x - 4)$`,
      solution: `**1.** $a = 3 > 0$ : parabole tournée vers le haut ; elle coupe l'axe des abscisses en $x = 0$ seulement.

**2.** $a = -1 < 0$ : tournée vers le bas. $-x^2 + 4 = (2 - x)(2 + x)$ s'annule en $-2$ et $2$.

**3.** $a = 2 > 0$ : tournée vers le haut ; elle coupe l'axe en $1$ et $5$ (un produit est nul si et seulement si l'un des facteurs est nul).

**4.** $a = -0{,}5 < 0$ : tournée vers le bas ; elle coupe l'axe en $-2$ et $4$.` },
    { id: "1T4-ds-03", title: "Forme factorisée et sommet", difficulty: 1, points: 4,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = 2(x - 3)(x + 1)$.

1. Déterminer les racines de $f$.
2. En déduire l'équation de l'axe de symétrie de la parabole.
3. Calculer les coordonnées du sommet.
4. La fonction $f$ admet-elle un minimum ou un maximum ? Préciser sa valeur.`,
      solution: `**1.** $f(x) = 0 \\iff x - 3 = 0$ ou $x + 1 = 0$ : les racines sont $3$ et $-1$.

**2.** L'axe de symétrie passe par le milieu des racines : $x = \\frac{3 + (-1)}{2} = 1$.

**3.** $f(1) = 2 \\times (1 - 3) \\times (1 + 1) = 2 \\times (-2) \\times 2 = -8$. Le sommet est $S(1 ; -8)$.

**4.** $a = 2 > 0$ : la parabole est tournée vers le haut, $f$ admet un minimum, égal à $-8$, atteint en $x = 1$.` },
    { id: "1T4-ds-04", title: "Symétrie et maximum", difficulty: 1, points: 4,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = -x^2 + 6x$.

1. Calculer $f(1)$ et $f(5)$. Que remarque-t-on ?
2. Factoriser $f(x)$ et en déduire ses racines.
3. Déterminer l'axe de symétrie de la parabole.
4. Déterminer le maximum de $f$.`,
      solution: `**1.** $f(1) = -1 + 6 = 5$ et $f(5) = -25 + 30 = 5$ : deux réels ont la même image.

**2.** $f(x) = -x(x - 6)$ : les racines sont $0$ et $6$.

**3.** L'axe de symétrie a pour équation $x = \\frac{0 + 6}{2} = 3$ (c'est aussi le milieu de $1$ et $5$).

**4.** $a = -1 < 0$ : la parabole est tournée vers le bas, le maximum est atteint en $3$ et vaut $f(3) = -9 + 18 = 9$.` },
    { id: "1T4-ds-05", title: "Factoriser un trinôme", difficulty: 2, points: 5,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = x^2 - 5x + 6$.

1. Calculer $f(2)$ et $f(3)$.
2. Développer $(x - 2)(x - 3)$. Que peut-on en conclure ?
3. Résoudre l'équation $f(x) = 0$.
4. Déterminer l'axe de symétrie de la parabole et le minimum de $f$.`,
      solution: `**1.** $f(2) = 4 - 10 + 6 = 0$ et $f(3) = 9 - 15 + 6 = 0$ : $2$ et $3$ sont des racines.

**2.** $(x - 2)(x - 3) = x^2 - 3x - 2x + 6 = x^2 - 5x + 6$. On en conclut que $f(x) = (x - 2)(x - 3)$ : c'est la factorisation complète de $f(x)$.

**3.** Un produit est nul si et seulement si l'un des facteurs est nul : les solutions sont $2$ et $3$.

**4.** L'axe est $x = \\frac{2 + 3}{2} = 2{,}5$. Comme $a = 1 > 0$, le minimum vaut $f(2{,}5) = (0{,}5) \\times (-0{,}5) = -0{,}25$.` },
    { id: "1T4-ds-06", title: "Sommet à partir des racines", difficulty: 2, points: 4,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = 3(x - 2)(x - 6)$.

1. Donner les racines de $f$ et le signe de $a$.
2. Déterminer l'axe de symétrie de la parabole.
3. Calculer les coordonnées du sommet.
4. Dresser le tableau de variations de $f$.`,
      solution: `**1.** Les racines sont $2$ et $6$, et $a = 3 > 0$.

**2.** L'axe a pour équation $x = \\frac{2 + 6}{2} = 4$.

**3.** $f(4) = 3 \\times 2 \\times (-2) = -12$ : le sommet est $S(4 ; -12)$.

**4.** Comme $a > 0$, $f$ est décroissante sur $]-\\infty ; 4]$ puis croissante sur $[4 ; +\\infty[$, avec un minimum égal à $-12$ en $x = 4$.` },
    { id: "1T4-ds-07", title: "Taux de variation et sécante", difficulty: 2, points: 5,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = x^2 - 4x + 1$, et les points $A$ et $B$ de sa courbe d'abscisses $1$ et $4$.

1. Calculer $f(1)$ et $f(4)$.
2. Calculer le taux de variation de $f$ entre $1$ et $4$.
3. Déterminer l'équation réduite de la droite $(AB)$.
4. Interpréter graphiquement le taux de variation calculé à la question 2.`,
      solution: `**1.** $f(1) = 1 - 4 + 1 = -2$ et $f(4) = 16 - 16 + 1 = 1$. Donc $A(1 ; -2)$ et $B(4 ; 1)$.

**2.** $\\frac{f(4) - f(1)}{4 - 1} = \\frac{1 - (-2)}{3} = 1$.

**3.** Le coefficient directeur de $(AB)$ est $1$ ; la droite a une équation de la forme $y = x + p$. Elle passe par $A$ : $-2 = 1 + p$, donc $p = -3$ et $(AB) : y = x - 3$.

**4.** Le taux de variation de $f$ entre $1$ et $4$ est le coefficient directeur de la sécante $(AB)$.` },
    { id: "1T4-ds-08", title: "Signe d'un produit", difficulty: 2, points: 5,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = (x + 3)(x - 2)$.

1. Développer $f(x)$.
2. Dresser le tableau de signes de $f(x)$.
3. Résoudre l'inéquation $f(x) < 0$.
4. Résoudre l'inéquation $f(x) \\geqslant 0$.`,
      solution: `**1.** $f(x) = x^2 - 2x + 3x - 6 = x^2 + x - 6$.

**2.** $x + 3$ s'annule en $-3$ et $x - 2$ en $2$. Comme $a = 1 > 0$, $f(x)$ est positif à l'extérieur des racines et négatif entre elles : $+$ sur $]-\\infty ; -3[$, $0$ en $-3$, $-$ sur $]-3 ; 2[$, $0$ en $2$, $+$ sur $]2 ; +\\infty[$.

**3.** $f(x) < 0 \\iff x \\in ]-3 ; 2[$.

**4.** $f(x) \\geqslant 0 \\iff x \\in ]-\\infty ; -3] \\cup [2 ; +\\infty[$.` },
    { id: "1T4-ds-09", title: "Étude complète d'un trinôme", difficulty: 3, points: 6,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = 2x^2 + 4x - 6$.

1. Vérifier que $f(1) = 0$ et $f(-3) = 0$.
2. Montrer que $f(x) = 2(x - 1)(x + 3)$.
3. Résoudre l'inéquation $f(x) \\leqslant 0$.
4. Déterminer les coordonnées du sommet de la parabole et dresser le tableau de variations de $f$.`,
      solution: `**1.** $f(1) = 2 + 4 - 6 = 0$ et $f(-3) = 18 - 12 - 6 = 0$.

**2.** $2(x - 1)(x + 3) = 2(x^2 + 3x - x - 3) = 2(x^2 + 2x - 3) = 2x^2 + 4x - 6 = f(x)$.

**3.** $a = 2 > 0$ : $f(x)$ est négatif ou nul entre les racines. L'ensemble des solutions est $[-3 ; 1]$.

**4.** L'axe est $x = \\frac{-3 + 1}{2} = -1$ et $f(-1) = 2 \\times (-2) \\times 2 = -8$ : le sommet est $S(-1 ; -8)$. $f$ est décroissante sur $]-\\infty ; -1]$ puis croissante sur $[-1 ; +\\infty[$.` },
    { id: "1T4-ds-10", title: "Exploiter la symétrie", difficulty: 3, points: 6,
      statement: `La fonction $f$ est une fonction polynôme du second degré. On sait que $f(-1) = 3$, $f(5) = 3$ et $f(2) = -6$.

1. Justifier que la parabole représentant $f$ a pour axe de symétrie la droite d'équation $x = 2$.
2. En déduire les coordonnées du sommet. La fonction $f$ admet-elle un minimum ou un maximum ?
3. Résoudre l'équation $f(x) = 3$.
4. Comparer $f(0)$ et $f(4)$, puis $f(-2)$ et $f(6)$, sans calculer $f$.`,
      solution: `**1.** $-1$ et $5$ ont la même image : l'axe de symétrie passe par leur milieu, $x = \\frac{-1 + 5}{2} = 2$.

**2.** Le sommet est sur l'axe : $S(2 ; -6)$. Comme $f(2) = -6 < 3 = f(-1)$, la parabole est tournée vers le haut : $f$ admet un minimum, égal à $-6$.

**3.** Une équation du second degré a au plus deux solutions ; $-1$ et $5$ en sont. L'ensemble des solutions est $\\{-1 ; 5\\}$.

**4.** $0$ et $4$ sont symétriques par rapport à $2$ : $f(0) = f(4)$. De même, $-2$ et $6$ sont symétriques : $f(-2) = f(6)$.` },
    { id: "1T4-ds-11", title: "Bénéfice d'une entreprise", difficulty: 3, points: 6,
      statement: `Une entreprise fabrique $x$ centaines d'objets par jour, avec $x \\in [0 ; 20]$. Son bénéfice, en centaines d'euros, est $B(x) = -2x^2 + 40x - 150$.

1. Montrer que $B(x) = -2(x - 5)(x - 15)$.
2. Pour quelles quantités l'entreprise réalise-t-elle un bénéfice positif ou nul ?
3. Déterminer la quantité qui rend le bénéfice maximal, et ce bénéfice maximal.
4. Calculer le taux de variation de $B$ entre $10$ et $15$, et l'interpréter.`,
      solution: `**1.** $-2(x - 5)(x - 15) = -2(x^2 - 15x - 5x + 75) = -2(x^2 - 20x + 75) = -2x^2 + 40x - 150$.

**2.** $a = -2 < 0$ : $B(x) \\geqslant 0$ entre les racines, donc pour $x \\in [5 ; 15]$, c'est-à-dire entre $500$ et $1500$ objets.

**3.** L'axe est $x = \\frac{5 + 15}{2} = 10$ ; $B(10) = -2 \\times 5 \\times (-5) = 50$. Le bénéfice maximal est de $5000$ euros, pour $1000$ objets.

**4.** $\\frac{B(15) - B(10)}{15 - 10} = \\frac{0 - 50}{5} = -10$ : entre $1000$ et $1500$ objets, le bénéfice baisse en moyenne de $1000$ euros par centaine d'objets supplémentaire.` },
    { id: "1T4-ds-12", title: "Trajectoire d'un ballon", difficulty: 3, points: 6,
      statement: `Un ballon est lancé verticalement depuis le sol. Sa hauteur, en mètres, au bout de $t$ secondes est $h(t) = -5t^2 + 20t$.

1. Calculer $h(1)$, $h(2)$ et $h(3)$.
2. Factoriser $h(t)$ et en déduire à quel instant le ballon retombe au sol.
3. Déterminer la hauteur maximale atteinte et l'instant correspondant.
4. Calculer la vitesse moyenne du ballon entre $0$ et $1$ s, puis entre $1$ et $2$ s (c'est le taux de variation de $h$). Que constate-t-on ?`,
      solution: `**1.** $h(1) = -5 + 20 = 15$ ; $h(2) = -20 + 40 = 20$ ; $h(3) = -45 + 60 = 15$.

**2.** $h(t) = -5t(t - 4)$ : $h(t) = 0$ pour $t = 0$ (départ) et $t = 4$. Le ballon retombe au sol au bout de $4$ secondes.

**3.** L'axe est $t = \\frac{0 + 4}{2} = 2$ et $a = -5 < 0$ : la hauteur maximale est $h(2) = 20$ m, atteinte au bout de $2$ s.

**4.** Entre $0$ et $1$ : $\\frac{15 - 0}{1} = 15$ m/s. Entre $1$ et $2$ : $\\frac{20 - 15}{1} = 5$ m/s. Le ballon ralentit en montant.` },
    { id: "1T4-ds-13", title: "Enclos le long d'un mur", difficulty: 4, points: 8,
      statement: `Un éleveur dispose de $60$ m de clôture pour construire un enclos rectangulaire le long d'un mur : le mur forme un côté, la clôture forme les trois autres. On note $x$ la largeur (les deux côtés perpendiculaires au mur), en mètres, avec $x \\in [0 ; 30]$.

1. Exprimer la longueur du côté parallèle au mur, puis montrer que l'aire de l'enclos est $A(x) = -2x^2 + 60x$.
2. Factoriser $A(x)$.
3. Déterminer les dimensions de l'enclos d'aire maximale, et cette aire maximale.
4. Vérifier que $A(x) - 400 = -2(x - 10)(x - 20)$, puis déterminer les valeurs de $x$ pour lesquelles l'aire est d'au moins $400$ m$^2$.`,
      solution: `**1.** Le côté parallèle au mur mesure $60 - 2x$. Donc $A(x) = x(60 - 2x) = -2x^2 + 60x$.

**2.** $A(x) = -2x(x - 30)$.

**3.** Les racines sont $0$ et $30$ : l'axe est $x = 15$. Comme $a = -2 < 0$, l'aire est maximale pour $x = 15$ : $A(15) = 15 \\times 30 = 450$ m$^2$. L'enclos mesure $15$ m sur $30$ m.

**4.** $-2(x - 10)(x - 20) = -2(x^2 - 30x + 200) = -2x^2 + 60x - 400 = A(x) - 400$. Comme $a < 0$, ce produit est positif ou nul entre $10$ et $20$ : $A(x) \\geqslant 400 \\iff x \\in [10 ; 20]$.` },
    { id: "1T4-ds-14", title: "Zone de rentabilité", difficulty: 4, points: 7,
      statement: `Un artisan fabrique $x$ dizaines de pièces par semaine, avec $x \\in [0 ; 10]$. Son bénéfice, en centaines d'euros, est $B(x) = -x^2 + 10x - 16$.

1. Calculer $B(2)$ et $B(8)$.
2. En déduire la factorisation complète de $B(x)$, et la vérifier en développant.
3. Dresser le tableau de signes de $B(x)$ sur $[0 ; 10]$ et en déduire la zone de rentabilité.
4. Déterminer le bénéfice maximal et la production correspondante.`,
      solution: `**1.** $B(2) = -4 + 20 - 16 = 0$ et $B(8) = -64 + 80 - 16 = 0$.

**2.** $2$ et $8$ sont les racines et $a = -1$ : $B(x) = -(x - 2)(x - 8)$. Vérification : $-(x^2 - 8x - 2x + 16) = -x^2 + 10x - 16$.

**3.** $a < 0$ : $B(x)$ est négatif sur $[0 ; 2[$, nul en $2$, positif sur $]2 ; 8[$, nul en $8$, négatif sur $]8 ; 10]$. L'artisan est rentable pour une production strictement comprise entre $20$ et $80$ pièces.

**4.** L'axe est $x = \\frac{2 + 8}{2} = 5$ et $B(5) = -(3)(-3) = 9$ : le bénéfice maximal est de $900$ euros, pour $50$ pièces.` },
    { id: "1T4-ds-15", title: "Arche d'un pont", difficulty: 4, points: 8,
      statement: `Une arche de pont a la forme d'une parabole. Dans un repère où l'unité est le mètre, ses pieds sont aux points d'abscisses $0$ et $12$ sur le sol, et sa hauteur maximale est de $9$ m. On modélise l'arche par $f(x) = ax(x - 12)$.

1. Justifier que le sommet de l'arche a pour abscisse $6$.
2. En déduire la valeur exacte de $a$.
3. Calculer $f(2)$.
4. Un camion de $8$ m de large et de $3{,}5$ m de haut passe au centre de l'arche. Peut-il passer ? Justifier.`,
      solution: `**1.** Les racines sont $0$ et $12$ : l'axe de symétrie a pour équation $x = \\frac{0 + 12}{2} = 6$.

**2.** $f(6) = a \\times 6 \\times (-6) = -36a$. Comme $f(6) = 9$, on obtient $a = -\\frac{9}{36} = -\\frac{1}{4}$.

**3.** $f(2) = -\\frac{1}{4} \\times 2 \\times (-10) = 5$.

**4.** Centré, le camion occupe l'intervalle $[2 ; 10]$. Par symétrie, $f(10) = f(2) = 5$, et sur $[2 ; 10]$ la hauteur de l'arche est au moins $5$ m (elle croît jusqu'à $6$ puis décroît). Comme $5 > 3{,}5$, le camion passe.` },
    { id: "1T4-ds-16", title: "Synthèse sur un trinôme", difficulty: 4, points: 8,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = -x^2 + 2x + 8$.

1. Montrer que $f(x) = -(x + 2)(x - 4)$.
2. Déterminer les coordonnées du sommet de la parabole, puis dresser le tableau de variations de $f$.
3. Résoudre l'inéquation $f(x) > 0$.
4. Calculer le taux de variation de $f$ entre $-2$ et $1$, puis entre $1$ et $4$. Expliquer le lien entre ces deux résultats.`,
      solution: `**1.** $-(x + 2)(x - 4) = -(x^2 - 4x + 2x - 8) = -(x^2 - 2x - 8) = -x^2 + 2x + 8$.

**2.** Les racines sont $-2$ et $4$ : l'axe est $x = 1$, et $f(1) = -(3)(-3) = 9$. Le sommet est $S(1 ; 9)$. Comme $a = -1 < 0$, $f$ est croissante sur $]-\\infty ; 1]$ puis décroissante sur $[1 ; +\\infty[$.

**3.** $a < 0$ : $f(x) > 0$ strictement entre les racines, soit $x \\in ]-2 ; 4[$.

**4.** $\\frac{f(1) - f(-2)}{1 - (-2)} = \\frac{9 - 0}{3} = 3$ et $\\frac{f(4) - f(1)}{4 - 1} = \\frac{0 - 9}{3} = -3$. Les deux taux sont opposés, car les intervalles sont symétriques par rapport à l'axe $x = 1$.` }
  ]
});
// ---- DS 1T1-1T4 (fin) ----

// ---- 1T5, 1T6, 1T7 ----
Object.assign(window.MATHS_DS_BANK, {
  "1T5": [
    { id: "1T5-ds-01", title: "Dérivées de fonctions polynômes", difficulty: 1, points: 4,
      statement: `Calculer la fonction dérivée de chacune des fonctions suivantes, définies sur $\\mathbb{R}$.

1. $f(x) = 3x^2 - 5x + 7$
2. $g(x) = x^3 + 2x^2 - x$
3. $h(x) = -4x^3 + 6x$
4. $k(x) = 0{,}5x^2 - 3$`,
      solution: `On dérive terme à terme avec $(x^3)' = 3x^2$, $(x^2)' = 2x$, $(x)' = 1$, et la dérivée d'une constante est nulle.

**1.** $f'(x) = 3 \\times 2x - 5 = 6x - 5$.

**2.** $g'(x) = 3x^2 + 2 \\times 2x - 1 = 3x^2 + 4x - 1$.

**3.** $h'(x) = -4 \\times 3x^2 + 6 = -12x^2 + 6$.

**4.** $k'(x) = 0{,}5 \\times 2x - 0 = x$ (la constante $-3$ disparaît).` },
    { id: "1T5-ds-02", title: "Nombre dérivé lu sur une tangente", difficulty: 1, points: 4,
      statement: `On considère une fonction $f$ dont la courbe $\\mathcal{C}$ passe par le point $A(1 ; 3)$. On sait que :
- la tangente à $\\mathcal{C}$ au point $A$ passe aussi par le point $B(3 ; 7)$ ;
- la tangente à $\\mathcal{C}$ au point $C(4 ; 5)$ est parallèle à l'axe des abscisses.

1. Donner $f(1)$ et $f(4)$.
2. Déterminer $f'(1)$.
3. Déterminer $f'(4)$ en justifiant.
4. Donner l'équation réduite de la tangente à $\\mathcal{C}$ au point $A$.`,
      solution: `**1.** $A(1 ; 3)$ et $C(4 ; 5)$ sont sur la courbe : $f(1) = 3$ et $f(4) = 5$.

**2.** $f'(1)$ est le coefficient directeur de la tangente $(AB)$ : $f'(1) = \\frac{7 - 3}{3 - 1} = \\frac{4}{2} = 2$.

**3.** La tangente en $C$ est horizontale, donc son coefficient directeur est nul : $f'(4) = 0$.

**4.** $y = f'(1)(x - 1) + f(1) = 2(x - 1) + 3$, soit $y = 2x + 1$. *Vérification* : pour $x = 3$, $2 \\times 3 + 1 = 7$, on retrouve bien $B$.` },
    { id: "1T5-ds-03", title: "Du taux de variation au nombre dérivé", difficulty: 1, points: 4,
      statement: `On considère la fonction carré $f(x) = x^2$ et un réel $h$ non nul.

1. Montrer que le taux de variation de $f$ entre $3$ et $3 + h$ est égal à $6 + h$.
2. Calculer ce taux pour $h = 0{,}1$ puis pour $h = 0{,}01$.
3. Vers quelle valeur ce taux se rapproche-t-il lorsque $h$ devient très proche de $0$ ? En déduire $f'(3)$.
4. Retrouver ce résultat à l'aide de la fonction dérivée de $f$.`,
      solution: `**1.** $\\frac{f(3 + h) - f(3)}{h} = \\frac{(3 + h)^2 - 9}{h} = \\frac{9 + 6h + h^2 - 9}{h} = \\frac{h(6 + h)}{h} = 6 + h$.

**2.** Pour $h = 0{,}1$ : $6{,}1$. Pour $h = 0{,}01$ : $6{,}01$.

**3.** Lorsque $h$ se rapproche de $0$, le taux $6 + h$ se rapproche de $6$. Le nombre dérivé de $f$ en $3$ vaut donc $f'(3) = 6$.

**4.** $f'(x) = 2x$, donc $f'(3) = 2 \\times 3 = 6$ : les deux méthodes concordent.` },
    { id: "1T5-ds-04", title: "Tangente à une parabole", difficulty: 1, points: 4,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^2 - 2x + 3$.

1. Calculer $f(2)$.
2. Déterminer $f'(x)$, puis $f'(2)$.
3. En déduire l'équation réduite de la tangente $T$ à la courbe de $f$ au point d'abscisse $2$.
4. Le point $E(5 ; 9)$ appartient-il à $T$ ?`,
      solution: `**1.** $f(2) = 4 - 4 + 3 = 3$.

**2.** $f'(x) = 2x - 2$, donc $f'(2) = 4 - 2 = 2$.

**3.** $T : y = f'(2)(x - 2) + f(2) = 2(x - 2) + 3 = 2x - 4 + 3$, soit $y = 2x - 1$.

**4.** Pour $x = 5$ : $2 \\times 5 - 1 = 9$, qui est bien l'ordonnée de $E$. Le point $E$ appartient donc à la tangente $T$.` },
    { id: "1T5-ds-05", title: "Variations d'un trinôme sur un intervalle", difficulty: 2, points: 5,
      statement: `Soit $f$ la fonction définie sur $[0 ; 8]$ par $f(x) = -x^2 + 8x - 7$.

1. Calculer $f'(x)$.
2. Étudier le signe de $f'(x)$ sur $[0 ; 8]$.
3. Dresser le tableau de variations de $f$ sur $[0 ; 8]$, en indiquant les valeurs aux bornes et à l'extremum.
4. Préciser le maximum de $f$ sur $[0 ; 8]$ et la valeur de $x$ pour laquelle il est atteint.`,
      solution: `**1.** $f'(x) = -2x + 8$.

**2.** $-2x + 8 > 0 \\iff -2x > -8 \\iff x < 4$. Donc $f'(x) > 0$ sur $[0 ; 4[$, $f'(4) = 0$ et $f'(x) < 0$ sur $]4 ; 8]$.

**3.** $f(0) = -7$, $f(4) = -16 + 32 - 7 = 9$, $f(8) = -64 + 64 - 7 = -7$.

| $x$ | $0$ | | $4$ | | $8$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f(x)$ | $-7$ | $\\nearrow$ | $9$ | $\\searrow$ | $-7$ |

**4.** Le maximum de $f$ sur $[0 ; 8]$ vaut $9$ ; il est atteint pour $x = 4$.` },
    { id: "1T5-ds-06", title: "Vitesse d'un cycliste", difficulty: 2, points: 5,
      statement: `Au départ d'une course, la distance parcourue par un cycliste (en mètres) au bout de $t$ secondes est donnée par $d(t) = 0{,}5t^2 + 4t$, pour $t \\in [0 ; 20]$.

1. Calculer la distance parcourue au bout de $10$ secondes.
2. Calculer la vitesse moyenne du cycliste entre $t = 0$ et $t = 10$.
3. Déterminer $d'(t)$, puis la vitesse instantanée du cycliste à l'instant $t = 10$.
4. À quel instant la vitesse instantanée atteint-elle $20$ m/s ?`,
      solution: `**1.** $d(10) = 0{,}5 \\times 100 + 4 \\times 10 = 50 + 40 = 90$ m.

**2.** Vitesse moyenne : $\\frac{d(10) - d(0)}{10 - 0} = \\frac{90 - 0}{10} = 9$ m/s.

**3.** $d'(t) = 0{,}5 \\times 2t + 4 = t + 4$. La vitesse instantanée à $t = 10$ est $d'(10) = 14$ m/s, supérieure à la vitesse moyenne : le cycliste accélère.

**4.** $d'(t) = 20 \\iff t + 4 = 20 \\iff t = 16$. La vitesse atteint $20$ m/s au bout de $16$ secondes (instant compris dans $[0 ; 20]$).` },
    { id: "1T5-ds-07", title: "Deux tangentes et leur point d'intersection", difficulty: 2, points: 5,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^3 - 2x$, de courbe $\\mathcal{C}$.

1. Calculer $f'(x)$.
2. Déterminer l'équation réduite de la tangente $T_1$ à $\\mathcal{C}$ au point d'abscisse $1$.
3. Déterminer l'équation réduite de la tangente $T_0$ à $\\mathcal{C}$ au point d'abscisse $0$.
4. Calculer les coordonnées du point d'intersection de $T_0$ et $T_1$.`,
      solution: `**1.** $f'(x) = 3x^2 - 2$.

**2.** $f(1) = 1 - 2 = -1$ et $f'(1) = 3 - 2 = 1$. $T_1 : y = 1 \\times (x - 1) - 1$, soit $y = x - 2$.

**3.** $f(0) = 0$ et $f'(0) = -2$. $T_0 : y = -2(x - 0) + 0$, soit $y = -2x$.

**4.** On résout $x - 2 = -2x \\iff 3x = 2 \\iff x = \\frac{2}{3}$. Alors $y = -2 \\times \\frac{2}{3} = -\\frac{4}{3}$. Les tangentes se coupent au point $\\left(\\frac{2}{3} ; -\\frac{4}{3}\\right)$ (on vérifie : $\\frac{2}{3} - 2 = -\\frac{4}{3}$).` },
    { id: "1T5-ds-08", title: "Minimum et tangente horizontale", difficulty: 2, points: 5,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = 2x^2 - 12x + 5$.

1. Calculer $f'(x)$.
2. Résoudre l'équation $f'(x) = 0$.
3. Étudier le signe de $f'(x)$ et en déduire les variations de $f$ sur $\\mathbb{R}$.
4. Déterminer l'extremum de $f$ et préciser sa nature.
5. Donner l'équation de la tangente à la courbe de $f$ au point d'abscisse $3$.`,
      solution: `**1.** $f'(x) = 4x - 12$.

**2.** $4x - 12 = 0 \\iff x = 3$.

**3.** $4x - 12 < 0 \\iff x < 3$ : $f'$ est négative sur $]-\\infty ; 3[$ et positive sur $]3 ; +\\infty[$. Donc $f$ est décroissante sur $]-\\infty ; 3]$ et croissante sur $[3 ; +\\infty[$.

**4.** $f'$ s'annule en $3$ en passant de $-$ à $+$ : $f$ admet un minimum en $3$, égal à $f(3) = 18 - 36 + 5 = -13$.

**5.** $f'(3) = 0$ : la tangente est horizontale, d'équation $y = 0 \\times (x - 3) + f(3)$, soit $y = -13$.` },
    { id: "1T5-ds-09", title: "Étude d'une fonction de degré 3", difficulty: 3, points: 6,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^3 - 6x^2 + 9x + 1$.

1. Calculer $f'(x)$.
2. Vérifier que, pour tout réel $x$, $f'(x) = 3(x - 1)(x - 3)$.
3. Étudier le signe de $f'(x)$ à l'aide d'un tableau de signes.
4. Dresser le tableau de variations de $f$ (on calculera les images de $1$ et de $3$).
5. Préciser les extremums locaux de $f$.`,
      solution: `**1.** $f'(x) = 3x^2 - 12x + 9$.

**2.** $3(x - 1)(x - 3) = 3(x^2 - 3x - x + 3) = 3(x^2 - 4x + 3) = 3x^2 - 12x + 9 = f'(x)$.

**3.** $x - 1$ s'annule en $1$, $x - 3$ s'annule en $3$, et le facteur $3$ est positif.

| $x$ | $-\\infty$ | | $1$ | | $3$ | | $+\\infty$ |
|---|---|---|---|---|---|---|---|
| $x - 1$ | | $-$ | $0$ | $+$ | | $+$ | |
| $x - 3$ | | $-$ | | $-$ | $0$ | $+$ | |
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |

**4.** $f(1) = 1 - 6 + 9 + 1 = 5$ et $f(3) = 27 - 54 + 27 + 1 = 1$. Donc $f$ est croissante sur $]-\\infty ; 1]$, décroissante sur $[1 ; 3]$ et croissante sur $[3 ; +\\infty[$.

**5.** $f$ admet un maximum local égal à $5$ en $x = 1$ ($f'$ passe de $+$ à $-$) et un minimum local égal à $1$ en $x = 3$ ($f'$ passe de $-$ à $+$).` },
    { id: "1T5-ds-10", title: "Coût de production", difficulty: 3, points: 6,
      statement: `Une entreprise fabrique $q$ centaines d'objets par jour, avec $q \\in [0 ; 10]$. Le coût de production, en centaines d'euros, est $C(q) = q^3 - 12q^2 + 60q + 50$.

1. Calculer $C(0)$ et interpréter ce résultat.
2. Calculer $C'(q)$.
3. Vérifier que, pour tout réel $q$, $C'(q) = 3(q - 4)^2 + 12$.
4. En déduire le signe de $C'(q)$ puis le sens de variation de $C$ sur $[0 ; 10]$.
5. Calculer le coût de production de $1\\,000$ objets.`,
      solution: `**1.** $C(0) = 50$ : même sans rien produire, l'entreprise supporte $50$ centaines d'euros, soit $5\\,000$ € de frais fixes par jour.

**2.** $C'(q) = 3q^2 - 24q + 60$.

**3.** $3(q - 4)^2 + 12 = 3(q^2 - 8q + 16) + 12 = 3q^2 - 24q + 48 + 12 = 3q^2 - 24q + 60 = C'(q)$.

**4.** Un carré est positif ou nul, donc $3(q - 4)^2 \\geqslant 0$ et $C'(q) \\geqslant 12 > 0$. La fonction $C$ est strictement croissante sur $[0 ; 10]$ : produire davantage coûte toujours plus.

**5.** $1\\,000$ objets correspondent à $q = 10$ : $C(10) = 1000 - 1200 + 600 + 50 = 450$ centaines d'euros, soit $45\\,000$ €.` },
    { id: "1T5-ds-11", title: "Tangentes de coefficient directeur imposé", difficulty: 3, points: 6,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^2 + x - 2$, de courbe $\\mathcal{C}$.

1. Calculer $f'(x)$.
2. Déterminer le point de $\\mathcal{C}$ où la tangente a pour coefficient directeur $5$, puis l'équation de cette tangente.
3. Déterminer le point de $\\mathcal{C}$ où la tangente est horizontale.
4. Déterminer l'équation de la tangente à $\\mathcal{C}$ parallèle à la droite $d$ d'équation $y = -3x + 1$.`,
      solution: `**1.** $f'(x) = 2x + 1$.

**2.** $f'(x) = 5 \\iff 2x + 1 = 5 \\iff x = 2$. Or $f(2) = 4 + 2 - 2 = 4$ : c'est le point $(2 ; 4)$. Tangente : $y = 5(x - 2) + 4$, soit $y = 5x - 6$.

**3.** $f'(x) = 0 \\iff x = -\\frac{1}{2}$, et $f\\left(-\\frac{1}{2}\\right) = \\frac{1}{4} - \\frac{1}{2} - 2 = -\\frac{9}{4}$. La tangente est horizontale au point $\\left(-\\frac{1}{2} ; -\\frac{9}{4}\\right)$.

**4.** Deux droites sont parallèles lorsqu'elles ont le même coefficient directeur : $2x + 1 = -3 \\iff x = -2$. Comme $f(-2) = 4 - 2 - 2 = 0$, la tangente a pour équation $y = -3(x + 2) + 0$, soit $y = -3x - 6$.` },
    { id: "1T5-ds-12", title: "Extremums sur un intervalle fermé", difficulty: 3, points: 6,
      statement: `Soit $f$ la fonction définie sur $[-3 ; 3]$ par $f(x) = -2x^3 + 3x^2 + 12x - 4$.

1. Calculer $f'(x)$ et vérifier que $f'(x) = -6(x - 2)(x + 1)$.
2. Étudier le signe de $f'(x)$ sur $[-3 ; 3]$.
3. Dresser le tableau de variations de $f$ sur $[-3 ; 3]$, avec les images de $-3$, $-1$, $2$ et $3$.
4. Quel est le maximum de $f$ sur $[-3 ; 3]$ ? Quel est son minimum ?`,
      solution: `**1.** $f'(x) = -6x^2 + 6x + 12$. Et $-6(x - 2)(x + 1) = -6(x^2 + x - 2x - 2) = -6(x^2 - x - 2) = -6x^2 + 6x + 12$.

**2.** Le produit $(x - 2)(x + 1)$ est positif à l'extérieur de $-1$ et $2$, négatif entre ; le facteur $-6$ inverse ces signes. Donc $f'(x) < 0$ sur $[-3 ; -1[$, $f'(x) > 0$ sur $]-1 ; 2[$ et $f'(x) < 0$ sur $]2 ; 3]$.

**3.** $f(-3) = 54 + 27 - 36 - 4 = 41$ ; $f(-1) = 2 + 3 - 12 - 4 = -11$ ; $f(2) = -16 + 12 + 24 - 4 = 16$ ; $f(3) = -54 + 27 + 36 - 4 = 5$.

| $x$ | $-3$ | | $-1$ | | $2$ | | $3$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $f(x)$ | $41$ | $\\searrow$ | $-11$ | $\\nearrow$ | $16$ | $\\searrow$ | $5$ |

**4.** Le minimum vaut $-11$, atteint en $-1$. Attention : le maximum local $16$ en $2$ n'est pas le maximum sur l'intervalle, car $f(-3) = 41 > 16$. Le maximum de $f$ sur $[-3 ; 3]$ vaut $41$, atteint en $-3$.` },
    { id: "1T5-ds-13", title: "Bénéfice d'un artisan", difficulty: 4, points: 8,
      statement: `Un artisan fabrique et vend $x$ objets par mois, avec $x \\in [0 ; 50]$. Chaque objet est vendu $50$ €, et le coût de fabrication de $x$ objets est $C(x) = x^2 + 10x + 175$ (en euros).

1. Montrer que le bénéfice mensuel est $B(x) = -x^2 + 40x - 175$.
2. Vérifier que $B(x) = -(x - 5)(x - 35)$.
3. Pour quelles quantités l'artisan réalise-t-il un bénéfice positif ou nul ?
4. Calculer $B'(x)$ et dresser le tableau de variations de $B$ sur $[0 ; 50]$.
5. Combien d'objets doit-il vendre pour que son bénéfice soit maximal ? Quel est ce bénéfice ?`,
      solution: `**1.** La recette vaut $50x$, donc $B(x) = 50x - (x^2 + 10x + 175) = -x^2 + 40x - 175$.

**2.** $-(x - 5)(x - 35) = -(x^2 - 35x - 5x + 175) = -(x^2 - 40x + 175) = -x^2 + 40x - 175$.

**3.** Le produit $(x - 5)(x - 35)$ est négatif ou nul pour $x \\in [5 ; 35]$, donc $B(x) \\geqslant 0$ sur $[5 ; 35]$ : l'artisan doit vendre entre $5$ et $35$ objets.

**4.** $B'(x) = -2x + 40$, positive sur $[0 ; 20[$, nulle en $20$, négative sur $]20 ; 50]$. $B(0) = -175$, $B(20) = -400 + 800 - 175 = 225$, $B(50) = -2500 + 2000 - 175 = -675$.

| $x$ | $0$ | | $20$ | | $50$ |
|---|---|---|---|---|---|
| $B'(x)$ | | $+$ | $0$ | $-$ | |
| $B(x)$ | $-175$ | $\\nearrow$ | $225$ | $\\searrow$ | $-675$ |

**5.** Le bénéfice est maximal pour $20$ objets vendus ; il vaut alors $225$ €.` },
    { id: "1T5-ds-14", title: "Boîte de volume maximal", difficulty: 4, points: 8,
      statement: `Dans une plaque rectangulaire de $16$ cm sur $10$ cm, on découpe aux quatre coins un carré de côté $x$ cm, puis on relève les bords pour obtenir une boîte sans couvercle.

1. Exprimer la longueur, la largeur et la hauteur de la boîte en fonction de $x$. Pourquoi a-t-on $x \\in ]0 ; 5[$ ?
2. Montrer que le volume de la boîte est $V(x) = 4x^3 - 52x^2 + 160x$ (en cm³).
3. Calculer $V'(x)$ et vérifier que $V'(x) = 4(x - 2)(3x - 20)$.
4. Étudier le signe de $V'(x)$ sur $]0 ; 5[$ et dresser le tableau de variations de $V$.
5. Pour quelle valeur de $x$ le volume est-il maximal ? Donner ce volume et les dimensions de la boîte.`,
      solution: `**1.** Longueur $16 - 2x$, largeur $10 - 2x$, hauteur $x$. Il faut $x > 0$ et $10 - 2x > 0$, c'est-à-dire $x < 5$ : donc $x \\in ]0 ; 5[$.

**2.** $V(x) = x(16 - 2x)(10 - 2x) = x(160 - 32x - 20x + 4x^2) = x(4x^2 - 52x + 160) = 4x^3 - 52x^2 + 160x$.

**3.** $V'(x) = 12x^2 - 104x + 160$. Et $4(x - 2)(3x - 20) = 4(3x^2 - 20x - 6x + 40) = 4(3x^2 - 26x + 40) = 12x^2 - 104x + 160$.

**4.** Sur $]0 ; 5[$, $3x - 20 < 3 \\times 5 - 20 < 0$. Le signe de $V'(x)$ est donc l'opposé de celui de $x - 2$ : $V'(x) > 0$ sur $]0 ; 2[$ et $V'(x) < 0$ sur $]2 ; 5[$. Ainsi $V$ est croissante sur $]0 ; 2]$ et décroissante sur $[2 ; 5[$.

**5.** Le volume est maximal pour $x = 2$ : $V(2) = 32 - 208 + 320 = 144$ cm³. La boîte mesure alors $12$ cm sur $6$ cm, pour une hauteur de $2$ cm ($12 \\times 6 \\times 2 = 144$).` },
    { id: "1T5-ds-15", title: "Trajectoire d'une balle", difficulty: 4, points: 7,
      statement: `Une balle est lancée verticalement. Sa hauteur (en mètres) au bout de $t$ secondes est $h(t) = -5t^2 + 20t + 1{,}5$, pour $t \\in [0 ; 4]$.

1. De quelle hauteur la balle est-elle lancée ?
2. Calculer $h'(t)$, puis la vitesse instantanée de la balle à l'instant $t = 1$.
3. Dresser le tableau de variations de $h$ sur $[0 ; 4]$.
4. Quelle hauteur maximale la balle atteint-elle, et à quel instant ?
5. Calculer $h'(3)$ et interpréter son signe.`,
      solution: `**1.** $h(0) = 1{,}5$ : la balle est lancée à $1{,}5$ m du sol.

**2.** $h'(t) = -10t + 20$. À $t = 1$ : $h'(1) = 10$ m/s, la balle monte à $10$ m/s.

**3.** $h'(t) > 0 \\iff t < 2$. $h(2) = -20 + 40 + 1{,}5 = 21{,}5$ et $h(4) = -80 + 80 + 1{,}5 = 1{,}5$.

| $t$ | $0$ | | $2$ | | $4$ |
|---|---|---|---|---|---|
| $h'(t)$ | | $+$ | $0$ | $-$ | |
| $h(t)$ | $1{,}5$ | $\\nearrow$ | $21{,}5$ | $\\searrow$ | $1{,}5$ |

**4.** La hauteur maximale est $21{,}5$ m, atteinte au bout de $2$ secondes (la vitesse y est nulle).

**5.** $h'(3) = -30 + 20 = -10$ : la dérivée est négative, la hauteur diminue ; à cet instant la balle redescend à $10$ m/s.` },
    { id: "1T5-ds-16", title: "Tangentes parallèles à une droite donnée", difficulty: 4, points: 7,
      statement: `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = x^3 - 3x^2 + 2$, de courbe $\\mathcal{C}$.

1. Calculer $f'(x)$, puis écrire $f'(x)$ sous forme factorisée.
2. Déterminer les points de $\\mathcal{C}$ où la tangente est horizontale.
3. Vérifier que $3x^2 - 6x - 9 = 3(x - 3)(x + 1)$.
4. En déduire les abscisses des points de $\\mathcal{C}$ où la tangente est parallèle à la droite $d$ d'équation $y = 9x$.
5. Donner les équations de ces tangentes.`,
      solution: `**1.** $f'(x) = 3x^2 - 6x = 3x(x - 2)$.

**2.** $f'(x) = 0 \\iff 3x = 0$ ou $x - 2 = 0 \\iff x = 0$ ou $x = 2$. Comme $f(0) = 2$ et $f(2) = 8 - 12 + 2 = -2$, les tangentes horizontales sont aux points $(0 ; 2)$ et $(2 ; -2)$.

**3.** $3(x - 3)(x + 1) = 3(x^2 + x - 3x - 3) = 3(x^2 - 2x - 3) = 3x^2 - 6x - 9$.

**4.** La tangente est parallèle à $d$ lorsque $f'(x) = 9$, soit $3x^2 - 6x - 9 = 0$, c'est-à-dire $3(x - 3)(x + 1) = 0$ : $x = 3$ ou $x = -1$.

**5.** $f(3) = 27 - 27 + 2 = 2$ : tangente $y = 9(x - 3) + 2$, soit $y = 9x - 25$. $f(-1) = -1 - 3 + 2 = -2$ : tangente $y = 9(x + 1) - 2$, soit $y = 9x + 7$.` }
  ],
  "1T6": [
    { id: "1T6-ds-01", title: "Nuage de points et point moyen", difficulty: 1, points: 4,
      statement: `Le tableau donne les ventes $y$ (en milliers d'unités) d'un produit selon le rang $x$ de l'année.

| Rang $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| Ventes $y$ | $12$ | $15$ | $17$ | $20$ | $26$ |

1. Représenter le nuage de points associé à cette série dans un repère bien choisi.
2. Calculer la moyenne $\\bar{x}$ des rangs.
3. Calculer la moyenne $\\bar{y}$ des ventes.
4. Donner les coordonnées du point moyen $G$ et le placer sur le graphique.`,
      solution: `**1.** On place les cinq points $M_1(1 ; 12)$, $M_2(2 ; 15)$, $M_3(3 ; 17)$, $M_4(4 ; 20)$ et $M_5(5 ; 26)$, par exemple avec $1$ cm pour une unité en abscisse et $1$ cm pour $2$ milliers en ordonnée, en commençant l'axe des ordonnées à $10$. Les points sont presque alignés.

**2.** $\\bar{x} = \\frac{1 + 2 + 3 + 4 + 5}{5} = \\frac{15}{5} = 3$.

**3.** $\\bar{y} = \\frac{12 + 15 + 17 + 20 + 26}{5} = \\frac{90}{5} = 18$.

**4.** $G(3 ; 18)$ : il se place au milieu du nuage, légèrement au-dessus de $M_3$.` },
    { id: "1T6-ds-02", title: "Prévisions de fréquentation", difficulty: 1, points: 4,
      statement: `La fréquentation annuelle d'un musée, relevée de 2018 à 2024, est ajustée par la droite d'équation $y = 1{,}8x + 25$, où $y$ est le nombre de visiteurs (en milliers) et $x$ le rang de l'année ($x = 1$ pour 2018).

1. Quel rang correspond à l'année 2022 ? Estimer la fréquentation en 2022.
2. Estimer la fréquentation en 2030.
3. L'une de ces estimations est une interpolation, l'autre une extrapolation : préciser laquelle.
4. Interpréter le coefficient directeur $1{,}8$ dans le contexte.`,
      solution: `**1.** 2022 correspond au rang $x = 5$ : $y = 1{,}8 \\times 5 + 25 = 9 + 25 = 34$, soit environ $34\\,000$ visiteurs.

**2.** 2030 correspond au rang $x = 13$ : $y = 1{,}8 \\times 13 + 25 = 23{,}4 + 25 = 48{,}4$, soit environ $48\\,400$ visiteurs.

**3.** Les données vont du rang $1$ au rang $7$ (2024). L'estimation pour 2022 est une **interpolation** (à l'intérieur des données), celle pour 2030 une **extrapolation**, valable seulement si la tendance se maintient.

**4.** D'après cet ajustement, la fréquentation augmente d'environ $1\\,800$ visiteurs chaque année.` },
    { id: "1T6-ds-03", title: "Vérifier qu'un ajustement passe par G", difficulty: 1, points: 4,
      statement: `On considère la série statistique suivante.

| $x$ | $2$ | $4$ | $6$ | $8$ | $10$ |
|---|---|---|---|---|---|
| $y$ | $7$ | $11$ | $16$ | $19$ | $24$ |

Un tableur propose la droite d'ajustement $\\mathcal{D}$ d'équation $y = 2{,}1x + 2{,}8$.

1. Calculer les coordonnées du point moyen $G$.
2. Vérifier que $G$ appartient à $\\mathcal{D}$.
3. Estimer, à l'aide de $\\mathcal{D}$, la valeur de $y$ pour $x = 5$.
4. S'agit-il d'une interpolation ou d'une extrapolation ?`,
      solution: `**1.** $\\bar{x} = \\frac{2 + 4 + 6 + 8 + 10}{5} = \\frac{30}{5} = 6$ et $\\bar{y} = \\frac{7 + 11 + 16 + 19 + 24}{5} = \\frac{77}{5} = 15{,}4$. Donc $G(6 ; 15{,}4)$.

**2.** Pour $x = 6$ : $2{,}1 \\times 6 + 2{,}8 = 12{,}6 + 2{,}8 = 15{,}4$. On retrouve $\\bar{y}$ : $G$ appartient bien à $\\mathcal{D}$.

**3.** $y = 2{,}1 \\times 5 + 2{,}8 = 10{,}5 + 2{,}8 = 13{,}3$.

**4.** $x = 5$ est compris entre $2$ et $10$, plus petite et plus grande valeur de $x$ : c'est une interpolation.` },
    { id: "1T6-ds-04", title: "Rappel : tableau croisé d'effectifs", difficulty: 1, points: 4,
      statement: `On a demandé à $250$ élèves s'ils préfèrent l'atelier cinéma ou l'atelier théâtre.

| | Cinéma | Théâtre | Total |
|---|---|---|---|
| Filles | $60$ | $70$ | $130$ |
| Garçons | $80$ | $40$ | $120$ |
| Total | $140$ | $110$ | $250$ |

1. Calculer la fréquence marginale des élèves préférant le cinéma.
2. Calculer la fréquence des filles parmi les élèves préférant le théâtre (arrondir au centième).
3. Calculer la fréquence des élèves préférant le théâtre parmi les filles (arrondir au centième).
4. Expliquer pourquoi les résultats des questions 2 et 3 sont différents.`,
      solution: `**1.** $\\frac{140}{250} = 0{,}56$ : $56\\,\\%$ des élèves préfèrent le cinéma.

**2.** Parmi les $110$ élèves préférant le théâtre, $70$ sont des filles : $\\frac{70}{110} = \\frac{7}{11} \\approx 0{,}64$.

**3.** Parmi les $130$ filles, $70$ préfèrent le théâtre : $\\frac{70}{130} = \\frac{7}{13} \\approx 0{,}54$.

**4.** Le numérateur est le même ($70$), mais la population de référence change : les élèves préférant le théâtre ($110$) dans la question 2, les filles ($130$) dans la question 3.` },
    { id: "1T6-ds-05", title: "Droite d'ajustement par le point moyen", difficulty: 2, points: 5,
      statement: `Le chiffre d'affaires $y$ (en milliers d'euros) d'une boutique est relevé pendant six années ; $x$ est le rang de l'année ($x = 0$ pour la première).

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| $y$ | $52$ | $56$ | $60$ | $63$ | $68$ | $73$ |

1. Calculer les coordonnées du point moyen $G$.
2. La calculatrice donne une droite d'ajustement de coefficient directeur $a \\approx 4{,}1$ passant par $G$. Déterminer son équation.
3. Estimer le chiffre d'affaires au rang $8$.
4. Que représente le coefficient $4{,}1$ pour la boutique ?`,
      solution: `**1.** $\\bar{x} = \\frac{0 + 1 + 2 + 3 + 4 + 5}{6} = \\frac{15}{6} = 2{,}5$ et $\\bar{y} = \\frac{52 + 56 + 60 + 63 + 68 + 73}{6} = \\frac{372}{6} = 62$. Donc $G(2{,}5 ; 62)$.

**2.** La droite $y = 4{,}1x + b$ passe par $G$ : $62 = 4{,}1 \\times 2{,}5 + b = 10{,}25 + b$, donc $b = 51{,}75$. Équation : $y = 4{,}1x + 51{,}75$.

**3.** $y = 4{,}1 \\times 8 + 51{,}75 = 32{,}8 + 51{,}75 = 84{,}55$ : environ $84{,}55$ milliers d'euros, si la tendance se poursuit (extrapolation).

**4.** Selon cet ajustement, le chiffre d'affaires augmente en moyenne d'environ $4{,}1$ milliers d'euros, soit $4\\,100$ €, par an.` },
    { id: "1T6-ds-06", title: "Baisse de consommation et seuil", difficulty: 2, points: 5,
      statement: `La consommation annuelle d'eau d'un foyer type (en m³) est ajustée par la droite $y = -2{,}4x + 96$, où $x$ est le rang de l'année ($x = 0$ pour 2015).

1. Estimer la consommation en 2020.
2. Déterminer, par le calcul, à partir de quelle année la consommation estimée deviendra strictement inférieure à $60$ m³.
3. Selon cet ajustement, la consommation deviendrait nulle au rang $40$. Que penser de cette prévision ?`,
      solution: `**1.** 2020 correspond à $x = 5$ : $y = -2{,}4 \\times 5 + 96 = -12 + 96 = 84$ m³.

**2.** $-2{,}4x + 96 < 60 \\iff -2{,}4x < -36 \\iff x > 15$ (on divise par un nombre négatif, le sens de l'inégalité change). Au rang $15$, la consommation vaut exactement $60$ m³ ; elle devient inférieure à $60$ m³ à partir du rang $16$, soit l'année $2015 + 16 = 2031$.

**3.** $-2{,}4 \\times 40 + 96 = 0$. Une consommation nulle n'a pas de sens pour un foyer : cette extrapolation très lointaine n'est pas pertinente, la baisse ne peut pas continuer au même rythme indéfiniment.` },
    { id: "1T6-ds-07", title: "Ajustement au jugé par deux points", difficulty: 2, points: 5,
      statement: `On relève le nombre $y$ d'abonnés (en centaines) d'une salle de sport selon le rang $x$ du mois.

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
|---|---|---|---|---|---|---|---|
| $y$ | $14$ | $18$ | $19$ | $23$ | $26$ | $29$ | $32$ |

On choisit d'ajuster ce nuage par la droite $\\mathcal{D}$ passant par $M_1(1 ; 14)$ et $M_7(7 ; 32)$.

1. Déterminer l'équation réduite de $\\mathcal{D}$.
2. Calculer les coordonnées du point moyen $G$ du nuage.
3. La droite $\\mathcal{D}$ passe-t-elle par $G$ ?
4. Estimer le nombre d'abonnés au mois de rang $10$.`,
      solution: `**1.** $a = \\frac{32 - 14}{7 - 1} = \\frac{18}{6} = 3$ et $b = 14 - 3 \\times 1 = 11$. Donc $\\mathcal{D} : y = 3x + 11$.

**2.** $\\bar{x} = \\frac{28}{7} = 4$ et $\\bar{y} = \\frac{14 + 18 + 19 + 23 + 26 + 29 + 32}{7} = \\frac{161}{7} = 23$. Donc $G(4 ; 23)$.

**3.** $3 \\times 4 + 11 = 23 = \\bar{y}$ : oui, $G$ appartient à $\\mathcal{D}$, ce qui conforte ce choix d'ajustement.

**4.** $y = 3 \\times 10 + 11 = 41$, soit environ $4\\,100$ abonnés au mois de rang $10$ (extrapolation).` },
    { id: "1T6-ds-08", title: "Écarts entre valeurs observées et estimées", difficulty: 2, points: 5,
      statement: `Pour une série statistique, on propose l'ajustement $y = 0{,}5x + 3$.

| $x$ | $2$ | $4$ | $6$ | $8$ |
|---|---|---|---|---|
| $y$ observé | $4{,}2$ | $4{,}8$ | $6{,}1$ | $7$ |

1. Calculer les valeurs de $y$ estimées par l'ajustement pour chaque valeur de $x$.
2. Calculer pour chaque $x$ l'écart « valeur observée moins valeur estimée ».
3. Pour quelles valeurs de $x$ l'écart est-il le plus grand en valeur absolue ?
4. Cet ajustement vous semble-t-il satisfaisant ? Justifier.`,
      solution: `**1.** Valeurs estimées : $0{,}5 \\times 2 + 3 = 4$ ; $0{,}5 \\times 4 + 3 = 5$ ; $0{,}5 \\times 6 + 3 = 6$ ; $0{,}5 \\times 8 + 3 = 7$.

**2.** Écarts : $4{,}2 - 4 = 0{,}2$ ; $4{,}8 - 5 = -0{,}2$ ; $6{,}1 - 6 = 0{,}1$ ; $7 - 7 = 0$.

**3.** Le plus grand écart en valeur absolue vaut $0{,}2$, pour $x = 2$ et $x = 4$.

**4.** Les écarts sont faibles (au plus $0{,}2$ pour des valeurs comprises entre $4$ et $7$), de signes variés : les points sont proches de la droite, l'ajustement est satisfaisant.` },
    { id: "1T6-ds-09", title: "Évolution d'un prix", difficulty: 3, points: 6,
      statement: `Le prix moyen $y$ (en euros) d'un abonnement est relevé de 2019 ($x = 0$) à 2024 ($x = 5$).

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| $y$ | $20$ | $22$ | $25$ | $27$ | $29$ | $33$ |

1. Calculer les coordonnées du point moyen $G$.
2. On ajuste le nuage par la droite de coefficient directeur $2{,}5$ passant par $G$. Déterminer son équation.
3. Estimer le prix de l'abonnement en 2027.
4. Déterminer par le calcul en quelle année le prix estimé dépassera $45$ € pour la première fois.`,
      solution: `**1.** $\\bar{x} = \\frac{15}{6} = 2{,}5$ et $\\bar{y} = \\frac{20 + 22 + 25 + 27 + 29 + 33}{6} = \\frac{156}{6} = 26$. Donc $G(2{,}5 ; 26)$.

**2.** $26 = 2{,}5 \\times 2{,}5 + b = 6{,}25 + b$, donc $b = 19{,}75$. Équation : $y = 2{,}5x + 19{,}75$.

**3.** 2027 correspond à $x = 8$ : $y = 20 + 19{,}75 = 39{,}75$ €.

**4.** $2{,}5x + 19{,}75 > 45 \\iff 2{,}5x > 25{,}25 \\iff x > 10{,}1$. Le premier rang entier est $x = 11$ (au rang $10$, on obtient $44{,}75$ €), soit l'année $2019 + 11 = 2030$.` },
    { id: "1T6-ds-10", title: "Donnée manquante et prévision", difficulty: 3, points: 6,
      statement: `Une série statistique a été partiellement effacée.

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $y$ | $8$ | $11$ | $c$ | $16$ | $20$ | $22$ |

On sait que le point moyen du nuage est $G(3{,}5 ; 15)$.

1. Vérifier l'abscisse de $G$.
2. Déterminer la valeur de $c$.
3. On ajuste le nuage par la droite de coefficient directeur $2{,}8$ passant par $G$. Déterminer son équation.
4. Estimer la valeur de $y$ pour $x = 9$.`,
      solution: `**1.** $\\bar{x} = \\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = \\frac{21}{6} = 3{,}5$ : c'est bien l'abscisse de $G$.

**2.** La somme des six valeurs de $y$ vaut $6 \\times 15 = 90$. Or $8 + 11 + 16 + 20 + 22 = 77$, donc $c = 90 - 77 = 13$.

**3.** $15 = 2{,}8 \\times 3{,}5 + b = 9{,}8 + b$, donc $b = 5{,}2$. Équation : $y = 2{,}8x + 5{,}2$.

**4.** $y = 2{,}8 \\times 9 + 5{,}2 = 25{,}2 + 5{,}2 = 30{,}4$. Il s'agit d'une extrapolation ($9$ est hors de la plage de $1$ à $6$), à utiliser avec prudence.` },
    { id: "1T6-ds-11", title: "Deux ajustements concurrents", difficulty: 3, points: 6,
      statement: `Les ventes annuelles (en milliers d'articles) de deux marques sont ajustées par les droites $y = 3x + 40$ pour la marque A et $y = 5{,}5x + 15$ pour la marque B, où $x$ est le rang de l'année ($x = 1$ pour 2020).

1. Comparer les ventes estimées des deux marques au rang $4$.
2. Déterminer par le calcul à partir de quel rang les ventes estimées de B dépassent celles de A.
3. À quelle année ce rang correspond-il ?
4. Les données ayant été relevées de 2020 à 2025, quelle réserve peut-on formuler sur cette conclusion ?`,
      solution: `**1.** Au rang $4$ : marque A, $3 \\times 4 + 40 = 52$ ; marque B, $5{,}5 \\times 4 + 15 = 37$. La marque A vend environ $15\\,000$ articles de plus.

**2.** $5{,}5x + 15 > 3x + 40 \\iff 2{,}5x > 25 \\iff x > 10$. Au rang $10$, les deux estimations sont égales ($70$) ; les ventes de B dépassent celles de A à partir du rang $11$.

**3.** Le rang $11$ correspond à l'année $2020 + 10 = 2030$.

**4.** Les données couvrent les rangs $1$ à $6$ : la conclusion repose sur une extrapolation à plusieurs années, valable seulement si les deux tendances se maintiennent.` },
    { id: "1T6-ds-12", title: "Température et altitude", difficulty: 3, points: 6,
      statement: `Lors d'une randonnée, on relève la température $T$ (en °C) selon l'altitude $x$ (en centaines de mètres).

| $x$ | $2$ | $5$ | $8$ | $11$ | $14$ |
|---|---|---|---|---|---|
| $T$ | $18{,}2$ | $16{,}1$ | $13{,}9$ | $12{,}2$ | $9{,}6$ |

1. Calculer les coordonnées du point moyen $G$.
2. On ajuste le nuage par la droite de coefficient directeur $-0{,}7$ passant par $G$. Déterminer son équation.
3. Estimer la température à $1\\,000$ m d'altitude.
4. Estimer la température à $4\\,000$ m. Quelle prudence faut-il avoir ?
5. À quelle altitude l'ajustement prévoit-il une température de $0$ °C ?`,
      solution: `**1.** $\\bar{x} = \\frac{2 + 5 + 8 + 11 + 14}{5} = \\frac{40}{5} = 8$ et $\\bar{T} = \\frac{18{,}2 + 16{,}1 + 13{,}9 + 12{,}2 + 9{,}6}{5} = \\frac{70}{5} = 14$. Donc $G(8 ; 14)$.

**2.** $14 = -0{,}7 \\times 8 + b = -5{,}6 + b$, donc $b = 19{,}6$ : $T = -0{,}7x + 19{,}6$.

**3.** $1\\,000$ m correspond à $x = 10$ : $T = -7 + 19{,}6 = 12{,}6$ °C (interpolation).

**4.** $x = 40$ : $T = -28 + 19{,}6 = -8{,}4$ °C. C'est une extrapolation très éloignée des relevés (au plus $1\\,400$ m) : l'estimation est peu fiable.

**5.** $-0{,}7x + 19{,}6 = 0 \\iff x = \\frac{19{,}6}{0{,}7} = 28$, soit une altitude de $2\\,800$ m.` },
    { id: "1T6-ds-13", title: "Étude complète d'une série", difficulty: 4, points: 8,
      statement: `La fréquentation mensuelle $y$ (en milliers de visites) d'un site internet est relevée pendant six mois ; $x$ est le rang du mois.

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---|---|---|---|---|---|---|
| $y$ | $3{,}1$ | $4$ | $4{,}8$ | $6{,}1$ | $6{,}9$ | $8{,}1$ |

1. Représenter le nuage de points. Un ajustement affine est-il justifié ?
2. Calculer les coordonnées du point moyen $G$.
3. Un tableur donne une droite d'ajustement de coefficient directeur $1$ passant par $G$. Déterminer son équation.
4. Calculer l'écart entre la valeur observée et la valeur estimée pour $x = 4$.
5. Selon cet ajustement, à partir de quel mois la fréquentation dépassera-t-elle $15$ milliers de visites ?
6. Citer une raison pour laquelle cette prévision pourrait se révéler fausse.`,
      solution: `**1.** Les six points sont presque alignés sur une droite croissante : un ajustement affine est justifié.

**2.** $\\bar{x} = \\frac{21}{6} = 3{,}5$ et $\\bar{y} = \\frac{3{,}1 + 4 + 4{,}8 + 6{,}1 + 6{,}9 + 8{,}1}{6} = \\frac{33}{6} = 5{,}5$. Donc $G(3{,}5 ; 5{,}5)$.

**3.** $5{,}5 = 1 \\times 3{,}5 + b$, donc $b = 2$ : $y = x + 2$.

**4.** Valeur estimée : $4 + 2 = 6$ ; valeur observée : $6{,}1$. L'écart vaut $0{,}1$ millier, soit $100$ visites.

**5.** $x + 2 > 15 \\iff x > 13$ : à partir du mois de rang $14$.

**6.** C'est une extrapolation à $8$ mois de la fin des relevés : la croissance peut ralentir (saturation de l'audience, concurrence, saisonnalité), et la tendance ne se maintiendra pas forcément.` },
    { id: "1T6-ds-14", title: "Deux méthodes d'ajustement", difficulty: 4, points: 8,
      statement: `On étudie la série suivante.

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|
| $y$ | $30$ | $34$ | $37$ | $41$ | $43$ |

Deux élèves proposent chacun un ajustement :
- Inès trace la droite $\\mathcal{D}_1$ passant par le premier et le dernier point du nuage ;
- Hugo utilise la calculatrice, qui donne la droite $\\mathcal{D}_2$ de coefficient directeur $3{,}3$ passant par le point moyen.

1. Calculer les coordonnées du point moyen $G$.
2. Déterminer l'équation de $\\mathcal{D}_1$.
3. Déterminer l'équation de $\\mathcal{D}_2$.
4. La droite $\\mathcal{D}_1$ passe-t-elle par $G$ ?
5. Comparer les prévisions des deux droites pour $x = 8$.`,
      solution: `**1.** $\\bar{x} = \\frac{15}{5} = 3$ et $\\bar{y} = \\frac{30 + 34 + 37 + 41 + 43}{5} = \\frac{185}{5} = 37$. Donc $G(3 ; 37)$.

**2.** $\\mathcal{D}_1$ passe par $(1 ; 30)$ et $(5 ; 43)$ : $a = \\frac{43 - 30}{5 - 1} = \\frac{13}{4} = 3{,}25$ et $b = 30 - 3{,}25 = 26{,}75$. Donc $\\mathcal{D}_1 : y = 3{,}25x + 26{,}75$.

**3.** $37 = 3{,}3 \\times 3 + b = 9{,}9 + b$, donc $b = 27{,}1$ : $\\mathcal{D}_2 : y = 3{,}3x + 27{,}1$.

**4.** $3{,}25 \\times 3 + 26{,}75 = 9{,}75 + 26{,}75 = 36{,}5 \\neq 37$ : non, $\\mathcal{D}_1$ ne passe pas par $G$.

**5.** Pour $x = 8$ : $\\mathcal{D}_1$ donne $26 + 26{,}75 = 52{,}75$ et $\\mathcal{D}_2$ donne $26{,}4 + 27{,}1 = 53{,}5$. Les deux prévisions sont proches (écart $0{,}75$), mais l'ajustement au jugé dépend du choix des deux points, alors que celui de la calculatrice tient compte de tous les points.` },
    { id: "1T6-ds-15", title: "Population d'une ville", difficulty: 4, points: 7,
      statement: `La population $y$ d'une ville (en milliers d'habitants) a été recensée tous les cinq ans ; $x$ est le nombre d'années écoulées depuis 2000.

| $x$ | $0$ | $5$ | $10$ | $15$ | $20$ |
|---|---|---|---|---|---|
| $y$ | $42$ | $45$ | $49$ | $51$ | $55$ |

1. Calculer les coordonnées du point moyen $G$.
2. La calculatrice donne la droite d'ajustement $y = 0{,}64x + 42$. Vérifier qu'elle passe par $G$.
3. Estimer la population en 2012, puis en 2030.
4. Déterminer par le calcul l'année à partir de laquelle la population estimée atteindra $70$ milliers d'habitants.
5. Laquelle des estimations précédentes est la plus fiable ? Justifier.`,
      solution: `**1.** $\\bar{x} = \\frac{50}{5} = 10$ et $\\bar{y} = \\frac{42 + 45 + 49 + 51 + 55}{5} = \\frac{242}{5} = 48{,}4$. Donc $G(10 ; 48{,}4)$.

**2.** $0{,}64 \\times 10 + 42 = 6{,}4 + 42 = 48{,}4$ : la droite passe bien par $G$.

**3.** En 2012, $x = 12$ : $y = 7{,}68 + 42 = 49{,}68$, soit environ $49\\,700$ habitants. En 2030, $x = 30$ : $y = 19{,}2 + 42 = 61{,}2$, soit environ $61\\,200$ habitants.

**4.** $0{,}64x + 42 \\geqslant 70 \\iff 0{,}64x \\geqslant 28 \\iff x \\geqslant 43{,}75$. Le premier entier convenable est $44$ : l'année $2000 + 44 = 2044$.

**5.** L'estimation pour 2012 est une interpolation (entre 2010 et 2015) : c'est la plus fiable. Celles de 2030 et surtout de 2044 sont des extrapolations, de moins en moins sûres.` },
    { id: "1T6-ds-16", title: "Quand la tendance change", difficulty: 4, points: 7,
      statement: `Les ventes mensuelles $y$ (en centaines) d'un nouveau produit sont relevées pendant huit mois ; $x$ est le rang du mois.

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|
| $y$ | $10$ | $14$ | $18$ | $21$ | $25$ | $26$ | $26$ | $25$ |

Au bout de cinq mois, le responsable avait ajusté les cinq premiers points par une droite passant par leur point moyen, de coefficient directeur $3{,}7$.

1. Calculer le point moyen des cinq premiers points.
2. Déterminer l'équation de la droite d'ajustement du responsable.
3. Quelle valeur cette droite prévoyait-elle pour le mois de rang $8$ ? Calculer l'écart avec la valeur observée.
4. Décrire l'évolution des ventes à partir du mois de rang $5$ et commenter la prévision faite au bout de cinq mois.`,
      solution: `**1.** Pour les rangs $1$ à $5$ : $\\bar{x} = \\frac{15}{5} = 3$ et $\\bar{y} = \\frac{10 + 14 + 18 + 21 + 25}{5} = \\frac{88}{5} = 17{,}6$. Le point moyen est $(3 ; 17{,}6)$.

**2.** $17{,}6 = 3{,}7 \\times 3 + b = 11{,}1 + b$, donc $b = 6{,}5$ : $y = 3{,}7x + 6{,}5$.

**3.** Au rang $8$ : $y = 29{,}6 + 6{,}5 = 36{,}1$ centaines. La valeur observée est $25$ : l'écart vaut $25 - 36{,}1 = -11{,}1$ centaines, soit $1\\,110$ ventes de moins que prévu.

**4.** À partir du rang $5$, les ventes plafonnent autour de $25$ à $26$ centaines (le marché semble saturé) : le nuage n'est plus allongé selon une droite. La prévision faite au bout de cinq mois était une extrapolation qui supposait une croissance régulière ; elle s'est révélée fausse, ce qui illustre la prudence nécessaire.` }
  ],
  "1T7": [
    { id: "1T7-ds-01", title: "Probabilités à partir d'un tableau croisé", difficulty: 1, points: 4,
      statement: `Un magasin a interrogé $400$ clients. On note $F$ l'événement « le client a une carte de fidélité » et $L$ l'événement « le client a déjà acheté en ligne ».

| | $L$ | $\\bar{L}$ | Total |
|---|---|---|---|
| $F$ | $90$ | $150$ | $240$ |
| $\\bar{F}$ | $70$ | $90$ | $160$ |
| Total | $160$ | $240$ | $400$ |

On choisit un client au hasard.

1. Calculer $P(F)$.
2. Calculer $P(F \\cap L)$.
3. Calculer $P_F(L)$ et traduire ce résultat par une phrase.
4. Calculer $P_L(F)$.`,
      solution: `**1.** $P(F) = \\frac{240}{400} = 0{,}6$.

**2.** $P(F \\cap L) = \\frac{90}{400} = 0{,}225$.

**3.** $P_F(L) = \\frac{90}{240} = \\frac{3}{8} = 0{,}375$ : parmi les clients ayant une carte de fidélité, $37{,}5\\,\\%$ ont déjà acheté en ligne.

**4.** $P_L(F) = \\frac{90}{160} = \\frac{9}{16} = 0{,}5625$ : parmi les clients ayant déjà acheté en ligne, environ $56\\,\\%$ ont une carte. On remarque que $P_F(L) \\neq P_L(F)$.` },
    { id: "1T7-ds-02", title: "Loi d'un gain et espérance", difficulty: 1, points: 4,
      statement: `Une roue est partagée en secteurs. Le gain $X$ d'une partie (en euros) vaut $-2$ avec probabilité $0{,}5$, $1$ avec probabilité $0{,}3$, et $5$ dans les autres cas.

1. Déterminer $P(X = 5)$ et présenter la loi de $X$ dans un tableau.
2. Calculer $P(X > 0)$.
3. Calculer l'espérance $E(X)$.
4. Interpréter ce résultat pour un joueur qui joue un grand nombre de parties.`,
      solution: `**1.** La somme des probabilités vaut $1$ : $P(X = 5) = 1 - 0{,}5 - 0{,}3 = 0{,}2$.

| $x_i$ | $-2$ | $1$ | $5$ |
|---|---|---|---|
| $P(X = x_i)$ | $0{,}5$ | $0{,}3$ | $0{,}2$ |

**2.** $P(X > 0) = P(X = 1) + P(X = 5) = 0{,}3 + 0{,}2 = 0{,}5$.

**3.** $E(X) = -2 \\times 0{,}5 + 1 \\times 0{,}3 + 5 \\times 0{,}2 = -1 + 0{,}3 + 1 = 0{,}3$.

**4.** Sur un grand nombre de parties, le joueur gagne en moyenne $0{,}30$ € par partie : le jeu lui est légèrement favorable.` },
    { id: "1T7-ds-03", title: "Compléter un arbre pondéré", difficulty: 1, points: 4,
      statement: `On considère deux événements $A$ et $B$ tels que $P(A) = 0{,}4$, $P_A(B) = 0{,}7$ et $P_{\\bar{A}}(B) = 0{,}2$.

1. Construire l'arbre pondéré correspondant, en complétant toutes les probabilités.
2. Calculer $P(A \\cap B)$.
3. Calculer $P(\\bar{A} \\cap B)$.
4. En déduire $P(B)$.`,
      solution: `**1.** Premier niveau : $P(A) = 0{,}4$ et $P(\\bar{A}) = 1 - 0{,}4 = 0{,}6$. Après $A$ : $P_A(B) = 0{,}7$ et $P_A(\\bar{B}) = 0{,}3$. Après $\\bar{A}$ : $P_{\\bar{A}}(B) = 0{,}2$ et $P_{\\bar{A}}(\\bar{B}) = 0{,}8$.

**2.** On multiplie le long du chemin : $P(A \\cap B) = 0{,}4 \\times 0{,}7 = 0{,}28$.

**3.** $P(\\bar{A} \\cap B) = 0{,}6 \\times 0{,}2 = 0{,}12$.

**4.** Formule des probabilités totales : $P(B) = 0{,}28 + 0{,}12 = 0{,}4$.` },
    { id: "1T7-ds-04", title: "Deux lancers de dé", difficulty: 1, points: 4,
      statement: `On lance un dé équilibré à six faces. On appelle « succès » l'événement « obtenir $6$ ».

1. Justifier qu'il s'agit d'une épreuve de Bernoulli et donner son paramètre.
2. On lance le dé deux fois, de façon indépendante. Représenter la situation par un arbre pondéré.
3. Calculer la probabilité d'obtenir deux succès, puis celle de n'obtenir aucun succès.
4. Calculer la probabilité d'obtenir exactement un succès.`,
      solution: `**1.** L'expérience a deux issues : succès (obtenir $6$) et échec. Le dé étant équilibré, la probabilité du succès est $p = \\frac{1}{6}$ : c'est une épreuve de Bernoulli de paramètre $\\frac{1}{6}$.

**2.** Chaque lancer donne deux branches : $S$ (probabilité $\\frac{1}{6}$) et $\\bar{S}$ (probabilité $\\frac{5}{6}$). L'arbre comporte quatre chemins : $SS$, $S\\bar{S}$, $\\bar{S}S$, $\\bar{S}\\bar{S}$.

**3.** $P(SS) = \\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36}$ et $P(\\bar{S}\\bar{S}) = \\frac{5}{6} \\times \\frac{5}{6} = \\frac{25}{36}$.

**4.** Deux chemins conviennent, chacun de probabilité $\\frac{1}{6} \\times \\frac{5}{6} = \\frac{5}{36}$ : la probabilité vaut $\\frac{10}{36} = \\frac{5}{18}$. *Contrôle* : $\\frac{1}{36} + \\frac{25}{36} + \\frac{10}{36} = 1$.` },
    { id: "1T7-ds-05", title: "Deux événements indépendants ?", difficulty: 2, points: 5,
      statement: `On a interrogé $200$ personnes : $80$ pratiquent un sport régulièrement, $120$ boivent du café chaque jour, et $48$ font les deux. On choisit une personne au hasard ; on note $S$ l'événement « la personne pratique un sport » et $C$ l'événement « la personne boit du café chaque jour ».

1. Calculer $P(S)$, $P(C)$ et $P(S \\cap C)$.
2. Les événements $S$ et $C$ sont-ils indépendants ? Justifier.
3. Calculer $P_S(C)$ et interpréter le résultat obtenu à la question 2.
4. Les événements $S$ et $C$ sont-ils incompatibles ?`,
      solution: `**1.** $P(S) = \\frac{80}{200} = 0{,}4$ ; $P(C) = \\frac{120}{200} = 0{,}6$ ; $P(S \\cap C) = \\frac{48}{200} = 0{,}24$.

**2.** $P(S) \\times P(C) = 0{,}4 \\times 0{,}6 = 0{,}24 = P(S \\cap C)$ : les événements $S$ et $C$ sont indépendants.

**3.** $P_S(C) = \\frac{48}{80} = 0{,}6 = P(C)$ : la proportion de buveurs de café est la même chez les sportifs que dans l'ensemble des personnes interrogées. Savoir qu'une personne est sportive ne change pas la probabilité qu'elle boive du café.

**4.** Non : $S \\cap C$ n'est pas vide ($48$ personnes font les deux), donc $S$ et $C$ ne sont pas incompatibles.` },
    { id: "1T7-ds-06", title: "Un jeu de dé est-il favorable ?", difficulty: 2, points: 5,
      statement: `On lance un dé équilibré à six faces. Si l'on obtient $6$, on gagne $8$ € ; si l'on obtient $4$ ou $5$, on gagne $2$ € ; sinon, on perd $3$ €. On note $X$ le gain algébrique.

1. Donner la loi de probabilité de $X$ et vérifier que la somme des probabilités vaut $1$.
2. Calculer $E(X)$.
3. Le jeu est-il favorable au joueur ?
4. Quelle perte $\\ell$ (en euros) faudrait-il fixer à la place des $3$ € pour que le jeu soit équitable ?`,
      solution: `**1.** $P(X = 8) = \\frac{1}{6}$, $P(X = 2) = \\frac{2}{6}$, $P(X = -3) = \\frac{3}{6}$. Et $\\frac{1}{6} + \\frac{2}{6} + \\frac{3}{6} = 1$.

**2.** $E(X) = 8 \\times \\frac{1}{6} + 2 \\times \\frac{2}{6} - 3 \\times \\frac{3}{6} = \\frac{8 + 4 - 9}{6} = \\frac{3}{6} = 0{,}5$.

**3.** $E(X) > 0$ : en moyenne, le joueur gagne $0{,}50$ € par partie ; le jeu lui est favorable.

**4.** On veut $\\frac{8 + 4 - 3\\ell}{6} = 0$, soit $12 - 3\\ell = 0$, donc $\\ell = 4$ : il faudrait perdre $4$ € en cas d'échec.` },
    { id: "1T7-ds-07", title: "Retards et moyen de transport", difficulty: 2, points: 5,
      statement: `Chaque matin, Léa va au lycée en bus avec probabilité $0{,}7$, et à vélo sinon. Lorsqu'elle prend le bus, elle arrive en retard avec probabilité $0{,}1$ ; à vélo, avec probabilité $0{,}05$. On note $B$ l'événement « Léa prend le bus » et $R$ l'événement « Léa arrive en retard ».

1. Construire un arbre pondéré décrivant la situation.
2. Calculer $P(B \\cap R)$ et interpréter.
3. Montrer que $P(R) = 0{,}085$.
4. En déduire la probabilité que Léa arrive à l'heure.`,
      solution: `**1.** Premier niveau : $P(B) = 0{,}7$, $P(\\bar{B}) = 0{,}3$. Second niveau : $P_B(R) = 0{,}1$, $P_B(\\bar{R}) = 0{,}9$, $P_{\\bar{B}}(R) = 0{,}05$, $P_{\\bar{B}}(\\bar{R}) = 0{,}95$.

**2.** $P(B \\cap R) = 0{,}7 \\times 0{,}1 = 0{,}07$ : la probabilité que Léa prenne le bus **et** arrive en retard vaut $0{,}07$.

**3.** $P(\\bar{B} \\cap R) = 0{,}3 \\times 0{,}05 = 0{,}015$. Par les probabilités totales, $P(R) = 0{,}07 + 0{,}015 = 0{,}085$.

**4.** $P(\\bar{R}) = 1 - 0{,}085 = 0{,}915$.` },
    { id: "1T7-ds-08", title: "Trois lancers d'une pièce truquée", difficulty: 2, points: 5,
      statement: `Une pièce truquée tombe sur Face avec probabilité $0{,}6$. On la lance trois fois de façon indépendante, et on note $X$ le nombre de Face obtenus.

1. Représenter la situation par un arbre pondéré.
2. Calculer $P(X = 0)$ et $P(X = 3)$.
3. Calculer $P(X = 1)$ et $P(X = 2)$.
4. Vérifier que la somme des probabilités vaut $1$, puis calculer $E(X)$.`,
      solution: `**1.** Chaque lancer donne deux branches : $F$ ($0{,}6$) et $\\bar{F}$ ($0{,}4$) ; l'arbre comporte $8$ chemins.

**2.** $P(X = 0) = 0{,}4^3 = 0{,}064$ et $P(X = 3) = 0{,}6^3 = 0{,}216$.

**3.** Trois chemins comportent un seul Face, chacun de probabilité $0{,}6 \\times 0{,}4^2 = 0{,}096$ : $P(X = 1) = 3 \\times 0{,}096 = 0{,}288$. Trois chemins comportent deux Face, chacun de probabilité $0{,}6^2 \\times 0{,}4 = 0{,}144$ : $P(X = 2) = 3 \\times 0{,}144 = 0{,}432$.

**4.** $0{,}064 + 0{,}288 + 0{,}432 + 0{,}216 = 1$. $E(X) = 0 \\times 0{,}064 + 1 \\times 0{,}288 + 2 \\times 0{,}432 + 3 \\times 0{,}216 = 0{,}288 + 0{,}864 + 0{,}648 = 1{,}8$ : en moyenne $1{,}8$ Face sur trois lancers.` },
    { id: "1T7-ds-09", title: "Test de dépistage", difficulty: 3, points: 6,
      statement: `Dans une population, $5\\,\\%$ des personnes sont atteintes d'une maladie. Un test de dépistage est positif pour $90\\,\\%$ des personnes malades et pour $8\\,\\%$ des personnes non malades. On choisit une personne au hasard ; on note $M$ l'événement « la personne est malade » et $T$ l'événement « le test est positif ».

1. Construire l'arbre pondéré de la situation.
2. Calculer $P(M \\cap T)$.
3. Calculer $P(T)$.
4. Le test d'une personne est positif. Calculer la probabilité qu'elle soit malade (arrondir au centième).
5. Commenter ce résultat.`,
      solution: `**1.** $P(M) = 0{,}05$, $P(\\bar{M}) = 0{,}95$ ; $P_M(T) = 0{,}9$, $P_M(\\bar{T}) = 0{,}1$ ; $P_{\\bar{M}}(T) = 0{,}08$, $P_{\\bar{M}}(\\bar{T}) = 0{,}92$.

**2.** $P(M \\cap T) = 0{,}05 \\times 0{,}9 = 0{,}045$.

**3.** $P(\\bar{M} \\cap T) = 0{,}95 \\times 0{,}08 = 0{,}076$, donc $P(T) = 0{,}045 + 0{,}076 = 0{,}121$.

**4.** $P_T(M) = \\frac{P(M \\cap T)}{P(T)} = \\frac{0{,}045}{0{,}121} = \\frac{45}{121} \\approx 0{,}37$.

**5.** Seules $37\\,\\%$ environ des personnes testées positives sont malades : comme la maladie est rare, les « faux positifs » parmi les nombreuses personnes saines sont plus nombreux que les vrais positifs. Un test positif doit être confirmé par un second examen.` },
    { id: "1T7-ds-10", title: "Pannes de quatre appareils", difficulty: 3, points: 6,
      statement: `Une entreprise possède quatre appareils identiques. Chacun tombe en panne dans l'année avec probabilité $0{,}1$, indépendamment des autres.

1. Justifier que l'on peut modéliser la situation par la répétition de quatre épreuves de Bernoulli identiques et indépendantes.
2. Calculer la probabilité qu'aucun appareil ne tombe en panne dans l'année.
3. En déduire la probabilité qu'au moins un appareil tombe en panne.
4. Calculer la probabilité qu'exactement un appareil tombe en panne.
5. En déduire la probabilité qu'au moins deux appareils tombent en panne.`,
      solution: `**1.** Pour chaque appareil, il y a deux issues : panne (succès, $p = 0{,}1$) ou pas de panne. Les quatre appareils sont identiques et indépendants.

**2.** $P(\\text{aucune panne}) = 0{,}9^4 = 0{,}6561$.

**3.** $P(\\text{au moins une panne}) = 1 - 0{,}6561 = 0{,}3439$.

**4.** Quatre chemins comportent une seule panne (selon l'appareil concerné), chacun de probabilité $0{,}1 \\times 0{,}9^3 = 0{,}0729$ : $P = 4 \\times 0{,}0729 = 0{,}2916$.

**5.** $P(\\text{au moins deux pannes}) = 1 - 0{,}6561 - 0{,}2916 = 0{,}0523$.` },
    { id: "1T7-ds-11", title: "Mise d'un jeu de boules", difficulty: 3, points: 6,
      statement: `Une urne contient $3$ boules rouges, $5$ boules bleues et $2$ boules vertes. Pour jouer, on paie $3$ € et on tire une boule au hasard : une boule rouge rapporte $5$ €, une verte $8$ €, une bleue ne rapporte rien. On note $X$ le gain algébrique (somme reçue moins mise).

1. Déterminer la loi de $X$.
2. Calculer $E(X)$. Le jeu est-il favorable au joueur ?
3. L'organisateur souhaite que le jeu soit équitable. Quelle mise doit-il demander ?
4. Avec la mise de $3$ €, quel bénéfice moyen l'organisateur peut-il attendre sur $500$ parties ?`,
      solution: `**1.** Rouge : $X = 5 - 3 = 2$ avec probabilité $\\frac{3}{10}$ ; verte : $X = 8 - 3 = 5$ avec probabilité $\\frac{2}{10}$ ; bleue : $X = -3$ avec probabilité $\\frac{5}{10}$.

**2.** $E(X) = 2 \\times 0{,}3 + 5 \\times 0{,}2 - 3 \\times 0{,}5 = 0{,}6 + 1 - 1{,}5 = 0{,}1$. $E(X) > 0$ : le jeu est légèrement favorable au joueur.

**3.** La somme reçue a pour espérance $5 \\times 0{,}3 + 8 \\times 0{,}2 + 0 = 1{,}5 + 1{,}6 = 3{,}1$ €. Le jeu est équitable lorsque la mise est égale à cette espérance : $3{,}10$ €.

**4.** Le joueur gagne en moyenne $0{,}10$ € par partie, donc l'organisateur perd en moyenne $500 \\times 0{,}1 = 50$ € sur $500$ parties : son bénéfice moyen est négatif ($-50$ €).` },
    { id: "1T7-ds-12", title: "Fluctuation d'échantillonnage", difficulty: 3, points: 6,
      statement: `Dans une région, la proportion de personnes ayant un certain groupe sanguin est $p = 0{,}3$. On simule $1\\,000$ échantillons de $100$ personnes et l'on calcule pour chacun la fréquence de ce groupe sanguin. L'écart type des fréquences obtenues vaut $s \\approx 0{,}046$.

1. Calculer les bornes de l'intervalle $[p - 2s ; p + 2s]$.
2. Quelle proportion approximative des $1\\,000$ fréquences simulées se trouve dans cet intervalle ?
3. Un échantillon réel de $100$ personnes donne une fréquence de $0{,}42$. Ce résultat est-il habituel au regard de l'intervalle précédent ?
4. Calculer les bornes de $[p - 3s ; p + 3s]$ et nuancer la réponse précédente.
5. On admet que $s$ est de l'ordre de $\\frac{1}{\\sqrt{n}}$. Quelle taille d'échantillon faudrait-il pour diviser $s$ par $3$ ?`,
      solution: `**1.** $2s = 0{,}092$ : $[0{,}3 - 0{,}092 ; 0{,}3 + 0{,}092] = [0{,}208 ; 0{,}392]$.

**2.** Environ $95\\,\\%$ des fréquences simulées, soit environ $950$ échantillons sur $1\\,000$.

**3.** $0{,}42 > 0{,}392$ : la fréquence observée est en dehors de l'intervalle ; un tel résultat ne se produit que dans environ $5\\,\\%$ des échantillons, il est donc peu habituel.

**4.** $3s = 0{,}138$ : $[0{,}162 ; 0{,}438]$. La fréquence $0{,}42$ est dans cet intervalle : le résultat est rare, mais pas exceptionnel au point de remettre en cause la valeur $p = 0{,}3$.

**5.** Pour diviser $s$ par $3$, il faut multiplier la taille par $3^2 = 9$ : des échantillons de $900$ personnes.` },
    { id: "1T7-ds-13", title: "Deux fournisseurs et contrôle qualité", difficulty: 4, points: 8,
      statement: `Une usine achète ses composants à deux fournisseurs : $60\\,\\%$ au fournisseur $F_1$, dont $3\\,\\%$ des composants sont défectueux, et $40\\,\\%$ au fournisseur $F_2$, dont $5\\,\\%$ sont défectueux. On choisit un composant au hasard ; on note $D$ l'événement « le composant est défectueux ».

1. Construire un arbre pondéré.
2. Montrer que $P(D) = 0{,}038$.
3. Un composant est défectueux. Calculer la probabilité qu'il provienne de $F_1$ (donner la valeur exacte puis un arrondi au centième).
4. On prélève trois composants, de façon indépendante. Calculer la probabilité qu'aucun ne soit défectueux (arrondir au millième).
5. En déduire la probabilité qu'au moins un des trois composants soit défectueux.`,
      solution: `**1.** $P(F_1) = 0{,}6$, $P(F_2) = 0{,}4$ ; $P_{F_1}(D) = 0{,}03$, $P_{F_1}(\\bar{D}) = 0{,}97$ ; $P_{F_2}(D) = 0{,}05$, $P_{F_2}(\\bar{D}) = 0{,}95$.

**2.** $P(F_1 \\cap D) = 0{,}6 \\times 0{,}03 = 0{,}018$ et $P(F_2 \\cap D) = 0{,}4 \\times 0{,}05 = 0{,}02$. Par les probabilités totales, $P(D) = 0{,}018 + 0{,}02 = 0{,}038$.

**3.** $P_D(F_1) = \\frac{0{,}018}{0{,}038} = \\frac{18}{38} = \\frac{9}{19} \\approx 0{,}47$.

**4.** $P(\\bar{D}) = 1 - 0{,}038 = 0{,}962$. Les prélèvements étant indépendants : $0{,}962^3 \\approx 0{,}890$.

**5.** $P(\\text{au moins un défectueux}) = 1 - 0{,}962^3 \\approx 1 - 0{,}890 = 0{,}110$.` },
    { id: "1T7-ds-14", title: "Jeu à deux étapes", difficulty: 4, points: 8,
      statement: `Un jeu se déroule ainsi : on lance une pièce équilibrée. Si l'on obtient Pile, on tire une boule dans l'urne $U_1$, qui contient $2$ boules gagnantes sur $5$ ; si l'on obtient Face, on tire dans l'urne $U_2$, qui contient $1$ boule gagnante sur $4$. On note $G$ l'événement « la boule tirée est gagnante ».

1. Construire un arbre pondéré et montrer que $P(G) = 0{,}325$.
2. Le joueur a gagné. Quelle est la probabilité qu'il ait obtenu Pile ?
3. Pour jouer, on paie $2$ € et l'on reçoit $5$ € en cas de victoire. Déterminer la loi du gain algébrique $X$ et calculer $E(X)$.
4. Quelle somme devrait-on recevoir en cas de victoire pour que le jeu soit équitable (mise inchangée) ? Arrondir au centime.`,
      solution: `**1.** $P(\\text{Pile}) = P(\\text{Face}) = 0{,}5$ ; $P_{\\text{Pile}}(G) = \\frac{2}{5} = 0{,}4$ et $P_{\\text{Face}}(G) = \\frac{1}{4} = 0{,}25$. $P(G) = 0{,}5 \\times 0{,}4 + 0{,}5 \\times 0{,}25 = 0{,}2 + 0{,}125 = 0{,}325$.

**2.** $P_G(\\text{Pile}) = \\frac{0{,}2}{0{,}325} = \\frac{200}{325} = \\frac{8}{13} \\approx 0{,}62$.

**3.** $X = 5 - 2 = 3$ avec probabilité $0{,}325$ et $X = -2$ avec probabilité $0{,}675$. $E(X) = 3 \\times 0{,}325 - 2 \\times 0{,}675 = 0{,}975 - 1{,}35 = -0{,}375$ : le joueur perd en moyenne $0{,}375$ € par partie.

**4.** Si l'on reçoit $R$ euros, la somme reçue a pour espérance $0{,}325R$. Le jeu est équitable lorsque $0{,}325R = 2$, soit $R = \\frac{2}{0{,}325} = \\frac{80}{13} \\approx 6{,}15$ €.` },
    { id: "1T7-ds-15", title: "Deux machines indépendantes", difficulty: 4, points: 7,
      statement: `Un atelier utilise deux machines qui fonctionnent indépendamment l'une de l'autre. Un jour donné, la machine $A$ tombe en panne avec probabilité $0{,}1$ et la machine $B$ avec probabilité $0{,}2$. La production s'arrête lorsque les deux machines sont en panne le même jour.

1. Calculer la probabilité que la production s'arrête un jour donné.
2. Calculer la probabilité qu'au moins une machine tombe en panne un jour donné.
3. Calculer la probabilité qu'exactement une machine tombe en panne un jour donné.
4. On observe trois jours consécutifs, supposés indépendants. Calculer la probabilité que la production s'arrête au moins une fois (arrondir au millième).`,
      solution: `**1.** Par indépendance, $P(A \\cap B) = 0{,}1 \\times 0{,}2 = 0{,}02$.

**2.** Aucune panne : $0{,}9 \\times 0{,}8 = 0{,}72$. Donc $P(\\text{au moins une panne}) = 1 - 0{,}72 = 0{,}28$.

**3.** Seule $A$ en panne : $0{,}1 \\times 0{,}8 = 0{,}08$ ; seule $B$ en panne : $0{,}9 \\times 0{,}2 = 0{,}18$. Total : $0{,}08 + 0{,}18 = 0{,}26$ (contrôle : $0{,}72 + 0{,}26 + 0{,}02 = 1$).

**4.** Chaque jour, la production ne s'arrête pas avec probabilité $1 - 0{,}02 = 0{,}98$. Sur trois jours : $P(\\text{aucun arrêt}) = 0{,}98^3 = 0{,}941192$, donc $P(\\text{au moins un arrêt}) = 1 - 0{,}941192 \\approx 0{,}059$.` },
    { id: "1T7-ds-16", title: "Échantillonnage et contrôle d'une annonce", difficulty: 4, points: 7,
      statement: `Un semencier annonce que $80\\,\\%$ de ses graines germent. On simule $500$ échantillons de $400$ graines avec $p = 0{,}8$ : l'écart type des fréquences de germination obtenues vaut $s \\approx 0{,}02$.

1. Calculer les bornes de l'intervalle $[p - 2s ; p + 2s]$ et rappeler sa signification.
2. Un contrôleur sème $400$ graines : $296$ germent. Calculer la fréquence observée. Le résultat met-il en doute l'annonce ?
3. Un autre contrôleur ne sème que $100$ graines. On admet que $s$ est de l'ordre de $\\frac{1}{\\sqrt{n}}$ : que devient l'écart type des fréquences ?
4. Avec $100$ graines, il observe la même fréquence qu'à la question 2. Peut-il conclure de la même façon ? Commenter.`,
      solution: `**1.** $[0{,}8 - 0{,}04 ; 0{,}8 + 0{,}04] = [0{,}76 ; 0{,}84]$ : environ $95\\,\\%$ des échantillons de $400$ graines ont une fréquence de germination dans cet intervalle si l'annonce est exacte.

**2.** $f = \\frac{296}{400} = 0{,}74$. Comme $0{,}74 < 0{,}76$, la fréquence est hors de l'intervalle : un tel écart ne se produit que dans environ $5\\,\\%$ des cas, ce qui met en doute l'annonce.

**3.** La taille est divisée par $4$, donc l'écart type est multiplié par $\\sqrt{4} = 2$ : $s \\approx 0{,}04$.

**4.** L'intervalle devient $[0{,}8 - 0{,}08 ; 0{,}8 + 0{,}08] = [0{,}72 ; 0{,}88]$, qui contient $0{,}74$ : avec $100$ graines, ce résultat est compatible avec l'annonce. Un petit échantillon fluctue davantage et permet moins facilement de conclure.` }
  ]
});
