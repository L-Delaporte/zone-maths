// Base de données des exercices interactifs par chapitre et par palier ZPD (1 à 4)
window.MATHS_EXERCISES = {
  "N1": [
    {
      "id": "N1-1",
      "chapterId": "N1",
      "tier": 1,
      "title": "Addition de fractions de même dénominateur",
      "statement": "Calculer l'expression suivante et donner le résultat sous la forme d'une fraction irréductible :\n$$A = \\frac{5}{7} + \\frac{8}{7}$$",
      "type": "exact",
      "answer": "13/7",
      "placeholder": "Ex: 13/7",
      "hint1": "Les deux fractions ont déjà le même dénominateur ($7$). Tu n'as qu'à additionner les numérateurs !",
      "hint2": "Formule : $\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d}$. Calcule $5 + 8$ et conserve le dénominateur $7$.",
      "solution": "Comme les dénominateurs sont identiques :\n$$A = \\frac{5 + 8}{7} = \\frac{13}{7}$$\n13 et 7 sont des nombres premiers entre eux, la fraction $\\frac{13}{7}$ est donc irréductible.",
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
      "placeholder": "Ex: 1/6",
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
      "placeholder": "Ex: 7/6",
      "hint1": "Le dénominateur commun est 12 (car $12 = 4 \\times 3$). Transforme $\\frac{3}{4}$ en douzièmes.",
      "hint2": "$\\frac{3}{4} = \\frac{3 \\times 3}{4 \\times 3} = \\frac{9}{12}$. Additionne ensuite $\\frac{9}{12} + \\frac{5}{12}$ puis simplifie.",
      "solution": "$$C = \\frac{3 \\times 3}{4 \\times 3} + \\frac{5}{12} = \\frac{9}{12} + \\frac{5}{12} = \\frac{14}{12}$$\nEn divisant par 2 le numérateur et le dénominateur :\n$$C = \\frac{7}{6}$$",
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
      "placeholder": "Ex: 6/5",
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
      "placeholder": "Ex: 11/15",
      "hint1": "Attention aux priorités : effectue d'abord la division $\\frac{3}{5} \\div \\frac{9}{10}$, puis soustrais le résultat à $\\frac{7}{5}$.",
      "hint2": "$\\frac{3}{5} \\div \\frac{9}{10} = \\frac{3}{5} \\times \\frac{10}{9} = \\frac{30}{45} = \\frac{2}{3}$. Il te reste à calculer $\\frac{7}{5} - \\frac{2}{3}$.",
      "solution": "1. Priorité à la division :\n$$\\frac{3}{5} \\div \\frac{9}{10} = \\frac{3}{5} \\times \\frac{10}{9} = \\frac{3 \\times 10}{5 \\times 9} = \\frac{30}{45} = \\frac{2}{3}$$\n2. Soustraction avec dénominateur commun $15$ :\n$$E = \\frac{7}{5} - \\frac{2}{3} = \\frac{7 \\times 3}{5 \\times 3} - \\frac{2 \\times 5}{3 \\times 5} = \\frac{21}{15} - \\frac{10}{15} = \\frac{11}{15}$$",
      "skill": "Raisonner"
    },
    {
      "id": "N1-7",
      "chapterId": "N1",
      "tier": 3,
      "title": "Problème de partage (DNB)",
      "statement": "Dans un collège, $\\frac{2}{5}$ des élèves de 3ème ont voté pour A et $\\frac{1}{3}$ pour B. Les autres ont voté pour C ou blanc.\nQuelle fraction des élèves représente ceux qui n'ont voté ni pour A ni pour B ?",
      "type": "exact",
      "answer": "4/15",
      "placeholder": "Ex: 4/15",
      "hint1": "Le total des élèves correspond à $1$. Calcule d'abord la part cumulée de A et B : $\\frac{2}{5} + \\frac{1}{3}$.",
      "hint2": "$\\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$. Soustrais ensuite cette fraction à $1$.",
      "solution": "1. Part totale des votants A et B :\n$$\\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$$\n2. Part restante :\n$$1 - \\frac{11}{15} = \\frac{15}{15} - \\frac{11}{15} = \\frac{4}{15}$$",
      "skill": "Modéliser"
    },
    {
      "id": "N1-8",
      "chapterId": "N1",
      "tier": 4,
      "title": "Défi Seconde : Somme des inverses",
      "statement": "Soient $a = \\frac{2}{3}$ et $b = \\frac{4}{5}$. On pose $S = \\frac{1}{a} + \\frac{1}{b}$.\nCalculer la valeur exacte de $S$ sous forme de fraction irréductible.",
      "type": "exact",
      "answer": "11/4",
      "placeholder": "Ex: 11/4",
      "hint1": "$\\frac{1}{a}$ est l'inverse de $a$. Comme $a = \\frac{2}{3}$, son inverse est $\\frac{3}{2}$. Fais de même pour $b$.",
      "hint2": "$S = \\frac{3}{2} + \\frac{5}{4}$. Réduis au même dénominateur ($4$).",
      "solution": "1. Inverses respectifs :\n$$\\frac{1}{a} = \\frac{3}{2} \\quad \\text{et} \\quad \\frac{1}{b} = \\frac{5}{4}$$\n2. Somme :\n$$S = \\frac{3}{2} + \\frac{5}{4} = \\frac{6}{4} + \\frac{5}{4} = \\frac{11}{4} = 2,75$$\n(Remarque : $\\frac{11}{4}$ est aussi un nombre décimal exact !)",
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
      "tier": 1,
      "title": "Identité remarquable $(a+b)^2$",
      "statement": "Développer à l'aide d'une identité remarquable :\n$$B = (x + 6)^2$$",
      "type": "mcq",
      "options": [
        "$x^2 + 12x + 36$",
        "$x^2 + 36$",
        "$x^2 + 6x + 36$",
        "$2x + 12$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Excellent ! $(a+b)^2 = a^2 + 2ab + b^2$, avec $2ab = 2 \\times x \\times 6 = 12x$.",
        "Erreur classique : tu as oublié le double produit $2ab = 2 \\times x \\times 6 = 12x$ !",
        "Attention, le double produit est $2 \\times x \\times 6 = 12x$, pas $6x$.",
        "Attention, tu as confondu carré et multiplication par 2."
      ],
      "hint1": "Formule : $(a + b)^2 = a^2 + 2ab + b^2$ avec $a = x$ et $b = 6$.",
      "hint2": "$a^2 = x^2$, $b^2 = 6^2 = 36$, et le double produit vaut $2 \\times x \\times 6 = 12x$.",
      "solution": "$$B = x^2 + 2 \\times x \\times 6 + 6^2 = x^2 + 12x + 36$$",
      "skill": "Calculer"
    },
    {
      "id": "N2-3",
      "chapterId": "N2",
      "tier": 1,
      "title": "Identité remarquable $(a-b)(a+b)$",
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
        "Il n'y a pas de double produit dans $(a-b)(a+b)$."
      ],
      "hint1": "Reconnais la 3ème identité remarquable : $(a-b)(a+b) = a^2 - b^2$.",
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
      "title": "Factorisation avec facteur commun évident",
      "statement": "Factoriser l'expression $E = 15x^2 - 10x$. Quel est le facteur commun maximal ?",
      "type": "mcq",
      "options": [
        "$5x(3x - 2)$",
        "$5(3x^2 - 2x)$",
        "$x(15x - 10)$",
        "$15x(x - 2)$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exactement ! $5x$ est le plus grand facteur commun : $15x^2 = 5x \\times 3x$ et $10x = 5x \\times 2$.",
        "On peut encore factoriser par $x$. Il faut factoriser au maximum !",
        "On peut aussi factoriser par 5. Le facteur commun maximal est $5x$.",
        "15 ne divise pas 10, ce n'est pas un facteur commun entier."
      ],
      "hint1": "Cherche le plus grand diviseur commun de 15 et 10, ainsi que la plus grande puissance de $x$ commune.",
      "hint2": "$15x^2 = 5x \\times 3x$ et $10x = 5x \\times 2$. Mets $5x$ en facteur.",
      "solution": "$$E = 5x \\times 3x - 5x \\times 2 = 5x(3x - 2)$$",
      "skill": "Raisonner"
    },
    {
      "id": "N2-6",
      "chapterId": "N2",
      "tier": 3,
      "title": "Développer une expression avec parenthèses précédées de (-) (Brevet)",
      "statement": "On considère l'expression $F = (2x + 3)^2 - (x - 1)(2x + 3)$.\nDévelopper et réduire $F$. Quel coefficient obtient-on devant $x^2$ ?",
      "type": "exact",
      "answer": "2",
      "placeholder": "Ex: 2",
      "hint1": "Développe $(2x+3)^2$ avec l'identité remarquable, et développe $(x-1)(2x+3)$ entre crochets pour ne pas te tromper avec le signe moins.",
      "hint2": "$(2x+3)^2 = 4x^2 + 12x + 9$. Le second terme est $(2x^2 + x - 3)$. Soustrais les deux : $(4x^2 - 2x^2) = 2x^2$.",
      "solution": "1. Développons $(2x+3)^2 = 4x^2 + 12x + 9$.\n2. Développons le produit : $(x - 1)(2x + 3) = 2x^2 + 3x - 2x - 3 = 2x^2 + x - 3$.\n3. Soustraction en changeant les signes :\n$$F = (4x^2 + 12x + 9) - (2x^2 + x - 3) = 4x^2 + 12x + 9 - 2x^2 - x + 3 = 2x^2 + 11x + 12$$\nLe coefficient devant $x^2$ est donc bien $2$.",
      "skill": "Calculer"
    },
    {
      "id": "N2-7",
      "chapterId": "N2",
      "tier": 4,
      "title": "Défi Seconde : Factorisation complexe",
      "statement": "Factoriser complètement l'expression :\n$$G = (2x - 3)^2 - 25$$",
      "type": "mcq",
      "options": [
        "$(2x + 2)(2x - 8)$ ou $4(x+1)(x-4)$",
        "$(2x - 28)(2x + 22)$",
        "$(2x - 8)^2$",
        "$4x^2 - 12x - 16$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Brillant ! C'est la forme $a^2 - b^2 = (a-b)(a+b)$ avec $a = (2x-3)$ et $b = 5$.",
        "Attention, $25 = 5^2$, donc $b = 5$ et non $25$.",
        "Non, ce n'est pas une identité $(a-b)^2$.",
        "C'est la forme développée, pas la forme factorisée !"
      ],
      "hint1": "Reconnais la structure $a^2 - b^2 = (a-b)(a+b)$, sachant que $25 = 5^2$.",
      "hint2": "Ici $a = (2x - 3)$ et $b = 5$. Écris $[(2x-3) - 5][(2x-3) + 5]$.",
      "solution": "$$G = (2x - 3)^2 - 5^2 = [ (2x - 3) - 5 ][ (2x - 3) + 5 ] = (2x - 8)(2x + 2) = 4(x - 4)(x + 1)$$",
      "skill": "Raisonner"
    }
  ],
  "G0": [
    {
      "id": "G0-1",
      "chapterId": "G0",
      "tier": 1,
      "title": "Calcul de l'hypoténuse (Triplet 3-4-5)",
      "statement": "Soit $ABC$ un triangle rectangle en $A$ tel que $AB = 3\\text{ cm}$ et $AC = 4\\text{ cm}$.\nCalculer la longueur de l'hypoténuse $BC$ (en cm).",
      "type": "exact",
      "answer": "5",
      "placeholder": "Ex: 5",
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
      "statement": "Soit $DEF$ un triangle rectangle en $D$ tel que $EF = 10\\text{ cm}$ (hypoténuse) et $DE = 6\\text{ cm}$.\nCalculer la longueur $DF$ (en cm).",
      "type": "exact",
      "answer": "8",
      "placeholder": "Ex: 8",
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
      "statement": "Un triangle a pour côtés $5\\text{ cm}, 12\\text{ cm}$ et $13\\text{ cm}$. Ce triangle est-il rectangle ?",
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
      "title": "Écran 16/9ème et Diagonale (Brevet)",
      "statement": "Un écran de télévision rectangulaire a une largeur de $80\\text{ cm}$ et une hauteur de $60\\text{ cm}$.\nQuelle est la longueur de sa diagonale en centimètres ?",
      "type": "exact",
      "answer": "100",
      "placeholder": "Ex: 100",
      "hint1": "La diagonale d'un rectangle forme un triangle rectangle avec la largeur et la hauteur. Applique Pythagore !",
      "hint2": "$d^2 = 80^2 + 60^2 = 6400 + 3600 = 10000$. Prends $\\sqrt{10000}$.",
      "solution": "Le rectangle est formé de deux triangles rectangles. Soit $d$ la diagonale :\n$$d^2 = 80^2 + 60^2 = 6400 + 3600 = 10\\,000$$\n$$d = \\sqrt{10\\,000} = 100\\text{ cm}$$\nLa diagonale de l'écran mesure donc exactement $100\\text{ cm}$ (soit $1\\text{ m}$).",
      "skill": "Modéliser"
    },
    {
      "id": "G0-5",
      "chapterId": "G0",
      "tier": 4,
      "title": "Défi Seconde : Diagonale d'un cube",
      "statement": "Soit un cube d'arête $a = 4\\text{ cm}$. On cherche la longueur de sa grande diagonale spatiale reliant deux sommets opposés.\nDonner la valeur exacte sous la forme $4\\sqrt{3}$. Que vaut le carré de cette diagonale ?",
      "type": "exact",
      "answer": "48",
      "placeholder": "Ex: 48",
      "hint1": "Dans l'espace, pour un pavé droit de côtés $L, l, h$, la diagonale spatiale vérifie $D^2 = L^2 + l^2 + h^2$.",
      "hint2": "Pour un cube de côté $a=4$ : $D^2 = 4^2 + 4^2 + 4^2 = 16 + 16 + 16$.",
      "solution": "1. Diagonale d'une face carrée : $d^2 = 4^2 + 4^2 = 32$.\n2. Grande diagonale dans le triangle rectangle vertical : $D^2 = d^2 + 4^2 = 32 + 16 = 48$.\nDonc le carré de la diagonale vaut $48$ (et $D = \\sqrt{48} = 4\\sqrt{3} \\approx 6,93\\text{ cm}$).",
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
      "placeholder": "Nombre (ex: 5)",
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
      "statement": "Soit un triangle $ABC$ avec $M \\in [AB], N \\in [AC]$ et $(MN) \\parallel (BC)$.\nOn donne $AB = 10\\text{ cm}, AM = 4\\text{ cm}$ et $AC = 15\\text{ cm}$.\nCalculer la longueur $AN$ (en cm).",
      "type": "exact",
      "answer": "6",
      "placeholder": "Nombre en cm (ex: 12)",
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
      "statement": "Les droites $(AB)$ et $(CD)$ sont sécantes en $O$, et $(AD) \\parallel (BC)$.\nOn donne $OA = 6\\text{ cm}, OB = 9\\text{ cm}$ et $OD = 4\\text{ cm}$.\nCalculer la longueur $OC$ (en cm).",
      "type": "exact",
      "answer": "6",
      "placeholder": "Nombre en cm (ex: 10)",
      "hint1": "Les points $A, O, B$ d'une part et $D, O, C$ d'autre part sont alignés. Les rapports égaux sont $\\frac{OA}{OB} = \\frac{OD}{OC} = \\frac{AD}{BC}$.",
      "hint2": "$\\frac{6}{9} = \\frac{4}{OC} \\implies 6 \\times OC = 9 \\times 4 = 36$.",
      "solution": "Les points $A, O, B$ d'une part et $D, O, C$ d'autre part sont alignés (les droites $(AB)$ et $(CD)$ sont sécantes en $O$).\nDe plus, les droites $(AD)$ et $(BC)$ sont parallèles ($(AD) \\parallel (BC)$).\nD'après le théorème de Thalès en configuration papillon :\n$$\\frac{OA}{OB} = \\frac{OD}{OC} = \\frac{AD}{BC}$$\nEn remplaçant par les valeurs données :\n$$\\frac{6}{9} = \\frac{4}{OC} \\implies OC = \\frac{9 \\times 4}{6} = \\frac{36}{6} = 6\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "G1-4",
      "chapterId": "G1",
      "tier": 3,
      "title": "Réciproque de Thalès et alignement (Brevet)",
      "statement": "Soient $A, M, B$ alignés dans cet ordre et $A, N, C$ alignés dans le même ordre.\nOn donne $AM = 3, AB = 7,5$ et $AN = 4, AC = 10$.\nLes droites $(MN)$ et $(BC)$ sont-elles parallèles ?",
      "type": "mcq",
      "options": [
        "Oui, car $\\frac{AM}{AB} = \\frac{AN}{AC} = 0,4$ et les points sont alignés dans le même ordre",
        "Non, car $7,5 - 3 \\neq 10 - 4$",
        "On ne peut pas savoir car on ne connaît pas la longueur $MN$",
        "Oui, mais seulement si le triangle est rectangle"
      ],
      "correctIndex": 0,
      "explanations": [
        "Parfait ! $\\frac{3}{7,5} = \\frac{2}{5} = 0,4$ et $\\frac{4}{10} = 0,4$. Les quotients sont égaux et les points alignés dans le même ordre : d'après la réciproque de Thalès, les droites sont parallèles.",
        "Attention, Thalès repose sur des rapports (quotients) et non sur des différences !",
        "Les deux premiers quotients suffisent pour démontrer le parallélisme.",
        "Thalès s'applique dans n'importe quel triangle, rectangle ou non."
      ],
      "hint1": "Calcule séparément les deux quotients : $\\frac{AM}{AB} = \\frac{3}{7,5}$ et $\\frac{AN}{AC} = \\frac{4}{10}$.",
      "hint2": "Vérifie s'ils sont égaux et rappelle la condition d'alignement ordonné.",
      "solution": "1. D'une part : $\\frac{AM}{AB} = \\frac{3}{7,5} = 0,4$.\n2. D'autre part : $\\frac{AN}{AC} = \\frac{4}{10} = 0,4$.\n3. Comme $\\frac{AM}{AB} = \\frac{AN}{AC}$ et que les points $A, M, B$ et $A, N, C$ sont alignés dans le même ordre, d'après la réciproque du théorème de Thalès, les droites $(MN)$ et $(BC)$ sont parallèles.",
      "skill": "Raisonner"
    },
    {
      "id": "G1-5",
      "chapterId": "G1",
      "tier": 4,
      "title": "Défi Seconde : Thalès et équation avec $x$",
      "statement": "Dans une configuration de Thalès avec $(MN) \\parallel (BC)$, on a $\\frac{AM}{AB} = \\frac{AN}{AC}$.\nOn pose $AM = x$, $MB = 4$ (donc $AB = x + 4$), $AN = 6$ et $AC = 14$.\nTrouver la valeur exacte de $x$.",
      "type": "exact",
      "answer": "3",
      "placeholder": "Nombre (ex: 5)",
      "hint1": "Les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont alignés. Écris l'équation : $\\frac{x}{x + 4} = \\frac{6}{14} = \\frac{3}{7}$.",
      "hint2": "Fais le produit en croix : $7 \\times x = 3 \\times (x + 4) \\implies 7x = 3x + 12$.",
      "solution": "Les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont alignés.\nDe plus, les droites $(MN)$ et $(BC)$ sont parallèles ($(MN) \\parallel (BC)$).\nD'après le théorème de Thalès :\n$$\\frac{AM}{AB} = \\frac{AN}{AC}$$\n1. Équation de proportion avec $AM = x$ et $AB = x + 4$ :\n$$\\frac{x}{x+4} = \\frac{6}{14} = \\frac{3}{7}$$\n2. Produit en croix :\n$$7x = 3(x + 4) \\implies 7x = 3x + 12 \\implies 4x = 12 \\implies x = 3\\text{ cm}$$",
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
      "hint2": "La première syllabe est CAH : C pour Cosinus, A pour Adjacent, H pour Hypoténuse.",
      "solution": "D'après la définition du cosinus dans un triangle rectangle (CAH) :\n$$\\cos(\\widehat{A}) = \\frac{\\text{Côté Adjacent}}{\\text{Hypoténuse}}$$",
      "skill": "Raisonner"
    },
    {
      "id": "G2-2",
      "chapterId": "G2",
      "tier": 1,
      "title": "Calcul d'un côté avec le sinus",
      "statement": "Soit $ABC$ un triangle rectangle en $A$ tel que l'hypoténuse $BC = 10\\text{ cm}$ et $\\widehat{B} = 30^\\circ$.\nSachant que $\\sin(30^\\circ) = 0,5$, calculer la longueur du côté opposé $AC$ (en cm).",
      "type": "exact",
      "answer": "5",
      "placeholder": "Ex: 5",
      "hint1": "Dans le triangle rectangle en $A$, $\\sin(\\widehat{B}) = \\frac{AC}{BC}$.",
      "hint2": "$AC = BC \\times \\sin(30^\\circ) = 10 \\times 0,5$.",
      "solution": "$$\\sin(\\widehat{B}) = \\frac{AC}{BC} \\implies AC = BC \\times \\sin(30^\\circ) = 10 \\times 0,5 = 5\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "G2-3",
      "chapterId": "G2",
      "tier": 2,
      "title": "Déterminer un angle au degré près",
      "statement": "Soit $DEF$ un triangle rectangle en $D$ tel que $DE = 6\\text{ cm}$ (adjacent) et $DF = 8\\text{ cm}$ (opposé à $\\widehat{E}$).\nQuelle formule permet de calculer l'angle $\\widehat{E}$ ?",
      "type": "mcq",
      "options": [
        "$\\tan(\\widehat{E}) = \\frac{8}{6}$ donc $\\widehat{E} = \\arctan(8/6) \\approx 53^\\circ$",
        "$\\cos(\\widehat{E}) = \\frac{8}{6}$",
        "$\\sin(\\widehat{E}) = \\frac{6}{8}$",
        "$\\tan(\\widehat{E}) = \\frac{6}{8}$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! On connaît le côté opposé ($DF=8$) et le côté adjacent ($DE=6$), donc on utilise la tangente (TOA). $\\arctan(8/6) \\approx 53,13^\\circ \\approx 53^\\circ$.",
        "Impossible : un cosinus ne peut pas dépasser 1 ($8/6 > 1$) !",
        "Le côté hypoténuse n'est pas 8, 8 est le côté opposé.",
        "Attention, la tangente est Opposé / Adjacent = $8/6$, pas $6/8$."
      ],
      "hint1": "Par rapport à l'angle $\\widehat{E}$, $DF$ est le côté opposé et $DE$ le côté adjacent. Quel rapport utilise opposé et adjacent ?",
      "hint2": "C'est la tangente : $\\tan(\\widehat{E}) = \\frac{\\text{opposé}}{\\text{adjacent}} = \\frac{DF}{DE} = \\frac{8}{6}$.",
      "solution": "Dans le triangle $DEF$ rectangle en $D$ :\n$$\\tan(\\widehat{E}) = \\frac{DF}{DE} = \\frac{8}{6} = \\frac{4}{3} \\approx 1,333$$\nÀ la calculatrice en mode Degré :\n$$\\widehat{E} = \\arctan\\left(\\frac{4}{3}\\right) \\approx 53,13^\\circ \\approx 53^\\circ$$",
      "skill": "Raisonner"
    },
    {
      "id": "G2-4",
      "chapterId": "G2",
      "tier": 3,
      "title": "Hauteur d'un arbre / Tâche Brevet",
      "statement": "Un observateur placé à $20\\text{ m}$ du pied d'un arbre vertical voit son sommet sous un angle de $35^\\circ$ avec l'horizontale.\nEn arrondissant $\\tan(35^\\circ) \\approx 0,7$, quelle est la hauteur de l'arbre en mètres ?",
      "type": "exact",
      "answer": "14",
      "placeholder": "Ex: 14",
      "hint1": "Le sol et l'arbre forment un triangle rectangle. La distance au pied est le côté adjacent ($20\\text{ m}$) et la hauteur est le côté opposé.",
      "hint2": "$\\tan(35^\\circ) = \\frac{h}{20} \\implies h = 20 \\times \\tan(35^\\circ) = 20 \\times 0,7$.",
      "solution": "Soit $h$ la hauteur de l'arbre :\n$$\\tan(35^\\circ) = \\frac{\\text{côté opposé}}{\\text{côté adjacent}} = \\frac{h}{20}$$\n$$h = 20 \\times \\tan(35^\\circ) \\approx 20 \\times 0,7 = 14\\text{ m}$$",
      "skill": "Modéliser"
    },
    {
      "id": "G2-5",
      "chapterId": "G2",
      "tier": 4,
      "title": "Défi Seconde : Formule $\\cos^2(x) + \\sin^2(x) = 1$",
      "statement": "Sans calculatrice, sachant que $\\cos(x) = \\frac{4}{5}$, calculer la valeur exacte de $\\sin(x)$ sous forme de fraction.",
      "type": "exact",
      "answer": "3/5",
      "placeholder": "Ex: 3/5",
      "hint1": "Utilise la formule fondamentale : $\\cos^2(x) + \\sin^2(x) = 1$.",
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
      "statement": "Résoudre dans $\\mathbb{R}$ l'équation : $4x = 28$. Que vaut $x$ ?",
      "type": "exact",
      "answer": "7",
      "placeholder": "Ex: 7",
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
      "statement": "Résoudre dans $\\mathbb{R}$ l'équation : $5x + 3 = 38$. Que vaut $x$ ?",
      "type": "exact",
      "answer": "7",
      "placeholder": "Ex: 7",
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
      "statement": "Résoudre dans $\\mathbb{R}$ : $7x - 5 = 3x + 15$. Quelle est la solution ?",
      "type": "exact",
      "answer": "5",
      "placeholder": "Ex: 5",
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
      "statement": "Combien de solutions réelles possède l'équation $x^2 = 49$, et quelles sont-elles ?",
      "type": "mcq",
      "options": [
        "Deux solutions : $7$ et $-7$",
        "Une seule solution : $7$",
        "Aucune solution",
        "Deux solutions : $\\sqrt{49}$ et $\\sqrt{-49}$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Parfait ! Comme $49 > 0$, l'équation $x^2 = 49$ admet deux solutions réelles opposées : $\\sqrt{49} = 7$ et $-\\sqrt{49} = -7$.",
        "Attention, $(-7)^2 = (-7) \\times (-7) = 49$, donc $-7$ est aussi une solution !",
        "Faux, 49 est un nombre positif.",
        "Attention, la racine carrée d'un nombre négatif n'existe pas dans $\\mathbb{R}$."
      ],
      "hint1": "Pense aux nombres dont le carré vaut 49. N'oublie pas le signe moins !",
      "hint2": "$7^2 = 49$ et $(-7)^2 = 49$.",
      "solution": "Comme $49 > 0$, l'équation $x^2 = 49$ admet deux solutions réelles distinctes :\n$$x = \\sqrt{49} = 7 \\quad \\text{ou} \\quad x = -\\sqrt{49} = -7$$",
      "skill": "Raisonner"
    },
    {
      "id": "N4-6",
      "chapterId": "N4",
      "tier": 4,
      "title": "Défi Seconde : Équation produit après factorisation",
      "statement": "Résoudre dans $\\mathbb{R}$ l'équation : $(2x + 5)(x - 4) + (2x + 5)(3x + 1) = 0$.\nQuelle est la plus grande des deux solutions ?",
      "type": "exact",
      "answer": "0.75",
      "placeholder": "Ex: 0.75 ou 3/4",
      "hint1": "Ne développe surtout pas ! Factorise d'abord par le facteur commun $(2x + 5)$.",
      "hint2": "On obtient $(2x + 5)[(x - 4) + (3x + 1)] = 0 \\implies (2x + 5)(4x - 3) = 0$. Résous ensuite chaque facteur.",
      "solution": "1. Factorisons par $(2x + 5)$ :\n$$(2x + 5)[(x - 4) + (3x + 1)] = 0 \\implies (2x + 5)(4x - 3) = 0$$\n2. Équation produit nul :\n$$2x + 5 = 0 \\implies x = -\\frac{5}{2} = -2,5$$\n$$4x - 3 = 0 \\implies 4x = 3 \\implies x = \\frac{3}{4} = 0,75$$\nLa plus grande solution est $0,75$ (ou $\\frac{3}{4}$).",
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
      "solution": "17 est premier car ses seuls diviseurs sont 1 et 17. 1 n'est pas premier par convention, 9 et 27 sont des multiples de 3.",
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
      "title": "Problème de sachets identiques (Brevet)",
      "statement": "Un confiseur a 108 sucettes et 180 bonbons. Il souhaite composer le plus grand nombre possible de sachets identiques, sans reste.\nCombien de sachets identiques peut-il préparer ?",
      "type": "exact",
      "answer": "36",
      "placeholder": "Ex: 36",
      "hint1": "Le nombre de sachets doit diviser à la fois 108 et 180. On cherche le Plus Grand Commun Diviseur (PGCD).",
      "hint2": "Décompose 108 et 180 en facteurs premiers : $108 = 2^2 \\times 3^3$ et $180 = 2^2 \\times 3^2 \\times 5$. Prends les facteurs communs aux plus petites puissances.",
      "solution": "1. Décompositions en facteurs premiers :\n$$108 = 2^2 \\times 3^3$$\n$$180 = 2^2 \\times 3^2 \\times 5$$\n2. Facteurs communs avec les plus petits exposants :\n$$\\text{PGCD}(108, 180) = 2^2 \\times 3^2 = 4 \\times 9 = 36$$\nLe confiseur peut préparer au maximum 36 sachets identiques (contenant chacun $108/36 = 3$ sucettes et $180/36 = 5$ bonbons).",
      "skill": "Modéliser"
    },
    {
      "id": "N5-5",
      "chapterId": "N5",
      "tier": 4,
      "title": "Défi Seconde : Démontrer avec un contre-exemple",
      "statement": "L'affirmation suivante est-elle vraie ou fausse ?\n« La somme de deux nombres premiers est toujours un nombre premier. »",
      "type": "mcq",
      "options": [
        "Fausse, car par exemple $3 + 5 = 8$, qui est un nombre pair non premier",
        "Vraie, car les nombres premiers ne sont divisibles que par 1 et eux-mêmes",
        "Vraie, c'est un théorème d'Euclide",
        "Fausse, uniquement si l'un des deux nombres est 0"
      ],
      "correctIndex": 0,
      "explanations": [
        "Excellent raisonnement ! Un seul contre-exemple suffit à réfuter une proposition universelle : $3$ et $5$ sont premiers, mais $3 + 5 = 8$ n'est pas premier.",
        "Non, l'addition de deux impairs donne un nombre pair, qui est donc divisible par 2 (sauf si l'un d'eux est 2).",
        "Faux, ce théorème n'existe pas.",
        "0 n'est pas un nombre premier de toute façon."
      ],
      "hint1": "Pour prouver qu'une affirmation est fausse, trouve un simple contre-exemple.",
      "hint2": "Prends deux petits nombres premiers impairs, par exemple 3 et 5. Que vaut leur somme ?",
      "solution": "L'affirmation est fausse. En effet, 3 et 5 sont deux nombres premiers, mais leur somme $3 + 5 = 8$ est un nombre composé divisible par 2 et 4.",
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
      "type": "exact",
      "answer": "=",
      "placeholder": "Ex: =",
      "hint1": "C'est le symbole d'égalité mathématique.",
      "hint2": "Sans ce signe `=`, le tableur interprète la saisie comme du texte ordinaire !",
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
      "hint2": "De B1 à B3, on descend de 2 lignes : A1 devient donc A3.",
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
      "placeholder": "Ex: 120",
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
      "placeholder": "Ex: 35",
      "hint1": "Exécute le script pas à pas en suivant la valeur de $x$ à chaque tour de boucle.",
      "hint2": "Tour 1 : $2(5)-3=7$. Tour 2 : $2(7)-3=11$. Tour 3 : $2(11)-3=19$. Calcule le Tour 4 !",
      "solution": "Suivi des étapes :\n• Départ : $x = 5$\n• Tour 1 : $x = 2 \\times 5 - 3 = 7$\n• Tour 2 : $x = 2 \\times 7 - 3 = 11$\n• Tour 3 : $x = 2 \\times 11 - 3 = 19$\n• Tour 4 : $x = 2 \\times 19 - 3 = 35$\nÀ la fin de l'exécution, $x = 35$.",
      "skill": "Calculer"
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
        "Parfait ! Règle $10^n \\times 10^m = 10^{n+m}$. On additionne les exposants : $4 + 3 = 7$.",
        "Tu as multiplié les exposants au lieu de les additionner !",
        "Tu as soustrait les exposants.",
        "On ne multiplie pas la base 10."
      ],
      "hint1": "Règle opératoire : $a^n \\times a^m = a^{n+m}$.",
      "hint2": "Additionne les deux exposants.",
      "solution": "$$A = 10^{4+3} = 10^7$$",
      "skill": "Calculer"
    },
    {
      "id": "N3-2",
      "chapterId": "N3",
      "tier": 1,
      "title": "Puissance négative",
      "statement": "Quelle est l'écriture décimale du nombre $10^{-3}$ ?",
      "type": "exact",
      "answer": "0.001",
      "placeholder": "Ex: 0.001",
      "hint1": "$10^{-n} = \\frac{1}{10^n}$. Ici, il y a 3 zéros au total avant le chiffre 1.",
      "hint2": "$10^{-3} = \\frac{1}{1000} = 0,001$.",
      "solution": "$$10^{-3} = \\frac{1}{10^3} = \\frac{1}{1000} = 0,001$$",
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
        "$4,5 \\times 10^4$",
        "$45 \\times 10^3$",
        "$0,45 \\times 10^5$",
        "$4,5 \\times 10^{-4}$"
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
      "solution": "$$45\\,000 = 4,5 \\times 10^4$$",
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
        "Excellent ! $\\frac{12}{3} = 4$ et $10^{5 - 8} = 10^{-3}$.",
        "Attention au signe de l'exposant : $5 - 8 = -3$ !",
        "Attention, on divise $12$ par $3$, on ne soustrait pas.",
        "On soustrait les exposants lors d'une division, on ne les additionne pas."
      ],
      "hint1": "Sépare la fraction en deux : $\\frac{12}{3} \\times \\frac{10^5}{10^8}$.",
      "hint2": "Règle : $\\frac{10^n}{10^m} = 10^{n-m}$.",
      "solution": "$$B = \\frac{12}{3} \\times \\frac{10^5}{10^8} = 4 \\times 10^{5-8} = 4 \\times 10^{-3}$$",
      "skill": "Calculer"
    },
    {
      "id": "N3-5",
      "chapterId": "N3",
      "tier": 4,
      "title": "Défi Seconde : Vitesse de la lumière",
      "statement": "La lumière parcourt environ $3 \\times 10^8\\text{ m/s}$. La distance Terre-Soleil est d'environ $1,5 \\times 10^{11}\\text{ m}$.\nCombien de secondes met la lumière du Soleil pour atteindre la Terre ?",
      "type": "exact",
      "answer": "500",
      "placeholder": "Ex: 500",
      "hint1": "Formule : $t = \\frac{d}{v}$.",
      "hint2": "$t = \\frac{1,5 \\times 10^{11}}{3 \\times 10^8} = \\frac{1,5}{3} \\times 10^{11 - 8} = 0,5 \\times 10^3$.",
      "solution": "$$t = \\frac{d}{v} = \\frac{1,5 \\times 10^{11}}{3 \\times 10^8} = 0,5 \\times 10^3 = 500\\text{ secondes}$$\n(soit environ 8 minutes et 20 secondes).",
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
      "placeholder": "Ex: 12",
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
      "statement": "Une figure d'aire $8\\text{ cm}^2$ subit un agrandissement de rapport $k = 2,5$.\nQuelle est l'aire de la figure obtenue en $\\text{cm}^2$ ?",
      "type": "exact",
      "answer": "50",
      "placeholder": "Ex: 50",
      "hint1": "Dans une homothétie de rapport $k$, les aires sont multipliées par $k^2$.",
      "hint2": "$k^2 = 2,5^2 = 6,25$. Calcule $8 \\times 6,25$.",
      "solution": "$$\\text{Aire}' = k^2 \\times \\text{Aire} = 2,5^2 \\times 8 = 6,25 \\times 8 = 50\\text{ cm}^2$$",
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
      "placeholder": "Ex: 120",
      "hint1": "Le rapport d'agrandissement de la miniature vers le réel est $2$. Les volumes sont multipliés par $2^3$.",
      "hint2": "$2^3 = 8$. Multiplie $15$ par $8$.",
      "solution": "Pour passer de la maquette au modèle réel, le coefficient d'agrandissement est $2$. Le volume est multiplié par $2^3 = 8$ :\n$$V = 15 \\times 8 = 120\\text{ mL}$$",
      "skill": "Modéliser"
    },
    {
      "id": "G3-4",
      "chapterId": "G3",
      "tier": 4,
      "title": "Défi Seconde : Rapport négatif et centre",
      "statement": "Si une homothétie de centre $O$ et de rapport $k = -2$ transforme $A$ en $A'$, laquelle des affirmations suivantes est correcte ?",
      "type": "mcq",
      "options": [
        "$O$ est situé entre $A$ et $A'$ et $OA' = 2 \\times OA$",
        "$A$ est situé entre $O$ et $A'$",
        "$OA' = -2 \\times OA$",
        "L'aire est multipliée par $-4$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Comme $k < 0$, $A$ et $A'$ sont de part et d'autre du centre $O$, et les distances sont positives ($OA' = 2 OA$).",
        "Non, cela correspondrait à un rapport positif $k > 1$.",
        "Une distance $OA'$ ne peut jamais être négative.",
        "Une aire est toujours multipliée par $k^2 = (-2)^2 = +4 > 0$."
      ],
      "hint1": "Quand le rapport $k$ est négatif, le centre $O$ se trouve au milieu des deux points.",
      "hint2": "Les vecteurs sont opposés : $\\vec{OA'} = -2 \\vec{OA}$.",
      "solution": "Un rapport négatif $k = -2$ provoque un demi-tour par rapport au centre $O$. Le point $O$ est donc situé entre $A$ et $A'$, et la distance $OA' = |-2| \\times OA = 2 OA$.",
      "skill": "Raisonner"
    }
  ],
  "G4": [
    {
      "id": "G4-1",
      "chapterId": "G4",
      "tier": 1,
      "title": "Aire de la sphère",
      "statement": "Quelle est la formule exacte de l'aire d'une sphère de rayon $R$ ?",
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
      "hint1": "Une aire est de dimension 2 (donc $R^2$).",
      "hint2": "L'aire de la sphère vaut exactement 4 fois l'aire d'un grand disque équatorial.",
      "solution": "$$\\text{Aire} = 4 \\pi R^2$$",
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
      "placeholder": "Ex: 36",
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
      "placeholder": "Ex: 4",
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
      "statement": "Un point $P$ situé sur l'Équateur a une latitude de combien de degrés ?",
      "type": "exact",
      "answer": "0",
      "placeholder": "Ex: 0",
      "hint1": "L'Équateur est le parallèle d'origine pour la mesure des latitudes.",
      "hint2": "La latitude varie de 0° à l'Équateur jusqu'à 90° aux Pôles.",
      "solution": "L'Équateur est le parallèle de référence, sa latitude est donc exactement de $0^\\circ$.",
      "skill": "Raisonner"
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
      "placeholder": "Ex: 120",
      "hint1": "$V = L \\times l \\times h$.",
      "hint2": "$8 \\times 5 = 40$, puis $40 \\times 3 = 120$.",
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
      "placeholder": "Ex: 120",
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
      "title": "Défi Seconde : Cône tronqué",
      "statement": "Un cône de révolution de volume $80\\text{ cm}^3$ est coupé à mi-hauteur ($k = 0,5$) par un plan parallèle à sa base. Quel est le volume du petit cône supérieur en $\\text{cm}^3$ ?",
      "type": "exact",
      "answer": "10",
      "placeholder": "Ex: 10",
      "hint1": "Le volume est multiplié par $k^3$.",
      "hint2": "$k^3 = 0,5^3 = 0,125 = \\frac{1}{8}$. Calcule $\\frac{80}{8}$.",
      "solution": "$$V' = k^3 \\times V = (0,5)^3 \\times 80 = \\frac{1}{8} \\times 80 = 10\\text{ cm}^3$$",
      "skill": "Calculer"
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
      "placeholder": "Ex: 60",
      "hint1": "Un tour complet vaut $360^\\circ$. Divise par le nombre de sommets.",
      "hint2": "$360 \\div 6 = 60$.",
      "solution": "$$\\alpha = \\frac{360^\\circ}{6} = 60^\\circ$$",
      "skill": "Calculer"
    },
    {
      "id": "G6-2",
      "chapterId": "G6",
      "tier": 2,
      "title": "Sens trigonométrique et horaire",
      "statement": "Par définition, le sens anti-horaire (ou direct) correspond au :",
      "type": "mcq",
      "options": [
        "Sens inverse des aiguilles d'une montre",
        "Sens des aiguilles d'une montre",
        "Sens vers le bas uniquement",
        "Sens aléatoire"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Anti-horaire signifie le sens contraire des aiguilles d'une montre.",
        "Non, c'est le sens horaire.",
        "Non, cela n'a pas de rapport avec le bas.",
        "Non, le sens est rigoureusement défini."
      ],
      "hint1": "Le préfixe « anti- » signifie contre ou inverse.",
      "hint2": "Anti-horaire = contraire des aiguilles.",
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
      "placeholder": "Ex: 18",
      "hint1": "La rotation est une isométrie : elle conserve les longueurs, les angles et les aires !",
      "hint2": "L'aire ne change pas lors d'une rotation.",
      "solution": "La rotation conserve les aires. L'aire du triangle image est donc exactement égale à $18\\text{ cm}^2$.",
      "skill": "Raisonner"
    },
    {
      "id": "G6-4",
      "chapterId": "G6",
      "tier": 4,
      "title": "Défi Seconde : Rotation de 180°",
      "statement": "Une rotation d'angle $180^\\circ$ autour d'un centre $O$ est exactement équivalente à une :",
      "type": "mcq",
      "options": [
        "Symétrie centrale de centre $O$",
        "Symétrie axiale",
        "Translation",
        "Homothétie de rapport $+2$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Parfait ! Faire un demi-tour ($180^\\circ$) autour de $O$ revient exactement à effectuer une symétrie centrale de centre $O$.",
        "Non, la symétrie axiale nécessite un axe de pliage.",
        "Non, la translation déplace sans faire tourner.",
        "Une rotation conserve les dimensions, elle ne multiplie pas par 2."
      ],
      "hint1": "Un angle de 180° correspond à un demi-tour.",
      "hint2": "Le point $O$ est le milieu du segment $[MM']$.",
      "solution": "Une rotation de $180^\\circ$ de centre $O$ est identique à la **symétrie centrale** de centre $O$.",
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
      "hint2": "C'est la définition officielle du chapitre.",
      "solution": "Deux triangles ayant leurs angles deux à deux de même mesure sont des **triangles semblables**.",
      "skill": "Raisonner"
    },
    {
      "id": "G7-2",
      "chapterId": "G7",
      "tier": 2,
      "title": "Somme des angles et similitude",
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
      "title": "Somme des angles et non-similitude",
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
      "placeholder": "Ex: 12",
      "hint1": "Le coefficient d'agrandissement est le rapport des plus petits côtés : $k = \\frac{6}{4} = 1,5$.",
      "hint2": "Multiplie le plus grand côté ($8\\text{ cm}$) par $k = 1,5$.",
      "solution": "Le rapport d'agrandissement est $k = \\frac{6}{4} = 1,5$. Le plus grand côté de $DEF$ mesure donc :\n$$8 \\times 1,5 = 12\\text{ cm}$$",
      "skill": "Calculer"
    },
    {
      "id": "G7-4",
      "chapterId": "G7",
      "tier": 4,
      "title": "Défi Seconde : Lien Thalès et Triangles Semblables",
      "statement": "La configuration de Thalès (droites parallèles coupant deux sécantes) crée toujours deux triangles qui sont :",
      "type": "mcq",
      "options": [
        "Semblables",
        "Égaux",
        "Équilatéraux",
        "Symétriques"
      ],
      "correctIndex": 0,
      "explanations": [
        "Parfait ! Les droites parallèles créent des angles correspondants égaux, donc les triangles sont semblables.",
        "Ils ne sont égaux que si le rapport vaut 1.",
        "Non, aucune raison qu'ils soient équilatéraux.",
        "Pas nécessairement symétriques."
      ],
      "hint1": "Les côtés sont proportionnels d'après Thalès.",
      "hint2": "Deux triangles à côtés proportionnels ont la même forme : ils sont semblables.",
      "solution": "Le théorème de Thalès garantit que les côtés sont proportionnels et les angles égaux : les triangles formés sont donc **semblables**.",
      "skill": "Raisonner"
    }
  ],
  "Org1": [
    {
      "id": "Org1-1",
      "chapterId": "Org1",
      "tier": 1,
      "title": "Calcul d'image par une formule",
      "statement": "Soit la fonction $f(x) = 3x - 5$. Calculer l'image de $4$ par la fonction $f$.",
      "type": "exact",
      "answer": "7",
      "placeholder": "Ex: 7",
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
      "statement": "Soit la fonction $g(x) = 5x + 4$. Trouver l'antécédent de $19$ par $g$.",
      "type": "exact",
      "answer": "3",
      "placeholder": "Ex: 3",
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
      "hint1": "Les antécédents se lisent sur les abscisses ($x$), donc on part de l'ordonnée ($y$) pour les trouver.",
      "hint2": "Image = axe vertical ; Antécédent = axe horizontal.",
      "solution": "On se place sur l'axe des ordonnées à la valeur $y = 3$, puis on projette horizontalement sur la courbe pour lire les abscisses $x$ des points d'intersection.",
      "skill": "Raisonner"
    },
    {
      "id": "Org1-5",
      "chapterId": "Org1",
      "tier": 4,
      "title": "Défi Seconde : Nombre d'antécédents",
      "statement": "Soit la fonction $h(x) = x^2$. Combien d'antécédents le nombre $16$ possède-t-il par $h$ ?",
      "type": "exact",
      "answer": "2",
      "placeholder": "Ex: 2",
      "hint1": "Résous $x^2 = 16$. N'oublie pas le nombre négatif !",
      "hint2": "$4^2 = 16$ et $(-4)^2 = 16$.",
      "solution": "$$x^2 = 16 \\iff x = 4 \\quad \\text{ou} \\quad x = -4$$\nLe nombre 16 possède exactement 2 antécédents : $-4$ et $4$.",
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
      "placeholder": "Ex: 15",
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
      "placeholder": "Ex: 16",
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
      "placeholder": "Ex: 11",
      "hint1": "Attention : commence obligatoirement par ranger les 7 valeurs dans l'ordre croissant !",
      "hint2": "Ordre : 6, 8, 9, 11, 13, 14, 15. La 4ème valeur est la médiane.",
      "solution": "1. Série ordonnée : $6, 8, 9, \\mathbf{11}, 13, 14, 15$.\n2. L'effectif total $N = 7$ est impair. La médiane est la $\\frac{7+1}{2} = 4^e$ valeur :\n$$Me = 11$$",
      "skill": "Raisonner"
    },
    {
      "id": "Org2-4",
      "chapterId": "Org2",
      "tier": 3,
      "title": "Moyenne pondérée (Brevet)",
      "statement": "Dans une classe, 10 élèves ont eu 8/20, 15 ont eu 12/20 et 5 ont eu 16/20. Quelle est la moyenne de la classe ?",
      "type": "exact",
      "answer": "11.33",
      "placeholder": "Ex: 11.33 ou 34/3",
      "hint1": "Multiplie chaque note par son effectif, fais la somme et divise par l'effectif total ($10+15+5=30$).",
      "hint2": "Total = $(10 \\times 8) + (15 \\times 12) + (5 \\times 16) = 80 + 180 + 80 = 340$. Divise par 30.",
      "solution": "$$\\bar{x} = \\frac{10 \\times 8 + 15 \\times 12 + 5 \\times 16}{10 + 15 + 5} = \\frac{80 + 180 + 80}{30} = \\frac{340}{30} = \\frac{34}{3} \\approx 11,33$$",
      "skill": "Calculer"
    },
    {
      "id": "Org2-5",
      "chapterId": "Org2",
      "tier": 4,
      "title": "Défi Seconde : Médiane paire",
      "statement": "Déterminer la médiane de la série de 6 valeurs : $4, 7, 9, 12, 15, 18$.",
      "type": "exact",
      "answer": "10.5",
      "placeholder": "Ex: 10.5",
      "hint1": "L'effectif total est pair ($N = 6$). La médiane est la moyenne entre la 3e et la 4e valeur.",
      "hint2": "Fais la moyenne de 9 et 12 : $\\frac{9 + 12}{2}$.",
      "solution": "Comme l'effectif total est pair ($N=6$), la médiane est la demi-somme des 3e et 4e valeurs ordonnées :\n$$Me = \\frac{9 + 12}{2} = \\frac{21}{2} = 10,5$$",
      "skill": "Calculer"
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
      "solution": "La fonction $f(x) = 4x$ est de la forme $ax$ : c'est une **fonction linéaire**.",
      "skill": "Raisonner"
    },
    {
      "id": "Org3-2",
      "chapterId": "Org3",
      "tier": 1,
      "title": "Ordonnée à l'origine",
      "statement": "Quelle est l'ordonnée à l'origine de la droite représentant la fonction affine $f(x) = -3x + 7$ ?",
      "type": "exact",
      "answer": "7",
      "placeholder": "Ex: 7",
      "hint1": "Pour une fonction affine $f(x) = ax + b$, l'ordonnée à l'origine est le nombre $b$.",
      "hint2": "Ici $a = -3$ et $b = 7$.",
      "solution": "Pour $f(x) = ax + b$, l'ordonnée à l'origine est $b = 7$ (point de coordonnées $(0 ; 7)$).",
      "skill": "Calculer"
    },
    {
      "id": "Org3-3",
      "chapterId": "Org3",
      "tier": 2,
      "title": "Sens de variation d'une fonction affine",
      "statement": "La fonction $f(x) = -5x + 12$ est :",
      "type": "mcq",
      "options": [
        "Strictement décroissante (la droite descend)",
        "Strictement croissante (la droite monte)",
        "Constante (la droite est horizontale)",
        "On ne peut pas savoir"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Le coefficient directeur $a = -5$ est négatif, la droite descend donc de gauche à droite.",
        "Non, la droite monterait si $a > 0$.",
        "Non, elle serait constante si $a = 0$.",
        "Le signe du coefficient directeur détermine directement le sens de variation."
      ],
      "hint1": "Regarde le signe du coefficient directeur devant $x$ ($a$).",
      "hint2": "Si $a < 0$, la fonction est décroissante.",
      "solution": "Comme le coefficient directeur $a = -5 < 0$, la fonction $f$ est **strictement décroissante**.",
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
      "placeholder": "Ex: 2",
      "hint1": "Formule : $a = \\frac{y_B - y_A}{x_B - x_A}$.",
      "hint2": "$a = \\frac{11 - 3}{6 - 2} = \\frac{8}{4}$.",
      "solution": "$$a = \\frac{y_B - y_A}{x_B - x_A} = \\frac{11 - 3}{6 - 2} = \\frac{8}{4} = 2$$",
      "skill": "Calculer"
    },
    {
      "id": "Org3-5",
      "chapterId": "Org3",
      "tier": 4,
      "title": "Défi Seconde : Déterminer la fonction complète",
      "statement": "Soit une fonction affine $f(x) = ax + b$ telle que son coefficient directeur vaut $a = 3$ et $f(2) = 10$. Que vaut l'ordonnée à l'origine $b$ ?",
      "type": "exact",
      "answer": "4",
      "placeholder": "Ex: 4",
      "hint1": "Écris $f(2) = 3 \\times 2 + b = 10$.",
      "hint2": "$6 + b = 10 \\implies b = 10 - 6$.",
      "solution": "$$f(2) = 3(2) + b = 10 \\implies 6 + b = 10 \\implies b = 4$$\nLa fonction est donc $f(x) = 3x + 4$.",
      "skill": "Calculer"
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
      "answer": "0.5",
      "placeholder": "Ex: 0.5 ou 1/2",
      "hint1": "Il y a 3 nombres pairs : 2, 4 et 6. Le nombre total de faces est 6.",
      "hint2": "$P = \\frac{3}{6} = \\frac{1}{2} = 0,5$.",
      "solution": "Les issues favorables sont $\\{2, 4, 6\\}$ (soit 3 issues sur 6) :\n$$P = \\frac{3}{6} = \\frac{1}{2} = 0,5$$",
      "skill": "Calculer"
    },
    {
      "id": "Org4-2",
      "chapterId": "Org4",
      "tier": 1,
      "title": "Événement contraire",
      "statement": "La probabilité qu'il pleuve demain est de $0,35$. Quelle est la probabilité qu'il ne pleuve pas ?",
      "type": "exact",
      "answer": "0.65",
      "placeholder": "Ex: 0.65",
      "hint1": "Formule : $P(\\overline{A}) = 1 - P(A)$.",
      "hint2": "$1 - 0,35 = 0,65$.",
      "solution": "$$P(\\overline{A}) = 1 - P(A) = 1 - 0,35 = 0,65$$",
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
      "placeholder": "Ex: 1/3",
      "hint1": "Calcule le nombre total de boules dans l'urne : $4 + 3 + 5 = 12$.",
      "hint2": "Probabilité = $\\frac{4}{12}$. Simplifie la fraction.",
      "solution": "Nombre total de boules : $4 + 3 + 5 = 12$.\n$$P(\\text{Rouge}) = \\frac{4}{12} = \\frac{1}{3}$$",
      "skill": "Calculer"
    },
    {
      "id": "Org4-4",
      "chapterId": "Org4",
      "tier": 3,
      "title": "Arbre à deux épreuves (Brevet)",
      "statement": "On lance deux fois de suite une pièce équilibrée (Pile ou Face). Quelle est la probabilité d'obtenir deux fois Pile sous forme de fraction ?",
      "type": "exact",
      "answer": "1/4",
      "placeholder": "Ex: 1/4",
      "hint1": "À chaque lancer, la probabilité de Pile est $\\frac{1}{2}$. Multiplie le long du chemin.",
      "hint2": "$\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.",
      "solution": "D'après la règle du produit dans un arbre de probabilités :\n$$P(\\text{Pile, Pile}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4} = 0,25$$",
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
      "placeholder": "Ex: 7/8",
      "hint1": "Pense à l'événement contraire : « n'obtenir aucun Pile », c'est-à-dire obtenir (Face, Face, Face).",
      "hint2": "$P(\\text{aucun Pile}) = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$. Donc $P = 1 - \\frac{1}{8}$.",
      "solution": "1. Événement contraire : « obtenir 3 fois Face » :\n$$P(\\text{Face, Face, Face}) = \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}$$\n2. Probabilité cherchée :\n$$P(\\text{au moins un Pile}) = 1 - \\frac{1}{8} = \\frac{7}{8}$$",
      "skill": "Raisonner"
    }
  ]
};
