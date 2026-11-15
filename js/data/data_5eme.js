/**
 * Données pédagogiques officielles de la classe de 5ème (Cycle 4, 1ère année)
 * Conforme aux programmes officiels de l'Éducation nationale
 */

window.MATHS_COURSES_5E = {
  "5N1": {
    "title": "5N1 : Opérations et priorités opératoires",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Effectuer des calculs avec ou sans parenthèses (ou crochets) en respectant les priorités opératoires.",
      "Nommer une expression (somme, différence, produit, quotient) d'après la dernière opération effectuée ; employer les mots terme et facteur.",
      "Traduire un programme de calcul ou un problème par une seule expression numérique.",
      "Utiliser la distributivité simple $k \\times (a + b) = k \\times a + k \\times b$ pour calculer mentalement.",
      "Utiliser la division euclidienne, les notions de multiple et de diviseur et les critères de divisibilité.",
      "Diviser par un nombre décimal en se ramenant à un diviseur entier."
    ],
    "keyPoints": [
      {
        "title": "1. Priorités opératoires et nom d'un calcul",
        "content": "• Dans une expression sans parenthèses, **la multiplication et la division sont prioritaires** sur l'addition et la soustraction.\n• Dans une expression avec parenthèses, on effectue **d'abord les calculs entre parenthèses**, en commençant par les plus intérieures.\n• Pour des opérations de même priorité consécutives (+ et -, ou × et ÷), on calcule **de gauche à droite**.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1.2rem auto;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 500 235\" width=\"500\" height=\"235\" style=\"max-width:480px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <linearGradient id=\"goldGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#fef08a\" stop-opacity=\"0.35\"/>\n        <stop offset=\"100%\" stop-color=\"#fef08a\" stop-opacity=\"0.15\"/>\n      </linearGradient>\n      <linearGradient id=\"silverGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#e2e8f0\" stop-opacity=\"0.4\"/>\n        <stop offset=\"100%\" stop-color=\"#e2e8f0\" stop-opacity=\"0.15\"/>\n      </linearGradient>\n      <linearGradient id=\"bronzeGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#ffedd5\" stop-opacity=\"0.4\"/>\n        <stop offset=\"100%\" stop-color=\"#ffedd5\" stop-opacity=\"0.15\"/>\n      </linearGradient>\n    </defs>\n    <!-- Ligne de sol / Socle -->\n    <line x1=\"15\" y1=\"190\" x2=\"485\" y2=\"190\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"3\" stroke-linecap=\"round\" />\n    <!-- MARCHE 2 : ARGENT (Gauche) -->\n    <g>\n      <text x=\"90\" y=\"72\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"24\" font-weight=\"900\" fill=\"#0284c7\">&#215; &#160;et&#160; &#247;</text>\n      <text x=\"90\" y=\"92\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"var(--text-main, #0f172a)\">Multiplications &amp; Divisions</text>\n      <text x=\"90\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"9.5\" font-style=\"italic\" fill=\"var(--text-muted, #64748b)\">de gauche &#224; droite</text>\n      <rect x=\"18\" y=\"114\" width=\"144\" height=\"76\" rx=\"8\" fill=\"url(#silverGrad)\" stroke=\"#94a3b8\" stroke-width=\"2\" />\n      <circle cx=\"90\" cy=\"135\" r=\"15\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"2\" />\n      <text x=\"90\" y=\"141\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"15\" font-weight=\"900\" fill=\"#334155\">2</text>\n      <text x=\"90\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11.5\" font-weight=\"800\" fill=\"#475569\">2nde PLACE</text>\n      <text x=\"90\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"9.5\" fill=\"var(--text-muted, #64748b)\">(m&#234;me priorit&#233;)</text>\n    </g>\n    <!-- MARCHE 1 : OR (Centre, la plus haute) -->\n    <g>\n      <text x=\"250\" y=\"32\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"32\" font-weight=\"900\" fill=\"#2563eb\">( &#160; )</text>\n      <text x=\"250\" y=\"53\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"var(--text-main, #0f172a)\">Parenth&#232;ses ( )</text>\n      <text x=\"250\" y=\"69\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"10\" font-style=\"italic\" fill=\"var(--text-muted, #64748b)\">les plus int&#233;rieures d&#39;abord</text>\n      <rect x=\"178\" y=\"78\" width=\"144\" height=\"112\" rx=\"8\" fill=\"url(#goldGrad)\" stroke=\"#eab308\" stroke-width=\"2.5\" />\n      <circle cx=\"250\" cy=\"105\" r=\"18\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\" />\n      <text x=\"250\" y=\"112\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"18\" font-weight=\"900\" fill=\"#854d0e\">1</text>\n      <text x=\"250\" y=\"133\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"900\" fill=\"#b45309\">1&#232;re PLACE</text>\n      <text x=\"250\" y=\"154\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Calculs prioritaires</text>\n      <text x=\"250\" y=\"171\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"10\" fill=\"var(--text-muted, #64748b)\">ou crochets [ ]</text>\n    </g>\n    <!-- MARCHE 3 : BRONZE (Droite) -->\n    <g>\n      <text x=\"410\" y=\"94\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"24\" font-weight=\"900\" fill=\"#ea580c\">+ &#160;et&#160; &#8722;</text>\n      <text x=\"410\" y=\"114\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"var(--text-main, #0f172a)\">Additions &amp; Soustractions</text>\n      <text x=\"410\" y=\"128\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"9.5\" font-style=\"italic\" fill=\"var(--text-muted, #64748b)\">de gauche &#224; droite</text>\n      <rect x=\"338\" y=\"136\" width=\"144\" height=\"54\" rx=\"8\" fill=\"url(#bronzeGrad)\" stroke=\"#f97316\" stroke-width=\"2\" />\n      <circle cx=\"410\" cy=\"152\" r=\"13\" fill=\"#ffedd5\" stroke=\"#c2410c\" stroke-width=\"2\" />\n      <text x=\"410\" y=\"157.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"14\" font-weight=\"900\" fill=\"#9a3412\">3</text>\n      <text x=\"410\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#c2410c\">3e PLACE</text>\n    </g>\n    <!-- Sous-titre sous le sol -->\n    <text x=\"250\" y=\"214\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-muted, #475569)\">&#9733; Ordre de priorit&#233; des calculs : on calcule toujours du sommet (1er) vers la base (3e) !</text>\n  </svg>\n</div>\n• Les **crochets** $[\\;]$ jouent le même rôle que les parenthèses : on calcule d'abord dans les parenthèses, puis dans les crochets.\n\n• **Vocabulaire clé** : On nomme toujours un calcul par **l'opération effectuée en dernier**. Par exemple, $50 - 80 \\div 2$ est une **différence** (car la division $80 \\div 2$ est prioritaire, la soustraction est faite en dernier).\n• Les nombres que l'on additionne ou que l'on soustrait sont les **termes** : dans $12 + 7$, les termes sont $12$ et $7$ ; $50 - 80 \\div 2$ est une différence de termes $50$ et $80 \\div 2$.\n• Les nombres que l'on multiplie sont les **facteurs** : dans $6 \\times 9$, les facteurs sont $6$ et $9$."
      },
      {
        "title": "2. Distributivité simple",
        "content": "Pour tous nombres $k$, $a$ et $b$ :\n$$k \\times (a + b) = k \\times a + k \\times b \\qquad k \\times (a - b) = k \\times a - k \\times b$$\nElle permet de calculer astucieusement de tête :\n$$25 \\times 102 = 25 \\times 100 + 25 \\times 2 = 2\\,500 + 50 = 2\\,550$$\n$$7 \\times 99 = 7 \\times 100 - 7 \\times 1 = 700 - 7 = 693$$\nElle s'utilise aussi « dans l'autre sens » (on **factorise**) :\n$$13 \\times 8 + 13 \\times 2 = 13 \\times (8 + 2) = 13 \\times 10 = 130$$"
      },
      {
        "title": "3. Multiples et diviseurs",
        "content": "• Division euclidienne de $a$ par $b$ ($b \\neq 0$) : $a = b \\times q + r$ avec $0 \\le r < b$ ($q$ est le **quotient**, $r$ le **reste**).\n• Si le reste est nul, $a$ est un **multiple** de $b$ et $b$ est un **diviseur** de $a$ : $91 = 7 \\times 13$, donc $7$ divise $91$.\n• **Critères de divisibilité** : par $2$ si le chiffre des unités est $0, 2, 4, 6$ ou $8$ ; par $5$ s'il est $0$ ou $5$ ; par $10$ s'il est $0$ ; par $3$ (ou $9$) si la **somme des chiffres** est divisible par $3$ (ou $9$)."
      },
      {
        "title": "4. Diviser par un nombre décimal",
        "content": "Pour diviser par un nombre décimal, on se ramène à un **diviseur entier** : on multiplie **le dividende et le diviseur** par un même nombre ($10$, $100$…). Le quotient ne change pas, car $\\frac{a}{b} = \\frac{a \\times 10}{b \\times 10}$.\n$$2{,}4 \\div 0{,}6 = 24 \\div 6 = 4 \\qquad 3{,}75 \\div 0{,}25 = 375 \\div 25 = 15$$\nOn multiplie par $10$ si le diviseur a **un** chiffre après la virgule, par $100$ s'il en a **deux**.\n⚠️ Il faut multiplier **les deux** nombres : on ne déplace jamais la virgule du diviseur seul."
      },
      {
        "title": "À retenir",
        "content": "• Ordre des calculs : **parenthèses** (les plus intérieures d'abord), puis **× et ÷**, puis **+ et −** ; à priorité égale, **de gauche à droite**.\n• Une expression porte le nom de la **dernière opération** effectuée.\n• $k \\times (a + b) = k \\times a + k \\times b$.\n• Les nombres additionnés ou soustraits sont les **termes** ; les nombres multipliés sont les **facteurs**."
      },
      {
        "title": "Pour aller plus loin : les nombres premiers",
        "content": "Ce paragraphe prolonge le programme de 5e.\n• Un **nombre premier** est un entier qui a **exactement deux diviseurs** : $1$ et lui-même. Les nombres premiers inférieurs à $30$ sont :\n$$2,\\ 3,\\ 5,\\ 7,\\ 11,\\ 13,\\ 17,\\ 19,\\ 23,\\ 29$$\n$1$ n'est pas premier (un seul diviseur) ; $21 = 3 \\times 7$ n'est pas premier."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Respecter les priorités opératoires",
        "example": "Calculer $A = 15 + 4 \\times (8 - 3)$.",
        "steps": [
          "**Étape 1 (Parenthèses)** : On effectue le calcul prioritaire entre parenthèses : $8 - 3 = 5$. L'expression devient $A = 15 + 4 \\times 5$.",
          "**Étape 2 (Multiplication)** : La multiplication prime sur l'addition : $4 \\times 5 = 20$.",
          "**Étape 3 (Addition)** : On termine par l'addition : $A = 15 + 20 = 35$."
        ]
      },
      {
        "title": "Méthode : Calculer une expression avec crochets",
        "example": "Calculer $B = 50 - [3 \\times (9 - 5) + 6] \\div 2$.",
        "steps": [
          "**Étape 1** : On commence par la parenthèse la plus intérieure : $9 - 5 = 4$, donc $B = 50 - [3 \\times 4 + 6] \\div 2$.",
          "**Étape 2** : Dans les crochets, la multiplication d'abord : $3 \\times 4 + 6 = 12 + 6 = 18$, donc $B = 50 - 18 \\div 2$.",
          "**Étape 3** : La division est prioritaire sur la soustraction : $18 \\div 2 = 9$.",
          "**Étape 4** : $B = 50 - 9 = 41$. L'expression $B$ est une **différence**."
        ]
      },
      {
        "title": "Méthode : Traduire un programme de calcul par une expression",
        "example": "« Choisir $7$ ; ajouter $5$ ; multiplier le résultat par $3$ ; soustraire $4$. » Écrire le calcul en une seule expression, puis l'effectuer.",
        "steps": [
          "**Étape 1** : « Ajouter 5 » doit être fait **avant** la multiplication : on met $7 + 5$ entre parenthèses.",
          "**Étape 2** : Expression : $(7 + 5) \\times 3 - 4$.",
          "**Étape 3** : $(7 + 5) \\times 3 - 4 = 12 \\times 3 - 4 = 36 - 4 = 32$.",
          "**Vérification** : sans parenthèses, $7 + 5 \\times 3 - 4 = 18$ : ce n'est pas le même programme."
        ]
      },
      {
        "title": "Méthode : Diviser par un nombre décimal",
        "example": "Calculer $4{,}8 \\div 0{,}12$.",
        "steps": [
          "**Étape 1 (Choisir le multiplicateur)** : le diviseur $0{,}12$ a deux chiffres après la virgule : on multiplie le dividende et le diviseur par $100$.",
          "**Étape 2 (Diviseur entier)** : $4{,}8 \\div 0{,}12 = 480 \\div 12$.",
          "**Étape 3 (Calculer)** : $480 \\div 12 = 40$.",
          "**Vérification** : $0{,}12 \\times 40 = 4{,}8$."
        ]
      },
      {
        "title": "Méthode : Traduire un problème par une expression",
        "example": "Léa achète $3$ cahiers à $2{,}50$ € l'un et un stylo à $1{,}20$ €. Elle paie avec un billet de $10$ €. Écrire en une seule expression le calcul de la monnaie rendue, puis l'effectuer.",
        "steps": [
          "**Étape 1 (Repérer les calculs)** : prix des cahiers : $3 \\times 2{,}50$ ; dépense totale : $3 \\times 2{,}50 + 1{,}20$.",
          "**Étape 2 (Écrire l'expression)** : la monnaie rendue est la différence entre $10$ € et la dépense totale. Cette dépense doit être calculée avant : on la met entre parenthèses, ce qui donne $10 - (3 \\times 2{,}50 + 1{,}20)$.",
          "**Étape 3 (Calculer)** : $10 - (7{,}50 + 1{,}20) = 10 - 8{,}70 = 1{,}30$. On rend $1{,}30$ € à Léa.",
          "**Vérification** : sans parenthèses, $10 - 3 \\times 2{,}50 + 1{,}20 = 3{,}70$ : ce n'est pas la monnaie rendue."
        ]
      },
      {
        "title": "Pour aller plus loin : reconnaître un nombre premier",
        "example": "$51$ est-il un nombre premier ? Et $29$ ?",
        "steps": [
          "**Étape 1** : On teste les petits diviseurs $2, 3, 5, 7$… $51$ est impair et ne finit pas par $0$ ou $5$.",
          "**Étape 2** : Somme des chiffres de $51$ : $5 + 1 = 6$, multiple de $3$. Donc $51 = 3 \\times 17$ : $51$ **n'est pas premier**.",
          "**Étape 3** : $29$ n'est divisible ni par $2$, ni par $3$, ni par $5$ ($7 \\times 4 = 28$ et $7 \\times 5 = 35$) : ses seuls diviseurs sont $1$ et $29$, il **est premier**."
        ]
      }
    ],
    "traps": [
      "⚠️ Erreur fréquente : calculer de gauche à droite sans observer les multiplications ! $2 + 3 \\times 5 \\neq 5 \\times 5 = 25$, mais bien $2 + 15 = 17$.",
      "⚠️ À priorité égale, on calcule de gauche à droite : $20 - 8 - 2 = 12 - 2 = 10$ (et non $20 - 6 = 14$) ; $24 \\div 4 \\times 2 = 6 \\times 2 = 12$ (et non $24 \\div 8 = 3$).",
      "⚠️ En traduisant un programme de calcul, ne pas oublier les parenthèses : « ajouter $5$ puis multiplier par $3$ » s'écrit $(7 + 5) \\times 3$ et non $7 + 5 \\times 3$.",
      "⚠️ Dans une division euclidienne, le reste $r$ doit toujours être strictement inférieur au diviseur $b$ ($r < b$).",
      "⚠️ **Pour aller plus loin** : $1$ n'est pas un nombre premier, et un nombre impair n'est pas forcément premier : $27 = 3 \\times 9$."
    ],
    "flashcards": [
      { "q": "Quelle opération est prioritaire dans $7 + 3 \\times 4$ ?", "a": "La multiplication $3 \\times 4 = 12$, donc le résultat est $7 + 12 = 19$." },
      { "q": "Comment nomme-t-on l'expression $50 - 80 \\div 2$ (somme, différence, produit ou quotient) ?", "a": "Une différence, car on nomme toujours un calcul par l'opération effectuée en dernier (la division est prioritaire, on soustrait en dernier)." },
      { "q": "Comment s'appelle le résultat d'une multiplication ? Et d'une division ?", "a": "Le résultat d'une multiplication est un **produit**. Le résultat d'une division est un **quotient**." },
      { "q": "Dans $12 + 7$ et dans $6 \\times 9$, comment appelle-t-on les nombres $12$, $7$, $6$ et $9$ ?", "a": "$12$ et $7$ sont les **termes** de la somme ; $6$ et $9$ sont les **facteurs** du produit." },
      { "q": "Comment reconnaître si 471 est divisible par 3 ?", "a": "On calcule la somme des chiffres : $4 + 7 + 1 = 12$. Comme 12 est un multiple de 3, 471 est divisible par 3." },
      { "q": "Calculer $20 - 8 - 2$.", "a": "$10$ : à priorité égale, on calcule de gauche à droite ($20 - 8 = 12$, puis $12 - 2 = 10$)." },
      { "q": "Pour aller plus loin : qu'est-ce qu'un nombre premier ? Citer ceux inférieurs à $20$.", "a": "Un entier qui a exactement deux diviseurs, $1$ et lui-même : $2, 3, 5, 7, 11, 13, 17, 19$." },
      { "q": "Calculer mentalement $8 \\times 99$.", "a": "$8 \\times (100 - 1) = 800 - 8 = 792$." }
    ]
  },
  "5N2": {
    "title": "5N2 : Nombres relatifs : repérage, comparaison et calculs",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Utiliser le vocabulaire : nombre relatif, positif, strictement positif, négatif, strictement négatif, opposé, distance à zéro (ou valeur absolue).",
      "Repérer et placer un nombre relatif sur une droite graduée.",
      "Comparer et ranger des nombres relatifs.",
      "Additionner et soustraire des nombres relatifs ; calculer une expression comportant plusieurs termes.",
      "Résoudre des problèmes concrets : températures, altitudes, gains et pertes."
    ],
    "keyPoints": [
      {
        "title": "1. Nombres relatifs et droite graduée",
        "content": "• Un **nombre relatif** est formé d'un **signe** ($+$ ou $-$) et d'une **distance à zéro**, aussi appelée **valeur absolue**. Exemple : $-4{,}5$ est **négatif**, sa distance à zéro est $4{,}5$.\n• Les nombres **positifs** s'écrivent souvent sans signe : $+3 = 3$. Le nombre $0$ est à la fois positif et négatif.\n• Un nombre **strictement positif** est positif et différent de $0$ (par exemple $3$) ; un nombre **strictement négatif** est négatif et différent de $0$ (par exemple $-4{,}5$). Le nombre $0$ n'est ni strictement positif, ni strictement négatif.\n• Deux nombres sont **opposés** lorsque leur **somme est nulle** : $a + b = 0$. Par exemple, $(-7) + 7 = 0$, donc $-7$ et $7$ sont opposés : ils ont la même distance à zéro et des signes contraires. Le nombre $0$ est son propre opposé, car $0 + 0 = 0$.\n• L'opposé d'un nombre $a$ se note $-a$. Attention, $-a$ n'est pas toujours négatif : si $a = -5$, alors $-a = 5$.\n• Sur une droite graduée, les positifs sont à droite de l'origine, les négatifs à gauche ; deux opposés sont symétriques par rapport à l'origine.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 440 90\" width=\"440\" height=\"90\" style=\"max-width:440px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Droite graduée de moins 5 à 5 avec les points A, B et C\">\n<line x1=\"16\" y1=\"48\" x2=\"432\" y2=\"48\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<path d=\"M 432 48 l -9 -5 v 10 z\" fill=\"var(--text-main, #334155)\"/>\n<path d=\"M 16 48 l 9 -5 v 10 z\" fill=\"var(--text-main, #334155)\"/>\n<line x1=\"30.0\" y1=\"40\" x2=\"30.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"30.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">−5</text>\n<line x1=\"66.6\" y1=\"40\" x2=\"66.6\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"66.6\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">−4</text>\n<line x1=\"103.2\" y1=\"40\" x2=\"103.2\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"103.2\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">−3</text>\n<line x1=\"139.8\" y1=\"40\" x2=\"139.8\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"139.8\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">−2</text>\n<line x1=\"176.4\" y1=\"40\" x2=\"176.4\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"176.4\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">−1</text>\n<line x1=\"213.0\" y1=\"40\" x2=\"213.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"213.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">0</text>\n<line x1=\"249.6\" y1=\"40\" x2=\"249.6\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"249.6\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">1</text>\n<line x1=\"286.2\" y1=\"40\" x2=\"286.2\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"286.2\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">2</text>\n<line x1=\"322.8\" y1=\"40\" x2=\"322.8\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"322.8\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">3</text>\n<line x1=\"359.4\" y1=\"40\" x2=\"359.4\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"359.4\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">4</text>\n<line x1=\"396.0\" y1=\"40\" x2=\"396.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"396.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">5</text>\n<circle cx=\"84.9\" cy=\"48\" r=\"4.5\" fill=\"#dc2626\"/>\n<text x=\"84.9\" y=\"32\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">A(−3,5)</text>\n<circle cx=\"341.1\" cy=\"48\" r=\"4.5\" fill=\"#2563eb\"/>\n<text x=\"341.1\" y=\"32\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">B(3,5)</text>\n<circle cx=\"176.4\" cy=\"48\" r=\"4.5\" fill=\"#059669\"/>\n<text x=\"176.4\" y=\"32\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">C(−1)</text>\n</svg>\n</div>\n$A$ et $B$ ont des abscisses opposées : ils sont à la même distance ($3{,}5$) de l'origine."
      },
      {
        "title": "2. Comparer et ranger des nombres relatifs",
        "content": "• Sur une droite graduée, le plus grand de deux nombres est **le plus à droite**.\n• Un nombre positif est toujours supérieur à un nombre négatif : $0{,}2 > -15$.\n• Entre deux nombres **négatifs**, le plus grand est celui qui a la **plus petite distance à zéro** : $-3 > -7$ car $3 < 7$.\n• Exemple de rangement dans l'ordre croissant :\n$$-6 < -2{,}5 < -1 < 0 < 3 < 4{,}2$$"
      },
      {
        "title": "3. Additionner deux nombres relatifs",
        "content": "• **Même signe** : on garde ce signe et on **additionne** les distances à zéro.\n$$(-5) + (-7) = -12 \\qquad (+3) + (+4) = +7$$\n• **Signes contraires** : on prend le signe du nombre qui a la **plus grande distance à zéro** et on **soustrait** les distances à zéro.\n$$(-12) + (+6) = -6 \\qquad (+9) + (-4) = +5$$\n• **Pourquoi ?** On fait apparaître deux nombres opposés, dont la somme est nulle :\n$$(+9) + (-4) = (+5) + (+4) + (-4) = (+5) + 0 = +5$$\n$$(-12) + (+6) = (-6) + (-6) + (+6) = (-6) + 0 = -6$$\n• Image utile : un gain de $9$ € suivi d'une perte de $4$ € donne un bilan de $+5$ €.\n• La somme de deux nombres opposés vaut $0$ : $(-8{,}3) + (+8{,}3) = 0$."
      },
      {
        "title": "4. Soustraire un nombre relatif",
        "content": "**Règle** : soustraire un nombre relatif revient à **ajouter son opposé**.\n$$5 - (+8) = 5 + (-8) = -3 \\qquad -4 - (-9) = -4 + 9 = 5$$\n**Pourquoi ?** Calculer $5 - (+8)$, c'est chercher le nombre qu'il faut ajouter à $+8$ pour obtenir $5$. Le nombre $5 + (-8)$ convient, car $(+8) + 5 + (-8) = 5 + [(+8) + (-8)] = 5 + 0 = 5$.\nConséquences pour simplifier l'écriture : $+(+a) = +a$ ; $+(-a) = -a$ ; $-(+a) = -a$ ; $-(-a) = +a$.\n**Le signe $-$ a trois significations** : dans $-7$, il indique un nombre **négatif** ; dans $-a$, il désigne l'**opposé** de $a$ (ainsi $-(-7) = 7$) ; dans $5 - 8$, il indique une **soustraction**.\n**Parenthèses indispensables** : on n'écrit jamais deux signes à la suite, donc $5 - (-8)$ et non $5 - -8$. De plus, les parenthèses indiquent ce qu'il faut calculer d'abord ; les enlever peut changer le résultat :\n$$10 - (3 - 5) = 10 - (-2) = 10 + 2 = 12 \\qquad \\text{alors que} \\qquad 10 - 3 - 5 = 7 - 5 = 2$$\n**Plusieurs termes** : on transforme les soustractions en additions, puis on regroupe les positifs et les négatifs.\n$$(-3) + (+8) + (-6) + (+2) = (+10) + (-9) = 1$$"
      },
      {
        "title": "À retenir",
        "content": "• Deux nombres sont opposés lorsque leur somme est nulle ; $0$ est son propre opposé.\n• Entre deux négatifs, le plus grand est le plus proche de zéro : $-2 > -5$.\n• Même signe : on additionne les distances à zéro et on garde le signe.\n• Signes contraires : on soustrait les distances à zéro et on prend le signe de celui qui est « le plus loin » de zéro.\n• $a - b = a + (\\text{opposé de } b)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Ranger des nombres relatifs",
        "example": "Ranger dans l'ordre croissant : $3$ ; $-2{,}5$ ; $-7$ ; $0$ ; $-2{,}05$ ; $1{,}5$.",
        "steps": [
          "**Étape 1** : On sépare les négatifs ($-2{,}5$ ; $-7$ ; $-2{,}05$) des positifs ($0$ ; $3$ ; $1{,}5$).",
          "**Étape 2** : Pour les négatifs, la plus grande distance à zéro donne le plus petit nombre : $7 > 2{,}5 > 2{,}05$, donc $-7 < -2{,}5 < -2{,}05$.",
          "**Étape 3** : On range les positifs : $0 < 1{,}5 < 3$.",
          "**Conclusion** : $-7 < -2{,}5 < -2{,}05 < 0 < 1{,}5 < 3$."
        ]
      },
      {
        "title": "Méthode : Transformer une soustraction en addition",
        "example": "Calculer $B = -8 - (-12)$.",
        "steps": [
          "**Étape 1** : On transforme la soustraction en addition de l'opposé : $-(-12)$ devient $+12$.",
          "**Étape 2** : L'expression devient $B = -8 + 12$.",
          "**Étape 3** : Gain de 12 et perte de 8 : on a plus gagné que perdu, donc $B = +(12 - 8) = 4$."
        ]
      },
      {
        "title": "Méthode : Calculer une suite d'additions et de soustractions",
        "example": "Calculer $C = 7 - 12 + 4 - 9$.",
        "steps": [
          "**Étape 1** : On regroupe les termes positifs : $7 + 4 = 11$.",
          "**Étape 2** : On regroupe les termes négatifs : $-12 - 9 = -21$.",
          "**Étape 3** : $C = 11 - 21 = -10$ (signes contraires : $21 - 11 = 10$, signe du plus éloigné de zéro).",
          "**Vérification** de gauche à droite : $7 - 12 = -5$ ; $-5 + 4 = -1$ ; $-1 - 9 = -10$."
        ]
      },
      {
        "title": "Méthode : Calculer un écart de températures",
        "example": "À $6$ h il fait $-4^\\circ\\text{C}$ ; à $14$ h il fait $9^\\circ\\text{C}$. De combien de degrés la température a-t-elle augmenté ?",
        "steps": [
          "**Étape 1** : Un écart se calcule par une soustraction : température finale moins température initiale.",
          "**Étape 2** : $9 - (-4) = 9 + 4 = 13$.",
          "**Conclusion** : la température a augmenté de $13^\\circ\\text{C}$ (on peut vérifier sur un thermomètre : $4$ degrés pour remonter à $0$, puis $9$ degrés)."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas penser que $-15$ est plus grand que $-5$ ! Sur un thermomètre, $-15^\\circ\\text{C}$ est plus bas et donc plus froid que $-5^\\circ\\text{C}$.",
      "⚠️ Bien penser à changer le signe du nombre qui suit le moins : $a - (-b) = a + b$.",
      "⚠️ $-a$ n'est pas toujours négatif : si $a = -5$, alors $-a = 5$.",
      "⚠️ $-3 + 5$ ne vaut pas $-8$ : les signes sont contraires, on soustrait les distances à zéro, $-3 + 5 = 2$.",
      "⚠️ $-2{,}05 > -2{,}5$ : la distance à zéro de $-2{,}05$ est plus petite, il est donc plus proche de zéro."
    ],
    "flashcards": [
      { "q": "Quel nombre est à la fois positif ET négatif ?", "a": "Le nombre **0** est le seul nombre à la fois positif et négatif : il n'est ni strictement positif, ni strictement négatif." },
      { "q": "Quel est le résultat de $(-5) + (-7)$ ?", "a": "$-12$ (perte de 5 et perte de 7, le bilan est une perte de $5 + 7 = 12$)." },
      { "q": "Comment calculer $3 - (-8)$ ?", "a": "Soustraire $-8$, c'est ajouter son opposé, qui est $8$ : $3 - (-8) = 3 + 8 = 11$." },
      { "q": "Entre $-9$ et $-4$, quel est le plus grand nombre ?", "a": "$-4$, car entre deux négatifs, le plus grand est celui qui a la plus petite distance à zéro (le plus proche de 0)." },
      { "q": "Quel est l'opposé de $-6{,}3$ ?", "a": "$6{,}3$, car $-6{,}3 + 6{,}3 = 0$ (même distance à zéro, signe contraire)." },
      { "q": "Le nombre $-a$ est-il toujours négatif ?", "a": "Non : $-a$ désigne l'opposé de $a$. Si $a = -5$, alors $-a = 5$, qui est positif." },
      { "q": "Calculer $-9 + 4$.", "a": "$-5$ : signes contraires, $9 - 4 = 5$, et on garde le signe de $-9$." },
      { "q": "Il fait $-4^\\circ\\text{C}$ le matin et $9^\\circ\\text{C}$ l'après-midi. Quel est l'écart ?", "a": "$9 - (-4) = 9 + 4 = 13^\\circ\\text{C}$." }
    ]
  },
  "5N3": {
    "title": "5N3 : Fractions et nombres rationnels",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Utiliser la fraction comme quotient : $b \\times \\frac{a}{b} = a$.",
      "Reconnaître et produire des fractions égales ; écrire une fraction avec des nombres plus petits.",
      "Comparer des fractions : même dénominateur, dénominateurs multiples ou quelconques, comparaison à $1$ ou à $\\frac{1}{2}$.",
      "Additionner et soustraire des fractions de dénominateurs quelconques, en cherchant un multiple commun des dénominateurs.",
      "Passer d'une écriture à une autre : $\\frac{17}{5} = 3 + \\frac{2}{5}$ ; $1{,}2 = \\frac{6}{5} = 120\\,\\%$.",
      "Calculer une fraction d'une quantité et résoudre des problèmes.",
      "Démontrer une règle de calcul sur les fractions, à partir de la définition du quotient et du calcul littéral."
    ],
    "keyPoints": [
      {
        "title": "1. La fraction, un quotient",
        "content": "• $\\frac{a}{b}$ ($b \\neq 0$) est le **quotient** de $a$ par $b$ : c'est le nombre qui, multiplié par $b$, donne $a$ :\n$$b \\times \\frac{a}{b} = a \\qquad \\text{exemple : } 7 \\times \\frac{3}{7} = 3$$\n• Un quotient peut s'écrire avec des nombres décimaux ; on obtient une fraction en multipliant les deux termes par $10$, $100$… : $\\frac{2{,}5}{4} = \\frac{25}{40} = \\frac{5}{8}$ et $\\frac{1{,}8}{0{,}6} = \\frac{18}{6} = 3$.\n• Les nombres qui peuvent s'écrire sous forme de fraction sont appelés **nombres rationnels** : $\\frac{1}{3}$, $0{,}75 = \\frac{3}{4}$, $5 = \\frac{5}{1}$…"
      },
      {
        "title": "2. Fractions égales et simplification",
        "content": "On ne change pas une fraction en **multipliant** ou en **divisant** son numérateur **et** son dénominateur par un même nombre non nul :\n$$\\frac{3}{7} = \\frac{3 \\times 5}{7 \\times 5} = \\frac{15}{35} \\qquad \\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$$\n**Simplifier** une fraction, c'est l'écrire avec des nombres plus petits. On cherche un diviseur commun grâce aux tables et aux critères de divisibilité. En 5e, **toute fraction égale au résultat est juste** : simplifier est utile, mais n'est pas exigé.\n**Pour aller plus loin** : une fraction qu'on ne peut plus simplifier est dite **irréductible** ($\\frac{2}{3}$). Cette notion sera travaillée en 3e."
      },
      {
        "title": "3. Comparer des fractions",
        "content": "• **Même dénominateur** : la plus grande fraction est celle qui a le plus grand numérateur : $\\frac{7}{9} > \\frac{5}{9}$.\n• **Dénominateurs multiples** : on écrit les deux fractions avec le même dénominateur, puis on compare les numérateurs.\n$$\\frac{3}{4} = \\frac{6}{8} \\text{ et } \\frac{6}{8} > \\frac{5}{8} \\text{, donc } \\frac{3}{4} > \\frac{5}{8}$$\n• **Dénominateurs quelconques** : on cherche un multiple commun des deux dénominateurs, puis on compare les numérateurs.\n$$\\frac{5}{6} = \\frac{15}{18} \\text{ et } \\frac{7}{9} = \\frac{14}{18} \\text{, donc } \\frac{5}{6} > \\frac{7}{9}$$\n• **Comparaison à 1** : $\\frac{9}{7} > 1$ (numérateur plus grand que le dénominateur) et $\\frac{4}{7} < 1$.\n• **Comparaison à $\\frac{1}{2}$** : on compare le double du numérateur au dénominateur. $\\frac{3}{7} < \\frac{1}{2}$ car $2 \\times 3 = 6$ est plus petit que $7$ ; $\\frac{5}{9} > \\frac{1}{2}$ car $2 \\times 5 = 10$ est plus grand que $9$. Donc $\\frac{3}{7} < \\frac{5}{9}$."
      },
      {
        "title": "4. Additionner et soustraire des fractions",
        "content": "• **Même dénominateur** : on additionne (ou on soustrait) les numérateurs et on **garde** le dénominateur :\n$$\\frac{a}{d} + \\frac{b}{d} = \\frac{a + b}{d} \\qquad \\frac{11}{12} - \\frac{5}{12} = \\frac{6}{12} = \\frac{1}{2}$$\n• **Dénominateurs multiples** : on transforme d'abord une fraction pour avoir le même dénominateur :\n$$\\frac{2}{5} + \\frac{7}{15} = \\frac{2 \\times 3}{5 \\times 3} + \\frac{7}{15} = \\frac{6}{15} + \\frac{7}{15} = \\frac{13}{15}$$\n• **Dénominateurs quelconques** : on cherche un **multiple commun** des deux dénominateurs, on écrit chaque fraction avec ce dénominateur, puis on calcule :\n$$\\frac{5}{6} + \\frac{3}{4} = \\frac{5 \\times 2}{6 \\times 2} + \\frac{3 \\times 3}{4 \\times 3} = \\frac{10}{12} + \\frac{9}{12} = \\frac{19}{12}$$\n• **Avec un entier** : on écrit l'entier sous forme de fraction : $2 + \\frac{3}{5} = \\frac{10}{5} + \\frac{3}{5} = \\frac{13}{5}$."
      },
      {
        "title": "5. Prendre une fraction d'une quantité",
        "content": "Prendre les $\\frac{a}{b}$ d'une quantité $Q$, c'est calculer $\\frac{a}{b} \\times Q$. On divise $Q$ par $b$, puis on multiplie par $a$ :\n$$\\frac{3}{4} \\text{ de } 24\\text{ L} = (24 \\div 4) \\times 3 = 6 \\times 3 = 18\\text{ L}$$"
      },
      {
        "title": "6. Une même quantité, plusieurs écritures",
        "content": "Un même nombre peut s'écrire de plusieurs façons ; il faut savoir passer de l'une à l'autre.\n• **Partie entière** : la division euclidienne du numérateur par le dénominateur donne la partie entière. Comme $17 = 5 \\times 3 + 2$, on a $\\frac{17}{5} = \\frac{15}{5} + \\frac{2}{5} = 3 + \\frac{2}{5}$.\n• **Fraction, écriture décimale, pourcentage** : un pourcentage est une fraction de dénominateur $100$.\n$$1{,}2 = \\frac{12}{10} = \\frac{6}{5} = 1 + \\frac{1}{5} = \\frac{120}{100} = 120\\,\\%$$\n• **Repères à connaître** : $1\\,\\% = \\frac{1}{100} = 0{,}01$ ; $10\\,\\% = \\frac{1}{10} = 0{,}1$ ; $25\\,\\% = \\frac{1}{4} = 0{,}25$ ; $50\\,\\% = \\frac{1}{2} = 0{,}5$ ; $75\\,\\% = \\frac{3}{4} = 0{,}75$ ; $100\\,\\% = 1$."
      },
      {
        "title": "À retenir",
        "content": "• $\\frac{a}{b} = \\frac{a \\times k}{b \\times k}$ ($k \\neq 0$) : on multiplie **les deux** termes.\n• On n'additionne **jamais** les dénominateurs : on les rend égaux en cherchant un multiple commun, puis on additionne les numérateurs.\n• Prendre $\\frac{a}{b}$ d'une quantité, c'est la multiplier par $\\frac{a}{b}$.\n• $\\frac{17}{5}$ et $3 + \\frac{2}{5}$, ou $1{,}2$, $\\frac{6}{5}$ et $120\\,\\%$ : plusieurs écritures, un seul nombre."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Réduire au même dénominateur",
        "example": "Calculer $C = \\frac{5}{6} - \\frac{3}{18}$.",
        "steps": [
          "**Étape 1** : On repère que $18 = 6 \\times 3$.",
          "**Étape 2** : On met $5/6$ sur 18 et on garde l'expression entière : $C = \\frac{5}{6} - \\frac{3}{18} = \\frac{5 \\times 3}{6 \\times 3} - \\frac{3}{18} = \\frac{15}{18} - \\frac{3}{18}$.",
          "**Étape 3** : On effectue la soustraction en conservant la fraction : $C = \\frac{15}{18} - \\frac{3}{18} = \\frac{15 - 3}{18} = \\frac{12}{18}$.",
          "**Étape 4 (facultative) : on peut simplifier.** Le résultat $\\frac{12}{18}$ est déjà juste ; pour l'écrire avec des nombres plus petits, on divise le numérateur et le dénominateur par 6 en conservant l'égalité : $C = \\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$"
        ]
      },
      {
        "title": "Méthode : Additionner des fractions de dénominateurs quelconques",
        "example": "Calculer $D = \\frac{7}{10} + \\frac{5}{6}$.",
        "steps": [
          "**Étape 1 (Multiple commun)** : Aucun dénominateur n'est multiple de l'autre. On récite les multiples de $10$ ($10$, $20$, $30$…) jusqu'à trouver un multiple de $6$ : $30 = 6 \\times 5$.",
          "**Étape 2** : On écrit les deux fractions sur $30$ : $\\frac{7}{10} = \\frac{7 \\times 3}{10 \\times 3} = \\frac{21}{30}$ et $\\frac{5}{6} = \\frac{5 \\times 5}{6 \\times 5} = \\frac{25}{30}$.",
          "**Étape 3** : On additionne les numérateurs : $D = \\frac{21}{30} + \\frac{25}{30} = \\frac{46}{30}$.",
          "**Étape 4 (facultative) : on peut simplifier.** Le résultat $\\frac{46}{30}$ est déjà juste ; on peut aussi écrire $D = \\frac{46 \\div 2}{30 \\div 2} = \\frac{23}{15}$."
        ]
      },
      {
        "title": "Méthode : Comparer deux fractions",
        "example": "Comparer $\\frac{7}{12}$ et $\\frac{2}{3}$.",
        "steps": [
          "**Étape 1** : $12 = 3 \\times 4$ : les dénominateurs sont multiples l'un de l'autre.",
          "**Étape 2** : $\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$.",
          "**Étape 3** : Même dénominateur : $7 < 8$, donc $\\frac{7}{12} < \\frac{8}{12}$.",
          "**Conclusion** : $\\frac{7}{12} < \\frac{2}{3}$.",
          "**Si aucun dénominateur n'est multiple de l'autre** : on cherche d'abord un multiple commun. Pour $\\frac{5}{6}$ et $\\frac{7}{9}$, on prend $18$ : $\\frac{15}{18} > \\frac{14}{18}$, donc $\\frac{5}{6} > \\frac{7}{9}$."
        ]
      },
      {
        "title": "Méthode : Passer d'une écriture à une autre",
        "example": "Écrire $\\frac{23}{4}$ avec sa partie entière. Écrire $1{,}4$ sous forme de fraction, puis de pourcentage.",
        "steps": [
          "**Étape 1 (Division euclidienne)** : $23 = 4 \\times 5 + 3$.",
          "**Étape 2 (Partie entière)** : $\\frac{23}{4} = \\frac{20}{4} + \\frac{3}{4} = 5 + \\frac{3}{4}$.",
          "**Étape 3 (Fraction)** : $1{,}4 = \\frac{14}{10} = \\frac{14 \\div 2}{10 \\div 2} = \\frac{7}{5}$.",
          "**Étape 4 (Pourcentage)** : on écrit la fraction sur $100$ : $1{,}4 = \\frac{140}{100} = 140\\,\\%$."
        ]
      },
      {
        "title": "Méthode : Résoudre un problème avec des fractions",
        "example": "Dans un collège de $480$ élèves, $\\frac{1}{4}$ des élèves sont en 6e et $\\frac{3}{8}$ en 5e. Quelle fraction des élèves est en 6e ou en 5e ? Combien d'élèves cela représente-t-il ?",
        "steps": [
          "**Étape 1** : On met au même dénominateur : $\\frac{1}{4} = \\frac{2}{8}$.",
          "**Étape 2** : $\\frac{2}{8} + \\frac{3}{8} = \\frac{5}{8}$ des élèves sont en 6e ou en 5e.",
          "**Étape 3** : $\\frac{5}{8}$ de $480$ : $480 \\div 8 = 60$, puis $60 \\times 5 = 300$.",
          "**Conclusion** : $300$ élèves sont en 6e ou en 5e."
        ]
      },
      {
        "title": "Méthode : Démontrer une règle sur les fractions avec des lettres",
        "example": "Soit $a$, $b$ et $d$ trois nombres, avec $d \\neq 0$. Démontrer que $\\frac{a}{d} + \\frac{b}{d} = \\frac{a + b}{d}$.",
        "steps": [
          "**Étape 1 (Définition du quotient)** : $\\frac{a}{d}$ est le nombre qui, multiplié par $d$, donne $a$. Donc $d \\times \\frac{a}{d} = a$ et, de même, $d \\times \\frac{b}{d} = b$.",
          "**Étape 2 (Distributivité)** : $d \\times \\left(\\frac{a}{d} + \\frac{b}{d}\\right) = d \\times \\frac{a}{d} + d \\times \\frac{b}{d} = a + b$.",
          "**Étape 3 (Conclusion)** : le nombre $\\frac{a}{d} + \\frac{b}{d}$, multiplié par $d$, donne $a + b$. Par définition du quotient, ce nombre est $\\frac{a + b}{d}$.",
          "**Exemple** : avec $a = 2$, $b = 3$ et $d = 7$, on retrouve $\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$. Un exemple ne démontre rien : c'est le calcul avec des lettres qui prouve la règle pour tous les nombres."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais additionner les dénominateurs ! $\\frac{1}{2} + \\frac{1}{2} = \\frac{2}{2} = 1$, pas $\\frac{2}{4}$.",
      "⚠️ Pour obtenir une fraction égale, on **multiplie** les deux termes par le même nombre ; ajouter le même nombre ne marche pas : $\\frac{1}{2} \\neq \\frac{1 + 1}{2 + 1} = \\frac{2}{3}$.",
      "⚠️ Pour comparer $\\frac{3}{4}$ et $\\frac{5}{8}$, on ne compare pas les numérateurs tant que les dénominateurs sont différents.",
      "⚠️ $2 + \\frac{1}{3}$ ne vaut pas $\\frac{3}{3}$ : on écrit $2 = \\frac{6}{3}$, donc $2 + \\frac{1}{3} = \\frac{7}{3}$.",
      "⚠️ Pour additionner $\\frac{1}{2}$ et $\\frac{1}{3}$, multiplier les deux dénominateurs donne bien un multiple commun, mais il faut aussi transformer les numérateurs : $\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.",
      "⚠️ $120\\,\\%$ ne vaut pas $0{,}12$ : $120\\,\\% = \\frac{120}{100} = 1{,}2$."
    ],
    "flashcards": [
      { "q": "Combien vaut le quart de 36 ?", "a": "$\\frac{1}{4} \\times 36 = \\frac{36}{4} = 9$." },
      { "q": "Écrire la fraction $\\frac{20}{25}$ avec des nombres plus petits.", "a": "On divise le numérateur et le dénominateur par 5 : $\\frac{20 \\div 5}{25 \\div 5} = \\frac{4}{5}$. (En 5e, simplifier est utile mais n'est pas exigé : $\\frac{20}{25}$ et $\\frac{4}{5}$ sont deux écritures du même nombre.)" },
      { "q": "Comment additionne-t-on deux fractions ayant le même dénominateur ?", "a": "On additionne les numérateurs et on **garde le dénominateur commun** : $$\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d}$$" },
      { "q": "Pourquoi la fraction $\\frac{8}{12}$ est-elle égale à $\\frac{2}{3}$ ?", "a": "Parce qu'on divise le numérateur et le dénominateur par un même nombre ($4$) : $$\\frac{8 \\div 4}{12 \\div 4} = \\frac{2}{3}$$" },
      { "q": "Entre $\\frac{5}{9}$ et $\\frac{7}{9}$, quelle fraction est la plus grande ?", "a": "$\\frac{7}{9}$, car deux fractions ayant le même dénominateur positif sont rangées dans l'ordre de leurs numérateurs ($7 > 5$)." },
      { "q": "Comparer $\\frac{3}{4}$ et $\\frac{5}{8}$.", "a": "$\\frac{3}{4} = \\frac{6}{8}$ et $\\frac{6}{8} > \\frac{5}{8}$, donc $\\frac{3}{4} > \\frac{5}{8}$." },
      { "q": "Calculer $1 - \\frac{2}{7}$.", "a": "$\\frac{7}{7} - \\frac{2}{7} = \\frac{5}{7}$." },
      { "q": "Calculer $\\frac{5}{6} + \\frac{3}{4}$.", "a": "$12$ est un multiple commun de $6$ et $4$ : $\\frac{10}{12} + \\frac{9}{12} = \\frac{19}{12}$." },
      { "q": "Calculer $\\frac{5}{9} - \\frac{1}{6}$.", "a": "$18$ est un multiple commun de $9$ et $6$ : $\\frac{10}{18} - \\frac{3}{18} = \\frac{7}{18}$." },
      { "q": "Écrire $\\frac{17}{5}$ avec sa partie entière.", "a": "$17 = 5 \\times 3 + 2$, donc $\\frac{17}{5} = 3 + \\frac{2}{5}$." },
      { "q": "Donner d'autres écritures de $1{,}2$.", "a": "$1{,}2 = \\frac{12}{10} = \\frac{6}{5} = 1 + \\frac{1}{5} = 120\\,\\%$." }
    ]
  },
  "5G1": {
    "title": "5G1 : Repérage sur une droite et dans le plan",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Lire et placer des nombres relatifs (abscisses) sur une droite graduée.",
      "Calculer la distance entre deux points d'une droite graduée.",
      "Lire les coordonnées d'un point dans un repère orthogonal du plan.",
      "Placer un point de coordonnées relatives données.",
      "Utiliser les coordonnées pour trouver le symétrique d'un point par rapport à un axe ou à l'origine."
    ],
    "keyPoints": [
      {
        "title": "1. Droite graduée et abscisse",
        "content": "Chaque point d'une droite graduée est repéré par un nombre relatif appelé son **abscisse**. L'origine $O$ a pour abscisse 0.\n• Les nombres positifs se trouvent à droite de l'origine.\n• Les nombres négatifs se trouvent à gauche de l'origine.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 320 90\" width=\"320\" height=\"90\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <marker id=\"arrow-axis\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"var(--text-main, #334155)\" />\n      </marker>\n    </defs>\n    <line x1=\"20\" y1=\"50\" x2=\"305\" y2=\"50\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" marker-end=\"url(#arrow-axis)\" />\n    <!-- Graduations -->\n    <line x1=\"40\" y1=\"45\" x2=\"40\" y2=\"55\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" />\n    <text x=\"40\" y=\"70\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-muted, #64748b)\">-3</text>\n    <line x1=\"80\" y1=\"45\" x2=\"80\" y2=\"55\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" />\n    <text x=\"80\" y=\"70\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-muted, #64748b)\">-2</text>\n    <line x1=\"120\" y1=\"45\" x2=\"120\" y2=\"55\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" />\n    <text x=\"120\" y=\"70\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-muted, #64748b)\">-1</text>\n    <line x1=\"160\" y1=\"42\" x2=\"160\" y2=\"58\" stroke=\"#dc2626\" stroke-width=\"2\" />\n    <text x=\"160\" y=\"72\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">0</text>\n    <text x=\"160\" y=\"35\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">O</text>\n    <line x1=\"200\" y1=\"45\" x2=\"200\" y2=\"55\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" />\n    <text x=\"200\" y=\"70\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-muted, #64748b)\">+1</text>\n    <line x1=\"240\" y1=\"45\" x2=\"240\" y2=\"55\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" />\n    <text x=\"240\" y=\"70\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-muted, #64748b)\">+2</text>\n    <line x1=\"280\" y1=\"45\" x2=\"280\" y2=\"55\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" />\n    <text x=\"280\" y=\"70\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-muted, #64748b)\">+3</text>\n    <!-- Points repérés -->\n    <circle cx=\"80\" cy=\"50\" r=\"3.5\" fill=\"#dc2626\" />\n    <text x=\"80\" y=\"35\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">A(-2)</text>\n    <circle cx=\"240\" cy=\"50\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"240\" y=\"35\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">B(+2)</text>\n    <text x=\"75\" y=\"18\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#dc2626\">← Négatifs</text>\n    <text x=\"215\" y=\"18\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"#10b981\">Positifs →</text>\n  </svg>\n</div>\n\n• La **distance** entre deux points d'abscisses $a$ et $b$ (avec $a < b$) est $b - a$. Exemple : pour $A(-2)$ et $B(2)$, $AB = 2 - (-2) = 4$ unités."
      },
      {
        "title": "2. Repère orthogonal du plan",
        "content": "Un **repère orthogonal** est formé de deux droites graduées **perpendiculaires**, les **axes**, qui se coupent en leur zéro : ce point $O$ est l'**origine** du repère. L'axe horizontal est l'**axe des abscisses**, l'axe vertical l'**axe des ordonnées**. Quand l'unité est la même sur les deux axes, le repère est dit **orthonormé**.\nDans un repère orthogonal, la position d'un point $M$ est donnée par un couple de nombres noté $M(x ; y)$ :\n• $x$ est l'**abscisse** (axe horizontal, orienté de gauche à droite).\n• $y$ est l'**ordonnée** (axe vertical, orienté de bas en haut).\nOn écrit toujours l'**abscisse en premier** (ordre alphabétique : $x$ puis $y$).\n• Un point de l'axe des abscisses a une ordonnée nulle, par exemple $(4 ; 0)$ ; un point de l'axe des ordonnées a une abscisse nulle, par exemple $(0 ; -3)$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 220\" width=\"300\" height=\"220\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <marker id=\"arrow-rep\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"var(--text-main, #334155)\" />\n      </marker>\n    </defs>\n    <!-- Grille légère -->\n    <g stroke=\"rgba(148, 163, 184, 0.2)\" stroke-width=\"1\">\n      <line x1=\"30\" y1=\"35\" x2=\"30\" y2=\"195\" />\n      <line x1=\"65\" y1=\"35\" x2=\"65\" y2=\"195\" />\n      <line x1=\"100\" y1=\"35\" x2=\"100\" y2=\"195\" />\n      <line x1=\"170\" y1=\"35\" x2=\"170\" y2=\"195\" />\n      <line x1=\"205\" y1=\"35\" x2=\"205\" y2=\"195\" />\n      <line x1=\"240\" y1=\"35\" x2=\"240\" y2=\"195\" />\n      <line x1=\"275\" y1=\"35\" x2=\"275\" y2=\"195\" />\n      <line x1=\"20\" y1=\"45\" x2=\"285\" y2=\"45\" />\n      <line x1=\"20\" y1=\"80\" x2=\"285\" y2=\"80\" />\n      <line x1=\"20\" y1=\"150\" x2=\"285\" y2=\"150\" />\n      <line x1=\"20\" y1=\"185\" x2=\"285\" y2=\"185\" />\n    </g>\n    <!-- Axes -->\n    <line x1=\"20\" y1=\"115\" x2=\"290\" y2=\"115\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" marker-end=\"url(#arrow-rep)\" />\n    <line x1=\"135\" y1=\"205\" x2=\"135\" y2=\"25\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" marker-end=\"url(#arrow-rep)\" />\n    <text x=\"285\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">x (abscisses)</text>\n    <text x=\"142\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">y (ordonnées)</text>\n    <text x=\"122\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n    <!-- Point M(3;2) : x = 135 + 3*35 = 240, y = 115 - 2*35 = 45 -->\n    <line x1=\"240\" y1=\"115\" x2=\"240\" y2=\"45\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <line x1=\"135\" y1=\"45\" x2=\"240\" y2=\"45\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <circle cx=\"240\" cy=\"45\" r=\"4\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"246\" y=\"42\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">M(3 ; 2)</text>\n    <!-- Point N(-2;-1) : x = 135 - 2*35 = 65, y = 115 + 1*35 = 150 -->\n    <line x1=\"65\" y1=\"115\" x2=\"65\" y2=\"150\" stroke=\"#10b981\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <line x1=\"135\" y1=\"150\" x2=\"65\" y2=\"150\" stroke=\"#10b981\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <circle cx=\"65\" cy=\"150\" r=\"4\" fill=\"#10b981\" />\n    <text x=\"20\" y=\"165\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">N(-2 ; -1)</text>\n  </svg>\n</div>"
      },
      {
        "title": "3. Symétriques dans un repère",
        "content": "Pour un point $A(x ; y)$ :\n| Symétrie par rapport à | Image | Si $A(2 ; 5)$ |\n|:---|:---:|:---:|\n| axe des abscisses | $(x ; -y)$ | $(2 ; -5)$ |\n| axe des ordonnées | $(-x ; y)$ | $(-2 ; 5)$ |\n| origine $O$ | $(-x ; -y)$ | $(-2 ; -5)$ |\n(La symétrie par rapport à l'origine est la symétrie centrale de centre $O$.)\nOn le vérifie sur un quadrillage : la symétrie par rapport à l'axe des abscisses « retourne » le point de haut en bas, la coordonnée $x$ ne change pas."
      },
      {
        "title": "4. Milieu d'un segment",
        "content": "• Sur une droite graduée, l'abscisse du milieu $M$ de $[AB]$ est la **moyenne** des deux abscisses :\n$$x_M = \\frac{x_A + x_B}{2} \\qquad \\text{exemple : } A(-3) \\text{ et } B(5) \\text{ donnent } x_M = \\frac{-3 + 5}{2} = 1$$\n• **Pour aller plus loin** (formule étudiée au lycée, utile pour le défi) : dans un repère du plan, le milieu de $[AB]$ a pour coordonnées\n$$M\\left(\\frac{x_A + x_B}{2} ; \\frac{y_A + y_B}{2}\\right)$$"
      },
      {
        "title": "À retenir",
        "content": "• Sur une droite graduée, chaque point a une **abscisse** ; les négatifs sont à gauche de l'origine.\n• Dans le plan, $M(x ; y)$ : $x$ = abscisse (horizontale), $y$ = ordonnée (verticale), **toujours dans cet ordre**.\n• Distance sur une droite graduée : plus grande abscisse moins plus petite abscisse."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Placer un point dans un repère",
        "example": "Placer le point $A(-4 ; 3)$ dans un repère orthogonal.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 260 160\" width=\"260\" height=\"160\" style=\"max-width:260px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <marker id=\"arrow-step\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#dc2626\" />\n      </marker>\n    </defs>\n    <line x1=\"20\" y1=\"120\" x2=\"245\" y2=\"120\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"180\" y1=\"150\" x2=\"180\" y2=\"20\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <circle cx=\"180\" cy=\"120\" r=\"3\" fill=\"var(--text-main, #334155)\" />\n    <text x=\"185\" y=\"135\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O(0;0)</text>\n    <!-- Flèche horizontale : x = -4 vers la gauche -->\n    <line x1=\"180\" y1=\"120\" x2=\"60\" y2=\"120\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.5\" marker-end=\"url(#arrow-step)\" />\n    <text x=\"120\" y=\"112\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">-4 vers la gauche</text>\n    <!-- Flèche verticale : y = +3 vers le haut -->\n    <line x1=\"60\" y1=\"120\" x2=\"60\" y2=\"40\" stroke=\"#10b981\" stroke-width=\"2.5\" marker-end=\"url(#arrow-step)\" />\n    <text x=\"45\" y=\"75\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">+3 vers le haut</text>\n    <!-- Point A -->\n    <circle cx=\"60\" cy=\"40\" r=\"4.5\" fill=\"#dc2626\" />\n    <text x=\"68\" y=\"38\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">A(-4 ; 3)</text>\n  </svg>\n</div>",
        "steps": [
          "**Étape 1** : Partir de l'origine $O(0;0)$.",
          "**Étape 2** : Se déplacer de 4 unités vers la gauche sur l'axe des abscisses ($x = -4$).",
          "**Étape 3** : Monter de 3 unités sur l'axe des ordonnées ($y = +3$) et placer $A$."
        ]
      },
      {
        "title": "Méthode : Lire les coordonnées d'un point",
        "example": "Un point $B$ est situé $2$ unités à droite de l'axe des ordonnées et $3$ unités sous l'axe des abscisses. Quelles sont ses coordonnées ?",
        "steps": [
          "**Étape 1** : On « descend » (ou on monte) verticalement depuis $B$ jusqu'à l'axe des abscisses et on lit l'abscisse : $2$.",
          "**Étape 2** : On se déplace horizontalement depuis $B$ jusqu'à l'axe des ordonnées et on lit l'ordonnée : $B$ est sous l'axe, donc $-3$.",
          "**Conclusion** : $B(2 ; -3)$ — abscisse d'abord, ordonnée ensuite."
        ]
      },
      {
        "title": "Méthode : Calculer une distance et un milieu sur une droite graduée",
        "example": "Sur une droite graduée, $A(-3{,}5)$ et $B(2)$. Calculer $AB$ et l'abscisse du milieu $M$ de $[AB]$.",
        "steps": [
          "**Étape 1** : $B$ a la plus grande abscisse : $AB = 2 - (-3{,}5) = 2 + 3{,}5 = 5{,}5$ unités.",
          "**Étape 2** : $x_M = \\frac{-3{,}5 + 2}{2} = \\frac{-1{,}5}{2} = -0{,}75$.",
          "**Vérification** : $MA = -0{,}75 - (-3{,}5) = 2{,}75$ et $MB = 2 - (-0{,}75) = 2{,}75$ : $M$ est bien à égale distance de $A$ et de $B$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas intervertir l'abscisse et l'ordonnée : le premier nombre est toujours horizontal, le deuxième vertical !",
      "⚠️ Le point $(0 ; 3)$ est sur l'axe des **ordonnées** (son abscisse est nulle), et non sur l'axe des abscisses.",
      "⚠️ Lire d'abord la graduation : une unité ne correspond pas toujours à un carreau.",
      "⚠️ Une distance est toujours positive : $AB = 2 - (-3{,}5) = 5{,}5$, et non $2 - 3{,}5$."
    ],
    "flashcards": [
      { "q": "Quelles sont les coordonnées de l'origine d'un repère ?", "a": "$O(0 ; 0)$ : abscisse 0 et ordonnée 0." },
      { "q": "Dans les coordonnées d'un point $M(3 ; -4)$, quel nombre est l'abscisse ?", "a": "$3$ est l'**abscisse** (lu sur l'axe horizontal) et $-4$ est l'**ordonnée** (lu sur l'axe vertical)." },
      { "q": "Sur une droite graduée, où se situent les nombres négatifs par rapport à zéro ?", "a": "À **gauche** de l'origine 0 (ou vers le bas si la graduation est verticale)." },
      { "q": "Que peut-on dire de l'abscisse du milieu $M$ d'un segment $[AB]$ ?", "a": "L'abscisse de $M$ est la **moyenne** des abscisses de $A$ et $B$ : $$x_M = \\frac{x_A + x_B}{2}$$" },
      { "q": "Quel est le symétrique de $A(2 ; 5)$ par rapport à l'axe des abscisses ?", "a": "$A'(2 ; -5)$ : l'abscisse est conservée, l'ordonnée change de signe." },
      { "q": "Sur une droite graduée, quelle est la distance entre $A(-3)$ et $B(4)$ ?", "a": "$AB = 4 - (-3) = 7$ unités." }
    ]
  },
  "5G2": {
    "title": "5G2 : Symétrie centrale et demi-tour",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Comprendre la symétrie centrale comme un demi-tour autour d'un point.",
      "Construire le symétrique d'un point, d'un segment, d'une droite et d'un cercle, sur papier blanc ou quadrillé.",
      "Connaître et utiliser les propriétés de conservation (longueurs, angles, aires, alignement, parallélisme) : une droite et son image sont parallèles, et deux droites parallèles ont pour images deux droites parallèles.",
      "Reconnaître le centre de symétrie d'une figure.",
      "Utiliser le demi-tour pour construire une frise ou un pavage."
    ],
    "keyPoints": [
      {
        "title": "1. Définition",
        "content": "Dire que $A'$ est le symétrique de $A$ par rapport à $O$ signifie que **$O$ est le milieu du segment $[AA']$**.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 120\" width=\"280\" height=\"120\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <marker id=\"arrow-turn\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#8b5cf6\" />\n      </marker>\n    </defs>\n    <line x1=\"45\" y1=\"50\" x2=\"235\" y2=\"90\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n    <circle cx=\"45\" cy=\"50\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"235\" cy=\"90\" r=\"3.5\" fill=\"#10b981\" />\n    <circle cx=\"140\" cy=\"70\" r=\"4\" fill=\"#dc2626\" />\n    <text x=\"32\" y=\"48\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">A</text>\n    <text x=\"245\" y=\"94\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#10b981\">A'</text>\n    <text x=\"136\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">O</text>\n    <!-- Codage égalité OA = OA' -->\n    <line x1=\"89\" y1=\"55\" x2=\"95\" y2=\"65\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"93\" y1=\"55\" x2=\"99\" y2=\"65\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"184\" y1=\"75\" x2=\"190\" y2=\"85\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"188\" y1=\"75\" x2=\"194\" y2=\"85\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <!-- Arc de demi-tour -->\n    <path d=\"M 65 35 A 80 40 0 0 1 215 65\" fill=\"none\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" stroke-dasharray=\"3 3\" marker-end=\"url(#arrow-turn)\" />\n    <text x=\"140\" y=\"28\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#8b5cf6\">Demi-tour de 180°</text>\n    <text x=\"140\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">O est le milieu de [AA']</text>\n  </svg>\n</div>\n\n• Faire la symétrie de centre $O$, c'est faire tourner la figure d'un **demi-tour** ($180^\\circ$) autour de $O$.\n• Le symétrique du centre $O$ est le point $O$ lui-même."
      },
      {
        "title": "2. Images des figures et propriétés de conservation",
        "content": "• L'image d'un **segment** est un segment de **même longueur**.\n• L'image d'une **droite** est une droite **parallèle** (confondue si la droite passe par $O$).\n• Deux droites **parallèles** ont pour images deux droites **parallèles**.\n• L'image d'un **cercle** de centre $C$ et de rayon $r$ est le cercle de centre $C'$ (symétrique de $C$) et de **même rayon**.\n• La symétrie centrale **conserve** les longueurs, les mesures d'angles, l'alignement, le parallélisme, les périmètres et les aires : la figure image est superposable à la figure de départ.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 170\" width=\"300\" height=\"170\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Triangle ABC -->\n    <polygon points=\"55,35 25,95 85,95\" fill=\"rgba(37, 99, 235, 0.1)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <text x=\"52\" y=\"26\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">A</text>\n    <text x=\"12\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">B</text>\n    <text x=\"90\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">C</text>\n    <!-- Centre O -->\n    <circle cx=\"150\" cy=\"85\" r=\"4\" fill=\"#dc2626\" />\n    <text x=\"146\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">O</text>\n    <!-- Lignes de symétrie passant par O -->\n    <line x1=\"55\" y1=\"35\" x2=\"245\" y2=\"135\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" />\n    <line x1=\"25\" y1=\"95\" x2=\"275\" y2=\"75\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" />\n    <line x1=\"85\" y1=\"95\" x2=\"215\" y2=\"75\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" />\n    <!-- Triangle A'B'C' (inversé) -->\n    <polygon points=\"245,135 275,75 215,75\" fill=\"rgba(16, 185, 129, 0.1)\" stroke=\"#10b981\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <text x=\"245\" y=\"150\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">A'</text>\n    <text x=\"280\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">B'</text>\n    <text x=\"200\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">C'</text>\n    <text x=\"150\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-muted, #64748b)\">(AB) // (A'B') et AB = A'B'</text>\n  </svg>\n</div>"
      },
      {
        "title": "3. Centre de symétrie d'une figure",
        "content": "Un point $O$ est **centre de symétrie** d'une figure si le symétrique de cette figure par rapport à $O$ est **la figure elle-même** (après un demi-tour, elle se superpose à elle-même).\n• Le **cercle** : son centre. Le **segment** : son milieu.\n• Le **parallélogramme**, le rectangle, le losange et le carré : le point d'intersection de leurs diagonales.\n• Les lettres N, S, Z, H, O, X ont un centre de symétrie.\n• Un **triangle** n'a jamais de centre de symétrie."
      },
      {
        "title": "4. Symétrie axiale ou symétrie centrale ?",
        "content": "| | Symétrie axiale | Symétrie centrale |\n|:---|:---:|:---:|\n| Élément de référence | une droite $(d)$ | un point $O$ |\n| Mouvement | pliage (retournement) | demi-tour |\n| Un point $A$ et son image $A'$ | $(d)$ est la médiatrice de $[AA']$ | $O$ est le milieu de $[AA']$ |\n| Image d'une droite | une droite (pas forcément parallèle) | une droite parallèle |\nLes deux symétries conservent les longueurs, les angles et les aires."
      },
      {
        "title": "5. Frises, pavages et rosaces",
        "content": "En répétant un **motif** par demi-tours, on construit des figures régulières. Le demi-tour conserve les longueurs, les angles et les aires : tous les motifs obtenus sont **superposables** au motif de départ.\n• **Frise** : bande obtenue en répétant un motif dans une direction. Le demi-tour de centre le milieu d'un côté d'un triangle donne un triangle qui s'accole à ce côté ; les deux forment un parallélogramme. Sur la figure, le demi-tour de centre $I$ donne le 2e triangle, celui de centre $J$ le 3e et celui de centre $K$ le 4e.\n• **Pavage** : recouvrement du plan par des motifs, sans trou ni chevauchement. En recommençant avec les milieux des autres côtés, on peut paver le plan avec n'importe quel triangle.\n• **Rosace** : figure formée d'un motif répété autour d'un point. Un motif et son image par un demi-tour de centre $O$ forment une figure qui a $O$ pour centre de symétrie.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 150\" width=\"300\" height=\"150\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"18,110 138,110 48,20\" fill=\"rgba(37, 99, 235, 0.18)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <polygon points=\"138,110 168,20 48,20\" fill=\"rgba(16, 185, 129, 0.18)\" stroke=\"#10b981\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <polygon points=\"138,110 258,110 168,20\" fill=\"rgba(37, 99, 235, 0.18)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <polygon points=\"168,20 258,110 288,20\" fill=\"rgba(16, 185, 129, 0.18)\" stroke=\"#10b981\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <circle cx=\"93\" cy=\"65\" r=\"3\" fill=\"#dc2626\" />\n    <text x=\"99\" y=\"62\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">I</text>\n    <circle cx=\"153\" cy=\"65\" r=\"3\" fill=\"#dc2626\" />\n    <text x=\"159\" y=\"62\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">J</text>\n    <circle cx=\"213\" cy=\"65\" r=\"3\" fill=\"#dc2626\" />\n    <text x=\"219\" y=\"62\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">K</text>\n    <text x=\"78\" y=\"125\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">motif</text>\n    <text x=\"150\" y=\"142\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Chaque triangle est l'image du précédent par un demi-tour</text>\n  </svg>\n</div>"
      },
      {
        "title": "À retenir",
        "content": "• $A'$ symétrique de $A$ par rapport à $O$ $\\Longleftrightarrow$ $O$ est le **milieu** de $[AA']$.\n• Une droite et son image sont **parallèles** ; deux droites parallèles ont pour images deux droites parallèles.\n• Longueurs, angles et aires sont conservés."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Construire le symétrique d'un point A",
        "example": "Construire A' symétrique de A par rapport à O.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 270 100\" width=\"270\" height=\"100\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Demi-droite [AO) prolongée au-delà de A' -->\n    <line x1=\"35\" y1=\"50\" x2=\"130\" y2=\"50\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n    <line x1=\"130\" y1=\"50\" x2=\"250\" y2=\"50\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\" />\n    <!-- Points A et O -->\n    <circle cx=\"40\" cy=\"50\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"130\" cy=\"50\" r=\"3.5\" fill=\"#dc2626\" />\n    <!-- Arc de compas centré en O de rayon OA = 90 coupant exactement en A'(220, 50) -->\n    <path d=\"M 218 31 A 90 90 0 0 1 218 69\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.2\" />\n    <!-- Point A' à l'intersection exacte -->\n    <circle cx=\"220\" cy=\"50\" r=\"3.5\" fill=\"#10b981\" />\n    <!-- Labels -->\n    <text x=\"26\" y=\"54\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">A</text>\n    <text x=\"126\" y=\"70\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">O</text>\n    <text x=\"228\" y=\"44\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">A'</text>\n    <!-- Codage égalité OA = OA' -->\n    <line x1=\"83\" y1=\"44\" x2=\"87\" y2=\"56\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"173\" y1=\"44\" x2=\"177\" y2=\"56\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <text x=\"130\" y=\"24\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-muted, #64748b)\">Report au compas : OA = OA'</text>\n  </svg>\n</div>",
        "steps": [
          "**Étape 1** : Tracer la demi-droite $[AO)$ : le point $A'$ sera de l'autre côté de $O$.",
          "**Étape 2** : Avec le compas, reporter la longueur $OA$ à partir de $O$ sur cette demi-droite : on obtient $A'$ avec $OA' = OA$.",
          "**Étape 3** : Coder les longueurs égales $OA = OA'$ : $O$ est le milieu de $[AA']$."
        ]
      },
      {
        "title": "Méthode : Construire un symétrique sur quadrillage",
        "example": "Sur un quadrillage, le point $A$ est situé $3$ carreaux à droite et $2$ carreaux au-dessus du centre $O$. Placer son symétrique $A'$.",
        "steps": [
          "**Étape 1** : On décrit le trajet de $O$ vers $A$ : $3$ carreaux vers la droite, $2$ carreaux vers le haut.",
          "**Étape 2** : On fait le trajet **inverse** à partir de $O$ : $3$ carreaux vers la gauche, $2$ carreaux vers le bas. On place $A'$.",
          "**Vérification** : $A$, $O$ et $A'$ sont alignés et $O$ est le milieu de $[AA']$."
        ]
      },
      {
        "title": "Méthode : Construire le symétrique d'un cercle",
        "example": "Construire le symétrique, par rapport au point $O$, du cercle $\\mathcal{C}$ de centre $C$ et de rayon $2\\text{ cm}$.",
        "steps": [
          "**Étape 1** : Il suffit de construire le symétrique du **centre** : on place $C'$ tel que $O$ soit le milieu de $[CC']$.",
          "**Étape 2** : La symétrie conserve les longueurs, donc le rayon reste $2\\text{ cm}$.",
          "**Étape 3** : On trace le cercle de centre $C'$ et de rayon $2\\text{ cm}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre la symétrie axiale (pliage) et la symétrie centrale (demi-tour).",
      "⚠️ Le symétrique d'un point se trouve **de l'autre côté** du centre, à la même distance : on ne s'arrête pas au point $O$.",
      "⚠️ Sur quadrillage, on inverse **les deux** déplacements (horizontal et vertical), pas un seul.",
      "⚠️ Un triangle n'a pas de centre de symétrie, même s'il est équilatéral (il a seulement des axes de symétrie)."
    ],
    "flashcards": [
      { "q": "Si $A'$ est le symétrique de $A$ par rapport à $O$, que vaut la distance $OA'$ ?", "a": "$OA' = OA$ car $O$ est le milieu de $[AA']$." },
      { "q": "Quel rôle joue le centre de symétrie $O$ pour tout point $M$ et son symétrique $M'$ ?", "a": "Le point $O$ est le **milieu du segment $[MM']$**." },
      { "q": "Quelle est l'image d'un angle de 50° par symétrie centrale ?", "a": "Un angle de **50°** (la symétrie centrale conserve la mesure des angles)." },
      { "q": "Quelle est l'image d'une droite $(d)$ par une symétrie centrale ?", "a": "Une droite $(d')$ qui est **parallèle** à $(d)$." },
      { "q": "À quel mouvement correspond une symétrie centrale ?", "a": "À un **demi-tour** autour du centre : la figure tourne de $180^\\circ$ autour de ce point." },
      { "q": "Que deviennent deux droites parallèles par un demi-tour ?", "a": "Elles ont pour images deux droites **parallèles**." },
      { "q": "Quel est le centre de symétrie d'un parallélogramme ?", "a": "Le point d'intersection de ses diagonales." },
      { "q": "Un triangle peut-il avoir un centre de symétrie ?", "a": "Non, jamais." }
    ]
  },
  "5G3": {
    "title": "5G3 : Angles et parallélisme (alternes-internes)",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Connaître le vocabulaire : angles adjacents, complémentaires, supplémentaires, opposés par le sommet.",
      "Reconnaître des angles alternes-internes et des angles correspondants formés par deux droites et une sécante.",
      "Utiliser les propriétés des angles formés par deux droites parallèles et une sécante, et leurs réciproques pour démontrer que deux droites sont parallèles.",
      "Connaître, savoir démontrer et utiliser la somme des angles d'un triangle ; connaître les angles des triangles particuliers."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire des angles",
        "content": "• Deux angles **adjacents** ont le même sommet, un côté commun, et sont situés de part et d'autre de ce côté.\n• Deux angles **complémentaires** ont une somme de $90^\\circ$ : $35^\\circ$ et $55^\\circ$.\n• Deux angles **supplémentaires** ont une somme de $180^\\circ$ : $35^\\circ$ et $145^\\circ$.\n• Deux angles **opposés par le sommet** (formés par deux droites sécantes) ont **la même mesure**."
      },
      {
        "title": "2. Angles alternes-internes et correspondants",
        "content": "Deux droites $(d_1)$ et $(d_2)$ sont coupées par une **sécante** $(\\Delta)$.\n• Deux angles **alternes-internes** sont situés **de part et d'autre** de la sécante et **entre** les deux droites (ils dessinent un « Z »).\n• Deux angles **correspondants** sont situés **du même côté** de la sécante, l'un entre les droites et l'autre à l'extérieur, « à la même place » sur chaque droite (ils dessinent un « F »).\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 170\" width=\"300\" height=\"170\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Deux droites parallèles -->\n    <line x1=\"30\" y1=\"55\" x2=\"270\" y2=\"55\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n    <line x1=\"30\" y1=\"125\" x2=\"270\" y2=\"125\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n    <text x=\"275\" y=\"58\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">(d₁)</text>\n    <text x=\"275\" y=\"128\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">(d₂)</text>\n    <!-- Sécante oblique -->\n    <line x1=\"65\" y1=\"20\" x2=\"235\" y2=\"160\" stroke=\"#8b5cf6\" stroke-width=\"2\" />\n    <text x=\"50\" y=\"25\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#8b5cf6\">(Δ)</text>\n    <!-- Intersection 1 : (107, 55), Intersection 2 : (192, 125) -->\n    <!-- Angles alternes-internes en vert (Z) -->\n    <path d=\"M 107 55 L 132 55 A 25 25 0 0 1 122 67 Z\" fill=\"rgba(16, 185, 129, 0.25)\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <path d=\"M 192 125 L 167 125 A 25 25 0 0 1 177 113 Z\" fill=\"rgba(16, 185, 129, 0.25)\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <!-- Angles correspondants en bleu (F) -->\n    <path d=\"M 107 55 L 132 55 A 25 25 0 0 0 92 43 Z\" fill=\"rgba(37, 99, 235, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <path d=\"M 192 125 L 217 125 A 25 25 0 0 0 177 113 Z\" fill=\"rgba(37, 99, 235, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <rect x=\"35\" y=\"145\" width=\"110\" height=\"18\" rx=\"4\" fill=\"rgba(16, 185, 129, 0.15)\" />\n    <text x=\"90\" y=\"158\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#10b981\">Alternes-internes</text>\n    <rect x=\"155\" y=\"145\" width=\"100\" height=\"18\" rx=\"4\" fill=\"rgba(37, 99, 235, 0.15)\" />\n    <text x=\"205\" y=\"158\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">Correspondants</text>\n  </svg>\n</div>"
      },
      {
        "title": "3. Propriétés et réciproques",
        "content": "**Propriété** : si deux droites **parallèles** sont coupées par une sécante, alors les angles alternes-internes ont la **même mesure** ; de même, les angles correspondants ont la même mesure.\n**Réciproque** : si deux droites coupées par une sécante forment deux angles alternes-internes (ou correspondants) de **même mesure**, alors ces deux droites sont **parallèles**.\n• La propriété sert à **calculer** un angle quand on sait que les droites sont parallèles.\n• La réciproque sert à **démontrer** que deux droites sont parallèles.\n\n**Pourquoi ? Le lien avec le demi-tour.** Soit $A$ et $B$ les points où la sécante coupe $(d_1)$ et $(d_2)$, et $I$ le milieu de $[AB]$. Le demi-tour de centre $I$ échange $A$ et $B$, et la sécante est sa propre image, car elle passe par $I$.\n• Si $(d_1) \\parallel (d_2)$ : l'image de $(d_1)$ est la parallèle à $(d_1)$ passant par $B$, c'est-à-dire $(d_2)$. Un angle alterne-interne en $A$ a alors pour image l'angle alterne-interne en $B$. Comme le demi-tour conserve les angles, ils ont la même mesure.\n• Réciproquement, si ces deux angles ont la même mesure, l'image de $(d_1)$ passe par $B$ et fait avec la sécante le même angle que $(d_2)$, du même côté : c'est donc la droite $(d_2)$. Comme une droite et son image sont parallèles, $(d_1) \\parallel (d_2)$.\n• Pour deux angles correspondants : l'un d'eux est opposé par le sommet à un angle alterne-interne de l'autre, on se ramène donc au cas précédent.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 150\" width=\"300\" height=\"150\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs><marker id=\"arrow-dt-5g3\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\"><path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#8b5cf6\" /></marker></defs>\n    <line x1=\"25\" y1=\"30\" x2=\"265\" y2=\"30\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n    <line x1=\"25\" y1=\"120\" x2=\"265\" y2=\"120\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n    <line x1=\"85\" y1=\"10\" x2=\"215\" y2=\"140\" stroke=\"#8b5cf6\" stroke-width=\"2\" />\n    <path d=\"M 105 30 L 127 30 A 22 22 0 0 1 120.6 45.6 Z\" fill=\"rgba(16, 185, 129, 0.3)\" stroke=\"#10b981\" stroke-width=\"1.5\" />\n    <path d=\"M 195 120 L 173 120 A 22 22 0 0 1 179.4 104.4 Z\" fill=\"rgba(16, 185, 129, 0.3)\" stroke=\"#10b981\" stroke-width=\"1.5\" />\n    <line x1=\"124.7\" y1=\"55.3\" x2=\"130.3\" y2=\"49.7\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"169.7\" y1=\"100.3\" x2=\"175.3\" y2=\"94.7\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <path d=\"M 131.6 56.6 A 26 26 0 0 1 168.4 93.4\" fill=\"none\" stroke=\"#8b5cf6\" stroke-width=\"1.6\" stroke-dasharray=\"3 3\" marker-end=\"url(#arrow-dt-5g3)\" />\n    <circle cx=\"105\" cy=\"30\" r=\"3\" fill=\"var(--text-main, #334155)\" />\n    <circle cx=\"195\" cy=\"120\" r=\"3\" fill=\"var(--text-main, #334155)\" />\n    <circle cx=\"150\" cy=\"75\" r=\"3.5\" fill=\"#dc2626\" />\n    <text x=\"96\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"198\" y=\"136\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"132\" y=\"88\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">I</text>\n    <text x=\"270\" y=\"34\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">(d₁)</text>\n    <text x=\"270\" y=\"124\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">(d₂)</text>\n    <text x=\"184\" y=\"72\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#8b5cf6\">demi-tour</text>\n    <text x=\"184\" y=\"84\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#8b5cf6\">de centre I</text>\n  </svg>\n</div>"
      },
      {
        "title": "4. Somme des angles d'un triangle",
        "content": "Dans n'importe quel triangle $ABC$ :\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$$\n**Démonstration (à savoir refaire).** Soit $ABC$ un triangle quelconque. On trace la droite $(d)$ passant par $A$ et parallèle à $(BC)$, et on place sur $(d)$ deux points $M$ et $N$ de part et d'autre de $A$, de sorte que $M$ et $C$ soient de part et d'autre de la droite $(AB)$, et $N$ et $B$ de part et d'autre de la droite $(AC)$ (cette consigne convient à tous les triangles, même avec un angle obtus en $B$ ou en $C$).\n• Les droites $(d)$ et $(BC)$ sont parallèles et coupées par la sécante $(AB)$ : les angles alternes-internes $\\widehat{MAB}$ et $\\widehat{ABC}$ ont la même mesure.\n• De même, avec la sécante $(AC)$ : les angles alternes-internes $\\widehat{NAC}$ et $\\widehat{ACB}$ ont la même mesure.\n• Les points $M$, $A$ et $N$ sont alignés, donc les trois angles de sommet $A$ forment un angle plat : $\\widehat{MAB} + \\widehat{BAC} + \\widehat{NAC} = 180^\\circ$.\n• On remplace $\\widehat{MAB}$ par $\\widehat{ABC}$ et $\\widehat{NAC}$ par $\\widehat{ACB}$ : $\\widehat{ABC} + \\widehat{BAC} + \\widehat{ACB} = 180^\\circ$.\nCe raisonnement n'utilise aucune mesure : il est valable pour **tous** les triangles.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 172\" width=\"300\" height=\"172\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"125,40 45,135 255,135\" fill=\"rgba(37, 99, 235, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <line x1=\"12\" y1=\"40\" x2=\"288\" y2=\"40\" stroke=\"#8b5cf6\" stroke-width=\"2\" />\n    <text x=\"296\" y=\"32\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#8b5cf6\">(d)</text>\n    <path d=\"M 125 40 L 149 40 A 24 24 0 0 1 144.4 54.2 Z\" fill=\"rgba(217, 119, 6, 0.3)\" stroke=\"#d97706\" stroke-width=\"1.5\" />\n    <path d=\"M 125 40 L 144.4 54.2 A 24 24 0 0 1 109.5 58.4 Z\" fill=\"rgba(37, 99, 235, 0.3)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" />\n    <path d=\"M 125 40 L 109.5 58.4 A 24 24 0 0 1 101 40 Z\" fill=\"rgba(16, 185, 129, 0.3)\" stroke=\"#10b981\" stroke-width=\"1.5\" />\n    <path d=\"M 45 135 L 60.5 116.6 A 24 24 0 0 1 69 135 Z\" fill=\"rgba(16, 185, 129, 0.3)\" stroke=\"#10b981\" stroke-width=\"1.5\" />\n    <path d=\"M 255 135 L 231 135 A 24 24 0 0 1 235.6 120.8 Z\" fill=\"rgba(217, 119, 6, 0.3)\" stroke=\"#d97706\" stroke-width=\"1.5\" />\n    <circle cx=\"30\" cy=\"40\" r=\"2.8\" fill=\"#8b5cf6\" />\n    <circle cx=\"270\" cy=\"40\" r=\"2.8\" fill=\"#8b5cf6\" />\n    <text x=\"125\" y=\"28\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"33\" y=\"149\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"260\" y=\"149\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"30\" y=\"28\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#8b5cf6\">M</text>\n    <text x=\"270\" y=\"28\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#8b5cf6\">N</text>\n    <text x=\"150\" y=\"164\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Autour de A, les trois angles forment un angle plat</text>\n  </svg>\n</div>"
      },
      {
        "title": "5. Angles des triangles particuliers",
        "content": "• **Triangle isocèle** : les deux angles **à la base** ont la même mesure.\n• **Réciproque** : un triangle qui a deux angles de même mesure est **isocèle** ; son sommet principal est le sommet du troisième angle.\n• **Triangle équilatéral** : les trois angles mesurent $60^\\circ$ ($180^\\circ \\div 3$).\n• **Triangle rectangle** : les deux angles aigus sont **complémentaires** (somme $90^\\circ$).\n• **Triangle rectangle isocèle** : ses angles aigus mesurent chacun $45^\\circ$.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 130\" width=\"300\" height=\"130\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Triangle isocèle -->\n    <polygon points=\"75,25 35,100 115,100\" fill=\"rgba(139, 92, 246, 0.08)\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <line x1=\"52\" y1=\"60\" x2=\"58\" y2=\"65\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" />\n    <line x1=\"92\" y1=\"65\" x2=\"98\" y2=\"60\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" />\n    <path d=\"M 35 100 L 50 100 A 15 15 0 0 0 43 85 Z\" fill=\"rgba(139, 92, 246, 0.3)\" />\n    <path d=\"M 115 100 L 100 100 A 15 15 0 0 1 107 85 Z\" fill=\"rgba(139, 92, 246, 0.3)\" />\n    <text x=\"75\" y=\"118\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#8b5cf6\">Isocèle : 2 angles égaux</text>\n    <!-- Triangle équilatéral -->\n    <polygon points=\"225,25 185,95 265,95\" fill=\"rgba(217, 119, 6, 0.08)\" stroke=\"#d97706\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <line x1=\"202\" y1=\"57\" x2=\"208\" y2=\"63\" stroke=\"#d97706\" stroke-width=\"1.5\" />\n    <line x1=\"242\" y1=\"63\" x2=\"248\" y2=\"57\" stroke=\"#d97706\" stroke-width=\"1.5\" />\n    <line x1=\"223\" y1=\"92\" x2=\"227\" y2=\"98\" stroke=\"#d97706\" stroke-width=\"1.5\" />\n    <text x=\"225\" y=\"118\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#d97706\">Équilatéral : 3 × 60°</text>\n  </svg>\n</div>"
      },
      {
        "title": "À retenir",
        "content": "• Droites parallèles $\\Longrightarrow$ angles alternes-internes (ou correspondants) égaux.\n• Angles alternes-internes (ou correspondants) égaux $\\Longrightarrow$ droites parallèles.\n• Dans un triangle : $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$. À savoir démontrer : parallèle à $(BC)$ passant par $A$, angles alternes-internes, angle plat.\n• Un triangle qui a deux angles de même mesure est **isocèle**."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un angle inconnu",
        "example": "Dans le triangle ABC, $\\widehat{A} = 55^\\circ$ et $\\widehat{B} = 65^\\circ$. Calculer $\\widehat{C}$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 250 130\" width=\"250\" height=\"130\" style=\"max-width:250px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"110,25 40,105 210,105\" fill=\"rgba(37, 99, 235, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <text x=\"106\" y=\"18\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"28\" y=\"112\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"216\" y=\"112\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"110\" y=\"46\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">55°</text>\n    <text x=\"60\" y=\"98\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">65°</text>\n    <text x=\"165\" y=\"98\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">? (60°)</text>\n  </svg>\n</div>",
        "steps": [
          "**Étape 1** : La somme des angles d'un triangle est $180^\\circ$.",
          "**Étape 2** : On calcule la somme des deux angles connus : $55 + 65 = 120^\\circ$.",
          "**Étape 3** : On soustrait à $180^\\circ$ : $\\widehat{C} = 180 - 120 = 60^\\circ$."
        ]
      },
      {
        "title": "Méthode : Démontrer que deux droites sont parallèles",
        "example": "Les droites $(d_1)$ et $(d_2)$ sont coupées par la sécante $(\\Delta)$ en $A$ et en $B$. Deux angles alternes-internes mesurent chacun $48^\\circ$. Les droites $(d_1)$ et $(d_2)$ sont-elles parallèles ?",
        "steps": [
          "**On sait que** : les angles alternes-internes formés par $(d_1)$, $(d_2)$ et la sécante $(\\Delta)$ mesurent tous les deux $48^\\circ$.",
          "**Or** : si deux droites coupées par une sécante forment deux angles alternes-internes de même mesure, alors ces droites sont parallèles.",
          "**Donc** : $(d_1) \\parallel (d_2)$."
        ]
      },
      {
        "title": "Méthode : Calculer un angle grâce à des parallèles",
        "example": "$(d_1) \\parallel (d_2)$ et la sécante $(\\Delta)$ forme avec $(d_1)$ un angle de $115^\\circ$. Calculer l'angle correspondant sur $(d_2)$, puis l'angle qui lui est adjacent sur $(d_2)$.",
        "steps": [
          "**Étape 1** : Les droites sont parallèles, donc les angles correspondants ont la même mesure : l'angle correspondant mesure $115^\\circ$.",
          "**Étape 2** : L'angle qui lui est adjacent forme avec lui un angle plat : ils sont supplémentaires.",
          "**Étape 3** : $180^\\circ - 115^\\circ = 65^\\circ$."
        ]
      },
      {
        "title": "Méthode : Calculer les angles d'un triangle isocèle",
        "example": "$EFG$ est isocèle en $E$ et $\\widehat{FEG} = 70^\\circ$. Calculer $\\widehat{EFG}$ et $\\widehat{EGF}$.",
        "steps": [
          "**Étape 1** : Le triangle est isocèle en $E$ : les angles à la base $\\widehat{EFG}$ et $\\widehat{EGF}$ sont égaux.",
          "**Étape 2** : Leur somme vaut $180^\\circ - 70^\\circ = 110^\\circ$.",
          "**Étape 3** : $\\widehat{EFG} = \\widehat{EGF} = 110^\\circ \\div 2 = 55^\\circ$."
        ]
      }
    ],
    "traps": [
      "⚠️ Deux angles alternes-internes ne sont égaux que lorsque les droites sont parallèles !",
      "⚠️ « Ça se voit sur la figure » n'est pas une preuve : pour démontrer un parallélisme, il faut citer la réciproque avec des mesures d'angles égales.",
      "⚠️ Vérifier que la somme des angles fait $180^\\circ$ sur un exemple, ou en mesurant, n'est pas une démonstration : la preuve doit valoir pour **n'importe quel** triangle.",
      "⚠️ Ne pas confondre **complémentaires** (somme $90^\\circ$) et **supplémentaires** (somme $180^\\circ$).",
      "⚠️ Dans un triangle isocèle, les angles égaux sont ceux **à la base**, pas l'angle au sommet principal."
    ],
    "flashcards": [
      { "q": "Quelle est la somme des 3 angles d'un triangle ?", "a": "$180^\\circ$." },
      { "q": "Que peut-on dire de deux angles alternes-internes formés par deux droites parallèles coupées par une sécante ?", "a": "Ils ont **la même mesure**." },
      { "q": "Dans un triangle isocèle en A, l'angle au sommet mesure 40°. Que valent les deux autres angles ?", "a": "$$180 - 40 = 140 \\quad \\implies \\quad 140 \\div 2 = 70^\\circ \\text{ chacun}$$" },
      { "q": "Que valent les angles d'un triangle équilatéral ?", "a": "Chaque angle mesure exactement **60°** ($180^\\circ \\div 3 = 60^\\circ$)." },
      { "q": "Deux droites coupées par une sécante forment deux angles correspondants égaux. Que peut-on en déduire ?", "a": "Les deux droites sont **parallèles** (réciproque de la propriété des angles correspondants)." },
      { "q": "Quel est le complémentaire d'un angle de $35^\\circ$ ? Et son supplémentaire ?", "a": "Complémentaire : $90^\\circ - 35^\\circ = 55^\\circ$. Supplémentaire : $180^\\circ - 35^\\circ = 145^\\circ$." },
      { "q": "Comment démontre-t-on que la somme des angles d'un triangle $ABC$ vaut $180^\\circ$ ?", "a": "On trace la parallèle à $(BC)$ passant par $A$ : les angles **alternes-internes** reportent $\\widehat{ABC}$ et $\\widehat{ACB}$ de part et d'autre de $\\widehat{BAC}$, et les trois angles forment un **angle plat**." },
      { "q": "Un triangle a deux angles de même mesure. Que peut-on en déduire ?", "a": "Il est **isocèle** ; son sommet principal est le sommet du troisième angle." }
    ]
  },
  "5P1": {
    "title": "5P1 : Proportionnalité, pourcentages et échelles",
    "domain": "Proportionnalité",
    "objectives": [
      "Reconnaître une situation de proportionnalité (tableau, contexte, graphique) ou une situation qui ne l'est pas.",
      "Calculer une quatrième proportionnelle : coefficient, linéarité, retour à l'unité.",
      "Appliquer un pourcentage à une quantité et exprimer une proportion en pourcentage.",
      "Utiliser une échelle sur un plan ou une carte."
    ],
    "keyPoints": [
      {
        "title": "1. Reconnaître la proportionnalité",
        "content": "Deux grandeurs sont **proportionnelles** si l'on passe des valeurs de l'une à celles de l'autre en multipliant **toujours par le même nombre**, le **coefficient de proportionnalité**.\n| Masse (kg) | 2 | 5 | 8 |\n|:---:|:---:|:---:|:---:|\n| Prix (€) | 3 | 7,50 | 12 |\n$\\frac{3}{2} = 1{,}5$ ; $\\frac{7{,}5}{5} = 1{,}5$ ; $\\frac{12}{8} = 1{,}5$ : le tableau est proportionnel, de coefficient $1{,}5$ (le prix au kilogramme).\n• **Contre-exemple** : un taxi qui facture $4$ € de prise en charge plus $2$ € par km. Pour $1$ km on paie $6$ €, pour $2$ km $8$ € (et non $12$ €) : ce n'est **pas** proportionnel.\n• **Graphique** : une situation est proportionnelle lorsque ses points sont **alignés sur une droite passant par l'origine** du repère.\n• **Nuage de points** : quand on représente des **mesures**, chaque couple de valeurs donne un point du repère ; l'ensemble forme un **nuage de points**. Si les points sont presque alignés sur une droite passant par l'origine (à la précision des mesures près), il est **plausible** que les grandeurs soient proportionnelles ; sinon (points non alignés, ou droite ne passant pas par l'origine), elles ne le sont pas."
      },
      {
        "title": "2. Calculer une quatrième proportionnelle",
        "content": "Exemple : $3$ kg de tomates coûtent $7{,}50$ €. Combien coûtent $5$ kg ?\n• **Retour à l'unité** : $1$ kg coûte $7{,}50 \\div 3 = 2{,}50$ €, donc $5$ kg coûtent $5 \\times 2{,}50 = 12{,}50$ €.\n• **Coefficient** : on multiplie la masse par $2{,}5$ pour obtenir le prix : $5 \\times 2{,}5 = 12{,}5$.\n• **Linéarité** : $5 \\text{ kg} = 3 \\text{ kg} + 2 \\text{ kg}$ ; si $2$ kg coûtent $5$ €, alors $5$ kg coûtent $7{,}50 + 5 = 12{,}50$ €."
      },
      {
        "title": "3. Pourcentages",
        "content": "• **Appliquer** un pourcentage : prendre $p\\,\\%$ d'une quantité $Q$, c'est calculer $\\frac{p}{100} \\times Q$.\n$$20\\,\\% \\text{ de } 60 = \\frac{20}{100} \\times 60 = 0{,}2 \\times 60 = 12$$\n• Repères : $50\\,\\%$ c'est la moitié, $25\\,\\%$ le quart, $10\\,\\%$ le dixième, $75\\,\\%$ les trois quarts.\n• **Calculer** un pourcentage : on écrit la proportion sous forme de fraction de dénominateur $100$.\n$$7 \\text{ élèves sur } 25 : \\frac{7}{25} = \\frac{28}{100} = 28\\,\\%$$"
      },
      {
        "title": "4. Échelles",
        "content": "Sur un plan ou une carte, les longueurs sont proportionnelles aux longueurs réelles. L'**échelle** est le coefficient qui permet de passer des longueurs réelles aux longueurs sur le plan, **exprimées dans la même unité** :\n$$\\text{échelle} = \\frac{\\text{longueur sur le plan}}{\\text{longueur réelle}}$$\nUne échelle de $\\frac{1}{200}$ signifie que $1\\text{ cm}$ sur le plan représente $200\\text{ cm} = 2\\text{ m}$ en réalité."
      },
      {
        "title": "À retenir",
        "content": "• Proportionnalité : on multiplie toujours par le **même** nombre.\n• Retour à l'unité : on divise, puis on multiplie.\n• $p\\,\\%$ de $Q$ $= \\frac{p}{100} \\times Q$.\n• Échelle : longueurs **dans la même unité** avant de calculer."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Vérifier qu'un tableau est proportionnel",
        "example": "Le tableau ci-dessous est-il un tableau de proportionnalité ?\n| Nombre de places | 4 | 6 | 10 |\n|:---:|:---:|:---:|:---:|\n| Prix (€) | 34 | 51 | 80 |",
        "steps": [
          "**Étape 1** : On calcule chaque quotient « prix ÷ nombre de places » : $34 \\div 4 = 8{,}5$ ; $51 \\div 6 = 8{,}5$ ; $80 \\div 10 = 8$.",
          "**Étape 2** : Les quotients ne sont pas tous égaux : $8 \\neq 8{,}5$.",
          "**Conclusion** : ce n'est **pas** un tableau de proportionnalité (les $10$ places bénéficient d'une réduction)."
        ]
      },
      {
        "title": "Méthode : Calculer une quatrième proportionnelle",
        "example": "$4$ stylos coûtent $6$ €. Combien coûtent $10$ stylos ?",
        "steps": [
          "**Étape 1 (retour à l'unité)** : $1$ stylo coûte $6 \\div 4 = 1{,}50$ €.",
          "**Étape 2** : $10$ stylos coûtent $10 \\times 1{,}50 = 15$ €.",
          "**Contrôle par linéarité** : $10 = 4 + 4 + 2$ ; $6 + 6 + 3 = 15$ €. Les deux méthodes concordent."
        ]
      },
      {
        "title": "Méthode : Appliquer et calculer un pourcentage",
        "example": "Un collège compte $180$ élèves, dont $45$ demi-pensionnaires. Quel pourcentage cela représente-t-il ? Combien d'élèves représentent $15\\,\\%$ de l'effectif ?",
        "steps": [
          "**Étape 1** : Proportion de demi-pensionnaires : $\\frac{45}{180} = \\frac{1}{4} = \\frac{25}{100}$, soit $25\\,\\%$.",
          "**Étape 2** : $15\\,\\%$ de $180$ : $\\frac{15}{100} \\times 180 = 0{,}15 \\times 180 = 27$ élèves.",
          "**Contrôle** : $10\\,\\%$ de $180$ vaut $18$ et $5\\,\\%$ vaut $9$ ; $18 + 9 = 27$."
        ]
      },
      {
        "title": "Méthode : Utiliser une échelle dans les deux sens",
        "example": "Une carte est à l'échelle $\\frac{1}{25\\,000}$. (a) Deux villages sont distants de $6{,}4\\text{ cm}$ sur la carte : quelle est la distance réelle ? (b) Un lac mesure $3\\text{ km}$ de long : quelle est sa longueur sur la carte ?",
        "steps": [
          "**(a)** $1\\text{ cm}$ sur la carte représente $25\\,000\\text{ cm}$ : $6{,}4 \\times 25\\,000 = 160\\,000\\text{ cm} = 1\\,600\\text{ m} = 1{,}6\\text{ km}$.",
          "**(b)** On convertit dans la même unité : $3\\text{ km} = 300\\,000\\text{ cm}$.",
          "Puis on divise par $25\\,000$ : $300\\,000 \\div 25\\,000 = 12$, soit $12\\text{ cm}$ sur la carte."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour une échelle, attention à bien convertir les distances dans la même unité (en cm) avant de calculer !",
      "⚠️ Toutes les situations ne sont pas proportionnelles : avec une partie fixe (prise en charge, abonnement), doubler la quantité ne double pas le prix.",
      "⚠️ $20\\,\\%$ de $60$ ne vaut pas $20$ : on calcule $\\frac{20}{100} \\times 60 = 12$.",
      "⚠️ Un pourcentage se calcule par rapport au **total** : $45$ élèves sur $180$, c'est $\\frac{45}{180}$, pas $\\frac{45}{100}$."
    ],
    "flashcards": [
      { "q": "Que représente un graphique dont les points sont alignés avec l'origine ?", "a": "Une situation de proportionnalité." },
      { "q": "Calculer $25\\,\\%$ de $80$ €.", "a": "Prendre $25\\,\\%$, c'est prendre le quart : $80 \\div 4 = 20$ €." },
      { "q": "Comment calcule-t-on $20\\,\\%$ d'une somme de $60$ € ?", "a": "$\\frac{20}{100} \\times 60 = 0{,}2 \\times 60 = 12$ €." },
      { "q": "Que signifie une échelle $\\frac{1}{200}$ sur un plan d'architecte ?", "a": "$1\\text{ cm}$ sur le plan représente $200\\text{ cm}$, soit $2\\text{ m}$, dans la réalité." },
      { "q": "$4$ stylos coûtent $6$ €. Combien coûtent $10$ stylos ?", "a": "$1$ stylo coûte $1{,}50$ €, donc $10$ stylos coûtent $15$ €." },
      { "q": "Quel pourcentage représentent $7$ élèves sur $25$ ?", "a": "$\\frac{7}{25} = \\frac{28}{100} = 28\\,\\%$." }
    ]
  },
  "5N4": {
    "title": "5N4 : Puissances (carré et cube d'un nombre)",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Connaître par cœur les carrés des nombres entiers de $0$ à $12$ et le cube de $10$ : $10^3 = 1\\,000$.",
      "Comprendre les notations $a^2$ (carré) et $a^3$ (cube), pour $a$ entier ou décimal positif.",
      "Écrire un nombre sous la forme d'un carré ou d'un cube : $64 = 8^2 = 4^3$.",
      "Calculer des expressions comportant des carrés et des cubes en respectant les priorités opératoires, y compris pour une valeur donnée de la lettre.",
      "Pour aller plus loin (programme de 4e) : l'exposant général $a^n$."
    ],
    "keyPoints": [
      {
        "title": "1. Carré et cube d'un nombre",
        "content": "Pour un nombre $a$, entier ou décimal positif :\n$$a^2 = a \\times a \\qquad a^3 = a \\times a \\times a$$\n• $a^2$ se lit « $a$ au **carré** », $a^3$ « $a$ au **cube** ». Le petit nombre écrit en haut s'appelle l'**exposant**.\n• Lien avec la géométrie : l'aire d'un carré de côté $c$ est $c^2$, le volume d'un cube d'arête $a$ est $a^3$.\n• Avec des nombres décimaux : $0{,}5^2 = 0{,}5 \\times 0{,}5 = 0{,}25$ ; $1{,}2^2 = 1{,}2 \\times 1{,}2 = 1{,}44$ ; $0{,}2^3 = 0{,}2 \\times 0{,}2 \\times 0{,}2 = 0{,}008$."
      },
      {
        "title": "2. Les carrés de 0 à 12 et le cube de 10 (à connaître par cœur)",
        "content": "$$\\begin{array}{rclrcl} 0^2 &=& 0 & 7^2 &=& 49 \\\\ 1^2 &=& 1 & 8^2 &=& 64 \\\\ 2^2 &=& 4 & 9^2 &=& 81 \\\\ 3^2 &=& 9 & 10^2 &=& 100 \\\\ 4^2 &=& 16 & 11^2 &=& 121 \\\\ 5^2 &=& 25 & 12^2 &=& 144 \\\\ 6^2 &=& 36 & & & \\end{array}$$\n• Le **cube de $10$** : $10^3 = 10 \\times 10 \\times 10 = 1\\,000$.\n• Ces carrés permettent de retrouver un nombre positif connaissant son carré : le nombre positif dont le carré est $81$ est $9$, car $9^2 = 81$."
      },
      {
        "title": "3. Écrire un nombre comme un carré ou un cube",
        "content": "• Certains nombres s'écrivent comme un carré, d'autres comme un cube :\n$$81 = 9^2 \\qquad 125 = 5^3 \\qquad 1\\,000 = 10^3 \\qquad 0{,}25 = 0{,}5^2$$\n• $64$ est à la fois un carré et un cube :\n$$64 = 8 \\times 8 = 8^2 \\quad \\text{et} \\quad 64 = 4 \\times 4 \\times 4 = 4^3$$\n• Cubes utiles : $0^3 = 0$, $1^3 = 1$, $2^3 = 8$, $3^3 = 27$, $4^3 = 64$, $5^3 = 125$, $10^3 = 1\\,000$."
      },
      {
        "title": "4. Carrés, cubes et priorités opératoires",
        "content": "Dans un calcul sans parenthèses, **les carrés et les cubes sont prioritaires** sur la multiplication, la division, l'addition et la soustraction :\n$$5 + 2 \\times 3^2 = 5 + 2 \\times 9 = 5 + 18 = 23$$\n$$4 \\times 2^3 = 4 \\times 8 = 32 \\quad (\\text{et non } (4 \\times 2)^3 = 8^3)$$\nAvec des parenthèses, on calcule d'abord la parenthèse : $(1 + 2)^2 = 3^2 = 9$, alors que $1 + 2^2 = 1 + 4 = 5$.\n• **Avec une lettre** : pour $x = 4$, $2x^2 - 5 = 2 \\times 16 - 5 = 27$, alors que $(2x)^2 - 5 = 8^2 - 5 = 59$."
      },
      {
        "title": "À retenir",
        "content": "• $a^2 = a \\times a$ et $a^3 = a \\times a \\times a$ : $2^3 = 2 \\times 2 \\times 2 = 8$ (et non $6$).\n• Ordre des calculs : parenthèses, **carrés et cubes**, puis $\\times$ et $\\div$, puis $+$ et $-$.\n• Les carrés de $0$ à $12$ : $0$, $1$, $4$, $9$, $16$, $25$, $36$, $49$, $64$, $81$, $100$, $121$, $144$.\n• $10^3 = 1\\,000$ et $64 = 8^2 = 4^3$."
      },
      {
        "title": "Pour aller plus loin : l'exposant général (programme de 4e)",
        "content": "En 5e, seuls les exposants $2$ et $3$ sont au programme. Ce qui suit est un approfondissement.\n• Pour un nombre $a$ et un entier $n \\ge 1$, $a^n$ est le produit de $n$ facteurs égaux à $a$ : $2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$.\n• Puissances de $2$ (chacune est le double de la précédente) : $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16$, $2^5 = 32$, $2^6 = 64$, $2^{10} = 1\\,024$.\n• Puissances de $3$ (chacune est le triple de la précédente) : $3^1 = 3$, $3^2 = 9$, $3^3 = 27$, $3^4 = 81$, $3^5 = 243$.\n• Conventions : $a^1 = a$ et, pour $a \\neq 0$, $a^0 = 1$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer avec des carrés et des cubes",
        "example": "Calculer $A = 10 - 2^3$ et $B = 3 \\times 2^2 + 4^2$.",
        "steps": [
          "**Pour $A$** : On calcule la puissance en premier : $2^3 = 2 \\times 2 \\times 2 = 8$. Donc $A = 10 - 8 = 2$.",
          "**Pour $B$** : On calcule les puissances d'abord : $2^2 = 4$ et $4^2 = 16$.",
          "On effectue ensuite la multiplication : $3 \\times 4 = 12$.",
          "On termine par l'addition : $B = 12 + 16 = 28$."
        ]
      },
      {
        "title": "Méthode : Écrire un nombre comme un carré ou un cube",
        "example": "Écrire $5 \\times 5 \\times 5$ avec un exposant, puis écrire $64$ comme un carré et comme un cube.",
        "steps": [
          "**Étape 1** : On compte les facteurs égaux : il y a $3$ facteurs égaux à $5$, donc $5 \\times 5 \\times 5 = 5^3$ (« $5$ au cube »).",
          "**Étape 2 (Carré)** : On cherche dans la table des carrés un nombre qui, multiplié par lui-même, donne $64$ : $8 \\times 8 = 64$, donc $64 = 8^2$.",
          "**Étape 3 (Cube)** : On essaie les cubes connus : $2^3 = 8$, $3^3 = 27$, $4^3 = 64$. Donc $64 = 4^3$.",
          "**Conclusion** : $64 = 8^2 = 4^3$. Un même nombre peut être à la fois un carré et un cube."
        ]
      },
      {
        "title": "Méthode : Comparer un carré et un cube",
        "example": "Comparer $5^2$ et $3^3$.",
        "steps": [
          "**Étape 1** : On calcule chaque nombre : $5^2 = 25$ et $3^3 = 27$.",
          "**Étape 2** : $25 < 27$, donc $5^2 < 3^3$.",
          "**Remarque** : échanger le nombre et l'exposant change en général le résultat : $2^3 = 8$ alors que $3^2 = 9$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre $2^3$ et $2 \\times 3$ ! $2^3 = 2 \\times 2 \\times 2 = 8$, alors que $2 \\times 3 = 6$.",
      "⚠️ De même, $3^2 = 3 \\times 3 = 9$ (et non 6) !",
      "⚠️ $4 \\times 2^3$ n'est pas égal à $8^3$ : la puissance est prioritaire, $4 \\times 2^3 = 4 \\times 8 = 32$.",
      "⚠️ $3^2 + 4^2$ n'est pas égal à $(3 + 4)^2$ : $9 + 16 = 25$, alors que $7^2 = 49$.",
      "⚠️ $0{,}3^2$ ne vaut pas $0{,}9$ : $0{,}3 \\times 0{,}3 = 0{,}09$."
    ],
    "flashcards": [
      { "q": "Combien vaut $12^2$ de tête ?", "a": "$12 \\times 12 = 144$." },
      { "q": "Que vaut le cube de $10$ ?", "a": "$10^3 = 10 \\times 10 \\times 10 = 1\\,000$." },
      { "q": "Combien vaut $3^3$ ?", "a": "$3 \\times 3 \\times 3 = 27$." },
      { "q": "Dans $4 + 3 \\times 2^3$, quelle opération effectue-t-on en premier ?", "a": "La puissance $2^3 = 8$, puis la multiplication $3 \\times 8 = 24$, enfin l'addition : $4 + 24 = 28$." },
      { "q": "Écrire $64$ comme un carré, puis comme un cube.", "a": "$64 = 8 \\times 8 = 8^2$ et $64 = 4 \\times 4 \\times 4 = 4^3$." },
      { "q": "Quel nombre positif a pour carré $144$ ?", "a": "$12$, car $12^2 = 144$." },
      { "q": "Combien vaut $0^2$ ?", "a": "$0 \\times 0 = 0$." },
      { "q": "Calculer $0{,}5^2$.", "a": "$0{,}5 \\times 0{,}5 = 0{,}25$." }
    ]
  },
  "5N5": {
    "title": "5N5 : Calcul littéral et initiation aux équations",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Utiliser une lettre pour désigner un nombre et produire une expression littérale (périmètre, programme de calcul).",
      "Connaître les conventions d'écriture : suppression du signe $\\times$, notations $x^2$ et $x^3$.",
      "Substituer une valeur numérique à une lettre pour calculer la valeur d'une expression.",
      "Réduire une expression simple ($4x + 7x = 11x$) et utiliser $k(a + b) = ka + kb$ et $k(a - b) = ka - kb$ dans les deux sens, pour développer et pour factoriser (aires de rectangles).",
      "Reconnaître si une expression littérale est une somme, une différence ou un produit, d'après la dernière opération effectuée.",
      "Tester si une égalité est vraie pour une valeur donnée et trouver une inconnue dans $x + b = c$ ou $a \\times x = c$ avec l'opération inverse.",
      "Prouver : émettre une conjecture à partir d'exemples (programme Scratch, tableur), réfuter avec un contre-exemple, démontrer une propriété générale par le calcul littéral."
    ],
    "keyPoints": [
      {
        "title": "1. Des lettres pour désigner des nombres",
        "content": "Une **expression littérale** contient une ou plusieurs lettres qui représentent des nombres.\n• Périmètre d'un rectangle de longueur $L$ et de largeur $4$ : $P = 2 \\times (L + 4)$.\n• Programme « choisir un nombre $x$, le multiplier par $3$, ajouter $5$ » : $3 \\times x + 5$, qui s'écrit $3x + 5$.\n• Une même expression permet de faire le calcul pour **n'importe quelle** valeur de la lettre."
      },
      {
        "title": "2. Conventions d'écriture",
        "content": "On peut supprimer le signe $\\times$ devant une lettre ou une parenthèse :\n• $3 \\times x = 3x$ et $x \\times 3 = 3x$ (le nombre s'écrit devant) ;\n• $a \\times b = ab$ ; $4 \\times (a + 2) = 4(a + 2)$ ;\n• $x \\times x = x^2$ et $x \\times x \\times x = x^3$ ;\n• on écrit $x$ plutôt que « une fois $x$ ».\nOn ne supprime **jamais** le signe $\\times$ entre deux nombres : $3 \\times 5 \\neq 35$."
      },
      {
        "title": "3. Calculer la valeur d'une expression",
        "content": "On remplace la lettre par le nombre donné en **rétablissant les signes $\\times$**, puis on applique les priorités opératoires.\nPour $x = 4$ dans $A = 3x^2 - 5$ :\n$$A = 3 \\times 4^2 - 5 = 3 \\times 16 - 5 = 48 - 5 = 43$$\nPour $a = 2$ et $b = 5$ dans $B = 4a + ab$ : $B = 4 \\times 2 + 2 \\times 5 = 8 + 10 = 18$."
      },
      {
        "title": "4. Réduire, développer, factoriser",
        "content": "• **Réduire**, c'est regrouper les termes de même nature grâce à la distributivité :\n$$4x + 7x = (4 + 7)x = 11x \\qquad 5a - 2a = 3a \\qquad x + x = 2x$$\n• Une lettre seule a pour coefficient $1$ : $x = 1 \\times x$, donc $5x + x = (5 + 1)x = 6x$.\n• $3x + 5$ ne peut pas se réduire : $3x$ et $5$ ne sont pas de même nature.\n• **Développer**, c'est transformer un produit en somme ou en différence, avec la distributivité simple : $4(x + 7) = 4 \\times x + 4 \\times 7 = 4x + 28$ et $3(x - 2) = 3 \\times x - 3 \\times 2 = 3x - 6$.\n• **Factoriser**, c'est le chemin inverse : on transforme une somme ou une différence en produit, en repérant un **facteur commun** à tous les termes :\n$$6x + 15 = 3 \\times 2x + 3 \\times 5 = 3(2x + 5) \\qquad 5x + 5 = 5 \\times x + 5 \\times 1 = 5(x + 1)$$\n• **Avec des aires** : deux rectangles de même largeur $k$, de longueurs $a$ et $b$, accolés, forment un grand rectangle de largeur $k$ et de longueur $a + b$. Son aire s'écrit de deux façons : $k(a + b) = ka + kb$. De gauche à droite, on **développe** ; de droite à gauche, on **factorise**. De même, $k(a - b) = ka - kb$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem auto; max-width:320px;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 300 140\" width=\"300\" height=\"140\" style=\"width:100%; height:auto; color:var(--text-main, #334155);\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Deux rectangles de même largeur k et de longueurs a et b, accolés\"><rect x=\"40\" y=\"15\" width=\"150\" height=\"90\" fill=\"rgba(59,130,246,0.10)\" stroke=\"currentColor\" stroke-width=\"2\"/><rect x=\"190\" y=\"15\" width=\"90\" height=\"90\" fill=\"rgba(234,179,8,0.15)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"25\" y=\"65\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\" fill=\"currentColor\">k</text><text x=\"115\" y=\"127\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\" fill=\"currentColor\">a</text><text x=\"235\" y=\"127\" text-anchor=\"middle\" font-size=\"15\" font-style=\"italic\" fill=\"currentColor\">b</text><text x=\"115\" y=\"66\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"bold\" fill=\"#2563eb\">aire : ka</text><text x=\"235\" y=\"66\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"bold\" fill=\"#b45309\">aire : kb</text></svg></div>"
      },
      {
        "title": "5. Somme ou produit ?",
        "content": "On nomme une expression littérale d'après la **dernière opération** effectuée quand on la calcule pour une valeur de la lettre, comme pour les expressions numériques.\n• $3x + 5$ : on multiplie, puis on ajoute. La dernière opération est l'addition : c'est une **somme**, de **termes** $3x$ et $5$.\n• $3(x + 5)$ : on ajoute dans la parenthèse, puis on multiplie. La dernière opération est la multiplication : c'est un **produit**, de **facteurs** $3$ et $x + 5$.\n• $4x - 7$ est une **différence** ; $x^2 + 1$ est une **somme** ; $2x(x + 1)$ est un **produit**.\n• Développer transforme un produit en somme ; factoriser transforme une somme en produit."
      },
      {
        "title": "6. Égalité, inconnue et solution",
        "content": "• Dans l'égalité $x + 8 = 15$, la lettre $x$ désigne un nombre que l'on cherche : c'est une **inconnue**.\n• Un nombre est **solution** s'il rend l'égalité vraie : on calcule séparément les deux membres et on compare. On peut ainsi chercher une solution **par essais**.\n• Quand l'inconnue ne subit qu'une seule opération, on la retrouve avec l'**opération inverse**, comme pour une égalité à trou :\n$$x + 8 = 15 \\text{ donne } x = 15 - 8 = 7 \\qquad 5x = 45 \\text{ donne } x = 45 \\div 5 = 9$$\n• Le résultat peut être décimal : $4x = 26$ donne $x = 26 \\div 4 = 6{,}5$.\n• Si le second membre est nul : $2x = 0$ donne $x = 0 \\div 2 = 0$ et $\\frac{x}{2} = 0$ donne $x = 0 \\times 2 = 0$.\n• On **vérifie** toujours en remplaçant la lettre par la valeur trouvée. Dire le calcul à voix haute, tracer un schéma en barres ou penser à une balance aide à choisir l'opération.\n• Le mot **équation** et les méthodes générales de résolution seront étudiés en 4e."
      },
      {
        "title": "7. Prouver : conjecturer, réfuter, démontrer",
        "content": "• **Conjecturer** : en testant des exemples à la main, avec un programme Scratch ou un tableur, on repère une régularité et on énonce une **conjecture**. Des exemples ne prouvent pas qu'elle est toujours vraie : on ne peut pas essayer tous les nombres.\n• **Réfuter** : un seul **contre-exemple** suffit à prouver qu'une affirmation générale est fausse. L'affirmation « pour tout nombre $x$, $x^2 = 2x$ » est fausse : pour $x = 3$, on a $x^2 = 9$ et $2x = 6$. Elle est vraie pour $x = 2$, mais cela ne la rend pas vraie pour tous les nombres.\n• **Démontrer** : pour prouver qu'une affirmation est vraie dans **tous** les cas, on utilise le calcul littéral.\n**Exemple : la somme de deux nombres pairs est un nombre pair.** Un nombre pair s'écrit $2n$, où $n$ est un nombre entier. On note $2n$ et $2p$ les deux nombres pairs (deux lettres, car ils peuvent être différents) :\n$$2n + 2p = 2(n + p)$$\nComme $n + p$ est un nombre entier, $2(n + p)$ est le double d'un entier : c'est un nombre pair."
      },
      {
        "title": "Pour aller plus loin : inconnue soumise à plusieurs opérations (étudié en 4e)",
        "content": "Les égalités suivantes dépassent le programme de 5e : on apprend à les résoudre en 4e. On peut ajouter ou soustraire un même nombre aux deux membres d'une égalité, et les multiplier ou les diviser par un même nombre non nul.\n• $2x + 5 = 11$ : on soustrait $5$ aux deux membres, d'où $2x = 6$ ; on divise les deux membres par $2$, d'où $x = 3$.\n• Inconnue dans les deux membres, $7x - 5 = 3x + 19$ : on soustrait $3x$ aux deux membres, d'où $4x - 5 = 19$ ; on ajoute $5$ aux deux membres, d'où $4x = 24$ ; on divise les deux membres par $4$, d'où $x = 6$.\n• Vérification : $7 \\times 6 - 5 = 37$ et $3 \\times 6 + 19 = 37$."
      },
      {
        "title": "À retenir",
        "content": "• $3x = 3 \\times x$ ; $x^2 = x \\times x$ ; $x + x = 2x$.\n• Pour calculer une expression, on remplace la lettre et on **rétablit les $\\times$**.\n• $k(a + b) = ka + kb$ : de gauche à droite on **développe**, de droite à gauche on **factorise**.\n• La **dernière opération** effectuée donne le nom de l'expression : somme, différence ou produit.\n• Tester une égalité : calculer **chaque membre** séparément et comparer.\n• Un **contre-exemple** suffit pour réfuter ; pour démontrer, il faut un calcul littéral valable dans tous les cas."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Tester si un nombre est solution d'une égalité",
        "example": "Le nombre 3 est-il solution de l'égalité $2x + 5 = 11$ ?",
        "steps": [
          "**Membre de gauche** : Pour $x = 3$, $2 \\times 3 + 5 = 6 + 5 = 11$.",
          "**Membre de droite** : $11$.",
          "**Conclusion** : Les deux membres sont égaux, donc 3 est bien solution de l'égalité."
        ]
      },
      {
        "title": "Méthode : Calculer la valeur d'une expression",
        "example": "Calculer $B = 2a^2 - 3a + 1$ pour $a = 5$.",
        "steps": [
          "**Étape 1** : On rétablit les signes $\\times$ et on remplace : $B = 2 \\times 5^2 - 3 \\times 5 + 1$.",
          "**Étape 2** : Puissance d'abord : $5^2 = 25$, donc $B = 2 \\times 25 - 3 \\times 5 + 1$.",
          "**Étape 3** : Multiplications : $B = 50 - 15 + 1$.",
          "**Étape 4** : De gauche à droite : $B = 35 + 1 = 36$."
        ]
      },
      {
        "title": "Méthode : Réduire une expression",
        "example": "Réduire $C = 3x + 5 + 6x - 2$.",
        "steps": [
          "**Étape 1** : On repère les termes « en $x$ » ($3x$ et $6x$) et les nombres ($5$ et $-2$).",
          "**Étape 2** : $3x + 6x = 9x$ et $5 - 2 = 3$.",
          "**Conclusion** : $C = 9x + 3$. Vérification pour $x = 1$ : $3 + 5 + 6 - 2 = 12$ et $9 + 3 = 12$."
        ]
      },
      {
        "title": "Méthode : Factoriser avec l'aire de rectangles accolés",
        "example": "Factoriser complètement $12x + 20$.",
        "steps": [
          "**Étape 1** : On cherche le plus grand facteur commun aux deux termes : $12x = 4 \\times 3x$ et $20 = 4 \\times 5$.",
          "**Étape 2** : On imagine deux rectangles de même largeur $4$, de longueurs $3x$ et $5$. Accolés, ils forment un rectangle de largeur $4$ et de longueur $3x + 5$.",
          "**Étape 3** : On écrit l'aire de deux façons : $12x + 20 = 4 \\times 3x + 4 \\times 5 = 4(3x + 5)$.",
          "**Vérification** : En développant, $4(3x + 5) = 12x + 20$. Les nombres $3$ et $5$ n'ont plus de diviseur commun autre que $1$ : la factorisation est complète."
        ]
      },
      {
        "title": "Méthode : Reconnaître une somme, une différence ou un produit",
        "example": "Quelle est la nature de l'expression $A = 2(x + 1) + 3$ ?",
        "steps": [
          "**Étape 1** : On suit le calcul pour une valeur de $x$ en respectant les priorités : on ajoute $1$ à $x$, on multiplie par $2$, puis on ajoute $3$.",
          "**Étape 2** : La dernière opération effectuée est l'addition de $3$.",
          "**Conclusion** : $A$ est une **somme**, de termes $2(x + 1)$ et $3$, même si elle contient un produit."
        ]
      },
      {
        "title": "Méthode : Trouver une inconnue avec l'opération inverse",
        "example": "Trouver la valeur de $x$ dans $4x = 26$, puis dans $x - 3{,}5 = 8$.",
        "steps": [
          "**Étape 1** : $4x = 26$ : on cherche le nombre qui, multiplié par $4$, donne $26$ : $x = 26 \\div 4 = 6{,}5$.",
          "**Vérification** : $4 \\times 6{,}5 = 26$. La solution est $6{,}5$.",
          "**Étape 2** : $x - 3{,}5 = 8$ : on cherche le nombre auquel on enlève $3{,}5$ pour obtenir $8$ : $x = 8 + 3{,}5 = 11{,}5$.",
          "**Vérification** : $11{,}5 - 3{,}5 = 8$. La solution est $11{,}5$."
        ]
      },
      {
        "title": "Méthode : Démontrer ou réfuter une affirmation",
        "example": "La somme de trois nombres entiers consécutifs est-elle toujours un multiple de $3$ ?",
        "steps": [
          "**Étape 1 : tester.** $1 + 2 + 3 = 6$ ; $4 + 5 + 6 = 15$ ; $10 + 11 + 12 = 33$. Ce sont des multiples de $3$ : c'est une conjecture, pas encore une preuve.",
          "**Étape 2 : choisir.** Une seule valeur qui ne marche pas suffirait à réfuter l'affirmation. On n'en trouve pas, on essaie donc de démontrer.",
          "**Étape 3 : démontrer.** On note $n$ le premier entier ; les suivants sont $n + 1$ et $n + 2$, et $n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)$.",
          "**Conclusion** : La somme s'écrit $3$ multiplié par un entier : c'est un multiple de $3$, quel que soit l'entier $n$."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Résoudre $ax + b = c$ (étudié en 4e)",
        "example": "Trouver la valeur de $x$ telle que $3x + 4 = 19$.",
        "steps": [
          "**Étape 1** : On soustrait $4$ aux deux membres : $3x = 15$.",
          "**Étape 2** : On divise les deux membres par $3$ : $x = 5$.",
          "**Vérification** : $3 \\times 5 + 4 = 15 + 4 = 19$."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention lors du remplacement : si $x = 3$, $2x$ ne vaut pas $23$, mais bien $2 \\times 3 = 6$ !",
      "⚠️ On ne peut pas additionner des termes de nature différente : $3x + 5 \\neq 8x$.",
      "⚠️ Ne pas confondre $x + x = 2x$ et $x \\times x = x^2$.",
      "⚠️ Pour $x = 3$, $2x^2 = 2 \\times 3^2 = 2 \\times 9 = 18$ : la puissance ne porte que sur $x$, et non sur $2x$ ($6^2 = 36$ est faux).",
      "⚠️ En factorisant $5x + 5$, le terme $1$ reste dans la parenthèse : $5x + 5 = 5(x + 1)$, et surtout pas $5(x)$.",
      "⚠️ $3x + 5$ est une somme et $3(x + 5)$ un produit : ces deux expressions ne sont pas égales en général.",
      "⚠️ Un exemple, ou même dix, ne prouve pas qu'une propriété est toujours vraie ; un seul contre-exemple suffit en revanche à prouver qu'elle est fausse."
    ],
    "flashcards": [
      { "q": "Comment simplifier l'écriture $x \\times 5$ ?", "a": "On écrit $5x$ (le coefficient numérique se place devant la lettre)." },
      { "q": "Que vaut $2x + 3$ pour $x = 4$ ?", "a": "$2 \\times 4 + 3 = 8 + 3 = 11$." },
      { "q": "Comment simplifie-t-on l'écriture $3 \\times x + 5 \\times y$ ?", "a": "$$3x + 5y$$\n*(On omet le signe $\\times$ devant les lettres)*." },
      { "q": "Développer l'expression $4(x + 7)$.", "a": "$$4 \\times x + 4 \\times 7 = 4x + 28$$" },
      { "q": "Que signifie tester si $x = 3$ vérifie l'égalité $2x + 1 = 7$ ?", "a": "On remplace $x$ par 3 : $2 \\times 3 + 1 = 6 + 1 = 7$. Les deux membres sont égaux, donc l'égalité est vraie pour $x = 3$." },
      { "q": "Réduire $5a + 3a$.", "a": "$5a + 3a = (5 + 3)a = 8a$." },
      { "q": "Trouver $x$ tel que $7x = 56$.", "a": "$x = 56 \\div 7 = 8$ (vérification : $7 \\times 8 = 56$)." },
      { "q": "Factoriser complètement $6x + 15$.", "a": "$6x + 15 = 3 \\times 2x + 3 \\times 5 = 3(2x + 5)$." },
      { "q": "$3(x + 5)$ est-il une somme ou un produit ?", "a": "Un **produit** : la dernière opération effectuée est la multiplication par $3$." },
      { "q": "Comment prouver qu'une affirmation générale est fausse ?", "a": "Avec un **contre-exemple** : une seule valeur pour laquelle elle n'est pas vérifiée." },
      { "q": "Pourquoi la somme de deux nombres pairs est-elle paire ?", "a": "$2n + 2p = 2(n + p)$ : c'est le double d'un entier." }
    ]
  },
  "5G4": {
    "title": "5G4 : Triangles : constructions, droites remarquables et aires",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Constater que trois longueurs ne permettent pas toujours de construire un triangle (arcs qui ne se coupent pas, points alignés).",
      "Construire un triangle connaissant trois longueurs, deux longueurs et l'angle compris, ou une longueur et deux angles.",
      "Connaître la médiatrice d'un segment et construire le cercle circonscrit à un triangle.",
      "Définir et tracer les hauteurs d'un triangle.",
      "Définir et tracer les médianes d'un triangle ; observer qu'elles sont concourantes en un point, le centre de gravité.",
      "Calculer l'aire d'un triangle en partant de celle du rectangle : $\\mathcal{A} = \\frac{b \\times h}{2}$ ; savoir que deux triangles de mêmes base et hauteur ont la même aire.",
      "Démontrer qu'une médiane partage un triangle en deux triangles de même aire."
    ],
    "keyPoints": [
      {
        "title": "1. Trois longueurs ne suffisent pas toujours",
        "content": "Pour construire un triangle dont on connaît les trois longueurs, on trace le plus grand côté, puis un arc de cercle à chacune de ses extrémités. Trois cas peuvent se présenter :\n• **Les arcs se coupent** : le point d'intersection est le troisième sommet, on obtient un triangle.\n• **Les arcs ne se coupent pas** : les deux petites longueurs mises bout à bout sont trop courtes pour relier les extrémités du grand côté, aucun triangle n'est possible (par exemple avec $3\\text{ cm}$, $4\\text{ cm}$ et $8\\text{ cm}$, car $3 + 4 = 7$).\n• **Les arcs se touchent en un seul point du grand côté** : les deux petites longueurs mises bout à bout ont exactement la longueur du grand côté (par exemple $4 + 6 = 10$) ; les trois points sont alignés, le « triangle » est aplati.\n\nTrois longueurs ne permettent donc **pas toujours** de construire un triangle.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 360 150\" width=\"360\" height=\"150\" style=\"max-width:360px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Cas 1 : les arcs se coupent -->\n    <polygon points=\"15,85 105,85 63.7,53.4\" fill=\"rgba(16, 185, 129, 0.12)\" stroke=\"#10b981\" stroke-width=\"1.6\" />\n    <line x1=\"15\" y1=\"85\" x2=\"105\" y2=\"85\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n    <path d=\"M 51.5 40.0 A 58 58 0 0 1 71.0 70.0\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"1.5\" />\n    <path d=\"M 55.9 67.8 A 52 52 0 0 1 75.4 42.2\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"1.5\" />\n    <circle cx=\"63.7\" cy=\"53.4\" r=\"2.6\" fill=\"#10b981\" />\n    <text x=\"60\" y=\"131\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">Un triangle</text>\n    <text x=\"60\" y=\"144\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"var(--text-muted, #64748b)\">les arcs se coupent</text>\n    <!-- Cas 2 : les arcs ne se coupent pas -->\n    <line x1=\"135\" y1=\"85\" x2=\"225\" y2=\"85\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n    <path d=\"M 146.6 53.1 A 34 34 0 0 1 166.9 73.4\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <path d=\"M 189.3 72.0 A 38 38 0 0 1 212.0 49.3\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <text x=\"180\" y=\"131\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#dc2626\">Impossible</text>\n    <text x=\"180\" y=\"144\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"var(--text-muted, #64748b)\">les arcs ne se coupent pas</text>\n    <!-- Cas 3 : les arcs se touchent en un point du grand côté -->\n    <line x1=\"255\" y1=\"85\" x2=\"345\" y2=\"85\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n    <path d=\"M 281.9 58.1 A 38 38 0 0 1 281.9 111.9\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"1.5\" />\n    <path d=\"M 302.4 114.8 A 52 52 0 0 1 302.4 55.2\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"1.5\" />\n    <circle cx=\"293\" cy=\"85\" r=\"3\" fill=\"#d97706\" />\n    <text x=\"300\" y=\"131\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#d97706\">Points alignés</text>\n    <text x=\"300\" y=\"144\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"var(--text-muted, #64748b)\">les arcs se touchent</text>\n  </svg>\n</div>"
      },
      {
        "title": "2. Construire un triangle",
        "content": "• **Trois longueurs** : on trace le plus grand côté, puis deux arcs de cercle au compas centrés à ses extrémités ; leur point d'intersection est le troisième sommet.\n• **Deux longueurs et l'angle compris entre elles** : on trace un côté, on construit l'angle au rapporteur à une extrémité, on reporte la seconde longueur sur le côté de l'angle, puis on relie.\n• **Une longueur et deux angles** : on trace le côté, puis les deux angles au rapporteur à ses extrémités ; les côtés des angles se coupent au troisième sommet. (Il faut que la somme des deux angles soit inférieure à $180^\\circ$.)\n• On commence toujours par un **schéma à main levée** codé."
      },
      {
        "title": "3. Droites remarquables du triangle",
        "content": "Dans tout triangle, les 3 familles de droites remarquables possèdent chacune un point de concours unique :\n\n<div style=\"display:flex; flex-direction:column; gap:1.5rem; margin-top:1.2rem;\">\n  <div style=\"background:var(--bg-subtle, #f8fafc); border:1px solid var(--border-color, #e2e8f0); border-radius:10px; padding:1.2rem;\">\n    <h4 style=\"margin:0 0 0.5rem 0; color:var(--primary-text, #1d4ed8); font-size:1.05rem;\">🔵 1. Les médiatrices et le cercle circonscrit (point O)</h4>\n    <p style=\"margin:0 0 0.8rem 0; font-size:0.95rem;\">• <strong>Définition</strong> : la <strong>médiatrice</strong> d'un segment est la droite perpendiculaire à ce segment en son milieu.<br>• <strong>Propriété</strong> : les 3 médiatrices d'un triangle sont <strong>concourantes</strong> en un point noté $O$.<br>• <strong>Cercle circonscrit</strong> : le point $O$ est à égale distance des trois sommets ($OA = OB = OC$). C'est le centre du <strong>cercle circonscrit</strong> qui passe par les trois sommets $A, B$ et $C$.<br>• <strong>Rappel</strong> : un point est sur la médiatrice de $[AB]$ si et seulement s'il est à égale distance de $A$ et de $B$.</p>\n    <div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem 0 0.2rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 270 255\" width=\"270\" height=\"255\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Cercle circonscrit passant par A(110,25), B(35,165), C(235,165) -->\n    <circle cx=\"135\" cy=\"128.5\" r=\"106.5\" fill=\"rgba(37, 99, 235, 0.04)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\" />\n    <!-- Triangle scalène ABC -->\n    <polygon points=\"110,25 35,165 235,165\" fill=\"rgba(37, 99, 235, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <!-- 1. Médiatrice de [BC] (x = 135) -->\n    <line x1=\"135\" y1=\"18\" x2=\"135\" y2=\"238\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <path d=\"M 144 165 L 144 156 L 135 156\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" />\n    <line x1=\"85\" y1=\"161\" x2=\"85\" y2=\"169\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <line x1=\"185\" y1=\"161\" x2=\"185\" y2=\"169\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <!-- 2. Médiatrice de [AC] -->\n    <line x1=\"215\" y1=\"57\" x2=\"60\" y2=\"195.5\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <path d=\"M 166.5 88.3 L 159.8 94.3 L 165.8 101.0\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" />\n    <line x1=\"142.9\" y1=\"55.8\" x2=\"136.9\" y2=\"61.2\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"145.6\" y1=\"58.8\" x2=\"139.6\" y2=\"64.2\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"205.4\" y1=\"125.8\" x2=\"199.4\" y2=\"131.2\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"208.1\" y1=\"128.8\" x2=\"202.1\" y2=\"134.2\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <!-- 3. Médiatrice de [AB] -->\n    <line x1=\"20\" y1=\"67\" x2=\"200\" y2=\"163.3\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <path d=\"M 76.7 87.1 L 84.7 91.3 L 80.4 99.2\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" />\n    <line x1=\"96.4\" y1=\"58.8\" x2=\"89.4\" y2=\"55.0\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"94.8\" y1=\"61.9\" x2=\"87.7\" y2=\"58.1\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"93.1\" y1=\"65.0\" x2=\"86.1\" y2=\"61.2\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"58.9\" y1=\"128.8\" x2=\"51.9\" y2=\"125.0\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"57.3\" y1=\"131.9\" x2=\"50.2\" y2=\"128.1\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"55.6\" y1=\"135.0\" x2=\"48.6\" y2=\"131.2\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <!-- Centre de concours O -->\n    <circle cx=\"135\" cy=\"128.5\" r=\"4.5\" fill=\"var(--primary, #2563eb)\" stroke=\"#ffffff\" stroke-width=\"1.5\" />\n    <text x=\"147\" y=\"133\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">O</text>\n    <!-- Sommets -->\n    <text x=\"110\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"22\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"248\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"135\" y=\"248\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">O = centre du cercle circonscrit (OA = OB = OC)</text>\n  </svg>\n</div>\n  </div>\n\n  <div style=\"background:var(--bg-subtle, #f8fafc); border:1px solid var(--border-color, #e2e8f0); border-radius:10px; padding:1.2rem;\">\n    <h4 style=\"margin:0 0 0.5rem 0; color:#dc2626; font-size:1.05rem;\">🔴 2. Les hauteurs et l'orthocentre (point H)</h4>\n    <p style=\"margin:0 0 0.8rem 0; font-size:0.95rem;\">• <strong>Définition</strong> : une <strong>hauteur</strong> est une droite issue d'un sommet et perpendiculaire au côté opposé.<br>• <strong>Propriété</strong> : les 3 hauteurs d'un triangle sont <strong>concourantes</strong> en un point noté $H$.<br>• <strong>Orthocentre</strong> : ce point d'intersection $H$ s'appelle l'<strong>orthocentre</strong> du triangle.<br>• Dans un triangle qui a un angle obtus, deux hauteurs sont à l'extérieur : on prolonge les côtés.</p>\n    <div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem 0 0.2rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 270 200\" width=\"270\" height=\"200\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Triangle scalène ABC -->\n    <polygon points=\"110,25 35,165 235,165\" fill=\"rgba(220, 38, 38, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <!-- 1. Hauteur issue de A (x = 110) -->\n    <line x1=\"110\" y1=\"18\" x2=\"110\" y2=\"175\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <path d=\"M 119 165 L 119 156 L 110 156\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <!-- 2. Hauteur issue de B -->\n    <line x1=\"35\" y1=\"165\" x2=\"160\" y2=\"53.4\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <path d=\"M 140.3 58.9 L 133.6 64.9 L 139.6 71.6\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <!-- 3. Hauteur issue de C -->\n    <line x1=\"235\" y1=\"165\" x2=\"60\" y2=\"71.3\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <path d=\"M 83.8 73.8 L 91.8 78.1 L 87.5 86.0\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <!-- Orthocentre H -->\n    <circle cx=\"110\" cy=\"98\" r=\"4.5\" fill=\"#dc2626\" stroke=\"#ffffff\" stroke-width=\"1.5\" />\n    <text x=\"122\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">H</text>\n    <!-- Sommets -->\n    <text x=\"110\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"22\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"248\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"135\" y=\"195\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">H = orthocentre (intersection des 3 hauteurs)</text>\n  </svg>\n</div>\n  </div>\n\n  <div style=\"background:var(--bg-subtle, #f8fafc); border:1px solid var(--border-color, #e2e8f0); border-radius:10px; padding:1.2rem;\">\n    <h4 style=\"margin:0 0 0.5rem 0; color:#059669; font-size:1.05rem;\">🟢 3. Les médianes et le centre de gravité (point G)</h4>\n    <p style=\"margin:0 0 0.8rem 0; font-size:0.95rem;\">• <strong>Définition</strong> : la <strong>médiane</strong> issue d'un sommet est la droite qui passe par ce sommet et par le milieu du côté opposé.<br>• <strong>Tracé</strong> : on place le milieu du côté opposé, puis on trace la droite qui relie ce milieu au sommet.<br>• <strong>Concours observé</strong> : quand on trace les 3 médianes d'un triangle, on observe qu'elles se coupent en un même point, noté $G$ (elles sont <strong>concourantes</strong>).<br>• <strong>Centre de gravité</strong> : ce point $G$ est le <strong>centre de gravité</strong> du triangle ; c'est le point d'équilibre d'un triangle découpé dans du carton.</p>\n    <div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem 0 0.2rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 270 200\" width=\"270\" height=\"200\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Triangle scalène ABC -->\n    <polygon points=\"110,25 35,165 235,165\" fill=\"rgba(16, 185, 129, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <!-- 1. Médiane issue de A vers A'(135, 165) -->\n    <line x1=\"110\" y1=\"25\" x2=\"135\" y2=\"165\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <circle cx=\"135\" cy=\"165\" r=\"3\" fill=\"#059669\" />\n    <text x=\"135\" y=\"178\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#059669\">A'</text>\n    <line x1=\"85\" y1=\"161\" x2=\"85\" y2=\"169\" stroke=\"#059669\" stroke-width=\"2\" />\n    <line x1=\"185\" y1=\"161\" x2=\"185\" y2=\"169\" stroke=\"#059669\" stroke-width=\"2\" />\n    <!-- 2. Médiane issue de B vers B'(172.5, 95) -->\n    <line x1=\"35\" y1=\"165\" x2=\"172.5\" y2=\"95\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <circle cx=\"172.5\" cy=\"95\" r=\"3\" fill=\"#059669\" />\n    <text x=\"186\" y=\"97\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#059669\">B'</text>\n    <line x1=\"142.9\" y1=\"55.8\" x2=\"136.9\" y2=\"61.2\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"145.6\" y1=\"58.8\" x2=\"139.6\" y2=\"64.2\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"205.4\" y1=\"125.8\" x2=\"199.4\" y2=\"131.2\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"208.1\" y1=\"128.8\" x2=\"202.1\" y2=\"134.2\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <!-- 3. Médiane issue de C vers C'(72.5, 95) -->\n    <line x1=\"235\" y1=\"165\" x2=\"72.5\" y2=\"95\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <circle cx=\"72.5\" cy=\"95\" r=\"3\" fill=\"#059669\" />\n    <text x=\"59\" y=\"97\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#059669\">C'</text>\n    <line x1=\"96.4\" y1=\"58.8\" x2=\"89.4\" y2=\"55.0\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"94.8\" y1=\"61.9\" x2=\"87.7\" y2=\"58.1\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"93.1\" y1=\"65.0\" x2=\"86.1\" y2=\"61.2\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"58.9\" y1=\"128.8\" x2=\"51.9\" y2=\"125.0\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"57.3\" y1=\"131.9\" x2=\"50.2\" y2=\"128.1\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"55.6\" y1=\"135.0\" x2=\"48.6\" y2=\"131.2\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <!-- Centre de gravité G -->\n    <circle cx=\"126.7\" cy=\"118.3\" r=\"4.5\" fill=\"#059669\" stroke=\"#ffffff\" stroke-width=\"1.5\" />\n    <text x=\"131\" y=\"108\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">G</text>\n    <!-- Sommets -->\n    <text x=\"110\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"22\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"248\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"135\" y=\"195\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#059669\">G = centre de gravité</text>\n  </svg>\n</div>\n  </div>\n</div>"
      },
      {
        "title": "4. Aire et périmètre du triangle",
        "content": "**Périmètre** : $\\mathcal{P} = a + b + c$.\n\n**Aire : on part du rectangle.** On place le triangle dans le rectangle qui a la même base $b$ et la même hauteur $h$ (figure). La hauteur découpe ce rectangle en deux petits rectangles, et chacun des deux autres côtés du triangle est la diagonale de l'un d'eux. Or une diagonale partage un rectangle en deux triangles superposables : dans chaque petit rectangle, le triangle occupe donc exactement la moitié. L'aire du triangle est la moitié de celle du grand rectangle :\n$$\\mathcal{A} = \\frac{b \\times h}{2}$$\noù $h$ est la **hauteur relative** à la base $b$ (la longueur du segment perpendiculaire à la base, issu du sommet opposé). La formule reste vraie quand le pied de la hauteur tombe en dehors de la base.\n• N'importe quel côté peut servir de base, à condition de prendre la hauteur qui lui correspond.\n• Dans un triangle rectangle, les deux côtés de l'angle droit sont une base et la hauteur correspondante : $\\mathcal{A} = \\frac{6 \\times 9}{2} = 27\\text{ cm}^2$ pour des côtés de l'angle droit de $6\\text{ cm}$ et $9\\text{ cm}$.\n• **Mêmes base et hauteur, même aire** : deux triangles qui ont une base de même longueur et la même hauteur relative à cette base ont la même aire, même s'ils n'ont pas la même forme.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 130\" width=\"300\" height=\"130\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Rectangle de mêmes base et hauteur que le triangle -->\n    <rect x=\"40\" y=\"20\" width=\"180\" height=\"85\" fill=\"rgba(148, 163, 184, 0.14)\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.4\" stroke-dasharray=\"4 3\" />\n    <polygon points=\"110,20 40,105 220,105\" fill=\"rgba(37, 99, 235, 0.2)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <line x1=\"110\" y1=\"20\" x2=\"110\" y2=\"105\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"3 3\" />\n    <path d=\"M 110 97 L 116 97 L 116 105\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.2\" />\n    <text x=\"96\" y=\"72\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">h</text>\n    <text x=\"130\" y=\"121\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">Base b</text>\n    <text x=\"264\" y=\"55\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">Aire =</text>\n    <text x=\"264\" y=\"72\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">(b × h) / 2</text>\n  </svg>\n</div>"
      },
      {
        "title": "5. Une médiane partage un triangle en deux triangles de même aire",
        "content": "**Propriété** : une médiane partage un triangle en deux triangles de **même aire**.\n\n**Démonstration** : soit $ABC$ un triangle, $I$ le milieu de $[BC]$ et $h$ la longueur de la hauteur issue de $A$.\n1. $I$ est le milieu de $[BC]$, donc $BI = IC$ : les triangles $ABI$ et $AIC$ ont des bases de même longueur.\n2. La hauteur issue de $A$ est perpendiculaire à la droite $(BC)$, qui porte les deux bases $[BI]$ et $[IC]$ : c'est la même pour les deux triangles, qui ont donc la même hauteur $h$.\n3. Ainsi $\\mathcal{A}_{ABI} = \\frac{BI \\times h}{2} = \\frac{IC \\times h}{2} = \\mathcal{A}_{AIC}$.\n\nLes deux triangles ont la même aire, mais ils ne sont en général **pas superposables**.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 150\" width=\"280\" height=\"150\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"60,25 30,125 130,125\" fill=\"rgba(37, 99, 235, 0.18)\" stroke=\"none\" />\n    <polygon points=\"60,25 130,125 230,125\" fill=\"rgba(16, 185, 129, 0.18)\" stroke=\"none\" />\n    <polygon points=\"60,25 30,125 230,125\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <line x1=\"60\" y1=\"25\" x2=\"130\" y2=\"125\" stroke=\"#059669\" stroke-width=\"2\" />\n    <line x1=\"60\" y1=\"25\" x2=\"60\" y2=\"125\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"3 3\" />\n    <path d=\"M 60 117 L 68 117 L 68 125\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.2\" />\n    <line x1=\"80\" y1=\"120\" x2=\"80\" y2=\"130\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" />\n    <line x1=\"180\" y1=\"120\" x2=\"180\" y2=\"130\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" />\n    <text x=\"69\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">h</text>\n    <text x=\"60\" y=\"17\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"22\" y=\"141\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"238\" y=\"141\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"60\" y=\"141\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">H</text>\n    <text x=\"130\" y=\"141\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">I</text>\n  </svg>\n</div>"
      },
      {
        "title": "Pour aller plus loin : inégalité triangulaire et position du centre de gravité",
        "content": "Ces deux résultats dépassent ce qui est attendu en 5e.\n• **Inégalité triangulaire** : le constat de la section 1 se résume en une phrase. On peut construire un triangle si et seulement si la plus grande longueur est **strictement inférieure** à la somme des deux autres. Si $AC = AB + BC$, alors les points $A$, $B$ et $C$ sont alignés et $B \\in [AC]$ (triangle aplati).\n• **Position du centre de gravité** : le point $G$ est situé aux $\\frac{2}{3}$ de chaque médiane en partant du sommet. Par exemple, si $A'$ est le milieu de $[BC]$, alors $AG = \\frac{2}{3}AA'$."
      },
      {
        "title": "À retenir",
        "content": "• Trois longueurs ne permettent pas toujours de construire un triangle : il faut que les arcs se coupent.\n• Médiatrices $\\to$ centre du cercle circonscrit ; hauteurs $\\to$ orthocentre ; médianes $\\to$ centre de gravité.\n• $\\mathcal{A} = \\frac{\\text{base} \\times \\text{hauteur}}{2}$ : c'est la moitié du rectangle de mêmes base et hauteur (ne pas oublier de diviser par $2$).\n• Deux triangles de mêmes base et hauteur ont la même aire ; une médiane partage un triangle en deux triangles de même aire."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer l'aire d'un triangle",
        "example": "Calculer l'aire d'un triangle dont une base mesure $8\\text{ cm}$ et la hauteur correspondante $5\\text{ cm}$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 240 120\" width=\"240\" height=\"120\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"90,20 30,95 200,95\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"90\" y1=\"20\" x2=\"90\" y2=\"95\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"3 3\" />\n    <path d=\"M 90 88 L 96 88 L 96 95\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.2\" />\n    <text x=\"96\" y=\"64\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">h = 5 cm</text>\n    <text x=\"115\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">base = 8 cm</text>\n  </svg>\n</div>",
        "steps": [
          "**Formule** : $\\text{Aire} = \\frac{b \\times h}{2}$.",
          "**Calcul** : $\\text{Aire} = \\frac{8 \\times 5}{2} = \\frac{40}{2} = 20\\text{ cm}^2$."
        ]
      },
      {
        "title": "Méthode : Construire un triangle connaissant ses trois côtés",
        "example": "Construire le triangle $ABC$ tel que $AB = 6\\text{ cm}$, $AC = 5\\text{ cm}$ et $BC = 4\\text{ cm}$.",
        "steps": [
          "**Étape 1** : On fait un schéma à main levée codé et on repère le plus grand côté : $[AB]$.",
          "**Étape 2** : On trace le segment $[AB]$ de $6\\text{ cm}$.",
          "**Étape 3** : On trace un arc de cercle de centre $A$ et de rayon $5\\text{ cm}$, puis un arc de centre $B$ et de rayon $4\\text{ cm}$.",
          "**Étape 4** : Le point d'intersection des arcs est $C$. On trace $[AC]$ et $[BC]$ et on laisse les traits de construction. (Si les arcs ne se coupaient pas, le triangle serait impossible à construire.)"
        ]
      },
      {
        "title": "Méthode : Tracer une hauteur",
        "example": "Tracer la hauteur issue de $A$ dans le triangle $ABC$.",
        "steps": [
          "**Étape 1** : On repère le côté opposé à $A$ : c'est $[BC]$.",
          "**Étape 2** : On place un côté de l'angle droit de l'équerre le long de $(BC)$ et on la fait glisser jusqu'à ce que l'autre côté passe par $A$.",
          "**Étape 3** : On trace la droite passant par $A$ et perpendiculaire à $(BC)$ ; on code l'angle droit. Si le pied de la hauteur tombe en dehors de $[BC]$, on prolonge le côté."
        ]
      },
      {
        "title": "Méthode : Tracer une médiane",
        "example": "Tracer la médiane issue de $A$ dans le triangle $ABC$.",
        "steps": [
          "**Étape 1** : On repère le côté opposé à $A$ : c'est $[BC]$.",
          "**Étape 2** : On place le milieu $I$ de $[BC]$ à la règle graduée et on code $BI = IC$.",
          "**Étape 3** : On trace la droite $(AI)$ : c'est la médiane issue de $A$. Elle n'est en général pas perpendiculaire à $[BC]$."
        ]
      },
      {
        "title": "Méthode : Démontrer qu'une médiane partage un triangle en deux triangles de même aire",
        "example": "Dans le triangle $RST$, $M$ est le milieu de $[ST]$. Démontrer que les triangles $RSM$ et $RTM$ ont la même aire.",
        "steps": [
          "**Les bases** : $M$ est le milieu de $[ST]$, donc $SM = MT$.",
          "**La hauteur** : on note $h$ la longueur de la hauteur issue de $R$. Elle est perpendiculaire à la droite $(ST)$, qui porte les bases $[SM]$ et $[MT]$ : les deux triangles ont donc la même hauteur $h$.",
          "**Conclusion** : $\\mathcal{A}_{RSM} = \\frac{SM \\times h}{2} = \\frac{MT \\times h}{2} = \\mathcal{A}_{RTM}$. La médiane $(RM)$ partage donc le triangle en deux triangles de même aire."
        ]
      },
      {
        "title": "Méthode : Calculer une hauteur à partir de l'aire",
        "example": "Un triangle a une aire de $24\\text{ cm}^2$ et une base de $8\\text{ cm}$. Quelle est la hauteur relative à cette base ?",
        "steps": [
          "**Étape 1** : $\\mathcal{A} = \\frac{b \\times h}{2}$, donc $b \\times h = 2 \\times \\mathcal{A} = 48$.",
          "**Étape 2** : $8 \\times h = 48$, donc $h = 48 \\div 8 = 6\\text{ cm}$.",
          "**Vérification** : $\\frac{8 \\times 6}{2} = 24\\text{ cm}^2$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas oublier de diviser par 2 dans le calcul de l'aire du triangle !",
      "⚠️ Ne pas confondre médiane (passe par le milieu) et médiatrice (perpendiculaire au milieu).",
      "⚠️ La hauteur relative à une base est **perpendiculaire** à cette base : ce n'est en général pas un côté du triangle (sauf dans un triangle rectangle).",
      "⚠️ Trois longueurs ne donnent pas toujours un triangle : avec $3\\text{ cm}$, $4\\text{ cm}$ et $8\\text{ cm}$, les arcs de rayons $3\\text{ cm}$ et $4\\text{ cm}$ tracés aux extrémités du segment de $8\\text{ cm}$ ne se coupent pas.",
      "⚠️ Une médiane partage un triangle en deux triangles de **même aire**, mais ces deux triangles ne sont en général ni superposables, ni de même périmètre."
    ],
    "flashcards": [
      { "q": "Comment s'appelle le point d'intersection des trois hauteurs d'un triangle ?", "a": "L'**orthocentre**." },
      { "q": "Comment s'appelle le point de concours des trois médianes d'un triangle ?", "a": "Le **centre de gravité**." },
      { "q": "Pourquoi une médiane partage-t-elle un triangle en deux triangles de même aire ?", "a": "Les deux triangles ont des bases de même longueur (le milieu coupe le côté en deux) et la même hauteur, issue du sommet commun." },
      { "q": "Deux triangles ont des bases de même longueur et la même hauteur relative à ces bases. Que peut-on dire de leurs aires ?", "a": "Elles sont **égales**, même si les triangles n'ont pas la même forme." },
      { "q": "Que représente le point de concours des trois médiatrices d'un triangle ?", "a": "Le **centre du cercle circonscrit** au triangle (qui passe par les 3 sommets car il est équidistant de ceux-ci)." },
      { "q": "Un triangle de côtés 3 cm, 4 cm et 8 cm est-il constructible ?", "a": "Non : en traçant le segment de $8\\text{ cm}$, les arcs de rayons $3\\text{ cm}$ et $4\\text{ cm}$ ne se coupent pas, car $3 + 4 = 7$ est trop court." },
      { "q": "Que peut-on dire d'un point situé sur la médiatrice de $[AB]$ ?", "a": "Il est à égale distance de $A$ et de $B$." },
      { "q": "Aire d'un triangle rectangle dont les côtés de l'angle droit mesurent $6\\text{ cm}$ et $9\\text{ cm}$ ?", "a": "$\\frac{6 \\times 9}{2} = 27\\text{ cm}^2$." }
    ]
  },
  "5G5": {
    "title": "5G5 : Parallélogrammes et quadrilatères particuliers",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Connaître la définition du parallélogramme et ses propriétés (côtés, angles, diagonales, centre de symétrie).",
      "Démontrer qu'un quadrilatère est un parallélogramme à l'aide d'une propriété caractéristique.",
      "Connaître et utiliser les propriétés du rectangle, du losange et du carré.",
      "Construire un parallélogramme ou un quadrilatère particulier.",
      "Calculer l'aire d'un parallélogramme : $\\mathcal{A} = b \\times h$.",
      "Calculer l'aire d'une figure composée par découpage ou recollement ; convertir des longueurs et des aires."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et propriétés du parallélogramme",
        "content": "**Définition** : un **parallélogramme** est un quadrilatère dont les côtés opposés sont **parallèles deux à deux**.\n**Propriétés** : si $ABCD$ est un parallélogramme, alors\n• ses côtés opposés ont la **même longueur** : $AB = CD$ et $AD = BC$ ;\n• ses diagonales $[AC]$ et $[BD]$ se coupent en leur **milieu** $O$ ;\n• ses angles opposés ont la même mesure, et deux angles consécutifs sont supplémentaires ;\n• le point $O$ est son **centre de symétrie**.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 150\" width=\"280\" height=\"150\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"50,110 180,110 230,40 100,40\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <!-- Diagonales -->\n    <line x1=\"50\" y1=\"110\" x2=\"230\" y2=\"40\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <line x1=\"180\" y1=\"110\" x2=\"100\" y2=\"40\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <circle cx=\"140\" cy=\"75\" r=\"3.5\" fill=\"#dc2626\" />\n    <text x=\"136\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">O</text>\n    <text x=\"35\" y=\"122\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"185\" y=\"122\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"236\" y=\"40\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"88\" y=\"38\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">D</text>\n    <!-- Codages côtés opposés égaux -->\n    <line x1=\"113\" y1=\"107\" x2=\"117\" y2=\"113\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"163\" y1=\"37\" x2=\"167\" y2=\"43\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"73\" y1=\"72\" x2=\"77\" y2=\"78\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"76\" y1=\"70\" x2=\"80\" y2=\"76\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"203\" y1=\"72\" x2=\"207\" y2=\"78\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"206\" y1=\"70\" x2=\"210\" y2=\"76\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <text x=\"140\" y=\"138\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#dc2626\">Diagonales sécantes en leur milieu commun O</text>\n  </svg>\n</div>"
      },
      {
        "title": "2. Reconnaître un parallélogramme",
        "content": "Un quadrilatère **non croisé** est un parallélogramme si l'une de ces conditions est vérifiée :\n• ses côtés opposés sont parallèles deux à deux (définition) ;\n• ses diagonales se coupent en leur milieu ;\n• ses côtés opposés sont de même longueur deux à deux ;\n• deux de ses côtés opposés sont parallèles **et** de même longueur."
      },
      {
        "title": "3. Rectangle, losange et carré",
        "content": "| | Côtés | Angles | Diagonales |\n|:---|:---:|:---:|:---:|\n| Rectangle | opposés parallèles et égaux | 4 angles droits | même milieu, **même longueur** |\n| Losange | 4 côtés égaux | angles opposés égaux | même milieu, **perpendiculaires** |\n| Carré | 4 côtés égaux | 4 angles droits | même milieu, même longueur, perpendiculaires |\nCe sont des parallélogrammes particuliers. Pour les reconnaître :\n• un parallélogramme qui a **un angle droit** (ou des diagonales de même longueur) est un **rectangle** ;\n• un parallélogramme qui a **deux côtés consécutifs égaux** (ou des diagonales perpendiculaires) est un **losange** ;\n• un quadrilatère qui est à la fois rectangle et losange est un **carré**.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 160\" width=\"300\" height=\"160\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Rectangle -->\n    <g>\n      <rect x=\"25\" y=\"20\" width=\"70\" height=\"45\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n      <path d=\"M 25 30 L 33 30 L 33 20\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n      <text x=\"60\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">Rectangle</text>\n      <text x=\"60\" y=\"92\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"8\" fill=\"var(--text-muted, #64748b)\">Angle droit</text>\n    </g>\n    <!-- Losange -->\n    <g>\n      <polygon points=\"240,15 210,42.5 240,70 270,42.5\" fill=\"rgba(16, 185, 129, 0.08)\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n      <line x1=\"240\" y1=\"15\" x2=\"240\" y2=\"70\" stroke=\"#10b981\" stroke-width=\"1\" stroke-dasharray=\"2 2\" />\n      <line x1=\"210\" y1=\"42.5\" x2=\"270\" y2=\"42.5\" stroke=\"#10b981\" stroke-width=\"1\" stroke-dasharray=\"2 2\" />\n      <text x=\"240\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">Losange</text>\n      <text x=\"240\" y=\"97\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"8\" fill=\"var(--text-muted, #64748b)\">4 côtés égaux</text>\n    </g>\n    <!-- Carré -->\n    <g>\n      <rect x=\"125\" y=\"100\" width=\"50\" height=\"50\" fill=\"rgba(217, 119, 6, 0.08)\" stroke=\"#d97706\" stroke-width=\"1.8\" />\n      <path d=\"M 125 110 L 133 110 L 133 100\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"1.2\" />\n      <text x=\"150\" y=\"140\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#d97706\">Carré</text>\n    </g>\n    <!-- Flèches de synthèse -->\n    <path d=\"M 60 98 L 120 120\" fill=\"none\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1\" stroke-dasharray=\"2 2\" />\n    <path d=\"M 240 102 L 180 120\" fill=\"none\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1\" stroke-dasharray=\"2 2\" />\n  </svg>\n</div>"
      },
      {
        "title": "4. Aire du parallélogramme",
        "content": "$$\\mathcal{A} = b \\times h$$\noù $h$ est la **hauteur relative** à la base $b$ (distance entre la base et le côté opposé, mesurée perpendiculairement).\nExemple : base $7{,}5\\text{ cm}$ et hauteur $4\\text{ cm}$ : $\\mathcal{A} = 7{,}5 \\times 4 = 30\\text{ cm}^2$.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 130\" width=\"280\" height=\"130\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"50,95 170,95 210,35 90,35\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <line x1=\"90\" y1=\"35\" x2=\"90\" y2=\"95\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"3 3\" />\n    <polygon points=\"50,95 90,95 90,35\" fill=\"rgba(220, 38, 38, 0.12)\" stroke=\"#dc2626\" stroke-width=\"1\" />\n    <polygon points=\"170,95 210,95 210,35\" fill=\"rgba(16, 185, 129, 0.15)\" stroke=\"#10b981\" stroke-width=\"1\" stroke-dasharray=\"3 3\" />\n    <path d=\"M 70 55 Q 130 15 190 55\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"1.5\" stroke-dasharray=\"2 2\" />\n    <text x=\"80\" y=\"68\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">h</text>\n    <text x=\"130\" y=\"112\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">Base b</text>\n    <text x=\"140\" y=\"25\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">Le triangle déplacé forme un rectangle b × h</text>\n  </svg>\n</div>"
      },
      {
        "title": "5. Figures composées et conversions d'aires",
        "content": "**Figure composée** : on la découpe en figures dont on connaît l'aire (rectangle, triangle, parallélogramme), puis on **additionne** leurs aires. On peut aussi **soustraire** l'aire d'une partie retirée, ou **déplacer un morceau** (découper puis recoller) : l'aire ne change pas, c'est ainsi qu'un parallélogramme se transforme en rectangle.\nExemple : la figure ci-dessous est formée d'un rectangle et d'un parallélogramme de même longueur $8\\text{ cm}$ : $\\mathcal{A} = 8 \\times 3 + 8 \\times 2 = 24 + 16 = 40\\text{ cm}^2$.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 150\" width=\"280\" height=\"150\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"40,60 200,60 200,120 40,120\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <polygon points=\"40,60 200,60 230,20 70,20\" fill=\"rgba(16, 185, 129, 0.12)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <line x1=\"70\" y1=\"20\" x2=\"70\" y2=\"60\" stroke=\"#dc2626\" stroke-width=\"1.6\" stroke-dasharray=\"3 3\" />\n    <text x=\"120\" y=\"137\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">8 cm</text>\n    <text x=\"208\" y=\"94\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">3 cm</text>\n    <text x=\"76\" y=\"45\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">2 cm</text>\n  </svg>\n</div>\n\n**Conversions d'aires** : chaque unité d'aire vaut **$100$ fois** l'unité immédiatement inférieure (un carré de $1\\text{ cm}$ de côté contient $10 \\times 10 = 100$ carrés de $1\\text{ mm}$ de côté).\n$$1\\text{ m}^2 = 100\\text{ dm}^2 = 10\\,000\\text{ cm}^2 \\qquad 1\\text{ cm}^2 = 100\\text{ mm}^2$$\nExemples : $3{,}5\\text{ m}^2 = 350\\text{ dm}^2 = 35\\,000\\text{ cm}^2$ ; $2\\,400\\text{ cm}^2 = 24\\text{ dm}^2 = 0{,}24\\text{ m}^2$.\n⚠️ Avant de calculer une aire, on écrit toutes les longueurs dans la **même unité**."
      },
      {
        "title": "À retenir",
        "content": "• Parallélogramme : côtés opposés parallèles et de même longueur, diagonales de même milieu.\n• Rectangle : diagonales de même longueur ; losange : diagonales perpendiculaires ; carré : les deux.\n• $\\mathcal{A} = b \\times h$ avec la hauteur **perpendiculaire** à la base."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Prouver qu'un quadrilatère est un parallélogramme",
        "example": "Démontrer que $ABCD$ est un parallélogramme sachant que ses diagonales se coupent en leur milieu $O$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 240 120\" width=\"240\" height=\"120\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"40,90 150,90 190,35 80,35\" fill=\"rgba(37, 99, 235, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"40\" y1=\"90\" x2=\"190\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <line x1=\"150\" y1=\"90\" x2=\"80\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <circle cx=\"115\" cy=\"62.5\" r=\"3.5\" fill=\"#dc2626\" />\n    <text x=\"112\" y=\"78\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">O</text>\n  </svg>\n</div>",
        "steps": [
          "**On sait que** : les diagonales $[AC]$ et $[BD]$ du quadrilatère $ABCD$ ont le même milieu $O$.",
          "**Or** : si les diagonales d'un quadrilatère se coupent en leur milieu, alors c'est un parallélogramme.",
          "**Donc** : $ABCD$ est un parallélogramme."
        ]
      },
      {
        "title": "Méthode : Calculer des longueurs dans un parallélogramme",
        "example": "$ABCD$ est un parallélogramme de centre $O$ avec $AB = 9\\text{ cm}$, $BC = 5\\text{ cm}$ et $AC = 12\\text{ cm}$. Calculer $CD$, $AD$, $OA$ et le périmètre.",
        "steps": [
          "**Étape 1** : Les côtés opposés ont la même longueur : $CD = AB = 9\\text{ cm}$ et $AD = BC = 5\\text{ cm}$.",
          "**Étape 2** : Les diagonales se coupent en leur milieu : $OA = AC \\div 2 = 6\\text{ cm}$.",
          "**Étape 3** : Périmètre : $2 \\times (9 + 5) = 28\\text{ cm}$."
        ]
      },
      {
        "title": "Méthode : Démontrer qu'un parallélogramme est un losange",
        "example": "$EFGH$ est un parallélogramme tel que $EF = FG = 4\\text{ cm}$. Quelle est sa nature ?",
        "steps": [
          "**On sait que** : $EFGH$ est un parallélogramme et ses côtés consécutifs $[EF]$ et $[FG]$ ont la même longueur.",
          "**Or** : un parallélogramme qui a deux côtés consécutifs de même longueur est un losange.",
          "**Donc** : $EFGH$ est un losange (ses quatre côtés mesurent $4\\text{ cm}$)."
        ]
      },
      {
        "title": "Méthode : Construire un parallélogramme à partir de ses côtés",
        "example": "Construire un parallélogramme $ABCD$ tel que $AB = 6\\text{ cm}$, $AD = 4\\text{ cm}$ et $\\widehat{DAB} = 60^\\circ$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 172\" width=\"300\" height=\"172\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"40,130 190,130 240,43.4 90,43.4\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <!-- Arcs de compas : centre B rayon 4 cm, centre D rayon 6 cm -->\n    <path d=\"M 260.71 59.29 A 100 100 0 0 0 215.88 33.41\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <path d=\"M 236.72 74.58 A 150 150 0 0 0 236.72 12.21\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <circle cx=\"240\" cy=\"43.4\" r=\"3\" fill=\"#dc2626\" />\n    <!-- Angle en A -->\n    <path d=\"M 58 130 A 18 18 0 0 0 49 114.41\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" />\n    <text x=\"64\" y=\"118\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">60°</text>\n    <text x=\"26\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"194\" y=\"144\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"246\" y=\"36\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">C</text>\n    <text x=\"78\" y=\"40\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">D</text>\n    <text x=\"115\" y=\"145\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">6 cm</text>\n    <text x=\"30\" y=\"88\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">4 cm</text>\n    <text x=\"150\" y=\"165\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#dc2626\">Arcs : centre B, rayon 4 cm ; centre D, rayon 6 cm</text>\n  </svg>\n</div>",
        "steps": [
          "**Étape 1** : On trace le segment $[AB]$ de $6\\text{ cm}$, puis, au rapporteur, l'angle $\\widehat{DAB}$ de $60^\\circ$. On place $D$ sur le second côté de cet angle, à $4\\text{ cm}$ de $A$.",
          "**Étape 2** : Dans un parallélogramme, les côtés opposés ont la même longueur : $BC = AD = 4\\text{ cm}$ et $DC = AB = 6\\text{ cm}$. On trace au compas un arc de cercle de centre $B$ et de rayon $4\\text{ cm}$, puis un arc de cercle de centre $D$ et de rayon $6\\text{ cm}$.",
          "**Étape 3** : Ces arcs se coupent en $C$. On choisit le point situé de l'autre côté de la droite $(BD)$ par rapport à $A$ : l'autre intersection donnerait un quadrilatère croisé. On trace $[BC]$ et $[DC]$ et on laisse les traits de construction.",
          "**Justification** : $ABCD$ est un quadrilatère non croisé dont les côtés opposés ont la même longueur deux à deux : c'est un parallélogramme.",
          "**Variante à la règle et à l'équerre** : on trace la parallèle à $(AB)$ passant par $D$ et la parallèle à $(AD)$ passant par $B$ ; elles se coupent en $C$, et les côtés opposés sont parallèles par construction."
        ]
      },
      {
        "title": "Méthode : Calculer une aire en changeant d'unité",
        "example": "Un parallélogramme a une base de $1{,}2\\text{ m}$ et une hauteur de $45\\text{ cm}$. Calculer son aire en $\\text{cm}^2$, puis en $\\text{m}^2$.",
        "steps": [
          "**Étape 1 (Même unité)** : $1{,}2\\text{ m} = 120\\text{ cm}$.",
          "**Étape 2 (Aire)** : $\\mathcal{A} = 120 \\times 45 = 5\\,400\\text{ cm}^2$.",
          "**Étape 3 (Conversion)** : $5\\,400\\text{ cm}^2 = 54\\text{ dm}^2 = 0{,}54\\text{ m}^2$ (on divise par $100$ à chaque changement d'unité)."
        ]
      },
      {
        "title": "Méthode : Construire un parallélogramme à partir de ses diagonales",
        "example": "Construire un parallélogramme $EFGH$ de centre $O$ tel que $EG = 8\\text{ cm}$, $FH = 5\\text{ cm}$ et $\\widehat{EOF} = 70^\\circ$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 165\" width=\"280\" height=\"165\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"60,72 122.9,118.98 220,72 157.1,25.02\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <!-- Diagonales de même milieu O -->\n    <line x1=\"60\" y1=\"72\" x2=\"220\" y2=\"72\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <line x1=\"122.9\" y1=\"118.98\" x2=\"157.1\" y2=\"25.02\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <circle cx=\"140\" cy=\"72\" r=\"3\" fill=\"#dc2626\" />\n    <!-- Codage OE = OG -->\n    <line x1=\"100\" y1=\"68\" x2=\"100\" y2=\"76\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"180\" y1=\"68\" x2=\"180\" y2=\"76\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <!-- Codage OF = OH -->\n    <line x1=\"135.82\" y1=\"95.17\" x2=\"128.31\" y2=\"92.43\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"134.59\" y1=\"98.55\" x2=\"127.08\" y2=\"95.81\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"152.92\" y1=\"48.19\" x2=\"145.41\" y2=\"45.45\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"151.69\" y1=\"51.57\" x2=\"144.18\" y2=\"48.83\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <!-- Angle EOF -->\n    <path d=\"M 124 72 A 16 16 0 0 0 134.53 87.04\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" />\n    <text x=\"103\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">70°</text>\n    <text x=\"46\" y=\"76\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">E</text>\n    <text x=\"116\" y=\"134\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">F</text>\n    <text x=\"226\" y=\"76\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">G</text>\n    <text x=\"160\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">H</text>\n    <text x=\"146\" y=\"68\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">O</text>\n    <text x=\"140\" y=\"156\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#dc2626\">OE = OG = 4 cm et OF = OH = 2,5 cm</text>\n  </svg>\n</div>",
        "steps": [
          "**Étape 1** : Les diagonales se coupent en leur milieu : $OE = OG = 8 \\div 2 = 4\\text{ cm}$ et $OF = OH = 5 \\div 2 = 2{,}5\\text{ cm}$.",
          "**Étape 2** : On trace le segment $[EG]$ de $8\\text{ cm}$ et on place son milieu $O$.",
          "**Étape 3** : Au rapporteur, on trace une demi-droite d'origine $O$ qui fait un angle de $70^\\circ$ avec $[OE]$, et on y place $F$ à $2{,}5\\text{ cm}$ de $O$.",
          "**Étape 4** : On prolonge la droite $(OF)$ de l'autre côté de $O$ et on y place $H$ à $2{,}5\\text{ cm}$ de $O$ : $H$ est le symétrique de $F$ par rapport à $O$. On relie les points dans l'ordre $E$, $F$, $G$, $H$.",
          "**Justification** : les diagonales $[EG]$ et $[FH]$ de $EFGH$ ont le même milieu $O$ : c'est un parallélogramme.",
          "**Quadrilatères particuliers** : on procède de la même façon en choisissant des diagonales de même milieu et **de même longueur** pour un rectangle, **perpendiculaires** pour un losange, **perpendiculaires et de même longueur** pour un carré."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention à l'ordre des lettres : le quadrilatère $ABCD$ a pour diagonales $[AC]$ et $[BD]$ (et non $[AB]$).",
      "⚠️ L'aire du parallélogramme est $b \\times h$ et NON le produit de deux côtés consécutifs !",
      "⚠️ Un quadrilatère dont les diagonales sont perpendiculaires n'est pas forcément un losange : il faut aussi qu'elles se coupent en leur milieu (contre-exemple : le cerf-volant).",
      "⚠️ Un carré est aussi un rectangle et un losange : il possède toutes leurs propriétés."
    ],
    "flashcards": [
      { "q": "Quelle est la propriété des diagonales d'un parallélogramme ?", "a": "Elles se coupent en leur milieu." },
      { "q": "Qu'est-ce qu'un losange ?", "a": "Un parallélogramme qui a ses 4 côtés de même longueur (ou ses diagonales perpendiculaires)." },
      { "q": "Quelle est la formule de l'aire d'un parallélogramme de base b et de hauteur h ?", "a": "$$\\mathcal{A} = \\text{base} \\times \\text{hauteur} = b \\times h$$" },
      { "q": "Que sait-on des diagonales d'un rectangle ?", "a": "Elles se coupent en leur milieu et ont la même longueur." },
      { "q": "Un parallélogramme a un angle droit. Quelle est sa nature ?", "a": "C'est un **rectangle**." },
      { "q": "Aire d'un parallélogramme de base $6\\text{ cm}$ et de hauteur $3{,}5\\text{ cm}$ ?", "a": "$6 \\times 3{,}5 = 21\\text{ cm}^2$." }
    ]
  },
  "5G6": {
    "title": "5G6 : Prismes droits, cylindres de révolution et volumes",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Reconnaître et décrire un prisme droit et un cylindre de révolution (bases, faces latérales, arêtes, sommets).",
      "Représenter ces solides en perspective cavalière et construire leurs patrons.",
      "Calculer l'aire d'un disque : $\\mathcal{A} = \\pi \\times R^2$.",
      "Calculer le volume d'un pavé droit, d'un prisme droit et d'un cylindre : $\\mathcal{V} = \\mathcal{B} \\times h$.",
      "Convertir des unités de volume et de contenance ($1\\text{ L} = 1\\text{ dm}^3$, $1\\text{ m}^3 = 1\\,000\\text{ L}$)."
    ],
    "keyPoints": [
      {
        "title": "1. Le prisme droit",
        "content": "Un prisme droit possède :\n• Deux bases parallèles qui sont des polygones superposables.\n• Des faces latérales rectangulaires perpendiculaires aux bases.\n• Des arêtes latérales toutes de même longueur et parallèles, correspondant à la hauteur du prisme.\n• Un prisme droit dont la base a $n$ côtés possède $n + 2$ faces, $3n$ arêtes et $2n$ sommets. Prisme à base triangulaire : $5$ faces, $9$ arêtes, $6$ sommets.\n• Le pavé droit est un prisme droit particulier (sa base est un rectangle).\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 150\" width=\"280\" height=\"150\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Base du bas : l'arête avant est visible, les deux arêtes qui partent du sommet caché sont en pointillés -->\n    <polygon points=\"50,115 110,130 90,95\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"none\" />\n    <line x1=\"50\" y1=\"115\" x2=\"110\" y2=\"130\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"50\" y1=\"115\" x2=\"90\" y2=\"95\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <line x1=\"110\" y1=\"130\" x2=\"90\" y2=\"95\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <!-- Base avant -->\n    <polygon points=\"50,45 110,60 90,25\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <!-- Arêtes latérales -->\n    <line x1=\"50\" y1=\"45\" x2=\"50\" y2=\"115\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"110\" y1=\"60\" x2=\"110\" y2=\"130\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"90\" y1=\"25\" x2=\"90\" y2=\"95\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <text x=\"80\" y=\"15\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">Base 1 (triangle)</text>\n    <text x=\"80\" y=\"145\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Base 2 (parallèle)</text>\n    <line x1=\"120\" y1=\"60\" x2=\"120\" y2=\"130\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <text x=\"130\" y=\"98\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">h</text>\n    <!-- Patron à droite -->\n    <rect x=\"170\" y=\"40\" width=\"85\" height=\"55\" fill=\"rgba(37, 99, 235, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" />\n    <line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"95\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1\" stroke-dasharray=\"2 2\" />\n    <line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"95\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1\" stroke-dasharray=\"2 2\" />\n    <polygon points=\"198,40 226,40 212,15\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n    <polygon points=\"198,95 226,95 212,120\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n    <text x=\"212\" y=\"135\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"var(--text-muted, #64748b)\">Patron déployé</text>\n  </svg>\n</div>"
      },
      {
        "title": "2. Le cylindre de révolution",
        "content": "• Un cylindre de révolution s'obtient en faisant tourner un rectangle autour d'un de ses côtés. Ses bases sont deux disques superposables et parallèles de rayon $R$. Sa surface latérale se déroule en un rectangle de dimensions $2\\pi R \\times h$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 150\" width=\"280\" height=\"150\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Cylindre 3D -->\n    <g>\n      <ellipse cx=\"65\" cy=\"35\" rx=\"40\" ry=\"12\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" />\n      <line x1=\"25\" y1=\"35\" x2=\"25\" y2=\"115\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"105\" y1=\"35\" x2=\"105\" y2=\"115\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <path d=\"M 25 115 A 40 12 0 0 0 105 115\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <path d=\"M 25 115 A 40 12 0 0 1 105 115\" fill=\"none\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n      <line x1=\"65\" y1=\"35\" x2=\"105\" y2=\"35\" stroke=\"#10b981\" stroke-width=\"2\" />\n      <text x=\"85\" y=\"30\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">R</text>\n      <line x1=\"112\" y1=\"35\" x2=\"112\" y2=\"115\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n      <text x=\"120\" y=\"78\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">h</text>\n    </g>\n    <!-- Patron à droite -->\n    <g>\n      <rect x=\"160\" y=\"45\" width=\"95\" height=\"60\" fill=\"rgba(139, 92, 246, 0.08)\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" />\n      <circle cx=\"207.5\" cy=\"25\" r=\"18\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" />\n      <circle cx=\"207.5\" cy=\"125\" r=\"18\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" />\n      <text x=\"207.5\" y=\"40\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#8b5cf6\">Longueur = 2πR</text>\n    </g>\n  </svg>\n</div>"
      },
      {
        "title": "3. La perspective cavalière",
        "content": "La **perspective cavalière** permet de représenter un solide de l'espace sur une feuille plane, en gardant un dessin lisible et facile à tracer.\n\n**Les règles du dessin :**\n• La **face avant** (et toute face qui lui est parallèle) est dessinée **en vraie grandeur** : ses longueurs et ses angles sont conservés.\n• Les arêtes perpendiculaires à la face avant sont représentées par des **fuyantes** : des segments **parallèles entre eux**, **inclinés** d'un même angle (souvent $30°$ ou $45°$) et de longueur **réduite** par un même coefficient (souvent $0{,}5$). Une arête de $6$ cm est ainsi dessinée par une fuyante de $6 \\times 0{,}5 = 3$ cm.\n• Les arêtes **visibles** sont en trait plein, les arêtes **cachées** sont **en pointillés**.\n• Des arêtes parallèles du solide restent parallèles sur le dessin, et des arêtes parallèles de même longueur y gardent la même longueur.\n\nSur les figures, la face avant est coloriée et les fuyantes sont en rouge. Lorsque les fuyantes montent vers la droite, on voit la face avant, le dessus et le côté droit : le sommet caché est à l'arrière, en bas, à gauche, et ses trois arêtes sont en pointillés.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 360 150\" width=\"360\" height=\"150\" style=\"max-width:360px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"18,118 98,118 98,62 18,62\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"none\" />\n    <line x1=\"18\" y1=\"62\" x2=\"50\" y2=\"30\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"98\" y1=\"62\" x2=\"130\" y2=\"30\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"98\" y1=\"118\" x2=\"130\" y2=\"86\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"50\" y1=\"30\" x2=\"130\" y2=\"30\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"130\" y1=\"30\" x2=\"130\" y2=\"86\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"18\" y1=\"118\" x2=\"50\" y2=\"86\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"50\" y1=\"86\" x2=\"130\" y2=\"86\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"50\" y1=\"86\" x2=\"50\" y2=\"30\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"18\" y1=\"118\" x2=\"98\" y2=\"118\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"98\" y1=\"118\" x2=\"98\" y2=\"62\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"98\" y1=\"62\" x2=\"18\" y2=\"62\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"18\" y1=\"62\" x2=\"18\" y2=\"118\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <text x=\"66\" y=\"111\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">face avant</text>\n    <text x=\"118\" y=\"26\" text-anchor=\"start\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#dc2626\">fuyante</text>\n    <text x=\"74\" y=\"142\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Pavé droit</text>\n    <polygon points=\"170,118 230,118 230,58 170,58\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"none\" />\n    <line x1=\"170\" y1=\"58\" x2=\"195\" y2=\"33\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"230\" y1=\"58\" x2=\"255\" y2=\"33\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"230\" y1=\"118\" x2=\"255\" y2=\"93\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"195\" y1=\"33\" x2=\"255\" y2=\"33\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"255\" y1=\"33\" x2=\"255\" y2=\"93\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"170\" y1=\"118\" x2=\"195\" y2=\"93\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"195\" y1=\"93\" x2=\"255\" y2=\"93\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"195\" y1=\"93\" x2=\"195\" y2=\"33\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"170\" y1=\"118\" x2=\"230\" y2=\"118\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"230\" y1=\"118\" x2=\"230\" y2=\"58\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"230\" y1=\"58\" x2=\"170\" y2=\"58\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"170\" y1=\"58\" x2=\"170\" y2=\"118\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <text x=\"205\" y=\"142\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Cube</text>\n    <polygon points=\"268,118 328,118 290,60\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"none\" />\n    <line x1=\"290\" y1=\"60\" x2=\"314\" y2=\"36\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"328\" y1=\"118\" x2=\"352\" y2=\"94\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"352\" y1=\"94\" x2=\"314\" y2=\"36\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"268\" y1=\"118\" x2=\"292\" y2=\"94\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"292\" y1=\"94\" x2=\"352\" y2=\"94\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"292\" y1=\"94\" x2=\"314\" y2=\"36\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"268\" y1=\"118\" x2=\"328\" y2=\"118\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"328\" y1=\"118\" x2=\"290\" y2=\"60\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"290\" y1=\"60\" x2=\"268\" y2=\"118\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <text x=\"305\" y=\"142\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Prisme droit</text>\n  </svg>\n</div>\n\n**Le cas du cylindre de révolution :**\n• **Cylindre debout** : ses bases, horizontales, ne sont pas face à nous. On les représente par deux **ovales** de même largeur (le diamètre, en vraie grandeur), reliés par deux segments verticaux dont la longueur est la hauteur. La moitié arrière de l'ovale du bas est cachée : elle est **en pointillés**.\n• **Cylindre couché**, une base face à nous : cette base est un disque dessiné **en vraie grandeur**. La seconde base est le même disque, décalé le long d'une fuyante. Deux segments parallèles à la fuyante relient les deux disques, et la moitié cachée du disque arrière est **en pointillés**.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 340 148\" width=\"340\" height=\"148\" style=\"max-width:340px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <ellipse cx=\"80\" cy=\"26\" rx=\"46\" ry=\"12\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"34\" y1=\"26\" x2=\"34\" y2=\"112\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"126\" y1=\"26\" x2=\"126\" y2=\"112\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <path d=\"M 34 112 A 46 12 0 0 0 126 112\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <path d=\"M 34 112 A 46 12 0 0 1 126 112\" fill=\"none\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <text x=\"80\" y=\"142\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Cylindre debout</text>\n    <path d=\"M 287.4 79.9 A 38 38 0 0 1 240.6 20.1\" fill=\"none\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <path d=\"M 240.6 20.1 A 38 38 0 0 1 287.4 79.9\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"241.4\" y1=\"115.9\" x2=\"287.4\" y2=\"79.9\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"194.6\" y1=\"56.1\" x2=\"240.6\" y2=\"20.1\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <circle cx=\"218\" cy=\"86\" r=\"38\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <text x=\"240\" y=\"142\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Cylindre couché</text>\n  </svg>\n</div>"
      },
      {
        "title": "4. Patrons",
        "content": "• **Patron d'un prisme droit** : les deux bases et un grand rectangle formé des faces latérales, dont la longueur est égale au **périmètre de la base** et la largeur à la **hauteur** du prisme.\n• **Patron d'un cylindre** : deux disques de rayon $R$ et un rectangle de largeur $h$ et de longueur $2 \\times \\pi \\times R$ (le périmètre du disque de base).\nExemple : pour un cylindre de rayon $3\\text{ cm}$, la longueur du rectangle est $2 \\times \\pi \\times 3 \\approx 18{,}8\\text{ cm}$."
      },
      {
        "title": "5. L'aire du disque",
        "content": "Un **disque** est la surface délimitée par un cercle. L'aire d'un disque de rayon $R$ est :\n$$\\mathcal{A} = \\pi \\times R^2$$\nSi l'on connaît le diamètre $D$, on calcule d'abord le rayon : $R = D \\div 2$.\n\n**D'où vient cette formule ?** On découpe le disque en parts égales, puis on les range tête-bêche.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 360 136\" width=\"360\" height=\"136\" style=\"max-width:360px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M 60 64 L 106 64 A 46 46 0 0 0 99.8 41 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 60 64 L 99.8 41 A 46 46 0 0 0 83 24.2 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 60 64 L 83 24.2 A 46 46 0 0 0 60 18 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 60 64 L 60 18 A 46 46 0 0 0 37 24.2 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 60 64 L 37 24.2 A 46 46 0 0 0 20.2 41 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 60 64 L 20.2 41 A 46 46 0 0 0 14 64 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 60 64 L 14 64 A 46 46 0 0 0 20.2 87 Z\" fill=\"rgba(16, 185, 129, 0.22)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 60 64 L 20.2 87 A 46 46 0 0 0 37 103.8 Z\" fill=\"rgba(16, 185, 129, 0.22)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 60 64 L 37 103.8 A 46 46 0 0 0 60 110 Z\" fill=\"rgba(16, 185, 129, 0.22)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 60 64 L 60 110 A 46 46 0 0 0 83 103.8 Z\" fill=\"rgba(16, 185, 129, 0.22)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 60 64 L 83 103.8 A 46 46 0 0 0 99.8 87 Z\" fill=\"rgba(16, 185, 129, 0.22)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 60 64 L 99.8 87 A 46 46 0 0 0 106 64 Z\" fill=\"rgba(16, 185, 129, 0.22)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <line x1=\"60\" y1=\"64\" x2=\"106\" y2=\"64\" stroke=\"#dc2626\" stroke-width=\"2\" />\n    <text x=\"84\" y=\"60\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">R</text>\n    <path d=\"M 157.9 26 L 146 70.4 A 46 46 0 0 0 169.8 70.4 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 169.8 70.4 L 181.7 26 A 46 46 0 0 0 157.9 26 Z\" fill=\"rgba(16, 185, 129, 0.22)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 181.7 26 L 169.8 70.4 A 46 46 0 0 0 193.6 70.4 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 193.6 70.4 L 205.5 26 A 46 46 0 0 0 181.7 26 Z\" fill=\"rgba(16, 185, 129, 0.22)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 205.5 26 L 193.6 70.4 A 46 46 0 0 0 217.4 70.4 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 217.4 70.4 L 229.3 26 A 46 46 0 0 0 205.5 26 Z\" fill=\"rgba(16, 185, 129, 0.22)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 229.3 26 L 217.4 70.4 A 46 46 0 0 0 241.2 70.4 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 241.2 70.4 L 253.2 26 A 46 46 0 0 0 229.3 26 Z\" fill=\"rgba(16, 185, 129, 0.22)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 253.2 26 L 241.2 70.4 A 46 46 0 0 0 265.1 70.4 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 265.1 70.4 L 277 26 A 46 46 0 0 0 253.2 26 Z\" fill=\"rgba(16, 185, 129, 0.22)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 277 26 L 265.1 70.4 A 46 46 0 0 0 288.9 70.4 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <path d=\"M 288.9 70.4 L 300.8 26 A 46 46 0 0 0 277 26 Z\" fill=\"rgba(16, 185, 129, 0.22)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1\" />\n    <line x1=\"310.8\" y1=\"26\" x2=\"310.8\" y2=\"70.4\" stroke=\"#dc2626\" stroke-width=\"2\" />\n    <text x=\"320.8\" y=\"52.2\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">R</text>\n    <line x1=\"146\" y1=\"80.4\" x2=\"288.9\" y2=\"80.4\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <text x=\"217.4\" y=\"95.4\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">environ la moitié du périmètre : π × R</text>\n    <path d=\"M 116 66 L 136 66 M 130 60 L 136 66 L 130 72\" fill=\"none\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.8\" />\n    <text x=\"60\" y=\"128\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Disque découpé</text>\n  </svg>\n</div>\nLa figure obtenue ressemble à un parallélogramme, et de plus en plus à un rectangle quand les parts sont de plus en plus fines. Ce rectangle a :\n• pour **hauteur** le rayon $R$ ;\n• pour **longueur** la moitié du périmètre du cercle : $(2 \\times \\pi \\times R) \\div 2 = \\pi \\times R$.\nSon aire est donc $\\pi \\times R \\times R = \\pi \\times R^2$. Ce découpage est une justification visuelle, pas une démonstration complète.\n\nExemple : pour un disque de rayon $5\\text{ cm}$, $\\mathcal{A} = \\pi \\times 5^2 = 25\\pi\\text{ cm}^2$, soit environ $78{,}5\\text{ cm}^2$."
      },
      {
        "title": "6. Volumes",
        "content": "Pour un prisme droit ou un cylindre, le volume est **l'aire de la base multipliée par la hauteur** :\n$$\\mathcal{V} = \\mathcal{B} \\times h$$\n• Pavé droit : $\\mathcal{V} = L \\times \\ell \\times h$.\n• Prisme droit : $\\mathcal{V} = \\mathcal{B} \\times h$ (on calcule d'abord l'aire $\\mathcal{B}$ de la base : triangle, rectangle…).\n• Cylindre de rayon $R$ : la base est un disque, d'aire $\\mathcal{B} = \\pi \\times R^2$, donc $\\mathcal{V} = \\pi \\times R^2 \\times h$."
      },
      {
        "title": "7. Unités de volume et de contenance",
        "content": "Entre deux unités de volume voisines, on multiplie ou on divise **par $1\\,000$** (un cube de $1\\text{ dm}$ d'arête contient $10 \\times 10 \\times 10$ cubes de $1\\text{ cm}$ d'arête).\n$$1\\text{ m}^3 = 1\\,000\\text{ dm}^3 \\qquad 1\\text{ dm}^3 = 1\\,000\\text{ cm}^3$$\nLien avec les contenances : $1\\text{ dm}^3 = 1\\text{ L}$ ; $1\\text{ cm}^3 = 1\\text{ mL}$ ; $1\\text{ m}^3 = 1\\,000\\text{ L}$.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 240 100\" width=\"240\" height=\"100\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"20\" y=\"20\" width=\"200\" height=\"60\" rx=\"8\" fill=\"rgba(16, 185, 129, 0.08)\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <text x=\"120\" y=\"45\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#10b981\">1 L = 1 dm³ = 1 000 cm³</text>\n    <text x=\"120\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">1 m³ = 1 000 L</text>\n  </svg>\n</div>"
      },
      {
        "title": "À retenir",
        "content": "• Perspective cavalière : face avant en vraie grandeur, fuyantes parallèles, inclinées et réduites, arêtes cachées en pointillés.\n• Aire d'un disque de rayon $R$ : $\\mathcal{A} = \\pi \\times R^2$.\n• Prisme droit et cylindre : $\\mathcal{V} = \\mathcal{B} \\times h$.\n• Cylindre : $\\mathcal{V} = \\pi \\times R^2 \\times h$ (on élève le **rayon** au carré).\n• $1\\text{ L} = 1\\text{ dm}^3$ et $1\\text{ m}^3 = 1\\,000\\text{ L}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Représenter un pavé droit ou un prisme droit en perspective cavalière",
        "example": "Représenter en perspective cavalière un pavé droit de longueur $6\\text{ cm}$, de hauteur $4\\text{ cm}$ et de profondeur $6\\text{ cm}$, avec des fuyantes inclinées à $45°$ vers la droite et un coefficient de réduction de $0{,}5$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 360 104\" width=\"360\" height=\"104\" style=\"max-width:360px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"14,76 62,76 62,44 14,44\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"none\" />\n    <line x1=\"14\" y1=\"76\" x2=\"62\" y2=\"76\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"62\" y1=\"76\" x2=\"62\" y2=\"44\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"62\" y1=\"44\" x2=\"14\" y2=\"44\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"14\" y1=\"44\" x2=\"14\" y2=\"76\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <text x=\"44\" y=\"96\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">1. Face avant</text>\n    <polygon points=\"103,76 151,76 151,44 103,44\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"none\" />\n    <line x1=\"103\" y1=\"44\" x2=\"120\" y2=\"27\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"151\" y1=\"44\" x2=\"168\" y2=\"27\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"151\" y1=\"76\" x2=\"168\" y2=\"59\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"103\" y1=\"76\" x2=\"151\" y2=\"76\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"151\" y1=\"76\" x2=\"151\" y2=\"44\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"151\" y1=\"44\" x2=\"103\" y2=\"44\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"103\" y1=\"44\" x2=\"103\" y2=\"76\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <text x=\"133\" y=\"96\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">2. Fuyantes</text>\n    <polygon points=\"192,76 240,76 240,44 192,44\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"none\" />\n    <line x1=\"192\" y1=\"44\" x2=\"209\" y2=\"27\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"240\" y1=\"44\" x2=\"257\" y2=\"27\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"240\" y1=\"76\" x2=\"257\" y2=\"59\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"209\" y1=\"27\" x2=\"257\" y2=\"27\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"257\" y1=\"27\" x2=\"257\" y2=\"59\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"192\" y1=\"76\" x2=\"240\" y2=\"76\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"240\" y1=\"76\" x2=\"240\" y2=\"44\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"240\" y1=\"44\" x2=\"192\" y2=\"44\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"192\" y1=\"44\" x2=\"192\" y2=\"76\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <text x=\"222\" y=\"96\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">3. Face arrière</text>\n    <polygon points=\"281,76 329,76 329,44 281,44\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"none\" />\n    <line x1=\"281\" y1=\"44\" x2=\"298\" y2=\"27\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"329\" y1=\"44\" x2=\"346\" y2=\"27\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"329\" y1=\"76\" x2=\"346\" y2=\"59\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"298\" y1=\"27\" x2=\"346\" y2=\"27\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"346\" y1=\"27\" x2=\"346\" y2=\"59\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"281\" y1=\"76\" x2=\"298\" y2=\"59\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"298\" y1=\"59\" x2=\"346\" y2=\"59\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"298\" y1=\"59\" x2=\"298\" y2=\"27\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"281\" y1=\"76\" x2=\"329\" y2=\"76\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"329\" y1=\"76\" x2=\"329\" y2=\"44\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"329\" y1=\"44\" x2=\"281\" y2=\"44\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"281\" y1=\"44\" x2=\"281\" y2=\"76\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <text x=\"311\" y=\"96\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">4. Pointillés</text>\n  </svg>\n</div>",
        "steps": [
          "**Étape 1 : la face avant.** Tracer la face avant en vraie grandeur : ici un rectangle de $6\\text{ cm}$ sur $4\\text{ cm}$. Pour un prisme droit, on choisit le plus souvent une base comme face avant.",
          "**Étape 2 : les fuyantes.** Depuis trois des sommets de la face avant (tous sauf le sommet du bas situé du côté opposé aux fuyantes, ici en bas à gauche : sa fuyante est cachée et sera tracée en pointillés à l'étape 4), tracer des segments parallèles, inclinés à $45°$, de longueur $6 \\times 0{,}5 = 3\\text{ cm}$, en traits pleins.",
          "**Étape 3 : la face arrière.** Relier les extrémités des fuyantes : on retrouve la forme de la face avant, décalée.",
          "**Étape 4 : les arêtes cachées.** Placer le dernier sommet, à l'arrière, et tracer en pointillés les trois arêtes qui y aboutissent."
        ]
      },
      {
        "title": "Méthode : Représenter un cylindre de révolution en perspective cavalière",
        "example": "Représenter en perspective cavalière un cylindre de révolution debout, de rayon $2\\text{ cm}$ et de hauteur $4\\text{ cm}$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 220 136\" width=\"220\" height=\"136\" style=\"max-width:220px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <ellipse cx=\"90\" cy=\"22\" rx=\"40\" ry=\"11\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"50\" y1=\"22\" x2=\"50\" y2=\"102\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"130\" y1=\"22\" x2=\"130\" y2=\"102\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <path d=\"M 50 102 A 40 11 0 0 0 130 102\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <path d=\"M 50 102 A 40 11 0 0 1 130 102\" fill=\"none\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" />\n    <line x1=\"50\" y1=\"22\" x2=\"130\" y2=\"22\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <text x=\"90\" y=\"9\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">4 cm</text>\n    <line x1=\"142\" y1=\"22\" x2=\"142\" y2=\"102\" stroke=\"#dc2626\" stroke-width=\"1.6\" />\n    <text x=\"166\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">4 cm</text>\n  </svg>\n</div>",
        "steps": [
          "**Étape 1 : la base du haut.** Tracer un ovale aplati dont la largeur est le diamètre en vraie grandeur : $2 \\times 2 = 4\\text{ cm}$.",
          "**Étape 2 : la base du bas.** Tracer le même ovale, $4\\text{ cm}$ plus bas (la hauteur est verticale : elle est en vraie grandeur).",
          "**Étape 3 : les côtés.** Relier les extrémités gauche et droite des deux ovales par deux segments verticaux.",
          "**Étape 4 : la partie cachée.** Repasser en pointillés la moitié arrière de l'ovale du bas."
        ]
      },
      {
        "title": "Méthode : Calculer l'aire d'un disque",
        "example": "Calculer l'aire d'un disque de diamètre $12\\text{ cm}$ (valeur exacte, puis valeur approchée au dixième).",
        "steps": [
          "**Étape 1 : le rayon.** $R = 12 \\div 2 = 6\\text{ cm}$.",
          "**Étape 2 : la valeur exacte.** $\\mathcal{A} = \\pi \\times R^2 = \\pi \\times 6^2 = 36\\pi\\text{ cm}^2$.",
          "**Étape 3 : la valeur approchée.** Avec la calculatrice, $36\\pi \\approx 113{,}1\\text{ cm}^2$ (arrondi au dixième)."
        ]
      },
      {
        "title": "Méthode : Calculer le volume d'un cylindre",
        "example": "Calculer le volume d'un cylindre de rayon $R = 3\\text{ cm}$ et de hauteur $h = 10\\text{ cm}$ (valeur exacte et approchée).\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 200 130\" width=\"200\" height=\"130\" style=\"max-width:200px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <ellipse cx=\"100\" cy=\"30\" rx=\"45\" ry=\"12\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" />\n    <line x1=\"55\" y1=\"30\" x2=\"55\" y2=\"105\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"145\" y1=\"30\" x2=\"145\" y2=\"105\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <path d=\"M 55 105 A 45 12 0 0 0 145 105\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"100\" y1=\"30\" x2=\"145\" y2=\"30\" stroke=\"#10b981\" stroke-width=\"2\" />\n    <text x=\"122\" y=\"24\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">R = 3 cm</text>\n    <text x=\"155\" y=\"72\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">h = 10 cm</text>\n  </svg>\n</div>",
        "steps": [
          "**Aire de la base** : $\\mathcal{B} = \\pi \\times R^2 = \\pi \\times 3^2 = 9\\pi\\text{ cm}^2$.",
          "**Volume exact** : $\\mathcal{V} = \\mathcal{B} \\times h = 9\\pi \\times 10 = 90\\pi\\text{ cm}^3$.",
          "**Valeur approchée** : avec la calculatrice, $90\\pi \\approx 282{,}7\\text{ cm}^3$ (arrondi au dixième)."
        ]
      },
      {
        "title": "Méthode : Calculer le volume d'un prisme droit à base triangulaire",
        "example": "Un prisme droit a pour base un triangle rectangle dont les côtés de l'angle droit mesurent $6\\text{ cm}$ et $5\\text{ cm}$. Sa hauteur est $12\\text{ cm}$. Calculer son volume.",
        "steps": [
          "**Étape 1** : Aire de la base (triangle rectangle) : $\\mathcal{B} = \\frac{6 \\times 5}{2} = 15\\text{ cm}^2$.",
          "**Étape 2** : $\\mathcal{V} = \\mathcal{B} \\times h = 15 \\times 12 = 180\\text{ cm}^3$."
        ]
      },
      {
        "title": "Méthode : Calculer une contenance en litres",
        "example": "Une piscine a la forme d'un pavé droit de $8\\text{ m}$ de long, $4\\text{ m}$ de large et $1{,}5\\text{ m}$ de profondeur. Combien de litres d'eau contient-elle quand elle est pleine ?",
        "steps": [
          "**Étape 1** : $\\mathcal{V} = 8 \\times 4 \\times 1{,}5 = 48\\text{ m}^3$.",
          "**Étape 2** : $1\\text{ m}^3 = 1\\,000\\text{ L}$, donc $48\\text{ m}^3 = 48\\,000\\text{ L}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre le rayon $R$ et le diamètre $D$ ($R = D \\div 2$) !",
      "⚠️ Toujours vérifier que toutes les dimensions sont dans la même unité avant de calculer un volume.",
      "⚠️ $1\\text{ L} = 1\\text{ dm}^3$ et $1\\text{ m}^3 = 1\\,000\\text{ L}$ (et non $100\\text{ L}$).",
      "⚠️ La hauteur d'un prisme est la distance entre ses deux bases : sur un prisme « couché », elle n'est pas verticale sur le dessin.",
      "⚠️ Dans $\\pi \\times R^2$, seul le rayon est élevé au carré : pour $R = 3$, $\\pi \\times 3^2 = 9\\pi$, et non $(3\\pi)^2$.",
      "⚠️ Ne pas confondre le périmètre du cercle, $2 \\times \\pi \\times R$ (une longueur, en cm), et l'aire du disque, $\\pi \\times R^2$ (une aire, en cm²).",
      "⚠️ En perspective cavalière, on ne mesure pas les longueurs réelles sur le dessin : les fuyantes sont réduites et les angles droits des faces de côté ne sont plus droits."
    ],
    "flashcards": [
      { "q": "Quelle est la formule générale du volume d'un prisme droit ou d'un cylindre ?", "a": "$V = \\text{Aire de la base} \\times \\text{hauteur} = \\mathcal{B} \\times h$." },
      { "q": "Combien de faces latérales rectangulaires possède un prisme droit à base pentagonale (5 côtés) ?", "a": "5 faces latérales (autant que de côtés sur la base polygonale)." },
      { "q": "Combien de litres contient un volume de $12\\text{ dm}^3$ ?", "a": "$12\\text{ L}$, car $1\\text{ dm}^3 = 1\\text{ L}$." },
      { "q": "Comment obtient-on un cylindre de révolution ?", "a": "En faisant tourner un rectangle autour de l'un de ses côtés." },
      { "q": "Quelle est l'aire de la base d'un cylindre de rayon 4 cm ?", "a": "$\\pi \\times 4^2 = 16\\pi\\text{ cm}^2$." },
      { "q": "Combien d'arêtes possède un prisme droit à base triangulaire ?", "a": "$9$ arêtes ($3$ par base et $3$ arêtes latérales)." },
      { "q": "Combien de litres dans $1\\text{ m}^3$ ?", "a": "$1\\text{ m}^3 = 1\\,000\\text{ dm}^3 = 1\\,000\\text{ L}$." },
      { "q": "Quelle est l'aire d'un disque de rayon $R$ ?", "a": "$\\mathcal{A} = \\pi \\times R^2$ (et le périmètre du cercle est $2 \\times \\pi \\times R$)." },
      { "q": "Quelle est l'aire exacte d'un disque de diamètre $10\\text{ cm}$ ?", "a": "$R = 5\\text{ cm}$, donc $\\mathcal{A} = \\pi \\times 5^2 = 25\\pi\\text{ cm}^2$." },
      { "q": "En perspective cavalière, comment dessine-t-on la face avant d'un solide ?", "a": "En vraie grandeur." },
      { "q": "En perspective cavalière, que sont les fuyantes ?", "a": "Des segments parallèles entre eux, inclinés et de longueur réduite, qui représentent les arêtes perpendiculaires à la face avant." },
      { "q": "En perspective cavalière, comment dessine-t-on les arêtes cachées ?", "a": "En pointillés." }
    ]
  },
  "5D1": {
    "title": "5D1 : Statistiques : effectifs, fréquences et diagrammes",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Recueillir et organiser des données dans un tableau d'effectifs.",
      "Calculer des effectifs et des fréquences (fraction, nombre décimal, pourcentage).",
      "Lire, interpréter et construire des tableaux, des diagrammes en barres, des diagrammes circulaires et des graphiques cartésiens, sur papier ou avec un tableur.",
      "Choisir une représentation adaptée aux données et lire un graphique avec un regard critique.",
      "Calculer et interpréter la moyenne d'une liste de valeurs.",
      "Pour aller plus loin (programme de 4e) : calculer une moyenne à partir d'un tableau d'effectifs."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire et tableau d'effectifs",
        "content": "• On étudie un **caractère** (une question) sur une **population** (les personnes interrogées). Les réponses sont les **valeurs** du caractère.\n• L'**effectif** d'une valeur est le nombre de fois où elle apparaît ; l'**effectif total** $N$ est la somme de tous les effectifs.\nExemple : nombre de frères et sœurs des $25$ élèves d'une classe.\n| Nombre de frères et sœurs | 0 | 1 | 2 | 3 | 4 | Total |\n|:---|:---:|:---:|:---:|:---:|:---:|:---:|\n| Effectif | 6 | 10 | 5 | 3 | 1 | 25 |"
      },
      {
        "title": "2. Fréquence",
        "content": "La **fréquence** d'une valeur est le quotient de son effectif par l'effectif total :\n$$\\text{fréquence} = \\frac{\\text{effectif de la valeur}}{\\text{effectif total}}$$\nElle s'écrit sous forme de fraction, de nombre décimal ou de pourcentage. Dans l'exemple : $f(1) = \\frac{10}{25} = 0{,}4 = 40\\,\\%$.\n• Une fréquence est toujours comprise entre $0$ et $1$ ; la somme de toutes les fréquences vaut $1$ (soit $100\\,\\%$)."
      },
      {
        "title": "3. Moyenne",
        "content": "La **moyenne** d'une liste de valeurs est la somme de ces valeurs divisée par leur nombre :\n$$\\text{moyenne} = \\frac{\\text{somme des valeurs}}{\\text{nombre de valeurs}}$$\nExemple : Lina a couru $3$ km, $5$ km, $4$ km et $6$ km lors de ses quatre sorties.\n$$\\text{Moyenne} = \\frac{3 + 5 + 4 + 6}{4} = \\frac{18}{4} = 4{,}5 \\text{ km}$$\n• Une moyenne s'exprime dans la **même unité** que les valeurs, et ce n'est pas forcément un nombre entier.\n• La moyenne est toujours comprise entre la plus petite et la plus grande valeur ; ce n'est pas forcément une valeur de la liste.\n• Si on ajoute (ou retire) un même nombre à **toutes** les valeurs, la moyenne augmente (ou diminue) de ce nombre. Si Lina avait couru $1$ km de plus à chaque sortie, sa moyenne serait $4{,}5 + 1 = 5{,}5$ km."
      },
      {
        "title": "4. Diagrammes en barres et diagrammes circulaires",
        "content": "• **Diagramme en barres** : la hauteur de chaque barre est **proportionnelle** à l'effectif de la valeur. On lit d'abord la graduation de l'axe vertical.\n• **Diagramme circulaire** : l'angle de chaque secteur est **proportionnel** à l'effectif. Le disque entier ($360^\\circ$) représente l'effectif total :\n$$\\text{angle} = \\text{fréquence} \\times 360^\\circ$$\nDans l'exemple des frères et sœurs, la valeur $1$ (fréquence $0{,}4$) correspond à un angle de $0{,}4 \\times 360^\\circ = 144^\\circ$."
      },
      {
        "title": "5. Graphique cartésien",
        "content": "Un **graphique cartésien** représente l'**évolution** d'une grandeur en fonction d'une autre, souvent le temps : chaque donnée est un **point** repéré à l'aide de deux axes gradués.\nExemple : températures relevées au cours d'une journée.\n| Heure | 8 h | 10 h | 12 h | 14 h | 16 h | 18 h |\n|:---|:---:|:---:|:---:|:---:|:---:|:---:|\n| Température (en °C) | 6 | 10 | 14 | 18 | 16 | 12 |\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem auto; max-width:440px;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 440 288\" width=\"440\" height=\"288\" style=\"width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graphique cartésien : température en degrés Celsius selon l'heure. 8 h : 6 ; 10 h : 10 ; 12 h : 14 ; 14 h : 18 ; 16 h : 16 ; 18 h : 12.\"><line x1=\"52\" y1=\"240\" x2=\"425\" y2=\"240\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"44\" y=\"245\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">0</text><line x1=\"52\" y1=\"219.4\" x2=\"425\" y2=\"219.4\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"44\" y=\"224.4\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">2</text><line x1=\"52\" y1=\"198.8\" x2=\"425\" y2=\"198.8\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"44\" y=\"203.8\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">4</text><line x1=\"52\" y1=\"178.2\" x2=\"425\" y2=\"178.2\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"44\" y=\"183.2\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">6</text><line x1=\"52\" y1=\"157.6\" x2=\"425\" y2=\"157.6\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"44\" y=\"162.6\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">8</text><line x1=\"52\" y1=\"137\" x2=\"425\" y2=\"137\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"44\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">10</text><line x1=\"52\" y1=\"116.4\" x2=\"425\" y2=\"116.4\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"44\" y=\"121.4\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">12</text><line x1=\"52\" y1=\"95.8\" x2=\"425\" y2=\"95.8\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"44\" y=\"100.8\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">14</text><line x1=\"52\" y1=\"75.2\" x2=\"425\" y2=\"75.2\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"44\" y=\"80.2\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">16</text><line x1=\"52\" y1=\"54.6\" x2=\"425\" y2=\"54.6\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"44\" y=\"59.6\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">18</text><line x1=\"52\" y1=\"34\" x2=\"425\" y2=\"34\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"44\" y=\"39\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">20</text><line x1=\"83.1\" y1=\"34\" x2=\"83.1\" y2=\"240\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"83.1\" y=\"259\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"middle\">8 h</text><line x1=\"145.3\" y1=\"34\" x2=\"145.3\" y2=\"240\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"145.3\" y=\"259\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"middle\">10 h</text><line x1=\"207.4\" y1=\"34\" x2=\"207.4\" y2=\"240\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"207.4\" y=\"259\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"middle\">12 h</text><line x1=\"269.6\" y1=\"34\" x2=\"269.6\" y2=\"240\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"269.6\" y=\"259\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"middle\">14 h</text><line x1=\"331.8\" y1=\"34\" x2=\"331.8\" y2=\"240\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"331.8\" y=\"259\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"middle\">16 h</text><line x1=\"393.9\" y1=\"34\" x2=\"393.9\" y2=\"240\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"393.9\" y=\"259\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"middle\">18 h</text><line x1=\"52\" y1=\"240\" x2=\"433\" y2=\"240\" stroke=\"currentColor\" stroke-width=\"1.6\" /><line x1=\"52\" y1=\"240\" x2=\"52\" y2=\"24\" stroke=\"currentColor\" stroke-width=\"1.6\" /><polyline points=\"83.1,178.2 145.3,137 207.4,95.8 269.6,54.6 331.8,75.2 393.9,116.4\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\" /><circle cx=\"83.1\" cy=\"178.2\" r=\"4.5\" fill=\"#2563eb\" /><circle cx=\"145.3\" cy=\"137\" r=\"4.5\" fill=\"#2563eb\" /><circle cx=\"207.4\" cy=\"95.8\" r=\"4.5\" fill=\"#2563eb\" /><circle cx=\"269.6\" cy=\"54.6\" r=\"4.5\" fill=\"#2563eb\" /><circle cx=\"331.8\" cy=\"75.2\" r=\"4.5\" fill=\"#2563eb\" /><circle cx=\"393.9\" cy=\"116.4\" r=\"4.5\" fill=\"#2563eb\" /><text x=\"433\" y=\"281\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">Heure</text><text x=\"6\" y=\"16\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"start\">Température (en °C)</text></svg></div>\n\n• Pour **lire** une valeur : on part de l'axe horizontal, on monte jusqu'au point, puis on lit sur l'axe vertical. À $12$ h, on lit $14$ °C.\n• Pour **construire** le graphique : on trace les deux axes, on les gradue régulièrement, on indique les grandeurs et les unités, puis on place un point pour chaque donnée.\n• On peut relier les points par des segments pour mieux voir l'évolution, mais seuls les points sont des données relevées : entre deux relevés, la valeur réelle n'est pas connue."
      },
      {
        "title": "6. Choisir une représentation",
        "content": "On choisit une représentation selon ce que l'on veut montrer :\n| Ce que l'on veut montrer | Représentation adaptée | Exemple |\n|:---|:---|:---|\n| Les **parts d'un tout** | Diagramme circulaire | Répartition des élèves selon leur moyen de transport |\n| Une **comparaison** entre catégories | Diagramme en barres | Nombre de licenciés de plusieurs clubs |\n| Une **évolution** | Graphique cartésien | Température au fil d'une journée |\n\n• Un tableau donne les valeurs exactes ; un graphique fait voir d'un coup d'œil une répartition, un écart ou une tendance.\n• Pour **justifier** un choix, on dit ce que l'on veut montrer : « Je choisis un graphique cartésien, car on suit la même grandeur au fil du temps. »"
      },
      {
        "title": "7. Lire un graphique avec esprit critique",
        "content": "Un graphique peut donner une fausse impression. Avant de conclure, on regarde le titre, les unités et les graduations.\n• **L'axe vertical d'un diagramme en barres doit partir de $0$** : sinon, les hauteurs des barres ne sont plus proportionnelles aux valeurs, et une petite différence paraît énorme.\nExemple : le club A a $98$ adhérents et le club B en a $102$. Ces deux diagrammes représentent les **mêmes** données.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem auto; max-width:500px;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 500 256\" width=\"500\" height=\"256\" style=\"width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Deux diagrammes en barres des mêmes données, club A 98 adhérents et club B 102 adhérents. À gauche, l'axe vertical part de 0 et les barres ont presque la même hauteur. À droite, l'axe vertical part de 96 et la barre de B paraît trois fois plus haute que celle de A.\"><text x=\"134\" y=\"16\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"currentColor\" text-anchor=\"middle\">Axe vertical à partir de 0</text><line x1=\"42\" y1=\"226\" x2=\"234\" y2=\"226\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"35\" y=\"231\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">0</text><line x1=\"42\" y1=\"194.3\" x2=\"234\" y2=\"194.3\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"35\" y=\"199.3\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">20</text><line x1=\"42\" y1=\"162.7\" x2=\"234\" y2=\"162.7\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"35\" y=\"167.7\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">40</text><line x1=\"42\" y1=\"131\" x2=\"234\" y2=\"131\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"35\" y=\"136\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">60</text><line x1=\"42\" y1=\"99.3\" x2=\"234\" y2=\"99.3\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"35\" y=\"104.3\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">80</text><line x1=\"42\" y1=\"67.7\" x2=\"234\" y2=\"67.7\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"35\" y=\"72.7\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">100</text><line x1=\"42\" y1=\"36\" x2=\"234\" y2=\"36\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"35\" y=\"41\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">120</text><line x1=\"42\" y1=\"226\" x2=\"234\" y2=\"226\" stroke=\"currentColor\" stroke-width=\"1.6\" /><line x1=\"42\" y1=\"226\" x2=\"42\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"1.6\" /><rect x=\"67\" y=\"70.8\" width=\"46\" height=\"155.2\" fill=\"rgba(59,130,246,0.55)\" stroke=\"currentColor\" stroke-width=\"1.2\" /><text x=\"90\" y=\"245\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"middle\">Club A</text><rect x=\"163\" y=\"64.5\" width=\"46\" height=\"161.5\" fill=\"rgba(59,130,246,0.55)\" stroke=\"currentColor\" stroke-width=\"1.2\" /><text x=\"186\" y=\"245\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"middle\">Club B</text><text x=\"394\" y=\"16\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"currentColor\" text-anchor=\"middle\">Axe vertical à partir de 96</text><line x1=\"302\" y1=\"226\" x2=\"494\" y2=\"226\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"295\" y=\"231\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">96</text><line x1=\"302\" y1=\"178.5\" x2=\"494\" y2=\"178.5\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"295\" y=\"183.5\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">98</text><line x1=\"302\" y1=\"131\" x2=\"494\" y2=\"131\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"295\" y=\"136\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">100</text><line x1=\"302\" y1=\"83.5\" x2=\"494\" y2=\"83.5\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"295\" y=\"88.5\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">102</text><line x1=\"302\" y1=\"36\" x2=\"494\" y2=\"36\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"295\" y=\"41\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"end\">104</text><line x1=\"302\" y1=\"226\" x2=\"494\" y2=\"226\" stroke=\"currentColor\" stroke-width=\"1.6\" /><line x1=\"302\" y1=\"226\" x2=\"302\" y2=\"28\" stroke=\"currentColor\" stroke-width=\"1.6\" /><rect x=\"327\" y=\"178.5\" width=\"46\" height=\"47.5\" fill=\"rgba(59,130,246,0.55)\" stroke=\"currentColor\" stroke-width=\"1.2\" /><text x=\"350\" y=\"245\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"middle\">Club A</text><rect x=\"423\" y=\"83.5\" width=\"46\" height=\"142.5\" fill=\"rgba(59,130,246,0.55)\" stroke=\"currentColor\" stroke-width=\"1.2\" /><text x=\"446\" y=\"245\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"500\" fill=\"currentColor\" text-anchor=\"middle\">Club B</text></svg></div>\n\nÀ droite, la barre de B paraît $3$ fois plus haute que celle de A, alors que B n'a que $102 - 98 = 4$ adhérents de plus.\n• **Dans un diagramme circulaire**, la somme des pourcentages affichés doit valoir $100\\,\\%$.\n• **Sur un axe**, les graduations doivent être régulières : un même écart de valeurs correspond à une même distance."
      },
      {
        "title": "8. Travailler avec un tableur",
        "content": "Un **tableur** est un logiciel, utilisable sans connexion à Internet, qui fait les calculs et trace les graphiques à partir d'une feuille de **cellules**. La cellule `B2` se trouve à l'intersection de la colonne B et de la ligne $2$.\n**Activité guidée à faire sur un tableur** : le sport choisi par $20$ élèves.\n| | A | B | C | D | E | F |\n|:-:|:-:|:-:|:-:|:-:|:-:|:-:|\n| 1 | Sport | Football | Danse | Tennis | Judo | Total |\n| 2 | Effectif | 8 | 5 | 3 | 4 | |\n| 3 | Fréquence | | | | | |\n\n• **Étape 1 : saisir les données.** Recopie les textes de la ligne $1$ et de la colonne A, puis les effectifs de `B2` à `E2`.\n• **Étape 2 : calculer le total.** En `F2`, saisis `=SOMME(B2:E2)`. Toute formule commence par le signe `=`, et `B2:E2` désigne toutes les cellules de `B2` à `E2`. La cellule affiche $20$.\n• **Étape 3 : calculer les fréquences.** En `B3`, saisis `=B2/F2` : la cellule affiche $0{,}4$. Saisis de la même façon `=C2/F2` en `C3`, `=D2/F2` en `D3` et `=E2/F2` en `E3` : tu dois lire $0{,}25$, $0{,}15$ et $0{,}2$.\n• **Étape 4 : calculer une moyenne.** Dans une cellule vide, par exemple `B4`, saisis `=MOYENNE(B2:E2)` : le tableur affiche $5$, le nombre moyen d'élèves par sport.\n• **Étape 5 : insérer un graphique.** Sélectionne les cellules de `A1` à `E2`, puis choisis dans le menu d'insertion le type de graphique : barres pour comparer, secteurs pour montrer les parts d'un tout, ligne pour une évolution.\n• **Étape 6 : modifier une donnée.** Remplace $8$ par $10$ en `B2` : le total, les fréquences, la moyenne et le graphique se mettent à jour automatiquement."
      },
      {
        "title": "Pour aller plus loin : moyenne à partir d'un tableau d'effectifs",
        "content": "**Cette partie dépasse le programme de 5e : la moyenne pondérée est étudiée en 4e.**\nDans un tableau d'effectifs, chaque valeur compte autant de fois que son effectif. Dans l'exemple des frères et sœurs :\n$$\\frac{0 \\times 6 + 1 \\times 10 + 2 \\times 5 + 3 \\times 3 + 4 \\times 1}{25} = \\frac{33}{25} = 1{,}32$$\nEn moyenne, un élève de cette classe a $1{,}32$ frère ou sœur."
      },
      {
        "title": "À retenir",
        "content": "• Fréquence $= \\frac{\\text{effectif}}{\\text{effectif total}}$, entre $0$ et $1$.\n• Moyenne $= \\frac{\\text{somme des valeurs}}{\\text{nombre de valeurs}}$, dans la même unité que les valeurs.\n• Diagramme circulaire : angle $=$ fréquence $\\times 360^\\circ$.\n• Parts d'un tout : diagramme circulaire. Comparaison : diagramme en barres. Évolution : graphique cartésien.\n• Diagramme en barres : l'axe vertical doit partir de $0$.\n• Tableur : toute formule commence par `=`."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une moyenne simple",
        "example": "Calculer la moyenne des notes : 12, 15, 14, 11, 18.",
        "steps": [
          "**Somme des valeurs** : $12 + 15 + 14 + 11 + 18 = 70$.",
          "**Nombre de valeurs** : $N = 5$.",
          "**Moyenne** $= \\frac{70}{5} = 14$."
        ]
      },
      {
        "title": "Méthode : Calculer une fréquence et l'exprimer en pourcentage",
        "example": "Dans une classe de $30$ élèves, $9$ pratiquent un sport en club. Quelle est la fréquence de ces élèves ?",
        "steps": [
          "**Étape 1** : fréquence $= \\frac{9}{30}$.",
          "**Étape 2** : On simplifie ou on calcule : $\\frac{9}{30} = \\frac{3}{10} = 0{,}3$.",
          "**Étape 3** : En pourcentage : $0{,}3 = \\frac{30}{100} = 30\\,\\%$."
        ]
      },
      {
        "title": "Méthode : Construire un diagramme circulaire",
        "example": "Mode de transport de $60$ élèves : à pied $12$, bus $18$, vélo $6$, voiture $24$. Calculer les angles du diagramme circulaire.",
        "steps": [
          "**Étape 1** : Un élève correspond à $360^\\circ \\div 60 = 6^\\circ$.",
          "**Étape 2** : À pied : $12 \\times 6 = 72^\\circ$ ; bus : $18 \\times 6 = 108^\\circ$ ; vélo : $6 \\times 6 = 36^\\circ$ ; voiture : $24 \\times 6 = 144^\\circ$.",
          "**Vérification** : $72 + 108 + 36 + 144 = 360^\\circ$. On trace ensuite les secteurs au rapporteur."
        ]
      },
      {
        "title": "Méthode : Lire un graphique cartésien",
        "example": "Sur le graphique des températures du cours, quelle température lit-on à $12$ h ? De combien la température monte-t-elle entre $8$ h et $14$ h ?",
        "steps": [
          "**Étape 1** : On repère les axes et leurs graduations : les heures sur l'axe horizontal, la température (en °C) sur l'axe vertical, avec une graduation pour $2$ °C.",
          "**Étape 2** : On part de $12$ h sur l'axe horizontal, on monte jusqu'au point, puis on se déplace horizontalement jusqu'à l'axe vertical : on lit $14$ °C.",
          "**Étape 3** : On lit $6$ °C à $8$ h et $18$ °C à $14$ h. La température monte de $18 - 6 = 12$ °C."
        ]
      },
      {
        "title": "Méthode : Construire un graphique cartésien",
        "example": "On a relevé la hauteur d'une plante : $2$ cm à la semaine $0$, $5$ cm à la semaine $1$, $9$ cm à la semaine $2$ et $12$ cm à la semaine $3$. Représenter ces données par un graphique cartésien.",
        "steps": [
          "**Étape 1** : On trace deux axes perpendiculaires : le temps (en semaines) sur l'axe horizontal, la hauteur (en cm) sur l'axe vertical. On les gradue régulièrement, par exemple un carreau pour une semaine et un carreau pour $1$ cm de hauteur.",
          "**Étape 2** : On place un point pour chaque relevé. Par exemple, le point de la semaine $2$ est au-dessus de la graduation $2$, à la hauteur $9$.",
          "**Étape 3** : On peut relier les points par des segments pour mieux voir l'évolution, puis on donne un titre et on indique les unités sur les axes."
        ]
      },
      {
        "title": "Méthode : Choisir une représentation et justifier son choix",
        "example": "Une association veut montrer comment le nombre de ses adhérents a changé de 2020 à 2025. Quelle représentation choisir ?",
        "steps": [
          "**Étape 1** : On se demande ce que l'on veut mettre en évidence : des **parts d'un tout**, une **comparaison** entre catégories ou une **évolution**.",
          "**Étape 2** : Ici, on suit une même grandeur (le nombre d'adhérents) au fil du temps : c'est une **évolution**.",
          "**Conclusion** : On choisit un **graphique cartésien**, avec les années sur l'axe horizontal et le nombre d'adhérents sur l'axe vertical."
        ]
      },
      {
        "title": "Méthode : Vérifier qu'un graphique n'est pas trompeur",
        "example": "Un diagramme en barres indique $195$ clients pour le magasin A et $205$ clients pour le magasin B. Son axe vertical commence à $190$. La barre de B paraît $3$ fois plus haute que celle de A. A-t-on $3$ fois plus de clients en B ?",
        "steps": [
          "**Étape 1** : On regarde où commence l'axe vertical : à $190$, et non à $0$. Les hauteurs des barres ne sont donc pas proportionnelles aux valeurs.",
          "**Étape 2** : On compare les valeurs par le calcul : $205 - 195 = 10$ clients d'écart, et $3 \\times 195 = 585$, bien plus que $205$.",
          "**Conclusion** : Non, B n'a que $10$ clients de plus que A. Le graphique donne une fausse impression."
        ]
      },
      {
        "title": "Méthode : Écrire une formule dans un tableur",
        "example": "Quatre notes sont saisies dans les cellules de `B2` à `E2`. Quelle formule saisir en `F2` pour afficher leur moyenne ?",
        "steps": [
          "**Étape 1** : On commence par le signe `=` et on désigne la plage de cellules : `B2:E2`.",
          "**Étape 2** : On utilise la fonction qui convient : `=MOYENNE(B2:E2)`. On peut aussi écrire `=SOMME(B2:E2)/4`, car il y a quatre notes.",
          "**Attention** : la formule `=B2+C2+D2+E2/4` est fausse, car seule la cellule `E2` y est divisée par $4$."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Calculer une moyenne à partir d'un tableau d'effectifs",
        "example": "Notes d'un contrôle : la note $10$ a été obtenue $3$ fois, la note $12$ cinq fois et la note $15$ deux fois. Calculer la moyenne.",
        "steps": [
          "**Étape 1** : Effectif total : $3 + 5 + 2 = 10$ notes.",
          "**Étape 2** : Somme des notes : $10 \\times 3 + 12 \\times 5 + 15 \\times 2 = 30 + 60 + 30 = 120$.",
          "**Étape 3** : Moyenne : $\\frac{120}{10} = 12$."
        ]
      }
    ],
    "traps": [
      "⚠️ La somme des fréquences en pourcentages doit toujours être égale à 100%.",
      "⚠️ Dans un diagramme circulaire, les angles sont proportionnels aux effectifs ($360^\\circ$ pour le total).",
      "⚠️ **Pour aller plus loin** : avec un tableau d'effectifs, on divise par l'**effectif total** ($10$ notes), et non par le nombre de valeurs différentes ($3$ notes différentes).",
      "⚠️ Une fréquence ne peut pas dépasser $1$ (ni $100\\,\\%$) : si on trouve plus, on a inversé effectif et effectif total.",
      "⚠️ Une moyenne s'exprime dans la même unité que les valeurs, et ce n'est pas forcément un nombre entier.",
      "⚠️ Sur un diagramme en barres, vérifie que l'axe vertical part de $0$ avant de comparer les hauteurs des barres.",
      "⚠️ Sur un graphique cartésien, seuls les points sont des données relevées : les segments qui les relient ne donnent pas de valeur exacte.",
      "⚠️ Dans un tableur, `=A1+B1/2` ne calcule pas la moyenne de `A1` et `B1` : la division passe avant l'addition. Il faut écrire `=(A1+B1)/2` ou `=MOYENNE(A1:B1)`."
    ],
    "flashcards": [
      { "q": "Comment convertir une fréquence de 0,35 en pourcentage ?", "a": "$0{,}35 \\times 100 = 35\\,\\%$." },
      { "q": "Quel angle représente 25% dans un diagramme circulaire ?", "a": "$25\\,\\% \\times 360^\\circ = 90^\\circ$ (un quart de cercle)." },
      { "q": "Comment calcule-t-on la fréquence d'une valeur en statistique ?", "a": "$$\\text{Fréquence} = \\frac{\\text{Effectif de la valeur}}{\\text{Effectif total}}$$" },
      { "q": "Que vaut la somme de toutes les fréquences en pourcentage d'une série ?", "a": "Elle est **toujours égale à 100 %** (ou 1 sous forme décimale)." },
      { "q": "Comment calcule-t-on la moyenne des trois notes : 12, 14 et 16 ?", "a": "$$\\frac{12 + 14 + 16}{3} = \\frac{42}{3} = 14$$" },
      { "q": "Dans un diagramme circulaire représentant $20$ élèves, quel angle correspond à un élève ?", "a": "$360^\\circ \\div 20 = 18^\\circ$." },
      { "q": "Quelle représentation choisir pour montrer les parts d'un tout ?", "a": "Un **diagramme circulaire**." },
      { "q": "Quelle représentation choisir pour comparer plusieurs catégories ?", "a": "Un **diagramme en barres**." },
      { "q": "Quelle représentation choisir pour montrer une évolution au fil du temps ?", "a": "Un **graphique cartésien**." },
      { "q": "Pourquoi se méfier d'un diagramme en barres dont l'axe vertical ne part pas de $0$ ?", "a": "Les hauteurs des barres ne sont plus proportionnelles aux valeurs : une petite différence paraît énorme." },
      { "q": "Si on ajoute $2$ à toutes les valeurs d'une liste, que devient la moyenne ?", "a": "Elle augmente de $2$." },
      { "q": "Par quel signe commence toute formule dans un tableur ?", "a": "Par le signe `=`, comme dans `=SOMME(B2:E2)`." }
    ]
  },
  "5D2": {
    "title": "5D2 : Probabilités : découverte du hasard et événements",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Reconnaître une expérience aléatoire et lister ses issues.",
      "Utiliser le vocabulaire : expérience aléatoire, issue, événement, impossible, certain.",
      "Placer un événement sur une échelle de probabilité de $0$ à $1$.",
      "Calculer une probabilité dans une situation d'équiprobabilité.",
      "Faire le lien entre fréquence observée et probabilité."
    ],
    "keyPoints": [
      {
        "title": "1. Expérience aléatoire et issues",
        "content": "Une expérience est dite **aléatoire** si elle dépend du hasard et qu'on ne peut pas prévoir son résultat à l'avance, bien qu'on connaisse la liste de tous les résultats possibles (les **issues**).\nExemples : lancer un dé à six faces (issues : $1, 2, 3, 4, 5, 6$) ; lancer une pièce (pile, face) ; tirer une boule dans une urne."
      },
      {
        "title": "2. Événements",
        "content": "• Un **événement** est une condition qui peut être réalisée ou non ; il est réalisé par une ou plusieurs issues.\nExemple avec un dé : l'événement « obtenir un nombre pair » est réalisé par les issues $2$, $4$ et $6$.\n• Un événement peut n'être réalisé que par **une seule** issue : c'est le cas de « obtenir $5$ ».\n• Un événement **impossible** n'est jamais réalisé (« obtenir $7$ ») ; un événement **certain** est toujours réalisé (« obtenir un nombre inférieur à $10$ »)."
      },
      {
        "title": "3. Probabilité d'un événement",
        "content": "La **probabilité** d'un événement mesure ses chances de se réaliser. C'est un nombre compris **entre $0$ et $1$** :\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 440 90\" width=\"440\" height=\"90\" style=\"max-width:440px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Échelle des probabilités de 0 (impossible) à 1 (certain)\">\n<defs><linearGradient id=\"proba-grad\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"0\"><stop offset=\"0\" stop-color=\"#dc2626\"/><stop offset=\"0.5\" stop-color=\"#f59e0b\"/><stop offset=\"1\" stop-color=\"#059669\"/></linearGradient></defs>\n<rect x=\"30\" y=\"40\" width=\"380\" height=\"12\" rx=\"6\" fill=\"url(#proba-grad)\"/>\n<line x1=\"30\" y1=\"34\" x2=\"30\" y2=\"58\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"30\" y=\"26\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">0</text>\n<text x=\"30\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">impossible</text>\n<line x1=\"125\" y1=\"34\" x2=\"125\" y2=\"58\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"125\" y=\"26\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">0,25</text>\n<text x=\"125\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">peu probable</text>\n<line x1=\"220\" y1=\"34\" x2=\"220\" y2=\"58\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"220\" y=\"26\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">0,5</text>\n<text x=\"220\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">une chance sur deux</text>\n<line x1=\"315\" y1=\"34\" x2=\"315\" y2=\"58\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"315\" y=\"26\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">0,75</text>\n<text x=\"315\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">très probable</text>\n<line x1=\"410\" y1=\"34\" x2=\"410\" y2=\"58\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"410\" y=\"26\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">1</text>\n<text x=\"410\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">certain</text>\n</svg>\n</div>\n• Événement impossible : probabilité $0$ ; événement certain : probabilité $1$.\n• Une probabilité s'écrit en fraction, en décimal ou en pourcentage : $\\frac{1}{4} = 0{,}25 = 25\\,\\%$."
      },
      {
        "title": "4. Situation d'équiprobabilité",
        "content": "Dire que toutes les issues ont la **même chance** de se produire, c'est faire une **hypothèse** : on **suppose** qu'il y a **équiprobabilité**, en s'appuyant sur la symétrie de l'objet ou sur le mélange (dé équilibré, boules indiscernables au toucher…). Cela ne se démontre pas et peut se discuter : avec un dé truqué ou une punaise que l'on lance, les issues n'ont pas la même chance.\nSous cette hypothèse :\n$$P(\\text{événement}) = \\frac{\\text{nombre d'issues favorables}}{\\text{nombre total d'issues}}$$\nExemple : avec un dé équilibré, $P(\\text{nombre pair}) = \\frac{3}{6} = \\frac{1}{2}$.\nPour un événement du type « ne pas obtenir… », on compte simplement les issues qui le réalisent : avec un dé équilibré, « ne pas obtenir $5$ » est réalisé par $5$ issues sur $6$, sa probabilité est donc $\\frac{5}{6}$."
      },
      {
        "title": "5. Fréquence et probabilité",
        "content": "Si l'on répète une expérience un **grand nombre de fois**, la fréquence d'apparition d'un événement se rapproche de sa probabilité.\nExemple : sur $1\\,000$ lancers d'une pièce équilibrée, on obtient environ $500$ fois « pile ». Sur $10$ lancers, on peut très bien obtenir $7$ fois « pile » : le hasard crée des écarts sur peu d'essais."
      },
      {
        "title": "À retenir",
        "content": "• $0 \\le P \\le 1$ ; impossible : $0$ ; certain : $1$.\n• Équiprobabilité : $P = \\frac{\\text{issues favorables}}{\\text{issues possibles}}$.\n• Le hasard n'a pas de mémoire ; la fréquence se rapproche de la probabilité sur un grand nombre d'essais."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une probabilité",
        "example": "On tire une boule au hasard dans une urne contenant 4 boules bleues et 6 boules rouges. Quelle est la probabilité de tirer une boule bleue ?",
        "steps": [
          "**Étape 1** : On suppose que chaque boule a la même chance d'être tirée : c'est une situation d'équiprobabilité. Nombre total d'issues : $4 + 6 = 10$ boules.",
          "**Étape 2** : Issues favorables : les $4$ boules bleues.",
          "**Étape 3** : $P(\\text{bleue}) = \\frac{4}{10} = \\frac{2}{5} = 0{,}4 = 40\\,\\%$."
        ]
      },
      {
        "title": "Méthode : Probabilité avec un dé",
        "example": "On lance un dé équilibré à six faces. Quelle est la probabilité d'obtenir un multiple de $3$ ?",
        "steps": [
          "**Étape 1** : On suppose que le dé équilibré a la même chance de tomber sur chaque face. Issues possibles : $1, 2, 3, 4, 5, 6$, soit $6$ issues équiprobables.",
          "**Étape 2** : Issues favorables (multiples de $3$) : $3$ et $6$, soit $2$ issues.",
          "**Étape 3** : $P = \\frac{2}{6} = \\frac{1}{3}$."
        ]
      },
      {
        "title": "Méthode : Probabilité quand des issues se répètent",
        "example": "On choisit au hasard une lettre du mot MATHEMATIQUES. Quelle est la probabilité de tirer la lettre M ? une voyelle ?",
        "steps": [
          "**Étape 1** : Le mot compte $13$ lettres : on suppose que chaque lettre (chaque position) a la même chance d'être choisie.",
          "**Étape 2** : La lettre M apparaît $2$ fois : $P(\\text{M}) = \\frac{2}{13}$.",
          "**Étape 3** : Les voyelles sont A, E, A, I, U, E, soit $6$ lettres : $P(\\text{voyelle}) = \\frac{6}{13}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Une probabilité ne peut JAMAIS être supérieure à 1 ni inférieure à 0 !",
      "⚠️ Le hasard n'a pas de mémoire : si un dé donne 6 trois fois de suite, la probabilité d'avoir 6 au coup suivant reste toujours $\\frac{1}{6}$.",
      "⚠️ Au dénominateur, on compte **toutes** les issues : avec $3$ boules rouges et $5$ bleues, $P(\\text{rouge}) = \\frac{3}{8}$ et non $\\frac{3}{5}$.",
      "⚠️ Les issues ne sont pas toujours équiprobables : sur une roue dont les secteurs ont des tailles différentes, la formule « favorables sur possibles » ne s'applique pas directement."
    ],
    "flashcards": [
      { "q": "Quelle est la probabilité d'obtenir un 5 sur un dé équilibré à 6 faces ?", "a": "$\\frac{1}{6}$." },
      { "q": "Quelle est la probabilité d'un événement impossible ?", "a": "0." },
      { "q": "Quelle est la probabilité d'un événement certain ?", "a": "$1$ (il se produit à coup sûr)." },
      { "q": "Au lancer d'un dé cubique équilibré à 6 faces, quelle est la probabilité d'obtenir un nombre pair ?", "a": "$$\\frac{3}{6} = \\frac{1}{2} = 0{,}5 \\quad (\\text{issues favorables : } 2, 4, 6)$$" },
      { "q": "On choisit une lettre au hasard dans MATHEMATIQUES. Probabilité d'obtenir A ?", "a": "Il y a $2$ A sur $13$ lettres : $\\frac{2}{13}$." },
      { "q": "Qu'est-ce qu'une issue ?", "a": "Un résultat possible d'une expérience aléatoire (par exemple « obtenir $5$ » avec un dé)." }
    ]
  },
  "5P2": {
    "title": "5P2 : Dépendance entre grandeurs et formules",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Reconnaître une situation où une grandeur dépend d'une autre.",
      "Produire et utiliser une formule (périmètre, aire, tarif, distance parcourue).",
      "Lire, compléter et interpréter un tableau de valeurs.",
      "Construire et lire un graphique représentant une grandeur en fonction d'une autre.",
      "Distinguer une situation de proportionnalité d'une situation qui ne l'est pas."
    ],
    "keyPoints": [
      {
        "title": "1. Grandeurs dépendantes et formules",
        "content": "Dire qu'une grandeur $y$ **dépend** d'une grandeur $x$ signifie qu'à chaque valeur de $x$ correspond **une seule** valeur de $y$. Une **formule** permet de la calculer.\n• Périmètre d'un carré de côté $c$ : $P = 4c$ ; aire : $\\mathcal{A} = c^2$.\n• Rectangle de largeur $4$ et de longueur $L$ : $P = 2 \\times (L + 4)$.\n• Tarif d'un artisan : $30$ € de déplacement plus $25$ € par heure : $P = 30 + 25t$.\n• Distance parcourue à vitesse constante : $d = v \\times t$."
      },
      {
        "title": "2. Tableau de valeurs",
        "content": "Pour le tarif d'une location de vélo, $5$ € d'abonnement plus $2{,}50$ € par heure, $P = 5 + 2{,}5t$ :\n| Durée $t$ (h) | 0 | 1 | 2 | 3 | 4 | 6 |\n|:---|:---:|:---:|:---:|:---:|:---:|:---:|\n| Prix $P$ (€) | 5 | 7,50 | 10 | 12,50 | 15 | 20 |\nLe prix **dépend** de la durée mais n'est **pas proportionnel** à la durée : pour $2$ h on paie $10$ €, pour $4$ h on paie $15$ € (et non $20$ €), à cause de l'abonnement."
      },
      {
        "title": "3. Représentation graphique",
        "content": "• Chaque colonne du tableau donne un point de coordonnées $(t ; P)$ : la grandeur dont on part est en **abscisse**, la grandeur qui en dépend en **ordonnée**.\n• On place les points avec soin, puis on les relie lorsque la grandeur varie de façon continue (ici, la durée peut prendre toutes les valeurs).\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 350 250\" width=\"350\" height=\"250\" style=\"max-width:350px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Graphique du prix P en fonction de la durée t : droite passant par les points (0 ; 5) et (6 ; 20)\">\n<line x1=\"50.0\" y1=\"210\" x2=\"50.0\" y2=\"20.0\" stroke=\"rgba(100,116,139,0.25)\"/>\n<text x=\"50.0\" y=\"226\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">0</text>\n<line x1=\"93.1\" y1=\"210\" x2=\"93.1\" y2=\"20.0\" stroke=\"rgba(100,116,139,0.25)\"/>\n<text x=\"93.1\" y=\"226\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">1</text>\n<line x1=\"136.2\" y1=\"210\" x2=\"136.2\" y2=\"20.0\" stroke=\"rgba(100,116,139,0.25)\"/>\n<text x=\"136.2\" y=\"226\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">2</text>\n<line x1=\"179.2\" y1=\"210\" x2=\"179.2\" y2=\"20.0\" stroke=\"rgba(100,116,139,0.25)\"/>\n<text x=\"179.2\" y=\"226\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">3</text>\n<line x1=\"222.3\" y1=\"210\" x2=\"222.3\" y2=\"20.0\" stroke=\"rgba(100,116,139,0.25)\"/>\n<text x=\"222.3\" y=\"226\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">4</text>\n<line x1=\"265.4\" y1=\"210\" x2=\"265.4\" y2=\"20.0\" stroke=\"rgba(100,116,139,0.25)\"/>\n<text x=\"265.4\" y=\"226\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">5</text>\n<line x1=\"308.5\" y1=\"210\" x2=\"308.5\" y2=\"20.0\" stroke=\"rgba(100,116,139,0.25)\"/>\n<text x=\"308.5\" y=\"226\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">6</text>\n<line x1=\"50\" y1=\"210.0\" x2=\"330.0\" y2=\"210.0\" stroke=\"rgba(100,116,139,0.25)\"/>\n<text x=\"44\" y=\"214.0\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">0</text>\n<line x1=\"50\" y1=\"166.8\" x2=\"330.0\" y2=\"166.8\" stroke=\"rgba(100,116,139,0.25)\"/>\n<text x=\"44\" y=\"170.8\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">5</text>\n<line x1=\"50\" y1=\"123.6\" x2=\"330.0\" y2=\"123.6\" stroke=\"rgba(100,116,139,0.25)\"/>\n<text x=\"44\" y=\"127.6\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">10</text>\n<line x1=\"50\" y1=\"80.5\" x2=\"330.0\" y2=\"80.5\" stroke=\"rgba(100,116,139,0.25)\"/>\n<text x=\"44\" y=\"84.5\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">15</text>\n<line x1=\"50\" y1=\"37.3\" x2=\"330.0\" y2=\"37.3\" stroke=\"rgba(100,116,139,0.25)\"/>\n<text x=\"44\" y=\"41.3\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #0f172a)\">20</text>\n<line x1=\"50\" y1=\"210\" x2=\"330.0\" y2=\"210\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"50\" y1=\"210\" x2=\"50\" y2=\"16\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<line x1=\"50\" y1=\"166.8\" x2=\"308.5\" y2=\"37.3\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n<circle cx=\"50.0\" cy=\"166.8\" r=\"3.5\" fill=\"#2563eb\"/>\n<circle cx=\"93.1\" cy=\"145.2\" r=\"3.5\" fill=\"#2563eb\"/>\n<circle cx=\"136.2\" cy=\"123.6\" r=\"3.5\" fill=\"#2563eb\"/>\n<circle cx=\"179.2\" cy=\"102.0\" r=\"3.5\" fill=\"#2563eb\"/>\n<circle cx=\"222.3\" cy=\"80.5\" r=\"3.5\" fill=\"#2563eb\"/>\n<circle cx=\"265.4\" cy=\"58.9\" r=\"3.5\" fill=\"#2563eb\"/>\n<circle cx=\"308.5\" cy=\"37.3\" r=\"3.5\" fill=\"#2563eb\"/>\n<line x1=\"179.2\" y1=\"210\" x2=\"179.2\" y2=\"102.0\" stroke=\"#d97706\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/>\n<line x1=\"179.2\" y1=\"102.0\" x2=\"50\" y2=\"102.0\" stroke=\"#d97706\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/>\n<text x=\"54\" y=\"97.0\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#d97706\">12,50 €</text>\n<text x=\"330.0\" y=\"242\" text-anchor=\"end\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">durée t (h)</text>\n<text x=\"20\" y=\"12\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">prix P (€)</text>\n</svg>\n</div>\n• **Lire le graphique** : pour $t = 3$ h, on monte jusqu'à la courbe puis on lit sur l'axe vertical : $P = 12{,}50$ €. Inversement, pour un prix de $15$ €, on lit une durée de $4$ h.\n• La droite ne passe pas par l'origine : la situation n'est pas proportionnelle."
      },
      {
        "title": "4. Vitesse, distance et durée",
        "content": "À vitesse constante :\n$$d = v \\times t \\qquad v = \\frac{d}{t} \\qquad t = \\frac{d}{v}$$\nLes durées doivent être converties en heures décimales quand la vitesse est en km/h :\n$$15\\text{ min} = 0{,}25\\text{ h} \\qquad 30\\text{ min} = 0{,}5\\text{ h} \\qquad 45\\text{ min} = 0{,}75\\text{ h} \\qquad 20\\text{ min} = \\frac{1}{3}\\text{ h}$$"
      },
      {
        "title": "À retenir",
        "content": "• Une formule donne la valeur d'une grandeur à partir d'une autre.\n• Tableau de valeurs $\\to$ points $(x ; y)$ $\\to$ graphique.\n• Proportionnalité $\\Longleftrightarrow$ points alignés avec l'**origine** ; une partie fixe (abonnement) rend la situation non proportionnelle.\n• Des mesures représentées par des points forment un **nuage de points** : s'il est presque aligné avec l'origine, la proportionnalité est plausible."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Utiliser la relation distance-vitesse-temps",
        "example": "Un train roule à la vitesse constante de $120\\text{ km/h}$. Quelle distance parcourt-il en $2\\text{ h } 30\\text{ min}$ ?",
        "steps": [
          "**Conversion du temps** : $30\\text{ min} = 0{,}5\\text{ h}$, donc $2\\text{ h } 30\\text{ min} = 2{,}5\\text{ h}$.",
          "**Formule** : $d = v \\times t$.",
          "**Calcul** : $d = 120 \\times 2{,}5 = 300\\text{ km}$."
        ]
      },
      {
        "title": "Méthode : Établir une formule et l'utiliser",
        "example": "Une location de vélo coûte $5$ € d'abonnement plus $2{,}50$ € par heure. Exprimer le prix $P$ en fonction de la durée $t$ (en heures). Combien coûtent $3$ h ? Combien d'heures peut-on louer avec $20$ € ?",
        "steps": [
          "**Étape 1** : Pour $t$ heures, on paie $2{,}5 \\times t$ plus l'abonnement : $P = 5 + 2{,}5t$.",
          "**Étape 2** : Pour $t = 3$ : $P = 5 + 2{,}5 \\times 3 = 5 + 7{,}5 = 12{,}50$ €.",
          "**Étape 3** : Pour $P = 20$ : il reste $20 - 5 = 15$ € pour les heures, et $15 \\div 2{,}5 = 6$. On peut louer $6$ h."
        ]
      },
      {
        "title": "Méthode : Calculer une vitesse moyenne",
        "example": "Un cycliste parcourt $36\\text{ km}$ en $45\\text{ min}$. Quelle est sa vitesse moyenne en km/h ?",
        "steps": [
          "**Étape 1** : On convertit la durée en heures : $45\\text{ min} = \\frac{45}{60}\\text{ h} = 0{,}75\\text{ h}$.",
          "**Étape 2** : $v = \\frac{d}{t} = \\frac{36}{0{,}75} = 48\\text{ km/h}$.",
          "**Vérification** : $48 \\times 0{,}75 = 36\\text{ km}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas écrire $2\\text{ h } 30\\text{ min} = 2{,}3\\text{ h}$ ! On convertit les minutes en fraction d'heure : $\\frac{30}{60} = 0{,}5\\text{ h}$, donc $2{,}5\\text{ h}$.",
      "⚠️ Une relation de dépendance n'est pas obligatoirement une situation de proportionnalité.",
      "⚠️ Avec une partie fixe, doubler la durée ne double pas le prix : $P(2) = 10$ € mais $P(4) = 15$ €.",
      "⚠️ Sur un graphique, ne pas inverser les axes : la grandeur de départ va en abscisse (horizontal), celle qui en dépend en ordonnée (vertical)."
    ],
    "flashcards": [
      { "q": "Quelle est la formule liant distance, vitesse et temps ?", "a": "$d = v \\times t$." },
      { "q": "Comment convertir $15$ minutes en heure décimale ?", "a": "$\\frac{15}{60} = 0{,}25\\text{ h}$." },
      { "q": "Que signifie la phrase « la grandeur y dépend de la grandeur x » ?", "a": "Cela signifie qu'à chaque valeur choisie pour $x$, correspond une valeur déterminée pour $y$ (on dit que $y$ est fonction de $x$)." },
      { "q": "Dans un tableau de valeurs, quelle ligne contient la grandeur de départ ?", "a": "Généralement la **première ligne** (abscisses $x$), la deuxième ligne contient les valeurs dépendantes (ordonnées $y$)." },
      { "q": "Comment trace-t-on une courbe représentant une grandeur dépendante ?", "a": "On place dans un repère les points $(x ; y)$ issus du tableau de valeurs, puis on les relie à main levée avec un tracé soigné." },
      { "q": "Un train parcourt $150\\text{ km}$ en $2\\text{ h}$. Quelle est sa vitesse moyenne ?", "a": "$v = \\frac{150}{2} = 75\\text{ km/h}$." }
    ]
  },
  "5A1": {
    "title": "5A1 : Algorithmique et pensée informatique avec Scratch",
    "domain": "Algorithmique et Programmation",
    "objectives": [
      "Décomposer un problème en une suite ordonnée d'instructions (algorithme) et l'exécuter à la main.",
      "Écrire et tester un script Scratch déclenché par un événement (drapeau vert, touche pressée).",
      "Utiliser une boucle bornée (« répéter $n$ fois »).",
      "Lire un nombre saisi avec le bloc « réponse » et programmer un programme de calcul en imbriquant des blocs opérateurs.",
      "Tracer un polygone régulier : angle de rotation $\\frac{360^\\circ}{n}$."
    ],
    "keyPoints": [
      {
        "title": "1. Les bases de Scratch",
        "content": "• Le **lutin** exécute le script sur la **scène**. Sa position est repérée par ses coordonnées : $x$ entre $-240$ et $240$, $y$ entre $-180$ et $180$.\n• Un script commence par un bloc **événement** : « quand le drapeau vert est cliqué », « quand la touche espace est pressée ».\n• Blocs de **mouvement** : « avancer de $50$ pas », « tourner de $90$ degrés », « aller à x : $0$ y : $0$ ».\n• Extension **stylo** : « stylo en position d'écriture » pour laisser une trace, « effacer tout » pour repartir d'une scène vide."
      },
      {
        "title": "2. Boucles et polygones réguliers",
        "content": "Une **boucle** répète une séquence d'instructions. En 5e, on utilise la boucle « répéter $n$ fois », qui exécute les blocs qu'elle contient un nombre de fois fixé à l'avance.\nPour tracer un polygone régulier à $n$ côtés, le lutin fait un tour complet ($360^\\circ$) en $n$ rotations égales :\n```text\nrépéter n fois\n    avancer de (côté)\n    tourner de (360 / n)\n```\n| Polygone régulier | $n$ | Angle de rotation |\n|:---|:---:|:---:|\n| triangle équilatéral | 3 | $120^\\circ$ |\n| carré | 4 | $90^\\circ$ |\n| pentagone | 5 | $72^\\circ$ |\n| hexagone | 6 | $60^\\circ$ |\n| octogone | 8 | $45^\\circ$ |"
      },
      {
        "title": "3. Lire un nombre saisi : le bloc « réponse »",
        "content": "Le bloc « demander … et attendre » pose une question ; le nombre saisi est alors disponible dans le bloc **« réponse »**. En 5e, on **lit** cette donnée sans la modifier : les calculs s'écrivent en **imbriquant des blocs opérateurs**.\n```text\nquand drapeau vert cliqué\ndemander [Nombre ?] et attendre\ndire (((réponse) * 3) + 5)\n```\n**Le bloc le plus à l'intérieur est calculé en premier** : l'imbrication joue le rôle des parenthèses. Si l'utilisateur tape $4$, le lutin calcule d'abord $4 \\times 3 = 12$, puis $12 + 5 = 17$ : il dit $17$.\nEn emboîtant les blocs autrement, le résultat change : « ((réponse) + 5) * 3 » donne $(4 + 5) \\times 3 = 27$. Dans Scratch, le signe $\\times$ s'écrit « * »."
      },
      {
        "title": "4. Pour aller plus loin : variables modifiées et instructions conditionnelles (étudiées en 4e)",
        "content": "Ces notions ne sont pas au programme de 5e : elles sont étudiées en 4e.\n• Une **variable** est une « boîte » qui porte un nom et contient une valeur qui peut changer pendant le programme : « mettre score à $0$ », « ajouter $1$ à score ».\n• Le bloc « **si** … **alors** … **sinon** … » exécute une partie du script **seulement si** une condition est vraie, l'autre partie sinon.\n```text\nsi (réponse) = 12 alors\n    dire [Bravo !]\nsinon\n    dire [Essaie encore]\n```\nUne condition peut utiliser $=$, $<$, $>$ ou un capteur (« couleur touchée ? », « touche pressée ? »).\n• Il existe d'autres boucles : « répéter jusqu'à ce que … », qui s'arrête lorsqu'une condition devient vraie (boucle travaillée plus tard, en 3e), et « répéter indéfiniment »."
      },
      {
        "title": "À retenir",
        "content": "• Un script = un **événement** + une **séquence** d'instructions exécutées dans l'ordre.\n• « répéter $n$ fois » exécute $n$ fois **tout** le bloc qu'elle contient.\n• Polygone régulier à $n$ côtés : tourner de $\\frac{360^\\circ}{n}$.\n• Le bloc « réponse » contient le nombre saisi ; dans un calcul imbriqué, le bloc le plus à l'intérieur est calculé en premier."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer l'angle de rotation d'un polygone régulier",
        "example": "Quel angle de rotation faut-il programmer pour tracer un pentagone régulier ?",
        "steps": [
          "**Propriété** : Un pentagone régulier possède 5 côtés égaux.",
          "**Règle** : Pour faire un tour complet et fermer la figure, la somme des rotations extérieures vaut $360^\\circ$.",
          "**Calcul** : $\\text{Angle} = \\frac{360^\\circ}{5} = 72^\\circ$.",
          "**Script** : Répéter 5 fois : avancer de $L$, tourner de $72^\\circ$."
        ]
      },
      {
        "title": "Méthode : Prévoir le résultat d'un programme de calcul",
        "example": "Quel nombre le lutin dit-il si l'utilisateur tape $6$ ?\n```text\ndemander [Nombre ?] et attendre\ndire (((réponse + 2) * 5) - 4)\n```",
        "steps": [
          "**Étape 1** : On repère le bloc le plus à l'intérieur, « réponse + 2 ». Il est calculé en premier : $6 + 2 = 8$.",
          "**Étape 2** : On passe au bloc qui l'entoure : $8 \\times 5 = 40$.",
          "**Étape 3** : On termine par le bloc le plus à l'extérieur : $40 - 4 = 36$. Le lutin dit $36$.",
          "**Écriture littérale** : en notant $x$ le nombre saisi, le lutin dit $(x + 2) \\times 5 - 4$."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Exécuter un script à la main avec une variable",
        "example": "Quelle est la valeur finale de $x$ ?\n```text\nmettre [x] à 4\nrépéter 3 fois\n    mettre [x] à ((x) * 2)\n    ajouter 1 à [x]\n```",
        "steps": [
          "**Étape 1** : On fait un tableau de suivi. Au départ, $x = 4$.",
          "**Tour 1** : $x = 4 \\times 2 = 8$, puis $x = 8 + 1 = 9$.",
          "**Tour 2** : $x = 9 \\times 2 = 18$, puis $x = 19$.",
          "**Tour 3** : $x = 19 \\times 2 = 38$, puis $x = 39$. La valeur finale est $39$."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Utiliser une condition",
        "example": "Écrire un script qui demande un nombre entier et dit « pair » ou « impair ».",
        "steps": [
          "**Étape 1** : Un entier est pair si le reste de sa division par $2$ est $0$ ; dans Scratch, ce reste s'obtient avec le bloc « (réponse) modulo (2) ».",
          "**Étape 2** : On utilise « si ((réponse) modulo (2)) = 0 alors dire [pair] sinon dire [impair] ».",
          "**Étape 3** : On teste avec plusieurs valeurs : $14$ donne « pair », $7$ donne « impair »."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour tracer un triangle équilatéral, l'angle de rotation dans Scratch est l'angle **extérieur** ($180^\\circ - 60^\\circ = 120^\\circ$) et non l'angle intérieur de $60^\\circ$ !",
      "⚠️ Bien penser à réinitialiser la position (« aller à x:0, y:0 » et « effacer tout ») au début de chaque script.",
      "⚠️ Une instruction placée **après** une boucle (et non à l'intérieur) n'est exécutée qu'une seule fois.",
      "⚠️ Dans un calcul imbriqué, le bloc le plus à l'intérieur est calculé **en premier** : « (réponse + 5) * 3 » ne donne en général pas le même résultat que « réponse + (5 * 3) » : pour $4$, on obtient $27$ et non $19$.",
      "⚠️ **Pour aller plus loin** : dans « si … alors … sinon », **une seule** des deux parties est exécutée."
    ],
    "flashcards": [
      { "q": "De quel angle doit-on tourner pour tracer un carré dans Scratch ?", "a": "$90^\\circ$ (car $\\frac{360^\\circ}{4} = 90^\\circ$)." },
      { "q": "De quel angle doit-on tourner pour tracer un triangle équilatéral ?", "a": "$120^\\circ$ (car $\\frac{360^\\circ}{3} = 120^\\circ$)." },
      { "q": "De quel angle le lutin doit-il tourner pour tracer un hexagone régulier ?", "a": "$360^\\circ \\div 6 = 60^\\circ$." },
      { "q": "Combien de fois est exécutée l'instruction située dans un bloc « répéter 5 fois » ?", "a": "Exactement **5 fois** de suite." },
      { "q": "Que fait le bloc « avancer de 50 » dans Scratch ?", "a": "Il déplace le lutin de 50 pas dans la direction vers laquelle il est orienté." },
      { "q": "Que contient le bloc « réponse » dans Scratch ?", "a": "Ce que l'utilisateur a saisi après le bloc « demander … et attendre »." },
      { "q": "Dans le calcul imbriqué « (réponse + 2) * 3 », quel calcul est effectué en premier ?", "a": "Le bloc le plus à l'intérieur : « réponse + 2 ». On multiplie ensuite le résultat par $3$." }
    ]
  }
};

window.MATHS_EXERCISES_5E = {
  "5N1": [
    {
      "id": "5N1-1",
      "chapterId": "5N1",
      "tier": 1,
      "title": "Priorités opératoires simples",
      "statement": "Calculer la valeur de l'expression suivante :\n$$A = 7 + 4 \\times 5$$",
      "type": "exact",
      "answer": "27",
      "hint1": "La multiplication est prioritaire sur l'addition.",
      "hint2": "Effectue d'abord $4 \\times 5 = 20$, puis ajoute $7$.",
      "solution": "La multiplication est prioritaire :\n$$A = 7 + 20 = 27$$",
      "skill": "Calculer"
    },
    {
      "id": "5N1-2",
      "chapterId": "5N1",
      "tier": 2,
      "title": "Calcul avec parenthèses",
      "statement": "Calculer :\n$$B = (18 - 6) \\div 3 + 2 \\times 4$$",
      "type": "exact",
      "answer": "12",
      "hint1": "Effectue d'abord le calcul entre parenthèses, puis la division et la multiplication.",
      "hint2": "La division donne $(18 - 6) \\div 3 = 4$ et la multiplication $2 \\times 4 = 8$. Il reste à additionner.",
      "solution": "$$B = 12 \\div 3 + 8 = 4 + 8 = 12$$",
      "skill": "Calculer"
    },
    {
      "id": "5N1-3",
      "chapterId": "5N1",
      "tier": 3,
      "title": "Produit de deux parenthèses",
      "statement": "Calculer la valeur numérique de :\n$$C = (24 - 9) \\times (3 + 5)$$",
      "type": "exact",
      "answer": "120",
      "hint1": "Priorité aux parenthèses : calcule séparément le contenu de chacune.",
      "hint2": "$24 - 9 = 15$ et $3 + 5 = 8$. Il reste à effectuer le produit de ces deux résultats.",
      "solution": "$$C = 15 \\times 8 = 120$$",
      "skill": "Calculer"
    },
    {
      "id": "5N1-4",
      "chapterId": "5N1",
      "tier": 4,
      "title": "Défi : Crochets et parenthèses imbriquées",
      "statement": "Calculer la valeur exacte de l'expression :\n$$D = [48 - (3 \\times 7 - 5)] \\div 4 + 6 \\times (14 - 3 \\times 3)$$",
      "type": "exact",
      "answer": "38",
      "hint1": "Traite séparément les deux blocs : dans le crochet, commence par la parenthèse la plus intérieure ; dans la seconde parenthèse, le produit est prioritaire. Additionne seulement à la fin.",
      "hint2": "Première étape, dans le crochet : $3 \\times 7 - 5 = 16$, ce qui donne $[48 - 16]$.",
      "solution": "1. Crochet : $[48 - 16] \\div 4 = 32 \\div 4 = 8$.\n2. Produit : $6 \\times (14 - 9) = 6 \\times 5 = 30$.\n3. Total : $D = 8 + 30 = 38$.",
      "skill": "Calculer"
    }
  ],
  "5N2": [
    {
      "id": "5N2-1",
      "chapterId": "5N2",
      "tier": 1,
      "title": "Addition de deux négatifs",
      "statement": "Calculer la somme suivante :\n$$S = (-5) + (-8)$$",
      "type": "exact",
      "answer": "-13",
      "hint1": "Deux nombres négatifs s'additionnent en gardant le signe moins.",
      "hint2": "Additionne les distances à zéro, $5 + 8$, puis garde le signe commun.",
      "solution": "On additionne les distances à zéro et on garde le signe commun négatif :\n$$S = -(5 + 8) = -13$$",
      "skill": "Calculer"
    },
    {
      "id": "5N2-2",
      "chapterId": "5N2",
      "tier": 2,
      "title": "Addition de signes contraires",
      "statement": "Calculer :\n$$T = (-12) + 7$$",
      "type": "exact",
      "answer": "-5",
      "hint1": "Le nombre qui a la plus grande distance à zéro est -12 (négatif).",
      "hint2": "Le résultat sera négatif : $-(12 - 7)$.",
      "solution": "La plus grande distance à zéro est celle de -12, donc le résultat est négatif :\n$$T = -(12 - 7) = -5$$",
      "skill": "Calculer"
    },
    {
      "id": "5N2-3",
      "chapterId": "5N2",
      "tier": 3,
      "title": "Soustraction de nombres relatifs",
      "statement": "Calculer la différence :\n$$D = 15 - (-9)$$",
      "type": "exact",
      "answer": "24",
      "hint1": "Soustraire un nombre négatif revient à ajouter son opposé : $a - (-b) = a + b$.",
      "hint2": "Ici, $-(-9)$ devient $+9$ : il reste à calculer une somme de deux nombres positifs.",
      "solution": "$$D = 15 + 9 = 24$$",
      "skill": "Calculer"
    },
    {
      "id": "5N2-4",
      "chapterId": "5N2",
      "tier": 4,
      "title": "Défi : Chaîne de calculs de relatifs avec crochets",
      "statement": "Calculer la valeur exacte de l'expression :\n$$E = (-25) - [(-14) + 8 - (-6)] + (-11)$$",
      "type": "exact",
      "answer": "-36",
      "hint1": "Commence par l'intérieur du crochet ; soustraire un nombre revient à ajouter son opposé.",
      "hint2": "Première étape, dans le crochet : $(-14) + 8 = -6$. Il reste à soustraire $(-6)$, c'est-à-dire à ajouter son opposé.",
      "solution": "1. Intérieur du crochet : $(-14) + 8 + 6 = 0$.\n2. Remplacement : $E = (-25) - 0 + (-11) = -36$.",
      "skill": "Calculer"
    }
  ],
  "5N3": [
    {
      "id": "5N3-1",
      "chapterId": "5N3",
      "tier": 1,
      "title": "Fractions égales : numérateur manquant",
      "statement": "Compléter pour trouver le nombre manquant $x$ :\n$$\\frac{3}{7} = \\frac{x}{35}$$",
      "type": "exact",
      "answer": "15",
      "hint1": "Cherche par quel nombre multiplier le dénominateur 7 pour obtenir 35.",
      "hint2": "$7 \\times 5 = 35$. Multiplie aussi le numérateur 3 par le même nombre.",
      "solution": "$$\\frac{3 \\times 5}{7 \\times 5} = \\frac{15}{35} \\implies x = 15$$",
      "skill": "Calculer"
    },
    {
      "id": "5N3-2",
      "chapterId": "5N3",
      "tier": 2,
      "title": "Addition de fractions de même dénominateur",
      "statement": "Calculer sous forme de fraction :\n$$S = \\frac{4}{11} + \\frac{5}{11}$$",
      "type": "exact",
      "answer": "9/11",
      "acceptUnreduced": true,
      "hint1": "Les deux fractions ont le même dénominateur : que garde-t-on, qu'additionne-t-on ?",
      "hint2": "Garde le dénominateur 11 et additionne les numérateurs : $4 + 5$. Le dénominateur ne change pas.",
      "solution": "$$S = \\frac{4 + 5}{11} = \\frac{9}{11}$$",
      "skill": "Calculer"
    },
    {
      "id": "5N3-3",
      "chapterId": "5N3",
      "tier": 3,
      "title": "Addition avec dénominateurs multiples",
      "statement": "Calculer sous forme de fraction :\n$$A = \\frac{2}{3} + \\frac{5}{12}$$",
      "type": "exact",
      "answer": "13/12",
      "acceptUnreduced": true,
      "hint1": "Pour additionner, il faut un même dénominateur : cherche un multiple commun de 3 et de 12.",
      "hint2": "$12 = 3 \\times 4$ : multiplie le numérateur et le dénominateur de $\\frac{2}{3}$ par 4, puis additionne les numérateurs.",
      "solution": "$$A = \\frac{2 \\times 4}{3 \\times 4} + \\frac{5}{12} = \\frac{8}{12} + \\frac{5}{12} = \\frac{13}{12}$$",
      "skill": "Calculer"
    },
    {
      "id": "5N3-4",
      "chapterId": "5N3",
      "tier": 4,
      "title": "Défi : Enchaînement de 3 fractions avec parenthèses",
      "statement": "Calculer sous forme de fraction :\n$$F = \\frac{7}{4} - \\left(\\frac{1}{2} + \\frac{3}{8}\\right)$$",
      "type": "exact",
      "answer": "7/8",
      "acceptUnreduced": true,
      "hint1": "Commence par la parenthèse : écris les deux fractions avec un même dénominateur. Fais de même ensuite pour la soustraction.",
      "hint2": "Première étape, dans la parenthèse : $\\frac{1}{2} = \\frac{4}{8}$.",
      "solution": "$$F = \\frac{7}{4} - \\left(\\frac{1}{2} + \\frac{3}{8}\\right) = \\frac{7}{4} - \\left(\\frac{4}{8} + \\frac{3}{8}\\right) = \\frac{7}{4} - \\frac{7}{8} = \\frac{14}{8} - \\frac{7}{8} = \\frac{7}{8}.$$",
      "skill": "Calculer"
    },
    {
      "id": "5N3-5",
      "chapterId": "5N3",
      "tier": 3,
      "title": "Addition avec dénominateurs quelconques",
      "statement": "Calculer sous forme de fraction :\n$$A = \\frac{3}{10} + \\frac{5}{6}$$",
      "type": "exact",
      "answer": "17/15",
      "acceptUnreduced": true,
      "hint1": "Aucun dénominateur n'est multiple de l'autre : récite les multiples de 10 jusqu'à trouver un multiple de 6.",
      "hint2": "$30$ est un multiple commun de $10$ et $6$ : on a $\\frac{3}{10} = \\frac{9}{30}$. Transforme $\\frac{5}{6}$ de la même façon, additionne.",
      "solution": "$30 = 10 \\times 3 = 6 \\times 5$ est un multiple commun de $10$ et $6$.\n$$A = \\frac{3 \\times 3}{10 \\times 3} + \\frac{5 \\times 5}{6 \\times 5} = \\frac{9}{30} + \\frac{25}{30} = \\frac{34}{30} = \\frac{34 \\div 2}{30 \\div 2} = \\frac{17}{15}$$",
      "skill": "Calculer"
    },
    {
      "id": "5N3-6",
      "chapterId": "5N3",
      "tier": 2,
      "title": "Écrire une fraction avec sa partie entière",
      "statement": "Compléter avec l'entier $x$ manquant :\n$$\\frac{23}{4} = x + \\frac{3}{4}$$",
      "type": "exact",
      "answer": "5",
      "hint1": "Effectue la division euclidienne du numérateur par le dénominateur : le quotient est la partie entière.",
      "hint2": "Cherche combien de fois $4$ entre dans $23$ : il doit rester $3$.",
      "solution": "$23 = 4 \\times 5 + 3$, donc $$\\frac{23}{4} = \\frac{20}{4} + \\frac{3}{4} = 5 + \\frac{3}{4}$$ d'où $x = 5$.",
      "skill": "Calculer"
    }
  ],
  "5N4": [
    {
      "id": "5N4-1",
      "chapterId": "5N4",
      "tier": 1,
      "title": "Écriture sous la forme d'un carré ou d'un cube",
      "statement": "Écrire le produit suivant avec un exposant (écrire par exemple 2^3) :\n$$A = 6 \\times 6 \\times 6$$",
      "type": "exact",
      "answer": "6^3",
      "hint1": "Un carré ou un cube s'écrit avec un exposant : le nombre répété s'écrit en bas.",
      "hint2": "Compte combien de fois le facteur 6 apparaît dans le produit : ce nombre est l'exposant.",
      "solution": "$$6 \\times 6 \\times 6 = 6^3$$ (« $6$ au cube »).",
      "skill": "Calculer"
    },
    {
      "id": "5N4-2",
      "chapterId": "5N4",
      "tier": 2,
      "title": "Retrouver le nombre positif dont le carré est donné",
      "statement": "Retrouver le nombre positif $x$ dont le carré est $81$ :\n$$x^2 = 81 \\implies x = \\dots$$",
      "type": "exact",
      "answer": "9",
      "hint1": "Quel nombre entier positif multiplié par lui-même donne 81 dans les tables de multiplication ?",
      "hint2": "$8 \\times 8 = 64$ est trop petit : essaie l'entier suivant.",
      "solution": "Comme $9 \\times 9 = 81$, le nombre positif dont le carré est 81 est **9**.",
      "skill": "Raisonner"
    },
    {
      "id": "5N4-3",
      "chapterId": "5N4",
      "tier": 3,
      "title": "Comparaison de deux puissances : 2³ et 3²",
      "statement": "Comparer $2^3$ et $3^2$. Choisir le bon symbole pour compléter :\n$$2^3 \\dots 3^2$$",
      "type": "mcq",
      "options": [
        "$<$",
        "$>$",
        "$=$"
      ],
      "correctIndex": 0,
      "answer": "$<$",
      "hint1": "Calcule séparément chaque puissance : $2^3 = 2 \\times 2 \\times 2$ et $3^2 = 3 \\times 3$.",
      "hint2": "On obtient $2 \\times 2 \\times 2 = 8$ d'un côté ; calcule l'autre de la même façon, puis compare les deux nombres.",
      "solution": "1. $2^3 = 2 \\times 2 \\times 2 = 8$.\n2. $3^2 = 3 \\times 3 = 9$.\nComme $8 < 9$, on conclut : **$2^3 < 3^2$**.",
      "skill": "Raisonner"
    },
    {
      "id": "5N4-4",
      "chapterId": "5N4",
      "tier": 4,
      "title": "Calcul complexe et priorités opératoires avec puissances",
      "statement": "Calculer la valeur exacte de l'expression suivante en respectant les priorités opératoires :\n$$A = 4 \\times (2 + 3)^2 - 3 \\times 2^3$$",
      "type": "exact",
      "answer": "76",
      "hint1": "Rappel des priorités : parenthèses, puis carrés et cubes, puis multiplications, enfin soustraction.",
      "hint2": "$(2 + 3)^2 = 5^2 = 25$ et $2^3 = 8$. Il reste $4 \\times 25 - 3 \\times 8$, à calculer en commençant par les multiplications.",
      "solution": "1. Parenthèses : $(2 + 3) = 5$.\n2. Carré et cube : $5^2 = 25$ et $2^3 = 8$.\n3. Multiplications : $4 \\times 25 = 100$ et $3 \\times 8 = 24$.\n4. Soustraction : $$A = 100 - 24 = 76$$.",
      "skill": "Calculer"
    },
    {
      "id": "5N4-5",
      "chapterId": "5N4",
      "tier": 2,
      "title": "Écrire un nombre comme un cube",
      "statement": "Compléter avec le nombre entier positif $x$ :\n$$64 = x^3$$",
      "type": "exact",
      "answer": "4",
      "hint1": "Essaie les cubes connus : un cube, c'est un nombre multiplié trois fois par lui-même.",
      "hint2": "$3^3 = 27$ est trop petit : essaie l'entier suivant.",
      "solution": "$4 \\times 4 \\times 4 = 64$, donc $64 = 4^3$ et $x = 4$. On a aussi $64 = 8^2$ : $64$ est à la fois un carré et un cube.",
      "skill": "Calculer"
    },
    {
      "id": "5N4-6",
      "chapterId": "5N4",
      "tier": 3,
      "title": "Carré d'un nombre décimal",
      "statement": "Calculer :\n$$A = 1{,}5^2$$",
      "type": "exact",
      "answer": "2,25",
      "hint1": "Écris ce carré sous la forme d'un produit de deux facteurs égaux à $1{,}5$.",
      "hint2": "Calcule $15 \\times 15$, puis place la virgule : le résultat a deux chiffres après la virgule.",
      "solution": "$$A = 1{,}5^2 = 1{,}5 \\times 1{,}5 = 2{,}25$$",
      "skill": "Calculer"
    }
  ],
  "5P1": [
    {
      "id": "5P1-1",
      "chapterId": "5P1",
      "tier": 1,
      "title": "Coefficient de proportionnalité",
      "statement": "Le prix payé est proportionnel à la masse de pommes achetée.\n\n| Masse de pommes (kg) | $4$ |\n|:-:|:-:|\n| Prix (€) | $28$ |\n\nQuel est le coefficient de proportionnalité pour passer de la masse au prix, en € par kg ?",
      "type": "exact",
      "answer": "7",
      "hint1": "Le coefficient est le nombre par lequel on multiplie la masse (1re ligne) pour obtenir le prix (2e ligne).",
      "hint2": "Cherche ce nombre : $4 \\times \\dots = 28$.",
      "solution": "$$k = \\frac{28}{4} = 7$$\nLe coefficient de proportionnalité vaut $7$ € par kg : un kilogramme de pommes coûte $7$ €.",
      "skill": "Calculer"
    },
    {
      "id": "5P1-2",
      "chapterId": "5P1",
      "tier": 2,
      "title": "Quatrième proportionnelle",
      "statement": "Le prix de $3\\text{ kg}$ de fruits est de $6$ €.\nQuel est le prix de $7\\text{ kg}$ de ces mêmes fruits ?",
      "type": "exact",
      "answer": "14",
      "hint1": "Commence par chercher le prix d'un seul kilogramme.",
      "hint2": "Un kilogramme coûte $6 \\div 3 = 2$ €. Il reste à calculer le prix de 7 kg.",
      "solution": "**Étape 1** : prix d'un kilogramme : $6 \\div 3 = 2$ €.\n**Étape 2** : prix de $7\\text{ kg}$ : $7 \\times 2 = 14$ €.\n**Conclusion** : $7\\text{ kg}$ de ces fruits coûtent $14$ €.",
      "skill": "Calculer"
    },
    {
      "id": "5P1-3",
      "chapterId": "5P1",
      "tier": 3,
      "title": "Calcul d'un pourcentage d'une quantité",
      "statement": "Dans un collège de $180$ élèves, $20\\%$ des élèves sont externes.\nCombien d'élèves sont externes ?",
      "type": "exact",
      "answer": "36",
      "hint1": "Prendre $20\\%$ d'une quantité, c'est la multiplier par $\\frac{20}{100}$.",
      "hint2": "Astuce : $10\\%$ de 180, c'est $18$ ; or $20\\%$ est le double de $10\\%$.",
      "solution": "$$N = 180 \\times 0{,}20 = 36\\text{ élèves}$$",
      "skill": "Calculer"
    },
    {
      "id": "5P1-4",
      "chapterId": "5P1",
      "tier": 4,
      "title": "Défi : Calcul de distance réelle sur carte à l'échelle",
      "statement": "Sur une carte au $1 / 25\\,000$, la distance entre deux clochers est de $8\\text{ cm}$.\n**Quelle est la distance réelle sur le terrain en kilomètres ?**",
      "type": "exact",
      "answer": "2",
      "hint1": "Sur une carte au $1 / 25\\,000$, $1\\text{ cm}$ sur la carte représente $25\\,000\\text{ cm}$ en réalité.",
      "hint2": "Calcule la distance réelle en cm : $8 \\times 25\\,000$, puis convertis en km sachant que $1\\text{ km} = 100\\,000\\text{ cm}$.",
      "solution": "1. Distance en cm : $8 \\times 25\\,000 = 200\\,000\\text{ cm}$.\n2. En km : $200\\,000 / 100\\,000 = 2\\text{ km}$.",
      "skill": "Résoudre"
    }
  ],
  "5G3": [
    {
      "id": "5G3-1",
      "chapterId": "5G3",
      "tier": 1,
      "title": "Somme des angles d'un triangle",
      "statement": "Dans un triangle $ABC$, on donne $\\widehat{A} = 50^\\circ$ et $\\widehat{B} = 70^\\circ$.\nQuelle est la mesure de l'angle $\\widehat{C}$ en degrés ?",
      "type": "exact",
      "answer": "60",
      "hint1": "La somme des 3 angles vaut $180^\\circ$.",
      "hint2": "Additionne d'abord les deux angles connus, puis retire le résultat de $180^\\circ$.",
      "solution": "$$\\widehat{C} = 180^\\circ - (50^\\circ + 70^\\circ) = 180^\\circ - 120^\\circ = 60^\\circ$$",
      "skill": "Calculer"
    },
    {
      "id": "5G3-2",
      "chapterId": "5G3",
      "tier": 2,
      "title": "Angles dans un triangle isocèle",
      "statement": "Soit un triangle $EFG$ isocèle en $E$ tel que l'angle au sommet $\\widehat{E} = 70^\\circ$.\nQuelle est la mesure de l'angle à la base $\\widehat{EFG}$ en degrés ?",
      "type": "exact",
      "answer": "55",
      "hint1": "Dans un triangle isocèle, les deux angles à la base ont la même mesure, et les trois angles totalisent $180^\\circ$.",
      "hint2": "Retire d'abord l'angle au sommet : $180^\\circ - 70^\\circ = 110^\\circ$. Ce qui reste se partage à égalité entre les deux angles à la base.",
      "solution": "$$\\widehat{EFG} = \\frac{180^\\circ - 70^\\circ}{2} = \\frac{110^\\circ}{2} = 55^\\circ$$",
      "skill": "Calculer"
    },
    {
      "id": "5G3-3",
      "chapterId": "5G3",
      "tier": 3,
      "title": "Angles alternes-internes et parallélisme",
      "statement": "Deux droites $(d)$ et $(d')$ sont coupées par une sécante $(s)$. Les deux angles alternes-internes ainsi formés mesurent $72^\\circ$ et $74^\\circ$.\nLes droites $(d)$ et $(d')$ sont-elles parallèles ?",
      "type": "mcq",
      "options": [
        "Non, car si elles étaient parallèles, ces angles alternes-internes seraient égaux",
        "Oui, car $72^\\circ$ et $74^\\circ$ sont presque égaux",
        "Oui, car deux angles alternes-internes sont toujours égaux",
        "On ne peut rien conclure sans connaître les angles correspondants"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Si deux droites parallèles sont coupées par une sécante, les angles alternes-internes ont la même mesure. Ici $72^\\circ \\neq 74^\\circ$ : les droites ne sont donc pas parallèles.",
        "Non : en mathématiques, « presque égaux » ne suffit pas. Une différence de $2^\\circ$ suffit à prouver que les droites ne sont pas parallèles.",
        "Non : les angles alternes-internes ne sont égaux que lorsque les droites sont parallèles.",
        "Non : les angles alternes-internes suffisent pour conclure."
      ],
      "hint1": "Propriété : si deux droites parallèles sont coupées par une sécante, alors les angles alternes-internes ont la même mesure.",
      "hint2": "Ici les deux angles n'ont pas la même mesure : que peut-on en déduire ?",
      "solution": "On sait que : si deux droites parallèles sont coupées par une sécante, alors elles forment des angles alternes-internes de même mesure.\nOr ici $72^\\circ \\neq 74^\\circ$. Donc les droites $(d)$ et $(d')$ **ne sont pas parallèles**.",
      "skill": "Raisonner"
    },
    {
      "id": "5G3-4",
      "chapterId": "5G3",
      "tier": 4,
      "title": "Défi : Déduction d'angle sur figure combinée",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 270 175\" width=\"270\" height=\"175\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"20,150 130,150 84.6,95.8\" fill=\"rgba(59, 130, 246, 0.04)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <polygon points=\"130,150 240,150 164.9,19.9\" fill=\"rgba(59, 130, 246, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <path d=\"M 77.7,101.6 L 83.5,108.5 L 90.4,102.7\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" />\n  <path d=\"M 46,150 A 26,26 0 0 0 39.9,133.3\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" />\n  <path d=\"M 135.7,128.7 A 22,22 0 0 0 115.9,133.1\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" />\n  <path d=\"M 158.7,43.1 A 24,24 0 0 0 176.9,40.7\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" />\n  <path d=\"M 214,150 A 26,26 0 0 1 227,127.5\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"1.8\" />\n  <circle cx=\"20\" cy=\"150\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"130\" cy=\"150\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"240\" cy=\"150\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"84.6\" cy=\"95.8\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <circle cx=\"164.9\" cy=\"19.9\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <text x=\"78\" y=\"88\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n  <text x=\"10\" y=\"158\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n  <text x=\"130\" y=\"168\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n  <text x=\"177\" y=\"20\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">D</text>\n  <text x=\"252\" y=\"158\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">E</text>\n  <text x=\"57\" y=\"141\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">40°</text>\n  <text x=\"122\" y=\"123\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">55°</text>\n  <text x=\"170\" y=\"58\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">45°</text>\n  <text x=\"209\" y=\"137\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">?</text>\n</svg>\n</div>\n\nLes points $B$, $C$ et $E$ sont alignés dans cet ordre. Le triangle $ABC$ est rectangle en $A$, avec $\\widehat{ABC} = 40^\\circ$. Le point $D$ est situé du même côté de la droite $(BE)$ que $A$, avec $\\widehat{ACD} = 55^\\circ$. Dans le triangle $CDE$, on a $\\widehat{CDE} = 45^\\circ$.\n**Quelle est la mesure de l'angle $\\widehat{CED}$ en degrés ?**",
      "type": "exact",
      "answer": "60",
      "hint1": "Les points $B$, $C$ et $E$ sont alignés : les trois angles de sommet $C$ forment un angle plat.",
      "hint2": "Calcule d'abord $\\widehat{ACB}$ dans le triangle rectangle, puis $\\widehat{DCE}$, avant de passer au triangle $CDE$.",
      "solution": "1. Dans le triangle $ABC$ rectangle en $A$ : $\\widehat{ACB} = 90^\\circ - 40^\\circ = 50^\\circ$.\n2. Les points $B$, $C$ et $E$ étant alignés : $\\widehat{DCE} = 180^\\circ - 50^\\circ - 55^\\circ = 75^\\circ$.\n3. Dans le triangle $CDE$ : $\\widehat{CED} = 180^\\circ - 75^\\circ - 45^\\circ = 60^\\circ$.",
      "skill": "Résoudre"
    }
  ],
  "5G4": [
    {
      "id": "5G4-1",
      "chapterId": "5G4",
      "tier": 1,
      "title": "Aire d'un triangle (base et hauteur)",
      "statement": "Dans un triangle $ABC$, le côté $[BC]$ mesure $10\\text{ cm}$ et la hauteur issue de $A$ mesure $6\\text{ cm}$.\nCalculer l'aire du triangle $ABC$ en $\\text{cm}^2$.",
      "type": "exact",
      "answer": "30",
      "hint1": "Aire d'un triangle : $\\mathcal{A} = \\dfrac{\\text{base} \\times \\text{hauteur relative à cette base}}{2}$.",
      "hint2": "Ici la base est $BC = 10\\text{ cm}$ et la hauteur relative à $[BC]$ mesure $6\\text{ cm}$.",
      "solution": "$$\\mathcal{A} = \\frac{BC \\times h}{2} = \\frac{10 \\times 6}{2} = \\frac{60}{2} = 30\\text{ cm}^2$$",
      "skill": "Calculer"
    },
    {
      "id": "5G4-2",
      "chapterId": "5G4",
      "tier": 2,
      "title": "Droites remarquables : les médiatrices",
      "statement": "Dans un triangle, les trois médiatrices des côtés sont concourantes. Que représente leur point de concours ?",
      "type": "mcq",
      "options": [
        "Le centre du cercle circonscrit au triangle",
        "Le centre de gravité du triangle",
        "L'orthocentre du triangle",
        "Le milieu du plus grand côté"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Chaque point de la médiatrice de $[AB]$ est à égale distance de $A$ et de $B$ : le point de concours est à la même distance des trois sommets, c'est le centre du cercle qui passe par $A$, $B$ et $C$.",
        "Non : le centre de gravité est le point de concours des trois médianes.",
        "Non : l'orthocentre est le point de concours des trois hauteurs.",
        "Non : ce n'est vrai que dans un triangle rectangle (le centre du cercle circonscrit est alors le milieu de l'hypoténuse)."
      ],
      "hint1": "La médiatrice d'un segment est l'ensemble des points situés à égale distance de ses deux extrémités.",
      "hint2": "Un point situé sur les trois médiatrices est donc à la même distance des trois sommets.",
      "solution": "Le point $O$ de concours des médiatrices vérifie $OA = OB$ (médiatrice de $[AB]$) et $OB = OC$ (médiatrice de $[BC]$). Donc $OA = OB = OC$ : $O$ est le **centre du cercle circonscrit** au triangle.\nÀ retenir : médiatrices → cercle circonscrit ; médianes → centre de gravité ; hauteurs → orthocentre.",
      "skill": "Raisonner"
    },
    {
      "id": "5G4-3",
      "chapterId": "5G4",
      "tier": 3,
      "title": "Construction d'un triangle : un cas limite",
      "statement": "On veut construire un triangle $ABC$ tel que $AB = 4\\text{ cm}$, $BC = 6\\text{ cm}$ et $AC = 10\\text{ cm}$. Que peut-on affirmer ?",
      "type": "mcq",
      "options": [
        "Le triangle est « aplati » : $AC = AB + BC$, donc $B$ appartient au segment $[AC]$",
        "On obtient un vrai triangle car $10 < 4 + 6 + 10$",
        "On obtient un vrai triangle car le plus grand côté est $[AC]$",
        "Aucune figure n'est possible car $10 > 4 + 6$"
      ],
      "correctIndex": 0,
      "explanations": [
        "Exact ! Comme $AB + BC = 4 + 6 = 10 = AC$, les points $A$, $B$, $C$ sont alignés, avec $B$ sur le segment $[AC]$.",
        "Non : il faut comparer le plus grand côté à la somme des **deux autres** côtés seulement.",
        "Non : connaître le plus grand côté ne suffit pas, il faut le comparer à la somme des deux autres.",
        "Non : $4 + 6 = 10$, donc $10$ n'est pas plus grand que $4 + 6$. Les deux petits côtés mis bout à bout ont exactement la longueur du grand : on obtient une figure, mais les trois points sont alignés."
      ],
      "hint1": "Compare la plus grande longueur ($10\\text{ cm}$) à la somme des deux autres.",
      "hint2": "$4 + 6 = 10$ : que se passe-t-il quand il y a égalité ?",
      "solution": "Le plus grand côté mesure $AC = 10\\text{ cm}$ et $AB + BC = 4 + 6 = 10\\text{ cm}$.\nPuisque $AC = AB + BC$, le point $B$ appartient au segment $[AC]$ : les trois points sont alignés et le triangle est **aplati**.\nRappel : trois longueurs ne permettent pas toujours de construire un triangle. Ici, les arcs de rayons $4\\text{ cm}$ et $6\\text{ cm}$ tracés aux extrémités du segment $[AC]$ se touchent en un seul point du segment.",
      "skill": "Raisonner"
    },
    {
      "id": "5G4-4",
      "chapterId": "5G4",
      "tier": 4,
      "title": "Défi : Calculer une hauteur grâce à l'aire",
      "statement": "Dans un triangle $ABC$, on a $BC = 12\\text{ cm}$ et la hauteur issue de $A$ mesure $5\\text{ cm}$. De plus, $AC = 10\\text{ cm}$.\n**Quelle est la longueur, en cm, de la hauteur issue de $B$ (relative au côté $[AC]$) ?**",
      "type": "exact",
      "answer": "6",
      "hint1": "Calcule d'abord l'aire du triangle avec la base $[BC]$ : $\\dfrac{12 \\times 5}{2}$.",
      "hint2": "L'aire est la même quelle que soit la base choisie : $\\dfrac{AC \\times h_B}{2} = 30$.",
      "solution": "1. Avec la base $[BC]$ : $\\mathcal{A} = \\dfrac{12 \\times 5}{2} = 30\\text{ cm}^2$.\n2. Avec la base $[AC]$ et la hauteur $h_B$ issue de $B$ : $\\dfrac{10 \\times h_B}{2} = 30$, donc $5 \\times h_B = 30$.\n3. $h_B = 30 \\div 5 = 6\\text{ cm}$.",
      "skill": "Résoudre"
    }
  ],
  "5G6": [
    {
      "id": "5G6-1",
      "chapterId": "5G6",
      "tier": 1,
      "title": "Volume d'un prisme droit (aire de base donnée)",
      "statement": "Un prisme droit a une base d'aire $15\\text{ cm}^2$ et une hauteur de $8\\text{ cm}$.\nCalculer son volume en $\\text{cm}^3$.",
      "type": "exact",
      "answer": "120",
      "hint1": "Volume d'un prisme droit : $\\mathcal{V} = \\mathcal{A}_{\\text{base}} \\times h$.",
      "hint2": "L'aire de la base et la hauteur sont déjà données : il reste à multiplier $15$ par $8$.",
      "solution": "$$\\mathcal{V} = \\mathcal{A}_{\\text{base}} \\times h = 15 \\times 8 = 120\\text{ cm}^3$$",
      "skill": "Calculer"
    },
    {
      "id": "5G6-2",
      "chapterId": "5G6",
      "tier": 2,
      "title": "Volume d'un prisme à base triangulaire",
      "statement": "Un prisme droit a pour base un triangle rectangle dont les côtés de l'angle droit mesurent $3\\text{ cm}$ et $4\\text{ cm}$. Sa hauteur mesure $10\\text{ cm}$.\nCalculer son volume en $\\text{cm}^3$.",
      "type": "exact",
      "answer": "60",
      "hint1": "Commence par l'aire de la base : c'est un triangle rectangle, $\\mathcal{A} = \\dfrac{3 \\times 4}{2}$.",
      "hint2": "Multiplie ensuite l'aire de la base par la hauteur du prisme ($10\\text{ cm}$).",
      "solution": "1. Aire de la base : $\\mathcal{A}_{\\text{base}} = \\dfrac{3 \\times 4}{2} = 6\\text{ cm}^2$.\n2. Volume : $\\mathcal{V} = 6 \\times 10 = 60\\text{ cm}^3$.",
      "skill": "Calculer"
    },
    {
      "id": "5G6-3",
      "chapterId": "5G6",
      "tier": 3,
      "title": "Volume d'un cylindre de révolution (valeur exacte)",
      "statement": "Un cylindre de révolution a un rayon de base $r = 3\\text{ cm}$ et une hauteur $h = 10\\text{ cm}$.\nDonner la valeur exacte de son volume sous la forme $n\\pi\\text{ cm}^3$ (saisir le nombre $n$).",
      "type": "exact",
      "answer": "90",
      "hint1": "Volume d'un cylindre : $\\mathcal{V} = \\pi r^2 \\times h$ (aire du disque de base × hauteur).",
      "hint2": "$r^2 = 3^2 = 9$, puis multiplie par la hauteur.",
      "solution": "$$\\mathcal{V} = \\pi \\times r^2 \\times h = \\pi \\times 3^2 \\times 10 = \\pi \\times 9 \\times 10 = 90\\pi\\text{ cm}^3$$\n(soit environ $282{,}7\\text{ cm}^3$).",
      "skill": "Calculer"
    },
    {
      "id": "5G6-4",
      "chapterId": "5G6",
      "tier": 4,
      "title": "Défi : Contenance d'une citerne en litres",
      "statement": "Une citerne a la forme d'un cylindre de révolution de rayon $0{,}5\\text{ m}$ et de hauteur $2\\text{ m}$.\n**Quelle est sa contenance en litres, arrondie au litre ?**\n(Rappel : $1\\text{ m}^3 = 1\\,000\\text{ L}$.)",
      "type": "exact",
      "answer": "1571",
      "hint1": "Calcule le volume en $\\text{m}^3$ avec $\\mathcal{V} = \\pi \\times r^2 \\times h$, puis convertis-le en litres. N'arrondis qu'à la fin.",
      "hint2": "Première étape : $r^2 = 0{,}5^2 = 0{,}25$.",
      "solution": "1. Volume : $\\mathcal{V} = \\pi \\times 0{,}5^2 \\times 2 = \\pi \\times 0{,}25 \\times 2 = 0{,}5\\pi\\text{ m}^3 \\approx 1{,}5708\\text{ m}^3$.\n2. Conversion : $1\\text{ m}^3 = 1\\,000\\text{ dm}^3 = 1\\,000\\text{ L}$, donc $\\mathcal{V} \\approx 1{,}5708 \\times 1\\,000 = 1\\,570{,}8\\text{ L}$.\n3. La citerne contient environ **1 571 litres**.",
      "skill": "Résoudre"
    }
  ],
  "5D1": [
    {
      "id": "5D1-1",
      "chapterId": "5D1",
      "tier": 1,
      "title": "Calcul de l'effectif total",
      "statement": "Dans un club, il y a 8 benjamins, 12 minimes et 5 cadets.\nQuel est l'effectif total ?",
      "type": "exact",
      "answer": "25",
      "hint1": "L'effectif total est le nombre de personnes de toutes les catégories réunies.",
      "hint2": "Additionne les trois effectifs : $8 + 12 + 5$. Commence par $8 + 12$.",
      "solution": "$$N = 8 + 12 + 5 = 25$$",
      "skill": "Calculer"
    },
    {
      "id": "5D1-2",
      "chapterId": "5D1",
      "tier": 2,
      "title": "Fréquence sous forme de fraction",
      "statement": "Sur 20 élèves, 6 font du théâtre. Quelle est la fréquence de ce groupe ? (Donner une fraction)",
      "type": "exact",
      "answer": "3/10",
      "acceptUnreduced": true,
      "hint1": "Une fréquence se calcule ainsi : effectif du groupe divisé par effectif total.",
      "hint2": "Repère bien les deux nombres : l'effectif du groupe se met au numérateur, l'effectif total au dénominateur.",
      "solution": "$$\\text{Fréquence} = \\frac{6}{20} = \\frac{3}{10}$$",
      "skill": "Calculer"
    },
    {
      "id": "5D1-3",
      "chapterId": "5D1",
      "tier": 3,
      "title": "Fréquence en pourcentage",
      "statement": "Dans une classe de 25 élèves, 7 portent des lunettes.\nQuel est le pourcentage d'élèves portant des lunettes ? (Nombre sans %)",
      "type": "exact",
      "answer": "28",
      "hint1": "Pour obtenir un pourcentage, calcule la fréquence puis multiplie-la par 100.",
      "hint2": "$\\frac{7}{25} \\times 100$ : remarque que $100 = 25 \\times 4$, donc il reste à calculer $7 \\times 4$.",
      "solution": "$$\\frac{7}{25} \\times 100 = 28\\%$$",
      "skill": "Calculer"
    },
    {
      "id": "5D1-4",
      "chapterId": "5D1",
      "tier": 4,
      "title": "Défi : Angle dans un diagramme circulaire",
      "statement": "Dans une classe de 20 élèves, 5 élèves viennent à vélo.\n**Quelle doit être la mesure en degrés de l'angle du secteur circulaire représentant ce groupe ?**",
      "type": "exact",
      "answer": "90",
      "hint1": "L'angle du secteur est proportionnel à l'effectif : le cercle complet ($360^\\circ$) représente toute la classe.",
      "hint2": "Le groupe représente $\\frac{5}{20}$ de la classe, c'est-à-dire un quart : prends cette fraction de $360^\\circ$.",
      "solution": "$$\\text{Angle} = \\frac{5}{20} \\times 360^\\circ = 0{,}25 \\times 360^\\circ = 90^\\circ$$",
      "skill": "Résoudre"
    },
    {
      "id": "5D1-5",
      "chapterId": "5D1",
      "tier": 2,
      "title": "Moyenne d'une liste de valeurs",
      "statement": "Un cycliste parcourt $12$ km, $18$ km, $9$ km et $15$ km lors de ses quatre sorties.\n**Quelle est la distance moyenne d'une sortie, en km ?**",
      "type": "exact",
      "answer": "13,5",
      "hint1": "La moyenne est la somme des valeurs divisée par le nombre de valeurs. Elle n'est pas forcément entière.",
      "hint2": "La somme des quatre distances est $54$ km : il reste à la diviser par le nombre de sorties.",
      "solution": "$$\\text{Moyenne} = \\frac{12 + 18 + 9 + 15}{4} = \\frac{54}{4} = 13{,}5 \\text{ km}$$",
      "skill": "Calculer"
    },
    {
      "id": "5D1-6",
      "chapterId": "5D1",
      "tier": 2,
      "title": "Choisir une représentation",
      "statement": "Un club d'échecs a relevé son nombre d'inscrits chaque mois, de septembre à juin.\n**Quelle représentation est la plus adaptée pour montrer comment ce nombre a évolué ?**",
      "type": "mcq",
      "options": [
        "Un diagramme circulaire",
        "Un diagramme en barres",
        "Un graphique cartésien"
      ],
      "correctIndex": 2,
      "answer": "Un graphique cartésien",
      "hint1": "Demande-toi ce que l'on veut montrer : des parts d'un tout, une comparaison entre catégories ou une évolution.",
      "hint2": "Ici, on suit une même grandeur au fil des mois : il s'agit d'une évolution dans le temps.",
      "solution": "On suit le nombre d'inscrits au fil du temps : c'est une évolution.\n**Conclusion** : on choisit un graphique cartésien.",
      "skill": "Représenter"
    },
    {
      "id": "5D1-7",
      "chapterId": "5D1",
      "tier": 3,
      "title": "Tableur : calculer une moyenne",
      "statement": "Dans une feuille de tableur, les cellules `B2`, `C2` et `D2` contiennent trois notes.\n**Quelle formule permet d'afficher la moyenne de ces trois notes ?**",
      "type": "mcq",
      "options": [
        "=B2+C2+D2/3",
        "=SOMME(B2:D2)",
        "=SOMME(B2:D2)/3",
        "=SOMME(B2:D2)*3"
      ],
      "correctIndex": 2,
      "answer": "=SOMME(B2:D2)/3",
      "hint1": "La moyenne est la somme des valeurs divisée par leur nombre : la division doit porter sur toute la somme.",
      "hint2": "Dans une formule, la division passe avant l'addition, comme sur papier. Cherche la formule où la somme des trois cellules est calculée d'abord.",
      "solution": "La fonction SOMME additionne les trois cellules de la plage `B2:D2`, puis on divise le résultat par $3$.\nLa formule `=B2+C2+D2/3` est fausse, car seule `D2` y est divisée par $3$.\n**Conclusion** : on saisit `=SOMME(B2:D2)/3`.",
      "skill": "Calculer"
    },
    {
      "id": "5D1-8",
      "chapterId": "5D1",
      "tier": 3,
      "title": "Lecture critique : un diagramme trompeur",
      "statement": "Sur une affiche, un diagramme en barres indique $310$ abonnés pour le club A et $330$ abonnés pour le club B. L'axe vertical commence à $300$, si bien que la barre de B paraît $3$ fois plus haute que celle de A.\n**Le club B a-t-il vraiment $3$ fois plus d'abonnés que le club A ?**",
      "type": "mcq",
      "options": [
        "Oui, car la barre de B est $3$ fois plus haute que celle de A.",
        "Oui, car $330$ est plus grand que $310$.",
        "Non : B n'a que $20$ abonnés de plus, et l'axe qui ne part pas de $0$ fausse la comparaison des hauteurs.",
        "Non : le club A a plus d'abonnés que le club B."
      ],
      "correctIndex": 2,
      "answer": "Non : B n'a que $20$ abonnés de plus, et l'axe qui ne part pas de $0$ fausse la comparaison des hauteurs.",
      "hint1": "Compare les nombres d'abonnés par le calcul, sans te fier aux hauteurs des barres. Regarde aussi où commence l'axe vertical.",
      "hint2": "Calcule la différence entre les deux nombres d'abonnés, puis compare $330$ au triple de $310$.",
      "solution": "L'axe vertical commence à $300$ et non à $0$ : les hauteurs des barres ne sont pas proportionnelles aux nombres d'abonnés.\nÉcart : $330 - 310 = 20$ abonnés. Or $3 \\times 310 = 930$, bien plus que $330$.\n**Conclusion** : non, B n'a que $20$ abonnés de plus que A.",
      "skill": "Raisonner"
    }
  ],
  "5N5": [
  {
    "id": "5N5-1",
    "chapterId": "5N5",
    "tier": 1,
    "title": "Réduction d'écriture littérale",
    "statement": "Réduire l'expression littérale suivante :\n$$A = 4x + 7x$$",
    "type": "exact",
    "answer": "11x",
    "hint1": "Les deux termes contiennent $x$ : on peut les regrouper en additionnant leurs coefficients.",
    "hint2": "$4x + 7x = (4 + 7)x$ : calcule la somme dans la parenthèse.",
    "solution": "$$A = (4 + 7)x = 11x$$",
    "skill": "Calculer"
  },
  {
    "id": "5N5-2",
    "chapterId": "5N5",
    "tier": 2,
    "title": "Calcul de la valeur d'une expression",
    "statement": "Calculer la valeur numérique de l'expression $B = 3x - 5$ pour $x = 6$ :",
    "type": "exact",
    "answer": "13",
    "hint1": "Remplace $x$ par 6 dans l'expression, en rétablissant le signe $\\times$ entre 3 et $x$.",
    "hint2": "$B = 3 \\times 6 - 5$ : la multiplication est prioritaire, calcule-la avant de retirer 5.",
    "solution": "$$B = 3 \\times 6 - 5 = 18 - 5 = 13$$",
    "skill": "Calculer"
  },
  {
    "id": "5N5-2b",
    "chapterId": "5N5",
    "tier": 2,
    "title": "Factoriser une expression",
    "statement": "Factoriser complètement l'expression suivante :\n$$A = 6x + 15$$\nÉcris ta réponse sous la forme d'un produit, par exemple $2(3x+1)$.",
    "type": "exact",
    "answer": "3(2x+5)",
    "answerType": "factorisation",
    "hint1": "Cherche le plus grand nombre qui divise à la fois les deux coefficients : ce sera le facteur commun, à écrire devant la parenthèse.",
    "hint2": "Écris chaque terme sous la forme d'un produit par ce facteur : $6x = 3 \\times 2x$. Fais de même pour le second terme.",
    "solution": "$6x = 3 \\times 2x$ et $15 = 3 \\times 5$, donc :\n$$A = 3 \\times 2x + 3 \\times 5 = 3(2x + 5)$$\nVérification en développant : $3(2x + 5) = 6x + 15$.",
    "skill": "Calculer"
  },
  {
    "id": "5N5-2c",
    "chapterId": "5N5",
    "tier": 2,
    "title": "Somme ou produit ?",
    "statement": "Quelle est la nature de l'expression $A = 2(x + 1) + 3$ ?",
    "type": "mcq",
    "options": [
      "Une somme",
      "Un produit",
      "Une différence",
      "Un quotient"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : la dernière opération effectuée est l'addition de 3, donc A est une somme de termes 2(x + 1) et 3.",
      "Erreur : la multiplication par 2 est effectuée avant l'addition de 3, ce n'est pas la dernière opération.",
      "Il n'y a aucune soustraction dans cette expression.",
      "Il n'y a aucune division dans cette expression."
    ],
    "hint1": "Choisis une valeur de $x$ et suis les calculs en respectant les priorités : l'expression porte le nom de la dernière opération.",
    "hint2": "On calcule d'abord la parenthèse $x + 1$, puis on multiplie par 2. Quelle opération reste-t-il à faire ?",
    "solution": "On calcule $x + 1$, on multiplie par $2$, puis on ajoute $3$. La dernière opération est une addition : $A$ est une **somme**, de termes $2(x + 1)$ et $3$.",
    "skill": "Représenter"
  },
  {
    "id": "5N5-3",
    "chapterId": "5N5",
    "tier": 3,
    "title": "Tester une égalité : $2x + 7 = 19$",
    "statement": "On considère l'égalité $2x + 7 = 19$. Le nombre 6 en est-il une solution ?",
    "type": "mcq",
    "options": [
      "Oui, car $2 \\times 6 + 7 = 12 + 7 = 19$",
      "Non, car $2 \\times 6 + 7 = 26$",
      "Non, car $19 - 7 = 11$",
      "Oui, car $6 + 7 = 13$"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : en remplaçant x par 6, le membre de gauche vaut 19, égal au membre de droite.",
      "Erreur : 2x signifie 2 multiplié par x et non 2 collé à 6.",
      "Erreur de calcul : 19 - 7 = 12.",
      "Erreur d'inattention."
    ],
    "hint1": "Remplace $x$ par 6 dans le membre de gauche : $2 \\times 6 + 7$.",
    "hint2": "Effectue d'abord la multiplication, puis compare le résultat à 19 : si c'est le même nombre, 6 est solution.",
    "solution": "Pour $x = 6$, $2 \\times 6 + 7 = 12 + 7 = 19$. L'égalité est vérifiée, 6 est bien solution.",
    "skill": "Raisonner"
  },
  {
    "id": "5N5-3b",
    "chapterId": "5N5",
    "tier": 3,
    "title": "Réfuter avec un contre-exemple",
    "statement": "Léa affirme : « Pour n'importe quel nombre $x$, on a $x^2 = 2x$. » Elle l'a vérifié pour $x = 2$. Quelle réponse prouve qu'elle a tort ?",
    "type": "mcq",
    "options": [
      "Pour $x = 3$ : $3^2 = 9$ et $2 \\times 3 = 6$",
      "Pour $x = 2$ : $2^2 = 4$ et $2 \\times 2 = 4$",
      "Pour $x = 0$ : $0^2 = 0$ et $2 \\times 0 = 0$",
      "On ne peut pas le prouver sans essayer tous les nombres"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : pour x = 3, les deux membres sont différents. Un seul contre-exemple suffit à réfuter l'affirmation.",
      "Pour x = 2, les deux membres sont égaux : cette valeur ne contredit pas Léa.",
      "Pour x = 0, les deux membres sont égaux : cette valeur ne contredit pas Léa.",
      "Pour réfuter une affirmation générale, une seule valeur qui ne convient pas suffit."
    ],
    "hint1": "Un contre-exemple est une valeur de $x$ pour laquelle les deux membres ne sont pas égaux.",
    "hint2": "$x^2$ signifie $x \\times x$ et $2x$ signifie $2 \\times x$. Compare ces deux résultats dans chaque proposition.",
    "solution": "Pour $x = 3$, $x^2 = 9$ et $2x = 6$ : les deux membres sont différents. Ce **contre-exemple** suffit à prouver que l'affirmation de Léa est fausse, même si elle est vraie pour $x = 2$ et pour $x = 0$.",
    "skill": "Raisonner"
  },
  {
    "id": "5N5-3c",
    "chapterId": "5N5",
    "tier": 3,
    "title": "Tester une égalité : $3x + 4 = 30$",
    "statement": "On considère l'égalité $3x + 4 = 30$. Le nombre 6 en est-il une solution ?",
    "type": "mcq",
    "options": [
      "Non, car $3 \\times 6 + 4 = 18 + 4 = 22 \\neq 30$",
      "Oui, car $3 \\times (6 + 4) = 3 \\times 10 = 30$",
      "Non, car $3 + 6 + 4 = 13 \\neq 30$",
      "Non, car $36 + 4 = 40 \\neq 30$"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : le membre de gauche vaut 22 pour x = 6, ce qui est différent de 30.",
      "Erreur de priorité : la multiplication se fait avant l'addition, 3x + 4 ne se calcule pas comme 3(x + 4).",
      "Erreur : 3x signifie 3 multiplié par x, et non 3 + x.",
      "Erreur : 3x signifie 3 multiplié par x ; on ne colle pas le 3 et le 6."
    ],
    "hint1": "Remplace $x$ par 6 dans le membre de gauche, en rétablissant le signe $\\times$ entre 3 et $x$.",
    "hint2": "Effectue d'abord la multiplication $3 \\times 6$, puis ajoute 4 et compare le résultat à 30.",
    "solution": "Pour $x = 6$, $3 \\times 6 + 4 = 18 + 4 = 22$. Comme $22 \\neq 30$, l'égalité n'est pas vérifiée : 6 n'est pas solution.",
    "skill": "Raisonner"
  },
  {
    "id": "5N5-3d",
    "chapterId": "5N5",
    "tier": 3,
    "title": "Démontrer : somme de deux nombres pairs",
    "statement": "On veut démontrer que la somme de deux nombres pairs est toujours un nombre pair. On note $2n$ et $2p$ ces deux nombres, où $n$ et $p$ sont des nombres entiers. Quel raisonnement est correct ?",
    "type": "mcq",
    "options": [
      "$2n + 2p = 2(n + p)$ : c'est $2$ multiplié par un entier, donc un nombre pair",
      "$2 + 4 = 6$ et $6$ est pair, donc c'est toujours vrai",
      "$2n + 2p = 4np$ : c'est un multiple de $4$, donc un nombre pair",
      "$2n + 2p = 2np$ : c'est $2$ multiplié par un entier, donc un nombre pair"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : on met 2 en facteur et n + p est un entier, ce qui vaut pour tous les nombres pairs.",
      "Un exemple ne prouve pas qu'une propriété est vraie dans tous les cas.",
      "Erreur : on ne peut pas transformer cette somme en produit de cette façon. Pour n = 1 et p = 2, 2n + 2p = 6 et 4np = 8.",
      "Erreur : une somme de termes en n et en p ne se réduit pas ainsi. Pour n = 1 et p = 2, 2n + 2p = 6 et 2np = 4."
    ],
    "hint1": "Un nombre pair est le double d'un entier. Cherche à écrire la somme sous la forme $2 \\times$ (un entier).",
    "hint2": "$2n$ et $2p$ ont un facteur commun : mets-le devant une parenthèse. Attention, un exemple isolé ne démontre rien.",
    "solution": "$2n$ et $2p$ ont pour facteur commun $2$ : $2n + 2p = 2(n + p)$. Comme $n + p$ est un nombre entier, la somme est le double d'un entier : c'est un nombre pair, quels que soient les deux nombres pairs choisis.",
    "skill": "Raisonner"
  },
  {
    "id": "5N5-4",
    "chapterId": "5N5",
    "tier": 4,
    "title": "Pour aller plus loin : inconnue dans les deux membres",
    "statement": "**Pour aller plus loin** (notion étudiée en 4e, voir la dernière section du cours). Trouver la valeur de $x$ telle que :\n$$7x - 5 = 3x + 19$$",
    "type": "exact",
    "answer": "6",
    "hint1": "On peut ajouter ou soustraire un même nombre, ou un même terme en $x$, aux deux membres : regroupe les termes en $x$ dans un membre et les nombres dans l'autre.",
    "hint2": "En soustrayant $3x$ aux deux membres puis en ajoutant 5 : $4x = 24$.",
    "solution": "On soustrait $3x$ aux deux membres : $4x - 5 = 19$. On ajoute $5$ aux deux membres : $4x = 24$. On divise les deux membres par $4$ :\n$$x = \\frac{24}{4} = 6$$\nVérification : $7 \\times 6 - 5 = 37$ et $3 \\times 6 + 19 = 37$.",
    "skill": "Résoudre"
  },
  {
    "id": "5N5-4b",
    "chapterId": "5N5",
    "tier": 4,
    "title": "Démontrer avec un programme de calcul",
    "statement": "On considère le programme de calcul : choisir un nombre, lui ajouter $4$, multiplier le résultat par $3$, puis soustraire $12$. On note $x$ le nombre choisi. Pour démontrer ce qu'on obtient à la fin, écrire le résultat en fonction de $x$, sous forme réduite.",
    "type": "exact",
    "answer": "3x",
    "hint1": "Traduis le programme étape par étape avec $x$, puis développe avec la distributivité simple.",
    "hint2": "Le programme donne $3(x + 4) - 12$. Développe d'abord le produit, puis réduis.",
    "solution": "Le programme donne $3(x + 4) - 12 = 3x + 12 - 12 = 3x$.\nQuel que soit le nombre choisi, le résultat est son triple : c'est démontré pour tous les nombres, et non sur un seul exemple.",
    "skill": "Raisonner"
  }
],
  "5G1": [
  {
    "id": "5G1-1",
    "chapterId": "5G1",
    "tier": 1,
    "title": "Abscisse sur une droite graduée",
    "statement": "Sur une droite graduée d'origine $O$, le point $A$ a pour abscisse $-4$. Quelle est la distance $OA$ ?",
    "type": "exact",
    "answer": "4",
    "hint1": "La distance à zéro d'un nombre est toujours positive.",
    "hint2": "Compte le nombre de graduations entre 0 et le point $A$, sans tenir compte du signe.",
    "solution": "La distance entre l'origine et le point d'abscisse $-4$ est égale à $4$ unités.",
    "skill": "Représenter"
  },
  {
    "id": "5G1-2",
    "chapterId": "5G1",
    "tier": 2,
    "title": "Lecture de coordonnées dans le plan",
    "statement": "Dans un repère orthogonal, le point $M$ a pour coordonnées $(3 ; -5)$. Quelle est l'ordonnée de ce point ?",
    "type": "exact",
    "answer": "-5",
    "hint1": "Les coordonnées s'écrivent sous la forme $(\\text{abscisse} ; \\text{ordonnée})$.",
    "hint2": "L'ordonnée est le nombre écrit en deuxième position, après le point-virgule.",
    "solution": "L'abscisse est 3 (axe horizontal) et l'ordonnée est $-5$ (axe vertical).",
    "skill": "Représenter"
  },
  {
    "id": "5G1-3",
    "chapterId": "5G1",
    "tier": 3,
    "title": "Symétrie par rapport aux axes",
    "statement": "Dans un repère orthogonal, le point $A$ a pour coordonnées $(2 ; 5)$. Quelles sont les coordonnées de son symétrique $A'$ par rapport à l'axe des abscisses ?",
    "type": "mcq",
    "options": [
      "(2 ; -5)",
      "(-2 ; 5)",
      "(-2 ; -5)",
      "(5 ; 2)"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : la symétrie par rapport à l'axe des abscisses conserve l'abscisse et change le signe de l'ordonnée.",
      "Ceci est le symétrique par rapport à l'axe des ordonnées.",
      "Ceci est le symétrique par rapport à l'origine.",
      "Ceci est une permutation des coordonnées."
    ],
    "hint1": "Par la symétrie d'axe des abscisses, le point reste sur la même verticale (même abscisse) et passe de l'autre côté de l'axe : que devient son ordonnée ?",
    "hint2": "L'abscisse ne change pas. L'ordonnée est remplacée par son opposée : quel est l'opposé de 5 ?",
    "solution": "L'abscisse reste $x = 2$ et l'ordonnée devient l'opposée : $y = -5$, donc $A'(2 ; -5)$.",
    "skill": "Raisonner"
  },
  {
    "id": "5G1-4",
    "chapterId": "5G1",
    "tier": 4,
    "title": "Défi : Milieu d'un segment",
    "statement": "Dans un repère, on donne $A(2 ; 4)$ et $B(8 ; 10)$. Quelle est l'abscisse du milieu $I$ du segment $[AB]$ ?",
    "type": "exact",
    "answer": "5",
    "hint1": "Place les abscisses 2 et 8 sur une droite graduée : le milieu est à égale distance des deux.",
    "hint2": "Entre 2 et 8, il y a 6 unités. Le milieu est à 3 unités de chaque extrémité : ajoute-les à 2.",
    "solution": "$$x_I = \\frac{2 + 8}{2} = \\frac{10}{2} = 5$$",
    "skill": "Calculer"
  }
],
  "5G2": [
  {
    "id": "5G2-1",
    "chapterId": "5G2",
    "tier": 1,
    "title": "Définition de la symétrie centrale",
    "statement": "Si le point $B$ est le symétrique du point $A$ par rapport au point $O$, que peut-on affirmer ?",
    "type": "mcq",
    "options": [
      "Le point O est le milieu du segment [AB]",
      "Le point A est le milieu du segment [OB]",
      "Les droites (AB) et (AO) sont perpendiculaires",
      "Le segment [AB] mesure la moitié de [OA]"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : par définition de la symétrie de centre O, O est le milieu du segment formé par le point et son image.",
      "Faux, c'est O qui est au milieu.",
      "Faux, les points A, O et B sont alignés.",
      "Faux, AB mesure le double de OA."
    ],
    "hint1": "La symétrie centrale est un demi-tour autour du centre O.",
    "hint2": "Après le demi-tour, $A$ et $B$ sont à la même distance de $O$, de part et d'autre de $O$ : où se trouve $O$ sur le segment qui les relie ?",
    "solution": "Par définition, $O$ est le milieu du segment $[AB]$.",
    "skill": "Raisonner"
  },
  {
    "id": "5G2-2",
    "chapterId": "5G2",
    "tier": 2,
    "title": "Conservation des longueurs",
    "statement": "Un segment $[AB]$ mesure $7{,}5\\text{ cm}$. Par la symétrie centrale de centre $O$, quelle est la longueur de son symétrique $[A'B']$ en cm ?",
    "type": "exact",
    "answer": "7,5",
    "hint1": "La symétrie centrale conserve les longueurs.",
    "hint2": "Un segment et son symétrique ont exactement la même longueur : relis la longueur donnée dans l'énoncé.",
    "solution": "La symétrie centrale conserve les longueurs, donc $A'B' = AB = 7{,}5\\text{ cm}$.",
    "skill": "Raisonner"
  },
  {
    "id": "5G2-3",
    "chapterId": "5G2",
    "tier": 3,
    "title": "Conservation des angles et des aires",
    "statement": "Un triangle a une aire de $18\\text{ cm}^2$ et possède un angle de $52^\\circ$. Quelles sont l'aire et la mesure de l'angle homologue dans le triangle symétrique ?",
    "type": "mcq",
    "options": [
      "Aire = 18 cm² et angle = 52°",
      "Aire = 36 cm² et angle = 104°",
      "Aire = 9 cm² et angle = 26°",
      "Aire = 18 cm² et angle = 128°"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : la symétrie centrale conserve les angles et les aires.",
      "Faux : il n'y a pas d'agrandissement.",
      "Faux : il n'y a pas de réduction.",
      "Faux : l'angle n'est pas modifié."
    ],
    "hint1": "La symétrie centrale ne déforme pas les figures.",
    "hint2": "Une figure et sa symétrique sont superposables : que peux-tu en déduire pour l'aire ? pour un angle ?",
    "solution": "La symétrie centrale conserve les mesures d'angles et les aires, donc l'aire reste $18\\text{ cm}^2$ et l'angle $52^\\circ$.",
    "skill": "Raisonner"
  },
  {
    "id": "5G2-4",
    "chapterId": "5G2",
    "tier": 4,
    "title": "Défi : Centre de symétrie d'un quadrilatère",
    "statement": "Un quadrilatère possède un centre de symétrie qui est le point d'intersection de ses diagonales. Il s'agit obligatoirement d'un...",
    "type": "mcq",
    "options": [
      "Parallélogramme",
      "Trapèze quelconque",
      "Cerf-volant",
      "Triangle"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : tout quadrilatère ayant un centre de symétrie est un parallélogramme.",
      "Un trapèze n'a pas de centre de symétrie en général.",
      "Un cerf-volant a un axe de symétrie mais pas de centre.",
      "Un triangle n'a pas 4 côtés."
    ],
    "hint1": "Un centre de symétrie échange les côtés opposés : qu'en déduis-tu sur ces côtés ?",
    "hint2": "Ces côtés opposés sont donc parallèles et de même longueur : quel quadrilatère a cette propriété ?",
    "solution": "Un quadrilatère qui admet un centre de symétrie est un parallélogramme.",
    "skill": "Raisonner"
  },
  {
    "id": "5G2-5",
    "chapterId": "5G2",
    "tier": 2,
    "title": "Aire d'une frise de triangles",
    "statement": "Une frise est formée de $12$ triangles qui ne se chevauchent pas : chaque triangle est l'image du précédent par un demi-tour. Le premier triangle a une aire de $4{,}5\\text{ cm}^2$. Quelle est l'aire totale de la frise en $\\text{cm}^2$ ?",
    "type": "exact",
    "answer": "54",
    "hint1": "Un demi-tour conserve les aires : que peux-tu dire de l'aire de chaque triangle de la frise ?",
    "hint2": "Les $12$ triangles ont tous la même aire que le premier : il reste à additionner ces $12$ aires égales.",
    "solution": "Le demi-tour conserve les aires : les $12$ triangles ont tous une aire de $4{,}5\\text{ cm}^2$. L'aire totale est donc $12 \\times 4{,}5 = 54\\text{ cm}^2$.",
    "skill": "Calculer"
  }
],
  "5G5": [
  {
    "id": "5G5-1",
    "chapterId": "5G5",
    "tier": 1,
    "title": "Propriété des côtés d'un parallélogramme",
    "statement": "Dans un parallélogramme $ABCD$, on sait que $AB = 9\\text{ cm}$ et $BC = 5\\text{ cm}$. Quelle est la longueur du côté $CD$ en cm ?",
    "type": "exact",
    "answer": "9",
    "hint1": "Dans un parallélogramme, les côtés opposés ont la même longueur.",
    "hint2": "Dans $ABCD$, le côté opposé à $[CD]$ est $[AB]$.",
    "solution": "Les côtés opposés $[AB]$ et $[CD]$ ont la même longueur, donc $CD = AB = 9\\text{ cm}$.",
    "skill": "Calculer"
  },
  {
    "id": "5G5-2",
    "chapterId": "5G5",
    "tier": 2,
    "title": "Aire d'un parallélogramme",
    "statement": "Calculer l'aire d'un parallélogramme de base $b = 8\\text{ cm}$ et de hauteur relative $h = 4{,}5\\text{ cm}$ en $\\text{cm}^2$ :",
    "type": "exact",
    "answer": "36",
    "hint1": "Formule : $\\text{Aire} = \\text{base} \\times \\text{hauteur}$.",
    "hint2": "Multiplie la base $8$ par la hauteur $4{,}5$. Astuce : $8 \\times 4{,}5 = 4 \\times 9$.",
    "solution": "$$\\text{Aire} = 8 \\times 4{,}5 = 36\\text{ cm}^2$$",
    "skill": "Calculer"
  },
  {
    "id": "5G5-3",
    "chapterId": "5G5",
    "tier": 3,
    "title": "Reconnaître un losange",
    "statement": "Un parallélogramme dont les diagonales sont perpendiculaires est un...",
    "type": "mcq",
    "options": [
      "Losange",
      "Rectangle",
      "Trapèze",
      "Carré"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : les diagonales perpendiculaires caractérisent le losange parmi les parallélogrammes.",
      "Le rectangle a des diagonales de même longueur.",
      "Un trapèze n'est pas forcément un parallélogramme.",
      "Un carré est un losange particulier : il faudrait en plus des diagonales de même longueur."
    ],
    "hint1": "Passe en revue les parallélogrammes particuliers : lequel est caractérisé par des diagonales perpendiculaires (et non par des diagonales de même longueur) ?",
    "hint2": "Un rectangle a des diagonales de même longueur. Un parallélogramme dont les diagonales sont perpendiculaires a ses quatre côtés de même longueur : quel nom porte ce quadrilatère ?",
    "solution": "Si un parallélogramme a ses diagonales perpendiculaires, alors c'est un losange.",
    "skill": "Raisonner"
  },
  {
    "id": "5G5-4",
    "chapterId": "5G5",
    "tier": 4,
    "title": "Défi : Diagonales du rectangle",
    "statement": "Dans un rectangle $ABCD$ de centre $O$, la diagonale $[AC]$ mesure $10\\text{ cm}$. Que vaut la longueur $OB$ en cm ?",
    "type": "exact",
    "answer": "5",
    "hint1": "Les diagonales d'un rectangle ont la même longueur et se coupent en leur milieu.",
    "hint2": "$[BD]$ mesure donc autant que $[AC]$, et $O$ est son milieu : $OB$ est la moitié de $BD$.",
    "solution": "Les diagonales ont même longueur ($BD = AC = 10\\text{ cm}$) et se coupent en leur milieu $O$, donc $OB = \\frac{10}{2} = 5\\text{ cm}$.",
    "skill": "Calculer"
  }
],
  "5D2": [
  {
    "id": "5D2-1",
    "chapterId": "5D2",
    "tier": 1,
    "title": "Probabilité d'une issue avec un dé",
    "statement": "On lance un dé équilibré à 6 faces numérotées de 1 à 6. Quelle est la probabilité d'obtenir le chiffre 4 ?",
    "type": "mcq",
    "options": [
      "1/6",
      "4/6",
      "1/4",
      "1/2"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : il y a 1 face avec le 4 sur 6 faces au total.",
      "Erreur : 4 est la valeur sur la face, pas le nombre d'issues favorables.",
      "Erreur de dénominateur.",
      "Erreur."
    ],
    "hint1": "Compte les issues favorables (faces portant le chiffre 4) et le nombre total d'issues, toutes équiprobables.",
    "hint2": "Probabilité = nombre d'issues favorables ÷ nombre total d'issues. Combien de faces portent le chiffre 4 ?",
    "solution": "$$P(4) = \\frac{1}{6}$$",
    "skill": "Calculer"
  },
  {
    "id": "5D2-2",
    "chapterId": "5D2",
    "tier": 2,
    "title": "Tirage dans une urne",
    "statement": "Une boîte contient 3 jetons rouges, 5 jetons verts et 2 jetons jaunes. On tire un jeton au hasard. Quelle est la probabilité de tirer un jeton vert sous forme décimale ?",
    "type": "exact",
    "answer": "0,5",
    "hint1": "Une probabilité se calcule ainsi : nombre d'issues favorables ÷ nombre total d'issues.",
    "hint2": "Il y a $3 + 5 + 2 = 10$ jetons en tout, dont 5 verts : écris la fraction, puis donne son écriture décimale.",
    "solution": "$$P(\\text{Vert}) = \\frac{5}{10} = 0{,}5$$",
    "skill": "Calculer"
  },
  {
    "id": "5D2-3",
    "chapterId": "5D2",
    "tier": 1,
    "title": "Événement certain et impossible",
    "statement": "On lance un dé à 6 faces numérotées de 1 à 6. Quelle est la probabilité d'obtenir un nombre strictement supérieur à 6 ?",
    "type": "exact",
    "answer": "0",
    "hint1": "Compte les faces du dé qui portent un nombre strictement supérieur à 6 : que vaut la probabilité d'un événement qui ne peut jamais se produire ?",
    "hint2": "Aucune des faces ne convient : un tel événement est dit impossible.",
    "solution": "Aucune face ne porte un nombre supérieur à 6, c'est un événement impossible : $P = 0$.",
    "skill": "Raisonner"
  },
  {
    "id": "5D2-4",
    "chapterId": "5D2",
    "tier": 4,
    "title": "Défi : Nombre pair sur un dé",
    "statement": "On lance un dé équilibré à 6 faces. Quelle est la probabilité en pourcentage d'obtenir un nombre pair (2, 4 ou 6) ?",
    "type": "exact",
    "answer": "50",
    "acceptedAnswers": ["50%"],
    "hint1": "Compte les issues paires parmi les 6 issues équiprobables, puis convertis la fraction obtenue en pourcentage.",
    "hint2": "Il y a 3 issues paires sur 6, soit la fraction $\\frac{3}{6}$ : multiplie-la par 100 pour l'exprimer en pourcentage.",
    "solution": "$$P(\\text{Pair}) = \\frac{3}{6} = 0{,}5 = 50\\%$$",
    "skill": "Calculer"
  },
  {
    "id": "5D2-5",
    "chapterId": "5D2",
    "tier": 3,
    "title": "Compter les issues d'une roue de loterie",
    "statement": "Une roue de loterie est partagée en 20 secteurs identiques : 7 sont rouges, 5 sont bleus et tous les autres sont verts. On suppose que l'aiguille a la même chance de s'arrêter sur chaque secteur. Quelle est la probabilité que l'aiguille s'arrête sur un secteur vert ? Donne le résultat sous forme de fraction.",
    "type": "exact",
    "answer": "2/5",
    "acceptUnreduced": true,
    "hint1": "Commence par compter les secteurs verts : ce sont ceux qui ne sont ni rouges ni bleus.",
    "hint2": "Retire des 20 secteurs les 7 rouges et les 5 bleus, puis écris la fraction : nombre de secteurs verts ÷ 20.",
    "solution": "On suppose que chaque secteur a la même chance d'être désigné : c'est une situation d'équiprobabilité. Il y a $20 - 7 - 5 = 8$ secteurs verts sur $20$, donc $$P(\\text{Vert}) = \\frac{8}{20} = \\frac{2}{5}$$",
    "skill": "Calculer"
  }
],
  "5P2": [
  {
    "id": "5P2-1",
    "chapterId": "5P2",
    "tier": 1,
    "title": "Calcul de distance à vitesse constante",
    "statement": "Un cycliste roule à la vitesse constante de $20\\text{ km/h}$. Quelle distance en km parcourt-il en $3\\text{ heures}$ ?",
    "type": "exact",
    "answer": "60",
    "hint1": "Formule : $d = v \\times t$.",
    "hint2": "À $20\\text{ km/h}$, il parcourt $20\\text{ km}$ chaque heure : combien en 3 heures ?",
    "solution": "$$d = 20 \\times 3 = 60\\text{ km}$$",
    "skill": "Calculer"
  },
  {
    "id": "5P2-2",
    "chapterId": "5P2",
    "tier": 2,
    "title": "Périmètre d'un rectangle en fonction de sa longueur",
    "statement": "Un rectangle a une largeur fixe de $4\\text{ cm}$ et une longueur notée $L$. Quelle est l'expression de son périmètre en fonction de $L$ ?",
    "type": "mcq",
    "options": [
      "2L + 8",
      "4L",
      "L + 8",
      "2L + 4"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : $P = 2 \\times (L + 4) = 2L + 8$.",
      "Ceci est l'aire.",
      "Erreur de formule de périmètre.",
      "Erreur de distributivité."
    ],
    "hint1": "Le périmètre est $2 \\times (\\text{longueur} + \\text{largeur})$.",
    "hint2": "Ici $P = 2 \\times (L + 4)$ : développe en multipliant chaque terme de la parenthèse par 2.",
    "solution": "$$P = 2 \\times (L + 4) = 2L + 8$$",
    "skill": "Modéliser"
  },
  {
    "id": "5P2-3",
    "chapterId": "5P2",
    "tier": 3,
    "title": "Tarif avec partie fixe et variable",
    "statement": "Un artisan facture un forfait fixe de déplacement de $30$ € plus $25$ € par heure travaillée $t$. Quel est le montant de la facture en € pour une intervention de $4\\text{ heures}$ ?",
    "type": "exact",
    "answer": "130",
    "hint1": "Prix $= 30 + 25 \\times t$.",
    "hint2": "Remplace $t$ par 4 : la multiplication est prioritaire sur l'addition.",
    "solution": "$$\\text{Prix} = 30 + 25 \\times 4 = 30 + 100 = 130\\text{ euros}$$",
    "skill": "Calculer"
  },
  {
    "id": "5P2-4",
    "chapterId": "5P2",
    "tier": 4,
    "title": "Défi : Vitesse moyenne avec conversion",
    "statement": "Une voiture parcourt $45\\text{ km}$ en $30\\text{ minutes}$. Quelle est sa vitesse moyenne en $\\text{km/h}$ ?",
    "type": "exact",
    "answer": "90",
    "hint1": "La vitesse demandée est en km/h : commence par exprimer la durée en heures.",
    "hint2": "$30\\text{ minutes} = 0{,}5\\text{ h}$. Divise la distance par cette durée, ou double la distance parcourue en une demi-heure.",
    "solution": "$$v = \\frac{45}{0{,}5} = 90\\text{ km/h}$$",
    "skill": "Calculer"
  }
],
  "5A1": [
  {
    "id": "5A1-1",
    "chapterId": "5A1",
    "tier": 1,
    "title": "Tracé d'un carré dans Scratch",
    "statement": "Dans Scratch, pour tracer un carré avec une boucle « répéter 4 fois : avancer de 50, tourner de ... degrés », de quel angle doit-on tourner ?",
    "type": "exact",
    "answer": "90",
    "hint1": "La somme des 4 rotations fait $360^\\circ$.",
    "hint2": "Les 4 rotations sont identiques : partage $360^\\circ$ en 4 parts égales.",
    "solution": "$$\\text{Angle} = \\frac{360^\\circ}{4} = 90^\\circ$$",
    "skill": "Représenter"
  },
  {
    "id": "5A1-2",
    "chapterId": "5A1",
    "tier": 2,
    "title": "Distance totale parcourue",
    "statement": "Un lutin exécute le script : « répéter 6 fois : avancer de 15 pas ». Quelle distance totale en pas a-t-il parcourue ?",
    "type": "exact",
    "answer": "90",
    "hint1": "À chaque répétition, le lutin avance du même nombre de pas.",
    "hint2": "Le lutin avance 6 fois de 15 pas : calcule $6 \\times 15$, par exemple $6 \\times 10 + 6 \\times 5$.",
    "solution": "$$6 \\times 15 = 90\\text{ pas}$$",
    "skill": "Calculer"
  },
  {
    "id": "5A1-3",
    "chapterId": "5A1",
    "tier": 3,
    "title": "Triangle équilatéral dans Scratch",
    "statement": "Pour faire tracer un triangle équilatéral à un lutin avec le bloc « répéter 3 fois », quel doit être l'angle de rotation extérieur en degrés ?",
    "type": "exact",
    "answer": "120",
    "hint1": "En traçant la figure, le lutin fait un tour complet : la somme de ses rotations vaut $360^\\circ$.",
    "hint2": "Il tourne 3 fois du même angle : partage $360^\\circ$ en 3. Attention, ce n'est pas l'angle intérieur du triangle.",
    "solution": "$$\\text{Angle} = \\frac{360^\\circ}{3} = 120^\\circ$$",
    "skill": "Raisonner"
  },
  {
    "id": "5A1-4",
    "chapterId": "5A1",
    "tier": 4,
    "title": "Défi : Programme de calcul Scratch multi-étapes",
    "statement": "Un lutin exécute le programme de calcul Scratch suivant :\n```text\nquand drapeau cliqué\ndemander [Choisir un nombre] et attendre\ndire ((((réponse + 4) * 5) - 15) / 2)\n```\n**Si l'on choisit le nombre $7$ au départ, quel nombre affiche le lutin à la fin ?**",
    "type": "exact",
    "answer": "20",
    "hint1": "Commence par le bloc le plus à l'intérieur, puis remonte bloc par bloc vers l'extérieur.",
    "hint2": "Étape 1 : $7 + 4 = 11$. Étape 2 : $11 \\times 5 = 55$. Étape 3 : $55 - 15 = 40$. Il reste à appliquer le dernier bloc.",
    "solution": "$$((7 + 4) \\times 5 - 15) \\div 2 = (11 \\times 5 - 15) \\div 2 = (55 - 15) \\div 2 = \\frac{40}{2} = 20$$",
    "skill": "Raisonner"
  }
]
};

window.MATHS_WORKSHEETS_5E = {
  "5N1": [
    {
      "id": "5N1-devoir_maison",
      "filename": "Fiche_5e_Priorites_Operatoires.md",
      "type": "devoir_entrainement",
      "title": "Fiche 5ème : Priorités opératoires",
      "statement": "# Classe de 5ème — Mathématiques\n## Fiche d'entraînement : Priorités opératoires et divisibilité\n\n### Exercice 1 : Calculs sans calculatrice (6 points)\nCalculer en détaillant les étapes :\n1. $A = 12 + 3 \\times 7$\n2. $B = 35 - 5 \\times (4 + 2)$\n3. $C = 48 \\div 6 + 3 \\times 4 - 2$\n\n### Exercice 2 : Problème concret (4 points)\nLucas achète 3 classeurs à 4,50 € l'un et 5 stylos à 1,20 € l'un. Il paye avec un billet de 50 €.\n1. Écrire une seule expression numérique permettant de calculer la monnaie rendue à Lucas.\n2. Effectuer le calcul.\n",
      "solution": "## Corrigé détaillé\n\n### Exercice 1\n1. $A = 12 + 21 = 33$.\n2. $B = 35 - 5 \\times 6 = 35 - 30 = 5$.\n3. $C = 8 + 12 - 2 = 20 - 2 = 18$.\n\n### Exercice 2\n1. Expression : $M = 50 - (3 \\times 4{,}50 + 5 \\times 1{,}20)$.\n2. $M = 50 - (13{,}50 + 6{,}00) = 50 - 19{,}50 = 30{,}50$ €."
    }
  ],
  "5N2": [
    {
      "id": "5N2-devoir_relatifs",
      "filename": "Fiche_5e_Nombres_Relatifs.md",
      "type": "devoir_entrainement",
      "title": "Fiche 5ème : Nombres relatifs et repérage",
      "statement": "# Classe de 5ème — Mathématiques\n## Fiche d'entraînement : Nombres relatifs et opérations\n\n### Exercice 1 : Comparaison et repérage (4 points)\n1. Ranger par ordre croissant : $-5$ ; $+3{,}2$ ; $-8{,}5$ ; $0$ ; $-1{,}2$ ; $+4$.\n2. Donner l'opposé de chacun des nombres $-7{,}4$ et $+5$. Lequel de ces deux nombres est le plus proche de zéro ? Justifier à l'aide de leurs distances à zéro.\n\n### Exercice 2 : Additions et soustractions (6 points)\nCalculer en détaillant les étapes de calcul :\n1. $A = (-8) + (+15)$\n2. $B = (-12) + (-9)$\n3. $C = (+7) - (-11)$\n4. $D = (-14) - (+6)$\n",
      "solution": "## Corrigé détaillé\n\n### Exercice 1\n1. Ordre croissant : $-8{,}5 < -5 < -1{,}2 < 0 < +3{,}2 < +4$.\n2. L'opposé de $-7{,}4$ est $+7{,}4$ ; l'opposé de $+5$ est $-5$.\nLes distances à zéro sont $7{,}4$ et $5$ ; comme $5 < 7{,}4$, c'est $+5$ qui est le plus proche de zéro.\n\n### Exercice 2\n1. $A = +(15 - 8) = 7$.\n2. $B = -(12 + 9) = -21$.\n3. $C = 7 + 11 = 18$.\n4. $D = -14 + (-6) = -20$."
    }
  ],
  "5G3": [
    {
      "id": "5G3-devoir_angles",
      "filename": "Fiche_5e_Angles_Triangles.md",
      "type": "devoir_entrainement",
      "title": "Fiche 5ème : Angles et triangles",
      "statement": "# Classe de 5ème — Mathématiques\n## Fiche d'entraînement : Angles, parallélisme et triangles\n\n### Exercice 1 : Somme des angles d'un triangle (5 points)\n1. Dans un triangle $ABC$, on donne $\\widehat{A} = 48^\\circ$ et $\\widehat{B} = 72^\\circ$. Calculer la mesure de $\\widehat{C}$.\n2. Un triangle peut-il avoir des angles de $65^\\circ$, $45^\\circ$ et $75^\\circ$ ? Justifier soigneusement.\n\n### Exercice 2 : Angles alternes-internes (5 points)\nDeux droites parallèles $(d_1)$ et $(d_2)$ sont coupées par une sécante $(d)$. Un des angles alternes-internes mesure $56^\\circ$.\n1. Quelle est la mesure de l'autre angle alterne-interne ?\n2. Énoncer la propriété du cours qui justifie votre réponse.\n",
      "solution": "## Corrigé détaillé\n\n### Exercice 1\n1. Dans un triangle, la somme des trois angles vaut $180^\\circ$ :\n$$\\widehat{C} = 180^\\circ - (48^\\circ + 72^\\circ) = 180^\\circ - 120^\\circ = 60^\\circ$$\n2. Somme des angles proposés : $65^\\circ + 45^\\circ + 75^\\circ = 185^\\circ \\neq 180^\\circ$. Ce triangle ne peut pas être construit.\n\n### Exercice 2\n1. L'autre angle alterne-interne mesure également $56^\\circ$.\n2. Propriété : Si deux droites parallèles sont coupées par une sécante, alors les angles alternes-internes qu'elles forment ont la même mesure."
    }
  ]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_5E);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_5E);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_5E);
