/**
 * Banque d'exercices de devoir surveillé — 3e (questions ouvertes, corrigés rédigés type brevet).
 * Contenus originaux — L'Établi des maths. Schéma : voir scripts/tests/test_ds_banks.js
 * Les scripts Scratch sont écrits dans des blocs ```scratch (comme dans brevet_problems.js).
 */
window.MATHS_DS_BANK = window.MATHS_DS_BANK || {};
Object.assign(window.MATHS_DS_BANK, {
  "N1": [
    {
      id: "N1-ds-01",
      title: "Calculer avec des fractions",
      difficulty: 1,
      points: 4,
      statement: `Calculer chacune des expressions suivantes en détaillant les étapes. Donner chaque résultat sous la forme d'une fraction irréductible.

1. $A = \\dfrac{2}{3} + \\dfrac{5}{6}$
2. $B = \\dfrac{7}{4} - \\dfrac{5}{4} \\times \\dfrac{2}{3}$
3. $C = \\dfrac{3}{5} \\div \\dfrac{9}{10}$
4. Lequel de ces trois nombres est un nombre entier ou décimal ? Justifier.`,
      solution: `**1.** On réduit au même dénominateur $6$ :
$$A = \\frac{4}{6} + \\frac{5}{6} = \\frac{9}{6} = \\frac{3}{2}.$$

**2.** La multiplication est prioritaire sur la soustraction :
$$B = \\frac{7}{4} - \\frac{10}{12} = \\frac{7}{4} - \\frac{5}{6} = \\frac{21}{12} - \\frac{10}{12} = \\frac{11}{12}.$$

**3.** Diviser par une fraction, c'est multiplier par son inverse :
$$C = \\frac{3}{5} \\times \\frac{10}{9} = \\frac{30}{45} = \\frac{2}{3}.$$

**4.** $A = \\dfrac{3}{2} = 1{,}5$ est un nombre décimal (non entier). En revanche $B = \\dfrac{11}{12} = 0{,}9166\\ldots$ et $C = \\dfrac{2}{3} = 0{,}666\\ldots$ ont une écriture décimale illimitée : ce ne sont pas des nombres décimaux.`
    },
    {
      id: "N1-ds-02",
      title: "La nature des nombres",
      difficulty: 1,
      points: 4,
      statement: `On considère les nombres suivants :
$$a = \\frac{18}{6} \\qquad b = -7 \\qquad c = \\frac{9}{20} \\qquad d = \\frac{5}{7} \\qquad e = \\sqrt{36} \\qquad f = \\sqrt{5} \\qquad g = -\\frac{12}{8}$$

1. Parmi ces nombres, lesquels sont des entiers naturels ? des entiers relatifs ? Justifier.
2. Montrer que $c$ et $g$ sont des nombres décimaux.
3. On admet que $\\dfrac{5}{7} = 0{,}714285714285\\ldots$ (la séquence $714285$ se répète indéfiniment). Le nombre $d$ est-il décimal ? Est-il rationnel ? Justifier.
4. Le nombre $f$ est irrationnel. Que signifie cette phrase ?`,
      solution: `**1.** $a = \\dfrac{18}{6} = 3$ et $e = \\sqrt{36} = 6$ sont des **entiers naturels**. Les entiers relatifs sont $a$, $e$ et $b = -7$ (un entier naturel est aussi un entier relatif).

**2.** $c = \\dfrac{9}{20} = \\dfrac{45}{100} = 0{,}45$ et $g = -\\dfrac{12}{8} = -\\dfrac{3}{2} = -1{,}5$ : ils ont une écriture décimale finie, ce sont des nombres décimaux.

**3.** L'écriture décimale de $d$ est illimitée (elle ne s'arrête jamais), donc $d$ **n'est pas décimal**. En revanche $d$ est le quotient de deux entiers ($5$ et $7$), donc $d$ est **rationnel**.

**4.** Dire que $f = \\sqrt{5}$ est irrationnel signifie qu'on ne peut pas l'écrire sous la forme d'un quotient $\\dfrac{p}{q}$ de deux entiers (avec $q \\neq 0$). Son écriture décimale est illimitée et non périodique : $\\sqrt{5} \\approx 2{,}236$ n'est qu'une valeur approchée.`
    },
    {
      id: "N1-ds-03",
      title: "Priorités opératoires et erreur classique",
      difficulty: 2,
      points: 5,
      statement: `1. Calculer en détaillant : $D = \\left(1 - \\dfrac{3}{4}\\right) \\times \\dfrac{8}{5} + \\dfrac{1}{2}$.
2. Calculer en détaillant : $E = \\dfrac{\\dfrac{2}{3} - \\dfrac{1}{2}}{\\dfrac{1}{4} + \\dfrac{1}{3}}$.
3. Lucas écrit : « $\\dfrac{1}{2} + \\dfrac{1}{3} = \\dfrac{1 + 1}{2 + 3} = \\dfrac{2}{5}$ ».
   a) Expliquer pourquoi son résultat est faux sans faire le calcul exact (on pourra comparer $\\dfrac{2}{5}$ à $\\dfrac{1}{2}$).
   b) Donner le résultat correct.`,
      solution: `**1.** On calcule d'abord la parenthèse, puis le produit, puis la somme :
$$D = \\frac{1}{4} \\times \\frac{8}{5} + \\frac{1}{2} = \\frac{8}{20} + \\frac{1}{2} = \\frac{2}{5} + \\frac{1}{2} = \\frac{4}{10} + \\frac{5}{10} = \\frac{9}{10}.$$

**2.** Numérateur : $\\dfrac{2}{3} - \\dfrac{1}{2} = \\dfrac{4}{6} - \\dfrac{3}{6} = \\dfrac{1}{6}$. Dénominateur : $\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{3}{12} + \\dfrac{4}{12} = \\dfrac{7}{12}$.
$$E = \\frac{1}{6} \\div \\frac{7}{12} = \\frac{1}{6} \\times \\frac{12}{7} = \\frac{12}{42} = \\frac{2}{7}.$$

**3. a)** On ajoute à $\\dfrac{1}{2}$ un nombre positif ($\\dfrac{1}{3}$), le résultat doit donc être **supérieur** à $\\dfrac{1}{2}$. Or $\\dfrac{2}{5} = 0{,}4 < 0{,}5$ : le résultat de Lucas est impossible. On n'additionne pas les dénominateurs : il faut d'abord réduire au même dénominateur.

**b)** $\\dfrac{1}{2} + \\dfrac{1}{3} = \\dfrac{3}{6} + \\dfrac{2}{6} = \\dfrac{5}{6}$.`
    },
    {
      id: "N1-ds-04",
      title: "Fractions et nombres relatifs",
      difficulty: 2,
      points: 5,
      statement: `On considère :
$$F = -\\frac{3}{4} + \\frac{5}{6} - \\left(-\\frac{1}{3}\\right) \\qquad G = -\\frac{2}{5} \\times \\left(-\\frac{15}{8}\\right) \\qquad H = -\\frac{7}{3} \\div \\frac{14}{9}$$

1. Calculer $F$, $G$ et $H$ ; donner chaque résultat sous forme de fraction irréductible.
2. Sans calculatrice, ranger $F$, $G$ et $H$ dans l'ordre croissant. Justifier.
3. Calculer $G - H$.`,
      solution: `**1.** Soustraire $-\\dfrac{1}{3}$, c'est ajouter $\\dfrac{1}{3}$ ; on réduit au dénominateur $12$ :
$$F = -\\frac{9}{12} + \\frac{10}{12} + \\frac{4}{12} = \\frac{5}{12}.$$
Le produit de deux nombres négatifs est positif :
$$G = \\frac{2 \\times 15}{5 \\times 8} = \\frac{30}{40} = \\frac{3}{4}.$$
Le quotient d'un négatif par un positif est négatif :
$$H = -\\frac{7}{3} \\times \\frac{9}{14} = -\\frac{63}{42} = -\\frac{3}{2}.$$

**2.** $H$ est négatif, $F$ et $G$ sont positifs, donc $H$ est le plus petit. Avec le même dénominateur : $F = \\dfrac{5}{12}$ et $G = \\dfrac{9}{12}$, donc $F < G$. Conclusion : $H < F < G$.

**3.** $G - H = \\dfrac{3}{4} + \\dfrac{3}{2} = \\dfrac{3}{4} + \\dfrac{6}{4} = \\dfrac{9}{4}$.`
    },
    {
      id: "N1-ds-05",
      title: "Le partage du jardin",
      difficulty: 3,
      points: 5,
      statement: `Mme Leroy partage son jardin ainsi :
- les $\\dfrac{2}{5}$ du jardin sont occupés par la pelouse ;
- le tiers **du reste** est occupé par le potager ;
- le reste est planté de fleurs, sur une surface de $120$ m².

1. Montrer que le potager occupe $\\dfrac{1}{5}$ de la surface totale du jardin.
2. Quelle fraction du jardin est occupée par les fleurs ?
3. Calculer l'aire totale du jardin.
4. Calculer l'aire de la pelouse et celle du potager.`,
      solution: `**1.** Après la pelouse, il reste $1 - \\dfrac{2}{5} = \\dfrac{3}{5}$ du jardin. Le potager occupe le tiers de ce reste :
$$\\frac{1}{3} \\times \\frac{3}{5} = \\frac{3}{15} = \\frac{1}{5}.$$

**2.** Fraction occupée par les fleurs :
$$1 - \\frac{2}{5} - \\frac{1}{5} = \\frac{5}{5} - \\frac{3}{5} = \\frac{2}{5}.$$

**3.** Les $\\dfrac{2}{5}$ du jardin représentent $120$ m², donc $\\dfrac{1}{5}$ représente $60$ m² et le jardin entier $5 \\times 60 = 300$ m².

**4.** Pelouse : $\\dfrac{2}{5} \\times 300 = 120$ m². Potager : $\\dfrac{1}{5} \\times 300 = 60$ m².
Vérification : $120 + 60 + 120 = 300$ m².`
    },
    {
      id: "N1-ds-06",
      title: "Le réservoir de la voiture",
      difficulty: 3,
      points: 5,
      statement: `Au départ d'un trajet, le réservoir de la voiture de Karim est rempli aux $\\dfrac{3}{4}$. Pendant le trajet, la voiture consomme les $\\dfrac{2}{3}$ du carburant présent au départ.

1. Montrer qu'à l'arrivée, le réservoir est rempli au quart de sa capacité.
2. À l'arrivée, Karim ajoute $30$ litres de carburant : le réservoir est alors rempli aux $\\dfrac{3}{4}$.
   a) Quelle fraction de la capacité du réservoir représentent ces $30$ litres ?
   b) En déduire la capacité du réservoir.
3. Combien de litres de carburant la voiture a-t-elle consommés pendant le trajet ?`,
      solution: `**1.** Il reste $1 - \\dfrac{2}{3} = \\dfrac{1}{3}$ du carburant de départ, soit :
$$\\frac{1}{3} \\times \\frac{3}{4} = \\frac{3}{12} = \\frac{1}{4} \\text{ du réservoir.}$$

**2. a)** On passe de $\\dfrac{1}{4}$ à $\\dfrac{3}{4}$ du réservoir : les $30$ litres représentent $\\dfrac{3}{4} - \\dfrac{1}{4} = \\dfrac{2}{4} = \\dfrac{1}{2}$ de la capacité.

**b)** La moitié du réservoir contient $30$ L, donc la capacité est $2 \\times 30 = 60$ L.

**3.** Au départ, il y avait $\\dfrac{3}{4} \\times 60 = 45$ L ; la voiture en a consommé les $\\dfrac{2}{3}$ : $\\dfrac{2}{3} \\times 45 = 30$ L.
Vérification : $45 - 30 = 15$ L $= \\dfrac{1}{4} \\times 60$ L, ce qui est cohérent avec la question 1.`
    },
    {
      id: "N1-ds-07",
      title: "Une somme télescopique",
      difficulty: 4,
      points: 6,
      statement: `On s'intéresse à la somme $S = \\dfrac{1}{1 \\times 2} + \\dfrac{1}{2 \\times 3} + \\dfrac{1}{3 \\times 4} + \\cdots + \\dfrac{1}{99 \\times 100}$.

1. Calculer $S_3 = \\dfrac{1}{1 \\times 2} + \\dfrac{1}{2 \\times 3} + \\dfrac{1}{3 \\times 4}$ ; donner le résultat sous forme irréductible.
2. Vérifier que $\\dfrac{1}{3} - \\dfrac{1}{4} = \\dfrac{1}{3 \\times 4}$.
3. Soit $n$ un entier naturel non nul. Démontrer que $\\dfrac{1}{n} - \\dfrac{1}{n+1} = \\dfrac{1}{n(n+1)}$.
4. En utilisant la question 3, écrire chaque terme de $S$ comme une différence, puis en déduire la valeur exacte de $S$.`,
      solution: `**1.** On réduit au dénominateur $12$ :
$$S_3 = \\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} = \\frac{6}{12} + \\frac{2}{12} + \\frac{1}{12} = \\frac{9}{12} = \\frac{3}{4}.$$

**2.** $\\dfrac{1}{3} - \\dfrac{1}{4} = \\dfrac{4}{12} - \\dfrac{3}{12} = \\dfrac{1}{12}$ et $3 \\times 4 = 12$ : l'égalité est vraie.

**3.** On réduit au dénominateur commun $n(n+1)$ :
$$\\frac{1}{n} - \\frac{1}{n+1} = \\frac{n+1}{n(n+1)} - \\frac{n}{n(n+1)} = \\frac{n + 1 - n}{n(n+1)} = \\frac{1}{n(n+1)}.$$

**4.** D'après la question 3 :
$$S = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\cdots + \\left(\\frac{1}{99} - \\frac{1}{100}\\right).$$
Chaque fraction $\\dfrac{1}{2}, \\dfrac{1}{3}, \\ldots, \\dfrac{1}{99}$ apparaît une fois avec le signe $+$ et une fois avec le signe $-$ : elles s'éliminent. Il reste
$$S = 1 - \\frac{1}{100} = \\frac{99}{100}.$$
(On retrouve la même logique avec $S_3 = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$.)`
    },
    {
      id: "N1-ds-08",
      title: "Fractions en cascade",
      difficulty: 4,
      points: 5,
      statement: `On considère les nombres :
$$x_1 = 1 + \\frac{1}{1} \\qquad x_2 = 1 + \\frac{1}{1 + \\frac{1}{1}} \\qquad x_3 = 1 + \\frac{1}{1 + \\frac{1}{1 + \\frac{1}{1}}}$$
On remarque que $x_2 = 1 + \\dfrac{1}{x_1}$ et $x_3 = 1 + \\dfrac{1}{x_2}$ ; on continue ainsi : $x_4 = 1 + \\dfrac{1}{x_3}$, $x_5 = 1 + \\dfrac{1}{x_4}$, etc.

1. Calculer $x_1$, $x_2$ et $x_3$ sous forme de fractions irréductibles.
2. Calculer $x_4$ et $x_5$.
3. Montrer que $x_5 - x_4 = \\dfrac{1}{40}$.
4. Observer les numérateurs et dénominateurs obtenus : quelle régularité remarque-t-on ? En déduire $x_6$ sans calcul, puis le vérifier.
5. Le nombre $x_6$ est-il décimal ? Justifier à l'aide de la calculatrice ou d'une division posée.`,
      solution: `**1.** $x_1 = 1 + 1 = 2$ ; $x_2 = 1 + \\dfrac{1}{2} = \\dfrac{3}{2}$ ; $x_3 = 1 + \\dfrac{1}{3/2} = 1 + \\dfrac{2}{3} = \\dfrac{5}{3}$.

**2.** $x_4 = 1 + \\dfrac{3}{5} = \\dfrac{8}{5}$ ; $x_5 = 1 + \\dfrac{5}{8} = \\dfrac{13}{8}$.

**3.** $x_5 - x_4 = \\dfrac{13}{8} - \\dfrac{8}{5} = \\dfrac{65}{40} - \\dfrac{64}{40} = \\dfrac{1}{40}$.

**4.** Les nombres $1, 2, 3, 5, 8, 13, \\ldots$ apparaissent : chacun est la somme des deux précédents ($3 = 1 + 2$, $5 = 2 + 3$, $8 = 3 + 5$, $13 = 5 + 8$). Le dénominateur de $x_{n+1}$ est le numérateur de $x_n$, et le numérateur de $x_{n+1}$ est la somme du numérateur et du dénominateur de $x_n$. On prévoit donc $x_6 = \\dfrac{21}{13}$.
Vérification : $x_6 = 1 + \\dfrac{1}{x_5} = 1 + \\dfrac{8}{13} = \\dfrac{21}{13}$.

**5.** La division de $21$ par $13$ donne $1{,}615384615384\\ldots$ : la séquence $615384$ se répète et la division ne s'arrête jamais. $x_6$ n'est donc **pas décimal** (il est rationnel, puisque c'est un quotient d'entiers). Remarque : $\\dfrac{21}{13}$ est irréductible et $13$ n'est pas de la forme $2^a \\times 5^b$, ce qui confirme le résultat.`
    },
    {
      id: "N1-ds-09",
      title: "L'argent de poche de Sami",
      difficulty: 1,
      points: 4,
      statement: `Sami dépense $\\dfrac{1}{4}$ de son argent de poche mensuel en livres et $\\dfrac{2}{5}$ en sorties. Il épargne le reste.

1. Quelle fraction de son argent de poche Sami dépense-t-il au total ? Donner le résultat sous forme irréductible.
2. Quelle fraction de son argent de poche Sami épargne-t-il ?
3. Ce mois-ci, Sami a reçu $60$ €. Calculer la somme dépensée en livres, la somme dépensée en sorties et la somme épargnée.
4. Calculer $\\dfrac{1}{4} \\div \\dfrac{2}{5}$, puis interpréter ce résultat dans la situation.`,
      solution: `**1.** On met les fractions au même dénominateur $20$ :
$$\\dfrac{1}{4} + \\dfrac{2}{5} = \\dfrac{5}{20} + \\dfrac{8}{20} = \\dfrac{13}{20}.$$
$13$ et $20$ n'ont pas de diviseur commun autre que $1$ : la fraction est irréductible. Sami dépense $\\dfrac{13}{20}$ de son argent de poche.

**2.** Il épargne $1 - \\dfrac{13}{20} = \\dfrac{20}{20} - \\dfrac{13}{20} = \\dfrac{7}{20}$ de son argent de poche.

**3.** Prendre une fraction d'une quantité revient à multiplier :
- livres : $\\dfrac{1}{4} \\times 60 = 15$ € ;
- sorties : $\\dfrac{2}{5} \\times 60 = \\dfrac{120}{5} = 24$ € ;
- épargne : $\\dfrac{7}{20} \\times 60 = \\dfrac{420}{20} = 21$ €.

Vérification : $15 + 24 + 21 = 60$ €.

**4.** Diviser par une fraction revient à multiplier par son inverse :
$$\\dfrac{1}{4} \\div \\dfrac{2}{5} = \\dfrac{1}{4} \\times \\dfrac{5}{2} = \\dfrac{5}{8}.$$
La somme dépensée en livres représente les $\\dfrac{5}{8}$ de la somme dépensée en sorties. On le vérifie : $\\dfrac{5}{8} \\times 24 = 15$ €.`
    },
    {
      id: "N1-ds-10",
      title: "Le sondage sur les écrans",
      difficulty: 2,
      points: 5,
      statement: `Dans un collège de $360$ élèves, on a demandé à chacun ce qu'il regarde le plus le soir.
- $\\dfrac{3}{8}$ des élèves regardent surtout des séries ;
- parmi les autres élèves, $\\dfrac{1}{3}$ regardent surtout du sport ;
- les élèves restants déclarent ne pas regarder d'écran le soir.

1. Quelle fraction de l'ensemble des élèves ne regarde pas surtout des séries ?
2. Montrer que la fraction des élèves du collège qui regardent surtout du sport est $\\dfrac{5}{24}$.
3. Quelle fraction des élèves ne regarde pas d'écran le soir ? Donner le résultat sous forme irréductible.
4. Calculer le nombre d'élèves de chaque catégorie.
5. Donner le pourcentage d'élèves qui ne regardent pas d'écran le soir, arrondi au dixième.`,
      solution: `**1.** $1 - \\dfrac{3}{8} = \\dfrac{8}{8} - \\dfrac{3}{8} = \\dfrac{5}{8}$ des élèves ne regardent pas surtout des séries.

**2.** Les amateurs de sport représentent $\\dfrac{1}{3}$ des $\\dfrac{5}{8}$ restants, donc
$$\\dfrac{1}{3} \\times \\dfrac{5}{8} = \\dfrac{5}{24}$$
de l'ensemble des élèves.

**3.** On met les fractions au dénominateur commun $24$ :
$$1 - \\dfrac{3}{8} - \\dfrac{5}{24} = \\dfrac{24}{24} - \\dfrac{9}{24} - \\dfrac{5}{24} = \\dfrac{10}{24} = \\dfrac{5}{12}.$$
$\\dfrac{5}{12}$ des élèves ne regardent pas d'écran le soir.

**4.**
- séries : $\\dfrac{3}{8} \\times 360 = 135$ élèves ;
- sport : $\\dfrac{5}{24} \\times 360 = 75$ élèves ;
- pas d'écran : $\\dfrac{5}{12} \\times 360 = 150$ élèves.

Vérification : $135 + 75 + 150 = 360$.

**5.** $\\dfrac{150}{360} = \\dfrac{5}{12} \\approx 0{,}4167$, soit environ $41{,}7$ % des élèves. (La division de $5$ par $12$ ne s'arrête pas : $\\dfrac{5}{12}$ n'est pas un nombre décimal, d'où l'arrondi.)`
    },
    {
      id: "N1-ds-11",
      title: "Les trois robinets de la piscine",
      difficulty: 3,
      points: 5,
      statement: `Une petite piscine peut être remplie par deux robinets et vidée par une bonde d'évacuation.
- Le robinet A, seul, remplit la piscine vide en $6$ heures.
- Le robinet B, seul, remplit la piscine vide en $4$ heures.
- La bonde, seule, vide la piscine pleine en $12$ heures.

Les débits sont constants.

1. Quelle fraction de la piscine le robinet A remplit-il en une heure ? Même question pour le robinet B.
2. On ouvre les robinets A et B en même temps, bonde fermée, la piscine étant vide.
   a) Quelle fraction de la piscine est remplie en une heure ?
   b) En combien de temps la piscine est-elle pleine ? Donner la réponse en heures et minutes.
3. Par erreur, la bonde est restée ouverte pendant que A et B coulent. Montrer qu'en une heure, la piscine se remplit d'un tiers, puis en déduire la durée du remplissage.
4. La piscine est déjà remplie au quart. On ouvre A et B, la bonde étant ouverte. Combien de temps faut-il pour la remplir complètement ?`,
      solution: `**1.** En $6$ heures, A remplit toute la piscine, donc en une heure il en remplit $\\dfrac{1}{6}$. De même, B en remplit $\\dfrac{1}{4}$ en une heure.

**2. a)** $\\dfrac{1}{6} + \\dfrac{1}{4} = \\dfrac{2}{12} + \\dfrac{3}{12} = \\dfrac{5}{12}$ de la piscine par heure.

**b)** Il faut remplir $1$ piscine à raison de $\\dfrac{5}{12}$ par heure : la durée est $1 \\div \\dfrac{5}{12} = \\dfrac{12}{5} = 2{,}4$ h.
Or $0{,}4$ h $= 0{,}4 \\times 60$ min $= 24$ min. La piscine est pleine en **2 h 24 min**.

**3.** La bonde vide $\\dfrac{1}{12}$ de la piscine par heure. En une heure, le remplissage est donc :
$$\\dfrac{1}{6} + \\dfrac{1}{4} - \\dfrac{1}{12} = \\dfrac{2}{12} + \\dfrac{3}{12} - \\dfrac{1}{12} = \\dfrac{4}{12} = \\dfrac{1}{3}.$$
Il faut $1 \\div \\dfrac{1}{3} = 3$ heures pour remplir la piscine.

**4.** Il reste $1 - \\dfrac{1}{4} = \\dfrac{3}{4}$ de la piscine à remplir, à raison de $\\dfrac{1}{3}$ par heure :
$$\\dfrac{3}{4} \\div \\dfrac{1}{3} = \\dfrac{3}{4} \\times 3 = \\dfrac{9}{4} = 2{,}25 \\text{ h}.$$
Comme $0{,}25$ h $= 15$ min, il faut **2 h 15 min**.`
    },
    {
      id: "N1-ds-12",
      title: "Les fractions des scribes égyptiens",
      difficulty: 4,
      points: 6,
      statement: `Dans l'Égypte ancienne, les scribes écrivaient les fractions comme des sommes de fractions de numérateur $1$, toutes différentes. On appelle **fraction unitaire** une fraction de la forme $\\dfrac{1}{n}$, où $n$ est un entier supérieur ou égal à $2$.

1. Vérifier que $\\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{6} = 1$.
2. Écrire $\\dfrac{5}{6}$ comme somme de deux fractions unitaires différentes.
3. a) Vérifier que $\\dfrac{1}{4} = \\dfrac{1}{5} + \\dfrac{1}{20}$.
   b) Soit $n$ un entier supérieur ou égal à $2$. Démontrer que $\\dfrac{1}{n+1} + \\dfrac{1}{n(n+1)} = \\dfrac{1}{n}$.
4. En utilisant les questions 1 et 3, écrire $1$ comme somme de quatre fractions unitaires toutes différentes. Vérifier le résultat par un calcul.`,
      solution: `**1.** Avec le dénominateur commun $6$ : $\\dfrac{3}{6} + \\dfrac{2}{6} + \\dfrac{1}{6} = \\dfrac{6}{6} = 1$.

**2.** D'après la question 1, $\\dfrac{1}{2} + \\dfrac{1}{3} = 1 - \\dfrac{1}{6} = \\dfrac{5}{6}$. Donc $\\dfrac{5}{6} = \\dfrac{1}{2} + \\dfrac{1}{3}$.

**3. a)** $\\dfrac{1}{5} + \\dfrac{1}{20} = \\dfrac{4}{20} + \\dfrac{1}{20} = \\dfrac{5}{20} = \\dfrac{1}{4}$.

**b)** On met au dénominateur commun $n(n+1)$ :
$$\\dfrac{1}{n+1} + \\dfrac{1}{n(n+1)} = \\dfrac{n}{n(n+1)} + \\dfrac{1}{n(n+1)} = \\dfrac{n+1}{n(n+1)} = \\dfrac{1}{n}.$$
(On a simplifié par $n + 1$, qui n'est pas nul.)

**4.** On applique la question 3. b) avec $n = 6$ : $\\dfrac{1}{6} = \\dfrac{1}{7} + \\dfrac{1}{42}$. En remplaçant dans l'égalité de la question 1 :
$$1 = \\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{7} + \\dfrac{1}{42}.$$
Les quatre fractions sont unitaires et toutes différentes.
Vérification avec le dénominateur commun $42$ : $\\dfrac{21}{42} + \\dfrac{14}{42} + \\dfrac{6}{42} + \\dfrac{1}{42} = \\dfrac{42}{42} = 1$.`
    }
  ],
  "N2": [
    {
      id: "N2-ds-01",
      title: "Développer et réduire",
      difficulty: 1,
      points: 4,
      statement: `Développer puis réduire chacune des expressions suivantes.

1. $A = 3(2x - 5)$
2. $B = -2x(x + 4)$
3. $C = (x + 3)(2x - 1)$
4. $D = (3 - x)(4x + 2)$`,
      solution: `On utilise la distributivité simple $k(a + b) = ka + kb$ et la double distributivité $(a + b)(c + d) = ac + ad + bc + bd$.

**1.** $A = 3 \\times 2x - 3 \\times 5 = 6x - 15$.

**2.** $B = -2x \\times x - 2x \\times 4 = -2x^2 - 8x$.

**3.** $C = 2x^2 - x + 6x - 3 = 2x^2 + 5x - 3$.

**4.** $D = 12x + 6 - 4x^2 - 2x = -4x^2 + 10x + 6$.

Contrôle possible pour $x = 1$ : $C = 4 \\times 1 = 4$ et $2 + 5 - 3 = 4$ ; $D = 2 \\times 6 = 12$ et $-4 + 10 + 6 = 12$.`
    },
    {
      id: "N2-ds-02",
      title: "Les identités remarquables",
      difficulty: 1,
      points: 4,
      statement: `1. Développer à l'aide des identités remarquables :
   a) $E = (x + 5)^2$
   b) $F = (3x - 2)^2$
   c) $G = (2x + 7)(2x - 7)$
2. Écrire $101^2$ sous la forme $(100 + 1)^2$ et en déduire $101^2$ sans calculatrice.
3. Calculer de même $99^2$.`,
      solution: `**1.** On utilise $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$ et $(a + b)(a - b) = a^2 - b^2$.
**a)** $E = x^2 + 2 \\times x \\times 5 + 5^2 = x^2 + 10x + 25$.
**b)** $F = (3x)^2 - 2 \\times 3x \\times 2 + 2^2 = 9x^2 - 12x + 4$.
**c)** $G = (2x)^2 - 7^2 = 4x^2 - 49$.

**2.** $101^2 = (100 + 1)^2 = 100^2 + 2 \\times 100 \\times 1 + 1^2 = 10\\,000 + 200 + 1 = 10\\,201$.

**3.** $99^2 = (100 - 1)^2 = 10\\,000 - 200 + 1 = 9\\,801$.`
    },
    {
      id: "N2-ds-03",
      title: "Supprimer des parenthèses",
      difficulty: 2,
      points: 5,
      statement: `1. Réduire $H = (x^2 - 3x + 2) - (2x^2 - x - 5)$.
2. Développer et réduire $I = 4(x - 1) - 3(2x + 5)$.
3. Développer et réduire $J = (x - 2)(x + 3) - (x + 1)^2$.
4. Vérifier le résultat de la question 3 en calculant $J$ de deux façons pour $x = 2$.`,
      solution: `**1.** Un signe « $-$ » devant une parenthèse change tous les signes à l'intérieur :
$$H = x^2 - 3x + 2 - 2x^2 + x + 5 = -x^2 - 2x + 7.$$

**2.** $I = 4x - 4 - 6x - 15 = -2x - 19$.

**3.** $(x - 2)(x + 3) = x^2 + 3x - 2x - 6 = x^2 + x - 6$ et $(x + 1)^2 = x^2 + 2x + 1$, donc
$$J = x^2 + x - 6 - (x^2 + 2x + 1) = x^2 + x - 6 - x^2 - 2x - 1 = -x - 7.$$

**4.** Avec l'expression de départ : $J = (2 - 2)(2 + 3) - (2 + 1)^2 = 0 - 9 = -9$.
Avec l'expression réduite : $J = -2 - 7 = -9$. Les deux calculs concordent.`
    },
    {
      id: "N2-ds-04",
      title: "Un programme de calcul",
      difficulty: 2,
      points: 5,
      statement: `Voici un programme de calcul :
- Choisir un nombre.
- Lui ajouter $3$.
- Élever le résultat au carré.
- Soustraire le carré du nombre de départ.

1. Montrer que si l'on choisit $2$, on obtient $21$.
2. Quel résultat obtient-on en choisissant $-5$ ?
3. On note $x$ le nombre choisi. Exprimer le résultat en fonction de $x$, puis développer et réduire cette expression.
4. Quel nombre faut-il choisir pour obtenir $45$ ?`,
      solution: `**1.** $2 + 3 = 5$ ; $5^2 = 25$ ; $25 - 2^2 = 25 - 4 = 21$.

**2.** $-5 + 3 = -2$ ; $(-2)^2 = 4$ ; $4 - (-5)^2 = 4 - 25 = -21$.

**3.** Le résultat est $(x + 3)^2 - x^2$. Avec l'identité remarquable :
$$(x + 3)^2 - x^2 = x^2 + 6x + 9 - x^2 = 6x + 9.$$
(Contrôle : pour $x = 2$, $6 \\times 2 + 9 = 21$.)

**4.** On résout $6x + 9 = 45$, soit $6x = 36$, donc $x = 6$.
Vérification : $(6 + 3)^2 - 6^2 = 81 - 36 = 45$. Il faut choisir $6$.`
    },
    {
      id: "N2-ds-05",
      title: "L'aire d'une plaque découpée",
      difficulty: 3,
      points: 5,
      statement: `Un artisan dispose d'une plaque carrée de côté $(2x + 3)$ cm, où $x$ est un nombre positif. Dans un coin, il découpe un rectangle de longueur $(x + 1)$ cm et de largeur $x$ cm.

1. Calculer l'aire de la plaque restante lorsque $x = 2$.
2. Montrer que, pour tout $x$, l'aire de la plaque restante est $\\mathcal{A}(x) = 3x^2 + 11x + 9$ (en cm²).
3. Vérifier le résultat de la question 2 avec $x = 2$.
4. L'artisan affirme : « Si je double $x$, l'aire restante double aussi. » A-t-il raison ? Justifier.`,
      solution: `**1.** Pour $x = 2$ : le carré a pour côté $7$ cm, son aire est $49$ cm² ; le rectangle mesure $3$ cm sur $2$ cm, son aire est $6$ cm². Aire restante : $49 - 6 = 43$ cm².

**2.** Aire restante $=$ aire du carré $-$ aire du rectangle :
$$\\mathcal{A}(x) = (2x + 3)^2 - x(x + 1) = 4x^2 + 12x + 9 - x^2 - x = 3x^2 + 11x + 9.$$

**3.** $\\mathcal{A}(2) = 3 \\times 4 + 11 \\times 2 + 9 = 12 + 22 + 9 = 43$ cm² : on retrouve le résultat de la question 1.

**4.** Contre-exemple : $\\mathcal{A}(2) = 43$ cm² et $\\mathcal{A}(4) = 3 \\times 16 + 44 + 9 = 101$ cm². Or $2 \\times 43 = 86 \\neq 101$. L'artisan a tort : l'aire n'est pas proportionnelle à $x$.`
    },
    {
      id: "N2-ds-06",
      title: "Calcul mental et identités remarquables",
      difficulty: 3,
      points: 5,
      statement: `1. En écrivant $49 \\times 51 = (50 - 1)(50 + 1)$, calculer $49 \\times 51$ sans calculatrice.
2. Calculer de même $98^2$ en utilisant une identité remarquable.
3. Soit $n$ un nombre. Démontrer que $(n + 1)^2 - (n - 1)^2 = 4n$.
4. En déduire, sans calculatrice, la valeur de $1\\,001^2 - 999^2$.`,
      solution: `**1.** D'après $(a - b)(a + b) = a^2 - b^2$ :
$$49 \\times 51 = 50^2 - 1^2 = 2\\,500 - 1 = 2\\,499.$$

**2.** D'après $(a - b)^2 = a^2 - 2ab + b^2$ :
$$98^2 = (100 - 2)^2 = 10\\,000 - 400 + 4 = 9\\,604.$$

**3.** On développe :
$$(n + 1)^2 - (n - 1)^2 = (n^2 + 2n + 1) - (n^2 - 2n + 1) = n^2 + 2n + 1 - n^2 + 2n - 1 = 4n.$$

**4.** Avec $n = 1\\,000$ : $1\\,001^2 - 999^2 = 4 \\times 1\\,000 = 4\\,000$.`
    },
    {
      id: "N2-ds-07",
      title: "Quatre entiers consécutifs",
      difficulty: 4,
      points: 6,
      statement: `Inès remarque : « Si je multiplie quatre entiers consécutifs et que j'ajoute $1$, j'obtiens toujours un carré parfait. »

1. Tester cette affirmation avec $1, 2, 3, 4$ puis avec $2, 3, 4, 5$.
2. On note $n$ le plus petit des quatre entiers. Développer $n(n + 3)$ et $(n + 1)(n + 2)$.
3. On pose $a = n^2 + 3n$. Montrer que $n(n + 1)(n + 2)(n + 3) + 1 = a(a + 2) + 1$, puis que ce nombre est égal à $(a + 1)^2$.
4. En déduire, sans calculer le produit, le nombre entier dont le carré vaut $10 \\times 11 \\times 12 \\times 13 + 1$.`,
      solution: `**1.** $1 \\times 2 \\times 3 \\times 4 + 1 = 24 + 1 = 25 = 5^2$ ; $2 \\times 3 \\times 4 \\times 5 + 1 = 120 + 1 = 121 = 11^2$. L'affirmation est vérifiée sur ces deux exemples.

**2.** $n(n + 3) = n^2 + 3n$ et $(n + 1)(n + 2) = n^2 + 2n + n + 2 = n^2 + 3n + 2$.

**3.** En regroupant les facteurs : $n(n + 1)(n + 2)(n + 3) = [n(n + 3)] \\times [(n + 1)(n + 2)] = a(a + 2)$, donc le nombre étudié vaut $a(a + 2) + 1$. Or
$$a(a + 2) + 1 = a^2 + 2a + 1 = (a + 1)^2.$$
Comme $a + 1 = n^2 + 3n + 1$ est un entier, le nombre obtenu est bien le carré d'un entier : l'affirmation d'Inès est **vraie pour tout entier** $n$.

**4.** Ici $n = 10$ : $a + 1 = 10^2 + 3 \\times 10 + 1 = 131$. Donc $10 \\times 11 \\times 12 \\times 13 + 1 = 131^2$ (en effet $17\\,160 + 1 = 17\\,161 = 131^2$).`
    },
    {
      id: "N2-ds-08",
      title: "Le carré et le rectangle",
      difficulty: 4,
      points: 5,
      statement: `On part d'un carré de côté $x$ cm (avec $x > 3$). On le transforme en rectangle en augmentant une dimension de $3$ cm et en diminuant l'autre de $3$ cm.

1. Pour $x = 5$, comparer l'aire du carré et celle du rectangle.
2. Démontrer que, quel que soit $x > 3$, l'aire du rectangle est inférieure de $9$ cm² à celle du carré.
3. Le carré et le rectangle ont-ils le même périmètre ? Justifier.
4. On augmente maintenant une dimension de $a$ cm et on diminue l'autre de $a$ cm (avec $0 < a < x$). De combien l'aire diminue-t-elle ? Quelle valeur de $a$ fait diminuer l'aire de $16$ cm² ?`,
      solution: `**1.** Carré : $5^2 = 25$ cm². Rectangle : $8 \\times 2 = 16$ cm². L'aire a diminué de $9$ cm².

**2.** Aire du rectangle : $(x + 3)(x - 3) = x^2 - 9$ (identité $(a + b)(a - b) = a^2 - b^2$). L'aire du carré étant $x^2$, l'aire du rectangle est toujours inférieure de $9$ cm².

**3.** Périmètre du carré : $4x$. Périmètre du rectangle : $2\\big[(x + 3) + (x - 3)\\big] = 2 \\times 2x = 4x$. Les périmètres sont **égaux** : à périmètre égal, les aires peuvent donc être différentes.

**4.** $(x + a)(x - a) = x^2 - a^2$ : l'aire diminue de $a^2$ cm². On veut $a^2 = 16$ avec $a > 0$, donc $a = 4$ (il faut alors $x > 4$).`
    },
    {
      id: "N2-ds-09",
      title: "Le cadre photo",
      difficulty: 1,
      points: 4,
      statement: `Une photo carrée de côté $x$ cm est collée au centre d'un cadre carré. Le cadre dépasse de $2$ cm de chaque côté de la photo, si bien que le grand carré (cadre et photo) a pour côté $x + 4$ cm.

1. Exprimer l'aire du grand carré en fonction de $x$, puis la développer à l'aide d'une identité remarquable.
2. Montrer que l'aire de la partie visible du cadre (le grand carré privé de la photo) est égale à $8x + 16$ cm².
3. Calculer cette aire pour une photo de $10$ cm de côté, de deux façons différentes.`,
      solution: `**1.** L'aire du grand carré est $(x + 4)^2$. Avec $(a + b)^2 = a^2 + 2ab + b^2$ :
$$(x + 4)^2 = x^2 + 2 \\times x \\times 4 + 4^2 = x^2 + 8x + 16.$$

**2.** On retire l'aire de la photo, $x^2$ :
$$(x^2 + 8x + 16) - x^2 = 8x + 16.$$
L'aire visible du cadre est bien $8x + 16$ cm².

**3.** Pour $x = 10$ :
- avec la formule : $8 \\times 10 + 16 = 96$ cm² ;
- directement : $(10 + 4)^2 - 10^2 = 196 - 100 = 96$ cm².

Les deux méthodes donnent $96$ cm².`
    },
    {
      id: "N2-ds-10",
      title: "Le pari de Nora",
      difficulty: 2,
      points: 5,
      statement: `Nora affirme : « Pour n'importe quel nombre entier $n$, le nombre $(2n + 3)^2 - (2n - 3)^2$ est un multiple de $24$. »

1. Tester l'affirmation de Nora pour $n = 1$, puis pour $n = 5$.
2. Développer $(2n + 3)^2$ et $(2n - 3)^2$.
3. En déduire une expression simplifiée de $(2n + 3)^2 - (2n - 3)^2$.
4. Nora a-t-elle raison ? Justifier.`,
      solution: `**1.** Pour $n = 1$ : $(2 + 3)^2 - (2 - 3)^2 = 25 - 1 = 24 = 24 \\times 1$.
Pour $n = 5$ : $(10 + 3)^2 - (10 - 3)^2 = 169 - 49 = 120 = 24 \\times 5$.
L'affirmation est vérifiée dans ces deux cas (ce qui ne suffit pas à la prouver).

**2.** Avec les identités remarquables :
$(2n + 3)^2 = 4n^2 + 2 \\times 2n \\times 3 + 9 = 4n^2 + 12n + 9$ ;
$(2n - 3)^2 = 4n^2 - 12n + 9$.

**3.** Attention au signe « $-$ » devant la parenthèse :
$$(4n^2 + 12n + 9) - (4n^2 - 12n + 9) = 4n^2 + 12n + 9 - 4n^2 + 12n - 9 = 24n.$$

**4.** Pour tout entier $n$, le nombre vaut $24n = 24 \\times n$ : c'est un multiple de $24$. **Nora a raison.** (On retrouve bien $24 \\times 1$ et $24 \\times 5$ à la question 1.)`
    },
    {
      id: "N2-ds-11",
      title: "La boîte sans couvercle",
      difficulty: 3,
      points: 5,
      statement: `Dans une plaque de carton carrée de $20$ cm de côté, on découpe aux quatre coins un carré de côté $x$ cm (avec $0 < x < 10$). On replie ensuite les bords pour obtenir une boîte sans couvercle, en forme de pavé droit.

1. Expliquer pourquoi le fond de la boîte est un carré de côté $20 - 2x$ cm, et pourquoi la hauteur de la boîte est $x$ cm.
2. En déduire que le volume de la boîte, en cm³, est $V = x(20 - 2x)^2$.
3. Développer $(20 - 2x)^2$, puis montrer que $V = 4x^3 - 80x^2 + 400x$.
4. Calculer le volume de la boîte pour $x = 3$ en utilisant chacune des deux expressions de $V$.
5. Calculer le volume pour $x = 5$. Lequel des deux découpages, $x = 3$ ou $x = 5$, donne la boîte la plus grande ?`,
      solution: `**1.** Sur chaque côté de la plaque, on retire deux carrés de côté $x$ (un à chaque coin) : il reste $20 - 2x$ cm, qui est le côté du fond carré. Les bords repliés ont pour largeur le côté des carrés découpés : la hauteur est $x$ cm.

**2.** Volume d'un pavé droit $=$ aire de la base $\\times$ hauteur, donc $V = (20 - 2x)^2 \\times x = x(20 - 2x)^2$.

**3.** Avec $(a - b)^2 = a^2 - 2ab + b^2$ :
$$(20 - 2x)^2 = 400 - 2 \\times 20 \\times 2x + 4x^2 = 400 - 80x + 4x^2.$$
Puis $V = x(4x^2 - 80x + 400) = 4x^3 - 80x^2 + 400x$.

**4.** Pour $x = 3$ :
- $V = 3 \\times (20 - 6)^2 = 3 \\times 14^2 = 3 \\times 196 = 588$ cm³ ;
- $V = 4 \\times 27 - 80 \\times 9 + 400 \\times 3 = 108 - 720 + 1\\,200 = 588$ cm³.

Les deux expressions donnent bien le même résultat.

**5.** Pour $x = 5$ : $V = 5 \\times (20 - 10)^2 = 5 \\times 100 = 500$ cm³.
Comme $588 > 500$, le découpage $x = 3$ donne la boîte la plus grande.`
    },
    {
      id: "N2-ds-12",
      title: "Le carré des nombres terminés par 5",
      difficulty: 4,
      points: 6,
      statement: `Mathis a remarqué une astuce pour calculer de tête le carré d'un nombre entier qui se termine par $5$.

1. Calculer $25^2$, $35^2$ et $45^2$. Que remarque-t-on sur les deux derniers chiffres ?
2. Un nombre entier qui se termine par $5$ peut s'écrire $10a + 5$, où $a$ est un entier positif (par exemple $35 = 10 \\times 3 + 5$).
   a) Développer et réduire $(10a + 5)^2$.
   b) Montrer que $(10a + 5)^2 = 100 \\times a(a + 1) + 25$.
3. En déduire une méthode pour calculer de tête le carré d'un nombre qui se termine par $5$.
4. Utiliser cette méthode pour calculer $85^2$ et $105^2$, en détaillant.`,
      solution: `**1.** $25^2 = 625$, $35^2 = 1\\,225$ et $45^2 = 2\\,025$. Ces carrés se terminent tous par $25$.

**2. a)** Avec $(a + b)^2 = a^2 + 2ab + b^2$ :
$$(10a + 5)^2 = 100a^2 + 2 \\times 10a \\times 5 + 25 = 100a^2 + 100a + 25.$$

**b)** On factorise $100a$ dans les deux premiers termes : $100a^2 + 100a = 100a(a + 1)$. Donc
$$(10a + 5)^2 = 100 \\times a(a + 1) + 25.$$

**3.** Le nombre $a$ est le nombre de dizaines. On calcule $a \\times (a + 1)$, on le multiplie par $100$ (on écrit deux zéros) puis on ajoute $25$ : concrètement, on écrit le produit $a(a + 1)$ suivi de $25$.
Vérification avec $35$ : $a = 3$, $3 \\times 4 = 12$, d'où $35^2 = 1\\,225$.

**4.** $85 = 10 \\times 8 + 5$ : $8 \\times 9 = 72$, donc $85^2 = 7\\,225$.
$105 = 10 \\times 10 + 5$ : $10 \\times 11 = 110$, donc $105^2 = 11\\,025$.`
    }
  ],
  "N2bis": [
    {
      id: "N2bis-ds-01",
      title: "Facteur commun évident",
      difficulty: 1,
      points: 4,
      statement: `1. Factoriser les expressions suivantes :
   a) $A = 5x + 15$
   b) $B = x^2 - 7x$
   c) $C = 6x^2 + 9x$
   d) $D = 12x - 8$
2. Vérifier la factorisation de $C$ en développant le résultat obtenu.`,
      solution: `On repère un facteur commun $k$ et on utilise $ka + kb = k(a + b)$.

**1. a)** $A = 5 \\times x + 5 \\times 3 = 5(x + 3)$.
**b)** $B = x \\times x - 7 \\times x = x(x - 7)$.
**c)** $C = 3x \\times 2x + 3x \\times 3 = 3x(2x + 3)$.
**d)** $D = 4 \\times 3x - 4 \\times 2 = 4(3x - 2)$.

**2.** $3x(2x + 3) = 3x \\times 2x + 3x \\times 3 = 6x^2 + 9x = C$ : la factorisation est correcte. (On aurait pu écrire $x(6x + 9)$, mais la factorisation n'est complète que si l'on met aussi $3$ en facteur.)`
    },
    {
      id: "N2bis-ds-02",
      title: "Différence de deux carrés",
      difficulty: 1,
      points: 4,
      statement: `1. Factoriser à l'aide de l'identité $a^2 - b^2 = (a - b)(a + b)$ :
   a) $E = x^2 - 25$
   b) $F = 9x^2 - 4$
   c) $G = 49 - 16x^2$
2. En utilisant la même identité, calculer sans calculatrice $63^2 - 37^2$.`,
      solution: `**1. a)** $E = x^2 - 5^2 = (x - 5)(x + 5)$.
**b)** $F = (3x)^2 - 2^2 = (3x - 2)(3x + 2)$.
**c)** $G = 7^2 - (4x)^2 = (7 - 4x)(7 + 4x)$.

**2.** $63^2 - 37^2 = (63 - 37)(63 + 37) = 26 \\times 100 = 2\\,600$.
(Vérification : $63^2 = 3\\,969$ et $37^2 = 1\\,369$, et $3\\,969 - 1\\,369 = 2\\,600$.)`
    },
    {
      id: "N2bis-ds-03",
      title: "Facteur commun entre parenthèses",
      difficulty: 2,
      points: 5,
      statement: `Factoriser chacune des expressions suivantes, puis réduire chaque facteur.

1. $H = (x + 2)(3x - 1) + (x + 2)(x + 5)$
2. $I = (2x - 3)(x + 4) - (2x - 3)(5x - 1)$
3. $J = (x - 1)^2 + (x - 1)(2x + 3)$
4. Montrer que $H$ peut s'écrire $4(x + 2)(x + 1)$.`,
      solution: `**1.** Le facteur commun est $(x + 2)$ :
$$H = (x + 2)\\big[(3x - 1) + (x + 5)\\big] = (x + 2)(4x + 4).$$

**2.** Le facteur commun est $(2x - 3)$ ; attention au signe « $-$ » devant la seconde parenthèse :
$$I = (2x - 3)\\big[(x + 4) - (5x - 1)\\big] = (2x - 3)(x + 4 - 5x + 1) = (2x - 3)(-4x + 5).$$

**3.** $(x - 1)^2 = (x - 1)(x - 1)$, donc le facteur commun est $(x - 1)$ :
$$J = (x - 1)\\big[(x - 1) + (2x + 3)\\big] = (x - 1)(3x + 2).$$

**4.** $4x + 4 = 4(x + 1)$, donc $H = (x + 2) \\times 4(x + 1) = 4(x + 2)(x + 1)$.`
    },
    {
      id: "N2bis-ds-04",
      title: "Développer, factoriser, choisir",
      difficulty: 2,
      points: 5,
      statement: `On considère l'expression $K = (3x - 2)^2 - (3x - 2)(x + 4)$.

1. Développer et réduire $K$.
2. Factoriser $K$ ; montrer que $K = 2(3x - 2)(x - 3)$.
3. Calculer $K$ pour $x = 3$, en choisissant la forme la plus adaptée.
4. Résoudre l'équation $K = 0$.`,
      solution: `**1.** $(3x - 2)^2 = 9x^2 - 12x + 4$ et $(3x - 2)(x + 4) = 3x^2 + 12x - 2x - 8 = 3x^2 + 10x - 8$. Donc
$$K = 9x^2 - 12x + 4 - 3x^2 - 10x + 8 = 6x^2 - 22x + 12.$$

**2.** Le facteur commun est $(3x - 2)$ :
$$K = (3x - 2)\\big[(3x - 2) - (x + 4)\\big] = (3x - 2)(2x - 6) = (3x - 2) \\times 2(x - 3) = 2(3x - 2)(x - 3).$$

**3.** Avec la forme factorisée : $K = 2 \\times (9 - 2) \\times (3 - 3) = 2 \\times 7 \\times 0 = 0$.

**4.** Un produit est nul si et seulement si l'un de ses facteurs est nul ($2 \\neq 0$) :
$3x - 2 = 0$, soit $x = \\dfrac{2}{3}$ ; ou $x - 3 = 0$, soit $x = 3$.
Les solutions sont $\\dfrac{2}{3}$ et $3$.`
    },
    {
      id: "N2bis-ds-05",
      title: "Factoriser avec a² − b²",
      difficulty: 3,
      points: 5,
      statement: `1. Factoriser $L = (2x + 1)^2 - 9$, puis montrer que $L = 4(x - 1)(x + 2)$.
2. Factoriser $M = (x + 3)^2 - (2x - 1)^2$.
3. Vérifier la factorisation de $M$ pour $x = 0$.
4. Résoudre l'équation $M = 0$.`,
      solution: `**1.** $9 = 3^2$, on applique $a^2 - b^2 = (a - b)(a + b)$ avec $a = 2x + 1$ et $b = 3$ :
$$L = (2x + 1 - 3)(2x + 1 + 3) = (2x - 2)(2x + 4) = 2(x - 1) \\times 2(x + 2) = 4(x - 1)(x + 2).$$

**2.** Avec $a = x + 3$ et $b = 2x - 1$ (attention aux parenthèses) :
$$M = \\big[(x + 3) - (2x - 1)\\big]\\big[(x + 3) + (2x - 1)\\big] = (-x + 4)(3x + 2).$$

**3.** Pour $x = 0$ : forme initiale $3^2 - (-1)^2 = 9 - 1 = 8$ ; forme factorisée $4 \\times 2 = 8$. Les deux résultats concordent.

**4.** Produit nul : $-x + 4 = 0$, soit $x = 4$ ; ou $3x + 2 = 0$, soit $x = -\\dfrac{2}{3}$. Solutions : $4$ et $-\\dfrac{2}{3}$.`
    },
    {
      id: "N2bis-ds-06",
      title: "Le carré privé d'un coin",
      difficulty: 3,
      points: 5,
      statement: `Un carré $ABCD$ a pour côté $(x + 5)$ cm, avec $x > 0$. On retire dans un coin un petit carré de côté $3$ cm. On note $\\mathcal{A}$ l'aire de la surface restante, en cm².

1. Exprimer $\\mathcal{A}$ en fonction de $x$.
2. Factoriser cette expression et montrer que $\\mathcal{A} = (x + 2)(x + 8)$.
3. Interpréter ce résultat : quelles sont les dimensions d'un rectangle ayant la même aire que la surface restante ?
4. Déterminer $x$ pour que l'aire restante soit égale à $91$ cm².`,
      solution: `**1.** $\\mathcal{A} = (x + 5)^2 - 3^2 = (x + 5)^2 - 9$.

**2.** D'après $a^2 - b^2 = (a - b)(a + b)$ :
$$\\mathcal{A} = (x + 5 - 3)(x + 5 + 3) = (x + 2)(x + 8).$$
(Contrôle : $(x + 2)(x + 8) = x^2 + 10x + 16$ et $(x + 5)^2 - 9 = x^2 + 10x + 25 - 9 = x^2 + 10x + 16$.)

**3.** La surface restante a la même aire qu'un rectangle de dimensions $(x + 2)$ cm et $(x + 8)$ cm.

**4.** On cherche $x > 0$ tel que $(x + 5)^2 - 9 = 91$, soit $(x + 5)^2 = 100$. Comme $x + 5 > 0$, on a $x + 5 = 10$, donc $x = 5$.
Vérification : $(5 + 2)(5 + 8) = 7 \\times 13 = 91$ cm².`
    },
    {
      id: "N2bis-ds-07",
      title: "Carrés de deux impairs consécutifs",
      difficulty: 4,
      points: 6,
      statement: `1. Calculer $7^2 - 5^2$ puis $13^2 - 11^2$. Que remarque-t-on ?
2. Soit $n$ un entier naturel. Justifier que $2n + 1$ et $2n + 3$ sont deux nombres impairs consécutifs.
3. Factoriser $(2n + 3)^2 - (2n + 1)^2$ et montrer que cette différence est égale à $8(n + 1)$.
4. Conclure : que peut-on dire de la différence des carrés de deux nombres impairs consécutifs ?
5. Déterminer deux nombres impairs consécutifs dont la différence des carrés vaut $2\\,024$.`,
      solution: `**1.** $7^2 - 5^2 = 49 - 25 = 24$ et $13^2 - 11^2 = 169 - 121 = 48$. Ces deux résultats sont des multiples de $8$.

**2.** $2n$ est pair, donc $2n + 1$ est impair ; $2n + 3 = (2n + 1) + 2$ est l'impair suivant.

**3.** Avec $a^2 - b^2 = (a - b)(a + b)$ :
$$(2n + 3)^2 - (2n + 1)^2 = (2n + 3 - 2n - 1)(2n + 3 + 2n + 1) = 2 \\times (4n + 4) = 2 \\times 4(n + 1) = 8(n + 1).$$

**4.** $n + 1$ est un entier, donc la différence des carrés de deux impairs consécutifs est **toujours un multiple de 8**.

**5.** On cherche $n$ tel que $8(n + 1) = 2\\,024$, soit $n + 1 = 253$, donc $n = 252$. Les nombres sont $2 \\times 252 + 1 = 505$ et $507$.
Vérification : $507^2 - 505^2 = 2 \\times 1\\,012 = 2\\,024$.`
    },
    {
      id: "N2bis-ds-08",
      title: "Trois formes d'une même expression",
      difficulty: 4,
      points: 5,
      statement: `On considère $P = (x - 4)^2 - 1$.

1. Développer et réduire $P$.
2. Factoriser $P$.
3. En choisissant à chaque fois la forme la plus adaptée parmi les trois obtenues, calculer $P$ pour $x = 0$, puis pour $x = 4$, et résoudre l'équation $P = 0$.
4. Résoudre l'équation $P = 15$.
5. Justifier que, pour tout nombre $x$, on a $P \\geqslant -1$.`,
      solution: `**1.** $P = x^2 - 8x + 16 - 1 = x^2 - 8x + 15$.

**2.** $P = (x - 4)^2 - 1^2 = (x - 4 - 1)(x - 4 + 1) = (x - 5)(x - 3)$.

**3.**
- $x = 0$ : forme développée, $P = 15$.
- $x = 4$ : forme de départ, $P = 0^2 - 1 = -1$.
- $P = 0$ : forme factorisée, $(x - 5)(x - 3) = 0$ ; un produit est nul si l'un de ses facteurs est nul, donc $x = 5$ ou $x = 3$.

**4.** $P = 15$ équivaut à $x^2 - 8x + 15 = 15$, soit $x^2 - 8x = 0$, soit $x(x - 8) = 0$. Donc $x = 0$ ou $x = 8$.

**5.** Un carré est toujours positif ou nul : $(x - 4)^2 \\geqslant 0$, donc $P = (x - 4)^2 - 1 \\geqslant -1$. La plus petite valeur de $P$ est $-1$, atteinte pour $x = 4$.`
    },
    {
      id: "N2bis-ds-09",
      title: "Factoriser pour calculer de tête",
      difficulty: 1,
      points: 4,
      statement: `1. Calculer de tête, en factorisant, puis expliquer la méthode :
   a) $A = 2{,}7 \\times 58 + 2{,}7 \\times 42$
   b) $B = 53^2 - 47^2$
   c) $C = 1\\,001^2 - 999^2$
2. Factoriser les expressions suivantes :
   a) $D = 8x - 8$
   b) $E = 12x^2 + 4x$
   c) $F = x^2 - 36$`,
      solution: `**1. a)** $2{,}7$ est un facteur commun : $A = 2{,}7 \\times (58 + 42) = 2{,}7 \\times 100 = 270$.

**b)** On utilise $a^2 - b^2 = (a - b)(a + b)$ avec $a = 53$ et $b = 47$ :
$B = (53 - 47)(53 + 47) = 6 \\times 100 = 600$.

**c)** De même : $C = (1\\,001 - 999)(1\\,001 + 999) = 2 \\times 2\\,000 = 4\\,000$.

**2. a)** $D = 8 \\times x - 8 \\times 1 = 8(x - 1)$.

**b)** $12x^2 = 4x \\times 3x$ et $4x = 4x \\times 1$, donc $E = 4x(3x + 1)$.

**c)** $36 = 6^2$, donc $F = x^2 - 6^2 = (x - 6)(x + 6)$.

On peut vérifier chaque factorisation en redéveloppant, par exemple $4x(3x + 1) = 12x^2 + 4x$.`
    },
    {
      id: "N2bis-ds-10",
      title: "Toujours pair ?",
      difficulty: 2,
      points: 5,
      statement: `On s'intéresse aux nombres de la forme $n^2 + n$, où $n$ est un nombre entier positif.

1. Calculer $n^2 + n$ pour $n = 4$, $n = 7$ et $n = 10$. Quelle conjecture peut-on faire sur la parité de ces nombres ?
2. Factoriser $n^2 + n$.
3. Démontrer la conjecture. On pourra remarquer que parmi deux entiers consécutifs, l'un est forcément pair.
4. a) Factoriser $3n^2 + 3n$.
   b) En déduire que $3n^2 + 3n$ est toujours un multiple de $6$.`,
      solution: `**1.** $4^2 + 4 = 20$ ; $7^2 + 7 = 56$ ; $10^2 + 10 = 110$.
Ces trois nombres sont pairs. On conjecture que $n^2 + n$ est toujours pair.

**2.** $n$ est un facteur commun : $n^2 + n = n \\times n + n \\times 1 = n(n + 1)$.

**3.** $n$ et $n + 1$ sont deux entiers consécutifs, donc l'un des deux est pair. Un produit dont l'un des facteurs est pair est pair (il s'écrit $2 \\times k \\times \\ldots$). Donc $n(n + 1) = n^2 + n$ est toujours pair : la conjecture est démontrée.

**4. a)** $3n$ est un facteur commun : $3n^2 + 3n = 3n(n + 1)$.

**b)** D'après la question 3, $n(n + 1)$ est pair : il s'écrit $2k$ avec $k$ entier. Alors $3n^2 + 3n = 3 \\times 2k = 6k$, qui est un multiple de $6$.
Exemple : pour $n = 4$, $3 \\times 16 + 12 = 60 = 6 \\times 10$.`
    },
    {
      id: "N2bis-ds-11",
      title: "Le cube percé",
      difficulty: 3,
      points: 5,
      statement: `Un cube en bois a une arête de $10$ cm. On le perce de part en part par un trou dont la section est un carré de côté $x$ cm (avec $0 < x < 10$) ; le trou traverse toute la hauteur du cube.

1. Montrer que le volume de bois restant, en cm³, est $V = 1\\,000 - 10x^2$. Calculer $V$ pour $x = 4$.
2. Factoriser $100 - x^2$, puis en déduire que $V = 10(10 - x)(10 + x)$.
3. Utiliser la forme factorisée pour calculer de tête le volume restant lorsque $x = 6$. Vérifier avec l'autre forme.
4. On veut qu'il reste exactement $190$ cm³ de bois.
   a) Montrer que cela revient à résoudre l'équation $x^2 = 81$.
   b) Résoudre cette équation et conclure.`,
      solution: `**1.** Volume du cube : $10^3 = 1\\,000$ cm³. Le trou est un pavé droit de base carrée de côté $x$ et de hauteur $10$ cm : son volume est $x^2 \\times 10 = 10x^2$ cm³. Donc $V = 1\\,000 - 10x^2$.
Pour $x = 4$ : $V = 1\\,000 - 10 \\times 16 = 840$ cm³.

**2.** $100 - x^2 = 10^2 - x^2 = (10 - x)(10 + x)$.
Comme $1\\,000 - 10x^2 = 10(100 - x^2)$, on obtient $V = 10(10 - x)(10 + x)$.

**3.** Pour $x = 6$ : $V = 10 \\times 4 \\times 16 = 640$ cm³.
Vérification : $1\\,000 - 10 \\times 36 = 1\\,000 - 360 = 640$ cm³.

**4. a)** $1\\,000 - 10x^2 = 190$ équivaut à $10x^2 = 810$, soit $x^2 = 81$.

**b)** Les nombres dont le carré vaut $81$ sont $9$ et $-9$. Une longueur est positive, donc $x = 9$.
Il faut un trou de section carrée de $9$ cm de côté. Vérification : $10 \\times 1 \\times 19 = 190$ cm³.`
    },
    {
      id: "N2bis-ds-12",
      title: "Différences de deux carrés",
      difficulty: 4,
      points: 6,
      statement: `On cherche quels nombres entiers peuvent s'écrire comme la différence des carrés de deux nombres entiers positifs, c'est-à-dire sous la forme $a^2 - b^2$.

1. Vérifier que $15 = 4^2 - 1^2$ et que $15 = 8^2 - 7^2$.
2. Soit $n$ un entier positif. Développer $(n + 1)^2 - n^2$. En déduire que tout nombre impair est la différence de deux carrés.
3. Soit $n$ un entier supérieur ou égal à $1$. Montrer que $(n + 1)^2 - (n - 1)^2 = 4n$. Que peut-on en déduire pour les multiples de $4$ ?
4. On suppose que $a^2 - b^2$ est un nombre pair, avec $a$ et $b$ entiers.
   a) Factoriser $a^2 - b^2$.
   b) On admet que si $a^2 - b^2$ est pair, alors $a$ et $b$ sont tous les deux pairs ou tous les deux impairs. Justifier qu'alors $a - b$ et $a + b$ sont pairs.
   c) En déduire que le nombre $2\\,026$ ne peut pas s'écrire comme différence de deux carrés d'entiers.`,
      solution: `**1.** $4^2 - 1^2 = 16 - 1 = 15$ et $8^2 - 7^2 = 64 - 49 = 15$.

**2.** $(n + 1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$.
Tout nombre impair s'écrit $2n + 1$ avec $n$ entier positif, donc il est égal à $(n + 1)^2 - n^2$. Par exemple $15 = 8^2 - 7^2$ (avec $n = 7$).

**3.** $(n + 1)^2 - (n - 1)^2 = (n^2 + 2n + 1) - (n^2 - 2n + 1) = 4n$.
Tout multiple de $4$, $4n$ avec $n \\geq 1$, est donc la différence de deux carrés. Exemple : $12 = 4 \\times 3 = 4^2 - 2^2$.

**4. a)** $a^2 - b^2 = (a - b)(a + b)$.

**b)** Si $a$ et $b$ sont pairs, leur somme et leur différence sont paires. Si $a$ et $b$ sont impairs, ils s'écrivent $2p + 1$ et $2q + 1$ ; alors $a - b = 2(p - q)$ et $a + b = 2(p + q + 1)$ sont pairs.

**c)** Si $2\\,026$ (nombre pair) s'écrivait $a^2 - b^2$, alors $a - b = 2u$ et $a + b = 2v$ avec $u$ et $v$ entiers, et $2\\,026 = 2u \\times 2v = 4uv$ serait un multiple de $4$. Or $2\\,026 = 4 \\times 506 + 2$ : ce n'est pas un multiple de $4$. Donc $2\\,026$ ne peut pas s'écrire comme différence de deux carrés.`
    }
  ],
  "N3": [
    {
      id: "N3-ds-01",
      title: "Règles de calcul sur les puissances",
      difficulty: 1,
      points: 4,
      statement: `1. Écrire chaque nombre sous la forme d'une seule puissance :
   a) $10^5 \\times 10^{-3}$ $\\quad$ b) $(10^3)^4$ $\\quad$ c) $\\dfrac{10^7}{10^{-2}}$ $\\quad$ d) $2^3 \\times 2^5$ $\\quad$ e) $\\dfrac{5^6}{5^4}$
2. Donner l'écriture décimale de $2^{-3}$.
3. Calculer $(-3)^2$ et $-3^2$. Expliquer pourquoi les résultats sont différents.`,
      solution: `On utilise $a^m \\times a^n = a^{m+n}$, $\\dfrac{a^m}{a^n} = a^{m-n}$ et $(a^m)^n = a^{m \\times n}$.

**1. a)** $10^{5 + (-3)} = 10^2$. **b)** $10^{3 \\times 4} = 10^{12}$. **c)** $10^{7 - (-2)} = 10^9$. **d)** $2^{3 + 5} = 2^8$. **e)** $5^{6 - 4} = 5^2$ (soit $25$).

**2.** $2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8} = 0{,}125$.

**3.** $(-3)^2 = (-3) \\times (-3) = 9$, alors que $-3^2 = -(3 \\times 3) = -9$. Dans $-3^2$, l'exposant ne porte que sur $3$ (la puissance est prioritaire sur le signe « $-$ »), alors que dans $(-3)^2$ il porte sur $-3$.`
    },
    {
      id: "N3-ds-02",
      title: "Écriture scientifique",
      difficulty: 1,
      points: 4,
      statement: `1. Donner l'écriture scientifique des nombres suivants :
   a) $452\\,000$ $\\quad$ b) $0{,}000\\,37$ $\\quad$ c) $63 \\times 10^4$ $\\quad$ d) $0{,}08 \\times 10^{-2}$
2. Donner l'écriture décimale de $2{,}1 \\times 10^{-3}$ et de $7{,}05 \\times 10^{4}$.
3. Ranger dans l'ordre croissant : $3 \\times 10^{-2}$ ; $\\;9 \\times 10^{-3}$ ; $\\;1{,}2 \\times 10^{-2}$.`,
      solution: `L'écriture scientifique d'un nombre positif est $a \\times 10^n$ avec $1 \\leqslant a < 10$ et $n$ entier relatif.

**1. a)** $452\\,000 = 4{,}52 \\times 10^5$.
**b)** $0{,}000\\,37 = 3{,}7 \\times 10^{-4}$.
**c)** $63 \\times 10^4 = 6{,}3 \\times 10^1 \\times 10^4 = 6{,}3 \\times 10^5$.
**d)** $0{,}08 \\times 10^{-2} = 8 \\times 10^{-2} \\times 10^{-2} = 8 \\times 10^{-4}$.

**2.** $2{,}1 \\times 10^{-3} = 0{,}0021$ et $7{,}05 \\times 10^4 = 70\\,500$.

**3.** En écriture décimale : $0{,}03$ ; $0{,}009$ ; $0{,}012$. Donc $9 \\times 10^{-3} < 1{,}2 \\times 10^{-2} < 3 \\times 10^{-2}$.`
    },
    {
      id: "N3-ds-03",
      title: "Calculs en écriture scientifique",
      difficulty: 2,
      points: 5,
      statement: `On considère :
$$A = \\frac{3 \\times 10^4 \\times 8 \\times 10^{-6}}{6 \\times 10^{-3}} \\qquad B = (5 \\times 10^3)^2 \\times 2 \\times 10^{-5}$$

1. Calculer $A$ en détaillant les étapes ; donner son écriture scientifique puis son écriture décimale.
2. Calculer $B$ en détaillant les étapes ; donner son écriture scientifique puis son écriture décimale.
3. Combien de fois $B$ est-il plus grand que $A$ ?`,
      solution: `**1.** On regroupe les nombres et les puissances de $10$ :
$$A = \\frac{3 \\times 8}{6} \\times \\frac{10^4 \\times 10^{-6}}{10^{-3}} = 4 \\times \\frac{10^{-2}}{10^{-3}} = 4 \\times 10^{1}.$$
Écriture scientifique : $4 \\times 10^1$ ; écriture décimale : $A = 40$.

**2.** $(5 \\times 10^3)^2 = 5^2 \\times 10^6 = 25 \\times 10^6$, donc
$$B = 25 \\times 2 \\times 10^6 \\times 10^{-5} = 50 \\times 10^{1} = 5 \\times 10^2.$$
Écriture décimale : $B = 500$.

**3.** $\\dfrac{B}{A} = \\dfrac{500}{40} = 12{,}5$ : $B$ est $12{,}5$ fois plus grand que $A$.`
    },
    {
      id: "N3-ds-04",
      title: "Préfixes et ordres de grandeur",
      difficulty: 2,
      points: 5,
      statement: `On rappelle : $1$ µm $= 10^{-6}$ m ; $1$ nm $= 10^{-9}$ m ; $1$ Mo $= 10^6$ octets ; $1$ To $= 10^{12}$ octets.

1. Un cheveu a un diamètre de $80$ µm et un virus de la grippe un diamètre d'environ $120$ nm. Écrire ces deux longueurs en mètres, en écriture scientifique.
2. Combien de fois le diamètre du cheveu est-il plus grand que celui du virus ? Arrondir à l'unité.
3. Un disque dur a une capacité de $2$ To. Combien de photos de $4$ Mo peut-on y enregistrer ? Donner le résultat en écriture scientifique.`,
      solution: `**1.** Cheveu : $80 \\times 10^{-6}$ m $= 8 \\times 10^{-5}$ m. Virus : $120 \\times 10^{-9}$ m $= 1{,}2 \\times 10^{-7}$ m.

**2.** $$\\frac{8 \\times 10^{-5}}{1{,}2 \\times 10^{-7}} = \\frac{8}{1{,}2} \\times 10^{2} \\approx 6{,}667 \\times 10^2 \\approx 667.$$
Le cheveu est environ $667$ fois plus épais que le virus.

**3.** $$\\frac{2 \\times 10^{12}}{4 \\times 10^6} = 0{,}5 \\times 10^6 = 5 \\times 10^5.$$
On peut enregistrer $500\\,000$ photos, soit $5 \\times 10^5$ photos.`
    },
    {
      id: "N3-ds-05",
      title: "Le cœur humain",
      difficulty: 3,
      points: 5,
      statement: `Au repos, le cœur d'un adulte bat en moyenne $70$ fois par minute et envoie environ $70$ mL de sang à chaque battement. On considère une vie de $80$ ans et on prend $1$ an $= 365$ jours.

1. Montrer que le cœur bat environ $2{,}94 \\times 10^9$ fois en $80$ ans.
2. Calculer le volume de sang pompé en $80$ ans, en litres, puis en m³. Donner les résultats en écriture scientifique, arrondis au centième.
3. Une piscine olympique contient $2\\,500$ m³ d'eau. Combien de piscines olympiques le cœur pourrait-il remplir en $80$ ans ? Arrondir à l'unité.`,
      solution: `**1.** Nombre de minutes en $80$ ans : $60 \\times 24 \\times 365 \\times 80 = 42\\,048\\,000$. Nombre de battements :
$$70 \\times 42\\,048\\,000 = 2\\,943\\,360\\,000 \\approx 2{,}94 \\times 10^9.$$

**2.** $70$ mL $= 0{,}07$ L $= 7 \\times 10^{-2}$ L. Volume : $2\\,943\\,360\\,000 \\times 0{,}07 = 206\\,035\\,200$ L $\\approx 2{,}06 \\times 10^8$ L.
Comme $1$ m³ $= 1\\,000$ L $= 10^3$ L : $\\dfrac{2{,}06 \\times 10^8}{10^3} \\approx 2{,}06 \\times 10^5$ m³.

**3.** $\\dfrac{206\\,035{,}2}{2\\,500} \\approx 82{,}4$. Le cœur pourrait remplir environ $82$ piscines olympiques.`
    },
    {
      id: "N3-ds-06",
      title: "La croissance des bactéries",
      difficulty: 3,
      points: 5,
      statement: `Dans des conditions favorables, une population de bactéries double toutes les $20$ minutes. On part d'une seule bactérie.

1. Combien y a-t-il de bactéries au bout de $1$ heure ? de $2$ heures ? Écrire ces nombres sous forme de puissances de $2$.
2. Montrer qu'au bout de $10$ heures, il y a $2^{30}$ bactéries. Donner l'écriture scientifique de ce nombre, arrondie au centième.
3. Une bactérie a une masse d'environ $10^{-12}$ g. Quelle est la masse totale des bactéries au bout de $10$ heures ? Exprimer le résultat en mg.
4. Au bout de combien de temps la population dépasse-t-elle un million de bactéries ?`,
      solution: `**1.** En $1$ heure il y a $3$ doublements : $2^3 = 8$ bactéries. En $2$ heures, $6$ doublements : $2^6 = 64$ bactéries.

**2.** En $10$ heures $= 600$ min, il y a $600 \\div 20 = 30$ doublements, d'où $2^{30} = 1\\,073\\,741\\,824 \\approx 1{,}07 \\times 10^9$ bactéries.

**3.** Masse : $1{,}07 \\times 10^9 \\times 10^{-12} = 1{,}07 \\times 10^{-3}$ g $\\approx 1{,}07$ mg (car $1$ mg $= 10^{-3}$ g). Environ $1$ mg.

**4.** $2^{19} = 524\\,288 < 1\\,000\\,000$ et $2^{20} = 1\\,048\\,576 > 1\\,000\\,000$. Il faut $20$ doublements, soit $20 \\times 20 = 400$ min $= 6$ h $40$ min.`
    },
    {
      id: "N3-ds-07",
      title: "Simplifier des puissances",
      difficulty: 4,
      points: 6,
      statement: `1. Écrire $C = \\dfrac{2^5 \\times 3^4}{2^3 \\times 3^6}$ sous la forme d'une fraction irréductible.
2. En décomposant chaque nombre en produit de puissances de nombres premiers, simplifier $D = \\dfrac{15^3 \\times 4^2}{6^2 \\times 10^3}$.
3. a) Comparer $2^{10}$ et $10^3$.
   b) En déduire, sans calculatrice, lequel des deux nombres $2^{100}$ et $10^{30}$ est le plus grand.
4. Combien de chiffres comporte l'écriture décimale du nombre $2^{10} \\times 5^{12}$ ? Justifier.`,
      solution: `**1.** $C = 2^{5-3} \\times 3^{4-6} = 2^2 \\times 3^{-2} = \\dfrac{4}{9}$.

**2.** $15^3 = 3^3 \\times 5^3$ ; $4^2 = 2^4$ ; $6^2 = 2^2 \\times 3^2$ ; $10^3 = 2^3 \\times 5^3$. Donc
$$D = \\frac{3^3 \\times 5^3 \\times 2^4}{2^2 \\times 3^2 \\times 2^3 \\times 5^3} = \\frac{3^3 \\times 2^4}{2^5 \\times 3^2} = \\frac{3}{2}.$$

**3. a)** $2^{10} = 1\\,024$ et $10^3 = 1\\,000$, donc $2^{10} > 10^3$.
**b)** $2^{100} = (2^{10})^{10}$ et $10^{30} = (10^3)^{10}$. Comme $2^{10} > 10^3 > 0$, en multipliant dix fois des inégalités entre nombres positifs, $(2^{10})^{10} > (10^3)^{10}$ : $2^{100} > 10^{30}$.

**4.** $2^{10} \\times 5^{12} = 2^{10} \\times 5^{10} \\times 5^2 = 10^{10} \\times 25 = 2{,}5 \\times 10^{11} = 250\\,000\\,000\\,000$. Ce nombre s'écrit avec $12$ chiffres.`
    },
    {
      id: "N3-ds-08",
      title: "Le volume des données numériques",
      difficulty: 4,
      points: 5,
      statement: `Préfixes utiles : kilo $= 10^3$ ; méga $= 10^6$ ; giga $= 10^9$ ; téra $= 10^{12}$ ; péta $= 10^{15}$ ; exa $= 10^{18}$.

On suppose que $3{,}2 \\times 10^9$ internautes produisent chacun en moyenne $1{,}5$ gigaoctet (Go) de données par jour.

1. Calculer le volume de données produit en un jour, en octets. Exprimer ce résultat avec le préfixe le plus adapté.
2. Calculer le volume produit en une année de $365$ jours. Donner l'écriture scientifique du résultat.
3. Un centre de données peut stocker $2$ pétaoctets. Combien de centres de données faudrait-il pour stocker les données produites en une seule journée ?
4. Un câble transfère $10$ gigaoctets par seconde. Combien de temps faudrait-il pour transférer les données d'une journée ? Exprimer le résultat en années (arrondi à l'unité).`,
      solution: `**1.** $1{,}5$ Go $= 1{,}5 \\times 10^9$ octets. Volume : $3{,}2 \\times 10^9 \\times 1{,}5 \\times 10^9 = 4{,}8 \\times 10^{18}$ octets, soit $4{,}8$ exaoctets (Eo).

**2.** $4{,}8 \\times 10^{18} \\times 365 = 1\\,752 \\times 10^{18} = 1{,}752 \\times 10^{21}$ octets.

**3.** $$\\frac{4{,}8 \\times 10^{18}}{2 \\times 10^{15}} = 2{,}4 \\times 10^3 = 2\\,400.$$
Il faudrait $2\\,400$ centres de données.

**4.** $\\dfrac{4{,}8 \\times 10^{18}}{10 \\times 10^9} = 4{,}8 \\times 10^8$ s. Une année compte $365 \\times 24 \\times 3\\,600 = 31\\,536\\,000$ s, d'où $\\dfrac{4{,}8 \\times 10^8}{3{,}1536 \\times 10^7} \\approx 15{,}2$ : il faudrait environ $15$ ans.`
    },
    {
      id: "N3-ds-09",
      title: "Distances dans le système solaire",
      difficulty: 1,
      points: 4,
      statement: `Le tableau donne la distance moyenne au Soleil de trois planètes.

| Planète | Mercure | Terre | Neptune |
|---|---|---|---|
| Distance au Soleil (km) | $5{,}8 \\times 10^7$ | $1{,}5 \\times 10^8$ | $4{,}5 \\times 10^9$ |

1. Écrire la distance de la Terre au Soleil en écriture décimale.
2. Ranger ces trois planètes de la plus proche à la plus éloignée du Soleil. Justifier.
3. Combien de fois Neptune est-elle plus éloignée du Soleil que la Terre ?
4. Donner l'écriture scientifique des nombres $63\\,000\\,000$ et $0{,}000\\,72$.`,
      solution: `**1.** $1{,}5 \\times 10^8 = 150\\,000\\,000$ km.

**2.** En écriture scientifique, on compare d'abord les puissances de $10$ : $10^7 < 10^8 < 10^9$. Donc Mercure est la plus proche, puis la Terre, puis Neptune.

**3.** $\\dfrac{4{,}5 \\times 10^9}{1{,}5 \\times 10^8} = \\dfrac{4{,}5}{1{,}5} \\times 10^{9 - 8} = 3 \\times 10 = 30$.
Neptune est $30$ fois plus éloignée du Soleil que la Terre.

**4.** $63\\,000\\,000 = 6{,}3 \\times 10^7$ (on déplace la virgule de $7$ rangs vers la gauche).
$0{,}000\\,72 = 7{,}2 \\times 10^{-4}$ (on déplace la virgule de $4$ rangs vers la droite).`
    },
    {
      id: "N3-ds-10",
      title: "Les globules rouges",
      difficulty: 2,
      points: 5,
      statement: `Le corps d'un adulte contient environ $5$ litres de sang. Un millimètre cube de sang contient environ $5 \\times 10^6$ globules rouges. On rappelle que $1$ L $= 1$ dm³ $= 10^6$ mm³.

1. Exprimer $5$ L en mm³, en écriture scientifique.
2. Montrer que le corps d'un adulte contient environ $2{,}5 \\times 10^{13}$ globules rouges.
3. Un globule rouge a un diamètre d'environ $7 \\times 10^{-6}$ m. On imagine qu'on aligne tous les globules rouges d'un adulte, côte à côte.
   a) Calculer la longueur obtenue, en mètres, puis en kilomètres.
   b) Le tour de la Terre mesure environ $40\\,000$ km. Combien de fois environ cette file de globules ferait-elle le tour de la Terre ?`,
      solution: `**1.** $5$ L $= 5 \\times 10^6$ mm³.

**2.** Nombre de globules rouges : $5 \\times 10^6 \\times 5 \\times 10^6 = 25 \\times 10^{12} = 2{,}5 \\times 10^{13}$.

**3. a)** Longueur : $2{,}5 \\times 10^{13} \\times 7 \\times 10^{-6} = 17{,}5 \\times 10^{7} = 1{,}75 \\times 10^8$ m.
Comme $1$ km $= 10^3$ m, cela fait $1{,}75 \\times 10^5$ km, soit $175\\,000$ km.

**b)** $\\dfrac{175\\,000}{40\\,000} = 4{,}375$. La file ferait un peu plus de $4$ fois le tour de la Terre.`
    },
    {
      id: "N3-ds-11",
      title: "La goutte d'huile sur l'eau",
      difficulty: 3,
      points: 5,
      statement: `Lorsqu'on dépose de l'huile sur une eau calme, elle s'étale en une couche extrêmement fine. On admet que l'épaisseur de cette couche est de $2 \\times 10^{-9}$ m.

1. Une goutte d'huile a un volume de $0{,}1$ cm³. Sachant que $1$ m³ $= 10^6$ cm³, montrer que ce volume vaut $10^{-7}$ m³.
2. Quelle surface, en m², la goutte peut-elle recouvrir ? On rappelle que le volume d'une couche est égal à l'aire de sa surface multipliée par son épaisseur.
3. Lors d'un accident, un navire perd $3 \\times 10^4$ m³ de pétrole. En supposant qu'il s'étale avec la même épaisseur :
   a) Calculer l'aire de la surface recouverte, en m², puis en km² (on rappelle que $1$ km² $= 10^6$ m²).
   b) La France métropolitaine a une superficie d'environ $5{,}5 \\times 10^5$ km². Combien de fois environ la nappe serait-elle plus grande ?`,
      solution: `**1.** $1$ cm³ $= 10^{-6}$ m³, donc $0{,}1$ cm³ $= 10^{-1} \\times 10^{-6}$ m³ $= 10^{-7}$ m³.

**2.** Aire $= \\dfrac{\\text{volume}}{\\text{épaisseur}} = \\dfrac{10^{-7}}{2 \\times 10^{-9}} = \\dfrac{1}{2} \\times 10^{-7 - (-9)} = 0{,}5 \\times 10^2 = 50$ m².
Une seule goutte peut recouvrir $50$ m².

**3. a)** Aire $= \\dfrac{3 \\times 10^4}{2 \\times 10^{-9}} = 1{,}5 \\times 10^{4 + 9} = 1{,}5 \\times 10^{13}$ m².
En km² : $\\dfrac{1{,}5 \\times 10^{13}}{10^6} = 1{,}5 \\times 10^7$ km².

**b)** $\\dfrac{1{,}5 \\times 10^7}{5{,}5 \\times 10^5} = \\dfrac{1{,}5}{5{,}5} \\times 10^2 \\approx 27$.
La nappe serait environ $27$ fois plus grande que la France métropolitaine (en réalité, le pétrole s'étale moins finement, mais l'ordre de grandeur montre la gravité de ces pollutions).`
    },
    {
      id: "N3-ds-12",
      title: "Plier une feuille de papier",
      difficulty: 4,
      points: 6,
      statement: `Une feuille de papier a une épaisseur de $0{,}1$ mm. À chaque pliage en deux, l'épaisseur double. On suppose (ce qui est impossible en pratique) qu'on peut plier la feuille autant de fois qu'on le souhaite.

1. Quelle est l'épaisseur, en mm, après $1$ pliage ? après $3$ pliages ?
2. Justifier que l'épaisseur après $n$ pliages est $0{,}1 \\times 2^n$ mm. Calculer l'épaisseur après $10$ pliages.
3. a) Calculer $2^{10}$ et vérifier que $2^{10}$ est proche de $10^3$.
   b) En utilisant $2^{42} = 2^2 \\times (2^{10})^4$, donner un ordre de grandeur de l'épaisseur, en km, après $42$ pliages.
   c) La distance de la Terre à la Lune est d'environ $384\\,000$ km. Commenter.
4. À l'aide de la calculatrice, déterminer le nombre minimal de pliages pour que l'épaisseur dépasse $1$ km.`,
      solution: `**1.** Après $1$ pliage : $0{,}1 \\times 2 = 0{,}2$ mm. Après $3$ pliages : $0{,}1 \\times 2 \\times 2 \\times 2 = 0{,}8$ mm.

**2.** À chaque pliage, on multiplie l'épaisseur par $2$ ; après $n$ pliages, on a multiplié $n$ fois par $2$, d'où $0{,}1 \\times 2^n$ mm.
Après $10$ pliages : $0{,}1 \\times 2^{10} = 0{,}1 \\times 1\\,024 = 102{,}4$ mm, soit environ $10$ cm.

**3. a)** $2^{10} = 1\\,024 \\approx 1\\,000 = 10^3$.

**b)** $2^{42} = 4 \\times (2^{10})^4 \\approx 4 \\times (10^3)^4 = 4 \\times 10^{12}$.
L'épaisseur est donc d'environ $0{,}1 \\times 4 \\times 10^{12} = 4 \\times 10^{11}$ mm.
Or $1$ km $= 10^6$ mm, donc cela fait environ $4 \\times 10^5$ km, soit $400\\,000$ km. (Le calcul exact donne environ $439\\,805$ km.)

**c)** Après seulement $42$ pliages, l'épaisseur dépasserait la distance Terre-Lune : la croissance par doublements successifs est extrêmement rapide.

**4.** On veut $0{,}1 \\times 2^n > 10^6$ mm, c'est-à-dire $2^n > 10^7$.
$2^{23} = 8\\,388\\,608 < 10\\,000\\,000$ et $2^{24} = 16\\,777\\,216 > 10\\,000\\,000$.
Il faut au minimum $24$ pliages.`
    }
  ],
  "N4": [
    {
      id: "N4-ds-01",
      title: "Équations du premier degré",
      difficulty: 1,
      points: 4,
      statement: `1. Résoudre les équations suivantes :
   a) $5x - 7 = 18$
   b) $3x + 4 = x - 6$
   c) $2(x - 3) = 4x + 1$
2. Le nombre $2$ est-il solution de l'équation $x^2 - 3x = -2$ ? Justifier.`,
      solution: `**1. a)** $5x = 18 + 7 = 25$, donc $x = 5$. Solution : $5$.
**b)** $3x - x = -6 - 4$, soit $2x = -10$, donc $x = -5$. Solution : $-5$.
**c)** $2x - 6 = 4x + 1$, soit $2x - 4x = 1 + 6$, soit $-2x = 7$, donc $x = -\\dfrac{7}{2} = -3{,}5$. Solution : $-3{,}5$.
(Vérification de c) : $2(-3{,}5 - 3) = -13$ et $4 \\times (-3{,}5) + 1 = -13$.)

**2.** Pour $x = 2$ : $2^2 - 3 \\times 2 = 4 - 6 = -2$. L'égalité est vraie, donc $2$ est solution.`
    },
    {
      id: "N4-ds-02",
      title: "Équations produit et équations x² = a",
      difficulty: 1,
      points: 4,
      statement: `Résoudre les équations suivantes en justifiant.

1. $(x - 4)(2x + 6) = 0$
2. $x(5x - 2) = 0$
3. $x^2 = 49$
4. $x^2 = 7$
5. $x^2 = -4$`,
      solution: `**1.** Un produit de facteurs est nul si et seulement si l'un au moins de ses facteurs est nul : $x - 4 = 0$ ou $2x + 6 = 0$, soit $x = 4$ ou $x = -3$. Solutions : $4$ et $-3$.

**2.** $x = 0$ ou $5x - 2 = 0$, soit $x = 0$ ou $x = \\dfrac{2}{5}$. Solutions : $0$ et $0{,}4$.

**3.** $49 > 0$ : l'équation $x^2 = 49$ a deux solutions, $\\sqrt{49} = 7$ et $-7$.

**4.** $7 > 0$ : deux solutions, $\\sqrt{7}$ et $-\\sqrt{7}$ (environ $2{,}65$ et $-2{,}65$).

**5.** Un carré est toujours positif ou nul, il ne peut pas être égal à $-4$ : l'équation n'a **aucune solution**.`
    },
    {
      id: "N4-ds-03",
      title: "Inéquations",
      difficulty: 2,
      points: 5,
      statement: `1. Résoudre l'inéquation $3x - 5 < 7$ et représenter les solutions sur une droite graduée.
2. Résoudre l'inéquation $-2x + 3 \\geqslant 11$.
3. a) Résoudre l'inéquation $4x + 1 < x + 13$.
   b) Quel est le plus grand nombre entier solution de cette inéquation ?
4. Le nombre $-4$ est-il solution de l'inéquation de la question 2 ? Justifier par un calcul.`,
      solution: `**1.** $3x < 12$, donc $x < 4$ (on divise par $3 > 0$, le sens ne change pas). Les solutions sont les nombres strictement inférieurs à $4$ : sur la droite graduée, on hachure la partie à gauche de $4$, le crochet en $4$ étant tourné vers l'extérieur ($4$ exclu).

**2.** $-2x \\geqslant 8$. On divise par $-2$, nombre **négatif** : le sens de l'inégalité change. $x \\leqslant -4$.

**3. a)** $4x - x < 13 - 1$, soit $3x < 12$, donc $x < 4$.
**b)** $4$ n'est pas solution (inégalité stricte) : le plus grand entier solution est $3$.

**4.** Pour $x = -4$ : $-2 \\times (-4) + 3 = 8 + 3 = 11$ et $11 \\geqslant 11$ est vrai. Donc $-4$ est solution, ce qui est cohérent avec $x \\leqslant -4$.`
    },
    {
      id: "N4-ds-04",
      title: "Les places du spectacle",
      difficulty: 2,
      points: 5,
      statement: `Pour un spectacle, une place coûte $12$ € pour un adulte et $7$ € pour un enfant. Une famille de $9$ personnes a payé $88$ € au total. On note $x$ le nombre d'adultes.

1. Exprimer en fonction de $x$ le nombre d'enfants, puis le prix payé pour les enfants.
2. Montrer que $x$ est solution de l'équation $12x + 7(9 - x) = 88$.
3. Résoudre cette équation et en déduire la composition de la famille.
4. Vérifier le résultat.`,
      solution: `**1.** Il y a $9$ personnes, donc $9 - x$ enfants. Prix payé pour les enfants : $7(9 - x)$ €.

**2.** Le prix payé pour les adultes est $12x$ €. Le total payé est $88$ €, d'où $12x + 7(9 - x) = 88$.

**3.** $12x + 63 - 7x = 88$, soit $5x = 25$, donc $x = 5$. La famille compte $5$ adultes et $9 - 5 = 4$ enfants.

**4.** $5 \\times 12 + 4 \\times 7 = 60 + 28 = 88$ € : le résultat est correct.`
    },
    {
      id: "N4-ds-05",
      title: "Carré, triangle et rectangle de même périmètre",
      difficulty: 3,
      points: 5,
      statement: `Un carré et un triangle équilatéral ont le même périmètre. Le côté du triangle mesure $3$ cm de plus que le côté du carré. On note $x$ le côté du carré, en cm.

1. Exprimer en fonction de $x$ le périmètre du carré et celui du triangle.
2. Écrire une équation traduisant l'énoncé et la résoudre.
3. En déduire les longueurs des côtés du carré et du triangle, ainsi que le périmètre commun.
4. Un rectangle a le même périmètre que ces deux figures et sa longueur est le double de sa largeur. Déterminer ses dimensions.`,
      solution: `**1.** Périmètre du carré : $4x$. Le côté du triangle mesure $x + 3$, donc son périmètre est $3(x + 3) = 3x + 9$.

**2.** Les périmètres sont égaux : $4x = 3x + 9$, d'où $x = 9$.

**3.** Le carré a pour côté $9$ cm, le triangle $9 + 3 = 12$ cm. Périmètre commun : $4 \\times 9 = 36$ cm (et $3 \\times 12 = 36$ cm).

**4.** On note $\\ell$ la largeur ; la longueur est $2\\ell$. Le périmètre vaut $2(\\ell + 2\\ell) = 6\\ell$. On résout $6\\ell = 36$ : $\\ell = 6$. Le rectangle mesure $12$ cm sur $6$ cm.`
    },
    {
      id: "N4-ds-06",
      title: "Équations à factoriser",
      difficulty: 3,
      points: 5,
      statement: `1. Résoudre l'équation $x^2 = 5x$.
2. Résoudre l'équation $(2x + 1)^2 = 9$.
3. On considère l'équation $(x - 3)(x + 2) = (x - 3)(2x + 1)$.
   a) Tom « simplifie » les deux membres par $(x - 3)$ et obtient $x + 2 = 2x + 1$, d'où $x = 1$. Vérifier que $3$ est aussi solution de l'équation.
   b) Résoudre correctement l'équation en se ramenant à une équation produit nul.`,
      solution: `**1.** $x^2 - 5x = 0$, soit $x(x - 5) = 0$. Un produit est nul si l'un de ses facteurs est nul : $x = 0$ ou $x = 5$.
(Diviser par $x$ ferait perdre la solution $0$.)

**2.** $(2x + 1)^2 = 9$ équivaut à $2x + 1 = 3$ ou $2x + 1 = -3$, soit $x = 1$ ou $x = -2$.

**3. a)** Pour $x = 3$ : $(3 - 3)(3 + 2) = 0$ et $(3 - 3)(6 + 1) = 0$. L'égalité est vraie : $3$ est solution. Tom l'a perdue car il a divisé par $x - 3$, qui vaut $0$ lorsque $x = 3$.

**b)** $(x - 3)(x + 2) - (x - 3)(2x + 1) = 0$, soit $(x - 3)\\big[(x + 2) - (2x + 1)\\big] = 0$, soit $(x - 3)(1 - x) = 0$.
Donc $x = 3$ ou $x = 1$. Les solutions sont $1$ et $3$.`
    },
    {
      id: "N4-ds-07",
      title: "Le jardin et son allée",
      difficulty: 4,
      points: 6,
      statement: `Un jardin carré de côté $x$ mètres est entouré d'une allée de $2$ m de large ; l'ensemble « jardin + allée » forme un grand carré.

1. Exprimer en fonction de $x$ le côté du grand carré.
2. L'aire totale (jardin + allée) est de $196$ m². Écrire une équation vérifiée par $x$, puis la résoudre. Justifier qu'on ne garde qu'une solution.
3. Calculer l'aire de l'allée.
4. Dans un autre jardin carré de $10$ m de côté, on veut une allée de largeur $e$ mètres pour que l'aire totale soit $225$ m². Déterminer $e$.`,
      solution: `**1.** L'allée ajoute $2$ m de chaque côté : le grand carré a pour côté $x + 4$.

**2.** $(x + 4)^2 = 196$. Donc $x + 4 = 14$ ou $x + 4 = -14$, soit $x = 10$ ou $x = -18$. Une longueur est positive, donc $x = 10$ : le jardin mesure $10$ m de côté.

**3.** Aire de l'allée $=$ aire totale $-$ aire du jardin $= 196 - 10^2 = 96$ m².

**4.** Le grand carré a pour côté $10 + 2e$. On résout $(10 + 2e)^2 = 225$ avec $10 + 2e > 0$ : $10 + 2e = 15$, donc $2e = 5$ et $e = 2{,}5$ m.
Vérification : $(10 + 5)^2 = 225$.`
    },
    {
      id: "N4-ds-08",
      title: "Deux programmes qui se croisent",
      difficulty: 4,
      points: 5,
      statement: `**Programme A :** choisir un nombre ; lui soustraire $3$ ; multiplier le résultat par le nombre de départ.
**Programme B :** choisir un nombre ; lui ajouter $2$ ; multiplier le résultat par la différence entre le nombre de départ et $3$.

1. Calculer les résultats des deux programmes lorsqu'on choisit $5$.
2. On note $x$ le nombre de départ. Exprimer les résultats $A(x)$ et $B(x)$ de chaque programme en fonction de $x$, puis les développer.
3. Quels nombres donnent $0$ avec le programme A ? avec le programme B ?
4. Existe-t-il un nombre qui donne le même résultat avec les deux programmes ? Si oui, lequel ?
5. Déterminer le nombre pour lequel le résultat du programme A dépasse de $8$ celui du programme B.`,
      solution: `**1.** A : $(5 - 3) \\times 5 = 10$. B : $(5 + 2) \\times (5 - 3) = 14$.

**2.** $A(x) = x(x - 3) = x^2 - 3x$ ; $B(x) = (x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6$.

**3.** $x(x - 3) = 0$ équivaut à $x = 0$ ou $x = 3$. $(x + 2)(x - 3) = 0$ équivaut à $x = -2$ ou $x = 3$.

**4.** $A(x) = B(x)$ équivaut à $x^2 - 3x = x^2 - x - 6$, soit $-2x = -6$, donc $x = 3$. Avec $3$, les deux programmes donnent $0$.

**5.** $A(x) = B(x) + 8$ équivaut à $x^2 - 3x = x^2 - x + 2$, soit $-2x = 2$, donc $x = -1$.
Vérification : $A(-1) = (-4) \\times (-1) = 4$ et $B(-1) = 1 \\times (-4) = -4$ ; on a bien $4 = -4 + 8$.`
    },
    {
      id: "N4-ds-09",
      title: "Nombres mystères",
      difficulty: 1,
      points: 4,
      statement: `1. Léo pense à un nombre. Il le multiplie par $4$, puis retranche $7$. Il obtient le même résultat que s'il avait ajouté $11$ au double de ce nombre.
   a) On note $x$ le nombre pensé. Écrire une équation traduisant l'énoncé.
   b) Résoudre cette équation et vérifier la réponse.
2. Inès pense à un nombre positif dont le carré vaut $2{,}25$. Écrire une équation, puis trouver le nombre d'Inès.
3. Le triple d'un nombre, diminué de $5$, est égal à l'opposé de ce nombre. Trouver ce nombre.`,
      solution: `**1. a)** $4x - 7 = 2x + 11$.

**b)** $4x - 2x = 11 + 7$, soit $2x = 18$, donc $x = 9$.
Vérification : $4 \\times 9 - 7 = 29$ et $2 \\times 9 + 11 = 29$. Léo a pensé à $9$.

**2.** On note $y$ le nombre d'Inès : $y^2 = 2{,}25$. Les solutions de cette équation sont $\\sqrt{2{,}25} = 1{,}5$ et $-1{,}5$. Le nombre est positif, donc Inès a pensé à $1{,}5$. Vérification : $1{,}5^2 = 2{,}25$.

**3.** On note $z$ ce nombre : $3z - 5 = -z$, d'où $4z = 5$ et $z = \\dfrac{5}{4} = 1{,}25$.
Vérification : $3 \\times 1{,}25 - 5 = -1{,}25$, qui est bien l'opposé de $1{,}25$.`
    },
    {
      id: "N4-ds-10",
      title: "Louer un vélo",
      difficulty: 2,
      points: 5,
      statement: `Un loueur de vélos propose deux tarifs :
- **Tarif A** : $15$ € par jour ;
- **Tarif B** : une adhésion de $40$ €, puis $10$ € par jour.

On note $x$ le nombre de jours de location.

1. Calculer le prix payé pour $5$ jours avec chacun des deux tarifs.
2. Exprimer en fonction de $x$ le prix $P_A$ payé avec le tarif A et le prix $P_B$ payé avec le tarif B.
3. a) Écrire une inéquation traduisant : « le tarif B est strictement moins cher que le tarif A ».
   b) Résoudre cette inéquation.
4. Conseiller un client en fonction de la durée de sa location.`,
      solution: `**1.** Tarif A : $5 \\times 15 = 75$ €. Tarif B : $40 + 5 \\times 10 = 90$ €. Pour $5$ jours, le tarif A est plus avantageux.

**2.** $P_A = 15x$ et $P_B = 40 + 10x$.

**3. a)** $40 + 10x < 15x$.

**b)** On soustrait $10x$ aux deux membres : $40 < 5x$. On divise par $5$, nombre positif, sans changer le sens de l'inégalité : $8 < x$.
Les solutions sont les nombres strictement supérieurs à $8$.

**4.** Pour $8$ jours, les deux tarifs coûtent le même prix : $15 \\times 8 = 120$ € et $40 + 10 \\times 8 = 120$ €.
- Pour moins de $8$ jours, le tarif A est le moins cher ;
- pour $8$ jours, les deux tarifs sont équivalents ;
- à partir de $9$ jours, le tarif B est le moins cher.`
    },
    {
      id: "N4-ds-11",
      title: "La salle et l'estrade",
      difficulty: 3,
      points: 5,
      statement: `Une salle a la forme d'un carré de côté $x$ mètres, avec $x > 4$. Le long d'un mur, on installe une estrade rectangulaire de $4$ m de large sur toute la longueur du mur. Le reste de la salle, appelé parterre, est un rectangle.

1. Exprimer les dimensions du parterre en fonction de $x$, puis montrer que son aire est $x(x - 4)$ m². Calculer cette aire pour $x = 10$.
2. On veut que l'aire du parterre soit égale aux trois quarts de l'aire de la salle.
   a) Montrer que cela revient à résoudre $x^2 - 4x = \\dfrac{3}{4}x^2$.
   b) Montrer que cette équation équivaut à $\\dfrac{1}{4}x(x - 16) = 0$.
   c) Résoudre cette équation et conclure.
3. On veut maintenant un parterre de $21$ m².
   a) Vérifier que $x^2 - 4x - 21 = (x - 7)(x + 3)$.
   b) En déduire la longueur du côté de la salle.`,
      solution: `**1.** Le parterre mesure $x$ m (longueur du mur) sur $x - 4$ m (on retire la largeur de l'estrade). Son aire est donc $x(x - 4)$ m².
Pour $x = 10$ : $10 \\times 6 = 60$ m².

**2. a)** L'aire de la salle est $x^2$. On veut $x(x - 4) = \\dfrac{3}{4}x^2$, soit $x^2 - 4x = \\dfrac{3}{4}x^2$.

**b)** On soustrait $\\dfrac{3}{4}x^2$ : $\\dfrac{1}{4}x^2 - 4x = 0$. On factorise par $\\dfrac{1}{4}x$ : $\\dfrac{1}{4}x(x - 16) = 0$ (car $\\dfrac{1}{4}x \\times 16 = 4x$).

**c)** Un produit est nul si et seulement si l'un de ses facteurs est nul : $x = 0$ ou $x = 16$. Comme $x > 4$, on retient $x = 16$.
Vérification : parterre $16 \\times 12 = 192$ m² et $\\dfrac{3}{4} \\times 256 = 192$ m². La salle doit mesurer $16$ m de côté.

**3. a)** $(x - 7)(x + 3) = x^2 + 3x - 7x - 21 = x^2 - 4x - 21$.

**b)** $x(x - 4) = 21$ équivaut à $x^2 - 4x - 21 = 0$, soit $(x - 7)(x + 3) = 0$. D'où $x = 7$ ou $x = -3$. Une longueur est positive (et ici $x > 4$), donc $x = 7$.
Vérification : $7 \\times 3 = 21$ m². La salle mesure $7$ m de côté.`
    },
    {
      id: "N4-ds-12",
      title: "Deux cyclistes sur la même route",
      difficulty: 4,
      points: 6,
      statement: `Les villes A et B sont reliées par une route de $70$ km.
- Anna part de A à $9$ h et roule vers B à la vitesse constante de $20$ km/h.
- Bilal part de B à $9$ h $30$ et roule vers A à la vitesse constante de $30$ km/h.

On note $t$ le temps écoulé, en heures, depuis $9$ h (avec $t \\geq 0{,}5$).

1. Exprimer en fonction de $t$ la distance parcourue par Anna, puis celle parcourue par Bilal.
2. a) Justifier que les deux cyclistes se croisent lorsque $20t + 30(t - 0{,}5) = 70$.
   b) Résoudre cette équation. À quelle heure se croisent-ils, et à quelle distance de A ?
3. À quelle heure, avant de se croiser, ne sont-ils plus qu'à $20$ km l'un de l'autre ?
4. Bilal voudrait que la rencontre ait lieu exactement à mi-chemin, sans changer son heure de départ. À quelle vitesse devrait-il rouler ?`,
      solution: `**1.** Anna roule depuis $t$ heures : elle a parcouru $20t$ km. Bilal roule depuis $t - 0{,}5$ heure : il a parcouru $30(t - 0{,}5)$ km.

**2. a)** Ils se croisent lorsque, ensemble, ils ont parcouru toute la route, soit $70$ km : $20t + 30(t - 0{,}5) = 70$.

**b)** $20t + 30t - 15 = 70$, soit $50t = 85$, donc $t = 1{,}7$ h.
$0{,}7$ h $= 0{,}7 \\times 60 = 42$ min : ils se croisent à **10 h 42**.
Anna a alors parcouru $20 \\times 1{,}7 = 34$ km : la rencontre a lieu à $34$ km de A.
Vérification : Bilal a parcouru $30 \\times 1{,}2 = 36$ km et $34 + 36 = 70$.

**3.** Avant la rencontre, la distance qui les sépare est $70 - (20t + 30(t - 0{,}5)) = 85 - 50t$.
$85 - 50t = 20$ donne $50t = 65$, soit $t = 1{,}3$ h $= 1$ h $18$ min. Ils sont à $20$ km l'un de l'autre à **10 h 18** (on a bien $t \\geq 0{,}5$).

**4.** Le milieu de la route est à $35$ km de A. Anna l'atteint au bout de $\\dfrac{35}{20} = 1{,}75$ h, soit à $10$ h $45$.
Bilal doit donc parcourir $35$ km entre $9$ h $30$ et $10$ h $45$, c'est-à-dire en $1{,}25$ h. Sa vitesse doit être $\\dfrac{35}{1{,}25} = 28$ km/h.`
    }
  ],
  "N5": [
    {
      id: "N5-ds-01",
      title: "Critères de divisibilité",
      difficulty: 1,
      points: 4,
      statement: `1. Le nombre $2\\,340$ est-il divisible par $2$ ? par $3$ ? par $4$ ? par $5$ ? par $9$ ? par $10$ ? Justifier chaque réponse à l'aide d'un critère.
2. On considère le nombre à trois chiffres $\\overline{5a7}$ (chiffre des centaines $5$, des dizaines $a$, des unités $7$). Trouver le chiffre $a$ pour que ce nombre soit divisible par $9$.
3. Le nombre $91$ est-il premier ? Justifier.`,
      solution: `**1.**
- Son chiffre des unités est $0$ : il est divisible par $2$, par $5$ et par $10$.
- La somme de ses chiffres est $2 + 3 + 4 + 0 = 9$, multiple de $3$ et de $9$ : il est divisible par $3$ et par $9$.
- Le nombre formé par ses deux derniers chiffres, $40$, est divisible par $4$ : $2\\,340$ est divisible par $4$ ($2\\,340 = 4 \\times 585$).

**2.** La somme des chiffres est $5 + a + 7 = 12 + a$. Elle doit être un multiple de $9$ avec $0 \\leqslant a \\leqslant 9$ : $12 + a = 18$, d'où $a = 6$. Le nombre est $567 = 9 \\times 63$.

**3.** $91 = 7 \\times 13$ : $91$ admet d'autres diviseurs que $1$ et lui-même, il **n'est pas premier**.`
    },
    {
      id: "N5-ds-02",
      title: "Décomposer pour simplifier",
      difficulty: 1,
      points: 4,
      statement: `1. Décomposer $180$ et $252$ en produits de facteurs premiers.
2. En déduire la fraction irréductible égale à $\\dfrac{180}{252}$.
3. Citer trois diviseurs de $252$ supérieurs à $20$.`,
      solution: `**1.** Par divisions successives par les nombres premiers :
$180 = 2 \\times 90 = 2 \\times 2 \\times 45 = 2 \\times 2 \\times 3 \\times 15 = 2^2 \\times 3^2 \\times 5$.
$252 = 2 \\times 126 = 2 \\times 2 \\times 63 = 2 \\times 2 \\times 3 \\times 21 = 2^2 \\times 3^2 \\times 7$.

**2.** On simplifie par les facteurs communs $2^2 \\times 3^2 = 36$ :
$$\\frac{180}{252} = \\frac{2^2 \\times 3^2 \\times 5}{2^2 \\times 3^2 \\times 7} = \\frac{5}{7}.$$
$5$ et $7$ sont premiers entre eux : la fraction est irréductible.

**3.** En regroupant des facteurs de $252 = 2^2 \\times 3^2 \\times 7$ : $3 \\times 7 = 21$, $2^2 \\times 7 = 28$, $2^2 \\times 3^2 = 36$ (ou encore $42$, $63$, $84$, $126$, $252$).`
    },
    {
      id: "N5-ds-03",
      title: "Reconnaître un nombre premier",
      difficulty: 2,
      points: 5,
      statement: `1. Rappeler la définition d'un nombre premier, puis citer tous les nombres premiers inférieurs à $30$.
2. Le nombre $221$ est-il premier ? (On pourra tester la division par $13$.)
3. Montrer que $127$ est un nombre premier. On admettra qu'il suffit de tester les divisions par les nombres premiers dont le carré est inférieur ou égal à $127$.
4. Peut-on écrire $51$ comme la somme de deux nombres premiers ? Justifier.`,
      solution: `**1.** Un nombre premier est un entier naturel qui admet exactement deux diviseurs : $1$ et lui-même. Nombres premiers inférieurs à $30$ : $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$.

**2.** $221 = 13 \\times 17$ : $221$ n'est pas premier.

**3.** $11^2 = 121 \\leqslant 127$ et $13^2 = 169 > 127$ : on teste $2, 3, 5, 7, 11$.
- $127$ est impair : pas divisible par $2$ ;
- $1 + 2 + 7 = 10$ : pas divisible par $3$ ;
- il ne se termine ni par $0$ ni par $5$ : pas divisible par $5$ ;
- $127 = 7 \\times 18 + 1$ et $127 = 11 \\times 11 + 6$ : pas divisible par $7$ ni par $11$.
Donc $127$ est premier.

**4.** $51$ est impair. La somme de deux nombres impairs est paire, donc l'un des deux nombres premiers doit être pair : c'est $2$ (le seul nombre premier pair). L'autre serait $51 - 2 = 49 = 7^2$, qui n'est pas premier. C'est donc **impossible**.`
    },
    {
      id: "N5-ds-04",
      title: "Le carrelage de la salle",
      difficulty: 2,
      points: 5,
      statement: `Le sol d'une salle rectangulaire mesure $360$ cm sur $264$ cm. On veut le recouvrir entièrement avec des carreaux carrés identiques, sans découpe, dont le côté est un nombre entier de centimètres, le plus grand possible.

1. Peut-on utiliser des carreaux de $30$ cm de côté ? Justifier.
2. Décomposer $360$ et $264$ en produits de facteurs premiers.
3. Déterminer le côté des carreaux.
4. Combien de carreaux faudra-t-il ?`,
      solution: `**1.** $360 = 30 \\times 12$, mais $264 \\div 30 = 8{,}8$ n'est pas entier : des carreaux de $30$ cm ne conviennent pas (il faudrait en découper).

**2.** $360 = 2^3 \\times 3^2 \\times 5$ et $264 = 2^3 \\times 3 \\times 11$.

**3.** Le côté doit diviser $360$ et $264$ ; on cherche le plus grand diviseur commun. Facteurs communs : $2^3 \\times 3 = 24$. Les carreaux ont $24$ cm de côté.

**4.** $360 \\div 24 = 15$ carreaux dans la longueur et $264 \\div 24 = 11$ dans la largeur, soit $15 \\times 11 = 165$ carreaux.`
    },
    {
      id: "N5-ds-05",
      title: "Deux lignes de bus",
      difficulty: 3,
      points: 5,
      statement: `À un arrêt, les bus de la ligne A passent toutes les $18$ minutes et ceux de la ligne B toutes les $24$ minutes. À $7$ h $00$, deux bus des lignes A et B partent ensemble de cet arrêt.

1. Écrire la liste des horaires de passage de la ligne A et de la ligne B entre $7$ h $00$ et $8$ h $30$.
2. Décomposer $18$ et $24$ en produits de facteurs premiers. En déduire le plus petit multiple commun non nul de $18$ et $24$.
3. À quelle heure les deux bus repartiront-ils de nouveau ensemble pour la première fois ?
4. Combien de fois, départ de $7$ h $00$ compris, les deux bus partent-ils ensemble entre $7$ h $00$ et $12$ h $00$ ?`,
      solution: `**1.** Ligne A : $7$ h $00$, $7$ h $18$, $7$ h $36$, $7$ h $54$, $8$ h $12$, $8$ h $30$. Ligne B : $7$ h $00$, $7$ h $24$, $7$ h $48$, $8$ h $12$.

**2.** $18 = 2 \\times 3^2$ et $24 = 2^3 \\times 3$. Un multiple commun doit contenir $2^3$ et $3^2$ : le plus petit est $2^3 \\times 3^2 = 72$.

**3.** Les départs simultanés ont lieu toutes les $72$ minutes $= 1$ h $12$ min. Premier départ commun suivant : $8$ h $12$ (ce qu'on observe dans les listes).

**4.** Départs communs : $7$ h $00$, $8$ h $12$, $9$ h $24$, $10$ h $36$, $11$ h $48$ ; le suivant serait à $13$ h $00$. Il y a donc $5$ départs simultanés.`
    },
    {
      id: "N5-ds-06",
      title: "Simplifier une grande fraction",
      difficulty: 3,
      points: 5,
      statement: `1. Décomposer $1\\,470$ et $2\\,310$ en produits de facteurs premiers.
2. En déduire la forme irréductible de $\\dfrac{1\\,470}{2\\,310}$.
3. a) Le nombre $1\\,470$ est-il le carré d'un nombre entier ? Justifier à l'aide de sa décomposition.
   b) Justifier que $1\\,470 \\times 30$ est le carré d'un entier, que l'on précisera.`,
      solution: `**1.** $1\\,470 = 2 \\times 735 = 2 \\times 3 \\times 245 = 2 \\times 3 \\times 5 \\times 49 = 2 \\times 3 \\times 5 \\times 7^2$.
$2\\,310 = 2 \\times 1\\,155 = 2 \\times 3 \\times 385 = 2 \\times 3 \\times 5 \\times 77 = 2 \\times 3 \\times 5 \\times 7 \\times 11$.

**2.** Facteurs communs : $2 \\times 3 \\times 5 \\times 7 = 210$.
$$\\frac{1\\,470}{2\\,310} = \\frac{210 \\times 7}{210 \\times 11} = \\frac{7}{11}.$$

**3. a)** Dans la décomposition d'un carré, chaque facteur premier apparaît avec un exposant pair. Ici $2$, $3$ et $5$ ont l'exposant $1$ : $1\\,470$ n'est pas un carré (d'ailleurs $38^2 = 1\\,444$ et $39^2 = 1\\,521$).

**b)** $1\\,470 \\times 30 = 2 \\times 3 \\times 5 \\times 7^2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3^2 \\times 5^2 \\times 7^2 = (2 \\times 3 \\times 5 \\times 7)^2 = 210^2$. C'est le carré de $210$ (et $210^2 = 44\\,100$).`
    },
    {
      id: "N5-ds-07",
      title: "La collection de timbres",
      difficulty: 4,
      points: 6,
      statement: `Un collectionneur possède entre $300$ et $400$ timbres. S'il les range par paquets de $12$, il en reste $5$. S'il les range par paquets de $15$, il en reste encore $5$, et de même par paquets de $18$.

1. On note $N$ le nombre de timbres. Justifier que $N - 5$ est un multiple commun de $12$, $15$ et $18$.
2. Décomposer $12$, $15$ et $18$ en produits de facteurs premiers, puis déterminer le plus petit multiple commun non nul de ces trois nombres.
3. En déduire le nombre de timbres.
4. Vérifier le résultat avec des divisions euclidiennes.`,
      solution: `**1.** Par paquets de $12$, il reste $5$ timbres : $N = 12q + 5$, donc $N - 5 = 12q$ est un multiple de $12$. De même, $N - 5$ est un multiple de $15$ et de $18$.

**2.** $12 = 2^2 \\times 3$ ; $15 = 3 \\times 5$ ; $18 = 2 \\times 3^2$. Un multiple commun doit contenir $2^2$, $3^2$ et $5$ : le plus petit est $2^2 \\times 3^2 \\times 5 = 180$.

**3.** Les multiples communs de $12$, $15$ et $18$ sont les multiples de $180$ : $0, 180, 360, 540, \\ldots$ Comme $300 < N < 400$, on a $295 < N - 5 < 395$, donc $N - 5 = 360$ et $N = 365$. Le collectionneur a $365$ timbres.

**4.** $365 = 12 \\times 30 + 5$ ; $365 = 15 \\times 24 + 5$ ; $365 = 18 \\times 20 + 5$. Le reste vaut bien $5$ à chaque fois (et $5$ est inférieur à chaque diviseur).`
    },
    {
      id: "N5-ds-08",
      title: "Sommes d'entiers consécutifs",
      difficulty: 4,
      points: 5,
      statement: `1. Calculer $13 + 14 + 15$ et $40 + 41 + 42$. Que remarque-t-on ?
2. Soit $n$ un entier. Démontrer que la somme de trois entiers consécutifs $n$, $n + 1$, $n + 2$ est toujours un multiple de $3$.
3. Le nombre $2\\,027$ peut-il s'écrire comme la somme de trois entiers consécutifs ? Et le nombre $2\\,025$ ? Si oui, donner ces entiers.
4. Démontrer que la somme de quatre entiers consécutifs n'est jamais un multiple de $4$.`,
      solution: `**1.** $13 + 14 + 15 = 42 = 3 \\times 14$ et $40 + 41 + 42 = 123 = 3 \\times 41$ : ce sont des multiples de $3$ (égaux à $3$ fois l'entier du milieu).

**2.** $n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)$. Comme $n + 1$ est entier, cette somme est un multiple de $3$.

**3.** La somme des chiffres de $2\\,027$ est $11$, qui n'est pas un multiple de $3$ : $2\\,027$ n'est pas divisible par $3$, donc ce n'est **pas** possible.
$2\\,025 = 3 \\times 675$ : on veut $3(n + 1) = 2\\,025$, soit $n + 1 = 675$. Donc $2\\,025 = 674 + 675 + 676$.

**4.** $n + (n + 1) + (n + 2) + (n + 3) = 4n + 6 = 4(n + 1) + 2$. Dans la division euclidienne par $4$, le reste est $2$, jamais $0$ : la somme n'est jamais un multiple de $4$.`
    },
    {
      id: "N5-ds-09",
      title: "Diviseurs et carré parfait",
      difficulty: 1,
      points: 4,
      statement: `1. Donner la liste de tous les diviseurs de $36$.
2. Décomposer $360$ en produit de facteurs premiers.
3. Un nombre entier est un carré parfait s'il est le carré d'un nombre entier. Dans la décomposition en facteurs premiers d'un carré parfait, chaque facteur premier apparaît un nombre pair de fois.
   a) Le nombre $360$ est-il un carré parfait ? Justifier.
   b) Par quel plus petit entier faut-il multiplier $360$ pour obtenir un carré parfait ? Quel est ce carré ?`,
      solution: `**1.** On cherche les produits égaux à $36$ : $1 \\times 36$, $2 \\times 18$, $3 \\times 12$, $4 \\times 9$, $6 \\times 6$.
Les diviseurs de $36$ sont : $1$, $2$, $3$, $4$, $6$, $9$, $12$, $18$, $36$.

**2.** $360 = 2 \\times 180 = 2 \\times 2 \\times 90 = 2 \\times 2 \\times 2 \\times 45 = 2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 5$.
Donc $360 = 2^3 \\times 3^2 \\times 5$.

**3. a)** Le facteur $2$ apparaît $3$ fois et le facteur $5$ une seule fois : ce sont des nombres impairs de fois. $360$ n'est pas un carré parfait (d'ailleurs $18^2 = 324$ et $19^2 = 361$).

**b)** Il faut rendre pairs les exposants de $2$ et de $5$ : on multiplie par $2 \\times 5 = 10$.
$360 \\times 10 = 3\\,600 = 2^4 \\times 3^2 \\times 5^2 = (2^2 \\times 3 \\times 5)^2 = 60^2$.
Le plus petit entier est $10$ et le carré obtenu est $3\\,600 = 60^2$.`
    },
    {
      id: "N5-ds-10",
      title: "Ranger les chaises de la salle des fêtes",
      difficulty: 2,
      points: 5,
      statement: `Pour une cérémonie, on dispose de $120$ chaises que l'on veut ranger en rangées comportant toutes le même nombre de chaises, sans qu'il en reste.

1. Décomposer $120$ en produit de facteurs premiers.
2. Donner la liste de tous les diviseurs de $120$.
3. L'organisatrice veut entre $5$ et $15$ rangées. Donner toutes les dispositions possibles (nombre de rangées et nombre de chaises par rangée).
4. Au dernier moment, on ajoute une chaise : il y en a maintenant $121$. Quelles dispositions en rangées égales sont encore possibles ? Justifier.`,
      solution: `**1.** $120 = 2 \\times 60 = 2 \\times 2 \\times 30 = 2 \\times 2 \\times 2 \\times 15 = 2^3 \\times 3 \\times 5$.

**2.** On associe les diviseurs deux à deux : $1 \\times 120$, $2 \\times 60$, $3 \\times 40$, $4 \\times 30$, $5 \\times 24$, $6 \\times 20$, $8 \\times 15$, $10 \\times 12$.
Les diviseurs de $120$ sont : $1$, $2$, $3$, $4$, $5$, $6$, $8$, $10$, $12$, $15$, $20$, $24$, $30$, $40$, $60$, $120$.

**3.** Le nombre de rangées doit être un diviseur de $120$ compris entre $5$ et $15$ : $5$, $6$, $8$, $10$, $12$ ou $15$.
- $5$ rangées de $24$ chaises ;
- $6$ rangées de $20$ chaises ;
- $8$ rangées de $15$ chaises ;
- $10$ rangées de $12$ chaises ;
- $12$ rangées de $10$ chaises ;
- $15$ rangées de $8$ chaises.

**4.** $121 = 11 \\times 11 = 11^2$. Ses seuls diviseurs sont $1$, $11$ et $121$.
Les seules dispositions possibles sont : une seule rangée de $121$ chaises, $11$ rangées de $11$ chaises, ou $121$ rangées d'une chaise. En pratique, il faut $11$ rangées de $11$ chaises.`
    },
    {
      id: "N5-ds-11",
      title: "Les œufs de la fermière",
      difficulty: 3,
      points: 5,
      statement: `Une fermière compte ses œufs, dont le nombre est inférieur à $400$.
- Si elle les range par $2$, par $3$, par $4$, par $5$ ou par $6$, il en reste toujours exactement $1$.
- Si elle les range par $7$, il n'en reste aucun.

On note $n$ le nombre d'œufs.

1. Vérifier que le nombre $61$ vérifie la première condition. Vérifie-t-il la seconde ?
2. a) Expliquer pourquoi $n - 1$ est un multiple commun de $2$, $3$, $4$, $5$ et $6$.
   b) En utilisant la décomposition en facteurs premiers de ces nombres, justifier que $n - 1$ est un multiple de $60$.
3. Donner la liste des valeurs possibles de $n$ inférieures à $400$ qui vérifient la première condition.
4. En déduire le nombre d'œufs de la fermière.`,
      solution: `**1.** $61 = 2 \\times 30 + 1 = 3 \\times 20 + 1 = 4 \\times 15 + 1 = 5 \\times 12 + 1 = 6 \\times 10 + 1$ : il reste toujours $1$.
Mais $61 = 7 \\times 8 + 5$ : il reste $5$ quand on range par $7$. $61$ ne vérifie pas la seconde condition.

**2. a)** S'il reste $1$ œuf quand on range par $2$, alors $n - 1$ œufs se rangent exactement par $2$ : $n - 1$ est un multiple de $2$. De même pour $3$, $4$, $5$ et $6$.

**b)** $2 = 2$ ; $3 = 3$ ; $4 = 2^2$ ; $5 = 5$ ; $6 = 2 \\times 3$.
Un multiple de $4$, de $3$ et de $5$ contient dans sa décomposition au moins $2^2$, $3$ et $5$ ; c'est donc un multiple de $2^2 \\times 3 \\times 5 = 60$. (Les conditions « multiple de $2$ » et « multiple de $6$ » sont alors automatiquement vérifiées.)

**3.** $n - 1$ vaut $60$, $120$, $180$, $240$, $300$ ou $360$, donc $n$ vaut $61$, $121$, $181$, $241$, $301$ ou $361$.

**4.** On teste la division par $7$ :
$121 = 7 \\times 17 + 2$ ; $181 = 7 \\times 25 + 6$ ; $241 = 7 \\times 34 + 3$ ; $301 = 7 \\times 43$ ; $361 = 7 \\times 51 + 4$.
Seul $301$ est un multiple de $7$. La fermière a **301 œufs**.`
    },
    {
      id: "N5-ds-12",
      title: "Les nombres parfaits",
      difficulty: 4,
      points: 6,
      statement: `On appelle **diviseurs propres** d'un entier $n$ ses diviseurs autres que $n$ lui-même. Un nombre est dit **parfait** s'il est égal à la somme de ses diviseurs propres. Par exemple, $6$ est parfait car ses diviseurs propres sont $1$, $2$, $3$ et $1 + 2 + 3 = 6$.

1. Le nombre $12$ est-il parfait ? Justifier.
2. Démontrer que $28$ est un nombre parfait.
3. a) Vérifier que $496 = 2^4 \\times 31$, sachant que $31$ est un nombre premier.
   b) En déduire la liste des diviseurs de $496$, puis démontrer que $496$ est parfait.
4. Expliquer pourquoi un nombre premier n'est jamais parfait.
5. On remarque que $6 = 2 \\times 3$, $28 = 2^2 \\times 7$ et $496 = 2^4 \\times 31$. Quel lien y a-t-il, dans chaque cas, entre la puissance de $2$ et le facteur premier ?`,
      solution: `**1.** Les diviseurs propres de $12$ sont $1$, $2$, $3$, $4$, $6$ et $1 + 2 + 3 + 4 + 6 = 16 \\neq 12$. $12$ n'est pas parfait.

**2.** $28 = 1 \\times 28 = 2 \\times 14 = 4 \\times 7$ : ses diviseurs propres sont $1$, $2$, $4$, $7$, $14$.
$1 + 2 + 4 + 7 + 14 = 28$ : $28$ est parfait.

**3. a)** $2^4 \\times 31 = 16 \\times 31 = 496$.

**b)** Comme $31$ est premier, les diviseurs de $496$ sont les produits d'un diviseur de $16$ par $1$ ou par $31$ :
$1$, $2$, $4$, $8$, $16$, $31$, $62$, $124$, $248$, $496$.
Somme des diviseurs propres : $(1 + 2 + 4 + 8 + 16) + (31 + 62 + 124 + 248) = 31 + 465 = 496$. Donc $496$ est parfait.

**4.** Un nombre premier $p$ a exactement deux diviseurs, $1$ et $p$. Son seul diviseur propre est $1$, et $1 \\neq p$ car $p \\geq 2$. Un nombre premier n'est donc jamais parfait.

**5.** Dans chaque cas, le facteur premier est égal au double de la puissance de $2$, moins $1$ :
$3 = 2 \\times 2 - 1$ ; $7 = 2 \\times 4 - 1$ ; $31 = 2 \\times 16 - 1$.
Autrement dit, ces nombres s'écrivent $2^k \\times (2^{k+1} - 1)$ avec $2^{k+1} - 1$ premier.`
    }
  ],
  "G0": [
    {
      id: "G0-ds-01",
      title: "Calculer une longueur",
      difficulty: 1,
      points: 4,
      statement: `1. Le triangle $ABC$ est rectangle en $A$, avec $AB = 6$ cm et $AC = 8$ cm. Calculer la longueur $BC$.
2. Le triangle $DEF$ est rectangle en $E$, avec $DF = 13$ cm et $DE = 5$ cm. Calculer la longueur $EF$.
3. Le triangle $GHI$ est rectangle en $G$, avec $GH = GI = 4$ cm. Calculer $HI$ ; donner la valeur exacte puis l'arrondi au millimètre.`,
      solution: `**1.** Le triangle $ABC$ est rectangle en $A$, son hypoténuse est $[BC]$. D'après le théorème de Pythagore :
$$BC^2 = AB^2 + AC^2 = 6^2 + 8^2 = 36 + 64 = 100,$$
donc $BC = \\sqrt{100} = 10$ cm.

**2.** Le triangle $DEF$ est rectangle en $E$, son hypoténuse est $[DF]$. D'après le théorème de Pythagore, $DF^2 = DE^2 + EF^2$, donc
$$EF^2 = 13^2 - 5^2 = 169 - 25 = 144, \\quad EF = \\sqrt{144} = 12 \\text{ cm}.$$

**3.** Le triangle $GHI$ est rectangle en $G$ ; d'après le théorème de Pythagore, $HI^2 = 4^2 + 4^2 = 32$, donc $HI = \\sqrt{32}$ cm $\\approx 5{,}7$ cm.`
    },
    {
      id: "G0-ds-02",
      title: "Rectangle ou pas ?",
      difficulty: 1,
      points: 4,
      statement: `1. Le triangle $RST$ est tel que $RS = 9$ cm, $ST = 12$ cm et $RT = 15$ cm. Est-il rectangle ? Justifier.
2. Le triangle $KLM$ est tel que $KL = 7$ cm, $LM = 9$ cm et $KM = 11$ cm. Est-il rectangle ? Justifier.
3. Paul affirme : « Un triangle de côtés $5$ cm, $5$ cm et $7$ cm est rectangle. » A-t-il raison ?`,
      solution: `**1.** Le plus grand côté est $[RT]$. $RT^2 = 15^2 = 225$ et $RS^2 + ST^2 = 81 + 144 = 225$. Comme $RT^2 = RS^2 + ST^2$, d'après la **réciproque** du théorème de Pythagore, le triangle $RST$ est rectangle en $S$.

**2.** Le plus grand côté est $[KM]$. $KM^2 = 121$ et $KL^2 + LM^2 = 49 + 81 = 130$. Comme $KM^2 \\neq KL^2 + LM^2$, d'après la **contraposée** du théorème de Pythagore, le triangle $KLM$ n'est pas rectangle.

**3.** Le plus grand côté mesure $7$ cm : $7^2 = 49$ et $5^2 + 5^2 = 50$. Comme $49 \\neq 50$, d'après la contraposée du théorème de Pythagore, ce triangle n'est pas rectangle : Paul a tort (il est « presque » rectangle, mais pas exactement).`
    },
    {
      id: "G0-ds-03",
      title: "Le poteau haubané",
      difficulty: 2,
      points: 5,
      statement: `Un poteau vertical de $6$ m de haut est maintenu par trois câbles (haubans) identiques. Chaque câble est fixé au sommet du poteau et ancré au sol à $2{,}5$ m du pied du poteau. Le sol est horizontal.

1. Faire un schéma de la situation pour un câble, en nommant $P$ le pied du poteau, $S$ son sommet et $A$ le point d'ancrage.
2. Calculer la longueur d'un câble.
3. Pour les nœuds de fixation, il faut prévoir $30$ cm de câble supplémentaire à chaque câble. Le câble est vendu $4{,}20$ € le mètre. Calculer le coût total des trois câbles.`,
      solution: `**1.** Le triangle $SPA$ a un angle droit en $P$ (poteau vertical, sol horizontal), avec $SP = 6$ m et $PA = 2{,}5$ m ; le câble est l'hypoténuse $[SA]$.

**2.** Le triangle $SPA$ est rectangle en $P$. D'après le théorème de Pythagore :
$$SA^2 = SP^2 + PA^2 = 6^2 + 2{,}5^2 = 36 + 6{,}25 = 42{,}25,$$
donc $SA = \\sqrt{42{,}25} = 6{,}5$ m.

**3.** Longueur d'un câble avec les nœuds : $6{,}5 + 0{,}3 = 6{,}8$ m. Pour trois câbles : $3 \\times 6{,}8 = 20{,}4$ m.
Coût : $20{,}4 \\times 4{,}20 = 85{,}68$ €.`
    },
    {
      id: "G0-ds-04",
      title: "La taille d'un écran",
      difficulty: 2,
      points: 5,
      statement: `La taille d'un écran de télévision est donnée par la longueur de sa diagonale, exprimée en pouces ($1$ pouce $= 2{,}54$ cm). L'écran est un rectangle.

Un téléviseur a un écran de $88{,}6$ cm de large et $49{,}8$ cm de haut.

1. Calculer la longueur de la diagonale de l'écran, arrondie au millimètre.
2. Le vendeur annonce un écran « 40 pouces ». Cette indication est-elle correcte ?
3. Le rapport largeur/hauteur d'un écran est souvent « $16/9$ ». Calculer $\\dfrac{88{,}6}{49{,}8}$ et $\\dfrac{16}{9}$ arrondis au centième : cet écran est-il au format $16/9$ ?`,
      solution: `**1.** Un rectangle a quatre angles droits : la diagonale est l'hypoténuse d'un triangle rectangle dont les côtés de l'angle droit mesurent $88{,}6$ cm et $49{,}8$ cm. D'après le théorème de Pythagore :
$$d^2 = 88{,}6^2 + 49{,}8^2 = 7\\,849{,}96 + 2\\,480{,}04 = 10\\,330,$$
donc $d = \\sqrt{10\\,330} \\approx 101{,}6$ cm.

**2.** $101{,}6 \\div 2{,}54 \\approx 40{,}0$ pouces. L'indication « 40 pouces » est correcte.

**3.** $\\dfrac{88{,}6}{49{,}8} \\approx 1{,}78$ et $\\dfrac{16}{9} \\approx 1{,}78$ : l'écran est bien (à l'arrondi près) au format $16/9$.`
    },
    {
      id: "G0-ds-05",
      title: "Un quadrilatère en deux triangles",
      difficulty: 3,
      points: 5,
      statement: `Le quadrilatère $ABCD$ est formé de deux triangles $ABC$ et $ACD$ placés de part et d'autre de la diagonale $[AC]$. On sait que :
- $ABC$ est rectangle en $B$, avec $AB = 4{,}5$ cm et $BC = 6$ cm ;
- $CD = 10$ cm et $AD = 12{,}5$ cm.

1. Calculer la longueur $AC$.
2. Démontrer que le triangle $ACD$ est rectangle. Préciser en quel sommet.
3. Calculer le périmètre et l'aire du quadrilatère $ABCD$.`,
      solution: `**1.** Le triangle $ABC$ est rectangle en $B$. D'après le théorème de Pythagore :
$$AC^2 = AB^2 + BC^2 = 20{,}25 + 36 = 56{,}25, \\quad AC = \\sqrt{56{,}25} = 7{,}5 \\text{ cm}.$$

**2.** Dans le triangle $ACD$, le plus grand côté est $[AD]$ : $AD^2 = 12{,}5^2 = 156{,}25$ et $AC^2 + CD^2 = 56{,}25 + 100 = 156{,}25$. Comme $AD^2 = AC^2 + CD^2$, d'après la réciproque du théorème de Pythagore, le triangle $ACD$ est rectangle en $C$.

**3.** Périmètre : $AB + BC + CD + DA = 4{,}5 + 6 + 10 + 12{,}5 = 33$ cm.
Aire : $\\mathcal{A}_{ABC} + \\mathcal{A}_{ACD} = \\dfrac{4{,}5 \\times 6}{2} + \\dfrac{7{,}5 \\times 10}{2} = 13{,}5 + 37{,}5 = 51$ cm².`
    },
    {
      id: "G0-ds-06",
      title: "La baguette dans le carton",
      difficulty: 3,
      points: 5,
      statement: `Un carton a la forme d'un pavé droit $ABCDEFGH$ de dimensions intérieures $AB = 40$ cm, $BC = 30$ cm et $AE = 25$ cm ($ABCD$ est le fond, $EFGH$ le couvercle, $E$ au-dessus de $A$ et $G$ au-dessus de $C$).

1. Calculer la longueur $AC$ de la diagonale du fond.
2. Justifier que le triangle $ACG$ est rectangle en $C$, puis calculer $AG$ au millimètre près.
3. Peut-on ranger dans ce carton une baguette rigide de $65$ cm ? Justifier.
4. Quelle hauteur minimale (au millimètre près) devrait avoir un carton de même fond pour contenir une baguette de $60$ cm ?`,
      solution: `**1.** Le fond $ABCD$ est un rectangle, donc le triangle $ABC$ est rectangle en $B$. D'après le théorème de Pythagore : $AC^2 = 40^2 + 30^2 = 1\\,600 + 900 = 2\\,500$, donc $AC = 50$ cm.

**2.** L'arête $[CG]$ est perpendiculaire au fond, donc à toute droite du fond passant par $C$, en particulier à $(AC)$ : le triangle $ACG$ est rectangle en $C$. D'après le théorème de Pythagore :
$$AG^2 = AC^2 + CG^2 = 2\\,500 + 625 = 3\\,125, \\quad AG = \\sqrt{3\\,125} \\approx 55{,}9 \\text{ cm}.$$

**3.** La plus grande longueur que l'on peut placer dans le carton est la diagonale $AG \\approx 55{,}9$ cm $< 65$ cm : la baguette de $65$ cm ne rentre pas.

**4.** Il faut $AG = 60$ cm avec $AC = 50$ cm : $CG^2 = 60^2 - 50^2 = 3\\,600 - 2\\,500 = 1\\,100$, donc $CG = \\sqrt{1\\,100} \\approx 33{,}2$ cm. Le carton doit mesurer au moins $33{,}2$ cm de haut.`
    },
    {
      id: "G0-ds-07",
      title: "Un triangle rectangle à trouver",
      difficulty: 4,
      points: 6,
      statement: `On cherche un triangle rectangle dont les côtés de l'angle droit mesurent $x$ et $x + 7$ (en cm) et dont l'hypoténuse mesure $x + 8$ (en cm), avec $x > 0$.

1. Le nombre $x = 3$ convient-il ? Justifier.
2. Montrer que $x$ doit vérifier l'équation $x^2 + (x + 7)^2 = (x + 8)^2$, puis que cette équation équivaut à $x^2 - 2x - 15 = 0$.
3. Vérifier que $x^2 - 2x - 15 = (x - 1)^2 - 16$, puis factoriser cette expression.
4. Résoudre l'équation et donner les dimensions du triangle. Vérifier avec la réciproque du théorème de Pythagore.`,
      solution: `**1.** Pour $x = 3$ : côtés $3$, $10$ et $11$. $11^2 = 121$ et $3^2 + 10^2 = 109$ ; $121 \\neq 109$, donc d'après la contraposée du théorème de Pythagore ce triangle n'est pas rectangle : $3$ ne convient pas.

**2.** Si le triangle est rectangle, d'hypoténuse $x + 8$ (le plus grand côté), le théorème de Pythagore donne $x^2 + (x + 7)^2 = (x + 8)^2$. On développe :
$$x^2 + x^2 + 14x + 49 = x^2 + 16x + 64 \\iff x^2 - 2x - 15 = 0.$$

**3.** $(x - 1)^2 - 16 = x^2 - 2x + 1 - 16 = x^2 - 2x - 15$. Puis, avec $a^2 - b^2 = (a - b)(a + b)$ :
$$(x - 1)^2 - 4^2 = (x - 1 - 4)(x - 1 + 4) = (x - 5)(x + 3).$$

**4.** $(x - 5)(x + 3) = 0$ équivaut à $x = 5$ ou $x = -3$. Une longueur est positive, donc $x = 5$ : le triangle a pour côtés $5$ cm, $12$ cm et $13$ cm.
Vérification : $13^2 = 169$ et $5^2 + 12^2 = 25 + 144 = 169$ ; d'après la réciproque du théorème de Pythagore, il est bien rectangle.`
    },
    {
      id: "G0-ds-08",
      title: "La spirale de Théodore",
      difficulty: 4,
      points: 5,
      statement: `On construit une spirale à partir d'un point $O$ :
- $OA_1A_2$ est un triangle rectangle en $A_1$ avec $OA_1 = A_1A_2 = 1$ cm ;
- $OA_2A_3$ est un triangle rectangle en $A_2$ avec $A_2A_3 = 1$ cm ;
- $OA_3A_4$ est un triangle rectangle en $A_3$ avec $A_3A_4 = 1$ cm ; et ainsi de suite : chaque nouveau triangle est rectangle en son sommet extérieur, de côté extérieur $1$ cm.

1. Calculer les valeurs exactes de $OA_2$, $OA_3$ et $OA_4$.
2. Conjecturer la valeur exacte de $OA_n$ pour un entier $n \\geqslant 1$.
3. On suppose que $OA_n = \\sqrt{n}$. Démontrer que $OA_{n+1} = \\sqrt{n + 1}$.
4. Combien de triangles faut-il construire pour obtenir un segment $[OA_n]$ de longueur $5$ cm ?`,
      solution: `**1.** Dans chaque triangle, on applique le théorème de Pythagore (l'hypoténuse est le côté issu de $O$ opposé à l'angle droit) :
- $OA_1A_2$ rectangle en $A_1$ : $OA_2^2 = 1^2 + 1^2 = 2$, donc $OA_2 = \\sqrt{2}$ cm ;
- $OA_2A_3$ rectangle en $A_2$ : $OA_3^2 = 2 + 1 = 3$, donc $OA_3 = \\sqrt{3}$ cm ;
- $OA_3A_4$ rectangle en $A_3$ : $OA_4^2 = 3 + 1 = 4$, donc $OA_4 = 2$ cm.

**2.** On conjecture $OA_n = \\sqrt{n}$ cm.

**3.** Le triangle $OA_nA_{n+1}$ est rectangle en $A_n$ ; d'après le théorème de Pythagore :
$$OA_{n+1}^2 = OA_n^2 + A_nA_{n+1}^2 = n + 1, \\quad \\text{donc } OA_{n+1} = \\sqrt{n + 1}.$$

**4.** $OA_n = 5$ équivaut à $\\sqrt{n} = 5$, soit $n = 25$. Le premier triangle est $OA_1A_2$ et le dernier $OA_{24}A_{25}$ : il faut construire $24$ triangles.`
    },
    {
      id: "G0-ds-09",
      title: "Le losange et le rectangle",
      difficulty: 1,
      points: 4,
      statement: `1. $ABCD$ est un losange de centre $O$ dont les diagonales mesurent $AC = 12$ cm et $BD = 16$ cm.
   a) Rappeler les propriétés des diagonales d'un losange, puis donner les longueurs $OA$ et $OB$.
   b) Calculer la longueur $AB$.
   c) En déduire le périmètre du losange.
2. $EFGH$ est un rectangle tel que $EF = 2{,}4$ m et $FG = 1$ m. Calculer la longueur de la diagonale $[EG]$.`,
      solution: `**1. a)** Les diagonales d'un losange se coupent en leur milieu et sont perpendiculaires. Donc $O$ est le milieu de $[AC]$ et de $[BD]$ :
$OA = \\dfrac{12}{2} = 6$ cm et $OB = \\dfrac{16}{2} = 8$ cm, et le triangle $AOB$ est rectangle en $O$.

**b)** Dans le triangle $AOB$ rectangle en $O$, d'après le théorème de Pythagore :
$$AB^2 = OA^2 + OB^2 = 36 + 64 = 100, \\quad \\text{donc } AB = \\sqrt{100} = 10 \\text{ cm}.$$

**c)** Les quatre côtés d'un losange ont la même longueur : le périmètre vaut $4 \\times 10 = 40$ cm.

**2.** Un rectangle a quatre angles droits, donc le triangle $EFG$ est rectangle en $F$. D'après le théorème de Pythagore :
$$EG^2 = EF^2 + FG^2 = 2{,}4^2 + 1^2 = 5{,}76 + 1 = 6{,}76, \\quad \\text{donc } EG = \\sqrt{6{,}76} = 2{,}6 \\text{ m}.$$`
    },
    {
      id: "G0-ds-10",
      title: "Le raccourci dans le parc",
      difficulty: 2,
      points: 5,
      statement: `Un parc a la forme d'un rectangle $ABCD$ avec $AB = 120$ m et $BC = 50$ m. Pour aller du coin $A$ au coin $C$, Inès peut :
- soit longer les allées qui bordent le parc, en passant par $B$ ;
- soit emprunter l'allée rectiligne qui va directement de $A$ à $C$.

1. Calculer la longueur du trajet qui passe par $B$.
2. Calculer la longueur $AC$ de l'allée en diagonale. Justifier.
3. Quelle distance Inès économise-t-elle en prenant la diagonale ?
4. Inès marche à la vitesse de $1{,}25$ m/s. Combien de secondes gagne-t-elle grâce au raccourci ?`,
      solution: `**1.** $AB + BC = 120 + 50 = 170$ m.

**2.** $ABCD$ est un rectangle, donc le triangle $ABC$ est rectangle en $B$. D'après le théorème de Pythagore :
$$AC^2 = AB^2 + BC^2 = 120^2 + 50^2 = 14\\,400 + 2\\,500 = 16\\,900, \\quad \\text{donc } AC = \\sqrt{16\\,900} = 130 \\text{ m}.$$

**3.** $170 - 130 = 40$ m : Inès économise $40$ m.

**4.** À $1{,}25$ m/s, parcourir $40$ m prend $\\dfrac{40}{1{,}25} = 32$ s. Elle gagne $32$ secondes.`
    },
    {
      id: "G0-ds-11",
      title: "Un point sur le côté d'un rectangle",
      difficulty: 3,
      points: 5,
      statement: `$ABCD$ est un rectangle tel que $AB = 10$ cm et $BC = 4$ cm. Le point $E$ appartient au segment $[DC]$ et $DE = 2$ cm.

1. Calculer $AE^2$ et $BE^2$.
2. Démontrer que le triangle $AEB$ est rectangle en $E$.
3. On place maintenant $E$ au milieu de $[DC]$. Le triangle $AEB$ est-il encore rectangle en $E$ ? Justifier.
4. On revient au cas $DE = 2$ cm.
   a) Calculer l'aire du triangle $AEB$ en utilisant la base $[AB]$.
   b) Retrouver ce résultat en utilisant les côtés $[AE]$ et $[BE]$.`,
      solution: `**1.** Le triangle $ADE$ est rectangle en $D$ (angle du rectangle), avec $AD = BC = 4$ cm. D'après le théorème de Pythagore : $AE^2 = AD^2 + DE^2 = 16 + 4 = 20$.
$EC = DC - DE = 10 - 2 = 8$ cm et le triangle $BCE$ est rectangle en $C$ : $BE^2 = BC^2 + EC^2 = 16 + 64 = 80$.

**2.** $AE^2 + BE^2 = 20 + 80 = 100$ et $AB^2 = 10^2 = 100$. Comme $AE^2 + BE^2 = AB^2$, d'après la réciproque du théorème de Pythagore, le triangle $AEB$ est rectangle en $E$.

**3.** Si $E$ est le milieu de $[DC]$, alors $DE = EC = 5$ cm.
$AE^2 = 16 + 25 = 41$ et $BE^2 = 16 + 25 = 41$, donc $AE^2 + BE^2 = 82$, alors que $AB^2 = 100$.
Comme $AE^2 + BE^2 \\neq AB^2$, d'après la contraposée du théorème de Pythagore, le triangle $AEB$ n'est **pas** rectangle en $E$.

**4. a)** La hauteur issue de $E$ dans le triangle $AEB$ est égale à la largeur du rectangle, $4$ cm : $\\mathcal{A} = \\dfrac{AB \\times 4}{2} = \\dfrac{10 \\times 4}{2} = 20$ cm².

**b)** Le triangle est rectangle en $E$, donc $\\mathcal{A} = \\dfrac{AE \\times BE}{2} = \\dfrac{\\sqrt{20} \\times \\sqrt{80}}{2} = \\dfrac{\\sqrt{1\\,600}}{2} = \\dfrac{40}{2} = 20$ cm². On retrouve bien le même résultat.`
    },
    {
      id: "G0-ds-12",
      title: "La fourmi sur la boîte",
      difficulty: 4,
      points: 6,
      statement: `Une boîte a la forme d'un pavé droit $ABCDEFGH$ : sa base $ABCD$ est un rectangle avec $AB = 6$ cm et $AD = 4$ cm, et sa hauteur est $AE = 3$ cm ($E$, $F$, $G$, $H$ sont respectivement au-dessus de $A$, $B$, $C$, $D$).

1. Une mouche vole en ligne droite à l'intérieur de la boîte, du sommet $A$ au sommet $G$. Calculer $AC$, puis la longueur $AG$ arrondie au millimètre.
2. Une fourmi va de $A$ à $G$ en marchant sur la surface de la boîte. Elle traverse deux faces et suit le plus court chemin possible. Quand on déplie ces deux faces à plat, elles forment un rectangle dont $A$ et $G$ sont deux sommets opposés, et le trajet de la fourmi est la diagonale de ce rectangle.
   a) Trajet 1 : par les faces $ABFE$ puis $BCGF$. Donner les dimensions du rectangle obtenu, puis la longueur du trajet arrondie au millimètre.
   b) Trajet 2 : par les faces $ABFE$ puis $EFGH$. Même question.
   c) Trajet 3 : par les faces $ADHE$ puis $EFGH$. Même question.
3. Quel trajet la fourmi doit-elle choisir ? Combien de millimètres de plus que la mouche parcourt-elle ?`,
      solution: `**1.** Le triangle $ABC$ est rectangle en $B$ : $AC^2 = AB^2 + BC^2 = 36 + 16 = 52$.
L'arête $[CG]$ est perpendiculaire à la face $ABCD$, donc le triangle $ACG$ est rectangle en $C$ :
$$AG^2 = AC^2 + CG^2 = 52 + 9 = 61, \\quad AG = \\sqrt{61} \\approx 7{,}8 \\text{ cm}.$$

**2. a)** Dépliées, les faces $ABFE$ ($6 \\times 3$) et $BCGF$ ($4 \\times 3$) forment un rectangle de longueur $6 + 4 = 10$ cm et de largeur $3$ cm. D'après le théorème de Pythagore, la diagonale mesure $\\sqrt{10^2 + 3^2} = \\sqrt{109} \\approx 10{,}4$ cm.

**b)** Les faces $ABFE$ ($6 \\times 3$) et $EFGH$ ($6 \\times 4$) forment un rectangle de $6$ cm sur $3 + 4 = 7$ cm. Diagonale : $\\sqrt{6^2 + 7^2} = \\sqrt{85} \\approx 9{,}2$ cm.

**c)** Les faces $ADHE$ ($4 \\times 3$) et $EFGH$ ($4 \\times 6$) forment un rectangle de $4$ cm sur $3 + 6 = 9$ cm. Diagonale : $\\sqrt{4^2 + 9^2} = \\sqrt{97} \\approx 9{,}8$ cm.

**3.** $\\sqrt{85} < \\sqrt{97} < \\sqrt{109}$ : la fourmi doit choisir le **trajet 2**, d'environ $9{,}2$ cm.
Elle parcourt environ $\\sqrt{85} - \\sqrt{61} \\approx 9{,}22 - 7{,}81 = 1{,}41$ cm, soit environ $14$ mm de plus que la mouche.`
    }
  ],
  "G1": [
    {
      id: "G1-ds-01",
      title: "Triangles emboîtés",
      difficulty: 1,
      points: 4,
      statement: `Sur la figure ci-dessous (qui n'est pas en vraie grandeur), les points $A$, $M$, $B$ sont alignés, les points $A$, $N$, $C$ sont alignés et les droites $(MN)$ et $(BC)$ sont parallèles.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:400px;"><svg class="geo-svg-figure" viewBox="0 0 420 225" width="420" height="225" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="200,25 40,200 380,200" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="136" y1="95" x2="272" y2="95" stroke="currentColor" stroke-width="1.8" /><circle cx="200" cy="25" r="2.6" fill="currentColor" /><circle cx="40" cy="200" r="2.6" fill="currentColor" /><circle cx="380" cy="200" r="2.6" fill="currentColor" /><circle cx="136" cy="95" r="2.6" fill="currentColor" /><circle cx="272" cy="95" r="2.6" fill="currentColor" /><text x="200" y="18" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="28" y="214" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="392" y="214" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="122" y="97" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">M</text><text x="286" y="97" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">N</text></svg></div>

On donne : $AM = 3$ cm, $AB = 7{,}5$ cm, $AC = 9$ cm et $BC = 6$ cm.

1. Écrire les rapports de longueurs égaux en justifiant.
2. Calculer $AN$.
3. Calculer $MN$.`,
      solution: `**1.** Les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont alignés, et les droites $(MN)$ et $(BC)$ sont parallèles. D'après le théorème de Thalès :
$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}.$$

**2.** $\\dfrac{3}{7{,}5} = \\dfrac{AN}{9}$, donc $AN = \\dfrac{3 \\times 9}{7{,}5} = 3{,}6$ cm.

**3.** $\\dfrac{3}{7{,}5} = \\dfrac{MN}{6}$, donc $MN = \\dfrac{3 \\times 6}{7{,}5} = 2{,}4$ cm.`
    },
    {
      id: "G1-ds-02",
      title: "Configuration papillon",
      difficulty: 1,
      points: 4,
      statement: `Sur la figure ci-dessous, les droites $(BD)$ et $(CE)$ se coupent en $A$, et les droites $(BC)$ et $(DE)$ sont parallèles.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:400px;"><svg class="geo-svg-figure" viewBox="0 0 430 230" width="430" height="230" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="100" y1="40" x2="350" y2="215" stroke="currentColor" stroke-width="1.8" /><line x1="60" y1="150" x2="410" y2="50" stroke="currentColor" stroke-width="1.8" /><line x1="100" y1="40" x2="60" y2="150" stroke="currentColor" stroke-width="1.8" /><line x1="350" y1="215" x2="410" y2="50" stroke="currentColor" stroke-width="1.8" /><circle cx="200" cy="110" r="2.6" fill="currentColor" /><circle cx="100" cy="40" r="2.6" fill="currentColor" /><circle cx="60" cy="150" r="2.6" fill="currentColor" /><circle cx="350" cy="215" r="2.6" fill="currentColor" /><circle cx="410" cy="50" r="2.6" fill="currentColor" /><text x="200" y="98" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="92" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="48" y="160" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="360" y="231" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">D</text><text x="420" y="44" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">E</text></svg></div>

On donne : $AB = 4$ cm, $AC = 5$ cm, $AD = 6$ cm et $DE = 9$ cm.

1. Calculer la longueur $BC$.
2. Calculer la longueur $AE$.
3. Calculer la longueur $CE$.`,
      solution: `**1.** Les points $B, A, D$ sont alignés, ainsi que $C, A, E$, et les droites $(BC)$ et $(DE)$ sont parallèles. D'après le théorème de Thalès :
$$\\frac{AB}{AD} = \\frac{AC}{AE} = \\frac{BC}{DE}.$$
$\\dfrac{4}{6} = \\dfrac{BC}{9}$, donc $BC = \\dfrac{4 \\times 9}{6} = 6$ cm.

**2.** $\\dfrac{4}{6} = \\dfrac{5}{AE}$, donc $AE = \\dfrac{5 \\times 6}{4} = 7{,}5$ cm.

**3.** $A$ est situé entre $C$ et $E$, donc $CE = CA + AE = 5 + 7{,}5 = 12{,}5$ cm.`
    },
    {
      id: "G1-ds-03",
      title: "Parallèles ou non ?",
      difficulty: 2,
      points: 5,
      statement: `Les points $R$, $S$, $T$ sont alignés dans cet ordre, ainsi que les points $R$, $U$, $V$ (les deux droites étant distinctes).

1. On donne $RS = 2{,}8$ cm, $RT = 7$ cm, $RU = 3{,}6$ cm et $RV = 9$ cm. Les droites $(SU)$ et $(TV)$ sont-elles parallèles ? Justifier.
2. On garde $RS$, $RT$ et $RV$, mais on place $U$ de sorte que $RU = 3{,}5$ cm. Les droites $(SU)$ et $(TV)$ sont-elles parallèles ? Justifier.
3. Dans le cas de la question 1, sachant que $TV = 8$ cm, calculer $SU$.`,
      solution: `**1.** $\\dfrac{RS}{RT} = \\dfrac{2{,}8}{7} = 0{,}4$ et $\\dfrac{RU}{RV} = \\dfrac{3{,}6}{9} = 0{,}4$. Les points $R, S, T$ et $R, U, V$ sont alignés dans le même ordre et $\\dfrac{RS}{RT} = \\dfrac{RU}{RV}$ : d'après la **réciproque** du théorème de Thalès, les droites $(SU)$ et $(TV)$ sont parallèles.

**2.** $\\dfrac{RU}{RV} = \\dfrac{3{,}5}{9} \\approx 0{,}389$ et $\\dfrac{RS}{RT} = 0{,}4$. Les rapports ne sont pas égaux ($0{,}4 \\times 9 = 3{,}6 \\neq 3{,}5$). D'après la **contraposée** du théorème de Thalès, les droites $(SU)$ et $(TV)$ ne sont pas parallèles.

**3.** Les droites étant parallèles, d'après le théorème de Thalès : $\\dfrac{SU}{TV} = \\dfrac{RS}{RT} = 0{,}4$, donc $SU = 0{,}4 \\times 8 = 3{,}2$ cm.`
    },
    {
      id: "G1-ds-04",
      title: "Le tremplin",
      difficulty: 2,
      points: 5,
      statement: `Un tremplin de skate est modélisé par un triangle $ABC$ rectangle en $B$ : $[AB]$ est au sol (horizontal), avec $AB = 5$ m, $[BC]$ est vertical, avec $BC = 1{,}2$ m, et $[AC]$ est la planche inclinée. Pour soutenir la planche, on place un pilier vertical $[MN]$, avec $M$ sur $[AB]$ et $N$ sur $[AC]$.

1. Justifier que les droites $(MN)$ et $(BC)$ sont parallèles.
2. Le pilier est placé à $AM = 2$ m. Calculer sa hauteur $MN$.
3. On veut placer un second pilier de hauteur $0{,}9$ m. À quelle distance de $A$ faut-il le placer ?
4. Calculer la longueur de la planche $[AC]$, arrondie au centimètre.`,
      solution: `**1.** Les droites $(MN)$ et $(BC)$ sont toutes deux verticales, donc perpendiculaires à la droite $(AB)$ du sol. Deux droites perpendiculaires à une même droite sont parallèles : $(MN) \\parallel (BC)$.

**2.** $A, M, B$ sont alignés, $A, N, C$ aussi, et $(MN) \\parallel (BC)$. D'après le théorème de Thalès :
$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}, \\quad \\text{d'où } MN = \\frac{2 \\times 1{,}2}{5} = 0{,}48 \\text{ m}.$$

**3.** On note $M'N'$ le second pilier : $\\dfrac{AM'}{5} = \\dfrac{0{,}9}{1{,}2}$, donc $AM' = \\dfrac{5 \\times 0{,}9}{1{,}2} = 3{,}75$ m.

**4.** Le triangle $ABC$ est rectangle en $B$ ; d'après le théorème de Pythagore, $AC^2 = 5^2 + 1{,}2^2 = 25 + 1{,}44 = 26{,}44$, donc $AC = \\sqrt{26{,}44} \\approx 5{,}14$ m.`
    },
    {
      id: "G1-ds-05",
      title: "Un parallélogramme caché",
      difficulty: 3,
      points: 5,
      statement: `$ABC$ est un triangle tel que $AB = 10$ cm, $AC = 8$ cm et $BC = 12$ cm. On place :
- $M$ sur $[AB]$ tel que $AM = 4$ cm ;
- $N$ sur $[AC]$ tel que $AN = 3{,}2$ cm ;
- $P$ sur $[BC]$ tel que $BP = 7{,}2$ cm.

1. Démontrer que les droites $(MN)$ et $(BC)$ sont parallèles.
2. Calculer $MN$.
3. Démontrer que les droites $(MP)$ et $(AC)$ sont parallèles.
4. En déduire la nature du quadrilatère $MNCP$. Vérifier la cohérence avec les longueurs $MN$ et $PC$.`,
      solution: `**1.** $A, M, B$ et $A, N, C$ sont alignés dans le même ordre. $\\dfrac{AM}{AB} = \\dfrac{4}{10} = 0{,}4$ et $\\dfrac{AN}{AC} = \\dfrac{3{,}2}{8} = 0{,}4$. Les rapports sont égaux : d'après la réciproque du théorème de Thalès, $(MN) \\parallel (BC)$.

**2.** D'après le théorème de Thalès : $\\dfrac{MN}{BC} = 0{,}4$, donc $MN = 0{,}4 \\times 12 = 4{,}8$ cm.

**3.** $BM = 10 - 4 = 6$ cm. $B, M, A$ et $B, P, C$ sont alignés dans le même ordre ; $\\dfrac{BM}{BA} = \\dfrac{6}{10} = 0{,}6$ et $\\dfrac{BP}{BC} = \\dfrac{7{,}2}{12} = 0{,}6$. D'après la réciproque du théorème de Thalès, $(MP) \\parallel (AC)$.

**4.** $(MN) \\parallel (PC)$ (car $P$ et $C$ sont sur $(BC)$) et $(MP) \\parallel (NC)$ (car $N$ et $C$ sont sur $(AC)$) : les côtés opposés de $MNCP$ sont parallèles deux à deux, c'est un **parallélogramme**.
Cohérence : $PC = 12 - 7{,}2 = 4{,}8$ cm $= MN$ ; dans un parallélogramme, les côtés opposés ont bien la même longueur.`
    },
    {
      id: "G1-ds-06",
      title: "Les diagonales d'un trapèze",
      difficulty: 3,
      points: 5,
      statement: `$ABCD$ est un trapèze de bases $[AB]$ et $[CD]$ : les droites $(AB)$ et $(CD)$ sont parallèles. Ses diagonales $[AC]$ et $[BD]$ se coupent en $O$. On donne $AB = 9$ cm, $CD = 6$ cm, $AC = 10$ cm et $BD = 12{,}5$ cm.

1. Expliquer pourquoi on peut appliquer le théorème de Thalès dans cette figure ; écrire les rapports égaux.
2. Montrer que $OA = 1{,}5 \\times OC$, puis calculer $OA$ et $OC$.
3. Calculer $OB$ et $OD$.`,
      solution: `**1.** Les droites $(AC)$ et $(BD)$ sont sécantes en $O$ ; les points $A, O, C$ sont alignés, ainsi que $B, O, D$ ; et $(AB) \\parallel (CD)$. C'est une configuration « papillon ». D'après le théorème de Thalès :
$$\\frac{OA}{OC} = \\frac{OB}{OD} = \\frac{AB}{CD} = \\frac{9}{6} = 1{,}5.$$

**2.** On a $\\dfrac{OA}{OC} = 1{,}5$, donc $OA = 1{,}5 \\times OC$. Comme $O \\in [AC]$ : $OA + OC = 10$, soit $2{,}5 \\times OC = 10$, donc $OC = 4$ cm et $OA = 6$ cm.

**3.** De même $OB = 1{,}5 \\times OD$ et $OB + OD = 12{,}5$, soit $2{,}5 \\times OD = 12{,}5$ : $OD = 5$ cm et $OB = 7{,}5$ cm.`
    },
    {
      id: "G1-ds-07",
      title: "Partager un segment sans graduation",
      difficulty: 4,
      points: 6,
      statement: `Sans utiliser les graduations de la règle sur le segment $[AB]$, on veut le partager en $5$ segments de même longueur. On procède ainsi :
- on trace une demi-droite $[Ax)$ non portée par $(AB)$ ;
- au compas, on place sur $[Ax)$ les points $A_1, A_2, A_3, A_4, A_5$ tels que $AA_1 = A_1A_2 = A_2A_3 = A_3A_4 = A_4A_5$ ;
- on trace la droite $(A_5B)$, puis les parallèles à $(A_5B)$ passant par $A_1, A_2, A_3, A_4$ ; elles coupent $[AB]$ en $B_1, B_2, B_3, B_4$.

1. Réaliser la construction avec $AB = 13$ cm et $AA_1 = 2$ cm.
2. Démontrer que $AB_2 = \\dfrac{2}{5} AB$.
3. Calculer $AB_2$ et $B_2B_3$ lorsque $AB = 13$ cm.
4. Expliquer comment placer, avec la même méthode, un point $P$ de $[AB]$ tel que $AP = \\dfrac{3}{7} AB$.`,
      solution: `**1.** Construction à réaliser (les points $B_1, \\ldots, B_4$ sont régulièrement espacés sur $[AB]$).

**2.** Les points $A, A_2, A_5$ sont alignés, ainsi que $A, B_2, B$, et $(A_2B_2) \\parallel (A_5B)$. D'après le théorème de Thalès :
$$\\frac{AB_2}{AB} = \\frac{AA_2}{AA_5} = \\frac{2 \\times AA_1}{5 \\times AA_1} = \\frac{2}{5}, \\quad \\text{donc } AB_2 = \\frac{2}{5} AB.$$

**3.** $AB_2 = \\dfrac{2}{5} \\times 13 = 5{,}2$ cm. De même $AB_3 = \\dfrac{3}{5} \\times 13 = 7{,}8$ cm, donc $B_2B_3 = 7{,}8 - 5{,}2 = 2{,}6$ cm $= \\dfrac{13}{5}$ cm.

**4.** On place sur $[Ax)$ sept points régulièrement espacés $A_1, \\ldots, A_7$, on trace $(A_7B)$, puis la parallèle à $(A_7B)$ passant par $A_3$ : elle coupe $[AB]$ en $P$. D'après le théorème de Thalès, $\\dfrac{AP}{AB} = \\dfrac{AA_3}{AA_7} = \\dfrac{3}{7}$.`
    },
    {
      id: "G1-ds-08",
      title: "Deux périmètres égaux",
      difficulty: 4,
      points: 5,
      statement: `$ABC$ est un triangle tel que $AB = 8$ cm, $AC = 7$ cm et $BC = 6$ cm. Un point $M$ se déplace sur le segment $[AB]$ ; on note $AM = x$ (en cm), avec $0 < x < 8$. La parallèle à $(BC)$ passant par $M$ coupe $[AC]$ en $N$.

1. Exprimer $AN$ et $MN$ en fonction de $x$.
2. Montrer que le périmètre du triangle $AMN$ est $\\dfrac{21x}{8}$ cm.
3. Montrer que le périmètre du trapèze $MBCN$ est $21 - \\dfrac{9x}{8}$ cm.
4. Déterminer $x$ pour que le triangle $AMN$ et le trapèze $MBCN$ aient le même périmètre.`,
      solution: `**1.** $A, M, B$ et $A, N, C$ sont alignés et $(MN) \\parallel (BC)$. D'après le théorème de Thalès, $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{MN}{BC}$, soit $\\dfrac{x}{8} = \\dfrac{AN}{7} = \\dfrac{MN}{6}$. Donc $AN = \\dfrac{7x}{8}$ et $MN = \\dfrac{6x}{8} = \\dfrac{3x}{4}$.

**2.** $P_{AMN} = x + \\dfrac{7x}{8} + \\dfrac{6x}{8} = \\dfrac{8x + 7x + 6x}{8} = \\dfrac{21x}{8}$.

**3.** $MB = 8 - x$ et $NC = 7 - \\dfrac{7x}{8}$. Donc
$$P_{MBCN} = (8 - x) + 6 + \\left(7 - \\frac{7x}{8}\\right) + \\frac{6x}{8} = 21 - \\frac{8x + 7x - 6x}{8} = 21 - \\frac{9x}{8}.$$

**4.** On résout $\\dfrac{21x}{8} = 21 - \\dfrac{9x}{8}$, soit $\\dfrac{30x}{8} = 21$, donc $x = \\dfrac{21 \\times 8}{30} = 5{,}6$ cm.
Vérification : $\\dfrac{21 \\times 5{,}6}{8} = 14{,}7$ et $21 - \\dfrac{9 \\times 5{,}6}{8} = 21 - 6{,}3 = 14{,}7$ cm.`
    },
    {
      id: "G1-ds-09",
      title: "L'ombre du lampadaire",
      difficulty: 1,
      points: 4,
      statement: `Pour mesurer la hauteur d'un lampadaire $[AD]$, Noé plante verticalement un bâton $[BC]$ de $1{,}5$ m. À un moment de la journée, l'extrémité de l'ombre du bâton coïncide avec celle de l'ombre du lampadaire, au point $S$. Les points $S$, $B$, $A$ sont alignés sur le sol horizontal, et les points $S$, $C$, $D$ sont alignés.
On mesure $SB = 2$ m et $SA = 8{,}4$ m.

1. Expliquer pourquoi les droites $(BC)$ et $(AD)$ sont parallèles.
2. Calculer la hauteur $AD$ du lampadaire.
3. Calculer $SC$, puis en déduire $SD$.`,
      solution: `**1.** Le bâton et le lampadaire sont verticaux : les droites $(BC)$ et $(AD)$ sont toutes deux perpendiculaires au sol $(SA)$. Deux droites perpendiculaires à une même droite sont parallèles, donc $(BC) \\parallel (AD)$.

**2.** Les points $S$, $B$, $A$ et $S$, $C$, $D$ sont alignés et $(BC) \\parallel (AD)$. D'après le théorème de Thalès :
$$\\frac{SB}{SA} = \\frac{SC}{SD} = \\frac{BC}{AD}, \\quad \\text{soit } \\frac{2}{8{,}4} = \\frac{1{,}5}{AD}.$$
Donc $AD = \\dfrac{8{,}4 \\times 1{,}5}{2} = 6{,}3$ m.

**3.** Le triangle $SBC$ est rectangle en $B$ : $SC^2 = SB^2 + BC^2 = 4 + 2{,}25 = 6{,}25$, donc $SC = 2{,}5$ m.
D'après l'égalité de Thalès, $\\dfrac{2}{8{,}4} = \\dfrac{2{,}5}{SD}$, donc $SD = \\dfrac{8{,}4 \\times 2{,}5}{2} = 10{,}5$ m.`
    },
    {
      id: "G1-ds-10",
      title: "La rampe et son renfort",
      difficulty: 2,
      points: 5,
      statement: `Une rampe de skate est représentée par un triangle $ABC$ rectangle en $B$ : le sol $[AB]$ mesure $4$ m et le poteau vertical $[BC]$ mesure $1{,}2$ m. Pour la consolider, on ajoute une barre verticale $[MN]$ de $0{,}45$ m, avec $M$ sur $[AB]$ et $N$ sur la planche $[AC]$.

1. Justifier que les droites $(MN)$ et $(BC)$ sont parallèles.
2. À quelle distance $AM$ du point $A$ faut-il fixer la barre ?
3. Calculer la longueur $AC$ de la planche, arrondie au centimètre.
4. En déduire la longueur $AN$, arrondie au centimètre.`,
      solution: `**1.** Les droites $(MN)$ et $(BC)$ sont toutes deux perpendiculaires au sol $(AB)$ ; elles sont donc parallèles.

**2.** Les points $A$, $M$, $B$ et $A$, $N$, $C$ sont alignés et $(MN) \\parallel (BC)$. D'après le théorème de Thalès :
$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}, \\quad \\text{soit } \\frac{AM}{4} = \\frac{0{,}45}{1{,}2}.$$
Donc $AM = \\dfrac{4 \\times 0{,}45}{1{,}2} = 1{,}5$ m.

**3.** Le triangle $ABC$ est rectangle en $B$. D'après le théorème de Pythagore :
$$AC^2 = AB^2 + BC^2 = 16 + 1{,}44 = 17{,}44, \\quad AC = \\sqrt{17{,}44} \\approx 4{,}18 \\text{ m}.$$

**4.** $\\dfrac{AN}{AC} = \\dfrac{0{,}45}{1{,}2} = 0{,}375$, donc $AN = 0{,}375 \\times \\sqrt{17{,}44} \\approx 1{,}57$ m.`
    },
    {
      id: "G1-ds-11",
      title: "Le panneau triangulaire",
      difficulty: 3,
      points: 5,
      statement: `Un panneau a la forme d'un triangle $ABC$ tel que $AB = 9$ dm, $AC = 12$ dm et $BC = 15$ dm. On place $M$ sur $[AB]$ avec $AM = 3$ dm et $N$ sur $[AC]$ avec $AN = 4$ dm, puis on peint en rouge le triangle $AMN$.

1. Démontrer que le triangle $ABC$ est rectangle en $A$.
2. Démontrer que les droites $(MN)$ et $(BC)$ sont parallèles.
3. Calculer la longueur $MN$.
4. a) Calculer l'aire du triangle $ABC$ et celle du triangle $AMN$.
   b) Par combien l'aire a-t-elle été divisée ? Comparer avec le rapport $\\dfrac{AM}{AB}$.`,
      solution: `**1.** Le plus grand côté est $[BC]$ : $BC^2 = 225$ et $AB^2 + AC^2 = 81 + 144 = 225$. Comme $AB^2 + AC^2 = BC^2$, d'après la réciproque du théorème de Pythagore, le triangle $ABC$ est rectangle en $A$.

**2.** Les points $A$, $M$, $B$ et $A$, $N$, $C$ sont alignés dans le même ordre.
$\\dfrac{AM}{AB} = \\dfrac{3}{9} = \\dfrac{1}{3}$ et $\\dfrac{AN}{AC} = \\dfrac{4}{12} = \\dfrac{1}{3}$.
Ces rapports sont égaux, donc d'après la réciproque du théorème de Thalès, $(MN) \\parallel (BC)$.

**3.** D'après le théorème de Thalès, $\\dfrac{MN}{BC} = \\dfrac{1}{3}$, donc $MN = \\dfrac{15}{3} = 5$ dm.

**4. a)** Les deux triangles sont rectangles en $A$ :
$\\mathcal{A}_{ABC} = \\dfrac{9 \\times 12}{2} = 54$ dm² et $\\mathcal{A}_{AMN} = \\dfrac{3 \\times 4}{2} = 6$ dm².

**b)** $\\dfrac{54}{6} = 9$ : l'aire est divisée par $9$. Les longueurs sont multipliées par $\\dfrac{1}{3}$, donc l'aire est multipliée par $\\left(\\dfrac{1}{3}\\right)^2 = \\dfrac{1}{9}$.`
    },
    {
      id: "G1-ds-12",
      title: "Couper un triangle en deux parts de même aire",
      difficulty: 4,
      points: 6,
      statement: `$ABC$ est un triangle rectangle en $A$ avec $AB = 8$ cm et $AC = 6$ cm. Pour un point $M$ du segment $[AB]$, on trace la parallèle à $(BC)$ passant par $M$ : elle coupe $[AC]$ en $N$. On note $x = AM$ (en cm), avec $0 < x < 8$.

1. Calculer l'aire du triangle $ABC$.
2. Exprimer $AN$ en fonction de $x$.
3. Montrer que l'aire du triangle $AMN$ est égale à $0{,}375x^2$.
4. Déterminer la valeur exacte de $x$ pour laquelle la droite $(MN)$ partage le triangle $ABC$ en deux parties de même aire, puis en donner un arrondi au millimètre.
5. Lina pense qu'il suffit de placer $M$ au milieu de $[AB]$. A-t-elle raison ? Justifier.`,
      solution: `**1.** $\\mathcal{A}_{ABC} = \\dfrac{AB \\times AC}{2} = \\dfrac{8 \\times 6}{2} = 24$ cm².

**2.** Les points $A$, $M$, $B$ et $A$, $N$, $C$ sont alignés et $(MN) \\parallel (BC)$. D'après le théorème de Thalès, $\\dfrac{AM}{AB} = \\dfrac{AN}{AC}$, soit $\\dfrac{x}{8} = \\dfrac{AN}{6}$, donc $AN = \\dfrac{6x}{8} = 0{,}75x$.

**3.** Le triangle $AMN$ est rectangle en $A$ : $\\mathcal{A}_{AMN} = \\dfrac{x \\times 0{,}75x}{2} = 0{,}375x^2$.

**4.** On veut $\\mathcal{A}_{AMN} = \\dfrac{24}{2} = 12$, soit $0{,}375x^2 = 12$, donc $x^2 = \\dfrac{12}{0{,}375} = 32$.
Comme $x > 0$, $x = \\sqrt{32} = 4\\sqrt{2} \\approx 5{,}7$ cm.

**5.** Si $M$ est le milieu de $[AB]$, $x = 4$ et $\\mathcal{A}_{AMN} = 0{,}375 \\times 16 = 6$ cm², soit seulement le quart de l'aire de $ABC$ (les longueurs sont divisées par $2$, donc l'aire est divisée par $4$). Lina a tort.`
    }
  ],
  "G2": [
    {
      id: "G2-ds-01",
      title: "Calculer des longueurs",
      difficulty: 1,
      points: 4,
      statement: `Le triangle $ABC$ est rectangle en $A$, avec $BC = 12$ cm et $\\widehat{ABC} = 35^\\circ$.

1. Nommer l'hypoténuse, le côté adjacent et le côté opposé à l'angle $\\widehat{ABC}$.
2. Calculer la longueur $AB$, arrondie au millimètre.
3. Calculer la longueur $AC$, arrondie au millimètre.
4. Calculer la mesure de l'angle $\\widehat{ACB}$.`,
      solution: `**1.** Hypoténuse : $[BC]$ ; côté adjacent à $\\widehat{ABC}$ : $[AB]$ ; côté opposé : $[AC]$.

**2.** Dans le triangle $ABC$ rectangle en $A$ : $\\cos \\widehat{ABC} = \\dfrac{AB}{BC}$, donc $AB = 12 \\times \\cos 35^\\circ \\approx 9{,}8$ cm.

**3.** $\\sin \\widehat{ABC} = \\dfrac{AC}{BC}$, donc $AC = 12 \\times \\sin 35^\\circ \\approx 6{,}9$ cm.

**4.** La somme des angles d'un triangle vaut $180^\\circ$ : $\\widehat{ACB} = 180^\\circ - 90^\\circ - 35^\\circ = 55^\\circ$.`
    },
    {
      id: "G2-ds-02",
      title: "Déterminer un angle",
      difficulty: 1,
      points: 4,
      statement: `Le triangle $DEF$ est rectangle en $E$, avec $DE = 7$ cm et $EF = 4$ cm.

1. Exprimer $\\tan \\widehat{EDF}$ à l'aide des longueurs du triangle.
2. Calculer la mesure de l'angle $\\widehat{EDF}$, arrondie au degré.
3. En déduire une mesure approchée de l'angle $\\widehat{EFD}$.
4. Calculer $DF$ au millimètre près.`,
      solution: `**1.** Dans le triangle $DEF$ rectangle en $E$, le côté opposé à $\\widehat{EDF}$ est $[EF]$ et le côté adjacent est $[DE]$ : $\\tan \\widehat{EDF} = \\dfrac{EF}{DE} = \\dfrac{4}{7}$.

**2.** À la calculatrice : $\\widehat{EDF} = \\arctan\\left(\\dfrac{4}{7}\\right) \\approx 30^\\circ$ (touche $\\tan^{-1}$ ; valeur $\\approx 29{,}7^\\circ$).

**3.** Les angles aigus d'un triangle rectangle sont complémentaires : $\\widehat{EFD} \\approx 90^\\circ - 29{,}7^\\circ \\approx 60^\\circ$.

**4.** D'après le théorème de Pythagore : $DF^2 = 7^2 + 4^2 = 65$, donc $DF = \\sqrt{65} \\approx 8{,}1$ cm.`
    },
    {
      id: "G2-ds-03",
      title: "Le cerf-volant",
      difficulty: 2,
      points: 5,
      statement: `Lina fait voler un cerf-volant. Le fil, bien tendu et rectiligne, mesure $50$ m ; sa main est à $1{,}2$ m du sol et le fil forme un angle de $40^\\circ$ avec l'horizontale. Le sol est horizontal.

1. Faire un schéma en nommant $M$ la main, $K$ le cerf-volant et $H$ le point situé à la verticale de $K$ et à la même hauteur que $M$.
2. Calculer la hauteur du cerf-volant par rapport au sol, arrondie au décimètre.
3. À quelle distance horizontale de Lina se trouve le cerf-volant ? Arrondir au décimètre.
4. Le vent faiblit : le cerf-volant n'est plus qu'à $25$ m au-dessus de la main, le fil mesurant toujours $50$ m. Quel angle le fil fait-il alors avec l'horizontale ?`,
      solution: `**1.** Le triangle $MHK$ est rectangle en $H$, d'hypoténuse $[MK]$ de longueur $50$ m, avec $\\widehat{HMK} = 40^\\circ$.

**2.** Dans le triangle $MHK$ rectangle en $H$ : $\\sin \\widehat{HMK} = \\dfrac{HK}{MK}$, donc $HK = 50 \\times \\sin 40^\\circ \\approx 32{,}14$ m. En ajoutant la hauteur de la main : $32{,}14 + 1{,}2 \\approx 33{,}3$ m.

**3.** $\\cos \\widehat{HMK} = \\dfrac{MH}{MK}$, donc $MH = 50 \\times \\cos 40^\\circ \\approx 38{,}3$ m.

**4.** $\\sin \\widehat{HMK} = \\dfrac{25}{50} = 0{,}5$, donc $\\widehat{HMK} = 30^\\circ$.`
    },
    {
      id: "G2-ds-04",
      title: "Une route en pente",
      difficulty: 2,
      points: 5,
      statement: `Un panneau routier indique une pente de $12\\,\\%$ : cela signifie que la route s'élève de $12$ m pour un déplacement horizontal de $100$ m.

1. On modélise la situation par un triangle $ABC$ rectangle en $B$, avec $AB = 100$ m (horizontal) et $BC = 12$ m (vertical). Calculer l'angle $\\widehat{BAC}$ que fait la route avec l'horizontale, arrondi au dixième de degré.
2. Calculer la distance $AC$ réellement parcourue sur la route, arrondie au centimètre.
3. Une autre route fait un angle de $5^\\circ$ avec l'horizontale. Quelle distance faut-il parcourir sur cette route pour s'élever de $150$ m ? Arrondir au mètre.`,
      solution: `**1.** Dans le triangle $ABC$ rectangle en $B$ : $\\tan \\widehat{BAC} = \\dfrac{BC}{AB} = \\dfrac{12}{100} = 0{,}12$, donc $\\widehat{BAC} \\approx 6{,}8^\\circ$.

**2.** D'après le théorème de Pythagore : $AC^2 = 100^2 + 12^2 = 10\\,144$, donc $AC = \\sqrt{10\\,144} \\approx 100{,}72$ m.

**3.** On note $d$ la distance parcourue (hypoténuse) et $150$ m le dénivelé (côté opposé à l'angle de $5^\\circ$) : $\\sin 5^\\circ = \\dfrac{150}{d}$, donc $d = \\dfrac{150}{\\sin 5^\\circ} \\approx 1\\,721$ m.`
    },
    {
      id: "G2-ds-05",
      title: "Un triangle et sa hauteur",
      difficulty: 3,
      points: 5,
      statement: `Dans le triangle $ABC$ ci-dessous, $H$ est le pied de la hauteur issue de $A$ ; $H$ appartient au segment $[BC]$. On donne $AH = 6$ cm, $\\widehat{ABC} = 50^\\circ$ et $\\widehat{ACB} = 30^\\circ$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:400px;"><svg class="geo-svg-figure" viewBox="0 0 460 215" width="460" height="215" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><polygon points="180,40 40,190 420,190" fill="rgba(59,130,246,0.08)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" /><line x1="180" y1="40" x2="180" y2="190" stroke="currentColor" stroke-width="1.8" stroke-dasharray="6 4" /><polyline points="180,179 191,179 191,190" fill="none" stroke="currentColor" stroke-width="1.3" /><circle cx="180" cy="40" r="2.6" fill="currentColor" /><circle cx="40" cy="190" r="2.6" fill="currentColor" /><circle cx="420" cy="190" r="2.6" fill="currentColor" /><circle cx="180" cy="190" r="2.6" fill="currentColor" /><text x="180" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">A</text><text x="28" y="205" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">B</text><text x="432" y="205" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">C</text><text x="180" y="208" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="currentColor" text-anchor="middle">H</text><text x="70" y="182" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">50°</text><text x="372" y="182" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="middle">30°</text><text x="194" y="120" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="currentColor" text-anchor="start">6 cm</text></svg></div>

1. Calculer $BH$ au millimètre près.
2. Calculer $HC$ au millimètre près, puis en déduire $BC$.
3. Calculer $AC$, puis $AB$ au millimètre près.
4. Calculer l'aire du triangle $ABC$, arrondie au cm².`,
      solution: `**1.** Le triangle $ABH$ est rectangle en $H$ : $\\tan \\widehat{ABH} = \\dfrac{AH}{BH}$, donc $BH = \\dfrac{6}{\\tan 50^\\circ} \\approx 5{,}0$ cm (valeur $\\approx 5{,}03$).

**2.** Le triangle $AHC$ est rectangle en $H$ : $\\tan \\widehat{ACH} = \\dfrac{AH}{HC}$, donc $HC = \\dfrac{6}{\\tan 30^\\circ} \\approx 10{,}4$ cm (valeur $\\approx 10{,}39$).
$H \\in [BC]$, donc $BC = BH + HC \\approx 5{,}03 + 10{,}39 \\approx 15{,}4$ cm.

**3.** Dans $AHC$ : $\\sin 30^\\circ = \\dfrac{AH}{AC}$, donc $AC = \\dfrac{6}{0{,}5} = 12$ cm.
Dans $ABH$ : $\\sin 50^\\circ = \\dfrac{AH}{AB}$, donc $AB = \\dfrac{6}{\\sin 50^\\circ} \\approx 7{,}8$ cm.

**4.** $\\mathcal{A} = \\dfrac{BC \\times AH}{2} \\approx \\dfrac{15{,}43 \\times 6}{2} \\approx 46$ cm².`
    },
    {
      id: "G2-ds-06",
      title: "Le décollage de l'avion",
      difficulty: 3,
      points: 5,
      statement: `Après avoir quitté la piste, un avion monte en ligne droite en faisant un angle constant de $15^\\circ$ avec le sol, supposé horizontal.

1. Quelle est l'altitude de l'avion lorsqu'il a parcouru $3$ km sur sa trajectoire ? Arrondir au mètre.
2. Une colline culmine à $500$ m d'altitude, à $2$ km (distance horizontale) du point de décollage. L'avion la survole-t-il ? Justifier.
3. Quel angle de montée faudrait-il pour atteindre $1\\,000$ m d'altitude après une distance horizontale de $4$ km ? Arrondir au dixième de degré.`,
      solution: `**1.** On modélise par un triangle rectangle : la trajectoire ($3\\,000$ m) est l'hypoténuse, l'altitude $h$ est le côté opposé à l'angle de $15^\\circ$. $\\sin 15^\\circ = \\dfrac{h}{3\\,000}$, donc $h = 3\\,000 \\times \\sin 15^\\circ \\approx 776$ m.

**2.** À $2\\,000$ m de distance horizontale (côté adjacent), l'altitude $h'$ (côté opposé) vérifie $\\tan 15^\\circ = \\dfrac{h'}{2\\,000}$, d'où $h' = 2\\,000 \\times \\tan 15^\\circ \\approx 536$ m. Comme $536 > 500$, l'avion survole la colline (d'environ $36$ m seulement).

**3.** $\\tan \\alpha = \\dfrac{1\\,000}{4\\,000} = 0{,}25$, donc $\\alpha \\approx 14{,}0^\\circ$.`
    },
    {
      id: "G2-ds-07",
      title: "La hauteur d'une tour",
      difficulty: 4,
      points: 6,
      statement: `Pour mesurer la hauteur $h$ d'une tour $[TS]$ (avec $T$ au pied et $S$ au sommet), Noé se place en un point $A$ du sol, puis en un point $B$, $20$ m plus près de la tour, les points $A$, $B$, $T$ étant alignés sur le sol horizontal. Depuis $A$, il voit le sommet sous un angle $\\widehat{TAS} = 30^\\circ$ ; depuis $B$, sous un angle $\\widehat{TBS} = 45^\\circ$. (On néglige la taille de Noé.)

1. Dans le triangle $BTS$ rectangle en $T$, montrer que $BT = h$.
2. Dans le triangle $ATS$ rectangle en $T$, montrer que $AT = \\dfrac{h}{\\tan 30^\\circ}$.
3. En utilisant $AT - BT = 20$, montrer que $h\\left(\\dfrac{1}{\\tan 30^\\circ} - 1\\right) = 20$.
4. En déduire la hauteur de la tour, arrondie au décimètre.`,
      solution: `**1.** Dans le triangle $BTS$ rectangle en $T$ : $\\tan \\widehat{TBS} = \\dfrac{TS}{BT}$, soit $\\tan 45^\\circ = \\dfrac{h}{BT}$. Comme $\\tan 45^\\circ = 1$, on a $BT = h$.

**2.** Dans le triangle $ATS$ rectangle en $T$ : $\\tan 30^\\circ = \\dfrac{h}{AT}$, donc $AT = \\dfrac{h}{\\tan 30^\\circ}$.

**3.** $B$ est entre $A$ et $T$, donc $AT = AB + BT$, soit $AT - BT = 20$ :
$$\\frac{h}{\\tan 30^\\circ} - h = 20 \\iff h\\left(\\frac{1}{\\tan 30^\\circ} - 1\\right) = 20.$$

**4.** $\\dfrac{1}{\\tan 30^\\circ} \\approx 1{,}7321$, donc $h \\approx \\dfrac{20}{0{,}7321} \\approx 27{,}3$ m.
Contrôle : $BT \\approx 27{,}3$ m, $AT \\approx 47{,}3$ m et $\\dfrac{27{,}3}{47{,}3} \\approx 0{,}577 \\approx \\tan 30^\\circ$.`
    },
    {
      id: "G2-ds-08",
      title: "Une relation entre cosinus et sinus",
      difficulty: 4,
      points: 5,
      statement: `$ABC$ est un triangle rectangle en $A$. On note $x$ la mesure de l'angle $\\widehat{ABC}$.

1. Exprimer $\\cos x$ et $\\sin x$ à l'aide des longueurs $AB$, $AC$ et $BC$.
2. En utilisant le théorème de Pythagore, démontrer que $(\\cos x)^2 + (\\sin x)^2 = 1$.
3. Démontrer que $\\tan x = \\dfrac{\\sin x}{\\cos x}$.
4. On suppose que $\\cos x = 0{,}6$. Calculer $\\sin x$ et $\\tan x$, puis donner la mesure de $x$ arrondie au degré.
5. Proposer des longueurs entières pour les côtés d'un triangle rectangle dont un angle aigu a pour cosinus $0{,}6$.`,
      solution: `**1.** $\\cos x = \\dfrac{AB}{BC}$ (adjacent sur hypoténuse) et $\\sin x = \\dfrac{AC}{BC}$ (opposé sur hypoténuse).

**2.** $(\\cos x)^2 + (\\sin x)^2 = \\dfrac{AB^2}{BC^2} + \\dfrac{AC^2}{BC^2} = \\dfrac{AB^2 + AC^2}{BC^2}$. D'après le théorème de Pythagore dans le triangle rectangle en $A$, $AB^2 + AC^2 = BC^2$, donc la somme vaut $1$.

**3.** $\\dfrac{\\sin x}{\\cos x} = \\dfrac{AC}{BC} \\times \\dfrac{BC}{AB} = \\dfrac{AC}{AB} = \\tan x$.

**4.** $(\\sin x)^2 = 1 - 0{,}36 = 0{,}64$ et $\\sin x > 0$, donc $\\sin x = 0{,}8$. Puis $\\tan x = \\dfrac{0{,}8}{0{,}6} = \\dfrac{4}{3}$. À la calculatrice, $x \\approx 53^\\circ$.

**5.** Avec $AB = 3$, $AC = 4$ et $BC = 5$ : $\\cos x = \\dfrac{3}{5} = 0{,}6$. Ce triangle est bien rectangle car $3^2 + 4^2 = 25 = 5^2$.`
    },
    {
      id: "G2-ds-09",
      title: "Les toboggans",
      difficulty: 1,
      points: 4,
      statement: `On modélise un toboggan par un triangle $ABC$ rectangle en $B$ : $[AC]$ est la piste, $[BC]$ l'échelle verticale et $[AB]$ le sol.

1. La piste mesure $AC = 3{,}2$ m et fait un angle $\\widehat{BAC} = 35^\\circ$ avec le sol.
   a) Calculer la hauteur $BC$ du toboggan, arrondie au centimètre.
   b) Calculer la longueur $AB$ au sol, arrondie au centimètre.
2. Un autre toboggan a une hauteur de $1{,}5$ m et occupe $2{,}6$ m au sol. Calculer l'angle que fait sa piste avec le sol, arrondi au degré.`,
      solution: `**1. a)** Dans le triangle $ABC$ rectangle en $B$, $[BC]$ est le côté opposé à l'angle $\\widehat{BAC}$ et $[AC]$ l'hypoténuse :
$\\sin \\widehat{BAC} = \\dfrac{BC}{AC}$, donc $BC = 3{,}2 \\times \\sin 35^\\circ \\approx 1{,}84$ m.

**b)** $[AB]$ est le côté adjacent : $\\cos \\widehat{BAC} = \\dfrac{AB}{AC}$, donc $AB = 3{,}2 \\times \\cos 35^\\circ \\approx 2{,}62$ m.

**2.** On connaît le côté opposé ($1{,}5$ m) et le côté adjacent ($2{,}6$ m) à l'angle cherché $\\alpha$ :
$\\tan \\alpha = \\dfrac{1{,}5}{2{,}6}$, donc $\\alpha \\approx 30^\\circ$ (à la calculatrice : $29{,}98^\\circ$).`
    },
    {
      id: "G2-ds-10",
      title: "Le phare et le bateau",
      difficulty: 2,
      points: 5,
      statement: `Le sommet $S$ d'un phare se trouve à $45$ m au-dessus du niveau de la mer ; on note $P$ le point au niveau de la mer situé à la verticale de $S$. Un bateau $B$ se dirige en ligne droite vers $P$. On admet que le triangle $SPB$ est rectangle en $P$.

1. Au départ, le gardien du phare mesure l'angle $\\widehat{SBP} = 8^\\circ$. Calculer la distance $PB$ entre le bateau et le pied du phare, arrondie au dixième de mètre.
2. Un peu plus tard, le bateau est en $B'$ et l'angle $\\widehat{SB'P}$ vaut $15^\\circ$. Calculer $PB'$, arrondie au dixième de mètre.
3. Le bateau est passé de $B$ à $B'$ en $1$ min $30$ s. Calculer sa vitesse moyenne en m/s, puis en km/h (arrondir au dixième).`,
      solution: `**1.** Dans le triangle $SPB$ rectangle en $P$, $[SP]$ est le côté opposé à l'angle $\\widehat{SBP}$ et $[PB]$ le côté adjacent :
$\\tan \\widehat{SBP} = \\dfrac{SP}{PB}$, donc $PB = \\dfrac{45}{\\tan 8^\\circ} \\approx 320{,}2$ m.

**2.** De même, $PB' = \\dfrac{45}{\\tan 15^\\circ} \\approx 167{,}9$ m.

**3.** Le bateau a parcouru $BB' = PB - PB' \\approx 320{,}2 - 167{,}9 = 152{,}3$ m en $90$ s.
Vitesse : $\\dfrac{152{,}3}{90} \\approx 1{,}7$ m/s. En km/h : $\\dfrac{152{,}3}{90} \\times 3{,}6 \\approx 6{,}1$ km/h (en $1$ h $= 3\\,600$ s, il parcourt $3\\,600$ fois plus de mètres, soit $3{,}6$ fois plus de kilomètres).`
    },
    {
      id: "G2-ds-11",
      title: "La charpente du hangar",
      difficulty: 3,
      points: 5,
      statement: `La charpente d'un hangar est un triangle $ABC$ isocèle en $A$, avec $BC = 12$ m et $AB = AC = 7{,}5$ m. On note $H$ le milieu de $[BC]$.

1. Justifier que la droite $(AH)$ est perpendiculaire à $(BC)$.
2. Calculer la hauteur $AH$ de la charpente.
3. Calculer la mesure de l'angle $\\widehat{ABC}$, arrondie au dixième de degré.
4. En déduire la mesure de l'angle $\\widehat{BAC}$ au sommet, arrondie au dixième de degré.
5. Le règlement local impose une pente de toit comprise entre $30^\\circ$ et $45^\\circ$ avec l'horizontale. Cette charpente est-elle conforme ?`,
      solution: `**1.** Le triangle est isocèle en $A$, donc $A$ est à égale distance de $B$ et de $C$ : il appartient à la médiatrice de $[BC]$. $H$ aussi (c'est le milieu). Donc $(AH)$ est la médiatrice de $[BC]$, perpendiculaire à $(BC)$.

**2.** $BH = \\dfrac{12}{2} = 6$ m. Dans le triangle $ABH$ rectangle en $H$, d'après le théorème de Pythagore :
$AH^2 = AB^2 - BH^2 = 56{,}25 - 36 = 20{,}25$, donc $AH = 4{,}5$ m.

**3.** Dans le triangle $ABH$ rectangle en $H$ : $\\cos \\widehat{ABC} = \\dfrac{BH}{AB} = \\dfrac{6}{7{,}5} = 0{,}8$, donc $\\widehat{ABC} \\approx 36{,}9^\\circ$.

**4.** Les angles à la base d'un triangle isocèle sont égaux : $\\widehat{ACB} = \\widehat{ABC}$. La somme des angles d'un triangle vaut $180^\\circ$ :
$\\widehat{BAC} \\approx 180 - 2 \\times 36{,}87 \\approx 106{,}3^\\circ$.

**5.** La pente du toit est l'angle $\\widehat{ABC} \\approx 36{,}9^\\circ$, compris entre $30^\\circ$ et $45^\\circ$ : la charpente est conforme.`
    },
    {
      id: "G2-ds-12",
      title: "La largeur du fleuve",
      difficulty: 4,
      points: 6,
      statement: `Pour mesurer la largeur d'un fleuve sans le traverser, deux élèves se placent sur une rive rectiligne, aux points $A$ et $B$, distants de $50$ m. Un arbre $T$ se trouve sur l'autre rive. Le point $H$ de la rive est tel que $(TH)$ est perpendiculaire à la rive, et les points $A$, $B$, $H$ sont alignés dans cet ordre. On mesure $\\widehat{TAH} = 30^\\circ$ et $\\widehat{TBH} = 45^\\circ$. On note $h = TH$ la largeur du fleuve.

1. Démontrer que $BH = h$.
2. Exprimer $AH$ en fonction de $h$.
3. En utilisant le triangle $TAH$, justifier que $h = \\tan 30^\\circ \\times (h + 50)$.
4. En déduire que $h = \\dfrac{50 \\times \\tan 30^\\circ}{1 - \\tan 30^\\circ}$, puis donner la largeur du fleuve arrondie au dixième de mètre.
5. Calculer la distance $AT$, arrondie au mètre.`,
      solution: `**1.** Dans le triangle $TBH$ rectangle en $H$, $\\widehat{TBH} = 45^\\circ$, donc $\\widehat{BTH} = 180 - 90 - 45 = 45^\\circ$. Le triangle a deux angles égaux : il est isocèle en $H$, donc $BH = TH = h$.
(Autre méthode : $\\tan 45^\\circ = \\dfrac{TH}{BH} = 1$, donc $BH = TH$.)

**2.** Les points $A$, $B$, $H$ sont alignés dans cet ordre : $AH = AB + BH = h + 50$.

**3.** Dans le triangle $TAH$ rectangle en $H$ : $\\tan \\widehat{TAH} = \\dfrac{TH}{AH}$, soit $\\tan 30^\\circ = \\dfrac{h}{h + 50}$, donc $h = \\tan 30^\\circ \\times (h + 50)$.

**4.** On développe : $h = h \\tan 30^\\circ + 50 \\tan 30^\\circ$, donc $h - h\\tan 30^\\circ = 50\\tan 30^\\circ$, soit $h(1 - \\tan 30^\\circ) = 50 \\tan 30^\\circ$.
Comme $1 - \\tan 30^\\circ \\neq 0$ : $h = \\dfrac{50 \\times \\tan 30^\\circ}{1 - \\tan 30^\\circ} \\approx 68{,}3$ m.

**5.** Dans le triangle $TAH$ rectangle en $H$ : $\\sin 30^\\circ = \\dfrac{TH}{AT}$, donc $AT = \\dfrac{h}{\\sin 30^\\circ} = \\dfrac{h}{0{,}5} = 2h \\approx 137$ m.`
    }
  ],
  "G3": [
    {
      id: "G3-ds-01",
      title: "Images par une homothétie",
      difficulty: 1,
      points: 4,
      statement: `$O$ est un point et $ABC$ un triangle tel que $OA = 2$ cm, $AB = 3$ cm ; l'aire du triangle $ABC$ est $5$ cm².

1. On considère l'homothétie de centre $O$ et de rapport $3$. On note $A'$, $B'$, $C'$ les images de $A$, $B$, $C$.
   a) Où se trouve $A'$ ? Calculer $OA'$.
   b) Calculer $A'B'$ et l'aire du triangle $A'B'C'$.
2. On considère maintenant l'homothétie de centre $O$ et de rapport $-2$. On note $A''$, $B''$, $C''$ les images de $A$, $B$, $C$.
   a) Où se trouve $A''$ ? Calculer $OA''$.
   b) Calculer $A''B''$ et l'aire du triangle $A''B''C''$.`,
      solution: `**1. a)** Le rapport est positif : $A'$ est sur la demi-droite $[OA)$, avec $OA' = 3 \\times OA = 6$ cm.
**b)** Une homothétie de rapport $k$ multiplie les longueurs par $|k|$ et les aires par $k^2$ : $A'B' = 3 \\times 3 = 9$ cm et $\\mathcal{A}' = 3^2 \\times 5 = 45$ cm².

**2. a)** Le rapport est négatif : $A''$ est sur la droite $(OA)$, **de l'autre côté de $O$** par rapport à $A$, avec $OA'' = |-2| \\times OA = 4$ cm.
**b)** $A''B'' = 2 \\times 3 = 6$ cm et $\\mathcal{A}'' = (-2)^2 \\times 5 = 20$ cm².`
    },
    {
      id: "G3-ds-02",
      title: "Retrouver le rapport",
      difficulty: 1,
      points: 4,
      statement: `Dans chaque cas, le point $A'$ est l'image du point $A$ par une homothétie de centre $O$. Déterminer le rapport de l'homothétie et préciser s'il s'agit d'un agrandissement ou d'une réduction.

1. $A' \\in [OA)$, $OA = 4$ cm et $OA' = 10$ cm.
2. $O$ est entre $A$ et $A'$, avec $OA = 6$ cm et $OA' = 3$ cm.
3. $A' \\in [OA]$, $OA = 5$ cm et $OA' = 2$ cm.
4. $O$ est le milieu de $[AA']$.`,
      solution: `Le rapport $k$ vérifie $|k| = \\dfrac{OA'}{OA}$ ; il est positif si $A$ et $A'$ sont du même côté de $O$, négatif sinon.

**1.** $\\dfrac{10}{4} = 2{,}5$ et $A'$ est sur $[OA)$ : $k = 2{,}5$. Comme $|k| > 1$, c'est un **agrandissement**.

**2.** $\\dfrac{3}{6} = 0{,}5$ et $O$ est entre $A$ et $A'$ : $k = -0{,}5$. Comme $|k| < 1$, c'est une **réduction** (avec renversement).

**3.** $\\dfrac{2}{5} = 0{,}4$ et $A'$ est sur $[OA]$ : $k = 0{,}4$, c'est une **réduction**.

**4.** $OA' = OA$ et $O$ est entre $A$ et $A'$ : $k = -1$. Les longueurs sont conservées ; c'est la **symétrie de centre $O$**.`
    },
    {
      id: "G3-ds-03",
      title: "La maquette de la maison",
      difficulty: 2,
      points: 5,
      statement: `Un architecte réalise la maquette d'une maison à l'échelle $\\dfrac{1}{50}$ : la maquette est une réduction de la maison réelle.

1. La façade de la maison mesure $12$ m de long. Quelle est sa longueur sur la maquette, en cm ?
2. Par quel nombre sont multipliées les aires lorsqu'on passe de la maison à la maquette ? et les volumes ?
3. Une pièce de la maison a une surface au sol de $24$ m². Quelle est sa surface sur la maquette, en cm² ?
4. Le volume intérieur de cette pièce est $60$ m³. Quel est le volume correspondant sur la maquette, en cm³ ?`,
      solution: `**1.** $12$ m $= 1\\,200$ cm ; sur la maquette : $\\dfrac{1\\,200}{50} = 24$ cm.

**2.** Dans une réduction de rapport $k = \\dfrac{1}{50}$, les aires sont multipliées par $k^2 = \\dfrac{1}{2\\,500}$ et les volumes par $k^3 = \\dfrac{1}{125\\,000}$.

**3.** $\\dfrac{24}{2\\,500} = 0{,}0096$ m². Comme $1$ m² $= 10\\,000$ cm² : $0{,}0096 \\times 10\\,000 = 96$ cm².

**4.** $\\dfrac{60}{125\\,000} = 0{,}00048$ m³. Comme $1$ m³ $= 1\\,000\\,000$ cm³ : $0{,}00048 \\times 1\\,000\\,000 = 480$ cm³.`
    },
    {
      id: "G3-ds-04",
      title: "Homothéties dans un repère",
      difficulty: 2,
      points: 5,
      statement: `Dans un repère orthonormé d'origine $O$, on considère les points $A(1\\,;\\,2)$, $B(3\\,;\\,1)$ et $C(2\\,;\\,4)$.

1. On admet que l'image d'un point $M(x\\,;\\,y)$ par l'homothétie de centre $O$ et de rapport $k$ est le point $M'(kx\\,;\\,ky)$. Donner les coordonnées des images $A'$, $B'$, $C'$ de $A$, $B$, $C$ par l'homothétie de centre $O$ et de rapport $2$.
2. Donner les coordonnées des images $A''$, $B''$, $C''$ par l'homothétie de centre $O$ et de rapport $-1$. Quelle transformation connue retrouve-t-on ?
3. Calculer $AB$ et $A'B'$ (valeurs exactes). Le résultat est-il cohérent avec le rapport $2$ ?`,
      solution: `**1.** On multiplie les coordonnées par $2$ : $A'(2\\,;\\,4)$, $B'(6\\,;\\,2)$, $C'(4\\,;\\,8)$.

**2.** On multiplie par $-1$ : $A''(-1\\,;\\,-2)$, $B''(-3\\,;\\,-1)$, $C''(-2\\,;\\,-4)$. L'homothétie de rapport $-1$ est la **symétrie centrale de centre $O$**.

**3.** Avec le théorème de Pythagore dans le repère orthonormé :
$AB^2 = (3 - 1)^2 + (1 - 2)^2 = 4 + 1 = 5$, donc $AB = \\sqrt{5}$.
$A'B'^2 = (6 - 2)^2 + (2 - 4)^2 = 16 + 4 = 20$, donc $A'B' = \\sqrt{20} = 2\\sqrt{5}$.
On a bien $A'B' = 2 \\times AB$ : les longueurs sont multipliées par $|k| = 2$.`
    },
    {
      id: "G3-ds-05",
      title: "Agrandir une pyramide",
      difficulty: 3,
      points: 5,
      statement: `Une pyramide a une base d'aire $36$ cm², une hauteur de $10$ cm et un volume de $120$ cm³. On l'agrandit à l'aide d'une homothétie de rapport $1{,}5$.

1. Calculer la hauteur de la pyramide agrandie.
2. Calculer l'aire de sa base, puis son volume, de deux manières différentes.
3. Un autre agrandissement multiplie le volume de la pyramide initiale par $8$. Par combien sont multipliées les longueurs ? les aires ?
4. Peut-on obtenir, par une homothétie, une pyramide dont la hauteur et l'aire de base sont toutes les deux multipliées par $2$ ? Justifier.`,
      solution: `**1.** Les longueurs sont multipliées par $1{,}5$ : $h' = 1{,}5 \\times 10 = 15$ cm.

**2.** Les aires sont multipliées par $1{,}5^2 = 2{,}25$ : $\\mathcal{B}' = 2{,}25 \\times 36 = 81$ cm².
Volume, méthode 1 (formule) : $V' = \\dfrac{1}{3} \\times 81 \\times 15 = 405$ cm³.
Méthode 2 (effet sur les volumes) : $V' = 1{,}5^3 \\times 120 = 3{,}375 \\times 120 = 405$ cm³.

**3.** Si $k^3 = 8$ avec $k > 0$, alors $k = 2$ (car $2^3 = 8$). Les longueurs sont multipliées par $2$ et les aires par $2^2 = 4$.

**4.** Non : si les longueurs (donc la hauteur) sont multipliées par $2$, les aires sont multipliées par $4$, pas par $2$. Une telle pyramide n'est pas l'image de la première par une homothétie.`
    },
    {
      id: "G3-ds-06",
      title: "Le projecteur de diapositives",
      difficulty: 3,
      points: 5,
      statement: `Un projecteur forme sur un écran l'image d'une diapositive rectangulaire de $24$ mm sur $36$ mm. On modélise la situation par une homothétie de centre $O$ (l'objectif) et de rapport $-50$ : l'image sur l'écran est l'image de la diapositive par cette homothétie.

1. Que signifie le signe « $-$ » du rapport pour l'image obtenue ?
2. Calculer les dimensions de l'image projetée, en mètres.
3. Par combien l'aire de la diapositive est-elle multipliée ? Calculer l'aire de l'image en m².
4. On recule le projecteur : le rapport devient $-60$. L'image tient-elle sur un écran de $1{,}5$ m sur $2$ m ? Justifier.`,
      solution: `**1.** Le rapport est négatif : la diapositive et son image sont de part et d'autre de $O$, et l'image est **renversée** (tournée d'un demi-tour).

**2.** Les longueurs sont multipliées par $|-50| = 50$ : $24 \\times 50 = 1\\,200$ mm $= 1{,}2$ m et $36 \\times 50 = 1\\,800$ mm $= 1{,}8$ m.

**3.** L'aire est multipliée par $(-50)^2 = 2\\,500$. Aire de l'image : $1{,}2 \\times 1{,}8 = 2{,}16$ m² (et l'on a bien $24 \\times 36 \\times 2\\,500 = 2\\,160\\,000$ mm² $= 2{,}16$ m²).

**4.** Avec le rapport $-60$ : $24 \\times 60 = 1\\,440$ mm $= 1{,}44$ m et $36 \\times 60 = 2\\,160$ mm $= 2{,}16$ m. Comme $2{,}16 > 2$, l'image **ne tient pas** sur l'écran.`
    },
    {
      id: "G3-ds-07",
      title: "Retrouver le centre d'une homothétie",
      difficulty: 4,
      points: 6,
      statement: `Dans un repère orthonormé, on donne $A(2\\,;\\,1)$, $B(1\\,;\\,2)$, $A'(4\\,;\\,3)$ et $B'(1\\,;\\,6)$. On sait que $A'$ et $B'$ sont les images de $A$ et $B$ par une même homothétie $h$ de centre $O$ inconnu.

1. Placer les points dans un repère (unité : $1$ cm).
2. Justifier que le centre $O$ appartient aux droites $(AA')$ et $(BB')$. En déduire graphiquement les coordonnées de $O$.
3. Calculer $OA$ et $OA'$, puis déterminer le rapport $k$ de l'homothétie (on précisera son signe).
4. Vérifier que $A'B' = |k| \\times AB$.
5. Calculer l'aire du triangle $OAB$, puis celle du triangle $OA'B'$.`,
      solution: `**1.** Figure à réaliser.

**2.** Par une homothétie de centre $O$, un point, son image et le centre sont alignés : $O \\in (AA')$ et $O \\in (BB')$. Les droites $(AA')$ et $(BB')$ ne sont pas parallèles, donc $O$ est leur point d'intersection. $(BB')$ est la droite verticale d'équation $x = 1$ ; la droite $(AA')$ « descend » d'une unité quand on recule d'une unité ($A(2\\,;\\,1)$, $A'(4\\,;\\,3)$), elle passe donc par $(1\\,;\\,0)$. Ainsi $O(1\\,;\\,0)$.

**3.** $OA^2 = (2 - 1)^2 + (1 - 0)^2 = 2$, donc $OA = \\sqrt{2}$ ; $OA'^2 = 3^2 + 3^2 = 18$, donc $OA' = \\sqrt{18} = 3\\sqrt{2}$. Ainsi $\\dfrac{OA'}{OA} = 3$. $A$ et $A'$ sont du même côté de $O$, donc $k = 3$.
(Contrôle avec $B$ : $OB = 2$ et $OB' = 6$.)

**4.** $AB^2 = 1 + 1 = 2$, donc $AB = \\sqrt{2}$ ; $A'B'^2 = 3^2 + 3^2 = 18$, donc $A'B' = 3\\sqrt{2} = 3 \\times AB$.

**5.** Dans le triangle $OAB$, on prend la base $[OB]$, verticale, de longueur $2$ ; la hauteur correspondante est la distance horizontale de $A$ à la droite $x = 1$, soit $1$. Aire : $\\dfrac{2 \\times 1}{2} = 1$ unité d'aire, soit $1$ cm². L'aire de l'image est multipliée par $k^2 = 9$ : $9$ cm².`
    },
    {
      id: "G3-ds-08",
      title: "Homothétie et théorème de Thalès",
      difficulty: 4,
      points: 5,
      statement: `$O$, $A$, $B$ sont trois points non alignés tels que $OA = 3$ cm, $OB = 4$ cm et $AB = 2$ cm. On note $A'$ et $B'$ les images de $A$ et $B$ par l'homothétie $h$ de centre $O$ et de rapport $2{,}5$.

1. Calculer $OA'$ et $OB'$. Où sont situés $A'$ et $B'$ ?
2. Démontrer, à l'aide de la réciproque du théorème de Thalès, que les droites $(AB)$ et $(A'B')$ sont parallèles.
3. Calculer $A'B'$ à l'aide du théorème de Thalès. Retrouver ce résultat avec une propriété des homothéties.
4. Reprendre les questions 1 et 3 avec l'homothétie de centre $O$ et de rapport $-2{,}5$. Quelle configuration de Thalès obtient-on alors ?`,
      solution: `**1.** $OA' = 2{,}5 \\times 3 = 7{,}5$ cm et $OB' = 2{,}5 \\times 4 = 10$ cm. Le rapport est positif : $A' \\in [OA)$ et $B' \\in [OB)$.

**2.** Les points $O, A, A'$ et $O, B, B'$ sont alignés dans le même ordre, et $\\dfrac{OA}{OA'} = \\dfrac{3}{7{,}5} = 0{,}4$, $\\dfrac{OB}{OB'} = \\dfrac{4}{10} = 0{,}4$. D'après la réciproque du théorème de Thalès, $(AB) \\parallel (A'B')$.

**3.** D'après le théorème de Thalès : $\\dfrac{AB}{A'B'} = 0{,}4$, donc $A'B' = \\dfrac{2}{0{,}4} = 5$ cm. Une homothétie de rapport $k$ multiplie les longueurs par $|k|$ : $A'B' = 2{,}5 \\times 2 = 5$ cm.

**4.** Avec le rapport $-2{,}5$ : $OA' = 7{,}5$ cm et $OB' = 10$ cm, mais $A'$ et $B'$ sont de l'autre côté de $O$ (sur les demi-droites opposées à $[OA)$ et $[OB)$). On a toujours $A'B' = |-2{,}5| \\times 2 = 5$ cm et $(A'B') \\parallel (AB)$ : c'est une **configuration papillon**.`
    },
    {
      id: "G3-ds-09",
      title: "Homothéties sur une droite graduée",
      difficulty: 1,
      points: 4,
      statement: `Sur une droite graduée en centimètres, le point $O$ a pour abscisse $0$ et le point $A$ a pour abscisse $3$.

1. Placer l'image $A_1$ de $A$ par l'homothétie de centre $O$ et de rapport $2$. Donner son abscisse.
2. Donner l'abscisse de l'image $A_2$ de $A$ par l'homothétie de centre $O$ et de rapport $-1{,}5$.
3. Le point $B$ a pour abscisse $-6$. Quel est le rapport de l'homothétie de centre $O$ qui transforme $A$ en $B$ ? S'agit-il d'un agrandissement ou d'une réduction ?
4. Une photo de $10$ cm sur $15$ cm est agrandie par une homothétie de rapport $1{,}6$. Calculer les dimensions et l'aire de la photo agrandie.`,
      solution: `**1.** Par l'homothétie de centre $O$ et de rapport $2$, $A_1$ est sur la demi-droite $[OA)$ avec $OA_1 = 2 \\times OA = 6$ : abscisse $6$.

**2.** Le rapport est négatif : $A_2$ est de l'autre côté de $O$ par rapport à $A$, avec $OA_2 = 1{,}5 \\times 3 = 4{,}5$ : abscisse $-4{,}5$.

**3.** $B$ est de l'autre côté de $O$ (rapport négatif) et $OB = 6 = 2 \\times OA$ : le rapport est $-2$. Comme $|-2| > 1$, c'est un agrandissement.

**4.** Les longueurs sont multipliées par $1{,}6$ : $10 \\times 1{,}6 = 16$ cm et $15 \\times 1{,}6 = 24$ cm.
Aire : $16 \\times 24 = 384$ cm². (On peut vérifier : l'aire initiale $150$ cm² est multipliée par $1{,}6^2 = 2{,}56$, et $150 \\times 2{,}56 = 384$.)`
    },
    {
      id: "G3-ds-10",
      title: "Du timbre à l'affiche",
      difficulty: 2,
      points: 5,
      statement: `Un timbre rectangulaire mesure $2{,}5$ cm de large et $3$ cm de haut. Pour une exposition, on en fait une affiche qui est un agrandissement du timbre ; l'affiche mesure $75$ cm de large.

1. Calculer le rapport de l'agrandissement.
2. Calculer la hauteur de l'affiche.
3. a) Calculer l'aire du timbre, puis celle de l'affiche.
   b) Par quel nombre l'aire a-t-elle été multipliée ? Expliquer ce résultat à l'aide du rapport.
4. Sur l'affiche, le visage dessiné occupe une surface de $1\\,350$ cm². Quelle surface occupait-il sur le timbre ?`,
      solution: `**1.** $k = \\dfrac{75}{2{,}5} = 30$.

**2.** Hauteur de l'affiche : $3 \\times 30 = 90$ cm.

**3. a)** Timbre : $2{,}5 \\times 3 = 7{,}5$ cm². Affiche : $75 \\times 90 = 6\\,750$ cm².

**b)** $\\dfrac{6\\,750}{7{,}5} = 900$. Dans un agrandissement de rapport $k$, les aires sont multipliées par $k^2$, et $30^2 = 900$.

**4.** Pour revenir au timbre, on divise l'aire par $900$ : $\\dfrac{1\\,350}{900} = 1{,}5$ cm².`
    },
    {
      id: "G3-ds-11",
      title: "Deux homothéties successives",
      difficulty: 3,
      points: 5,
      statement: `Un logo $\\mathcal{F}$ a une aire de $12$ cm². On lui applique l'homothétie $h_1$ de centre $O$ et de rapport $2$ : on obtient le logo $\\mathcal{F}_1$. Puis on applique à $\\mathcal{F}_1$ l'homothétie $h_2$ de même centre $O$ et de rapport $-1{,}5$ : on obtient $\\mathcal{F}_2$.

1. Un point $A$ du logo est tel que $OA = 4$ cm. On note $A_1$ son image par $h_1$, puis $A_2$ l'image de $A_1$ par $h_2$. Calculer $OA_1$ et $OA_2$. Les points $A$ et $A_2$ sont-ils du même côté de $O$ ?
2. En déduire qu'on passe directement de $\\mathcal{F}$ à $\\mathcal{F}_2$ par une homothétie de centre $O$ dont on donnera le rapport.
3. Calculer l'aire de $\\mathcal{F}_1$, puis celle de $\\mathcal{F}_2$.
4. Quel est le rapport de l'homothétie de centre $O$ qui transforme $\\mathcal{F}_2$ en $\\mathcal{F}$ ?`,
      solution: `**1.** $h_1$ a un rapport positif : $A_1$ est sur $[OA)$ et $OA_1 = 2 \\times 4 = 8$ cm.
$h_2$ a un rapport négatif : $A_2$ est de l'autre côté de $O$ par rapport à $A_1$, et $OA_2 = 1{,}5 \\times 8 = 12$ cm.
$A_1$ est du même côté que $A$, et $A_2$ du côté opposé : $A$ et $A_2$ ne sont **pas** du même côté de $O$.

**2.** $A_2$ est à l'opposé de $A$ par rapport à $O$, avec $OA_2 = 12 = 3 \\times OA$. C'est vrai pour tout point du logo, car $2 \\times (-1{,}5) = -3$ : on passe de $\\mathcal{F}$ à $\\mathcal{F}_2$ par l'homothétie de centre $O$ et de rapport $-3$.

**3.** Les aires sont multipliées par le carré du rapport :
$\\mathcal{A}_1 = 12 \\times 2^2 = 48$ cm² et $\\mathcal{A}_2 = 48 \\times (-1{,}5)^2 = 48 \\times 2{,}25 = 108$ cm².
(Vérification : $12 \\times (-3)^2 = 108$.)

**4.** Il faut revenir du côté de départ et diviser les distances à $O$ par $3$ : le rapport est $-\\dfrac{1}{3}$. En effet, $(-3) \\times \\left(-\\dfrac{1}{3}\\right) = 1$.`
    },
    {
      id: "G3-ds-12",
      title: "Le verre à moitié plein ?",
      difficulty: 4,
      points: 6,
      statement: `Un verre a la forme d'un cône de révolution, pointe en bas, de hauteur $12$ cm et dont l'ouverture est un disque de rayon $4$ cm. On rappelle que le volume d'un cône est $V = \\dfrac{1}{3} \\times \\pi \\times r^2 \\times h$.

1. Calculer le volume du verre : valeur exacte, puis arrondi au cm³.
2. On verse du sirop jusqu'à $6$ cm de hauteur. Le liquide forme un petit cône, réduction du verre.
   a) Quel est le rapport de cette réduction ?
   b) Calculer le volume de sirop : valeur exacte, puis arrondi au cm³.
   c) Zoé affirme : « Rempli à mi-hauteur, le verre est à moitié plein. » A-t-elle raison ? Quelle fraction du verre est remplie ?
3. On remplit maintenant le verre jusqu'à $9{,}5$ cm de hauteur. Montrer que le verre est alors rempli à environ la moitié de son volume.`,
      solution: `**1.** $V = \\dfrac{1}{3} \\times \\pi \\times 4^2 \\times 12 = 64\\pi$ cm³ $\\approx 201$ cm³.

**2. a)** Le petit cône a une hauteur de $6$ cm contre $12$ cm : le rapport de réduction est $k = \\dfrac{6}{12} = \\dfrac{1}{2}$.

**b)** Dans une réduction de rapport $k$, les volumes sont multipliés par $k^3$ :
$V_{\\text{sirop}} = 64\\pi \\times \\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{64\\pi}{8} = 8\\pi$ cm³ $\\approx 25$ cm³.

**c)** Zoé a tort : le verre n'est rempli qu'au huitième de son volume ($\\dfrac{8\\pi}{64\\pi} = \\dfrac{1}{8}$), car le verre est bien plus étroit en bas.

**3.** Le liquide forme une réduction de rapport $k = \\dfrac{9{,}5}{12}$. Son volume vaut $64\\pi \\times \\left(\\dfrac{9{,}5}{12}\\right)^3 \\approx 64\\pi \\times 0{,}496 \\approx 99{,}8$ cm³.
La moitié du volume du verre vaut $32\\pi \\approx 100{,}5$ cm³ : le verre est bien rempli à environ la moitié ($k^3 \\approx 0{,}496 \\approx 0{,}5$).`
    }
  ],
  "G4": [
    {
      id: "G4-ds-01",
      title: "Aire et volume d'une boule",
      difficulty: 1,
      points: 4,
      statement: `On rappelle : l'aire d'une sphère de rayon $R$ est $4\\pi R^2$ et le volume d'une boule de rayon $R$ est $\\dfrac{4}{3}\\pi R^3$.

1. Un ballon a la forme d'une sphère de rayon $6$ cm. Calculer son aire : valeur exacte, puis arrondi au cm².
2. Calculer le volume d'air contenu dans ce ballon : valeur exacte, puis arrondi au cm³.
3. Une bille a un diamètre de $6$ cm. Calculer son volume exact, puis l'arrondir au cm³.
4. Combien de fois le volume du ballon est-il plus grand que celui de la bille ? Expliquer ce résultat.`,
      solution: `**1.** $\\mathcal{A} = 4\\pi \\times 6^2 = 144\\pi$ cm² $\\approx 452$ cm².

**2.** $V = \\dfrac{4}{3}\\pi \\times 6^3 = \\dfrac{4}{3}\\pi \\times 216 = 288\\pi$ cm³ $\\approx 905$ cm³.

**3.** Le rayon de la bille est $\\dfrac{6}{2} = 3$ cm : $V' = \\dfrac{4}{3}\\pi \\times 3^3 = 36\\pi$ cm³ $\\approx 113$ cm³.

**4.** $\\dfrac{288\\pi}{36\\pi} = 8$. Le ballon est un agrandissement de la bille de rapport $2$ (rayon $6$ cm contre $3$ cm) : les volumes sont multipliés par $2^3 = 8$.`
    },
    {
      id: "G4-ds-02",
      title: "Se repérer sur le globe",
      difficulty: 1,
      points: 4,
      statement: `On repère un point de la surface de la Terre par sa latitude (Nord ou Sud) et sa longitude (Est ou Ouest). On donne, arrondies au dixième de degré, les coordonnées de quelques villes :
- Paris : ($48{,}9^\\circ$ N ; $2{,}3^\\circ$ E) ;
- Barcelone : ($41{,}4^\\circ$ N ; $2{,}2^\\circ$ E) ;
- Quito : ($0{,}2^\\circ$ S ; $78{,}5^\\circ$ O).

1. Rappeler ce que sont l'équateur et le méridien de Greenwich, et donner les coordonnées du point situé à leur intersection.
2. Dans quels hémisphères (Nord/Sud, Est/Ouest) se trouve Quito ? Pourquoi peut-on dire que Quito est presque sur l'équateur ?
3. Que peut-on dire de la position de Paris et de Barcelone l'une par rapport à l'autre ?
4. Donner les coordonnées du point diamétralement opposé (antipode) au point de coordonnées ($30^\\circ$ N ; $40^\\circ$ E).`,
      solution: `**1.** L'équateur est le cercle de latitude $0^\\circ$, à égale distance des pôles ; le méridien de Greenwich est le demi-cercle de longitude $0^\\circ$ allant d'un pôle à l'autre. Leur intersection a pour coordonnées ($0^\\circ$ ; $0^\\circ$).

**2.** Quito est dans l'hémisphère **Sud** (latitude S) et à l'**Ouest** du méridien de Greenwich. Sa latitude ($0{,}2^\\circ$) est très proche de $0^\\circ$ : la ville est presque sur l'équateur.

**3.** Leurs longitudes sont presque égales ($2{,}3^\\circ$ E et $2{,}2^\\circ$ E) : les deux villes sont quasiment sur le même méridien, Barcelone étant au sud de Paris (latitude plus petite).

**4.** L'antipode est symétrique par rapport au centre de la Terre : la latitude change d'hémisphère ($30^\\circ$ S) et la longitude devient $180^\\circ - 40^\\circ = 140^\\circ$ de l'autre côté, soit ($30^\\circ$ S ; $140^\\circ$ O).`
    },
    {
      id: "G4-ds-03",
      title: "Section d'une boule",
      difficulty: 2,
      points: 5,
      statement: `Une boule de centre $O$ et de rayon $10$ cm est coupée par un plan situé à $6$ cm du centre. La section est un disque de centre $H$ ; on note $M$ un point du cercle qui borde cette section. On admet que le triangle $OHM$ est rectangle en $H$.

1. Quelle est la longueur $OM$ ? Justifier.
2. Calculer le rayon $HM$ de la section.
3. Calculer l'aire de cette section : valeur exacte, puis arrondi au cm².
4. À quelle distance du centre faut-il couper la boule pour que la section ait un rayon de $5$ cm ? Arrondir au millimètre.`,
      solution: `**1.** $M$ appartient à la sphère de centre $O$ et de rayon $10$ cm, donc $OM = 10$ cm.

**2.** Le triangle $OHM$ est rectangle en $H$ avec $OH = 6$ cm. D'après le théorème de Pythagore :
$$HM^2 = OM^2 - OH^2 = 100 - 36 = 64, \\quad HM = 8 \\text{ cm}.$$

**3.** $\\mathcal{A} = \\pi \\times 8^2 = 64\\pi$ cm² $\\approx 201$ cm².

**4.** On cherche $OH$ avec $HM = 5$ cm : $OH^2 = 100 - 25 = 75$, donc $OH = \\sqrt{75} \\approx 8{,}7$ cm.`
    },
    {
      id: "G4-ds-04",
      title: "De Paris à Barcelone",
      difficulty: 2,
      points: 5,
      statement: `On assimile la Terre à une boule de centre $O$ dont la circonférence de l'équateur (et de chaque méridien complet) vaut $40\\,000$ km. Paris a pour latitude $48{,}86^\\circ$ N et Barcelone $41{,}39^\\circ$ N ; on considère que les deux villes sont sur le même méridien.

1. Quelle est la mesure de l'angle $\\widehat{POB}$, où $P$ et $B$ représentent Paris et Barcelone ?
2. La longueur d'un arc de cercle est proportionnelle à l'angle correspondant. Calculer la distance entre les deux villes, mesurée le long du méridien. Arrondir au kilomètre.
3. Calculer le rayon de la Terre, arrondi au kilomètre.
4. Un avion vole de Paris à Barcelone à $800$ km/h. Combien de temps dure le vol (on suppose qu'il suit le méridien) ? Arrondir à la minute.`,
      solution: `**1.** Les deux villes sont dans l'hémisphère Nord, sur le même méridien : $\\widehat{POB} = 48{,}86^\\circ - 41{,}39^\\circ = 7{,}47^\\circ$.

**2.** Un tour complet ($360^\\circ$) correspond à $40\\,000$ km. Par proportionnalité :
$$d = \\frac{40\\,000 \\times 7{,}47}{360} \\approx 830 \\text{ km}.$$

**3.** $2\\pi R = 40\\,000$, donc $R = \\dfrac{40\\,000}{2\\pi} \\approx 6\\,366$ km.

**4.** $t = \\dfrac{d}{v} = \\dfrac{830}{800} \\approx 1{,}0375$ h, soit $1$ h et $0{,}0375 \\times 60 \\approx 2$ min : environ $1$ h $02$ min.`
    },
    {
      id: "G4-ds-05",
      title: "La boule dans le cylindre",
      difficulty: 3,
      points: 5,
      statement: `Une boule de rayon $5$ cm est placée dans une boîte cylindrique dans laquelle elle s'ajuste exactement : le cylindre a le même rayon que la boule et sa hauteur est égale au diamètre de la boule.

1. Calculer le volume exact de la boule, puis celui du cylindre.
2. Calculer le volume d'espace vide dans la boîte, arrondi au cm³.
3. Montrer que le volume de la boule représente les $\\dfrac{2}{3}$ du volume du cylindre.
4. Ce résultat dépend-il du rayon choisi ? Justifier avec un rayon $R$ quelconque.`,
      solution: `**1.** $V_{\\text{boule}} = \\dfrac{4}{3}\\pi \\times 5^3 = \\dfrac{500\\pi}{3}$ cm³ $\\approx 523{,}6$ cm³.
Le cylindre a pour rayon $5$ cm et pour hauteur $10$ cm : $V_{\\text{cyl}} = \\pi \\times 5^2 \\times 10 = 250\\pi$ cm³ $\\approx 785{,}4$ cm³.

**2.** $V_{\\text{vide}} = 250\\pi - \\dfrac{500\\pi}{3} = \\dfrac{250\\pi}{3}$ cm³ $\\approx 262$ cm³.

**3.** $\\dfrac{V_{\\text{boule}}}{V_{\\text{cyl}}} = \\dfrac{500\\pi}{3} \\times \\dfrac{1}{250\\pi} = \\dfrac{500}{750} = \\dfrac{2}{3}$.

**4.** Avec un rayon $R$ : $V_{\\text{boule}} = \\dfrac{4}{3}\\pi R^3$ et $V_{\\text{cyl}} = \\pi R^2 \\times 2R = 2\\pi R^3$. Le rapport vaut $\\dfrac{4}{3} \\div 2 = \\dfrac{2}{3}$ quel que soit $R$ : le résultat ne dépend pas du rayon (propriété découverte par Archimède).`
    },
    {
      id: "G4-ds-06",
      title: "La Terre en chiffres",
      difficulty: 3,
      points: 5,
      statement: `On assimile la Terre à une boule de rayon $6\\,371$ km.

1. Calculer l'aire de la surface de la Terre. Donner l'écriture scientifique du résultat, arrondie au centième.
2. Les océans recouvrent environ $71\\,\\%$ de cette surface. Calculer l'aire des océans, en km².
3. Calculer le volume de la Terre en km³, en écriture scientifique arrondie au centième.
4. La Lune a un rayon d'environ $1\\,737$ km. Combien de fois, environ, le volume de la Terre est-il plus grand que celui de la Lune ?`,
      solution: `**1.** $\\mathcal{A} = 4\\pi \\times 6\\,371^2 \\approx 510\\,064\\,472$ km² $\\approx 5{,}10 \\times 10^8$ km².

**2.** $0{,}71 \\times 5{,}10 \\times 10^8 \\approx 3{,}62 \\times 10^8$ km² (environ $362$ millions de km²).

**3.** $V = \\dfrac{4}{3}\\pi \\times 6\\,371^3 \\approx 1{,}08 \\times 10^{12}$ km³.

**4.** Le rapport des volumes de deux boules est le cube du rapport des rayons : $\\left(\\dfrac{6\\,371}{1\\,737}\\right)^3 \\approx 3{,}668^3 \\approx 49$. Le volume de la Terre est environ $49$ fois celui de la Lune.`
    },
    {
      id: "G4-ds-07",
      title: "Voyager le long d'un parallèle",
      difficulty: 4,
      points: 6,
      statement: `On assimile la Terre à une boule de centre $O$ et de rayon $R$, dont l'équateur mesure $40\\,000$ km. Le parallèle de latitude $60^\\circ$ N est un cercle de centre $K$ (situé sur l'axe des pôles) ; on note $M$ un point de ce parallèle et $E$ un point de l'équateur situé sur le même méridien que $M$. On a donc $\\widehat{EOM} = 60^\\circ$ et le triangle $OKM$ est rectangle en $K$, avec $\\widehat{KMO} = \\widehat{EOM}$ (angles alternes-internes, car $(KM)$ est parallèle au plan de l'équateur).

1. Justifier que $KM = R \\times \\cos 60^\\circ$, puis que $KM = \\dfrac{R}{2}$.
2. En déduire la longueur du parallèle $60^\\circ$ N.
3. Deux villes $V_1$ ($60^\\circ$ N ; $10^\\circ$ E) et $V_2$ ($60^\\circ$ N ; $30^\\circ$ E) sont situées sur ce parallèle. Calculer la distance qui les sépare le long du parallèle, arrondie au kilomètre.
4. Quelle serait la distance, le long de l'équateur, entre deux points de longitudes $10^\\circ$ E et $30^\\circ$ E ? Comparer et expliquer.`,
      solution: `**1.** Le triangle $OKM$ est rectangle en $K$, d'hypoténuse $[OM]$ avec $OM = R$. L'angle $\\widehat{KMO}$ mesure $60^\\circ$ et $[KM]$ est son côté adjacent : $\\cos 60^\\circ = \\dfrac{KM}{OM}$, donc $KM = R \\cos 60^\\circ = \\dfrac{R}{2}$ (car $\\cos 60^\\circ = 0{,}5$).

**2.** Le parallèle est un cercle de rayon $\\dfrac{R}{2}$ : sa longueur est $2\\pi \\times \\dfrac{R}{2} = \\dfrac{1}{2} \\times 2\\pi R = \\dfrac{40\\,000}{2} = 20\\,000$ km.

**3.** L'écart de longitude est $30^\\circ - 10^\\circ = 20^\\circ$. Par proportionnalité sur le parallèle :
$$d = \\frac{20\\,000 \\times 20}{360} \\approx 1\\,111 \\text{ km}.$$

**4.** Sur l'équateur : $\\dfrac{40\\,000 \\times 20}{360} \\approx 2\\,222$ km, soit le double. Les méridiens se rapprochent quand on s'éloigne de l'équateur : à $60^\\circ$ de latitude, le parallèle est deux fois plus court que l'équateur.`
    },
    {
      id: "G4-ds-08",
      title: "Refondre un cylindre en billes",
      difficulty: 4,
      points: 5,
      statement: `Un cylindre de plomb a un rayon de $3$ cm et une hauteur de $4$ cm. On le fond (sans perte de matière) pour fabriquer des billes.

1. Calculer le volume exact du cylindre.
2. On fabrique des billes de rayon $1$ cm. Combien de billes peut-on obtenir ?
3. On fabrique plutôt une seule grosse boule. Déterminer son rayon.
4. Comparer l'aire totale du cylindre (bases comprises), l'aire de la grosse boule et l'aire totale des petites billes (valeurs exactes en fonction de $\\pi$). Quelle forme est la plus « économe » en surface pour un même volume ?`,
      solution: `**1.** $V = \\pi \\times 3^2 \\times 4 = 36\\pi$ cm³.

**2.** Volume d'une bille : $\\dfrac{4}{3}\\pi \\times 1^3 = \\dfrac{4\\pi}{3}$ cm³. Nombre de billes : $36\\pi \\div \\dfrac{4\\pi}{3} = 36 \\times \\dfrac{3}{4} = 27$ billes.

**3.** On cherche $R$ tel que $\\dfrac{4}{3}\\pi R^3 = 36\\pi$, soit $R^3 = 27$, donc $R = 3$ cm (car $3^3 = 27$).

**4.**
- Cylindre : deux disques et une surface latérale, $2 \\times \\pi \\times 3^2 + 2\\pi \\times 3 \\times 4 = 18\\pi + 24\\pi = 42\\pi$ cm² ;
- grosse boule : $4\\pi \\times 3^2 = 36\\pi$ cm² ;
- $27$ billes : $27 \\times 4\\pi \\times 1^2 = 108\\pi$ cm².
À volume égal, c'est la boule qui a la plus petite surface : $36\\pi < 42\\pi < 108\\pi$.`
    },
    {
      id: "G4-ds-09",
      title: "Boules de glace et ballon",
      difficulty: 1,
      points: 4,
      statement: `On rappelle : l'aire d'une sphère de rayon $R$ est $4\\pi R^2$ et le volume d'une boule de rayon $R$ est $\\dfrac{4}{3}\\pi R^3$.

1. Une boule de glace est assimilée à une boule de rayon $3$ cm. Calculer son volume : valeur exacte, puis arrondi au cm³.
2. Un bac contient $2$ L de glace. Combien de boules complètes peut-on servir avec ce bac ? (On rappelle que $1$ L $= 1\\,000$ cm³.)
3. Un ballon de basket a un diamètre de $22$ cm. Calculer l'aire de cuir nécessaire pour le recouvrir : valeur exacte, puis arrondi au cm².`,
      solution: `**1.** $V = \\dfrac{4}{3}\\pi \\times 3^3 = \\dfrac{4}{3}\\pi \\times 27 = 36\\pi$ cm³ $\\approx 113$ cm³.

**2.** $2$ L $= 2\\,000$ cm³ et $\\dfrac{2\\,000}{36\\pi} \\approx 17{,}7$. On peut servir $17$ boules complètes.

**3.** Le rayon du ballon est $\\dfrac{22}{2} = 11$ cm. $\\mathcal{A} = 4\\pi \\times 11^2 = 484\\pi$ cm² $\\approx 1\\,521$ cm².`
    },
    {
      id: "G4-ds-10",
      title: "Le dôme à repeindre",
      difficulty: 2,
      points: 5,
      statement: `Le toit d'un observatoire est un dôme en forme de demi-sphère de rayon $15$ m. On rappelle que l'aire d'une sphère de rayon $R$ est $4\\pi R^2$ et le volume d'une boule de rayon $R$ est $\\dfrac{4}{3}\\pi R^3$.

1. Montrer que l'aire extérieure du dôme est égale à $450\\pi$ m², puis en donner un arrondi au m².
2. Un litre de peinture couvre $8$ m². La peinture est vendue en pots de $10$ L à $65$ €. Combien de pots faut-il acheter pour une couche, et quel est le coût ?
3. Calculer le volume d'air situé sous le dôme : valeur exacte, puis arrondi au m³.`,
      solution: `**1.** Le dôme est une demi-sphère : $\\mathcal{A} = \\dfrac{4\\pi \\times 15^2}{2} = \\dfrac{4\\pi \\times 225}{2} = 450\\pi$ m² $\\approx 1\\,414$ m².

**2.** Quantité de peinture : $\\dfrac{450\\pi}{8} \\approx 176{,}7$ L. Il faut $\\dfrac{176{,}7}{10} \\approx 17{,}7$ pots, donc $18$ pots (on ne peut pas acheter une partie de pot).
Coût : $18 \\times 65 = 1\\,170$ €.

**3.** C'est la moitié d'une boule : $V = \\dfrac{1}{2} \\times \\dfrac{4}{3}\\pi \\times 15^3 = \\dfrac{2}{3}\\pi \\times 3\\,375 = 2\\,250\\pi$ m³ $\\approx 7\\,069$ m³.`
    },
    {
      id: "G4-ds-11",
      title: "Des billes dans un verre d'eau",
      difficulty: 3,
      points: 5,
      statement: `Un verre cylindrique a un rayon intérieur de $4$ cm. Il contient de l'eau sur une hauteur de $10$ cm. On y plonge des billes de rayon $1{,}2$ cm, qui coulent au fond et sont entièrement recouvertes d'eau. On rappelle que le volume d'une boule de rayon $R$ est $\\dfrac{4}{3}\\pi R^3$ et que celui d'un cylindre est $\\pi r^2 h$.

1. Montrer que le volume d'une bille est égal à $2{,}304\\pi$ cm³.
2. On plonge $5$ billes. De combien de centimètres le niveau de l'eau monte-t-il ?
3. Combien de billes faut-il plonger, au minimum, pour que le niveau de l'eau monte d'au moins $3$ cm ?
4. Le verre mesure $15$ cm de haut. Peut-on plonger $40$ billes sans que l'eau déborde ? Justifier.`,
      solution: `**1.** $V_{\\text{bille}} = \\dfrac{4}{3}\\pi \\times 1{,}2^3 = \\dfrac{4}{3}\\pi \\times 1{,}728 = 2{,}304\\pi$ cm³.

**2.** Les $5$ billes déplacent un volume d'eau de $5 \\times 2{,}304\\pi = 11{,}52\\pi$ cm³. Ce volume forme dans le verre un cylindre de rayon $4$ cm et de hauteur $h$ :
$\\pi \\times 4^2 \\times h = 11{,}52\\pi$, donc $h = \\dfrac{11{,}52}{16} = 0{,}72$ cm. Le niveau monte de $0{,}72$ cm.

**3.** Une montée de $3$ cm correspond à un volume de $\\pi \\times 16 \\times 3 = 48\\pi$ cm³. Il faut $n \\times 2{,}304\\pi \\geqslant 48\\pi$, soit $n \\geqslant \\dfrac{48}{2{,}304} \\approx 20{,}8$. Il faut au minimum $21$ billes.

**4.** Chaque bille fait monter le niveau de $\\dfrac{0{,}72}{5} = 0{,}144$ cm. Avec $40$ billes : $40 \\times 0{,}144 = 5{,}76$ cm, et le niveau atteint $10 + 5{,}76 = 15{,}76$ cm $> 15$ cm. L'eau déborde : ce n'est pas possible.`
    },
    {
      id: "G4-ds-12",
      title: "Le ballon que l'on gonfle",
      difficulty: 4,
      points: 6,
      statement: `On gonfle un ballon sphérique : son rayon passe de $10$ cm à $12$ cm.

1. Calculer l'aire de la sphère et le volume de la boule avant et après le gonflage (valeurs exactes en fonction de $\\pi$).
2. a) Par quel nombre l'aire a-t-elle été multipliée ? Le volume ?
   b) Exprimer ces évolutions en pourcentages d'augmentation.
3. Sami affirme : « Puisque l'aire a augmenté de $44$ %, le volume a lui aussi augmenté de $44$ %. » Expliquer son erreur.
4. On note $R$ le rayon d'une boule. Démontrer que si l'on multiplie le rayon par $2$, l'aire de la sphère est multipliée par $4$ et le volume de la boule par $8$.
5. Vérifier qu'un ballon de rayon $12{,}6$ cm a un volume à peu près double de celui du ballon de rayon $10$ cm.`,
      solution: `**1.** Avant : $\\mathcal{A} = 4\\pi \\times 10^2 = 400\\pi$ cm² et $V = \\dfrac{4}{3}\\pi \\times 1\\,000 = \\dfrac{4\\,000\\pi}{3}$ cm³.
Après : $\\mathcal{A}' = 4\\pi \\times 12^2 = 576\\pi$ cm² et $V' = \\dfrac{4}{3}\\pi \\times 1\\,728 = 2\\,304\\pi$ cm³.

**2. a)** Le ballon gonflé est un agrandissement de rapport $\\dfrac{12}{10} = 1{,}2$ : l'aire est multipliée par $1{,}2^2 = 1{,}44$ (en effet $\\dfrac{576\\pi}{400\\pi} = 1{,}44$) et le volume par $1{,}2^3 = 1{,}728$.

**b)** Multiplier par $1{,}44$ revient à augmenter de $44$ % ; multiplier par $1{,}728$ revient à augmenter de $72{,}8$ %.

**3.** Les aires sont multipliées par $k^2$ et les volumes par $k^3$ : ils n'évoluent pas de la même façon. Ici le volume augmente de $72{,}8$ %, et non de $44$ %.

**4.** Avec un rayon $2R$ : $4\\pi (2R)^2 = 4\\pi \\times 4R^2 = 4 \\times (4\\pi R^2)$ et $\\dfrac{4}{3}\\pi (2R)^3 = \\dfrac{4}{3}\\pi \\times 8R^3 = 8 \\times \\dfrac{4}{3}\\pi R^3$.
L'aire est bien multipliée par $4$ et le volume par $8$.

**5.** Le rapport d'agrandissement est $\\dfrac{12{,}6}{10} = 1{,}26$, donc le volume est multiplié par $1{,}26^3 = 2{,}000\\,376 \\approx 2$ : le volume est à peu près doublé.`
    }
  ],
  "G5": [
    {
      id: "G5-ds-01",
      title: "Volumes des solides usuels",
      difficulty: 1,
      points: 4,
      statement: `Calculer le volume de chacun des solides suivants ; donner la valeur exacte puis, si nécessaire, l'arrondi au cm³.

1. Un pavé droit de dimensions $5$ cm, $4$ cm et $3$ cm.
2. Un cylindre de révolution de rayon $3$ cm et de hauteur $10$ cm.
3. Une pyramide de hauteur $5$ cm dont la base est un carré de côté $6$ cm.
4. Un cône de révolution de rayon $4$ cm et de hauteur $9$ cm.`,
      solution: `**1.** $V = L \\times \\ell \\times h = 5 \\times 4 \\times 3 = 60$ cm³.

**2.** $V = \\pi r^2 h = \\pi \\times 3^2 \\times 10 = 90\\pi$ cm³ $\\approx 283$ cm³.

**3.** $V = \\dfrac{1}{3} \\times \\mathcal{B} \\times h = \\dfrac{1}{3} \\times 6^2 \\times 5 = \\dfrac{180}{3} = 60$ cm³.

**4.** $V = \\dfrac{1}{3}\\pi r^2 h = \\dfrac{1}{3} \\times \\pi \\times 16 \\times 9 = 48\\pi$ cm³ $\\approx 151$ cm³.`
    },
    {
      id: "G5-ds-02",
      title: "Nature des sections planes",
      difficulty: 1,
      points: 4,
      statement: `1. Donner la nature de la section :
   a) d'un cylindre de révolution par un plan parallèle à ses bases ;
   b) d'un cylindre de révolution par un plan parallèle à son axe ;
   c) d'un cône de révolution par un plan parallèle à sa base ;
   d) d'une pyramide à base carrée par un plan parallèle à sa base.
2. $ABCDEFGH$ est un pavé droit tel que $AB = 8$ cm, $BC = 5$ cm et $AE = 4$ cm ($ABCD$ est une face, $E$, $F$, $G$, $H$ sont au-dessus de $A$, $B$, $C$, $D$). On le coupe par un plan parallèle à la face $ABFE$. Quelle est la nature de la section ? Donner ses dimensions.
3. On coupe maintenant le pavé par le plan contenant les arêtes $[AE]$ et $[CG]$. Quelle est la nature de la section ? Calculer ses dimensions (au millimètre près).`,
      solution: `**1. a)** Un disque de même rayon que les bases. **b)** Un rectangle. **c)** Un disque, réduction de la base. **d)** Un carré, réduction de la base.

**2.** La section d'un pavé droit par un plan parallèle à une face est un rectangle de mêmes dimensions que cette face : un rectangle de $8$ cm sur $4$ cm.

**3.** La section est le rectangle $ACGE$ (les arêtes $[AE]$ et $[CG]$ sont parallèles, de même longueur, et perpendiculaires à la face $ABCD$). Ses dimensions sont $AE = 4$ cm et $AC$. Le triangle $ABC$ est rectangle en $B$ ; d'après le théorème de Pythagore, $AC^2 = 8^2 + 5^2 = 89$, donc $AC = \\sqrt{89} \\approx 9{,}4$ cm. La section est un rectangle d'environ $9{,}4$ cm sur $4$ cm.`
    },
    {
      id: "G5-ds-03",
      title: "Couper un cône",
      difficulty: 2,
      points: 5,
      statement: `Un cône de révolution a pour sommet $S$, pour hauteur $SO = 12$ cm et pour rayon de base $OA = 5$ cm. On le coupe par un plan parallèle à sa base, passant par le point $O'$ de $[SO]$ tel que $SO' = 3$ cm. On obtient un petit cône de sommet $S$.

1. Calculer la longueur $SA$ d'une génératrice du grand cône.
2. Calculer le volume exact du grand cône, puis l'arrondir au cm³.
3. Le petit cône est une réduction du grand cône. Quel est le coefficient de réduction ? En déduire le rayon de la section.
4. Calculer le volume du petit cône, arrondi au dixième de cm³.`,
      solution: `**1.** Le triangle $SOA$ est rectangle en $O$ ; d'après le théorème de Pythagore, $SA^2 = 12^2 + 5^2 = 169$, donc $SA = 13$ cm.

**2.** $V = \\dfrac{1}{3}\\pi \\times 5^2 \\times 12 = 100\\pi$ cm³ $\\approx 314$ cm³.

**3.** $k = \\dfrac{SO'}{SO} = \\dfrac{3}{12} = \\dfrac{1}{4}$. Les longueurs sont multipliées par $\\dfrac{1}{4}$ : le rayon de la section est $\\dfrac{5}{4} = 1{,}25$ cm.

**4.** Les volumes sont multipliés par $k^3 = \\dfrac{1}{64}$ : $V' = \\dfrac{100\\pi}{64} \\approx 4{,}9$ cm³.`
    },
    {
      id: "G5-ds-04",
      title: "Se repérer dans un pavé droit",
      difficulty: 2,
      points: 5,
      statement: `$ABCDEFGH$ est un pavé droit : $ABCD$ est la face du dessous et $E$, $F$, $G$, $H$ sont respectivement au-dessus de $A$, $B$, $C$, $D$. On a $AB = 6$, $AD = 4$ et $AE = 3$ (en cm). On repère les points dans le repère d'origine $A$ dont les axes sont dirigés par $[AB)$, $[AD)$ et $[AE)$, avec $1$ cm pour unité : ainsi $B(6\\,;\\,0\\,;\\,0)$.

1. Donner les coordonnées des points $D$, $E$, $C$, $F$, $G$ et $H$.
2. On note $I$ le milieu de l'arête $[FG]$. Donner ses coordonnées.
3. Calculer la longueur $AC$, puis la longueur $AG$ de la grande diagonale du pavé, arrondie au millimètre.`,
      solution: `**1.** $D(0\\,;\\,4\\,;\\,0)$, $E(0\\,;\\,0\\,;\\,3)$, $C(6\\,;\\,4\\,;\\,0)$, $F(6\\,;\\,0\\,;\\,3)$, $G(6\\,;\\,4\\,;\\,3)$ et $H(0\\,;\\,4\\,;\\,3)$.

**2.** $F(6\\,;\\,0\\,;\\,3)$ et $G(6\\,;\\,4\\,;\\,3)$ : le milieu a pour coordonnées les moyennes, $I(6\\,;\\,2\\,;\\,3)$.

**3.** Le triangle $ABC$ est rectangle en $B$ : $AC^2 = 6^2 + 4^2 = 52$, donc $AC = \\sqrt{52}$ cm.
L'arête $[CG]$ est perpendiculaire à la face $ABCD$, donc le triangle $ACG$ est rectangle en $C$ : $AG^2 = AC^2 + CG^2 = 52 + 9 = 61$, donc $AG = \\sqrt{61} \\approx 7{,}8$ cm.`
    },
    {
      id: "G5-ds-05",
      title: "L'abat-jour",
      difficulty: 3,
      points: 5,
      statement: `Un abat-jour a la forme d'un tronc de pyramide. Il est obtenu à partir d'une pyramide régulière $SABCD$ à base carrée de côté $12$ cm et de hauteur $SO = 15$ cm, que l'on coupe par un plan parallèle à la base passant par le point $O'$ de $[SO]$ tel que $SO' = 10$ cm. On enlève la petite pyramide du haut.

1. Calculer le volume de la pyramide $SABCD$.
2. Quel est le coefficient de réduction de la petite pyramide ? Quelle est la nature de la section et quelles sont ses dimensions ?
3. Calculer le volume de la petite pyramide, puis celui de l'abat-jour (arrondis au cm³).
4. Quelle fraction du volume de la grande pyramide l'abat-jour représente-t-il ?`,
      solution: `**1.** $V = \\dfrac{1}{3} \\times 12^2 \\times 15 = \\dfrac{1}{3} \\times 144 \\times 15 = 720$ cm³.

**2.** $k = \\dfrac{SO'}{SO} = \\dfrac{10}{15} = \\dfrac{2}{3}$. La section d'une pyramide par un plan parallèle à la base est une réduction de la base : c'est un carré de côté $\\dfrac{2}{3} \\times 12 = 8$ cm.

**3.** $V' = \\left(\\dfrac{2}{3}\\right)^3 \\times 720 = \\dfrac{8}{27} \\times 720 \\approx 213$ cm³.
Abat-jour : $720 - 213{,}3 \\approx 507$ cm³.

**4.** $1 - \\dfrac{8}{27} = \\dfrac{19}{27}$ : l'abat-jour représente les $\\dfrac{19}{27}$ du volume de la grande pyramide.`
    },
    {
      id: "G5-ds-06",
      title: "La cuve de récupération",
      difficulty: 3,
      points: 5,
      statement: `Une cuve cylindrique de rayon $0{,}8$ m et de hauteur $1{,}5$ m sert à récupérer l'eau de pluie. On rappelle que $1$ m³ $= 1\\,000$ L.

1. Calculer le volume de la cuve en m³, arrondi au millième, puis sa contenance en litres (arrondie au litre).
2. La cuve est vide. On la remplit avec un débit de $15$ L par minute. Combien de temps faut-il pour la remplir ? Donner le résultat en heures et minutes.
3. La cuve contient $1\\,000$ L. Quelle est la hauteur d'eau, arrondie au centimètre ?
4. La section de l'eau par un plan horizontal est-elle toujours la même, quelle que soit la hauteur d'eau ? Justifier.`,
      solution: `**1.** $V = \\pi \\times 0{,}8^2 \\times 1{,}5 = 0{,}96\\pi \\approx 3{,}016$ m³, soit environ $3\\,016$ L.

**2.** $\\dfrac{3\\,016}{15} \\approx 201$ min, soit $3$ h $21$ min.

**3.** $1\\,000$ L $= 1$ m³. On cherche $h$ tel que $\\pi \\times 0{,}64 \\times h = 1$, d'où $h = \\dfrac{1}{0{,}64\\pi} \\approx 0{,}50$ m, soit environ $50$ cm.

**4.** Oui : la section d'un cylindre par un plan parallèle à ses bases est un disque de même rayon que les bases ($0{,}8$ m), quelle que soit la hauteur. C'est pour cela que la hauteur d'eau est proportionnelle au volume.`
    },
    {
      id: "G5-ds-07",
      title: "Couper un coin du cube",
      difficulty: 4,
      points: 6,
      statement: `$ABCDEFGH$ est un cube d'arête $6$ cm ($ABCD$ est la face du dessous, $E$, $F$, $G$, $H$ au-dessus de $A$, $B$, $C$, $D$). $I$ est le milieu de $[AB]$ et $J$ le milieu de $[AD]$. On coupe le cube par le plan passant par $I$ et $J$ et parallèle à l'arête $[AE]$. Ce plan coupe $[EF]$ en $K$ et $[EH]$ en $L$.

1. Calculer la longueur $IJ$ (valeur exacte puis arrondi au millimètre).
2. Quelle est la nature de la section $IJLK$ ? Justifier et donner ses dimensions.
3. Le plan sépare le cube en deux solides. Le plus petit est un prisme droit de base $AIJ$. Calculer son volume.
4. Quelle fraction du volume du cube ce prisme représente-t-il ?`,
      solution: `**1.** Le triangle $AIJ$ est rectangle en $A$ (angle d'un carré) avec $AI = AJ = 3$ cm. D'après le théorème de Pythagore, $IJ^2 = 9 + 9 = 18$, donc $IJ = \\sqrt{18} = 3\\sqrt{2} \\approx 4{,}2$ cm.

**2.** Le plan est parallèle à $[AE]$, donc ses intersections avec les faces verticales $ABFE$ et $ADHE$ sont des segments verticaux $[IK]$ et $[JL]$ de longueur $6$ cm ; la face $EFGH$ est parallèle à $ABCD$, donc $[KL]$ est parallèle à $[IJ]$ et de même longueur. $IJLK$ a ses côtés opposés parallèles et un angle droit ($[IK]$ vertical est perpendiculaire à $[IJ]$, horizontal) : c'est un **rectangle** de $3\\sqrt{2} \\approx 4{,}2$ cm sur $6$ cm.

**3.** Base : $\\mathcal{A}_{AIJ} = \\dfrac{3 \\times 3}{2} = 4{,}5$ cm² ; hauteur : $AE = 6$ cm. $V = 4{,}5 \\times 6 = 27$ cm³.

**4.** Volume du cube : $6^3 = 216$ cm³. $\\dfrac{27}{216} = \\dfrac{1}{8}$ : le prisme représente le huitième du cube.`
    },
    {
      id: "G5-ds-08",
      title: "Le sablier",
      difficulty: 4,
      points: 5,
      statement: `Un sablier est formé de deux cônes de révolution identiques, opposés par leur sommet, placés dans un cylindre de rayon $3$ cm et de hauteur $10$ cm : chaque cône a pour base une base du cylindre et pour hauteur $5$ cm. Au départ, le cône du haut (pointe en bas) est entièrement rempli de sable.

1. Calculer le volume exact de sable, puis l'arrondir au cm³.
2. Quelle fraction du volume du cylindre les deux cônes occupent-ils ?
3. Le sable s'écoule à raison de $0{,}5$ cm³ par seconde. Combien de temps le sablier mesure-t-il ? Arrondir à la seconde.
4. À un instant donné, le sable restant dans le cône du haut forme un petit cône de hauteur $2{,}5$ cm, de même sommet. Quelle fraction du sable s'est déjà écoulée ?`,
      solution: `**1.** $V = \\dfrac{1}{3}\\pi \\times 3^2 \\times 5 = 15\\pi$ cm³ $\\approx 47$ cm³.

**2.** $V_{\\text{cyl}} = \\pi \\times 3^2 \\times 10 = 90\\pi$ cm³. Les deux cônes : $30\\pi$ cm³, soit $\\dfrac{30\\pi}{90\\pi} = \\dfrac{1}{3}$ du cylindre.

**3.** $\\dfrac{15\\pi}{0{,}5} = 30\\pi \\approx 94$ s, soit environ $1$ min $34$ s.

**4.** Le petit cône de sable est une réduction du cône du haut de rapport $\\dfrac{2{,}5}{5} = \\dfrac{1}{2}$ ; son volume est multiplié par $\\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{8}$. Il reste $\\dfrac{1}{8}$ du sable en haut : les $\\dfrac{7}{8}$ se sont écoulés (bien que la hauteur n'ait diminué que de moitié).`
    },
    {
      id: "G5-ds-09",
      title: "Deux sections d'un pavé droit",
      difficulty: 1,
      points: 4,
      statement: `$ABCDEFGH$ est un pavé droit tel que $AB = 8$ cm, $AD = 6$ cm et $AE = 5$ cm ($E$, $F$, $G$, $H$ sont respectivement au-dessus de $A$, $B$, $C$, $D$).

1. On coupe le pavé par un plan parallèle à la face $ADHE$, passant par le point $M$ de $[AB]$ tel que $AM = 3$ cm.
   a) Quelle est la nature de la section ? Donner ses dimensions.
   b) Calculer son aire.
2. On coupe maintenant le pavé par le plan qui contient les arêtes $[AE]$ et $[CG]$. La section est le rectangle $ACGE$.
   a) Calculer la longueur $AC$.
   b) Calculer l'aire de la section $ACGE$.`,
      solution: `**1. a)** La section d'un pavé droit par un plan parallèle à une face est un rectangle de mêmes dimensions que cette face : ici un rectangle de $6$ cm sur $5$ cm (comme $ADHE$).

**b)** $\\mathcal{A} = 6 \\times 5 = 30$ cm².

**2. a)** Le triangle $ABC$ est rectangle en $B$ (la face $ABCD$ est un rectangle). D'après le théorème de Pythagore :
$AC^2 = AB^2 + BC^2 = 64 + 36 = 100$, donc $AC = 10$ cm.

**b)** $ACGE$ est un rectangle de dimensions $AC = 10$ cm et $AE = 5$ cm : $\\mathcal{A} = 10 \\times 5 = 50$ cm².`
    },
    {
      id: "G5-ds-10",
      title: "Le tronc scié",
      difficulty: 2,
      points: 5,
      statement: `Un tronc d'arbre est assimilé à un cylindre de révolution de rayon $25$ cm et de longueur $2$ m. Pour qu'il ne roule pas, on le scie selon un plan parallèle à son axe, situé à $15$ cm de cet axe. On note $O$ le centre d'une base, $H$ le pied de la perpendiculaire menée de $O$ au plan de coupe, et $P$ un point où le plan de coupe rencontre le bord de cette base.

1. Quelle est la nature de la section obtenue ?
2. a) Justifier que le triangle $OHP$ est rectangle et calculer $HP$.
   b) En déduire la largeur de la section.
3. Calculer l'aire de la section, en cm² puis en m².
4. Calculer le volume du tronc avant la coupe : valeur exacte en cm³, puis arrondi au centième de m³.`,
      solution: `**1.** La section d'un cylindre par un plan parallèle à son axe est un rectangle ; sa longueur est celle du tronc, $200$ cm.

**2. a)** $(OH)$ est perpendiculaire au plan de coupe, donc à la droite $(HP)$ : le triangle $OHP$ est rectangle en $H$, avec $OH = 15$ cm et $OP = 25$ cm (rayon). D'après le théorème de Pythagore :
$HP^2 = OP^2 - OH^2 = 625 - 225 = 400$, donc $HP = 20$ cm.

**b)** $H$ est le milieu de la corde coupée dans la base, donc la largeur de la section vaut $2 \\times 20 = 40$ cm.

**3.** $\\mathcal{A} = 200 \\times 40 = 8\\,000$ cm² $= 0{,}8$ m² (car $1$ m² $= 10\\,000$ cm²).

**4.** $V = \\pi \\times 25^2 \\times 200 = 125\\,000\\pi$ cm³. Comme $1$ m³ $= 1\\,000\\,000$ cm³, $V \\approx 0{,}39$ m³.`
    },
    {
      id: "G5-ds-11",
      title: "Le cube coupé en deux prismes",
      difficulty: 3,
      points: 5,
      statement: `$ABCDEFGH$ est un cube d'arête $4$ cm ($E$, $F$, $G$, $H$ sont respectivement au-dessus de $A$, $B$, $C$, $D$). On le coupe par le plan qui contient les arêtes opposées $[AB]$ et $[HG]$.

1. Calculer la longueur $AH$ : valeur exacte, puis arrondi au millimètre.
2. La section est le quadrilatère $ABGH$. Justifier qu'il s'agit d'un rectangle et calculer son aire (valeur exacte, puis arrondi au mm²).
3. Le plan coupe le cube en deux solides identiques.
   a) Décrire ces solides (nature, forme de la base).
   b) Calculer le volume de chacun d'eux de deux façons différentes.`,
      solution: `**1.** La face $ADHE$ est un carré, donc le triangle $ADH$ est rectangle en $D$. D'après le théorème de Pythagore :
$AH^2 = AD^2 + DH^2 = 16 + 16 = 32$, donc $AH = \\sqrt{32} = 4\\sqrt{2} \\approx 5{,}7$ cm.

**2.** $[AB]$ et $[HG]$ sont deux arêtes parallèles et de même longueur, donc $ABGH$ est un parallélogramme. De plus, $(AB)$ est perpendiculaire à la face $ADHE$, donc à la droite $(AH)$ : le parallélogramme a un angle droit, c'est un rectangle.
$\\mathcal{A} = AB \\times AH = 4 \\times 4\\sqrt{2} = 16\\sqrt{2}$ cm² $\\approx 22{,}63$ cm².

**3. a)** Chaque solide est un prisme droit dont la base est un triangle rectangle isocèle (par exemple $ADH$, de côtés de l'angle droit $4$ cm) et dont la hauteur est $AB = 4$ cm.

**b)** Première méthode : le volume du cube est $4^3 = 64$ cm³, et les deux solides sont identiques : $\\dfrac{64}{2} = 32$ cm³.
Deuxième méthode : $V = \\mathcal{A}_{\\text{base}} \\times h = \\dfrac{4 \\times 4}{2} \\times 4 = 8 \\times 4 = 32$ cm³.`
    },
    {
      id: "G5-ds-12",
      title: "La tente pyramidale",
      difficulty: 4,
      points: 6,
      statement: `Une tente a la forme d'une pyramide régulière $SABCD$ de sommet $S$, dont la base est un carré $ABCD$ de $4$ m de côté et de centre $O$. Sa hauteur est $SO = 3$ m.

1. Calculer le volume de la tente.
2. a) Calculer $OA$ (valeur exacte).
   b) Calculer la longueur d'une arête $[SA]$, arrondie au centimètre.
3. On coupe la tente par un plan parallèle au sol, à $1$ m du sol. On obtient un carré $A'B'C'D'$.
   a) Quel est le rapport de réduction entre la petite pyramide $SA'B'C'D'$ et la pyramide $SABCD$ ?
   b) Calculer la longueur du côté du carré $A'B'C'D'$, puis son aire arrondie au centième de m².
4. On considère que l'espace est « confortable » là où la hauteur sous la toile dépasse $1$ m. Calculer le volume de la petite pyramide $SA'B'C'D'$ et le comparer au volume total de la tente (donner un pourcentage arrondi à l'unité).`,
      solution: `**1.** $V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h = \\dfrac{1}{3} \\times 4^2 \\times 3 = 16$ m³.

**2. a)** $O$ est le milieu de la diagonale $[AC]$. Dans le triangle $ABC$ rectangle en $B$ : $AC^2 = 16 + 16 = 32$, donc $AC = \\sqrt{32} = 4\\sqrt{2}$ m et $OA = 2\\sqrt{2}$ m.

**b)** $(SO)$ est perpendiculaire à la base, donc le triangle $SOA$ est rectangle en $O$ :
$SA^2 = SO^2 + OA^2 = 9 + 8 = 17$, donc $SA = \\sqrt{17} \\approx 4{,}12$ m.

**3. a)** Le plan est à $1$ m du sol, donc à $3 - 1 = 2$ m du sommet. La petite pyramide est une réduction de rapport $k = \\dfrac{2}{3}$.

**b)** Côté : $4 \\times \\dfrac{2}{3} = \\dfrac{8}{3}$ m $\\approx 2{,}67$ m. Aire : $\\left(\\dfrac{8}{3}\\right)^2 = \\dfrac{64}{9} \\approx 7{,}11$ m².

**4.** Les volumes sont multipliés par $k^3$ : $V' = 16 \\times \\left(\\dfrac{2}{3}\\right)^3 = 16 \\times \\dfrac{8}{27} = \\dfrac{128}{27} \\approx 4{,}74$ m³.
$\\dfrac{V'}{V} = \\dfrac{8}{27} \\approx 0{,}30$ : l'espace confortable ne représente qu'environ $30$ % du volume de la tente.`
    }
  ],
  "G6": [
    {
      id: "G6-ds-01",
      title: "Propriétés d'une rotation",
      difficulty: 1,
      points: 4,
      statement: `Le triangle $A'B'C'$ est l'image du triangle $ABC$ par une rotation de centre $O$. On sait que $AB = 5$ cm, $\\widehat{BAC} = 40^\\circ$ et que l'aire du triangle $ABC$ vaut $12$ cm².

1. Que valent $A'B'$, $\\widehat{B'A'C'}$ et l'aire du triangle $A'B'C'$ ? Justifier.
2. Quelle est l'image du point $O$ par cette rotation ?
3. Un point $M$ est tel que $OM = 3$ cm. On note $M'$ son image par la rotation de centre $O$ et d'angle $90^\\circ$ dans le sens inverse des aiguilles d'une montre.
   a) Que valent $OM'$ et $\\widehat{MOM'}$ ?
   b) Quelle est la nature du triangle $MOM'$ ? Calculer $MM'$ au millimètre près.`,
      solution: `**1.** Une rotation conserve les longueurs, les mesures d'angles et les aires : $A'B' = 5$ cm, $\\widehat{B'A'C'} = 40^\\circ$ et l'aire de $A'B'C'$ est $12$ cm².

**2.** Le centre d'une rotation est sa propre image : l'image de $O$ est $O$.

**3. a)** Par définition de la rotation : $OM' = OM = 3$ cm et $\\widehat{MOM'} = 90^\\circ$.
**b)** Le triangle $MOM'$ est **rectangle et isocèle en $O$**. D'après le théorème de Pythagore, $MM'^2 = 3^2 + 3^2 = 18$, donc $MM' = \\sqrt{18} \\approx 4{,}2$ cm.`
    },
    {
      id: "G6-ds-02",
      title: "Rotation dans un repère",
      difficulty: 1,
      points: 4,
      statement: `Dans un repère orthonormé d'origine $O$, on considère $A(3\\,;\\,1)$, $B(4\\,;\\,3)$ et $C(1\\,;\\,2)$. On admet que l'image d'un point $M(x\\,;\\,y)$ par la rotation $r$ de centre $O$ et d'angle $90^\\circ$ dans le sens inverse des aiguilles d'une montre est le point $M'(-y\\,;\\,x)$.

1. Placer $A$, $B$, $C$ puis construire leurs images $A'$, $B'$, $C'$ par $r$ ; donner leurs coordonnées.
2. Vérifier que $OA = OA'$.
3. On applique deux fois la rotation $r$ au point $A$. Quelles sont les coordonnées du point obtenu ? Quelle transformation obtient-on en appliquant deux fois $r$ ?`,
      solution: `**1.** $A'(-1\\,;\\,3)$, $B'(-3\\,;\\,4)$, $C'(-2\\,;\\,1)$.

**2.** $OA^2 = 3^2 + 1^2 = 10$ et $OA'^2 = (-1)^2 + 3^2 = 10$, donc $OA = OA' = \\sqrt{10}$ : la rotation conserve la distance au centre.

**3.** $r(A) = A'(-1\\,;\\,3)$, puis $r(A') = (-3\\,;\\,-1)$. Appliquer deux fois la rotation de $90^\\circ$ revient à tourner de $180^\\circ$ autour de $O$ : $M(x\\,;\\,y)$ a pour image $(-x\\,;\\,-y)$. C'est la **symétrie centrale de centre $O$**.`
    },
    {
      id: "G6-ds-03",
      title: "Rotations dans un hexagone régulier",
      difficulty: 2,
      points: 5,
      statement: `$ABCDEF$ est un hexagone régulier de centre $O$, ses sommets étant nommés dans le sens inverse des aiguilles d'une montre.

1. Calculer la mesure de l'angle $\\widehat{AOB}$. Justifier que le triangle $AOB$ est équilatéral.
2. Quelle est l'image du point $A$ par la rotation de centre $O$ et d'angle $60^\\circ$ dans le sens inverse des aiguilles d'une montre ? Et celle de $B$ ?
3. Quelle est l'image du triangle $OAB$ par la rotation de centre $O$ et d'angle $120^\\circ$ dans le sens inverse des aiguilles d'une montre ?
4. Quelle transformation transforme $A$ en $D$, $B$ en $E$ et $C$ en $F$ ? Justifier.`,
      solution: `**1.** Les six angles au centre sont égaux et leur somme vaut $360^\\circ$ : $\\widehat{AOB} = \\dfrac{360^\\circ}{6} = 60^\\circ$. De plus $OA = OB$ (les sommets sont sur un cercle de centre $O$), donc $AOB$ est isocèle en $O$ ; ses angles à la base valent $\\dfrac{180^\\circ - 60^\\circ}{2} = 60^\\circ$ : le triangle est équilatéral.

**2.** $OA = OB$ et $\\widehat{AOB} = 60^\\circ$ dans le sens inverse des aiguilles d'une montre : l'image de $A$ est $B$, et de même l'image de $B$ est $C$.

**3.** Une rotation de $120^\\circ$ fait avancer de deux sommets : $A \\mapsto C$, $B \\mapsto D$, $O \\mapsto O$. L'image du triangle $OAB$ est le triangle $OCD$.

**4.** $\\widehat{AOD} = 3 \\times 60^\\circ = 180^\\circ$ et $OA = OD$ : $O$ est le milieu de $[AD]$ (de même pour $[BE]$ et $[CF]$). C'est la rotation de centre $O$ et d'angle $180^\\circ$, c'est-à-dire la **symétrie de centre $O$**.`
    },
    {
      id: "G6-ds-04",
      title: "Rosaces",
      difficulty: 2,
      points: 5,
      statement: `Une rosace est obtenue en faisant tourner un même motif (un « pétale ») autour d'un point $O$, toujours du même angle, jusqu'à revenir au motif de départ ; les pétales ne se chevauchent pas.

1. Les ailes d'un moulin à vent forment une rosace de $4$ pales. Quelle rotation transforme une pale en la pale suivante ?
2. Une fleur stylisée possède $5$ pétales identiques régulièrement disposés. Quel est l'angle de la rotation qui transforme un pétale en le pétale suivant ?
3. Avec une rotation de $40^\\circ$, combien de pétales obtient-on ?
4. Peut-on construire une rosace de cette façon avec une rotation de $70^\\circ$ ? Justifier.`,
      solution: `**1.** Les $4$ pales se partagent le tour complet : rotation de centre $O$ (l'axe du moulin) et d'angle $\\dfrac{360^\\circ}{4} = 90^\\circ$.

**2.** $\\dfrac{360^\\circ}{5} = 72^\\circ$ : rotation de centre $O$ et d'angle $72^\\circ$.

**3.** $\\dfrac{360}{40} = 9$ : on obtient $9$ pétales.

**4.** $\\dfrac{360}{70} \\approx 5{,}14$ n'est pas un entier : après $5$ rotations, on a tourné de $350^\\circ$ et la sixième ($420^\\circ$) ne ramène pas au motif de départ. On ne peut pas obtenir une rosace régulière qui se referme exactement.`
    },
    {
      id: "G6-ds-05",
      title: "Construire un triangle équilatéral",
      difficulty: 3,
      points: 5,
      statement: `$A$ et $B$ sont deux points tels que $AB = 6$ cm. On note $C$ l'image de $B$ par la rotation de centre $A$ et d'angle $60^\\circ$.

1. Construire la figure en expliquant la construction.
2. Démontrer que le triangle $ABC$ est équilatéral.
3. Calculer la hauteur de ce triangle (valeur exacte puis arrondi au millimètre), puis son aire arrondie au mm².
4. On note $D$ l'image de $C$ par la même rotation. Montrer que le triangle $ACD$ est aussi équilatéral, puis calculer l'angle $\\widehat{BAD}$.`,
      solution: `**1.** On trace $[AB]$ ; au rapporteur, on construit la demi-droite d'origine $A$ faisant un angle de $60^\\circ$ avec $[AB)$ dans le sens choisi ; au compas, on place sur elle le point $C$ tel que $AC = AB = 6$ cm.

**2.** La rotation de centre $A$ transforme $B$ en $C$, donc $AC = AB$ et $\\widehat{BAC} = 60^\\circ$. Le triangle $ABC$ est isocèle en $A$ ; ses angles à la base mesurent $\\dfrac{180^\\circ - 60^\\circ}{2} = 60^\\circ$. Ses trois angles mesurent $60^\\circ$ : il est équilatéral.

**3.** La hauteur issue de $C$ coupe $[AB]$ en son milieu $H$ (dans un triangle équilatéral, hauteur et médiane sont confondues), avec $AH = 3$ cm. Dans le triangle $AHC$ rectangle en $H$ : $CH^2 = 6^2 - 3^2 = 27$, donc $CH = \\sqrt{27} \\approx 5{,}2$ cm.
Aire : $\\dfrac{6 \\times \\sqrt{27}}{2} = 3\\sqrt{27} \\approx 15{,}59$ cm².

**4.** Pour la même raison, $AD = AC$ et $\\widehat{CAD} = 60^\\circ$ : le triangle $ACD$ est équilatéral. Les angles $\\widehat{BAC}$ et $\\widehat{CAD}$ étant adjacents, $\\widehat{BAD} = 60^\\circ + 60^\\circ = 120^\\circ$ : $D$ est l'image de $B$ par la rotation de centre $A$ et d'angle $120^\\circ$.`
    },
    {
      id: "G6-ds-06",
      title: "Les aiguilles de l'horloge",
      difficulty: 3,
      points: 5,
      statement: `Les aiguilles d'une horloge tournent autour du centre $O$ du cadran, dans le sens des aiguilles d'une montre.

1. De quel angle tourne la grande aiguille (aiguille des minutes) en $20$ minutes ? Et la petite aiguille (aiguille des heures) pendant ces $20$ minutes ?
2. Quel angle forment les deux aiguilles à $3$ h $00$ ? à $3$ h $30$ ? Justifier.
3. La grande aiguille mesure $12$ cm. Quelle distance parcourt son extrémité en $15$ minutes ? Donner la valeur exacte puis l'arrondi au millimètre.`,
      solution: `**1.** La grande aiguille fait un tour ($360^\\circ$) en $60$ min, soit $6^\\circ$ par minute : en $20$ min, rotation de $120^\\circ$. La petite aiguille fait un tour en $12$ h $= 720$ min, soit $0{,}5^\\circ$ par minute : en $20$ min, rotation de $10^\\circ$.

**2.** À $3$ h $00$ : la grande aiguille indique $12$ et la petite $3$, soit $3 \\times 30^\\circ = 90^\\circ$ (chaque heure correspond à $\\dfrac{360^\\circ}{12} = 30^\\circ$).
À $3$ h $30$ : la grande aiguille a tourné de $180^\\circ$ depuis le « $12$ » ; la petite aiguille a tourné de $90^\\circ + 30 \\times 0{,}5^\\circ = 105^\\circ$. L'angle entre elles est $180^\\circ - 105^\\circ = 75^\\circ$.

**3.** En $15$ min, la grande aiguille tourne de $90^\\circ$, soit un quart de tour : son extrémité parcourt un quart de cercle de rayon $12$ cm, soit $\\dfrac{2\\pi \\times 12}{4} = 6\\pi$ cm $\\approx 18{,}8$ cm.`
    },
    {
      id: "G6-ds-07",
      title: "Une rotation dans un carré",
      difficulty: 4,
      points: 6,
      statement: `$ABCD$ est un carré de centre $O$ et de côté $8$ cm, ses sommets étant nommés dans le sens des aiguilles d'une montre. $M$ est un point de $[AB]$ et $N$ un point de $[BC]$ tels que $AM = BN$. On note $r$ la rotation de centre $O$ et d'angle $90^\\circ$ dans le sens des aiguilles d'une montre.

1. Justifier que $r$ transforme $A$ en $B$ et $B$ en $C$.
2. En déduire que l'image du point $M$ par $r$ est le point $N$.
3. En déduire que le triangle $MON$ est rectangle et isocèle en $O$.
4. Démontrer que l'aire du quadrilatère $OMBN$ ne dépend pas de la position de $M$ et la calculer.`,
      solution: `**1.** Les diagonales d'un carré ont même longueur, se coupent en leur milieu $O$ et sont perpendiculaires : $OA = OB = OC$ et $\\widehat{AOB} = \\widehat{BOC} = 90^\\circ$. En tournant de $90^\\circ$ dans le sens des aiguilles d'une montre (sens $A \\to B \\to C$), $A$ va en $B$ et $B$ en $C$.

**2.** La rotation transforme le segment $[AB]$ en le segment $[BC]$ et conserve les longueurs. L'image $M'$ de $M$ est donc sur $[BC]$ avec $BM' = AM$. Comme $BN = AM$ et que $N$ est aussi sur $[BC]$, on a $M' = N$.

**3.** $N$ est l'image de $M$ par la rotation de centre $O$ et d'angle $90^\\circ$ : $ON = OM$ et $\\widehat{MON} = 90^\\circ$. Le triangle $MON$ est rectangle et isocèle en $O$.

**4.** La rotation transforme le triangle $OAM$ en le triangle $OBN$ (images de $O$, $A$, $M$) ; elle conserve les aires, donc $\\mathcal{A}_{OBN} = \\mathcal{A}_{OAM}$. Ainsi :
$$\\mathcal{A}_{OMBN} = \\mathcal{A}_{OMB} + \\mathcal{A}_{OBN} = \\mathcal{A}_{OMB} + \\mathcal{A}_{OAM} = \\mathcal{A}_{OAB}.$$
Le triangle $OAB$ est le quart du carré : $\\dfrac{8^2}{4} = 16$ cm², quelle que soit la position de $M$.`
    },
    {
      id: "G6-ds-08",
      title: "Composer deux symétries axiales",
      difficulty: 4,
      points: 5,
      statement: `Dans un repère orthonormé d'origine $O$, on note $s_1$ la symétrie d'axe l'axe des abscisses, $s_2$ la symétrie d'axe l'axe des ordonnées et $s_3$ la symétrie d'axe la droite $\\Delta$ d'équation $y = x$. On admet que : $s_1$ transforme $M(x\\,;\\,y)$ en $(x\\,;\\,-y)$ ; $s_2$ le transforme en $(-x\\,;\\,y)$ ; $s_3$ le transforme en $(y\\,;\\,x)$.

1. On considère $A(4\\,;\\,1)$. On applique $s_1$ puis $s_2$ : donner les coordonnées des points $A_1 = s_1(A)$ et $A_2 = s_2(A_1)$.
2. Montrer que, pour tout point $M(x\\,;\\,y)$, appliquer $s_1$ puis $s_2$ donne le point $(-x\\,;\\,-y)$. Quelle rotation retrouve-t-on ?
3. On applique maintenant $s_3$ puis $s_1$ au point $A$ ; on obtient $A''$. Calculer ses coordonnées.
4. Démontrer que le triangle $AOA''$ est rectangle et isocèle en $O$. Quelle rotation semble transformer $A$ en $A''$ ?`,
      solution: `**1.** $A_1 = s_1(A) = (4\\,;\\,-1)$, puis $A_2 = s_2(A_1) = (-4\\,;\\,-1)$.

**2.** $M(x\\,;\\,y) \\xrightarrow{s_1} (x\\,;\\,-y) \\xrightarrow{s_2} (-x\\,;\\,-y)$. Le point obtenu est le symétrique de $M$ par rapport à $O$ : c'est la **rotation de centre $O$ et d'angle $180^\\circ$**.

**3.** $s_3(A) = (1\\,;\\,4)$, puis $s_1(1\\,;\\,4) = (1\\,;\\,-4)$. Donc $A''(1\\,;\\,-4)$.

**4.** $OA^2 = 4^2 + 1^2 = 17$ ; $OA''^2 = 1^2 + (-4)^2 = 17$ ; $AA''^2 = (1 - 4)^2 + (-4 - 1)^2 = 9 + 25 = 34$.
$OA = OA''$ et $OA^2 + OA''^2 = 34 = AA''^2$ : d'après la réciproque du théorème de Pythagore, le triangle $AOA''$ est rectangle en $O$, et il est isocèle en $O$. $A''$ semble être l'image de $A$ par la **rotation de centre $O$ et d'angle $90^\\circ$ dans le sens des aiguilles d'une montre** (on passe de $A$, à droite et un peu au-dessus de l'axe, à $A''$, en dessous).`
    },
    {
      id: "G6-ds-09",
      title: "La grande roue",
      difficulty: 1,
      points: 4,
      statement: `Une grande roue de centre $O$ porte $8$ nacelles $N_1$, $N_2$, …, $N_8$, régulièrement réparties sur un cercle de rayon $12$ m et numérotées dans le sens inverse des aiguilles d'une montre.

1. Quelle est la mesure de l'angle $\\widehat{N_1ON_2}$ ? Justifier.
2. Par la rotation de centre $O$ et d'angle $90^\\circ$ dans le sens inverse des aiguilles d'une montre, quelle est l'image de la nacelle $N_1$ ? Celle de $N_6$ ?
3. Donner le centre, l'angle et le sens d'une rotation qui transforme $N_3$ en $N_8$.
4. Une rotation conserve les longueurs. Quelle est la distance entre $O$ et l'image de $N_1$ par n'importe quelle rotation de centre $O$ ?`,
      solution: `**1.** Les $8$ nacelles partagent le tour complet ($360^\\circ$) en $8$ angles égaux : $\\widehat{N_1ON_2} = \\dfrac{360}{8} = 45^\\circ$.

**2.** $90^\\circ = 2 \\times 45^\\circ$ : la rotation fait avancer chaque nacelle de deux positions dans le sens inverse des aiguilles d'une montre. L'image de $N_1$ est $N_3$, celle de $N_6$ est $N_8$.

**3.** De $N_3$ à $N_8$, il y a $5$ positions dans le sens inverse des aiguilles d'une montre, soit $5 \\times 45 = 225^\\circ$ ; c'est aussi $3$ positions dans le sens des aiguilles d'une montre. On peut donc choisir la rotation de centre $O$ et d'angle $135^\\circ$ dans le sens des aiguilles d'une montre.

**4.** Une rotation de centre $O$ conserve les longueurs et laisse $O$ fixe, donc l'image $N'$ de $N_1$ vérifie $ON' = ON_1 = 12$ m : l'image reste sur le cercle de la roue.`
    },
    {
      id: "G6-ds-10",
      title: "L'essuie-glace",
      difficulty: 2,
      points: 5,
      statement: `Le balai d'un essuie-glace est un segment $[AB]$ qui tourne autour d'un point fixe $O$. Les points $O$, $A$, $B$ sont alignés, avec $OA = 10$ cm et $OB = 55$ cm. Lors d'un passage, le balai effectue une rotation de centre $O$ et d'angle $120^\\circ$ ; on note $[A'B']$ sa position finale.

1. Quelle est la longueur du balai $[AB]$ ? Quelle est celle de $[A'B']$ ? Justifier.
2. Quelle distance parcourt l'extrémité $B$ pendant ce passage ? Arrondir au centimètre.
3. La surface essuyée est la partie comprise entre deux secteurs de disque de centre $O$ et d'angle $120^\\circ$, de rayons $55$ cm et $10$ cm.
   a) Quelle fraction d'un disque complet représente un secteur de $120^\\circ$ ?
   b) Calculer l'aire de la surface essuyée : valeur exacte, puis arrondi au cm².`,
      solution: `**1.** $AB = OB - OA = 55 - 10 = 45$ cm. Une rotation conserve les longueurs, donc $A'B' = AB = 45$ cm.

**2.** Le point $B$ décrit un arc de cercle de centre $O$, de rayon $55$ cm et d'angle $120^\\circ$, soit $\\dfrac{120}{360} = \\dfrac{1}{3}$ du cercle :
$\\dfrac{1}{3} \\times 2\\pi \\times 55 = \\dfrac{110\\pi}{3} \\approx 115$ cm.

**3. a)** $\\dfrac{120}{360} = \\dfrac{1}{3}$ du disque.

**b)** $\\mathcal{A} = \\dfrac{1}{3} \\times \\pi \\times 55^2 - \\dfrac{1}{3} \\times \\pi \\times 10^2 = \\dfrac{1}{3}\\pi(3\\,025 - 100) = \\dfrac{2\\,925\\pi}{3} = 975\\pi$ cm² $\\approx 3\\,063$ cm².`
    },
    {
      id: "G6-ds-11",
      title: "Faire tourner un triangle rectangle",
      difficulty: 3,
      points: 5,
      statement: `$ABC$ est un triangle rectangle en $A$ avec $AB = 6$ cm et $AC = 8$ cm. On considère la rotation de centre $A$ et d'angle $90^\\circ$ qui transforme la demi-droite $[AB)$ en la demi-droite $[AC)$. On note $B'$ et $C'$ les images de $B$ et de $C$.

1. Justifier que $B'$ appartient au segment $[AC]$ et calculer $B'C$.
2. Justifier que les points $B$, $A$ et $C'$ sont alignés et calculer $BC'$.
3. Calculer $BC$, puis en déduire $B'C'$ sans nouveau calcul.
4. a) Quelle est la nature du triangle $ACC'$ ? Calculer $CC'$ (valeur exacte, puis arrondi au millimètre).
   b) Calculer l'aire du triangle $BCC'$.`,
      solution: `**1.** La rotation conserve les longueurs : $AB' = AB = 6$ cm, et $B'$ est sur $[AC)$ par définition de la rotation. Comme $6 < 8$, $B'$ appartient à $[AC]$ et $B'C = 8 - 6 = 2$ cm.

**2.** $\\widehat{BAC} = 90^\\circ$ et la rotation fait tourner $[AC)$ de $90^\\circ$ dans le même sens, donc $\\widehat{CAC'} = 90^\\circ$ et $\\widehat{BAC'} = 90 + 90 = 180^\\circ$ : les points $B$, $A$, $C'$ sont alignés, $A$ étant entre $B$ et $C'$.
$AC' = AC = 8$ cm, donc $BC' = 6 + 8 = 14$ cm.

**3.** Dans le triangle $ABC$ rectangle en $A$ : $BC^2 = 36 + 64 = 100$, donc $BC = 10$ cm. $[B'C']$ est l'image de $[BC]$ par la rotation, qui conserve les longueurs : $B'C' = 10$ cm.

**4. a)** $AC = AC' = 8$ cm et $\\widehat{CAC'} = 90^\\circ$ : le triangle $ACC'$ est rectangle isocèle en $A$.
$CC'^2 = 64 + 64 = 128$, donc $CC' = \\sqrt{128} = 8\\sqrt{2} \\approx 11{,}3$ cm.

**b)** Dans le triangle $BCC'$, la base $[BC']$ est portée par $(AB)$ et la hauteur issue de $C$ est $[CA]$, car $(CA) \\perp (AB)$ :
$\\mathcal{A} = \\dfrac{BC' \\times AC}{2} = \\dfrac{14 \\times 8}{2} = 56$ cm².`
    },
    {
      id: "G6-ds-12",
      title: "Deux triangles équilatéraux accolés",
      difficulty: 4,
      points: 6,
      statement: `Les points $A$, $B$, $C$ sont alignés dans cet ordre sur une droite horizontale, avec $AB = 4$ cm et $BC = 6$ cm. Au-dessus de cette droite, on construit les triangles équilatéraux $ABD$ et $BCE$.

1. Calculer les angles $\\widehat{DBA}$, $\\widehat{EBC}$ et $\\widehat{DBE}$.
2. On considère la rotation $r$ de centre $B$ et d'angle $60^\\circ$ dans le sens inverse des aiguilles d'une montre.
   a) Justifier que $r$ transforme $D$ en $A$ et $C$ en $E$.
   b) En déduire que $AE = DC$.
3. On note $H$ le milieu de $[AB]$.
   a) Calculer la hauteur $DH$ du triangle $ABD$ (valeur exacte).
   b) Calculer la longueur $DC$ (valeur exacte, puis arrondi au millimètre).
4. Les points $D$, $B$ et $E$ sont-ils alignés ? Justifier.`,
      solution: `**1.** Les angles d'un triangle équilatéral mesurent $60^\\circ$ : $\\widehat{DBA} = 60^\\circ$ et $\\widehat{EBC} = 60^\\circ$. Comme $A$, $B$, $C$ sont alignés, $\\widehat{DBE} = 180 - 60 - 60 = 60^\\circ$.

**2. a)** $BD = BA$ (triangle équilatéral) et l'angle $\\widehat{DBA}$ vaut $60^\\circ$ : en tournant autour de $B$ de $60^\\circ$ dans le sens inverse des aiguilles d'une montre, $D$ (en haut) vient en $A$ (à gauche sur la droite). De même $BC = BE$, $\\widehat{CBE} = 60^\\circ$, et $C$ (à droite) vient en $E$ (en haut). Donc $r(D) = A$ et $r(C) = E$.

**b)** L'image du segment $[DC]$ par $r$ est le segment $[AE]$. Une rotation conserve les longueurs, donc $AE = DC$.

**3. a)** Dans un triangle équilatéral, la hauteur issue de $D$ est aussi la médiane, donc $H$ est le pied de cette hauteur et $HB = 2$ cm. Le triangle $DHB$ est rectangle en $H$ :
$DH^2 = DB^2 - HB^2 = 16 - 4 = 12$, donc $DH = \\sqrt{12} = 2\\sqrt{3}$ cm.

**b)** $HC = HB + BC = 2 + 6 = 8$ cm et le triangle $DHC$ est rectangle en $H$ :
$DC^2 = DH^2 + HC^2 = 12 + 64 = 76$, donc $DC = \\sqrt{76} \\approx 8{,}7$ cm.

**4.** $\\widehat{DBE} = 60^\\circ \\neq 180^\\circ$ : les points $D$, $B$, $E$ ne sont pas alignés.`
    }
  ],
  "G7": [
    {
      id: "G7-ds-01",
      title: "Semblables grâce aux angles",
      difficulty: 1,
      points: 4,
      statement: `Le triangle $ABC$ est tel que $\\widehat{A} = 50^\\circ$ et $\\widehat{B} = 70^\\circ$. Le triangle $DEF$ est tel que $\\widehat{D} = 50^\\circ$ et $\\widehat{F} = 60^\\circ$.

1. Calculer les mesures des angles $\\widehat{C}$ et $\\widehat{E}$.
2. Démontrer que les triangles $ABC$ et $DEF$ sont semblables.
3. Préciser les sommets homologues, puis écrire l'égalité des rapports de longueurs.
4. Un triangle $GHI$ a deux angles de $50^\\circ$ et $65^\\circ$. Est-il semblable au triangle $ABC$ ?`,
      solution: `**1.** La somme des angles d'un triangle vaut $180^\\circ$ : $\\widehat{C} = 180^\\circ - 50^\\circ - 70^\\circ = 60^\\circ$ et $\\widehat{E} = 180^\\circ - 50^\\circ - 60^\\circ = 70^\\circ$.

**2.** Les angles de $ABC$ mesurent $50^\\circ$, $70^\\circ$, $60^\\circ$ et ceux de $DEF$ mesurent $50^\\circ$, $70^\\circ$, $60^\\circ$. Deux triangles dont les angles sont égaux deux à deux sont semblables.

**3.** Sommets homologues : $A \\leftrightarrow D$ ($50^\\circ$), $B \\leftrightarrow E$ ($70^\\circ$), $C \\leftrightarrow F$ ($60^\\circ$). Les longueurs des côtés homologues sont proportionnelles :
$$\\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC}.$$

**4.** Le troisième angle de $GHI$ mesure $180^\\circ - 50^\\circ - 65^\\circ = 65^\\circ$ : ses angles sont $50^\\circ$, $65^\\circ$, $65^\\circ$. Ce ne sont pas ceux de $ABC$ ($50^\\circ$, $70^\\circ$, $60^\\circ$) : les triangles ne sont **pas** semblables.`
    },
    {
      id: "G7-ds-02",
      title: "Semblables grâce aux longueurs",
      difficulty: 1,
      points: 4,
      statement: `On considère trois triangles :
- $ABC$ avec $AB = 4$ cm, $BC = 6$ cm, $AC = 8$ cm ;
- $DEF$ avec $DE = 6$ cm, $EF = 9$ cm, $DF = 12$ cm ;
- $GHI$ avec $GH = 5$ cm, $HI = 7$ cm, $GI = 10$ cm.

1. Les triangles $ABC$ et $DEF$ sont-ils semblables ? Justifier en calculant des rapports.
2. Les triangles $ABC$ et $GHI$ sont-ils semblables ? Justifier.
3. Si $\\widehat{BAC} \\approx 47^\\circ$, que vaut l'angle $\\widehat{EDF}$ ?`,
      solution: `**1.** On range les côtés dans l'ordre croissant et on compare : $\\dfrac{6}{4} = 1{,}5$ ; $\\dfrac{9}{6} = 1{,}5$ ; $\\dfrac{12}{8} = 1{,}5$. Les longueurs sont proportionnelles (coefficient $1{,}5$) : les triangles $ABC$ et $DEF$ sont semblables ($DEF$ est un agrandissement de $ABC$).

**2.** $\\dfrac{5}{4} = 1{,}25$ et $\\dfrac{7}{6} \\approx 1{,}17$ : les rapports ne sont pas égaux, les longueurs ne sont pas proportionnelles. Les triangles ne sont pas semblables.

**3.** Les sommets homologues sont $A \\leftrightarrow D$, $B \\leftrightarrow E$, $C \\leftrightarrow F$ (côtés correspondants $AB \\leftrightarrow DE$, etc.). Deux triangles semblables ont leurs angles homologues égaux : $\\widehat{EDF} = \\widehat{BAC} \\approx 47^\\circ$.`
    },
    {
      id: "G7-ds-03",
      title: "Calculer des longueurs et une aire",
      difficulty: 2,
      points: 5,
      statement: `Les triangles $ABC$ et $DEF$ sont semblables, les sommets homologues étant $A$ et $D$, $B$ et $E$, $C$ et $F$. On donne $AB = 6$ cm, $BC = 8$ cm, $AC = 10$ cm et $DE = 9$ cm.

1. Calculer le coefficient d'agrandissement qui permet de passer de $ABC$ à $DEF$.
2. Calculer $EF$ et $DF$.
3. Démontrer que le triangle $ABC$ est rectangle. Que peut-on en déduire pour le triangle $DEF$ ?
4. Calculer l'aire de $ABC$, puis celle de $DEF$ de deux façons.`,
      solution: `**1.** $k = \\dfrac{DE}{AB} = \\dfrac{9}{6} = 1{,}5$.

**2.** $EF = 1{,}5 \\times BC = 12$ cm et $DF = 1{,}5 \\times AC = 15$ cm.

**3.** $AC^2 = 100$ et $AB^2 + BC^2 = 36 + 64 = 100$ : d'après la réciproque du théorème de Pythagore, $ABC$ est rectangle en $B$. Les angles homologues étant égaux, $\\widehat{DEF} = \\widehat{ABC} = 90^\\circ$ : $DEF$ est rectangle en $E$.

**4.** $\\mathcal{A}_{ABC} = \\dfrac{6 \\times 8}{2} = 24$ cm².
Méthode 1 : $\\mathcal{A}_{DEF} = \\dfrac{9 \\times 12}{2} = 54$ cm².
Méthode 2 : les aires sont multipliées par $k^2 = 2{,}25$ : $2{,}25 \\times 24 = 54$ cm².`
    },
    {
      id: "G7-ds-04",
      title: "Un angle commun",
      difficulty: 2,
      points: 5,
      statement: `$ABC$ est un triangle tel que $AB = 9$ cm, $AC = 6$ cm et $BC = 7{,}5$ cm. On place $M$ sur $[AB]$ tel que $AM = 3$ cm, et $N$ sur $[AC]$ tel que $\\widehat{AMN} = \\widehat{ACB}$.

1. Démontrer que les triangles $AMN$ et $ACB$ sont semblables.
2. Préciser les sommets homologues et écrire l'égalité des rapports.
3. Calculer $AN$ et $MN$.
4. Les droites $(MN)$ et $(BC)$ sont-elles parallèles ? Justifier.`,
      solution: `**1.** Les triangles $AMN$ et $ACB$ ont l'angle $\\widehat{A}$ en commun et $\\widehat{AMN} = \\widehat{ACB}$. Comme la somme des angles vaut $180^\\circ$, leurs troisièmes angles sont aussi égaux : les angles sont égaux deux à deux, les triangles sont semblables.

**2.** Homologues : $A \\leftrightarrow A$, $M \\leftrightarrow C$, $N \\leftrightarrow B$. Donc
$$\\frac{AM}{AC} = \\frac{AN}{AB} = \\frac{MN}{CB}.$$

**3.** $\\dfrac{AM}{AC} = \\dfrac{3}{6} = 0{,}5$. Donc $AN = 0{,}5 \\times 9 = 4{,}5$ cm et $MN = 0{,}5 \\times 7{,}5 = 3{,}75$ cm.

**4.** $\\dfrac{AM}{AB} = \\dfrac{3}{9} \\approx 0{,}33$ et $\\dfrac{AN}{AC} = \\dfrac{4{,}5}{6} = 0{,}75$. Ces rapports sont différents : d'après la contraposée du théorème de Thalès, $(MN)$ et $(BC)$ ne sont **pas** parallèles (le triangle $AMN$ est « retourné » par rapport à $ABC$).`
    },
    {
      id: "G7-ds-05",
      title: "La hauteur de l'arbre avec un miroir",
      difficulty: 3,
      points: 5,
      statement: `Pour mesurer la hauteur d'un arbre, Yanis pose un petit miroir $M$ à plat sur le sol horizontal. Il recule jusqu'à voir le sommet de l'arbre dans le miroir. On note :
- $Y$ le pied de Yanis et $E$ ses yeux, avec $EY = 1{,}6$ m ;
- $P$ le pied de l'arbre et $S$ son sommet ;
- $Y$, $M$ et $P$ sont alignés, avec $YM = 2$ m et $MP = 15$ m.

D'après les lois de la réflexion, $\\widehat{EMY} = \\widehat{SMP}$. Yanis et l'arbre sont verticaux.

1. Démontrer que les triangles $EYM$ et $SPM$ sont semblables.
2. Préciser les sommets homologues et écrire l'égalité des rapports de longueurs.
3. Calculer la hauteur de l'arbre.
4. Yanis avait d'abord mal posé le miroir : il a mesuré $YM = 2{,}5$ m et $MP = 14{,}5$ m. Quelle hauteur aurait-il trouvée ? Comparer.`,
      solution: `**1.** Les triangles $EYM$ et $SPM$ sont rectangles en $Y$ et en $P$ (verticales sur un sol horizontal), et $\\widehat{EMY} = \\widehat{SMP}$. Leurs troisièmes angles sont donc égaux aussi (somme $180^\\circ$) : les triangles sont semblables.

**2.** Homologues : $E \\leftrightarrow S$, $Y \\leftrightarrow P$, $M \\leftrightarrow M$. Donc
$$\\frac{SP}{EY} = \\frac{PM}{YM} = \\frac{SM}{EM}.$$

**3.** $\\dfrac{SP}{1{,}6} = \\dfrac{15}{2}$, donc $SP = \\dfrac{1{,}6 \\times 15}{2} = 12$ m.

**4.** $SP = \\dfrac{1{,}6 \\times 14{,}5}{2{,}5} = 9{,}28$ m. Une erreur de $50$ cm sur la position du miroir donne près de $3$ m d'écart : la méthode est sensible à la précision des mesures.`
    },
    {
      id: "G7-ds-06",
      title: "Triangles isocèles et équilatéraux",
      difficulty: 3,
      points: 5,
      statement: `1. Démontrer que deux triangles équilatéraux sont toujours semblables.
2. Un panneau de signalisation triangulaire équilatéral a un côté de $70$ cm ; un grand panneau de même forme a un côté de $1{,}05$ m.
   a) Calculer le coefficient d'agrandissement.
   b) Il faut $0{,}8$ L de peinture pour peindre le petit panneau. Quelle quantité faut-il pour le grand ?
3. Deux triangles isocèles sont-ils toujours semblables ? Justifier à l'aide d'un contre-exemple.
4. Démontrer que deux triangles isocèles qui ont le même angle au sommet sont semblables.`,
      solution: `**1.** Les trois angles d'un triangle équilatéral mesurent $60^\\circ$. Deux triangles équilatéraux ont donc leurs angles égaux deux à deux : ils sont semblables.

**2. a)** $k = \\dfrac{105}{70} = 1{,}5$.
**b)** La quantité de peinture est proportionnelle à l'aire, multipliée par $k^2 = 2{,}25$ : $0{,}8 \\times 2{,}25 = 1{,}8$ L.

**3.** Non. Un triangle isocèle d'angles $40^\\circ, 40^\\circ, 100^\\circ$ et un triangle isocèle d'angles $70^\\circ, 70^\\circ, 40^\\circ$ n'ont pas les mêmes angles : ils ne sont pas semblables.

**4.** Si l'angle au sommet mesure $a$, les deux angles à la base sont égaux et mesurent chacun $\\dfrac{180^\\circ - a}{2}$. Deux triangles isocèles de même angle au sommet ont donc les mêmes trois angles : ils sont semblables.`
    },
    {
      id: "G7-ds-07",
      title: "La hauteur dans le triangle rectangle",
      difficulty: 4,
      points: 6,
      statement: `$ABCD$ est un rectangle tel que $AB = 12$ cm et $BC = 9$ cm. On trace la diagonale $[AC]$ et on note $H$ le pied de la perpendiculaire à $(AC)$ passant par $B$.

1. Calculer $AC$.
2. Démontrer que les triangles $AHB$ et $ABC$ sont semblables. Préciser les sommets homologues.
3. En déduire que $AB^2 = AH \\times AC$, puis calculer $AH$.
4. Démontrer de même que les triangles $BHC$ et $ABC$ sont semblables et calculer $HC$. Vérifier la cohérence avec $AC$.
5. Calculer $BH$ de deux façons différentes.`,
      solution: `**1.** Le triangle $ABC$ est rectangle en $B$ (angle d'un rectangle). D'après le théorème de Pythagore, $AC^2 = 144 + 81 = 225$, donc $AC = 15$ cm.

**2.** Les triangles $AHB$ (rectangle en $H$) et $ABC$ (rectangle en $B$) ont l'angle $\\widehat{BAC}$ en commun. Ils ont donc deux angles égaux, et le troisième aussi : ils sont semblables. Homologues : $A \\leftrightarrow A$, $H \\leftrightarrow B$ (angles droits), $B \\leftrightarrow C$.

**3.** $\\dfrac{AH}{AB} = \\dfrac{AB}{AC} = \\dfrac{HB}{BC}$. D'où $AB^2 = AH \\times AC$ et $AH = \\dfrac{144}{15} = 9{,}6$ cm.

**4.** $BHC$ (rectangle en $H$) et $ABC$ (rectangle en $B$) ont l'angle $\\widehat{BCA}$ en commun : ils sont semblables, avec $H \\leftrightarrow B$, $C \\leftrightarrow C$, $B \\leftrightarrow A$. Donc $\\dfrac{HC}{BC} = \\dfrac{BC}{AC}$, soit $HC = \\dfrac{81}{15} = 5{,}4$ cm.
Cohérence : $AH + HC = 9{,}6 + 5{,}4 = 15 = AC$.

**5.** Avec la question 3 : $\\dfrac{HB}{BC} = \\dfrac{AB}{AC}$, donc $BH = \\dfrac{9 \\times 12}{15} = 7{,}2$ cm.
Avec l'aire de $ABC$ : $\\dfrac{AB \\times BC}{2} = \\dfrac{AC \\times BH}{2}$, soit $108 = 15 \\times BH$, donc $BH = 7{,}2$ cm.`
    },
    {
      id: "G7-ds-08",
      title: "Le triangle d'or",
      difficulty: 4,
      points: 5,
      statement: `$ABC$ est un triangle isocèle en $A$ tel que $\\widehat{BAC} = 36^\\circ$ et $AB = AC = 1$ (unité de longueur). La bissectrice de l'angle $\\widehat{ABC}$ coupe $[AC]$ en $D$. On note $x = BC$.

1. Calculer les angles $\\widehat{ABC}$, $\\widehat{ACB}$, $\\widehat{ABD}$ et $\\widehat{DBC}$, puis $\\widehat{BDC}$.
2. Démontrer que les triangles $ABD$ et $BCD$ sont isocèles. En déduire que $AD = BD = x$, puis exprimer $CD$ en fonction de $x$.
3. Démontrer que les triangles $ABC$ et $BCD$ sont semblables ; préciser les sommets homologues.
4. En déduire que $x^2 = 1 - x$.
5. Vérifier que $x = \\dfrac{\\sqrt{5} - 1}{2}$ est solution de cette équation et donner une valeur approchée de $BC$ au millième.`,
      solution: `**1.** $\\widehat{ABC} = \\widehat{ACB} = \\dfrac{180^\\circ - 36^\\circ}{2} = 72^\\circ$. La bissectrice partage $\\widehat{ABC}$ en deux : $\\widehat{ABD} = \\widehat{DBC} = 36^\\circ$. Dans $BCD$ : $\\widehat{BDC} = 180^\\circ - 36^\\circ - 72^\\circ = 72^\\circ$.

**2.** Dans $ABD$ : $\\widehat{BAD} = \\widehat{ABD} = 36^\\circ$, donc $ABD$ est isocèle en $D$ et $AD = BD$. Dans $BCD$ : $\\widehat{BDC} = \\widehat{BCD} = 72^\\circ$, donc $BCD$ est isocèle en $B$ et $BD = BC = x$. Ainsi $AD = BD = x$ et $CD = AC - AD = 1 - x$.

**3.** $ABC$ a pour angles $36^\\circ$ (en $A$), $72^\\circ$, $72^\\circ$ ; $BCD$ a pour angles $36^\\circ$ (en $B$), $72^\\circ$ (en $C$), $72^\\circ$ (en $D$). Les angles sont égaux deux à deux : les triangles sont semblables, avec $A \\leftrightarrow B$, $B \\leftrightarrow D$, $C \\leftrightarrow C$ (ou $B \\leftrightarrow C$, $C \\leftrightarrow D$, ce qui donne les mêmes rapports puisque les deux triangles sont isocèles).

**4.** Les longueurs sont proportionnelles : $\\dfrac{BC}{AB} = \\dfrac{CD}{BC}$, soit $\\dfrac{x}{1} = \\dfrac{1 - x}{x}$, d'où $x^2 = 1 - x$.

**5.** $x^2 = \\dfrac{(\\sqrt{5} - 1)^2}{4} = \\dfrac{5 - 2\\sqrt{5} + 1}{4} = \\dfrac{6 - 2\\sqrt{5}}{4} = \\dfrac{3 - \\sqrt{5}}{2}$ et $1 - x = \\dfrac{2 - \\sqrt{5} + 1}{2} = \\dfrac{3 - \\sqrt{5}}{2}$. L'égalité est vérifiée. $BC = \\dfrac{\\sqrt{5} - 1}{2} \\approx 0{,}618$.`
    },
    {
      id: "G7-ds-09",
      title: "Deux équerres",
      difficulty: 1,
      points: 4,
      statement: `Le triangle $ABC$ est rectangle en $A$, avec $\\widehat{ABC} = 35^\\circ$, $AB = 8$ cm et $AC = 5{,}6$ cm.
Le triangle $DEF$ est rectangle en $D$, avec $\\widehat{DFE} = 55^\\circ$ et $DE = 12$ cm.

1. Calculer les mesures des angles $\\widehat{ACB}$ et $\\widehat{DEF}$.
2. Démontrer que les triangles $ABC$ et $DEF$ sont semblables.
3. Préciser les sommets homologues, puis calculer le coefficient d'agrandissement qui permet de passer de $ABC$ à $DEF$.
4. Calculer la longueur $DF$.`,
      solution: `**1.** La somme des angles d'un triangle vaut $180^\\circ$.
Dans $ABC$ : $\\widehat{ACB} = 180^\\circ - 90^\\circ - 35^\\circ = 55^\\circ$.
Dans $DEF$ : $\\widehat{DEF} = 180^\\circ - 90^\\circ - 55^\\circ = 35^\\circ$.

**2.** Les angles de $ABC$ mesurent $90^\\circ$, $35^\\circ$ et $55^\\circ$ ; ceux de $DEF$ aussi. Deux triangles dont les angles sont égaux deux à deux sont semblables : $ABC$ et $DEF$ sont semblables.

**3.** Sommets homologues : $A \\leftrightarrow D$ (angle droit), $B \\leftrightarrow E$ ($35^\\circ$), $C \\leftrightarrow F$ ($55^\\circ$).
Le côté $[AB]$ correspond donc au côté $[DE]$ : le coefficient d'agrandissement est $k = \\dfrac{DE}{AB} = \\dfrac{12}{8} = 1{,}5$.

**4.** Le côté $[DF]$ est l'homologue de $[AC]$ : $DF = 1{,}5 \\times AC = 1{,}5 \\times 5{,}6 = 8{,}4$ cm.`
    },
    {
      id: "G7-ds-10",
      title: "Une parallèle dans un triangle",
      difficulty: 2,
      points: 5,
      statement: `$ABC$ est un triangle. Le point $M$ appartient au segment $[AB]$ et le point $N$ au segment $[AC]$, de sorte que les droites $(MN)$ et $(BC)$ sont parallèles.
On donne $AB = 10$ cm, $AM = 4$ cm, $BC = 12$ cm et $AN = 3$ cm.

1. Expliquer pourquoi $\\widehat{AMN} = \\widehat{ABC}$.
2. En déduire que les triangles $AMN$ et $ABC$ sont semblables, et préciser les sommets homologues.
3. Calculer le coefficient de réduction qui permet de passer de $ABC$ à $AMN$.
4. Calculer $MN$, puis $AC$ et $NC$.
5. Par quel nombre faut-il multiplier l'aire du triangle $ABC$ pour obtenir celle du triangle $AMN$ ?`,
      solution: `**1.** Les droites $(MN)$ et $(BC)$ sont parallèles et coupées par la sécante $(AB)$. Les angles $\\widehat{AMN}$ et $\\widehat{ABC}$ sont correspondants : ils sont donc égaux.

**2.** Les triangles $AMN$ et $ABC$ ont l'angle $\\widehat{A}$ en commun et $\\widehat{AMN} = \\widehat{ABC}$. Ayant deux angles égaux deux à deux (donc aussi le troisième), ils sont semblables.
Sommets homologues : $A \\leftrightarrow A$, $M \\leftrightarrow B$, $N \\leftrightarrow C$.

**3.** Le côté $[AM]$ est l'homologue de $[AB]$ : $k = \\dfrac{AM}{AB} = \\dfrac{4}{10} = 0{,}4$.

**4.** $MN = 0{,}4 \\times BC = 0{,}4 \\times 12 = 4{,}8$ cm.
$AN = 0{,}4 \\times AC$, donc $AC = \\dfrac{3}{0{,}4} = 7{,}5$ cm, puis $NC = AC - AN = 7{,}5 - 3 = 4{,}5$ cm.

**5.** Dans une réduction de coefficient $k$, les aires sont multipliées par $k^2$ : $0{,}4^2 = 0{,}16$. L'aire de $AMN$ est égale à $0{,}16$ fois celle de $ABC$.`
    },
    {
      id: "G7-ds-11",
      title: "L'ombre sous le lampadaire",
      difficulty: 3,
      points: 5,
      statement: `La nuit, Inès se tient debout près d'un lampadaire. On modélise la situation ainsi :
- le lampadaire est le segment vertical $[PL]$, avec $PL = 6$ m ($P$ est au sol) ;
- Inès est le segment vertical $[HT]$, avec $HT = 1{,}60$ m ($H$ est au sol) et $PH = 5{,}5$ m ;
- l'extrémité de son ombre est le point $S$ : les points $P$, $H$, $S$ sont alignés sur le sol, dans cet ordre, et les points $L$, $T$, $S$ sont alignés.

On note $x$ la longueur $HS$ de l'ombre, en mètres.

1. Démontrer que les triangles $SHT$ et $SPL$ sont semblables.
2. Exprimer $SP$ en fonction de $x$, puis écrire une égalité de rapports faisant intervenir $x$.
3. Calculer la longueur de l'ombre d'Inès.
4. Inès s'éloigne du lampadaire en restant sur la droite $(PH)$. À quelle distance du pied du lampadaire doit-elle se placer pour que son ombre mesure $3$ m ?`,
      solution: `**1.** Le lampadaire et Inès sont verticaux, le sol est horizontal : les triangles $SHT$ et $SPL$ sont rectangles, respectivement en $H$ et en $P$. Ils ont de plus l'angle $\\widehat{S}$ en commun. Ayant deux angles égaux deux à deux, ils sont semblables, avec $S \\leftrightarrow S$, $H \\leftrightarrow P$, $T \\leftrightarrow L$.

**2.** $SP = SH + HP = x + 5{,}5$. Les longueurs des côtés homologues sont proportionnelles :
$$\\frac{SH}{SP} = \\frac{HT}{PL} \\quad \\text{soit} \\quad \\frac{x}{x + 5{,}5} = \\frac{1{,}6}{6}.$$

**3.** Par produits en croix : $6x = 1{,}6(x + 5{,}5)$, soit $6x = 1{,}6x + 8{,}8$, donc $4{,}4x = 8{,}8$ et $x = 2$.
L'ombre d'Inès mesure $2$ m. (Contrôle : $\\dfrac{2}{7{,}5} = \\dfrac{1{,}6}{6} \\approx 0{,}267$.)

**4.** On note $d$ la distance $PH$ cherchée. Avec une ombre de $3$ m : $\\dfrac{3}{3 + d} = \\dfrac{1{,}6}{6}$, donc $1{,}6(3 + d) = 18$, puis $3 + d = 11{,}25$ et $d = 8{,}25$.
Inès doit se placer à $8{,}25$ m du pied du lampadaire.`
    },
    {
      id: "G7-ds-12",
      title: "Deux triangles qui partagent un angle",
      difficulty: 4,
      points: 6,
      statement: `$ABC$ est un triangle tel que $AB = 6$ cm, $AC = 9$ cm et $BC = 7{,}5$ cm. Le point $D$ appartient au segment $[AC]$ et vérifie $\\widehat{ABD} = \\widehat{ACB}$.

1. Démontrer que les triangles $ABD$ et $ACB$ sont semblables. Préciser les sommets homologues.
2. a) Écrire l'égalité des rapports de longueurs.
   b) En déduire que $AB^2 = AD \\times AC$.
3. Calculer $AD$, $DC$ et $BD$.
4. a) Par quel nombre est multipliée l'aire quand on passe du triangle $ACB$ au triangle $ABD$ ?
   b) En déduire quelle fraction de l'aire du triangle $ABC$ représente l'aire du triangle $BDC$.`,
      solution: `**1.** Les triangles $ABD$ et $ACB$ ont l'angle $\\widehat{A}$ en commun ($D$ est sur $[AC]$) et $\\widehat{ABD} = \\widehat{ACB}$. Deux angles égaux deux à deux (donc les trois, par la somme des angles) : les triangles sont semblables.
Sommets homologues : $A \\leftrightarrow A$, $B \\leftrightarrow C$, $D \\leftrightarrow B$.

**2. a)** Les côtés homologues sont $[AB] \\leftrightarrow [AC]$, $[AD] \\leftrightarrow [AB]$ et $[BD] \\leftrightarrow [CB]$ :
$$\\frac{AB}{AC} = \\frac{AD}{AB} = \\frac{BD}{CB}.$$

**b)** L'égalité $\\dfrac{AB}{AC} = \\dfrac{AD}{AB}$ donne, par produits en croix, $AB \\times AB = AD \\times AC$, soit $AB^2 = AD \\times AC$.

**3.** $AD = \\dfrac{AB^2}{AC} = \\dfrac{36}{9} = 4$ cm, donc $DC = 9 - 4 = 5$ cm.
Le coefficient de réduction est $\\dfrac{AB}{AC} = \\dfrac{6}{9} = \\dfrac{2}{3}$, donc $BD = \\dfrac{2}{3} \\times 7{,}5 = 5$ cm.

**4. a)** Les longueurs sont multipliées par $\\dfrac{2}{3}$, donc les aires par $\\left(\\dfrac{2}{3}\\right)^2 = \\dfrac{4}{9}$ : l'aire de $ABD$ vaut $\\dfrac{4}{9}$ de l'aire de $ABC$.

**b)** Les triangles $ABD$ et $BDC$ se partagent le triangle $ABC$. L'aire de $BDC$ vaut donc $1 - \\dfrac{4}{9} = \\dfrac{5}{9}$ de l'aire de $ABC$.
(Contrôle : ces deux triangles ont la même hauteur issue de $B$ et des bases $AD = 4$ et $DC = 5$ ; leurs aires sont bien dans le rapport $4$ pour $5$.)`
    }
  ],
  "Org1": [
    {
      id: "Org1-ds-01",
      title: "Image et antécédents par une formule",
      difficulty: 1,
      points: 4,
      statement: `On considère la fonction $f$ définie par $f(x) = 3x^2 - 5$.

1. Calculer $f(2)$, $f(-1)$ et $f(0)$.
2. Quelle est l'image de $\\dfrac{1}{3}$ par $f$ ?
3. Déterminer tous les antécédents de $7$ par $f$.
4. Le point $A(1\\,;\\,-2)$ appartient-il à la courbe représentative de $f$ ? Et le point $B(-2\\,;\\,6)$ ?`,
      solution: `**1.** $f(2) = 3 \\times 2^2 - 5 = 12 - 5 = 7$ ; $f(-1) = 3 \\times 1 - 5 = -2$ ; $f(0) = -5$.

**2.** $f\\left(\\dfrac{1}{3}\\right) = 3 \\times \\dfrac{1}{9} - 5 = \\dfrac{1}{3} - 5 = -\\dfrac{14}{3}$.

**3.** On résout $3x^2 - 5 = 7$, soit $3x^2 = 12$, soit $x^2 = 4$ : $x = 2$ ou $x = -2$. Les antécédents de $7$ sont $2$ et $-2$.

**4.** $f(1) = 3 - 5 = -2$ : le point $A(1\\,;\\,-2)$ appartient à la courbe.
$f(-2) = 12 - 5 = 7 \\neq 6$ : le point $B$ n'appartient pas à la courbe.`
    },
    {
      id: "Org1-ds-02",
      title: "Lire un tableau de valeurs",
      difficulty: 1,
      points: 4,
      statement: `Voici un tableau de valeurs d'une fonction $g$ :

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $g(x)$ | $7$ | $2$ | $-1$ | $-2$ | $-1$ | $2$ |

1. Quelle est l'image de $3$ par $g$ ? Écrire le résultat avec la notation $g(\\ldots) = \\ldots$
2. Donner les antécédents de $-1$ par $g$ lus dans le tableau.
3. On sait que $g(x) = x^2 - 2x - 1$. Vérifier cette formule pour $x = -2$ et pour $x = 3$.
4. Calculer $g(5)$.`,
      solution: `**1.** On lit dans la colonne de $x = 3$ : $g(3) = 2$. L'image de $3$ par $g$ est $2$.

**2.** On cherche les colonnes où $g(x) = -1$ : $x = 0$ et $x = 2$. Les antécédents de $-1$ lus dans le tableau sont $0$ et $2$.

**3.** $g(-2) = (-2)^2 - 2 \\times (-2) - 1 = 4 + 4 - 1 = 7$ ✓ ; $g(3) = 9 - 6 - 1 = 2$ ✓. Les valeurs correspondent au tableau.

**4.** $g(5) = 25 - 10 - 1 = 14$.`
    },
    {
      id: "Org1-ds-03",
      title: "Lire une courbe",
      difficulty: 2,
      points: 5,
      statement: `On a tracé ci-dessous la courbe représentative $\\mathcal{C}$ d'une fonction $h$ définie sur l'intervalle $[0\\,;\\,6]$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:370px;"><svg class="geo-svg-figure" viewBox="0 0 370 300" width="370" height="300" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="30" y1="270" x2="30" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="80" y1="270" x2="80" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="130" y1="270" x2="130" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="180" y1="270" x2="180" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="230" y1="270" x2="230" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="280" y1="270" x2="280" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="330" y1="270" x2="330" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="270" x2="330" y2="270" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="230" x2="330" y2="230" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="190" x2="330" y2="190" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="150" x2="330" y2="150" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="110" x2="330" y2="110" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="70" x2="330" y2="70" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="30" x2="330" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="150" x2="338" y2="150" stroke="currentColor" stroke-width="1.4" /><line x1="30" y1="270" x2="30" y2="22" stroke="currentColor" stroke-width="1.4" /><text x="80" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">1</text><text x="130" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">2</text><text x="180" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">3</text><text x="230" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">4</text><text x="280" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">5</text><text x="330" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">6</text><text x="24" y="274" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">-3</text><text x="24" y="234" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">-2</text><text x="24" y="194" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">-1</text><text x="24" y="114" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">1</text><text x="24" y="74" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">2</text><text x="24" y="34" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">3</text><text x="22" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">0</text><text x="344" y="154" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="currentColor" text-anchor="middle">x</text><text x="40" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="currentColor" text-anchor="start">y</text><polyline points="30,250 31.5,246.4 33,242.9 34.5,239.4 36,235.9 37.5,232.5 39,229 40.5,225.7 42,222.4 43.5,219.1 45,215.8 46.5,212.6 48,209.4 49.5,206.2 51,203.1 52.5,200 54,197 55.5,194 57,191 58.5,188.1 60,185.2 61.5,182.3 63,179.5 64.5,176.7 66,174 67.5,171.3 69,168.6 70.5,165.9 72,163.3 73.5,160.7 75,158.2 76.5,155.7 78,153.2 79.5,150.8 81,148.4 82.5,146.1 84,143.7 85.5,141.4 87,139.2 88.5,137 90,134.8 91.5,132.7 93,130.6 94.5,128.5 96,126.4 97.5,124.5 99,122.5 100.5,120.6 102,118.7 103.5,116.8 105,115 106.5,113.2 108,111.5 109.5,109.8 111,108.1 112.5,106.5 114,104.8 115.5,103.3 117,101.8 118.5,100.3 120,98.8 121.5,97.4 123,96 124.5,94.6 126,93.3 127.5,92.1 129,90.8 130.5,89.6 132,88.4 133.5,87.3 135,86.2 136.5,85.1 138,84.1 139.5,83.1 141,82.2 142.5,81.3 144,80.4 145.5,79.5 147,78.7 148.5,77.9 150,77.2 151.5,76.5 153,75.8 154.5,75.2 156,74.6 157.5,74.1 159,73.5 160.5,73 162,72.6 163.5,72.2 165,71.8 166.5,71.5 168,71.2 169.5,70.9 171,70.6 172.5,70.5 174,70.3 175.5,70.2 177,70.1 178.5,70 180,70 181.5,70 183,70.1 184.5,70.2 186,70.3 187.5,70.5 189,70.6 190.5,70.9 192,71.2 193.5,71.5 195,71.8 196.5,72.2 198,72.6 199.5,73 201,73.5 202.5,74.1 204,74.6 205.5,75.2 207,75.8 208.5,76.5 210,77.2 211.5,77.9 213,78.7 214.5,79.5 216,80.4 217.5,81.3 219,82.2 220.5,83.1 222,84.1 223.5,85.1 225,86.2 226.5,87.3 228,88.4 229.5,89.6 231,90.8 232.5,92 234,93.3 235.5,94.6 237,96 238.5,97.4 240,98.8 241.5,100.3 243,101.8 244.5,103.3 246,104.8 247.5,106.4 249,108.1 250.5,109.8 252,111.5 253.5,113.2 255,115 256.5,116.8 258,118.7 259.5,120.6 261,122.5 262.5,124.5 264,126.4 265.5,128.5 267,130.6 268.5,132.7 270,134.8 271.5,137 273,139.2 274.5,141.4 276,143.7 277.5,146.1 279,148.4 280.5,150.8 282,153.2 283.5,155.7 285,158.2 286.5,160.7 288,163.3 289.5,165.9 291,168.6 292.5,171.3 294,174 295.5,176.7 297,179.5 298.5,182.3 300,185.2 301.5,188.1 303,191 304.5,194 306,197 307.5,200 309,203.1 310.5,206.2 312,209.4 313.5,212.6 315,215.8 316.5,219.1 318,222.4 319.5,225.7 321,229 322.5,232.5 324,235.9 325.5,239.4 327,242.9 328.5,246.4 330,250" fill="none" stroke="#2563eb" stroke-width="2.2" /><text x="310" y="198" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">𝒞</text></svg></div>

1. Par lecture graphique, donner l'image de $2$ par $h$, puis $h(0)$.
2. Donner le ou les antécédents de $1{,}5$ par $h$, puis de $0$.
3. Quelle est la valeur maximale de $h$ ? Pour quelle valeur de $x$ est-elle atteinte ?
4. Pour quelles valeurs de $x$ a-t-on $h(x) > 0$ ?
5. On admet que $h(x) = -0{,}5x^2 + 3x - 2{,}5$. Vérifier par le calcul les réponses aux questions 1 et 3.`,
      solution: `**1.** On lit $h(2) = 1{,}5$ et $h(0) = -2{,}5$.

**2.** Les antécédents de $1{,}5$ sont les abscisses des points de la courbe d'ordonnée $1{,}5$ : $2$ et $4$. Les antécédents de $0$ sont $1$ et $5$ (points où la courbe coupe l'axe des abscisses).

**3.** Le point le plus haut de la courbe a pour coordonnées $(3\\,;\\,2)$ : la valeur maximale de $h$ est $2$, atteinte pour $x = 3$.

**4.** La courbe est au-dessus de l'axe des abscisses pour $x$ strictement compris entre $1$ et $5$.

**5.** $h(2) = -0{,}5 \\times 4 + 6 - 2{,}5 = -2 + 6 - 2{,}5 = 1{,}5$ ✓ ; $h(0) = -2{,}5$ ✓ ; $h(3) = -0{,}5 \\times 9 + 9 - 2{,}5 = -4{,}5 + 9 - 2{,}5 = 2$ ✓.`
    },
    {
      id: "Org1-ds-04",
      title: "L'aire d'un rectangle de périmètre fixé",
      difficulty: 2,
      points: 5,
      statement: `On considère des rectangles de périmètre $20$ cm. On note $x$ la largeur (en cm) et $\\mathcal{A}(x)$ l'aire (en cm²), avec $0 < x < 10$.

1. Montrer que la longueur du rectangle est $10 - x$, puis que $\\mathcal{A}(x) = x(10 - x)$.
2. Recopier et compléter le tableau de valeurs :

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $\\mathcal{A}(x)$ | | | | | | | | | |

3. Quels sont les antécédents de $21$ par la fonction $\\mathcal{A}$ ? Interpréter.
4. D'après le tableau, pour quelle valeur de $x$ l'aire semble-t-elle maximale ? Quelle est alors la nature du rectangle ?`,
      solution: `**1.** Le demi-périmètre vaut $10$ cm, donc longueur $+$ largeur $= 10$ : la longueur est $10 - x$. L'aire est $\\mathcal{A}(x) = x(10 - x)$.

**2.**

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $\\mathcal{A}(x)$ | $9$ | $16$ | $21$ | $24$ | $25$ | $24$ | $21$ | $16$ | $9$ |

**3.** Les antécédents de $21$ sont $3$ et $7$ : un rectangle de $3$ cm sur $7$ cm a une aire de $21$ cm² (les deux valeurs donnent le même rectangle, en échangeant largeur et longueur).

**4.** L'aire semble maximale pour $x = 5$ ($25$ cm²). La longueur vaut alors $10 - 5 = 5$ cm : le rectangle est un **carré**.`
    },
    {
      id: "Org1-ds-05",
      title: "La chute d'un objet",
      difficulty: 3,
      points: 5,
      statement: `On lâche une bille sans vitesse initiale. En négligeant les frottements de l'air, la distance $d(t)$ parcourue (en mètres) au bout de $t$ secondes est donnée par $d(t) = 4{,}9t^2$.

1. Calculer $d(2)$ et $d(3)$. Interpréter $d(2)$ par une phrase.
2. La distance parcourue est-elle proportionnelle à la durée de chute ? Justifier.
3. Au bout de combien de temps la bille a-t-elle parcouru $78{,}4$ m ?
4. On lâche la bille du haut d'un pont, à $50$ m au-dessus de l'eau. Au bout de combien de temps touche-t-elle l'eau ? Arrondir au centième de seconde.`,
      solution: `**1.** $d(2) = 4{,}9 \\times 4 = 19{,}6$ et $d(3) = 4{,}9 \\times 9 = 44{,}1$. Au bout de $2$ secondes, la bille a parcouru $19{,}6$ m.

**2.** $\\dfrac{d(2)}{2} = 9{,}8$ et $\\dfrac{d(3)}{3} = 14{,}7$ : ces quotients ne sont pas égaux, donc la distance n'est **pas** proportionnelle à la durée (la bille accélère).

**3.** On résout $4{,}9t^2 = 78{,}4$, soit $t^2 = 16$. Comme $t > 0$, $t = 4$ s.

**4.** $4{,}9t^2 = 50$, soit $t^2 = \\dfrac{50}{4{,}9}$, donc $t = \\sqrt{\\dfrac{50}{4{,}9}} \\approx 3{,}19$ s.`
    },
    {
      id: "Org1-ds-06",
      title: "Deux fonctions qui se rencontrent",
      difficulty: 3,
      points: 5,
      statement: `On considère les fonctions $f$ et $g$ définies par $f(x) = x^2 + x$ et $g(x) = 3x + 3$.

1. Recopier et compléter le tableau :

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | | | | | | | |
| $g(x)$ | | | | | | | |

2. D'après le tableau, pour quelles valeurs de $x$ semble-t-on avoir $f(x) = g(x)$ ?
3. Montrer que $f(x) - g(x) = (x - 3)(x + 1)$ pour tout nombre $x$.
4. Résoudre l'équation $f(x) = g(x)$. En déduire les coordonnées des points d'intersection des courbes représentatives de $f$ et $g$.`,
      solution: `**1.**

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $2$ | $0$ | $0$ | $2$ | $6$ | $12$ | $20$ |
| $g(x)$ | $-3$ | $0$ | $3$ | $6$ | $9$ | $12$ | $15$ |

**2.** Les valeurs sont égales pour $x = -1$ et $x = 3$.

**3.** $f(x) - g(x) = x^2 + x - 3x - 3 = x^2 - 2x - 3$, et $(x - 3)(x + 1) = x^2 + x - 3x - 3 = x^2 - 2x - 3$. Les deux expressions sont égales.

**4.** $f(x) = g(x)$ équivaut à $(x - 3)(x + 1) = 0$, soit $x = 3$ ou $x = -1$ (produit nul). Les courbes se coupent aux points $(-1\\,;\\,0)$ et $(3\\,;\\,12)$, puisque $f(-1) = 0$ et $f(3) = 12$.`
    },
    {
      id: "Org1-ds-07",
      title: "La recette du cinéma",
      difficulty: 4,
      points: 6,
      statement: `Un petit cinéma de quartier constate que, si le prix d'une place est $p$ euros (avec $0 \\leqslant p \\leqslant 15$), le nombre de spectateurs par séance est $N(p) = 300 - 20p$. La recette d'une séance, en euros, est notée $R(p)$.

1. Calculer le nombre de spectateurs et la recette pour une place à $5$ €, puis à $8$ €.
2. Justifier que $R(p) = p(300 - 20p)$.
3. Montrer que $R(p) = 1\\,125 - 20(p - 7{,}5)^2$.
4. En déduire le prix qui rend la recette maximale, et la valeur de cette recette maximale.
5. Pour quels prix la recette est-elle égale à $1\\,000$ € ?`,
      solution: `**1.** $p = 5$ : $N = 300 - 100 = 200$ spectateurs, recette $5 \\times 200 = 1\\,000$ €.
$p = 8$ : $N = 300 - 160 = 140$ spectateurs, recette $8 \\times 140 = 1\\,120$ €.

**2.** Recette $=$ prix d'une place $\\times$ nombre de spectateurs : $R(p) = p \\times N(p) = p(300 - 20p)$.

**3.** $1\\,125 - 20(p - 7{,}5)^2 = 1\\,125 - 20(p^2 - 15p + 56{,}25) = 1\\,125 - 20p^2 + 300p - 1\\,125 = 300p - 20p^2$, et $p(300 - 20p) = 300p - 20p^2$. Les deux expressions sont égales.

**4.** $(p - 7{,}5)^2 \\geqslant 0$, donc $R(p) \\leqslant 1\\,125$, avec égalité lorsque $p = 7{,}5$. La recette est maximale pour une place à $7{,}50$ € ; elle vaut alors $1\\,125$ € (avec $150$ spectateurs).

**5.** $R(p) = 1\\,000$ équivaut à $20(p - 7{,}5)^2 = 125$, soit $(p - 7{,}5)^2 = 6{,}25$, soit $p - 7{,}5 = 2{,}5$ ou $p - 7{,}5 = -2{,}5$. Donc $p = 10$ ou $p = 5$.
Vérification : $R(10) = 10 \\times 100 = 1\\,000$ €.`
    },
    {
      id: "Org1-ds-08",
      title: "Un triangle dans un carré",
      difficulty: 4,
      points: 5,
      statement: `$ABCD$ est un carré de côté $8$ cm. $M$ est un point de $[AB]$ et $N$ un point de $[BC]$ tels que $AM = BN = x$ (en cm), avec $0 \\leqslant x \\leqslant 8$. On note $f(x)$ l'aire du triangle $DMN$, en cm².

1. Exprimer en fonction de $x$ l'aire des triangles $DAM$, $MBN$ et $NCD$.
2. En déduire que $f(x) = 0{,}5x^2 - 4x + 32$.
3. Calculer $f(0)$ et interpréter géométriquement le résultat.
4. Montrer que $f(x) = 0{,}5(x - 4)^2 + 24$.
5. En déduire la position de $M$ pour laquelle l'aire du triangle $DMN$ est minimale, et cette aire minimale.`,
      solution: `**1.** Ce sont des triangles rectangles (angles du carré) :
- $DAM$ rectangle en $A$ : $\\dfrac{8 \\times x}{2} = 4x$ ;
- $MBN$ rectangle en $B$, avec $MB = 8 - x$ et $BN = x$ : $\\dfrac{x(8 - x)}{2} = 4x - 0{,}5x^2$ ;
- $NCD$ rectangle en $C$, avec $NC = 8 - x$ : $\\dfrac{8(8 - x)}{2} = 32 - 4x$.

**2.** On retire ces trois aires à celle du carré ($64$ cm²) :
$$f(x) = 64 - 4x - (4x - 0{,}5x^2) - (32 - 4x) = 0{,}5x^2 - 4x + 32.$$

**3.** $f(0) = 32$ cm². Pour $x = 0$, $M = A$ et $N = B$ : le triangle $DMN$ est le triangle $DAB$, moitié du carré ($32$ cm²).

**4.** $0{,}5(x - 4)^2 + 24 = 0{,}5(x^2 - 8x + 16) + 24 = 0{,}5x^2 - 4x + 8 + 24 = 0{,}5x^2 - 4x + 32 = f(x)$.

**5.** $(x - 4)^2 \\geqslant 0$, donc $f(x) \\geqslant 24$, avec égalité pour $x = 4$. L'aire est minimale lorsque $M$ est le milieu de $[AB]$ (et $N$ celui de $[BC]$) ; elle vaut alors $24$ cm².`
    },
    {
      id: "Org1-ds-09",
      title: "La distance de freinage",
      difficulty: 1,
      points: 4,
      statement: `Sur route sèche, on estime la distance de freinage d'une voiture (en mètres) à l'aide de la fonction $d$ définie par $d(v) = 0{,}01 \\times v^2$, où $v$ est la vitesse en km/h.

1. Calculer $d(50)$, $d(90)$ et $d(130)$. Interpréter $d(90)$ par une phrase.
2. Compléter la phrase : « $81$ est … de $90$ par la fonction $d$ ; $90$ est … de $81$. »
3. À quelle vitesse roulait une voiture dont la distance de freinage est de $36$ m ?
4. Un automobiliste pense que, s'il roule deux fois plus vite, il lui faut deux fois plus de distance pour freiner. A-t-il raison ? Justifier avec un exemple.`,
      solution: `**1.** $d(50) = 0{,}01 \\times 2\\,500 = 25$ ; $d(90) = 0{,}01 \\times 8\\,100 = 81$ ; $d(130) = 0{,}01 \\times 16\\,900 = 169$.
$d(90) = 81$ signifie qu'à $90$ km/h, la distance de freinage est de $81$ m.

**2.** « $81$ est **l'image** de $90$ par la fonction $d$ ; $90$ est **un antécédent** de $81$. »

**3.** On cherche $v$ positif tel que $0{,}01 v^2 = 36$, soit $v^2 = 3\\,600$. Comme $v > 0$, $v = 60$. La voiture roulait à $60$ km/h.

**4.** Non : $d(50) = 25$ m mais $d(100) = 0{,}01 \\times 10\\,000 = 100$ m. En doublant la vitesse, la distance de freinage est multipliée par $4$ (car $(2v)^2 = 4v^2$) : la distance n'est pas proportionnelle à la vitesse.`
    },
    {
      id: "Org1-ds-10",
      title: "La boîte sans couvercle",
      difficulty: 2,
      points: 5,
      statement: `Dans une plaque carrée de carton de $20$ cm de côté, on découpe aux quatre coins un carré de côté $x$ cm, puis on replie les bords pour obtenir une boîte sans couvercle (un pavé droit).

1. Expliquer pourquoi $x$ est compris entre $0$ et $10$.
2. Justifier que le volume de la boîte, en cm³, est $V(x) = x(20 - 2x)^2$.
3. Recopier et compléter le tableau de valeurs suivant.

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $8$ |
|---|---|---|---|---|---|---|---|
| $V(x)$ | | | | | | | |

4. Parmi les valeurs du tableau, laquelle donne la boîte de plus grand volume ?
5. Calculer $V(3{,}5)$. Que peut-on en conclure ?`,
      solution: `**1.** $x$ est une longueur, donc $x > 0$. De plus, on retire deux carrés de côté $x$ sur chaque côté de $20$ cm : il faut $2x < 20$, soit $x < 10$.

**2.** Le fond de la boîte est un carré de côté $20 - 2x$ et sa hauteur est $x$. Volume d'un pavé droit : aire de la base $\\times$ hauteur, donc $V(x) = (20 - 2x)^2 \\times x = x(20 - 2x)^2$.

**3.** Par exemple, $V(3) = 3 \\times 14^2 = 3 \\times 196 = 588$.

| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $8$ |
|---|---|---|---|---|---|---|---|
| $V(x)$ | $324$ | $512$ | $588$ | $576$ | $500$ | $384$ | $128$ |

**4.** Le plus grand volume du tableau est $588$ cm³, obtenu pour $x = 3$.

**5.** $V(3{,}5) = 3{,}5 \\times 13^2 = 3{,}5 \\times 169 = 591{,}5$ cm³. Ce volume est supérieur à $588$ cm³ : le tableau ne suffit pas pour trouver le volume maximal, qui n'est pas forcément atteint pour une valeur entière de $x$.`
    },
    {
      id: "Org1-ds-11",
      title: "Le tarif d'envoi d'une lettre",
      difficulty: 3,
      points: 5,
      statement: `Un service postal fixe le prix d'envoi d'une lettre en fonction de sa masse $m$ (en grammes) :

| Masse $m$ | jusqu'à $20$ g | plus de $20$ g et jusqu'à $100$ g | plus de $100$ g et jusqu'à $250$ g | plus de $250$ g et jusqu'à $500$ g |
|---|---|---|---|---|
| Prix | $1{,}50$ € | $3$ € | $4{,}50$ € | $6$ € |

On note $p$ la fonction qui, à la masse $m$ d'une lettre (comprise entre $0$ et $500$ g), associe son prix d'envoi.

1. Donner $p(15)$, $p(20)$, $p(120)$ et $p(400)$.
2. a) Donner trois antécédents de $3$ par la fonction $p$.
   b) Décrire l'ensemble de tous les antécédents de $3$, en utilisant un intervalle.
3. Le nombre $5$ a-t-il un antécédent par la fonction $p$ ? Justifier.
4. Le prix est-il proportionnel à la masse ? Justifier.
5. Noé doit envoyer deux documents de $90$ g chacun. Est-il plus économique de les envoyer séparément ou dans une seule enveloppe ? (On néglige la masse des enveloppes.)`,
      solution: `**1.** $15 \\leqslant 20$, donc $p(15) = 1{,}50$ ; $p(20) = 1{,}50$ (« jusqu'à $20$ g » inclut $20$ g) ; $120$ est entre $100$ et $250$, donc $p(120) = 4{,}50$ ; $p(400) = 6$.

**2. a)** Toute masse strictement supérieure à $20$ g et inférieure ou égale à $100$ g coûte $3$ € : par exemple $21$, $50$ et $100$ sont des antécédents de $3$.

**b)** Les antécédents de $3$ sont tous les nombres de l'intervalle $]20 ; 100]$ : il y en a une infinité.

**3.** Les seules images possibles sont $1{,}50$ ; $3$ ; $4{,}50$ et $6$. Le nombre $5$ n'en fait pas partie : il n'a **aucun** antécédent.

**4.** Non : $p(15) = 1{,}50$ et $p(120) = 4{,}50$. La masse est multipliée par $\\dfrac{120}{15} = 8$ alors que le prix n'est multiplié que par $3$. Le prix n'est pas proportionnel à la masse.

**5.** Séparément : $p(90) + p(90) = 3 + 3 = 6$ €. Ensemble : $p(180) = 4{,}50$ €. Il est plus économique de les envoyer dans une seule enveloppe (économie de $1{,}50$ €).`
    },
    {
      id: "Org1-ds-12",
      title: "Une fonction et sa forme cachée",
      difficulty: 4,
      points: 6,
      statement: `On considère la fonction $f$ définie par $f(x) = x^2 - 4x + 1$.

1. Calculer $f(0)$, $f(4)$, $f(-1)$ et $f(5)$. Que remarque-t-on ?
2. Déterminer tous les antécédents de $1$ par la fonction $f$.
3. a) Démontrer que, pour tout nombre $x$, $f(x) = (x - 2)^2 - 3$.
   b) En déduire tous les antécédents de $-3$, puis tous les antécédents de $6$.
4. Le nombre $-4$ a-t-il un antécédent par $f$ ? Justifier.
5. Quelle est la plus petite valeur que puisse prendre $f(x)$ ? Pour quelle valeur de $x$ est-elle atteinte ?`,
      solution: `**1.** $f(0) = 0 - 0 + 1 = 1$ ; $f(4) = 16 - 16 + 1 = 1$ ; $f(-1) = 1 + 4 + 1 = 6$ ; $f(5) = 25 - 20 + 1 = 6$.
On remarque que $0$ et $4$ ont la même image, ainsi que $-1$ et $5$ : un nombre peut avoir plusieurs antécédents.

**2.** On résout $x^2 - 4x + 1 = 1$, soit $x^2 - 4x = 0$, c'est-à-dire $x(x - 4) = 0$. Un produit est nul si et seulement si l'un de ses facteurs est nul : $x = 0$ ou $x = 4$. Les antécédents de $1$ sont $0$ et $4$.

**3. a)** $(x - 2)^2 - 3 = x^2 - 4x + 4 - 3 = x^2 - 4x + 1 = f(x)$ (identité remarquable $(a - b)^2 = a^2 - 2ab + b^2$).

**b)** $f(x) = -3$ équivaut à $(x - 2)^2 = 0$, soit $x - 2 = 0$ : le seul antécédent de $-3$ est $2$.
$f(x) = 6$ équivaut à $(x - 2)^2 = 9$, soit $x - 2 = 3$ ou $x - 2 = -3$ : les antécédents de $6$ sont $5$ et $-1$ (ce qui confirme la question 1).

**4.** $f(x) = -4$ équivaudrait à $(x - 2)^2 = -1$. Or un carré est toujours positif ou nul : c'est impossible. Le nombre $-4$ n'a pas d'antécédent.

**5.** Pour tout $x$, $(x - 2)^2 \\geqslant 0$, donc $f(x) = (x - 2)^2 - 3 \\geqslant -3$. La plus petite valeur de $f(x)$ est $-3$, atteinte pour $x = 2$.`
    }
  ],
  "Org2": [
    {
      id: "Org2-ds-01",
      title: "Températures de la semaine",
      difficulty: 1,
      points: 4,
      statement: `On a relevé la température (en °C) à midi pendant $9$ jours consécutifs :
$$12 \\;;\\; 8 \\;;\\; 15 \\;;\\; 10 \\;;\\; 14 \\;;\\; 9 \\;;\\; 17 \\;;\\; 11 \\;;\\; 13$$

1. Calculer la température moyenne, arrondie au dixième de degré.
2. Déterminer la température médiane. Justifier.
3. Calculer l'étendue de cette série.
4. Le dixième jour, la température est de $22$ °C. La médiane change-t-elle ? Déterminer la nouvelle médiane.`,
      solution: `**1.** Somme : $12 + 8 + 15 + 10 + 14 + 9 + 17 + 11 + 13 = 109$. Moyenne : $\\dfrac{109}{9} \\approx 12{,}1$ °C.

**2.** On range la série dans l'ordre croissant : $8 ; 9 ; 10 ; 11 ; 12 ; 13 ; 14 ; 15 ; 17$. Il y a $9$ valeurs (nombre impair) : la médiane est la $5^\\text{e}$ valeur, soit $12$ °C.

**3.** Étendue : $17 - 8 = 9$ °C.

**4.** Avec $10$ valeurs ($8 ; 9 ; 10 ; 11 ; 12 ; 13 ; 14 ; 15 ; 17 ; 22$), la médiane est la moyenne des $5^\\text{e}$ et $6^\\text{e}$ valeurs : $\\dfrac{12 + 13}{2} = 12{,}5$ °C. Elle a changé.`
    },
    {
      id: "Org2-ds-02",
      title: "Frères et sœurs",
      difficulty: 1,
      points: 4,
      statement: `On a demandé aux $25$ élèves d'une classe combien ils ont de frères et sœurs.

| Nombre de frères et sœurs | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Effectif | $5$ | $9$ | $7$ | $3$ | $1$ |

1. Calculer le nombre moyen de frères et sœurs par élève.
2. Calculer les effectifs cumulés croissants, puis déterminer la médiane de la série.
3. Quel pourcentage des élèves a exactement $2$ frères et sœurs ?
4. Quel pourcentage des élèves a au moins $2$ frères et sœurs ?`,
      solution: `**1.** Moyenne pondérée par les effectifs :
$$\\bar{x} = \\frac{0 \\times 5 + 1 \\times 9 + 2 \\times 7 + 3 \\times 3 + 4 \\times 1}{25} = \\frac{36}{25} = 1{,}44.$$

**2.** Effectifs cumulés croissants : $5$ ; $14$ ; $21$ ; $24$ ; $25$. L'effectif total est $25$ (impair) : la médiane est la $13^\\text{e}$ valeur. Comme $5 < 13 \\leqslant 14$, la $13^\\text{e}$ valeur est $1$ : la médiane est $1$.

**3.** $\\dfrac{7}{25} = 0{,}28$, soit $28\\,\\%$.

**4.** $7 + 3 + 1 = 11$ élèves ; $\\dfrac{11}{25} = 0{,}44$, soit $44\\,\\%$.`
    },
    {
      id: "Org2-ds-03",
      title: "Les pointures",
      difficulty: 2,
      points: 5,
      statement: `Un magasin de chaussures a relevé les pointures des $30$ paires vendues un samedi.

| Pointure | $36$ | $37$ | $38$ | $39$ | $40$ | $41$ | $42$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Effectif | $2$ | $5$ | $8$ | $6$ | $4$ | $3$ | $2$ |

1. Calculer la pointure moyenne, arrondie au centième.
2. Calculer les effectifs cumulés croissants et déterminer la pointure médiane.
3. Quel pourcentage des paires vendues ont une pointure supérieure ou égale à $40$ ?
4. Le gérant dit : « La moitié de mes clients chaussent du $38$ ou moins. » A-t-il raison ?`,
      solution: `**1.** $$\\bar{x} = \\frac{36 \\times 2 + 37 \\times 5 + 38 \\times 8 + 39 \\times 6 + 40 \\times 4 + 41 \\times 3 + 42 \\times 2}{30} = \\frac{1\\,162}{30} \\approx 38{,}73.$$

**2.** Effectifs cumulés : $2$ ; $7$ ; $15$ ; $21$ ; $25$ ; $28$ ; $30$. L'effectif total est pair ($30$) : la médiane est la moyenne des $15^\\text{e}$ et $16^\\text{e}$ valeurs, soit $\\dfrac{38 + 39}{2} = 38{,}5$.

**3.** $4 + 3 + 2 = 9$ paires ; $\\dfrac{9}{30} = 0{,}3$, soit $30\\,\\%$.

**4.** $15$ paires sur $30$ sont de pointure $38$ ou moins (effectif cumulé de $38$) : c'est exactement la moitié, le gérant a raison.`
    },
    {
      id: "Org2-ds-04",
      title: "Quelle note viser ?",
      difficulty: 2,
      points: 5,
      statement: `1. Léa a obtenu $5$ notes dont la moyenne est $12$. Quelle note doit-elle obtenir au sixième contrôle pour que sa moyenne passe à $13$ ?
2. Hugo a eu les notes suivantes, avec des coefficients :

| Note | $14$ | $9$ | $11$ | $x$ |
|:---:|:---:|:---:|:---:|:---:|
| Coefficient | $2$ | $1$ | $3$ | $2$ |

   a) Calculer sa moyenne si $x = 10$.
   b) Quelle note $x$ lui faut-il pour obtenir une moyenne de $12$ ?
3. Peut-il espérer une moyenne de $14$ ? Justifier.`,
      solution: `**1.** La somme des $5$ notes est $5 \\times 12 = 60$. Pour une moyenne de $13$ sur $6$ notes, la somme doit être $6 \\times 13 = 78$. Il faut donc $78 - 60 = 18$ au sixième contrôle.

**2. a)** Somme des coefficients : $2 + 1 + 3 + 2 = 8$.
$$\\bar{x} = \\frac{14 \\times 2 + 9 \\times 1 + 11 \\times 3 + 10 \\times 2}{8} = \\frac{28 + 9 + 33 + 20}{8} = \\frac{90}{8} = 11{,}25.$$
**b)** On résout $\\dfrac{70 + 2x}{8} = 12$, soit $70 + 2x = 96$, donc $x = 13$.

**3.** Il faudrait $70 + 2x = 14 \\times 8 = 112$, soit $x = 21$. C'est impossible, une note étant au plus égale à $20$.`
    },
    {
      id: "Org2-ds-05",
      title: "Choisir un sprinteur",
      difficulty: 3,
      points: 5,
      statement: `Un entraîneur doit choisir un sprinteur pour une course de $100$ m. Voici les temps (en secondes) d'Adam et de Bilal lors des sept dernières courses :

| Course | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Adam | $12{,}1$ | $12{,}3$ | $11{,}9$ | $12{,}0$ | $12{,}4$ | $12{,}2$ | $12{,}0$ |
| Bilal | $11{,}6$ | $12{,}8$ | $11{,}8$ | $12{,}9$ | $11{,}7$ | $12{,}6$ | $11{,}9$ |

1. Calculer le temps moyen de chaque coureur, arrondi au centième.
2. Déterminer le temps médian de chaque coureur.
3. Calculer l'étendue des temps de chaque coureur.
4. Quel coureur l'entraîneur devrait-il choisir ? Argumenter à l'aide des indicateurs précédents (plusieurs réponses peuvent être défendues).`,
      solution: `**1.** Adam : $\\dfrac{84{,}9}{7} \\approx 12{,}13$ s. Bilal : $\\dfrac{85{,}3}{7} \\approx 12{,}19$ s.

**2.** Adam, valeurs rangées : $11{,}9 ; 12{,}0 ; 12{,}0 ; 12{,}1 ; 12{,}2 ; 12{,}3 ; 12{,}4$ ; médiane ($4^\\text{e}$ valeur) : $12{,}1$ s.
Bilal : $11{,}6 ; 11{,}7 ; 11{,}8 ; 11{,}9 ; 12{,}6 ; 12{,}8 ; 12{,}9$ ; médiane : $11{,}9$ s.

**3.** Adam : $12{,}4 - 11{,}9 = 0{,}5$ s. Bilal : $12{,}9 - 11{,}6 = 1{,}3$ s.

**4.** Adam a une moyenne un peu meilleure et une étendue faible : il est **régulier**. Bilal a une médiane meilleure (plus de la moitié de ses courses en $11{,}9$ s ou moins) et le meilleur temps, mais il est irrégulier. Pour assurer un bon résultat, on peut choisir Adam ; pour tenter de gagner une course très disputée, on peut préférer Bilal.`
    },
    {
      id: "Org2-ds-06",
      title: "Une erreur de saisie",
      difficulty: 3,
      points: 5,
      statement: `Un professeur d'EPS a relevé les distances (en m) parcourues par $10$ élèves lors d'un lancer :
$$38 \\;;\\; 44 \\;;\\; 32 \\;;\\; 47 \\;;\\; 41 \\;;\\; 63 \\;;\\; 35 \\;;\\; 58 \\;;\\; 43 \\;;\\; 39$$

1. Calculer la moyenne, la médiane et l'étendue de cette série.
2. Le professeur s'aperçoit qu'il a inversé deux chiffres : l'élève crédité de $58$ m a en réalité lancé à $85$ m. Calculer les nouvelles valeurs de la moyenne, de la médiane et de l'étendue.
3. Quel indicateur n'a pas été modifié ? Expliquer pourquoi.
4. Si l'on ajoutait $2$ m à toutes les valeurs (série corrigée), comment évolueraient la moyenne, la médiane et l'étendue ?`,
      solution: `**1.** Somme : $440$, donc moyenne $\\dfrac{440}{10} = 44$ m.
Série rangée : $32 ; 35 ; 38 ; 39 ; 41 ; 43 ; 44 ; 47 ; 58 ; 63$. Effectif pair : médiane $= \\dfrac{41 + 43}{2} = 42$ m.
Étendue : $63 - 32 = 31$ m.

**2.** La somme augmente de $85 - 58 = 27$ : moyenne $\\dfrac{467}{10} = 46{,}7$ m.
Série rangée : $32 ; 35 ; 38 ; 39 ; 41 ; 43 ; 44 ; 47 ; 63 ; 85$ : médiane toujours $42$ m.
Étendue : $85 - 32 = 53$ m.

**3.** La médiane n'a pas changé : elle ne dépend que des valeurs centrales ($5^\\text{e}$ et $6^\\text{e}$), et la valeur modifiée reste parmi les plus grandes. La médiane est peu sensible aux valeurs extrêmes, contrairement à la moyenne et à l'étendue.

**4.** La moyenne et la médiane augmenteraient de $2$ m ($48{,}7$ m et $44$ m) ; l'étendue ne changerait pas ($53$ m), car l'écart entre la plus grande et la plus petite valeur reste le même.`
    },
    {
      id: "Org2-ds-07",
      title: "Retrouver une série",
      difficulty: 4,
      points: 6,
      statement: `On cherche des séries de $5$ nombres entiers, notés dans l'ordre croissant $a \\leqslant b \\leqslant c \\leqslant d \\leqslant e$, dont la moyenne est $10$, la médiane $12$ et l'étendue $8$.

1. Vérifier que la série $6 ; 6 ; 12 ; 12 ; 14$ convient.
2. Justifier que $c = 12$, $e = a + 8$ et $a + b + d + e = 38$, puis que $2a + b + d = 30$.
3. En utilisant $d \\geqslant 12$ et $b \\geqslant a$, montrer que $a \\leqslant 6$. En utilisant $d \\leqslant e = a + 8$ et $b \\leqslant 12$, montrer que $a \\geqslant 4$.
4. Trouver toutes les séries qui conviennent.`,
      solution: `**1.** Moyenne : $\\dfrac{6 + 6 + 12 + 12 + 14}{5} = \\dfrac{50}{5} = 10$ ; médiane (3e valeur) : $12$ ; étendue : $14 - 6 = 8$. La série convient.

**2.** Il y a $5$ valeurs rangées : la médiane est la $3^\\text{e}$, donc $c = 12$. L'étendue vaut $e - a = 8$, donc $e = a + 8$. La somme vaut $5 \\times 10 = 50$, donc $a + b + d + e = 50 - 12 = 38$, puis, en remplaçant $e$ : $a + b + d + a + 8 = 38$, soit $2a + b + d = 30$.

**3.** Comme $b \\geqslant a$ et $d \\geqslant 12$ : $30 = 2a + b + d \\geqslant 2a + a + 12$, donc $3a \\leqslant 18$, soit $a \\leqslant 6$.
Comme $b \\leqslant 12$ et $d \\leqslant a + 8$ : $30 \\leqslant 2a + 12 + a + 8$, donc $3a \\geqslant 10$, soit $a \\geqslant 4$ (car $a$ est entier).

**4.** On a $b + d = 30 - 2a$ avec $a \\leqslant b \\leqslant 12 \\leqslant d \\leqslant a + 8$.
- $a = 4$ : $b + d = 22$ et $d \\leqslant 12$, donc $d = 12$, $b = 10$ : $4 ; 10 ; 12 ; 12 ; 12$.
- $a = 5$ : $b + d = 20$ et $12 \\leqslant d \\leqslant 13$ : $(b, d) = (8, 12)$ ou $(7, 13)$ : $5 ; 8 ; 12 ; 12 ; 13$ et $5 ; 7 ; 12 ; 13 ; 13$.
- $a = 6$ : $b + d = 18$ avec $b \\geqslant 6$ et $d \\geqslant 12$, donc $b = 6$, $d = 12$ : $6 ; 6 ; 12 ; 12 ; 14$.
Il y a donc **quatre** séries possibles.`
    },
    {
      id: "Org2-ds-08",
      title: "La moyenne de deux classes",
      difficulty: 4,
      points: 5,
      statement: `Deux classes de 3e ont passé le même brevet blanc. La classe A compte $24$ élèves et a obtenu une moyenne de $11$ ; la classe B compte $26$ élèves et a obtenu une moyenne de $13{,}5$.

1. Un élève affirme : « La moyenne des deux classes réunies est $\\dfrac{11 + 13{,}5}{2} = 12{,}25$. » Expliquer pourquoi c'est faux.
2. Calculer la moyenne des $50$ élèves.
3. Après correction d'une erreur de barème, chaque élève de la classe A gagne $1$ point. Calculer la nouvelle moyenne des deux classes réunies.
4. Partant de la situation initiale, combien de points au total faudrait-il ajouter aux élèves de la classe A pour que la moyenne des $50$ élèves atteigne $13$ ? Combien cela représente-t-il en moyenne par élève de la classe A ?`,
      solution: `**1.** Les deux classes n'ont pas le même effectif : la classe B, plus nombreuse, doit « peser » davantage. Il faut calculer une moyenne pondérée par les effectifs.

**2.** Total des points : $24 \\times 11 + 26 \\times 13{,}5 = 264 + 351 = 615$. Moyenne : $\\dfrac{615}{50} = 12{,}3$.

**3.** La classe A gagne $24$ points au total : $\\dfrac{615 + 24}{50} = \\dfrac{639}{50} = 12{,}78$.

**4.** Pour une moyenne de $13$, il faut un total de $13 \\times 50 = 650$ points, soit $650 - 615 = 35$ points de plus. Par élève de la classe A : $\\dfrac{35}{24} \\approx 1{,}46$ point.`
    },
    {
      id: "Org2-ds-09",
      title: "La consommation d'électricité",
      difficulty: 1,
      points: 4,
      statement: `Une famille a relevé sa consommation d'électricité (en kWh) chaque mois de l'année :

| Mois | janv. | févr. | mars | avr. | mai | juin | juil. | août | sept. | oct. | nov. | déc. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Consommation (kWh) | $410$ | $390$ | $350$ | $280$ | $210$ | $160$ | $150$ | $170$ | $230$ | $300$ | $360$ | $410$ |

1. Calculer la consommation totale sur l'année, puis la consommation mensuelle moyenne.
2. Déterminer la médiane de cette série. Interpréter le résultat.
3. Calculer l'étendue de la série.
4. Le kWh coûte $0{,}25$ €. Quel est le coût annuel de l'électricité pour cette famille ?`,
      solution: `**1.** Total : $410 + 390 + 350 + 280 + 210 + 160 + 150 + 170 + 230 + 300 + 360 + 410 = 3\\,420$ kWh.
Moyenne : $\\dfrac{3\\,420}{12} = 285$ kWh par mois.

**2.** On range les $12$ valeurs dans l'ordre croissant :
$150$ ; $160$ ; $170$ ; $210$ ; $230$ ; $280$ ; $300$ ; $350$ ; $360$ ; $390$ ; $410$ ; $410$.
L'effectif est pair : la médiane est la moyenne des $6^\\text{e}$ et $7^\\text{e}$ valeurs, $\\dfrac{280 + 300}{2} = 290$ kWh.
Pendant la moitié des mois au moins, la consommation est inférieure ou égale à $290$ kWh, et pendant la moitié au moins, elle est supérieure ou égale à $290$ kWh.

**3.** Étendue : $410 - 150 = 260$ kWh.

**4.** $3\\,420 \\times 0{,}25 = 855$ €.`
    },
    {
      id: "Org2-ds-10",
      title: "Les buts d'une équipe de football",
      difficulty: 2,
      points: 5,
      statement: `Le tableau suivant indique le nombre de buts marqués par l'équipe de football des moins de $15$ ans d'un club lors de chacun de ses matchs de la saison :

| Nombre de buts | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|---|---|---|---|---|---|---|
| Nombre de matchs | $4$ | $7$ | $6$ | $5$ | $2$ | $1$ |

1. Combien de matchs l'équipe a-t-elle joués ?
2. Calculer la fréquence, en pourcentage, des matchs sans but marqué.
3. Calculer le nombre moyen de buts par match.
4. Déterminer la médiane de cette série.
5. L'entraîneur affirme : « Nous avons marqué au moins deux buts dans plus de la moitié de nos matchs. » A-t-il raison ?`,
      solution: `**1.** $4 + 7 + 6 + 5 + 2 + 1 = 25$ matchs.

**2.** $\\dfrac{4}{25} = 0{,}16$, soit $16\\,\\%$ des matchs.

**3.** Moyenne pondérée par les effectifs :
$$\\frac{0 \\times 4 + 1 \\times 7 + 2 \\times 6 + 3 \\times 5 + 4 \\times 2 + 5 \\times 1}{25} = \\frac{47}{25} = 1{,}88.$$
L'équipe a marqué en moyenne $1{,}88$ but par match.

**4.** L'effectif $25$ est impair : la médiane est la $13^\\text{e}$ valeur de la série rangée. Effectifs cumulés : $4$ ; $11$ ; $17$… La $13^\\text{e}$ valeur correspond donc à $2$ buts : la médiane est $2$.

**5.** Matchs avec au moins deux buts : $6 + 5 + 2 + 1 = 14$, soit $\\dfrac{14}{25} = 56\\,\\%$ des matchs. Comme $56\\,\\% > 50\\,\\%$, l'entraîneur a raison.`
    },
    {
      id: "Org2-ds-11",
      title: "Deux machines de remplissage",
      difficulty: 3,
      points: 5,
      statement: `Une usine remplit des bouteilles de $50$ cl. Une bouteille est conforme si son volume est compris entre $49{,}5$ cl et $50{,}5$ cl (bornes comprises). On a mesuré le volume de huit bouteilles remplies par chacune des deux machines :

| Machine A (cl) | $49{,}8$ | $50{,}1$ | $50{,}0$ | $49{,}9$ | $50{,}2$ | $50{,}0$ | $49{,}7$ | $50{,}3$ |
|---|---|---|---|---|---|---|---|---|
| **Machine B (cl)** | $49{,}2$ | $50{,}6$ | $50{,}1$ | $49{,}9$ | $50{,}8$ | $49{,}4$ | $50{,}0$ | $50{,}0$ |

1. Calculer le volume moyen pour chaque machine.
2. Déterminer la médiane de chaque série.
3. Calculer l'étendue de chaque série.
4. Calculer, pour chaque machine, le pourcentage de bouteilles conformes dans l'échantillon.
5. Le directeur ne peut garder qu'une machine. Laquelle conseiller ? Expliquer pourquoi la moyenne seule ne permet pas de choisir.`,
      solution: `**1.** Machine A : la somme vaut $400$ cl, donc la moyenne est $\\dfrac{400}{8} = 50$ cl.
Machine B : la somme vaut aussi $400$ cl, donc la moyenne est $50$ cl.

**2.** Séries rangées :
A : $49{,}7$ ; $49{,}8$ ; $49{,}9$ ; $50{,}0$ ; $50{,}0$ ; $50{,}1$ ; $50{,}2$ ; $50{,}3$.
B : $49{,}2$ ; $49{,}4$ ; $49{,}9$ ; $50{,}0$ ; $50{,}0$ ; $50{,}1$ ; $50{,}6$ ; $50{,}8$.
L'effectif $8$ est pair : la médiane est la moyenne des $4^\\text{e}$ et $5^\\text{e}$ valeurs, soit $50$ cl pour les deux machines.

**3.** Étendue de A : $50{,}3 - 49{,}7 = 0{,}6$ cl. Étendue de B : $50{,}8 - 49{,}2 = 1{,}6$ cl.

**4.** Machine A : toutes les valeurs sont entre $49{,}5$ et $50{,}5$ : $100\\,\\%$ de bouteilles conformes.
Machine B : $49{,}2$ ; $49{,}4$ ; $50{,}6$ et $50{,}8$ ne sont pas conformes, il reste $4$ bouteilles conformes sur $8$, soit $50\\,\\%$.

**5.** Les deux machines ont la même moyenne et la même médiane : ces indicateurs ne les distinguent pas. L'étendue montre que les volumes de la machine B sont beaucoup plus dispersés, ce qui produit des bouteilles non conformes. Il faut garder la **machine A**.`
    },
    {
      id: "Org2-ds-12",
      title: "L'élève qui arrive en cours d'année",
      difficulty: 4,
      points: 6,
      statement: `Voici les notes sur $20$ obtenues par les neuf élèves d'un groupe d'option :
$$8 \\quad 10 \\quad 12 \\quad 12 \\quad 13 \\quad 15 \\quad 17 \\quad 19 \\quad 20$$

1. Vérifier que la moyenne de ce groupe est $14$ et que sa médiane est $13$.
2. Un dixième élève rejoint le groupe et passe le même devoir. Il obtient la note $x$.
   a) Quelle note $x$ doit-il obtenir pour que la moyenne du groupe devienne $14{,}5$ ?
   b) Avec cette note, quelle est la nouvelle médiane ?
3. Pour quelles notes $x$ (entre $0$ et $20$) l'étendue du groupe reste-t-elle la même ?
4. Démontrer qu'il n'existe qu'une seule note $x$ pour laquelle la médiane du groupe reste égale à $13$.`,
      solution: `**1.** Somme : $8 + 10 + 12 + 12 + 13 + 15 + 17 + 19 + 20 = 126$ ; moyenne : $\\dfrac{126}{9} = 14$.
L'effectif $9$ est impair et la série est rangée : la médiane est la $5^\\text{e}$ valeur, soit $13$.

**2. a)** Il faut que la somme des dix notes soit $10 \\times 14{,}5 = 145$, donc $126 + x = 145$ et $x = 19$.

**b)** Série rangée : $8$ ; $10$ ; $12$ ; $12$ ; $13$ ; $15$ ; $17$ ; $19$ ; $19$ ; $20$. L'effectif $10$ est pair : la médiane est la moyenne des $5^\\text{e}$ et $6^\\text{e}$ valeurs, $\\dfrac{13 + 15}{2} = 14$.

**3.** L'étendue actuelle est $20 - 8 = 12$. Elle reste la même si la nouvelle note n'est ni inférieure à $8$ ni supérieure à $20$, c'est-à-dire pour $8 \\leqslant x \\leqslant 20$.

**4.** Avec dix notes, la médiane est la moyenne des $5^\\text{e}$ et $6^\\text{e}$ valeurs de la série rangée.
- Si $x \\leqslant 12$ : ces valeurs sont $12$ et $13$, la médiane vaut $12{,}5$.
- Si $12 \\leqslant x \\leqslant 13$ : ce sont $x$ et $13$, la médiane vaut $\\dfrac{x + 13}{2}$, égale à $13$ seulement si $x = 13$.
- Si $13 \\leqslant x \\leqslant 15$ : ce sont $13$ et $x$, la médiane vaut $\\dfrac{13 + x}{2}$, égale à $13$ seulement si $x = 13$.
- Si $x \\geqslant 15$ : ce sont $13$ et $15$, la médiane vaut $14$.

La médiane reste égale à $13$ uniquement lorsque $x = 13$.`
    }
  ],
  "Org3": [
    {
      id: "Org3-ds-01",
      title: "Linéaire ou affine ?",
      difficulty: 1,
      points: 4,
      statement: `On considère les fonctions $f$ et $g$ définies par $f(x) = 2{,}5x$ et $g(x) = -3x + 4$.

1. Préciser la nature de chacune de ces fonctions (linéaire, affine). Donner le coefficient directeur et l'ordonnée à l'origine de leurs représentations graphiques.
2. Calculer $f(4)$, $f(-2)$, $g(0)$ et $g(-1)$.
3. Déterminer l'antécédent de $10$ par $f$, puis l'antécédent de $10$ par $g$.
4. Quelle fonction traduit une situation de proportionnalité ? Justifier.`,
      solution: `**1.** $f$ est de la forme $x \\mapsto ax$ : elle est **linéaire** (donc aussi affine), de coefficient $2{,}5$ ; sa droite passe par l'origine (ordonnée à l'origine $0$). $g$ est de la forme $x \\mapsto ax + b$ : elle est **affine**, de coefficient directeur $-3$ et d'ordonnée à l'origine $4$.

**2.** $f(4) = 10$ ; $f(-2) = -5$ ; $g(0) = 4$ ; $g(-1) = 3 + 4 = 7$.

**3.** $2{,}5x = 10$ donne $x = 4$. $-3x + 4 = 10$ donne $-3x = 6$, soit $x = -2$.

**4.** C'est $f$ : une fonction linéaire modélise une situation de proportionnalité ($f(x)$ est proportionnel à $x$, avec le coefficient $2{,}5$). Pour $g$, $g(0) = 4 \\neq 0$, ce n'est pas une situation de proportionnalité.`
    },
    {
      id: "Org3-ds-02",
      title: "Retrouver une expression",
      difficulty: 1,
      points: 4,
      statement: `1. $h$ est une fonction linéaire telle que $h(4) = 6$. Déterminer l'expression de $h(x)$, puis calculer $h(10)$.
2. $k$ est une fonction affine telle que $k(0) = 3$ et $k(2) = 7$. Déterminer l'expression de $k(x)$.
3. Le point $A(5\\,;\\,13)$ appartient-il à la droite représentant $k$ ?`,
      solution: `**1.** $h$ est linéaire : $h(x) = ax$. Comme $h(4) = 6$, $4a = 6$, donc $a = 1{,}5$ et $h(x) = 1{,}5x$. Puis $h(10) = 15$.

**2.** $k$ est affine : $k(x) = ax + b$. $k(0) = b = 3$. Le coefficient directeur est
$$a = \\frac{k(2) - k(0)}{2 - 0} = \\frac{7 - 3}{2} = 2.$$
Donc $k(x) = 2x + 3$.

**3.** $k(5) = 2 \\times 5 + 3 = 13$ : le point $A(5\\,;\\,13)$ appartient à la droite.`
    },
    {
      id: "Org3-ds-03",
      title: "Le prix du taxi",
      difficulty: 2,
      points: 5,
      statement: `Un taxi facture une prise en charge de $4$ € plus $1{,}50$ € par kilomètre parcouru. Un service de voiture avec chauffeur facture $2$ € par kilomètre, sans prise en charge. On note $d$ la distance parcourue, en km.

1. Exprimer le prix $T(d)$ payé avec le taxi et le prix $V(d)$ payé avec la voiture avec chauffeur.
2. Quelle est la nature de chacune de ces fonctions ?
3. Calculer le prix d'un trajet de $20$ km avec chaque service.
4. Avec le taxi, un client a payé $25$ €. Quelle distance a-t-il parcourue ?
5. Pour quelles distances le taxi est-il plus avantageux ? Justifier par le calcul.`,
      solution: `**1.** $T(d) = 1{,}5d + 4$ et $V(d) = 2d$.

**2.** $T$ est une fonction affine (coefficient $1{,}5$, ordonnée à l'origine $4$) ; $V$ est une fonction linéaire (le prix est proportionnel à la distance).

**3.** $T(20) = 30 + 4 = 34$ € et $V(20) = 40$ €.

**4.** $1{,}5d + 4 = 25$, soit $1{,}5d = 21$, donc $d = 14$ km.

**5.** On résout $T(d) < V(d)$ : $1{,}5d + 4 < 2d$, soit $4 < 0{,}5d$, donc $d > 8$. Le taxi est plus avantageux pour les trajets de plus de $8$ km ; les deux tarifs sont égaux pour $8$ km ($16$ €).`
    },
    {
      id: "Org3-ds-04",
      title: "Une droite passant par deux points",
      difficulty: 2,
      points: 5,
      statement: `$f$ est une fonction affine telle que $f(-1) = 7$ et $f(3) = -1$.

1. Calculer le coefficient directeur $a$ de la droite représentant $f$.
2. Déterminer l'ordonnée à l'origine $b$, puis l'expression de $f(x)$.
3. Le point $C(10\\,;\\,-15)$ appartient-il à la représentation graphique de $f$ ?
4. Déterminer l'antécédent de $0$ par $f$. Que représente ce nombre sur le graphique ?
5. La fonction $f$ est-elle croissante ou décroissante ? Justifier.`,
      solution: `**1.** $$a = \\frac{f(3) - f(-1)}{3 - (-1)} = \\frac{-1 - 7}{4} = -2.$$

**2.** $f(x) = -2x + b$ et $f(3) = -1$ : $-6 + b = -1$, donc $b = 5$. Ainsi $f(x) = -2x + 5$.
(Contrôle : $f(-1) = 2 + 5 = 7$.)

**3.** $f(10) = -20 + 5 = -15$ : le point $C$ appartient à la droite.

**4.** $-2x + 5 = 0$ donne $x = 2{,}5$. C'est l'abscisse du point d'intersection de la droite avec l'axe des abscisses.

**5.** Le coefficient directeur $-2$ est négatif : $f$ est **décroissante** (la droite « descend » de $2$ unités quand $x$ augmente de $1$).`
    },
    {
      id: "Org3-ds-05",
      title: "Pourcentages et fonctions linéaires",
      difficulty: 3,
      points: 5,
      statement: `1. Justifier qu'augmenter un prix de $15\\,\\%$ revient à le multiplier par $1{,}15$. Quelle fonction linéaire $f$ modélise cette augmentation ?
2. Quelle fonction linéaire $g$ modélise une baisse de $20\\,\\%$ ?
3. Un article coûte $80$ €. Son prix augmente de $15\\,\\%$, puis le nouveau prix baisse de $20\\,\\%$. Calculer le prix final.
4. Montrer que cette succession d'évolutions revient à une baisse dont on donnera le pourcentage.
5. Après une augmentation de $15\\,\\%$, un article coûte $69$ €. Quel était son prix initial ?`,
      solution: `**1.** Le nouveau prix est $x + \\dfrac{15}{100}x = x(1 + 0{,}15) = 1{,}15x$. La fonction est $f(x) = 1{,}15x$.

**2.** $g(x) = x - 0{,}2x = 0{,}8x$.

**3.** $80 \\times 1{,}15 = 92$ €, puis $92 \\times 0{,}8 = 73{,}60$ €.

**4.** Les deux évolutions successives reviennent à multiplier par $1{,}15 \\times 0{,}8 = 0{,}92$, soit $1 - 0{,}08$ : c'est une **baisse de $8\\,\\%$** (et non une baisse de $5\\,\\%$ comme on pourrait le croire). Contrôle : $80 \\times 0{,}92 = 73{,}60$ €.

**5.** On cherche l'antécédent de $69$ par $f$ : $1{,}15x = 69$, donc $x = \\dfrac{69}{1{,}15} = 60$ €.`
    },
    {
      id: "Org3-ds-06",
      title: "Lire deux droites",
      difficulty: 3,
      points: 5,
      statement: `On a représenté ci-dessous deux fonctions affines $f$ et $g$ : la droite $(d_1)$ représente $f$ et la droite $(d_2)$ représente $g$.

<div class="geo-figure-wrapper" style="text-align:center; margin:0.8rem auto; max-width:340px;"><svg class="geo-svg-figure" viewBox="0 0 340 316" width="340" height="316" style="width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);" xmlns="http://www.w3.org/2000/svg" role="img"><line x1="30" y1="286" x2="30" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="75" y1="286" x2="75" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="120" y1="286" x2="120" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="165" y1="286" x2="165" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="210" y1="286" x2="210" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="255" y1="286" x2="255" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="300" y1="286" x2="300" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="286" x2="300" y2="286" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="254" x2="300" y2="254" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="222" x2="300" y2="222" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="190" x2="300" y2="190" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="158" x2="300" y2="158" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="126" x2="300" y2="126" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="94" x2="300" y2="94" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="62" x2="300" y2="62" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="30" x2="300" y2="30" stroke="rgba(100,116,139,0.35)" stroke-width="0.8" /><line x1="30" y1="254" x2="308" y2="254" stroke="currentColor" stroke-width="1.4" /><line x1="30" y1="286" x2="30" y2="22" stroke="currentColor" stroke-width="1.4" /><text x="75" y="269" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">1</text><text x="120" y="269" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">2</text><text x="165" y="269" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">3</text><text x="210" y="269" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">4</text><text x="255" y="269" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">5</text><text x="300" y="269" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">6</text><text x="24" y="290" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">-1</text><text x="24" y="226" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">1</text><text x="24" y="194" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">2</text><text x="24" y="162" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">3</text><text x="24" y="130" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">4</text><text x="24" y="98" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">5</text><text x="24" y="66" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">6</text><text x="24" y="34" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="end">7</text><text x="22" y="269" font-family="system-ui, sans-serif" font-size="11" font-weight="400" fill="currentColor" text-anchor="middle">0</text><text x="314" y="258" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="currentColor" text-anchor="middle">x</text><text x="40" y="20" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="currentColor" text-anchor="start">y</text><polyline points="30,222 30.7,221 31.4,220.1 32,219.1 32.7,218.2 33.4,217.2 34.1,216.2 34.7,215.3 35.4,214.3 36.1,213.4 36.8,212.4 37.4,211.4 38.1,210.5 38.8,209.5 39.5,208.6 40.1,207.6 40.8,206.6 41.5,205.7 42.2,204.7 42.8,203.8 43.5,202.8 44.2,201.8 44.9,200.9 45.5,199.9 46.2,199 46.9,198 47.6,197 48.2,196.1 48.9,195.1 49.6,194.2 50.3,193.2 50.9,192.2 51.6,191.3 52.3,190.3 53,189.4 53.6,188.4 54.3,187.4 55,186.5 55.7,185.5 56.3,184.6 57,183.6 57.7,182.6 58.4,181.7 59,180.7 59.7,179.8 60.4,178.8 61.1,177.8 61.7,176.9 62.4,175.9 63.1,175 63.8,174 64.4,173 65.1,172.1 65.8,171.1 66.5,170.2 67.1,169.2 67.8,168.2 68.5,167.3 69.2,166.3 69.8,165.4 70.5,164.4 71.2,163.4 71.9,162.5 72.5,161.5 73.2,160.6 73.9,159.6 74.6,158.6 75.2,157.7 75.9,156.7 76.6,155.8 77.3,154.8 77.9,153.8 78.6,152.9 79.3,151.9 80,151 80.6,150 81.3,149 82,148.1 82.7,147.1 83.3,146.2 84,145.2 84.7,144.2 85.4,143.3 86,142.3 86.7,141.4 87.4,140.4 88.1,139.4 88.7,138.5 89.4,137.5 90.1,136.6 90.8,135.6 91.4,134.6 92.1,133.7 92.8,132.7 93.4,131.8 94.1,130.8 94.8,129.8 95.5,128.9 96.2,127.9 96.8,127 97.5,126 98.2,125 98.9,124.1 99.5,123.1 100.2,122.2 100.9,121.2 101.6,120.2 102.2,119.3 102.9,118.3 103.6,117.4 104.3,116.4 104.9,115.4 105.6,114.5 106.3,113.5 107,112.6 107.6,111.6 108.3,110.6 109,109.7 109.7,108.7 110.3,107.8 111,106.8 111.7,105.8 112.4,104.9 113,103.9 113.7,103 114.4,102 115.1,101 115.7,100.1 116.4,99.1 117.1,98.2 117.8,97.2 118.4,96.2 119.1,95.3 119.8,94.3 120.5,93.4 121.1,92.4 121.8,91.4 122.5,90.5 123.2,89.5 123.8,88.6 124.5,87.6 125.2,86.6 125.9,85.7 126.5,84.7 127.2,83.8 127.9,82.8 128.6,81.8 129.2,80.9 129.9,79.9 130.6,79 131.3,78 131.9,77 132.6,76.1 133.3,75.1 134,74.2 134.6,73.2 135.3,72.2 136,71.3 136.7,70.3 137.3,69.4 138,68.4 138.7,67.4 139.4,66.5 140,65.5 140.7,64.6 141.4,63.6 142.1,62.6 142.7,61.7 143.4,60.7 144.1,59.8 144.8,58.8 145.4,57.8 146.1,56.9 146.8,55.9 147.5,55 148.1,54 148.8,53 149.5,52.1 150.1,51.1 150.8,50.2 151.5,49.2 152.2,48.2 152.9,47.3 153.5,46.3 154.2,45.4 154.9,44.4 155.6,43.4 156.2,42.5 156.9,41.5 157.6,40.6 158.3,39.6 158.9,38.6 159.6,37.7 160.3,36.7 161,35.8 161.6,34.8 162.3,33.8 163,32.9 163.7,31.9 164.3,31 165,30" fill="none" stroke="#2563eb" stroke-width="2.2" /><text x="174" y="42.8" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">(d₁)</text><polyline points="30,126 31.4,126.5 32.7,127 34.1,127.4 35.4,127.9 36.8,128.4 38.1,128.9 39.5,129.4 40.8,129.8 42.2,130.3 43.5,130.8 44.9,131.3 46.2,131.8 47.6,132.2 48.9,132.7 50.3,133.2 51.6,133.7 53,134.2 54.3,134.6 55.7,135.1 57,135.6 58.4,136.1 59.7,136.6 61.1,137 62.4,137.5 63.8,138 65.1,138.5 66.5,139 67.8,139.4 69.2,139.9 70.5,140.4 71.9,140.9 73.2,141.4 74.6,141.8 75.9,142.3 77.3,142.8 78.6,143.3 80,143.8 81.3,144.2 82.7,144.7 84,145.2 85.4,145.7 86.7,146.2 88.1,146.6 89.4,147.1 90.8,147.6 92.1,148.1 93.4,148.6 94.8,149 96.2,149.5 97.5,150 98.9,150.5 100.2,151 101.6,151.4 102.9,151.9 104.3,152.4 105.6,152.9 107,153.4 108.3,153.8 109.7,154.3 111,154.8 112.4,155.3 113.7,155.8 115.1,156.2 116.4,156.7 117.8,157.2 119.1,157.7 120.5,158.2 121.8,158.6 123.2,159.1 124.5,159.6 125.9,160.1 127.2,160.6 128.6,161 129.9,161.5 131.3,162 132.6,162.5 134,163 135.3,163.4 136.7,163.9 138,164.4 139.4,164.9 140.7,165.4 142.1,165.8 143.4,166.3 144.8,166.8 146.1,167.3 147.5,167.8 148.8,168.2 150.1,168.7 151.5,169.2 152.9,169.7 154.2,170.2 155.6,170.6 156.9,171.1 158.3,171.6 159.6,172.1 161,172.6 162.3,173 163.7,173.5 165,174 166.4,174.5 167.7,175 169,175.4 170.4,175.9 171.8,176.4 173.1,176.9 174.5,177.4 175.8,177.8 177.2,178.3 178.5,178.8 179.9,179.3 181.2,179.8 182.6,180.2 183.9,180.7 185.3,181.2 186.6,181.7 188,182.2 189.3,182.6 190.7,183.1 192,183.6 193.4,184.1 194.7,184.6 196.1,185 197.4,185.5 198.8,186 200.1,186.5 201.5,187 202.8,187.4 204.2,187.9 205.5,188.4 206.9,188.9 208.2,189.4 209.6,189.8 210.9,190.3 212.3,190.8 213.6,191.3 215,191.8 216.3,192.2 217.7,192.7 219,193.2 220.4,193.7 221.7,194.2 223.1,194.6 224.4,195.1 225.7,195.6 227.1,196.1 228.5,196.6 229.8,197 231.2,197.5 232.5,198 233.9,198.5 235.2,199 236.6,199.4 237.9,199.9 239.3,200.4 240.6,200.9 242,201.4 243.3,201.8 244.7,202.3 246,202.8 247.4,203.3 248.7,203.8 250.1,204.2 251.4,204.7 252.8,205.2 254.1,205.7 255.5,206.2 256.8,206.6 258.2,207.1 259.5,207.6 260.9,208.1 262.2,208.6 263.6,209 264.9,209.5 266.3,210 267.6,210.5 269,211 270.3,211.4 271.7,211.9 273,212.4 274.4,212.9 275.7,213.4 277.1,213.8 278.4,214.3 279.8,214.8 281.1,215.3 282.5,215.8 283.8,216.2 285.2,216.7 286.5,217.2 287.9,217.7 289.2,218.2 290.6,218.6 291.9,219.1 293.3,219.6 294.6,220.1 296,220.6 297.3,221 298.7,221.5 300,222" fill="none" stroke="#dc2626" stroke-width="2.2" /><text x="282" y="196.4" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#dc2626" text-anchor="middle">(d₂)</text></svg></div>

1. Lire l'ordonnée à l'origine de chacune des droites.
2. Déterminer graphiquement le coefficient directeur de chaque droite, en expliquant la méthode.
3. En déduire les expressions de $f(x)$ et de $g(x)$.
4. Calculer les coordonnées exactes du point d'intersection des deux droites, puis vérifier la cohérence avec le graphique.`,
      solution: `**1.** $(d_1)$ coupe l'axe des ordonnées en $1$ ; $(d_2)$ le coupe en $4$.

**2.** On se déplace sur la droite d'une unité vers la droite et on lit la variation verticale :
- sur $(d_1)$, on passe de $(0\\,;\\,1)$ à $(1\\,;\\,3)$ : on monte de $2$, le coefficient directeur est $2$ ;
- sur $(d_2)$, on passe de $(0\\,;\\,4)$ à $(2\\,;\\,3)$ : on descend de $1$ pour $2$ unités, le coefficient directeur est $-\\dfrac{1}{2} = -0{,}5$.

**3.** $f(x) = 2x + 1$ et $g(x) = -0{,}5x + 4$.

**4.** On résout $2x + 1 = -0{,}5x + 4$, soit $2{,}5x = 3$, donc $x = 1{,}2$. Puis $f(1{,}2) = 2{,}4 + 1 = 3{,}4$. Le point d'intersection est $(1{,}2\\,;\\,3{,}4)$, ce qui correspond au graphique (un peu à droite de $x = 1$, entre les ordonnées $3$ et $4$).`
    },
    {
      id: "Org3-ds-07",
      title: "Degrés Celsius et Fahrenheit",
      difficulty: 4,
      points: 6,
      statement: `Pour convertir une température $C$ exprimée en degrés Celsius en une température $F$ exprimée en degrés Fahrenheit, on utilise la formule $F = 1{,}8C + 32$. On note $f$ la fonction $C \\mapsto 1{,}8C + 32$.

1. Quelle est la nature de la fonction $f$ ? La température en °F est-elle proportionnelle à la température en °C ? Justifier.
2. Convertir en °F : $0$ °C, $100$ °C et $-10$ °C.
3. Montrer que, lorsque la température augmente de $5$ °C, elle augmente de $9$ °F.
4. Exprimer $C$ en fonction de $F$. Un thermomètre américain affiche $98{,}6$ °F : quelle est la température en °C ?
5. Existe-t-il une température qui s'exprime par le même nombre dans les deux unités ?`,
      solution: `**1.** $f$ est une fonction affine (coefficient $1{,}8$, ordonnée à l'origine $32$), mais pas linéaire car $32 \\neq 0$. $F$ n'est donc **pas** proportionnelle à $C$ : par exemple, $0$ °C correspond à $32$ °F et non à $0$ °F.

**2.** $f(0) = 32$ °F ; $f(100) = 180 + 32 = 212$ °F ; $f(-10) = -18 + 32 = 14$ °F.

**3.** $f(C + 5) - f(C) = 1{,}8(C + 5) + 32 - 1{,}8C - 32 = 1{,}8 \\times 5 = 9$. Les **variations** de $F$ sont proportionnelles à celles de $C$ (coefficient $1{,}8$).

**4.** $F = 1{,}8C + 32$ équivaut à $C = \\dfrac{F - 32}{1{,}8}$. Pour $98{,}6$ °F : $C = \\dfrac{66{,}6}{1{,}8} = 37$ °C (la température du corps humain).

**5.** On résout $1{,}8C + 32 = C$, soit $0{,}8C = -32$, donc $C = -40$. La température $-40$ °C est égale à $-40$ °F.`
    },
    {
      id: "Org3-ds-08",
      title: "Points alignés",
      difficulty: 4,
      points: 5,
      statement: `Dans un repère, on considère les points $A(1\\,;\\,3)$, $B(4\\,;\\,9)$, $C(10\\,;\\,21)$ et $D(-3\\,;\\,-4)$.

1. Déterminer l'expression de la fonction affine $f$ dont la représentation graphique passe par $A$ et $B$.
2. Les points $A$, $B$ et $C$ sont-ils alignés ? Justifier.
3. Le point $D$ est-il sur la droite $(AB)$ ?
4. Déterminer le nombre $m$ tel que le point $E(m\\,;\\,0)$ soit sur la droite $(AB)$.
5. Déterminer le nombre $p$ tel que le point $G(p\\,;\\,2p)$ soit sur la droite $(AB)$.`,
      solution: `**1.** $f(x) = ax + b$ avec $a = \\dfrac{9 - 3}{4 - 1} = 2$. Puis $f(1) = 3$ donne $2 + b = 3$, soit $b = 1$. Donc $f(x) = 2x + 1$.

**2.** $f(10) = 21$ : $C$ appartient à la droite $(AB)$, représentation de $f$. Les points $A$, $B$, $C$ sont **alignés**.

**3.** $f(-3) = -6 + 1 = -5 \\neq -4$ : $D$ n'est pas sur la droite $(AB)$.

**4.** On résout $2m + 1 = 0$ : $m = -0{,}5$.

**5.** On résout $f(p) = 2p$, soit $2p + 1 = 2p$, soit $1 = 0$ : impossible. Aucun point $G$ ne convient. (Les points de la forme $(p\\,;\\,2p)$ sont sur la droite d'équation $y = 2x$, parallèle à $(AB)$ car de même coefficient directeur : les deux droites n'ont aucun point commun.)`
    },
    {
      id: "Org3-ds-09",
      title: "Le remplissage d'une piscine",
      difficulty: 1,
      points: 4,
      statement: `Une piscine contient déjà $12$ m³ d'eau. On la remplit avec une pompe qui débite $3$ m³ par heure. On note $V(t)$ le volume d'eau (en m³) contenu dans la piscine après $t$ heures de remplissage.

1. Justifier que $V(t) = 3t + 12$.
2. La fonction $V$ est-elle linéaire, affine, ou ni l'un ni l'autre ? Préciser son coefficient et son ordonnée à l'origine, et interpréter ces deux nombres.
3. Calculer $V(5)$.
4. La piscine est pleine lorsqu'elle contient $45$ m³. Au bout de combien de temps est-elle pleine ?
5. Donner les coordonnées de deux points de la représentation graphique de $V$. Cette droite passe-t-elle par l'origine du repère ?`,
      solution: `**1.** Chaque heure, la pompe ajoute $3$ m³ : en $t$ heures, elle ajoute $3t$ m³, qui s'ajoutent aux $12$ m³ initiaux. Donc $V(t) = 3t + 12$.

**2.** $V$ est de la forme $t \\mapsto at + b$ avec $a = 3$ et $b = 12$ : c'est une fonction **affine** (non linéaire car $b \\neq 0$).
Le coefficient $3$ est le débit de la pompe ($3$ m³ par heure) ; l'ordonnée à l'origine $12$ est le volume d'eau au départ.

**3.** $V(5) = 3 \\times 5 + 12 = 27$ : après $5$ h, la piscine contient $27$ m³.

**4.** On résout $3t + 12 = 45$ : $3t = 33$, donc $t = 11$. La piscine est pleine au bout de $11$ heures.

**5.** Par exemple les points $(0\\,;\\,12)$ et $(11\\,;\\,45)$. Comme $V(0) = 12 \\neq 0$, la droite ne passe pas par l'origine.`
    },
    {
      id: "Org3-ds-10",
      title: "Deux bougies",
      difficulty: 2,
      points: 5,
      statement: `On allume en même temps deux bougies.
- La bougie rouge mesure $15$ cm et diminue de $1{,}2$ cm par heure.
- La bougie blanche mesure $10$ cm et diminue de $0{,}7$ cm par heure.

On note $r(t)$ et $b(t)$ les hauteurs (en cm) des bougies rouge et blanche après $t$ heures.

1. Exprimer $r(t)$ et $b(t)$ en fonction de $t$. Quelle est la nature de ces fonctions ?
2. Calculer la hauteur de chaque bougie au bout de $5$ heures.
3. Au bout de combien de temps la bougie rouge sera-t-elle entièrement consumée ?
4. Déterminer le moment où les deux bougies ont la même hauteur, et préciser cette hauteur.
5. Laquelle des deux bougies s'éteindra en premier ? Justifier.`,
      solution: `**1.** $r(t) = 15 - 1{,}2t$ et $b(t) = 10 - 0{,}7t$. Ce sont des fonctions affines (de coefficients négatifs $-1{,}2$ et $-0{,}7$ : les hauteurs diminuent).

**2.** $r(5) = 15 - 6 = 9$ cm et $b(5) = 10 - 3{,}5 = 6{,}5$ cm.

**3.** On résout $15 - 1{,}2t = 0$ : $t = \\dfrac{15}{1{,}2} = 12{,}5$. La bougie rouge est consumée au bout de $12{,}5$ h, soit $12$ h $30$ min.

**4.** On résout $15 - 1{,}2t = 10 - 0{,}7t$ : $5 = 0{,}5t$, donc $t = 10$.
Au bout de $10$ heures, les deux bougies mesurent $r(10) = 15 - 12 = 3$ cm (et $b(10) = 10 - 7 = 3$ cm).

**5.** La bougie blanche est consumée quand $10 - 0{,}7t = 0$, soit $t = \\dfrac{10}{0{,}7} = \\dfrac{100}{7} \\approx 14{,}3$ h. Comme $12{,}5 < 14{,}3$, c'est la **bougie rouge** qui s'éteint en premier (après $10$ h, elle est la plus courte, car elle diminue plus vite).`
    },
    {
      id: "Org3-ds-11",
      title: "La course poursuite à vélo",
      difficulty: 3,
      points: 5,
      statement: `Sur une piste cyclable rectiligne, Malik part du point de départ à $15$ km/h. Au même instant, sa sœur Lina, qui se trouve déjà à $12$ km du départ, roule dans le même sens à $9$ km/h. On suppose leurs vitesses constantes.

On note $t$ le temps écoulé (en heures), $m(t)$ et $\\ell(t)$ les distances (en km) qui séparent respectivement Malik et Lina du point de départ.

1. Exprimer $m(t)$ et $\\ell(t)$ en fonction de $t$. Laquelle de ces fonctions est linéaire ?
2. La distance parcourue par Lina depuis le point de départ de la piste est-elle proportionnelle au temps ? Justifier.
3. Au bout de combien de temps Malik rattrape-t-il Lina ? À quelle distance du départ ?
4. Dans un même repère, les droites représentant $m$ et $\\ell$ se coupent en un point. Donner ses coordonnées.
5. À quel moment Malik aura-t-il $3$ km d'avance sur Lina ?`,
      solution: `**1.** $m(t) = 15t$ et $\\ell(t) = 9t + 12$. La fonction $m$ est linéaire ; $\\ell$ est affine non linéaire.

**2.** Non : $\\ell$ n'est pas linéaire. Par exemple $\\ell(1) = 21$ et $\\ell(2) = 30$ : le temps double mais la distance au départ ne double pas.

**3.** On résout $15t = 9t + 12$ : $6t = 12$, donc $t = 2$. Malik rattrape Lina au bout de $2$ heures, à $m(2) = 30$ km du départ.

**4.** Le point d'intersection des deux droites a pour coordonnées $(2\\,;\\,30)$.

**5.** On résout $15t - (9t + 12) = 3$ : $6t - 12 = 3$, donc $6t = 15$ et $t = 2{,}5$. Malik aura $3$ km d'avance au bout de $2$ h $30$ min (il sera à $37{,}5$ km du départ, Lina à $34{,}5$ km).`
    },
    {
      id: "Org3-ds-12",
      title: "La facture d'eau",
      difficulty: 4,
      points: 6,
      statement: `Dans une commune, le montant annuel de la facture d'eau (en euros) est donné par une fonction affine $f$ du volume consommé $x$ (en m³).
L'an dernier, la famille Martin a consommé $80$ m³ et payé $296$ € ; la famille Petit a consommé $120$ m³ et payé $412$ €.

1. Déterminer l'expression de $f(x)$.
2. Interpréter les deux nombres qui apparaissent dans cette expression.
3. Une famille a payé $499$ €. Quel volume d'eau a-t-elle consommé ?
4. La famille Martin augmente sa consommation de $25\\,\\%$.
   a) Calculer sa nouvelle facture.
   b) Sa facture augmente-t-elle aussi de $25\\,\\%$ ? Calculer le pourcentage d'augmentation (arrondi à $0{,}1\\,\\%$) et expliquer la différence.`,
      solution: `**1.** $f(x) = ax + b$. Le coefficient vaut
$$a = \\frac{f(120) - f(80)}{120 - 80} = \\frac{412 - 296}{40} = \\frac{116}{40} = 2{,}9.$$
Puis $f(80) = 2{,}9 \\times 80 + b = 296$, soit $232 + b = 296$ et $b = 64$. Donc $f(x) = 2{,}9x + 64$.
(Contrôle : $f(120) = 348 + 64 = 412$.)

**2.** Le prix du mètre cube est $2{,}90$ € ; $64$ € est une part fixe (abonnement) payée même sans consommation.

**3.** On résout $2{,}9x + 64 = 499$ : $2{,}9x = 435$, donc $x = 150$. La famille a consommé $150$ m³.

**4. a)** Nouvelle consommation : $80 \\times 1{,}25 = 100$ m³. Nouvelle facture : $f(100) = 290 + 64 = 354$ €.

**b)** Augmentation : $354 - 296 = 58$ €, soit $\\dfrac{58}{296} \\approx 0{,}196$, c'est-à-dire environ $19{,}6\\,\\%$. Ce n'est pas $25\\,\\%$ : la facture n'est pas proportionnelle au volume consommé (la fonction $f$ est affine mais pas linéaire), car l'abonnement de $64$ € ne change pas.`
    }
  ],
  "Org4": [
    {
      id: "Org4-ds-01",
      title: "Le dé à douze faces",
      difficulty: 1,
      points: 4,
      statement: `On lance un dé équilibré à $12$ faces numérotées de $1$ à $12$ et on lit le numéro de la face supérieure.

1. Combien y a-t-il d'issues ? Sont-elles équiprobables ?
2. Calculer la probabilité de l'événement $A$ : « obtenir un multiple de $3$ ».
3. Calculer la probabilité de l'événement $B$ : « obtenir un nombre premier », puis celle de l'événement contraire de $B$.
4. Quelle est la probabilité d'obtenir un nombre supérieur à $12$ ? Comment appelle-t-on un tel événement ?`,
      solution: `**1.** Il y a $12$ issues ; le dé étant équilibré, elles sont équiprobables, de probabilité $\\dfrac{1}{12}$ chacune.

**2.** Les multiples de $3$ sont $3, 6, 9, 12$ : $P(A) = \\dfrac{4}{12} = \\dfrac{1}{3}$.

**3.** Les nombres premiers entre $1$ et $12$ sont $2, 3, 5, 7, 11$ : $P(B) = \\dfrac{5}{12}$. Pour l'événement contraire : $P(\\overline{B}) = 1 - \\dfrac{5}{12} = \\dfrac{7}{12}$.

**4.** Aucune issue ne réalise cet événement : sa probabilité est $0$. C'est un événement **impossible**.`
    },
    {
      id: "Org4-ds-02",
      title: "La roue de loterie",
      difficulty: 1,
      points: 4,
      statement: `Une roue de loterie est partagée en $8$ secteurs de même taille : $3$ rouges, $2$ bleus, $1$ jaune et $2$ verts. On fait tourner la roue et on note la couleur du secteur désigné par la flèche.

1. Calculer la probabilité d'obtenir la couleur rouge.
2. Calculer la probabilité d'obtenir du bleu ou du vert.
3. Calculer la probabilité de ne pas obtenir de jaune.
4. Le jaune fait gagner un lot. On veut que la probabilité de gagner soit égale à $\\dfrac{1}{4}$ ; on repeint pour cela des secteurs verts en jaune. Combien faut-il en repeindre ?`,
      solution: `Les $8$ secteurs ont la même taille : les issues sont équiprobables.

**1.** $P(\\text{rouge}) = \\dfrac{3}{8}$.

**2.** Il y a $2$ secteurs bleus et $2$ verts, soit $4$ secteurs. $P(\\text{bleu ou vert}) = \\dfrac{4}{8} = \\dfrac{1}{2}$.

**3.** $P(\\text{non jaune}) = 1 - P(\\text{jaune}) = 1 - \\dfrac{1}{8} = \\dfrac{7}{8}$.

**4.** $\\dfrac{1}{4} = \\dfrac{2}{8}$ : il faut $2$ secteurs jaunes, donc repeindre $1$ secteur vert en jaune.`
    },
    {
      id: "Org4-ds-03",
      title: "Deux tirages avec remise",
      difficulty: 2,
      points: 5,
      statement: `Un sac contient $2$ boules rouges ($R$) et $1$ boule bleue ($B$), indiscernables au toucher. On tire une boule au hasard, on note sa couleur, on la remet dans le sac, puis on tire une seconde boule.

1. Construire l'arbre pondéré de cette expérience.
2. Calculer la probabilité d'obtenir deux boules rouges.
3. Calculer la probabilité d'obtenir deux boules de la même couleur.
4. Calculer la probabilité d'obtenir au moins une boule bleue.`,
      solution: `**1.** Premier tirage : $R$ avec la probabilité $\\dfrac{2}{3}$, $B$ avec $\\dfrac{1}{3}$. Comme la boule est remise, le second tirage a les mêmes probabilités. On obtient quatre chemins : $RR$, $RB$, $BR$, $BB$.

**2.** On multiplie les probabilités le long du chemin : $P(RR) = \\dfrac{2}{3} \\times \\dfrac{2}{3} = \\dfrac{4}{9}$.

**3.** $P(BB) = \\dfrac{1}{3} \\times \\dfrac{1}{3} = \\dfrac{1}{9}$, donc $P(\\text{même couleur}) = \\dfrac{4}{9} + \\dfrac{1}{9} = \\dfrac{5}{9}$.

**4.** « Au moins une boule bleue » est l'événement contraire de « deux boules rouges » : $1 - \\dfrac{4}{9} = \\dfrac{5}{9}$.`
    },
    {
      id: "Org4-ds-04",
      title: "Le lancer de punaise",
      difficulty: 2,
      points: 5,
      statement: `Une punaise peut retomber « pointe en haut » ou « sur le côté ». Les deux issues ne sont pas équiprobables. Une classe a lancé une punaise $500$ fois et a obtenu $310$ fois « pointe en haut ».

1. Calculer la fréquence d'apparition de « pointe en haut » sur ces $500$ lancers.
2. Peut-on connaître la probabilité exacte qu'une punaise retombe pointe en haut ? Que peut-on en dire ?
3. Un élève, qui n'a fait que $10$ lancers, a obtenu $8$ fois « pointe en haut ». Il en déduit que la probabilité vaut $0{,}8$. Que penser de son raisonnement ?
4. En utilisant l'estimation de la question 2, combien de fois environ peut-on s'attendre à obtenir « pointe en haut » sur $2\\,000$ lancers ?`,
      solution: `**1.** $f = \\dfrac{310}{500} = 0{,}62$.

**2.** Non, on ne peut pas la calculer, car les issues ne sont pas équiprobables. Mais lorsque le nombre de lancers est grand, la fréquence observée se rapproche de la probabilité : on peut estimer la probabilité à environ $0{,}62$.

**3.** Avec seulement $10$ lancers, la fréquence varie beaucoup d'une série à l'autre : $0{,}8$ n'est pas une estimation fiable. Il faut un grand nombre de lancers.

**4.** $0{,}62 \\times 2\\,000 = 1\\,240$ : environ $1\\,240$ fois (le résultat réel peut s'en écarter un peu).`
    },
    {
      id: "Org4-ds-05",
      title: "Les chaussettes dans le noir",
      difficulty: 3,
      points: 5,
      statement: `Dans un tiroir, il y a $3$ chaussettes blanches et $2$ chaussettes noires, indiscernables au toucher. Dans le noir, Sam prend une chaussette au hasard, puis une seconde, **sans remettre** la première.

1. Construire un arbre pondéré décrivant l'expérience.
2. Calculer la probabilité que Sam obtienne deux chaussettes blanches.
3. Calculer la probabilité qu'il obtienne une paire de même couleur.
4. Calculer la probabilité qu'il obtienne deux chaussettes de couleurs différentes.
5. Serait-il plus ou moins probable d'obtenir une paire de même couleur si Sam remettait la première chaussette ? Justifier.`,
      solution: `**1.** Premier tirage : $B$ avec $\\dfrac{3}{5}$, $N$ avec $\\dfrac{2}{5}$. Second tirage (il reste $4$ chaussettes) :
- après $B$ : $B$ avec $\\dfrac{2}{4}$, $N$ avec $\\dfrac{2}{4}$ ;
- après $N$ : $B$ avec $\\dfrac{3}{4}$, $N$ avec $\\dfrac{1}{4}$.

**2.** $P(BB) = \\dfrac{3}{5} \\times \\dfrac{2}{4} = \\dfrac{6}{20} = \\dfrac{3}{10}$.

**3.** $P(NN) = \\dfrac{2}{5} \\times \\dfrac{1}{4} = \\dfrac{2}{20} = \\dfrac{1}{10}$, donc $P(\\text{paire}) = \\dfrac{3}{10} + \\dfrac{1}{10} = \\dfrac{2}{5}$.

**4.** C'est l'événement contraire : $1 - \\dfrac{2}{5} = \\dfrac{3}{5}$.

**5.** Avec remise : $\\left(\\dfrac{3}{5}\\right)^2 + \\left(\\dfrac{2}{5}\\right)^2 = \\dfrac{9}{25} + \\dfrac{4}{25} = \\dfrac{13}{25} = 0{,}52$, contre $0{,}4$ sans remise. Ce serait **plus** probable (sans remise, la couleur déjà tirée est devenue plus rare).`
    },
    {
      id: "Org4-ds-06",
      title: "Le jeu des deux roues",
      difficulty: 3,
      points: 5,
      statement: `On fait tourner deux roues équilibrées : la roue 1 porte les nombres $1$, $2$, $3$ (trois secteurs égaux) et la roue 2 porte les nombres $1$, $2$ (deux secteurs égaux). On calcule le **produit** des deux nombres obtenus. Alice gagne si le produit est pair, Bob gagne s'il est impair.

1. Recopier et compléter un tableau à double entrée donnant tous les produits possibles. Les issues obtenues sont-elles équiprobables ?
2. Calculer la probabilité que le produit soit supérieur ou égal à $4$.
3. Le jeu est-il équitable ? Justifier.
4. On remplace la roue 1 par une roue à quatre secteurs égaux portant $1$, $2$, $3$, $4$ et la roue 2 par une roue portant $1$ et $3$. Le jeu devient-il équitable ?`,
      solution: `**1.**

| $\\times$ | $1$ | $2$ |
|:---:|:---:|:---:|
| $1$ | $1$ | $2$ |
| $2$ | $2$ | $4$ |
| $3$ | $3$ | $6$ |

Il y a $3 \\times 2 = 6$ couples équiprobables (chacun de probabilité $\\dfrac{1}{3} \\times \\dfrac{1}{2} = \\dfrac{1}{6}$).

**2.** Produits $\\geqslant 4$ : $4$ et $6$, soit $2$ cases. Probabilité : $\\dfrac{2}{6} = \\dfrac{1}{3}$.

**3.** Produits pairs : $2, 2, 4, 6$, soit $\\dfrac{4}{6} = \\dfrac{2}{3}$ pour Alice et $\\dfrac{1}{3}$ pour Bob. Le jeu n'est **pas équitable**.

**4.** Un produit est impair si et seulement si les deux nombres sont impairs. Roue 1 : impair avec la probabilité $\\dfrac{2}{4} = \\dfrac{1}{2}$ ; roue 2 : toujours impair. $P(\\text{impair}) = \\dfrac{1}{2} \\times 1 = \\dfrac{1}{2}$ et $P(\\text{pair}) = \\dfrac{1}{2}$ : le jeu devient **équitable**.`
    },
    {
      id: "Org4-ds-07",
      title: "Combien de boules bleues ?",
      difficulty: 4,
      points: 6,
      statement: `Une urne contient $4$ boules rouges et $n$ boules bleues, indiscernables au toucher. On tire une boule au hasard.

1. Exprimer en fonction de $n$ la probabilité de tirer une boule rouge.
2. On sait que cette probabilité vaut $\\dfrac{1}{5}$. Déterminer $n$.
3. Combien de boules rouges faut-il ajouter dans l'urne pour que la probabilité de tirer une boule rouge devienne $\\dfrac{1}{2}$ ?
4. On revient à l'urne de la question 2. On tire successivement deux boules **avec remise**. Calculer la probabilité d'obtenir deux boules de la même couleur.`,
      solution: `**1.** Il y a $4 + n$ boules équiprobables, dont $4$ rouges : $P(R) = \\dfrac{4}{4 + n}$.

**2.** $\\dfrac{4}{4 + n} = \\dfrac{1}{5}$ équivaut à $4 + n = 20$, soit $n = 16$.

**3.** On ajoute $k$ boules rouges : $P(R) = \\dfrac{4 + k}{20 + k} = \\dfrac{1}{2}$ équivaut à $2(4 + k) = 20 + k$, soit $k = 12$. Il faut ajouter $12$ boules rouges ($16$ rouges et $16$ bleues).

**4.** $P(R) = \\dfrac{1}{5}$ et $P(B) = \\dfrac{4}{5}$ à chaque tirage (avec remise). D'après l'arbre :
$$P(\\text{même couleur}) = \\frac{1}{5} \\times \\frac{1}{5} + \\frac{4}{5} \\times \\frac{4}{5} = \\frac{1}{25} + \\frac{16}{25} = \\frac{17}{25} = 0{,}68.$$`
    },
    {
      id: "Org4-ds-08",
      title: "La souris dans le labyrinthe",
      difficulty: 4,
      points: 5,
      statement: `Une souris entre dans un labyrinthe. Au premier carrefour, elle choisit au hasard (de façon équiprobable) l'un des deux couloirs, qui mènent aux salles $S_1$ et $S_2$.
- De la salle $S_1$ partent $3$ couloirs : un seul mène au fromage, les deux autres mènent à une impasse.
- De la salle $S_2$ partent $2$ couloirs : un mène au fromage, l'autre à une impasse.

Dans chaque salle, la souris choisit un couloir au hasard, de façon équiprobable.

1. Construire un arbre pondéré décrivant le parcours de la souris.
2. Calculer la probabilité que la souris atteigne le fromage.
3. La souris a-t-elle plus de chances d'atteindre le fromage que de finir dans une impasse ?
4. On peut fermer **un seul** couloir menant à une impasse. Lequel faut-il fermer pour que la probabilité d'atteindre le fromage soit la plus grande possible ? Justifier par des calculs.`,
      solution: `**1.** Premier niveau : $S_1$ et $S_2$, chacun avec la probabilité $\\dfrac{1}{2}$. Depuis $S_1$ : fromage $\\dfrac{1}{3}$, impasse $\\dfrac{2}{3}$. Depuis $S_2$ : fromage $\\dfrac{1}{2}$, impasse $\\dfrac{1}{2}$.

**2.** On additionne les probabilités des chemins menant au fromage :
$$P(F) = \\frac{1}{2} \\times \\frac{1}{3} + \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{6} + \\frac{1}{4} = \\frac{2}{12} + \\frac{3}{12} = \\frac{5}{12}.$$

**3.** $P(\\text{impasse}) = 1 - \\dfrac{5}{12} = \\dfrac{7}{12} > \\dfrac{5}{12}$ : la souris a plus de chances de finir dans une impasse.

**4.**
- On ferme une impasse de $S_1$ : depuis $S_1$, fromage avec $\\dfrac{1}{2}$. $P(F) = \\dfrac{1}{4} + \\dfrac{1}{4} = \\dfrac{1}{2}$.
- On ferme l'impasse de $S_2$ : depuis $S_2$, fromage avec $1$. $P(F) = \\dfrac{1}{6} + \\dfrac{1}{2} = \\dfrac{2}{3}$.
Comme $\\dfrac{2}{3} > \\dfrac{1}{2}$, il faut fermer l'impasse partant de la salle $S_2$.`
    },
    {
      id: "Org4-ds-09",
      title: "Les cartes numérotées",
      difficulty: 1,
      points: 4,
      statement: `Un paquet contient $20$ cartes numérotées de $1$ à $20$. On tire une carte au hasard.

1. Quelle est la probabilité de tirer la carte numéro $7$ ?
2. On considère l'événement $T$ : « le numéro est un multiple de $3$ ». Calculer la probabilité de $T$.
3. On considère l'événement $P$ : « le numéro est un nombre premier ».
   a) Calculer la probabilité de $P$.
   b) Décrire par une phrase l'événement contraire de $P$ et calculer sa probabilité.
4. Calculer la probabilité de l'événement « le numéro est à la fois premier et multiple de $3$ ».`,
      solution: `**1.** Les $20$ cartes ont la même probabilité d'être tirées : $p = \\dfrac{1}{20}$.

**2.** Les multiples de $3$ entre $1$ et $20$ sont $3$, $6$, $9$, $12$, $15$, $18$ : il y en a $6$. $p(T) = \\dfrac{6}{20} = \\dfrac{3}{10}$.

**3. a)** Les nombres premiers entre $1$ et $20$ sont $2$, $3$, $5$, $7$, $11$, $13$, $17$, $19$ ($1$ n'est pas premier) : il y en a $8$. $p(P) = \\dfrac{8}{20} = \\dfrac{2}{5}$.

**b)** L'événement contraire est « le numéro n'est pas un nombre premier ». Sa probabilité est $1 - \\dfrac{2}{5} = \\dfrac{3}{5}$.

**4.** Un nombre premier multiple de $3$ a $3$ pour diviseur : c'est donc $3$ lui-même. Une seule carte convient : la probabilité est $\\dfrac{1}{20}$.`
    },
    {
      id: "Org4-ds-10",
      title: "Jetons de couleurs et de formes",
      difficulty: 2,
      points: 5,
      statement: `Un sac contient des jetons indiscernables au toucher. Ils sont rouges ou bleus, ronds ou carrés, répartis ainsi :

|  | Rond | Carré |
|---|---|---|
| **Rouge** | $6$ | $4$ |
| **Bleu** | $3$ | $7$ |

On tire un jeton au hasard.

1. Combien y a-t-il de jetons dans le sac ?
2. Calculer la probabilité de tirer un jeton rouge, puis celle de tirer un jeton carré.
3. Calculer la probabilité de tirer un jeton rouge et carré.
4. Calculer la probabilité de tirer un jeton rouge ou carré (c'est-à-dire rouge, carré, ou les deux).
5. On ajoute dans le sac des jetons bleus et ronds. Combien faut-il en ajouter pour que la probabilité de tirer un jeton rond soit égale à $\\dfrac{1}{2}$ ?`,
      solution: `**1.** $6 + 4 + 3 + 7 = 20$ jetons.

**2.** Jetons rouges : $6 + 4 = 10$, donc $p(\\text{rouge}) = \\dfrac{10}{20} = \\dfrac{1}{2}$.
Jetons carrés : $4 + 7 = 11$, donc $p(\\text{carré}) = \\dfrac{11}{20}$.

**3.** Il y a $4$ jetons rouges et carrés : $p = \\dfrac{4}{20} = \\dfrac{1}{5}$.

**4.** Les jetons qui ne sont ni rouges ni carrés sont les bleus ronds : il y en a $3$. Il reste $20 - 3 = 17$ jetons rouges ou carrés : $p = \\dfrac{17}{20}$.

**5.** On ajoute $n$ jetons bleus ronds. Il y a alors $9 + n$ jetons ronds sur $20 + n$. On veut $\\dfrac{9 + n}{20 + n} = \\dfrac{1}{2}$, soit $2(9 + n) = 20 + n$, donc $18 + 2n = 20 + n$ et $n = 2$.
Il faut ajouter $2$ jetons (contrôle : $\\dfrac{11}{22} = \\dfrac{1}{2}$).`
    },
    {
      id: "Org4-ds-11",
      title: "Trois lancers d'une pièce",
      difficulty: 3,
      points: 5,
      statement: `On lance trois fois de suite une pièce de monnaie équilibrée et on note à chaque fois le côté obtenu : P (pile) ou F (face).

1. Construire un arbre représentant toutes les issues. Combien y en a-t-il ? Sont-elles équiprobables ?
2. Calculer la probabilité d'obtenir exactement deux fois pile.
3. Calculer la probabilité d'obtenir au moins une fois face. On pourra utiliser l'événement contraire.
4. Léo dit : « J'ai une chance sur deux d'obtenir autant de piles que de faces. » A-t-il raison ?
5. Calculer la probabilité d'obtenir plus de piles que de faces.`,
      solution: `**1.** À chaque lancer, l'arbre se divise en deux branches (P ou F). Il y a $2 \\times 2 \\times 2 = 8$ issues :
PPP, PPF, PFP, PFF, FPP, FPF, FFP, FFF.
La pièce étant équilibrée, ces $8$ issues sont équiprobables : chacune a pour probabilité $\\dfrac{1}{8}$.

**2.** Exactement deux piles : PPF, PFP, FPP, soit $3$ issues. $p = \\dfrac{3}{8}$.

**3.** L'événement contraire de « au moins une face » est « aucune face », c'est-à-dire PPP, de probabilité $\\dfrac{1}{8}$. Donc $p = 1 - \\dfrac{1}{8} = \\dfrac{7}{8}$.

**4.** Avec $3$ lancers (nombre impair), on ne peut pas avoir autant de piles que de faces. Cet événement est impossible, sa probabilité est $0$ : Léo a tort.

**5.** Plus de piles que de faces : $3$ piles (PPP) ou $2$ piles (PPF, PFP, FPP), soit $4$ issues. $p = \\dfrac{4}{8} = \\dfrac{1}{2}$.`
    },
    {
      id: "Org4-ds-12",
      title: "Tirer au sort deux délégués",
      difficulty: 4,
      points: 6,
      statement: `Dans un club, cinq candidats se présentent pour devenir délégués : trois filles (Ana, Bao, Chloé) et deux garçons (Driss, Émile). On écrit leurs noms sur des papiers et on tire au hasard un premier papier, puis un second **sans remettre** le premier.

1. Construire un arbre pondéré en notant, à chaque tirage, s'il s'agit d'une fille (F) ou d'un garçon (G).
2. Calculer la probabilité que les deux délégués soient des filles.
3. Calculer la probabilité que les délégués soient deux garçons, puis celle que les délégués soient une fille et un garçon.
4. Le club veut que la probabilité d'avoir deux garçons soit inférieure à $\\dfrac{1}{20}$. Les deux garçons restant candidats, combien de filles au minimum doivent se présenter ?`,
      solution: `**1.** Premier tirage : $p(F) = \\dfrac{3}{5}$ et $p(G) = \\dfrac{2}{5}$.
Second tirage, il reste $4$ papiers :
- après F : il reste $2$ filles et $2$ garçons, branches $\\dfrac{2}{4}$ (F) et $\\dfrac{2}{4}$ (G) ;
- après G : il reste $3$ filles et $1$ garçon, branches $\\dfrac{3}{4}$ (F) et $\\dfrac{1}{4}$ (G).

**2.** $p(FF) = \\dfrac{3}{5} \\times \\dfrac{2}{4} = \\dfrac{6}{20} = \\dfrac{3}{10}$.

**3.** $p(GG) = \\dfrac{2}{5} \\times \\dfrac{1}{4} = \\dfrac{2}{20} = \\dfrac{1}{10}$.
Une fille et un garçon : $p(FG) + p(GF) = \\dfrac{3}{5} \\times \\dfrac{2}{4} + \\dfrac{2}{5} \\times \\dfrac{3}{4} = \\dfrac{6}{20} + \\dfrac{6}{20} = \\dfrac{3}{5}$.
(Contrôle : $\\dfrac{3}{10} + \\dfrac{1}{10} + \\dfrac{3}{5} = 1$.)

**4.** S'il y a $n$ candidats en tout (dont $2$ garçons), $p(GG) = \\dfrac{2}{n} \\times \\dfrac{1}{n - 1} = \\dfrac{2}{n(n - 1)}$.
On veut $\\dfrac{2}{n(n - 1)} < \\dfrac{1}{20}$, c'est-à-dire $n(n - 1) > 40$.
- $n = 6$ : $6 \\times 5 = 30$, ne convient pas ;
- $n = 7$ : $7 \\times 6 = 42 > 40$, convient (et le produit augmente avec $n$).

Il faut au moins $7$ candidats, donc au moins $5$ filles (contrôle : $p(GG) = \\dfrac{2}{42} = \\dfrac{1}{21} < \\dfrac{1}{20}$).`
    }
  ],
  "Algo": [
    {
      id: "Algo-ds-01",
      title: "Un programme de calcul en Scratch",
      difficulty: 1,
      points: 4,
      statement: `On considère le script suivant :

\`\`\`scratch
quand drapeau cliqué
demander [Choisis un nombre] et attendre
mettre [x] à réponse
mettre [y] à (x × 3)
ajouter -4 à [y]
mettre [y] à (y × 2)
dire y
\`\`\`

1. Quel nombre le lutin dit-il si l'on saisit $5$ ? Et si l'on saisit $-1$ ?
2. On saisit un nombre $x$. Exprimer en fonction de $x$ le nombre dit par le lutin, puis développer.
3. Quel nombre faut-il saisir pour que le lutin dise $0$ ?`,
      solution: `**1.** Avec $5$ : $y = 15$, puis $y = 15 - 4 = 11$, puis $y = 22$. Le lutin dit $22$.
Avec $-1$ : $y = -3$, puis $-7$, puis $-14$. Le lutin dit $-14$.

**2.** Le lutin dit $2(3x - 4) = 6x - 8$.
(Contrôle : $6 \\times 5 - 8 = 22$.)

**3.** On résout $6x - 8 = 0$ : $x = \\dfrac{8}{6} = \\dfrac{4}{3}$. Il faut saisir $\\dfrac{4}{3}$ ; une valeur décimale approchée comme $1{,}33$ ne donnerait pas exactement $0$ (elle donnerait $-0{,}02$).`
    },
    {
      id: "Algo-ds-02",
      title: "Le ticket de caisse au tableur",
      difficulty: 1,
      points: 4,
      statement: `Pour préparer la rentrée, Emma a réalisé la feuille de calcul suivante :

|   | A | B | C | D |
|:---:|:---|:---:|:---:|:---:|
| **1** | Article | Prix unitaire (€) | Quantité | Total (€) |
| **2** | Cahier | $2{,}50$ | $4$ | |
| **3** | Stylo | $1{,}20$ | $10$ | |
| **4** | Classeur | $4{,}80$ | $2$ | |
| **5** | Calculatrice | $17{,}90$ | $1$ | |
| **6** | | | Total | |

1. Quelle formule Emma doit-elle saisir dans la cellule D2, puis étirer jusqu'à D5 ?
2. Quels nombres s'afficheront dans les cellules D2 à D5 ?
3. Proposer deux formules différentes à saisir dans la cellule D6, puis donner le résultat affiché.
4. Le magasin accorde une réduction de $10\\,\\%$ sur le total. Quelle formule permet d'afficher le prix à payer dans la cellule D7 ? Quel est ce prix ?`,
      solution: `**1.** \`=B2*C2\` (en étirant vers le bas, la formule devient \`=B3*C3\`, etc.).

**2.** D2 : $2{,}50 \\times 4 = 10$ ; D3 : $1{,}20 \\times 10 = 12$ ; D4 : $4{,}80 \\times 2 = 9{,}60$ ; D5 : $17{,}90$.

**3.** \`=SOMME(D2:D5)\` ou \`=D2+D3+D4+D5\`. Résultat : $10 + 12 + 9{,}60 + 17{,}90 = 49{,}50$ €.

**4.** \`=D6*0,9\` (baisser de $10\\,\\%$, c'est multiplier par $0{,}9$). Prix à payer : $49{,}50 \\times 0{,}9 = 44{,}55$ €.`
    },
    {
      id: "Algo-ds-03",
      title: "L'escalier du lutin",
      difficulty: 2,
      points: 5,
      statement: `La scène de Scratch est un repère dont les abscisses vont de $-240$ à $240$ et les ordonnées de $-180$ à $180$. On considère le script :

\`\`\`scratch
quand drapeau cliqué
effacer tout
aller à x: -200 y: -150
s'orienter à 90
stylo en position d'écriture
répéter 5 fois
    avancer de 20 pas
    tourner ↺ de 90 degrés
    avancer de 20 pas
    tourner ↻ de 90 degrés
\`\`\`

(« s'orienter à 90 » oriente le lutin vers la droite.)

1. Dessiner la figure obtenue (on pourra prendre $1$ cm pour $20$ pas).
2. Quelle est la longueur totale du tracé, en pas ?
3. Quelles sont les coordonnées du lutin à la fin du script ? Justifier.
4. On veut tracer $8$ marches de $30$ pas de large et $10$ pas de haut. Quelles modifications faut-il apporter ? Le lutin restera-t-il sur la scène ?`,
      solution: `**1.** Le lutin trace un **escalier** de $5$ marches : à chaque répétition, il avance de $20$ pas vers la droite, tourne vers le haut, monte de $20$ pas, puis se réoriente vers la droite.

**2.** À chaque répétition : $20 + 20 = 40$ pas. Total : $5 \\times 40 = 200$ pas.

**3.** Chaque marche déplace le lutin de $20$ vers la droite et de $20$ vers le haut. Après $5$ marches : $x = -200 + 5 \\times 20 = -100$ et $y = -150 + 5 \\times 20 = -50$. Le lutin termine en $(-100\\,;\\,-50)$.

**4.** On remplace « répéter 5 fois » par « répéter 8 fois », le premier « avancer de 20 pas » par « avancer de 30 pas » et le second par « avancer de 10 pas ». Position finale : $x = -200 + 8 \\times 30 = 40$ et $y = -150 + 8 \\times 10 = -70$. Comme $-240 \\leqslant 40 \\leqslant 240$ et $-180 \\leqslant -70 \\leqslant 180$, le lutin reste sur la scène.`
    },
    {
      id: "Algo-ds-04",
      title: "La mention au brevet",
      difficulty: 2,
      points: 5,
      statement: `Un élève a programmé le script suivant pour afficher la mention obtenue au brevet en fonction de la moyenne sur $20$ :

\`\`\`scratch
quand drapeau cliqué
demander [Moyenne sur 20 ?] et attendre
mettre [note] à réponse
si (note ≥ 16) alors
    dire [Très bien]
sinon
    si (note ≥ 14) alors
        dire [Bien]
    sinon
        si (note ≥ 12) alors
            dire [Assez bien]
        sinon
            si (note ≥ 10) alors
                dire [Admis sans mention]
            sinon
                dire [Non admis]
\`\`\`

1. Qu'affiche le lutin si l'on saisit $15$ ? $10$ ? $9{,}5$ ? $16$ ?
2. Pour quelles moyennes le lutin affiche-t-il « Assez bien » ?
3. Un camarade écrit le même script, mais en testant les conditions dans l'ordre inverse : d'abord « note $\\geqslant 10$ », puis « note $\\geqslant 12$ », etc. Qu'affichera son script pour une moyenne de $17$ ? Expliquer l'erreur.`,
      solution: `**1.** $15$ : « Bien » ($15 < 16$ mais $15 \\geqslant 14$). $10$ : « Admis sans mention ». $9{,}5$ : « Non admis ». $16$ : « Très bien » ($16 \\geqslant 16$).

**2.** « Assez bien » s'affiche lorsque la note n'est pas $\\geqslant 16$, pas $\\geqslant 14$, mais $\\geqslant 12$ : pour les moyennes comprises entre $12$ (inclus) et $14$ (exclu).

**3.** Pour $17$, la première condition testée « note $\\geqslant 10$ » est vraie : le script affiche « Admis sans mention » et les autres tests (dans le « sinon ») ne sont jamais effectués. Dans une suite de « si… sinon », il faut tester les seuils du plus exigeant au moins exigeant.`
    },
    {
      id: "Algo-ds-05",
      title: "Moyennes pondérées au tableur",
      difficulty: 3,
      points: 5,
      statement: `Un professeur utilise un tableur pour calculer les moyennes de ses élèves.

|   | A | B | C | D | E |
|:---:|:---|:---:|:---:|:---:|:---:|
| **1** | Élève | DS 1 (coef. 2) | DM (coef. 1) | DS 2 (coef. 3) | Moyenne |
| **2** | Inès | $14$ | $18$ | $12$ | |
| **3** | Hugo | $9$ | $15$ | $11$ | |
| **4** | Sacha | $16$ | $12$ | $15$ | |
| **5** | Moyenne | | | | |

1. Quelle formule saisir en E2 pour calculer la moyenne pondérée d'Inès, de façon à pouvoir l'étirer jusqu'à E4 ?
2. Calculer les moyennes affichées en E2, E3 et E4 (arrondies au centième).
3. Le professeur avait d'abord saisi \`=2*B2+C2+3*D2/6\`. Quel résultat s'affichait pour Inès ? Expliquer l'erreur.
4. Quelle formule saisir en B5 pour calculer la moyenne de la classe au DS 1 ? Quel résultat s'affiche ?`,
      solution: `**1.** \`=(2*B2+C2+3*D2)/6\` (la somme des coefficients est $2 + 1 + 3 = 6$).

**2.** Inès : $\\dfrac{28 + 18 + 36}{6} = \\dfrac{82}{6} \\approx 13{,}67$ ; Hugo : $\\dfrac{18 + 15 + 33}{6} = 11$ ; Sacha : $\\dfrac{32 + 12 + 45}{6} = \\dfrac{89}{6} \\approx 14{,}83$.

**3.** Sans parenthèses, la division est prioritaire et ne porte que sur 3\\*D2 : le tableur calcule $2 \\times 14 + 18 + \\dfrac{3 \\times 12}{6} = 28 + 18 + 6 = 52$. Il faut des parenthèses autour de la somme.

**4.** \`=MOYENNE(B2:B4)\`, qui affiche $\\dfrac{14 + 9 + 16}{3} = 13$.`
    },
    {
      id: "Algo-ds-06",
      title: "Une boucle « répéter jusqu'à »",
      difficulty: 3,
      points: 5,
      statement: `On considère le script suivant :

\`\`\`scratch
quand drapeau cliqué
mettre [n] à 0
mettre [s] à 0
répéter jusqu'à ce que (s > 100)
    ajouter 1 à [n]
    ajouter (n × n) à [s]
dire (regrouper [n = ] et n)
dire (regrouper [s = ] et s)
\`\`\`

1. Recopier et compléter le tableau donnant les valeurs de $n$ et $s$ à la fin de chaque passage dans la boucle :

| Passage | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $n$ | | | | | | | |
| $s$ | | | | | | | |

2. Qu'affiche le lutin à la fin ?
3. Décrire en une phrase ce que calcule ce programme.
4. Que faudrait-il modifier pour obtenir le plus petit nombre $n$ tel que $1 + 2 + \\cdots + n$ dépasse $100$ ? Quel serait le résultat ?`,
      solution: `**1.**

| Passage | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $n$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ |
| $s$ | $1$ | $5$ | $14$ | $30$ | $55$ | $91$ | $140$ |

La boucle s'arrête dès que $s > 100$, c'est-à-dire après le $7^\\text{e}$ passage.

**2.** Le lutin dit « n = 7 » puis « s = 140 ».

**3.** Le programme cherche le plus petit entier $n$ tel que $1^2 + 2^2 + \\cdots + n^2 > 100$ et affiche cette somme.

**4.** Il faut remplacer « ajouter (n × n) à [s] » par « ajouter n à [s] ». Les sommes sont alors $1, 3, 6, 10, \\ldots, 91$ (pour $n = 13$) puis $105$ (pour $n = 14$) : le lutin dirait « n = 14 » et « s = 105 ».`
    },
    {
      id: "Algo-ds-07",
      title: "Tester si un nombre est premier",
      difficulty: 4,
      points: 6,
      statement: `On considère le script suivant ; « $N$ modulo $d$ » donne le reste de la division euclidienne de $N$ par $d$.

\`\`\`scratch
quand drapeau cliqué
demander [Entier supérieur ou égal à 2 ?] et attendre
mettre [N] à réponse
mettre [d] à 2
mettre [premier] à [oui]
répéter jusqu'à ce que ((d × d) > N)
    si ((N modulo d) = 0) alors
        mettre [premier] à [non]
    ajouter 1 à [d]
dire premier
\`\`\`

1. Faire fonctionner le script pour $N = 15$ : donner les valeurs successives de $d$ et le message final.
2. Même question pour $N = 13$.
3. Expliquer ce que teste ce programme.
4. Combien de passages dans la boucle le programme effectue-t-il pour $N = 97$ ? Qu'affiche-t-il ?
5. Un élève remplace la condition d'arrêt par « $d > N / 2$ ». Le programme donne-t-il toujours le bon résultat ? Combien de passages effectue-t-il alors pour $N = 97$ ? Quel est l'intérêt de la condition « $d \\times d > N$ » ?`,
      solution: `**1.** $d = 2$ : $15 = 2 \\times 7 + 1$, reste $1$. $d = 3$ : reste $0$, donc premier $=$ « non ». $d = 4$ : $4 \\times 4 = 16 > 15$, la boucle s'arrête. Le lutin dit « non » ($15 = 3 \\times 5$).

**2.** $d = 2$ : reste $1$ ; $d = 3$ : reste $1$ ; $d = 4$ : $16 > 13$, arrêt. Aucun reste nul : le lutin dit « oui ».

**3.** Le programme teste si $N$ est un **nombre premier** : il cherche un diviseur $d$ de $N$ avec $d \\geqslant 2$ et $d \\times d \\leqslant N$. S'il en trouve un, $N$ n'est pas premier.

**4.** On teste $d = 2, 3, \\ldots, 9$ (car $9 \\times 9 = 81 \\leqslant 97$ et $10 \\times 10 = 100 > 97$) : $8$ passages. Aucun de ces nombres ne divise $97$ : le lutin dit « oui », $97$ est premier.

**5.** Le résultat reste juste (un diviseur de $N$ autre que $N$ est au plus $\\dfrac{N}{2}$), mais on teste $d = 2, 3, \\ldots, 48$, soit $47$ passages. Si $N = a \\times b$ avec $2 \\leqslant a \\leqslant b$, alors $a \\times a \\leqslant N$ : il suffit de chercher un diviseur $d$ tel que $d \\times d \\leqslant N$. La condition « $d \\times d > N$ » donne la même réponse avec beaucoup moins de calculs.`
    },
    {
      id: "Algo-ds-08",
      title: "L'épargne au tableur et en Scratch",
      difficulty: 4,
      points: 5,
      statement: `Lina place $500$ € sur un livret qui rapporte $3\\,\\%$ d'intérêts par an : chaque année, le capital est multiplié par $1{,}03$. Elle ne fait aucun retrait.

|   | A | B |
|:---:|:---:|:---:|
| **1** | Année | Capital (€) |
| **2** | $0$ | $500$ |
| **3** | $1$ | |
| **4** | $2$ | |

1. Quelle formule saisir dans la cellule B3 pour qu'en l'étirant vers le bas on obtienne le capital de chaque année ?
2. Montrer que le capital au bout de $5$ ans est $500 \\times 1{,}03^5$ et donner sa valeur arrondie au centime.
3. Lina veut savoir au bout de combien d'années son capital dépassera $600$ €. Recopier et compléter le script ci-dessous pour répondre à cette question.

\`\`\`scratch
quand drapeau cliqué
mettre [capital] à 500
mettre [année] à 0
répéter jusqu'à ce que (capital > ...)
    mettre [capital] à (capital × ...)
    ajouter ... à [année]
dire année
\`\`\`

4. Qu'affiche le lutin ? Justifier par un calcul.`,
      solution: `**1.** \`=B2*1,03\` (en étirant, B4 contient \`=B3*1,03\`, etc.).

**2.** Chaque année, le capital est multiplié par $1{,}03$ : après $5$ ans, il a été multiplié $5$ fois, d'où $500 \\times 1{,}03^5 \\approx 579{,}64$ €.

**3.** On complète : « répéter jusqu'à ce que (capital > 600) », « mettre [capital] à (capital × 1,03) » et « ajouter 1 à [année] ».

**4.** On cherche le plus petit entier $n$ tel que $500 \\times 1{,}03^n > 600$, soit $1{,}03^n > 1{,}2$.
$1{,}03^6 \\approx 1{,}194 < 1{,}2$ (capital $\\approx 597{,}03$ €) et $1{,}03^7 \\approx 1{,}230 > 1{,}2$ (capital $\\approx 614{,}94$ €). Le lutin dit $7$ : le capital dépasse $600$ € au bout de $7$ ans.`
    },
    {
      id: "Algo-ds-09",
      title: "Deux expressions au tableur",
      difficulty: 1,
      points: 4,
      statement: `Pour comparer deux expressions, Sacha a réalisé la feuille de calcul suivante. Les formules saisies en B2 et C2 ont été étirées jusqu'à la ligne 8.

|   | A | B | C |
|:---:|:---:|:---:|:---:|
| **1** | $x$ | $2x^2 - 3$ | $5x + 4$ |
| **2** | $-3$ | | |
| **3** | $-2$ | | |
| **4** | $-1$ | | |
| **5** | $0$ | | |
| **6** | $1$ | | |
| **7** | $2$ | | |
| **8** | $3$ | | |

1. Quelle formule Sacha a-t-elle saisie dans la cellule B2 ? Et dans la cellule C2 ?
2. Quels nombres s'affichent dans les colonnes B et C ?
3. D'après le tableau, pour quelle valeur de $x$ les deux expressions sont-elles égales ?
4. Vérifier par le calcul que les deux expressions sont aussi égales pour $x = 3{,}5$.`,
      solution: `**1.** En B2 : \`=2*A2^2-3\` ; en C2 : \`=5*A2+4\`.

**2.**

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|---|
| $2x^2 - 3$ | $15$ | $5$ | $-1$ | $-3$ | $-1$ | $5$ | $15$ |
| $5x + 4$ | $-11$ | $-6$ | $-1$ | $4$ | $9$ | $14$ | $19$ |

Par exemple, pour $x = -3$ : $2 \\times (-3)^2 - 3 = 2 \\times 9 - 3 = 15$ et $5 \\times (-3) + 4 = -11$.

**3.** Les deux colonnes affichent le même nombre ($-1$) sur la ligne 4 : les expressions sont égales pour $x = -1$.

**4.** Pour $x = 3{,}5$ : $2 \\times 3{,}5^2 - 3 = 2 \\times 12{,}25 - 3 = 21{,}5$ et $5 \\times 3{,}5 + 4 = 17{,}5 + 4 = 21{,}5$. Les deux expressions sont bien égales.`
    },
    {
      id: "Algo-ds-10",
      title: "Des carrés emboîtés",
      difficulty: 2,
      points: 5,
      statement: `On considère le programme suivant, qui utilise un bloc personnalisé « carré ».

\`\`\`scratch
définir carré (c)
répéter 4 fois
    avancer de (c) pas
    tourner ↺ de 90 degrés

quand drapeau cliqué
effacer tout
aller à x: 0 y: 0
s'orienter à 90
stylo en position d'écriture
mettre [côté] à 10
répéter 5 fois
    carré (côté)
    ajouter 10 à [côté]
\`\`\`

1. Quelles sont les longueurs des côtés des carrés tracés ?
2. Où se trouve le lutin après avoir tracé chaque carré ? Décrire la figure obtenue.
3. Calculer la longueur totale du tracé, en pas.
4. On échange les deux instructions situées dans la boucle « répéter 5 fois ». Quels carrés obtient-on alors ?
5. Quelles modifications faut-il apporter au programme initial pour tracer $8$ carrés de côtés $10$, $20$, …, $80$ pas ? Quelle est alors la longueur totale du tracé ?`,
      solution: `**1.** La variable côté vaut successivement $10$, $20$, $30$, $40$ et $50$ : les carrés ont pour côtés $10$, $20$, $30$, $40$ et $50$ pas.

**2.** Dans le bloc « carré », le lutin avance puis tourne de $90^\\circ$ quatre fois : il fait un tour complet ($4 \\times 90^\\circ = 360^\\circ$) et revient à son point de départ, avec la même orientation. Tous les carrés ont donc un sommet commun, l'origine $(0\\,;\\,0)$ : on obtient cinq carrés emboîtés de plus en plus grands, qui partagent un coin.

**3.** Un carré de côté $c$ mesure $4c$ pas de tracé. Total : $4 \\times (10 + 20 + 30 + 40 + 50) = 4 \\times 150 = 600$ pas.

**4.** La variable est augmentée avant chaque tracé : on obtient des carrés de côtés $20$, $30$, $40$, $50$ et $60$ pas.

**5.** Il suffit de remplacer « répéter 5 fois » par « répéter 8 fois ». Longueur totale : $4 \\times (10 + 20 + \\ldots + 80) = 4 \\times 360 = 1\\,440$ pas.`
    },
    {
      id: "Algo-ds-11",
      title: "Le vol d'un nombre",
      difficulty: 3,
      points: 5,
      statement: `On considère le script suivant (« $n$ modulo $2$ » donne le reste de la division euclidienne de $n$ par $2$) :

\`\`\`scratch
quand drapeau cliqué
demander [Choisis un entier positif] et attendre
mettre [n] à réponse
mettre [étapes] à 0
répéter jusqu'à <(n) = 1>
    si <((n) modulo 2) = 0> alors
        mettre [n] à ((n) / 2)
    sinon
        mettre [n] à ((3 × (n)) + 1)
    ajouter 1 à [étapes]
dire (étapes)
\`\`\`

1. On saisit $6$. Écrire la liste des valeurs successives prises par $n$. Quel nombre le lutin dit-il ?
2. Sans tout recalculer, déterminer le nombre dit par le lutin si l'on saisit $12$. Justifier.
3. Que dit le lutin si l'on saisit $1$ ? Expliquer.
4. On saisit $7$. Quelle est la plus grande valeur prise par $n$ ? Que dit le lutin ?
5. Que se passe-t-il si l'on saisit $0$ ? Expliquer.`,
      solution: `**1.** $6$ est pair : $n$ devient $3$ ; $3$ est impair : $n$ devient $3 \\times 3 + 1 = 10$ ; puis $5$ ; $16$ ; $8$ ; $4$ ; $2$ ; $1$.
Valeurs successives : $6 \\to 3 \\to 10 \\to 5 \\to 16 \\to 8 \\to 4 \\to 2 \\to 1$. La boucle a été parcourue $8$ fois : le lutin dit $8$.

**2.** $12$ est pair : à la première étape, $n$ devient $6$. Ensuite, le programme se déroule exactement comme à la question 1, avec $8$ étapes de plus. Le lutin dit $1 + 8 = 9$.

**3.** La condition « $n = 1$ » est vraie dès le départ : la boucle n'est jamais parcourue et le lutin dit $0$.

**4.** $7 \\to 22 \\to 11 \\to 34 \\to 17 \\to 52 \\to 26 \\to 13 \\to 40 \\to 20 \\to 10 \\to 5 \\to 16 \\to 8 \\to 4 \\to 2 \\to 1$.
La plus grande valeur prise par $n$ est $52$, et il y a $16$ étapes : le lutin dit $16$.

**5.** $0$ est pair (le reste de $0$ par $2$ est $0$) : $n$ devient $\\dfrac{0}{2} = 0$, et ainsi de suite. $n$ reste égal à $0$ et n'atteint jamais $1$ : la boucle ne s'arrête jamais, le lutin ne dit rien (le programme tourne indéfiniment).`
    },
    {
      id: "Algo-ds-12",
      title: "Des points qui fondent",
      difficulty: 4,
      points: 6,
      statement: `Dans un jeu vidéo, un joueur commence avec $100$ points de vie. À chaque manche, il perd $10\\,\\%$ de ses points, puis récupère $5$ points. On suit l'évolution à l'aide d'un tableur :

|   | A | B |
|:---:|:---:|:---:|
| **1** | Manche | Points de vie |
| **2** | $0$ | $100$ |
| **3** | $1$ | |
| **4** | $2$ | |
| **5** | $3$ | |

1. Quelle formule faut-il saisir dans la cellule B3, pour l'étirer ensuite vers le bas ?
2. Calculer les nombres affichés dans les cellules B3, B4 et B5.
3. Compléter le script suivant pour que le lutin dise le nombre de manches au bout duquel le joueur a, pour la première fois, moins de $60$ points de vie.

\`\`\`scratch
quand drapeau cliqué
mettre [points] à 100
mettre [manche] à 0
répéter jusqu'à < … >
    mettre [points] à ( … )
    ajouter 1 à [manche]
dire (manche)
\`\`\`

4. En prolongeant la feuille de calcul, on obtient environ $60{,}29$ points après $15$ manches. Que dira le lutin ? Justifier par un calcul.
5. Démontrer que, si le joueur a au moins $50$ points au début d'une manche, il en a encore au moins $50$ à la fin de cette manche. Que peut-on en conclure ?`,
      solution: `**1.** Perdre $10\\,\\%$, c'est multiplier par $0{,}9$ ; puis on ajoute $5$ : \`=B2*0,9+5\`.

**2.** B3 : $100 \\times 0{,}9 + 5 = 95$ ; B4 : $95 \\times 0{,}9 + 5 = 90{,}5$ ; B5 : $90{,}5 \\times 0{,}9 + 5 = 86{,}45$.

**3.** La condition d'arrêt est « points < 60 » et le calcul est « points × 0,9 + 5 » :

\`\`\`scratch
répéter jusqu'à <(points) < 60>
    mettre [points] à (((points) × 0.9) + 5)
    ajouter 1 à [manche]
\`\`\`

**4.** Après $15$ manches, il reste environ $60{,}29$ points, ce qui n'est pas inférieur à $60$. À la $16^\\text{e}$ manche : $60{,}29 \\times 0{,}9 + 5 \\approx 59{,}27 < 60$. Le lutin dit $16$.

**5.** Si les points $p$ vérifient $p \\geqslant 50$ au début d'une manche, alors $0{,}9p \\geqslant 0{,}9 \\times 50 = 45$, donc $0{,}9p + 5 \\geqslant 50$.
Le joueur commence avec $100 \\geqslant 50$ points : d'une manche à l'autre, il garde toujours au moins $50$ points. Ses points de vie ne descendront donc jamais en dessous de $50$ (le joueur ne peut pas perdre toute sa vie de cette façon).`
    }
  ]
});
