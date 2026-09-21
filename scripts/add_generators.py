#!/usr/bin/env python3
"""
Ajoute les 12 générateurs procéduraux manquants (7 pour la 5ème et 5 pour la 4ème)
dans Site/js/randomGenerators.js pour assurer 100% de couverture procédurale.
"""

GENERATORS_CODE = '''
  // --- 5N5 : Calcul littéral et initiation aux équations (5ème) ---
  generate5N5(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      // Palier 1 : Socle (Réduction simple)
      const a = this.randInt(2, 7);
      const b = this.randInt(2, 7);
      const sum = a + b;
      return {
        chapterId: '5N5',
        tier: 1,
        title: "Réduction d'une expression littérale (5ème)",
        statement: `Réduire l'expression littérale suivante :\\n$$A = ${a}x + ${b}x$$`,
        type: "exact",
        answer: `${sum}x`,
        placeholder: `Ex: ${sum}x`,
        hint1: "Factorise par $x$ : $(a + b)x$.",
        solution: `$$A = (${a} + ${b})x = ${sum}x$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Substitution numérique)
      const a = this.randInt(2, 6);
      const b = this.randInt(1, 9);
      const x = this.randInt(2, 6);
      const ans = a * x + b;
      return {
        chapterId: '5N5',
        tier: 2,
        title: "Calcul de la valeur d'une expression (5ème)",
        statement: `Calculer la valeur numérique de $B = ${a}x + ${b}$ pour $x = ${x}$ :`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: `Remplace $x$ par ${x} : $${a} \\\\times ${x} + ${b}$.`,
        solution: `$$B = ${a} \\\\times ${x} + ${b} = ${a * x} + ${b} = ${ans}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Tester une égalité)
      const a = this.randInt(2, 5);
      const x = this.randInt(2, 6);
      const b = this.randInt(1, 8);
      const c = a * x + b;
      return {
        chapterId: '5N5',
        tier: 3,
        title: "Tester si un nombre est solution (5ème)",
        statement: `On considère l'égalité : $${a}x + ${b} = ${c}$.\\n**Le nombre $${x}$ est-il solution de cette équation ?**`,
        type: "mcq",
        options: [
          `Oui, car $${a} \\\\times ${x} + ${b} = ${c}$`,
          `Non, car le membre de gauche vaut ${c + 2}`,
          `Non, car ${x} n'est pas un multiple de ${a}`,
          `On ne peut pas savoir`
        ],
        correctIndex: 0,
        hint1: `Calcule $${a} \\\\times ${x} + ${b}$ et compare avec ${c}.`,
        solution: `Pour $x = ${x}$ : $${a} \\\\times ${x} + ${b} = ${a * x} + ${b} = ${c}$. L'égalité est vérifiée.`
      };
    } else {
      // Palier 4 : Défi (Résolution d'équation ax = b)
      const a = this.randInt(3, 8);
      const x = this.randInt(2, 9);
      const b = a * x;
      return {
        chapterId: '5N5',
        tier: 4,
        title: "Défi 4ème : Résoudre ax = b",
        statement: `Résoudre l'équation d'inconnue $x$ :\\n$$${a}x = ${b}$$`,
        type: "exact",
        answer: String(x),
        placeholder: `Ex: ${x}`,
        hint1: `Divise les deux membres par ${a} : $x = \\\\frac{${b}}{${a}}$.`,
        solution: `$$x = \\\\frac{${b}}{${a}} = ${x}$$`
      };
    }
  },

  // --- 5G1 : Repérage sur une droite et dans le plan (5ème) ---
  generate5G1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const abs = this.randInt(-8, -2);
      return {
        chapterId: '5G1',
        tier: 1,
        title: "Distance à zéro sur une droite graduée (5ème)",
        statement: `Sur un axe gradué d'origine $O$, le point $A$ a pour abscisse $x_A = ${abs}$.\\n**Quelle est la distance $OA$ ?**`,
        type: "exact",
        answer: String(Math.abs(abs)),
        placeholder: `Ex: ${Math.abs(abs)}`,
        hint1: "La distance à zéro est toujours un nombre positif.",
        solution: `La distance d'un point d'abscisse ${abs} à l'origine est $|${abs}| = ${Math.abs(abs)}$.`
      };
    } else if (t === 2) {
      const x = this.randInt(-6, 6, [0]);
      const y = this.randInt(-6, 6, [0]);
      return {
        chapterId: '5G1',
        tier: 2,
        title: "Lecture d'ordonnée dans un repère (5ème)",
        statement: `Dans un repère orthogonal, le point $M$ a pour coordonnées $(${x} ; ${y})$.\\n**Quelle est l'ordonnée de ce point ?**`,
        type: "exact",
        answer: String(y),
        placeholder: `Ex: ${y}`,
        hint1: "Dans les coordonnées $(x ; y)$, $x$ est l'abscisse et $y$ est l'ordonnée.",
        solution: `Le point $M(${x} ; ${y})$ a pour abscisse $x = ${x}$ et pour ordonnée $y = ${y}$.`
      };
    } else if (t === 3) {
      const x = this.randInt(2, 7);
      const y = this.randInt(2, 7);
      return {
        chapterId: '5G1',
        tier: 3,
        title: "Symétrie par rapport à l'axe des ordonnées (5ème)",
        statement: `Dans un repère, le point $A$ a pour coordonnées $(${x} ; ${y})$.\\n**Quelles sont les coordonnées de son symétrique par rapport à l'axe des ordonnées ?**`,
        type: "mcq",
        options: [
          `(-${x} ; ${y})`,
          `(${x} ; -${y})`,
          `(-${x} ; -${y})`,
          `(${y} ; ${x})`
        ],
        correctIndex: 0,
        hint1: "L'ordonnée ne change pas, l'abscisse devient son opposée.",
        solution: `La symétrie par rapport à l'axe vertical $(Oy)$ transforme $(x ; y)$ en $(-x ; y)$, soit $(-${x} ; ${y})$.`
      };
    } else {
      const xA = this.randInt(1, 4) * 2;
      const xB = this.randInt(5, 9) * 2;
      const xM = (xA + xB) / 2;
      return {
        chapterId: '5G1',
        tier: 4,
        title: "Défi 4ème : Abscisse du milieu d'un segment",
        statement: `Sur une droite graduée, $A$ a pour abscisse $x_A = ${xA}$ et $B$ a pour abscisse $x_B = ${xB}$.\\n**Quelle est l'abscisse du milieu $M$ du segment $[AB]$ ?**`,
        type: "exact",
        answer: String(xM),
        placeholder: `Ex: ${xM}`,
        hint1: "Formule du milieu : $x_M = \\\\frac{x_A + x_B}{2}$.",
        solution: `$$x_M = \\\\frac{${xA} + ${xB}}{2} = \\\\frac{${xA + xB}}{2} = ${xM}$$`
      };
    }
  },

  // --- 5G2 : Symétrie centrale et demi-tour (5ème) ---
  generate5G2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      return {
        chapterId: '5G2',
        tier: 1,
        title: "Définition de la symétrie centrale (5ème)",
        statement: "Si le point $A'$ est le symétrique du point $A$ par rapport à $O$, que représente $O$ pour le segment $[AA']$ ?",
        type: "mcq",
        options: [
          "Le milieu du segment [AA']",
          "Une extrémité du segment",
          "Le tiers du segment",
          "Le centre du cercle circonscrit"
        ],
        correctIndex: 0,
        hint1: "La symétrie centrale de centre O est un demi-tour autour de O.",
        solution: "Par définition, $O$ est le milieu du segment reliant le point et son image $[AA']$."
      };
    } else if (t === 2) {
      const L = this.randInt(4, 12);
      return {
        chapterId: '5G2',
        tier: 2,
        title: "Conservation de la longueur d'un segment (5ème)",
        statement: `Un segment $[AB]$ mesure $${L}\\\\text{ cm}$.\\n**Quelle est la longueur de son image $[A'B']$ par une symétrie centrale ?**`,
        type: "exact",
        answer: String(L),
        placeholder: `Ex: ${L}`,
        hint1: "La symétrie centrale est un demi-tour qui conserve les distances.",
        solution: `La symétrie centrale conserve les longueurs, donc $A'B' = AB = ${L}\\\\text{ cm}$.`
      };
    } else if (t === 3) {
      const deg = this.randInt(25, 75);
      return {
        chapterId: '5G2',
        tier: 3,
        title: "Conservation des angles (5ème)",
        statement: `Un angle $\\\\widehat{ABC}$ mesure $${deg}^\\\\circ$. Par une symétrie centrale, quelle est la mesure de son angle image en degrés ?`,
        type: "exact",
        answer: String(deg),
        placeholder: `Ex: ${deg}`,
        hint1: "La symétrie centrale conserve les mesures d'angles.",
        solution: `La symétrie centrale conserve les angles, donc l'angle image mesure également $${deg}^\\\\circ$.`
      };
    } else {
      const aire = this.randInt(15, 45);
      return {
        chapterId: '5G2',
        tier: 4,
        title: "Défi : Conservation de l'aire (5ème)",
        statement: `Un polygone a une aire de $${aire}\\\\text{ cm}^2$. Quelle est l'aire de son symétrique par rapport à un point $O$ en $\\\\text{cm}^2$ ?`,
        type: "exact",
        answer: String(aire),
        placeholder: `Ex: ${aire}`,
        hint1: "La symétrie centrale conserve les aires (les figures sont superposables).",
        solution: `La symétrie centrale conserve les aires : l'aire de la figure image est de $${aire}\\\\text{ cm}^2$.`
      };
    }
  },

  // --- 5G5 : Parallélogrammes et quadrilatères (5ème) ---
  generate5G5(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const L = this.randInt(5, 12);
      return {
        chapterId: '5G5',
        tier: 1,
        title: "Côtés opposés d'un parallélogramme (5ème)",
        statement: `Dans un parallélogramme $ABCD$, on donne $AB = ${L}\\\\text{ cm}$.\\n**Quelle est la longueur du côté opposé $CD$ en cm ?**`,
        type: "exact",
        answer: String(L),
        placeholder: `Ex: ${L}`,
        hint1: "Dans un parallélogramme, les côtés opposés ont la même longueur.",
        solution: `Les côtés opposés d'un parallélogramme sont égaux : $CD = AB = ${L}\\\\text{ cm}$.`
      };
    } else if (t === 2) {
      const b = this.randInt(5, 11);
      const h = this.randInt(3, 8);
      const aire = b * h;
      return {
        chapterId: '5G5',
        tier: 2,
        title: "Aire d'un parallélogramme (5ème)",
        statement: `Un parallélogramme a pour base $b = ${b}\\\\text{ cm}$ et pour hauteur correspondante $h = ${h}\\\\text{ cm}$.\\n**Calculer son aire en $\\\\text{cm}^2$ :**`,
        type: "exact",
        answer: String(aire),
        placeholder: `Ex: ${aire}`,
        hint1: "Formule : $\\\\text{Aire} = \\\\text{base} \\\\times \\\\text{hauteur}$.",
        solution: `$$\\\\text{Aire} = b \\\\times h = ${b} \\\\times ${h} = ${aire}\\\\text{ cm}^2$$`
      };
    } else if (t === 3) {
      return {
        chapterId: '5G5',
        tier: 3,
        title: "Caractérisation du losange (5ème)",
        statement: "Un parallélogramme dont les diagonales sont perpendiculaires est un...",
        type: "mcq",
        options: [
          "Losange",
          "Rectangle",
          "Trapèze",
          "Carré obligatoire"
        ],
        correctIndex: 0,
        hint1: "Des diagonales perpendiculaires dans un parallélogramme caractérisent le losange.",
        solution: "Si les diagonales d'un parallélogramme sont perpendiculaires, alors c'est un losange."
      };
    } else {
      const d = this.randInt(8, 16) * 2;
      return {
        chapterId: '5G5',
        tier: 4,
        title: "Défi : Diagonales d'un rectangle (5ème)",
        statement: `Dans un rectangle $ABCD$ de centre $O$, la diagonale $[AC]$ mesure $${d}\\\\text{ cm}$.\\n**Quelle est la longueur $OB$ en cm ?**`,
        type: "exact",
        answer: String(d / 2),
        placeholder: `Ex: ${d / 2}`,
        hint1: "Les diagonales d'un rectangle ont la même longueur et se coupent en leur milieu.",
        solution: `$$OB = \\\\frac{BD}{2} = \\\\frac{AC}{2} = \\\\frac{${d}}{2} = ${d / 2}\\\\text{ cm}$$`
      };
    }
  },

  // --- 5D2 : Probabilités (5ème) ---
  generate5D2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      return {
        chapterId: '5D2',
        tier: 1,
        title: "Tirage d'un dé à 6 faces (5ème)",
        statement: "On lance un dé équilibré à 6 faces numérotées de 1 à 6. Quelle est la probabilité d'obtenir la face 3 ?",
        type: "mcq",
        options: [
          "1/6",
          "3/6",
          "1/3",
          "1/2"
        ],
        correctIndex: 0,
        hint1: "Il y a 1 seule face avec le 3 sur un total de 6 faces.",
        solution: "$$P(3) = \\\\frac{1}{6}$$"
      };
    } else if (t === 2) {
      const r = this.randInt(2, 5);
      const v = 10 - r;
      const pct = r * 10;
      return {
        chapterId: '5D2',
        tier: 2,
        title: "Probabilité en pourcentage dans une urne (5ème)",
        statement: `Une boîte contient $${r}$ boules rouges et $${v}$ boules vertes (soit 10 boules au total).\\n**Quelle est la probabilité en pourcentage de tirer une boule rouge ?**`,
        type: "exact",
        answer: String(pct),
        placeholder: `Ex: ${pct}`,
        hint1: `Fraction : $\\\\frac{${r}}{10}$. Convertis en pourcentage.`,
        solution: `$$P(\\\\text{Rouge}) = \\\\frac{${r}}{10} = ${pct}\\\\%$$`
      };
    } else if (t === 3) {
      return {
        chapterId: '5D2',
        tier: 3,
        title: "Événement impossible (5ème)",
        statement: "Quelle est la probabilité d'un événement impossible ?",
        type: "exact",
        answer: "0",
        placeholder: "Ex: 0",
        hint1: "Un événement qui ne peut jamais se produire a une probabilité nulle.",
        solution: "La probabilité d'un événement impossible est égale à 0."
      };
    } else {
      return {
        chapterId: '5D2',
        tier: 4,
        title: "Défi : Nombre pair sur un dé à 6 faces (5ème)",
        statement: "On lance un dé équilibré à 6 faces. Quelle est la probabilité en pourcentage d'obtenir un nombre pair (2, 4 ou 6) ?",
        type: "exact",
        answer: "50",
        placeholder: "Ex: 50",
        hint1: "Il y a 3 issues paires sur 6 au total : 3/6 = 1/2.",
        solution: "$$P(\\\\text{Pair}) = \\\\frac{3}{6} = 0{,}5 = 50\\\\%$$"
      };
    }
  },

  // --- 5P2 : Dépendance entre grandeurs (5ème) ---
  generate5P2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const v = this.randChoice([30, 40, 50, 60, 80]);
      const temps = this.randInt(2, 4);
      const dist = v * temps;
      return {
        chapterId: '5P2',
        tier: 1,
        title: "Calcul de distance (5ème)",
        statement: `Un véhicule roule à la vitesse constante de $v = ${v}\\\\text{ km/h}$.\\n**Quelle distance parcourt-il en $${temps}\\\\text{ heures}$ en km ?**`,
        type: "exact",
        answer: String(dist),
        placeholder: `Ex: ${dist}`,
        hint1: "Formule : $d = v \\\\times t$.",
        solution: `$$d = ${v} \\\\times ${temps} = ${dist}\\\\text{ km}$$`
      };
    } else if (t === 2) {
      const larg = this.randInt(3, 8);
      return {
        chapterId: '5P2',
        tier: 2,
        title: "Périmètre en fonction de la longueur (5ème)",
        statement: `Un rectangle a une largeur fixe de $${larg}\\\\text{ cm}$ et une longueur variable notée $x$.\\n**Quelle est l'expression de son périmètre en fonction de $x$ ?**`,
        type: "mcq",
        options: [
          `2x + ${larg * 2}`,
          `${larg}x`,
          `x + ${larg * 2}`,
          `2x + ${larg}`
        ],
        correctIndex: 0,
        hint1: "$P = 2 \\\\times (x + \\\\text{largeur}) = 2x + 2 \\\\times \\\\text{largeur}$.",
        solution: `$$P = 2 \\\\times (x + ${larg}) = 2x + ${larg * 2}$$`
      };
    } else if (t === 3) {
      const fixe = this.randInt(15, 35);
      const taux = this.randInt(10, 20);
      const h = this.randInt(2, 5);
      const total = fixe + taux * h;
      return {
        chapterId: '5P2',
        tier: 3,
        title: "Calcul d'un coût avec partie fixe (5ème)",
        statement: `Une location de matériel coûte un forfait fixe de $${fixe}\\\\text{ €}$ plus $${taux}\\\\text{ €}$ par jour d'utilisation $j$.\\n**Quel est le coût total en euros pour $${h}\\\\text{ jours}$ ?**`,
        type: "exact",
        answer: String(total),
        placeholder: `Ex: ${total}`,
        hint1: `Calcule $${fixe} + ${taux} \\\\times ${h}$.`,
        solution: `$$\\\\text{Coût} = ${fixe} + ${taux} \\\\times ${h} = ${fixe} + ${taux * h} = ${total}\\\\text{ €}$$`
      };
    } else {
      const dist = this.randChoice([30, 45, 60, 75]);
      const v = dist * 2;
      return {
        chapterId: '5P2',
        tier: 4,
        title: "Défi : Vitesse en 30 minutes (5ème)",
        statement: `Un train parcourt $${dist}\\\\text{ km}$ en 30 minutes.\\n**Quelle est sa vitesse moyenne en km/h ?**`,
        type: "exact",
        answer: String(v),
        placeholder: `Ex: ${v}`,
        hint1: "30 minutes = 0,5 heure. $v = d / t$.",
        solution: `$$v = \\\\frac{${dist}}{0{,}5} = ${v}\\\\text{ km/h}$$`
      };
    }
  },

  // --- 5A1 : Algorithmique et Scratch (5ème) ---
  generate5A1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      return {
        chapterId: '5A1',
        tier: 1,
        title: "Angle pour tracer un carré dans Scratch (5ème)",
        statement: "Dans Scratch, pour tracer un carré avec le bloc « répéter 4 fois : avancer de 50, tourner de ... degrés », quel est l'angle de rotation ?",
        type: "exact",
        answer: "90",
        placeholder: "Ex: 90",
        hint1: "360° divisé par 4 côtés.",
        solution: "$$\\\\text{Angle} = \\\\frac{360^\\\\circ}{4} = 90^\\\\circ$$"
      };
    } else if (t === 2) {
      const reps = this.randInt(4, 8);
      const pas = this.randChoice([10, 15, 20, 25]);
      const total = reps * pas;
      return {
        chapterId: '5A1',
        tier: 2,
        title: "Distance totale dans une boucle Scratch (5ème)",
        statement: `Un lutin exécute le script : « répéter ${reps} fois : avancer de ${pas} pas ».\\n**Quelle distance totale en pas a-t-il parcourue ?**`,
        type: "exact",
        answer: String(total),
        placeholder: `Ex: ${total}`,
        hint1: `Multiplie le nombre de répétitions par le nombre de pas : $${reps} \\\\times ${pas}$.`,
        solution: `$$${reps} \\\\times ${pas} = ${total}\\\\text{ pas}$$`
      };
    } else if (t === 3) {
      return {
        chapterId: '5A1',
        tier: 3,
        title: "Angle de rotation pour un triangle équilatéral (5ème)",
        statement: "Pour faire tracer un triangle équilatéral dans Scratch avec une boucle répéter 3 fois, de quel angle extérieur en degrés doit-on tourner ?",
        type: "exact",
        answer: "120",
        placeholder: "Ex: 120",
        hint1: "360° divisé par 3 côtés.",
        solution: "$$\\\\text{Angle} = \\\\frac{360^\\\\circ}{3} = 120^\\\\circ$$"
      };
    } else {
      return {
        chapterId: '5A1',
        tier: 4,
        title: "Défi : Reconnaissance de figure Scratch (5ème)",
        statement: "Quel polygone régulier le lutin trace-t-il avec ce script : « répéter 6 fois : avancer de 40, tourner de 60 degrés » ?",
        type: "mcq",
        options: [
          "Un hexagone régulier (6 côtés)",
          "Un octogone régulier (8 côtés)",
          "Un pentagone régulier (5 côtés)",
          "Un carré"
        ],
        correctIndex: 0,
        hint1: "La boucle comporte 6 côtés et 6 rotations de 60° (6 x 60° = 360°).",
        solution: "6 répétitions correspondent à un hexagone régulier."
      };
    }
  },

  // --- 4G2 : Triangle rectangle et cercle circonscrit (4ème) ---
  generate4G2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const hyp = this.randInt(5, 12) * 2;
      return {
        chapterId: '4G2',
        tier: 1,
        title: "Rayon du cercle circonscrit à un triangle rectangle (4ème)",
        statement: `Un triangle rectangle a une hypoténuse de longueur $${hyp}\\\\text{ cm}$.\\n**Quel est le rayon de son cercle circonscrit en cm ?**`,
        type: "exact",
        answer: String(hyp / 2),
        placeholder: `Ex: ${hyp / 2}`,
        hint1: "Le diamètre du cercle circonscrit est l'hypoténuse. Le rayon vaut la moitié de l'hypoténuse.",
        solution: `$$R = \\\\frac{\\\\text{Hypoténuse}}{2} = \\\\frac{${hyp}}{2} = ${hyp / 2}\\\\text{ cm}$$`
      };
    } else if (t === 2) {
      const hyp = this.randInt(5, 13) * 2;
      return {
        chapterId: '4G2',
        tier: 2,
        title: "Médiane issue de l'angle droit (4ème)",
        statement: `Dans un triangle $ABC$ rectangle en $A$, l'hypoténuse $[BC]$ mesure $${hyp}\\\\text{ cm}$.\\n**Quelle est la longueur de la médiane issue de $A$ en cm ?**`,
        type: "exact",
        answer: String(hyp / 2),
        placeholder: `Ex: ${hyp / 2}`,
        hint1: "La médiane relative à l'hypoténuse mesure la moitié de l'hypoténuse.",
        solution: `$$AM = \\\\frac{BC}{2} = \\\\frac{${hyp}}{2} = ${hyp / 2}\\\\text{ cm}$$`
      };
    } else if (t === 3) {
      const bc = this.randInt(6, 15) * 2;
      return {
        chapterId: '4G2',
        tier: 3,
        title: "Droite des milieux (4ème)",
        statement: `Dans un triangle $ABC$, $I$ et $J$ sont les milieux respectifs de $[AB]$ et $[AC]$. Sachant que $BC = ${bc}\\\\text{ cm}$, calculer la longueur $IJ$ en cm :`,
        type: "exact",
        answer: String(bc / 2),
        placeholder: `Ex: ${bc / 2}`,
        hint1: "D'après le théorème des milieux, la droite des milieux mesure la moitié du 3ème côté.",
        solution: `$$IJ = \\\\frac{BC}{2} = \\\\frac{${bc}}{2} = ${bc / 2}\\\\text{ cm}$$`
      };
    } else {
      return {
        chapterId: '4G2',
        tier: 4,
        title: "Défi : Triangle inscrit dans un demi-cercle (4ème)",
        statement: "Un triangle $MNP$ est inscrit dans un cercle de diamètre $[MN]$. Que peut-on affirmer sur la nature du triangle $MNP$ ?",
        type: "mcq",
        options: [
          "Il est rectangle en P",
          "Il est rectangle en M",
          "Il est équilatéral",
          "Il est isocèle en N"
        ],
        correctIndex: 0,
        hint1: "Le diamètre est l'hypoténuse, le sommet opposé est le sommet de l'angle droit.",
        solution: "Si un triangle est inscrit dans un cercle ayant pour diamètre l'un de ses côtés, alors il est rectangle au sommet opposé (en P)."
      };
    }
  },

  // --- 4G3 : Translations (4ème) ---
  generate4G3(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const L = this.randInt(5, 15);
      return {
        chapterId: '4G3',
        tier: 1,
        title: "Conservation de la distance par translation (4ème)",
        statement: `Un segment mesure $${L}\\\\text{ cm}$. Par une translation, quelle est la longueur de son segment image en cm ?`,
        type: "exact",
        answer: String(L),
        placeholder: `Ex: ${L}`,
        hint1: "La translation est un glissement qui conserve les longueurs.",
        solution: `La translation conserve les longueurs, donc le segment image mesure aussi $${L}\\\\text{ cm}$.`
      };
    } else if (t === 2) {
      return {
        chapterId: '4G3',
        tier: 2,
        title: "Nature du quadrilatère formé par translation (4ème)",
        statement: "Si le point $D$ est l'image du point $C$ par la translation qui transforme $A$ en $B$, quelle est la nature du quadrilatère $ABDC$ ?",
        type: "mcq",
        options: [
          "Un parallélogramme",
          "Un trapèze",
          "Un losange obligatoire",
          "Un rectangle"
        ],
        correctIndex: 0,
        hint1: "Les segments [AB] et [CD] sont parallèles, de même sens et de même longueur.",
        solution: "Par définition, si la translation envoie A sur B et C sur D, alors ABDC est un parallélogramme."
      };
    } else if (t === 3) {
      const r = this.randInt(3, 9);
      return {
        chapterId: '4G3',
        tier: 3,
        title: "Rayon d'un cercle transformé (4ème)",
        statement: `Un cercle de rayon $${r}\\\\text{ cm}$ subit une translation. Quel est le rayon du cercle image en cm ?`,
        type: "exact",
        answer: String(r),
        placeholder: `Ex: ${r}`,
        hint1: "La translation conserve les aires et les rayons des cercles.",
        solution: `La translation ne déforme pas les figures, le rayon reste de $${r}\\\\text{ cm}$.`
      };
    } else {
      const dx = this.randInt(2, 6);
      const dy = this.randInt(2, 6);
      const x = this.randInt(1, 5);
      const y = this.randInt(1, 5);
      return {
        chapterId: '4G3',
        tier: 4,
        title: "Défi : Coordonnées et translation (4ème)",
        statement: `Dans un repère, une translation décale les points de $+${dx}$ en abscisse et $+${dy}$ en ordonnée.\\nQuelle est l'abscisse de l'image du point $M(${x} ; ${y})$ ?`,
        type: "exact",
        answer: String(x + dx),
        placeholder: `Ex: ${x + dx}`,
        hint1: `Ajoute le décalage à l'abscisse de départ : $${x} + ${dx}$.`,
        solution: `$$x' = ${x} + ${dx} = ${x + dx}$$`
      };
    }
  },

  // --- 4D2 : Probabilités (4ème) ---
  generate4D2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const p = this.randChoice([0.2, 0.3, 0.4, 0.25, 0.35]);
      const ans = (1 - p).toFixed(2).replace(/\\.?0+$/, "");
      return {
        chapterId: '4D2',
        tier: 1,
        title: "Calcul de l'événement contraire (4ème)",
        statement: `La probabilité d'un événement $A$ est $P(A) = ${p}$.\\n**Quelle est la probabilité de l'événement contraire $\\\\bar{A}$ ?**`,
        type: "exact",
        answer: ans,
        placeholder: `Ex: ${ans}`,
        hint1: "Formule fondamentale : $P(\\\\bar{A}) = 1 - P(A)$.",
        solution: `$$P(\\\\bar{A}) = 1 - ${p} = ${ans}$$`
      };
    } else if (t === 2) {
      const tot = 100;
      const gag = this.randInt(5, 25);
      const perd = (tot - gag) / tot;
      return {
        chapterId: '4D2',
        tier: 2,
        title: "Tirage sans succès (4ème)",
        statement: `Une loterie compte $100$ billets dont $${gag}$ sont gagnants. Quelle est la probabilité de tirer un billet perdant sous forme décimale ?`,
        type: "exact",
        answer: String(perd),
        placeholder: `Ex: ${perd}`,
        hint1: `Il y a $100 - ${gag}$ billets perdants.`,
        solution: `$$P(\\\\text{Perdant}) = 1 - \\\\frac{${gag}}{100} = ${perd}$$`
      };
    } else if (t === 3) {
      return {
        chapterId: '4D2',
        tier: 3,
        title: "Deux lancers de pièces (4ème)",
        statement: "On lance consécutivement deux pièces de monnaie équilibrées. Quelle est la probabilité d'obtenir 2 fois « Pile » ?",
        type: "mcq",
        options: [
          "1/4",
          "1/2",
          "2/3",
          "1/8"
        ],
        correctIndex: 0,
        hint1: "Il y a 4 issues équiprobables : (P,P), (P,F), (F,P), (F,F).",
        solution: "$$P(\\\\text{Pile, Pile}) = \\\\frac{1}{2} \\\\times \\\\frac{1}{2} = \\\\frac{1}{4}$$"
      };
    } else {
      return {
        chapterId: '4D2',
        tier: 4,
        title: "Défi : Tirage successif avec remise (4ème)",
        statement: "Dans une urne contenant 3 boules vertes et 2 rouges, on tire 2 boules avec remise. Quelle est la probabilité sous forme de fraction irréductible de tirer 2 boules vertes ?",
        type: "exact",
        answer: "9/25",
        placeholder: "Ex: 9/25",
        hint1: "Probabilité au premier tirage : 3/5. Probabilité au second : 3/5.",
        solution: "$$P = \\\\frac{3}{5} \\\\times \\\\frac{3}{5} = \\\\frac{9}{25}$$"
      };
    }
  },

  // --- 4P2 : Notion de fonction (4ème) ---
  generate4P2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const a = this.randInt(2, 6);
      const b = this.randInt(1, 9);
      const x = this.randInt(2, 6);
      const ans = a * x + b;
      return {
        chapterId: '4P2',
        tier: 1,
        title: "Calcul direct d'une image (4ème)",
        statement: `Soit la fonction définie par $f(x) = ${a}x + ${b}$.\\n**Calculer l'image de $${x}$ par la fonction $f$ :**`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: `Remplace $x$ par ${x} dans $f(x)$ : $${a} \\\\times ${x} + ${b}$.`,
        solution: `$$f(${x}) = ${a} \\\\times ${x} + ${b} = ${ans}$$`
      };
    } else if (t === 2) {
      const a = this.randInt(2, 5);
      const b = this.randInt(1, 6);
      const x = this.randInt(2, 6);
      const ans = (x + b) * a;
      return {
        chapterId: '4P2',
        tier: 2,
        title: "Programme de calcul et fonction (4ème)",
        statement: `On donne le programme : « Choisir un nombre, ajouter $${b}$, multiplier par $${a}$ ».\\n**Quel résultat obtient-on pour le nombre de départ $${x}$ ?**`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: `Calcul : $(${x} + ${b}) \\\\times ${a}$.`,
        solution: `$$(${x} + ${b}) \\\\times ${a} = ${x + b} \\\\times ${a} = ${ans}$$`
      };
    } else if (t === 3) {
      const a = this.randInt(2, 5);
      const x = this.randInt(2, 7);
      const b = this.randInt(1, 8);
      const res = a * x + b;
      return {
        chapterId: '4P2',
        tier: 3,
        title: "Recherche d'un antécédent (4ème)",
        statement: `Soit la fonction $g(x) = ${a}x + ${b}$.\\n**Déterminer l'antécédent de $${res}$ par la fonction $g$ :**`,
        type: "exact",
        answer: String(x),
        placeholder: `Ex: ${x}`,
        hint1: `Résous l'équation : $${a}x + ${b} = ${res}$.`,
        solution: `$$${a}x + ${b} = ${res} \\\\implies ${a}x = ${res - b} \\\\implies x = \\\\frac{${res - b}}{${a}} = ${x}$$`
      };
    } else {
      const x = this.randInt(-5, -2);
      const c = this.randInt(2, 8);
      const ans = x * x - c;
      return {
        chapterId: '4P2',
        tier: 4,
        title: "Défi : Image d'un nombre négatif avec carré (4ème)",
        statement: `Soit $h(x) = x^2 - ${c}$. Calculer la valeur de $h(${x})$ :`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: `Attention au carré : $(${x})^2 = ${x * x}$.`,
        solution: `$$h(${x}) = (${x})^2 - ${c} = ${x * x} - ${c} = ${ans}$$`
      };
    }
  },

  // --- 4A1 : Algorithmique et variables Scratch (4ème) ---
  generate4A1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const init = this.randInt(5, 15);
      const add = this.randInt(4, 12);
      return {
        chapterId: '4A1',
        tier: 1,
        title: "Affectation d'une variable dans Scratch (4ème)",
        statement: `Un script contient : « mettre V à ${init} », puis « ajouter ${add} à V ».\\n**Quelle est la valeur finale de la variable V ?**`,
        type: "exact",
        answer: String(init + add),
        placeholder: `Ex: ${init + add}`,
        hint1: `La variable commence à ${init} et augmente de ${add}.`,
        solution: `$$V = ${init} + ${add} = ${init + add}$$`
      };
    } else if (t === 2) {
      const limit = 10;
      const n = this.randInt(3, 8);
      return {
        chapterId: '4A1',
        tier: 2,
        title: "Test conditionnel Si / Sinon dans Scratch (4ème)",
        statement: `Bloc Scratch : « Si N > ${limit} alors mettre R à 25 sinon mettre R à 8 ».\\nSi la variable N vaut $${n}$, quelle sera la valeur de R ?`,
        type: "exact",
        answer: "8",
        placeholder: "Ex: 8",
        hint1: `Le test $${n} > ${limit}$ est FAUX, donc on exécute la branche « sinon ».`,
        solution: `Comme $${n} \\\\le ${limit}$, la condition est fausse et la variable $R$ prend la valeur 8.`
      };
    } else if (t === 3) {
      const x = this.randInt(2, 6);
      return {
        chapterId: '4A1',
        tier: 3,
        title: "Programme avec variable et condition (4ème)",
        statement: `Un script demande un nombre $x$. Si $x > 0$, il affiche $3 \\\\times x$, sinon il affiche $x + 10$.\\nPour $x = ${x}$, qu'affiche le lutin ?`,
        type: "exact",
        answer: String(3 * x),
        placeholder: `Ex: ${3 * x}`,
        hint1: `$${x} > 0$ est vrai, donc on effectue $3 \\\\times ${x}$.`,
        solution: `La condition $${x} > 0$ est vraie, le lutin affiche $3 \\\\times ${x} = ${3 * x}$.`
      };
    } else {
      const pas = this.randInt(4, 7);
      const seuil = 20;
      let val = 0;
      while (val < seuil) {
        val += pas;
      }
      return {
        chapterId: '4A1',
        tier: 4,
        title: "Défi : Boucle répéter jusqu'à dans Scratch (4ème)",
        statement: `Compteur démarre à 0. Script : « répéter jusqu'à Compteur >= ${seuil} : ajouter ${pas} à Compteur ».\\nQuelle est la valeur finale de Compteur ?`,
        type: "exact",
        answer: String(val),
        placeholder: `Ex: ${val}`,
        hint1: "La boucle s'arrête dès que Compteur atteint ou dépasse " + seuil + ".",
        solution: `Compteur augmente de ${pas} en ${pas} jusqu'à dépasser ${seuil} : valeur finale = ${val}.`
      };
    }
  },
'''

def main():
    path = "Site/js/randomGenerators.js"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Insérer les générateurs avant generateForChapter
    marker = "  // =========================================================================\n  // ROUTEUR PRINCIPAL & DISPATCHER ZPD ADAPTATIF"
    if marker in content:
        content = content.replace(marker, GENERATORS_CODE + "\n" + marker)
        print("Générateurs insérés avant le routeur principal !")
    else:
        print("ERREUR : marqueur introuvable pour les générateurs !")
        return

    # 2. Compléter le switch statement dans generateForChapter
    old_switch = """      // 5ème
      case '5N1': q = this.generate5N1(resolvedTier, mastery); break;
      case '5N2': q = this.generate5N2(resolvedTier, mastery); break;
      case '5N3': q = this.generate5N3(resolvedTier, mastery); break;
      case '5N4': q = this.generate5N4(resolvedTier, mastery); break;
      case '5P1': q = this.generate5P1(resolvedTier, mastery); break;
      case '5G3': q = this.generate5G3(resolvedTier, mastery); break;
      case '5G4': q = this.generate5G4(resolvedTier, mastery); break;
      case '5G6': q = this.generate5G6(resolvedTier, mastery); break;
      case '5D1': q = this.generate5D1(resolvedTier, mastery); break;

      // 4ème
      case '4N1': q = this.generate4N1(resolvedTier, mastery); break;
      case '4N2': q = this.generate4N2(resolvedTier, mastery); break;
      case '4N3': q = this.generate4N3(resolvedTier, mastery); break;
      case '4N4': q = this.generate4N4(resolvedTier, mastery); break;
      case '4N5': q = this.generate4N5(resolvedTier, mastery); break;
      case '4G1': q = this.generate4G1(resolvedTier, mastery); break;
      case '4G4': q = this.generate4G4(resolvedTier, mastery); break;
      case '4D1': q = this.generate4D1(resolvedTier, mastery); break;
      case '4P1': q = this.generate4P1(resolvedTier, mastery); break;"""

    new_switch = """      // 5ème (16 chapitres)
      case '5N1': q = this.generate5N1(resolvedTier, mastery); break;
      case '5N2': q = this.generate5N2(resolvedTier, mastery); break;
      case '5N3': q = this.generate5N3(resolvedTier, mastery); break;
      case '5N4': q = this.generate5N4(resolvedTier, mastery); break;
      case '5N5': q = this.generate5N5(resolvedTier, mastery); break;
      case '5G1': q = this.generate5G1(resolvedTier, mastery); break;
      case '5G2': q = this.generate5G2(resolvedTier, mastery); break;
      case '5G3': q = this.generate5G3(resolvedTier, mastery); break;
      case '5G4': q = this.generate5G4(resolvedTier, mastery); break;
      case '5G5': q = this.generate5G5(resolvedTier, mastery); break;
      case '5G6': q = this.generate5G6(resolvedTier, mastery); break;
      case '5D1': q = this.generate5D1(resolvedTier, mastery); break;
      case '5D2': q = this.generate5D2(resolvedTier, mastery); break;
      case '5P1': q = this.generate5P1(resolvedTier, mastery); break;
      case '5P2': q = this.generate5P2(resolvedTier, mastery); break;
      case '5A1': q = this.generate5A1(resolvedTier, mastery); break;

      // 4ème (14 chapitres)
      case '4N1': q = this.generate4N1(resolvedTier, mastery); break;
      case '4N2': q = this.generate4N2(resolvedTier, mastery); break;
      case '4N3': q = this.generate4N3(resolvedTier, mastery); break;
      case '4N4': q = this.generate4N4(resolvedTier, mastery); break;
      case '4N5': q = this.generate4N5(resolvedTier, mastery); break;
      case '4G1': q = this.generate4G1(resolvedTier, mastery); break;
      case '4G2': q = this.generate4G2(resolvedTier, mastery); break;
      case '4G3': q = this.generate4G3(resolvedTier, mastery); break;
      case '4G4': q = this.generate4G4(resolvedTier, mastery); break;
      case '4D1': q = this.generate4D1(resolvedTier, mastery); break;
      case '4D2': q = this.generate4D2(resolvedTier, mastery); break;
      case '4P1': q = this.generate4P1(resolvedTier, mastery); break;
      case '4P2': q = this.generate4P2(resolvedTier, mastery); break;
      case '4A1': q = this.generate4A1(resolvedTier, mastery); break;"""

    if old_switch in content:
        content = content.replace(old_switch, new_switch)
        print("Switch statement mis à jour avec les 48 chapitres !")
    else:
        print("ERREUR : old_switch introuvable dans randomGenerators.js !")
        return

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("randomGenerators.js mis à jour avec succès !")

if __name__ == "__main__":
    main()
