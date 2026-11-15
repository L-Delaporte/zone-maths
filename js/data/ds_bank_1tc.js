/**
 * Banque d'exercices de devoirs surveillés : Première générale, enseignement scientifique (tronc commun, sans spécialité mathématiques).
 * Format et contraintes : voir js/data/ds_bank_1ere.js (au moins 16 exercices par chapitre, 3 par difficulté).
 */
window.MATHS_DS_BANK = window.MATHS_DS_BANK || {};
Object.assign(window.MATHS_DS_BANK, {
  "1TC1": [
    {
      "id": "1TC1-ds-01",
      "title": "Proportions dans un club sportif",
      "difficulty": 1,
      "points": 4,
      "statement": "Un club sportif compte $240$ adhérents, dont $45\\,\\%$ de femmes. Le calcul se fait sans calculatrice.\n\n1. Combien le club compte-t-il de femmes ?\n2. Un tiers des femmes du club pratiquent la compétition. Combien de femmes font de la compétition ? Quelle proportion des adhérents du club cela représente-t-il ?\n3. Le club compte $60$ juniors. Exprimer la proportion de juniors parmi les adhérents sous forme de fraction irréductible, de nombre décimal et de pourcentage.",
      "solution": "**1.** $45\\,\\%$ de $240$ : $0{,}45 \\times 240 = 108$. Le club compte $108$ femmes.\n\n**2.** $\\frac{1}{3} \\times 108 = 36$ femmes font de la compétition. Proportion parmi les adhérents : $\\frac{36}{240} = \\frac{3}{20} = 0{,}15$, soit $15\\,\\%$.\n\nOn retrouve ce résultat par la proportion d'une proportion : $\\frac{1}{3} \\times 0{,}45 = 0{,}15$.\n\n**3.** $\\frac{60}{240} = \\frac{1}{4} = 0{,}25 = 25\\,\\%$."
    },
    {
      "id": "1TC1-ds-02",
      "title": "Coefficients multiplicateurs",
      "difficulty": 1,
      "points": 4,
      "statement": "1. Donner le coefficient multiplicateur associé à chacune des évolutions suivantes : une hausse de $18\\,\\%$ ; une baisse de $35\\,\\%$ ; une hausse de $200\\,\\%$.\n2. Donner le taux d'évolution (en pourcentage) associé à chacun des coefficients multiplicateurs suivants : $0{,}92$ ; $1{,}075$ ; $0{,}4$.\n3. Un vélo coûte $150$ €. Son prix augmente de $18\\,\\%$. Calculer son nouveau prix.",
      "solution": "**1.** Hausse de $18\\,\\%$ : $CM = 1 + 0{,}18 = 1{,}18$. Baisse de $35\\,\\%$ : $CM = 1 - 0{,}35 = 0{,}65$. Hausse de $200\\,\\%$ : $CM = 1 + 2 = 3$ (la quantité est triplée).\n\n**2.** $0{,}92 - 1 = -0{,}08$ : baisse de $8\\,\\%$. $1{,}075 - 1 = 0{,}075$ : hausse de $7{,}5\\,\\%$. $0{,}4 - 1 = -0{,}6$ : baisse de $60\\,\\%$.\n\n**3.** $150 \\times 1{,}18 = 150 + 0{,}18 \\times 150 = 150 + 27 = 177$. Le vélo coûte désormais $177$ €."
    },
    {
      "id": "1TC1-ds-03",
      "title": "Population d'un village",
      "difficulty": 1,
      "points": 4,
      "statement": "La population d'un village est passée de $2\\,500$ habitants en 2015 à $2\\,800$ habitants en 2020, puis à $2\\,660$ habitants en 2025.\n\n1. Calculer le taux d'évolution de la population entre 2015 et 2020.\n2. Calculer le taux d'évolution de la population entre 2020 et 2025.\n3. Calculer le taux d'évolution global entre 2015 et 2025, puis vérifier ce résultat à l'aide des coefficients multiplicateurs.",
      "solution": "**1.** $t_1 = \\frac{2\\,800 - 2\\,500}{2\\,500} = \\frac{300}{2\\,500} = 0{,}12$ : hausse de $12\\,\\%$.\n\n**2.** $t_2 = \\frac{2\\,660 - 2\\,800}{2\\,800} = \\frac{-140}{2\\,800} = -0{,}05$ : baisse de $5\\,\\%$.\n\n**3.** $t = \\frac{2\\,660 - 2\\,500}{2\\,500} = \\frac{160}{2\\,500} = 0{,}064$ : hausse de $6{,}4\\,\\%$.\n\nVérification : $CM = 1{,}12 \\times 0{,}95 = 1{,}064$, ce qui correspond bien à $+6{,}4\\,\\%$ (et non à $12 - 5 = 7\\,\\%$)."
    },
    {
      "id": "1TC1-ds-04",
      "title": "Pourcentages de tête",
      "difficulty": 1,
      "points": 3,
      "statement": "Effectuer les calculs suivants sans calculatrice, en détaillant la méthode.\n\n1. Calculer $15\\,\\%$ de $240$.\n2. Calculer $25\\,\\%$ de $64$.\n3. Calculer $120\\,\\%$ de $45$.\n4. Le nombre $30$ représente $12\\,\\%$ d'un nombre $N$. Déterminer $N$.",
      "solution": "**1.** $10\\,\\%$ de $240$ vaut $24$ et $5\\,\\%$ en est la moitié, soit $12$ : $15\\,\\%$ de $240$ vaut $24 + 12 = 36$.\n\n**2.** Prendre $25\\,\\%$, c'est prendre le quart : $64 \\div 4 = 16$.\n\n**3.** $120\\,\\% = 100\\,\\% + 20\\,\\%$ : $45 + 9 = 54$ (car $20\\,\\%$ de $45$ vaut $2 \\times 4{,}5 = 9$).\n\n**4.** $0{,}12 \\times N = 30$, donc $N = \\frac{30}{0{,}12} = \\frac{3\\,000}{12} = 250$. Vérification : $12\\,\\%$ de $250$ vaut $25 + 5 = 30$."
    },
    {
      "id": "1TC1-ds-05",
      "title": "Soldes successives",
      "difficulty": 2,
      "points": 4,
      "statement": "Un manteau coûte $120$ €. Pendant les soldes, son prix baisse de $30\\,\\%$, puis une remise supplémentaire de $20\\,\\%$ est appliquée sur le prix soldé.\n\n1. Calculer le prix du manteau après la première baisse.\n2. Calculer le prix final du manteau.\n3. Déterminer le taux d'évolution global du prix. Un client affirme que le manteau a été soldé à $-50\\,\\%$ : a-t-il raison ?",
      "solution": "**1.** $120 \\times 0{,}7 = 84$ : après la première baisse, le manteau coûte $84$ €.\n\n**2.** $84 \\times 0{,}8 = 67{,}2$ : le prix final est de $67{,}20$ €.\n\n**3.** $CM = 0{,}7 \\times 0{,}8 = 0{,}56$, donc $t = 0{,}56 - 1 = -0{,}44$ : le prix a baissé de $44\\,\\%$.\n\nLe client a tort : les taux ne s'additionnent pas, car la seconde remise s'applique au prix déjà soldé. Avec $-50\\,\\%$, le manteau coûterait $60$ € et non $67{,}20$ €."
    },
    {
      "id": "1TC1-ds-06",
      "title": "Association sportive d'un lycée",
      "difficulty": 2,
      "points": 5,
      "statement": "Un lycée accueille $1\\,200$ élèves, dont $35\\,\\%$ sont en classe de Première. Parmi les élèves de Première, $40\\,\\%$ sont inscrits à l'association sportive.\n\n1. Combien le lycée compte-t-il d'élèves de Première ?\n2. Combien d'élèves de Première sont inscrits à l'association sportive ?\n3. Quelle proportion des élèves du lycée sont des élèves de Première inscrits à l'association sportive ? Retrouver ce résultat par un produit de proportions.\n4. Les élèves de Première représentent $28\\,\\%$ des membres de l'association sportive. Combien l'association compte-t-elle de membres ?",
      "solution": "**1.** $0{,}35 \\times 1\\,200 = 420$ élèves de Première.\n\n**2.** $0{,}4 \\times 420 = 168$ élèves de Première sont inscrits.\n\n**3.** $\\frac{168}{1\\,200} = 0{,}14$, soit $14\\,\\%$ des élèves. Par un produit de proportions : $0{,}35 \\times 0{,}4 = 0{,}14$.\n\n**4.** Si $M$ est le nombre de membres, $0{,}28 \\times M = 168$, donc $M = \\frac{168}{0{,}28} = \\frac{16\\,800}{28} = 600$. L'association compte $600$ membres."
    },
    {
      "id": "1TC1-ds-07",
      "title": "Retrouver un prix initial",
      "difficulty": 2,
      "points": 4,
      "statement": "1. Après une hausse de $20\\,\\%$, un livre coûte $54$ €. Quel était son prix avant la hausse ?\n2. Après une baisse de $25\\,\\%$, un jeu coûte $36$ €. Quel était son prix avant la baisse ?\n3. Pour la question 1, un élève retire $20\\,\\%$ de $54$ €. Quel résultat obtient-il ? Expliquer pourquoi sa méthode est fausse.",
      "solution": "**1.** Le prix initial $P$ vérifie $P \\times 1{,}2 = 54$, donc $P = \\frac{54}{1{,}2} = \\frac{540}{12} = 45$ €. Vérification : $45 + 9 = 54$.\n\n**2.** $P \\times 0{,}75 = 36$, donc $P = \\frac{36}{0{,}75} = \\frac{3\\,600}{75} = 48$ €. Vérification : $25\\,\\%$ de $48$ vaut $12$ et $48 - 12 = 36$.\n\n**3.** L'élève obtient $54 \\times 0{,}8 = 43{,}20$ €. Sa méthode est fausse : la hausse de $20\\,\\%$ a été calculée sur l'ancien prix ($45$ €), alors que les $20\\,\\%$ qu'il retire sont calculés sur le nouveau prix ($54$ €). Il faut diviser par le coefficient multiplicateur $1{,}2$."
    },
    {
      "id": "1TC1-ds-08",
      "title": "Évolutions réciproques",
      "difficulty": 2,
      "points": 4,
      "statement": "1. Le cours d'une action baisse de $40\\,\\%$. Quelle hausse (en pourcentage, arrondie au dixième) faut-il ensuite pour qu'elle retrouve sa valeur initiale ?\n2. Un loyer augmente de $60\\,\\%$. Quelle baisse faudrait-il ensuite pour revenir au loyer initial ?\n3. L'action de la question 1 valait $50$ €. Vérifier le résultat de la question 1 en calculant sa valeur après la baisse puis après la hausse exacte.",
      "solution": "**1.** La baisse correspond à $CM = 0{,}6$. L'évolution réciproque a pour coefficient $\\frac{1}{0{,}6} = \\frac{10}{6} = \\frac{5}{3} \\approx 1{,}667$. Il faut une hausse d'environ $66{,}7\\,\\%$.\n\n**2.** $\\frac{1}{1{,}6} = \\frac{10}{16} = 0{,}625$, donc $t = 0{,}625 - 1 = -0{,}375$ : il faut une baisse de $37{,}5\\,\\%$.\n\n**3.** Après la baisse : $50 \\times 0{,}6 = 30$ €. Après la hausse de coefficient $\\frac{5}{3}$ : $30 \\times \\frac{5}{3} = 50$ € : on retrouve bien la valeur initiale. Une hausse de $40\\,\\%$ n'aurait donné que $30 \\times 1{,}4 = 42$ €."
    },
    {
      "id": "1TC1-ds-09",
      "title": "Abonnés d'une chaîne vidéo",
      "difficulty": 3,
      "points": 5,
      "statement": "Une chaîne vidéo compte $2\\,000$ abonnés. On suppose que le nombre d'abonnés augmente de $10\\,\\%$ par an pendant trois ans.\n\n1. Calculer le nombre d'abonnés au bout d'un an, de deux ans, puis de trois ans.\n2. Calculer le taux d'évolution global sur les trois ans.\n3. Expliquer pourquoi ce taux global n'est pas égal à $30\\,\\%$.\n4. Sur la même période, une autre chaîne passe de $5\\,000$ à $6\\,500$ abonnés. Laquelle des deux chaînes a connu la plus forte progression relative ?",
      "solution": "**1.** Au bout d'un an : $2\\,000 \\times 1{,}1 = 2\\,200$ ; de deux ans : $2\\,200 \\times 1{,}1 = 2\\,420$ ; de trois ans : $2\\,420 \\times 1{,}1 = 2\\,662$ abonnés.\n\n**2.** $CM = 1{,}1^3 = 1{,}331$, donc le taux global est $+33{,}1\\,\\%$ (on retrouve $\\frac{2\\,662 - 2\\,000}{2\\,000} = \\frac{662}{2\\,000} = 0{,}331$).\n\n**3.** Chaque hausse de $10\\,\\%$ porte sur un effectif qui a déjà augmenté : les taux ne s'additionnent pas, ce sont les coefficients qui se multiplient.\n\n**4.** Pour la seconde chaîne : $\\frac{6\\,500 - 5\\,000}{5\\,000} = \\frac{1\\,500}{5\\,000} = 0{,}3$, soit $+30\\,\\%$. La première chaîne ($+33{,}1\\,\\%$) a connu la plus forte progression relative, même si la seconde a gagné plus d'abonnés en nombre."
    },
    {
      "id": "1TC1-ds-10",
      "title": "Taux manquant",
      "difficulty": 3,
      "points": 4,
      "statement": "Le chiffre d'affaires d'une entreprise a augmenté de $20\\,\\%$ la première année.\n\n1. Quelle évolution doit-il connaître la deuxième année pour que l'évolution globale sur deux ans soit une hausse de $8\\,\\%$ ?\n2. On suppose finalement que le chiffre d'affaires baisse de $20\\,\\%$ la deuxième année. Déterminer l'évolution globale sur les deux ans.\n3. Le chiffre d'affaires initial était de $250\\,000$ €. Calculer le chiffre d'affaires final dans la situation de la question 2.",
      "solution": "**1.** On cherche $CM_2$ tel que $1{,}2 \\times CM_2 = 1{,}08$. Donc $CM_2 = \\frac{1{,}08}{1{,}2} = \\frac{108}{120} = 0{,}9$ : il faut une baisse de $10\\,\\%$ la deuxième année.\n\n**2.** $CM = 1{,}2 \\times 0{,}8 = 0{,}96$, soit une baisse globale de $4\\,\\%$ : une hausse puis une baisse de même pourcentage ne se compensent pas.\n\n**3.** $250\\,000 \\times 0{,}96 = 240\\,000$ €."
    },
    {
      "id": "1TC1-ds-11",
      "title": "Répartition des salariés",
      "difficulty": 3,
      "points": 5,
      "statement": "Une entreprise emploie $800$ salariés : $60\\,\\%$ travaillent à la production, $25\\,\\%$ dans l'administration et les autres au service commercial. Il y a $30\\,\\%$ de femmes à la production, $70\\,\\%$ dans l'administration et $50\\,\\%$ au service commercial.\n\n1. Calculer l'effectif de chaque service.\n2. Calculer le nombre de femmes de l'entreprise.\n3. Quelle est la proportion de femmes dans l'entreprise ?\n4. Quelle est la proportion de salariées de l'administration parmi les femmes de l'entreprise ? Donner le résultat sous forme de fraction irréductible.",
      "solution": "**1.** Production : $0{,}6 \\times 800 = 480$ ; administration : $0{,}25 \\times 800 = 200$ ; service commercial : $800 - 480 - 200 = 120$ salariés ($15\\,\\%$).\n\n**2.** Production : $0{,}3 \\times 480 = 144$ ; administration : $0{,}7 \\times 200 = 140$ ; commercial : $0{,}5 \\times 120 = 60$. Au total : $144 + 140 + 60 = 344$ femmes.\n\n**3.** $\\frac{344}{800} = 0{,}43$, soit $43\\,\\%$ de femmes (ce n'est pas la moyenne des trois pourcentages, car les services n'ont pas le même effectif).\n\n**4.** La population de référence est celle des femmes : $\\frac{140}{344} = \\frac{35}{86}$, soit environ $41\\,\\%$."
    },
    {
      "id": "1TC1-ds-12",
      "title": "Prix hors taxes et toutes taxes",
      "difficulty": 3,
      "points": 4,
      "statement": "On considère un taux de TVA de $20\\,\\%$ : le prix toutes taxes comprises (TTC) s'obtient en augmentant le prix hors taxes (HT) de $20\\,\\%$.\n\n1. Un article coûte $45$ € HT. Calculer son prix TTC.\n2. Un autre article coûte $90$ € TTC. Calculer son prix HT.\n3. Le magasin accorde une remise de $10\\,\\%$ sur le prix TTC de cet article à $90$ €. Calculer le nouveau prix TTC, puis le prix HT correspondant.\n4. Quel est le taux d'évolution du prix HT ? Commenter.",
      "solution": "**1.** $45 \\times 1{,}2 = 54$ € TTC.\n\n**2.** $\\frac{90}{1{,}2} = \\frac{900}{12} = 75$ € HT (et non $90 \\times 0{,}8 = 72$ €).\n\n**3.** Nouveau prix TTC : $90 \\times 0{,}9 = 81$ €. Prix HT : $\\frac{81}{1{,}2} = \\frac{810}{12} = 67{,}5$ €.\n\n**4.** $\\frac{67{,}5}{75} = 0{,}9$ : le prix HT a lui aussi baissé de $10\\,\\%$. C'est normal : $\\text{TTC} = 1{,}2 \\times \\text{HT}$, donc multiplier le prix TTC par $0{,}9$ revient à multiplier le prix HT par $0{,}9$."
    },
    {
      "id": "1TC1-ds-13",
      "title": "Deux évolutions de même taux",
      "difficulty": 4,
      "points": 5,
      "statement": "1. Le prix d'un article augmente deux fois de suite de $t\\,\\%$. Sur l'ensemble des deux hausses, il a augmenté de $44\\,\\%$. Déterminer $t$.\n2. Un autre prix baisse deux fois de suite du même pourcentage ; globalement, il a baissé de $19\\,\\%$. Déterminer ce pourcentage.\n3. Un troisième prix augmente de $t\\,\\%$ puis baisse de $t\\,\\%$ ; globalement, il a baissé de $4\\,\\%$. Montrer que $1 - \\left(\\frac{t}{100}\\right)^2 = 0{,}96$ et en déduire $t$.",
      "solution": "**1.** On a $\\left(1 + \\frac{t}{100}\\right)^2 = 1{,}44$. Comme $1 + \\frac{t}{100} > 0$ et $1{,}2^2 = 1{,}44$, on obtient $1 + \\frac{t}{100} = 1{,}2$, donc $t = 20$.\n\n**2.** Avec un coefficient $c$ par baisse : $c^2 = 0{,}81$ et $c > 0$, donc $c = 0{,}9$ : chaque baisse est de $10\\,\\%$.\n\n**3.** Le coefficient global est $\\left(1 + \\frac{t}{100}\\right)\\left(1 - \\frac{t}{100}\\right) = 1 - \\left(\\frac{t}{100}\\right)^2$ (identité remarquable) et il vaut $0{,}96$.\n\nDonc $\\left(\\frac{t}{100}\\right)^2 = 0{,}04$, puis $\\frac{t}{100} = 0{,}2$ (car $t > 0$), soit $t = 20$. Une hausse de $20\\,\\%$ suivie d'une baisse de $20\\,\\%$ donne bien $1{,}2 \\times 0{,}8 = 0{,}96$."
    },
    {
      "id": "1TC1-ds-14",
      "title": "Comparer deux promotions",
      "difficulty": 4,
      "points": 5,
      "statement": "Pour un même téléviseur affiché à $250$ €, deux magasins proposent :\n- magasin A : une remise de $30\\,\\%$ ;\n- magasin B : une remise de $20\\,\\%$, puis une remise supplémentaire de $15\\,\\%$ en caisse sur le prix remisé.\n\n1. Calculer le coefficient multiplicateur global de chaque offre. Quelle est l'offre la plus intéressante ?\n2. Calculer le prix payé dans chaque magasin.\n3. Le magasin B veut ajuster sa remise en caisse pour que le prix final soit exactement celui du magasin A. Quel pourcentage de remise en caisse doit-il appliquer ?",
      "solution": "**1.** Magasin A : $CM_A = 0{,}7$. Magasin B : $CM_B = 0{,}8 \\times 0{,}85 = 0{,}68$, soit une remise globale de $32\\,\\%$. Comme $0{,}68 < 0{,}7$, l'offre du magasin B est la plus intéressante.\n\n**2.** Magasin A : $250 \\times 0{,}7 = 175$ €. Magasin B : $250 \\times 0{,}68 = 170$ €.\n\n**3.** On cherche $c$ tel que $0{,}8 \\times c = 0{,}7$, soit $c = \\frac{0{,}7}{0{,}8} = \\frac{7}{8} = 0{,}875$. La remise en caisse doit être de $12{,}5\\,\\%$. Vérification : $250 \\times 0{,}8 = 200$ et $200 \\times 0{,}875 = 175$ €."
    },
    {
      "id": "1TC1-ds-15",
      "title": "Évolution d'une population par tranches d'âge",
      "difficulty": 4,
      "points": 6,
      "statement": "Une ville compte $40\\,000$ habitants, dont $30\\,\\%$ ont moins de $25$ ans. En dix ans, le nombre d'habitants de moins de $25$ ans augmente de $10\\,\\%$ tandis que celui des habitants de $25$ ans ou plus baisse de $5\\,\\%$.\n\n1. Calculer les effectifs initiaux des deux tranches d'âge.\n2. Calculer les effectifs de chaque tranche d'âge au bout de dix ans, puis la population totale.\n3. Calculer le taux d'évolution de la population totale.\n4. Au bout de dix ans, la proportion d'habitants de moins de $25$ ans dépasse-t-elle un tiers ? Justifier sans calculatrice.",
      "solution": "**1.** Moins de $25$ ans : $0{,}3 \\times 40\\,000 = 12\\,000$ ; $25$ ans ou plus : $40\\,000 - 12\\,000 = 28\\,000$.\n\n**2.** Moins de $25$ ans : $12\\,000 \\times 1{,}1 = 13\\,200$ ; $25$ ans ou plus : $28\\,000 \\times 0{,}95 = 26\\,600$. Population totale : $13\\,200 + 26\\,600 = 39\\,800$ habitants.\n\n**3.** $\\frac{39\\,800 - 40\\,000}{40\\,000} = \\frac{-200}{40\\,000} = -0{,}005$ : la population a baissé de $0{,}5\\,\\%$ (ce n'est pas $10 - 5 = 5\\,\\%$, car les deux tranches n'ont pas le même poids).\n\n**4.** La proportion vaut $\\frac{13\\,200}{39\\,800} = \\frac{66}{199}$. Comme $3 \\times 66 = 198 < 199$, on a $\\frac{66}{199} < \\frac{1}{3}$ : la proportion reste (de très peu) inférieure à un tiers."
    },
    {
      "id": "1TC1-ds-16",
      "title": "Salaire et pouvoir d'achat",
      "difficulty": 4,
      "points": 5,
      "statement": "Un salarié gagne $1\\,800$ € par mois. Un panier de courses type coûte $120$ €. Un an plus tard, son salaire a augmenté de $10\\,\\%$ et le prix du panier de $20\\,\\%$.\n\n1. Combien de paniers le salarié pouvait-il acheter avec un mois de salaire au départ ? Et un an plus tard ?\n2. Montrer que le nombre de paniers a été multiplié par $\\frac{11}{12}$. En déduire son taux d'évolution, sachant que $\\frac{1}{12} \\approx 0{,}083$.\n3. De quel pourcentage le salaire aurait-il dû augmenter pour que le nombre de paniers reste le même ?",
      "solution": "**1.** Au départ : $\\frac{1\\,800}{120} = 15$ paniers. Un an plus tard, le salaire vaut $1\\,800 \\times 1{,}1 = 1\\,980$ € et le panier $120 \\times 1{,}2 = 144$ € : $\\frac{1\\,980}{144} = 13{,}75$ paniers.\n\n**2.** Le nombre de paniers est multiplié par $\\frac{1{,}1}{1{,}2} = \\frac{11}{12}$ (on vérifie : $15 \\times \\frac{11}{12} = 13{,}75$). Taux d'évolution : $\\frac{11}{12} - 1 = -\\frac{1}{12} \\approx -0{,}083$, soit une baisse d'environ $8{,}3\\,\\%$ du pouvoir d'achat mesuré en paniers.\n\n**3.** Il faut que $\\frac{CM_{\\text{salaire}}}{1{,}2} = 1$, donc $CM_{\\text{salaire}} = 1{,}2$ : une hausse de salaire de $20\\,\\%$, identique à celle des prix."
    }
  ],
  "1TC2": [
    {
      "id": "1TC2-ds-01",
      "title": "Compléter un tableau croisé",
      "difficulty": 1,
      "points": 4,
      "statement": "Le tableau suivant, incomplet, répartit les $400$ élèves d'un lycée selon leur sexe et leur régime.\n\n|  | Demi-pensionnaires | Externes | Total |\n|:---:|:---:|:---:|:---:|\n| Filles | $150$ |  | $200$ |\n| Garçons |  | $60$ |  |\n| Total | $290$ |  | $400$ |\n\n1. Recopier et compléter le tableau.\n2. Calculer la fréquence des demi-pensionnaires parmi les élèves du lycée.\n3. Calculer la fréquence des demi-pensionnaires parmi les filles, puis parmi les garçons. Comparer.",
      "solution": "**1.** Filles externes : $200 - 150 = 50$. Garçons : $400 - 200 = 200$, dont $200 - 60 = 140$ demi-pensionnaires (on vérifie : $150 + 140 = 290$). Externes : $50 + 60 = 110$.\n\n|  | Demi-pensionnaires | Externes | Total |\n|:---:|:---:|:---:|:---:|\n| Filles | $150$ | $50$ | $200$ |\n| Garçons | $140$ | $60$ | $200$ |\n| Total | $290$ | $110$ | $400$ |\n\n**2.** $\\frac{290}{400} = 0{,}725$, soit $72{,}5\\,\\%$.\n\n**3.** Parmi les filles : $\\frac{150}{200} = 75\\,\\%$ ; parmi les garçons : $\\frac{140}{200} = 70\\,\\%$. Les filles sont proportionnellement un peu plus souvent demi-pensionnaires."
    },
    {
      "id": "1TC2-ds-02",
      "title": "Nuage de points et point moyen",
      "difficulty": 1,
      "points": 4,
      "statement": "Le tableau donne la température moyenne $y$ (en °C) relevée dans une ville lors de la semaine de rang $x$ d'un printemps.\n\n| Rang $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| Température $y$ | $12$ | $15$ | $17$ | $20$ | $21$ |\n\n1. Représenter le nuage de points associé à cette série dans un repère.\n2. Calculer les coordonnées du point moyen $G$ du nuage et le placer.\n3. La forme du nuage justifie-t-elle un ajustement affine ?",
      "solution": "**1.** On place les points $(1 ; 12)$, $(2 ; 15)$, $(3 ; 17)$, $(4 ; 20)$ et $(5 ; 21)$ (par exemple $1$ cm pour une semaine en abscisse et $1$ cm pour $2$ °C en ordonnée, en commençant l'axe des ordonnées à $10$).\n\n**2.** $\\bar{x} = \\frac{1 + 2 + 3 + 4 + 5}{5} = \\frac{15}{5} = 3$ et $\\bar{y} = \\frac{12 + 15 + 17 + 20 + 21}{5} = \\frac{85}{5} = 17$. Donc $G(3 ; 17)$, qui se trouve ici être un point du nuage.\n\n**3.** Les points sont presque alignés selon une direction croissante : un ajustement affine est justifié sur cette période (même s'il ne pourrait pas être prolongé indéfiniment, les températures ne montant pas sans limite)."
    },
    {
      "id": "1TC2-ds-03",
      "title": "Moyens de transport",
      "difficulty": 1,
      "points": 4,
      "statement": "On a interrogé $250$ salariés d'une entreprise sur leur moyen de transport principal et la distance entre leur domicile et leur lieu de travail.\n\n|  | Train | Voiture | Vélo | Total |\n|:---:|:---:|:---:|:---:|:---:|\n| Moins de $10$ km | $10$ | $40$ | $50$ | $100$ |\n| $10$ km ou plus | $60$ | $85$ | $5$ | $150$ |\n| Total | $70$ | $125$ | $55$ | $250$ |\n\n1. Calculer la fréquence marginale des salariés qui viennent en voiture.\n2. Calculer la fréquence des cyclistes parmi les salariés habitant à moins de $10$ km.\n3. Calculer la fréquence des salariés habitant à moins de $10$ km parmi les cyclistes (fraction irréductible).\n4. Expliquer pourquoi les résultats des questions 2 et 3 sont différents.",
      "solution": "**1.** $\\frac{125}{250} = 0{,}5$, soit $50\\,\\%$ des salariés.\n\n**2.** La population de référence est celle des salariés habitant à moins de $10$ km : $\\frac{50}{100} = 0{,}5$, soit $50\\,\\%$.\n\n**3.** La population de référence est celle des cyclistes : $\\frac{50}{55} = \\frac{10}{11}$, soit environ $91\\,\\%$.\n\n**4.** Les deux fréquences ont le même numérateur ($50$) mais pas la même population de référence : $100$ salariés dans la question 2, $55$ cyclistes dans la question 3."
    },
    {
      "id": "1TC2-ds-04",
      "title": "Utiliser une droite d'ajustement",
      "difficulty": 1,
      "points": 4,
      "statement": "On étudie les ventes annuelles $y$ (en milliers d'unités) d'un modèle de casque audio de 2019 à 2024. On note $x$ le rang de l'année, avec $x = 0$ en 2019. Un tableur fournit la droite d'ajustement d'équation $y = 3x + 25$.\n\n1. Interpréter le coefficient $3$ dans le contexte.\n2. Estimer les ventes en 2022. S'agit-il d'une interpolation ou d'une extrapolation ?\n3. Estimer les ventes en 2027. S'agit-il d'une interpolation ou d'une extrapolation ?",
      "solution": "**1.** Selon le modèle, les ventes augmentent de $3$ milliers d'unités, c'est-à-dire de $3\\,000$ casques, chaque année.\n\n**2.** 2022 correspond au rang $x = 3$ : $y = 3 \\times 3 + 25 = 34$, soit environ $34\\,000$ casques. 2022 est dans la période étudiée : c'est une interpolation.\n\n**3.** 2027 correspond au rang $x = 8$ : $y = 3 \\times 8 + 25 = 49$, soit environ $49\\,000$ casques. 2027 est en dehors de la période étudiée : c'est une extrapolation, qui suppose que la tendance se maintient."
    },
    {
      "id": "1TC2-ds-05",
      "title": "Carte de fidélité et achats en ligne",
      "difficulty": 2,
      "points": 5,
      "statement": "Un magasin a interrogé $600$ clients : $45\\,\\%$ possèdent la carte de fidélité. Parmi les porteurs de la carte, $80\\,\\%$ ont déjà acheté en ligne, contre $40\\,\\%$ parmi les autres clients.\n\n1. Construire le tableau croisé des effectifs (carte ou non, achat en ligne ou non).\n2. Quelle est la fréquence des clients ayant déjà acheté en ligne ?\n3. Parmi les clients ayant déjà acheté en ligne, quelle est la fréquence des porteurs de la carte ? Donner une fraction irréductible.",
      "solution": "**1.** Porteurs de la carte : $0{,}45 \\times 600 = 270$, dont $0{,}8 \\times 270 = 216$ ont acheté en ligne. Autres clients : $330$, dont $0{,}4 \\times 330 = 132$ ont acheté en ligne.\n\n|  | En ligne | Jamais en ligne | Total |\n|:---:|:---:|:---:|:---:|\n| Carte | $216$ | $54$ | $270$ |\n| Sans carte | $132$ | $198$ | $330$ |\n| Total | $348$ | $252$ | $600$ |\n\n**2.** $\\frac{348}{600} = 0{,}58$, soit $58\\,\\%$.\n\n**3.** $\\frac{216}{348} = \\frac{18}{29}$, soit environ $62\\,\\%$. Ce n'est pas $80\\,\\%$ : la population de référence est celle des acheteurs en ligne, et non celle des porteurs de la carte."
    },
    {
      "id": "1TC2-ds-06",
      "title": "Point moyen et équation d'ajustement",
      "difficulty": 2,
      "points": 5,
      "statement": "On a relevé le nombre $y$ de visiteurs (en centaines) d'un site touristique pendant cinq ans ; $x$ est le rang de l'année.\n\n| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| $y$ | $8$ | $11$ | $13$ | $17$ | $21$ |\n\n1. Calculer les coordonnées du point moyen $G$.\n2. Un tableur donne une droite d'ajustement de coefficient directeur $3{,}2$, qui passe par $G$. Déterminer son équation.\n3. Estimer le nombre de visiteurs pour $x = 6$.",
      "solution": "**1.** $\\bar{x} = \\frac{0 + 1 + 2 + 3 + 4}{5} = 2$ et $\\bar{y} = \\frac{8 + 11 + 13 + 17 + 21}{5} = \\frac{70}{5} = 14$, donc $G(2 ; 14)$.\n\n**2.** La droite a pour équation $y = 3{,}2x + b$ et passe par $G$ : $14 = 3{,}2 \\times 2 + b$, donc $b = 14 - 6{,}4 = 7{,}6$. Équation : $y = 3{,}2x + 7{,}6$.\n\n**3.** $y = 3{,}2 \\times 6 + 7{,}6 = 19{,}2 + 7{,}6 = 26{,}8$ centaines, soit environ $2\\,680$ visiteurs (extrapolation)."
    },
    {
      "id": "1TC2-ds-07",
      "title": "Vélos en libre-service",
      "difficulty": 2,
      "points": 4,
      "statement": "Le nombre d'abonnés $y$ (en centaines) au service de vélos en libre-service d'une ville a été relevé de 2016 à 2023. On note $x$ le rang de l'année ($x = 0$ en 2016). Un tableur fournit la droite d'ajustement $y = 1{,}8x + 12$.\n\n1. Estimer le nombre d'abonnés en 2020.\n2. Estimer le nombre d'abonnés en 2030.\n3. Laquelle de ces deux estimations est la plus fiable ? Justifier.",
      "solution": "**1.** 2020 correspond à $x = 4$ : $y = 1{,}8 \\times 4 + 12 = 19{,}2$ centaines, soit environ $1\\,920$ abonnés.\n\n**2.** 2030 correspond à $x = 14$ : $y = 1{,}8 \\times 14 + 12 = 25{,}2 + 12 = 37{,}2$ centaines, soit environ $3\\,720$ abonnés.\n\n**3.** L'estimation de 2020 est une interpolation (2020 est dans la période observée) ; celle de 2030 est une extrapolation lointaine, qui suppose que la progression reste la même pendant encore sept ans (saturation, nouveaux services, travaux…). L'estimation de 2020 est donc la plus fiable."
    },
    {
      "id": "1TC2-ds-08",
      "title": "Course à pied et âge",
      "difficulty": 2,
      "points": 5,
      "statement": "Une enquête porte sur $1\\,000$ personnes : $30\\,\\%$ pratiquent la course à pied et $200$ personnes ont moins de $25$ ans. Parmi les coureurs, $20\\,\\%$ ont moins de $25$ ans.\n\n1. Construire le tableau croisé des effectifs (coureur ou non, moins de $25$ ans ou non).\n2. Calculer la fréquence des coureurs parmi les moins de $25$ ans.\n3. Calculer la fréquence des coureurs parmi les personnes de $25$ ans ou plus.\n4. La pratique de la course à pied semble-t-elle liée à l'âge dans cette enquête ?",
      "solution": "**1.** Coureurs : $0{,}3 \\times 1\\,000 = 300$, dont $0{,}2 \\times 300 = 60$ ont moins de $25$ ans. On complète par différences.\n\n|  | Moins de $25$ ans | $25$ ans ou plus | Total |\n|:---:|:---:|:---:|:---:|\n| Coureurs | $60$ | $240$ | $300$ |\n| Non-coureurs | $140$ | $560$ | $700$ |\n| Total | $200$ | $800$ | $1\\,000$ |\n\n**2.** $\\frac{60}{200} = 0{,}3$, soit $30\\,\\%$.\n\n**3.** $\\frac{240}{800} = 0{,}3$, soit $30\\,\\%$.\n\n**4.** La fréquence des coureurs est la même ($30\\,\\%$) chez les moins de $25$ ans, chez les plus âgés et dans l'ensemble : dans cette enquête, la pratique de la course à pied ne semble pas liée à l'âge."
    },
    {
      "id": "1TC2-ds-09",
      "title": "Émissions d'une collectivité",
      "difficulty": 3,
      "points": 5,
      "statement": "Les émissions de gaz à effet de serre $y$ (en milliers de tonnes) d'une collectivité sont ajustées, à partir des données de 2018 à 2024, par la droite $y = -2{,}5x + 80$, où $x$ est le rang de l'année ($x = 0$ en 2018).\n\n1. Interpréter le nombre $-2{,}5$ dans le contexte.\n2. En supposant que la tendance se poursuive, à partir de quelle année les émissions deviendront-elles inférieures à $50$ milliers de tonnes ?\n3. Selon ce modèle, en quelle année les émissions seraient-elles nulles ? Que penser de cette prévision ?",
      "solution": "**1.** Selon le modèle, les émissions baissent de $2{,}5$ milliers de tonnes, soit $2\\,500$ tonnes, chaque année.\n\n**2.** On résout $-2{,}5x + 80 < 50 \\iff -2{,}5x < -30 \\iff x > \\frac{-30}{-2{,}5} = 12$ (on change le sens de l'inégalité en divisant par un nombre négatif). Pour $x = 12$, les émissions valent exactement $50$ ; il faut donc $x = 13$, soit l'année 2031.\n\n**3.** $-2{,}5x + 80 = 0 \\iff x = \\frac{80}{2{,}5} = 32$, soit 2050. Cette prévision est très incertaine : c'est une extrapolation à plus de vingt-cinq ans, et une baisse régulière jusqu'à zéro est peu réaliste (les dernières réductions sont souvent les plus difficiles)."
    },
    {
      "id": "1TC2-ds-10",
      "title": "Confronter un modèle à une observation",
      "difficulty": 3,
      "points": 5,
      "statement": "Le nombre $y$ de licenciés (en centaines) d'une fédération sportive régionale a été ajusté, à partir des données de 2016 à 2022, par $y = 5x + 60$, où $x$ est le rang de l'année ($x = 0$ en 2016).\n\n1. Quelle valeur le modèle prévoit-il pour 2024 ?\n2. En 2024, on a observé $110$ centaines de licenciés. Calculer l'écart relatif $\\frac{y_{\\text{modèle}} - y_{\\text{observé}}}{y_{\\text{observé}}}$, sachant que $\\frac{1}{11} \\approx 0{,}091$. Interpréter son signe.\n3. Selon le modèle, à partir de quelle année le nombre de licenciés dépasserait-il $15\\,000$ ?",
      "solution": "**1.** 2024 correspond à $x = 8$ : $y = 5 \\times 8 + 60 = 100$ centaines, soit $10\\,000$ licenciés.\n\n**2.** $\\frac{100 - 110}{110} = -\\frac{10}{110} = -\\frac{1}{11} \\approx -0{,}091$, soit environ $-9{,}1\\,\\%$. L'écart est négatif : le modèle sous-estime le nombre de licenciés observé en 2024.\n\n**3.** $15\\,000$ licenciés correspondent à $y = 150$. On résout $5x + 60 > 150 \\iff 5x > 90 \\iff x > 18$. Pour $x = 18$, le modèle donne exactement $150$ ; il faut donc $x = 19$, soit l'année 2035 (prévision très incertaine)."
    },
    {
      "id": "1TC2-ds-11",
      "title": "Billetterie d'un festival",
      "difficulty": 3,
      "points": 5,
      "statement": "Un festival a accueilli $1\\,200$ spectateurs : $40\\,\\%$ habitent la région. Parmi les spectateurs de la région, $75\\,\\%$ ont acheté leur billet en ligne, contre $50\\,\\%$ parmi les autres spectateurs.\n\n1. Construire le tableau croisé des effectifs (provenance, mode d'achat).\n2. Quelle est la fréquence des billets achetés en ligne ?\n3. Parmi les spectateurs ayant acheté leur billet en ligne, quelle est la fréquence de ceux qui habitent la région ?\n4. Un organisateur affirme : « $75\\,\\%$ des billets achetés en ligne l'ont été par des spectateurs de la région ». Expliquer son erreur.",
      "solution": "**1.** Spectateurs de la région : $0{,}4 \\times 1\\,200 = 480$, dont $0{,}75 \\times 480 = 360$ en ligne. Autres : $720$, dont $0{,}5 \\times 720 = 360$ en ligne.\n\n|  | En ligne | Au guichet | Total |\n|:---:|:---:|:---:|:---:|\n| Région | $360$ | $120$ | $480$ |\n| Hors région | $360$ | $360$ | $720$ |\n| Total | $720$ | $480$ | $1\\,200$ |\n\n**2.** $\\frac{720}{1\\,200} = 0{,}6$, soit $60\\,\\%$.\n\n**3.** $\\frac{360}{720} = 0{,}5$, soit $50\\,\\%$.\n\n**4.** Il confond deux fréquences conditionnelles : $75\\,\\%$ est la part des achats en ligne parmi les spectateurs de la région ; la part des spectateurs de la région parmi les achats en ligne vaut $50\\,\\%$. Les populations de référence sont différentes."
    },
    {
      "id": "1TC2-ds-12",
      "title": "Ajustement d'une série",
      "difficulty": 3,
      "points": 5,
      "statement": "On considère la série statistique suivante.\n\n| $x$ | $1$ | $2$ | $3$ | $4$ | $5$ |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| $y$ | $3$ | $5$ | $6$ | $9$ | $12$ |\n\n1. Calculer les coordonnées du point moyen $G$.\n2. Un tableur fournit une droite d'ajustement de coefficient directeur $2{,}2$, qui passe par $G$. Déterminer son équation.\n3. Estimer $y$ pour $x = 2{,}5$, puis pour $x = 7$. Préciser à chaque fois s'il s'agit d'une interpolation ou d'une extrapolation.",
      "solution": "**1.** $\\bar{x} = \\frac{15}{5} = 3$ et $\\bar{y} = \\frac{3 + 5 + 6 + 9 + 12}{5} = \\frac{35}{5} = 7$, donc $G(3 ; 7)$.\n\n**2.** $7 = 2{,}2 \\times 3 + b$, donc $b = 7 - 6{,}6 = 0{,}4$. Équation : $y = 2{,}2x + 0{,}4$.\n\n**3.** Pour $x = 2{,}5$ : $y = 5{,}5 + 0{,}4 = 5{,}9$ ; $2{,}5$ est compris entre $1$ et $5$ : interpolation.\n\nPour $x = 7$ : $y = 15{,}4 + 0{,}4 = 15{,}8$ ; $7$ est en dehors de la plage des données : extrapolation."
    },
    {
      "id": "1TC2-ds-13",
      "title": "Changer l'origine des rangs",
      "difficulty": 4,
      "points": 5,
      "statement": "Une étude modélise le nombre $y$ de bornes de recharge (en centaines) d'un département par $y = 1{,}2x + 30$, où $x$ est le rang de l'année avec $x = 0$ en 2015. Un second analyste préfère utiliser le rang $t$ avec $t = 0$ en 2020.\n\n1. Exprimer $x$ en fonction de $t$.\n2. En déduire l'expression de $y$ en fonction de $t$.\n3. Calculer la prévision pour 2025 avec chacune des deux expressions et vérifier qu'elles coïncident.\n4. Les deux expressions ont-elles le même coefficient directeur ? Interpréter.",
      "solution": "**1.** Une même année correspond à $x = \\text{année} - 2015$ et $t = \\text{année} - 2020$, donc $x = t + 5$.\n\n**2.** $y = 1{,}2(t + 5) + 30 = 1{,}2t + 6 + 30 = 1{,}2t + 36$.\n\n**3.** Pour 2025 : $x = 10$ donne $y = 12 + 30 = 42$ ; $t = 5$ donne $y = 6 + 36 = 42$. Les deux prévisions coïncident : $4\\,200$ bornes.\n\n**4.** Oui : le coefficient directeur reste $1{,}2$, car la hausse annuelle ($120$ bornes par an) ne dépend pas du choix de l'année de départ. Seule l'ordonnée à l'origine change : c'est la valeur du modèle pour l'année de rang $0$."
    },
    {
      "id": "1TC2-ds-14",
      "title": "Corrélation n'est pas causalité",
      "difficulty": 4,
      "points": 6,
      "statement": "Sur une station balnéaire, on a relevé pendant cinq semaines d'été les ventes de glaces $x$ (en centaines) et le nombre $y$ d'interventions des sauveteurs en mer.\n\n| $x$ | $2$ | $4$ | $6$ | $8$ | $10$ |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| $y$ | $3$ | $5$ | $6$ | $9$ | $12$ |\n\n1. Calculer les coordonnées du point moyen $G$.\n2. Un tableur donne une droite d'ajustement de coefficient directeur $1{,}1$, passant par $G$. Déterminer son équation.\n3. Selon ce modèle, combien d'interventions correspondraient à $1\\,400$ glaces vendues ? Commenter la fiabilité de cette estimation.\n4. Un journaliste conclut : « vendre des glaces provoque des interventions des sauveteurs ». Critiquer cette affirmation.",
      "solution": "**1.** $\\bar{x} = \\frac{30}{5} = 6$ et $\\bar{y} = \\frac{35}{5} = 7$, donc $G(6 ; 7)$.\n\n**2.** $7 = 1{,}1 \\times 6 + b$, donc $b = 0{,}4$. Équation : $y = 1{,}1x + 0{,}4$.\n\n**3.** $1\\,400$ glaces correspondent à $x = 14$ : $y = 15{,}4 + 0{,}4 = 15{,}8$, soit environ $16$ interventions. C'est une extrapolation (hors de la plage $2$ à $10$), donc à considérer avec prudence.\n\n**4.** Une corrélation entre deux variables ne prouve pas que l'une est la cause de l'autre. Ici, un facteur commun explique probablement les deux : la chaleur et la fréquentation de la plage augmentent à la fois les ventes de glaces et le nombre de baigneurs, donc d'interventions."
    },
    {
      "id": "1TC2-ds-15",
      "title": "Retrouver des effectifs",
      "difficulty": 4,
      "points": 5,
      "statement": "Dans une enquête, $36$ personnes pratiquent à la fois la natation et le vélo. Elles représentent $15\\,\\%$ des nageurs et $9\\,\\%$ des personnes interrogées.\n\n1. Combien de nageurs l'enquête compte-t-elle ?\n2. Combien de personnes ont été interrogées ?\n3. Parmi les personnes qui ne nagent pas, $40\\,\\%$ font du vélo. Combien de personnes font du vélo au total ?\n4. Quelle est la fréquence des nageurs parmi les cyclistes ?",
      "solution": "**1.** Si $N$ est le nombre de nageurs : $0{,}15 \\times N = 36$, donc $N = \\frac{36}{0{,}15} = \\frac{3\\,600}{15} = 240$.\n\n**2.** Si $T$ est le nombre de personnes interrogées : $0{,}09 \\times T = 36$, donc $T = \\frac{3\\,600}{9} = 400$.\n\n**3.** Non-nageurs : $400 - 240 = 160$, dont $0{,}4 \\times 160 = 64$ cyclistes. Cyclistes au total : $36 + 64 = 100$.\n\n**4.** $\\frac{36}{100} = 0{,}36$, soit $36\\,\\%$ des cyclistes."
    },
    {
      "id": "1TC2-ds-16",
      "title": "Choisir entre deux modèles",
      "difficulty": 4,
      "points": 6,
      "statement": "Pour une série annuelle étudiée de 2018 à 2024 ($x$ est le rang de l'année, $x = 0$ en 2018), deux élèves proposent deux ajustements :\n- modèle 1 : $y = 4x + 50$ ;\n- modèle 2 : $y = 3x + 55$.\n\nOn dispose des observations suivantes : $58$ en 2020 et $73$ en 2024.\n\n1. Calculer les valeurs données par chaque modèle pour 2020 et pour 2024.\n2. Pour chaque modèle, calculer la somme des écarts (en valeur absolue) entre modèle et observations sur ces deux années. Quel modèle semble le plus adapté ?\n3. Calculer la prévision de chaque modèle pour 2030 et l'écart entre ces deux prévisions.\n4. Que peut-on en conclure sur les extrapolations lointaines ?",
      "solution": "**1.** 2020 correspond à $x = 2$ et 2024 à $x = 6$.\n\nModèle 1 : $4 \\times 2 + 50 = 58$ et $4 \\times 6 + 50 = 74$. Modèle 2 : $3 \\times 2 + 55 = 61$ et $3 \\times 6 + 55 = 73$.\n\n**2.** Modèle 1 : $|58 - 58| + |74 - 73| = 0 + 1 = 1$. Modèle 2 : $|61 - 58| + |73 - 73| = 3 + 0 = 3$. Le modèle 1 est le plus proche des observations.\n\n**3.** 2030 correspond à $x = 12$ : modèle 1 : $98$ ; modèle 2 : $91$. L'écart est de $7$.\n\n**4.** Deux modèles assez proches sur la période observée peuvent donner des prévisions nettement différentes loin de cette période : plus l'extrapolation est lointaine, plus elle est incertaine."
    }
  ],
  "1TC3": [
    {
      "id": "1TC3-ds-01",
      "title": "Compléter et exploiter un arbre",
      "difficulty": 1,
      "points": 4,
      "statement": "On considère deux événements $A$ et $B$ tels que $P(A) = 0{,}6$, $P_A(B) = 0{,}3$ et $P_{\\overline{A}}(B) = 0{,}5$.\n\n1. Construire l'arbre pondéré correspondant à cette situation et le compléter.\n2. Calculer $P(A \\cap B)$.\n3. Calculer $P(\\overline{A} \\cap \\overline{B})$.\n4. Calculer $P(B)$.",
      "solution": "**1.** Premier niveau : $P(A) = 0{,}6$ et $P(\\overline{A}) = 0{,}4$. Second niveau : après $A$, $P_A(B) = 0{,}3$ et $P_A(\\overline{B}) = 0{,}7$ ; après $\\overline{A}$, $P_{\\overline{A}}(B) = 0{,}5$ et $P_{\\overline{A}}(\\overline{B}) = 0{,}5$.\n\n**2.** $P(A \\cap B) = P(A) \\times P_A(B) = 0{,}6 \\times 0{,}3 = 0{,}18$.\n\n**3.** $P(\\overline{A} \\cap \\overline{B}) = 0{,}4 \\times 0{,}5 = 0{,}2$.\n\n**4.** Probabilités totales : $P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = 0{,}18 + 0{,}4 \\times 0{,}5 = 0{,}18 + 0{,}2 = 0{,}38$."
    },
    {
      "id": "1TC3-ds-02",
      "title": "Musique au lycée",
      "difficulty": 1,
      "points": 4,
      "statement": "On a interrogé $200$ élèves de Seconde et de Première sur la pratique d'un instrument de musique.\n\n|  | Joue d'un instrument | Ne joue pas | Total |\n|:---:|:---:|:---:|:---:|\n| Seconde | $30$ | $90$ | $120$ |\n| Première | $30$ | $50$ | $80$ |\n| Total | $60$ | $140$ | $200$ |\n\nOn choisit un élève au hasard. On note $S$ l'événement « l'élève est en Seconde » et $I$ l'événement « l'élève joue d'un instrument ».\n\n1. Calculer $P(I)$.\n2. Calculer $P(S \\cap I)$.\n3. Calculer $P_S(I)$.\n4. Calculer $P_I(S)$.",
      "solution": "**1.** $P(I) = \\frac{60}{200} = 0{,}3$.\n\n**2.** $P(S \\cap I) = \\frac{30}{200} = 0{,}15$.\n\n**3.** On se restreint aux $120$ élèves de Seconde : $P_S(I) = \\frac{30}{120} = 0{,}25$.\n\n**4.** On se restreint aux $60$ musiciens : $P_I(S) = \\frac{30}{60} = 0{,}5$. On remarque que $P_S(I) \\neq P_I(S)$ : les populations de référence sont différentes."
    },
    {
      "id": "1TC3-ds-03",
      "title": "Deux lancers d'une pièce",
      "difficulty": 1,
      "points": 4,
      "statement": "Une pièce est truquée : elle tombe sur pile avec une probabilité de $0{,}7$. On la lance deux fois ; les lancers sont indépendants.\n\n1. Représenter la situation par un arbre pondéré.\n2. Calculer la probabilité d'obtenir deux fois pile.\n3. Calculer la probabilité d'obtenir exactement une fois pile.\n4. Calculer la probabilité d'obtenir au moins une fois pile.",
      "solution": "**1.** À chaque niveau, la branche « pile » porte $0{,}7$ et la branche « face » porte $0{,}3$ ; l'arbre a quatre chemins : $PP$, $PF$, $FP$, $FF$.\n\n**2.** $P(PP) = 0{,}7 \\times 0{,}7 = 0{,}49$.\n\n**3.** Deux chemins conviennent, $PF$ et $FP$, de même probabilité $0{,}7 \\times 0{,}3 = 0{,}21$ : la probabilité vaut $2 \\times 0{,}21 = 0{,}42$.\n\n**4.** L'événement contraire est « aucun pile », de probabilité $0{,}3^2 = 0{,}09$. Donc $P = 1 - 0{,}09 = 0{,}91$ (on vérifie : $0{,}49 + 0{,}42 = 0{,}91$)."
    },
    {
      "id": "1TC3-ds-04",
      "title": "Reconnaître l'indépendance",
      "difficulty": 1,
      "points": 3,
      "statement": "1. On donne $P(A) = 0{,}4$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Les événements $A$ et $B$ sont-ils indépendants ?\n2. On donne $P(C) = 0{,}3$, $P(D) = 0{,}6$ et $P(C \\cap D) = 0{,}24$. Les événements $C$ et $D$ sont-ils indépendants ?\n3. Calculer $P_C(D)$ et comparer avec $P(D)$. Interpréter.",
      "solution": "**1.** $P(A) \\times P(B) = 0{,}4 \\times 0{,}5 = 0{,}2 = P(A \\cap B)$ : $A$ et $B$ sont indépendants.\n\n**2.** $P(C) \\times P(D) = 0{,}3 \\times 0{,}6 = 0{,}18 \\neq 0{,}24$ : $C$ et $D$ ne sont pas indépendants.\n\n**3.** $P_C(D) = \\frac{P(C \\cap D)}{P(C)} = \\frac{0{,}24}{0{,}3} = 0{,}8$, alors que $P(D) = 0{,}6$. Savoir que $C$ est réalisé augmente la probabilité de $D$ : la réalisation de $C$ apporte une information sur $D$."
    },
    {
      "id": "1TC3-ds-05",
      "title": "Pièces défectueuses de deux machines",
      "difficulty": 2,
      "points": 5,
      "statement": "Une usine fabrique des pièces sur deux machines : la machine $M_1$ produit $70\\,\\%$ des pièces et la machine $M_2$ le reste. Parmi les pièces produites par $M_1$, $2\\,\\%$ sont défectueuses ; parmi celles produites par $M_2$, $5\\,\\%$ le sont. On choisit une pièce au hasard et on note $D$ l'événement « la pièce est défectueuse ».\n\n1. Construire un arbre pondéré décrivant la situation.\n2. Calculer la probabilité que la pièce soit défectueuse.\n3. La pièce choisie est défectueuse. Quelle est la probabilité qu'elle provienne de la machine $M_2$ ? Donner une fraction irréductible.",
      "solution": "**1.** Premier niveau : $P(M_1) = 0{,}7$ et $P(M_2) = 0{,}3$. Second niveau : $P_{M_1}(D) = 0{,}02$, $P_{M_1}(\\overline{D}) = 0{,}98$, $P_{M_2}(D) = 0{,}05$, $P_{M_2}(\\overline{D}) = 0{,}95$.\n\n**2.** $P(D) = 0{,}7 \\times 0{,}02 + 0{,}3 \\times 0{,}05 = 0{,}014 + 0{,}015 = 0{,}029$.\n\n**3.** $P_D(M_2) = \\frac{P(M_2 \\cap D)}{P(D)} = \\frac{0{,}015}{0{,}029} = \\frac{15}{29}$, soit environ $0{,}52$. Bien que $M_2$ ne produise que $30\\,\\%$ des pièces, elle fournit un peu plus de la moitié des pièces défectueuses."
    },
    {
      "id": "1TC3-ds-06",
      "title": "Répondre au hasard",
      "difficulty": 2,
      "points": 5,
      "statement": "Un questionnaire comporte trois questions ; chacune propose quatre réponses dont une seule est juste. Un élève répond au hasard à chaque question, de façon indépendante. On appelle succès le fait de répondre juste.\n\n1. Justifier que la probabilité d'un succès à une question est $\\frac{1}{4}$ et représenter la situation par un arbre.\n2. Calculer la probabilité que l'élève réponde juste aux trois questions.\n3. Calculer la probabilité qu'il ne réponde juste à aucune question, puis la probabilité qu'il réponde juste à au moins une question.\n4. Calculer la probabilité qu'il réponde juste à exactement deux questions.",
      "solution": "**1.** Les quatre réponses sont choisies au hasard (équiprobabilité) et une seule est juste : $p = \\frac{1}{4}$. L'arbre a trois niveaux, chacun avec une branche $S$ ($\\frac{1}{4}$) et une branche $\\overline{S}$ ($\\frac{3}{4}$), soit $8$ chemins.\n\n**2.** $P(SSS) = \\left(\\frac{1}{4}\\right)^3 = \\frac{1}{64}$.\n\n**3.** $P(\\overline{S}\\,\\overline{S}\\,\\overline{S}) = \\left(\\frac{3}{4}\\right)^3 = \\frac{27}{64}$, donc $P(\\text{au moins un succès}) = 1 - \\frac{27}{64} = \\frac{37}{64}$.\n\n**4.** Trois chemins conviennent ($SS\\overline{S}$, $S\\overline{S}S$, $\\overline{S}SS$), chacun de probabilité $\\frac{1}{4} \\times \\frac{1}{4} \\times \\frac{3}{4} = \\frac{3}{64}$ : la probabilité vaut $3 \\times \\frac{3}{64} = \\frac{9}{64}$."
    },
    {
      "id": "1TC3-ds-07",
      "title": "Indépendance dans un tableau",
      "difficulty": 2,
      "points": 4,
      "statement": "On a interrogé $200$ élèves sur la pratique d'un instrument de musique.\n\n|  | Joue d'un instrument | Ne joue pas | Total |\n|:---:|:---:|:---:|:---:|\n| Seconde | $36$ | $84$ | $120$ |\n| Première | $24$ | $56$ | $80$ |\n| Total | $60$ | $140$ | $200$ |\n\nOn choisit un élève au hasard ; $S$ désigne l'événement « l'élève est en Seconde » et $I$ l'événement « l'élève joue d'un instrument ».\n\n1. Calculer $P(I)$ et $P_S(I)$.\n2. Les événements $S$ et $I$ sont-ils indépendants ? Justifier de deux façons.\n3. Interpréter ce résultat dans le contexte.",
      "solution": "**1.** $P(I) = \\frac{60}{200} = 0{,}3$ et $P_S(I) = \\frac{36}{120} = 0{,}3$.\n\n**2.** Première façon : $P_S(I) = P(I)$, donc $S$ et $I$ sont indépendants.\n\nDeuxième façon : $P(S) = \\frac{120}{200} = 0{,}6$ et $P(S) \\times P(I) = 0{,}6 \\times 0{,}3 = 0{,}18$, tandis que $P(S \\cap I) = \\frac{36}{200} = 0{,}18$ : l'égalité $P(S \\cap I) = P(S) \\times P(I)$ est vérifiée.\n\n**3.** La proportion de musiciens est la même en Seconde ($30\\,\\%$) que dans l'ensemble des élèves (on vérifie aussi $\\frac{24}{80} = 30\\,\\%$ en Première) : savoir en quelle classe est l'élève ne renseigne pas sur sa pratique musicale."
    },
    {
      "id": "1TC3-ds-08",
      "title": "Achats dans une boutique",
      "difficulty": 2,
      "points": 5,
      "statement": "Dans une boutique, $60\\,\\%$ des clients achètent un article de la gamme A. Parmi eux, $25\\,\\%$ achètent aussi un article de la gamme B. Par ailleurs, $15\\,\\%$ de l'ensemble des clients achètent un article de la gamme B sans acheter d'article de la gamme A. On choisit un client au hasard.\n\n1. Traduire les données de l'énoncé à l'aide des événements $A$, $B$ et de leurs contraires.\n2. Calculer $P(A \\cap B)$, puis $P(B)$.\n3. Calculer $P_{\\overline{A}}(B)$.\n4. Un client a acheté un article de la gamme B. Quelle est la probabilité qu'il ait aussi acheté un article de la gamme A ?",
      "solution": "**1.** $P(A) = 0{,}6$, $P_A(B) = 0{,}25$ et $P(\\overline{A} \\cap B) = 0{,}15$ (« $15\\,\\%$ de l'ensemble des clients » porte sur tous les clients : c'est une intersection, pas une probabilité conditionnelle).\n\n**2.** $P(A \\cap B) = 0{,}6 \\times 0{,}25 = 0{,}15$, puis $P(B) = 0{,}15 + 0{,}15 = 0{,}3$.\n\n**3.** $P(\\overline{A}) = 0{,}4$, donc $P_{\\overline{A}}(B) = \\frac{0{,}15}{0{,}4} = 0{,}375$.\n\n**4.** $P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}15}{0{,}3} = 0{,}5$."
    },
    {
      "id": "1TC3-ds-09",
      "title": "Fiabilité d'un test de dépistage",
      "difficulty": 3,
      "points": 6,
      "statement": "Une maladie touche $5\\,\\%$ d'une population. Un test de dépistage a une sensibilité de $98\\,\\%$ (il est positif chez $98\\,\\%$ des malades) et une spécificité de $90\\,\\%$ (il est négatif chez $90\\,\\%$ des personnes non malades). On note $M$ l'événement « la personne est malade » et $T$ l'événement « le test est positif ».\n\n1. Compléter le tableau d'effectifs pour une population fictive de $10\\,000$ personnes.\n\n|  | $T$ | $\\overline{T}$ | Total |\n|:---:|:---:|:---:|:---:|\n| $M$ |  |  |  |\n| $\\overline{M}$ |  |  |  |\n| Total |  |  | $10\\,000$ |\n\n2. Combien y a-t-il de faux positifs ? de faux négatifs ?\n3. Une personne a un test positif. Calculer la probabilité qu'elle soit malade (fraction irréductible). Commenter.\n4. Une personne a un test négatif. Calculer la probabilité qu'elle soit malade.",
      "solution": "**1.** Malades : $500$, dont $0{,}98 \\times 500 = 490$ positifs. Non-malades : $9\\,500$, dont $0{,}9 \\times 9\\,500 = 8\\,550$ négatifs.\n\n|  | $T$ | $\\overline{T}$ | Total |\n|:---:|:---:|:---:|:---:|\n| $M$ | $490$ | $10$ | $500$ |\n| $\\overline{M}$ | $950$ | $8\\,550$ | $9\\,500$ |\n| Total | $1\\,440$ | $8\\,560$ | $10\\,000$ |\n\n**2.** Faux positifs (non malades testés positifs) : $950$. Faux négatifs (malades testés négatifs) : $10$.\n\n**3.** $P_T(M) = \\frac{490}{1\\,440} = \\frac{49}{144} \\approx 0{,}34$. Malgré un test sensible, environ deux personnes positives sur trois ne sont pas malades : la maladie est assez rare, et les faux positifs sont plus nombreux que les vrais positifs.\n\n**4.** $P_{\\overline{T}}(M) = \\frac{10}{8\\,560} = \\frac{1}{856}$, soit environ $0{,}1\\,\\%$ : un test négatif est très rassurant."
    },
    {
      "id": "1TC3-ds-10",
      "title": "Vaccination et grippe",
      "difficulty": 3,
      "points": 5,
      "statement": "Dans une population, $80\\,\\%$ des personnes sont vaccinées contre la grippe. Pendant l'hiver, $5\\,\\%$ des personnes vaccinées et $20\\,\\%$ des personnes non vaccinées ont eu la grippe. On choisit une personne au hasard ; on note $V$ l'événement « la personne est vaccinée » et $G$ l'événement « la personne a eu la grippe ».\n\n1. Construire un arbre pondéré.\n2. Calculer $P(G)$.\n3. Calculer $P_G(V)$.\n4. Un article titre : « La moitié des malades étaient vaccinés : le vaccin ne sert à rien ». Critiquer cette conclusion.",
      "solution": "**1.** $P(V) = 0{,}8$, $P(\\overline{V}) = 0{,}2$ ; $P_V(G) = 0{,}05$, $P_V(\\overline{G}) = 0{,}95$ ; $P_{\\overline{V}}(G) = 0{,}2$, $P_{\\overline{V}}(\\overline{G}) = 0{,}8$.\n\n**2.** $P(G) = 0{,}8 \\times 0{,}05 + 0{,}2 \\times 0{,}2 = 0{,}04 + 0{,}04 = 0{,}08$.\n\n**3.** $P_G(V) = \\frac{P(V \\cap G)}{P(G)} = \\frac{0{,}04}{0{,}08} = 0{,}5$.\n\n**4.** La moitié des malades sont effectivement vaccinés, mais c'est parce que les vaccinés sont beaucoup plus nombreux. Il faut comparer $P_V(G) = 5\\,\\%$ et $P_{\\overline{V}}(G) = 20\\,\\%$ : une personne vaccinée a quatre fois moins de risques d'avoir la grippe. L'article confond $P_G(V)$ et $P_V(G)$."
    },
    {
      "id": "1TC3-ds-11",
      "title": "Quatre lancers d'une pièce équilibrée",
      "difficulty": 3,
      "points": 5,
      "statement": "On lance quatre fois une pièce équilibrée ; les lancers sont indépendants.\n\n1. Combien de chemins comporte l'arbre associé à cette expérience ? Quelle est la probabilité de chacun d'eux ?\n2. Calculer la probabilité d'obtenir quatre fois pile.\n3. Calculer la probabilité d'obtenir exactement deux fois pile.\n4. Calculer la probabilité d'obtenir au moins une fois pile, puis celle d'obtenir exactement trois fois pile.",
      "solution": "**1.** Chaque lancer a deux issues : l'arbre comporte $2^4 = 16$ chemins, tous de probabilité $\\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}$.\n\n**2.** Un seul chemin convient : $P = \\frac{1}{16}$.\n\n**3.** Il faut choisir les positions des deux piles parmi les quatre lancers : 1-2, 1-3, 1-4, 2-3, 2-4, 3-4, soit $6$ chemins. $P = \\frac{6}{16} = \\frac{3}{8}$.\n\n**4.** $P(\\text{au moins un pile}) = 1 - P(\\text{aucun pile}) = 1 - \\frac{1}{16} = \\frac{15}{16}$.\n\nExactement trois piles : la face peut être au lancer 1, 2, 3 ou 4, soit $4$ chemins : $P = \\frac{4}{16} = \\frac{1}{4}$."
    },
    {
      "id": "1TC3-ds-12",
      "title": "Rendre deux événements indépendants",
      "difficulty": 3,
      "points": 5,
      "statement": "On considère deux événements $A$ et $B$ tels que $P(A) = 0{,}4$, $P_A(B) = 0{,}3$ et $P_{\\overline{A}}(B) = x$, où $x$ est un nombre compris entre $0$ et $1$.\n\n1. Exprimer $P(B)$ en fonction de $x$.\n2. Déterminer $x$ pour que $A$ et $B$ soient indépendants.\n3. Dans cette question, $x = 0{,}5$. Calculer $P(B)$ ; les événements $A$ et $B$ sont-ils indépendants ?",
      "solution": "**1.** Par les probabilités totales : $P(B) = 0{,}4 \\times 0{,}3 + 0{,}6 \\times x = 0{,}12 + 0{,}6x$.\n\n**2.** $A$ et $B$ sont indépendants si et seulement si $P_A(B) = P(B)$, c'est-à-dire $0{,}3 = 0{,}12 + 0{,}6x$, soit $0{,}6x = 0{,}18$ et $x = 0{,}3$. C'est logique : la probabilité de $B$ est alors la même que $A$ soit réalisé ou non.\n\n**3.** $P(B) = 0{,}12 + 0{,}6 \\times 0{,}5 = 0{,}42$. Comme $P_A(B) = 0{,}3 \\neq 0{,}42$, les événements ne sont pas indépendants (on peut aussi vérifier que $P(A \\cap B) = 0{,}12 \\neq 0{,}4 \\times 0{,}42 = 0{,}168$)."
    },
    {
      "id": "1TC3-ds-13",
      "title": "Combien d'essais ?",
      "difficulty": 4,
      "points": 5,
      "statement": "Un jeu consiste à tenter de réussir une épreuve ; les tentatives sont indépendantes et on peut en faire au plus quatre.\n\n1. On suppose que la probabilité de réussir une tentative est $0{,}5$. Exprimer en fonction de $n$ (avec $1 \\le n \\le 4$) la probabilité de réussir au moins une fois en $n$ tentatives.\n2. Déterminer le plus petit nombre de tentatives pour que cette probabilité dépasse $0{,}9$.\n3. On suppose maintenant que la probabilité de réussir une tentative est $0{,}3$. Calculer la probabilité de réussir au moins une fois en quatre tentatives.",
      "solution": "**1.** L'événement contraire de « au moins une réussite » est « $n$ échecs », de probabilité $0{,}5^n$. Donc $P_n = 1 - 0{,}5^n$.\n\n**2.** $P_1 = 0{,}5$ ; $P_2 = 0{,}75$ ; $P_3 = 1 - 0{,}125 = 0{,}875$ ; $P_4 = 1 - 0{,}062\\,5 = 0{,}937\\,5$. Il faut au moins $4$ tentatives.\n\n**3.** $0{,}7^2 = 0{,}49$ puis $0{,}7^4 = 0{,}49^2 = 0{,}240\\,1$. La probabilité vaut $1 - 0{,}240\\,1 = 0{,}759\\,9$, soit environ $76\\,\\%$."
    },
    {
      "id": "1TC3-ds-14",
      "title": "Deux tests successifs",
      "difficulty": 4,
      "points": 6,
      "statement": "Une maladie touche $1\\,\\%$ d'une population. Un test est positif chez $99\\,\\%$ des malades et chez $2\\,\\%$ des personnes non malades. On note $M$ « la personne est malade » et $T$ « le test est positif ».\n\n1. Pour une population fictive de $10\\,000$ personnes, déterminer le nombre de malades testés positifs et le nombre de non-malades testés positifs.\n2. En déduire $P_T(M)$.\n3. Les personnes testées positives passent un second test identique, dont le résultat est indépendant du premier pour une personne donnée. Parmi elles, la proportion de malades est donc celle trouvée à la question 2. Construire l'arbre correspondant à cette nouvelle population et montrer que la probabilité d'être malade sachant que le second test est positif vaut $\\frac{99}{103}$.\n4. Commenter l'intérêt d'un second test.",
      "solution": "**1.** Malades : $100$, dont $0{,}99 \\times 100 = 99$ positifs. Non-malades : $9\\,900$, dont $0{,}02 \\times 9\\,900 = 198$ positifs.\n\n**2.** $P_T(M) = \\frac{99}{99 + 198} = \\frac{99}{297} = \\frac{1}{3}$.\n\n**3.** Dans la population des personnes positives, $P(M) = \\frac{1}{3}$ et $P(\\overline{M}) = \\frac{2}{3}$ ; on note $T_2$ « le second test est positif » : $P_M(T_2) = 0{,}99$ et $P_{\\overline{M}}(T_2) = 0{,}02$.\n\n$P(M \\cap T_2) = \\frac{1}{3} \\times 0{,}99 = \\frac{0{,}99}{3}$ et $P(\\overline{M} \\cap T_2) = \\frac{2}{3} \\times 0{,}02 = \\frac{0{,}04}{3}$.\n\nDonc $P_{T_2}(M) = \\frac{0{,}99}{0{,}99 + 0{,}04} = \\frac{0{,}99}{1{,}03} = \\frac{99}{103}$.\n\n**4.** Après un seul test positif, la probabilité d'être malade n'est que d'un tiers ; après deux tests positifs, elle dépasse $96\\,\\%$ (car $\\frac{99}{103} > \\frac{96}{100}$, puisque $9\\,900 > 9\\,888$). Un second test permet d'écarter la plupart des faux positifs."
    },
    {
      "id": "1TC3-ds-15",
      "title": "Un dé et deux urnes",
      "difficulty": 4,
      "points": 5,
      "statement": "On lance un dé équilibré à six faces. Si on obtient $6$, on tire une boule dans l'urne $U_1$, qui contient $3$ boules rouges et $1$ boule bleue ; sinon, on tire une boule dans l'urne $U_2$, qui contient $1$ boule rouge et $3$ boules bleues. On note $S$ l'événement « obtenir $6$ » et $R$ l'événement « tirer une boule rouge ».\n\n1. Construire un arbre pondéré.\n2. Montrer que $P(R) = \\frac{1}{3}$.\n3. On a tiré une boule rouge. Quelle est la probabilité d'avoir obtenu $6$ avec le dé ?\n4. On joue deux parties indépendantes. Quelle est la probabilité de tirer deux boules rouges ?",
      "solution": "**1.** $P(S) = \\frac{1}{6}$, $P(\\overline{S}) = \\frac{5}{6}$ ; $P_S(R) = \\frac{3}{4}$, $P_S(\\overline{R}) = \\frac{1}{4}$ ; $P_{\\overline{S}}(R) = \\frac{1}{4}$, $P_{\\overline{S}}(\\overline{R}) = \\frac{3}{4}$.\n\n**2.** $P(R) = \\frac{1}{6} \\times \\frac{3}{4} + \\frac{5}{6} \\times \\frac{1}{4} = \\frac{3}{24} + \\frac{5}{24} = \\frac{8}{24} = \\frac{1}{3}$.\n\n**3.** $P_R(S) = \\frac{P(S \\cap R)}{P(R)} = \\frac{3}{24} \\div \\frac{8}{24} = \\frac{3}{8}$. Savoir que la boule est rouge fait passer la probabilité d'avoir obtenu $6$ de $\\frac{1}{6}$ à $\\frac{3}{8}$.\n\n**4.** Les parties sont indépendantes : $P = \\frac{1}{3} \\times \\frac{1}{3} = \\frac{1}{9}$."
    },
    {
      "id": "1TC3-ds-16",
      "title": "Contrôle qualité d'un lot",
      "difficulty": 4,
      "points": 6,
      "statement": "Une machine produit des pièces dont chacune est défectueuse avec une probabilité de $0{,}1$, indépendamment des autres. Un contrôleur prélève des pièces et refuse le lot si au moins deux pièces prélevées sont défectueuses.\n\n1. Le contrôleur prélève trois pièces. Calculer la probabilité qu'aucune pièce ne soit défectueuse, puis qu'exactement une pièce le soit.\n2. En déduire la probabilité que le lot soit refusé.\n3. Le contrôleur prélève désormais quatre pièces. Calculer la probabilité que le lot soit refusé.\n4. Comparer les résultats des questions 2 et 3 et interpréter.",
      "solution": "**1.** Aucune pièce défectueuse : $0{,}9^3 = 0{,}729$. Exactement une : trois chemins de probabilité $0{,}1 \\times 0{,}9^2 = 0{,}081$, soit $3 \\times 0{,}081 = 0{,}243$.\n\n**2.** $P(\\text{refus}) = 1 - 0{,}729 - 0{,}243 = 0{,}028$.\n\n**3.** Aucune pièce défectueuse : $0{,}9^4 = 0{,}656\\,1$. Exactement une : quatre chemins de probabilité $0{,}1 \\times 0{,}9^3 = 0{,}072\\,9$, soit $0{,}291\\,6$. Donc $P(\\text{refus}) = 1 - 0{,}656\\,1 - 0{,}291\\,6 = 0{,}052\\,3$.\n\n**4.** Avec quatre pièces, la probabilité de refuser le lot est presque doublée ($0{,}052\\,3$ contre $0{,}028$) : plus on prélève de pièces, plus il est probable de trouver au moins deux pièces défectueuses, même si la qualité de la production est la même."
    }
  ],
  "1TC4": [
    { id: "1TC4-ds-01", title: "Reconnaître une suite arithmétique", difficulty: 1, points: 3,
      statement: `Pour chacune des suites suivantes, définies pour tout entier naturel $n$, dire si elle est arithmétique. Le cas échéant, préciser sa raison.

1. $u(n) = 7 + 3n$.
2. $v(0) = 4$ et $v(n+1) = v(n) - 2{,}5$.
3. $w(n) = n^2$.`,
      solution: `**1.** $u(n+1) - u(n) = 7 + 3(n + 1) - (7 + 3n) = 3$ : la différence entre deux termes consécutifs est constante, donc $u$ est arithmétique de raison $3$ (et de premier terme $u(0) = 7$).

**2.** Par définition, on passe d'un terme au suivant en ajoutant $-2{,}5$ : $v$ est arithmétique de raison $-2{,}5$.

**3.** $w(0) = 0$, $w(1) = 1$, $w(2) = 4$ : $w(1) - w(0) = 1$ mais $w(2) - w(1) = 3$. Les écarts ne sont pas constants, donc $w$ n'est pas arithmétique.` },
    { id: "1TC4-ds-02", title: "Calculer des termes", difficulty: 1, points: 4,
      statement: `La suite $u$ est arithmétique de premier terme $u(0) = -6$ et de raison $r = 4$.

1. Calculer $u(1)$, $u(2)$ et $u(3)$.
2. Exprimer $u(n)$ en fonction de $n$.
3. Calculer $u(20)$.
4. Donner le sens de variation de la suite $u$, en justifiant.`,
      solution: `**1.** On ajoute $4$ à chaque étape : $u(1) = -6 + 4 = -2$, $u(2) = -2 + 4 = 2$, $u(3) = 2 + 4 = 6$.

**2.** Pour une suite arithmétique, $u(n) = u(0) + nr$, donc $u(n) = -6 + 4n$.

**3.** $u(20) = -6 + 4 \\times 20 = -6 + 80 = 74$.

**4.** La raison $r = 4$ est strictement positive : chaque terme est supérieur au précédent, la suite $u$ est croissante.` },
    { id: "1TC4-ds-03", title: "Une fonction affine", difficulty: 1, points: 4,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = -2x + 9$.

1. Calculer $f(0)$ et $f(3)$.
2. Donner le sens de variation de $f$, en justifiant.
3. Résoudre l'équation $f(x) = 0$.
4. Lorsque $x$ augmente de $1$, comment varie $f(x)$ ?`,
      solution: `**1.** $f(0) = 9$ (c'est l'ordonnée à l'origine) et $f(3) = -6 + 9 = 3$.

**2.** $f$ est affine de coefficient directeur $a = -2 < 0$ : elle est décroissante sur $\\mathbb{R}$.

**3.** $-2x + 9 = 0 \\iff 2x = 9 \\iff x = 4{,}5$. La solution est $4{,}5$.

**4.** $f(x + 1) - f(x) = -2(x + 1) + 9 - (-2x + 9) = -2$ : lorsque $x$ augmente de $1$, $f(x)$ diminue de $2$ (c'est le coefficient directeur).` },
    { id: "1TC4-ds-04", title: "Location de vélos", difficulty: 1, points: 4,
      statement: `Un service de vélos en libre-service facture $12$ € d'inscription puis $1{,}50$ € par trajet. On note $f(x)$ le coût total, en euros, pour $x$ trajets.

1. Calculer le coût de $10$ trajets.
2. Exprimer $f(x)$ en fonction de $x$.
3. Avec un budget de $42$ €, combien de trajets peut-on faire au maximum ?
4. Interpréter le coefficient directeur de $f$ dans le contexte.`,
      solution: `**1.** $12 + 10 \\times 1{,}5 = 12 + 15 = 27$ : $10$ trajets coûtent $27$ €.

**2.** $f(x) = 1{,}5x + 12$ : c'est une fonction affine.

**3.** On résout $1{,}5x + 12 \\leqslant 42 \\iff 1{,}5x \\leqslant 30 \\iff x \\leqslant 20$. On peut faire au maximum $20$ trajets (qui coûtent exactement $42$ €).

**4.** Le coefficient directeur $1{,}5$ est le prix d'un trajet : chaque trajet supplémentaire augmente le coût de $1{,}50$ €.` },
    { id: "1TC4-ds-05", title: "Une suite qui commence à u(1)", difficulty: 2, points: 5,
      statement: `Un club de théâtre compte $40$ adhérents la première année, puis gagne $6$ adhérents chaque année. On note $u(n)$ le nombre d'adhérents la $n$-ième année, de sorte que $u(1) = 40$.

1. Calculer $u(2)$ et $u(3)$.
2. Justifier que $u(n) = 34 + 6n$ pour tout entier $n \\geqslant 1$.
3. Calculer $u(10)$.
4. Quelle année le club comptera-t-il exactement $100$ adhérents ?`,
      solution: `**1.** $u(2) = 40 + 6 = 46$ et $u(3) = 46 + 6 = 52$.

**2.** La suite est arithmétique de raison $6$ et commence à $u(1)$, donc $u(n) = u(1) + (n - 1) \\times 6 = 40 + 6n - 6 = 34 + 6n$.

**3.** $u(10) = 34 + 60 = 94$ adhérents la dixième année.

**4.** $34 + 6n = 100 \\iff 6n = 66 \\iff n = 11$ : le club comptera $100$ adhérents la onzième année.

*Remarque* : avec $u(n) = u(1) + nr$ (erreur fréquente), on trouverait un décalage d'un an.` },
    { id: "1TC4-ds-06", title: "Raison à partir de deux termes", difficulty: 2, points: 5,
      statement: `La suite $u$ est arithmétique, avec $u(4) = 23$ et $u(9) = 48$.

1. Déterminer la raison $r$ de la suite.
2. Calculer $u(0)$.
3. En déduire l'expression de $u(n)$ en fonction de $n$.
4. Le nombre $2\\,026$ est-il un terme de la suite ? Justifier.`,
      solution: `**1.** De $u(4)$ à $u(9)$ il y a $5$ pas : $u(9) = u(4) + 5r$, donc $5r = 48 - 23 = 25$ et $r = 5$.

**2.** $u(4) = u(0) + 4r$, donc $u(0) = 23 - 20 = 3$.

**3.** $u(n) = 3 + 5n$.

**4.** $3 + 5n = 2\\,026 \\iff 5n = 2\\,023 \\iff n = 404{,}6$. Ce n'est pas un entier naturel : $2\\,026$ n'est pas un terme de la suite (on a $u(404) = 2\\,023$ et $u(405) = 2\\,028$).` },
    { id: "1TC4-ds-07", title: "Tarif d'un taxi", difficulty: 2, points: 5,
      statement: `Le prix d'une course de taxi est une fonction affine de la distance parcourue : $f(x) = ax + b$, où $x$ est la distance en km et $f(x)$ le prix en euros. Une course de $6$ km coûte $14{,}60$ € et une course de $10$ km coûte $21$ €.

1. Déterminer $a$ et $b$.
2. Interpréter $a$ et $b$ dans le contexte.
3. Quelle distance peut-on parcourir pour $37$ € ?`,
      solution: `**1.** $a = \\frac{f(10) - f(6)}{10 - 6} = \\frac{21 - 14{,}6}{4} = \\frac{6{,}4}{4} = 1{,}6$. Puis $f(6) = 1{,}6 \\times 6 + b = 9{,}6 + b = 14{,}6$, donc $b = 5$. Ainsi $f(x) = 1{,}6x + 5$ (vérification : $f(10) = 16 + 5 = 21$).

**2.** $b = 5$ € est la prise en charge (prix pour $0$ km) ; $a = 1{,}6$ € est le prix de chaque kilomètre parcouru.

**3.** $1{,}6x + 5 = 37 \\iff 1{,}6x = 32 \\iff x = 20$ : on peut parcourir $20$ km.` },
    { id: "1TC4-ds-08", title: "Points alignés", difficulty: 2, points: 4,
      statement: `Une suite $u$ vérifie $u(0) = 12$, $u(1) = 9{,}5$, $u(2) = 7$ et $u(3) = 4{,}5$, et on suppose que l'évolution se poursuit de la même façon.

1. Justifier que ces termes sont ceux d'une suite arithmétique dont on précisera la raison.
2. Les points de coordonnées $\\left(n ; u(n)\\right)$ sont alignés. Donner une équation de la droite qui les porte.
3. Déterminer le premier rang $n$ pour lequel $u(n) < 0$.`,
      solution: `**1.** $9{,}5 - 12 = 7 - 9{,}5 = 4{,}5 - 7 = -2{,}5$ : on retranche $2{,}5$ à chaque étape. La suite est arithmétique de raison $-2{,}5$ et $u(n) = 12 - 2{,}5n$.

**2.** Les points sont sur la droite de coefficient directeur $-2{,}5$ et d'ordonnée à l'origine $12$ : $y = -2{,}5x + 12$.

**3.** $12 - 2{,}5n < 0 \\iff 2{,}5n > 12 \\iff n > 4{,}8$. Le premier rang est $n = 5$ : $u(4) = 2 \\geqslant 0$ et $u(5) = -0{,}5 < 0$.` },
    { id: "1TC4-ds-09", title: "Réserve d'eau et programme Python", difficulty: 3, points: 6,
      statement: `Un réservoir contient $18\\,000$ L d'eau le 1er juin. En l'absence de pluie, on en consomme $650$ L par jour. On note $u(n)$ le volume, en litres, $n$ jours après le 1er juin.

1. Exprimer $u(n)$ en fonction de $n$.
2. Calculer $u(10)$.
3. Au bout de combien de jours le volume passera-t-il strictement sous $5\\,000$ L ?
4. Compléter le programme Python ci-dessous pour qu'il affiche la réponse à la question 3.
\`\`\`python
u = 18000
n = 0
while ...:
    u = ...
    n = n + 1
print(n)
\`\`\``,
      solution: `**1.** On retire la même quantité chaque jour : $u$ est arithmétique de raison $-650$ et $u(n) = 18\\,000 - 650n$.

**2.** $u(10) = 18\\,000 - 6\\,500 = 11\\,500$ L.

**3.** $18\\,000 - 650n < 5\\,000 \\iff 650n > 13\\,000 \\iff n > 20$. Pour $n = 20$, il reste exactement $5\\,000$ L, ce qui ne convient pas (inégalité stricte) : le volume passe sous $5\\,000$ L au bout de $21$ jours ($u(21) = 4\\,350$ L).

**4.** La boucle doit continuer tant que le volume est supérieur ou égal à $5\\,000$ L :
\`\`\`python
u = 18000
n = 0
while u >= 5000:
    u = u - 650
    n = n + 1
print(n)
\`\`\`
Le programme affiche $21$.` },
    { id: "1TC4-ds-10", title: "Choisir un abonnement", difficulty: 3, points: 6,
      statement: `Une salle de sport propose trois formules :
- formule A : $15$ € par séance ;
- formule B : un abonnement annuel de $120$ € puis $6$ € par séance ;
- formule C : un forfait illimité de $390$ € par an.

On note $x$ le nombre de séances dans l'année.

1. Calculer le coût des formules A et B pour $10$ séances.
2. Exprimer le coût $f_A(x)$ de la formule A et le coût $f_B(x)$ de la formule B en fonction de $x$.
3. À partir de combien de séances la formule B est-elle strictement moins chère que la formule A ?
4. Comparer les trois formules pour $45$ séances.`,
      solution: `**1.** A : $15 \\times 10 = 150$ € ; B : $120 + 6 \\times 10 = 180$ €.

**2.** $f_A(x) = 15x$ et $f_B(x) = 6x + 120$ : ce sont deux fonctions affines (la première est linéaire).

**3.** $6x + 120 < 15x \\iff 120 < 9x \\iff x > \\frac{40}{3}$, et $\\frac{40}{3} \\approx 13{,}3$. La formule B est strictement moins chère à partir de $14$ séances ($204$ € contre $210$ €).

**4.** Pour $45$ séances : A coûte $675$ €, B coûte $120 + 270 = 390$ € et C coûte $390$ €. Les formules B et C reviennent au même prix, la formule A est nettement plus chère.` },
    { id: "1TC4-ds-11", title: "Deux villes", difficulty: 3, points: 6,
      statement: `En 2026, la ville A compte $42\\,000$ habitants et gagne $900$ habitants par an ; la ville B compte $50\\,000$ habitants et en perd $700$ par an. On note $a(n)$ et $b(n)$ les populations respectives en $2026 + n$, en supposant que ces évolutions se poursuivent.

1. Exprimer $a(n)$ et $b(n)$ en fonction de $n$.
2. Calculer les populations des deux villes en 2030.
3. En quelle année la population de la ville A dépassera-t-elle strictement celle de la ville B ?`,
      solution: `**1.** Les deux suites sont arithmétiques : $a(n) = 42\\,000 + 900n$ et $b(n) = 50\\,000 - 700n$.

**2.** 2030 correspond à $n = 4$ : $a(4) = 42\\,000 + 3\\,600 = 45\\,600$ et $b(4) = 50\\,000 - 2\\,800 = 47\\,200$.

**3.** $42\\,000 + 900n > 50\\,000 - 700n \\iff 1\\,600n > 8\\,000 \\iff n > 5$. Pour $n = 5$, les deux villes comptent $46\\,500$ habitants (égalité) ; la ville A dépasse strictement la ville B pour $n = 6$, c'est-à-dire en $2032$ ($47\\,400$ contre $45\\,800$).` },
    { id: "1TC4-ds-12", title: "Température et altitude", difficulty: 3, points: 6,
      statement: `En montagne, on modélise la température $T(h)$, en °C, en fonction de l'altitude $h$, en mètres, par une fonction affine. Un jour donné, il fait $18$ °C à $400$ m d'altitude et $9$ °C à $1\\,900$ m.

1. Déterminer l'expression de $T(h)$.
2. Interpréter le coefficient directeur pour une montée de $100$ m.
3. Quelle température le modèle prévoit-il à $3\\,000$ m ?
4. À partir de quelle altitude la température devient-elle négative ?`,
      solution: `**1.** $a = \\frac{9 - 18}{1\\,900 - 400} = \\frac{-9}{1\\,500} = -0{,}006$. Puis $T(400) = -0{,}006 \\times 400 + b = -2{,}4 + b = 18$, donc $b = 20{,}4$ : $T(h) = -0{,}006h + 20{,}4$.

**2.** Quand l'altitude augmente de $100$ m, la température varie de $100 \\times (-0{,}006) = -0{,}6$ °C : elle baisse de $0{,}6$ °C.

**3.** $T(3\\,000) = -18 + 20{,}4 = 2{,}4$ °C.

**4.** $-0{,}006h + 20{,}4 < 0 \\iff 0{,}006h > 20{,}4 \\iff h > 3\\,400$ : la température est négative au-dessus de $3\\,400$ m.` },
    { id: "1TC4-ds-13", title: "Épargne et dépenses", difficulty: 4, points: 8,
      statement: `Au début de l'année, Léa dispose de $350$ € et épargne $45$ € par mois ; Hugo dispose de $980$ € et dépense $30$ € par mois sans rien ajouter. On note $\\ell(n)$ et $h(n)$ leurs avoirs respectifs, en euros, au bout de $n$ mois.

1. Exprimer $\\ell(n)$ et $h(n)$ en fonction de $n$, et donner le sens de variation de chaque suite.
2. Au bout de combien de mois Léa aura-t-elle strictement plus d'argent qu'Hugo ? Préciser alors les deux montants.
3. Écrire un programme Python qui affiche ce nombre de mois.
4. Au bout de combien de mois Hugo n'aura-t-il plus d'argent ? Le modèle reste-t-il valable ensuite ?`,
      solution: `**1.** $\\ell(n) = 350 + 45n$ (suite arithmétique de raison $45 > 0$, croissante) et $h(n) = 980 - 30n$ (raison $-30 < 0$, décroissante).

**2.** $350 + 45n > 980 - 30n \\iff 75n > 630 \\iff n > 8{,}4$. Le premier entier est $n = 9$ : $\\ell(9) = 350 + 405 = 755$ € et $h(9) = 980 - 270 = 710$ €. (Pour $n = 8$ : $710$ € contre $740$ €.)

**3.** Un programme possible :
\`\`\`python
l = 350
h = 980
n = 0
while l <= h:
    l = l + 45
    h = h - 30
    n = n + 1
print(n)
\`\`\`
Il affiche $9$.

**4.** $980 - 30n = 0 \\iff n = \\frac{98}{3} \\approx 32{,}7$ : après $32$ mois il reste $20$ €, donc Hugo ne peut plus dépenser $30$ € au $33$e mois. Le modèle n'est plus valable au-delà : un avoir ne peut pas devenir négatif.` },
    { id: "1TC4-ds-14", title: "Location de voiture : trois tarifs", difficulty: 4, points: 8,
      statement: `Une agence propose trois tarifs pour une location à la journée, selon le nombre $x$ de kilomètres parcourus :
- tarif A : $0{,}40$ € par km ;
- tarif B : $60$ € de forfait puis $0{,}25$ € par km ;
- tarif C : $150$ €, kilométrage illimité.

1. Exprimer les coûts $f_A(x)$, $f_B(x)$ et $f_C(x)$.
2. Calculer les trois coûts pour $300$ km.
3. Résoudre $f_B(x) < f_A(x)$, puis $f_B(x) < f_C(x)$.
4. Montrer que le tarif B n'est jamais strictement le moins cher des trois, et indiquer le tarif le plus avantageux selon $x$.`,
      solution: `**1.** $f_A(x) = 0{,}4x$, $f_B(x) = 0{,}25x + 60$ et $f_C(x) = 150$.

**2.** Pour $300$ km : A coûte $120$ €, B coûte $75 + 60 = 135$ € et C coûte $150$ €.

**3.** $0{,}25x + 60 < 0{,}4x \\iff 60 < 0{,}15x \\iff x > 400$. $0{,}25x + 60 < 150 \\iff 0{,}25x < 90 \\iff x < 360$.

**4.** B est moins cher que A seulement si $x > 400$, et moins cher que C seulement si $x < 360$ : ces deux conditions sont incompatibles, donc B n'est jamais strictement le moins cher. Enfin $0{,}4x < 150 \\iff x < 375$ : A est le plus avantageux pour moins de $375$ km, C au-delà, et les deux coûtent $150$ € pour $375$ km (B coûte alors $153{,}75$ €).` },
    { id: "1TC4-ds-15", title: "Production agricole", difficulty: 4, points: 8,
      statement: `Une coopérative a relevé sa production annuelle, en tonnes :

| Année | 2022 | 2023 | 2024 | 2025 | 2026 |
|---|---|---|---|---|---|
| Production | $1\\,250$ | $1\\,310$ | $1\\,370$ | $1\\,430$ | $1\\,490$ |

On note $u(n)$ la production de l'année $2022 + n$.

1. Justifier qu'un modèle par une suite arithmétique est adapté, et exprimer $u(n)$ en fonction de $n$.
2. Quelle production le modèle prévoit-il en 2035 ?
3. La coopérative vise une production d'au moins $2\\,000$ tonnes. En quelle année l'atteindra-t-elle selon le modèle ?
4. Donner une limite de ce modèle sur le long terme.`,
      solution: `**1.** Les écarts successifs valent tous $60$ tonnes : la variation absolue est constante, la croissance est linéaire. $u$ est arithmétique de premier terme $u(0) = 1\\,250$ et de raison $60$ : $u(n) = 1\\,250 + 60n$.

**2.** 2035 correspond à $n = 13$ : $u(13) = 1\\,250 + 780 = 2\\,030$ tonnes.

**3.** $1\\,250 + 60n \\geqslant 2\\,000 \\iff 60n \\geqslant 750 \\iff n \\geqslant 12{,}5$. Le premier entier est $n = 13$ ($u(12) = 1\\,970$, $u(13) = 2\\,030$) : l'objectif est atteint en 2035.

**4.** Les surfaces cultivables et les rendements sont limités : la production ne peut pas augmenter indéfiniment de $60$ tonnes par an. Le modèle n'est raisonnable qu'à court ou moyen terme.` },
    { id: "1TC4-ds-16", title: "Allongement d'un ressort", difficulty: 4, points: 7,
      statement: `La longueur $L(m)$, en cm, d'un ressort auquel on suspend une masse $m$, en grammes, est une fonction affine de $m$. Avec $200$ g, le ressort mesure $14$ cm ; avec $520$ g, il mesure $18$ cm.

1. Déterminer l'expression de $L(m)$.
2. Quelle est la longueur du ressort à vide ?
3. Quelle masse faut-il suspendre pour que le ressort mesure $20$ cm ?
4. Le ressort se déforme définitivement au-delà de $25$ cm. Quelle masse maximale peut-on suspendre ?`,
      solution: `**1.** $a = \\frac{18 - 14}{520 - 200} = \\frac{4}{320} = 0{,}012\\,5$ cm par gramme. $L(200) = 0{,}012\\,5 \\times 200 + b = 2{,}5 + b = 14$, donc $b = 11{,}5$ : $L(m) = 0{,}012\\,5m + 11{,}5$.

**2.** À vide ($m = 0$), $L(0) = 11{,}5$ cm.

**3.** $0{,}012\\,5m + 11{,}5 = 20 \\iff 0{,}012\\,5m = 8{,}5 \\iff m = \\frac{8{,}5}{0{,}012\\,5} = 680$ g.

**4.** $0{,}012\\,5m + 11{,}5 \\leqslant 25 \\iff 0{,}012\\,5m \\leqslant 13{,}5 \\iff m \\leqslant 1\\,080$ : on peut suspendre au plus $1\\,080$ g.` }
  ],
  "1TC5": [
    { id: "1TC5-ds-01", title: "Paraboles de référence", difficulty: 1, points: 4,
      statement: `On considère les fonctions définies sur $\\mathbb{R}$ par $f(x) = 2x^2$, $g(x) = -0{,}5x^2$ et $h(x) = x^2 - 4$.

1. Pour chacune, indiquer si sa parabole est tournée vers le haut ou vers le bas.
2. Donner les coordonnées du sommet de chaque parabole.
3. Calculer $f(-2)$, $g(-2)$ et $h(-2)$.
4. Résoudre l'équation $h(x) = 0$.`,
      solution: `**1.** $f$ : coefficient $2 > 0$, tournée vers le haut ; $g$ : coefficient $-0{,}5 < 0$, tournée vers le bas ; $h$ : coefficient $1 > 0$, tournée vers le haut.

**2.** Les sommets sont $\\left(0 ; 0\\right)$ pour $f$ et $g$, et $\\left(0 ; -4\\right)$ pour $h$ (courbe de $x \\mapsto x^2$ décalée de $4$ vers le bas).

**3.** $f(-2) = 2 \\times 4 = 8$ ; $g(-2) = -0{,}5 \\times 4 = -2$ ; $h(-2) = 4 - 4 = 0$.

**4.** $x^2 - 4 = (x - 2)(x + 2)$, donc $h(x) = 0 \\iff x = 2$ ou $x = -2$.` },
    { id: "1TC5-ds-02", title: "Lire une forme factorisée", difficulty: 1, points: 4,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = 3(x - 2)(x + 6)$.

1. Déterminer les racines de $f$.
2. Calculer $f(0)$ et interpréter graphiquement le résultat.
3. La parabole est-elle tournée vers le haut ou vers le bas ?
4. Déterminer l'abscisse puis l'ordonnée du sommet.`,
      solution: `**1.** $x - 2 = 0 \\iff x = 2$ et $x + 6 = 0 \\iff x = -6$ : les racines sont $-6$ et $2$.

**2.** $f(0) = 3 \\times (-2) \\times 6 = -36$ : la parabole coupe l'axe des ordonnées au point $\\left(0 ; -36\\right)$.

**3.** Le coefficient $a = 3$ est positif : la parabole est tournée vers le haut.

**4.** L'abscisse du sommet est la moyenne des racines : $\\alpha = \\frac{-6 + 2}{2} = -2$. Son ordonnée est $f(-2) = 3 \\times (-4) \\times 4 = -48$ : le sommet est $\\left(-2 ; -48\\right)$ et $-48$ est le minimum de $f$.` },
    { id: "1TC5-ds-03", title: "Équations produits", difficulty: 1, points: 3,
      statement: `Résoudre dans $\\mathbb{R}$ les équations suivantes.

1. $(x - 5)(x + 1) = 0$
2. $-2x(x - 3) = 0$
3. $(2x - 1)(x + 4) = 0$
4. $x^2 = 9$`,
      solution: `On utilise : un produit est nul si et seulement si l'un de ses facteurs est nul.

**1.** $x - 5 = 0$ ou $x + 1 = 0$ : les solutions sont $5$ et $-1$.

**2.** Le facteur $-2$ n'est jamais nul ; $x = 0$ ou $x - 3 = 0$ : les solutions sont $0$ et $3$.

**3.** $2x - 1 = 0 \\iff x = \\frac{1}{2}$ et $x + 4 = 0 \\iff x = -4$ : les solutions sont $\\frac{1}{2}$ et $-4$.

**4.** $x^2 - 9 = 0 \\iff (x - 3)(x + 3) = 0$ : les solutions sont $3$ et $-3$.` },
    { id: "1TC5-ds-04", title: "Une parabole symétrique", difficulty: 1, points: 4,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = -x^2 + 9$.

1. Calculer $f(0)$, $f(2)$ et $f(-2)$.
2. Justifier que, pour tout réel $x$, $f(-x) = f(x)$. Que peut-on en déduire pour la parabole ?
3. Écrire $f(x)$ sous forme factorisée, puis résoudre $f(x) = 0$.
4. Quel est le maximum de $f$ ?`,
      solution: `**1.** $f(0) = 9$, $f(2) = -4 + 9 = 5$ et $f(-2) = -4 + 9 = 5$.

**2.** $f(-x) = -(-x)^2 + 9 = -x^2 + 9 = f(x)$ : la parabole est symétrique par rapport à l'axe des ordonnées.

**3.** $f(x) = 9 - x^2 = -(x^2 - 9) = -(x - 3)(x + 3)$. Donc $f(x) = 0 \\iff x = 3$ ou $x = -3$.

**4.** La parabole est tournée vers le bas ($a = -1 < 0$) et son sommet est $\\left(0 ; 9\\right)$ : le maximum de $f$ est $9$, atteint en $0$.` },
    { id: "1TC5-ds-05", title: "Axe, sommet et variations", difficulty: 2, points: 5,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = -(x + 2)(x - 4)$.

1. Déterminer les racines de $f$.
2. Donner une équation de l'axe de symétrie de la parabole.
3. Déterminer les coordonnées du sommet. S'agit-il d'un minimum ou d'un maximum ?
4. Donner le sens de variation de $f$.`,
      solution: `**1.** Les racines sont $-2$ et $4$.

**2.** L'axe de symétrie passe par le milieu des racines : $x = \\frac{-2 + 4}{2} = 1$.

**3.** $f(1) = -(1 + 2)(1 - 4) = -3 \\times (-3) = 9$. Le sommet est $\\left(1 ; 9\\right)$ ; comme $a = -1 < 0$, la parabole est tournée vers le bas et $9$ est le maximum de $f$.

**4.** $f$ est croissante sur $\\left]-\\infty ; 1\\right]$ puis décroissante sur $\\left[1 ; +\\infty\\right[$.` },
    { id: "1TC5-ds-06", title: "Tableau de signes", difficulty: 2, points: 5,
      statement: `On considère la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = 2(x - 1)(x + 3)$.

1. Dresser le tableau de signes de $f(x)$.
2. Résoudre l'inéquation $f(x) > 0$.
3. Résoudre l'inéquation $f(x) \\leqslant 0$.`,
      solution: `**1.** Les racines sont $-3$ et $1$ ; $x + 3 > 0 \\iff x > -3$ et $x - 1 > 0 \\iff x > 1$, et $2 > 0$.

| $x$ | $-\\infty$ | | $-3$ | | $1$ | | $+\\infty$ |
|---|---|---|---|---|---|---|---|
| $x + 3$ | | $-$ | $0$ | $+$ | | $+$ | |
| $x - 1$ | | $-$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |

On retrouve la règle : du signe de $a = 2$ à l'extérieur des racines, du signe contraire entre elles.

**2.** $S = \\left]-\\infty ; -3\\right[ \\cup \\left]1 ; +\\infty\\right[$.

**3.** $S = \\left[-3 ; 1\\right]$ (les racines sont incluses car l'inégalité est large).` },
    { id: "1TC5-ds-07", title: "Deux points de même ordonnée", difficulty: 2, points: 4,
      statement: `Une fonction $f$ du second degré vérifie $f(-3) = 12$, $f(7) = 12$, $f(2) = -13$ et $f(0) = -1$.

1. Déterminer une équation de l'axe de symétrie de sa parabole.
2. En déduire les coordonnées du sommet.
3. La parabole est-elle tournée vers le haut ou vers le bas ? Justifier.
4. Sans calculer l'expression de $f$, donner la valeur de $f(4)$.`,
      solution: `**1.** Les points $\\left(-3 ; 12\\right)$ et $\\left(7 ; 12\\right)$ ont la même ordonnée, donc sont symétriques par rapport à l'axe : $x = \\frac{-3 + 7}{2} = 2$.

**2.** Le sommet est sur l'axe, d'abscisse $2$ : c'est $\\left(2 ; f(2)\\right) = \\left(2 ; -13\\right)$.

**3.** Au sommet, $f$ vaut $-13$, valeur plus petite que $f(-3) = 12$ : le sommet est un minimum, la parabole est tournée vers le haut.

**4.** $0$ et $4$ sont symétriques par rapport à $2$ (leur moyenne vaut $2$), donc $f(4) = f(0) = -1$.` },
    { id: "1TC5-ds-08", title: "Retrouver une forme factorisée", difficulty: 2, points: 5,
      statement: `Une parabole coupe l'axe des abscisses aux points d'abscisses $-1$ et $5$, et passe par le point $\\left(0 ; -10\\right)$. Elle représente une fonction $f(x) = a(x + 1)(x - 5)$.

1. Déterminer $a$.
2. Déterminer les coordonnées du sommet de la parabole.
3. Développer $f(x)$.`,
      solution: `**1.** $f(0) = a \\times 1 \\times (-5) = -5a$ et $f(0) = -10$, donc $a = 2$ : $f(x) = 2(x + 1)(x - 5)$.

**2.** L'abscisse du sommet est $\\frac{-1 + 5}{2} = 2$ et $f(2) = 2 \\times 3 \\times (-3) = -18$ : le sommet est $\\left(2 ; -18\\right)$, minimum de $f$ car $a > 0$.

**3.** $(x + 1)(x - 5) = x^2 - 5x + x - 5 = x^2 - 4x - 5$, donc $f(x) = 2x^2 - 8x - 10$. Vérification : $f(0) = -10$.` },
    { id: "1TC5-ds-09", title: "Trajectoire d'un ballon", difficulty: 3, points: 6,
      statement: `Un ballon est frappé depuis le sol. Sa hauteur, en mètres, est $h(x) = -0{,}05x(x - 30)$, où $x$ est la distance horizontale parcourue, en mètres.

1. À quelle distance du point de départ le ballon retombe-t-il au sol ?
2. Déterminer la hauteur maximale atteinte par le ballon.
3. Vérifier que, pour tout réel $x$, $h(x) - 10 = -0{,}05(x - 10)(x - 20)$.
4. En déduire sur quelle distance horizontale le ballon est à une hauteur d'au moins $10$ m.`,
      solution: `**1.** $h(x) = 0 \\iff x = 0$ ou $x = 30$ : le ballon retombe à $30$ m de son point de départ.

**2.** $a = -0{,}05 < 0$ : le maximum est atteint au sommet, d'abscisse $\\frac{0 + 30}{2} = 15$. $h(15) = -0{,}05 \\times 15 \\times (-15) = 0{,}05 \\times 225 = 11{,}25$ m.

**3.** $h(x) = -0{,}05x^2 + 1{,}5x$, donc $h(x) - 10 = -0{,}05x^2 + 1{,}5x - 10$. Et $-0{,}05(x - 10)(x - 20) = -0{,}05(x^2 - 30x + 200) = -0{,}05x^2 + 1{,}5x - 10$ : l'égalité est vérifiée.

**4.** $h(x) \\geqslant 10 \\iff -0{,}05(x - 10)(x - 20) \\geqslant 0$. Le coefficient $-0{,}05$ est négatif : l'expression est positive entre les racines. Donc $x \\in \\left[10 ; 20\\right]$ : le ballon est au-dessus de $10$ m sur $10$ m de distance horizontale.` },
    { id: "1TC5-ds-10", title: "Bénéfice d'une entreprise", difficulty: 3, points: 7,
      statement: `Une entreprise fabrique $x$ centaines d'objets par mois, avec $x \\in \\left[0 ; 80\\right]$. Son bénéfice, en milliers d'euros, est $B(x) = -2(x - 10)(x - 60)$.

1. Calculer $B(0)$ et interpréter.
2. Déterminer les racines de $B$.
3. Pour quelles productions l'entreprise réalise-t-elle un bénéfice positif ou nul ?
4. Déterminer la production qui maximise le bénéfice et le bénéfice maximal.`,
      solution: `**1.** $B(0) = -2 \\times (-10) \\times (-60) = -1\\,200$ : sans production, l'entreprise perd $1\\,200$ milliers d'euros, soit $1{,}2$ million d'euros (charges fixes).

**2.** Les racines sont $10$ et $60$.

**3.** $a = -2 < 0$ : $B(x)$ est positif ou nul entre les racines. Sur $\\left[0 ; 80\\right]$, le bénéfice est positif ou nul pour $x \\in \\left[10 ; 60\\right]$, c'est-à-dire de $1\\,000$ à $6\\,000$ objets.

**4.** Le maximum est atteint au sommet, d'abscisse $\\frac{10 + 60}{2} = 35$ ; $B(35) = -2 \\times 25 \\times (-25) = 1\\,250$. Le bénéfice maximal est de $1\\,250$ milliers d'euros, pour $3\\,500$ objets.` },
    { id: "1TC5-ds-11", title: "L'arche d'un pont", difficulty: 3, points: 7,
      statement: `Une arche de pont a la forme d'une parabole. Dans un repère d'unité le mètre, l'axe des abscisses représente la route : l'arche part du point d'abscisse $0$ et retombe au point d'abscisse $50$. Sa hauteur maximale est $12{,}5$ m. On modélise l'arche par $f(x) = a\\,x(x - 50)$.

1. Déterminer l'abscisse du sommet.
2. Déterminer $a$.
3. Calculer la hauteur de l'arche à $10$ m de son pied gauche.
4. En quel autre point la hauteur est-elle la même ? Justifier sans calcul.`,
      solution: `**1.** Le sommet est sur l'axe de symétrie, au milieu des racines $0$ et $50$ : son abscisse est $25$.

**2.** $f(25) = a \\times 25 \\times (-25) = -625a$ et $f(25) = 12{,}5$, donc $a = -\\frac{12{,}5}{625} = -0{,}02$ : $f(x) = -0{,}02\\,x(x - 50)$.

**3.** $f(10) = -0{,}02 \\times 10 \\times (-40) = 8$ : la hauteur est de $8$ m.

**4.** Par symétrie par rapport à la droite $x = 25$, le point symétrique de $10$ est $40$ (car $\\frac{10 + 40}{2} = 25$) : $f(40) = 8$ m également.` },
    { id: "1TC5-ds-12", title: "Deux paraboles", difficulty: 3, points: 6,
      statement: `On considère les fonctions $f$ et $g$ définies sur $\\mathbb{R}$ par $f(x) = x^2 - 1$ et $g(x) = -x^2 + 7$.

1. Donner l'orientation et le sommet de chacune des deux paraboles.
2. Montrer que $g(x) - f(x) = -2(x - 2)(x + 2)$.
3. En déduire les coordonnées des points d'intersection des deux paraboles.
4. Sur quel intervalle la parabole de $g$ est-elle au-dessus de celle de $f$ ?`,
      solution: `**1.** $f$ : tournée vers le haut, sommet $\\left(0 ; -1\\right)$. $g$ : tournée vers le bas, sommet $\\left(0 ; 7\\right)$.

**2.** $g(x) - f(x) = -x^2 + 7 - x^2 + 1 = -2x^2 + 8 = -2(x^2 - 4) = -2(x - 2)(x + 2)$.

**3.** $g(x) = f(x) \\iff -2(x - 2)(x + 2) = 0 \\iff x = 2$ ou $x = -2$. Comme $f(2) = f(-2) = 3$, les points d'intersection sont $\\left(-2 ; 3\\right)$ et $\\left(2 ; 3\\right)$.

**4.** $-2(x - 2)(x + 2)$ a le signe contraire de $-2$, donc est positif, entre les racines : $g(x) \\geqslant f(x)$ pour $x \\in \\left[-2 ; 2\\right]$.` },
    { id: "1TC5-ds-13", title: "Production rentable", difficulty: 4, points: 8,
      statement: `Un atelier fabrique $x$ dizaines de lampes par semaine, avec $x \\in \\left[0 ; 50\\right]$. Le bénéfice, en centaines d'euros, est $B(x) = -x^2 + 40x - 300$.

1. Montrer que $B(x) = -(x - 10)(x - 30)$.
2. Dresser le tableau de signes de $B(x)$ sur $\\left[0 ; 50\\right]$.
3. Pour quelles productions l'atelier est-il strictement rentable ?
4. Déterminer la production qui donne le bénéfice maximal et ce bénéfice.`,
      solution: `**1.** $-(x - 10)(x - 30) = -(x^2 - 30x - 10x + 300) = -(x^2 - 40x + 300) = -x^2 + 40x - 300 = B(x)$.

**2.** Les racines sont $10$ et $30$ et $a = -1 < 0$ : $B(x)$ est négatif sur $\\left[0 ; 10\\right[$, nul en $10$, positif sur $\\left]10 ; 30\\right[$, nul en $30$ et négatif sur $\\left]30 ; 50\\right]$.

**3.** L'atelier est strictement rentable pour $x \\in \\left]10 ; 30\\right[$, c'est-à-dire entre $100$ et $300$ lampes (bornes exclues).

**4.** Le sommet a pour abscisse $\\frac{10 + 30}{2} = 20$ et $B(20) = -(10)(-10) = 100$. Le bénéfice maximal est $100$ centaines d'euros, soit $10\\,000$ €, pour $200$ lampes.` },
    { id: "1TC5-ds-14", title: "Passage sous un tunnel", difficulty: 4, points: 8,
      statement: `L'entrée d'un tunnel a la forme d'une parabole de largeur $8$ m au sol et de hauteur maximale $6$ m. On choisit un repère d'unité le mètre dont l'axe des abscisses est le sol et l'axe des ordonnées l'axe de symétrie du tunnel.

1. Justifier que la parabole est la courbe d'une fonction $f(x) = a(x - 4)(x + 4)$.
2. Déterminer $a$.
3. Un camion de $3$ m de large et de $4{,}5$ m de haut roule au milieu de la chaussée. Peut-il passer ?
4. Quelle est la hauteur maximale d'un camion de $6$ m de large roulant au milieu ?`,
      solution: `**1.** La parabole est symétrique par rapport à l'axe des ordonnées et coupe le sol sur $8$ m : elle coupe l'axe des abscisses en $-4$ et $4$. Elle s'écrit donc $f(x) = a(x - 4)(x + 4)$.

**2.** Le sommet est $\\left(0 ; 6\\right)$ : $f(0) = a \\times (-4) \\times 4 = -16a = 6$, donc $a = -\\frac{6}{16} = -\\frac{3}{8}$.

**3.** Le camion occupe $x \\in \\left[-1{,}5 ; 1{,}5\\right]$ ; la hauteur du tunnel est la plus faible aux bords du camion : $f(1{,}5) = -\\frac{3}{8} \\times (-2{,}5) \\times 5{,}5 = \\frac{3 \\times 13{,}75}{8} = \\frac{41{,}25}{8} \\approx 5{,}16$ m. Comme $5{,}16 > 4{,}5$, le camion passe.

**4.** Les bords sont en $x = \\pm 3$ : $f(3) = -\\frac{3}{8} \\times (-1) \\times 7 = \\frac{21}{8} = 2{,}625$ m. Le camion doit mesurer moins de $2{,}625$ m de haut.` },
    { id: "1TC5-ds-15", title: "Retrouver une parabole par symétrie", difficulty: 4, points: 8,
      statement: `La parabole représentant une fonction $f$ du second degré a pour axe de symétrie la droite d'équation $x = 3$. Elle coupe l'axe des abscisses au point d'abscisse $-1$ et passe par le point $\\left(1 ; 12\\right)$.

1. Déterminer la deuxième racine de $f$.
2. En déduire que $f(x) = a(x + 1)(x - 7)$, puis déterminer $a$.
3. Déterminer les coordonnées du sommet.
4. Résoudre l'inéquation $f(x) > 0$.
5. Développer $f(x)$.`,
      solution: `**1.** Les deux racines sont symétriques par rapport à $3$ : la seconde $x_2$ vérifie $\\frac{-1 + x_2}{2} = 3$, donc $x_2 = 7$.

**2.** Avec les racines $-1$ et $7$ : $f(x) = a(x + 1)(x - 7)$. Or $f(1) = a \\times 2 \\times (-6) = -12a = 12$, donc $a = -1$ et $f(x) = -(x + 1)(x - 7)$.

**3.** $f(3) = -(4)(-4) = 16$ : le sommet est $\\left(3 ; 16\\right)$, c'est un maximum car $a < 0$.

**4.** $a = -1 < 0$, donc $f(x) > 0$ strictement entre les racines : $S = \\left]-1 ; 7\\right[$.

**5.** $(x + 1)(x - 7) = x^2 - 6x - 7$, donc $f(x) = -x^2 + 6x + 7$. Vérification : $f(1) = -1 + 6 + 7 = 12$.` },
    { id: "1TC5-ds-16", title: "Rectangle de périmètre fixé", difficulty: 4, points: 8,
      statement: `Un rectangle a un périmètre de $36$ cm. On note $x$ la longueur d'un de ses côtés, en cm, avec $x \\in \\left]0 ; 18\\right[$.

1. Justifier que l'autre côté mesure $18 - x$ et que l'aire est $A(x) = -x(x - 18)$.
2. Déterminer la valeur de $x$ pour laquelle l'aire est maximale, et cette aire. Que dire du rectangle ?
3. Vérifier que $A(x) - 72 = -(x - 6)(x - 12)$.
4. Pour quelles valeurs de $x$ l'aire est-elle au moins égale à $72$ cm² ?`,
      solution: `**1.** Le demi-périmètre vaut $18$ cm, donc l'autre côté mesure $18 - x$. $A(x) = x(18 - x) = -x(x - 18)$.

**2.** Les racines sont $0$ et $18$ ; $a = -1 < 0$, donc le maximum est atteint en $x = \\frac{0 + 18}{2} = 9$ : $A(9) = 9 \\times 9 = 81$ cm². Les deux côtés mesurent $9$ cm : le rectangle est un carré.

**3.** $A(x) - 72 = -x^2 + 18x - 72$ et $-(x - 6)(x - 12) = -(x^2 - 18x + 72) = -x^2 + 18x - 72$ : l'égalité est vraie.

**4.** $A(x) \\geqslant 72 \\iff -(x - 6)(x - 12) \\geqslant 0$, ce qui a lieu entre les racines (coefficient $-1 < 0$) : $x \\in \\left[6 ; 12\\right]$.` }
  ],
  "1TC6": [
    { id: "1TC6-ds-01", title: "Coefficients multiplicateurs", difficulty: 1, points: 3,
      statement: `1. Donner le coefficient multiplicateur associé à : une hausse de $7\\,\\%$ ; une baisse de $12\\,\\%$ ; une hausse de $150\\,\\%$.
2. Traduire en taux d'évolution les coefficients multiplicateurs $1{,}35$ et $0{,}6$.
3. Un prix augmente de $10\\,\\%$, puis à nouveau de $10\\,\\%$. Quel est le taux d'évolution global ?`,
      solution: `**1.** Hausse de $7\\,\\%$ : $1 + 0{,}07 = 1{,}07$ ; baisse de $12\\,\\%$ : $1 - 0{,}12 = 0{,}88$ ; hausse de $150\\,\\%$ : $1 + 1{,}5 = 2{,}5$.

**2.** $1{,}35 = 1 + 0{,}35$ : hausse de $35\\,\\%$. $0{,}6 = 1 - 0{,}4$ : baisse de $40\\,\\%$.

**3.** Les coefficients se multiplient : $1{,}1 \\times 1{,}1 = 1{,}21$, soit une hausse globale de $21\\,\\%$ (et non de $20\\,\\%$).` },
    { id: "1TC6-ds-02", title: "Termes d'une suite géométrique", difficulty: 1, points: 4,
      statement: `La suite $u$ est géométrique de premier terme $u(0) = 200$ et de raison $q = 1{,}5$.

1. Calculer $u(1)$, $u(2)$ et $u(3)$.
2. Donner la relation entre $u(n+1)$ et $u(n)$.
3. Exprimer $u(n)$ en fonction de $n$.
4. Donner le sens de variation de la suite, en justifiant.`,
      solution: `**1.** On multiplie par $1{,}5$ à chaque étape : $u(1) = 300$, $u(2) = 450$, $u(3) = 675$.

**2.** Pour tout entier naturel $n$, $u(n+1) = 1{,}5 \\times u(n)$.

**3.** $u(n) = u(0) \\times q^n = 200 \\times 1{,}5^n$.

**4.** Les termes sont strictement positifs et la raison $q = 1{,}5$ est strictement supérieure à $1$ : la suite est croissante (chaque terme vaut une fois et demie le précédent).` },
    { id: "1TC6-ds-03", title: "Deux fonctions exponentielles", difficulty: 1, points: 4,
      statement: `On considère les fonctions $f$ et $g$ définies sur $\\left[0 ; +\\infty\\right[$ par $f(x) = 3^x$ et $g(x) = 0{,}5^x$.

1. Calculer $f(0)$, $f(2)$ et $f(0{,}5)$.
2. Calculer $g(0)$, $g(1)$ et $g(3)$.
3. Donner le sens de variation de $f$ et de $g$.
4. Les deux courbes ont un point commun. Lequel ?`,
      solution: `**1.** $f(0) = 3^0 = 1$, $f(2) = 3^2 = 9$ et $f(0{,}5) = 3^{\\frac{1}{2}} = \\sqrt{3}$.

**2.** $g(0) = 1$, $g(1) = 0{,}5$ et $g(3) = 0{,}5^3 = 0{,}125$.

**3.** $3 > 1$ : $f$ est croissante sur $\\left[0 ; +\\infty\\right[$. $0 < 0{,}5 < 1$ : $g$ est décroissante sur $\\left[0 ; +\\infty\\right[$.

**4.** Pour tout $a > 0$, $a^0 = 1$ : les deux courbes passent par le point $\\left(0 ; 1\\right)$.` },
    { id: "1TC6-ds-04", title: "Calculs avec des puissances", difficulty: 1, points: 4,
      statement: `Calculer sans calculatrice, en détaillant les propriétés utilisées :

1. $A = 2^{0{,}7} \\times 2^{2{,}3}$
2. $B = \\frac{10^{3{,}5}}{10^{1{,}5}}$
3. $C = \\left(4^{0{,}25}\\right)^2$
4. $D = 27^{\\frac{1}{3}}$`,
      solution: `**1.** Produit de puissances de même base : on additionne les exposants. $A = 2^{0{,}7 + 2{,}3} = 2^3 = 8$.

**2.** Quotient : on soustrait les exposants. $B = 10^{3{,}5 - 1{,}5} = 10^2 = 100$.

**3.** Puissance d'une puissance : on multiplie les exposants. $C = 4^{0{,}25 \\times 2} = 4^{0{,}5}$, nombre positif dont le carré vaut $4$ : $C = 2$.

**4.** $D$ est le nombre positif dont le cube vaut $27$ ; comme $3^3 = 27$, $D = 3$.` },
    { id: "1TC6-ds-05", title: "Placement à intérêts composés", difficulty: 2, points: 5,
      statement: `On place $2\\,000$ € au taux de $3\\,\\%$ par an, les intérêts étant ajoutés au capital chaque année. On note $u(n)$ le capital, en euros, au bout de $n$ années.

1. Calculer $u(1)$ et $u(2)$.
2. Justifier que la suite $u$ est géométrique et exprimer $u(n)$ en fonction de $n$.
3. Comparer les intérêts de la première et de la deuxième année. Expliquer la différence.
4. On admet que $1{,}03^{10} \\approx 1{,}344$. Estimer le capital au bout de $10$ ans et le comparer à un placement qui rapporterait $60$ € fixes par an.`,
      solution: `**1.** $u(1) = 2\\,000 \\times 1{,}03 = 2\\,060$ € et $u(2) = 2\\,060 \\times 1{,}03 = 2\\,121{,}80$ €.

**2.** Chaque année le capital est multiplié par $1{,}03$ : $u$ est géométrique de raison $1{,}03$ et $u(n) = 2\\,000 \\times 1{,}03^n$.

**3.** La première année rapporte $60$ €, la deuxième $61{,}80$ € : les intérêts de la deuxième année portent aussi sur les $60$ € d'intérêts déjà acquis ($3\\,\\%$ de $60$ font $1{,}80$ €).

**4.** $u(10) \\approx 2\\,000 \\times 1{,}344 = 2\\,688$ €, contre $2\\,000 + 10 \\times 60 = 2\\,600$ € pour le placement à intérêts fixes : l'écart se creuse avec le temps.` },
    { id: "1TC6-ds-06", title: "Dépréciation d'une voiture", difficulty: 2, points: 5,
      statement: `Une voiture achetée $24\\,000$ € perd $15\\,\\%$ de sa valeur chaque année. On note $v(n)$ sa valeur, en euros, au bout de $n$ années.

1. Quelle est la raison de la suite géométrique $v$ ?
2. Calculer $v(1)$ et $v(2)$.
3. Exprimer $v(n)$ en fonction de $n$ et donner le sens de variation de $v$.
4. Quel est le pourcentage de baisse de la valeur sur deux ans ?`,
      solution: `**1.** Une baisse de $15\\,\\%$ correspond au coefficient $1 - 0{,}15 = 0{,}85$ : la raison est $q = 0{,}85$.

**2.** $v(1) = 24\\,000 \\times 0{,}85 = 20\\,400$ € et $v(2) = 20\\,400 \\times 0{,}85 = 17\\,340$ €.

**3.** $v(n) = 24\\,000 \\times 0{,}85^n$. Les termes sont positifs et $0 < 0{,}85 < 1$ : la suite est décroissante.

**4.** Sur deux ans, le coefficient est $0{,}85^2 = 0{,}722\\,5$, soit une baisse de $1 - 0{,}722\\,5 = 0{,}277\\,5$, c'est-à-dire $27{,}75\\,\\%$ (et non $30\\,\\%$).` },
    { id: "1TC6-ds-07", title: "Hausse puis baisse", difficulty: 2, points: 4,
      statement: `1. Un article augmente de $20\\,\\%$ puis baisse de $20\\,\\%$. Retrouve-t-il son prix initial ? Calculer le taux d'évolution global.
2. Un article augmente de $25\\,\\%$. Quelle baisse en pourcentage le ramène à son prix initial ?
3. Expliquer pourquoi l'ordre des deux évolutions de la question 1 n'a pas d'importance.`,
      solution: `**1.** Coefficient global : $1{,}2 \\times 0{,}8 = 0{,}96$. Le prix final vaut $96\\,\\%$ du prix initial : il n'est pas retrouvé, le taux global est $-4\\,\\%$.

**2.** On cherche $c$ tel que $1{,}25 \\times c = 1$, soit $c = \\frac{1}{1{,}25} = 0{,}8$ : une baisse de $20\\,\\%$ ramène au prix initial.

**3.** Le coefficient global est le produit des coefficients, et une multiplication ne dépend pas de l'ordre des facteurs : $0{,}8 \\times 1{,}2 = 1{,}2 \\times 0{,}8 = 0{,}96$.` },
    { id: "1TC6-ds-08", title: "Raison à partir de deux termes", difficulty: 2, points: 5,
      statement: `La suite $u$ est géométrique, à termes strictement positifs, avec $u(2) = 36$ et $u(4) = 81$.

1. Montrer que la raison $q$ vérifie $q^2 = 2{,}25$, puis déterminer $q$.
2. Calculer $u(0)$.
3. Calculer $u(5)$.
4. Donner le sens de variation de $u$.`,
      solution: `**1.** $u(4) = u(2) \\times q^2$, donc $q^2 = \\frac{81}{36} = 2{,}25$. La raison est positive et $1{,}5^2 = 2{,}25$, donc $q = 1{,}5$.

**2.** $u(2) = u(0) \\times q^2$, donc $u(0) = \\frac{36}{2{,}25} = 16$.

**3.** $u(5) = u(4) \\times 1{,}5 = 81 \\times 1{,}5 = 121{,}5$.

**4.** Les termes sont positifs et $q = 1{,}5 > 1$ : la suite est croissante.` },
    { id: "1TC6-ds-09", title: "Taux d'évolution moyen", difficulty: 3, points: 6,
      statement: `1. Le prix d'un abonnement est passé de $1\\,000$ € à $1\\,210$ € en deux ans. Calculer le taux d'évolution global, puis le taux annuel moyen.
2. La population d'une espèce est passée de $10\\,000$ à $6\\,400$ individus en deux ans. Calculer le taux annuel moyen.
3. Un élève affirme que le taux moyen de la question 1 vaut $10{,}5\\,\\%$. Expliquer son erreur.`,
      solution: `**1.** Coefficient global : $\\frac{1\\,210}{1\\,000} = 1{,}21$, soit $+21\\,\\%$. Le taux moyen $t$ vérifie $(1 + t)^2 = 1{,}21$, donc $1 + t = 1{,}21^{\\frac{1}{2}} = 1{,}1$ (car $1{,}1^2 = 1{,}21$) : $t = 10\\,\\%$ par an.

**2.** Coefficient global $\\frac{6\\,400}{10\\,000} = 0{,}64$ ; $0{,}64^{\\frac{1}{2}} = 0{,}8$ car $0{,}8^2 = 0{,}64$. Le taux annuel moyen est $0{,}8 - 1 = -0{,}2$, soit une baisse de $20\\,\\%$ par an.

**3.** L'élève divise le taux global par $2$. Or les évolutions se composent par multiplication : $1{,}105^2 = 1{,}221\\,025 \\neq 1{,}21$. Le taux moyen est $10\\,\\%$, car $1{,}1 \\times 1{,}1 = 1{,}21$.` },
    { id: "1TC6-ds-10", title: "Bactéries et programme Python", difficulty: 3, points: 6,
      statement: `Une culture contient $300$ bactéries ; leur nombre double toutes les heures. On note $u(n)$ le nombre de bactéries au bout de $n$ heures.

1. Exprimer $u(n)$ en fonction de $n$.
2. Au bout de combien d'heures le nombre de bactéries dépasse-t-il $10\\,000$ ?
3. Compléter le programme Python suivant pour qu'il affiche la réponse à la question 2.
\`\`\`python
u = 300
n = 0
while ...:
    u = ...
    n = n + 1
print(n)
\`\`\`
4. Quelle valeur afficherait ce programme avec un seuil de $100\\,000$ ?`,
      solution: `**1.** On multiplie par $2$ chaque heure : $u(n) = 300 \\times 2^n$.

**2.** $u(5) = 300 \\times 32 = 9\\,600 \\leqslant 10\\,000$ et $u(6) = 300 \\times 64 = 19\\,200 > 10\\,000$ : le seuil est dépassé au bout de $6$ heures.

**3.** La boucle continue tant que le seuil n'est pas dépassé :
\`\`\`python
u = 300
n = 0
while u <= 10000:
    u = u * 2
    n = n + 1
print(n)
\`\`\`
**4.** En remplaçant $10\\,000$ par $100\\,000$ : $u(8) = 300 \\times 256 = 76\\,800$ et $u(9) = 300 \\times 512 = 153\\,600$. Le programme affiche $9$.` },
    { id: "1TC6-ds-11", title: "Demi-vie radioactive", difficulty: 3, points: 7,
      statement: `La masse d'une substance radioactive est divisée par $2$ tous les $8$ jours. On en dispose de $80$ mg au départ.

1. On note $m(n)$ la masse, en mg, au bout de $n$ périodes de $8$ jours. Exprimer $m(n)$ en fonction de $n$.
2. Quelle masse reste-t-il au bout de $32$ jours ?
3. On modélise la masse au bout de $t$ jours par $f(t) = 80 \\times 0{,}5^{\\frac{t}{8}}$. Calculer la valeur exacte de $f(4)$, puis en donner une valeur approchée sachant que $\\sqrt{2} \\approx 1{,}414$.
4. Au bout de combien de périodes la masse devient-elle inférieure à $1$ mg ?`,
      solution: `**1.** $m$ est géométrique de raison $0{,}5$ : $m(n) = 80 \\times 0{,}5^n$.

**2.** $32$ jours correspondent à $4$ périodes : $m(4) = 80 \\times 0{,}5^4 = \\frac{80}{16} = 5$ mg.

**3.** $f(4) = 80 \\times 0{,}5^{\\frac{1}{2}} = \\frac{80}{2^{\\frac{1}{2}}} = \\frac{80}{\\sqrt{2}} = 40\\sqrt{2} \\approx 56{,}6$ mg. Au bout de la moitié d'une période, il reste plus de la moitié de la masse.

**4.** $80 \\times 0{,}5^n < 1 \\iff 2^n > 80$. Or $2^6 = 64$ et $2^7 = 128$ : il faut $7$ périodes, soit $56$ jours.` },
    { id: "1TC6-ds-12", title: "Exposant 1/n", difficulty: 3, points: 6,
      statement: `1. Calculer sans calculatrice $32^{\\frac{1}{5}}$, $1\\,000^{\\frac{1}{3}}$ et $0{,}000\\,1^{\\frac{1}{4}}$.
2. Le prix d'un bien a augmenté de $46{,}41\\,\\%$ en $4$ ans. Vérifier que $1{,}1^4 = 1{,}464\\,1$ et en déduire le taux annuel moyen.
3. Une population double en $12$ mois. On admet que $2^{\\frac{1}{12}} \\approx 1{,}059\\,5$. Quel est le taux mensuel moyen d'évolution ?`,
      solution: `**1.** $2^5 = 32$, donc $32^{\\frac{1}{5}} = 2$ ; $10^3 = 1\\,000$, donc $1\\,000^{\\frac{1}{3}} = 10$ ; $0{,}1^4 = 0{,}000\\,1$, donc $0{,}000\\,1^{\\frac{1}{4}} = 0{,}1$.

**2.** $1{,}1^2 = 1{,}21$ et $1{,}21^2 = 1{,}464\\,1$, donc $1{,}1^4 = 1{,}464\\,1$. Le coefficient global est $1{,}464\\,1$, d'où $1 + t = 1{,}464\\,1^{\\frac{1}{4}} = 1{,}1$ : le taux annuel moyen est de $10\\,\\%$.

**3.** Le coefficient global est $2$ sur $12$ mois : $1 + t = 2^{\\frac{1}{12}} \\approx 1{,}059\\,5$, soit un taux mensuel moyen d'environ $5{,}95\\,\\%$ (et non $\\frac{100}{12} \\approx 8{,}3\\,\\%$).` },
    { id: "1TC6-ds-13", title: "Deux propositions de salaire", difficulty: 4, points: 8,
      statement: `Une entreprise propose à une nouvelle recrue deux évolutions de salaire mensuel, à partir de $2\\,000$ € :
- proposition A : une augmentation de $50$ € chaque année ;
- proposition B : une augmentation de $2\\,\\%$ chaque année.

On note $a(n)$ et $b(n)$ les salaires mensuels au bout de $n$ années.

1. Exprimer $a(n)$ et $b(n)$ en fonction de $n$ et préciser la nature de chaque suite.
2. Calculer les salaires au bout de $1$ an et de $2$ ans.
3. On admet que $1{,}02^{20} \\approx 1{,}486$ et $1{,}02^{30} \\approx 1{,}811$. Comparer les deux propositions au bout de $20$ ans puis de $30$ ans.
4. Écrire un programme Python qui affiche le premier nombre d'années au bout duquel la proposition B devient strictement plus avantageuse. On admet que $1{,}02^{22} \\approx 1{,}546$ et $1{,}02^{23} \\approx 1{,}577$ : quelle valeur affiche-t-il ?`,
      solution: `**1.** $a(n) = 2\\,000 + 50n$ (suite arithmétique de raison $50$) et $b(n) = 2\\,000 \\times 1{,}02^n$ (suite géométrique de raison $1{,}02$).

**2.** $a(1) = 2\\,050$ € et $b(1) = 2\\,040$ € ; $a(2) = 2\\,100$ € et $b(2) = 2\\,000 \\times 1{,}040\\,4 = 2\\,080{,}80$ €. La proposition A est meilleure au début.

**3.** $a(20) = 3\\,000$ € et $b(20) \\approx 2\\,972$ € : A reste devant. $a(30) = 3\\,500$ € et $b(30) \\approx 3\\,622$ € : B est passée devant.

**4.** Un programme possible :
\`\`\`python
a = 2000
b = 2000
n = 0
while b <= a:
    a = a + 50
    b = b * 1.02
    n = n + 1
print(n)
\`\`\`
$b(22) \\approx 3\\,092$ € et $a(22) = 3\\,100$ € ; $b(23) \\approx 3\\,154$ € et $a(23) = 3\\,150$ € : le programme affiche $23$. Une croissance exponentielle finit toujours par dépasser une croissance linéaire.` },
    { id: "1TC6-ds-14", title: "Population d'une ville", difficulty: 4, points: 8,
      statement: `Une ville comptait $40\\,000$ habitants en 2020 et $48\\,400$ en 2022. On suppose que la population évolue chaque année selon le même taux.

1. Calculer le coefficient multiplicateur global entre 2020 et 2022.
2. En déduire le taux d'évolution annuel moyen.
3. Avec ce taux, quelle population peut-on prévoir en 2024 ?
4. En quelle année la population dépassera-t-elle $70\\,000$ habitants ?
5. On modélise la population par $f(x) = 40\\,000 \\times 1{,}1^x$, où $x$ est le temps en années depuis 2020. Que représente $f(0{,}5)$ ? Écrire ce nombre à l'aide d'une racine carrée.`,
      solution: `**1.** $\\frac{48\\,400}{40\\,000} = 1{,}21$.

**2.** $1 + t = 1{,}21^{\\frac{1}{2}} = 1{,}1$ (car $1{,}1^2 = 1{,}21$) : la population augmente en moyenne de $10\\,\\%$ par an.

**3.** De 2022 à 2024, on multiplie encore par $1{,}21$ : $48\\,400 \\times 1{,}21 = 58\\,564$ habitants.

**4.** 2025 : $58\\,564 \\times 1{,}1 = 64\\,420{,}4$ ; 2026 : $64\\,420{,}4 \\times 1{,}1 = 70\\,862{,}44$. La population dépasse $70\\,000$ habitants en 2026.

**5.** $f(0{,}5)$ est la population estimée au milieu de l'année 2020 (six mois après le début). $f(0{,}5) = 40\\,000 \\times 1{,}1^{\\frac{1}{2}} = 40\\,000\\sqrt{1{,}1}$.` },
    { id: "1TC6-ds-15", title: "Évolutions successives", difficulty: 4, points: 7,
      statement: `Le cours d'une action a augmenté de $25\\,\\%$ la première année, baissé de $20\\,\\%$ la deuxième année, puis augmenté de $35\\,\\%$ la troisième année.

1. Calculer le coefficient multiplicateur global sur les trois ans. Quel est le taux d'évolution global ?
2. Quelle a été l'évolution globale sur les deux premières années ?
3. On admet que $1{,}35^{\\frac{1}{3}} \\approx 1{,}105$. Donner le taux annuel moyen sur les trois ans.
4. Comparer ce taux à la moyenne des trois taux annuels et expliquer pourquoi elle ne convient pas.`,
      solution: `**1.** $1{,}25 \\times 0{,}8 \\times 1{,}35 = 1 \\times 1{,}35 = 1{,}35$ : hausse globale de $35\\,\\%$.

**2.** $1{,}25 \\times 0{,}8 = 1$ : au bout de deux ans, l'action est revenue exactement à sa valeur de départ.

**3.** Le taux moyen $t$ vérifie $(1 + t)^3 = 1{,}35$, donc $1 + t = 1{,}35^{\\frac{1}{3}} \\approx 1{,}105$ : environ $10{,}5\\,\\%$ par an.

**4.** La moyenne des taux vaut $\\frac{25 - 20 + 35}{3} = \\frac{40}{3} \\approx 13{,}3\\,\\%$. Elle ne convient pas : trois hausses de $13{,}3\\,\\%$ donneraient un coefficient d'environ $1{,}45$, supérieur à $1{,}35$. Les taux se composent par produits de coefficients, pas par sommes.` },
    { id: "1TC6-ds-16", title: "Médicament dans le sang", difficulty: 4, points: 8,
      statement: `On injecte $50$ mg d'un médicament. Chaque heure, la quantité présente dans le sang diminue de $30\\,\\%$. On note $u(n)$ la quantité, en mg, au bout de $n$ heures.

1. Exprimer $u(n)$ en fonction de $n$ ; calculer $u(1)$ et $u(2)$.
2. Donner le sens de variation de la suite $u$.
3. Le médicament n'est plus efficace en dessous de $12{,}5$ mg. Au bout de combien d'heures faut-il refaire une injection ?
4. On modélise la quantité au bout de $t$ heures par $f(t) = 50 \\times 0{,}7^t$. Montrer que, pour tout $t \\geqslant 0$, $f(t + 2) = 0{,}49 \\times f(t)$, et interpréter.`,
      solution: `**1.** Une baisse de $30\\,\\%$ correspond au coefficient $0{,}7$ : $u(n) = 50 \\times 0{,}7^n$, $u(1) = 35$ mg et $u(2) = 24{,}5$ mg.

**2.** Les termes sont positifs et $0 < 0{,}7 < 1$ : la suite est décroissante.

**3.** $u(n) < 12{,}5 \\iff 0{,}7^n < 0{,}25$. Or $0{,}7^3 = 0{,}343$ et $0{,}7^4 = 0{,}240\\,1$ : $u(3) = 17{,}15$ mg et $u(4) = 12{,}005$ mg. Il faut refaire une injection au bout de $4$ heures.

**4.** $f(t + 2) = 50 \\times 0{,}7^{t+2} = 50 \\times 0{,}7^t \\times 0{,}7^2 = 0{,}49 \\times f(t)$. Quel que soit l'instant, en deux heures la quantité est multipliée par $0{,}49$ : elle diminue de $51\\,\\%$.` }
  ]
});
