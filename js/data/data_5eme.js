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
      "Nommer une expression (somme, différence, produit, quotient) d'après la dernière opération effectuée.",
      "Traduire un programme de calcul ou un problème par une seule expression numérique.",
      "Utiliser la distributivité simple $k \\times (a + b) = k \\times a + k \\times b$ pour calculer mentalement.",
      "Utiliser la division euclidienne, les notions de multiple et de diviseur, les critères de divisibilité et reconnaître un nombre premier."
    ],
    "keyPoints": [
      {
        "title": "1. Priorités opératoires et nom d'un calcul",
        "content": "• Dans une expression sans parenthèses, **la multiplication et la division sont prioritaires** sur l'addition et la soustraction.\n• Dans une expression avec parenthèses, on effectue **d'abord les calculs entre parenthèses**, en commençant par les plus intérieures.\n• Pour des opérations de même priorité consécutives (+ et -, ou × et ÷), on calcule **de gauche à droite**.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1.2rem auto;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 500 235\" width=\"500\" height=\"235\" style=\"max-width:480px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <linearGradient id=\"goldGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#fef08a\" stop-opacity=\"0.35\"/>\n        <stop offset=\"100%\" stop-color=\"#fef08a\" stop-opacity=\"0.15\"/>\n      </linearGradient>\n      <linearGradient id=\"silverGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#e2e8f0\" stop-opacity=\"0.4\"/>\n        <stop offset=\"100%\" stop-color=\"#e2e8f0\" stop-opacity=\"0.15\"/>\n      </linearGradient>\n      <linearGradient id=\"bronzeGrad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n        <stop offset=\"0%\" stop-color=\"#ffedd5\" stop-opacity=\"0.4\"/>\n        <stop offset=\"100%\" stop-color=\"#ffedd5\" stop-opacity=\"0.15\"/>\n      </linearGradient>\n    </defs>\n    <!-- Ligne de sol / Socle -->\n    <line x1=\"15\" y1=\"190\" x2=\"485\" y2=\"190\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"3\" stroke-linecap=\"round\" />\n    <!-- MARCHE 2 : ARGENT (Gauche) -->\n    <g>\n      <text x=\"90\" y=\"72\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"24\" font-weight=\"900\" fill=\"#0284c7\">&#215; &#160;et&#160; &#247;</text>\n      <text x=\"90\" y=\"92\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"var(--text-main, #0f172a)\">Multiplications &amp; Divisions</text>\n      <text x=\"90\" y=\"106\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"9.5\" font-style=\"italic\" fill=\"var(--text-muted, #64748b)\">de gauche &#224; droite</text>\n      <rect x=\"18\" y=\"114\" width=\"144\" height=\"76\" rx=\"8\" fill=\"url(#silverGrad)\" stroke=\"#94a3b8\" stroke-width=\"2\" />\n      <circle cx=\"90\" cy=\"135\" r=\"15\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"2\" />\n      <text x=\"90\" y=\"141\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"15\" font-weight=\"900\" fill=\"#334155\">2</text>\n      <text x=\"90\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11.5\" font-weight=\"800\" fill=\"#475569\">2nde PLACE</text>\n      <text x=\"90\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"9.5\" fill=\"var(--text-muted, #64748b)\">(m&#234;me priorit&#233;)</text>\n    </g>\n    <!-- MARCHE 1 : OR (Centre, la plus haute) -->\n    <g>\n      <text x=\"250\" y=\"32\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"32\" font-weight=\"900\" fill=\"#2563eb\">( &#160; )</text>\n      <text x=\"250\" y=\"53\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"800\" fill=\"var(--text-main, #0f172a)\">Parenth&#232;ses ( )</text>\n      <text x=\"250\" y=\"69\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"10\" font-style=\"italic\" fill=\"var(--text-muted, #64748b)\">les plus int&#233;rieures d&#39;abord</text>\n      <rect x=\"178\" y=\"78\" width=\"144\" height=\"112\" rx=\"8\" fill=\"url(#goldGrad)\" stroke=\"#eab308\" stroke-width=\"2.5\" />\n      <circle cx=\"250\" cy=\"105\" r=\"18\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\" />\n      <text x=\"250\" y=\"112\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"18\" font-weight=\"900\" fill=\"#854d0e\">1</text>\n      <text x=\"250\" y=\"133\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"900\" fill=\"#b45309\">1&#232;re PLACE</text>\n      <text x=\"250\" y=\"154\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Calculs prioritaires</text>\n      <text x=\"250\" y=\"171\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"10\" fill=\"var(--text-muted, #64748b)\">ou crochets [ ]</text>\n    </g>\n    <!-- MARCHE 3 : BRONZE (Droite) -->\n    <g>\n      <text x=\"410\" y=\"94\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"24\" font-weight=\"900\" fill=\"#ea580c\">+ &#160;et&#160; &#8722;</text>\n      <text x=\"410\" y=\"114\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"var(--text-main, #0f172a)\">Additions &amp; Soustractions</text>\n      <text x=\"410\" y=\"128\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"9.5\" font-style=\"italic\" fill=\"var(--text-muted, #64748b)\">de gauche &#224; droite</text>\n      <rect x=\"338\" y=\"136\" width=\"144\" height=\"54\" rx=\"8\" fill=\"url(#bronzeGrad)\" stroke=\"#f97316\" stroke-width=\"2\" />\n      <circle cx=\"410\" cy=\"152\" r=\"13\" fill=\"#ffedd5\" stroke=\"#c2410c\" stroke-width=\"2\" />\n      <text x=\"410\" y=\"157.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"14\" font-weight=\"900\" fill=\"#9a3412\">3</text>\n      <text x=\"410\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#c2410c\">3e PLACE</text>\n    </g>\n    <!-- Sous-titre sous le sol -->\n    <text x=\"250\" y=\"214\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-muted, #475569)\">&#9733; Ordre de priorit&#233; des calculs : on calcule toujours du sommet (1er) vers la base (3e) !</text>\n  </svg>\n</div>\n• Les **crochets** $[\\;]$ jouent le même rôle que les parenthèses : on calcule d'abord dans les parenthèses, puis dans les crochets.\n\n• **Vocabulaire clé** : On nomme toujours un calcul par **l'opération effectuée en dernier**. Par exemple, $50 - 80 \\div 2$ est une **différence** (car la division $80 \\div 2$ est prioritaire, la soustraction est faite en dernier)."
      },
      {
        "title": "2. Distributivité simple",
        "content": "Pour tous nombres $k$, $a$ et $b$ :\n$$k \\times (a + b) = k \\times a + k \\times b \\qquad k \\times (a - b) = k \\times a - k \\times b$$\nElle permet de calculer astucieusement de tête :\n$$25 \\times 102 = 25 \\times 100 + 25 \\times 2 = 2\\,500 + 50 = 2\\,550$$\n$$7 \\times 99 = 7 \\times 100 - 7 \\times 1 = 700 - 7 = 693$$\nElle s'utilise aussi « dans l'autre sens » (on **factorise**) :\n$$13 \\times 8 + 13 \\times 2 = 13 \\times (8 + 2) = 13 \\times 10 = 130$$"
      },
      {
        "title": "3. Multiples, diviseurs et nombres premiers",
        "content": "• Division euclidienne de $a$ par $b$ ($b \\neq 0$) : $a = b \\times q + r$ avec $0 \\le r < b$ ($q$ est le **quotient**, $r$ le **reste**).\n• Si le reste est nul, $a$ est un **multiple** de $b$ et $b$ est un **diviseur** de $a$ : $91 = 7 \\times 13$, donc $7$ divise $91$.\n• **Critères de divisibilité** : par $2$ si le chiffre des unités est $0, 2, 4, 6$ ou $8$ ; par $5$ s'il est $0$ ou $5$ ; par $10$ s'il est $0$ ; par $3$ (ou $9$) si la **somme des chiffres** est divisible par $3$ (ou $9$).\n• Un **nombre premier** est un entier qui a **exactement deux diviseurs** : $1$ et lui-même. Les nombres premiers inférieurs à $30$ sont :\n$$2,\\ 3,\\ 5,\\ 7,\\ 11,\\ 13,\\ 17,\\ 19,\\ 23,\\ 29$$\n$1$ n'est pas premier (un seul diviseur) ; $21 = 3 \\times 7$ n'est pas premier."
      },
      {
        "title": "À retenir",
        "content": "• Ordre des calculs : **parenthèses** (les plus intérieures d'abord), puis **× et ÷**, puis **+ et −** ; à priorité égale, **de gauche à droite**.\n• Une expression porte le nom de la **dernière opération** effectuée.\n• $k \\times (a + b) = k \\times a + k \\times b$.\n• Un nombre premier a exactement deux diviseurs : $1$ et lui-même."
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
        "title": "Méthode : Reconnaître un nombre premier",
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
      "⚠️ $1$ n'est pas un nombre premier, et un nombre impair n'est pas forcément premier : $27 = 3 \\times 9$."
    ],
    "flashcards": [
      { "q": "Quelle opération est prioritaire dans $7 + 3 \\times 4$ ?", "a": "La multiplication $3 \\times 4 = 12$, donc le résultat est $7 + 12 = 19$." },
      { "q": "Comment nomme-t-on l'expression $50 - 80 \\div 2$ (somme, différence, produit ou quotient) ?", "a": "Une différence, car on nomme toujours un calcul par l'opération effectuée en dernier (la division est prioritaire, on soustrait en dernier)." },
      { "q": "Comment s'appelle le résultat d'une multiplication ? Et d'une division ?", "a": "Le résultat d'une multiplication est un **produit**. Le résultat d'une division est un **quotient**." },
      { "q": "Comment reconnaître si 471 est divisible par 3 ?", "a": "On calcule la somme des chiffres : $4 + 7 + 1 = 12$. Comme 12 est un multiple de 3, 471 est divisible par 3." },
      { "q": "Calculer $20 - 8 - 2$.", "a": "$10$ : à priorité égale, on calcule de gauche à droite ($20 - 8 = 12$, puis $12 - 2 = 10$)." },
      { "q": "Qu'est-ce qu'un nombre premier ? Citer ceux inférieurs à $20$.", "a": "Un entier qui a exactement deux diviseurs, $1$ et lui-même : $2, 3, 5, 7, 11, 13, 17, 19$." },
      { "q": "Calculer mentalement $8 \\times 99$.", "a": "$8 \\times (100 - 1) = 800 - 8 = 792$." }
    ]
  },
  "5N2": {
    "title": "5N2 : Nombres relatifs : repérage, comparaison et calculs",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Utiliser le vocabulaire : nombre relatif, positif, négatif, opposé, distance à zéro.",
      "Repérer et placer un nombre relatif sur une droite graduée.",
      "Comparer et ranger des nombres relatifs.",
      "Additionner et soustraire des nombres relatifs ; calculer une expression comportant plusieurs termes.",
      "Résoudre des problèmes concrets : températures, altitudes, gains et pertes."
    ],
    "keyPoints": [
      {
        "title": "1. Nombres relatifs et droite graduée",
        "content": "• Un **nombre relatif** est formé d'un **signe** ($+$ ou $-$) et d'une **distance à zéro**. Exemple : $-4{,}5$ est **négatif**, sa distance à zéro est $4{,}5$.\n• Les nombres **positifs** s'écrivent souvent sans signe : $+3 = 3$. Le nombre $0$ est à la fois positif et négatif.\n• Deux nombres **opposés** ont la même distance à zéro et des signes contraires : $-7$ et $7$. Leur somme est nulle.\n• Sur une droite graduée, les positifs sont à droite de l'origine, les négatifs à gauche ; deux opposés sont symétriques par rapport à l'origine.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 440 90\" width=\"440\" height=\"90\" style=\"max-width:440px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Droite graduée de moins 5 à 5 avec les points A, B et C\">\n<line x1=\"16\" y1=\"48\" x2=\"432\" y2=\"48\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<path d=\"M 432 48 l -9 -5 v 10 z\" fill=\"var(--text-main, #334155)\"/>\n<path d=\"M 16 48 l 9 -5 v 10 z\" fill=\"var(--text-main, #334155)\"/>\n<line x1=\"30.0\" y1=\"40\" x2=\"30.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"30.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">−5</text>\n<line x1=\"66.6\" y1=\"40\" x2=\"66.6\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"66.6\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">−4</text>\n<line x1=\"103.2\" y1=\"40\" x2=\"103.2\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"103.2\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">−3</text>\n<line x1=\"139.8\" y1=\"40\" x2=\"139.8\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"139.8\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">−2</text>\n<line x1=\"176.4\" y1=\"40\" x2=\"176.4\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"176.4\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">−1</text>\n<line x1=\"213.0\" y1=\"40\" x2=\"213.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"213.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">0</text>\n<line x1=\"249.6\" y1=\"40\" x2=\"249.6\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"249.6\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">1</text>\n<line x1=\"286.2\" y1=\"40\" x2=\"286.2\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"286.2\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">2</text>\n<line x1=\"322.8\" y1=\"40\" x2=\"322.8\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"322.8\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">3</text>\n<line x1=\"359.4\" y1=\"40\" x2=\"359.4\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"359.4\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">4</text>\n<line x1=\"396.0\" y1=\"40\" x2=\"396.0\" y2=\"56\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"396.0\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">5</text>\n<circle cx=\"84.9\" cy=\"48\" r=\"4.5\" fill=\"#dc2626\"/>\n<text x=\"84.9\" y=\"32\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">A(−3,5)</text>\n<circle cx=\"341.1\" cy=\"48\" r=\"4.5\" fill=\"#2563eb\"/>\n<text x=\"341.1\" y=\"32\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#2563eb\">B(3,5)</text>\n<circle cx=\"176.4\" cy=\"48\" r=\"4.5\" fill=\"#059669\"/>\n<text x=\"176.4\" y=\"32\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">C(−1)</text>\n</svg>\n</div>\n$A$ et $B$ ont des abscisses opposées : ils sont à la même distance ($3{,}5$) de l'origine."
      },
      {
        "title": "2. Comparer et ranger des nombres relatifs",
        "content": "• Sur une droite graduée, le plus grand de deux nombres est **le plus à droite**.\n• Un nombre positif est toujours supérieur à un nombre négatif : $0{,}2 > -15$.\n• Entre deux nombres **négatifs**, le plus grand est celui qui a la **plus petite distance à zéro** : $-3 > -7$ car $3 < 7$.\n• Exemple de rangement dans l'ordre croissant :\n$$-6 < -2{,}5 < -1 < 0 < 3 < 4{,}2$$"
      },
      {
        "title": "3. Additionner deux nombres relatifs",
        "content": "• **Même signe** : on garde ce signe et on **additionne** les distances à zéro.\n$$(-5) + (-7) = -12 \\qquad (+3) + (+4) = +7$$\n• **Signes contraires** : on prend le signe du nombre qui a la **plus grande distance à zéro** et on **soustrait** les distances à zéro.\n$$(-12) + (+6) = -6 \\qquad (+9) + (-4) = +5$$\n• Image utile : un gain de $9$ € suivi d'une perte de $4$ € donne un bilan de $+5$ €.\n• La somme de deux nombres opposés vaut $0$ : $(-8{,}3) + (+8{,}3) = 0$."
      },
      {
        "title": "4. Soustraire un nombre relatif",
        "content": "**Règle** : soustraire un nombre relatif revient à **ajouter son opposé**.\n$$5 - (+8) = 5 + (-8) = -3 \\qquad -4 - (-9) = -4 + 9 = 5$$\nConséquences pour simplifier l'écriture : $+(+a) = +a$ ; $+(-a) = -a$ ; $-(+a) = -a$ ; $-(-a) = +a$.\n**Plusieurs termes** : on transforme les soustractions en additions, puis on regroupe les positifs et les négatifs.\n$$(-3) + (+8) + (-6) + (+2) = (+10) + (-9) = 1$$"
      },
      {
        "title": "À retenir",
        "content": "• Entre deux négatifs, le plus grand est le plus proche de zéro : $-2 > -5$.\n• Même signe : on additionne les distances à zéro et on garde le signe.\n• Signes contraires : on soustrait les distances à zéro et on prend le signe de celui qui est « le plus loin » de zéro.\n• $a - b = a + (\\text{opposé de } b)$."
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
      "⚠️ $-3 + 5$ ne vaut pas $-8$ : les signes sont contraires, on soustrait les distances à zéro, $-3 + 5 = 2$.",
      "⚠️ $-2{,}05 > -2{,}5$ : la distance à zéro de $-2{,}05$ est plus petite, il est donc plus proche de zéro."
    ],
    "flashcards": [
      { "q": "Quel nombre est à la fois positif ET négatif ?", "a": "Le nombre **0** est le seul nombre à la fois positif et négatif." },
      { "q": "Quel est le résultat de $(-5) + (-7)$ ?", "a": "$-12$ (perte de 5 et perte de 7, le bilan est une perte de $5 + 7 = 12$)." },
      { "q": "Comment calculer $3 - (-8)$ ?", "a": "On ajoute l'opposé : $3 + 8 = 11$ (l'ennemi de mon ennemi est mon ami : $-(-8) = +8$)." },
      { "q": "Entre $-9$ et $-4$, quel est le plus grand nombre ?", "a": "$-4$, car entre deux négatifs, le plus grand est celui qui a la plus petite distance à zéro (le plus proche de 0)." },
      { "q": "Quel est l'opposé de $-6{,}3$ ?", "a": "$6{,}3$ (même distance à zéro, signe contraire)." },
      { "q": "Calculer $-9 + 4$.", "a": "$-5$ : signes contraires, $9 - 4 = 5$, et on garde le signe de $-9$." },
      { "q": "Il fait $-4^\\circ\\text{C}$ le matin et $9^\\circ\\text{C}$ l'après-midi. Quel est l'écart ?", "a": "$9 - (-4) = 9 + 4 = 13^\\circ\\text{C}$." }
    ]
  },
  "5N3": {
    "title": "5N3 : Fractions et nombres rationnels",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Utiliser la fraction comme quotient : $b \\times \\frac{a}{b} = a$.",
      "Reconnaître et produire des fractions égales ; simplifier une fraction.",
      "Comparer des fractions de même dénominateur ou dont les dénominateurs sont multiples l'un de l'autre.",
      "Additionner et soustraire des fractions de même dénominateur ou de dénominateurs multiples.",
      "Calculer une fraction d'une quantité et résoudre des problèmes."
    ],
    "keyPoints": [
      {
        "title": "1. La fraction, un quotient",
        "content": "• $\\frac{a}{b}$ ($b \\neq 0$) est le **quotient** de $a$ par $b$ : c'est le nombre qui, multiplié par $b$, donne $a$ :\n$$b \\times \\frac{a}{b} = a \\qquad \\text{exemple : } 7 \\times \\frac{3}{7} = 3$$\n• Un quotient peut s'écrire avec des nombres décimaux ; on obtient une fraction en multipliant les deux termes par $10$, $100$… : $\\frac{2{,}5}{4} = \\frac{25}{40} = \\frac{5}{8}$.\n• Les nombres qui peuvent s'écrire sous forme de fraction sont appelés **nombres rationnels** : $\\frac{1}{3}$, $0{,}75 = \\frac{3}{4}$, $5 = \\frac{5}{1}$…"
      },
      {
        "title": "2. Fractions égales et simplification",
        "content": "On ne change pas une fraction en **multipliant** ou en **divisant** son numérateur **et** son dénominateur par un même nombre non nul :\n$$\\frac{3}{7} = \\frac{3 \\times 5}{7 \\times 5} = \\frac{15}{35} \\qquad \\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$$\n**Simplifier** une fraction, c'est l'écrire avec des nombres plus petits. On cherche un diviseur commun grâce aux tables et aux critères de divisibilité. Une fraction qu'on ne peut plus simplifier est dite **irréductible** ($\\frac{2}{3}$)."
      },
      {
        "title": "3. Comparer des fractions",
        "content": "• **Même dénominateur** : la plus grande fraction est celle qui a le plus grand numérateur : $\\frac{7}{9} > \\frac{5}{9}$.\n• **Dénominateurs multiples** : on écrit les deux fractions avec le même dénominateur, puis on compare les numérateurs.\n$$\\frac{3}{4} = \\frac{6}{8} \\text{ et } \\frac{6}{8} > \\frac{5}{8} \\text{, donc } \\frac{3}{4} > \\frac{5}{8}$$\n• **Comparaison à 1** : $\\frac{9}{7} > 1$ (numérateur plus grand que le dénominateur) et $\\frac{4}{7} < 1$."
      },
      {
        "title": "4. Additionner et soustraire des fractions",
        "content": "• **Même dénominateur** : on additionne (ou on soustrait) les numérateurs et on **garde** le dénominateur :\n$$\\frac{a}{d} + \\frac{b}{d} = \\frac{a + b}{d} \\qquad \\frac{11}{12} - \\frac{5}{12} = \\frac{6}{12} = \\frac{1}{2}$$\n• **Dénominateurs multiples** : on transforme d'abord une fraction pour avoir le même dénominateur :\n$$\\frac{2}{5} + \\frac{7}{15} = \\frac{2 \\times 3}{5 \\times 3} + \\frac{7}{15} = \\frac{6}{15} + \\frac{7}{15} = \\frac{13}{15}$$\n• **Avec un entier** : on écrit l'entier sous forme de fraction : $2 + \\frac{3}{5} = \\frac{10}{5} + \\frac{3}{5} = \\frac{13}{5}$."
      },
      {
        "title": "5. Prendre une fraction d'une quantité",
        "content": "Prendre les $\\frac{a}{b}$ d'une quantité $Q$, c'est calculer $\\frac{a}{b} \\times Q$. On divise $Q$ par $b$, puis on multiplie par $a$ :\n$$\\frac{3}{4} \\text{ de } 24\\text{ L} = (24 \\div 4) \\times 3 = 6 \\times 3 = 18\\text{ L}$$"
      },
      {
        "title": "À retenir",
        "content": "• $\\frac{a}{b} = \\frac{a \\times k}{b \\times k}$ ($k \\neq 0$) : on multiplie **les deux** termes.\n• On n'additionne **jamais** les dénominateurs : on les rend égaux, puis on additionne les numérateurs.\n• Prendre $\\frac{a}{b}$ d'une quantité, c'est la multiplier par $\\frac{a}{b}$."
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
          "**Étape 4 (Simplification)** : On divise le numérateur et le dénominateur par 6 en conservant l'égalité : $C = \\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$"
        ]
      },
      {
        "title": "Méthode : Comparer deux fractions",
        "example": "Comparer $\\frac{7}{12}$ et $\\frac{2}{3}$.",
        "steps": [
          "**Étape 1** : $12 = 3 \\times 4$ : les dénominateurs sont multiples l'un de l'autre.",
          "**Étape 2** : $\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$.",
          "**Étape 3** : Même dénominateur : $7 < 8$, donc $\\frac{7}{12} < \\frac{8}{12}$.",
          "**Conclusion** : $\\frac{7}{12} < \\frac{2}{3}$."
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
      }
    ],
    "traps": [
      "⚠️ Ne jamais additionner les dénominateurs ! $\\frac{1}{2} + \\frac{1}{2} = \\frac{2}{2} = 1$, pas $\\frac{2}{4}$.",
      "⚠️ Pour obtenir une fraction égale, on **multiplie** les deux termes par le même nombre ; ajouter le même nombre ne marche pas : $\\frac{1}{2} \\neq \\frac{1 + 1}{2 + 1} = \\frac{2}{3}$.",
      "⚠️ Pour comparer $\\frac{3}{4}$ et $\\frac{5}{8}$, on ne compare pas les numérateurs tant que les dénominateurs sont différents.",
      "⚠️ $2 + \\frac{1}{3}$ ne vaut pas $\\frac{3}{3}$ : on écrit $2 = \\frac{6}{3}$, donc $2 + \\frac{1}{3} = \\frac{7}{3}$."
    ],
    "flashcards": [
      { "q": "Combien vaut le quart de 36 ?", "a": "$\\frac{1}{4} \\times 36 = \\frac{36}{4} = 9$." },
      { "q": "Simplifier la fraction $\\frac{20}{25}$.", "a": "On divise par 5 : $\\frac{20 \\div 5}{25 \\div 5} = \\frac{4}{5}$." },
      { "q": "Comment additionne-t-on deux fractions ayant le même dénominateur ?", "a": "On additionne les numérateurs et on **garde le dénominateur commun** : $$\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d}$$" },
      { "q": "Pourquoi la fraction $\\frac{8}{12}$ est-elle égale à $\\frac{2}{3}$ ?", "a": "Parce qu'on divise le numérateur et le dénominateur par un même nombre ($4$) : $$\\frac{8 \\div 4}{12 \\div 4} = \\frac{2}{3}$$" },
      { "q": "Entre $\\frac{5}{9}$ et $\\frac{7}{9}$, quelle fraction est la plus grande ?", "a": "$\\frac{7}{9}$, car deux fractions ayant le même dénominateur positif sont rangées dans l'ordre de leurs numérateurs ($7 > 5$)." },
      { "q": "Comparer $\\frac{3}{4}$ et $\\frac{5}{8}$.", "a": "$\\frac{3}{4} = \\frac{6}{8}$ et $\\frac{6}{8} > \\frac{5}{8}$, donc $\\frac{3}{4} > \\frac{5}{8}$." },
      { "q": "Calculer $1 - \\frac{2}{7}$.", "a": "$\\frac{7}{7} - \\frac{2}{7} = \\frac{5}{7}$." }
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
        "content": "Dans un repère orthogonal, la position d'un point $M$ est donnée par un couple de nombres noté $M(x ; y)$ :\n• $x$ est l'**abscisse** (axe horizontal, orienté de gauche à droite).\n• $y$ est l'**ordonnée** (axe vertical, orienté de bas en haut).\nOn écrit toujours l'**abscisse en premier** (ordre alphabétique : $x$ puis $y$).\n• Un point de l'axe des abscisses a une ordonnée nulle, par exemple $(4 ; 0)$ ; un point de l'axe des ordonnées a une abscisse nulle, par exemple $(0 ; -3)$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 220\" width=\"300\" height=\"220\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <marker id=\"arrow-rep\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"var(--text-main, #334155)\" />\n      </marker>\n    </defs>\n    <!-- Grille légère -->\n    <g stroke=\"rgba(148, 163, 184, 0.2)\" stroke-width=\"1\">\n      <line x1=\"30\" y1=\"35\" x2=\"30\" y2=\"195\" />\n      <line x1=\"65\" y1=\"35\" x2=\"65\" y2=\"195\" />\n      <line x1=\"100\" y1=\"35\" x2=\"100\" y2=\"195\" />\n      <line x1=\"170\" y1=\"35\" x2=\"170\" y2=\"195\" />\n      <line x1=\"205\" y1=\"35\" x2=\"205\" y2=\"195\" />\n      <line x1=\"240\" y1=\"35\" x2=\"240\" y2=\"195\" />\n      <line x1=\"275\" y1=\"35\" x2=\"275\" y2=\"195\" />\n      <line x1=\"20\" y1=\"45\" x2=\"285\" y2=\"45\" />\n      <line x1=\"20\" y1=\"80\" x2=\"285\" y2=\"80\" />\n      <line x1=\"20\" y1=\"150\" x2=\"285\" y2=\"150\" />\n      <line x1=\"20\" y1=\"185\" x2=\"285\" y2=\"185\" />\n    </g>\n    <!-- Axes -->\n    <line x1=\"20\" y1=\"115\" x2=\"290\" y2=\"115\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" marker-end=\"url(#arrow-rep)\" />\n    <line x1=\"135\" y1=\"205\" x2=\"135\" y2=\"25\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" marker-end=\"url(#arrow-rep)\" />\n    <text x=\"285\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">x (abscisses)</text>\n    <text x=\"142\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">y (ordonnées)</text>\n    <text x=\"122\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n    <!-- Point M(3;2) : x = 135 + 3*35 = 240, y = 115 - 2*35 = 45 -->\n    <line x1=\"240\" y1=\"115\" x2=\"240\" y2=\"45\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <line x1=\"135\" y1=\"45\" x2=\"240\" y2=\"45\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <circle cx=\"240\" cy=\"45\" r=\"4\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"246\" y=\"42\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">M(3 ; 2)</text>\n    <!-- Point N(-2;-1) : x = 135 - 2*35 = 65, y = 115 + 1*35 = 150 -->\n    <line x1=\"65\" y1=\"115\" x2=\"65\" y2=\"150\" stroke=\"#10b981\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <line x1=\"135\" y1=\"150\" x2=\"65\" y2=\"150\" stroke=\"#10b981\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <circle cx=\"65\" cy=\"150\" r=\"4\" fill=\"#10b981\" />\n    <text x=\"20\" y=\"165\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">N(-2 ; -1)</text>\n  </svg>\n</div>"
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
      "Connaître et utiliser les propriétés de conservation (longueurs, angles, aires, alignement) et le parallélisme d'une droite et de son image.",
      "Reconnaître le centre de symétrie d'une figure."
    ],
    "keyPoints": [
      {
        "title": "1. Définition",
        "content": "Dire que $A'$ est le symétrique de $A$ par rapport à $O$ signifie que **$O$ est le milieu du segment $[AA']$**.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 120\" width=\"280\" height=\"120\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <marker id=\"arrow-turn\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#8b5cf6\" />\n      </marker>\n    </defs>\n    <line x1=\"45\" y1=\"50\" x2=\"235\" y2=\"90\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n    <circle cx=\"45\" cy=\"50\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"235\" cy=\"90\" r=\"3.5\" fill=\"#10b981\" />\n    <circle cx=\"140\" cy=\"70\" r=\"4\" fill=\"#dc2626\" />\n    <text x=\"32\" y=\"48\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">A</text>\n    <text x=\"245\" y=\"94\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#10b981\">A'</text>\n    <text x=\"136\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">O</text>\n    <!-- Codage égalité OA = OA' -->\n    <line x1=\"89\" y1=\"55\" x2=\"95\" y2=\"65\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"93\" y1=\"55\" x2=\"99\" y2=\"65\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"184\" y1=\"75\" x2=\"190\" y2=\"85\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <line x1=\"188\" y1=\"75\" x2=\"194\" y2=\"85\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <!-- Arc de demi-tour -->\n    <path d=\"M 65 35 A 80 40 0 0 1 215 65\" fill=\"none\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" stroke-dasharray=\"3 3\" marker-end=\"url(#arrow-turn)\" />\n    <text x=\"140\" y=\"28\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#8b5cf6\">Demi-tour de 180°</text>\n    <text x=\"140\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">O est le milieu de [AA']</text>\n  </svg>\n</div>\n\n• Faire la symétrie de centre $O$, c'est faire tourner la figure d'un **demi-tour** ($180^\\circ$) autour de $O$.\n• Le symétrique du centre $O$ est le point $O$ lui-même."
      },
      {
        "title": "2. Images des figures et propriétés de conservation",
        "content": "• L'image d'un **segment** est un segment de **même longueur**.\n• L'image d'une **droite** est une droite **parallèle** (confondue si la droite passe par $O$).\n• L'image d'un **cercle** de centre $C$ et de rayon $r$ est le cercle de centre $C'$ (symétrique de $C$) et de **même rayon**.\n• La symétrie centrale **conserve** les longueurs, les mesures d'angles, l'alignement, les périmètres et les aires : la figure image est superposable à la figure de départ.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 170\" width=\"300\" height=\"170\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Triangle ABC -->\n    <polygon points=\"55,35 25,95 85,95\" fill=\"rgba(37, 99, 235, 0.1)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <text x=\"52\" y=\"26\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">A</text>\n    <text x=\"12\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">B</text>\n    <text x=\"90\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">C</text>\n    <!-- Centre O -->\n    <circle cx=\"150\" cy=\"85\" r=\"4\" fill=\"#dc2626\" />\n    <text x=\"146\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">O</text>\n    <!-- Lignes de symétrie passant par O -->\n    <line x1=\"55\" y1=\"35\" x2=\"245\" y2=\"135\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" />\n    <line x1=\"25\" y1=\"95\" x2=\"275\" y2=\"75\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" />\n    <line x1=\"85\" y1=\"95\" x2=\"215\" y2=\"75\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\" />\n    <!-- Triangle A'B'C' (inversé) -->\n    <polygon points=\"245,135 275,75 215,75\" fill=\"rgba(16, 185, 129, 0.1)\" stroke=\"#10b981\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <text x=\"245\" y=\"150\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">A'</text>\n    <text x=\"280\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">B'</text>\n    <text x=\"200\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">C'</text>\n    <text x=\"150\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-muted, #64748b)\">(AB) // (A'B') et AB = A'B'</text>\n  </svg>\n</div>"
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
        "title": "À retenir",
        "content": "• $A'$ symétrique de $A$ par rapport à $O$ $\\Longleftrightarrow$ $O$ est le **milieu** de $[AA']$.\n• Une droite et son image sont **parallèles**.\n• Longueurs, angles et aires sont conservés."
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
      { "q": "À quel mouvement correspond une symétrie centrale ?", "a": "À un **demi-tour**, c'est-à-dire une rotation de $180^\\circ$ autour du centre." },
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
      "Connaître et utiliser la somme des angles d'un triangle et les angles des triangles particuliers."
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
        "content": "**Propriété** : si deux droites **parallèles** sont coupées par une sécante, alors les angles alternes-internes ont la **même mesure** ; de même, les angles correspondants ont la même mesure.\n**Réciproque** : si deux droites coupées par une sécante forment deux angles alternes-internes (ou correspondants) de **même mesure**, alors ces deux droites sont **parallèles**.\n• La propriété sert à **calculer** un angle quand on sait que les droites sont parallèles.\n• La réciproque sert à **démontrer** que deux droites sont parallèles."
      },
      {
        "title": "4. Somme des angles d'un triangle",
        "content": "Dans n'importe quel triangle $ABC$ :\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$$\n**Pourquoi ?** On trace la parallèle à $(BC)$ passant par $A$. Les angles alternes-internes ainsi formés reproduisent $\\widehat{B}$ et $\\widehat{C}$ de part et d'autre de $\\widehat{A}$ : les trois angles forment un angle plat, soit $180^\\circ$.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 150\" width=\"280\" height=\"150\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"120,25 45,105 215,105\" fill=\"rgba(37, 99, 235, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <!-- Angles triangle -->\n    <path d=\"M 120 25 L 105 41 A 20 20 0 0 0 135 41 Z\" fill=\"rgba(37, 99, 235, 0.3)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" />\n    <path d=\"M 45 105 L 65 105 A 20 20 0 0 0 57 88 Z\" fill=\"rgba(16, 185, 129, 0.3)\" stroke=\"#10b981\" stroke-width=\"1.5\" />\n    <path d=\"M 215 105 L 195 105 A 20 20 0 0 1 202 88 Z\" fill=\"rgba(217, 119, 6, 0.3)\" stroke=\"#d97706\" stroke-width=\"1.5\" />\n    <text x=\"116\" y=\"18\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"32\" y=\"112\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"222\" y=\"112\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <!-- Ligne plate démontrant la somme = 180° -->\n    <line x1=\"60\" y1=\"135\" x2=\"220\" y2=\"135\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <circle cx=\"140\" cy=\"135\" r=\"3\" fill=\"var(--text-main, #334155)\" />\n    <path d=\"M 140 135 L 115 135 A 25 25 0 0 1 125 113 Z\" fill=\"rgba(16, 185, 129, 0.3)\" stroke=\"#10b981\" stroke-width=\"1.2\" />\n    <path d=\"M 140 135 L 125 113 A 25 25 0 0 1 155 113 Z\" fill=\"rgba(37, 99, 235, 0.3)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n    <path d=\"M 140 135 L 155 113 A 25 25 0 0 1 165 135 Z\" fill=\"rgba(217, 119, 6, 0.3)\" stroke=\"#d97706\" stroke-width=\"1.2\" />\n    <text x=\"140\" y=\"102\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">Somme = 180° (angle plat)</text>\n  </svg>\n</div>"
      },
      {
        "title": "5. Angles des triangles particuliers",
        "content": "• **Triangle isocèle** : les deux angles **à la base** ont la même mesure.\n• **Triangle équilatéral** : les trois angles mesurent $60^\\circ$ ($180^\\circ \\div 3$).\n• **Triangle rectangle** : les deux angles aigus sont **complémentaires** (somme $90^\\circ$).\n• **Triangle rectangle isocèle** : ses angles aigus mesurent chacun $45^\\circ$.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 130\" width=\"300\" height=\"130\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Triangle isocèle -->\n    <polygon points=\"75,25 35,100 115,100\" fill=\"rgba(139, 92, 246, 0.08)\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <line x1=\"52\" y1=\"60\" x2=\"58\" y2=\"65\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" />\n    <line x1=\"92\" y1=\"65\" x2=\"98\" y2=\"60\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" />\n    <path d=\"M 35 100 L 50 100 A 15 15 0 0 0 43 85 Z\" fill=\"rgba(139, 92, 246, 0.3)\" />\n    <path d=\"M 115 100 L 100 100 A 15 15 0 0 1 107 85 Z\" fill=\"rgba(139, 92, 246, 0.3)\" />\n    <text x=\"75\" y=\"118\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#8b5cf6\">Isocèle : 2 angles égaux</text>\n    <!-- Triangle équilatéral -->\n    <polygon points=\"225,25 185,95 265,95\" fill=\"rgba(217, 119, 6, 0.08)\" stroke=\"#d97706\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <line x1=\"202\" y1=\"57\" x2=\"208\" y2=\"63\" stroke=\"#d97706\" stroke-width=\"1.5\" />\n    <line x1=\"242\" y1=\"63\" x2=\"248\" y2=\"57\" stroke=\"#d97706\" stroke-width=\"1.5\" />\n    <line x1=\"223\" y1=\"92\" x2=\"227\" y2=\"98\" stroke=\"#d97706\" stroke-width=\"1.5\" />\n    <text x=\"225\" y=\"118\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#d97706\">Équilatéral : 3 × 60°</text>\n  </svg>\n</div>"
      },
      {
        "title": "À retenir",
        "content": "• Droites parallèles $\\Longrightarrow$ angles alternes-internes (ou correspondants) égaux.\n• Angles alternes-internes (ou correspondants) égaux $\\Longrightarrow$ droites parallèles.\n• Dans un triangle : $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$."
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
      "⚠️ Ne pas confondre **complémentaires** (somme $90^\\circ$) et **supplémentaires** (somme $180^\\circ$).",
      "⚠️ Dans un triangle isocèle, les angles égaux sont ceux **à la base**, pas l'angle au sommet principal."
    ],
    "flashcards": [
      { "q": "Quelle est la somme des 3 angles d'un triangle ?", "a": "$180^\\circ$." },
      { "q": "Que peut-on dire de deux angles alternes-internes formés par deux droites parallèles coupées par une sécante ?", "a": "Ils ont **la même mesure**." },
      { "q": "Dans un triangle isocèle en A, l'angle au sommet mesure 40°. Que valent les deux autres angles ?", "a": "$$180 - 40 = 140 \\quad \\implies \\quad 140 \\div 2 = 70^\\circ \\text{ chacun}$$" },
      { "q": "Que valent les angles d'un triangle équilatéral ?", "a": "Chaque angle mesure exactement **60°** ($180^\\circ \\div 3 = 60^\\circ$)." },
      { "q": "Deux droites coupées par une sécante forment deux angles correspondants égaux. Que peut-on en déduire ?", "a": "Les deux droites sont **parallèles** (réciproque de la propriété des angles correspondants)." },
      { "q": "Quel est le complémentaire d'un angle de $35^\\circ$ ? Et son supplémentaire ?", "a": "Complémentaire : $90^\\circ - 35^\\circ = 55^\\circ$. Supplémentaire : $180^\\circ - 35^\\circ = 145^\\circ$." }
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
        "content": "Deux grandeurs sont **proportionnelles** si l'on passe des valeurs de l'une à celles de l'autre en multipliant **toujours par le même nombre**, le **coefficient de proportionnalité**.\n| Masse (kg) | 2 | 5 | 8 |\n|:---:|:---:|:---:|:---:|\n| Prix (€) | 3 | 7,50 | 12 |\n$\\frac{3}{2} = 1{,}5$ ; $\\frac{7{,}5}{5} = 1{,}5$ ; $\\frac{12}{8} = 1{,}5$ : le tableau est proportionnel, de coefficient $1{,}5$ (le prix au kilogramme).\n• **Contre-exemple** : un taxi qui facture $4$ € de prise en charge plus $2$ € par km. Pour $1$ km on paie $6$ €, pour $2$ km $8$ € (et non $12$ €) : ce n'est **pas** proportionnel.\n• **Graphique** : une situation est proportionnelle lorsque ses points sont **alignés sur une droite passant par l'origine** du repère."
      },
      {
        "title": "2. Calculer une quatrième proportionnelle",
        "content": "Exemple : $3$ kg de tomates coûtent $7{,}50$ €. Combien coûtent $5$ kg ?\n• **Retour à l'unité** : $1$ kg coûte $7{,}50 \\div 3 = 2{,}50$ €, donc $5$ kg coûtent $5 \\times 2{,}50 = 12{,}50$ €.\n• **Coefficient** : on multiplie la masse par $2{,}5$ pour obtenir le prix : $5 \\times 2{,}5 = 12{,}5$.\n• **Linéarité** : $5 \\text{ kg} = 3 \\text{ kg} + 2 \\text{ kg}$ ; si $2$ kg coûtent $5$ €, alors $5$ kg coûtent $7{,}50 + 5 = 12{,}50$ €.\n• **Égalité des produits en croix** (outil qui sera approfondi en 4e) : $x = \\frac{5 \\times 7{,}5}{3} = 12{,}5$."
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
    "title": "5N4 : Puissances (carrés de 1 à 12, puissances de 2 et 3)",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Connaître par cœur les carrés des nombres entiers de $1$ à $12$.",
      "Comprendre la notation $a^n$ : carré ($a^2$), cube ($a^3$), puissances de $2$ et de $3$.",
      "Écrire un produit de facteurs égaux sous la forme d'une puissance, et inversement.",
      "Calculer des expressions comportant des puissances en respectant les priorités opératoires."
    ],
    "keyPoints": [
      {
        "title": "1. Notation puissance",
        "content": "Pour un nombre $a$ et un entier $n \\ge 1$, $a^n$ est le produit de $n$ facteurs tous égaux à $a$ :\n$$a^n = a \\times a \\times \\dots \\times a \\quad (n \\text{ facteurs})$$\n$$2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$$\n• $n$ s'appelle l'**exposant**. $a^2$ se lit « $a$ au **carré** », $a^3$ « $a$ au **cube** ».\n• Lien avec la géométrie : l'aire d'un carré de côté $c$ est $c^2$, le volume d'un cube d'arête $a$ est $a^3$.\n• $a^1 = a$."
      },
      {
        "title": "2. Les carrés de 1 à 12 (à connaître par cœur)",
        "content": "$$\\begin{array}{rclrcl} 1^2 &=& 1 & 7^2 &=& 49 \\\\ 2^2 &=& 4 & 8^2 &=& 64 \\\\ 3^2 &=& 9 & 9^2 &=& 81 \\\\ 4^2 &=& 16 & 10^2 &=& 100 \\\\ 5^2 &=& 25 & 11^2 &=& 121 \\\\ 6^2 &=& 36 & 12^2 &=& 144 \\end{array}$$\nCes carrés permettent de retrouver un nombre positif connaissant son carré : le nombre positif dont le carré est $81$ est $9$, car $9^2 = 81$."
      },
      {
        "title": "3. Puissances de 2 et de 3",
        "content": "• **Puissances de 2** (chaque puissance est le double de la précédente) :\n$$2^1 = 2, \\quad 2^2 = 4, \\quad 2^3 = 8, \\quad 2^4 = 16$$\n$$2^5 = 32, \\quad 2^6 = 64, \\quad 2^{10} = 1\\,024$$\n• **Puissances de 3** (chaque puissance est le triple de la précédente) :\n$$3^1 = 3, \\quad 3^2 = 9, \\quad 3^3 = 27$$\n$$3^4 = 81, \\quad 3^5 = 243$$\n• On admet la convention $a^0 = 1$ pour $a \\neq 0$ : $2^0 = 1$ et $3^0 = 1$."
      },
      {
        "title": "4. Puissances et priorités opératoires",
        "content": "Dans un calcul sans parenthèses, **les puissances sont prioritaires** sur la multiplication, la division, l'addition et la soustraction :\n$$5 + 2 \\times 3^2 = 5 + 2 \\times 9 = 5 + 18 = 23$$\n$$4 \\times 2^3 = 4 \\times 8 = 32 \\quad (\\text{et non } (4 \\times 2)^3 = 8^3)$$\nAvec des parenthèses, on calcule d'abord la parenthèse : $(1 + 2)^2 = 3^2 = 9$, alors que $1 + 2^2 = 1 + 4 = 5$."
      },
      {
        "title": "À retenir",
        "content": "• $a^n$ : $n$ facteurs égaux à $a$ ; $2^3 = 2 \\times 2 \\times 2 = 8$ (et non $6$).\n• Ordre des calculs : parenthèses, **puissances**, puis $\\times$ et $\\div$, puis $+$ et $-$.\n• Les carrés de $1$ à $12$ : $1$, $4$, $9$, $16$, $25$, $36$, $49$, $64$, $81$, $100$, $121$, $144$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire sous forme de puissance puis calculer",
        "example": "Calculer $A = 10 - 2^3$ et $B = 3 \\times 2^2 + 4^2$.",
        "steps": [
          "**Pour $A$** : On calcule la puissance en premier : $2^3 = 2 \\times 2 \\times 2 = 8$. Donc $A = 10 - 8 = 2$.",
          "**Pour $B$** : On calcule les puissances d'abord : $2^2 = 4$ et $4^2 = 16$.",
          "On effectue ensuite la multiplication : $3 \\times 4 = 12$.",
          "On termine par l'addition : $B = 12 + 16 = 28$."
        ]
      },
      {
        "title": "Méthode : Écrire un nombre sous forme de puissance",
        "example": "Écrire $5 \\times 5 \\times 5 \\times 5$ sous forme d'une puissance, puis écrire $64$ comme une puissance de $2$.",
        "steps": [
          "**Étape 1** : On compte les facteurs égaux : il y a $4$ facteurs égaux à $5$, donc $5 \\times 5 \\times 5 \\times 5 = 5^4$.",
          "**Étape 2** : Pour $64$, on divise par $2$ tant que c'est possible : $64 \\to 32 \\to 16 \\to 8 \\to 4 \\to 2 \\to 1$.",
          "**Étape 3** : On a divisé $6$ fois par $2$, donc $64 = 2^6$. Vérification : $2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 64$."
        ]
      },
      {
        "title": "Méthode : Comparer deux puissances",
        "example": "Comparer $2^5$ et $5^2$.",
        "steps": [
          "**Étape 1** : On calcule chaque puissance : $2^5 = 32$ et $5^2 = 25$.",
          "**Étape 2** : $32 > 25$, donc $2^5 > 5^2$.",
          "**Remarque** : échanger la base et l'exposant change en général le résultat."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre $2^3$ et $2 \\times 3$ ! $2^3 = 2 \\times 2 \\times 2 = 8$, alors que $2 \\times 3 = 6$.",
      "⚠️ De même, $3^2 = 3 \\times 3 = 9$ (et non 6) !",
      "⚠️ $4 \\times 2^3$ n'est pas égal à $8^3$ : la puissance est prioritaire, $4 \\times 2^3 = 4 \\times 8 = 32$.",
      "⚠️ $2^3 + 2^2$ n'est pas égal à $2^5$ : $8 + 4 = 12$, alors que $2^5 = 32$."
    ],
    "flashcards": [
      { "q": "Combien vaut $12^2$ de tête ?", "a": "$12 \\times 12 = 144$." },
      { "q": "Que vaut $2^4$ ?", "a": "$2 \\times 2 \\times 2 \\times 2 = 16$." },
      { "q": "Combien vaut $3^3$ ?", "a": "$3 \\times 3 \\times 3 = 27$." },
      { "q": "Dans $4 + 3 \\times 2^3$, quelle opération effectue-t-on en premier ?", "a": "La puissance $2^3 = 8$, puis la multiplication $3 \\times 8 = 24$, enfin l'addition : $4 + 24 = 28$." },
      { "q": "Écrire $81$ comme une puissance de $3$.", "a": "$81 = 3 \\times 3 \\times 3 \\times 3 = 3^4$." },
      { "q": "Quel nombre positif a pour carré $144$ ?", "a": "$12$, car $12^2 = 144$." }
    ]
  },
  "5N5": {
    "title": "5N5 : Calcul littéral et initiation aux équations",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Utiliser une lettre pour désigner un nombre et produire une expression littérale (périmètre, programme de calcul).",
      "Connaître les conventions d'écriture : suppression du signe $\\times$, notations $x^2$ et $x^3$.",
      "Substituer une valeur numérique à une lettre pour calculer la valeur d'une expression.",
      "Réduire une expression simple ($4x + 7x = 11x$) et développer avec la distributivité simple.",
      "Tester si une égalité est vraie pour une valeur donnée et résoudre des équations simples ($x + a = b$, $a \\times x = b$)."
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
        "title": "4. Réduire et développer",
        "content": "• **Réduire**, c'est regrouper les termes de même nature grâce à la distributivité :\n$$4x + 7x = (4 + 7)x = 11x \\qquad 5a - 2a = 3a \\qquad x + x = 2x$$\n• $3x + 5$ ne peut pas se réduire : $3x$ et $5$ ne sont pas de même nature.\n• **Développer** avec la distributivité simple : $4(x + 7) = 4 \\times x + 4 \\times 7 = 4x + 28$."
      },
      {
        "title": "5. Égalité, équation et solution",
        "content": "• Une **équation** est une égalité qui contient un nombre inconnu, noté par une lettre : $2x + 5 = 11$.\n• Un nombre est **solution** de l'équation s'il rend l'égalité vraie : on calcule séparément les deux membres et on compare.\n• Équations simples (on utilise l'opération inverse, comme pour une égalité à trou) :\n$$x + 8 = 15 \\text{ donne } x = 15 - 8 = 7 \\qquad 5x = 45 \\text{ donne } x = 45 \\div 5 = 9$$"
      },
      {
        "title": "À retenir",
        "content": "• $3x = 3 \\times x$ ; $x^2 = x \\times x$ ; $x + x = 2x$.\n• Pour calculer une expression, on remplace la lettre et on **rétablit les $\\times$**.\n• Tester une égalité : calculer **chaque membre** séparément et comparer."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Tester si un nombre est solution d'une équation",
        "example": "Le nombre 3 est-il solution de l'équation $2x + 5 = 11$ ?",
        "steps": [
          "**Membre de gauche** : Pour $x = 3$, $2 \\times 3 + 5 = 6 + 5 = 11$.",
          "**Membre de droite** : $11$.",
          "**Conclusion** : Les deux membres sont égaux, donc 3 est bien solution de l'équation."
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
        "title": "Méthode : Résoudre une équation simple",
        "example": "Résoudre $4x = 26$, puis $x - 3{,}5 = 8$.",
        "steps": [
          "**Étape 1** : $4x = 26$ : on cherche le nombre qui, multiplié par $4$, donne $26$ : $x = 26 \\div 4 = 6{,}5$.",
          "**Vérification** : $4 \\times 6{,}5 = 26$. La solution est $6{,}5$.",
          "**Étape 2** : $x - 3{,}5 = 8$ : on cherche le nombre auquel on enlève $3{,}5$ pour obtenir $8$ : $x = 8 + 3{,}5 = 11{,}5$.",
          "**Vérification** : $11{,}5 - 3{,}5 = 8$. La solution est $11{,}5$."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention lors du remplacement : si $x = 3$, $2x$ ne vaut pas $23$, mais bien $2 \\times 3 = 6$ !",
      "⚠️ On ne peut pas additionner des termes de nature différente : $3x + 5 \\neq 8x$.",
      "⚠️ Ne pas confondre $x + x = 2x$ et $x \\times x = x^2$.",
      "⚠️ Pour $x = 3$, $2x^2 = 2 \\times 3^2 = 2 \\times 9 = 18$ : la puissance ne porte que sur $x$, et non sur $2x$ ($6^2 = 36$ est faux)."
    ],
    "flashcards": [
      { "q": "Comment simplifier l'écriture $x \\times 5$ ?", "a": "On écrit $5x$ (le coefficient numérique se place devant la lettre)." },
      { "q": "Que vaut $2x + 3$ pour $x = 4$ ?", "a": "$2 \\times 4 + 3 = 8 + 3 = 11$." },
      { "q": "Comment simplifie-t-on l'écriture $3 \\times x + 5 \\times y$ ?", "a": "$$3x + 5y$$\n*(On omet le signe $\\times$ devant les lettres)*." },
      { "q": "Développer l'expression $4(x + 7)$.", "a": "$$4 \\times x + 4 \\times 7 = 4x + 28$$" },
      { "q": "Que signifie tester si $x = 3$ vérifie l'égalité $2x + 1 = 7$ ?", "a": "On remplace $x$ par 3 : $2 \\times 3 + 1 = 6 + 1 = 7$. Les deux membres sont égaux, donc l'égalité est vraie pour $x = 3$." },
      { "q": "Réduire $5a + 3a$.", "a": "$5a + 3a = (5 + 3)a = 8a$." },
      { "q": "Résoudre $7x = 56$.", "a": "$x = 56 \\div 7 = 8$ (vérification : $7 \\times 8 = 56$)." }
    ]
  },
  "5G4": {
    "title": "5G4 : Triangles : constructions, droites remarquables et aires",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Utiliser l'inégalité triangulaire pour savoir si un triangle est constructible (et reconnaître le cas des points alignés).",
      "Construire un triangle connaissant trois longueurs, deux longueurs et l'angle compris, ou une longueur et deux angles.",
      "Connaître la médiatrice d'un segment et construire le cercle circonscrit à un triangle.",
      "Définir et tracer les hauteurs d'un triangle.",
      "Calculer l'aire d'un triangle : $\\mathcal{A} = \\frac{b \\times h}{2}$."
    ],
    "keyPoints": [
      {
        "title": "1. Inégalité triangulaire et constructibilité",
        "content": "• Dans un triangle, la longueur du plus grand côté doit être **strictement inférieure à la somme des deux autres**.\n• Si $AB + BC = AC$, alors les points $A, B, C$ sont alignés et $B \\in [AC]$ (triangle aplati).\n• Si le plus grand côté est strictement supérieur à la somme des deux autres, le triangle n'est pas constructible.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 110\" width=\"300\" height=\"110\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Cas 1 : Constructible -->\n    <g>\n      <line x1=\"20\" y1=\"80\" x2=\"100\" y2=\"80\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n      <path d=\"M 40 40 L 20 80 L 100 80 Z\" fill=\"rgba(16, 185, 129, 0.1)\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n      <text x=\"60\" y=\"98\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">Constructible</text>\n      <text x=\"60\" y=\"25\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"var(--text-muted, #64748b)\">c &lt; a + b</text>\n    </g>\n    <!-- Cas 2 : Impossible -->\n    <g>\n      <line x1=\"130\" y1=\"80\" x2=\"210\" y2=\"80\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n      <path d=\"M 155 60 A 25 25 0 0 1 145 80\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n      <path d=\"M 185 60 A 25 25 0 0 0 195 80\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n      <text x=\"170\" y=\"98\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#dc2626\">Impossible</text>\n      <text x=\"170\" y=\"25\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"var(--text-muted, #64748b)\">Trop courts !</text>\n    </g>\n    <!-- Cas 3 : Aplati -->\n    <g>\n      <line x1=\"230\" y1=\"80\" x2=\"290\" y2=\"80\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n      <circle cx=\"255\" cy=\"80\" r=\"3\" fill=\"#d97706\" />\n      <text x=\"260\" y=\"98\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#d97706\">Triangle plat</text>\n      <text x=\"260\" y=\"25\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9\" fill=\"var(--text-muted, #64748b)\">c = a + b</text>\n    </g>\n  </svg>\n</div>"
      },
      {
        "title": "2. Construire un triangle",
        "content": "• **Trois longueurs** : on trace le plus grand côté, puis deux arcs de cercle au compas centrés à ses extrémités ; leur point d'intersection est le troisième sommet.\n• **Deux longueurs et l'angle compris entre elles** : on trace un côté, on construit l'angle au rapporteur à une extrémité, on reporte la seconde longueur sur le côté de l'angle, puis on relie.\n• **Une longueur et deux angles** : on trace le côté, puis les deux angles au rapporteur à ses extrémités ; les côtés des angles se coupent au troisième sommet. (Il faut que la somme des deux angles soit inférieure à $180^\\circ$.)\n• On commence toujours par un **schéma à main levée** codé."
      },
      {
        "title": "3. Droites remarquables du triangle",
        "content": "Dans tout triangle, les 3 familles de droites remarquables possèdent chacune un point de concours unique :\n\n<div style=\"display:flex; flex-direction:column; gap:1.5rem; margin-top:1.2rem;\">\n  <div style=\"background:var(--bg-subtle, #f8fafc); border:1px solid var(--border-color, #e2e8f0); border-radius:10px; padding:1.2rem;\">\n    <h4 style=\"margin:0 0 0.5rem 0; color:var(--primary-text, #1d4ed8); font-size:1.05rem;\">🔵 1. Les médiatrices et le cercle circonscrit (point O)</h4>\n    <p style=\"margin:0 0 0.8rem 0; font-size:0.95rem;\">• <strong>Définition</strong> : la <strong>médiatrice</strong> d'un segment est la droite perpendiculaire à ce segment en son milieu.<br>• <strong>Propriété</strong> : les 3 médiatrices d'un triangle sont <strong>concourantes</strong> en un point noté $O$.<br>• <strong>Cercle circonscrit</strong> : le point $O$ est à égale distance des trois sommets ($OA = OB = OC$). C'est le centre du <strong>cercle circonscrit</strong> qui passe par les trois sommets $A, B$ et $C$.<br>• <strong>Rappel</strong> : un point est sur la médiatrice de $[AB]$ si et seulement s'il est à égale distance de $A$ et de $B$.</p>\n    <div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem 0 0.2rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 270 255\" width=\"270\" height=\"255\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Cercle circonscrit passant par A(110,25), B(35,165), C(235,165) -->\n    <circle cx=\"135\" cy=\"128.5\" r=\"106.5\" fill=\"rgba(37, 99, 235, 0.04)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\" />\n    <!-- Triangle scalène ABC -->\n    <polygon points=\"110,25 35,165 235,165\" fill=\"rgba(37, 99, 235, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <!-- 1. Médiatrice de [BC] (x = 135) -->\n    <line x1=\"135\" y1=\"18\" x2=\"135\" y2=\"238\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <path d=\"M 144 165 L 144 156 L 135 156\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" />\n    <line x1=\"85\" y1=\"161\" x2=\"85\" y2=\"169\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <line x1=\"185\" y1=\"161\" x2=\"185\" y2=\"169\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <!-- 2. Médiatrice de [AC] -->\n    <line x1=\"215\" y1=\"57\" x2=\"60\" y2=\"195.5\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <path d=\"M 166.5 88.3 L 159.8 94.3 L 165.8 101.0\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" />\n    <line x1=\"142.9\" y1=\"55.8\" x2=\"136.9\" y2=\"61.2\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"145.6\" y1=\"58.8\" x2=\"139.6\" y2=\"64.2\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"205.4\" y1=\"125.8\" x2=\"199.4\" y2=\"131.2\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"208.1\" y1=\"128.8\" x2=\"202.1\" y2=\"134.2\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <!-- 3. Médiatrice de [AB] -->\n    <line x1=\"20\" y1=\"67\" x2=\"200\" y2=\"163.3\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <path d=\"M 76.7 87.1 L 84.7 91.3 L 80.4 99.2\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" />\n    <line x1=\"96.4\" y1=\"58.8\" x2=\"89.4\" y2=\"55.0\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"94.8\" y1=\"61.9\" x2=\"87.7\" y2=\"58.1\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"93.1\" y1=\"65.0\" x2=\"86.1\" y2=\"61.2\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"58.9\" y1=\"128.8\" x2=\"51.9\" y2=\"125.0\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"57.3\" y1=\"131.9\" x2=\"50.2\" y2=\"128.1\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"55.6\" y1=\"135.0\" x2=\"48.6\" y2=\"131.2\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <!-- Centre de concours O -->\n    <circle cx=\"135\" cy=\"128.5\" r=\"4.5\" fill=\"var(--primary, #2563eb)\" stroke=\"#ffffff\" stroke-width=\"1.5\" />\n    <text x=\"147\" y=\"133\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">O</text>\n    <!-- Sommets -->\n    <text x=\"110\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"22\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"248\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"135\" y=\"248\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">O = centre du cercle circonscrit (OA = OB = OC)</text>\n  </svg>\n</div>\n  </div>\n\n  <div style=\"background:var(--bg-subtle, #f8fafc); border:1px solid var(--border-color, #e2e8f0); border-radius:10px; padding:1.2rem;\">\n    <h4 style=\"margin:0 0 0.5rem 0; color:#dc2626; font-size:1.05rem;\">🔴 2. Les hauteurs et l'orthocentre (point H)</h4>\n    <p style=\"margin:0 0 0.8rem 0; font-size:0.95rem;\">• <strong>Définition</strong> : une <strong>hauteur</strong> est une droite issue d'un sommet et perpendiculaire au côté opposé.<br>• <strong>Propriété</strong> : les 3 hauteurs d'un triangle sont <strong>concourantes</strong> en un point noté $H$.<br>• <strong>Orthocentre</strong> : ce point d'intersection $H$ s'appelle l'<strong>orthocentre</strong> du triangle.<br>• Dans un triangle qui a un angle obtus, deux hauteurs sont à l'extérieur : on prolonge les côtés.</p>\n    <div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem 0 0.2rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 270 200\" width=\"270\" height=\"200\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Triangle scalène ABC -->\n    <polygon points=\"110,25 35,165 235,165\" fill=\"rgba(220, 38, 38, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <!-- 1. Hauteur issue de A (x = 110) -->\n    <line x1=\"110\" y1=\"18\" x2=\"110\" y2=\"175\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <path d=\"M 119 165 L 119 156 L 110 156\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <!-- 2. Hauteur issue de B -->\n    <line x1=\"35\" y1=\"165\" x2=\"160\" y2=\"53.4\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <path d=\"M 140.3 58.9 L 133.6 64.9 L 139.6 71.6\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <!-- 3. Hauteur issue de C -->\n    <line x1=\"235\" y1=\"165\" x2=\"60\" y2=\"71.3\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <path d=\"M 83.8 73.8 L 91.8 78.1 L 87.5 86.0\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <!-- Orthocentre H -->\n    <circle cx=\"110\" cy=\"98\" r=\"4.5\" fill=\"#dc2626\" stroke=\"#ffffff\" stroke-width=\"1.5\" />\n    <text x=\"122\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">H</text>\n    <!-- Sommets -->\n    <text x=\"110\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"22\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"248\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"135\" y=\"195\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">H = orthocentre (intersection des 3 hauteurs)</text>\n  </svg>\n</div>\n  </div>\n\n  <div style=\"background:var(--bg-subtle, #f8fafc); border:1px solid var(--border-color, #e2e8f0); border-radius:10px; padding:1.2rem;\">\n    <h4 style=\"margin:0 0 0.5rem 0; color:#059669; font-size:1.05rem;\">🟢 3. Pour aller plus loin : les médianes et le centre de gravité (point G)</h4>\n    <p style=\"margin:0 0 0.8rem 0; font-size:0.95rem;\">• <strong>Définition</strong> : une <strong>médiane</strong> est une droite issue d'un sommet et reliant ce sommet au milieu du côté opposé.<br>• <strong>Propriété</strong> : les 3 médianes d'un triangle sont <strong>concourantes</strong> en un point noté $G$.<br>• <strong>Centre de gravité</strong> : ce point d'intersection $G$ est le <strong>centre de gravité</strong> (point d'équilibre). Il est situé aux $\\frac{2}{3}$ de chaque médiane en partant du sommet ($AG = \\frac{2}{3}AA'$).</p>\n    <div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem 0 0.2rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 270 200\" width=\"270\" height=\"200\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Triangle scalène ABC -->\n    <polygon points=\"110,25 35,165 235,165\" fill=\"rgba(16, 185, 129, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <!-- 1. Médiane issue de A vers A'(135, 165) -->\n    <line x1=\"110\" y1=\"25\" x2=\"135\" y2=\"165\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <circle cx=\"135\" cy=\"165\" r=\"3\" fill=\"#059669\" />\n    <text x=\"135\" y=\"178\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#059669\">A'</text>\n    <line x1=\"85\" y1=\"161\" x2=\"85\" y2=\"169\" stroke=\"#059669\" stroke-width=\"2\" />\n    <line x1=\"185\" y1=\"161\" x2=\"185\" y2=\"169\" stroke=\"#059669\" stroke-width=\"2\" />\n    <!-- 2. Médiane issue de B vers B'(172.5, 95) -->\n    <line x1=\"35\" y1=\"165\" x2=\"172.5\" y2=\"95\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <circle cx=\"172.5\" cy=\"95\" r=\"3\" fill=\"#059669\" />\n    <text x=\"186\" y=\"97\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#059669\">B'</text>\n    <line x1=\"142.9\" y1=\"55.8\" x2=\"136.9\" y2=\"61.2\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"145.6\" y1=\"58.8\" x2=\"139.6\" y2=\"64.2\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"205.4\" y1=\"125.8\" x2=\"199.4\" y2=\"131.2\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"208.1\" y1=\"128.8\" x2=\"202.1\" y2=\"134.2\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <!-- 3. Médiane issue de C vers C'(72.5, 95) -->\n    <line x1=\"235\" y1=\"165\" x2=\"72.5\" y2=\"95\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <circle cx=\"72.5\" cy=\"95\" r=\"3\" fill=\"#059669\" />\n    <text x=\"59\" y=\"97\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#059669\">C'</text>\n    <line x1=\"96.4\" y1=\"58.8\" x2=\"89.4\" y2=\"55.0\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"94.8\" y1=\"61.9\" x2=\"87.7\" y2=\"58.1\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"93.1\" y1=\"65.0\" x2=\"86.1\" y2=\"61.2\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"58.9\" y1=\"128.8\" x2=\"51.9\" y2=\"125.0\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"57.3\" y1=\"131.9\" x2=\"50.2\" y2=\"128.1\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <line x1=\"55.6\" y1=\"135.0\" x2=\"48.6\" y2=\"131.2\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <!-- Centre de gravité G -->\n    <circle cx=\"126.7\" cy=\"118.3\" r=\"4.5\" fill=\"#059669\" stroke=\"#ffffff\" stroke-width=\"1.5\" />\n    <text x=\"138\" y=\"116\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#059669\">G</text>\n    <!-- Sommets -->\n    <text x=\"110\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"22\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"248\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"135\" y=\"195\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#059669\">G = centre de gravité (AG = 2/3 AA')</text>\n  </svg>\n</div>\n  </div>\n</div>"
      },
      {
        "title": "4. Aire et périmètre du triangle",
        "content": "$$\\mathcal{P} = a + b + c \\quad \\text{et} \\quad \\mathcal{A} = \\frac{b \\times h}{2}$$\noù $h$ est la **hauteur relative** à la base $b$ (la longueur du segment perpendiculaire à la base, issu du sommet opposé).\n• N'importe quel côté peut servir de base, à condition de prendre la hauteur qui lui correspond.\n• Dans un triangle rectangle, les deux côtés de l'angle droit sont une base et la hauteur correspondante : $\\mathcal{A} = \\frac{6 \\times 9}{2} = 27\\text{ cm}^2$ pour des côtés de l'angle droit de $6\\text{ cm}$ et $9\\text{ cm}$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 130\" width=\"280\" height=\"130\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"110,25 40,105 220,105\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <line x1=\"110\" y1=\"25\" x2=\"110\" y2=\"105\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"3 3\" />\n    <path d=\"M 110 97 L 116 97 L 116 105\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.2\" />\n    <text x=\"96\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">h</text>\n    <text x=\"130\" y=\"120\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">Base b</text>\n    <text x=\"200\" y=\"45\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">Aire = (b × h) / 2</text>\n  </svg>\n</div>"
      },
      {
        "title": "À retenir",
        "content": "• Triangle constructible $\\Longleftrightarrow$ plus grand côté **strictement inférieur** à la somme des deux autres.\n• Médiatrices $\\to$ centre du cercle circonscrit ; hauteurs $\\to$ orthocentre.\n• $\\mathcal{A} = \\frac{\\text{base} \\times \\text{hauteur}}{2}$ (ne pas oublier de diviser par $2$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer l'aire d'un triangle",
        "example": "Calculer l'aire d'un triangle dont une base mesure $8\\text{ cm}$ et la hauteur correspondante $5\\text{ cm}$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 240 120\" width=\"240\" height=\"120\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"90,20 30,95 200,95\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"90\" y1=\"20\" x2=\"90\" y2=\"95\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"3 3\" />\n    <path d=\"M 90 88 L 96 88 L 96 95\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.2\" />\n    <text x=\"75\" y=\"60\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">h = 5 cm</text>\n    <text x=\"115\" y=\"110\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">base = 8 cm</text>\n  </svg>\n</div>",
        "steps": [
          "**Formule** : $\\text{Aire} = \\frac{b \\times h}{2}$.",
          "**Calcul** : $\\text{Aire} = \\frac{8 \\times 5}{2} = \\frac{40}{2} = 20\\text{ cm}^2$."
        ]
      },
      {
        "title": "Méthode : Construire un triangle connaissant ses trois côtés",
        "example": "Construire le triangle $ABC$ tel que $AB = 6\\text{ cm}$, $AC = 5\\text{ cm}$ et $BC = 4\\text{ cm}$.",
        "steps": [
          "**Étape 1** : On vérifie qu'il est constructible : $6 < 5 + 4 = 9$.",
          "**Étape 2** : On trace le segment $[AB]$ de $6\\text{ cm}$.",
          "**Étape 3** : On trace un arc de cercle de centre $A$ et de rayon $5\\text{ cm}$, puis un arc de centre $B$ et de rayon $4\\text{ cm}$.",
          "**Étape 4** : Le point d'intersection des arcs est $C$. On trace $[AC]$ et $[BC]$ et on laisse les traits de construction."
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
      "⚠️ L'inégalité triangulaire se vérifie avec le **plus grand** côté : pour $3$, $4$ et $8$, on compare $8$ à $3 + 4$."
    ],
    "flashcards": [
      { "q": "Comment s'appelle le point d'intersection des trois hauteurs d'un triangle ?", "a": "L'**orthocentre**." },
      { "q": "Comment s'appelle le point de concours des trois médianes d'un triangle ?", "a": "Le **centre de gravité** (chaque médiane partage aussi le triangle en deux triangles de même aire)." },
      { "q": "Que représente le point de concours des trois médiatrices d'un triangle ?", "a": "Le **centre du cercle circonscrit** au triangle (qui passe par les 3 sommets car il est équidistant de ceux-ci)." },
      { "q": "Un triangle de côtés 3 cm, 4 cm et 8 cm est-il constructible ?", "a": "Non, car $3 + 4 = 7 < 8$ (le plus grand côté est strictement supérieur à la somme des deux autres)." },
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
      "Calculer l'aire d'un parallélogramme : $\\mathcal{A} = b \\times h$."
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
      "Calculer le volume d'un pavé droit, d'un prisme droit et d'un cylindre : $\\mathcal{V} = \\mathcal{B} \\times h$.",
      "Convertir des unités de volume et de contenance ($1\\text{ L} = 1\\text{ dm}^3$, $1\\text{ m}^3 = 1\\,000\\text{ L}$)."
    ],
    "keyPoints": [
      {
        "title": "1. Le prisme droit",
        "content": "Un prisme droit possède :\n• Deux bases parallèles qui sont des polygones superposables.\n• Des faces latérales rectangulaires perpendiculaires aux bases.\n• Des arêtes latérales toutes de même longueur et parallèles, correspondant à la hauteur du prisme.\n• Un prisme droit dont la base a $n$ côtés possède $n + 2$ faces, $3n$ arêtes et $2n$ sommets. Prisme à base triangulaire : $5$ faces, $9$ arêtes, $6$ sommets.\n• Le pavé droit est un prisme droit particulier (sa base est un rectangle).\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 150\" width=\"280\" height=\"150\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Base arrière (dashed) -->\n    <polygon points=\"50,115 110,130 90,95\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <!-- Base avant -->\n    <polygon points=\"50,45 110,60 90,25\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <!-- Arêtes latérales -->\n    <line x1=\"50\" y1=\"45\" x2=\"50\" y2=\"115\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"110\" y1=\"60\" x2=\"110\" y2=\"130\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"90\" y1=\"25\" x2=\"90\" y2=\"95\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <text x=\"80\" y=\"15\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">Base 1 (triangle)</text>\n    <text x=\"80\" y=\"145\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Base 2 (parallèle)</text>\n    <line x1=\"120\" y1=\"60\" x2=\"120\" y2=\"130\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n    <text x=\"130\" y=\"98\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">h</text>\n    <!-- Patron à droite -->\n    <rect x=\"170\" y=\"40\" width=\"85\" height=\"55\" fill=\"rgba(37, 99, 235, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" />\n    <line x1=\"198\" y1=\"40\" x2=\"198\" y2=\"95\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1\" stroke-dasharray=\"2 2\" />\n    <line x1=\"226\" y1=\"40\" x2=\"226\" y2=\"95\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1\" stroke-dasharray=\"2 2\" />\n    <polygon points=\"198,40 226,40 212,15\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n    <polygon points=\"198,95 226,95 212,120\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n    <text x=\"212\" y=\"135\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"var(--text-muted, #64748b)\">Patron déployé</text>\n  </svg>\n</div>"
      },
      {
        "title": "2. Le cylindre de révolution et perspective cavalière",
        "content": "• Un cylindre de révolution s'obtient en faisant tourner un rectangle autour d'un de ses côtés. Ses bases sont deux disques superposables et parallèles de rayon $R$. Sa surface latérale se déroule en un rectangle de dimensions $2\\pi R \\times h$.\n• **Perspective cavalière** : les arêtes cachées se tracent en pointillés ; les fuyantes sont inclinées et réduites.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 150\" width=\"280\" height=\"150\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Cylindre 3D -->\n    <g>\n      <ellipse cx=\"65\" cy=\"35\" rx=\"40\" ry=\"12\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" />\n      <line x1=\"25\" y1=\"35\" x2=\"25\" y2=\"115\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"105\" y1=\"35\" x2=\"105\" y2=\"115\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <path d=\"M 25 115 A 40 12 0 0 0 105 115\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <path d=\"M 25 115 A 40 12 0 0 1 105 115\" fill=\"none\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n      <line x1=\"65\" y1=\"35\" x2=\"105\" y2=\"35\" stroke=\"#10b981\" stroke-width=\"2\" />\n      <text x=\"85\" y=\"30\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">R</text>\n      <line x1=\"112\" y1=\"35\" x2=\"112\" y2=\"115\" stroke=\"#dc2626\" stroke-width=\"1.5\" />\n      <text x=\"120\" y=\"78\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">h</text>\n    </g>\n    <!-- Patron à droite -->\n    <g>\n      <rect x=\"160\" y=\"45\" width=\"95\" height=\"60\" fill=\"rgba(139, 92, 246, 0.08)\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" />\n      <circle cx=\"207.5\" cy=\"25\" r=\"18\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" />\n      <circle cx=\"207.5\" cy=\"125\" r=\"18\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" />\n      <text x=\"207.5\" y=\"40\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#8b5cf6\">Longueur = 2πR</text>\n    </g>\n  </svg>\n</div>"
      },
      {
        "title": "3. Patrons",
        "content": "• **Patron d'un prisme droit** : les deux bases et un grand rectangle formé des faces latérales, dont la longueur est égale au **périmètre de la base** et la largeur à la **hauteur** du prisme.\n• **Patron d'un cylindre** : deux disques de rayon $R$ et un rectangle de largeur $h$ et de longueur $2 \\times \\pi \\times R$ (le périmètre du disque de base).\nExemple : pour un cylindre de rayon $3\\text{ cm}$, la longueur du rectangle est $2 \\times \\pi \\times 3 \\approx 18{,}8\\text{ cm}$."
      },
      {
        "title": "4. Volumes",
        "content": "Pour un prisme droit ou un cylindre, le volume est **l'aire de la base multipliée par la hauteur** :\n$$\\mathcal{V} = \\mathcal{B} \\times h$$\n• Pavé droit : $\\mathcal{V} = L \\times \\ell \\times h$.\n• Prisme droit : $\\mathcal{V} = \\mathcal{B} \\times h$ (on calcule d'abord l'aire $\\mathcal{B}$ de la base : triangle, rectangle…).\n• Cylindre de rayon $R$ : $\\mathcal{B} = \\pi \\times R^2$, donc $\\mathcal{V} = \\pi \\times R^2 \\times h$."
      },
      {
        "title": "5. Unités de volume et de contenance",
        "content": "Entre deux unités de volume voisines, on multiplie ou on divise **par $1\\,000$** (un cube de $1\\text{ dm}$ d'arête contient $10 \\times 10 \\times 10$ cubes de $1\\text{ cm}$ d'arête).\n$$1\\text{ m}^3 = 1\\,000\\text{ dm}^3 \\qquad 1\\text{ dm}^3 = 1\\,000\\text{ cm}^3$$\nLien avec les contenances : $1\\text{ dm}^3 = 1\\text{ L}$ ; $1\\text{ cm}^3 = 1\\text{ mL}$ ; $1\\text{ m}^3 = 1\\,000\\text{ L}$.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 240 100\" width=\"240\" height=\"100\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"20\" y=\"20\" width=\"200\" height=\"60\" rx=\"8\" fill=\"rgba(16, 185, 129, 0.08)\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <text x=\"120\" y=\"45\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#10b981\">1 L = 1 dm³ = 1 000 cm³</text>\n    <text x=\"120\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">1 m³ = 1 000 L</text>\n  </svg>\n</div>"
      },
      {
        "title": "À retenir",
        "content": "• Prisme droit et cylindre : $\\mathcal{V} = \\mathcal{B} \\times h$.\n• Cylindre : $\\mathcal{V} = \\pi \\times R^2 \\times h$ (on élève le **rayon** au carré).\n• $1\\text{ L} = 1\\text{ dm}^3$ et $1\\text{ m}^3 = 1\\,000\\text{ L}$."
      }
    ],
    "methods": [
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
      "⚠️ Dans $\\pi \\times R^2$, seul le rayon est élevé au carré : pour $R = 3$, $\\pi \\times 3^2 = 9\\pi$, et non $(3\\pi)^2$."
    ],
    "flashcards": [
      { "q": "Quelle est la formule générale du volume d'un prisme droit ou d'un cylindre ?", "a": "$V = \\text{Aire de la base} \\times \\text{hauteur} = \\mathcal{B} \\times h$." },
      { "q": "Combien de faces latérales rectangulaires possède un prisme droit à base pentagonale (5 côtés) ?", "a": "5 faces latérales (autant que de côtés sur la base polygonale)." },
      { "q": "Combien de litres contient un volume de $12\\text{ dm}^3$ ?", "a": "$12\\text{ L}$, car $1\\text{ dm}^3 = 1\\text{ L}$." },
      { "q": "Comment obtient-on un cylindre de révolution ?", "a": "En faisant tourner un rectangle autour de l'un de ses côtés." },
      { "q": "Quelle est l'aire de la base d'un cylindre de rayon 4 cm ?", "a": "$\\pi \\times 4^2 = 16\\pi\\text{ cm}^2$." },
      { "q": "Combien d'arêtes possède un prisme droit à base triangulaire ?", "a": "$9$ arêtes ($3$ par base et $3$ arêtes latérales)." },
      { "q": "Combien de litres dans $1\\text{ m}^3$ ?", "a": "$1\\text{ m}^3 = 1\\,000\\text{ dm}^3 = 1\\,000\\text{ L}$." }
    ]
  },
  "5D1": {
    "title": "5D1 : Statistiques : effectifs, fréquences et diagrammes",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Recueillir et organiser des données dans un tableau d'effectifs.",
      "Calculer des effectifs et des fréquences (fraction, nombre décimal, pourcentage).",
      "Lire, interpréter et construire des diagrammes en bâtons et des diagrammes circulaires.",
      "Calculer et interpréter la moyenne d'une série (liste de valeurs ou tableau d'effectifs)."
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
        "content": "La **moyenne** d'une série est la somme de toutes les valeurs divisée par l'effectif total :\n$$\\text{moyenne} = \\frac{\\text{somme des valeurs}}{\\text{effectif total}}$$\n• **À partir d'un tableau**, chaque valeur compte autant de fois que son effectif. Dans l'exemple :\n$$\\frac{0 \\times 6 + 1 \\times 10 + 2 \\times 5 + 3 \\times 3 + 4 \\times 1}{25} = \\frac{33}{25} = 1{,}32$$\nEn moyenne, un élève de cette classe a $1{,}32$ frère ou sœur.\n• La moyenne est toujours comprise entre la plus petite et la plus grande valeur ; ce n'est pas forcément une valeur de la série."
      },
      {
        "title": "4. Représentations graphiques",
        "content": "• **Diagramme en bâtons** : la hauteur de chaque bâton est **proportionnelle** à l'effectif de la valeur. On lit d'abord la graduation de l'axe vertical.\n• **Diagramme circulaire** : l'angle de chaque secteur est **proportionnel** à l'effectif. Le disque entier ($360^\\circ$) représente l'effectif total :\n$$\\text{angle} = \\text{fréquence} \\times 360^\\circ$$\nDans l'exemple, la valeur $1$ (fréquence $0{,}4$) correspond à un angle de $0{,}4 \\times 360^\\circ = 144^\\circ$."
      },
      {
        "title": "À retenir",
        "content": "• Fréquence $= \\frac{\\text{effectif}}{\\text{effectif total}}$, entre $0$ et $1$.\n• Moyenne $= \\frac{\\text{somme des valeurs}}{\\text{effectif total}}$.\n• Diagramme circulaire : angle $=$ fréquence $\\times 360^\\circ$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une moyenne simple",
        "example": "Calculer la moyenne des notes : 12, 15, 14, 11, 18.",
        "steps": [
          "**Somme des valeurs** : $12 + 15 + 14 + 11 + 18 = 70$.",
          "**Nombre de valeurs** : $N = 5$.",
          "**Moyenne** : $\\bar{x} = \\frac{70}{5} = 14$."
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
        "title": "Méthode : Calculer une moyenne à partir d'un tableau d'effectifs",
        "example": "Notes d'un contrôle : la note $10$ a été obtenue $3$ fois, la note $12$ cinq fois et la note $15$ deux fois. Calculer la moyenne.",
        "steps": [
          "**Étape 1** : Effectif total : $3 + 5 + 2 = 10$ notes.",
          "**Étape 2** : Somme des notes : $10 \\times 3 + 12 \\times 5 + 15 \\times 2 = 30 + 60 + 30 = 120$.",
          "**Étape 3** : Moyenne : $\\frac{120}{10} = 12$."
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
      }
    ],
    "traps": [
      "⚠️ La somme des fréquences en pourcentages doit toujours être égale à 100%.",
      "⚠️ Dans un diagramme circulaire, les angles sont proportionnels aux effectifs ($360^\\circ$ pour le total).",
      "⚠️ Avec un tableau d'effectifs, on divise par l'**effectif total** ($10$ notes), et non par le nombre de valeurs différentes ($3$ notes différentes).",
      "⚠️ Une fréquence ne peut pas dépasser $1$ (ni $100\\,\\%$) : si on trouve plus, on a inversé effectif et effectif total."
    ],
    "flashcards": [
      { "q": "Comment convertir une fréquence de 0,35 en pourcentage ?", "a": "$0{,}35 \\times 100 = 35\\,\\%$." },
      { "q": "Quel angle représente 25% dans un diagramme circulaire ?", "a": "$25\\,\\% \\times 360^\\circ = 90^\\circ$ (un quart de cercle)." },
      { "q": "Comment calcule-t-on la fréquence d'une valeur en statistique ?", "a": "$$\\text{Fréquence} = \\frac{\\text{Effectif de la valeur}}{\\text{Effectif total}}$$" },
      { "q": "Que vaut la somme de toutes les fréquences en pourcentage d'une série ?", "a": "Elle est **toujours égale à 100 %** (ou 1 sous forme décimale)." },
      { "q": "Comment calcule-t-on la moyenne des trois notes : 12, 14 et 16 ?", "a": "$$\\frac{12 + 14 + 16}{3} = \\frac{42}{3} = 14$$" },
      { "q": "Dans un diagramme circulaire représentant $20$ élèves, quel angle correspond à un élève ?", "a": "$360^\\circ \\div 20 = 18^\\circ$." }
    ]
  },
  "5D2": {
    "title": "5D2 : Probabilités : découverte du hasard et événements",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Reconnaître une expérience aléatoire et lister ses issues.",
      "Utiliser le vocabulaire : issue, événement, événement élémentaire, impossible, certain.",
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
        "content": "• Un **événement** est une condition qui peut être réalisée ou non ; il est réalisé par une ou plusieurs issues.\nExemple avec un dé : l'événement « obtenir un nombre pair » est réalisé par les issues $2$, $4$ et $6$.\n• Un événement réalisé par **une seule** issue est un **événement élémentaire** : « obtenir $5$ ».\n• Un événement **impossible** n'est jamais réalisé (« obtenir $7$ ») ; un événement **certain** est toujours réalisé (« obtenir un nombre inférieur à $10$ »)."
      },
      {
        "title": "3. Probabilité d'un événement",
        "content": "La **probabilité** d'un événement mesure ses chances de se réaliser. C'est un nombre compris **entre $0$ et $1$** :\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem auto;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 440 90\" width=\"440\" height=\"90\" style=\"max-width:440px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Échelle des probabilités de 0 (impossible) à 1 (certain)\">\n<defs><linearGradient id=\"proba-grad\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"0\"><stop offset=\"0\" stop-color=\"#dc2626\"/><stop offset=\"0.5\" stop-color=\"#f59e0b\"/><stop offset=\"1\" stop-color=\"#059669\"/></linearGradient></defs>\n<rect x=\"30\" y=\"40\" width=\"380\" height=\"12\" rx=\"6\" fill=\"url(#proba-grad)\"/>\n<line x1=\"30\" y1=\"34\" x2=\"30\" y2=\"58\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"30\" y=\"26\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">0</text>\n<text x=\"30\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">impossible</text>\n<line x1=\"125\" y1=\"34\" x2=\"125\" y2=\"58\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"125\" y=\"26\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">0,25</text>\n<text x=\"125\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">peu probable</text>\n<line x1=\"220\" y1=\"34\" x2=\"220\" y2=\"58\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"220\" y=\"26\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">0,5</text>\n<text x=\"220\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">une chance sur deux</text>\n<line x1=\"315\" y1=\"34\" x2=\"315\" y2=\"58\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"315\" y=\"26\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">0,75</text>\n<text x=\"315\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">très probable</text>\n<line x1=\"410\" y1=\"34\" x2=\"410\" y2=\"58\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\"/>\n<text x=\"410\" y=\"26\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">1</text>\n<text x=\"410\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">certain</text>\n</svg>\n</div>\n• Événement impossible : probabilité $0$ ; événement certain : probabilité $1$.\n• Une probabilité s'écrit en fraction, en décimal ou en pourcentage : $\\frac{1}{4} = 0{,}25 = 25\\,\\%$."
      },
      {
        "title": "4. Situation d'équiprobabilité",
        "content": "Lorsque toutes les issues ont la **même chance** de se produire (dé équilibré, boules indiscernables au toucher…), on parle d'**équiprobabilité** et :\n$$P(\\text{événement}) = \\frac{\\text{nombre d'issues favorables}}{\\text{nombre total d'issues}}$$\nExemple : avec un dé équilibré, $P(\\text{nombre pair}) = \\frac{3}{6} = \\frac{1}{2}$."
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
          "**Étape 1** : Les boules sont tirées au hasard : situation d'équiprobabilité. Nombre total d'issues : $4 + 6 = 10$ boules.",
          "**Étape 2** : Issues favorables : les $4$ boules bleues.",
          "**Étape 3** : $P(\\text{bleue}) = \\frac{4}{10} = \\frac{2}{5} = 0{,}4 = 40\\,\\%$."
        ]
      },
      {
        "title": "Méthode : Probabilité avec un dé",
        "example": "On lance un dé équilibré à six faces. Quelle est la probabilité d'obtenir un multiple de $3$ ?",
        "steps": [
          "**Étape 1** : Issues possibles : $1, 2, 3, 4, 5, 6$, soit $6$ issues équiprobables.",
          "**Étape 2** : Issues favorables (multiples de $3$) : $3$ et $6$, soit $2$ issues.",
          "**Étape 3** : $P = \\frac{2}{6} = \\frac{1}{3}$."
        ]
      },
      {
        "title": "Méthode : Probabilité quand des issues se répètent",
        "example": "On choisit au hasard une lettre du mot MATHEMATIQUES. Quelle est la probabilité de tirer la lettre M ? une voyelle ?",
        "steps": [
          "**Étape 1** : Le mot compte $13$ lettres : chaque lettre (chaque position) a la même chance d'être choisie.",
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
      { "q": "Qu'est-ce qu'un événement élémentaire ?", "a": "Un événement réalisé par une seule issue (par exemple « obtenir $5$ » avec un dé)." }
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
        "content": "• Une formule donne la valeur d'une grandeur à partir d'une autre.\n• Tableau de valeurs $\\to$ points $(x ; y)$ $\\to$ graphique.\n• Proportionnalité $\\Longleftrightarrow$ points alignés avec l'**origine** ; une partie fixe (abonnement) rend la situation non proportionnelle."
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
      "Utiliser une boucle bornée (« répéter $n$ fois ») et une instruction conditionnelle (« si … alors … sinon »).",
      "Utiliser une variable, notamment pour programmer un programme de calcul.",
      "Tracer un polygone régulier : angle de rotation $\\frac{360^\\circ}{n}$."
    ],
    "keyPoints": [
      {
        "title": "1. Les bases de Scratch",
        "content": "• Le **lutin** exécute le script sur la **scène**. Sa position est repérée par ses coordonnées : $x$ entre $-240$ et $240$, $y$ entre $-180$ et $180$.\n• Un script commence par un bloc **événement** : « quand le drapeau vert est cliqué », « quand la touche espace est pressée ».\n• Blocs de **mouvement** : « avancer de $50$ pas », « tourner de $90$ degrés », « aller à x : $0$ y : $0$ ».\n• Extension **stylo** : « stylo en position d'écriture » pour laisser une trace, « effacer tout » pour repartir d'une scène vide."
      },
      {
        "title": "2. Boucles et polygones réguliers",
        "content": "Une **boucle** répète une séquence d'instructions : « répéter $n$ fois », « répéter jusqu'à ce que … », « répéter indéfiniment ».\nPour tracer un polygone régulier à $n$ côtés, le lutin fait un tour complet ($360^\\circ$) en $n$ rotations égales :\n```text\nrépéter n fois\n    avancer de (côté)\n    tourner de (360 / n)\n```\n| Polygone régulier | $n$ | Angle de rotation |\n|:---|:---:|:---:|\n| triangle équilatéral | 3 | $120^\\circ$ |\n| carré | 4 | $90^\\circ$ |\n| pentagone | 5 | $72^\\circ$ |\n| hexagone | 6 | $60^\\circ$ |\n| octogone | 8 | $45^\\circ$ |"
      },
      {
        "title": "3. Variables",
        "content": "Une **variable** est une « boîte » qui porte un nom et contient une valeur qui peut changer pendant le programme : « mettre score à $0$ », « ajouter $1$ à score ».\nProgramme de calcul en Scratch (le nombre saisi est stocké dans « réponse ») :\n```text\nquand drapeau vert cliqué\ndemander [Nombre ?] et attendre\nmettre [r] à ((réponse) * 3)\najouter 5 à [r]\ndire (r)\n```\nLa variable $r$ vaut d'abord le triple du nombre saisi, puis on lui ajoute $5$ : si l'utilisateur tape $4$, le lutin dit $17$ ($4 \\times 3 + 5$). Dans Scratch, le signe $\\times$ s'écrit « * »."
      },
      {
        "title": "4. Instructions conditionnelles",
        "content": "Le bloc « **si** <condition> **alors** … **sinon** … » exécute une partie du script **seulement si** la condition est vraie, l'autre partie sinon.\n```text\nsi (réponse) = 12 alors\n    dire [Bravo !]\nsinon\n    dire [Essaie encore]\n```\nUne condition peut utiliser $=$, $<$, $>$ ou un capteur (« couleur touchée ? », « touche pressée ? »)."
      },
      {
        "title": "À retenir",
        "content": "• Un script = un **événement** + une **séquence** d'instructions exécutées dans l'ordre.\n• « répéter $n$ fois » exécute $n$ fois **tout** le bloc qu'elle contient.\n• Polygone régulier à $n$ côtés : tourner de $\\frac{360^\\circ}{n}$.\n• Une variable mémorise une valeur ; « si … alors … sinon » choisit entre deux actions."
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
        "title": "Méthode : Exécuter un script à la main avec une variable",
        "example": "Quelle est la valeur finale de $x$ ?\n```text\nmettre [x] à 4\nrépéter 3 fois\n    mettre [x] à ((x) * 2)\n    ajouter 1 à [x]\n```",
        "steps": [
          "**Étape 1** : On fait un tableau de suivi. Au départ, $x = 4$.",
          "**Tour 1** : $x = 4 \\times 2 = 8$, puis $x = 8 + 1 = 9$.",
          "**Tour 2** : $x = 9 \\times 2 = 18$, puis $x = 19$.",
          "**Tour 3** : $x = 19 \\times 2 = 38$, puis $x = 39$. La valeur finale est $39$."
        ]
      },
      {
        "title": "Méthode : Utiliser une condition",
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
      "⚠️ Dans « si … alors … sinon », **une seule** des deux parties est exécutée."
    ],
    "flashcards": [
      { "q": "De quel angle doit-on tourner pour tracer un carré dans Scratch ?", "a": "$90^\\circ$ (car $\\frac{360^\\circ}{4} = 90^\\circ$)." },
      { "q": "De quel angle doit-on tourner pour tracer un triangle équilatéral ?", "a": "$120^\\circ$ (car $\\frac{360^\\circ}{3} = 120^\\circ$)." },
      { "q": "De quel angle le lutin doit-il tourner pour tracer un hexagone régulier ?", "a": "$360^\\circ \\div 6 = 60^\\circ$." },
      { "q": "Combien de fois est exécutée l'instruction située dans un bloc « répéter 5 fois » ?", "a": "Exactement **5 fois** de suite." },
      { "q": "Que fait le bloc « avancer de 50 » dans Scratch ?", "a": "Il déplace le lutin de 50 pas dans la direction vers laquelle il est orienté." },
      { "q": "Qu'est-ce qu'une variable en programmation ?", "a": "Une « boîte » nommée qui mémorise une valeur pouvant changer pendant l'exécution du programme." }
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
      "placeholder": "Ex: 27",
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
      "placeholder": "Ex: 12",
      "hint1": "Effectue le calcul entre parenthèses d'abord : $18 - 6 = 12$.",
      "hint2": "Puis $12 \\div 3 = 4$ et $2 \\times 4 = 8$. Enfin additionne.",
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
      "placeholder": "Ex: 120",
      "hint1": "Calcule chaque parenthèse : $24 - 9 = 15$ et $3 + 5 = 8$.",
      "solution": "$$C = 15 \\times 8 = 120$$",
      "skill": "Calculer"
    },
    {
      "id": "5N1-4",
      "chapterId": "5N1",
      "tier": 4,
      "title": "Défi 4ème : Crochets et parenthèses imbriquées",
      "statement": "Calculer la valeur exacte de l'expression :\n$$D = [48 - (3 \\times 7 - 5)] \\div 4 + 6 \\times (14 - 3 \\times 3)$$",
      "type": "exact",
      "answer": "38",
      "placeholder": "Ex: 38",
      "hint1": "1. Crochet : $3 \\times 7 - 5 = 16$, puis $48 - 16 = 32$, puis $32 \\div 4 = 8$.",
      "hint2": "2. Seconde parenthèse : $14 - 9 = 5$, puis $6 \\times 5 = 30$. Somme finale : $8 + 30$.",
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
      "placeholder": "Ex: -13",
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
      "placeholder": "Ex: -5",
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
      "placeholder": "Ex: 24",
      "hint1": "Soustraire un nombre négatif revient à ajouter son opposé : $a - (-b) = a + b$.",
      "solution": "$$D = 15 + 9 = 24$$",
      "skill": "Calculer"
    },
    {
      "id": "5N2-4",
      "chapterId": "5N2",
      "tier": 4,
      "title": "Défi 4ème : Chaîne de calculs de relatifs avec crochets",
      "statement": "Calculer la valeur exacte de l'expression :\n$$E = (-25) - [(-14) + 8 - (-6)] + (-11)$$",
      "type": "exact",
      "answer": "-36",
      "placeholder": "Ex: -36",
      "hint1": "Calcule l'intérieur du crochet : $(-14) + 8 + 6 = 0$.",
      "hint2": "Il reste $(-25) - 0 + (-11)$.",
      "solution": "1. Intérieur du crochet : $(-14) + 8 + 6 = 0$.\n2. Remplacement : $E = (-25) - 0 + (-11) = -36$.",
      "skill": "Calculer"
    }
  ],
  "5N3": [
    {
      "id": "5N3-1",
      "chapterId": "5N3",
      "tier": 1,
      "title": "Fractions égales et proportionnalité",
      "statement": "Compléter pour trouver le nombre manquant $x$ :\n$$\\frac{3}{7} = \\frac{x}{35}$$",
      "type": "exact",
      "answer": "15",
      "placeholder": "Ex: 15",
      "hint1": "Le dénominateur 7 est multiplié par 5 pour donner 35. Fais de même au numérateur.",
      "solution": "$$\\frac{3 \\times 5}{7 \\times 5} = \\frac{15}{35} \\implies x = 15$$",
      "skill": "Calculer"
    },
    {
      "id": "5N3-2",
      "chapterId": "5N3",
      "tier": 2,
      "title": "Addition de fractions de même dénominateur",
      "statement": "Calculer sous forme irréductible :\n$$S = \\frac{4}{11} + \\frac{5}{11}$$",
      "type": "exact",
      "answer": "9/11",
      "placeholder": "Ex: 9/11",
      "hint1": "Garde le dénominateur commun 11 et additionne les numérateurs $4 + 5$.",
      "solution": "$$S = \\frac{4 + 5}{11} = \\frac{9}{11}$$",
      "skill": "Calculer"
    },
    {
      "id": "5N3-3",
      "chapterId": "5N3",
      "tier": 3,
      "title": "Addition avec dénominateurs multiples",
      "statement": "Calculer sous forme de fraction irréductible :\n$$A = \\frac{2}{3} + \\frac{5}{12}$$",
      "type": "exact",
      "answer": "13/12",
      "placeholder": "Ex: 13/12",
      "hint1": "Le dénominateur commun est 12 ($12 = 3 \\times 4$). Multiplie le haut et le bas de la 1ère fraction par 4.",
      "solution": "$$A = \\frac{2 \\times 4}{3 \\times 4} + \\frac{5}{12} = \\frac{8}{12} + \\frac{5}{12} = \\frac{13}{12}$$",
      "skill": "Calculer"
    },
    {
      "id": "5N3-4",
      "chapterId": "5N3",
      "tier": 4,
      "title": "Défi 4ème : Enchaînement de 3 fractions avec parenthèses",
      "statement": "Calculer sous forme de fraction irréductible :\n$$F = \\frac{7}{4} - \\left(\\frac{1}{2} + \\frac{3}{8}\\right)$$",
      "type": "exact",
      "answer": "7/8",
      "placeholder": "Ex: 7/8",
      "hint1": "Effectue la parenthèse en gardant l’expression complète : $F = \\frac{7}{4} - \\left(\\frac{1}{2} + \\frac{3}{8}\\right) = \\frac{7}{4} - \\left(\\frac{4}{8} + \\frac{3}{8}\\right) = \\frac{7}{4} - \\frac{7}{8}$.",
      "hint2": "Mets $\\frac{7}{4}$ au dénominateur $8$ (multiplie haut et bas par $2$), puis soustrais les numérateurs et simplifie si possible.",
      "solution": "$$F = \\frac{7}{4} - \\left(\\frac{1}{2} + \\frac{3}{8}\\right) = \\frac{7}{4} - \\left(\\frac{4}{8} + \\frac{3}{8}\\right) = \\frac{7}{4} - \\frac{7}{8} = \\frac{14}{8} - \\frac{7}{8} = \\frac{7}{8}.$$",
      "skill": "Calculer"
    }
  ],
  "5N4": [
    {
      "id": "5N4-1",
      "chapterId": "5N4",
      "tier": 1,
      "title": "Écriture sous forme d'une seule puissance",
      "statement": "Écrire le produit suivant sous la forme d'une seule puissance (ex: 6^4) :\n$$A = 6 \\times 6 \\times 6 \\times 6$$",
      "type": "exact",
      "answer": "6^4",
      "placeholder": "Ex: 6^4",
      "hint1": "Le facteur 6 est multiplié par lui-même 4 fois consécutives.",
      "solution": "$$6 \\times 6 \\times 6 \\times 6 = 6^4$$ (Base 6, exposant 4).",
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
      "placeholder": "Ex: 9",
      "hint1": "Quel nombre entier positif multiplié par lui-même donne 81 dans les tables de multiplication ?",
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
      "solution": "1. $2^3 = 2 \\times 2 \\times 2 = 8$.\n2. $3^2 = 3 \\times 3 = 9$.\nComme $8 < 9$, on conclut : **$2^3 < 3^2$**.",
      "skill": "Raisonner"
    },
    {
      "id": "5N4-4",
      "chapterId": "5N4",
      "tier": 4,
      "title": "Calcul complexe et priorités opératoires avec puissances",
      "statement": "Calculer la valeur exacte de l'expression suivante en respectant les priorités opératoires :\n$$A = 4 \\times (2 + 3)^2 - 3 \\times 2^4$$",
      "type": "exact",
      "answer": "52",
      "placeholder": "Ex: 52",
      "hint1": "Rappel des priorités : 1) Calculs entre parenthèses d'abord $(2 + 3) = 5$, 2) Puissances $5^2$ et $2^4$, 3) Multiplications, 4) Soustraction.",
      "solution": "1. Parenthèses : $(2 + 3) = 5$.\n2. Puissances : $5^2 = 25$ et $2^4 = 16$.\n3. Multiplications : $4 \\times 25 = 100$ et $3 \\times 16 = 48$.\n4. Soustraction : $$A = 100 - 48 = 52$$.",
      "skill": "Calculer"
    }
  ],
  "5P1": [
    {
      "id": "5P1-1",
      "chapterId": "5P1",
      "tier": 1,
      "title": "Coefficient de proportionnalité",
      "statement": "Dans un tableau de proportionnalité, la 1ère ligne contient $4$ et la 2ème ligne contient $28$.\nQuel est le coefficient de proportionnalité ?",
      "type": "exact",
      "answer": "7",
      "placeholder": "Ex: 7",
      "hint1": "Divise le nombre de la 2ème ligne par celui de la 1ère : $28 \\div 4$.",
      "solution": "$$k = \\frac{28}{4} = 7$$",
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
      "placeholder": "Ex: 14",
      "hint1": "Prix d'un kg : $6 \\div 3 = 2$ €. Multiplie par 7.",
      "solution": "$$x = \\frac{6 \\times 7}{3} = 14\\text{ euros}$$",
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
      "placeholder": "Ex: 36",
      "hint1": "Calcule $\\frac{20}{100} \\times 180$.",
      "solution": "$$N = 180 \\times 0{,}20 = 36\\text{ élèves}$$",
      "skill": "Calculer"
    },
    {
      "id": "5P1-4",
      "chapterId": "5P1",
      "tier": 4,
      "title": "Défi 4ème : Calcul de distance réelle sur carte à l'échelle",
      "statement": "Sur une carte au $1 / 25\\,000$, la distance entre deux clochers est de $8\\text{ cm}$.\n**Quelle est la distance réelle sur le terrain en kilomètres ?**",
      "type": "exact",
      "answer": "2",
      "placeholder": "Ex: 2",
      "hint1": "En cm : $8 \\times 25\\,000 = 200\\,000\\text{ cm}$. Convertis en km ($1\\text{ km} = 100\\,000\\text{ cm}$).",
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
      "placeholder": "Ex: 60",
      "hint1": "La somme des 3 angles vaut $180^\\circ$.",
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
      "placeholder": "Ex: 55",
      "hint1": "Les deux angles à la base sont égaux : $(180^\\circ - 70^\\circ) / 2$.",
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
      "title": "Défi 4ème : Déduction d'angle sur figure combinée",
      "statement": "Dans une figure à deux triangles adjacents : dans $ABC$ rectangle en $A$, $\\widehat{B} = 40^\\circ$ (donc $\\widehat{BCA} = 50^\\circ$). L'angle adjacent $\\widehat{DCE}$ vaut $60^\\circ$. Dans le triangle $CDE$, $\\widehat{CDE} = 50^\\circ$.\n**Quelle est la mesure de l'angle $\\widehat{CED}$ en degrés ?**",
      "type": "exact",
      "answer": "70",
      "placeholder": "Ex: 70",
      "hint1": "Dans le triangle $CDE$, la somme des angles vaut $180^\\circ$. $\\widehat{CED} = 180^\\circ - (60^\\circ + 50^\\circ)$.",
      "solution": "$$\\widehat{CED} = 180^\\circ - (60^\\circ + 50^\\circ) = 180^\\circ - 110^\\circ = 70^\\circ$$",
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
      "placeholder": "Ex: 30",
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
      "solution": "Le point $O$ de concours des médiatrices vérifie $OA = OB$ (médiatrice de $[AB]$) et $OB = OC$ (médiatrice de $[BC]$). Donc $OA = OB = OC$ : $O$ est le **centre du cercle circonscrit** au triangle.\nÀ retenir : médiatrices → cercle circonscrit ; médianes → centre de gravité ; hauteurs → orthocentre ; bissectrices → cercle inscrit.",
      "skill": "Raisonner"
    },
    {
      "id": "5G4-3",
      "chapterId": "5G4",
      "tier": 3,
      "title": "Construction d'un triangle : cas limite de l'inégalité triangulaire",
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
        "Non : $4 + 6 = 10$, il y a égalité et non inégalité stricte."
      ],
      "hint1": "Compare la plus grande longueur ($10\\text{ cm}$) à la somme des deux autres.",
      "hint2": "$4 + 6 = 10$ : que se passe-t-il quand il y a égalité ?",
      "solution": "Le plus grand côté mesure $AC = 10\\text{ cm}$ et $AB + BC = 4 + 6 = 10\\text{ cm}$.\nPuisque $AC = AB + BC$, le point $B$ appartient au segment $[AC]$ : les trois points sont alignés et le triangle est **aplati**.\nRappel (inégalité triangulaire) : on peut construire un vrai triangle si et seulement si la plus grande longueur est **strictement** inférieure à la somme des deux autres.",
      "skill": "Raisonner"
    },
    {
      "id": "5G4-4",
      "chapterId": "5G4",
      "tier": 4,
      "title": "Défi 4ème : Calculer une hauteur grâce à l'aire",
      "statement": "Dans un triangle $ABC$, on a $BC = 12\\text{ cm}$ et la hauteur issue de $A$ mesure $5\\text{ cm}$. De plus, $AC = 10\\text{ cm}$.\n**Quelle est la longueur, en cm, de la hauteur issue de $B$ (relative au côté $[AC]$) ?**",
      "type": "exact",
      "answer": "6",
      "placeholder": "Ex: 6",
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
      "placeholder": "Ex: 120",
      "hint1": "Volume d'un prisme droit : $\\mathcal{V} = \\mathcal{A}_{\\text{base}} \\times h$.",
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
      "placeholder": "Ex: 60",
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
      "placeholder": "Ex: 90",
      "hint1": "Volume d'un cylindre : $\\mathcal{V} = \\pi r^2 \\times h$ (aire du disque de base × hauteur).",
      "hint2": "$r^2 = 3^2 = 9$, puis multiplie par la hauteur.",
      "solution": "$$\\mathcal{V} = \\pi \\times r^2 \\times h = \\pi \\times 3^2 \\times 10 = \\pi \\times 9 \\times 10 = 90\\pi\\text{ cm}^3$$\n(soit environ $282,7\\text{ cm}^3$).",
      "skill": "Calculer"
    },
    {
      "id": "5G6-4",
      "chapterId": "5G6",
      "tier": 4,
      "title": "Défi 4ème : Contenance d'une citerne en litres",
      "statement": "Une citerne a la forme d'un cylindre de révolution de rayon $0,5\\text{ m}$ et de hauteur $2\\text{ m}$.\n**Quelle est sa contenance en litres, arrondie au litre ?**\n(Rappel : $1\\text{ m}^3 = 1\\,000\\text{ L}$.)",
      "type": "exact",
      "answer": "1571",
      "placeholder": "Ex: 1571",
      "hint1": "Calcule le volume en $\\text{m}^3$ : $\\mathcal{V} = \\pi \\times 0,5^2 \\times 2$.",
      "hint2": "$\\mathcal{V} = 0,5\\pi\\text{ m}^3 \\approx 1,5708\\text{ m}^3$. Convertis ensuite en litres.",
      "solution": "1. Volume : $\\mathcal{V} = \\pi \\times 0,5^2 \\times 2 = \\pi \\times 0,25 \\times 2 = 0,5\\pi\\text{ m}^3 \\approx 1,5708\\text{ m}^3$.\n2. Conversion : $1\\text{ m}^3 = 1\\,000\\text{ dm}^3 = 1\\,000\\text{ L}$, donc $\\mathcal{V} \\approx 1,5708 \\times 1\\,000 = 1\\,570,8\\text{ L}$.\n3. La citerne contient environ **1 571 litres**.",
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
      "placeholder": "Ex: 25",
      "hint1": "Fais la somme : $8 + 12 + 5$.",
      "solution": "$$N = 8 + 12 + 5 = 25$$",
      "skill": "Calculer"
    },
    {
      "id": "5D1-2",
      "chapterId": "5D1",
      "tier": 2,
      "title": "Fréquence sous forme de fraction",
      "statement": "Sur 20 élèves, 6 font du théâtre. Quelle est la fréquence de ce groupe ? (Fraction irréductible)",
      "type": "exact",
      "answer": "3/10",
      "placeholder": "Ex: 3/10",
      "hint1": "Fraction : $6/20$. Simplifie par 2.",
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
      "placeholder": "Ex: 28",
      "hint1": "Calcule $\\frac{7}{25} \\times 100$.",
      "solution": "$$\\frac{7}{25} \\times 100 = 28\\%$$",
      "skill": "Calculer"
    },
    {
      "id": "5D1-4",
      "chapterId": "5D1",
      "tier": 4,
      "title": "Défi 4ème : Angle dans un diagramme circulaire",
      "statement": "Dans une classe de 20 élèves, 5 élèves viennent à vélo.\n**Quelle doit être la mesure en degrés de l'angle du secteur circulaire représentant ce groupe ?**",
      "type": "exact",
      "answer": "90",
      "placeholder": "Ex: 90",
      "hint1": "Le cercle complet mesure $360^\\circ$. Calcule $\\frac{5}{20} \\times 360^\\circ$.",
      "solution": "$$\\text{Angle} = \\frac{5}{20} \\times 360^\\circ = 0{,}25 \\times 360^\\circ = 90^\\circ$$",
      "skill": "Résoudre"
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
    "placeholder": "Ex: 11x",
    "hint1": "On met $x$ en facteur : $(4 + 7)x$.",
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
    "placeholder": "Ex: 13",
    "hint1": "Remplace $x$ par 6 en rétablissant la multiplication : $3 \\times 6 - 5$.",
    "solution": "$$B = 3 \\times 6 - 5 = 18 - 5 = 13$$",
    "skill": "Calculer"
  },
  {
    "id": "5N5-3",
    "chapterId": "5N5",
    "tier": 3,
    "title": "Tester une égalité : $2x + 7 = 19$",
    "statement": "On considère l'égalité $2x + 7 = 19$. Le nombre 6 est-il solution de cette équation ?",
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
    "hint1": "Calcule $2 \\times 6 + 7$ et compare avec 19.",
    "solution": "Pour $x = 6$, $2 \\times 6 + 7 = 12 + 7 = 19$. L'égalité est vérifiée, 6 est bien solution.",
    "skill": "Raisonner"
  },
  {
    "id": "5N5-3b",
    "chapterId": "5N5",
    "tier": 3,
    "title": "Tester une égalité : $4x - 5 = 11$",
    "statement": "On considère l'égalité $4x - 5 = 11$. Le nombre 3 est-il solution de cette équation ?",
    "type": "mcq",
    "options": [
      "Non, car $4 \\times 3 - 5 = 12 - 5 = 7 \\neq 11$",
      "Oui, car $4 \\times 3 - 5 = 11$",
      "Oui, car 3 divise 12",
      "On ne peut pas savoir"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : pour x = 3, le membre de gauche vaut 7, ce qui est différent de 11.",
      "Erreur de calcul : 12 - 5 = 7 et non 11.",
      "La divisibilité ne prouve pas que le nombre est solution de l'équation.",
      "On peut le savoir en calculant la valeur du membre de gauche pour x = 3."
    ],
    "hint1": "Calcule $4 \\times 3 - 5$ et compare avec 11.",
    "solution": "Pour $x = 3$, $4 \\times 3 - 5 = 12 - 5 = 7$. Comme $7 \\neq 11$, l'égalité n'est pas vérifiée, 3 n'est pas solution.",
    "skill": "Raisonner"
  },
  {
    "id": "5N5-3c",
    "chapterId": "5N5",
    "tier": 3,
    "title": "Tester une égalité : $3x + 4 = 25$",
    "statement": "On considère l'égalité $3x + 4 = 25$. Le nombre 6 est-il solution de cette équation ?",
    "type": "mcq",
    "options": [
      "Non, car $3 \\times 6 + 4 = 18 + 4 = 22 \\neq 25$",
      "Oui, car $3 \\times 6 + 4 = 25$",
      "Oui, car 6 est un nombre pair",
      "On ne peut pas savoir"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : le membre de gauche vaut 22 pour x = 6, ce qui est différent de 25.",
      "Erreur de calcul : 18 + 4 = 22 et non 25.",
      "La parité n'indique pas si le nombre vérifie l'égalité.",
      "On peut le vérifier en calculant la valeur de l'expression."
    ],
    "hint1": "Calcule $3 \\times 6 + 4$ et compare avec 25.",
    "solution": "Pour $x = 6$, $3 \\times 6 + 4 = 18 + 4 = 22$. Comme $22 \\neq 25$, 6 n'est pas solution.",
    "skill": "Raisonner"
  },
  {
    "id": "5N5-3d",
    "chapterId": "5N5",
    "tier": 3,
    "title": "Tester une égalité : $5x - 8 = 27$",
    "statement": "On considère l'égalité $5x - 8 = 27$. Le nombre 7 est-il solution de cette équation ?",
    "type": "mcq",
    "options": [
      "Oui, car $5 \\times 7 - 8 = 35 - 8 = 27$",
      "Non, car $5 \\times 7 - 8 = 25$",
      "Non, car 7 est un nombre premier",
      "On ne peut pas savoir"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : pour x = 7, le membre de gauche donne 27, égal au membre de droite.",
      "Erreur de soustraction : 35 - 8 = 27.",
      "Le fait d'être premier n'empêche pas d'être solution.",
      "Le calcul montre directement que l'égalité est vérifiée."
    ],
    "hint1": "Calcule $5 \\times 7 - 8$ et compare avec 27.",
    "solution": "Pour $x = 7$, $5 \\times 7 - 8 = 35 - 8 = 27$. L'égalité est vérifiée, 7 est bien solution.",
    "skill": "Raisonner"
  },
  {
    "id": "5N5-4",
    "chapterId": "5N5",
    "tier": 4,
    "title": "Défi 4ème : Résolution d'équation",
    "statement": "Résoudre l'équation suivante d'inconnue $x$ :\n$$5x = 45$$",
    "type": "exact",
    "answer": "9",
    "placeholder": "Ex: 9",
    "hint1": "Divise les deux côtés de l'égalité par 5.",
    "solution": "$$x = \\frac{45}{5} = 9$$",
    "skill": "Résoudre"
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
    "placeholder": "Ex: 4",
    "hint1": "La distance à zéro d'un nombre est toujours positive.",
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
    "placeholder": "Ex: -5",
    "hint1": "Les coordonnées s'écrivent sous la forme $(\\text{abscisse} ; \\text{ordonnée})$.",
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
    "solution": "L'abscisse reste $x = 2$ et l'ordonnée devient l'opposée : $y = -5$, donc $A'(2 ; -5)$.",
    "skill": "Raisonner"
  },
  {
    "id": "5G1-4",
    "chapterId": "5G1",
    "tier": 4,
    "title": "Défi 4ème : Milieu d'un segment",
    "statement": "Dans un repère, on donne $A(2 ; 4)$ et $B(8 ; 10)$. Quelle est l'abscisse du milieu $I$ du segment $[AB]$ ?",
    "type": "exact",
    "answer": "5",
    "placeholder": "Ex: 5",
    "hint1": "L'abscisse du milieu est la moyenne des abscisses : $\\frac{x_A + x_B}{2}$.",
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
    "solution": "Par définition, $O$ est le milieu du segment $[AB]$.",
    "skill": "Raisonner"
  },
  {
    "id": "5G2-2",
    "chapterId": "5G2",
    "tier": 2,
    "title": "Conservation des longueurs",
    "statement": "Un segment $[AB]$ mesure $7,5\\text{ cm}$. Par la symétrie centrale de centre $O$, quelle est la longueur de son symétrique $[A'B']$ en cm ?",
    "type": "exact",
    "answer": "7.5",
    "placeholder": "Ex: 7.5",
    "hint1": "La symétrie centrale conserve les longueurs.",
    "solution": "La symétrie centrale est une isométrie : elle conserve les distances, donc $A'B' = AB = 7,5\\text{ cm}$.",
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
    "hint1": "Les côtés opposés sont symétriques et donc parallèles et de même longueur.",
    "solution": "Un quadrilatère qui admet un centre de symétrie est un parallélogramme.",
    "skill": "Raisonner"
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
    "placeholder": "Ex: 9",
    "hint1": "Dans un parallélogramme, les côtés opposés ont la même longueur.",
    "solution": "Les côtés opposés $[AB]$ et $[CD]$ ont la même longueur, donc $CD = AB = 9\\text{ cm}$.",
    "skill": "Calculer"
  },
  {
    "id": "5G5-2",
    "chapterId": "5G5",
    "tier": 2,
    "title": "Aire d'un parallélogramme",
    "statement": "Calculer l'aire d'un parallélogramme de base $b = 8\\text{ cm}$ et de hauteur relative $h = 4,5\\text{ cm}$ en $\\text{cm}^2$ :",
    "type": "exact",
    "answer": "36",
    "placeholder": "Ex: 36",
    "hint1": "Formule : $\\text{Aire} = \\text{base} \\times \\text{hauteur}$.",
    "solution": "$$\\text{Aire} = 8 \\times 4,5 = 36\\text{ cm}^2$$",
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
      "Cône"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : les diagonales perpendiculaires caractérisent le losange parmi les parallélogrammes.",
      "Le rectangle a des diagonales de même longueur.",
      "Un trapèze n'est pas forcément un parallélogramme.",
      "Un cône est un solide 3D."
    ],
    "hint1": "Passe en revue les parallélogrammes particuliers : lequel est caractérisé par des diagonales perpendiculaires (et non par des diagonales de même longueur) ?",
    "solution": "Si un parallélogramme a ses diagonales perpendiculaires, alors c'est un losange.",
    "skill": "Raisonner"
  },
  {
    "id": "5G5-4",
    "chapterId": "5G5",
    "tier": 4,
    "title": "Défi : Diagonales du rectangle et cercle",
    "statement": "Dans un rectangle $ABCD$ de centre $O$, la diagonale $[AC]$ mesure $10\\text{ cm}$. Que vaut la longueur $OB$ en cm ?",
    "type": "exact",
    "answer": "5",
    "placeholder": "Ex: 5",
    "hint1": "Les diagonales d'un rectangle ont la même longueur et se coupent en leur milieu.",
    "solution": "Les diagonales ont même longueur ($BD = AC = 10\\text{ cm}$) et se coupent en leur milieu $O$, donc $OB = \\frac{10}{2} = 5\\text{ cm}$.",
    "skill": "Calculer"
  }
],
  "5D2": [
  {
    "id": "5D2-1",
    "chapterId": "5D2",
    "tier": 1,
    "title": "Probabilité élémentaire avec un dé",
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
    "answer": "0.5",
    "placeholder": "Ex: 0.5",
    "hint1": "Nombre total de jetons : $3 + 5 + 2 = 10$.",
    "solution": "$$P(\\text{Vert}) = \\frac{5}{10} = 0,5$$",
    "skill": "Calculer"
  },
  {
    "id": "5D2-3",
    "chapterId": "5D2",
    "tier": 3,
    "title": "Événement certain et impossible",
    "statement": "On lance un dé à 6 faces numérotées de 1 à 6. Quelle est la probabilité d'obtenir un nombre strictement supérieur à 6 ?",
    "type": "exact",
    "answer": "0",
    "placeholder": "Ex: 0",
    "hint1": "Compte les faces du dé qui portent un nombre strictement supérieur à 6 : que vaut la probabilité d'un événement qui ne peut jamais se produire ?",
    "solution": "Aucune face ne porte un nombre supérieur à 6, c'est un événement impossible : $P = 0$.",
    "skill": "Raisonner"
  },
  {
    "id": "5D2-4",
    "chapterId": "5D2",
    "tier": 4,
    "title": "Défi 4ème : Nombre pair sur un dé",
    "statement": "On lance un dé équilibré à 6 faces. Quelle est la probabilité en pourcentage d'obtenir un nombre pair (2, 4 ou 6) ?",
    "type": "exact",
    "answer": "50",
    "placeholder": "Ex: 50",
    "hint1": "Compte les issues paires parmi les 6 issues équiprobables, puis convertis la fraction obtenue en pourcentage.",
    "solution": "$$P(\\text{Pair}) = \\frac{3}{6} = 0,5 = 50\\%$$",
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
    "placeholder": "Ex: 60",
    "hint1": "Formule : $d = v \\times t$.",
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
    "placeholder": "Ex: 130",
    "hint1": "Prix $= 30 + 25 \\times t$.",
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
    "placeholder": "Ex: 90",
    "hint1": "30 minutes correspondent à 0,5 heure. $v = \\frac{d}{t}$.",
    "solution": "$$v = \\frac{45}{0,5} = 90\\text{ km/h}$$",
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
    "placeholder": "Ex: 90",
    "hint1": "La somme des 4 rotations fait $360^\\circ$.",
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
    "placeholder": "Ex: 90",
    "hint1": "Multiplie le nombre de répétitions par le nombre de pas.",
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
    "placeholder": "Ex: 120",
    "hint1": "Attention : l'angle extérieur vaut $\\frac{360^\\circ}{3}$.",
    "solution": "$$\\text{Angle} = \\frac{360^\\circ}{3} = 120^\\circ$$",
    "skill": "Raisonner"
  },
  {
    "id": "5A1-4",
    "chapterId": "5A1",
    "tier": 4,
    "title": "Défi : Programme de calcul Scratch multi-étapes",
    "statement": "Un lutin exécute le programme de calcul Scratch suivant :\n```text\nquand drapeau cliqué\ndemander [Choisir un nombre] et attendre\nmettre [N] à réponse\nmettre [N] à (N + 4)\nmettre [N] à (N * 5)\nmettre [N] à (N - 15)\nmettre [N] à (N / 2)\ndire (N)\n```\n**Si l'on choisit le nombre $7$ au départ, quel nombre affiche le lutin à la fin ?**",
    "type": "exact",
    "answer": "20",
    "placeholder": "Ex: 20",
    "hint1": "Applique chaque bloc l'un après l'autre dans l'ordre : ajoute 4 à 7, puis multiplie le résultat par 5...",
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
      "statement": "# Classe de 5ème — Mathématiques\n## Fiche d'entraînement : Nombres relatifs et opérations\n\n### Exercice 1 : Comparaison et repérage (4 points)\n1. Ranger par ordre croissant : $-5$ ; $+3{,}2$ ; $-8{,}5$ ; $0$ ; $-1{,}2$ ; $+4$.\n2. Donner l'opposé et la distance à zéro de chacun des nombres : $-7{,}4$ et $+5$.\n\n### Exercice 2 : Additions et soustractions (6 points)\nCalculer en détaillant les étapes de calcul :\n1. $A = (-8) + (+15)$\n2. $B = (-12) + (-9)$\n3. $C = (+7) - (-11)$\n4. $D = (-14) - (+6)$\n",
      "solution": "## Corrigé détaillé\n\n### Exercice 1\n1. Ordre croissant : $-8{,}5 < -5 < -1{,}2 < 0 < +3{,}2 < +4$.\n2. Pour $-7{,}4$ : opposé $= +7{,}4$, distance à zéro $= 7{,}4$.\nPour $+5$ : opposé $= -5$, distance à zéro $= 5$.\n\n### Exercice 2\n1. $A = +(15 - 8) = 7$.\n2. $B = -(12 + 9) = -21$.\n3. $C = 7 + 11 = 18$.\n4. $D = -14 + (-6) = -20$."
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
