// Base de données des exercices interactifs par chapitre et par palier ZPD (1 à 4)
window.MATHS_EXERCISES = Object.assign(window.MATHS_EXERCISES || {}, {
  "N1": [
    {
      "id": "N1-1",
      "chapterId": "N1",
      "tier": 1,
      "title": "Addition de fractions de même dénominateur",
      "statement": "Calculer l'expression suivante et donner le résultat sous la forme d'une fraction irréductible :\n$$A = \\frac{5}{7} + \\frac{8}{7}$$",
      "type": "exact",
      "answer": "13/7",
      "hint1": "Les deux fractions ont déjà le même dénominateur ($7$). Tu n'as qu'à additionner les numérateurs !",
      "hint2": "Formule : $\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d}$. Calcule $5 + 8$ et conserve le dénominateur $7$.",
      "solution": "Comme les dénominateurs sont identiques :\n$$A = \\frac{5 + 8}{7} = \\frac{13}{7}$$\n13 et 7 n'ont aucun diviseur commun autre que 1, la fraction $\\frac{13}{7}$ est donc irréductible.",
      "skill": "Calculer"
    },
    {
      "id": "N1-2",
      "chapterId": "N1",
      "tier": 1,
      "title": "Multiplication de fractions et simplification",
      "statement": "Calculer en simplifiant avant d'effectuer :\n$$B = \\frac{4}{9} \\times \\frac{3}{8}$$",
      "type": "exact",
      "answer": "1/6",
      "hint1": "Pour multiplier, multiplie numérateurs entre eux et dénominateurs entre eux, mais simplifie d'abord 4 avec 8 et 3 avec 9.",
      "hint2": "$4$ et $8$ se simplifient par $4$ (il reste $1$ et $2$). $3$ et $9$ se simplifient par $3$ (il reste $1$ et $3$).",
      "solution": "$$B = \\frac{4 \\times 3}{9 \\times 8} = \\frac{4 \\times 3}{(3 \\times 3) \\times (4 \\times 2)} = \\frac{1}{3 \\times 2} = \\frac{1}{6}$$",
      "skill": "Calculer"
    },
    {
      "id": "N1-3",
      "chapterId": "N1",
      "tier": 1,
      "title": "Inverse d'une fraction négative",
      "statement": "Quel est l'inverse du nombre $-\\frac{4}{7}$ ?",
      "type": "mcq",
      "options": [
        "$-\\frac{7}{4}$",
        "$\\frac{4}{7}$",
        "$\\frac{7}{4}$",
        "$-\\frac{4}{7}$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! L'inverse conserve son signe : on échange numérateur et dénominateur, donc $-\\frac{7}{4}$.",
        "Non, $\\frac{4}{7}$ est l'opposé de $-\\frac{4}{7}$, pas son inverse.",
        "Attention, l'inverse d'un nombre négatif reste négatif ! $(-\\frac{4}{7}) \\times (-\\frac{7}{4}) = +1$.",
        "Non, c'est le nombre lui-même."
      ],
      "hint1": "L'inverse d'un quotient $\\frac{a}{b}$ est le nombre $\\frac{b}{a}$ tel que leur produit soit égal à 1.",
      "hint2": "Le produit d'un nombre et de son inverse vaut $+1$. Donc le signe ne change pas !",
      "solution": "L'inverse d'un nombre relatif non nul $x$ est $\\frac{1}{x}$. Pour une fraction $\\frac{a}{b}$, son inverse est $\\frac{b}{a}$. Ainsi, l'inverse de $-\\frac{4}{7}$ est $-\\frac{7}{4}$.",
      "skill": "Raisonner"
    },
    {
      "id": "N1-4",
      "chapterId": "N1",
      "tier": 2,
      "title": "Addition avec dénominateurs différents",
      "statement": "Calculer et donner sous forme irréductible :\n$$C = \\frac{3}{4} + \\frac{5}{12}$$",
      "type": "exact",
      "answer": "7/6",
      "hint1": "Le dénominateur commun est 12 (car $12 = 4 \\times 3$). Transforme $\\frac{3}{4}$ en douzièmes.",
      "hint2": "$\\frac{3}{4} = \\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}$. Additionne ensuite $\\frac{9}{12} + \\frac{5}{12}$ puis simplifie.",
      "solution": "$$C = \\frac{3 \\times 3}{4 \\times 3} + \\frac{5}{12} = \\frac{9}{12} + \\frac{5}{12} = \\frac{14}{12} = \\frac{14 \\div 2}{12 \\div 2} = \\frac{7}{6}$$",
      "skill": "Calculer"
    },
    {
      "id": "N1-5",
      "chapterId": "N1",
      "tier": 2,
      "title": "Division de fractions (Multiplication par l'inverse)",
      "statement": "Calculer sous forme irréductible :\n$$D = \\frac{3}{4} \\div \\frac{5}{8}$$",
      "type": "exact",
      "answer": "6/5",
      "hint1": "Diviser par $\\frac{5}{8}$ revient à multiplier par son inverse $\\frac{8}{5}$.",
      "hint2": "$D = \\frac{3}{4} \\times \\frac{8}{5}$. Pense à simplifier $8$ avec $4$ avant de calculer le produit.",
      "solution": "$$D = \\frac{3}{4} \\times \\frac{8}{5} = \\frac{3 \\times (4 \\times 2)}{4 \\times 5} = \\frac{3 \\times 2}{5} = \\frac{6}{5}$$",
      "skill": "Calculer"
    },
    {
      "id": "N1-6",
      "chapterId": "N1",
      "tier": 3,
      "title": "Priorités opératoires complexes (Brevet)",
      "statement": "Calculer en détaillant les étapes et donner le résultat sous la forme d'une fraction irréductible :\n$$E = \\frac{7}{5} - \\frac{3}{5} \\div \\frac{9}{10}$$",
      "type": "exact",
      "answer": "11/15",
      "hint1": "Attention aux priorités : effectue d'abord la division $\\frac{3}{5} \\div \\frac{9}{10}$, puis soustrais le résultat à $\\frac{7}{5}$.",
      "hint2": "$\\frac{3}{5} \\div \\frac{9}{10} = \\frac{3}{5} \\times \\frac{10}{9} = \\frac{30}{45} = \\frac{2}{3}$. Il te reste à calculer $\\frac{7}{5} - \\frac{2}{3}$.",
      "solution": "1. Priorité à la division :\n$$\\frac{3}{5} \\div \\frac{9}{10} = \\frac{3}{5} \\times \\frac{10}{9} = \\frac{3 \\times 10}{5 \\times 9} = \\frac{30}{45} = \\frac{2}{3}$$\n2. Soustraction avec dénominateur commun $15$ :\n$$E = \\frac{7}{5} - \\frac{2}{3} = \\frac{7 \\times 3}{5 \\times 3} - \\frac{2 \\times 5}{3 \\times 5} = \\frac{21}{15} - \\frac{10}{15} = \\frac{11}{15}$$",
      "skill": "Raisonner"
    },
    {
      "id": "N1-7",
      "chapterId": "N1",
      "tier": 3,
      "title": "Problème de partage (type DNB)",
      "statement": "Dans un collège, $\\frac{2}{5}$ des élèves de 3ème ont voté pour A et $\\frac{1}{3}$ pour B. Les autres ont voté pour C ou blanc.\nQuelle fraction des élèves représente ceux qui n'ont voté ni pour A ni pour B ?",
      "type": "exact",
      "answer": "4/15",
      "hint1": "Le total des élèves correspond à $1$. Calcule d'abord la part cumulée de A et B : $\\frac{2}{5} + \\frac{1}{3}$.",
      "hint2": "$\\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$. Soustrais ensuite cette fraction à $1$.",
      "solution": "1. Part totale des votants A et B :\n$$\\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$$\n2. Part restante :\n$$1 - \\frac{11}{15} = \\frac{15}{15} - \\frac{11}{15} = \\frac{4}{15}$$",
      "skill": "Modéliser"
    },
    {
      "id": "N1-8",
      "chapterId": "N1",
      "tier": 4,
      "title": "Défi : Fractions d'un reste",
      "statement": "Un randonneur parcourt le premier jour $\\frac{1}{3}$ de son trajet, puis le deuxième jour $\\frac{2}{5}$ de ce qui lui reste. Il lui reste alors $36$ km à parcourir.\nQuelle est la longueur totale du trajet, en km ?",
      "type": "exact",
      "answer": "90",
      "hint1": "Exprime chaque étape en fraction du trajet total. Attention : le deuxième jour, la fraction $\\frac{2}{5}$ porte sur ce qui reste, pas sur le trajet entier.",
      "hint2": "Après le premier jour, il reste $\\frac{2}{3}$ du trajet. Le deuxième jour, il parcourt donc $\\frac{2}{5} \\times \\frac{2}{3}$ du trajet total.",
      "solution": "1. Après le premier jour, il reste $1 - \\frac{1}{3} = \\frac{2}{3}$ du trajet.\n2. Le deuxième jour, il parcourt $\\frac{2}{5} \\times \\frac{2}{3} = \\frac{4}{15}$ du trajet.\n3. Fraction parcourue en deux jours :\n$$\\frac{1}{3} + \\frac{4}{15} = \\frac{5}{15} + \\frac{4}{15} = \\frac{9}{15} = \\frac{3}{5}$$\n4. Il reste donc $\\frac{2}{5}$ du trajet, soit $36$ km. En notant $L$ la longueur totale :\n$$\\frac{2}{5} L = 36 \\iff L = 36 \\times \\frac{5}{2} = 90$$\nVérification : $30$ km le premier jour, il reste $60$ km ; $\\frac{2}{5}$ de $60$ font $24$ km ; il reste bien $36$ km.",
      "skill": "Raisonner"
    }
  ],
  "N2": [
    {
      "id": "N2-1",
      "chapterId": "N2",
      "tier": 1,
      "title": "Simple distributivité",
      "statement": "Développer et réduire l'expression :\n$$A = 4(3x - 5)$$",
      "type": "mcq",
      "options": [
        "$12x - 20$",
        "$12x - 5$",
        "$7x - 20$",
        "$12x + 20$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Parfait ! $4 \\times 3x = 12x$ et $4 \\times (-5) = -20$.",
        "Attention, tu as oublié de distribuer le $4$ sur le deuxième terme ($-5$).",
        "Attention, on multiplie et on n'additionne pas ($4 \\times 3 = 12$, pas $4+3=7$).",
        "Attention à la règle des signes : un positif fois un négatif donne un négatif."
      ],
      "hint1": "Distribue le $4$ sur chacun des deux termes dans la parenthèse : $k(a - b) = ka - kb$.",
      "hint2": "Calcule $4 \\times 3x$ puis $4 \\times (-5)$.",
      "solution": "$$A = 4 \\times 3x + 4 \\times (-5) = 12x - 20$$",
      "skill": "Calculer"
    },
    {
      "id": "N2-2",
      "chapterId": "N2",
      "tier": 2,
      "title": "Développer un carré $(x+b)^2$",
      "statement": "Développer en écrivant le carré comme un produit :\n$$B = (x + 6)^2$$",
      "type": "mcq",
      "options": [
        "$x^2 + 12x + 36$",
        "$x^2 + 36$",
        "$x^2 + 6x + 36$",
        "$2x + 12$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Excellent ! $(x+6)(x+6) = x^2 + 6x + 6x + 36 = x^2 + 12x + 36$.",
        "Erreur classique : il manque les deux produits croisés $x \\times 6$ et $6 \\times x$, soit $12x$ !",
        "Attention, il y a deux produits croisés : $6x + 6x = 12x$, pas $6x$.",
        "Attention, $(x+6)^2$ signifie $(x+6) \\times (x+6)$ et non $2 \\times (x+6)$."
      ],
      "hint1": "Écris le carré comme un produit : $(x + 6)^2 = (x + 6)(x + 6)$, puis applique la double distributivité.",
      "hint2": "$x \\times x = x^2$, $6 \\times 6 = 36$, et il reste à ajouter les deux produits croisés $x \\times 6$ et $6 \\times x$.",
      "solution": "$$B = (x + 6)(x + 6) = x^2 + 6x + 6x + 36 = x^2 + 12x + 36$$",
      "skill": "Calculer"
    },
    {
      "id": "N2-3",
      "chapterId": "N2",
      "tier": 1,
      "title": "Produit d'une somme par une différence",
      "statement": "Développer directement :\n$$C = (3x - 4)(3x + 4)$$",
      "type": "mcq",
      "options": [
        "$9x^2 - 16$",
        "$9x^2 + 16$",
        "$3x^2 - 16$",
        "$9x^2 - 24x - 16$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Bravo ! Formule $(a-b)(a+b) = a^2 - b^2$, avec $a^2 = (3x)^2 = 9x^2$ et $b^2 = 4^2 = 16$.",
        "Attention, la formule donne $a^2 - b^2$ avec un signe moins !",
        "Attention : $(3x)^2 = 3^2 \\times x^2 = 9x^2$ et non $3x^2$.",
        "Dans $(a-b)(a+b)$, les termes en $x$ s'annulent : $+12x - 12x = 0$."
      ],
      "hint1": "Reconnais la forme $(a-b)(a+b)$, qui se développe en $a^2 - b^2$.",
      "hint2": "Ici $a = 3x$ donc $a^2 = (3x)^2 = 9x^2$, et $b = 4$ donc $b^2 = 16$.",
      "solution": "$$C = (3x)^2 - 4^2 = 9x^2 - 16$$",
      "skill": "Calculer"
    },
    {
      "id": "N2-4",
      "chapterId": "N2",
      "tier": 2,
      "title": "Double distributivité avec soustraction",
      "statement": "Développer et réduire au maximum :\n$$D = (2x + 1)(3x - 4)$$",
      "type": "mcq",
      "options": [
        "$6x^2 - 5x - 4$",
        "$6x^2 + 5x - 4$",
        "$6x^2 - 4$",
        "$5x^2 - 5x - 4$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! $2x \\times 3x = 6x^2$, $2x \\times (-4) = -8x$, $1 \\times 3x = 3x$, $-8x + 3x = -5x$, et $1 \\times (-4) = -4$.",
        "Attention au signe : $-8x + 3x = -5x$, pas $+5x$.",
        "Tu as oublié les termes du milieu : $(2x \\times -4) + (1 \\times 3x) = -5x$.",
        "Attention : $2x \\times 3x = 6x^2$, pas $5x^2$."
      ],
      "hint1": "Applique $(a+b)(c+d) = ac + ad + bc + bd$. Attention aux signes !",
      "hint2": "Calcule : $(2x)(3x) + (2x)(-4) + (1)(3x) + (1)(-4) = 6x^2 - 8x + 3x - 4$. Réduis ensuite.",
      "solution": "$$D = 2x \\times 3x + 2x \\times (-4) + 1 \\times 3x + 1 \\times (-4) = 6x^2 - 8x + 3x - 4 = 6x^2 - 5x - 4$$",
      "skill": "Calculer"
    },
    {
      "id": "N2-5",
      "chapterId": "N2",
      "tier": 2,
      "title": "Développer un carré $(ax - b)^2$",
      "statement": "Développer en écrivant le carré comme un produit :\n$$E = (2x - 5)^2$$",
      "type": "mcq",
      "options": [
        "$4x^2 - 20x + 25$",
        "$4x^2 - 25$",
        "$4x^2 - 10x + 25$",
        "$2x^2 - 20x + 25$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! $(2x-5)(2x-5) = 4x^2 - 10x - 10x + 25 = 4x^2 - 20x + 25$.",
        "Attention, il manque les deux produits croisés $-10x$ et $-10x$, soit $-20x$ !",
        "Attention, il y a deux produits croisés : $-10x - 10x = -20x$, et non $-10x$.",
        "Attention, $2x \\times 2x = 4x^2$ et non $2x^2$."
      ],
      "hint1": "Écris le carré comme un produit : $(2x - 5)^2 = (2x - 5)(2x - 5)$, puis applique la double distributivité.",
      "hint2": "$2x \\times 2x = 4x^2$, $(-5) \\times (-5) = 25$, et il reste à ajouter les deux produits croisés $2x \\times (-5)$ et $(-5) \\times 2x$.",
      "solution": "$$E = (2x - 5)(2x - 5) = 4x^2 - 10x - 10x + 25 = 4x^2 - 20x + 25$$",
      "skill": "Calculer"
    },
    {
      "id": "N2-6",
      "chapterId": "N2",
      "tier": 3,
      "title": "Développer une expression avec parenthèses précédées de (-) (Brevet)",
      "statement": "On considère l'expression $F = (2x + 3)^2 - (x - 1)(2x + 3)$.\nDévelopper et réduire $F$. Quel coefficient obtient-on devant $x^2$ ?",
      "type": "exact",
      "answer": "2",
      "hint1": "Écris $(2x+3)^2$ comme le produit $(2x+3)(2x+3)$ et développe-le, puis développe $(x-1)(2x+3)$ entre crochets pour ne pas te tromper avec le signe moins.",
      "hint2": "$(2x+3)^2 = 4x^2 + 12x + 9$ et $(x-1)(2x+3) = 2x^2 + x - 3$. Soustrais en changeant tous les signes du second développement, puis regroupe les termes en $x^2$.",
      "solution": "1. Développons $(2x+3)^2 = (2x+3)(2x+3) = 4x^2 + 6x + 6x + 9 = 4x^2 + 12x + 9$.\n2. Développons le produit : $(x - 1)(2x + 3) = 2x^2 + 3x - 2x - 3 = 2x^2 + x - 3$.\n3. Soustraction en changeant les signes :\n$$F = (4x^2 + 12x + 9) - (2x^2 + x - 3) = 4x^2 + 12x + 9 - 2x^2 - x + 3 = 2x^2 + 11x + 12$$\nLe coefficient devant $x^2$ est donc bien $2$.",
      "skill": "Calculer"
    },
    {
      "id": "N2-7",
      "chapterId": "N2",
      "tier": 4,
      "title": "Défi Seconde : Enchaînement de développements complexes",
      "statement": "Développer et réduire au maximum l'expression suivante :\n$$G = (3x + 2)^2 - (2x - 1)(3x + 2)$$",
      "type": "mcq",
      "options": [
        "$3x^2 + 11x + 6$",
        "$3x^2 + 13x + 6$",
        "$3x^2 + 11x + 2$",
        "$9x^2 + 11x + 6$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Brillant ! $(3x+2)^2 = 9x^2 + 12x + 4$ et $(2x-1)(3x+2) = 6x^2 + x - 2$. En soustrayant : $(9-6)x^2 + (12-1)x + (4-(-2)) = 3x^2 + 11x + 6$.",
        "Attention aux signes lors de la soustraction des termes en $x$ : $12x - x = 11x$ (et non $+13x$).",
        "Attention au signe de la constante : $4 - (-2) = 4 + 2 = +6$.",
        "N'oublie pas de soustraire le terme $6x^2$ du second produit : $9x^2 - 6x^2 = 3x^2$."
      ],
      "hint1": "Développe $(3x+2)^2$ d'un côté, et développe le produit $(2x-1)(3x+2)$ entre crochets, puis distribue le signe moins.",
      "hint2": "$(3x+2)^2 = 9x^2 + 12x + 4$. Le second produit vaut $[6x^2 + 4x - 3x - 2] = [6x^2 + x - 2]$. Soustrais : $(9x^2+12x+4) - (6x^2+x-2)$.",
      "solution": "1. Premier carré : $$(3x + 2)^2 = (3x + 2)(3x + 2) = 9x^2 + 6x + 6x + 4 = 9x^2 + 12x + 4$$\n2. Second produit entre crochets :\n$$(2x - 1)(3x + 2) = [ 6x^2 + 4x - 3x - 2 ] = [ 6x^2 + x - 2 ]$$\n3. Soustraction en inversant les signes :\n$$G = (9x^2 + 12x + 4) - [ 6x^2 + x - 2 ] = 9x^2 + 12x + 4 - 6x^2 - x + 2 = 3x^2 + 11x + 6$$",
      "skill": "Calculer"
    },
    {
      "id": "N2-8",
      "chapterId": "N2",
      "tier": 1,
      "title": "Parenthèses précédées d'un signe moins",
      "statement": "Supprimer les parenthèses et réduire l'expression :\n$$H = (5x + 3) - (2x - 4)$$",
      "type": "mcq",
      "options": [
        "$3x + 7$",
        "$3x - 1$",
        "$7x - 1$",
        "$7x + 7$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Bravo ! $-(2x - 4) = -2x + 4$, donc $H = 5x + 3 - 2x + 4 = 3x + 7$.",
        "Attention : le signe $-$ change **tous** les signes intérieurs, donc $-4$ devient $+4$.",
        "Attention : tu as retiré les parenthèses sans changer les signes intérieurs.",
        "Attention : le terme $2x$ aussi change de signe, il devient $-2x$."
      ],
      "hint1": "Une parenthèse précédée d'un signe $-$ se retire en changeant **tous** les signes à l'intérieur.",
      "hint2": "$-(2x - 4) = -2x + 4$. Regroupe ensuite les termes en $x$ et les constantes.",
      "solution": "$$H = 5x + 3 - 2x + 4 = (5 - 2)x + (3 + 4) = 3x + 7$$",
      "skill": "Calculer"
    },
    {
      "id": "N2-9",
      "chapterId": "N2",
      "tier": 2,
      "title": "Reconnaître une identité",
      "statement": "Laquelle de ces égalités est une **identité**, c'est-à-dire une égalité vraie pour toutes les valeurs de $x$ ?",
      "type": "mcq",
      "options": [
        "$(x + 2)^2 = x^2 + 4x + 4$",
        "$(x + 2)^2 = x^2 + 4$",
        "$2x + 4 = 10$",
        "$3x = x^3$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Bravo ! En développant, $(x + 2)(x + 2) = x^2 + 2x + 2x + 4 = x^2 + 4x + 4$ : l'égalité est vraie pour toute valeur de $x$.",
        "Attention : pour $x = 1$, on trouve $(1 + 2)^2 = 9$ à gauche et $1^2 + 4 = 5$ à droite. L'égalité est fausse pour cette valeur.",
        "C'est une équation : elle n'est vraie que pour $x = 3$. Pour $x = 0$, on trouve $4$ à gauche et $10$ à droite.",
        "Elle est vraie pour $x = 0$, mais pas pour toutes les valeurs : pour $x = 1$, on trouve $3$ à gauche et $1$ à droite."
      ],
      "hint1": "Une identité doit être vraie pour **toutes** les valeurs de $x$. Teste chaque égalité avec une valeur simple : une seule valeur qui ne marche pas suffit à l'éliminer.",
      "hint2": "Pour $x = 1$, on a $(1 + 2)^2 = 9$ et $2 \\times 1 + 4 = 6$. Compare avec le membre de droite de chaque égalité, puis développe $(x + 2)(x + 2)$ pour confirmer celle qui résiste.",
      "solution": "On développe : $(x + 2)^2 = (x + 2)(x + 2) = x^2 + 2x + 2x + 4 = x^2 + 4x + 4$. La première égalité est donc vraie pour toute valeur de $x$ : c'est une **identité**.\nLes autres ne le sont pas : pour $x = 1$, on a $9 \\neq 5$ pour la deuxième, $6 \\neq 10$ pour la troisième et $3 \\neq 1$ pour la quatrième.",
      "skill": "Raisonner"
    }
  ],
  "N2bis": [
    {
      "id": "N2bis-1",
      "chapterId": "N2bis",
      "tier": 1,
      "title": "Facteur commun évident",
      "statement": "Factoriser complètement l'expression $A = 12x - 8$ (mettre en facteur le plus grand facteur commun).",
      "type": "exact",
      "answer": "4(3x-2)",
      "answerType": "factorisation",
      "hint1": "Cherche le plus grand diviseur commun entre 12 et 8.",
      "hint2": "$12 = 4 \\times 3$ et $8 = 4 \\times 2$. Mets 4 en facteur.",
      "solution": "$$A = 4 \\times 3x - 4 \\times 2 = 4(3x - 2)$$",
      "skill": "Calculer"
    },
    {
      "id": "N2bis-2",
      "chapterId": "N2bis",
      "tier": 2,
      "title": "Différence de deux carrés $a^2 - b^2$",
      "statement": "Factoriser complètement l'expression :\n$$B = 9x^2 - 25$$",
      "type": "exact",
      "answer": "(3x-5)(3x+5)",
      "answerType": "factorisation",
      "hint1": "Reconnais la forme $a^2 - b^2 = (a - b)(a + b)$ avec $a^2 = 9x^2$ et $b^2 = 25$.",
      "hint2": "Comme $9x^2 = (3x)^2$ et $25 = 5^2$, on a $a = 3x$ et $b = 5$.",
      "solution": "$$B = (3x)^2 - 5^2 = (3x - 5)(3x + 5)$$",
      "skill": "Calculer"
    },
    {
      "id": "N2bis-3",
      "chapterId": "N2bis",
      "tier": 3,
      "title": "Facteur commun parenthèse",
      "statement": "Factoriser complètement l'expression :\n$$C = (2x - 3)(x + 5) + (2x - 3)(3x - 1)$$",
      "type": "exact",
      "answer": "4(2x-3)(x+1)",
      "answerType": "factorisation",
      "hint1": "Souligne le facteur commun $(2x - 3)$ présent dans les deux termes, puis ouvre un grand crochet.",
      "hint2": "$C = (2x - 3)[ (x + 5) + (3x - 1) ]$. Réduis l'intérieur des crochets, puis regarde si le facteur obtenu contient encore un nombre en facteur.",
      "solution": "$$C = (2x - 3)[ (x + 5) + (3x - 1) ] = (2x - 3)(x + 5 + 3x - 1) = (2x - 3)(4x + 4) = 4(2x - 3)(x + 1)$$",
      "skill": "Raisonner"
    },
    {
      "id": "N2bis-4",
      "chapterId": "N2bis",
      "tier": 4,
      "title": "Défi Seconde : Différence de deux carrés complexe",
      "statement": "Factoriser complètement l'expression :\n$$D = (2x - 3)^2 - 25$$",
      "type": "exact",
      "answer": "4(x-4)(x+1)",
      "answerType": "factorisation",
      "hint1": "Reconnais la structure $a^2 - b^2 = (a-b)(a+b)$, sachant que $25 = 5^2$.",
      "hint2": "Ici $a = (2x - 3)$ et $b = 5$. Écris $[(2x-3) - 5][(2x-3) + 5]$, réduis chaque crochet, puis regarde si chaque facteur contient encore un nombre en facteur.",
      "solution": "$$D = (2x - 3)^2 - 5^2 = [ (2x - 3) - 5 ][ (2x - 3) + 5 ] = (2x - 8)(2x + 2) = 4(x - 4)(x + 1)$$",
      "skill": "Raisonner"
    }
  ],
  "G0": [
    {
      "id": "G0-1",
      "chapterId": "G0",
      "tier": 1,
      "title": "Calcul de l'hypoténuse (Triplet 3-4-5)",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 270 175\" width=\"270\" height=\"175\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"50,135 220,135 50,35\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <line x1=\"220\" y1=\"135\" x2=\"50\" y2=\"35\" stroke=\"#ef4444\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <path d=\"M 50,123 L 62,123 L 62,135\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n  <text x=\"34\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n  <text x=\"236\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n  <text x=\"50\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n  <g class=\"geo-pill\">\n      <rect x=\"113\" y=\"143\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"135\" y=\"158.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">3 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"6\" y=\"74\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"28\" y=\"89.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">4 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"126\" y=\"64\" width=\"44\" height=\"22\" rx=\"5\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.8\" />\n      <text x=\"148\" y=\"79.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">? cm</text>\n    </g>\n</svg>\n</div>\n\nSoit $ABC$ un triangle rectangle en $A$ tel que $AB = 3\\text{ cm}$ et $AC = 4\\text{ cm}$.\nCalculer la longueur de l'hypoténuse $BC$ (en cm).",
      "type": "exact",
      "answer": "5",
      "hint1": "Le triangle est rectangle en $A$, donc son hypoténuse est $[BC]$. Applique le théorème de Pythagore : $BC^2 = AB^2 + AC^2$.",
      "hint2": "$BC^2 = 3^2 + 4^2 = 9 + 16 = 25$. Prends la racine carrée $\\sqrt{25}$.",
      "solution": "D'après le théorème de Pythagore dans le triangle $ABC$ rectangle en $A$ :\n$$BC^2 = AB^2 + AC^2 = 3^2 + 4^2 = 9 + 16 = 25$$\nComme $BC > 0$ :\n$$BC = \\sqrt{25} = 5\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "G0-2",
      "chapterId": "G0",
      "tier": 1,
      "title": "Calcul d'un côté de l'angle droit",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 270 175\" width=\"270\" height=\"175\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"220,135 50,135 220,35\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <line x1=\"220\" y1=\"135\" x2=\"220\" y2=\"35\" stroke=\"#ef4444\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <path d=\"M 220,123 L 208,123 L 208,135\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n  <text x=\"236\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">D</text>\n  <text x=\"34\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">E</text>\n  <text x=\"220\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">F</text>\n  <g class=\"geo-pill\">\n      <rect x=\"113\" y=\"143\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"135\" y=\"158.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">6 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"220\" y=\"74\" width=\"44\" height=\"22\" rx=\"5\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.8\" />\n      <text x=\"242\" y=\"89.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">? cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"96\" y=\"64\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"122\" y=\"79.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">10 cm</text>\n    </g>\n</svg>\n</div>\n\nSoit $DEF$ un triangle rectangle en $D$ tel que $EF = 10\\text{ cm}$ (hypoténuse) et $DE = 6\\text{ cm}$.\nCalculer la longueur $DF$ (en cm).",
      "type": "exact",
      "answer": "8",
      "hint1": "Attention, tu cherches un côté de l'angle droit, il faut donc **soustraire** : $DF^2 = EF^2 - DE^2$.",
      "hint2": "$DF^2 = 10^2 - 6^2 = 100 - 36 = 64$. Prends $\\sqrt{64}$.",
      "solution": "Dans le triangle $DEF$ rectangle en $D$, d'après le théorème de Pythagore :\n$$EF^2 = DE^2 + DF^2 \\implies DF^2 = EF^2 - DE^2 = 10^2 - 6^2 = 100 - 36 = 64$$\nComme $DF > 0$ :\n$$DF = \\sqrt{64} = 8\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "G0-3",
      "chapterId": "G0",
      "tier": 2,
      "title": "Réciproque du théorème de Pythagore",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 270 175\" width=\"270\" height=\"175\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"50,135 220,135 50,35\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <text x=\"34\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n  <text x=\"236\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n  <text x=\"50\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n  <g class=\"geo-pill\">\n      <rect x=\"113\" y=\"143\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"135\" y=\"158.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">5 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"2\" y=\"74\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"28\" y=\"89.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">12 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"122\" y=\"64\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"148\" y=\"79.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">13 cm</text>\n    </g>\n</svg>\n</div>\n\nUn triangle a pour côtés $5\\text{ cm}, 12\\text{ cm}$ et $13\\text{ cm}$. Ce triangle est-il rectangle ?",
      "type": "mcq",
      "options": [
        "Oui, car $13^2 = 5^2 + 12^2 = 169$",
        "Non, car $5+12 \\neq 13$",
        "On ne peut pas savoir sans connaître les angles",
        "Non, car $13^2 = 169$ et $5^2+12^2=144$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Le plus grand côté au carré ($13^2 = 169$) est égal à la somme des carrés des deux autres ($25 + 144 = 169$). D'après la réciproque de Pythagore, il est rectangle.",
        "Attention, la condition de Pythagore porte sur les carrés des longueurs et non sur la somme directe.",
        "La réciproque du théorème de Pythagore permet précisément de le savoir uniquement avec les longueurs !",
        "$5^2 + 12^2 = 25 + 144 = 169$, pas $144$."
      ],
      "hint1": "Identifie le plus grand côté ($13\\text{ cm}$) et calcule son carré séparément.",
      "hint2": "Calcule d'une part $13^2$, et d'autre part $5^2 + 12^2$. Compare les deux résultats.",
      "solution": "1. Plus grand côté : $13^2 = 169$.\n2. Somme des carrés des deux autres côtés : $5^2 + 12^2 = 25 + 144 = 169$.\n3. On constate que $13^2 = 5^2 + 12^2$. D'après la réciproque du théorème de Pythagore, le triangle est bien rectangle.",
      "skill": "Raisonner"
    },
    {
      "id": "G0-4",
      "chapterId": "G0",
      "tier": 3,
      "title": "Écran au format 4/3 et diagonale (Brevet)",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 270 175\" width=\"270\" height=\"175\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect x=\"45\" y=\"45\" width=\"180\" height=\"90\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" rx=\"2\" />\n  <line x1=\"45\" y1=\"135\" x2=\"225\" y2=\"45\" stroke=\"#ef4444\" stroke-width=\"2.2\" stroke-dasharray=\"4,3\" stroke-linecap=\"round\" />\n  <path d=\"M 213,135 L 213,123 L 225,123\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" />\n  <g class=\"geo-pill\">\n      <rect x=\"109\" y=\"143\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"135\" y=\"158.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">80 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"216\" y=\"79\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"242\" y=\"94.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">60 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"109\" y=\"69\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.8\" />\n      <text x=\"135\" y=\"84.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">d = ?</text>\n    </g>\n</svg>\n</div>\n\nUn écran de télévision rectangulaire a une largeur de $80\\text{ cm}$ et une hauteur de $60\\text{ cm}$.\nQuelle est la longueur de sa diagonale en centimètres ?",
      "type": "exact",
      "answer": "100",
      "hint1": "La diagonale d'un rectangle forme un triangle rectangle avec la largeur et la hauteur. Applique Pythagore !",
      "hint2": "$d^2 = 80^2 + 60^2 = 6\\,400 + 3\\,600 = 10\\,000$. Prends $\\sqrt{10\\,000}$.",
      "solution": "Le rectangle est formé de deux triangles rectangles. Soit $d$ la diagonale :\n$$d^2 = 80^2 + 60^2 = 6\\,400 + 3\\,600 = 10\\,000$$\n$$d = \\sqrt{10\\,000} = 100\\text{ cm}$$\nLa diagonale de l'écran mesure donc exactement $100\\text{ cm}$ (soit $1\\text{ m}$).",
      "skill": "Modéliser"
    },
    {
      "id": "G0-5",
      "chapterId": "G0",
      "tier": 4,
      "title": "Défi Seconde : Diagonale d'un cube",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 270 175\" width=\"270\" height=\"175\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"60\" y1=\"135\" x2=\"105\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n  <line x1=\"105\" y1=\"110\" x2=\"205\" y2=\"110\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n  <line x1=\"105\" y1=\"110\" x2=\"105\" y2=\"30\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n  <line x1=\"60\" y1=\"135\" x2=\"205\" y2=\"30\" stroke=\"#ef4444\" stroke-width=\"2.2\" stroke-dasharray=\"4,3\" />\n  <polygon points=\"60,135 160,135 160,55 60,55\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n  <polygon points=\"60,55 160,55 205,30 105,30\" fill=\"rgba(59, 130, 246, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n  <polygon points=\"160,135 205,110 205,30 160,55\" fill=\"rgba(59, 130, 246, 0.03)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n  <g class=\"geo-pill\">\n      <rect x=\"73\" y=\"139\" width=\"74\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"110\" y=\"154.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">a = 4 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"104\" y=\"74\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.8\" />\n      <text x=\"130\" y=\"89.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">D = ?</text>\n    </g>\n</svg>\n</div>\n\nSoit un cube d'arête $a = 4\\text{ cm}$. On cherche la longueur de sa grande diagonale spatiale reliant deux sommets opposés.\nCalculer le carré $D^2$ de cette diagonale, puis donner la valeur exacte de $D$ sous forme simplifiée (par exemple $5\\sqrt{2}$).",
      "type": "exact",
      "answer": "4√3",
      "acceptedAnswers": ["4sqrt(3)"],
      "hint1": "Utilise Pythagore deux fois : d'abord dans une face carrée pour obtenir le carré $d^2$ de sa diagonale, puis dans le triangle rectangle formé par cette diagonale $d$, une arête verticale et la grande diagonale $D$.",
      "hint2": "Diagonale d'une face : $d^2 = 4^2 + 4^2 = 32$. Puis $D^2 = d^2 + 4^2$.",
      "solution": "1. Diagonale d'une face carrée : $d^2 = 4^2 + 4^2 = 32$.\n2. Grande diagonale dans le triangle rectangle vertical : $D^2 = d^2 + 4^2 = 32 + 16 = 48$.\n3. Une longueur étant positive : $D = \\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}\\text{ cm}$ (soit environ $6{,}93\\text{ cm}$).",
      "skill": "Raisonner"
    },
    {
      "id": "G0-6",
      "chapterId": "G0",
      "tier": 3,
      "title": "Contraposée du théorème de Pythagore",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 270 175\" width=\"270\" height=\"175\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"50,135 220,135 50,35\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <text x=\"34\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">I</text>\n  <text x=\"236\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">J</text>\n  <text x=\"50\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">K</text>\n  <g class=\"geo-pill\">\n      <rect x=\"113\" y=\"143\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"135\" y=\"158.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">6 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"6\" y=\"74\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"28\" y=\"89.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">7 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"126\" y=\"64\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"148\" y=\"79.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">9 cm</text>\n    </g>\n</svg>\n</div>\n\nUn triangle $IJK$ a pour côtés : $IJ = 6\\text{ cm}$, $IK = 7\\text{ cm}$ et $JK = 9\\text{ cm}$.\n**Ce triangle est-il rectangle ?**",
      "type": "mcq",
      "options": [
        "Non, le triangle IJK n'est pas rectangle",
        "Oui, le triangle IJK est rectangle en I"
      ],
      "correctIndex": 0,
      "answer": "Non, le triangle IJK n'est pas rectangle",
      "hint1": "Identifie le plus long côté ($JK = 9\\text{ cm}$). Calcule $JK^2$ d'une part, et $IJ^2 + IK^2$ d'autre part.",
      "hint2": "$9^2 = 81$ et $6^2 + 7^2 = 36 + 49 = 85$. Les deux résultats sont-ils égaux ?",
      "solution": "Dans le triangle $IJK$, le plus long côté est $[JK]$ :\n1. D'une part : $$JK^2 = 9^2 = 81$$\n2. D'autre part : $$IJ^2 + IK^2 = 6^2 + 7^2 = 36 + 49 = 85$$\n3. On constate que $JK^2 \\neq IJ^2 + IK^2$ ($81 \\neq 85$).\nPar conséquent, d'après la **contraposée du théorème de Pythagore**, le triangle $IJK$ **n'est pas rectangle**.",
      "skill": "Raisonner"
    }
  ],
  "G1": [
    {
      "id": "G1-1",
      "chapterId": "G1",
      "tier": 1,
      "title": "Produit en croix dans Thalès",
      "statement": "Résoudre l'égalité de proportions suivante pour trouver la valeur de $x$ :\n$$\\frac{x}{6} = \\frac{4}{3}$$",
      "type": "exact",
      "answer": "8",
      "hint1": "Applique le produit en croix : $x \\times 3 = 6 \\times 4$.",
      "hint2": "$3x = 24$. Divise $24$ par $3$.",
      "solution": "$$x = \\frac{6 \\times 4}{3} = \\frac{24}{3} = 8$$",
      "skill": "Calculer"
    },
    {
      "id": "G1-2",
      "chapterId": "G1",
      "tier": 1,
      "title": "Configuration emboîtée classique",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 290 195\" width=\"290\" height=\"195\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"140,26 38,165 252,165\" fill=\"rgba(59, 130, 246, 0.04)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <line x1=\"95\" y1=\"87\" x2=\"189\" y2=\"87\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n  <circle cx=\"140\" cy=\"26\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"38\" cy=\"165\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"252\" cy=\"165\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"95\" cy=\"87\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"189\" cy=\"87\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <text x=\"140\" y=\"16\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n  <text x=\"26\" y=\"169\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n  <text x=\"264\" y=\"169\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n  <text x=\"81\" y=\"91\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">M</text>\n  <text x=\"203\" y=\"91\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">N</text>\n  <g class=\"geo-pill\">\n      <rect x=\"80\" y=\"41\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"102\" y=\"56.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">4 cm</text>\n    </g>\n  \n        <g>\n          <line x1=\"22\" y1=\"30\" x2=\"22\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" stroke-dasharray=\"2,2\" />\n          <line x1=\"17\" y1=\"30\" x2=\"27\" y2=\"30\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n          <line x1=\"17\" y1=\"165\" x2=\"27\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n          <g class=\"geo-pill\">\n      <rect x=\"-4\" y=\"84\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"22\" y=\"99.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">10 cm</text>\n    </g>\n        </g>\n      \n  <g class=\"geo-pill\">\n      <rect x=\"161\" y=\"41\" width=\"30\" height=\"22\" rx=\"5\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.8\" />\n      <text x=\"176\" y=\"56.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">?</text>\n    </g>\n  \n        <g>\n          <line x1=\"268\" y1=\"30\" x2=\"268\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" stroke-dasharray=\"2,2\" />\n          <line x1=\"263\" y1=\"30\" x2=\"273\" y2=\"30\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n          <line x1=\"263\" y1=\"165\" x2=\"273\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n          <g class=\"geo-pill\">\n      <rect x=\"242\" y=\"84\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"268\" y=\"99.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">15 cm</text>\n    </g>\n        </g>\n      \n</svg>\n</div>\n\nSoit un triangle $ABC$ avec $M \\in [AB], N \\in [AC]$ et $(MN) \\parallel (BC)$.\nOn donne $AB = 10\\text{ cm}, AM = 4\\text{ cm}$ et $AC = 15\\text{ cm}$.\nCalculer la longueur $AN$ (en cm).",
      "type": "exact",
      "answer": "6",
      "hint1": "Les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont alignés. D'après le théorème de Thalès, $\\frac{AM}{AB} = \\frac{AN}{AC}$.",
      "hint2": "$\\frac{4}{10} = \\frac{AN}{15} \\implies AN = \\frac{4 \\times 15}{10}$.",
      "solution": "Les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont alignés.\nDe plus, les droites $(MN)$ et $(BC)$ sont parallèles ($(MN) \\parallel (BC)$).\nD'après le théorème de Thalès :\n$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$\nEn remplaçant par les valeurs données :\n$$\\frac{4}{10} = \\frac{AN}{15} \\implies AN = \\frac{4 \\times 15}{10} = \\frac{60}{10} = 6\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "G1-3",
      "chapterId": "G1",
      "tier": 2,
      "title": "Configuration Papillon",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 290 185\" width=\"290\" height=\"185\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"65\" y1=\"32\" x2=\"225\" y2=\"158\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n  <line x1=\"225\" y1=\"32\" x2=\"65\" y2=\"158\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n  <line x1=\"65\" y1=\"32\" x2=\"225\" y2=\"32\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n  <line x1=\"65\" y1=\"158\" x2=\"225\" y2=\"158\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n  <circle cx=\"145\" cy=\"95\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"65\" cy=\"32\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"225\" cy=\"32\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"65\" cy=\"158\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"225\" cy=\"158\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <text x=\"145\" y=\"113\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n  <text x=\"53\" y=\"28\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n  <text x=\"237\" y=\"28\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">D</text>\n  <text x=\"53\" y=\"170\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n  <text x=\"237\" y=\"170\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n  <g class=\"geo-pill\">\n      <rect x=\"68\" y=\"45\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"90\" y=\"60.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">6 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"173\" y=\"123\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"195\" y=\"138.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">9 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"75\" y=\"123\" width=\"30\" height=\"22\" rx=\"5\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.8\" />\n      <text x=\"90\" y=\"138.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">?</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"173\" y=\"45\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"195\" y=\"60.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">4 cm</text>\n    </g>\n</svg>\n</div>\n\nLes droites $(AB)$ et $(CD)$ sont sécantes en $O$, et $(AD) \\parallel (BC)$.\nOn donne $OA = 6\\text{ cm}, OB = 9\\text{ cm}$ et $OD = 4\\text{ cm}$.\nCalculer la longueur $OC$ (en cm).",
      "type": "exact",
      "answer": "6",
      "hint1": "Les points $A, O, B$ d'une part et $D, O, C$ d'autre part sont alignés. Les rapports égaux sont $\\frac{OA}{OB} = \\frac{OD}{OC} = \\frac{AD}{BC}$.",
      "hint2": "$\\frac{6}{9} = \\frac{4}{OC} \\implies 6 \\times OC = 9 \\times 4 = 36$.",
      "solution": "Les points $A, O, B$ d'une part et $D, O, C$ d'autre part sont alignés (les droites $(AB)$ et $(CD)$ sont sécantes en $O$).\nDe plus, les droites $(AD)$ et $(BC)$ sont parallèles ($(AD) \\parallel (BC)$).\nD'après le théorème de Thalès en configuration papillon :\n$$\\frac{OA}{OB} = \\frac{OD}{OC} = \\frac{AD}{BC}$$\nEn remplaçant par les valeurs données :\n$$\\frac{6}{9} = \\frac{4}{OC} \\implies OC = \\frac{9 \\times 4}{6} = \\frac{36}{6} = 6\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "G1-4",
      "chapterId": "G1",
      "tier": 2,
      "title": "Réciproque du théorème de Thalès",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 290 195\" width=\"290\" height=\"195\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"140,26 38,165 252,165\" fill=\"rgba(59, 130, 246, 0.04)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <line x1=\"95\" y1=\"87\" x2=\"189\" y2=\"87\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n  <circle cx=\"140\" cy=\"26\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"38\" cy=\"165\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"252\" cy=\"165\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"95\" cy=\"87\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"189\" cy=\"87\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <text x=\"140\" y=\"16\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n  <text x=\"26\" y=\"169\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n  <text x=\"264\" y=\"169\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n  <text x=\"81\" y=\"91\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">M</text>\n  <text x=\"203\" y=\"91\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">N</text>\n  <g class=\"geo-pill\">\n      <rect x=\"87\" y=\"41\" width=\"30\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"102\" y=\"56.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">3</text>\n    </g>\n  \n        <g>\n          <line x1=\"22\" y1=\"30\" x2=\"22\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" stroke-dasharray=\"2,2\" />\n          <line x1=\"17\" y1=\"30\" x2=\"27\" y2=\"30\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n          <line x1=\"17\" y1=\"165\" x2=\"27\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n          <g class=\"geo-pill\">\n      <rect x=\"4\" y=\"84\" width=\"36.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"22\" y=\"99.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">7,5</text>\n    </g>\n        </g>\n      \n  <g class=\"geo-pill\">\n      <rect x=\"161\" y=\"41\" width=\"30\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"176\" y=\"56.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">4</text>\n    </g>\n  \n        <g>\n          <line x1=\"268\" y1=\"30\" x2=\"268\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" stroke-dasharray=\"2,2\" />\n          <line x1=\"263\" y1=\"30\" x2=\"273\" y2=\"30\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n          <line x1=\"263\" y1=\"165\" x2=\"273\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n          <g class=\"geo-pill\">\n      <rect x=\"253\" y=\"84\" width=\"30\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"268\" y=\"99.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">10</text>\n    </g>\n        </g>\n      \n</svg>\n</div>\n\nSoient $A, M, B$ alignés dans cet ordre et $A, N, C$ alignés dans le même ordre.\nOn donne $AM = 3$, $AB = 7{,}5$, $AN = 4$ et $AC = 10$.\nLes droites $(MN)$ et $(BC)$ sont-elles parallèles ?",
      "type": "mcq",
      "options": [
        "Oui, car $\\frac{AM}{AB} = \\frac{AN}{AC} = 0{,}4$ et les points sont alignés dans le même ordre",
        "Non, car $7{,}5 - 3 \\neq 10 - 4$",
        "On ne peut pas savoir car on ne connaît pas la longueur $MN$",
        "Oui, mais seulement si le triangle est rectangle"
      ],
      "correctIndex": 0,
      "explanations": [
        "Parfait ! $\\frac{3}{7{,}5} = \\frac{2}{5} = 0{,}4$ et $\\frac{4}{10} = 0{,}4$. Les quotients sont égaux et les points alignés dans le même ordre : d'après la réciproque de Thalès, les droites sont parallèles.",
        "Attention, Thalès repose sur des rapports (quotients) et non sur des différences !",
        "Les deux premiers quotients suffisent pour démontrer le parallélisme.",
        "Thalès s'applique dans n'importe quel triangle, rectangle ou non."
      ],
      "hint1": "Calcule séparément les deux quotients : $\\frac{AM}{AB} = \\frac{3}{7{,}5}$ et $\\frac{AN}{AC} = \\frac{4}{10}$.",
      "hint2": "Vérifie s'ils sont égaux et rappelle la condition d'alignement ordonné.",
      "solution": "1. D'une part : $\\frac{AM}{AB} = \\frac{3}{7{,}5} = 0{,}4$.\n2. D'autre part : $\\frac{AN}{AC} = \\frac{4}{10} = 0{,}4$.\n3. Comme $\\frac{AM}{AB} = \\frac{AN}{AC}$ et que les points $A, M, B$ et $A, N, C$ sont alignés dans le même ordre, d'après la réciproque du théorème de Thalès, les droites $(MN)$ et $(BC)$ sont parallèles.",
      "skill": "Raisonner"
    },
    {
      "id": "G1-5",
      "chapterId": "G1",
      "tier": 4,
      "title": "Défi Seconde : Thalès et équation avec $x$",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 290 195\" width=\"290\" height=\"195\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"140,26 38,165 252,165\" fill=\"rgba(59, 130, 246, 0.04)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <line x1=\"95\" y1=\"87\" x2=\"189\" y2=\"87\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n  <circle cx=\"140\" cy=\"26\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"38\" cy=\"165\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"252\" cy=\"165\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"95\" cy=\"87\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"189\" cy=\"87\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <text x=\"140\" y=\"16\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n  <text x=\"26\" y=\"169\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n  <text x=\"264\" y=\"169\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n  <text x=\"81\" y=\"91\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">M</text>\n  <text x=\"203\" y=\"91\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">N</text>\n  <g class=\"geo-pill\">\n      <rect x=\"87\" y=\"41\" width=\"30\" height=\"22\" rx=\"5\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.8\" />\n      <text x=\"102\" y=\"56.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">x</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"39\" y=\"115\" width=\"30\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"54\" y=\"130.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">4</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"161\" y=\"41\" width=\"30\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"176\" y=\"56.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">6</text>\n    </g>\n  \n        <g>\n          <line x1=\"268\" y1=\"30\" x2=\"268\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" stroke-dasharray=\"2,2\" />\n          <line x1=\"263\" y1=\"30\" x2=\"273\" y2=\"30\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n          <line x1=\"263\" y1=\"165\" x2=\"273\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n          <g class=\"geo-pill\">\n      <rect x=\"253\" y=\"84\" width=\"30\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"268\" y=\"99.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">14</text>\n    </g>\n        </g>\n      \n</svg>\n</div>\n\nDans une configuration de Thalès avec $(MN) \\parallel (BC)$, on a $\\frac{AM}{AB} = \\frac{AN}{AC}$.\nOn pose $AM = x$ (en cm), $MB = 4\\text{ cm}$ (donc $AB = x + 4$), $AN = 6\\text{ cm}$ et $AC = 14\\text{ cm}$.\nTrouver la valeur exacte de $x$.",
      "type": "exact",
      "answer": "3",
      "hint1": "Les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont alignés. Écris l'équation : $\\frac{x}{x + 4} = \\frac{6}{14} = \\frac{3}{7}$.",
      "hint2": "Fais le produit en croix : $7 \\times x = 3 \\times (x + 4) \\implies 7x = 3x + 12$.",
      "solution": "Les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont alignés.\nDe plus, les droites $(MN)$ et $(BC)$ sont parallèles ($(MN) \\parallel (BC)$).\nD'après le théorème de Thalès :\n$$\\frac{AM}{AB} = \\frac{AN}{AC}$$\n1. Équation de proportion avec $AM = x$ et $AB = x + 4$ :\n$$\\frac{x}{x+4} = \\frac{6}{14} = \\frac{3}{7}$$\n2. Produit en croix :\n$$7x = 3(x + 4) \\implies 7x = 3x + 12 \\implies 4x = 12 \\implies x = 3\\text{ cm}$$",
      "skill": "Raisonner"
    },
    {
      "id": "G1-6",
      "chapterId": "G1",
      "tier": 2,
      "title": "Contraposée du théorème de Thalès",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 290 195\" width=\"290\" height=\"195\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"140,26 38,165 252,165\" fill=\"rgba(59, 130, 246, 0.04)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <line x1=\"95\" y1=\"87\" x2=\"189\" y2=\"87\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n  <circle cx=\"140\" cy=\"26\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"38\" cy=\"165\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"252\" cy=\"165\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"95\" cy=\"87\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"189\" cy=\"87\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <text x=\"140\" y=\"16\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n  <text x=\"26\" y=\"169\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n  <text x=\"264\" y=\"169\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n  <text x=\"81\" y=\"91\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">M</text>\n  <text x=\"203\" y=\"91\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">N</text>\n  <g class=\"geo-pill\">\n      <rect x=\"87\" y=\"41\" width=\"30\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"102\" y=\"56.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">3</text>\n    </g>\n  <g>\n    <line x1=\"22\" y1=\"30\" x2=\"22\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" stroke-dasharray=\"2,2\" />\n    <line x1=\"17\" y1=\"30\" x2=\"27\" y2=\"30\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n    <line x1=\"17\" y1=\"165\" x2=\"27\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n    <g class=\"geo-pill\">\n      <rect x=\"7\" y=\"84\" width=\"30\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"22\" y=\"99.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">8</text>\n    </g>\n  </g>\n  <g class=\"geo-pill\">\n      <rect x=\"161\" y=\"41\" width=\"30\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"176\" y=\"56.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">4</text>\n    </g>\n  <g>\n    <line x1=\"268\" y1=\"30\" x2=\"268\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" stroke-dasharray=\"2,2\" />\n    <line x1=\"263\" y1=\"30\" x2=\"273\" y2=\"30\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n    <line x1=\"263\" y1=\"165\" x2=\"273\" y2=\"165\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n    <g class=\"geo-pill\">\n      <rect x=\"253\" y=\"84\" width=\"30\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"268\" y=\"99.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">10</text>\n    </g>\n  </g>\n</svg>\n</div>\n\nSoient $A, M, B$ alignés dans cet ordre et $A, N, C$ alignés dans le même ordre.\nOn donne $AM = 3\\text{ cm}$, $AB = 8\\text{ cm}$ et $AN = 4\\text{ cm}$, $AC = 10\\text{ cm}$.\n**Les droites $(MN)$ et $(BC)$ sont-elles parallèles ?**",
      "type": "mcq",
      "options": [
        "Non, car $\\frac{AM}{AB} \\neq \\frac{AN}{AC}$ ($0{,}375 \\neq 0{,}4$)",
        "Oui, car les points sont alignés dans le même ordre",
        "Oui, car $8 - 3 = 10 - 4 - 1$",
        "On ne peut pas savoir sans connaître la longueur $BC$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! $\\frac{3}{8} = 0{,}375$ et $\\frac{4}{10} = 0{,}4$. Comme $0{,}375 \\neq 0{,}4$, les rapports ne sont pas égaux. D'après la contraposée de Thalès, les droites ne sont pas parallèles.",
        "L'alignement dans le même ordre est une condition nécessaire mais pas suffisante : les quotients doivent être égaux.",
        "Le théorème de Thalès repose sur des quotients (rapports) et non sur des soustractions.",
        "Deux paires de rapports suffisent amplement pour tester le parallélisme."
      ],
      "hint1": "Calcule d'une part le quotient $\\frac{AM}{AB} = \\frac{3}{8}$, et d'autre part $\\frac{AN}{AC} = \\frac{4}{10}$.",
      "hint2": "$\\frac{3}{8} = 0{,}375$ et $\\frac{4}{10} = 0{,}4$. Compare les deux valeurs.",
      "solution": "Les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont alignés dans cet ordre.\n1. D'une part : $$\\frac{AM}{AB} = \\frac{3}{8} = 0{,}375$$\n2. D'autre part : $$\\frac{AN}{AC} = \\frac{4}{10} = 0{,}4$$\n*(On peut aussi vérifier par le produit en croix : $3 \\times 10 = 30 \\neq 8 \\times 4 = 32$)*.\n3. Comme $\\frac{AM}{AB} \\neq \\frac{AN}{AC}$, d'après la **contraposée du théorème de Thalès**, les droites $(MN)$ et $(BC)$ **ne sont pas parallèles**.",
      "skill": "Raisonner"
    },
    {
      "id": "G1-7",
      "chapterId": "G1",
      "tier": 3,
      "title": "Réciproque de Thalès en configuration papillon (Brevet)",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 290 185\" width=\"290\" height=\"185\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"65\" y1=\"32\" x2=\"225\" y2=\"158\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n  <line x1=\"225\" y1=\"32\" x2=\"65\" y2=\"158\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n  <line x1=\"65\" y1=\"32\" x2=\"225\" y2=\"32\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n  <line x1=\"65\" y1=\"158\" x2=\"225\" y2=\"158\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n  <circle cx=\"145\" cy=\"95\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"65\" cy=\"32\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"225\" cy=\"32\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"65\" cy=\"158\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"225\" cy=\"158\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <text x=\"145\" y=\"113\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n  <text x=\"53\" y=\"28\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n  <text x=\"237\" y=\"28\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n  <text x=\"53\" y=\"170\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">D</text>\n  <text x=\"237\" y=\"170\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n  <g class=\"geo-pill\">\n      <rect x=\"68\" y=\"45\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"90\" y=\"60.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">4 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"173\" y=\"123\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"195\" y=\"138.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">6 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"173\" y=\"45\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"195\" y=\"60.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">6 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"68\" y=\"123\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"90\" y=\"138.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">9 cm</text>\n    </g>\n</svg>\n</div>\n\nLes droites $(AB)$ et $(CD)$ sont sécantes en $O$. Les points $A, O, B$ d'une part et $C, O, D$ d'autre part sont alignés dans cet ordre.\nOn donne $OA = 4\\text{ cm}$, $OB = 6\\text{ cm}$, $OC = 6\\text{ cm}$ et $OD = 9\\text{ cm}$.\n**Les droites $(AC)$ et $(BD)$ sont-elles parallèles ?**",
      "type": "mcq",
      "options": [
        "Oui, car $\\frac{OA}{OB} = \\frac{OC}{OD} = \\frac{2}{3}$ et les points sont alignés dans le même ordre",
        "Non, car $6 - 4 \\neq 9 - 6$",
        "On ne peut pas savoir sans connaître la longueur $AB$",
        "Non, les droites sont perpendiculaires"
      ],
      "correctIndex": 0,
      "explanations": [
        "Excellent ! $\\frac{OA}{OB} = \\frac{4}{6} = \\frac{2}{3}$ et $\\frac{OC}{OD} = \\frac{6}{9} = \\frac{2}{3}$. Les rapports sont égaux et les points sont alignés dans le même ordre, donc d'après la réciproque du théorème de Thalès, $(AC) \\parallel (BD)$.",
        "Attention, Thalès utilise les quotients des longueurs, pas les différences.",
        "Deux paires de côtés correspondants suffisent pour appliquer la réciproque de Thalès.",
        "Rien n'indique un angle droit, et la question porte sur le parallélisme."
      ],
      "hint1": "Calcule séparément les quotients $\\frac{OA}{OB} = \\frac{4}{6}$ et $\\frac{OC}{OD} = \\frac{6}{9}$. Simplifie ces fractions.",
      "hint2": "Simplifie $\\frac{4}{6}$ par $2$ et $\\frac{6}{9}$ par $3$, puis compare. N'oublie pas de vérifier l'ordre d'alignement des points.",
      "solution": "Les droites $(AB)$ et $(CD)$ sont sécantes en $O$. Les points $A, O, B$ d'une part et $C, O, D$ d'autre part sont alignés dans cet ordre.\n1. D'une part : $$\\frac{OA}{OB} = \\frac{4}{6} = \\frac{2}{3}$$\n2. D'autre part : $$\\frac{OC}{OD} = \\frac{6}{9} = \\frac{2}{3}$$\n3. Comme $\\frac{OA}{OB} = \\frac{OC}{OD}$ et que les points sont alignés dans le même ordre, d'après la **réciproque du théorème de Thalès**, les droites $(AC)$ et $(BD)$ sont **parallèles**.",
      "skill": "Raisonner"
    },
    {
      "id": "G1-8",
      "chapterId": "G1",
      "tier": 3,
      "title": "Contraposée de Thalès en configuration papillon (Brevet)",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 290 185\" width=\"290\" height=\"185\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"65\" y1=\"32\" x2=\"225\" y2=\"158\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n  <line x1=\"225\" y1=\"32\" x2=\"65\" y2=\"158\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n  <line x1=\"65\" y1=\"32\" x2=\"225\" y2=\"32\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n  <line x1=\"65\" y1=\"158\" x2=\"225\" y2=\"158\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n  <circle cx=\"145\" cy=\"95\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"65\" cy=\"32\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"225\" cy=\"32\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"65\" cy=\"158\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"225\" cy=\"158\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <text x=\"145\" y=\"113\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n  <text x=\"53\" y=\"28\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n  <text x=\"237\" y=\"28\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n  <text x=\"53\" y=\"170\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">D</text>\n  <text x=\"237\" y=\"170\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n  <g class=\"geo-pill\">\n      <rect x=\"68\" y=\"45\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"90\" y=\"60.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">4 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"173\" y=\"123\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"195\" y=\"138.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">9 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"173\" y=\"45\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"195\" y=\"60.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">5 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"64\" y=\"123\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"90\" y=\"138.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">10 cm</text>\n    </g>\n</svg>\n</div>\n\nLes droites $(AB)$ et $(CD)$ sont sécantes en $O$. Les points $A, O, B$ d'une part et $C, O, D$ d'autre part sont alignés dans cet ordre.\nOn donne $OA = 4\\text{ cm}$, $OB = 9\\text{ cm}$, $OC = 5\\text{ cm}$ et $OD = 10\\text{ cm}$.\n**Les droites $(AC)$ et $(BD)$ sont-elles parallèles ?**",
      "type": "mcq",
      "options": [
        "Non, car $\\frac{OA}{OB} \\neq \\frac{OC}{OD}$ ($0{,}444 \\neq 0{,}5$)",
        "Oui, car les points sont alignés dans le même ordre",
        "Oui, car $9 - 4 = 10 - 5$",
        "On ne peut pas savoir sans connaître la longueur $CD$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Parfait ! $\\frac{OA}{OB} = \\frac{4}{9} \\approx 0{,}444$ et $\\frac{OC}{OD} = \\frac{5}{10} = 0{,}5$. Comme $\\frac{OA}{OB} \\neq \\frac{OC}{OD}$, d'après la contraposée du théorème de Thalès, les droites $(AC)$ et $(BD)$ ne sont pas parallèles.",
        "L'alignement dans le même ordre ne suffit pas si les rapports ne sont pas égaux.",
        "Le théorème de Thalès compare des rapports multiplicatifs, pas des écarts.",
        "Ces quatre mesures suffisent amplement pour tester le parallélisme."
      ],
      "hint1": "Calcule d'une part $\\frac{OA}{OB} = \\frac{4}{9}$ et d'autre part $\\frac{OC}{OD} = \\frac{5}{10} = 0{,}5$.",
      "hint2": "Compare $\\frac{4}{9}$ et $0{,}5$ (produit en croix : $4 \\times 10 = 40$ et $9 \\times 5 = 45$).",
      "solution": "Les droites $(AB)$ et $(CD)$ sont sécantes en $O$. Les points $A, O, B$ d'une part et $C, O, D$ d'autre part sont alignés dans cet ordre.\n1. D'une part : $$\\frac{OA}{OB} = \\frac{4}{9} \\approx 0{,}444$$\n2. D'autre part : $$\\frac{OC}{OD} = \\frac{5}{10} = 0{,}5$$\n*(Vérification par produit en croix : $4 \\times 10 = 40 \\neq 9 \\times 5 = 45$)*.\n3. Comme $\\frac{OA}{OB} \\neq \\frac{OC}{OD}$, d'après la **contraposée du théorème de Thalès**, les droites $(AC)$ et $(BD)$ **ne sont pas parallèles**.",
      "skill": "Raisonner"
    },
    {
      "id": "G1-9",
      "chapterId": "G1",
      "tier": 3,
      "title": "Thalès et homothétie",
      "statement": "Dans le triangle $ABC$, $M$ est un point de $[AB]$ et $N$ un point de $[AC]$, avec $(MN) // (BC)$. On passe du triangle $AMN$ au triangle $ABC$ par une homothétie de centre $A$. On donne $AM = 3\\text{ cm}$ et $AB = 12\\text{ cm}$.\nQuel est le rapport $k$ de cette homothétie ?",
      "type": "exact",
      "answer": "4",
      "hint1": "La configuration est emboîtée : cela te donne le signe de $k$. Pour la valeur, compare une longueur du grand triangle à la longueur correspondante du petit.",
      "hint2": "Comme on va de $AMN$ vers $ABC$, on a $|k| = \\frac{AB}{AM}$ (et non l'inverse). Remplace par les longueurs de l'énoncé.",
      "solution": "L'homothétie envoie $M$ sur $B$, donc $|k| = \\frac{AB}{AM} = \\frac{12}{3} = 4$.\nLes points $M$ et $B$ sont du même côté de $A$ (configuration emboîtée), donc $k > 0$.\nConclusion : $k = 4$.",
      "skill": "Raisonner"
    }
  ],
  "G2": [
    {
      "id": "G2-1",
      "chapterId": "G2",
      "tier": 1,
      "title": "Moyen mnémotechnique CAH SOH TOA",
      "statement": "Dans un triangle rectangle, quelle est la formule du cosinus d'un angle aigu ?",
      "type": "mcq",
      "options": [
        "$\\cos = \\frac{\\text{Adjacent}}{\\text{Hypoténuse}}$",
        "$\\cos = \\frac{\\text{Opposé}}{\\text{Hypoténuse}}$",
        "$\\cos = \\frac{\\text{Opposé}}{\\text{Adjacent}}$",
        "$\\cos = \\frac{\\text{Hypoténuse}}{\\text{Adjacent}}$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! **C**AH : **C**osinus = **A**djacent / **H**ypoténuse.",
        "C'est la formule du sinus (**S**OH).",
        "C'est la formule de la tangente (**T**OA).",
        "C'est l'inverse du cosinus."
      ],
      "hint1": "Rappelle-toi du mot magique : CAH - SOH - TOA.",
      "hint2": "Dans chaque syllabe, la 1re lettre désigne la fonction (C, S ou T), la 2e le côté au numérateur et la 3e le côté au dénominateur (A = adjacent, O = opposé, H = hypoténuse). Décode la syllabe qui commence par C.",
      "solution": "D'après la définition du cosinus dans un triangle rectangle (CAH) :\n$$\\cos(\\widehat{A}) = \\frac{\\text{Côté Adjacent}}{\\text{Hypoténuse}}$$",
      "skill": "Raisonner"
    },
    {
      "id": "G2-2",
      "chapterId": "G2",
      "tier": 1,
      "title": "Calcul d'un côté avec le sinus",
      "statement": "Soit $ABC$ un triangle rectangle en $A$ tel que l'hypoténuse $BC = 10\\text{ cm}$ et $\\widehat{B} = 30^\\circ$.\nSachant que $\\sin(30^\\circ) = 0{,}5$, calculer la longueur du côté opposé $AC$ (en cm).",
      "type": "exact",
      "answer": "5",
      "hint1": "Dans le triangle rectangle en $A$, $\\sin(\\widehat{B}) = \\frac{AC}{BC}$.",
      "hint2": "$AC = BC \\times \\sin(30^\\circ) = 10 \\times 0{,}5$.",
      "solution": "$$\\sin(\\widehat{B}) = \\frac{AC}{BC} \\implies AC = BC \\times \\sin(30^\\circ) = 10 \\times 0{,}5 = 5\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "G2-3",
      "chapterId": "G2",
      "tier": 2,
      "title": "Déterminer un angle au degré près",
      "statement": "Soit $DEF$ un triangle rectangle en $D$ tel que $DE = 6\\text{ cm}$ et $DF = 8\\text{ cm}$.\nQuelle formule permet de calculer l'angle $\\widehat{E}$ ?",
      "type": "mcq",
      "options": [
        "$\\tan(\\widehat{E}) = \\frac{8}{6}$ donc $\\widehat{E} = \\arctan(8/6) \\approx 53^\\circ$",
        "$\\cos(\\widehat{E}) = \\frac{8}{6}$",
        "$\\sin(\\widehat{E}) = \\frac{6}{8}$",
        "$\\tan(\\widehat{E}) = \\frac{6}{8}$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! On connaît le côté opposé ($DF=8$) et le côté adjacent ($DE=6$), donc on utilise la tangente (TOA). $\\arctan(8/6) \\approx 53{,}13^\\circ \\approx 53^\\circ$.",
        "Impossible : un cosinus ne peut pas dépasser 1 ($8/6 > 1$) !",
        "Le côté hypoténuse n'est pas 8, 8 est le côté opposé.",
        "Attention, la tangente est Opposé / Adjacent = $8/6$, pas $6/8$."
      ],
      "hint1": "Par rapport à l'angle $\\widehat{E}$, $DF$ est le côté opposé et $DE$ le côté adjacent. Quel rapport utilise opposé et adjacent ?",
      "hint2": "Le rapport $\\frac{\\text{opposé}}{\\text{adjacent}}$ est la tangente. Remplace par les longueurs : lequel de $DF$ ou $DE$ va au numérateur ?",
      "solution": "Dans le triangle $DEF$ rectangle en $D$ :\n$$\\tan(\\widehat{E}) = \\frac{DF}{DE} = \\frac{8}{6} = \\frac{4}{3} \\approx 1{,}333$$\nÀ la calculatrice en mode Degré :\n$$\\widehat{E} = \\arctan\\left(\\frac{4}{3}\\right) \\approx 53{,}13^\\circ \\approx 53^\\circ$$",
      "skill": "Raisonner"
    },
    {
      "id": "G2-4",
      "chapterId": "G2",
      "tier": 3,
      "title": "Hauteur d'un arbre / Tâche Brevet",
      "statement": "Un observateur placé à $20\\text{ m}$ du pied d'un arbre vertical voit son sommet sous un angle de $35^\\circ$ avec l'horizontale.\nEn arrondissant $\\tan(35^\\circ) \\approx 0{,}7$, quelle est la hauteur de l'arbre en mètres ?",
      "type": "exact",
      "answer": "14",
      "hint1": "Le sol et l'arbre forment un triangle rectangle. La distance au pied est le côté adjacent ($20\\text{ m}$) et la hauteur est le côté opposé.",
      "hint2": "$\\tan(35^\\circ) = \\frac{h}{20} \\implies h = 20 \\times \\tan(35^\\circ) = 20 \\times 0{,}7$.",
      "solution": "Soit $h$ la hauteur de l'arbre :\n$$\\tan(35^\\circ) = \\frac{\\text{côté opposé}}{\\text{côté adjacent}} = \\frac{h}{20}$$\n$$h = 20 \\times \\tan(35^\\circ) \\approx 20 \\times 0{,}7 = 14\\text{ m}$$",
      "skill": "Modéliser"
    },
    {
      "id": "G2-5",
      "chapterId": "G2",
      "tier": 4,
      "title": "Défi Seconde : Formule $\\cos^2(x) + \\sin^2(x) = 1$",
      "statement": "Sans calculatrice, sachant que $x$ est la mesure d'un angle aigu et que $\\cos(x) = \\frac{4}{5}$, calculer la valeur exacte de $\\sin(x)$ sous forme de fraction.",
      "type": "exact",
      "answer": "3/5",
      "hint1": "Utilise la relation $\\cos^2(x) + \\sin^2(x) = 1$, démontrée dans le cours (rubrique « Pour aller plus loin »).",
      "hint2": "$\\sin^2(x) = 1 - \\cos^2(x) = 1 - \\left(\\frac{4}{5}\\right)^2 = 1 - \\frac{16}{25} = \\frac{9}{25}$. Prends la racine carrée.",
      "solution": "$$\\cos^2(x) + \\sin^2(x) = 1 \\implies \\sin^2(x) = 1 - \\left(\\frac{4}{5}\\right)^2 = 1 - \\frac{16}{25} = \\frac{9}{25}$$\nComme $x$ est un angle aigu, $\\sin(x) > 0$ :\n$$\\sin(x) = \\sqrt{\\frac{9}{25}} = \\frac{3}{5}$$",
      "skill": "Raisonner"
    }
  ],
  "N4": [
    {
      "id": "N4-1",
      "chapterId": "N4",
      "tier": 1,
      "title": "Équation élémentaire ax = b",
      "statement": "Résoudre l'équation : $4x = 28$. Que vaut $x$ ?",
      "type": "exact",
      "answer": "7",
      "hint1": "Pour isoler $x$, divise les deux membres par 4.",
      "hint2": "$x = \\frac{28}{4}$.",
      "solution": "$$4x = 28 \\implies x = \\frac{28}{4} = 7$$",
      "skill": "Calculer"
    },
    {
      "id": "N4-2",
      "chapterId": "N4",
      "tier": 1,
      "title": "Équation linéaire 2 étapes",
      "statement": "Résoudre l'équation : $5x + 3 = 38$. Que vaut $x$ ?",
      "type": "exact",
      "answer": "7",
      "hint1": "Commence par soustraire 3 de chaque côté pour isoler $5x$.",
      "hint2": "$5x = 38 - 3 = 35$, puis divise par 5.",
      "solution": "$$5x + 3 = 38 \\implies 5x = 38 - 3 = 35 \\implies x = \\frac{35}{5} = 7$$",
      "skill": "Calculer"
    },
    {
      "id": "N4-3",
      "chapterId": "N4",
      "tier": 2,
      "title": "Équation avec x dans chaque membre",
      "statement": "Résoudre : $7x - 5 = 3x + 15$. Quelle est la solution ?",
      "type": "exact",
      "answer": "5",
      "hint1": "Regroupe les $x$ à gauche (en soustrayant $3x$) et les nombres à droite (en ajoutant $5$).",
      "hint2": "$7x - 3x = 15 + 5 \\implies 4x = 20$.",
      "solution": "$$7x - 5 = 3x + 15 \\implies 7x - 3x = 15 + 5 \\implies 4x = 20 \\implies x = 5$$",
      "skill": "Calculer"
    },
    {
      "id": "N4-4",
      "chapterId": "N4",
      "tier": 2,
      "title": "Équation produit nul fondamentale",
      "statement": "Quelles sont les solutions de l'équation $(x - 5)(2x + 6) = 0$ ?",
      "type": "mcq",
      "options": [
        "$x = 5$ et $x = -3$",
        "$x = -5$ et $x = 3$",
        "$x = 5$ et $x = 3$",
        "Seulement $x = 5$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exactement ! Un produit est nul si l'un au moins des facteurs est nul : $x - 5 = 0 \\implies x = 5$ ou $2x + 6 = 0 \\implies 2x = -6 \\implies x = -3$.",
        "Attention aux signes : $x - 5 = 0 \\implies x = +5$.",
        "Pour $2x + 6 = 0$, $2x = -6$ donc $x = -3$ et non $+3$.",
        "Attention, il y a deux facteurs pouvant s'annuler !"
      ],
      "hint1": "Un produit de facteurs est nul si et seulement si l'un au moins des facteurs est nul.",
      "hint2": "Résous séparément $x - 5 = 0$ et $2x + 6 = 0$.",
      "solution": "Un produit est nul si et seulement si l'un au moins de ses facteurs est nul :\n$$x - 5 = 0 \\quad \\text{ou} \\quad 2x + 6 = 0$$\n$$x = 5 \\quad \\text{ou} \\quad 2x = -6 \\implies x = -3$$\nLes solutions sont donc $5$ et $-3$.",
      "skill": "Raisonner"
    },
    {
      "id": "N4-5",
      "chapterId": "N4",
      "tier": 3,
      "title": "Équations du type $x^2 = a$ (Brevet)",
      "statement": "Combien de solutions possède l'équation $x^2 = 49$, et quelles sont-elles ?",
      "type": "mcq",
      "options": [
        "Deux solutions : $7$ et $-7$",
        "Une seule solution : $7$",
        "Aucune solution",
        "Deux solutions : $\\sqrt{49}$ et $\\sqrt{-49}$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Parfait ! Comme $49 > 0$, l'équation $x^2 = 49$ admet deux solutions opposées : $\\sqrt{49} = 7$ et $-\\sqrt{49} = -7$.",
        "Attention, $(-7)^2 = (-7) \\times (-7) = 49$, donc $-7$ est aussi une solution !",
        "Faux, 49 est un nombre positif.",
        "Attention, un nombre négatif n'a pas de racine carrée."
      ],
      "hint1": "Pense aux nombres dont le carré vaut 49. N'oublie pas le signe moins !",
      "hint2": "Calcule $7^2$ puis $(-7)^2$. Combien de nombres ont un carré égal à $49$ ?",
      "solution": "Comme $49 > 0$, l'équation $x^2 = 49$ admet deux solutions distinctes :\n$$x = \\sqrt{49} = 7 \\quad \\text{ou} \\quad x = -\\sqrt{49} = -7$$",
      "skill": "Raisonner"
    },
    {
      "id": "N4-6",
      "chapterId": "N4",
      "tier": 4,
      "title": "Défi Seconde : Équation produit après factorisation",
      "statement": "Résoudre l'équation : $(2x + 5)(x - 4) + (2x + 5)(3x + 1) = 0$.\nDonner les deux solutions sous la forme $(x_1 ; x_2)$ avec $x_1 < x_2$.",
      "type": "exact",
      "answer": "(-5/2;3/4)",
      "hint1": "Ne développe surtout pas ! Factorise d'abord par le facteur commun $(2x + 5)$.",
      "hint2": "On obtient $(2x + 5)[(x - 4) + (3x + 1)] = 0 \\implies (2x + 5)(4x - 3) = 0$. Résous ensuite chaque facteur.",
      "solution": "1. Factorisons par $(2x + 5)$ :\n$$(2x + 5)[(x - 4) + (3x + 1)] = 0 \\implies (2x + 5)(4x - 3) = 0$$\n2. Équation produit nul :\n$$2x + 5 = 0 \\implies x = -\\frac{5}{2} = -2{,}5$$\n$$4x - 3 = 0 \\implies 4x = 3 \\implies x = \\frac{3}{4} = 0{,}75$$\nLes solutions sont $-\\frac{5}{2}$ et $\\frac{3}{4}$, soit $(x_1 ; x_2) = \\left(-\\frac{5}{2} ; \\frac{3}{4}\\right)$.",
      "skill": "Raisonner"
    }
  ],
  "N5": [
    {
      "id": "N5-1",
      "chapterId": "N5",
      "tier": 1,
      "title": "Reconnaissance d'un nombre premier",
      "statement": "Parmi les nombres suivants, lequel est un nombre premier ?",
      "type": "mcq",
      "options": [
        "17",
        "1",
        "9",
        "27"
      ],
      "correctIndex": 0,
      "explanations": [
        "Bravo ! 17 n'est divisible que par 1 et 17, c'est un nombre premier.",
        "Attention, 1 n'est PAS un nombre premier (il n'a qu'un seul diviseur, lui-même).",
        "Non, 9 est divisible par 3 ($9 = 3 \\times 3$).",
        "Non, 27 est divisible par 3 et par 9 ($27 = 3 \\times 9$)."
      ],
      "hint1": "Un nombre premier n'a exactement que deux diviseurs : 1 et lui-même.",
      "hint2": "Vérifie si le nombre est divisible par 2, 3, 5...",
      "solution": "17 est premier car ses seuls diviseurs sont 1 et 17. 1 n'est pas premier car il n'a qu'un seul diviseur (lui-même), 9 et 27 sont des multiples de 3.",
      "skill": "Raisonner"
    },
    {
      "id": "N5-2",
      "chapterId": "N5",
      "tier": 1,
      "title": "Critère de divisibilité par 3 et 9",
      "statement": "Le nombre 4 527 est-il divisible par 9 ?",
      "type": "mcq",
      "options": [
        "Oui, car la somme de ses chiffres vaut 18, qui est un multiple de 9",
        "Non, car il se termine par 7",
        "Non, car $4527 \\div 9$ a une virgule",
        "Oui, car 45 et 27 sont des multiples de 9"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exactement ! $4 + 5 + 2 + 7 = 18 = 9 \\times 2$, donc 4 527 est bien divisible par 9.",
        "Attention, le critère par 9 dépend de la somme de tous les chiffres, pas du chiffre des unités !",
        "4 527 divisé par 9 donne exactement 503 sans virgule.",
        "Bien que 45 et 27 soient multiples de 9, la règle officielle s'appuie sur la somme des chiffres."
      ],
      "hint1": "Calcule la somme des chiffres de 4 527.",
      "hint2": "$4 + 5 + 2 + 7 = 18$. Est-ce que 18 est dans la table de 9 ?",
      "solution": "La somme des chiffres est $4 + 5 + 2 + 7 = 18$. Comme 18 est divisible par 9, le nombre 4 527 est divisible par 9.",
      "skill": "Raisonner"
    },
    {
      "id": "N5-2b",
      "chapterId": "N5",
      "tier": 1,
      "title": "Critère de divisibilité par 9",
      "statement": "Le nombre 3 142 est-il divisible par 9 ?",
      "type": "mcq",
      "options": [
        "Non, car la somme de ses chiffres vaut 10, qui n'est pas un multiple de 9",
        "Oui, car la somme de ses chiffres vaut 10",
        "Oui, car c'est un nombre pair",
        "Non, car il se termine par 2"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! $3 + 1 + 4 + 2 = 10$, qui n'est pas divisible par 9.",
        "10 n'est pas un multiple de 9, donc le nombre n'est pas divisible par 9.",
        "Être pair indique la divisibilité par 2, pas par 9.",
        "Le dernier chiffre ne donne pas la divisibilité par 9."
      ],
      "hint1": "Calcule la somme des chiffres de 3 142.",
      "hint2": "$3 + 1 + 4 + 2 = 10$. Est-ce un multiple de 9 ?",
      "solution": "La somme des chiffres est $3 + 1 + 4 + 2 = 10$. Comme 10 n'est pas un multiple de 9, 3 142 n'est pas divisible par 9.",
      "skill": "Raisonner"
    },
    {
      "id": "N5-3",
      "chapterId": "N5",
      "tier": 2,
      "title": "Décomposition en produit de facteurs premiers",
      "statement": "Quelle est la décomposition en produit de facteurs premiers de 84 ?",
      "type": "mcq",
      "options": [
        "$2^2 \\times 3 \\times 7$",
        "$4 \\times 21$",
        "$2 \\times 6 \\times 7$",
        "$2^3 \\times 7$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Parfait ! $84 = 4 \\times 21 = 2^2 \\times 3 \\times 7$. Tous les facteurs sont des nombres premiers.",
        "Attention, 4 et 21 ne sont pas des nombres premiers !",
        "Attention, 6 n'est pas premier ($6 = 2 \\times 3$).",
        "$2^3 \\times 7 = 8 \\times 7 = 56$, pas 84."
      ],
      "hint1": "Divise successivement par les nombres premiers : 2, puis encore 2, puis 3...",
      "hint2": "$84 \\div 2 = 42$, $42 \\div 2 = 21$, $21 \\div 3 = 7$, $7 \\div 7 = 1$.",
      "solution": "$$84 = 2 \\times 42 = 2 \\times 2 \\times 21 = 2^2 \\times 3 \\times 7$$",
      "skill": "Calculer"
    },
    {
      "id": "N5-4",
      "chapterId": "N5",
      "tier": 3,
      "title": "Problème de sachets identiques",
      "statement": "Un confiseur a 108 sucettes et 180 bonbons. Il souhaite composer le plus grand nombre possible de sachets identiques, sans reste.\nCombien de sachets identiques peut-il préparer ?",
      "type": "exact",
      "answer": "36",
      "hint1": "Le nombre de sachets doit diviser à la fois 108 et 180. On cherche donc le plus grand diviseur commun de ces deux nombres.",
      "hint2": "Décompose 108 et 180 en facteurs premiers : $108 = 2^2 \\times 3^3$ et $180 = 2^2 \\times 3^2 \\times 5$. Repère les facteurs premiers présents à la fois dans les deux décompositions.",
      "solution": "1. Décompositions en facteurs premiers :\n$$108 = 2^2 \\times 3^3$$\n$$180 = 2^2 \\times 3^2 \\times 5$$\n2. Les deux décompositions ont en commun les facteurs $2$, $2$, $3$ et $3$. Le plus grand diviseur commun de 108 et 180 est donc :\n$$2^2 \\times 3^2 = 4 \\times 9 = 36$$\nLe confiseur peut préparer au maximum 36 sachets identiques (contenant chacun $108/36 = 3$ sucettes et $180/36 = 5$ bonbons).",
      "skill": "Modéliser"
    },
    {
      "id": "N5-5",
      "chapterId": "N5",
      "tier": 4,
      "title": "Défi : Une formule à nombres premiers ?",
      "statement": "Un élève affirme : « Pour tout entier naturel $n$, le nombre $n^2 + n + 11$ est premier. »\nCette affirmation est fausse. Quel est le plus petit entier naturel $n$ pour lequel $n^2 + n + 11$ n'est pas un nombre premier ?",
      "type": "exact",
      "answer": "10",
      "hint1": "Un seul contre-exemple suffit à réfuter l'affirmation. Calcule $n^2 + n + 11$ pour $n = 0$, $1$, $2$… et teste à chaque fois si le résultat est premier.",
      "hint2": "Pour $n = 0$, $1$, $2$ et $3$, on obtient $11$, $13$, $17$ et $23$, qui sont premiers. Continue, et pour tester un résultat, essaie les diviseurs $2$, $3$, $5$ et $7$, mais aussi $11$.",
      "solution": "On calcule les valeurs successives :\n$$11,\\ 13,\\ 17,\\ 23,\\ 31,\\ 41,\\ 53,\\ 67,\\ 83,\\ 101 \\quad \\text{pour } n = 0, 1, \\dots, 9$$\nCes dix nombres sont tous premiers. Pour $n = 10$ :\n$$10^2 + 10 + 11 = 121 = 11 \\times 11$$\n$121$ n'est pas premier. Le plus petit contre-exemple est donc $n = 10$ : une propriété vérifiée sur de nombreux exemples n'est pas démontrée pour autant.",
      "skill": "Raisonner"
    }
  ],
  "Algo": [
    {
      "id": "Algo-1",
      "chapterId": "Algo",
      "tier": 1,
      "title": "Règle d'or du Tableur",
      "statement": "Par quel caractère obligatoire doit impérativement débuter toute formule dans une cellule de tableur pour qu'un calcul soit exécuté ?",
      "type": "mcq",
      "options": [
        "Le signe « = » (égal)",
        "Le signe « + » (plus)",
        "Le mot « CALC »",
        "Une parenthèse « ( »"
      ],
      "correctIndex": 0,
      "answer": "Le signe « = » (égal)",
      "hint1": "Pense au symbole qu'on écrit en mathématiques juste avant le résultat d'un calcul, comme dans « 3 + 4 … 7 ».",
      "hint2": "Sans ce symbole en tête de cellule, le tableur interprète la saisie comme du texte ordinaire et n'effectue aucun calcul.",
      "solution": "Toute formule dans un tableur commence impérativement par le signe égal `=` (ex: `=A1+B1` ou `=SOMME(B2:B10)`).",
      "skill": "Communiquer"
    },
    {
      "id": "Algo-2",
      "chapterId": "Algo",
      "tier": 1,
      "title": "Étirement de formule vers le bas",
      "statement": "On a saisi dans la cellule B1 la formule `=2*A1 + 5`. On étire cette formule vers le bas jusqu'à la cellule B3.\nQuelle formule se trouve automatiquement dans la cellule B3 ?",
      "type": "mcq",
      "options": [
        "=2*A3 + 5",
        "=2*A1 + 5",
        "=2*C1 + 5",
        "=2*B3 + 5"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Lorsqu'on étire une formule vers le bas de 2 lignes (de la ligne 1 à la ligne 3), les numéros de ligne augmentent de 2 : A1 devient A3.",
        "Non, la formule s'incrémente lors d'un étirement.",
        "La lettre de colonne ne change que lors d'un étirement vers la droite ou la gauche.",
        "La cellule ferait une référence circulaire à elle-même."
      ],
      "hint1": "Quand on étire vers le bas, les colonnes (lettres) restent les mêmes mais les lignes (chiffres) augmentent.",
      "hint2": "De B1 à B3, on descend de 2 lignes : le numéro de ligne de la référence A1 augmente donc lui aussi de 2.",
      "solution": "Lors de la recopie vers le bas, le numéro de ligne s'incrémente : la formule `=2*A1 + 5` devient `=2*A2 + 5` en B2, puis `=2*A3 + 5` en B3.",
      "skill": "Modéliser"
    },
    {
      "id": "Algo-3",
      "chapterId": "Algo",
      "tier": 2,
      "title": "Calcul de moyenne sur tableur",
      "statement": "Quelle formule parmi les suivantes permet de calculer la moyenne des notes situées de la cellule B2 à la cellule B25 ?",
      "type": "mcq",
      "options": [
        "=MOYENNE(B2:B25)",
        "=SOMME(B2:B25)/25",
        "=MOYENNE(B2;B25)",
        "MOYENNE(B2:B25)"
      ],
      "correctIndex": 0,
      "explanations": [
        "Parfait ! La fonction officielle est `=MOYENNE(...)` et les deux-points `:` désignent toute la plage continue de cellules de B2 jusqu'à B25.",
        "Attention, de B2 à B25 il y a 24 cellules et non 25 !",
        "Le point-virgule `;` ne calculerait la moyenne que des deux cellules isolées B2 et B25.",
        "Il manque le signe `=` obligatoire."
      ],
      "hint1": "Pour une plage continue de cellules, on utilise le symbole deux-points `:`.",
      "hint2": "La syntaxe est `=MOYENNE(début:fin)`.",
      "solution": "La formule correcte est `=MOYENNE(B2:B25)`. Les deux-points `:` indiquent que toutes les cellules de B2 à B25 sont prises en compte.",
      "skill": "Modéliser"
    },
    {
      "id": "Algo-4",
      "chapterId": "Algo",
      "tier": 3,
      "title": "Scratch : Tracé d'un polygone régulier (Brevet)",
      "statement": "Dans un script Scratch, on veut tracer un triangle équilatéral avec la boucle « répéter 3 fois ». De quel angle en degrés le lutin doit-il tourner à chaque sommet ?",
      "type": "exact",
      "answer": "120",
      "hint1": "Attention au piège fréquent : le lutin tourne de l'angle **extérieur**, pas de l'angle intérieur (60°) !",
      "hint2": "Pour faire un tour complet (360°) en 3 étapes égales : $360 \\div 3$.",
      "solution": "Pour tracer un polygone régulier fermé à $n$ côtés, le lutin effectue un tour complet de $360^\\circ$. Pour un triangle ($n = 3$), il doit donc tourner de :\n$$\\frac{360^\\circ}{3} = 120^\\circ$$\n(L'angle intérieur vaut bien $180 - 120 = 60^\\circ$).",
      "skill": "Raisonner"
    },
    {
      "id": "Algo-5",
      "chapterId": "Algo",
      "tier": 4,
      "title": "Défi Scratch : Valeur finale d'une variable",
      "statement": "On considère le script suivant :\n- Mettre $x$ à $5$\n- Répéter 4 fois : Mettre $x$ à $2 \\times x - 3$\nQuelle est la valeur finale de la variable $x$ ?",
      "type": "exact",
      "answer": "35",
      "hint1": "Exécute le script pas à pas en suivant la valeur de $x$ à chaque tour de boucle.",
      "hint2": "Tour 1 : $2(5)-3=7$. Tour 2 : $2(7)-3=11$. Tour 3 : $2(11)-3=19$. Calcule le Tour 4 !",
      "solution": "Suivi des étapes :\n• Départ : $x = 5$\n• Tour 1 : $x = 2 \\times 5 - 3 = 7$\n• Tour 2 : $x = 2 \\times 7 - 3 = 11$\n• Tour 3 : $x = 2 \\times 11 - 3 = 19$\n• Tour 4 : $x = 2 \\times 19 - 3 = 35$\nÀ la fin de l'exécution, $x = 35$.",
      "skill": "Calculer"
    },
    {
      "id": "Algo-6",
      "chapterId": "Algo",
      "tier": 2,
      "title": "Scratch : Bloc personnalisé",
      "statement": "On considère le programme suivant, qui utilise un bloc personnalisé « carré ». Le stylo est en position d'écriture.\n\n```scratch\ndéfinir carré (c)\nrépéter 4 fois\n    avancer de (c) pas\n    tourner à droite de 90 degrés\n\nquand drapeau cliqué\ncarré (25)\ncarré (40)\n```\n\nQuelle distance totale le lutin parcourt-il, en pas, pendant l'exécution du programme ?",
      "type": "exact",
      "answer": "260",
      "hint1": "À chaque utilisation du bloc, le paramètre $c$ prend la valeur écrite entre parenthèses, et le lutin trace les 4 côtés d'un carré de côté $c$.",
      "hint2": "Pendant l'instruction « carré (25) », le lutin parcourt $4 \\times 25 = 100$ pas. Fais de même pour l'instruction suivante, puis additionne.",
      "solution": "L'instruction « carré (25) » fait parcourir au lutin les 4 côtés d'un carré de côté $25$ : $4 \\times 25 = 100$ pas.\nL'instruction « carré (40) » lui fait parcourir les 4 côtés d'un carré de côté $40$ : $4 \\times 40 = 160$ pas.\nDistance totale parcourue : $100 + 160 = 260$ pas.\nRemarque : les deux carrés partent du même sommet avec la même orientation, ils ont donc deux côtés en partie superposés ; la figure dessinée mesure moins de $260$ pas, mais le lutin, lui, a bien parcouru $260$ pas.",
      "skill": "Calculer"
    },
    {
      "id": "Algo-7",
      "chapterId": "Algo",
      "tier": 3,
      "title": "Scratch : Messages et scripts en parallèle",
      "statement": "Un lutin exécute les trois scripts ci-dessous. On considère que seule l'instruction « attendre » prend du temps.\n\n```scratch\nquand drapeau cliqué\nattendre 3 secondes\nenvoyer à tous [départ]\n\nquand je reçois [départ]\nrépéter 5 fois\n    avancer de 20 pas\n    attendre 2 secondes\n\nquand drapeau cliqué\nattendre 6 secondes\ndire [Stop !]\n```\n\nCombien de pas le lutin a-t-il parcourus au moment où il dit « Stop ! » ?",
      "type": "exact",
      "answer": "40",
      "hint1": "Les deux scripts « quand drapeau cliqué » démarrent en même temps, à l'instant $0$. Le script « quand je reçois » ne démarre qu'à l'envoi du message. Place ces événements sur une ligne du temps.",
      "hint2": "Le message part à l'instant $3$ s : le lutin avance une première fois à cet instant, puis toutes les $2$ secondes. Compte les avancées qui ont lieu avant l'instant $6$ s.",
      "solution": "Les deux scripts « quand drapeau cliqué » s'exécutent en parallèle à partir de l'instant $0$.\n• À l'instant $3$ s, le premier envoie le message « départ » : le script « quand je reçois [départ] » démarre.\n• Le lutin avance de $20$ pas aux instants $3$ s et $5$ s ; l'avancée suivante n'aura lieu qu'à l'instant $7$ s.\n• À l'instant $6$ s, le troisième script fait dire « Stop ! » au lutin.\nLe lutin a donc avancé $2$ fois : $2 \\times 20 = 40$ pas.",
      "skill": "Raisonner"
    }
  ],
  "N3": [
    {
      "id": "N3-1",
      "chapterId": "N3",
      "tier": 1,
      "title": "Produit de puissances",
      "statement": "Écrire sous la forme d'une seule puissance de 10 :\n$$A = 10^4 \\times 10^3$$",
      "type": "mcq",
      "options": [
        "$10^7$",
        "$10^{12}$",
        "$10^1$",
        "$100^7$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Parfait ! $10^4 \\times 10^3$ contient $4 + 3 = 7$ facteurs $10$.",
        "Tu as multiplié les exposants au lieu de les additionner !",
        "Tu as soustrait les exposants.",
        "On ne multiplie pas la base 10."
      ],
      "hint1": "Écris les facteurs : $10^4$ contient 4 facteurs $10$, et $10^3$ en contient 3.",
      "hint2": "Compte tous les facteurs $10$ du produit.",
      "solution": "$$A = (10 \\times 10 \\times 10 \\times 10) \\times (10 \\times 10 \\times 10) = 10^7$$\nIl y a $4 + 3 = 7$ facteurs $10$.",
      "skill": "Calculer"
    },
    {
      "id": "N3-2",
      "chapterId": "N3",
      "tier": 1,
      "title": "Puissance négative",
      "statement": "Quelle est l'écriture décimale du nombre $10^{-3}$ ?",
      "type": "exact",
      "answer": "0,001",
      "hint1": "$10^{-n} = \\frac{1}{10^n}$. Ici, il y a 3 zéros au total avant le chiffre 1.",
      "hint2": "$10^{-3} = \\frac{1}{10^3} = \\frac{1}{1000}$. Écris ce quotient sous forme décimale.",
      "solution": "$$10^{-3} = \\frac{1}{10^3} = \\frac{1}{1000} = 0{,}001$$",
      "skill": "Calculer"
    },
    {
      "id": "N3-3",
      "chapterId": "N3",
      "tier": 2,
      "title": "Écriture scientifique normalisée",
      "statement": "Quelle est l'écriture scientifique du nombre $45\\,000$ ?",
      "type": "mcq",
      "options": [
        "$4{,}5 \\times 10^4$",
        "$45 \\times 10^3$",
        "$0{,}45 \\times 10^5$",
        "$4{,}5 \\times 10^{-4}$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! La notation scientifique impose un seul chiffre non nul avant la virgule ($1 \\le a < 10$).",
        "45 n'est pas strictement inférieur à 10.",
        "0,45 n'est pas supérieur ou égal à 1.",
        "L'exposant est positif car 45 000 est un grand nombre."
      ],
      "hint1": "La notation scientifique est de la forme $a \\times 10^n$ avec $1 \\le a < 10$.",
      "hint2": "Place la virgule après le 4 et compte le décalage.",
      "solution": "$$45\\,000 = 4{,}5 \\times 10^4$$",
      "skill": "Raisonner"
    },
    {
      "id": "N3-4",
      "chapterId": "N3",
      "tier": 3,
      "title": "Quotient de puissances (Brevet)",
      "statement": "Calculer et donner l'écriture scientifique de :\n$$B = \\frac{12 \\times 10^5}{3 \\times 10^8}$$",
      "type": "mcq",
      "options": [
        "$4 \\times 10^{-3}$",
        "$4 \\times 10^3$",
        "$9 \\times 10^{-3}$",
        "$4 \\times 10^{13}$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Excellent ! $\\frac{12}{3} = 4$ et $\\frac{10^5}{10^8} = \\frac{1}{10^3} = 10^{-3}$.",
        "Il y a plus de facteurs $10$ au dénominateur qu'au numérateur : l'exposant est négatif.",
        "Attention, on divise $12$ par $3$, on ne soustrait pas.",
        "Dans un quotient, les facteurs $10$ communs se simplifient : on ne les cumule pas."
      ],
      "hint1": "Sépare les nombres et les puissances de 10 : $B = \\frac{12}{3} \\times \\frac{10^5}{10^8}$.",
      "hint2": "$\\frac{12}{3} = 4$ ; dans $\\frac{10^5}{10^8}$, simplifie 5 facteurs $10$ et regarde ce qui reste au dénominateur.",
      "solution": "$$B = \\frac{12 \\times 10^5}{3 \\times 10^8} = 4 \\times \\frac{10^5}{10^8} = 4 \\times \\frac{1}{10^3} = 4 \\times 10^{-3}$$",
      "skill": "Calculer"
    },
    {
      "id": "N3-5",
      "chapterId": "N3",
      "tier": 4,
      "title": "Défi Seconde : Vitesse de la lumière",
      "statement": "La lumière parcourt environ $3 \\times 10^8\\text{ m/s}$. La distance Terre-Soleil est d'environ $1{,}5 \\times 10^{11}\\text{ m}$.\nCombien de secondes met la lumière du Soleil pour atteindre la Terre ?",
      "type": "exact",
      "answer": "500",
      "hint1": "Formule : $t = \\frac{d}{v}$.",
      "hint2": "$t = \\frac{1{,}5 \\times 10^{11}}{3 \\times 10^8} = \\frac{1{,}5}{3} \\times 10^{11 - 8} = 0{,}5 \\times 10^3$.",
      "solution": "$$t = \\frac{d}{v} = \\frac{1{,}5 \\times 10^{11}}{3 \\times 10^8} = 0{,}5 \\times 10^3 = 500\\text{ secondes}$$\n(soit environ 8 minutes et 20 secondes).",
      "skill": "Modéliser"
    }
  ],
  "G2bis": [
    {
      "id": "G2bis-1",
      "chapterId": "G2bis",
      "tier": 1,
      "title": "Quel outil pour cette longueur ?",
      "statement": "Le triangle $KLM$ est rectangle en $K$, avec $\\widehat{KLM} = 40^\\circ$ et $KL = 7\\text{ cm}$. On veut calculer $KM$.\n**Quel outil permet de répondre ?**",
      "type": "mcq",
      "options": [
        "La trigonométrie (cosinus, sinus ou tangente)",
        "Le théorème de Pythagore",
        "Le théorème de Thalès",
        "La réciproque du théorème de Pythagore"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact : le triangle est rectangle et un angle aigu est donné, avec un seul côté connu. Ici, ce sera la tangente de $\\widehat{KLM}$.",
        "Pythagore exige de connaître deux côtés ; ici on n'en connaît qu'un, mais on a un angle.",
        "Aucune droite parallèle n'intervient.",
        "On sait déjà que le triangle est rectangle : rien à prouver."
      ],
      "hint1": "Un angle aigu est-il donné ? Combien de côtés connaît-on ?",
      "hint2": "Triangle rectangle + un angle aigu + un côté → trigonométrie.",
      "solution": "Le triangle est rectangle et on connaît un angle aigu et un seul côté : c'est la **trigonométrie**. Pour l'angle en $L$, $[KL]$ est adjacent et $[KM]$ opposé : $\\tan(40^\\circ) = \\frac{KM}{7}$.",
      "skill": "Raisonner"
    },
    {
      "id": "G2bis-2",
      "chapterId": "G2bis",
      "tier": 2,
      "title": "Une question de parallélisme",
      "statement": "Les points $A$, $E$, $B$ d'une part et $A$, $F$, $C$ d'autre part sont alignés dans cet ordre, avec $AE = 3$, $AB = 7{,}5$, $AF = 4$ et $AC = 10$ (en cm). On se demande si les droites $(EF)$ et $(BC)$ sont parallèles.\n**Quel outil permet de répondre ?**",
      "type": "mcq",
      "options": [
        "La réciproque du théorème de Thalès",
        "Le théorème de Thalès",
        "La réciproque du théorème de Pythagore",
        "La trigonométrie (cosinus, sinus ou tangente)"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact : on veut prouver un parallélisme, on compare $\\frac{AE}{AB}$ et $\\frac{AF}{AC}$.",
        "Le théorème de Thalès suppose que le parallélisme est déjà connu ; ici c'est la question.",
        "La réciproque de Pythagore sert à prouver qu'un triangle est rectangle.",
        "Aucun angle aigu n'est donné ni cherché."
      ],
      "hint1": "Le parallélisme est-il donné, ou faut-il le démontrer ?",
      "hint2": "Prouver que deux droites sont parallèles → réciproque de Thalès.",
      "solution": "On veut **démontrer** un parallélisme : réciproque de Thalès. $\\frac{AE}{AB} = \\frac{3}{7{,}5} = 0{,}4$ et $\\frac{AF}{AC} = \\frac{4}{10} = 0{,}4$ : les points étant alignés dans le même ordre, $(EF) \\parallel (BC)$.",
      "skill": "Raisonner"
    },
    {
      "id": "G2bis-3",
      "chapterId": "G2bis",
      "tier": 3,
      "title": "Calculer une longueur",
      "statement": "Une échelle de $4\\text{ m}$ est appuyée contre un mur vertical ; elle forme avec le sol horizontal un angle de $72^\\circ$.\n**À quelle distance du mur se trouve le pied de l'échelle ? Donne la réponse en mètres, arrondie au centimètre.**",
      "type": "exact",
      "answer": "1,24",
      "hint1": "Mur et sol forment un angle droit ; un angle aigu est donné et un seul côté est connu.",
      "hint2": "La distance au mur est adjacente à l'angle au sol ; l'échelle est l'hypoténuse : cosinus.",
      "solution": "Le mur est perpendiculaire au sol : triangle rectangle. Un angle aigu et un seul côté sont connus : **trigonométrie**. Pour l'angle de $72^\\circ$, la distance $d$ est le côté adjacent et l'échelle l'hypoténuse :\n$d = 4 \\times \\cos(72^\\circ) \\approx 1{,}24\\text{ m}$",
      "skill": "Calculer"
    },
    {
      "id": "G2bis-4",
      "chapterId": "G2bis",
      "tier": 4,
      "title": "Problème en deux étapes",
      "statement": "$ABC$ est un triangle rectangle en $A$ avec $AB = 9\\text{ cm}$ et $AC = 12\\text{ cm}$. $M$ est le point de $[AB]$ tel que $AM = 3\\text{ cm}$ ; la parallèle à $(BC)$ passant par $M$ coupe $[AC]$ en $N$.\n**Combien mesure $MN$, en cm ?**",
      "type": "exact",
      "answer": "5",
      "hint1": "Pour utiliser les rapports égaux avec $MN$, quelle longueur du grand triangle te manque-t-il ?",
      "hint2": "D'abord Pythagore dans $ABC$ pour $BC$, puis Thalès avec $(MN) \\parallel (BC)$.",
      "solution": "Étape 1 (Pythagore, $ABC$ rectangle en $A$) : $BC^2 = 9^2 + 12^2 = 225$, donc $BC = 15\\text{ cm}$.\nÉtape 2 (Thalès, $(MN) \\parallel (BC)$) : $\\frac{AM}{AB} = \\frac{MN}{BC}$, donc $MN = \\frac{3 \\times 15}{9} = 5\\text{ cm}$.",
      "skill": "Modéliser"
    }
  ],
  "G3": [
    {
      "id": "G3-1",
      "chapterId": "G3",
      "tier": 1,
      "title": "Effet de l'homothétie sur les longueurs",
      "statement": "Une homothétie de rapport $k = -3$ transforme un segment de longueur $4\\text{ cm}$. Quelle est la longueur du segment image ?",
      "type": "exact",
      "answer": "12",
      "hint1": "Une longueur est toujours strictement positive ! La longueur est multipliée par $|k|$.",
      "hint2": "Multiplie la longueur par $|-3| = 3$.",
      "solution": "Dans une homothétie de rapport $k$, les longueurs sont multipliées par $|k|$ :\n$$L' = |-3| \\times 4 = 3 \\times 4 = 12\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "G3-2",
      "chapterId": "G3",
      "tier": 2,
      "title": "Effet de l'homothétie sur les aires",
      "statement": "Une figure d'aire $8\\text{ cm}^2$ subit un agrandissement de rapport $k = 2{,}5$.\nQuelle est l'aire de la figure obtenue en $\\text{cm}^2$ ?",
      "type": "exact",
      "answer": "50",
      "hint1": "Dans une homothétie de rapport $k$, les aires sont multipliées par $k^2$.",
      "hint2": "$k^2 = 2{,}5^2 = 6{,}25$. Calcule $8 \\times 6{,}25$.",
      "solution": "$$\\text{Aire}' = k^2 \\times \\text{Aire} = 2{,}5^2 \\times 8 = 6{,}25 \\times 8 = 50\\text{ cm}^2$$",
      "skill": "Calculer"
    },
    {
      "id": "G3-3",
      "chapterId": "G3",
      "tier": 3,
      "title": "Effet sur les volumes (Brevet)",
      "statement": "Une bouteille miniature de parfum à l'échelle $k = \\frac{1}{2}$ a une contenance de $15\\text{ mL}$.\nQuelle est la contenance de la bouteille réelle en millilitres ?",
      "type": "exact",
      "answer": "120",
      "hint1": "Le rapport d'agrandissement de la miniature vers le réel est $2$. Les volumes sont multipliés par $2^3$.",
      "hint2": "$2^3 = 8$. Multiplie $15$ par $8$.",
      "solution": "Pour passer de la maquette au modèle réel, le coefficient d'agrandissement est $2$. Le volume est multiplié par $2^3 = 8$ :\n$$V = 15 \\times 8 = 120\\text{ mL}$$",
      "skill": "Modéliser"
    },
    {
      "id": "G3-4",
      "chapterId": "G3",
      "tier": 4,
      "title": "Défi : Retrouver un rapport négatif",
      "statement": "Une homothétie de centre $O$ et de rapport $k$, avec $k < 0$, transforme un disque de rayon $4$ cm en un disque d'aire $100\\pi$ cm².\nQuelle est la valeur de $k$ ?",
      "type": "exact",
      "answer": "-2,5",
      "hint1": "Une homothétie de rapport $k$ multiplie les aires par $k^2$. Calcule d'abord l'aire du disque de départ.",
      "hint2": "Le disque de départ a pour aire $16\\pi$ cm². On a donc $k^2 \\times 16\\pi = 100\\pi$. Une fois $k^2$ trouvé, pense au signe de $k$ imposé par l'énoncé.",
      "solution": "1. Aire du disque de départ : $\\pi \\times 4^2 = 16\\pi$ cm².\n2. Les aires sont multipliées par $k^2$ :\n$$k^2 \\times 16\\pi = 100\\pi \\iff k^2 = \\frac{100}{16} = 6{,}25$$\n3. Donc $k = 2{,}5$ ou $k = -2{,}5$. Comme $k < 0$ :\n$$k = -2{,}5$$",
      "skill": "Raisonner"
    },
    {
      "id": "G3-5",
      "chapterId": "G3",
      "tier": 3,
      "title": "Homothétie et configuration de Thalès",
      "statement": "Les droites $(AA')$ et $(BB')$ sont sécantes en $O$, et le point $O$ appartient aux segments $[AA']$ et $[BB']$. Les droites $(AB)$ et $(A'B')$ sont parallèles. On passe du triangle $OAB$ au triangle $OA'B'$ par une homothétie de centre $O$. On donne $OA = 4\\text{ cm}$ et $OA' = 10\\text{ cm}$.\nQuel est le rapport $k$ de cette homothétie ?",
      "type": "exact",
      "answer": "-2,5",
      "hint1": "La figure est une configuration papillon : cela te donne le signe de $k$. Pour la valeur, utilise les rapports de Thalès.",
      "hint2": "Les rapports de Thalès sont égaux à $|k|$ : on a $|k| = \\frac{OA'}{OA}$. Remplace par les longueurs de l'énoncé.",
      "solution": "D'après le théorème de Thalès, $|k| = \\frac{OA'}{OA} = \\frac{10}{4} = 2{,}5$.\nLe point $O$ est entre $A$ et $A'$ (configuration papillon), donc $k < 0$.\nConclusion : $k = -2{,}5$.",
      "skill": "Raisonner"
    }
  ],
  "G4": [
    {
      "id": "G4-1",
      "chapterId": "G4",
      "tier": 1,
      "title": "Aire de la sphère",
      "statement": "L'aire d'une sphère de rayon $R$ vaut exactement 4 fois l'aire d'un disque de même rayon $R$.\n**Quelle est la formule de l'aire de la sphère ?**",
      "type": "mcq",
      "options": [
        "$4 \\pi R^2$",
        "$\\frac{4}{3} \\pi R^3$",
        "$\\pi R^2$",
        "$2 \\pi R$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! $\\mathcal{A} = 4\\pi R^2$.",
        "C'est la formule du volume de la boule.",
        "C'est l'aire d'un disque en dimension 2.",
        "C'est le périmètre d'un cercle (circonférence)."
      ],
      "hint1": "Commence par écrire la formule de l'aire d'un disque de rayon $R$.",
      "hint2": "Une aire s'exprime avec $R^2$, comme l'aire du disque : il reste à appliquer le coefficient donné dans l'énoncé.",
      "solution": "L'aire d'un disque de rayon $R$ est $\\pi R^2$. L'aire de la sphère vaut 4 fois cette aire :\n$$\\text{Aire} = 4 \\pi R^2$$",
      "skill": "Calculer"
    },
    {
      "id": "G4-2",
      "chapterId": "G4",
      "tier": 2,
      "title": "Volume d'une boule",
      "statement": "Calculer la valeur exacte du volume d'une boule de rayon $R = 3\\text{ cm}$ en fonction de $\\pi$ (en $\\text{cm}^3$). Quel est le coefficient entier devant $\\pi$ ?",
      "type": "exact",
      "answer": "36",
      "hint1": "Formule : $\\mathcal{V} = \\frac{4}{3} \\pi R^3$.",
      "hint2": "$R^3 = 3^3 = 27$. Calcule $\\frac{4}{3} \\times 27$.",
      "solution": "$$\\mathcal{V} = \\frac{4}{3} \\pi \\times 3^3 = \\frac{4}{3} \\pi \\times 27 = 4 \\times 9 \\times \\pi = 36\\pi\\text{ cm}^3$$\nLe coefficient devant $\\pi$ est $36$.",
      "skill": "Calculer"
    },
    {
      "id": "G4-3",
      "chapterId": "G4",
      "tier": 3,
      "title": "Section d'une sphère par un plan (Brevet)",
      "statement": "Une sphère de rayon $R = 5\\text{ cm}$ est coupée par un plan à une distance de $3\\text{ cm}$ de son centre. Quel est le rayon du cercle de section (en cm) ?",
      "type": "exact",
      "answer": "4",
      "hint1": "Dans le triangle rectangle formé par le centre, le centre de la section et un point du cercle, applique Pythagore.",
      "hint2": "$R^2 = d^2 + r^2 \\implies 5^2 = 3^2 + r^2 \\implies 25 = 9 + r^2$.",
      "solution": "$$r^2 = R^2 - d^2 = 5^2 - 3^2 = 25 - 9 = 16 \\implies r = \\sqrt{16} = 4\\text{ cm}$$",
      "skill": "Raisonner"
    },
    {
      "id": "G4-4",
      "chapterId": "G4",
      "tier": 4,
      "title": "Défi Seconde : Coordonnées géographiques",
      "statement": "On assimile la Terre à une sphère de rayon $R = 6\\,370\\text{ km}$. Deux villes $A$ et $B$ sont situées sur un même méridien, $A$ à la latitude $20^\\circ$ Nord et $B$ à la latitude $50^\\circ$ Nord.\n**Quelle est la longueur, arrondie au km, de l'arc de méridien qui relie $A$ à $B$ ?** (Utiliser la touche $\\pi$ de la calculatrice.)",
      "type": "exact",
      "answer": "3335",
      "hint1": "Les deux villes sont sur un même méridien : l'angle au centre qui les sépare est la différence de leurs latitudes.",
      "hint2": "L'arc correspond à un angle de $30^\\circ$ : sa longueur est proportionnelle à l'angle. Prends $\\frac{30}{360}$ du périmètre $2\\pi R$ d'un grand cercle.",
      "solution": "Les deux villes étant sur un même méridien, l'angle au centre qui les sépare vaut $50^\\circ - 20^\\circ = 30^\\circ$.\nLa longueur d'un arc de grand cercle est proportionnelle à l'angle au centre :\n$$\\ell = \\frac{30}{360} \\times 2\\pi \\times 6\\,370 = \\frac{6\\,370\\pi}{6} \\approx 3\\,335\\text{ km}$$",
      "skill": "Raisonner"
    },
    {
      "id": "G4-5",
      "chapterId": "G4",
      "tier": 1,
      "title": "Coordonnées d'un sommet d'un pavé droit",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 310 195\" width=\"310\" height=\"195\" style=\"max-width:310px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pavé droit ABCDEFGH en perspective cavalière\">\n  <polygon points=\"60,170 220,170 220,80 60,80\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n  <polygon points=\"220,170 280,125 280,35 220,80\" fill=\"rgba(37, 99, 235, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n  <polygon points=\"60,80 220,80 280,35 120,35\" fill=\"rgba(37, 99, 235, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n  <g stroke=\"var(--text-main, #334155)\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\">\n    <line x1=\"60\" y1=\"170\" x2=\"120\" y2=\"125\" />\n    <line x1=\"120\" y1=\"125\" x2=\"280\" y2=\"125\" />\n    <line x1=\"120\" y1=\"125\" x2=\"120\" y2=\"35\" />\n  </g>\n  <g font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">\n    <text x=\"49\" y=\"182\">A</text>\n    <text x=\"224\" y=\"184\">B</text>\n    <text x=\"286\" y=\"133\">C</text>\n    <text x=\"125\" y=\"139\">D</text>\n    <text x=\"47\" y=\"76\">E</text>\n    <text x=\"208\" y=\"75\">F</text>\n    <text x=\"285\" y=\"32\">G</text>\n    <text x=\"108\" y=\"30\">H</text>\n  </g>\n</svg>\n</div>\nDans le pavé droit $ABCDEFGH$, on prend $A$ comme origine, avec les abscisses sur $(AB)$, les ordonnées sur $(AD)$ et les altitudes sur $(AE)$. On donne $AB = 5$, $AD = 8$ et $AE = 4$.\n\nDonner les coordonnées du point $F$ dans l'ordre (abscisse ; ordonnée ; altitude), en les séparant par des points-virgules.",
      "type": "exact",
      "answer": "(5;0;4)",
      "hint1": "Pour atteindre $F$ depuis l'origine, de combien faut-il avancer le long de $(AB)$, de $(AD)$ et de $(AE)$ ?",
      "hint2": "$F$ est juste au-dessus de $B$ : on ne se déplace pas le long de $(AD)$, donc son ordonnée est nulle.",
      "solution": "Pour aller de $A$ à $F$, on avance de $AB = 5$ le long de $(AB)$, on ne se déplace pas le long de $(AD)$ et on monte de $AE = 4$ le long de $(AE)$.\n**Conclusion :** $F(5 ; 0 ; 4)$.",
      "skill": "Calculer"
    },
    {
      "id": "G4-6",
      "chapterId": "G4",
      "tier": 2,
      "title": "Milieu d'une arête d'un pavé droit",
      "statement": "Dans un pavé droit $ABCDEFGH$ (la face $EFGH$ est au-dessus de la face $ABCD$, $E$ au-dessus de $A$, $F$ au-dessus de $B$, $G$ au-dessus de $C$ et $H$ au-dessus de $D$), on prend $A$ comme origine, avec les abscisses sur $(AB)$, les ordonnées sur $(AD)$ et les altitudes sur $(AE)$. On donne $AB = 8$, $AD = 6$ et $AE = 10$. Le point $M$ est le milieu de l'arête $[CG]$.\n\nDonner les coordonnées de $M$ dans l'ordre (abscisse ; ordonnée ; altitude), en les séparant par des points-virgules.",
      "type": "exact",
      "answer": "(8;6;5)",
      "hint1": "Chaque coordonnée d'un milieu s'obtient en faisant la moyenne des coordonnées des deux extrémités.",
      "hint2": "Lis d'abord les coordonnées de $C$ et de $G$ : entre ces deux points, seule l'altitude change.",
      "solution": "On lit $C(8 ; 6 ; 0)$ et $G(8 ; 6 ; 10)$.\nAbscisse de $M$ : $\\dfrac{8 + 8}{2} = 8$. Ordonnée : $\\dfrac{6 + 6}{2} = 6$. Altitude : $\\dfrac{0 + 10}{2} = 5$.\n**Conclusion :** $M(8 ; 6 ; 5)$.",
      "skill": "Calculer"
    }
  ],
  "G5": [
    {
      "id": "G5-1",
      "chapterId": "G5",
      "tier": 1,
      "title": "Volume d'un pavé droit",
      "statement": "Calculer le volume d'un pavé droit de longueur $8\\text{ cm}$, largeur $5\\text{ cm}$ et hauteur $3\\text{ cm}$ (en $\\text{cm}^3$).",
      "type": "exact",
      "answer": "120",
      "hint1": "$V = L \\times l \\times h$.",
      "hint2": "Calcule d'abord $8 \\times 5$, puis multiplie le résultat par $3$.",
      "solution": "$$V = 8 \\times 5 \\times 3 = 120\\text{ cm}^3$$",
      "skill": "Calculer"
    },
    {
      "id": "G5-2",
      "chapterId": "G5",
      "tier": 2,
      "title": "Volume d'une pyramide",
      "statement": "Une pyramide a une base carrée de côté $6\\text{ cm}$ et une hauteur de $10\\text{ cm}$. Quel est son volume en $\\text{cm}^3$ ?",
      "type": "exact",
      "answer": "120",
      "hint1": "$V = \\frac{1}{3} \\times \\text{Aire de la base} \\times h$.",
      "hint2": "Aire du carré = $6^2 = 36$. Volume = $\\frac{1}{3} \\times 36 \\times 10$.",
      "solution": "$$V = \\frac{1}{3} \\times (6 \\times 6) \\times 10 = \\frac{1}{3} \\times 36 \\times 10 = 12 \\times 10 = 120\\text{ cm}^3$$",
      "skill": "Calculer"
    },
    {
      "id": "G5-3",
      "chapterId": "G5",
      "tier": 3,
      "title": "Section plane d'un cylindre (Brevet)",
      "statement": "La section d'un cylindre de révolution par un plan parallèle à son axe de révolution est un :",
      "type": "mcq",
      "options": [
        "Rectangle",
        "Disque",
        "Triangle",
        "Trapèze"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Couper un cylindre parallèlement à son axe donne toujours un rectangle.",
        "Le disque s'obtient quand le plan est perpendiculaire à l'axe (parallèle aux bases).",
        "Un cylindre n'a pas de face triangulaire.",
        "Les deux bords verticaux sont parallèles et de même hauteur."
      ],
      "hint1": "Imagine couper une boîte de conserve verticalement.",
      "hint2": "Les génératrices du cylindre sont parallèles.",
      "solution": "La section d'un cylindre par un plan parallèle à son axe de révolution est un **rectangle** (ou un segment si le plan est tangent).",
      "skill": "Raisonner"
    },
    {
      "id": "G5-4",
      "chapterId": "G5",
      "tier": 4,
      "title": "Défi : Volume d'un tronc de cône",
      "statement": "Un cône de révolution a un volume de $54\\text{ cm}^3$. Un plan parallèle à sa base le coupe ; la section obtenue a une aire égale à $\\frac{1}{9}$ de l'aire de la base.\nQuel est le volume, en $\\text{cm}^3$, de la partie du cône située entre la section et la base ?",
      "type": "exact",
      "answer": "52",
      "hint1": "Le petit cône au sommet est une réduction du grand cône de rapport $k$ : les aires sont multipliées par $k^2$ et les volumes par $k^3$. Trouve $k$, puis pense à ce qu'il faut soustraire.",
      "hint2": "$k^2 = \\frac{1}{9}$, donc $k = \\frac{1}{3}$ (un rapport de réduction est positif). Le petit cône a pour volume $k^3 \\times 54$.",
      "solution": "1. La section est une réduction de la base de rapport $k$ :\n$$k^2 = \\frac{1}{9} \\implies k = \\frac{1}{3}$$\n2. Volume du petit cône :\n$$V' = k^3 \\times 54 = \\frac{1}{27} \\times 54 = 2\\text{ cm}^3$$\n3. Volume de la partie restante :\n$$54 - 2 = 52\\text{ cm}^3$$",
      "skill": "Raisonner"
    },
    {
      "id": "G5-5",
      "chapterId": "G5",
      "tier": 1,
      "title": "Reconnaître un solide à partir de ses vues",
      "statement": "Un solide posé sur une table a pour vue de face un triangle isocèle et pour vue de dessus un disque. Quel est ce solide ?",
      "type": "mcq",
      "options": [
        "Une pyramide à base carrée",
        "Un cône de révolution",
        "Un cylindre de révolution",
        "Une boule"
      ],
      "correctIndex": 1,
      "explanations": [
        "Vue de dessus, une pyramide à base carrée donne un carré, pas un disque.",
        "Exact ! Un cône posé sur sa base se voit comme un triangle isocèle de face et comme un disque de dessus.",
        "De face, un cylindre se voit comme un rectangle.",
        "Une boule se voit comme un disque dans toutes les directions."
      ],
      "hint1": "Associe à chaque vue une forme de base du solide : que voit-on en regardant le solide d'au-dessus ?",
      "hint2": "Une base en forme de disque laisse le choix entre deux solides qui ont une base : lequel se termine par une pointe ?",
      "solution": "Vue de dessus, un disque : le solide a une base circulaire. Vue de face, un triangle isocèle : il se termine par une pointe. C'est un **cône de révolution**.",
      "skill": "Raisonner"
    },
    {
      "id": "G5-6",
      "chapterId": "G5",
      "tier": 2,
      "title": "Patron d'un cylindre",
      "statement": "Le patron d'un cylindre de révolution de rayon $4$ cm et de hauteur $9$ cm est formé de deux disques et d'un rectangle. Un côté de ce rectangle mesure $9$ cm. Quelle est la longueur, en cm, de l'autre côté ? Donne la valeur arrondie au dixième.",
      "type": "exact",
      "answer": "25,1",
      "hint1": "Quand on enroule le rectangle pour former le cylindre, ce côté fait exactement le tour d'une base.",
      "hint2": "Ce côté est égal au périmètre d'un cercle de rayon $4$ cm : $2 \\times \\pi \\times 4$.",
      "solution": "En s'enroulant, le côté cherché fait le tour de la base. Il est donc égal au périmètre du cercle de rayon $4$ cm :\n$L = 2 \\times \\pi \\times 4 = 8\\pi \\approx 25{,}1\\text{ cm}$",
      "skill": "Calculer"
    },
    {
      "id": "G5-7",
      "chapterId": "G5",
      "tier": 3,
      "title": "Patron d'un cône : angle du secteur",
      "statement": "Un cône de révolution a pour rayon de base $8$ cm et pour hauteur $6$ cm. Dans son patron, la surface latérale est un secteur circulaire. Quelle est la mesure, en degrés, de l'angle de ce secteur ?",
      "type": "exact",
      "answer": "288",
      "hint1": "Calcule la génératrice avec le théorème de Pythagore : c'est le rayon du secteur. L'arc du secteur a la même longueur que le périmètre de la base.",
      "hint2": "L'arc mesure $2\\pi \\times 8$, le cercle complet de même rayon que le secteur mesure $2\\pi$ fois la génératrice : cherche la fraction de tour.",
      "solution": "D'après le théorème de Pythagore, la génératrice vérifie $g^2 = 8^2 + 6^2 = 100$, donc $g = 10$ cm.\nL'arc du secteur mesure $2\\pi \\times 8 = 16\\pi$ cm ; le cercle complet de rayon $10$ cm mesure $20\\pi$ cm.\nLe secteur représente donc $\\dfrac{16\\pi}{20\\pi} = \\dfrac{4}{5}$ du disque :\n$\\alpha = \\dfrac{4}{5} \\times 360^\\circ = 288^\\circ$",
      "skill": "Raisonner"
    }
  ],
  "G6": [
    {
      "id": "G6-1",
      "chapterId": "G6",
      "tier": 1,
      "title": "Angle de rotation d'un polygone régulier",
      "statement": "On fait tourner un hexagone régulier (6 côtés) autour de son centre pour qu'un sommet prenne la place du sommet suivant. De quel angle au centre a-t-on tourné ?",
      "type": "exact",
      "answer": "60",
      "hint1": "Un tour complet vaut $360^\\circ$. Divise par le nombre de sommets.",
      "hint2": "L'hexagone régulier a 6 sommets répartis régulièrement autour du centre : effectue la division de $360$ par $6$.",
      "solution": "$$\\alpha = \\frac{360^\\circ}{6} = 60^\\circ$$",
      "skill": "Calculer"
    },
    {
      "id": "G6-2",
      "chapterId": "G6",
      "tier": 2,
      "title": "Sens horaire et sens anti-horaire",
      "statement": "Le sens anti-horaire d'une rotation correspond au :",
      "type": "mcq",
      "options": [
        "Sens inverse des aiguilles d'une montre",
        "Sens des aiguilles d'une montre",
        "Sens dans lequel on passe de 12 h à 3 h sur un cadran",
        "Sens qui dépend de la position du centre de la rotation"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Anti-horaire signifie le sens contraire des aiguilles d'une montre.",
        "Non, c'est le sens horaire.",
        "Non, passer de 12 h à 3 h, c'est suivre les aiguilles d'une montre : c'est le sens horaire.",
        "Non, le sens est indépendant du choix du centre : il est toujours repéré par rapport aux aiguilles d'une montre."
      ],
      "hint1": "Le préfixe « anti- » signifie contre ou inverse.",
      "hint2": "Le sens « horaire » est celui dans lequel tournent les aiguilles d'une montre.",
      "solution": "Le sens anti-horaire est le sens inverse des aiguilles d'une montre.",
      "skill": "Raisonner"
    },
    {
      "id": "G6-3",
      "chapterId": "G6",
      "tier": 3,
      "title": "Conservation par rotation (Brevet)",
      "statement": "Un triangle d'aire $18\\text{ cm}^2$ subit une rotation de $75^\\circ$. Quelle est l'aire du triangle image en $\\text{cm}^2$ ?",
      "type": "exact",
      "answer": "18",
      "hint1": "La rotation conserve les longueurs, les angles et les aires !",
      "hint2": "L'angle de $75^\\circ$ n'intervient pas dans le calcul : il indique seulement de combien la figure a tourné. Compare l'aire de l'image à celle du triangle de départ.",
      "solution": "La rotation conserve les aires. L'aire du triangle image est donc exactement égale à $18\\text{ cm}^2$.",
      "skill": "Raisonner"
    },
    {
      "id": "G6-4",
      "chapterId": "G6",
      "tier": 4,
      "title": "Défi : Deux quarts de tour",
      "statement": "$O$ et $A$ sont deux points tels que $OA = 6$ cm. On note $r$ la rotation de centre $O$ et d'angle $90^\\circ$ dans le sens des aiguilles d'une montre. $A'$ est l'image de $A$ par $r$, et $A''$ est l'image de $A'$ par $r$.\nQuelle est l'aire, en cm², du triangle $AA'A''$ ?",
      "type": "exact",
      "answer": "36",
      "hint1": "Fais une figure. Une rotation conserve les distances ; deux quarts de tour successifs dans le même sens reviennent à quelle transformation ?",
      "hint2": "Deux quarts de tour font un demi-tour de centre $O$ : $O$ est le milieu de $[AA'']$, donc $AA'' = 12$ cm. Cherche maintenant la hauteur du triangle issue de $A'$.",
      "solution": "1. La rotation conserve les distances : $OA' = OA'' = OA = 6$ cm.\n2. Deux quarts de tour font un demi-tour : $A''$ est le symétrique de $A$ par rapport à $O$. Donc $O$ est le milieu de $[AA'']$ et $AA'' = 12$ cm.\n3. Comme $\\widehat{AOA'} = 90^\\circ$, la droite $(OA')$ est perpendiculaire à $(AA'')$ : $[OA']$ est la hauteur issue de $A'$.\n4. Aire du triangle :\n$$\\frac{AA'' \\times OA'}{2} = \\frac{12 \\times 6}{2} = 36\\text{ cm}^2$$",
      "skill": "Raisonner"
    },
    {
      "id": "G6-5",
      "chapterId": "G6",
      "tier": 1,
      "title": "Identifier une transformation dans une frise",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 236 80\" style=\"max-width:236px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Frise de cinq motifs numérotés, tous de même orientation ; les motifs 1 et 3 sont mis en évidence\"><polygon points=\"16.8,65.6 25.6,65.6 25.6,48 43.2,48 43.2,30.4 16.8,30.4\" fill=\"rgba(37, 99, 235, 0.5)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" /><text x=\"30\" y=\"17\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">1</text><polygon points=\"60.8,65.6 69.6,65.6 69.6,48 87.2,48 87.2,30.4 60.8,30.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"74\" y=\"17\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">2</text><polygon points=\"104.8,65.6 113.6,65.6 113.6,48 131.2,48 131.2,30.4 104.8,30.4\" fill=\"rgba(16, 185, 129, 0.55)\" stroke=\"#059669\" stroke-width=\"1.6\" stroke-linejoin=\"round\" /><text x=\"118\" y=\"17\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">3</text><polygon points=\"148.8,65.6 157.6,65.6 157.6,48 175.2,48 175.2,30.4 148.8,30.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"162\" y=\"17\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">4</text><polygon points=\"192.8,65.6 201.6,65.6 201.6,48 219.2,48 219.2,30.4 192.8,30.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"206\" y=\"17\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">5</text><line x1=\"8\" y1=\"23\" x2=\"228\" y2=\"23\" stroke=\"#94a3b8\" stroke-width=\"1\" /><line x1=\"8\" y1=\"73\" x2=\"228\" y2=\"73\" stroke=\"#94a3b8\" stroke-width=\"1\" /></svg></div>Dans cette frise, tous les motifs ont la même taille et la même orientation. Quelle transformation permet de passer du motif 1 au motif 3 ?",
      "type": "mcq",
      "options": [
        "Une symétrie axiale",
        "Une rotation de $180^\\circ$",
        "Une translation",
        "Une homothétie de rapport $2$"
      ],
      "correctIndex": 2,
      "explanations": [
        "Non : une symétrie axiale retournerait le motif, comme dans un miroir.",
        "Non : un demi-tour mettrait le motif tête en bas.",
        "Exact ! Les deux motifs ont la même orientation : on passe de l'un à l'autre en glissant.",
        "Non : les deux motifs ont la même taille."
      ],
      "hint1": "Compare l'orientation des deux motifs : le motif a-t-il tourné ou a-t-il été retourné ?",
      "hint2": "Ici, les motifs ne sont ni retournés ni tête en bas : on les superpose en les faisant simplement glisser.",
      "solution": "Les motifs 1 et 3 ont la même taille et la même orientation : on passe de l'un à l'autre en glissant, sans tourner ni retourner. C'est une **translation**.",
      "skill": "Raisonner"
    },
    {
      "id": "G6-6",
      "chapterId": "G6",
      "tier": 2,
      "title": "Image d'un motif dans une rosace",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 224 224\" style=\"max-width:260px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Rosace de douze motifs numérotés dans le sens anti-horaire autour du point O ; le motif 3 est mis en évidence\"><polygon points=\"115.1,93.2 120.7,36.5 101.2,56 107.9,78\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"111.8\" y=\"23.8\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">1</text><polygon points=\"105.3,94.2 81.8,42.3 74.6,68.9 91.5,84.7\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"65.4\" y=\"36.3\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">2</text><polygon points=\"97.3,100 51,66.7 58.1,93.4 80.5,98.6\" fill=\"rgba(37, 99, 235, 0.5)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" /><text x=\"31.6\" y=\"70.4\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">3</text><polygon points=\"93.2,108.9 36.5,103.3 56,122.8 78,116.1\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"19.3\" y=\"116.7\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">4</text><polygon points=\"94.2,118.7 42.3,142.2 68.9,149.4 84.7,132.5\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"31.8\" y=\"163.1\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">5</text><polygon points=\"100,126.7 66.7,173 93.4,165.9 98.6,143.5\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"65.9\" y=\"196.9\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">6</text><polygon points=\"108.9,130.8 103.3,187.5 122.8,168 116.1,146\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"112.2\" y=\"209.2\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">7</text><polygon points=\"118.7,129.8 142.2,181.7 149.4,155.1 132.5,139.3\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"158.6\" y=\"196.7\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">8</text><polygon points=\"126.7,124 173,157.3 165.9,130.6 143.5,125.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"192.4\" y=\"162.6\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">9</text><polygon points=\"130.8,115.1 187.5,120.7 168,101.2 146,107.9\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"204.7\" y=\"116.3\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">10</text><polygon points=\"129.8,105.3 181.7,81.8 155.1,74.6 139.3,91.5\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"192.2\" y=\"69.9\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">11</text><polygon points=\"124,97.3 157.3,51 130.6,58.1 125.4,80.5\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"158.1\" y=\"36.1\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">12</text><circle cx=\"112\" cy=\"112\" r=\"9\" fill=\"#ffffff\" stroke=\"#b91c1c\" stroke-width=\"1.4\" /><text x=\"112\" y=\"116.3\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#b91c1c\">O</text></svg></div>Cette rosace est formée de $12$ motifs identiques, régulièrement répartis autour du point $O$ et numérotés dans le sens anti-horaire. Quel est le numéro de l'image du motif 3 par la rotation de centre $O$ et d'angle $150^\\circ$ dans le sens anti-horaire ?",
      "type": "exact",
      "answer": "8",
      "hint1": "Calcule l'angle entre deux motifs voisins, puis cherche de combien de motifs la rotation fait avancer.",
      "hint2": "L'angle entre deux motifs voisins est $\\dfrac{360^\\circ}{12}$ ; cherche combien de fois il est contenu dans $150^\\circ$.",
      "solution": "L'angle entre deux motifs voisins est $\\dfrac{360^\\circ}{12} = 30^\\circ$. Comme $\\dfrac{150}{30} = 5$, la rotation fait avancer de $5$ motifs dans le sens anti-horaire : les numéros augmentent de $5$.\nL'image du motif 3 est le motif $3 + 5 = 8$.",
      "skill": "Raisonner"
    },
    {
      "id": "G6-7",
      "chapterId": "G6",
      "tier": 3,
      "title": "Quarts de tour autour d'un point",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 120 120\" style=\"max-width:160px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Quatre carreaux numérotés dans le sens anti-horaire autour du point O\"><polygon points=\"60,60 110,60 110,10 60,10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"70,55 80,55 80,35 100,35 100,15 70,15\" fill=\"rgba(37, 99, 235, 0.5)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" /><circle cx=\"101\" cy=\"51\" r=\"8.5\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\" /><text x=\"101\" y=\"55\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">1</text><polygon points=\"60,60 60,10 10,10 10,60\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"55,50 55,40 35,40 35,20 15,20 15,50\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><circle cx=\"51\" cy=\"19\" r=\"8.5\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\" /><text x=\"51\" y=\"23\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">2</text><polygon points=\"60,60 10,60 10,110 60,110\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"50,65 40,65 40,85 20,85 20,105 50,105\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><circle cx=\"19\" cy=\"69\" r=\"8.5\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\" /><text x=\"19\" y=\"73\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">3</text><polygon points=\"60,60 60,110 110,110 110,60\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"65,70 65,80 85,80 85,100 105,100 105,70\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><circle cx=\"69\" cy=\"101\" r=\"8.5\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\" /><text x=\"69\" y=\"105\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">4</text><circle cx=\"60\" cy=\"60\" r=\"9\" fill=\"#ffffff\" stroke=\"#b91c1c\" stroke-width=\"1.4\" /><text x=\"60\" y=\"64.3\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#b91c1c\">O</text></svg></div>Les quatre carreaux se touchent au point $O$ et sont numérotés dans le sens anti-horaire. Quel est le numéro de l'image du carreau 1 par la rotation de centre $O$ et d'angle $270^\\circ$ dans le sens anti-horaire ?",
      "type": "exact",
      "answer": "4",
      "hint1": "Traduis l'angle en quarts de tour, sachant qu'un quart de tour mesure $90^\\circ$.",
      "hint2": "$270^\\circ$ correspond à plusieurs quarts de tour : dans le sens anti-horaire, chaque quart de tour fait passer au carreau suivant.",
      "solution": "Un quart de tour mesure $90^\\circ$ et $\\dfrac{270}{90} = 3$ : la rotation correspond à $3$ quarts de tour. En partant du carreau 1, dans le sens anti-horaire, on passe aux carreaux 2, 3 puis 4.\nL'image du carreau 1 est le **carreau 4** (cette rotation revient aussi à un quart de tour dans le sens horaire).",
      "skill": "Raisonner"
    },
    {
      "id": "G6-8",
      "chapterId": "G6",
      "tier": 3,
      "title": "Deux symétries successives dans une frise",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 236 80\" style=\"max-width:236px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Frise de cinq motifs numérotés, retournés un sur deux ; les motifs 1 et 3 sont mis en évidence\"><polygon points=\"16.8,65.6 23.4,65.6 23.4,45.8 45.4,39.2 16.8,30.4\" fill=\"rgba(37, 99, 235, 0.5)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" /><text x=\"30\" y=\"17\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">1</text><polygon points=\"87.2,65.6 80.6,65.6 80.6,45.8 58.6,39.2 87.2,30.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"74\" y=\"17\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">2</text><polygon points=\"104.8,65.6 111.4,65.6 111.4,45.8 133.4,39.2 104.8,30.4\" fill=\"rgba(16, 185, 129, 0.55)\" stroke=\"#059669\" stroke-width=\"1.6\" stroke-linejoin=\"round\" /><text x=\"118\" y=\"17\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">3</text><polygon points=\"175.2,65.6 168.6,65.6 168.6,45.8 146.6,39.2 175.2,30.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"162\" y=\"17\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">4</text><polygon points=\"192.8,65.6 199.4,65.6 199.4,45.8 221.4,39.2 192.8,30.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" stroke-linejoin=\"round\" /><text x=\"206\" y=\"17\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">5</text><line x1=\"8\" y1=\"23\" x2=\"228\" y2=\"23\" stroke=\"#94a3b8\" stroke-width=\"1\" /><line x1=\"8\" y1=\"73\" x2=\"228\" y2=\"73\" stroke=\"#94a3b8\" stroke-width=\"1\" /></svg></div>Dans cette frise, chaque motif est le symétrique du précédent par rapport à un axe vertical. On passe donc du motif 1 au motif 3 par deux symétries d'axes parallèles. Quelle unique transformation permet de passer directement du motif 1 au motif 3 ?",
      "type": "mcq",
      "options": [
        "Une translation",
        "Une symétrie axiale",
        "Une rotation de $180^\\circ$",
        "Une homothétie de rapport $2$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Après deux retournements, le motif retrouve son orientation : il a simplement glissé.",
        "Non : les motifs 1 et 3 ont la même orientation, le motif 3 n'est pas retourné.",
        "Non : le motif 3 n'est pas tête en bas.",
        "Non : les motifs ont la même taille."
      ],
      "hint1": "Regarde l'orientation du motif 3 par rapport à celle du motif 1.",
      "hint2": "Chaque symétrie axiale retourne le motif : que se passe-t-il après deux retournements ?",
      "solution": "Chaque symétrie axiale retourne le motif ; après deux symétries, le motif retrouve son orientation de départ. Le motif 3 a la même orientation et la même taille que le motif 1 : il s'en déduit par une **translation**.",
      "skill": "Raisonner"
    }
  ],
  "G7": [
    {
      "id": "G7-1",
      "chapterId": "G7",
      "tier": 1,
      "title": "Angles de triangles semblables",
      "statement": "Deux triangles ont des angles de même mesure deux à deux. Ces triangles sont dits :",
      "type": "mcq",
      "options": [
        "Semblables",
        "Égaux",
        "Isocèles",
        "Rectangles"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Par définition, deux triangles ayant leurs angles deux à deux de même mesure sont semblables.",
        "Pour être égaux, ils devraient en plus avoir des côtés de même longueur.",
        "Pas nécessairement isocèles.",
        "Pas nécessairement rectangles."
      ],
      "hint1": "Ils ont la même forme mais pas forcément la même taille.",
      "hint2": "C'est le mot employé pour deux figures dont l'une est un agrandissement ou une réduction de l'autre.",
      "solution": "Deux triangles ayant leurs angles deux à deux de même mesure sont des **triangles semblables**.",
      "skill": "Raisonner"
    },
    {
      "id": "G7-2",
      "chapterId": "G7",
      "tier": 2,
      "title": "Somme des angles et triangles semblables",
      "statement": "Un triangle 1 a pour angles $45^\\circ$ et $65^\\circ$. Un triangle 2 a pour angles $65^\\circ$ et $70^\\circ$. Sont-ils semblables ?",
      "type": "mcq",
      "options": [
        "Oui, car le troisième angle du triangle 1 vaut $180 - (45+65) = 70^\\circ$",
        "Non, car $45 \\neq 70$",
        "On ne peut pas savoir sans les longueurs des côtés",
        "Non, car la somme des angles est différente"
      ],
      "correctIndex": 0,
      "explanations": [
        "Très bien ! Le troisième angle du triangle 1 est $180 - 110 = 70^\\circ$. Leurs angles sont donc $45^\\circ, 65^\\circ, 70^\\circ$ : ils sont semblables.",
        "Attention, il faut calculer le troisième angle avant de comparer !",
        "Deux angles égaux suffisent pour affirmer que les triangles sont semblables.",
        "La somme des angles d'un triangle vaut toujours 180°."
      ],
      "hint1": "Calcule le 3ème angle du premier triangle en sachant que la somme vaut $180^\\circ$.",
      "hint2": "$180 - (45 + 65) = 70$. Compare avec le second triangle.",
      "solution": "Dans le triangle 1 : $180^\\circ - (45^\\circ + 65^\\circ) = 70^\\circ$. Les deux triangles ont donc les mêmes angles ($45^\\circ, 65^\\circ, 70^\\circ$), ils sont semblables.",
      "skill": "Raisonner"
    },
    {
      "id": "G7-2b",
      "chapterId": "G7",
      "tier": 2,
      "title": "Somme des angles et triangles non semblables",
      "statement": "Un triangle 1 a pour angles $50^\\circ$ et $60^\\circ$. Un triangle 2 a pour angles $50^\\circ$ et $75^\\circ$. Sont-ils semblables ?",
      "type": "mcq",
      "options": [
        "Non, car les angles du triangle 1 sont $50^\\circ, 60^\\circ, 70^\\circ$ et ceux du triangle 2 sont $50^\\circ, 75^\\circ, 55^\\circ$",
        "Oui, car ils ont tous les deux un angle de $50^\\circ$",
        "Oui, car la somme de leurs angles vaut $180^\\circ$",
        "On ne peut pas savoir sans connaître la longueur des côtés"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Le 3ème angle du triangle 1 est $180 - (50+60) = 70^\\circ$, alors que pour le triangle 2 c'est $180 - (50+75) = 55^\\circ$. Leurs angles ne sont pas deux à deux égaux.",
        "Avoir un seul angle égal ne suffit pas pour que deux triangles soient semblables.",
        "Tous les triangles ont une somme d'angles de 180°, cela ne prouve pas qu'ils sont semblables.",
        "Les trois mesures d'angles suffisent à prouver qu'ils ne sont pas semblables."
      ],
      "hint1": "Calcule le troisième angle de chaque triangle : $180 - (50+60)$ et $180 - (50+75)$.",
      "hint2": "Compare l'ensemble des trois angles de chaque triangle.",
      "solution": "Triangle 1 : angles $50^\\circ, 60^\\circ$ et $180 - 110 = 70^\\circ$.\nTriangle 2 : angles $50^\\circ, 75^\\circ$ et $180 - 125 = 55^\\circ$.\nLeurs angles ne sont pas deux à deux de même mesure, ils **ne sont pas semblables**.",
      "skill": "Raisonner"
    },
    {
      "id": "G7-3",
      "chapterId": "G7",
      "tier": 3,
      "title": "Proportionnalité des côtés (Brevet)",
      "statement": "Deux triangles $ABC$ et $DEF$ sont semblables. Les côtés de $ABC$ mesurent $4, 6$ et $8\\text{ cm}$. Le plus petit côté de $DEF$ mesure $6\\text{ cm}$. Quelle est la longueur du plus grand côté de $DEF$ (en cm) ?",
      "type": "exact",
      "answer": "12",
      "hint1": "Le coefficient d'agrandissement est le rapport des plus petits côtés : $k = \\frac{6}{4} = 1{,}5$.",
      "hint2": "Multiplie le plus grand côté ($8\\text{ cm}$) par $k = 1{,}5$.",
      "solution": "Le rapport d'agrandissement est $k = \\frac{6}{4} = 1{,}5$. Le plus grand côté de $DEF$ mesure donc :\n$$8 \\times 1{,}5 = 12\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "G7-4",
      "chapterId": "G7",
      "tier": 4,
      "title": "Défi : Une hauteur et des triangles semblables",
      "statement": "$ABC$ est un triangle rectangle en $A$ tel que $AB = 6$ cm et $AC = 8$ cm. $H$ est le pied de la hauteur issue de $A$.\nCalculer la longueur $BH$, en cm.",
      "type": "exact",
      "answer": "3,6",
      "hint1": "Commence par calculer $BC$. Cherche ensuite, sur la figure, un triangle semblable à $ABC$ dont $[BH]$ est un côté.",
      "hint2": "Les triangles $ABC$ et $HBA$ ont l'angle $\\widehat{B}$ en commun et chacun un angle droit : ils sont semblables. Écris l'égalité des rapports de leurs côtés homologues.",
      "solution": "1. Dans $ABC$ rectangle en $A$, d'après le théorème de Pythagore :\n$$BC^2 = 6^2 + 8^2 = 100 \\implies BC = 10\\text{ cm}$$\n2. Les triangles $ABC$ (rectangle en $A$) et $HBA$ (rectangle en $H$) ont l'angle $\\widehat{B}$ en commun : ils ont deux angles égaux deux à deux, ils sont donc semblables. Les sommets homologues sont $A$ et $H$, $B$ et $B$, $C$ et $A$.\n3. Les côtés homologues sont proportionnels :\n$$\\frac{BH}{BA} = \\frac{BA}{BC} \\implies BH = \\frac{BA^2}{BC} = \\frac{36}{10} = 3{,}6\\text{ cm}$$",
      "skill": "Raisonner"
    }
  ],
  "Org1": [
    {
      "id": "Org1-1",
      "chapterId": "Org1",
      "tier": 1,
      "title": "Calcul d'image par une formule",
      "statement": "Soit la fonction $f$ définie par $f(x) = 3x - 5$. Calculer l'image de $4$ par la fonction $f$.",
      "type": "exact",
      "answer": "7",
      "hint1": "Remplace $x$ par $4$ dans l'expression $3x - 5$.",
      "hint2": "$f(4) = 3 \\times 4 - 5 = 12 - 5$.",
      "solution": "$$f(4) = 3 \\times 4 - 5 = 12 - 5 = 7$$",
      "skill": "Calculer"
    },
    {
      "id": "Org1-2",
      "chapterId": "Org1",
      "tier": 1,
      "title": "Vocabulaire Image et Antécédent",
      "statement": "Si $f(2) = 8$, laquelle des affirmations suivantes est correcte ?",
      "type": "mcq",
      "options": [
        "$8$ est l'image de $2$ par $f$",
        "$2$ est l'image de $8$ par $f$",
        "$8$ est un antécédent de $2$",
        "$f$ est égale à $4$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Dans $f(x) = y$, $y$ est l'image et $x$ est l'antécédent.",
        "Attention, c'est l'inverse : 2 est l'antécédent.",
        "Non, 2 est l'antécédent de 8.",
        "$f$ est une fonction, pas un nombre."
      ],
      "hint1": "L'image sort de la fonction, l'antécédent entre dans la fonction.",
      "hint2": "$f(\\text{antécédent}) = \\text{image}$.",
      "solution": "Dans $f(2) = 8$, $2$ est l'antécédent et $8$ est son image par $f$.",
      "skill": "Raisonner"
    },
    {
      "id": "Org1-3",
      "chapterId": "Org1",
      "tier": 2,
      "title": "Recherche d'antécédent par équation",
      "statement": "Soit la fonction $g$ définie par $g(x) = 5x + 4$. Trouver l'antécédent de $19$ par $g$.",
      "type": "exact",
      "answer": "3",
      "hint1": "Résous l'équation $g(x) = 19$, c'est-à-dire $5x + 4 = 19$.",
      "hint2": "$5x = 19 - 4 = 15 \\implies x = 15/5$.",
      "solution": "$$5x + 4 = 19 \\implies 5x = 15 \\implies x = 3$$\nL'antécédent de 19 est 3.",
      "skill": "Calculer"
    },
    {
      "id": "Org1-4",
      "chapterId": "Org1",
      "tier": 3,
      "title": "Lecture sur courbe (Brevet)",
      "statement": "Sur un graphique, pour lire les antécédents d'un nombre $y = 3$, sur quel axe se place-t-on d'abord ?",
      "type": "mcq",
      "options": [
        "Sur l'axe des ordonnées (vertical)",
        "Sur l'axe des abscisses (horizontal)",
        "Sur l'origine (0;0)",
        "Sur la diagonale"
      ],
      "correctIndex": 0,
      "explanations": [
        "Bravo ! Pour trouver les antécédents d'une valeur, on se place sur l'axe des ordonnées ($y$), on trace l'horizontale jusqu'à la courbe, puis on lit les abscisses correspondantes.",
        "Sur l'axe des abscisses, on lirait l'image de 3.",
        "Non, ce n'est pas l'origine.",
        "Non."
      ],
      "hint1": "Ici, $3$ est une image, c'est-à-dire une valeur de $y$. Sur quel axe lit-on les valeurs de $y$ ?",
      "hint2": "Image = axe vertical ; Antécédent = axe horizontal.",
      "solution": "On se place sur l'axe des ordonnées à la valeur $y = 3$, puis on projette horizontalement sur la courbe pour lire les abscisses $x$ des points d'intersection.",
      "skill": "Raisonner"
    },
    {
      "id": "Org1-5",
      "chapterId": "Org1",
      "tier": 4,
      "title": "Défi : Les antécédents de zéro",
      "statement": "Soit la fonction $f$ définie par $f(x) = (x - 3)^2 - 16$.\nDéterminer les antécédents de $0$ par $f$.\nDonner la réponse sous la forme $(x_1 ; x_2)$ avec $x_1 < x_2$.",
      "type": "exact",
      "answer": "(-1;7)",
      "hint1": "Chercher les antécédents de $0$, c'est résoudre $f(x) = 0$. Remarque que $16$ est un carré : quelle identité remarquable peux-tu utiliser ?",
      "hint2": "$f(x) = (x - 3)^2 - 4^2$ : utilise $a^2 - b^2 = (a - b)(a + b)$ avec $a = x - 3$ et $b = 4$, puis applique la propriété du produit nul.",
      "solution": "1. On résout $f(x) = 0$, en factorisant la différence de deux carrés :\n$$(x - 3)^2 - 4^2 = (x - 3 - 4)(x - 3 + 4) = (x - 7)(x + 1)$$\n2. Un produit est nul si et seulement si l'un de ses facteurs est nul :\n$$x - 7 = 0 \\quad \\text{ou} \\quad x + 1 = 0 \\iff x = 7 \\quad \\text{ou} \\quad x = -1$$\nVérification : $f(7) = 4^2 - 16 = 0$ et $f(-1) = (-4)^2 - 16 = 0$.\nLes antécédents de $0$ sont $-1$ et $7$.",
      "skill": "Raisonner"
    }
  ],
  "Org2": [
    {
      "id": "Org2-1",
      "chapterId": "Org2",
      "tier": 1,
      "title": "Moyenne simple",
      "statement": "Calculer la moyenne simple de la série suivante : $12, 14, 16, 18$.",
      "type": "exact",
      "answer": "15",
      "hint1": "Additionne toutes les valeurs et divise par le nombre total de valeurs (4).",
      "hint2": "$\\frac{12 + 14 + 16 + 18}{4} = \\frac{60}{4}$.",
      "solution": "$$\\bar{x} = \\frac{12 + 14 + 16 + 18}{4} = \\frac{60}{4} = 15$$",
      "skill": "Calculer"
    },
    {
      "id": "Org2-2",
      "chapterId": "Org2",
      "tier": 1,
      "title": "Étendue d'une série",
      "statement": "Calculer l'étendue de la série : $4, 12, 7, 19, 15, 3$.",
      "type": "exact",
      "answer": "16",
      "hint1": "Formule : $\\text{Étendue} = \\text{Valeur Max} - \\text{Valeur Min}$.",
      "hint2": "Max = 19, Min = 3.",
      "solution": "$$\\text{Étendue} = 19 - 3 = 16$$",
      "skill": "Calculer"
    },
    {
      "id": "Org2-3",
      "chapterId": "Org2",
      "tier": 2,
      "title": "Médiane d'une série impaire",
      "statement": "Déterminer la médiane de la série de 7 notes : $8, 14, 6, 11, 15, 9, 13$.",
      "type": "exact",
      "answer": "11",
      "hint1": "Attention : commence obligatoirement par ranger les 7 valeurs dans l'ordre croissant !",
      "hint2": "Ordre : 6, 8, 9, 11, 13, 14, 15. La 4ème valeur est la médiane.",
      "solution": "1. Série ordonnée : $6, 8, 9, \\mathbf{11}, 13, 14, 15$.\n2. L'effectif total $N = 7$ est impair. La médiane est la $\\frac{7+1}{2} = 4^e$ valeur :\n$$Me = 11$$",
      "skill": "Raisonner"
    },
    {
      "id": "Org2-6",
      "chapterId": "Org2",
      "tier": 2,
      "title": "Lire un histogramme",
      "statement": "L'histogramme ci-dessous donne la répartition par âge des $40$ adhérents d'un club de randonnée.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 316 205\" width=\"316\" height=\"205\" style=\"max-width:316px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"308\" y2=\"160\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"163.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><line x1=\"40\" y1=\"148.3\" x2=\"308\" y2=\"148.3\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"151.8\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><line x1=\"40\" y1=\"136.7\" x2=\"308\" y2=\"136.7\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"140.2\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><line x1=\"40\" y1=\"125\" x2=\"308\" y2=\"125\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"128.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><line x1=\"40\" y1=\"113.3\" x2=\"308\" y2=\"113.3\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"116.8\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><line x1=\"40\" y1=\"101.7\" x2=\"308\" y2=\"101.7\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"105.2\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><line x1=\"40\" y1=\"90\" x2=\"308\" y2=\"90\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"93.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">6</text><line x1=\"40\" y1=\"78.3\" x2=\"308\" y2=\"78.3\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"81.8\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">7</text><line x1=\"40\" y1=\"66.7\" x2=\"308\" y2=\"66.7\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"70.2\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">8</text><line x1=\"40\" y1=\"55\" x2=\"308\" y2=\"55\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"58.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">9</text><line x1=\"40\" y1=\"43.3\" x2=\"308\" y2=\"43.3\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"46.8\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">10</text><line x1=\"40\" y1=\"31.7\" x2=\"308\" y2=\"31.7\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"35.2\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">11</text><line x1=\"40\" y1=\"20\" x2=\"308\" y2=\"20\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"23.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">12</text><rect x=\"52\" y=\"101.7\" width=\"48\" height=\"58.3\" fill=\"rgba(37, 99, 235, 0.55)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1\"/><rect x=\"100\" y=\"55\" width=\"48\" height=\"105.0\" fill=\"rgba(37, 99, 235, 0.55)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1\"/><rect x=\"148\" y=\"20\" width=\"48\" height=\"140.0\" fill=\"rgba(37, 99, 235, 0.55)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1\"/><rect x=\"196\" y=\"66.7\" width=\"48\" height=\"93.3\" fill=\"rgba(37, 99, 235, 0.55)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1\"/><rect x=\"244\" y=\"90\" width=\"48\" height=\"70.0\" fill=\"rgba(37, 99, 235, 0.55)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1\"/><line x1=\"52\" y1=\"160\" x2=\"52\" y2=\"164\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.1\"/><text x=\"52\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">20</text> <line x1=\"100\" y1=\"160\" x2=\"100\" y2=\"164\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.1\"/><text x=\"100\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">30</text> <line x1=\"148\" y1=\"160\" x2=\"148\" y2=\"164\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.1\"/><text x=\"148\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">40</text> <line x1=\"196\" y1=\"160\" x2=\"196\" y2=\"164\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.1\"/><text x=\"196\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">50</text> <line x1=\"244\" y1=\"160\" x2=\"244\" y2=\"164\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.1\"/><text x=\"244\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">60</text> <line x1=\"292\" y1=\"160\" x2=\"292\" y2=\"164\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.1\"/><text x=\"292\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">70</text> <line x1=\"40\" y1=\"160\" x2=\"308\" y2=\"160\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.3\"/><line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"12\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.3\"/><text x=\"44\" y=\"10\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">Effectif</text><text x=\"172\" y=\"196\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">Âge (en années)</text></svg></div>\nCombien d'adhérents ont moins de $40$ ans ?",
      "type": "exact",
      "answer": "14",
      "hint1": "La hauteur de chaque rectangle donne l'effectif de la classe. Repère les classes situées à gauche de la borne $40$.",
      "hint2": "La classe $[20 ; 30[$ contient $5$ adhérents : il reste à lire l'effectif de la classe suivante et à additionner.",
      "solution": "Avoir moins de $40$ ans, c'est appartenir à la classe $[20 ; 30[$ ou à la classe $[30 ; 40[$ (la borne $40$ est exclue).\nOn lit sur l'histogramme les effectifs $5$ et $9$ :\n$$5 + 9 = 14$$\nAinsi, $14$ adhérents ont moins de $40$ ans.",
      "skill": "Représenter"
    },
    {
      "id": "Org2-4",
      "chapterId": "Org2",
      "tier": 3,
      "title": "Moyenne pondérée (Brevet)",
      "statement": "Dans une classe, 10 élèves ont eu 8/20, 15 ont eu 12/20 et 5 ont eu 16/20. Quelle est la moyenne de la classe ? Donner sa valeur exacte sous forme de fraction irréductible, ou son arrondi au centième.",
      "type": "exact",
      "answer": "34/3",
      "acceptedAnswers": ["11,33"],
      "hint1": "Multiplie chaque note par son effectif, fais la somme et divise par l'effectif total ($10+15+5=30$).",
      "hint2": "Total = $(10 \\times 8) + (15 \\times 12) + (5 \\times 16) = 80 + 180 + 80 = 340$. Divise par 30.",
      "solution": "$$\\bar{x} = \\frac{10 \\times 8 + 15 \\times 12 + 5 \\times 16}{10 + 15 + 5} = \\frac{80 + 180 + 80}{30} = \\frac{340}{30} = \\frac{34}{3} \\approx 11{,}33$$",
      "skill": "Calculer"
    },
    {
      "id": "Org2-7",
      "chapterId": "Org2",
      "tier": 3,
      "title": "Préparer un histogramme : compter par classe",
      "statement": "On a relevé la masse (en grammes) de $20$ pommes :\n$$128 ; 104 ; 152 ; 140 ; 117 ; 135 ; 160 ; 143 ; 121 ; 149 ; 112 ; 138 ; 155 ; 120 ; 146 ; 131 ; 168 ; 126 ; 159 ; 142$$\nPour construire l'histogramme de cette série, on utilise les classes $[100 ; 120[$, $[120 ; 140[$, $[140 ; 160[$ et $[160 ; 180[$, et une pomme est représentée par $0{,}5$ cm de hauteur.\nQuelle est la hauteur, en cm, du rectangle de la classe $[140 ; 160[$ ?",
      "type": "exact",
      "answer": "4",
      "hint1": "Compte d'abord les valeurs $x$ telles que $140 \\le x < 160$, puis multiplie cet effectif par la hauteur qui représente une pomme.",
      "hint2": "La valeur $140$ est dans la classe, car la borne de gauche est incluse ; la valeur $160$ n'y est pas, car la borne de droite est exclue.",
      "solution": "On repère les valeurs $x$ telles que $140 \\le x < 160$ : $152$ ; $140$ ; $143$ ; $149$ ; $155$ ; $146$ ; $159$ ; $142$, soit $8$ valeurs. La valeur $160$ n'est pas comptée : elle appartient à la classe $[160 ; 180[$.\nLa hauteur du rectangle est donc :\n$$8 \\times 0{,}5 = 4 \\text{ cm}$$\nContrôle : les quatre classes ont pour effectifs $3$, $7$, $8$ et $2$, dont la somme vaut bien $20$.",
      "skill": "Représenter"
    },
    {
      "id": "Org2-5",
      "chapterId": "Org2",
      "tier": 4,
      "title": "Défi : Retrouver une valeur, puis la médiane",
      "statement": "Une série de $6$ valeurs est composée de $4$ ; $18$ ; $7$ ; $15$ ; $9$ et d'une valeur inconnue $x$. La moyenne de cette série est égale à $10$.\nQuelle est la médiane de cette série ?",
      "type": "exact",
      "answer": "8",
      "hint1": "Traduis la moyenne par une équation pour trouver $x$. Il faut ensuite ranger les $6$ valeurs dans l'ordre croissant avant de chercher la médiane.",
      "hint2": "La somme des $6$ valeurs doit être égale à $6 \\times 10 = 60$, et les cinq valeurs connues ont pour somme $53$.",
      "solution": "1. Recherche de $x$ :\n$$\\frac{53 + x}{6} = 10 \\iff 53 + x = 60 \\iff x = 7$$\n2. Série rangée : $4$ ; $7$ ; $7$ ; $9$ ; $15$ ; $18$.\n3. L'effectif est pair ($N = 6$) : la médiane est la demi-somme des 3e et 4e valeurs :\n$$Me = \\frac{7 + 9}{2} = 8$$",
      "skill": "Raisonner"
    }
  ],
  "Org3": [
    {
      "id": "Org3-1",
      "chapterId": "Org3",
      "tier": 1,
      "title": "Fonction linéaire et proportionnalité",
      "statement": "Parmi les fonctions suivantes, laquelle est une fonction linéaire ?",
      "type": "mcq",
      "options": [
        "$f(x) = 4x$",
        "$g(x) = 4x + 3$",
        "$h(x) = x^2$",
        "$k(x) = \\frac{4}{x}$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Une fonction linéaire est de la forme $f(x) = ax$. Sa droite passe par l'origine.",
        "C'est une fonction affine non linéaire ($b \\neq 0$).",
        "C'est la fonction carré.",
        "C'est la fonction inverse."
      ],
      "hint1": "Une fonction linéaire traduit une situation de proportionnalité ($ax$).",
      "hint2": "Elle n'a pas de terme constant ajouté.",
      "solution": "L'expression $f(x) = 4x$ est de la forme $ax$ : $f$ est une **fonction linéaire**.",
      "skill": "Raisonner"
    },
    {
      "id": "Org3-2",
      "chapterId": "Org3",
      "tier": 1,
      "title": "Ordonnée à l'origine",
      "statement": "Quelle est l'ordonnée à l'origine de la droite représentant la fonction affine $f$ définie par $f(x) = -3x + 7$ ?",
      "type": "exact",
      "answer": "7",
      "hint1": "Pour une fonction affine définie par $f(x) = ax + b$, l'ordonnée à l'origine est le nombre $b$.",
      "hint2": "Ici $a = -3$ et $b = 7$.",
      "solution": "Pour $f(x) = ax + b$, l'ordonnée à l'origine est $b = 7$ (point de coordonnées $(0 ; 7)$).",
      "skill": "Calculer"
    },
    {
      "id": "Org3-3",
      "chapterId": "Org3",
      "tier": 2,
      "title": "Droite représentant une fonction affine",
      "statement": "De gauche à droite, la droite qui représente la fonction $f$ définie par $f(x) = -5x + 12$ :",
      "type": "mcq",
      "options": [
        "Descend",
        "Monte",
        "Reste horizontale",
        "On ne peut pas savoir"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Le coefficient directeur $a = -5$ est négatif, la droite descend donc de gauche à droite.",
        "Non, la droite monterait si $a > 0$.",
        "Non, elle serait horizontale si $a = 0$.",
        "Le signe du coefficient directeur indique directement si la droite monte ou descend."
      ],
      "hint1": "Regarde le signe du coefficient directeur devant $x$ ($a$).",
      "hint2": "Si $a < 0$, la droite descend quand on la parcourt de gauche à droite.",
      "solution": "Comme le coefficient directeur $a = -5$ est négatif, la droite **descend** de gauche à droite.",
      "skill": "Raisonner"
    },
    {
      "id": "Org3-4",
      "chapterId": "Org3",
      "tier": 3,
      "title": "Calcul du coefficient directeur (Brevet)",
      "statement": "Une droite affine passe par les points $A(2 ; 3)$ et $B(6 ; 11)$. Quel est son coefficient directeur ?",
      "type": "exact",
      "answer": "2",
      "hint1": "Formule : $a = \\frac{y_B - y_A}{x_B - x_A}$.",
      "hint2": "$a = \\frac{11 - 3}{6 - 2} = \\frac{8}{4}$.",
      "solution": "$$a = \\frac{y_B - y_A}{x_B - x_A} = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = 2$$",
      "skill": "Calculer"
    },
    {
      "id": "Org3-5",
      "chapterId": "Org3",
      "tier": 4,
      "title": "Défi : De deux images à un antécédent",
      "statement": "$f$ est une fonction affine telle que $f(-1) = 7$ et $f(3) = -1$.\nQuel est l'antécédent de $0$ par $f$ ?",
      "type": "exact",
      "answer": "2,5",
      "hint1": "Écris $f(x) = ax + b$. Trouve $a$ à partir des deux images, puis $b$, et résous enfin $f(x) = 0$.",
      "hint2": "$a = \\frac{f(3) - f(-1)}{3 - (-1)} = \\frac{-8}{4} = -2$. Utilise ensuite l'une des deux égalités de l'énoncé pour trouver $b$.",
      "solution": "1. Coefficient directeur :\n$$a = \\frac{-1 - 7}{3 - (-1)} = \\frac{-8}{4} = -2$$\n2. Ordonnée à l'origine, avec $f(-1) = 7$ :\n$$-2 \\times (-1) + b = 7 \\iff 2 + b = 7 \\iff b = 5$$\nDonc $f(x) = -2x + 5$.\n3. Antécédent de $0$ :\n$$-2x + 5 = 0 \\iff x = \\frac{5}{2} = 2{,}5$$",
      "skill": "Raisonner"
    },
    {
      "id": "Org3-6",
      "chapterId": "Org3",
      "tier": 2,
      "title": "Partage selon un ratio",
      "statement": "Pour préparer $350$ mL d'une boisson, on mélange du sirop et de l'eau dans le ratio $1 : 6$ ($1$ part de sirop pour $6$ parts d'eau).\nQuel volume d'eau, en mL, faut-il verser ?",
      "type": "exact",
      "answer": "300",
      "hint1": "Compte le nombre total de parts, puis calcule la valeur d'une part.",
      "hint2": "Il y a $1 + 6 = 7$ parts au total : divise le volume total par ce nombre pour obtenir une part.",
      "solution": "Il y a $1 + 6 = 7$ parts, et une part vaut $350 \\div 7 = 50$ mL.\nL'eau représente $6$ parts : $6 \\times 50 = 300$ mL.",
      "skill": "Calculer"
    },
    {
      "id": "Org3-7",
      "chapterId": "Org3",
      "tier": 3,
      "title": "Ratio et fonction linéaire",
      "statement": "On mélange de la peinture bleue et de la peinture jaune dans le ratio $3 : 5$. On note $f(x)$ le volume de peinture jaune, en litres, à ajouter à $x$ litres de peinture bleue.\nCalculer $f(12)$.",
      "type": "exact",
      "answer": "20",
      "hint1": "Le ratio signifie que $\\frac{x}{3} = \\frac{y}{5}$, où $y$ est le volume de peinture jaune : exprime $y$ en fonction de $x$.",
      "hint2": "On obtient une fonction linéaire de coefficient $\\frac{5}{3}$ : il reste à l'appliquer à $x = 12$.",
      "solution": "$\\frac{x}{3} = \\frac{y}{5}$ donne $y = \\frac{5}{3}x$, donc $f(x) = \\frac{5}{3}x$ : c'est une fonction linéaire.\nAinsi $f(12) = \\frac{5}{3} \\times 12 = 20$ : il faut $20$ L de peinture jaune.",
      "skill": "Modéliser"
    }
  ],
  "Org4": [
    {
      "id": "Org4-1",
      "chapterId": "Org4",
      "tier": 1,
      "title": "Lancer de dé équilibré",
      "statement": "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?",
      "type": "exact",
      "answer": "0,5",
      "acceptedAnswers": ["50%"],
      "hint1": "Il y a 3 nombres pairs : 2, 4 et 6. Le nombre total de faces est 6.",
      "hint2": "$P = \\frac{\\text{nombre d'issues favorables}}{\\text{nombre total d'issues}} = \\frac{3}{6}$. Simplifie cette fraction.",
      "solution": "Les issues favorables sont $\\{2, 4, 6\\}$ (soit 3 issues sur 6) :\n$$P = \\frac{3}{6} = \\frac{1}{2} = 0{,}5$$",
      "skill": "Calculer"
    },
    {
      "id": "Org4-2",
      "chapterId": "Org4",
      "tier": 1,
      "title": "Événement contraire",
      "statement": "La probabilité qu'il pleuve demain est de $0{,}35$. Quelle est la probabilité qu'il ne pleuve pas ?",
      "type": "exact",
      "answer": "0,65",
      "hint1": "Formule : $P(\\overline{A}) = 1 - P(A)$.",
      "hint2": "Ici $P(A) = 0{,}35$ : calcule $1 - 0{,}35$.",
      "solution": "$$P(\\overline{A}) = 1 - P(A) = 1 - 0{,}35 = 0{,}65$$",
      "skill": "Calculer"
    },
    {
      "id": "Org4-3",
      "chapterId": "Org4",
      "tier": 2,
      "title": "Tirage dans une urne",
      "statement": "Une urne contient 4 boules rouges, 3 boules vertes et 5 boules bleues. On tire une boule au hasard. Quelle est la probabilité de tirer une boule rouge sous forme de fraction irréductible ?",
      "type": "exact",
      "answer": "1/3",
      "hint1": "Calcule le nombre total de boules dans l'urne : $4 + 3 + 5 = 12$.",
      "hint2": "Probabilité = $\\frac{4}{12}$. Simplifie la fraction.",
      "solution": "Nombre total de boules : $4 + 3 + 5 = 12$.\n$$P(\\text{Rouge}) = \\frac{4}{12} = \\frac{1}{3}$$",
      "skill": "Calculer"
    },
    {
      "id": "Org4-4",
      "chapterId": "Org4",
      "tier": 3,
      "title": "Deux lancers : tableau à double entrée (Brevet)",
      "statement": "On lance deux fois de suite une pièce équilibrée (Pile ou Face). Quelle est la probabilité d'obtenir deux fois Pile sous forme de fraction ?",
      "type": "exact",
      "answer": "1/4",
      "hint1": "Dresse un tableau à double entrée : le 1er lancer en lignes, le 2e lancer en colonnes. Chaque case est une issue.",
      "hint2": "Le tableau a $2$ lignes (Pile, Face) et $2$ colonnes (Pile, Face). Compte toutes ses cases, puis celles qui correspondent à (Pile ; Pile).",
      "solution": "On dresse le tableau à double entrée des issues :\n\n| 1er lancer / 2e lancer | Pile | Face |\n|:---:|:---:|:---:|\n| **Pile** | (P ; P) | (P ; F) |\n| **Face** | (F ; P) | (F ; F) |\n\nIl y a $2 \\times 2 = 4$ cases équiprobables, et une seule correspond à deux fois Pile :\n$$P(\\text{deux fois Pile}) = \\frac{1}{4} = 0{,}25$$",
      "skill": "Modéliser"
    },
    {
      "id": "Org4-5",
      "chapterId": "Org4",
      "tier": 4,
      "title": "Défi Seconde : Au moins un Pile en 3 lancers",
      "statement": "On lance 3 fois une pièce équilibrée. Quelle est la probabilité d'obtenir au moins une fois Pile ?",
      "type": "exact",
      "answer": "7/8",
      "hint1": "Pense à l'événement contraire : « n'obtenir aucun Pile », c'est-à-dire obtenir (Face, Face, Face).",
      "hint2": "Chaque lancer a $2$ résultats possibles : il y a $2 \\times 2 \\times 2$ issues équiprobables. Combien d'entre elles ne contiennent aucun Pile ?",
      "solution": "1. Issues : chaque lancer donne Pile (P) ou Face (F), soit $2 \\times 2 \\times 2 = 8$ issues équiprobables : PPP, PPF, PFP, PFF, FPP, FPF, FFP, FFF.\n2. Événement contraire : « obtenir 3 fois Face » correspond à la seule issue FFF :\n$$P(\\text{Face, Face, Face}) = \\frac{1}{8}$$\n3. Probabilité cherchée :\n$$P(\\text{au moins un Pile}) = 1 - \\frac{1}{8} = \\frac{7}{8}$$",
      "skill": "Raisonner"
    },
    {
      "id": "Org4-6",
      "chapterId": "Org4",
      "tier": 2,
      "title": "Simulation au tableur",
      "statement": "Pour simuler le lancer d'un dé équilibré, on recopie dans $2\\,000$ cellules d'un tableur la formule `=ALEA.ENTRE.BORNES(1;6)`. Le nombre 6 apparaît dans $348$ cellules.\nQuelle est la fréquence d'apparition du 6 dans cette simulation, en écriture décimale ?",
      "type": "exact",
      "answer": "0,174",
      "hint1": "La fréquence d'un résultat est le quotient de son nombre d'apparitions par le nombre total de lancers simulés.",
      "hint2": "Il faut calculer $\\dfrac{348}{2\\,000}$. Pose la division ou utilise la calculatrice.",
      "solution": "$$f = \\frac{348}{2\\,000} = 0{,}174$$\nCette fréquence est proche de la probabilité $\\dfrac{1}{6} \\approx 0{,}167$. Une autre simulation donnerait une fréquence un peu différente : elle ne fournit qu'une estimation de la probabilité.",
      "skill": "Modéliser"
    }
  ]
});
