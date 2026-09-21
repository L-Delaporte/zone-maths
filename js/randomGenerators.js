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
      // Palier 1 : Socle (Addition même dénominateur ou produit simple)
      const isAdd = Math.random() > 0.5;
      if (isAdd) {
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
      } else {
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
      }
    } else if (t === 2) {
      // Palier 2 : Guidé (Dénominateurs multiples ou division)
      const isDiv = Math.random() > 0.5;
      if (isDiv) {
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
      } else {
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
      }
    } else if (t === 3) {
      // Palier 3 : Brevet (Priorités opératoires type examen)
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
      // Palier 1 : Socle (Simple distributivité ou réduction)
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Identités remarquables de base (x+a)^2, (x-a)^2, (x-a)(x+a))
      const type = this.randChoice(['id1', 'id2', 'id3']);
      const b = this.randInt(2, 8);
      const b2 = b * b;
      const twoB = 2 * b;

      if (type === 'id1') {
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
      // Palier 1 : Socle (Produit ou quotient simple de puissances de 10)
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Quotient avec exposants négatifs ou puissance de puissance)
      const n = this.randInt(-4, 7);
      const m = this.randInt(-5, 6, [n]);
      const diff = n - m;
      return {
        chapterId: 'N3',
        tier: 2,
        title: "Quotient de puissances de 10",
        statement: `Écrire sous la forme $10^k$ :\n$$B = \\frac{10^{${n}}}{10^{${m}}}$$`,
        type: 'exact',
        answer: `10^${diff}`,
        placeholder: "Ex: 10^3",
        hint1: "Formule : $\\frac{10^n}{10^m} = 10^{n - m}$. Attention aux signes !",
        solution: `$$B = 10^{${n} - (${m})} = 10^{${diff}}$$`
      };
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
      // Palier 1 : Socle (Équation élémentaire ax = b)
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
    } else if (t === 2) {
      // Palier 2 : Guidé (ax + b = c ou x^2 = a)
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
    } else if (t === 3) {
      // Palier 3 : Brevet (ax + b = cx + d ou équation produit nul)
      const isProdNul = Math.random() > 0.5;
      if (isProdNul) {
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
      } else {
        const a = this.randInt(4, 7);
        const c = this.randInt(2, 3);
        const xSol = this.randInt(1, 6);
        const d = this.randInt(1, 8);
        // ax + b = cx + d => b = cx + d - ax = d - (a-c)x
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
      // Palier 1 : Socle (Reconnaissance d'un nombre premier)
      const primes = [17, 19, 23, 29, 31, 37, 41, 43];
      const p = this.randChoice(primes);
      const comps = [21, 25, 27, 33, 35, 39, 45, 49];
      const c = this.randChoice(comps);
      return {
        chapterId: 'N5',
        tier: 1,
        title: "Reconnaissance d'un nombre premier",
        statement: `Parmi les nombres suivants, lequel est un **nombre premier** ?`,
        type: 'mcq',
        options: [`$${p}$`, `$${c}$`, `$${c + 2}$`, `$1$`],
        correctIndex: 0,
        explanations: [
          `Bravo ! $${p}$ n'admet que deux diviseurs : 1 et lui-même.`,
          `Non, $${c}$ est composé.`,
          `Non, ce n'est pas un nombre premier.`,
          `Attention ! 1 n'est pas premier par convention (un seul diviseur).`
        ],
        hint1: "Un nombre premier n'a exactement que deux diviseurs distincts : 1 et lui-même.",
        solution: `Le nombre **$${p}$** est premier.`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Décomposition d'un nombre à 2 chiffres)
      const list = [
        { n: 24, decomp: "2^3 \\times 3" },
        { n: 36, decomp: "2^2 \\times 3^2" },
        { n: 40, decomp: "2^3 \\times 5" },
        { n: 48, decomp: "2^4 \\times 3" },
        { n: 56, decomp: "2^3 \\times 7" },
        { n: 60, decomp: "2^2 \\times 3 \\times 5" }
      ];
      const item = this.randChoice(list);
      return {
        chapterId: 'N5',
        tier: 2,
        title: "Décomposition en facteurs premiers",
        statement: `Quelle est la décomposition en produit de facteurs premiers de $${item.n}$ ?`,
        type: 'mcq',
        options: [
          `$${item.decomp}$`,
          `$${item.n / 2} \\times 2$`,
          `$${item.n / 3} \\times 3$`,
          `$${item.n}$`
        ],
        correctIndex: 0,
        explanations: [
          `Exact ! Tous les facteurs sont premiers.`,
          `Non, les facteurs doivent être premiers.`,
          `Non, ce n'est pas complet.`,
          `Ce n'est pas une décomposition.`
        ],
        hint1: "Divise successivement par 2, puis par 3, 5...",
        solution: `$$${item.n} = ${item.decomp}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Fraction irréductible via décomposition de nombres à 3 chiffres)
      const pairs = [
        { n: 120, d: 180, sN: 2, sD: 3, pgcd: 60 },
        { n: 168, d: 252, sN: 2, sD: 3, pgcd: 84 },
        { n: 140, d: 210, sN: 2, sD: 3, pgcd: 70 },
        { n: 210, d: 315, sN: 2, sD: 3, pgcd: 105 },
        { n: 126, d: 210, sN: 3, sD: 5, pgcd: 42 }
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
        hint1: `Décompose ${item.n} et ${item.d} en facteurs premiers puis simplifie les facteurs communs.`,
        solution: `$$\\text{PGCD}(${item.n}, ${item.d}) = ${item.pgcd}$$\n$$F = \\frac{${item.n} \\div ${item.pgcd}}{${item.d} \\div ${item.pgcd}} = \\frac{${item.sN}}{${item.sD}}$$`
      };
    } else {
      // Palier 4 : DÉFI SECONDE / DIFFICULTÉ MAXIMALE (Problème de pavage maximal avec grands nombres)
      const mults = [12, 18, 24];
      const g = this.randChoice(mults);
      const a = this.randInt(3, 7);
      const b = this.randInt(4, 9, [a]);
      const L = a * g;
      const l = b * g;
      const tilesCount = a * b;

      return {
        chapterId: 'N5',
        tier: 4,
        title: "Défi Seconde : Pavage d'un rectangle par des dalles carrées maximales",
        statement: `Une pièce rectangulaire de dimensions $L = ${Math.max(L, l)}\\text{ cm}$ et $l = ${Math.min(L, l)}\\text{ cm}$ doit être pavée entièrement avec des dalles carrées identiques les plus grandes possibles, sans découpe.\n1. Quel est le côté d'une dalle en cm ? (C'est le PGCD = ${g} cm)\n**Question : Combien de dalles faudra-t-il au total pour couvrir toute la pièce ?**`,
        type: 'exact',
        answer: String(tilesCount),
        placeholder: `Ex: ${tilesCount}`,
        hint1: `Le côté d'une dalle est le PGCD de ${L} et ${l} (ici ${g} cm). Calcule combien de dalles rentrent en longueur et en largeur.`,
        hint2: `En longueur : $\\frac{${Math.max(L, l)}}{${g}} = ${Math.max(a, b)}$ dalles. En largeur : $\\frac{${Math.min(L, l)}}{${g}} = ${Math.min(a, b)}$ dalles. Multiplie les deux.`,
        solution: `1. Côté maximal d'une dalle : $\\text{PGCD}(${L}, ${l}) = ${g}\\text{ cm}$.\n2. Nombre de dalles en longueur : $\\frac{${Math.max(L, l)}}{${g}} = ${Math.max(a, b)}$.\n3. Nombre de dalles en largeur : $\\frac{${Math.min(L, l)}}{${g}} = ${Math.min(a, b)}$.\n4. Nombre total de dalles :\n$$N = ${a} \\times ${b} = ${tilesCount}\\text{ dalles}$$`
      };
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
      // Palier 1 : Socle (Triangles emboîtés, rapport entier k)
      const k = this.randChoice([2, 3]);
      const am = this.randInt(3, 6);
      const ab = am * k;
      const an = this.randInt(4, 7);
      const ac = an * k;

      return {
        chapterId: 'G1',
        tier: 1,
        title: "Thalès direct (Configuration emboîtée)",
        statement: `Soit un triangle $ABC$ avec $M \\in [AB]$, $N \\in [AC]$ et $(MN) \\parallel (BC)$.\nOn donne $AM = ${am}\\text{ cm}$, $AB = ${ab}\\text{ cm}$ et $AN = ${an}\\text{ cm}$.\n**Calculer la longueur $AC$.**`,
        type: 'exact',
        answer: String(ac),
        placeholder: `Ex: ${ac}`,
        hint1: `D'après le théorème de Thalès : $\\frac{AM}{AB} = \\frac{AN}{AC}$. Utilise le produit en croix.`,
        solution: `Les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont alignés dans cet ordre, et $(MN) \\parallel (BC)$.\nD'après le théorème de Thalès :\n$$\\frac{AM}{AB} = \\frac{AN}{AC} \\implies \\frac{${am}}{${ab}} = \\frac{${an}}{AC}$$\n$$AC = \\frac{${ab} \\times ${an}}{${am}} = ${ac}\\text{ cm}$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Calcul d'un segment avec soustraction préalable)
      const am = this.randInt(4, 8);
      const mb = this.randInt(2, 6);
      const ab = am + mb;
      const mn = this.randInt(3, 7);
      const mult = this.randChoice([2, 3]);
      const bc = mn * mult;
      // Pour avoir des entiers : AM / AB = MN / BC => am / ab = 1 / mult
      const trueAm = 4;
      const trueMb = 4 * (mult - 1);
      const trueAb = trueAm * mult;
      const trueBc = mn * mult;

      return {
        chapterId: 'G1',
        tier: 2,
        title: "Thalès avec calcul de longueur totale",
        statement: `Dans le triangle $ABC$, $M \\in [AB]$, $N \\in [AC]$ et $(MN) \\parallel (BC)$.\nOn donne $AM = ${trueAm}\\text{ cm}$, $MB = ${trueMb}\\text{ cm}$ et $MN = ${mn}\\text{ cm}$.\n**Calculer la longueur de la base $BC$.**`,
        type: 'exact',
        answer: String(trueBc),
        placeholder: `Ex: ${trueBc}`,
        hint1: `Calcule d'abord la longueur totale $AB = AM + MB = ${trueAm} + ${trueMb} = ${trueAb}\\text{ cm}$. Puis applique Thalès.`,
        solution: `1. Calcul de $AB$ : $AB = AM + MB = ${trueAm} + ${trueMb} = ${trueAb}\\text{ cm}$.\n2. D'après le théorème de Thalès :\n$$\\frac{AM}{AB} = \\frac{MN}{BC} \\implies \\frac{${trueAm}}{${trueAb}} = \\frac{${mn}}{BC}$$\n$$BC = \\frac{${trueAb} \\times ${mn}}{${trueAm}} = ${trueBc}\\text{ cm}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Configuration papillon croisée)
      const k = this.randChoice([1.5, 2, 2.5]);
      const oa = this.randInt(3, 6) * 2;
      const ob = oa * k;
      const om = this.randInt(3, 5) * 2;
      const on = om * k;

      return {
        chapterId: 'G1',
        tier: 3,
        title: "Thalès en configuration papillon (Droites sécantes)",
        statement: `Les droites $(AB)$ et $(CD)$ sont sécantes en $O$, et $(AC) \\parallel (BD)$.\nOn donne $OA = ${oa}\\text{ cm}$, $OB = ${ob}\\text{ cm}$ et $OC = ${om}\\text{ cm}$.\n**Calculer la longueur $OD$.**`,
        type: 'exact',
        answer: String(on),
        placeholder: `Ex: ${on}`,
        hint1: `Dans la configuration papillon de sommet $O$ : $\\frac{OA}{OB} = \\frac{OC}{OD}$.`,
        solution: `Les droites $(AB)$ et $(CD)$ sont sécantes en $O$, et $(AC) \\parallel (BD)$.\nD'après le théorème de Thalès :\n$$\\frac{OA}{OB} = \\frac{OC}{OD} \\implies \\frac{${oa}}{${ob}} = \\frac{${om}}{OD}$$\n$$OD = \\frac{${ob} \\times ${om}}{${oa}} = ${on}\\text{ cm}$$`
      };
    } else {
      // Palier 4 : Défi Seconde (Thalès avec inconnue algébrique x)
      // AM = x, AB = x + c, AN = a, AC = a + b => x / (x + c) = a / (a + b) => x*b = a*c => x = (a*c)/b
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
      // Palier 1 : Socle (Formule SOH CAH TOA)
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
      // Palier 2 : Guidé (Calcul de longueur avec cosinus ou sinus donné)
      const angle = 60; // cos(60°) = 0.5
      const hyp = this.randInt(4, 12) * 2;
      const adj = hyp / 2;

      return {
        chapterId: 'G2',
        tier: 2,
        title: "Calcul de côté avec le cosinus (Angle remarquable)",
        statement: `Soit $ABC$ un triangle rectangle en $A$ tel que $\\widehat{B} = 60^\\circ$ et l'hypoténuse $BC = ${hyp}\\text{ cm}$.\n*(On rappelle que $\\cos(60^\\circ) = 0{,}5$)*\n\n**Calculer la longueur du côté adjacent $AB$.**`,
        type: 'exact',
        answer: String(adj),
        placeholder: `Ex: ${adj}`,
        hint1: `$\\cos(\\widehat{B}) = \\frac{AB}{BC} \\implies AB = BC \\times \\cos(60^\\circ)$.`,
        solution: `Dans le triangle $ABC$ rectangle en $A$ :\n$$\\cos(\\widehat{B}) = \\frac{AB}{BC} \\implies AB = BC \\times \\cos(60^\\circ)$$\n$$AB = ${hyp} \\times 0{,}5 = ${adj}\\text{ cm}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Calcul d'angle avec tangente ou sinus)
      // Triangle 3-4-5 ou 5-12-13
      const triplets = [
        { a: 3, b: 4, c: 5, angle: 53 }, // tan(B) = 4/3 => ~53°
        { a: 5, b: 12, c: 13, angle: 67 } // tan(B) = 12/5 => ~67°
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
      // Palier 4 : Défi Seconde (Relation fondamentale cos²(x) + sin²(x) = 1)
      const pairs = [
        { numCos: 3, den: 5, numSin: 4 },   // 3/5 et 4/5
        { numCos: 5, den: 13, numSin: 12 }, // 5/13 et 12/13
        { numCos: 8, den: 17, numSin: 15 }  // 8/17 et 15/17
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
        solution: `D'après la relation fondamentale de la trigonométrie :\n$$\\cos^2(\\alpha) + \\sin^2(\\alpha) = 1$$\n$$\\sin^2(\\alpha) = 1 - \\cos^2(\\alpha) = 1 - \\left(\\frac{${p.numCos}}{${p.den}}\\right)^2 = 1 - \\frac{${p.numCos*p.numCos}}{${p.den*p.den}}$$\n$$\\sin^2(\\alpha) = \\frac{${p.den*p.den} - ${p.numCos*p.numCos}}{${p.den*p.den}} = \\frac{${p.numSin*p.numSin}}{${p.den*p.den}}$$\nComme $\\alpha$ est aigu, $\\sin(\\alpha) > 0$ :\n$$\\sin(\\alpha) = \\sqrt{\\frac{${p.numSin*p.numSin}}{${p.den*p.den}}} = \\frac{${p.numSin}}{${p.den}}$$`
      };
    }
  },

  // --- G3 : Homothéties et Agrandissement / Réduction ---
  generateG3(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Rapport d'homothétie positif simple sur une longueur)
      const k = this.randChoice([2, 3, 4]);
      const l = this.randInt(4, 9);
      const lPrime = l * k;

      return {
        chapterId: 'G3',
        tier: 1,
        title: "Homothétie et agrandissement de longueur",
        statement: `Une homothétie de centre $O$ et de rapport $k = ${k}$ transforme un segment $[AB]$ de longueur $AB = ${l}\\text{ cm}$ en un segment $[A'B']$.\n**Quelle est la longueur du segment $[A'B']$ ?**`,
        type: 'exact',
        answer: String(lPrime),
        placeholder: `Ex: ${lPrime}`,
        hint1: `Dans une homothétie de rapport $k$, toutes les longueurs sont multipliées par $|k| = ${k}$.`,
        solution: `La longueur image est donnée par :\n$$A'B' = k \\times AB = ${k} \\times ${l} = ${lPrime}\\text{ cm}$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Homothétie de rapport négatif)
      const k = this.randChoice([-2, -3]);
      const dist = this.randInt(3, 8);
      const imgDist = Math.abs(k) * dist;

      return {
        chapterId: 'G3',
        tier: 2,
        title: "Homothétie de rapport négatif",
        statement: `Soit une homothétie de centre $O$ et de rapport $k = ${k}$.\nUn point $M$ est situé à une distance $OM = ${dist}\\text{ cm}$ du centre.\n**À quelle distance du centre $O$ se trouve le point image $M'$ ?**`,
        type: 'exact',
        answer: String(imgDist),
        placeholder: `Ex: ${imgDist}`,
        hint1: `Attention : une distance est toujours positive ! La distance est multipliée par $|k| = ${Math.abs(k)}$. (Le signe '-' indique seulement que $M'$ est de l'autre côté de $O$).`,
        solution: `Pour une homothétie de rapport $k = ${k}$ :\n$$OM' = |k| \\times OM = ${Math.abs(k)} \\times ${dist} = ${imgDist}\\text{ cm}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Effet du rapport k sur les aires : k²)
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
        solution: `Lors d'un agrandissement de rapport $k = ${k}$ :\n$$\\mathcal{A}' = k^2 \\times \\mathcal{A} = ${k}^2 \\times ${aire} = ${k*k} \\times ${aire} = ${airePrime}\\text{ cm}^2$$`
      };
    } else {
      // Palier 4 : Défi Seconde (Effet sur les volumes k³ et tronc de solide)
      const k = 2; // agrandissement x2 => volume x 8
      const vInitial = this.randInt(12, 35);
      const vTotal = vInitial * 8;
      const vTronc = vTotal - vInitial; // vTotal - vInitial = 7 * vInitial

      return {
        chapterId: 'G3',
        tier: 4,
        title: "Défi Seconde : Effet sur les volumes ($k^3$) et volume d'un tronc",
        statement: `Une petite pyramide de volume $\\mathcal{V}_1 = ${vInitial}\\text{ cm}^3$ est agrandie d'un rapport $k = ${k}$ pour former une grande pyramide de volume $\\mathcal{V}_2$.\nOn retire ensuite la petite pyramide du sommet pour ne conserver que le tronc de pyramide restant.\n\n**Calculer le volume $\\mathcal{V}_{\\text{tronc}}$ de ce tronc de pyramide en $\\text{cm}^3$.**`,
        type: 'exact',
        answer: String(vTronc),
        placeholder: `Ex: ${vTronc}`,
        hint1: `1. Les volumes sont multipliés par $k^3 = ${k}^3 = ${k*k*k}$. Calcule $\\mathcal{V}_2 = ${k*k*k} \\times ${vInitial}$.\n2. Le volume du tronc est la différence : $\\mathcal{V}_{\\text{tronc}} = \\mathcal{V}_2 - \\mathcal{V}_1$.`,
        solution: `1. Volume de la grande pyramide agrandie par le rapport $k = ${k}$ :\n$$\\mathcal{V}_2 = k^3 \\times \\mathcal{V}_1 = ${k}^3 \\times ${vInitial} = 8 \\times ${vInitial} = ${vTotal}\\text{ cm}^3$$\n2. Volume du tronc restant :\n$$\\mathcal{V}_{\\text{tronc}} = \\mathcal{V}_2 - \\mathcal{V}_1 = ${vTotal} - ${vInitial} = ${vTronc}\\text{ cm}^3$$`
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
      // Palier 1 : Socle (Effet d'une translation ou symétrie sur les longueurs)
      const l = this.randInt(5, 15);
      return {
        chapterId: 'G7',
        tier: 1,
        title: "Conservation des longueurs par translation",
        statement: `Un segment $[AB]$ mesure $AB = ${l}\\text{ cm}$. On applique une translation qui transforme $A$ en $A'$ et $B$ en $B'$.\n**Quelle est la longueur du segment $[A'B']$ ?**`,
        type: 'exact',
        answer: String(l),
        placeholder: `Ex: ${l}`,
        hint1: `Une translation conserve les longueurs (c'est une isométrie). Le segment transformé a donc exactement la même longueur.`,
        solution: `Une translation est un déplacement sans déformation qui conserve les longueurs :\n$$A'B' = AB = ${l}\\text{ cm}$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Rotation d'angle variable)
      const ang = this.randChoice([45, 60, 75, 90, 120, 135, 150]);
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
    } else if (t === 3) {
      // Palier 3 : Brevet (Triangles semblables - calcul d'un côté homologue)
      const k = this.randChoice([1.5, 2, 2.5, 3]);
      const a = this.randInt(3, 7);
      const aPrime = a * k;
      const b = this.randInt(4, 8);
      const bPrime = b * k;

      return {
        chapterId: 'G7',
        tier: 3,
        title: "Triangles semblables (Côtés homologues proportionnels)",
        statement: `Deux triangles $ABC$ et $DEF$ sont semblables. Le côté $[AB]$ de longueur $AB = ${a}\\text{ cm}$ correspond au côté $[DE]$ de longueur $DE = ${aPrime}\\text{ cm}$.\nSachant que le côté $[BC] = ${b}\\text{ cm}$, **calculer la longueur de son côté homologue $[EF]$.**`,
        type: 'exact',
        answer: String(bPrime),
        placeholder: `Ex: ${bPrime}`,
        hint1: `Dans deux triangles semblables, les longueurs des côtés homologues sont proportionnelles : $k = \\frac{DE}{AB} = \\frac{${aPrime}}{${a}} = ${k}$.`,
        solution: `Le coefficient de proportionnalité entre les deux triangles est :\n$$k = \\frac{DE}{AB} = \\frac{${aPrime}}{${a}} = ${k}$$\nPar conséquent :\n$$EF = k \\times BC = ${k} \\times ${b} = ${bPrime}\\text{ cm}$$`
      };
    } else {
      // Palier 4 : Défi Seconde (Aires de triangles semblables : k²)
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
    }
  },


  // =========================================================================
  // ORGANISATION DE DONNÉES & ALGORITHMIQUE 3ème - PALIERS 1 À 4
  // =========================================================================

  // --- Org1 : Notion de fonctions et fonctions affines ---
  generateOrg1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Calcul d'image direct)
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Calcul d'antécédent)
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
    } else if (t === 3) {
      // Palier 3 : Brevet (Coefficient directeur d'une fonction affine)
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
      // Palier 4 : Défi Seconde (Intersection de deux droites affines f(x) = g(x))
      // f(x) = a1*x + b1, g(x) = a2*x + b2. Résoudre (a1 - a2)*x = b2 - b1
      const xInt = this.randInt(-4, 5, [0]);
      const a1 = this.randInt(2, 5);
      const a2 = this.randInt(-4, -1); // a1 != a2
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
      // Palier 1 : Socle (Moyenne simple de 4 valeurs entières)
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Médiane d'une série ordonnée de 5 valeurs)
      const base = this.randInt(8, 14);
      const vals = [base - 4, base - 2, base, base + 3, base + 5];

      return {
        chapterId: 'Org2',
        tier: 2,
        title: "Détermination de la médiane",
        statement: `On a ordonné une série de 5 valeurs dans l'ordre croissant :\n$$${vals.join(' \\le ')}$$\n**Quelle est la valeur médiane de cette série statistique ?**`,
        type: 'exact',
        answer: String(base),
        placeholder: `Ex: ${base}`,
        hint1: `L'effectif total est impair ($N = 5$). La médiane est la 3ème valeur : $\\frac{5 + 1}{2} = 3$.`,
        solution: `L'effectif total est $N = 5$.\nLa médiane est la valeur centrale qui partage la série en deux sous-groupes de même effectif (2 valeurs en-dessous, 2 valeurs au-dessus).\nC'est la 3ème valeur :\n$$\\text{Médiane} = ${base}$$`
      };
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
        solution: `$$X = ${n} \\times ${step} = ${total}$$`
      };
    } else if (t === 2) {
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
        solution: `Comme $${vInitial} ${isGreater ? '>' : '\\le'} ${threshold}$, c'est la branche **${isGreater ? 'ALORS' : 'SINON'}** qui s'exécute :\n$$A = ${isGreater ? `${vInitial} \\times 2 = ${finalVal}` : `${vInitial} + 10 = ${finalVal}`}$$`
      };
    } else if (t === 3) {
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
        solution: `La variable $x$ est initialisée à 1, puis multipliée $${iters}$ fois par $${mult}$ :\n$$x = 1 \\times \\underbrace{${mult} \\times \\dots \\times ${mult}}_{${iters}\\text{ fois}} = ${mult}^{${iters}} = ${val}$$`
      };
    } else {
      // Palier 4 : Défi Seconde (Boucle conditionnelle Tant que avec 2 variables)
      // while A < M: A = A * 2, B = B + 1
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
      // Palier 1 : Socle (Produit de 2 relatifs)
      const a = this.randInt(-9, -2);
      const b = this.randChoice([this.randInt(2, 9), this.randInt(-9, -2)]);
      const ans = a * b;
      return {
        chapterId: '4N1',
        tier: 1,
        title: "Produit de deux nombres relatifs (4ème)",
        statement: `Calculer le produit suivant :\n$$P = (${a}) \\times (${b < 0 ? b : '+' + b})$$`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: "Règle des signes : le produit de deux nombres de même signe est positif, de signes contraires est négatif.",
        solution: `$$(${a}) \\times (${b < 0 ? b : '+' + b}) = ${ans}$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Produit de 3 relatifs signés)
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
    } else if (t === 3) {
      // Palier 3 : Brevet / 4e (Opérations combinées : multiplication et soustraction)
      const a = this.randInt(-8, -2);
      const b = this.randInt(3, 7);
      const c = this.randInt(-6, -2);
      const d = this.randInt(-5, -2);
      // P = a * b - c * d
      const prod1 = a * b;
      const prod2 = c * d;
      const ans = prod1 - prod2;

      return {
        chapterId: '4N1',
        tier: 3,
        title: "Priorités opératoires avec relatifs",
        statement: `Calculer l'expression numérique suivante :\n$$E = (${a}) \\times ${b} - (${c}) \\times (${d})$$`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: "La multiplication est prioritaire sur la soustraction. Calcule d'abord les deux produits séparément.",
        solution: `1. Premier produit : $(${a}) \\times ${b} = ${prod1}$.\n2. Deuxième produit : $(${c}) \\times (${d}) = ${prod2}$.\n3. Différence finale :\n$$E = ${prod1} - (${prod2}) = ${ans}$$`
      };
    } else {
      // Palier 4 : Défi 3ème / Difficulté Maximale (Quotient avec puissances et crochets)
      // Ex: [(-4)*(-6)*(-5)] / [(-2)*15] - (-3)^2 * (-1)^5 = (-120)/(-30) - 9*(-1) = 4 - (-9) = 13
      const configs = [
        {
          numStr: "(-4) \\times (-6) \\times (-5)",
          denStr: "(-2) \\times 15",
          numVal: -120, denVal: -30, qVal: 4,
          powerPart: "(-3)^2 \\times (-1)^5",
          powerVal: 9 * (-1), // -9
          ans: 13, // 4 - (-9) = 13
          textExpr: "\\frac{(-4) \\times (-6) \\times (-5)}{(-2) \\times 15} - (-3)^2 \\times (-1)^5"
        },
        {
          numStr: "(-8) \\times 9 \\times (-2)",
          denStr: "(-6) \\times (-4)",
          numVal: 144, denVal: 24, qVal: 6,
          powerPart: "(-2)^3 \\times (-2)",
          powerVal: -8 * (-2), // 16
          ans: 22, // 6 + 16 = 22
          textExpr: "\\frac{(-8) \\times 9 \\times (-2)}{(-6) \\times (-4)} + (-2)^3 \\times (-2)"
        },
        {
          numStr: "(-10) \\times (-7) \\times (-3)",
          denStr: "(-5) \\times 6",
          numVal: -210, denVal: -30, qVal: 7,
          powerPart: "(-4)^2 \\times (-1)^3",
          powerVal: 16 * (-1), // -16
          ans: 23, // 7 - (-16) = 23
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
      // Palier 1 : Socle (Produit de deux fractions simples)
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Division de deux fractions)
      const a = this.randInt(2, 6);
      const b = this.randInt(3, 7);
      const c = this.randInt(2, 6);
      const d = this.randInt(3, 7);
      // a/b / c/d = a*d / b*c
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
    } else if (t === 3) {
      // Palier 3 : Brevet (Addition et multiplication combinées)
      // a/b + c/d * e/f
      const a = this.randInt(1, 4);
      const b = this.randChoice([2, 3, 5]);
      const c = this.randInt(1, 3);
      const d = this.randChoice([2, 4]);
      const e = this.randInt(1, 3);
      const f = this.randChoice([3, 5]);

      const prodNum = c * e;
      const prodDen = d * f;
      // Somme a/b + prodNum/prodDen
      const numTotal = a * prodDen + prodNum * b;
      const denTotal = b * prodDen;
      const [sN, sD] = this.simplifyFraction(numTotal, denTotal);

      return {
        chapterId: '4N2',
        tier: 3,
        title: "Opérations combinées avec fractions (Priorités)",
        statement: `Calculer sous forme de fraction irréductible :\n$$A = \\frac{${a}}{${b}} + \\frac{${c}}{${d}} \\times \\frac{${e}}{${f}}$$`,
        type: 'exact',
        answer: sD === 1 ? String(sN) : `${sN}/${sD}`,
        placeholder: "Ex: 7/10",
        hint1: `La multiplication est prioritaire : calcule d'abord $\\frac{${c}}{${d}} \\times \\frac{${e}}{${f}} = \\frac{${prodNum}}{${prodDen}}$, puis mets au même dénominateur pour additionner avec $\\frac{${a}}{${b}}$.`,
        solution: `1. Multiplication prioritaire :\n$$\\frac{${c}}{${d}} \\times \\frac{${e}}{${f}} = \\frac{${prodNum}}{${prodDen}}$$\n2. Addition :\n$$A = \\frac{${a}}{${b}} + \\frac{${prodNum}}{${prodDen}} = \\frac{${a * prodDen}}{${denTotal}} + \\frac{${prodNum * b}}{${denTotal}} = \\frac{${numTotal}}{${denTotal}} = ${this.formatFraction(numTotal, denTotal)}$$`
      };
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
      // Palier 1 : Socle (Écriture décimale d'une puissance de 10)
      const exp = this.randInt(2, 5);
      const isPos = Math.random() > 0.4;
      const actualExp = isPos ? exp : -exp;
      const ans = Math.pow(10, actualExp);

      return {
        chapterId: '4N3',
        tier: 1,
        title: "Écriture décimale d'une puissance de 10",
        statement: `Écrire sous forme décimale le nombre suivant :\n$$N = 10^{${actualExp}}$$`,
        type: 'exact',
        answer: String(ans),
        placeholder: isPos ? "Ex: 1000" : "Ex: 0.01",
        hint1: actualExp > 0 ? `Un 1 suivi de ${actualExp} zéros.` : `Le chiffre 1 placé au rang ${Math.abs(actualExp)} après la virgule.`,
        solution: `$$10^{${actualExp}} = ${ans}$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Produit ou quotient de puissances de 10)
      const a = this.randInt(-5, 6);
      const b = this.randInt(-5, 6, [0]);
      const isMult = Math.random() > 0.5;
      const ansExp = isMult ? (a + b) : (a - b);

      return {
        chapterId: '4N3',
        tier: 2,
        title: `${isMult ? 'Produit' : 'Quotient'} de puissances de 10`,
        statement: `Écrire sous la forme d'une seule puissance de 10 : $10^n$.\n**Donner la valeur de l'exposant $n$** pour :\n$$${isMult ? `10^{${a}} \\times 10^{${b}}` : `\\frac{10^{${a}}}{10^{${b}}}`}$$`,
        type: 'exact',
        answer: String(ansExp),
        placeholder: `Ex: ${ansExp}`,
        hint1: isMult ? "Formule : $10^a \\times 10^b = 10^{a + b}$." : "Formule : $\\frac{10^a}{10^b} = 10^{a - b}$.",
        solution: isMult ?
          `$$10^{${a}} \\times 10^{${b}} = 10^{${a} + (${b})} = 10^{${ansExp}} \\implies n = ${ansExp}$$` :
          `$$\\frac{10^{${a}}}{10^{${b}}} = 10^{${a} - (${b})} = 10^{${ansExp}} \\implies n = ${ansExp}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Notation scientifique simple)
      const a = this.randInt(2, 9);
      const exp = this.randChoice([4, 5, 6, -3, -4]);
      const val = (a * Math.pow(10, exp)).toLocaleString('fr-FR');

      return {
        chapterId: '4N3',
        tier: 3,
        title: "Notation scientifique d'un nombre",
        statement: `Donner l'écriture scientifique du nombre $N = ${val}$.\nQuelle est la valeur de l'exposant $k$ dans l'écriture $${a} \\times 10^k$ ?`,
        type: 'exact',
        answer: String(exp),
        placeholder: `Ex: ${exp}`,
        hint1: "La notation scientifique s'écrit $a \\times 10^k$ avec $1 \\le a < 10$. Compte de combien de rangs on décale la virgule.",
        solution: `$$${val} = ${a} \\times 10^{${exp}} \\implies k = ${exp}$$`
      };
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
      // Palier 1 : Socle (Carré d'un entier remarquable)
      const a = this.randInt(4, 12);
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Racine carrée exacte)
      const roots = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
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
    } else if (t === 3) {
      // Palier 3 : Brevet (Somme et différence de racines carrées)
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
      // Palier 1 : Socle (Simple distributivité k(ax + b))
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Équation simple ax + b = c)
      const a = this.randInt(2, 7);
      const x = this.randInt(-5, 8);
      const b = this.randInt(1, 9);
      const sign = this.randChoice(['+', '-']);
      const bVal = sign === '+' ? b : -b;
      const c = a * x + bVal;

      return {
        chapterId: '4N5',
        tier: 2,
        title: "Résolution d'équation du 1er degré",
        statement: `Résoudre dans $\\mathbb{R}$ l'équation :\n$$${a}x ${sign} ${b} = ${c}$$`,
        type: "exact",
        answer: String(x),
        placeholder: `Ex: ${x}`,
        hint1: `Isole les termes en $x$ en soustrayant ou additionnant $${b}$ des deux côtés, puis divise par $${a}$.`,
        solution: `$$${a}x ${sign} ${b} = ${c}$$\n$$${a}x = ${c} ${sign === '+' ? '-' : '+'} ${b} = ${c - bVal}$$\n$$x = \\frac{${c - bVal}}{${a}} = ${x}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Équation avec x des deux côtés ax + b = cx + d)
      const a = this.randInt(3, 8);
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
      // Palier 1 : Socle (Identification de l'hypoténuse)
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Calcul hypoténuse triplet direct)
      const triplets = [[3, 4, 5], [6, 8, 10], [5, 12, 13]];
      const [a, b, c] = this.randChoice(triplets);

      return {
        chapterId: '4G1',
        tier: 2,
        title: "Calcul de l'hypoténuse",
        statement: `Dans un triangle $ABC$ rectangle en $A$, on a $AB = ${a}\\text{ cm}$ et $AC = ${b}\\text{ cm}$.\n**Calculer la longueur de l'hypoténuse $BC$.**`,
        type: "exact",
        answer: String(c),
        placeholder: `Ex: ${c}`,
        hint1: `D'après Pythagore : $BC^2 = AB^2 + AC^2 = ${a*a} + ${b*b}$.`,
        solution: `$$BC^2 = ${a}^2 + ${b}^2 = ${a*a} + ${b*b} = ${c*c} \\implies BC = \\sqrt{${c*c}} = ${c}\\text{ cm}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet / 4e (Calcul d'un côté de l'angle droit)
      const triplets = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]];
      const [a, b, c] = this.randChoice(triplets);

      return {
        chapterId: '4G1',
        tier: 3,
        title: "Calcul d'un côté de l'angle droit",
        statement: `Dans un triangle $RST$ rectangle en $S$, l'hypoténuse mesure $RT = ${c}\\text{ cm}$ et le côté $RS = ${a}\\text{ cm}$.\n**Calculer la longueur du côté $ST$.**`,
        type: "exact",
        answer: String(b),
        placeholder: `Ex: ${b}`,
        hint1: `Isole $ST^2 = RT^2 - RS^2 = ${c*c} - ${a*a}$.`,
        solution: `$$ST^2 = RT^2 - RS^2 = ${c}^2 - ${a}^2 = ${c*c} - ${a*a} = ${b*b} \\implies ST = ${b}\\text{ cm}$$`
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
      // Palier 1 : Socle (Volume d'un pavé droit)
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Volume d'un cylindre : coefficient pi)
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
    } else if (t === 3) {
      // Palier 3 : Brevet (Volume d'un cône ou d'une pyramide)
      const r = this.randChoice([3, 6]); // pour que R² soit divisible par 3 si besoin ou h multiple de 3
      const h = this.randChoice([6, 9, 12]);
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
      // Palier 1 : Socle (Moyenne simple de 4 valeurs)
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Moyenne pondérée simple avec effectif total = 10)
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
    } else if (t === 3) {
      // Palier 3 : Brevet (Probabilité d'un tirage dans une urne)
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
      // Palier 1 : Socle (Quatrième proportionnelle directe)
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Montant d'une remise en euros)
      const p = this.randChoice([10, 15, 20, 30, 50]);
      const prix = this.randChoice([60, 80, 120, 140, 200]);
      const remise = (prix * p) / 100;

      return {
        chapterId: '4P1',
        tier: 2,
        title: "Calcul du montant d'une réduction",
        statement: `Un vélo coûte $${prix}\\text{ €}$. Le magasin propose une remise de $${p}\\%$.\n**Quel est le montant de la remise en euros ?**`,
        type: "exact",
        answer: String(remise),
        placeholder: `Ex: ${remise}`,
        hint1: `Calcule $\\frac{${p}}{100} \\times ${prix}$.`,
        solution: `$$\\text{Remise} = ${prix} \\times \\frac{${p}}{100} = ${remise}\\text{ €}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet (Vitesse moyenne avec demi-heure ou quart d'heure)
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
      // Palier 1 : Socle (Multiplication et addition directe)
      const a = this.randInt(2, 9);
      const b = this.randInt(2, 8);
      const c = this.randInt(3, 9);
      const ans = a + b * c;

      return {
        chapterId: '5N1',
        tier: 1,
        title: "Priorité de la multiplication (5ème)",
        statement: `Calculer la valeur de l'expression numérique :\n$$A = ${a} + ${b} \\times ${c}$$`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: "La multiplication est prioritaire sur l'addition : calcule d'abord le produit.",
        solution: `$$A = ${a} + (${b} \\times ${c}) = ${a} + ${b * c} = ${ans}$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Parenthèses prioritaires)
      const a = this.randInt(3, 9);
      const b = this.randInt(2, 8);
      const c = this.randInt(3, 6);
      const ans = (a + b) * c;

      return {
        chapterId: '5N1',
        tier: 2,
        title: "Parenthèses prioritaires",
        statement: `Calculer la valeur de l'expression suivante :\n$$B = (${a} + ${b}) \\times ${c}$$`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: "Les calculs entre parenthèses sont prioritaires sur toutes les autres opérations.",
        solution: `$$B = (${a + b}) \\times ${c} = ${ans}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Deux paires de parenthèses ou 4 opérations)
      const a = this.randInt(12, 25);
      const b = this.randInt(2, 8);
      const c = this.randInt(3, 7);
      const d = this.randInt(2, 5);
      // (a - b) * (c + d)
      const ans = (a - b) * (c + d);

      return {
        chapterId: '5N1',
        tier: 3,
        title: "Produit de deux parenthèses",
        statement: `Calculer la valeur de l'expression :\n$$C = (${a} - ${b}) \\times (${c} + ${d})$$`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: "Calcule séparément l'intérieur de chaque parenthèse avant de multiplier les deux résultats.",
        solution: `$$C = (${a - b}) \\times (${c + d}) = ${ans}$$`
      };
    } else {
      // Palier 4 : Défi 4ème / Difficulté Maximale (Crochets et parenthèses imbriquées)
      // [48 - (3 * 7 - 5)] / 4 + 6 * (14 - 3 * 3) = [48 - 16] / 4 + 6 * 5 = 32 / 4 + 30 = 8 + 30 = 38
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
          ans: 35 // 7 + 28 = 35
        },
        {
          expr: "[75 - (5 \\times 9 - 10)] \\div 8 + 4 \\times (25 - 4 \\times 5)",
          step1: "5 \\times 9 - 10 = 45 - 10 = 35",
          step2: "75 - 35 = 40",
          step3: "40 \\div 8 = 5",
          step4: "25 - 4 \\times 5 = 25 - 20 = 5",
          step5: "4 \\times 5 = 20",
          ans: 25 // 5 + 20 = 25
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
        solution: `1. Parenthèse la plus intérieure du crochet : $${cfg.step1}$\n2. Intérieur du crochet : $${cfg.step2}$\n3. Division du crochet : $${cfg.step3}$\n4. Seconde parenthèse : $${cfg.step4}$\n5. Multiplication : $${cfg.step5}$\n6. Somme finale :\n$$E = ${cfg.ans}$$`
      };
    }
  },

  // --- 5N2 : Nombres relatifs (initiation, somme et différence) ---
  generate5N2(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Addition relatifs même signe)
      const a = this.randInt(3, 9);
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Addition relatifs signes contraires)
      const a = this.randInt(4, 15);
      const b = this.randInt(2, 12, [a]);
      // S = (-a) + b
      const ans = -a + b;

      return {
        chapterId: '5N2',
        tier: 2,
        title: "Addition de nombres relatifs de signes contraires",
        statement: `Calculer la somme suivante :\n$$S = (-${a}) + ${b}$$`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: "On prend le signe du nombre qui a la plus grande distance à zéro et on fait la différence des distances à zéro.",
        solution: `$$(-${a}) + ${b} = ${ans}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Soustraction de relatifs a - (-b))
      const a = this.randInt(-9, 9);
      const b = this.randInt(3, 12);
      // S = a - (-b) = a + b
      const ans = a + b;

      return {
        chapterId: '5N2',
        tier: 3,
        title: "Soustraction d'un nombre relatif négatif",
        statement: `Calculer la différence suivante :\n$$D = ${a} - (-${b})$$`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: "Soustraire un nombre relatif revient à ajouter son opposé : $a - (-b) = a + b$.",
        solution: `$$D = ${a} - (-${b}) = ${a} + ${b} = ${ans}$$`
      };
    } else {
      // Palier 4 : Défi 4ème / Difficulté Maximale (Chaîne avec crochets et multiples relatifs)
      // (-25) - [(-14) + 8 - (-6)] + (-11)
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
      // Palier 1 : Socle (Égalité de fractions par multiplication)
      const num = this.randInt(2, 5);
      const den = this.randInt(3, 7);
      const k = this.randInt(2, 5);
      const bigNum = num * k;
      const bigDen = den * k;

      return {
        chapterId: '5N3',
        tier: 1,
        title: "Fractions égales et proportionnalité",
        statement: `Compléter l'égalité de fractions pour trouver le nombre manquant $x$ :\n$$\\frac{${num}}{${den}} = \\frac{x}{${bigDen}}$$`,
        type: "exact",
        answer: String(bigNum),
        placeholder: `Ex: ${bigNum}`,
        hint1: `Remarque que le dénominateur est multiplié par $${k}$ ($${den} \\times ${k} = ${bigDen}$). Multiplie aussi le numérateur par $${k}$.`,
        solution: `$$\\frac{${num} \\times ${k}}{${den} \\times ${k}} = \\frac{${bigNum}}{${bigDen}} \\implies x = ${bigNum}$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Addition même dénominateur)
      const d = this.randInt(5, 11);
      const a = this.randInt(1, 4);
      const b = this.randInt(1, 4);
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
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Dénominateur multiple)
      const d = this.randChoice([3, 4, 5, 6]);
      const k = this.randChoice([2, 3]);
      const bigD = d * k;
      const a = this.randInt(1, 3);
      const b = this.randInt(1, 4);
      // a/d + b/bigD = (a*k + b)/bigD
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
        hint1: `Le dénominateur commun est $${bigD}$. Multiplie le haut et le bas de la première fraction par $${k}$.`,
        solution: `$$A = \\frac{${a} \\times ${k}}{${d} \\times ${k}} + \\frac{${b}}{${bigD}} = \\frac{${a * k}}{${bigD}} + \\frac{${b}}{${bigD}} = \\frac{${numTotal}}{${bigD}} = ${this.formatFraction(numTotal, bigD)}$$`
      };
    } else {
      // Palier 4 : Défi 4ème (Chaîne de 3 fractions avec parenthèses et dénominateurs multiples)
      // 7/4 - (1/2 + 3/8) = 14/8 - 7/8 = 7/8
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
      // Palier 1 : Socle (Division euclidienne quotient et reste)
      const b = this.randInt(4, 9);
      const q = this.randInt(5, 12);
      const r = this.randInt(1, b - 1);
      const a = b * q + r;

      return {
        chapterId: '5N4',
        tier: 1,
        title: "Division euclidienne (Quotient et Reste)",
        statement: `Dans la division euclidienne de $${a}$ par $${b}$ :\n**Quel est le reste de cette division ?**`,
        type: "exact",
        answer: String(r),
        placeholder: `Ex: ${r}`,
        hint1: `Écris l'égalité euclidienne $${a} = ${b} \\times q + r$ avec $0 \\le r < ${b}$.`,
        solution: `$$${a} = ${b} \\times ${q} + ${r}$$\nLe reste est donc :\n$$r = ${r}$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Critère de divisibilité par 3 ou 9)
      const mult = this.randChoice([3, 9]);
      const base = this.randInt(10, 40) * mult;
      const isDiv = Math.random() > 0.5;
      const testVal = isDiv ? base : base + 1;

      return {
        chapterId: '5N4',
        tier: 2,
        title: `Critère de divisibilité par ${mult}`,
        statement: `Le nombre $${testVal}$ est-il divisible par $${mult}$ ? (Répondre par 'oui' ou 'non')`,
        type: "exact",
        answer: isDiv ? "oui" : "non",
        placeholder: "oui ou non",
        hint1: `Un nombre est divisible par $${mult}$ si et seulement si la somme de ses chiffres est divisible par $${mult}$.`,
        solution: `Somme des chiffres de $${testVal}$ : ${String(testVal).split('').join(' + ')} = ${String(testVal).split('').reduce((s,c)=>s+parseInt(c),0)}.\nComme cette somme ${isDiv ? 'est' : "n'est pas"} divisible par $${mult}$, le nombre $${testVal}$ **${isDiv ? 'est divisible' : "n'est pas divisible"}** par $${mult}$.`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Nombres premiers < 30)
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
        hint1: "Un nombre premier n'admet que exactement deux diviseurs distincts : 1 et lui-même.",
        solution: isP ?
          `$${num}$ n'a pour diviseurs que 1 et $${num}$. C'est donc un **nombre premier**.` :
          `$${num}$ admet d'autres diviseurs (par exemple divisible par ${primes.find(p => num % p === 0)}). Ce **n'est pas** un nombre premier.`
      };
    } else {
      // Palier 4 : Défi 4ème (Problème de répartition avec contrainte d'emballage complet)
      // N objets à ranger dans des boîtes de C objets. Il faut que TOUS les objets soient rangés.
      // Nombre de boîtes nécessaires = ceil(N / C)
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
    }
  },

  // --- 5P1 : Proportionnalité 5ème (tableaux, pourcentages, échelles) ---
  generate5P1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Coefficient de proportionnalité)
      const k = this.randInt(3, 8);
      const x = this.randInt(2, 6);
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Compléter tableau - produit en croix)
      const a = this.randInt(2, 5);
      const b = this.randInt(6, 12);
      const c = a * this.randInt(2, 4);
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
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Appliquer un pourcentage)
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
    } else {
      // Palier 4 : Défi 4ème (Échelle de carte complexe 1:25 000 ou 1:50 000)
      const echelles = [
        { denom: 25000, cm: 8, km: 2 },    // 8 * 25 000 = 200 000 cm = 2 km
        { denom: 25000, cm: 12, km: 3 },   // 12 * 25 000 = 300 000 cm = 3 km
        { denom: 50000, cm: 6, km: 3 },    // 6 * 50 000 = 300 000 cm = 3 km
        { denom: 50000, cm: 10, km: 5 }    // 10 * 50 000 = 500 000 cm = 5 km
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
      // Palier 1 : Socle (Somme des angles = 180°)
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
        hint1: "La somme des trois angles dans n'importe quel triangle est toujours égale à $180^\circ$.",
        solution: `$$\\widehat{C} = 180^\\circ - (${a}^\\circ + ${b}^\\circ) = 180^\\circ - ${a + b}^\\circ = ${c}^\\circ$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Triangle isocèle : angles à la base)
      const sommet = this.randChoice([40, 50, 60, 70, 80]);
      const base = (180 - sommet) / 2;

      return {
        chapterId: '5G3',
        tier: 2,
        title: "Angles d'un triangle isocèle",
        statement: `Soit un triangle $EFG$ isocèle en $E$. L'angle au sommet principal mesure $\\widehat{E} = ${sommet}^\\circ$.\n**Quelle est la mesure de l'angle à la base $\\widehat{EFG}$ en degrés ?**`,
        type: "exact",
        answer: String(base),
        placeholder: `Ex: ${base}`,
        hint1: `Dans un triangle isocèle, les deux angles à la base sont égaux : $\\frac{180^\\circ - ${sommet}^\\circ}{2}$.`,
        solution: `$$\\widehat{EFG} = \\frac{180^\\circ - ${sommet}^\\circ}{2} = \\frac{${180 - sommet}^\\circ}{2} = ${base}^\\circ$$`
      };
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
      // Triangle 1 : rectangle en A, angle B1 = 35° => angle C1 = 55°
      // C est sur une droite, angle plat = 180° : angle C2 = 180 - 55 - 60 = 65°
      // Triangle 2 : angle D2 = 65°, angle E = ?
      const angleA = 90;
      const angleB = this.randChoice([30, 40, 50]);
      const angleC1 = 90 - angleB;
      const angleInter = this.randChoice([45, 60]);
      const angleC2 = 180 - angleC1 - angleInter; // triangle adjacent
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
      // Palier 1 : Socle (Conservation des longueurs par symétrie centrale)
      const l = this.randInt(5, 14);
      return {
        chapterId: '5G4',
        tier: 1,
        title: "Propriétés de la symétrie centrale",
        statement: `Le segment $[A'B']$ est le symétrique du segment $[AB]$ par rapport à un point $O$.\nSachant que $AB = ${l}\\text{ cm}$, **quelle est la longueur de $[A'B']$ ?**`,
        type: "exact",
        answer: String(l),
        placeholder: `Ex: ${l}`,
        hint1: "La symétrie centrale conserve les longueurs, les angles et le parallélisme.",
        solution: `La symétrie centrale conserve les longueurs :\n$$A'B' = AB = ${l}\\text{ cm}$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Centre de symétrie et milieu)
      const dist = this.randInt(3, 9);
      const total = dist * 2;

      return {
        chapterId: '5G4',
        tier: 2,
        title: "Centre de symétrie comme milieu",
        statement: `Le point $A'$ est le symétrique du point $A$ par rapport au point $O$.\nOn donne $OA = ${dist}\\text{ cm}$.\n**Quelle est la longueur totale du segment $[AA']$ ?**`,
        type: "exact",
        answer: String(total),
        placeholder: `Ex: ${total}`,
        hint1: `Le centre de symétrie $O$ est le milieu du segment $[AA']$. Donc $AA' = 2 \\times OA$.`,
        solution: `Le point $O$ étant le milieu de $[AA']$ :\n$$AA' = 2 \\times OA = 2 \\times ${dist} = ${total}\\text{ cm}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Propriété des diagonales du parallélogramme)
      const diag1 = this.randInt(6, 12);
      const demiDiag = diag1 / 2;

      return {
        chapterId: '5G4',
        tier: 3,
        title: "Diagonales d'un parallélogramme",
        statement: `Soit un parallélogramme $ABCD$ de centre $O$ (point d'intersection des diagonales).\nLa diagonale $[AC]$ mesure $AC = ${diag1}\\text{ cm}$.\n**Quelle est la longueur du segment $[OA]$ ?**`,
        type: "exact",
        answer: String(demiDiag),
        placeholder: `Ex: ${demiDiag}`,
        hint1: "Dans un parallélogramme, les diagonales se coupent en leur milieu.",
        solution: `Le point $O$ est le milieu de la diagonale $[AC]$ :\n$$OA = \\frac{AC}{2} = \\frac{${diag1}}{2} = ${demiDiag}\\text{ cm}$$`
      };
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

  // --- 5G6 : Aires et périmètres ---
  generate5G6(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);

    if (t === 1) {
      // Palier 1 : Socle (Périmètre et aire rectangle)
      const L = this.randInt(5, 10);
      const l = this.randInt(2, 5);
      const aire = L * l;

      return {
        chapterId: '5G6',
        tier: 1,
        title: "Aire d'un rectangle",
        statement: `Calculer l'aire d'un rectangle de longueur $L = ${L}\\text{ cm}$ et de largeur $l = ${l}\\text{ cm}$.`,
        type: "exact",
        answer: String(aire),
        placeholder: `Ex: ${aire}`,
        hint1: "Formule : $\\mathcal{A} = L \\times l$.",
        solution: `$$\\mathcal{A} = ${L} \\times ${l} = ${aire}\\text{ cm}^2$$`
      };
    } else if (t === 2) {
      // Palier 2 : Guidé (Aire d'un triangle rectangle)
      const a = this.randInt(4, 10);
      const b = this.randInt(3, 8);
      const aire = (a * b) / 2;

      return {
        chapterId: '5G6',
        tier: 2,
        title: "Aire d'un triangle rectangle",
        statement: `Calculer l'aire d'un triangle rectangle dont les côtés de l'angle droit mesurent $a = ${a}\\text{ cm}$ et $b = ${b}\\text{ cm}$.`,
        type: "exact",
        answer: String(aire),
        placeholder: `Ex: ${aire}`,
        hint1: "Formule : $\\mathcal{A} = \\frac{a \\times b}{2}$.",
        solution: `$$\\mathcal{A} = \\frac{${a} \\times ${b}}{2} = \\frac{${a * b}}{2} = ${aire}\\text{ cm}^2$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Aire d'un disque de rayon R : coeff pi)
      const r = this.randInt(3, 8);
      const coeff = r * r;

      return {
        chapterId: '5G6',
        tier: 3,
        title: "Aire d'un disque",
        statement: `Calculer la valeur exacte de l'aire d'un disque de rayon $R = ${r}\\text{ cm}$.\nDonner la réponse sous la forme $n\\pi\\text{ cm}^2$ (saisir uniquement le nombre $n$).`,
        type: "exact",
        answer: String(coeff),
        placeholder: `Ex: ${coeff}`,
        hint1: "Formule : $\\mathcal{A} = \\pi \\times R^2$. Calcule $R^2$.",
        solution: `$$\\mathcal{A} = \\pi \\times ${r}^2 = ${coeff}\\pi\\text{ cm}^2$$`
      };
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
      // Palier 1 : Socle (Effectif total)
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
    } else if (t === 2) {
      // Palier 2 : Guidé (Fréquence en fraction)
      const eff = this.randInt(3, 8);
      const total = this.randChoice([10, 20, 25]);
      const [sN, sD] = this.simplifyFraction(eff, total);

      return {
        chapterId: '5D1',
        tier: 2,
        title: "Fréquence d'une modalité sous forme de fraction",
        statement: `Sur un effectif total de $${total}$ élèves, $${eff}$ ont choisi l'espagnol comme langue vivante.\n**Quelle est la fréquence de ce groupe ?** (Donner le résultat sous forme de fraction irréductible)`,
        type: "exact",
        answer: `${sN}/${sD}`,
        placeholder: "Ex: 2/5",
        hint1: "Formule : $\\text{Fréquence} = \\frac{\\text{effectif}}{\\text{effectif total}}$.",
        solution: `$$\\text{Fréquence} = \\frac{${eff}}{${total}} = ${this.formatFraction(eff, total)}$$`
      };
    } else if (t === 3) {
      // Palier 3 : Brevet / 5e (Fréquence en pourcentage)
      const eff = this.randChoice([3, 5, 6, 8]);
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
      // Palier 4 : Défi 4ème (Angle dans un diagramme circulaire)
      // Effectif total = N, effectif de la catégorie = E. Angle = (E / N) * 360°
      // N = 20, E = 5 => (5 / 20) * 360 = 90°
      // N = 36, E = 9 => 90°
      // N = 30, E = 5 => (5 / 30) * 360 = 60°
      // N = 24, E = 8 => (8 / 24) * 360 = 120°
      const configs = [
        { tot: 20, eff: 5, deg: 90 },
        { tot: 30, eff: 5, deg: 60 },
        { tot: 24, eff: 8, deg: 120 },
        { tot: 36, eff: 4, deg: 40 }
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
      // Palier 1 : Socle (Réduction simple)
      const a = this.randInt(2, 7);
      const b = this.randInt(2, 7);
      const sum = a + b;
      return {
        chapterId: '5N5',
        tier: 1,
        title: "Réduction d'une expression littérale (5ème)",
        statement: `Réduire l'expression littérale suivante :\n$$A = ${a}x + ${b}x$$`,
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
        hint1: `Remplace $x$ par ${x} : $${a} \\times ${x} + ${b}$.`,
        solution: `$$B = ${a} \\times ${x} + ${b} = ${a * x} + ${b} = ${ans}$$`
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
        statement: `On considère l'égalité : $${a}x + ${b} = ${c}$.\n**Le nombre $${x}$ est-il solution de cette équation ?**`,
        type: "mcq",
        options: [
          `Oui, car $${a} \\times ${x} + ${b} = ${c}$`,
          `Non, car le membre de gauche vaut ${c + 2}`,
          `Non, car ${x} n'est pas un multiple de ${a}`,
          `On ne peut pas savoir`
        ],
        correctIndex: 0,
        hint1: `Calcule $${a} \\times ${x} + ${b}$ et compare avec ${c}.`,
        solution: `Pour $x = ${x}$ : $${a} \\times ${x} + ${b} = ${a * x} + ${b} = ${c}$. L'égalité est vérifiée.`
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
        statement: `Résoudre l'équation d'inconnue $x$ :\n$$${a}x = ${b}$$`,
        type: "exact",
        answer: String(x),
        placeholder: `Ex: ${x}`,
        hint1: `Divise les deux membres par ${a} : $x = \\frac{${b}}{${a}}$.`,
        solution: `$$x = \\frac{${b}}{${a}} = ${x}$$`
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
        statement: `Sur un axe gradué d'origine $O$, le point $A$ a pour abscisse $x_A = ${abs}$.\n**Quelle est la distance $OA$ ?**`,
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
        statement: `Dans un repère orthogonal, le point $M$ a pour coordonnées $(${x} ; ${y})$.\n**Quelle est l'ordonnée de ce point ?**`,
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
        statement: `Dans un repère, le point $A$ a pour coordonnées $(${x} ; ${y})$.\n**Quelles sont les coordonnées de son symétrique par rapport à l'axe des ordonnées ?**`,
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
    } else if (t === 2) {
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
    } else if (t === 3) {
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
      const L = this.randInt(5, 12);
      return {
        chapterId: '5G5',
        tier: 1,
        title: "Côtés opposés d'un parallélogramme (5ème)",
        statement: `Dans un parallélogramme $ABCD$, on donne $AB = ${L}\\text{ cm}$.\n**Quelle est la longueur du côté opposé $CD$ en cm ?**`,
        type: "exact",
        answer: String(L),
        placeholder: `Ex: ${L}`,
        hint1: "Dans un parallélogramme, les côtés opposés ont la même longueur.",
        solution: `Les côtés opposés d'un parallélogramme sont égaux : $CD = AB = ${L}\\text{ cm}$.`
      };
    } else if (t === 2) {
      const b = this.randInt(5, 11);
      const h = this.randInt(3, 8);
      const aire = b * h;
      return {
        chapterId: '5G5',
        tier: 2,
        title: "Aire d'un parallélogramme (5ème)",
        statement: `Un parallélogramme a pour base $b = ${b}\\text{ cm}$ et pour hauteur correspondante $h = ${h}\\text{ cm}$.\n**Calculer son aire en $\\text{cm}^2$ :**`,
        type: "exact",
        answer: String(aire),
        placeholder: `Ex: ${aire}`,
        hint1: "Formule : $\\text{Aire} = \\text{base} \\times \\text{hauteur}$.",
        solution: `$$\\text{Aire} = b \\times h = ${b} \\times ${h} = ${aire}\\text{ cm}^2$$`
      };
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
      const face = this.randInt(1, 6);
      const wrongChoice = `${face}/6` === "1/6" ? "2/6" : `${face}/6`;
      const opts = this.shuffle(["1/6", "1/3", "1/2", wrongChoice]);
      return {
        chapterId: '5D2',
        tier: 1,
        title: "Tirage d'un dé à 6 faces (5ème)",
        statement: `On lance un dé équilibré à 6 faces numérotées de 1 à 6. Quelle est la probabilité d'obtenir la face ${face} ?`,
        type: "mcq",
        options: opts,
        answer: "1/6",
        correctIndex: opts.indexOf("1/6"),
        hint1: `Il y a 1 seule face avec le nombre ${face} sur un total de 6 faces équiprobables.`,
        solution: `$$P(${face}) = \\frac{1}{6}$$`
      };
    } else if (t === 2) {
      const r = this.randInt(2, 5);
      const v = 10 - r;
      const pct = r * 10;
      return {
        chapterId: '5D2',
        tier: 2,
        title: "Probabilité en pourcentage dans une urne (5ème)",
        statement: `Une boîte contient $${r}$ boules rouges et $${v}$ boules vertes (soit 10 boules au total).\n**Quelle est la probabilité en pourcentage de tirer une boule rouge ?**`,
        type: "exact",
        answer: String(pct),
        placeholder: `Ex: ${pct}`,
        hint1: `Fraction : $\\frac{${r}}{10}$. Convertis en pourcentage.`,
        solution: `$$P(\\text{Rouge}) = \\frac{${r}}{10} = ${pct}\\%$$`
      };
    } else if (t === 3) {
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
    } else {
      const facesCount = this.randChoice([8, 10, 12]);
      const seuil = this.randInt(2, facesCount - 3);
      const nbIssues = facesCount - seuil;
      const num = nbIssues;
      const den = facesCount;
      const [sN, sD] = this.simplifyFraction(num, den);
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
        statement: `Un véhicule roule à la vitesse constante de $v = ${v}\\text{ km/h}$.\n**Quelle distance parcourt-il en $${temps}\\text{ heures}$ en km ?**`,
        type: "exact",
        answer: String(dist),
        placeholder: `Ex: ${dist}`,
        hint1: "Formule : $d = v \\times t$.",
        solution: `$$d = ${v} \\times ${temps} = ${dist}\\text{ km}$$`
      };
    } else if (t === 2) {
      const larg = this.randInt(3, 8);
      return {
        chapterId: '5P2',
        tier: 2,
        title: "Périmètre en fonction de la longueur (5ème)",
        statement: `Un rectangle a une largeur fixe de $${larg}\\text{ cm}$ et une longueur variable notée $x$.\n**Quelle est l'expression de son périmètre en fonction de $x$ ?**`,
        type: "mcq",
        options: [
          `2x + ${larg * 2}`,
          `${larg}x`,
          `x + ${larg * 2}`,
          `2x + ${larg}`
        ],
        correctIndex: 0,
        hint1: "$P = 2 \\times (x + \\text{largeur}) = 2x + 2 \\times \\text{largeur}$.",
        solution: `$$P = 2 \\times (x + ${larg}) = 2x + ${larg * 2}$$`
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
        statement: `Une location de matériel coûte un forfait fixe de $${fixe}\\text{ €}$ plus $${taux}\\text{ €}$ par jour d'utilisation $j$.\n**Quel est le coût total en euros pour $${h}\\text{ jours}$ ?**`,
        type: "exact",
        answer: String(total),
        placeholder: `Ex: ${total}`,
        hint1: `Calcule $${fixe} + ${taux} \\times ${h}$.`,
        solution: `$$\\text{Coût} = ${fixe} + ${taux} \\times ${h} = ${fixe} + ${taux * h} = ${total}\\text{ €}$$`
      };
    } else {
      const dist = this.randChoice([30, 45, 60, 75]);
      const v = dist * 2;
      return {
        chapterId: '5P2',
        tier: 4,
        title: "Défi : Vitesse en 30 minutes (5ème)",
        statement: `Un train parcourt $${dist}\\text{ km}$ en 30 minutes.\n**Quelle est sa vitesse moyenne en km/h ?**`,
        type: "exact",
        answer: String(v),
        placeholder: `Ex: ${v}`,
        hint1: "30 minutes = 0,5 heure. $v = d / t$.",
        solution: `$$v = \\frac{${dist}}{0{,}5} = ${v}\\text{ km/h}$$`
      };
    }
  },

  // --- 5A1 : Algorithmique et Scratch (5ème) ---
  generate5A1(tier = 1, mastery = 0) {
    const t = this.resolveTier(tier);
    if (t === 1) {
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
        solution: `$$\\text{Angle} = \\frac{360^\\circ}{${p.reps}} = ${p.angle}^\\circ$$`
      };
    } else if (t === 2) {
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
        solution: `$$${reps} \\times ${pas} = ${total}\\text{ pas}$$`
      };
    } else if (t === 3) {
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
        solution: `$$\\text{Angle} = \\frac{360^\\circ}{${p.n}} = ${p.angle}^\\circ$$`
      };
    } else {
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
        solution: `${p.reps} répétitions d'angle ${p.angle}° correspondent à ${p.name}.`
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
        statement: `Un triangle rectangle a une hypoténuse de longueur $${hyp}\\text{ cm}$.\n**Quel est le rayon de son cercle circonscrit en cm ?**`,
        type: "exact",
        answer: String(hyp / 2),
        placeholder: `Ex: ${hyp / 2}`,
        hint1: "Le diamètre du cercle circonscrit est l'hypoténuse. Le rayon vaut la moitié de l'hypoténuse.",
        solution: `$$R = \\frac{\\text{Hypoténuse}}{2} = \\frac{${hyp}}{2} = ${hyp / 2}\\text{ cm}$$`
      };
    } else if (t === 2) {
      const hyp = this.randInt(5, 13) * 2;
      return {
        chapterId: '4G2',
        tier: 2,
        title: "Médiane issue de l'angle droit (4ème)",
        statement: `Dans un triangle $ABC$ rectangle en $A$, l'hypoténuse $[BC]$ mesure $${hyp}\\text{ cm}$.\n**Quelle est la longueur de la médiane issue de $A$ en cm ?**`,
        type: "exact",
        answer: String(hyp / 2),
        placeholder: `Ex: ${hyp / 2}`,
        hint1: "La médiane relative à l'hypoténuse mesure la moitié de l'hypoténuse.",
        solution: `$$AM = \\frac{BC}{2} = \\frac{${hyp}}{2} = ${hyp / 2}\\text{ cm}$$`
      };
    } else if (t === 3) {
      const bc = this.randInt(6, 15) * 2;
      return {
        chapterId: '4G2',
        tier: 3,
        title: "Droite des milieux (4ème)",
        statement: `Dans un triangle $ABC$, $I$ et $J$ sont les milieux respectifs de $[AB]$ et $[AC]$. Sachant que $BC = ${bc}\\text{ cm}$, calculer la longueur $IJ$ en cm :`,
        type: "exact",
        answer: String(bc / 2),
        placeholder: `Ex: ${bc / 2}`,
        hint1: "D'après le théorème des milieux, la droite des milieux mesure la moitié du 3ème côté.",
        solution: `$$IJ = \\frac{BC}{2} = \\frac{${bc}}{2} = ${bc / 2}\\text{ cm}$$`
      };
    } else {
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
        statement: `Un triangle $${tri.name}$ est inscrit dans un cercle de diamètre $[${tri.d1}${tri.d2}]$. Que peut-on affirmer sur la nature du triangle $${tri.name}$ ?`,
        type: "mcq",
        options: opts,
        answer: correct,
        correctIndex: opts.indexOf(correct),
        hint1: `Le diamètre $[${tri.d1}${tri.d2}]$ est l'hypoténuse. Le sommet opposé est $${tri.opp}$.`,
        solution: `Si un triangle est inscrit dans un cercle ayant pour diamètre l'un de ses côtés, alors il est rectangle au sommet opposé (en $${tri.opp}$).`
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
        statement: `Un segment mesure $${L}\\text{ cm}$. Par une translation, quelle est la longueur de son segment image en cm ?`,
        type: "exact",
        answer: String(L),
        placeholder: `Ex: ${L}`,
        hint1: "La translation est un glissement qui conserve les longueurs.",
        solution: `La translation conserve les longueurs, donc le segment image mesure aussi $${L}\\text{ cm}$.`
      };
    } else if (t === 2) {
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
    } else if (t === 3) {
      const r = this.randInt(3, 9);
      return {
        chapterId: '4G3',
        tier: 3,
        title: "Rayon d'un cercle transformé (4ème)",
        statement: `Un cercle de rayon $${r}\\text{ cm}$ subit une translation. Quel est le rayon du cercle image en cm ?`,
        type: "exact",
        answer: String(r),
        placeholder: `Ex: ${r}`,
        hint1: "La translation conserve les aires et les rayons des cercles.",
        solution: `La translation ne déforme pas les figures, le rayon reste de $${r}\\text{ cm}$.`
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
        statement: `Dans un repère, une translation décale les points de $+${dx}$ en abscisse et $+${dy}$ en ordonnée.\nQuelle est l'abscisse de l'image du point $M(${x} ; ${y})$ ?`,
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
        solution: `$$P(\\text{Perdant}) = 1 - \\frac{${gag}}{100} = ${perd}$$`
      };
    } else if (t === 3) {
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
        statement: `Soit la fonction définie par $f(x) = ${a}x + ${b}$.\n**Calculer l'image de $${x}$ par la fonction $f$ :**`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: `Remplace $x$ par ${x} dans $f(x)$ : $${a} \\times ${x} + ${b}$.`,
        solution: `$$f(${x}) = ${a} \\times ${x} + ${b} = ${ans}$$`
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
        statement: `On donne le programme : « Choisir un nombre, ajouter $${b}$, multiplier par $${a}$ ».\n**Quel résultat obtient-on pour le nombre de départ $${x}$ ?**`,
        type: "exact",
        answer: String(ans),
        placeholder: `Ex: ${ans}`,
        hint1: `Calcul : $(${x} + ${b}) \\times ${a}$.`,
        solution: `$$(${x} + ${b}) \\times ${a} = ${x + b} \\times ${a} = ${ans}$$`
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
        statement: `Soit la fonction $g(x) = ${a}x + ${b}$.\n**Déterminer l'antécédent de $${res}$ par la fonction $g$ :**`,
        type: "exact",
        answer: String(x),
        placeholder: `Ex: ${x}`,
        hint1: `Résous l'équation : $${a}x + ${b} = ${res}$.`,
        solution: `$$${a}x + ${b} = ${res} \\implies ${a}x = ${res - b} \\implies x = \\frac{${res - b}}{${a}} = ${x}$$`
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
        statement: `Un script contient : « mettre V à ${init} », puis « ajouter ${add} à V ».\n**Quelle est la valeur finale de la variable V ?**`,
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
        statement: `Bloc Scratch : « Si N > ${limit} alors mettre R à 25 sinon mettre R à 8 ».\nSi la variable N vaut $${n}$, quelle sera la valeur de R ?`,
        type: "exact",
        answer: "8",
        placeholder: "Ex: 8",
        hint1: `Le test $${n} > ${limit}$ est FAUX, donc on exécute la branche « sinon ».`,
        solution: `Comme $${n} \\le ${limit}$, la condition est fausse et la variable $R$ prend la valeur 8.`
      };
    } else if (t === 3) {
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
        solution: `La condition $${x} > 0$ est vraie, le lutin affiche $3 \\times ${x} = ${3 * x}$.`
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
        statement: `Compteur démarre à 0. Script : « répéter jusqu'à Compteur >= ${seuil} : ajouter ${pas} à Compteur ».\nQuelle est la valeur finale de Compteur ?`,
        type: "exact",
        answer: String(val),
        placeholder: `Ex: ${val}`,
        hint1: "La boucle s'arrête dès que Compteur atteint ou dépasse " + seuil + ".",
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

