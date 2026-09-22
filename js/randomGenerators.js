/**
 * Moteur de Génération Procédurale Aléatoire (Inspiré de MathsMentales.net)
 * Génère une infinité de questions d'automatismes et de calcul mental
 * avec données aléatoires, solutions exactes, étapes et distracteurs.
 * Calibré sur les 4 Paliers ZPD pour tout le Cycle 4 (5ème, 4ème, 3ème) :
 *  - Palier 1 : Socle (Bases directes, calcul mental accessible)
 *  - Palier 2 : Entraînement Guidé (Intermédiaire, 2 étapes)
 *  - Palier 3 : Brevet / Approfondissement (Standard d'examen)
 *  - Palier 4 : Défi Seconde / Difficulté Maximale (Calculs complexes, crochets, fractions à étages, identités composées)
 */

window.MathsGenerators = {
  // Utilitaires aléatoires et arithmétiques
  randInt(min, max, exclude = []) {
    let val;
    do {
      val = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (exclude.includes(val));
    return val;
  },

  randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  },

  gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  },

  simplifyFraction(num, den) {
    if (den < 0) {
      num = -num;
      den = -den;
    }
    const g = this.gcd(num, den);
    return [num / g, den / g];
  },

  formatFraction(num, den) {
    const [n, d] = this.simplifyFraction(num, den);
    if (d === 1) return `${n}`;
    if (n < 0) return `-\\frac{${Math.abs(n)}}{${d}}`;
    return `\\frac{${n}}{${d}}`;
  },

  formatSigned(n) {
    return n >= 0 ? `+ ${n}` : `- ${Math.abs(n)}`;
  },

  formatSignedTerm(coeff, variable = 'x') {
    if (coeff === 0) return '';
    const sign = coeff > 0 ? '+ ' : '- ';
    const absC = Math.abs(coeff);
    const coeffStr = (absC === 1 && variable) ? '' : String(absC);
    return `${sign}${coeffStr}${variable}`;
  },

  formatPoly(a, b, c) {
    const parts = [];
    if (a !== 0) {
      if (a === 1) parts.push('x^2');
      else if (a === -1) parts.push('-x^2');
      else parts.push(`${a}x^2`);
    }
    if (b !== 0) {
      if (parts.length === 0) {
        if (b === 1) parts.push('x');
        else if (b === -1) parts.push('-x');
        else parts.push(`${b}x`);
      } else {
        parts.push(this.formatSignedTerm(b, 'x'));
      }
    }
    if (c !== 0) {
      if (parts.length === 0) {
        parts.push(String(c));
      } else {
        parts.push(c > 0 ? `+ ${c}` : `- ${Math.abs(c)}`);
      }
    }
    return parts.length ? parts.join(' ') : '0';
  },

  resolveTier(tier) {
    const t = parseInt(tier, 10);
    return (t >= 1 && t <= 4) ? t : 1;
  },

  // =========================================================================
  // CHAPITRES 3ème (DNB & CYCLE 4) - PALIERS 1 À 4
  // =========================================================================

  // --- N1 : Nombres et Fractions ---
  generateN1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Addition/soustraction même dénominateur, produit simple, entier × fraction)
      const subType = this.randChoice(['add_same', 'sub_same', 'prod_frac', 'int_mult_frac']);

      if (subType === 'add_same') {
        const d = this.randInt(3, 9);
        const a = this.randInt(1, 8);
        const b = this.randInt(1, 8);
        const sum = a + b;
        const [sN, sD] = this.simplifyFraction(sum, d);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: 'N1',
          tier: 1,
          title: "Addition de fractions (même dénominateur)",
          statement: `Calculer sous forme irréductible :\n$$A = \\frac{${a}}{${d}} + \\frac{${b}}{${d}}$$`,
          type: 'exact',
          answer: ansStr,
          placeholder: "Ex: 4/3",
          hint1: `Le dénominateur commun est déjà ${d}. Additionne les numérateurs $${a} + ${b}$.`,
          solution: `$$A = \\frac{${a} + ${b}}{${d}} = \\frac{${sum}}{${d}} = ${this.formatFraction(sum, d)}$$`
        };
      } else if (subType === 'sub_same') {
        const d = this.randInt(3, 9);
        const a = this.randInt(4, 12);
        const b = this.randInt(1, a - 1);
        const diff = a - b;
        const [sN, sD] = this.simplifyFraction(diff, d);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: 'N1',
          tier: 1,
          title: "Soustraction de fractions (même dénominateur)",
          statement: `Calculer sous forme irréductible :\n$$S = \\frac{${a}}{${d}} - \\frac{${b}}{${d}}$$`,
          type: 'exact',
          answer: ansStr,
          placeholder: "Ex: 2/5",
          hint1: `Le dénominateur commun est ${d}. Soustrais les numérateurs $${a} - ${b}$.`,
          solution: `$$S = \\frac{${a} - ${b}}{${d}} = \\frac{${diff}}{${d}} = ${this.formatFraction(diff, d)}$$`
        };
      } else if (subType === 'prod_frac') {
        const a = this.randInt(1, 5);
        const b = this.randInt(2, 6);
        const c = this.randInt(1, 5);
        const d = this.randInt(2, 6);
        const [sN, sD] = this.simplifyFraction(a * c, b * d);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: 'N1',
          tier: 1,
          title: "Multiplication de fractions simples",
          statement: `Calculer sous forme irréductible :\n$$P = \\frac{${a}}{${b}} \\times \\frac{${c}}{${d}}$$`,
          type: 'exact',
          answer: ansStr,
          placeholder: "Ex: 3/8",
          hint1: "Multiplie les numérateurs entre eux et les dénominateurs entre eux.",
          solution: `$$P = \\frac{${a} \\times ${c}}{${b} \\times ${d}} = \\frac{${a * c}}{${b * d}} = ${this.formatFraction(a * c, b * d)}$$`
        };
      } else {
        const k = this.randInt(2, 6);
        const a = this.randInt(1, 5);
        const b = this.randInt(2, 7);
        const [sN, sD] = this.simplifyFraction(k * a, b);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: 'N1',
          tier: 1,
          title: "Produit d'un entier par une fraction",
          statement: `Calculer sous forme d'une fraction irréductible :\n$$E = ${k} \\times \\frac{${a}}{${b}}$$`,
          type: 'exact',
          answer: ansStr,
          placeholder: "Ex: 5/2",
          hint1: `Écris l'entier sous forme d'une fraction : $${k} = \\frac{${k}}{1}$. Multiplie ensuite les numérateurs.`,
          solution: `$$E = \\frac{${k} \\times ${a}}{${b}} = \\frac{${k * a}}{${b}} = ${this.formatFraction(k * a, b)}$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Dénominateurs multiples, division, soustraction)
      const subType = this.randChoice(['div_frac', 'add_mult_den', 'sub_mult_den', 'div_by_int']);

      if (subType === 'div_frac') {
        const a = this.randInt(2, 6);
        const b = this.randInt(3, 7);
        const c = this.randInt(2, 5);
        const d = this.randInt(3, 7);
        const [sN, sD] = this.simplifyFraction(a * d, b * c);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: 'N1',
          tier: 2,
          title: "Division de fractions (Multiplication par l'inverse)",
          statement: `Calculer sous forme irréductible :\n$$D = \\frac{${a}}{${b}} \\div \\frac{${c}}{${d}}$$`,
          type: 'exact',
          answer: ansStr,
          placeholder: "Ex: 6/5",
          hint1: `Diviser par une fraction revient à multiplier par son inverse : $\\frac{${a}}{${b}} \\times \\frac{${d}}{${c}}$.`,
          solution: `$$D = \\frac{${a}}{${b}} \\times \\frac{${d}}{${c}} = \\frac{${a * d}}{${b * c}} = ${this.formatFraction(a * d, b * c)}$$`
        };
      } else if (subType === 'add_mult_den') {
        const k = this.randChoice([2, 3, 4]);
        const d1 = this.randInt(2, 5);
        const d2 = d1 * k;
        const n1 = this.randInt(1, 6);
        const n2 = this.randInt(1, 6);
        const sum = (n1 * k) + n2;
        const [sN, sD] = this.simplifyFraction(sum, d2);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: 'N1',
          tier: 2,
          title: "Addition avec dénominateurs multiples",
          statement: `Calculer sous forme irréductible :\n$$B = \\frac{${n1}}{${d1}} + \\frac{${n2}}{${d2}}$$`,
          type: 'exact',
          answer: ansStr,
          placeholder: "Ex: 7/6",
          hint1: `Le dénominateur commun est ${d2} (car $${d2} = ${d1} \\times ${k}$).`,
          solution: `$$B = \\frac{${n1} \\times ${k}}{${d1} \\times ${k}} + \\frac{${n2}}{${d2}} = \\frac{${n1 * k}}{${d2}} + \\frac{${n2}}{${d2}} = \\frac{${sum}}{${d2}} = ${this.formatFraction(sum, d2)}$$`
        };
      } else if (subType === 'sub_mult_den') {
        const k = this.randChoice([2, 3, 4]);
        const d1 = this.randInt(2, 5);
        const d2 = d1 * k;
        const n1 = this.randInt(3, 7);
        const n2 = this.randInt(1, n1 * k - 1);
        const diff = (n1 * k) - n2;
        const [sN, sD] = this.simplifyFraction(diff, d2);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: 'N1',
          tier: 2,
          title: "Soustraction avec dénominateurs multiples",
          statement: `Calculer sous forme irréductible :\n$$M = \\frac{${n1}}{${d1}} - \\frac{${n2}}{${d2}}$$`,
          type: 'exact',
          answer: ansStr,
          placeholder: "Ex: 5/6",
          hint1: `Mets au même dénominateur ${d2} en multipliant la première fraction par ${k}.`,
          solution: `$$M = \\frac{${n1 * k}}{${d2}} - \\frac{${n2}}{${d2}} = \\frac{${diff}}{${d2}} = ${this.formatFraction(diff, d2)}$$`
        };
      } else {
        const a = this.randInt(2, 6);
        const b = this.randInt(3, 7);
        const c = this.randInt(2, 5);
        const [sN, sD] = this.simplifyFraction(a, b * c);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: 'N1',
          tier: 2,
          title: "Division d'une fraction par un entier",
          statement: `Calculer sous forme irréductible :\n$$Q = \\frac{${a}}{${b}} \\div ${c}$$`,
          type: 'exact',
          answer: ansStr,
          placeholder: "Ex: 1/6",
          hint1: `Diviser par $${c}$ revient à multiplier par $\\frac{1}{${c}}$.`,
          solution: `$$Q = \\frac{${a}}{${b}} \\times \\frac{1}{${c}} = \\frac{${a}}{${b * c}} = ${this.formatFraction(a, b * c)}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (Priorités opératoires type examen)
      const subType = this.randChoice(['mult_prioritaire_sub', 'mult_prioritaire_add', 'parentheses_mult']);

      if (subType === 'mult_prioritaire_sub') {
        const a = this.randInt(2, 5);
        const b = this.randInt(3, 7);
        const c = this.randInt(1, 4);
        const d = this.randInt(2, 5);
        const e = this.randInt(3, 6);
        const num = a * e - c * d;
        const den = b * e;
        const [sN, sD] = this.simplifyFraction(num, den);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: 'N1',
          tier: 3,
          title: "Expression type Brevet avec priorités",
          statement: `Calculer l'expression suivante et donner le résultat sous forme d'une fraction irréductible :\n$$C = \\frac{${a}}{${b}} - \\frac{${c}}{${b}} \\times \\frac{${d}}{${e}}$$`,
          type: 'exact',
          answer: ansStr,
          placeholder: "Ex: 11/15",
          hint1: `La multiplication $\\frac{${c}}{${b}} \\times \\frac{${d}}{${e}}$ est prioritaire sur la soustraction.`,
          hint2: `Produit : $\\frac{${c * d}}{${b * e}}$. Ensuite, mets au même dénominateur pour soustraire.`,
          solution: `1. Multiplication prioritaire :\n$$\\frac{${c}}{${b}} \\times \\frac{${d}}{${e}} = \\frac{${c * d}}{${b * e}}$$\n2. Mise au même dénominateur :\n$$C = \\frac{${a} \\times ${e}}{${b} \\times ${e}} - \\frac{${c * d}}{${b * e}} = \\frac{${a * e} - ${c * d}}{${den}} = \\frac{${num}}{${den}} = ${this.formatFraction(num, den)}$$`
        };
      } else if (subType === 'mult_prioritaire_add') {
        const a = this.randInt(1, 4);
        const b = this.randInt(2, 5);
        const c = this.randInt(1, 3);
        const d = this.randInt(2, 5);
        const e = this.randInt(1, 3);
        const f = this.randInt(2, 4);
        const num = a * (d * f) + (c * e) * b;
        const den = b * d * f;
        const [sN, sD] = this.simplifyFraction(num, den);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: 'N1',
          tier: 3,
          title: "Priorité de la multiplication sur l'addition",
          statement: `Calculer sous forme irréductible :\n$$H = \\frac{${a}}{${b}} + \\frac{${c}}{${d}} \\times \\frac{${e}}{${f}}$$`,
          type: 'exact',
          answer: ansStr,
          placeholder: "Ex: 7/12",
          hint1: `Multiplie d'abord $\\frac{${c}}{${d}} \\times \\frac{${e}}{${f}} = \\frac{${c * e}}{${d * f}}$.`,
          solution: `$$H = \\frac{${a}}{${b}} + \\frac{${c * e}}{${d * f}} = ${this.formatFraction(num, den)}$$`
        };
      } else {
        const a = this.randInt(1, 3);
        const b = this.randInt(2, 4);
        const c = this.randInt(1, 3);
        const sumNum = a + c;
        const sumDen = b;
        const e = this.randInt(2, 5);
        const f = this.randInt(3, 6);
        const num = sumNum * e;
        const den = sumDen * f;
        const [sN, sD] = this.simplifyFraction(num, den);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: 'N1',
          tier: 3,
          title: "Calcul avec parenthèses prioritaires",
          statement: `Calculer et donner sous forme irréductible :\n$$K = \\left(\\frac{${a}}{${b}} + \\frac{${c}}{${b}}\\right) \\times \\frac{${e}}{${f}}$$`,
          type: 'exact',
          answer: ansStr,
          placeholder: "Ex: 2/3",
          hint1: `Calcule d'abord entre parenthèses : $\\frac{${a}}{${b}} + \\frac{${c}}{${b}} = \\frac{${sumNum}}{${sumDen}}$.`,
          solution: `$$\\text{Parenthèses} = \\frac{${sumNum}}{${sumDen}}$$\n$$K = \\frac{${sumNum}}{${sumDen}} \\times \\frac{${e}}{${f}} = \\frac{${num}}{${den}} = ${this.formatFraction(num, den)}$$`
        };
      }
    } else {
      // Palier 4 : DÉFI SECONDE / DIFFICULTÉ MAXIMALE (Fraction à étages complexes)
      const a = this.randInt(1, 3);
      const b = this.randInt(2, 4);
      const c = this.randInt(1, 3);
      const d = this.randChoice([3, 5]);
      let numN = a * d - c * b;
      let numD = b * d;
      if (numN === 0) { numN = 1; }

      const e = this.randInt(1, 3);
      const f = this.randChoice([2, 3]);
      const g = this.randInt(1, 2);
      const h = this.randChoice([4, 5]);
      const denN = e * h + g * f;
      const denD = f * h;

      const finalNum = numN * denD;
      const finalDen = numD * denN;
      const [sN, sD] = this.simplifyFraction(finalNum, finalDen);
      const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;

      return {
        chapterId: 'N1',
        tier: 4,
        title: "Défi Seconde : Fraction à étages complexe",
        statement: `Calculer et donner le résultat sous forme d'une fraction irréductible :\n$$G = \\frac{\\dfrac{${a}}{${b}} - \\dfrac{${c}}{${d}}}{\\dfrac{${e}}{${f}} + \\dfrac{${g}}{${h}}}$$`,
        type: 'exact',
        answer: ansStr,
        placeholder: "Ex: 7/18",
        hint1: "Calcule séparément le numérateur du haut, puis le dénominateur du bas, avant d'effectuer la division par l'inverse.",
        hint2: `Haut : $\\frac{${a}}{${b}} - \\frac{${c}}{${d}} = \\frac{${numN}}{${numD}}$. Bas : $\\frac{${e}}{${f}} + \\frac{${g}}{${h}} = \\frac{${denN}}{${denD}}$.`,
        solution: `1. Calcul du numérateur :\n$$\\text{Numérateur} = \\frac{${a} \\times ${d}}{${b} \\times ${d}} - \\frac{${c} \\times ${b}}{${d} \\times ${b}} = \\frac{${a * d} - ${c * b}}{${numD}} = ${this.formatFraction(numN, numD)}$$\n2. Calcul du dénominateur :\n$$\\text{Dénominateur} = \\frac{${e} \\times ${h}}{${f} \\times ${h}} + \\frac{${g} \\times ${f}}{${h} \\times ${f}} = \\frac{${e * h} + ${g * f}}{${denD}} = ${this.formatFraction(denN, denD)}$$\n3. Division par multiplication par l'inverse :\n$$G = \\frac{${numN}}{${numD}} \\div \\frac{${denN}}{${denD}} = \\frac{${numN}}{${numD}} \\times \\frac{${denD}}{${denN}} = \\frac{${finalNum}}{${finalDen}} = ${this.formatFraction(finalNum, finalDen)}$$`
      };
    }
  },

  // --- N2 : Calcul littéral & Identités remarquables ---
  generateN2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Simple distributivité, distributivité avec négatif, réduction de parenthèses, valeur numérique)
      const subType = this.randChoice(['distrib_pos', 'distrib_neg', 'reduc_sum', 'reduc_diff', 'eval_num']);

      if (subType === 'distrib_pos') {
        const k = this.randInt(2, 6);
        const a = this.randInt(2, 4);
        const b = this.randInt(1, 8);
        const sign = this.randChoice(['+', '-']);
        const bVal = sign === '+' ? b : -b;
        const resA = k * a;
        const resConst = k * bVal;
        const correctText = `$${resA}x ${this.formatSigned(resConst)}$`;
        return {
          chapterId: 'N2',
          tier: 1,
          title: "Simple distributivité",
          statement: `Développer et réduire :\n$$A = ${k}(${a}x ${sign} ${b})$$`,
          type: 'mcq',
          options: [
            correctText,
            `$${resA}x ${sign} ${b}$`,
            `$${k + a}x ${sign} ${b}$`,
            `$${resA}x^2 ${this.formatSigned(resConst)}$`
          ],
          correctIndex: 0,
          explanations: [
            `Exact ! $${k} \\times ${a}x = ${resA}x$ et $${k} \\times (${bVal}) = ${resConst}$.`,
            `Attention, tu as oublié de distribuer le ${k} sur le second terme.`,
            `Attention, on multiplie ($${k} \\times ${a} = ${resA}$) et non on n'additionne pas.`,
            `Il n'y a pas de terme au carré $x^2$ ici.`
          ],
          hint1: `Distribue le facteur $${k}$ sur chacun des deux termes dans la parenthèse.`,
          solution: `$$A = ${k} \\times ${a}x + ${k} \\times (${bVal}) = ${resA}x ${this.formatSigned(resConst)}$$`
        };
      } else if (subType === 'distrib_neg') {
        const k = this.randInt(2, 5);
        const a = this.randInt(2, 4);
        const b = this.randInt(1, 6);
        const sign = this.randChoice(['+', '-']);
        const bVal = sign === '+' ? b : -b;
        const resA = -k * a;
        const resConst = -k * bVal;
        const correctText = `$${resA}x ${this.formatSigned(resConst)}$`;
        return {
          chapterId: 'N2',
          tier: 1,
          title: "Distributivité avec facteur négatif",
          statement: `Développer et réduire :\n$$B = -${k}(${a}x ${sign} ${b})$$`,
          type: 'mcq',
          options: [
            correctText,
            `$${resA}x ${sign} ${b}$`,
            `$${k * a}x ${this.formatSigned(-resConst)}$`,
            `$${resA}x^2 ${this.formatSigned(resConst)}$`
          ],
          correctIndex: 0,
          explanations: [
            `Bravo ! $(-${k}) \\times ${a}x = ${resA}x$ et $(-${k}) \\times (${bVal}) = ${resConst}$.`,
            `N'oublie pas de multiplier le second terme par $-${k}$.`,
            `Attention à la règle des signes : $(-k) \\times positive = négatif$.`,
            `Pas de $x^2$ ici.`
          ],
          hint1: `Distribue le nombre négatif $-${k}$ sur chaque terme en faisant attention aux signes.`,
          solution: `$$B = (-${k}) \\times ${a}x + (-${k}) \\times (${bVal}) = ${resA}x ${this.formatSigned(resConst)}$$`
        };
      } else if (subType === 'reduc_sum') {
        const a = this.randInt(2, 5);
        const b = this.randInt(1, 6);
        const c = this.randInt(1, 4);
        const d = this.randInt(1, 6);
        const resA = a + c;
        const resConst = b + d;
        const correctText = `$${resA}x + ${resConst}$`;
        return {
          chapterId: 'N2',
          tier: 1,
          title: "Réduction d'une somme de parenthèses",
          statement: `Supprimer les parenthèses et réduire :\n$$C = (${a}x + ${b}) + (${c}x + ${d})$$`,
          type: 'mcq',
          options: [
            correctText,
            `$${a * c}x^2 + ${b * d}$`,
            `$${resA}x + ${b}$`,
            `$${a + c + b + d}x$`
          ],
          correctIndex: 0,
          explanations: [
            `Parfait ! Regroupe les $x$ ($${a}x + ${c}x = ${resA}x$) et les nombres ($${b} + ${d} = ${resConst}$).`,
            `C'est une addition, pas une multiplication !`,
            `N'oublie pas d'additionner aussi les constantes.`,
            `On ne mélange pas les termes en $x$ et les nombres constants.`
          ],
          hint1: "Comme il y a un signe « + » devant la parenthèse, on supprime simplement les parenthèses.",
          solution: `$$C = ${a}x + ${b} + ${c}x + ${d} = (${a} + ${c})x + (${b} + ${d}) = ${resA}x + ${resConst}$$`
        };
      } else if (subType === 'reduc_diff') {
        const a = this.randInt(4, 8);
        const b = this.randInt(3, 8);
        const c = this.randInt(1, 3);
        const d = this.randInt(1, 4);
        const resA = a - c;
        const resConst = b - d;
        const correctText = `$${resA}x ${this.formatSigned(resConst)}$`;
        return {
          chapterId: 'N2',
          tier: 1,
          title: "Suppression de parenthèses précédées d'un signe « - »",
          statement: `Supprimer les parenthèses et réduire :\n$$D = (${a}x + ${b}) - (${c}x + ${d})$$`,
          type: 'mcq',
          options: [
            correctText,
            `$${resA}x + ${b + d}$`,
            `$${a + c}x ${this.formatSigned(resConst)}$`,
            `$${resA}x - ${d}$`
          ],
          correctIndex: 0,
          explanations: [
            `Exact ! Le signe moins change les signes de TOUTE la parenthèse : $-(${c}x + ${d}) = -${c}x - ${d}$.`,
            `Attention, le signe moins change aussi le signe de $+${d}$ en $-${d}$.`,
            `On soustrait $${c}x$ à $${a}x$, on ne l'ajoute pas.`,
            `N'oublie pas le terme $${b}$.`
          ],
          hint1: "Le signe moins devant une parenthèse inverse tous les signes à l'intérieur de celle-ci.",
          solution: `$$D = ${a}x + ${b} - ${c}x - ${d} = (${a} - ${c})x + (${b} - ${d}) = ${resA}x ${this.formatSigned(resConst)}$$`
        };
      } else {
        const a = this.randInt(2, 5);
        const b = this.randInt(1, 7);
        const sign = this.randChoice(['+', '-']);
        const bVal = sign === '+' ? b : -b;
        const xVal = this.randChoice([0, 2, -1]);
        const ans = a * xVal + bVal;
        return {
          chapterId: 'N2',
          tier: 1,
          title: "Valeur numérique d'une expression littérale",
          statement: `On donne l'expression $E = ${a}x ${sign} ${b}$.\n**Calculer la valeur de $E$ pour $x = ${xVal}$ :**`,
          type: 'exact',
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Remplace $x$ par $${xVal}$ dans l'expression : $${a} \\times (${xVal}) ${sign} ${b}$.`,
          solution: `$$E = ${a} \\times (${xVal}) ${sign} ${b} = ${a * xVal} ${bVal >= 0 ? '+ ' + bVal : '- ' + Math.abs(bVal)} = ${ans}$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Identités remarquables (x+a)^2, (x-a)^2, (x-a)(x+a), (ax+b)^2)
      const type = this.randChoice(['id1', 'id2', 'id3', 'id1_coeff', 'id3_coeff']);
      const b = this.randInt(2, 8);
      const b2 = b * b;
      const twoB = 2 * b;

      if (type === 'id1_coeff') {
        const a = this.randInt(2, 3);
        const cConst = this.randInt(1, 4);
        const a2 = a * a;
        const c2 = cConst * cConst;
        const doubleProd = 2 * a * cConst;
        const correctText = `$${a2}x^2 + ${doubleProd}x + ${c2}$`;
        return {
          chapterId: 'N2',
          tier: 2,
          title: "Identité remarquable $(ax + b)^2$",
          statement: `Développer à l'aide d'une identité remarquable :\n$$B = (${a}x + ${cConst})^2$$`,
          type: 'mcq',
          options: [
            correctText,
            `$${a2}x^2 + ${c2}$`,
            `$${a}x^2 + ${doubleProd}x + ${c2}$`,
            `$${a2}x^2 + ${a * cConst}x + ${c2}$`
          ],
          correctIndex: 0,
          hint1: "Formule : $(u+v)^2 = u^2 + 2uv + v^2$ avec $u = ax$ et $v = b$. Attention : $(ax)^2 = a^2x^2$.",
          solution: `$$B = (${a}x)^2 + 2 \\times (${a}x) \\times ${cConst} + ${cConst}^2 = ${a2}x^2 + ${doubleProd}x + ${c2}$$`
        };
      } else if (type === 'id3_coeff') {
        const a = this.randInt(2, 4);
        const cConst = this.randInt(2, 5);
        const a2 = a * a;
        const c2 = cConst * cConst;
        const correctText = `$${a2}x^2 - ${c2}$`;
        return {
          chapterId: 'N2',
          tier: 2,
          title: "Identité remarquable $(ax - b)(ax + b)$",
          statement: `Développer directement :\n$$D = (${a}x - ${cConst})(${a}x + ${cConst})$$`,
          type: 'mcq',
          options: [
            correctText,
            `$${a2}x^2 + ${c2}$`,
            `$${a}x^2 - ${c2}$`,
            `$${a2}x - ${c2}$`
          ],
          correctIndex: 0,
          hint1: "Formule : $(u-v)(u+v) = u^2 - v^2$ avec $u = ax$ et $v = b$.",
          solution: `$$D = (${a}x)^2 - ${cConst}^2 = ${a2}x^2 - ${c2}$$`
        };
      } else if (type === 'id1') {
        return {
          chapterId: 'N2',
          tier: 2,
          title: "Identité remarquable $(x + a)^2$",
          statement: `Développer à l'aide d'une identité remarquable :\n$$B = (x + ${b})^2$$`,
          type: 'mcq',
          options: [
            `$x^2 + ${twoB}x + ${b2}$`,
            `$x^2 + ${b2}$`,
            `$x^2 + ${b}x + ${b2}$`,
            `$2x + ${twoB}$`
          ],
          correctIndex: 0,
          explanations: [
            `Parfait ! $(a+b)^2 = a^2 + 2ab + b^2$, avec $2ab = 2 \\times x \\times ${b} = ${twoB}x$.`,
            `Erreur classique : ne pas oublier le double produit $2ab = ${twoB}x$ !`,
            `Le double produit est $2 \\times ${b} \\times x = ${twoB}x$, pas $${b}x$.`,
            `Attention, c'est un carré, pas une multiplication par 2.`
          ],
          hint1: "Formule : $(a + b)^2 = a^2 + 2ab + b^2$.",
          solution: `$$B = x^2 + 2 \\times x \\times ${b} + ${b}^2 = x^2 + ${twoB}x + ${b2}$$`
        };
      } else if (type === 'id2') {
        return {
          chapterId: 'N2',
          tier: 2,
          title: "Identité remarquable $(x - a)^2$",
          statement: `Développer :\n$$C = (x - ${b})^2$$`,
          type: 'mcq',
          options: [
            `$x^2 - ${twoB}x + ${b2}$`,
            `$x^2 - ${b2}$`,
            `$x^2 - ${twoB}x - ${b2}$`,
            `$x^2 + ${twoB}x + ${b2}$`
          ],
          correctIndex: 0,
          explanations: [
            `Exact ! $(a-b)^2 = a^2 - 2ab + b^2$.`,
            `Tu as oublié le double produit $-2ab = -${twoB}x$.`,
            `Attention au dernier terme : $(-${b})^2 = +${b2}$.`,
            `Le double produit porte un signe moins ($-2ab$).`
          ],
          hint1: "Formule : $(a - b)^2 = a^2 - 2ab + b^2$.",
          solution: `$$C = x^2 - 2 \\times x \\times ${b} + ${b}^2 = x^2 - ${twoB}x + ${b2}$$`
        };
      } else {
        return {
          chapterId: 'N2',
          tier: 2,
          title: "Identité remarquable $(x - a)(x + a)$",
          statement: `Développer directement :\n$$D = (x - ${b})(x + ${b})$$`,
          type: 'mcq',
          options: [
            `$x^2 - ${b2}$`,
            `$x^2 + ${b2}$`,
            `$x^2 - ${twoB}x - ${b2}$`,
            `$2x - ${b2}$`
          ],
          correctIndex: 0,
          explanations: [
            `Bravo ! $(a-b)(a+b) = a^2 - b^2$. Il n'y a pas de double produit.`,
            `Attention, la formule donne $a^2 - b^2$ avec un signe moins.`,
            `Les termes en $x$ s'annulent.`,
            `$x \\times x = x^2$, pas $2x$.`
          ],
          hint1: "Reconnais la 3ème identité remarquable : $(a-b)(a+b) = a^2 - b^2$.",
          solution: `$$D = x^2 - ${b}^2 = x^2 - ${b2}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (Double distributivité ou (ax+b)^2 avec a >= 2)
      const a = this.randInt(2, 4);
      const b = this.randInt(1, 5);
      const c = this.randInt(2, 4);
      const d = this.randInt(1, 5);
      // (ax + b)(cx - d) = (a*c)x^2 + (b*c - a*d)x - b*d
      const coeffX2 = a * c;
      const coeffX = b * c - a * d;
      const coeffConst = -(b * d);
      const correctStr = `$${this.formatPoly(coeffX2, coeffX, coeffConst)}$`;

      return {
        chapterId: 'N2',
        tier: 3,
        title: "Double distributivité $(ax + b)(cx - d)$",
        statement: `Développer et réduire l'expression :\n$$E = (${a}x + ${b})(${c}x - ${d})$$`,
        type: 'mcq',
        options: [
          correctStr,
          `$${coeffX2}x^2 ${coeffConst > 0 ? '+' : '-'} ${Math.abs(coeffConst)}$`,
          `$${coeffX2}x^2 + ${(b * c + a * d)}x ${coeffConst > 0 ? '+' : '-'} ${Math.abs(coeffConst)}$`,
          `$${a + c}x^2 + ${coeffX}x - ${b * d}$`
        ],
        correctIndex: 0,
        explanations: [
          `Parfait ! $(ax+b)(cx-d) = acx^2 - adx + bcx - bd = ${coeffX2}x^2 ${this.formatSignedTerm(coeffX, 'x')} ${this.formatSigned(coeffConst)}$.`,
          `Attention, tu as oublié les termes croisés en $x$ !`,
          `Attention au signe de $(-${d})$ dans les termes croisés.`,
          `On multiplie les coefficients ($${a} \\times ${c} = ${coeffX2}$).`
        ],
        hint1: "Développe chaque terme : $(ax)(cx) + (ax)(-d) + (b)(cx) + (b)(-d)$.",
        solution: `$$E = (${a}x \\times ${c}x) + (${a}x \\times (-${d})) + (${b} \\times ${c}x) + (${b} \\times (-${d})) = ${coeffX2}x^2 - ${a * d}x + ${b * c}x - ${b * d} = ${this.formatPoly(coeffX2, coeffX, coeffConst)}$$`
      };
    } else {
      // Palier 4 : DÉFI SECONDE / DIFFICULTÉ MAXIMALE (Différence de deux carrés complète (ax+b)^2 - (cx+d)^2)
      const a = this.randInt(2, 4);
      const b = this.randInt(1, 4);
      const c = this.randInt(1, a - 1); // garantit a > c pour x^2 > 0
      const d = this.randInt(1, 4);

      // A = (ax + b)^2 - (cx + d)^2
      // = (a^2 - c^2)x^2 + 2(a*b - c*d)x + (b^2 - d^2)
      const coeffX2 = a * a - c * c;
      const coeffX = 2 * (a * b - c * d);
      const coeffConst = b * b - d * d;
      const correctStr = `$${this.formatPoly(coeffX2, coeffX, coeffConst)}$`;

      return {
        chapterId: 'N2',
        tier: 4,
        title: "Défi Seconde : Différence de deux carrés $(ax+b)^2 - (cx+d)^2$",
        statement: `Développer et réduire l'expression complexe suivante :\n$$F = (${a}x + ${b})^2 - (${c}x + ${d})^2$$`,
        type: 'mcq',
        options: [
          correctStr,
          `$${coeffX2}x^2 + ${coeffConst}$`,
          `$${a * a + c * c}x^2 + ${2 * (a * b + c * d)}x + ${b * b + d * d}$`,
          `$${coeffX2}x^2 + ${2 * a * b}x + ${b * b - d * d}$`
        ],
        correctIndex: 0,
        explanations: [
          `Brillant ! Développe séparément : $(${a}x+${b})^2 = ${a*a}x^2 + ${2*a*b}x + ${b*b}$ et $(${c}x+${d})^2 = ${c*c}x^2 + ${2*c*d}x + ${d*d}$, puis soustrais en distribuant le signe « - ».`,
          `Attention aux termes en $x$ qui ne s'annulent pas !`,
          `Attention, le signe « - » s'applique à TOUS les termes de la seconde parenthèse.`,
          `N'oublie pas de soustraire le double produit du second carré.`
        ],
        hint1: "Développe $(ax+b)^2$ et $(cx+d)^2$, puis soustrais en faisant très attention aux parenthèses après le signe moins.",
        solution: `1. Premier carré : $(${a}x + ${b})^2 = ${a*a}x^2 + ${2*a*b}x + ${b*b}$.\n2. Second carré : $(${c}x + ${d})^2 = ${c*c}x^2 + ${2*c*d}x + ${d*d}$.\n3. Soustraction :\n$$F = (${a*a}x^2 + ${2*a*b}x + ${b*b}) - (${c*c}x^2 + ${2*c*d}x + ${d*d})$$\n$$F = ${a*a}x^2 - ${c*c}x^2 + ${2*a*b}x - ${2*c*d}x + ${b*b} - ${d*d} = ${this.formatPoly(coeffX2, coeffX, coeffConst)}$$`
      };
    }
  },

  // --- N3 : Puissances & Notation scientifique ---
  generateN3(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Produit, quotient, puissance de puissance de 10, petits nombres ou préfixes)
      const subType = this.randChoice(['prod_10', 'quot_10', 'pow_pow_10', 'small_base', 'prefix']);

      if (subType === 'prod_10') {
        const n = this.randInt(2, 7);
        const m = this.randInt(2, 6);
        const sum = n + m;
        return {
          chapterId: 'N3',
          tier: 1,
          title: "Produit de puissances de 10",
          statement: `Écrire sous la forme d'une seule puissance de 10 :\n$$A = 10^{${n}} \\times 10^{${m}}$$`,
          type: 'exact',
          answer: `10^${sum}`,
          placeholder: "Ex: 10^7",
          hint1: "Formule : $10^n \\times 10^m = 10^{n+m}$.",
          solution: `$$A = 10^{${n} + ${m}} = 10^{${sum}}$$`
        };
      } else if (subType === 'quot_10') {
        const n = this.randInt(5, 9);
        const m = this.randInt(2, n - 1);
        const diff = n - m;
        return {
          chapterId: 'N3',
          tier: 1,
          title: "Quotient simple de puissances de 10",
          statement: `Écrire sous la forme d'une seule puissance de 10 :\n$$Q = \\frac{10^{${n}}}{10^{${m}}}$$`,
          type: 'exact',
          answer: `10^${diff}`,
          placeholder: "Ex: 10^3",
          hint1: "Formule : $\\frac{10^n}{10^m} = 10^{n-m}$.",
          solution: `$$Q = 10^{${n} - ${m}} = 10^{${diff}}$$`
        };
      } else if (subType === 'pow_pow_10') {
        const n = this.randInt(2, 5);
        const m = this.randInt(2, 4);
        const prod = n * m;
        return {
          chapterId: 'N3',
          tier: 1,
          title: "Puissance d'une puissance de 10",
          statement: `Écrire sous la forme d'une seule puissance de 10 :\n$$P = (10^{${n}})^{${m}}$$`,
          type: 'exact',
          answer: `10^${prod}`,
          placeholder: "Ex: 10^6",
          hint1: "Formule : $(10^n)^m = 10^{n \\times m}$.",
          solution: `$$P = 10^{${n} \\times ${m}} = 10^{${prod}}$$`
        };
      } else if (subType === 'small_base') {
        const cases = [
          { a: 2, n: 3, ans: 8 },
          { a: 2, n: 4, ans: 16 },
          { a: 3, n: 2, ans: 9 },
          { a: 3, n: 3, ans: 27 },
          { a: 4, n: 2, ans: 16 },
          { a: 5, n: 2, ans: 25 },
          { a: -2, n: 3, ans: -8 },
          { a: -3, n: 2, ans: 9 }
        ];
        const c = this.randChoice(cases);
        return {
          chapterId: 'N3',
          tier: 1,
          title: "Puissance d'un nombre relatif",
          statement: `Calculer la valeur exacte du nombre :\n$$N = (${c.a})^{${c.n}}$$`,
          type: 'exact',
          answer: String(c.ans),
          placeholder: `Ex: ${c.ans}`,
          hint1: `Élève $${c.a}$ à la puissance ${c.n} ($${c.n}$ facteurs égaux à $${c.a}$).`,
          solution: `$$(${c.a})^{${c.n}} = ${c.ans}$$`
        };
      } else {
        const prefixes = [
          { name: "kilo (k)", exp: "10^3" },
          { name: "méga (M)", exp: "10^6" },
          { name: "giga (G)", exp: "10^9" },
          { name: "milli (m)", exp: "10^-3" },
          { name: "micro (µ)", exp: "10^-6" },
          { name: "nano (n)", exp: "10^-9" }
        ];
        const p = this.randChoice(prefixes);
        const wrongChoices = prefixes.filter(x => x.name !== p.name).map(x => x.exp);
        const opts = this.shuffle([p.exp, ...this.shuffle(wrongChoices).slice(0, 3)]);
        return {
          chapterId: 'N3',
          tier: 1,
          title: "Préfixes d'unités et puissances de 10",
          statement: `À quelle puissance de 10 correspond le préfixe **${p.name}** ?`,
          type: 'mcq',
          options: opts,
          answer: p.exp,
          correctIndex: opts.indexOf(p.exp),
          hint1: "Rappel : kilo = mille ($10^3$), méga = million ($10^6$), milli = millième ($10^{-3}$)...",
          solution: `Le préfixe **${p.name}** correspond à **$${p.exp}$**.`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Quotient exposants négatifs, calcul combiné, même base)
      const subType = this.randChoice(['quot_neg', 'prod_quot_comb', 'pow_pow_quot', 'same_base']);

      if (subType === 'quot_neg') {
        const n = this.randInt(-4, 7);
        const m = this.randInt(-5, 6, [n]);
        const diff = n - m;
        return {
          chapterId: 'N3',
          tier: 2,
          title: "Quotient de puissances de 10 avec exposants relatifs",
          statement: `Écrire sous la forme $10^k$ :\n$$B = \\frac{10^{${n}}}{10^{${m}}}$$`,
          type: 'exact',
          answer: `10^${diff}`,
          placeholder: "Ex: 10^3",
          hint1: "Formule : $\\frac{10^n}{10^m} = 10^{n - m}$. Attention aux signes !",
          solution: `$$B = 10^{${n} - (${m})} = 10^{${diff}}$$`
        };
      } else if (subType === 'prod_quot_comb') {
        const a = this.randInt(2, 6);
        const b = this.randInt(-4, 5, [0]);
        const c = this.randInt(-3, 4, [0]);
        const ansExp = a + b - c;
        return {
          chapterId: 'N3',
          tier: 2,
          title: "Produit et quotient combinés de puissances de 10",
          statement: `Écrire sous la forme d'une seule puissance de 10 : $10^n$ :\n$$E = \\frac{10^{${a}} \\times 10^{${b}}}{10^{${c}}}$$`,
          type: 'exact',
          answer: `10^${ansExp}`,
          placeholder: `Ex: 10^${ansExp}`,
          hint1: `Numérateur : $10^{${a} + (${b})} = 10^{${a + b}}$. Puis soustrais le dénominateur : $(${a + b}) - (${c})$.`,
          solution: `$$E = \\frac{10^{${a + b}}}{10^{${c}}} = 10^{${a + b} - (${c})} = 10^{${ansExp}}$$`
        };
      } else if (subType === 'pow_pow_quot') {
        const a = this.randInt(2, 4);
        const b = this.randInt(2, 3);
        const c = this.randInt(1, 5);
        const ansExp = a * b - c;
        return {
          chapterId: 'N3',
          tier: 2,
          title: "Puissance de puissance et quotient",
          statement: `Écrire sous la forme $10^k$ :\n$$F = \\frac{(10^{${a}})^{${b}}}{10^{${c}}}$$`,
          type: 'exact',
          answer: `10^${ansExp}`,
          placeholder: `Ex: 10^${ansExp}`,
          hint1: `Calcule $(10^{${a}})^{${b}} = 10^{${a} \\times ${b}} = 10^{${a * b}}$, puis soustrais ${c}.`,
          solution: `$$F = \\frac{10^{${a * b}}}{10^{${c}}} = 10^{${a * b} - ${c}} = 10^{${ansExp}}$$`
        };
      } else {
        const base = this.randChoice([2, 3, 5, 7]);
        const a = this.randInt(2, 6);
        const b = this.randInt(2, 5);
        const sum = a + b;
        return {
          chapterId: 'N3',
          tier: 2,
          title: "Produit de puissances d'un même nombre entier",
          statement: `Écrire sous la forme $${base}^k$.\n**Quelle est la valeur de l'exposant $k$ pour le calcul :**\n$$${base}^{${a}} \\times ${base}^{${b}}$$`,
          type: 'exact',
          answer: String(sum),
          placeholder: `Ex: ${sum}`,
          hint1: "Règle : pour tout nombre $a$ non nul, $a^n \\times a^m = a^{n + m}$.",
          solution: `$$${base}^{${a}} \\times ${base}^{${b}} = ${base}^{${a} + ${b}} = ${base}^{${sum}} \\implies k = ${sum}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (Calcul scientifique type DNB)
      const a = this.randChoice([3, 4, 6]);
      const b = this.randChoice([5, 8, 15]);
      const c = this.randChoice([2, 3, 6]);
      const p = this.randInt(2, 6);
      const q = this.randInt(-4, 2, [0]);
      const r = this.randInt(1, 4);

      const coeffNum = a * b;
      const [sN, sD] = this.simplifyFraction(coeffNum, c);
      const coeffVal = sN / sD;
      const exp10 = (p + q) - r;

      return {
        chapterId: 'N3',
        tier: 3,
        title: "Calcul scientifique type Brevet",
        statement: `Donner la notation scientifique de :\n$$C = \\frac{${a} \\times 10^{${p}} \\times ${b} \\times 10^{${q}}}{${c} \\times 10^{${r}}}$$`,
        type: 'exact',
        answer: `${coeffVal}*10^${exp10}`,
        placeholder: `Ex: ${coeffVal}*10^${exp10}`,
        hint1: "Regroupe d'une part les nombres décimaux et d'autre part les puissances de 10.",
        hint2: `Nombres : $\\frac{${a} \\times ${b}}{${c}} = ${coeffVal}$. Puissances : $\\frac{10^{${p}} \\times 10^{${q}}}{10^{${r}}} = 10^{${p}+(${q})-(${r})}$.`,
        solution: `$$C = \\left(\\frac{${a} \\times ${b}}{${c}}\\right) \\times \\left(\\frac{10^{${p}} \\times 10^{${q}}}{10^{${r}}}\\right) = ${coeffVal} \\times 10^{${exp10}}$$`
      };
    } else {
      // Palier 4 : DÉFI SECONDE / DIFFICULTÉ MAXIMALE (Puissances de puissances imbriquées et exposants négatifs)
      const p = this.randInt(2, 4);
      const q = this.randInt(2, 3);
      const r = this.randInt(-6, -2);
      const s = this.randInt(-4, 3, [0]);
      // (10^p)^q * 10^r / 10^s = 10^(p*q + r - s)
      const finalExp = p * q + r - s;
      const a = this.randChoice([2, 5, 8]);
      const b = this.randChoice([4, 6, 9]);
      const c = this.randChoice([3, 12, 15]);
      const [sN, sD] = this.simplifyFraction(a * b, c);
      const coeff = sD === 1 ? `${sN}` : `${sN}/${sD}`;

      return {
        chapterId: 'N3',
        tier: 4,
        title: "Défi Seconde : Puissances imbriquées et exposants négatifs",
        statement: `Simplifier sous la forme d'une seule puissance de 10 :\n$$D = \\frac{(10^{${p}})^{${q}} \\times 10^{${r}}}{10^{${s}}}$$`,
        type: 'exact',
        answer: `10^${finalExp}`,
        placeholder: "Ex: 10^5 ou 10^-3",
        hint1: "Commence par calculer la puissance de puissance : $(10^p)^q = 10^{p \\times q}$.",
        hint2: `Haut : $10^{${p} \\times ${q}} \\times 10^{${r}} = 10^{${p * q + r}}$. Puis soustrais l'exposant du bas : $(${p * q + r}) - (${s})$.`,
        solution: `1. Puissance de puissance : $(10^{${p}})^{${q}} = 10^{${p} \\times ${q}} = 10^{${p * q}}$.\n2. Numérateur : $10^{${p * q}} \\times 10^{${r}} = 10^{${p * q + r}}$.\n3. Quotient final :\n$$D = \\frac{10^{${p * q + r}}}{10^{${s}}} = 10^{${p * q + r} - (${s})} = 10^{${finalExp}}$$`
      };
    }
  },

  // --- N4 : Résolution d'équations ---
  generateN4(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Équations élémentaires : ax = b, x + a = b, x - a = b, -x = a, a - x = b)
      const subType = this.randChoice(['ax_eq_b', 'x_plus_a', 'x_minus_a', 'minus_x', 'a_minus_x']);

      if (subType === 'ax_eq_b') {
        const a = this.randInt(2, 8);
        const xSol = this.randInt(-8, 9, [0]);
        const b = a * xSol;
        return {
          chapterId: 'N4',
          tier: 1,
          title: "Équation linéaire élémentaire $ax = b$",
          statement: `Résoudre l'équation :\n$$${a}x = ${b}$$\nQuelle est la valeur de $x$ ?`,
          type: 'exact',
          answer: String(xSol),
          placeholder: `Ex: ${xSol}`,
          hint1: `Divise les deux membres par ${a}.`,
          solution: `$$${a}x = ${b} \\implies x = \\frac{${b}}{${a}} = ${xSol}$$`
        };
      } else if (subType === 'x_plus_a') {
        const a = this.randInt(3, 15);
        const b = this.randInt(-10, 20);
        const xSol = b - a;
        return {
          chapterId: 'N4',
          tier: 1,
          title: "Équation élémentaire $x + a = b$",
          statement: `Résoudre dans $\\mathbb{R}$ l'équation :\n$$x + ${a} = ${b}$$`,
          type: 'exact',
          answer: String(xSol),
          placeholder: `Ex: ${xSol}`,
          hint1: `Soustrais $${a}$ des deux côtés de l'égalité : $x = ${b} - ${a}$.`,
          solution: `$$x + ${a} = ${b} \\implies x = ${b} - ${a} = ${xSol}$$`
        };
      } else if (subType === 'x_minus_a') {
        const a = this.randInt(2, 14);
        const b = this.randInt(-8, 15);
        const xSol = b + a;
        return {
          chapterId: 'N4',
          tier: 1,
          title: "Équation élémentaire $x - a = b$",
          statement: `Résoudre dans $\\mathbb{R}$ l'équation :\n$$x - ${a} = ${b}$$`,
          type: 'exact',
          answer: String(xSol),
          placeholder: `Ex: ${xSol}`,
          hint1: `Ajoute $${a}$ des deux côtés de l'égalité : $x = ${b} + ${a}$.`,
          solution: `$$x - ${a} = ${b} \\implies x = ${b} + ${a} = ${xSol}$$`
        };
      } else if (subType === 'minus_x') {
        const a = this.randInt(-12, 15, [0]);
        const xSol = -a;
        return {
          chapterId: 'N4',
          tier: 1,
          title: "Équation avec opposé $-x = a$",
          statement: `Résoudre dans $\\mathbb{R}$ l'équation :\n$$-x = ${a}$$`,
          type: 'exact',
          answer: String(xSol),
          placeholder: `Ex: ${xSol}`,
          hint1: "Multiplie ou divise par $-1$ pour trouver $x$.",
          solution: `$$-x = ${a} \\implies x = -(${a}) = ${xSol}$$`
        };
      } else {
        const a = this.randInt(5, 20);
        const b = this.randInt(-5, a - 1);
        const xSol = a - b;
        return {
          chapterId: 'N4',
          tier: 1,
          title: "Équation élémentaire $a - x = b$",
          statement: `Résoudre dans $\\mathbb{R}$ l'équation :\n$$${a} - x = ${b}$$`,
          type: 'exact',
          answer: String(xSol),
          placeholder: `Ex: ${xSol}`,
          hint1: `Isole $-x = ${b} - ${a} = ${b - a}$, donc $x = ${a} - ${b}$.`,
          solution: `$$${a} - x = ${b} \\implies -x = ${b} - ${a} = ${b - a} \\implies x = ${xSol}$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (ax + c = b, ax - c = b, c - ax = b, x^2 = a, x/a + b = c)
      const subType = this.randChoice(['ax_plus_c', 'ax_minus_c', 'c_minus_ax', 'x_square', 'x_div_a']);

      if (subType === 'ax_plus_c') {
        const a = this.randInt(2, 6);
        const xSol = this.randInt(2, 8);
        const c = this.randInt(1, 9);
        const b = a * xSol + c;
        return {
          chapterId: 'N4',
          tier: 2,
          title: "Équation du type $ax + c = b$",
          statement: `Résoudre l'équation :\n$$${a}x + ${c} = ${b}$$`,
          type: 'exact',
          answer: String(xSol),
          placeholder: `Ex: ${xSol}`,
          hint1: `Isole $${a}x$ en soustrayant $${c}$ de chaque côté : $${a}x = ${b} - ${c}$.`,
          solution: `$$${a}x + ${c} = ${b} \\implies ${a}x = ${b - c} \\implies x = \\frac{${b - c}}{${a}} = ${xSol}$$`
        };
      } else if (subType === 'ax_minus_c') {
        const a = this.randInt(2, 6);
        const xSol = this.randInt(-5, 7);
        const c = this.randInt(2, 10);
        const b = a * xSol - c;
        return {
          chapterId: 'N4',
          tier: 2,
          title: "Équation du type $ax - c = b$",
          statement: `Résoudre l'équation :\n$$${a}x - ${c} = ${b}$$`,
          type: 'exact',
          answer: String(xSol),
          placeholder: `Ex: ${xSol}`,
          hint1: `Ajoute $${c}$ des deux côtés : $${a}x = ${b} + ${c}$. Puis divise par $${a}$.`,
          solution: `$$${a}x - ${c} = ${b} \\implies ${a}x = ${b + c} \\implies x = \\frac{${b + c}}{${a}} = ${xSol}$$`
        };
      } else if (subType === 'c_minus_ax') {
        const a = this.randInt(2, 5);
        const xSol = this.randInt(1, 7);
        const c = this.randInt(15, 30);
        const b = c - a * xSol;
        return {
          chapterId: 'N4',
          tier: 2,
          title: "Équation du type $c - ax = b$",
          statement: `Résoudre dans $\\mathbb{R}$ l'équation :\n$$${c} - ${a}x = ${b}$$`,
          type: 'exact',
          answer: String(xSol),
          placeholder: `Ex: ${xSol}`,
          hint1: `Isole $-${a}x = ${b} - ${c} = ${b - c}$, puis divise par $-${a}$.`,
          solution: `$$-${a}x = ${b} - ${c} = ${b - c} \\implies x = \\frac{${b - c}}{-${a}} = ${xSol}$$`
        };
      } else if (subType === 'x_square') {
        const r = this.randInt(3, 12);
        const sq = r * r;
        return {
          chapterId: 'N4',
          tier: 2,
          title: "Solution positive de l'équation $x^2 = a$",
          statement: `On considère l'équation $x^2 = ${sq}$.\n**Quelle est sa solution positive ?**`,
          type: 'exact',
          answer: String(r),
          placeholder: `Ex: ${r}`,
          hint1: `Les solutions de $x^2 = k$ ($k > 0$) sont $\\sqrt{k}$ et $-\\sqrt{k}$.`,
          solution: `$$x^2 = ${sq} \\implies x = \\sqrt{${sq}} = ${r} \\quad \\text{(ou } x = -${r}\\text{)}$$\nLa solution positive est **${r}**.`
        };
      } else {
        const a = this.randInt(2, 5);
        const xSol = this.randInt(2, 8) * a;
        const b = this.randInt(1, 8);
        const c = (xSol / a) + b;
        return {
          chapterId: 'N4',
          tier: 2,
          title: "Équation avec quotient $\\frac{x}{a} + b = c$",
          statement: `Résoudre l'équation :\n$$\\frac{x}{${a}} + ${b} = ${c}$$`,
          type: 'exact',
          answer: String(xSol),
          placeholder: `Ex: ${xSol}`,
          hint1: `Isole $\\frac{x}{${a}} = ${c} - ${b} = ${c - b}$, puis multiplie par $${a}$.`,
          solution: `$$\\frac{x}{${a}} = ${c} - ${b} = ${c - b} \\implies x = ${c - b} \\times ${a} = ${xSol}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (ax + b = cx + d ou équation produit nul)
      const subType = this.randChoice(['prod_nul_simple', 'prod_nul_coeff', 'two_sides_std', 'two_sides_neg']);

      if (subType === 'prod_nul_simple') {
        const u = this.randInt(1, 8);
        const v = this.randInt(1, 8, [u]);
        return {
          chapterId: 'N4',
          tier: 3,
          title: "Équation produit nul $(x - a)(x + b) = 0$",
          statement: `Quelles sont les solutions de l'équation :\n$$(x - ${u})(x + ${v}) = 0$$`,
          type: 'mcq',
          options: [
            `$x = ${u}$ et $x = -${v}$`,
            `$x = -${u}$ et $x = ${v}$`,
            `$x = ${u}$ et $x = ${v}$`,
            `Seulement $x = ${u}$`
          ],
          correctIndex: 0,
          explanations: [
            `Exact ! Un produit de facteurs est nul si au moins un des facteurs est nul.`,
            `Attention aux signes lors du passage de l'autre côté de l'égalité.`,
            `$x + ${v} = 0 \\implies x = -${v}$.`,
            `Une équation produit nul a deux solutions.`
          ],
          hint1: "Résous séparément $x - a = 0$ et $x + b = 0$.",
          solution: `$$x - ${u} = 0 \\implies x = ${u} \\quad \\text{ou} \\quad x + ${v} = 0 \\implies x = -${v}$$`
        };
      } else if (subType === 'prod_nul_coeff') {
        const a = this.randInt(2, 4);
        const b = this.randInt(1, 5);
        const c = this.randInt(1, 7);
        const [sN, sD] = this.simplifyFraction(b, a);
        const fracStr = this.formatFraction(sN, sD);
        return {
          chapterId: 'N4',
          tier: 3,
          title: "Équation produit nul $(ax - b)(x + c) = 0$",
          statement: `Quelles sont les solutions de l'équation :\n$$(${a}x - ${b})(x + ${c}) = 0$$`,
          type: 'mcq',
          options: [
            `$x = ${fracStr}$ et $x = -${c}$`,
            `$x = -${fracStr}$ et $x = ${c}$`,
            `$x = ${b}$ et $x = -${c}$`,
            `$x = 0$ et $x = -${c}$`
          ],
          correctIndex: 0,
          hint1: `Équation produit nul : $${a}x - ${b} = 0 \\implies x = \\frac{${b}}{${a}}$ ou $x + ${c} = 0 \\implies x = -${c}$.`,
          solution: `$$${a}x - ${b} = 0 \\implies x = ${fracStr} \\quad \\text{ou} \\quad x + ${c} = 0 \\implies x = -${c}$$`
        };
      } else if (subType === 'two_sides_std') {
        const a = this.randInt(4, 7);
        const c = this.randInt(1, a - 1);
        const xSol = this.randInt(1, 6);
        const d = this.randInt(1, 8);
        const b = d - (a - c) * xSol;
        return {
          chapterId: 'N4',
          tier: 3,
          title: "Équation avec $x$ des deux côtés",
          statement: `Résoudre dans $\\mathbb{R}$ l'équation :\n$$${a}x ${this.formatSigned(b)} = ${c}x + ${d}$$`,
          type: 'exact',
          answer: String(xSol),
          placeholder: `Ex: ${xSol}`,
          hint1: `Regroupe les termes en $x$ à gauche (en soustrayant $${c}x$) et les constantes à droite.`,
          solution: `$$${a}x - ${c}x = ${d} ${this.formatSigned(-b)} \\implies ${a - c}x = ${d - b} \\implies x = \\frac{${d - b}}{${a - c}} = ${xSol}$$`
        };
      } else {
        const c = this.randInt(5, 8);
        const a = this.randInt(2, c - 1);
        const xSol = this.randInt(-4, 4);
        const d = this.randInt(1, 7);
        const b = (c - a) * xSol + d;
        return {
          chapterId: 'N4',
          tier: 3,
          title: "Équation avec l'inconnue des deux côtés (terme en $x$ négatif)",
          statement: `Résoudre l'équation :\n$$${a}x + ${b} = ${c}x + ${d}$$`,
          type: 'exact',
          answer: String(xSol),
          placeholder: `Ex: ${xSol}`,
          hint1: `Regroupe les $x$ à gauche : $${a}x - ${c}x = ${a - c}x$, et les nombres à droite : $${d} - ${b}$.`,
          solution: `$$${a}x - ${c}x = ${d} - ${b} \\implies ${a - c}x = ${d - b} \\implies x = \\frac{${d - b}}{${a - c}} = ${xSol}$$`
        };
      }
    } else {
      // Palier 4 : DÉFI SECONDE / DIFFICULTÉ MAXIMALE (Équation produit-nul avec factorisation préalable)
      const a = this.randInt(2, 3);
      const b = this.randInt(1, 4);
      const c = this.randInt(3, 5);
      const d = this.randInt(1, 3);
      const e = this.randInt(1, 2);
      const f = this.randInt(4, 6);
      // (ax + b)(cx + d) - (ax + b)(ex + f) = 0
      // <=> (ax + b)[(c - e)x + (d - f)] = 0
      const cPrime = c - e;
      const dPrime = d - f; // négatif
      // solutions: x1 = -b/a, x2 = -dPrime/cPrime = (f-d)/(c-e)
      const [sN1, sD1] = this.simplifyFraction(-b, a);
      const sol1Str = this.formatFraction(sN1, sD1);
      const [sN2, sD2] = this.simplifyFraction(f - d, c - e);
      const sol2Str = this.formatFraction(sN2, sD2);

      return {
        chapterId: 'N4',
        tier: 4,
        title: "Défi Seconde : Équation avec factorisation préalable",
        statement: `Résoudre dans $\\mathbb{R}$ l'équation :\n$$(${a}x + ${b})(${c}x + ${d}) - (${a}x + ${b})(${e}x + ${f}) = 0$$`,
        type: 'mcq',
        options: [
          `$x = ${sol1Str}$ et $x = ${sol2Str}$`,
          `$x = ${this.formatFraction(b, a)}$ et $x = ${sol2Str}$`,
          `$x = ${sol1Str}$ uniquement`,
          `$x = 0$ et $x = ${sol2Str}$`
        ],
        correctIndex: 0,
        explanations: [
          `Magistral ! On factorise d'abord par le facteur commun $(${a}x+${b})$, ce qui donne une équation produit-nul à deux solutions.`,
          `Attention au signe : $${a}x + ${b} = 0 \\implies x = -\\frac{${b}}{${a}}$.`,
          `Une équation de degré 2 factorisable admet deux solutions.`,
          `$x = 0$ n'est pas solution ici.`
        ],
        hint1: "Ne développe surtout pas ! Factorise par le facteur commun $(ax + b)$ pour te ramener à une équation produit nul.",
        solution: `1. Factorisation par $(${a}x + ${b})$ :\n$$(${a}x + ${b})[(${c}x + ${d}) - (${e}x + ${f})] = 0$$\n$$(${a}x + ${b})[${c - e}x ${this.formatSigned(d - f)}] = 0$$\n2. Résolution du produit nul :\n$$${a}x + ${b} = 0 \\implies x = ${sol1Str} \\quad \\text{ou} \\quad ${c - e}x - ${f - d} = 0 \\implies x = ${sol2Str}$$`
      };
    }
  },

  // --- N5 : Arithmétique & Nombres premiers ---
  generateN5(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      const vtype = this.randChoice(['is_prime', 'not_prime', 'divisibility_rule']);
      if (vtype === 'is_prime') {
        const primes = [13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
        const p = this.randChoice(primes);
        const comps = [21, 25, 27, 33, 35, 39, 45, 49, 51, 55];
        const shuffledComps = this.shuffle(comps).slice(0, 2);
        const correct = `$${p}$`;
        const allOpts = this.shuffle([correct, `$${shuffledComps[0]}$`, `$${shuffledComps[1]}$`, `$1$`]);
        return {
          chapterId: 'N5',
          tier: 1,
          title: "Reconnaissance d'un nombre premier",
          statement: `Parmi les nombres suivants, lequel est un **nombre premier** ?`,
          type: 'mcq',
          options: allOpts,
          answer: correct,
          correctIndex: allOpts.indexOf(correct),
          hint1: "Un nombre premier n'a exactement que deux diviseurs distincts : 1 et lui-même (attention, 1 n'est pas premier).",
          solution: `Le nombre **$${p}$** n'admet que deux diviseurs (1 et lui-même), c'est un nombre premier.`
        };
      } else if (vtype === 'not_prime') {
        const comps = [
          { n: 27, div: "3 et 9" },
          { n: 33, div: "3 et 11" },
          { n: 35, div: "5 et 7" },
          { n: 39, div: "3 et 13" },
          { n: 49, div: "7" },
          { n: 51, div: "3 et 17" }
        ];
        const c = this.randChoice(comps);
        const primes = this.shuffle([11, 13, 17, 19, 23, 29, 31, 37, 41]).slice(0, 3);
        const correct = `$${c.n}$`;
        const allOpts = this.shuffle([correct, ...primes.map(p => `$${p}$`)]);
        return {
          chapterId: 'N5',
          tier: 1,
          title: "Reconnaissance d'un nombre composé",
          statement: `Parmi les nombres suivants, lequel **n'est pas** un nombre premier (nombre composé) ?`,
          type: 'mcq',
          options: allOpts,
          answer: correct,
          correctIndex: allOpts.indexOf(correct),
          hint1: "Cherche le nombre qui a d'autres diviseurs que 1 et lui-même.",
          solution: `Le nombre **$${c.n}$** n'est pas premier car il est divisible par ${c.div}.`
        };
      } else {
        const rules = [
          { n: 234, div: "9", why: "la somme de ses chiffres (2+3+4 = 9) est un multiple de 9" },
          { n: 315, div: "5", why: "son chiffre des unités est 5" },
          { n: 426, div: "3", why: "la somme de ses chiffres (4+2+6 = 12) est un multiple de 3" },
          { n: 520, div: "10", why: "son chiffre des unités est 0" }
        ];
        const r = this.randChoice(rules);
        const wrongDivs = ["7", "11", "13"].filter(d => d !== r.div);
        const opts = this.shuffle([r.div, ...wrongDivs]);
        return {
          chapterId: 'N5',
          tier: 1,
          title: "Critères de divisibilité",
          statement: `Par quel nombre parmi les suivants l'entier $${r.n}$ est-il divisible ?`,
          type: 'mcq',
          options: opts,
          answer: r.div,
          correctIndex: opts.indexOf(r.div),
          hint1: `Vérifie les critères usuels (chiffre des unités, somme des chiffres).`,
          solution: `$${r.n}$ est divisible par ${r.div} car ${r.why}.`
        };
      }
    } else if (t === 2) {
      const list = [
        { n: 24, decomp: "2^3 \\times 3", wrong: ["2^2 \\times 6", "2 \\times 12", "3 \\times 8"] },
        { n: 36, decomp: "2^2 \\times 3^2", wrong: ["4 \\times 9", "2^3 \\times 3", "6^2"] },
        { n: 40, decomp: "2^3 \\times 5", wrong: ["2^2 \\times 10", "4 \\times 10", "5 \\times 8"] },
        { n: 48, decomp: "2^4 \\times 3", wrong: ["2^3 \\times 6", "16 \\times 3", "2^2 \\times 12"] },
        { n: 56, decomp: "2^3 \\times 7", wrong: ["4 \\times 14", "2^2 \\times 14", "8 \\times 7"] },
        { n: 60, decomp: "2^2 \\times 3 \\times 5", wrong: ["4 \\times 15", "6 \\times 10", "2 \\times 30"] },
        { n: 72, decomp: "2^3 \\times 3^2", wrong: ["8 \\times 9", "2^4 \\times 3", "6 \\times 12"] },
        { n: 84, decomp: "2^2 \\times 3 \\times 7", wrong: ["4 \\times 21", "2 \\times 42", "6 \\times 14"] },
        { n: 90, decomp: "2 \\times 3^2 \\times 5", wrong: ["9 \\times 10", "2 \\times 45", "3 \\times 30"] },
        { n: 100, decomp: "2^2 \\times 5^2", wrong: ["4 \\times 25", "10^2", "2 \\times 50"] },
        { n: 120, decomp: "2^3 \\times 3 \\times 5", wrong: ["8 \\times 15", "4 \\times 30", "2^2 \\times 30"] }
      ];
      const item = this.randChoice(list);
      const correct = `$${item.decomp}$`;
      const opts = this.shuffle([correct, ...item.wrong.map(w => `$${w}$`)]);
      return {
        chapterId: 'N5',
        tier: 2,
        title: "Décomposition en facteurs premiers",
        statement: `Quelle est la décomposition en produit de facteurs premiers de $${item.n}$ ?`,
        type: 'mcq',
        options: opts,
        answer: correct,
        correctIndex: opts.indexOf(correct),
        hint1: "Divise successivement par 2, puis par 3, 5... Tous les facteurs doivent être des nombres premiers.",
        solution: `$$${item.n} = ${item.decomp}$$`
      };
    } else if (t === 3) {
      const pairs = [
        { n: 120, d: 180, sN: 2, sD: 3, pgcd: 60 },
        { n: 168, d: 252, sN: 2, sD: 3, pgcd: 84 },
        { n: 140, d: 210, sN: 2, sD: 3, pgcd: 70 },
        { n: 210, d: 315, sN: 2, sD: 3, pgcd: 105 },
        { n: 126, d: 210, sN: 3, sD: 5, pgcd: 42 },
        { n: 84, d: 126, sN: 2, sD: 3, pgcd: 42 },
        { n: 105, d: 135, sN: 7, sD: 9, pgcd: 15 },
        { n: 75, d: 120, sN: 5, sD: 8, pgcd: 15 },
        { n: 90, d: 126, sN: 5, sD: 7, pgcd: 18 },
        { n: 132, d: 165, sN: 4, sD: 5, pgcd: 33 }
      ];
      const item = this.randChoice(pairs);
      return {
        chapterId: 'N5',
        tier: 3,
        title: "Fraction irréductible via décomposition",
        statement: `Rendre irréductible la fraction suivante en décomposant en facteurs premiers :\n$$F = \\frac{${item.n}}{${item.d}}$$`,
        type: 'exact',
        answer: `${item.sN}/${item.sD}`,
        placeholder: "Ex: 2/3",
        hint1: `Décompose ${item.n} et ${item.d} en facteurs premiers puis simplifie les facteurs communs (ou divise par le PGCD = ${item.pgcd}).`,
        solution: `$$\\text{PGCD}(${item.n}, ${item.d}) = ${item.pgcd}$$\n$$F = \\frac{${item.n} \\div ${item.pgcd}}{${item.d} \\div ${item.pgcd}} = \\frac{${item.sN}}{${item.sD}}$$`
      };
    } else {
      const vtype = this.randChoice(['pavage', 'fleuriste']);
      if (vtype === 'pavage') {
        const mults = [12, 15, 18, 20, 24];
        const g = this.randChoice(mults);
        const a = this.randInt(3, 7);
        const b = this.randInt(4, 9, [a]);
        const L = a * g;
        const l = b * g;
        const tilesCount = a * b;

        return {
          chapterId: 'N5',
          tier: 4,
          title: "Défi Seconde : Pavage d'un rectangle par des dalles maximales",
          statement: `Une pièce rectangulaire de dimensions $L = ${Math.max(L, l)}\\text{ cm}$ et $l = ${Math.min(L, l)}\\text{ cm}$ doit être pavée entièrement avec des dalles carrées identiques les plus grandes possibles, sans découpe.\n1. Le côté maximal d'une dalle est $\\text{PGCD}(${L}, ${l}) = ${g}\\text{ cm}$.\n**Question : Combien de dalles faudra-t-il au total pour couvrir toute la pièce ?**`,
          type: 'exact',
          answer: String(tilesCount),
          placeholder: `Ex: ${tilesCount}`,
          hint1: `En longueur, on place $\\frac{${Math.max(L, l)}}{${g}} = ${Math.max(a, b)}$ dalles. En largeur, on place $\\frac{${Math.min(L, l)}}{${g}} = ${Math.min(a, b)}$ dalles. Multiplie les deux.`,
          solution: `1. Côté d'une dalle : $\\text{PGCD}(${L}, ${l}) = ${g}\\text{ cm}$.\n2. Nombre de dalles : $\\frac{${L}}{${g}} \\times \\frac{${l}}{${g}} = ${a} \\times ${b} = ${tilesCount}\\text{ dalles}$.`
        };
      } else {
        const g = this.randChoice([12, 14, 15, 18, 20]);
        const a = this.randInt(3, 6);
        const b = this.randInt(4, 7, [a]);
        const nRoses = a * g;
        const nTulipes = b * g;

        return {
          chapterId: 'N5',
          tier: 4,
          title: "Défi Brevet : Composition de bouquets identiques (PGCD)",
          statement: `Un fleuriste dispose de $${nRoses}$ roses et $${nTulipes}$ tulipes. Il souhaite composer le plus grand nombre possible de bouquets identiques en utilisant toutes les fleurs.\n**Quel est le nombre maximal de bouquets qu'il peut réaliser ?**`,
          type: 'exact',
          answer: String(g),
          placeholder: `Ex: ${g}`,
          hint1: `Le nombre de bouquets doit diviser à la fois $${nRoses}$ et $${nTulipes}$. C'est le plus grand diviseur commun (PGCD).`,
          solution: `Le nombre maximal de bouquets est le $\\text{PGCD}(${nRoses}, ${nTulipes}) = ${g}$.\nChaque bouquet contiendra alors $${a}$ roses et $${b}$ tulipes.`
        };
      }
    }
  },


  // =========================================================================
  // GÉOMÉTRIE 3ème (G0 À G7) - PALIERS 1 À 4
  // =========================================================================

  // --- G0 : Théorème de Pythagore ---
  generateG0(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Calcul direct de l'hypoténuse - triplets parfaits)
      const triplets = [[3, 4, 5], [6, 8, 10], [5, 12, 13]];
      const [a, b, c] = this.randChoice(triplets);
      return {
        chapterId: 'G0',
        tier: 1,
        title: "Calcul de l'hypoténuse (Pythagore direct)",
        statement: `Soit un triangle $ABC$ rectangle en $A$ tel que $AB = ${a}\\text{ cm}$ et $AC = ${b}\\text{ cm}$.\n**Calculer la longueur de l'hypoténuse $[BC]$.**`,
        type: 'exact',
        answer: String(c),
        placeholder: `Ex: ${c}`,
        hint1: `Dans le triangle $ABC$ rectangle en $A$, d'après le théorème de Pythagore : $BC^2 = AB^2 + AC^2$.`,
        solution: `Dans le triangle $ABC$ rectangle en $A$, d'après le théorème de Pythagore :\n$$BC^2 = AB^2 + AC^2$$\n$$BC^2 = ${a}^2 + ${b}^2 = ${a*a} + ${b*b} = ${c*c}$$\n$$BC = \\sqrt{${c*c}} = ${c}\\text{ cm}$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Calcul d'un côté de l'angle droit)
      const triplets = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]];
      const [a, b, c] = this.randChoice(triplets);
      return {
        chapterId: 'G0',
        tier: 2,
        title: "Calcul d'un côté de l'angle droit (Pythagore)",
        statement: `Soit un triangle $EFG$ rectangle en $E$ tel que l'hypoténuse $FG = ${c}\\text{ cm}$ et $EF = ${a}\\text{ cm}$.\n**Calculer la longueur du côté $[EG]$.**`,
        type: 'exact',
        answer: String(b),
        placeholder: `Ex: ${b}`,
        hint1: `Isoler $EG^2$ dans la formule de Pythagore : $EG^2 = FG^2 - EF^2$.`,
        solution: `Dans le triangle $EFG$ rectangle en $E$, d'après le théorème de Pythagore :\n$$FG^2 = EF^2 + EG^2 \\implies EG^2 = FG^2 - EF^2$$\n$$EG^2 = ${c}^2 - ${a}^2 = ${c*c} - ${a*a} = ${b*b}$$\n$$EG = \\sqrt{${b*b}} = ${b}\\text{ cm}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Réciproque de Pythagore ou problème contextualisé)
      const triplets = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [7, 24, 25], [8, 15, 17]];
      const isRect = Math.random() > 0.4;
      const [a, b, exactC] = this.randChoice(triplets);
      const c = isRect ? exactC : exactC + this.randChoice([-1, 1]);
      const actualIsRect = (a * a + b * b === c * c);

      return {
        chapterId: 'G0',
        tier: 3,
        title: "Réciproque du théorème de Pythagore (Test de perpendicularité)",
        statement: `Un menuisier monte une étagère triangulaire dont les côtés mesurent $AB = ${a}\\text{ cm}$, $AC = ${b}\\text{ cm}$ et $BC = ${c}\\text{ cm}$.\n**Le triangle $ABC$ est-il rectangle ?** (Répondre par 'oui' ou 'non')`,
        type: 'exact',
        answer: actualIsRect ? 'oui' : 'non',
        placeholder: "oui ou non",
        hint1: `Identifie le plus long côté ($BC = ${c}$). Compare $BC^2$ et $AB^2 + AC^2$.`,
        solution: `D'une part, le plus long côté est $[BC]$ :\n$$BC^2 = ${c}^2 = ${c*c}$$\nD'autre part :\n$$AB^2 + AC^2 = ${a}^2 + ${b}^2 = ${a*a} + ${b*b} = ${a*a + b*b}$$\n${actualIsRect ? `Comme $BC^2 = AB^2 + AC^2$, d'après la réciproque du théorème de Pythagore, le triangle **est rectangle** en $A$.` : `Comme $BC^2 \\neq AB^2 + AC^2$, le triangle **n'est pas rectangle**.`}`
      };
    } else {
      // Palier 4 : Défi Seconde (Diagonale d'un pavé droit dans l'espace en 2 étapes)
      // Combinaisons entières (L, l, h, D) où L^2 + l^2 + h^2 = D^2
      const boxes = [
        { L: 12, l: 4, h: 3, D: 13 },   // 144 + 16 + 9 = 169 = 13^2
        { L: 8, l: 4, h: 1, D: 9 },     // 64 + 16 + 1 = 81 = 9^2
        { L: 10, l: 10, h: 5, D: 15 },  // 100 + 100 + 25 = 225 = 15^2
        { L: 6, l: 6, h: 7, D: 11 },    // 36 + 36 + 49 = 121 = 11^2
        { L: 12, l: 16, h: 15, D: 25 }  // 144 + 256 + 225 = 625 = 25^2
      ];
      const box = this.randChoice(boxes);
      const dBaseSq = box.L * box.L + box.l * box.l;

      return {
        chapterId: 'G0',
        tier: 4,
        title: "Défi Seconde : Grande diagonale d'un pavé droit dans l'espace",
        statement: `Une boîte rectangulaire (pavé droit) $ABCDEFGH$ a pour dimensions :\n- Longueur $L = ${box.L}\\text{ cm}$\n- Largeur $l = ${box.l}\\text{ cm}$\n- Hauteur $h = ${box.h}\\text{ cm}$\n\n**Calculer la longueur exacte de la grande diagonale $[AG]$ qui traverse l'espace intérieur de la boîte.**`,
        type: 'exact',
        answer: String(box.D),
        placeholder: `Ex: ${box.D}`,
        hint1: `Étape 1 : Calcule la diagonale de la base $AC$ avec Pythagore dans le triangle $ABC$ : $AC^2 = L^2 + l^2$.\nÉtape 2 : Calcule $AG$ avec Pythagore dans le triangle rectangle $ACG$ : $AG^2 = AC^2 + CG^2$.`,
        solution: `1. Dans le triangle $ABC$ rectangle en $B$ (base) :\n$$AC^2 = AB^2 + BC^2 = ${box.L}^2 + ${box.l}^2 = ${box.L*box.L} + ${box.l*box.l} = ${dBaseSq}$$\n2. L'arête $[CG]$ est perpendiculaire à la base, donc le triangle $ACG$ est rectangle en $C$ :\n$$AG^2 = AC^2 + CG^2 = ${dBaseSq} + ${box.h}^2 = ${dBaseSq} + ${box.h*box.h} = ${box.D*box.D}$$\n$$AG = \\sqrt{${box.D*box.D}} = ${box.D}\\text{ cm}$$\n*(Formule directe de Seconde : $AG = \\sqrt{L^2 + l^2 + h^2} = \\sqrt{${box.D*box.D}} = ${box.D}\\text{ cm}$)*`
      };
    }
  },

  // --- G1 : Théorème de Thalès ---
  generateG1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      const vtype = this.randChoice(['find_ac', 'find_an', 'find_bc']);
      const k = this.randChoice([2, 3, 4]);
      const am = this.randInt(3, 6);
      const ab = am * k;
      const an = this.randInt(4, 7);
      const ac = an * k;
      const mn = this.randInt(3, 6);
      const bc = mn * k;

      if (vtype === 'find_ac') {
        return {
          chapterId: 'G1',
          tier: 1,
          title: "Thalès direct : calcul de AC (Configuration emboîtée)",
          statement: `Soit un triangle $ABC$ avec $M \\in [AB]$, $N \\in [AC]$ et $(MN) \\parallel (BC)$.\nOn donne $AM = ${am}\\text{ cm}$, $AB = ${ab}\\text{ cm}$ et $AN = ${an}\\text{ cm}$.\n**Calculer la longueur $AC$ en cm.**`,
          type: 'exact',
          answer: String(ac),
          placeholder: `Ex: ${ac}`,
          hint1: `D'après le théorème de Thalès : $\\frac{AM}{AB} = \\frac{AN}{AC}$. Utilise le produit en croix.`,
          solution: `Les points $A, M, B$ et $A, N, C$ sont alignés dans cet ordre, et $(MN) \\parallel (BC)$.\nD'après le théorème de Thalès :\n$$\\frac{AM}{AB} = \\frac{AN}{AC} \\implies \\frac{${am}}{${ab}} = \\frac{${an}}{AC}$$\n$$AC = \\frac{${ab} \\times ${an}}{${am}} = ${ac}\\text{ cm}$$`
        };
      } else if (vtype === 'find_an') {
        return {
          chapterId: 'G1',
          tier: 1,
          title: "Thalès direct : calcul de AN (Configuration emboîtée)",
          statement: `Dans un triangle $ABC$, $M \\in [AB]$, $N \\in [AC]$ et $(MN) \\parallel (BC)$.\nOn sait que $AM = ${am}\\text{ cm}$, $AB = ${ab}\\text{ cm}$ et $AC = ${ac}\\text{ cm}$.\n**Calculer la longueur $AN$ en cm.**`,
          type: 'exact',
          answer: String(an),
          placeholder: `Ex: ${an}`,
          hint1: `$\\frac{AM}{AB} = \\frac{AN}{AC} \\implies AN = \\frac{AM \\times AC}{AB}$.`,
          solution: `D'après le théorème de Thalès :\n$$\\frac{AN}{AC} = \\frac{AM}{AB} \\implies AN = \\frac{${am} \\times ${ac}}{${ab}} = ${an}\\text{ cm}$$`
        };
      } else {
        return {
          chapterId: 'G1',
          tier: 1,
          title: "Thalès direct : calcul de la base BC",
          statement: `Dans le triangle $ABC$, $M \\in [AB]$, $N \\in [AC]$ et $(MN) \\parallel (BC)$.\nOn donne $AM = ${am}\\text{ cm}$, $AB = ${ab}\\text{ cm}$ et $MN = ${mn}\\text{ cm}$.\n**Calculer la longueur $BC$ en cm.**`,
          type: 'exact',
          answer: String(bc),
          placeholder: `Ex: ${bc}`,
          hint1: `$\\frac{AM}{AB} = \\frac{MN}{BC} \\implies BC = \\frac{AB \\times MN}{AM}$.`,
          solution: `D'après le théorème de Thalès :\n$$\\frac{AM}{AB} = \\frac{MN}{BC} \\implies BC = \\frac{${ab} \\times ${mn}}{${am}} = ${bc}\\text{ cm}$$`
        };
      }
    } else if (t === 2) {
      const vtype = this.randChoice(['sum_segment', 'diff_segment']);
      const mult = this.randChoice([2, 3]);
      const trueAm = this.randInt(3, 7);
      const trueMb = trueAm * (mult - 1);
      const trueAb = trueAm * mult;
      const mn = this.randInt(3, 7);
      const trueBc = mn * mult;

      if (vtype === 'sum_segment') {
        return {
          chapterId: 'G1',
          tier: 2,
          title: "Thalès avec calcul de longueur totale",
          statement: `Dans le triangle $ABC$, $M \\in [AB]$, $N \\in [AC]$ et $(MN) \\parallel (BC)$.\nOn donne $AM = ${trueAm}\\text{ cm}$, $MB = ${trueMb}\\text{ cm}$ et $MN = ${mn}\\text{ cm}$.\n**Calculer la longueur de la base $BC$ en cm.**`,
          type: 'exact',
          answer: String(trueBc),
          placeholder: `Ex: ${trueBc}`,
          hint1: `Calcule d'abord la longueur totale $AB = AM + MB = ${trueAm} + ${trueMb} = ${trueAb}\\text{ cm}$. Puis applique Thalès.`,
          solution: `1. Calcul de $AB$ : $AB = AM + MB = ${trueAm} + ${trueMb} = ${trueAb}\\text{ cm}$.\n2. D'après le théorème de Thalès :\n$$\\frac{AM}{AB} = \\frac{MN}{BC} \\implies \\frac{${trueAm}}{${trueAb}} = \\frac{${mn}}{BC}$$\n$$BC = \\frac{${trueAb} \\times ${mn}}{${trueAm}} = ${trueBc}\\text{ cm}$$`
        };
      } else {
        return {
          chapterId: 'G1',
          tier: 2,
          title: "Thalès avec soustraction préalable",
          statement: `Dans le triangle $ABC$, $M \\in [AB]$, $N \\in [AC]$ et $(MN) \\parallel (BC)$.\nOn donne $AB = ${trueAb}\\text{ cm}$, $AM = ${trueAm}\\text{ cm}$ et $BC = ${trueBc}\\text{ cm}$.\n**Calculer la longueur $MN$ en cm.**`,
          type: 'exact',
          answer: String(mn),
          placeholder: `Ex: ${mn}`,
          hint1: `Applique Thalès : $\\frac{AM}{AB} = \\frac{MN}{BC}$.`,
          solution: `D'après le théorème de Thalès :\n$$\\frac{AM}{AB} = \\frac{MN}{BC} \\implies MN = \\frac{${trueAm} \\times ${trueBc}}{${trueAb}} = ${mn}\\text{ cm}$$`
        };
      }
    } else if (t === 3) {
      const k = this.randChoice([1.5, 2, 2.5, 3]);
      const oa = this.randInt(2, 6) * 2;
      const ob = oa * k;
      const om = this.randInt(2, 5) * 2;
      const on = om * k;

      return {
        chapterId: 'G1',
        tier: 3,
        title: "Thalès en configuration papillon (Droites sécantes)",
        statement: `Les droites $(AB)$ et $(CD)$ sont sécantes en $O$, et $(AC) \\parallel (BD)$.\nOn donne $OA = ${oa}\\text{ cm}$, $OB = ${ob}\\text{ cm}$ et $OC = ${om}\\text{ cm}$.\n**Calculer la longueur $OD$ en cm.**`,
        type: 'exact',
        answer: String(on),
        placeholder: `Ex: ${on}`,
        hint1: `Dans la configuration papillon de sommet $O$ : $\\frac{OA}{OB} = \\frac{OC}{OD}$.`,
        solution: `Les droites $(AB)$ et $(CD)$ sont sécantes en $O$, et $(AC) \\parallel (BD)$.\nD'après le théorème de Thalès :\n$$\\frac{OA}{OB} = \\frac{OC}{OD} \\implies \\frac{${oa}}{${ob}} = \\frac{${om}}{OD}$$\n$$OD = \\frac{${ob} \\times ${om}}{${oa}} = ${on}\\text{ cm}$$`
      };
    } else {
      const b = this.randChoice([2, 3, 4]);
      const k = this.randInt(2, 5);
      const c = b * k;
      const a = this.randInt(3, 6);
      const x = a * k;
      const abVal = x + c;
      const acVal = a + b;

      return {
        chapterId: 'G1',
        tier: 4,
        title: "Défi Seconde : Thalès algébrique avec inconnue $x$",
        statement: `Dans un triangle $ABC$, $M \\in [AB]$, $N \\in [AC]$ et $(MN) \\parallel (BC)$.\nOn note $AM = x$. On sait que $MB = ${c}\\text{ cm}$, $AN = ${a}\\text{ cm}$ et $NC = ${b}\\text{ cm}$.\n*(On a donc $AB = x + ${c}$ et $AC = ${a} + ${b} = ${acVal}$)*\n\n**Résoudre l'égalité de Thalès pour trouver la valeur exacte de $x$.**`,
        type: 'exact',
        answer: String(x),
        placeholder: `Ex: ${x}`,
        hint1: `Écris l'égalité de Thalès : $\\frac{AM}{AB} = \\frac{AN}{AC}$, c'est-à-dire $\\frac{x}{x + ${c}} = \\frac{${a}}{${acVal}}$. Fais le produit en croix pour former une équation en $x$.`,
        hint2: `Produit en croix : $${acVal} \\times x = ${a} \\times (x + ${c}) \\implies ${acVal}x = ${a}x + ${a*c}$. Soustrais $${a}x$.`,
        solution: `D'après le théorème de Thalès :\n$$\\frac{AM}{AB} = \\frac{AN}{AC} \\implies \\frac{x}{x + ${c}} = \\frac{${a}}{${acVal}}$$\nProduit en croix :\n$$${acVal} \\times x = ${a}(x + ${c})$$\n$$${acVal}x = ${a}x + ${a*c}$$\n$$${acVal}x - ${a}x = ${a*c}$$\n$$${b}x = ${a*c} \\implies x = \\frac{${a*c}}{${b}} = ${x}\\text{ cm}$$`
      };
    }
  },

  // --- G2 : Trigonométrie ---
  generateG2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      const items = [
        {
          fn: "cosinus",
          symb: "\\cos(\\alpha)",
          ans: "Côté adjacent / Hypoténuse",
          memo: "CAH : Cosinus = Adjacent / Hypoténuse",
          formula: "\\cos(\\alpha) = \\frac{\\text{côté adjacent}}{\\text{hypoténuse}}"
        },
        {
          fn: "sinus",
          symb: "\\sin(\\alpha)",
          ans: "Côté opposé / Hypoténuse",
          memo: "SOH : Sinus = Opposé / Hypoténuse",
          formula: "\\sin(\\alpha) = \\frac{\\text{côté opposé}}{\\text{hypoténuse}}"
        },
        {
          fn: "tangente",
          symb: "\\tan(\\alpha)",
          ans: "Côté opposé / Côté adjacent",
          memo: "TOA : Tangente = Opposé / Adjacent",
          formula: "\\tan(\\alpha) = \\frac{\\text{côté opposé}}{\\text{côté adjacent}}"
        }
      ];
      const it = this.randChoice(items);
      const allOpts = [
        "Côté adjacent / Hypoténuse",
        "Côté opposé / Hypoténuse",
        "Côté opposé / Côté adjacent",
        "Hypoténuse / Côté opposé"
      ];
      const opts = this.shuffle(allOpts);
      return {
        chapterId: 'G2',
        tier: 1,
        title: "Formules trigonométriques (SOH CAH TOA)",
        statement: `Dans un triangle rectangle, quelle est la formule correcte définissant le **${it.fn}** d'un angle aigu $\\alpha$ ?`,
        type: 'mcq',
        options: opts,
        answer: it.ans,
        correctIndex: opts.indexOf(it.ans),
        hint1: `Pense au mot mnémotechnique : ${it.memo}.`,
        solution: `Dans un triangle rectangle :\n$$${it.formula}$$`
      };
    } else if (t === 2) {
      const vtype = this.randChoice(['cos60', 'sin30', 'tan45', 'cos60_hyp']);
      if (vtype === 'cos60') {
        const hyp = this.randInt(4, 12) * 2;
        const adj = hyp / 2;
        return {
          chapterId: 'G2',
          tier: 2,
          title: "Calcul du côté adjacent avec le cosinus",
          statement: `Soit $ABC$ un triangle rectangle en $A$ tel que $\\widehat{B} = 60^\\circ$ et l'hypoténuse $BC = ${hyp}\\text{ cm}$.\n*(On rappelle que $\\cos(60^\\circ) = 0{,}5$)*\n\n**Calculer la longueur du côté adjacent $AB$ en cm.**`,
          type: 'exact',
          answer: String(adj),
          placeholder: `Ex: ${adj}`,
          hint1: `$\\cos(\\widehat{B}) = \\frac{AB}{BC} \\implies AB = BC \\times \\cos(60^\\circ)$.`,
          solution: `Dans le triangle $ABC$ rectangle en $A$ :\n$$\\cos(\\widehat{B}) = \\frac{AB}{BC} \\implies AB = BC \\times \\cos(60^\\circ) = ${hyp} \\times 0{,}5 = ${adj}\\text{ cm}$$`
        };
      } else if (vtype === 'sin30') {
        const hyp = this.randInt(4, 12) * 2;
        const opp = hyp / 2;
        return {
          chapterId: 'G2',
          tier: 2,
          title: "Calcul du côté opposé avec le sinus",
          statement: `Soit $ABC$ un triangle rectangle en $A$ tel que $\\widehat{B} = 30^\\circ$ et l'hypoténuse $BC = ${hyp}\\text{ cm}$.\n*(On rappelle que $\\sin(30^\\circ) = 0{,}5$)*\n\n**Calculer la longueur du côté opposé $AC$ en cm.**`,
          type: 'exact',
          answer: String(opp),
          placeholder: `Ex: ${opp}`,
          hint1: `$\\sin(\\widehat{B}) = \\frac{AC}{BC} \\implies AC = BC \\times \\sin(30^\\circ)$.`,
          solution: `Dans le triangle $ABC$ rectangle en $A$ :\n$$\\sin(\\widehat{B}) = \\frac{AC}{BC} \\implies AC = BC \\times \\sin(30^\\circ) = ${hyp} \\times 0{,}5 = ${opp}\\text{ cm}$$`
        };
      } else if (vtype === 'tan45') {
        const side = this.randInt(4, 15);
        return {
          chapterId: 'G2',
          tier: 2,
          title: "Calcul avec la tangente d'un angle de 45°",
          statement: `Dans un triangle $ABC$ rectangle en $A$, $\\widehat{B} = 45^\\circ$ et le côté adjacent $AB = ${side}\\text{ cm}$.\n*(On rappelle que $\\tan(45^\\circ) = 1$)*\n\n**Calculer la longueur du côté opposé $AC$ en cm.**`,
          type: 'exact',
          answer: String(side),
          placeholder: `Ex: ${side}`,
          hint1: `$\\tan(45^\\circ) = \\frac{AC}{AB} = 1 \\implies AC = AB$.`,
          solution: `$$\\tan(45^\\circ) = \\frac{AC}{AB} \\implies AC = AB \\times 1 = ${side}\\text{ cm}$$`
        };
      } else {
        const adj = this.randInt(3, 10);
        const hyp = adj * 2;
        return {
          chapterId: 'G2',
          tier: 2,
          title: "Calcul de l'hypoténuse avec le cosinus",
          statement: `Soit $ABC$ un triangle rectangle en $A$ tel que $\\widehat{B} = 60^\\circ$ et le côté adjacent $AB = ${adj}\\text{ cm}$.\n*(On rappelle que $\\cos(60^\\circ) = 0{,}5$)*\n\n**Calculer la longueur de l'hypoténuse $BC$ en cm.**`,
          type: 'exact',
          answer: String(hyp),
          placeholder: `Ex: ${hyp}`,
          hint1: `$\\cos(\\widehat{B}) = \\frac{AB}{BC} \\implies BC = \\frac{AB}{\\cos(60^\\circ)}$.`,
          solution: `$$BC = \\frac{AB}{\\cos(60^\\circ)} = \\frac{${adj}}{0{,}5} = ${hyp}\\text{ cm}$$`
        };
      }
    } else if (t === 3) {
      const triplets = [
        { a: 3, b: 4, c: 5, angle: 53 },
        { a: 4, b: 3, c: 5, angle: 37 },
        { a: 5, b: 12, c: 13, angle: 67 },
        { a: 12, b: 5, c: 13, angle: 23 },
        { a: 8, b: 15, c: 17, angle: 62 },
        { a: 15, b: 8, c: 17, angle: 28 }
      ];
      const trip = this.randChoice(triplets);

      return {
        chapterId: 'G2',
        tier: 3,
        title: "Calcul d'un angle au degré près (Brevet)",
        statement: `Dans un triangle $ABC$ rectangle en $A$, on donne $AB = ${trip.a}\\text{ cm}$ (côté adjacent) et $AC = ${trip.b}\\text{ cm}$ (côté opposé).\n**Calculer la mesure de l'angle $\\widehat{ABC}$ arrondie au degré près.**`,
        type: 'exact',
        answer: String(trip.angle),
        placeholder: `Ex: ${trip.angle}`,
        hint1: `Utilise la tangente : $\\tan(\\widehat{B}) = \\frac{AC}{AB} = \\frac{${trip.b}}{${trip.a}}$. Puis applique $\\arctan$.`,
        solution: `Dans le triangle $ABC$ rectangle en $A$ :\n$$\\tan(\\widehat{ABC}) = \\frac{\\text{opposé}}{\\text{adjacent}} = \\frac{AC}{AB} = \\frac{${trip.b}}{${trip.a}} \\approx ${(trip.b/trip.a).toFixed(3)}$$\n$$\\widehat{ABC} = \\arctan\\left(\\frac{${trip.b}}{${trip.a}}\\right) \\approx ${trip.angle}^\\circ$$`
      };
    } else {
      const pairs = [
        { numCos: 3, den: 5, numSin: 4 },
        { numCos: 5, den: 13, numSin: 12 },
        { numCos: 8, den: 17, numSin: 15 },
        { numCos: 7, den: 25, numSin: 24 },
        { numCos: 9, den: 41, numSin: 40 },
        { numCos: 12, den: 37, numSin: 35 }
      ];
      const p = this.randChoice(pairs);

      return {
        chapterId: 'G2',
        tier: 4,
        title: "Défi Seconde : Relation trigonométrique fondamentale $\\cos^2(x) + \\sin^2(x) = 1$",
        statement: `Soit $\\alpha$ la mesure d'un angle aigu tel que $\\cos(\\alpha) = \\frac{${p.numCos}}{${p.den}}$.\n\n**Calculer la valeur exacte de $\\sin(\\alpha)$ sous forme de fraction irréductible.**`,
        type: 'exact',
        answer: `${p.numSin}/${p.den}`,
        placeholder: "Ex: 4/5",
        hint1: `Pour tout angle aigu, $\\cos^2(\\alpha) + \\sin^2(\\alpha) = 1$. Donc $\\sin^2(\\alpha) = 1 - \\cos^2(\\alpha)$.`,
        hint2: `$\\sin^2(\\alpha) = 1 - \\left(\\frac{${p.numCos}}{${p.den}}\\right)^2 = 1 - \\frac{${p.numCos*p.numCos}}{${p.den*p.den}} = \\frac{${p.den*p.den - p.numCos*p.numCos}}{${p.den*p.den}}$.`,
        solution: `D'après la relation fondamentale de la trigonométrie :\n$$\\cos^2(\\alpha) + \\sin^2(\\alpha) = 1$$\n$$\\sin^2(\\alpha) = 1 - \\cos^2(\\alpha) = 1 - \\left(\\frac{${p.numCos}}{${p.den}}\\right)^2 = 1 - \\frac{${p.numCos*p.numCos}}{${p.den*p.den}} = \\frac{${p.numSin*p.numSin}}{${p.den*p.den}}$$\nComme $\\alpha$ est aigu, $\\sin(\\alpha) > 0$ :\n$$\\sin(\\alpha) = \\frac{${p.numSin}}{${p.den}}$$`
      };
    }
  },

  // --- G3 : Homothéties et Agrandissement / Réduction ---
  generateG3(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      const vtype = this.randChoice(['agrandissement', 'reduction']);
      if (vtype === 'agrandissement') {
        const k = this.randChoice([2, 3, 4, 5]);
        const l = this.randInt(4, 9);
        const lPrime = l * k;
        return {
          chapterId: 'G3',
          tier: 1,
          title: "Homothétie et agrandissement de longueur",
          statement: `Une homothétie de centre $O$ et de rapport $k = ${k}$ transforme un segment $[AB]$ de longueur $AB = ${l}\\text{ cm}$ en un segment $[A'B']$.\n**Quelle est la longueur du segment $[A'B']$ en cm ?**`,
          type: 'exact',
          answer: String(lPrime),
          placeholder: `Ex: ${lPrime}`,
          hint1: `Dans une homothétie de rapport $k$, toutes les longueurs sont multipliées par $|k| = ${k}$.`,
          solution: `$$A'B' = k \\times AB = ${k} \\times ${l} = ${lPrime}\\text{ cm}$$`
        };
      } else {
        const k = 0.5;
        const l = this.randInt(4, 12) * 2;
        const lPrime = l * k;
        return {
          chapterId: 'G3',
          tier: 1,
          title: "Homothétie et réduction de longueur",
          statement: `Une homothétie de centre $O$ et de rapport $k = 0{,}5$ transforme un segment $[AB]$ de longueur $AB = ${l}\\text{ cm}$ en un segment $[A'B']$.\n**Quelle est la longueur du segment $[A'B']$ en cm ?**`,
          type: 'exact',
          answer: String(lPrime),
          placeholder: `Ex: ${lPrime}`,
          hint1: `Comme $0 < k < 1$, il s'agit d'une réduction : multiplie la longueur par $0{,}5$ (divise par 2).`,
          solution: `$$A'B' = 0{,}5 \\times ${l} = ${lPrime}\\text{ cm}$$`
        };
      }
    } else if (t === 2) {
      const k = this.randChoice([-2, -3, -4]);
      const dist = this.randInt(3, 8);
      const imgDist = Math.abs(k) * dist;

      return {
        chapterId: 'G3',
        tier: 2,
        title: "Homothétie de rapport négatif",
        statement: `Soit une homothétie de centre $O$ et de rapport $k = ${k}$.\nUn point $M$ est situé à une distance $OM = ${dist}\\text{ cm}$ du centre.\n**À quelle distance du centre $O$ se trouve le point image $M'$ en cm ?**`,
        type: 'exact',
        answer: String(imgDist),
        placeholder: `Ex: ${imgDist}`,
        hint1: `Attention : une distance est toujours positive ! La distance est multipliée par $|k| = ${Math.abs(k)}$. (Le signe '-' indique seulement que $M'$ est situé de l'autre côté de $O$).`,
        solution: `Pour une homothétie de rapport $k = ${k}$ :\n$$OM' = |k| \\times OM = ${Math.abs(k)} \\times ${dist} = ${imgDist}\\text{ cm}$$`
      };
    } else if (t === 3) {
      const vtype = this.randChoice(['agrandissement_aire', 'reduction_aire']);
      if (vtype === 'agrandissement_aire') {
        const k = this.randChoice([2, 3, 4]);
        const aire = this.randInt(5, 15);
        const airePrime = aire * (k * k);
        return {
          chapterId: 'G3',
          tier: 3,
          title: "Effet d'un agrandissement sur les aires ($k^2$)",
          statement: `Une figure géométrique a une aire $\\mathcal{A} = ${aire}\\text{ cm}^2$.\nOn effectue un agrandissement de rapport $k = ${k}$.\n**Quelle est l'aire $\\mathcal{A}'$ de la figure agrandie en $\\text{cm}^2$ ?**`,
          type: 'exact',
          answer: String(airePrime),
          placeholder: `Ex: ${airePrime}`,
          hint1: `Règle fondamentale : si les longueurs sont multipliées par $k$, les aires sont multipliées par $k^2 = ${k}^2 = ${k*k}$.`,
          solution: `$$\\mathcal{A}' = k^2 \\times \\mathcal{A} = ${k}^2 \\times ${aire} = ${k*k} \\times ${aire} = ${airePrime}\\text{ cm}^2$$`
        };
      } else {
        const k = 2; // réduction de rapport 1/2 => aire divisée par 4
        const aireInitiale = this.randInt(5, 15) * 4;
        const aireReduite = aireInitiale / 4;
        return {
          chapterId: 'G3',
          tier: 3,
          title: "Effet d'une réduction sur les aires ($k^2$)",
          statement: `Une figure géométrique a une aire $\\mathcal{A} = ${aireInitiale}\\text{ cm}^2$. On lui applique une réduction de rapport $k = 0{,}5$.\n**Quelle est l'aire de la figure réduite en $\\text{cm}^2$ ?**`,
          type: 'exact',
          answer: String(aireReduite),
          placeholder: `Ex: ${aireReduite}`,
          hint1: `L'aire est multipliée par $k^2 = 0{,}5^2 = 0{,}25 = \\frac{1}{4}$.`,
          solution: `$$\\mathcal{A}' = 0{,}5^2 \\times ${aireInitiale} = 0{,}25 \\times ${aireInitiale} = ${aireReduite}\\text{ cm}^2$$`
        };
      }
    } else {
      const k = 2;
      const vInitial = this.randInt(12, 35);
      const vTotal = vInitial * 8;
      const vTronc = vTotal - vInitial;

      return {
        chapterId: 'G3',
        tier: 4,
        title: "Défi Seconde : Effet sur les volumes ($k^3$) et volume d'un tronc",
        statement: `Une petite pyramide de volume $\\mathcal{V}_1 = ${vInitial}\\text{ cm}^3$ est agrandie d'un rapport $k = ${k}$ pour former une grande pyramide de volume $\\mathcal{V}_2$.\nOn retire ensuite la petite pyramide du sommet pour ne conserver que le tronc de pyramide restant.\n\n**Calculer le volume $\\mathcal{V}_{\\text{tronc}}$ de ce tronc de pyramide en $\\text{cm}^3$.**`,
        type: 'exact',
        answer: String(vTronc),
        placeholder: `Ex: ${vTronc}`,
        hint1: `1. Les volumes sont multipliés par $k^3 = ${k}^3 = ${k*k*k}$. Calcule $\\mathcal{V}_2 = ${k*k*k} \\times ${vInitial}$.\n2. Le volume du tronc est la différence : $\\mathcal{V}_{\\text{tronc}} = \\mathcal{V}_2 - \\mathcal{V}_1$.`,
        solution: `1. Volume agrandi :\n$$\\mathcal{V}_2 = k^3 \\times \\mathcal{V}_1 = 2^3 \\times ${vInitial} = 8 \\times ${vInitial} = ${vTotal}\\text{ cm}^3$$\n2. Volume du tronc restant :\n$$\\mathcal{V}_{\\text{tronc}} = ${vTotal} - ${vInitial} = ${vTronc}\\text{ cm}^3$$`
      };
    }
  },

  // --- G4 : Géométrie dans l'espace, sphères et boules ---
  generateG4(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Aire d'une sphère A = 4 * pi * R²)
      const r = this.randChoice([2, 3, 5, 10]);
      const coeff = 4 * r * r;

      return {
        chapterId: 'G4',
        tier: 1,
        title: "Aire d'une sphère (Valeur exacte)",
        statement: `Soit une sphère de rayon $R = ${r}\\text{ cm}$.\n*(Formule de l'aire : $\\mathcal{A} = 4\\pi R^2$)*\n\n**Donner la valeur exacte de son aire sous la forme $n\\pi$ (saisir le nombre $n$).**`,
        type: 'exact',
        answer: String(coeff),
        placeholder: `Ex: ${coeff}`,
        hint1: `Calcule $4 \\times R^2 = 4 \\times ${r}^2 = 4 \\times ${r*r}$.`,
        solution: `$$\\mathcal{A} = 4 \\times \\pi \\times R^2 = 4 \\times \\pi \\times ${r}^2 = 4 \\times ${r*r} \\times \\pi = ${coeff}\\pi\\text{ cm}^2$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Volume d'une boule V = 4/3 * pi * R³)
      const r = this.randChoice([3, 6]); // R multiple de 3 pour simplification exacte avec 4/3
      const coeff = (4 * r * r * r) / 3;

      return {
        chapterId: 'G4',
        tier: 2,
        title: "Volume d'une boule (Valeur exacte)",
        statement: `Soit une boule de rayon $R = ${r}\\text{ cm}$.\n*(Formule du volume : $\\mathcal{V} = \\frac{4}{3}\\pi R^3$)*\n\n**Donner la valeur exacte du volume sous la forme $n\\pi$ (saisir le nombre $n$).**`,
        type: 'exact',
        answer: String(coeff),
        placeholder: `Ex: ${coeff}`,
        hint1: `Calcule $R^3 = ${r}^3 = ${r*r*r}$, puis multiplie par $4/3$.`,
        solution: `$$\\mathcal{V} = \\frac{4}{3} \\times \\pi \\times ${r}^3 = \\frac{4 \\times ${r*r*r}}{3} \\times \\pi = ${coeff}\\pi\\text{ cm}^3$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Section d'une sphère par un plan)
      const triplets = [[3, 4, 5], [6, 8, 10], [5, 12, 13]];
      const [d, rSection, rSphere] = this.randChoice(triplets);

      return {
        chapterId: 'G4',
        tier: 3,
        title: "Section d'une sphère par un plan (Pythagore)",
        statement: `Une sphère de centre $O$ et de rayon $R = ${rSphere}\\text{ cm}$ est coupée par un plan $\\mathcal{P}$ situé à une distance $OH = ${d}\\text{ cm}$ du centre.\nLa section obtenue est un cercle de centre $H$ et de rayon $r$.\n\n**Calculer le rayon $r$ de ce cercle de section.**`,
        type: 'exact',
        answer: String(rSection),
        placeholder: `Ex: ${rSection}`,
        hint1: `Le triangle $OHM$ formé par le centre de la sphère, le centre du cercle de section et un point du cercle est rectangle en $H$. D'après Pythagore : $R^2 = OH^2 + r^2$.`,
        solution: `Dans le triangle $OHM$ rectangle en $H$ :\n$$OM^2 = OH^2 + r^2 \\implies r^2 = OM^2 - OH^2$$\n$$r^2 = ${rSphere}^2 - ${d}^2 = ${rSphere*rSphere} - ${d*d} = ${rSection*rSection}$$\n$$r = \\sqrt{${rSection*rSection}} = ${rSection}\\text{ cm}$$`
      };
    } else {
      // Palier 4 : Défi Seconde (Solide composé : Cylindre + demi-sphère)
      // Cylindre de rayon R = 3, hauteur H, + demi-sphère de rayon R = 3
      // V_cyl = pi * R² * H = 9*H*pi. V_demi = (1/2)*(4/3)*pi*R³ = (2/3)*27*pi = 18*pi.
      const r = 3;
      const h = this.randInt(5, 12);
      const vCylCoeff = r * r * h; // 9 * h
      const vDemiCoeff = (2 * r * r * r) / 3; // 18
      const totalCoeff = vCylCoeff + vDemiCoeff;

      return {
        chapterId: 'G4',
        tier: 4,
        title: "Défi Seconde : Volume d'un solide composite (Cylindre + Demi-sphère)",
        statement: `Un réservoir métallique est composé d'un cylindre de hauteur $h = ${h}\\text{ cm}$ et de rayon $R = 3\\text{ cm}$, surmonté à l'une de ses bases d'une demi-sphère de même rayon $R = 3\\text{ cm}$.\n\n**Donner la valeur exacte du volume total du réservoir sous la forme $n\\pi\\text{ cm}^3$ (saisir le nombre $n$).**`,
        type: 'exact',
        answer: String(totalCoeff),
        placeholder: `Ex: ${totalCoeff}`,
        hint1: `1. Volume du cylindre : $\\mathcal{V}_1 = \\pi R^2 h = \\pi \\times 3^2 \\times ${h} = ${vCylCoeff}\\pi$.\n2. Volume de la demi-sphère : $\\mathcal{V}_2 = \\frac{1}{2} \\times \\left(\\frac{4}{3}\\pi R^3\\right) = \\frac{2}{3}\\pi \\times 27 = ${vDemiCoeff}\\pi$.\n3. Additionne les deux coefficients.`,
        solution: `1. Volume du cylindre :\n$$\\mathcal{V}_{\\text{cylindre}} = \\pi \\times R^2 \\times h = \\pi \\times 3^2 \\times ${h} = ${vCylCoeff}\\pi\\text{ cm}^3$$\n2. Volume de la demi-sphère :\n$$\\mathcal{V}_{\\text{demi-sphère}} = \\frac{1}{2} \\times \\left(\\frac{4}{3}\\pi R^3\\right) = \\frac{2}{3}\\pi \\times 27 = ${vDemiCoeff}\\pi\\text{ cm}^3$$\n3. Volume total :\n$$\\mathcal{V}_{\\text{total}} = ${vCylCoeff}\\pi + ${vDemiCoeff}\\pi = ${totalCoeff}\\pi\\text{ cm}^3$$`
      };
    }
  },

  // --- G5 : Angles inscrits et polygones réguliers ---
  generateG5(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Angle au centre et angle inscrit)
      const inscrit = this.randInt(25, 55);
      const centre = inscrit * 2;

      return {
        chapterId: 'G5',
        tier: 1,
        title: "Angle au centre et angle inscrit",
        statement: `Dans un cercle de centre $O$, l'angle inscrit $\\widehat{AMB}$ intercepte le même arc que l'angle au centre $\\widehat{AOB}$.\nOn sait que $\\widehat{AMB} = ${inscrit}^\\circ$.\n**Calculer la mesure de l'angle au centre $\\widehat{AOB}$.**`,
        type: 'exact',
        answer: String(centre),
        placeholder: `Ex: ${centre}`,
        hint1: `Dans un cercle, la mesure d'un angle au centre est le double de celle de l'angle inscrit qui intercepte le même arc.`,
        solution: `$$\\widehat{AOB} = 2 \\times \\widehat{AMB} = 2 \\times ${inscrit}^\\circ = ${centre}^\\circ$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Deux angles inscrits interceptant le même arc)
      const angle = this.randInt(30, 65);

      return {
        chapterId: 'G5',
        tier: 2,
        title: "Deux angles inscrits interceptant le même arc",
        statement: `Dans un cercle de centre $O$, les angles inscrits $\\widehat{AMB}$ et $\\widehat{ANB}$ interceptent tous les deux le même arc de cercle $\\overset{\\frown}{AB}$.\nOn donne $\\widehat{AMB} = ${angle}^\\circ$.\n**Quelle est la mesure de l'angle $\\widehat{ANB}$ ?**`,
        type: 'exact',
        answer: String(angle),
        placeholder: `Ex: ${angle}`,
        hint1: `Deux angles inscrits dans un même cercle qui interceptent le même arc ont la même mesure.`,
        solution: `Comme les angles $\\widehat{AMB}$ et $\\widehat{ANB}$ interceptent le même arc $\\overset{\\frown}{AB}$ :\n$$\\widehat{ANB} = \\widehat{AMB} = ${angle}^\\circ$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Angle au centre d'un polygone régulier)
      const sides = [
        { n: 5, name: "pentagone régulier", angle: 72 },
        { n: 6, name: "hexagone régulier", angle: 60 },
        { n: 8, name: "octogone régulier", angle: 45 },
        { n: 10, name: "décagone régulier", angle: 36 }
      ];
      const poly = this.randChoice(sides);

      return {
        chapterId: 'G5',
        tier: 3,
        title: `Angle au centre d'un polygone régulier (${poly.name})`,
        statement: `Soit un ${poly.name} inscrit dans un cercle de centre $O$.\n**Quelle est la mesure en degrés de l'angle au centre sous-tendu par chaque côté ?**`,
        type: 'exact',
        answer: String(poly.angle),
        placeholder: `Ex: ${poly.angle}`,
        hint1: `Le tour complet du cercle mesure $360^\\circ$. Un polygone à $n$ côtés égaux partage le cercle en $n$ angles au centre identiques : $\\frac{360^\\circ}{n}$.`,
        solution: `Pour un ${poly.name} ($n = ${poly.n}$ côtés) :\n$$\\text{Angle au centre} = \\frac{360^\\circ}{${poly.n}} = ${poly.angle}^\\circ$$`
      };
    } else {
      // Palier 4 : Défi Seconde (Angle intérieur d'un polygone régulier via triangle isocèle)
      const sides = [
        { n: 5, name: "pentagone régulier", centre: 72, interior: 108 },
        { n: 6, name: "hexagone régulier", centre: 60, interior: 120 },
        { n: 8, name: "octogone régulier", centre: 45, interior: 135 }
      ];
      const poly = this.randChoice(sides);

      return {
        chapterId: 'G5',
        tier: 4,
        title: `Défi Seconde : Angle intérieur d'un ${poly.name}`,
        statement: `Dans un ${poly.name} régulier de centre $O$, deux sommets consécutifs $A$ et $B$ et le sommet suivant $C$ forment un angle intérieur $\\widehat{ABC}$.\n\n**Calculer la mesure exacte de l'angle intérieur $\\widehat{ABC}$ en degrés.**`,
        type: 'exact',
        answer: String(poly.interior),
        placeholder: `Ex: ${poly.interior}`,
        hint1: `Méthode 1 : L'angle au centre vaut $\\frac{360^\\circ}{${poly.n}} = ${poly.centre}^\\circ$. Dans le triangle isocèle $OAB$, les angles à la base valent $\\frac{180^\\circ - ${poly.centre}^\\circ}{2}$. L'angle intérieur vaut le double de cet angle à la base.\nMéthode 2 : Formule générale $\\frac{(${poly.n} - 2) \\times 180^\\circ}{${poly.n}}$.`,
        solution: `Dans le triangle isocèle $OAB$ de sommet $O$ :\n- Angle au centre : $\\widehat{AOB} = \\frac{360^\\circ}{${poly.n}} = ${poly.centre}^\\circ$\n- Angles à la base : $\\widehat{OBA} = \\frac{180^\\circ - ${poly.centre}^\\circ}{2} = ${(180 - poly.centre)/2}^\\circ$\nPar symétrie, l'angle intérieur complet $\\widehat{ABC} = 2 \\times \\widehat{OBA}$ :\n$$\\widehat{ABC} = 2 \\times ${(180 - poly.centre)/2}^\\circ = ${poly.interior}^\\circ$$`
      };
    }
  },

  // --- G6 : Repérage dans le plan et dans l'espace ---
  generateG6(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Lecture coordonnées dans l'espace (x, y, z))
      const x = this.randInt(2, 6);
      const y = this.randInt(2, 6);
      const z = this.randInt(2, 6);

      return {
        chapterId: 'G6',
        tier: 1,
        title: "Coordonnées d'un point dans l'espace $(x, y, z)$",
        statement: `Dans un repère $(O; I, J, K)$ de l'espace, un point $M$ est obtenu en partant de l'origine $O$, en avançant de $x = ${x}$ unités sur l'axe $(OI)$, de $y = ${y}$ unités sur l'axe $(OJ)$, et en montant de $z = ${z}$ unités sur l'axe $(OK)$.\n\n**Quelles sont les coordonnées de $M$ ?** (Format: x;y;z)`,
        type: 'exact',
        answer: `${x};${y};${z}`,
        placeholder: `${x};${y};${z}`,
        hint1: `Dans l'espace, les coordonnées s'écrivent dans l'ordre $(x ; y ; z)$ : abscisse, ordonnée, altitude.`,
        solution: `Le point $M$ a pour coordonnées :\n$$M(${x} ; ${y} ; ${z})$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Milieu d'un segment dans l'espace)
      const xA = this.randInt(1, 4) * 2;
      const xB = this.randInt(1, 4) * 2;
      const yA = this.randInt(1, 4) * 2 + 1;
      const yB = this.randInt(1, 4) * 2 + 1;
      const zA = this.randInt(2, 6);
      const zB = zA + 2;

      const xM = (xA + xB) / 2;
      const yM = (yA + yB) / 2;
      const zM = (zA + zB) / 2;

      return {
        chapterId: 'G6',
        tier: 2,
        title: "Milieu d'un segment dans l'espace",
        statement: `Soient les points $A(${xA} ; ${yA} ; ${zA})$ et $B(${xB} ; ${yB} ; ${zB})$ dans l'espace.\n**Quelles sont les coordonnées du milieu $M$ du segment $[AB]$ ?** (Format: x;y;z)`,
        type: 'exact',
        answer: `${xM};${yM};${zM}`,
        placeholder: `${xM};${yM};${zM}`,
        hint1: `Formule du milieu : $x_M = \\frac{x_A + x_B}{2}$, $y_M = \\frac{y_A + y_B}{2}$, $z_M = \\frac{z_A + z_B}{2}$.`,
        solution: `$$x_M = \\frac{${xA} + ${xB}}{2} = ${xM},\\quad y_M = \\frac{${yA} + ${yB}}{2} = ${yM},\\quad z_M = \\frac{${zA} + ${zB}}{2} = ${zM}$$\n$$M(${xM} ; ${yM} ; ${zM})$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Latitude / Longitude sur le globe)
      const isOpposite = Math.random() > 0.4;
      const long = this.randInt(5, 80);
      let lat1, lat2, hem1, hem2, diff;
      if (isOpposite) {
        lat1 = this.randInt(20, 60);
        lat2 = this.randInt(15, 45);
        hem1 = 'N';
        hem2 = 'S';
        diff = lat1 + lat2;
      } else {
        lat1 = this.randInt(40, 70);
        lat2 = this.randInt(10, lat1 - 10);
        hem1 = 'N';
        hem2 = 'N';
        diff = lat1 - lat2;
      }

      return {
        chapterId: 'G6',
        tier: 3,
        title: "Repérage sur la Terre (Latitude et Longitude)",
        statement: `Sur le globe terrestre, la ville $A$ a pour coordonnées $(${lat1}^\\circ\\text{ ${hem1}} ; ${long}^\\circ\\text{ E})$ et la ville $B$ a pour coordonnées $(${lat2}^\\circ\\text{ ${hem2}} ; ${long}^\\circ\\text{ E})$.\n**Quelle est la différence angulaire en latitude entre ces deux villes le long de leur méridien commun (en degrés) ?**`,
        type: 'exact',
        answer: String(diff),
        placeholder: `Ex: ${diff}`,
        hint1: hem1 !== hem2
          ? `La ville $A$ est dans l'hémisphère Nord ($+${lat1}^\\circ$) et la ville $B$ dans l'hémisphère Sud ($-${lat2}^\\circ$). L'écart angulaire est $${lat1}^\\circ - (-${lat2}^\\circ) = ${lat1}^\\circ + ${lat2}^\\circ$.`
          : `Les deux villes sont dans le même hémisphère Nord. L'écart angulaire est simplement $${lat1}^\\circ - ${lat2}^\\circ$.`,
        solution: hem1 !== hem2
          ? `$$\\Delta \\theta = ${lat1}^\\circ - (-${lat2}^\\circ) = ${lat1}^\\circ + ${lat2}^\\circ = ${diff}^\\circ$$`
          : `$$\\Delta \\theta = ${lat1}^\\circ - ${lat2}^\\circ = ${diff}^\\circ$$`
      };
    } else {
      // Palier 4 : Défi Seconde (Distance réelle le long d'un méridien terrestre)
      // Circonférence Terre = 40 000 km => 1° de méridien = 40000 / 360 = 111.11 km
      // Choisissons un écart angulaire propre : 9° => (9/360)*40000 = 1000 km !
      // Ou 18° => 2000 km ! Ou 36° => 4000 km ! Ou 45° => 5000 km !
      const angles = [
        { deg: 9, dist: 1000 },
        { deg: 18, dist: 2000 },
        { deg: 36, dist: 4000 },
        { deg: 45, dist: 5000 }
      ];
      const a = this.randChoice(angles);

      return {
        chapterId: 'G6',
        tier: 4,
        title: "Défi Seconde : Distance le long d'un méridien terrestre",
        statement: `On modélise la Terre comme une sphère de circonférence équatoriale et méridienne égale à $C = 40\\,000\\text{ km}$.\nDeux villes $P$ et $Q$ sont situées sur le même méridien et présentent un écart de latitude de $\\Delta \\theta = ${a.deg}^\\circ$.\n\n**Calculer la distance réelle $d$ en kilomètres séparant ces deux villes à la surface de la Terre le long du méridien.**`,
        type: 'exact',
        answer: String(a.dist),
        placeholder: `Ex: ${a.dist}`,
        hint1: `La circonférence totale de $40\\,000\\text{ km}$ correspond à un angle de $360^\\circ$. Utilise la proportionnalité : $d = \\frac{\\Delta \\theta}{360} \\times 40\\,000$.`,
        solution: `La longueur d'un arc de cercle est proportionnelle à l'angle au centre :\n$$d = \\frac{\\Delta \\theta}{360^\\circ} \\times C = \\frac{${a.deg}}{360} \\times 40\\,000 = ${a.dist}\\text{ km}$$`
      };
    }
  },

  // --- G7 : Transformations et Triangles semblables ---
  generateG7(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      const vtype = this.randChoice(['length_conserv', 'angle_conserv', 'area_conserv']);
      if (vtype === 'length_conserv') {
        const l = this.randInt(5, 20);
        return {
          chapterId: 'G7',
          tier: 1,
          title: "Conservation des longueurs par translation",
          statement: `Un segment $[AB]$ mesure $AB = ${l}\\text{ cm}$. On applique une translation qui transforme $A$ en $A'$ et $B$ en $B'$.\n**Quelle est la longueur du segment $[A'B']$ en cm ?**`,
          type: 'exact',
          answer: String(l),
          placeholder: `Ex: ${l}`,
          hint1: `Une translation conserve les longueurs (c'est une isométrie). Le segment transformé a donc exactement la même longueur.`,
          solution: `Une translation est un déplacement sans déformation qui conserve les longueurs :\n$$A'B' = AB = ${l}\\text{ cm}$$`
        };
      } else if (vtype === 'angle_conserv') {
        const ang = this.randInt(25, 115);
        return {
          chapterId: 'G7',
          tier: 1,
          title: "Conservation des angles par rotation",
          statement: `Un angle $\\widehat{ABC}$ mesure $${ang}^\\circ$. On lui fait subir une rotation de centre $O$ et d'angle $70^\\circ$.\n**Quelle est la mesure de son angle image en degrés ?**`,
          type: 'exact',
          answer: String(ang),
          placeholder: `Ex: ${ang}`,
          hint1: "La rotation est une isométrie qui conserve les mesures des angles.",
          solution: `La rotation conserve les angles, l'angle transformé mesure donc toujours $${ang}^\\circ$.`
        };
      } else {
        const aire = this.randInt(12, 48);
        return {
          chapterId: 'G7',
          tier: 1,
          title: "Conservation de l'aire par symétrie axiale",
          statement: `Une figure $F$ a une aire de $${aire}\\text{ cm}^2$. Quelle est l'aire de sa figure symétrique par rapport à une droite en $\\text{cm}^2$ ?`,
          type: 'exact',
          answer: String(aire),
          placeholder: `Ex: ${aire}`,
          hint1: "La symétrie axiale conserve les aires.",
          solution: `La symétrie axiale conserve les aires, l'aire reste donc égale à $${aire}\\text{ cm}^2$.`
        };
      }
    } else if (t === 2) {
      const vtype = this.randChoice(['reverse_rotation', 'similar_angles']);
      if (vtype === 'reverse_rotation') {
        const ang = this.randChoice([30, 45, 60, 75, 90, 120, 135, 150]);
        return {
          chapterId: 'G7',
          tier: 2,
          title: "Angle et sens d'une rotation",
          statement: `Une rotation de centre $O$ et d'angle $${ang}^\\circ$ dans le sens horaire transforme une figure $F_1$ en $F_2$.\nQuelle doit être la valeur de l'angle (en degrés) d'une rotation de centre $O$ effectuant la transformation inverse (ramenant $F_2$ sur $F_1$) dans le sens antihoraire ?`,
          type: 'exact',
          answer: String(ang),
          placeholder: `Ex: ${ang}`,
          hint1: `La rotation inverse s'effectue dans le sens opposé avec exactement la même mesure d'angle de $${ang}^\\circ$.`,
          solution: `Pour inverser une rotation d'angle $${ang}^\\circ$ dans le sens horaire, il suffit d'appliquer une rotation de même angle $${ang}^\\circ$ en sens inverse (antihoraire).`
        };
      } else {
        const a1 = this.randInt(35, 65);
        const a2 = this.randInt(40, 75);
        const a3 = 180 - (a1 + a2);
        return {
          chapterId: 'G7',
          tier: 2,
          title: "Angles de triangles semblables",
          statement: `Deux triangles $ABC$ et $DEF$ sont semblables. Dans le triangle $ABC$, deux angles mesurent $${a1}^\\circ$ et $${a2}^\\circ$.\n**Quelle est la mesure du troisième angle dans le triangle $DEF$ en degrés ?**`,
          type: 'exact',
          answer: String(a3),
          placeholder: `Ex: ${a3}`,
          hint1: "Deux triangles semblables ont leurs angles deux à deux de même mesure. La somme des angles d'un triangle vaut 180°.",
          solution: `La somme des angles vaut $180^\\circ$ :\n$$\\text{Angle} = 180^\\circ - (${a1}^\\circ + ${a2}^\\circ) = 180^\\circ - ${a1 + a2}^\\circ = ${a3}^\\circ$$\nLes triangles étant semblables, le triangle $DEF$ possède les mêmes angles.`
        };
      }
    } else if (t === 3) {
      const vtype = this.randChoice(['find_big', 'find_small']);
      const k = this.randChoice([1.5, 2, 2.5, 3]);
      const a = this.randInt(3, 7);
      const aPrime = a * k;
      const b = this.randInt(4, 8);
      const bPrime = b * k;

      if (vtype === 'find_big') {
        return {
          chapterId: 'G7',
          tier: 3,
          title: "Triangles semblables : calcul du côté agrandi",
          statement: `Deux triangles $ABC$ et $DEF$ sont semblables. Le côté $[AB] = ${a}\\text{ cm}$ correspond au côté $[DE] = ${aPrime}\\text{ cm}$.\nSachant que le côté $[BC] = ${b}\\text{ cm}$, **calculer la longueur de son côté homologue $[EF]$ en cm.**`,
          type: 'exact',
          answer: String(bPrime),
          placeholder: `Ex: ${bPrime}`,
          hint1: `Dans deux triangles semblables, les longueurs des côtés homologues sont proportionnelles : $k = \\frac{DE}{AB} = \\frac{${aPrime}}{${a}} = ${k}$.`,
          solution: `Le coefficient de proportionnalité est :\n$$k = \\frac{DE}{AB} = \\frac{${aPrime}}{${a}} = ${k}$$\n$$EF = k \\times BC = ${k} \\times ${b} = ${bPrime}\\text{ cm}$$`
        };
      } else {
        return {
          chapterId: 'G7',
          tier: 3,
          title: "Triangles semblables : calcul du côté d'origine",
          statement: `Deux triangles $ABC$ et $DEF$ sont semblables. Le côté $[DE] = ${aPrime}\\text{ cm}$ correspond à $[AB] = ${a}\\text{ cm}$.\nSachant que $[EF] = ${bPrime}\\text{ cm}$, **calculer la longueur du côté correspondant $[BC]$ en cm.**`,
          type: 'exact',
          answer: String(b),
          placeholder: `Ex: ${b}`,
          hint1: `Le rapport de réduction est $\\frac{${a}}{${aPrime}} = \\frac{1}{${k}}$. Calcule $\\frac{${bPrime}}{${k}}$.`,
          solution: `$$BC = \\frac{EF}{k} = \\frac{${bPrime}}{${k}} = ${b}\\text{ cm}$$`
        };
      }
    } else {
      const vtype = this.randChoice(['area_ratio', 'volume_ratio']);
      if (vtype === 'area_ratio') {
        const k = this.randChoice([2, 3, 4]);
        const aire1 = this.randInt(6, 18);
        const aire2 = aire1 * k * k;

        return {
          chapterId: 'G7',
          tier: 4,
          title: "Défi Seconde : Rapport des aires de triangles semblables",
          statement: `Deux triangles semblables $T_1$ et $T_2$ ont pour rapport d'agrandissement $k = ${k}$ (les longueurs de $T_2$ sont ${k} fois plus grandes que celles de $T_1$).\nL'aire du petit triangle $T_1$ est $\\mathcal{A}_1 = ${aire1}\\text{ cm}^2$.\n\n**Calculer l'aire $\\mathcal{A}_2$ du triangle $T_2$ en $\\text{cm}^2$.**`,
          type: 'exact',
          answer: String(aire2),
          placeholder: `Ex: ${aire2}`,
          hint1: `Règle fondamentale : si les longueurs d'une figure sont multipliées par $k$, l'aire est multipliée par $k^2 = ${k}^2 = ${k*k}$.`,
          solution: `Les triangles étant semblables de rapport $k = ${k}$ :\n$$\\mathcal{A}_2 = k^2 \\times \\mathcal{A}_1 = ${k}^2 \\times ${aire1} = ${k*k} \\times ${aire1} = ${aire2}\\text{ cm}^2$$`
        };
      } else {
        const k = this.randChoice([2, 3]);
        const v1 = this.randInt(5, 15);
        const v2 = v1 * k * k * k;
        return {
          chapterId: 'G7',
          tier: 4,
          title: "Défi Seconde : Rapport des volumes de solides semblables",
          statement: `Deux solides semblables ont un rapport d'agrandissement de leurs dimensions égal à $k = ${k}$.\nLe volume du petit solide est $\\mathcal{V}_1 = ${v1}\\text{ cm}^3$.\n\n**Quel est le volume $\\mathcal{V}_2$ du grand solide en $\\text{cm}^3$ ?**`,
          type: 'exact',
          answer: String(v2),
          placeholder: `Ex: ${v2}`,
          hint1: `Si les longueurs sont multipliées par $k$, le volume est multiplié par $k^3 = ${k}^3 = ${k*k*k}$.`,
          solution: `$$\\mathcal{V}_2 = k^3 \\times \\mathcal{V}_1 = ${k}^3 \\times ${v1} = ${k*k*k} \\times ${v1} = ${v2}\\text{ cm}^3$$`
        };
      }
    }
  },


  // =========================================================================
  // ORGANISATION DE DONNÉES & ALGORITHMIQUE 3ème - PALIERS 1 À 4
  // =========================================================================

  // --- Org1 : Notion de fonctions et fonctions affines ---
  generateOrg1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      const vtype = this.randChoice(['affine_pos', 'linear_pos', 'affine_neg']);
      if (vtype === 'affine_pos') {
        const a = this.randInt(2, 6);
        const b = this.randInt(1, 9);
        const sign = this.randChoice(['+', '-']);
        const bVal = sign === '+' ? b : -b;
        const x = this.randInt(1, 6);
        const img = a * x + bVal;

        return {
          chapterId: 'Org1',
          tier: 1,
          title: "Calcul d'image par une fonction affine",
          statement: `Soit la fonction affine $f$ définie par $f(x) = ${a}x ${sign} ${b}$.\n**Calculer l'image de $${x}$ par la fonction $f$ (c'est-à-dire $f(${x})$).**`,
          type: 'exact',
          answer: String(img),
          placeholder: `Ex: ${img}`,
          hint1: `Remplace $x$ par $${x}$ dans la formule : $f(${x}) = ${a} \\times ${x} ${sign} ${b}$.`,
          solution: `$$f(${x}) = ${a} \\times ${x} ${sign} ${b} = ${a*x} ${sign} ${b} = ${img}$$`
        };
      } else if (vtype === 'linear_pos') {
        const a = this.randInt(3, 8);
        const x = this.randInt(2, 7);
        const img = a * x;
        return {
          chapterId: 'Org1',
          tier: 1,
          title: "Image par une fonction linéaire",
          statement: `Soit la fonction linéaire $g$ définie par $g(x) = ${a}x$.\n**Calculer l'image de $${x}$ par la fonction $g$.**`,
          type: 'exact',
          answer: String(img),
          placeholder: `Ex: ${img}`,
          hint1: `Une fonction linéaire modélise la proportionnalité : $g(${x}) = ${a} \\times ${x}$.`,
          solution: `$$g(${x}) = ${a} \\times ${x} = ${img}$$`
        };
      } else {
        const a = this.randInt(2, 5);
        const b = this.randInt(3, 9);
        const x = -this.randInt(1, 4);
        const img = a * x + b;
        return {
          chapterId: 'Org1',
          tier: 1,
          title: "Image d'un nombre négatif",
          statement: `Soit la fonction affine $h(x) = ${a}x + ${b}$.\n**Calculer la valeur de $h(${x})$ :**`,
          type: 'exact',
          answer: String(img),
          placeholder: `Ex: ${img}`,
          hint1: `Attention au produit : $${a} \\times (${x}) = ${a * x}$, puis ajoute $${b}$.`,
          solution: `$$h(${x}) = ${a} \\times (${x}) + ${b} = ${a * x} + ${b} = ${img}$$`
        };
      }
    } else if (t === 2) {
      const vtype = this.randChoice(['antecedent_std', 'antecedent_zero']);
      if (vtype === 'antecedent_std') {
        const a = this.randInt(2, 6);
        const b = this.randInt(1, 9);
        const sign = this.randChoice(['+', '-']);
        const bVal = sign === '+' ? b : -b;
        const x = this.randInt(-4, 5);
        const y = a * x + bVal;

        return {
          chapterId: 'Org1',
          tier: 2,
          title: "Calcul d'antécédent par une fonction affine",
          statement: `Soit la fonction $g(x) = ${a}x ${sign} ${b}$.\n**Déterminer l'antécédent de $${y}$ par la fonction $g$.**`,
          type: 'exact',
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Chercher l'antécédent de $${y}$, c'est résoudre l'équation $g(x) = ${y}$, soit $${a}x ${sign} ${b} = ${y}$.`,
          solution: `Pour trouver l'antécédent de $${y}$, on résout l'équation :\n$$${a}x ${sign} ${b} = ${y}$$\n$$${a}x = ${y} ${sign === '+' ? '-' : '+'} ${b} = ${y - bVal}$$\n$$x = \\frac{${y - bVal}}{${a}} = ${x}$$`
        };
      } else {
        const a = this.randChoice([2, 3, 4, 5]);
        const x = this.randInt(2, 8);
        const b = a * x;
        return {
          chapterId: 'Org1',
          tier: 2,
          title: "Antécédent de 0 (Racine)",
          statement: `Soit la fonction $f(x) = ${a}x - ${b}$.\n**Quel est l'antécédent de $0$ par la fonction $f$ ?**`,
          type: 'exact',
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Résous l'équation $f(x) = 0 \\iff ${a}x - ${b} = 0$.`,
          solution: `$$${a}x - ${b} = 0 \\iff ${a}x = ${b} \\iff x = \\frac{${b}}{${a}} = ${x}$$`
        };
      }
    } else if (t === 3) {
      const vtype = this.randChoice(['slope_calc', 'y_intercept']);
      if (vtype === 'slope_calc') {
        const a = this.randInt(-5, 5, [0]);
        const b = this.randInt(-6, 6);
        const x1 = this.randInt(1, 3);
        const x2 = x1 + this.randInt(2, 4);
        const y1 = a * x1 + b;
        const y2 = a * x2 + b;

        return {
          chapterId: 'Org1',
          tier: 3,
          title: "Coefficient directeur d'une droite / fonction affine",
          statement: `La représentation graphique d'une fonction affine $f(x) = ax + b$ passe par les points $A(${x1} ; ${y1})$ et $B(${x2} ; ${y2})$.\n\n**Calculer la valeur exacte du coefficient directeur $a$.**`,
          type: 'exact',
          answer: String(a),
          placeholder: `Ex: ${a}`,
          hint1: `Formule du coefficient directeur : $a = \\frac{y_B - y_A}{x_B - x_A} = \\frac{${y2} - (${y1})}{${x2} - ${x1}}$.`,
          solution: `Le coefficient directeur $a$ (ou pente) se calcule par le taux d'accroissement :\n$$a = \\frac{y_B - y_A}{x_B - x_A} = \\frac{${y2} - (${y1})}{${x2} - ${x1}} = \\frac{${y2 - y1}}{${x2 - x1}} = ${a}$$`
        };
      } else {
        const a = this.randInt(2, 5);
        const b = this.randInt(-8, 8, [0]);
        const x1 = 2;
        const y1 = a * x1 + b;
        return {
          chapterId: 'Org1',
          tier: 3,
          title: "Ordonnée à l'origine",
          statement: `Une droite représentant une fonction affine $f(x) = ax + b$ a pour coefficient directeur $a = ${a}$ et passe par le point $A(${x1} ; ${y1})$.\n**Quelle est l'ordonnée à l'origine $b$ de cette droite ?**`,
          type: 'exact',
          answer: String(b),
          placeholder: `Ex: ${b}`,
          hint1: `Comme $f(${x1}) = ${y1}$, on a : $${a} \\times ${x1} + b = ${y1} \\implies b = ${y1} - ${a * x1}$.`,
          solution: `$$f(${x1}) = ${y1} \\implies ${a} \\times ${x1} + b = ${y1} \\implies ${a * x1} + b = ${y1} \\implies b = ${y1} - ${a * x1} = ${b}$$`
        };
      }
    } else {
      const xInt = this.randInt(-4, 5, [0]);
      const a1 = this.randInt(2, 5);
      const a2 = this.randInt(-4, -1);
      const b1 = this.randInt(-5, 5);
      const yInt = a1 * xInt + b1;
      const b2 = yInt - a2 * xInt;

      return {
        chapterId: 'Org1',
        tier: 4,
        title: "Défi Seconde : Point d'intersection de deux représentations graphiques",
        statement: `On considère deux fonctions affines :\n- $f(x) = ${this.formatPoly([a1, b1])}$\n- $g(x) = ${this.formatPoly([a2, b2])}$\n\nLeurs droites représentatives $d_f$ et $d_g$ se coupent en un point $K(x ; y)$.\n**Quelle est l'abscisse $x$ de ce point d'intersection ?**`,
        type: 'exact',
        answer: String(xInt),
        placeholder: `Ex: ${xInt}`,
        hint1: `Au point d'intersection, les deux fonctions ont la même valeur : $f(x) = g(x)$.\nRésous l'équation : $${this.formatPoly([a1, b1])} = ${this.formatPoly([a2, b2])}$.`,
        solution: `Au point d'intersection $K$, $f(x) = g(x)$ :\n$$${this.formatPoly([a1, b1])} = ${this.formatPoly([a2, b2])}$$\n$$${a1}x - (${a2}x) = ${b2} - (${b1})$$\n$$${a1 - a2}x = ${b2 - b1}$$\n$$x = \\frac{${b2 - b1}}{${a1 - a2}} = ${xInt}$$\n*(L'ordonnée vaut alors $y = f(${xInt}) = ${yInt}$, donc $K(${xInt} ; ${yInt})$)*`
      };
    }
  },

  // --- Org2 : Statistiques ---
  generateOrg2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      const vtype = this.randChoice(['moyenne', 'etendue']);
      if (vtype === 'moyenne') {
        const target = this.randInt(11, 16);
        const d1 = this.randInt(-3, 3);
        const d2 = this.randInt(-3, 3);
        const d3 = this.randInt(-3, 3);
        const d4 = -(d1 + d2 + d3);
        const v1 = target + d1;
        const v2 = target + d2;
        const v3 = target + d3;
        const v4 = target + d4;
        const vals = [v1, v2, v3, v4];

        return {
          chapterId: 'Org2',
          tier: 1,
          title: "Calcul de la moyenne simple",
          statement: `Voici la liste des notes obtenues par un élève : $${vals.join('~;~')}$.\n**Calculer la note moyenne de cet élève.**`,
          type: 'exact',
          answer: String(target),
          placeholder: `Ex: ${target}`,
          hint1: `Calcule la somme des 4 notes ($${vals.join(' + ')}$) puis divise par le nombre total de notes ($4$).`,
          solution: `$$\\bar{x} = \\frac{${vals.join(' + ')}}{4} = \\frac{${vals.reduce((a, b) => a + b, 0)}}{4} = ${target}$$`
        };
      } else {
        const minVal = this.randInt(4, 9);
        const maxVal = minVal + this.randInt(8, 14);
        const mid1 = this.randInt(minVal + 1, maxVal - 1);
        const mid2 = this.randInt(minVal + 1, maxVal - 1);
        const mid3 = this.randInt(minVal + 1, maxVal - 1);
        const vals = this.shuffle([minVal, mid1, mid2, mid3, maxVal]);
        const etendue = maxVal - minVal;
        return {
          chapterId: 'Org2',
          tier: 1,
          title: "Étendue d'une série statistique",
          statement: `Voici les températures relevées au cours d'une semaine : $${vals.join('^\\circ\\text{C}~;~')}^\\circ\\text{C}$.\n**Quelle est l'étendue de cette série statistique ?**`,
          type: 'exact',
          answer: String(etendue),
          placeholder: `Ex: ${etendue}`,
          hint1: "L'étendue est la différence entre la plus grande valeur et la plus petite valeur de la série.",
          solution: `$$\\text{Étendue} = \\text{Valeur maximale} - \\text{Valeur minimale} = ${maxVal} - ${minVal} = ${etendue}$$`
        };
      }
    } else if (t === 2) {
      const vtype = this.randChoice(['mediane_odd', 'mediane_even']);
      if (vtype === 'mediane_odd') {
        const base = this.randInt(8, 14);
        const vals = [base - 4, base - 2, base, base + 3, base + 5];

        return {
          chapterId: 'Org2',
          tier: 2,
          title: "Détermination de la médiane (effectif impair)",
          statement: `On a ordonné une série de 5 valeurs dans l'ordre croissant :\n$$${vals.join(' \\le ')}$$\n**Quelle est la valeur médiane de cette série statistique ?**`,
          type: 'exact',
          answer: String(base),
          placeholder: `Ex: ${base}`,
          hint1: `L'effectif total est impair ($N = 5$). La médiane est la 3ème valeur : $\\frac{5 + 1}{2} = 3$.`,
          solution: `L'effectif total est $N = 5$.\nLa médiane est la 3ème valeur :\n$$\\text{Médiane} = ${base}$$`
        };
      } else {
        const m1 = this.randInt(10, 14);
        const m2 = m1 + 2; // pour que la demi-somme soit un entier m1 + 1
        const med = (m1 + m2) / 2;
        const vals = [m1 - 5, m1 - 2, m1, m2, m2 + 3, m2 + 6];
        return {
          chapterId: 'Org2',
          tier: 2,
          title: "Détermination de la médiane (effectif pair)",
          statement: `Voici une série ordonnée de 6 valeurs :\n$$${vals.join(' \\le ')}$$\n**Quelle est la médiane de cette série ?**`,
          type: 'exact',
          answer: String(med),
          placeholder: `Ex: ${med}`,
          hint1: `L'effectif total est pair ($N = 6$). La médiane est la moyenne de la 3ème ($${m1}$) et de la 4ème ($${m2}$) valeur.`,
          solution: `L'effectif est $N = 6$ (pair). La médiane est la moyenne des 3e et 4e valeurs :\n$$\\text{Médiane} = \\frac{${m1} + ${m2}}{2} = \\frac{${m1 + m2}}{2} = ${med}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (Moyenne pondérée avec coefficients)
      const c1 = 1, c2 = 2, c3 = 3;
      const totalCoeff = c1 + c2 + c3; // 6
      const n1 = this.randInt(8, 16);
      const n2 = this.randInt(8, 16);
      // Choisir n3 pour que le total soit divisible par 6
      const targetMoy = this.randInt(10, 15);
      const targetSum = targetMoy * totalCoeff;
      const n3 = Math.round((targetSum - n1 * c1 - n2 * c2) / c3);
      const actualSum = n1 * c1 + n2 * c2 + n3 * c3;
      const actualMoy = (actualSum / totalCoeff).toFixed(1).replace('.0', '');

      return {
        chapterId: 'Org2',
        tier: 3,
        title: "Moyenne pondérée avec coefficients",
        statement: `Un élève a obtenu :\n- Note $${n1}/20$ (coefficient $${c1}$)\n- Note $${n2}/20$ (coefficient $${c2}$)\n- Note $${n3}/20$ (coefficient $${c3}$)\n\n**Calculer sa moyenne générale pondérée.**`,
        type: 'exact',
        answer: String(actualMoy),
        placeholder: `Ex: ${actualMoy}`,
        hint1: `Multiplie chaque note par son coefficient, fais la somme, puis divise par la somme des coefficients ($${c1} + ${c2} + ${c3} = ${totalCoeff}$).`,
        solution: `$$\\bar{x} = \\frac{${n1} \\times ${c1} + ${n2} \\times ${c2} + ${n3} \\times ${c3}}{${c1} + ${c2} + ${c3}} = \\frac{${actualSum}}{${totalCoeff}} = ${actualMoy}$$`
      };
    } else {
      // Palier 4 : Défi Seconde (Rétro-calcul de note pour atteindre une moyenne cible)
      // Notes déjà obtenues : n1 (coeff c1), n2 (coeff c2), n3 (coeff c3). Note x inconnue (coeff cx).
      const c1 = 2, c2 = 1, c3 = 3, cx = 4;
      const totalCoeff = c1 + c2 + c3 + cx; // 10
      const targetMoy = this.randInt(12, 15); // ex 14 => total points = 140
      const n1 = this.randInt(10, 15);
      const n2 = this.randInt(9, 14);
      const n3 = this.randInt(11, 16);
      const currentPoints = n1 * c1 + n2 * c2 + n3 * c3;
      const targetPoints = targetMoy * totalCoeff;
      const requiredPointsForX = targetPoints - currentPoints;
      // Il faut que requiredPointsForX soit divisible par cx et compris entre 5 et 20
      const xVal = Math.round(requiredPointsForX / cx);
      const adjustedTargetMoy = (currentPoints + xVal * cx) / totalCoeff;

      return {
        chapterId: 'Org2',
        tier: 4,
        title: "Défi Seconde : Rétro-calcul statistique (Équation de moyenne cible)",
        statement: `Un étudiant a obtenu 3 notes ce trimestre :\n- $${n1}/20$ (coeff $${c1}$)\n- $${n2}/20$ (coeff $${c2}$)\n- $${n3}/20$ (coeff $${c3}$)\n\nIl lui reste un examen final de coefficient $${cx}$.\n**Quelle note $x$ (sur 20) doit-il obtenir à cet examen final pour que sa moyenne générale pondérée atteigne exactement $${adjustedTargetMoy}/20$ ?**`,
        type: 'exact',
        answer: String(xVal),
        placeholder: `Ex: ${xVal}`,
        hint1: `Total des coefficients : $${c1} + ${c2} + ${c3} + ${cx} = ${totalCoeff}$.\nPour avoir une moyenne de $${adjustedTargetMoy}$, le total des points doit être : $${totalCoeff} \\times ${adjustedTargetMoy} = ${totalCoeff * adjustedTargetMoy}$.\nPose l'équation : $${currentPoints} + ${cx}x = ${totalCoeff * adjustedTargetMoy}$.`,
        solution: `1. Somme des coefficients :\n$$C = ${c1} + ${c2} + ${c3} + ${cx} = ${totalCoeff}$$\n2. Total des points requis pour une moyenne de $${adjustedTargetMoy}$ :\n$$P_{\\text{total}} = ${totalCoeff} \\times ${adjustedTargetMoy} = ${totalCoeff * adjustedTargetMoy}$$\n3. Points déjà cumulés :\n$$P_{\\text{actuel}} = ${n1}\\times${c1} + ${n2}\\times${c2} + ${n3}\\times${c3} = ${currentPoints}$$\n4. Résolution pour la note $x$ :\n$$${currentPoints} + ${cx}x = ${totalCoeff * adjustedTargetMoy} \\implies ${cx}x = ${totalCoeff * adjustedTargetMoy - currentPoints} \\implies x = \\frac{${totalCoeff * adjustedTargetMoy - currentPoints}}{${cx}} = ${xVal}$$`
      };
    }
  },

  // --- Org3 : Probabilités ---
  generateOrg3(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Événement élémentaire simple)
      const faces = 6;
      const target = this.randInt(1, 5); // ex: P(obtenir un nombre <= target)
      const count = target;
      const [sN, sD] = this.simplifyFraction(count, faces);

      return {
        chapterId: 'Org3',
        tier: 1,
        title: "Probabilité d'un événement simple (Dé à 6 faces)",
        statement: `On lance un dé équilibré à 6 faces numérotées de 1 à 6.\n**Quelle est la probabilité d'obtenir un nombre inférieur ou égal à $${target}$ ?**\n*(Donner le résultat sous forme de fraction irréductible)*`,
        type: 'exact',
        answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
        placeholder: "Ex: 1/2",
        hint1: `Le nombre d'issues favorables est $${count}$ (les nombres de 1 à $${target}$). L'effectif total est 6. Forme la fraction $${count}/6$ et simplifie.`,
        solution: `$$P = \\frac{\\text{Nombre d'issues favorables}}{\\text{Nombre d'issues totales}} = \\frac{${count}}{6} = ${this.formatFraction(count, 6)}$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Événement contraire)
      const nTotal = this.randChoice([10, 20, 25]);
      const nFav = this.randInt(3, nTotal - 3);
      const nContraire = nTotal - nFav;
      const [sN, sD] = this.simplifyFraction(nContraire, nTotal);

      return {
        chapterId: 'Org3',
        tier: 2,
        title: "Probabilité de l'événement contraire",
        statement: `Une urne contient $${nTotal}$ boules indiscernables au toucher dont $${nFav}$ sont gagnantes.\nOn tire une boule au hasard.\n**Quelle est la probabilité de tirer une boule perdante (non gagnante) ?**\n*(Fraction irréductible)*`,
        type: 'exact',
        answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
        placeholder: "Ex: 3/5",
        hint1: `Utilise la formule de l'événement contraire : $P(\\bar{A}) = 1 - P(A) = 1 - \\frac{${nFav}}{${nTotal}}$.`,
        solution: `Le nombre de boules perdantes est $${nTotal} - ${nFav} = ${nContraire}$.\n$$P(\\bar{A}) = 1 - \\frac{${nFav}}{${nTotal}} = \\frac{${nContraire}}{${nTotal}} = ${this.formatFraction(nContraire, nTotal)}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Arbre pondéré à deux épreuves indépendantes avec remise)
      const r = this.randChoice([2, 3]);
      const v = this.randChoice([3, 4]);
      const tot = r + v; // ex: 2 rouges et 3 vertes => total 5
      // P(Rouge puis Rouge) = (r/tot) * (r/tot)
      const pNum = r * r;
      const pDen = tot * tot;
      const [sN, sD] = this.simplifyFraction(pNum, pDen);

      return {
        chapterId: 'Org3',
        tier: 3,
        title: "Arbre de probabilités à deux épreuves avec remise",
        statement: `Un sac contient $${r}$ billes rouges et $${v}$ billes vertes (soit $${tot}$ billes au total).\nOn tire une première bille au hasard, on note sa couleur, puis on la **remet** dans le sac avant de tirer une seconde bille.\n\n**Quelle est la probabilité d'obtenir deux billes rouges consécutives ?**\n*(Fraction irréductible)*`,
        type: 'exact',
        answer: `${sN}/${sD}`,
        placeholder: "Ex: 4/25",
        hint1: `Le tirage s'effectue avec remise : les deux tirages sont indépendants. Multiplie la probabilité du 1er tirage par celle du 2nd tirage : $\\frac{${r}}{${tot}} \\times \\frac{${r}}{${tot}}$.`,
        solution: `À chaque tirage, la probabilité d'obtenir une bille rouge est $P(R) = \\frac{${r}}{${tot}}$.\nComme il y a remise, les tirages sont indépendants :\n$$P(R \\cap R) = P(R) \\times P(R) = \\frac{${r}}{${tot}} \\times \\frac{${r}}{${tot}} = \\frac{${pNum}}{${pDen}} = ${this.formatFraction(pNum, pDen)}$$`
      };
    } else {
      // Palier 4 : Défi Seconde (Tirage SANS remise de deux boules : probabilité de même couleur)
      // r rouges, v vertes, total N.
      // P(même couleur) = P(R,R) + P(V,V) = (r/N)*((r-1)/(N-1)) + (v/N)*((v-1)/(N-1))
      const configs = [
        { r: 4, v: 6, tot: 10, num: 4*3 + 6*5, den: 10*9 }, // 12 + 30 = 42 / 90 = 7/15
        { r: 3, v: 5, tot: 8, num: 3*2 + 5*4, den: 8*7 },   // 6 + 20 = 26 / 56 = 13/28
        { r: 5, v: 5, tot: 10, num: 5*4 + 5*4, den: 10*9 }, // 20 + 20 = 40 / 90 = 4/9
        { r: 2, v: 4, tot: 6, num: 2*1 + 4*3, den: 6*5 }    // 2 + 12 = 14 / 30 = 7/15
      ];
      const cfg = this.randChoice(configs);
      const [sN, sD] = this.simplifyFraction(cfg.num, cfg.den);

      return {
        chapterId: 'Org3',
        tier: 4,
        title: "Défi Seconde : Probabilité composée SANS remise (Même couleur)",
        statement: `Une urne opaque contient $${cfg.r}$ boules rouges et $${cfg.v}$ boules vertes (soit $${cfg.tot}$ boules au total).\nOn tire successivement et **SANS remise** deux boules au hasard dans l'urne.\n\n**Calculer la probabilité que les deux boules tirées soient de la même couleur (deux rouges OU deux vertes).**\n*(Donner la réponse sous forme de fraction irréductible)*`,
        type: 'exact',
        answer: `${sN}/${sD}`,
        placeholder: "Ex: 7/15",
        hint1: `Sans remise, au second tirage il ne reste que $${cfg.tot - 1}$ boules dans l'urne.\n1. $P(R_1 \\cap R_2) = \\frac{${cfg.r}}{${cfg.tot}} \\times \\frac{${cfg.r - 1}}{${cfg.tot - 1}}$.\n2. $P(V_1 \\cap V_2) = \\frac{${cfg.v}}{${cfg.tot}} \\times \\frac{${cfg.v - 1}}{${cfg.tot - 1}}$.\n3. Additionne les deux probabilités.`,
        solution: `L'événement "obtenir deux boules de même couleur" est l'union disjointe de deux cas :\n1. Deux rouges :\n$$P(R_1 \\cap R_2) = \\frac{${cfg.r}}{${cfg.tot}} \\times \\frac{${cfg.r-1}}{${cfg.tot-1}} = \\frac{${cfg.r*(cfg.r-1)}}{${cfg.den}}$$\n2. Deux vertes :\n$$P(V_1 \\cap V_2) = \\frac{${cfg.v}}{${cfg.tot}} \\times \\frac{${cfg.v-1}}{${cfg.tot-1}} = \\frac{${cfg.v*(cfg.v-1)}}{${cfg.den}}$$\n3. Probabilité totale :\n$$P = \\frac{${cfg.r*(cfg.r-1)}}{${cfg.den}} + \\frac{${cfg.v*(cfg.v-1)}}{${cfg.den}} = \\frac{${cfg.num}}{${cfg.den}} = ${this.formatFraction(cfg.num, cfg.den)}$$`
      };
    }
  },

  // --- Org4 : Proportionnalité, pourcentages et grandeurs composées ---
  generateOrg4(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Appliquer un pourcentage simple)
      const p = this.randChoice([10, 20, 25, 50]);
      const prix = this.randChoice([40, 60, 80, 120, 200]);
      const montant = (prix * p) / 100;
      const prixFinal = prix - montant;

      return {
        chapterId: 'Org4',
        tier: 1,
        title: "Application d'un pourcentage de réduction",
        statement: `Un article affiché au prix de $${prix}\\text{ €}$ bénéficie d'une remise immédiate de $${p}\\%$.\n**Quel est le nouveau prix de cet article après réduction ?**`,
        type: 'exact',
        answer: String(prixFinal),
        placeholder: `Ex: ${prixFinal}`,
        hint1: `Calcule le montant de la remise : $\\frac{${p}}{100} \\times ${prix} = ${montant}\\text{ €}$. Puis soustrais-le du prix initial.`,
        solution: `$$\\text{Montant remise} = ${prix} \\times \\frac{${p}}{100} = ${montant}\\text{ €}$$\n$$\\text{Nouveau prix} = ${prix} - ${montant} = ${prixFinal}\\text{ €}$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Calcul d'un taux d'évolution)
      const vi = this.randChoice([50, 80, 100, 200]);
      const p = this.randChoice([15, 20, 25, 30]);
      const vf = vi + (vi * p) / 100;

      return {
        chapterId: 'Org4',
        tier: 2,
        title: "Calcul du taux d'évolution en pourcentage",
        statement: `Le prix d'un abonnement passe de $${vi}\\text{ €}$ à $${vf}\\text{ €}$.\n**Quel est le taux de cette augmentation en pourcentage ?** (Indiquer uniquement le nombre, ex: 15)`,
        type: 'exact',
        answer: String(p),
        placeholder: `Ex: ${p}`,
        hint1: `Formule du taux d'évolution : $t = \\frac{V_{\\text{finale}} - V_{\\text{initiale}}}{V_{\\text{initiale}}} \\times 100\\%$.`,
        solution: `$$t = \\frac{${vf} - ${vi}}{${vi}} \\times 100 = \\frac{${vf - vi}}{${vi}} \\times 100 = ${p}\\%$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Vitesse moyenne et durée décimale)
      const speeds = [60, 80, 90, 100, 120];
      const speed = this.randChoice(speeds);
      // Durée: 1h30 (1.5) ou 1h15 (1.25) ou 2h30 (2.5) ou 0h45 (0.75)
      const times = [
        { text: "1\\text{ h } 30\\text{ min}", h: 1.5 },
        { text: "2\\text{ h } 15\\text{ min}", h: 2.25 },
        { text: "1\\text{ h } 45\\text{ min}", h: 1.75 },
        { text: "0\\text{ h } 45\\text{ min}", h: 0.75 }
      ];
      const tm = this.randChoice(times);
      const dist = Math.round(speed * tm.h);

      return {
        chapterId: 'Org4',
        tier: 3,
        title: "Vitesse moyenne et conversion de durée (Brevet)",
        statement: `Un automobiliste roule à une vitesse moyenne constante de $v = ${speed}\\text{ km/h}$ pendant une durée de $t = ${tm.text}$.\n\n**Calculer la distance totale parcourue $d$ en kilomètres.**`,
        type: 'exact',
        answer: String(dist),
        placeholder: `Ex: ${dist}`,
        hint1: `Convertis d'abord la durée en heures décimales : $t = ${tm.h}\\text{ h}$. Puis applique $d = v \\times t$.`,
        solution: `1. Conversion de la durée : $${tm.text} = ${tm.h}\\text{ h}$.\n2. Calcul de la distance :\n$$d = v \\times t = ${speed} \\times ${tm.h} = ${dist}\\text{ km}$$`
      };
    } else {
      // Palier 4 : Défi Seconde (Évolutions successives en pourcentage)
      // +p% puis -p% ou +p% puis -q%
      // Exemple classique : Hausse de 20% puis Baisse de 20% => CM = 1.20 * 0.80 = 0.96 => Baisse de 4% !
      const pairs = [
        { p1: 20, p2: -20, cm: 0.96, global: -4, desc: "hausse de 20% suivie d'une baisse de 20%" },
        { p1: 10, p2: -10, cm: 0.99, global: -1, desc: "hausse de 10% suivie d'une baisse de 10%" },
        { p1: 25, p2: -20, cm: 1.00, global: 0, desc: "hausse de 25% suivie d'une baisse de 20%" },
        { p1: 50, p2: -50, cm: 0.75, global: -25, desc: "hausse de 50% suivie d'une baisse de 50%" },
        { p1: 20, p2: 10, cm: 1.32, global: 32, desc: "hausse de 20% suivie d'une hausse de 10%" }
      ];
      const evo = this.randChoice(pairs);

      return {
        chapterId: 'Org4',
        tier: 4,
        title: "Défi Seconde : Évolutions successives et coefficient multiplicateur global",
        statement: `Le prix d'un produit subit deux évolutions consécutives : une ${evo.desc}.\n\n**Quelle est l'évolution globale en pourcentage subie par ce prix ?**\n*(Exemple : saisir -4 pour une baisse de 4%, ou 32 pour une hausse de 32%)*`,
        type: 'exact',
        answer: String(evo.global),
        placeholder: `Ex: ${evo.global}`,
        hint1: `Attention : on ne peut JAMAIS additionner les pourcentages ! Il faut multiplier les coefficients multiplicateurs :\n$$CM_{\\text{global}} = CM_1 \\times CM_2 = \\left(1 + \\frac{${evo.p1}}{100}\\right) \\times \\left(1 + \\frac{${evo.p2}}{100}\\right)$$`,
        solution: `1. Coefficients multiplicateurs des deux évolutions :\n- $CM_1 = 1 + \\frac{${evo.p1}}{100} = ${(1 + evo.p1/100).toFixed(2)}$\n- $CM_2 = 1 + \\frac{${evo.p2}}{100} = ${(1 + evo.p2/100).toFixed(2)}$\n2. Coefficient multiplicateur global :\n$$CM_{\\text{global}} = CM_1 \\times CM_2 = ${(1 + evo.p1/100).toFixed(2)} \\times ${(1 + evo.p2/100).toFixed(2)} = ${evo.cm}$$\n3. Taux d'évolution global :\n$$T = (CM_{\\text{global}} - 1) \\times 100\\% = (${evo.cm} - 1) \\times 100\\% = ${evo.global}\\%$$`
      };
    }
  },

  // --- Algo : Algorithmique et programmation (Scratch / Python) ---
  generateAlgo(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      if (Math.random() < 0.5) {
        // Palier 1 : Programme de calcul Scratch (Brevet)
        const x = this.randInt(2, 8);
        const m = this.randInt(2, 5);
        const a = this.randInt(3, 9);
        const res = x * m + a;
        return {
          chapterId: 'Algo',
          tier: 1,
          title: "Programme de calcul Scratch (Cycle 4)",
          statement: `On considère le script Scratch suivant :\n\`\`\`text\nquand drapeau vert pressé\ndemander [Choisir un nombre] et attendre\nmettre [x] à réponse\nmettre [x] à (x * ${m})\nmettre [x] à (x + ${a})\ndire (x)\n\`\`\`\n**Si le nombre choisi au départ est $${x}$, quel résultat affiche le lutin ?**`,
          type: 'exact',
          answer: String(res),
          placeholder: `Ex: ${res}`,
          hint1: `Applique les instructions dans l'ordre : d'abord multiplier $${x}$ par $${m}$, puis ajouter $${a}$.`,
          hint2: `Étape 1 : $${x} \\times ${m} = ${x * m}$. Étape 2 : $${x * m} + ${a} = ${res}$.`,
          solution: `$$(${x} \\times ${m}) + ${a} = ${x * m} + ${a} = ${res}$$`
        };
      }
      // Palier 1 : Socle (Boucle simple répétée)
      const n = this.randInt(3, 6);
      const step = this.randInt(10, 30);
      const total = n * step;

      return {
        chapterId: 'Algo',
        tier: 1,
        title: "Boucle de répétition (Scratch)",
        statement: `On considère le script suivant :\n\`\`\`text\nmettre X à 0\nrépéter ${n} fois :\n    ajouter ${step} à X\n\`\`\`\n**Quelle sera la valeur finale de la variable $X$ à la fin du script ?**`,
        type: 'exact',
        answer: String(total),
        placeholder: `Ex: ${total}`,
        hint1: `La variable $X$ part de 0 et on lui ajoute $${step}$ un nombre de $${n}$ fois : $X = ${n} \\times ${step}$.`,
        hint2: `C'est une addition itérée : $X = ${n} \\times ${step} = ${total}$.`,
        solution: `$$X = ${n} \\times ${step} = ${total}$$`
      };
    } else if (t === 2) {
      if (Math.random() < 0.5) {
        // Palier 2 : Programme de calcul Scratch avec nombres relatifs et parenthèses
        const x = this.randChoice([-5, -4, -3, -2, 3, 4, 5]);
        const a = this.randInt(2, 6);
        const b = this.randInt(2, 5);
        const res = (x - a) * b;
        return {
          chapterId: 'Algo',
          tier: 2,
          title: "Programme de calcul Scratch avec relatifs (Brevet)",
          statement: `On considère le script Scratch suivant :\n\`\`\`text\nquand drapeau vert pressé\ndemander [Choisir un nombre] et attendre\nmettre [x] à réponse\nmettre [x] à (x - ${a})\nmettre [x] à (x * ${b})\ndire (x)\n\`\`\`\n**Si le nombre choisi est $${x}$, quel résultat affiche le lutin ?**`,
          type: 'exact',
          answer: String(res),
          placeholder: `Ex: ${res}`,
          hint1: `Calcule d'abord l'opération $(x - ${a})$ avec $x = ${x}$, puis multiplie le résultat par $${b}$.`,
          hint2: `Étape 1 : $${x} - ${a} = ${x - a}$. Étape 2 : $(${x - a}) \\times ${b} = ${res}$. Attention à la règle des signes !`,
          solution: `$$(${x} - ${a}) \\times ${b} = (${x - a}) \\times ${b} = ${res}$$`
        };
      }
      // Palier 2 : Guidé (Instruction conditionnelle Si / Alors / Sinon)
      const vInitial = this.randInt(5, 25);
      const threshold = 15;
      const isGreater = vInitial > threshold;
      const finalVal = isGreater ? vInitial * 2 : vInitial + 10;

      return {
        chapterId: 'Algo',
        tier: 2,
        title: "Instruction conditionnelle Si / Alors / Sinon",
        statement: `Soit le programme suivant :\n\`\`\`text\nvariable A = ${vInitial}\nsi A > ${threshold} alors :\n    A = A * 2\nsinon :\n    A = A + 10\n\`\`\`\n**Quelle est la valeur de $A$ à la fin de l'exécution ?**`,
        type: 'exact',
        answer: String(finalVal),
        placeholder: `Ex: ${finalVal}`,
        hint1: `Teste la condition : est-ce que $${vInitial} > ${threshold}$ ? Si oui, calcule $${vInitial} \\times 2$, sinon calcule $${vInitial} + 10$.`,
        hint2: `$${vInitial} ${isGreater ? '>' : '\\le'} ${threshold}$ : on applique la branche ${isGreater ? 'alors' : 'sinon'}.`,
        solution: `Comme $${vInitial} ${isGreater ? '>' : '\\le'} ${threshold}$, c'est la branche **${isGreater ? 'ALORS' : 'SINON'}** qui s'exécute :\n$$A = ${isGreater ? `${vInitial} \\times 2 = ${finalVal}` : `${vInitial} + 10 = ${finalVal}`}$$`
      };
    } else if (t === 3) {
      if (Math.random() < 0.5) {
        // Palier 3 : Problème inverse Scratch (retrouver le nombre de départ)
        const start = this.randInt(2, 9);
        const m = this.randInt(2, 4);
        const a = this.randInt(3, 10);
        const finalVal = start * m + a;
        return {
          chapterId: 'Algo',
          tier: 3,
          title: "Problème inverse Scratch : retrouver le nombre de départ (Brevet)",
          statement: `On considère le script Scratch suivant :\n\`\`\`text\nquand drapeau vert pressé\ndemander [Choisir un nombre] et attendre\nmettre [x] à réponse\nmettre [x] à (x * ${m})\nmettre [x] à (x + ${a})\ndire (x)\n\`\`\`\nÀ la fin du programme, **le lutin annonce $${finalVal}$**.\n**Quel nombre de départ avait été choisi ?**`,
          type: 'exact',
          answer: String(start),
          placeholder: `Ex: ${start}`,
          hint1: `Remonte le programme de calcul à l'envers : effectue les opérations inverses dans l'ordre chronologique inverse.`,
          hint2: `À l'envers : commence par soustraire $${a}$ à $${finalVal}$ (${finalVal} - ${a} = ${finalVal - a}), puis divise le résultat par $${m}$.`,
          solution: `On remonte les étapes à l'envers ou on résout l'équation :\n$$${m}x + ${a} = ${finalVal} \\iff ${m}x = ${finalVal} - ${a} = ${finalVal - a} \\iff x = \\frac{${finalVal - a}}{${m}} = ${start}$$\nLe nombre de départ choisi était donc **$${start}$**.`
        };
      }
      // Palier 3 : Brevet (Accumulateur multiplicatif ou additif)
      const mult = this.randChoice([2, 3]);
      const iters = this.randChoice([3, 4]);
      let val = 1;
      for (let i = 0; i < iters; i++) {
        val = val * mult;
      }

      return {
        chapterId: 'Algo',
        tier: 3,
        title: "Boucle et calcul de puissances (Python / Scratch)",
        statement: `On exécute le script Python suivant :\n\`\`\`python\nx = 1\nfor k in range(${iters}):\n    x = x * ${mult}\nprint(x)\n\`\`\`\n**Quelle valeur sera affichée par ce programme ?**`,
        type: 'exact',
        answer: String(val),
        placeholder: `Ex: ${val}`,
        hint1: `La boucle s'exécute $${iters}$ fois. À chaque passage, la variable $x$ est multipliée par $${mult}$. C'est le calcul de $${mult}^{${iters}}$.`,
        hint2: `Rappel : $${mult}^{${iters}} = ${val}$.`,
        solution: `La variable $x$ est initialisée à 1, puis multipliée $${iters}$ fois par $${mult}$ :\n$$x = 1 \\times \\underbrace{${mult} \\times \\dots \\times ${mult}}_{${iters}\\text{ fois}} = ${mult}^{${iters}} = ${val}$$`
      };
    } else {
      if (Math.random() < 0.5) {
        // Palier 4 : Comparaison de deux programmes Scratch (Équation)
        const xSol = this.randInt(2, 7);
        const a1 = 5;
        const a2 = 2;
        const b1 = this.randInt(1, 5);
        const b2 = (a1 - a2) * xSol + b1;
        return {
          chapterId: 'Algo',
          tier: 4,
          title: "Défi Brevet / Seconde : Égalité de deux programmes Scratch",
          statement: `On compare deux programmes Scratch :\n- **Programme A** : Multiplier par ${a1}, puis soustraire ${b1} (résultat : $${a1}x - ${b1}$)\n- **Programme B** : Multiplier par ${a2}, puis ajouter ${b2} (résultat : $${a2}x + ${b2}$)\n\n**Pour quel nombre de départ $x$ les deux programmes donnent-ils exactement le même résultat ?**`,
          type: 'exact',
          answer: String(xSol),
          placeholder: `Ex: ${xSol}`,
          hint1: `Résous l'équation correspondante : $${a1}x - ${b1} = ${a2}x + ${b2}$.`,
          hint2: `Isole les termes en $x$ d'un côté et les nombres de l'autre : $${a1}x - ${a2}x = ${b2} + ${b1}$, donc $${a1 - a2}x = ${b2 + b1}$.`,
          solution: `On résout l'équation de comparaison :\n$$${a1}x - ${b1} = ${a2}x + ${b2} \\iff ${a1 - a2}x = ${b2 + b1} \\iff x = \\frac{${b2 + b1}}{${a1 - a2}} = ${xSol}$$\nPour $x = ${xSol}$, les deux programmes affichent tous les deux le résultat $${a1 * xSol - b1}$.`
        };
      }
      // Palier 4 : Défi Seconde (Boucle conditionnelle Tant que avec 2 variables)
      const startA = this.randInt(2, 5);
      const multA = 2;
      const target = this.randChoice([50, 100, 120]);
      let aCur = startA;
      let bCur = 0;
      while (aCur < target) {
        aCur *= multA;
        bCur += 1;
      }

      return {
        chapterId: 'Algo',
        tier: 4,
        title: "Défi Seconde : Boucle conditionnelle 'Tant que' à variables couplées",
        statement: `On considère l'algorithme suivant :\n\`\`\`python\nA = ${startA}\nB = 0\nwhile A < ${target}:\n    A = A * 2\n    B = B + 1\nprint(B)\n\`\`\`\n\n**Quelle sera la valeur affichée pour la variable $B$ lorsque la boucle s'arrêtera ?**`,
        type: 'exact',
        answer: String(bCur),
        placeholder: `Ex: ${bCur}`,
        hint1: `Fais un tableau d'état des variables $A$ et $B$ après chaque tour de boucle jusqu'à ce que $A \\ge ${target}$.`,
        hint2: `À chaque tour, $A$ est multiplié par 2 et $B$ est incrémenté de 1.`,
        solution: `Tableau d'exécution pas à pas :\n- Début : $A = ${startA}$, $B = 0$\n${(() => {
          let str = "";
          let aTmp = startA;
          let bTmp = 0;
          while (aTmp < target) {
            aTmp *= 2;
            bTmp += 1;
            str += `- Tour ${bTmp} : $A = ${aTmp}$, $B = ${bTmp}$ (Condition $A < ${target}$ : ${aTmp < target ? 'Vraie' : 'Fausse'})\\n`;
          }
          return str;
        })()}\nLa boucle s'arrête car la condition $A < ${target}$ n'est plus vérifiée. La valeur finale affichée est donc :\n$$B = ${bCur}$$`
      };
    }
  },


  // =========================================================================
  // CHAPITRES 4ème (CYCLE 4) - PALIERS 1 À 4
  // =========================================================================

  // --- 4N1 : Nombres relatifs (multiplication, division, priorités) ---
  generate4N1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Produit deux relatifs, quotient, carré d'un négatif, facteur manquant)
      const subType = this.randChoice(['prod_two_neg', 'prod_neg_pos', 'quotient_rel', 'square_rel', 'missing_factor']);

      if (subType === 'prod_two_neg') {
        const a = this.randInt(2, 9);
        const b = this.randInt(2, 9);
        const ans = a * b;
        return {
          chapterId: '4N1',
          tier: 1,
          title: "Produit de deux nombres négatifs",
          statement: `Calculer le produit suivant :\n$$P = (-${a}) \\times (-${b})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: "Règle des signes : le produit de deux nombres de même signe est TOUJOURS positif ($-$ par $-$ donne $+$).",
          solution: `$$(-${a}) \\times (-${b}) = +(${a} \\times ${b}) = ${ans}$$`
        };
      } else if (subType === 'prod_neg_pos') {
        const a = this.randInt(2, 9);
        const b = this.randInt(2, 9);
        const ans = -(a * b);
        const firstNeg = Math.random() > 0.5;
        const expr = firstNeg ? `(-${a}) \\times (+${b})` : `(+${b}) \\times (-${a})`;
        return {
          chapterId: '4N1',
          tier: 1,
          title: "Produit de deux nombres de signes contraires",
          statement: `Calculer le produit suivant :\n$$P = ${expr}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: "Règle des signes : le produit de deux nombres de signes différents est TOUJOURS négatif.",
          solution: `$$${expr} = -(${a} \\times ${b}) = ${ans}$$`
        };
      } else if (subType === 'quotient_rel') {
        const b = this.randInt(2, 8);
        const q = this.randInt(2, 9);
        const a = b * q;
        const bothNeg = Math.random() > 0.5;
        const num = -a;
        const den = bothNeg ? -b : b;
        const ans = bothNeg ? q : -q;
        return {
          chapterId: '4N1',
          tier: 1,
          title: "Quotient de deux nombres relatifs",
          statement: `Calculer le quotient suivant :\n$$Q = \\frac{${num}}{${den}}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `La règle des signes pour la division est la même que pour la multiplication : ${bothNeg ? 'deux signes moins donnent un résultat positif' : 'un seul signe moins donne un résultat négatif'}.`,
          solution: `$$Q = \\frac{${num}}{${den}} = ${ans}$$`
        };
      } else if (subType === 'square_rel') {
        const a = this.randInt(2, 9);
        const hasParentheses = Math.random() > 0.5;
        const ans = hasParentheses ? a * a : -(a * a);
        const expr = hasParentheses ? `(-${a})^2` : `-${a}^2`;
        return {
          chapterId: '4N1',
          tier: 1,
          title: hasParentheses ? "Carré d'un nombre négatif entre parenthèses" : "Opposé d'un carré sans parenthèses",
          statement: `Calculer la valeur exacte du nombre suivant :\n$$C = ${expr}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: hasParentheses ? `$(-${a})^2 = (-${a}) \\times (-${a}) = +${a * a}$.` : `Attention à la priorité : $-${a}^2 = -(${a} \\times ${a}) = -${a * a}$.`,
          solution: hasParentheses ?
            `$$(-${a})^2 = (-${a}) \\times (-${a}) = ${ans}$$` :
            `$$-${a}^2 = -(${a}^2) = -(${a * a}) = ${ans}$$`
        };
      } else {
        const a = this.randInt(2, 9);
        const xVal = this.randInt(-8, 8, [0]);
        const b = -a * xVal;
        return {
          chapterId: '4N1',
          tier: 1,
          title: "Facteur manquant avec des relatifs",
          statement: `Trouver le nombre relatif $x$ vérifiant l'égalité :\n$$(-${a}) \\times x = ${b}$$`,
          type: "exact",
          answer: String(xVal),
          placeholder: `Ex: ${xVal}`,
          hint1: `Divise le résultat par $-${a}$ : $x = \\frac{${b}}{-${a}}$.`,
          solution: `$$x = \\frac{${b}}{-${a}} = ${xVal}$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Produit de 3 relatifs, 4 relatifs, avec zéro, règle du signe)
      const subType = this.randChoice(['prod_three', 'prod_four', 'prod_zero', 'sign_rule']);

      if (subType === 'prod_three') {
        const a = this.randInt(-5, -2);
        const b = this.randInt(-4, -2);
        const c = this.randChoice([this.randInt(-4, -2), this.randInt(2, 5)]);
        const ans = a * b * c;
        const negCount = (a < 0 ? 1 : 0) + (b < 0 ? 1 : 0) + (c < 0 ? 1 : 0);
        return {
          chapterId: '4N1',
          tier: 2,
          title: "Produit de trois nombres relatifs",
          statement: `Calculer le produit suivant :\n$$P = (${a}) \\times (${b}) \\times (${c})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Compte le nombre de facteurs négatifs ($${negCount}$). Comme ce nombre est ${negCount % 2 === 1 ? 'impair, le résultat est négatif' : 'pair, le résultat est positif'}.`,
          solution: `1. Signe : il y a $${negCount}$ facteurs négatifs (${negCount % 2 === 1 ? 'impair $\\implies -$' : 'pair $\\implies +$'}).\n2. Valeur absolue : $${Math.abs(a)} \\times ${Math.abs(b)} \\times ${Math.abs(c)} = ${Math.abs(ans)}$.\n$$P = ${ans}$$`
        };
      } else if (subType === 'prod_four') {
        const a = this.randChoice([-2, -3, 2, 3]);
        const b = this.randChoice([-2, -3, 2, 3]);
        const c = this.randChoice([-2, -3, 2, 3]);
        const d = this.randChoice([-2, -3, 2, 3]);
        const ans = a * b * c * d;
        const negCount = (a < 0 ? 1 : 0) + (b < 0 ? 1 : 0) + (c < 0 ? 1 : 0) + (d < 0 ? 1 : 0);
        return {
          chapterId: '4N1',
          tier: 2,
          title: "Produit de quatre nombres relatifs",
          statement: `Calculer le produit suivant :\n$$P = (${a}) \\times (${b}) \\times (${c}) \\times (${d})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Il y a $${negCount}$ facteurs négatifs. Un nombre ${negCount % 2 === 0 ? 'pair de facteurs négatifs donne un signe +' : 'impair donne un signe -'}.`,
          solution: `Il y a $${negCount}$ facteurs négatifs (${negCount % 2 === 0 ? 'pair $\\implies +$' : 'impair $\\implies -$'}).\n$$P = ${ans}$$`
        };
      } else if (subType === 'prod_zero') {
        const a = this.randInt(-9, -2);
        const b = this.randInt(3, 8);
        const c = this.randInt(-7, -3);
        return {
          chapterId: '4N1',
          tier: 2,
          title: "Produit comportant un facteur nul",
          statement: `Calculer la valeur du produit :\n$$P = (${a}) \\times (${b}) \\times 0 \\times (${c})$$`,
          type: "exact",
          answer: "0",
          placeholder: "Ex: 0",
          hint1: "Tout produit comportant le facteur 0 est immédiatement égal à 0.",
          solution: `Le produit comporte le facteur 0, donc :\n$$P = 0$$`
        };
      } else {
        const nbNeg = this.randChoice([3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]);
        const nbPos = this.randInt(4, 18);
        const isPair = nbNeg % 2 === 0;
        const ans = isPair ? "positif" : "négatif";
        const other = isPair ? "négatif" : "positif";
        const opts = this.shuffle(["positif", "négatif", "nul", "on ne peut pas savoir"]);
        return {
          chapterId: '4N1',
          tier: 2,
          title: "Signe d'un produit de nombreux facteurs",
          statement: `Un produit est composé de $${nbNeg}$ facteurs négatifs non nuls et de $${nbPos}$ facteurs positifs.\n**Quel est le signe du résultat ?**`,
          type: "mcq",
          options: opts,
          answer: ans,
          correctIndex: opts.indexOf(ans),
          hint1: `Seul le nombre de facteurs négatifs compte ($${nbNeg}$). $${nbNeg}$ est-il pair ou impair ?`,
          solution: `Il y a $${nbNeg}$ facteurs négatifs. Comme $${nbNeg}$ est un nombre **impair**, le résultat est **négatif**.`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet / 4e (Opérations combinées : multiplication et soustraction, additions signées)
      const subType = this.randChoice(['prod_sub_prod', 'add_prod', 'par_mult', 'prod_add_prod']);

      if (subType === 'prod_sub_prod') {
        const a = this.randInt(-8, -2);
        const b = this.randInt(3, 7);
        const c = this.randInt(-6, -2);
        const d = this.randInt(-5, -2);
        const prod1 = a * b;
        const prod2 = c * d;
        const ans = prod1 - prod2;
        return {
          chapterId: '4N1',
          tier: 3,
          title: "Priorités opératoires : différence de deux produits",
          statement: `Calculer l'expression numérique suivante :\n$$E = (${a}) \\times ${b} - (${c}) \\times (${d})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: "La multiplication est prioritaire sur la soustraction. Calcule d'abord les deux produits séparément.",
          solution: `1. Premier produit : $(${a}) \\times ${b} = ${prod1}$.\n2. Deuxième produit : $(${c}) \\times (${d}) = ${prod2}$.\n3. Différence finale :\n$$E = ${prod1} - (${prod2}) = ${ans}$$`
        };
      } else if (subType === 'add_prod') {
        const a = this.randInt(-15, 15, [0]);
        const b = this.randInt(-6, 6, [0, 1, -1]);
        const c = this.randInt(-5, 5, [0, 1, -1]);
        const ans = a + b * c;
        return {
          chapterId: '4N1',
          tier: 3,
          title: "Priorités opératoires : addition et produit relatif",
          statement: `Calculer l'expression numérique suivante :\n$$F = ${a} + (${b}) \\times (${c})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `La multiplication est prioritaire : calcule d'abord $(${b}) \\times (${c}) = ${b * c}$.`,
          solution: `$$F = ${a} + (${b * c}) = ${ans}$$`
        };
      } else if (subType === 'par_mult') {
        const a = this.randInt(-8, -1);
        const b = this.randInt(2, 9);
        const c = this.randInt(-5, -2);
        const parVal = a - b;
        const ans = parVal * c;
        return {
          chapterId: '4N1',
          tier: 3,
          title: "Priorités opératoires avec parenthèses",
          statement: `Calculer l'expression numérique suivante :\n$$G = (${a} - ${b}) \\times (${c})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Calcule d'abord l'opération entre parenthèses : $${a} - ${b} = ${parVal}$.`,
          solution: `1. Parenthèse : $${a} - ${b} = ${parVal}$.\n2. Produit : $(${parVal}) \\times (${c}) = ${ans}$.`
        };
      } else {
        const a = this.randInt(-6, -2);
        const b = this.randInt(-5, -2);
        const c = this.randInt(-4, -2);
        const d = this.randInt(2, 6);
        const ans = a * b + c * d;
        return {
          chapterId: '4N1',
          tier: 3,
          title: "Somme de deux produits signés",
          statement: `Calculer l'expression numérique suivante :\n$$H = (${a}) \\times (${b}) + (${c}) \\times ${d}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Calcule les deux produits : $(${a}) \\times (${b}) = ${a * b}$ et $(${c}) \\times ${d} = ${c * d}$.`,
          solution: `$$H = (${a * b}) + (${c * d}) = ${ans}$$`
        };
      }
    } else {
      // Palier 4 : Défi 3ème / Difficulté Maximale (Quotient avec puissances et crochets)
      const configs = [
        {
          numStr: "(-4) \\times (-6) \\times (-5)",
          denStr: "(-2) \\times 15",
          numVal: -120, denVal: -30, qVal: 4,
          powerPart: "(-3)^2 \\times (-1)^5",
          powerVal: 9 * (-1),
          ans: 13,
          textExpr: "\\frac{(-4) \\times (-6) \\times (-5)}{(-2) \\times 15} - (-3)^2 \\times (-1)^5"
        },
        {
          numStr: "(-8) \\times 9 \\times (-2)",
          denStr: "(-6) \\times (-4)",
          numVal: 144, denVal: 24, qVal: 6,
          powerPart: "(-2)^3 \\times (-2)",
          powerVal: -8 * (-2),
          ans: 22,
          textExpr: "\\frac{(-8) \\times 9 \\times (-2)}{(-6) \\times (-4)} + (-2)^3 \\times (-2)"
        },
        {
          numStr: "(-10) \\times (-7) \\times (-3)",
          denStr: "(-5) \\times 6",
          numVal: -210, denVal: -30, qVal: 7,
          powerPart: "(-4)^2 \\times (-1)^3",
          powerVal: 16 * (-1),
          ans: 23,
          textExpr: "\\frac{(-10) \\times (-7) \\times (-3)}{(-5) \\times 6} - (-4)^2 \\times (-1)^3"
        }
      ];
      const cfg = this.randChoice(configs);

      return {
        chapterId: '4N1',
        tier: 4,
        title: "Défi 3ème : Chaîne complexe de relatifs avec puissances et quotient",
        statement: `Calculer la valeur exacte de l'expression suivante :\n$$A = ${cfg.textExpr}$$`,
        type: "exact",
        answer: String(cfg.ans),
        placeholder: `Ex: ${cfg.ans}`,
        hint1: `Étape 1 : Calcule séparément le numérateur et le dénominateur de la fraction.\nÉtape 2 : Fais attention aux puissances : $(-3)^2 = +9$ et $(-1)^5 = -1$.`,
        solution: `1. Fraction :\n$$\\text{Numérateur} = ${cfg.numStr} = ${cfg.numVal}$$\n$$\\text{Dénominateur} = ${cfg.denStr} = ${cfg.denVal}$$\n$$\\frac{${cfg.numVal}}{${cfg.denVal}} = ${cfg.qVal}$$\n2. Terme avec puissances :\n$$${cfg.powerPart} = ${cfg.powerVal}$$\n3. Résultat final :\n$$A = ${cfg.qVal} - (${cfg.powerVal}) = ${cfg.ans}$$`
      };
    }
  },

  // --- 4N2 : Fractions 4ème (multiplication, division, 4 opérations combinées) ---
  generate4N2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Produit deux fractions, entier et fraction, simplification croisée, 3 fractions)
      const subType = this.randChoice(['prod_two', 'prod_int_frac', 'cross_simplify', 'prod_three']);

      if (subType === 'prod_two') {
        const a = this.randInt(2, 5);
        const b = this.randInt(3, 7);
        const c = this.randInt(2, 5);
        const d = this.randInt(3, 7);
        const num = a * c;
        const den = b * d;
        const [sN, sD] = this.simplifyFraction(num, den);
        return {
          chapterId: '4N2',
          tier: 1,
          title: "Produit de deux fractions",
          statement: `Calculer sous forme de fraction irréductible :\n$$P = \\frac{${a}}{${b}} \\times \\frac{${c}}{${d}}$$`,
          type: 'exact',
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 2/5",
          hint1: "Pour multiplier deux fractions, multiplie les numérateurs entre eux et les dénominateurs entre eux.",
          solution: `$$P = \\frac{${a} \\times ${c}}{${b} \\times ${d}} = \\frac{${num}}{${den}} = ${this.formatFraction(num, den)}$$`
        };
      } else if (subType === 'prod_int_frac') {
        const k = this.randInt(2, 6);
        const a = this.randInt(1, 5);
        const b = this.randInt(3, 7);
        const num = k * a;
        const [sN, sD] = this.simplifyFraction(num, b);
        return {
          chapterId: '4N2',
          tier: 1,
          title: "Produit d'un entier et d'une fraction",
          statement: `Calculer sous forme de fraction irréductible :\n$$P = ${k} \\times \\frac{${a}}{${b}}$$`,
          type: 'exact',
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 4/3",
          hint1: `Écris $${k} = \\frac{${k}}{1}$ : multiplie l'entier directement par le numérateur.`,
          solution: `$$P = \\frac{${k} \\times ${a}}{${b}} = \\frac{${num}}{${b}} = ${this.formatFraction(num, b)}$$`
        };
      } else if (subType === 'cross_simplify') {
        const a = this.randInt(2, 5);
        const b = this.randChoice([3, 5, 7]);
        const c = this.randChoice([4, 6, 8]);
        const num = a * b;
        const den = b * c;
        const [sN, sD] = this.simplifyFraction(a, c);
        return {
          chapterId: '4N2',
          tier: 1,
          title: "Multiplication de fractions avec simplification croisée",
          statement: `Calculer sous forme de fraction irréductible :\n$$P = \\frac{${a}}{${b}} \\times \\frac{${b}}{${c}}$$`,
          type: 'exact',
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 1/2",
          hint1: `Remarque que le nombre $${b}$ apparaît à la fois au dénominateur et au numérateur : tu peux simplifier directement par $${b}$ !`,
          solution: `$$P = \\frac{${a} \\times ${b}}{${b} \\times ${c}} = \\frac{${a}}{${c}} = ${this.formatFraction(sN, sD)}$$`
        };
      } else {
        const a = 1;
        const b = 2;
        const c = 2;
        const d = 3;
        const e = 3;
        const f = this.randChoice([4, 5]);
        const [sN, sD] = this.simplifyFraction(1, f);
        return {
          chapterId: '4N2',
          tier: 1,
          title: "Produit de trois fractions en cascade",
          statement: `Calculer sous forme de fraction irréductible :\n$$P = \\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{${f}}$$`,
          type: 'exact',
          answer: `${sN}/${sD}`,
          placeholder: `Ex: 1/${f}`,
          hint1: "Simplifie les 2 et les 3 qui apparaissent à la fois en haut et en bas avant de calculer.",
          solution: `En simplifiant les facteurs communs 2 et 3 :\n$$P = \\frac{1 \\times \\cancel{2} \\times \\cancel{3}}{\\cancel{2} \\times \\cancel{3} \\times ${f}} = \\frac{1}{${f}}$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Division fractions, inverse, entier / fraction, fraction / entier)
      const subType = this.randChoice(['div_two', 'inverse_def', 'div_int_frac', 'div_frac_int']);

      if (subType === 'div_two') {
        const a = this.randInt(2, 6);
        const b = this.randInt(3, 7);
        const c = this.randInt(2, 6);
        const d = this.randInt(3, 7);
        const num = a * d;
        const den = b * c;
        const [sN, sD] = this.simplifyFraction(num, den);
        return {
          chapterId: '4N2',
          tier: 2,
          title: "Division de fractions (Multiplier par l'inverse)",
          statement: `Calculer sous forme de fraction irréductible :\n$$Q = \\frac{${a}}{${b}} \\div \\frac{${c}}{${d}}$$`,
          type: 'exact',
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 3/4",
          hint1: `Diviser par une fraction revient à multiplier par son inverse : $\\frac{${a}}{${b}} \\times \\frac{${d}}{${c}}$.`,
          solution: `$$Q = \\frac{${a}}{${b}} \\times \\frac{${d}}{${c}} = \\frac{${a} \\times ${d}}{${b} \\times ${c}} = \\frac{${num}}{${den}} = ${this.formatFraction(num, den)}$$`
        };
      } else if (subType === 'inverse_def') {
        const a = this.randInt(2, 9);
        const b = this.randInt(2, 9, [a]);
        return {
          chapterId: '4N2',
          tier: 2,
          title: "Inverse d'une fraction",
          statement: `Quel est l'inverse de la fraction $\\frac{${a}}{${b}}$ ? (Donner sous la forme a/b)`,
          type: 'exact',
          answer: `${b}/${a}`,
          placeholder: `Ex: ${b}/${a}`,
          hint1: "L'inverse d'une fraction non nulle $\\frac{a}{b}$ est $\\frac{b}{a}$.",
          solution: `L'inverse de $\\frac{${a}}{${b}}$ est :\n$$\\frac{1}{\\frac{${a}}{${b}}} = \\frac{${b}}{${a}}$$`
        };
      } else if (subType === 'div_int_frac') {
        const k = this.randInt(2, 5);
        const a = this.randInt(1, 4);
        const b = this.randInt(3, 7);
        const num = k * b;
        const den = a;
        const [sN, sD] = this.simplifyFraction(num, den);
        return {
          chapterId: '4N2',
          tier: 2,
          title: "Division d'un entier par une fraction",
          statement: `Calculer sous forme de fraction irréductible :\n$$D = ${k} \\div \\frac{${a}}{${b}}$$`,
          type: 'exact',
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 6/5",
          hint1: `Diviser par $\\frac{${a}}{${b}}$ revient à multiplier par son inverse $\\frac{${b}}{${a}}$ : $${k} \\times \\frac{${b}}{${a}}$.`,
          solution: `$$D = ${k} \\times \\frac{${b}}{${a}} = \\frac{${k * b}}{${a}} = ${this.formatFraction(num, den)}$$`
        };
      } else {
        const a = this.randInt(2, 6);
        const b = this.randInt(3, 7);
        const k = this.randInt(2, 5);
        const num = a;
        const den = b * k;
        const [sN, sD] = this.simplifyFraction(num, den);
        return {
          chapterId: '4N2',
          tier: 2,
          title: "Division d'une fraction par un entier",
          statement: `Calculer sous forme de fraction irréductible :\n$$D = \\frac{${a}}{${b}} \\div ${k}$$`,
          type: 'exact',
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 2/15",
          hint1: `Diviser par $${k}$ revient à multiplier par son inverse $\\frac{1}{${k}}$ : $\\frac{${a}}{${b}} \\times \\frac{1}{${k}}$.`,
          solution: `$$D = \\frac{${a}}{${b}} \\times \\frac{1}{${k}} = \\frac{${a}}{${b * k}} = ${this.formatFraction(num, den)}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (Addition/Soustraction et multiplication combinées, parenthèses)
      const subType = this.randChoice(['add_mult', 'sub_mult', 'par_mult', 'div_add']);

      if (subType === 'add_mult') {
        const a = this.randInt(1, 4);
        const b = this.randChoice([2, 3, 5]);
        const c = this.randInt(1, 3);
        const d = this.randChoice([2, 4]);
        const e = this.randInt(1, 3);
        const f = this.randChoice([3, 5]);

        const prodNum = c * e;
        const prodDen = d * f;
        const numTotal = a * prodDen + prodNum * b;
        const denTotal = b * prodDen;
        const [sN, sD] = this.simplifyFraction(numTotal, denTotal);

        return {
          chapterId: '4N2',
          tier: 3,
          title: "Opérations combinées : addition et produit",
          statement: `Calculer sous forme de fraction irréductible :\n$$A = \\frac{${a}}{${b}} + \\frac{${c}}{${d}} \\times \\frac{${e}}{${f}}$$`,
          type: 'exact',
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 7/10",
          hint1: `La multiplication est prioritaire : calcule d'abord $\\frac{${c}}{${d}} \\times \\frac{${e}}{${f}} = \\frac{${prodNum}}{${prodDen}}$, puis additionne avec $\\frac{${a}}{${b}}$.`,
          solution: `1. Multiplication prioritaire :\n$$\\frac{${c}}{${d}} \\times \\frac{${e}}{${f}} = \\frac{${prodNum}}{${prodDen}}$$\n2. Addition :\n$$A = \\frac{${a}}{${b}} + \\frac{${prodNum}}{${prodDen}} = \\frac{${numTotal}}{${denTotal}} = ${this.formatFraction(numTotal, denTotal)}$$`
        };
      } else if (subType === 'sub_mult') {
        const a = this.randInt(2, 5);
        const b = this.randChoice([2, 3]);
        const c = 1;
        const d = this.randChoice([2, 3]);
        const e = 1;
        const f = this.randChoice([4, 5]);

        const prodNum = c * e;
        const prodDen = d * f;
        const numTotal = a * prodDen - prodNum * b;
        const denTotal = b * prodDen;
        const [sN, sD] = this.simplifyFraction(numTotal, denTotal);

        return {
          chapterId: '4N2',
          tier: 3,
          title: "Opérations combinées : soustraction et produit",
          statement: `Calculer sous forme de fraction irréductible :\n$$B = \\frac{${a}}{${b}} - \\frac{${c}}{${d}} \\times \\frac{${e}}{${f}}$$`,
          type: 'exact',
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 11/12",
          hint1: `Calcule d'abord le produit prioritaire $\\frac{${c}}{${d}} \\times \\frac{${e}}{${f}}$, puis soustrais.`,
          solution: `1. Produit : $\\frac{${c}}{${d}} \\times \\frac{${e}}{${f}} = \\frac{${prodNum}}{${prodDen}}$.\n2. Différence :\n$$B = \\frac{${a}}{${b}} - \\frac{${prodNum}}{${prodDen}} = \\frac{${numTotal}}{${denTotal}} = ${this.formatFraction(numTotal, denTotal)}$$`
        };
      } else if (subType === 'par_mult') {
        const a = this.randInt(1, 3);
        const b = this.randChoice([2, 3, 4]);
        const c = this.randInt(1, 3);
        const sumNum = a + c;
        const e = this.randInt(1, 4);
        const f = this.randChoice([3, 5, 7]);
        const numTotal = sumNum * e;
        const denTotal = b * f;
        const [sN, sD] = this.simplifyFraction(numTotal, denTotal);

        return {
          chapterId: '4N2',
          tier: 3,
          title: "Opérations combinées avec parenthèses prioritaires",
          statement: `Calculer sous forme de fraction irréductible :\n$$C = \\left(\\frac{${a}}{${b}} + \\frac{${c}}{${b}}\\right) \\times \\frac{${e}}{${f}}$$`,
          type: 'exact',
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 4/5",
          hint1: `Les parenthèses sont prioritaires : calcule d'abord $\\frac{${a}}{${b}} + \\frac{${c}}{${b}} = \\frac{${sumNum}}{${b}}$, puis multiplie par $\\frac{${e}}{${f}}$.`,
          solution: `1. Parenthèse prioritaire :\n$$\\frac{${a}}{${b}} + \\frac{${c}}{${b}} = \\frac{${sumNum}}{${b}}$$\n2. Produit :\n$$C = \\frac{${sumNum}}{${b}} \\times \\frac{${e}}{${f}} = \\frac{${numTotal}}{${denTotal}} = ${this.formatFraction(numTotal, denTotal)}$$`
        };
      } else {
        const a = this.randInt(1, 3);
        const b = 2;
        const c = 3;
        const d = 4;
        const divNum = a * d;
        const divDen = b * c;
        const e = 1;
        const f = 3;
        const [sDivN, sDivD] = this.simplifyFraction(divNum, divDen);
        const numTotal = sDivN * f + e * sDivD;
        const denTotal = sDivD * f;
        const [sN, sD] = this.simplifyFraction(numTotal, denTotal);

        return {
          chapterId: '4N2',
          tier: 3,
          title: "Opérations combinées : division puis addition",
          statement: `Calculer sous forme de fraction irréductible :\n$$D = \\frac{${a}}{${b}} \\div \\frac{${c}}{${d}} + \\frac{${e}}{${f}}$$`,
          type: 'exact',
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 1",
          hint1: `La division est prioritaire : transforme-la en multiplication par l'inverse $\\frac{${a}}{${b}} \\times \\frac{${d}}{${c}}$, puis additionne.`,
          solution: `1. Division prioritaire :\n$$\\frac{${a}}{${b}} \\div \\frac{${c}}{${d}} = \\frac{${a}}{${b}} \\times \\frac{${d}}{${c}} = \\frac{${divNum}}{${divDen}} = ${this.formatFraction(sDivN, sDivD)}$$\n2. Somme :\n$$D = ${this.formatFraction(sDivN, sDivD)} + \\frac{${e}}{${f}} = ${this.formatFraction(numTotal, denTotal)}$$`
        };
      }
    } else {
      // Palier 4 : Défi 3ème (Fraction à étages complexe : quotient de deux parenthèses)
      // ((a/b) - (c/d)) / ((e/f) + (g/h))
      const configs = [
        {
          a: 2, b: 3, c: 1, d: 4, // 2/3 - 1/4 = 5/12
          e: 5, f: 6, g: 1, h: 2, // 5/6 + 1/2 = 8/6 = 4/3
          // (5/12) / (4/3) = (5/12) * (3/4) = 15/48 = 5/16
          ansNum: 5, ansDen: 16
        },
        {
          a: 3, b: 2, c: 1, d: 5, // 3/2 - 1/5 = 13/10
          e: 1, f: 4, g: 2, h: 5, // 1/4 + 2/5 = 13/20
          // (13/10) / (13/20) = (13/10) * (20/13) = 2
          ansNum: 2, ansDen: 1
        },
        {
          a: 4, b: 5, c: 1, d: 2, // 4/5 - 1/2 = 3/10
          e: 2, f: 3, g: 1, h: 6, // 2/3 + 1/6 = 5/6
          // (3/10) / (5/6) = (3/10) * (6/5) = 18/50 = 9/25
          ansNum: 9, ansDen: 25
        }
      ];
      const cfg = this.randChoice(configs);

      return {
        chapterId: '4N2',
        tier: 4,
        title: "Défi 3ème : Fraction à étages complexe (Quotient composé)",
        statement: `Calculer la valeur exacte sous forme de fraction irréductible de :\n$$F = \\frac{\\frac{${cfg.a}}{${cfg.b}} - \\frac{${cfg.c}}{${cfg.d}}}{\\frac{${cfg.e}}{${cfg.f}} + \\frac{${cfg.g}}{${cfg.h}}}$$`,
        type: 'exact',
        answer: cfg.ansDen === 1 ? String(cfg.ansNum) : `${cfg.ansNum}/${cfg.ansDen}`,
        placeholder: "Ex: 5/16",
        hint1: "Calcule séparément le numérateur du grand trait de fraction, puis le dénominateur, et enfin effectue la division.",
        solution: `1. Calcul du numérateur :\n$$N = \\frac{${cfg.a}}{${cfg.b}} - \\frac{${cfg.c}}{${cfg.d}} = \\frac{${cfg.a * cfg.d} - ${cfg.c * cfg.b}}{${cfg.b * cfg.d}} = \\frac{${cfg.a * cfg.d - cfg.c * cfg.b}}{${cfg.b * cfg.d}}$$\n2. Calcul du dénominateur :\n$$D = \\frac{${cfg.e}}{${cfg.f}} + \\frac{${cfg.g}}{${cfg.h}} = \\frac{${cfg.e * cfg.h} + ${cfg.g * cfg.f}}{${cfg.f * cfg.h}} = \\frac{${cfg.e * cfg.h + cfg.g * cfg.f}}{${cfg.f * cfg.h}}$$\n3. Division finale :\n$$F = N \\div D = ${cfg.ansDen === 1 ? cfg.ansNum : `${cfg.ansNum}/${cfg.ansDen}`}$$`
      };
    }
  },

  // --- 4N3 : Puissances de 10 et puissances d'un nombre ---
  generate4N3(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Écriture décimale d'une puissance de 10 ou d'un entier)
      const subType = this.randChoice(['power_of_10', 'power_small_int', 'power_neg_base', 'power_one_zero', 'count_zeros']);

      if (subType === 'power_of_10') {
        const exp = this.randInt(2, 5);
        const isPos = Math.random() > 0.4;
        const actualExp = isPos ? exp : -exp;
        const ans = Math.pow(10, actualExp);
        const ansStr = isPos ? String(ans) : ans.toFixed(exp);

        return {
          chapterId: '4N3',
          tier: 1,
          title: "Écriture décimale d'une puissance de 10",
          statement: `Écrire sous forme décimale le nombre suivant :\n$$N = 10^{${actualExp}}$$`,
          type: 'exact',
          answer: ansStr,
          placeholder: isPos ? "Ex: 1000" : "Ex: 0.01",
          hint1: actualExp > 0 ? `Un 1 suivi de ${actualExp} zéros.` : `Le chiffre 1 placé au rang ${Math.abs(actualExp)} après la virgule.`,
          solution: `$$10^{${actualExp}} = ${ansStr}$$`
        };
      } else if (subType === 'power_small_int') {
        const cases = [
          { a: 2, n: 3, ans: 8 },
          { a: 2, n: 4, ans: 16 },
          { a: 2, n: 5, ans: 32 },
          { a: 3, n: 2, ans: 9 },
          { a: 3, n: 3, ans: 27 },
          { a: 3, n: 4, ans: 81 },
          { a: 4, n: 2, ans: 16 },
          { a: 4, n: 3, ans: 64 },
          { a: 5, n: 2, ans: 25 },
          { a: 5, n: 3, ans: 125 }
        ];
        const c = this.randChoice(cases);
        return {
          chapterId: '4N3',
          tier: 1,
          title: "Puissance d'un nombre entier",
          statement: `Calculer la valeur du nombre suivant :\n$$A = ${c.a}^{${c.n}}$$`,
          type: 'exact',
          answer: String(c.ans),
          placeholder: `Ex: ${c.ans}`,
          hint1: `$${c.a}^{${c.n}}$ est le produit de ${c.n} facteurs tous égaux à ${c.a}.`,
          solution: `$$${c.a}^{${c.n}} = ${Array(c.n).fill(c.a).join(' \\times ')} = ${c.ans}$$`
        };
      } else if (subType === 'power_neg_base') {
        const cases = [
          { a: -2, n: 3, ans: -8 },
          { a: -2, n: 4, ans: 16 },
          { a: -3, n: 2, ans: 9 },
          { a: -3, n: 3, ans: -27 },
          { a: -5, n: 2, ans: 25 },
          { a: -4, n: 2, ans: 16 },
          { a: -10, n: 3, ans: -1000 }
        ];
        const c = this.randChoice(cases);
        const isOdd = c.n % 2 !== 0;
        return {
          chapterId: '4N3',
          tier: 1,
          title: "Puissance d'un nombre négatif",
          statement: `Calculer la valeur de :\n$$B = (${c.a})^{${c.n}}$$`,
          type: 'exact',
          answer: String(c.ans),
          placeholder: `Ex: ${c.ans}`,
          hint1: `L'exposant est ${c.n} (${isOdd ? 'impair' : 'pair'}), donc le résultat est ${isOdd ? 'négatif' : 'positif'}.`,
          solution: `$$(${c.a})^{${c.n}} = ${Array(c.n).fill(`(${c.a})`).join(' \\times ')} = ${c.ans}$$`
        };
      } else if (subType === 'power_one_zero') {
        const a = this.randInt(3, 19);
        const isZero = Math.random() > 0.5;
        const exp = isZero ? 0 : 1;
        const ans = isZero ? 1 : a;
        return {
          chapterId: '4N3',
          tier: 1,
          title: "Exposant 0 ou 1",
          statement: `Calculer la valeur de :\n$$C = ${a}^{${exp}}$$`,
          type: 'exact',
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: isZero ? "Règle : pour tout nombre non nul $a$, on a $a^0 = 1$." : "Règle : pour tout nombre $a$, on a $a^1 = a$.",
          solution: `$$${a}^{${exp}} = ${ans}$$`
        };
      } else {
        const exp = this.randInt(3, 8);
        return {
          chapterId: '4N3',
          tier: 1,
          title: "Nombre de zéros d'une puissance de 10",
          statement: `Combien de zéros comporte l'écriture décimale du nombre $10^{${exp}}$ ?`,
          type: 'exact',
          answer: String(exp),
          placeholder: `Ex: ${exp}`,
          hint1: "Pour $n > 0$, $10^n$ s'écrit avec un 1 suivi de $n$ zéros.",
          solution: `$$10^{${exp}} = 1\\underbrace{00\\dots0}_{${exp}\\text{ zéros}}$$ Il y a donc **${exp}** zéros.`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Formules sur les puissances)
      const subType = this.randChoice(['prod_10', 'quot_10', 'pow_pow_10', 'prod_quot_mixed', 'same_exp_prod']);

      if (subType === 'prod_10') {
        const a = this.randInt(-5, 6);
        const b = this.randInt(-5, 6, [0]);
        const ansExp = a + b;
        return {
          chapterId: '4N3',
          tier: 2,
          title: "Produit de puissances de 10",
          statement: `Écrire sous la forme d'une seule puissance de 10 : $10^n$.\n**Donner la valeur de l'exposant $n$** pour :\n$$10^{${a}} \\times 10^{${b}}$$`,
          type: 'exact',
          answer: String(ansExp),
          placeholder: `Ex: ${ansExp}`,
          hint1: "Formule : $10^a \\times 10^b = 10^{a + b}$.",
          solution: `$$10^{${a}} \\times 10^{${b}} = 10^{${a} + (${b})} = 10^{${ansExp}} \\implies n = ${ansExp}$$`
        };
      } else if (subType === 'quot_10') {
        const a = this.randInt(-5, 6);
        const b = this.randInt(-5, 6, [0]);
        const ansExp = a - b;
        return {
          chapterId: '4N3',
          tier: 2,
          title: "Quotient de puissances de 10",
          statement: `Écrire sous la forme d'une seule puissance de 10 : $10^n$.\n**Donner la valeur de l'exposant $n$** pour :\n$$\\frac{10^{${a}}}{10^{${b}}}$$`,
          type: 'exact',
          answer: String(ansExp),
          placeholder: `Ex: ${ansExp}`,
          hint1: "Formule : $\\frac{10^a}{10^b} = 10^{a - b}$.",
          solution: `$$\\frac{10^{${a}}}{10^{${b}}} = 10^{${a} - (${b})} = 10^{${ansExp}} \\implies n = ${ansExp}$$`
        };
      } else if (subType === 'pow_pow_10') {
        const a = this.randInt(2, 5);
        const b = this.randInt(2, 4);
        const sign = Math.random() > 0.5 ? 1 : -1;
        const actualA = a * sign;
        const ansExp = actualA * b;
        return {
          chapterId: '4N3',
          tier: 2,
          title: "Puissance d'une puissance de 10",
          statement: `Écrire sous la forme $10^n$.\n**Donner la valeur de l'exposant $n$** pour :\n$$(10^{${actualA}})^{${b}}$$`,
          type: 'exact',
          answer: String(ansExp),
          placeholder: `Ex: ${ansExp}`,
          hint1: "Formule : $(10^a)^b = 10^{a \\times b}$.",
          solution: `$$(10^{${actualA}})^{${b}} = 10^{${actualA} \\times ${b}} = 10^{${ansExp}} \\implies n = ${ansExp}$$`
        };
      } else if (subType === 'prod_quot_mixed') {
        const a = this.randInt(2, 6);
        const b = this.randInt(2, 5);
        const c = this.randInt(1, 4);
        const ansExp = (a + b) - c;
        return {
          chapterId: '4N3',
          tier: 2,
          title: "Calcul combiné de puissances de 10",
          statement: `Écrire sous la forme $10^n$ et donner la valeur de l'exposant $n$ pour :\n$$\\frac{10^{${a}} \\times 10^{${b}}}{10^{${c}}}$$`,
          type: 'exact',
          answer: String(ansExp),
          placeholder: `Ex: ${ansExp}`,
          hint1: `Numérateur : $10^{${a} + ${b}} = 10^{${a + b}}$. Puis soustrais l'exposant du dénominateur.`,
          solution: `$$\\frac{10^{${a}} \\times 10^{${b}}}{10^{${c}}} = \\frac{10^{${a + b}}}{10^{${c}}} = 10^{${a + b} - ${c}} = 10^{${ansExp}} \\implies n = ${ansExp}$$`
        };
      } else {
        const n = this.randInt(2, 5);
        return {
          chapterId: '4N3',
          tier: 2,
          title: "Produit de même exposant $a^n \\times b^n$",
          statement: `Écrire sous la forme d'une puissance de 10 : $10^k$.\n**Quelle est la valeur de l'exposant $k$** pour le produit :\n$$2^{${n}} \\times 5^{${n}}$$`,
          type: 'exact',
          answer: String(n),
          placeholder: `Ex: ${n}`,
          hint1: "Formule : $a^n \\times b^n = (a \\times b)^n$. Or $2 \\times 5 = 10$.",
          solution: `$$2^{${n}} \\times 5^{${n}} = (2 \\times 5)^{${n}} = 10^{${n}} \\implies k = ${n}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (Notation scientifique)
      const subType = this.randChoice(['large_sci', 'small_sci', 'dec_from_sci']);

      if (subType === 'large_sci') {
        const a = this.randInt(2, 9);
        const exp = this.randChoice([3, 4, 5, 6]);
        const val = (a * Math.pow(10, exp)).toLocaleString('fr-FR');
        return {
          chapterId: '4N3',
          tier: 3,
          title: "Notation scientifique d'un grand nombre",
          statement: `Donner l'écriture scientifique du nombre $N = ${val}$.\nQuelle est la valeur de l'exposant $k$ dans l'écriture $${a} \\times 10^k$ ?`,
          type: 'exact',
          answer: String(exp),
          placeholder: `Ex: ${exp}`,
          hint1: "La notation scientifique s'écrit $a \\times 10^k$ avec $1 \\le a < 10$. Compte de combien de rangs on décale la virgule.",
          solution: `$$${val} = ${a} \\times 10^{${exp}} \\implies k = ${exp}$$`
        };
      } else if (subType === 'small_sci') {
        const a = this.randInt(2, 9);
        const exp = this.randChoice([-2, -3, -4, -5]);
        const val = (a * Math.pow(10, exp)).toFixed(Math.abs(exp));
        return {
          chapterId: '4N3',
          tier: 3,
          title: "Notation scientifique d'un petit nombre décimal",
          statement: `Donner l'écriture scientifique du nombre $M = ${val}$.\nQuelle est la valeur de l'exposant $k$ dans l'écriture $${a} \\times 10^k$ ?`,
          type: 'exact',
          answer: String(exp),
          placeholder: `Ex: ${exp}`,
          hint1: "Déplace la virgule vers la droite jusqu'au premier chiffre non nul. L'exposant sera négatif.",
          solution: `$$${val} = ${a} \\times 10^{${exp}} \\implies k = ${exp}$$`
        };
      } else {
        const a = this.randInt(2, 8);
        const exp = this.randInt(2, 4);
        const ans = a * Math.pow(10, exp);
        return {
          chapterId: '4N3',
          tier: 3,
          title: "Écriture décimale à partir de la notation scientifique",
          statement: `Écrire sous forme décimale entière le nombre :\n$$S = ${a} \\times 10^{${exp}}$$`,
          type: 'exact',
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Multiplie $${a}$ par $10^{${exp}} = ${Math.pow(10, exp)}$.`,
          solution: `$$${a} \\times 10^{${exp}} = ${a} \\times ${Math.pow(10, exp)} = ${ans}$$`
        };
      }
    } else {
      // Palier 4 : Défi 3ème (Calcul lourd de quotient type Brevet / Seconde)
      // A = (4 * 10^7 * 15 * 10^-3) / (6 * (10^2)^3)
      // = (60 * 10^4) / (6 * 10^6) = 10 * 10^-2 = 10^-1 = 0.1
      const configs = [
        {
          expr: "\\frac{4 \\times 10^7 \\times 15 \\times 10^{-3}}{6 \\times (10^2)^3}",
          calcNum: "4 \\times 15 = 60,\\quad 10^7 \\times 10^{-3} = 10^4",
          calcDen: "6 \\times 10^{2 \\times 3} = 6 \\times 10^6",
          divCoeff: "60 / 6 = 10",
          divExp: "10^4 / 10^6 = 10^{-2}",
          finalSci: "1 \\times 10^{-1}",
          ans: "0.1",
          ansSciExp: -1
        },
        {
          expr: "\\frac{3 \\times 10^5 \\times 8 \\times 10^{-2}}{12 \\times (10^3)^2}",
          calcNum: "3 \\times 8 = 24,\\quad 10^5 \\times 10^{-2} = 10^3",
          calcDen: "12 \\times 10^6",
          divCoeff: "24 / 12 = 2",
          divExp: "10^3 / 10^6 = 10^{-3}",
          finalSci: "2 \\times 10^{-3}",
          ans: "0.002",
          ansSciExp: -3
        },
        {
          expr: "\\frac{5 \\times 10^4 \\times 12 \\times 10^3}{2 \\times (10^{-1})^2}",
          calcNum: "5 \\times 12 = 60,\\quad 10^4 \\times 10^3 = 10^7",
          calcDen: "2 \\times 10^{-2}",
          divCoeff: "60 / 2 = 30",
          divExp: "10^7 / 10^{-2} = 10^9",
          finalSci: "3 \\times 10^{10}",
          ans: "30000000000",
          ansSciExp: 10
        }
      ];
      const cfg = this.randChoice(configs);

      return {
        chapterId: '4N3',
        tier: 4,
        title: "Défi 3ème : Grand quotient de puissances (Notation scientifique)",
        statement: `On donne l'expression suivante :\n$$C = ${cfg.expr}$$\n\nL'écriture scientifique de $C$ est de la forme $a \\times 10^k$ avec $1 \\le a < 10$.\n**Donner la valeur de l'exposant entier $k$.**`,
        type: 'exact',
        answer: String(cfg.ansSciExp),
        placeholder: `Ex: ${cfg.ansSciExp}`,
        hint1: `1. Regroupe les nombres décimaux d'un côté et les puissances de 10 de l'autre.\n2. Utilise $(10^r)^s = 10^{r \\times s}$.\n3. Ajuste la notation finale pour que le premier nombre soit entre 1 et 10.`,
        solution: `1. Numérateur : $${cfg.calcNum}$\n2. Dénominateur : $${cfg.calcDen}$\n3. Quotient :\n$$C = \\frac{${cfg.calcNum.split(',')[0].trim()}}{${cfg.calcDen.split('\\times')[0].trim()}} \\times \\frac{10^{\\dots}}{10^{\\dots}} = ${cfg.divCoeff} \\times ${cfg.divExp} = ${cfg.finalSci}$$\nL'exposant est donc :\n$$k = ${cfg.ansSciExp}$$`
      };
    }
  },

  // --- 4N4 : Racines carrées & carrés parfaits ---
  generate4N4(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Carré d'un entier, dizaine, négatif, décimal)
      const subType = this.randChoice(['square_int', 'square_tens', 'square_neg', 'square_decimal', 'square_root_prop']);

      if (subType === 'square_int') {
        const a = this.randInt(3, 15);
        return {
          chapterId: '4N4',
          tier: 1,
          title: "Carré d'un nombre entier",
          statement: `Calculer le carré du nombre $${a}$ :\n$$C = ${a}^2$$`,
          type: "exact",
          answer: String(a * a),
          placeholder: `Ex: ${a * a}`,
          hint1: `Le carré d'un nombre est le produit de ce nombre par lui-même : $${a} \\times ${a}$.`,
          solution: `$$${a}^2 = ${a} \\times ${a} = ${a * a}$$`
        };
      } else if (subType === 'square_tens') {
        const k = this.randChoice([20, 30, 40, 50, 60, 70, 80, 90]);
        return {
          chapterId: '4N4',
          tier: 1,
          title: "Carré d'une dizaine entière",
          statement: `Calculer le carré du nombre $${k}$ :\n$$D = ${k}^2$$`,
          type: "exact",
          answer: String(k * k),
          placeholder: `Ex: ${k * k}`,
          hint1: `Calcule $(${k / 10})^2$ puis ajoute deux zéros ($10^2 = 100$).`,
          solution: `$$${k}^2 = (${k / 10} \\times 10)^2 = ${k / 10}^2 \\times 100 = ${(k / 10) ** 2} \\times 100 = ${k * k}$$`
        };
      } else if (subType === 'square_neg') {
        const a = this.randInt(3, 12);
        return {
          chapterId: '4N4',
          tier: 1,
          title: "Carré d'un nombre négatif",
          statement: `Calculer le nombre suivant (attention aux parenthèses) :\n$$N = (-${a})^2$$`,
          type: "exact",
          answer: String(a * a),
          placeholder: `Ex: ${a * a}`,
          hint1: "Le carré d'un nombre réel est toujours positif : $(-a)^2 = (-a) \\times (-a) = +a^2$.",
          solution: `$$(-${a})^2 = (-${a}) \\times (-${a}) = +${a * a}$$`
        };
      } else if (subType === 'square_decimal') {
        const cases = [
          { val: 0.2, ans: 0.04 },
          { val: 0.3, ans: 0.09 },
          { val: 0.4, ans: 0.16 },
          { val: 0.5, ans: 0.25 },
          { val: 0.6, ans: 0.36 },
          { val: 0.7, ans: 0.49 },
          { val: 0.8, ans: 0.64 },
          { val: 0.9, ans: 0.81 },
          { val: 1.1, ans: 1.21 },
          { val: 1.2, ans: 1.44 }
        ];
        const c = this.randChoice(cases);
        return {
          chapterId: '4N4',
          tier: 1,
          title: "Carré d'un nombre décimal",
          statement: `Calculer la valeur exacte de :\n$$M = (${c.val})^2$$`,
          type: "exact",
          answer: String(c.ans),
          placeholder: `Ex: ${c.ans}`,
          hint1: `Multiplie $${c.val} \\times ${c.val}$. Compte le nombre de décimales (2 chiffres après la virgule).`,
          solution: `$$(${c.val})^2 = ${c.val} \\times ${c.val} = ${c.ans}$$`
        };
      } else {
        const a = this.randInt(7, 35);
        return {
          chapterId: '4N4',
          tier: 1,
          title: "Propriété du carré d'une racine carrée",
          statement: `Calculer la valeur exacte du nombre suivant :\n$$P = (\\sqrt{${a}})^2$$`,
          type: "exact",
          answer: String(a),
          placeholder: `Ex: ${a}`,
          hint1: "Pour tout nombre positif $a$, la racine carrée $\\sqrt{a}$ au carré redonne $a$ : $(\\sqrt{a})^2 = a$.",
          solution: `$$(\\sqrt{${a}})^2 = ${a}$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Racine carrée exacte, dizaines, somme pythagoricienne, équation)
      const subType = this.randChoice(['exact_sqrt', 'sqrt_tens', 'sqrt_pythagorean', 'sqrt_equation', 'sqrt_framing']);

      if (subType === 'exact_sqrt') {
        const roots = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        const r = this.randChoice(roots);
        const sq = r * r;
        return {
          chapterId: '4N4',
          tier: 2,
          title: "Racine carrée exacte",
          statement: `Calculer la racine carrée exacte suivante :\n$$R = \\sqrt{${sq}}$$`,
          type: "exact",
          answer: String(r),
          placeholder: `Ex: ${r}`,
          hint1: `Trouve le nombre positif dont le carré vaut ${sq} : $?^2 = ${sq}$.`,
          solution: `Comme $${r}^2 = ${sq}$, on a :\n$$\\sqrt{${sq}} = ${r}$$`
        };
      } else if (subType === 'sqrt_tens') {
        const cases = [
          { sq: 100, ans: 10 },
          { sq: 400, ans: 20 },
          { sq: 900, ans: 30 },
          { sq: 1600, ans: 40 },
          { sq: 2500, ans: 50 },
          { sq: 3600, ans: 60 },
          { sq: 4900, ans: 70 },
          { sq: 6400, ans: 80 },
          { sq: 8100, ans: 90 }
        ];
        const c = this.randChoice(cases);
        return {
          chapterId: '4N4',
          tier: 2,
          title: "Racine carrée d'une centaine entière",
          statement: `Calculer la racine carrée exacte :\n$$K = \\sqrt{${c.sq}}$$`,
          type: "exact",
          answer: String(c.ans),
          placeholder: `Ex: ${c.ans}`,
          hint1: `Pense au nombre terminé par un zéro dont le carré est ${c.sq}.`,
          solution: `Comme $${c.ans}^2 = ${c.sq}$, on a :\n$$\\sqrt{${c.sq}} = ${c.ans}$$`
        };
      } else if (subType === 'sqrt_pythagorean') {
        const triplets = [
          { a: 3, b: 4, c: 5 },
          { a: 6, b: 8, c: 10 },
          { a: 5, b: 12, c: 13 },
          { a: 8, b: 15, c: 17 },
          { a: 9, b: 12, c: 15 }
        ];
        const trip = this.randChoice(triplets);
        return {
          chapterId: '4N4',
          tier: 2,
          title: "Racine carrée d'une somme de carrés",
          statement: `Calculer la valeur exacte de l'expression :\n$$H = \\sqrt{${trip.a}^2 + ${trip.b}^2}$$`,
          type: "exact",
          answer: String(trip.c),
          placeholder: `Ex: ${trip.c}`,
          hint1: `Calcule d'abord chaque carré sous la racine : $${trip.a}^2 = ${trip.a * trip.a}$ et $${trip.b}^2 = ${trip.b * trip.b}$, puis additionne.`,
          solution: `$$H = \\sqrt{${trip.a * trip.a} + ${trip.b * trip.b}} = \\sqrt{${trip.c * trip.c}} = ${trip.c}$$`
        };
      } else if (subType === 'sqrt_equation') {
        const r = this.randInt(4, 14);
        const sq = r * r;
        return {
          chapterId: '4N4',
          tier: 2,
          title: "Solution positive d'une équation $x^2 = a$",
          statement: `On considère l'équation $x^2 = ${sq}$.\n**Quelle est la solution positive de cette équation ?**`,
          type: "exact",
          answer: String(r),
          placeholder: `Ex: ${r}`,
          hint1: `La solution positive de $x^2 = a$ est $x = \\sqrt{a}$.`,
          solution: `L'équation $x^2 = ${sq}$ admet pour solution positive $x = \\sqrt{${sq}} = ${r}$ (et pour solution négative $x = -${r}$).`
        };
      } else {
        const cases = [
          { val: 10, low: 3, high: 4 },
          { val: 19, low: 4, high: 5 },
          { val: 30, low: 5, high: 6 },
          { val: 50, low: 7, high: 8 },
          { val: 70, low: 8, high: 9 }
        ];
        const c = this.randChoice(cases);
        const correct = `Entre ${c.low} et ${c.high}`;
        const wrong1 = `Entre ${c.low - 1} et ${c.low}`;
        const wrong2 = `Entre ${c.high} et ${c.high + 1}`;
        const wrong3 = `Entre ${c.low + 2} et ${c.high + 2}`;
        const opts = this.shuffle([correct, wrong1, wrong2, wrong3]);
        return {
          chapterId: '4N4',
          tier: 2,
          title: "Encadrement d'une racine carrée",
          statement: `Entre quels entiers consécutifs se situe le nombre $\\sqrt{${c.val}}$ ?`,
          type: "mcq",
          options: opts,
          answer: correct,
          correctIndex: opts.indexOf(correct),
          hint1: `Trouve les carrés parfaits encadrant ${c.val} : $${c.low}^2 = ${c.low*c.low} < ${c.val} < ${c.high*c.high} = ${c.high}^2$.`,
          solution: `Comme $${c.low}^2 = ${c.low*c.low} < ${c.val} < ${c.high*c.high} = ${c.high}^2$, on en déduit que $${c.low} < \\sqrt{${c.val}} < ${c.high}$.`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (Somme/différence, produit, quotient de racines carrées)
      const subType = this.randChoice(['sum_diff', 'mult_roots', 'quot_roots', 'diff_under_root']);

      if (subType === 'sum_diff') {
        const a = this.randChoice([3, 4, 5, 6]);
        const b = this.randChoice([7, 8, 9, 10]);
        const c = this.randChoice([2, 3]);
        const ans = a + b - c;

        return {
          chapterId: '4N4',
          tier: 3,
          title: "Somme et différence de racines carrées",
          statement: `Calculer la valeur exacte de l'expression :\n$$S = \\sqrt{${a*a}} + \\sqrt{${b*b}} - \\sqrt{${c*c}}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Calcule séparément chaque racine carrée : $\\sqrt{${a*a}} = ${a}$, $\\sqrt{${b*b}} = ${b}$, $\\sqrt{${c*c}} = ${c}$.`,
          solution: `$$S = ${a} + ${b} - ${c} = ${ans}$$`
        };
      } else if (subType === 'mult_roots') {
        const pairs = [
          { a: 2, b: 8, prod: 16, root: 4 },
          { a: 3, b: 12, prod: 36, root: 6 },
          { a: 2, b: 18, prod: 36, root: 6 },
          { a: 5, b: 20, prod: 100, root: 10 },
          { a: 2, b: 32, prod: 64, root: 8 },
          { a: 2, b: 50, prod: 100, root: 10 }
        ];
        const p = this.randChoice(pairs);
        return {
          chapterId: '4N4',
          tier: 3,
          title: "Produit de racines carrées $\\sqrt{a} \\times \\sqrt{b}$",
          statement: `Calculer la valeur exacte du produit suivant :\n$$P = \\sqrt{${p.a}} \\times \\sqrt{${p.b}}$$`,
          type: "exact",
          answer: String(p.root),
          placeholder: `Ex: ${p.root}`,
          hint1: "Règle : pour $a, b \\ge 0$, $\\sqrt{a} \\times \\sqrt{b} = \\sqrt{a \\times b}$.",
          solution: `$$P = \\sqrt{${p.a} \\times ${p.b}} = \\sqrt{${p.prod}} = ${p.root}$$`
        };
      } else if (subType === 'quot_roots') {
        const pairs = [
          { a: 50, b: 2, quot: 25, root: 5 },
          { a: 72, b: 2, quot: 36, root: 6 },
          { a: 75, b: 3, quot: 25, root: 5 },
          { a: 48, b: 3, quot: 16, root: 4 },
          { a: 98, b: 2, quot: 49, root: 7 },
          { a: 200, b: 2, quot: 100, root: 10 }
        ];
        const p = this.randChoice(pairs);
        return {
          chapterId: '4N4',
          tier: 3,
          title: "Quotient de racines carrées $\\frac{\\sqrt{a}}{\\sqrt{b}}$",
          statement: `Calculer la valeur exacte du quotient :\n$$Q = \\frac{\\sqrt{${p.a}}}{\\sqrt{${p.b}}}$$`,
          type: "exact",
          answer: String(p.root),
          placeholder: `Ex: ${p.root}`,
          hint1: "Règle : $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$.",
          solution: `$$Q = \\sqrt{\\frac{${p.a}}{${p.b}}} = \\sqrt{${p.quot}} = ${p.root}$$`
        };
      } else {
        const triplets = [
          { c: 5, a: 3, b: 4 },
          { c: 10, a: 6, b: 8 },
          { c: 13, a: 5, b: 12 },
          { c: 17, a: 8, b: 15 },
          { c: 25, a: 7, b: 24 }
        ];
        const t = this.randChoice(triplets);
        return {
          chapterId: '4N4',
          tier: 3,
          title: "Racine carrée d'une différence de carrés",
          statement: `Calculer la valeur exacte de :\n$$D = \\sqrt{${t.c}^2 - ${t.a}^2}$$`,
          type: "exact",
          answer: String(t.b),
          placeholder: `Ex: ${t.b}`,
          hint1: `Calcule d'abord $${t.c}^2 - ${t.a}^2 = ${t.c * t.c} - ${t.a * t.a}$ sous la racine.`,
          solution: `$$D = \\sqrt{${t.c * t.c} - ${t.a * t.a}} = \\sqrt{${t.b * t.b}} = ${t.b}$$`
        };
      }
    } else {
      // Palier 4 : Défi 3ème (Opérations imbriquées sous le radical)
      // Ex: sqrt(10^2 - 8^2) + sqrt(144) - 2*sqrt(49) = sqrt(36) + 12 - 14 = 6 + 12 - 14 = 4
      const configs = [
        {
          expr: "\\sqrt{10^2 - 8^2} + \\sqrt{144} - 2\\sqrt{49}",
          radVal: 36, radRoot: 6,
          sq2: 12, sq3: 14,
          ans: 4
        },
        {
          expr: "\\sqrt{13^2 - 12^2} + 3\\sqrt{81} - \\sqrt{169}",
          radVal: 25, radRoot: 5,
          sq2: 27, sq3: 13,
          ans: 19 // 5 + 27 - 13 = 19
        },
        {
          expr: "\\sqrt{15^2 - 9^2} + \\sqrt{225} - 4\\sqrt{36}",
          radVal: 144, radRoot: 12,
          sq2: 15, sq3: 24,
          ans: 3 // 12 + 15 - 24 = 3
        }
      ];
      const cfg = this.randChoice(configs);

      return {
        chapterId: '4N4',
        tier: 4,
        title: "Défi 3ème : Opérations combinées sous le radical et priorités",
        statement: `Calculer la valeur exacte du nombre :\n$$E = ${cfg.expr}$$`,
        type: "exact",
        answer: String(cfg.ans),
        placeholder: `Ex: ${cfg.ans}`,
        hint1: "Calcule d'abord l'opération à l'intérieur du radical sous la racine avant d'en extraire la racine.",
        solution: `1. Calcul sous le premier radical :\n$$\\sqrt{${cfg.radVal}} = ${cfg.radRoot}$$\n2. Autres termes :\n$$E = ${cfg.radRoot} + ${cfg.sq2} - ${cfg.sq3} = ${cfg.ans}$$`
      };
    }
  },

  // --- 4N5 : Calcul littéral & équations du 1er degré ---
  generate4N5(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Simple distributivité sous diverses formes et factorisation)
      const subType = this.randChoice(['expand_coeff_x', 'expand_const', 'expand_neg_factor', 'expand_and_reduce', 'factor_common']);

      if (subType === 'expand_coeff_x') {
        const k = this.randInt(2, 6);
        const a = this.randInt(2, 5);
        const b = this.randInt(1, 7);
        const sign = this.randChoice(['+', '-']);
        const bVal = sign === '+' ? b : -b;
        const ka = k * a;
        const kb = k * bVal;

        return {
          chapterId: '4N5',
          tier: 1,
          title: "Développement par simple distributivité",
          statement: `Développer et réduire l'expression :\n$$D = ${k}(${a}x ${sign} ${b})$$\n**Quel est le coefficient de $x$ dans l'expression développée ?**`,
          type: "exact",
          answer: String(ka),
          placeholder: `Ex: ${ka}`,
          hint1: `Distribue $${k}$ sur chaque terme dans la parenthèse : $${k} \\times ${a}x ${sign} ${k} \\times ${b}$.`,
          solution: `$$D = ${k} \\times ${a}x ${sign} ${k} \\times ${b} = ${ka}x ${kb >= 0 ? '+ ' + kb : '- ' + Math.abs(kb)}$$\nLe coefficient de $x$ est $${ka}$.`
        };
      } else if (subType === 'expand_const') {
        const k = this.randInt(2, 5);
        const a = this.randInt(2, 4);
        const b = this.randInt(2, 8);
        const sign = this.randChoice(['+', '-']);
        const constTerm = sign === '+' ? k * b : -(k * b);
        return {
          chapterId: '4N5',
          tier: 1,
          title: "Terme constant après développement",
          statement: `On développe l'expression :\n$$E = ${k}(${a}x ${sign} ${b})$$\n**Quel est le terme constant (sans $x$) du résultat ?**`,
          type: "exact",
          answer: String(constTerm),
          placeholder: `Ex: ${constTerm}`,
          hint1: `Le terme constant s'obtient en multipliant $${k}$ par $(${sign}${b})$.`,
          solution: `$$${k} \\times (${sign === '+' ? '+' : '-'}${b}) = ${constTerm}$$`
        };
      } else if (subType === 'expand_neg_factor') {
        const k = this.randInt(2, 5);
        const a = this.randInt(2, 4);
        const b = this.randInt(1, 6);
        const sign = this.randChoice(['+', '-']);
        const bSigned = sign === '+' ? b : -b;
        const resX = -k * a;
        const resConst = -k * bSigned;
        return {
          chapterId: '4N5',
          tier: 1,
          title: "Distributivité avec un facteur négatif",
          statement: `Développer l'expression :\n$$F = -${k}(${a}x ${sign} ${b})$$\n**Quel est le coefficient de $x$ dans le résultat développé ?**`,
          type: "exact",
          answer: String(resX),
          placeholder: `Ex: ${resX}`,
          hint1: `Distribue $-${k}$ : $(-${k}) \\times ${a}x = ${resX}x$. Attention aux signes !`,
          solution: `$$F = (-${k}) \\times (${a}x) + (-${k}) \\times (${bSigned}) = ${resX}x ${resConst >= 0 ? '+ ' + resConst : '- ' + Math.abs(resConst)}$$\nLe coefficient de $x$ est $${resX}$.`
        };
      } else if (subType === 'expand_and_reduce') {
        const k = this.randInt(2, 4);
        const a = this.randInt(2, 5);
        const b = this.randInt(1, 6);
        const c = this.randInt(2, 7);
        const ka = k * a;
        const totalConst = k * b + c;
        return {
          chapterId: '4N5',
          tier: 1,
          title: "Développer puis réduire avec constante",
          statement: `Développer et réduire l'expression :\n$$G = ${k}(${a}x + ${b}) + ${c}$$\n**Quelle est la valeur du terme constant (le nombre sans $x$) ?**`,
          type: "exact",
          answer: String(totalConst),
          placeholder: `Ex: ${totalConst}`,
          hint1: `Développe d'abord $${k}(${a}x + ${b}) = ${ka}x + ${k * b}$, puis ajoute $${c}$.`,
          solution: `$$G = ${ka}x + ${k * b} + ${c} = ${ka}x + ${totalConst}$$\nLe terme constant est $${totalConst}$.`
        };
      } else {
        const k = this.randInt(2, 7);
        const b = this.randInt(2, 8);
        const kb = k * b;
        return {
          chapterId: '4N5',
          tier: 1,
          title: "Factorisation par un facteur commun simple",
          statement: `Compléter la factorisation par $${k}$ de l'expression suivante :\n$$${k}x + ${kb} = ${k}(x + ?)$$\n**Quel est le nombre qui remplace le point d'interrogation ?**`,
          type: "exact",
          answer: String(b),
          placeholder: `Ex: ${b}`,
          hint1: `Divise $${kb}$ par $${k}$ pour trouver le nombre manquant.`,
          solution: `$$${k}x + ${kb} = ${k} \\times x + ${k} \\times ${b} = ${k}(x + ${b})$$\nLe nombre manquant est **${b}**.`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Équations variées : ax+b=c, ax-b=c, b-ax=c, x/a=b, test de solution)
      const subType = this.randChoice(['ax_plus_b', 'ax_minus_b', 'b_minus_ax', 'x_div_a', 'test_sol']);

      if (subType === 'ax_plus_b') {
        const a = this.randInt(2, 7);
        const x = this.randInt(-5, 8);
        const b = this.randInt(1, 9);
        const c = a * x + b;

        return {
          chapterId: '4N5',
          tier: 2,
          title: "Résolution d'équation $ax + b = c$",
          statement: `Résoudre dans $\\mathbb{R}$ l'équation :\n$$${a}x + ${b} = ${c}$$`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Isole $${a}x$ en soustrayant $${b}$ des deux côtés, puis divise par $${a}$.`,
          solution: `$$${a}x = ${c} - ${b} = ${c - b}$$\n$$x = \\frac{${c - b}}{${a}} = ${x}$$`
        };
      } else if (subType === 'ax_minus_b') {
        const a = this.randInt(2, 6);
        const x = this.randInt(-4, 7);
        const b = this.randInt(2, 10);
        const c = a * x - b;

        return {
          chapterId: '4N5',
          tier: 2,
          title: "Résolution d'équation $ax - b = c$",
          statement: `Résoudre dans $\\mathbb{R}$ l'équation :\n$$${a}x - ${b} = ${c}$$`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Ajoute $${b}$ des deux côtés : $${a}x = ${c} + ${b}$. Puis divise par $${a}$.`,
          solution: `$$${a}x = ${c} + ${b} = ${c + b}$$\n$$x = \\frac{${c + b}}{${a}} = ${x}$$`
        };
      } else if (subType === 'b_minus_ax') {
        const a = this.randInt(2, 5);
        const x = this.randInt(1, 6);
        const b = this.randInt(12, 25);
        const c = b - a * x;

        return {
          chapterId: '4N5',
          tier: 2,
          title: "Résolution d'équation $b - ax = c$",
          statement: `Résoudre dans $\\mathbb{R}$ l'équation :\n$$${b} - ${a}x = ${c}$$`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Isole $-${a}x = ${c} - ${b} = ${c - b}$, puis divise par $-${a}$.`,
          solution: `$$-${a}x = ${c} - ${b} = ${c - b}$$\n$$x = \\frac{${c - b}}{-${a}} = ${x}$$`
        };
      } else if (subType === 'x_div_a') {
        const a = this.randInt(2, 5);
        const x = this.randInt(2, 9) * a;
        const b = this.randInt(1, 6);
        const c = (x / a) + b;

        return {
          chapterId: '4N5',
          tier: 2,
          title: "Équation avec quotient $\\frac{x}{a} + b = c$",
          statement: `Résoudre l'équation :\n$$\\frac{x}{${a}} + ${b} = ${c}$$`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Commence par soustraire $${b}$ : $\\frac{x}{${a}} = ${c - b}$. Puis multiplie par $${a}$.`,
          solution: `$$\\frac{x}{${a}} = ${c} - ${b} = ${c - b}$$\n$$x = ${c - b} \\times ${a} = ${x}$$`
        };
      } else {
        const a = this.randInt(2, 5);
        const b = this.randInt(1, 8);
        const isGood = Math.random() > 0.5;
        const testVal = this.randInt(1, 5);
        const rightVal = isGood ? (a * testVal + b) : (a * testVal + b + this.randChoice([-3, -2, 2, 3]));
        const correct = isGood ? "Oui" : "Non";
        const wrong = isGood ? "Non" : "Oui";
        const opts = [correct, wrong];

        return {
          chapterId: '4N5',
          tier: 2,
          title: "Tester si un nombre est solution",
          statement: `Le nombre $x = ${testVal}$ est-il solution de l'équation :\n$$${a}x + ${b} = ${rightVal}$$ ?`,
          type: "mcq",
          options: opts,
          answer: correct,
          correctIndex: 0,
          hint1: `Remplace $x$ par $${testVal}$ dans le membre de gauche : $${a} \\times ${testVal} + ${b} = ${a * testVal + b}$. Compare avec $${rightVal}$.`,
          solution: `Pour $x = ${testVal}$ :\n$$${a} \\times ${testVal} + ${b} = ${a * testVal + b}$$\nComme ${a * testVal + b} ${isGood ? '=' : '\\ne'} ${rightVal}, la réponse est **${correct}**.`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (ax + b = cx + d ou avec parenthèses)
      const subType = this.randChoice(['two_sides_std', 'two_sides_inv', 'par_equation', 'x_sub_par']);

      if (subType === 'two_sides_std') {
        const a = this.randInt(4, 8);
        const c = this.randInt(1, a - 1);
        const x = this.randInt(-4, 6);
        const b = this.randInt(-9, 9);
        const d = (a - c) * x + b;

        return {
          chapterId: '4N5',
          tier: 3,
          title: "Équation avec l'inconnue des deux côtés",
          statement: `Résoudre l'équation suivante :\n$$${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)} = ${c}x ${d >= 0 ? '+ ' + d : '- ' + Math.abs(d)}$$`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Regroupe les termes en $x$ à gauche (en soustrayant $${c}x$) et les constantes à droite.`,
          solution: `$$${a}x - ${c}x = ${d} - (${b})$$\n$$${a - c}x = ${d - b}$$\n$$x = \\frac{${d - b}}{${a - c}} = ${x}$$`
        };
      } else if (subType === 'two_sides_inv') {
        const c = this.randInt(5, 9);
        const a = this.randInt(2, c - 1);
        const x = this.randInt(-5, 5);
        const d = this.randInt(1, 8);
        const b = (c - a) * x + d;

        return {
          chapterId: '4N5',
          tier: 3,
          title: "Équation avec inconnue des deux côtés (terme en x négatif)",
          statement: `Résoudre l'équation :\n$$${a}x + ${b} = ${c}x + ${d}$$`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Regroupe les $x$ à gauche : $${a}x - ${c}x = ${a - c}x$, et les nombres à droite : $${d} - ${b} = ${d - b}$.`,
          solution: `$$${a}x - ${c}x = ${d} - ${b}$$\n$$${a - c}x = ${d - b}$$\n$$x = \\frac{${d - b}}{${a - c}} = ${x}$$`
        };
      } else if (subType === 'par_equation') {
        const k = this.randInt(2, 4);
        const x = this.randInt(-4, 6);
        const a = this.randInt(1, 5);
        const rhs = k * (x + a);

        return {
          chapterId: '4N5',
          tier: 3,
          title: "Équation avec parenthèses $k(x + a) = b$",
          statement: `Résoudre dans $\\mathbb{R}$ l'équation :\n$$${k}(x + ${a}) = ${rhs}$$`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Méthode 1 : développe $${k}x + ${k * a} = ${rhs}$. Méthode 2 : divise d'abord par $${k}$.`,
          solution: `$$${k}x + ${k * a} = ${rhs}$$\n$$${k}x = ${rhs} - ${k * a} = ${rhs - k * a}$$\n$$x = \\frac{${rhs - k * a}}{${k}} = ${x}$$`
        };
      } else {
        const a = this.randInt(4, 7);
        const b = this.randInt(2, 3);
        const c = this.randInt(1, 6);
        const x = this.randInt(1, 5);
        const rhs = (a - b) * x - c;

        return {
          chapterId: '4N5',
          tier: 3,
          title: "Équation avec suppression de parenthèses précédées d'un « - »",
          statement: `Résoudre l'équation :\n$$${a}x - (${b}x + ${c}) = ${rhs}$$`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Supprime les parenthèses en changeant les signes à l'intérieur : $${a}x - ${b}x - ${c} = ${rhs}$.`,
          solution: `$$${a}x - ${b}x - ${c} = ${rhs}$$\n$$${a - b}x - ${c} = ${rhs}$$\n$$${a - b}x = ${rhs + c}$$\n$$x = \\frac{${rhs + c}}{${a - b}} = ${x}$$`
        };
      }
    } else {
      // Palier 4 : Défi 3ème (Double distributivité développée et réduite (ax + b)(cx + d))
      const a = this.randInt(2, 4);
      const b = this.randInt(-5, 5, [0]);
      const c = this.randInt(2, 4);
      const d = this.randInt(-5, 5, [0]);

      // (ax + b)(cx + d) = a*c*x^2 + (a*d + b*c)*x + b*d
      const coeffX2 = a * c;
      const coeffX = a * d + b * c;
      const constTerm = b * d;

      return {
        chapterId: '4N5',
        tier: 4,
        title: "Défi 3ème : Double distributivité $(ax + b)(cx + d)$",
        statement: `Développer et réduire l'expression algébrique :\n$$E = (${this.formatPoly([a, b])})(${this.formatPoly([c, d])})$$\n\n**Quel est le coefficient du terme en $x$ (le terme du 1er degré) ?**`,
        type: "exact",
        answer: String(coeffX),
        placeholder: `Ex: ${coeffX}`,
        hint1: `Formule de la double distributivité : $(ax + b)(cx + d) = ax \\times cx + ax \\times d + b \\times cx + b \\times d$.\nLe terme en $x$ provient de $(a \\times d + b \\times c)x$.`,
        solution: `Développement pas à pas :\n$$E = (${a}x) \\times (${c}x) + (${a}x) \\times (${d}) + (${b}) \\times (${c}x) + (${b}) \\times (${d})$$\n$$E = ${coeffX2}x^2 + (${a*d})x + (${b*c})x + (${constTerm})$$\n$$E = ${coeffX2}x^2 + (${coeffX})x + (${constTerm})$$\nLe coefficient de $x$ est donc :\n$$${coeffX}$$`
      };
    }
  },

  // --- 4G1 : Théorème de Pythagore (initiation 4ème) ---
  generate4G1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Égalité de Pythagore, hypoténuse, sommet droit)
      const subType = this.randChoice(['relation_pyth', 'identify_hyp', 'identify_vertex']);

      if (subType === 'relation_pyth') {
        const triangles = [
          { name: "MNP", right: "M", hyp: "NP", c1: "MN", c2: "MP" },
          { name: "ABC", right: "B", hyp: "AC", c1: "AB", c2: "BC" },
          { name: "EFG", right: "F", hyp: "EG", c1: "EF", c2: "FG" },
          { name: "RST", right: "T", hyp: "RS", c1: "RT", c2: "ST" },
          { name: "IJK", right: "I", hyp: "JK", c1: "IJ", c2: "IK" }
        ];
        const tri = this.randChoice(triangles);
        const correct = `${tri.hyp}² = ${tri.c1}² + ${tri.c2}²`;
        const wrong1 = `${tri.c1}² = ${tri.hyp}² + ${tri.c2}²`;
        const wrong2 = `${tri.c2}² = ${tri.c1}² + ${tri.hyp}²`;
        const wrong3 = `${tri.hyp} = ${tri.c1} + ${tri.c2}`;
        const opts = this.shuffle([correct, wrong1, wrong2, wrong3]);

        return {
          chapterId: '4G1',
          tier: 1,
          title: "Égalité de Pythagore (Triangle rectangle)",
          statement: `Soit un triangle $${tri.name}$ rectangle en $${tri.right}$.\nQuelle est la relation de Pythagore correcte ?`,
          type: "mcq",
          answer: correct,
          options: opts,
          correctIndex: opts.indexOf(correct),
          hint1: `L'hypoténuse est le côté opposé à l'angle droit $${tri.right}$. C'est le côté $[${tri.hyp}]$.`,
          solution: `Dans le triangle $${tri.name}$ rectangle en $${tri.right}$, l'hypoténuse est $[${tri.hyp}]$. Le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés : $${tri.hyp}^2 = ${tri.c1}^2 + ${tri.c2}^2$.`
        };
      } else if (subType === 'identify_hyp') {
        const triangles = [
          { name: "ABC", right: "A", hyp: "[BC]", other1: "[AB]", other2: "[AC]" },
          { name: "DEF", right: "E", hyp: "[DF]", other1: "[DE]", other2: "[EF]" },
          { name: "KLM", right: "M", hyp: "[KL]", other1: "[KM]", other2: "[LM]" },
          { name: "RST", right: "R", hyp: "[ST]", other1: "[RS]", other2: "[RT]" }
        ];
        const tri = this.randChoice(triangles);
        const opts = this.shuffle([tri.hyp, tri.other1, tri.other2, "[AB]"]);
        return {
          chapterId: '4G1',
          tier: 1,
          title: "Identifier l'hypoténuse d'un triangle rectangle",
          statement: `Soit un triangle $${tri.name}$ rectangle en $${tri.right}$.\n**Quel est le nom de son hypoténuse ?**`,
          type: "mcq",
          options: opts,
          answer: tri.hyp,
          correctIndex: opts.indexOf(tri.hyp),
          hint1: `L'hypoténuse est le plus grand côté d'un triangle rectangle, situé en face de l'angle droit $${tri.right}$.`,
          solution: `Le côté opposé à l'angle droit $${tri.right}$ est l'hypoténuse : **${tri.hyp}**.`
        };
      } else {
        const cases = [
          { expr: "AB^2 = AC^2 + BC^2", vertex: "C", tri: "ABC" },
          { expr: "EF^2 = EG^2 + FG^2", vertex: "G", tri: "EFG" },
          { expr: "RT^2 = RS^2 + ST^2", vertex: "S", tri: "RST" },
          { expr: "KM^2 = KL^2 + LM^2", vertex: "L", tri: "KLM" }
        ];
        const c = this.randChoice(cases);
        const letters = c.tri.split('');
        const opts = this.shuffle(letters);
        return {
          chapterId: '4G1',
          tier: 1,
          title: "Sommet de l'angle droit à partir de l'égalité",
          statement: `Dans un triangle $${c.tri}$, on a l'égalité : $$${c.expr}$$\n**En quel sommet ce triangle est-il rectangle ?**`,
          type: "mcq",
          options: opts,
          answer: c.vertex,
          correctIndex: opts.indexOf(c.vertex),
          hint1: "L'hypoténuse est le côté isolé à gauche de l'égalité. L'angle droit est le sommet commun aux deux autres côtés.",
          solution: `L'égalité montre que le triangle est rectangle en **${c.vertex}**.`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Calcul hypoténuse triplet direct)
      const triplets = [
        { a: 3, b: 4, c: 5 },
        { a: 6, b: 8, c: 10 },
        { a: 5, b: 12, c: 13 },
        { a: 8, b: 15, c: 17 },
        { a: 9, b: 12, c: 15 },
        { a: 12, b: 16, c: 20 },
        { a: 7, b: 24, c: 25 },
        { a: 10, b: 24, c: 26 }
      ];
      const trip = this.randChoice(triplets);
      const names = [
        { tri: "ABC", r: "A", s1: "AB", s2: "AC", hyp: "BC" },
        { tri: "DEF", r: "D", s1: "DE", s2: "DF", hyp: "EF" },
        { tri: "RST", r: "R", s1: "RS", s2: "RT", hyp: "ST" },
        { tri: "IJK", r: "I", s1: "IJ", s2: "IK", hyp: "JK" }
      ];
      const n = this.randChoice(names);

      return {
        chapterId: '4G1',
        tier: 2,
        title: "Calcul de l'hypoténuse",
        statement: `Dans un triangle $${n.tri}$ rectangle en $${n.r}$, on a $${n.s1} = ${trip.a}\\text{ cm}$ et $${n.s2} = ${trip.b}\\text{ cm}$.\n**Calculer la longueur de l'hypoténuse $${n.hyp}$.**`,
        type: "exact",
        answer: String(trip.c),
        placeholder: `Ex: ${trip.c}`,
        hint1: `D'après Pythagore : $${n.hyp}^2 = ${n.s1}^2 + ${n.s2}^2 = ${trip.a*trip.a} + ${trip.b*trip.b}$.`,
        solution: `$$${n.hyp}^2 = ${trip.a}^2 + ${trip.b}^2 = ${trip.a*trip.a} + ${trip.b*trip.b} = ${trip.c*trip.c} \\implies ${n.hyp} = \\sqrt{${trip.c*trip.c}} = ${trip.c}\\text{ cm}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet / 4e (Calcul d'un côté de l'angle droit)
      const triplets = [
        { a: 3, b: 4, c: 5 },
        { a: 6, b: 8, c: 10 },
        { a: 5, b: 12, c: 13 },
        { a: 8, b: 15, c: 17 },
        { a: 9, b: 12, c: 15 },
        { a: 12, b: 16, c: 20 },
        { a: 7, b: 24, c: 25 },
        { a: 10, b: 24, c: 26 }
      ];
      const trip = this.randChoice(triplets);
      const names = [
        { tri: "RST", r: "S", hyp: "RT", s1: "RS", s2: "ST" },
        { tri: "ABC", r: "B", hyp: "AC", s1: "AB", s2: "BC" },
        { tri: "EFG", r: "F", hyp: "EG", s1: "EF", s2: "FG" },
        { tri: "MNP", r: "M", hyp: "NP", s1: "MN", s2: "MP" }
      ];
      const n = this.randChoice(names);

      return {
        chapterId: '4G1',
        tier: 3,
        title: "Calcul d'un côté de l'angle droit",
        statement: `Dans un triangle $${n.tri}$ rectangle en $${n.r}$, l'hypoténuse mesure $${n.hyp} = ${trip.c}\\text{ cm}$ et le côté $${n.s1} = ${trip.a}\\text{ cm}$.\n**Calculer la longueur du côté $${n.s2}$.**`,
        type: "exact",
        answer: String(trip.b),
        placeholder: `Ex: ${trip.b}`,
        hint1: `Isole $${n.s2}^2 = ${n.hyp}^2 - ${n.s1}^2 = ${trip.c*trip.c} - ${trip.a*trip.a}$.`,
        solution: `$$${n.s2}^2 = ${n.hyp}^2 - ${n.s1}^2 = ${trip.c}^2 - ${trip.a}^2 = ${trip.c*trip.c} - ${trip.a*trip.a} = ${trip.b*trip.b} \\implies ${n.s2} = ${trip.b}\\text{ cm}$$`
      };
    } else {
      // Palier 4 : Défi 3ème (Problème concret de modélisation avec triplets pythagoriciens)
      const ladders = [
        { d: 6, h: 8, l: 10 },
        { d: 9, h: 12, l: 15 },
        { d: 5, h: 12, l: 13 },
        { d: 8, h: 15, l: 17 },
        { d: 12, h: 16, l: 20 }
      ];
      const lad = this.randChoice(ladders);
      const dSol = lad.d;
      const hMur = lad.h;
      const lEchelle = lad.l;

      return {
        chapterId: '4G1',
        tier: 4,
        title: "Défi 3ème : Problème concret de modélisation (Pythagore)",
        statement: `Une échelle de longueur $L = ${lEchelle}\\text{ m}$ est posée contre un mur vertical. Le pied de l'échelle est situé à une distance $d = ${dSol}\\text{ m}$ de la base du mur.\n\n**À quelle hauteur $h$ sur le mur le sommet de l'échelle parvient-il (en mètres) ?**`,
        type: "exact",
        answer: String(hMur),
        placeholder: `Ex: ${hMur}`,
        hint1: "Le mur et le sol forment un angle droit. L'échelle joue le rôle de l'hypoténuse.",
        solution: `Dans le triangle rectangle formé par le mur, le sol et l'échelle :\n$$L^2 = d^2 + h^2 \\implies h^2 = L^2 - d^2$$\n$$h^2 = ${lEchelle}^2 - ${dSol}^2 = ${lEchelle*lEchelle} - ${dSol*dSol} = ${hMur*hMur}$$\n$$h = \\sqrt{${hMur*hMur}} = ${hMur}\\text{ m}$$`
      };
    }
  },

  // --- 4G4 : Solides de l'espace (Prismes, cylindres, cônes, pyramides) ---
  generate4G4(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Volume d'un pavé droit, d'un cube ou d'un prisme triangulaire)
      const subType = this.randChoice(['pave', 'cube', 'prisme_tri']);

      if (subType === 'pave') {
        const L = this.randInt(4, 8);
        const l = this.randInt(3, 5);
        const h = this.randInt(2, 6);
        const v = L * l * h;

        return {
          chapterId: '4G4',
          tier: 1,
          title: "Volume d'un pavé droit",
          statement: `Calculer le volume d'un pavé droit de longueur $L = ${L}\\text{ cm}$, de largeur $l = ${l}\\text{ cm}$ et de hauteur $h = ${h}\\text{ cm}$.`,
          type: "exact",
          answer: String(v),
          placeholder: `Ex: ${v}`,
          hint1: "Formule : $\\mathcal{V} = L \\times l \\times h$.",
          solution: `$$\\mathcal{V} = ${L} \\times ${l} \\times ${h} = ${v}\\text{ cm}^3$$`
        };
      } else if (subType === 'cube') {
        const c = this.randInt(3, 8);
        const v = c * c * c;
        return {
          chapterId: '4G4',
          tier: 1,
          title: "Volume d'un cube",
          statement: `Calculer le volume d'un cube d'arête $c = ${c}\\text{ cm}$ :`,
          type: "exact",
          answer: String(v),
          placeholder: `Ex: ${v}`,
          hint1: "Formule du cube : $\\mathcal{V} = c^3 = c \\times c \\times c$.",
          solution: `$$\\mathcal{V} = ${c}^3 = ${c} \\times ${c} \\times ${c} = ${v}\\text{ cm}^3$$`
        };
      } else {
        const a = this.randInt(3, 6);
        const b = this.randChoice([4, 6, 8]);
        const h = this.randInt(4, 10);
        const aireBase = (a * b) / 2;
        const v = aireBase * h;
        return {
          chapterId: '4G4',
          tier: 1,
          title: "Volume d'un prisme droit à base triangulaire",
          statement: `Un prisme droit a pour base un triangle rectangle de côtés de l'angle droit $a = ${a}\\text{ cm}$ et $b = ${b}\\text{ cm}$, et une hauteur $h = ${h}\\text{ cm}$.\n**Calculer son volume en $\\text{cm}^3$ :**`,
          type: "exact",
          answer: String(v),
          placeholder: `Ex: ${v}`,
          hint1: `1. Aire de la base : $\\mathcal{B} = \\frac{${a} \\times ${b}}{2} = ${aireBase}\\text{ cm}^2$.\n2. Volume : $\\mathcal{V} = \\mathcal{B} \\times h$.`,
          solution: `$$\\mathcal{B} = \\frac{${a} \\times ${b}}{2} = ${aireBase}\\text{ cm}^2$$\n$$\\mathcal{V} = \\mathcal{B} \\times h = ${aireBase} \\times ${h} = ${v}\\text{ cm}^3$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Volume d'un cylindre : coefficient pi ou hauteur manquante)
      const subType = this.randChoice(['cylindre_vol', 'cylindre_h', 'cylindre_base']);

      if (subType === 'cylindre_vol') {
        const r = this.randInt(2, 6);
        const h = this.randInt(3, 10);
        const coeff = r * r * h;

        return {
          chapterId: '4G4',
          tier: 2,
          title: "Volume d'un cylindre de révolution",
          statement: `Un cylindre a pour rayon de base $R = ${r}\\text{ cm}$ et pour hauteur $h = ${h}\\text{ cm}$.\nDonner la valeur exacte de son volume sous la forme $n\\pi\\text{ cm}^3$ (saisir le nombre $n$).`,
          type: "exact",
          answer: String(coeff),
          placeholder: `Ex: ${coeff}`,
          hint1: "Formule : $\\mathcal{V} = \\pi R^2 h$. Calcule $R^2 \\times h$.",
          solution: `$$\\mathcal{V} = \\pi \\times ${r}^2 \\times ${h} = ${r*r} \\times ${h} \\times \\pi = ${coeff}\\pi\\text{ cm}^3$$`
        };
      } else if (subType === 'cylindre_h') {
        const r = this.randInt(2, 5);
        const h = this.randInt(3, 9);
        const coeff = r * r * h;
        return {
          chapterId: '4G4',
          tier: 2,
          title: "Hauteur d'un cylindre connaissant son volume",
          statement: `Un cylindre de rayon $R = ${r}\\text{ cm}$ a un volume de $${coeff}\\pi\\text{ cm}^3$.\n**Quelle est sa hauteur $h$ en cm ?**`,
          type: "exact",
          answer: String(h),
          placeholder: `Ex: ${h}`,
          hint1: `L'aire de base est $\\mathcal{B} = \\pi \\times ${r}^2 = ${r*r}\\pi$. La hauteur vaut $\\frac{\\mathcal{V}}{\\mathcal{B}}$.`,
          solution: `$$\\mathcal{B} = \\pi \\times ${r}^2 = ${r*r}\\pi\\text{ cm}^2$$\n$$h = \\frac{${coeff}\\pi}{${r*r}\\pi} = ${h}\\text{ cm}$$`
        };
      } else {
        const r = this.randInt(3, 8);
        const aire = r * r;
        return {
          chapterId: '4G4',
          tier: 2,
          title: "Aire de la base d'un cylindre",
          statement: `La base d'un cylindre est un disque de rayon $R = ${r}\\text{ cm}$.\nDonner la valeur exacte de son aire sous la forme $n\\pi\\text{ cm}^2$ (saisir le nombre $n$) :`,
          type: "exact",
          answer: String(aire),
          placeholder: `Ex: ${aire}`,
          hint1: "Formule de l'aire d'un disque : $\\mathcal{A} = \\pi R^2$.",
          solution: `$$\\mathcal{A} = \\pi \\times ${r}^2 = ${aire}\\pi\\text{ cm}^2$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (Volume d'un cône ou d'une pyramide)
      const subType = this.randChoice(['cone', 'pyramide_carree']);

      if (subType === 'cone') {
        const r = this.randChoice([3, 6]);
        const h = this.randChoice([4, 5, 7, 8, 10, 11, 12]);
        const coeff = (r * r * h) / 3;

        return {
          chapterId: '4G4',
          tier: 3,
          title: "Volume d'un cône de révolution",
          statement: `Un cône de révolution a un rayon de base $R = ${r}\\text{ cm}$ et une hauteur $h = ${h}\\text{ cm}$.\nDonner la valeur exacte de son volume sous la forme $n\\pi\\text{ cm}^3$ (saisir le nombre $n$).`,
          type: "exact",
          answer: String(coeff),
          placeholder: `Ex: ${coeff}`,
          hint1: "Formule du cône : $\\mathcal{V} = \\frac{1}{3}\\pi R^2 h$.",
          solution: `$$\\mathcal{V} = \\frac{1}{3} \\times \\pi \\times ${r}^2 \\times ${h} = \\frac{${r*r * h}}{3}\\pi = ${coeff}\\pi\\text{ cm}^3$$`
        };
      } else {
        const c = this.randInt(3, 8);
        const h = this.randChoice([3, 6, 9, 12]);
        const v = (c * c * h) / 3;

        return {
          chapterId: '4G4',
          tier: 3,
          title: "Volume d'une pyramide à base carrée",
          statement: `Une pyramide a pour base un carré de côté $c = ${c}\\text{ cm}$ et pour hauteur $h = ${h}\\text{ cm}$.\n**Calculer son volume en $\\text{cm}^3$ :**`,
          type: "exact",
          answer: String(v),
          placeholder: `Ex: ${v}`,
          hint1: "Formule de la pyramide : $\\mathcal{V} = \\frac{1}{3} \\times \\text{Aire de base} \\times h = \\frac{c^2 \\times h}{3}$.",
          solution: `$$\\mathcal{V} = \\frac{${c}^2 \\times ${h}}{3} = \\frac{${c*c} \\times ${h}}{3} = ${v}\\text{ cm}^3$$`
        };
      }
    } else {
      // Palier 4 : Défi 3ème (Contenance d'un réservoir et conversion Litres)
      // Prisme à base triangulaire rectangle : B = (a*b)/2 en dm, H en dm => Volume en dm³ = Litres
      const aDm = this.randInt(2, 6);
      const bDm = this.randChoice([2, 4, 6]); // pair pour que (a*b)/2 soit entier
      const hDm = this.randInt(3, 8);
      const a = aDm * 10;
      const b = bDm * 10;
      const h = hDm * 10;
      const vLitre = ((aDm * bDm) / 2) * hDm;

      return {
        chapterId: '4G4',
        tier: 4,
        title: "Défi 3ème : Contenance d'un prisme droit et conversion en Litres",
        statement: `Un bac d'eau a la forme d'un prisme droit à base triangulaire rectangle.\nLes côtés de l'angle droit de la base mesurent $a = ${a}\\text{ cm}$ et $b = ${b}\\text{ cm}$.\nLa hauteur du bac est de $h = ${h}\\text{ cm}$.\n\n**Quelle est la capacité maximale de ce bac en Litres ?**\n*(Rappel : $1\\text{ L} = 1\\text{ dm}^3$)*`,
        type: "exact",
        answer: String(vLitre),
        placeholder: `Ex: ${vLitre}`,
        hint1: `1. Convertis les dimensions en décimètres : $a = ${aDm}\\text{ dm}$, $b = ${bDm}\\text{ dm}$, $h = ${hDm}\\text{ dm}$.\n2. Aire de la base : $\\mathcal{B} = \\frac{a \\times b}{2}$.\n3. Volume : $\\mathcal{V} = \\mathcal{B} \\times h$ en $\\text{dm}^3$ (Litres).`,
        solution: `1. En décimètres : $a = ${aDm}\\text{ dm}$, $b = ${bDm}\\text{ dm}$, $h = ${hDm}\\text{ dm}$.\n2. Aire de la base triangulaire :\n$$\\mathcal{B} = \\frac{${aDm} \\times ${bDm}}{2} = ${(aDm * bDm)/2}\\text{ dm}^2$$\n3. Volume en litres :\n$$\\mathcal{V} = \\mathcal{B} \\times h = ${(aDm * bDm)/2} \\times ${hDm} = ${vLitre}\\text{ dm}^3 = ${vLitre}\\text{ L}$$`
      };
    }
  },

  // --- 4D1 : Statistiques & probabilités 4ème ---
  generate4D1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Moyenne simple de 4 ou 5 valeurs, ou note cible manquante)
      const subType = this.randChoice(['moyenne_4', 'moyenne_5', 'note_cible']);

      if (subType === 'moyenne_4') {
        const avg = this.randInt(10, 15);
        const vals = [avg - 3, avg - 1, avg + 1, avg + 3];

        return {
          chapterId: '4D1',
          tier: 1,
          title: "Calcul de la moyenne d'une série",
          statement: `Calculer la moyenne de la série statistique suivante :\n$$${vals.join('~;~')}$$`,
          type: "exact",
          answer: String(avg),
          placeholder: `Ex: ${avg}`,
          hint1: "Additionne les 4 valeurs puis divise le résultat par 4.",
          solution: `$$\\bar{x} = \\frac{${vals.join(' + ')}}{4} = \\frac{${vals.reduce((a,b)=>a+b,0)}}{4} = ${avg}$$`
        };
      } else if (subType === 'moyenne_5') {
        const avg = this.randInt(8, 16);
        const vals = [avg - 4, avg - 2, avg, avg + 1, avg + 5];
        return {
          chapterId: '4D1',
          tier: 1,
          title: "Moyenne de 5 notes",
          statement: `Calculer la moyenne des 5 notes suivantes :\n$$${vals.join('~;~')}$$`,
          type: "exact",
          answer: String(avg),
          placeholder: `Ex: ${avg}`,
          hint1: "Fais la somme des 5 notes puis divise par 5.",
          solution: `$$\\bar{x} = \\frac{${vals.join(' + ')}}{5} = \\frac{${vals.reduce((a,b)=>a+b,0)}}{5} = ${avg}$$`
        };
      } else {
        const target = this.randInt(12, 15);
        const n1 = this.randInt(target - 4, target - 1);
        const n2 = this.randInt(target, target + 3);
        const n3 = this.randInt(target - 3, target + 2);
        // (n1 + n2 + n3 + x) / 4 = target => x = 4*target - (n1+n2+n3)
        const x = 4 * target - (n1 + n2 + n3);
        return {
          chapterId: '4D1',
          tier: 1,
          title: "Note manquante pour une moyenne cible",
          statement: `Un élève a obtenu les notes $${n1}$, $${n2}$ et $${n3}$ aux trois premiers devoirs.\n**Quelle note doit-il obtenir au 4ème devoir pour avoir exactement $${target}$ de moyenne ?**`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Le total des 4 notes doit être de $4 \\times ${target} = ${4 * target}$. Calcule ce total moins la somme des 3 premières notes.`,
          solution: `Total requis : $4 \\times ${target} = ${4 * target}$.\nSomme actuelle : $${n1} + ${n2} + ${n3} = ${n1 + n2 + n3}$.\nNote nécessaire : $${4 * target} - ${n1 + n2 + n3} = ${x}$.`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Moyenne pondérée notes/effectifs ou devoirs avec coefficients)
      const subType = this.randChoice(['ponderee_effectifs', 'coefficients']);

      if (subType === 'ponderee_effectifs') {
        const n1 = this.randInt(8, 11);
        const n2 = this.randInt(12, 14);
        const n3 = this.randInt(15, 18);
        const e1 = this.randInt(2, 3);
        const e2 = this.randInt(3, 4);
        const e3 = 10 - (e1 + e2);
        const totalPoints = n1 * e1 + n2 * e2 + n3 * e3;
        const avg = (totalPoints / 10).toFixed(1).replace('.0', '');

        return {
          chapterId: '4D1',
          tier: 2,
          title: "Moyenne pondérée par les effectifs",
          statement: `Dans une classe, les notes à un devoir sont réparties ainsi :\n- Note ${n1} : ${e1} élèves\n- Note ${n2} : ${e2} élèves\n- Note ${n3} : ${e3} élèves\n\n**Calculer la moyenne de la classe à ce devoir.**`,
          type: "exact",
          answer: String(avg),
          placeholder: `Ex: ${avg}`,
          hint1: `Calcule l'effectif total ($${e1} + ${e2} + ${e3} = 10$), puis la somme pondérée des notes divisée par 10.`,
          solution: `$$\\bar{x} = \\frac{${n1} \\times ${e1} + ${n2} \\times ${e2} + ${n3} \\times ${e3}}{${e1} + ${e2} + ${e3}} = \\frac{${totalPoints}}{10} = ${avg}$$`
        };
      } else {
        const note1 = this.randInt(8, 14);
        const note2 = this.randInt(10, 16);
        const note3 = this.randInt(12, 18);
        const c1 = 1;
        const c2 = 2;
        const c3 = 2; // total coeff = 5
        const totalPoints = note1 * c1 + note2 * c2 + note3 * c3;
        const avg = (totalPoints / 5).toFixed(1).replace('.0', '');

        return {
          chapterId: '4D1',
          tier: 2,
          title: "Moyenne avec coefficients d'évaluation",
          statement: `Un élève a obtenu les notes suivantes :\n- Devoir maison (coef 1) : $${note1}$\n- Interrogation (coef 2) : $${note2}$\n- Contrôle bilan (coef 2) : $${note3}$\n\n**Calculer sa moyenne pondérée (somme des coefficients = 5).**`,
          type: "exact",
          answer: String(avg),
          placeholder: `Ex: ${avg}`,
          hint1: `Multiplie chaque note par son coefficient : $(${note1} \\times 1 + ${note2} \\times 2 + ${note3} \\times 2)$, puis divise par 5.`,
          solution: `$$\\bar{x} = \\frac{${note1} \\times 1 + ${note2} \\times 2 + ${note3} \\times 2}{1 + 2 + 2} = \\frac{${totalPoints}}{5} = ${avg}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (Probabilité urne, dé ou jeu de cartes)
      const subType = this.randChoice(['urne', 'de_6', 'cartes']);

      if (subType === 'urne') {
        const r = this.randInt(3, 7);
        const b = this.randInt(4, 8);
        const v = this.randInt(2, 5);
        const tot = r + b + v;
        const [sN, sD] = this.simplifyFraction(r, tot);

        return {
          chapterId: '4D1',
          tier: 3,
          title: "Probabilité dans une urne opaque",
          statement: `Une urne contient $${r}$ boules rouges, $${b}$ boules bleues et $${v}$ boules vertes.\nOn tire une boule au hasard.\n**Quelle est la probabilité de tirer une boule rouge ?** (Fraction irréductible)`,
          type: "exact",
          answer: `${sN}/${sD}`,
          placeholder: "Ex: 1/4",
          hint1: `Nombre d'issues favorables : $${r}$. Nombre total d'issues : $${r} + ${b} + ${v} = ${tot}$.`,
          solution: `$$P = \\frac{${r}}{${tot}} = ${this.formatFraction(r, tot)}$$`
        };
      } else if (subType === 'de_6') {
        const cases = [
          { q: "d'obtenir un nombre pair", num: 3, den: 6, fav: "{2, 4, 6}" },
          { q: "d'obtenir un multiple de 3", num: 2, den: 6, fav: "{3, 6}" },
          { q: "d'obtenir un nombre strictement supérieur à 4", num: 2, den: 6, fav: "{5, 6}" },
          { q: "d'obtenir un diviseur de 6", num: 4, den: 6, fav: "{1, 2, 3, 6}" }
        ];
        const c = this.randChoice(cases);
        const [sN, sD] = this.simplifyFraction(c.num, c.den);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: '4D1',
          tier: 3,
          title: "Probabilité au lancer de dé équilibré",
          statement: `On lance un dé équilibré à 6 faces numérotées de 1 à 6.\n**Quelle est la probabilité ${c.q} ?** (Fraction irréductible)`,
          type: "exact",
          answer: ansStr,
          placeholder: "Ex: 1/2",
          hint1: `Identifie les faces favorables : $${c.fav}$. Il y en a $${c.num}$ sur $6$.`,
          solution: `Issues favorables : $${c.fav}$, soit $${c.num}$ issues sur $6$ :\n$$P = \\frac{${c.num}}{6} = ${ansStr}$$`
        };
      } else {
        const cases = [
          { q: "de tirer un Cœur", num: 8, den: 32, label: "8 cœurs sur 32 cartes" },
          { q: "de tirer un As", num: 4, den: 32, label: "4 as sur 32 cartes" },
          { q: "de tirer une figure (Valet, Dame ou Roi)", num: 12, den: 32, label: "12 figures sur 32 cartes" },
          { q: "de tirer une carte rouge (Cœur ou Carreau)", num: 16, den: 32, label: "16 cartes rouges sur 32 cartes" }
        ];
        const c = this.randChoice(cases);
        const [sN, sD] = this.simplifyFraction(c.num, c.den);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: '4D1',
          tier: 3,
          title: "Probabilité dans un jeu de 32 cartes",
          statement: `Dans un jeu standard de 32 cartes bien mélangé, on tire une carte au hasard.\n**Quelle est la probabilité ${c.q} ?** (Fraction irréductible)`,
          type: "exact",
          answer: ansStr,
          placeholder: "Ex: 1/4",
          hint1: `Compte le nombre d'issues favorables dans un jeu de 32 cartes (${c.label}).`,
          solution: `Il y a $${c.label}$ :\n$$P = \\frac{${c.num}}{32} = ${ansStr}$$`
        };
      }
    } else {
      // Palier 4 : Défi 3ème (Fréquence en pourcentage et effectif total manquant)
      // Un groupe a N personnes au total. Il y a E sportifs, ce qui représente P%.
      const N = this.randChoice([80, 120, 150, 200]);
      const P = this.randChoice([20, 25, 30, 40]);
      const E = (N * P) / 100;

      return {
        chapterId: '4D1',
        tier: 4,
        title: "Défi 3ème : Rétro-calcul de l'effectif total à partir d'un pourcentage",
        statement: `Dans une association sportive, il y a $${E}$ adhérents inscrits au club de natation.\nCe nombre représente exactement $${P}\\%$ de l'ensemble des adhérents de l'association.\n\n**Quel est le nombre total d'adhérents de l'association ?**`,
        type: "exact",
        answer: String(N),
        placeholder: `Ex: ${N}`,
        hint1: `Si $${P}\\%$ correspond à $${E}$ personnes, alors $100\\%$ correspond à : $\\frac{${E} \\times 100}{${P}}$.`,
        solution: `Par proportionnalité :\n$$N = \\frac{${E} \\times 100}{${P}} = ${N}\\text{ adhérents}$$`
      };
    }
  },

  // --- 4P1 : Proportionnalité, pourcentages et vitesses moyennes 4ème ---
  generate4P1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Quatrième proportionnelle directe, recette ou prix unitaire)
      const subType = this.randChoice(['tableau', 'recette', 'prix_kg']);

      if (subType === 'tableau') {
        const a = this.randInt(2, 6);
        const mult = this.randInt(3, 7);
        const b = a * mult;
        const c = this.randInt(3, 8);
        const d = c * mult;

        return {
          chapterId: '4P1',
          tier: 1,
          title: "Quatrième proportionnelle (Produit en croix)",
          statement: `Dans un tableau de proportionnalité :\n$${a}$ correspond à $${b}$.\n**Quelle valeur correspond à $${c}$ ?**`,
          type: "exact",
          answer: String(d),
          placeholder: `Ex: ${d}`,
          hint1: `Le coefficient de proportionnalité est $\\frac{${b}}{${a}} = ${mult}$. Multiplie $${c}$ par ce coefficient.`,
          solution: `$$x = \\frac{${b} \\times ${c}}{${a}} = ${d}$$`
        };
      } else if (subType === 'recette') {
        const persInit = 4;
        const persFinal = this.randChoice([6, 8, 10, 12]);
        const farineBase = this.randChoice([200, 250, 300]);
        const farineAns = (farineBase / persInit) * persFinal;
        return {
          chapterId: '4P1',
          tier: 1,
          title: "Proportionnalité dans une recette de cuisine",
          statement: `Une recette de gâteau pour $${persInit}$ personnes nécessite $${farineBase}\\text{ g}$ de farine.\n**Quelle quantité de farine en grammes faut-il pour $${persFinal}$ personnes ?**`,
          type: "exact",
          answer: String(farineAns),
          placeholder: `Ex: ${farineAns}`,
          hint1: `Calcule la quantité pour 1 personne : $\\frac{${farineBase}}{${persInit}} = ${farineBase / persInit}\\text{ g}$, puis multiplie par $${persFinal}$.`,
          solution: `Quantité pour 1 personne : $\\frac{${farineBase}}{${persInit}} = ${farineBase / persInit}\\text{ g}$.\nPour $${persFinal}$ personnes : $${farineBase / persInit} \\times ${persFinal} = ${farineAns}\\text{ g}$.`
        };
      } else {
        const kg = this.randInt(3, 7);
        const prixUnitaire = this.randInt(2, 6);
        const total = kg * prixUnitaire;
        const targetKg = this.randInt(8, 15);
        const targetPrix = targetKg * prixUnitaire;
        return {
          chapterId: '4P1',
          tier: 1,
          title: "Prix proportionnel à la quantité",
          statement: `$${kg}\\text{ kg}$ de pommes coûtent $${total}\\text{ €}$.\n**Combien coûtent $${targetKg}\\text{ kg}$ de ces mêmes pommes en euros ?**`,
          type: "exact",
          answer: String(targetPrix),
          placeholder: `Ex: ${targetPrix}`,
          hint1: `Prix au kilo : $\\frac{${total}}{${kg}} = ${prixUnitaire}\\text{ €/kg}$. Multiplie par $${targetKg}$.`,
          solution: `Prix au kilo : $${total} \\div ${kg} = ${prixUnitaire}\\text{ €/kg}$.\nPrix pour $${targetKg}\\text{ kg}$ : $${targetKg} \\times ${prixUnitaire} = ${targetPrix}\\text{ €}$.`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Remise en euros, prix final soldé, augmentation ou calcul d'un pourcentage)
      const subType = this.randChoice(['remise_euros', 'prix_apres_remise', 'augmentation', 'trouver_pct']);

      if (subType === 'remise_euros') {
        const p = this.randChoice([10, 15, 20, 25, 30, 40, 50]);
        const prix = this.randChoice([60, 80, 120, 140, 160, 200]);
        const remise = (prix * p) / 100;

        return {
          chapterId: '4P1',
          tier: 2,
          title: "Calcul du montant d'une réduction",
          statement: `Un article coûte $${prix}\\text{ €}$. Le magasin offre une remise de $${p}\\%$.\n**Quel est le montant de la remise en euros ?**`,
          type: "exact",
          answer: String(remise),
          placeholder: `Ex: ${remise}`,
          hint1: `Calcule $\\frac{${p}}{100} \\times ${prix}$.`,
          solution: `$$\\text{Remise} = ${prix} \\times \\frac{${p}}{100} = ${remise}\\text{ €}$$`
        };
      } else if (subType === 'prix_apres_remise') {
        const p = this.randChoice([10, 20, 30, 50]);
        const prix = this.randChoice([50, 70, 80, 100, 150]);
        const remise = (prix * p) / 100;
        const prixFinal = prix - remise;
        return {
          chapterId: '4P1',
          tier: 2,
          title: "Prix final après réduction",
          statement: `Une veste affichée à $${prix}\\text{ €}$ bénéficie d'une réduction de $${p}\\%$.\n**Quel est son nouveau prix en euros après réduction ?**`,
          type: "exact",
          answer: String(prixFinal),
          placeholder: `Ex: ${prixFinal}`,
          hint1: `Montant de la réduction : $\\frac{${p}}{100} \\times ${prix} = ${remise}\\text{ €}$. Nouveau prix = $${prix} - ${remise}$.`,
          solution: `$$\\text{Réduction} = ${prix} \\times \\frac{${p}}{100} = ${remise}\\text{ €}$$\n$$\\text{Prix final} = ${prix} - ${remise} = ${prixFinal}\\text{ €}$$`
        };
      } else if (subType === 'augmentation') {
        const p = this.randChoice([5, 10, 15, 20]);
        const loyer = this.randChoice([400, 500, 600, 700, 800]);
        const hausse = (loyer * p) / 100;
        return {
          chapterId: '4P1',
          tier: 2,
          title: "Montant d'une augmentation en pourcentage",
          statement: `Un loyer de $${loyer}\\text{ €}$ augmente de $${p}\\%$.\n**Quel est le montant de l'augmentation en euros ?**`,
          type: "exact",
          answer: String(hausse),
          placeholder: `Ex: ${hausse}`,
          hint1: `Calcule $\\frac{${p}}{100} \\times ${loyer}$.`,
          solution: `$$\\text{Augmentation} = ${loyer} \\times \\frac{${p}}{100} = ${hausse}\\text{ €}$$`
        };
      } else {
        const total = this.randChoice([20, 25, 40, 50, 200]);
        const pct = this.randChoice([15, 20, 30, 40, 60]);
        const count = (total * pct) / 100;
        return {
          chapterId: '4P1',
          tier: 2,
          title: "Calculer un pourcentage",
          statement: `Dans une classe de $${total}$ élèves, $${count}$ élèves sont demi-pensionnaires.\n**Quel est le pourcentage d'élèves demi-pensionnaires ?**`,
          type: "exact",
          answer: String(pct),
          placeholder: `Ex: ${pct}`,
          hint1: `Formule : $\\frac{${count}}{${total}} \\times 100$.`,
          solution: `$$\\text{Pourcentage} = \\frac{${count}}{${total}} \\times 100 = ${pct}\\%$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (Vitesse moyenne, distance ou durée avec conversion)
      const subType = this.randChoice(['vitesse_1h30', 'vitesse_45min', 'distance_trajet', 'duree_minutes']);

      if (subType === 'vitesse_1h30') {
        const speed = this.randChoice([60, 80, 90, 100]);
        const dist = speed * 1.5; // 1h30

        return {
          chapterId: '4P1',
          tier: 3,
          title: "Vitesse moyenne sur un trajet de 1h30",
          statement: `Un automobiliste parcourt une distance de $d = ${dist}\\text{ km}$ en une durée de $1\\text{ h } 30\\text{ min}$.\n**Quelle est sa vitesse moyenne en km/h ?**`,
          type: "exact",
          answer: String(speed),
          placeholder: `Ex: ${speed}`,
          hint1: "Convertis la durée en heures décimales : $1\\text{ h } 30\\text{ min} = 1{,}5\\text{ h}$. Formule : $v = d / t$.",
          solution: `$$t = 1{,}5\\text{ h}$$\n$$v = \\frac{d}{t} = \\frac{${dist}}{1{,}5} = ${speed}\\text{ km/h}$$`
        };
      } else if (subType === 'vitesse_45min') {
        const speed = this.randChoice([40, 60, 80, 100, 120]);
        const dist = (speed * 45) / 60; // 0.75h
        return {
          chapterId: '4P1',
          tier: 3,
          title: "Vitesse moyenne sur un trajet de 45 minutes",
          statement: `Un train effectue un trajet de $d = ${dist}\\text{ km}$ en une durée de $45\\text{ minutes}$.\n**Quelle est sa vitesse moyenne en km/h ?**`,
          type: "exact",
          answer: String(speed),
          placeholder: `Ex: ${speed}`,
          hint1: "$45\\text{ min} = \\frac{45}{60}\\text{ h} = 0{,}75\\text{ h}$. Formule : $v = \\frac{d}{t}$.",
          solution: `$$t = 0{,}75\\text{ h}$$\n$$v = \\frac{${dist}}{0{,}75} = ${speed}\\text{ km/h}$$`
        };
      } else if (subType === 'distance_trajet') {
        const speed = this.randChoice([70, 80, 90, 110]);
        const dureeH = 2.5; // 2h30
        const dist = speed * dureeH;
        return {
          chapterId: '4P1',
          tier: 3,
          title: "Distance parcourue connaissant vitesse et durée",
          statement: `Une voiture roule à une vitesse constante de $${speed}\\text{ km/h}$ pendant $2\\text{ h } 30\\text{ min}$.\n**Quelle distance parcourt-elle en km ?**`,
          type: "exact",
          answer: String(dist),
          placeholder: `Ex: ${dist}`,
          hint1: "Convertis la durée en heures : $2\\text{ h } 30\\text{ min} = 2{,}5\\text{ h}$. Formule : $d = v \\times t$.",
          solution: `$$d = ${speed} \\times 2{,}5 = ${dist}\\text{ km}$$`
        };
      } else {
        const speed = this.randChoice([60, 90, 120]);
        const minutes = this.randChoice([20, 30, 40]);
        const dist = (speed * minutes) / 60;
        return {
          chapterId: '4P1',
          tier: 3,
          title: "Durée d'un trajet en minutes",
          statement: `Un motard roule à une vitesse moyenne de $${speed}\\text{ km/h}$ et parcourt une distance de $${dist}\\text{ km}$.\n**Combien de minutes a duré son trajet ?**`,
          type: "exact",
          answer: String(minutes),
          placeholder: `Ex: ${minutes}`,
          hint1: `Temps en heures : $t = \\frac{d}{v} = \\frac{${dist}}{${speed}}\\text{ h}$. Multiplie par 60 pour obtenir les minutes.`,
          solution: `$$t = \\frac{${dist}}{${speed}} = ${dist / speed}\\text{ h} = ${dist / speed} \\times 60 = ${minutes}\\text{ minutes}$$`
        };
      }
    } else {
      // Palier 4 : Défi 3ème (Vitesse moyenne sur deux étapes successives)
      const configs = [
        { d: 60, v1: 60, v2: 30, t1: 1, t2: 2, vMoy: 40 },
        { d: 120, v1: 120, v2: 60, t1: 1, t2: 2, vMoy: 80 },
        { d: 90, v1: 90, v2: 45, t1: 1, t2: 2, vMoy: 60 },
        { d: 30, v1: 30, v2: 15, t1: 1, t2: 2, vMoy: 20 },
        { d: 120, v1: 60, v2: 40, t1: 2, t2: 3, vMoy: 48 },
        { d: 150, v1: 75, v2: 50, t1: 2, t2: 3, vMoy: 60 }
      ];
      const cfg = this.randChoice(configs);

      return {
        chapterId: '4P1',
        tier: 4,
        title: "Défi 3ème : Vitesse moyenne sur deux étapes (Le piège de la moyenne)",
        statement: `Un cycliste parcourt un trajet de $${cfg.d * 2}\\text{ km}$ en deux tronçons égaux :\n- Il parcourt les premiers $${cfg.d}\\text{ km}$ à la vitesse de $${cfg.v1}\\text{ km/h}$.\n- Il parcourt les $${cfg.d}\\text{ km}$ restants à la vitesse de $${cfg.v2}\\text{ km/h}$.\n\n**Quelle est sa vitesse moyenne sur l'ensemble des $${cfg.d * 2}\\text{ km}$ en km/h ?**`,
        type: "exact",
        answer: String(cfg.vMoy),
        placeholder: `Ex: ${cfg.vMoy}`,
        hint1: `Attention : la vitesse moyenne n'est PAS la moyenne de ${cfg.v1} et ${cfg.v2} !\nCalcule le temps passé sur chaque tronçon : $t_1 = ${cfg.d} / ${cfg.v1} = ${cfg.t1}\\text{ h}$ et $t_2 = ${cfg.d} / ${cfg.v2} = ${cfg.t2}\\text{ h}$. Puis applique $v = \\frac{d_{\\text{total}}}{t_{\\text{total}}}$.`,
        solution: `1. Durée du premier tronçon :\n$$t_1 = \\frac{${cfg.d}\\text{ km}}{${cfg.v1}\\text{ km/h}} = ${cfg.t1}\\text{ h}$$\n2. Durée du second tronçon :\n$$t_2 = \\frac{${cfg.d}\\text{ km}}{${cfg.v2}\\text{ km/h}} = ${cfg.t2}\\text{ h}$$\n3. Durée totale : $t_{\\text{total}} = ${cfg.t1} + ${cfg.t2} = ${cfg.t1 + cfg.t2}\\text{ h}$.\n4. Vitesse moyenne globale :\n$$v_{\\text{moy}} = \\frac{${cfg.d * 2}\\text{ km}}{${cfg.t1 + cfg.t2}\\text{ h}} = ${cfg.vMoy}\\text{ km/h}$$`
      };
    }
  },


  // =========================================================================
  // CHAPITRES 5ème (CYCLE 4) - PALIERS 1 À 4
  // =========================================================================

  // --- 5N1 : Priorités opératoires (5ème) ---
  generate5N1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Multiplication et division prioritaires sur addition et soustraction)
      const subType = this.randChoice(['add_mult', 'mult_add', 'sub_mult', 'mult_sub', 'add_div', 'sub_div']);
      
      if (subType === 'add_mult') {
        const a = this.randInt(2, 9);
        const b = this.randInt(2, 8);
        const c = this.randInt(3, 9);
        const ans = a + b * c;
        return {
          chapterId: '5N1',
          tier: 1,
          title: "Priorité de la multiplication : $a + b \\times c$",
          statement: `Calculer la valeur de l'expression numérique :\n$$A = ${a} + ${b} \\times ${c}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: "La multiplication est prioritaire sur l'addition : calcule d'abord le produit.",
          solution: `$$A = ${a} + (${b} \\times ${c}) = ${a} + ${b * c} = ${ans}$$`
        };
      } else if (subType === 'mult_add') {
        const a = this.randInt(3, 8);
        const b = this.randInt(3, 9);
        const c = this.randInt(2, 15);
        const ans = a * b + c;
        return {
          chapterId: '5N1',
          tier: 1,
          title: "Priorité opératoire : $a \\times b + c$",
          statement: `Calculer la valeur de l'expression numérique :\n$$A = ${a} \\times ${b} + ${c}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: "Effectue d'abord la multiplication, puis ajoute le terme final.",
          solution: `$$A = (${a} \\times ${b}) + ${c} = ${a * b} + ${c} = ${ans}$$`
        };
      } else if (subType === 'sub_mult') {
        const b = this.randInt(2, 6);
        const c = this.randInt(2, 7);
        const a = b * c + this.randInt(3, 15);
        const ans = a - b * c;
        return {
          chapterId: '5N1',
          tier: 1,
          title: "Priorité opératoire : $a - b \\times c$",
          statement: `Calculer la valeur de l'expression numérique :\n$$A = ${a} - ${b} \\times ${c}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Calcule d'abord le produit $${b} \\times ${c} = ${b * c}$, puis soustrais-le de $${a}$.`,
          solution: `$$A = ${a} - (${b} \\times ${c}) = ${a} - ${b * c} = ${ans}$$`
        };
      } else if (subType === 'mult_sub') {
        const a = this.randInt(4, 9);
        const b = this.randInt(3, 8);
        const c = this.randInt(2, a * b - 5);
        const ans = a * b - c;
        return {
          chapterId: '5N1',
          tier: 1,
          title: "Priorité opératoire : $a \\times b - c$",
          statement: `Calculer la valeur de l'expression numérique :\n$$A = ${a} \\times ${b} - ${c}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Effectue d'abord la multiplication $${a} \\times ${b}$, puis soustrais $${c}$.`,
          solution: `$$A = (${a} \\times ${b}) - ${c} = ${a * b} - ${c} = ${ans}$$`
        };
      } else if (subType === 'add_div') {
        const c = this.randInt(2, 6);
        const q = this.randInt(2, 9);
        const b = c * q;
        const a = this.randInt(3, 20);
        const ans = a + q;
        return {
          chapterId: '5N1',
          tier: 1,
          title: "Priorité de la division : $a + b \\div c$",
          statement: `Calculer la valeur de l'expression numérique :\n$$A = ${a} + ${b} \\div ${c}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `La division est prioritaire sur l'addition : effectue d'abord $${b} \\div ${c}$.`,
          solution: `$$A = ${a} + (${b} \\div ${c}) = ${a} + ${q} = ${ans}$$`
        };
      } else {
        const c = this.randInt(2, 5);
        const q = this.randInt(2, 8);
        const b = c * q;
        const a = q + this.randInt(4, 15);
        const ans = a - q;
        return {
          chapterId: '5N1',
          tier: 1,
          title: "Priorité de la division : $a - b \\div c$",
          statement: `Calculer la valeur de l'expression numérique :\n$$A = ${a} - ${b} \\div ${c}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `La division est prioritaire : calcule $${b} \\div ${c} = ${q}$, puis effectue la soustraction.`,
          solution: `$$A = ${a} - (${b} \\div ${c}) = ${a} - ${q} = ${ans}$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Parenthèses prioritaires, divisions avec parenthèses et distributivité)
      const subType = this.randChoice(['par_mult', 'mult_par', 'par_sub', 'par_div', 'distrib']);

      if (subType === 'par_mult') {
        const a = this.randInt(3, 9);
        const b = this.randInt(2, 8);
        const c = this.randInt(3, 6);
        const ans = (a + b) * c;
        return {
          chapterId: '5N1',
          tier: 2,
          title: "Parenthèses prioritaires : $(a + b) \\times c$",
          statement: `Calculer la valeur de l'expression suivante :\n$$B = (${a} + ${b}) \\times ${c}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: "Les calculs entre parenthèses sont prioritaires sur toutes les autres opérations.",
          solution: `$$B = (${a + b}) \\times ${c} = ${ans}$$`
        };
      } else if (subType === 'mult_par') {
        const a = this.randInt(3, 7);
        const b = this.randInt(8, 16);
        const c = this.randInt(2, b - 2);
        const ans = a * (b - c);
        return {
          chapterId: '5N1',
          tier: 2,
          title: "Parenthèses prioritaires : $a \\times (b - c)$",
          statement: `Calculer la valeur de l'expression suivante :\n$$B = ${a} \\times (${b} - ${c})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Calcule d'abord la soustraction entre parenthèses : $${b} - ${c} = ${b - c}$.`,
          solution: `$$B = ${a} \\times (${b - c}) = ${ans}$$`
        };
      } else if (subType === 'par_sub') {
        const a = this.randInt(25, 55);
        const b = this.randInt(3, 8);
        const c = this.randInt(2, 6);
        const ans = a - (b * c);
        return {
          chapterId: '5N1',
          tier: 2,
          title: "Priorité des parenthèses : $a - (b \\times c)$",
          statement: `Calculer la valeur de l'expression suivante :\n$$B = ${a} - (${b} \\times ${c})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Effectue le calcul entre parenthèses en premier : $${b} \\times ${c} = ${b * c}$.`,
          solution: `$$B = ${a} - ${b * c} = ${ans}$$`
        };
      } else if (subType === 'par_div') {
        const c = this.randInt(2, 6);
        const q = this.randInt(3, 9);
        const total = c * q;
        const a = this.randInt(2, total - 2);
        const b = total - a;
        return {
          chapterId: '5N1',
          tier: 2,
          title: "Parenthèses et division : $(a + b) \\div c$",
          statement: `Calculer la valeur de l'expression suivante :\n$$B = (${a} + ${b}) \\div ${c}$$`,
          type: "exact",
          answer: String(q),
          placeholder: `Ex: ${q}`,
          hint1: `Calcule la somme entre parenthèses en premier : $${a} + ${b} = ${total}$.`,
          solution: `$$B = (${total}) \\div ${c} = ${q}$$`
        };
      } else {
        // Distributivité simple
        const k = this.randChoice([3, 4, 6, 7, 8]);
        const a = this.randInt(11, 29);
        const b = 100 - a > 0 && Math.random() < 0.5 ? 100 - a : (a < 10 ? 10 - a : this.randInt(2, 9));
        const ans = k * (a + b);
        return {
          chapterId: '5N1',
          tier: 2,
          title: "Distributivité et calcul astucieux",
          statement: `Calculer astucieusement en factorisant par $${k}$ :\n$$B = ${k} \\times ${a} + ${k} \\times ${b}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Formule de factorisation : $k \\times a + k \\times b = k \\times (a + b) = ${k} \\times (${a} + ${b})$.`,
          solution: `$$B = ${k} \\times (${a} + ${b}) = ${k} \\times ${a + b} = ${ans}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Enchaînements avec 4 termes, doubles parenthèses ou crochets)
      const subType = this.randChoice(['prod_prod', 'prod_par_par', 'chain_4', 'bracket_simple']);

      if (subType === 'prod_prod') {
        const a = this.randInt(3, 8);
        const b = this.randInt(4, 9);
        const c = this.randInt(2, 6);
        const d = this.randInt(3, 7);
        const isPlus = Math.random() < 0.5;
        const ans = isPlus ? (a * b + c * d) : (a * b - c * d);
        return {
          chapterId: '5N1',
          tier: 3,
          title: `Somme/différence de deux produits : $a \\times b ${isPlus ? '+' : '-'} c \\times d$`,
          statement: `Calculer la valeur exacte de l'expression :\n$$C = ${a} \\times ${b} ${isPlus ? '+' : '-'} ${c} \\times ${d}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Les multiplications sont prioritaires : calcule $${a} \\times ${b} = ${a * b}$ et $${c} \\times ${d} = ${c * d}$.`,
          solution: `$$C = (${a * b}) ${isPlus ? '+' : '-'} (${c * d}) = ${ans}$$`
        };
      } else if (subType === 'prod_par_par') {
        const a = this.randInt(12, 25);
        const b = this.randInt(2, 8);
        const c = this.randInt(3, 7);
        const d = this.randInt(2, 5);
        const ans = (a - b) * (c + d);
        return {
          chapterId: '5N1',
          tier: 3,
          title: "Produit de deux parenthèses : $(a - b) \\times (c + d)$",
          statement: `Calculer la valeur de l'expression :\n$$C = (${a} - ${b}) \\times (${c} + ${d})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: "Calcule séparément l'intérieur de chaque parenthèse avant de multiplier les deux résultats.",
          solution: `$$C = (${a - b}) \\times (${c + d}) = ${ans}$$`
        };
      } else if (subType === 'chain_4') {
        const a = this.randInt(30, 65);
        const b = this.randInt(2, 5);
        const c = this.randInt(3, 6);
        const d = this.randInt(2, 9);
        const ans = a - b * c + d;
        return {
          chapterId: '5N1',
          tier: 3,
          title: "Enchaînement d'opérations : $a - b \\times c + d$",
          statement: `Calculer la valeur de l'expression numérique :\n$$C = ${a} - ${b} \\times ${c} + ${d}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Effectue d'abord la multiplication $${b} \\times ${c} = ${b * c}$, puis les additions/soustractions de gauche à droite.`,
          solution: `1. Multiplication prioritaire : $${b} \\times ${c} = ${b * c}$.\n2. De gauche à droite :\n$$C = ${a} - ${b * c} + ${d} = ${a - b * c} + ${d} = ${ans}$$`
        };
      } else {
        const c = this.randInt(2, 5);
        const d = this.randInt(2, 5);
        const b = c + d + this.randInt(2, 6);
        const a = this.randInt(3, 7);
        const ans = a * (b - (c + d));
        return {
          chapterId: '5N1',
          tier: 3,
          title: "Parenthèses et crochets imbriqués",
          statement: `Calculer la valeur de l'expression :\n$$C = ${a} \\times [${b} - (${c} + ${d})]$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Effectue d'abord la parenthèse intérieure $(${c} + ${d}) = ${c + d}$, puis le crochet $${b} - ${c + d}$.`,
          solution: `$$C = ${a} \\times [${b} - ${c + d}] = ${a} \\times ${b - (c + d)} = ${ans}$$`
        };
      }
    } else {
      // Palier 4 : Défi 4ème / Difficulté Maximale (Crochets et parenthèses imbriquées)
      const configs = [
        {
          expr: "[48 - (3 \\times 7 - 5)] \\div 4 + 6 \\times (14 - 3 \\times 3)",
          step1: "3 \\times 7 - 5 = 21 - 5 = 16",
          step2: "48 - 16 = 32",
          step3: "32 \\div 4 = 8",
          step4: "14 - 3 \\times 3 = 14 - 9 = 5",
          step5: "6 \\times 5 = 30",
          ans: 38
        },
        {
          expr: "[60 - (4 \\times 8 - 7)] \\div 5 + 7 \\times (18 - 2 \\times 7)",
          step1: "4 \\times 8 - 7 = 32 - 7 = 25",
          step2: "60 - 25 = 35",
          step3: "35 \\div 5 = 7",
          step4: "18 - 2 \\times 7 = 18 - 14 = 4",
          step5: "7 \\times 4 = 28",
          ans: 35
        },
        {
          expr: "[75 - (5 \\times 9 - 10)] \\div 8 + 4 \\times (25 - 4 \\times 5)",
          step1: "5 \\times 9 - 10 = 45 - 10 = 35",
          step2: "75 - 35 = 40",
          step3: "40 \\div 8 = 5",
          step4: "25 - 4 \\times 5 = 25 - 20 = 5",
          step5: "4 \\times 5 = 20",
          ans: 25
        },
        {
          expr: "50 - [3 \\times (8 + 4) - 16] \\div 2 + 5 \\times (7 - 2 \\times 2)",
          step1: "8 + 4 = 12 \\implies 3 \\times 12 - 16 = 36 - 16 = 20",
          step2: "20 \\div 2 = 10",
          step3: "7 - 2 \\times 2 = 7 - 4 = 3",
          step4: "5 \\times 3 = 15",
          step5: "50 - 10 + 15 = 55",
          ans: 55
        }
      ];
      const cfg = this.randChoice(configs);

      return {
        chapterId: '5N1',
        tier: 4,
        title: "Défi 4ème : Expression complexe avec crochets et parenthèses imbriquées",
        statement: `Calculer la valeur exacte de l'expression :\n$$E = ${cfg.expr}$$`,
        type: "exact",
        answer: String(cfg.ans),
        placeholder: `Ex: ${cfg.ans}`,
        hint1: "Règle des priorités imbriquées : on commence par les parenthèses les plus intérieures, puis les crochets, puis les multiplications/divisions, et enfin les additions/soustractions.",
        solution: `1. Intérieur du crochet : $${cfg.step1}$\n2. Division du crochet : $${cfg.step2 || cfg.step3}$\n3. Seconde parenthèse et produit : $${cfg.step4 || cfg.step5}$\n4. Résultat final :\n$$E = ${cfg.ans}$$`
      };
    }
  },

  // --- 5N2 : Nombres relatifs (initiation, somme et différence) ---
  generate5N2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (5 variantes dynamiques riches : même signe, signes contraires simples, opposés, distance à zéro)
      const subType = this.randChoice(['two_neg', 'pos_neg_easy', 'opposites', 'opp_def', 'zero_dist']);

      if (subType === 'two_neg') {
        // Addition de 2 relatifs négatifs : (-a) + (-b)
        const a = this.randInt(2, 9);
        const b = this.randInt(2, 9);
        const ans = -(a + b);
        return {
          chapterId: '5N2',
          tier: 1,
          title: "Addition de deux nombres relatifs négatifs",
          statement: `Calculer la somme de deux nombres de même signe :\n$$S = (-${a}) + (-${b})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: "Pour additionner deux nombres négatifs, on garde le signe '-' et on additionne les distances à zéro.",
          solution: `$$S = -(${a} + ${b}) = ${ans}$$`
        };
      } else if (subType === 'pos_neg_easy') {
        // Somme d'un positif et d'un négatif simple (ex: 7 + (-3) ou (-4) + 9)
        const isPosFirst = Math.random() < 0.5;
        const pos = this.randInt(5, 14);
        const neg = this.randInt(2, 6);
        const ans = pos - neg;
        return {
          chapterId: '5N2',
          tier: 1,
          title: "Addition d'un nombre positif et d'un nombre négatif",
          statement: isPosFirst 
            ? `Calculer la somme suivante :\n$$S = ${pos} + (-${neg})$$`
            : `Calculer la somme suivante :\n$$S = (-${neg}) + ${pos}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: "Ajouter un nombre négatif revient à reculer sur la droite graduée : cela équivaut à soustraire sa distance à zéro.",
          solution: isPosFirst
            ? `$$S = ${pos} - ${neg} = ${ans}$$`
            : `$$S = (-${neg}) + ${pos} = ${pos} - ${neg} = ${ans}$$`
        };
      } else if (subType === 'opposites') {
        // Somme de deux nombres opposés (-a) + (+a) = 0
        const a = this.randInt(3, 15);
        return {
          chapterId: '5N2',
          tier: 1,
          title: "Somme de deux nombres opposés",
          statement: `Calculer la somme suivante :\n$$S = (-${a}) + (+${a})$$`,
          type: "exact",
          answer: "0",
          placeholder: "Ex: 0",
          hint1: "Deux nombres opposés ont des signes contraires et la même distance à zéro. Leur somme est toujours nulle.",
          solution: `$$(-${a}) + (+${a}) = 0$$\nLa somme de deux nombres opposés est toujours égale à $0$.`
        };
      } else if (subType === 'opp_def') {
        // Notion d'opposé
        const isNeg = Math.random() < 0.5;
        const n = this.randInt(3, 25);
        const numStr = isNeg ? `-${n}` : `+${n}`;
        const ans = isNeg ? String(n) : `-${n}`;
        return {
          chapterId: '5N2',
          tier: 1,
          title: "Opposé d'un nombre relatif",
          statement: `**Quel est l'opposé du nombre relatif $${numStr}$ ?**`,
          type: "exact",
          answer: ans,
          placeholder: isNeg ? `Ex: ${n}` : `Ex: -${n}`,
          hint1: "Deux nombres opposés ont la même distance à zéro mais des signes contraires.",
          solution: `L'opposé de $${numStr}$ est **$${ans}$** car $(${numStr}) + (${ans}) = 0$.`
        };
      } else {
        // Distance à zéro
        const n = this.randInt(4, 25);
        return {
          chapterId: '5N2',
          tier: 1,
          title: "Distance à zéro d'un nombre relatif",
          statement: `**Quelle est la distance à zéro du nombre relatif $-${n}$ ?**`,
          type: "exact",
          answer: String(n),
          placeholder: `Ex: ${n}`,
          hint1: "La distance à zéro d'un nombre est toujours un nombre positif : c'est le nombre sans son signe.",
          solution: `La distance à zéro de $-${n}$ est le nombre positif **$${n}$** (noté $|-${n}| = ${n}$).`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Addition de signes contraires, soustraction négative, égalités à trou)
      const subType = this.randChoice(['neg_dominant', 'pos_dominant', 'sub_easy', 'trou']);

      if (subType === 'neg_dominant') {
        const a = this.randInt(7, 18);
        const b = this.randInt(2, a - 1);
        const ans = -a + b;
        return {
          chapterId: '5N2',
          tier: 2,
          title: "Addition de signes contraires (résultat négatif)",
          statement: `Calculer la somme suivante :\n$$S = (-${a}) + ${b}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Le nombre négatif ($-${a}$) a la plus grande distance à zéro ($${a} > ${b}$). Le résultat est donc négatif : $-(${a} - ${b})$.`,
          solution: `$$(-${a}) + ${b} = -(${a} - ${b}) = ${ans}$$`
        };
      } else if (subType === 'pos_dominant') {
        const a = this.randInt(3, 9);
        const b = a + this.randInt(3, 11);
        const ans = -a + b;
        return {
          chapterId: '5N2',
          tier: 2,
          title: "Addition de signes contraires (résultat positif)",
          statement: `Calculer la somme suivante :\n$$S = (-${a}) + ${b}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Le nombre positif ($${b}$) a la plus grande distance à zéro ($${b} > ${a}$). Le résultat est positif : $${b} - ${a}$.`,
          solution: `$$(-${a}) + ${b} = ${b} - ${a} = ${ans}$$`
        };
      } else if (subType === 'sub_easy') {
        const a = this.randInt(2, 9);
        const diff = this.randInt(3, 8);
        const b = a + diff;
        const ans = -diff;
        return {
          chapterId: '5N2',
          tier: 2,
          title: "Soustraction simple aboutissant à un nombre négatif",
          statement: `Calculer la différence suivante :\n$$D = ${a} - ${b}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Comme $${a} < ${b}$, le résultat est négatif : $-(${b} - ${a})$.`,
          solution: `$$D = ${a} - ${b} = -(${b} - ${a}) = ${ans}$$`
        };
      } else {
        const a = this.randInt(3, 9);
        const ans = this.randInt(2, 8);
        const b = -a + ans;
        return {
          chapterId: '5N2',
          tier: 2,
          title: "Compléter une égalité avec un nombre relatif",
          statement: `Trouver le nombre manquant $x$ qui vérifie l'égalité :\n$$(-${a}) + x = ${b}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Pour trouver $x$, calcule $${b} - (-${a}) = ${b} + ${a}$.`,
          solution: `$$x = ${b} - (-${a}) = ${b} + ${a} = ${ans}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Soustraction de relatifs, sommes de 3 termes)
      const subType = this.randChoice(['sub_neg', 'sub_pos_from_neg', 'sub_two_neg', 'sum_three']);

      if (subType === 'sub_neg') {
        const a = this.randInt(2, 14);
        const b = this.randInt(3, 14);
        const ans = a + b;
        return {
          chapterId: '5N2',
          tier: 3,
          title: "Soustraction d'un nombre négatif : $a - (-b)$",
          statement: `Calculer la différence suivante :\n$$D = ${a} - (-${b})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: "Soustraire un nombre relatif revient à ajouter son opposé : $a - (-b) = a + b$.",
          solution: `$$D = ${a} - (-${b}) = ${a} + ${b} = ${ans}$$`
        };
      } else if (subType === 'sub_pos_from_neg') {
        const a = this.randInt(3, 12);
        const b = this.randInt(4, 12);
        const ans = -a - b;
        return {
          chapterId: '5N2',
          tier: 3,
          title: "Soustraction d'un nombre positif à un négatif : $(-a) - b$",
          statement: `Calculer la différence suivante :\n$$D = (-${a}) - ${b}$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Soustraire $${b}$ revient à ajouter $-${b}$ : $(-${a}) + (-${b})$.`,
          solution: `$$D = (-${a}) - ${b} = (-${a}) + (-${b}) = -(${a} + ${b}) = ${ans}$$`
        };
      } else if (subType === 'sub_two_neg') {
        const a = this.randInt(5, 15);
        const b = this.randInt(3, 14);
        const ans = -a + b;
        return {
          chapterId: '5N2',
          tier: 3,
          title: "Soustraction de deux nombres négatifs : $(-a) - (-b)$",
          statement: `Calculer la différence suivante :\n$$D = (-${a}) - (-${b})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Transforme la soustraction en addition de l'opposé : $(-${a}) + (+${b})$.`,
          solution: `$$D = (-${a}) - (-${b}) = (-${a}) + ${b} = ${ans}$$`
        };
      } else {
        const a = this.randInt(2, 9);
        const b = this.randInt(3, 9);
        const c = this.randInt(2, 8);
        const ans = -a + b - c;
        return {
          chapterId: '5N2',
          tier: 3,
          title: "Enchaînement d'additions et soustractions de relatifs",
          statement: `Calculer la valeur de la somme algébrique :\n$$E = (-${a}) + ${b} - (+${c})$$`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Effectue les calculs de gauche à droite : commence par $(-${a}) + ${b} = ${-a + b}$.`,
          solution: `1. Première somme : $(-${a}) + ${b} = ${-a + b}$.\n2. Soustraction finale :\n$$E = (${-a + b}) - ${c} = ${ans}$$`
        };
      }
    } else {
      // Palier 4 : Défi 4ème / Difficulté Maximale (Chaîne avec crochets et multiples relatifs)
      const configs = [
        {
          expr: "(-25) - [(-14) + 8 - (-6)] + (-11)",
          stepCrochet: "(-14) + 8 + 6 = 0",
          stepFinal: "(-25) - 0 + (-11) = -36",
          ans: -36
        },
        {
          expr: "18 - [(-7) - 12 + (-5)] - (-14)",
          stepCrochet: "(-7) - 12 - 5 = -24",
          stepFinal: "18 - (-24) + 14 = 18 + 24 + 14 = 56",
          ans: 56
        },
        {
          expr: "(-30) + [15 - (-10) + (-20)] - 12",
          stepCrochet: "15 + 10 - 20 = 5",
          stepFinal: "(-30) + 5 - 12 = -37",
          ans: -37
        },
        {
          expr: "40 - [(-18) + 12 - (-10)] + [(-15) - (-5)]",
          stepCrochet: "(-18) + 12 + 10 = 4 \\quad\\text{et}\\quad (-15) + 5 = -10",
          stepFinal: "40 - 4 + (-10) = 26",
          ans: 26
        }
      ];
      const cfg = this.randChoice(configs);

      return {
        chapterId: '5N2',
        tier: 4,
        title: "Défi 4ème : Chaîne de calculs de relatifs avec crochets",
        statement: `Calculer la valeur exacte de l'expression algébrique :\n$$A = ${cfg.expr}$$`,
        type: "exact",
        answer: String(cfg.ans),
        placeholder: `Ex: ${cfg.ans}`,
        hint1: "Étape 1 : Calcule d'abord la valeur entre crochets en transformant toutes les soustractions en additions d'opposés.\nÉtape 2 : Effectue la suite d'additions de gauche à droite.",
        solution: `1. Calcul de l'intérieur des crochets :\n$$${cfg.stepCrochet}$$\n2. Remplacement et calcul final :\n$$A = ${cfg.stepFinal}$$`
      };
    }
  },

  // --- 5N3 : Fractions 5ème (égalités, comparaison, additions dénominateurs multiples) ---
  generate5N3(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Égalité de fractions, simplification, écriture décimale)
      const subType = this.randChoice(['missing_num', 'missing_den', 'simplify', 'decimal_val', 'factor']);

      if (subType === 'missing_num') {
        const num = this.randInt(2, 6);
        const den = this.randInt(3, 8);
        const k = this.randInt(2, 5);
        const bigNum = num * k;
        const bigDen = den * k;
        return {
          chapterId: '5N3',
          tier: 1,
          title: "Fractions égales : trouver le numérateur manquant",
          statement: `Compléter l'égalité de fractions pour trouver le nombre manquant $x$ :\n$$\\frac{${num}}{${den}} = \\frac{x}{${bigDen}}$$`,
          type: "exact",
          answer: String(bigNum),
          placeholder: `Ex: ${bigNum}`,
          hint1: `Remarque que le dénominateur est multiplié par $${k}$ ($${den} \\times ${k} = ${bigDen}$). Multiplie aussi le numérateur par $${k}$.`,
          solution: `$$\\frac{${num} \\times ${k}}{${den} \\times ${k}} = \\frac{${bigNum}}{${bigDen}} \\implies x = ${bigNum}$$`
        };
      } else if (subType === 'missing_den') {
        const num = this.randInt(2, 6);
        const den = this.randInt(3, 8);
        const k = this.randInt(2, 5);
        const bigNum = num * k;
        const bigDen = den * k;
        return {
          chapterId: '5N3',
          tier: 1,
          title: "Fractions égales : trouver le dénominateur manquant",
          statement: `Compléter l'égalité de fractions pour trouver le nombre manquant $x$ :\n$$\\frac{${num}}{${den}} = \\frac{${bigNum}}{x}$$`,
          type: "exact",
          answer: String(bigDen),
          placeholder: `Ex: ${bigDen}`,
          hint1: `Remarque que le numérateur a été multiplié par $${k}$ ($${num} \\times ${k} = ${bigNum}$). Multiplie aussi le dénominateur par $${k}$.`,
          solution: `$$\\frac{${num} \\times ${k}}{${den} \\times ${k}} = \\frac{${bigNum}}{${bigDen}} \\implies x = ${bigDen}$$`
        };
      } else if (subType === 'simplify') {
        const pairs = [[2, 3], [3, 4], [2, 5], [3, 5], [4, 5], [5, 6], [3, 7]];
        const [a, b] = this.randChoice(pairs);
        const k = this.randChoice([2, 3, 4, 5]);
        const bigNum = a * k;
        const bigDen = b * k;
        return {
          chapterId: '5N3',
          tier: 1,
          title: "Simplification de fraction",
          statement: `Simplifier au maximum la fraction suivante pour la rendre irréductible :\n$$F = \\frac{${bigNum}}{${bigDen}}$$`,
          type: "exact",
          answer: `${a}/${b}`,
          placeholder: `Ex: ${a}/${b}`,
          hint1: `Trouve un diviseur commun au numérateur et au dénominateur (ici $${k}$). Divise en haut et en bas par $${k}$.`,
          solution: `$$F = \\frac{${bigNum} \\div ${k}}{${bigDen} \\div ${k}} = \\frac{${a}}{${b}}$$`
        };
      } else if (subType === 'decimal_val') {
        const decimals = [
          { num: 1, den: 2, ans: "0.5" },
          { num: 3, den: 2, ans: "1.5" },
          { num: 7, den: 2, ans: "3.5" },
          { num: 1, den: 4, ans: "0.25" },
          { num: 3, den: 4, ans: "0.75" },
          { num: 1, den: 5, ans: "0.2" },
          { num: 2, den: 5, ans: "0.4" },
          { num: 3, den: 5, ans: "0.6" },
          { num: 6, den: 5, ans: "1.2" },
          { num: 7, den: 10, ans: "0.7" },
          { num: 13, den: 10, ans: "1.3" }
        ];
        const item = this.randChoice(decimals);
        return {
          chapterId: '5N3',
          tier: 1,
          title: "Écriture décimale d'une fraction",
          statement: `Donner l'écriture décimale exacte du quotient :\n$$Q = \\frac{${item.num}}{${item.den}}$$`,
          type: "exact",
          answer: item.ans,
          placeholder: `Ex: ${item.ans}`,
          hint1: `Effectue la division décimale de $${item.num}$ par $${item.den}$ ($${item.num} \\div ${item.den}$).`,
          solution: `$$Q = \\frac{${item.num}}{${item.den}} = ${item.num} \\div ${item.den} = ${item.ans}$$`
        };
      } else {
        const num = this.randInt(2, 5);
        const den = this.randInt(3, 7);
        const k = this.randInt(2, 6);
        const bigNum = num * k;
        const bigDen = den * k;
        return {
          chapterId: '5N3',
          tier: 1,
          title: "Coefficient multiplicateur entre fractions égales",
          statement: `Par quel nombre $k$ a-t-on multiplié le numérateur et le dénominateur de $\\frac{${num}}{${den}}$ pour obtenir $\\frac{${bigNum}}{${bigDen}}$ ?`,
          type: "exact",
          answer: String(k),
          placeholder: `Ex: ${k}`,
          hint1: `Calcule $${bigNum} \\div ${num}$ ou $${bigDen} \\div ${den}$.`,
          solution: `$$${num} \\times ${k} = ${bigNum} \\quad \\text{et} \\quad ${den} \\times ${k} = ${bigDen} \\implies k = ${k}$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Addition / Soustraction même dénominateur, terme manquant, entier + fraction)
      const subType = this.randChoice(['add_same', 'sub_same', 'missing_term', 'add_three', 'int_add_frac']);

      if (subType === 'add_same') {
        const d = this.randInt(5, 12);
        const a = this.randInt(1, 6);
        const b = this.randInt(1, 6);
        const sum = a + b;
        const [sN, sD] = this.simplifyFraction(sum, d);
        return {
          chapterId: '5N3',
          tier: 2,
          title: "Addition de fractions de même dénominateur",
          statement: `Calculer sous forme de fraction irréductible :\n$$S = \\frac{${a}}{${d}} + \\frac{${b}}{${d}}$$`,
          type: "exact",
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 3/5",
          hint1: `Les dénominateurs sont identiques ($${d}$). Additionne simplement les numérateurs $${a} + ${b}$.`,
          solution: `$$S = \\frac{${a} + ${b}}{${d}} = \\frac{${sum}}{${d}} = ${this.formatFraction(sum, d)}$$`
        };
      } else if (subType === 'sub_same') {
        const d = this.randInt(5, 12);
        const b = this.randInt(1, 5);
        const a = b + this.randInt(1, 6);
        const diff = a - b;
        const [sN, sD] = this.simplifyFraction(diff, d);
        return {
          chapterId: '5N3',
          tier: 2,
          title: "Soustraction de fractions de même dénominateur",
          statement: `Calculer sous forme de fraction irréductible :\n$$D = \\frac{${a}}{${d}} - \\frac{${b}}{${d}}$$`,
          type: "exact",
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 2/7",
          hint1: `Les dénominateurs sont identiques ($${d}$). Soustrais les numérateurs $${a} - ${b}$.`,
          solution: `$$D = \\frac{${a} - ${b}}{${d}} = \\frac{${diff}}{${d}} = ${this.formatFraction(diff, d)}$$`
        };
      } else if (subType === 'missing_term') {
        const d = this.randInt(5, 12);
        const a = this.randInt(1, 6);
        const missing = this.randInt(1, 6);
        const total = a + missing;
        return {
          chapterId: '5N3',
          tier: 2,
          title: "Addition à trou de fractions",
          statement: `Trouver la valeur du numérateur manquant $x$ pour vérifier l'égalité :\n$$\\frac{${a}}{${d}} + \\frac{x}{${d}} = \\frac{${total}}{${d}}$$`,
          type: "exact",
          answer: String(missing),
          placeholder: `Ex: ${missing}`,
          hint1: `Les dénominateurs sont tous égaux à $${d}$. Il suffit de résoudre $${a} + x = ${total}$.`,
          solution: `$$${a} + x = ${total} \\implies x = ${total} - ${a} = ${missing}$$`
        };
      } else if (subType === 'add_three') {
        const d = this.randChoice([7, 9, 11, 13]);
        const a = this.randInt(1, 4);
        const b = this.randInt(1, 4);
        const c = this.randInt(1, 4);
        const sum = a + b + c;
        const [sN, sD] = this.simplifyFraction(sum, d);
        return {
          chapterId: '5N3',
          tier: 2,
          title: "Somme de trois fractions de même dénominateur",
          statement: `Calculer sous forme de fraction irréductible :\n$$T = \\frac{${a}}{${d}} + \\frac{${b}}{${d}} + \\frac{${c}}{${d}}$$`,
          type: "exact",
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 5/7",
          hint1: `Additionne les trois numérateurs : $${a} + ${b} + ${c}$.`,
          solution: `$$T = \\frac{${a} + ${b} + ${c}}{${d}} = \\frac{${sum}}{${d}} = ${this.formatFraction(sum, d)}$$`
        };
      } else {
        const d = this.randInt(3, 8);
        const a = this.randInt(1, d - 1);
        const numTotal = d + a;
        return {
          chapterId: '5N3',
          tier: 2,
          title: "Somme d'un entier et d'une fraction",
          statement: `Écrire sous la forme d'une seule fraction irréductible :\n$$A = 1 + \\frac{${a}}{${d}}$$`,
          type: "exact",
          answer: `${numTotal}/${d}`,
          placeholder: `Ex: ${numTotal}/${d}`,
          hint1: `Écris $1$ sous la forme d'une fraction de dénominateur $${d}$ : $1 = \\frac{${d}}{${d}}$.`,
          solution: `$$A = \\frac{${d}}{${d}} + \\frac{${a}}{${d}} = \\frac{${d} + ${a}}{${d}} = \\frac{${numTotal}}{${d}}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Dénominateur multiple : addition, soustraction, entier - fraction)
      const subType = this.randChoice(['add_mult', 'sub_mult', 'sub_from_mult', 'int_sub_frac']);

      if (subType === 'add_mult') {
        const d = this.randChoice([3, 4, 5, 6, 7]);
        const k = this.randChoice([2, 3, 4]);
        const bigD = d * k;
        const a = this.randInt(1, 4);
        const b = this.randInt(1, 5);
        const numTotal = a * k + b;
        const [sN, sD] = this.simplifyFraction(numTotal, bigD);
        return {
          chapterId: '5N3',
          tier: 3,
          title: "Addition de fractions (dénominateurs multiples)",
          statement: `Calculer sous forme de fraction irréductible :\n$$A = \\frac{${a}}{${d}} + \\frac{${b}}{${bigD}}$$`,
          type: "exact",
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 7/12",
          hint1: `Le dénominateur commun est $${bigD}$ ($${d} \\times ${k} = ${bigD}$). Multiplie le haut et le bas de la 1ère fraction par $${k}$.`,
          solution: `$$A = \\frac{${a} \\times ${k}}{${d} \\times ${k}} + \\frac{${b}}{${bigD}} = \\frac{${a * k}}{${bigD}} + \\frac{${b}}{${bigD}} = \\frac{${numTotal}}{${bigD}} = ${this.formatFraction(numTotal, bigD)}$$`
        };
      } else if (subType === 'sub_mult') {
        const d = this.randChoice([3, 4, 5, 6]);
        const k = this.randChoice([2, 3]);
        const bigD = d * k;
        const a = this.randInt(2, 4);
        const b = this.randInt(1, a * k - 1);
        const numTotal = a * k - b;
        const [sN, sD] = this.simplifyFraction(numTotal, bigD);
        return {
          chapterId: '5N3',
          tier: 3,
          title: "Soustraction de fractions (dénominateurs multiples)",
          statement: `Calculer sous forme de fraction irréductible :\n$$D = \\frac{${a}}{${d}} - \\frac{${b}}{${bigD}}$$`,
          type: "exact",
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 5/12",
          hint1: `Mets au même dénominateur commun ($${bigD}$) en multipliant la première fraction par $${k}$.`,
          solution: `$$D = \\frac{${a} \\times ${k}}{${bigD}} - \\frac{${b}}{${bigD}} = \\frac{${a * k} - ${b}}{${bigD}} = \\frac{${numTotal}}{${bigD}} = ${this.formatFraction(numTotal, bigD)}$$`
        };
      } else if (subType === 'sub_from_mult') {
        const d = this.randChoice([3, 4, 5, 6]);
        const k = this.randChoice([2, 3]);
        const bigD = d * k;
        const a = this.randInt(1, 3);
        const b = a * k + this.randInt(1, 4);
        const numTotal = b - a * k;
        const [sN, sD] = this.simplifyFraction(numTotal, bigD);
        return {
          chapterId: '5N3',
          tier: 3,
          title: "Différence de fractions avec dénominateur multiple",
          statement: `Calculer sous forme de fraction irréductible :\n$$B = \\frac{${b}}{${bigD}} - \\frac{${a}}{${d}}$$`,
          type: "exact",
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: "Ex: 1/6",
          hint1: `Multiplie le numérateur et le dénominateur de la deuxième fraction par $${k}$ pour avoir $${bigD}$ au dénominateur.`,
          solution: `$$B = \\frac{${b}}{${bigD}} - \\frac{${a} \\times ${k}}{${d} \\times ${k}} = \\frac{${b} - ${a * k}}{${bigD}} = \\frac{${numTotal}}{${bigD}} = ${this.formatFraction(numTotal, bigD)}$$`
        };
      } else {
        const d = this.randChoice([3, 4, 5, 6]);
        const n = this.randInt(1, 3);
        const a = this.randInt(1, d * n - 1);
        const numTotal = n * d - a;
        const [sN, sD] = this.simplifyFraction(numTotal, d);
        return {
          chapterId: '5N3',
          tier: 3,
          title: "Soustraction d'un entier et d'une fraction",
          statement: `Calculer sous forme de fraction irréductible :\n$$C = ${n} - \\frac{${a}}{${d}}$$`,
          type: "exact",
          answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
          placeholder: `Ex: ${sN}/${sD}`,
          hint1: `Écris $${n}$ sous forme de fraction de dénominateur $${d}$ : $${n} = \\frac{${n} \\times ${d}}{${d}} = \\frac{${n * d}}{${d}}$.`,
          solution: `$$C = \\frac{${n * d}}{${d}} - \\frac{${a}}{${d}} = \\frac{${n * d} - ${a}}{${d}} = \\frac{${numTotal}}{${d}} = ${this.formatFraction(numTotal, d)}$$`
        };
      }
    } else {
      // Palier 4 : Défi 4ème (Chaîne de 3 fractions avec parenthèses et dénominateurs multiples)
      const configs = [
        {
          expr: "\\frac{7}{4} - \\left(\\frac{1}{2} + \\frac{3}{8}\\right)",
          stepPar: "\\frac{1 \\times 4}{2 \\times 4} + \\frac{3}{8} = \\frac{4 + 3}{8} = \\frac{7}{8}",
          stepSub: "\\frac{7 \\times 2}{4 \\times 2} - \\frac{7}{8} = \\frac{14 - 7}{8} = \\frac{7}{8}",
          ansNum: 7, ansDen: 8
        },
        {
          expr: "\\frac{5}{3} - \\left(\\frac{1}{6} + \\frac{5}{12}\\right)",
          stepPar: "\\frac{1 \\times 2}{6 \\times 2} + \\frac{5}{12} = \\frac{2 + 5}{12} = \\frac{7}{12}",
          stepSub: "\\frac{5 \\times 4}{3 \\times 4} - \\frac{7}{12} = \\frac{20 - 7}{12} = \\frac{13}{12}",
          ansNum: 13, ansDen: 12
        },
        {
          expr: "\\left(\\frac{3}{5} + \\frac{7}{10}\\right) - \\frac{9}{20}",
          stepPar: "\\frac{3 \\times 2}{5 \\times 2} + \\frac{7}{10} = \\frac{6 + 7}{10} = \\frac{13}{10}",
          stepSub: "\\frac{13 \\times 2}{10 \\times 2} - \\frac{9}{20} = \\frac{26 - 9}{20} = \\frac{17}{20}",
          ansNum: 17, ansDen: 20
        },
        {
          expr: "\\left(\\frac{5}{6} - \\frac{1}{3}\\right) + \\frac{7}{12}",
          stepPar: "\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}",
          stepSub: "\\frac{1 \\times 6}{2 \\times 6} + \\frac{7}{12} = \\frac{6 + 7}{12} = \\frac{13}{12}",
          ansNum: 13, ansDen: 12
        },
        {
          expr: "\\frac{11}{8} - \\left(\\frac{1}{4} + \\frac{3}{16}\\right)",
          stepPar: "\\frac{4}{16} + \\frac{3}{16} = \\frac{7}{16}",
          stepSub: "\\frac{22}{16} - \\frac{7}{16} = \\frac{15}{16}",
          ansNum: 15, ansDen: 16
        }
      ];
      const cfg = this.randChoice(configs);

      return {
        chapterId: '5N3',
        tier: 4,
        title: "Défi 4ème : Enchaînement de 3 fractions avec parenthèses",
        statement: `Calculer et donner le résultat sous forme de fraction irréductible :\n$$E = ${cfg.expr}$$`,
        type: "exact",
        answer: `${cfg.ansNum}/${cfg.ansDen}`,
        placeholder: `Ex: ${cfg.ansNum}/${cfg.ansDen}`,
        hint1: "Calcule d'abord l'opération entre parenthèses avec leur dénominateur commun, puis soustrais avec le dénominateur commun global.",
        solution: `1. Calcul de la parenthèse :\n$$${cfg.stepPar}$$\n2. Calcul de la différence avec dénominateur commun :\n$$${cfg.stepSub}$$\n$$E = \\frac{${cfg.ansNum}}{${cfg.ansDen}}$$`
      };
    }
  },

  // --- 5N4 : Arithmétique 5ème (critères de divisibilité, division euclidienne) ---
  generate5N4(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Division euclidienne, critères 2/5/10, vocabulaire multiple)
      const subType = this.randChoice(['remainder', 'quotient', 'dividend', 'div_2_5_10', 'multiple']);

      if (subType === 'remainder') {
        const b = this.randInt(4, 9);
        const q = this.randInt(5, 12);
        const r = this.randInt(1, b - 1);
        const a = b * q + r;
        return {
          chapterId: '5N4',
          tier: 1,
          title: "Division euclidienne : calcul du reste",
          statement: `Dans la division euclidienne de $${a}$ par $${b}$ :\n**Quel est le reste de cette division ?**`,
          type: "exact",
          answer: String(r),
          placeholder: `Ex: ${r}`,
          hint1: `Écris l'égalité euclidienne $${a} = ${b} \\times q + r$ avec $0 \\le r < ${b}$.`,
          solution: `$$${a} = ${b} \\times ${q} + ${r}$$\nLe reste est donc :\n$$r = ${r}$$`
        };
      } else if (subType === 'quotient') {
        const b = this.randInt(4, 9);
        const q = this.randInt(5, 12);
        const r = this.randInt(0, b - 1);
        const a = b * q + r;
        return {
          chapterId: '5N4',
          tier: 1,
          title: "Division euclidienne : calcul du quotient entier",
          statement: `Dans la division euclidienne de $${a}$ par $${b}$ :\n**Quel est le quotient entier de cette division ?**`,
          type: "exact",
          answer: String(q),
          placeholder: `Ex: ${q}`,
          hint1: `Combien de fois $${b}$ rentre-t-il au maximum dans $${a}$ sans le dépasser ?`,
          solution: `$$${a} = ${b} \\times ${q} + ${r}$$\nLe quotient entier est donc :\n$$q = ${q}$$`
        };
      } else if (subType === 'dividend') {
        const b = this.randInt(4, 9);
        const q = this.randInt(4, 11);
        const r = this.randInt(1, b - 1);
        const a = b * q + r;
        return {
          chapterId: '5N4',
          tier: 1,
          title: "Division euclidienne : retrouver le dividende",
          statement: `Dans une division euclidienne par $${b}$, le quotient entier est $${q}$ et le reste vaut $${r}$.\n**Quel est le dividende de cette division ?**`,
          type: "exact",
          answer: String(a),
          placeholder: `Ex: ${a}`,
          hint1: `Formule de la division euclidienne : $\\text{Dividende} = (\\text{Diviseur} \\times \\text{Quotient}) + \\text{Reste}$.`,
          solution: `$$\\text{Dividende} = (${b} \\times ${q}) + ${r} = ${b * q} + ${r} = ${a}$$`
        };
      } else if (subType === 'div_2_5_10') {
        const crit = this.randChoice([2, 5, 10]);
        const isDiv = Math.random() > 0.5;
        let num;
        if (crit === 2) {
          num = isDiv ? this.randInt(15, 80) * 2 : this.randInt(15, 80) * 2 + 1;
        } else if (crit === 5) {
          num = isDiv ? this.randInt(10, 50) * 5 : this.randInt(10, 50) * 5 + this.randChoice([1, 2, 3, 4]);
        } else {
          num = isDiv ? this.randInt(10, 40) * 10 : this.randInt(10, 40) * 10 + this.randInt(1, 9);
        }
        const lastDigit = num % 10;
        return {
          chapterId: '5N4',
          tier: 1,
          title: `Critère de divisibilité par ${crit}`,
          statement: `Le nombre entier $${num}$ est-il divisible par $${crit}$ ? (Répondre par 'oui' ou 'non')`,
          type: "exact",
          answer: isDiv ? "oui" : "non",
          placeholder: "oui ou non",
          hint1: crit === 2 ? "Un nombre est divisible par 2 s'il se termine par 0, 2, 4, 6 ou 8." :
                 crit === 5 ? "Un nombre est divisible par 5 s'il se termine par 0 ou 5." :
                 "Un nombre est divisible par 10 s'il se termine par 0.",
          solution: `Le dernier chiffre de $${num}$ est $${lastDigit}$.\nComme il ${isDiv ? 'respecte' : 'ne respecte pas'} le critère, le nombre $${num}$ **${isDiv ? 'est divisible' : "n'est pas divisible"}** par $${crit}$.`
        };
      } else {
        const b = this.randInt(3, 9);
        const k = this.randInt(3, 9);
        const isMult = Math.random() > 0.5;
        const a = isMult ? b * k : b * k + this.randChoice([1, 2]);
        return {
          chapterId: '5N4',
          tier: 1,
          title: "Vocabulaire : multiple et diviseur",
          statement: `Le nombre $${a}$ est-il un multiple de $${b}$ ? (Répondre par 'oui' ou 'non')`,
          type: "exact",
          answer: isMult ? "oui" : "non",
          placeholder: "oui ou non",
          hint1: `Un nombre $a$ est un multiple de $b$ s'il existe un entier $k$ tel que $a = b \\times k$ (le reste de la division vaut 0).`,
          solution: isMult ?
            `Oui, car $${a} = ${b} \\times ${k}$. Donc $${a}$ est bien un multiple de $${b}$.` :
            `Non, car dans la division de $${a}$ par $${b}$, le reste n'est pas nul ($${a} = ${b} \\times ${k} + ${a - b * k}$).`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Critères 3, 9, 4 et recherche de diviseurs)
      const subType = this.randChoice(['crit_3_9', 'crit_4', 'missing_digit', 'max_proper_divisor']);

      if (subType === 'crit_3_9') {
        const mult = this.randChoice([3, 9]);
        const base = this.randInt(10, 40) * mult;
        const isDiv = Math.random() > 0.5;
        const testVal = isDiv ? base : base + this.randChoice([1, 2]);
        const digitsSum = String(testVal).split('').reduce((s, c) => s + parseInt(c), 0);

        return {
          chapterId: '5N4',
          tier: 2,
          title: `Critère de divisibilité par ${mult}`,
          statement: `Le nombre $${testVal}$ est-il divisible par $${mult}$ ? (Répondre par 'oui' ou 'non')`,
          type: "exact",
          answer: isDiv ? "oui" : "non",
          placeholder: "oui ou non",
          hint1: `Un nombre est divisible par $${mult}$ si et seulement si la somme de ses chiffres est un multiple de $${mult}$.`,
          solution: `Somme des chiffres de $${testVal}$ : ${String(testVal).split('').join(' + ')} = ${digitsSum}.\nComme cette somme ${isDiv ? 'est' : "n'est pas"} divisible par $${mult}$, le nombre $${testVal}$ **${isDiv ? 'est divisible' : "n'est pas divisible"}** par $${mult}$.`
        };
      } else if (subType === 'crit_4') {
        const base = this.randInt(12, 60) * 4;
        const isDiv = Math.random() > 0.5;
        const testVal = isDiv ? base : base + this.randChoice([1, 2, 3]);
        const lastTwo = testVal % 100;
        const actualDiv = testVal % 4 === 0;

        return {
          chapterId: '5N4',
          tier: 2,
          title: "Critère de divisibilité par 4",
          statement: `Le nombre $${testVal}$ est-il divisible par $4$ ? (Répondre par 'oui' ou 'non')`,
          type: "exact",
          answer: actualDiv ? "oui" : "non",
          placeholder: "oui ou non",
          hint1: `Un nombre est divisible par 4 si le nombre formé par ses deux derniers chiffres est divisible par 4.`,
          solution: `Le nombre formé par les deux derniers chiffres de $${testVal}$ est $${lastTwo}$.\nComme $${lastTwo}$ ${actualDiv ? 'est' : "n'est pas"} un multiple de 4, le nombre $${testVal}$ **${actualDiv ? 'est divisible' : "n'est pas divisible"}** par 4.`
        };
      } else if (subType === 'missing_digit') {
        // Ex: Trouver d tel que 2_4 soit divisible par 9
        const div = this.randChoice([3, 9]);
        const d1 = this.randInt(1, 7);
        const d2 = this.randInt(1, 8);
        const sumPartial = d1 + d2;
        // On cherche d tel que (sumPartial + d) % div === 0 avec 0 <= d <= 9
        let validDigits = [];
        for (let d = 0; d <= 9; d++) {
          if ((sumPartial + d) % div === 0) validDigits.push(d);
        }
        const chosenD = validDigits[0];
        return {
          chapterId: '5N4',
          tier: 2,
          title: `Chiffre manquant et divisibilité par ${div}`,
          statement: `On considère le nombre à 3 chiffres $N = ${d1}x${d2}$ (où $x$ représente le chiffre des dizaines).\n**Quel est le plus petit chiffre $x$ (entre 0 et 9) pour que $N$ soit divisible par $${div}$ ?**`,
          type: "exact",
          answer: String(chosenD),
          placeholder: `Ex: ${chosenD}`,
          hint1: `La somme des chiffres est $${d1} + x + ${d2} = ${sumPartial} + x$. Cette somme doit être un multiple de $${div}$.`,
          solution: `Somme des chiffres : $${d1} + x + ${d2} = ${sumPartial} + x$.\nLe plus petit multiple de $${div}$ supérieur ou égal à $${sumPartial}$ est $${sumPartial + chosenD}$, d'où :\n$$x = ${chosenD}$$`
        };
      } else {
        const pairs = [
          { n: 24, maxProp: 12 },
          { n: 36, maxProp: 18 },
          { n: 20, maxProp: 10 },
          { n: 30, maxProp: 15 },
          { n: 28, maxProp: 14 },
          { n: 40, maxProp: 20 },
          { n: 50, maxProp: 25 },
          { n: 42, maxProp: 21 }
        ];
        const item = this.randChoice(pairs);
        return {
          chapterId: '5N4',
          tier: 2,
          title: "Diviseurs d'un nombre entier",
          statement: `Quel est le plus grand diviseur du nombre $${item.n}$ strictement inférieur à $${item.n}$ ?`,
          type: "exact",
          answer: String(item.maxProp),
          placeholder: `Ex: ${item.maxProp}`,
          hint1: `Le plus petit diviseur (autre que 1) d'un nombre pair est 2. Le plus grand diviseur propre est donc $${item.n} \\div 2$.`,
          solution: `Les diviseurs de $${item.n}$ se regroupent par paires. Le plus grand diviseur strictement inférieur à $${item.n}$ est :\n$$${item.n} \\div 2 = ${item.maxProp}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Nombres premiers < 30, décomposition simple)
      const subType = this.randChoice(['is_prime', 'next_prime', 'prime_decomp']);

      if (subType === 'is_prime') {
        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
        const composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 25, 27];
        const isP = Math.random() > 0.5;
        const num = isP ? this.randChoice(primes) : this.randChoice(composites);

        return {
          chapterId: '5N4',
          tier: 3,
          title: "Reconnaissance d'un nombre premier",
          statement: `Le nombre entier $${num}$ est-il un nombre premier ? (Répondre par 'oui' ou 'non')`,
          type: "exact",
          answer: isP ? "oui" : "non",
          placeholder: "oui ou non",
          hint1: "Un nombre premier n'admet exactement que deux diviseurs distincts : 1 et lui-même.",
          solution: isP ?
            `$${num}$ n'a pour diviseurs que 1 et $${num}$. C'est donc un **nombre premier**.` :
            `$${num}$ admet d'autres diviseurs (par exemple divisible par ${primes.find(p => num % p === 0)}). Ce **n'est pas** un nombre premier.`
        };
      } else if (subType === 'next_prime') {
        const tests = [
          { from: 7, next: 11 },
          { from: 11, next: 13 },
          { from: 13, next: 17 },
          { from: 17, next: 19 },
          { from: 19, next: 23 },
          { from: 23, next: 29 }
        ];
        const item = this.randChoice(tests);
        return {
          chapterId: '5N4',
          tier: 3,
          title: "Nombres premiers consécutifs",
          statement: `Quel est le plus petit nombre premier strictement supérieur à $${item.from}$ ?`,
          type: "exact",
          answer: String(item.next),
          placeholder: `Ex: ${item.next}`,
          hint1: `Teste un à un les entiers impairs après $${item.from}$ pour trouver le premier nombre qui n'a aucun diviseur autre que 1 et lui-même.`,
          solution: `La liste des nombres premiers consécutifs est : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...\nLe premier nombre premier après $${item.from}$ est donc **${item.next}**.`
        };
      } else {
        const decomps = [
          { n: 12, ans: "2^2 * 3", latex: "2^2 \\times 3", wrong: ["2 * 6", "3 * 4", "2^3"] },
          { n: 18, ans: "2 * 3^2", latex: "2 \\times 3^2", wrong: ["2 * 9", "3 * 6", "2^2 * 3"] },
          { n: 20, ans: "2^2 * 5", latex: "2^2 \\times 5", wrong: ["4 * 5", "2 * 10", "2 * 5^2"] },
          { n: 28, ans: "2^2 * 7", latex: "2^2 \\times 7", wrong: ["4 * 7", "2 * 14", "2 * 7^2"] },
          { n: 45, ans: "3^2 * 5", latex: "3^2 \\times 5", wrong: ["9 * 5", "3 * 15", "3 * 5^2"] },
          { n: 50, ans: "2 * 5^2", latex: "2 \\times 5^2", wrong: ["2 * 25", "5 * 10", "2^2 * 5"] }
        ];
        const item = this.randChoice(decomps);
        const correctOpt = `$${item.latex}$`;
        const options = this.shuffle([
          correctOpt,
          `$${item.wrong[0]}$`,
          `$${item.wrong[1]}$`,
          `$${item.wrong[2]}$`
        ]);

        return {
          chapterId: '5N4',
          tier: 3,
          title: "Décomposition en produit de facteurs premiers",
          statement: `Quelle est la décomposition en produit de facteurs premiers du nombre $${item.n}$ ?`,
          type: "mcq",
          options,
          answer: correctOpt,
          correctIndex: options.indexOf(correctOpt),
          hint1: "Tous les facteurs doivent être des nombres premiers (2, 3, 5, 7...). Par exemple, 4 ou 6 ne sont pas premiers.",
          solution: `$$${item.n} = ${item.latex}$$\nTous les facteurs (2, 3, 5, 7) sont des nombres premiers.`
        };
      }
    } else {
      // Palier 4 : Défi 4ème (Problème de répartition avec contrainte d'emballage complet)
      const problemType = this.randChoice(['chocolats', 'bus']);

      if (problemType === 'chocolats') {
        const C = this.randChoice([6, 8, 12]);
        const fullBoxes = this.randInt(12, 25);
        const remaining = this.randInt(1, C - 1);
        const N = fullBoxes * C + remaining;
        const totalBoxes = fullBoxes + 1;

        return {
          chapterId: '5N4',
          tier: 4,
          title: "Défi 4ème : Problème concret de division euclidienne (Condition d'emballage total)",
          statement: `Un artisan fabrique $${N}$ chocolats. Il souhaite tous les conditionner dans des boîtes pouvant contenir au maximum $${C}$ chocolats.\n\n**Combien de boîtes lui faudra-t-il au minimum pour que TOUS les chocolats soient rangés ?**`,
          type: "exact",
          answer: String(totalBoxes),
          placeholder: `Ex: ${totalBoxes}`,
          hint1: `Effectue la division euclidienne de $${N}$ par $${C}$. Il y a $${fullBoxes}$ boîtes pleines et un reste de $${remaining}$ chocolats. Attention : ces $${remaining}$ chocolats nécessitent une boîte supplémentaire !`,
          solution: `1. Division euclidienne :\n$$${N} = ${C} \\times ${fullBoxes} + ${remaining}$$\n2. Analyse :\n- Il y a $${fullBoxes}$ boîtes complètes.\n- Il reste $${remaining}$ chocolats qui nécessitent une boîte supplémentaire.\n3. Nombre total de boîtes au minimum :\n$$N_{\\text{boîtes}} = ${fullBoxes} + 1 = ${totalBoxes}$$`
        };
      } else {
        const C = this.randChoice([45, 50, 55]);
        const fullBuses = this.randInt(4, 8);
        const remaining = this.randInt(5, C - 1);
        const N = fullBuses * C + remaining;
        const totalBuses = fullBuses + 1;

        return {
          chapterId: '5N4',
          tier: 4,
          title: "Défi 4ème : Problème de transport en autocars (Capacité maximale)",
          statement: `Un collège organise une sortie scolaire pour $${N}$ personnes (élèves et accompagnateurs). Les autocars réservés ont une capacité maximale de $${C}$ places assises.\n\n**Combien d'autocars faut-il réserver au minimum pour transporter tout le monde ?**`,
          type: "exact",
          answer: String(totalBuses),
          placeholder: `Ex: ${totalBuses}`,
          hint1: `Calcule $${N} = ${C} \\times q + r$. Il y a $${fullBuses}$ cars complets et un reste de $${remaining}$ personnes qui nécessitent un car supplémentaire.`,
          solution: `1. Division euclidienne :\n$$${N} = ${C} \\times ${fullBuses} + ${remaining}$$\n2. Les $${remaining}$ personnes restantes ne peuvent pas rester à quai : il faut donc un car de plus.\n3. Nombre d'autocars au minimum :\n$$N_{\\text{cars}} = ${fullBuses} + 1 = ${totalBuses}$$`
        };
      }
    }
  },

  // --- 5P1 : Proportionnalité 5ème (tableaux, pourcentages, échelles) ---
  generate5P1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Coefficient de proportionnalité, calculs directs ligne 1 <-> 2, test proportionnalité)
      const subType = this.randChoice(['coeff', 'line2', 'line1', 'is_prop']);

      if (subType === 'coeff') {
        const k = this.randInt(3, 9);
        const x = this.randInt(2, 7);
        const y = x * k;
        return {
          chapterId: '5P1',
          tier: 1,
          title: "Coefficient de proportionnalité",
          statement: `Dans un tableau de proportionnalité, la grandeur de la 1ère ligne vaut $${x}$ et celle de la 2ème ligne vaut $${y}$.\n**Quel est le coefficient de proportionnalité multiplicatif pour passer de la ligne 1 à la ligne 2 ?**`,
          type: "exact",
          answer: String(k),
          placeholder: `Ex: ${k}`,
          hint1: `Divise le nombre de la 2ème ligne par celui de la 1ère ligne : $\\frac{${y}}{${x}}$.`,
          solution: `$$k = \\frac{${y}}{${x}} = ${k}$$`
        };
      } else if (subType === 'line2') {
        const k = this.randInt(3, 8);
        const x = this.randInt(4, 9);
        const y = x * k;
        return {
          chapterId: '5P1',
          tier: 1,
          title: "Calculer une valeur dans un tableau de proportionnalité",
          statement: `Le coefficient de proportionnalité pour passer de la ligne 1 à la ligne 2 est de $\\times ${k}$.\nSi la valeur sur la 1ère ligne est $${x}$, **quelle est la valeur sur la 2ème ligne ?**`,
          type: "exact",
          answer: String(y),
          placeholder: `Ex: ${y}`,
          hint1: `Multiplie la valeur de la première ligne par le coefficient : $${x} \\times ${k}$.`,
          solution: `$$y = ${x} \\times ${k} = ${y}$$`
        };
      } else if (subType === 'line1') {
        const k = this.randInt(3, 8);
        const x = this.randInt(3, 8);
        const y = x * k;
        return {
          chapterId: '5P1',
          tier: 1,
          title: "Retrouver la valeur de départ dans un tableau",
          statement: `Le coefficient multiplicateur pour passer de la ligne 1 à la ligne 2 est de $\\times ${k}$.\nLa valeur sur la 2ème ligne est $${y}$. **Quelle est la valeur sur la 1ère ligne ?**`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Pour remonter de la 2ème ligne à la 1ère, divise par le coefficient : $${y} \\div ${k}$.`,
          solution: `$$x = \\frac{${y}}{${k}} = ${x}$$`
        };
      } else {
        const a = this.randInt(2, 5);
        const k = this.randInt(3, 6);
        const b = a * k;
        const c = this.randInt(3, 7);
        const isProp = Math.random() > 0.5;
        const d = isProp ? c * k : c * k + this.randChoice([-2, -1, 1, 2]);
        const cross1 = a * d;
        const cross2 = b * c;
        const actualProp = cross1 === cross2;

        return {
          chapterId: '5P1',
          tier: 1,
          title: "Reconnaître un tableau de proportionnalité",
          statement: `On donne le tableau suivant :\n| Grandeur A | $${a}$ | $${c}$ |\n| Grandeur B | $${b}$ | $${d}$ |\n\n**Ce tableau est-il un tableau de proportionnalité ?** (Répondre par 'oui' ou 'non')`,
          type: "exact",
          answer: actualProp ? "oui" : "non",
          placeholder: "oui ou non",
          hint1: `Compare les rapports $\\frac{${b}}{${a}}$ et $\\frac{${d}}{${c}}$, ou teste les produits en croix : $${a} \\times ${d}$ et $${b} \\times ${c}$.`,
          solution: `Calcul des quotients :\n$$\\frac{${b}}{${a}} = ${b / a} \\quad \\text{et} \\quad \\frac{${d}}{${c}} = ${(d / c).toFixed(2)}$$\nComme ces rapports ${actualProp ? 'sont égaux' : 'ne sont pas égaux'}, ce **${actualProp ? 'est' : "n'est pas"} un tableau de proportionnalité**.`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Produit en croix : prix, recette, carburant, échelle)
      const subType = this.randChoice(['apples', 'recipe', 'fuel', 'scale']);

      if (subType === 'apples') {
        const a = this.randInt(2, 5);
        const b = this.randInt(4, 9) * a;
        const c = this.randInt(3, 8);
        const d = (b * c) / a;
        return {
          chapterId: '5P1',
          tier: 2,
          title: "Quatrième proportionnelle dans un tableau",
          statement: `Le prix de $${a}\\text{ kg}$ de pommes est de $${b}\\text{ €}$.\n**Quel est le prix de $${c}\\text{ kg}$ de ces mêmes pommes ?**`,
          type: "exact",
          answer: String(d),
          placeholder: `Ex: ${d}`,
          hint1: `Utilise le coefficient de proportionnalité ou le produit en croix : $\\frac{${b} \\times ${c}}{${a}}$.`,
          solution: `$$x = \\frac{${b} \\times ${c}}{${a}} = ${d}\\text{ €}$$`
        };
      } else if (subType === 'recipe') {
        const p1 = 4;
        const p2 = this.randChoice([6, 8, 10]);
        const g1 = this.randChoice([150, 200, 250, 300]);
        const g2 = (g1 * p2) / p1;
        return {
          chapterId: '5P1',
          tier: 2,
          title: "Adaptation d'une recette (Proportionnalité)",
          statement: `Une recette de gâteau pour $${p1}\\text{ personnes}$ nécessite $${g1}\\text{ g}$ de farine.\n**Quelle masse de farine (en grammes) faut-il pour $${p2}\\text{ personnes}$ ?**`,
          type: "exact",
          answer: String(g2),
          placeholder: `Ex: ${g2}`,
          hint1: `Trouve la quantité pour 1 personne ($${g1} \\div ${p1}$), puis multiplie par $${p2}$.`,
          solution: `Quantité par personne : $${g1} \\div ${p1} = ${g1 / p1}\\text{ g}$.\nPour $${p2}$ personnes :\n$$m = ${g1 / p1} \\times ${p2} = ${g2}\\text{ g}$$`
        };
      } else if (subType === 'fuel') {
        const conso100 = this.randChoice([5, 6, 8]);
        const dist = this.randChoice([150, 200, 250, 300]);
        const totalFuel = (conso100 * dist) / 100;
        return {
          chapterId: '5P1',
          tier: 2,
          title: "Consommation de carburant",
          statement: `Une voiture consomme en moyenne $${conso100}\\text{ L}$ d'essence pour $100\\text{ km}$.\n**Combien de litres de carburant consommera-t-elle pour un trajet de $${dist}\\text{ km}$ ?**`,
          type: "exact",
          answer: String(totalFuel),
          placeholder: `Ex: ${totalFuel}`,
          hint1: `Utilise le produit en croix : $\\frac{${conso100} \\times ${dist}}{100}$.`,
          solution: `$$\\text{Consommation} = \\frac{${conso100} \\times ${dist}}{100} = ${totalFuel}\\text{ L}$$`
        };
      } else {
        const ech = this.randChoice([2, 5, 10]);
        const cm = this.randInt(3, 8);
        const distM = cm * ech;
        return {
          chapterId: '5P1',
          tier: 2,
          title: "Lecture d'un plan à l'échelle",
          statement: `Sur le plan d'une maison, $1\\text{ cm}$ représente $${ech}\\text{ mètres}$ dans la réalité.\n**Quelle distance réelle en mètres est représentée par une longueur de $${cm}\\text{ cm}$ sur le plan ?**`,
          type: "exact",
          answer: String(distM),
          placeholder: `Ex: ${distM}`,
          hint1: `Multiplie la distance sur le plan par la distance réelle correspondant à 1 cm : $${cm} \\times ${ech}$.`,
          solution: `$$D_{\\text{réelle}} = ${cm} \\times ${ech} = ${distM}\\text{ m}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Pourcentages : quantité, prix soldé, taux, augmentation)
      const subType = this.randChoice(['pct_quantity', 'pct_discount', 'find_pct', 'pct_increase']);

      if (subType === 'pct_quantity') {
        const p = this.randChoice([10, 20, 25, 50]);
        const total = this.randChoice([40, 80, 120, 200]);
        const val = (total * p) / 100;
        return {
          chapterId: '5P1',
          tier: 3,
          title: "Calcul d'un pourcentage d'une quantité",
          statement: `Dans un collège de $${total}$ élèves, $${p}\\%$ des élèves sont inscrits à l'association sportive.\n**Combien d'élèves sont inscrits à l'association sportive ?**`,
          type: "exact",
          answer: String(val),
          placeholder: `Ex: ${val}`,
          hint1: `Multiplie le total par le pourcentage : $\\frac{${p}}{100} \\times ${total}$.`,
          solution: `$$N = \\frac{${p}}{100} \\times ${total} = ${val}\\text{ élèves}$$`
        };
      } else if (subType === 'pct_discount') {
        const p = this.randChoice([10, 20, 30, 50]);
        const prix = this.randChoice([40, 60, 80, 120]);
        const remise = (prix * p) / 100;
        const nouveauPrix = prix - remise;
        return {
          chapterId: '5P1',
          tier: 3,
          title: "Prix soldé après une réduction en pourcentage",
          statement: `Un manteau coûte initialement $${prix}\\text{ €}$. Pendant les soldes, il bénéficie d'une réduction de $${p}\\%$.\n**Quel est le nouveau prix soldé du manteau en euros ?**`,
          type: "exact",
          answer: String(nouveauPrix),
          placeholder: `Ex: ${nouveauPrix}`,
          hint1: `1. Calcule le montant de la remise : $\\frac{${p}}{100} \\times ${prix} = ${remise}\\text{ €}$.\n2. Soustrais la remise au prix initial : $${prix} - ${remise}$.`,
          solution: `1. Remise : $${prix} \\times \\frac{${p}}{100} = ${remise}\\text{ €}$.\n2. Nouveau prix :\n$$P = ${prix} - ${remise} = ${nouveauPrix}\\text{ €}$$`
        };
      } else if (subType === 'find_pct') {
        const items = [
          { num: 12, total: 24, pct: 50 },
          { num: 15, total: 60, pct: 25 },
          { num: 8, total: 40, pct: 20 },
          { num: 6, total: 60, pct: 10 },
          { num: 30, total: 120, pct: 25 },
          { num: 45, total: 90, pct: 50 }
        ];
        const item = this.randChoice(items);
        return {
          chapterId: '5P1',
          tier: 3,
          title: "Calculer un pourcentage",
          statement: `Dans un club de sport comptant $${item.total}$ adhérents, $${item.num}$ pratiquent l'athlétisme.\n**Quel est le pourcentage d'adhérents pratiquant l'athlétisme ?** (Saisir uniquement le nombre, ex: 25)`,
          type: "exact",
          answer: String(item.pct),
          placeholder: `Ex: ${item.pct}`,
          hint1: `Calcule le rapport et multiplie par 100 : $\\frac{${item.num}}{${item.total}} \\times 100$.`,
          solution: `$$\\text{Pourcentage} = \\frac{${item.num}}{${item.total}} \\times 100 = ${item.pct}\\%$$`
        };
      } else {
        const p = this.randChoice([10, 20, 50]);
        const prix = this.randChoice([30, 50, 70, 100]);
        const hausse = (prix * p) / 100;
        const nouveauPrix = prix + hausse;
        return {
          chapterId: '5P1',
          tier: 3,
          title: "Calcul après une hausse en pourcentage",
          statement: `Un abonnement coûte $${prix}\\text{ €}$ par an. Son tarif augmente de $${p}\\%$.\n**Quel est le nouveau tarif de l'abonnement en euros ?**`,
          type: "exact",
          answer: String(nouveauPrix),
          placeholder: `Ex: ${nouveauPrix}`,
          hint1: `Calcule le montant de l'augmentation : $\\frac{${p}}{100} \\times ${prix} = ${hausse}\\text{ €}$, puis ajoute-le au prix initial.`,
          solution: `1. Augmentation : $${prix} \\times \\frac{${p}}{100} = ${hausse}\\text{ €}$.\n2. Nouveau tarif :\n$$P = ${prix} + ${hausse} = ${nouveauPrix}\\text{ €}$$`
        };
      }
    } else {
      // Palier 4 : Défi 4ème (Échelle de carte complexe 1:25 000 ou 1:50 000)
      const echelles = [
        { denom: 25000, cm: 8, km: 2 },
        { denom: 25000, cm: 12, km: 3 },
        { denom: 50000, cm: 6, km: 3 },
        { denom: 50000, cm: 10, km: 5 },
        { denom: 100000, cm: 7, km: 7 }
      ];
      const ech = this.randChoice(echelles);

      return {
        chapterId: '5P1',
        tier: 4,
        title: "Défi 4ème : Calcul de distance réelle à partir d'une échelle",
        statement: `Sur une carte de randonnée à l'échelle $1 / ${ech.denom.toLocaleString('fr-FR')}$, la distance mesurée à la règle entre deux refuges est de $d = ${ech.cm}\\text{ cm}$.\n\n**Quelle est la distance réelle sur le terrain en kilomètres (km) ?**`,
        type: "exact",
        answer: String(ech.km),
        placeholder: `Ex: ${ech.km}`,
        hint1: `1. Calcule la distance réelle en centimètres : $${ech.cm} \\times ${ech.denom} = ${ech.cm * ech.denom}\\text{ cm}$.\n2. Convertis les cm en km : $1\\text{ km} = 100\\,000\\text{ cm}$.`,
        solution: `1. Distance en centimètres :\n$$D = ${ech.cm} \\times ${ech.denom} = ${(ech.cm * ech.denom).toLocaleString('fr-FR')}\\text{ cm}$$\n2. Conversion en kilomètres :\n$$D = \\frac{${ech.cm * ech.denom}}{100\\,000} = ${ech.km}\\text{ km}$$`
      };
    }
  },

  // --- 5G3 : Triangles (inégalité triangulaire, somme des angles) ---
  generate5G3(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Somme des angles = 180° : quelconque, rectangle, équilatéral, rectangle isocèle)
      const subType = this.randChoice(['triangle_any', 'triangle_right', 'triangle_equi', 'triangle_right_iso']);

      if (subType === 'triangle_any') {
        const a = this.randInt(35, 75);
        const b = this.randInt(35, 75);
        const c = 180 - (a + b);
        return {
          chapterId: '5G3',
          tier: 1,
          title: "Somme des angles d'un triangle",
          statement: `Dans un triangle $ABC$, la mesure de l'angle $\\widehat{A} = ${a}^\\circ$ et celle de $\\widehat{B} = ${b}^\\circ$.\n**Quelle est la mesure de l'angle $\\widehat{C}$ en degrés ?**`,
          type: "exact",
          answer: String(c),
          placeholder: `Ex: ${c}`,
          hint1: "La somme des trois angles dans n'importe quel triangle est toujours égale à $180^\\circ$.",
          solution: `$$\\widehat{C} = 180^\\circ - (${a}^\\circ + ${b}^\\circ) = 180^\\circ - ${a + b}^\\circ = ${c}^\\circ$$`
        };
      } else if (subType === 'triangle_right') {
        const a = this.randInt(20, 70);
        const b = 90 - a;
        return {
          chapterId: '5G3',
          tier: 1,
          title: "Angles d'un triangle rectangle",
          statement: `Soit un triangle $MNP$ rectangle en $M$. L'angle aigu $\\widehat{N}$ mesure $${a}^\\circ$.\n**Quelle est la mesure de l'autre angle aigu $\\widehat{P}$ en degrés ?**`,
          type: "exact",
          answer: String(b),
          placeholder: `Ex: ${b}`,
          hint1: "Dans un triangle rectangle, les deux angles aigus sont complémentaires (leur somme vaut $90^\\circ$).",
          solution: `$$\\widehat{P} = 90^\\circ - \\widehat{N} = 90^\\circ - ${a}^\\circ = ${b}^\\circ$$`
        };
      } else if (subType === 'triangle_equi') {
        return {
          chapterId: '5G3',
          tier: 1,
          title: "Angles d'un triangle équilatéral",
          statement: `Dans un triangle équilatéral $ABC$, **quelle est la mesure en degrés de chacun de ses trois angles ?**`,
          type: "exact",
          answer: "60",
          placeholder: "Ex: 60",
          hint1: "Un triangle équilatéral possède 3 angles égaux dont la somme vaut $180^\\circ$. Calcule $180 \\div 3$.",
          solution: `Les trois angles d'un triangle équilatéral sont égaux :\n$$\\frac{180^\\circ}{3} = 60^\\circ$$`
        };
      } else {
        return {
          chapterId: '5G3',
          tier: 1,
          title: "Angles d'un triangle rectangle isocèle",
          statement: `Dans un triangle $RST$ rectangle et isocèle en $R$, **quelle est la mesure en degrés des deux angles aigus à la base ?**`,
          type: "exact",
          answer: "45",
          placeholder: "Ex: 45",
          hint1: "L'angle droit mesure $90^\\circ$. Les deux autres angles sont égaux et leur somme vaut $90^\\circ$ ($90 \\div 2$).",
          solution: `$$\\frac{180^\\circ - 90^\\circ}{2} = \\frac{90^\\circ}{2} = 45^\\circ$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Triangle isocèle : sommet donné ou base donnée)
      const subType = this.randChoice(['sommet_donne', 'base_donnee', 'adjacent_angle']);

      if (subType === 'sommet_donne') {
        const sommet = this.randChoice([30, 40, 50, 70, 80, 100, 110]);
        const base = (180 - sommet) / 2;
        return {
          chapterId: '5G3',
          tier: 2,
          title: "Angles d'un triangle isocèle (Sommet principal connu)",
          statement: `Soit un triangle $EFG$ isocèle en $E$. L'angle au sommet principal mesure $\\widehat{E} = ${sommet}^\\circ$.\n**Quelle est la mesure de l'angle à la base $\\widehat{EFG}$ en degrés ?**`,
          type: "exact",
          answer: String(base),
          placeholder: `Ex: ${base}`,
          hint1: `Dans un triangle isocèle, les deux angles à la base sont égaux : $\\frac{180^\\circ - ${sommet}^\\circ}{2}$.`,
          solution: `$$\\widehat{EFG} = \\frac{180^\\circ - ${sommet}^\\circ}{2} = \\frac{${180 - sommet}^\\circ}{2} = ${base}^\\circ$$`
        };
      } else if (subType === 'base_donnee') {
        const base = this.randInt(35, 75);
        const sommet = 180 - 2 * base;
        return {
          chapterId: '5G3',
          tier: 2,
          title: "Angles d'un triangle isocèle (Angle à la base connu)",
          statement: `Soit un triangle $EFG$ isocèle en $E$. L'un des angles à la base mesure $\\widehat{EFG} = ${base}^\\circ$.\n**Quelle est la mesure de l'angle au sommet principal $\\widehat{E}$ en degrés ?**`,
          type: "exact",
          answer: String(sommet),
          placeholder: `Ex: ${sommet}`,
          hint1: `Les deux angles à la base sont égaux à $${base}^\\circ$. Soustrais deux fois cet angle à $180^\\circ$ : $180 - 2 \\times ${base}$.`,
          solution: `$$\\widehat{E} = 180^\\circ - 2 \\times ${base}^\\circ = 180^\\circ - ${2 * base}^\\circ = ${sommet}^\\circ$$`
        };
      } else {
        const alpha = this.randInt(40, 80);
        const adj = 180 - alpha;
        return {
          chapterId: '5G3',
          tier: 2,
          title: "Angles adjacents supplémentaires",
          statement: `Sur une droite, deux angles adjacents forment un angle plat ($180^\\circ$). L'un des angles mesure $${alpha}^\\circ$.\n**Quelle est la mesure de l'autre angle en degrés ?**`,
          type: "exact",
          answer: String(adj),
          placeholder: `Ex: ${adj}`,
          hint1: "Deux angles supplémentaires ont une somme égale à $180^\\circ$.",
          solution: `$$\\text{Mesure} = 180^\\circ - ${alpha}^\\circ = ${adj}^\\circ$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Inégalité triangulaire)
      const a = this.randInt(4, 9);
      const b = this.randInt(4, 9);
      const canBuild = Math.random() > 0.5;
      const c = canBuild ? this.randInt(Math.abs(a - b) + 1, a + b - 1) : a + b + this.randInt(1, 3);
      const maxSide = Math.max(a, b, c);
      const sumOthers = a + b + c - maxSide;
      const actualCanBuild = maxSide < sumOthers;

      return {
        chapterId: '5G3',
        tier: 3,
        title: "Inégalité triangulaire (Constructibilité)",
        statement: `On souhaite construire un triangle de côtés $AB = ${a}\\text{ cm}$, $BC = ${b}\\text{ cm}$ et $AC = ${c}\\text{ cm}$.\n**Ce triangle est-il constructible ?** (Répondre par 'oui' ou 'non')`,
        type: "exact",
        answer: actualCanBuild ? "oui" : "non",
        placeholder: "oui ou non",
        hint1: `Vérifie l'inégalité triangulaire : le plus grand côté ($${maxSide}\\text{ cm}$) doit être strictement inférieur à la somme des deux autres ($${sumOthers}\\text{ cm}$).`,
        solution: `Le plus long côté mesure $${maxSide}\\text{ cm}$.\nLa somme des deux autres côtés est $${sumOthers}\\text{ cm}$.\nComme $${maxSide} ${actualCanBuild ? '<' : '\\ge'} ${sumOthers}$, le triangle **${actualCanBuild ? 'est' : "n'est pas"} constructible**.`
      };
    } else {
      // Palier 4 : Défi 4ème (Figure à deux triangles accolés avec angle plat)
      const angleB = this.randChoice([30, 40, 50]);
      const angleC1 = 90 - angleB;
      const angleInter = this.randChoice([45, 60]);
      const angleC2 = 180 - angleC1 - angleInter;
      const angleD = 50;
      const angleFinal = 180 - angleC2 - angleD;

      return {
        chapterId: '5G3',
        tier: 4,
        title: "Défi 4ème : Déduction d'angle sur figure combinée en 2 étapes",
        statement: `Dans une figure à deux triangles adjacents :\n- Dans le premier triangle $ABC$ rectangle en $A$, on a $\\widehat{B} = ${angleB}^\\circ$, d'où $\\widehat{BCA} = ${angleC1}^\\circ$.\n- Les points $B, C, D$ ne sont pas alignés, mais l'angle plat en $C$ est partagé : l'angle adjacent dans le second triangle $CDE$ mesure $\\widehat{DCE} = ${angleC2}^\\circ$.\n- Dans ce triangle $CDE$, l'angle $\\widehat{CDE} = ${angleD}^\\circ$.\n\n**Calculer la mesure exacte de l'angle $\\widehat{CED}$ en degrés.**`,
        type: "exact",
        answer: String(angleFinal),
        placeholder: `Ex: ${angleFinal}`,
        hint1: `Dans le triangle $CDE$, la somme des 3 angles vaut $180^\\circ$. Tu connais déjà $\\widehat{DCE} = ${angleC2}^\\circ$ et $\\widehat{CDE} = ${angleD}^\\circ$.`,
        solution: `Dans le triangle $CDE$ :\n$$\\widehat{CED} = 180^\\circ - (\\widehat{DCE} + \\widehat{CDE}) = 180^\\circ - (${angleC2}^\\circ + ${angleD}^\\circ) = 180^\\circ - ${angleC2 + angleD}^\\circ = ${angleFinal}^\\circ$$`
      };
    }
  },

  // --- 5G4 : Symétrie centrale & parallélogrammes ---
  generate5G4(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Conservations symétrie centrale : longueurs, angles, périmètre, invariant)
      const subType = this.randChoice(['length', 'angle', 'perimeter', 'center']);

      if (subType === 'length') {
        const l = this.randInt(5, 14);
        return {
          chapterId: '5G4',
          tier: 1,
          title: "Conservation des longueurs par symétrie centrale",
          statement: `Le segment $[A'B']$ est le symétrique du segment $[AB]$ par rapport à un point $O$.\nSachant que $AB = ${l}\\text{ cm}$, **quelle est la longueur de $[A'B']$ ?**`,
          type: "exact",
          answer: String(l),
          placeholder: `Ex: ${l}`,
          hint1: "La symétrie centrale conserve les longueurs, les angles et le parallélisme.",
          solution: `La symétrie centrale conserve les longueurs :\n$$A'B' = AB = ${l}\\text{ cm}$$`
        };
      } else if (subType === 'angle') {
        const deg = this.randInt(30, 85);
        return {
          chapterId: '5G4',
          tier: 1,
          title: "Conservation des angles par symétrie centrale",
          statement: `L'angle $\\widehat{A'B'C'}$ est le symétrique de l'angle $\\widehat{ABC}$ par rapport à un point $O$.\nSachant que $\\widehat{ABC} = ${deg}^\\circ$, **quelle est la mesure de $\\widehat{A'B'C'}$ en degrés ?**`,
          type: "exact",
          answer: String(deg),
          placeholder: `Ex: ${deg}`,
          hint1: "La symétrie centrale est un demi-tour qui conserve les mesures d'angles.",
          solution: `La symétrie centrale conserve les mesures d'angles :\n$$\\widehat{A'B'C'} = \\widehat{ABC} = ${deg}^\\circ$$`
        };
      } else if (subType === 'perimeter') {
        const a = this.randInt(4, 7);
        const b = this.randInt(5, 8);
        const c = this.randInt(6, 9);
        const perim = a + b + c;
        return {
          chapterId: '5G4',
          tier: 1,
          title: "Conservation du périmètre par symétrie centrale",
          statement: `Un triangle a des côtés mesurant $${a}\\text{ cm}$, $${b}\\text{ cm}$ et $${c}\\text{ cm}$ (périmètre de $${perim}\\text{ cm}$).\n**Quel est le périmètre de son triangle image par une symétrie centrale (en cm) ?**`,
          type: "exact",
          answer: String(perim),
          placeholder: `Ex: ${perim}`,
          hint1: "La symétrie centrale conserve les longueurs de tous les côtés, et donc le périmètre.",
          solution: `La symétrie centrale conserve les dimensions de la figure :\n$$\\mathcal{P} = ${a} + ${b} + ${c} = ${perim}\\text{ cm}$$`
        };
      } else {
        return {
          chapterId: '5G4',
          tier: 1,
          title: "Point invariant de la symétrie centrale",
          statement: `Par la symétrie centrale de centre $O$, quel est le symétrique du point $O$ lui-même ?`,
          type: "exact",
          answer: "O",
          placeholder: "Ex: O",
          hint1: "Le centre de symétrie est le seul point fixe (invariant) de la transformation.",
          solution: "Le centre de symétrie est invariant : le symétrique de $O$ par rapport à $O$ est le point **O**."
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Centre de symétrie et milieu : calcul total, demi-longueur, égalité)
      const subType = this.randChoice(['total_length', 'half_length', 'equal_dist']);

      if (subType === 'total_length') {
        const dist = this.randInt(3, 9);
        const total = dist * 2;
        return {
          chapterId: '5G4',
          tier: 2,
          title: "Centre de symétrie comme milieu (Longueur totale)",
          statement: `Le point $A'$ est le symétrique du point $A$ par rapport au point $O$.\nOn donne $OA = ${dist}\\text{ cm}$.\n**Quelle est la longueur totale du segment $[AA']$ en cm ?**`,
          type: "exact",
          answer: String(total),
          placeholder: `Ex: ${total}`,
          hint1: `Le centre de symétrie $O$ est le milieu du segment $[AA']$. Donc $AA' = 2 \\times OA$.`,
          solution: `Le point $O$ étant le milieu de $[AA']$ :\n$$AA' = 2 \\times OA = 2 \\times ${dist} = ${total}\\text{ cm}$$`
        };
      } else if (subType === 'half_length') {
        const dist = this.randInt(3, 9);
        const total = dist * 2;
        return {
          chapterId: '5G4',
          tier: 2,
          title: "Centre de symétrie comme milieu (Demi-longueur)",
          statement: `Le point $A'$ est le symétrique du point $A$ par rapport au point $O$.\nLa longueur totale du segment mesure $AA' = ${total}\\text{ cm}$.\n**Quelle est la longueur du segment $[OA]$ en cm ?**`,
          type: "exact",
          answer: String(dist),
          placeholder: `Ex: ${dist}`,
          hint1: `Le point $O$ est le milieu de $[AA']$, donc $OA = \\frac{AA'}{2}$.`,
          solution: `$$OA = \\frac{AA'}{2} = \\frac{${total}}{2} = ${dist}\\text{ cm}$$`
        };
      } else {
        const dist = this.randInt(4, 11);
        return {
          chapterId: '5G4',
          tier: 2,
          title: "Distance au centre de symétrie",
          statement: `Le point $M'$ est le symétrique du point $M$ par rapport à un point $I$.\nSachant que $IM = ${dist}\\text{ cm}$, **quelle est la longueur de $[IM']$ en cm ?**`,
          type: "exact",
          answer: String(dist),
          placeholder: `Ex: ${dist}`,
          hint1: "Le centre de symétrie $I$ est le milieu du segment $[MM']$, donc $IM' = IM$.",
          solution: `Comme $I$ est le milieu de $[MM']$ :\n$$IM' = IM = ${dist}\\text{ cm}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Diagonales, côtés opposés, angles consécutifs d'un parallélogramme)
      const subType = this.randChoice(['diag_half', 'opp_sides', 'consec_angles']);

      if (subType === 'diag_half') {
        const diag1 = this.randInt(6, 14);
        const demiDiag = diag1 / 2;
        return {
          chapterId: '5G4',
          tier: 3,
          title: "Diagonales d'un parallélogramme",
          statement: `Soit un parallélogramme $ABCD$ de centre $O$ (point d'intersection des diagonales).\nLa diagonale $[AC]$ mesure $AC = ${diag1}\\text{ cm}$.\n**Quelle est la longueur du segment $[OA]$ en cm ?**`,
          type: "exact",
          answer: String(demiDiag),
          placeholder: `Ex: ${demiDiag}`,
          hint1: "Dans un parallélogramme, les diagonales se coupent en leur milieu.",
          solution: `Le point $O$ est le milieu de la diagonale $[AC]$ :\n$$OA = \\frac{AC}{2} = \\frac{${diag1}}{2} = ${demiDiag}\\text{ cm}$$`
        };
      } else if (subType === 'opp_sides') {
        const l1 = this.randInt(6, 12);
        const l2 = this.randInt(3, 5);
        const perim = 2 * (l1 + l2);
        return {
          chapterId: '5G4',
          tier: 3,
          title: "Périmètre d'un parallélogramme",
          statement: `Dans un parallélogramme $ABCD$, deux côtés consécutifs mesurent $AB = ${l1}\\text{ cm}$ et $BC = ${l2}\\text{ cm}$.\n**Quel est le périmètre du parallélogramme $ABCD$ en cm ?**`,
          type: "exact",
          answer: String(perim),
          placeholder: `Ex: ${perim}`,
          hint1: "Les côtés opposés d'un parallélogramme ont la même longueur : $P = 2 \\times (AB + BC)$.",
          solution: `$$P = 2 \\times (${l1} + ${l2}) = 2 \\times ${l1 + l2} = ${perim}\\text{ cm}$$`
        };
      } else {
        const angleA = this.randChoice([50, 60, 70, 80, 110, 120]);
        const angleB = 180 - angleA;
        return {
          chapterId: '5G4',
          tier: 3,
          title: "Angles consécutifs d'un parallélogramme",
          statement: `Dans un parallélogramme $ABCD$, l'angle $\\widehat{A}$ mesure $${angleA}^\\circ$.\n**Quelle est la mesure de l'angle consécutif $\\widehat{B}$ en degrés ?**`,
          type: "exact",
          answer: String(angleB),
          placeholder: `Ex: ${angleB}`,
          hint1: "Dans un parallélogramme, deux angles consécutifs sont supplémentaires (leur somme vaut $180^\\circ$).",
          solution: `$$\\widehat{B} = 180^\\circ - \\widehat{A} = 180^\\circ - ${angleA}^\\circ = ${angleB}^\\circ$$`
        };
      }
    } else {
      // Palier 4 : Défi 4ème (Caractérisation des quadrilatères particuliers)
      const variants = [
        {
          desc: "dont les diagonales sont de même longueur et se coupent perpendiculairement",
          nature: "Carré",
          hint: "Diagonales de même longueur => Rectangle. Diagonales perpendiculaires => Losange. À la fois rectangle et losange => Carré.",
          exp: "1. Diagonales de même longueur $\\implies$ rectangle.\n2. Diagonales perpendiculaires $\\implies$ losange.\n3. Un rectangle-losange est un **carré**."
        },
        {
          desc: "dont les diagonales se coupent perpendiculairement et n'ont pas la même longueur",
          nature: "Losange non carré",
          hint: "Diagonales perpendiculaires => Losange. Comme elles n'ont pas la même longueur, ce n'est pas un carré.",
          exp: "Les diagonales sont perpendiculaires sans être égales, c'est un **losange non carré**."
        },
        {
          desc: "dont les diagonales sont de même longueur et ne sont pas perpendiculaires",
          nature: "Rectangle non carré",
          hint: "Diagonales de même longueur => Rectangle. Pas perpendiculaires => Pas un losange.",
          exp: "Les diagonales sont de même longueur sans être perpendiculaires, c'est un **rectangle non carré**."
        },
        {
          desc: "qui possède 4 côtés de même longueur et un angle droit",
          nature: "Carré",
          hint: "4 côtés de même longueur => Losange. Un angle droit => Carré.",
          exp: "4 côtés égaux $\\implies$ losange. Un losange avec un angle droit est un **carré**."
        }
      ];
      const v = this.randChoice(variants);
      const allOpts = ["Carré", "Losange non carré", "Rectangle non carré", "Trapèze"];
      const opts = [v.nature, ...allOpts.filter(o => o !== v.nature)];

      return {
        chapterId: '5G4',
        tier: 4,
        title: "Défi 4ème : Nature d'un parallélogramme particulier",
        statement: `Soit un parallélogramme ${v.desc}.\n\n**Quelle est la nature précise de ce quadrilatère particulier ?**`,
        type: "mcq",
        answer: v.nature,
        options: opts,
        correctIndex: 0,
        hint1: v.hint,
        solution: v.exp
      };
    }
  },

  // --- 5G6 : Aires et périmètres (5ème) ---
  generate5G6(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Aire/périmètre rectangle et carré)
      const subType = this.randChoice(['rect_area', 'rect_perim', 'square_area', 'square_perim']);

      if (subType === 'rect_area') {
        const L = this.randInt(5, 11);
        const l = this.randInt(2, 5);
        const aire = L * l;
        return {
          chapterId: '5G6',
          tier: 1,
          title: "Aire d'un rectangle",
          statement: `Calculer l'aire d'un rectangle de longueur $L = ${L}\\text{ cm}$ et de largeur $l = ${l}\\text{ cm}$ (en $\\text{cm}^2$).`,
          type: "exact",
          answer: String(aire),
          placeholder: `Ex: ${aire}`,
          hint1: "Formule : $\\mathcal{A} = L \\times l$.",
          solution: `$$\\mathcal{A} = ${L} \\times ${l} = ${aire}\\text{ cm}^2$$`
        };
      } else if (subType === 'rect_perim') {
        const L = this.randInt(5, 11);
        const l = this.randInt(2, 5);
        const perim = 2 * (L + l);
        return {
          chapterId: '5G6',
          tier: 1,
          title: "Périmètre d'un rectangle",
          statement: `Calculer le périmètre d'un rectangle de longueur $L = ${L}\\text{ cm}$ et de largeur $l = ${l}\\text{ cm}$ (en cm).`,
          type: "exact",
          answer: String(perim),
          placeholder: `Ex: ${perim}`,
          hint1: "Formule : $\\mathcal{P} = 2 \\times (L + l)$.",
          solution: `$$\\mathcal{P} = 2 \\times (${L} + ${l}) = 2 \\times ${L + l} = ${perim}\\text{ cm}$$`
        };
      } else if (subType === 'square_area') {
        const c = this.randInt(3, 10);
        const aire = c * c;
        return {
          chapterId: '5G6',
          tier: 1,
          title: "Aire d'un carré",
          statement: `Calculer l'aire d'un carré dont le côté mesure $c = ${c}\\text{ cm}$ (en $\\text{cm}^2$).`,
          type: "exact",
          answer: String(aire),
          placeholder: `Ex: ${aire}`,
          hint1: "Formule : $\\mathcal{A} = c^2 = c \\times c$.",
          solution: `$$\\mathcal{A} = ${c} \\times ${c} = ${aire}\\text{ cm}^2$$`
        };
      } else {
        const c = this.randInt(3, 12);
        const perim = 4 * c;
        return {
          chapterId: '5G6',
          tier: 1,
          title: "Périmètre d'un carré",
          statement: `Calculer le périmètre d'un carré dont le côté mesure $c = ${c}\\text{ cm}$ (en cm).`,
          type: "exact",
          answer: String(perim),
          placeholder: `Ex: ${perim}`,
          hint1: "Formule : $\\mathcal{P} = 4 \\times c$.",
          solution: `$$\\mathcal{P} = 4 \\times ${c} = ${perim}\\text{ cm}$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Aire triangle rectangle, triangle quelconque, rétro-calcul)
      const subType = this.randChoice(['triangle_right', 'triangle_any', 'square_from_perim', 'rect_width']);

      if (subType === 'triangle_right') {
        const a = this.randInt(4, 10);
        const b = this.randInt(3, 8);
        const aire = (a * b) / 2;
        return {
          chapterId: '5G6',
          tier: 2,
          title: "Aire d'un triangle rectangle",
          statement: `Calculer l'aire d'un triangle rectangle dont les côtés de l'angle droit mesurent $a = ${a}\\text{ cm}$ et $b = ${b}\\text{ cm}$ (en $\\text{cm}^2$).`,
          type: "exact",
          answer: String(aire),
          placeholder: `Ex: ${aire}`,
          hint1: "Formule : $\\mathcal{A} = \\frac{a \\times b}{2}$.",
          solution: `$$\\mathcal{A} = \\frac{${a} \\times ${b}}{2} = \\frac{${a * b}}{2} = ${aire}\\text{ cm}^2$$`
        };
      } else if (subType === 'triangle_any') {
        const b = this.randChoice([6, 8, 10, 12]);
        const h = this.randInt(3, 7);
        const aire = (b * h) / 2;
        return {
          chapterId: '5G6',
          tier: 2,
          title: "Aire d'un triangle (Base et Hauteur)",
          statement: `Calculer l'aire d'un triangle de base $b = ${b}\\text{ cm}$ et de hauteur relative $h = ${h}\\text{ cm}$ (en $\\text{cm}^2$).`,
          type: "exact",
          answer: String(aire),
          placeholder: `Ex: ${aire}`,
          hint1: "Formule : $\\mathcal{A} = \\frac{\\text{base} \\times \\text{hauteur}}{2}$.",
          solution: `$$\\mathcal{A} = \\frac{${b} \\times ${h}}{2} = \\frac{${b * h}}{2} = ${aire}\\text{ cm}^2$$`
        };
      } else if (subType === 'square_from_perim') {
        const c = this.randInt(4, 12);
        const perim = 4 * c;
        return {
          chapterId: '5G6',
          tier: 2,
          title: "Côté d'un carré connaissant son périmètre",
          statement: `Le périmètre d'un carré mesure $\\mathcal{P} = ${perim}\\text{ cm}$.\n**Quelle est la longueur de son côté en cm ?**`,
          type: "exact",
          answer: String(c),
          placeholder: `Ex: ${c}`,
          hint1: "Un carré a 4 côtés de même longueur : $c = \\frac{\\mathcal{P}}{4}$.",
          solution: `$$c = \\frac{${perim}}{4} = ${c}\\text{ cm}$$`
        };
      } else {
        const l = this.randInt(3, 6);
        const L = this.randInt(7, 12);
        const aire = L * l;
        return {
          chapterId: '5G6',
          tier: 2,
          title: "Largeur d'un rectangle connaissant son aire",
          statement: `Un rectangle a une aire de $\\mathcal{A} = ${aire}\\text{ cm}^2$ et une longueur $L = ${L}\\text{ cm}$.\n**Quelle est sa largeur $l$ en cm ?**`,
          type: "exact",
          answer: String(l),
          placeholder: `Ex: ${l}`,
          hint1: "Formule inverse : $l = \\frac{\\mathcal{A}}{L}$.",
          solution: `$$l = \\frac{${aire}}{${L}} = ${l}\\text{ cm}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Aire d'un disque pi*R^2 ou Périmètre 2*pi*R)
      const subType = this.randChoice(['disk_area', 'circle_perim_r', 'circle_perim_d']);

      if (subType === 'disk_area') {
        const r = this.randInt(3, 9);
        const coeff = r * r;
        return {
          chapterId: '5G6',
          tier: 3,
          title: "Aire exacte d'un disque",
          statement: `Calculer la valeur exacte de l'aire d'un disque de rayon $R = ${r}\\text{ cm}$.\nDonner la réponse sous la forme $n\\pi\\text{ cm}^2$ (saisir uniquement le nombre $n$).`,
          type: "exact",
          answer: String(coeff),
          placeholder: `Ex: ${coeff}`,
          hint1: "Formule : $\\mathcal{A} = \\pi \\times R^2$. Calcule $R^2$.",
          solution: `$$\\mathcal{A} = \\pi \\times ${r}^2 = ${coeff}\\pi\\text{ cm}^2$$`
        };
      } else if (subType === 'circle_perim_r') {
        const r = this.randInt(3, 10);
        const coeff = 2 * r;
        return {
          chapterId: '5G6',
          tier: 3,
          title: "Périmètre exact d'un cercle (Rayon)",
          statement: `Calculer la valeur exacte du périmètre d'un cercle de rayon $R = ${r}\\text{ cm}$.\nDonner la réponse sous la forme $k\\pi\\text{ cm}$ (saisir uniquement le nombre $k$).`,
          type: "exact",
          answer: String(coeff),
          placeholder: `Ex: ${coeff}`,
          hint1: "Formule : $\\mathcal{P} = 2 \\times \\pi \\times R = (2 \\times R)\\pi$.",
          solution: `$$\\mathcal{P} = 2 \\times \\pi \\times ${r} = ${coeff}\\pi\\text{ cm}$$`
        };
      } else {
        const d = this.randInt(4, 14);
        return {
          chapterId: '5G6',
          tier: 3,
          title: "Périmètre exact d'un cercle (Diamètre)",
          statement: `Calculer la valeur exacte du périmètre d'un cercle de diamètre $D = ${d}\\text{ cm}$.\nDonner la réponse sous la forme $k\\pi\\text{ cm}$ (saisir uniquement le nombre $k$).`,
          type: "exact",
          answer: String(d),
          placeholder: `Ex: ${d}`,
          hint1: "Formule avec le diamètre : $\\mathcal{P} = \\pi \\times D = D\\pi$.",
          solution: `$$\\mathcal{P} = \\pi \\times ${d} = ${d}\\pi\\text{ cm}$$`
        };
      }
    } else {
      // Palier 4 : Défi 4ème (Aire d'une surface complexe par soustraction)
      const L = this.randInt(12, 18);
      const l = this.randInt(8, 12);
      const aCoin = this.randInt(3, 6);
      const bCoin = this.randChoice([2, 4, 6]);
      const aireRect = L * l;
      const aireCoin = (aCoin * bCoin) / 2;
      const aireRestante = aireRect - aireCoin;

      return {
        chapterId: '5G6',
        tier: 4,
        title: "Défi 4ème : Aire d'une surface complexe par soustraction",
        statement: `Une plaque métallique a la forme d'un rectangle de dimensions $L = ${L}\\text{ cm}$ et $l = ${l}\\text{ cm}$.\nOn découpe à l'un de ses angles un coin triangulaire rectangle dont les côtés de l'angle droit mesurent $${aCoin}\\text{ cm}$ et $${bCoin}\\text{ cm}$.\n\n**Calculer l'aire restante de la plaque métallique en $\\text{cm}^2$.**`,
        type: "exact",
        answer: String(aireRestante),
        placeholder: `Ex: ${aireRestante}`,
        hint1: `1. Calcule l'aire du rectangle plein : $${L} \\times ${l} = ${aireRect}\\text{ cm}^2$.\n2. Calcule l'aire du coin découpé : $\\frac{${aCoin} \\times ${bCoin}}{2} = ${aireCoin}\\text{ cm}^2$.\n3. Fais la soustraction.`,
        solution: `1. Aire du rectangle initial :\n$$\\mathcal{A}_{\\text{rectangle}} = ${L} \\times ${l} = ${aireRect}\\text{ cm}^2$$\n2. Aire du triangle découpé :\n$$\\mathcal{A}_{\\text{triangle}} = \\frac{${aCoin} \\times ${bCoin}}{2} = ${aireCoin}\\text{ cm}^2$$\n3. Aire finale restante :\n$$\\mathcal{A}_{\\text{restante}} = ${aireRect} - ${aireCoin} = ${aireRestante}\\text{ cm}^2$$`
      };
    }
  },

  // --- 5D1 : Statistiques 5ème (effectifs, fréquences, diagrammes) ---
  generate5D1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Effectif total, effectif manquant, modalité la plus fréquente)
      const subType = this.randChoice(['total_sum', 'missing_count', 'mode_max']);

      if (subType === 'total_sum') {
        const e1 = this.randInt(4, 9);
        const e2 = this.randInt(5, 11);
        const e3 = this.randInt(3, 8);
        const total = e1 + e2 + e3;
        return {
          chapterId: '5D1',
          tier: 1,
          title: "Calcul de l'effectif total",
          statement: `Dans un club de sport, il y a $${e1}$ benjamins, $${e2}$ minimes et $${e3}$ cadets.\n**Quel est l'effectif total d'adhérents de ce club ?**`,
          type: "exact",
          answer: String(total),
          placeholder: `Ex: ${total}`,
          hint1: "L'effectif total est la somme de tous les effectifs.",
          solution: `$$N_{\\text{total}} = ${e1} + ${e2} + ${e3} = ${total}$$`
        };
      } else if (subType === 'missing_count') {
        const total = this.randChoice([25, 28, 30, 32]);
        const e1 = this.randInt(7, 10);
        const e2 = this.randInt(8, 12);
        const e3 = total - e1 - e2;
        return {
          chapterId: '5D1',
          tier: 1,
          title: "Retrouver un effectif manquant",
          statement: `Dans une classe de $${total}$ élèves, $${e1}$ étudient l'espagnol, $${e2}$ étudient l'allemand et le reste étudie l'italien.\n**Combien d'élèves étudient l'italien ?**`,
          type: "exact",
          answer: String(e3),
          placeholder: `Ex: ${e3}`,
          hint1: `Soustrais les effectifs connus à l'effectif total : $${total} - ${e1} - ${e2}$.`,
          solution: `$$N_{\\text{italien}} = ${total} - (${e1} + ${e2}) = ${total} - ${e1 + e2} = ${e3}$$`
        };
      } else {
        const sports = ["Football", "Basketball", "Natation", "Tennis"];
        const counts = [this.randInt(6, 9), this.randInt(10, 14), this.randInt(4, 7), this.randInt(2, 5)];
        const maxIdx = counts.indexOf(Math.max(...counts));
        const maxSport = sports[maxIdx];
        return {
          chapterId: '5D1',
          tier: 1,
          title: "Lecture d'un effectif maximal",
          statement: `Voici la répartition des élèves selon leur sport favori :\n- Football : $${counts[0]}$\n- Basketball : $${counts[1]}$\n- Natation : $${counts[2]}$\n- Tennis : $${counts[3]}$\n\n**Quel est l'effectif du sport le plus pratiqué ?**`,
          type: "exact",
          answer: String(counts[maxIdx]),
          placeholder: `Ex: ${counts[maxIdx]}`,
          hint1: `Repère le plus grand nombre dans la liste (c'est le sport « ${maxSport} »).`,
          solution: `Le sport le plus pratiqué est le ${maxSport} avec un effectif maximal de **${counts[maxIdx]}** élèves.`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Fréquence en fraction, fréquence décimale, rétro-calcul)
      const subType = this.randChoice(['freq_fraction', 'freq_decimal', 'find_count']);

      if (subType === 'freq_fraction') {
        const eff = this.randInt(3, 8);
        const total = this.randChoice([10, 20, 25]);
        const [sN, sD] = this.simplifyFraction(eff, total);
        return {
          chapterId: '5D1',
          tier: 2,
          title: "Fréquence sous forme de fraction",
          statement: `Sur un effectif total de $${total}$ élèves, $${eff}$ ont choisi l'espagnol comme langue vivante.\n**Quelle est la fréquence de ce groupe ?** (Donner le résultat sous forme de fraction irréductible)`,
          type: "exact",
          answer: `${sN}/${sD}`,
          placeholder: "Ex: 2/5",
          hint1: "Formule : $\\text{Fréquence} = \\frac{\\text{effectif}}{\\text{effectif total}}$.",
          solution: `$$\\text{Fréquence} = \\frac{${eff}}{${total}} = ${this.formatFraction(eff, total)}$$`
        };
      } else if (subType === 'freq_decimal') {
        const cases = [
          { eff: 5, total: 10, dec: "0.5" },
          { eff: 3, total: 10, dec: "0.3" },
          { eff: 7, total: 10, dec: "0.7" },
          { eff: 5, total: 20, dec: "0.25" },
          { eff: 4, total: 20, dec: "0.2" },
          { eff: 8, total: 20, dec: "0.4" }
        ];
        const item = this.randChoice(cases);
        return {
          chapterId: '5D1',
          tier: 2,
          title: "Fréquence sous forme d'écriture décimale",
          statement: `Dans un groupe de $${item.total}$ personnes, $${item.eff}$ ont les yeux bleus.\n**Donner la fréquence de ce caractère sous forme décimale.**`,
          type: "exact",
          answer: item.dec,
          placeholder: `Ex: ${item.dec}`,
          hint1: `Calcule le quotient décimal : $${item.eff} \\div ${item.total}$.`,
          solution: `$$\\text{Fréquence} = \\frac{${item.eff}}{${item.total}} = ${item.eff} \\div ${item.total} = ${item.dec}$$`
        };
      } else {
        const total = this.randChoice([30, 40, 50]);
        const dec = this.randChoice([0.2, 0.3, 0.4, 0.5]);
        const count = Math.round(total * dec);
        return {
          chapterId: '5D1',
          tier: 2,
          title: "Retrouver un effectif à partir d'une fréquence",
          statement: `Dans une classe de $${total}$ élèves, la fréquence des demi-pensionnaires est de $${String(dec).replace('.', ',')}$.\n**Combien d'élèves sont demi-pensionnaires ?**`,
          type: "exact",
          answer: String(count),
          placeholder: `Ex: ${count}`,
          hint1: `Multiplie l'effectif total par la fréquence : $${total} \\times ${dec}$.`,
          solution: `$$\\text{Effectif} = ${total} \\times ${dec} = ${count}\\text{ élèves}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Fréquence en pourcentage, pourcentage complémentaire)
      const subType = this.randChoice(['pct_table', 'missing_pct']);

      if (subType === 'pct_table') {
        const eff = this.randChoice([3, 5, 6, 8, 12]);
        const total = this.randChoice([20, 25, 50]);
        const pct = (eff / total) * 100;
        return {
          chapterId: '5D1',
          tier: 3,
          title: "Fréquence exprimée en pourcentage",
          statement: `Dans une classe de $${total}$ élèves, $${eff}$ portent des lunettes.\n**Quel est le pourcentage d'élèves portant des lunettes ?** (Saisir uniquement le nombre, ex: 25)`,
          type: "exact",
          answer: String(pct),
          placeholder: `Ex: ${pct}`,
          hint1: `Calcule $\\frac{${eff}}{${total}} \\times 100$.`,
          solution: `$$\\text{Fréquence} = \\frac{${eff}}{${total}} \\times 100 = ${pct}\\%$$`
        };
      } else {
        const p1 = this.randChoice([25, 30, 40]);
        const p2 = this.randChoice([20, 30, 35]);
        const p3 = 100 - p1 - p2;
        return {
          chapterId: '5D1',
          tier: 3,
          title: "Pourcentage complémentaire d'une série",
          statement: `Dans une enquête, les personnes interrogées ont voté pour trois options :\n- Option A : $${p1}\\%$\n- Option B : $${p2}\\%$\n- Option C : le reste\n\n**Quel est le pourcentage de personnes ayant choisi l'option C ?** (Saisir uniquement le nombre, ex: ${p3})`,
          type: "exact",
          answer: String(p3),
          placeholder: `Ex: ${p3}`,
          hint1: `La somme de tous les pourcentages d'une population vaut toujours $100\\%$. Soustrais $${p1}$ et $${p2}$ à 100.`,
          solution: `$$\\text{Option C} = 100\\% - (${p1}\\% + ${p2}\\%) = 100\\% - ${p1 + p2}\\% = ${p3}\\%$$`
        };
      }
    } else {
      // Palier 4 : Défi 4ème (Angle dans un diagramme circulaire)
      const configs = [
        { tot: 20, eff: 5, deg: 90 },
        { tot: 30, eff: 5, deg: 60 },
        { tot: 24, eff: 8, deg: 120 },
        { tot: 36, eff: 4, deg: 40 },
        { tot: 40, eff: 10, deg: 90 }
      ];
      const cfg = this.randChoice(configs);

      return {
        chapterId: '5D1',
        tier: 4,
        title: "Défi 4ème : Angle dans un diagramme circulaire (Proportionnalité à 360°)",
        statement: `Pour représenter la répartition des $${cfg.tot}$ élèves d'une classe dans un diagramme circulaire, on s'intéresse au groupe des $${cfg.eff}$ élèves qui viennent à vélo.\n\n**Quelle doit être la mesure en degrés de l'angle du secteur circulaire représentant ce groupe ?**`,
        type: "exact",
        answer: String(cfg.deg),
        placeholder: `Ex: ${cfg.deg}`,
        hint1: `Le disque complet représente $360^\\circ$ pour les $${cfg.tot}$ élèves. Utilise la proportionnalité : $\\text{Angle} = \\frac{${cfg.eff}}{${cfg.tot}} \\times 360^\\circ$.`,
        solution: `Par proportionnalité avec les $360^\\circ$ du cercle complet :\n$$\\text{Angle} = \\frac{${cfg.eff}}{${cfg.tot}} \\times 360^\\circ = ${cfg.deg}^\\circ$$`
      };
    }
  },

  // --- 5N5 : Calcul littéral et initiation aux équations (5ème) ---
  generate5N5(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Réduction simple ax+bx, ax-bx, x+ax, 3 termes, multiplication a*(bx))
      const subType = this.randChoice(['add_terms', 'sub_terms', 'single_x', 'three_terms', 'mult_terms']);

      if (subType === 'add_terms') {
        const a = this.randInt(2, 8);
        const b = this.randInt(2, 8);
        const sum = a + b;
        return {
          chapterId: '5N5',
          tier: 1,
          title: "Réduction d'une somme de termes en x",
          statement: `Réduire l'expression littérale suivante :\n$$A = ${a}x + ${b}x$$`,
          type: "exact",
          answer: `${sum}x`,
          placeholder: `Ex: ${sum}x`,
          hint1: `Factorise par $x$ : $(${a} + ${b})x$.`,
          solution: `$$A = (${a} + ${b})x = ${sum}x$$`
        };
      } else if (subType === 'sub_terms') {
        const b = this.randInt(2, 5);
        const a = b + this.randInt(1, 6);
        const diff = a - b;
        const ans = diff === 1 ? 'x' : `${diff}x`;
        return {
          chapterId: '5N5',
          tier: 1,
          title: "Réduction d'une différence de termes en x",
          statement: `Réduire l'expression littérale suivante :\n$$B = ${a}x - ${b}x$$`,
          type: "exact",
          answer: ans,
          placeholder: `Ex: ${ans}`,
          hint1: `Soustrais les coefficients : $(${a} - ${b})x$.`,
          solution: `$$B = (${a} - ${b})x = ${ans}$$`
        };
      } else if (subType === 'single_x') {
        const a = this.randInt(2, 7);
        const isAdd = Math.random() > 0.5;
        if (isAdd) {
          return {
            chapterId: '5N5',
            tier: 1,
            title: "Réduction avec le terme x seul",
            statement: `Réduire l'expression littérale suivante :\n$$C = x + ${a}x$$`,
            type: "exact",
            answer: `${1 + a}x`,
            placeholder: `Ex: ${1 + a}x`,
            hint1: `Rappelle-toi que $x$ s'écrit aussi $1x$. Donc $1x + ${a}x = (1 + ${a})x$.`,
            solution: `$$C = 1x + ${a}x = (1 + ${a})x = ${1 + a}x$$`
          };
        } else {
          return {
            chapterId: '5N5',
            tier: 1,
            title: "Réduction avec le terme x seul",
            statement: `Réduire l'expression littérale suivante :\n$$C = ${a}x - x$$`,
            type: "exact",
            answer: `${a - 1}x`,
            placeholder: `Ex: ${a - 1}x`,
            hint1: `Rappelle-toi que $x$ s'écrit aussi $1x$. Donc $${a}x - 1x = (${a} - 1)x$.`,
            solution: `$$C = ${a}x - 1x = (${a} - 1)x = ${a - 1}x$$`
          };
        }
      } else if (subType === 'three_terms') {
        const a = this.randInt(2, 5);
        const b = this.randInt(2, 4);
        const c = this.randInt(1, 4);
        const sum = a + b + c;
        return {
          chapterId: '5N5',
          tier: 1,
          title: "Réduction de trois termes en x",
          statement: `Réduire l'expression littérale suivante :\n$$D = ${a}x + ${b}x + ${c}x$$`,
          type: "exact",
          answer: `${sum}x`,
          placeholder: `Ex: ${sum}x`,
          hint1: `Additionne les trois coefficients ensemble : $(${a} + ${b} + ${c})x$.`,
          solution: `$$D = (${a} + ${b} + ${c})x = ${sum}x$$`
        };
      } else {
        const a = this.randInt(2, 6);
        const b = this.randInt(2, 7);
        const prod = a * b;
        return {
          chapterId: '5N5',
          tier: 1,
          title: "Multiplication d'un entier par un monôme",
          statement: `Simplifier l'expression littérale suivante :\n$$E = ${a} \\times (${b}x)$$`,
          type: "exact",
          answer: `${prod}x`,
          placeholder: `Ex: ${prod}x`,
          hint1: `Multiplie les deux nombres ensemble : $(${a} \\times ${b}) \\times x$.`,
          solution: `$$E = (${a} \\times ${b})x = ${prod}x$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Substitution numérique : ax+b, ax-b, b-ax, a(x+b), x^2+a)
      const subType = this.randChoice(['ax_plus_b', 'ax_minus_b', 'b_minus_ax', 'factor_par', 'square_plus']);

      if (subType === 'ax_plus_b') {
        const a = this.randInt(2, 6);
        const b = this.randInt(1, 9);
        const x = this.randInt(2, 6);
        const ans = a * x + b;
        return {
          chapterId: '5N5',
          tier: 2,
          title: "Valeur d'une expression littérale (ax + b)",
          statement: `Calculer la valeur numérique de $B = ${a}x + ${b}$ pour $x = ${x}$ :`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Remplace $x$ par ${x} : calcule $${a} \\times ${x} + ${b}$.`,
          solution: `$$B = ${a} \\times ${x} + ${b} = ${a * x} + ${b} = ${ans}$$`
        };
      } else if (subType === 'ax_minus_b') {
        const a = this.randInt(3, 7);
        const x = this.randInt(3, 6);
        const b = this.randInt(1, a * x - 1);
        const ans = a * x - b;
        return {
          chapterId: '5N5',
          tier: 2,
          title: "Valeur d'une expression littérale (ax - b)",
          statement: `Calculer la valeur numérique de $C = ${a}x - ${b}$ pour $x = ${x}$ :`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Remplace $x$ par ${x} : effectue d'abord la multiplication $${a} \\times ${x}$, puis soustrais ${b}.`,
          solution: `$$C = ${a} \\times ${x} - ${b} = ${a * x} - ${b} = ${ans}$$`
        };
      } else if (subType === 'b_minus_ax') {
        const a = this.randInt(2, 5);
        const x = this.randInt(2, 5);
        const b = a * x + this.randInt(2, 10);
        const ans = b - a * x;
        return {
          chapterId: '5N5',
          tier: 2,
          title: "Valeur d'une expression littérale (b - ax)",
          statement: `Calculer la valeur numérique de $D = ${b} - ${a}x$ pour $x = ${x}$ :`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Attention aux priorités : calcule d'abord le produit $${a} \\times ${x}$, puis soustrais-le à $${b}$.`,
          solution: `$$D = ${b} - (${a} \\times ${x}) = ${b} - ${a * x} = ${ans}$$`
        };
      } else if (subType === 'factor_par') {
        const a = this.randInt(2, 5);
        const b = this.randInt(1, 6);
        const x = this.randInt(2, 6);
        const ans = a * (x + b);
        return {
          chapterId: '5N5',
          tier: 2,
          title: "Valeur d'une expression avec parenthèses",
          statement: `Calculer la valeur numérique de $E = ${a}(x + ${b})$ pour $x = ${x}$ :`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Calcule d'abord l'opération entre parenthèses : $(${x} + ${b})$, puis multiplie par $${a}$.`,
          solution: `$$E = ${a} \\times (${x} + ${b}) = ${a} \\times ${x + b} = ${ans}$$`
        };
      } else {
        const a = this.randInt(1, 9);
        const x = this.randInt(2, 6);
        const ans = x * x + a;
        return {
          chapterId: '5N5',
          tier: 2,
          title: "Valeur d'une expression avec carré",
          statement: `Calculer la valeur numérique de $F = x^2 + ${a}$ pour $x = ${x}$ :`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Calcule d'abord le carré $${x}^2 = ${x} \\times ${x}$, puis ajoute $${a}$.`,
          solution: `$$F = ${x}^2 + ${a} = ${x * x} + ${a} = ${ans}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Approfondissement (Tester si un nombre est solution d'une égalité)
      // Alternance équilibrée (50% Oui / 50% Non) avec différents types d'égalités
      const isSolution = Math.random() < 0.5;
      const subType = this.randChoice(['add', 'sub', 'both_sides']);

      if (subType === 'add') {
        // Forme ax + b = c
        const a = this.randInt(2, 6);
        const x = this.randInt(2, 7);
        const b = this.randInt(1, 9);
        const leftVal = a * x + b;
        const c = isSolution ? leftVal : leftVal + this.randChoice([-3, -2, -1, 1, 2, 3]);
        
        let correctOption = '';
        let options = [];
        let solution = '';

        if (isSolution) {
          correctOption = `Oui, car $${a} \\times ${x} + ${b} = ${c}$`;
          options = [
            correctOption,
            `Non, car le membre de gauche vaut ${c + 2}`,
            `Non, car ${x} n'est pas un multiple de ${a}`,
            `On ne peut pas savoir sans résoudre l'équation`
          ];
          solution = `• Pour $x = ${x}$, calculons le membre de gauche :\\n$$${a} \\times ${x} + ${b} = ${a * x} + ${b} = ${leftVal}$$\\n• Le membre de droite vaut $${c}$.\\n• Comme les deux membres sont égaux ($${leftVal} = ${c}$), le nombre **${x} est bien solution** de l'équation.`;
        } else {
          correctOption = `Non, car pour $x = ${x}$, $${a} \\times ${x} + ${b} = ${leftVal} \\neq ${c}$`;
          options = [
            correctOption,
            `Oui, car $${a} \\times ${x} + ${b} = ${c}$`,
            `Oui, car ${x} est un nombre entier`,
            `On ne peut pas savoir`
          ];
          solution = `• Pour $x = ${x}$, calculons le membre de gauche :\\n$$${a} \\times ${x} + ${b} = ${a * x} + ${b} = ${leftVal}$$\\n• Le membre de droite vaut $${c}$.\\n• Comme $${leftVal} \\neq ${c}$, l'égalité n'est pas vérifiée : le nombre **${x} n'est pas solution** de l'équation.`;
        }

        return {
          chapterId: '5N5',
          tier: 3,
          title: "Tester si un nombre est solution (5ème)",
          statement: `On considère l'égalité : $${a}x + ${b} = ${c}$.\n**Le nombre $${x}$ est-il solution de cette équation ?**`,
          type: "mcq",
          options,
          answer: correctOption,
          correctIndex: 0,
          hint1: `Remplace $x$ par ${x} dans le membre de gauche ($${a} \\times ${x} + ${b}$) et compare le résultat avec ${c}.`,
          solution
        };

      } else if (subType === 'sub') {
        // Forme ax - b = c
        const a = this.randInt(3, 7);
        const x = this.randInt(3, 8);
        const b = this.randInt(1, 8);
        const leftVal = a * x - b;
        const c = isSolution ? leftVal : Math.max(1, leftVal + this.randChoice([-4, -2, 2, 4]));

        let correctOption = '';
        let options = [];
        let solution = '';

        if (isSolution) {
          correctOption = `Oui, car $${a} \\times ${x} - ${b} = ${c}$`;
          options = [
            correctOption,
            `Non, car $${a} \\times ${x} - ${b} = ${c + 3}`,
            `Non, car le membre de gauche vaut ${a * x + b}`,
            `On ne peut pas savoir`
          ];
          solution = `• Pour $x = ${x}$, calculons le membre de gauche :\\n$$${a} \\times ${x} - ${b} = ${a * x} - ${b} = ${leftVal}$$\\n• Le membre de droite vaut $${c}$.\\n• Comme les deux membres sont égaux ($${leftVal} = ${c}$), le nombre **${x} est bien solution** de l'équation.`;
        } else {
          correctOption = `Non, car pour $x = ${x}$, $${a} \\times ${x} - ${b} = ${leftVal} \\neq ${c}$`;
          options = [
            correctOption,
            `Oui, car $${a} \\times ${x} - ${b} = ${c}$`,
            `Oui, car $${x}$ divise $${c}$`,
            `On ne peut pas savoir`
          ];
          solution = `• Pour $x = ${x}$, calculons le membre de gauche :\\n$$${a} \\times ${x} - ${b} = ${a * x} - ${b} = ${leftVal}$$\\n• Le membre de droite vaut $${c}$.\\n• Comme $${leftVal} \\neq ${c}$, l'égalité n'est pas vérifiée : le nombre **${x} n'est pas solution** de l'équation.`;
        }

        return {
          chapterId: '5N5',
          tier: 3,
          title: "Tester si un nombre est solution (5ème)",
          statement: `On considère l'égalité : $${a}x - ${b} = ${c}$.\n**Le nombre $${x}$ est-il solution de cette équation ?**`,
          type: "mcq",
          options,
          answer: correctOption,
          correctIndex: 0,
          hint1: `Remplace $x$ par ${x} dans le membre de gauche : calcule $${a} \\times ${x} - ${b}$ et compare avec ${c}.`,
          solution
        };

      } else {
        // Forme avec x des deux côtés : ax + b = cx + d
        const a = this.randInt(3, 6);
        const cCoeff = this.randInt(1, a - 1);
        const x = this.randInt(2, 6);
        const b = this.randInt(1, 8);
        const leftVal = a * x + b;
        const d = isSolution ? (leftVal - cCoeff * x) : Math.max(1, leftVal - cCoeff * x + this.randChoice([-3, -2, 2, 3]));
        const rightVal = cCoeff * x + d;

        let correctOption = '';
        let options = [];
        let solution = '';

        if (isSolution) {
          correctOption = `Oui, car les deux membres valent ${leftVal}`;
          options = [
            correctOption,
            `Non, car le membre de gauche vaut ${leftVal + 1}`,
            `Non, car il y a des $x$ des deux côtés`,
            `On ne peut pas savoir sans résoudre`
          ];
          solution = `• Membre de gauche pour $x = ${x}$ :\\n$$${a} \\times ${x} + ${b} = ${a * x} + ${b} = ${leftVal}$$\\n• Membre de droite pour $x = ${x}$ :\\n$$${cCoeff} \\times ${x} + ${d} = ${cCoeff * x} + ${d} = ${rightVal}$$\\n• Comme $${leftVal} = ${rightVal}$, l'égalité est vérifiée : **${x} est solution**.`;
        } else {
          correctOption = `Non, car le membre de gauche vaut ${leftVal} et celui de droite vaut ${rightVal}`;
          options = [
            correctOption,
            `Oui, car $${leftVal} = ${rightVal}$`,
            `Oui, car toute égalité a une solution`,
            `On ne peut pas savoir`
          ];
          solution = `• Membre de gauche pour $x = ${x}$ :\\n$$${a} \\times ${x} + ${b} = ${a * x} + ${b} = ${leftVal}$$\\n• Membre de droite pour $x = ${x}$ :\\n$$${cCoeff} \\times ${x} + ${d} = ${cCoeff * x} + ${d} = ${rightVal}$$\\n• Comme $${leftVal} \\neq ${rightVal}$, l'égalité n'est pas vérifiée : **${x} n'est pas solution**.`;
        }

        return {
          chapterId: '5N5',
          tier: 3,
          title: "Tester une égalité (5ème)",
          statement: `On considère l'égalité : $${a}x + ${b} = ${cCoeff}x + ${d}$.\n**Le nombre $${x}$ est-il solution de cette égalité ?**`,
          type: "mcq",
          options,
          answer: correctOption,
          correctIndex: 0,
          hint1: `Calcule séparément le membre de gauche ($${a} \\times ${x} + ${b}$) et le membre de droite ($${cCoeff} \\times ${x} + ${d}$) pour $x = ${x}$.`,
          solution
        };
      }
    } else {
      // Palier 4 : Défi (Résolution d'équations simples ax = b ou ax + b = c)
      const subType = this.randChoice(['ax_eq_b', 'ax_plus_b_eq_c', 'x_div_a_eq_b']);

      if (subType === 'ax_eq_b') {
        const a = this.randInt(3, 8);
        const x = this.randInt(2, 9);
        const b = a * x;
        return {
          chapterId: '5N5',
          tier: 4,
          title: "Défi 4ème : Résoudre ax = b",
          statement: `Résoudre l'équation d'inconnue $x$ :\n$$${a}x = ${b}$$`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Divise les deux membres par ${a} : $x = \\frac{${b}}{${a}}$.`,
          solution: `$$x = \\frac{${b}}{${a}} = ${x}$$`
        };
      } else if (subType === 'ax_plus_b_eq_c') {
        const a = this.randInt(2, 6);
        const x = this.randInt(2, 8);
        const b = this.randInt(1, 9);
        const c = a * x + b;
        return {
          chapterId: '5N5',
          tier: 4,
          title: "Défi 4ème : Résoudre ax + b = c",
          statement: `Résoudre l'équation d'inconnue $x$ :\n$$${a}x + ${b} = ${c}$$`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Isole le terme en $x$ en soustrayant $${b}$ de chaque côté, puis divise par $${a}$.`,
          solution: `$$${a}x = ${c} - ${b} = ${c - b} \\implies x = \\frac{${c - b}}{${a}} = ${x}$$`
        };
      } else {
        const a = this.randInt(2, 6);
        const b = this.randInt(3, 9);
        const x = a * b;
        return {
          chapterId: '5N5',
          tier: 4,
          title: "Défi 4ème : Résoudre x / a = b",
          statement: `Résoudre l'équation d'inconnue $x$ :\n$$\\frac{x}{${a}} = ${b}$$`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Multiplie les deux membres par ${a} : $x = ${b} \\times ${a}$.`,
          solution: `$$x = ${b} \\times ${a} = ${x}$$`
        };
      }
    }
  },

  // --- 5G1 : Repérage sur une droite et dans le plan (5ème) ---
  generate5G1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Distance à zéro, opposé, longueur d'un segment)
      const subType = this.randChoice(['dist_zero_neg', 'dist_zero_pos', 'opp_point', 'segment_length']);

      if (subType === 'dist_zero_neg') {
        const abs = this.randInt(-9, -2);
        return {
          chapterId: '5G1',
          tier: 1,
          title: "Distance à zéro sur un axe gradué",
          statement: `Sur un axe gradué d'origine $O$, le point $A$ a pour abscisse $x_A = ${abs}$.\n**Quelle est la distance $OA$ ?**`,
          type: "exact",
          answer: String(Math.abs(abs)),
          placeholder: `Ex: ${Math.abs(abs)}`,
          hint1: "La distance à zéro est toujours un nombre positif.",
          solution: `La distance d'un point d'abscisse ${abs} à l'origine est $|${abs}| = ${Math.abs(abs)}$.`
        };
      } else if (subType === 'dist_zero_pos') {
        const abs = this.randInt(3, 9);
        return {
          chapterId: '5G1',
          tier: 1,
          title: "Distance à zéro sur un axe gradué",
          statement: `Sur un axe gradué d'origine $O$, le point $B$ a pour abscisse $x_B = +${abs}$.\n**Quelle est la distance $OB$ ?**`,
          type: "exact",
          answer: String(abs),
          placeholder: `Ex: ${abs}`,
          hint1: "La distance à zéro d'un nombre positif est égale à ce nombre lui-même.",
          solution: `La distance du point $B(+${abs})$ à l'origine est $OB = ${abs}$.`
        };
      } else if (subType === 'opp_point') {
        const abs = this.randChoice([this.randInt(2, 8), this.randInt(-8, -2)]);
        const opp = -abs;
        return {
          chapterId: '5G1',
          tier: 1,
          title: "Points symétriques par rapport à l'origine",
          statement: `Sur un axe gradué d'origine $O$, le point $A$ a pour abscisse $x_A = ${abs}$.\nLe point $A'$ est le symétrique de $A$ par rapport à l'origine $O$.\n**Quelle est l'abscisse du point $A'$ ?**`,
          type: "exact",
          answer: String(opp),
          placeholder: `Ex: ${opp}`,
          hint1: "Deux points symétriques par rapport à l'origine ont des abscisses opposées.",
          solution: `L'abscisse de $A'$ est l'opposé de $x_A$ :\n$$x_{A'} = -(${abs}) = ${opp}$$`
        };
      } else {
        const xA = this.randInt(-5, 0);
        const dist = this.randInt(3, 8);
        const xB = xA + dist;
        return {
          chapterId: '5G1',
          tier: 1,
          title: "Distance entre deux points sur une droite graduée",
          statement: `Sur un axe gradué, le point $A$ a pour abscisse $x_A = ${xA}$ et le point $B$ a pour abscisse $x_B = ${xB}$.\n**Quelle est la distance $AB$ ?**`,
          type: "exact",
          answer: String(dist),
          placeholder: `Ex: ${dist}`,
          hint1: `La distance est toujours la plus grande abscisse moins la plus petite : $x_B - x_A = ${xB} - (${xA})$.`,
          solution: `$$AB = x_B - x_A = ${xB} - (${xA}) = ${xB} + ${Math.abs(xA)} = ${dist}$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Lecture ordonnée, lecture abscisse, position sur les axes)
      const subType = this.randChoice(['read_ord', 'read_abs', 'axis_position']);

      if (subType === 'read_ord') {
        const x = this.randInt(-7, 7, [0]);
        const y = this.randInt(-7, 7, [0]);
        return {
          chapterId: '5G1',
          tier: 2,
          title: "Lecture d'ordonnée dans un repère",
          statement: `Dans un repère orthogonal, le point $M$ a pour coordonnées $(${x} ; ${y})$.\n**Quelle est l'ordonnée de ce point ?**`,
          type: "exact",
          answer: String(y),
          placeholder: `Ex: ${y}`,
          hint1: "Dans les coordonnées $(x ; y)$, $x$ est l'abscisse (axe horizontal) et $y$ est l'ordonnée (axe vertical).",
          solution: `Le point $M(${x} ; ${y})$ a pour ordonnée $y = ${y}$.`
        };
      } else if (subType === 'read_abs') {
        const x = this.randInt(-7, 7, [0]);
        const y = this.randInt(-7, 7, [0]);
        return {
          chapterId: '5G1',
          tier: 2,
          title: "Lecture d'abscisse dans un repère",
          statement: `Dans un repère orthogonal, le point $P$ a pour coordonnées $(${x} ; ${y})$.\n**Quelle est l'abscisse de ce point ?**`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: "Dans les coordonnées $(x ; y)$, $x$ est l'abscisse et $y$ est l'ordonnée.",
          solution: `Le point $P(${x} ; ${y})$ a pour abscisse $x = ${x}$.`
        };
      } else {
        const isAbscisse = Math.random() > 0.5;
        const val = this.randInt(2, 8) * (Math.random() > 0.5 ? 1 : -1);
        const pt = isAbscisse ? `(${val} ; 0)` : `(0 ; ${val})`;
        const correctAxis = isAbscisse ? "abscisses" : "ordonnées";
        const otherAxis = isAbscisse ? "ordonnées" : "abscisses";
        const opts = this.shuffle([`Axe des ${correctAxis}`, `Axe des ${otherAxis}`, "Sur aucun axe", "À l'origine"]);

        return {
          chapterId: '5G1',
          tier: 2,
          title: "Position d'un point sur les axes",
          statement: `Dans un repère, le point $K$ a pour coordonnées $${pt}$.\n**Sur quel axe ce point se situe-t-il ?**`,
          type: "mcq",
          options: opts,
          answer: `Axe des ${correctAxis}`,
          correctIndex: opts.indexOf(`Axe des ${correctAxis}`),
          hint1: isAbscisse ? "L'ordonnée est nulle ($y = 0$), le point est donc sur la ligne horizontale." : "L'abscisse est nulle ($x = 0$), le point est donc sur la ligne verticale.",
          solution: `Le point $K${pt}$ a son ${isAbscisse ? 'ordonnée' : 'abscisse'} égale à zéro : il est situé sur l'**axe des ${correctAxis}**.`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Symétrie repère : axe Oy, axe Ox, origine)
      const subType = this.randChoice(['sym_oy', 'sym_ox', 'sym_orig']);
      const x = this.randInt(2, 7);
      const y = this.randInt(2, 7);

      if (subType === 'sym_oy') {
        return {
          chapterId: '5G1',
          tier: 3,
          title: "Symétrie par rapport à l'axe des ordonnées",
          statement: `Dans un repère, le point $A$ a pour coordonnées $(${x} ; ${y})$.\n**Quelles sont les coordonnées de son symétrique par rapport à l'axe des ordonnées (Oy) ?**`,
          type: "mcq",
          options: [
            `(-${x} ; ${y})`,
            `(${x} ; -${y})`,
            `(-${x} ; -${y})`,
            `(${y} ; ${x})`
          ],
          correctIndex: 0,
          hint1: "L'ordonnée reste identique, l'abscisse change de signe : $(-x ; y)$.",
          solution: `La symétrie axiale par rapport à $(Oy)$ transforme $(x ; y)$ en $(-x ; y)$, soit $(-${x} ; ${y})$.`
        };
      } else if (subType === 'sym_ox') {
        return {
          chapterId: '5G1',
          tier: 3,
          title: "Symétrie par rapport à l'axe des abscisses",
          statement: `Dans un repère, le point $A$ a pour coordonnées $(${x} ; ${y})$.\n**Quelles sont les coordonnées de son symétrique par rapport à l'axe des abscisses (Ox) ?**`,
          type: "mcq",
          options: [
            `(${x} ; -${y})`,
            `(-${x} ; ${y})`,
            `(-${x} ; -${y})`,
            `(-${y} ; -${x})`
          ],
          correctIndex: 0,
          hint1: "L'abscisse reste identique, l'ordonnée change de signe : $(x ; -y)$.",
          solution: `La symétrie axiale par rapport à $(Ox)$ transforme $(x ; y)$ en $(x ; -y)$, soit $(${x} ; -${y})$.`
        };
      } else {
        return {
          chapterId: '5G1',
          tier: 3,
          title: "Symétrie centrale par rapport à l'origine",
          statement: `Dans un repère, le point $A$ a pour coordonnées $(${x} ; ${y})$.\n**Quelles sont les coordonnées de son symétrique par rapport à l'origine $O(0;0)$ ?**`,
          type: "mcq",
          options: [
            `(-${x} ; -${y})`,
            `(-${x} ; ${y})`,
            `(${x} ; -${y})`,
            `(${y} ; ${x})`
          ],
          correctIndex: 0,
          hint1: "La symétrie centrale par rapport à l'origine transforme $(x ; y)$ en $(-x ; -y)$.",
          solution: `La symétrie par rapport à l'origine transforme $(x ; y)$ en $(-x ; -y)$, soit $(-${x} ; -${y})$.`
        };
      }
    } else {
      const xA = this.randInt(1, 4) * 2;
      const xB = this.randInt(5, 9) * 2;
      const xM = (xA + xB) / 2;
      return {
        chapterId: '5G1',
        tier: 4,
        title: "Défi 4ème : Abscisse du milieu d'un segment",
        statement: `Sur une droite graduée, $A$ a pour abscisse $x_A = ${xA}$ et $B$ a pour abscisse $x_B = ${xB}$.\n**Quelle est l'abscisse du milieu $M$ du segment $[AB]$ ?**`,
        type: "exact",
        answer: String(xM),
        placeholder: `Ex: ${xM}`,
        hint1: "Formule du milieu : $x_M = \\frac{x_A + x_B}{2}$.",
        solution: `$$x_M = \\frac{${xA} + ${xB}}{2} = \\frac{${xA + xB}}{2} = ${xM}$$`
      };
    }
  },

  // --- 5G2 : Symétrie centrale et demi-tour (5ème) ---
  generate5G2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      // Palier 1 : Socle (Définition du centre, image d'un point, demi-tour)
      const subType = this.randChoice(['milieu_def', 'demi_tour', 'segment_image']);

      if (subType === 'milieu_def') {
        const tri = this.randChoice([
          { orig: 'A', img: "A'", ctr: 'O' },
          { orig: 'M', img: "M'", ctr: 'I' },
          { orig: 'E', img: "E'", ctr: 'K' },
          { orig: 'P', img: "P'", ctr: 'O' }
        ]);
        const correct = `Le milieu du segment [${tri.orig}${tri.img}]`;
        const opts = this.shuffle([
          correct,
          "Une extrémité du segment",
          "Le tiers du segment",
          "Le centre de gravité"
        ]);
        return {
          chapterId: '5G2',
          tier: 1,
          title: "Définition de la symétrie centrale (5ème)",
          statement: `Si le point $${tri.img}$ est le symétrique du point $${tri.orig}$ par rapport à $${tri.ctr}$, que représente le point $${tri.ctr}$ pour le segment $[${tri.orig}${tri.img}]$ ?`,
          type: "mcq",
          options: opts,
          answer: correct,
          correctIndex: opts.indexOf(correct),
          hint1: `La symétrie centrale de centre ${tri.ctr} est un demi-tour autour de ${tri.ctr}.`,
          solution: `Par définition, le centre de symétrie $${tri.ctr}$ est le milieu du segment reliant le point et son image $[${tri.orig}${tri.img}]$.`
        };
      } else if (subType === 'demi_tour') {
        const angle = 180;
        const opts = this.shuffle(["180°", "90°", "360°", "45°"]);
        return {
          chapterId: '5G2',
          tier: 1,
          title: "Angle du demi-tour en symétrie centrale",
          statement: `Une symétrie centrale par rapport à un point $O$ correspond à une rotation autour de $O$ d'un angle de :`,
          type: "mcq",
          options: opts,
          answer: "180°",
          correctIndex: opts.indexOf("180°"),
          hint1: "Un demi-tour complet correspond à la moitié d'un tour (360°).",
          solution: "La symétrie centrale est un demi-tour, c'est-à-dire une rotation de **180°**."
        };
      } else {
        const L = this.randInt(5, 12);
        return {
          chapterId: '5G2',
          tier: 1,
          title: "Longueur du segment image",
          statement: `Le segment $[A'B']$ est le symétrique du segment $[AB]$ par rapport à un point $O$. Sachant que $AB = ${L}\\text{ cm}$, quelle est la longueur de $[A'B']$ en cm ?`,
          type: "exact",
          answer: String(L),
          placeholder: `Ex: ${L}`,
          hint1: "La symétrie centrale conserve les longueurs des segments.",
          solution: `Comme la symétrie centrale conserve les longueurs, on a $A'B' = AB = ${L}\\text{ cm}$.`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Conservation des longueurs, périmètre, distances)
      const subType = this.randChoice(['segment_len', 'triangle_perim', 'center_dist']);

      if (subType === 'segment_len') {
        const L = this.randInt(4, 12);
        return {
          chapterId: '5G2',
          tier: 2,
          title: "Conservation de la longueur d'un segment (5ème)",
          statement: `Un segment $[AB]$ mesure $${L}\\text{ cm}$.\n**Quelle est la longueur de son image $[A'B']$ par une symétrie centrale ?**`,
          type: "exact",
          answer: String(L),
          placeholder: `Ex: ${L}`,
          hint1: "La symétrie centrale est un demi-tour qui conserve les distances.",
          solution: `La symétrie centrale conserve les longueurs, donc $A'B' = AB = ${L}\\text{ cm}$.`
        };
      } else if (subType === 'triangle_perim') {
        const a = this.randInt(3, 7);
        const b = this.randInt(4, 8);
        const c = this.randInt(5, 9);
        const perim = a + b + c;
        return {
          chapterId: '5G2',
          tier: 2,
          title: "Conservation du périmètre par symétrie centrale",
          statement: `Un triangle $ABC$ a pour côtés $AB = ${a}\\text{ cm}$, $BC = ${b}\\text{ cm}$ et $AC = ${c}\\text{ cm}$.\n**Quel est le périmètre en cm de son triangle symétrique $A'B'C'$ ?**`,
          type: "exact",
          answer: String(perim),
          placeholder: `Ex: ${perim}`,
          hint1: `Calcule le périmètre du triangle $ABC$ : $${a} + ${b} + ${c}$. La symétrie centrale conserve les périmètres.`,
          solution: `$$\\mathcal{P} = ${a} + ${b} + ${c} = ${perim}\\text{ cm}$$\nLa symétrie centrale conservant les distances, le périmètre reste de **${perim} cm**.`
        };
      } else {
        const d = this.randInt(3, 9);
        return {
          chapterId: '5G2',
          tier: 2,
          title: "Distance entre le point et son image",
          statement: `Le point $A'$ est le symétrique de $A$ par rapport à $O$. On sait que la distance $OA = ${d}\\text{ cm}$.\n**Quelle est la longueur totale du segment $[AA']$ en cm ?**`,
          type: "exact",
          answer: String(d * 2),
          placeholder: `Ex: ${d * 2}`,
          hint1: `$O$ est le milieu de $[AA']$, donc $AA' = 2 \\times OA$.`,
          solution: `$$AA' = 2 \\times OA = 2 \\times ${d} = ${d * 2}\\text{ cm}$$`
        };
      }
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Conservation des angles, parallélisme)
      const subType = this.randChoice(['angle_conserv', 'parallel_property']);

      if (subType === 'angle_conserv') {
        const deg = this.randInt(25, 75);
        return {
          chapterId: '5G2',
          tier: 3,
          title: "Conservation des angles (5ème)",
          statement: `Un angle $\\widehat{ABC}$ mesure $${deg}^\\circ$. Par une symétrie centrale, quelle est la mesure de son angle image en degrés ?`,
          type: "exact",
          answer: String(deg),
          placeholder: `Ex: ${deg}`,
          hint1: "La symétrie centrale conserve les mesures d'angles.",
          solution: `La symétrie centrale conserve les angles, donc l'angle image mesure également $${deg}^\\circ$.`
        };
      } else {
        const opts = this.shuffle(["Parallèles", "Perpendiculaires", "Sécantes non perpendiculaires", "Confondues obligatoirement"]);
        return {
          chapterId: '5G2',
          tier: 3,
          title: "Position relative d'une droite et de son image",
          statement: `Soit $(d)$ une droite ne passant pas par le centre de symétrie $O$, et $(d')$ son image par la symétrie centrale de centre $O$.\n**Comment sont les droites $(d)$ et $(d')$ entre elles ?**`,
          type: "mcq",
          options: opts,
          answer: "Parallèles",
          correctIndex: opts.indexOf("Parallèles"),
          hint1: "Par symétrie centrale, l'image d'une droite est une droite qui lui est parallèle.",
          solution: "L'image d'une droite par une symétrie centrale est toujours une droite qui lui est **parallèle**."
        };
      }
    } else {
      const aire = this.randInt(15, 45);
      return {
        chapterId: '5G2',
        tier: 4,
        title: "Défi : Conservation de l'aire (5ème)",
        statement: `Un polygone a une aire de $${aire}\\text{ cm}^2$. Quelle est l'aire de son symétrique par rapport à un point $O$ en $\\text{cm}^2$ ?`,
        type: "exact",
        answer: String(aire),
        placeholder: `Ex: ${aire}`,
        hint1: "La symétrie centrale conserve les aires (les figures sont superposables).",
        solution: `La symétrie centrale conserve les aires : l'aire de la figure image est de $${aire}\\text{ cm}^2$.`
      };
    }
  },

  // --- 5G5 : Parallélogrammes et quadrilatères (5ème) ---
  generate5G5(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Côtés opposés, périmètre, angles opposés ou consécutifs)
      const subType = this.randChoice(['opp_side', 'perimeter', 'opp_angle', 'consec_angle']);

      if (subType === 'opp_side') {
        const L = this.randInt(5, 12);
        return {
          chapterId: '5G5',
          tier: 1,
          title: "Côtés opposés d'un parallélogramme",
          statement: `Dans un parallélogramme $ABCD$, on donne $AB = ${L}\\text{ cm}$.\n**Quelle est la longueur du côté opposé $CD$ en cm ?**`,
          type: "exact",
          answer: String(L),
          placeholder: `Ex: ${L}`,
          hint1: "Dans un parallélogramme, les côtés opposés ont la même longueur.",
          solution: `Les côtés opposés d'un parallélogramme sont de même longueur : $CD = AB = ${L}\\text{ cm}$.`
        };
      } else if (subType === 'perimeter') {
        const a = this.randInt(4, 9);
        const b = this.randInt(2, 5);
        const perim = 2 * (a + b);
        return {
          chapterId: '5G5',
          tier: 1,
          title: "Périmètre d'un parallélogramme",
          statement: `Dans un parallélogramme $EFGH$, les côtés mesurent $EF = ${a}\\text{ cm}$ et $FG = ${b}\\text{ cm}$.\n**Quel est le périmètre du parallélogramme en cm ?**`,
          type: "exact",
          answer: String(perim),
          placeholder: `Ex: ${perim}`,
          hint1: "Formule : $\\mathcal{P} = 2 \\times (\\text{longueur} + \\text{largeur})$.",
          solution: `$$\\mathcal{P} = 2 \\times (${a} + ${b}) = 2 \\times ${a + b} = ${perim}\\text{ cm}$$`
        };
      } else if (subType === 'opp_angle') {
        const angleA = this.randChoice([45, 55, 65, 75, 105, 115, 125]);
        return {
          chapterId: '5G5',
          tier: 1,
          title: "Angles opposés d'un parallélogramme",
          statement: `Dans un parallélogramme $ABCD$, l'angle $\\widehat{A}$ mesure $${angleA}^\\circ$.\n**Quelle est la mesure de l'angle opposé $\\widehat{C}$ en degrés ?**`,
          type: "exact",
          answer: String(angleA),
          placeholder: `Ex: ${angleA}`,
          hint1: "Dans un parallélogramme, les angles opposés ont la même mesure.",
          solution: `Les angles opposés sont égaux : $\\widehat{C} = \\widehat{A} = ${angleA}^\\circ$.`
        };
      } else {
        const angleA = this.randChoice([40, 50, 60, 70, 80, 110, 120]);
        const angleB = 180 - angleA;
        return {
          chapterId: '5G5',
          tier: 1,
          title: "Angles consécutifs d'un parallélogramme",
          statement: `Dans un parallélogramme $ABCD$, l'angle $\\widehat{A}$ mesure $${angleA}^\\circ$.\n**Quelle est la mesure de l'angle consécutif $\\widehat{B}$ en degrés ?**`,
          type: "exact",
          answer: String(angleB),
          placeholder: `Ex: ${angleB}`,
          hint1: "Dans un parallélogramme, deux angles consécutifs sont supplémentaires ($180^\\circ$).",
          solution: `$$\\widehat{B} = 180^\\circ - ${angleA}^\\circ = ${angleB}^\\circ$$`
        };
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Aire, retrouver hauteur, retrouver base)
      const subType = this.randChoice(['area_direct', 'height_from_area', 'base_from_area']);
      const b = this.randInt(5, 11);
      const h = this.randInt(3, 8);
      const aire = b * h;

      if (subType === 'area_direct') {
        return {
          chapterId: '5G5',
          tier: 2,
          title: "Aire d'un parallélogramme",
          statement: `Un parallélogramme a pour base $b = ${b}\\text{ cm}$ et pour hauteur correspondante $h = ${h}\\text{ cm}$.\n**Calculer son aire en $\\text{cm}^2$ :**`,
          type: "exact",
          answer: String(aire),
          placeholder: `Ex: ${aire}`,
          hint1: "Formule : $\\text{Aire} = \\text{base} \\times \\text{hauteur}$.",
          solution: `$$\\text{Aire} = b \\times h = ${b} \\times ${h} = ${aire}\\text{ cm}^2$$`
        };
      } else if (subType === 'height_from_area') {
        return {
          chapterId: '5G5',
          tier: 2,
          title: "Hauteur d'un parallélogramme connaissant son aire",
          statement: `Un parallélogramme a une aire de $${aire}\\text{ cm}^2$ et une base $b = ${b}\\text{ cm}$.\n**Quelle est sa hauteur relative $h$ en cm ?**`,
          type: "exact",
          answer: String(h),
          placeholder: `Ex: ${h}`,
          hint1: "Formule inverse : $h = \\frac{\\text{Aire}}{\\text{base}}$.",
          solution: `$$h = \\frac{${aire}}{${b}} = ${h}\\text{ cm}$$`
        };
      } else {
        return {
          chapterId: '5G5',
          tier: 2,
          title: "Base d'un parallélogramme connaissant son aire",
          statement: `Un parallélogramme a une aire de $${aire}\\text{ cm}^2$ et une hauteur $h = ${h}\\text{ cm}$.\n**Quelle est la longueur de sa base $b$ en cm ?**`,
          type: "exact",
          answer: String(b),
          placeholder: `Ex: ${b}`,
          hint1: "Formule inverse : $b = \\frac{\\text{Aire}}{\\text{hauteur}}$.",
          solution: `$$b = \\frac{${aire}}{${h}} = ${b}\\text{ cm}$$`
        };
      }
    } else if (t === 3) {
      const questions = [
        {
          statement: "Un parallélogramme dont les diagonales sont perpendiculaires est un...",
          answer: "Losange",
          hint: "Des diagonales perpendiculaires dans un parallélogramme caractérisent le losange.",
          solution: "Si les diagonales d'un parallélogramme sont perpendiculaires, alors c'est un losange."
        },
        {
          statement: "Un parallélogramme dont les diagonales ont la même longueur est un...",
          answer: "Rectangle",
          hint: "Des diagonales de même longueur dans un parallélogramme caractérisent le rectangle.",
          solution: "Si les diagonales d'un parallélogramme ont la même longueur, alors c'est un rectangle."
        },
        {
          statement: "Un parallélogramme ayant deux côtés consécutifs de même longueur est un...",
          answer: "Losange",
          hint: "Deux côtés consécutifs égaux dans un parallélogramme caractérisent le losange.",
          solution: "Un parallélogramme avec deux côtés consécutifs de même longueur a ses 4 côtés égaux : c'est un losange."
        },
        {
          statement: "Un parallélogramme possédant un angle droit est un...",
          answer: "Rectangle",
          hint: "Un seul angle droit suffit pour qu'un parallélogramme soit un rectangle.",
          solution: "Un parallélogramme ayant un angle droit a ses 4 angles droits : c'est un rectangle."
        }
      ];
      const q = this.randChoice(questions);
      const allChoices = ["Losange", "Rectangle", "Trapèze", "Carré obligatoire"];
      const opts = this.shuffle(allChoices);
      return {
        chapterId: '5G5',
        tier: 3,
        title: "Caractérisation des quadrilatères particuliers (5ème)",
        statement: q.statement,
        type: "mcq",
        options: opts,
        answer: q.answer,
        correctIndex: opts.indexOf(q.answer),
        hint1: q.hint,
        solution: q.solution
      };
    } else {
      const d = this.randInt(8, 16) * 2;
      return {
        chapterId: '5G5',
        tier: 4,
        title: "Défi : Diagonales d'un rectangle (5ème)",
        statement: `Dans un rectangle $ABCD$ de centre $O$, la diagonale $[AC]$ mesure $${d}\\text{ cm}$.\n**Quelle est la longueur $OB$ en cm ?**`,
        type: "exact",
        answer: String(d / 2),
        placeholder: `Ex: ${d / 2}`,
        hint1: "Les diagonales d'un rectangle ont la même longueur et se coupent en leur milieu.",
        solution: `$$OB = \\frac{BD}{2} = \\frac{AC}{2} = \\frac{${d}}{2} = ${d / 2}\\text{ cm}$$`
      };
    }
  },

  // --- 5D2 : Probabilités (5ème) ---
  generate5D2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const vtype = this.randChoice(['face_unique', 'face_even', 'face_multiple3', 'face_at_least_5', 'card_color']);
      if (vtype === 'face_unique') {
        const face = this.randInt(1, 6);
        const wrongChoice = `${face}/6` === "1/6" ? "2/6" : `${face}/6`;
        const opts = this.shuffle(["1/6", "1/3", "1/2", wrongChoice]);
        return {
          chapterId: '5D2',
          tier: 1,
          title: "Tirage d'un dé à 6 faces (5ème)",
          statement: `On lance un dé équilibré à 6 faces numérotées de 1 à 6.\n**Quelle est la probabilité d'obtenir la face ${face} ?**`,
          type: "mcq",
          options: opts,
          answer: "1/6",
          correctIndex: opts.indexOf("1/6"),
          hint1: `Il y a 1 seule face avec le nombre ${face} sur un total de 6 faces équiprobables.`,
          solution: `Il y a 1 issue favorable sur 6 issues possibles :\n$$P(${face}) = \\frac{1}{6}$$`
        };
      } else if (vtype === 'face_even') {
        const opts = this.shuffle(["1/2", "1/3", "1/6", "2/3"]);
        return {
          chapterId: '5D2',
          tier: 1,
          title: "Obtenir un nombre pair (5ème)",
          statement: `On lance un dé équilibré à 6 faces numérotées de 1 à 6.\n**Quelle est la probabilité d'obtenir un nombre pair ?**`,
          type: "mcq",
          options: opts,
          answer: "1/2",
          correctIndex: opts.indexOf("1/2"),
          hint1: "Les faces paires sont {2, 4, 6}, soit 3 faces sur 6.",
          solution: `Les issues favorables sont 2, 4 et 6 (3 issues sur 6) :\n$$P(\\text{pair}) = \\frac{3}{6} = \\frac{1}{2}$$`
        };
      } else if (vtype === 'face_multiple3') {
        const opts = this.shuffle(["1/3", "1/2", "1/6", "2/5"]);
        return {
          chapterId: '5D2',
          tier: 1,
          title: "Obtenir un multiple de 3 (5ème)",
          statement: `On lance un dé équilibré à 6 faces numérotées de 1 à 6.\n**Quelle est la probabilité d'obtenir un multiple de 3 ?**`,
          type: "mcq",
          options: opts,
          answer: "1/3",
          correctIndex: opts.indexOf("1/3"),
          hint1: "Les multiples de 3 entre 1 et 6 sont 3 et 6 (2 faces sur 6).",
          solution: `Les multiples de 3 sont 3 et 6 (soit 2 issues sur 6) :\n$$P = \\frac{2}{6} = \\frac{1}{3}$$`
        };
      } else if (vtype === 'face_at_least_5') {
        const opts = this.shuffle(["1/3", "1/6", "1/2", "2/3"]);
        return {
          chapterId: '5D2',
          tier: 1,
          title: "Nombre supérieur ou égal à 5 (5ème)",
          statement: `On lance un dé équilibré à 6 faces numérotées de 1 à 6.\n**Quelle est la probabilité d'obtenir un résultat supérieur ou égal à 5 ?**`,
          type: "mcq",
          options: opts,
          answer: "1/3",
          correctIndex: opts.indexOf("1/3"),
          hint1: "Les résultats possibles supérieurs ou égaux à 5 sont 5 et 6.",
          solution: `Les issues favorables sont 5 et 6 (2 issues sur 6) :\n$$P = \\frac{2}{6} = \\frac{1}{3}$$`
        };
      } else {
        const opts = this.shuffle(["1/2", "1/4", "1/8", "1/16"]);
        return {
          chapterId: '5D2',
          tier: 1,
          title: "Tirage d'une carte rouge (5ème)",
          statement: `Dans un jeu classique de 32 cartes bien mélangé, on tire une carte au hasard.\n**Quelle est la probabilité d'obtenir une carte rouge (Cœur ou Carreau) ?**`,
          type: "mcq",
          options: opts,
          answer: "1/2",
          correctIndex: opts.indexOf("1/2"),
          hint1: "Un jeu de 32 cartes compte 16 cartes rouges et 16 cartes noires.",
          solution: `Il y a 16 cartes rouges sur un total de 32 cartes :\n$$P = \\frac{16}{32} = \\frac{1}{2}$$`
        };
      }
    } else if (t === 2) {
      const vtype = this.randChoice(['pct_urn_10', 'pct_urn_20', 'fraction_spinner', 'tokens_primes']);
      if (vtype === 'pct_urn_10') {
        const r = this.randInt(2, 8);
        const v = 10 - r;
        const pct = r * 10;
        return {
          chapterId: '5D2',
          tier: 2,
          title: "Probabilité en pourcentage dans une urne (5ème)",
          statement: `Une boîte contient $${r}$ boules rouges et $${v}$ boules vertes (soit 10 boules au total).\n**Quelle est la probabilité en pourcentage de tirer une boule rouge ?** *(Indiquer uniquement le nombre)*`,
          type: "exact",
          answer: String(pct),
          placeholder: `Ex: ${pct}`,
          hint1: `Fraction : $\\frac{${r}}{10}$. Multiplie par 10 pour l'écrire sur 100.`,
          solution: `$$P(\\text{Rouge}) = \\frac{${r}}{10} = \\frac{${pct}}{100} = ${pct}\\%$$`
        };
      } else if (vtype === 'pct_urn_20') {
        const b = this.randInt(3, 15);
        const j = 20 - b;
        const pct = b * 5;
        return {
          chapterId: '5D2',
          tier: 2,
          title: "Probabilité en pourcentage sur 20 boules (5ème)",
          statement: `Un sac contient $${b}$ jetons bleus et $${j}$ jetons jaunes (soit $20$ jetons au total).\n**Quelle est la probabilité en pourcentage de tirer un jeton bleu ?** *(Indiquer uniquement le nombre)*`,
          type: "exact",
          answer: String(pct),
          placeholder: `Ex: ${pct}`,
          hint1: `Fraction : $\\frac{${b}}{20}$. Pour passer sur 100, multiplie le numérateur et le dénominateur par 5.`,
          solution: `$$P(\\text{Bleu}) = \\frac{${b}}{20} = \\frac{${b} \\times 5}{100} = \\frac{${pct}}{100} = ${pct}\\%$$`
        };
      } else if (vtype === 'fraction_spinner') {
        const totalSect = 8;
        const win = this.randChoice([2, 4, 6]);
        const [sN, sD] = this.simplifyFraction(win, totalSect);
        const ans = sD === 1 ? String(sN) : `${sN}/${sD}`;
        return {
          chapterId: '5D2',
          tier: 2,
          title: "Roue de loterie à 8 secteurs (5ème)",
          statement: `Une roue de loterie est partagée en $8$ secteurs identiques, dont $${win}$ secteurs gagnants.\n**Quelle est la probabilité de tomber sur un secteur gagnant ?**\n*(Donner le résultat sous forme d'une fraction irréductible)*`,
          type: "exact",
          answer: ans,
          placeholder: `Ex: ${ans}`,
          hint1: `Il y a $${win}$ secteurs favorables sur $8$. Simplifie la fraction $\\frac{${win}}{8}$.`,
          solution: `$$P = \\frac{${win}}{8} = ${ans}$$`
        };
      } else {
        const primes = [2, 3, 5];
        return {
          chapterId: '5D2',
          tier: 2,
          title: "Tirage d'un nombre premier de 1 à 5 (5ème)",
          statement: `Une urne contient 5 jetons numérotés de 1 à 5.\n**Quelle est la probabilité de tirer un jeton portant un nombre premier ?**\n*(Donner la fraction irréductible)*`,
          type: "exact",
          answer: "3/5",
          placeholder: "Ex: 3/5",
          hint1: "Parmi 1, 2, 3, 4, 5, les nombres premiers sont 2, 3 et 5 (1 n'est pas premier).",
          solution: `Les nombres premiers sont 2, 3 et 5 (3 jetons sur 5) :\n$$P = \\frac{3}{5}$$`
        };
      }
    } else if (t === 3) {
      const vtype = this.randChoice(['certain_impossible', 'contrary_decimal', 'contrary_percent']);
      if (vtype === 'certain_impossible') {
        const isCertain = Math.random() > 0.5;
        const qText = isCertain
          ? "Quelle est la probabilité d'un événement certain ?"
          : "Quelle est la probabilité d'un événement impossible ?";
        const ans = isCertain ? "1" : "0";
        return {
          chapterId: '5D2',
          tier: 3,
          title: isCertain ? "Événement certain (5ème)" : "Événement impossible (5ème)",
          statement: qText,
          type: "exact",
          answer: ans,
          placeholder: `Ex: ${ans}`,
          hint1: isCertain ? "Un événement certain se produit à coup sûr (100% ou 1)." : "Un événement impossible ne peut jamais se produire (0).",
          solution: isCertain
            ? "La probabilité d'un événement certain est égale à 1."
            : "La probabilité d'un événement impossible est égale à 0."
        };
      } else if (vtype === 'contrary_decimal') {
        const p = this.randChoice([0.2, 0.3, 0.4, 0.25, 0.65, 0.7]);
        const ans = (1 - p).toFixed(2).replace(/\.?0+$/, "");
        return {
          chapterId: '5D2',
          tier: 3,
          title: "Événement contraire (5ème)",
          statement: `La probabilité qu'il pleuve demain est estimée à $P = ${p}$.\n**Quelle est la probabilité qu'il ne pleuve pas ?** *(forme décimale)*`,
          type: "exact",
          answer: ans,
          placeholder: `Ex: ${ans}`,
          hint1: "La somme des probabilités d'un événement et de son contraire vaut 1 : $P(\\text{non E}) = 1 - P(E)$.",
          solution: `$$P(\\text{non pluie}) = 1 - ${p} = ${ans}$$`
        };
      } else {
        const pPct = this.randChoice([15, 25, 30, 45, 60, 75, 80]);
        const ans = String(100 - pPct);
        return {
          chapterId: '5D2',
          tier: 3,
          title: "Événement contraire en pourcentage (5ème)",
          statement: `Lors d'une tombola, la probabilité de gagner un lot est de $${pPct}\\%$.\n**Quelle est la probabilité en pourcentage de ne rien gagner (billet perdant) ?** *(Indiquer uniquement le nombre)*`,
          type: "exact",
          answer: ans,
          placeholder: `Ex: ${ans}`,
          hint1: `Le total des pourcentages fait 100%. Calcule $100 - ${pPct}$.`,
          solution: `$$P(\\text{perdant}) = 100\\% - ${pPct}\\% = ${ans}\\%$$`
        };
      }
    } else {
      const vtype = this.randChoice(['faces_gt', 'faces_div']);
      if (vtype === 'faces_gt') {
        const facesCount = this.randChoice([8, 10, 12]);
        const seuil = this.randInt(2, facesCount - 3);
        const nbIssues = facesCount - seuil;
        const [sN, sD] = this.simplifyFraction(nbIssues, facesCount);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: '5D2',
          tier: 4,
          title: `Défi : Dé à ${facesCount} faces (5ème)`,
          statement: `On lance un dé équilibré à $${facesCount}$ faces numérotées de $1$ à $${facesCount}$.\n**Quelle est la probabilité d'obtenir un nombre strictement supérieur à $${seuil}$ ?**\n*(Donner le résultat sous forme d'une fraction irréductible)*`,
          type: "exact",
          answer: ansStr,
          placeholder: `Ex: ${ansStr}`,
          hint1: `Les issues favorables vont de ${seuil + 1} à ${facesCount}, soit $${facesCount} - ${seuil} = ${nbIssues}$ issues sur $${facesCount}$.`,
          solution: `Il y a $${nbIssues}$ issues favorables sur $${facesCount}$ issues possibles :\n$$P = \\frac{${nbIssues}}{${facesCount}} = ${ansStr}$$`
        };
      } else {
        const facesCount = 12;
        const div = this.randChoice([3, 4]);
        const count = facesCount / div; // 4 ou 3
        const [sN, sD] = this.simplifyFraction(count, facesCount);
        const ansStr = `${sN}/${sD}`;
        return {
          chapterId: '5D2',
          tier: 4,
          title: `Défi : Multiple sur un dodécaèdre (5ème)`,
          statement: `On lance un dé à $12$ faces numérotées de 1 à 12.\n**Quelle est la probabilité d'obtenir un multiple de $${div}$ ?**\n*(Donner le résultat sous forme d'une fraction irréductible)*`,
          type: "exact",
          answer: ansStr,
          placeholder: `Ex: ${ansStr}`,
          hint1: `Liste les multiples de ${div} inférieurs ou égaux à 12, puis compte combien il y en a sur 12.`,
          solution: `Les multiples de $${div}$ entre 1 et 12 sont : ${Array.from({length: count}, (_, i) => (i+1)*div).join(', ')} ($${count}$ issues).\n$$P = \\frac{${count}}{12} = ${ansStr}$$`
        };
      }
    }
  },

  // --- 5P2 : Dépendance entre grandeurs (5ème) ---
  generate5P2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const vtype = this.randChoice(['dist_vt', 'speed_dt', 'time_dv', 'fuel_calc']);
      if (vtype === 'dist_vt') {
        const v = this.randChoice([30, 40, 50, 60, 70, 80, 90, 110]);
        const temps = this.randInt(2, 5);
        const dist = v * temps;
        return {
          chapterId: '5P2',
          tier: 1,
          title: "Calcul de distance (5ème)",
          statement: `Un véhicule roule à la vitesse constante de $v = ${v}\\text{ km/h}$.\n**Quelle distance parcourt-il en $${temps}\\text{ heures}$ en km ?**`,
          type: "exact",
          answer: String(dist),
          placeholder: `Ex: ${dist}`,
          hint1: "Formule fondamentale : $d = v \\times t$.",
          solution: `$$d = ${v} \\times ${temps} = ${dist}\\text{ km}$$`
        };
      } else if (vtype === 'speed_dt') {
        const speed = this.randChoice([45, 55, 60, 75, 80, 90]);
        const temps = this.randInt(2, 4);
        const dist = speed * temps;
        return {
          chapterId: '5P2',
          tier: 1,
          title: "Calcul de vitesse moyenne (5ème)",
          statement: `Un motard parcourt une distance de $${dist}\\text{ km}$ en une durée de $${temps}\\text{ heures}$.\n**Quelle est sa vitesse moyenne en km/h ?**`,
          type: "exact",
          answer: String(speed),
          placeholder: `Ex: ${speed}`,
          hint1: "Formule : $v = \\frac{d}{t}$.",
          solution: `$$v = \\frac{${dist}}{${temps}} = ${speed}\\text{ km/h}$$`
        };
      } else if (vtype === 'time_dv') {
        const v = this.randChoice([40, 50, 60, 80, 100]);
        const temps = this.randInt(2, 5);
        const dist = v * temps;
        return {
          chapterId: '5P2',
          tier: 1,
          title: "Calcul de durée de trajet (5ème)",
          statement: `Un camion roule à une vitesse moyenne de $${v}\\text{ km/h}$ pour effectuer un trajet de $${dist}\\text{ km}$.\n**Combien d'heures dure ce trajet ?**`,
          type: "exact",
          answer: String(temps),
          placeholder: `Ex: ${temps}`,
          hint1: "Formule : $t = \\frac{d}{v}$.",
          solution: `$$t = \\frac{${dist}}{${v}} = ${temps}\\text{ h}$$`
        };
      } else {
        const conso = this.randChoice([5, 6, 7, 8]);
        const k = this.randChoice([2, 3, 4, 5]);
        const dist = k * 100;
        const ans = conso * k;
        return {
          chapterId: '5P2',
          tier: 1,
          title: "Consommation proportionnelle de carburant (5ème)",
          statement: `Une voiture consomme en moyenne $${conso}\\text{ litres}$ d'essence pour $100\\text{ km}$.\n**Combien de litres consommera-t-elle pour parcourir $${dist}\\text{ km}$ ?**`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `$${dist}\\text{ km}$ correspond à $${k} \\times 100\\text{ km}$. Multiplie la consommation par $${k}$.`,
          solution: `$$\\text{Consommation} = ${conso} \\times \\frac{${dist}}{100} = ${conso} \\times ${k} = ${ans}\\text{ litres}$$`
        };
      }
    } else if (t === 2) {
      const vtype = this.randChoice(['perim_rect', 'area_rect', 'perim_square', 'tank_flow']);
      if (vtype === 'perim_rect') {
        const larg = this.randInt(3, 9);
        const correct = `2x + ${larg * 2}`;
        const opts = this.shuffle([
          correct,
          `${larg}x`,
          `x + ${larg * 2}`,
          `2x + ${larg}`
        ]);
        return {
          chapterId: '5P2',
          tier: 2,
          title: "Périmètre en fonction de la longueur (5ème)",
          statement: `Un rectangle a une largeur fixe de $${larg}\\text{ cm}$ et une longueur variable notée $x$.\n**Quelle est l'expression de son périmètre en fonction de $x$ ?**`,
          type: "mcq",
          options: opts,
          answer: correct,
          correctIndex: opts.indexOf(correct),
          hint1: "$P = 2 \\times (x + \\text{largeur}) = 2x + 2 \\times \\text{largeur}$.",
          solution: `$$P = 2 \\times (x + ${larg}) = 2x + ${larg * 2}$$`
        };
      } else if (vtype === 'area_rect') {
        const larg = this.randInt(3, 9);
        const correct = `${larg}x`;
        const opts = this.shuffle([
          correct,
          `2x + ${larg * 2}`,
          `x + ${larg}`,
          `${larg} + x`
        ]);
        return {
          chapterId: '5P2',
          tier: 2,
          title: "Aire en fonction de la longueur (5ème)",
          statement: `Un rectangle a une largeur fixe de $${larg}\\text{ cm}$ et une longueur variable notée $x$.\n**Quelle est l'expression de son aire en $\\text{cm}^2$ en fonction de $x$ ?**`,
          type: "mcq",
          options: opts,
          answer: correct,
          correctIndex: opts.indexOf(correct),
          hint1: "L'aire d'un rectangle se calcule par : $\\text{Longueur} \\times \\text{largeur}$.",
          solution: `$$\\mathcal{A} = x \\times ${larg} = ${larg}x$$`
        };
      } else if (vtype === 'perim_square') {
        const isTri = Math.random() > 0.5;
        const shape = isTri ? "triangle équilatéral" : "carré";
        const nSides = isTri ? 3 : 4;
        const correct = `${nSides}x`;
        const opts = this.shuffle([correct, `x + ${nSides}`, `${nSides * 2}x`, `x^${nSides}`]);
        return {
          chapterId: '5P2',
          tier: 2,
          title: `Périmètre d'un ${shape} (5ème)`,
          statement: `On considère un ${shape} dont chaque côté mesure une longueur variable notée $x$.\n**Quelle est l'expression littérale de son périmètre en fonction de $x$ ?**`,
          type: "mcq",
          options: opts,
          answer: correct,
          correctIndex: opts.indexOf(correct),
          hint1: `Le ${shape} possède ${nSides} côtés de même longueur $x$.`,
          solution: `$$P = ${nSides} \\times x = ${nSides}x$$`
        };
      } else {
        const debit = this.randInt(3, 8);
        const correct = `${debit}t`;
        const opts = this.shuffle([correct, `t + ${debit}`, `${debit * 2}t`, `${debit} / t`]);
        return {
          chapterId: '5P2',
          tier: 2,
          title: "Volume d'eau écoulé en fonction du temps (5ème)",
          statement: `Un robinet remplit un récipient à un débit régulier de $${debit}\\text{ L/min}$.\n**Quelle est la formule donnant le volume d'eau $V$ en litres écoulé au bout de $t\\text{ minutes}$ ?**`,
          type: "mcq",
          options: opts,
          answer: correct,
          correctIndex: opts.indexOf(correct),
          hint1: "Volume = Débit × Temps.",
          solution: `$$V(t) = ${debit} \\times t = ${debit}t\\text{ litres}$$`
        };
      }
    } else if (t === 3) {
      const vtype = this.randChoice(['fixed_daily', 'taxi_fare', 'annual_sub']);
      if (vtype === 'fixed_daily') {
        const fixe = this.randInt(15, 35);
        const taux = this.randInt(8, 20);
        const j = this.randInt(2, 6);
        const total = fixe + taux * j;
        return {
          chapterId: '5P2',
          tier: 3,
          title: "Calcul d'un coût avec forfait fixe (5ème)",
          statement: `Une location de matériel coûte un forfait fixe de $${fixe}\\text{ €}$ plus $${taux}\\text{ €}$ par jour d'utilisation.\n**Quel est le coût total en euros pour $${j}\\text{ jours}$ ?**`,
          type: "exact",
          answer: String(total),
          placeholder: `Ex: ${total}`,
          hint1: `Calcule $${fixe} + ${taux} \\times ${j}$.`,
          solution: `$$\\text{Coût} = ${fixe} + ${taux} \\times ${j} = ${fixe} + ${taux * j} = ${total}\\text{ €}$$`
        };
      } else if (vtype === 'taxi_fare') {
        const priseEnCharge = this.randInt(4, 8);
        const prixKm = 2;
        const km = this.randInt(10, 30);
        const total = priseEnCharge + prixKm * km;
        return {
          chapterId: '5P2',
          tier: 3,
          title: "Course de taxi (5ème)",
          statement: `Un taxi facture une prise en charge forfaitaire de $${priseEnCharge}\\text{ €}$ puis $${prixKm}\\text{ €}$ par kilomètre parcouru.\n**Quel est le montant total de la course pour un trajet de $${km}\\text{ km}$ ?**`,
          type: "exact",
          answer: String(total),
          placeholder: `Ex: ${total}`,
          hint1: `Ajoute la prise en charge au coût kilométrique : $${priseEnCharge} + ${prixKm} \\times ${km}$.`,
          solution: `$$\\text{Total} = ${priseEnCharge} + (${prixKm} \\times ${km}) = ${priseEnCharge} + ${prixKm * km} = ${total}\\text{ €}$$`
        };
      } else {
        const abonnement = this.randChoice([20, 30, 40]);
        const prixSeance = this.randInt(4, 7);
        const nbSeances = this.randInt(5, 12);
        const total = abonnement + prixSeance * nbSeances;
        return {
          chapterId: '5P2',
          tier: 3,
          title: "Abonnement et tarif réduit (5ème)",
          statement: `Une carte d'abonnement au cinéma coûte $${abonnement}\\text{ €}$ par an. Avec cette carte, la place ne coûte que $${prixSeance}\\text{ €}$ par séance.\n**Combien dépense un abonné qui assiste à $${nbSeances}\\text{ séances}$ dans l'année ?**`,
          type: "exact",
          answer: String(total),
          placeholder: `Ex: ${total}`,
          hint1: `Calcule le prix de l'abonnement plus les ${nbSeances} places : $${abonnement} + ${prixSeance} \\times ${nbSeances}$.`,
          solution: `$$\\text{Total} = ${abonnement} + (${prixSeance} \\times ${nbSeances}) = ${abonnement} + ${prixSeance * nbSeances} = ${total}\\text{ €}$$`
        };
      }
    } else {
      const vtype = this.randChoice(['min_30', 'min_15', 'min_45', 'h_1_5']);
      if (vtype === 'min_30') {
        const dist = this.randChoice([30, 45, 55, 65, 75]);
        const v = dist * 2;
        return {
          chapterId: '5P2',
          tier: 4,
          title: "Défi : Vitesse en 30 minutes (5ème)",
          statement: `Un train parcourt $${dist}\\text{ km}$ en 30 minutes.\n**Quelle est sa vitesse moyenne en km/h ?**`,
          type: "exact",
          answer: String(v),
          placeholder: `Ex: ${v}`,
          hint1: "30 minutes correspondent à 0,5 heure (la moitié d'une heure). En 1 heure entière, il parcourt le double.",
          solution: `$$v = \\frac{${dist}}{0{,}5} = ${dist} \\times 2 = ${v}\\text{ km/h}$$`
        };
      } else if (vtype === 'min_15') {
        const dist = this.randChoice([15, 20, 25, 30]);
        const v = dist * 4;
        return {
          chapterId: '5P2',
          tier: 4,
          title: "Défi : Vitesse en 15 minutes (5ème)",
          statement: `Un automobiliste parcourt $${dist}\\text{ km}$ en 15 minutes.\n**Quelle est sa vitesse moyenne en km/h ?**`,
          type: "exact",
          answer: String(v),
          placeholder: `Ex: ${v}`,
          hint1: "15 minutes correspondent à un quart d'heure (0,25 h). En 1 heure (4 quarts d'heure), il parcourt 4 fois plus.",
          solution: `$$v = ${dist} \\times 4 = ${v}\\text{ km/h}\\quad\\left(\\text{ou } \\frac{${dist}}{0{,}25} = ${v}\\right)$$`
        };
      } else if (vtype === 'min_45') {
        const k = this.randChoice([10, 15, 20]);
        const dist = 3 * k; // multiple de 3 pour division par 0.75
        const v = 4 * k;
        return {
          chapterId: '5P2',
          tier: 4,
          title: "Défi : Vitesse en 45 minutes (5ème)",
          statement: `Un cycliste parcourt $${dist}\\text{ km}$ en 45 minutes.\n**Quelle est sa vitesse moyenne en km/h ?**`,
          type: "exact",
          answer: String(v),
          placeholder: `Ex: ${v}`,
          hint1: "45 minutes = 3/4 d'heure = 0,75 heure. $v = d / t$.",
          solution: `$$v = \\frac{${dist}}{0{,}75} = \\frac{${dist} \\times 4}{3} = ${v}\\text{ km/h}$$`
        };
      } else {
        const v = this.randChoice([60, 80, 90, 100]);
        const dist = v * 1.5;
        return {
          chapterId: '5P2',
          tier: 4,
          title: "Défi : Distance en 1 heure 30 minutes (5ème)",
          statement: `Une voiture roule à $${v}\\text{ km/h}$ pendant 1 heure et 30 minutes.\n**Quelle distance a-t-elle parcourue en km ?**`,
          type: "exact",
          answer: String(dist),
          placeholder: `Ex: ${dist}`,
          hint1: "1 heure et 30 minutes = 1,5 heure. Calcule $d = v \\times t = ${v} \\times 1{,}5$.",
          solution: `$$d = ${v} \\times 1{,}5 = ${dist}\\text{ km}$$`
        };
      }
    }
  },

  // --- 5A1 : Algorithmique et Scratch (5ème) ---
  generate5A1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      if (Math.random() < 0.5) {
        // Programme de calcul Scratch 5ème
        const x = this.randInt(2, 9);
        const a = this.randInt(3, 8);
        return {
          chapterId: '5A1',
          tier: 1,
          title: "Programme de calcul Scratch (5ème)",
          statement: `Un lutin exécute le script suivant :\n\`\`\`text\nquand drapeau cliqué\ndemander [Choisir un nombre] et attendre\nmettre [N] à réponse\nmettre [N] à (N + ${a})\ndire (N)\n\`\`\`\n**Si le nombre entré au départ est $${x}$, quel nombre affiche le lutin ?**`,
          type: "exact",
          answer: String(x + a),
          placeholder: `Ex: ${x + a}`,
          hint1: `Le script ajoute $${a}$ au nombre de départ : $${x} + ${a}$.`,
          hint2: `Calcul simple : $${x} + ${a} = ${x + a}$.`,
          solution: `$$N = ${x} + ${a} = ${x + a}$$`
        };
      }
      const polys = [
        { name: "un carré", reps: 4, angle: 90 },
        { name: "un triangle équilatéral", reps: 3, angle: 120 },
        { name: "un hexagone régulier", reps: 6, angle: 60 },
        { name: "un octogone régulier", reps: 8, angle: 45 }
      ];
      const p = this.randChoice(polys);
      const step = this.randChoice([30, 40, 50, 60]);
      return {
        chapterId: '5A1',
        tier: 1,
        title: `Angle pour tracer ${p.name} dans Scratch (5ème)`,
        statement: `Dans Scratch, pour tracer ${p.name} avec le bloc « répéter ${p.reps} fois : avancer de ${step}, tourner de ... degrés », quel est l'angle de rotation en degrés ?`,
        type: "exact",
        answer: String(p.angle),
        placeholder: `Ex: ${p.angle}`,
        hint1: `La somme des angles extérieurs pour un tour complet est de 360°. Divise 360 par le nombre de côtés (${p.reps}).`,
        hint2: `Calcul : $\\frac{360^\\circ}{${p.reps}} = ${p.angle}^\\circ$.`,
        solution: `$$\\text{Angle} = \\frac{360^\\circ}{${p.reps}} = ${p.angle}^\\circ$$`
      };
    } else if (t === 2) {
      if (Math.random() < 0.5) {
        // Programme de calcul à 2 opérations Scratch 5ème
        const x = this.randInt(2, 8);
        const a = this.randInt(2, 5);
        const b = this.randInt(2, 9);
        return {
          chapterId: '5A1',
          tier: 2,
          title: "Programme de calcul à 2 étapes Scratch (5ème)",
          statement: `Un lutin exécute le script suivant :\n\`\`\`text\nquand drapeau cliqué\ndemander [Choisir un nombre] et attendre\nmettre [N] à réponse\nmettre [N] à (N * ${a})\nmettre [N] à (N + ${b})\ndire (N)\n\`\`\`\n**Si l'on choisit le nombre $${x}$ au départ, quel est le résultat final affiché ?**`,
          type: "exact",
          answer: String(x * a + b),
          placeholder: `Ex: ${x * a + b}`,
          hint1: `Effectue d'abord la multiplication par $${a}$, puis ajoute $${b}$.`,
          hint2: `Étape 1 : $${x} \\times ${a} = ${x * a}$. Étape 2 : $${x * a} + ${b} = ${x * a + b}$.`,
          solution: `$$(${x} \\times ${a}) + ${b} = ${x * a} + ${b} = ${x * a + b}$$`
        };
      }
      const reps = this.randInt(4, 8);
      const pas = this.randChoice([10, 15, 20, 25]);
      const total = reps * pas;
      return {
        chapterId: '5A1',
        tier: 2,
        title: "Distance totale dans une boucle Scratch (5ème)",
        statement: `Un lutin exécute le script : « répéter ${reps} fois : avancer de ${pas} pas ».\n**Quelle distance totale en pas a-t-il parcourue ?**`,
        type: "exact",
        answer: String(total),
        placeholder: `Ex: ${total}`,
        hint1: `Multiplie le nombre de répétitions par le nombre de pas : $${reps} \\times ${pas}$.`,
        hint2: `Calcul : $${reps} \\times ${pas} = ${total}$.`,
        solution: `$$${reps} \\times ${pas} = ${total}\\text{ pas}$$`
      };
    } else if (t === 3) {
      if (Math.random() < 0.5) {
        // Retrouver le nombre de départ Scratch 5ème
        const start = this.randInt(2, 9);
        const a = this.randInt(2, 4);
        const b = this.randInt(3, 10);
        const finalVal = start * a + b;
        return {
          chapterId: '5A1',
          tier: 3,
          title: "Retrouver le nombre de départ dans Scratch (5ème)",
          statement: `Un lutin exécute le script :\n\`\`\`text\nquand drapeau cliqué\ndemander [Choisir un nombre] et attendre\nmettre [N] à réponse\nmettre [N] à (N * ${a})\nmettre [N] à (N + ${b})\ndire (N)\n\`\`\`\nÀ la fin, **le lutin annonce $${finalVal}$**.\n**Quel nombre de départ avait été choisi ?**`,
          type: "exact",
          answer: String(start),
          placeholder: `Ex: ${start}`,
          hint1: `Remonte les opérations à l'envers : commence par soustraire $${b}$ à $${finalVal}$, puis divise par $${a}$.`,
          hint2: `$(${finalVal} - ${b}) \\div ${a} = ${finalVal - b} \\div ${a} = ${start}$.`,
          solution: `À l'envers : on soustrait $${b}$ ($${finalVal} - ${b} = ${finalVal - b}$), puis on divise par $${a}$ ($${finalVal - b} \\div ${a} = ${start}$).`
        };
      }
      const polys = [
        { name: "pentagone régulier (5 côtés)", n: 5, angle: 72 },
        { name: "décagone régulier (10 côtés)", n: 10, angle: 36 },
        { name: "octogone régulier (8 côtés)", n: 8, angle: 45 },
        { name: "hexagone régulier (6 côtés)", n: 6, angle: 60 }
      ];
      const p = this.randChoice(polys);
      return {
        chapterId: '5A1',
        tier: 3,
        title: `Angle de rotation pour un ${p.name} (5ème)`,
        statement: `Pour faire tracer un ${p.name} dans Scratch avec une boucle répéter ${p.n} fois, de quel angle extérieur en degrés doit-on tourner à chaque étape ?`,
        type: "exact",
        answer: String(p.angle),
        placeholder: `Ex: ${p.angle}`,
        hint1: `Tour complet : 360° divisé par ${p.n} côtés.`,
        hint2: `Calcul : $\\frac{360^\\circ}{${p.n}} = ${p.angle}^\\circ$.`,
        solution: `$$\\text{Angle} = \\frac{360^\\circ}{${p.n}} = ${p.angle}^\\circ$$`
      };
    } else {
      if (Math.random() < 0.5) {
        // Défi Scratch avec carré
        const x = this.randInt(2, 6);
        const add = this.randInt(1, 9);
        const res = x * x + add;
        return {
          chapterId: '5A1',
          tier: 4,
          title: "Défi Scratch : Programme avec le carré (5ème)",
          statement: `Soit le script Scratch :\n\`\`\`text\nmettre [R] à (réponse * réponse)\nmettre [R] à (R + ${add})\ndire (R)\n\`\`\`\n**Si le nombre de départ est $${x}$, quel résultat affiche le lutin ?**`,
          type: "exact",
          answer: String(res),
          placeholder: `Ex: ${res}`,
          hint1: `Calcule le carré du nombre de départ ($${x} \\times ${x}$), puis ajoute $${add}$.`,
          hint2: `$${x}^2 + ${add} = ${x * x} + ${add} = ${res}$.`,
          solution: `$$R = ${x}^2 + ${add} = ${x * x} + ${add} = ${res}$$`
        };
      }
      const allPolys = [
        { name: "Un hexagone régulier (6 côtés)", reps: 6, angle: 60 },
        { name: "Un octogone régulier (8 côtés)", reps: 8, angle: 45 },
        { name: "Un pentagone régulier (5 côtés)", reps: 5, angle: 72 },
        { name: "Un carré (4 côtés)", reps: 4, angle: 90 },
        { name: "Un triangle équilatéral (3 côtés)", reps: 3, angle: 120 }
      ];
      const p = this.randChoice(allPolys);
      const step = this.randChoice([30, 40, 50, 70]);
      const otherNames = allPolys.filter(x => x.name !== p.name).map(x => x.name);
      const shuffledOthers = this.shuffle(otherNames).slice(0, 3);
      const opts = this.shuffle([p.name, ...shuffledOthers]);
      return {
        chapterId: '5A1',
        tier: 4,
        title: "Défi : Reconnaissance de figure Scratch (5ème)",
        statement: `Quel polygone régulier le lutin trace-t-il avec ce script : « répéter ${p.reps} fois : avancer de ${step}, tourner de ${p.angle} degrés » ?`,
        type: "mcq",
        options: opts,
        answer: p.name,
        correctIndex: opts.indexOf(p.name),
        hint1: `La boucle comporte ${p.reps} répétitions et tourne de ${p.angle}° (${p.reps} × ${p.angle}° = 360°).`,
        hint2: `La figure fermée à ${p.reps} côtés réguliers est bien ${p.name}.`,
        solution: `${p.reps} répétitions d'angle ${p.angle}° correspondent à ${p.name}.`
      };
    }
  },

  // --- 4G2 : Triangle rectangle et cercle circonscrit (4ème) ---
  generate4G2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const vtype = this.randChoice(['hyp_to_radius', 'radius_to_hyp', 'circumcenter_hyp']);
      if (vtype === 'hyp_to_radius') {
        const hyp = this.randInt(5, 15) * 2;
        return {
          chapterId: '4G2',
          tier: 1,
          title: "Rayon du cercle circonscrit (4ème)",
          statement: `Un triangle rectangle a une hypoténuse de longueur $${hyp}\\text{ cm}$.\n**Quel est le rayon de son cercle circonscrit en cm ?**`,
          type: "exact",
          answer: String(hyp / 2),
          placeholder: `Ex: ${hyp / 2}`,
          hint1: "Dans un triangle rectangle, l'hypoténuse est un diamètre du cercle circonscrit. Le rayon vaut la moitié de l'hypoténuse.",
          solution: `$$R = \\frac{\\text{Hypoténuse}}{2} = \\frac{${hyp}}{2} = ${hyp / 2}\\text{ cm}$$`
        };
      } else if (vtype === 'radius_to_hyp') {
        const r = this.randChoice([3, 4, 5, 6, 7, 8, 9, 10]);
        const hyp = r * 2;
        return {
          chapterId: '4G2',
          tier: 1,
          title: "Longueur de l'hypoténuse via le cercle circonscrit (4ème)",
          statement: `Le cercle circonscrit à un triangle rectangle a un rayon $R = ${r}\\text{ cm}$.\n**Quelle est la longueur de l'hypoténuse de ce triangle en cm ?**`,
          type: "exact",
          answer: String(hyp),
          placeholder: `Ex: ${hyp}`,
          hint1: "L'hypoténuse est le diamètre du cercle circonscrit ($D = 2 \\times R$).",
          solution: `$$\\text{Hypoténuse} = 2 \\times R = 2 \\times ${r} = ${hyp}\\text{ cm}$$`
        };
      } else {
        const opts = this.shuffle([
          "Au milieu de l'hypoténuse",
          "À l'intérieur du triangle sans être sur un côté",
          "Sur le sommet de l'angle droit",
          "À l'extérieur du triangle"
        ]);
        return {
          chapterId: '4G2',
          tier: 1,
          title: "Position du centre du cercle circonscrit (4ème)",
          statement: `Dans un triangle rectangle, où est situé le centre de son cercle circonscrit ?`,
          type: "mcq",
          options: opts,
          answer: "Au milieu de l'hypoténuse",
          correctIndex: opts.indexOf("Au milieu de l'hypoténuse"),
          hint1: "L'hypoténuse est un diamètre du cercle circonscrit.",
          solution: "Dans tout triangle rectangle, le centre du cercle circonscrit est exactement situé au milieu de son hypoténuse."
        };
      }
    } else if (t === 2) {
      const vtype = this.randChoice(['median_len', 'reciprocal_median', 'distance_vertices']);
      if (vtype === 'median_len') {
        const hyp = this.randInt(5, 14) * 2;
        const triName = this.randChoice([
          { t: "ABC", right: "A", hyp: "BC" },
          { t: "EFG", right: "E", hyp: "FG" },
          { t: "MNP", right: "M", hyp: "NP" }
        ]);
        return {
          chapterId: '4G2',
          tier: 2,
          title: "Médiane issue de l'angle droit (4ème)",
          statement: `Dans un triangle $${triName.t}$ rectangle en $${triName.right}$, l'hypoténuse $[${triName.hyp}]$ mesure $${hyp}\\text{ cm}$.\n**Quelle est la longueur de la médiane issue de $${triName.right}$ en cm ?**`,
          type: "exact",
          answer: String(hyp / 2),
          placeholder: `Ex: ${hyp / 2}`,
          hint1: "Dans un triangle rectangle, la médiane relative à l'hypoténuse mesure la moitié de l'hypoténuse.",
          solution: `$$m = \\frac{${triName.hyp}}{2} = \\frac{${hyp}}{2} = ${hyp / 2}\\text{ cm}$$`
        };
      } else if (vtype === 'reciprocal_median') {
        const m = this.randInt(4, 10);
        const bc = m * 2;
        const opts = this.shuffle([
          "Il est rectangle en A",
          "Il est équilatéral",
          "Il est isocèle en B",
          "On ne peut pas savoir"
        ]);
        return {
          chapterId: '4G2',
          tier: 2,
          title: "Réciproque de la médiane (4ème)",
          statement: `Dans un triangle $ABC$, $M$ est le milieu de $[BC]$. On mesure $BC = ${bc}\\text{ cm}$ et $AM = ${m}\\text{ cm}$.\n**Que peut-on affirmer sur la nature du triangle $ABC$ ?**`,
          type: "mcq",
          options: opts,
          answer: "Il est rectangle en A",
          correctIndex: opts.indexOf("Il est rectangle en A"),
          hint1: "Si dans un triangle, la médiane relative à un côté mesure la moitié de ce côté, alors ce triangle est rectangle.",
          solution: `Comme $AM = \\frac{BC}{2} = ${m}\\text{ cm}$, d'après la propriété réciproque, le triangle $ABC$ est rectangle en $A$.`
        };
      } else {
        const r = this.randInt(4, 12);
        return {
          chapterId: '4G2',
          tier: 2,
          title: "Distance du centre du cercle aux sommets (4ème)",
          statement: `Dans un triangle $ABC$ rectangle en $A$, l'hypoténuse mesure $BC = ${r * 2}\\text{ cm}$ et $O$ est le milieu de $[BC]$.\n**Quelle est la distance $OA$ en cm ?**`,
          type: "exact",
          answer: String(r),
          placeholder: `Ex: ${r}`,
          hint1: "$O$ est le centre du cercle circonscrit, donc $OA = OB = OC = R$.",
          solution: `$$OA = \\frac{BC}{2} = \\frac{${r * 2}}{2} = ${r}\\text{ cm}$$`
        };
      }
    } else if (t === 3) {
      const vtype = this.randChoice(['midsegment_direct', 'midsegment_reciprocal', 'midsegment_perim']);
      if (vtype === 'midsegment_direct') {
        const bc = this.randInt(6, 18) * 2;
        return {
          chapterId: '4G2',
          tier: 3,
          title: "Théorème des milieux (4ème)",
          statement: `Dans un triangle $ABC$, $I$ et $J$ sont les milieux respectifs de $[AB]$ et $[AC]$. Sachant que $BC = ${bc}\\text{ cm}$, calculer la longueur $IJ$ en cm :`,
          type: "exact",
          answer: String(bc / 2),
          placeholder: `Ex: ${bc / 2}`,
          hint1: "D'après le théorème des milieux, la longueur du segment joignant les milieux de deux côtés est égale à la moitié de la longueur du troisième côté.",
          solution: `$$IJ = \\frac{BC}{2} = \\frac{${bc}}{2} = ${bc / 2}\\text{ cm}$$`
        };
      } else if (vtype === 'midsegment_reciprocal') {
        const ij = this.randInt(4, 15);
        const bc = ij * 2;
        return {
          chapterId: '4G2',
          tier: 3,
          title: "Calcul du troisième côté via les milieux (4ème)",
          statement: `Dans un triangle $ABC$, $I$ est le milieu de $[AB]$ et $J$ est le milieu de $[AC]$. On sait que $IJ = ${ij}\\text{ cm}$.\n**Quelle est la longueur de la base $BC$ en cm ?**`,
          type: "exact",
          answer: String(bc),
          placeholder: `Ex: ${bc}`,
          hint1: "D'après le théorème des milieux : $BC = 2 \\times IJ$.",
          solution: `$$BC = 2 \\times IJ = 2 \\times ${ij} = ${bc}\\text{ cm}$$`
        };
      } else {
        const pGrand = this.randInt(12, 25) * 2;
        return {
          chapterId: '4G2',
          tier: 3,
          title: "Périmètre et droite des milieux (4ème)",
          statement: `Un triangle $ABC$ a un périmètre de $${pGrand}\\text{ cm}$. On relie les milieux de ses trois côtés pour former un petit triangle.\n**Quel est le périmètre de ce petit triangle en cm ?**`,
          type: "exact",
          answer: String(pGrand / 2),
          placeholder: `Ex: ${pGrand / 2}`,
          hint1: "Chaque côté du petit triangle mesure la moitié du côté correspondant du grand triangle.",
          solution: `$$P_{\\text{petit}} = \\frac{P_{\\text{grand}}}{2} = \\frac{${pGrand}}{2} = ${pGrand / 2}\\text{ cm}$$`
        };
      }
    } else {
      const vtype = this.randChoice(['semicircle_right', 'complementary_angles']);
      if (vtype === 'semicircle_right') {
        const tri = this.randChoice([
          { name: "MNP", d1: "M", d2: "N", opp: "P" },
          { name: "ABC", d1: "A", d2: "B", opp: "C" },
          { name: "EFG", d1: "E", d2: "G", opp: "F" },
          { name: "RST", d1: "S", d2: "T", opp: "R" }
        ]);
        const correct = `Il est rectangle en ${tri.opp}`;
        const wrong1 = `Il est rectangle en ${tri.d1}`;
        const wrong2 = "Il est équilatéral";
        const wrong3 = `Il est isocèle en ${tri.d2}`;
        const opts = this.shuffle([correct, wrong1, wrong2, wrong3]);
        return {
          chapterId: '4G2',
          tier: 4,
          title: "Défi : Triangle inscrit dans un demi-cercle (4ème)",
          statement: `Un triangle $${tri.name}$ est inscrit dans un cercle ayant pour diamètre le côté $[${tri.d1}${tri.d2}]$.\n**Que peut-on affirmer sur la nature du triangle $${tri.name}$ ?**`,
          type: "mcq",
          options: opts,
          answer: correct,
          correctIndex: opts.indexOf(correct),
          hint1: `Le côté $[${tri.d1}${tri.d2}]$ est un diamètre du cercle circonscrit. Le sommet opposé est $${tri.opp}$.`,
          solution: `Si un triangle est inscrit dans un cercle ayant pour diamètre l'un de ses côtés, alors il est rectangle au sommet opposé (en $${tri.opp}$).`
        };
      } else {
        const angleAigu = this.randInt(20, 70);
        const secondAngle = 90 - angleAigu;
        return {
          chapterId: '4G2',
          tier: 4,
          title: "Défi : Angles d'un triangle inscrit (4ème)",
          statement: `Un triangle $ABC$ est inscrit dans un cercle dont un diamètre est $[BC]$. L'angle $\\widehat{ABC}$ mesure $${angleAigu}^\\circ$.\n**Quelle est la mesure de l'angle $\\widehat{ACB}$ en degrés ?**`,
          type: "exact",
          answer: String(secondAngle),
          placeholder: `Ex: ${secondAngle}`,
          hint1: "Le triangle $ABC$ est rectangle en $A$ (car $[BC]$ est un diamètre). La somme des deux angles aigus vaut $90^\\circ$.",
          solution: `1. $[BC]$ étant un diamètre, le triangle $ABC$ est rectangle en $A$ (donc $\\widehat{BAC} = 90^\\circ$).\n2. Dans un triangle rectangle, les deux angles aigus sont complémentaires :\n$$\\widehat{ACB} = 90^\\circ - ${angleAigu}^\\circ = ${secondAngle}^\\circ$$`
        };
      }
    }
  },

  // --- 4G3 : Translations (4ème) ---
  generate4G3(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const vtype = this.randChoice(['length_conserv', 'angle_conserv', 'area_conserv']);
      if (vtype === 'length_conserv') {
        const L = this.randInt(5, 20);
        return {
          chapterId: '4G3',
          tier: 1,
          title: "Conservation de la distance par translation (4ème)",
          statement: `Un segment mesure $${L}\\text{ cm}$. Par une translation, quelle est la longueur de son segment image en cm ?`,
          type: "exact",
          answer: String(L),
          placeholder: `Ex: ${L}`,
          hint1: "La translation est un glissement qui conserve les longueurs.",
          solution: `La translation conserve les longueurs, donc le segment image mesure aussi $${L}\\text{ cm}$.`
        };
      } else if (vtype === 'angle_conserv') {
        const ang = this.randInt(25, 110);
        return {
          chapterId: '4G3',
          tier: 1,
          title: "Conservation des angles par translation (4ème)",
          statement: `Un angle mesure $${ang}^\\circ$. Par une translation, quelle est la mesure de son angle image en degrés ?`,
          type: "exact",
          answer: String(ang),
          placeholder: `Ex: ${ang}`,
          hint1: "La translation conserve les mesures d'angles.",
          solution: `La translation conserve les mesures d'angles, donc l'angle image mesure aussi $${ang}^\\circ$.`
        };
      } else {
        const aire = this.randInt(12, 45);
        return {
          chapterId: '4G3',
          tier: 1,
          title: "Conservation de l'aire par translation (4ème)",
          statement: `Une figure géométrique a une aire de $${aire}\\text{ cm}^2$. On lui applique une translation.\n**Quelle est l'aire de la figure transformée en $\\text{cm}^2$ ?**`,
          type: "exact",
          answer: String(aire),
          placeholder: `Ex: ${aire}`,
          hint1: "La translation conserve les aires.",
          solution: `La translation ne modifie pas les dimensions de la figure, son aire reste de $${aire}\\text{ cm}^2$.`
        };
      }
    } else if (t === 2) {
      const vtype = this.randChoice(['quad_parall', 'parallel_lines', 'vector_chars']);
      if (vtype === 'quad_parall') {
        const quad = this.randChoice([
          { a: 'A', b: 'B', c: 'C', d: 'D', name: 'ABDC' },
          { a: 'E', b: 'F', c: 'G', d: 'H', name: 'EFHG' },
          { a: 'M', b: 'N', c: 'P', d: 'Q', name: 'MNQP' },
          { a: 'R', b: 'S', c: 'T', d: 'U', name: 'RSUT' }
        ]);
        const opts = this.shuffle([
          "Un parallélogramme",
          "Un trapèze non parallélogramme",
          "Un losange obligatoire",
          "Un rectangle obligatoire"
        ]);
        return {
          chapterId: '4G3',
          tier: 2,
          title: "Nature du quadrilatère formé par translation (4ème)",
          statement: `Si le point $${quad.d}$ est l'image du point $${quad.c}$ par la translation qui transforme $${quad.a}$ en $${quad.b}$, quelle est la nature du quadrilatère $${quad.name}$ ?`,
          type: "mcq",
          options: opts,
          answer: "Un parallélogramme",
          correctIndex: opts.indexOf("Un parallélogramme"),
          hint1: `Les segments [${quad.a}${quad.b}] et [${quad.c}${quad.d}] sont parallèles, de même sens et de même longueur.`,
          solution: `Par définition de la translation, si le vecteur $\\vec{${quad.a}${quad.b}} = \\vec{${quad.c}${quad.d}}$, alors le quadrilatère $${quad.name}$ est un parallélogramme.`
        };
      } else if (vtype === 'parallel_lines') {
        const opts = this.shuffle([
          "Parallèle à la droite de départ",
          "Perpendiculaire à la droite de départ",
          "Sécante avec un angle de 45°",
          "Identique obligatoirement"
        ]);
        return {
          chapterId: '4G3',
          tier: 2,
          title: "Image d'une droite par translation (4ème)",
          statement: `Par une translation, quelle est la position relative d'une droite et de son image ?`,
          type: "mcq",
          options: opts,
          answer: "Parallèle à la droite de départ",
          correctIndex: opts.indexOf("Parallèle à la droite de départ"),
          hint1: "La translation conserve la direction.",
          solution: "L'image d'une droite par une translation est une droite qui lui est strictement parallèle (ou confondue si le vecteur est porté par la droite)."
        };
      } else {
        const opts = this.shuffle([
          "Une direction, un sens et une longueur",
          "Un centre et un angle",
          "Un axe de réflexion",
          "Un rapport et un centre"
        ]);
        return {
          chapterId: '4G3',
          tier: 2,
          title: "Caractéristiques d'une translation (4ème)",
          statement: `Quels sont les trois éléments qui définissent une translation ?`,
          type: "mcq",
          options: opts,
          answer: "Une direction, un sens et une longueur",
          correctIndex: opts.indexOf("Une direction, un sens et une longueur"),
          hint1: "Pense au vecteur de glissement : direction (la droite), sens (vers où), longueur (la distance).",
          solution: "Une translation est définie par : une direction (droite support), un sens (vers la droite, vers le haut...), et une distance (longueur)."
        };
      }
    } else if (t === 3) {
      const vtype = this.randChoice(['circle_trans', 'midpoint_trans', 'perim_trans']);
      if (vtype === 'circle_trans') {
        const r = this.randInt(3, 12);
        return {
          chapterId: '4G3',
          tier: 3,
          title: "Rayon d'un cercle transformé (4ème)",
          statement: `Un cercle de rayon $${r}\\text{ cm}$ subit une translation. Quel est le rayon du cercle image en cm ?`,
          type: "exact",
          answer: String(r),
          placeholder: `Ex: ${r}`,
          hint1: "La translation conserve les rayons et les formes géométriques.",
          solution: `La translation ne déforme pas les figures, le rayon reste de $${r}\\text{ cm}$.`
        };
      } else if (vtype === 'midpoint_trans') {
        const l = this.randInt(4, 12) * 2;
        return {
          chapterId: '4G3',
          tier: 3,
          title: "Image du milieu d'un segment (4ème)",
          statement: `Soit un segment $[AB]$ de longueur $${l}\\text{ cm}$ et $I$ son milieu. Par une translation, $[AB]$ a pour image $[A'B']$ et $I$ a pour image $I'$.\n**Quelle est la longueur $A'I'$ en cm ?**`,
          type: "exact",
          answer: String(l / 2),
          placeholder: `Ex: ${l / 2}`,
          hint1: "La translation conserve le milieu : $I'$ est le milieu de $[A'B']$.",
          solution: `La translation conserve le milieu, donc $A'I' = AI = \\frac{${l}}{2} = ${l / 2}\\text{ cm}$.`
        };
      } else {
        const a = this.randInt(4, 8);
        const b = this.randInt(5, 9);
        const c = this.randInt(6, 10);
        const p = a + b + c;
        return {
          chapterId: '4G3',
          tier: 3,
          title: "Périmètre d'un triangle transformé (4ème)",
          statement: `Un triangle a pour côtés $${a}\\text{ cm}$, $${b}\\text{ cm}$ et $${c}\\text{ cm}$.\n**Quel est le périmètre de son image par une translation en cm ?**`,
          type: "exact",
          answer: String(p),
          placeholder: `Ex: ${p}`,
          hint1: "La translation conserve les longueurs, donc le périmètre reste inchangé : $${a} + ${b} + ${c}$.",
          solution: `$$P = ${a} + ${b} + ${c} = ${p}\\text{ cm}$$`
        };
      }
    } else {
      const vtype = this.randChoice(['coord_pos', 'coord_neg', 'coord_preimage']);
      if (vtype === 'coord_pos') {
        const dx = this.randInt(2, 6);
        const dy = this.randInt(2, 6);
        const x = this.randInt(1, 5);
        const y = this.randInt(1, 5);
        return {
          chapterId: '4G3',
          tier: 4,
          title: "Défi : Coordonnées et translation (4ème)",
          statement: `Dans un repère, une translation décale les points de $+${dx}$ en abscisse et $+${dy}$ en ordonnée.\n**Quelle est l'abscisse de l'image du point $M(${x} ; ${y})$ ?**`,
          type: "exact",
          answer: String(x + dx),
          placeholder: `Ex: ${x + dx}`,
          hint1: `Ajoute le décalage à l'abscisse de départ : $${x} + ${dx}$.`,
          solution: `$$x' = ${x} + ${dx} = ${x + dx}$$`
        };
      } else if (vtype === 'coord_neg') {
        const dx = this.randInt(2, 5);
        const dy = this.randInt(2, 5);
        const x = this.randInt(4, 9);
        const y = this.randInt(3, 8);
        return {
          chapterId: '4G3',
          tier: 4,
          title: "Défi : Translation avec coordonnées négatives (4ème)",
          statement: `Dans un repère, une translation décale les points de $-${dx}$ en abscisse et $+${dy}$ en ordonnée.\n**Quelle est l'abscisse du point image de $A(${x} ; ${y})$ ?**`,
          type: "exact",
          answer: String(x - dx),
          placeholder: `Ex: ${x - dx}`,
          hint1: `Calcule l'abscisse de départ moins le décalage : $${x} - ${dx}$.`,
          solution: `$$x' = ${x} - ${dx} = ${x - dx}$$`
        };
      } else {
        const dx = this.randInt(2, 6);
        const xFinal = this.randInt(7, 12);
        const xStart = xFinal - dx;
        return {
          chapterId: '4G3',
          tier: 4,
          title: "Défi : Retrouver les coordonnées de départ (4ème)",
          statement: `Une translation décale les points de $+${dx}$ en abscisse. L'image d'un point $P$ a pour abscisse $x' = ${xFinal}$.\n**Quelle était l'abscisse initiale du point $P$ ?**`,
          type: "exact",
          answer: String(xStart),
          placeholder: `Ex: ${xStart}`,
          hint1: `À l'envers : $x' = x + ${dx} \\implies x = x' - ${dx}$.`,
          solution: `$$x = ${xFinal} - ${dx} = ${xStart}$$`
        };
      }
    }
  },

  // --- 4D2 : Probabilités (4ème) ---
  generate4D2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const vtype = this.randChoice(['contrary_dec', 'contrary_frac', 'sum_probs']);
      if (vtype === 'contrary_dec') {
        const p = this.randChoice([0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.65, 0.75]);
        const ans = (1 - p).toFixed(2).replace(/\.?0+$/, "");
        return {
          chapterId: '4D2',
          tier: 1,
          title: "Calcul de l'événement contraire (4ème)",
          statement: `La probabilité d'un événement $A$ est $P(A) = ${p}$.\n**Quelle est la probabilité de l'événement contraire $\\bar{A}$ ?**`,
          type: "exact",
          answer: ans,
          placeholder: `Ex: ${ans}`,
          hint1: "Formule fondamentale : $P(\\bar{A}) = 1 - P(A)$.",
          solution: `$$P(\\bar{A}) = 1 - ${p} = ${ans}$$`
        };
      } else if (vtype === 'contrary_frac') {
        const den = this.randChoice([5, 7, 8, 9, 10]);
        const num = this.randInt(1, den - 1);
        const ansNum = den - num;
        return {
          chapterId: '4D2',
          tier: 1,
          title: "Événement contraire sous forme de fraction (4ème)",
          statement: `La probabilité d'un événement $E$ est $P(E) = \\frac{${num}}{${den}}$.\n**Quelle est la probabilité de l'événement contraire $\\bar{E}$ ?**\n*(Donner sous la forme a/b)*`,
          type: "exact",
          answer: `${ansNum}/${den}`,
          placeholder: `Ex: ${ansNum}/${den}`,
          hint1: `Calcule $1 - \\frac{${num}}{${den}} = \\frac{${den}}{${den}} - \\frac{${num}}{${den}}$.`,
          solution: `$$P(\\bar{E}) = 1 - \\frac{${num}}{${den}} = \\frac{${den} - ${num}}{${den}} = \\frac{${ansNum}}{${den}}$$`
        };
      } else {
        const opts = this.shuffle(["1", "0", "100", "0,5"]);
        return {
          chapterId: '4D2',
          tier: 1,
          title: "Somme des probabilités de toutes les issues (4ème)",
          statement: `Dans une expérience aléatoire, quelle est la somme des probabilités de toutes les issues possibles ?`,
          type: "mcq",
          options: opts,
          answer: "1",
          correctIndex: opts.indexOf("1"),
          hint1: "La somme de toutes les probabilités d'un univers vaut toujours 100% ou 1.",
          solution: "La somme des probabilités de toutes les issues possibles d'une expérience aléatoire est toujours égale à 1."
        };
      }
    } else if (t === 2) {
      const vtype = this.randChoice(['lottery_loss', 'not_red_urn', 'die_not_value']);
      if (vtype === 'lottery_loss') {
        const tot = 100;
        const gag = this.randInt(5, 30);
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
          solution: `$$P(\\text{Perdant}) = 1 - \\frac{${gag}}{100} = ${perd}$$`
        };
      } else if (vtype === 'not_red_urn') {
        const r = this.randInt(2, 5);
        const v = this.randInt(3, 6);
        const b = this.randInt(2, 5);
        const tot = r + v + b;
        const notR = v + b;
        const [sN, sD] = this.simplifyFraction(notR, tot);
        const ans = `${sN}/${sD}`;
        return {
          chapterId: '4D2',
          tier: 2,
          title: "Probabilité de ne pas tirer une couleur (4ème)",
          statement: `Une boîte contient $${r}$ boules rouges, $${v}$ boules vertes et $${b}$ boules bleues (soit $${tot}$ boules au total).\n**Quelle est la probabilité de tirer une boule qui NE soit PAS rouge ?**\n*(Fraction irréductible)*`,
          type: "exact",
          answer: ans,
          placeholder: `Ex: ${ans}`,
          hint1: `Les boules non rouges sont les vertes et les bleues : $${v} + ${b} = ${notR}$ boules sur $${tot}$.`,
          solution: `$$P(\\text{non rouge}) = \\frac{${v} + ${b}}{${tot}} = \\frac{${notR}}{${tot}} = ${ans}$$`
        };
      } else {
        const target = this.randInt(1, 6);
        return {
          chapterId: '4D2',
          tier: 2,
          title: "Ne pas obtenir un résultat donné au dé (4ème)",
          statement: `On lance un dé équilibré à 6 faces.\n**Quelle est la probabilité de NE PAS obtenir le nombre ${target} ?**\n*(Donner sous la forme a/b)*`,
          type: "exact",
          answer: "5/6",
          placeholder: "Ex: 5/6",
          hint1: `Il y a 5 faces différentes de ${target} sur 6 faces au total.`,
          solution: `$$P(\\text{non } ${target}) = 1 - P(${target}) = 1 - \\frac{1}{6} = \\frac{5}{6}$$`
        };
      }
    } else if (t === 3) {
      const vtype = this.randChoice(['two_coins', 'spinner_die']);
      if (vtype === 'two_coins') {
        const cases = [
          {
            statement: "On lance consécutivement deux pièces de monnaie équilibrées. Quelle est la probabilité d'obtenir 2 fois « Pile » ?",
            ans: "1/4",
            hint: "Il y a 4 issues équiprobables : (P,P), (P,F), (F,P), (F,F). Seule (P,P) convient.",
            sol: "$$P(\\text{Pile, Pile}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$"
          },
          {
            statement: "On lance consécutivement deux pièces de monnaie équilibrées. Quelle est la probabilité d'obtenir exactement 1 Pile et 1 Face (dans n'importe quel ordre) ?",
            ans: "1/2",
            hint: "Sur les 4 issues (P,P), (P,F), (F,P), (F,F), 2 comportent un Pile et un Face.",
            sol: "$$P = \\frac{2}{4} = \\frac{1}{2}$$"
          },
          {
            statement: "On lance consécutivement deux pièces de monnaie équilibrées. Quelle est la probabilité d'obtenir au moins une fois « Pile » ?",
            ans: "3/4",
            hint: "L'événement contraire est d'obtenir 2 fois Face (probabilité 1/4). $1 - 1/4 = 3/4$.",
            sol: "$$P(\\text{au moins un Pile}) = 1 - P(\\text{Face, Face}) = 1 - \\frac{1}{4} = \\frac{3}{4}$$"
          }
        ];
        const c = this.randChoice(cases);
        const allChoices = ["1/4", "1/2", "3/4", "1/8"];
        const opts = this.shuffle(allChoices);
        return {
          chapterId: '4D2',
          tier: 3,
          title: "Deux lancers de pièces (4ème)",
          statement: c.statement,
          type: "mcq",
          options: opts,
          answer: c.ans,
          correctIndex: opts.indexOf(c.ans),
          hint1: c.hint,
          solution: c.sol
        };
      } else {
        const opts = this.shuffle(["1/4", "1/2", "1/3", "1/6"]);
        return {
          chapterId: '4D2',
          tier: 3,
          title: "Événement à deux épreuves successives (4ème)",
          statement: `On lance une pièce de monnaie puis un dé à 6 faces. Quelle est la probabilité d'obtenir « Pile » ET un « nombre pair » ?`,
          type: "mcq",
          options: opts,
          answer: "1/4",
          correctIndex: opts.indexOf("1/4"),
          hint1: "$P(\\text{Pile}) = \\frac{1}{2}$ et $P(\\text{pair}) = \\frac{3}{6} = \\frac{1}{2}$. Multiplie les probabilités.",
          solution: `Les deux épreuves étant indépendantes :\n$$P(\\text{Pile et pair}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$$`
        };
      }
    } else {
      const vtype = this.randChoice(['same_color_replace', 'diff_color_replace']);
      if (vtype === 'same_color_replace') {
        const v = this.randInt(2, 5);
        const r = this.randInt(2, 5);
        const tot = v + r;
        const num = v * v;
        const den = tot * tot;
        const [sN, sD] = this.simplifyFraction(num, den);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: '4D2',
          tier: 4,
          title: "Défi : Tirage successif avec remise (4ème)",
          statement: `Dans une urne contenant $${v}$ boules vertes et $${r}$ boules rouges (soit $${tot}$ boules au total), on tire $2$ boules successivement avec remise.\n**Quelle est la probabilité de tirer $2$ boules vertes ?**\n*(Donner le résultat sous forme d'une fraction irréductible)*`,
          type: "exact",
          answer: ansStr,
          placeholder: `Ex: ${ansStr}`,
          hint1: `À chaque tirage, la probabilité de tirer une boule verte est $\\frac{${v}}{${tot}}$. Les deux tirages étant indépendants, on multiplie les probabilités.`,
          solution: `$$P = \\frac{${v}}{${tot}} \\times \\frac{${v}}{${tot}} = \\frac{${num}}{${den}} = ${ansStr}$$`
        };
      } else {
        const b = this.randInt(2, 4);
        const n = this.randInt(2, 4);
        const tot = b + n;
        const num = b * b;
        const den = tot * tot;
        const [sN, sD] = this.simplifyFraction(num, den);
        const ansStr = sD === 1 ? `${sN}` : `${sN}/${sD}`;
        return {
          chapterId: '4D2',
          tier: 4,
          title: "Défi : Deux boules blanches avec remise (4ème)",
          statement: `Une boîte contient $${b}$ boules blanches et $${n}$ boules noires ($${tot}$ au total). On tire deux boules successivement avec remise.\n**Quelle est la probabilité de tirer deux boules blanches ?**\n*(Fraction irréductible)*`,
          type: "exact",
          answer: ansStr,
          placeholder: `Ex: ${ansStr}`,
          hint1: `À chaque tirage, $P(B) = \\frac{${b}}{${tot}}$. Multiplie par elle-même.`,
          solution: `$$P(B, B) = \\frac{${b}}{${tot}} \\times \\frac{${b}}{${tot}} = \\frac{${num}}{${den}} = ${ansStr}$$`
        };
      }
    }
  },

  // --- 4P2 : Notion de fonction (4ème) ---
  generate4P2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      const vtype = this.randChoice(['image_ax_b', 'image_ax_sub_b', 'image_neg_x', 'image_mapping']);
      if (vtype === 'image_ax_b') {
        const a = this.randInt(2, 6);
        const b = this.randInt(1, 9);
        const x = this.randInt(2, 6);
        const ans = a * x + b;
        return {
          chapterId: '4P2',
          tier: 1,
          title: "Calcul direct d'une image (4ème)",
          statement: `Soit la fonction définie par $f(x) = ${a}x + ${b}$.\n**Calculer l'image de $${x}$ par la fonction $f$ :**`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Remplace $x$ par ${x} dans $f(x)$ : $${a} \\times ${x} + ${b}$.`,
          solution: `$$f(${x}) = ${a} \\times ${x} + ${b} = ${ans}$$`
        };
      } else if (vtype === 'image_ax_sub_b') {
        const a = this.randInt(2, 5);
        const b = this.randInt(1, 8);
        const x = this.randInt(3, 7);
        const ans = a * x - b;
        return {
          chapterId: '4P2',
          tier: 1,
          title: "Calcul d'image avec soustraction (4ème)",
          statement: `Soit la fonction $g(x) = ${a}x - ${b}$.\n**Calculer la valeur de $g(${x})$ :**`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Calcule d'abord $${a} \\times ${x}$, puis soustrais $${b}$.`,
          solution: `$$g(${x}) = ${a} \\times ${x} - ${b} = ${a * x} - ${b} = ${ans}$$`
        };
      } else if (vtype === 'image_neg_x') {
        const a = this.randInt(2, 4);
        const b = this.randInt(5, 12);
        const x = -this.randInt(1, 4);
        const ans = a * x + b;
        return {
          chapterId: '4P2',
          tier: 1,
          title: "Image d'un nombre négatif (4ème)",
          statement: `Soit la fonction $h(x) = ${a}x + ${b}$.\n**Calculer l'image de $${x}$ par la fonction $h$ :**`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Multiplie d'abord $${a}$ par $(${x})$ (attention à la règle des signes), puis ajoute $${b}$.`,
          solution: `$$h(${x}) = ${a} \\times (${x}) + ${b} = ${a * x} + ${b} = ${ans}$$`
        };
      } else {
        const a = this.randInt(2, 5);
        const x = this.randInt(2, 6);
        const ans = a * x * x;
        return {
          chapterId: '4P2',
          tier: 1,
          title: "Notation fonctionnelle avec carré (4ème)",
          statement: `Soit la fonction notée $k : x \\mapsto ${a}x^2$.\n**Quelle est l'image de $${x}$ par cette fonction ?**`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Calcule d'abord le carré de $${x}$ ($${x}^2 = ${x * x}$), puis multiplie par $${a}$.`,
          solution: `$$k(${x}) = ${a} \\times ${x}^2 = ${a} \\times ${x * x} = ${ans}$$`
        };
      }
    } else if (t === 2) {
      const vtype = this.randChoice(['prog_add_mult', 'prog_mult_sub', 'table_reading']);
      if (vtype === 'prog_add_mult') {
        const a = this.randInt(2, 5);
        const b = this.randInt(1, 6);
        const x = this.randInt(2, 6);
        const ans = (x + b) * a;
        return {
          chapterId: '4P2',
          tier: 2,
          title: "Programme de calcul et fonction (4ème)",
          statement: `On donne le programme : « Choisir un nombre, ajouter $${b}$, multiplier le résultat par $${a}$ ».\n**Quel résultat obtient-on pour le nombre de départ $${x}$ ?**`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Calcul : $(${x} + ${b}) \\times ${a}$.`,
          solution: `$$(${x} + ${b}) \\times ${a} = ${x + b} \\times ${a} = ${ans}$$`
        };
      } else if (vtype === 'prog_mult_sub') {
        const a = this.randInt(3, 6);
        const b = this.randInt(2, 7);
        const x = this.randInt(3, 8);
        const ans = a * x - b;
        return {
          chapterId: '4P2',
          tier: 2,
          title: "Programme de calcul à deux opérations (4ème)",
          statement: `Programme de calcul : « Prendre un nombre, le multiplier par $${a}$, puis soustraire $${b}$ ».\n**Si le nombre choisi est $${x}$, quel résultat fournit le programme ?**`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Calcul : $${a} \\times ${x} - ${b}$.`,
          solution: `$$${a} \\times ${x} - ${b} = ${a * x} - ${b} = ${ans}$$`
        };
      } else {
        const xList = [-2, 0, 1, 3, 5];
        const a = this.randInt(2, 4);
        const b = this.randInt(1, 5);
        const yList = xList.map(v => a * v + b);
        const idxTarget = this.randInt(0, xList.length - 1);
        const xTarget = xList[idxTarget];
        const yTarget = yList[idxTarget];
        return {
          chapterId: '4P2',
          tier: 2,
          title: "Lecture dans un tableau de valeurs (4ème)",
          statement: `Voici un extrait du tableau de valeurs d'une fonction $f$ :\n\n| $x$ | ${xList.join(' | ')} |\n|---|${xList.map(() => '---').join('|')}|\n| $f(x)$ | ${yList.join(' | ')} |\n\n**Quelle est l'image du nombre $${xTarget}$ par la fonction $f$ ?**`,
          type: "exact",
          answer: String(yTarget),
          placeholder: `Ex: ${yTarget}`,
          hint1: `Repère la colonne où $x = ${xTarget}$ et lis la valeur correspondante sur la ligne $f(x)$.`,
          solution: `Dans le tableau, sous $x = ${xTarget}$, on lit $f(${xTarget}) = ${yTarget}$.`
        };
      }
    } else if (t === 3) {
      const vtype = this.randChoice(['antecedent_plus', 'antecedent_minus', 'table_antecedent']);
      if (vtype === 'antecedent_plus') {
        const a = this.randInt(2, 5);
        const x = this.randInt(2, 7);
        const b = this.randInt(1, 8);
        const res = a * x + b;
        return {
          chapterId: '4P2',
          tier: 3,
          title: "Recherche d'un antécédent (4ème)",
          statement: `Soit la fonction $g(x) = ${a}x + ${b}$.\n**Déterminer l'antécédent de $${res}$ par la fonction $g$ :**`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Résous l'équation : $${a}x + ${b} = ${res}$.`,
          solution: `$$${a}x + ${b} = ${res} \\implies ${a}x = ${res - b} \\implies x = \\frac{${res - b}}{${a}} = ${x}$$`
        };
      } else if (vtype === 'antecedent_minus') {
        const a = this.randInt(2, 5);
        const x = this.randInt(2, 6);
        const b = this.randInt(2, 9);
        const res = a * x - b;
        return {
          chapterId: '4P2',
          tier: 3,
          title: "Antécédent avec soustraction (4ème)",
          statement: `Soit la fonction $f(x) = ${a}x - ${b}$.\n**Quel est l'antécédent de $${res}$ par la fonction $f$ ?**`,
          type: "exact",
          answer: String(x),
          placeholder: `Ex: ${x}`,
          hint1: `Résous l'équation : $${a}x - ${b} = ${res} \\iff ${a}x = ${res} + ${b}$.`,
          solution: `$$${a}x - ${b} = ${res} \\implies ${a}x = ${res + b} \\implies x = \\frac{${res + b}}{${a}} = ${x}$$`
        };
      } else {
        const xList = [-3, -1, 0, 2, 4];
        const a = this.randInt(2, 3);
        const b = this.randInt(2, 6);
        const yList = xList.map(v => a * v + b);
        const idxTarget = this.randInt(0, xList.length - 1);
        const xTarget = xList[idxTarget];
        const yTarget = yList[idxTarget];
        return {
          chapterId: '4P2',
          tier: 3,
          title: "Lire un antécédent dans un tableau (4ème)",
          statement: `On donne le tableau de valeurs d'une fonction $g$ :\n\n| $x$ | ${xList.join(' | ')} |\n|---|${xList.map(() => '---').join('|')}|\n| $g(x)$ | ${yList.join(' | ')} |\n\n**Quel est l'antécédent de $${yTarget}$ par la fonction $g$ ?**`,
          type: "exact",
          answer: String(xTarget),
          placeholder: `Ex: ${xTarget}`,
          hint1: `Cherche la valeur $${yTarget}$ sur la ligne $g(x)$, puis lis la valeur de $x$ au-dessus.`,
          solution: `Dans la ligne $g(x)$, on repère la valeur $${yTarget}$. La valeur correspondante au-dessus est $x = ${xTarget}$.`
        };
      }
    } else {
      const vtype = this.randChoice(['quad_neg', 'quad_sum_sq', 'zero_antecedent']);
      if (vtype === 'quad_neg') {
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
      } else if (vtype === 'quad_sum_sq') {
        const a = this.randInt(1, 4);
        const x = -this.randInt(2, 6);
        const b = this.randInt(2, 7);
        const ans = (x + a) * (x + a) + b;
        return {
          chapterId: '4P2',
          tier: 4,
          title: "Défi : Formule avec parenthèse et carré (4ème)",
          statement: `Soit la fonction $f(x) = (x + ${a})^2 + ${b}$.\n**Calculer l'image de $${x}$ par cette fonction $f$ :**`,
          type: "exact",
          answer: String(ans),
          placeholder: `Ex: ${ans}`,
          hint1: `Calcule d'abord l'intérieur de la parenthèse : $${x} + ${a} = ${x + a}$. Élève au carré, puis ajoute $${b}$.`,
          solution: `$$f(${x}) = (${x} + ${a})^2 + ${b} = (${x + a})^2 + ${b} = ${(x + a) * (x + a)} + ${b} = ${ans}$$`
        };
      } else {
        const a = this.randChoice([2, 3, 4, 5]);
        const sol = this.randInt(2, 8);
        const b = a * sol;
        return {
          chapterId: '4P2',
          tier: 4,
          title: "Défi : Antécédent de 0 (4ème)",
          statement: `Soit la fonction $g(x) = ${a}x - ${b}$.\n**Déterminer l'antécédent de $0$ par la fonction $g$ :**`,
          type: "exact",
          answer: String(sol),
          placeholder: `Ex: ${sol}`,
          hint1: `Chercher l'antécédent de 0 revient à résoudre l'équation $g(x) = 0$, soit $${a}x - ${b} = 0$.`,
          solution: `$$${a}x - ${b} = 0 \\implies ${a}x = ${b} \\implies x = \\frac{${b}}{${a}} = ${sol}$$`
        };
      }
    }
  },

  // --- 4A1 : Algorithmique et variables Scratch (4ème) ---
  generate4A1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
      if (Math.random() < 0.5) {
        // Programme de calcul Scratch 4ème
        const x = this.randInt(2, 8);
        const m = this.randInt(2, 4);
        const a = this.randInt(3, 9);
        const res = x * m + a;
        return {
          chapterId: '4A1',
          tier: 1,
          title: "Programme de calcul Scratch avec variables (4ème)",
          statement: `On donne le script Scratch suivant :\n\`\`\`text\nquand drapeau cliqué\ndemander [Choisir un nombre] et attendre\nmettre [N] à réponse\nmettre [R] à (N * ${m})\nmettre [R] à (R + ${a})\ndire (R)\n\`\`\`\n**Si le nombre entré au départ est $${x}$, quel résultat affiche le lutin ?**`,
          type: "exact",
          answer: String(res),
          placeholder: `Ex: ${res}`,
          hint1: `Évalue les variables dans l'ordre : d'abord $N = ${x}$, puis $R = ${x} \\times ${m}$, puis ajoute $${a}$.`,
          hint2: `Étape 1 : $${x} \\times ${m} = ${x * m}$. Étape 2 : $${x * m} + ${a} = ${res}$.`,
          solution: `$$R = (${x} \\times ${m}) + ${a} = ${x * m} + ${a} = ${res}$$`
        };
      }
      const init = this.randInt(5, 15);
      const add = this.randInt(4, 12);
      return {
        chapterId: '4A1',
        tier: 1,
        title: "Affectation d'une variable dans Scratch (4ème)",
        statement: `Un script contient : « mettre V à ${init} », puis « ajouter ${add} à V ».\n**Quelle est la valeur finale de la variable V ?**`,
        type: "exact",
        answer: String(init + add),
        placeholder: `Ex: ${init + add}`,
        hint1: `La variable commence à ${init} et augmente de ${add}.`,
        hint2: `Calcul simple : $${init} + ${add} = ${init + add}$.`,
        solution: `$$V = ${init} + ${add} = ${init + add}$$`
      };
    } else if (t === 2) {
      if (Math.random() < 0.5) {
        // Programme Scratch avec nombre relatif
        const x = this.randChoice([-5, -4, -3, -2, 2, 3, 4]);
        const a = this.randInt(2, 5);
        const b = this.randInt(3, 9);
        const res = (x * a) - b;
        return {
          chapterId: '4A1',
          tier: 2,
          title: "Programme de calcul Scratch avec un nombre relatif (4ème)",
          statement: `Un script Scratch contient :\n\`\`\`text\nquand drapeau cliqué\ndemander [Choisir un nombre] et attendre\nmettre [X] à réponse\nmettre [Résultat] à (X * ${a})\nmettre [Résultat] à (Résultat - ${b})\ndire (Résultat)\n\`\`\`\n**Si l'on choisit le nombre relatif $${x}$ au départ, quel est le résultat final ?**`,
          type: "exact",
          answer: String(res),
          placeholder: `Ex: ${res}`,
          hint1: `Multiplie d'abord $${x}$ par $${a}$ (attention à la règle des signes !), puis soustrais $${b}$.`,
          hint2: `Étape 1 : $${x} \\times ${a} = ${x * a}$. Étape 2 : $${x * a} - ${b} = ${res}$.`,
          solution: `$$(${x} \\times ${a}) - ${b} = ${x * a} - ${b} = ${res}$$`
        };
      }
      const limit = 10;
      const n = this.randInt(3, 8);
      return {
        chapterId: '4A1',
        tier: 2,
        title: "Test conditionnel Si / Sinon dans Scratch (4ème)",
        statement: `Bloc Scratch : « Si N > ${limit} alors mettre R à 25 sinon mettre R à 8 ».\nSi la variable N vaut $${n}$, quelle sera la valeur de R ?`,
        type: "exact",
        answer: "8",
        placeholder: "Ex: 8",
        hint1: `Le test $${n} > ${limit}$ est FAUX, donc on exécute la branche « sinon ».`,
        hint2: `Comme $${n} \\le ${limit}$, c'est l'instruction du « sinon » qui fixe $R = 8$.`,
        solution: `Comme $${n} \\le ${limit}$, la condition est fausse et la variable $R$ prend la valeur 8.`
      };
    } else if (t === 3) {
      if (Math.random() < 0.5) {
        // Retrouver le nombre de départ 4ème
        const start = this.randChoice([-4, -3, -2, 2, 3, 4, 5]);
        const a = this.randInt(2, 4);
        const b = this.randInt(2, 8);
        const finalVal = (start + b) * a;
        return {
          chapterId: '4A1',
          tier: 3,
          title: "Retrouver le nombre de départ avec Scratch (4ème)",
          statement: `On considère ce script Scratch :\n\`\`\`text\nquand drapeau cliqué\ndemander [Choisir un nombre] et attendre\nmettre [x] à réponse\nmettre [x] à (x + ${b})\nmettre [x] à (x * ${a})\ndire (x)\n\`\`\`\nLe lutin annonce le résultat final : **$${finalVal}$**.\n**Quel nombre $x$ avait été choisi au départ ?**`,
          type: "exact",
          answer: String(start),
          placeholder: `Ex: ${start}`,
          hint1: `Remonte les étapes à l'envers : commence par diviser $${finalVal}$ par $${a}$, puis soustrais $${b}$.`,
          hint2: `$(${finalVal} \\div ${a}) - ${b} = ${finalVal / a} - ${b} = ${start}$.`,
          solution: `En remontant à l'envers : on divise d'abord par $${a}$ ($${finalVal} \\div ${a} = ${finalVal / a}$), puis on soustrait $${b}$ ($${finalVal / a} - ${b} = ${start}$). Le nombre de départ était bien **$${start}$**.`
        };
      }
      const x = this.randInt(2, 6);
      return {
        chapterId: '4A1',
        tier: 3,
        title: "Programme avec variable et condition (4ème)",
        statement: `Un script demande un nombre $x$. Si $x > 0$, il affiche $3 \\times x$, sinon il affiche $x + 10$.\nPour $x = ${x}$, qu'affiche le lutin ?`,
        type: "exact",
        answer: String(3 * x),
        placeholder: `Ex: ${3 * x}`,
        hint1: `$${x} > 0$ est vrai, donc on effectue $3 \\times ${x}$.`,
        hint2: `Calcul : $3 \\times ${x} = ${3 * x}$.`,
        solution: `La condition $${x} > 0$ est vraie, le lutin affiche $3 \\times ${x} = ${3 * x}$.`
      };
    } else {
      if (Math.random() < 0.5) {
        // Défi Scratch avec carré et distributivité
        const x = this.randInt(2, 6);
        const a = this.randInt(1, 5);
        const res = (x + a) * (x + a);
        return {
          chapterId: '4A1',
          tier: 4,
          title: "Défi Scratch : Programme avec mise au carré (4ème)",
          statement: `Script Scratch :\n\`\`\`text\nquand drapeau cliqué\ndemander [Choisir un nombre] et attendre\nmettre [x] à réponse\nmettre [x] à (x + ${a})\nmettre [x] à (x * x)\ndire (x)\n\`\`\`\n**Si le nombre choisi au départ est $${x}$, quel résultat affiche le lutin ?**`,
          type: "exact",
          answer: String(res),
          placeholder: `Ex: ${res}`,
          hint1: `Calcule d'abord $(x + ${a})$ avec $x = ${x}$, puis élève ce résultat au carré.`,
          hint2: `$${x} + ${a} = ${x + a}$, puis $(${x + a})^2 = ${res}$.`,
          solution: `Étape 1 : $${x} + ${a} = ${x + a}$. Étape 2 : $(${x + a})^2 = ${res}$.`
        };
      }
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
        statement: `Compteur démarre à 0. Script : « répéter jusqu'à Compteur >= ${seuil} : ajouter ${pas} à Compteur ».\nQuelle est la valeur finale de Compteur ?`,
        type: "exact",
        answer: String(val),
        placeholder: `Ex: ${val}`,
        hint1: "La boucle s'arrête dès que Compteur atteint ou dépasse " + seuil + ".",
        hint2: `À chaque tour, on ajoute ${pas} au compteur jusqu'à dépasser ${seuil}.`,
        solution: `Compteur augmente de ${pas} en ${pas} jusqu'à dépasser ${seuil} : valeur finale = ${val}.`
      };
    }
  },

  // =========================================================================
  // ROUTEUR PRINCIPAL & DISPATCHER ZPD ADAPTATIF
  // =========================================================================

  /**
   * Point d'entrée principal pour générer un exercice adapté
   * @param {string} chapterId - Identifiant du chapitre (ex: 'N1', 'G0', '4N1', '5N1', etc.)
   * @param {number|null} tier - Palier de difficulté forcé (1 à 4) ou null pour auto-détection
   * @param {number|null} mastery - Taux de maîtrise (0-100%) si disponible
   */
  generateForChapter(chapterId, tier = null, mastery = null) {
    // Résolution du palier cible
    let resolvedTier = 1;
    if (tier !== null && tier !== undefined) {
      resolvedTier = parseInt(tier, 10);
    } else if (mastery !== null && mastery !== undefined) {
      const m = parseFloat(mastery);
      if (m < 25) resolvedTier = 1;
      else if (m < 50) resolvedTier = 2;
      else if (m < 75) resolvedTier = 3;
      else resolvedTier = 4;
    } else if (typeof window !== 'undefined' && window.MathsAdaptiveEngine && window.MathsAdaptiveEngine.state) {
      resolvedTier = window.MathsAdaptiveEngine.state.currentTier || 1;
    }

    if (isNaN(resolvedTier) || resolvedTier < 1 || resolvedTier > 4) {
      resolvedTier = 1;
    }

    let q;
    switch (chapterId) {
      // 5ème (16 chapitres)
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
      case '4A1': q = this.generate4A1(resolvedTier, mastery); break;

      // 3ème
      case 'N1': q = this.generateN1(resolvedTier, mastery); break;
      case 'N2': q = this.generateN2(resolvedTier, mastery); break;
      case 'N3': q = this.generateN3(resolvedTier, mastery); break;
      case 'N4': q = this.generateN4(resolvedTier, mastery); break;
      case 'N5': q = this.generateN5(resolvedTier, mastery); break;
      case 'G0': q = this.generateG0(resolvedTier, mastery); break;
      case 'G1': q = this.generateG1(resolvedTier, mastery); break;
      case 'G2': q = this.generateG2(resolvedTier, mastery); break;
      case 'G3': q = this.generateG3(resolvedTier, mastery); break;
      case 'G4': q = this.generateG4(resolvedTier, mastery); break;
      case 'G5': q = this.generateG5(resolvedTier, mastery); break;
      case 'G6': q = this.generateG6(resolvedTier, mastery); break;
      case 'G7': q = this.generateG7(resolvedTier, mastery); break;
      case 'Org1': q = this.generateOrg1(resolvedTier, mastery); break;
      case 'Org2': q = this.generateOrg2(resolvedTier, mastery); break;
      case 'Org3': q = this.generateOrg3(resolvedTier, mastery); break;
      case 'Org4': q = this.generateOrg4(resolvedTier, mastery); break;
      case 'Algo': q = this.generateAlgo(resolvedTier, mastery); break;

      default: {
        const exos = (typeof window !== 'undefined' && window.MATHS_EXERCISES && window.MATHS_EXERCISES[chapterId]) ? window.MATHS_EXERCISES[chapterId] : [];
        if (exos.length) {
          const matchingTierExos = exos.filter(e => e.tier === resolvedTier);
          const pool = matchingTierExos.length > 0 ? matchingTierExos : exos;
          const base = this.randChoice(pool);
          q = Object.assign({}, base, { id: `${base.id}-dyn-${Date.now()}` });
        } else {
          q = this.generateN1(resolvedTier, mastery);
        }
        break;
      }
    }

    if (q) {
      if (!q.id) {
        q.id = `${chapterId}-gen-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      }
      if (!q.chapterId) {
        q.chapterId = chapterId;
      }
      if (!q.tier) {
        q.tier = resolvedTier;
      }
      if (q.type === 'mcq') {
        this.shuffleMcq(q);
      }
    }
    return q;
  },

  /**
   * Mélange aléatoirement les options d'un QCM pour garantir
   * que la bonne réponse ne soit JAMAIS prévisible ou toujours en 1ère position
   */
  shuffleMcq(exo) {
    if (!exo || exo.type !== 'mcq') return exo;

    // Normalisation options / choices
    if (!exo.options && exo.choices) {
      exo.options = [...exo.choices];
    }
    if (!exo.options || exo.options.length <= 1) return exo;

    let correctIdx = (exo.correctIndex !== undefined) ? exo.correctIndex : exo.options.indexOf(exo.answer);
    if (correctIdx === -1) correctIdx = 0;

    const items = exo.options.map((opt, i) => ({
      opt,
      exp: exo.explanations ? exo.explanations[i] : null,
      isCorrect: i === correctIdx
    }));

    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    exo.options = items.map(it => it.opt);
    exo.choices = exo.options;
    if (exo.explanations) {
      exo.explanations = items.map(it => it.exp);
    }
    exo.correctIndex = items.findIndex(it => it.isCorrect);
    exo.answer = exo.options[exo.correctIndex];
    exo._mcqShuffled = true;
    return exo;
  },

  /**
   * Génère une série de N questions aléatoires pour un ou plusieurs chapitres
   * avec une progression de difficulté automatique et calibrée (Paliers 1 à 4)
   */
  generateSeries(chapterIds = ['N1'], count = 5) {
    const series = [];
    for (let i = 0; i < count; i++) {
      const cid = chapterIds[i % chapterIds.length];

      // Progression naturelle sur la série :
      // Premier quart : Palier 1 (Socle)
      // Deuxième quart : Palier 2 (Guidé)
      // Troisième quart : Palier 3 (Brevet)
      // Fin de série : Palier 4 (Défi Seconde / Difficulté Maximale)
      let tier = 1;
      const progress = i / Math.max(1, count - 1);
      if (progress >= 0.8) tier = 4;
      else if (progress >= 0.5) tier = 3;
      else if (progress >= 0.25) tier = 2;
      else tier = 1;

      const q = this.generateForChapter(cid, tier);
      q.seriesIndex = i + 1;
      series.push(q);
    }
    return series;
  }
};

